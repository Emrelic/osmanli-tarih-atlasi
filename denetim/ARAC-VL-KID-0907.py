# -*- coding: utf-8 -*-
"""`vl` ETIKETI: `k` ile mi `kid` ile mi gruplanmali?

ARAC-VL-SINAV-0907 `k`yi kullandi ve IKI KUSUR gosterdi:
  ① AYNI POLITY IKI ETIKET  "Bogdan Voyvodaligi" + "Bogdan Voyvodaligi
     (Osmanli tabii)"  ·  "Orta Macar Kralligi (Tokoli Imre)" +
     "Orta Macar Kralligi — Ilona Zrinyi'nin M..."
  ② `k` AD DEGIL DUZYAZI    "Arvanid sancagi — nominal tabiiyet, KESI..."
     Haritaya boyle bir metin yazilamaz.

HUKUM-VASSAL-GORUNUM-0906.md zaten `kid:`i (kunye kimligi) bu is icin
ekletmisti. Bu betik olcer: `kid` ile gruplamak kac etiketi birlestirir,
ve kac donem `kid`SIZ kalir (yani `k`ye dusmek zorunda).
"""
import collections
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi   # noqa: E402

Y = girdi.yukle(sessiz=True)
DEV = {d["id"]: d for d in girdi.oku_devletler() if d.get("id")}
print("kunye: %d" % len(DEV))
if len(Y) < 3000 or len(DEV) < 100:
    raise SystemExit("SESSIZ SIFIR")

GUNLER = ["1500-06-15", "1600-06-15", "1683-07-14", "1830-06-15", "1900-06-15"]
print("=" * 72)
print("%-12s  %-8s  %-8s  %s" % ("tarih", "k ile", "kid ile", "KAZANC"))
print("=" * 72)
ayrinti = {}
for g in GUNLER:
    kg, kidg = set(), set()
    for y in Y:
        dn = next((p for p in (y.get("v") or [])
                   if p.get("f") and p.get("t") and p["f"] <= g < p["t"]), None)
        if dn is None:
            continue
        ad = dn.get("k") or dn.get("kid")
        if ad:
            kg.add((ad, dn.get("statu") or "vassal"))
        kimlik = dn.get("kid")
        gosterim = None
        if kimlik and kimlik in DEV:
            gosterim = DEV[kimlik].get("ad") or kimlik
        elif kimlik:
            gosterim = kimlik
        elif ad:
            gosterim = ad
        if gosterim:
            kidg.add((gosterim, dn.get("statu") or "vassal"))
    ayrinti[g] = kidg
    print("%-12s  %-8d  %-8d  %+d" % (g, len(kg), len(kidg), len(kidg) - len(kg)))

print("\n" + "=" * 72)
print("kid ile URETILEN ETIKETLER (ornek: 1683-07-14 · 1830-06-15)")
print("=" * 72)
for g in ("1683-07-14", "1830-06-15"):
    print("\n%s" % g)
    for ad, st in sorted(ayrinti[g]):
        print("   %-46s (%s)" % (ad[:46], st))

# KAPSAMA
kidsiz = ksiz = ikisi = toplam = 0
kidsiz_ornek = collections.Counter()
for y in Y:
    for p in (y.get("v") or []):
        toplam += 1
        k, kid = p.get("k"), p.get("kid")
        if not kid:
            kidsiz += 1
            if k:
                kidsiz_ornek[k] += 1
        if not k:
            ksiz += 1
        if not k and not kid:
            ikisi += 1
print("\n" + "=" * 72)
print("KAPSAMA: `v:` donemi %d · kid YOK %d · k YOK %d · IKISI DE YOK %d"
      % (toplam, kidsiz, ksiz, ikisi))
print("kid'i olmayan en sik `k` degerleri:")
for k, n in kidsiz_ornek.most_common(8):
    print("   %-50s ×%d" % (k[:50], n))
