# -*- coding: utf-8 -*-
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _veri import KUNYE, COK
from _veri2 import T
from _veri_kaynak import *
from _gzlib import takvim

OUT = os.path.dirname(os.path.abspath(__file__))
def js(name, var, data, baslik):
    with open(os.path.join(OUT, name), 'w', encoding='utf-8') as f:
        f.write('// -*- coding: utf-8 -*-\n' + baslik + '\nwindow.' + var + ' = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n')

# 1) künye
js('kunye_yeni.js', 'DOGU_KUNYE_CIN3', KUNYE,
   '// cin3 — yeni künyeler: da-tianxing, da-yining, ba-devleti. heiyue-purang YAZILMADI (kaynak bulunamadı; bkz. RAPOR.md).')
# 2) anlatı kronoloji
COK_S = sorted(COK, key=lambda m: m['t'])
js('kronoloji_cok_dogu_cin3.js', 'KRONOLOJI_COK_DOGU_CIN3', COK_S,
   '// cin3 — anlatı maddeleri (toprak-kazanc/kayip maddeleri kronoloji_sinir_dogu_cin3.js\'dedir).')
# 3) sınır (devir günleri)
SINIR = []
for x in sorted(T, key=lambda x: (x['yer_id'], x['t'])):
    taraflar = [x['yeni']] + ([x['eski']] if x['eski'] else [])
    m = {'t': x['t'], 'devlet': x['yeni'], 'taraflar': taraflar, 'b': x['b'], 'tur': 'toprak-kazanc', 'onem': 2, 'dunya': 1,
         'kapsam': 'dis', 'yer': x['yer'], 'yer_id': x['yer_id'], 'etiket': ['toprak-degisimi', 'konu-askeri', 'dogu-500-1281'],
         'd': x['d'], 'kaynak': x['kaynak'], 'gun': x['gun'], 'kesinlik': x['kes'], 'sinir_id': []}
    if x['ic_not']: m['ic_not'] = x['ic_not']
    if x['gz']: m['ic_not_takvim'] = takvim(x['t'], x['gz'])
    SINIR.append(m)
SINIR.sort(key=lambda m: m['t'])
js('kronoloji_sinir_dogu_cin3.js', 'KRONOLOJI_SINIR_DOGU_CIN3', SINIR,
   '// cin3 — yerleşim sahip devir günleri (Değişmez 2 evreni). Her madde yama_dogu_cin3.js\'deki bir s: kırılmasına karşılık gelir.')
# 4) yerleşim (yeni kayıt YOK) + yama
js('yerlesimler_dogu_cin3.js', 'YERLESIMLER_DOGU_CIN3', [],
   '// cin3 — YENİ yerleşim kaydı YOK: Pleiades Çin/Tibet kapsamıyla örtüşmediği için çift tanıklı koordinat doğrulanamadı (RAPOR.md §2). Mevcut kayıtlara yama: yama_dogu_cin3.js')

bykey = {}
for x in T: bykey[(x['yer_id'], x['t'])] = x
def d_(c, k): return bykey[(c, k)]
def dilim(c, f, t, d_id, src, kesf, kest):
    return {'f': f, 't': t, 'd': d_id, 'kesinlik': {'f': kesf, 't': kest}, 'kaynak': src}
def kaynak_of(x):
    s = x['kaynak']
    if x['ic_not']: s += ' · BEYAN: ' + x['ic_not']
    return s

LAT = {'Kaifeng': (34.797, 114.307), 'Luoyang': (34.663, 112.434), 'Çengdu (Chengdu)': (30.572, 104.066), 'Taiyuan': (37.870, 112.548),
       'Nanking (Nanjing)': (32.060, 118.797), 'Hangzhou': (30.274, 120.155), 'Dali': (25.606, 100.267), 'Xining': (36.617, 101.778),
       'Yinchuan (Ningxia)': (38.487, 106.231)}
