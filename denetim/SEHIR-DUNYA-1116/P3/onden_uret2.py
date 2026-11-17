# -*- coding: utf-8 -*-
"""(KAT12 kopya) Britannica ÖN TARAMA (gömülü tarayıcı, tab-10; /place/<ad> sayfasının GÖRÜNÜR makale gövdesi (FAQ/accordion/YZ-SSS hariç) 'founded/established…YYYY' cümleleri; 17 Kasım)
sonuçlarından ELLE SEÇİLEN (özne şehir ya da madde-konusu zamir; kuruluş cümlesi; belediye/üniversite/kale/demiryolu-uzantısı yılı DEĞİL) kuruluş tanıklarından kayıt üretir → P3/ON2.json.
Tanık = sayfa cümlesinden BİREBİR parça (≤15 kelime). Atlas noktası 3 km içindeyse ATLANIR (dikiş ayrı iş). sahip: ilk.t<1900 ise ilk.t→1900-01-01 __BOSLUK__ + beyan."""
import csv, glob, io, json, math, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.path.insert(0, 'arac')
import girdi
D = 'denetim/SEHIR-DUNYA-1116/'
# (ad, yıl, nicelik, kesinlik, tanık(birebir), not)
C = [
 ('Durban', 1835, 'kurulus', 'yil', 'Founded in 1835, it was named for Sir Benjamin D’Urban', 'özne zamir = madde konusu'),
 ('Gqeberha', 1820, 'kurulus', 'yil', 'Gqeberha was established under the name Port Elizabeth in 1820', ''),
 ('Ladysmith', 1850, 'kurulus', 'yil', 'Founded in 1850 after the British annexed the area', 'özne gizli = madde konusu (başlık şehir)'),
 ('Makhanda', 1812, 'kurulus', 'yil', 'It was founded in 1812 by Colonel John Graham', 'özne zamir = madde konusu; ilk ad Grahamstown'),
 ('Punakha', 1577, 'kurulus', 'yil', 'The town, founded in 1577, was once the capital of Bhutan.', ''),
 ('Kathmandu', 723, 'kurulus', 'yil', 'It was founded in 723 by Raja Gunakamadeva.', 'özne zamir = madde konusu'),
 ('Keetmanshoop', 1866, 'kurulus', 'yil', 'Keetmanshoop was established in 1866 as a Rhenish (German Lutheran) mission station', ''),
 ('Kuruman', 1885, 'kurulus', 'yil', 'town founded, 1885; incorporated, 1916', 'özne = madde konusu; 1821 misyon istasyonu ayrı (şehir değil)'),
 ('Mthatha', 1869, 'ilk-yerlesim', 'yil', 'The town began as a European settlement in 1869', 'özne The town = madde konusu'),
 ('Karonga', 1883, 'kurulus', 'yil', 'the modern town, however, was founded with the opening of a British trading post there in 1883', "'modern town' = çağdaş kasaba çekirdeği"),
]
SLUG = lambda ad: ad.replace(' ', '-')
# parti satırları (koordinat, blok)
satir = {}
import json as _j
for r in _j.load(open(D+'P3/kat12_tarihcesiz.json',encoding='utf-8')): satir[re.sub(r'\s*\(.*?\)','',r['ad_modern']).strip()] = r
for f in []:
    for r in csv.DictReader(open(f, encoding='utf-8'), delimiter='\t'):
        satir[re.sub(r'\s*\(.*?\)', '', r['ad_modern']).strip()] = r
import sehir_tarihce as st
ATL = st.atlas_ilk_gunleri()
Y = [y for y in girdi.yukle(sessiz=True) if y.get('lat') is not None]
def km(a, b, c, d):
    p = math.pi / 180; x = math.sin((c - a) * p / 2) ** 2 + math.cos(a * p) * math.cos(c * p) * math.sin((d - b) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(x))
ULKE = {'Hindistan': 'in', 'Pakistan': 'pk', 'Bangladeş': 'bd', 'Kazakistan': 'kz', 'Kırgızistan': 'kg', 'Türkmenistan': 'tm', 'Angola': 'ao', 'Gine': 'gn', 'Nijerya': 'ng', 'Namibya': 'na', 'Güney Afrika': 'za', 'Nepal': 'np', 'Butan': 'bt', 'Malavi': 'mw'}
out = []; atlas_var = []; yok = []
for ad, yil, nic, kes, tanik, not_ in C:
    r = satir.get(ad)
    if not r: yok.append(ad); continue
    lat, lon = float(r['lat']), float(r['lon'])
    near = [y['ad'] for y in Y if km(lat, lon, y['lat'], y['lon']) <= 3]
    atlas_ad = None; atlas_oncesi = False
    if near:
        ag = [(n, ATL[n][0]) for n in near if n in ATL]
        # atlas başlangıcı kaynak yılından ÖNCEYSE: kaynak ilk.t atlas başlangıcından SONRA → sahip [] (atlas zinciri esas; 'atlas başlangıcı düzeltilmeli' uyarısı beklenir)
        if ag and all(st.gun_no(g) < st.gun_no('%04d-01-01' % yil) for _, g in ag): atlas_ad = ag[0][0]; atlas_oncesi = True
        else: atlas_var.append((ad, ag[:3])); continue
    url = 'https://www.britannica.com/place/' + SLUG(ad)
    kay = "Encyclopaedia Britannica, '%s', %s (tarayicida okundu; gorunur makale govdesi, YZ-SSS blogu disi)" % (ad, url)
    ilk_t = '%04d-01-01' % yil
    ic = 'P3-ON-TARAMA (LAB, 17 Kasim 2026). TEK KAYNAK (Britannica). Tanik Britannica /place/ sayfasinin GORUNUR makale govdesinden (FAQ/accordion/YZ-SSS disi) birebir; tarayici on taramasi. %s Atlas noktasi yok (3 km tarandi). Gun yok: YYYY-01-01.' % ((not_ + '.') if not_ else '')
    sahip = []
    if atlas_oncesi: ic += " Atlas noktasi VAR ('%s'): atlas baslangici kaynak yilindan ONCE; sahip[] bos (atlas zinciri esas), atlas baslangici duzeltilmeli (KASA)." % atlas_ad
    elif yil < 1900:
        sahip = [{'f': ilk_t, 't': '1900-01-01', 'd': '__BOSLUK__', 'kesinlik': 'yil', 'kaynak': kay,
                  'ic_not': 'BOSLUK (atlas noktasi yok): Britannica govdesinde bu donem icin tarihli devlet sahibi cumlesi yok; beyansiz yaklasiklik yazilmadi.'}]
    slug_id = re.sub(r'[^a-z0-9]+', '-', ad.lower()).strip('-')
    out.append({'id': '%s-%s-p3o' % (slug_id, ULKE.get(r['modern_ulke'], r['modern_ulke'].lower() if len(r['modern_ulke']) == 2 else 'xx')), 'ad': ad, 'atlas_ad': atlas_ad, 'lat': lat, 'lon': lon, 'kat1900': int(r['kat']) if r['kat'].isdigit() else 3,
                'adlar': [ad], 'ilk': {'t': ilk_t, 'gun': str(yil), 'nicelik': nic, 'kesinlik': kes, 'kaynak': kay, 'tanik': tanik}, 'kur': None, 'ark': None, 'bit': None,
                'sahip': sahip, 'olay': [], 'ic_not': ic, '_blok': r['blok']})
json.dump(out, open(D + 'P3/ON2.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('üretilen', len(out), '| atlas noktası var (atlandı)', atlas_var, '| satırı yok', yok)
