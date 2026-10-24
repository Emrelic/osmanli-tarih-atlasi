# -*- coding: utf-8 -*-
"""parti_<N>_sonuc.json içinde çift tanık olmayanlardan ajan girdi partileri.
Kullanım: py denetim/ARAC-YER-PARTI2-1021.py <kaynak parti no> <ilk çıktı no> <boy> [öncelikli,ad,başlangıçları]"""
import sys, io, os, json, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KL = os.path.join(KOK, "denetim", "yer-arastirma")
kaynak, ilk, boy = int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3])
oncelik = [x.strip().lower() for x in (sys.argv[4].split(",") if len(sys.argv) > 4 else []) if x.strip()]
d = json.load(open(os.path.join(KL, "parti_%d_sonuc.json" % kaynak), encoding="utf-8"))["sonuclar"]
liste = []
for s in d:
    if s["durum"] == "cift_tanik" or s["ad"].lower() == "ad":
        continue
    liste.append({"ad": s["ad"], "madde_sayisi": 0, "yil_araligi": [None, None], "ornek_maddeler": ["KRON-ORTACAG yer-eksik listesi; ilgili devlet: %s" % s.get("ilgili_devlet")],
                  "modern_ad": s.get("modern_ad"), "tsv_ipucu_genel_bilgi": s.get("tsv_ipucu"), "tek_tanik_koord": s.get("tek_tanik_koord"), "onceki_durum": s["durum"], "onceki_not": s.get("not")})


def onc(x):
    a = x["ad"].lower()
    return 0 if any(a.startswith(o) or o in a for o in oncelik) else 1


liste.sort(key=onc)
print(len(liste), "ad;", sum(1 for x in liste if onc(x) == 0), "öncelikli")
for i in range(0, len(liste), boy):
    json.dump({"sinif": "ortacag", "adlar": liste[i:i + boy]}, open(os.path.join(KL, "parti_%d_girdi.json" % (ilk + i // boy)), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(ilk + i // boy, len(liste[i:i + boy]))
