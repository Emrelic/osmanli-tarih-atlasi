# -*- coding: utf-8 -*-
# koja1: Kore yarisi uretici + Japonya parcasi (fork) birlestirici -> nihai 5 dosya
import json, os, sys, io
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from _kr_cok2 import *
from _gz import jdn_jul

def gunno(s):
    y, m, d = s.split('-'); return jdn_jul(int(y), int(m), int(d))

ETK = ['toprak-degisimi', 'konu-askeri', 'dogu-500-1281']
ENDEV = {'Sanggyeong (Longquanfu)': 'E929'}

def specs_of(ev_key, ek):
    return list(EV[ev_key]['specs']) + list(ek or [])

def kes_gun(e):
    return {'gun': e['t'] + ' (gün hassasiyeti)', 'ay': 'ay hassasiyeti (gün yok)', 'yil': 'yıl hassasiyeti (gün yok)'}[e['kes']]

yama, yeniyer, sinir = [], [], []

def sinir_item(yer, t_ev, old, new, ek, beyan, idx):
    e = EV[t_ev]
    if new == '__BOSLUK__':
        tur, devlet, taraflar = 'toprak-kayip', old, [old]
        b = '%s: %s hâkimiyeti sona erdi (yeni sahip yok, boşluk)' % (yer, AD[old])
        d = '%s %s hâkimiyetini kaybetti; yeni sahip kaynakta yok (BOŞLUK dilimi). %s' % (yer, AD[old], e['ozet'])
    else:
        tur, devlet = 'toprak-kazanc', new
        taraflar = [new] + ([old] if old not in (None, '__BOSLUK__') else [])
        b = '%s: %s → %s' % (yer, AD.get(old, old) if old else 'önceki sahip', AD[new])
        d = '%s %s\'dan %s\'e geçti. %s' % (yer, AD.get(old, '?') if old else 'önceki sahip', AD[new], e['ozet'])
        if old is None:
            b = '%s: %s hâkimiyeti başladı' % (yer, AD[new]); d = '%s %s hâkimiyetine girdi. %s' % (yer, AD[new], e['ozet'])
    return {
        't': e['t'], 'devlet': devlet, 'taraflar': taraflar, 'b': b, 'tur': tur, 'onem': 2, 'dunya': 1, 'kapsam': 'dis',
        'yer': yer, 'yer_id': yer, 'etiket': ETK, 'd': d,
        'kaynak': kaynak(*specs_of(t_ev, ek)) + (' · ' + beyan if beyan else ''),
        'gun': kes_gun(e), 'kesinlik': e['kes'], 'sinir_id': [], 'ic_not': (e['ic_not'] + (' | ' + beyan if beyan else '')).strip(),
        **({'ic_not_takvim': e['takvim']} if e['takvim'] else {})}

def slices(yer, anahtar, chain, son_t):
    out = []
    for i, (evk, d, ek, beyan) in enumerate(chain):
        f = UFUK if evk == 'UFUK' else EV[evk]['t']
        t = son_t if i == len(chain) - 1 else (EV[chain[i + 1][0]]['t'])
        assert gunno(f) < gunno(t), (yer, f, t)
        if evk == 'UFUK':
            kay = kaynak(*UF[anahtar]) + ' | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; MS 500 öncesinden süren sahiplik)' + (': ' + beyan if beyan else '')
            kes = 'yil'
        else:
            if d == '__BOSLUK__':
                kay = beyan + ' | geçiş kaydı: ' + kaynak(*specs_of(evk, ek))
            else:
                kay = kaynak(*specs_of(evk, ek)) + (' · ' + beyan if beyan else '')
            kes = EV[evk]['kes']
        out.append({'f': f, 't': t, 'd': d, 'kesinlik': kes, 'kaynak': kay})
    return out

