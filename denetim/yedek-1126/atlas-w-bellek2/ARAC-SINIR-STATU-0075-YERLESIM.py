# -*- coding: utf-8 -*-
"""SINIR-STATU-0075 — bir kutudaki yerlesim noktalarinin belirli gundeki durumu (d: dogrudan Osmanli · v: tabi · s: baska devlet).
Yerlesim listesi arac/girdi.py yukle()'den (87 girdi dosyasi). Kullanim:
  py denetim/ARAC-SINIR-STATU-0075-YERLESIM.py <gun> <bati> <guney> <dogu> <kuzey>
Ornek: py denetim/ARAC-SINIR-STATU-0075-YERLESIM.py 1830-11-08 19.0 43.2 23.0 45.2"""
import sys
sys.stdout.reconfigure(encoding="utf-8")
sys.path.insert(0, "arac")
import girdi

gun = sys.argv[1]
w, s, e, n = map(float, sys.argv[2:6])
Y = girdi.yukle(sessiz=True)
print("yerlesim toplam:", len(Y))

def icinde(lst, gun):
    for d in lst or []:
        f = d.get("f") or "0000-01-01"
        t = d.get("t") or "9999-12-31"
        if f <= gun < t:
            return d
    return None

satirlar = []
for y in Y:
    lat, lon = y.get("lat"), y.get("lon")
    if lat is None or lon is None:
        continue
    if not (w <= lon <= e and s <= lat <= n):
        continue
    dd = icinde(y.get("d"), gun)
    vv = icinde(y.get("v"), gun)
    ss = icinde(y.get("s"), gun)
    if vv:
        durum = "v:%s(%s)" % (vv.get("kid") or "-", vv.get("statu") or "-")
    elif dd:
        durum = "d:dogrudan"
    elif ss:
        durum = "s:%s" % ss.get("d")
    else:
        durum = "SAHIPSIZ"
    satirlar.append((y.get("ad"), lat, lon, durum))
satirlar.sort(key=lambda r: (r[3], -r[1]))
for ad, lat, lon, durum in satirlar:
    print("  %-34s %.3fN %.3fE  %s" % (ad[:34], lat, lon, durum))
print("kutudaki nokta:", len(satirlar))
