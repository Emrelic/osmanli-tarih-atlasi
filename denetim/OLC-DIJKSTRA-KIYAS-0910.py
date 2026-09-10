# -*- coding: utf-8 -*-
"""DIJKSTRA KIYASI — saf Python vs scipy.sparse.csgraph. 10 Eylül 2026

🔴 NİÇİN: `OLC-MAKINE-0910.py` ölçtü — koşunun benzetiminde maliyetin
   **%64'ü saf Python döngüsü**. Yani darboğaz Shapely değil, NumPy değil,
   **yorumlayıcının kendisi**. Bir makine değişikliği tek-çekirdek hızını
   en iyi ~2-2,5 kat artırır; bu döngüyü C'ye taşımak KAT KAT fazlasını
   verebilir — ve BEDAVA.

⚠️ BU ÖLÇÜM BİR ÖNERİ DEĞİL BİR SINAV: kazanç ölçülmeden "kodu düzeltelim"
   demek, makine almak kadar dayanaksız olurdu. İki taraf da AYNI problemi
   çözüyor ve SONUÇLARI KARŞILAŞTIRILIYOR — yoksa hızlı ama yanlış bir
   cevap "kazanç" sanılırdı (`D058`: doğru sonucu güvenilmez yoldan veren
   alet kendini ELE VERMEZ).
"""
import heapq, sys, time

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

NX = NY = 420
N = NX * NY
maliyet = [1.0 + (i % 7) * 0.3 for i in range(N)]
TOHUM = [0, N - 1, N // 2]
KOMSU = ((1, 0), (-1, 0), (0, 1), (0, -1))

# ── ① SAF PYTHON — motorun bugünkü yöntemi ──────────────────────────────
t = time.perf_counter()
uzak = [float("inf")] * N
q = [(0.0, i) for i in TOHUM]
for i in TOHUM:
    uzak[i] = 0.0
heapq.heapify(q)
while q:
    d, i = heapq.heappop(q)
    if d > uzak[i]:
        continue
    x, y = i % NX, i // NX
    for dx, dy in KOMSU:
        nx_, ny_ = x + dx, y + dy
        if 0 <= nx_ < NX and 0 <= ny_ < NY:
            j = ny_ * NX + nx_
            nd = d + maliyet[j]
            if nd < uzak[j]:
                uzak[j] = nd
                heapq.heappush(q, (nd, j))
t_py = time.perf_counter() - t
print("① SAF PYTHON (bugünkü)     %7.3f sn" % t_py)

# ── ② SCIPY — aynı problem, C tarafında ─────────────────────────────────
try:
    import numpy as np
    from scipy.sparse import coo_matrix
    from scipy.sparse.csgraph import dijkstra
    import scipy
    t = time.perf_counter()
    m = np.asarray(maliyet, dtype=np.float64)
    satir, sutun, deger = [], [], []
    idx = np.arange(N).reshape(NY, NX)
    for dx, dy in KOMSU:
        a = idx[max(0, -dy):NY - max(0, dy), max(0, -dx):NX - max(0, dx)]
        b = idx[max(0, dy):NY - max(0, -dy), max(0, dx):NX - max(0, -dx)]
        satir.append(a.ravel()); sutun.append(b.ravel())
        deger.append(m[b.ravel()])
    G = coo_matrix((np.concatenate(deger),
                    (np.concatenate(satir), np.concatenate(sutun))),
                   shape=(N, N)).tocsr()
    d2 = dijkstra(G, directed=True, indices=TOHUM, min_only=True)
    t_sp = time.perf_counter() - t
    print("② SCIPY %s          %7.3f sn" % (scipy.__version__, t_sp))

    # 🔴 SONUÇ SINAVI — hızlı ama YANLIŞ bir cevap kazanç değildir.
    p = np.asarray(uzak, dtype=np.float64)
    sonlu = np.isfinite(p) & np.isfinite(d2)
    fark = np.abs(p[sonlu] - d2[sonlu]).max() if sonlu.any() else float("nan")
    ayni_sonsuz = int((~np.isfinite(p)).sum()) == int((~np.isfinite(d2)).sum())
    print()
    print("   SONUÇ SINAVI  en büyük fark %.3e · sonsuz sayısı aynı: %s"
          % (fark, ayni_sonsuz))
    ok = (fark < 1e-6) and ayni_sonsuz
    print("   %s" % ("🟢 İKİ YÖNTEM AYNI CEVABI VERİYOR"
                     if ok else "🔴 CEVAPLAR AYRIŞIYOR — kazanç SAYILMAZ"))
    if ok:
        print()
        print("   ⇒ KAZANÇ  %.1f KAT  (%.3f sn → %.3f sn)"
              % (t_py / t_sp, t_py, t_sp))
except ImportError as e:
    print("② SCIPY YOK — kurulu değil (%s)" % e)
    print("   ⇒ ÖLÇÜLEMEDİ. 'Kazanç yok' DEĞİL, 'ölçülemedi'.")
except Exception as e:
    print("② SCIPY ÖLÇÜLEMEDİ: %s: %s" % (type(e).__name__, e))
