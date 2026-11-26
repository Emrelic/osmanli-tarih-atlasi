# -*- coding: utf-8 -*-
"""MOTOR3-1016 — SAF BİRİM SINAVI (motor KOŞTURMAZ; sahte geometri; saniyeler).

Yamalar (denetim/):  MOTOR-YAKA-KILIDI-1016.diff   (#7  MOTOR_YAKA_KILIDI=1)
                     MOTOR-INCE-CIKINTI-1016.diff  (#10 MOTOR_INCE_CIKINTI=1)
                     MOTOR-ZIKZAK-DUZ-1016.diff    (#11 MOTOR_ZIKZAK_DUZ=1)
Taban: `kosu/26-hazirlik:arac/uret_petek.py` (git show) — ağacın kendi dosyası DEĞİL.

SINAVLAR
  K   KAPALI ⇒ BİT BİT AYNI (yapısal kanıt): her yama tek başına, üçü birlikte ve
      MOTOR-KOMSU-KUR-BOL-1016.diff ile iki sırada uygulanır; yamalı AST'den
      bayrak korumalı `if` blokları + yeni işlev/ad tanımları çıkarılınca taban
      AST'si (ast.dump) BİREBİR çıkmalı. Ek: bayraklar ortamsızken KAPALI
      (değerlendirilir), her korumalı `if`in testi bayrakla BAŞLAR, ve bayrak
      adları yamasız tabanda HİÇ geçmez.
  A   yaka kilidi (A): tohum hücresi merkezi karşı yakada → kilit bedelleri doğru
      kenarlara yazılır/kalkar; çok kaynaklı Dijkstra'da (motorun KENDİ
      `_kv_dijkstra`sı) karşı yakadan alınan hücre 0'a iner · TERS YÖN: bütün
      hücreler yine sahipli (delik yok) · merkez ve tohum aynı yakadaysa 0 değişiklik
  B   yaka kilidi (B): iki tohumlu yüz HAM petek sınırıyla bölünür (açıortay
      değil) · alt yüzler ham hücrelerin %99'undan fazlasıyla örtüşür · alan korunur
  I   ince çıkıntı: dil kırpılır, pay iki komşuya gider · TERS YÖN: hücre sayısı
      korunur (delik 0), her etiket tek bileşen (eksklav 0), köprü/kıyı şeridi/
      çekirdeksiz küçük petek/engelli devir DOKUNULMAZ, tohum hücresi değişmez
  Z   zikzak: merdiven kenar sadeleşir, sert dönüş sayısı düşer, örtü yeniden
      kurulunca 2 yüz, her tohum kendi yüzünde, alan farkı ~0 · TERS YÖN:
      yaslanmış köşe SABİT, tohum süpürecek düzleştirme RED, kenar kesecek
      düzleştirme RED
  M   maliyet ölçümü (tam koşu ölçeğine çarpanla): saniye cinsinden basılır

KULLANIM  py denetim/ARAC-MOTOR3-BIRIM-1016.py [--repo C:\\atlas] [--taban-ref kosu/26-hazirlik]
          [--kkb C:\\atlas-w-motor2\\denetim\\MOTOR-KOMSU-KUR-BOL-1016.diff]
ÇIKIŞ 0 = hepsi geçti · 1 = en az bir sınav düştü · 2 = ölçülemedi (dosya/araç yok)
"""
import argparse, ast, io, math, os, shutil, subprocess, sys, tempfile, time

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
AG = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEN = os.path.join(AG, "denetim")
YAMALAR = {"Y": "MOTOR-YAKA-KILIDI-1016.diff", "I": "MOTOR-INCE-CIKINTI-1016.diff",
           "Z": "MOTOR-ZIKZAK-DUZ-1016.diff"}
BAYRAKLAR = {"YAKA_KILIDI", "INCE_CIKINTI", "ZIKZAK_DUZ"}
SONUC = []


def hukum(ad, ok, ayrinti=""):
    SONUC.append((ad, bool(ok)))
    print(f"  {'✓' if ok else '✗ DÜŞTÜ'}  {ad}" + (f"  — {ayrinti}" if ayrinti else ""))


# ───────────────────────────── K: yapısal eşdeğerlik ─────────────────────────────
def taban_oku(repo, ref):
    r = subprocess.run(["git", "-C", repo, "show", f"{ref}:arac/uret_petek.py"],
                       capture_output=True)
    if r.returncode:
        print("ÖLÇÜLEMEDİ: taban okunamadı", r.stderr.decode(errors="replace")[:200])
        sys.exit(2)
    return r.stdout.decode("utf-8").replace("\r\n", "\n")


def yamala(taban, diffler):
    d = tempfile.mkdtemp(prefix="m3b_")
    try:
        os.makedirs(os.path.join(d, "arac"))
        os.makedirs(os.path.join(d, "denetim"))
        io.open(os.path.join(d, "arac", "uret_petek.py"), "w", encoding="utf-8",
                newline="\n").write(taban)
        for df in diffler:
            r = subprocess.run(["git", "apply", "--check", df], cwd=d, capture_output=True)
            if r.returncode:
                return None, f"--check düştü: {os.path.basename(df)}: {r.stderr.decode(errors='replace')[:160]}"
            subprocess.run(["git", "apply", df], cwd=d, check=True, capture_output=True)
        return io.open(os.path.join(d, "arac", "uret_petek.py"), encoding="utf-8").read(), ""
    finally:
        shutil.rmtree(d, ignore_errors=True)


