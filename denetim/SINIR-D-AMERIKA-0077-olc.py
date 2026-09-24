# -*- coding: utf-8 -*-
"""SINIR-D-AMERIKA-0077 ölçüm aleti — SALT OKUR.

Soru (SINIR-DUNYA-0077 §4.2): hattın 5 km iki yanından örnek noktalar; o gün doğru renkli olanların oranı.
Örnek: hat boyunca ~10 km'de bir nokta, dik yönde 5 km sol / 5 km sağ. Beklenen: sol = sol_taraf, sağ = öteki.

ÖNCE = A katmanı gövdesi (devletler_harita.js, `SINIR-D-AMERIKA-0077-govde.js` dökümü) — yaslamasız.
SONRA = yaslama BENZETİMİ (js/d_katman.js): yalnız sinif E/F ve hat ≥ 10 km; şerit içinde iki tarafın
  gövdesi yer değiştirir, üçüncü devlet / boşluk DOKUNULMAZ. ⚠️ Benzetim "yönü gövdelerle doğrulanmayan
  hat yaslanmaz" korumasını ve 100 km şerit sınırını modellemez (5 km örnek şeridin çok içinde) ⇒ SONRA
  bir ÜST SINIRDIR; tarayıcı ölçümü değildir.
Yanlış nokta sınıfları: KARŞI (öteki taraf boyuyor = hat/petek uyuşmazlığı) · GÖVDE-YOK (beklenen tarafın
  o gün hiç gövdesi yok = künye/nokta işi) · BOŞ (hiçbir gövde yok = petek noktası yok) · ÜÇÜNCÜ.

Kullanım:
  py denetim/SINIR-D-AMERIKA-0077-olc.py <govde.geojson> <d_sinirlar_amerika.js> [--ters <id>] [--kayit]
  --ters <id>: o kaydın sol_taraf'ını TERSİNE çevirir (B9 ateşleme sınavı: doğru oran çökmeli)
"""
import sys, io, json, math, re, collections, subprocess
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
from shapely.geometry import shape, Point
from shapely.strtree import STRtree
from shapely.prepared import prep

GUN = "1923-09-01"
ADIM, YAN = 10.0, 5.0
args = sys.argv[1:]
TERS = args[args.index("--ters") + 1] if "--ters" in args else None
KAYITLI = "--kayit" in args
gj = json.load(io.open(args[0], encoding="utf-8"))
IDH = gj.get("idharita", {})
govde, kim = [], []
for f in gj["features"]:
    g = shape(f["geometry"])
    if not g.is_valid:
        g = g.buffer(0)
    govde.append(g); kim.append(f["properties"]["id"])
agac = STRtree(govde); hz = [prep(g) for g in govde]
VAR = set(kim)
# SU maskesi: NE 10m kara − NE 10m göller. Denizde/gölde düşen örnek RENK sorusunun dışında (payda dışı).
def _yukle(yol):
    out = []
    for f in json.load(io.open(yol, encoding="utf-8"))["features"]:
        g = shape(f["geometry"])
        if g.bounds[2] < -170 or g.bounds[0] > -30: continue
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
        if hz[int(i)].contains(p):
            return kim[int(i)]
    return None

def hk(t):
    # _dTarafGovdesi: önce harita: anahtarı, o gün çizilmiyorsa künye id'si
    h = IDH.get(t, t)
    return h if h in VAR else t

# B9 ateşleme — bilinen pozitif/negatif vakalar; biri tutmazsa ölçüm GEÇERSİZ, çık.
SINA = [("Kansas", -98.0, 38.0, "abd", False), ("Buenos Aires", -58.4, -34.6, "arjantin-cumhuriyeti", False),
        ("Manaus", -60.0, -3.0, "brezilya-cumhuriyeti", False), ("Superior gölü", -87.5, 47.7, None, True),
        ("Atlas okyanusu", -40.0, 30.0, None, True)]
for ad, x, y, bek, susu in SINA:
    s_, o_ = su(x, y), (None if su(x, y) else sahip(x, y))
    ok = (s_ == susu) and (o_ == bek)
    print(f"  SINAV {ad}: su={s_} sahip={o_} · beklenen su={susu} sahip={bek} · {'✓' if ok else '✗'}")
    if not ok:
        raise SystemExit("B9 ateşleme sınavı TUTMADI — ölçüm geçersiz")

K = json.loads(subprocess.run(["node", "-e",
    "global.window=global;eval(require('fs').readFileSync(process.argv[1],'utf8'));"
    "process.stdout.write(JSON.stringify(window.D_SINIRLAR_AMERIKA))", args[1]],
    capture_output=True, text=True, encoding="utf-8", check=True).stdout)

