# -*- coding: utf-8 -*-
"""③ DELIK SAYACI — YAYINDAKI CIKTI.  EVREN: EKRANDA GORULEN SEY.

🟢 BU BETIK HUKUM VERENDIR. "Kapali kara adacigi var mi?" sorusunun cevabi
buradan cikar, `olc_delik_kendi.py`den DEGIL.

NE OLCER: `donemler.js` (Osmanli + tabi) ve `devletler_harita.js` (yabanci)
govdelerinde KALAN interior ring'leri sayar ve ne kadarinin KARA oldugunu
olcer. Motor `delikleri_doldur()` (uret_petek.py:744) ile halkalari zaten
dolduruyor; burada kalan sey ya GOL ya da gol yakasi artigidir.

🟢 INDEKS ESLEMESI GEREKTIRMEZ: yayindaki govdeler kendi kendine yeten
   kapali poligonlardir, `girdi.yukle()` ile eslenmeleri gerekmez.
   ⇒ Taban kaysa bile bu betik dogru calisir. (Bkz. `_ortak.hizalama_sinavi`
     dokumantasyonu: 11 Agustos'ta indeksten esleyen betik dustu, bu dusmedi.)

⚠️ HAVUZ SIRASI TERSTIR (uret_petek.py:2703-2704):
     window.PARCALAR = HALKA havuzu · window.PARCA_HALKA = parca -> halka
   Ilk yazimda ters aldim.

Kosum:  py arac/olc_enklav/olc_delik_yayin.py
"""
import time
import _ortak as O
from shapely.geometry import Polygon
from shapely.ops import unary_union
from shapely.strtree import STRtree

t0 = time.time()
K_PARCA = O.oku_kara()
K_AGAC = STRtree(K_PARCA)
D, V, coz = O.oku_yayin_govdeleri()
print(f"KARA parcasi {len(K_PARCA)} · donem {len(D['DONEMLER'])} · "
      f"devlet {len(V['DEVLET_HARITA'])}  ({time.time()-t0:.0f} sn)")


def kara_kes(g):
    ps = [K_PARCA[int(q)] for q in K_AGAC.query(g)]
    if not ps:
        return Polygon()
    try:
        return g.intersection(unary_union(ps))
    except Exception:
        return g.buffer(0).intersection(unary_union(ps).buffer(0))


def delikler(parca_ix, halka_hav, parca_hav):
    out = []
    for pi in parca_ix or []:
        ks = parca_hav[pi]
        for j in ks[1:]:               # ks[0] = dis halka, gerisi DELIK
            out.append(halka_hav[j])
    return out


GUNLER = ["1300-06-15", "1400-06-15", "1500-06-15", "1600-06-15",
          "1700-06-15", "1800-06-15", "1900-06-15"]
ESIK = 100.0

print()
print("=" * 92)
print("YAYINDAKI CIKTIDA KALAN DELIKLER")
print("=" * 92)
print(f"{'gun':<13}{'kaynak':<10}{'delik':>7}{'ham km²':>12}"
      f"{'KARA km²':>12}{'SU km²':>12}")
BUYUK = []
for g in GUNLER:
    kumeler = []
    hs = []
    for d in D["DONEMLER"]:
        if d["f"] <= g < d["t"]:
            hs += delikler(d.get("o"), D["PARCALAR"], D["PARCA_HALKA"])
            hs += delikler(d.get("v"), D["PARCALAR"], D["PARCA_HALKA"])
    kumeler.append(("OSMANLI", hs))
    hs2 = []
    for dev in V["DEVLET_HARITA"]:
        for d in dev["dnm"]:
            if d["f"] <= g < d["t"]:
                hs2 += delikler(d.get("g"), V["DEVLET_PARCALAR"],
                                V["DEVLET_PARCA_HALKA"])
    kumeler.append(("yabanci", hs2))

    for ad, halkalar in kumeler:
        ham = kara = 0.0
        for cs in halkalar:
            a = O.halka_km2(cs)
            ham += a
            if a < 1.0:
                continue
            try:
                p = Polygon(cs)
                if not p.is_valid:
                    p = p.buffer(0)
                k = O.km2(kara_kes(p))
            except Exception:
                k = 0.0
            kara += k
            if k >= ESIK:
                c = Polygon(cs).centroid
                BUYUK.append((g, ad, k, c.y, c.x))
        print(f"{g:<13}{ad:<10}{len(halkalar):>7}{ham:>12,.0f}"
              f"{kara:>12,.0f}{ham-kara:>12,.0f}")

print()
print("=" * 92)
print(f"KARA olan (DOLDURULMAMIS) delikler ≥{ESIK:.0f} km²")
print("=" * 92)
if BUYUK:
    for g, ad, k, y, x in sorted(BUYUK, key=lambda r: (r[0], -r[2])):
        print(f"   {g}  {ad:<9} {k:>10,.0f} km²  {y:6.2f}K {x:7.2f}D")
else:
    print("   YOK.")
print()
print("11 Agu 2026 tabani (r1140):")
print("   OSMANLI kara deligi  0 · 6 · 7 · 21 · 21 · 20 · 19 km²  (gerisi GOL)")
print("   yabanci kara deligi  10.017 - 13.782 km²")
print("   En buyukleri Saimaa 2.461 · IJsselmeer 1.012 · Finlandiya gol")
print("   bolgesi 633 — hepsi GOL YAKASI ARTIGI, gercek enklav DEGIL.")
print()
print("🔴 HUKUM: Osmanli'da 100 km²'yi asan bir KARA deligi cikarsa")
print("   `delikleri_doldur` calismiyor demektir. Mazeret YOK.")
