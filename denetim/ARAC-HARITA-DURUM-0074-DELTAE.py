# -*- coding: utf-8 -*-
"""M-4945 (c) — "ACIK YESIL" UC SECENEGIN OLCUMU. KOD YAZILMAZ, yalniz olculur.

① yumusak kipte devlet-dolgu opakligi 0,44 -> 0,60 -> 0,70 olunca rusya ile
   BOS ZEMIN arasindaki DeltaE ne oluyor?
② bos zemine ince doku/ton konsa ayrim ne kadar artar (kaba tahmin)?
③ rusya renginin paletce ayrismasi gerekir mi — en yakin KOMSUSU kim, DeltaE kac?

Olcu birimi projenin kendi aleti: arac/renk_olc.py (lab · dE CIE76 ·
dE94_asgari · ALTLIK · OPAKLIK · komsuluk). Elle formul yazilmadi.
Cikti: denetim/HARITA-DURUM-0074-DELTAE.json
"""
import sys, os, io, json
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import renk_olc as R

RUSYA = R.BOYALAR["rusya"][1]                     # #4f7d4f
print("rusya:", RUSYA, "| renk_olc ALTLIK:",
      "#%02x%02x%02x" % tuple(int(c) for c in R.ALTLIK),
      "| OPAKLIK yabanci:", R.OPAKLIK["yabanci"])

# Iki ZEMIN: (a) aletin sabiti, (b) Emre'nin gorselinde OLCULEN gercek
# altlik tonlari (H-0007'nin BOYASIZ alanindan, -PIKSEL.py).
ZEMIN = {
    "renk_olc ALTLIK #e8dfc8 (js/app.js:1287 zemin dolgusu)":
        tuple(int(c) for c in R.ALTLIK),
    "gorselde olculen acik kabartma #f2f1c1":  (242, 241, 193),
    "gorselde olculen koyu kabartma #d6cf87":  (214, 207, 135),
}

SON = {"rusya_hex": RUSYA, "esik": {"DE_ALTLIK": R.DE_ALTLIK, "DE_KOMSU": R.DE_KOMSU}}

# ───────────────────────── ① OPAKLIK ─────────────────────────
print("\n① OPAKLIK — rusya dolgusu ile BOS ZEMIN arasindaki DeltaE")
op = {}
for zad, zrgb in ZEMIN.items():
    zlab = R.lab(zrgb)
    op[zad] = {}
    for a in (0.44, 0.50, 0.60, 0.70, 0.80):
        bind = tuple(a * c + (1 - a) * b for c, b in zip(R.h2r(RUSYA), zrgb))
        L = R.lab(bind)
        op[zad]["%.2f" % a] = {"dE76": round(R.dE(L, zlab), 2),
                               "dE94": round(R.dE94_asgari(L, zlab), 2),
                               "gorunen_hex": "#%02x%02x%02x" % tuple(int(round(c)) for c in bind)}
    print("  zemin:", zad)
    for a, v in op[zad].items():
        print("     opaklik %s -> dE76 %6.2f · dE94 %6.2f · gorunen %s %s"
              % (a, v["dE76"], v["dE94"], v["gorunen_hex"],
                 "" if v["dE76"] >= R.DE_ALTLIK else "<< ESIGIN (15) ALTINDA"))
SON["①_opaklik"] = op

