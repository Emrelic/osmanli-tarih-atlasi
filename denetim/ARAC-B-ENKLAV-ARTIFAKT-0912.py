# -*- coding: utf-8 -*-
"""K5 SINAVI — en büyük enklavlar GERÇEK mi, NOKTA SEYREKLİĞİ ARTIFAKTI mı?

`CLAUDE.md §2`: *"Noktası olmayan bölge en yakın peteğe emilir."* Bir enklav
devasa görünüyorsa iki sebebi olabilir:
  ① GERÇEK tarihî izolasyon (uzak bir eyalet)
  ② ARTIFAKT — çevrede nokta yok, bir tek nokta koca bir alanı emiyor
İkisinin çaresi TERS (`D024`): ① tavanla dışarıda tutulur, ② NOKTA EKLEYEREK
çözülür ve tavan onu yalnız GİZLER.

ÖLÇÜT: enklavın temsil ettiği yerleşimin çevresindeki NOKTA YOĞUNLUĞU,
bütün atlasın medyanıyla karşılaştırılır. Seyrekse artifakt şüphesi.
"""
import math
import os
import sys

import numpy as np

DEPO = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(DEPO, "arac"))
sys.stdout.reconfigure(encoding="utf-8")
import girdi                                                        # noqa: E402

BUYUK = ["Cebel Merre", "Cübeyl", "Medine", "Kabala", "Tebriz",
         "Maan", "Nâsıriye", "Nühûd", "Ordubad", "Azak"]
R_KM = 300.0


def km(a, b):
    lat = math.radians((a[1] + b[1]) / 2)
    return math.hypot((b[0] - a[0]) * 111.32 * math.cos(lat),
                      (b[1] - a[1]) * 110.574)


def main():
    Y = girdi.yukle(sessiz=True)
    P = [(y["lon"], y["lat"], y["ad"]) for y in Y]
    xy = np.array([(p[0], p[1]) for p in P])
    ix = {p[2]: i for i, p in enumerate(P)}

    # bütün atlas için 300 km yoğunluğu — TABAN
    from scipy.spatial import cKDTree
    # derece uzayında kaba komşuluk, sonra km ile ele
    agac = cKDTree(xy)
    yog = np.zeros(len(P), dtype=int)
    r_der = R_KM / 100.0            # kaba üst sınır (ekvatorda ~3°)
    for i, p in enumerate(P):
        aday = agac.query_ball_point(xy[i], r_der)
        yog[i] = sum(1 for j in aday if j != i
                     and km((xy[i][0], xy[i][1]), (xy[j][0], xy[j][1])) <= R_KM)
    print("ATLAS TABANI — 300 km içindeki komşu sayısı (%d nokta)" % len(P))
    print("   medyan %d · p25 %d · p10 %d · p05 %d"
          % (np.median(yog), np.percentile(yog, 25), np.percentile(yog, 10),
             np.percentile(yog, 5)))
    print()
    print("EN BÜYÜK ENKLAVLARIN ÇEVRESİ:")
    print("   %-22s %8s %9s %10s  %s" % ("enklav (temsil eden yer)", "komşu",
                                         "yüzdelik", "en yakın", "hüküm"))
    for ad in BUYUK:
        if ad not in ix:
            print("   %-22s ⚪ atlasta bulunamadı (ad eşleşmedi)" % ad)
            continue
        i = ix[ad]
        n = int(yog[i])
        yuz = float((yog < n).mean() * 100)
        d, j = agac.query(xy[i], k=2)
        en_yakin = km((xy[i][0], xy[i][1]), (xy[j[1]][0], xy[j[1]][1]))
        hukum = ("🔴 SEYREK — artifakt şüphesi" if yuz < 10 else
                 "🟡 sınırda" if yuz < 25 else "🟢 yoğun — gerçek izolasyon")
        print("   %-22s %8d %8.1f%% %9.0f km  %s" % (ad, n, yuz, en_yakin, hukum))


if __name__ == "__main__":
    main()
