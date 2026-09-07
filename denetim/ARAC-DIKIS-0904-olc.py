# -*- coding: utf-8 -*-
"""DİKİŞ NÖBETÇİSİ — ② ÖLÇER  (R13/R15, `denetim/BULGU-GEOMETRI-0904.md`)

Kullanım:
    node denetim/ARAC-DIKIS-0904-govde.js 1281-01-01 <govde.geojson>
    py   denetim/ARAC-DIKIS-0904-olc.py   <govde.geojson> [--ayrinti]

🔴 NİÇİN VARDI / NİÇİN VAR — VE İKİSİ AYNI DEĞİL (7 Eylül 2026 düzeltmesi)

ESKİ AMAÇ (HARCANMIŞ): `R1`in KABUL TESTİ. Reçete diyordu ki
    *"1281 Avrupa: 96 parça / 9.046 km² → R1'den sonra < 10 parça"*

⚠️ **BU AMAÇ ARTIK GEÇERSİZ, ve reçete SİLİNMEDİ — DAMGALANDI:**
```
89cd681  "R1 INDI"        →  4 Eylül 17:32
koşu 5b  4 Eylül akşamı  ·  koşu 7B  6 Eyl 14:23 → 7 Eyl 07:10
⇒ KOŞU 7B'NİN ÇIKTISI R1'İ ZATEN İÇERİYOR. R1 İKİ KOŞU ESKİDİR.
```
Alet buna rağmen her koşuşta *"reçete: R1'den sonra < 10"* basıyordu ve
ölçüm **637** veriyordu. Koşu 8'den sonra o satırı okuyan biri
`637 ≫ 10` görüp ***"R1 çalışmadı"*** diye YANLIŞ BİR İŞ açacaktı.
📌 `Ö9`un AYNASI: Ö9 bayat bir ölçütün *"yanlış sebepten GEÇMESİ"*ydi
   (sahte güven); bu *"yanlış sebepten KALMASI"* (sahte alarm). Aynı
   sınıf, ters yön — ve ikisi de **kimse bakmadığı için** yaşıyor.
   (`CLAUDE.md §3.5.1`: *bir vakayı silmek dersi de siler; damgalamak
   dersi korur.* O yüzden reçete yukarıda duruyor.)

🟢 BUGÜNKÜ AMAÇ: **GERİLEME TESTİ.** *"R1 işe yaradı mı"* değil,
   *"yeni koşu bir öncekine göre BOZDU mu"*. Taban aşağıda `R1_TABAN`da
   ve **kendi provenansını taşıyor** — çünkü bir eşik, ölçüldüğü
   tabanla birlikte taşınmazsa sessizce yanılır (bu alet bunu bir kez
   ödedi: 96'lık taban 640'lık tabana taşınmıştı).

🔴 VE EŞİK SAYISI KONMADI, bilerek: R1'in dikiş ALANINI ne kadar
   kapatacağı hâlâ bilinmiyor. Bilinmeyen bir şeye eşik koymak onu
   ÖLÇÜM gibi gösterir. Alet TABANI ve FARKI basar; hükmü okuyan verir.

🔴 R13 — ÇİFT DEĞİL PARÇA SAYILIR:
   Mesafe bir MİNİMUM alır: bir çift bir yerde değiyorsa "değen" sayılır,
   başka bir dikişte 5 km açık olsa bile. Ölçüm birimi bu yüzden ÇİFT değil
   DİKİŞ PARÇASI. (Aleti yazan oturum kendi ölçüsünü böyle çürütmüştü:
   *"17 çift kusurun ölçüsü değil bir ALT SINIR"*.)

🔴 R15 — GÖLDEN ARINDIRILMIŞ ZEMİN:
   Zemin ham `ne_10m_land` DEĞİL, motorun kendi çizdiği kara
   (`veri-kaynak/motor_kara.geojson`). Ham maske kullanılırsa GÖL KIYILARI
   dikiş sayılır — en büyük "dikiş" (2.131 km²) Sivaş lagünü çıkmıştı.

ÜÇ AİLE, ÜÇ AYRI ÇARE (tek satırda raporlanırsa aynı çare uygulanır ve
"boşluk çözüldü" sanılır — o yüzden AYRI):
    DİKİŞ        ince (≤8 km) · 2+ gövdeye değiyor   → R1'in konusu
    KIYI KENARI  ince        · ≤1 gövdeye değiyor    → görünmez artefakt
    KAPSAMA      kalın (>8 km)                        → VERİ işi (nokta yok)
"""
import io
import json
import math
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GOVDE = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
    KOK, "denetim", "_dikis_govde.geojson")
