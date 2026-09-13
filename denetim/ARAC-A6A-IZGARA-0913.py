# -*- coding: utf-8 -*-
"""PAKET-A6A — kutuyu ızgaraya böl, her hücrenin EN YAKIN noktasını (kur/bit dahil
bütün noktalar — motor Voronoi'yi bütün noktalarla kurar) ve o gündeki sahibini say.
Sahibi yazılmamış / kurulmamış / >200 km olan hücreleri basar. SALT OKUR; Voronoi
yaklaşığıdır (kıyı-nehir yaslanması ve Chaikin YOK).
py denetim/ARAC-A6A-IZGARA-0913.py GUN LAT1 LAT2 LON1 LON2 [ADIM]
"""
import io, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa

g = sys.argv[1]
a1, a2, o1, o2 = map(float, sys.argv[2:6])
adim = float(sys.argv[6]) if len(sys.argv) > 6 else 0.05
Y = girdi.yukle(sessiz=True)
Y = [y for y in Y if a1 - 4 <= y["lat"] <= a2 + 4 and o1 - 5 <= y["lon"] <= o2 + 5]


def ic(p):
    return p.get("f", "") <= g < p.get("t", "9999")


def sahip(y):
    if (y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g):
        return "(sahnede-degil)"
    for p in y.get("v") or []:
        if ic(p):
            return "TABI"
    for p in y.get("d") or []:
        if ic(p):
            return "OSMANLI"
    for p in y.get("s") or []:
        if ic(p):
            return p.get("d")
    return "(sahipsiz)"


say = {}
lat = a1
while lat <= a2:
    lon = o1
    while lon <= o2:
        y = min(Y, key=lambda r: girdi.km(lat, lon, r["lat"], r["lon"]))
        d = girdi.km(lat, lon, y["lat"], y["lon"])
        s = sahip(y)
        k = (y["ad"], s, ">200km" if d > 200 else "")
        say[k] = say.get(k, 0) + 1
        lon += adim
    lat += adim
for (ad, s, uz), n in sorted(say.items(), key=lambda kv: -kv[1]):
    isaret = "  <<" if s.startswith("(") or uz else ""
    print(f"  {n:5} hücre  {ad[:30]:30} {s} {uz}{isaret}")