def _bayrak_testi_mi(t):
    """Testin değeri bayrak kapalıyken KESİN False mu? (yapısal okuma)"""
    if isinstance(t, ast.Name):
        return t.id in BAYRAKLAR
    if isinstance(t, ast.BoolOp) and isinstance(t.op, ast.And):
        return _bayrak_testi_mi(t.values[0])
    if (isinstance(t, ast.Compare) and isinstance(t.left, ast.Name) and t.left.id in BAYRAKLAR
            and len(t.ops) == 1 and isinstance(t.ops[0], ast.Gt)
            and isinstance(t.comparators[0], ast.Constant) and t.comparators[0].value == 0):
        return True
    return False


def _bayrak_adlari(n):
    return {x.id for x in ast.walk(n) if isinstance(x, ast.Name)} & BAYRAKLAR


class Soyucu(ast.NodeTransformer):
    def __init__(self, yeni_adlar):
        self.yeni = yeni_adlar
        self.soyulan_if = 0
        self.kusur = []

    def _liste(self, govde):
        out = []
        for s in govde:
            if isinstance(s, ast.If) and _bayrak_adlari(s.test):
                if s.orelse or not _bayrak_testi_mi(s.test):
                    self.kusur.append(ast.unparse(s.test)[:80])
                self.soyulan_if += 1
                continue
            if isinstance(s, ast.FunctionDef) and s.name in self.yeni:
                continue
            if isinstance(s, ast.Assign) and all(isinstance(t, ast.Name) and t.id in self.yeni
                                                 for t in s.targets):
                continue
            out.append(self.visit(s))
        return out

    def generic_visit(self, node):
        for alan in ("body", "orelse", "finalbody"):
            if isinstance(getattr(node, alan, None), list):
                setattr(node, alan, self._liste(getattr(node, alan)))
        if isinstance(node, ast.Try):
            for h in node.handlers:
                h.body = self._liste(h.body)
        for alan, deger in ast.iter_fields(node):
            if isinstance(deger, ast.AST):
                self.visit(deger)
        return node


def tanimli_adlar(a):
    adlar = set()
    for n in a.body:
        if isinstance(n, ast.FunctionDef):
            adlar.add(n.name)
        elif isinstance(n, ast.Assign):
            adlar |= {t.id for t in n.targets if isinstance(t, ast.Name)}
    return adlar


def esdegerlik(taban, yamali, ad):
    a0, a1 = ast.parse(taban), ast.parse(yamali)
    yeni = tanimli_adlar(a1) - tanimli_adlar(a0)
    s = Soyucu(yeni)
    a1 = s.visit(a1)
    ok = ast.dump(a0) == ast.dump(a1) and not s.kusur
    hukum(f"K {ad}: bayrak kapalı ⇒ taban AST'si birebir", ok,
          f"soyulan bayrak-if {s.soyulan_if} · yeni ad {len(yeni)} ({', '.join(sorted(yeni))[:120]})"
          + (f" · KORUMASIZ/else'li if: {s.kusur}" if s.kusur else ""))
    return ok


def sinav_K(a):
    print("── K: KAPALI ⇒ BİT BİT AYNI (yapısal) ──")
    taban = taban_oku(a.repo, a.taban_ref)
    for b in BAYRAKLAR:
        hukum(f"K bayrak adı tabanda YOK: {b}", b not in taban)
    yollar = {k: os.path.join(DEN, v) for k, v in YAMALAR.items()}
    for k, y in yollar.items():
        if not os.path.exists(y):
            print("ÖLÇÜLEMEDİ: yama yok", y)
            sys.exit(2)
    birlesik = None
    sira = [("Y", ["Y"]), ("I", ["I"]), ("Z", ["Z"]), ("Y+I+Z", ["Y", "I", "Z"]),
            ("Z+I+Y", ["Z", "I", "Y"])]
    for ad, ks in sira:
        src, hata = yamala(taban, [yollar[k] for k in ks])
        if src is None:
            hukum(f"K {ad}: uygulanır", False, hata)
            continue
        esdegerlik(taban, src, ad)
        if ad == "Y+I+Z":
            birlesik = src
        elif ad == "Z+I+Y":
            hukum("K sıra bağımsız: Y+I+Z ≡ Z+I+Y (metin)", src == birlesik)
    if a.kkb and os.path.exists(a.kkb):
        s1, h1 = yamala(taban, [a.kkb] + [yollar[k] for k in "YIZ"])
        s2, h2 = yamala(taban, [yollar[k] for k in "YIZ"] + [a.kkb])
        hukum("K komşu-kur ÖNCE + üç yama: uygulanır", s1 is not None, h1)
        hukum("K üç yama + komşu-kur SONRA: uygulanır", s2 is not None, h2)
        hukum("K iki sıranın metni AYNI", s1 is not None and s1 == s2)
        if s1 is not None:
            kkb_tek, _ = yamala(taban, [a.kkb])
            # komşu-kur bayrağı da kapalıyken: (kkb tek) ↔ (kkb + üç yama) yapısal eşdeğer
            esdegerlik(kkb_tek, s1, "komşu-kur tabanında Y+I+Z")
    else:
        print(f"  (komşu-kur yaması verilmedi/bulunamadı: {a.kkb} — o sınav ÖLÇÜLEMEDİ)")
        SONUC.append(("K komşu-kur sırası ÖLÇÜLEMEDİ", False))
    # bayrak değerlendirmesi ortamsız
    ns = {"os": os}
    eski = {k: os.environ.pop(k) for k in list(os.environ)
            if k in ("MOTOR_YAKA_KILIDI", "MOTOR_INCE_CIKINTI", "MOTOR_ZIKZAK_DUZ")}
    try:
        for n in ast.parse(birlesik).body:
            if (isinstance(n, ast.Assign) and len(n.targets) == 1
                    and isinstance(n.targets[0], ast.Name) and n.targets[0].id in BAYRAKLAR):
                exec(compile(ast.Module([n], []), "<bayrak>", "exec"), ns)
        hukum("K ortamsız bayrak değerleri KAPALI",
              ns.get("YAKA_KILIDI") is False and ns.get("INCE_CIKINTI") == 0
              and ns.get("ZIKZAK_DUZ") is False,
              f"YAKA={ns.get('YAKA_KILIDI')} INCE={ns.get('INCE_CIKINTI')} ZIKZAK={ns.get('ZIKZAK_DUZ')}")
    finally:
        os.environ.update(eski)
    return birlesik


