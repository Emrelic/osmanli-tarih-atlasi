# -*- coding: utf-8 -*-
"""ARAC-SIZMA-0912 — SIZMA DERİNLİĞİ ÖLÇÜMÜ (KITA 11, ikinci iş)

Emre: *"sızmayı ölçtür."* · sevk: tahta M-3584 ·
karar: `oturumlar/MENZIL-KARARLARI-0912.md` (bütçe 40 saat TEK YÖN, özne
rutin idare)

SORU: bir yerleşimden 40 saatlik yürüyüş bütçesiyle dağa ne kadar SIZILIYOR?

╔══════════════════════════════════════════════════════════════════════════╗
║ İKİ SAYI AYRI BASILIR — VE ASIL BULGU ORANLARIDIR                        ║
╚══════════════════════════════════════════════════════════════════════════╝
    YÜRÜNEN YOL   Dijkstra yolunun km uzunluğu
    DÜZ ÇİZGİ     tohum ile varılan nokta arasındaki büyük daire mesafesi
    KIVRIM KATI   yürünen / düz çizgi

╔══════════════════════════════════════════════════════════════════════════╗
║ ÜÇ KADEME — yalnız EĞİM KESTİRİMİ değişir, hız eğrisi AYNI kalır         ║
╚══════════════════════════════════════════════════════════════════════════╝
    (a) MOTOR   S = |∇z_ort| / 5566 m        hücreden hücreye, bugünkü hâl
    (b) TRI     S = (TRI/8) / d_ort(enlem)   hücre İÇİ yerel eğim (R3)
    (c) GEÇİT   S = 2·(geçit − z_min)/5566   eyerden geçip inmek

🔴 CEZA EKLENMEDİ (`M-3584 ④`). Üç kademe de AYNI Tobler eğrisini kullanır;
   aralarındaki tek fark eğimin nereden okunduğudur.
🔴 TOBLER'I BEN SEÇMEDİM — hız eğrisi R1/KITA 9'un alanı. Koordinatörün
   M-3584'teki hesabı Tobler kullanıyor; karşılaştırılabilir kalsın diye
   aynısı kullanıldı:  v = 6·exp(−3,5·|S + 0,05|) km/saat.
   Kaynak: Tobler, W. (1993) "Three Presentations on Geographical Analysis
   and Modeling", NCGIA Technical Report 93-1. ⚪ ÖZGÜN RAPOR OKUNMADI —
   `D107`: bu "bulunamadı" değil OKUMADIM; formül sevkten devralındı.

KULLANIM
    py denetim/ARAC-SIZMA-0912.py --sinav          # birim sınavları
    py denetim/ARAC-SIZMA-0912.py --hiza           # DEM hizası (TAZE kodla)
    py denetim/ARAC-SIZMA-0912.py --olc --cikti X.json --png-onek denetim/KITA11-SIZMA
"""

import argparse
import json
import math
import os
import time

import numpy as np

KV_ADIM = 0.05
KV_X0, KV_Y0 = -180.0, -60.0
DERECE_M = 111320.0
HUCRE_M = KV_ADIM * DERECE_M                 # 5566 m
PIKSEL_M = DERECE_M / 120.0                  # 927,7 m
ALT = 6
BUTCE_SAAT = 40.0                            # Emre kararı, TEK YÖN
DEM_YOL = os.path.join("veri-kaynak", "yukseklik", "etopo2022_30s_dunya.tif")
SEKIZ = ((-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1))

# ── tohumlar — ATLASIN KENDİ yerleşimlerinden (arac/girdi.py ile okundu) ──
TOHUMLAR = {
    "ISVICRE": [("Luzern", 8.31, 47.05), ("Bern", 7.45, 46.95),
                ("Lozan", 6.63, 46.52)],
    "KAFKASYA": [("Vladikavkaz", 44.68, 43.02), ("Tiflis", 44.78, 41.72),
                 ("Kutaisi", 42.70, 42.27)],
}
# pencere: tohumdan her yöne ≥2,5° — 40 saatlik menzil (≤201 km) kenara değmesin
PENCERE = {"ISVICRE": (4.0, 44.0, 12.6, 50.1),
           "KAFKASYA": (40.0, 39.6, 49.6, 46.6)}


def _json_cevir(o):
    """numpy skalerlerini JSON'a çevir.

    🔴 Kusur ÖLÇÜLDÜ: `np.unravel_index` np.int64 döndürüyor, ondan türeyen
       enlem np.float64 oluyor, karşılaştırma np.bool_ üretiyor ve `json.dump`
       *"Object of type bool is not JSON serializable"* diye çöküyor — mesaj
       yanıltıcı, çünkü çöken tip Python'un `bool`u DEĞİL.
    """
    if isinstance(o, np.generic):
        return o.item()
    raise TypeError(f"JSON'a cevrilemedi: {type(o).__name__}")


def tobler(S):
    """Tobler yürüme hızı, km/saat. S = boyutsuz eğim büyüklüğü."""
    return 6.0 * np.exp(-3.5 * np.abs(np.asarray(S, dtype=np.float64) + 0.05))


