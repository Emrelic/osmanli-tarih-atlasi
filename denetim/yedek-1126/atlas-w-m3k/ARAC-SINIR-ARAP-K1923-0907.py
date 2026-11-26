# -*- coding: utf-8 -*-
"""ARAC-SINIR-ARAP-K1923-0907 — `kimlik_1923`i COGRAFI olarak ADAYLAR.

GIRDI: denetim/KIMLIK-1923-0907-ADIM1.json  (KIMLIK-1923-0907 uretti)
       veri-kaynak/ne_10m_admin_0_countries.geojson

🔴 SORGU GUNU 1923-10-28 — CIPA DEGIL. Donemler yari acik (`f <= g < t`) ve
   UFUK sonu 1923-10-29; o gunle biten HER donem tam o gun sorulunca dusuyor
   (109 kimlik -> 1). Cipa kayitlara `1923-10-29` diye YAZILIR, atlasa
   `1923-10-28` diye SORULUR. (1.MURAT, tahta M-3191.)

🔴 BU ALET KANIT URETMEZ, ADAY URETIR. bbox bir IPUCUDUR:
   `§11` — "komsuluk bir ipucudur, KANIT DEGIL". Cikti `aday` diye
   damgalanir; hangi adayin secildigi ve NICIN, kaynakla ayrica yazilir.
"""
import json, os, sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from shapely.geometry import shape

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SORGU_GUNU = "1923-10-28"

BOLGE = ["Syria", "Lebanon", "Israel", "Palestine", "Jordan", "Iraq",
         "Saudi Arabia", "Yemen", "Oman", "United Arab Emirates",
         "Qatar", "Bahrain", "Kuwait", "Turkey", "Iran", "Egypt"]

d = json.load(open(os.path.join(KOK, "denetim", "KIMLIK-1923-0907-ADIM1.json"), encoding="utf-8"))
g = d["gunler"][SORGU_GUNU]
zarf = g["zarf"]
print("SORGU GUNU        : %s   (cipa 1923-10-29 — kayda O yazilir)" % SORGU_GUNU)
print("canli kimlik      : %d" % g["kimlik_sayisi"])
print("sahipsiz nokta    : %d" % g["sahipsiz"])
print("kova              : %s" % g["kova"])
print("kid tasimayan v:  : %s" % g.get("kid_tasimayan_v_donemi"))
print()

gj = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
poli = {}
for ft in gj["features"]:
    ad = ft["properties"].get("ADMIN")
    if ad in BOLGE:
        try:
            poli[ad] = shape(ft["geometry"])
        except Exception:
            poli[ad] = None

def alan(b):
    return (b[2] - b[0]) * (b[3] - b[1])

print("%-22s %-9s %s" % ("NE ULKE", "gecerli", "bbox'i o ulkeyi KAPSAYAN 1923 kimlikleri (dar->genis)"))
sonuc = {}
for ad in BOLGE:
    p = poli.get(ad)
    if p is None:
        print("%-22s %-9s (NE geometrisi COKTU)" % (ad, "-"))
        continue
    gecerli = p.is_valid
    try:
        nokta = p.representative_point() if gecerli else p.buffer(0).representative_point()
        x, y = nokta.x, nokta.y
    except Exception:
        print("%-22s %-9s (temsili nokta URETILEMEDI)" % (ad, gecerli))
        continue
    aday = []
    for kid, v in zarf.items():
        b = v.get("bbox")
        if not b:
            continue
        if b[0] <= x <= b[2] and b[1] <= y <= b[3]:
            aday.append((alan(b), kid, v.get("nokta"), (v.get("temsili") or {}).get("ad")))
    aday.sort()
    sonuc[ad] = [{"kimlik": k, "nokta": n, "temsili": t} for _, k, n, t in aday]
    ozet = ", ".join("%s(%s·%s)" % (k, n, t) for _, k, n, t in aday[:6]) or "— YOK"
    print("%-22s %-9s %s" % (ad, gecerli, ozet))

yol = os.path.join(KOK, "denetim", "OLCUM-SINIR-ARAP-K1923-ADAY-0907.json")
json.dump({
    "_NOT": "ADAY listesi — KANIT DEGIL. bbox kapsamasi bir ipucudur (§11). "
            "Sorgu gunu 1923-10-28 (yari acik aralik); cipa 1923-10-29 olarak KAYDA yazilir.",
    "sorgu_gunu": SORGU_GUNU,
    "girdi": ["denetim/KIMLIK-1923-0907-ADIM1.json", "veri-kaynak/ne_10m_admin_0_countries.geojson"],
    "yontem": "NE ulke poligonunun representative_point()'i, 1923 kimliklerinin bbox'lari "
              "icinde aranir; adaylar bbox ALANINA gore DAR->GENIS siralanir.",
    "aday": sonuc,
}, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("\nYAZILDI: %s" % os.path.relpath(yol, KOK))
