# -*- coding: utf-8 -*-
"""Akrabalik kaniti olan onerilerin tonunun (Lab hue) akrabaninkine uzakligi. Salt-okunur."""
import io, os, sys, json, math, collections
BOLUM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(os.path.dirname(BOLUM))
sys.path.insert(0, os.path.join(KOK, "arac"))
import renkler
from renkler import BOYALAR
import renk_olc as R

O = json.load(io.open(os.path.join(BOLUM, "renk_oneri.json"), encoding="utf-8"))


def hab(hx):
    l = R.lab(R.bind(R.h2r(hx)))
    return math.degrees(math.atan2(l[2], l[1])) % 360, l


rows = []
for i, v in O.items():
    ak = v.get("akraba")
    if not ak:
        continue
    ak_hx = O[ak]["yeni"] if ak in O else BOYALAR[ak][1]
    h1, l1 = hab(v["yeni"]); h2, l2 = hab(ak_hx)
    d = abs(h1 - h2) % 360
    d = min(d, 360 - d)
    rows.append((d, i, ak, v["yeni"], ak_hx, round(R.dE(l1, l2), 1)))
rows.sort()
ist = [r[0] for r in rows]
print("akrabali oneri:", len(rows), "| hue farki medyan %.1f max %.1f | <=30 derece: %d | 30-60: %d | >60: %d" % (
    sorted(ist)[len(ist) // 2], max(ist), sum(x <= 30 for x in ist), sum(30 < x <= 60 for x in ist), sum(x > 60 for x in ist)))
for r in rows[-12:]:
    print("  %.0f deg  %s ~ %s  %s vs %s  dE %s" % r)
kaymalar = []
for i, v in O.items():
    if v["tur"] != "DEGISIM":
        continue
    eski = v.get("eski_calisma_zamani") or v["eski"]
    kaymalar.append((round(R.dE(R.lab(R.bind(R.h2r(eski))), R.lab(R.bind(R.h2r(v["yeni"])))), 1), i, eski, v["yeni"]))
kaymalar.sort(reverse=True)
ks = sorted(k[0] for k in kaymalar)
print("DEGISIM kayma dE: n=%d medyan %.1f | >30: %d | >60: %d" % (len(ks), ks[len(ks) // 2], sum(x > 30 for x in ks), sum(x > 60 for x in ks)))
json.dump({"n": len(ks), "medyan": ks[len(ks) // 2], "gt30": sum(x > 30 for x in ks), "gt60": sum(x > 60 for x in ks),
           "en_buyuk_20": kaymalar[:20]},
          io.open(os.path.join(BOLUM, "degisim_buyuklugu.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
json.dump([dict(hue_fark=round(r[0], 1), kimlik=r[1], akraba=r[2], yeni=r[3], akraba_renk=r[4], dE=r[5]) for r in rows],
          io.open(os.path.join(BOLUM, "ton_ailesi.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
