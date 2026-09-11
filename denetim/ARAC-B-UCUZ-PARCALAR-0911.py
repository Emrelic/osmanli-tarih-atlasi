# -*- coding: utf-8 -*-
"""
ARAC-B-UCUZ-PARCALAR-0911.py — B UCUZ PARÇALAR görevi, 11 Eylül 2026

NE YAPAR: `arac/uret_petek.py`nin B2 (enklav birleştirme) ve B3 (koridor
kırpma) mekanizmalarını, motoru KOŞMADAN, `data/donemler.js`nin (koşu 8
çıktısı — POST-B2/B3, yani bugün YAYINDA GÖRÜNEN gövde) üzerinde tekrar
ölçer. `veri-kaynak/motor_kara.geojson` (koşu 9'un bugüne kadar yazdığı
taze kara maskesi) kıyı/deniz testi için kullanılır.

🔴 D022 ÖNGÖRÜSÜ (BU SATIRLAR ÖLÇÜMDEN ÖNCE YAZILDI VE COMMIT EDİLDİ):
  ① B2 (enklav): bugünkü çıktı POST-B2 olduğu için kalan enklavlar B2'nin
     REDDETTİKLERİdir. Üretim logundaki (`kosu_3eylul_2.log`) toplam
     "uzak" sayacı (40096 petek-gün) "birleşti"den (1099) kat kat büyük —
     ÖNGÖRÜ: eşik gevşetilirse birleşecek YENİ enklav sayısı, kalanlardan
     (bugün ≤223 km'de görülen 3 örnek) ÇOK DAHA FAZLA çıkacak, çünkü çoğu
     "uzak" reddi muhtemelen 250-800 km bandında yığılıyor olmalı — bu
     BANDIN GENİŞLİĞİ HENÜZ ÖLÇÜLMEDİ, bir tahmindir.
  ② B3 (koridor): çıktı POST-B3 olduğu için kural ZATEN uygulanmış olmalı,
     yani kalan "ihlal" sayısının ~0 çıkması BEKLENİR — bu bir kusur
     DEĞİL, B3'ün ÇALIŞTIĞININ kanıtı olur. Sıfırdan farklı bir sayı
     çıkarsa, B3 bir dalı KAÇIRIYOR demektir (D010: iki yönde bak).

YÖNTEM: `_enklav_kara.py`nin metodunu (nearest_points ile ana gövdeye
mesafe) TÜM 523 dönem kırılmasına (6 kesit ÖRNEKLEMİ değil) genişletir,
her enklava EN YAKIN YERLEŞİMİ (`yerlesimler.js`) etiketler (adıyla
raporlamak için), ve `_b3_koridor_kirp`in AYNI derinlik/genişlik testini
(Hausdorff/2·alan/çevre) POST-B3 gövdeye tekrar uygular.

🔒 SADECE OKUR. `arac/uret_petek.py`ye TEK SATIR YAZMAZ, motoru İMPORT
ETMEZ (import etmek koşuyu tetikler — betik dosya en üstte doğrudan
çalışır, `if __name__` kapısı YOK). Fonksiyonlar buraya KOPYALANDI.
"""
import io
import json
import math
import sys
import collections
from shapely.geometry import Polygon, LineString, MultiPolygon, shape
from shapely.ops import unary_union, nearest_points

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"

# ---------------- veri yükle (yalnız oku) ----------------
ham = io.open(KOK + r"\data\donemler.js", encoding="utf-8").read()


def blok(ad):
    i = ham.index("window." + ad)
    j = ham.index("=", i) + 1
    k = ham.index("\n", j)
    while ham[k - 1] != ";":
        k = ham.index("\n", k + 1)
    return json.loads(ham[j:k].rstrip().rstrip(";"))


PAR, PH, DON = blok("PARCALAR"), blok("PARCA_HALKA"), blok("DONEMLER")
print("DONEMLER: %d kayit (%s -> %s)" % (len(DON), DON[0]["t"], DON[-1]["t"]))

gj = json.load(io.open(KOK + r"\veri-kaynak\motor_kara.geojson", encoding="utf-8"))
KARA = unary_union([shape(f["geometry"]) for f in gj["features"]]).buffer(0)

# Yerleşim adları — enklavı isimlendirmek için (yalnız ad + koordinat)
yham = io.open(KOK + r"\data\yerlesimler.js", encoding="utf-8").read()


