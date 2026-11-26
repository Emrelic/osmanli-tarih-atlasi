# -*- coding: utf-8 -*-
"""MOTOR-KOMSU-KUR-BOL-1016 — BİRİM SINAVI (motor koşturmadan, saniyeler).

Yamalı `arac/uret_petek.py`den GERÇEK işlevler (`_kkb_bilesenler`, `_kkb_erisim`,
`_yabanci_devlet_faz1`) AST ile metinden alınır ve sahte motor ortamında `exec`
edilir — kopya kod YOK. Yamasız taban (`git show <TABAN>:arac/uret_petek.py`,
varsayılan kosu/26-hazirlik) aynı ortamda koşturulur. Sahte olan yalnız geometri
servisi: `petek_epok` (ölü hücrenin payı, motorun kuralıyla: zarf +0,02° adaylar
arasında Voronoi) ve gövde = aktif hücrelerin birleşimi.

SORULAR (iki yön):
  S1 VAKA (#14 Burdur): 3 nokta / 2 devlet, B'nin kur: günü ortada.
     bayrak KAPALI → İ tek dönem, kur sonrası H∩İ binmesi > 0 (kusur görünür)
     bayrak AÇIK   → İ iki dönem, binme 0
  S2 bayrak KAPALI → yamalı FAZ 1 çıktısı taban FAZ 1 ile BİT BİT aynı (S1 + 80 rastgele dünya)
  S3 erişim ÜST KÜME (iki kip: geo · zarf): rastgele dünyalarda petek_epok'un gerçekten değiştirdiği her hücre
     `_kkb_erisim` kümesinde (sahte petek_epok motorun aday kuralını taşır)
  S4 gereksiz bölme YOK: gövdeyi değiştirmeyen uzak kur: günü dönem doğurmaz
     (bayrak açık · kapalı aynı dönem sayısı)
  S6 hücre eşitlik süzgeci: aynı/yeniden birleşmiş toprak AYNI, küçülen/boşalan/kayıtsız FARKLI
  S5 binme: 80 rastgele dünyada bayrak açıkken hiçbir günde iki devlet gövdesi binmez
     (S5k ters yön: kapalıyken aynı dünyaların bir kısmında binme VAR — soru kör değil)
Kullanım: py denetim/ARAC-KOMSU-KUR-BOL-BIRIM-1016.py [--taban REF]  (çıkış 0 = hepsi geçti)
"""
import ast, bisect, io, os, random, subprocess, sys, time

sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
AG = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TABAN = sys.argv[sys.argv.index("--taban") + 1] if "--taban" in sys.argv else "kosu/26-hazirlik"

import numpy as np
import shapely
from shapely.geometry import box, Point, MultiPoint, Polygon
from shapely.ops import unary_union, voronoi_diagram

YAMALI = io.open(os.path.join(AG, "arac", "uret_petek.py"), encoding="utf-8").read()
ESKI = subprocess.run(["git", "-C", AG, "show", f"{TABAN}:arac/uret_petek.py"],
                      capture_output=True, check=True).stdout.decode("utf-8")


_AST = {}


def islev(src, ad):                     # ayrıştırma ezberli (dosya ~9 bin satır)
    k = (id(src), ad)
    if k in _AST:
        return _AST[k]
    t = _AST.get(id(src)) or _AST.setdefault(id(src), ast.parse(src))
    for n in t.body:
        if isinstance(n, ast.FunctionDef) and n.name == ad:
            _AST[k] = ast.get_source_segment(src, n)
            return _AST[k]
    raise SystemExit(f"işlev yok: {ad}")


EPOK, SON = "1281-01-01", "1400-01-01"
_m = [l for l in YAMALI.splitlines() if l.startswith("KKB_ESIT_TAVAN = ")]
assert len(_m) == 1, "KKB_ESIT_TAVAN satırı yok"
KKB_ESIT_TAVAN = float(_m[0].split("=")[1].split("#")[0])


