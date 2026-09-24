# -*- coding: utf-8 -*-
"""A-AMERIKA-0078 — 1923-09-01'de Amerikalarda NOKTA düzeyinde yanlış sahip adayı (SALT OKUR).
Vekil: noktanın bugünkü ülkesi (NE admin0) ile 1923 sahibinin kök adı uyuşuyor mu. Vekildir, hüküm değil:
1923 sınırı bugünküden farklıysa (Tacna→Şili, Leticia→Peru, Chaco …) uyuşmazlık DOĞRU olabilir.
Kullanım: py denetim/A-AMERIKA-0078-yanlis.py [--ek <dosya.js>]
"""
import sys, io, os, re, json, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
from shapely.geometry import shape, Point
from shapely.strtree import STRtree
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac")); import girdi
GUN = "1923-09-01"
def pad(t):
    if not t: return ""
    p = str(t).split("-"); return "%04d-%02d-%02d" % (int(p[0]), int(p[1]) if len(p) > 1 else 1, int(p[2]) if len(p) > 2 else 1)
def var_mi(y):
    k, b = pad(y.get("kur") or ""), pad(y.get("bit") or "")
    return not (k and k > GUN) and not (b and b <= GUN)
def sahibi(y):
    for kat in ("d", "v", "s"):
        for p in y.get(kat) or []:
            f, t = pad(p.get("f", "")), pad(p.get("t", ""))
            if (f and f > GUN) or (t and t <= GUN): continue
            return p.get("d") or p.get("kid") or "OSMANLI"
A = json.load(io.open(os.path.join(KOK, "veri-kaynak/ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
G, N = [], []
for f in A["features"]:
    g = shape(f["geometry"])
    if g.bounds[0] > -30: continue
    G.append(g if g.is_valid else g.buffer(0)); N.append(f["properties"]["ADMIN"])
T = STRtree(G)
def ulke(x, y):
    p = Point(x, y); best = None
    for i in T.query(p.buffer(0.3)):
        d = G[int(i)].distance(p)
        if best is None or d < best[0]: best = (d, N[int(i)])
    return best[1] if best else None
KOKLER = {"Argentina": "arjantin", "Bolivia": "bolivya", "Brazil": "brezilya", "Chile": "sili", "Colombia": "kolombiya",
    "Ecuador": "ekvador", "Peru": "peru", "Paraguay": "paraguay", "Venezuela": "venezuela", "Mexico": "meksika",
    "United States of America": "abd", "Cuba": "kuba", "Honduras": "honduras", "Nicaragua": "nikaragua",
    "El Salvador": "el-salvador", "Costa Rica": "kosta-rika", "Guatemala": "guatemala", "Uruguay": "uruguay",
    "Panama": "panama", "Guyana": "ingiliz-guyanasi", "Suriname": "hollanda-guyanasi", "France": "fransiz-guyanasi",
    "Canada": "kanada", "Haiti": "haiti", "Dominican Republic": "dominik", "Belize": "ingiliz-hondurasi|ingiltere"}
Y = [y for y in girdi.yukle(sessiz=True) if y.get("lat") is not None]
if "--ek" in sys.argv:
    yol = sys.argv[sys.argv.index("--ek") + 1]; js = io.open(yol, encoding="utf-8").read()
    ek = girdi._cevir(js, re.search(r"window\.(YERLESIMLER\w*)\s*=", js).group(1))
    for y in ek: y["_kaynak"] = os.path.basename(yol)
    Y += ek
Y = [y for y in Y if y["lon"] < -30 and var_mi(y)]
say = collections.Counter(); out = []
for y in Y:
    u = ulke(y["lon"], y["lat"]); s = sahibi(y)
    if u not in KOKLER: say["vekil-yok"] += 1; continue
    if s is None: say["sahipsiz"] += 1; continue
    if any(s.startswith(k) for k in KOKLER[u].split("|")): say["uyuşuyor"] += 1; continue
    say["UYUŞMAZ"] += 1; out.append((y["_kaynak"], y["ad"], u, s, str(y.get("kaynak", ""))[:40]))
print(f"gün {GUN} · Amerikalarda canlı nokta {len(Y)} · " + " · ".join(f"{k} {v}" for k, v in say.items()))
print("UYUŞMAZ dosyaya göre:", dict(collections.Counter(o[0] for o in out).most_common()))
for o in sorted(out): print("  ", " | ".join(o))
