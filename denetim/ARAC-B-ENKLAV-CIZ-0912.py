# -*- coding: utf-8 -*-
"""ENKLAV DAĞILIMI — grafik. Veriyi KENDİ KOŞUMUN ÇIKTISINDAN okuyor.

🔴 Sayılar elle yazılmadı: `tasks/b3ly9wsgt.output` (bu oturumun 10 dakikalık
   ölçüm koşusunun günlüğü) ayrıştırılıyor. Kaynak dosya raporda adıyla anılıyor.
⚠️ Grafik EN BÜYÜK 12 TEKİL enklavı gösteriyor (27'nin 12'si) — tavan zaten
   yalnız üst ucu ilgilendiriyor. Kalan 15'in yeri yüzdelik tablosuyla veriliyor.
"""
import io
import os
import re
import sys

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np

sys.stdout.reconfigure(encoding="utf-8")
CIKTI = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\denetim"
LOG = (r"C:\Users\emrem\AppData\Local\Temp\claude"
       r"\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-"
       r"\3d557ab4-454e-4b21-98e0-60171b40e6fd\tasks\b3ly9wsgt.output")

ham = io.open(LOG, encoding="utf-8", errors="replace").read()
blok = ham.split("EN BÜYÜK 12 TEKİL ENKLAV:")[1].split("═")[0]
kayit = []
for satir in blok.splitlines():
    m = re.match(r"\s{6}(\S.*?)\s{2,}([\d,]+) km²\s+en yakın mesafe\s+(\d+) km",
                 satir)
    if m:
        kayit.append((m.group(1).strip(), float(m.group(2).replace(",", "")),
                      float(m.group(3))))
print("ayrıştırılan kayıt: %d" % len(kayit))
for k in kayit:
    print("   %-24s %12s km²  %4.0f km" % (k[0], "{:,.0f}".format(k[1]), k[2]))

ad = [k[0] for k in kayit]
alan = np.array([k[1] for k in kayit])
mes = np.array([k[2] for k in kayit])

TAVAN_ONERI = 100000.0
# dağılımdan türetilen tavan: en büyük log boşluğun ortası (koşunun çıktısı)
TAVAN_TURETILEN = 281762.0

fig, axs = plt.subplots(1, 2, figsize=(18, 7.2), dpi=135)

ax = axs[0]
y = np.arange(len(ad))[::-1]
renk = ["#b00000" if a > TAVAN_TURETILEN else
        "#d07000" if a > TAVAN_ONERI else "#2a6f2a" for a in alan]
ax.barh(y, alan, color=renk, height=0.68)
ax.set_yticks(y); ax.set_yticklabels(ad, fontsize=10)
ax.set_xscale("log")
ax.set_xlabel("enklav alanı (km², LOG ölçek)", fontsize=11)
ax.axvline(TAVAN_ONERI, color="#d07000", ls="--", lw=2)
ax.axvline(TAVAN_TURETILEN, color="#b00000", ls="-", lw=2)
ax.text(TAVAN_ONERI, len(ad) - 0.3, " ÖNERİLEN 100.000\n (bir TAHMİNDEN)",
        color="#d07000", fontsize=9.5, va="top")
ax.text(TAVAN_TURETILEN, len(ad) - 3.2, " TÜRETİLEN 281.762\n (DAĞILIMDAN)",
        color="#b00000", fontsize=9.5, va="top")
for i, a in zip(y, alan):
    ax.text(a * 1.06, i, "{:,.0f}".format(a), va="center", fontsize=8.5)
ax.set_title("EN BÜYÜK 12 TEKİL ENKLAV (27'nin 12'si)\n"
             "iki tavan: biri tahminden, biri dağılımdan", fontsize=12)
ax.grid(axis="x", alpha=0.3)

ax = axs[1]
s = np.sort(alan)[::-1]
lg = np.log10(s)
bosluk = lg[:-1] - lg[1:]
ax.plot(range(1, len(s) + 1), s, "o-", color="#203060", ms=7)
ax.set_yscale("log")
i = int(np.argmax(bosluk))
ax.annotate("EN BÜYÜK LOG BOŞLUK\n%s → %s km²  (×%.1f)\n⇒ tavan = geometrik orta"
            % ("{:,.0f}".format(s[i + 1]), "{:,.0f}".format(s[i]),
               10 ** bosluk[i]),
            xy=(i + 1.5, np.sqrt(s[i] * s[i + 1])), fontsize=10,
            xytext=(3.4, 40000),
            arrowprops=dict(arrowstyle="->", color="#b00000", lw=1.6),
            color="#b00000")
ax.axhline(TAVAN_ONERI, color="#d07000", ls="--", lw=2)
ax.axhline(TAVAN_TURETILEN, color="#b00000", ls="-", lw=2)
ax.set_xlabel("sıra (büyükten küçüğe)", fontsize=11)
ax.set_ylabel("alan (km², LOG)", fontsize=11)
ax.set_title("TAVAN NEREDEN TÜRETİLİR — sıralı dizide en büyük SIÇRAMA\n"
             "Cübeyl ile Cebel Merre arasında 2,1 kat", fontsize=12)
ax.grid(alpha=0.3)

fig.suptitle("B② ENKLAV TAVANI — 100.000 km² BİR ÖLÇÜM DEĞİL, BİR TAHMİNDİ. "
             "Dağılımın kendi boşluğu 281.762 km² diyor.", fontsize=13)
fig.tight_layout()
y1 = os.path.join(CIKTI, "KITA8-ENKLAV-DAGILIM-0912.png")
fig.savefig(y1, bbox_inches="tight")
print("PNG %7.0f KB  %s" % (os.path.getsize(y1) / 1024.0, y1))
