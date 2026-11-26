# -*- coding: utf-8 -*-
"""KITA 8 — B ENGEL TERİMİ · İKİNCİ TUR: NEHİR KAPISI AÇILDI + GEÇİT SINAVI.

Birinci engel turunda (M-3457) iki eksik damgalanmıştı:
  🔴 nehir yarısı SINANMADI — motorun 31 adlık `BUYUK_SADE` beyaz listesi
     koşan dosyanın içindeydi, koşu 9 canlıyken alınamıyordu
  ⚪ geçit ÖLÇÜLEMEDİ — kurduğum sınav geçidi değil "sırta oturmayı" ölçüyordu

Koşu bitti, `arac/` açıldı. İkisi de bu turda kapanıyor.

🔴 NEHİR KAPISI KOPYALANMADI, MOTORUN KENDİ KOD METNİ ÇALIŞTIRILDI:
   `uret_petek.py`nin 552-588. satırları (BUYUK · _ad_sadelestir · BUYUK_SADE)
   olduğu gibi `exec` ediliyor. Yeniden yazsaydım `D023`ü çiğnerdim: kendi
   yazdığın ayrıştırıcı, var olandan her zaman kötüdür.
"""
import io
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

BURA = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BURA)
sys.stdout.reconfigure(encoding="utf-8")
import tasma_prototip as P                                          # noqa: E402

DIS, IC, KV = P.DIS, P.IC, P.KV_ADIM
KM_DER = 111.32
HUCRE_KM = KV * KM_DER
CIKTI, DEPO = P.CIKTI, P.DEPO
CEZA_NEHIR = 2 * 0.30 * KM_DER          # 66,8 km — motorun nehir_mes=0.30'u
CEZA_SIRT = 2 * 0.35 * KM_DER           # 77,9 km — motorun sirt_mes=0.35'i


def rss():
    try:
        import psutil
        return psutil.Process().memory_info().rss / 1048576.0
    except Exception:
        return float("nan")


def motorun_nehir_kapisi():
    """uret_petek.py:552-588'i OLDUĞU GİBİ çalıştırır. Yeniden yazmaz."""
    kaynak = io.open(os.path.join(DEPO, "arac", "uret_petek.py"),
                     encoding="utf-8").read().splitlines()
    bas = next(i for i, s in enumerate(kaynak) if s.startswith("BUYUK = {"))
    son = next(i for i, s in enumerate(kaynak)
               if i > bas and "kopruay" in s) + 1
    ns = {}
    exec("\n".join(kaynak[bas:son]), ns)
    return ns["BUYUK_SADE"], ns["_ad_sadelestir"], (bas + 1, son)


def nehir_maskesi(nx, ny, iki_kapi=True):
    BUYUK_SADE, sadelestir, satir = motorun_nehir_kapisi()
    yol = os.path.join(DEPO, "veri-kaynak", "ne_10m_rivers.geojson")
    kutu = sbox(*DIS)
    parca, adlar = [], set()
    ad_ile, sr_ile = 0, 0
    with open(yol, encoding="utf-8") as f:
        ham = json.load(f)
    for ft in ham["features"]:
        pr = ft["properties"]
        adaylar = [pr.get("name"), pr.get("name_en"), pr.get("name_alt")]
        ad = next((a for a in adaylar
                   if a and sadelestir(a) in BUYUK_SADE), None) if iki_kapi else None
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
        if k.is_empty:
            continue
        parca.append(k)
        adlar.add(ad or (pr.get("name") or pr.get("name_en") or "?"))
        if ad is not None:
            ad_ile += 1
        else:
            sr_ile += 1
    del ham
    mask = np.zeros(nx * ny, dtype=np.uint8)
    hat = shapely.union_all(parca) if parca else None
    if hat is not None:
        for geo in (hat.geoms if hasattr(hat, "geoms") else [hat]):
            n = max(2, int(geo.length / (KV * 0.4)))
            for t in np.linspace(0, 1, n):
                p = geo.interpolate(t, normalized=True)
                i, j = int((p.x - DIS[0]) / KV), int((p.y - DIS[1]) / KV)
                if 0 <= i < nx and 0 <= j < ny:
                    mask[j * nx + i] = 1
    return mask, len(parca), ad_ile, sr_ile, sorted(adlar), satir


def dijkstra(nx, ny, kara, tohum, surt, ceza, yonler):
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


def sinir_maskesi(sahip, nx, ny):
    a = sahip.reshape(ny, nx)
    m = np.zeros_like(a, dtype=bool)
    m[:, :-1] |= (a[:, :-1] != a[:, 1:]) & (a[:, :-1] >= 0) & (a[:, 1:] >= 0)
    m[:-1, :] |= (a[:-1, :] != a[1:, :]) & (a[:-1, :] >= 0) & (a[1:, :] >= 0)
    return m.ravel()


