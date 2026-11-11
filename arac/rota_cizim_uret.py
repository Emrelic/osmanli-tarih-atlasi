# -*- coding: utf-8 -*-
"""
ROTA ÇİZİMİ — seyahat güzergâhlarını coğrafyaya uydurur (post-it #185, Emre, 11 Kasım 2026).

Emre: "denizden gelen gemi kara üzerinden geçmez; kara üzerinden giden adam da vadiler,
düzlükler arasında şehirden şehire coğrafî gerçeğe göre hareket eder ... bu ve bunun gibi
tüm seyahat rotalarını coğrafyaya uygun hale getir."

NE YAPAR
  `window.SEFERLER*` dosyalarındaki `tur:"seyahat"` kayıtlarının her ardışık durak çifti
  (bacak) için 0,1° ızgarada EN UCUZ YOLU bulur ve `data/rota_cizim.js`e yazar:
      window.ROTA_CIZIM = { "<kayıt id>": [[lon,lat], ...], ... }
  app.js bu hattı ÇİZİM için kullanır (`rota` alanının eşi); kaynaklı duraklar (`yol`)
  değişmez, her durak hattın üzerinde AYNEN durur.

🔴 ARA NOKTALAR İDDİA DEĞİL ÇİZİMDİR. Kaynak duraklar arasındaki yolu çoğu zaman vermez;
   hat "bu iki durak arasında coğrafyanın izin verdiği makul yol"dur. Bacağın deniz mi kara
   mı olduğu maliyetten çıkar; kaynağın açıkça söylediği ve maliyetin yanlış seçtiği bacaklar
   KIP tablosunda (aşağıda) gerekçesiyle zorlanır.

MALİYET (km başına, birimsiz)
  açık deniz 0,40 · iç su (göl, Hazar) 0,80 · kara 1,00 × eğim × yükselti × engebe · nehir ×0,70
  eğim: exp(EGIM_K·|Δh/Δx|) (Tobler'in üstel biçimi; 0,1° ızgarada eğim yumuşadığı için
  katsayı yüksek) · yükselti: 2500 m üstünde her 1000 m için +YUKSEK_K · engebe: hücre içi
  (60" noktalar) en yüksek − en alçak farkı, ENGEBE_M metrede maliyet ×2 → vadi/ova seçilir
  kara ↔ deniz geçişi: durağa LIMAN_KM yakınsa GECIS_CEZA (liman), yol ortasında GECIS_ORTA
  (kıstaktan karaya çıkıp yeniden binme olmasın) · kara ↔ iç su: GOL_CEZA
  ÖLÇÜM (11 Kasım 2026, KASA): 109 deniz bacağında liman dışı kara üstü çizim 27.145 km →
  1.591 km; kalan çoğu 0,1° ızgaranın 6–25 km'lik kıyı sürtmesi ve küçük ada kesmesidir.
  Dar boğazlar 0,1°de kapanır; BOGAZLAR listesi denize açılır (İstanbul, Çanakkale, Kerç,
  Messina, Sund).

GİRDİ  veri-kaynak/ne_10m_land.geojson · ne_10m_lakes.geojson · ne_10m_rivers.geojson
       veri-kaynak/yukseklik/etopo2022_60s_surface.tif (NOAA ETOPO 2022, 60"; gitignore —
       yoksa: https://www.ngdc.noaa.gov/mgg/global/relief/ETOPO2022/data/60s/60s_surface_elev_gtif/
       ETOPO_2022_v1_60s_N90W180_surface.tif)
KOŞU   py arac/rota_cizim_uret.py            (≈ birkaç dakika)
       py arac/rota_cizim_uret.py --id gz-marco-polo   (tek kayıt, dosyayı kısmen günceller)
"""
import argparse
import json
import math
import os
import re
import sys
import time