YAMA = []
def zincir(ad, tarihler, son, mevcut, devam, ek_not=None, bas=None):
    """tarihler: devir günleri sırası (T anahtarları); son: son dilimin bitişi (None => son dilim yazılmaz, devir günü önceki dilimin bitişidir)"""
    xs = [d_(ad, t) for t in tarihler]
    s = []
    if bas:  # kırılmayan başlangıç dilimi
        s.append(bas)
    for i, x in enumerate(xs):
        if i + 1 < len(xs):
            e, ek = xs[i + 1]['t'], xs[i + 1]['kes']
        elif son:
            e, ek = son[0], son[1]
        else:
            continue
        s.append(dilim(ad, x['t'], e, x['yeni'], kaynak_of(x), x['kes'], ek))
    # bas dilimi bitişini sonraki devre bağla
    YAMA.append({'ad': ad, 'lat': LAT[ad][0], 'lon': LAT[ad][1], 'koordinat': 'atlas mevcut kayıt (yeni koordinat yok)',
                 'mevcut_ilk_s': mevcut, 's': s, 'devam_gerekli': devam, 'not': ek_not or ''})

zincir('Kaifeng', ['0937-01-11', '0947-01-10', '0947-07-01', '0951-02-13', '0960-02-04'], ('1000-01-01', 'yil'),
       'song 1000-01-01 → 1127-01-01 (yerlesimler_asya.js)', 'Kaifeng 1127-01-01 → 1281: ms1 zinciri (Jin/boşluk) — aşağıdaki ek parçalarla birleştirilecek',
       'Önceki sahip sonraki-tang-5hanedan künyesi t=0936-01-01 → 0937-01-11 düzeltmesi gerek. Song dilimi (960-02-04 → 1000-01-01) mevcut song dilimiyle (1000-01-01 →) aynı sahip; birleştirilebilir.')
zincir('Kaifeng', ['1127-04-20'], ('1127-05-16', 'gun'), 'song 1000-01-01 → 1127-01-01', 'EK PARÇA 1127-04-20 → 1127-05-16 (Da Chu); öncesi/sonrası Song-Jin geçişi (1127-01-01 ↔ 1127-04-20 ve 1127-05-16 →) başka kümede',
       'Mevcut Song dilimi t=1127-01-01 (yıl); Jin ordusu Kaifeng\'e girişi 1127 başında olduğundan 1127-01-01 ile 1127-04-20 arası Song/Jin belirsizdir.')
zincir('Kaifeng', ['1130-10-12'], ('1138-01-02', 'gun'), 'song 1000-01-01 → 1127-01-01', 'EK PARÇA 1130-10-12 → 1138-01-02 (Da Qi); 1138-01-02 → Jin (devir günü sinir dosyasında), Jin\'in sonraki zinciri başka kümede',
       'Kaifeng 1127-05-16 → 1130-10-12 arası (Song Zong Ze/ Du Chong, Jin) bu kümede YOK.')
zincir('Luoyang', ['0937-01-11', '0947-01-10', '0947-06-23', '0951-02-13', '0960-02-04'], None, 'yuan-hanedani 1281-01-01 → (yerlesimler_asya.js)',
       'Luoyang 960-02-04 → 1281: Song dilimi başlangıcı 960-02-04 (sinir dosyasında); Song→Jin devri ve Jin/Moğol zinciri bu kümede YOK',
       'Son dilim (zhou 951-02-13 → 960-02-04) 960-02-04\'te biter; Song dilimi başlar ama bitişi bilinmediği için yazılmadı.')
zincir('Çengdu (Chengdu)', ['0934-03-16', '0965-02-17'], None, 'yuan-hanedani 1281-01-01 → (yerlesimler_asya.js)',
       'Chengdu 965-02-17 → 1281: Song dilimi başlangıcı 965-02-17 (sinir dosyasında); Song\'un Chengdu\'daki sonu (Moğollar 1236 Chengdu\'ya girdi: Yuan shi 2, ay düzeyinde 「冬十月，闊端入成都」) ve 1236-1281 zinciri bu kümede YOK',
       'Sahibi bir önceki dönem: Sonraki Tang (934-03-16 öncesi); ilk dilim Sonraki Shu.')
zincir('Taiyuan', ['0936-11-28', '0947-03-10', '0951-02-24', '0979-06-03', '1126-09-21'], None, 'yuan-hanedani 1281-01-01 → (yerlesimler_asya.js)',
       'Taiyuan 1126-09-21 → 1281: Jin dilimi başlangıcı 1126-09-21 (sinir dosyasında); Jin→Moğol devri (1230\'lar) bu kümede YOK',
       'Önceki sahip sonraki-tang-5hanedan (936-11-28 öncesi). Taiyuan\'ın eski şehri 979-06-15\'te yakıldı (kronoloji maddesi); atlas noktası bugünkü şehir.')
