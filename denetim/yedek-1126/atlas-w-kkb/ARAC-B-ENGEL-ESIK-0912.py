# -*- coding: utf-8 -*-
"""KITA 8 · İŞ ① — ENGEL EŞİĞİ SERİSİ, İKİ COĞRAFYADA.

🔴 EŞİĞİ BEN SEÇMİYORUM. Altı değer koşuluyor, üç sayıyla ve resimle
   yan yana konuyor; seçimi Emre'nin gözü yapacak.
🔴 `arac/` ve `data/` YALNIZ OKUNUR.

ÜÇ SAYI (şartname ③):
  ① sırta kilitlenen sınır  — sınır hücresinin kaçı sırt bandının İÇİNDE
  ② ortalama kayma (km)     — engelli sınırın, engelsiz sınıra uzaklığı
                              (mesafe dönüşümü, hücre → km)
  ③ el değiştiren km²       — sahibi değişen hücrelerin alanı
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
from matplotlib.collections import LineCollection
import shapely
from shapely.geometry import shape, box as sbox
import rasterio
from rasterio.windows import from_bounds
from scipy import ndimage

BURA = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BURA)
sys.stdout.reconfigure(encoding="utf-8")
import tasma_prototip as P                                          # noqa: E402
import tasma_engel2 as E                                            # noqa: E402
sys.path.insert(0, os.path.join(P.DEPO, "arac"))
import girdi                                                        # noqa: E402

KV = 0.05
KM_DER = 111.32
HUCRE_KM = KV * KM_DER
DEPO, CIKTI = P.DEPO, P.CIKTI
CEZA_SIRT, CEZA_NEHIR = E.CEZA_SIRT, E.CEZA_NEHIR
# 🔴 MUTLAK EŞİK — yüzdelik DEĞİL. Sebep ölçüldü (yüzdelik turu, aynı gün):
# yüzdelik KENDİNİ NORMALLEŞTİRİR — hangi arazide olursa olsun hücrelerin
# %15'ini seçer. Mezopotamya'da o %15 GÜRÜLTÜdür (p85 = 68 m/hücre) ve
# Toros'ta gerçek sırttır (p85 = 282 m/hücre): AYNI etiket, 4 KAT farklı eşik.
# ⇒ Eşik metre/hücre cinsinden, ARAZİDEN BAĞIMSIZ verilir.
MUTLAK = (100, 150, 200, 300, 400, 600)

BOLGELER = [
    ("TOROS", (29.0, 36.3, 33.0, 38.8), "yüksek eğim — Toroslar ve Akdeniz"),
    ("MEZOPOTAMYA", (39.0, 31.0, 46.0, 36.0), "ALÇAK eğim — Fırat-Dicle ovası"),
]


def rss():
    try:
        import psutil
        return psutil.Process().memory_info().rss / 1048576.0
    except Exception:
        return float("nan")


def kur(ic, pay=1.2):
    dis = (ic[0] - pay, ic[1] - pay, ic[2] + pay, ic[3] + pay)
    nx = int(round((dis[2] - dis[0]) / KV))
    ny = int(round((dis[3] - dis[1]) / KV))
    # kara maskesi
    kutu = sbox(*dis)
    parca = []
    with open(os.path.join(DEPO, "veri-kaynak", "ne_10m_land.geojson"),
              encoding="utf-8") as f:
        ham = json.load(f)
    for ft in ham["features"]:
        g = ft.get("geometry")
        if not g:
            continue
        gg = shape(g)
        if gg.envelope.intersects(kutu):
            parca.append(gg)
    del ham
    KARA = shapely.union_all(parca).intersection(kutu)
    shapely.prepare(KARA)
    xs = dis[0] + (np.arange(nx) + 0.5) * KV
    kara = np.zeros(nx * ny, dtype=np.uint8)
    for j in range(ny):
        lat = dis[1] + (j + 0.5) * KV
        kara[j * nx:(j + 1) * nx] = shapely.contains_xy(
            KARA, xs, np.full(nx, lat)).astype(np.uint8)
    # DEM
    with rasterio.open(os.path.join(DEPO, "veri-kaynak", "yukseklik",
                                    "etopo2022_30s_dunya.tif")) as ds:
        win = from_bounds(dis[0], dis[1], dis[0] + nx * KV, dis[1] + ny * KV,
                          transform=ds.transform)
        z = ds.read(1, window=win, out_shape=(ny, nx),
                    resampling=rasterio.enums.Resampling.average).astype("float32")
    z = np.flipud(z)
    gy, gx = np.gradient(z)
    egim = np.hypot(gx, gy).ravel()
    surt = (1.0 + 0.005 * egim).astype("float32")
    return dis, nx, ny, kara, z, egim, surt


def tohumla(dis, nx, ny, kara):
    hepsi = girdi.yukle(sessiz=True)
    pts = [(y["lon"], y["lat"], y["ad"]) for y in hepsi
           if dis[0] <= y["lon"] <= dis[2] and dis[1] <= y["lat"] <= dis[3]]
    tohum = {}
    for idx, (lon, lat, _a) in enumerate(pts):
        i = min(nx - 1, max(0, int((lon - dis[0]) / KV)))
        j = min(ny - 1, max(0, int((lat - dis[1]) / KV)))
        h = j * nx + i
        if not kara[h]:
            en, enh = 1e9, None
            for dj in range(-4, 5):
                for di in range(-4, 5):
                    a, b = i + di, j + dj
                    if 0 <= a < nx and 0 <= b < ny and kara[b * nx + a]:
                        dd = di * di + dj * dj
                        if dd < en:
                            en, enh = dd, b * nx + a
            h = enh
        if h is not None and h not in tohum:
            tohum[h] = idx
    return pts, tohum


def dijkstra(dis, nx, ny, kara, tohum, surt, ceza):
    import heapq
    KVDY = KV * KM_DER
    uzak = np.full(nx * ny, np.inf)
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
        dx = KVDY * math.cos(math.radians(dis[1] + (j + 0.5) * KV))
        for di, dj in P.D8:
            a, b = i + di, j + dj
            if not (0 <= a < nx and 0 <= b < ny):
                continue
            k = b * nx + a
            if not kara[k]:
                continue
            nd = d + math.hypot(dx * di, KVDY * dj) * surt[k] + ceza[k]
            if nd < uzak[k]:
                uzak[k] = nd
                sahip[k] = sahip[h]
                heapq.heappush(q, (nd, k))
    return sahip


def sinir(sahip, nx, ny):
    a = sahip.reshape(ny, nx)
    m = np.zeros_like(a, dtype=bool)
    m[:, :-1] |= (a[:, :-1] != a[:, 1:]) & (a[:, :-1] >= 0) & (a[:, 1:] >= 0)
    m[:-1, :] |= (a[:-1, :] != a[1:, :]) & (a[:-1, :] >= 0) & (a[1:, :] >= 0)
    return m


def main():
    T0 = time.time()
    tum = {}
    for ad, ic, aciklama in BOLGELER:
        t0 = time.time()
        print("═" * 74)
        print("%s — %s   kutu %s" % (ad, aciklama, str(ic)))
        print("═" * 74)
        dis, nx, ny, kara, z, egim, surt = kur(ic)
        kl = kara > 0
        pts, tohum = tohumla(dis, nx, ny, kara)
        # ⚠️ `E.nehir_maskesi` KENDİ kutusuna (Anadolu pilotu) bağlı — bu bölge
        # için bölge parametreli hâli kullanılıyor. Motorun iki kapısı aynı.
        neh = nehir_bolge(dis, nx, ny)
        print("   ızgara %d×%d · kara %s · tohum %d · nehir hücresi %s"
              % (nx, ny, "{:,}".format(int(kl.sum())), len(pts),
                 "{:,}".format(int(neh.sum()))))
        jj, _ii = np.divmod(np.arange(nx * ny), nx)
        cy = dis[1] + (jj + 0.5) * KV
        alan = (HUCRE_KM ** 2) * np.cos(np.radians(cy))
        print("   eğim m/hücre: medyan %.0f · p85 %.0f · en yüksek %.0f"
              % (np.median(egim[kl]), np.percentile(egim[kl], 85), egim[kl].max()))

        s0 = dijkstra(dis, nx, ny, kara, tohum, surt, np.zeros(nx * ny))
        b0 = sinir(s0, nx, ny)
        # engelsiz sınıra uzaklık alanı (hücre cinsinden)
        uzaklik = ndimage.distance_transform_edt(~b0)
        er = s0 >= 0
        satirlar = []
        print("   %-10s %8s %11s %11s %9s %9s %11s"
              % ("eşik m/hüc", "yüzdelik", "sırt hücre", "kilitlenen",
                 "kayma", "KAYAN", "el değiş km²"))
        for p in MUTLAK:
            esik = float(p)
            ceza = np.zeros(nx * ny)
            ceza[(egim > esik) & kl] += CEZA_SIRT
            ceza[(neh > 0) & kl] += CEZA_NEHIR
            s = dijkstra(dis, nx, ny, kara, tohum, surt, ceza)
            b = sinir(s, nx, ny)
            bant = ((egim > esik) & kl).reshape(ny, nx)
            kilit = int((b & bant).sum())
            # ⚠️ İKİ KAYMA ÖLÇÜSÜ — birincisi TEK BAŞINA yanıltır:
            #   `kayma`  bütün sınır hücrelerinin ortalaması. Sınırın çoğu
            #            HİÇ kıpırdamadığı için sıfırlar ortalamayı ezer.
            #   `kayan`  YALNIZ gerçekten kaymış hücrelerin ortalaması.
            # İkisini birden basıyorum; tek sayı bir hükmü taşıyamaz.
            d_hep = uzaklik[b] * HUCRE_KM if b.any() else np.zeros(1)
            kayma = float(d_hep.mean())
            kayan = float(d_hep[d_hep > 0].mean()) if (d_hep > 0).any() else 0.0
            yuzde = float((egim[kl] <= esik).mean() * 100)
            degisen = (s != s0) & er
            km2 = float(alan[degisen].sum())
            satirlar.append((p, esik, int(((egim > esik) & kl).sum()), kilit,
                             kayma, km2, s, ceza, kayan, yuzde))
            print("   %-10d %7.1f%% %11s %11s %8.1f %8.1f %11s"
                  % (p, yuzde, "{:,}".format(int(((egim > esik) & kl).sum())),
                     "{:,}".format(kilit), kayma, kayan, "{:,.0f}".format(km2)))
        # NEHİR PAYI — E4 öngörüsünün sınavı
        ceza_n = np.zeros(nx * ny)
        ceza_n[(neh > 0) & kl] += CEZA_NEHIR
        sn = dijkstra(dis, nx, ny, kara, tohum, surt, ceza_n)
        km2_n = float(alan[(sn != s0) & er].sum())
        ref = [r for r in satirlar if r[0] == 300][0]
        print("   yalnız NEHİR: %s km²  ⇒ 300 m/hücre eşiğindeki değişimin "
              "%%%.0f'i NEHİRDEN"
              % ("{:,.0f}".format(km2_n), 100.0 * km2_n / max(1.0, ref[5])))
        tum[ad] = dict(dis=dis, nx=nx, ny=ny, kara=kara, z=z, egim=egim,
                       neh=neh, s0=s0, satir=satirlar, pts=pts, ic=ic,
                       nehir_km2=km2_n, sure=time.time() - t0)
        print("   %s: %.1f sn · RSS %.0f MB" % (ad, time.time() - t0, rss()))
        ciz(ad, tum[ad])
    print("TOPLAM %.1f sn · TEPE RSS %.0f MB" % (time.time() - T0, rss()))
    np.save(os.path.join(BURA, "_esik_ozet.npy"),
            np.array([(a, r[0], r[3], r[4], r[5]) for a, v in tum.items()
                      for r in v["satir"]], dtype=object), allow_pickle=True)


def nehir_bolge(dis, nx, ny):
    """E.nehir_maskesi'nin bölge parametreli hâli — motorun İKİ kapısı."""
    BUYUK_SADE, sadelestir, _sat = E.motorun_nehir_kapisi()
    kutu = sbox(*dis)
    parca = []
    with open(os.path.join(DEPO, "veri-kaynak", "ne_10m_rivers.geojson"),
              encoding="utf-8") as f:
        ham = json.load(f)
    for ft in ham["features"]:
        pr = ft["properties"]
        ad = next((a for a in (pr.get("name"), pr.get("name_en"),
                               pr.get("name_alt"))
                   if a and sadelestir(a) in BUYUK_SADE), None)
        try:
            sr = float(pr.get("scalerank"))
        except (TypeError, ValueError):
            sr = 99.0
        if ad is None and sr > 5.0:
            continue
        g = shape(ft["geometry"])
        if not g.envelope.intersects(kutu):
            continue
        k = g.intersection(kutu)
        if not k.is_empty:
            parca.append(k)
    del ham
    mask = np.zeros(nx * ny, dtype=np.uint8)
    if not parca:
        return mask
    hat = shapely.union_all(parca)
    for geo in (hat.geoms if hasattr(hat, "geoms") else [hat]):
        n = max(2, int(geo.length / (KV * 0.4)))
        for t in np.linspace(0, 1, n):
            q = geo.interpolate(t, normalized=True)
            i, j = int((q.x - dis[0]) / KV), int((q.y - dis[1]) / KV)
            if 0 <= i < nx and 0 <= j < ny:
                mask[j * nx + i] = 1
    return mask


