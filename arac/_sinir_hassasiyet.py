# -*- coding: utf-8 -*-
"""SINIR YERLESIMI YONTEMI — hassasiyeti OLC, tahmin etme.

Emre'nin fikri: sinirin iki yakasina yerlesim koy, petek kenari
aralarindan gecsin. Motorla UYUMLU (Voronoi = dik ortay).

🔴 OLCULECEK KISIT: dik ortay TAM ORTADAN gecer. Gercek sinir iki
   sehrin tam ortasinda degilse sinir KAYAR. Sapma NE KADAR?

Iki sey olculuyor:
  ① 1923'te sinir komsusu olan gercek nokta ciftleri: kac tane, ne kadar
     uzak, ve dik ortayi gercek sinirdan ne kadar sapar
  ② Nokta SIKLASTIKCA sapma nasil kuculuyor (Emre'nin (a) sikki)
"""
import collections
import math
import sys

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

Y = girdi.yukle() if hasattr(girdi, "yukle") else girdi.oku()
if isinstance(Y, tuple):
    Y = Y[0]
GUN = "1923-06-15"


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "tabi"
    for p in (y.get("s") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return p.get("d")
    return None


def km(a, b):
    la = math.radians((a[0] + b[0]) / 2)
    return math.hypot((a[1] - b[1]) * 111.32 * math.cos(la),
                      (a[0] - b[0]) * 110.57)


nokta = [(y, sahip(y, GUN)) for y in Y if y.get("lat") is not None]
nokta = [(y, s) for y, s in nokta if s]
print("1923-06-15'te sahipli nokta: %d" % len(nokta))

# --- SINIR CIFTLERI: farkli sahipli ve birbirine <200 km
ciftler = []
for i in range(len(nokta)):
    yi, si = nokta[i]
    for j in range(i + 1, len(nokta)):
        yj, sj = nokta[j]
        if si == sj:
            continue
        d = km((yi["lat"], yi["lon"]), (yj["lat"], yj["lon"]))
        if d < 200:
            ciftler.append((d, si, sj, yi["ad"], yj["ad"]))

ciftler.sort()
print("farkli sahipli, <200 km komsu CIFT: %d" % len(ciftler))
print()

# --- SAPMA: dik ortay tam ortada; gercek sinir ciftin ORTASINDA DEGILSE
#     en kotu sapma d/2'dir. Ortalama beklenen sapma ~ d/4.
if ciftler:
    ds = [c[0] for c in ciftler]
    ds.sort()
    n = len(ds)
    print("CIFT MESAFESI (km) — sinir bu ciftlerin ORTASINDAN gececek")
    for et, i in (("%25", n // 4), ("ortanca", n // 2),
                  ("%75", 3 * n // 4), ("%90", int(n * 0.9))):
        print("   %-9s %7.1f km   ⇒ en kotu sapma %6.1f km" % (et, ds[i], ds[i] / 2))
    print()
    print("📌 EN KOTU SAPMA = cift mesafesinin YARISI. Ortanca cift %.0f km ise"
          % ds[n // 2])
    print("   sinir gercek yerinden en fazla %.0f km kayabilir." % (ds[n // 2] / 2))
    print()
    print("SIKLASTIRMA ETKISI — Emre'nin (a) sikki")
    for hedef in (100, 50, 25, 10, 5):
        print("   cift mesafesi %3d km olsaydi  →  en kotu sapma %5.1f km"
              % (hedef, hedef / 2.0))

print()
print("=== EN SIK SINIR CIFTLERI (ilk 12, en yakin) ===")
for d, si, sj, ai, aj in ciftler[:12]:
    print("   %6.1f km  %-22s (%s)  ↔  %-22s (%s)"
          % (d, ai[:22], si[:12], aj[:22], sj[:12]))

print()
print("=== HANGI SINIRLAR EN SEYREK (en yakin cift bile uzak) ===")
enyakin = {}
for d, si, sj, ai, aj in ciftler:
    k = tuple(sorted((si, sj)))
    if k not in enyakin:
        enyakin[k] = (d, ai, aj)
uzak = sorted(enyakin.items(), key=lambda x: -x[1][0])[:12]
for (a, b), (d, ai, aj) in uzak:
    print("   %-16s ↔ %-16s en yakin cift %6.1f km  (%s ↔ %s)"
          % (a[:16], b[:16], d, ai[:18], aj[:18]))
