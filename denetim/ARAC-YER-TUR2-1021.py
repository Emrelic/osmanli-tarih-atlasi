# -*- coding: utf-8 -*-
"""Tur-2 (Iranica/TTK/DergiPark/archive.org) girdi partileri: ikinci tanığı olmayan/çelişkili MS yerleşim adları.
Çıktı: denetim/yer-arastirma/parti_9N_girdi.json (30'ar ad). Kullanım: py denetim/ARAC-YER-TUR2-1021.py"""
import sys, io, os, re, json, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KL = os.path.join(KOK, "denetim", "yer-arastirma")
env = json.load(open(os.path.join(KOK, "denetim", "ONCE1281-YER-ENVANTER.json"), encoding="utf-8"))
tum = {}
for s in ("yok", "bolge", "dogal_nesne", "atlasta"):
    for r in env[s]:
        tum.setdefault(r["ad"], r)
bolge = {r["ad"] for r in env["bolge"]}
cozuldu = set()
adaylar = {}
for f in sorted(glob.glob(os.path.join(KL, "parti_*_sonuc.json"))):
    for r in json.load(open(f, encoding="utf-8")).get("sonuclar", []):
        if r.get("durum") in ("cift_tanik", "bolge_temsilci", "bolge_nokta"):
            cozuldu.add(r["ad"])
for f in sorted(glob.glob(os.path.join(KL, "parti_*_sonuc.json"))):
    for r in json.load(open(f, encoding="utf-8")).get("sonuclar", []):
        ad = r["ad"]
        if ad in cozuldu or ad in bolge or ad not in tum:
            continue
        if r.get("durum") in ("tek_tanik", "ikinci_tanik_yok", "celiski", "belirsiz", "bulunamadi", "tek_kaynak"):
            e = tum[ad]
            if e["yil_maks"] < 0:       # MÖ: VERI-MO-ARKEO
                continue
            if re.search(r"\b(Çin|Tang|Silla|Fars|Arrân|Thüringen|Hebei|Horasan|Ermenistan|Yucatán)\b", ad):
                continue
            k = adaylar.setdefault(ad, {"ad": ad, "madde_sayisi": e["n"], "yil_araligi": [e["yil_min"], e["yil_maks"]], "ornek_maddeler": e["ornek"],
                                         "onceki_denemeler": []})
            k["onceki_denemeler"].append({"parti": os.path.basename(f)[6:8], "durum": r.get("durum"),
                                          "koord": r.get("tek_tanik_koord") or ({"lat": r.get("lat"), "lon": r.get("lon")} if r.get("lat") else None),
                                          "not": (r.get("not") or "")[:300]})
liste = sorted(adaylar.values(), key=lambda x: -x["madde_sayisi"])
print(len(liste), "ad")
for i in range(0, len(liste), 30):
    json.dump({"sinif": "tur2", "adlar": liste[i:i + 30]}, open(os.path.join(KL, "parti_9%d_girdi.json" % (i // 30 + 1)), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("parti_9%d" % (i // 30 + 1), len(liste[i:i + 30]))
