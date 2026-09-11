# -*- coding: utf-8 -*-
"""
ARAC-C-VORONOI-KARLOFCA-0911.py — C KAPSAMA GEOMETRİSİ (Emre'nin
tanım düzeltmesi SONRASI), 11 Eylül 2026

NE YAPAR: Koordinatörün ①②③ sorularını Karlofça'nın Bosna/Una sınırı
ile SINAR:
  ① Belge hem HAT (Una nehri) hem NOKTA LİSTESİ (Kostajnica, Novi,
     Dubica, Jasenovac, Brod) veriyor — İKİSİ AYNI KAYITTA.
  ② SAF Voronoi (yalnız adı geçen noktalar, A/B sezgisi KAPALI)
     Una nehrinin GERÇEK coğrafi rotasıyla NE KADAR ÖRTÜŞÜYOR?
  ③ (kavramsal, ölçülebilen kısmı ölçüldü) — kenar geçişi.

`data/` ve `arac/` yalnız OKUNUR, TEK SATIR YAZILMAZ.

🔴 D022 ÖNGÖRÜSÜ (ölçmeden ÖNCE):
  Una nehri motorun BUYUK listesinde YOK ve scalerank'ı (8.0) 5.0
  eşiğinin de ÜSTÜNDE — yani motor bunu OTOMATİK tanımıyor. BEKLENTİM:
  ① Karlofça'nın Bosna sınırı GERÇEKTE bir "🅰 hat" durumu (Una nehri,
     motor-tanımayan doğal unsur — SEMA-C-0911 §8.2'nin "①b" sınıfı),
     "🅱 nokta listesi"nden TÜRETİLECEK bir sınır DEĞİL — nokta listesi
     yalnız o hattın SONUCUNU (hangi kale hangi tarafta kaldı) TEYİT
     ediyor.
  ⇒ SAF Voronoi (yalnız 5 Avusturya + birkaç Osmanlı noktası arası)
     Una'nın GERÇEK rotasından BELİRGİN ŞEKİLDE SAPACAK, çünkü Voronoi
     yalnız NOKTALARA bakar, nehrin KIVRIMINA değil — nehrin dışbükey/
     içbükey döndüğü yerlerde Voronoi çizgisi ile gerçek nehir arasında
     onlarca km fark olabilir (Şattülarap'ta ölçülen 11 km'den BÜYÜK
     olabilir, çünkü BURADA nokta sayısı çok daha AZ — yalnız birkaç
     kale, nehrin KENDİ 60+ noktası değil).
"""
import io
import json
import math
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"


def km_derece(lat):
    return 111.320 * math.cos(math.radians(lat))


def to_xy(lon, lat, lat0):
    return (lon * km_derece(lat0), lat * 110.574)


# ---------------- ① Karlofça'nın iki uçlu antlaşma metni ----------------
print("=" * 70)
print("① AYNI KAYITTA HEM HAT HEM NOKTA LİSTESİ — Karlofça Bosna maddesi")
print("=" * 70)
print("Birincil metin: 'the Country ... shall be limited and bounded by")
print("the hither Shore of the River Unna' (HAT, Una nehri)")
print("+ 'Imperial Garrisons that are in Novi, Dubizza, Sessenovizza,")
print("Doboy and Bred ... shall be drawn out ... left entirely free'")
print("(NOKTA LİSTESİ — hangi kaleler Avusturya'ya geçti)")
print("⇒ Bu AYNI kayıt hem 🅰 hem 🅱 taşıyor — şema İKİSİNİ de barındırmalı.")

# ---------------- Una nehri geometrisi ----------------
gj = json.load(io.open(KOK + r"\veri-kaynak\ne_10m_rivers.geojson", encoding="utf-8"))
una = None
for f in gj["features"]:
    ad = (f.get("properties", {}).get("name") or "")
    if ad.lower() == "una":
        una = f
una_coords = una["geometry"]["coordinates"]
if una["geometry"]["type"] == "MultiLineString":
    una_coords = una_coords[0]
print()
print("Una nehri: %d nokta, scalerank=%s (eşik 5.0'ın ÜSTÜNDE — motor "
      "OTOMATİK TANIMIYOR)" % (len(una_coords), una["properties"].get("scalerank")))
print("Una uçları:", una_coords[0], "->", una_coords[-1])

# ---------------- ② SAF VORONOI vs GERÇEK NEHİR ----------------
print()
print("=" * 70)
print("② SAF VORONOI (yalnız isimli kaleler) vs Una'nın GERÇEK rotası")
print("=" * 70)

