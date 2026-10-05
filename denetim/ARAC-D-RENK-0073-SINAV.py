# -*- coding: utf-8 -*-
"""F olcumunun govde cikarimi DOGRU mu? Bilinen sehirlerle sinav.

KULLANIM:  py denetim/ARAC-D-RENK-0073-SINAV.py <dizin>
           <dizin> = `ARAC-D-RENK-0073-GOVDE.js <gun> <dizin>/govde1923.geojson`
           ciktisinin durdugu dizin (ya da D_RENK_SP ortam degiskeni).
CIKIS:     0 sinav tam / 1 sapma var / 2 OLCULEMEDI (girdi yok)

W36 (6 Ekim 2026): SP eskiden BASKA MAKINENIN scratchpad yoluydu (C:\\Users\\emrem\\...)
ve betik her yerde FileNotFoundError ile coktu. Yol artik arguman; sinavin
sorusu ve 16 sehri DEGISMEDI. Sapma artik cikis kodunda da gorunur.
"""
import io, json, os, sys
from shapely.geometry import shape, Point
from shapely.strtree import STRtree
from shapely.prepared import prep

SP = sys.argv[1] if len(sys.argv) > 1 else os.environ.get("D_RENK_SP", "")
GJ = os.path.join(SP, "govde1923.geojson")
if not SP or not os.path.isfile(GJ):
    print("OLCULEMEDI - govde1923.geojson yok (%r). Once: node denetim/"
          "ARAC-D-RENK-0073-GOVDE.js 1923-10-29 <dizin>/govde1923.geojson "
          "(data/devletler_harita.js ister). Bu 'temiz' DEGILDIR." % GJ)
    sys.exit(2)
gj = json.load(io.open(GJ, encoding="utf-8"))
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
print("1923 govde kimlikleri (%d):" % len(set(kimlik)))
print(", ".join(sorted(set(kimlik))))
sys.exit(0 if dogru == len(SINAV) else 1)