AYRINTI = "--ayrinti" in sys.argv

INCE_KM = 8.0        # reçetenin eşiği
DEGME_M = 150.0      # bir parça bir gövdeye "değiyor" sayılır mesafe

from shapely.geometry import shape, mapping, Polygon, MultiPolygon
from shapely.ops import unary_union
from shapely.strtree import STRtree


def ham_km2(g):
    """Küresel alan, km² — `uret_petek.py:_ham_km2` ile AYNI formül."""
    if g is None or g.is_empty:
        return 0.0
    ps = g.geoms if isinstance(g, MultiPolygon) else [g]
    T = 0.0
    for p in ps:
        for ring, sg in [(p.exterior, 1)] + [(h, -1) for h in p.interiors]:
            cs = list(ring.coords)
            s = 0.0
            for i in range(len(cs) - 1):
                lo1, la1 = math.radians(cs[i][0]), math.radians(cs[i][1])
                lo2, la2 = math.radians(cs[i + 1][0]), math.radians(cs[i + 1][1])
                s += (lo2 - lo1) * (2 + math.sin(la1) + math.sin(la2))
            T += sg * abs(s) * 6371.0088 ** 2 / 2.0
    return T


def cevre_km(p):
    """Dış halkanın km cinsinden uzunluğu (enlem düzeltmeli)."""
    cs = list(p.exterior.coords)
    T = 0.0
    for i in range(len(cs) - 1):
        lo1, la1 = cs[i]
        lo2, la2 = cs[i + 1]
        ort = math.radians((la1 + la2) / 2.0)
        dx = (lo2 - lo1) * 111.320 * math.cos(ort)
        dy = (la2 - la1) * 110.574
        T += math.hypot(dx, dy)
    return T


def genislik_km(p):
    """≈ 2·alan/çevre — uzun ince bir şeritte bu ŞERİDİN ENİDİR.

    🔴 `buffer(-δ)` KULLANILMIYOR: δ dereceyle verilir ve boylamda enleme
    göre değişir; yüksek enlemde parçayı olduğundan İNCE gösterir. 2A/P
    ölçekten bağımsız ve km cinsinden hesaplanıyor.
    """
    c = cevre_km(p)
    return (2.0 * ham_km2(p) / c) if c > 0 else 0.0


def yaz(s=""):
    """🔴 ASCII'ye DÜŞEBİLEN yazıcı — konsol cp1254 ve `≤` orada YOK.

    `renkler.py` bu dersi zaten taşıyor: *"patlayabilen bir uyarı,
    uyarısızlıktan kötüdür — sorunu haber vermek yerine kendisi sorun
    olur."* İlk yazımda `≤` kullandım ve alet TAM ÖLÇÜMÜ BASARKEN patladı.
    """
    try:
        print(s)
    except Exception:
        try:
            print(s.encode("ascii", "replace").decode("ascii"))
        except Exception:
            pass


d = json.load(io.open(GOVDE, encoding="utf-8"))
gun = d.get("gun", "?")
govdeler, adlar = [], []
for f in d["features"]:
    try:
        g = shape(f["geometry"]).buffer(0)
    except Exception:
        continue
    if g.is_empty:
        continue
    govdeler.append(g)
    adlar.append(f["properties"].get("id", "?"))

mk = os.path.join(KOK, "veri-kaynak", "motor_kara.geojson")
KARA = unary_union([shape(f["geometry"]).buffer(0)
                    for f in json.load(io.open(mk, encoding="utf-8"))["features"]
                    if f.get("geometry")]).buffer(0)

TUM = unary_union(govdeler).buffer(0)
BOS = KARA.difference(TUM).buffer(0)

yaz("=" * 70)
yaz("DİKİŞ NÖBETÇİSİ — gün %s" % gun)
yaz("=" * 70)
yaz("gövde %d · motorun karası %,.0f km² · boyalı %,.0f km²"
    .replace(",", "") % (len(govdeler), ham_km2(KARA), ham_km2(TUM)))
yaz("boşluk toplamı: %.0f km²" % ham_km2(BOS))

agac = STRtree(govdeler)
parcalar = BOS.geoms if isinstance(BOS, MultiPolygon) else [BOS]
tol = DEGME_M / 111320.0

