# -*- coding: utf-8 -*-
"""Hint F2 parti 1 seçimi: 40 şehir -> parti1/kuzey_gorev.tsv ve parti1/guney_gorev.tsv.
Koordinat/atlas_ad kaynağı: kronolojide anılan yer_id'ler (atlas yerleşim adı + lat/lon; ölçüm LAB 16 Kasım 2026).
Not: ad çakışması olan yer_id'lerin (Haydarâbâd Dekken ↔ Sind) koordinatı elle düzeltildi; ajan yeniden doğrulamalı."""
import csv, io, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = os.path.dirname(os.path.abspath(__file__))
KUZEY = ["Delhi", "Lahor", "Multan", "Agra", "Kannauc", "Gvalyar (Gwalior)", "Ecmîr (Ajmer)", "Tatta (Thatta)", "Gaur (Lakhnautî)",
         "Murşidâbâd", "Dakka (Dhaka)", "Kalküta", "Katmandu", "Srinagar (Keşmir)", "Leknev (Lucknow)", "Amritsar", "Patna",
         "Bahâvelpûr", "Siyâlkot", "Bhopâl"]
GUNEY = ["Çitor (Chittorgarh)", "Udeypûr (Udaipur)", "Codhpûr (Jodhpur)", "Caypûr (Jaipur)", "Ahmedâbâd", "Bîcâpur (Bijapur)", "Golkonda",
         "Haydarâbâd (Dekken)", "Bîdar", "Evrengâbâd", "Pûne (Poona)", "Seringapatam (Şrirangapatnam)", "Vijayanagara (Hampi)", "Madurai",
         "Trivandrum (Thiruvananthapuram)", "Kolam (Quilon)", "Kandy", "Kotte (Sri Jayawardenapura Kotte)", "Malé", "Baroda (Vadodara)"]
DUZELT = {"Haydarâbâd (Dekken)": ("17.385", "78.4867")}
src = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..")
kaynak = {}
yol = os.path.join(D, "yer_id_kronoloji.tsv")
for r in csv.DictReader(open(yol, encoding="utf-8"), delimiter="\t"):
    kaynak.setdefault(r["yer_id"], r)
os.makedirs(os.path.join(D, "parti1"), exist_ok=True)
for ad_dosya, liste in (("kuzey", KUZEY), ("guney", GUNEY)):
    cikti = []
    for ad in liste:
        r = kaynak.get(ad)
        if not r:
            print("YOK", ad); continue
        lat, lon = DUZELT.get(ad, (r["lat"], r["lon"]))
        cikti.append(dict(sira=len(cikti) + 1, aranan=ad, atlas_ad=r["atlas_ad"], lat=lat, lon=lon, kronoloji_madde=r["madde"],
                          kronoloji_yil=r["ilk_yil"] + "-" + r["son_yil"], dikkat="koordinat elle düzeltildi: Hayderabad Dekken" if ad in DUZELT else ""))
    with open(os.path.join(D, "parti1", ad_dosya + "_gorev.tsv"), "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(cikti[0].keys()), delimiter="\t"); w.writeheader(); w.writerows(cikti)
    print(ad_dosya, len(cikti))
