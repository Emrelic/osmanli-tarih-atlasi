# -*- coding: utf-8 -*-
"""ADAY KARA SINAVI — her aday ne_10m_land maskesinin uzerinde mi?

Kaba koordinat hatasini (parmak kaymasi) yakalar: bir yerlesim denizin
ortasinda cikiyorsa koordinat YANLISTIR. Kiyi yerlesimleri maskenin
disina 1-2 km tasabilir, o yuzden 'en yakin karaya uzaklik' da basilir.

PROJE KOKUNDEN:  py <bu dosya> [aday.json]
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
BURA = os.path.dirname(os.path.abspath(__file__))
YOL = sys.argv[1] if len(sys.argv) > 1 else os.path.join(BURA, "adaylar_tum.json")
ADAY = json.load(io.open(YOL, encoding="utf-8"))
print("aday: %d" % len(ADAY))

from shapely.geometry import shape, Point                 # noqa: E402
from shapely.ops import unary_union, nearest_points       # noqa: E402
from shapely.prepared import prep                         # noqa: E402

gj = json.load(io.open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
kara = unary_union([shape(o["geometry"]) for o in gj["features"]])
hazir = prep(kara)
print("kara maskesi yuklendi\n")

disarida = []
for a in ADAY:
    p = Point(a["lon"], a["lat"])
    if not hazir.covers(p):
        q = nearest_points(kara, p)[0]
        # kaba derece -> km (enlem duzeltmeli)
        import math
        dx = (q.x - p.x) * 111.0 * math.cos(math.radians(a["lat"]))
        dy = (q.y - p.y) * 111.0
        d = math.hypot(dx, dy)
        disarida.append((d, a["ad"], a["lat"], a["lon"], q.y, q.x))

disarida.sort(reverse=True)
print("KARA MASKESI DISINDA: %d / %d" % (len(disarida), len(ADAY)))
print("%8s  %-46s %10s %10s   %s" % ("uzaklik", "ad", "lat", "lon", "en yakin kara"))
print("-" * 108)
for d, ad, la, lo, qy, qx in disarida:
    im = "🔴" if d > 10 else ("🟡" if d > 2 else "⚪")
    print("%s %6.1f km  %-46s %10.3f %10.3f   %.3f %.3f"
          % (im, d, ad, la, lo, qy, qx))
print("\n🔴 >10 km : koordinat SUPHELI, tek tek bakilir")
print("🟡 2-10 km: kiyi/ada — maske cozunurlugu olabilir")
print("⚪ <2 km  : maske kenari, sorun degil")
