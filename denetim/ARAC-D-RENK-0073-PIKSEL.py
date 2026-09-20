# -*- coding: utf-8 -*-
"""Gorseldeki koyu cizginin RENGI hangi app.js katmaniyla esleşiyor? ÖLÇ."""
from PIL import Image
import collections

G = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-0073\H-0007-1.png"
im = Image.open(G).convert("RGB")
w, h = im.size
px = im.load()

ADAY = {
    "#8e0b22 devlet-odak-vurgu": (0x8e, 0x0b, 0x22),
    "#6d0d1c imparatorluk-hale": (0x6d, 0x0d, 0x1c),
    "#4d0713 osmanli-cizgi": (0x4d, 0x07, 0x13),
    "#3a0510 isyan-cizgi": (0x3a, 0x05, 0x10),
    "#2b1006 sefer-varsayilan": (0x2b, 0x10, 0x06),
    "#b2384a vassal-serit-dis": (0xb2, 0x38, 0x4a),
    "#d4707d himaye/vasal-hat": (0xd4, 0x70, 0x7d),
    "#0a2f5c D_HAT_RENK (D katmani)": (0x0a, 0x2f, 0x5c),
}

# koyu (toplam parlaklik dusuk) ve kirmizi-agirlikli pikselleri topla
sayac = collections.Counter()
for y in range(0, int(h * 0.85)):
    for x in range(w):
        r, g, b = px[x, y]
        if r + g + b < 330 and r >= g and r >= b and r > 40:
            sayac[(r, g, b)] += 1

print("== gorseldeki en sik KOYU-KIRMIZI pikseller ==")
for (r, g, b), n in sayac.most_common(12):
    en_yakin, mesafe = None, 1e9
    for ad, (ar, ag, ab) in ADAY.items():
        d = (r - ar) ** 2 + (g - ag) ** 2 + (b - ab) ** 2
        if d < mesafe:
            mesafe, en_yakin = d, ad
    print("  #%02x%02x%02x  x%-5d  en yakin aday: %-34s mesafe=%.0f"
          % (r, g, b, n, en_yakin, mesafe ** 0.5))

print()
print("== D katmani mavisi (#0a2f5c) gorselde var mi? ==")
mavi = 0
for y in range(0, int(h * 0.85)):
    for x in range(w):
        r, g, b = px[x, y]
        if abs(r - 0x0a) < 26 and abs(g - 0x2f) < 26 and abs(b - 0x5c) < 30:
            mavi += 1
print("  yakin piksel:", mavi)