def ciz(ad, v):
    dis, nx, ny, ic = v["dis"], v["nx"], v["ny"], v["ic"]
    z, kl, neh = v["z"], v["kara"] > 0, v["neh"]
    lat = (ic[1] + ic[3]) / 2
    ext = [dis[0], dis[2], dis[1], dis[3]]
    ls = LightSource(azdeg=315, altdeg=35)
    hs = ls.hillshade(z, vert_exag=4.0,
                      dx=KV * 111320 * np.cos(np.radians(lat)), dy=KV * 111320)

    def hat(s):
        a = s.reshape(ny, nx)
        segs = []
        for j, i in zip(*np.nonzero(a[:, :-1] != a[:, 1:])):
            x = dis[0] + (i + 1) * KV
            segs.append([(x, dis[1] + j * KV), (x, dis[1] + (j + 1) * KV)])
        for j, i in zip(*np.nonzero(a[:-1, :] != a[1:, :])):
            y = dis[1] + (j + 1) * KV
            segs.append([(dis[0] + i * KV, y), (dis[0] + (i + 1) * KV, y)])
        return segs

    n = len(v["satir"]) + 1
    fig, axs = plt.subplots(2, (n + 1) // 2, figsize=(6.4 * ((n + 1) // 2), 11.5),
                            dpi=115)
    axs = axs.ravel()
    for ax, (bas, s, ceza) in zip(
            axs, [("ENGELSİZ — yalnız sürtünme", v["s0"], None)]
            + [("eşik %.0f m/hücre — karanın %%%.1f'i sırt sayıldı\n"
                "kilitlenen %s · KAYAN sınır %.1f km · %s km²"
                % (r[1], 100.0 - r[9], "{:,}".format(r[3]), r[8],
                   "{:,.0f}".format(r[5])), r[6], r[7])
               for r in v["satir"]]):
        ax.imshow(np.ma.masked_less(z, -50), cmap="terrain", origin="lower",
                  extent=ext, vmin=-200, vmax=3200)
        ax.imshow(hs, cmap="gray", origin="lower", extent=ext, alpha=0.45,
                  vmin=0.1, vmax=0.95)
        if ceza is not None:
            sirt = (ceza > 0) & kl & (neh == 0)
            ax.imshow(np.ma.masked_where(~sirt.reshape(ny, nx), np.ones((ny, nx))),
                      cmap=ListedColormap([[0.45, 0.0, 0.55]]), origin="lower",
                      extent=ext, alpha=0.26, interpolation="nearest")
        ax.imshow(np.ma.masked_where(~((neh > 0) & kl).reshape(ny, nx),
                                     np.ones((ny, nx))),
                  cmap=ListedColormap([[0.0, 0.35, 0.95]]), origin="lower",
                  extent=ext, alpha=0.95, interpolation="nearest")
        ax.add_collection(LineCollection(hat(s), colors="black", linewidths=0.95))
        ax.set_xlim(ic[0], ic[2]); ax.set_ylim(ic[1], ic[3])
        ax.set_aspect(1.0 / np.cos(np.radians(lat)))
        ax.set_title(bas, fontsize=10.5)
        ax.set_xticks([]); ax.set_yticks([])
    for ax in axs[n:]:
        ax.axis("off")
    fig.suptitle("ENGEL EŞİĞİ SERİSİ — %s · mor: sırt bandı · mavi: nehir · "
                 "sırt cezası %.0f km · nehir cezası %.0f km · EŞİĞİ EMRE SEÇECEK"
                 % (ad, CEZA_SIRT, CEZA_NEHIR), fontsize=13)
    fig.tight_layout()
    y = os.path.join(CIKTI, "KITA8-ESIK-MUTLAK-%s-0912.png" % ad)
    fig.savefig(y, bbox_inches="tight"); plt.close(fig)
    print("   PNG %7.0f KB  %s" % (os.path.getsize(y) / 1024.0, y))


if __name__ == "__main__":
    main()