AVUSTURYA_NOKTALAR = [
    ("Kostajnica", 16.683, 45.183),
    ("Bosanski Novi (Novi Grad)", 16.377, 45.048),
    ("Bosanska Dubica", 16.810, 45.174),
    ("Jasenovac", 16.917, 45.281),
    ("Bosanski Brod", 17.988, 45.138),
]
OSMANLI_NOKTALAR = [
    ("Bihać", 15.871, 44.817),
    ("Srebrenik", 18.489, 44.705),
]

LAT0 = sum(c[1] for c in una_coords) / len(una_coords)
UNA_XY = [to_xy(c[0], c[1], LAT0) for c in una_coords]


def nehre_uzaklik(lon, lat, poly):
    P = to_xy(lon, lat, LAT0)
    en = None
    for i in range(len(poly) - 1):
        A, B = poly[i], poly[i + 1]
        ABx, ABy = B[0] - A[0], B[1] - A[1]
        L2 = ABx * ABx + ABy * ABy
        if L2 < 1e-9:
            continue
        t = max(0.0, min(1.0, ((P[0] - A[0]) * ABx + (P[1] - A[1]) * ABy) / L2))
        qx, qy = A[0] + t * ABx, A[1] + t * ABy
        d = math.hypot(P[0] - qx, P[1] - qy)
        if en is None or d < en:
            en = d
    return en


def voronoi_taraf(lon, lat, pos_liste, neg_liste):
    """SAF Voronoi: en yakın nokta hangi kümedense o taraf. A/B sezgisi YOK."""
    P = to_xy(lon, lat, LAT0)
    en_d, en_taraf, en_ad = None, None, None
    for ad, plon, plat in pos_liste:
        Q = to_xy(plon, plat, LAT0)
        d = math.hypot(P[0] - Q[0], P[1] - Q[1])
        if en_d is None or d < en_d:
            en_d, en_taraf, en_ad = d, "AVUSTURYA", ad
    for ad, plon, plat in neg_liste:
        Q = to_xy(plon, plat, LAT0)
        d = math.hypot(P[0] - Q[0], P[1] - Q[1])
        if en_d is None or d < en_d:
            en_d, en_taraf, en_ad = d, "OSMANLI", ad
    return en_taraf, en_ad, en_d


print("Her kalenin KENDİ nehre uzaklığı (Una'ya göre 'doğru' konumu "
      "zaten TANIMLI — antlaşma 'nehrin öteki yakası' diyor):")
for ad, lon, lat in AVUSTURYA_NOKTALAR + OSMANLI_NOKTALAR:
    d = nehre_uzaklik(lon, lat, UNA_XY)
    print("  %-28s Una'ya uzaklık: %6.1f km" % (ad, d if d else -1))

print()
print("SAF VORONOI testi — her Avusturya kalesi, SADECE noktalara göre "
      "(Una nehri YOK SAYILARAK) hangi tarafa düşüyor?")
yanlis = 0
for ad, lon, lat in AVUSTURYA_NOKTALAR:
    taraf, en_yakin_ad, d = voronoi_taraf(lon, lat, AVUSTURYA_NOKTALAR, OSMANLI_NOKTALAR)
    dogru = (taraf == "AVUSTURYA")
    if not dogru:
        yanlis += 1
    print("  %-28s SAF Voronoi -> %-10s (en yakın: %s, %.1f km) %s"
          % (ad, taraf, en_yakin_ad, d, "✓" if dogru else "✗ YANLIŞ (kendi noktası bile başka tarafa düşüyor!)"))

print()
print("YORUM: SAF Voronoi'nin kendi noktalarını DOĞRU sınıflandırması "
      "TAUTOLOJİKTİR (her nokta kendine en yakın) — asıl soru ARADAKİ "
      "BOŞLUKTA (iki kale arasındaki bir üçüncü yerleşim) SAF Voronoi "
      "çizgisinin Una nehrinin GERÇEK rotasından NE KADAR SAPTIĞI.")

# ---------------- Voronoi ÇİZGİSİ ile Una arasındaki fark ----------------
print()
print("Ardışık Avusturya-Osmanlı çift ortası (SAF Voronoi sınırının kabaca")
print("geçtiği yer) ile Una nehri arasındaki mesafe:")
for a_ad, a_lon, a_lat in AVUSTURYA_NOKTALAR:
    for o_ad, o_lon, o_lat in OSMANLI_NOKTALAR:
        mid_lon, mid_lat = (a_lon + o_lon) / 2.0, (a_lat + o_lat) / 2.0
        d = nehre_uzaklik(mid_lon, mid_lat, UNA_XY)
        print("  orta[%s-%s] Una'ya uzaklık: %6.1f km" % (a_ad, o_ad, d if d else -1))

print()
print("BİTTİ.")
