# -*- coding: utf-8 -*-
"""ARAC-KAYNAK-TAVAN-SINAV-1004 — `denetle.py` kaynaksızlık tavanının sınavı.

KAYNAK-TAVAN · 4 Ekim 2026 · koordinatör YILDIRIM BAYEZIT'in sevki.
Kullanım:  py denetim/ARAC-KAYNAK-TAVAN-SINAV-1004.py          (≈ 5 dk: iki GERÇEK koşu)
           py denetim/ARAC-KAYNAK-TAVAN-SINAV-1004.py --hizli  (gerçek koşular atlanır)

═══ ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE YAZILDI (denetle.py'ye tek satır eklenmeden) ═══
Kaynağı: KASA-KAYNAKSIZ-1004 (`girdi.yukle()`, taban f731b575) + koordinatörün
bağımsız doğrulaması. Bu sayılar sınavın beklediğidir; sonradan DÜZELTİLMEZ —
tutmazsa sınav ÖTER ve fark raporlanır.
    toplam nokta                   4298
    `s:` taşıyan                   4146
    kayıt düzeyinde kaynak YOK     2301   (= dönem-içi + hiçbiri)
      ↳ dönem içinde kaynak var     332
      ↳ HİÇBİR düzeyde yok         1969
Öngörülen davranış:
    ① bugünkü veride iki tavan da TUTAR → satır ✓, rapor işlevi False
    ② kaynaksız bir kayıt taklit edilince hiçbiri 1970 → ✗, işlev True,
       GERÇEK koşuda çıkış 1 ve taklit kaydın ADI "YENİ" diye basılır
    ③ yalnız dönem-içi kaynaklı taklit → dönem-içi 333 ✗, hiçbiri 1969'da
       KALIR (kovalar karışmaz); kayıt kaynaklı taklit → hiçbir şey değişmez
    ④ tavan YÜKSELTİLEMEZ: indirme işlevi sayı arttığında ve sayı düştüğü
       hâlde YENİ üye girdiğinde REDDEDER (D255)
    ⑤ tavan dosyası yoksa → ÖLÇÜLEMEDİ kovasına adıyla düşer (temiz DEĞİL)
    ⑥ sınav iz bırakmaz: git status ve tavan dosyasının sha256'sı aynı kalır
"""
import hashlib
import json
import os
import shutil
import subprocess
import sys
import tempfile

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
AR = os.path.join(KOK, "arac")
sys.path.insert(0, AR)

ONGORU = dict(toplam=4298, s_tasiyan=4146, kayit_kaynaksiz=2301,
              donem_ici=332, hicbiri=1969)
SAHTE_AD = "__SINAV_KAYNAKSIZ_1004__"
HIZLI = "--hizli" in sys.argv

sonuc = []


def soru(no, ad, kosul, ayrinti=""):
    sonuc.append((no, ad, bool(kosul), ayrinti))
    print("%s  %-3s %s%s" % ("✓" if kosul else "✗", no, ad,
                            ("  — " + ayrinti) if ayrinti else ""))


def sha(yol):
    return hashlib.sha256(open(yol, "rb").read()).hexdigest() if os.path.exists(yol) else None


def git_durum():
    # Yalnız sınavın dokunabileceği yollar: çalışma ağacı ~20 oturumla PAYLAŞILIYOR,
    # tam `git status` başkasının işini "sınavın izi" sanardı.
    return subprocess.run(["git", "status", "--porcelain", "--", "arac",
                           "denetim/KAYNAK-TAVAN.json"], cwd=KOK, capture_output=True,
                          text=True, encoding="utf-8").stdout


def sahte(donem_kaynak=False, kayit_kaynak=False):
    # Dönem bütün pencereyi kapsar: dar dönem kaydı pencere dışında SAHİPSİZ
    # bırakıyor ve Değişmez 1/1c'yi de öttürüyordu (ölçüldü) — S13 o zaman
    # çıkış 1'in sebebini kanıtlayamazdı.
    d = {"f": "1000-01-01", "t": "2100-01-01", "d": "osmanli"}
    if donem_kaynak:
        d["kaynak"] = "sınav — dönem içi"
    y = {"ad": SAHTE_AD, "lat": 39.0, "lon": 35.0, "s": [d], "_kaynak": "yerlesimler.js"}
    if kayit_kaynak:
        y["kaynak"] = "sınav — kayıt düzeyi"
    return y


import io
import contextlib

import girdi  # noqa: E402
import denetle  # noqa: E402

TAVAN = denetle.KAYNAK_TAVAN_YOL
iz_once = git_durum()
sha_once = sha(TAVAN)

Y = girdi.yukle(sessiz=True)
K = denetle.kaynaksizlik_olc(Y)
n = {k: len(v) for k, v in K.items()}
print("ölçüm:", n, "· toplam", len(Y), "\n")

