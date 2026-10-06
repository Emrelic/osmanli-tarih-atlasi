# -*- coding: utf-8 -*-
"""Değişmez 7 `isg:` okuması — İKİ YÖNLÜ sınav (UMIT-W8-D7ISG-1006, 6 Ekim 2026).

Koşu:  py denetim/ARAC-D7-ISG-SINAV-1006.py      (çıkış 0 = geçti, 1 = kaldı)

YÖN 1 — isg:'li yapay kayıt DOĞRU sınıflanıyor:
  5x10 ızgara (1° aralık ⇒ yalnız 4 komşu ≤150 km). A gövdesi sütun 0-3, sütun 4
  A ama 1600-1800 B işgali altında (duvar), sütun 5-9 C; N (sütun 5, orta satır)
  1650'de A'ya geçiyor. B gövdesi uzakta (enlem 40).
    · N 1650 A: ANA listede ada (A'ya tek bağı işgal altındaki duvar) — eski kod
      görmez, yeni kod görür
    · duvarın 5 kaydı 1600 `isg:B` işgal cebi olarak `isg_kova`da, ANA listede YOK
    · duvarın bir kaydının A dönemi 1700'de, işgal altında başlıyor ⇒
      `egemen-isgal-altinda` = 1
YÖN 2 — isg:'siz hâlde eski davranış BİREBİR:
  origin/main'deki `degismez7` ile yeni olan aynı veride karşılaştırılır:
    · yapay ızgaranın isg:'siz kopyası
    · bütün gerçek veri, `isg:` alanları SİLİNEREK
  ihlal listesi ve muaf sayacı birebir eşit olmalı.
"""
import sys, os, io, copy, contextlib, subprocess, tempfile, importlib.util

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi
import denetle

# Eski (origin/main) degismez7 — ayrı modül olarak yüklenir
_eski = subprocess.run(["git", "show", "origin/main:arac/denetle.py"], cwd=KOK,
                       capture_output=True).stdout
# ⚠️ `arac/` İÇİNE yazılır: denetle.py yollarını kendi konumundan kurar
# (uret_petek.py maske sabitleri vb.); yüklenince hemen silinir.
_fd, _yol = tempfile.mkstemp(prefix="_d7eski_", suffix=".py", dir=os.path.join(KOK, "arac"))
os.write(_fd, _eski)
os.close(_fd)
try:
    _sp = importlib.util.spec_from_file_location("denetle_eski", _yol)
    denetle_eski = importlib.util.module_from_spec(_sp)
    _sp.loader.exec_module(denetle_eski)
finally:
    os.remove(_yol)

KALDI = []


def bak(ad, kosul, ayrinti=""):
    print(f"  {'✓' if kosul else '✗'} {ad}" + (f" — {ayrinti}" if ayrinti else ""))
    if not kosul:
        KALDI.append(ad)


def yeni(Y):
    k = {}
    with contextlib.redirect_stdout(io.StringIO()):
        ih, mu = denetle.degismez7(Y, isg_kova=k)
    return ih, mu, k


def eski(Y):
    with contextlib.redirect_stdout(io.StringIO()):
        return denetle_eski.degismez7(Y)


def yapay():
    Y = []
    for r in range(5):
        for c in range(10):
            y = {"ad": f"K{r}{c}", "lat": float(r), "lon": float(c), "d": [], "v": []}
            if c <= 3:
                y["s"] = [{"f": "1500-01-01", "t": "1900-01-01", "d": "A"}]
            elif c == 4:
                y["s"] = [{"f": "1500-01-01", "t": "1900-01-01", "d": "A"}]
                y["isg"] = [{"f": "1600-01-01", "t": "1800-01-01", "d": "B"}]
                if r == 0:
                    y["s"] = [{"f": "1500-01-01", "t": "1700-01-01", "d": "C"},
                              {"f": "1700-01-01", "t": "1900-01-01", "d": "A"}]
            elif c == 5 and r == 2:
                y["ad"] = "N"
                y["s"] = [{"f": "1500-01-01", "t": "1650-01-01", "d": "C"},
                          {"f": "1650-01-01", "t": "1900-01-01", "d": "A"}]
            else:
                y["s"] = [{"f": "1500-01-01", "t": "1900-01-01", "d": "C"}]
            Y.append(y)
    for r in range(2):
        for c in range(5):
            Y.append({"ad": f"B{r}{c}", "lat": 40.0 + r, "lon": float(c), "d": [], "v": [],
                      "s": [{"f": "1500-01-01", "t": "1900-01-01", "d": "B"}]})
    return Y


def anahtar(ih):
    return sorted((r["gun"], r["yerlesim"], r["sahip"]) for r in ih)


print("YÖN 1 — isg:'li yapay kayıt doğru sınıflanıyor")
Y = yapay()
ih, mu, k = yeni(Y)
ana = anahtar(ih)
cep = anahtar(k["ihlal"])
bak("N 1650 A ana listede ada", ("1650-01-01", "N", "A") in ana, str(ana))
bak("eski kod N'yi GÖRMÜYOR (körlük gerçekti)",
    ("1650-01-01", "N", "A") not in anahtar(eski(Y)[0]))
bak("duvarın 5 kaydı isg:B cebi", cep == sorted(("1600-01-01", f"K{r}4", "isg:B")
                                              for r in range(5)), str(cep))
bak("işgal kaydı ana listeye SIZMIYOR", not any(s.startswith("isg:") for _, _, s in ana))
bak("egemen-isgal-altinda = 1 (K04 A 1700)", k["egemen-isgal-altinda"] == 1,
    str(k["egemen-isgal-altinda"]))

print("YÖN 2 — isg:'siz hâlde eski davranış birebir")
Y2 = yapay()
for y in Y2:
    y.pop("isg", None)
ih_y, mu_y, k_y = yeni(Y2)
ih_e, mu_e = eski(Y2)
bak("yapay ızgara: ihlal + muaf birebir", ih_y == ih_e and mu_y == mu_e)
bak("yapay ızgara: isg kovası boş", not k_y["ihlal"] and k_y["egemen-isgal-altinda"] == 0)
with contextlib.redirect_stderr(io.StringIO()):
    G = girdi.yukle(sessiz=True)
n_isg = sum(1 for y in G if y.get("isg"))
for y in G:
    y.pop("isg", None)
ih_y, mu_y, k_y = yeni(G)
ih_e, mu_e = eski(copy.deepcopy(G))
bak(f"gerçek veri isg:'siz ({len(G)} kayıt, {n_isg}'inden isg silindi): birebir",
    ih_y == ih_e and mu_y == mu_e, f"yeni {len(ih_y)} · eski {len(ih_e)}")
bak("gerçek veri isg:'siz: isg kovası boş",
    not k_y["ihlal"] and k_y["egemen-isgal-altinda"] == 0)

print("SONUÇ:", "GEÇTİ" if not KALDI else f"KALDI ({len(KALDI)}): " + " · ".join(KALDI))
sys.exit(1 if KALDI else 0)
