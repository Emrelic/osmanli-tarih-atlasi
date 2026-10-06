# -*- coding: utf-8 -*-
"""D-RENK-0073 — J: 1923'te haritada KAC komsu cift var? (b secenegi icin
   gereken hat sayisinin paydasi)"""
import io, json, itertools, os, sys
from shapely.geometry import shape
from shapely.strtree import STRtree

# W36b (6 Ekim 2026): SP eskiden BASKA MAKINENIN scratchpad yoluydu (C:\Users\emrem\...)
#   ve betik her yerde FileNotFoundError ile cokuyordu. ARAC-D-RENK-0073-SINAV.py'deki
#   care: dizin arguman ya da D_RENK_SP; girdi yoksa OLCULEMEDI, cikis 2. Olcum DEGISMEDI.
#   Girdiler: DOK.js -> hatlar.json · GOVDE.js -> govde1923.geojson + _idharita.json
SP = sys.argv[1] if len(sys.argv) > 1 else os.environ.get("D_RENK_SP", "")
_EKSIK = [a for a in ['govde1923.geojson', 'hatlar.json', 'govde1923_idharita.json'] if not SP or not os.path.isfile(os.path.join(SP, a))]
if _EKSIK:
    print("OLCULEMEDI - girdi yok: %s (dizin %r). Once DOK.js ve GOVDE.js "
          "(data/devletler_harita.js ister). Bu 'temiz' DEGILDIR." % (", ".join(_EKSIK), SP))
    sys.exit(2)
gj = json.load(io.open(os.path.join(SP, "govde1923.geojson"), encoding="utf-8"))
g, ad = [], []
for f in gj["features"]:
    geo = shape(f["geometry"])
    if not geo.is_valid:
        geo = geo.buffer(0)
    g.append(geo); ad.append(f["properties"]["id"])
agac = STRtree([x.buffer(0.02) for x in g])     # ~2 km tampon: kilcal bosluk komsulugu bozmasin

ciftler = set()
for i, x in enumerate(g):
    for j in agac.query(x.buffer(0.02)):
        j = int(j)
        if j <= i:
            continue
        if x.buffer(0.02).intersects(g[j].buffer(0.02)):
            ciftler.add((min(ad[i], ad[j]), max(ad[i], ad[j])))
print("1923 govdesi:", len(g), "· dokunan (kara komsusu) cift:", len(ciftler))

K = json.load(io.open(os.path.join(SP, "hatlar.json"), encoding="utf-8"))["kayitlar"]
IDH = json.load(io.open(os.path.join(SP, "govde1923_idharita.json"), encoding="utf-8"))
GUN = "1923-10-29"
hatli = set()
for k in K:
    if not ((k.get("f") or "0") <= GUN <= (k.get("t") or "9999")) or k["nokta"] < 2:
        continue
    tr = sorted(IDH.get(t, t) for t in (k.get("taraflar") or []))
    if len(tr) == 2:
        hatli.add(tuple(tr))
ortak = ciftler & hatli
print("hat kaydi olan cift (1923):", len(hatli), "· bunlardan haritada KOMSU olan:", len(ortak))
print("haritada komsu ama HATSIZ cift:", len(ciftler - hatli),
      "(%%%.0f)" % (100.0 * len(ciftler - hatli) / max(1, len(ciftler))))