def pad(s):
    y, r = s.split("-", 1); return y.zfill(4) + "-" + r

def km(a, b):
    r = math.pi / 180
    return 6371 * math.hypot((b[0]-a[0]) * r * math.cos((a[1]+b[1]) / 2 * r), (b[1]-a[1]) * r)

def ornekler(h):
    """hat boyunca ADIM km'de bir: (sol nokta, sağ nokta)"""
    out, kalan = [], ADIM / 2
    for i in range(len(h) - 1):
        a, b = h[i], h[i+1]; L = km(a, b)
        if L == 0: continue
        while kalan <= L:
            t = kalan / L
            x, y = a[0] + (b[0]-a[0]) * t, a[1] + (b[1]-a[1]) * t
            kx = 111.32 * math.cos(math.radians(y)); ky = 110.57
            dx, dy = (b[0]-a[0]) * kx, (b[1]-a[1]) * ky; n = math.hypot(dx, dy)
            nx, ny = -dy / n, dx / n                       # sol normal (km)
            out.append(((x + nx*YAN/kx, y + ny*YAN/ky), (x - nx*YAN/kx, y - ny*YAN/ky)))
            kalan += ADIM
        kalan -= L
    return out

aktif = [k for k in K if k.get("hat") and len(k["hat"]) >= 2 and k["sinif"] != "YOK"
         and pad(k["f"]) <= GUN < pad(k["t"])]
TOP = {"ONCE": collections.Counter(), "SONRA": collections.Counter()}
SIN = collections.defaultdict(lambda: collections.Counter())
satirlar = []
for k in aktif:
    a, b = k["taraflar"]
    sol = k.get("sol_taraf")
    if not sol:
        satirlar.append((k["id"], k["sinif"], 0, None, None, "sol_taraf YOK — ölçülemedi")); continue
    if k["id"] == TERS:
        sol = b if sol == a else a
    sag = b if sol == a else a
    yas = k["sinif"] in ("E", "F") and sum(km(k["hat"][i], k["hat"][i+1]) for i in range(len(k["hat"])-1)) >= 10
    c = collections.Counter()
    for (ps, pg) in ornekler(k["hat"]):
        for p, bek in ((ps, sol), (pg, sag)):
            if su(*p):
                c["SU"] += 1; continue
            o = sahip(*p); B, O = hk(bek), hk(sag if bek == sol else sol)
            if o == B: s = "DOGRU"
            elif hk(bek) not in VAR: s = "GOVDE-YOK"
            elif o is None: s = "BOS"
            elif o == O: s = "KARSI"
            else: s = "UCUNCU"
            c["n"] += 1; c["ONCE_" + s] += 1
            s2 = "DOGRU" if (yas and s == "KARSI") else s
            c["SONRA_" + s2] += 1
    n = c["n"] or 1
    TOP["ONCE"].update({x[5:]: v for x, v in c.items() if x.startswith("ONCE_")})
    TOP["SONRA"].update({x[6:]: v for x, v in c.items() if x.startswith("SONRA_")})
    SIN[k["sinif"]].update(c)
    kus = ", ".join(f"{x[5:]} {v}" for x, v in sorted(c.items()) if x.startswith("ONCE_") and x != "ONCE_DOGRU")
    satirlar.append((k["id"], k["sinif"], c["n"], 100 * c["ONCE_DOGRU"] / n, 100 * c["SONRA_DOGRU"] / n, kus))

print("SU (payda dışı) örnek:", sum(SIN[s]["SU"] for s in SIN))
print(f"gün {GUN} · aktif çizilen kayıt {len(aktif)} · örnek adımı {ADIM} km · yan {YAN} km" + (f" · TERS {TERS}" if TERS else ""))
for s in sorted(SIN):
    c = SIN[s]; n = c["n"] or 1
    print(f"  sınıf {s}: nokta {c['n']} · ÖNCE doğru %{100*c['ONCE_DOGRU']/n:.1f} → SONRA %{100*c['SONRA_DOGRU']/n:.1f}")
for ks in ("ONCE", "SONRA"):
    n = sum(TOP[ks].values()) or 1
    print(f"  TOPLAM {ks}: " + " · ".join(f"{x} {v} (%{100*v/n:.1f})" for x, v in TOP[ks].most_common()))
if KAYITLI or TERS:
    for r in sorted(satirlar, key=lambda r: (r[3] is None, r[3] or 0)):
        if TERS and r[0] != TERS and not KAYITLI: continue
        print(f"  {r[1]} {r[0]:<42} n={r[2]:<4} " + (f"ÖNCE %{r[3]:5.1f} → SONRA %{r[4]:5.1f} · {r[5]}" if r[3] is not None else r[5]))
