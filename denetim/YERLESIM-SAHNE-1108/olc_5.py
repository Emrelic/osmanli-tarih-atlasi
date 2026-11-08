# -*- coding: utf-8 -*-
"""ÖLÇÜM 5 — bölgesel yerleşim seyrekliği (2°x2° hücre, 1000/1500/1800/1900 kesitleri).
Kullanım: py -I olc_5.py <veri.json> <cikti-dizini> <veri-kaynak-dizini>
SALT OKUR. Kara maskesi: veri-kaynak/ne_10m_land.geojson (girdi maskesi); ülke adı: ne_10m_admin_0_countries.
"""
import json, os, re, sys
import numpy as np
import shapely
from shapely.geometry import shape
from shapely.strtree import STRtree

VERI, CIK, VK = sys.argv[1], sys.argv[2], sys.argv[3]
os.makedirs(CIK, exist_ok=True)
Y = json.load(open(VERI, encoding='utf-8'))['Y']

def gk(t):
    if not t:
        return None
    m = re.match(r'^(-?\d+)(?:-(\d\d))?(?:-(\d\d))?', t)
    if not m:
        return None
    return int(m.group(1)) * 10000 + int(m.group(2) or 1) * 100 + int(m.group(3) or 1)

SON = 99999999

def sahip(y, k):
    """o gün gerçek (BOŞLUK olmayan) sahip var mı"""
    for a in ('s', 'd', 'v'):
        for r in (y.get(a) or []):
            f = gk(r.get('f')); t = gk(r.get('t')) if r.get('t') else SON
            if f is not None and f <= k < t:
                return (r.get('d') or 'osmanli') != '__BOSLUK__'
    return False

def donemli(y):
    return any(y.get(a) for a in ('s', 'd', 'v'))

KES = [1000, 1500, 1800, 1900]
# --- maske ---
land = json.load(open(os.path.join(VK, 'ne_10m_land.geojson'), encoding='utf-8'))
geoms = [shape(f['geometry']) for f in land['features']]
karaU = shapely.union_all(geoms)
shapely.prepare(karaU)
ulk = json.load(open(os.path.join(VK, 'ne_10m_admin_0_countries.geojson'), encoding='utf-8'))
ulkG = [shape(f['geometry']) for f in ulk['features']]
ulkAd = [(f['properties'].get('NAME') or f['properties'].get('ADMIN') or '?') for f in ulk['features']]
agac = STRtree(ulkG)

W, H = 2.0, 2.0
nx, ny = int(360 / W), int(180 / H)
S = 6
xs = (np.arange(S) + 0.5) / S
frac = np.zeros((ny, nx))
for j in range(ny):
    lat0 = -90 + j * H
    for i in range(nx):
        lon0 = -180 + i * W
        gx, gy = np.meshgrid(lon0 + xs * W, lat0 + xs * H)
        frac[j, i] = shapely.contains_xy(karaU, gx.ravel(), gy.ravel()).mean()
