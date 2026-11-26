# -*- coding: utf-8 -*-
"""KADEME A — İKİ HARİTA: ağırlıksız Voronoi ↔ AĞIRLIKLI Voronoi (Apollonius).

Z-0022'nin cevabı. `Z-0002` (Sahra: tavan var / tavan yok) ile AYNI AİLE:
tek parametrenin iki hâli, yan yana, aynı kutu aynı tohumlar.

🔴 NE İSTENDİĞİ ÖLÇÜLDÜ, UYDURULMADI — kaynak `ALTYAPI.md`:
   :309  sahip(hücre) = argmin over i of  maliyet(yerleşim_i → hücre) ÷ w_i
   :314  kademe A = öklid mesafe  ⇒ AĞIRLIKLI VORONOI (Apollonius)
   :468  "kademe A: ağırlıklı Voronoi (formül yerine oturur, davranış DEĞİŞMEZ)"
   :111  ağırlık tablosu — ÖLÇÜLMÜŞ komşu mesafelerinden (29:46:67 ≈ 1:1,6:2,3)

🟡 VE BİR UYUM KARARI: mesafe DERECE uzayında ölçülüyor, çünkü motorun kendi
   Voronoi'si de öyle (`uret_petek.py:792` → `Point(lon, lat)`). Km'ye
   çevirmek "bugünkü hâli" değiştirir ve kıyası bozar. Ağırlık bir ORAN
   olduğu için bu seçim ağırlığın etkisini değiştirmez, yalnız TABANI
   motorunkiyle aynı tutar.
"""
import os
import sys
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection
from matplotlib.colors import ListedColormap

BURA = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BURA)
sys.stdout.reconfigure(encoding="utf-8")
import tasma_prototip as P                                          # noqa: E402
sys.path.insert(0, os.path.join(P.DEPO, "arac"))
import girdi                                                        # noqa: E402

DIS, IC, KV = P.DIS, P.IC, P.KV_ADIM
CIKTI = P.CIKTI
# ALTYAPI.md :111 — ELLE SEÇİLMEDİ, tablodan alındı
W = {1: 1.50, 2: 1.00, 3: 0.69, 4: 0.43, 0: 0.69}
AD = {1: "başkent", 2: "eyalet merkezi", 3: "sancak merkezi",
      4: "kaza/kasaba", 0: "kademesiz"}