import numpy as np
import rasterio
from rasterio.features import rasterize
from rasterio.transform import from_origin
from scipy import ndimage
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import dijkstra
from shapely.geometry import shape, LineString
from shapely.prepared import prep
from shapely.ops import unary_union

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VK = os.path.join(KOK, "veri-kaynak")
CIKTI = os.path.join(KOK, "data", "rota_cizim.js")
DEM_ADAY = [
    os.path.join(VK, "yukseklik", "etopo2022_60s_surface.tif"),
    r"D:\atlas\veri-kaynak\yukseklik\etopo2022_60s_surface.tif",
]

C = 0.1                      # hücre (derece)
LAT_UST, LAT_ALT = 85.0, -80.0
NY = int(round((LAT_UST - LAT_ALT) / C))
NX = int(round(360 / C))

DENIZ, GOL, KARA = 0.40, 0.80, 1.00
NEHIR_CARPAN = 0.70
EGIM_K = 20.0
ENGEBE_M = 700.0             # hücre içi 700 m engebe = maliyet ×2 (dağlık hücreden kaç, vadiyi seç;
                             #   400'de Badahşan→Kaşgar Pamir yerine Fergana'dan dolandı)
YUKSEK_K = 0.35              # 2500 m üstü her 1000 m için maliyet artışı
GECIS_CEZA = 20.0            # kara↔açık deniz, bacağın UÇ limanında (km eşdeğeri)
GECIS_ORTA = 1500.0          # kara↔açık deniz, yol ORTASINDA (kıstaktan aktarma olmasın:
                             #   ilk denemede Zeytun→Hürmüz Malaka yerine Kra'yı geçti)
GOL_CEZA = 60.0              # kara↔iç su
LIMAN_KM = 60.0              # durağa bu kadar yakın hücre "uç liman" sayılır
KIP_ZORLA = 40.0             # zorlanan kipte öteki ortamın çarpanı

BOGAZLAR = [  # (ad, [(lon,lat), ...]) — ızgarada denize açılır
    ("İstanbul Boğazı", [(28.98, 40.99), (29.06, 41.10), (29.12, 41.24)]),
    ("Çanakkale Boğazı", [(26.15, 40.03), (26.40, 40.20), (26.70, 40.42)]),
    ("Marmara", [(26.70, 40.42), (27.6, 40.65), (28.98, 40.99)]),
    ("Kerç Boğazı", [(36.45, 45.15), (36.55, 45.35), (36.65, 45.45)]),
    ("Messina Boğazı", [(15.60, 38.15), (15.64, 38.27)]),
    ("Sund (Øresund)", [(12.68, 55.55), (12.65, 55.80), (12.62, 56.05)]),
]

# Kaynağın açık söylediği, maliyetin yanlış seçtiği bacaklar. Anahtar: (kayıt id, bacak
# başlangıç indeksi) — bacak yol[i] → yol[i+1]. Değer: ("kara"|"deniz", gerekçe).
KIP = {
    ("gz-marco-polo", 14): ("kara", "Hanbalık→Zeytun: Polo Katay ve Manzi'yi karadan geçer (Yule c.2, Bk.II LV–LXXXII)"),
    ("gz-ibn-battuta-2", 12): ("kara", "Kerç→Konstantiniyye: Bayalun Hatun'un kafilesiyle (TDV 'İbn Battûta': "
                                       "'Bayalun'un kafilesine katılınmış') — kervan, gemi değil"),
}


# ───────────────────────── veri okuma ─────────────────────────
def js_dizi_oku(yol, ad):
    s = open(yol, encoding="utf-8").read()
    i = s.index("window." + ad)
    i = s.index("[", i)
    # dosya sonundaki ']' ile biter; JSON olmayan kayıtlar için json5 yerine kaba ayrıştırma
    j = s.rindex("]")
    return json.loads(s[i:j + 1])


