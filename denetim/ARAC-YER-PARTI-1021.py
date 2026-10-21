# -*- coding: utf-8 -*-
"""Envanterden araştırma partileri üretir: denetim/yer-arastirma/parti_NN_girdi.json
Kullanım: py denetim/ARAC-YER-PARTI-1021.py <sınıf: yok|bolge> <parti_boyu> <ilk_parti_no> <kaç_parti>
Sıra: madde sayısı (n) azalan. Önceden sonuçlanmış adlar (yer-arastirma/parti_*_sonuc.json) atlanır."""
import sys, os, json, glob
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env = json.load(open(os.path.join(KOK, "denetim", "ONCE1281-YER-ENVANTER.json"), encoding="utf-8"))
sinif, boy, ilk, adet = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])
klasor = os.path.join(KOK, "denetim", "yer-arastirma")
os.makedirs(klasor, exist_ok=True)
yapilan = set()
for f in glob.glob(os.path.join(klasor, "parti_*_sonuc.json")):
    for r in json.load(open(f, encoding="utf-8")).get("sonuclar", []):
        yapilan.add(r["ad"])
for f in glob.glob(os.path.join(klasor, "parti_*_girdi.json")):
    for r in json.load(open(f, encoding="utf-8")).get("adlar", []):
        yapilan.add(r["ad"])
kalan = [r for r in env[sinif] if r["ad"] not in yapilan]
for p in range(adet):
    dilim = kalan[p * boy:(p + 1) * boy]
    if not dilim:
        break
    adlar = [{"ad": r["ad"], "madde_sayisi": r["n"], "yil_araligi": [r["yil_min"], r["yil_maks"]],
              "ornek_maddeler": r["ornek"], "kronolojide_yer_kon": r["yer_kon"]} for r in dilim]
    yol = os.path.join(klasor, "parti_%02d_girdi.json" % (ilk + p))
    json.dump({"sinif": sinif, "adlar": adlar}, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(yol, len(adlar))
