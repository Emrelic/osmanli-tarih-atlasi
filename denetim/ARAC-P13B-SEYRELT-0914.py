# -*- coding: utf-8 -*-
"""P13B · 0048-Y6 birim sınaması — `seyrelt` geçerlilik koruması.
uret_petek.py KOŞULMAZ (19 saat). `seyrelt` + `don_kose_kur` dosyanın KENDİSİNDEN
(çalışma kopyası = YENİ, `git show HEAD` = ESKİ) AST ile çekilir, aynı girdiyle
ikisi koşulur, çıktılar karşılaştırılır (MOTOR-HIMAYE yöntemi)."""
import ast, io, json, os, sys, random, subprocess, copy, time
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = r"C:\atlas"
from shapely.geometry import LinearRing, Polygon

ADLAR = {"seyrelt", "don_kose_kur"}


def cek(src):
    ns = {"json": json}
    bul = set()
    for n in ast.parse(src).body:
        if isinstance(n, ast.FunctionDef) and n.name in ADLAR:
            exec(compile(ast.Module([n], []), "uret_petek.py", "exec"), ns)
            bul.add(n.name)
    assert bul == ADLAR, ADLAR - bul
    return ns


YENI = cek(io.open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read())
ESKI = cek(subprocess.run(["git", "-C", KOK, "show", "HEAD:arac/uret_petek.py"],
                          capture_output=True, check=True).stdout.decode("utf-8"))

sonuc = []


def sina(ad, kosul, ayrinti=""):
    sonuc.append((ad, bool(kosul)))
    print(("  ✓ " if kosul else "  ✗ ") + ad + (("  — " + str(ayrinti)) if ayrinti else ""))


def basit(h):
    try:
        return LinearRing(h).is_simple
    except Exception:
        return False


def parca_gecerli(H, ks):
    try:
        return Polygon(H[ks[0]], [H[h] for h in ks[1:]]).is_valid
    except Exception:
        return False


def kos(ns, H, P, don, tol=0.03, say=None):
    Hc, Pc = copy.deepcopy(H), copy.deepcopy(P)
    if say is None:
        return ns["seyrelt"](Hc, Pc, [], don, tol), Pc
    return ns["seyrelt"](Hc, Pc, [], don, tol, say), Pc


def pencere(yol, adlar):
    s = io.open(yol, encoding="utf-8").read()
    out = {}
    for ad in adlar:
        a = "window." + ad + " = "
        i = s.find(a)
        out[ad] = json.loads(s[i + len(a):s.find(";\n", i)])
    return out


# ── ① SENTETİK: rastgele dişli halkalar ─────────────────────────────────────
print("① SENTETİK — rastgele dişli halkalar (tol 0,03)")
import math
rnd = random.Random(20260914)
H, P = [], []
for n in range(1500):
    cx, cy = rnd.uniform(-10, 10), rnd.uniform(30, 50)
    R = rnd.uniform(0.05, 0.6)
    k = rnd.randint(40, 260)
    cs = []
    for t in range(k):
        th = 2 * math.pi * t / k
        rr = R * (1 + rnd.uniform(-0.35, 0.35))
        cs.append([round(cx + rr * math.cos(th), 3), round(cy + rr * math.sin(th), 3)])
    t2 = []
    for q in cs:
        if not t2 or q != t2[-1]:
            t2.append(q)
    t2.append(list(t2[0]))
    if len(t2) >= 4 and basit(t2):
        H.append(t2); P.append([len(H) - 1])
don = set()
for h in H[::3]:
    for q in h[::17]:
        don.add((round(q[0], 6), round(q[1], 6)))
e_out, _ = kos(ESKI, H, P, don)
say = {}
y_out, _ = kos(YENI, H, P, don, say=say)
e_bozuk = [i for i, h in enumerate(e_out) if not basit(h)]
y_bozuk = [i for i, h in enumerate(y_out) if not basit(h)]
sina("① ESKİ seyrelt basit girdiden KENDİNİ KESEN halka üretiyor (kusurun varlığı)",
     len(e_bozuk) > 0, f"{len(e_bozuk)}/{len(H)}")
