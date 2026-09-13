#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""KITA 19 - H-0002 gorsellerinden renk ornekleme."""
from PIL import Image

img1 = Image.open(r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-0044\H-0002-1.png").convert("RGB")
img2 = Image.open(r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-0044\H-0002-2.png").convert("RGB")

print("img1 size:", img1.size)
print("img2 size:", img2.size)

# img1: diamond patch approx merkez - resimde Budin'in kuzeydogusunda
# gozle bakinca yaklasik (250,110) civari -- birkac nokta deneyelim
noktalar1 = {
    "diamond_merkez": (250, 108),
    "bogdan_merkez": (430, 60),
    "eflak_tabi_merkez": (330, 260),
    "macaristan_yesil": (200, 190),
    "avusturya_sari": (100, 90),
}
for ad, (x,y) in noktalar1.items():
    print(f"  img1 {ad} @ ({x},{y}):", img1.getpixel((x,y)))

# img2: buyuk poligon merkezi
noktalar2 = {
    "poligon_merkez": (550, 300),
    "poligon_ust": (600, 150),
    "macaristan_yesil_disi": (150, 500),
    "avusturya_sari_disi": (150, 100),
}
for ad, (x,y) in noktalar2.items():
    print(f"  img2 {ad} @ ({x},{y}):", img2.getpixel((x,y)))