KARA = frac >= 0.5
ORTA = np.zeros((ny, nx), dtype=bool); ORTA[int((-58 + 90) // H):int((70 + 90) // H), :] = True

def hucre(y):
    i = int((y['lon'] + 180) // W); j = int((y['lat'] + 90) // H)
    return min(max(j, 0), ny - 1), min(max(i, 0), nx - 1)

def ulke(j, i):
    cx, cy = -180 + (i + .5) * W, -90 + (j + .5) * H
    p = shapely.points(cx, cy)
    idx = agac.query(p, predicate='within')
    if len(idx):
        return ulkAd[idx[0]]
    k = agac.nearest(p)
    return ulkAd[k] + '~'

sonuc = {'hucre': f'{W}x{H} derece', 'toplam_hucre': nx * ny, 'kara_hucresi(>=%50 kara)': int(KARA.sum()), 'kesitler': {}}
kronik = {}
for yil in KES:
    k = yil * 10000 + 101
    C = np.zeros((ny, nx), dtype=int); CT = np.zeros((ny, nx), dtype=int)
    for y in Y:
        if y.get('tur') == 'bolge':
            continue
        kur = gk(y.get('kur'))
        if kur is not None and kur > k:
            continue
        j, i = hucre(y)
        CT[j, i] += 1                       # var (dönemden bağımsız)
        if donemli(y) and sahip(y, k):
            C[j, i] += 1                    # sahneye çıkmış (gerçek sahip)
    P = np.pad(C.astype(float), 1, mode='edge'); Pk = np.pad(KARA.astype(float), 1)
    rows = []
    for j in range(ny):
        for i in range(nx):
            if not KARA[j, i]:
                continue
            komsu = []
            for dj in (-1, 0, 1):
                for di in (-1, 0, 1):
                    if dj == 0 and di == 0:
                        continue
                    jj, ii = j + dj, (i + di) % nx
                    if 0 <= jj < ny and KARA[jj, ii]:
                        komsu.append(C[jj, ii])
            if len(komsu) < 3:
                continue
            nm = float(np.mean(komsu))
            if nm >= 3 and C[j, i] <= 0.2 * nm:
                rows.append((j, i, int(C[j, i]), int(CT[j, i]), nm, len(komsu), round(float(frac[j, i]), 2)))
    rows.sort(key=lambda r: (r[2] / r[4], -r[4]))
    kara_say = int(KARA.sum())
    bos = int(((C == 0) & KARA).sum())
    sonuc['kesitler'][yil] = {
        'sahnede_yerlesim': int(C.sum()), 'var_ama_sahnesiz': int(CT.sum() - C.sum()),
        'kara_hucresi_bos(0)': bos, 'bos_oran': round(100 * bos / kara_say, 1),
        'bos_oran_enlem_-58_70': round(100 * int(((C == 0) & KARA & ORTA).sum()) / int((KARA & ORTA).sum()), 1),
        'anlamsiz_seyreklik_hucre': len(rows),
        'ilk30': [dict(lat0=-90 + r[0] * H, lon0=-180 + r[1] * W, bu=r[2], var=r[3], komsu_ort=round(r[4], 1), n_komsu=r[5], kara=r[6], ulke=ulke(r[0], r[1])) for r in rows[:30]],
    }
    for r in rows:
        kronik.setdefault((r[0], r[1]), []).append((yil, r[2], r[4]))
    with open(os.path.join(CIK, f'm5_seyrek_{yil}.tsv'), 'w', encoding='utf-8') as f:
        f.write('lat0\tlon0\tbu_hucre_sahnede\tvar_kur<=t\tkomsu_ortalama\tn_komsu\tkara_orani\tulke\n')
        for r in rows:
            f.write(f'{-90 + r[0] * H}\t{-180 + r[1] * W}\t{r[2]}\t{r[3]}\t{r[4]:.1f}\t{r[5]}\t{r[6]}\t{ulke(r[0], r[1])}\n')
kr = sorted(((k, v) for k, v in kronik.items() if len(v) >= 3), key=lambda kv: -len(kv[1]))
sonuc['kronik_3+_kesitte'] = len(kr)
sonuc['kronik_4_kesitte'] = sum(1 for k, v in kr if len(v) == 4)
sonuc['kronik_ilk30'] = [dict(lat0=-90 + k[0] * H, lon0=-180 + k[1] * W, kesit=[v[0] for v in vs], ulke=ulke(*k)) for k, vs in kr[:30]]
json.dump(sonuc, open(os.path.join(CIK, 'm5_ozet.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
for yil in KES:
    s = sonuc['kesitler'][yil]
    print(yil, {k: v for k, v in s.items() if k != 'ilk30'})
print('kronik 3+:', sonuc['kronik_3+_kesitte'], '4:', sonuc['kronik_4_kesitte'])
for d in sonuc['kronik_ilk30']:
    print(d)
