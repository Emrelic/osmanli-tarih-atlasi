# -*- coding: utf-8 -*-
"""
ARAC-SINIRLI-VORONOI-0911.py
Gorev: SINIRLI VORONOI (11 Eylul 2026) — C'nin (2) YER DUZEYI icin
"sinirli/saf Voronoi" onerisini Kasr-i Sirin (1639) tohumlariyla sina.

HAFIF TASARIM (motor calisirken, bellek dar): yalnizca 8 tohum nokta +
bir bolgesel kutudaki gercek yerlesimler (girdi.yukle(), ~3800 nokta,
onceki cagrilarda sorunsuz calisti) okunuyor. KARA maskesi/petek
geometrisi YUKLENMIYOR — bu script uret_petek.py'nin agir kismini
KULLANMAZ.

data/ ve arac/*.py DONUK: yalniz OKUNUYOR (girdi.py import), hicbir
satir YAZILMIYOR, hicbir kosu ACILMIYOR.
"""
import sys, os
sys.path.insert(0, r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\arac")
import girdi
import math
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from scipy.spatial import Voronoi, voronoi_plot_2d

REPO = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
OUT_PNG = os.path.join(REPO, "denetim", "SINIRLI-VORONOI-KASRISIRIN-0911.png")
OUT_JSON = os.path.join(REPO, "denetim", "OLCUM-SINIRLI-VORONOI-0911.json")

# Kasr-i Sirin (1639) BELGENIN ADIYLA ANDIGI noktalar (① onceki gorevde
# dogrulandi: Bagdat/Mezopotamya + bati Gurcistan/Ermenistan Osmanli'da,
# dogu Ermenistan/Gurcistan/Dagistan/Sirvan Safevi'de). Nokta-duzeyinde
# GERCEKTEN adi gecen: Bagdat. Digerleri (Van, Kars, Sehrizor, Musul,
# Revan, Tebriz) BOLGE atamalarini TEMSIL EDEN COGRAFI CAPALAR olarak
# eklendi — bu bir VARSAYIMDIR, belgenin kendisi nokta olarak ANMADI,
# acikca damgalaniyor.
TOHUMLAR = [
    ("Bagdat", 33.340, 44.361, "osmanli", "BELGEDE ADIYLA GECIYOR"),
    ("Basra", 30.508, 47.783, "osmanli", "Mezopotamya bolgesi capasi (VARSAYIM)"),
    ("Sehrizor", 35.560, 45.430, "osmanli", "Mezopotamya/Kürdistan capasi (VARSAYIM)"),
    ("Musul", 36.340, 43.130, "osmanli", "Mezopotamya capasi (VARSAYIM)"),
    ("Van", 38.502, 43.393, "osmanli", "bati Ermenistan capasi (VARSAYIM)"),
    ("Kars", 40.602, 43.095, "osmanli", "bati Gurcistan/Ermenistan capasi (VARSAYIM)"),
    ("Revan", 40.183, 44.515, "safevi", "dogu Ermenistan capasi (VARSAYIM)"),
    ("Tebriz", 38.080, 46.292, "safevi", "Safevi cekirdek capasi (VARSAYIM)"),
]

KUTU = (33.0, 41.0, 41.5, 48.0)  # lat_min, lat_max, lon_min, lon_max
REF_TARIH = "1639-06-15"  # Kasr-i Sirin'den (17 Mayis 1639) hemen sonra


def gun_no(s):
    from datetime import date
    y, m, d = s.split("-")
    return date(int(y), int(m), int(d)).toordinal()


def sahip_bul(yerlesim, tarih_g):
    for kat, ad in (("d", "osmanli"), ("v", "osmanli")):
        for p in (yerlesim.get(kat) or []):
            if p.get("f") and p.get("t"):
                if gun_no(p["f"]) <= tarih_g < gun_no(p["t"]):
                    return "osmanli"
    for p in (yerlesim.get("s") or []):
        if p.get("f") and p.get("t") and p.get("d"):
            if gun_no(p["f"]) <= tarih_g < gun_no(p["t"]):
                return p["d"]
    return None


def haversine(a, b):
    lat1, lon1 = a
    lat2, lon2 = b
    R = 6371.0
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dl = math.radians(lon2 - lon1)
    x = math.sin(dphi / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(x))


def main():
    print("Yerlesim verisi okunuyor (girdi.yukle, agir KARA maskesi YOK)...")
    kayitlar = girdi.yukle(sessiz=True)
    lat0, lat1, lon0, lon1 = KUTU
    bolge = [y for y in kayitlar if y.get("lat") is not None and y.get("lon") is not None
             and lat0 <= y["lat"] <= lat1 and lon0 <= y["lon"] <= lon1]
    print(f"kutu icindeki yerlesim: {len(bolge)}")

    ref_g = gun_no(REF_TARIH)
    sonuc = []
    for y in bolge:
        gercek = sahip_bul(y, ref_g)
        if gercek is None:
            continue
        # en yakin BELGE tohumu (restricted-Voronoi tahmini)
        mesafeler = [(haversine((y["lat"], y["lon"]), (t[1], t[2])), t[0], t[3]) for t in TOHUMLAR]
        mesafeler.sort()
        en_yakin_tohum, tahmin_taraf = mesafeler[0][1], mesafeler[0][2]
        # gercek tarafi kabaca osmanli/degil olarak sinifla (safevi vs osmanli
        # karsilastirmasi icin; baska sahiplerse ayri isaretlenir)
        if gercek == "osmanli":
            gercek_taraf = "osmanli"
        elif gercek == "safevi":
            gercek_taraf = "safevi"
        else:
            gercek_taraf = f"DIGER({gercek})"
        uyum = (gercek_taraf == tahmin_taraf)
        sonuc.append({
            "ad": y["ad"], "lat": y["lat"], "lon": y["lon"],
            "gercek_sahip": gercek, "gercek_taraf": gercek_taraf,
            "tahmin_taraf": tahmin_taraf, "en_yakin_tohum": en_yakin_tohum,
            "tohum_mesafe_km": round(mesafeler[0][0], 1),
            "uyum": uyum,
        })

    karsilastirilan = [s for s in sonuc if s["gercek_taraf"] in ("osmanli", "safevi")]
    uyumlu = [s for s in karsilastirilan if s["uyum"]]
    print(f"\nkarsilastirilabilir (osmanli/safevi) yerlesim: {len(karsilastirilan)}")
    print(f"restricted-Voronoi tahmini GERCEK sahiplikle UYUSAN: {len(uyumlu)}  "
          f"({100.0*len(uyumlu)/max(1,len(karsilastirilan)):.1f}%)")

    uyumsuz = [s for s in karsilastirilan if not s["uyum"]]
    print(f"\nUYUSMAYAN {len(uyumsuz)} kayit:")
    for s in uyumsuz:
        print(f"  {s['ad']:20s} gercek={s['gercek_taraf']:10s} tahmin={s['tahmin_taraf']:10s} "
              f"en_yakin_tohum={s['en_yakin_tohum']} ({s['tohum_mesafe_km']} km)")

    diger_sahipler = [s for s in sonuc if s["gercek_taraf"].startswith("DIGER")]
    print(f"\nNe osmanli NE safevi (ucuncu sahip) kayit sayisi: {len(diger_sahipler)}")

    import json
    with open(OUT_JSON, "w", encoding="utf-8") as f:
        json.dump({
            "tohumlar": [{"ad": t[0], "lat": t[1], "lon": t[2], "taraf": t[3], "not": t[4]} for t in TOHUMLAR],
            "kutu": KUTU, "ref_tarih": REF_TARIH,
            "toplam_bolgedeki": len(bolge),
            "karsilastirilabilir": len(karsilastirilan),
            "uyumlu": len(uyumlu),
            "uyum_orani": round(100.0 * len(uyumlu) / max(1, len(karsilastirilan)), 1),
            "uyumsuzlar": uyumsuz,
            "diger_sahip_sayisi": len(diger_sahipler),
            "tum_kayitlar": sonuc,
        }, f, ensure_ascii=False, indent=1)

    # --- PNG: tohum Voronoi + gercek noktalar ---
    pts = [(t[2], t[1]) for t in TOHUMLAR]  # (lon, lat) sirasi cizim icin
    vor = Voronoi(pts)
    fig, ax = plt.subplots(figsize=(8, 7))
    voronoi_plot_2d(vor, ax=ax, show_vertices=False, line_colors="black",
                     line_width=1.5, point_size=0)
    renk = {"osmanli": "#8e0b22", "safevi": "#2255aa"}
    for ad, lat, lon, taraf, _ in TOHUMLAR:
        ax.scatter([lon], [lat], c=renk[taraf], s=140, marker="*", edgecolors="black", zorder=5)
        ax.annotate(ad, (lon, lat), textcoords="offset points", xytext=(5, 5), fontsize=9, weight="bold")
    for s in karsilastirilan:
        c = renk.get(s["gercek_taraf"], "gray")
        marker = "o" if s["uyum"] else "x"
        ax.scatter([s["lon"]], [s["lat"]], c=c, s=35, marker=marker,
                   edgecolors=("none" if s["uyum"] else "yellow"), linewidths=1.5, alpha=0.85, zorder=4)
    for s in diger_sahipler:
        ax.scatter([s["lon"]], [s["lat"]], c="gray", s=25, marker="s", alpha=0.6, zorder=3)
    ax.set_xlim(lon0, lon1)
    ax.set_ylim(lat0, lat1)
    ax.set_title("Sınırlı Voronoi (Kasr-ı Şirin tohumları) vs gerçek egemenlik (1639-06)\n"
                 "★=belge tohumu · ●=uyumlu · ✕(sarı kenar)=uyumsuz · ▪gri=3.taraf sahip")
    ax.set_xlabel("boylam")
    ax.set_ylabel("enlem")
    plt.tight_layout()
    plt.savefig(OUT_PNG, dpi=130)
    print(f"\nPNG yazildi: {OUT_PNG}")
    print(f"JSON yazildi: {OUT_JSON}")


if __name__ == "__main__":
    main()