for yer, (anahtar, kip, son_t, zbasi, chain) in CH.items():
    cs = CH_SON.get(yer)
    if yer in ENDEV:
        son_t = EV[ENDEV[yer]]['t']
    if son_t is None:
        son_t = EV[cs[0]]['t']  # Liaoyang: son dilim yok, son t = son olayin gunu (sinir maddesi icin); slice uretiminde son dilimin t'si
    sl = slices(yer, anahtar, chain, son_t)
    # sinir maddeleri
    prev = None
    for i, (evk, d, ek, beyan) in enumerate(chain):
        if evk != 'UFUK':
            sinir.append(sinir_item(yer, evk, prev, d, ek, beyan, i))
        prev = d
    if yer in ENDEV:
        sinir.append(sinir_item(yer, ENDEV[yer], prev, '__BOSLUK__', [], '', 99))
    if cs:
        sinir.append(sinir_item(yer, cs[0], prev, cs[1], [], '', 98))
    if kip == 'yama':
        rec = {'ad': yer, 'koordinat': 'atlas mevcut kayıt (yeni koordinat yok)', 'mevcut_zincir_basi': zbasi, 's_onek': sl}
        if yer == 'Liaoyang':
            rec['on_gerekli'] = '0500-01-01 → 0919-01-01 (Liaoyang\'ın Goguryeo/Tang/Balhae dönemi başka iş)'
            rec['devam_gerekli'] = '1030-09-25 → mevcut zincir başı (Liao dönüşü, Jin ve Doğu Xia dilimleri başka iş)'
        yama.append(rec)
    else:
        yeniyer.append((yer, anahtar, sl))

# ---- yeni yerlesim kayitlari ----
YER = {
 'Gimhae': dict(lat=35.234, lon=128.881, g=1, k=3, kur=None,
   kay="koordinat: GeoNames 1842943 'Kimhae' (35.23417, 128.88111) + Wikidata Q42082 Gimhae (35.23417, 128.88111) + OpenStreetMap Nominatim 'Gimhae' (35.2279, 128.8895); üç tanık 1,2 km içinde",
   not_="Geumgwan Gaya başkenti (Garak-guk gi: Suro'nun sarayı) = bugünkü Gimhae şehri (Goryeosa j.57 «金州本駕洛國»). kur yazılmadı: Samguk yusa'nın MS 42 tarihi geleneksel (efsanevi), tarihli ilk tanık değil. Zincir 1281-01-01'de biter; sonrası bu kümenin işi değil."),
 'Goryeong (Daegaya)': dict(lat=35.731, lon=128.269, g=2, k=4, kur=None,
   kay="koordinat: Wikidata Q50207 Goryeong County (35.73028, 128.26889) + OpenStreetMap Nominatim 'Goryeong-eup' (35.7331, 128.2688; 35.7294, 128.2714); iki tanık 1 km içinde (GeoNames cities1000'de kayıt yok)",
   not_="Daegaya başkenti (Goryeosa j.57 «高靈郡本大伽倻國...新羅眞興王滅之»). kur yazılmadı (ilk tarihli yazılı tanık 479, Nan Qi shu: 加羅國 — Daegaya özdeşliği açık değil). Zincir 1281-01-01'de biter."),
 'Sabi (Buyeo)': dict(lat=36.275, lon=126.910, g=1, k=3, kur='0538-01-01',
   kay="koordinat: GeoNames 1838508 'Buyeo' (36.27472, 126.90906) + Wikidata Q50247 Buyeo County (36.28194, 126.9125) + OpenStreetMap Nominatim 'Buyeo-eup' (36.2757, 126.9111); üç tanık 1 km içinde",
   not_="kur = 0538-01-01: Baekje'nin Sabi'ye başkent taşıması (Samguk sagi Seong 16, yıl hassasiyeti) — şehrin ilk yazılı tanığı değil başkent oluşudur. Zincir 1281-01-01'de biter; Hubaekje dilimi yazılamadı (bkz. s: beyanı)."),
 'Sanggyeong (Longquanfu)': dict(lat=44.130, lon=129.142, g=1, k=3, kur='0755-01-01',
   kay="koordinat: Wikidata Q709753 Shangjing Longquanfu arkeolojik alan (44.13056, 129.14167) + OpenStreetMap Nominatim 'Bohai Town, Ning'an' (44.1188, 129.1606); iki tanık 2 km içinde (Pleiades/GeoNames cities1000'de kayıt yok)",
   not_="Balhae Sanggyeong (Longquanfu) = Dongjingcheng/Bohai kasabası (Ning'an yakını); mevcut 'Ningguta' kaydından (44.35, 129.47) farklı yer (≈30 km). kur 0755 = «天寶末» (755-756) alt sınırı. Zincir Dongdan'ın nakil emriyle (0929-01-01) biter."),
}
yer_out = []
for yer, anahtar, sl in yeniyer:
    m = YER[yer]
    rec = {'ad': yer, 'tur': 'sehir', 'lat': m['lat'], 'lon': m['lon'], 'g': m['g'], 'k': m['k']}
    if m['kur']:
        rec['kur'] = m['kur']; rec['kesinlik'] = 'yil'
    rec['s'] = sl; rec['not'] = m['not_']; rec['kaynak'] = m['kay']
    yer_out.append(rec)

