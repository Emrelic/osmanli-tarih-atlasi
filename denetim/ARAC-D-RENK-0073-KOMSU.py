# -*- coding: utf-8 -*-
"""D-RENK-0073 — J: 1923'te haritada KAC komsu cift var? (b secenegi icin
   gereken hat sayisinin paydasi)"""
import io, json, itertools
from shapely.geometry import shape
from shapely.strtree import STRtree

SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\0f85f827-a96b-4a7c-bfd6-a06cab079a08\scratchpad"
gj = json.load(io.open(SP + r"\govde1923.geojson", encoding="utf-8"))
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

K = json.load(io.open(SP + r"\hatlar.json", encoding="utf-8"))["kayitlar"]
IDH = json.load(io.open(SP + r"\govde1923_idharita.json", encoding="utf-8"))
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
