import sys, json
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Polygon, Point
from shapely.ops import unary_union
import os  # MUTLAK-KOK-DENETIM-1006: kök için
s = open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data", "devletler_harita.js"), encoding="utf-8").read()
def dizi(ad):
    i = s.index("window." + ad + " =") + len("window." + ad + " =")
    return json.loads(s[i:s.index(";\n", i)])
PAR, HAL, DH = dizi("DEVLET_PARCALAR"), dizi("DEVLET_PARCA_HALKA"), dizi("DEVLET_HARITA")
D = {d["id"]: d for d in DH}
dn = [x for x in D["avusturya"]["dnm"] if x["f"] <= "1914-07-28" <= x["t"]][0]
g = unary_union([Polygon(PAR[ri]).buffer(0) for gi in dn["g"] for ri in HAL[gi] if len(PAR[ri]) >= 4])
print("avusturya 1914 alan %.1f°  sınır kutusu %s" % (g.area, [round(v, 1) for v in g.bounds]))
for ad, lon, lat in [("Budapeşte", 19.04, 47.50), ("Viyana", 16.37, 48.21), ("Zagreb", 15.98, 45.81),
                     ("Kluj/Kolojvar", 23.59, 46.77), ("Prag", 14.42, 50.08), ("Lviv/Lemberg", 24.03, 49.84), ("Saraybosna", 18.41, 43.86)]:
    print("  %-14s içinde mi: %s" % (ad, g.contains(Point(lon, lat))))
