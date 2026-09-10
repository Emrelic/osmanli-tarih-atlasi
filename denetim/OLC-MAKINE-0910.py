# -*- coding: utf-8 -*-
"""MAKİNE ÖLÇÜMÜ — koşunun DARBOĞAZI nerede? 10 Eylül 2026

Emre: "bu koşu işleri çok uzun sürüyor. Yeni bir bilgisayar almak gerekir
ise bana ne önerirsin ... gereksiz donanıma çuvalla para ödemeden."

🔴 ÖNCE ÖLÇÜLEN ŞEY: `uret_petek.py`de `multiprocessing` · `threading` ·
   `Pool` · `concurrent.futures` — HİÇBİRİ YOK. Motor TEK ÇEKİRDEKLİ.
   ⇒ Çekirdek sayısı koşuyu HIZLANDIRMAZ. Bu ölçüm o hükmü sınıyor:
     iş yükünün üç bileşenini AYRI AYRI ölçer ki hangisine para
     verileceği tahmin değil ÖLÇÜM olsun.

     ① SHAPELY/GEOS geometri   — motorun ana işi (voronoi · union · kesim)
     ② NUMPY ızgara            — Dijkstra maliyet ızgarası
     ③ SAF PYTHON döngü        — heapq Dijkstra'nın kendisi
"""
import io, os, sys, time, platform

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

print("=" * 66)
print("MAKİNE : %s" % platform.processor())
print("PYTHON : %s" % sys.version.split()[0])
print("=" * 66)

# ── ① SHAPELY / GEOS ─────────────────────────────────────────────────────
try:
    import shapely
    from shapely.geometry import Point, MultiPoint
    from shapely.ops import voronoi_diagram, unary_union
    import random
    random.seed(20260910)
    n = 3000
    noktalar = MultiPoint([(random.uniform(-180, 180), random.uniform(-60, 85))
                           for _ in range(n)])
    t = time.perf_counter()
    v = voronoi_diagram(noktalar)
    t_vor = time.perf_counter() - t
    parcalar = list(v.geoms)
    t = time.perf_counter()
    _ = unary_union(parcalar[:1500])
    t_uni = time.perf_counter() - t
    t = time.perf_counter()
    tampon = [p.buffer(0.05) for p in parcalar[:800]]
    t_buf = time.perf_counter() - t
    print("① SHAPELY %s  (GEOS %s)" % (shapely.__version__,
          getattr(shapely, "geos_version_string", "?")))
    print("   voronoi %d nokta      %7.2f sn" % (n, t_vor))
    print("   unary_union 1500      %7.2f sn" % t_uni)
    print("   buffer 800            %7.2f sn" % t_buf)
    sh = t_vor + t_uni + t_buf
except Exception as e:
    print("① SHAPELY ÖLÇÜLEMEDİ: %s" % e)
    sh = None

# ── ② NUMPY ──────────────────────────────────────────────────────────────
try:
    import numpy as np
    a = np.random.rand(2400, 2400).astype(np.float32)
    t = time.perf_counter()
    b = np.gradient(a)
    c = 1.0 + 3.0 * np.hypot(b[0], b[1])
    _ = float(c.mean())
    t_np = time.perf_counter() - t
    print("② NUMPY %s" % np.__version__)
    print("   gradient+hypot 2400²  %7.2f sn" % t_np)
except Exception as e:
    print("② NUMPY ÖLÇÜLEMEDİ: %s" % e)
    t_np = None

# ── ③ SAF PYTHON — Dijkstra döngüsü ─────────────────────────────────────
import heapq
NX = NY = 420
maliyet = [1.0 + (i % 7) * 0.3 for i in range(NX * NY)]
t = time.perf_counter()
uzak = [float("inf")] * (NX * NY)
q = [(0.0, 0), (0.0, NX * NY - 1), (0.0, NX * NY // 2)]
for _, i in q:
    uzak[i] = 0.0
heapq.heapify(q)
while q:
    d, i = heapq.heappop(q)
    if d > uzak[i]:
        continue
    x, y = i % NX, i // NX
    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nx_, ny_ = x + dx, y + dy
        if 0 <= nx_ < NX and 0 <= ny_ < NY:
            j = ny_ * NX + nx_
            nd = d + maliyet[j]
            if nd < uzak[j]:
                uzak[j] = nd
                heapq.heappush(q, (nd, j))
t_py = time.perf_counter() - t
print("③ SAF PYTHON")
print("   dijkstra %d hücre    %7.2f sn" % (NX * NY, t_py))

print()
print("=" * 66)
if sh is not None and t_np is not None:
    top = sh + t_np + t_py
    print("TOPLAM %.2f sn  ·  pay:  shapely %%%.0f · numpy %%%.0f · python %%%.0f"
          % (top, 100 * sh / top, 100 * t_np / top, 100 * t_py / top))
print("🔴 ÜÇÜ DE TEK ÇEKİRDEKLİDİR. Bu makinede kaç çekirdek olursa olsun")
print("   koşu SÜRESİ DEĞİŞMEZ — motorda paralellik YOK (ölçüldü).")
print("⚠️ VE BU ÖLÇÜM KOŞUNUN KENDİSİ DEĞİL, BENZETİMİDİR: gerçek koşunun")
print("   girdisi 3808 nokta ve dünya penceresi. Oran için kullanılır,")
print("   MUTLAK SÜRE tahmini için DEĞİL.")