# ── S1-S3: sayılar ve kovalar ──────────────────────────────────────────
soru("S1", "sayılar öngörüyü tutuyor",
     len(Y) == ONGORU["toplam"] and n["s_tasiyan"] == ONGORU["s_tasiyan"]
     and n["kayit_kaynaksiz"] == ONGORU["kayit_kaynaksiz"]
     and n["donem_ici"] == ONGORU["donem_ici"] and n["hicbiri"] == ONGORU["hicbiri"],
     "ölçülen %d/%d/%d/%d/%d" % (len(Y), n["s_tasiyan"], n["kayit_kaynaksiz"],
                                 n["donem_ici"], n["hicbiri"]))
soru("S2", "③ kovalar AYRIK ve toplamı kayıt-kaynaksız (332+1969=2301)",
     not (set(K["donem_ici"]) & set(K["hicbiri"]))
     and set(K["donem_ici"]) | set(K["hicbiri"]) == set(K["kayit_kaynaksiz"]))
_kasa = os.path.join(KOK, "denetim", "KASA-KAYNAKSIZ-1004.json")
if os.path.exists(_kasa):
    _kj = json.load(open(_kasa, encoding="utf-8"))
    _ks = {"%s|%s" % (r["dosya"], r["ad"]) for r in _kj["s_kaynaksiz"]}
    soru("S3", "BAŞKA YERDEN ölçüm: KASA'nın 2301 listesiyle küme eşitliği",
         _ks == set(K["kayit_kaynaksiz"]),
         "fark KASA−biz %d · biz−KASA %d" % (len(_ks - set(K["kayit_kaynaksiz"])),
                                            len(set(K["kayit_kaynaksiz"]) - _ks)))
else:
    soru("S3", "KASA listesi bulunamadı — çapraz ölçüm YAPILAMADI", False)


def rapor(Yx, yol=None):
    tampon = io.StringIO()
    with contextlib.redirect_stdout(tampon):
        r = denetle.kaynak_tavan_rapor(Yx, yol=yol)
    return r, tampon.getvalue()


# ── S4: ① bugünkü veri — susar ──────────────────────────────────────────
r, cikti = rapor(Y)
soru("S4", "① bugünkü veride tavan tutuyor → susuyor",
     r is False and "kaynaksız `s:` kaydı: 1969 (tavan 1969)" in cikti and "✓" in cikti.split("\n")[0],
     cikti.split("\n")[0].strip()[:110])

# ── S5: ② taklit kaynaksız kayıt — öter ─────────────────────────────────
r, cikti = rapor(Y + [sahte()])
soru("S5", "② kaynaksız taklit → 1970, ✗, ADIYLA YENİ basılıyor",
     r is True and "1970 (tavan 1969)" in cikti and "✗" in cikti.split("\n")[0]
     and SAHTE_AD in cikti, cikti.split("\n")[0].strip()[:110])

# ── S6-S7: ③ kovalar karışmıyor ─────────────────────────────────────────
r, cikti = rapor(Y + [sahte(donem_kaynak=True)])
soru("S6", "③ yalnız dönem-içi kaynaklı taklit → dönem-içi 333 ✗, hiçbiri 1969'da",
     r is True and "1969 (tavan 1969)" in cikti and "dönem-içi kaynaklı 333 (tavan 332)" in cikti,
     cikti.split("\n")[0].strip()[:110])
r, cikti = rapor(Y + [sahte(kayit_kaynak=True)])
soru("S7", "③ kayıt düzeyinde kaynaklı taklit → hiçbir kova değişmiyor (negatif kontrol)",
     r is False and "1969 (tavan 1969)" in cikti and "332 (tavan 332)" in cikti)

# ── S8-S10: ④ tavan yalnız İNER ─────────────────────────────────────────
gecici = tempfile.mkdtemp(prefix="kaynak-tavan-sinav-")
try:
    kopya = os.path.join(gecici, "KAYNAK-TAVAN.json")
    shutil.copyfile(TAVAN, kopya)
    with contextlib.redirect_stdout(io.StringIO()):
        yazildi = denetle.kaynak_tavan_indir(Y + [sahte()], yol=kopya)
    soru("S8", "④ sayı ARTINCA indirme REDDEDİYOR (tavan yükselmez)",
         yazildi is False and sha(kopya) == sha_once)

    # iyileşme taklidi: hiçbiri kovasından bir kayda kayıt düzeyinde kaynak ver
    hedef = K["hicbiri"][0]
    Yi = [dict(y, kaynak="sınav — iyileşme") if "%s|%s" % (y["_kaynak"], y["ad"]) == hedef else y
          for y in Y]
    with contextlib.redirect_stdout(io.StringIO()):
        yazildi = denetle.kaynak_tavan_indir(Yi, yol=kopya)
    _t = json.load(open(kopya, encoding="utf-8"))
    soru("S9", "④ sayı DÜŞÜNCE indiriyor (1969→1968, defterden çıkıyor)",
         yazildi is True and _t["hicbiri"] == 1968 and hedef not in _t["hicbiri_defter"]
         and _t["donem_ici"] == 332)

    # takas: biri kapandı (1968 kaldı) AMA yeni biri geldi → yine 1969, indirme yok;
    # daha sinsi: iki kapandı bir yeni geldi → sayı DÜŞTÜ ama yeni üye var → RED
    hedef2 = K["hicbiri"][1]
    Yt = [dict(y, kaynak="sınav") if "%s|%s" % (y["_kaynak"], y["ad"]) in (hedef, hedef2) else y
          for y in Y] + [sahte()]
    shutil.copyfile(TAVAN, kopya)
    with contextlib.redirect_stdout(io.StringIO()):
        yazildi = denetle.kaynak_tavan_indir(Yt, yol=kopya)
    soru("S10", "④ sayı düştü AMA yeni üye var → indirme REDDEDİYOR (takas affedilmez)",
         yazildi is False and sha(kopya) == sha_once)

    # ── S11: ⑤ tavan dosyası yok → ÖLÇÜLEMEDİ ──────────────────────────
    once = len(denetle.OLCULEMEDI_KOVA)
    r, cikti = rapor(Y, yol=os.path.join(gecici, "YOK.json"))
    soru("S11", "⑤ tavan dosyası yok → ÖLÇÜLEMEDİ kovasına adıyla düşüyor",
         r is False and len(denetle.OLCULEMEDI_KOVA) == once + 1
         and "kaynaksızlık" in denetle.OLCULEMEDI_KOVA[-1][0])
    del denetle.OLCULEMEDI_KOVA[once:]
