# -*- coding: utf-8 -*-
"""
DENETLE_KAPSAMA — yerleşim yoğunluğu denetimi
==============================================
"Ne kadar nokta yeter?" sorusunun ölçülebilir cevabı (MIMARI.md §5). Kapsanan
kutu içindeki her karadaki noktanın en yakın yerleşime uzaklığını ölçer;
eşiği aşan bölgeleri listeler. Faz C-B'nin (dünya kapsamı) ön koşuludur.

Bu araç KARAR VERMEZ, ÖLÇER VE RAPOR EDER. Yüksek çıkan boşlukların bir kısmı
kasten öyledir (Sahra, Rub'ul Hâlî — zaten dolgu noktası var, orası boş
kalmalı); yorumu entegrasyon oturumu yapar.

Kullanım:
    py arac/denetle_kapsama.py                      # varsayılan eşik 120 km
    py arac/denetle_kapsama.py --esik 300            # seyrek bölge ölçütü
    py arac/denetle_kapsama.py --adim 0.5            # daha kaba/hızlı ızgara
    py arac/denetle_kapsama.py --gorsel kapsama.png  # boşlukları haritada göster
"""
import argparse
import json
import os
import re
import sys

import numpy as np
import shapely
from shapely.geometry import shape, box
from shapely.ops import unary_union

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from denetle import yerlesimleri_yukle  # noqa: E402 — arac/ içindeki kardeş modül; stdout UTF-8 sarmalamasını da bu import yapar

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASEMAPS = os.path.join(KOK, "veri-kaynak")

# 🔴 BOLGE ARTIK KOPYALANMIYOR — MOTORUN KAYNAĞINDAN OKUNUYOR.
# Eski hâli `box(-12, 1.5, 62, 62)` diye elle yazılmıştı ve yorumu bunu
# "KOPYALANMIŞTIR" diye itiraf ediyordu. Kullanıcı haritanın Orta Asya /
# Hindistan / Çin / Kuzey İskandinavya yönünde açılmasını istedi; MOTOR
# pencereyi genişlettiği an o satır ÇÜRÜYECEK ve bu denetim ESKİ pencereyle
# ölçüp "kapsama tam" diyecekti.
#
# ⚠️ Sınıfın adı: YAYINI DOĞRULAYAN ARAÇ, DOĞRULADIĞI ŞEYDEN GERİDE KALIR
# VE BUNU SÖYLEMEZ. Bugün aynı ailenin üç üyesi çıktı — bayat rapor, bayat
# tavan, bayat sözlük — ve üçünün de çaresi aynıydı: kaynaktan oku, kopya tutma.
# Desen `uret_altlik.py:58-61`'den alındı; orada zaten böyle çözülmüştü.
_UP = os.path.join(KOK, "arac", "uret_petek.py")
try:
    _src = open(_UP, encoding="utf-8").read()
    _m = re.search(r"^BOLGE\s*=\s*box\(([^)]+)\)", _src, re.M)
    if not _m:
        raise ValueError("BOLGE satırı bulunamadı")
    BOLGE = box(*[float(x) for x in _m.group(1).split(",")])
except Exception as _e:
    # ⚠️ SESSİZCE ESKİ DEĞERE DÜŞME. Ayrıştırma başarısızsa denetim
    # ölçemiyordur; ölçemeyen denetim, temiz denetim değildir.
    raise SystemExit("!! BOLGE uret_petek.py'den okunamadı (%s) — "
                     "denetim ölçemez, düzeltilmeden koşturulmamalı" % _e)
R_DUNYA = 6371.0088

