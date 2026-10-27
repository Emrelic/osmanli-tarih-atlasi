"""BAGIMSIZ CAPRAZ SINAV: motorun heapq Dijkstra'si (dok_*.pkl'deki `uzak`) ile scipy.sparse.csgraph
Dijkstra'sinin AYNI girdilerle (kara, surtunme, nehir kenar bedeli, bogaz yasagi) verdigi bedel alani.
Ve ikinci olarak: nehir/egimin etkisini ayri ayri olcer (surt=1 / nehir=0 varyantlari) — dag, nehir davranisi.
Kullanim: py -X utf8 dijk_capraz.py ad"""
import math, os, pickle, sys
import numpy as np
from scipy.sparse import csr_matrix
from scipy.sparse.csgraph import dijkstra

SP = os.environ.get("YDOG_DIZIN") or os.path.join(__import__("tempfile").gettempdir(), "ydog1018")
os.makedirs(SP, exist_ok=True)
BETIK_DIZIN = os.path.dirname(os.path.abspath(__file__))
ad = sys.argv[1]
D = pickle.load(open(os.path.join(SP, "dok_%s.pkl" % ad), "rb"))
g = D["grid"]; nx, ny = g["_kvnx"], g["_kvny"]; y0 = g["_kvy0"]
kara = D["kara"].ravel(); surt = D["surt"].ravel().astype(np.float64)
YON = D["yon"]; YS = len(YON); KVDY = D["KVDY"]
nbedel, nbayrak = D["nehir"] if D["nehir"] is not None else ({}, None)
kvsu = D["kvsu"]
N = nx * ny
lat = y0 + (np.arange(ny) + 0.5) * 0.05
dx_j = KVDY * np.cos(np.radians(lat))        # satir basina hucre genisligi (km)


def kur(surtunme, nehir_var, bogaz_var):
    rows, cols, w = [], [], []
    H = np.arange(N)
    J, I = np.divmod(H, nx)
    for yi, (di, dj) in enumerate(YON):
        a, b = I + di, J + dj
        ok = kara & (a >= 0) & (a < nx) & (b >= 0) & (b < ny)
        k = np.where(ok, b * nx + a, 0)
        ok &= kara[k]
        h = H[ok]; kk = k[ok]
        wt = np.hypot(dx_j[J[ok]] * di, KVDY * dj) * (surtunme[kk] if surtunme is not None else 1.0)
        if bogaz_var and kvsu:
            keep = np.fromiter((((int(x) * YS + yi) not in kvsu) for x in h), dtype=bool, count=len(h))
            h, kk, wt = h[keep], kk[keep], wt[keep]
        if nehir_var and nbayrak is not None:
            ek = np.zeros(len(h))
            idx = {int(x): n for n, x in enumerate(h)}
            for key, c in nbedel.items():
                if key % YS != yi:
                    continue
                hh = key // YS
                if nbayrak[hh] and hh in idx:
                    ek[idx[hh]] += c
            wt = wt + ek
        rows.append(h); cols.append(kk); w.append(wt)
    G = csr_matrix((np.concatenate(w), (np.concatenate(rows), np.concatenate(cols))), shape=(N, N))
    return G


kaynak = np.array(sorted(D["tohum"].keys()), dtype=np.int64)


def coz(surtunme, nehir_var, bogaz_var):
    G = kur(surtunme, nehir_var, bogaz_var)
    d = dijkstra(G, directed=True, indices=kaynak, min_only=True)
    return d.reshape(ny, nx)


eng = D["uzak"].astype(np.float64)
mine = coz(surt, True, True)
fin = np.isfinite(eng) & np.isfinite(mine)
print("[%s] ızgara %dx%d, kara %d, tohum hücresi %d, yön %d" % (ad, nx, ny, kara.sum(), len(kaynak), YS))
print("  erişilebilir hücre: motor %d · bağımsız %d · ikisi de %d · yalnız biri %d"
      % (np.isfinite(eng).sum(), np.isfinite(mine).sum(), fin.sum(),
         (np.isfinite(eng) ^ np.isfinite(mine)).sum()))
fark = np.abs(eng[fin] - mine[fin])
print("  |motor − bağımsız| bedel farkı: maks %.4g km · 1e-3'ten büyük hücre %d / %d"
      % (fark.max() if len(fark) else 0, int((fark > 1e-3).sum()), fin.sum()))
# varyantlar: duz (surt=1), nehirsiz, bogazsiz
for ad_v, (s, n, b) in {"düz arazi (sürtünme 1, nehir yok)": (None, False, True),
                        "yalnız nehir kapalı": (surt, False, True),
                        "yalnız eğim kapalı": (None, True, True)}.items():
    v = coz(s, n, b)
    f2 = np.isfinite(v) & np.isfinite(eng)
    oran = eng[f2] / np.maximum(v[f2], 1e-9)
    print("  %-38s: motor/varyant bedel oranı medyan %.3f · %%90 %.3f · maks %.3f"
          % (ad_v, np.nanmedian(oran[v[f2] > 20]), np.nanpercentile(oran[v[f2] > 20], 90),
             np.nanmax(oran[v[f2] > 20])))
np.save(os.path.join(SP, "bagimsiz_%s.npy" % ad), mine.astype(np.float32))
