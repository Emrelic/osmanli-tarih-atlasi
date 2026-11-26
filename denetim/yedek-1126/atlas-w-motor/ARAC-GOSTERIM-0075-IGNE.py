# -*- coding: utf-8 -*-
"""GOSTERIM-0075 / H-0048-2 (yatay M-4976) — Sisam Boğazı → Milas "düz çapraz koyu çizgi + üçgen dilim":
gövde geometrisinde İNCE UZUN uzantı (iğne) var mı, hangi gövdede, uzunluğu/genişliği ne?

Yöntem: her gövdeyi 0,02° (≈2 km) AÇARAK (−tampon → +tampon) sadeleştir; gövde − açılmış = İNCE parçalar.
Kutuyla kesişen ve uzunluğu ≥ 15 km olan ince parçaları listele (uzunluk = sınır kutusu köşegeni, genişlik = 2A/P).
SALT OKUR. Girdi HEAD kopyası.  py denetim/ARAC-GOSTERIM-0075-IGNE.py <KOK> <gun> lon0 lat0 lon1 lat1
"""
import io, os, sys, json, time, math
from shapely.geometry import Polygon, box
from shapely.ops import unary_union
from shapely import make_valid

KOK = sys.argv[1]; GUN = sys.argv[2]; KUTU = tuple(float(x) for x in sys.argv[3:7])
BURASI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

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
    except Exception:
        return None
def birlestir(ps):
    try: return unary_union(ps)
    except Exception: return unary_union([make_valid(p) for p in ps])
def gecerli(f, t, g): return (not f or f <= g) and (not t or g < t)

kt = box(*KUTU)
B = {}
for d in DONEMLER:
    if not gecerli(d.get("f"), d.get("t"), GUN): continue
    print("dönem:", d.get("f"), d.get("t"), d.get("ad"), "· o:%d v:%d h:%d parça" % (len(d.get("o") or []), len(d.get("v") or []), len(d.get("h") or [])))
    for alan, kim in (("o", "OSM-dogrudan"), ("v", "OSM-tabi")):
        idx = []
        for e in d.get(alan) or []:
            if isinstance(e, int): idx.append(e)
            elif isinstance(e, dict): idx.extend(e.get("g") or [])
        ps = [poligon(PARCA_HALKA[i], PARCALAR) for i in idx if i < len(PARCA_HALKA)]
        ps = [p for p in ps if p is not None]
        if ps: B[kim] = birlestir(ps)
    break
for dv in DEVLET_HARITA:
    for d in dv.get("dnm") or []:
        if not gecerli(d.get("f"), d.get("t"), GUN): continue
        ps = [poligon(D_PARCA_HALKA[i], D_PARCALAR) for i in (d.get("g") or []) if i < len(D_PARCA_HALKA)]
        ps = [p for p in ps if p is not None and p.intersects(kt)]
        if ps: B[dv["id"]] = birlestir(ps)
        break

def km_uzun(g):
    x0, y0, x1, y1 = g.bounds; la = math.radians((y0 + y1) / 2)
    return math.hypot((x1 - x0) * 111.32 * math.cos(la), (y1 - y0) * 110.57)
def km2(g): return g.area * 111.32 ** 2 * math.cos(math.radians(g.centroid.y))

SON = {}
for kim, g in B.items():
    if not g.intersects(kt): continue
    acik = g.buffer(-0.02).buffer(0.02)
    ince = g.difference(acik)
    parcalar = list(ince.geoms) if hasattr(ince, "geoms") else [ince]
    liste = []
    for p in parcalar:
        if p.is_empty or not p.intersects(kt): continue
        u = km_uzun(p)
        if u < 15: continue
        w = 2 * p.area / p.length * 111.32 if p.length else 0
        liste.append({"uzunluk_km": round(u, 1), "genislik_km": round(w, 2), "alan_km2": round(km2(p), 1),
                      "sinir_kutusu": [round(v, 3) for v in p.bounds]})
    liste.sort(key=lambda r: -r["uzunluk_km"])
    SON[kim] = {"govde_km2_kutuda": round(km2(g.intersection(kt))), "ince_parca_sayisi": len(liste), "ince_parcalar": liste[:8]}
    print("== %-14s kutuda %8s km² · ince parça(≥15 km) %d" % (kim, "{:,}".format(SON[kim]["govde_km2_kutuda"]), len(liste)))
    for r in liste[:5]: print("     ", r)
io.open(os.path.join(BURASI, "denetim", "GOSTERIM-0075-IGNE.json"), "w", encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazıldı · %.1f sn" % (time.time() - t0))