def yerlesim_listesi():
    # basit ayrıştırma: {ad:"...", ..., k:[lon,lat] ...} kalıbı
    import re
    out = []
    for m in re.finditer(r'\{ad:"([^"]+)"[^}]*?k:\[([\-0-9.]+),([\-0-9.]+)\]', yham):
        out.append((m.group(1), float(m.group(2)), float(m.group(3))))
    return out


YERLER_ADK = yerlesim_listesi()
print("yerlesim adi cikarildi: %d" % len(YERLER_ADK))


def en_yakin_ad(x, y):
    en = None
    ed = 1e18
    for ad, lx, ly in YERLER_ADK:
        d = (lx - x) ** 2 + (ly - y) ** 2
        if d < ed:
            ed = d
            en = ad
    return en


def coz(o):
    out = []
    for x in (o or []):
        if not isinstance(x, int):
            continue
        ph = PH[x] if 0 <= x < len(PH) else None
        if not ph:
            continue
        hl = [PAR[h] for h in ph if 0 <= h < len(PAR)]
        if not hl or len(hl[0]) < 4:
            continue
        try:
            p = Polygon(hl[0], hl[1:]).buffer(0)
            if not p.is_empty:
                out.append(p)
        except Exception:
            pass
    return out


def km_derece(lat):
    return 111.320 * math.cos(math.radians(lat))


def km(a, b):
    lat = (a.y + b.y) / 2.0
    return math.hypot((b.x - a.x) * km_derece(lat), (b.y - a.y) * 110.574)


# ================================================================
# BÖLÜM 1 — B2 ENKLAV: TAM SAYIM (523 dönemin HEPSİ, örneklem değil)
# ================================================================
print()
print("=" * 70)
print("BÖLÜM 1 — B2 ENKLAV, TAM SAYIM (%d dönem)" % len(DON))
print("=" * 70)

enklavlar = []   # (tarih, mesafe_km, alan_km2, en_km, boy_km, en_yakin_yerlesim, deniz_mi)
tekil_gorulen = set()   # (yakin_ad, yuzler_km2_yuvarlak) - kaba tekilleştirme

for d in DON:
    ps = unary_union(coz(d.get("o")) + coz(d.get("v")))
    ps = list(ps.geoms) if ps.geom_type == "MultiPolygon" else [ps]
    ps = [p for p in ps if p.area > 1e-6]
    if len(ps) < 2:
        continue
    ps.sort(key=lambda p: p.area, reverse=True)
    ana = ps[0]
    for p in ps[1:]:
        try:
            n1, n2 = nearest_points(ana, p)
        except Exception:
            continue
        d_km = km(n1, n2)
        deniz = not KARA.covers(LineString([n1, n2]).buffer(0.001))
        x0, y0, x1, y1 = p.bounds
        lat = (y0 + y1) / 2.0
        w = (x1 - x0) * km_derece(lat)
        h = (y1 - y0) * 110.574
        alan = p.area * km_derece(lat) * 110.574
        cx, cy = p.centroid.x, p.centroid.y
        ad = en_yakin_ad(cx, cy)
        enklavlar.append((d["t"], round(d_km, 1), round(alan, 1),
                           round(min(w, h), 1), round(max(w, h), 1), ad, deniz))

karasal = [e for e in enklavlar if not e[6]]
denizasiri = [e for e in enklavlar if e[6]]
print("Toplam enklav-gorunumu (petek-gun DEGIL, DONEM-DEGISIMI bazinda): %d" % len(enklavlar))
print("  KARASAL (B2'nin degerlendirdigi): %d" % len(karasal))
print("  DENIZ ASIRI (B2 zaten reddeder) : %d" % len(denizasiri))

# eşik bantları
esikler = [100, 200, 250, 300, 400, 500, 600, 800, 10 ** 9]
onceki = 0
print()
print("KARASAL ENKLAV — KÜMÜLATİF (mesafe ≤ X km):")
for e in esikler:
    n = sum(1 for k in karasal if k[1] <= e)
    alan = sum(k[2] for k in karasal if k[1] <= e)
    etiket = str(e) if e < 10 ** 9 else "sonsuz"
    print("  <= %6s km : %4d enklav-gorunumu · toplam %10.0f km2 (yeni: +%d)"
          % (etiket, n, alan, n - onceki))
    onceki = n

print()
print("MEVCUT EŞİK (250 km) İLE 800 KM ARASINDA KALAN (gevşetilirse katılacak):")
bant = [k for k in karasal if 250 < k[1] <= 800]
# adıyla tekilleştir (aynı enklav birden çok dönemde tekrar sayılabilir)
ad_grubu = collections.defaultdict(list)
for k in bant:
    ad_grubu[k[5]].append(k)
