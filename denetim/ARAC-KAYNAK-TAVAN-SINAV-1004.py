# -*- coding: utf-8 -*-
"""ARAC-KAYNAK-TAVAN-SINAV-1004 — `denetle.py` kaynaksızlık tavanının sınavı.

KAYNAK-TAVAN · 4 Ekim 2026 · koordinatör YILDIRIM BAYEZIT'in sevki.
Kullanım:  py denetim/ARAC-KAYNAK-TAVAN-SINAV-1004.py          (≈ 7 dk: üç GERÇEK koşu)
           py denetim/ARAC-KAYNAK-TAVAN-SINAV-1004.py --hizli  (gerçek koşular atlanır)

═══ SÜRÜM 2 — KUTUP HATASI (koordinatör, canlı veride, Akçakale `11bcae71`) ═══
Sürüm 1 (14/14 geçti) iki kovaya da "aşarsa ihlal" tavanı koymuştu. Bir kayda
dönem-içi kaynak yazılınca hiçbiri 1969→1968, dönem-içi 332→333 — TEK
düzeltmenin iki yüzü — ve kapı İYİLEŞMEYİ ihlal saydı. 14 sorunun hiçbiri
"iyileşince kapı susuyor mu" diye SORMUYORDU: iki yön (temiz · kirli) vardı,
ÜÇÜNCÜ YÖN (İYİLEŞME) yoktu. ⇒ S15-S19 + S20 (GERÇEK koşu) bu yüzden var.
Ölçüt sayıdan ÜYELİĞE çevrildi (denetle.py blok yorumu).

═══ ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE YAZILDI ═══
Sürüm 1 öngörüsü (taban f731b575, KASA + koordinatör): 4298 · 4146 · 2301 ·
332 · 1969 — TUTTU (sürüm 1 S1). Taban `11bcae71`de koordinatör Akçakale'ye
dönem-içi kaynaksızlık beyanı yazdı ve değişimi ÖNCEDEN yazdı: 1969→1968,
332→333; kendi ölçümü tuttu. Sürüm 2 öngörüsü bu tabandır:
    toplam 4298 · `s:` 4146 · kayıt-kaynaksız 2301 · dönem-içi 333 · hiçbiri 1968
Öngörülen davranış (tavan dosyası 1969/332 defteriyle, yani Akçakale ÖNCESİ):
    ① bugünkü veri → ✓, "1968 (tavan 1969)", "2301 (tavan 2301)", TAVAN GEVŞEK
       uyarısı, YENİ satırı YOK, rapor False
    ② kaynaksız taklit → ✗, ADIYLA "KAYNAKSIZ YENİ"; GERÇEK koşuda çıkış 1
    ③ dönem-yalnız taklit → ✗ "DÖNEM-YALNIZ YENİ", hiçbiri sayısı değişmez;
       kayıt kaynaklı taklit → hiçbir şey değişmez
    ④ indirme: yeni üye varsa (sayı düşse bile) RED; iyileşmede İNER
    ⑤ İYİLEŞME (üç yol) → kapı SUSAR: hiçbiri→dönem-içi (iki sayı TERS yönde) ·
       dönem-içi→tam (dönem-içi DÜŞER — "taban" önerisi burada kırılırdı) ·
       hiçbiri→tam. GERİLEME (dönem kaynağı silinir) → öter, ADIYLA
    ⑥ tavan dosyası yok → ÖLÇÜLEMEDİ · ⑦ sınav iz bırakmaz
"""
import contextlib
import hashlib
import io
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
              donem_ici=333, hicbiri=1968)
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


def anahtar(y):
    return "%s|%s" % (y["_kaynak"], y["ad"])


def donustur(Y, hedef, kip):
    """Kayıt kopyası üzerinde düzeltme/gerileme taklidi — veri dosyasına dokunmaz.
    kip: 'donem' (ilk döneme kaynak yaz) · 'kayit' (kayda kaynak yaz) ·
         'donem_sil' (dönem kaynaklarını sil)"""
    out = []
    for y in Y:
        if anahtar(y) == hedef:
            y = dict(y)
            if kip == "kayit":
                y["kaynak"] = "sınav — iyileşme"
            else:
                s = [dict(p) for p in y["s"]]
                if kip == "donem":
                    s[0]["kaynak"] = "sınav — iyileşme"
                else:
                    for p in s:
                        p.pop("kaynak", None)
                y["s"] = s
        out.append(y)
    return out


