# -*- coding: utf-8 -*-
"""Misir-sultanligi/misir-kralligi icin renk ADAYLARI -- renkler.py DONUK,
bu yalniz bir ONERI hesaplamasi (CIE76 yaklasik DeltaE, tam renk_olc.py
DEGIL -- o ancak kosu bitince kosabilir)."""
import math

def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def rgb_to_lab(rgb):
    r, g, b = [x / 255.0 for x in rgb]
    def f(c):
        return ((c + 0.055) / 1.055) ** 2.4 if c > 0.04045 else c / 12.92
    r, g, b = f(r), f(g), f(b)
    x = r * 0.4124 + g * 0.3576 + b * 0.1805
    y = r * 0.2126 + g * 0.7152 + b * 0.0722
    z = r * 0.0193 + g * 0.1192 + b * 0.9505
    x, y, z = x / 0.95047, y / 1.0, z / 1.08883
    def g2(t):
        return t ** (1/3) if t > 0.008856 else (7.787 * t) + (16/116)
    x, y, z = g2(x), g2(y), g2(z)
    L = (116 * y) - 16
    A = 500 * (x - y)
    B = 200 * (y - z)
    return (L, A, B)

def de76(h1, h2):
    l1 = rgb_to_lab(hex_to_rgb(h1))
    l2 = rgb_to_lab(hex_to_rgb(h2))
    return math.sqrt(sum((a - b) ** 2 for a, b in zip(l1, l2)))

KOMSU = {
    "kavalali (Misir'in kendi selefi)": "#20d820",
    "ingiltere": "#7e3d8f",
    "italya": "#74a074",
    "hicaz": "#78360c",
    "memluk": "#f09087",
    "funj": "#ed5a96",
    "darfur": "#2820d8",
    "mehdi": "#eaa8ea",
}

ADAYLAR = {
    "A: hardal/khaki (tarihsel Misir haritalarinin klasik tonu)": "#c9a635",
    "B: koyu zeytin-yesil (kavalali ailesinden ama koyu)": "#4a6b1f",
    "C: kum/bej (colde uyumlu, notr)": "#d4b483",
    "D: donuk turuncu-kahve (hicaz'dan ayri aile)": "#b8722e",
}

print("=== ADAYLARIN KOMSULARLA DeltaE76 (yaklasik, renk_olc.py DEGIL) ===")
for ad_ad, ad_hex in ADAYLAR.items():
    print(f"\n{ad_ad}  ({ad_hex})")
    en_dusuk = 999
    en_yakin = None
    for k_ad, k_hex in KOMSU.items():
        d = de76(ad_hex, k_hex)
        print(f"    vs {k_ad:35s} {k_hex}  DeltaE~{d:5.1f}")
        if d < en_dusuk:
            en_dusuk, en_yakin = d, k_ad
    print(f"    -> EN YAKIN KOMSU: {en_yakin} (DeltaE~{en_dusuk:.1f})")
