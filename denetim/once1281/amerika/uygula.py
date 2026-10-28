"""AMERIKA-ÖN1281 (29 Ekim 2026): (A) s:[] + bos:veri-yok noktalara künye penceresi yaz; (B) 'sahip X ... geri yazılır' BOŞLUK pencerelerini X'e geri yaz.
Kullanım: py denetim/once1281/amerika/uygula.py [--yaz]   (kuru koşu varsayılan)"""
import json, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
YAZ = '--yaz' in sys.argv
K = json.load(open('denetim/once1281/amerika/kunyeler.json', encoding='utf8'))
ETIKET = 'AMERİKA-ÖN1281 (29 Ekim 2026)'

def js(s):
    return s.replace('\\', '/').replace('"', '«', 1).replace('"', '»') if False else s.replace('\\', '/').replace('"', '\u201d')

def kaynak_kisa(i):
    k = K[i]['kaynak'] or ''
    k = re.sub(r'\s+', ' ', k)
    return js(k[:420])

# (dosya, nokta adı, [(künye, f, t, kesinlik-js, ek not)])
A = [
 ('yerlesimler_once1281_yt_amerika.js', 'Tiwanaku (Tiahuanaco)', [('tiwanaku-devleti', '0500-01-01', '1010-01-01', '{f:"yuzyil",t:"onyil"}',
   'Marsh E.J. ve ark. 2023, The center cannot hold: A Bayesian chronology for the collapse of Tiwanaku, PLoS ONE, doi:10.1371/journal.pone.0288798 (Europe PMC özeti bu oturumda okundu): Tiwanaku MS ~100\'de kuruldu, ~600\'de bölgenin ana göç merkezi oldu; kalıcı ikametin sonu ~1010 (970-1050, %95); anıt inşası ~720\'de bitti. f=0500 künye (devlet oluşumu ~500, Marsh tezi) — makalenin kuruluş tarihi (~100) DEĞİL; t=1010 makaleden birebir')]),
 ('yerlesimler_once1281_yt_amerika.js', 'Yaxchilán', [('yaxchilan', '0359-01-01', '0808-01-01', '{f:"yil",t:"yil"}', '')]),
 ('yerlesimler_once1281_yt_amerika.js', 'Dzibanché (Tzibanche)', [('kaanul', '0520-01-01', '0636-01-01', '{f:"yuzyil",t:"yuzyil"}',
   'BEYANLI YAKLAŞIKLIK: Kaan hanedanının ilk açık anıları kuzeydeki Dzibanché\'dendir (Martin & Grube 2008, Calakmul bölümü, \'Northern traces\': Captive stairway, Yuknoom Ch\'een I; tarihler en erken 5. yy olabilir, belirsiz). t=0636: Calakmul stel üretiminin Yuknoom Büyük\'ün 636 tahta çıkışıyla başladığı kaynaklı ilk tarih — Dzibanché\'nin terk günü DEĞİL, geçiş yılı DEĞİL; künye başkent zinciri Dzibanché → Calakmul')]),
 ('yerlesimler_once1281_yt_amerika.js', 'Calakmul', [('kaanul', '0636-01-01', '0909-01-01', '{f:"yuzyil",t:"yuzyil"}',
   'BEYANLI YAKLAŞIKLIK: Martin & Grube 2008, Calakmul bölümü (OCR tam metin bu oturumda okundu): "Yuknoom the Great … born in 600, adopting the name … on his accession in 636. Calakmul\'s prodigious output of stelae really begins under his direction"; erken Calakmul stelleri (Stela 114 = 435, Stela 43 = 514) Yılan değil Yarasa amblemi taşır ve hanedanın o dönemde Calakmul\'da oturup oturmadığı belirsizdir. f=0636 ilk kesin Yılan-Calakmul tarihi (alt sınır), geçiş yılı DEĞİL; t=0909 künye (Stela 61, 899 veya 909)')]),
 ('yerlesimler_once1281_yt_amerika.js', 'Piedras Negras', [('piedras-negras-yokib', '0460-01-01', '0810-01-01', '{f:"onyil",t:"yil"}', '')]),
 ('yerlesimler_once1281_yt_amerika.js', 'Naranjo', [('naranjo-saal', '0546-01-01', '0810-01-01', '{f:"yil",t:"yil"}', '')]),
 ('yerlesimler_once1281_yt_amerika.js', 'Xochicalco', [('xochicalco', '0700-01-01', '0900-01-01', '{f:"yuzyil",t:"yuzyil"}', 'Hirth: tarihler Epiklasik dönem sınırlarıdır, yaklaşık')]),
 ('yerlesimler_once1281_yt_amerika.js', 'Cobá', [('coba', '0613-05-12', '0780-12-02', '{f:"gun",t:"gun"}', 'Gün tarihleri Gronemeyer 2004 Wayeb Notes 14\'ün verdiği Stela 6 / Stela 20 Initial Series çevirileridir (takvim türü kaynakta belirtilmiş değil; künye ile aynı)')]),
 ('yerlesimler_once1281_yt_amerika.js', 'Dos Pilas', [('dos-pilas-petexbatun', '0648-01-01', '0761-01-01', '{f:"yil",t:"yil"}', '')]),
 ('yerlesimler_once1281_yt_amerika.js', 'Uxmal', [('uxmal', '0800-01-01', '0907-01-01', '{f:"yuzyil",t:"yil"}', '')]),
 ('yerlesimler_once1281_yt_amerika.js', "Ek' Balam", [('ek-balam', '0770-01-01', '0840-01-01', '{f:"yuzyil",t:"yuzyil"}', 'OCR\'da ilk rakam bulanık okundu (künye ic_not ile aynı)')]),
 ('yerlesimler_odak_yedek_1023.js', 'Huacas de Moche', [('moche', '0001-01-01', '0799-12-31', '{f:"yuzyil",t:"yuzyil"}', 'KAYNAK ZAYIF: künye kaynağı Britannica (bu oturumda açılamadı, 403); pencere uçları yüzyıl düzeyinde sınır işaretidir')]),
 ('yerlesimler_odak_yedek_1023.js', 'Tula (Tollan)', [('toltek', '0900-01-01', '1150-01-01', '{f:"yuzyil",t:"yuzyil"}', 'künye kaynağı bu oturumda yeniden açılmadı')]),
 ('yerlesimler_odak_yedek_1023.js', 'Huari (Wari) arkeolojik alanı', [('wari', '0600-01-01', '0800-01-01', '{f:"yuzyil",t:"yuzyil"}', 'KAYNAK ZAYIF: künye kaynağı Britannica (açılamadı, 403); Orta Ufuk ~600, Huari merkezi ~800\'de çöküş')]),
 ('yerlesimler_once1281_yt_yer3.js', 'Cahuachi', [('nazca', '-0199-01-01', '0599-01-01', '{f:"yuzyil",t:"yuzyil"}', 'KAYNAK ZAYIF: künye kaynağı Britannica (açılamadı, 403); Nazca kültür künyesi (devlet değil), başkent alanı Cahuachi')]),
 ('yerlesimler_once1281_yt_yer3.js', 'Teyuna', [('tairona', '0800-01-01', '1281-01-01', '{f:"yuzyil",t:"belirsiz"}', 'pencere ucu 1281 = MÖ katmanı sınırı (künye t=1600; 1281 sonrası bu ajanın kapsamı dışında, devamı gerekir). Kaynak künyede Seshat/NatGeo/WHE; bu oturumda açılmadı')]),
 ('yerlesimler_once1281_yt_yer3.js', 'La Centinela', [('chincha', '1100-01-01', '1281-01-01', '{f:"yuzyil",t:"belirsiz"}', 'pencere ucu 1281 = MÖ katmanı sınırı (künye t=1476; 1281 sonrası devamı gerekir). Nigra ve ark. 2014 (Backdirt) künye kaynağında tam metin okunmuştu; bu oturumda yeniden açılmadı')]),
 ('yerlesimler_once1281_yt_yer3.js', 'Snaketown', [('hohokam', '0300-01-01', '1281-01-01', '{f:"yuzyil",t:"belirsiz"}', 'KAYNAK ZAYIF: künye kaynağı Britannica (403) + NPS Casa Grande dizini (açıldı; sayfa yalnız içindekiler, tarih içermiyor); pencere ucu 1281 = MÖ katmanı sınırı (künye t=1450); Snaketown terk tarihi okunmadı')]),
 ('yerlesimler_once1281_yt_yer3.js', 'Pueblo Bonito', [('ata-pueblo', '0850-01-01', '1281-01-01', '{f:"yuzyil",t:"belirsiz"}', 'pencere ucu 1281 = MÖ katmanı sınırı (künye t=1300); UNESCO WHC 353 künye kaynağı bu oturumda açılamadı (403). Künye özeti: Chaco 850-1250 merkez')]),
 ('yerlesimler_once1281_yt_yer3.js', 'Cacaxtla', [('cacaxtla', '0650-01-01', '0950-01-01', '{f:"yuzyil",t:"yuzyil"}', 'Brittenham 2015 yalnız yayınevi tanıtım metni okunmuştu (künye notu)')]),
]

