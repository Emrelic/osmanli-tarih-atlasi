"""D3-AVRUPA-ORTA — bugünkü (Natural Earth 10m) ülke çifti sınır uzunlukları.

Amaç: 1923 envanterindeki her parçanın BUGÜNKÜ karşılığı var mı, kaç km.
Bu bir ÖLÇEK aracıdır; 1923 geometrisi DEĞİLDİR (atlas/NE referans değildir,
yalnız kaynak "değişmedi" diyorsa geometri yolu olarak kullanılabilir).

Kullanım: py denetim/ARAC-D3ORTA-CIFT-0916.py
"""
import json, sys, io
from itertools import combinations
from shapely.geometry import shape
from math import radians, sin, cos, asin, sqrt

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
YOL = "veri-kaynak/ne_10m_admin_0_countries.geojson"
ISO = ["DEU", "POL", "LTU", "LVA", "EST", "FIN", "RUS", "BLR", "UKR", "MDA",
       "CZE", "SVK", "AUT", "HUN", "SVN", "HRV", "SRB", "BIH", "MNE", "MKD",
       "XKX", "ROU", "ALB"]

g = json.load(open(YOL, encoding="utf-8"))
geo = {}
for f in g["features"]:
    p = f["properties"]
    a = p.get("ADM0_A3") or p.get("ISO_A3")
    if p.get("ADM0_A3") == "KOS":
        a = "XKX"
    if a in ISO:
        geo[a] = shape(f["geometry"]).buffer(0)
eksik = [i for i in ISO if i not in geo]


def hav(c1, c2):
    (x1, y1), (x2, y2) = c1[:2], c2[:2]
    d = (sin(radians(y2 - y1) / 2) ** 2
         + cos(radians(y1)) * cos(radians(y2)) * sin(radians(x2 - x1) / 2) ** 2)
    return 2 * 6371.0088 * asin(sqrt(d))


def uzunluk(g):
    if g.is_empty:
        return 0.0
    if hasattr(g, "geoms"):
        return sum(uzunluk(x) for x in g.geoms)
    if g.geom_type == "LineString":
        c = list(g.coords)
        return sum(hav(c[i], c[i + 1]) for i in range(len(c) - 1))
    return 0.0


print("ülke:", len(geo), "/", len(ISO), "eksik:", eksik or "yok")
for a, b in combinations(sorted(geo), 2):
    if not geo[a].buffer(1e-6).intersects(geo[b]):
        continue
    hat = geo[a].boundary.intersection(geo[b].buffer(1e-4))
    km = uzunluk(hat)
    if km >= 1:
        print(f"{a}-{b}\t{km:8.1f} km")
