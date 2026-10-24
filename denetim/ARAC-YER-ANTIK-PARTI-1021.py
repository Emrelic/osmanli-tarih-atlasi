# -*- coding: utf-8 -*-
"""parti_101_sonuc.json içinde çift tanık olmayanlardan ajan partileri: parti_102/103/104_girdi.json (25'er ad)."""
import sys, io, os, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KL = os.path.join(KOK, "denetim", "yer-arastirma")
d = json.load(open(os.path.join(KL, "parti_101_sonuc.json"), encoding="utf-8"))["sonuclar"]
liste, gor = [], set()
for s in d:
    if s["durum"] == "cift_tanik" or s["ad"] == "ad" or s["ad"] in gor:
        continue
    gor.add(s["ad"])
    liste.append({"ad": s["ad"], "madde_sayisi": 0, "yil_araligi": [None, None], "ornek_maddeler": ["KRON-ANTIK listesi; ilgili devlet: %s" % s.get("ilgili_devlet")],
                  "modern_ad": s.get("modern_ad"), "tsv_ipucu_genel_bilgi": s.get("tsv_ipucu"), "tek_tanik_koord": s.get("tek_tanik_koord"), "onceki_durum": s["durum"], "onceki_not": s.get("not")})
print(len(liste))
for i in range(0, len(liste), 25):
    json.dump({"sinif": "antik", "adlar": liste[i:i + 25]}, open(os.path.join(KL, "parti_%d_girdi.json" % (102 + i // 25)), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(102 + i // 25, len(liste[i:i + 25]))
