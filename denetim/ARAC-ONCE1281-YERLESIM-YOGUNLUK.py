# -*- coding: utf-8 -*-
"""ONCE1281-YERLESIM-OLC · ⑤ — pencere 1281 öncesine açılırsa yoğunluk yeter mi?

Ölçüt MIMARI.md §5: karadaki hiçbir nokta en yakın yerleşime
  yoğun 60 km · normal 120 km · seyrek 300 km'den uzak olmamalı.
Izgara: 0.5° hücre merkezi, ne_10m_land içinde, box(-180,-60,180,85).
Uzaklık: birim küre kiriş → büyük daire km (scipy cKDTree).

İki küme:
  A  "1281 kesiti"  — kur: yok ya da ≤1281-01-01 VE ilk dönem ≤1281-01-01
                      (ya da hiç dönemi yok = dolgu). Pencere geriye açılıp
                      her 1281 noktası 1000'e UZATILIRSA görülecek yoğunluk
                      ⇒ İYİMSER TAVAN (1000-1281'de hepsinin var olduğu varsayılır).
  B  "kanıtlı"      — ③'te var-aday çıkanlar + ②'deki f<1281 noktalar
                      (yalnız çekirdek kovada ölçüldü ⇒ yalnız orada anlamlı).
Kullanım: py denetim/ARAC-ONCE1281-YERLESIM-YOGUNLUK.py [--tdv <③ json>] [--cik <json>]
"""
import sys, io, os, json, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
import numpy as np
from scipy.spatial import cKDTree
from shapely.geometry import shape
from shapely import contains_xy
from shapely.ops import unary_union

EPOK = "1281-01-01"
R = 6371.0

# (ad, lat_min, lat_max, lon_min, lon_max, eşik_km) — SIRAYLA, ilk tutan
BOLGELER = [
    ("Anadolu",           36.0, 42.3,  25.9,  44.8,  60),
    ("Levant+Irak",       29.0, 37.3,  34.0,  48.6, 120),
    ("Nil vadisi+Mısır",  22.0, 31.8,  24.5,  34.9, 120),
    ("Rumeli/Balkan",     39.0, 46.5,  13.5,  29.9, 120),
    ("İtalya",            36.5, 47.1,   6.5,  18.6,  60),
    ("İber",              35.9, 43.9, -9.6,    3.4, 120),
    ("Batı/Orta Avrupa",  43.0, 55.5, -5.5,   24.0, 120),
    ("Britanya+İrlanda",  49.8, 61.0, -11.0,   2.0, 120),
    ("İskandinav",        55.0, 71.5,   4.0,  32.0, 300),
    ("Doğu Avrupa/Rus",   44.0, 62.0,  24.0,  60.0, 120),
    ("Kafkas",            38.5, 44.0,  39.0,  51.0, 120),
    ("İran",              25.0, 40.0,  44.0,  63.5, 120),
    ("Mâverâünnehir+Horasan", 32.0, 45.5, 55.0, 76.0, 120),
    ("Arabistan",         12.0, 32.0,  34.0,  60.0, 300),
    ("Kuzey Afrika kıyısı", 27.0, 37.5, -17.0, 24.5, 120),
    ("Sahra",             15.0, 27.0, -17.0,  34.0, 300),
    ("Batı Afrika+Sahel",  0.0, 15.0, -18.0,  16.0, 120),
    ("Doğu Afrika+Habeş", -12.0, 15.0, 29.0,  52.0, 120),
    ("Orta Afrika",      -12.0,  8.0,   8.0,  29.0, 300),
    ("Güney Afrika",     -35.0,-12.0,  11.0,  51.0, 300),
    ("Hindistan",          5.0, 36.0,  60.0,  92.0, 120),
    ("GD Asya kıta",       0.0, 28.5,  92.0, 110.0, 120),
    ("Çin",               18.0, 42.0, 100.0, 123.0, 120),
    ("Kore+Japonya",      30.0, 46.0, 124.0, 146.0, 120),
    ("Moğol/İç Asya",     36.0, 53.0,  73.0, 120.0, 300),
    ("Kazak bozkırı",     45.5, 56.0,  46.0,  87.0, 300),
    ("Sibirya",           50.0, 78.0,  56.0, 180.0, 300),
    ("Ada GD Asya",      -11.0, 20.0,  95.0, 142.0, 120),
    ("Avustralya+Okyanusya", -48.0, -9.0, 112.0, 180.0, 300),
    ("Mezoamerika",        7.0, 23.0,-118.0, -77.0, 120),
    ("Kuzey Amerika",     23.0, 72.0,-170.0, -52.0, 300),
    ("Güney Amerika",    -56.0, 13.0, -82.0, -34.0, 300),
]


