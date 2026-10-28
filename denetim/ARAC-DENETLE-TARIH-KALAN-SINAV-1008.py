# -*- coding: utf-8 -*-
"""DENETLE-TARIH-KALAN-1008 sınavı — İKİ YÖNDE.

Yamasız kol: `git show <TABAN>:arac/denetle.py` geçici dosyaya yazılır ve GERÇEKTEN
içe aktarılıp çağrılır (kopya işlev yok). Yamalı kol: bu ağacın `arac/denetle.py`si.
Her soru iki kolda da koşar; beklenti: yamasız ÇÖKER / YANLIŞ, yamalı DOĞRU,
dört haneli girdide iki kol BİREBİR (gerileme 0).

    py denetim/ARAC-DENETLE-TARIH-KALAN-SINAV-1008.py           # S1-S5 (~1 dk)
    py denetim/ARAC-DENETLE-TARIH-KALAN-SINAV-1008.py --tam     # + S6: denetle.py × 4 (~10 dk)
"""
import atexit
import contextlib
import importlib.util
import io
import os
import subprocess
import sys
from datetime import date

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac")
TABAN = os.environ.get("SINAV_TABAN", "origin/makine/umit")
sys.path.insert(0, ARAC)

def _yukle(ad, yol):
    spec = importlib.util.spec_from_file_location(ad, yol)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


_kaynak_yamasiz = subprocess.run(
    ["git", "-C", KOK, "show", f"{TABAN}:arac/denetle.py"],
    capture_output=True, check=True).stdout
# denetle.py KOK'u kendi konumundan bulur (`arac/..`) ⇒ yamasız kopya arac/ içine
# geçici adla yazılır ve çıkışta silinir (izlenmeyen dosya, git'e girmez).
_yol_yamasiz = os.path.join(ARAC, "_dtk_yamasiz_sinav.py")
with open(_yol_yamasiz, "wb") as f:
    f.write(_kaynak_yamasiz)
atexit.register(lambda: os.path.exists(_yol_yamasiz) and os.remove(_yol_yamasiz))
_yol_yamali = os.path.join(ARAC, "denetle.py")
ESKI = _yukle("denetle_yamasiz", _yol_yamasiz)
YENI = _yukle("denetle_yamali", _yol_yamali)
KAYNAK_ESKI = _kaynak_yamasiz.decode("utf-8")
KAYNAK_YENI = open(_yol_yamali, encoding="utf-8").read()
assert KAYNAK_ESKI != KAYNAK_YENI, "yamalı ile yamasız AYNI — sınav anlamsız"

sonuc = []


def soru(no, ad, kosul, ayrinti=""):
    sonuc.append((no, ad, bool(kosul), ayrinti))
    print(f"  {'✓' if kosul else '✗'} {no} {ad}" + (f" — {ayrinti}" if ayrinti else ""))


def kos(fn, *a):
    """(durum, değer): durum 'ok' ya da istisna sınıfının adı."""
    try:
        with contextlib.redirect_stdout(io.StringIO()) as tampon:
            v = fn(*a)
        return "ok", (v, tampon.getvalue())
    except Exception as e:                       # noqa: BLE001 — sınav ÇÖKÜŞÜ ölçer
        return type(e).__name__, None


# ─── S1 kapsam_disi — GERÇEK yerleşim evreniyle ────────────────────────────
print("S1 kapsam_disi (gerçek Y; Osmanlı küresi boş ⇒ FETRET yedeği dalı)")
Y = YENI.yerlesimleri_yukle()
print(f"   evren: {len(Y)} yerleşim")
for girdi_, dolgusuz in (("330-05-11", True), ("330-05", True), ("330", True),
                         ("0330-05-11", False), ("0330-05", False), ("0330", False)):
    kayit = (girdi_, "d", [], "sınav", 0)
    de, ve = kos(ESKI.kapsam_disi, Y, [kayit])
    dy, vy = kos(YENI.kapsam_disi, Y, [kayit])
    dogru = dy == "ok" and vy[0] == ([kayit], [])
    if dolgusuz:
        soru("S1", f"{girdi_!r}: yamasız ÇÖKER · yamalı ölçülemedi⇒İÇİ",
             de != "ok" and dogru, f"yamasız {de} · yamalı {dy}")
    else:
        soru("S1", f"{girdi_!r}: iki kol da doğru", de == "ok" and dogru
             and ve[0] == vy[0], f"yamasız {de} · yamalı {dy}")
# gerileme: dört haneli, küresi DOLU gün — iki kol birebir
for girdi_ in ("1453-05-29", "1526-08", "1683"):
    kayit = (girdi_, "d", [Y[0]["ad"]], "sınav", 0)
    de, ve = kos(ESKI.kapsam_disi, Y, [kayit])
    dy, vy = kos(YENI.kapsam_disi, Y, [kayit])
    soru("S1g", f"{girdi_!r}: gerileme 0 (iki kol birebir)",
         de == dy == "ok" and ve[0] == vy[0], f"{de}/{dy}")