# ───────────────────────── ② ZEMINE DOKU/TON ─────────────────────────
# Kaba model: bos zemine ince bir ton bindirmek zemini Lab'da KAYDIRIR.
# Rusya dolgusu (0,44) SABIT kalirken zemin kayarsa aradaki dE degisir.
print("\n② BOS ZEMINE TON — rusya 0,44'te sabit, zemin kayiyor (kaba tahmin)")
ton = {}
zrgb = ZEMIN["gorselde olculen acik kabartma #f2f1c1"]
rus44 = R.lab(tuple(0.44 * c + 0.56 * b for c, b in zip(R.h2r(RUSYA), zrgb)))
for ad, (uz, ua) in {
    "%8 notr gri (#808080) ince ortu":  ("#808080", 0.08),
    "%15 notr gri":                      ("#808080", 0.15),
    "%8 soguk gri-mavi (#7a8a99)":       ("#7a8a99", 0.08),
    "%15 soguk gri-mavi":                ("#7a8a99", 0.15),
    "%8 sicak kahve (#8a7a5a)":          ("#8a7a5a", 0.08),
}.items():
    yeni = tuple(ua * c + (1 - ua) * b for c, b in zip(R.h2r(uz), zrgb))
    L = R.lab(yeni)
    ton[ad] = {"yeni_zemin": "#%02x%02x%02x" % tuple(int(round(c)) for c in yeni),
               "dE76": round(R.dE(rus44, L), 2),
               "dE94": round(R.dE94_asgari(rus44, L), 2)}
    print("  %-34s zemin %s -> dE76 %6.2f (taban 0,44: %.2f · kazanc %+.2f)"
          % (ad, ton[ad]["yeni_zemin"], ton[ad]["dE76"],
             op["gorselde olculen acik kabartma #f2f1c1"]["0.44"]["dE76"],
             ton[ad]["dE76"] - op["gorselde olculen acik kabartma #f2f1c1"]["0.44"]["dE76"]))
SON["②_zemine_ton"] = ton

# ───────────────────────── ③ PALETTE KOMSULUK ─────────────────────────
print("\n③ PALET — rusya'nin en yakin komsulari (renk_olc.komsuluk(), gercek Voronoi + gun ortusmesi)")
k, n = R.komsuluk()
Lr = R.gorunen("rusya")
komsu = []
for b in sorted(k.get("rusya", ())):
    if b not in R.BOYALAR: continue
    komsu.append({"kimlik": b, "hex": R.BOYALAR[b][1], "ad": R.BOYALAR[b][0],
                  "dE76": round(R.dE(Lr, R.gorunen(b)), 2),
                  "dE94": round(R.dE94_asgari(Lr, R.gorunen(b)), 2)})
komsu.sort(key=lambda x: x["dE76"])
print("  gercek komsu sayisi:", len(komsu))
for c in komsu[:10]:
    print("     %-28s %s  dE76 %6.2f · dE94 %6.2f %s"
          % (c["kimlik"][:28], c["hex"], c["dE76"], c["dE94"],
             "<< ESIK 12 ALTI" if c["dE76"] < R.DE_KOMSU else ""))
# butun palette en yakin (komsu olmasa da)
tum = sorted(((R.dE(Lr, R.gorunen(b)), b) for b in R.BOYALAR if b != "rusya"))[:6]
print("  komsuluktan bagimsiz, BUTUN palette en yakin 6:")
for dv, b in tum:
    print("     %-28s %s  dE76 %6.2f" % (b[:28], R.BOYALAR[b][1], dv))
SON["③_komsuluk"] = {"gercek_komsu": komsu,
                     "tum_palette_en_yakin": [{"kimlik": b, "hex": R.BOYALAR[b][1],
                                               "dE76": round(dv, 2)} for dv, b in tum],
                     "nokta_evreni": n}

# ── EK: SINIF SISTEMIK MI? zemine gore ayrismayan kimlik sayisi opaklikla nasil degisiyor
print("\nEK — zeminden AYRISMAYAN kimlik sayisi (dE76 < 15), zemin ve opakliga gore")
ek = {}
for zad, zrgb in ZEMIN.items():
    zlab = R.lab(zrgb)
    ek[zad] = {}
    for a in (0.44, 0.60, 0.70):
        say = []
        for b in R.BOYALAR:
            bind = tuple(a * c + (1 - a) * z for c, z in zip(R.h2r(R.BOYALAR[b][1]), zrgb))
            dv = R.dE(R.lab(bind), zlab)
            if dv < R.DE_ALTLIK: say.append((round(dv, 2), b))
        say.sort()
        ek[zad]["%.2f" % a] = {"kimlik_sayisi": len(say), "en_yakin_10": say[:10]}
        print("  %-52s opaklik %s -> %3d kimlik" % (zad[:52], a, len(say)))
SON["EK_zeminden_ayrismayan"] = ek

io.open(os.path.join(KOK, "denetim", "HARITA-DURUM-0074-DELTAE.json"), "w",
        encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("\nyazildi: denetim/HARITA-DURUM-0074-DELTAE.json")
