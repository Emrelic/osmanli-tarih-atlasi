# -*- coding: utf-8 -*-
"""TAŞMA PROTOTİP — ızgaradan doğan sınır, DEPO AĞACININ DIŞINDA.

🔴 MOTORU DEĞİŞTİRMEZ. `arac/` ve `data/` yalnız OKUNUR.
   `_kv_dijkstra`nın MANTIĞI kopyalandı (uret_petek.py:2238-2270); orijinal
   dosyaya tek bayt yazılmadı. Bu betik depo ağacının DIŞINDA duruyor.

NE ÜRETİR
   ① düz-çizgi Voronoi (bugünkü yöntemin tabanı)   — derece uzayında, motorun
     kendi yaptığı gibi (uret_petek.py:792 `Point(lon, lat)`)
   ② ızgara + kara kısıtı, sürtünmesiz
   ③ ızgara + kara kısıtı + EĞİM SÜRTÜNMESİ        — istenen şey
   ④ ③ün 16 yönlü hâli
   ve bunların PNG'leri: ham (merdivenli) + Chaikin yumuşatmalı.

DÜRÜSTLÜK ŞARTI (sevkin kendi maddesi ③): çirkinse ÇİRKİN gösterilir.
Yumuşatmasız resim de basılır, gizlenmez.
"""
import json
import math
import os
import sys
import time

import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.colors import LightSource, ListedColormap
import shapely
from shapely.geometry import shape, box as sbox
from shapely.ops import unary_union
import rasterio
from rasterio.windows import from_bounds
from rasterio.features import shapes as rio_shapes

sys.stdout.reconfigure(encoding="utf-8")

DEPO = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
CIKTI = os.path.join(DEPO, "denetim")
sys.path.insert(0, os.path.join(DEPO, "arac"))

# ── Motorun sabitleri — EZBERDEN DEĞİL, kaynaktan alındı ────────────────────
KV_ADIM = 0.05           # uret_petek.py:2075
EGIM_CARPANI = 0.005     # uret_petek.py:417
KM_DERECE = 111.32

# Pilot kutu: paralel sınavının kullandığı Anadolu kutusu (sevk önerdi)
IC = (26.0, 36.0, 45.0, 42.0)
PAY = 1.5                # kenar tohumları da yarışsın; resim İÇ kutuya kırpılır
DIS = (IC[0] - PAY, IC[1] - PAY, IC[2] + PAY, IC[3] + PAY)

D8 = ((1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1))
D16 = D8 + ((2, 1), (2, -1), (-2, 1), (-2, -1), (1, 2), (1, -2), (-1, 2), (-1, -2))


def rss_mb():
    try:
        import psutil
        return psutil.Process().memory_info().rss / 1048576.0
    except Exception:
        return float("nan")


def adim(ad, t0):
    print("  %-46s %7.2f sn · RSS %7.1f MB" % (ad, time.time() - t0, rss_mb()))
    return time.time()


# ── ① GİRDİ ────────────────────────────────────────────────────────────────
def yukle_noktalar():
    import girdi                                    # D023: var olan ayrıştırıcı
    hepsi = girdi.yukle(sessiz=True)
    ic = [(y["lon"], y["lat"], y["ad"]) for y in hepsi
          if DIS[0] <= y["lon"] <= DIS[2] and DIS[1] <= y["lat"] <= DIS[3]]
    return ic, len(hepsi)


def yukle_kara():
    yol = os.path.join(DEPO, "veri-kaynak", "ne_10m_land.geojson")
    kutu = sbox(*DIS)
    parca = []
    with open(yol, encoding="utf-8") as f:
        ham = json.load(f)
    for ft in ham["features"]:
        g = ft.get("geometry")
        if not g:
            continue
        xs = []
        ys = []
        # kaba bbox elemesi — shapely'ye gereksiz poligon vermemek için
        def gez(c):
            if isinstance(c[0], (int, float)):
                xs.append(c[0]); ys.append(c[1])
            else:
                for k in c:
                    gez(k)
        gez(g["coordinates"])
        if max(xs) < DIS[0] or min(xs) > DIS[2] or max(ys) < DIS[1] or min(ys) > DIS[3]:
            continue
        parca.append(shape(g))
    del ham
    return unary_union(parca).intersection(kutu)