sina("① YENİ seyrelt: kendini kesen halka 0", len(y_bozuk) == 0, f"{len(y_bozuk)} · sayaç {say}")
ayni = sum(1 for i in range(len(H)) if i not in set(e_bozuk) and y_out[i] == e_out[i])
sina("① ESKİ çıktısı basit olan her halkada YENİ = ESKİ (bit bit)",
     ayni == len(H) - len(e_bozuk), f"{ayni}/{len(H) - len(e_bozuk)}")
kayip = 0
for i, h in enumerate(H):
    icinde = {(round(q[0], 6), round(q[1], 6)) for q in h} & don
    cikti = {(round(q[0], 6), round(q[1], 6)) for q in y_out[i]}
    kayip += len(icinde - cikti)
sina("① donmuş köşelerin HEPSİ yeni çıktıda duruyor (boşluk yapısal olarak doğamaz)",
     kayip == 0, f"kayıp {kayip}")
sina("① sayaç: koru + aslı = eski bozuk sayısı",
     say.get("halka_koru", 0) + say.get("halka_asli", 0) == len(e_bozuk), say)

# ── ② SENTETİK: delik dış halkayı kesiyor (halkalar tek tek basit) ──────────
print("② SENTETİK — delik/dış halka kesişmesi")
dis = [[0, 0], [0.5, 0], [1, 0], [1, 0.5], [1, 1], [0.5, 1.025], [0, 1], [0, 0.5], [0, 0]]
delik = [[0.49, 1.005], [0.51, 1.005], [0.51, 1.015], [0.49, 1.015], [0.49, 1.005]]
H2, P2 = [dis, delik], [[0, 1]]
sina("② girdi parçası geçerli", parca_gecerli(H2, [0, 1]))
e2, pe2 = kos(ESKI, H2, P2, set())
sina("② ESKİ: parça GEÇERSİZ oluyor", not parca_gecerli(e2, pe2[0]))
s2 = {}
y2, py2 = kos(YENI, H2, P2, set(), say=s2)
sina("② YENİ: parça geçerli", parca_gecerli(y2, py2[0]), s2)
sina("② YENİ: sayaç parca_asli=1 · kalan 0",
     s2.get("parca_asli") == 1 and s2.get("parca_kalan_gecersiz") == 0, s2)
# tek halka ve geçerli çok halkalı parça: dokunulmaz
dis3 = [[0, 0], [2, 0], [2, 2], [0, 2], [0, 0]]
del3 = [[0.8, 0.8], [1.2, 0.8], [1.2, 1.2], [0.8, 1.2], [0.8, 0.8]]
e3, _ = kos(ESKI, [dis3, del3], [[0, 1]], set())
y3, _ = kos(YENI, [dis3, del3], [[0, 1]], set())
sina("② geçerli çok halkalı parçada YENİ = ESKİ", e3 == y3)

if os.environ.get("P13B_HIZLI"):          # yalnız ①② (saniyeler) — ③④ gerçek veri dakikalar sürer
    ok = sum(1 for _, s in sonuc if s)
    print(f"\nSONUÇ (HIZLI, yalnız ①②): {ok}/{len(sonuc)} geçti")
    sys.exit(0 if ok == len(sonuc) else 1)

# ── ③ GERÇEK: Osmanlı havuzu (seyreltilmemiş) — nedensellik + birebirlik ───
print("③ GERÇEK — data/donemler.js PARCALAR (Osmanlı havuzu seyreltilmez; koşu 10)")
t0 = time.time()
w = pencere(os.path.join(KOK, "data", "donemler.js"), ["PARCALAR", "PARCA_HALKA", "DONEMLER"])
HO, PO, DO = w["PARCALAR"], w["PARCA_HALKA"], w["DONEMLER"]
refs = ([("o", d["f"], d["t"], d.get("o") or []) for d in DO]
        + [("v", d["f"], d["t"], d.get("v") or []) for d in DO])
