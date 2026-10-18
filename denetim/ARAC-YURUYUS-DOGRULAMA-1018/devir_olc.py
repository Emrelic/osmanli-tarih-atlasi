"""VARLIK DEVRİ BÜTÇESİ SINAVI (kod değiştirmeden, kutu dökümünden): `_yr_epok_onar` ölü/henüz kurulmamış yerleşimin
toprağını YALNIZ 40 saatle (`_YR_BUTCE`, uret_petek.py:2399) canlı komşulara dağıtır. Bu sınav, aynı devri bandın
kendi bütçesiyle (5/7/10 gün) yapsaydık iç kutuda sahipli kara oranının nasıl değişeceğini ölçer.
Model (motorun kendi tanımına eşdeğer — sonuç epok başına tam Dijkstra ile aynıdır, kod notu :2343):
  tüm-zaman sahibi o gün CANLI ve gerçek devletteyse: boyanır iff uzak<=B (bugünkü davranış, değişmez);
  tüm-zaman sahibi ÖLÜ/doğmamışsa: canlı yerleşimlerden yeniden yürünür; en yakın canlı tohum gerçek devletteyse
     BUGÜN  boyanır iff d_canlı<=40 saat (201,6 km-eşd.) · ÖNERİ boyanır iff d_canlı<=B.
  tüm-zaman sahibi canlı ama devletsiz/__BOSLUK__ ise boyanmaz (iki durumda da).
Kullanım: devir_olc.py ad lon0,lat0,lon1,lat1 tarih[,tarih]"""
import os, pickle, sys
import numpy as np
from scipy.sparse import csr_matrix
from scipy.sparse.csgraph import dijkstra

SP = os.environ.get("YDOG_DIZIN") or os.path.join(__import__("tempfile").gettempdir(), "ydog1018")
ad, ib, tarihler = sys.argv[1], [float(x) for x in sys.argv[2].split(",")], sys.argv[3].split(",")
D = pickle.load(open(os.path.join(SP, "dok_%s.pkl" % ad), "rb"))
g = D["grid"]; nx, ny = g["_kvnx"], g["_kvny"]; x0, y0 = g["_kvx0"], g["_kvy0"]
kara = D["kara"].ravel(); surt = D["surt"].ravel().astype(np.float64)
YON = D["yon"]; YS = len(YON); KVDY = D["KVDY"]; nbedel, nbayrak = D["nehir"]; N = nx * ny
lat = y0 + (np.arange(ny) + 0.5) * 0.05
dx_j = KVDY * np.cos(np.radians(lat))
km2 = ((0.05 * 111.32) ** 2 * np.cos(np.radians(lat)))[:, None] * np.ones((1, nx))
uzak = D["uzak"].astype(np.float64); sahip = D["sahip"]
yd, yv = D["yer_donem"], D["yer_var"]
KM = D["NEHIR_KM_SAAT"]


def kur():
    rows, cols, w = [], [], []
    H = np.arange(N); J, I = np.divmod(H, nx); kvsu = D["kvsu"]
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
yer_hucre = {i: h for h, idxs in D["tohum"].items() for i in idxs}
ci0, ci1 = int((ib[0] - x0) / 0.05), int((ib[2] - x0) / 0.05)
cj0, cj1 = int((ib[1] - y0) / 0.05), int((ib[3] - y0) / 0.05)
ic = np.zeros((ny, nx), bool); ic[cj0:cj1, ci0:ci1] = True
K = kara.reshape(ny, nx) & ic
tum = km2[K].sum()
print("[%s] iç kutu %s · kara %s km²" % (ad, ib, format(int(tum), ",")))
for t in tarihler:
    t = t + ("-06-15" if len(t) == 4 else "")
    durum = {}
    for i, (dv, s) in enumerate(yd):
        kur_, bit_ = yv[i]
        olu = bool((kur_ and kur_ > t) or (bit_ and bit_ <= t))
        if any(f <= t < to for f, to in dv):
            durum[i] = "gercek"; continue
        sd = [(d, f, to) for d, f, to in s if d and f <= t < to]
        if sd:
            durum[i] = "bosluk" if "BOSLUK" in sd[0][0] else "gercek"
        else:
            durum[i] = "olu" if olu else "devletsiz"
    # canlı tohumlar (ölü olmayan, hücresi olan) ve etiketleri
    canli = {}
    for i, h in yer_hucre.items():
        if durum[i] != "olu":
            canli.setdefault(h, durum[i])
    # bir hücrede hem gerçek hem devletsiz varsa gerçek say (motor idxs[0]; yaklaşık)
    for i, h in yer_hucre.items():
        if durum[i] == "gercek":
            canli[h] = "gercek"
    kaynak = np.array(sorted(canli), dtype=np.int64)
    d, _, src = dijkstra(G, directed=True, indices=kaynak, min_only=True, return_predecessors=True)
    d = d.reshape(ny, nx); src = src.reshape(ny, nx)
    gercek_hucre = np.array([canli.get(int(s), "") == "gercek" if s >= 0 else False for s in src.ravel()]).reshape(ny, nx)
    sahip_durum = np.vectorize(lambda i: durum.get(int(i), "yok") if i >= 0 else "yok")(sahip)
    sahip_gercek = sahip_durum == "gercek"; sahip_olu = sahip_durum == "olu"
    print("## %s %s" % (ad, t))
    for gun, saat in ((5, 40), (7, 56), (10, 80)):
        B = saat * KM
        mevcut = K & ((sahip_gercek & (uzak <= B)) | (sahip_olu & gercek_hucre & (d <= 40 * KM)))
        oneri = K & ((sahip_gercek & (uzak <= B)) | (sahip_olu & gercek_hucre & (d <= B)))
        olu_ic = K & sahip_olu & (uzak <= B)
        print("  %2d gün: ölü/doğmamış sahipli bütçe-içi hücre %4.1f%% · bugünkü devir (40 sa) sahipli %5.2f%% · öneri (devir=%d sa) sahipli %5.2f%% · kazanç +%.2f puan (+%s km²)"
              % (gun, 100 * km2[olu_ic].sum() / tum, 100 * km2[mevcut].sum() / tum, saat, 100 * km2[oneri].sum() / tum,
                 100 * (km2[oneri].sum() - km2[mevcut].sum()) / tum, format(int(km2[oneri].sum() - km2[mevcut].sum()), ",")))
