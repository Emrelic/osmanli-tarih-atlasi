# -*- coding: utf-8 -*-
"""EKO-ILGI-0073 · H-0005 YAMASI (1.MURAT M-4837/b — (a) sikki, yetki verildi).

Emre (0073/H-0005): "15 Eylul 1821 Orta Amerika Bagimsizlik Bildirisi ... bu olay
dunya tarihi icin cok buyuk bir olay mi, ayrica bolgesel onemi olan bir olay da
degil zira amerika kitasinda geciyor. bu tur maddeler ancak onem sirasi/baslangic
ayarlarindan isaretlenir ise gelmeli."

OLCUM (denetim/EKO-ILGI-0073.md §7): mekanizma ZATEN VAR — Ayarlar > "Dis olaylar"
esigi (#dis-esik, localStorage disEsik, ?dis=), varsayilan "4". Madde kapsam:"dis"
ve dunya:4 oldugu icin varsayilan esigi TAM geciyor. ⇒ Yeni alan/UI gerekmiyor;
kaydin puani duzeltiliyor.

REDDEDILEN sik (M-4837): DIS_ESIK_VARSAYILAN'i "5" yapmak — 35 masum maddeyi de
karartirdi.
"""
import io, os, sys

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

YAMA = [
 ("data/olaylar_amerika_0920.js",
  '{ t:"1821-09-15", k:"siyaset", onem:4, dunya:4, kapsam:"dis",',
  '{ t:"1821-09-15", k:"siyaset", onem:3, dunya:3, kapsam:"dis",', 1),
 ("data/olaylar_amerika_0920.js",
  '{ t:"1535-01-18", k:"kurulus", onem:4, dunya:4, kapsam:"dis",',
  '{ t:"1535-01-18", k:"kurulus", onem:3, dunya:3, kapsam:"dis",', 1),
]

hata = 0
for dosya, eski, yeni, bekle in YAMA:
    with io.open(dosya, encoding="utf-8") as f:
        s = f.read()
    n = s.count(eski)
    if n != bekle:
        print("HATA  %s  %d kez (%d bekleniyordu)" % (dosya, n, bekle))
        hata += 1
        continue
    with io.open(dosya, "w", encoding="utf-8", newline="") as f:
        f.write(s.replace(eski, yeni))
    print("OK    %s  <- %s" % (eski[:44], "onem/dunya 4 -> 3"))

print("\n%d yama, %d hata" % (len(YAMA), hata))
sys.exit(1 if hata else 0)
