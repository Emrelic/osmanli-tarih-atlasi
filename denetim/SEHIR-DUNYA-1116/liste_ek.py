# -*- coding: utf-8 -*-
"""F1 ek (16 Kasım 2026, koordinatör): atlanan bölgeler bloklara eklendi.
 - Batı Afrika bloğu: Batı Sahra (Villa Cisneros) eklendi; São Tomé blok etiketi orta→bati (Yeşil Burun/Praia/Moritanya zaten vardı)
 - Orta Asya bloğu: Sincan (Hotan, Kaşgar, Uç-Turfan) 1900 listesinden eklendi; Turfan ve Urumçi 1900 listesinde YOK → koordinatsız istek satırı (F2'de kaynakla)
 - Hint bloğu: Andaman-Nikobar (Port Blair) zaten Hindistan filtresiyle içeride; Maldivler 1900 listesinde yok → Malé kronolojiden geliyor (parti1)
Betik idempotent: aynı (ad_1900, giris) iki kez eklenmez."""
import csv, io, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = os.path.dirname(os.path.abspath(__file__))
G = os.path.join(D, "..", "SEHIR-1900-KOORDINAT-1013", "LISTE-KOORD.tsv")
src = {r["ad_1900"]: r for r in csv.DictReader(open(G, encoding="utf-8"), delimiter="\t")}
def oku(yol):
    f = open(yol, encoding="utf-8"); r = csv.DictReader(f, delimiter="\t"); return r.fieldnames, list(r)
def yaz(yol, cols, rows):
    with open(yol, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols, delimiter="\t"); w.writeheader(); w.writerows(rows)
def satir(blok, r, giris="1900-liste", not_=""):
    return dict(blok=blok, kat=r["kat"], ad_1900=r["ad_1900"], ad_modern=r["ad_modern"], ulke_1900=r["ulke_1900"], modern_ulke=r["modern_ulke"],
                lat=r["lat"], lon=r["lon"], koord_yolu=r["koord_yolu"], atlas_en_yakin=r["atlas_en_yakin"], atlas_km=r["atlas_km"],
                eslesme=r["eslesme"], kaynak_liste=r["kaynak"], dogrulama=r["dogrulama"], kronoloji_madde="", adlar="", not_=not_ or r["not"], giris=giris)
# Afrika
yol = os.path.join(D, "afrika-guney-bati", "LISTE.tsv"); cols, rows = oku(yol)
for x in rows:
    if x["ad_1900"].startswith("São Thomé"): x["blok"] = "bati-afrika"
if not any(x["ad_1900"] == "Villa Cisneros" for x in rows):
    rows.append(satir("bati-afrika", src["Villa Cisneros"], not_="Batı Sahra (koordinatör eki 16 Kasım)"))
yaz(yol, cols, rows); print("afrika", len(rows))
# Orta Asya
yol = os.path.join(D, "orta-asya-mogolistan", "LISTE.tsv"); cols, rows = oku(yol)
for ad in ("Hwotien (Khotan)", "Shuleh (Kashgar)", "Wushih (Uch-Turfan)"):
    if not any(x["ad_1900"] == ad for x in rows):
        rows.append(satir("orta-asya-mogolistan", src[ad], not_="Sincan (koordinatör eki 16 Kasım; Çin listesinden)"))
for ad in ("Turfan", "Urumçi"):
    if not any(x["ad_1900"] == ad for x in rows):
        rows.append(dict(blok="orta-asya-mogolistan", kat="", ad_1900=ad, ad_modern="", ulke_1900="Çin (Qing)", modern_ulke="Çin", lat="", lon="",
                         koord_yolu="", atlas_en_yakin="", atlas_km="", eslesme="koordinat-yok", kaynak_liste="", dogrulama="", kronoloji_madde="",
                         adlar="", not_="Sincan; 1900 listesinde YOK — koordinatör eki, F2'de kaynakla (koordinat uydurulmadı)", giris="ek-istek"))
yaz(yol, cols, rows); print("orta-asya", len(rows))