def ortalama_komsu_uzakligi_m(lat):
    dy = PIKSEL_M
    dx = PIKSEL_M * math.cos(math.radians(lat))
    return (2 * dx + 2 * dy + 4 * math.hypot(dx, dy)) / 8.0


def buyuk_daire_km(lat1, lon1, lat2, lon2):
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dl = math.radians(lon2 - lon1)
    a = (math.sin((p2 - p1) / 2) ** 2
         + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2)
    return 2 * 6371.0088 * math.asin(min(1.0, math.sqrt(a)))


# ══════════════════════════════════════════════════════════════════════════
# ⑥ DEM HİZASI — TAZE koddaki (7803a87) mantık BİREBİR tekrarlanır
# ══════════════════════════════════════════════════════════════════════════
def hiza_dogrula():
    """Yamalı motor DEM'i doğru enleme koyuyor mu? Bilinen zirvelerle sınanır.

    ⚠️ ACONCAGUA KULLANILMAZ — koordinatörün uyarısı (M-3584): komşu Cerro
       Mercedario (6.770 m) ortalanmış hücrede onu geçiyor, yani sınav YANLIŞ
       ZİRVEYİ bulur ve kayma varmış gibi görünür. (`D073`in ölçüm yüzü:
       iki tarafın AYNI ŞEYDEN bahsettiğini önce doğrula.)
    """
    import rasterio
    from rasterio.windows import from_bounds
    nx = int(round(360.0 / KV_ADIM))
    ny = int(round((85.0 - KV_Y0) / KV_ADIM))
    with rasterio.open(DEM_YOL) as ds:
        dem_ust = float(ds.bounds.top)
        ust = min(KV_Y0 + ny * KV_ADIM, dem_ust)
        sat = int(round((ust - KV_Y0) / KV_ADIM))
        win = from_bounds(KV_X0, KV_Y0, KV_X0 + nx * KV_ADIM, ust,
                          transform=ds.transform)
        zp = ds.read(1, window=win, out_shape=(sat, nx),
                     resampling=rasterio.enums.Resampling.average).astype("float32")
    zp = np.flipud(zp)
    z = zp if sat == ny else np.vstack([zp, np.zeros((ny - sat, nx), "float32")])
    zirveler = [("Everest", 27.9881, 86.9250), ("Mont Blanc", 45.8326, 6.8652),
                ("Elbruz", 43.3550, 42.4392), ("Kilimanjaro", -3.0674, 37.3556),
                ("Agri Dagi", 39.7020, 44.2983), ("K2", 35.8800, 76.5133)]
    cikti, enb = [], 0.0
    for ad, lat, lon in zirveler:
        j = int((lat - KV_Y0) / KV_ADIM)
        i = int((lon - KV_X0) / KV_ADIM)
        pen = z[j - 20:j + 20, i - 12:i + 12]
        jj, _ii = np.unravel_index(int(np.argmax(pen)), pen.shape)
        blat = KV_Y0 + (j - 20 + jj + 0.5) * KV_ADIM
        cikti.append({"zirve": ad, "gercek_lat": lat, "bulunan_lat": round(blat, 3),
                      "kayma": round(blat - lat, 3)})
        enb = max(enb, abs(blat - lat))
    return {"ad": "dem-hizasi", "zirveler": cikti,
            "en_buyuk_kayma_derece": round(enb, 3),
            "hucre_boyu_derece": KV_ADIM,
            "gecti": enb <= 0.10,
            "not": ("Aconcagua KULLANILMADI: komsu Cerro Mercedario ortalanmis "
                    "hucrede onu geciyor (koordinator uyarisi M-3584).")}


# ══════════════════════════════════════════════════════════════════════════
# BÖLGE YÜZEYİ — üç eğim kademesi
# ══════════════════════════════════════════════════════════════════════════
def _hizala(v, taban):
    return taban + math.floor((v - taban) / KV_ADIM) * KV_ADIM


