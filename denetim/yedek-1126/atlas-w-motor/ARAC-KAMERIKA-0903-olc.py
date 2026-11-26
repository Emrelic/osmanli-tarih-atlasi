# -*- coding: utf-8 -*-
"""KUZEY AMERIKA bosluk olcumu — 1 derece izgara, kume kume.

_dunya_bosluk.py'nin ayni yontemi (ne_10m_land + TAVAN 200 km), ama
yalniz benim kutum ve daha ince cozunurlukte, ve ACIK hucreleri kume
kume basiyor ki hangi cografyada oldugu gorunsun.

PROJE KOKUNDEN calistirilir:  py <bu dosya> [izgara]
"""
import io
import json
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi                                              # noqa: E402

ADIM = float(sys.argv[1]) if len(sys.argv) > 1 else 1.0
TAVAN = 200.0
G, KU, B, D = 15.0, 72.0, -170.0, -52.0

Y = girdi.yukle(sessiz=True)
NOK = [(y["lat"], y["lon"], y.get("ad", "?")) for y in Y
       if isinstance(y.get("lat"), (int, float))
       and isinstance(y.get("lon"), (int, float))]
print("bagli nokta (dunya): %d" % len(NOK))
ic = [n for n in NOK if G <= n[0] <= KU and B <= n[1] <= D]
print("kutumdaki nokta: %d" % len(ic))
for n in sorted(ic, key=lambda t: (-t[0], t[1])):
    print("   %7.3f %9.3f  %s" % n)

from shapely.geometry import shape, Point                 # noqa: E402
from shapely.ops import unary_union                       # noqa: E402
from shapely.prepared import prep                         # noqa: E402

gj = json.load(io.open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
kara = unary_union([shape(o["geometry"]) for o in gj["features"]])
hazir = prep(kara)
print("kara maskesi yuklendi")


def km(a_lat, a_lon, b_lat, b_lon):
    t = math.pi / 180.0
    dp = (b_lat - a_lat) * t
    dl = (b_lon - a_lon) * t
    s = (math.sin(dp / 2) ** 2
         + math.cos(a_lat * t) * math.cos(b_lat * t) * math.sin(dl / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(min(1.0, s)))


def en_yakin(la, lo):
    en, ad = 1e9, None
    for p in NOK:
        d = km(la, lo, p[0], p[1])
        if d < en:
            en, ad = d, p[2]
    return en, ad


kara_n = 0
acik = []
la = G + ADIM / 2
while la < KU:
    lo = B + ADIM / 2
    while lo < D:
        if hazir.contains(Point(lo, la)):
            kara_n += 1
            u, ad = en_yakin(la, lo)
            if u > TAVAN:
                acik.append((round(la, 2), round(lo, 2), round(u), ad))
        lo += ADIM
    la += ADIM

print("\nkara hucre: %d · ACIK: %d (%.1f%%)"
      % (kara_n, len(acik), 100.0 * len(acik) / kara_n if kara_n else 0))

# --- kumeleme: komsu acik hucreler ---
kalan = list(acik)
kumeler = []
while kalan:
    tohum = kalan.pop(0)
    kume = [tohum]
    degisti = True
    while degisti:
        degisti = False
        for h in list(kalan):
            for k in kume:
                if (abs(h[0] - k[0]) <= ADIM * 1.01
                        and abs(h[1] - k[1]) <= ADIM * 1.01):
                    kume.append(h)
                    kalan.remove(h)
                    degisti = True
                    break
    kumeler.append(kume)

kumeler.sort(key=len, reverse=True)
print("\nKUME sayisi: %d" % len(kumeler))
print("%-4s %5s  %-20s %-20s %8s  %s"
      % ("#", "hucre", "enlem", "boylam", "enuzak", "en uzak hucre"))
print("-" * 100)
for i, kume in enumerate(kumeler, 1):
    las = [h[0] for h in kume]
    los = [h[1] for h in kume]
    uz = max(kume, key=lambda h: h[2])
    print("%-4d %5d  %-20s %-20s %5d km  %.1fK %.1fB (yakini: %s)"
          % (i, len(kume),
             "%.1f - %.1f K" % (min(las), max(las)),
             "%.1f - %.1f" % (min(los), max(los)),
             uz[2], uz[0], abs(uz[1]), uz[3]))

cikti = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                     "kamerika_acik.json")
with io.open(cikti, "w", encoding="utf-8") as f:
    json.dump({"adim": ADIM, "kara": kara_n, "acik": acik,
               "kumeler": kumeler}, f, ensure_ascii=False)
print("\n-> %s yazildi" % cikti)
