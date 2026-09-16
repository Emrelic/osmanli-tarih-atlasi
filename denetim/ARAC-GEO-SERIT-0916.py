# -*- coding: utf-8 -*-
"""GEOMETRI 0916 — İNCE UZUN ŞERİT sınavı (H-0102 · H-0109 · H-0107). YALNIZ OKUR.

Şerit = gövdenin morfolojik AÇMA'da (buffer −r, +r; r=0,08° ≈ 9 km) kaybolan
ince uzantıları. Soru: bunlar B2 köprüsü mü?
Sınav: açılmış gövdenin bileşenleri (ana + enklavlar) üzerinde B2 formülü
birebir koşulur (ARAC-GEO-B2-0916.bantlar); şeridin temsil noktası bir bandın
içindeyse B2.
ÖNGÖRÜ (ölçümden önce): H-0102 ve H-0109'daki şeritlerin ≥%70'i B2.
ÇÜRÜTÜCÜ: şerit bant dışındaysa sebep başka (PUAN ızgarası · petek kenarı).
"""
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Polygon, box
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
import importlib.util
def _yukle(ad, dosya):
    sp = importlib.util.spec_from_file_location(ad, os.path.join(KOK, "denetim", dosya))
    m = importlib.util.module_from_spec(sp); sp.loader.exec_module(m); return m
geo = _yukle("geo", "ARAC-GEO-OLCUM-0916.py")
b2 = None  # ARAC-GEO-B2 modül düzeyinde koşuyor; bantlar() kopyası aşağıda
import math
from shapely.geometry import LineString
from shapely.ops import nearest_points
kmd = lambda lat: 111.32 * max(0.15, math.cos(math.radians(lat)))


def bantlar(g):
    ps = sorted((list(g.geoms) if g.geom_type == "MultiPolygon" else [g]), key=lambda p: -p.area)
    ana, out = ps[0], []
    for p in ps[1:]:
        n1, n2 = nearest_points(ana, p)
        lat = (n1.y + n2.y) / 2
        d = math.hypot((n2.x - n1.x) * kmd(lat), (n2.y - n1.y) * 110.574)
        if d > 250 or d < 1e-6:
            continue
        x0, y0, x1, y1 = p.bounds
        la = (y0 + y1) / 2
        w_e = max(min((x1 - x0) * kmd(la), (y1 - y0) * 110.574), 25.0)
        e_enk = (w_e / 2) / kmd(la); e_ana = min(2 * e_enk, 3.0)
        dx, dy = n2.x - n1.x, n2.y - n1.y
        bo = math.hypot(dx, dy); px, py = -dy / bo, dx / bo
        sol, sag = [], []
        for i in range(25):
            t = i / 24
            w = (e_ana + (e_enk - e_ana) * t) * (1 - 0.35 * math.sin(math.pi * t))
            cx, cy = n1.x + dx * t, n1.y + dy * t
            sol.append((cx + px * w, cy + py * w)); sag.append((cx - px * w, cy - py * w))
        out.append((Polygon(sol + sag[::-1]).buffer(0), round(d), round(e_ana * 111)))
    return out


HEDEF = [("H-0102", "kazak-hanligi"), ("H-0102", "rusya"), ("H-0109", "qing-hanedani"),
         ("H-0109", "mac-hanedani"), ("H-0107", "toungoo"), ("H-0107", "san-devletleri")]
DH = geo.js_oku("devletler_harita.js")
V = {v[0]: v for v in geo.VAKALAR}
out, n, nb2 = [], 0, 0
for vid, did in HEDEF:
    _, gun, la0, la1, lo0, lo1 = V[vid]
    B = box(lo0, la0, lo1, la1)
    s = next(x for x in DH["DEVLET_HARITA"] if x["id"] == did)
    p = next(q for q in s["dnm"] if q["f"] <= gun < q["t"])
    g = geo.coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"])
    acik = g.buffer(-0.08).buffer(0.08)
    ince = g.difference(acik.buffer(0.01)).intersection(B)
    bt = bantlar(acik) if not acik.is_empty else []
    for q in (ince.geoms if hasattr(ince, "geoms") else [ince]):
        if not isinstance(q, Polygon):
            continue
        lat = q.centroid.y
        if geo.km2(q, lat) < 150:
            continue
        n += 1
        rp = q.representative_point()
        hit = next(((d, w) for bb, d, w in bt if bb.buffer(0.01).contains(rp)), None)
        nb2 += hit is not None
        out.append({"vaka": vid, "govde": did, "dnm": [p["f"], p["t"]], "km2": round(geo.km2(q, lat)),
                     "uzunluk_km": round(q.length / 2 * 111.32 * math.cos(math.radians(lat))),
                     "nokta": [round(rp.x, 2), round(rp.y, 2)],
                     "b2_bant": {"uzunluk_km": hit[0], "ana_uc_yari_genislik_km": hit[1]} if hit else None})
ozet = {"serit_>=150km2": n, "b2_icinde": nb2}
json.dump({"ozet": ozet, "serit": out}, open(os.path.join(KOK, "denetim", "OLCUM-GEO-SERIT-0916.json"), "w",
                                              encoding="utf-8"), ensure_ascii=False, indent=1)
print(ozet)
for r in out:
    print(r)