# ───────────────────────────── işlev çekme ─────────────────────────────
def cek(src, adlar, ns):
    a = ast.parse(src)
    bul = {n.name: n for n in a.body if isinstance(n, ast.FunctionDef)}
    for ad in adlar:
        if ad not in bul:
            raise SystemExit(f"ÖLÇÜLEMEDİ: işlev yok {ad}")
        exec(compile(ast.Module([bul[ad]], []), f"<{ad}>", "exec"), ns)
    return ns


def km(la1, lo1, la2, lo2):
    R = 6371.0
    p1, p2 = math.radians(la1), math.radians(la2)
    dp, dl = p2 - p1, math.radians(lo2 - lo1)
    return 2 * R * math.asin(math.sqrt(math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2))


class _Girdi:
    km = staticmethod(km)


def taban_ns():
    import numpy as np, shapely, heapq
    from shapely.geometry import (Point, Polygon, LineString, MultiPoint, box, MultiPolygon)
    from shapely.strtree import STRtree
    from shapely.ops import unary_union, polygonize, voronoi_diagram
    return {"np": np, "_np": np, "shapely": shapely, "math": math, "_heapq": heapq,
            "Point": Point, "Polygon": Polygon, "LineString": LineString, "MultiPoint": MultiPoint,
            "box": box, "MultiPolygon": MultiPolygon, "STRtree": STRtree,
            "unary_union": unary_union, "polygonize": polygonize,
            "voronoi_diagram": voronoi_diagram, "girdi": _Girdi, "time": time, "os": os}


def izgara_ns(src, nx=20, ny=20, adim=0.05):
    ns = taban_ns()
    yon = ((1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1))
    ns.update({"_kvx0": 0.0, "_kvy0": 0.0, "KV_ADIM": adim, "_kvnx": nx, "_kvny": ny,
               "_kvkara": bytearray(b"") * (nx * ny), "_KV_YON": yon, "_KV_YS": 8,
               "_KV_YARI": 1, "YURUYUS_16": False, "NEHIR_KM_SAAT": 5.04,
               "_KVDY": adim * 111.32, "_KVSU": set(), "_kv_ara_kara": lambda *a: True,
               "_YAKA_SAYAC": {"tohum_hucre": 0, "aday_kenar": 0, "kilit_eklenen": 0,
                               "kilit_kaldirilan": 0, "bolunen_yuz": 0, "bolme_hat": 0}})
    return cek(src, ["_nehir_kenar_kur", "_yaka_kilidi_kenar", "_kv_dijkstra"], ns)


TABLO = {"gecitsiz": {1: 16.0, 2: 4.0}, "kopru": 0.0, "feribot": 8.0,
         "kale-cifti": 8.0, "sig-gecit": 4.0}


