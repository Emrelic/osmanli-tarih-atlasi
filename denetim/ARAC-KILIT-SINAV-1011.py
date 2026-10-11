# -*- coding: utf-8 -*-
"""`arac/kilit.py` SINAVI — İKİ YÖNDE, geçici dizinde, gerçek tahtaya DOKUNMAZ.

ÖNGÖRÜ ÖLÇÜMDEN ÖNCE YAZILIR (§11). Bu sınavın her maddesi bir ÇİFTTİR:
olması gerekeni ve olMAMAsı gerekeni ayrı ayrı sorar. Tek yön sınanan bir
kapı, boş kümede her öngörüyü doğrular.

EVREN: `KILIT_DURUM` geçici bir dosyaya, `KILIT_TAHTA=0`. ⇒ gerçek
`oturumlar/kilit.json` ve gerçek tahta ETKİLENMEZ. (Gerekçe: yan etkisi olan
sınav koşturulmaz, koşturulmayan sınav yoktur.)

🔴 EN ÖNEMLİ MADDE 12: BOZUK DURUM DOSYASI ⇒ ÇIKIŞ 2, 0 DEĞİL.
"Ölçülemedi ≠ serbest". Ters yön iki oturumu aynı dosyaya sokar; bu yön
yalnız bekletir. Bir kilit aletinin EN TEHLİKELİ kusuru, bilmediğinde
"serbest" demesidir.
"""
import io
import os
import subprocess
import sys
import tempfile

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALET = os.path.join(KOK, "arac", "kilit.py")
gecti = kirik = 0
satir = []


def kos(*argv, **kw):
    orт = dict(os.environ)
    orт["KILIT_DURUM"] = kw.get("durum", DURUM)
    orт["KILIT_TAHTA"] = "0"
    r = subprocess.run([sys.executable, ALET] + list(argv),
                       capture_output=True, env=orт)
    return r.returncode, (r.stdout + r.stderr).decode("utf-8", "replace")


def madde(no, ad, kod, bekle_kod, metin="", bekle_metin=None, olmamali=None):
    global gecti, kirik
    ok = (kod == bekle_kod)
    if bekle_metin and bekle_metin not in metin:
        ok = False
    if olmamali and olmamali in metin:
        ok = False
    if ok:
        gecti += 1
        print("  ✓ %-3s %s" % (no, ad))
    else:
        kirik += 1
        print("  🔴 %-3s %s" % (no, ad))
        print("        çıkış: %s (beklenen %s)" % (kod, bekle_kod))
        if bekle_metin and bekle_metin not in metin:
            print("        metinde YOK: %r" % bekle_metin)
        if olmamali and olmamali in metin:
            print("        metinde OLMAMALIYDI: %r" % olmamali)
        satir.append("%s %s" % (no, ad))


tmp = tempfile.mkdtemp(prefix="kilit-sinav-")
DURUM = os.path.join(tmp, "kilit.json")
D = "data/deneme.js"

print("ARAC-KILIT-SINAV-1011 — evren: %s" % tmp)
print()
print("A. BAYRAK VE KULLANIM KAPISI (bu gecenin dersi: yutma YASAK)")
k, m = kos("al", D, "--kim", "A", "--limit", "3")
madde("1a", "TANIMSIZ bayrak REDDEDİLİR", k, 3, m, "TANIMSIZ BAYRAK")
k, m = kos("oku")
madde("1b", "tanımsız KOMUT reddedilir", k, 3, m, "komut gerekli")
k, m = kos("al", D)
madde("1c", "al --kim olmadan reddedilir", k, 3, m)
k, m = kos("zorla-birak", D)
madde("1d", "zorla-birak GEREKÇESİZ reddedilir", k, 3, m, "gerekçesiz")

print()
print("B. AL — REZERVASYON")
k, m = kos("kimde", D)
madde("2a", "başlangıçta SERBEST (çıkış 0)", k, 0, m, "SERBEST")
k, m = kos("al", D, "--kim", "OTURUM-A")
madde("2b", "ilk alan KİLİDİ ALIR (çıkış 0)", k, 0, m, "KİLİT SENDE")
k, m = kos("al", D, "--kim", "OTURUM-A")
madde("2c", "aynı sahip TEKRAR alabilir (çıkış 0)", k, 0, m, "ZATEN SENDE")
k, m = kos("kimde", D)
madde("2d", "kimde artık MEŞGUL (çıkış 1)", k, 1, m, "OTURUM-A")

print()
print("C. SIRA — Emre'nin istediği davranış")
k, m = kos("al", D, "--kim", "OTURUM-B")
madde("3a", "ikinci oturum SIRAYA girer (çıkış 1)", k, 1, m,
      "KULLANIMDA, KULLANIM BİTENE KADAR BEKLİYORUM")
madde("3b", "sıradaki yerini SÖYLER", k, 1, m, "yerim: 1 / 1")
madde("3c", "🔴 ikinci oturum kilidi ALMADI", k, 1, m, olmamali="KİLİT SENDE")
k, m = kos("al", D, "--kim", "OTURUM-C")
madde("4a", "üçüncü oturum sıra 2 olur", k, 1, m, "yerim: 2 / 2")
k, m = kos("al", D, "--kim", "OTURUM-B")
madde("4b", "aynı oturum MÜKERRER sıraya girmez", k, 1, m, "yerim: 1 / 2")

