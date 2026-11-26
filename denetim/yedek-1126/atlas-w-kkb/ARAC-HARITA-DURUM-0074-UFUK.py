# -*- coding: utf-8 -*-
"""BOS TOPRAK sinifi: GERCEK KARA (ne_10m_land) uzerinde motorun cizmedigi
hucreler + o hucrelerin en yakin yerlesim noktasina uzakligi.
Sinif ayrimi:
  C-UFUK  : gercek kara, motor karasinin DISINDA  (A1 200 km tavani / ufuk)
  A-NOKTA : motor karasi ICINDE ama o gun sahipli petek yok
Cikti: denetim/HARITA-DURUM-0074-UFUK.json
"""
import json, io, os, sys
from shapely.geometry import shape, Point
from shapely.ops import unary_union
from shapely.prepared import prep

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = [y for y in girdi.yukle(sessiz=True) if y.get("lat") is not None]
print("nokta:", len(Y))

mk = json.load(io.open(os.path.join(KOK, "veri-kaynak", "motor_kara.geojson"), encoding="utf-8"))
MOTOR = prep(shape(mk["features"][0]["geometry"]))

KUTULAR = {
    "H-0007 Bohemya": (49.84, 51.10, 15.73, 18.09),
    "H-0014 Poti":    (41.82, 42.64, 41.35, 42.70),
    "H-0015 EflakBogdan": (43.14, 48.21, 22.91, 29.42),
}

# gercek kara — yalnizca kutulari kesen parcalari al
nel = json.load(io.open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))
from shapely.geometry import box as _box
kapsayan = _box(10, 38, 45, 53)
parcalar = []
for f in nel["features"]:
    g = shape(f["geometry"])
    if g.intersects(kapsayan):
        parcalar.append(g.intersection(kapsayan))
KARA = prep(unary_union(parcalar))
print("gercek kara parcasi:", len(parcalar))

SON = {}
for ad, (la0, la1, lo0, lo1) in KUTULAR.items():
    kara_ic = kara_dis = deniz = 0
    ornek = []
    la = la0
    while la <= la1:
        lo = lo0
        while lo <= lo1:
            p = Point(lo, la)
            if not KARA.contains(p):
                deniz += 1
            elif MOTOR.contains(p):
                kara_ic += 1
            else:
                kara_dis += 1
                en = min(Y, key=lambda y: girdi.km(la, lo, y["lat"], y["lon"]))
                dk = girdi.km(la, lo, en["lat"], en["lon"])
                if len(ornek) < 15:
                    ornek.append({"lat": round(la, 2), "lon": round(lo, 2),
                                  "en_yakin_nokta": en["ad"], "km": round(dk, 1)})
            lo += 0.1
        la += 0.1
    top = kara_ic + kara_dis
    SON[ad] = {"kutu": [la0, la1, lo0, lo1], "deniz_hucre": deniz,
               "kara_hucre": top,
               "motor_CIZIYOR": kara_ic, "motor_CIZMIYOR": kara_dis,
               "cizilmeyen_yuzde": round(100.0 * kara_dis / top, 1) if top else 0,
               "cizilmeyen_ornek": ornek}
    print(ad, "| deniz:", deniz, "| kara:", top, "| motor cizmiyor:", kara_dis,
          "(%s%%)" % SON[ad]["cizilmeyen_yuzde"])
    if ornek:
        print("   en yakin nokta km ornekleri:",
              ", ".join("%s" % o["km"] for o in ornek[:8]))

yol = os.path.join(KOK, "denetim", "HARITA-DURUM-0074-UFUK.json")
io.open(yol, "w", encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazildi:", yol)
