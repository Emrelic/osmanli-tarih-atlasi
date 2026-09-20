# -*- coding: utf-8 -*-
"""F olcumunun govde cikarimi DOGRU mu? Bilinen sehirlerle sinav."""
import io, json
from shapely.geometry import shape, Point
from shapely.strtree import STRtree
from shapely.prepared import prep

SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\0f85f827-a96b-4a7c-bfd6-a06cab079a08\scratchpad"
gj = json.load(io.open(SP + r"\govde1923.geojson", encoding="utf-8"))
govde, kimlik = [], []
for f in gj["features"]:
    g = shape(f["geometry"])
    if not g.is_valid:
        g = g.buffer(0)
    govde.append(g); kimlik.append(f["properties"]["id"])
agac = STRtree(govde); hazir = [prep(g) for g in govde]

def sahip(x, y):
    p = Point(x, y)
    for i in agac.query(p):
        i = int(i)
        if hazir[i].contains(p):
            return kimlik[i]
    return None

SINAV = [("Ankara", 32.85, 39.93, "tbmm-turkiye"), ("Sofya", 23.32, 42.70, "bulgaristan-kralligi"),
         ("Atina", 23.73, 37.98, "yunanistan"), ("Paris", 2.35, 48.86, "fransa-cumhuriyet"),
         ("Berlin", 13.40, 52.52, "almanya"), ("Moskova", 37.62, 55.75, "sovyet-rusya"),
         ("Tahran", 51.39, 35.69, "kacar"), ("Kahire", 31.24, 30.04, "misir-kralligi"),
         ("Bagdat", 44.36, 33.31, "irak-kralligi"), ("Bern", 7.45, 46.95, "isvicre"),
         ("Roma", 12.50, 41.90, "italya"), ("Madrid", -3.70, 40.42, "ispanya"),
         ("Vasington", -77.04, 38.91, "abd"), ("Ottava", -75.70, 45.42, "kanada"),
         ("Guatemala", -90.51, 14.63, "guatemala"), ("Delhi", 77.21, 28.61, "ingiliz-hindistani")]
dogru = 0
for ad, x, y, bek in SINAV:
    b = sahip(x, y)
    ok = (b == bek)
    dogru += ok
    print("  %-10s beklenen %-22s bulunan %-22s %s" % (ad, bek, b, "OK" if ok else "X"))
print("sinav: %d/%d" % (dogru, len(SINAV)))
print()
print("1923 govde kimlikleri (115):")
print(", ".join(sorted(set(kimlik))))
