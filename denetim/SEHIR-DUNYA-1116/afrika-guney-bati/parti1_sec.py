# -*- coding: utf-8 -*-
"""F2 parti 1 seçimi: 40 şehir -> parti1/bati_gorev.tsv (20) ve parti1/guney_gorev.tsv (20, güney+orta)."""
import csv, io, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = os.path.dirname(os.path.abspath(__file__))
BATI = ["Monrovia", "Agadez", "Kano", "Sokoto", "Gao", "Segu", "Hamdullahi", "Niani", "Awdaghust", "Kumbî Sâlih",
        "Tombouctou", "Djenné", "Oyo-İle", "Abomey", "Kumasi", "Ouagadougou", "Yendi", "Kong", "Timbo", "Bilma"]
GUNEY = ["Bloemfontein", "Pretoria", "Umgungundlovu", "Mapungubwe", "Büyük Zimbabve", "Khami", "Danangombe",
         "Cape Town", "Windhoek", "Lüderitz", "Maseru", "Salisbury", "Boma", "Loango", "Soyo",
         "Birni N'gazargamu", "Mao (Kanem)", "Yola", "Abeşe", "Kamerun (Duala)"]
rows = list(csv.DictReader(open(os.path.join(D, "LISTE.tsv"), encoding="utf-8"), delimiter="\t"))
def bul(ad):
    for r in rows:
        if r["ad_1900"] == ad:
            return r
    for r in rows:
        if r["giris"] == "kronoloji" and ("yer_id: " + ad) in r["not_"]:
            return r
    for r in rows:
        if r["ad_1900"] == ad.split(" (")[0] or r["ad_modern"] == ad.split(" (")[0]:
            return r
    for r in rows:
        if r["giris"] == "kronoloji" and ("yer_id: " + ad.split(" (")[0]) in r["not_"]:
            return r
    return None
os.makedirs(os.path.join(D, "parti1"), exist_ok=True)
for ad_dosya, liste in (("bati", BATI), ("guney", GUNEY)):
    cikti = []
    for ad in liste:
        r = bul(ad)
        if not r:
            print("YOK", ad); continue
        cikti.append(dict(sira=len(cikti) + 1, aranan=ad, ad_1900=r["ad_1900"], ad_modern=r["ad_modern"], ulke=r["modern_ulke"] or r["ulke_1900"],
                          kat=r["kat"], lat=r["lat"], lon=r["lon"], atlas_en_yakin=r["atlas_en_yakin"], atlas_km=r["atlas_km"],
                          kronoloji_madde=r["kronoloji_madde"], not_=r["not_"][:80]))
    with open(os.path.join(D, "parti1", ad_dosya + "_gorev.tsv"), "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(cikti[0].keys()), delimiter="\t"); w.writeheader(); w.writerows(cikti)
    print(ad_dosya, len(cikti))
    for c in cikti: print("  ", c["aranan"], "|", c["ad_1900"], "|", c["lat"], c["lon"], "|", c["atlas_en_yakin"], c["atlas_km"])
