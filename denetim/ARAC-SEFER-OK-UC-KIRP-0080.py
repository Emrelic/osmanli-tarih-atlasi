# -*- coding: utf-8 -*-
"""SEFER-OK-0077 · 0080 H-0012 — ÖNCE/SONRA kırpıntılarını yan yana koyar.
Girdi: denetim/SINAV-SEFER-OK-UC-0080-{once,sonra}-<sahne>.png (ARAC-SEFER-OK-UC-0080.js)
Çıktı: denetim/SINAV-SEFER-OK-UC-0080-KARSILASTIRMA.png
"""
import sys, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from PIL import Image, ImageDraw

KOK = os.path.dirname(os.path.abspath(__file__))
# sahne → kırpma kutusu (x0, y0, x1, y1), 1400x900 ekran pikseli
KIRP = {
    "savoy-z6":     (300, 300, 640, 560),
    "savoy-z4":     (250, 200, 650, 500),
    "savoy-z8":     (200, 150, 700, 550),
    "karadeniz-z5": (150, 100, 750, 550),
    "bakü-z6":      (200, 150, 800, 550),
}
satirlar = []
for ad, kutu in KIRP.items():
    a = os.path.join(KOK, "SINAV-SEFER-OK-UC-0080-once-%s.png" % ad)
    b = os.path.join(KOK, "SINAV-SEFER-OK-UC-0080-sonra-%s.png" % ad)
    if not (os.path.exists(a) and os.path.exists(b)):
        print("EKSİK", ad); continue
    ia, ib = Image.open(a).crop(kutu), Image.open(b).crop(kutu)
    w, h = ia.size
    s = Image.new("RGB", (w * 2 + 10, h + 24), "white")
    s.paste(ia, (0, 24)); s.paste(ib, (w + 10, 24))
    d = ImageDraw.Draw(s)
    d.text((6, 5), "ÖNCE · " + ad, fill="black"); d.text((w + 16, 5), "SONRA · " + ad, fill="black")
    satirlar.append(s)
W = max(s.size[0] for s in satirlar); H = sum(s.size[1] + 8 for s in satirlar)
out = Image.new("RGB", (W, H), "white"); y = 0
for s in satirlar:
    out.paste(s, (0, y)); y += s.size[1] + 8
yol = os.path.join(KOK, "SINAV-SEFER-OK-UC-0080-KARSILASTIRMA.png")
out.save(yol); print(yol, out.size)
