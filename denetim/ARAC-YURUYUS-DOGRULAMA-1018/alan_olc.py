"""Kutu dokumlerinden (motorun kendi Dijkstra'si): bantlar ic ice mi, 5/7/10 gunde ne kadar kara erisiliyor,
bant konturu hucre alanina uyuyor mu. Kullanim: py -X utf8 alan_olc.py ad kenar_derece"""
import os, pickle, sys
import numpy as np
import shapely
from shapely.ops import unary_union
from scipy import ndimage

SP = os.environ.get("YDOG_DIZIN") or os.path.join(__import__("tempfile").gettempdir(), "ydog1018")
os.makedirs(SP, exist_ok=True)
BETIK_DIZIN = os.path.dirname(os.path.abspath(__file__))
ad, marj = sys.argv[1], float(sys.argv[2])
D = pickle.load(open(os.path.join(SP, "dok_%s.pkl" % ad), "rb"))
g = D["grid"]; nx, ny = g["_kvnx"], g["_kvny"]; x0, y0 = g["_kvx0"], g["_kvy0"]
uzak = D["uzak"].astype(np.float64); kara = D["kara"]
lat = y0 + (np.arange(ny) + 0.5) * 0.05
lon = x0 + (np.arange(nx) + 0.5) * 0.05
km2 = ((0.05 * 111.32) ** 2 * np.cos(np.radians(lat)))[:, None] * np.ones((1, nx))
ic = np.zeros((ny, nx), bool)
ic[int(marj / 0.05):ny - int(marj / 0.05), int(marj / 0.05):nx - int(marj / 0.05)] = True
KMS = D["NEHIR_KM_SAAT"]
print("[%s] kutu %s · iç bölge: kenardan %g° içeride · iç kara %s km²" % (
    ad, D["kutu"], marj, format(int((km2 * (kara & ic)).sum()), ",")))
onceki = None
for saat, gun in ((40, 5), (56, 7), (80, 10)):
    B = saat * KMS
    uz = kara & ic & ~(uzak <= B)                 # inf dahil: bütçeden uzak ya da erişilemez
    ul = ndimage.label(uz, structure=np.ones((3, 3)))[0]
    n = ul.max()
    alanlar = ndimage.sum(km2, ul, range(1, n + 1)) if n else []
    print("  %2d gün (B=%.1f km): iç karada bütçe DIŞI/sahipsiz %s km² (%.2f%%) · %d bileşen · en büyük %s km²"
          % (gun, B, format(int((km2 * uz).sum()), ","), 100 * (km2 * uz).sum() / (km2 * (kara & ic)).sum(),
             n, format(int(max(alanlar)) if n else 0, ",")))
    if onceki is not None:
        ihlal = int(((uz) & ~onceki).sum())
        print("     iç içe sınaması: önceki (küçük gün) bütçe-dışı kümesinin dışında kalıp bu kümede olan hücre = %d" % ihlal)
    onceki = uz
# kontur poligonlari <-> hucre alani
for b, wkbs in D["bant_uzak"].items():
    if not wkbs:
        print("  kontur %g sa: 0 parça" % b); continue
    P = unary_union([shapely.from_wkb(w) for w in wkbs])
    # poligon alani (km2): her halka icin cos(lat) duzeltmeli dogrusal yaklasim
    def km2p(pg):
        c = pg.centroid.y
        return pg.area * (111.32 ** 2) * np.cos(np.radians(c))
    parc = list(P.geoms) if hasattr(P, "geoms") else [P]
    top = sum(km2p(pg) for pg in parc)
    hucre = float((km2 * (kara & ~(uzak <= b * KMS))).sum())
    print("  kontur %g sa (%d gün): poligon %s km² · aynı bütçenin hücre alanı %s km² · oran %.3f"
          % (b, round(b / 8), format(int(top), ","), format(int(hucre), ","), top / max(hucre, 1)))
cs = {b: unary_union([shapely.from_wkb(w) for w in wk]) if wk else shapely.Polygon()
      for b, wk in D["bant_uzak"].items()}
b40, b56, b80 = cs[40.0], cs[56.0], cs[80.0]
print("  kontur iç içe: alan(80 \\ 56) = %.4g°² · alan(56 \\ 40) = %.4g°²  (beklenen ~0)" % (
    b80.difference(b56).area, b56.difference(b40).area))