zincir('Nanking (Nanjing)', ['0937-11-10', '0976-01-01'], None, 'ming-hanedani 1368-01-23 → (yerlesimler_asya.js; kd: bölümlü)',
       'Nanjing 976-01-01 → 1368: Song dilimi başlangıcı 976-01-01; Song→Jin/Moğol/Yuan geçişleri (1129 Jin işgali, 1275 Yuan) bu kümede YOK',
       'İlk dilim guney-tang 937-11-10 (yang-wu\'dan devir; yang-wu dilimi başka kümede).')
zincir('Hangzhou', ['0978-06-09'], ('1000-01-01', 'yil'), 'song 1000-01-01 → 1276-01-01 (yerlesimler_asya.js)', '—',
       'Önceki sahip wuyue (978-06-09 öncesi, başka küme).')
zincir('Dali', ['0928-01-01', '0929-01-01', '0937-01-01', '1254-01-02'], ('1281-01-01', 'yil'), 'yuan-hanedani 1281-01-01 → 1382-01-06 (yerlesimler_asya.js)', '—',
       'Dali 928 öncesi (Nanzhao/Da Changhe) başka küme. 1254-01-02 → 1281-01-01 arası mogol-imparatorlugu yazıldı (Yuan ilanı 1271-12-18 için ayrı dilim açılmadı: ±30 gün kronoloji maddesi yok).')
zincir('Xining', ['1104-05-08'], None, 'yuan-hanedani 1281-01-01 → (yerlesimler_asya.js)',
       'Xining 1104-05-08 → 1281: Song dilimi başlangıcı 1104-05-08 (sinir dosyasında); Song/Jin/Xia/Moğol zinciri (1104-1281) bu kümede YOK',
       'ÖNCEKİ DİLİM (1032-01-01 → 1104-05-08, tsongkha) aşağıda ayrı: yamada ilk dilim olarak yazıldı.',
       bas=dilim('Xining', '1032-01-01', '1104-05-08', 'tsongkha', SS492 + ' · BEYAN: Qingtang Tsongkha başkenti olarak 明道初 (1032-1033) — yıl 1032 alt sınır; Qingtang\'ın 1032 öncesi sahibi (Tubo/Tang) bu kümede YOK. kur YAZILMADI.', 'yil', 'gun'))
zincir('Yinchuan (Ningxia)', ['1227-01-01'], ('1281-01-01', 'yil'), 'yuan-hanedani 1281-01-01 → 1368-04-01 (yerlesimler_asya.js)', '—',
       'Başlangıç dilimi batı xia 1038-01-01 (bas); Xingzhou 1023 (Li Deming) → 1038 arası sahibi künye genişletmeyle (bati-xia f 1032?) çözülür. Mongol dilimi 1281-01-01\'e kadar yazıldı (Yuan ilanı için ayrı dilim açılmadı).',
       bas=dilim('Yinchuan (Ningxia)', '1038-01-01', '1227-01-01', 'bati-xia', SS485 + ' · BEYAN: Xia devleti 1038\'de ilan edildi (künye f); Xingzhou 1023\'te Li Deming tarafından kuruldu (kronoloji maddesi); 1023-1038 sahibi künye genişletilince (bati-xia f) eklenmeli. kur=1023-01-01 (Xingzhou) önerilir.', 'yil', 'yil'))
js('yama_dogu_cin3.js', 'YAMA_DOGU_CIN3', YAMA,
   '// cin3 — MEVCUT yerleşimlere s: öneki/ek parçaları (yama aracı ayrı iş). Her dilim kaynaklıdır; son dilimin t değeri mevcut zincirin başıyla birleşir ya da devam_gerekli notunda açıklanır.')

print(json.dumps({'kunye': len(KUNYE), 'cok': len(COK), 'sinir': len(SINIR), 'yama_kayit': len(YAMA), 'yama_dilim': sum(len(y['s']) for y in YAMA)}))
