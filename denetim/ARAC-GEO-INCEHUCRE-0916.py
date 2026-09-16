# -*- coding: utf-8 -*-
"""GEOMETRI 0916 — ince uzun TABAN hücre taraması (H-0102 · H-0109 · H-0107). YALNIZ OKUR.
Kutudaki her taban hücre: alan, Polsby-Popper, uzunluk/genişlik oranı
(minimum_rotated_rectangle), o gün sahibi, o günkü hangi gövde(ler) boyuyor.
Ayrıca ikinci tur şerit taraması: açma yarıçapı 0,15° (≈17 km).
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

DN = geo.js_oku("donemler.js"); DH = geo.js_oku("devletler_harita.js"); PG = geo.js_oku("petek_govde.js")
YER = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
PET = DN["PETEKLER"]; PGP = PG["PETEK_GOVDE_PARCA"]
cell = []
for ix in PG["PETEK_GOVDE"]:
    ps = [Polygon(PGP[j][0], PGP[j][1:]) for j in ix]
    cell.append(unary_union([p if p.is_valid else p.buffer(0) for p in ps]) if ps else Polygon())
agac = STRtree(cell)


def oran(g):
    r = g.minimum_rotated_rectangle
    cs = list(r.exterior.coords)
    a = math.dist(cs[0], cs[1]); b = math.dist(cs[1], cs[2])
    return round(max(a, b) / max(min(a, b), 1e-9), 1)


out = {}
for vid, gun, la0, la1, lo0, lo1 in geo.VAKALAR:
    if vid not in ("H-0102", "H-0109", "H-0107"):
        continue
    B = box(lo0, la0, lo1, la1)
    lat = (la0 + la1) / 2
    govde = {}
    for s in DH["DEVLET_HARITA"]:
        for p in s["dnm"]:
            if p["f"] <= gun < p["t"]:
                g = geo.coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"])
                if g.intersects(B):
                    govde[s["id"]] = g
    hucreler = []
    for i in agac.query(B):
        i = int(i); c = cell[i]
        if c.is_empty or geo.km2(c.intersection(B), lat) < 100:
            continue
        y = YER.get(PET[i]["a"])
        boy = {k: round(100 * g.intersection(c).area / c.area) for k, g in govde.items()
               if g.intersection(c).area / c.area > 0.02}
        hucreler.append({"hucre": PET[i]["a"], "km2": round(geo.km2(c, lat)), "pp": round(geo.pp(c), 3),
                         "uzun/gen": oran(c), "sahip": geo.sahip(y, gun) if y else "?",
                         "kur": y.get("kur") if y else None, "bos": y.get("bos") if y else None, "boyayan_%": boy})
    seritler = []
    for k, g in govde.items():
        ince = g.difference(g.buffer(-0.15).buffer(0.15).buffer(0.01)).intersection(B)
        for q in (ince.geoms if hasattr(ince, "geoms") else [ince]):
            if isinstance(q, Polygon) and geo.km2(q, lat) > 300:
                rp = q.representative_point()
                alt = [PET[int(i)]["a"] for i in agac.query(rp) if cell[int(i)].contains(rp)]
                seritler.append({"govde": k, "km2": round(geo.km2(q, lat)), "uzun/gen": oran(q),
                                 "nokta": [round(rp.x, 2), round(rp.y, 2)], "alt_hucre": alt})
    out[vid] = {"hucre": sorted(hucreler, key=lambda h: h["pp"])[:12], "serit_r017": seritler}
json.dump(out, open(os.path.join(KOK, "denetim", "OLCUM-GEO-INCEHUCRE-0916.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
for k, v in out.items():
    print("==", k)
    for h in v["hucre"]:
        print("  H", h)
    for s in v["serit_r017"]:
        print("  Ş", s)