# ── ② IZGARA ───────────────────────────────────────────────────────────────
def izgara_kur(KARA):
    x0, y0, x1, y1 = DIS
    nx = int(round((x1 - x0) / KV_ADIM))
    ny = int(round((y1 - y0) / KV_ADIM))
    shapely.prepare(KARA)
    xs = x0 + (np.arange(nx) + 0.5) * KV_ADIM
    kara = np.zeros(nx * ny, dtype=np.uint8)
    for j in range(ny):
        lat = y0 + (j + 0.5) * KV_ADIM
        kara[j * nx:(j + 1) * nx] = shapely.contains_xy(
            KARA, xs, np.full(nx, lat)).astype(np.uint8)
    return nx, ny, kara


def egim_yuzeyi(nx, ny):
    dem = os.path.join(DEPO, "veri-kaynak", "yukseklik", "etopo2022_30s_dunya.tif")
    x0, y0 = DIS[0], DIS[1]
    with rasterio.open(dem) as ds:
        win = from_bounds(x0, y0, x0 + nx * KV_ADIM, y0 + ny * KV_ADIM,
                          transform=ds.transform)
        z = ds.read(1, window=win, out_shape=(ny, nx),
                    resampling=rasterio.enums.Resampling.average).astype("float32")
    z = np.flipud(z)                                  # motorun yaptığı gibi
    gy, gx = np.gradient(z)
    egim = np.hypot(gx, gy)
    return z, (1.0 + EGIM_CARPANI * egim).ravel().astype("float32")


# ── ③ DIJKSTRA — mantığı uret_petek.py:2238'den kopyalandı ─────────────────
def kv_dijkstra(nx, ny, kara, tohum, surt, yonler):
    import heapq
    KVDY = KV_ADIM * KM_DERECE
    uzak = np.full(nx * ny, np.inf, dtype="float64")
    sahip = np.full(nx * ny, -1, dtype="int32")
    q = []
    for h, i in tohum.items():
        uzak[h] = 0.0
        sahip[h] = i
        heapq.heappush(q, (0.0, h))
    while q:
        d, h = heapq.heappop(q)
        if d > uzak[h]:
            continue
        j, i = divmod(h, nx)
        dx = KVDY * math.cos(math.radians(DIS[1] + (j + 0.5) * KV_ADIM))
        for di, dj in yonler:
            a, b = i + di, j + dj
            if not (0 <= a < nx and 0 <= b < ny):
                continue
            k = b * nx + a
            if not kara[k]:
                continue
            nd = d + math.hypot(dx * di, KVDY * dj) * (surt[k] if surt is not None else 1.0)
            if nd < uzak[k]:
                uzak[k] = nd
                sahip[k] = sahip[h]
                heapq.heappush(q, (nd, k))
    return uzak, sahip


def tohumlari_otur(nx, ny, kara, pts):
    """Tohumu ızgaraya oturt; su hücresine düşerse en yakın kara hücresine kaydır."""
    tohum = {}
    for idx, (lon, lat, _ad) in enumerate(pts):
        i = min(nx - 1, max(0, int((lon - DIS[0]) / KV_ADIM)))
        j = min(ny - 1, max(0, int((lat - DIS[1]) / KV_ADIM)))
        h = j * nx + i
        if not kara[h]:
            en, enh = 1e9, None
            for dj in range(-4, 5):
                for di in range(-4, 5):
                    a, b = i + di, j + dj
                    if 0 <= a < nx and 0 <= b < ny and kara[b * nx + a]:
                        d = di * di + dj * dj
                        if d < en:
                            en, enh = d, b * nx + a
            h = enh
        if h is not None and h not in tohum:
            tohum[h] = idx
    return tohum


