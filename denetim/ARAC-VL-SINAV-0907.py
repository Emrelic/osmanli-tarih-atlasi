# -*- coding: utf-8 -*-
"""`vl` CAPA LISTESI — GRUPLAMA MANTIGININ SINAVI.

🔴 NE SINIYOR, NE SINAMIYOR — once bu:
   SINAR    hangi (k, statu) gruplari dogar · kac tane · adlari dogru mu ·
            adsiz/statusuz donem kac tane DUSER
   SINAMAZ  capanin KONUMU. `representative_point()` gercek Voronoi
            hucresinden alinir ve o ancak motor kosarken vardir.
            ⇒ konum icin damga: OLCULEMEDI (kosu bitince donemler.js'ten).

CLAUDE.md §11: "bir aleti taklit eden olcum onun ESIGINI de tasimali."
Burada esik yok ama EVREN var: motor `tabi` kumesini EKLEYICI KAPI ile
genisletiyor; bu simulasyon o genislemeyi YAPMAZ, yani gercek `tabi`
biraz daha buyuk olabilir. Ama eklenen indekslerin `v:` donemi YOKTUR
ve kod onlari zaten eliyor ⇒ GRUP KUMESI degismez.
"""
import collections
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi   # noqa: E402

Y = girdi.yukle(sessiz=True)
if len(Y) < 3000:
    raise SystemExit("SESSIZ SIFIR")

GUNLER = ["1500-06-15", "1600-06-15", "1683-07-14", "1700-06-15",
          "1800-06-15", "1830-06-15", "1878-06-15", "1900-06-15"]

print("=" * 70)
print("`vl` GRUPLARI — tarih tarih")
print("=" * 70)
dusen_toplam = collections.Counter()
for g in GUNLER:
    gruplar = {}
    tabi_n = 0
    for y in Y:
        dn = next((p for p in (y.get("v") or [])
                   if p.get("f") and p.get("t") and p["f"] <= g < p["t"]), None)
        if dn is None:
            continue
        tabi_n += 1
        ad = dn.get("k") or dn.get("kid")
        if not ad:
            dusen_toplam["adsiz"] += 1
            continue
        st = dn.get("statu")
        if not st:
            dusen_toplam["statusuz (vassal varsayilir)"] += 1
        gruplar.setdefault((ad, st or "vassal"), 0)
        gruplar[(ad, st or "vassal")] += 1
    print("\n%s   tâbi nokta %3d  ·  ETİKET %d" % (g, tabi_n, len(gruplar)))
    for (ad, st), n in sorted(gruplar.items(), key=lambda x: -x[1]):
        print("     %-40s (%s)  ×%d" % (ad[:40], st, n))

print("\n" + "=" * 70)
print("DUSEN: %s" % (dict(dusen_toplam) or "hicbiri"))
print("=" * 70)

# EVREN SINAVI — kulliyattaki BUTUN `v:` donemleri
adsiz = statusuz = 0
for y in Y:
    for p in (y.get("v") or []):
        if not (p.get("k") or p.get("kid")):
            adsiz += 1
        if not p.get("statu"):
            statusuz += 1
print("KULLIYAT: adsiz `v:` donemi %d · statusuz %d" % (adsiz, statusuz))
print("  ⇒ adsizlar ETIKET URETMEZ (kod onlari eliyor)")
print("  ⇒ statusuzler 'vassal' varsayilir (hukmun kendi kurali)")
print("\n⚪ OLCULEMEDI: capanin KONUMU — gercek Voronoi hucresi gerekiyor.")
