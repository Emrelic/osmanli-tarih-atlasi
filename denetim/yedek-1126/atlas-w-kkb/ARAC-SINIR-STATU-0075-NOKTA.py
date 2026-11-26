# -*- coding: utf-8 -*-
"""SINIR-STATU-0075 — belirli günde belirli noktalarin BOYA SAHIBI ve ilgili govdenin ozeti.
Girdi: SP/govde_<gun>.geojson (GOVDEGUN.js, HEAD surumu govdelerle). Cikti: nokta -> sahip id + kaynak,
ve sahip govdelerin alani (km2, yaklasik) ile sinir kutusu.
Kullanim: py denetim/ARAC-SINIR-STATU-0075-NOKTA.py"""
import io, json, math, sys
from shapely.geometry import shape, Point
from shapely.strtree import STRtree
from shapely.prepared import prep

sys.stdout.reconfigure(encoding="utf-8")
SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\5ff25445-e091-44b4-ab3c-92a0887236ff\scratchpad"

PLAN = [
    ("1830-11-08", "Sirbistan", [
        ("Belgrad", 20.457, 44.818), ("Semendire", 20.930, 44.663), ("Kragujevac", 20.911, 44.013),
        ("Jagodina", 21.2617, 43.9772), ("Sabac", 19.694, 44.750), ("Cacak", 20.350, 43.891),
        ("Pozarevac", 21.187, 44.620), ("Valjevo", 19.885, 44.271), ("Uzice", 19.849, 43.856),
        ("Aleksinac", 21.706, 43.541), ("Krusevac", 21.333, 43.580), ("Nis", 21.896, 43.321),
        ("Negotin", 22.545, 44.226), ("Zajecar", 22.279, 43.905), ("Loznica", 19.226, 44.533),
        ("Paracin", 21.416, 43.860), ("Kladovo", 22.610, 44.607), ("Zemun (Habsburg)", 20.412, 44.843)]),
    ("1834-05-19", "Lubnan", [
        ("Sayda", 35.369, 33.563), ("Sur", 35.2038, 33.2704), ("Akka", 35.0682, 32.9236),
        ("Beyrut", 35.495, 33.888), ("Deyrulkamer", 35.5619, 33.6989), ("Sam", 36.292, 33.513),
        ("Nablus", 35.254, 32.221), ("Kudus", 35.234, 31.777), ("Trablusşam", 35.844, 34.436)]),
    ("1855-09-14", "Sisam", [
        ("Sisam (ada)", 26.977, 37.755), ("Sisam batı", 26.65, 37.72), ("Nikarya/Ikaria", 26.15, 37.60),
        ("Kusadasi", 27.26, 37.86), ("Soke", 27.40, 37.75), ("Leros", 26.85, 37.15), ("Patmos", 26.55, 37.32)]),
]

for gun, ad, noktalar in PLAN:
    gj = json.load(io.open(SP + "\\govde_%s.geojson" % gun, encoding="utf-8"))
    g, meta = [], []
    for f in gj["features"]:
        geo = shape(f["geometry"])
        if not geo.is_valid:
            geo = geo.buffer(0)
        g.append(geo); meta.append(f["properties"])
    agac = STRtree(g); hazir = [prep(x) for x in g]
    print("=" * 60)
    print(ad, gun, "· govde:", len(g))
    for n, x, y in noktalar:
        p = Point(x, y)
        sahipler = [i for i in map(int, agac.query(p)) if hazir[i].contains(p)]
        if not sahipler:
            print("  %-22s -> (boyali govde YOK)" % n)
            continue
        for i in sahipler:
            b = g[i].bounds
            alan = g[i].area * 111.32 * 111.32 * math.cos(math.radians(y))
            print("  %-22s -> %-26s kaynak=%-8s ~%8.0f km2  kutu %.2f..%.2fE %.2f..%.2fN"
                  % (n, meta[i].get("id"), meta[i].get("kaynak"), alan, b[0], b[2], b[1], b[3]))
    # bu tarihte kutuya deyen benzersiz 'tabi'/'sirbistan/lubnan/sisam' govdeleri
    for i, m in enumerate(meta):
        idl = str(m.get("id")).lower()
        if any(k in idl for k in ("sirbistan", "lubnan", "sisam", "tabi", "kavalali", "misir")):
            b = g[i].bounds
            print("  [govde] %-26s kaynak=%-8s ~%8.0f km2 kutu %.2f..%.2fE %.2f..%.2fN"
                  % (m.get("id"), m.get("kaynak"), g[i].area * 111.32 * 111.32 * math.cos(math.radians((b[1]+b[3])/2)),
                     b[0], b[2], b[1], b[3]))