def duz_cizgi_voronoi(nx, ny, kara, pts):
    """Motorun tabanı: DERECE uzayında en yakın nokta (uret_petek.py:792)."""
    from scipy.spatial import cKDTree
    agac = cKDTree(np.array([(p[0], p[1]) for p in pts]))
    jj, ii = np.divmod(np.arange(nx * ny), nx)
    xs = DIS[0] + (ii + 0.5) * KV_ADIM
    ys = DIS[1] + (jj + 0.5) * KV_ADIM
    _d, idx = agac.query(np.column_stack([xs, ys]))
    idx = idx.astype("int32")
    idx[kara == 0] = -1
    return idx


# ── ④ POLİGONLAŞTIRMA + CHAIKIN ────────────────────────────────────────────
def poligonlastir(sahip, nx, ny):
    tr = rasterio.transform.from_origin(DIS[0], DIS[1] + ny * KV_ADIM,
                                        KV_ADIM, KV_ADIM)
    veri = np.flipud(sahip.reshape(ny, nx)).astype("int32")
    mask = veri >= 0
    cikti = []
    for geom, deger in rio_shapes(veri, mask=mask, transform=tr, connectivity=4):
        cikti.append((geom, int(deger)))
    return cikti


def chaikin(halka, tur=2):
    p = list(halka)
    if p[0] == p[-1]:
        p = p[:-1]
    for _ in range(tur):
        y = []
        n = len(p)
        for i in range(n):
            x1, y1 = p[i]
            x2, y2 = p[(i + 1) % n]
            y.append((0.75 * x1 + 0.25 * x2, 0.75 * y1 + 0.25 * y2))
            y.append((0.25 * x1 + 0.75 * x2, 0.75 * y2 + 0.25 * y1))
        p = y
    return p + [p[0]]


# ── ⑤ ÇİZİM ────────────────────────────────────────────────────────────────
def renkler(n, tohum_sayisi):
    rng = np.random.default_rng(20260911)
    c = rng.random((tohum_sayisi, 3)) * 0.55 + 0.35
    return ListedColormap(c)


def kabartma(z):
    ls = LightSource(azdeg=315, altdeg=45)
    return ls.hillshade(z, vert_exag=0.02, dx=1, dy=1)


def panel(ax, sahip, nx, ny, cmap, z, baslik, hatlar=None):
    ax.imshow(kabartma(z), cmap="gray", origin="lower",
              extent=[DIS[0], DIS[2], DIS[1], DIS[3]], vmin=0, vmax=1)
    m = np.ma.masked_less(sahip.reshape(ny, nx).astype(float), 0)
    ax.imshow(m, cmap=cmap, origin="lower", alpha=0.55, interpolation="nearest",
              extent=[DIS[0], DIS[2], DIS[1], DIS[3]])
    if hatlar:
        for hx, hy in hatlar:
            ax.plot(hx, hy, color="black", lw=0.45, alpha=0.85)
    ax.set_xlim(IC[0], IC[2])
    ax.set_ylim(IC[1], IC[3])
    ax.set_title(baslik, fontsize=11)
    ax.set_xticks([])
    ax.set_yticks([])


def sinir_hatlari(poligonlar, yumusat=False):
    h = []
    for geom, _d in poligonlar:
        for halka in ([geom["coordinates"][0]] if geom["type"] == "Polygon"
                      else [p[0] for p in geom["coordinates"]]):
            if len(halka) < 4:
                continue
            k = chaikin(halka) if yumusat else list(halka)
            h.append(([p[0] for p in k], [p[1] for p in k]))
    return h