# Bölge özeti — kaba, birbirini kesmeyen dikdörtgen kutular; yalnız raporu
# okunur kılmak içindir, idari/tarihî bir sınır iddiası DEĞİLDİR. Sırayla
# denenir, ilk uyan kutu kazanır; hiçbiri uymazsa "diğer".
BOLGE_KUTULARI = [
    ("Anadolu",            25.5, 45.0, 35.5, 42.5),
    ("Rumeli/Balkanlar",   18.0, 29.0, 39.0, 48.0),
    ("İtalya",              6.0, 19.0, 36.0, 47.5),
    ("İberya",             -10.0,  4.0, 35.5, 44.0),
    ("Batı Avrupa",        -12.0,  8.0, 44.0, 61.0),
    ("Orta Avrupa",          8.0, 24.0, 47.0, 56.0),
    ("Kuzey Avrupa",         4.0, 32.0, 56.0, 62.0),
    ("Doğu Avrupa/bozkır",  29.0, 62.0, 47.0, 62.0),
    ("Kafkasya",            40.0, 50.0, 41.0, 44.0),
    ("İran",                44.0, 62.0, 25.0, 41.0),
    ("Suriye/Mezopotamya",  34.0, 48.0, 29.0, 37.5),
    ("Arabistan",           34.0, 56.0, 12.0, 29.0),
    ("Mısır/Sudan",         24.0, 36.0,  8.0, 31.5),
    ("Kuzey Afrika",       -12.0, 26.0, 27.0, 37.0),
    ("Doğu Afrika",         36.0, 52.0,  1.5, 15.0),
]


def bolge_adi(lon, lat):
    for ad, lon_min, lon_max, lat_min, lat_max in BOLGE_KUTULARI:
        if lon_min <= lon < lon_max and lat_min <= lat < lat_max:
            return ad
    return "diğer"


def bolge_kutusu_bul(ad):
    """--bolge için: BOLGE_KUTULARI'nda ada büyük/küçük harf duyarsız arar."""
    for kayit in BOLGE_KUTULARI:
        if kayit[0].lower() == ad.lower():
            return kayit
    return None


def kara_maskesi_yukle():
    if not os.path.isdir(BASEMAPS):
        print(f"HATA: kara maskesi klasörü yok: {BASEMAPS}")
        print("Bu betik kendiliğinden indirmeye çalışmaz (OTURUM-6-ARACLAR.md'deki uyarı).")
        print("veri-kaynak/ depoda olmalıydı; eksikse entegrasyon oturumuna bildir.")
        sys.exit(2)
    print("Kara maskesi (Natural Earth 10m)...")
    ne = json.load(open(os.path.join(BASEMAPS, "ne_10m_land.geojson"), encoding="utf-8"))
    kara = unary_union([shape(f["geometry"]).buffer(0).intersection(BOLGE)
                        for f in ne["features"] if shape(f["geometry"]).envelope.intersects(BOLGE)])
    kara = kara.buffer(0).simplify(0.004, preserve_topology=True).buffer(0)

    print("Göller çıkarılıyor...")
    try:
        gl = json.load(open(os.path.join(BASEMAPS, "ne_10m_lakes.geojson"), encoding="utf-8"))
        goller = []
        for f in gl["features"]:
            g = shape(f["geometry"]).buffer(0)
            if g.envelope.intersects(BOLGE) and g.area > 0.02:
                g = g.intersection(BOLGE)
                if not g.is_empty:
                    goller.append(g)
        if goller:
            kara = kara.difference(unary_union(goller).buffer(0)).buffer(0)
        print(f"  {len(goller)} büyük göl çıkarıldı")
    except Exception as e:
        print("  göl verisi yok:", e)
    return kara


def izgara_noktalari(kara, adim):
    """BOLGE kutusunu adim x adim derecelik hücrelere böler, hücre merkezlerinden
    karaya düşenleri döner. (lon_dizisi, lat_dizisi) olarak numpy array."""
    lon_min, lat_min, lon_max, lat_max = BOLGE.bounds
    lonlar = np.arange(lon_min + adim / 2, lon_max, adim)
    latlar = np.arange(lat_min + adim / 2, lat_max, adim)
    lon_izgara, lat_izgara = np.meshgrid(lonlar, latlar)
    lon_duz, lat_duz = lon_izgara.ravel(), lat_izgara.ravel()
    icinde = shapely.contains_xy(kara, lon_duz, lat_duz)
    return lon_duz[icinde], lat_duz[icinde]


