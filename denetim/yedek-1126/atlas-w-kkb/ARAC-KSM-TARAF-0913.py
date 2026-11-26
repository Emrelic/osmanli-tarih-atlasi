# -*- coding: utf-8 -*-
"""FERHATPASA-KOSE — önerilen köşelerle TARAF SINAMASI (SALT OKUR, veri yazmaz).

Yöntem (mevcut hat notlarıyla aynı aile): yerel eşdikdörtgen izdüşüm (x = boylam·cos(enlem0), y = enlem);
her nokta için EN YAKIN segment bulunur, çapraz çarpım işareti okunur.
Hat kuzey→güney gidiyor; Osmanlı tarafı BATI. İşaret kalibrasyonu: Van (kesin Osmanlı, uzak batı)
ve Kazvin (kesin Safevî, uzak doğu) ile — kural koda gömülmez, ölçülür.
Koordinatlar: GeoNames (tam metin araması, 13 Eylül 2026) — kimlikleri rapordadır.
"""
import sys, io, math

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

ESKI = [
    ("2 Hudâferin", 39.15, 46.9416),
    ("3 Ahar↔Meşkin", 38.4381, 47.3758),
    ("4 Sarâb↔Erdebil (ESKİ)", 38.0952, 47.9149),
    ("5 Miyâne↔Halhâl (ESKİ)", 37.5196, 48.1221),
    ("6 Miyâne↔Zencan (ESKİ)", 37.0486, 48.1056),
    ("7 Sakkız↔Bîcâr", 36.0582, 46.9392),
    ("8 Kirmanşah↔Bîcâr", 35.0904, 47.335),
]
YENI = [
    ("2 Hudâferin", 39.15, 46.9416),
    ("3 Ahar↔Meşkin", 38.4381, 47.3758),
    ("4 Areštanāb (Arshatnāb)", 37.9323, 46.7506),
    ("5 Heşrûd↔Miyâne", round((37.4779 + 37.421) / 2, 4), round((47.0508 + 47.715) / 2, 4)),
    ("7 Sakkız↔Bîcâr", 36.0582, 46.9392),
    ("8 Kirmanşah↔Bîcâr", 35.0904, 47.335),
]
# (ad, enlem, boylam, BEKLENEN taraf)
NOKTA = [
    ("Van (kalibrasyon)", 38.4946, 43.38, "osmanli"),
    ("Kazvin (kalibrasyon)", 36.2797, 50.0049, "safevi"),
    ("Tebriz", 38.08, 46.2919, "osmanli"),
    ("Ahar", 38.4774, 47.0699, "osmanli"),
    ("Hashtrūd (Heşrûd)", 37.4779, 47.0508, "osmanli"),
    ("Leylān (Merâga livâsı)", 37.01099, 46.2065, "osmanli"),
    ("Āz̄arshahr (Dihharkân)", 37.759, 45.9783, "osmanli"),
    ("Sarāb", 37.9408, 47.5367, "safevi"),
    ("Mīāneh", 37.421, 47.715, "safevi"),
    ("Ardabil", 38.2498, 48.2933, "safevi"),
    ("Khalkhāl", 37.618373, 48.529282, "safevi"),
    ("Zanjan", 36.676421, 48.496282, "safevi"),
    ("Meshgīn Shahr (belirsiz)", 38.399, 47.682, "?"),
    ("Bostānābād/Ūjān (belirsiz)", 37.846331, 46.835416, "?"),
    ("Torkamān (belirsiz)", 37.5853, 47.3896, "?"),
    ("Qāflānkūh (belirsiz)", 37.3579, 47.8043, "?"),
]
LAT0 = 37.5
K = math.cos(math.radians(LAT0))


def xy(la, lo):
    return lo * K, la


def en_yakin(hat, la, lo):
    px, py = xy(la, lo)
    best = None
    for i in range(len(hat) - 1):
        ax, ay = xy(hat[i][1], hat[i][2])
        bx, by = xy(hat[i + 1][1], hat[i + 1][2])
        dx, dy = bx - ax, by - ay
        t = max(0.0, min(1.0, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)))
        qx, qy = ax + t * dx, ay + t * dy
        d = math.hypot(px - qx, py - qy) * 111.2
        cr = dx * (py - ay) - dy * (px - ax)
        if best is None or d < best[0]:
            best = (d, i, cr)
    return best


def sina(ad, hat):
    print("=" * 12, ad)
    for h in hat:
        print("   köşe", h)
    isaret_osm = 1 if en_yakin(hat, 38.4946, 43.38)[2] > 0 else -1
    isaret_saf = 1 if en_yakin(hat, 36.2797, 50.0049)[2] > 0 else -1
    print("   kalibrasyon: Van işareti %+d · Kazvin işareti %+d %s" % (isaret_osm, isaret_saf, "✓ ayrışıyor" if isaret_osm != isaret_saf else "✗ AYRIŞMIYOR"))
    hata = 0
    for n, la, lo, bek in NOKTA:
        d, i, cr = en_yakin(hat, la, lo)
        taraf = "osmanli" if (1 if cr > 0 else -1) == isaret_osm else "safevi"
        durum = "—" if bek == "?" else ("✓" if taraf == bek else "✗ YANLIŞ")
        if durum.startswith("✗"):
            hata += 1
        print("   %-28s → %-8s (beklenen %-7s) %s · en yakın segment %s→%s · %.1f km" % (n, taraf, bek, durum, hat[i][0], hat[i + 1][0], d))
    print("   YANLIŞ TARAF: %d" % hata)
    return hata


sina("ESKİ HAT (dosyadaki köşe 2-8)", ESKI)
sina("ÖNERİLEN HAT (4·5 yeni, 6 atıldı)", YENI)