donO = ESKI["don_kose_kur"]((HO, PO, refs))
g0 = sum(1 for ks in PO if not parca_gecerli(HO, ks))
eO, peO = kos(ESKI, HO, PO, donO)
g1 = sum(1 for ks in peO if not parca_gecerli(eO, ks))
sO = {}
yO, pyO = kos(YENI, HO, PO, donO, say=sO)
g2 = sum(1 for ks in pyO if not parca_gecerli(yO, ks))
print(f"     halka {len(HO):,} · parça {len(PO):,} · donmuş köşe {len(donO):,} · {time.time()-t0:.0f} sn")
sina("③ GİRDİ (seyreltilmemiş) geçersiz parça", True, g0)
sina("③ ESKİ seyrelt SONRASI geçersiz parça > girdi (NEDENSELLİK: kusuru seyreltme üretiyor)",
     g1 > g0, f"{g0} → {g1}")
sina("③ YENİ seyrelt SONRASI geçersiz parça ≤ girdi", g2 <= g0, f"{g0} → {g2} · sayaç {sO}")
eb = {i for i, h in enumerate(eO) if not basit(h)}
esit = sum(1 for i in range(len(HO)) if i not in eb and yO[i] == eO[i])
degisen_parca_halkasi = {h for ks in PO if len(ks) > 1 for h in ks}
beklenen_esit = len(HO) - len(eb)
sina("③ ESKİ halkası basit olan her halkada YENİ = ESKİ (çok halkalı parça dönüşleri hariç)",
     esit >= beklenen_esit - sO.get("parca_asli", 0) * 50,
     f"eşit {esit} / {beklenen_esit} (parça dönüşü {sO.get('parca_asli', 0)})")
k_e = sum(len(h) for h in eO)
k_y = sum(len(h) for h in yO)
sina("③ köşe bedeli (bilgi)", True, f"eski {k_e:,} → yeni {k_y:,} ({(k_y-k_e)/max(k_e,1)*100:+.2f}%)")

# ── ④ GERÇEK: yabancı havuz (koşu 10 çıktısı, ZATEN seyreltilmiş) — birebirlik
print("④ GERÇEK — data/devletler_harita.js (zaten seyreltilmiş girdi, birebirlik)")
t0 = time.time()
w = pencere(os.path.join(KOK, "data", "devletler_harita.js"),
            ["DEVLET_PARCALAR", "DEVLET_PARCA_HALKA", "DEVLET_HARITA"])
HD, PD, DD = w["DEVLET_PARCALAR"], w["DEVLET_PARCA_HALKA"], w["DEVLET_HARITA"]
refsD = [(d["id"], p["f"], p["t"], p["g"]) for d in DD for p in d["dnm"]]
donD = ESKI["don_kose_kur"]((HD, PD, refsD))
eD, _ = kos(ESKI, HD, PD, donD)
sD = {}
yD, _ = kos(YENI, HD, PD, donD, say=sD)
ebD = {i for i, h in enumerate(eD) if not basit(h)}
esitD = sum(1 for i in range(len(HD)) if i not in ebD and yD[i] == eD[i])
print(f"     halka {len(HD):,} · {time.time()-t0:.0f} sn · sayaç {sD}")
sina("④ ESKİ halkası basit olan halkalarda YENİ = ESKİ",
     esitD >= len(HD) - len(ebD) - 50 * sD.get("parca_asli", 0),
     f"{esitD} / {len(HD) - len(ebD)}")
sina("④ YENİ çıktıda kendini kesen halka yalnız GİRDİSİ zaten kendini kesenler",
     all(not basit(HD[i]) for i, h in enumerate(yD) if not basit(h)),
     sum(1 for h in yD if not basit(h)))

ok = sum(1 for _, s in sonuc if s)
print(f"\nSONUÇ: {ok}/{len(sonuc)} geçti")
sys.exit(0 if ok == len(sonuc) else 1)
