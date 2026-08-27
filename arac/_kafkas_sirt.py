# -*- coding: utf-8 -*-
"""KAFKAS SIRTI OLCUMU — Emre'nin sorusu: petekler dagin sirtinda kesiliyor mu?

Motorun sirt boru hattini ADIM ADIM tekrar eder ve HER ADIMDA kac poligon
hayatta kaldigini sayar. Amac: veri mi yok, yoksa SUZGEC mi eliyor?
(`CLAUDE.md`: nehir vakasinda "VERI DURUYORDU, SUZGEC GECIRMIYORDU".)
"""
import os, json, sys
from shapely.geometry import shape, box
from shapely.ops import unary_union, nearest_points

KOK = os.getcwd()
BASEMAPS = os.path.join(KOK, "veri-kaynak")
DOSYA = os.path.join(BASEMAPS, "ne_10m_geography_regions_polys.geojson")
ENGEL_SINIFI = ("Range/mtn", "Plateau", "Gorge", "Wetlands")

# Kafkas kutusu — Emre'nin gorseli: Sohum · Kutaisi · Kabartay · Tiflis
KAFKAS = box(37.0, 40.5, 49.0, 45.5)

def duz(s):
    return str(s).encode("ascii", "replace").decode("ascii")

d = json.load(open(DOSYA, encoding="utf-8"))
print("toplam poligon: %d" % len(d["features"]))

adaylar = []
for f in d["features"]:
    p = f["properties"]
    ad = p.get("NAME") or p.get("name") or "?"
    fc = p.get("FEATURECLA") or ""
    g = shape(f["geometry"]).buffer(0)
    if not g.envelope.intersects(KAFKAS):
        continue
    adaylar.append((ad, fc, g))

print("\n=== KAFKAS KUTUSUNA DEGEN POLIGONLAR: %d ===" % len(adaylar))
for ad, fc, g in adaylar:
    kesisim = g.intersection(KAFKAS)
    sinif_ok = any(k in fc for k in ENGEL_SINIFI)
    alan = kesisim.area
    cekirdek = kesisim.buffer(-0.12) if not kesisim.is_empty else kesisim
    print("  %-34s %-14s sinif:%s alan:%7.3f %s cekirdek:%s"
          % (duz(ad)[:34], duz(fc)[:14],
             "GECER" if sinif_ok else " ELER",
             alan,
             "GECER" if alan >= 0.05 else " ELER",
             "VAR" if (not cekirdek.is_empty) else "BOS <- SIRT KAYBOLDU"))

# ---- motorun gercekte kuracagi SIRT_HAT (yalniz Kafkas kutusunda)
sirtlar = []
for ad, fc, g in adaylar:
    if not any(k in fc for k in ENGEL_SINIFI):
        continue
    gg = g.intersection(KAFKAS)
    if gg.is_empty or gg.area < 0.05:
        continue
    cek = gg.buffer(-0.12)
    sirtlar.append(cek.boundary if not cek.is_empty else gg.boundary)

print("\n=== MOTORUN KURACAGI SIRT: %d parca ===" % len(sirtlar))
if not sirtlar:
    print("  [!] KAFKASYA'DA SIRT HATTI YOK — yaslama YAPILAMAZ.")
    sys.exit(0)

hat = unary_union(sirtlar)

# ---- dort sehir sirta ne kadar yakin? (yaslama esigi 0.35 derece)
SEHIR = {"Sohum": (43.00, 42.99), "Kutaisi": (42.27, 42.70),
         "Kabartay (Nalcik)": (43.48, 43.62), "Tiflis": (41.72, 44.79),
         "Ahiska": (41.64, 42.98), "Batum": (41.64, 41.64)}
from shapely.geometry import Point
print("\n=== SEHIR -> SIRT UZAKLIGI (yaslama esigi 0.35 derece ~39 km) ===")
for ad, (la, lo) in SEHIR.items():
    p = Point(lo, la)
    mes = hat.distance(p)
    print("  %-20s %.3f derece (~%4.0f km)   %s"
          % (duz(ad), mes, mes * 111,
             "ESIK ICINDE" if mes < 0.35 else "esik disinda"))
print("\nNOT: sehrin kendisi degil, PETEK SINIRI yaslanir. Bu olcum yalniz")
print("     sirtin o cografyada VAR olup olmadigini gosterir.")
