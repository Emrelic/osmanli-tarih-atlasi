# -*- coding: utf-8 -*-
"""ADIM 1d — HANGI CARE DAHA UCUZ  (koordinatorun ⑤ sorusu)

19 gorunur kusur parcasi icin olcer:
  · parcanin ICINDE kac yerlesim noktasi var
  · parcanin AGIRLIK MERKEZINE en yakin nokta kac km
  · o noktanin sahibi parcanin sahibinden farkli mi

CLAUDE.md §2: "bir 'harita yanlis' raporunda ilk sorulacak soru:
o bolgede yerlesim noktasi var mi?"  Cevap HAYIR ise care MOTOR degil NOKTA.

Salt okuma.
"""
import json, os, sys, math, pickle

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
SCR = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\a5479cb4-16ee-4def-832f-307c172e7614\scratchpad"
sys.path.insert(0, os.path.join(KOK, "arac"))

from shapely.geometry import Point, Polygon, MultiPolygon
from shapely.strtree import STRtree
import girdi

R = 6371.0088


def km2(g):
    ps = g.geoms if isinstance(g, MultiPolygon) else [g]
    T = 0.0
    for p in ps:
        if not isinstance(p, Polygon):
            continue
        for ring, sg in [(p.exterior, 1)] + [(h, -1) for h in p.interiors]:
            cs = list(ring.coords); s = 0.0
            for i in range(len(cs) - 1):
                lo1, la1 = math.radians(cs[i][0]), math.radians(cs[i][1])
                lo2, la2 = math.radians(cs[i + 1][0]), math.radians(cs[i + 1][1])
                s += (lo2 - lo1) * (2 + math.sin(la1) + math.sin(la2))
            T += sg * abs(s * R * R / 2)
    return T


def hav(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a[1], a[0], b[1], b[0]))
    h = math.sin((la2-la1)/2)**2 + math.cos(la1)*math.cos(la2)*math.sin((lo2-lo1)/2)**2
    return 2 * R * math.asin(min(1, math.sqrt(h)))


YERLER = girdi.yukle(sessiz=True)
pt = [(y["lon"], y["lat"]) for y in YERLER]
pgeom = [Point(p) for p in pt]
pagac = STRtree(pgeom)

S = json.load(open(os.path.join(SCR, "gorunur_kusur.json"), encoding="utf-8"))
gor = [s for s in S if s["gorunur"]]

parcalar = {}
with open(os.path.join(SCR, "petek.ndjson"), encoding="utf-8") as f:
    for satir in f:
        o = json.loads(satir)
        pl = []
        for ring in o["parts"]:
            try:
                p = Polygon(ring[0], ring[1:]) if len(ring) > 1 else Polygon(ring[0])
            except Exception:
                continue
            if not p.is_valid:
                p = p.buffer(0)
            if not p.is_empty:
                pl.append(p)
        parcalar[o["i"]] = pl

print("=" * 100)
print("19 GORUNUR KUSUR — CARE OLCUMU  ('o bolgede yerlesim noktasi var mi?')")
print("=" * 100)
print("  %-24s %8s %6s %9s  %-22s %s"
      % ("yerlesim", "km²", "icNokta", "enYakınKm", "en yakin nokta", "care"))
nokta_care = motor_care = 0
al_nokta, al_motor = 0.0, 0.0
for s in gor:
    i = s["i"]
    tp = Point(pt[i])
    hedefp = None
    for p in parcalar.get(i, []):
        if p.intersects(tp):
            continue
        if abs(km2(p) - s["km2"]) < max(1.0, 0.02 * s["km2"]):
            hedefp = p; break
    if hedefp is None:
        continue
    ic = [int(j) for j in pagac.query(hedefp) if hedefp.contains(pgeom[int(j)])]
    ic = [j for j in ic if j != i]
    m = hedefp.representative_point()
    aday = [int(j) for j in pagac.query(hedefp.buffer(2.0))]
    aday = [j for j in aday if j != i]
    if aday:
        en = min(aday, key=lambda j: hav((m.x, m.y), pt[j]))
        ed = hav((m.x, m.y), pt[en])
        ead = YERLER[en]["ad"]
    else:
        en, ed, ead = None, 9e9, "—"
    if not ic:
        care = "NOKTA EKLE"
        nokta_care += 1; al_nokta += s["km2"]
    else:
        care = "MOTOR (icinde %d nokta VAR)" % len(ic)
        motor_care += 1; al_motor += s["km2"]
    print("  %-24s %8.0f %6d %9.0f  %-22s %s"
          % (s["ad"][:24], s["km2"], len(ic), ed, ead[:22], care))

print()
print("  NOKTA EKLE  : %2d parca · %7.0f km²   (parcanin icinde HIC nokta yok)" % (nokta_care, al_nokta))
print("  MOTOR       : %2d parca · %7.0f km²   (icinde nokta VAR, yine de yanlis sahipte)" % (motor_care, al_motor))