def gecit_sinavi(sahip_engelli, sahip_engelsiz, bant, egim, nx, ny, ad):
    """🔴 BİRİNCİ TURDA YANLIŞ ETİKETLEDİĞİM SINAVIN DOĞRUSU.

    Soru: sınır sırt bandını ENİNE geçerken ALÇAK yerden mi geçiyor?
    Yöntem: bandın BAĞLANTILI BİLEŞENLERİ çıkarılır; bir bileşenin içinden
    geçen sınır hücrelerinin eğimi, O BİLEŞENİN eğim dağılımıyla
    karşılaştırılır. Geçit varsa geçişler dağılımın ALT KUYRUĞUNA toplanır.
    ⚠️ Bileşen bazında bakmak şart: bütün bandı tek havuz saymak, alçak bir
    tepeyle yüksek bir sırayı aynı dağılıma koyar ve sinyali yıkar.
    """
    from scipy import ndimage
    et, n = ndimage.label(bant.reshape(ny, nx))
    et = et.ravel()
    s1 = sinir_maskesi(sahip_engelli, nx, ny)
    yuzdeler = []
    agir = 0
    for c in range(1, n + 1):
        ic = et == c
        if ic.sum() < 40:
            continue
        kesen = ic & s1
        if kesen.sum() < 3:
            continue
        agir += 1
        # kesişin eğimi, bileşenin eğim dağılımında hangi YÜZDELİKTE?
        yuzdeler.append(float((egim[ic] < egim[kesen].mean()).mean() * 100))
    if not yuzdeler:
        return None
    return np.array(yuzdeler), agir, n