class Dunya:
    """Sahte motor ortamı. P: [(x,y)], S: [[(d,f,t)…]], KUR/BIT: {i: gün}."""

    def __init__(self, P, S, KUR=None, BIT=None, kutu=None):
        self.YERLER = []
        for i, (x, y) in enumerate(P):
            r = {"ad": f"N{i}", "lon": x, "lat": y, "d": [], "v": [],
                 "s": [{"d": d, "f": f, "t": t} for d, f, t in S[i]]}
            if KUR and i in KUR: r["kur"] = KUR[i]
            if BIT and i in BIT: r["bit"] = BIT[i]
            self.YERLER.append(r)
        xs, ys = [p[0] for p in P], [p[1] for p in P]
        kutu = kutu or box(min(xs) - 1, min(ys) - 1, max(xs) + 1, max(ys) + 1)
        vd = voronoi_diagram(MultiPoint([Point(p) for p in P]), envelope=kutu)
        self.PETEK_D = [None] * len(P)
        for c in vd.geoms:
            for i, p in enumerate(P):
                if c.covers(Point(p)):
                    self.PETEK_D[i] = c.intersection(kutu)
        self.noktalar = [Point(p) for p in P]
        self._ez = {}
        self.cagri = 0
        self.kip = os.environ.get("MOTOR_KOMSU_KUR_BOL_KIP", "zarf")

    def devir(self, g):
        # sahte devir: kurulmamış/yok olmuş HER nokta devredilir (kuşatılmışlık vekili)
        return frozenset(i for i, y in enumerate(self.YERLER)
                         if (y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g))

    def petek_epok(self, g):
        D = self.devir(g)
        if not D:
            return self.PETEK_D
        if D in self._ez:
            return self._ez[D]
        hucre = list(self.PETEK_D)
        zarf, bos = self.zarf_bos()
        for grup, (x0, y0, x1, y1) in self.bil(D):
            alan = unary_union([hucre[i] for i in grup])
            ex = box(x0 - 0.02, y0 - 0.02, x1 + 0.02, y1 + 0.02)
            aday = [j for j in range(len(hucre)) if j not in D and not bos[j]
                    and ex.intersects(box(*zarf[j]))]
            if not aday:            # eski yol — küresel en yakın canlı
                canli = [j for j in range(len(hucre)) if j not in D]
                for i in grup:
                    k = min(canli, key=lambda j: self.noktalar[j].distance(self.noktalar[i]))
                    hucre[k] = unary_union([hucre[k], hucre[i]])
                    hucre[i] = Polygon()
                continue
            if len(aday) == 1:
                hucre[aday[0]] = unary_union([hucre[aday[0]], alan])
            else:
                vd = voronoi_diagram(MultiPoint([self.noktalar[j] for j in aday]),
                                     envelope=box(*alan.buffer(1.0).bounds))
                for b in vd.geoms:
                    for j in aday:
                        if b.covers(self.noktalar[j]):
                            pg = b.intersection(alan)
                            if not pg.is_empty and pg.area > 1e-12:
                                hucre[j] = unary_union([hucre[j], pg])
            for i in grup:
                hucre[i] = Polygon()
        self._ez[D] = hucre
        return hucre

    def zarf_bos(self):
        z = np.zeros((len(self.PETEK_D), 4)); b = np.zeros(len(self.PETEK_D), dtype=bool)
        for i, c in enumerate(self.PETEK_D):
            if c is None or c.is_empty: b[i] = True
            else: z[i] = c.bounds
        return z, b

    def graf(self, pay=0.02):
        """Motorun "geo" grafiğinin AYNISI: STRtree dwithin (bkz. uret_petek KOMŞU-KUR-BÖL)."""
        from shapely.strtree import STRtree
        ix = [i for i, c in enumerate(self.PETEK_D) if c is not None and not c.is_empty]
        ci = STRtree([self.PETEK_D[i] for i in ix]).query([self.PETEK_D[i] for i in ix],
                                                          predicate="dwithin", distance=pay)
        g = [set() for _ in self.PETEK_D]
        for a, b in zip(ci[0].tolist(), ci[1].tolist()):
            if a != b:
                g[ix[a]].add(ix[b])
        return g

    def erisim(self, kip, once, sonra):
        zarf, bos = self.zarf_bos()
        xy = np.array([[y["lon"], y["lat"]] for y in self.YERLER], dtype=float)
        if kip == "geo":
            return self.ns["_kkb_erisim"](xy, bos, once, sonra, graf=self.graf(), pay=0.02)
        return self.ns["_kkb_erisim"](xy, bos, once, sonra, zarf=zarf, pay=0.02)

    def bil(self, D):
        return self.ns["_kkb_bilesenler"](*self.zarf_bos(), D)

    def ns_kur(self, src, bayrak):
        ns = {"bisect": bisect, "time": time, "frozenset": frozenset}
        exec(islev(YAMALI, "_kkb_bilesenler"), ns)
        exec(islev(YAMALI, "_kkb_en_yakin"), ns)
        exec(islev(YAMALI, "_kkb_hucre_ayni"), ns)
        ns["KKB_ESIT_TAVAN"] = KKB_ESIT_TAVAN
        exec(islev(YAMALI, "_kkb_erisim"), ns)
        exec(islev(src, "_yabanci_devlet_faz1"), ns)
        dw = self

        def gh(did, aktif, a, sira):
            dw.cagri += 1
            return unary_union([dw.petek_epok(a)[j] for j in sira]), 0.0, 0

        ns.update(dict(
            YERLER=self.YERLER, EPOK=EPOK, KESIT_SON=SON, SINIR_KISIT=False,
            KOMSU_KUR_BOL=bayrak, BOYALAR={}, DOLGU_ACIK=False, _BANT_HAM={},
            nabiz=lambda *_: None, devir_kumesi=self.devir, petek_epok=self.petek_epok,
            _osm_aktif=lambda y, a: False, _yabanci_govde_hesap=gh,
            _ONB=type("O", (), {"acik": False})(), _ONB_GEO=None,
            mp_koord=lambda g: shapely.to_wkt(shapely.normalize(g), rounding_precision=9),
            _mp_geo=lambda m: shapely.from_wkt(m),
            _komsu_toprak_cikar=lambda did, aktif, a, g: g,
            _KKB_NOKTA_GUN={}))
        self.ns = ns
        if bayrak:                       # motorun ön hesap döngüsünün AYNISI (bkz. uret_petek)
            gunler = sorted({y["kur"] for y in self.YERLER if y.get("kur")}
                            | {y["bit"] for y in self.YERLER if y.get("bit")})
            once = self.devir(EPOK)
            for g in gunler:
                if not (EPOK < g <= SON):
                    continue
                sonra = self.devir(g)
                for j in self.erisim(self.kip, once, sonra):
                    ns["_KKB_NOKTA_GUN"].setdefault(j, []).append(g)
                once = sonra
        return ns

    def faz1(self, src, bayrak, devletler):
        self._ez = {}
        ns = self.ns_kur(src, bayrak)
        out = {}
        for k, did in enumerate(devletler):
            out[did] = ns["_yabanci_devlet_faz1"]((k, (did, (did, "#000"))))[3]
        return out