# ---- kronoloji_cok ----
cok_out = []
for c in C:
    it = {'t': c['t'], 'b': c['b'], 'tur': c['tur'], 'onem': c['onem'], 'dunya': c['dunya'], 'kapsam': 'dis',
          'etiket': [c['konu'], 'dogu-500-1281'], 'yer': c['yer'], 'taraflar': c['taraflar'], 'd': c['d'],
          'kaynak': kaynak(*c['specs']), 'gun': c['gun'], 'kesinlik': c['kes'], 'ic_not': c['ic_not']}
    if c['tak']:
        it['ic_not_takvim'] = c['tak']
    cok_out.append(it)

# ---- kunye: Gaya ----
gaya_kay = kaynak((YUSA, '屬後漢世祖光武帝建武十八年壬寅三月禊洛之日'), (YUSA, '保定二年壬午九月。新羅第二十四君真興王。興兵薄伐。'),
                  (SS04, '十九年，金官國主金仇亥，與妃及三子', '以本國爲食邑。'), (SS04, '九月，加耶叛，王命異斯夫討之，斯多含副之。', '一時盡降。'),
                  (NS19, '廿三年春正月。新羅打滅任那官家。'), (G57, '有國，凡四百九十一年，新羅法興王，旣受降'), (NQ58, '加羅國，三韓種也。建元元年，國王荷知使來獻。'))
GAYA = {
 'id': 'gaya-konfederasyonu', 'ad': 'Gaya Konfederasyonu', 'tur': 'federasyon', 'bolge': 'dogu-asya',
 'f': '0042-01-01', 't': '0562-01-01', 'baskent': 'Geumgwan Gaya (Gimhae) → Daegaya (Goryeong)',
 'ozet': "Güney Kore'de Nakdong Nehri havzasında bağımsız Gaya (Garak) şehir devletlerinin gevşek konfederasyonu; önce Geumgwan Gaya (Gimhae), 5. yüzyıldan sonra Daegaya (Goryeong) öncülüğünde; Silla 532'de Geumgwan'ı, 562'de Daegaya'yı yıkarak sona erdirdi.",
 'kaynak': gaya_kay, 'kesinlik': {'f': 'yil', 't': 'yil'}, 'boya_gerekli': True,
 'ic_not': "f: Samguk yusa «Garak-guk gi» geleneksel kuruluş MS 42 (建武十八年壬寅 3. ay; efsanevi — Suro; yıl hassasiyeti, tarihsel tanık değil). t ÇELİŞKİ: Samguk sagi Beopheung 19 (532) Geumgwan Gaya teslim; Jinheung 23 (562) Gaya isyanı ve Daegaya'nın düşüşü; Nihon Shoki Kinmei 23 (562) 1. ay «新羅打滅任那官家»; Samguk yusa «保定二年壬午九月» (562) ve aynı metin «兩存之» (532/562 iki tarihi bırakır). Künye t = 562 (konfederasyonun son üyesi Daegaya) alındı; 532 Geumgwan'ın ayrı düşüşü olarak yerleşim zincirinde ve maddede. Girdi t=0562-09-01 idi; gün/ay çelişkisi (SS 9. ay, NS 1. ay) nedeniyle yıl hassasiyetine indirildi. 'tur': VERI-YAPISI'nda 'konfederasyon' yok: 'federasyon' kullanıldı (yeni tür önerisi bkz. RAPOR).",
 'kronoloji': [
  {'t': '0042-01-01', 'tur': 'kurulus', 'b': 'Gaya (Garak) konfederasyonu geleneksel olarak kuruldu (Suro, Geumgwan Gaya)',
   'kaynak': kaynak((YUSA, '屬後漢世祖光武帝建武十八年壬寅三月禊洛之日')), 'kesinlik': 'yil',
   'ic_not': 'Geleneksel/efsanevi tarih (Samguk yusa Garak-guk gi, Goryeo Munjong dönemi derlemesi, ~11. yy); çağdaş akademik kaynak bu oturumda açılmadı. Yıl hassasiyeti.'},
  {'t': '0562-01-01', 'tur': 'son', 'b': 'Silla Daegaya\'yı yıktı; Gaya Konfederasyonu sona erdi',
   'kaynak': kaynak((SS04, '九月，加耶叛，王命異斯夫討之，斯多含副之。', '一時盡降。'), (NS19, '廿三年春正月。新羅打滅任那官家。'), (YUSA, '保定二年壬午九月。新羅第二十四君真興王。興兵薄伐。')),
   'kesinlik': 'yil', 'ic_not': 'ÇELİŞKİ: Samguk sagi 9. ay, Nihon Shoki 1. ay (562); yıl hassasiyeti. Geumgwan Gaya 532 ayrı.'}]}