def main():
    T0 = time.time()
    d = np.load(os.path.join(BURA, "_tasma.npz"), allow_pickle=True)
    vor, s_duz, s_egim, z = d["vor"], d["s_duz"], d["s_egim"], d["z"]
    nx, ny = int(d["nx"]), int(d["ny"])
    kara, surt, pts = d["kara"], d["surt"], d["pts"]
    egim = (surt - 1.0) / 0.005
    kl = kara > 0
    tohum = P.tohumlari_otur(nx, ny, kara, [tuple(p) for p in pts])
    er = s_egim >= 0
    n_er = int(er.sum())

    print("═" * 74)
    print("① NEHİR KAPISI — İKİ KAPI DA AÇIK (motorun kendi kod metni)")
    print("═" * 74)
    neh2, p2, ad2, sr2, adlar, satir = nehir_maskesi(nx, ny, True)
    neh1, p1, _a, _s, _ad1, _st = nehir_maskesi(nx, ny, False)
    print("   uret_petek.py satır %d-%d exec edildi (BUYUK · _ad_sadelestir ·"
          " BUYUK_SADE)" % satir)
    print("   YALNIZ scalerank≤5 (birinci tur)  : %2d parça · %s hücre"
          % (p1, "{:,}".format(int(neh1.sum()))))
    print("   İKİ KAPI (ad listesi + scalerank)  : %2d parça · %s hücre"
          % (p2, "{:,}".format(int(neh2.sum()))))
    print("      ad kapısından geçen %d · scalerank kapısından %d" % (ad2, sr2))
    print("      adlar: %s" % ", ".join(a for a in adlar if a and a != "?")[:300])
    print("   ⇒ birinci turun kaçırdığı: %s hücre (%.1f KAT)"
          % ("{:,}".format(int(neh2.sum() - neh1.sum())),
             neh2.sum() / max(1, neh1.sum())))

    esik = {p: float(np.percentile(egim[kl], p)) for p in (70, 85, 95)}
    kosu = {}
    for ad, cins in (("sırt+nehir", "ikisi"), ("yalnız NEHİR", "nehir"),
                     ("yalnız SIRT", "sirt")):
        ceza = np.zeros(nx * ny)
        if cins in ("ikisi", "sirt"):
            ceza[(egim > esik[85]) & kl] += CEZA_SIRT
        if cins in ("ikisi", "nehir"):
            ceza[(neh2 > 0) & kl] += CEZA_NEHIR
        t = time.time()
        _u, s = dijkstra(nx, ny, kara, tohum, surt, ceza, P.D8)
        kosu[ad] = (s, ceza, time.time() - t)
    for p in (70, 95):
        ceza = np.zeros(nx * ny)
        ceza[(egim > esik[p]) & kl] += CEZA_SIRT
        ceza[(neh2 > 0) & kl] += CEZA_NEHIR
        _u, s = dijkstra(nx, ny, kara, tohum, surt, ceza, P.D8)
        kosu["sırt+nehir p%d" % p] = (s, ceza, 0.0)

    print()
    print("═" * 74)
    print("② HANGİ ENGEL NE KADAR — eğimli ızgaraya göre (eşik p85)")
    print("═" * 74)
    for ad, (s, ceza, sn) in kosu.items():
        f = int(((s != s_egim) & er).sum())
        print("   %-16s engelli hücre %6s · değişen %6s (%%%.1f)%s"
              % (ad, "{:,}".format(int(((ceza > 0) & kl).sum())),
                 "{:,}".format(f), 100.0 * f / n_er,
                 "  %.2f sn" % sn if sn else ""))

    print()
    print("═" * 74)
    print("③ P7 DENKLİĞİ — koordinatörün kabul ölçütü")
    print("═" * 74)
    f_yol = int(((vor != s_duz) & er).sum())
    f_eg = int(((s_duz != s_egim) & er).sum())
    s_en = kosu["sırt+nehir"][0]
    f_en = int(((s_egim != s_en) & er).sum())
    print("   kara yolu %s · eğim %s · ENGEL %s" % ("{:,}".format(f_yol),
          "{:,}".format(f_eg), "{:,}".format(f_en)))
    print("   ⇒ kara yolu = eğim ? %s   ·   üçü de farklı ? %s"
          % ("EVET (değişmedi, DEĞİŞEMEZ)" if f_yol == f_eg else "hayır",
             "EVET" if len({f_yol, f_eg, f_en}) == 3 else "hayır"))
    print("   📌 İlk iki terim engelden ETKİLENEMEZ: biri düz Voronoi ↔")
    print("      sürtünmesiz, öteki sürtünmesiz ↔ eğimli. Engel ÜÇÜNCÜ terim.")
    print("      Ölçüt tanımı gereği ateşlenemez (D081). Yerine geçen ölçüt ④'te.")

    print()
    print("═" * 74)
    print("④ GEÇİT SINAVI — DOĞRUSU (birinci turdaki etiketim ters idi)")
    print("═" * 74)
    bant = (egim > esik[85]) & kl
    sonuc = gecit_sinavi(s_en, s_egim, bant, egim, nx, ny, "p85")
    if sonuc is None:
        print("   ⚪ ÖLÇÜLEMEDİ — yeterli bileşen yok")
    else:
        yuz, agir, ntop = sonuc
        print("   sırt bandı bileşeni %d (≥40 hücre ve ≥3 sınır hücresi olan: %d)"
              % (ntop, agir))
        print("   'kesişin eğimi, bileşenin dağılımında hangi yüzdelikte?'")
        print("      ortalama %%%.1f · medyan %%%.1f · %%50'nin ALTINDA kalan "
              "bileşen: %d / %d"
              % (yuz.mean(), np.median(yuz), int((yuz < 50).sum()), len(yuz)))
        print("   ⇒ %s" % ("🟢 GEÇİTTEN SIZIYOR — kesişler dağılımın ALT "
                           "yarısında toplanıyor" if np.median(yuz) < 50 else
                           "🔴 GEÇİT ETKİSİ YOK — kesişler alçak yerde değil"))
        s0 = sinir_maskesi(s_egim, nx, ny)
        s1 = sinir_maskesi(s_en, nx, ny)
        print("   (yan ölçüm) sınırın bantta geçirdiği hücre: %s → %s  %+.0f%%"
              % ("{:,}".format(int((s0 & bant).sum())),
                 "{:,}".format(int((s1 & bant).sum())),
                 100.0 * ((s1 & bant).sum() / max(1, (s0 & bant).sum()) - 1)))
        print("   📌 Bu yan ölçüm birinci turda MANŞETTİ ve TERS ETİKETLİYDİ:")
        print("      artış BAŞARIDIR (sınır sırtın üstüne çıkıyor), sınavı")
        print("      GEÇİT sanmıştım. Geçidi ölçen yukarıdaki yüzdelik.")

    # ── RESİM ─────────────────────────────────────────────────────────────
    lat = 38.0
    ext = [DIS[0], DIS[2], DIS[1], DIS[3]]
    ls = LightSource(azdeg=315, altdeg=35)
    hs = ls.hillshade(z, vert_exag=4.0,
                      dx=KV * 111320 * np.cos(np.radians(lat)), dy=KV * 111320)

    def hatlar(s):
        a = s.reshape(ny, nx)
        segs = []
        for j, i in zip(*np.nonzero(a[:, :-1] != a[:, 1:])):
            x = DIS[0] + (i + 1) * KV
            segs.append([(x, DIS[1] + j * KV), (x, DIS[1] + (j + 1) * KV)])
        for j, i in zip(*np.nonzero(a[:-1, :] != a[1:, :])):
            y = DIS[1] + (j + 1) * KV
            segs.append([(DIS[0] + i * KV, y), (DIS[0] + (i + 1) * KV, y)])
        return segs

    def arazi(ax, kutu, sirt=None, nehir=None):
        ax.imshow(np.ma.masked_less(z, -50), cmap="terrain", origin="lower",
                  extent=ext, vmin=-200, vmax=3200)
        ax.imshow(hs, cmap="gray", origin="lower", extent=ext, alpha=0.45,
                  vmin=0.1, vmax=0.95)
        if sirt is not None:
            ax.imshow(np.ma.masked_where(~sirt.reshape(ny, nx), np.ones((ny, nx))),
                      cmap=ListedColormap([[0.45, 0.0, 0.55]]), origin="lower",
                      extent=ext, alpha=0.28, interpolation="nearest")
        if nehir is not None:
            ax.imshow(np.ma.masked_where(~nehir.reshape(ny, nx), np.ones((ny, nx))),
                      cmap=ListedColormap([[0.0, 0.35, 0.95]]), origin="lower",
                      extent=ext, alpha=0.95, interpolation="nearest")
        ax.set_xlim(kutu[0], kutu[2]); ax.set_ylim(kutu[1], kutu[3])
        ax.set_aspect(1.0 / np.cos(np.radians((kutu[1] + kutu[3]) / 2)))
        ax.set_xticks([]); ax.set_yticks([])

    for etiket, kutu, dosya, bas in (
            ("TOROS", (29.0, 36.3, 33.0, 38.8), "KITA8-B-1-UC-HAL-TOROS-0912.png",
             "Toroslar ve Akdeniz kıyısı"),
            ("KIZILIRMAK", (32.0, 38.5, 37.0, 41.5),
             "KITA8-B-2-UC-HAL-NEHIR-0912.png",
             "Kızılırmak–Yeşilırmak havzası — NEHİR engelinin göründüğü yer")):
        fig, axs = plt.subplots(1, 3, figsize=(21, 7.2), dpi=138)
        arazi(axs[0], kutu)
        axs[0].add_collection(LineCollection(hatlar(vor), colors="black", lw=1.15))
        axs[0].set_title("① BUGÜN — düz çizgi Voronoi", fontsize=12)
        arazi(axs[1], kutu)
        axs[1].add_collection(LineCollection(hatlar(s_egim), colors="black", lw=1.15))
        axs[1].set_title("② SÜRTÜNME — sınır eğriliyor\nama sırta KİLİTLENMİYOR",
                         fontsize=12)
        arazi(axs[2], kutu, sirt=(egim > esik[85]) & kl, nehir=(neh2 > 0) & kl)
        axs[2].add_collection(LineCollection(hatlar(s_en), colors="black", lw=1.15))
        axs[2].set_title("③ ENGEL — mor: sırt bandı (p85) · MAVİ: nehir\n"
                         "sırt cezası %.0f km · nehir cezası %.0f km"
                         % (CEZA_SIRT, CEZA_NEHIR), fontsize=12)
        fig.suptitle("B GÖSTERİMİ — %s · aynı kutu · aynı tohumlar · tek fark "
                     "YÖNTEM" % bas, fontsize=13)
        fig.tight_layout()
        y = os.path.join(CIKTI, dosya)
        fig.savefig(y, bbox_inches="tight"); plt.close(fig)
        print("   PNG %7.0f KB  %s" % (os.path.getsize(y) / 1024.0, y))

    # eşik serisi
    fig, axs = plt.subplots(1, 3, figsize=(21, 7.2), dpi=135)
    for ax, (ad, p) in zip(axs, (("p70", 70), ("p85", 85), ("p95", 95))):
        anahtar = "sırt+nehir" if p == 85 else "sırt+nehir p%d" % p
        s, ceza, _ = kosu[anahtar]
        arazi(ax, (29.0, 36.3, 33.0, 38.8), sirt=(ceza > 0) & kl & (neh2 == 0),
              nehir=(neh2 > 0) & kl)
        ax.add_collection(LineCollection(hatlar(s), colors="black", lw=1.15))
        ax.set_title("eşik %s = %.0f m/hücre\nengelli hücre %s · değişen %%%.1f"
                     % (ad, esik[p], "{:,}".format(int(((ceza > 0) & kl).sum())),
                        100.0 * ((s != s_egim) & er).sum() / n_er), fontsize=12)
    fig.suptitle("EŞİK NE KADAR SERT? — üç değer yan yana (hangisi doğru: "
                 "Emre'nin gözü söyler)", fontsize=13)
    fig.tight_layout()
    y3 = os.path.join(CIKTI, "KITA8-B-3-ESIK-SERISI-0912.png")
    fig.savefig(y3, bbox_inches="tight"); plt.close(fig)
    print("   PNG %7.0f KB  %s" % (os.path.getsize(y3) / 1024.0, y3))
    print()
    print("   TOPLAM %.1f sn · TEPE RSS %.1f MB" % (time.time() - T0, rss()))


if __name__ == "__main__":
    main()