finally:
    shutil.rmtree(gecici, ignore_errors=True)


# ── S12-S13: GERÇEK koşul — denetle.py baştan sona ──────────────────────
def gercek(taklit):
    kod = None
    sarmal = None
    if taklit:
        fd, sarmal = tempfile.mkstemp(prefix="kaynak-tavan-sarmal-", suffix=".py")
        os.write(fd, ("import sys, runpy\nsys.path.insert(0, %r)\nimport girdi\n"
                      "_y = girdi.yukle\n"
                      "def yukle(*a, **k):\n"
                      "    Y = _y(*a, **k)\n"
                      "    Y.append({'ad': %r, 'lat': 39.0, 'lon': 35.0, '_kaynak': 'yerlesimler.js',\n"
                      "              's': [{'f': '1000-01-01', 't': '2100-01-01', 'd': 'osmanli'}]})\n"
                      "    return Y\n"
                      "girdi.yukle = yukle\n"
                      "sys.argv = [%r]\n"
                      "runpy.run_path(%r, run_name='__main__')\n"
                      % (AR, SAHTE_AD, os.path.join(AR, "denetle.py"),
                         os.path.join(AR, "denetle.py"))).encode("utf-8"))
        os.close(fd)
        komut = [sys.executable, sarmal]
    else:
        komut = [sys.executable, os.path.join(AR, "denetle.py")]
    try:
        p = subprocess.run(komut, cwd=KOK, capture_output=True, text=True, encoding="utf-8",
                           errors="replace", env=dict(os.environ, PYTHONIOENCODING="utf-8"))
        kod, cikti = p.returncode, p.stdout + p.stderr
    finally:
        if sarmal and os.path.exists(sarmal):
            os.remove(sarmal)
    satir = next((s for s in cikti.splitlines() if "kaynaksız `s:` kaydı" in s), "")
    return kod, satir, cikti


if HIZLI:
    print("—   S12/S13 GERÇEK koşu ATLANDI (--hizli) — sınav TAM DEĞİL")
else:
    kod, satir, _ = gercek(False)
    soru("S12", "GERÇEK koşu, bugünkü veri: satır ✓ ve çıkış 1 DEĞİL",
         "✓" in satir and kod != 1, "çıkış %s · %s" % (kod, satir.strip()[:90]))
    kod, satir, cikti = gercek(True)
    # Çıkış 1'in sebebi BU kapı mı? Taklit kayıt başka bir kapıyı da öttürürse
    # "1" bizim satırımızı kanıtlamaz — öteki ✗ satırları da sayılır.
    oteki = [s for s in cikti.splitlines() if "✗" in s and "kaynaksız `s:` kaydı" not in s
             and s.lstrip()[:2] in ("De", "Ek", "Bo")]
    soru("S13", "GERÇEK koşu, taklit kayıt: satır ✗ ve ÇIKIŞ 1, adı basıldı, öteki kapılar sessiz",
         "✗" in satir and kod == 1 and SAHTE_AD in cikti and not oteki,
         "çıkış %s · öteki ✗ %d · %s" % (kod, len(oteki), satir.strip()[:70]))

# ── S14: ⑥ iz yok ──────────────────────────────────────────────────────
artik = [f for f in os.listdir(tempfile.gettempdir()) if f.startswith("kaynak-tavan-")]
soru("S14", "⑥ sınav iz bırakmadı (git status · tavan sha256 · geçici dosya)",
     git_durum() == iz_once and sha(TAVAN) == sha_once and not artik,
     "artık geçici: %d" % len(artik))

kalan = [s for s in sonuc if not s[2]]
print("\n%d/%d soru geçti%s" % (len(sonuc) - len(kalan), len(sonuc),
                                 " · KALDI: " + ", ".join(s[0] for s in kalan) if kalan else ""))
sys.exit(1 if kalan else 0)
