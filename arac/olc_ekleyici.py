# -*- coding: utf-8 -*-
"""EKLEYİCİ KAPI ÖN ÖLÇÜMÜ — 11 saatlik koşuyu beklemeden.

Emre 18 Ağustos 2026'da hükmü verdi: *"puanlama kapısı ekleyici olsun."*
Bu betik, kapıyı YAZMADAN ÖNCE etkisini ölçer — `§11`: öngörü ölçümden
önce yazılır, ve bir motor değişikliği ölçülmeden savunulamaz.

═══ BOŞLUĞUN İKİ SINIFI — ve kapı yalnız birini kapatır ═══
    A  sahipli peteğin içi, tavan yetişiyor   → BUGÜN BOYALI
    B  A1 tavanının KESTİĞİ toprak            → petek YOK   → KAPI KAPATIR
    C  SAHİPSİZ bir noktanın peteği           → petek VAR   → kapı KAPATAMAZ
       (Teymâ · Kuveyt · Vladikavkaz — çare VERİDE, motorda değil)

Ayrım hayatî: ekleyici kapı yazılıp C sınıfı boşluklar durunca
"kapı çalışmadı" sanılır. Çalışır — o boşluk onun işi değildir.

═══ YÖNTEM ═══
Izgara (varsayılan 0,25°) × motor_kara.geojson. Her kara hücresi için:
  · en yakın nokta (kuş uçuşu — Voronoi VEKİLİ, kesin değil)
  · o noktanın o gün sahibi · A1 tavanı yetişiyor mu
  · 400 km içindeki BÜTÜN noktalardan devlet devlet Emre'nin puanı
Sonra A/B/C kovalarına ayırır ve kapının kapatabileceği alanı verir.

🔴 ALETİN SINIRI: kuş uçuşu bakar; motor sürtünmeli mesafe + Dijkstra
kullanır ve A1 tavanı YÖNE DUYARLI. ⇒ Bu bir BÜYÜKLÜK MERTEBESİ ölçümü,
motorun çıktısı değil. "Kaç milyon km²" sorusuna cevap verir, "hangi
piksel" sorusuna vermez.

    py arac/olc_ekleyici.py --gun 1577-01-01 --gun 1650-06-15
"""
import argparse
import io
import json
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")  # bkz. nicin_bos.py
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

import numpy as np                                          # noqa: E402
# 🔴 scipy YOK (ölçüldü: ModuleNotFoundError). cKDTree yerine PARÇA PARÇA
# kaba kuvvet — 2589 nokta × ~40k kara hücresi, parça başına 2000 hücre
# ⇒ 5,2 M kayan sayı / ~42 MB. Bağımlılık eklemektense ölçülmüş bir
# maliyetle yaşamak ucuz.
from shapely.geometry import shape, Point                   # noqa: E402
from shapely.prepared import prep                           # noqa: E402
import girdi                                                # noqa: E402
from nicin_bos import PUAN_HALKA, PUAN_ESIK, TAVAN_KM, sahip  # noqa: E402


