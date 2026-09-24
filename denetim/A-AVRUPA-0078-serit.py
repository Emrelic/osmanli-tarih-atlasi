# -*- coding: utf-8 -*-
"""5 km serit olcumu (BITIR-1923-0078 §5.4) — A katmani yaklasimi: en yakin
canli yerlesimin sahibi (Voronoi). Hattin iki yaninda ofset ornekleri, ~3 km adim.
ham   = <=5 km orneklerde dogru taraf (yaslama OLMADAN)
ikili = <=5 km orneklerde iki taraftan BIRI (yaslama gecerse dogru renk;
        ucuncu devlet d_katman yaslamasiyla DUZELMEZ)
kapi  = d_katman.js _dYaslaAdim yon kapisinin ornek-sayili taklidi (20 km'ye kadar)
kullanim: py serit.py [aday.js ...] [hat-id-parcasi ...]"""
import sys, os, io, re, math, contextlib, glob
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, r"C:\atlas\arac")
with contextlib.redirect_stdout(io.StringIO()):
    import girdi
    Y = girdi.yukle()
    DV = girdi.oku_devletler()
G = "1923-09-01"
EK = [a for a in sys.argv[1:] if a.endswith(".js")]
FILTRE = [a for a in sys.argv[1:] if not a.endswith(".js")]
for ek in EK:
    with contextlib.redirect_stdout(io.StringIO()):
        k = girdi.oku_dosya(ek)
    Y = Y + k

HARITA = {}
for x in DV:
    if isinstance(x, dict) and x.get("id"):
        HARITA[x["id"]] = x.get("harita") or x["id"]

def sahip(y, g):
    if y.get("kur") and y["kur"] > g:
        return None
    for p in y.get("v") or []:
        if p["f"] <= g < p["t"]:
            return "tabi"
    for p in y.get("d") or []:
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return p.get("d", "?")
    return "-"

P = []
for y in Y:
    o = sahip(y, G)
    if o is None:
        continue
    P.append((y["lat"], y["lon"], HARITA.get(o, o), y["ad"]))

def en_yakin(la, lo):
    best = None
    c = math.cos(math.radians(la))
    for a, b, s, n in P:
        if abs(a - la) > 4:
            continue
        d = (a - la) ** 2 + ((b - lo) * c) ** 2
        if best is None or d < best[0]:
            best = (d, s, n)
    return best

kayitlar = []
for f in glob.glob(r"C:\atlas\data\d_sinirlar*.js"):
    js = io.open(f, encoding="utf-8").read()
    for m in re.finditer(r"window\.(D_SINIRLAR\w*)\s*=", js):
        with contextlib.redirect_stdout(io.StringIO()):
            try:
                arr = girdi._cevir(js, m.group(1))
            except Exception as e:
                arr = []
        kayitlar += arr

sonuc = []
for r in kayitlar:
    if not isinstance(r, dict) or not r.get("hat"):
        continue
    if not (r.get("f", "0") <= G < r.get("t", "9")):
        continue
    if FILTRE and not any(s in r["id"] for s in FILTRE):
        continue
    hat = r["hat"]
    lons = [p[0] for p in hat]; lats = [p[1] for p in hat]
    if not FILTRE and not (-12 < sum(lons) / len(lons) < 45 and 34 < sum(lats) / len(lats) < 72):
        continue
    sol = HARITA.get(r.get("sol_taraf"), r.get("sol_taraf"))
    ta = [HARITA.get(t, t) for t in r.get("taraflar", [])]
    sag = [t for t in ta if t != sol]
    sag = sag[0] if sag else None
    tum = []
    km_top = 0.0
    birikim = 0.0
    for i in range(len(hat) - 1):
        lo1, la1 = hat[i]; lo2, la2 = hat[i + 1]
        seg = girdi.km(la1, lo1, la2, lo2)
        km_top += seg
        birikim += seg
        if birikim < 3.0:
            continue
        birikim = 0.0
        c = math.cos(math.radians(la1))
        dx = (lo2 - lo1) * c; dy = la2 - la1
        L = math.hypot(dx, dy) or 1e-9
        nx, ny = -dy / L, dx / L
        for ofs in (2.5, 5.0, 10.0, 20.0):
            for isaret in (1, -1):
                dd = isaret * ofs / 111.32
                e = en_yakin(la1 + ny * dd, lo1 + nx * dd / c)
                tum.append((isaret, e[1] if e else "?", e[2] if e else "", ofs))
    ornek = [(i, s, n) for i, s, n, o in tum if o <= 5.0]
    top = len(ornek)
    if top == 0:
        continue
    def say(sl, sg):
        return sum(1 for i, s, n in ornek if s == (sl if i == 1 else sg))
    d1, d2 = say(sol, sag), say(sag, sol)
    ters = d2 > d1
    if ters:
        sol, sag = sag, sol
    dog = max(d1, d2)
    ikili = sum(1 for i, s_, n in ornek if s_ in (sol, sag))
    sD = sum(1 for i, s_, n, o in tum if i == 1 and s_ == sol)
    sY = sum(1 for i, s_, n, o in tum if i == -1 and s_ == sol)
    rD = sum(1 for i, s_, n, o in tum if i == -1 and s_ == sag)
    rY = sum(1 for i, s_, n, o in tum if i == 1 and s_ == sag)
    tek = (not (sY > sD and rY > rD)) and (sD >= 3 * sY or rD >= 3 * rY) and sD >= 2 and rD >= 2
    kapi = (sD > sY and rD > rY) or tek
    yanlis = {}
    for i, s_, n in ornek:
        if s_ != (sol if i == 1 else sag):
            k = f"{'SOL' if i == 1 else 'SAG'}:{s_}({n})"
            yanlis[k] = yanlis.get(k, 0) + 1
    sn = (r.get("sinif") or r.get("kategori") or "") + ("~" if ters else "")
    sonuc.append((dog / top, ikili / top, kapi, r["id"], sn, km_top, top, sol, sag, yanlis))

sonuc.sort()
print(f"TABAN {len(P)} canli nokta · {len(kayitlar)} hat kaydi · gun {G} · ek {EK}")
for oran, ik, kapi, i, sn, kmt, top, sol, sag, yanlis in sonuc:
    en = sorted(yanlis.items(), key=lambda x: -x[1])[:3]
    print(f"{oran*100:5.1f}% ik={ik*100:5.1f}% {'K' if kapi else '-'} {i:34s} {sn:3s} {kmt:6.0f}km n={top:4d} sol={sol} sag={sag} | " +
          " · ".join(f"{k}×{v}" for k, v in en))