# ─── S2 _d8_gun_once ───────────────────────────────────────────────────────
print("S2 _d8_gun_once")
for g, bek in (("330-05-11", "0330-05-10"), ("330-01-01", "0329-12-31"),
               ("0330-05-11", "0330-05-10"), ("0330-01-01", "0329-12-31"),
               ("1330-03-01", "1330-02-28"), ("1923-10-29", "1923-10-28")):
    e, y = ESKI._d8_gun_once(g), YENI._d8_gun_once(g)
    if g[0] != "0" and len(g.split("-")[0]) == 3:
        soru("S2", f"{g!r}: yamasız SESSİZ None · yamalı {bek}",
             e is None and y == bek, f"yamasız {e!r} · yamalı {y!r}")
    else:
        soru("S2", f"{g!r}: iki kol {bek}", e == y == bek, f"{e!r}/{y!r}")

# ─── S3 D8 çağıranı — karışık yazım tuzağı (5366/5437) ─────────────────────
print("S3 D8 gün kümesi — karışık yazım")
ESKI_IFADE = 'gunler = {r.get("f"), _d8_gun_once(r.get("t")) if r.get("t") else None}'
ESKI_DUSEN = 'g < (r.get("f") or "")'
soru("S3", "yamasız ifade kaynakta BİREBİR var (taklit değil)",
     ESKI_IFADE in KAYNAK_ESKI and ESKI_DUSEN in KAYNAK_ESKI)
soru("S3", "yamalı kaynakta eski ifade KALMADI", ESKI_IFADE not in KAYNAK_YENI)


def eski_gunler(r):
    """Yamasız 5366-5369'un birebir metni, yamasız modülün işleviyle."""
    _d8_gun_once = ESKI._d8_gun_once
    gunler = {r.get("f"), _d8_gun_once(r.get("t")) if r.get("t") else None}
    dusen = sorted(g for g in gunler if g and g < (r.get("f") or ""))
    olcul = sorted(g for g in gunler if g and g >= (r.get("f") or ""))
    return dusen, olcul


for r, bek in (({"f": "330-05-11", "t": "0331-01-01"}, ([], ["0330-05-11", "0330-12-31"])),
               ({"f": "330-05-11", "t": "331-01-01"}, ([], ["0330-05-11", "0330-12-31"])),
               ({"f": "0330-05-11", "t": "331-01-01"}, ([], ["0330-05-11", "0330-12-31"])),
               ({"f": "330-05-11", "t": "330-06-01"}, ([], ["0330-05-11", "0330-05-31"])),
               ({"f": "1330-05-11", "t": "1331-01-01"}, ([], ["1330-05-11", "1330-12-31"])),
               ({"f": "1330-05-11", "t": "1330-05-11"}, (["1330-05-10"], ["1330-05-11"]))):
    e = eski_gunler(r)
    y = YENI._d8_gunler(r.get("f"), r.get("t"))
    dort = all(len((r[k] or "").split("-")[0]) == 4 for k in ("f", "t"))
    if dort:
        soru("S3g", f"{r}: gerileme 0", e == y == bek, f"{e} / {y}")
    else:
        soru("S3", f"{r}: yamalı {bek}", y == bek and e != bek,
             f"yamasız {e} · yamalı {y}")

# ─── S4 zincir_kaynagi_rapor (BAYAT KOPYA, eski 6080) ──────────────────────
print("S4 zincir_kaynagi_rapor gün toplamı")
for b, s, dolgusuz in (("330-05-11", "331-05-11", True), ("0330-05-11", "0331-05-11", False),
                       ("1330-05-11", "1331-05-11", False)):
    bek = (date(int(s[:-6]), int(s[-5:-3]), int(s[-2:]))
           - date(int(b[:-6]), int(b[-5:-3]), int(b[-2:]))).days
    R = {"beyanli": 1, "parca": 1, "bozuk": [], "zincirleme": [],
         "bayat": [("x", "y", b, s, "tur", [(b, s, ("A", None), ("B", None))])]}
    de, ve = kos(ESKI.zincir_kaynagi_rapor, dict(R))
    dy, vy = kos(YENI.zincir_kaynagi_rapor, dict(R))
    satir_ok = dy == "ok" and f"{bek} gün ayrı" in vy[1]
    if dolgusuz:
        soru("S4", f"{b}→{s}: yamasız ÇÖKER · yamalı {bek} gün", de != "ok" and satir_ok,
             f"yamasız {de} · yamalı {dy}")
    else:
        soru("S4", f"{b}→{s}: iki kol {bek} gün, çıktı birebir",
             de == "ok" and satir_ok and ve[1] == vy[1], f"{de}/{dy}")

