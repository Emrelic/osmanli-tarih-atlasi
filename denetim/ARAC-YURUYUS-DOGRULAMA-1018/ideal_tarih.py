"""IDEAL (kapisiz) TARIHLI YURUYUS vs YAYINLANMIS (puan kapili) BANT — ayni ic kutu, ayni tarih.
Ideal: o tarihte sahibi olan (d/v/s) yerlesimlerin hepsi tohum, motorun girdileriyle (egim+nehir+bogaz), scipy Dijkstra.
Yayin: ufuk_bantlari bant geometrisi (devlet birlesimi) ∩ kutu.
Kullanim: py -X utf8 ideal_tarih.py ad lon0,lat0,lon1,lat1 tarih[,tarih...]"""
import json, math, os, sys, pickle
import numpy as np
import shapely
from shapely.geometry import box, Polygon
from shapely.ops import unary_union
from scipy import ndimage
from scipy.sparse import csr_matrix
from scipy.sparse.csgraph import dijkstra

SP = os.environ.get("YDOG_DIZIN") or os.path.join(__import__("tempfile").gettempdir(), "ydog1018")
os.makedirs(SP, exist_ok=True)
BETIK_DIZIN = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BETIK_DIZIN)
import bantyukle
KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
KMD = 6371.0088 * math.pi / 180
ad = sys.argv[1]
ib = tuple(float(x) for x in sys.argv[2].split(","))
tarihler = sys.argv[3].split(",")
D = pickle.load(open(os.path.join(SP, "dok_%s.pkl" % ad), "rb"))
g = D["grid"]; nx, ny = g["_kvnx"], g["_kvny"]; x0, y0 = g["_kvx0"], g["_kvy0"]
kara = D["kara"].ravel(); surt = D["surt"].ravel().astype(np.float64)
YON = D["yon"]; YS = len(YON); KVDY = D["KVDY"]
nbedel, nbayrak = D["nehir"]; N = nx * ny
lat = y0 + (np.arange(ny) + 0.5) * 0.05
lon = x0 + (np.arange(nx) + 0.5) * 0.05
dx_j = KVDY * np.cos(np.radians(lat))
km2g_ = ((0.05 * 111.32) ** 2 * np.cos(np.radians(lat)))[:, None] * np.ones((1, nx))
kmsaat = D["NEHIR_KM_SAAT"]
Bler = [40 * kmsaat, 56 * kmsaat, 80 * kmsaat]