def govde_gun(ham, g):
    for r in ham:
        if r["f"] <= g < r["t"]:
            return shapely.from_wkt(r["mp"])
    return None


def binme(out, g):
    gs = [(d, govde_gun(h, g)) for d, h in out.items()]
    gs = [(d, x) for d, x in gs if x is not None and not x.is_empty]
    top = 0.0
    for i in range(len(gs)):
        for j in range(i + 1, len(gs)):
            top += gs[i][1].intersection(gs[j][1]).area
    return top


HATA = []


def soru(ad, kosul, ayrinti=""):
    print(f"  {'✓' if kosul else '✗'} {ad}" + (f" — {ayrinti}" if ayrinti else ""))
    if not kosul:
        HATA.append(ad)


print(f"MOTOR-KOMSU-KUR-BOL-1016 birim sınavı · taban {TABAN}")
# ---- S1 VAKA: H = {N0, N1(Burdur, kur ortada)} · İ = {N2(Denizli)} ----
KUR = "1299-09-28"
P = [(0.0, 0.0), (1.0, 0.0), (2.0, 0.0)]
S = [[("H", EPOK, SON)], [("H", KUR, SON)], [("I", EPOK, SON)]]
w = Dunya(P, S, KUR={1: KUR}, kutu=box(-0.5, -0.5, 2.5, 0.5))
kap = w.faz1(YAMALI, False, ["H", "I"])
acik = w.faz1(YAMALI, True, ["H", "I"])
eski = w.faz1(ESKI, False, ["H", "I"])
G = "1321-01-01"
print(f"  S1 kapalı: H {len(kap['H'])} dönem · İ {len(kap['I'])} dönem · binme({G}) {binme(kap, G):.4f}")
print(f"  S1 açık  : H {len(acik['H'])} dönem · İ {len(acik['I'])} dönem · binme({G}) {binme(acik, G):.4f}")
soru("S1a kapalı: İ TEK dönem (eski davranış)", len(kap["I"]) == 1)
soru("S1b kapalı: kur sonrası binme > 0 (kusur görünür, beklenen 0,5)", abs(binme(kap, G) - 0.5) < 1e-6,
     f"{binme(kap, G):.4f}")