def seyahat_kayitlari():
    out = []
    ddir = os.path.join(KOK, "data")
    for ad in sorted(os.listdir(ddir)):
        if not (ad.startswith("seferler") and ad.endswith(".js")):
            continue
        s = open(os.path.join(ddir, ad), encoding="utf-8").read()
        m = re.search(r"window\.(SEFERLER[A-Za-z0-9_]*)\s*=", s)
        if not m:
            continue
        try:
            dizi = js_dizi_oku(os.path.join(ddir, ad), m.group(1))
        except Exception:
            continue   # JSON olmayan (elle yazılmış JS) dosya: seyahat kaydı yoksa sorun değil
        for k in dizi:
            # seyahat kayıtları + gezgin deniz yolculukları (dünya turları; `gz-` kimlikli)
            gezgin_deniz = k.get("tur") == "deniz" and str(k.get("id", "")).startswith("gz-") \
                if isinstance(k, dict) else False
            if isinstance(k, dict) and (k.get("tur") == "seyahat" or gezgin_deniz) and k.get("id") \
                    and isinstance(k.get("yol"), list) and len(k["yol"]) >= 2 and not k.get("rota"):
                out.append(k)
    return out


def izgara_kur():
    t0 = time.time()
    tr = from_origin(-180.0, LAT_UST, C, C)

    def geo(dosya):
        return json.load(open(os.path.join(VK, dosya), encoding="utf-8"))["features"]

    kara_f = geo("ne_10m_land.geojson")
    kara = rasterize(((f["geometry"], 1) for f in kara_f), out_shape=(NY, NX), transform=tr,
                     fill=0, dtype="uint8").astype(bool)
    gol = rasterize(((f["geometry"], 1) for f in geo("ne_10m_lakes.geojson")
                     if (f["properties"].get("scalerank") or 9) <= 6),
                    out_shape=(NY, NX), transform=tr, fill=0, dtype="uint8").astype(bool)
    nehir = rasterize(((f["geometry"], 1) for f in geo("ne_10m_rivers.geojson")
                       if (f["properties"].get("scalerank") or 9) <= 7),
                      out_shape=(NY, NX), transform=tr, fill=0, dtype="uint8",
                      all_touched=True).astype(bool)
    bogaz = rasterize(((LineString(p), 1) for _, p in BOGAZLAR), out_shape=(NY, NX),
                      transform=tr, fill=0, dtype="uint8", all_touched=True).astype(bool)
    su = (~kara) | bogaz      # göller kara poligonunun içinde: `gol` ile ayrıca iç su sayılır
    # açık deniz = en büyük su bileşenleri (okyanuslar birbirine bağlı tek parça)
    etiket, n = ndimage.label(su, structure=np.ones((3, 3)))
    boy = ndimage.sum(np.ones_like(etiket), etiket, index=np.arange(1, n + 1))
    buyuk = set((np.argsort(boy)[::-1][:3] + 1).tolist())   # dünya okyanusu (+ kutup parçaları)
    acik = np.isin(etiket, list(buyuk))
    ic_su = (su & ~acik) | (gol & kara)

    dem, engebe = dem_oku()
    kara_birlesik = unary_union([shape(f["geometry"]) for f in kara_f])
    print("ızgara: %dx%d · kara %.0f%% · iç su %d hücre · %.1f sn" %
          (NX, NY, 100 * kara.mean(), int(ic_su.sum()), time.time() - t0))
    return {"kara": kara & ~bogaz & ~(gol & kara), "acik": acik & ~kara | bogaz, "ic": ic_su,
            "nehir": nehir & kara, "dem": dem, "engebe": engebe,
            "kara_geom": prep(kara_birlesik), "kara_ham": kara_birlesik}


def dem_oku():
    for p in DEM_ADAY:
        if os.path.exists(p):
            from rasterio.windows import Window
            with rasterio.open(p) as d:
                # 60" → 0,1° (6×6 blok): ortalama + engebe (blok içi en yüksek − en alçak:
                # dağ ↔ vadi tabanı). Kaynak 90K..90G; bizim pencere 85K..80G.
                ust = int(round((90 - LAT_UST) / C))
                ort = np.zeros((NY, NX), np.float32)
                eng = np.zeros((NY, NX), np.float32)
                adim = 100
                for r in range(0, NY, adim):
                    n = min(adim, NY - r)
                    w = d.read(1, window=Window(0, (ust + r) * 6, NX * 6, n * 6)).astype(np.float32)
                    b = w.reshape(n, 6, NX, 6)
                    ort[r:r + n] = b.mean(axis=(1, 3))
                    eng[r:r + n] = b.max(axis=(1, 3)) - b.min(axis=(1, 3))
                return ort, eng
    sys.exit("🔴 DEM yok: " + " | ".join(DEM_ADAY))