def pencere(d, f, t, kes, ek, nokta):
    k = K[d]
    s = 'künye %s (%s) · %s' % (d, js(k['ad']), kaynak_kisa(d))
    s += ' · yer bağı: künye başkenti «%s» (devletler.js baskent); pencere künyenin f/t uçlarıdır (ölçüm değil sınır işareti)' % js(k['baskent'] or '?')
    if ek: s += ' · ' + js(ek)
    s += ' · ' + ETIKET
    return '{f:"%s",t:"%s",d:"%s",kesinlik:%s,kaynak:"%s"}' % (f, t, d, kes, s)

def kayit_aralik(txt, ad):
    m = re.search(r'^\{ ad:"%s"' % re.escape(ad), txt, re.M)
    if not m: return None
    n = re.search(r'^\{ ad:"', txt[m.end():], re.M)
    e = m.end() + n.start() if n else len(txt)
    return m.start(), e

raporlar = []
dosyalar = {}
def al(fn):
    if fn not in dosyalar:
        dosyalar[fn] = open('data/' + fn, encoding='utf-8', newline='').read()
    return dosyalar[fn]

for fn, ad, wl in A:
    txt = al(fn)
    r = kayit_aralik(txt, ad)
    if not r: raporlar.append('YOK ' + ad); continue
    b, e = r; kay = txt[b:e]
    m = re.search(r's:\[\],\s*d:\[\],\s*bos:"veri-yok",', kay)
    if not m: raporlar.append('KALIP-YOK ' + ad + ' ' + kay[:200].replace('\n', ' ')); continue
    yeni = 's:[%s], d:[],' % ','.join(pencere(d, f, t, kes, ek, ad) for d, f, t, kes, ek in wl)
    kay2 = kay[:m.start()] + yeni + kay[m.end():]
    dosyalar[fn] = txt[:b] + kay2 + txt[e:]
    raporlar.append('A-TAMAM ' + ad)

