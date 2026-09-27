# -*- coding: utf-8 -*-
"""İşgal taramasının mesafe tavanı sınaması (salt okur).
Mısır kutusunda 0.1° ızgara: her hücrenin EN YAKIN noktası (o gün misir-* + isg:ingiltere
olanlar arasında değil, BÜTÜN noktalar arasında) ve mesafesi. Tarayıcıda ölçülen boşluk
kümeleri (1922-03-15) ile karşılaştırmak için mesafe kovalarını basar.
EK: --ekle ile NOKTA-ORTADOGU-0077 dosyasındaki yeni noktalar eklenmiş hâli ölçer."""
import sys
import math
import importlib.util

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, r"C:\atlas\arac")
import girdi  # noqa: E402

_spec = importlib.util.spec_from_file_location("h76", r"C:\atlas\denetim\HARITA-0076-sahip.py")
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)


def km(a, b, c, d):
    p = math.pi / 180
    h = math.sin((d - b) * p / 2) ** 2 + math.cos(b * p) * math.cos(d * p) * math.sin((c - a) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))


Y = girdi.yukle(sessiz=True)
if isinstance(Y, tuple):
    Y = Y[0]
EKLE = "--ekle" in sys.argv
if not EKLE:
    Y = [y for y in Y if y.get("_kaynak") != "yerlesimler_p77_ortadogu.js"]
g = _m.gun_no("1922-03-15")
P = [(float(y["lon"]), float(y["lat"]), y) for y in Y if 20 <= float(y["lon"]) <= 40 and 18 <= float(y["lat"]) <= 34]
# tarayıcıda ölçülen boşluk kümeleri (denetim/NOKTA-ORTADOGU-0077.md §Mısır)
KUMELER = {"a-Kattara": (27.3, 28.6, 29.4, 30.1), "b-Ferafire-bati": (26.2, 26.4, 27.4, 27.7),
           "c-Dogu-col": (34.7, 35.0, 24.3, 24.5)}
for ad, (x0, x1, y0, y1) in KUMELER.items():
    en = []
    x = x0
    while x <= x1 + 1e-9:
        yy = y0
        while yy <= y1 + 1e-9:
            d, p = min((km(x, yy, a, b), p) for a, b, p in P)
            en.append((d, p["ad"]))
            yy += 0.1
        x += 0.1
    en.sort()
    print("%-16s hucre %3d · en yakin nokta mesafesi min %.0f km  max %.0f km · sahipleri: %s" % (
        ad, len(en), en[0][0], en[-1][0], ", ".join(sorted(set(n for _, n in en)))))