def yuzey_kur(bolge):
    """Bölgenin ızgarasını ve üç eğim kademesini kurar."""
    import rasterio
    from rasterio.windows import Window
    lo0, la0, lo1, la1 = PENCERE[bolge]
    lo0, la0 = _hizala(lo0, KV_X0), _hizala(la0, KV_Y0)
    nx = int(round((lo1 - lo0) / KV_ADIM))
    ny = int(round((la1 - la0) / KV_ADIM))
    with rasterio.open(DEM_YOL) as ds:
        sut0 = int(round((lo0 - ds.transform.c) * 120.0))
        sat0 = int(round((ds.transform.f - (la0 + ny * KV_ADIM)) * 120.0))
        halo = 1
        Zh = ds.read(1, window=Window(sut0 - halo, sat0 - halo,
                                      nx * ALT + 2 * halo, ny * ALT + 2 * halo)
                     ).astype(np.float32)
        Zh[Zh == ds.nodata] = np.nan
    # TRI (mutlak) alt ızgarada
    tri = np.zeros_like(Zh)
    for dj, di in SEKIZ:
        tri += np.abs(np.roll(np.roll(Zh, -dj, axis=0), -di, axis=1) - Zh)
    Z = np.flipud(Zh[halo:-halo, halo:-halo])
    tri = np.flipud(tri[halo:-halo, halo:-halo])

    yig = (Z.reshape(ny, ALT, nx, ALT).transpose(0, 2, 1, 3)
            .reshape(ny, nx, ALT * ALT))
    Zc = Z.reshape(ny, ALT, nx, ALT).transpose(0, 2, 1, 3)
    z_ort = np.nanmean(yig, axis=2)
    z_min = np.nanmin(yig, axis=2)
    tri_h = (tri.reshape(ny, ALT, nx, ALT).transpose(0, 2, 1, 3)
                .reshape(ny, nx, ALT * ALT)).mean(axis=2)
    gecit_dz = Zc.max(axis=3).min(axis=2)
    gecit_gk = Zc.max(axis=2).min(axis=2)
    gecit = (gecit_dz + gecit_gk) / 2.0            # öngörüde ilan edildiği gibi

    latlar = la0 + (np.arange(ny) + 0.5) * KV_ADIM
    d_ort = np.array([ortalama_komsu_uzakligi_m(a) for a in latlar])[:, None]

    gy, gx = np.gradient(z_ort)
    S = {
        "a_motor": np.hypot(gx, gy) / HUCRE_M,
        "b_tri": (tri_h / 8.0) / d_ort,
        "c_gecit": 2.0 * np.clip(gecit - z_min, 0, None) / HUCRE_M,
    }
    return {"lo0": lo0, "la0": la0, "nx": nx, "ny": ny, "z_ort": z_ort,
            "z_min": z_min, "tri": tri_h, "gecit": gecit, "S": S,
            "latlar": latlar}


def kara_maskesi(g):
    """Motorun KENDİ maskesi: ne_10m_land − göller (uret_petek.py:484-543)."""
    import shapely
    from shapely.geometry import shape, box
    from shapely.ops import unary_union
    adim = g.get("adim", KV_ADIM)
    kutu = box(g["lo0"] - 0.2, g["la0"] - 0.2,
               g["lo0"] + g["nx"] * adim + 0.2, g["la0"] + g["ny"] * adim + 0.2)
    ne = json.load(open(os.path.join("veri-kaynak", "ne_10m_land.geojson"),
                        encoding="utf-8"))
    kara = unary_union([shape(f["geometry"]).buffer(0).intersection(kutu)
                        for f in ne["features"]
                        if shape(f["geometry"]).intersects(kutu)])
    # GÖLLER — motorun ikisini de kullandığı kaynaklar (uret_petek.py:512-543):
    #   ① veri-kaynak/ne_10m_lakes.geojson   ② data/goller.js (tarihî düzeltme)
    # 🔴 Göl KARA sayılırsa Cenevre ve Konstanz gölleri YÜRÜNEBİLİR olur ve
    #    İsviçre sızması SAHTE biçimde artar. Bu yüzden maskeye giriyor.
    gol_say = 0
    try:
        ng = json.load(open(os.path.join("veri-kaynak", "ne_10m_lakes.geojson"),
                            encoding="utf-8"))
        gs = []
        for f in ng["features"]:
            gg = shape(f["geometry"]).buffer(0)
            if gg.intersects(kutu):
                gs.append(gg.intersection(kutu))
        import sys
        sys.path.insert(0, "arac")
        import girdi
        for eg in girdi.oku_goller(sessiz=True):      # ölçüldü: dict listesi
            gg = shape(eg["geometry"]).buffer(0)
            if gg.intersects(kutu):
                gs.append(gg.intersection(kutu))
        if gs:
            gol_say = len(gs)
            kara = kara.difference(unary_union(gs).buffer(0)).buffer(0)
    except Exception as e:                                   # pragma: no cover
        print(f"  🔴 göl maskesi OKUNAMADI ({e}) — göller KARA sayılıyor, "
              f"sizma SAHTE biçimde artar")
        gol_say = -1
    shapely.prepare(kara)
    xs = g["lo0"] + (np.arange(g["nx"]) + 0.5) * adim
    m = np.zeros((g["ny"], g["nx"]), bool)
    for j in range(g["ny"]):
        m[j] = shapely.contains_xy(kara, xs, np.full(g["nx"], g["latlar"][j]))
    print(f"  kara maskesi: ne_10m_land − {gol_say} göl parçası")
    return m


