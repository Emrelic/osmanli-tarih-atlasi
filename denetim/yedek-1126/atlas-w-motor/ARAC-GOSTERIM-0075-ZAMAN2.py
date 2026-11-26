# -*- coding: utf-8 -*-
"""GOSTERIM-0075 / H-0024 — KAÇ GÜN? Şartnamedeki bölgelerde (Cezayir · Şattülarap) belirli gövde çiftlerinin
çakışmasının ZAMAN boyu: her (kayıt × kayıt) çifti için pencere kesişimi × poligon kesişimi bir kez.
Bölge kutusuna KIRPILARAK hesaplanır (ucuz). ZAMAN.py'nin (tüm atlas) hafif kardeşi.
SALT OKUR. Girdi HEAD kopyası.  py denetim/ARAC-GOSTERIM-0075-ZAMAN2.py <KOK>
Çıktı: denetim/GOSTERIM-0075-ZAMAN2.json"""
import io, os, sys, json, time, math, datetime
from collections import defaultdict
from shapely.geometry import Polygon, box
from shapely.ops import unary_union
from shapely import make_valid

KOK = sys.argv[1]
BURASI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ESIK = 100.0
BOLGELER = {   # ad: (kutu lon0,lat0,lon1,lat1 , kimlik kümesi)
    "Cezayir": ((-3.0, 30.0, 10.0, 38.5), {"OSM-tabi", "OSM-dogrudan", "fransa-cumhuriyet", "abdulkadir", "fransa", "fas"}),
    "Şattülarap": ((44.0, 27.0, 52.0, 34.0), {"OSM-tabi", "OSM-dogrudan", "kacar", "suud"}),
    "Yergöğü-İbrail": ((24.0, 43.0, 29.0, 46.0), {"OSM-tabi", "OSM-dogrudan", "eflak", "bogdan", "rusya", "avusturya"}),
}
def satir_json(yol, degisken):
    for satir in io.open(yol, encoding="utf-8"):
        if satir.startswith("window." + degisken + " "):
            i = satir.index("=") + 1
            return json.loads(satir[i:].rstrip().rstrip(";\n").rstrip(";"))
    raise KeyError(degisken)
t0 = time.time()
DON = os.path.join(KOK, "data", "donemler.js"); DEV = os.path.join(KOK, "data", "devletler_harita.js")
PARCALAR = satir_json(DON, "PARCALAR"); PARCA_HALKA = satir_json(DON, "PARCA_HALKA"); DONEMLER = satir_json(DON, "DONEMLER")
D_PARCALAR = satir_json(DEV, "DEVLET_PARCALAR"); D_PARCA_HALKA = satir_json(DEV, "DEVLET_PARCA_HALKA")
DEVLET_HARITA = satir_json(DEV, "DEVLET_HARITA")
print("ayrıştırma %.1f sn" % (time.time() - t0), flush=True)
def poligon(halka, havuz):
    dis = havuz[halka[0]]
    if len(dis) < 4: return None
    ic = [havuz[i] for i in halka[1:] if len(havuz[i]) >= 4]
    try:
        p = Polygon(dis, ic)
        if not p.is_valid: p = make_valid(p)
        return p if not p.is_empty else None
    except Exception: return None
def birlestir(ps):
    try: return unary_union(ps)
    except Exception: return unary_union([make_valid(p) for p in ps])
def o(s): y, m, d = (int(x) for x in s.split("-")); return datetime.date(y, m, d).toordinal()
def km2(g):
    return 0.0 if g.is_empty else g.area * 111.32 ** 2 * math.cos(math.radians(g.centroid.y))

SON = {}
for ad, (kutu, kim_kume) in BOLGELER.items():
    kt = box(*kutu); K = []
    for d in DONEMLER:
        f, t = d.get("f"), d.get("t")
        if not f or not t: continue
        for alan, kim in (("o", "OSM-dogrudan"), ("v", "OSM-tabi")):
            if kim not in kim_kume: continue
            idx = []
            for e in d.get(alan) or []:
                if isinstance(e, int): idx.append(e)
                elif isinstance(e, dict): idx.extend(e.get("g") or [])
            ps = [poligon(PARCA_HALKA[i], PARCALAR) for i in idx if i < len(PARCA_HALKA)]
            ps = [p for p in ps if p is not None and p.intersects(kt)]
            if ps:
                g = birlestir(ps).intersection(kt)
                if not g.is_empty: K.append((kim, o(f), o(t), g))
    for dv in DEVLET_HARITA:
        if dv["id"] not in kim_kume: continue
        for d in dv.get("dnm") or []:
            f, t = d.get("f"), d.get("t")
            if not f or not t: continue
            ps = [poligon(D_PARCA_HALKA[i], D_PARCALAR) for i in (d.get("g") or []) if i < len(D_PARCA_HALKA)]
            ps = [p for p in ps if p is not None and p.intersects(kt)]
            if ps:
                g = birlestir(ps).intersection(kt)
                if not g.is_empty: K.append((dv["id"], o(f), o(t), g))
    print("%s · %d kayıt · %.0f sn" % (ad, len(K), time.time() - t0), flush=True)
    CIFT = defaultdict(list)
    for i in range(len(K)):
        for j in range(i + 1, len(K)):
            ka, fa, ta, ga = K[i]; kb, fb, tb, gb = K[j]
            if ka == kb: continue
            f, t = max(fa, fb), min(ta, tb)
            if t - f < 1: continue
            if not ga.intersects(gb): continue
            a = km2(ga.intersection(gb))
            if a < ESIK: continue
            CIFT[" + ".join(sorted((ka, kb)))].append((f, t, a))
    satir = []
    for k, L in CIFT.items():
        L.sort(); top = 0; son = None
        for f, t, a in L:
            if son is None or f > son: top += t - f; son = t
            elif t > son: top += t - son; son = t
        satir.append({"cift": k, "gun": top, "yil": round(top / 365.25, 1), "ilk": datetime.date.fromordinal(min(x[0] for x in L)).isoformat(),
                      "son": datetime.date.fromordinal(max(x[1] for x in L)).isoformat(), "kayit_cifti": len(L),
                      "en_buyuk_km2": round(max(x[2] for x in L)), "km2_gun": round(sum(x[2] * (x[1] - x[0]) for x in L))})
    satir.sort(key=lambda r: -r["km2_gun"])
    SON[ad] = satir
    print("  %d çift" % len(satir))
    for r in satir[:10]: print("   %-44s %6.1f yıl %s→%s  en büyük %8s km²  %d kayıt" % (r["cift"][:44], r["yil"], r["ilk"], r["son"], "{:,}".format(r["en_buyuk_km2"]), r["kayit_cifti"]), flush=True)
io.open(os.path.join(BURASI, "denetim", "GOSTERIM-0075-ZAMAN2.json"), "w", encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazıldı · %.1f sn" % (time.time() - t0))
