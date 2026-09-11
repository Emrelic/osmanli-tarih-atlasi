# -*- coding: utf-8 -*-
"""TAŞMA PROTOTİP II — ENGEL TERİMİ. Emre'nin tarifinin ÖTEKİ YARISI.

Birinci tur SÜREKLİ sürtünmeyi denedi ve bulgusu şuydu: sınır araziyi görüyor
ama sırta KİLİTLENMİYOR, çünkü `1 + 0,005·eğim` bir ALAN, bir ENGEL değil.
Emre'nin tarifi ise engel diliyle yazılmış: *"ilerleme KESİLECEK veya belli bir
zorlanma ile karşıya geçecek"*.

BU TUR: eşikli engel. İki cins, ayrı ayrı:
   SIRT ENGELİ   eğim bir EŞİĞİ aşınca giriş maliyeti SIÇRAR (basamak)
   NEHİR ENGELİ  nehir hattı geçen hücreye girmek sabit ceza öder

🔴 EŞİK UYDURULMADI — verinin KENDİ yüzdelikleri (p70/p85/p95) denendi.
🔴 CEZA UYDURULMADI — birinci turun çapasından geliyor: motorun kendi
   `sirt_mes=0.35` / `nehir_mes=0.30` yaslama yarıçapları ⇒ Δ = 2R.
🟡 VE BİR MODEL VARSAYIMI AÇIKÇA: ceza HÜCREYE GİRİŞTE ödenir. Yani sırt
   BOYUNCA yürümek de pahalıdır, yalnız KESMEK değil. Gerçek bir engel yalnız
   kesişte ödetirdi; raster dünyada bunun karşılığı yok. Sonucu etkiler ve
   bu yüzden yazıyorum.
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
from matplotlib.colors import LightSource
from matplotlib.collections import LineCollection
import shapely
from shapely.geometry import shape

BURA = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BURA)
sys.stdout.reconfigure(encoding="utf-8")
import tasma_prototip as P                                           # noqa: E402

DIS, IC, KV = P.DIS, P.IC, P.KV_ADIM
KM_DER = 111.32
HUCRE_KM = KV * KM_DER
CIKTI = P.CIKTI
DEPO = P.DEPO

# Çapalar — birinci turun ÖLÇÜLMÜŞ türetmesi (uret_petek.py:1221)
R_NEHIR, R_SIRT = 0.30 * KM_DER, 0.35 * KM_DER
CEZA_NEHIR, CEZA_SIRT = 2 * R_NEHIR, 2 * R_SIRT     # 66,8 km · 77,9 km


def rss():
    try:
        import psutil
        return psutil.Process().memory_info().rss / 1048576.0
    except Exception:
        return float("nan")


def nehir_hucreleri(nx, ny):
    """Motorun İKİNCİ kapısı (scalerank ≤ 5) uygulanır.
    ⚠️ BİRİNCİ kapı (31 adlık BUYUK_SADE beyaz listesi) UYGULANMADI —
    `_ad_sadelestir` motorun içinde ve dosyayı çalıştırmadan alınamıyor.
    ⇒ Küçük ama sınır taşıyan akarsular (Porsuk, Bakırçay, Devrez) EKSİK.
      Bu bir SADELEŞTİRME, ve sayısı aşağıda basılıyor ki görünür olsun."""
    yol = os.path.join(DEPO, "veri-kaynak", "ne_10m_rivers.geojson")
    kutu = shapely.geometry.box(*DIS)
    parca = []
    with open(yol, encoding="utf-8") as f:
        ham = json.load(f)
    for ft in ham["features"]:
        pr = ft["properties"]
        try:
            sr = float(pr.get("scalerank"))
        except (TypeError, ValueError):
            sr = 99.0
        if sr > 5.0:
            continue
        g = shape(ft["geometry"])
        if g.envelope.intersects(kutu):
            k = g.intersection(kutu)
            if not k.is_empty:
                parca.append(k)
    del ham
    hat = shapely.union_all(parca) if parca else None
    mask = np.zeros(nx * ny, dtype=np.uint8)
    if hat is None:
        return mask, 0
    shapely.prepare(hat)
    # Hattı hücrelere damgala: hat üstündeki noktaları örnekle (çizgi ince,
    # nokta-içinde sınaması işe yaramaz; hattı örnekleyip hücreye yazıyoruz)
    for geo in (hat.geoms if hasattr(hat, "geoms") else [hat]):
        uz = geo.length
        n = max(2, int(uz / (KV * 0.4)))
        for t in np.linspace(0, 1, n):
            p = geo.interpolate(t, normalized=True)
            i = int((p.x - DIS[0]) / KV)
            j = int((p.y - DIS[1]) / KV)
            if 0 <= i < nx and 0 <= j < ny:
                mask[j * nx + i] = 1
    return mask, len(parca)


def dijkstra_engelli(nx, ny, kara, tohum, surt, ceza, yonler):
    """uret_petek.py:2238'in mantığı + HÜCREYE GİRİŞ CEZASI (ceza[k], km)."""
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
        dx = KVDY * math.cos(math.radians(DIS[1] + (j + 0.5) * KV))
        for di, dj in yonler:
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
    return uzak, sahip


