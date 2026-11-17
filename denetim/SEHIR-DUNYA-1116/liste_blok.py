# -*- coding: utf-8 -*-
"""F1 LİSTE (genel) — 1900 koordinatlı listeden modern ülkeye göre blok süzer.
Kullanım: py denetim/SEHIR-DUNYA-1116/liste_blok.py <blok-klasör> <ülke1,ülke2,...>
Çıktı: denetim/SEHIR-DUNYA-1116/<blok-klasör>/LISTE.tsv  (kronolojiden ekleme AYRI adım: F1b)
GeoNames koordinatı yalnız koordinat bulmak içindir; atlas verisinde KAYNAK SAYILMAZ."""
import csv, io, os, sys, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
G = os.path.join(KOK, "denetim", "SEHIR-1900-KOORDINAT-1013", "LISTE-KOORD.tsv")
klasor, ulkeler = sys.argv[1], [u.strip() for u in sys.argv[2].split(",")]
rows = list(csv.DictReader(open(G, encoding="utf-8"), delimiter="\t"))
mevcut = collections.Counter(r["modern_ulke"] for r in rows)
sec = [r for r in rows if r["modern_ulke"].strip() in ulkeler]
bulunmayan = [u for u in ulkeler if u not in mevcut]
cols = ["blok", "kat", "ad_1900", "ad_modern", "ulke_1900", "modern_ulke", "lat", "lon", "koord_yolu",
        "atlas_en_yakin", "atlas_km", "eslesme", "kaynak_liste", "dogrulama", "kronoloji_madde", "adlar", "not_", "giris"]
out = os.path.join(KOK, "denetim", "SEHIR-DUNYA-1116", klasor)
os.makedirs(out, exist_ok=True)
with open(os.path.join(out, "LISTE.tsv"), "w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=cols, delimiter="\t"); w.writeheader()
    for r in sec:
        w.writerow(dict(blok=klasor, kat=r["kat"], ad_1900=r["ad_1900"], ad_modern=r["ad_modern"], ulke_1900=r["ulke_1900"],
                        modern_ulke=r["modern_ulke"], lat=r["lat"], lon=r["lon"], koord_yolu=r["koord_yolu"],
                        atlas_en_yakin=r["atlas_en_yakin"], atlas_km=r["atlas_km"], eslesme=r["eslesme"],
                        kaynak_liste=r["kaynak"], dogrulama=r["dogrulama"], kronoloji_madde="", adlar="", not_=r["not"], giris="1900-liste"))
print(klasor, "şehir:", len(sec), "ülke dağılımı:", dict(collections.Counter(r["modern_ulke"] for r in sec)))
print("kat:", dict(collections.Counter(r["kat"] for r in sec)), "koordinat yok:", sum(1 for r in sec if not r["lat"]),
      "atlasta-yok:", sum(1 for r in sec if r["eslesme"] == "atlasta-yok"))
print("listede olmayan ülke adları:", bulunmayan)