print()
print("D. BIRAK — DEVİR")
k, m = kos("birak", D, "--kim", "OTURUM-C")
madde("5a", "sahibi olmayan SIRADAN ÇIKAR (çıkış 0)", k, 0, m, "SIRADAN ÇIKTIN")
k, m = kos("birak", D, "--kim", "YABANCI")
madde("5b", "🔴 ilgisiz oturum BIRAKAMAZ (çıkış 3)", k, 3, m, "SENDE DEĞİL")
k, m = kos("birak", D, "--kim", "OTURUM-A")
madde("6a", "sahip bırakır (çıkış 0)", k, 0, m, "BIRAKTIN")
madde("6b", "SIRADAKİ ALIR ve ADIYLA bildirilir", k, 0, m, "SIRADAKİ ALDI: OTURUM-B")
madde("6c", "bildirim kalemi basılır", k, 0, m, "BİLDİRİM")
k, m = kos("kimde", D)
madde("6d", "kilit artık OTURUM-B'de", k, 1, m, "OTURUM-B")
k, m = kos("birak", D, "--kim", "OTURUM-B")
madde("7a", "sıra boşken bırakma SERBEST bırakır", k, 0, m, "SERBEST")
k, m = kos("kimde", D)
madde("7b", "ve gerçekten serbest (çıkış 0)", k, 0, m, "SERBEST")

print()
print("E. YOL NORMALLEŞTİRME — aynı dosya, farklı yazım")
kos("al", "data/Deneme2.js", "--kim", "OTURUM-A")
k, m = kos("al", r"data\deneme2.js", "--kim", "OTURUM-B")
madde("8a", "ters ayraç + büyük harf AYNI kilit sayılır", k, 1, m, "KULLANIMDA")
k, m = kos("al", "data/baska.js", "--kim", "OTURUM-B")
madde("8b", "🔴 BAŞKA dosya ayrı kilittir (çıkış 0)", k, 0, m, "KİLİT SENDE")

print()
print("F. BIRAK-HEPSI — oturum biterken")
k, m = kos("birak-hepsi", "--kim", "OTURUM-B")
madde("9a", "oturumun bütün kilitleri bırakılır", k, 0, m, "baska.js")
k, m = kos("birak-hepsi", "--kim", "HIC-KILIDI-OLMAYAN")
madde("9b", "kilidi olmayanda da çıkış 0", k, 0, m, "kilit yok")

print()
print("G. ZORLA-BIRAK — gerekçeli, kayıtlı")
k, m = kos("zorla-birak", "data/Deneme2.js", "--gerekce", "sinav")
madde("10a", "gerekçeyle zorla bırakma çalışır", k, 0, m, "ZORLA BIRAKILDI")
madde("10b", "gerekçe ÇIKTIDA görünür", k, 0, m, "gerekçe   : sinav")
import json
with io.open(DURUM, encoding="utf-8") as f:
    d = json.load(f)
madde("10c", "zorla geçmişi KAYDA geçer", 0 if d.get("zorla_gecmis") else 9, 0)

print()
print("H. 🔴 ÖLÇÜLEMEDİ — EN ÖNEMLİ MADDE")
with io.open(DURUM, "w", encoding="utf-8") as f:
    f.write("{bu gecerli json DEGIL")
k, m = kos("kimde", D)
madde("11a", "BOZUK durum ⇒ çıkış 2 (0 DEĞİL)", k, 2, m, "ÖLÇÜLEMEDİ")
madde("11b", "🔴 bozukken 'SERBEST' DEMEZ", k, 2, m, olmamali="SERBEST —")
k, m = kos("al", D, "--kim", "OTURUM-Z")
madde("11c", "bozukken AL da çıkış 2 verir", k, 2, m, "ÖLÇÜLEMEDİ")
madde("11d", "🔴 bozukken kilit VERMEZ", k, 2, m, olmamali="KİLİT SENDE")
with io.open(DURUM, "w", encoding="utf-8") as f:
    f.write('{"surum": 999, "kilitler": {}}')
k, m = kos("kimde", D)
madde("12a", "YANLIŞ SÜRÜM ⇒ çıkış 2", k, 2, m, "ÖLÇÜLEMEDİ")

print()
print("I. SINAV KAPILARI GÜRÜLTÜLÜ MÜ (sessiz kaçış kapısı YASAK)")
os.remove(DURUM)
k, m = kos("durum")
madde("13a", "KILIT_DURUM kullanıldığını SÖYLER", k, 0, m, "GERÇEK kilit dosyası DEĞİL")
madde("13b", "KILIT_TAHTA=0 olduğunu SÖYLER", k, 0, m, "tahtaya YAZILMAYACAK")
madde("13c", "durum MAKİNE SINIRINI beyan eder", k, 0, m, "YALNIZ BU MAKİNE")

print()
print("J. NÖBET TEMİZLİĞİ")
madde("14a", "nöbet dosyası işlemden sonra KALMAZ",
      0 if not os.path.exists(DURUM + ".nobet") else 9, 0)

print()
print("=" * 62)
print("GEÇTİ %d · KIRIK %d" % (gecti, kirik))
if satir:
    print("KIRIKLAR:")
    for s in satir:
        print("  · %s" % s)
print("ÇIKIŞ KODU: %d" % (1 if kirik else 0))
sys.exit(1 if kirik else 0)