import girdi  # noqa: E402
import denetle  # noqa: E402

TAVAN = denetle.KAYNAK_TAVAN_YOL
iz_once = git_durum()
sha_once = sha(TAVAN)
T0 = json.load(open(TAVAN, encoding="utf-8"))
TH = len(T0["hicbiri_defter"])
TK = len(set(T0["hicbiri_defter"]) | set(T0["donem_ici_defter"]))

Y = girdi.yukle(sessiz=True)
K = denetle.kaynaksizlik_olc(Y)
n = {k: len(v) for k, v in K.items()}
print("ölçüm:", n, "· toplam", len(Y), "· tavan dosyası hiçbiri %d / kayıt-kaynaksız %d\n"
      % (TH, TK))

# ── S1-S3: sayılar ve kovalar ──────────────────────────────────────────
soru("S1", "sayılar öngörüyü tutuyor (taban 11bcae71)",
     len(Y) == ONGORU["toplam"] and n["s_tasiyan"] == ONGORU["s_tasiyan"]
     and n["kayit_kaynaksiz"] == ONGORU["kayit_kaynaksiz"]
     and n["donem_ici"] == ONGORU["donem_ici"] and n["hicbiri"] == ONGORU["hicbiri"],
     "ölçülen %d/%d/%d/%d/%d" % (len(Y), n["s_tasiyan"], n["kayit_kaynaksiz"],
                                 n["donem_ici"], n["hicbiri"]))
soru("S2", "kovalar AYRIK ve toplamı kayıt-kaynaksız",
     not (set(K["donem_ici"]) & set(K["hicbiri"]))
     and set(K["donem_ici"]) | set(K["hicbiri"]) == set(K["kayit_kaynaksiz"]))