# B: BOŞLUK geri yazım
B = [('yerlesimler_amerika.js', n) for n in ['Cholula', 'Tututepec (Yucu Dzaa)', 'Mayapán', 'Chichén Itzá', 'Cusco (Qosqo)', 'Túcume', 'Hatun Colla', 'Chucuito']] + \
    [('yerlesimler_dogu_500_1281.js', n) for n in ['Quiriguá', 'Batán Grande (Sicán)', 'Tilantongo', 'El Tajín']]
rx = re.compile(r'\{f:"([^"]+)",t:"([^"]+)",d:"__BOSLUK__"((?:(?!\{f:").)*?)kaynak:"BOŞLUK BEYANI: sahip (\S+) \(renkler\.py BOYALAR\'da yok[^)]*?geri yazılır\)', re.S)
for fn, ad in B:
    txt = al(fn)
    r = kayit_aralik(txt, ad)
    if not r: raporlar.append('YOK ' + ad); continue
    b, e = r; kay = txt[b:e]
    sayac = [0]
    def rep(m):
        d = m.group(4)
        if d not in K: raporlar.append('KUNYE-YOK ' + d); return m.group(0)
        sayac[0] += 1
        return '{f:"%s",t:"%s",d:"%s"%skaynak:"SAHİP %s: BOYALAR\'a eklendi (BOYA PAKETİ), BOŞLUK BEYANI geri yazıldı (%s) — dayanak aşağıdadır' % (m.group(1), m.group(2), d, m.group(3), d, ETIKET)
    kay2 = rx.sub(rep, kay)
    dosyalar[fn] = txt[:b] + kay2 + txt[e:]
    raporlar.append('B-TAMAM %s: %d pencere' % (ad, sayac[0]))

# B2: JSON-biçimli dosya (yerlesimler_dogu_500_1281.js)
rx2 = re.compile(r'"d": "__BOSLUK__",(\s*"kesinlik": [^\n]*\n\s*)"kaynak": "BOŞLUK BEYANI: sahip (\S+) \(renkler\.py BOYALAR\'da yok[^)]*?geri yazılır\)\\?"?[^)]*?\)?')
rx2 = re.compile(r'"d": "__BOSLUK__",(\s*"kesinlik": [^\n]*\n\s*"kaynak": )"BOŞLUK BEYANI: sahip (\S+) \(renkler\.py BOYALAR\'da yok → boya gerekli; boya eklenince d:\\"[^\\]+\\" geri yazılır\)')
fn = 'yerlesimler_dogu_500_1281.js'
txt = al(fn)
for ad in ['Quiriguá', 'Batán Grande (Sicán)', 'Tilantongo', 'El Tajín']:
    i = txt.find('"ad": "%s"' % ad)
    if i < 0: raporlar.append('YOK2 ' + ad); continue
    j = txt.find('"ad": "', i + 10)
    j = len(txt) if j < 0 else j
    kay = txt[i:j]
    c = [0]
    def rep2(m):
        d = m.group(2)
        if d not in K: raporlar.append('KUNYE-YOK ' + d); return m.group(0)
        if d not in ('quirigua', 'sican', 'tilantongo-mixtek', 'el-tajin'): raporlar.append('ATLANDI ' + d); return m.group(0)
        c[0] += 1
        return '"d": "%s",%s"SAHİP %s: BOYALAR\'a eklendi (BOYA PAKETİ), BOŞLUK BEYANI geri yazıldı (%s) — dayanak aşağıdadır' % (d, m.group(1), d, ETIKET)
    kay2 = rx2.sub(rep2, kay)
    txt = txt[:i] + kay2 + txt[j:]
    raporlar.append('B2-TAMAM %s: %d pencere' % (ad, c[0]))
dosyalar[fn] = txt

print('\n'.join(raporlar))
if YAZ:
    for fn, t in dosyalar.items():
        open('data/' + fn, 'w', encoding='utf-8', newline='').write(t)
    print('YAZILDI', list(dosyalar))
