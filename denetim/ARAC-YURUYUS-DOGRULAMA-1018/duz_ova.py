"""DUZ OVA SINAVI — motorun GERCEK `_kv_dijkstra` ve `_kv_ara_kara` gövdeleri dosyadan AST ile
cekilir (kopya yazilmaz), sentetik duz karada (surtunme 1, nehir/bogaz yok) kosturulur.
Soru: 40/56/80 saat butcesi, duz ovada kac km'ye erisir? Beklenen: 201.6 / 282.2 / 403.2 km (her yonde).
Cikti: yon basina erisim (16 sektor, gercek haversine km), alan orani, 8 ve 16 komsu karsilastirmasi."""
import ast, math, heapq, os, sys
import numpy as np

KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
yol = KOK + r"\arac\uret_petek.py"
kaynak = open(yol, encoding="utf-8").read()
agac = ast.parse(kaynak)
isle = {}
for n in agac.body:
    if isinstance(n, ast.FunctionDef) and n.name in ("_kv_dijkstra", "_kv_ara_kara"):
        isle[n.name] = ast.get_source_segment(kaynak, n)
assert set(isle) == {"_kv_dijkstra", "_kv_ara_kara"}, isle.keys()

KV_ADIM = 0.05
KMSAAT = 5.04


def haversine(lat1, lon1, lat2, lon2):
    p1, p2 = np.radians(lat1), np.radians(lat2)
    dphi = p2 - p1
    dl = np.radians(lon2 - lon1)
    a = np.sin(dphi / 2) ** 2 + np.cos(p1) * np.cos(p2) * np.sin(dl / 2) ** 2
    return 2 * 6371.0088 * np.arcsin(np.sqrt(a))


def bearing(lat1, lon1, lat2, lon2):
    p1, p2 = np.radians(lat1), np.radians(lat2)
    dl = np.radians(lon2 - lon1)
    y = np.sin(dl) * np.cos(p2)
    x = np.cos(p1) * np.sin(p2) - np.sin(p1) * np.cos(p2) * np.cos(dl)
    return (np.degrees(np.arctan2(y, x)) + 360) % 360


def kos(lat_merkez, yon16, ny=300, nx=500):
    G = {"math": math, "_heapq": heapq, "__builtins__": __builtins__}
    kvy0 = lat_merkez - ny * KV_ADIM / 2
    kvx0 = 0.0
    YON = ((1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1))
    if yon16:
        YON = YON + ((2, 1), (1, 2), (-1, 2), (-2, 1), (-2, -1), (-1, -2), (1, -2), (2, -1))
    kara = bytearray(b"\x01" * (nx * ny))
    ci, cj = nx // 2, ny // 2
    G.update(_kvnx=nx, _kvny=ny, _kvy0=kvy0, KV_ADIM=KV_ADIM, _KVDY=KV_ADIM * 111.32,
             _KV_YON=YON, _KV_YS=len(YON), YURUYUS_16=yon16, _KVSU=None,
             _kvkara=kara, _kvtohum={cj * nx + ci: [0]})
    # _kv_ara_kara kendi kodunda _kvkara/_kvnx okur
    exec(isle["_kv_ara_kara"], G)
    exec(isle["_kv_dijkstra"], G)
    uzak, sahip = G["_kv_dijkstra"](None, None)
    u = np.array(uzak).reshape(ny, nx)
    lat = kvy0 + (np.arange(ny) + 0.5) * KV_ADIM
    lon = kvx0 + (np.arange(nx) + 0.5) * KV_ADIM
    LA, LO = np.meshgrid(lat, lon, indexing="ij")
    m_lat, m_lon = lat[cj], lon[ci]
    d = haversine(m_lat, m_lon, LA, LO)
    b = bearing(m_lat, m_lon, LA, LO)
    sek = (np.round(b / 22.5).astype(int)) % 16
    cos_h = np.cos(np.radians(LA))
    hucre_km2 = (KV_ADIM * 111.32) ** 2 * cos_h
    sonuc = {}
    for saat in (40, 56, 80):
        B = saat * KMSAAT
        icerde = u <= B
        ust = []
        for s in range(16):
            msk = (sek == s) & icerde & (d > 0)
            # sektorun +-6 derece icindeki hucreler (kose etkisi karismasin)
            ust.append(float(d[msk].max()) if msk.any() else float("nan"))
        alan = float((hucre_km2 * icerde).sum())
        sonuc[saat] = (B, np.array(ust), alan / (math.pi * B * B))
    return sonuc


if __name__ == "__main__":
    for yon16 in (False, True):
        print("=== %s komsu ===" % ("16" if yon16 else "8 (uretim)"))
        for lat in (0, 30, 45, 60):
            S = kos(lat, yon16)
            for saat, (B, ust, oran) in S.items():
                print("lat %2d  %2d sa (%3d gun) B=%6.1f km | erisim min %6.1f  maks %6.1f  ort %6.1f | "
                      "alan/(pi B^2) = %.3f | min/B %.3f maks/B %.3f"
                      % (lat, saat, saat // 8, B, np.nanmin(ust), np.nanmax(ust), np.nanmean(ust),
                         oran, np.nanmin(ust) / B, np.nanmax(ust) / B))
            if lat == 45:
                B, ust, _ = S[80]
                print("   45N 80sa yon basina (0=K,22.5..):", " ".join("%.0f" % x for x in ust))
