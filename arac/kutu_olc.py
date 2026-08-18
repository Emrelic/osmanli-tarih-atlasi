# -*- coding: utf-8 -*-
"""KUTU ÖLÇÜMÜ — bir hata paketinin bütün maddelerini TEK koşuda ölçer.

Koordinat ve tarih, Emre'nin ekran görüntülerinin ALT ŞERİDİNDEN geliyor
(`arac/kutu_serit.py` onları tek görsele diziyor; 29 görsel → 3 şerit,
9,3 MB → 108 KB). Burada o künyeler tabloya yazılı ve her madde için
`nicin_bos` ölçümü koşuluyor.

Her madde için tek satırlık hüküm:
    NOKTASIZ   400 km içinde hiç yerleşim yok        → nokta ekle
    SAHİPSİZ   en yakın nokta sahipsiz               → veri düzelt
    RAKİP      en yakın nokta BAŞKA devletin         → tarihî doğrulama
    BOYALI     hem tavan yetişiyor hem puan geçiyor  → şikâyet BAYAT olabilir

    py arac/kutu_olc.py 0021
    py arac/kutu_olc.py 0021 --madde H-0013 --ayrinti
"""
import argparse
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

import girdi                                                    # noqa: E402
from nicin_bos import (PUAN_HALKA, PUAN_ESIK, TAVAN_KM, sahip, olc,
                       var_mi)  # noqa: E402

# madde -> (gün, lat0, lat1, lon0, lon1, kısa not)
# 🔴 KUTU, ölçümün DEĞİL görselin künyesidir: bu satırlar Emre'nin
# ekran görüntülerinin alt şeridinden BİREBİR alındı, tahmin edilmedi.
P0021 = {
 "H-0001": ("1593-07-01", 37.40, 40.60, 18.85, 21.67, "Venedik toprakları"),
 "H-0002": ("1593-07-01", 42.78, 45.06, 14.17, 18.03, "Dalmaçya adalar+kıyı"),
 "H-0003": ("1593-07-01", 45.06, 49.36, 16.26, 21.72, "Kanije/Eğri yeşil"),
 "H-0004": ("1593-07-01", 45.12, 51.35, 12.98, 22.95, "Avusturya toprakları"),
 "H-0005": ("1594-11-13", 40.42, 48.86, 28.06, 30.44, "iki boşluk / 200 km"),
 "H-0006": ("1594-11-13", 44.35, 47.95, 32.42, 38.49, "cetvel sınır"),
 "H-0008": ("1604-06-08", 36.71, 43.98, 41.11, 47.08, "arka planda farklı renk"),
 "H-0009": ("1604-06-08", 36.96, 45.04, 37.14, 50.21, "Vladikafkas boşluğu"),
 "H-0010": ("1638-12-24", 29.52, 38.47, 38.77, 49.05, "Bağdat kuzeyi şehirler"),
 "H-0011": ("1648-03-31", 36.14, 37.74, 22.82, 25.29, "Çuha/İstendil adaları"),
 "H-0013": ("1577-01-01", 32.33, 34.81, 40.71, 44.95, "Irak girintisi"),
 "H-0014": ("1577-01-01", 29.20, 32.39, 44.01, 48.94, "Semâve-Kûfe arası"),
 "H-0015": ("1577-01-01", 25.03, 27.49, 35.99, 40.13, "görüntü bozulmaları"),
 "H-0017": ("1577-01-01", 21.67, 26.64, 31.64, 36.84, "aradaki boşluk"),
 "H-0018": ("1577-01-01", 28.31, 32.89, 19.48, 24.14, "ortadaki bölge"),
 "H-0019": ("1577-01-01", 37.21, 43.07, 40.70, 47.37, "Gümrü/Başkale/Çaldıran"),
 "H-0020": ("1577-01-01", 26.59, 31.73, 43.13, 49.34, "aradaki toprak"),
 "H-0021": ("1577-01-01", 25.06, 26.46, 49.86, 51.76, "Bahreyn kırmızılık"),
 "H-0022": ("1577-01-01", 22.19, 32.26,  5.03, 24.06, "iki kırmızı alan arası"),
 "H-0023": ("1577-01-01", 41.93, 44.90, 42.67, 46.37, "hiç yerleşim yok mu"),
 "H-0024": ("1577-01-01", 38.64, 52.88, 47.20, 86.38, "Orta Asya boşlukları"),
 "H-0025": ("1577-01-01", 44.58, 49.40, 15.33, 22.18, "Kraliyet Macaristanı"),
 "H-0026": ("1585-01-01", 36.53, 42.09, 41.13, 49.16, "Nahçıvan enklav"),
 "H-0027": ("1585-09-25", 35.10, 42.43, 41.13, 49.46, "Van doğusu"),
 "H-0028": ("1590-03-21", 28.59, 41.25, 41.73, 52.62, "Ferhad Paşa sınırları"),
 "H-0029": ("1592-06-19", 43.34, 44.57, 14.82, 16.54, "Vrana/Ladin adacıklar"),
 "H-0030": ("1595-08-23", 39.97, 49.41, 17.12, 45.69, "Eflak seferi işareti"),
 "H-0032": ("1654-10-03", 42.03, 50.45, 31.81, 46.11, "Kırım bozkırı/Azak"),
}
# görseli olmayan, metinden koordinatı bilinen maddeler
P0021_METIN = {
 "H-0007": ("1602-01-01", 25.76, 25.76, 50.58, 50.58, "Safevî Bahreyn 1602"),
 "H-0016": ("1577-01-01", 26.20, 26.20, 37.30, 37.30, "Yenbu-Tebük arası"),
}
# görsel de koordinat da yok — ARAYÜZ/ŞARTNAME maddeleri
P0021_ARAYUZ = {
 "H-0012": "koridor şartnamesi + CEVAP BEKLEYEN soru (yol ağı verisi)",
 "H-0031": "uçuş ayarları — beş parametre",
 "H-0030": "Eflak seferi görsel işaretleme (ölçüm ayrıca yapılıyor)",
}

