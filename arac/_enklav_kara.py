# -*- coding: utf-8 -*-
"""B2'nin GERCEKTEN kopru kuracagi enklavlar: KARASAL olanlar.

Onceki olcum 798 enklav buldu ama cogu ADA — B2 onlari zaten
`_KARA_HAZIR.covers(hat)` ile reddediyor. Asil soru: kaci KARADAN
ulasilabilir, ve mesafeleri ne?
"""
import io, json, math, sys, collections

KOK = "C:/Users/emrem/OneDrive/Desktop/TAR\u0130H CO\u011eRAFYA S\u0130TES\u0130"

from shapely.geometry import Polygon, LineString, shape
from shapely.ops import unary_union, nearest_points
from shapely.prepared import prep

ham = io.open(KOK + "/data/donemler.js", encoding="utf-8").read()

def blok(ad):
    i = ham.index("window." + ad)
    j = ham.index("=", i) + 1
    k = ham.index("\n", j)
    while ham[k - 1] != ";":
        k = ham.index("\n", k + 1)
    return json.loads(ham[j:k].rstrip().rstrip(";"))

PAR, PH, DON = blok("PARCALAR"), blok("PARCA_HALKA"), blok("DONEMLER")

# --- kara maskesi: motorun kendi cizdigi
gj = json.load(io.open(KOK + "/veri-kaynak/motor_kara.geojson", encoding="utf-8"))
KARA = unary_union([shape(f["geometry"]) for f in gj["features"]]).buffer(0)
KARA_H = prep(KARA)
print("kara maskesi yuklendi")

def coz(o):
    out = []
    for x in (o or []):
        if not isinstance(x, int): continue
        ph = PH[x] if 0 <= x < len(PH) else None
        if not ph: continue
        hl = [PAR[h] for h in ph if 0 <= h < len(PAR)]
        if not hl or len(hl[0]) < 4: continue
        try:
            p = Polygon(hl[0], hl[1:]).buffer(0)
            if not p.is_empty: out.append(p)
        except Exception: pass
    return out

def km(a, b):
    lat = (a.y + b.y) / 2.0
    return math.hypot((b.x - a.x) * 111.320 * math.cos(math.radians(lat)),
                      (b.y - a.y) * 110.574)

KESIT = ["1500-06-15", "1600-06-15", "1683-07-14", "1700-06-15",
         "1800-06-15", "1900-06-15"]

karasal = []          # (gun, mesafe, enklav_alani_km2, enklav_genisligi_km)
deniz = 0

for g in KESIT:
    don = None
    for d in DON:
        if d.get("t", "") <= g: don = d
    if not don: continue
    ps = unary_union(coz(don.get("o")) + coz(don.get("v")))
    ps = list(ps.geoms) if ps.geom_type == "MultiPolygon" else [ps]
    ps = [p for p in ps if p.area > 1e-6]
    ps.sort(key=lambda p: p.area, reverse=True)
    if len(ps) < 2: continue
    ana = ps[0]
    for p in ps[1:]:
        try:
            n1, n2 = nearest_points(ana, p)
        except Exception:
            continue
        d_km = km(n1, n2)
        if d_km > 800: continue
        if not KARA_H.covers(LineString([n1, n2])):
            deniz += 1
            continue
        # enklavin genisligi: cevreleyen kutunun kisa kenari
        x0, y0, x1, y1 = p.bounds
        lat = (y0 + y1) / 2.0
        w = (x1 - x0) * 111.320 * math.cos(math.radians(lat))
        h = (y1 - y0) * 110.574
        alan = p.area * 111.32 * 110.574 * math.cos(math.radians(lat))
        karasal.append((g, d_km, alan, min(w, h), max(w, h)))

print()
print("KARASAL ENKLAV (B2'nin kopru kuracagi): %d" % len(karasal))
print("DENIZ ASIRI (B2 zaten reddediyor)     : %d" % deniz)
print()
kova = collections.Counter()
for _, d, _, _, _ in karasal:
    if d <= 100:   kova["  0-100"] += 1
    elif d <= 200: kova["100-200"] += 1
    elif d <= 400: kova["200-400"] += 1
    elif d <= 600: kova["400-600"] += 1
    else:          kova["600-800"] += 1
print("MESAFE DAGILIMI")
for k in ["  0-100", "100-200", "200-400", "400-600", "600-800"]:
    if kova[k]: print("   %s km   %3d" % (k, kova[k]))

print()
print("EN UZAK ON KARASAL ENKLAV — mesafe · alan km² · en/boy km")
for g, d, a, w, W in sorted(karasal, key=lambda t: -t[1])[:10]:
    print("   %s  %5.0f km  %9.0f km²  %5.0f x %5.0f" % (g, d, a, w, W))
