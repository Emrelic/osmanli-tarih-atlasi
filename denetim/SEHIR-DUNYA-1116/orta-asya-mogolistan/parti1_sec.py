# -*- coding: utf-8 -*-
"""Orta Asya+Moğolistan+Sincan F2 parti 1 seçimi: 40 şehir -> parti1/bati_turkistan_gorev.tsv (20) ve parti1/dogu_gorev.tsv (20).
Koordinat/atlas_ad: kronolojide anılan yer_id'ler (LAB ölçümü, 16 Kasım 2026); 'ilk_yil' kolonu 4 karaktere kırpılmıştır (MÖ yıllar -0029 → -002 görünür; veri hatası DEĞİL).
Afganistan şehirleri (Herat, Belh, Gazne, Kâbil, Kunduz) hiçbir bloğa atanmamıştı; TDV güçlü olduğu için bu partiye dahil edildi (koordinatöre bildirildi)."""
import csv, io, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = os.path.dirname(os.path.abspath(__file__))
A = ["Buhara", "Semerkant", "Taşkent", "Hokand", "Hîve", "Köhne Ürgenç (Gürgenç)", "Merv (Mari)", "Türkistan (Yesi)", "Taraz (Evliya-Ata)",
     "Balasagun (Ak-Beşim)", "Hucend", "Andican", "Termez", "Cizzah", "Aşkabad", "Serahs", "Almatı (Vernıy)", "Çimkent", "Sayram (İsficâb)",
     "Sığnak (Sunak Kurgan)"]
B = ["Kaşgar", "Hotan", "Yarkent (Şaçe)", "Turfan", "Kuça (Kuqa)", "Karaşar (Yanqi)", "Gulca (Yining)", "Gaochang", "Ürümçi (Dihua)", "Almalık (Almalığ)",
     "Karakurum", "Ordu-Balık (Ordu-Baliq)", "Urga (Ulan Batur)", "Herat", "Belh", "Gazne", "Kâbil", "Kunduz", "Semipalatinsk", "Horog (Khorog)"]
kaynak = {}
for r in csv.DictReader(open(os.path.join(D, "yer_id_kronoloji.tsv"), encoding="utf-8"), delimiter="\t"):
    kaynak.setdefault(r["yer_id"], r)
os.makedirs(os.path.join(D, "parti1"), exist_ok=True)
for ad_dosya, liste in (("bati_turkistan", A), ("dogu", B)):
    cikti = []
    for ad in liste:
        r = kaynak.get(ad)
        if not r:
            print("YOK", ad); continue
        cikti.append(dict(sira=len(cikti) + 1, aranan=ad, atlas_ad=r["atlas_ad"], lat=r["lat"], lon=r["lon"], kronoloji_madde=r["madde"],
                          kronoloji_yil=r["ilk_yil"] + "-" + r["son_yil"]))
    with open(os.path.join(D, "parti1", ad_dosya + "_gorev.tsv"), "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(cikti[0].keys()), delimiter="\t"); w.writeheader(); w.writerows(cikti)
    print(ad_dosya, len(cikti))