# ───────────────────────── yol bulma ─────────────────────────
KOMSU = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]


def hucre(lon, lat):
    return (int(math.floor((LAT_UST - lat) / C)), int(math.floor((lon + 180.0) / C)))


def bacak_yolu(Z, a, b, kip=None):
    """a,b = [lon,lat]. Döner: [[lon,lat], ...] (uçlar a ve b aynen)."""
    lon_a, lat_a = a
    lon_b, lat_b = b
    kaydir = 0.0
    if abs(lon_b - lon_a) > 180:          # tarih değiştirme hattı: doğuya sar
        if lon_b < lon_a:
            lon_b += 360
        else:
            lon_a += 360
    span = max(abs(lon_b - lon_a), abs(lat_b - lat_a))
    pay = max(6.0, 0.6 * span)
    x0 = min(lon_a, lon_b) - pay; x1 = max(lon_a, lon_b) + pay
    y0 = max(LAT_ALT + 0.1, min(lat_a, lat_b) - pay); y1 = min(LAT_UST - 0.1, max(lat_a, lat_b) + pay)
    c0 = int(math.floor((x0 + 180.0) / C))
    c1 = int(math.floor((x1 + 180.0) / C)) + 1
    r1 = int(math.floor((LAT_UST - y0) / C)) + 1
    r0 = int(math.floor((LAT_UST - y1) / C))
    cols = np.arange(c0, c1) % NX
    sl = lambda A: A[r0:r1][:, cols]
    kara, acik, ic, nehir, dem = sl(Z["kara"]), sl(Z["acik"]), sl(Z["ic"]), sl(Z["nehir"]), sl(Z["dem"])
    engebe = sl(Z["engebe"])
    H, W = kara.shape
    lat_c = LAT_UST - (np.arange(r0, r1) + 0.5) * C

    birim = np.where(acik, DENIZ, np.where(ic, GOL, KARA)).astype(np.float64)
    birim = np.where(kara & nehir, birim * NEHIR_CARPAN, birim)
    yuk = np.clip((dem - 2500.0) / 1000.0, 0, None)
    birim = np.where(kara, birim * (1 + YUKSEK_K * yuk) * (1 + engebe / ENGEBE_M), birim)
    if kip == "kara":
        birim = np.where(acik, birim * KIP_ZORLA, birim)
    elif kip == "deniz":
        birim = np.where(kara, birim * KIP_ZORLA, birim)
    ortam = np.where(acik, 2, np.where(ic, 1, 0))   # 0 kara · 1 iç su · 2 açık deniz

    # uç liman maskesi: a ya da b'ye LIMAN_KM'den yakın hücreler
    yy = lat_c[:, None]
    xx = (-180.0 + (c0 + np.arange(W) + 0.5) * C)[None, :]
    def yakin(lon, lat):
        return 111.2 * np.sqrt(((xx - lon) * math.cos(math.radians(lat))) ** 2 + (yy - lat) ** 2) <= LIMAN_KM
    liman = yakin(lon_a, lat_a) | yakin(lon_b, lat_b)

    idx = np.arange(H * W).reshape(H, W)
    sat, sut, agr = [], [], []
    for dy, dx in KOMSU:
        ys0, ys1 = max(0, -dy), H - max(0, dy)
        xs0, xs1 = max(0, -dx), W - max(0, dx)
        A = (slice(ys0, ys1), slice(xs0, xs1))
        B = (slice(ys0 + dy, ys1 + dy), slice(xs0 + dx, xs1 + dx))
        latm = np.radians(lat_c[ys0:ys1])[:, None]
        km = 111.2 * C * np.sqrt((dx * np.cos(latm)) ** 2 + dy ** 2) * np.ones((1, xs1 - xs0))
        dz = np.abs(dem[B] - dem[A]) / 1000.0
        her_ikisi_kara = (ortam[A] == 0) & (ortam[B] == 0)
        egim = np.where(her_ikisi_kara, np.exp(np.minimum(EGIM_K * dz / km, 6.0)), 1.0)
        w = km * 0.5 * (birim[A] + birim[B]) * egim
        gecis = ortam[A] != ortam[B]
        uc = liman[A] | liman[B]
        ceza = np.where(gecis & ((ortam[A] == 2) | (ortam[B] == 2)),
                        np.where(uc, GECIS_CEZA, GECIS_ORTA),
                        np.where(gecis, GOL_CEZA, 0.0))
        w = w + ceza
        sat.append(idx[A].ravel()); sut.append(idx[B].ravel()); agr.append(w.ravel())
    G = coo_matrix((np.concatenate(agr), (np.concatenate(sat), np.concatenate(sut))),
                   shape=(H * W, H * W)).tocsr()

    def yerel(lon, lat):
        r = int(math.floor((LAT_UST - lat) / C)) - r0
        c = int(math.floor((lon + 180.0) / C)) - c0
        return min(max(r, 0), H - 1), min(max(c, 0), W - 1)

    ra, ca = yerel(lon_a, lat_a)
    rb, cb = yerel(lon_b, lat_b)
    s_i, e_i = idx[ra, ca], idx[rb, cb]
    dist, pred = dijkstra(G, directed=True, indices=s_i, return_predecessors=True)
    if not np.isfinite(dist[e_i]):
        return [list(a), list(b)], None
    yol = []
    k = e_i
    while k != s_i and k >= 0:
        yol.append(k)
        k = pred[k]
    yol.append(s_i)
    yol.reverse()
    pts, ort = [], []
    for k in yol:
        r, c = divmod(int(k), W)
        pts.append([-180.0 + (c0 + c + 0.5) * C, LAT_UST - (r0 + r + 0.5) * C])
        ort.append(int(ortam[r, c]))
    pts[0] = [lon_a, lat_a]
    pts[-1] = [lon_b, lat_b]
    return sadelestir(pts, ort, Z), ort


