# -*- coding: utf-8 -*-
# OSMANLI-IC-0082 · H-0069 — bir izgaranin her hucresi icin, verilen gunde VAR OLAN
# en yakin yerlesimi bulur (duz Voronoi yaklasimi — motorun agirliksiz hali) ve o
# yerlesimin o gunku durumunu (d:/s:/v:/isg:) yazar. Amac: noktasiz bolge KIMIN
# petegine emiliyor sorusunu sayiya cevirmek (CLAUDE.md §2).
# Kullanim: py denetim/ARAC-OSMANLI-IC-0082-EMIS.py <gun> <lon0> <lat0> <lon1> <lat1> <adim>
import sys, math, collections
sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi

gun = sys.argv[1]
x0, y0, x1, y1, adim = map(float, sys.argv[2:7])
Y = [y for y in girdi.yukle(sessiz=True)
     if y.get("f", "0000") <= gun <= y.get("t", "9999") and (y.get("kur") or "0000") <= gun]

def durum(y):
    def ak(k):
        return [p for p in (y.get(k) or []) if p.get("f", "0000") <= gun <= p.get("t", "9999")]
    parca = []
    if ak("d"): parca.append("OSMANLI")
    parca += ["s:" + p.get("d", "?") for p in ak("s")]
    parca += ["v:" + (p.get("kid") or "tabi") for p in ak("v")]
    parca += ["isg:" + p.get("d", "?") for p in ak("isg")]
    return " ".join(parca) or "SAHIPSIZ"

def uzak(lat, lon, y):
    return girdi.km(lat, lon, y["lat"], y["lon"])

sayac = collections.Counter()
satirlar = []
lat = y1
while lat >= y0 - 1e-9:
    satir = []
    lon = x0
    while lon <= x1 + 1e-9:
        en = min(Y, key=lambda y: uzak(lat, lon, y))
        sayac[(en["ad"], durum(en))] += 1
        satir.append(en["ad"][:3])
        lon += adim
    satirlar.append(f"{lat:6.2f} " + " ".join(satir))
    lat -= adim
print("\n".join(satirlar))
print("-- hucre sayisi, en yakin yerlesim, o gunku durumu --")
for (ad, d), n in sayac.most_common():
    y = next(y for y in Y if y["ad"] == ad)
    print(f"{n:4d}  {ad:30s} {y['lat']:.3f},{y['lon']:.3f}  {d}")
