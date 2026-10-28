"""ACILIS-ANIM-0081 — hedef künyelerin atlas gövdelerini ölçer (salt okur).
Her künye için: kaç dönem, EN BÜYÜK alanlı dönemin tarihi, o dönemin ham
koordinat sayısı ve açılış perdesindeki yöntemle (ARAYUZ-0077 ulke_yolu)
sadeleştirilmiş SVG yolunun bayt boyu."""
import sys, json, re, math, time
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Polygon, MultiPolygon
from shapely.ops import unary_union

t0 = time.time()
import os  # MUTLAK-KOK-DENETIM-1006: kök için
s = open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data", "devletler_harita.js"), encoding="utf-8").read()
def dizi(ad):
    i = s.index("window." + ad + " =") + len("window." + ad + " =")
    j = s.index(";\n", i)
    return json.loads(s[i:j])
PAR = dizi("DEVLET_PARCALAR")
HAL = dizi("DEVLET_PARCA_HALKA")
DH = dizi("DEVLET_HARITA")
print("yükleme %.1f sn · parça %d · halka-grup %d · künye-gövde %d" % (time.time() - t0, len(PAR), len(HAL), len(DH)))
IDX = {d["id"]: d for d in DH}

def halkalar(g):
    return [g] if isinstance(g, Polygon) else list(g.geoms)

def ulke_yolu(g, anakara_esik=0.02):
    ps = halkalar(g)
    en = max(p.area for p in ps)
    ps = [p for p in ps if p.area >= en * anakara_esik]
    g = unary_union(ps)
    x0, y0, x1, y1 = g.bounds
    k = math.cos(math.radians((y0 + y1) / 2))
    w, h = (x1 - x0) * k, (y1 - y0)
    sc = 96.0 / max(w, h)
    tol = max(w, h) * 0.008
    g = g.simplify(tol / max(k, 0.2), preserve_topology=True)
    ox = (100 - w * sc) / 2; oy = (100 - h * sc) / 2
    d = []
    for p in halkalar(g):
        d.append("M" + "L".join("%.1f %.1f" % (ox + (x - x0) * k * sc, oy + (y1 - y) * sc) for x, y in p.exterior.coords) + "Z")
    return "".join(d)

def govde(gidx):
    polys = []
    for gi in gidx:
        for ri in HAL[gi]:
            r = PAR[ri]
            if len(r) >= 4:
                p = Polygon(r).buffer(0)
                if not p.is_empty: polys.append(p)
    return unary_union(polys) if polys else None

for kid in sys.argv[1:]:
    d = IDX.get(kid)
    if not d:
        print("%-24s GÖVDE YOK (DEVLET_HARITA'da kayıt yok)" % kid); continue
    en = None
    for dn in d["dnm"]:
        n = len(dn["g"])
        if en is None or n > en[0]: en = (n, dn)
    # parça sayısı en büyük dönem ≈ en geniş; alanını gerçekten ölç (ilk 3 aday)
    aday = sorted(d["dnm"], key=lambda x: -len(x["g"]))[:3]
    best = None
    for dn in aday:
        g = govde(dn["g"])
        if g is None: continue
        if best is None or g.area > best[0]: best = (g.area, dn, g)
    if not best:
        print("%-24s dönem %d · gövde boş" % (kid, len(d["dnm"]))); continue
    ar, dn, g = best
    yol = ulke_yolu(g)
    ham = sum(len(PAR[ri]) for gi in dn["g"] for ri in HAL[gi])
    print("%-24s dönem %3d · zirve %s→%s · parça %4d · ham nokta %6d · alan %.0f° · SVG yol %5d B"
          % (kid, len(d["dnm"]), dn["f"], dn["t"], len(dn["g"]), ham, ar, len(yol)))