def sinir_hucreleri(sahip, nx, ny):
    """Sınırın GEÇTİĞİ hücreler: komşusundan farklı sahipli kara hücresi."""
    a = sahip.reshape(ny, nx)
    m = np.zeros_like(a, dtype=bool)
    m[:, :-1] |= (a[:, :-1] != a[:, 1:]) & (a[:, :-1] >= 0) & (a[:, 1:] >= 0)
    m[:-1, :] |= (a[:-1, :] != a[1:, :]) & (a[:-1, :] >= 0) & (a[1:, :] >= 0)
    return m.ravel()


def main():
    T0 = time.time()
    d = np.load(os.path.join(BURA, "_tasma.npz"), allow_pickle=True)
    vor, s_duz, s_egim, z = d["vor"], d["s_duz"], d["s_egim"], d["z"]
    nx, ny = int(d["nx"]), int(d["ny"])
    kara, surt, pts = d["kara"], d["surt"], d["pts"]
    egim = (surt - 1.0) / 0.005                       # m/hücre — geri çevir
    kl = kara > 0
    tohum = P.tohumlari_otur(nx, ny, kara, [tuple(p) for p in pts])
    print("önbellekten okundu · RSS %.1f MB" % rss())

    neh, n_parca = nehir_hucreleri(nx, ny)
    print("  nehir: %d parça (scalerank≤5) · %d hücre damgalandı · RSS %.1f MB"
          % (n_parca, int(neh.sum()), rss()))

    # ── EŞİKLER — UYDURULMADI, verinin kendi yüzdelikleri ─────────────────
    esikler = {}
    for p in (70, 85, 95):
        esikler["p%d" % p] = float(np.percentile(egim[kl], p))
    print("  eğim (m/hücre): medyan %.0f · p70 %.0f · p85 %.0f · p95 %.0f · en yüksek %.0f"
          % (float(np.median(egim[kl])), esikler["p70"], esikler["p85"],
             esikler["p95"], float(egim[kl].max())))
    print("  ceza: sırt %.1f km · nehir %.1f km  (çapa: sirt_mes=0.35 · nehir_mes=0.30)"
          % (CEZA_SIRT, CEZA_NEHIR))

    sonuc = {}
    for ad, esik in esikler.items():
        ceza = np.zeros(nx * ny)
        ceza[(egim > esik) & kl] += CEZA_SIRT
        ceza[(neh > 0) & kl] += CEZA_NEHIR
        t = time.time()
        _u, s = dijkstra_engelli(nx, ny, kara, tohum, surt, ceza, P.D8)
        sonuc[ad] = (s, esik, ceza, time.time() - t)
        print("  ENGELLİ %s (eşik %.0f m/hücre · engelli hücre %s) %.2f sn"
              % (ad, esik, "{:,}".format(int(((ceza > 0) & kl).sum())),
                 time.time() - t))

    # ── ÖLÇÜMLER ──────────────────────────────────────────────────────────
    er = s_egim >= 0
    n_er = int(er.sum())
    print()
    print("  ═══ ① ENGEL NE KADAR DEĞİŞTİRDİ (eğimli ızgaraya göre) ═══")
    for ad, (s, esik, ceza, _t) in sonuc.items():
        f = int(((s != s_egim) & er).sum())
        print("     %-4s  %6s hücre  %%%.1f" % (ad, "{:,}".format(f),
                                                100.0 * f / n_er))

    print()
    print("  ═══ ② P7 DENKLİĞİ BOZULDU MU — koordinatörün kabul ölçütü ═══")
    f_yol = int(((vor != s_duz) & er).sum())
    f_eg = int(((s_duz != s_egim) & er).sum())
    print("     ENGELSİZ:  kara yolu %s · eğim %s  ⇒ %s"
          % ("{:,}".format(f_yol), "{:,}".format(f_eg),
             "EŞİT" if f_yol == f_eg else "farklı"))
    for ad, (s, esik, ceza, _t) in sonuc.items():
        f_en = int(((s_egim != s) & er).sum())
        print("     %-4s   kara yolu %s · eğim %s · ENGEL %s  ⇒ %s"
              % (ad, "{:,}".format(f_yol), "{:,}".format(f_eg),
                 "{:,}".format(f_en),
                 "DENKLİK BOZULDU" if len({f_yol, f_eg, f_en}) == 3
                 else "🔴 hâlâ bir denklik var"))

    print()
    print("  ═══ ③ GEÇİT SINAVI — su kendiliğinden delikten mi sızıyor? ═══")
    print("     (sınırın sırt bandını KESTİĞİ hücrelerin eğim ortalaması)")
    for ad, (s, esik, ceza, _t) in sonuc.items():
        bant = (egim > esik) & kl
        s0 = sinir_hucreleri(s_egim, nx, ny) & bant
        s1 = sinir_hucreleri(s, nx, ny) & bant
        print("     %-4s  bant %s hücre · sınır bandı kesen: ENGELSİZ %s → "
              "ENGELLİ %s  (%%%.0f azalma)"
              % (ad, "{:,}".format(int(bant.sum())), "{:,}".format(int(s0.sum())),
                 "{:,}".format(int(s1.sum())),
                 100.0 * (1 - s1.sum() / max(1, s0.sum()))))
        if s1.sum():
            print("            kesişin eğim ortalaması: bant %.0f m/hücre · "
                  "KESİŞ %.0f m/hücre  ⇒ %s"
                  % (float(egim[bant].mean()), float(egim[s1].mean()),
                     "GEÇİTTEN sızıyor (kesiş bandın ORTALAMASINDAN ALÇAK)"
                     if egim[s1].mean() < egim[bant].mean() else
                     "🔴 geçit etkisi YOK"))

    # ── RESİM ─────────────────────────────────────────────────────────────
    kutu = (29.0, 36.3, 33.0, 38.8)
    lat = (kutu[1] + kutu[3]) / 2
    ext = [DIS[0], DIS[2], DIS[1], DIS[3]]
    ls = LightSource(azdeg=315, altdeg=35)
    hs = ls.hillshade(z, vert_exag=4.0, dx=KV * 111320 * np.cos(np.radians(lat)),
                      dy=KV * 111320)

    def hatlar(sahip):
        a = sahip.reshape(ny, nx)
        segs = []
        for j, i in zip(*np.nonzero(a[:, :-1] != a[:, 1:])):
            x = DIS[0] + (i + 1) * KV
            segs.append([(x, DIS[1] + j * KV), (x, DIS[1] + (j + 1) * KV)])
        for j, i in zip(*np.nonzero(a[:-1, :] != a[1:, :])):
            y = DIS[1] + (j + 1) * KV
            segs.append([(DIS[0] + i * KV, y), (DIS[0] + (i + 1) * KV, y)])
        return segs

    def arazi(ax, engel=None):
        ax.imshow(np.ma.masked_less(z, -50), cmap="terrain", origin="lower",
                  extent=ext, vmin=-200, vmax=3200)
        ax.imshow(hs, cmap="gray", origin="lower", extent=ext, alpha=0.45,
                  vmin=0.1, vmax=0.95)
        if engel is not None:
            m = np.ma.masked_where(~engel.reshape(ny, nx), np.ones((ny, nx)))
            ax.imshow(m, cmap=matplotlib.colors.ListedColormap([[0.5, 0, 0.6]]),
                      origin="lower", extent=ext, alpha=0.30,
                      interpolation="nearest")
        ax.set_xlim(kutu[0], kutu[2]); ax.set_ylim(kutu[1], kutu[3])
        ax.set_aspect(1.0 / np.cos(np.radians(lat)))
        ax.set_xticks([]); ax.set_yticks([])

    fig, axs = plt.subplots(1, 4, figsize=(25, 6.6), dpi=135)
    arazi(axs[0])
    axs[0].add_collection(LineCollection(hatlar(s_egim), colors="black", lw=1.1))
    axs[0].set_title("① ENGELSİZ — yalnız sürekli sürtünme\n(birinci turun sonucu)",
                     fontsize=11.5)
    for n, (ad, (s, esik, ceza, _t)) in enumerate(sonuc.items(), start=1):
        arazi(axs[n], (ceza > 0) & kl)
        axs[n].add_collection(LineCollection(hatlar(s), colors="black", lw=1.1))
        axs[n].set_title("%s ENGELLİ · eşik %s (%.0f m/hücre)\nmor = engel bandı "
                         "(sırt + nehir)" % ("②③④"[n - 1], ad, esik), fontsize=11.5)
    fig.suptitle("ENGEL TERİMİ — eşik değiştikçe ne oluyor? · sırt cezası %.0f km · "
                 "nehir cezası %.0f km (çapa: motorun kendi yaslama yarıçapları)"
                 % (CEZA_SIRT, CEZA_NEHIR), fontsize=13)
    fig.tight_layout()
    y1 = os.path.join(CIKTI, "TASMA-PROTOTIP-6-ENGEL-ESIK-0911.png")
    fig.savefig(y1, bbox_inches="tight"); plt.close(fig)

    s85 = sonuc["p85"][0]
    fig, axs = plt.subplots(1, 3, figsize=(20, 7.0), dpi=140)
    arazi(axs[0]); axs[0].add_collection(LineCollection(hatlar(vor), colors="black", lw=1.2))
    axs[0].set_title("① BUGÜN — düz çizgi Voronoi", fontsize=12)
    arazi(axs[1]); axs[1].add_collection(LineCollection(hatlar(s_egim), colors="black", lw=1.2))
    axs[1].set_title("② SÜRTÜNME — birinci tur\nsınır eğriliyor ama sırta KİLİTLENMİYOR",
                     fontsize=12)
    arazi(axs[2], (sonuc["p85"][2] > 0) & kl)
    axs[2].add_collection(LineCollection(hatlar(s85), colors="black", lw=1.2))
    axs[2].set_title("③ ENGEL — eşik p85\nmor bant: sırt+nehir engeli", fontsize=12)
    fig.suptitle("EMRE'NİN TARİFİNİN İKİ YARISI — aynı kutu, aynı tohumlar, "
                 "tek fark YÖNTEM (Toroslar, 29-33°D)", fontsize=13)
    fig.tight_layout()
    y2 = os.path.join(CIKTI, "TASMA-PROTOTIP-7-UC-ASAMA-0911.png")
    fig.savefig(y2, bbox_inches="tight"); plt.close(fig)

    for y in (y1, y2):
        print("  PNG %7.0f KB  %s" % (os.path.getsize(y) / 1024.0, y))
    print("  TOPLAM %.1f sn · TEPE RSS %.1f MB" % (time.time() - T0, rss()))


if __name__ == "__main__":
    main()
