# -*- coding: utf-8 -*-
"""FAZ 2 — üç eksik nokta için 3 KM MÜKERRER SINAVI ve komşu zinciri.

🔴 `§11` Varat/Varad tuzağı: yeni nokta yazmadan önce 3 km içinde
   başka nokta var mı? VE zaman çizgileri AYNI mı? (Kural bir yasak
   değil bir ŞÜPHE EŞİĞİ — şartı zaman çizgilerinin AYNI olması.)
🔴 VERİ YAZMAZ.
"""
import io
import math
import os
import sys

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi  # noqa: E402

ADAY = [
    ("Osmaniye", 37.0742, 36.2461, "osmaniye",
     "TDV `osmaniye` — 13.081 kar., iki günü de veriyor "
     "(işgal 23 Aralık 1918 · tahliye 29 Aralık 1921)"),
    ("Kozan (Sis)", 37.4517, 35.8153, "sis",
     "TDV `sis` CANLI (`kozan` 302) — §4 Türkçe/tarihî ad ekseni"),
    ("Ceyhan", 37.0247, 35.8175, "",
     "bulunamadı — `ceyhan` ve `ceyhan--sehir` 302; en yakın canlı "
     "madde `misis` (Yakapınar, Ceyhan ilçesinde) ve `adana`"),
]


def km(a, b, c, d):
    R = 6371.0
    p1, p2 = math.radians(a), math.radians(c)
    dp, dl = math.radians(c - a), math.radians(d - b)
    h = (math.sin(dp / 2) ** 2
         + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2)
    return 2 * R * math.asin(math.sqrt(h))


def zincir(z):
    return " ".join("%s→%s:%s" % (p.get("f"), p.get("t"),
                                  p.get("d") or "OSM")
                    for kat in ("d", "s")
                    for p in (z.get(kat) or []))


Y = girdi.yukle(sessiz=True)
print("═══ 3 KM MÜKERRER SINAVI — %d noktaya karşı" % len(Y))
for ad, la, lo, slug, not_ in ADAY:
    yakin = sorted(((km(la, lo, z["lat"], z["lon"]), z) for z in Y
                    if z.get("lat") is not None),
                   key=lambda x: x[0])[:4]
    print("\n── %-14s %.4f, %.4f" % (ad, la, lo))
    print("   kaynak: %s" % not_)
    ihlal = [(d, z) for d, z in yakin if d < 3.0]
    print("   🔴 3 km İÇİNDE: %d" % len(ihlal))
    for d, z in yakin:
        im = "🔴" if d < 3.0 else "🟢"
        print("      %s %6.1f km  %-24s %s" % (im, d, z["ad"][:24],
                                               zincir(z)[:96]))
