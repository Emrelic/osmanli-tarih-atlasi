# -*- coding: utf-8 -*-
"""MALIYET FONKSIYONU O3 -- hucre ici gecit, GERCEK DEM ile KUCUK bir
pencere (tek 5.566 km'lik hucre). Zaman butcesi icin TEK bir gecit
(Gulek Bogazi / Cilician Gates, Toros) ornek alindi -- tam bolge
taramasi degil.

arac/uret_petek.py'ye YAZILMADI, yalniz OKUNDU (EGIM_DEM yolu icin).
"""
import os
import rasterio as rio
from rasterio.windows import from_bounds
from rasterio.enums import Resampling
import numpy as np

DEM = r"veri-kaynak\yukseklik\etopo2022_30s_atlas.tif"
if not os.path.exists(DEM):
    DEM = r"veri-kaynak\yukseklik\etopo2022_30s_dunya.tif"

KV_ADIM = 0.05  # derece, motorla ayni

# Gulek Bogazi (Cilician Gates) -- Toros'u kuzey-guney kesen tarihi gecit.
LAT, LON = 37.28, 34.75
# Bu noktayi iceren TEK bir KV_ADIM hucresi (motorun kendi hizalamasiyla,
# 0'dan itibaren KV_ADIM'in katlari -- kaba/yeterli, tam hizalama sart degil)
lat0 = (LAT // KV_ADIM) * KV_ADIM
lon0 = (LON // KV_ADIM) * KV_ADIM

with rio.open(DEM) as ds:
    print("DEM cozunurlugu (derece/piksel):", ds.transform.a, -ds.transform.e)
    win = from_bounds(lon0, lat0, lon0 + KV_ADIM, lat0 + KV_ADIM, transform=ds.transform)
    ham = ds.read(1, window=win)  # HAM cozunurlukte (30 yay-saniye, ~926 m)
    print("ham piksel sayisi bu hucrede:", ham.shape, "(", ham.size, "alt-hucre )")

    ort = ds.read(1, window=win, out_shape=(1, 1), resampling=Resampling.average)[0, 0]

print()
print("=" * 70)
print(f"Gulek Bogazi hucresi [{lat0:.2f},{lon0:.2f} - {lat0+KV_ADIM:.2f},{lon0+KV_ADIM:.2f}]")
print("=" * 70)
print(f"  z_min (en alcak nokta / olasi GECIT)  : {float(ham.min()):8.1f} m")
print(f"  z_max (zirve)                          : {float(ham.max()):8.1f} m")
print(f"  z_ort (Resampling.average -- BUGUNKU)  : {float(ort):8.1f} m")
print(f"  motorun BUGUN kullandigi TEK deger      : {float(ort):8.1f} m")
print()
fark_zirve = float(ham.max()) - float(ort)
fark_gecit = float(ort) - float(ham.min())
print(f"  ORTALAMA, ZIRVEYI {fark_zirve:.0f} m ALCALTIYOR")
print(f"  ORTALAMA, GECIDI {fark_gecit:.0f} m YUKSELTIYOR (gecit gizleniyor)")
print()
print("  ESKI MODEL (z_ort ile): tek hucre, tek surtunme degeri -- gecit YOK")
print("  ONERILEN: ayni hucre z_min/z_max/z_ort UCLU tasisa, Dijkstra")
print("  'bu hucreden GECIS' maliyetini z_min'e (en alcak nokta) gore,")
print("  'bu hucreye TIRMANIS' maliyetini z_max'a gore ayirabilir.")