for ad, kayitlar in sorted(ad_grubu.items(), key=lambda x: -max(k[2] for k in x[1])):
    en_buyuk = max(kayitlar, key=lambda k: k[2])
    print("  %-28s %3d dönem-görünümü · en büyük %8.0f km2 · mesafe %.0f km (%s)"
          % (ad or "(adsız)", len(kayitlar), en_buyuk[2], en_buyuk[1], en_buyuk[0]))

print()
print("250 KM ALTINDA AMA HÂLÂ AYRI DURAN (B2'nin distance-DIŞI bir sebeple")
print("reddettiği örnekler — mesafe suçlu değil, `başkasının toprağı` ihtimali):")
altinda = [k for k in karasal if k[1] <= 250]
for k in sorted(altinda, key=lambda k: -k[2])[:15]:
    print("  %s  %6.1f km  %8.0f km2  (%s)" % (k[0], k[1], k[2], k[5]))

# ================================================================
# BÖLÜM 2 — B3 KORİDOR: aynı yöntemle, HALA İHLAL EDEN VAR MI (post-B3)
# ================================================================
print()
print("=" * 70)
print("BÖLÜM 2 — B3 KORİDOR, POST-B3 GÖVDEDE KALAN İHLAL (523 dönem)")
print("=" * 70)


def kapat(g, r):
    try:
        return g.buffer(r).buffer(-r)
    except Exception:
        return g


B3_KAPAMA_DER = 0.45   # motordaki SABİT — değiştirmiyoruz, kopyalıyoruz
ihlal = []
sig_ornek = []
for d in DON:
    ps = coz(d.get("o")) + coz(d.get("v"))
    if not ps:
        continue
    g = unary_union(ps)
    if g.is_empty:
        continue
    k = kapat(g.simplify(0.02, preserve_topology=True), B3_KAPAMA_DER)
    aday = k.difference(g)
    if aday.is_empty:
        continue
    x0, y0, x1, y1 = g.bounds
    m = B3_KAPAMA_DER * 4
    from shapely.geometry import box
    kutu = box(x0 - m, y0 - m, x1 + m, y1 + m)
    disari = kutu.difference(k)
    disari_kenar = disari.buffer(0.01)
    comps = list(aday.geoms) if aday.geom_type == "MultiPolygon" else [aday]
    for c in comps:
        if c.is_empty or c.length <= 0:
            continue
        agiz = c.intersection(disari_kenar)
        if agiz.is_empty:
            continue    # kapalı delik, B1'in işi
        w_der = 2.0 * c.area / c.length
        try:
            d_der = c.hausdorff_distance(agiz)
        except Exception:
            continue
        lat = (c.bounds[1] + c.bounds[3]) / 2.0
        w_km = w_der * km_derece(lat)
        d_km = d_der * km_derece(lat)
        if d_der <= w_der:
            if len(sig_ornek) < 3:
                sig_ornek.append((d["t"], d_km, w_km))
            continue
        # BURASI: post-B3 gövdede HÂLÂ derinlik > genişlik olan bir parça —
        # motorun kendi kuralına göre bunun DOLDURULMUŞ olması gerekirdi.
        cx, cy = c.centroid.x, c.centroid.y
        ihlal.append((d["t"], round(d_km, 1), round(w_km, 1), en_yakin_ad(cx, cy),
                      round(c.area * km_derece(lat) * 110.574, 1)))

print("POST-B3 gövdede kalan 'derinlik > genişlik' ihlali: %d" % len(ihlal))
if ihlal:
    print("  (BEKLENEN 0 idi — B3 bir dalı kaçırıyor olabilir, D010 ile bak)")
    for i in sorted(ihlal, key=lambda x: -(x[1] - x[2]))[:15]:
        print("  %s  derinlik %.0f km > genişlik %.0f km  ~%.0f km2  (%s)"
              % (i[0], i[1], i[2], i[4], i[3]))
else:
    print("  ✓ ÖNGÖRÜLDÜĞÜ GİBİ — B3 kuralı bugünkü çıktıda TAM uygulanmış görünüyor.")
print("(sığ örnek — B3'ün BIRAKTIĞI, Emre'nin istediği: %d örnek gösteriliyor)" % len(sig_ornek))
for s in sig_ornek:
    print("  %s  derinlik %.0f km <= genişlik %.0f km  → SIĞ, dokunulmadı" % s)

print()
print("BİTTİ.")
