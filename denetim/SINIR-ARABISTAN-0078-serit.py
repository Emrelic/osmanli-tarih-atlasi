# -*- coding: utf-8 -*-
"""SINIR-ARABISTAN-0078 şerit ölçümü (BITIR-1923-0078 §5.4) — SALT OKUR.
SINIR-D-AMERIKA-0077-olc.py'nin mantığı; kara maskesi Arabistan kutusuna, sınav noktaları Arabistan'a çevrildi,
kayıt kümesi TÜM d_sinirlar*.js'ten Arabistan kutusundaki aktif hatlar.
ÖNCE = A katmanı gövdesi (devletler_harita.js, SINIR-ARABISTAN-0078-govde.js dökümü) — yaslamasız.
SONRA = yaslama benzetimi: yalnız sinif E/F ve hat ≥ 10 km; KARŞI → DOĞRU (üst sınır).
Kullanım: py denetim/SINIR-ARABISTAN-0078-serit.py <govde.geojson> [--ters <id>]
"""
import sys, io, json, math, re, glob, collections
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from shapely.geometry import shape, Point
from shapely.strtree import STRtree
from shapely.prepared import prep

GUN, ADIM, YAN = "1923-09-01", 10.0, 5.0
KUTU = (34, 12, 60, 32.5)
args = sys.argv[1:]
TERS = args[args.index("--ters") + 1] if "--ters" in args else None
gj = json.load(io.open(args[0], encoding="utf-8"))
govde, kim = [], []
for f in gj["features"]:
    g = shape(f["geometry"]); g = g if g.is_valid else g.buffer(0)
    govde.append(g); kim.append(f["properties"]["id"])
agac = STRtree(govde); hz = [prep(g) for g in govde]; VAR = set(kim)

# künye id → harita anahtarı (devletler.js `harita:`)
IDH = {}
for blok in re.split(r"\n\{ *id:", io.open("data/devletler.js", encoding="utf-8").read()):
    m = re.match(r'"([^"]+)"', blok)
    h = re.search(r'harita:"([^"]+)"', blok.split("\n{")[0])
    if m and h: IDH[m.group(1)] = h.group(1)
def hk(t):
    h = IDH.get(t, t)
    return h if h in VAR else t

def _yukle(yol):
    out = []
    for f in json.load(io.open(yol, encoding="utf-8"))["features"]:
        g = shape(f["geometry"]); b = g.bounds
        if b[2] < KUTU[0] - 5 or b[0] > KUTU[2] + 5 or b[3] < KUTU[1] - 5 or b[1] > KUTU[3] + 5: continue
        out.append(g if g.is_valid else g.buffer(0))
    return out
KARA = _yukle("veri-kaynak/ne_10m_land.geojson"); GOL = _yukle("veri-kaynak/ne_10m_lakes.geojson")
ka, go = STRtree(KARA), STRtree(GOL)
def su(x, y):
    p = Point(x, y)
    if any(GOL[int(i)].contains(p) for i in go.query(p)): return True
    return not any(KARA[int(i)].contains(p) for i in ka.query(p))
def sahip(x, y):
    p = Point(x, y)
    for i in agac.query(p):
        if hz[int(i)].contains(p): return kim[int(i)]
    return None

SINA = [("Riyad", 46.72, 24.69, "suud", False), ("Küveyt şehri", 47.98, 29.37, "kuveyt", False),
        ("Basra", 47.78, 30.51, "irak-kralligi", False), ("Basra körfezi", 50.5, 27.5, None, True)]
for ad, x, y, bek, susu in SINA:
    s_ = su(x, y); o_ = None if s_ else sahip(x, y)
    ok = (s_ == susu) and (o_ == bek)
    print(f"  SINAV {ad}: su={s_} sahip={o_} · beklenen su={susu} sahip={bek} · {'✓' if ok else '✗'}")
    if not ok: raise SystemExit("B9 ateşleme sınavı TUTMADI — ölçüm geçersiz")

def kayitlar(yol):
    for sat in io.open(yol, encoding="utf-8"):
        s = sat.strip().rstrip(",")
        if s.startswith('{"id"'): yield json.loads(s)
def pad(s):
    y, r = s.split("-", 1); return y.zfill(4) + "-" + r