def main():
    T0 = time.time()
    t = time.time()
    print("TAŞMA PROTOTİP — pilot kutu %s (pay %.1f°)" % (str(IC), PAY))
    print("  başlangıç RSS %.1f MB" % rss_mb())

    pts, toplam = yukle_noktalar()
    print("  nokta: kutuda %d / toplam %d" % (len(pts), toplam))
    t = adim("girdi", t)

    KARA = yukle_kara()
    t = adim("kara maskesi (ne_10m_land, kırpıldı)", t)

    nx, ny, kara = izgara_kur(KARA)
    print("     ızgara %d×%d = %s hücre · kara %s"
          % (nx, ny, "{:,}".format(nx * ny), "{:,}".format(int(kara.sum()))))
    t = adim("ızgara", t)

    z, surt = egim_yuzeyi(nx, ny)
    print("     sürtünme: medyan %.3f · en yüksek %.2f"
          % (float(np.median(surt[kara > 0])), float(surt[kara > 0].max())))
    t = adim("eğim yüzeyi (DEM penceresi)", t)

    tohum = tohumlari_otur(nx, ny, kara, pts)
    print("     ızgaraya oturan tohum: %d / %d" % (len(tohum), len(pts)))

    vor = duz_cizgi_voronoi(nx, ny, kara, pts)
    t = adim("① düz-çizgi Voronoi (derece uzayı)", t)

    _u0, s_duz = kv_dijkstra(nx, ny, kara, tohum, None, D8)
    t = adim("② ızgara, sürtünmesiz, 8 yön", t)

    _u1, s_egim = kv_dijkstra(nx, ny, kara, tohum, surt, D8)
    tD = time.time() - t
    t = adim("③ ızgara, EĞİM sürtünmeli, 8 yön", t)

    _u2, s_16 = kv_dijkstra(nx, ny, kara, tohum, surt, D16)
    t16 = time.time() - t
    t = adim("④ ızgara, eğim sürtünmeli, 16 yön", t)

    poli = poligonlastir(s_egim, nx, ny)
    t = adim("⑤ poligonlaştırma (rasterio.features.shapes)", t)

    # ── SAYILAR ────────────────────────────────────────────────────────────
    kl = kara > 0
    er = s_egim >= 0
    f_vor = int(np.sum((vor != s_egim) & er))
    f_duz = int(np.sum((s_duz != s_egim) & er))
    f_16 = int(np.sum((s_16 != s_egim) & er))
    n_er = int(er.sum())
    kose = sum(len(g["coordinates"][0]) if g["type"] == "Polygon"
               else sum(len(p[0]) for p in g["coordinates"]) for g, _ in poli)
    print()
    print("  ═══ SAYILAR ═══")
    print("     erişilen hücre                      %s" % "{:,}".format(n_er))
    print("     poligon                             %s" % "{:,}".format(len(poli)))
    print("     poligon köşesi (ham)                %s" % "{:,}".format(kose))
    print("     düz Voronoi ↔ eğimli ızgara FARK    %s hücre (%%%.1f)"
          % ("{:,}".format(f_vor), 100.0 * f_vor / n_er))
    print("     sürtünmesiz ↔ eğimli   FARK         %s hücre (%%%.1f)"
          % ("{:,}".format(f_duz), 100.0 * f_duz / n_er))
    print("     8 yön ↔ 16 yön         FARK         %s hücre (%%%.1f)"
          % ("{:,}".format(f_16), 100.0 * f_16 / n_er))
    print("     Dijkstra 8 yön %.2f sn · 16 yön %.2f sn · oran %.2f×"
          % (tD, t16, t16 / max(tD, 1e-9)))
    print("     TEPE RSS %.1f MB" % rss_mb())

    # ── RESİMLER ───────────────────────────────────────────────────────────
    cmap = renkler(len(pts), len(pts))
    px = [p[0] for p in pts]
    py = [p[1] for p in pts]

    fig, axs = plt.subplots(1, 2, figsize=(19, 6.4), dpi=130)
    panel(axs[0], vor, nx, ny, cmap, z,
          "SOL — bugünkü yöntem: DÜZ ÇİZGİ Voronoi\n(derece uzayında en yakın nokta)")
    panel(axs[1], s_egim, nx, ny, cmap, z,
          "SAĞ — ızgaradan doğan sınır: kara yolu + EĞİM sürtünmesi\n"
          "(aynı kutu, aynı noktalar, aynı renkler)")
    for a in axs:
        a.plot(px, py, "k.", ms=2.2)
    fig.suptitle("TAŞMA PROTOTİPİ · Anadolu pilot kutusu · %d yerleşim · "
                 "ızgara %.2f° (≈%.1f km) · eğim çarpanı %.3f"
                 % (len(pts), KV_ADIM, KV_ADIM * KM_DERECE, EGIM_CARPANI),
                 fontsize=12)
    fig.tight_layout()
    y1 = os.path.join(CIKTI, "TASMA-PROTOTIP-1-YANYANA-0911.png")
    fig.savefig(y1, bbox_inches="tight")
    plt.close(fig)

    hat_ham = sinir_hatlari(poli, False)
    hat_yum = sinir_hatlari(poli, True)
    fig, axs = plt.subplots(1, 2, figsize=(19, 6.4), dpi=130)
    panel(axs[0], s_egim, nx, ny, cmap, z,
          "HAM — Chaikin YOK. Merdiven basamakları\nGİZLENMEDİ (sevk maddesi ③)",
          hat_ham)
    panel(axs[1], s_egim, nx, ny, cmap, z,
          "CHAIKIN 2 TUR — motorun kendi yumuşatması", hat_yum)
    fig.suptitle("AYNI SINIR, YUMUŞATMADAN ÖNCE VE SONRA", fontsize=12)
    fig.tight_layout()
    y2 = os.path.join(CIKTI, "TASMA-PROTOTIP-2-MERDIVEN-0911.png")
    fig.savefig(y2, bbox_inches="tight")
    plt.close(fig)

    fark = np.zeros(nx * ny)
    fark[(vor != s_egim) & er] = 1
    fark[(s_16 != s_egim) & er] = 2
    fig, axs = plt.subplots(1, 2, figsize=(19, 6.4), dpi=130)
    m1 = np.ma.masked_where(~((vor != s_egim) & er).reshape(ny, nx),
                            np.ones((ny, nx)))
    axs[0].imshow(kabartma(z), cmap="gray", origin="lower",
                  extent=[DIS[0], DIS[2], DIS[1], DIS[3]], vmin=0, vmax=1)
    axs[0].imshow(m1, cmap=ListedColormap([[0.85, 0.1, 0.1]]), origin="lower",
                  alpha=0.75, extent=[DIS[0], DIS[2], DIS[1], DIS[3]],
                  interpolation="nearest")
    axs[0].set_title("NEREDE DEĞİŞTİ — düz Voronoi ↔ eğimli ızgara\n"
                     "%s hücre (%%%.1f)" % ("{:,}".format(f_vor),
                                            100.0 * f_vor / n_er), fontsize=11)
    m2 = np.ma.masked_where(~((s_16 != s_egim) & er).reshape(ny, nx),
                            np.ones((ny, nx)))
    axs[1].imshow(kabartma(z), cmap="gray", origin="lower",
                  extent=[DIS[0], DIS[2], DIS[1], DIS[3]], vmin=0, vmax=1)
    axs[1].imshow(m2, cmap=ListedColormap([[0.1, 0.25, 0.9]]), origin="lower",
                  alpha=0.8, extent=[DIS[0], DIS[2], DIS[1], DIS[3]],
                  interpolation="nearest")
    axs[1].set_title("8 YÖN ↔ 16 YÖN farkı\n%s hücre (%%%.1f)"
                     % ("{:,}".format(f_16), 100.0 * f_16 / n_er), fontsize=11)
    for a in axs:
        a.set_xlim(IC[0], IC[2]); a.set_ylim(IC[1], IC[3])
        a.set_xticks([]); a.set_yticks([])
        a.plot(px, py, "k.", ms=2.0)
    fig.tight_layout()
    y3 = os.path.join(CIKTI, "TASMA-PROTOTIP-3-FARK-0911.png")
    fig.savefig(y3, bbox_inches="tight")
    plt.close(fig)

    print()
    print("  PNG: %s" % y1)
    print("  PNG: %s" % y2)
    print("  PNG: %s" % y3)
    print("  TOPLAM %.1f sn · TEPE RSS %.1f MB" % (time.time() - T0, rss_mb()))


if __name__ == "__main__":
    main()
