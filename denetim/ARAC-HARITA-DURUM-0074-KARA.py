# -*- coding: utf-8 -*-
"""Motorun cizdigi kara (veri-kaynak/motor_kara.geojson) H-0007/H-0014/H-0015
kutularini kapsiyor mu? 0,1 derece izgara.
"""
import json, io, os, sys
from shapely.geometry import shape, Point
from shapely.prepared import prep

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
d = json.load(io.open(os.path.join(KOK, "veri-kaynak", "motor_kara.geojson"), encoding="utf-8"))
geo = shape(d["features"][0]["geometry"])
P = prep(geo)
print("motor kara alan (derece^2):", round(geo.area, 1))

KUTULAR = {
    "H-0007 Bohemya": (49.84, 51.10, 15.73, 18.09),
    "H-0014 Poti":    (41.82, 42.64, 41.35, 42.70),
    "H-0015 EflakBogdan": (43.14, 48.21, 22.91, 29.42),
}
SON = {}
for ad, (la0, la1, lo0, lo1) in KUTULAR.items():
    ic = dis = 0
    disornek = []
    la = la0
    while la <= la1:
        lo = lo0
        while lo <= lo1:
            if P.contains(Point(lo, la)):
                ic += 1
            else:
                dis += 1
                if len(disornek) < 12: disornek.append([round(la, 2), round(lo, 2)])
            lo += 0.1
        la += 0.1
    SON[ad] = {"kutu": [la0, la1, lo0, lo1], "motor_karasi_ICINDE": ic,
               "motor_karasi_DISINDA": dis,
               "disinda_yuzde": round(100.0 * dis / (ic + dis), 1),
               "disarida_ornek_latlon": disornek}
    print(ad, "| icinde:", ic, "| DISINDA:", dis,
          "(%s%%)" % SON[ad]["disinda_yuzde"])

yol = os.path.join(KOK, "denetim", "HARITA-DURUM-0074-KARA.json")
io.open(yol, "w", encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazildi:", yol)
