# -*- coding: utf-8 -*-
"""HARITA-DURUM-0074 — bos toprak SINIFLANDIRMASI (H-0007 · H-0014 · H-0015).
Uc sinif ayrilir:
  A) NOKTA YOKLUGU     — kutuda hic yerlesim yok
  B) KAYIT YOKLUGU     — nokta var, o gun gecerli s:/d:/v: donemi yok
  C) UFUK/UZAKLIK      — nokta var+sahipli ama en yakin nokta cok uzak (petek
                         erisemiyor; motor kara maskesi ~200 km tavani)
Cikti: denetim/HARITA-DURUM-0074-SINIF.json
"""
import sys, os, json, io, math
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = girdi.yukle(sessiz=True)

def pad(t):
    if not t: return ""
    p = str(t).split("-")
    return "%04d-%02d-%02d" % (int(p[0]), int(p[1]) if len(p) > 1 else 1,
                               int(p[2]) if len(p) > 2 else 1)

def var_mi(y, g):
    """Nokta o gun VAR MI (kur:/bit:)."""
    kur, bit = pad(y.get("kur") or ""), pad(y.get("bit") or "")
    if kur and kur > g: return False
    if bit and bit <= g: return False
    return True

def sahipli(y, g):
    for kat in ("s", "d", "v"):
        for p in y.get(kat) or []:
            f, t = pad(p.get("f", "")), pad(p.get("t", ""))
            if f and f > g: continue
            if t and t <= g: continue
            return True
    return False

def km(a, b, c, d):
    return girdi.km(a, b, c, d)

KUTULAR = {
    "H-0007 Bohemya":  (49.84, 51.10, 15.73, 18.09, "1827-07-06"),
    "H-0014 Poti":     (41.82, 42.64, 41.35, 42.70, "1829-09-14"),
    "H-0015 EflakBogdan": (43.14, 48.21, 22.91, 29.42, "1830-05-07"),
}

SON = {}
for ad, (la0, la1, lo0, lo1, gun) in KUTULAR.items():
    g = pad(gun)
    # o gun VAR OLAN butun noktalar (dunya) — en yakin komsu hesabi icin
    canli = [y for y in Y if y.get("lat") is not None and var_mi(y, g)]
    canli_sahipli = [y for y in canli if sahipli(y, g)]
    ic = [y for y in canli if la0 <= y["lat"] <= la1 and lo0 <= y["lon"] <= lo1]
    ic_sahipli = [y for y in ic if sahipli(y, g)]
    ic_sahipsiz = [y for y in ic if not sahipli(y, g)]

    # 0,25 derecelik izgarayla kutuyu tara: her hucre icin en yakin SAHIPLI nokta
    adim = 0.25
    hucre, uzak = [], []
    la = la0
    while la <= la1:
        lo = lo0
        while lo <= lo1:
            en = min(canli_sahipli, key=lambda y: km(la, lo, y["lat"], y["lon"]))
            d = km(la, lo, en["lat"], en["lon"])
            hucre.append(d)
            if d > 200: uzak.append({"lat": round(la, 2), "lon": round(lo, 2),
                                     "en_yakin": en["ad"], "km": round(d, 1)})
            lo += adim
        la += adim
    hucre.sort()
    SON[ad] = {
        "gun": gun, "kutu": [la0, la1, lo0, lo1],
        "kutuda_o_gun_var_olan_nokta": len(ic),
        "bunlardan_sahipli": len(ic_sahipli),
        "bunlardan_SAHIPSIZ": len(ic_sahipsiz),
        "sahipsiz_adlar": [{"ad": y["ad"], "lat": y["lat"], "lon": y["lon"],
                            "dosya": y.get("_kaynak")} for y in ic_sahipsiz][:40],
        "izgara_hucre": len(hucre),
        "en_yakin_sahipli_nokta_km": {
            "ortanca": round(hucre[len(hucre)//2], 1),
            "en_buyuk": round(hucre[-1], 1),
            "200km_ustu_hucre": len(uzak),
            "200km_ustu_oran_yuzde": round(100.0*len(uzak)/len(hucre), 1),
        },
        "200km_ustu_ornek": uzak[:10],
        "SINIF": ("A-NOKTA-YOKLUGU" if len(ic) == 0 else
                  ("B-KAYIT-YOKLUGU" if len(ic_sahipsiz) > len(ic_sahipli) else
                   ("C-UZAKLIK/UFUK" if len(uzak) > 0 else "D-BOS-DEGIL"))),
    }

yol = os.path.join(KOK, "denetim", "HARITA-DURUM-0074-SINIF.json")
io.open(yol, "w", encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
for ad, v in SON.items():
    print(ad, "|", v["SINIF"], "| nokta:", v["kutuda_o_gun_var_olan_nokta"],
          "sahipli:", v["bunlardan_sahipli"], "sahipsiz:", v["bunlardan_SAHIPSIZ"],
          "| en yakin sahipli km ortanca:", v["en_yakin_sahipli_nokta_km"]["ortanca"],
          "azami:", v["en_yakin_sahipli_nokta_km"]["en_buyuk"],
          "| >200km hucre %:", v["en_yakin_sahipli_nokta_km"]["200km_ustu_oran_yuzde"])
print("yazildi:", yol)
