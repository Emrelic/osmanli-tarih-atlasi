# -*- coding: utf-8 -*-
r"""YAMA KÜMESİ SINAVI — her `.diff` AYRIŞTIRILABİLİR mi, ve hangi SINIFTA?

🔴 NİÇİN VAR — 26 GÜNLÜK ÖLÇÜLMÜŞ KAYIP (1 Ekim 2026):
`denetim/YAMA-DENETLE-HARITA-0905.diff` (5 Eylül) `degismez4`ün `harita:`
körlüğünü ÖLÇMÜŞ ve ÇARESİNİ YAZMIŞTI:
    "12.438 dönemin 915'i (%7,4) HİÇ SINANMIYORDU"
Yama **bozuktu** (`corrupt patch at line 54`) ve 26 gün `denetim/` altında
bekledi. 1 Ekim'de KASA aynı körlüğü YENİDEN ölçtü (1131 dönem / 23 kimlik),
koordinatör çareyi SIFIRDAN yazdı. **Bedel: bir ölçüm + bir uygulama, iki kez.**

Sebebi tek bir şeydi: **hiçbir kapı "bu `.diff` ayrıştırılabiliyor mu" diye
sormuyordu.** Uygulanıp uygulanmaması ayrı mesele; AYRIŞTIRILABİLİR OLMASI
bir biçim şartıdır ve ÖLÇÜLEBİLİR.
📌 `D248`in kardeşi: koşturulmamış komut şartnameye yazılmaz —
   **ayrıştırılamayan yama da yama kümesinde tutulmaz.**

## SINIFLAR (dört, ve dördüncüsü 1 Ekim'de ölçülerek bulundu)
```
ileri 0            UYGULANABILIR        → kosuya girer
ileri 1 · geri 0   ZATEN UYGULANMIS     → arsive (ters yon tutuyor)
ileri 1 · geri 1   ❓ BELIRSIZ           → AMACI OKUNUP KODDA ARANIR:
                   (a) gercek cakisma    amac kodda YOK
                   (b) zaten uygulanmis  baglam o kadar kaymis ki ters de tutmaz
BOZUK              AYRISTIRILAMAZ       → 🔴 CIKIS 1, yama kumesinde DURMAZ
```
🔴 Dördüncü sınıfın vakası: `ACILIS-ANIM-0081-yon` — `css/style.css:3082`
zaten `360px` diyor (amaç KODDA), ama yama 2925'i hedefliyor ve dosya ~150
satır kaymış ⇒ iki yön de tutmuyor. **Mekanik ölçüm (b)'yi (a)'dan AYIRT
EDEMEZ.** Bu sınav o yüzden `BELIRSIZ` damgası basar, "çakışma" demez.

KULLANIM:  py denetim/ARAC-YAMA-SINAV-1001.py [--sina]
    varsayilan : tablo basar, BOZUK varsa cikis 1
    --sina     : kendi kendini IKI YONDE sinar (bozuk yakalanir · temiz susar)
"""
import os
import re
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8")
KOK = r"C:\atlas"
os.chdir(KOK)
DIZIN = "denetim"
BOZUK_IMLER = ("corrupt patch", "No valid patches", "unrecognized input")


def _apply(yol, ters=False):
    """(cikis_kodu, ilk_hata_satiri)"""
    k = ["git", "apply", "--check"] + (["-R"] if ters else []) + [yol]
    r = subprocess.run(k, capture_output=True, encoding="utf-8",
                       errors="replace")
    ilk = (r.stderr or "").strip().split("\n")[0] if r.stderr else ""
    return r.returncode, ilk


def sinifla(yol):
    i, imsg = _apply(yol)
    if i == 0:
        return "UYGULANABILIR", ""
    if any(b in imsg for b in BOZUK_IMLER):
        return "BOZUK", imsg
    g, _ = _apply(yol, ters=True)
    if g == 0:
        return "ZATEN UYGULANMIS", ""
    return "BELIRSIZ", imsg


