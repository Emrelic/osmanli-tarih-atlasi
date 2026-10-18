"""AŞAMA 1 (kutu dökümünden): motorun zamandan BAĞIMSIZ Dijkstra sahipliği (tüm zamanların yerleşimleri)
tarihte boyanabilir mi? Bütçe içi (<=B) hücrelerin sahibi o tarihte (a) gerçek devlete, (b) __BOSLUK__'a,
(c) hiçbir devlete (henüz kurulmamış / ölmüş / devletsiz) ait. Kullanım: asama1_sahiplik.py ad lon0,lat0,lon1,lat1 tarih"""
import os, pickle, sys
import numpy as np

SP = os.environ.get("YDOG_DIZIN") or os.path.join(__import__("tempfile").gettempdir(), "ydog1018")
ad, ib, t = sys.argv[1], [float(x) for x in sys.argv[2].split(",")], sys.argv[3]
D = pickle.load(open(os.path.join(SP, "dok_%s.pkl" % ad), "rb"))
g = D["grid"]; nx, ny = g["_kvnx"], g["_kvny"]; x0, y0 = g["_kvx0"], g["_kvy0"]
uzak = D["uzak"].astype(np.float64); sahip = D["sahip"]; kara = D["kara"]
yd = D["yer_donem"]
durum = {}
var = D.get("yer_var")
for i, (dv, s) in enumerate(yd):
    if any(f <= t < to for f, to in dv):
        durum[i] = "gercek"
        continue
    for d, f, to in s:
        if d and f <= t < to:
            durum[i] = "bosluk" if "BOSLUK" in d else "gercek"
            break
    else:
        kur, bit = var[i] if var else (None, None)
        olu = bool((kur and kur > t) or (bit and bit <= t))   # henüz kurulmamış / ölmüş: devir (40 sa) işler
        durum[i] = "olu" if olu else "yok"                    # "yok" = VAR ama o gün devletsiz
lat = y0 + (np.arange(ny) + 0.5) * 0.05
km2 = ((0.05 * 111.32) ** 2 * np.cos(np.radians(lat)))[:, None] * np.ones((1, nx))
ci0, ci1 = int((ib[0] - x0) / 0.05), int((ib[2] - x0) / 0.05)
cj0, cj1 = int((ib[1] - y0) / 0.05), int((ib[3] - y0) / 0.05)
ic = np.zeros((ny, nx), bool); ic[cj0:cj1, ci0:ci1] = True
K = kara & ic
tum = km2[K].sum()
kod = np.vectorize(lambda i: {"gercek": 1, "bosluk": 2, "yok": 3, "olu": 4}.get(durum.get(int(i), "yok"), 3) if i >= 0 else 0)(sahip)
print("[%s] %s iç kutu %s · kara %s km²" % (ad, t, ib, format(int(tum), ",")))
for B, gun in ((201.6, 5), (282.2, 7), (403.2, 10)):
    ici = K & (uzak <= B)
    r = {k: km2[ici & (kod == v)].sum() for k, v in (("gercek", 1), ("bosluk", 2), ("yok", 3), ("olu", 4))}
    dis = km2[K & ~(uzak <= B)].sum()
    print("  %2d gün: bütçe içi %4.1f%% = sahibi o gün GERÇEK devlette %4.1f%% · __BOSLUK__ %4.1f%% · VAR ama devletsiz %4.1f%% · henüz kurulmamış/ölü (devir 40 sa) %4.1f%% · bütçe dışı %4.1f%%"
          % (gun, 100 * km2[ici].sum() / tum, 100 * r["gercek"] / tum, 100 * r["bosluk"] / tum, 100 * r["yok"] / tum, 100 * r["olu"] / tum, 100 * dis / tum))
