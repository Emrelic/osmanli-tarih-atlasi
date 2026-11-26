#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
KITA 19 — H-0002 (Mohaç bolgesi yerlesimsiz toprak) icin nokta taramasi.
girdi.yukle() KULLANIR (D023: kendi ayristiricini yazma).
"""
import sys
sys.path.insert(0, "arac")
import girdi

Y = girdi.yukle(sessiz=True)
print("toplam yerlesim:", len(Y))

# H-0002-2.png'deki poligon kutusu (goruntu ustu bilgi cubugu):
# 1526-08-29 - 46.61-48.14N - 19.87-22.98E
latMin, latMax = 45.8, 48.6
lonMin, lonMax = 19.3, 23.4

inbox = [y for y in Y if latMin <= y.get("lat", -999) <= latMax and lonMin <= y.get("lon", -999) <= lonMax]
print("genisletilmis kutu icinde nokta sayisi:", len(inbox))
for y in sorted(inbox, key=lambda y: y["lat"]):
    print(f"  {y['ad']:<24} lat={y['lat']:.3f} lon={y['lon']:.3f}  s={y.get('s')}  d={y.get('d')}  v={y.get('v')}  m={y.get('m')}")