def yukle_kara():
    yol = os.path.join(KOK, "veri-kaynak", "motor_kara.geojson")
    gj = json.load(io.open(yol, encoding="utf-8"))
    if gj.get("type") == "FeatureCollection":
        from shapely.ops import unary_union
        return unary_union([shape(f["geometry"]) for f in gj["features"]])
    return shape(gj.get("geometry", gj))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--gun", action="append", default=None)
    ap.add_argument("--adim", type=float, default=0.25)
    a = ap.parse_args()
    gunler = a.gun or ["1400-06-15", "1500-06-15", "1577-01-01",
                       "1600-06-15", "1650-06-15", "1750-06-15",
                       "1850-06-15"]

    Y = girdi.yukle(sessiz=True)
    print(f"evren {len(Y)} nokta · ızgara {a.adim}°")
    KARA = yukle_kara()
    print(f"motor_kara yüklendi (alan birim² {KARA.area:,.1f})")

    x0, y0, x1, y1 = KARA.bounds
    xs = np.arange(x0 + a.adim / 2, x1, a.adim)
    ys = np.arange(y0 + a.adim / 2, y1, a.adim)
    GX, GY = np.meshgrid(xs, ys)
    GX, GY = GX.ravel(), GY.ravel()

    # kara süzgeci
    hazir = prep(KARA)
    ic = np.fromiter((hazir.covers(Point(px, py)) for px, py in zip(GX, GY)),
                     dtype=bool, count=len(GX))
    GX, GY = GX[ic], GY[ic]
    alan = (a.adim * 111.32) ** 2 * np.cos(np.radians(GY))
    print(f"kara hücresi {len(GX):,} · toplam {alan.sum():,.0f} km²")

    # düzlem izdüşümü (yaklaşık, mesafe için): x'i ortalama enlemle ölçekle
    ort = np.cos(np.radians(np.clip(GY, -80, 80)))
    PY = np.array([y["lat"] for y in Y])
    PX = np.array([y["lon"] for y in Y])
    tavan = np.array([TAVAN_KM.get(y.get("k") or 0, TAVAN_KM[0]) for y in Y],
                     dtype=float)

    # düz km düzlemi
    QX = GX * 111.32 * ort
    QY = GY * 110.574
    NX = PX * 111.32 * np.cos(np.radians(PY))
    NY = PY * 110.574
    PARCA = 2000

    print(f"\n{'gün':12s} {'BOYALI(A)':>14s} {'A1 KESTİ(B)':>14s} "
          f"{'SAHİPSİZ(C)':>14s} {'B→kapı doldurur':>18s}")
    print("-" * 78)
    for gun in gunler:
        sah = [sahip(y, gun) for y in Y]
        sahipli = np.array([s is not None for s in sah])
        # devlet devlet nokta kümeleri (o gün sahipli olanlar)
        kume = {}
        for j, s in enumerate(sah):
            if s is not None:
                kume.setdefault(s, []).append(j)
        kume = {s: np.array(v) for s, v in kume.items()}

        A = np.zeros(len(GX), dtype=bool)
        B = np.zeros(len(GX), dtype=bool)
        C = np.zeros(len(GX), dtype=bool)
        dolar = np.zeros(len(GX), dtype=bool)
        osm_ge = np.zeros(len(GX), dtype=bool)
        en_ix = np.zeros(len(GX), dtype=np.int32)

        for b0 in range(0, len(GX), PARCA):
            b1 = min(b0 + PARCA, len(GX))
            dx = QX[b0:b1, None] - NX[None, :]
            dy = QY[b0:b1, None] - NY[None, :]
            m = np.sqrt(dx * dx + dy * dy)          # (parça, nokta) km

            i_en = m.argmin(axis=1)
            en_ix[b0:b1] = i_en
            d_en = m[np.arange(b1 - b0), i_en]
            yet = d_en <= tavan[i_en]
            en_s = sahipli[i_en]
            A[b0:b1] = en_s & yet
            B[b0:b1] = ~yet                          # tavan kesti ⇒ petek YOK
            C[b0:b1] = (~en_s) & yet

            # Emre'nin puanı — halka halka, devlet devlet
            k = np.zeros(m.shape, dtype=np.int16)
            once = 0.0
            for e, pu in PUAN_HALKA:
                k[(m >= once) & (m < e)] = pu
                once = e
            en_iyi = np.zeros(b1 - b0, dtype=np.int16)
            osm = np.zeros(b1 - b0, dtype=np.int16)
            for s, idx in kume.items():
                t = k[:, idx].sum(axis=1)
                en_iyi = np.maximum(en_iyi, t)
                if s.startswith("OSMANLI"):
                    osm = np.maximum(osm, t)
            dolar[b0:b1] = B[b0:b1] & (en_iyi >= PUAN_ESIK)
            # 🔴 EMRE'NİN ASIL SORUSU: "burası niçin Osmanlı DEĞİL" —
            # yani onun kuralına göre Osmanlı olması gereken boşluk
            osm_ge[b0:b1] = osm >= PUAN_ESIK

        print(f"{gun:12s} {alan[A].sum():14,.0f} {alan[B].sum():14,.0f} "
              f"{alan[C].sum():14,.0f} {alan[dolar].sum():18,.0f}")
        bo = B & osm_ge
        co = C & osm_ge
        print(f"{'':12s} └─ Emre'nin kuralı OSMANLI diyor: "
              f"B'de {alan[bo].sum():,.0f} km² (kapı KAPATIR) · "
              f"C'de {alan[co].sum():,.0f} km² (kapı KAPATAMAZ, veri düzeltir)")
        # 🔴 C'nin İÇİNDEKİ AYRIM — çareyi bu belirler:
        #   DOLGU  : kasitli_bosluk bayraklı nokta (Teymâ · Kuveyt · Nefud…)
        #            → uret_petek.py:696 "tavan o işi yapısal olarak yapınca
        #              emekli edilebilirler" ⇒ çare NOKTA EMEKLİYE AYIRMAK
        #   KAYITSIZ: bayraksız, sadece o tarihte dönemi yok
        #            → çare ARAŞTIRMA (devlet kronolojisi)
        dolgu_mu = np.array([bool(y.get("kasitli_bosluk")) for y in Y])
        c_dolgu = co & dolgu_mu[en_ix]
        c_kayitsiz = co & ~dolgu_mu[en_ix]
        print(f"{'':12s}    └─ C'nin içi: DOLGU noktası {alan[c_dolgu].sum():,.0f} km² "
              f"(emekliye ayrılabilir) · KAYITSIZ {alan[c_kayitsiz].sum():,.0f} km² "
              f"(araştırma)")

    print("\n📌 A+B+C = toplam kara. 'kapı doldurur' B'nin ALT KÜMESİDİR.")
    print("📌 C sınıfını kapı KAPATAMAZ — çaresi veride (bos:'hata' kayıtları).")


if __name__ == "__main__":
    main()
