# -*- coding: utf-8 -*-
"""A-AMERIKA-0078 — TERS YÖN (CLAUDE.md §3.5): yeni noktalar SAHİPLİ hücreyi başka devlete geçirdi mi?
ÖNCE/SONRA hücre dökümlerini (A-AMERIKA-0078-olc.py --ufuk 200 --hucre) karşılaştırır; sahibi DEĞİŞEN
hücreleri bugünkü ülke vekiliyle sınar (vekil, hüküm değil: 1923 sınırı bugünkünden farklı olabilir).
Kullanım: py denetim/A-AMERIKA-0078-ters.py <once.json> <sonra.json>
"""
import sys, io, json, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
from shapely.geometry import shape, Point
from shapely.strtree import STRtree
O = {(h["x"], h["y"]): h for h in json.load(io.open(sys.argv[1], encoding="utf-8"))}
S = {(h["x"], h["y"]): h for h in json.load(io.open(sys.argv[2], encoding="utf-8"))}
A = json.load(io.open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf-8"))
G, N = [], []
for f in A["features"]:
    g = shape(f["geometry"])
    if g.bounds[0] > -30: continue
    G.append(g if g.is_valid else g.buffer(0)); N.append(f["properties"]["ADMIN"])
T = STRtree(G)
def ulke(x, y):
    p = Point(x, y)
    for i in T.query(p):
        if G[int(i)].contains(p): return N[int(i)]
KOK = {"Argentina": "arjantin", "Bolivia": "bolivya", "Brazil": "brezilya", "Chile": "sili", "Colombia": "kolombiya",
    "Ecuador": "ekvador", "Peru": "peru", "Paraguay": "paraguay", "Venezuela": "venezuela", "Mexico": "meksika",
    "United States of America": "abd", "Cuba": "kuba", "Guatemala": "guatemala", "Uruguay": "uruguay", "Panama": "panama",
    "Guyana": "ingiliz-guyanasi", "Suriname": "hollanda-guyanasi", "France": "fransiz-guyanasi", "Haiti": "haiti",
    "Dominican Republic": "dominik", "Belize": "ingiltere"}
def dogru(s, u):
    return u in KOK and s is not None and s.startswith(KOK[u])
sinif = collections.Counter(); ornek = collections.defaultdict(list)
for k, o in O.items():
    s = S[k]
    if o["petek"] != "OK" or s["petek"] != "OK" or o["sahip"] == s["sahip"]: continue
    u = ulke(*k)
    c = ("DÜZELDİ" if dogru(s["sahip"], u) and not dogru(o["sahip"], u) else
         "BOZULDU" if dogru(o["sahip"], u) and not dogru(s["sahip"], u) else "BELİRSİZ")
    sinif[c] += 1; ornek[c].append((u, o["sahip"], s["sahip"], s["nokta"], k))
print("sahibi değişen OK hücre:", dict(sinif))
for c in ("BOZULDU", "BELİRSİZ", "DÜZELDİ"):
    say = collections.Counter((n, u, a, b) for u, a, b, n, k in ornek[c])
    print(f"{c} — sorumlu nokta başına:")
    for (n, u, a, b), v in say.most_common(): print(f"  {v:3}  {n} · {u}: {a} → {b}")
