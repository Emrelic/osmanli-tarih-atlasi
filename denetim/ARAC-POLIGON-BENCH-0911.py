"""
POLIGON FIYAT -- rasterio.features.shapes icin kucuk, SENTETIK bir throughput
olcumu. Depo icindeki hicbir dosyaya dokunmuyor, hicbir agir isi tetiklemiyor.
cKDTree ile ucuz (hafif bellekli) bir Voronoi-benzeri etiketleme uretilir,
sonra rasterio.features.shapes'in GERCEK hizini bu makinede olcer.
"""
import time
import numpy as np
from scipy.spatial import cKDTree
import rasterio
import rasterio.features as rf

def bench(nx, ny, n_owners, seed=42):
    rng = np.random.default_rng(seed)
    seed_pts = rng.integers(0, max(nx, ny), size=(n_owners, 2)).astype(np.float64)
    tree = cKDTree(seed_pts)

    yy, xx = np.meshgrid(np.arange(ny), np.arange(nx), indexing="ij")
    pts = np.column_stack([yy.ravel(), xx.ravel()]).astype(np.float64)

    t_q0 = time.perf_counter()
    _, idx = tree.query(pts, workers=-1)
    t_q1 = time.perf_counter()
    arr = idx.astype(np.int32).reshape(ny, nx)

    t0 = time.perf_counter()
    n_shapes = 0
    for geom, val in rf.shapes(arr, transform=rasterio.Affine.identity()):
        n_shapes += 1
    t1 = time.perf_counter()
    return arr.size, n_shapes, (t_q1 - t_q0), (t1 - t0)

if __name__ == "__main__":
    cases = [(1000, 1000, 500), (1826, 1826, 3805)]
    for (nx, ny, n_owners) in cases:
        cells, nshapes, tq, dt = bench(nx, ny, n_owners)
        rate = cells / dt if dt > 0 else float('inf')
        print(f"nx={nx} ny={ny} owners={n_owners} hucre={cells:,} "
              f"poligon={nshapes:,} etiketleme={tq:.3f}s "
              f"shapes_sure={dt:.3f}s hiz={rate:,.0f} hucre/sn")