def kur():
    rows, cols, w = [], [], []
    H = np.arange(N); J, I = np.divmod(H, nx)
    kvsu = D["kvsu"]
    for yi, (di, dj) in enumerate(YON):
        a, b = I + di, J + dj
        ok = kara & (a >= 0) & (a < nx) & (b >= 0) & (b < ny)
        k = np.where(ok, b * nx + a, 0); ok &= kara[k]
        h = H[ok]; kk = k[ok]
        wt = np.hypot(dx_j[J[ok]] * di, KVDY * dj) * surt[kk]
        if kvsu:
            keep = np.fromiter((((int(x) * YS + yi) not in kvsu) for x in h), dtype=bool, count=len(h))
            h, kk, wt = h[keep], kk[keep], wt[keep]
        ek = np.zeros(len(h)); idx = {int(x): n for n, x in enumerate(h)}
        for key, c in nbedel.items():
            if key % YS == yi and nbayrak[key // YS] and (key // YS) in idx:
                ek[idx[key // YS]] += c
        rows.append(h); cols.append(kk); w.append(wt + ek)
    return csr_matrix((np.concatenate(w), (np.concatenate(rows), np.concatenate(cols))), shape=(N, N))


G = kur()
# yerlesim -> hucre
yer_hucre = {}
for h, idxs in D["tohum"].items():
    for i in idxs:
        yer_hucre[i] = h
yd = D["yer_donem"]


def tohum_aktif(t):
    hs = set()
    for i, h in yer_hucre.items():
        dv, s = yd[i]
        if any(f <= t < to for f, to in dv) or any(d and f <= t < to for d, f, to in s):
            hs.add(h)
    return sorted(hs)


# ic kutu maskesi
ci0 = int((ib[0] - x0) / 0.05); ci1 = int((ib[2] - x0) / 0.05)
cj0 = int((ib[1] - y0) / 0.05); cj1 = int((ib[3] - y0) / 0.05)
ic = np.zeros((ny, nx), bool); ic[cj0:cj1, ci0:ci1] = True
KARA = (kara.reshape(ny, nx) & ic)
kara_km2 = float((km2g_ * KARA).sum())
print("[%s] iç kutu %s · kara %s km²" % (ad, ib, format(int(kara_km2), ",")))

# yayinlanmis bant geometrisi
B = bantyukle.Bant()
bant_ad = [b["ad"] for b in B.bant]


def gecerli(x):
    return x if x.is_valid else shapely.make_valid(x)


def yukle(yol):
    h = json.load(open(os.path.join(KOK, "veri-kaynak", yol), encoding="utf-8"))
    return unary_union([gecerli(shapely.geometry.shape(f["geometry"])) for f in h["features"]])


bx = box(*ib)
land = gecerli(yukle("ne_10m_land.geojson").intersection(bx))
gol = gecerli(yukle("ne_10m_lakes.geojson").intersection(bx))
kara_poly = gecerli(land.difference(gol))
lon0 = (ib[0] + ib[2]) / 2


def sinuz(x):
    def f(c):
        return np.column_stack([(c[:, 0] - lon0) * np.cos(np.radians(c[:, 1])) * KMD, c[:, 1] * KMD])
    return gecerli(shapely.transform(x, f))


kara_s = sinuz(kara_poly)
kara_poly_km2 = kara_s.area


def bilesenler(mask, hucre_km=5.5):
    """maske: True = bosluk. Dondurur (bilesen sayisi, toplam km2, kenara degmeyenlerin max cap km, kenara degmeyen alan)."""
    lab, n = ndimage.label(mask, structure=np.ones((3, 3)))
    if n == 0:
        return 0, 0.0, 0.0, 0.0, 0
    alan = ndimage.sum(km2g_, lab, range(1, n + 1))
    kenar = set(np.unique(np.concatenate([lab[cj0, ci0:ci1], lab[cj1 - 1, ci0:ci1], lab[cj0:cj1, ci0], lab[cj0:cj1, ci1 - 1]]))) - {0}
    ic_say = 0; ic_alan = 0.0; maxcap = 0.0
    edt = ndimage.distance_transform_edt(mask)
    for l in range(1, n + 1):
        if l in kenar:
            continue
        ic_say += 1; ic_alan += alan[l - 1]
        maxcap = max(maxcap, 2 * edt[lab == l].max() * hucre_km)
    return n, float(alan.sum()), maxcap, ic_alan, ic_say


for t in tarihler:
    t = t + ("-06-15" if len(t) == 4 else "")
    seeds = tohum_aktif(t)
    d = dijkstra(G, directed=True, indices=seeds, min_only=True).reshape(ny, nx)
    print("## %s %s — aktif tohum hücresi %d" % (ad, t, len(seeds)))
    ak = [i for i, r in enumerate(B.bant[0]["dnm"]) if r["f"] <= t < r["t"]]
    for k, (Bk, gun) in enumerate(zip(Bler, (5, 7, 10))):
        # ideal
        sahipli = KARA & (d <= Bk)
        bos = KARA & ~(d <= Bk)
        n, ba, cap, ic_a, ic_s = bilesenler(bos)
        # yayin
        parc = []
        for i in ak:
            gg = gecerli(B.kayit_geom(B.bant[k]["dnm"][i])).intersection(bx)
            if not gg.is_empty:
                parc.append(gg)
        sahip_s = sinuz(gecerli(unary_union(parc))) if parc else Polygon()
        sah_alan = kara_s.intersection(sahip_s).area
        bos_s = kara_s.difference(sahip_s)
        parts = [p for p in (bos_s.geoms if hasattr(bos_s, "geoms") else [bos_s]) if p.geom_type == "Polygon" and p.area > 25]
        kenar_hat = sinuz(bx).boundary
        pic = [p for p in parts if not p.buffer(3).intersects(kenar_hat)]
        pcap = max([2 * shapely.maximum_inscribed_circle(p, 5).length for p in pic], default=0.0)
        print("  %2d gün  IDEAL(kapısız, tarihli): sahipli %5.1f%% · boşluk %s km² (%d bil.) · kenara değmeyen %d bil. %s km², maks çap %.0f km"
              % (gun, 100 * sahipli.sum() * 0 + 100 * float((km2g_ * sahipli).sum()) / kara_km2, format(int(ba), ","), n, ic_s, format(int(ic_a), ","), cap))
        print("          YAYIN(puan kapılı)     : sahipli %5.1f%% · boşluk %s km² (%d bil.) · kenara değmeyen %d bil. %s km², maks çap %.0f km"
              % (100 * sah_alan / kara_poly_km2, format(int(kara_poly_km2 - sah_alan), ","), len(parts), len(pic),
                 format(int(sum(p.area for p in pic)), ","), pcap))
