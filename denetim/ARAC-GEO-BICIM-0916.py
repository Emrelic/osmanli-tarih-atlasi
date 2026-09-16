# -*- coding: utf-8 -*-
"""GEOMETRI 0916 — açıklanamayan örtüşmelerin BİÇİMİ. YALNIZ OKUR.
Her vaka için davetsiz gövdenin, sahibi o olmayan taban hücrelerinden ne kadar
kapsadığı (hücre başına %) ve örtüşme parçalarının ortalama genişliği
(2·alan/çevre, km). Genişlik ≈ 3 km ise SEYRELT (tol 0,03°) sınıfı, hücre
%'si yüksekse HÜCRE DÜZEYİ atama (devir/dolgu/bayat) sınıfı.
"""
import json, math, os, sys
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Polygon, box
from shapely.ops import unary_union
from shapely.strtree import STRtree
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import importlib.util
_sp = importlib.util.spec_from_file_location("geo", os.path.join(KOK, "denetim", "ARAC-GEO-OLCUM-0916.py"))
geo = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(geo)
VAKA = {"H-0099-1": ("ispanya", "almanya"), "H-0099-3": ("iskocya", "ingiltere"),
        "H-0107": ("san-devletleri", "toungoo"), "H-0097-4": ("rusya", "lehistan"),
        "H-0102": ("kazak-hanligi", "rusya"), "H-0099-2": ("fransa", "ispanya"),
        "H-0109": ("qing-hanedani", "mac-hanedani")}
DN = geo.js_oku("donemler.js"); DH = geo.js_oku("devletler_harita.js"); PG = geo.js_oku("petek_govde.js")
YER = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
PET = DN["PETEKLER"]; PGP = PG["PETEK_GOVDE_PARCA"]
cell = []
for ix in PG["PETEK_GOVDE"]:
    ps = [Polygon(PGP[j][0], PGP[j][1:]) for j in ix]
    cell.append(unary_union([p if p.is_valid else p.buffer(0) for p in ps]) if ps else Polygon())
agac = STRtree(cell)
norm = lambda s: {"OSMANLI": "OSM-o", "TABI": "OSM-v"}.get(s, s)
out = {}
for v in geo.VAKALAR:
    if v[0] not in VAKA:
        continue
    vid, gun, la0, la1, lo0, lo1 = v
    dav, asil = VAKA[vid]
    B = box(lo0, la0, lo1, la1)
    g = {}
    for s in DH["DEVLET_HARITA"]:
        if s["id"] in (dav, asil):
            for p in s["dnm"]:
                if p["f"] <= gun < p["t"]:
                    g[s["id"]] = geo.coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"])
    lat = (la0 + la1) / 2
    x = g[dav].intersection(g[asil]).intersection(B)
    parca = [p for p in (x.geoms if hasattr(x, "geoms") else [x]) if isinstance(p, Polygon)]
    gen = [(round(geo.km2(p, lat)), round(2 * p.area / p.length * 111.32, 1)) for p in parca if geo.km2(p, lat) > 5]
    hucre = []
    for i in agac.query(g[dav].intersection(B.buffer(0.5))):
        i = int(i); c = cell[i]
        y = YER.get(PET[i]["a"]); s_ = norm(geo.sahip(y, gun)) if y else "?"
        if s_ == dav:
            continue
        k = g[dav].intersection(c)
        if k.is_empty or geo.km2(k, c.centroid.y) < 5:
            continue
        a_ = g[asil].intersection(c).area / c.area if asil in g else 0
        hucre.append({"hucre": PET[i]["a"], "sahip": s_, "kur": y.get("kur") if y else None,
                      "davetsiz_%": round(100 * k.area / c.area, 1), "asil_govde_%": round(100 * a_, 1),
                      "km2": round(geo.km2(k, c.centroid.y))})
    hucre.sort(key=lambda h: -h["km2"])
    out[vid] = {"davetsiz": dav, "asil": asil, "davetsiz_dnm": [p for s in DH["DEVLET_HARITA"] if s["id"] == dav
                                                               for p in [{"f": q["f"], "t": q["t"]} for q in s["dnm"]]
                                                               if p["f"] <= gun < p["t"]],
                "ortusme_parca_(km2,genislik_km)": gen, "davetsizin_yabanci_hucreleri": hucre[:8]}
json.dump(out, open(os.path.join(KOK, "denetim", "OLCUM-GEO-BICIM-0916.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
for k, v in out.items():
    print("==", k, v["davetsiz"], v["davetsiz_dnm"], "×", v["asil"])
    print("   parça(km², genişlik km):", v["ortusme_parca_(km2,genislik_km)"])
    for h in v["davetsizin_yabanci_hucreleri"]:
        print("   ", h)
