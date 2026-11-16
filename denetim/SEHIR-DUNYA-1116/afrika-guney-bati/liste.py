# -*- coding: utf-8 -*-
"""F1 LİSTE — Dünya Şehir Kronolojisi, blok: Güney + Batı + Orta Afrika (Sahra altı), 16 Kasım 2026.
Girdi : denetim/SEHIR-1900-KOORDINAT-1013/LISTE-KOORD.tsv (1900 şehir listesi, GeoNames koordinatlı)
        + kronolojide adı geçen yer_id'ler (bolge ∈ orta/guney/bati-afrika; ölçüm: LAB, 16 Kasım 2026)
Çıktı : LISTE.tsv (aynı klasör). Veri DEĞİŞMEZ. Adlar/olaylar F2'de doldurulur.
GeoNames koordinatı yalnız koordinat bulmak içindir; atlas verisinde KAYNAK SAYILMAZ (CLAUDE.md)."""
import csv, math, os, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
G = os.path.join(KOK, "denetim", "SEHIR-1900-KOORDINAT-1013", "LISTE-KOORD.tsv")
BATI = {"Mali", "Gine", "Fildişi Sahili", "Senegal", "Benin", "Burkina Faso", "Sierra Leone", "Togo",
        "Liberya", "Gana", "Nijerya", "Gambiya", "Gine-Bissau", "Yeşil Burun", "Moritanya", "Nijer",
        "St Helena (BK)"}
ORTA = {"Kongo DC", "Angola", "Kamerun", "Gabon", "Ekvator Ginesi", "São Tomé ve Príncipe", "Çad",
        "Orta Afrika Cumhuriyeti", "Kongo"}
GUNEY = {"Güney Afrika", "Zimbabve", "Lesotho", "Malavi", "Mozambik", "Zambiya", "Botsvana", "Namibya",
         "Esvatini"}
BLOK = {}
for u in BATI: BLOK[u] = "bati-afrika"
for u in ORTA: BLOK[u] = "orta-afrika"
for u in GUNEY: BLOK[u] = "guney-afrika"
# kronolojiden gelenler: Afrika dışı ya da bu bloğa girmeyenler elenir
ELE = {"Londra", "Paris", "Dodoma", "Zevîle (Zawila)", "Valvis Körfezi"}  # Walvis Bay 1994 olayı yer adı, şehir kaydı F2'de

def km(a, b, c, d):
    p = math.pi / 180
    x = math.sin((c - a) * p / 2) ** 2 + math.cos(a * p) * math.cos(c * p) * math.sin((d - b) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(x))

rows = []
with open(G, encoding="utf-8") as f:
    for r in csv.DictReader(f, delimiter="\t"):
        b = BLOK.get(r["modern_ulke"].strip())
        if not b:
            continue
        rows.append(dict(blok=b, kat=r["kat"], ad_1900=r["ad_1900"], ad_modern=r["ad_modern"],
                         ulke_1900=r["ulke_1900"], modern_ulke=r["modern_ulke"], lat=r["lat"], lon=r["lon"],
                         koord_yolu=r["koord_yolu"], atlas_en_yakin=r["atlas_en_yakin"], atlas_km=r["atlas_km"],
                         eslesme=r["eslesme"], kaynak_liste=r["kaynak"], dogrulama=r["dogrulama"],
                         kronoloji_madde="", adlar="", not_=r["not"], giris="1900-liste"))
n1900 = len(rows)
# kronolojiden ek
Y = os.path.join(os.path.dirname(__file__), "yer_id_kronoloji.tsv")
ek = 0
with open(Y, encoding="utf-8") as f:
    for r in csv.DictReader(f, delimiter="\t"):
        if r["yer_id"] in ELE or not r["lat"]:
            continue
        lat, lon = float(r["lat"]), float(r["lon"])
        yakin = None
        for x in rows:
            if x["lat"] and km(lat, lon, float(x["lat"]), float(x["lon"])) <= 3:
                yakin = x; break
        if yakin:
            yakin["kronoloji_madde"] = r["madde"]
            continue
        rows.append(dict(blok=r["bolge"], kat="", ad_1900="", ad_modern="", ulke_1900="", modern_ulke="",
                         lat=r["lat"], lon=r["lon"], koord_yolu="atlas-yerlesim", atlas_en_yakin=r["atlas_ad"],
                         atlas_km="0", eslesme="atlasta", kaynak_liste="", dogrulama="",
                         kronoloji_madde=r["madde"], adlar="", not_="kronolojide yer_id: %s (%s-%s)" % (r["yer_id"], r["ilk_yil"], r["son_yil"]),
                         giris="kronoloji"))
        ek += 1
cols = ["blok", "kat", "ad_1900", "ad_modern", "ulke_1900", "modern_ulke", "lat", "lon", "koord_yolu",
        "atlas_en_yakin", "atlas_km", "eslesme", "kaynak_liste", "dogrulama", "kronoloji_madde", "adlar", "not_", "giris"]
out = os.path.join(os.path.dirname(__file__), "LISTE.tsv")
with open(out, "w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=cols, delimiter="\t")
    w.writeheader()
    for x in rows:
        w.writerow(x)
import collections
print("1900-liste:", n1900, "kronolojiden eklenen:", ek, "toplam:", len(rows))
print(collections.Counter(x["blok"] for x in rows))
print("kat:", collections.Counter(x["kat"] for x in rows))
print("koordinat yok:", sum(1 for x in rows if not x["lat"]))
print("atlasta:", collections.Counter(x["eslesme"] for x in rows))
