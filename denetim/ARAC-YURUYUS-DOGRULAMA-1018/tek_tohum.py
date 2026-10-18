"""TEK TOHUM ERISIMI: tek yerlesimin (komsu yok sayilir) 5/7/10 gunde erisebildigi kara alani ve esdeger yaricap.
Duz ova (surtunme 1, nehir yok) ile gercek arazi (egim+nehir+bogaz) karsilastirilir. Motorun girdileriyle (dok_*.pkl),
scipy Dijkstra'si ile (bagimsiz). Kullanim: py -X utf8 tek_tohum.py ad kenar_derece ornek_sayisi"""
import math, os, pickle, random, sys
import numpy as np
from scipy.sparse import csr_matrix
from scipy.sparse.csgraph import dijkstra

SP = os.environ.get("YDOG_DIZIN") or os.path.join(__import__("tempfile").gettempdir(), "ydog1018")
os.makedirs(SP, exist_ok=True)
BETIK_DIZIN = os.path.dirname(os.path.abspath(__file__))
ad, marj, ns = sys.argv[1], float(sys.argv[2]), int(sys.argv[3])
D = pickle.load(open(os.path.join(SP, "dok_%s.pkl" % ad), "rb"))
g = D["grid"]; nx, ny = g["_kvnx"], g["_kvny"]; y0 = g["_kvy0"]
kara = D["kara"].ravel(); surt = D["surt"].ravel().astype(np.float64)
YON = D["yon"]; YS = len(YON); KVDY = D["KVDY"]
nbedel, nbayrak = D["nehir"] if D["nehir"] is not None else ({}, None)
kvsu = D["kvsu"]
N = nx * ny
lat = y0 + (np.arange(ny) + 0.5) * 0.05
dx_j = KVDY * np.cos(np.radians(lat))
km2 = ((0.05 * 111.32) ** 2 * np.cos(np.radians(lat)))[:, None] * np.ones((1, nx))


def kur(surtunme, nehir_var):
    rows, cols, w = [], [], []
    H = np.arange(N); J, I = np.divmod(H, nx)
    for yi, (di, dj) in enumerate(YON):
        a, b = I + di, J + dj
        ok = kara & (a >= 0) & (a < nx) & (b >= 0) & (b < ny)
        k = np.where(ok, b * nx + a, 0); ok &= kara[k]
        h = H[ok]; kk = k[ok]
        wt = np.hypot(dx_j[J[ok]] * di, KVDY * dj) * (surtunme[kk] if surtunme is not None else 1.0)
        if nehir_var and nbayrak is not None:
            ek = np.zeros(len(h)); idx = {int(x): n for n, x in enumerate(h)}
            for key, c in nbedel.items():
                if key % YS == yi and nbayrak[key // YS] and (key // YS) in idx:
                    ek[idx[key // YS]] += c
            wt = wt + ek
        rows.append(h); cols.append(kk); w.append(wt)
    return csr_matrix((np.concatenate(w), (np.concatenate(rows), np.concatenate(cols))), shape=(N, N))


Gg = kur(surt, True)
Gd = kur(None, False)
kmsaat = D["NEHIR_KM_SAAT"]
Bler = [40 * kmsaat, 56 * kmsaat, 80 * kmsaat]
# orneklem: tohum hucresi ic bolgede, kara
m = int(marj / 0.05)
adaylar = [h for h in D["tohum"] if m <= h // nx < ny - m and m <= h % nx < nx - m]
random.seed(11)
orn = random.sample(adaylar, min(ns, len(adaylar)))
print("[%s] ornek %d tohum (ic bolge, kenar %g°)" % (ad, len(orn), marj))
sat = {"gercek": {B: [] for B in Bler}, "duz": {B: [] for B in Bler}}
for h in orn:
    for etiket, G in (("gercek", Gg), ("duz", Gd)):
        d = dijkstra(G, directed=True, indices=h)
        for B in Bler:
            sat[etiket][B].append(float((km2.ravel() * (d <= B)).sum()))
for etiket in ("duz", "gercek"):
    s = []
    for B, gun in zip(Bler, (5, 7, 10)):
        a = np.array(sat[etiket][B])
        r = np.sqrt(a / math.pi)
        s.append("%d gün: alan medyan %s km² (p10 %s · p90 %s) · eş-yarıçap medyan %.0f km (B=%.0f) · alan/(πB²) %.2f"
                 % (gun, format(int(np.median(a)), ","), format(int(np.percentile(a, 10)), ","),
                    format(int(np.percentile(a, 90)), ","), np.median(r), B, np.median(a) / (math.pi * B * B)))
    print("  %-7s" % etiket + "\n          ".join(s))
a5 = np.array(sat["gercek"][Bler[0]]); a10 = np.array(sat["gercek"][Bler[2]])
print("  gerçek arazide 10g/5g alan oranı medyan %.2f (düz ovada ideal 4,0)" % np.median(a10 / a5))