# ---- Japonya parcasi (fork) ----
def jl(n):
    return json.load(open(os.path.join(HERE, '_part_jp_%s.json' % n), encoding='utf-8'))
kunye_all = jl('kunye') + [GAYA]
cok_all = jl('cok') + cok_out
sinir_all = jl('sinir') + sinir
yer_all = jl('yer') + yer_out
yama_all = jl('yama') + yama

def yaz(fn, glob, arr, ust):
    s = '// -*- coding: utf-8 -*-\n// ' + ust + '\nwindow.' + glob + ' = ' + json.dumps(arr, ensure_ascii=False, indent=1) + ';\n'
    open(os.path.join(HERE, fn), 'w', encoding='utf-8').write(s)
yaz('kunye_yeni.js', 'DOGU_KUNYE_KOJA1', kunye_all, 'koja1 — yeni künyeler: abe-mutsu (Japonya), gaya-konfederasyonu (Kore). Öteki KUNYE_YOK/MS1 girdileri için bkz. RAPOR.md.')
yaz('kronoloji_cok_dogu_koja1.js', 'KRONOLOJI_COK_DOGU_KOJA1', cok_all, 'koja1 — kronoloji (toprak-kazanc/kayip dışı maddeler). Toprak değişimleri kronoloji_sinir_dogu_koja1.js\'dedir.')
yaz('kronoloji_sinir_dogu_koja1.js', 'KRONOLOJI_SINIR_DOGU_KOJA1', sinir_all, 'koja1 — yerleşim sahip devir günleri (Değişmez 2 evreni); her madde yama_koja1.js / yerlesimler_dogu_koja1.js\'deki bir s: kırılmasına karşılık gelir.')
yaz('yerlesimler_dogu_koja1.js', 'YERLESIMLER_DOGU_KOJA1', yer_all, 'koja1 — yeni yerleşimler (Kore: Gimhae, Goryeong, Sabi, Sanggyeong). Mevcut yerleşimler için yama_koja1.js.')
yaz('yama_koja1.js', 'YAMA_DOGU_KOJA1', yama_all, 'koja1 — MEVCUT yerleşimlere s: öneki (yama aracı ayrı iş).')

print(json.dumps({'kunye': len(kunye_all), 'cok': len(cok_all), 'cok_kr': len(cok_out), 'sinir': len(sinir_all), 'sinir_kr': len(sinir),
                  'yer': len(yer_all), 'yama': len(yama_all), 'yama_kr': len(yama),
                  's_kr_yama': sum(len(y['s_onek']) for y in yama), 's_kr_yeni': sum(len(y['s']) for y in yer_out),
                  'bosluk_kr': sum(1 for y in yama for s in y['s_onek'] if s['d'] == '__BOSLUK__')}, ensure_ascii=False))