def km(a, b):
    r = math.pi / 180
    return 6371 * math.hypot((b[0]-a[0]) * r * math.cos((a[1]+b[1]) / 2 * r), (b[1]-a[1]) * r)
def ornekler(h):
    out, kalan = [], ADIM / 2
    for i in range(len(h) - 1):
        a, b = h[i], h[i+1]; L = km(a, b)
        if L == 0: continue
        while kalan <= L:
            t = kalan / L; x, y = a[0] + (b[0]-a[0]) * t, a[1] + (b[1]-a[1]) * t
            kx = 111.32 * math.cos(math.radians(y)); ky = 110.57
            dx, dy = (b[0]-a[0]) * kx, (b[1]-a[1]) * ky; n = math.hypot(dx, dy)
            nx, ny = -dy / n, dx / n
            out.append(((x + nx*YAN/kx, y + ny*YAN/ky), (x - nx*YAN/kx, y - ny*YAN/ky)))
            kalan += ADIM
        kalan -= L
    return out
def kutuda(h):
    return any(KUTU[0] <= x <= KUTU[2] and KUTU[1] <= y <= KUTU[3] for x, y in h)

okunan = 0; aktif = []
for yol in sorted(glob.glob("data/d_sinirlar*.js")):
    for k in kayitlar(yol):
        okunan += 1
        h = k.get("hat")
        if not h or len(h) < 2 or k.get("sinif") == "YOK" or not kutuda(h): continue
        if pad(k["f"]) <= GUN < pad(k["t"]): aktif.append((yol[5:], k))
print(f"okunan kayıt {okunan} · kutuda aktif çizilen {len(aktif)} · gün {GUN}" + (f" · TERS {TERS}" if TERS else ""))
TOP = {"ONCE": collections.Counter(), "SONRA": collections.Counter()}
for yol, k in aktif:
    a, b = k["taraflar"]; sol = k.get("sol_taraf"); sag_ = k.get("sag_taraf")
    if sol is None and sag_:          # ortak alan hattı: yalnız devlet yakası ölçülür
        yakalar = ("sag", sag_)
    elif sol:
        if k["id"] == TERS: sol = b if sol == a else a
        yakalar = None
    else:
        print(f"  {k['sinif']} {k['id']:<42} sol_taraf YOK — ölçülemedi"); continue
    yas = k["sinif"] in ("E", "F") and sum(km(k["hat"][i], k["hat"][i+1]) for i in range(len(k["hat"])-1)) >= 10
    c = collections.Counter()
    for (ps, pg) in ornekler(k["hat"]):
        if yakalar: ciftler = [(pg, sag_, None)]
        else:
            sag = b if sol == a else a
            ciftler = [(ps, sol, sag), (pg, sag, sol)]
        for p, bek, ote in ciftler:
            if su(*p): c["SU"] += 1; continue
            o = sahip(*p); B = hk(bek); O = hk(ote) if ote else None
            if o == B: s = "DOGRU"
            elif B not in VAR: s = "GOVDE-YOK"
            elif o is None: s = "BOS"
            elif O and o == O: s = "KARSI"
            else: s = "UCUNCU:" + str(o)
            c["n"] += 1; c["ONCE_" + s] += 1
            c["SONRA_" + ("DOGRU" if (yas and s == "KARSI") else s)] += 1
    n = c["n"] or 1
    for ks in ("ONCE", "SONRA"):
        TOP[ks].update({x[len(ks)+1:]: v for x, v in c.items() if x.startswith(ks + "_")})
    kus = ", ".join(f"{x[5:]} {v}" for x, v in sorted(c.items()) if x.startswith("ONCE_") and x != "ONCE_DOGRU")
    print(f"  {k['sinif']} {k['id']:<42} {yol:<26} n={c['n']:<3} ÖNCE %{100*c['ONCE_DOGRU']/n:5.1f} → SONRA %{100*c['SONRA_DOGRU']/n:5.1f} · su {c['SU']} · {kus}")
for ks in ("ONCE", "SONRA"):
    n = sum(TOP[ks].values()) or 1
    print(f"  TOPLAM {ks}: " + " · ".join(f"{x} {v} (%{100*v/n:.1f})" for x, v in TOP[ks].most_common()))