soru("S1c açık: İ İKİ dönem, ikincisi kur gününde başlar",
     len(acik["I"]) == 2 and acik["I"][1]["f"] == KUR, str([(r["f"], r["t"]) for r in acik["I"]]))
soru("S1d açık: binme 0 (kur öncesi ve sonrası)",
     binme(acik, G) < 1e-9 and binme(acik, "1290-01-01") < 1e-9)
soru("S1e açık: kur sonrası İ gövdesi = kendi hücresi (alan 1,0)",
     abs(govde_gun(acik["I"], G).area - 1.0) < 1e-9)
soru("S2a kapalı ≡ taban (S1)", kap == eski)

# ---- rastgele dünyalar ----
rnd = random.Random(1016)
DUNYA = 80
cagri_k = cagri_a = don_k = don_a = 0
gun = lambda: f"{rnd.randint(1282, 1398)}-{rnd.randint(1, 12):02d}-{rnd.randint(1, 28):02d}"
s2 = s3 = s4 = s5 = s5k = 0
s3_eksik = []
for n in range(DUNYA):
    m = rnd.randint(6, 14)
    P = [(rnd.uniform(0, 6), rnd.uniform(0, 4)) for _ in range(m)]
    dv = ["A", "B", "C"]
    S, KURd, BITd = [], {}, {}
    for i in range(m):
        d = rnd.choice(dv)
        if rnd.random() < 0.3:
            a = gun(); S.append([(d, EPOK, a), (rnd.choice(dv), a, SON)])
        else:
            S.append([(d, EPOK, SON)])
        r = rnd.random()
        if r < 0.3: KURd[i] = gun()
        elif r < 0.4: BITd[i] = gun()
    w = Dunya(P, S, KUR=KURd, BIT=BITd)
    w.cagri = 0
    k = w.faz1(YAMALI, False, dv)
    cagri_k += w.cagri
    e = w.faz1(ESKI, False, dv)
    s2 += (k == e)
    w.cagri = 0
    a = w.faz1(YAMALI, True, dv)
    cagri_a += w.cagri
    don_k += sum(len(h) for h in k.values()); don_a += sum(len(h) for h in a.values())
    # S3: gerçek değişen hücreler ⊆ erişim
    zarf, bos = w.zarf_bos()
    xy = np.array(P)
    gunler = sorted(set(KURd.values()) | set(BITd.values()))
    once_g = EPOK
    ok = True
    for g in gunler:
        h0, h1 = w.petek_epok(once_g), w.petek_epok(g)
        # değişim = ALAN farkı (simetrik fark > 1e-9): yeniden birleşimin köşe
        # sırası/temsil farkı geometri değişimi DEĞİLDİR (binme doğurmaz)
        degisen = {j for j in range(m) if h0[j].symmetric_difference(h1[j]).area > 1e-9}
        for kip in ("geo", "zarf"):
            er = w.erisim(kip, w.devir(once_g), w.devir(g))
            if not degisen <= er:
                ok = False; s3_eksik.append((kip, n, g, sorted(degisen - er)))
        once_g = g
    s3 += ok
    # S5: açıkken her kırılma günü ve ortası binme 0
    tum = sorted({r["f"] for h in a.values() for r in h} | set(gunler))
    s5 += all(binme(a, g) < 1e-9 for g in tum)
    tk = sorted({r["f"] for h in k.values() for r in h} | set(gunler))
    s5k += any(binme(k, g) > 1e-9 for g in tk)