PAKETLER = {"0021": (P0021, P0021_METIN, P0021_ARAYUZ)}


def hukum(Y, lat, lon, gun):
    # 🔴 `var_mi` süzgeci: o gün kurulmamış nokta komşu SAYILMAZ (bkz.
    # nicin_bos.var_mi — aletin ilk üç teşhisini bozan kusur).
    cevre = sorted(((girdi.km(lat, lon, y["lat"], y["lon"]), y)
                    for y in Y if var_mi(y, gun)), key=lambda t: t[0])
    cevre = [(d, y) for d, y in cevre if d <= 450]
    if not cevre:
        return "NOKTASIZ", "450 km içinde hiç yerleşim yok", None, 0
    d0, y0 = cevre[0]
    s0 = sahip(y0, gun)
    puan = {}
    for d, y in cevre:
        s = sahip(y, gun)
        if s is None:
            continue
        once = 0.0
        for e, pu in PUAN_HALKA:
            if once <= d < e:
                puan[s] = puan.get(s, 0) + pu
                break
            once = e
    osm = max((v for k, v in puan.items() if k.startswith("OSMANLI")),
              default=0)
    tv = TAVAN_KM.get(y0.get("k") or 0, TAVAN_KM[0])
    if s0 is None:
        return ("SAHİPSİZ",
                f"{y0['ad']} {d0:.0f} km · bos={y0.get('bos') or '—'}",
                y0, osm)
    if not s0.startswith("OSMANLI"):
        return "RAKİP", f"{y0['ad']} {d0:.0f} km → {s0}", y0, osm
    if d0 > tv:
        return "TAVAN", f"{y0['ad']} {d0:.0f} km > A1 tavanı {tv:.0f}", y0, osm
    return "BOYALI", f"{y0['ad']} {d0:.0f} km → {s0}", y0, osm


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("paket", nargs="?", default="0021")
    ap.add_argument("--madde")
    ap.add_argument("--ayrinti", action="store_true")
    a = ap.parse_args()
    kutu, metin, arayuz = PAKETLER[a.paket]
    Y = girdi.yukle(sessiz=True)
    print(f"evren {len(Y)} nokta · paket {a.paket}\n")

    tum = dict(kutu)
    tum.update(metin)
    if a.madde:
        tum = {a.madde: tum[a.madde]}

    print(f"{'madde':9s} {'gün':11s} {'merkez':17s} {'hüküm':9s} "
          f"{'Osm':>4s}  sebep")
    print("-" * 100)
    for no in sorted(tum):
        gun, la0, la1, lo0, lo1, not_ = tum[no]
        lat, lon = (la0 + la1) / 2, (lo0 + lo1) / 2
        h, seb, y0, osm = hukum(Y, lat, lon, gun)
        print(f"{no:9s} {gun:11s} {lat:6.2f},{lon:7.2f}  {h:9s} "
              f"{osm:4d}  {seb[:56]}")
        if a.ayrinti:
            olc(Y, lat, lon, gun, 8)

    print(f"\n{'':9s} ARAYÜZ / ŞARTNAME — ölçüm konusu değil")
    for no, aciklama in sorted(arayuz.items()):
        print(f"{no:9s} {aciklama}")
    print("\n📌 'Osm' = Emre'nin kuralının Osmanlı'ya verdiği puan "
          f"(eşik {PUAN_ESIK}).")
    print("📌 Kutu merkezinin ölçümü, Emre'nin İŞARET ETTİĞİ nokta DEĞİL — "
          "ilk elemedir.")


if __name__ == "__main__":
    main()
