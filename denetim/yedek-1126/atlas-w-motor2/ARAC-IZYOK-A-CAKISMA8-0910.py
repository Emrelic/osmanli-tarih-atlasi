# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — INMEYEN KAYITLAR NEREDE TOPLANIYOR? (SALT OKUR)

Triyaj sirasinda INMEDI/KISMEN cikan kayitlarin ADLARI TEKRAR ETTI.
`data/yer_yama_doguasya.js` ust yazisi ise su sekiz adi "8 CAKISMA
LISTESI" diye aniyor:
    Bagdat · Baskale · Halepce · Kasr-i Sirin · Kutaisi · Yergogu ·
    Caldiran · Sehrizor

ONGORU (olcumden ONCE yazildi, D022):
    Inmeyen kayitlarin YARISINDAN COGU bu sekiz ada dusuyorsa,
    "UNUTULMUS" tanisi YANLIS demektir — dosyalar unutulmadi, BLOKE.
    %50'nin altinda kalirsa tani ayakta kalir.
"""
import json, os, sys, io, importlib.util, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

_spec = importlib.util.spec_from_file_location(
    "n", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
norm = _m.norm

SEKIZ = ["Bağdat", "Başkale", "Halepçe", "Kasr-ı Şîrîn", "Kutaisi",
         "Yergöğü", "Çaldıran", "Şehrizor"]
SEKIZ_N = set(norm(a) for a in SEKIZ)


def sekizde_mi(ad):
    """🔴 ILK SURUM TAM ESITLIK ARIYORDU VE «Yergogu (Giurgiu)»yu KACIRDI.

    Yamalar adi parantezli varyantla yaziyor ("Yergöğü (Giurgiu)"),
    liste ise duz ("Yergöğü"). Tam esitlik ikisini ayri sayiyor.
    ⇒ ONEK esligi kullaniliyor. Ve bu, bu oturumda ad ekseninin
      UCUNCU vakasi (once "Meric"→"Limerick", sonra `bos:` yorum
      eslesmesi) — hepsi KENDI aletimde (D064).
    """
    n = norm(ad)
    return any(n == s or n.startswith(s + " ") or n.startswith(s + "(")
               for s in SEKIZ_N)

triyaj = json.load(open(sys.argv[1], encoding="utf-8"))

toplam = 0
sekizde = 0
adlar = collections.Counter()
disarda = collections.Counter()
for dosya, d in triyaj.items():
    for orn in d.get("ornek", []):
        ad = orn.split("[")[0]
        hal = orn.split("[")[1].split(":")[0] if "[" in orn else "?"
        if hal not in ("INMEDI", "KISMEN"):
            continue
        toplam += 1
        adlar[ad] += 1
        if sekizde_mi(ad):
            sekizde += 1
        else:
            disarda[ad] += 1

print("⚠️ EVREN: aletin dosya basina EN COK 6 ornek basmasi yuzunden bu")
print("   sayim TAM DEGIL — ust sinir. Yon icin yeterli, oran icin degil.")
print()
print("INMEDI/KISMEN ornegi          : %d" % toplam)
print("8 CAKISMA LISTESINE dusen     : %d  (%%%.0f)"
      % (sekizde, 100.0 * sekizde / toplam if toplam else 0))
print()
print("--- en cok tekrar eden adlar ---")
for a, n in adlar.most_common(14):
    im = "🔴8" if sekizde_mi(a) else "  "
    print("  %s %-26s %d dosyada" % (im, a, n))
print()
print("--- 8 LISTESI DISINDA kalanlar ---")
for a, n in disarda.most_common(20):
    print("     %-30s %d" % (a, n))
