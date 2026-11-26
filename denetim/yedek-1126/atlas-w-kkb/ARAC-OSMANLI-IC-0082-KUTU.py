# -*- coding: utf-8 -*-
# OSMANLI-IC-0082 · H-0069 — bir kutudaki (ve kenar payindaki) yerlesimlerin
# verilen gunde sahibini (s:), tabi/v: ve isgal (isg:) durumunu basar.
# Kullanim: py denetim/ARAC-OSMANLI-IC-0082-KUTU.py <gun> <lon0> <lat0> <lon1> <lat1> [<pay_derece>]
import sys
sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi

gun, x0, y0, x1, y1 = sys.argv[1], *map(float, sys.argv[2:6])
pay = float(sys.argv[6]) if len(sys.argv) > 6 else 0.3
Y = girdi.yukle(sessiz=True)

def aktif(liste, gun):
    out = []
    for p in liste or []:
        f, t = p.get("f", "0000"), p.get("t", "9999")
        if f <= gun <= t:
            out.append(p)
    return out

sayi = {"ic": 0, "pay": 0}
for y in sorted(Y, key=lambda r: (r["lat"], r["lon"])):
    lon, lat = y["lon"], y["lat"]
    ic = x0 <= lon <= x1 and y0 <= lat <= y1
    kenar = (x0 - pay) <= lon <= (x1 + pay) and (y0 - pay) <= lat <= (y1 + pay)
    if not kenar:
        continue
    sayi["ic" if ic else "pay"] += 1
    s = [p.get("d") for p in aktif(y.get("s"), gun)]
    v = [p.get("kid") or p.get("d") for p in aktif(y.get("v"), gun)]
    isg = [p.get("d") or p.get("isg") for p in aktif(y.get("isg"), gun)]
    varlik = "" if (y.get("f", "0000") <= gun <= y.get("t", "9999")) else " [O GUN YOK]"
    print(f"{'IC ' if ic else 'pay'} {y['ad'][:32]:32s} {lat:7.3f} {lon:7.3f}  s={s} v={v} isg={isg}{varlik}  <{y['_kaynak']}>")
print(sayi)
