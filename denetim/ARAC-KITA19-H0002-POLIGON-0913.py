#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""KITA 19 - H-0002-2.png: poligonun piksel sinirini bul, viewport bbox'a
gore lat/lon'a cevir, en yakin yerlesimleri bul."""
from PIL import Image
import sys
sys.path.insert(0, "arac")
import girdi

im = Image.open(r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-0044\H-0002-2.png").convert("RGB")
W, H = im.size
print("boyut:", W, H)

# Kenar rengi: koyu bordo/kirmizimsi cizgi. Ic dolgu ~(196,124,118).
# Kenar cizgisini bulmak icin: dolgu rengine YAKIN VE daha koyu pikselleri ara.
px = im.load()
xs, ys = [], []
for y in range(0, H, 2):
    for x in range(0, W, 2):
        r, g, b = px[x, y]
        # ic dolgu tonuna yakin (kirmizimsi-bordo), sari/yesil DEGIL
        if 150 <= r <= 210 and 90 <= g <= 150 and 90 <= b <= 150 and (r - g) > 40 and (r - b) > 40:
            xs.append(x); ys.append(y)

print("eslesen piksel sayisi:", len(xs))
if xs:
    x0, x1 = min(xs), max(xs)
    y0, y1 = min(ys), max(ys)
    print("piksel bbox: x", x0, x1, " y", y0, y1)

    # viewport bilgi cubugundan: 1526-08-29 - 46.61-48.14N - 19.87-22.98E
    latMax, latMin = 48.14, 46.61
    lonMin, lonMax = 19.87, 22.98
    # goruntu yuksekligi info-bar'i da iceriyor olabilir; y ekseni orani
    # yaklasik - image height'in ust ~%95'i harita alani sayalim (info bar alt %5)
    harita_h = H * 0.93
    def to_lat(y): return latMax - (y / harita_h) * (latMax - latMin)
    def to_lon(x): return lonMin + (x / W) * (lonMax - lonMin)

    print(f"poligon lat araligi: {to_lat(y1):.3f} - {to_lat(y0):.3f}")
    print(f"poligon lon araligi: {to_lon(x0):.3f} - {to_lon(x1):.3f}")
    cx, cy = (x0+x1)/2, (y0+y1)/2
    clat, clon = to_lat(cy), to_lon(cx)
    print(f"poligon MERKEZ tahmini: lat={clat:.3f} lon={clon:.3f}")

    Y = girdi.yukle(sessiz=True)
    import math
    def mesafe(a_lat, a_lon, b_lat, b_lon):
        orta = math.radians((a_lat+b_lat)/2)
        return 111.32*math.hypot(a_lat-b_lat, (a_lon-b_lon)*math.cos(orta))
    ranked = sorted(Y, key=lambda p: mesafe(p["lat"], p["lon"], clat, clon))[:8]
    print("merkeze en yakin 8 nokta:")
    for p in ranked:
        d = mesafe(p["lat"], p["lon"], clat, clon)
        print(f"  {p['ad']:<26} d={d:6.1f}km  lat={p['lat']:.3f} lon={p['lon']:.3f}  s_son={p.get('s')[-1] if p.get('s') else None}  v={p.get('v')}")
