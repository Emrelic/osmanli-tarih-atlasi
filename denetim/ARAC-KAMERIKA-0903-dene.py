# -*- coding: utf-8 -*-
"""ADAY ENJEKSIYON TESTI — aday noktalar kac hucre kapatiyor?

Bagli evrene aday noktalari EKLER (data/ altina YAZMADAN, yalniz bellekte)
ve kutumdaki acik hucre sayisini yeniden olcer. Boylece her aday partisinin
KAPANMA KATKISI sayiyla gorunur.

PROJE KOKUNDEN:  py <bu dosya> [aday.json] [izgara]
"""
import io
import json
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi                                              # noqa: E402

BURA = os.path.dirname(os.path.abspath(__file__))
ADAY_YOL = sys.argv[1] if len(sys.argv) > 1 else os.path.join(BURA, "adaylar.json")
ADIM = float(sys.argv[2]) if len(sys.argv) > 2 else 2.0
TAVAN = 200.0
G, KU, B, D = 15.0, 72.0, -170.0, -52.0

Y = girdi.yukle(sessiz=True)
TABAN = [(y["lat"], y["lon"], y.get("ad", "?")) for y in Y
         if isinstance(y.get("lat"), (int, float))
         and isinstance(y.get("lon"), (int, float))]

ADAY = []
if os.path.exists(ADAY_YOL):
    for a in json.load(io.open(ADAY_YOL, encoding="utf-8")):
        ADAY.append((float(a["lat"]), float(a["lon"]), a["ad"]))
print("taban nokta: %d · aday: %d" % (len(TABAN), len(ADAY)))

from shapely.geometry import shape, Point                 # noqa: E402
from shapely.ops import unary_union                       # noqa: E402
from shapely.prepared import prep                         # noqa: E402

gj = json.load(io.open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
hazir = prep(unary_union([shape(o["geometry"]) for o in gj["features"]]))
print("kara maskesi yuklendi · izgara %.1f" % ADIM)


def km(a_lat, a_lon, b_lat, b_lon):
    t = math.pi / 180.0
    dp = (b_lat - a_lat) * t
    dl = (b_lon - a_lon) * t
    s = (math.sin(dp / 2) ** 2
         + math.cos(a_lat * t) * math.cos(b_lat * t) * math.sin(dl / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(min(1.0, s)))


def en_yakin(la, lo, kume):
    en, ad = 1e9, None
    for p in kume:
        d = km(la, lo, p[0], p[1])
        if d < en:
            en, ad = d, p[2]
    return en, ad


HUCRE = []
la = G + ADIM / 2
while la < KU:
    lo = B + ADIM / 2
    while lo < D:
        if hazir.contains(Point(lo, la)):
            HUCRE.append((round(la, 2), round(lo, 2)))
        lo += ADIM
    la += ADIM

TUM = TABAN + ADAY
once = []
sonra = []
for la, lo in HUCRE:
    u0, _ = en_yakin(la, lo, TABAN)
    if u0 > TAVAN:
        once.append((la, lo))
        u1, ad1 = en_yakin(la, lo, TUM)
        if u1 > TAVAN:
            sonra.append((la, lo, round(u1), ad1))

print("\nkara hucre : %d" % len(HUCRE))
print("ONCE  ACIK : %d  (%.1f%%)" % (len(once), 100.0 * len(once) / len(HUCRE)))
print("SONRA ACIK : %d  (%.1f%%)" % (len(sonra), 100.0 * len(sonra) / len(HUCRE)))
print("KAPANAN    : %d" % (len(once) - len(sonra)))
if ADAY:
    print("aday basina : %.2f hucre" % ((len(once) - len(sonra)) / float(len(ADAY))))

# hangi aday kac hucre kapatti (tek basina katki degil, en yakin olma sayisi)
sayac = {}
for la, lo in once:
    u1, ad1 = en_yakin(la, lo, TUM)
    if u1 <= TAVAN:
        sayac[ad1] = sayac.get(ad1, 0) + 1
if sayac:
    print("\nKAPATAN ADAYLAR (hucre sayisina gore):")
    for ad, n in sorted(sayac.items(), key=lambda t: -t[1]):
        print("   %3d  %s" % (n, ad))

# ISE YARAMAYAN adaylar — hicbir acik hucreyi kapatmiyor
kapatan = set(sayac)
bos = [a[2] for a in ADAY if a[2] not in kapatan]
if bos:
    print("\n⚠️ HICBIR ACIK HUCRE KAPATMAYAN ADAY: %d" % len(bos))
    for ad in bos:
        print("   %s" % ad)

# --- kalan acik hucreler, kume kume ---
kalan = [(h[0], h[1], h[2], h[3]) for h in sonra]
grup = []
havuz = list(kalan)
while havuz:
    tohum = havuz.pop(0)
    kume = [tohum]
    degisti = True
    while degisti:
        degisti = False
        for h in list(havuz):
            for k in kume:
                if (abs(h[0] - k[0]) <= ADIM * 1.01
                        and abs(h[1] - k[1]) <= ADIM * 1.01):
                    kume.append(h)
                    havuz.remove(h)
                    degisti = True
                    break
    grup.append(kume)
grup.sort(key=len, reverse=True)
print("\nKALAN KUME: %d" % len(grup))
for i, kume in enumerate(grup[:40], 1):
    las = [h[0] for h in kume]
    los = [h[1] for h in kume]
    uz = max(kume, key=lambda h: h[2])
    print("%-3d %4d hucre  %5.1f-%5.1fK  %6.1f-%6.1f  enuzak %4d km @ %.1fK %.1fB"
          % (i, len(kume), min(las), max(las), min(los), max(los),
             uz[2], uz[0], uz[1]))

json.dump({"kalan": sonra}, io.open(os.path.join(BURA, "kalan.json"), "w",
                                    encoding="utf-8"), ensure_ascii=False)
print("\n-> kalan.json yazildi")
