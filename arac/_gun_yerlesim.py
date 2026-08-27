# -*- coding: utf-8 -*-
"""Bir GUNDE kirilmasi olan yerlesimleri listeler — yer: listesi genisletmeden once.

  py arac/_gun_yerlesim.py 1551-01-01 [1345-01-01 ...]

Kirilma = herhangi bir d:/v:/s: doneminin BASI ya da SONU o gune esit.
Cikti ASCII'ye zorlanir (cp1254 konsolu icin).
"""
import sys, os, collections

sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
import girdi

Y = girdi.yukle()
if isinstance(Y, tuple):
    Y = Y[0]

def duz(s):
    return str(s).encode("ascii", "replace").decode("ascii")

for gun in sys.argv[1:]:
    kazanc = collections.defaultdict(list)   # kim aldi -> [ad]
    kayip = collections.defaultdict(list)
    for y in Y:
        for alan, etiket in (("d", "OSMANLI"), ("v", "tabi"), ("s", None)):
            for p in y.get(alan) or []:
                kim = etiket or p.get("d", "?")
                if p.get("f") == gun:
                    kazanc[kim].append(y["ad"])
                if p.get("t") == gun:
                    kayip[kim].append(y["ad"])
    print("")
    print("=== %s ===" % gun)
    for baslik, kova in (("KAZANAN", kazanc), ("KAYBEDEN", kayip)):
        for kim, adlar in sorted(kova.items(), key=lambda x: -len(x[1])):
            print("  %-9s %-16s %2d  %s"
                  % (baslik, duz(kim), len(adlar),
                     duz(", ".join(sorted(adlar)))))