def kara_uzunluk(Z, ls):
    """Çizginin kara poligonu üstündeki uzunluğu (derece)."""
    if not Z["kara_geom"].intersects(ls):
        return 0.0
    from shapely.geometry import box
    parca = Z["kara_ham"].intersection(box(*ls.buffer(0.2).bounds))
    return ls.intersection(parca).length


def sadelestir(pts, ort, Z):
    """Ortam koşularını (kara/deniz) ayrı ayrı Douglas-Peucker'la sadeleştirir; deniz koşusu
    sadeleşince karaya girerse toleransı düşürür."""
    out = []
    i = 0
    n = len(pts)
    while i < n:
        j = i
        while j + 1 < n and (ort[j + 1] == 2) == (ort[i] == 2):
            j += 1
        kosu = pts[max(0, i - 1): j + 1] if i > 0 else pts[i:j + 1]
        if len(kosu) >= 3:
            ls = LineString(kosu)
            tol = 0.12 if ort[i] == 2 else 0.05   # kara: vadi kıvrımı kaybolmasın
            ham_kara = kara_uzunluk(Z, ls) if ort[i] == 2 else 0.0
            while True:
                s = ls.simplify(tol, preserve_topology=False)
                if ort[i] != 2 or tol < 0.01:
                    break
                # deniz koşusu: sadeleşmiş çizgi ham ızgara yolundan fazla kara kesmesin
                # (ham yol da boğaz/kıyı hücrelerinde kara poligonuna değebilir)
                if kara_uzunluk(Z, s) <= ham_kara + 0.02:
                    break
                tol /= 2
            kc = [list(c) for c in s.coords]
        else:
            kc = [list(c) for c in kosu]
        if out and kc and out[-1] == kc[0]:
            kc = kc[1:]
        out.extend(kc)
        i = j + 1
    return [[round(x, 3), round(y, 3)] for x, y in out]


