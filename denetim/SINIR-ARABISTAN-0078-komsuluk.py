# -*- coding: utf-8 -*-
# SINIR-ARABISTAN-0078 — 1923-09-01 gövdelerinde KARA komşuluğu olan çiftler (SALT OKUR)
# Kullanım: py denetim/SINIR-ARABISTAN-0078-komsuluk.py <govde.geojson>
import sys, json, itertools, glob
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from shapely.geometry import shape
ARAP = {"suud", "hicaz", "yemen", "umman", "katar", "kuveyt", "kuayti-sultanligi", "kesiri-sultanligi", "ingiltere",
        "urdun-emirligi", "irak-kralligi", "filistin-mandasi"}
gj = json.load(open(sys.argv[1], encoding="utf-8"))
G = {}
for f in gj["features"]:
    g = shape(f["geometry"]).buffer(0)
    G[f["properties"]["id"]] = G[f["properties"]["id"]].union(g) if f["properties"]["id"] in G else g
# kayıtlı çiftler (harita anahtarıyla)
import re, io
IDH = {}
for blok in re.split(r"\n\{ *id:", io.open("data/devletler.js", encoding="utf-8").read()):
    m = re.match(r'"([^"]+)"', blok); h = re.search(r'harita:"([^"]+)"', blok.split("\n{")[0])
    if m and h: IDH[m.group(1)] = h.group(1)
kayitli = {}
for yol in glob.glob("data/d_sinirlar*.js"):
    for sat in io.open(yol, encoding="utf-8"):
        s = sat.strip().rstrip(",")
        if not s.startswith('{"id"'): continue
        k = json.loads(s)
        if not (k["f"] <= "1923-09-01" < k["t"]): continue
        c = frozenset(IDH.get(t, t) for t in k["taraflar"])
        kayitli.setdefault(c, []).append(f'{k["id"]}:{k.get("sinif")}')
n = 0
for a, b in itertools.combinations(sorted(G), 2):
    if not ({a, b} & ARAP): continue
    ga, gb = G[a], G[b]
    if ga.distance(gb) > 0.02: continue
    ortak = ga.buffer(0.02).intersection(gb.buffer(0.02))
    L = ortak.area / 0.04 * 100  # ≈ ortak kenar uzunluğu (derece → ~km, kaba)
    n += 1
    print(f"{a:22} × {b:22} ortak kenar ≈{L:6.0f} km · kayıt: {', '.join(kayitli.get(frozenset((a, b)), ['—']))}")
print(f"komşu çift: {n} · gövde: {len(G)}")