soru(f"S2b kapalı ≡ taban ({DUNYA} rastgele dünya)", s2 == DUNYA, f"{s2}/{DUNYA}")
soru(f"S3 erişim üst küme, iki kip ({DUNYA} rastgele dünya)", s3 == DUNYA, f"{s3}/{DUNYA} {s3_eksik[:3]}")
soru(f"S5 açık: hiçbir günde binme yok ({DUNYA} rastgele dünya)", s5 == DUNYA, f"{s5}/{DUNYA}")
soru("S5k soru kör değil: kapalıyken binmeli dünya VAR", s5k > 0, f"{s5k}/{DUNYA} dünyada binme")

print(f"  bilgi: gövde hesabı kapalı {cagri_k} → açık {cagri_a} · dönem {don_k} → {don_a}")

# ---- S6: hücre eşitlik süzgeci (gereksiz gövde hesabını önleyen kapı) ----
ns6 = {}
exec(islev(YAMALI, "_kkb_hucre_ayni"), ns6)
ns6["KKB_ESIT_TAVAN"] = KKB_ESIT_TAVAN
h = box(0, 0, 1, 1)
yeniden = unary_union([box(0, 0, 0.5, 1), box(0.5, 0, 1, 1)])     # aynı toprak, başka köşe dizisi
soru("S6a aynı nesne ⇒ aynı", ns6["_kkb_hucre_ayni"]({0: h}, [h], {0}))
soru("S6b yeniden birleşmiş AYNI toprak ⇒ aynı (köşe temsili değişim sayılmaz)",
     ns6["_kkb_hucre_ayni"]({0: h}, [yeniden], {0}))
soru("S6c küçülmüş hücre ⇒ FARKLI", not ns6["_kkb_hucre_ayni"]({0: h}, [box(0, 0, 0.9, 1)], {0}))
soru("S6d kayıtsız nokta ⇒ FARKLI (güvenli taraf)", not ns6["_kkb_hucre_ayni"]({}, [h], {0}))
soru("S6e boşalan hücre ⇒ FARKLI", not ns6["_kkb_hucre_ayni"]({0: h}, [Polygon()], {0}))

# ---- S4: uzak kur: günü dönem doğurmaz ----
P = [(0, 0), (1, 0), (2, 0), (9, 0), (10, 0)]
S = [[("H", EPOK, SON)], [("H", EPOK, SON)], [("I", EPOK, SON)], [("J", EPOK, SON)], [("J", EPOK, SON)]]
w = Dunya(P, S, KUR={4: "1350-01-01"}, kutu=box(-0.5, -0.5, 10.5, 0.5))
k = w.faz1(YAMALI, False, ["H", "I", "J"])
a = w.faz1(YAMALI, True, ["H", "I", "J"])
soru("S4 uzak kur: H ve İ dönem sayısı değişmez",
     len(a["H"]) == len(k["H"]) == 1 and len(a["I"]) == len(k["I"]) == 1,
     f"H {len(k['H'])}→{len(a['H'])} · İ {len(k['I'])}→{len(a['I'])} · J {len(k['J'])}→{len(a['J'])}")

print("SONUÇ: " + ("HEPSİ GEÇTİ" if not HATA else f"{len(HATA)} soru KALDI: {HATA}"))
sys.exit(0 if not HATA else 1)