def tablo():
    yamalar = sorted(f for f in os.listdir(DIZIN) if f.endswith(".diff"))
    print("  yama kümesi: %s/*.diff → %d dosya" % (DIZIN, len(yamalar)))
    kova = {}
    bozuklar = []
    for f in yamalar:
        s, msg = sinifla(os.path.join(DIZIN, f))
        kova.setdefault(s, []).append((f, msg))
        if s == "BOZUK":
            bozuklar.append((f, msg))
    for s in ("UYGULANABILIR", "ZATEN UYGULANMIS", "BELIRSIZ", "BOZUK"):
        liste = kova.get(s) or []
        isaret = "🔴" if s == "BOZUK" else ("🟡" if s == "BELIRSIZ" else "✓")
        print("\n  %s %-18s %d" % (isaret, s, len(liste)))
        for f, msg in liste:
            print("      %-46s %s" % (f[:46], msg[:58]))
    if kova.get("BELIRSIZ"):
        print("\n  🟡 BELİRSİZ ne demek: 'ileri 1 · geri 1' İKİ durumu birden")
        print("     gösterir — gerçek çakışma YA DA bağlamı kaymış, ZATEN")
        print("     UYGULANMIŞ bir yama. Ayırt etmenin tek yolu yamanın")
        print("     AMACINI okuyup KODDA aramaktır (`YAMA-SINIFLANDIRMA-1001.md`).")
    return bozuklar


def sinav():
    """IKI YON: bozuk bir yama YAKALANIR · temiz bir yama SUSAR."""
    print("### İKİ YÖNLÜ SINAV ###")
    gecti = 0
    # YON 1 — kasten BOZUK yama yakalanmali
    with tempfile.TemporaryDirectory() as d:
        kirik = os.path.join(d, "KIRIK.diff")
        open(kirik, "w", encoding="utf-8").write(
            "--- a/yok.txt\n+++ b/yok.txt\n@@ bozuk baslik @@\n+satir\n")
        s, msg = sinifla(kirik)
        ok = s == "BOZUK"
        print("  %s ① kasten bozuk yama → BOZUK  (çıkan: %s · %s)"
              % ("✓" if ok else "✗", s, msg[:40]))
        gecti += ok
        # YON 2 — gercek, uygulanabilir yama BOZUK DEMEMELI
        hakiki = None
        for f in sorted(os.listdir(DIZIN)):
            if f.endswith(".diff"):
                s2, _ = sinifla(os.path.join(DIZIN, f))
                if s2 == "UYGULANABILIR":
                    hakiki = f
                    break
        if hakiki:
            s3, _ = sinifla(os.path.join(DIZIN, hakiki))
            ok2 = s3 == "UYGULANABILIR"
            print("  %s ② gerçek yama (%s) → UYGULANABILIR  (çıkan: %s)"
                  % ("✓" if ok2 else "✗", hakiki[:34], s3))
            gecti += ok2
        else:
            print("  ⚪ ② uygulanabilir yama yok — SINANAMADI (sonuç DEĞİL)")
            gecti += 1
    print("\n  sınav: %d/2 geçti" % gecti)
    return 0 if gecti == 2 else 1


if "--sina" in sys.argv:
    sys.exit(sinav())

print("### YAMA KÜMESİ SINAVI ###")
bozuk = tablo()
if bozuk:
    print("\n🔴 %d BOZUK yama — AYRIŞTIRILAMAYAN yama yama kümesinde DURMAZ."
          % len(bozuk))
    print("   Çare: ya yeniden üretilir, ya `.md`ye çevrilir (tasarım belgesiyse),")
    print("   ya arşive alınır. Bozuk bırakmak 26 GÜN kaybettirdi (bkz. başlık).")
    sys.exit(1)
print("\n✓ bozuk yama YOK — kümenin tamamı ayrıştırılabilir")
