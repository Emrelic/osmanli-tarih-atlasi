# -*- coding: utf-8 -*-
"""BADIS — denetle.py'nin maskesini BIREBIR kur, sonra tara.

🔴 IKINCI SONDA NICIN YANILDI: maskeyi YEREL alt kumede sadelestirdim.
   `simplify` BIRLESIMIN TAMAMINA uygulaninca baska sonuc veriyor —
   yani "olcum dogru, EVREN DAR" ailesinin bir uyesi. Bu sefer denetimin
   yaptigini AYNEN yapiyorum.
"""
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from shapely.geometry import shape, box, Point  # noqa: E402
from shapely.ops import unary_union  # noqa: E402
from shapely.prepared import prep  # noqa: E402

KOK = os.getcwd()
src = io.open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
satir = re.search(r"^BOLGE\s*=.*$", src, re.M).group(0)
kutular = [tuple(map(float, b)) for b in re.findall(
    r"box\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)", satir)]
TOL = float(re.search(r"^KARA_TOL\s*=\s*([0-9.eE+-]+)", src, re.M).group(1))
bolge = unary_union([box(*k) for k in kutular])
print("BOLGE:", satir.strip()[:60], "· KARA_TOL:", TOL)

kaynak = os.path.join(KOK, "veri-kaynak")
ne = json.load(io.open(os.path.join(kaynak, "ne_10m_land.geojson"), encoding="utf-8"))
kara = unary_union([shape(f["geometry"]).buffer(0).intersection(bolge)
                    for f in ne["features"]
                    if shape(f["geometry"]).envelope.intersects(bolge)])
kara = kara.buffer(0).simplify(TOL, preserve_topology=True).buffer(0)
print("kara kuruldu")

gol_yol = os.path.join(kaynak, "ne_10m_lakes.geojson")
if os.path.exists(gol_yol):
    gs = []
    for f in json.load(io.open(gol_yol, encoding="utf-8"))["features"]:
        g = shape(f["geometry"])
        if g.envelope.intersects(bolge):
            gs.append(g.buffer(0))
    if gs:
        kara = kara.difference(unary_union(gs)).buffer(0)
        print("goller cikarildi")

P = prep(kara)
BAS = (35.1725, -4.3009)
print("Badis simdiki  %.4f , %.4f  ->  maskede: %s"
      % (BAS[0], BAS[1], P.covers(Point(BAS[1], BAS[0]))))

adim = 0.0001
n = 120                      # ±1,3 km
bulunan = []
for di in range(-n, n + 1):
    for dj in range(-n, n + 1):
        la = round(BAS[0] + di * adim, 4)
        lo = round(BAS[1] + dj * adim, 4)
        if P.covers(Point(lo, la)):
            d = (((la - BAS[0]) * 110.57) ** 2 + ((lo - BAS[1]) * 90.5) ** 2) ** 0.5
            bulunan.append((d, la, lo))
bulunan.sort()
print("maskede DURAN nokta (±%.1f km): %d" % (n * adim * 110.57, len(bulunan)))
for d, la, lo in bulunan[:8]:
    print("   lat:%.4f, lon:%.4f    %.3f km" % (la, lo, d))
if not bulunan:
    print("🔴 ±%.1f km icinde MASKEDE DURAN HICBIR NOKTA YOK." % (n * adim * 110.57))
    print("   ⇒ Penon bu tolerans (KARA_TOL=%s) altinda maskede TEMSIL EDILEMIYOR." % TOL)
