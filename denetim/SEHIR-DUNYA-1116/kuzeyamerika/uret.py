# -*- coding: utf-8 -*-
# F1 Kuzey Amerika LISTE.tsv üretici. Girdi: veri_abd.txt, veri_kanada.txt, veri_meksika.txt
# Çalıştır: py uret.py   (depo kökünden ya da bu klasörden; yolları dosya konumundan alır)
import re, glob, os, sys, math, unicodedata, collections
sys.stdout.reconfigure(encoding='utf-8')
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..'))

def norm(s):
    s = re.sub(r'\([^)]*\)', ' ', s)
    s = unicodedata.normalize('NFKD', s)
    s = ''.join(c for c in s if not unicodedata.combining(c))
    s = s.lower().replace('ı', 'i')
    return re.sub(r'[^a-z0-9]+', ' ', s).strip()

def hav(a, b, c, d):
    R = 6371.0
    p1, p2 = math.radians(a), math.radians(c)
    dl = math.radians(d - b); dp = p2 - p1
    h = math.sin(dp/2)**2 + math.cos(p1)*math.cos(p2)*math.sin(dl/2)**2
    return 2*R*math.asin(math.sqrt(h))

# atlas yerleşimleri
pat = re.compile(r'ad:\s*"([^"]+)"[^{}]*?lat:\s*(-?[\d.]+)\s*,\s*lon:\s*(-?[\d.]+)')
atlas = []
for f in glob.glob(os.path.join(ROOT, 'data', 'yerlesimler*.js')):
    s = open(f, encoding='utf-8').read()
    for m in pat.finditer(s):
        la, lo = float(m.group(2)), float(m.group(3))
        if 10 < la < 85 and -175 < lo < -50:
            atlas.append((m.group(1), la, lo))

# kronoloji metni
kr = []
for g in ('kronoloji*.js', 'olaylar*.js'):
    for f in glob.glob(os.path.join(ROOT, 'data', g)):
        kr.append(open(f, encoding='utf-8').read())
KR = '\n'.join(kr)
KRL = KR.lower()
ATN = {n: norm(n) for (n, la, lo) in atlas}

rows = []
for fn in ('veri_abd.txt', 'veri_kanada.txt', 'veri_meksika.txt'):
    for ln in open(os.path.join(HERE, fn), encoding='utf-8'):
        ln = ln.strip()
        if not ln: continue
        p = ln.split('|')
        assert len(p) == 8, ln
        ad, adlar, ulke, bolge, kat, la, lo, dy = p
        rows.append(dict(ad=ad, adlar=[a.strip() for a in adlar.split(';') if a.strip()], ulke=ulke, bolge=bolge,
                         kat=int(kat), lat=float(la), lon=float(lo), dy=dy))

# mükerrer tarama: normalleştirilmiş ad + 3 km (kendi içinde)
dup = []
for i in range(len(rows)):
    for j in range(i+1, len(rows)):
        a, b = rows[i], rows[j]
        if hav(a['lat'], a['lon'], b['lat'], b['lon']) <= 3.0:
            dup.append((a['ad'], b['ad'], round(hav(a['lat'], a['lon'], b['lat'], b['lon']), 2)))
        elif norm(a['ad']) == norm(b['ad']) and a['ulke'] == b['ulke']:
            dup.append((a['ad'], b['ad'], 'AYNI-AD-UZAK'))
print('MUKERRER:', dup)

# id
ulk = {'ABD': 'us', 'Kanada': 'ca', 'Meksika': 'mx'}
seen = collections.Counter()
for r in rows:
    base = re.sub(r'[^a-z0-9]+', '-', norm(r['ad']).replace(' ', '-')).strip('-')
    base = f"{base}-{ulk[r['ulke']]}"
    seen[base] += 1
    r['id'] = base if seen[base] == 1 else f"{base}-{seen[base]}"

out = []
dolu = 0
uzak = []
for r in sorted(rows, key=lambda r: (r['ulke'], r['kat'], r['bolge'], r['ad'])):
    near = []
    for (n, la, lo) in atlas:
        d = hav(r['lat'], r['lon'], la, lo)
        if d <= 3.0:
            near.append((d, n))
    near.sort()
    cand = ' | '.join(n for d, n in near)
    if cand: dolu += 1
    # ad eşleşir ama > 3 km: koordinat sağlaması
    nn = {norm(r['ad'])} | {norm(a) for a in r['adlar']}
    nn.discard('')
    for (n, la, lo) in atlas:
        if ATN[n] in nn:
            d = hav(r['lat'], r['lon'], la, lo)
            if 3.0 < d < 60:
                uzak.append((r['ad'], n, round(d, 1)))
    # kronoloji sayısı
    names = [r['ad']] + [a for a in r['adlar'] if len(a) >= 5]
    best = 0
    for nm in set(names):
        c = KRL.count(nm.lower())
        best = max(best, c)
    r['kron'] = best
    r['cand'] = cand
    r['dist'] = round(near[0][0], 2) if near else ''
    dayanak = {'L': 'kat: 1900 listesi (SYB1899 vb.)', 'K': 'kat: kronolojide adı geçen merkez', 'T': 'kat: tarihî/idarî merkez (F2 kaynaklanacak)'}[r['dy']]
    kay = (f"{dayanak}; koordinat: kamusal gazetteer sınıfı (GNIS/CGNDB/INEGI/GeoNames) değeri ±0,02° düzeyinde "
           f"elle girildi, gazetteer çekilmedi — F2'de doğrulanacak; adlar: F2'de akademik kaynak (DCB/HNAI/Handbook of Texas/Gibson-Aztec vb.)")
    r['kaynak'] = kay
    out.append(r)

hdr = ['id', 'ad_modern', 'adlar', 'ulke', 'bolge', 'kat', 'enlem', 'boylam', 'atlas_aday', 'atlas_aday_km', 'kron_say', 'kat_dayanak', 'kaynak']
with open(os.path.join(HERE, 'LISTE.tsv'), 'w', encoding='utf-8', newline='') as fo:
    fo.write('\t'.join(hdr) + '\n')
    for r in out:
        fo.write('\t'.join([r['id'], r['ad'], ' > '.join(r['adlar']), r['ulke'], r['bolge'], str(r['kat']),
                            f"{r['lat']:.4f}", f"{r['lon']:.4f}", r['cand'], str(r['dist']), str(r['kron']),
                            {'L': '1900-liste', 'K': 'kronoloji', 'T': 'tarihi-merkez'}[r['dy']], r['kaynak']]) + '\n')
print('SATIR', len(out))
print('KAT', collections.Counter(r['kat'] for r in out))
print('ULKE', collections.Counter(r['ulke'] for r in out))
print('ULKE-KAT', collections.Counter((r['ulke'], r['kat']) for r in out))
print('DAYANAK', collections.Counter(r['dy'] for r in out))
print('ATLAS_ADAY dolu', dolu, 'bos', len(out) - dolu)
print('KRON>0', sum(1 for r in out if r['kron'] > 0))
print('AD-ESLESIR-UZAK (koordinat sagla):', uzak)
