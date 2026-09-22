# -*- coding: utf-8 -*-
"""Gorseldeki bir KOORDINATIN rengini okur ve renkler.py BOYALAR ile eslestirir.
Kullanim: py denetim/SINIR-CIZGI-0076-PIKSEL.py <png> <G> <K> <B> <D> <lon,lat[,ad]> ...
Kirmizi cerceve (#FF0000) otomatik bulunur; kutu Mercator-y ile esleenir.
"""
import sys, os, math
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.path.insert(0, r'C:\atlas\arac')
os.chdir(r'C:\atlas')
from PIL import Image

png = sys.argv[1]
G, K, B, D = map(float, sys.argv[2:6])
im = Image.open(png).convert('RGB')
W, H = im.size
px = im.load()


def kirmizi(p):
    r, g, b = p
    return r > 200 and g < 80 and b < 80


# cerceve: kirmizi piksellerin en dis kutusu
xs, ys = [], []
for y in range(H):
    for x in range(W):
        if kirmizi(px[x, y]):
            xs.append(x); ys.append(y)
if not xs:
    print('kirmizi cerceve bulunamadi'); sys.exit(1)
x0, x1, y0, y1 = min(xs) + 2, max(xs) - 2, min(ys) + 2, max(ys) - 2
print('cerceve ici: x %d-%d · y %d-%d (%dx%d)' % (x0, x1, y0, y1, x1 - x0, y1 - y0))


def mery(lat):
    return math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))


my0, my1 = mery(G), mery(K)


def pikselKoord(lon, lat):
    fx = (lon - B) / (D - B)
    fy = (mery(lat) - my1) / (my0 - my1)     # ust = K
    return int(round(x0 + fx * (x1 - x0))), int(round(y0 + fy * (y1 - y0)))


# renkler.py BOYALAR
try:
    import renkler
    BOYALAR = getattr(renkler, 'BOYALAR', {})
except Exception as e:
    BOYALAR = {}
    print('renkler.py okunamadi:', e)


def hex2rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


paleti = []
for k, v in BOYALAR.items():
    try:
        paleti.append((k, hex2rgb(v if isinstance(v, str) else v[0])))
    except Exception:
        pass


def enYakinRenk(c):
    if not paleti:
        return None
    return min(paleti, key=lambda p: sum((a - b) ** 2 for a, b in zip(p[1], c)))


for arg in sys.argv[6:]:
    parts = arg.split(',')
    lon, lat = float(parts[0]), float(parts[1])
    ad = parts[2] if len(parts) > 2 else ''
    x, y = pikselKoord(lon, lat)
    if not (x0 <= x <= x1 and y0 <= y <= y1):
        print('  %-22s [%.4f,%.4f] -> piksel (%d,%d) KUTU DISI' % (ad, lon, lat, x, y)); continue
    # 5x5 ortanca yerine en sik renk (etiket/nokta pikseline dusmemek icin)
    sayim = {}
    for dy in range(-4, 5):
        for dx in range(-4, 5):
            c = px[min(max(x + dx, x0), x1), min(max(y + dy, y0), y1)]
            sayim[c] = sayim.get(c, 0) + 1
    c = max(sayim.items(), key=lambda t: t[1])[0]
    yak = enYakinRenk(c)
    d = (sum((a - b) ** 2 for a, b in zip(yak[1], c)) ** 0.5) if yak else -1
    print('  %-22s [%.4f,%.4f] piksel(%d,%d) renk #%02x%02x%02x · en yakin BOYA: %s #%02x%02x%02x (uzaklik %.0f)'
          % (ad, lon, lat, x, y, c[0], c[1], c[2], yak[0] if yak else '?', yak[1][0] if yak else 0,
             yak[1][1] if yak else 0, yak[1][2] if yak else 0, d))
