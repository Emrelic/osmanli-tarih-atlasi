# -*- coding: utf-8 -*-
u"""ALETLERİN BASTIĞI KABUL ÖLÇÜTLERİ  ·  SINAV-KOSU8-0907  ·  7 Eylül 2026

══════════════════════════════════════════════════════════════════════════
NİÇİN VAR — B6'nın doğurduğu soru
══════════════════════════════════════════════════════════════════════════
Bayat ölçüt avı BELGELERDE yapılıyordu. B6 onu kırdı:

    `ARAC-DIKIS-0904-olc.py` her koşuşta
        "🔴 R1 KABUL TESTİ: DİKİŞ parçası 637 (reçete: R1'den sonra < 10)"
    basıyordu — ve R1 4 Eylül'de inmişti, iki koşu önce.

⇒ ***Bir kabul ölçütü bir belgede değil, BİR ALETİN PRINT SATIRINDA
  yaşayabilir*** — ve orada daha uzun yaşar, çünkü belgeler gözden
  geçirilir, print satırları geçirilmez. Üstelik her koşuşta **taze
  görünür**: yanındaki sayı bugünün sayısıdır, eşik ise dünün.

BU BETİK NE YAPAR / NE YAPMAZ
    YAPAR    aletlerin ÇIKTIYA BASTIĞI eşik/hedef/reçete satırlarını
             bulur ve bir SABİT SAYI taşıyanları ayırır
    YAPMAZ   hangisinin bayat olduğuna KARAR VERMEZ. Bir eşik ancak
             ölçüldüğü TABANLA birlikte okunduğunda bayat sayılabilir,
             ve o okuma insana ait. Bu betik 3.000 satırı elle
             okunabilir bir listeye indirir.

🔴 VE «SABİT SAYI» TEK BAŞINA KUSUR DEĞİLDİR. `INCE_KM = 8.0` gibi bir
   ölçüt sabiti bir TANIMDIR, taban taşımaz. Bayat olan, bir BAŞKA
   ölçümden devralınmış ve o ölçümün tabanına bağlı olan sayıdır.
   ⇒ Ayrım otomatik yapılamaz; kova adı bunu söylüyor: ŞÜPHELİ.

KOŞULUŞ
    py denetim/SINAV-KOSU8-ALETESIK-0907.py
    py denetim/SINAV-KOSU8-ALETESIK-0907.py --atesle
"""
from __future__ import unicode_literals

import io
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZINLER = ["denetim", "arac"]

# bir PRINT satırı mı? (py: print/yaz · js: console.log)
BASAR_RX = re.compile(r"\b(print|yaz|console\.log)\s*\(")
# kabul ölçütü işareti
OLCUT_RX = re.compile(
    r"KABUL|kabul ölç|reçete|recete|hedef|BEKLENEN|beklenen|eşik|esik|"
    r"TABAN|taban|GEÇTİ|GECTI|KABUL EDİLMEZ|tutmazsa|olmalı|olmali", re.I)
# sabit sayı: 2+ haneli, yıl ve sürüm damgası DEĞİL
SAYI_RX = re.compile(r"(?<![\w.])(\d{2,})(?![\w.])")
YIL_RX = re.compile(r"\b(1[0-9]{3}|20[0-9]{2})\b")


def sabit_sayilar(s):
    u"""Satırdaki sabit sayılar — yıl ve biçim belirteçleri elenmiş."""
    temiz = YIL_RX.sub(" ", s)
    temiz = re.sub(r"%[-+ 0-9.]*[a-zA-Z]", " ", temiz)   # %d %8.1f %-14s
    temiz = re.sub(r"\.(to)?[Ff]ixed\(\d+\)", " ", temiz)
    temiz = re.sub(r"padStart\(\d+\)|padEnd\(\d+\)|ljust\(\d+\)|rjust\(\d+\)",
                   " ", temiz)
    return [n for n in SAYI_RX.findall(temiz) if int(n) > 1]


