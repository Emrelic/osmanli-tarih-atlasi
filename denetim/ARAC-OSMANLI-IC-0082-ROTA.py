# -*- coding: utf-8 -*-
# OSMANLI-IC-0082 · H-0065 — Duckworth okunun `rota` ve `yol` hatlarini kara ile olcer.
# Her nokta ve her ardisik parca icin: karada mi, karadaki parca uzunlugu (km).
import json, sys, math
from shapely.geometry import shape, Point, LineString
from shapely.ops import unary_union

sys.stdout.reconfigure(encoding="utf-8")
g = json.load(open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
kutu = LineString([(25.5, 39.5), (29.5, 41.5)]).envelope
parcalar = [shape(f["geometry"]).intersection(kutu) for f in g["features"]]
kara = unary_union([p for p in parcalar if not p.is_empty])

def km(parca):
    # yaklasik: derece -> km (enlem 40.5)
    return parca.length * 111.0 * math.sqrt((math.cos(math.radians(40.5)) ** 2 + 1) / 2)

HATLAR = {
    "rota (canli cizim)": [[26.17,40.02],[26.409,40.147],[26.154,40.282],[26.304,40.462],[26.544,40.552],[26.68,40.42],[27.6,40.72],[28.9,40.87]],
    "yol (ham)": [[26.17,40.02],[26.409,40.147],[26.68,40.42],[27.60,40.72],[28.90,40.87]],
    "ONERI": [[26.17,40.02],[26.30,40.08],[26.385,40.135],[26.378,40.17],[26.39,40.197],[26.43,40.212],[26.47,40.232],[26.50,40.252],[26.53,40.276],[26.57,40.30],[26.61,40.324],[26.64,40.348],[26.665,40.372],[26.69,40.396],[26.75,40.42],[26.80,40.444],[26.87,40.47],[27.6,40.72],[28.9,40.87]],
}
for ad, h in HATLAR.items():
    print("==", ad)
    for i, (x, y) in enumerate(h):
        print(f"  n{i} {x:.3f},{y:.3f}  {'KARA' if kara.contains(Point(x, y)) else 'deniz'}")
    top = 0.0
    for i in range(len(h) - 1):
        s = LineString([h[i], h[i + 1]])
        k = km(s.intersection(kara))
        top += k
        if k > 0.05:
            print(f"  parca n{i}-n{i+1}: karada {k:.2f} km / {km(s):.2f} km")
    print(f"  TOPLAM karada {top:.2f} km")
