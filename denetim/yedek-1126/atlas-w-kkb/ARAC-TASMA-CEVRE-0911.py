# -*- coding: utf-8 -*-
"""TAŞMA ÖLÇÜM — bugünkü petek sınırlarının TOPLAM UZUNLUĞU (akış taraması).

🔴 AĞIR DEĞİL: dosya 1 MB'lık parçalarla okunur, belleğe hiçbir zaman tamamı
   girmez. Shapely yok, json.load yok, geometri açılmaz. Sabit bellek.

NİÇİN: poligonlaştırılmış bir sınırın KÖŞE SAYISI, sınırın UZUNLUĞUNA bağlıdır
(her hücre kenarında bir basamak). Uzunluğu bilmeden köşe sayısı tahmin edilemez;
bu yüzden önce uzunluk ölçülüyor.

🔴 YANLILIKLARI — ölçtüğümü değil, ölçmediğimi de yazıyorum (D107):
 ① HALKA ATLAMALARI: akış taramasında bir halkanın sonu ile ötekinin başı
   ayırt edilemez. Çare: EŞİK'ten uzun segment ATILIR. Atılan sayı ve atılanın
   toplam uzunluğa oranı AYRICA basılır — gizlenmez.
 ② ORTAK SINIR İKİ KEZ SAYILIR: her petek kendi çevresini taşıyor. Bu bir
   KUSUR DEĞİL, aranan şeyin ta kendisi: poligonlaştırmada da her poligon kendi
   halkasını taşıyacak.
 ③ DONEMLER'in indeks dizileri (`[3,17,42]`) koordinat sanılabilir. Onları
   ONDALIK NOKTA şartıyla eliyorum: koordinatlar ondalıklı, indeksler değil.
"""
import io
import math
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PARCA = 1 << 20
ESIK_KM = 50.0                 # bundan uzun segment = halka atlaması sayılır
# Yalnız ONDALIKLI çift: `[28.9762,41.0082]`
_CIFT = re.compile(r"\[(-?\d+\.\d+),(-?\d+\.\d+)\]")


def km(a, b):
    """Küçük adımlar için düz yaklaşıklama — segmentler ~1 km, eğrilik ihmal."""
    (x1, y1), (x2, y2) = a, b
    dy = (y2 - y1) * 111.32
    dx = (x2 - x1) * 111.32 * math.cos(math.radians((y1 + y2) * 0.5))
    return math.hypot(dx, dy)


def tara(yol):
    if not os.path.exists(yol):
        return None
    toplam = 0.0
    atilan_n, atilan_km = 0, 0.0
    segment = 0
    nokta = 0
    onceki = None
    kuyruk = ""
    with io.open(yol, encoding="utf-8", errors="replace") as f:
        while True:
            p = f.read(PARCA)
            if not p:
                break
            g = kuyruk + p
            son = 0
            for m in _CIFT.finditer(g):
                son = m.end()
                nokta += 1
                cur = (float(m.group(1)), float(m.group(2)))
                if onceki is not None:
                    d = km(onceki, cur)
                    if d > ESIK_KM:
                        atilan_n += 1
                        atilan_km += d
                    else:
                        toplam += d
                        segment += 1
                onceki = cur
            kuyruk = g[max(son, len(g) - 64):]
    return {"nokta": nokta, "segment": segment, "uzunluk_km": toplam,
            "atilan_n": atilan_n, "atilan_km": atilan_km,
            "ort_segment_km": toplam / segment if segment else 0.0}


def main():
    KV_ADIM = 0.05
    HUCRE_KM = KV_ADIM * 111.32          # ≈ 5,57 km — motorun kendi sabiti
    MERDIVEN = 4.0 / math.pi             # rastgele yönde basamak uzaması ≈1,273

    print("═" * 78)
    print("BUGÜNKÜ SINIRLARIN TOPLAM UZUNLUĞU — ve poligonlaştırmanın KÖŞE FİYATI")
    print("═" * 78)
    print("  hücre kenarı = %.2f km · merdiven çarpanı = 4/π = %.3f"
          % (HUCRE_KM, MERDIVEN))
    print()
    for ad in ("data/donemler.js", "veri-kaynak/motor_kara.geojson"):
        s = tara(os.path.join(KOK, ad))
        if s is None:
            print("  %-32s ⚪ YOK" % ad)
            continue
        kose = s["uzunluk_km"] * MERDIVEN / HUCRE_KM
        print("  %s" % ad)
        print("     koordinat noktası   %14s" % "{:,}".format(s["nokta"]))
        print("     segment             %14s   ortalama %.3f km"
              % ("{:,}".format(s["segment"]), s["ort_segment_km"]))
        print("     TOPLAM UZUNLUK      %14s km" % "{:,.0f}".format(s["uzunluk_km"]))
        print("     atılan (halka atl.) %14s adet · %s km (toplamın %%%.2f'i"
              " olurdu)"
              % ("{:,}".format(s["atilan_n"]), "{:,.0f}".format(s["atilan_km"]),
                 100.0 * s["atilan_km"] / max(1.0, s["uzunluk_km"])))
        print("     ⇒ POLİGONLAŞTIRILSA köşe ≈ %s  (bugünkü %s'in %.1f KATI)"
              % ("{:,.0f}".format(kose), "{:,}".format(s["nokta"]),
                 kose / max(1, s["nokta"])))
        print()

    print("  📌 SADELEŞTİRME BU MERDİVENİ SÖKEMEZ — ölçülebilir sebep:")
    print("     motorun sadeleştirme toleransı SADE_TOL = 0.012° ≈ %.2f km"
          % (0.012 * 111.32))
    print("     basamağın düz hattan sapması ≈ hücre/2 = %.2f km" % (HUCRE_KM / 2))
    print("     %.2f km > %.2f km  ⇒ Douglas-Peucker basamakları KORUR."
          % (HUCRE_KM / 2, 0.012 * 111.32))


if __name__ == "__main__":
    main()
