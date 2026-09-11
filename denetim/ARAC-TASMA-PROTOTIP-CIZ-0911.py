# -*- coding: utf-8 -*-
"""TAŞMA PROTOTİP v3 — ASIL SORUNUN RESMİ: sınır araziyi görüyor mu?

v2'nin resmi okunuyordu ama YANLIŞ SORUYU cevaplıyordu: renk lekesi sınırın
EĞRİ olduğunu gösteriyor, ARAZİYE UYDUĞUNU göstermiyor. İkisi ayrı iddia.
⇒ v3: renk kaldırıldı, arazi öne alındı, sınır tek başına HAT olarak çizildi,
  ve üçüncü panelde İKİ YÖNTEM ÜST ÜSTE bindirildi — kaymayı göz ölçsün.
"""
import os
import sys
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.colors import LightSource
from matplotlib.collections import LineCollection

sys.stdout.reconfigure(encoding="utf-8")
BURA = os.path.dirname(os.path.abspath(__file__))
d = np.load(os.path.join(BURA, "_tasma.npz"), allow_pickle=True)
vor, s_duz, s_egim, z = d["vor"], d["s_duz"], d["s_egim"], d["z"]
nx, ny = int(d["nx"]), int(d["ny"])
pts = d["pts"]
DIS = (24.5, 34.5, 46.5, 43.5)
KV = 0.05
CIKTI = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\denetim"


def hatlar(sahip):
    a = sahip.reshape(ny, nx)
    segs = []
    fd = (a[:, :-1] != a[:, 1:])
    for j, i in zip(*np.nonzero(fd)):
        x = DIS[0] + (i + 1) * KV
        segs.append([(x, DIS[1] + j * KV), (x, DIS[1] + (j + 1) * KV)])
    fy = (a[:-1, :] != a[1:, :])
    for j, i in zip(*np.nonzero(fy)):
        y = DIS[1] + (j + 1) * KV
        segs.append([(DIS[0] + i * KV, y), (DIS[0] + (i + 1) * KV, y)])
    return segs


def arazi(ax, kutu):
    lat = (kutu[1] + kutu[3]) / 2
    dy = KV * 111320.0
    ls = LightSource(azdeg=315, altdeg=35)
    hs = ls.hillshade(z, vert_exag=4.0, dx=dy * np.cos(np.radians(lat)), dy=dy)
    ext = [DIS[0], DIS[2], DIS[1], DIS[3]]
    ax.imshow(np.ma.masked_less(z, -50), cmap="terrain", origin="lower",
              extent=ext, vmin=-200, vmax=3200, alpha=1.0)
    ax.imshow(hs, cmap="gray", origin="lower", extent=ext, alpha=0.45,
              vmin=0.1, vmax=0.95)
    ax.set_xlim(kutu[0], kutu[2]); ax.set_ylim(kutu[1], kutu[3])
    ax.set_aspect(1.0 / np.cos(np.radians(lat)))
    ax.set_xticks([]); ax.set_yticks([])


def noktalar(ax, kutu):
    p = [q for q in pts if kutu[0] - .3 <= q[0] <= kutu[2] + .3
         and kutu[1] - .3 <= q[1] <= kutu[3] + .3]
    ax.plot([q[0] for q in p], [q[1] for q in p], "o", ms=4.2,
            mfc="white", mec="black", mew=0.8, zorder=5)


def ciz(kutu, dosya, baslik):
    fig, axs = plt.subplots(1, 3, figsize=(21, 7.2), dpi=140)
    arazi(axs[0], kutu); noktalar(axs[0], kutu)
    axs[0].add_collection(LineCollection(hatlar(vor), colors="black", linewidths=1.1))
    axs[0].set_title("① BUGÜN — düz çizgi Voronoi\nsınır araziyi HİÇ görmüyor",
                     fontsize=12)

    arazi(axs[1], kutu); noktalar(axs[1], kutu)
    axs[1].add_collection(LineCollection(hatlar(s_egim), colors="black", linewidths=1.1))
    axs[1].set_title("② ÖNERİLEN — kara yolu + eğim sürtünmesi\n"
                     "sınır vadiden akıyor, sırttan kaçıyor", fontsize=12)

    arazi(axs[2], kutu); noktalar(axs[2], kutu)
    axs[2].add_collection(LineCollection(hatlar(vor), colors="#1030c0",
                                         linewidths=1.5, linestyles="dotted"))
    axs[2].add_collection(LineCollection(hatlar(s_egim), colors="#b00000",
                                         linewidths=1.5))
    axs[2].set_title("③ ÜST ÜSTE — mavi noktalı: bugün · kırmızı: önerilen\n"
                     "kayma NEREDE oluyor", fontsize=12)
    fig.suptitle(baslik, fontsize=13)
    fig.tight_layout()
    y = os.path.join(CIKTI, dosya)
    fig.savefig(y, bbox_inches="tight"); plt.close(fig)
    print("  PNG %7.0f KB  %s" % (os.path.getsize(y) / 1024.0, y))


if __name__ == "__main__":
    ciz((42.0, 37.5, 46.0, 40.0),
        "TASMA-PROTOTIP-1-YANYANA-0911.png",
        "SINIR ARAZİYİ GÖRÜYOR MU? — Doğu Anadolu (42-46°D, 37,5-40°K) · "
        "ızgara 0,05° ≈ 5,6 km · eğim çarpanı 0,005")
    ciz((29.0, 36.3, 33.0, 38.8),
        "TASMA-PROTOTIP-5-TOROS-0911.png",
        "İKİNCİ PENCERE — Toroslar ve Akdeniz kıyısı (29-33°D, 36,3-38,8°K): "
        "dağ VE kıyı aynı karede")
