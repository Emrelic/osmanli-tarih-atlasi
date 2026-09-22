# -*- coding: utf-8 -*-
"""H-0043 ince olcum — Bosna-Hersek + Yenipazar'da ISGAL kaydinin GUNU.

1878-07-29 (Avusturya-Macaristan'in isgale baslamasi) etrafinda hangi yerlesim
isgal kaydi tasiyor, hangisi TASIMIYOR, tasiyanin penceresi ne. Hukum
SINIR-BERLIN-0076'nindir; burada yalniz sayi uretilir. Hicbir dosyaya YAZMAZ.
"""
import os, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = girdi.yukle(sessiz=True)

def kutu(y):
    return 42.0 <= y["lat"] <= 45.5 and 15.0 <= y["lon"] <= 21.0

def osmanli_gun(y, gun):
    return any(p.get("f", "") <= gun < (p.get("t") or "9999-12-31") for p in (y.get("d") or []))

bolge = [y for y in Y if kutu(y) and osmanli_gun(y, "1878-07-28")]
print("1878-07-28'de OSMANLI dogrudan olan yerlesim: %d" % len(bolge))
print()
isgalli, isgalsiz = [], []
for y in sorted(bolge, key=lambda y: y["ad"]):
    isg = [p for p in (y.get("isg") or []) if (p.get("f", "") < "1910")]
    if isg:
        isgalli.append(y)
        for p in isg:
            print("  %-30s ISGAL %s -> %s  [%s]  %s"
                  % (y["ad"][:30], p.get("f"), p.get("t"), p.get("d") or p.get("kid"),
                     y.get("_kaynak")))
    else:
        isgalsiz.append(y)

print()
print("ISGAL kaydi OLAN : %d" % len(isgalli))
print("ISGAL kaydi OLMAYAN : %d" % len(isgalsiz))
for y in isgalsiz:
    print("  %-30s lat %7.3f lon %7.3f  [%s]" % (y["ad"][:30], y["lat"], y["lon"], y.get("_kaynak")))

print()
print("ISGAL baslangic gunlerinin dagilimi:")
sayac = {}
for y in isgalli:
    for p in (y.get("isg") or []):
        if p.get("f", "") < "1910":
            sayac[p.get("f")] = sayac.get(p.get("f"), 0) + 1
for g in sorted(sayac):
    print("  %s : %d yerlesim" % (g, sayac[g]))