# ─── S5 4s sıralaması — iki PYTHONHASHSEED, gerçek anahtar metniyle ─────────
print("S5 4s eşitlik kırıcı (alt süreç, tohum 0..19)")
ESKI_ANAHTAR = "for _k, _n in sorted(_k3.items(), key=lambda x: -x[1])[:8]:"
YENI_ANAHTAR = "for _k, _n in sorted(_k3.items(), key=lambda x: (-x[1], x[0]))[:8]:"
soru("S5", "yamasız anahtar kaynakta birebir · yamalıda yeni anahtar",
     ESKI_ANAHTAR in KAYNAK_ESKI and YENI_ANAHTAR in KAYNAK_YENI
     and ESKI_ANAHTAR not in KAYNAK_YENI)
# 4s'nin bugünkü gerçek kesişimi (ölçülen çıktı: meysur 3 · katalan 1 · adal 1) —
# ad listesi KÜME üzerinden sayılır, tıpkı denetle.py'deki gibi.
PROG = r'''
import sys
saran = {("a%d" % i, "meysur", "f", "t") for i in range(3)} | {("b", "katalan", "f", "t"), ("c", "adal", "f", "t")}
_k3 = {}
for _a, _k, _f, _t in saran:
    _k3[_k] = _k3.get(_k, 0) + 1
SATIR
    print(_k, _n)
'''
# Tohum taraması: bu sentetik kümede hangi tohumun sırayı çevirdiği önceden
# bilinemez (gerçek koşuda 3 ve 5 çevirdi) ⇒ 0..19 taranır.
TOHUMLAR = [str(i) for i in range(20)]
cikti = {}
for kol, anahtar in (("yamasız", ESKI_ANAHTAR), ("yamalı", YENI_ANAHTAR)):
    kod = PROG.replace("SATIR", anahtar)
    for tohum in TOHUMLAR:
        cikti[(kol, tohum)] = subprocess.run(
            [sys.executable, "-c", kod], capture_output=True, text=True,
            env={**os.environ, "PYTHONHASHSEED": tohum}).stdout
farkli_e = {cikti[("yamasız", t)] for t in TOHUMLAR}
farkli_y = {cikti[("yamalı", t)] for t in TOHUMLAR}
soru("S5", "yamasız: 20 tohumda ≥2 ayrı sıra (nondeterminizm GERÇEK)",
     len(farkli_e) >= 2, " | ".join(sorted(x.replace("\n", " ").strip() for x in farkli_e)))
soru("S5", "yamalı: 20 tohumda TEK sıra (-n, ad)",
     farkli_y == {"meysur 3\nadal 1\nkatalan 1\n"},
     " | ".join(sorted(x.replace("\n", " ").strip() for x in farkli_y)))

# ─── S6 (--tam) GERÇEK denetle.py × 4 ───────────────────────────────────────
if "--tam" in sys.argv:
    print("S6 GERÇEK denetle.py — iki kol × tohum 0/3")
    C = {}
    for kol, yol in (("yamasız", _yol_yamasiz), ("yamalı", _yol_yamali)):
        for tohum in ("0", "3"):
            p = subprocess.run([sys.executable, yol], cwd=KOK, capture_output=True,
                               env={**os.environ, "PYTHONHASHSEED": tohum,
                                    "PYTHONIOENCODING": "utf-8"})
            C[(kol, tohum)] = (p.returncode, p.stdout.decode("utf-8", "replace"))
            print(f"   {kol} tohum {tohum}: çıkış {p.returncode} · "
                  f"{len(C[(kol, tohum)][1].splitlines())} satır")
    soru("S6", "yamasız tohum 0 ≠ 3 (4s sırası oynar)", C[("yamasız", "0")] != C[("yamasız", "3")])
    soru("S6", "yamalı tohum 0 == 3 (birebir)", C[("yamalı", "0")] == C[("yamalı", "3")])
    soru("S6", "çıkış kodu yamasız == yamalı == 2",
         C[("yamasız", "0")][0] == C[("yamalı", "0")][0] == 2)
    e = [s for s in C[("yamasız", "0")][1].splitlines()]
    y = [s for s in C[("yamalı", "0")][1].splitlines()]
    fark = [(a, b) for a, b in zip(e, y) if a != b]
    soru("S6", "değerler birebir (fark yalnız 4s ad sırası olabilir)",
         len(e) == len(y) and all(("katalan" in a or "adal" in a) for a, _ in fark),
         f"{len(fark)} satır farklı")

bas = sum(1 for s in sonuc if s[2])
print(f"\nSONUÇ: {bas}/{len(sonuc)} geçti")
sys.exit(0 if bas == len(sonuc) else 1)