# ══════════════════════════════════════════════════════════════════════════
# DIJKSTRA — saat bütçesiyle, yürünen yol AYRICA taşınır
# ══════════════════════════════════════════════════════════════════════════
def yayil(g, kara, S, tohum_lon, tohum_lat, butce=BUTCE_SAAT):
    import heapq
    nx, ny = g["nx"], g["ny"]
    adim = g.get("adim", KV_ADIM)                     # ince ızgarada 0,05/6
    hiz = tobler(S)                                   # km/saat, hücre başına
    i0 = int((tohum_lon - g["lo0"]) / adim)
    j0 = int((tohum_lat - g["la0"]) / adim)
    if not (0 <= i0 < nx and 0 <= j0 < ny):
        raise ValueError("tohum pencere disinda")
    if not kara[j0, i0]:                              # kıyı tohumunu kaydır
        en, best = 1e9, None
        for dj in range(-3, 4):
            for di in range(-3, 4):
                a, b = i0 + di, j0 + dj
                if 0 <= a < nx and 0 <= b < ny and kara[b, a]:
                    d = di * di + dj * dj
                    if d < en:
                        en, best = d, (b, a)
        if best is None:
            raise ValueError("tohum karaya oturtulamadi")
        j0, i0 = best
    INF = float("inf")
    saat = np.full((ny, nx), INF)
    yol = np.full((ny, nx), INF)                      # yürünen km
    saat[j0, i0] = 0.0
    yol[j0, i0] = 0.0
    dy_km = adim * 111.32
    q = [(0.0, j0, i0)]
    while q:
        d, j, i = heapq.heappop(q)
        if d > saat[j, i]:
            continue
        if d > butce:
            continue
        dx_km = dy_km * math.cos(math.radians(g["latlar"][j]))
        for di, dj in SEKIZ:
            a, b = i + di, j + dj
            if not (0 <= a < nx and 0 <= b < ny) or not kara[b, a]:
                continue
            adim_km = math.hypot(dx_km * di, dy_km * dj)
            nd = d + adim_km / hiz[b, a]              # sürtünme HEDEF hücreden
            if nd < saat[b, a] and nd <= butce:
                saat[b, a] = nd
                yol[b, a] = yol[j, i] + adim_km
                heapq.heappush(q, (nd, b, a))
    return saat, yol, (j0, i0)


