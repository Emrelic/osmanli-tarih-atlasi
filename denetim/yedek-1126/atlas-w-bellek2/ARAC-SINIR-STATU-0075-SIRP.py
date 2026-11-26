# -*- coding: utf-8 -*-
"""SINIR-STATU-0075 — H-0005: 1830-11-08'de 'osmanli-tabi' govdesinin Sirp cekirdek kutusundaki parcasi ve Belgrad'a uzakligi.
Girdi: SP/govde_1830-11-08.geojson. tabi govdesi TEK birlesik katmandir (butun vasallar); kutu (19.0-22.9E, 43.3-45.1N) Sirbistan cekirdegini kapsar
ama Eflak (Turnu Severin) ve Vidin taraflarini da icerebilir — bu yuzden Eflak parcasi ayrica raporlanir (Turnu Severin 22.656E)."""
import io, json, math, sys
from shapely.geometry import shape, Point, box
from shapely.ops import unary_union

sys.stdout.reconfigure(encoding="utf-8")
SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\5ff25445-e091-44b4-ab3c-92a0887236ff\scratchpad"
gj = json.load(io.open(SP + r"\govde_1830-11-08.geojson", encoding="utf-8"))
tabi = []
for f in gj["features"]:
    if f["properties"].get("id") == "osmanli-tabi":
        geo = shape(f["geometry"])
        tabi.append(geo if geo.is_valid else geo.buffer(0))
T = unary_union(tabi)
KUTU = box(19.0, 43.3, 22.9, 45.1)
def km2(g):
    if g.is_empty:
        return 0.0
    c = g.centroid.y
    return g.area * 111.32 * 111.32 * math.cos(math.radians(c))
print("tabi ∩ kutu:", round(km2(T.intersection(KUTU))), "km2  (kutu %d km2)" % round(km2(KUTU)))
sirp = T.intersection(box(19.0, 43.3, 22.4, 45.1))       # Eflak'i (22.4E'nin dogusu) disarida birak
sirp = unary_union([g for g in getattr(sirp, "geoms", [sirp]) if g.geom_type in ("Polygon", "MultiPolygon")])
print("tabi ∩ (19.0-22.4E) :", round(km2(sirp)), "km2")
b = sirp.bounds
print("  sinir kutusu: %.3f..%.3fE  %.3f..%.3fN" % (b[0], b[2], b[1], b[3]))
for ad, x, y in [("Belgrad", 20.457, 44.818), ("Semendire", 20.930, 44.663), ("Sabac", 19.694, 44.750),
                 ("Pozarevac", 21.187, 44.620), ("Kragujevac", 20.911, 44.013)]:
    p = Point(x, y)
    ic = sirp.contains(p)
    d = sirp.boundary.distance(p) * 111.32 * math.cos(math.radians(y))
    print("  %-11s %s  ozerk govdenin kenarina ~%.0f km" % (ad, "ICINDE" if ic else "DISINDA", d))
