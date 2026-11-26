# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — kutu ici nokta sayimi (SALT OKUR).

parti-emrelic-0008'in H-0009..H-0015 maddeleri "su bolgeye N nokta yazildi"
diye iddia ediyor. Bu alet o bolgelerdeki BUGUNKU nokta sayisini olcer.

⚠️ SINIRI ONCEDEN YAZILI: bir kutudaki nokta sayisi, o noktalarin O PARTIDE
eklendigini GOSTERMEZ — yalnizca "bugun bos degil"i gosterir. Iddia edilen
DELTA'yi (128 nokta) bu alet olcemez; olcemedigini damgalar (D107).
"""
import os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = girdi.yukle(sessiz=True)

KUTULAR = [
    ("Papua / Yeni Gine",        -11.0,  0.0, 130.0, 151.0),
    ("Endonezya-Malezya-Filip.", -11.0, 20.0,  95.0, 128.0),
    ("Somali boynuzu",            -2.0, 12.0,  41.0,  52.0),
    ("Kongo havzasi",            -10.0,  5.0,  12.0,  30.0),
    ("Rub'ul Hali",              16.0,  24.0,  45.0,  56.0),
]

print("# taban: %d nokta · %d girdi dosyasi" % (len(Y), len(girdi.GIRDI_DOSYALARI)))
print()
for ad, la1, la2, lo1, lo2 in KUTULAR:
    icinde = [y for y in Y
              if la1 <= (y.get("lat") or -999) <= la2
              and lo1 <= (y.get("lon") or -999) <= lo2]
    print("%-26s  %4d nokta" % (ad, len(icinde)))
    for y in icinde[:4]:
        print("      ornek: %s (%s, %s)" % (y.get("ad"), y.get("lat"), y.get("lon")))