# ───────────────────────────── A: yaka kilidi (A) ─────────────────────────────
def sinav_A(src):
    print("── A: TOHUM YAKA KİLİDİ (alt-hücre yakası) ──")
    from shapely.geometry import LineString
    ns = izgara_ns(src)
    nx = ns["_kvnx"]
    nehir = [LineString([(0.0, 0.52), (1.0, 0.52)])]       # j=10 hücresinin merkezi (0,525) KUZEYDE
    bedel, bayrak, _ = ns["_nehir_kenar_kur"](nehir, [1], [], TABLO)
    h1 = 10 * nx + 10                                        # tohum-1: (0,525 ; 0,515) GÜNEY yaka
    h2 = 16 * nx + 10                                        # tohum-2: kuzey yakada, uzakta
    yer = [{"lon": 0.525, "lat": 0.515}, {"lon": 0.525, "lat": 0.825}]
    tohum = {h1: [0], h2: [1]}
    d = ns["_yaka_kilidi_kenar"](tohum, yer, nehir, [1], [], TABLO, bedel)
    yon = ns["_KV_YON"]
    kuzey = {h1 * 8 + yon.index(v) for v in ((0, 1), (1, 1), (-1, 1), (1, 0), (-1, 0))}
    guney = {h1 * 8 + yon.index(v) for v in ((0, -1), (1, -1), (-1, -1))}
    hukum("A kilit: kuzeye/yana çıkan 5 kenara bedel EKLENDİ (16 sa × 5,04)",
          all(abs(d.get(k, -1) - 16 * 5.04) < 1e-9 for k in kuzey), f"{sorted(d.items())[:3]}…")
    hukum("A kilit: güneye inen 3 kenarın bedeli KALKTI (tohum o yakada)",
          all(d.get(k) == 0.0 for k in guney) and all(k in bedel for k in guney))
    hukum("A kilit: tohum-2 (merkez ile aynı yaka) için 0 değişiklik",
          not any(k // 8 == h2 for k in d))
    # Dijkstra: motorun KENDİ işlevi, önce kilitsiz sonra kilitli
    ns["_kvtohum"] = tohum
    u0, s0 = ns["_kv_dijkstra"](None, (dict(bedel), bytearray(bayrak)))
    b2, f2 = dict(bedel), bytearray(bayrak)
    for k, v in d.items():
        if v > 0:
            b2[k] = v; f2[k // 8] = 1
        else:
            b2.pop(k, None)
    u1, s1 = ns["_kv_dijkstra"](None, (b2, f2))
    kuzey_h = [j * nx + i for j in range(10, 20) for i in range(nx)]
    guney_h = [j * nx + i for j in range(0, 10) for i in range(nx)]
    k0 = sum(1 for h in kuzey_h if s0[h] == 0 and h != h1)
    k1 = sum(1 for h in kuzey_h if s1[h] == 0 and h != h1)
    g0 = sum(1 for h in guney_h if s0[h] == 0)
    g1 = sum(1 for h in guney_h if s1[h] == 0)
    hukum("A Dijkstra: güney tohumunun KUZEY yakadan aldığı hücre 0'a indi", k0 > 0 and k1 == 0,
          f"kilitsiz {k0} → kilitli {k1}")
    hukum("A ters yön: güney yakanın tamamı yine güney tohumunda", g0 == g1 == len(guney_h),
          f"{g0} → {g1} / {len(guney_h)}")
    hukum("A ters yön: sahipsiz hücre 0 (delik yok)", min(s1) >= 0 and min(s0) >= 0)
    # merkezde duran tohum: değişiklik yok
    d0 = ns["_yaka_kilidi_kenar"]({h1: [0]}, [{"lon": 0.525, "lat": 0.525}], nehir, [1], [], TABLO, bedel)
    hukum("A merkezdeki tohum: 0 kenar değişir (gereksiz çalkantı yok)", d0 == {})


# ───────────────────────────── B: yaka kilidi (B) ─────────────────────────────
def sinav_B(src):
    print("── B: ÇOK NOKTALI YÜZ — ham petek sınırıyla bölme ──")
    from shapely.geometry import Polygon, Point, MultiPoint, box
    from shapely.ops import polygonize, unary_union, voronoi_diagram
    ns = taban_ns()
    cek(src, ["_cizgiler", "_yaka_bolme_hatlari"], ns)
    f = box(0, 0, 4, 2)
    # nehir (ham sınır) eğri: kuzey tohum nehrin hemen üstünde, güney tohum aşağıda
    nehir = [(0, 1.0), (1, 1.0), (2, 0.6), (3, 0.3), (4, 0.3)]
    ust = Polygon([(0, 2), (4, 2)] + nehir[::-1])
    alt = Polygon([(0, 0), (4, 0)] + nehir[::-1])
    ham = [ust, alt]
    P = [Point(1.0, 1.02), Point(1.0, 0.85)]
    hat = ns["_yaka_bolme_hatlari"](f, [0, 1], ham)
    yuz = [g for g in polygonize(unary_union([f.boundary] + hat))]
    sahip = {}
    for g in yuz:
        ic = [i for i, p in enumerate(P) if g.contains(p)]
        if len(ic) == 1:
            sahip[ic[0]] = g
    ok = len(sahip) == 2 and all(sahip[i].intersection(ham[i]).area > 0.99 * sahip[i].area for i in sahip)
    hukum("B ham sınırla bölme: her alt yüz kendi ham hücresinde (%99+)", ok,
          f"alt yüz {len(yuz)} · " + " · ".join(f"{i}:{sahip[i].area:.3f}" for i in sorted(sahip)))
    hukum("B ters yön: alan korunur (Σ alt yüz = yüz)", abs(sum(g.area for g in yuz) - f.area) < 1e-9)
    vd = voronoi_diagram(MultiPoint(P), envelope=f)
    yanlis = 0.0
    for c in vd.geoms:
        for i, p in enumerate(P):
            if c.contains(p):
                yanlis += c.intersection(f).difference(ham[i]).area
    hukum("B kusur tanığı: açıortay bölmesi karşı yakaya pay verir (eski yol)", yanlis > 0.5,
          f"açıortayla yanlış yakadaki alan {yanlis:.2f} / {f.area}")


# ───────────────────────────── I: ince çıkıntı ─────────────────────────────
def _bilesen_say(S, v):
    from scipy import ndimage as nd
    import numpy as np
    return nd.label(S == v, structure=np.ones((3, 3), bool))[1]


def _ince_maske(S, g):
    import numpy as np
    k = g + 1
    out = np.zeros(S.shape, bool)
    for v in set(S[S >= 0].tolist()):
        M = S == v
        h, w = M.shape
        A = M[0:h - k + 1, 0:w - k + 1].copy()
        for dy in range(k):
            for dx in range(k):
                A &= M[dy:dy + h - k + 1, dx:dx + w - k + 1]
        C = np.zeros_like(M)
        for dy in range(k):
            for dx in range(k):
                C[dy:dy + h - k + 1, dx:dx + w - k + 1] |= A
        out |= M & ~C
    return out


def sinav_I(src):
    print("── I: İNCE ÇIKINTI KIRPMA (etiket ızgarası) ──")
    import numpy as np
    ns = taban_ns()
    ns["_INCE_MERKEZ"] = None
    ns["_INCE_SAYAC"] = {"etiket": 0, "bilesen": 0, "kirpilan_bilesen": 0, "kirpilan_hucre": 0,
                         "kopru_ada": 0, "sandvic_degil": 0, "degismez": 0, "devredilemedi": 0}
    cek(src, ["_ince_cikinti_kirp"], ns)
    kirp = ns["_ince_cikinti_kirp"]
    # 1) DİL: 3 üstte blok; 1 solda, 2 sağda; 3'ün tek hücre enli dili aşağı iniyor (çapraz merdiven)
    S = np.full((20, 20), 1, np.int32)
    S[:, 10:] = 2
    S[14:, :] = 3
    dil = [(13, 9), (12, 9), (12, 10), (11, 10), (10, 10), (10, 11), (9, 11), (8, 11)]
    for r, c in dil:
        S[r, c] = 3
    kor = np.zeros_like(S, bool)
    kor[2, 2] = kor[2, 17] = kor[17, 10] = True
    deg = np.ones_like(S, bool)
    S2, say = kirp(S, deg, kor, 1, merkez={1: (10, 4), 2: (10, 15), 3: (17, 10)})
    hukum("I dil kırpıldı: 3'ün dil hücresi 0", all(S2[r, c] != 3 for r, c in dil),
          f"kırpılan {say['kirpilan_hucre']} hücre")
    hukum("I pay iki komşuya", set(int(S2[r, c]) for r, c in dil) == {1, 2},
          str(sorted(set(int(S2[r, c]) for r, c in dil))))
    hukum("I ters yön: delik 0 (hücre sayısı/etiketli hücre korunur)", (S2 >= 0).all() and S2.size == S.size)
    hukum("I ters yön: her etiket TEK bileşen (eksklav 0)",
          all(_bilesen_say(S2, v) == 1 for v in (1, 2, 3)))
    hukum("I tohum hücreleri değişmedi", all(S2[r, c] == S[r, c] for r, c in zip(*np.nonzero(kor))))
    ince = _ince_maske(S, 1)
    hukum("I değişen her hücre İNCE (2×2 bloğa giremeyen) ve tohum değil — çekirdek dokunulmadı",
          bool((~ince[S2 != S]).sum() == 0), f"değişen {int((S2 != S).sum())} · ince olmayan değişen "
          f"{int((~ince[S2 != S]).sum())}")
    # 1b) DÜZ DİL: dil dışında HİÇBİR hücre değişmemeli
    Sd = np.full((20, 20), 1, np.int32)
    Sd[:, 11:] = 2
    Sd[0:6, 10] = 2
    Sd[14:, :] = 3
    for r in range(6, 14):
        Sd[r, 10] = 3
    Sd2, say = kirp(Sd, deg, kor, 1)
    hukum("I düz dil: yalnız dil (8 hücre) değişti, pay komşulara (1/2)",
          int((Sd2 != Sd).sum()) == 8 and set(int(Sd2[r, 10]) for r in range(6, 14)) <= {1, 2}
          and all(_bilesen_say(Sd2, v) == 1 for v in (1, 2, 3)),
          f"değişen {int((Sd2 != Sd).sum())} · {sorted(set(int(Sd2[r, 10]) for r in range(6, 14)))}")
    # 2) KÖPRÜ: 3'ün iki bloğunu bağlayan tek hücre koridor → dokunulmaz
    K = np.full((20, 20), 1, np.int32)
    K[:, 10:] = 2
    K[0:4, 6:14] = 3
    K[16:20, 6:14] = 3
    for r in range(4, 16):
        K[r, 10] = 3
    K2, say = kirp(K, deg, kor, 1)
    hukum("I ters yön: köprü kırpılmaz (etiketi bölmez)", (K2 == K).all(), f"köprü/ada {say['kopru_ada']}")
    # 3) KIYI ŞERİDİ: 3'ün dili bir yanda DENİZ (−1) → sandviç değil, dokunulmaz
    Q = np.full((20, 20), 1, np.int32)
    Q[:, 0] = -1
    Q[14:, :] = 3
    Q[:, 0] = -1
    for r in range(4, 14):
        Q[r, 1] = 3
    Q2, say = kirp(Q, Q >= 0, kor, 1)
    hukum("I ters yön: kıyı şeridi (tek yanı deniz) kırpılmaz", (Q2 == Q).all(),
          f"sandviç değil {say['sandvic_degil']}")
    # 4) ÇEKİRDEKSİZ KÜÇÜK PETEK: 1×5 şerit, tohumlu → dokunulmaz
    C = np.full((20, 20), 1, np.int32)
    C[:, 10:] = 2
    for c in range(8, 13):
        C[10, c] = 4
    kor4 = kor.copy(); kor4[10, 10] = True
    C2, _ = kirp(C, deg, kor4, 1)
    hukum("I ters yön: blok çekirdeği olmayan küçük petek kırpılmaz", (C2 == C).all())
    # 5) ENGEL: devir her yöne yasak (nehir) → bileşen yerinde kalır
    E2, say = kirp(S, deg, kor, 1, engel=lambda *a: True)
    hukum("I ters yön: devir yasaksa (nehir/boğaz) dil YERİNDE kalır", (E2 == S).all(),
          f"devredilemedi {say['devredilemedi']}")
    # 6) DEĞİŞMEZ maske: dil değişebilir değilse dokunulmaz
    D2, say = kirp(S, np.zeros_like(deg), kor, 1)
    hukum("I ters yön: değişemez hücre (epokta canlı payı) dokunulmaz", (D2 == S).all())
    # 7) girdi değişmedi
    S_kopya = S.copy(); kirp(S, deg, kor, 1)
    hukum("I girdi dizisi DEĞİŞMEDİ (kopya döner)", (S == S_kopya).all())
    # 8) ÖZELLİK SINAVI — 12 rasgele gürültülü Voronoi ızgarası (200×200, 60 etiket, deniz şeridi):
    #    hiçbir etiketin bileşen sayısı ARTMAZ · etiketsiz hücre doğmaz · tohum değişmez ·
    #    değişen her hücre ince · engel (rasgele yasak) ihlal edilmez
    from scipy.spatial import cKDTree
    from scipy import ndimage as nd
    rs = np.random.RandomState(1016)
    ihlal = {"bilesen": 0, "delik": 0, "tohum": 0, "kalin": 0, "engel": 0}
    toplam_kirp = 0
    for t in range(12):
        n = 200
        pts = rs.uniform(0, n, (60, 2))
        yy, xx = np.mgrid[0:n, 0:n]
        _, lab = cKDTree(pts).query(np.column_stack([yy.ravel() + rs.normal(0, 1.5, n * n),
                                                     xx.ravel() + rs.normal(0, 1.5, n * n)]))
        R = lab.reshape(n, n).astype(np.int32)
        R[:, :8] = -1                                  # deniz
        kr = np.zeros((n, n), bool)
        for p_ in pts.astype(int):
            kr[min(n - 1, p_[0]), min(n - 1, p_[1])] = True
        yasak = set(map(tuple, rs.randint(0, n, (400, 2)).tolist()))
        eng = lambda jc, ic, jn, in_: (jc, ic) in yasak and (jn + jc) % 2 == 0
        R2, sy = kirp(R, R >= 0, kr, 1, engel=eng)
        toplam_kirp += sy["kirpilan_hucre"]
        for v in set(R[R >= 0].tolist()):
            if _bilesen_say(R2, v) > _bilesen_say(R, v):
                ihlal["bilesen"] += 1
        ihlal["delik"] += int(((R >= 0) & (R2 < 0)).sum())
        ihlal["tohum"] += int((R2[kr] != R[kr]).sum())
        ince = _ince_maske(R, 1)
        ihlal["kalin"] += int((~ince[R2 != R]).sum())
        for r_, c_ in zip(*np.nonzero(R2 != R)):
            if (r_, c_) in yasak and not any(
                    0 <= r_ + a_ < n and 0 <= c_ + b_ < n and R2[r_ + a_, c_ + b_] == R2[r_, c_]
                    and not eng(r_, c_, r_ + a_, c_ + b_)
                    for a_ in (-1, 0, 1) for b_ in (-1, 0, 1) if (a_, b_) != (0, 0)):
                ihlal["engel"] += 1
    hukum("I ÖZELLİK (12 rasgele ızgara): eksklav/delik/tohum/kalın hücre/engel ihlali 0",
          not any(ihlal.values()) and toplam_kirp > 0, f"kırpılan {toplam_kirp:,} hücre · ihlal {ihlal}")
    return kirp


# ───────────────────────────── Z: zikzak ─────────────────────────────
def _sert_donus(cs, esik=60.0):
    n = 0
    for a, b, c in zip(cs, cs[1:], cs[2:]):
        v1 = (b[0] - a[0], b[1] - a[1]); v2 = (c[0] - b[0], c[1] - b[1])
        l1, l2 = math.hypot(*v1), math.hypot(*v2)
        if l1 < 1e-12 or l2 < 1e-12:
            continue
        cosx = max(-1.0, min(1.0, (v1[0] * v2[0] + v1[1] * v2[1]) / (l1 * l2)))
        if math.degrees(math.acos(cosx)) > esik:
            n += 1
    return n


def zz_ns(src):
    ns = taban_ns()
    ns["_kutuda"] = lambda x, y, e=1e-9: False
    ns["_ZZ_SAYAC"] = {"aday": 0, "dizi": 0, "duzlesen": 0, "red_basit": 0, "red_kesisme": 0,
                       "red_tohum": 0, "kose_once": 0, "kose_sonra": 0}
    return cek(src, ["chaikin_acik", "sikla", "_zz_tohum_supur", "_zz_yalniz_uc",
                     "_zikzak_ag_duzle"], ns)


def merdiven(x0=1.0, y0=0.0, y1=2.0, adim=0.05, genlik=1):
    cs, x, y, sag = [(x0, y0)], x0, y0, True
    while y < y1 - 1e-9:
        x = x + adim * genlik if sag else x - adim * genlik
        cs.append((round(x, 6), round(y, 6)))
        y = y + adim
        cs.append((round(x, 6), round(y, 6)))
        sag = not sag
    cs[-1] = (cs[-1][0], y1)
    return cs


def sinav_Z(src):
    print("── Z: ZİKZAK DÜZLEŞTİRME (ortak kenar ağı) ──")
    from shapely.geometry import LineString, Point, Polygon
    from shapely.strtree import STRtree
    from shapely.ops import polygonize, unary_union
    ns = zz_ns(src)
    ch, sk, duz = ns["chaikin_acik"], ns["sikla"], ns["_zikzak_ag_duzle"]
    m = merdiven()
    # ağ: ortak merdiven kenar + iki dış kenar (A solda, B sağda), düğümler (1,0) ve (1,2)
    kenar = [LineString(m), LineString([(1.0, 2.0), (0.0, 2.0), (0.0, 0.0), (1.0, 0.0)]),
             LineString([(1.0, 0.0), (2.0, 0.0), (2.0, 2.0), (1.0, 2.0)])]
    tohum = [Point(0.5, 1.0), Point(1.5, 1.0)]
    ag = STRtree(tohum)

    def kur(kayit):
        puruz = [LineString(ch(kayit[k][1], 2)) if k in kayit else kenar[k] for k in range(len(kenar))]
        return puruz

    kayit = {0: (sk(m), list(sk(m)))}
    p0 = kur(kayit)
    p1 = duz(p0, kayit, 0.05, tohum, ag, say=ns["_ZZ_SAYAC"])
    kv = lambda L: L.length / Point(L.coords[0]).distance(Point(L.coords[-1]))
    sd0 = _sert_donus(list(LineString(m).coords))
    sd1 = _sert_donus(list(LineString(kayit[0][1]).simplify(0.05).coords))
    hukum("Z merdiven düzleşti: kıvrım oranı düştü (≥1,5 → ≤1,05)", kv(p0[0]) >= 1.5 and kv(p1[0]) <= 1.05,
          f"kıvrım {kv(p0[0]):.2f} → {kv(p1[0]):.2f} · köşe {len(p0[0].coords)} → {len(p1[0].coords)} · "
          f"Chaikin ÖNCESİ >60° dönüş {sd0} → {_sert_donus(list(LineString(ch(list(p1[0].coords), 0)).coords))}")
    hukum("Z sapma ≤ tolerans + yarım hücre (Hausdorff)",
          p1[0].hausdorff_distance(p0[0]) <= 0.05 + 0.025, f"{p1[0].hausdorff_distance(p0[0]):.4f}°")
    y0 = list(polygonize(unary_union(p0)))
    y1 = list(polygonize(unary_union(p1)))
    ok = len(y1) == 2 and all(sum(1 for t in tohum if g.contains(t)) == 1 for g in y1)
    hukum("Z örtü yeniden kuruldu: 2 yüz, her tohum kendi yüzünde", ok)
    hukum("Z ters yön: toplam alan korunur (boşluk/binme 0)",
          abs(sum(g.area for g in y1) - sum(g.area for g in y0)) < 1e-9
          and abs(unary_union(y1).area - sum(g.area for g in y1)) < 1e-9)
    hukum("Z uç düğümler sabit", p1[0].coords[0] == p0[0].coords[0] and p1[0].coords[-1] == p0[0].coords[-1])
    # TERS YÖN 1: yaslanmış köşeler SABİT — merdivenin üst yarısı "nehre yaslanmış" (ham'dan farklı)
    ham = sk(m)
    yas = [((x + 0.001, y) if y > 1.0 else (x, y)) for (x, y) in ham]
    yas[0], yas[-1] = ham[0], ham[-1]
    kayit2 = {0: (ham, yas)}
    q0 = kur(kayit2)
    q1 = duz(q0, kayit2, 0.05, tohum, ag, say=dict(ns["_ZZ_SAYAC"]))
    sabit = [p for p in yas[1:-1] if p[1] > 1.0]
    on_line = all(LineString(ch(yas, 2)).distance(Point(p)) < 1e-12 for p in sabit)
    # yaslanmış kesim Chaikin sonrası AYNEN kalmalı: üst yarının Chaikin'li hâli değişmemeli
    ust_once = [c for c in q0[0].coords if c[1] > 1.06]
    ust_sonra = [c for c in q1[0].coords if c[1] > 1.06]
    hukum("Z ters yön: yaslanmış kesim DEĞİŞMEZ (yalnız yaslanmamış kesim düzleşir)",
          ust_once == ust_sonra and len(q1[0].coords) < len(q0[0].coords),
          f"üst yarı köşe {len(ust_once)}={len(ust_sonra)} · toplam {len(q0[0].coords)}→{len(q1[0].coords)}")
    # TERS YÖN 2: merdivenin cebinde tohum → düzleştirme o tohumu süpürürdü → RED
    cep = Point(1.04, 0.02)              # merdivenin ilk sağ basamağının cebi (A tarafı)
    t2 = [Point(0.5, 1.0), Point(1.5, 1.0), cep]
    say3 = dict(ns["_ZZ_SAYAC"])
    r1 = duz(p0, kayit, 0.05, t2, STRtree(t2), say=say3)
    yuz = list(polygonize(unary_union(r1)))
    ev = [g for g in yuz if g.contains(cep)]
    hukum("Z ters yön: tohum süpürecek düzleştirme yapılmaz, tohum yüzünde kalır",
          len(ev) == 1 and ev[0].contains(Point(0.5, 1.0)) and r1[0].distance(cep) > 0,
          f"tohum süpürme reddi {say3['red_tohum']} · dizi reddi {say3['dizi'] - ns['_ZZ_SAYAC']['dizi']}")
    # TERS YÖN 3: uç düğümden çıkan KOMŞU kenar merdivenin cebine girip geri dönüyor —
    # eski hatla kesişmiyor, ama düz çizgi onu KESERDİ ⇒ RED
    m3 = merdiven(x0=1.0, y0=0.0, y1=0.2)
    kom3 = LineString([(1.0, 0.0), (1.02, 0.03), (0.9, 0.04), (0.9, -0.2)])
    pp3 = [LineString(ch(m3, 2)), kom3]
    uc3 = (Point(m3[0]), Point(m3[-1]))
    hukum("Z (kurulum) komşu kenar merdiveni düğüm dışında KESMİYOR",
          ns["_zz_yalniz_uc"](pp3[0].intersection(kom3), uc3))
    say5 = dict(ns["_ZZ_SAYAC"])
    rr3 = duz(pp3, {0: (list(m3), list(m3))}, 0.2, [Point(5, 5)], STRtree([Point(5, 5)]), say=say5)
    hukum("Z ters yön: kesişme doğuracak düzleştirme REDDEDİLİR",
          rr3[0].equals(pp3[0]) and say5["red_kesisme"] > ns["_ZZ_SAYAC"]["red_kesisme"],
          f"red kesişme {say5['red_kesisme']} · sonuç kesişmesi yalnız uç: "
          f"{ns['_zz_yalniz_uc'](rr3[0].intersection(kom3), uc3)}")
    return duz


# ───────────────────────────── M: maliyet ─────────────────────────────
def sinav_M(src, kirp):
    print("── M: MALİYET (tam koşu ölçeğine çarpanla tahmin) ──")
    import numpy as np, random
    from shapely.geometry import LineString, Point
    from shapely.strtree import STRtree
    rnd = random.Random(1016)
    # Y: 4.657 tohum × 8 kenar, 50k nehir parçası yerine 3k rasgele hat
    ns = izgara_ns(src, nx=7200, ny=2900)
    hat = []
    for _ in range(3000):              # kısa parçalı "nehirler" (NE parçası ~0,2-1°)
        x, y = rnd.uniform(1, 359), rnd.uniform(1, 144)
        pts = [(x, y)]
        for _ in range(8):
            x += rnd.uniform(-0.1, 0.1); y += rnd.uniform(-0.1, 0.1); pts.append((x, y))
        hat.append(LineString(pts))
    tohum, yer = {}, []
    while len(tohum) < 4657:
        lo, la = rnd.uniform(1, 359), rnd.uniform(1, 144)
        h = int(la / 0.05) * 7200 + int(lo / 0.05)
        if h not in tohum:
            tohum[h] = [len(yer)]; yer.append({"lon": lo, "lat": la})
    t = time.time()
    d = ns["_yaka_kilidi_kenar"](tohum, yer, hat, [1] * len(hat), [], TABLO, {})
    ty = time.time() - t
    print(f"  Y (A) 4.657 tohum · {ns['_YAKA_SAYAC']['aday_kenar']:,} kenar · {len(d)} değişen: {ty:.2f} sn (gerçek koşu ≈ aynı mertebe)")
    # I: Voronoi benzeri etiket ızgarası 1000×1000 (400 etiket, gürültülü), tam ızgara 20,9 M hücre
    n = 1000
    pts = np.array([[rnd.uniform(0, n), rnd.uniform(0, n)] for _ in range(400)])
    from scipy.spatial import cKDTree
    yy, xx = np.mgrid[0:n, 0:n]
    gur = np.array([[rnd.uniform(-3, 3) for _ in range(2)]]) * 0
    _, lab = cKDTree(pts).query(np.column_stack([yy.ravel() + np.random.RandomState(1).normal(0, 1.2, n * n),
                                                 xx.ravel() + np.random.RandomState(2).normal(0, 1.2, n * n)]))
    S = lab.reshape(n, n).astype(np.int32)
    kor = np.zeros((n, n), bool)
    for p in pts.astype(int):
        kor[min(n - 1, p[0]), min(n - 1, p[1])] = True
    t = time.time()
    S2, say = kirp(S, np.ones((n, n), bool), kor, 1)
    ti = time.time() - t
    carp = 20.9e6 * 0.35 / (n * n)          # kara+karar payı ≈ %35 (KOŞU 26 logu: 6,4 M / 20,9 M erişilen kara hücresi ölçeği)
    print(f"  I taban 1 M hücre / 400 etiket: {ti:.2f} sn · kırpılan {say['kirpilan_hucre']:,} hücre "
          f"({say['kirpilan_bilesen']} çıkıntı) → tam ızgara ≈ ×{carp:.1f} = {ti * carp:.0f} sn")
    W = S[:120, :120].copy()
    et = set(W[40:80, 40:80].ravel().tolist())          # epokta yalnız payı büyüyen etiketler
    t = time.time()
    for _ in range(20):
        kirp(W, np.ones(W.shape, bool), kor[:120, :120], 1, etiketler=et)
    te = (time.time() - t) / 20
    print(f"  I epok çağrısı (120×120 pencere): {te * 1000:.1f} ms/çağrı · KOŞU 26'da epok aşaması 11dk47sn — "
          f"çağrı sayısı ~10³ ise ≈ {te * 1000:.0f} sn")
    # Z: 17.032 kenar ölçeği — 2.000 merdiven kenarı
    ns2 = zz_ns(src)
    ch, sk = ns2["chaikin_acik"], ns2["sikla"]
    kayit, puruz, toh = {}, [], []
    for k in range(2000):
        x0, y0 = (k % 50) * 2.0, (k // 50) * 3.0
        m = [(x + x0, y + y0) for x, y in merdiven(y1=0.5)]
        kayit[k] = (sk(m), list(sk(m)))
        puruz.append(LineString(ch(m, 2)))
        toh.append(Point(x0 + 0.5, y0 + 1.0))
    t = time.time()
    ns2["_zikzak_ag_duzle"](puruz, kayit, 0.05, toh, STRtree(toh), say=ns2["_ZZ_SAYAC"])
    tz = time.time() - t
    print(f"  Z 2.000 merdiven kenarı (her biri ~20 köşe, 0,5°): {tz:.2f} sn → 17.032 kenar ≈ {tz * 17032 / 2000:.0f} sn")
    return {"Y_sn": ty, "I_taban_sn": ti * carp, "I_epok_ms": te * 1000, "Z_sn": tz * 17032 / 2000}


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--repo", default=r"C:\atlas")
    p.add_argument("--taban-ref", default="kosu/26-hazirlik")
    p.add_argument("--kkb", default=r"C:\atlas-w-motor2\denetim\MOTOR-KOMSU-KUR-BOL-1016.diff")
    p.add_argument("--maliyet-yok", action="store_true")
    a = p.parse_args()
    t0 = time.time()
    src = sinav_K(a)
    if src is None:
        print("ÖLÇÜLEMEDİ: birleşik yamalı metin kurulamadı")
        return 2
    sinav_A(src)
    sinav_B(src)
    kirp = sinav_I(src)
    sinav_Z(src)
    if not a.maliyet_yok:
        sinav_M(src, kirp)
    dus = [ad for ad, ok in SONUC if not ok]
    print(f"\nSONUÇ: {len(SONUC) - len(dus)}/{len(SONUC)} geçti · {time.time() - t0:.1f} sn"
          + (f" · DÜŞEN: {dus}" if dus else ""))
    return 1 if dus else 0


if __name__ == "__main__":
    sys.exit(main())
