# -*- coding: utf-8 -*-
# OSMANLI-IC-0082 · H-0069 — ZAMANSIZ petek tabanindan kurulan isgal ortusunde
# (arac/uret_devirler.py isgalleri_uret) DELIK adaylari.
#
# Mekanizma (olculdu, 1810-06-10 Bolgrad vakasi): ortu = isg: tasiyan yerlesimlerin
# ZAMANSIZ peteklerinin birlesimi. Zamansiz tabanda, isgal araliginda HENUZ VAR
# OLMAYAN (kur:/f: sonra) ya da ARTIK OLMAYAN (t: once) bir yerlesimin petegi de
# vardir; o gun motor o toprağı komsuya verir (komsu isgal altindadir), ama ortu
# o petegi KAPSAMAZ -> taramasiz dilim.
#
# Aday olcutu (yaklasik, duz Voronoi): Z yerlesimi, bolumun [f,t) araliginin BIR
# KISMINDA var degil VE Z'nin en yakin komsusu (o gun var olanlar arasinda) o
# bolumun uyesi VE Z'nin kendisi bolumde degil.
import sys, collections
sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi

Y = girdi.yukle(sessiz=True)
def bas(y): return max(y.get("f") or "0000", y.get("kur") or "0000")
def son(y): return y.get("t") or "9999"

bolum = collections.defaultdict(set)
for y in Y:
    for p in y.get("isg") or []:
        bolum[(p.get("d"), p["f"], p["t"])].add(y["ad"])

aday = []
for (isgalci, f, t), uyeler in sorted(bolum.items(), key=lambda x: x[0][1]):
    # hiz: yalniz uyelerin kutusu (±1.5°) icindeki Z, ±3° icindeki komsu adaylari
    U = [y for y in Y if y["ad"] in uyeler]
    la0, la1 = min(y["lat"] for y in U), max(y["lat"] for y in U)
    lo0, lo1 = min(y["lon"] for y in U), max(y["lon"] for y in U)
    def icinde(y, p):
        return la0 - p <= y["lat"] <= la1 + p and lo0 - p <= y["lon"] <= lo1 + p
    # o gun (f) var olan yerlesimler
    var = [y for y in Y if bas(y) <= f < son(y) and icinde(y, 3.0)]
    for z in (y for y in Y if icinde(y, 1.5)):
        if z["ad"] in uyeler:
            continue
        yok_bir_kismi = bas(z) > f or son(z) < t
        if not yok_bir_kismi:
            continue
        if bas(z) >= t or son(z) <= f:
            pass  # aralik boyunca hic yok — yine de zamansiz tabanda petegi var
        en = min((y for y in var if y["ad"] != z["ad"]),
                 key=lambda y: girdi.km(z["lat"], z["lon"], y["lat"], y["lon"]), default=None)
        if en is not None and en["ad"] in uyeler:
            aday.append((isgalci, f, t, z["ad"], bas(z), son(z), en["ad"],
                         round(girdi.km(z["lat"], z["lon"], en["lat"], en["lon"]))))

print(f"isgal bolumu: {len(bolum)} · delik adayi: {len(aday)}")
for a in aday:
    print("  %-10s %s→%s  %-30s var:%s→%s  komsu:%s (%d km)" % a)
