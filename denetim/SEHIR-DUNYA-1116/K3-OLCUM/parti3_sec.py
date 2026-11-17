# -*- coding: utf-8 -*-
"""F2 parti 3 hedef listesi: K3-OLCUM'da tarihçe/tanık YOK olan, LAB bölgelerindeki yerleşimler.
A ajanı: güney-asya (60) · B ajanı: orta-asya (11) + sibirya-bozkır (22) + doğu-asya Müslüman/Türk bölgeleri alt kümesi.
Çıktı: denetim/SEHIR-DUNYA-1116/K3-OLCUM/parti3/{A,B}_gorev.tsv"""
import csv, io, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = os.path.dirname(os.path.abspath(__file__))
R = list(csv.DictReader(open(os.path.join(D, "K3-TARIHCESIZ-TUM.tsv"), encoding="utf-8"), delimiter="\t"))
DOGU = {"Hâmi (Kumul)", "Ürümçi (Dihua)", "Uçturfan (Uç Turfan)", "Keriya (Yutian)", "Çerçen (Qiemo)", "Çarklık (Ruoqiang)",
        "Manas (Cungarya)", "Dunhuang", "Hohhot (Kuku-hoto)", "Ejin (Hara-Hoto)", "Kuça (Kuqa)"}
A = [x for x in R if x["bolge"] == "guney-asya" and x["tarihce_tanik"] == "yok"]
B = [x for x in R if x["tarihce_tanik"] == "yok" and (x["bolge"] in ("orta-asya", "sibirya-bozkir") or x["ad"] in DOGU)]
os.makedirs(os.path.join(D, "parti3"), exist_ok=True)
for ad, L in (("A", A), ("B", B)):
    with open(os.path.join(D, "parti3", ad + "_gorev.tsv"), "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t"); w.writerow(["sira", "yerlesim_id", "ad", "lat", "lon", "bolge", "sahip_devlet", "kronoloji_yer_id"])
        for i, x in enumerate(L, 1):
            w.writerow([i, x["id"], x["ad"], x["lat"], x["lon"], x["bolge"], x["sahip_devlet"], x["kronoloji_yer_id"]])
    print(ad, len(L))
