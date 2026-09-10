# -*- coding: utf-8 -*-
"""CAPRAZ PARALEL — PAYLASILAN STRtree IS PARCACIGI GUVENLI MI?

NICIN: FAZ 1 (paralel) icinde delikleri_doldur() ve gosterim_duzelt()
MODUL DUZEYINDEKI _TUM_AGAC / _KB_AGAC agaclarini sorguluyor. GEOS'un
STRtree'si TARIHSEL OLARAK ILK SORGUDA kurulur (tembel build). Tembelse,
dort is parcacigi ayni anda ilk sorguyu yaparsa GEOS icinde YARIS olur.

BU ALET MOTORU KOSTURMAZ. Yalniz shapely'nin kendi davranisini olcer:
  (A) ilk sorgu ile sonraki sorgular arasinda SURE UCURUMU var mi
      (varsa tembel build, yoksa yapici icinde kurulmus)
  (B) SOGUK bir agaci dort is parcacigindan AYNI ANDA sorgulamak,
      sirali sonucla BIREBIR ayni sonucu veriyor mu (100 tur)

ONGORU (olcumden ONCE yazildi, D022):
  (A) shapely 2.1'de build YAPICIDA olur  -> ucurum YOK bekliyorum
  (B) 100 turun 100'u DENK bekliyorum
  Curursa: FAZ 1 gercek bir yaris tasiyor ve sinav onu GOREMEZ.
"""
import sys, io, time, json, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

import numpy as np
import shapely
from shapely import STRtree, Point, box
from concurrent.futures import ThreadPoolExecutor

print("shapely", shapely.__version__, "| geos", shapely.geos_version)
rng = np.random.default_rng(20260910)

# ---------- (A) tembel build var mi -------------------------------------
N = 200000
noktalar = shapely.points(rng.uniform(-180, 180, N), rng.uniform(-60, 85, N))
t0 = time.perf_counter()
agac = STRtree(noktalar)
t_yapici = time.perf_counter() - t0

sorgu = box(10, 10, 12, 12)
t0 = time.perf_counter(); agac.query(sorgu); t_ilk = time.perf_counter() - t0
sonraki = []
for _ in range(20):
    t0 = time.perf_counter(); agac.query(sorgu); sonraki.append(time.perf_counter() - t0)
t_sonra = sum(sonraki) / len(sonraki)
oran = t_ilk / t_sonra if t_sonra > 0 else float("inf")
tembel = oran > 5.0

print("(A) yapici %.4f sn | ILK sorgu %.6f sn | sonraki ort %.6f sn | oran %.1fx"
      % (t_yapici, t_ilk, t_sonra, oran))
print("    HUKUM:", "TEMBEL BUILD (ilk sorguda kuruluyor) - YARIS RISKI"
      if tembel else "build YAPICIDA - ilk sorgu ayricalikli DEGIL")

# ---------- (B) soguk agac + 4 is parcacigi, 100 tur --------------------
kutular = [box(x, y, x + 3, y + 3)
           for x, y in rng.uniform(-170, 80, (64, 2))]

def sirali_sonuc(a):
    return [sorted(int(q) for q in a.query(k)) for k in kutular]

ayrisan, turlar = 0, 100
for tur in range(turlar):
    pts = shapely.points(rng.uniform(-180, 180, 20000), rng.uniform(-60, 85, 20000))
    a1 = STRtree(pts)                      # SOGUK — hic sorgulanmadi
    with ThreadPoolExecutor(max_workers=4) as ex:
        par = list(ex.map(lambda k: sorted(int(q) for q in a1.query(k)), kutular))
    a2 = STRtree(pts)                      # ayri, soguk, SIRALI taban
    ref = sirali_sonuc(a2)
    if par != ref:
        ayrisan += 1

print("(B) soguk agac · 4 is parcacigi · %d tur -> AYRISAN %d" % (turlar, ayrisan))
print("    HUKUM:", "🔴 YARIS VAR" if ayrisan else "🟢 esszamanli sorgu DENK")

rapor = {"shapely": shapely.__version__, "geos": shapely.geos_version,
         "A_ilk_sorgu_sn": t_ilk, "A_sonraki_ort_sn": t_sonra,
         "A_oran": oran, "A_tembel_build": bool(tembel),
         "B_tur": turlar, "B_ayrisan": ayrisan,
         "hukum": ("YARIS" if ayrisan else "DENK")}
yol = os.path.join(os.path.dirname(__file__), "OLCUM-CAPRAZ-PARALEL-STRTREE-0910.json")
json.dump(rapor, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("->", yol)
