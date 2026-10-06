# -*- coding: utf-8 -*-
"""Kaynaksızlık ölçümünün `isg:` kovası — İKİ YÖNLÜ sınav (UMIT-W8-DALGA3-1006).

Koşu:  py denetim/ARAC-KAYNAKSIZLIK-ISG-SINAV-1006.py      (çıkış 0 = geçti, 1 = kaldı)

YÖN 1 — kapı doğru ÖTER / SUSAR (yapay veri, geçici tavan dosyası):
  · kaynaksız `isg:` dönemi, `isg_defter`de yok           → ÖTER (ihlal True)
  · aynı dönem `kaynak:` taşıyor                            → susar
  · dönem kaynaksız ama KAYIT düzeyinde `kaynak:` var       → susar
  · `isg_defter` hiç yok                                    → susar, yalnız BİLGİ basar
  · `--kaynak-tavan-indir`: yeni `isg:` üyesi varsa REDDEDER; iyileşmede `isg_defter` DARALIR
  · `s:` kovaları `isg:` kaynağından ETKİLENMEZ (ayrı kova)
YÖN 2 — `isg:`'siz hâlde eski davranış BİREBİR:
  origin/main'deki `kaynak_tavan_rapor` ile yenisi aynı veride: stdout + dönüş değeri eşit
    · yapay veri (isg'siz, isg_defter'siz tavan)
    · bütün gerçek veri `isg:` alanları silinerek, gerçek `denetim/KAYNAK-TAVAN.json` ile
"""
import sys, os, io, json, copy, contextlib, subprocess, tempfile, importlib.util

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi
import denetle

# Eski (origin/main) denetle — `arac/` İÇİNE yazılır (yollarını kendi konumundan kurar), hemen silinir
_eski = subprocess.run(["git", "show", "origin/main:arac/denetle.py"], cwd=KOK,
                       capture_output=True).stdout
_fd, _yol = tempfile.mkstemp(prefix="_kieski_", suffix=".py", dir=os.path.join(KOK, "arac"))
os.write(_fd, _eski)
os.close(_fd)
try:
    _sp = importlib.util.spec_from_file_location("denetle_eski", _yol)
    denetle_eski = importlib.util.module_from_spec(_sp)
    _sp.loader.exec_module(denetle_eski)
finally:
    os.remove(_yol)

KALDI = []
GECICI = tempfile.mkdtemp()


def bak(ad, kosul, ayrinti=""):
    print(f"  {'✓' if kosul else '✗'} {ad}" + (f" — {ayrinti}" if ayrinti else ""))
    if not kosul:
        KALDI.append(ad)


def tavan(**ek):
    T = {"hicbiri": 0, "donem_ici": 1, "hicbiri_defter": [],
         "donem_ici_defter": ["t.js|R"]}
    T.update(ek)
    yol = os.path.join(GECICI, "T%d.json" % len(os.listdir(GECICI)))
    json.dump(T, open(yol, "w", encoding="utf-8"), ensure_ascii=False)
    return yol


def kayit(isg_kaynak=None, kayit_kaynak=None, isg=True):
    y = {"ad": "R", "_kaynak": "t.js", "lat": 0.0, "lon": 0.0, "d": [], "v": [],
         "s": [{"f": "1800-01-01", "t": "1900-01-01", "d": "A", "kaynak": "s-kaynagi"}]}
    if isg:
        p = {"f": "1850-01-01", "t": "1860-01-01", "d": "B"}
        if isg_kaynak:
            p["kaynak"] = isg_kaynak
        y["isg"] = [p]
    if kayit_kaynak:
        y["kaynak"] = kayit_kaynak
    return [y]


def rapor(mod, Y, yol):
    b = io.StringIO()
    with contextlib.redirect_stdout(b):
        r = mod.kaynak_tavan_rapor(Y, yol=yol)
    return r, b.getvalue()


ANAHTAR = "t.js|R|1850-01-01|B"
print("YÖN 1 — kapı doğru öter / susar")
r, o = rapor(denetle, kayit(), tavan(isg_defter=[]))
bak("kaynaksız isg, defterde yok → ÖTER", r is True and ANAHTAR in o, o.strip().splitlines()[-1])
r, o = rapor(denetle, kayit(), tavan(isg_defter=[ANAHTAR]))
bak("kaynaksız isg, defterde VAR → susar", r is False)
r, o = rapor(denetle, kayit(isg_kaynak="TDV x"), tavan(isg_defter=[]))
bak("kaynaklı isg → susar", r is False)
r, o = rapor(denetle, kayit(kayit_kaynak="TDV y"), tavan(isg_defter=[]))
bak("kayıt düzeyinde kaynak → susar", r is False)
r, o = rapor(denetle, kayit(), tavan())
bak("isg_defter yok → susar, BİLGİ basar", r is False and "tavan YOK" in o)
K1 = denetle.kaynaksizlik_olc(kayit(isg_kaynak="TDV x"))
K2 = denetle.kaynaksizlik_olc(kayit())
bak("s: kovaları isg kaynağından etkilenmez", K1 == K2, str({k: len(v) for k, v in K1.items()}))

y = tavan(isg_defter=[])
with contextlib.redirect_stdout(io.StringIO()):
    sonuc = denetle.kaynak_tavan_indir(kayit(), yol=y)
bak("indir: yeni isg üyesi → REDDEDER", sonuc is False and json.load(open(y, encoding="utf-8"))["isg_defter"] == [])
y = tavan(isg_defter=[ANAHTAR, "t.js|R|1700-01-01|C"])
with contextlib.redirect_stdout(io.StringIO()):
    sonuc = denetle.kaynak_tavan_indir(kayit(), yol=y)
bak("indir: iyileşmede isg_defter DARALIR", sonuc is True and
    json.load(open(y, encoding="utf-8"))["isg_defter"] == [ANAHTAR])

print("YÖN 2 — isg:'siz hâlde eski davranış birebir")
Ys = kayit(isg=False)
ry, oy = rapor(denetle, Ys, tavan())
re_, oe = rapor(denetle_eski, Ys, tavan())
bak("yapay: stdout + dönüş birebir", (ry, oy) == (re_, oe))
with contextlib.redirect_stderr(io.StringIO()):
    G = girdi.yukle(sessiz=True)
n_isg = sum(1 for y in G if y.get("isg"))
for y in G:
    y.pop("isg", None)
ry, oy = rapor(denetle, G, None)
re_, oe = rapor(denetle_eski, copy.deepcopy(G), None)
bak(f"gerçek veri isg:'siz ({len(G)} kayıt, {n_isg}'inden isg silindi): birebir",
    (ry, oy) == (re_, oe), oy.strip().splitlines()[0][:90])

print("SONUÇ:", "GEÇTİ" if not KALDI else f"KALDI ({len(KALDI)}): " + " · ".join(KALDI))
sys.exit(1 if KALDI else 0)
