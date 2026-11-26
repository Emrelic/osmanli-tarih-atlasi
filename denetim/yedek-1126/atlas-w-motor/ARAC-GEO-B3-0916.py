# -*- coding: utf-8 -*-
"""GEOMETRI 0916 — HİPOTEZ-5: hücresiz boşluktaki şeritler B3 KORİDOR DOLDURMASI. YALNIZ OKUR.

`_b3_koridor_kirp` (uret_petek.py) BİREBİR kopyalanır (B3_SADELIK 0,02 ·
B3_KAPAMA_DER 0,45 · ağız = dışarıya değen yer · derinlik = Hausdorff(c, ağız)
· w = 2A/P · derin>w ise doldur, ağızdan w kadar bırak). Yasak sınavı:
bileşenin İÇİNDE yerleşim noktası (davetsizin olmayan) varsa doldurmaz.
Girdi gövde: yayındaki gövdenin açılmış (r=0,15°) hâli — şeritsiz taban.
Sınav: B3'ün doldurduğu alan ARAC-GEO-INCEHUCRE'nin şerit noktalarını kapsıyor mu?
ÖNGÖRÜ (ölçümden önce): H-0102'nin iki şeridinin ikisini de B3 üretir.
"""
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Point, box
from shapely.ops import unary_union
from shapely.validation import make_valid
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import importlib.util
_sp = importlib.util.spec_from_file_location("geo", os.path.join(KOK, "denetim", "ARAC-GEO-OLCUM-0916.py"))
geo = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(geo)


def temiz(q):
    if not q.is_valid: q = make_valid(q)
    if q.geom_type == "GeometryCollection":
        q = unary_union([p for p in q.geoms if p.geom_type in ("Polygon", "MultiPolygon")])
    return q.buffer(0)


def kapat(g, r):
    k = temiz(g.buffer(r, join_style=2, mitre_limit=2.0)).buffer(-r, join_style=2, mitre_limit=2.0)
    return unary_union([temiz(k), g])


def b3(g, noktalar_yabanci):
    gs = g.simplify(0.02, preserve_topology=True)
    k = kapat(gs, 0.45)
    aday = temiz(k.difference(g))
    if aday.is_empty:
        return [], {}
    x0, y0, x1, y1 = g.bounds
    m = 0.45 * 4
    disari = temiz(box(x0 - m, y0 - m, x1 + m, y1 + m).difference(k))
    dk = disari.buffer(0.01)
    dolan, say = [], {"kapali": 0, "sig": 0, "yasak": 0, "doldu": 0}
    for c in (list(aday.geoms) if aday.geom_type == "MultiPolygon" else [aday]):
        if c.is_empty or c.length <= 0:
            continue
        agiz = temiz(c.intersection(dk))
        if agiz.is_empty:
            say["kapali"] += 1; continue
        w = 2 * c.area / c.length
        d = c.hausdorff_distance(agiz)
        if d <= w:
            say["sig"] += 1; continue
        if any(c.contains(p) for p in noktalar_yabanci):
            say["yasak"] += 1; continue
        gv = temiz(c.difference(agiz.buffer(w)))
        if not gv.is_empty:
            dolan.append(gv); say["doldu"] += 1
    return dolan, say


SERIT = json.load(open(os.path.join(KOK, "denetim", "OLCUM-GEO-INCEHUCRE-0916.json"), encoding="utf-8"))
DH = geo.js_oku("devletler_harita.js")
YL = girdi.yukle(sessiz=True)
V = {v[0]: v for v in geo.VAKALAR}
out = []
for vid, veri in SERIT.items():
    for s in veri["serit_r017"]:
        _, gun, *_ = V[vid]
        dev = next(x for x in DH["DEVLET_HARITA"] if x["id"] == s["govde"])
        p = next(q for q in dev["dnm"] if q["f"] <= gun < q["t"])
        g = geo.coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"])
        pk = Point(s["nokta"])
        g_loc = g.intersection(pk.buffer(8))
        acik = g_loc.buffer(-0.15).buffer(0.15)
        yab = [Point(y["lon"], y["lat"]) for y in YL if "lat" in y
               and abs(y["lon"] - pk.x) < 9 and abs(y["lat"] - pk.y) < 9
               and geo.sahip(y, gun) != s["govde"]]
        dolan, say = b3(acik, yab)
        kaps = any(d.buffer(0.02).contains(pk) for d in dolan)
        out.append({"vaka": vid, "govde": s["govde"], "serit_km2": s["km2"], "nokta": s["nokta"],
                    "b3_kapsar": kaps, "b3_sayac": say,
                    "b3_dolan_km2": round(sum(geo.km2(d, pk.y) for d in dolan))})
json.dump(out, open(os.path.join(KOK, "denetim", "OLCUM-GEO-B3-0916.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
for r in out:
    print(r)
