# -*- coding: utf-8 -*-
"""YUK-BOLME-0925 — index.html'in yukledigi YEREL dosyalar: ham + gzip.
Iki geometri dosyasi ayri kovada; bolmeden sonra acilista kalan yuk = geri kalan."""
import gzip, os, re, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html = open(os.path.join(KOK, "index.html"), encoding="utf-8").read()
# yorum icindeki etiketler yuklenmez
html_y = re.sub(r"<!--.*?-->", "", html, flags=re.S)
yollar = re.findall(r'<script[^>]+src="([^"]+)"', html_y) + re.findall(r'<link[^>]+href="([^"]+\.css[^"]*)"', html_y)
GEO = {"data/donemler.js", "data/devletler_harita.js"}
kova = {"geometri": [0, 0, 0], "diger_data": [0, 0, 0], "js_css": [0, 0, 0], "eksik": [0, 0, 0]}
buyuk = []
for y in yollar:
    if y.startswith("http"):
        continue
    y = y.split("?")[0]
    p = os.path.join(KOK, y)
    if not os.path.exists(p):
        kova["eksik"][0] += 1; print("  EKSIK:", y); continue
    b = open(p, "rb").read()
    g = len(gzip.compress(b, 6))
    k = "geometri" if y in GEO else "diger_data" if y.startswith("data/") else "js_css"
    kova[k][0] += 1; kova[k][1] += len(b); kova[k][2] += g
    buyuk.append((len(b), g, y))
for k, (n, h, g) in kova.items():
    print("%-11s %4d dosya  ham %7.2f MB  gzip %6.2f MB" % (k, n, h / 1048576, g / 1048576))
print("en buyuk 8 (geometri disi):")
for h, g, y in sorted([x for x in buyuk if x[2] not in GEO], reverse=True)[:8]:
    print("   %7.2f MB ham  %6.2f MB gzip  %s" % (h / 1048576, g / 1048576, y))
