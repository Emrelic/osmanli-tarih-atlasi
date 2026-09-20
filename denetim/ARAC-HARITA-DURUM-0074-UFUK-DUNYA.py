# -*- coding: utf-8 -*-
"""H-0007 SINIF BUYUKLUGU: harita penceresindeki GERCEK KARA ile motorun
CIZDIGI kara arasindaki fark (km2). "Bos toprak" sikayetinin ust siniri budur.
Cikti: denetim/HARITA-DURUM-0074-UFUK-DUNYA.json
"""
import json, io, os, math, time
from shapely.geometry import shape, box as _box
from shapely.ops import unary_union

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def km2(g):
    """Kaba esit-alan: 1 derece^2 = 111,32^2 * cos(enlem) km2 — 1 derecelik
    enlem seritlerine bolerek toplar (kutup carpitmasini engeller)."""
    if g.is_empty: return 0.0
    y0, y1 = g.bounds[1], g.bounds[3]
    top = 0.0
    la = math.floor(y0)
    while la < y1:
        serit = g.intersection(_box(-180, la, 180, la + 1))
        if not serit.is_empty:
            top += serit.area * (111.32 ** 2) * math.cos(math.radians(la + 0.5))
        la += 1
    return top

t0 = time.time()
PENCERE = _box(-180, -60, 180, 85)   # data/donemler.js VERI_SINIRI
mk = json.load(io.open(os.path.join(KOK, "veri-kaynak", "motor_kara.geojson"), encoding="utf-8"))
MOTOR = shape(mk["features"][0]["geometry"]).intersection(PENCERE)
nel = json.load(io.open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))
KARA = unary_union([shape(f["geometry"]) for f in nel["features"]]).intersection(PENCERE)
print("yuklendi %.1f sn" % (time.time() - t0))

a_kara = km2(KARA)
a_motor = km2(MOTOR)
fark = KARA.difference(MOTOR)
a_fark = km2(fark)
print("gercek kara      : %12s km2" % "{:,.0f}".format(a_kara))
print("motorun cizdigi  : %12s km2" % "{:,.0f}".format(a_motor))
print("CIZILMEYEN (bos) : %12s km2  (%%%.1f)" % ("{:,.0f}".format(a_fark), 100.0*a_fark/a_kara))

# en buyuk 25 cizilmeyen parca
parcalar = list(fark.geoms) if fark.geom_type == "MultiPolygon" else [fark]
olcul = sorted(((km2(p), p) for p in parcalar), key=lambda x: -x[0])[:25]
liste = [{"km2": round(a, 1), "merkez": [round(p.centroid.y, 3), round(p.centroid.x, 3)],
          "kutu": [round(v, 2) for v in p.bounds]} for a, p in olcul]
for e in liste[:15]:
    print("   %12s km2  merkez %s" % ("{:,.0f}".format(e["km2"]), e["merkez"]))

io.open(os.path.join(KOK, "denetim", "HARITA-DURUM-0074-UFUK-DUNYA.json"), "w",
        encoding="utf-8").write(json.dumps(
    {"gercek_kara_km2": round(a_kara, 1), "motor_kara_km2": round(a_motor, 1),
     "cizilmeyen_km2": round(a_fark, 1),
     "cizilmeyen_yuzde": round(100.0*a_fark/a_kara, 2),
     "parca_sayisi": len(parcalar), "en_buyuk_25": liste}, ensure_ascii=False, indent=1))
print("toplam %.1f sn" % (time.time() - t0))
