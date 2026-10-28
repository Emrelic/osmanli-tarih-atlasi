# -*- coding: utf-8 -*-
"""ARAC-ENKLAV-SINIFLA-1028 — ARAC-ENKLAV-HARITA-1028 çıktısını kuralla ön-sınıflar ve birleştirir.

Girdi: ham aday json (dönem başına kopuk parça). Çıktı: aynı parçanın ardışık dönemleri
tek ZİNCİRE birleşir (devlet + konum <= 1.5° + zaman bitişik), zincire ön sınıf verilir:

  DENIZ-ADA     düz hat denizden geçer (ada/denizaşırı; haritada kopuk çizilmesi doğal)
  KARA-ENKLAV   çevre halkasının >= %85'i tek başka devlet (başka devletin içinde)
  KARA-KORIDOR  düz hattın >= %60'ı başka devletlerin toprağı (aradaki toprak başka sahipli)
  KARA-BOS      düz hattın < %40'ı sahipli, kalanı BOŞ (emilmemiş/BOSLUK/motor şüphesi)
  KARA-KARISIK  ötesi

Bu ön sınıftır; GERÇEK / MOTOR-HATASI / VERİ-EKSİĞİ / KAYNAKSIZ hükmü kaynakla verilir.
Kullanım: py denetim/ARAC-ENKLAV-SINIFLA-1028.py <ham.json> <zincir.json>
"""
import io, json, sys
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8")


def on_sinif(a):
    if a["tur"] == "DENIZ":
        return "DENIZ-ADA"
    cev = a.get("cevre") or {}
    if cev and max(cev.values()) >= 85:
        return "KARA-ENKLAV"
    if a["koridor_dolu_pct"] >= 60:
        return "KARA-KORIDOR"
    if a["koridor_dolu_pct"] < 40:
        return "KARA-BOS"
    return "KARA-KARISIK"


def main():
    ham = json.load(io.open(sys.argv[1], encoding="utf-8"))
    A = ham["aday"]
    for a in A:
        a["sinif"] = on_sinif(a)
    A.sort(key=lambda a: (a["devlet"], a["sinif"], a["fg"]))
    zincirler = []
    for a in A:
        for z in zincirler:
            if (z["devlet"] == a["devlet"] and z["sinif"] == a["sinif"]
                    and abs(z["lat"] - a["lat"]) <= 1.5 and abs(z["lon"] - a["lon"]) <= 1.5
                    and a["fg"] <= z["tg"] + 1 and a["tg"] >= z["fg"] - 1):
                if a["tg"] >= z["tg"]:
                    z["t"] = a["t"]
                if a["fg"] <= z["fg"]:
                    z["f"] = a["f"]
                z["fg"] = min(z["fg"], a["fg"])
                z["tg"] = max(z["tg"], a["tg"])
                z["n"] += 1
                z["alan_km2"] = max(z["alan_km2"], a["alan_km2"])
                z["uzak_km"] = min(z["uzak_km"], a["uzak_km"])
                for k, v in (a.get("koridor") or {}).items():
                    z["koridor"][k] = max(z["koridor"].get(k, 0), v)
                for k, v in (a.get("cevre") or {}).items():
                    z["cevre"][k] = max(z["cevre"].get(k, 0), v)
                z["kor_pct_min"] = min(z["kor_pct_min"], a["koridor_dolu_pct"])
                z["kor_pct_max"] = max(z["kor_pct_max"], a["koridor_dolu_pct"])
                break
        else:
            b = dict(a)
            b["n"] = 1
            b["koridor"] = dict(a.get("koridor") or {})
            b["cevre"] = dict(a.get("cevre") or {})
            b["kor_pct_min"] = b["kor_pct_max"] = a["koridor_dolu_pct"]
            zincirler.append(b)
    sayim = Counter(z["sinif"] for z in zincirler)
    uz = Counter()
    for z in zincirler:
        sure = (z["tg"] - z["fg"]) / 365.2425
        z["sure_yil"] = round(sure, 1)
        uz["sure>=1y" if sure >= 1 else "sure<1y"] += 1
    io.open(sys.argv[2], "w", encoding="utf-8").write(json.dumps(
        {"zincir_sayisi": len(zincirler), "sinif_sayimi": dict(sayim), "sure": dict(uz),
         "ham_aday": len(A), "kirinti_say": ham.get("kirinti_say"), "zincirler": zincirler},
        ensure_ascii=False, indent=0))
    print("ham aday-dönem:", len(A), " zincir:", len(zincirler))
    print("sınıf:", dict(sayim))
    print("süre:", dict(uz))


if __name__ == "__main__":
    main()
