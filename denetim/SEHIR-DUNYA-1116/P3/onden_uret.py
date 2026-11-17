# -*- coding: utf-8 -*-
"""Britannica ÖN TARAMA (gömülü tarayıcı, tab-10; /place/<ad> sayfasının GÖRÜNÜR makale gövdesi (FAQ/accordion/YZ-SSS hariç) 'founded/established…YYYY' cümleleri; 17 Kasım)
sonuçlarından ELLE SEÇİLEN (özne şehir ya da madde-konusu zamir; kuruluş cümlesi; belediye/üniversite/kale/demiryolu-uzantısı yılı DEĞİL) kuruluş tanıklarından kayıt üretir → P3/ON.json.
Tanık = sayfa cümlesinden BİREBİR parça (≤15 kelime). Atlas noktası 3 km içindeyse ATLANIR (dikiş ayrı iş). sahip: ilk.t<1900 ise ilk.t→1900-01-01 __BOSLUK__ + beyan."""
import csv, glob, io, json, math, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.path.insert(0, 'arac')
import girdi
D = 'denetim/SEHIR-DUNYA-1116/'
# (ad, yıl, nicelik, kesinlik, tanık(birebir), not)
C = [
 ('Hisar', 1356, 'kurulus', 'yil', 'Hisar was founded in 1356 by Fīrūz Shah Tughluq', ''),
 ('Jacobabad', 1847, 'kurulus', 'yil', 'It was founded in 1847 on the site of the village of Khānghar', 'özne zamir = madde konusu'),
 ('Moradabad', 1625, 'kurulus', 'yil', 'Moradabad was founded in 1625 by Rustam Khan, a Mughal general', ''),
 ('Muzaffarnagar', 1633, 'kurulus', 'belirsiz', 'Muzaffarnagar was founded about 1633 by the Mughal nobleman', "kaynak 'about 1633' der: kesinlik belirsiz"),
 ('Nainital', 1841, 'kurulus', 'yil', 'Nainital, founded in 1841, is a popular resort', ''),
 ('Sagar', 1660, 'kurulus', 'yil', 'Sagar was founded by Udan Singh in 1660', ''),
 ('Saharanpur', 1340, 'kurulus', 'belirsiz', 'Saharanpur was founded about 1340 and is named for Shah Haran Chishti', "kaynak 'about 1340' der: kesinlik belirsiz"),
 ('Sahiwal', 1865, 'kurulus', 'yil', 'The city was founded in 1865 and was named for Sir Robert Montgomery', 'özne zamir/The city = madde konusu'),
 ('Seoni', 1774, 'kurulus', 'yil', 'Seoni was founded in 1774.', ''),
 ('Shahjahanpur', 1647, 'kurulus', 'yil', 'The city was founded in 1647 and named for the Mughal emperor Shah Jahān', 'özne The city = madde konusu'),
 ('Udhagamandalam', 1821, 'kurulus', 'yil', 'It was founded by the British in 1821 and used as the official government summer headquarters', 'özne zamir = madde konusu'),
 ('Bishkek', 1825, 'kurulus', 'yil', 'In 1825 the Uzbek khanate of Kokand established on the site the fortress of Bishkek', 'Kokand Hanlığı Bishkek KALESİNİ kurdu (şehrin çekirdeği); 1862 Rus ele geçirmesi aynı cümlede'),
 ('Karakol', 1869, 'kurulus', 'yil', 'The city was founded in 1869 as a Russian military and administrative outpost', 'özne The city = madde konusu'),
 ('Kokshetau', 1824, 'kurulus', 'yil', 'Kökshetaü was founded in 1824 as an administrative outpost', "Britannica yazımı 'Kökshetaü'"),
 ('Zhezqazghan', 1938, 'kurulus', 'yil', 'The city was created in 1938 in connection with exploitation', 'özne The city = madde konusu'),
 ('Huambo', 1912, 'kurulus', 'yil', 'The city was founded in 1912 by Portuguese settlers and workers on the Benguela Railway', 'özne The city = madde konusu'),
 ('Kindia', 1904, 'kurulus', 'yil', 'Founded in 1904 as a collecting point on the railroad', 'özne gizli = madde konusu (başlık şehir)'),
 ('Kuito', 1890, 'kurulus', 'yil', 'Kuito, town (founded 1890), central Angola.', ''),
 ('Lokoja', 1860, 'kurulus', 'yil', 'in 1860 the Scottish explorer William Balfour Baikie founded Lokoja', ''),
 ('Lubango', 1885, 'kurulus', 'yil', 'The city was originally established in 1885 as a settlement for colonists', 'özne The city = madde konusu'),
 ('Mamou', 1908, 'kurulus', 'yil', 'Mamou was founded in 1908 as a collecting point on the railroad from Conakry', ''),
 ('Mariental', 1912, 'kurulus', 'yil', 'Mariental was founded in 1912 as a railway stop between Windhoek and Keetmanshoop', ''),
 ('Port Harcourt', 1912, 'kurulus', 'yil', 'Founded in 1912 in an area traditionally inhabited by the Ijo and Ikwere', 'özne gizli = madde konusu (başlık şehir)'),
 ('Makurdi', 1927, 'kurulus', 'belirsiz', 'Founded about 1927 when the railroad from Port Harcourt', "kaynak 'about 1927' der: kesinlik belirsiz; özne gizli = madde konusu"),
]
SLUG = lambda ad: ad.replace(' ', '-')
# parti satırları (koordinat, blok)
satir = {}
for f in glob.glob(D + 'P3/B[0-9][0-9].tsv'):
    for r in csv.DictReader(open(f, encoding='utf-8'), delimiter='\t'):
        satir[re.sub(r'\s*\(.*?\)', '', r['ad_modern']).strip()] = r
import sehir_tarihce as st
ATL = st.atlas_ilk_gunleri()
Y = [y for y in girdi.yukle(sessiz=True) if y.get('lat') is not None]
def km(a, b, c, d):
    p = math.pi / 180; x = math.sin((c - a) * p / 2) ** 2 + math.cos(a * p) * math.cos(c * p) * math.sin((d - b) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(x))
ULKE = {'Hindistan': 'in', 'Pakistan': 'pk', 'Bangladeş': 'bd', 'Kazakistan': 'kz', 'Kırgızistan': 'kg', 'Türkmenistan': 'tm', 'Angola': 'ao', 'Gine': 'gn', 'Nijerya': 'ng', 'Namibya': 'na'}
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
json.dump(out, open(D + 'P3/ON.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('üretilen', len(out), '| atlas noktası var (atlandı)', atlas_var, '| satırı yok', yok)
