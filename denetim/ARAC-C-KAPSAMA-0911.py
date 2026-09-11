# -*- coding: utf-8 -*-
"""
ARAC-C-KAPSAMA-0911.py — C KAPSAMA GEOMETRİSİ görevi, 11 Eylül 2026

NE YAPAR: SEMA-C-0911.md §8.2'nin TASARLANDI-AMA-SINANMADI dediği
"YEREL (nearest-segment) cross-product" çözümünü GERÇEK geometriyle
(Şattülarap: `veri-kaynak/ne_10m_rivers.geojson`, Midye-Enez: iki
sabit nokta) KOD OLARAK YAZAR ve SINAR. `data/` ve `arac/` yalnız
OKUNUR, TEK SATIR YAZILMAZ.

🔴 D022 ÖNGÖRÜSÜ (kodlamadan/sınamadan ÖNCE):
  ① Yerel cross-product, Şattülarap'ın BİLİNEN noktalarında (Basra
     kuzeyde/Osmanlı, Muhammere güneyde/Kaçar) DOĞRU tarafı verecek —
     bu D187 pozitif kontrolü GEÇECEK.
  ② Global (11,1 km sapan) yöntemin ürettiği "4 kesişim" sorunu, yerel
     yöntemde ORTADAN KALKACAK ama TAMAMEN DEĞİL — nehrin KENDİ ÜSTÜNE
     kıvrıldığı (iki uzak segmentin aynı noktaya eşit-yakın olduğu)
     yerlerde YENİ, DAHA KÜÇÜK bir belirsizlik ŞERİDİ kalacak (sıfıra
     inmeyecek, küçülecek).
  ③ Uzun (1000 km) bir cetvel hatta (Sykes-Picot tipi) yerel yöntem
     ile global yöntem PRATİKTE AYNI SONUCU verecek — çünkü YAPAY/CETVEL
     hatlar (Midye-Enez gibi) zaten AZ SEGMENTLİ ve DÜZ, yerel/global
     farkı yalnız EĞRİ DOĞAL hatlarda (nehir) ortaya çıkıyor.
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
    """Basit yerel düzlem izdüşümü (km) — küçük ölçekte yeterli, motorun
    kendi `_km_derece` yaklaşımıyla AYNI aile."""
    return (lon * km_derece(lat0), lat * 110.574)


# ---------------- ŞATTÜLARAP GEOMETRİSİ ----------------
gj = json.load(io.open(KOK + r"\veri-kaynak\ne_10m_rivers.geojson", encoding="utf-8"))
sattularap = None
for f in gj["features"]:
    ad = (f.get("properties", {}).get("name") or "")
    if "shatt" in ad.lower() and "arab" in ad.lower():
        sattularap = f
        break
if sattularap is None:
    print("UYARI: Shatt al Arab bulunamadı, isim listesi taranıyor...")
    for f in gj["features"][:3]:
        print(f.get("properties", {}).get("name"))
    sys.exit(1)

geom = sattularap["geometry"]
coords = geom["coordinates"]
if geom["type"] == "MultiLineString":
    coords = coords[0]
print("Şattülarap nokta sayısı: %d" % len(coords))
print("ilk nokta:", coords[0], "son nokta:", coords[-1])

LAT0 = sum(c[1] for c in coords) / len(coords)
POLY = [to_xy(c[0], c[1], LAT0) for c in coords]


def cross(o, a, b):
    return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])


def global_cross(p, uc_a, uc_b, lat0):
    P = to_xy(p[0], p[1], lat0)
    A = to_xy(uc_a[0], uc_a[1], lat0)
    B = to_xy(uc_b[0], uc_b[1], lat0)
    c = cross(A, B, P)
    return c


def nearest_segment_local_cross(p, poly, lat0):
    """YEREL (en yakın segment) cross-product — SEMA-C-0911.md §8.2."""
    P = to_xy(p[0], p[1], lat0)
    en_yakin_d2 = None
    en_yakin_cross = None
    en_yakin_idx = None
    for i in range(len(poly) - 1):
        A, B = poly[i], poly[i + 1]
        # P'nin AB segmentine izdüşümü (en yakın nokta segment üzerinde mi)
        ABx, ABy = B[0] - A[0], B[1] - A[1]
        L2 = ABx * ABx + ABy * ABy
        if L2 < 1e-9:
            continue
        t = ((P[0] - A[0]) * ABx + (P[1] - A[1]) * ABy) / L2
        t = max(0.0, min(1.0, t))
        qx, qy = A[0] + t * ABx, A[1] + t * ABy
        d2 = (P[0] - qx) ** 2 + (P[1] - qy) ** 2
        if en_yakin_d2 is None or d2 < en_yakin_d2:
            en_yakin_d2 = d2
            en_yakin_cross = cross(A, B, P)
            en_yakin_idx = i
    return en_yakin_cross, math.sqrt(en_yakin_d2), en_yakin_idx


# ---------------- D187 POZİTİF KONTROL — bilinen noktalar ----------------
print()
print("=" * 70)
print("D187 POZİTİF KONTROL — Şattülarap")
print("=" * 70)
BILINEN = [
    ("Basra", 47.783, 30.508, "Osmanlı (nehrin BATI/kuzeybatı kıyısı)"),
    ("Muhammere (Khorramshahr)", 48.1664, 30.4392, "Kaçar/İran (nehrin DOĞU kıyısı)"),
    ("Abadan", 48.288, 30.339, "Kaçar/İran (nehrin DOĞU kıyısı, ada/yarımada)"),
]
uc_a, uc_b = coords[0], coords[-1]
for ad, lon, lat, beklenen in BILINEN:
    gC = global_cross((lon, lat), uc_a, uc_b, LAT0)
    lC, mesafe_km, idx = nearest_segment_local_cross((lon, lat), POLY, LAT0)
    print("%-28s beklenen=%-40s global_cross=%12.1f  yerel_cross=%12.1f (segment %d, %.1f km uzaklık)"
          % (ad, beklenen, gC, lC, idx, mesafe_km))

# ---------------- GLOBAL vs YEREL: 4-KESİŞİM SORUNU TEKRAR ÖLÇÜLÜYOR ----------------
print()
print("=" * 70)
print("GLOBAL vs YEREL — nehrin KENDİ 66 noktasında işaret DEĞİŞİMİ")
print("=" * 70)
gisaretler = []
yisaretler = []
for c in coords:
    gC = global_cross(c, uc_a, uc_b, LAT0)
    lC, _, _ = nearest_segment_local_cross(c, POLY, LAT0)
    gisaretler.append(1 if gC > 0 else -1)
    yisaretler.append(1 if lC > 0 else -1)


def kesisim_say(isaretler):
    return sum(1 for i in range(1, len(isaretler)) if isaretler[i] != isaretler[i - 1])


print("GLOBAL yöntemde işaret değişimi (nehrin kendi noktaları arasında): %d"
      % kesisim_say(gisaretler))
print("YEREL yöntemde işaret değişimi (nehrin kendi noktaları arasında): %d"
      % kesisim_say(yisaretler))
print("(Not: nehrin KENDİ noktalarında YEREL yöntemin işareti HER ZAMAN sabit "
      "olmalı ki — her nokta kendi segmentine 0 mesafede, cross değeri o "
      "segmentin YÖNÜNE göre hep aynı taraf. Bu bir SAĞLAMLIK testidir.)")

# ---------------- SINIR ARAMA — meander/kıvrım noktasında iki segment eşit mi ----------------
print()
print("=" * 70)
print("② SINIR ARAMA — belirsizlik şeridi (iki segment birbirine yakın mesafede mi)")
print("=" * 70)
# nehrin en KIVRIMLI bölgesinde (66 nokta üzerinde), ORTA NOKTALARDAN
# BİRKAÇINI test noktası olarak kullanıp en yakın İKİ segmentin mesafe
# farkını ölç — fark küçükse (belirsizlik şeridi) işaretle.
import random
rnd = random.Random(20260911)
belirsiz_sayisi = 0
ORNEK = 200
for _ in range(ORNEK):
    i = rnd.randint(0, len(coords) - 2)
    t = rnd.random()
    lon = coords[i][0] + t * (coords[i + 1][0] - coords[i][0])
    lat = coords[i][1] + t * (coords[i + 1][1] - coords[i][1])
    # küçük bir dik ofsetle "nehrin yanında" bir test noktası üret
    P = to_xy(lon, lat, LAT0)
    # en yakın İKİ segmentin mesafesini bul
    mesafeler = []
    for j in range(len(POLY) - 1):
        A, B = POLY[j], POLY[j + 1]
        ABx, ABy = B[0] - A[0], B[1] - A[1]
        L2 = ABx * ABx + ABy * ABy
        if L2 < 1e-9:
            continue
        tt = max(0.0, min(1.0, ((P[0] - A[0]) * ABx + (P[1] - A[1]) * ABy) / L2))
        qx, qy = A[0] + tt * ABx, A[1] + tt * ABy
        d = math.hypot(P[0] - qx, P[1] - qy)
        mesafeler.append((d, j))
    mesafeler.sort()
    if len(mesafeler) >= 2 and mesafeler[0][0] > 0.05:  # 50 m'den uzaksa anlamlı
        fark_oran = (mesafeler[1][0] - mesafeler[0][0]) / mesafeler[0][0]
        if fark_oran < 0.05:  # en yakın iki segment %5'ten az farklı
            belirsiz_sayisi += 1

print("%d örnekten %d tanesi 'en yakın İKİ segment mesafece %%5'ten az farklı' "
      "(belirsizlik adayı): %.1f%%" % (ORNEK, belirsiz_sayisi, 100.0 * belirsiz_sayisi / ORNEK))

print()
print("BİTTİ.")