def xyz(lat, lon):
    la, lo = np.radians(lat), np.radians(lon)
    return np.stack([np.cos(la) * np.cos(lo), np.cos(la) * np.sin(lo), np.sin(la)], -1)


def main():
    Y = girdi.yukle(sessiz=True)
    A = []
    for y in Y:
        kur = y.get("kur")
        if kur and kur > EPOK:
            continue
        fs = [p["f"] for k in ("s", "d", "v") for p in (y.get(k) or []) if p.get("f")]
        if fs and min(fs) > EPOK:
            continue
        A.append(y)
    B_ad = set()
    if "--tdv" in sys.argv:
        for r in json.load(io.open(sys.argv[sys.argv.index("--tdv") + 1], encoding="utf-8")):
            if r["varlik"] == "var-aday":
                B_ad.add(r["ad"])
    for y in Y:
        fs = [p["f"] for k in ("s", "d", "v") for p in (y.get(k) or []) if p.get("f")]
        if fs and min(fs) < EPOK:
            B_ad.add(y["ad"])
    B = [y for y in Y if y["ad"] in B_ad]
    print(f"evren {len(Y)} · A (1281 kesiti) {len(A)} · B (kanıtlı) {len(B)}")

    land = unary_union([shape(f["geometry"]) for f in
                        json.load(io.open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"),
                                          encoding="utf-8"))["features"]])
    ad = 0.5
    lats = np.arange(-60 + ad / 2, 85, ad)
    lons = np.arange(-180 + ad / 2, 180, ad)
    LO, LA = np.meshgrid(lons, lats)
    LO, LA = LO.ravel(), LA.ravel()
    m = contains_xy(land, LO, LA)
    LO, LA = LO[m], LA[m]
    print(f"kara hücresi (0.5°): {len(LO)}")
    H = xyz(LA, LO)

    def uzak(kume):
        t = cKDTree(xyz(np.array([y["lat"] for y in kume]), np.array([y["lon"] for y in kume])))
        d, _ = t.query(H)
        return 2 * R * np.arcsin(np.clip(d / 2, 0, 1))

    dA = uzak(A)
    dB = uzak(B) if B else None
    # bölge ata
    bolge = np.full(len(LO), -1)
    for i, (_, a, b, c, d, _) in enumerate(BOLGELER):
        s = (bolge < 0) & (LA >= a) & (LA <= b) & (LO >= c) & (LO <= d)
        bolge[s] = i
    # hücre alanı ağırlığı (cos lat)
    w = np.cos(np.radians(LA))
    sonuc = []
    print(f"{'bölge':24} {'eşik':>4} {'hücre':>6} {'A>eşik%':>8} {'A med':>6} {'A p90':>6} {'A nokta':>7}   {'B>eşik%':>8}")
    for i, (adb, a, b, c, d, esik) in enumerate(BOLGELER + [("(atanmamış)", 0, 0, 0, 0, 300)]):
        s = bolge == (i if i < len(BOLGELER) else -1)
        if not s.any():
            continue
        ws = w[s]
        a_as = float((ws * (dA[s] > esik)).sum() / ws.sum() * 100)
        b_as = float((ws * (dB[s] > esik)).sum() / ws.sum() * 100) if dB is not None else None
        nA = sum(1 for y in A if i < len(BOLGELER) and a <= y["lat"] <= b and c <= y["lon"] <= d)
        r = {"bolge": adb, "esik_km": esik, "hucre": int(s.sum()),
             "A_esik_ustu_yuzde": round(a_as, 1), "A_medyan_km": round(float(np.median(dA[s])), 0),
             "A_p90_km": round(float(np.percentile(dA[s], 90)), 0), "A_nokta_kutuda": nA,
             "B_esik_ustu_yuzde": round(b_as, 1) if b_as is not None else None}
        sonuc.append(r)
        print(f"{adb:24} {esik:>4} {r['hucre']:>6} {r['A_esik_ustu_yuzde']:>8} {r['A_medyan_km']:>6} "
              f"{r['A_p90_km']:>6} {nA:>7}   {r['B_esik_ustu_yuzde']}")
    top = float((w * (dA > 120)).sum() / w.sum() * 100)
    print(f"DÜNYA A: >120 km %{top:.1f} · >300 km %{float((w * (dA > 300)).sum() / w.sum() * 100):.1f}")
    if "--cik" in sys.argv:
        json.dump({"A": len(A), "B": len(B), "bolgeler": sonuc, "dunya_A_120": round(top, 1)},
                  io.open(sys.argv[sys.argv.index("--cik") + 1], "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
