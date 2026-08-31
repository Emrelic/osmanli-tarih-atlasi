# -*- coding: utf-8 -*-
"""_renk_aciklik_olcum.py — RENK AÇIKLIK TABANI, tek kullanımlık ÖLÇÜM.

ORHANGAZİ'nin istediği ①: bugünkü paletin L* dağılımı ne, kaç kimlik
"gölge bandı"nda. `arac/renk_olc.py`nin KENDİ fonksiyonlarını kullanıyor
(`h2r`/`bind`/`lab`/`dE`/`OSM`/`ALT`) — kendi Lab/ΔE hesabımı YAZMADIM
(CLAUDE.md §11).

Yalnız OKUR — BOYALAR'a dokunmaz.
"""
import io
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from renkler import BOYALAR, OPAKLIK          # noqa: E402
from renk_olc import h2r, bind, lab, dE, OSM, ALT  # noqa: E402

out = io.open("_renk_aciklik_olcum_ciktisi.txt", "w", encoding="utf-8")


def L(lab_uclusu):
    return lab_uclusu[0]


# ── ① BİZAN VAKASINDAN TABAN TÜRET ──────────────────────────────────────
eski_bizans = "#8877b8"     # sikayetten ONCEKI (parti-0002/H-0005'te anilan)
yeni_bizans = "#0f0f5d"     # SIKAYETE SEBEP OLAN, BUGUNKU
eski_L = L(lab(bind(h2r(eski_bizans), OPAKLIK["yabanci"])))
yeni_L = L(lab(bind(h2r(yeni_bizans), OPAKLIK["yabanci"])))
out.write("=== ① BİZANS VAKASI — TABAN TÜRETME ===\n")
out.write("eski (%s, şikayet YOK)  bindirilmiş L* = %.1f\n" % (eski_bizans, eski_L))
out.write("yeni (%s, şikayet VAR)  bindirilmiş L* = %.1f\n" % (yeni_bizans, yeni_L))
out.write("ALTLIK'ın kendi L*'ı (bindirmesiz) = %.1f\n" % ALT[0])
out.write("\n")

# ── ② PALETİN TAMAMININ BİNDİRİLMİŞ L* DAĞILIMI ─────────────────────────
kayitlar = []
for kid, v in BOYALAR.items():
    hx = v[1] if isinstance(v, (tuple, list)) else v
    if not isinstance(hx, str) or not hx.startswith("#") or len(hx) < 7:
        continue
    Lb = L(lab(bind(h2r(hx), OPAKLIK["yabanci"])))
    kayitlar.append((Lb, kid, hx))
kayitlar.sort()

out.write("=== ② PALETİN BİNDİRİLMİŞ (yabancı opaklığı %.2f) L* DAĞILIMI ===\n"
          % OPAKLIK["yabanci"])
out.write("toplam kimlik: %d\n" % len(kayitlar))
if kayitlar:
    n = len(kayitlar)
    p05 = kayitlar[int(n * 0.05)][0]
    p50 = kayitlar[int(n * 0.50)][0]
    p95 = kayitlar[min(n - 1, int(n * 0.95))][0]
    out.write("L* p05=%.1f · p50=%.1f · p95=%.1f · min=%.1f · max=%.1f\n"
              % (p05, p50, p95, kayitlar[0][0], kayitlar[-1][0]))

# Aday taban: yeni_bizans (şikayete sebep olan) ile ALTLIK arasında,
# eski_bizans'ın (şikayetsiz) L*'ına EN YAKIN tamsayı — yani "şikayet
# eden ile etmeyen arasındaki sınırı, etmeyenin YANINA" koy.
for esik in (50, 52, 55, 57, 58, 59, 60, 61, 62, 63, 65, 68, 70):
    altinda = [k for k in kayitlar if k[0] < esik]
    out.write("  aday esik L*<%d: %d kimlik altinda kaliyor\n" % (esik, len(altinda)))

out.write("\n── En koyu 70 (bindirilmiş L* sırasıyla) ──\n")
for Lb, kid, hx in kayitlar[:70]:
    out.write("  L*=%5.1f  %-28s %s\n" % (Lb, kid, hx))

out.close()
print("yazildi: _renk_aciklik_olcum_ciktisi.txt")