_kasa = os.path.join(KOK, "denetim", "KASA-KAYNAKSIZ-1004.json")
if os.path.exists(_kasa):
    _kj = json.load(open(_kasa, encoding="utf-8"))
    _ks = {"%s|%s" % (r["dosya"], r["ad"]) for r in _kj["s_kaynaksiz"]}
    soru("S3", "BAŞKA YERDEN ölçüm: KASA'nın kayıt-kaynaksız listesiyle küme eşitliği",
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


def bas(c):
    return c.split("\n")[0].strip()[:120]


# ── S4: ① bugünkü veri — susar ──────────────────────────────────────────
r, c = rapor(Y)
soru("S4", "① bugünkü veri (Akçakale iyileşmesi İÇİNDE) → susuyor, YENİ yok, gevşek uyarısı",
     r is False and "✓" in bas(c) and "kaynaksız `s:` kaydı: %d (tavan %d)" % (n["hicbiri"], TH) in c
     and "YENİ" not in c and ("GEVŞEK" in c) == (n["hicbiri"] < TH or n["kayit_kaynaksiz"] < TK),
     bas(c))

# ── S5: ② taklit kaynaksız kayıt — öter ─────────────────────────────────
r, c = rapor(Y + [sahte()])
soru("S5", "② kaynaksız taklit → ✗, ADIYLA 'KAYNAKSIZ YENİ'",
     r is True and "✗" in bas(c) and "KAYNAKSIZ YENİ  yerlesimler.js|" + SAHTE_AD in c, bas(c))

# ── S6-S7: ③ ─────────────────────────────────────────────────────────────
r, c = rapor(Y + [sahte(donem_kaynak=True)])
soru("S6", "③ dönem-yalnız taklit → ✗ 'DÖNEM-YALNIZ YENİ', hiçbiri sayısı değişmez",
     r is True and "DÖNEM-YALNIZ YENİ  yerlesimler.js|" + SAHTE_AD in c
     and "kaynaksız `s:` kaydı: %d " % n["hicbiri"] in c and "KAYNAKSIZ YENİ" not in c, bas(c))
r, c = rapor(Y + [sahte(kayit_kaynak=True)])
soru("S7", "③ kayıt kaynaklı taklit → hiçbir şey değişmiyor (negatif kontrol)",
     r is False and "YENİ" not in c)

# ── S15-S19: ⑤ İYİLEŞME ve GERİLEME — üçüncü yön ────────────────────────
h0 = K["hicbiri"][0]
d0 = K["donem_ici"][0]
Yi = donustur(Y, h0, "donem")
Ki = denetle.kaynaksizlik_olc(Yi)
r, c = rapor(Yi)
soru("S15", "⑤ hiçbiri→dönem-içi düzeltmesi: hiçbiri −1, dönem-içi +1 (TERS yön) ve kapı SUSUYOR",
     len(Ki["hicbiri"]) == n["hicbiri"] - 1 and len(Ki["donem_ici"]) == n["donem_ici"] + 1
     and r is False and "YENİ" not in c and "GERİLEME" not in c, "%s · %s" % (h0, bas(c)))
Yi2 = donustur(Y, d0, "kayit")
Ki2 = denetle.kaynaksizlik_olc(Yi2)
r, c = rapor(Yi2)
soru("S16", "⑤ dönem-içi→tam düzeltmesi: dönem-içi DÜŞÜYOR ve kapı SUSUYOR ('taban' burada kırılırdı)",
     len(Ki2["donem_ici"]) == n["donem_ici"] - 1 and r is False and "YENİ" not in c,
     "%s · %s" % (d0, bas(c)))
r, c = rapor(donustur(Y, h0, "kayit"))
soru("S17", "⑤ hiçbiri→tam düzeltmesi → kapı SUSUYOR", r is False and "YENİ" not in c)
Yg = donustur(Y, d0, "donem_sil")
r, c = rapor(Yg)
soru("S18", "⑤ GERİLEME: dönem kaynağı SİLİNEN kayıt → ✗, ADIYLA 'KAYNAKSIZ YENİ'",
     r is True and ("KAYNAKSIZ YENİ  " + d0) in c, bas(c))
# Net sıfır takas raporda da öter: bir kayıt düzeldi, bir yeni kaynaksız geldi.
r, c = rapor(donustur(Y, h0, "kayit") + [sahte()])
soru("S19", "⑤ net-sıfır TAKAS (bir düzelme + bir yeni) → sayı tavanı susardı, üyelik ÖTÜYOR",
     r is True and "kaynaksız `s:` kaydı: %d " % n["hicbiri"] in c and SAHTE_AD in c, bas(c))

# ── S8-S11: ④ indirme + ⑥ ÖLÇÜLEMEDİ ─────────────────────────────────────
gecici = tempfile.mkdtemp(prefix="kaynak-tavan-sinav-")
try:
    kopya = os.path.join(gecici, "KAYNAK-TAVAN.json")
    shutil.copyfile(TAVAN, kopya)
    with contextlib.redirect_stdout(io.StringIO()):
        yazildi = denetle.kaynak_tavan_indir(Y + [sahte()], yol=kopya)
    soru("S8", "④ yeni kaynaksız varken indirme REDDEDİYOR (tavan yükselmez)",
         yazildi is False and sha(kopya) == sha_once)

    with contextlib.redirect_stdout(io.StringIO()):
        yazildi = denetle.kaynak_tavan_indir(Yi, yol=kopya)
    _t = json.load(open(kopya, encoding="utf-8"))
    _u = set(_t["hicbiri_defter"]) | set(_t["donem_ici_defter"])
    soru("S9", "④ iyileşmede İNİYOR: hiçbiri defteri daraldı, birleşim BÜYÜMEDİ",
         yazildi is True and len(_t["hicbiri_defter"]) == n["hicbiri"] - 1
         and h0 not in _t["hicbiri_defter"] and h0 in _t["donem_ici_defter"]
         and len(_u) <= TK and _t["hicbiri"] == len(_t["hicbiri_defter"]))

    hedef2 = K["hicbiri"][1]
    Yt = donustur(donustur(Y, h0, "kayit"), hedef2, "kayit") + [sahte()]
    shutil.copyfile(TAVAN, kopya)
    with contextlib.redirect_stdout(io.StringIO()):
        yazildi = denetle.kaynak_tavan_indir(Yt, yol=kopya)
    soru("S10", "④ sayı düştü AMA yeni üye var → indirme REDDEDİYOR (takas affedilmez)",
         yazildi is False and sha(kopya) == sha_once)

    once = len(denetle.OLCULEMEDI_KOVA)
    r, c = rapor(Y, yol=os.path.join(gecici, "YOK.json"))
    soru("S11", "⑥ tavan dosyası yok → ÖLÇÜLEMEDİ kovasına adıyla düşüyor",
         r is False and len(denetle.OLCULEMEDI_KOVA) == once + 1
         and "kaynaksızlık" in denetle.OLCULEMEDI_KOVA[-1][0])
    del denetle.OLCULEMEDI_KOVA[once:]
finally:
    shutil.rmtree(gecici, ignore_errors=True)


# ── S12-S13-S20: GERÇEK koşul — denetle.py baştan sona ──────────────────
YAMA = {
    "taklit": ("    Y.append({'ad': %r, 'lat': 39.0, 'lon': 35.0, '_kaynak': 'yerlesimler.js',\n"
               "              's': [{'f': '1000-01-01', 't': '2100-01-01', 'd': 'osmanli'}]})\n"
               % SAHTE_AD),
    # GERÇEK bir düzeltme: hiçbiri kovasındaki bir kaydın ilk dönemine kaynak yazılır.
    "iyilesme": ("    for y in Y:\n"
                 "        if '%%s|%%s' %% (y['_kaynak'], y['ad']) == %r:\n"
                 "            y['s'] = [dict(p) for p in y['s']]\n"
                 "            y['s'][0]['kaynak'] = 'sınav — iyileşme'\n" % h0),
}


def gercek(kip):
    sarmal = None
    if kip:
        fd, sarmal = tempfile.mkstemp(prefix="kaynak-tavan-sarmal-", suffix=".py")
        os.write(fd, ("import sys, runpy\nsys.path.insert(0, %r)\nimport girdi\n"
                      "_y = girdi.yukle\n"
                      "def yukle(*a, **k):\n"
                      "    Y = _y(*a, **k)\n" % AR
                      + YAMA[kip]
                      + "    return Y\n"
                      "girdi.yukle = yukle\n"
                      "sys.argv = [%r]\n"
                      "runpy.run_path(%r, run_name='__main__')\n"
                      % (os.path.join(AR, "denetle.py"), os.path.join(AR, "denetle.py"))
                      ).encode("utf-8"))
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
    oteki = [s for s in cikti.splitlines() if "✗" in s and "kaynaksız `s:` kaydı" not in s
             and s.lstrip()[:2] in ("De", "Ek", "Bo")]
    return kod, satir, cikti, oteki


if HIZLI:
    print("—   S12/S13/S20 GERÇEK koşu ATLANDI (--hizli) — sınav TAM DEĞİL")
else:
    kod, satir, _, _ = gercek(None)
    soru("S12", "GERÇEK koşu, bugünkü veri: satır ✓ ve çıkış 1 DEĞİL",
         "✓" in satir and kod != 1, "çıkış %s · %s" % (kod, satir.strip()[:90]))
    # Çıkış 1'in sebebi BU kapı mı? Taklit kayıt başka bir kapıyı da öttürürse
    # "1" bizim satırımızı kanıtlamaz — öteki ✗ satırları da sayılır.
    kod, satir, cikti, oteki = gercek("taklit")
    soru("S13", "GERÇEK koşu, taklit kayıt: satır ✗ ve ÇIKIŞ 1, adı basıldı, öteki kapılar sessiz",
         "✗" in satir and kod == 1 and SAHTE_AD in cikti and not oteki,
         "çıkış %s · öteki ✗ %d · %s" % (kod, len(oteki), satir.strip()[:70]))
    kod, satir, cikti, oteki = gercek("iyilesme")
    soru("S20", "GERÇEK koşu, İYİLEŞME (%s'e dönem kaynağı): satır ✓, çıkış 1 DEĞİL, YENİ yok"
         % h0.split("|")[1][:20],
         "✓" in satir and kod != 1 and "YENİ  " not in cikti.split("kaynaksız `s:` kaydı")[1][:2000],
         "çıkış %s · %s" % (kod, satir.strip()[:90]))

# ── S14: ⑦ iz yok ──────────────────────────────────────────────────────
artik = [f for f in os.listdir(tempfile.gettempdir()) if f.startswith("kaynak-tavan-")]
soru("S14", "⑦ sınav iz bırakmadı (git status · tavan sha256 · geçici dosya)",
     git_durum() == iz_once and sha(TAVAN) == sha_once and not artik,
     "artık geçici: %d" % len(artik))

kalan = [s for s in sonuc if not s[2]]
print("\n%d/%d soru geçti%s" % (len(sonuc) - len(kalan), len(sonuc),
                                 " · KALDI: " + ", ".join(s[0] for s in kalan) if kalan else ""))
sys.exit(1 if kalan else 0)
