# -*- coding: utf-8 -*-
"""2s KAPISI + COĞRAFÎ KUTU — genel alet, her kalemde kullanılır.

  py denetim/ARAC-AVRUPA-2S-0906.py --gun 1922-12-06 1815-06-09
  py denetim/ARAC-AVRUPA-2S-0906.py --kutu 51,56,-11,-5      (laG,laK,loB,loD)

🔴 ÇEKİRDEK evreni denetle.olaylari_yukle()'den gelir — TAKLİT EDİLMEZ.
   YONTEM §⑤: kuyruk (data/kronoloji*.js) Değişmez 2'nin evreninde DEĞİL.
🔴 ±30 günü geçmek YETMEZ, maddenin KONUSU da okunur — o yüzden başlıklar basılır.
"""
import sys, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
from datetime import date

import girdi
import denetle

G = "1923-10-28"
argv = sys.argv[1:]


def gun(s):
    s = s if len(s) > 7 else s + "-01"
    return date(int(s[:4]), int(s[5:7]), int(s[8:10])).toordinal()


if "--gun" in argv:
    hedefler = argv[argv.index("--gun") + 1:]
    O = denetle.olaylari_yukle()
    print("=== 2s KAPISI — ÇEKİRDEK %d madde ===" % len(O))
    for h in hedefler:
        if h.startswith("--"):
            break
        gh = gun(h)
        yakin = sorted(((abs(gun(o["t"]) - gh), o["t"], o.get("b", "")) for o in O
                        if o.get("t")))[:3]
        print()
        print("  " + h + ":")
        for d, t, b in yakin:
            im = "🟢" if d == 0 else ("🟡" if d <= 30 else "🔴")
            print("     %s %4d gün  %s  %s" % (im, d, t, str(b)[:70]))

if "--kutu" in argv:
    laG, laK, loB, loD = [float(x) for x in argv[argv.index("--kutu") + 1].split(",")]
    Y = girdi.yukle(sessiz=True)

    def akt(a):
        for p in (a or []):
            if p.get("f", "") <= G < p.get("t", ""):
                return p
        return None

    def sahip(y):
        i = akt(y.get("isg"))
        if i:
            return (i.get("d") or i.get("k") or "isg?") + " [isg]"
        if akt(y.get("d")):
            return "OSMANLI"
        if akt(y.get("v")):
            return "OSMANLI-tabi"
        p = akt(y.get("s"))
        return p.get("d") if p else None

    print()
    print("=== KUTU %.2f-%.2f K / %.2f-%.2f D · %s ===" % (laG, laK, loB, loD, G))
    ic = [y for y in Y if laG <= y.get("lat", 99) <= laK and loB <= y.get("lon", 999) <= loD]
    print("  nokta: %d" % len(ic))
    for y in sorted(ic, key=lambda x: x["ad"]):
        print("     %-22s (%7.3f, %8.3f)  %s" % (y["ad"], y["lat"], y["lon"],
                                                 sahip(y) or "🔴 SAHİPSİZ"))
