# -*- coding: utf-8 -*-
"""M-4945 (c)② devami — BOS ZEMINE hangi YONDE ton konursa ayrim ARTAR?

Ilk olcum (DELTAE.py ②) gri/mavi/kahve tonlarin ayrimI DUSURDUGUNU gosterdi:
soluk bej zemini gri-mavi-kahve ile boyamak onu rusya'nin sonuk yesiline
YAKLASTIRIYOR. Burada ton yonu TARANIR: hangi renk, hangi oranda zemini
rusya'dan UZAKLASTIRIR. Sadece renk olcusu — doku (desen) bir UZAY ipucudur,
DeltaE onu olcemez; bu olcum dokunun RENK ayagi icin ust sinir verir.
Cikti: denetim/HARITA-DURUM-0074-ZEMINTON.json
"""
import sys, os, io, json, colorsys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import renk_olc as R

ZEMIN = (242, 241, 193)          # gorselde olculen acik kabartma #f2f1c1
RUS = R.h2r(R.BOYALAR["rusya"][1])
rus44 = R.lab(tuple(0.44 * c + 0.56 * z for c, z in zip(RUS, ZEMIN)))
taban = R.dE(rus44, R.lab(ZEMIN))
print("taban (zemin #f2f1c1, rusya %%44): dE76 %.2f" % taban)

def dene(ad, hx, oran):
    t = R.h2r(hx)
    yeni = tuple(oran * c + (1 - oran) * z for c, z in zip(t, ZEMIN))
    d = R.dE(rus44, R.lab(yeni))
    return {"ad": ad, "ortu": hx, "oran": oran,
            "yeni_zemin": "#%02x%02x%02x" % tuple(int(round(c)) for c in yeni),
            "dE76": round(d, 2), "kazanc": round(d - taban, 2)}

SON = {"taban_dE76": round(taban, 2), "zemin": "#f2f1c1",
       "rusya": R.BOYALAR["rusya"][1], "denemeler": []}

# 24 ton acisi x iki oran — hangi yon kazandiriyor
for h in range(0, 360, 15):
    r, g, b = colorsys.hls_to_rgb(h / 360.0, 0.5, 0.6)
    hx = "#%02x%02x%02x" % (int(r*255), int(g*255), int(b*255))
    for oran in (0.08, 0.15):
        SON["denemeler"].append(dene("ton %d derece" % h, hx, oran))
# aciklik/koyuluk
for ad, hx in (("beyazla acma", "#ffffff"), ("siyahla koyultma", "#000000")):
    for oran in (0.08, 0.15, 0.25):
        SON["denemeler"].append(dene(ad, hx, oran))

SON["denemeler"].sort(key=lambda x: -x["kazanc"])
print("\nEN COK KAZANDIRAN 12:")
for e in SON["denemeler"][:12]:
    print("  %-18s %s x%.2f -> zemin %s  dE76 %6.2f  kazanc %+6.2f"
          % (e["ad"], e["ortu"], e["oran"], e["yeni_zemin"], e["dE76"], e["kazanc"]))
print("\nEN COK KAYBETTIREN 5:")
for e in SON["denemeler"][-5:]:
    print("  %-18s %s x%.2f -> zemin %s  dE76 %6.2f  kazanc %+6.2f"
          % (e["ad"], e["ortu"], e["oran"], e["yeni_zemin"], e["dE76"], e["kazanc"]))

# Ayni yonun BUTUN palete etkisi: en iyi adayla zeminden ayrismayan kimlik sayisi
en_iyi = SON["denemeler"][0]
yeni_zemin = R.h2r(en_iyi["yeni_zemin"])
for ad, z in (("bugunku #f2f1c1", ZEMIN), ("en iyi aday " + en_iyi["yeni_zemin"], yeni_zemin)):
    zlab = R.lab(z)
    say = 0
    for b in R.BOYALAR:
        bind = tuple(0.44 * c + 0.56 * zz for c, zz in zip(R.h2r(R.BOYALAR[b][1]), z))
        if R.dE(R.lab(bind), zlab) < R.DE_ALTLIK: say += 1
    print("  zeminden AYRISMAYAN kimlik (%s, opaklik 0,44): %d" % (ad, say))
    SON.setdefault("palet_etkisi", {})[ad] = say

io.open(os.path.join(KOK, "denetim", "HARITA-DURUM-0074-ZEMINTON.json"), "w",
        encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazildi")
