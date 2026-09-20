# -*- coding: utf-8 -*-
"""KIZILDENIZ-0073 ölçüm aleti — H-0009 (Masavva · Dahlak · Zeyla + boşluğun sebebi)

Ölçtüğü şey, YORUM DEĞİL SAYI:
  (1) Emre'nin üç görselinin kutusundaki yerleşimler (motorun okuduğu evren)
  (2) her birinin 1822-10-24'teki sahibi: s: > d: (OSMANLI) > v: (tâbi) > YOK
  (3) SAHİPSİZ çıkanlar için: hiç dönemi var mı (nokta var, kayıt yok)
      yoksa hiç kaydı yok mu — ve o noktanın bütün pencereleri
  (4) boşluk sınıfı: (a) veri boşluğu = nokta VAR, o gün sahipsiz
                     (b) nokta boşluğu = kutuda hiç nokta yok
  (5) Masavva / Dahlak / Zeyla adlarının tam dökümü (nerede, hangi dosyada)

Çıktı: denetim/OLCUM-KIZILDENIZ-0073.json  (ekrana yalnız özet)
"""
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8")
import girdi  # noqa: E402

GUN = "1822-10-24"

KUTULAR = {
    "K1_masavva_dahlak": dict(lat0=13.80, lat1=17.75, lon0=37.95, lon1=42.14),
    "K2_afar_bosluk":    dict(lat0=12.20, lat1=14.94, lon0=40.30, lon1=41.98),
    "K3_zeyla":          dict(lat0=9.77,  lat1=12.05, lon0=42.11, lon1=44.55),
}

ARANAN_ADLAR = ("masavva", "massawa", "mitsiwa", "dahlak", "dehlek",
                "zeyla", "zeila", "sevakin", "suakin", "arkiko", "hirgigo")


def kutuda(y, k):
    return (k["lat0"] <= y["lat"] <= k["lat1"]
            and k["lon0"] <= y["lon"] <= k["lon1"])


def gunde(p, g):
    f = p.get("f") or "0000-01-01"
    t = p.get("t") or "9999-12-31"
    return f <= g <= t


def sahip(y, g):
    for p in (y.get("s") or []):
        if gunde(p, g):
            return (p.get("d") or "?"), "s"
    for p in (y.get("d") or []):
        if gunde(p, g):
            return "OSMANLI", "d"
    for p in (y.get("v") or []):
        if gunde(p, g):
            return "tabi:" + (p.get("kid") or "?"), "v"
    return None, None


def pencereler(y):
    out = []
    for alan in ("s", "d", "v", "isg"):
        for p in (y.get(alan) or []):
            out.append({
                "alan": alan,
                "kimlik": p.get("d") or p.get("kid") or p.get("isg") or "OSMANLI",
                "f": p.get("f"), "t": p.get("t"),
            })
    out.sort(key=lambda r: (r["f"] or "0000-01-01"))
    return out


def norm(s):
    return (s or "").lower().replace("î", "i").replace("â", "a").replace("'", "")


def main():
    TUM = girdi.yukle(sessiz=True)
    sonuc = {"gun": GUN, "evren_nokta": len(TUM), "kutular": {}, "ad_taramasi": []}

    for ad, k in KUTULAR.items():
        icinde = [y for y in TUM if kutuda(y, k)]
        kayit = []
        for y in icinde:
            kim, alan = sahip(y, GUN)
            kayit.append({
                "ad": y.get("ad"),
                "lat": round(y["lat"], 4), "lon": round(y["lon"], 4),
                "sahip": kim, "alan": alan,
                "pencere_sayisi": len(pencereler(y)),
                "pencereler": pencereler(y),
            })
        kayit.sort(key=lambda r: (r["sahip"] is not None, r["ad"] or ""))
        sahipsiz = [r for r in kayit if r["sahip"] is None]
        hicpencere = [r for r in sahipsiz if r["pencere_sayisi"] == 0]
        sonuc["kutular"][ad] = {
            "kutu": k,
            "nokta_sayisi": len(icinde),
            "sahipsiz_sayisi": len(sahipsiz),
            "hic_penceresi_yok": len(hicpencere),
            "bosluk_sinifi": ("b_nokta_boslugu" if len(icinde) == 0
                              else ("a_veri_boslugu" if sahipsiz else "bosluk_yok")),
            "kayitlar": kayit,
        }

    for y in TUM:
        n = norm(y.get("ad"))
        if any(a in n for a in ARANAN_ADLAR):
            kim, alan = sahip(y, GUN)
            sonuc["ad_taramasi"].append({
                "ad": y.get("ad"),
                "lat": round(y["lat"], 4), "lon": round(y["lon"], 4),
                "sahip": kim, "alan": alan,
                "pencereler": pencereler(y),
            })

    yol = os.path.join(KOK, "denetim", "OLCUM-KIZILDENIZ-0073.json")
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(sonuc, f, ensure_ascii=False, indent=1)

    print("evren:", len(TUM), "nokta ·", GUN)
    for ad, d in sonuc["kutular"].items():
        print(" %-22s nokta=%3d  sahipsiz=%3d  hic-pencere=%3d  sinif=%s"
              % (ad, d["nokta_sayisi"], d["sahipsiz_sayisi"],
                 d["hic_penceresi_yok"], d["bosluk_sinifi"]))
    print(" ad taramasi:", len(sonuc["ad_taramasi"]), "eslesme")
    for r in sonuc["ad_taramasi"]:
        print("   %-24s %7.3fN %7.3fE  sahip=%s (%s)"
              % (r["ad"], r["lat"], r["lon"], r["sahip"], r["alan"]))
    print("->", yol)


if __name__ == "__main__":
    main()
