# -*- coding: utf-8 -*-
"""C CIZIM II -- dar kutu vs genis kutu icindeki yerlesim noktasi sayisi."""
import re, glob, io

DAR = {"lat_min": 40.5, "lat_max": 42.0, "lon_min": 25.8, "lon_max": 29.3}
GENIS = {"lat_min": 40.3, "lat_max": 42.3, "lon_min": 25.4, "lon_max": 28.6}

def icinde(lat, lon, k):
    return k["lat_min"] <= lat <= k["lat_max"] and k["lon_min"] <= lon <= k["lon_max"]

dar_n, genis_n = [], []
for fn in glob.glob("data/yerlesimler*.js"):
    txt = io.open(fn, encoding="utf-8").read()
    for m in re.finditer(r'\{\s*ad:"([^"]*)"[^}]*?lat:([\d.\-]+),\s*lon:([\d.\-]+)', txt):
        ad, lat, lon = m.group(1), float(m.group(2)), float(m.group(3))
        if icinde(lat, lon, DAR):
            dar_n.append((ad, fn))
        if icinde(lat, lon, GENIS):
            genis_n.append((ad, fn))

print("DAR kutu   (%s): %d nokta" % (DAR, len(dar_n)))
print("GENIS kutu (%s): %d nokta" % (GENIS, len(genis_n)))
print()
print("--- GENIS - DAR farki (yalniz genis kutuda olan yeni noktalar) ---")
dar_adlar = set(a for a, f in dar_n)
yeni = [a for a, f in genis_n if a not in dar_adlar]
print(len(yeni), "yeni nokta:", yeni[:40])