def kayit_rotasi(Z, k):
    yol = k["yol"]
    hat = []
    ozet = []
    for i in range(len(yol) - 1):
        a, b = yol[i][:2], yol[i + 1][:2]
        if abs(a[0] - b[0]) < 1e-6 and abs(a[1] - b[1]) < 1e-6:
            continue
        kip = KIP.get((k["id"], i), (None,))[0]
        if kip is None and k.get("tur") == "deniz":
            kip = "deniz"      # deniz yolculuğu: bacak karaya çıkmaz (liman uçları hariç)
        p, ort = bacak_yolu(Z, a, b, kip)
        # Tarih değiştirme hattı: bacak kendi içinde kesintisizdir (gerekirse +360);
        # kaydı da kesintisiz tutmak için bacağı önceki bacağın ucuna 360'ın katıyla
        # oturt. (Hat 180°'yi aşabilir — MapLibre çizgiyi böyle kesintisiz çizer.)
        onceki_x = hat[-1][0] if hat else a[0]
        kay = 360.0 * round((onceki_x - p[0][0]) / 360.0)
        p = [[round(x + kay, 3), y] for x, y in p]
        p[0] = [round(a[0] + 360.0 * round((onceki_x - a[0]) / 360.0), 4), a[1]]
        if hat and abs(hat[-1][0] - p[0][0]) < 1e-3 and abs(hat[-1][1] - p[0][1]) < 1e-3:
            p = p[1:]
        hat.extend(p)
        if ort:
            dz = sum(1 for o in ort if o == 2) / len(ort)
            ozet.append("%d:%s%s" % (i, "D" if dz > 0.5 else "K", "*" if kip else ""))
    return hat, ozet


def yaz(rotalar):
    satir = []
    for kid in sorted(rotalar):
        satir.append("  %s: %s" % (json.dumps(kid, ensure_ascii=False),
                                   json.dumps(rotalar[kid], separators=(",", ":"))))
    bas = (
        "// ROTA ÇİZİMİ — ÜRETİLMİŞ (arac/rota_cizim_uret.py) · ELLE DÜZENLEME.\n"
        "// Post-it #185 (Emre, 11 Kasım 2026): seyahat güzergâhları deniz bacağında denizden,\n"
        "// kara bacağında vadi/geçitten gitsin. Kayıt id → çizim hattı [[lon,lat],…].\n"
        "// 🔴 Ara noktalar İDDİA DEĞİL ÇİZİMDİR: kaynaklı duraklar `yol`dadır ve hattın üzerinde\n"
        "// aynen durur; aradaki yol 0,1° ızgarada deniz/kara/eğim maliyetinin en ucuz yoludur.\n"
        "window.ROTA_CIZIM = {\n")
    with open(CIKTI, "w", encoding="utf-8", newline="\n") as f:
        f.write(bas + ",\n".join(satir) + "\n};\n")


def mevcut_oku():
    if not os.path.exists(CIKTI):
        return {}
    s = open(CIKTI, encoding="utf-8").read()
    i = s.index("{", s.index("window.ROTA_CIZIM"))
    j = s.rindex("}")
    return json.loads(s[i:j + 1])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--id", action="append")
    a = ap.parse_args()
    kayitlar = seyahat_kayitlari()
    if a.id:
        kayitlar = [k for k in kayitlar if k["id"] in a.id]
    print("seyahat kaydı: %d" % len(kayitlar))
    Z = izgara_kur()
    rotalar = mevcut_oku() if a.id else {}
    t0 = time.time()
    for n, k in enumerate(kayitlar, 1):
        t1 = time.time()
        hat, ozet = kayit_rotasi(Z, k)
        rotalar[k["id"]] = hat
        print("%3d/%d %-28s %4d nokta  %s  %.1f sn" % (n, len(kayitlar), k["id"][:28], len(hat),
                                                       " ".join(ozet), time.time() - t1))
        sys.stdout.flush()
    yaz(rotalar)
    print("yazıldı: %s · %d kayıt · %.0f sn" % (os.path.relpath(CIKTI, KOK), len(rotalar), time.time() - t0))


if __name__ == "__main__":
    main()