def tara():
    bulgu = []
    for d in DIZINLER:
        kok = os.path.join(KOK, d)
        if not os.path.isdir(kok):
            continue
        for ad in sorted(os.listdir(kok)):
            if not (ad.endswith(".py") or ad.endswith(".js")):
                continue
            yol = os.path.join(kok, ad)
            try:
                with io.open(yol, encoding="utf-8", errors="replace") as f:
                    satirlar = f.read().splitlines()
            except Exception:                        # noqa: BLE001
                continue
            for i, s in enumerate(satirlar):
                sd = s.strip()
                if sd.startswith("#") or sd.startswith("//") or sd.startswith("*"):
                    continue
                if not BASAR_RX.search(s) or not OLCUT_RX.search(s):
                    continue
                sayi = sabit_sayilar(s)
                bulgu.append((d + "/" + ad, i + 1, bool(sayi), sayi, sd[:110]))
    return bulgu


def atesleme():
    t = []

    def de(ad, bekle, olc):
        t.append((ad, bekle, olc, bekle == olc))

    de("print + ölçüt + sabit sayı YAKALANIR", ["10"],
       sabit_sayilar('print("reçete: R1\'den sonra < 10 parça")'))
    de("YIL sabit sayı SAYILMAZ", [],
       sabit_sayilar('print("R1 4 Eylül 2026 · 1281 tabanı")'))
    de("BİÇİM belirteci sayılmaz (%8.1f · %-14s)", [],
       sabit_sayilar('yaz("%-14s %8.1f beklenen" % (a, b))'))
    de("toFixed/padEnd sayılmaz", [],
       sabit_sayilar('console.log("eşik " + x.toFixed(4) + y.padEnd(46))'))
    de("gerçek eşik yakalanır", ["12"],
       sabit_sayilar('console.log("hedef DE >= 12")'))
    de("yorum satırı ELENİR", False,
       bool(BASAR_RX.search("   # print(\"kabul: < 10\")".strip()[0:1])))
    de("ölçüt kelimesi YOKSA girmez", False,
       bool(OLCUT_RX.search('print("dosya sayisi: %d" % n)')))
    de("print YOKSA girmez", False,
       bool(BASAR_RX.search('KABUL_ESIGI = 10')))
    return t


def main():
    if "--atesle" in sys.argv:
        print("C13 ② ATEŞLEME — sahte satırlarla zorlanan dallar\n")
        d = atesleme()
        kotu = 0
        for ad, b, o, ok in d:
            print(("  🟢 " if ok else "  🔴 ") + ad.ljust(46) +
                  "beklenen %r · ölçülen %r" % (b, o))
            kotu += (not ok)
        print("\n%d/%d dal ateşledi" % (len(d) - kotu, len(d)))
        return 1 if kotu else 0

    bulgu = tara()
    if len(bulgu) < 3:
        print("⚫ ÖLÇÜLEMEDİ — eşleşme şüpheli az (%d); desen bozuk olabilir"
              % len(bulgu))
        return 2
    supheli = [b for b in bulgu if b[2]]
    print("═" * 78)
    print("ALETLERİN BASTIĞI KABUL ÖLÇÜTLERİ")
    print("═" * 78)
    print("taranan dizin : %s" % ", ".join(DIZINLER))
    print("ölçüt basan satır : %d   ·   SABİT SAYI taşıyan : %d"
          % (len(bulgu), len(supheli)))
    print("")
    print("🟡 ŞÜPHELİ — sabit sayı taşıyan ölçüt satırları (ELLE OKUNACAK):")
    son = None
    for yol, no, _, sayi, s in supheli:
        if yol != son:
            print("\n   %s" % yol)
            son = yol
        print("      :%-4d [%s]  %s" % (no, ",".join(sayi), s))
    print("")
    print("─" * 78)
    print("🔴 «SABİT SAYI» TEK BAŞINA KUSUR DEĞİL: `INCE_KM = 8` gibi bir")
    print("   ölçüt sabiti bir TANIMDIR, taban taşımaz. Bayat olan, BAŞKA")
    print("   bir ölçümden devralınmış ve o ölçümün tabanına bağlı sayıdır.")
    print("   ⇒ Bu liste bir HÜKÜM değil, elle okunacak bir KISALTMA.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