def en_yakin_uzakliklar(izgara_lon, izgara_lat, yer_lon, yer_lat, yer_ad, parca=2000):
    """Her ızgara noktası için en yakın yerleşime haversine uzaklığı (km) ve
    o yerleşimin indeksini döner. Bellek için parça parça işler."""
    yer_lon_r, yer_lat_r = np.radians(yer_lon), np.radians(yer_lat)
    n = len(izgara_lon)
    uzaklik = np.empty(n)
    en_yakin_idx = np.empty(n, dtype=int)
    for i in range(0, n, parca):
        j = min(i + parca, n)
        g_lon = np.radians(izgara_lon[i:j])[:, None]
        g_lat = np.radians(izgara_lat[i:j])[:, None]
        dlat = g_lat - yer_lat_r[None, :]
        dlon = g_lon - yer_lon_r[None, :]
        a = np.sin(dlat / 2) ** 2 + np.cos(g_lat) * np.cos(yer_lat_r[None, :]) * np.sin(dlon / 2) ** 2
        km = 2 * R_DUNYA * np.arcsin(np.sqrt(np.clip(a, 0, 1)))
        idx = np.argmin(km, axis=1)
        uzaklik[i:j] = km[np.arange(j - i), idx]
        en_yakin_idx[i:j] = idx
    return uzaklik, en_yakin_idx