def main():
    d = np.load(os.path.join(BURA, "_tasma.npz"), allow_pickle=True)
    nx, ny, kara, z = int(d["nx"]), int(d["ny"]), d["kara"], d["z"]
    kl = kara > 0

    hepsi = girdi.yukle(sessiz=True)
    pts = [(y["lon"], y["lat"], y["ad"], (y.get("k") if y.get("k") in W else 0))
           for y in hepsi
           if DIS[0] <= y["lon"] <= DIS[2] and DIS[1] <= y["lat"] <= DIS[3]]
    P_xy = np.array([(p[0], p[1]) for p in pts])
    kdm = np.array([p[3] for p in pts])
    agr = np.array([W[k] for k in kdm])
    print("pilot kutu: %d nokta" % len(pts))
    for k in sorted(W):
        n = int((kdm == k).sum())
        if n:
            print("   k%d %-16s w=%.2f  %3d nokta" % (k, AD[k], W[k], n))

    jj, ii = np.divmod(np.arange(nx * ny), nx)
    cx = DIS[0] + (ii + 0.5) * KV
    cy = DIS[1] + (jj + 0.5) * KV

    def voronoi(w):
        """argmin_i  d(i,hücre) / w_i — w=None ise ağırlıksız."""
        en = np.full(nx * ny, np.inf)
        sahip = np.full(nx * ny, -1, dtype="int32")
        for i in range(len(pts)):
            dd = np.hypot(cx - P_xy[i, 0], cy - P_xy[i, 1])
            if w is not None:
                dd = dd / w[i]
            m = dd < en
            en[m] = dd[m]
            sahip[m] = i
        sahip[~kl] = -1
        return sahip

    s0 = voronoi(None)          # ① bugünkü hâl: ağırlıksız
    s1 = voronoi(agr)           # ② KADEME A: ağırlıklı
    er = kl
    n = int(er.sum())
    f = int(((s0 != s1) & er).sum())
    print()
    print("═══ İKİ HÂL ARASINDAKİ FARK ═══")
    print("   kara hücresi %s · sahip DEĞİŞEN %s  (%%%.1f)"
          % ("{:,}".format(n), "{:,}".format(f), 100.0 * f / n))

    # hücre alanı (km²) — enlem düzeltmeli
    alan = (KV * 111.32) ** 2 * np.cos(np.radians(cy))
    print("   yer değiştiren alan: %s km²"
          % "{:,.0f}".format(float(alan[(s0 != s1) & er].sum())))
    print()
    print("   KADEME BAŞINA KAZANÇ/KAYIP (km², ağırlıksız → ağırlıklı):")
    for k in sorted(W):
        if not (kdm == k).any():
            continue
        idx = np.nonzero(kdm == k)[0]
        a0 = float(alan[np.isin(s0, idx) & er].sum())
        a1 = float(alan[np.isin(s1, idx) & er].sum())
        print("      k%d %-16s w=%.2f  %11s → %11s km²  %+7.1f%%"
              % (k, AD[k], W[k], "{:,.0f}".format(a0), "{:,.0f}".format(a1),
                 100.0 * (a1 - a0) / max(1.0, a0)))

    d0 = np.array([float(alan[(s0 == i) & er].sum()) for i in range(len(pts))])
    d1 = np.array([float(alan[(s1 == i) & er].sum()) for i in range(len(pts))])
    dg = d1 - d0
    print()
    print("   EN ÇOK KAZANAN 5:")
    for i in np.argsort(dg)[::-1][:5]:
        print("      %-24s k%d  %+9s km²  (%s → %s)"
              % (pts[i][2], kdm[i], "{:,.0f}".format(dg[i]),
                 "{:,.0f}".format(d0[i]), "{:,.0f}".format(d1[i])))
    print("   EN ÇOK KAYBEDEN 5:")
    for i in np.argsort(dg)[:5]:
        print("      %-24s k%d  %+9s km²  (%s → %s)"
              % (pts[i][2], kdm[i], "{:,.0f}".format(dg[i]),
                 "{:,.0f}".format(d0[i]), "{:,.0f}".format(d1[i])))
    yok = int(((d1 == 0) & (d0 > 0)).sum())
    print("   🔴 PETEĞİ TAMAMEN YOK OLAN yerleşim: %d" % yok)
    if yok:
        for i in np.nonzero((d1 == 0) & (d0 > 0))[0][:8]:
            print("      %-24s k%d  %s km² → 0"
                  % (pts[i][2], kdm[i], "{:,.0f}".format(d0[i])))

    # ── ÇİZİM ────────────────────────────────────────────────────────────
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

    rng = np.random.default_rng(20260911)
    cmap = ListedColormap(rng.random((len(pts), 3)) * 0.5 + 0.42)
    ext = [DIS[0], DIS[2], DIS[1], DIS[3]]
    BOY = {1: 10.0, 2: 7.0, 3: 4.0, 4: 2.4, 0: 4.0}
    RNK = {1: "#c00000", 2: "#e07000", 3: "#202020", 4: "#606060", 0: "#3050c0"}

    def panel(ax, s, kutu, baslik, hat=None, dolgu=True):
        if dolgu and s is not None:
            m = np.ma.masked_less(s.reshape(ny, nx).astype(float), 0)
            ax.imshow(m, cmap=cmap, origin="lower", extent=ext, alpha=0.72,
                      interpolation="nearest")
        ax.imshow(np.ma.masked_where(kl.reshape(ny, nx), np.ones((ny, nx))),
                  cmap=ListedColormap([[0.86, 0.91, 0.96]]), origin="lower",
                  extent=ext, interpolation="nearest")
        for hh, rr, ll, st in (hat or []):
            ax.add_collection(LineCollection(hh, colors=rr, linewidths=ll,
                                             linestyles=st))
        for k in (4, 3, 0, 2, 1):
            m = kdm == k
            if m.any():
                ax.plot(P_xy[m, 0], P_xy[m, 1], "o", ms=BOY[k], mfc=RNK[k],
                        mec="white", mew=0.7, zorder=6,
                        label="k%d %s (w=%.2f)" % (k, AD[k], W[k]))
        ax.set_xlim(kutu[0], kutu[2]); ax.set_ylim(kutu[1], kutu[3])
        ax.set_aspect(1.0 / np.cos(np.radians((kutu[1] + kutu[3]) / 2)))
        ax.set_title(baslik, fontsize=11.5)
        ax.set_xticks([]); ax.set_yticks([])

    kutu = (28.0, 36.5, 36.0, 41.0)
    fig, axs = plt.subplots(1, 3, figsize=(22, 7.6), dpi=135)
    panel(axs[0], s0, kutu, "① BUGÜN — AĞIRLIKSIZ Voronoi\nher yerleşim eşit: "
          "kasaba da eyalet merkezi kadar toprak alır",
          [(hatlar(s0), "black", 0.8, "solid")])
    panel(axs[1], s1, kutu, "② KADEME A — AĞIRLIKLI Voronoi (Apollonius)\n"
          "d ÷ w · ağırlık ALTYAPI.md:111 tablosundan",
          [(hatlar(s1), "black", 0.8, "solid")])
    panel(axs[2], None, kutu, "③ ÜST ÜSTE — mavi noktalı: bugün · kırmızı: Kademe A\n"
          "büyük merkezler büyüyor, kasabalar küçülüyor", dolgu=False,
          hat=[(hatlar(s0), "#1030c0", 1.2, "dotted"),
               (hatlar(s1), "#b00000", 1.3, "solid")])
    axs[0].legend(loc="lower left", fontsize=8.5, framealpha=0.92)
    fig.suptitle("KADEME A — İKİ HARİTA · aynı kutu · aynı %d tohum · TEK FARK "
                 "AĞIRLIK · sahip değişen kara %%%.1f (%s km²)"
                 % (len(pts), 100.0 * f / n,
                    "{:,.0f}".format(float(alan[(s0 != s1) & er].sum()))),
                 fontsize=13)
    fig.tight_layout()
    y1 = os.path.join(CIKTI, "KADEME-A-1-IKI-HARITA-0911.png")
    fig.savefig(y1, bbox_inches="tight"); plt.close(fig)

    fig, axs = plt.subplots(2, 1, figsize=(17, 12), dpi=118)
    panel(axs[0], s0, IC, "ÜST — bugün (ağırlıksız)",
          [(hatlar(s0), "black", 0.45, "solid")])
    panel(axs[1], s1, IC, "ALT — KADEME A (ağırlıklı)",
          [(hatlar(s1), "black", 0.45, "solid")])
    for a in axs:
        a.add_patch(plt.Rectangle((kutu[0], kutu[1]), kutu[2] - kutu[0],
                                  kutu[3] - kutu[1], fill=False, ec="red", lw=1.6))
    fig.suptitle("BÜTÜN PİLOT KUTU — kırmızı çerçeve: yakınlaştırılan pencere",
                 fontsize=12.5)
    fig.tight_layout()
    y2 = os.path.join(CIKTI, "KADEME-A-2-GENEL-0911.png")
    fig.savefig(y2, bbox_inches="tight"); plt.close(fig)

    for y in (y1, y2):
        print("   PNG %7.0f KB  %s" % (os.path.getsize(y) / 1024.0, y))


if __name__ == "__main__":
    main()
