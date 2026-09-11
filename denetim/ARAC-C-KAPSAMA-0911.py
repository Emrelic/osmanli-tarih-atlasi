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

# ---------------- SINIR ARAMA — meander/kıvrım noktasında UZAK bir segment YAKIN mı ----------------
print()
print("=" * 70)
print("② SINIR ARAMA — 'yanlış segment' riski: en yakın 2. aday UZAK bir")
print("   parçaysa (ADJACENT değil) ve mesafece YAKINSA, taraf HANGİSİNE göre?")
print("=" * 70)
import random
rnd = random.Random(20260911)
ADAY_SAYISI = 0
UZAK_YAKIN_ADAY = 0
ORNEK = 400
OFSET_KM = 3.0   # nehrin 3 km yanında bir test noktası (gerçek yerleşim gibi)
for _ in range(ORNEK):
    i = rnd.randint(0, len(coords) - 2)
    t = rnd.random()
    A_ll, B_ll = coords[i], coords[i + 1]
    lon = A_ll[0] + t * (B_ll[0] - A_ll[0])
    lat = A_ll[1] + t * (B_ll[1] - A_ll[1])
    # segmentin dik yönünde OFSET_KM kaydır (gerçek bir "yerleşim" gibi)
    Ax, Ay = to_xy(A_ll[0], A_ll[1], LAT0)
    Bx, By = to_xy(B_ll[0], B_ll[1], LAT0)
    dx, dy = Bx - Ax, By - Ay
    norm = math.hypot(dx, dy) or 1e-9
    px, py = -dy / norm, dx / norm  # birim dik
    Px = Ax + t * dx + px * OFSET_KM
    Py = Ay + t * dy + py * OFSET_KM
    P = (Px, Py)
    mesafeler = []
    for j in range(len(POLY) - 1):
        Aj, Bj = POLY[j], POLY[j + 1]
        ABx, ABy = Bj[0] - Aj[0], Bj[1] - Aj[1]
        L2 = ABx * ABx + ABy * ABy
        if L2 < 1e-9:
            continue
        tt = max(0.0, min(1.0, ((P[0] - Aj[0]) * ABx + (P[1] - Aj[1]) * ABy) / L2))
        qx, qy = Aj[0] + tt * ABx, Aj[1] + tt * ABy
        d = math.hypot(P[0] - qx, P[1] - qy)
        mesafeler.append((d, j))
    mesafeler.sort()
    en_yakin_d, en_yakin_j = mesafeler[0]
    # ADJACENT-OLMAYAN (arc-uzunluğunda en az 5 indeks uzak) bir aday,
    # en yakının %20 farkı içindeyse -> GERÇEK bir "yanlış segment" riski
    riskli_ornekler_bu_nokta = None
    for d, j in mesafeler[1:]:
        if abs(j - en_yakin_j) < 5:
            continue  # komşu segment, önemsiz
        ADAY_SAYISI += 1
        if d < en_yakin_d * 1.20:
            UZAK_YAKIN_ADAY += 1
            riskli_ornekler_bu_nokta = (lon, lat, en_yakin_j, j, en_yakin_d, d)
        break  # yalnız en yakın UZAK adayı say
    if riskli_ornekler_bu_nokta and UZAK_YAKIN_ADAY <= 10:
        print("  RİSKLİ ÖRNEK: (%.3f,%.3f) en_yakin_segment=%d (%.2f km) vs "
              "UZAK_rakip_segment=%d (%.2f km)" % riskli_ornekler_bu_nokta)

print("%d test noktasının %d'inde (arc-uzak) bir rakip segment vardı; "
      "bunların %d'i (%%%.1f) en yakına ÇOK YAKIN (< %%20 fark) — "
      "bu GERÇEK bir 'yanlış segment' riski taşıyan alt-küme."
      % (ORNEK, ADAY_SAYISI, UZAK_YAKIN_ADAY,
         (100.0 * UZAK_YAKIN_ADAY / ADAY_SAYISI) if ADAY_SAYISI else 0.0))

# ---------------- ③ UZUN/DÜZ HAT SINAVI — Sykes-Picot tipi ----------------
print()
print("=" * 70)
print("③ UZUN/DÜZ HAT SINAVI — Sykes-Picot tipi (Akka-Kerkük, 2 nokta, ~950 km)")
print("=" * 70)
AKKA = (35.0818, 32.9281)
KERKUK = (44.3922, 35.4681)
SP_LAT0 = (AKKA[1] + KERKUK[1]) / 2.0
SP_POLY = [to_xy(AKKA[0], AKKA[1], SP_LAT0), to_xy(KERKUK[0], KERKUK[1], SP_LAT0)]
# test noktaları: hattın YAKININDA birkaç şehir (Şam, Musul, Bağdat)
SP_TEST = [
    ("Şam (Damascus)", 36.2765, 33.5138),
    ("Musul (Mosul)", 43.1189, 36.3350),
    ("Bağdat (Baghdad)", 44.3661, 33.3152),
]
for ad, lon, lat in SP_TEST:
    gC = global_cross((lon, lat), AKKA, KERKUK, SP_LAT0)
    lC, mesafe_km, idx = nearest_segment_local_cross((lon, lat), SP_POLY, SP_LAT0)
    print("%-20s global_cross=%14.1f  yerel_cross=%14.1f  (aynı işaret mi: %s)"
          % (ad, gC, lC, "EVET" if (gC > 0) == (lC > 0) else "HAYIR"))
print("  (Beklenen: TEK segmentli bir hatta yerel = global, çünkü 'en yakın "
      "segment' HER ZAMAN tek segmentin kendisi — fark YALNIZ segment SAYISI "
      "arttığında, yani hat KIRILDIĞINDA ortaya çıkar, UZUNLUK tek başına "
      "sorun DEĞİL.)")

print()
print("BİTTİ.")