def main():
    ap = argparse.ArgumentParser(description="Yerleşim yoğunluğunu ölçer, boşlukları raporlar.")
    ap.add_argument("--esik", type=float, default=120.0, help="km cinsinden azami uzaklık (varsayılan 120)")
    ap.add_argument("--adim", type=float, default=0.25, help="ızgara adımı, derece (varsayılan 0.25)")
    ap.add_argument("--gorsel", type=str, default=None, help="PNG çıktı yolu (verilirse görsel üretilir)")
    ap.add_argument("--liste", type=int, default=20, help="en kötü kaç boşluğu listele (varsayılan 20)")
    ap.add_argument("--bolge", type=str, default=None,
                     help="yalnız bu bölge kutusuna odaklan (bkz. BOLGE_KUTULARI, ör. Anadolu)")
    args = ap.parse_args()

    Y = yerlesimleri_yukle()
    yer_lon = np.array([y["lon"] for y in Y])
    yer_lat = np.array([y["lat"] for y in Y])
    yer_ad = [y["ad"] for y in Y]
    print(f"{len(Y)} yerleşim yüklendi.\n")

    kara = kara_maskesi_yukle()

    print(f"\nIzgara üretiliyor (adım {args.adim}°)...")
    izg_lon, izg_lat = izgara_noktalari(kara, args.adim)
    print(f"  karadaki nokta: {len(izg_lon)}")

    print("En yakın yerleşime uzaklıklar hesaplanıyor...")
    uzaklik, en_yakin_idx = en_yakin_uzakliklar(izg_lon, izg_lat, yer_lon, yer_lat, yer_ad)

    if args.bolge:
        kutu = bolge_kutusu_bul(args.bolge)
        if not kutu:
            adlar = ", ".join(k[0] for k in BOLGE_KUTULARI)
            print(f"HATA: '{args.bolge}' tanımlı bölge kutuları arasında yok. Seçenekler: {adlar}")
            sys.exit(2)
        _, lon_min, lon_max, lat_min, lat_max = kutu
        odak = ((izg_lon >= lon_min) & (izg_lon < lon_max) &
                (izg_lat >= lat_min) & (izg_lat < lat_max))
        print(f"\n--bolge {kutu[0]}: {int(odak.sum())} karadaki nokta bu kutuda")
        izg_lon, izg_lat, uzaklik, en_yakin_idx = (izg_lon[odak], izg_lat[odak],
                                                    uzaklik[odak], en_yakin_idx[odak])

    esik = args.esik
    asan = uzaklik > esik
    n_asan = int(asan.sum())
    print(f"\nIzgara: {args.adim}°  |  karadaki nokta: {len(izg_lon)}  |  eşik: {esik:.0f} km")
    print(f"Eşiği aşan: {n_asan} nokta (%{100 * n_asan / max(1, len(izg_lon)):.1f})")

    if n_asan:
        print(f"\nEn kötü boşluklar (ilk {args.liste}):")
        sira = np.argsort(-uzaklik)
        for k in sira[:args.liste]:
            if uzaklik[k] <= esik:
                break
            b = bolge_adi(izg_lon[k], izg_lat[k])
            print(f"   {uzaklik[k]:5.0f} km   {izg_lat[k]:6.2f}, {izg_lon[k]:6.2f}   ({b})"
                  f"     en yakın: {yer_ad[en_yakin_idx[k]]}")

    print("\nBölge özeti:")
    bolgeler = sorted({bolge_adi(lo, la) for lo, la in zip(izg_lon, izg_lat)})
    for b in bolgeler:
        maske = np.array([bolge_adi(lo, la) == b for lo, la in zip(izg_lon, izg_lat)])
        if not maske.any():
            continue
        en_kotu = uzaklik[maske].max()
        durum = "✓" if en_kotu <= esik else "✗"
        print(f"   {b:<20} en kötü {en_kotu:6.0f} km   {durum}")

    if args.gorsel:
        print(f"\nGörsel üretiliyor: {args.gorsel}")
        import matplotlib
        matplotlib.use("Agg")
        import matplotlib.pyplot as plt
        from matplotlib.patches import Polygon as MplPolygon

        fig, ax = plt.subplots(figsize=(14, 11))
        geomler = kara.geoms if hasattr(kara, "geoms") else [kara]
        for g in geomler:
            dis = g.exterior.coords if hasattr(g, "exterior") else None
            if dis is None:
                continue
            ax.add_patch(MplPolygon(list(dis), facecolor="#d8d8d0", edgecolor="none", zorder=1))
            for ic in g.interiors:
                ax.add_patch(MplPolygon(list(ic.coords), facecolor="white", edgecolor="none", zorder=2))
        ax.scatter(izg_lon[~asan], izg_lat[~asan], s=2, c="#5a8f5a", zorder=3, label=f"≤{esik:.0f} km")
        ax.scatter(izg_lon[asan], izg_lat[asan], s=3, c="#c0392b", zorder=4, label=f">{esik:.0f} km")
        ax.scatter(yer_lon, yer_lat, s=6, c="#1a1a1a", marker="x", zorder=5, label="yerleşim")
        if args.bolge:
            _, lon_min, lon_max, lat_min, lat_max = bolge_kutusu_bul(args.bolge)
            ax.set_xlim(lon_min, lon_max)
            ax.set_ylim(lat_min, lat_max)
        else:
            ax.set_xlim(*BOLGE.bounds[0::2])
            ax.set_ylim(*BOLGE.bounds[1::2])
        ax.set_aspect("equal")
        ax.legend(loc="lower left", fontsize=8)
        ax.set_title(f"Yerleşim yoğunluğu — eşik {esik:.0f} km, ızgara {args.adim}°")
        fig.tight_layout()
        fig.savefig(args.gorsel, dpi=150)
        print("  tamam")

    # Bu araç karar vermez — eşiği aşan nokta olması başlı başına hata değildir
    # (kasten boş bırakılan çöller de eşiği aşar). Çıkış kodu her zaman 0.
    sys.exit(0)


if __name__ == "__main__":
    main()