def sizma_olc(g, kara, saat, yol, j0, i0, sektor=16):
    """Sektör sektör sızma. Her sektörde EN UZAK düz-çizgi noktası."""
    saat_ref = saat
    adim = g.get("adim", KV_ADIM)
    ny, nx = saat.shape
    ul = np.isfinite(saat)
    lat0 = g["latlar"][j0]
    lon0 = g["lo0"] + (i0 + 0.5) * adim
    js, iss = np.nonzero(ul)
    if js.size == 0:
        return {"not": "hicbir hucreye ulasilamadi"}
    latl = g["la0"] + (js + 0.5) * adim
    lonl = g["lo0"] + (iss + 0.5) * adim
    duz = np.array([buyuk_daire_km(lat0, lon0, a, b) for a, b in zip(latl, lonl)])
    yon = (np.degrees(np.arctan2((lonl - lon0) * math.cos(math.radians(lat0)),
                                 latl - lat0)) + 360.0) % 360.0
    kova = (yon / (360.0 / sektor)).astype(int) % sektor
    kenar = bool(ul[0].any() or ul[-1].any() or ul[:, 0].any() or ul[:, -1].any())
    sek = []
    for k in range(sektor):
        m = kova == k
        if not m.any():
            sek.append(None)
            continue
        t = int(np.argmax(duz[m]))
        idx = np.nonzero(m)[0][t]
        # 🔑 SINIRLAYAN NE? Bütçe mi, kıyı mı? Bu ayrım olmadan "en kötü
        #    sektör" yanıltıcıdır: Kutaisi'de üç kademe de AYNI 88,1 km verdi
        #    ve sebep eğim değil KARANIN BİTMESİYDİ. Ölçüsü: uç hücrede
        #    harcanan saat bütçeye yakınsa BÜTÇE, çok altındaysa KIYI/ENGEL
        #    sınırlıyor demektir.
        harcanan = float(saat_ref[js[idx], iss[idx]])
        sek.append({"yon_derece": round(k * 360.0 / sektor, 1),
                    "duz_km": round(float(duz[idx]), 1),
                    "yurunen_km": round(float(yol[js[idx], iss[idx]]), 1),
                    "kivrim": round(float(yol[js[idx], iss[idx]] / max(duz[idx], 1e-6)), 3),
                    "harcanan_saat": round(harcanan, 1),
                    "sinirlayan": ("BUTCE" if harcanan > 0.90 * BUTCE_SAAT
                                   else "KIYI/ENGEL"),
                    "lat": round(float(latl[idx]), 3), "lon": round(float(lonl[idx]), 3),
                    "z_ort_m": round(float(g["z_ort"][js[idx], iss[idx]]), 0)})
    dolu = [s for s in sek if s]
    enkotu = min(dolu, key=lambda s: s["duz_km"])
    eniyi = max(dolu, key=lambda s: s["duz_km"])
    ortanca = sorted(dolu, key=lambda s: s["duz_km"])[len(dolu) // 2]
    # ⚠️ ARAZİNİN sınırladığı en kötü sektör — kıyının kestiği sektörler ELENİR.
    #    İkisi ayrı sorulmazsa "dağa sızma" ölçüsü deniz kıyısında yanılır.
    butceli = [s for s in dolu if s["sinirlayan"] == "BUTCE"]
    enkotu_butce = min(butceli, key=lambda s: s["duz_km"]) if butceli else None
    alan = float(ul.sum()) * (adim * 111.32) ** 2 * math.cos(math.radians(lat0))
    return {
        "tohum_lat": round(lat0, 3), "tohum_lon": round(lon0, 3),
        "ulasilan_hucre": int(ul.sum()),
        "ulasilan_alan_km2": round(alan, 0),
        "EN_KOTU_SEKTOR": enkotu, "ORTANCA_SEKTOR": ortanca, "EN_IYI_SEKTOR": eniyi,
        "EN_KOTU_SEKTOR_BUTCE_SINIRLI": enkotu_butce,
        "kiyi_sinirli_sektor_sayisi": int(len(dolu) - len(butceli)),
        "kivrim_ortanca_butun_sektorler": round(
            float(np.median([s["kivrim"] for s in dolu])), 3),
        "PENCERE_KENARINA_DEGDI": kenar,
        "sektorler": sek,
    }


# ══════════════════════════════════════════════════════════════════════════
# BİRİM SINAVLARI
# ══════════════════════════════════════════════════════════════════════════
def sinav_duz_arazi():
    """DÜZ arazide 40 saat 201 km vermeli — karar belgesinin kendi sayısı."""
    ny = nx = 121
    g = {"lo0": 0.0, "la0": 0.0, "nx": nx, "ny": ny,
         "z_ort": np.zeros((ny, nx), np.float32),
         "latlar": 0.0 + (np.arange(ny) + 0.5) * KV_ADIM}
    kara = np.ones((ny, nx), bool)
    S = np.zeros((ny, nx))
    saat, yol, (j0, i0) = yayil(g, kara, S, 3.0, 3.0)
    o = sizma_olc(g, kara, saat, yol, j0, i0)
    bek = BUTCE_SAAT * float(tobler(0.0))
    eniyi = o["EN_IYI_SEKTOR"]["duz_km"]
    return {"ad": "duz-arazi-201-km", "beklenen_km": round(bek, 1),
            "olculen_en_iyi_km": eniyi,
            "kivrim_ortanca": o["kivrim_ortanca_butun_sektorler"],
            "gecti": abs(eniyi - bek) / bek < 0.03
                     and o["kivrim_ortanca_butun_sektorler"] < 1.05,
            "yorum": ("Duz arazide sizma = 40 x 5,037 = 201 km ve kivrim 1,0 "
                      "olmali. Izgara kosegen hatasi %5'i gecmemeli.")}


def sinav_egimli_arazi():
    """Sabit eğimli düzlemde sızma, Tobler'ın verdiği mesafeyi vermeli."""
    ny = nx = 121
    egim = 0.15
    y, x = np.mgrid[0:ny, 0:nx].astype(np.float32)
    g = {"lo0": 0.0, "la0": 0.0, "nx": nx, "ny": ny,
         "z_ort": (x * HUCRE_M * egim).astype(np.float32),
         "latlar": 0.0 + (np.arange(ny) + 0.5) * KV_ADIM}
    kara = np.ones((ny, nx), bool)
    S = np.full((ny, nx), egim)
    saat, yol, (j0, i0) = yayil(g, kara, S, 3.0, 3.0)
    o = sizma_olc(g, kara, saat, yol, j0, i0)
    bek = BUTCE_SAAT * float(tobler(egim))
    eniyi = o["EN_IYI_SEKTOR"]["duz_km"]
    return {"ad": "sabit-egim-tobler", "egim": egim,
            "beklenen_km": round(bek, 1), "olculen_km": eniyi,
            "gecti": abs(eniyi - bek) / bek < 0.05,
            "yorum": "Tek tip yuzeyde sizma = butce x Tobler hizi."}


def sinav_duvar():
    """🔑 TOPOLOJİ SINAVI: geçilmez bir duvar kıvrım katını BÜYÜTMELİ."""
    ny = nx = 121
    g = {"lo0": 0.0, "la0": 0.0, "nx": nx, "ny": ny,
         "z_ort": np.zeros((ny, nx), np.float32),
         "latlar": 0.0 + (np.arange(ny) + 0.5) * KV_ADIM}
    kara = np.ones((ny, nx), bool)
    # 🔴 İLK KURGU DEJENERE ÇIKTI: duvarın deliği 41 hücre güneydeydi (228 km)
    #    ve 40 saatlik bütçe oraya YETİŞMİYORDU ⇒ duvarın ötesine HİÇ
    #    ulaşılamadı, küme BOŞTU ve sınav "kaldı" dedi. Kusur eşikte değil
    #    KURGUDAYDI. Delik bütçe içine alındı, VE boş kümenin bir daha sessizce
    #    geçmemesi için ayrıca sınanıyor (`D187`: boş küme her öngörüyü doğrular).
    DUVAR_I = 70
    kara[52:121, DUVAR_I] = False     # delik: güneydeki 52 satır (≈45 km)
    S = np.zeros((ny, nx))
    saat, yol, (j0, i0) = yayil(g, kara, S, 3.0, 3.0)
    o = sizma_olc(g, kara, saat, yol, j0, i0)
    duvar_lon = 0.0 + (DUVAR_I + 0.5) * KV_ADIM
    ote = [s for s in o["sektorler"] if s and s["lon"] > duvar_lon]
    kv = max((s["kivrim"] for s in ote), default=0.0)
    # kontrol: duvarsız aynı kurguda kıvrım 1'e yakın olmalı (İKİ YÖNLÜ sınav)
    kara2 = np.ones((ny, nx), bool)
    s2, y2, (b0, a0) = yayil(g, kara2, S, 3.0, 3.0)
    o2 = sizma_olc(g, kara2, s2, y2, b0, a0)
    kv2 = max((s["kivrim"] for s in o2["sektorler"]
               if s and s["lon"] > duvar_lon), default=0.0)
    return {"ad": "duvar-kivrim", "duvar_otesi_en_buyuk_kivrim": round(kv, 3),
            "duvarsiz_ayni_yonde_kivrim": round(kv2, 3),
            "duvar_otesi_sektor_sayisi": len(ote),
            "gecti": bool(len(ote) >= 2 and kv > 1.3 and kv2 < 1.10),
            "yorum": ("Izgara ENGELI temsil edebiliyorsa kivrim buyur (duvarli "
                      "%.2f) ve engel yokken 1'e yakin kalir (duvarsiz %.2f). "
                      "Bu sinav, gercek olcumde kivrimin 1'e yakin cikmasinin "
                      "ARACIN kusuru DEGIL arazinin/izgaranin ozelligi oldugunu "
                      "gosterir." % (kv, kv2))}


def sinavlar():
    return [sinav_duz_arazi(), sinav_egimli_arazi(), sinav_duvar()]


# ══════════════════════════════════════════════════════════════════════════
def butce_egrisi(g, saat, j0, i0, sektor=16,
                 basamaklar=(2, 4, 6, 8, 10, 15, 20, 25, 30, 35, 40)):
    """Sızma derinliği ile BÜTÇE arasındaki eğri — ve 20 km hangi saatte?

    `M-3584 ④` "yorumlama" diyor; bu yorum değil TERS ÇÖZÜM: Emre'nin 20 km'i
    ölçülen yüzeyde hangi bütçeye karşılık geliyor? Cevap bir sayıdır.
    """
    adim = g.get("adim", KV_ADIM)
    ny, nx = saat.shape
    lat0 = g["latlar"][j0]
    lon0 = g["lo0"] + (i0 + 0.5) * adim
    js, iss = np.nonzero(np.isfinite(saat))
    latl = g["la0"] + (js + 0.5) * adim
    lonl = g["lo0"] + (iss + 0.5) * adim
    duz = np.array([buyuk_daire_km(lat0, lon0, a, b) for a, b in zip(latl, lonl)])
    yon = (np.degrees(np.arctan2((lonl - lon0) * math.cos(math.radians(lat0)),
                                 latl - lat0)) + 360.0) % 360.0
    kova = (yon / (360.0 / sektor)).astype(int) % sektor
    sa = saat[js, iss]
    egri = []
    for t in basamaklar:
        m = sa <= t
        if not m.any():
            continue
        yaricap = [duz[m & (kova == k)].max() for k in range(sektor)
                   if (m & (kova == k)).any()]
        egri.append({"saat": t, "en_kotu_sektor_km": round(float(min(yaricap)), 1),
                     "ortanca_sektor_km": round(float(np.median(yaricap)), 1)})
    # 20 km'e karşılık gelen saat — doğrusal ara değer
    yirmi = None
    for i in range(1, len(egri)):
        a0, a1 = egri[i - 1], egri[i]
        if a0["en_kotu_sektor_km"] <= 20.0 <= a1["en_kotu_sektor_km"]:
            f = (20.0 - a0["en_kotu_sektor_km"]) / max(
                a1["en_kotu_sektor_km"] - a0["en_kotu_sektor_km"], 1e-9)
            yirmi = round(a0["saat"] + f * (a1["saat"] - a0["saat"]), 1)
            break
    return {"egri": egri, "20_km_kac_saat": yirmi,
            "40_saatte_en_kotu_km": egri[-1]["en_kotu_sektor_km"] if egri else None}


def ince_yuzey(bolge):
    """🔑 KONTROL DENEYİ — aynı ölçüm 30 yay-sn (926 m) ızgarada.

    Ö6 *"eksik olan şey ızgaranın engeli taşıyamaması"* diyordu ve öngörüde
    **dolaylı** kanıtla yetineceğimi yazmıştım. Doğrudan sınanabiliyor: aynı
    pencerede aynı bütçe, ama hücre 5566 m yerine 927 m — yani 36 kat daha
    çok hücre. Kıvrım katı BÜYÜRSE eksik olan çözünürlüktür; DEĞİŞMEZSE
    değildir.
    ⚠️ Bu ızgara DEM'in kendi çözünürlüğü; daha incesi elimizde YOK, yani
       bu bir ALT SINIR ölçümüdür, "gerçek kıvrım" değil.
    """
    import rasterio
    from rasterio.windows import Window
    lo0, la0, lo1, la1 = PENCERE[bolge]
    lo0, la0 = _hizala(lo0, KV_X0), _hizala(la0, KV_Y0)
    nx = int(round((lo1 - lo0) / KV_ADIM)) * ALT
    ny = int(round((la1 - la0) / KV_ADIM)) * ALT
    adim = KV_ADIM / ALT
    with rasterio.open(DEM_YOL) as ds:
        sut0 = int(round((lo0 - ds.transform.c) * 120.0))
        sat0 = int(round((ds.transform.f - (la0 + ny * adim)) * 120.0))
        Z = ds.read(1, window=Window(sut0, sat0, nx, ny)).astype(np.float32)
    Z = np.flipud(Z)
    latlar = la0 + (np.arange(ny) + 0.5) * adim
    dy = PIKSEL_M
    dx = PIKSEL_M * np.cos(np.radians(latlar))[:, None]
    gy, gx = np.gradient(Z)
    S = np.hypot(gx / dx, gy / dy)
    return {"lo0": lo0, "la0": la0, "nx": nx, "ny": ny, "adim": adim,
            "z_ort": Z, "latlar": latlar, "S": S}


def cizim(g, kara, katman, onek, bolge, tohum_ad):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    fig, axl = plt.subplots(1, 3, figsize=(16.5, 5.4))
    uz = [g["lo0"], g["lo0"] + g["nx"] * KV_ADIM,
          g["la0"], g["la0"] + g["ny"] * KV_ADIM]
    for ax, (ad, saat, o) in zip(axl, katman):
        ax.imshow(np.where(kara, g["z_ort"], np.nan), origin="lower", extent=uz,
                  cmap="terrain", vmin=-200, vmax=3500)
        ax.contourf(np.linspace(uz[0], uz[1], g["nx"]),
                    np.linspace(uz[2], uz[3], g["ny"]),
                    np.where(np.isfinite(saat), saat, np.nan),
                    levels=[0, 10, 20, 40], colors=["#08306b", "#2171b5", "#9ecae1"],
                    alpha=0.55)
        ax.plot(o["tohum_lon"], o["tohum_lat"], "r*", ms=14)
        ek = o["EN_KOTU_SEKTOR"]
        ax.plot([o["tohum_lon"], ek["lon"]], [o["tohum_lat"], ek["lat"]], "r--", lw=1.2)
        ax.set_title(f"{ad}\nen kotu sektor {ek['duz_km']:.0f} km duz / "
                     f"{ek['yurunen_km']:.0f} km yurunen (kivrim {ek['kivrim']:.2f})",
                     fontsize=9)
        ax.set_xlabel("boylam"); ax.set_ylabel("enlem")
    fig.suptitle(f"{bolge} · {tohum_ad} · 40 saatlik butce (TEK YON) · "
                 f"kusaklar 10/20/40 saat · CEZA EKLENMEDI", fontsize=11)
    fig.tight_layout()
    yol = f"{onek}-{bolge}-{tohum_ad}.png"
    fig.savefig(yol, dpi=110)
    plt.close(fig)
    return yol


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sinav", action="store_true")
    ap.add_argument("--hiza", action="store_true")
    ap.add_argument("--olc", action="store_true")
    ap.add_argument("--ince", action="store_true",
                    help="KONTROL: ayni olcum 30 yay-sn (926 m) izgarada")
    ap.add_argument("--bolge")
    ap.add_argument("--png-onek", default="denetim/KITA11-SIZMA")
    ap.add_argument("--cikti")
    a = ap.parse_args()

    rap = {"alet": "ARAC-SIZMA-0912", "tarih": time.strftime("%Y-%m-%d %H:%M"),
           "butce_saat": BUTCE_SAAT, "hiz_egrisi": "Tobler 1993 (R1/KITA 9'un alani)",
           "ceza_eklendi": False}

    print("═══ BIRIM SINAVLARI ═══")
    rap["sinavlar"] = sinavlar()
    for s in rap["sinavlar"]:
        print(f"  {'GECTI ' if s['gecti'] else 'KALDI '} {s['ad']}")
    if any(not s["gecti"] for s in rap["sinavlar"]):
        print("  🔴 SINAV KALDI — olcume gecilmiyor")
        if a.cikti:
            json.dump(rap, open(a.cikti, "w", encoding="utf-8"), ensure_ascii=False,
                  indent=1, default=_json_cevir)
        raise SystemExit(1)
    if a.sinav and not (a.hiza or a.olc):
        if a.cikti:
            json.dump(rap, open(a.cikti, "w", encoding="utf-8"), ensure_ascii=False,
                  indent=1, default=_json_cevir)
        return

    if a.hiza or a.olc:
        print("\n═══ ⑥ DEM HIZASI (TAZE kod, 7803a87) ═══")
        rap["hiza"] = hiza_dogrula()
        for z in rap["hiza"]["zirveler"]:
            print(f"  {z['zirve']:12s} gercek {z['gercek_lat']:7.3f}  "
                  f"bulunan {z['bulunan_lat']:7.3f}  kayma {z['kayma']:+6.3f}")
        print(f"  ⇒ en buyuk kayma {rap['hiza']['en_buyuk_kayma_derece']}° "
              f"({'GECTI' if rap['hiza']['gecti'] else 'KALDI'})")
        if not rap["hiza"]["gecti"]:
            print("  🔴 HIZA BOZUK — olcume gecilmiyor")
            if a.cikti:
                json.dump(rap, open(a.cikti, "w", encoding="utf-8"),
                          ensure_ascii=False, indent=1)
            raise SystemExit(1)

    if a.olc:
        rap["bolgeler"] = {}
        for bolge in ([a.bolge] if a.bolge else list(TOHUMLAR)):
            print(f"\n═══ {bolge} ═══")
            t0 = time.time()
            g = yuzey_kur(bolge)
            kara = kara_maskesi(g)
            print(f"  izgara {g['nx']}×{g['ny']} · kara {int(kara.sum()):,} hucre "
                  f"· {time.time()-t0:.0f} sn")
            rap["bolgeler"][bolge] = {"izgara": [g["nx"], g["ny"]],
                                      "kara_hucre": int(kara.sum()),
                                      "arazi_profili": {}, "tohumlar": {}}
            for ad, kod in (("a_motor", "a"), ("b_tri", "b"), ("c_gecit", "c")):
                s = g["S"][ad][kara]
                rap["bolgeler"][bolge]["arazi_profili"][ad] = {
                    "egim_%_ortanca": round(float(np.median(s)) * 100, 2),
                    "egim_%_y90": round(float(np.percentile(s, 90)) * 100, 2),
                    "tobler_hiz_ortanca_kmsa": round(float(tobler(np.median(s))), 3)}
            rap["bolgeler"][bolge]["arazi_profili"]["tri_m_ortanca"] = round(
                float(np.median(g["tri"][kara])), 1)
            rap["bolgeler"][bolge]["arazi_profili"]["z_ort_m_ortanca"] = round(
                float(np.median(g["z_ort"][kara])), 1)
            for tad, tlon, tlat in TOHUMLAR[bolge]:
                katman, cikt = [], {}
                for ad in ("a_motor", "b_tri", "c_gecit"):
                    saat, yol, (j0, i0) = yayil(g, kara, g["S"][ad], tlon, tlat)
                    o = sizma_olc(g, kara, saat, yol, j0, i0)
                    cikt[ad] = o
                    katman.append((ad, saat, o))
                    ek = o["EN_KOTU_SEKTOR"]
                    print(f"  {tad:13s} {ad:8s} en kotu sektor "
                          f"{ek['duz_km']:6.1f} km duz · {ek['yurunen_km']:6.1f} km "
                          f"yurunen · kivrim {ek['kivrim']:.2f} · "
                          f"en iyi {o['EN_IYI_SEKTOR']['duz_km']:6.1f} km"
                          + ("  🔴 KENAR" if o["PENCERE_KENARINA_DEGDI"] else ""))
                cikt["_png"] = cizim(g, kara, katman, a.png_onek, bolge, tad)
                rap["bolgeler"][bolge]["tohumlar"][tad] = cikt

    if a.ince:
        rap["ince_kontrol"] = {"_ne": ("ayni pencere, ayni butce, hucre 927 m "
                                       "(5566 m yerine) — 36 kat cok hucre"),
                               "bolgeler": {}}
        for bolge in ([a.bolge] if a.bolge else list(TOHUMLAR)):
            print(f"\n═══ {bolge} · INCE IZGARA (30 yay-sn) ═══")
            t0 = time.time()
            g = ince_yuzey(bolge)
            kara = kara_maskesi(g)
            print(f"  izgara {g['nx']}×{g['ny']} = {g['nx']*g['ny']:,} hucre · "
                  f"kara {int(kara.sum()):,} · kurulum {time.time()-t0:.0f} sn")
            rap["ince_kontrol"]["bolgeler"][bolge] = {
                "izgara": [g["nx"], g["ny"]],
                "egim_%_ortanca": round(float(np.median(g["S"][kara])) * 100, 2),
                "egim_%_y90": round(float(np.percentile(g["S"][kara], 90)) * 100, 2),
                "tohumlar": {}}
            for tad, tlon, tlat in TOHUMLAR[bolge]:
                t1 = time.time()
                saat, yol, (j0, i0) = yayil(g, kara, g["S"], tlon, tlat)
                o = sizma_olc(g, kara, saat, yol, j0, i0)
                o["_sure_sn"] = round(time.time() - t1, 1)
                o["butce_egrisi"] = butce_egrisi(g, saat, j0, i0)
                rap["ince_kontrol"]["bolgeler"][bolge]["tohumlar"][tad] = o
                be = o["butce_egrisi"]
                print(f"                20 km -> {be['20_km_kac_saat']} saat  ·  "
                      + " · ".join(f"{e['saat']}sa:{e['en_kotu_sektor_km']:.0f}km"
                                   for e in be["egri"][:6]))
                eb = o.get("EN_KOTU_SEKTOR_BUTCE_SINIRLI") or o["EN_KOTU_SEKTOR"]
                print(f"  {tad:13s} butce-sinirli en kotu {eb['duz_km']:6.1f} km duz · "
                      f"{eb['yurunen_km']:6.1f} km yurunen · kivrim {eb['kivrim']:.2f} · "
                      f"kivrim ortanca {o['kivrim_ortanca_butun_sektorler']:.2f} · "
                      f"{o['_sure_sn']:.0f} sn")

    if a.cikti:
        json.dump(rap, open(a.cikti, "w", encoding="utf-8"), ensure_ascii=False,
                  indent=1, default=_json_cevir)
        print(f"\nJSON: {a.cikti}")


if __name__ == "__main__":
    main()