kova = {"DİKİŞ": [], "KIYI KENARI": [], "KAPSAMA": []}
for p in parcalar:
    if p.is_empty:
        continue
    a = ham_km2(p)
    if a <= 0:
        continue
    w = genislik_km(p)
    if w > INCE_KM:
        kova["KAPSAMA"].append((a, w, 0, p))
        continue
    yakin = 0
    for j in agac.query(p.buffer(tol)):
        if govdeler[int(j)].distance(p) <= tol:
            yakin += 1
            if yakin >= 2:
                break
    kova["DİKİŞ" if yakin >= 2 else "KIYI KENARI"].append((a, w, yakin, p))

yaz("")
yaz("%-14s %8s %14s   %s" % ("aile", "parça", "km²", "ölçüt"))
olcut = {"DİKİŞ": "≤%.0f km · 2+ gövde" % INCE_KM,
         "KIYI KENARI": "≤%.0f km · ≤1 gövde" % INCE_KM,
         "KAPSAMA": ">%.0f km" % INCE_KM}
for k in ("DİKİŞ", "KIYI KENARI", "KAPSAMA"):
    v = kova[k]
    yaz("%-14s %8d %14.0f   %s" % (k, len(v), sum(x[0] for x in v), olcut[k]))

yaz("")
# ── R1 GERİLEME TESTİ ────────────────────────────────────────────────────
# 🔴 TABAN KENDİ PROVENANSINI TAŞIR. Bir sayıyı çıplak bırakmak, onu bir
#   sonraki koşuda sessizce yanıltıcı yapar — bu alet o bedeli bir kez
#   ödedi (96'lık taban 640'lık tabana taşınmıştı ve "<10" hedefi
#   anlamsızlaştı). Taban değişince BU BLOK GÜNCELLENİR.
R1_TABAN = {
    "kosu": "7B",
    "gun": "1281-01-01",
    "olcum": "7 Eylül 2026 15:44 · SINAV-KOSU8-0907",
    "kaynak": "data/donemler.js @ 567895f (koşu 7B çıktısı)",
    "dikis_parca": 637,
    "dikis_km2": 34792,
    "kiyi_parca": 42233,
    "kapsama_parca": 360,
}
_dp = len(kova["DİKİŞ"])
_dk = sum(x[0] for x in kova["DİKİŞ"])
yaz("🟢 R1 GERİLEME TESTİ — «R1 işe yaradı mı» DEĞİL, «yeni koşu BOZDU mu»")
yaz("   TABAN  koşu %s · %s · %s"
    % (R1_TABAN["kosu"], R1_TABAN["gun"], R1_TABAN["olcum"]))
yaz("          %s" % R1_TABAN["kaynak"])
yaz("   DİKİŞ  taban %d parça / %d km²   ·   ŞİMDİ %d parça / %.0f km²"
    % (R1_TABAN["dikis_parca"], R1_TABAN["dikis_km2"], _dp, _dk))
_fp = _dp - R1_TABAN["dikis_parca"]
_fk = _dk - R1_TABAN["dikis_km2"]
yaz("   FARK   %+d parça   ·   %+.0f km²  (%%%+.1f)"
    % (_fp, _fk, 100.0 * _fk / max(1, R1_TABAN["dikis_km2"])))
yaz("   🔴 ÖLÇÜT km², PARÇA DEĞİL: parça sayısı alan tabanına ve")
yaz("      sadeleştirme gürültüsüne duyarlı, toplam alan değil.")
yaz("      Parça sayısı BİLGİDİR, ölçüt değildir.")
yaz("   ⚠️ EŞİK YOK — bu bir HÜKÜM değil bir KIYAS. Sapmanın sebebi")
yaz("      `data/` yamaları olmalı ve AÇIKLANABİLİR olmalı; motor")
yaz("      tarafında `vl` çapası geometriye DOKUNMAZ.")
yaz("   ⬜ HARCANMIŞ REÇETE (silinmedi, damgalandı): «R1'den sonra < 10")
yaz("      parça» — 96 parçalık bir tabana aitti ve R1 4 Eylül 17:32'de")
yaz("      indi (89cd681). Koşu 7B onu ZATEN içeriyor. O satırı bir kabul")
yaz("      ölçütü olarak OKUMA.")

if AYRINTI:
    for k in ("DİKİŞ", "KAPSAMA"):
        yaz("")
        yaz("── %s — en büyük 15" % k)
        for a, w, n, p in sorted(kova[k], reverse=True)[:15]:
            c = p.centroid
            yaz("   %10.1f km²  en %5.2f km  %d gövde  (%.2f, %.2f)"
                % (a, w, n, c.y, c.x))

sys.exit(0)
