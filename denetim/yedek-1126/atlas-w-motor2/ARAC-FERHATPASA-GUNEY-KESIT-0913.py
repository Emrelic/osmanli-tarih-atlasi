# -*- coding: utf-8 -*-
"""FERHATPASA-GUNEY — Emre poligonu ∩ lat<36 : nokta listesi + kesit + zincir (SALT OKUR)

Poligon (Emre'nin tarifi, köşeler atlas noktasından alınır, yoksa sabit):
  doğu  Erdebil – Kazvin – Tahran – İsfahan – Behbehan
  batı  Batum – Kars – Van – Bağdat – Basra
  güney Basra – Behbehan (körfez kıyısı yaklaşık)
Yalnız lat < 36,0 tutulur. Poligon DIŞINDA ama 60 km içindeki noktalar
"KENAR" olarak ayrıca basılır (sınır çizgisi yaklaşık olduğu için).

Kullanım:  py denetim/ARAC-FERHATPASA-GUNEY-KESIT-0913.py
"""
import os, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
from shapely.geometry import Polygon, Point

Y = girdi.yukle(sessiz=True)
IX = {y["ad"]: y for y in Y}

SABIT = {"Erdebil": (38.25, 48.29), "Kazvin": (36.27, 50.00), "Tahran": (35.69, 51.39),
         "İsfahan": (32.65, 51.67), "Behbehan": (30.60, 50.24),
         "Batum": (41.64, 41.64), "Kars": (40.60, 43.10), "Van": (38.50, 43.38),
         "Bağdat": (33.31, 44.36), "Basra": (30.51, 47.81)}


def kose(ad):
    for y in Y:
        if y["ad"] == ad or y["ad"].startswith(ad + " "):
            return (y["lat"], y["lon"]), y["ad"]
    return SABIT[ad], ad + "(sabit)"


dogu = ["Erdebil", "Kazvin", "Tahran", "İsfahan", "Behbehan"]
bati = ["Batum", "Kars", "Van", "Bağdat", "Basra"]
koseler = []
print("# köşeler:")
for ad in bati + list(reversed(dogu)):
    (la, lo), gad = kose(ad)
    print("   %-10s -> %-28s %.3f %.3f" % (ad, gad, la, lo))
    koseler.append((lo, la))
# batı kuzeyden güneye, sonra doğu güneyden kuzeye → kapalı halka
POL = Polygon(koseler)
assert POL.is_valid, "poligon geçersiz"

KESIT = ["1585-06-15", "1590-03-21", "1600-06-15", "1603-10-21", "1604-06-15",
         "1607-06-15", "1612-11-20", "1625-06-15"]


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f") <= g < p.get("t"):
            return "OSM"
    for p in (y.get("v") or []):
        if p.get("f") <= g < p.get("t"):
            return "tâbi:" + str(p.get("d") or p.get("k"))
    for p in (y.get("s") or []):
        if p.get("f") <= g < p.get("t"):
            return str(p.get("d"))
    return "---"


ic, kenar = [], []
for y in Y:
    if y.get("lat") is None or y["lat"] >= 36.0:
        continue
    pt = Point(y["lon"], y["lat"])
    if POL.contains(pt):
        ic.append(y)
    else:
        d = POL.exterior.distance(pt) * 100  # derece→~km kaba
        if d <= 60:
            kenar.append((d, y))

print("\n# İÇ: %d nokta · KENAR (<~60 km dışarıda): %d" % (len(ic), len(kenar)))
bas = "  %-30s %6s %6s " % ("yer", "lat", "lon") + "".join("%-11s" % g[2:7] for g in KESIT)
for baslik, liste in (("İÇ", sorted(ic, key=lambda z: -z["lat"])),
                      ("KENAR", [y for _, y in sorted(kenar, key=lambda t: -t[1]["lat"])])):
    print("\n== %s ==" % baslik)
    print(bas)
    for y in liste:
        print("  %-30s %6.2f %6.2f " % (y["ad"][:30], y["lat"], y["lon"])
              + "".join("%-11s" % sahip(y, g)[:10] for g in KESIT))

print("\n== ZİNCİR (1500-1750'ye değen) ==")
for y in sorted(ic, key=lambda z: -z["lat"]) + [y for _, y in kenar]:
    print("\n■ %s (%.3f,%.3f) dosya=%s m=%s kur=%s" % (y["ad"], y["lat"], y["lon"],
          y.get("_kaynak"), y.get("m"), y.get("kur")))
    for alan in ("d", "v", "s"):
        for p in (y.get(alan) or []):
            if p.get("t", "9999") < "1500-01-01" or p.get("f", "0") > "1750-12-31":
                continue
            ek = {k: v for k, v in p.items() if k not in ("f", "t")}
            print("    %s %s → %s %s" % (alan, p.get("f"), p.get("t"), ek))
