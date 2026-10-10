# -*- coding: utf-8 -*-
"""SINAV — TAHTA-ACIL-I-1010: yazıcı (`tahta.py yaz`) ile bekçi
(`tahta_bekci.py`) aciliyete AYNI hükmü veriyor mu?

🔴 GERÇEK TAHTAYA DOKUNMAZ. İki aracın GERÇEK işlevleri süreç içinde
çağrılır; yan etkili kenarlar (git, kilit, kayıt, tazeleme, nabız,
kaynak darboğazı dosyası, defter) sınav içinde değiştirilir:
  tahta.py       `yaz()` — `_git_yarim/_tazele/_yukle/_Kilit/_kaydet/_git`
                 yerine bellek içi taklit; VERI/GORUNUM geçici dizinde.
                 Dönüş kodu GERÇEK `yaz()`ın dönüşüdür (2 = RED).
  tahta_bekci.py `main()` — `--tahta <geçici> --kaynak yerel --defter-yok
                 --tur 1 --ara 0`; `_oku_kaynak` ilk turda boş, ikinci
                 turda tek HERKES mesajı döner; `_bas` (UYANDIRAN stdout)
                 yakalanır. Filtre kodu GERÇEKTİR.

Kök: `--kok <ağaç>` ya da bu dosyanın `..`'su (sinav_isirma ağaca kopyalar).
Çıkış: 0 hepsi geçti · 1 kalan var.

SORULAR
  R*  dayanaksız ACİL/DURDURUCU varyantı HERKES'e ⇒ yazıcı RED (2)
  K*  dayanaklı varyant ⇒ yazıcı KABUL (0)          [süreklilik]
  T*  yazıcının hükmü == bekçinin hükmü (dayanak istendi ⇔ uyandırdı)
  B*  bilgi amaçlı HERKES ⇒ yazıcı dayanaksız kabul, bekçi UYANDIRMAZ
  N1  ortak normalleştirici == denetim/ARAC-NORMAL-0903.py `norm` (derlem)
"""
import contextlib
import importlib.util
import io
import json
import os
import sys
import tempfile
import types

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = (sys.argv[sys.argv.index("--kok") + 1] if "--kok" in sys.argv
       else os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ARAC = os.path.join(KOK, "arac")
sys.path.insert(0, ARAC)

# Kaynak darboğazı kapısı bekçide GERÇEK `oturumlar/KAYNAK-DURUM.json`u okur;
# sınavda o dosyanın hâli ölçümü etkilemesin.
sys.modules["kaynak_durum"] = types.SimpleNamespace(
    bekci_yasak_mi=lambda ad: (False, ""))

GECICI = tempfile.mkdtemp(prefix="tahta-acil-i-")
import tahta      # noqa: E402
import tahta_bekci  # noqa: E402

tahta.VERI = os.path.join(GECICI, "tahta.json")
tahta.GORUNUM = os.path.join(GECICI, "TAHTA.md")
_YAKALANAN = []


class _SahteKilit(object):
    def __init__(self, *a, **k):
        pass

    def __enter__(self):
        return self

    def __exit__(self, *a):
        return False


tahta._git_yarim = lambda *a, **k: None
tahta._tazele = lambda *a, **k: None
tahta._yukle = lambda *a, **k: []
tahta._Kilit = _SahteKilit
tahta._kaydet = lambda kayit: _YAKALANAN.append(list(kayit))
tahta._git = lambda *a, **k: "ULASTI"


def yaz(aciliyet, dayanak=""):
    """GERÇEK `tahta.yaz` — (dönüş kodu, yazılan kayıt | None)."""
    del _YAKALANAN[:]
    with contextlib.redirect_stdout(io.StringIO()):
        kod = tahta.yaz({"kim": "SINAV-YAZAN", "kime": "HERKES",
                         "mesaj": "sınav mesajı", "aciliyet": aciliyet,
                         "dayanak": dayanak})
    kayit = _YAKALANAN[-1][-1] if _YAKALANAN else None
    return kod, kayit


TAHTA_DOSYA = os.path.join(GECICI, "bekci-tahta.json")
with open(TAHTA_DOSYA, "w", encoding="utf-8") as f:
    json.dump([], f)
tahta_bekci._nabiz_yaz = lambda *a, **k: None


def bekci_uyandirir(kayit):
    """GERÇEK `tahta_bekci.main` filtresi — bu kayıt `_bas` ile basıldı mı?"""
    m = dict(kayit)
    m.setdefault("no", "M-9001")
    m.setdefault("kimden", "SINAV-YAZAN")
    m["kime"] = "HERKES"
    m.setdefault("mesaj", "sınav mesajı")
    cagri = {"n": 0}

    def _oku():
        cagri["n"] += 1
        return [] if cagri["n"] == 1 else [m]

    basilan = []
    tahta_bekci._oku_kaynak = _oku
    tahta_bekci._bas = lambda s: basilan.append(s)
    with contextlib.redirect_stderr(io.StringIO()):
        tahta_bekci.main(["--kim", "SINAV-DINLEYEN", "--kaynak", "yerel",
                          "--tahta", TAHTA_DOSYA, "--defter-yok",
                          "--tur", "1", "--ara", "0"])
    return any(m["no"] in s for s in basilan)


SONUC = []


def soru(no, ok, aciklama):
    SONUC.append(bool(ok))
    print("%s %s %s" % ("✓" if ok else "✗", no, aciklama))


ACIL_VARYANT = [
    ("R1", "ACİL"), ("R2", "ACIL"), ("R3", "acil"), ("R4", "Acil"),
    ("R5", "acİl"), ("R6", "ACİL:"), ("R7", "🔴 ACİL"),
    ("R8", "DURDURUCU"), ("R9", "durdurucu"), ("R10", "🔴🔴 DURDURUCU"),
]
BILGI_VARYANT = [
    ("B1", "NORMAL"), ("B2", ""), ("B3", "DÜŞÜK"), ("B4", "ACİLEN"),
    ("B5", "aciliyet"),
]

print("SINAV — TAHTA-ACIL-I-1010 · kök %s" % KOK)
print("  aciliyet.py: %s" % ("VAR (yamalı ağaç)"
      if os.path.exists(os.path.join(ARAC, "aciliyet.py")) else "YOK (yamasız ağaç)"))
print()

for no, v in ACIL_VARYANT:
    kod, _ = yaz(v)
    soru(no, kod == 2, "dayanaksız HERKES aciliyet=%r ⇒ RED(2) bekleniyor, "
         "alınan %s" % (v, kod))

for no, v in ACIL_VARYANT:
    kod, kayit = yaz(v, dayanak="sınav: bütün hattı durduran ayrıştırıcı kilidi")
    soru("K" + no[1:], kod == 0 and kayit is not None,
         "dayanaklı HERKES aciliyet=%r ⇒ KABUL(0), alınan %s · kayıttaki "
         "aciliyet %r" % (v, kod, kayit and kayit.get("aciliyet")))

# T — tutarlılık: yazıcı dayanak İSTEDİ ⇔ bekçi UYANDIRDI.
#   Yazıcı dayanaksız kabul ettiyse, o KAYIT bekçiye verilir (gerçek akış).
#   Reddettiyse dayanaklı yazımın kaydı verilir.
for no, v in ACIL_VARYANT + BILGI_VARYANT:
    kod, kayit = yaz(v)
    istedi = (kod == 2)
    if istedi:
        _, kayit = yaz(v, dayanak="sınav")
    uyandi = bekci_uyandirir(kayit) if kayit else None
    soru("T" + no, uyandi is not None and istedi == uyandi,
         "aciliyet=%r · yazıcı dayanak %s · bekçi %s · kayıt %r"
         % (v, "İSTEDİ" if istedi else "istemedi",
            {True: "UYANDIRDI", False: "uyandırmadı", None: "ÖLÇÜLEMEDİ"}[uyandi],
            kayit and kayit.get("aciliyet")))

for no, v in BILGI_VARYANT:
    kod, kayit = yaz(v)
    uyandi = bekci_uyandirir(kayit) if kayit else None
    soru(no, kod == 0 and uyandi is False,
         "bilgi HERKES aciliyet=%r ⇒ dayanaksız KABUL + KİMSEYİ uyandırmaz · "
         "yazıcı %s · bekçi %s" % (v, kod, uyandi))

# N1 — ortak normalleştirici, kaynağıyla AYNI mı?
_ref = os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py")
try:
    import aciliyet as _ac
    sp = importlib.util.spec_from_file_location("_norm0903", _ref)
    ref = importlib.util.module_from_spec(sp)
    sp.loader.exec_module(ref)
    derlem = ["İnyupiak", "Üsküp", "Eğirdir", "Iğdır", "İstanbul", "ACİL",
              "acİl", "🔴 ACİL", "DURDURUCU", "Karahisâr-ı Sâhib", "ı İ i I",
              "", "  ACİL:  ", "Şanlıurfa", "Çanakkale", "’—“"]
    fark = [s for s in derlem if _ac.norm(s) != ref.norm(s)]
    soru("N1", not fark, "ortak normalleştirici ARAC-NORMAL-0903 eşdeğerliği: "
         "arac/aciliyet.norm (%d dizgi, fark %d%s)" % (len(derlem), len(fark),
                                     (": %r" % fark) if fark else ""))
except ImportError:
    soru("N1", False, "ortak normalleştirici ARAC-NORMAL-0903 eşdeğerliği: "
         "arac/aciliyet.py YOK — bulunamadı")

g = sum(SONUC)
n = len(SONUC)
print()
print("SONUÇ: %d soru · %d geçti · %d kaldı" % (n, g, n - g))
sys.exit(0 if g == n else 1)
