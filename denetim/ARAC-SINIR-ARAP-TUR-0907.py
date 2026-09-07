# -*- coding: utf-8 -*-
"""ARAC-SINIR-ARAP-TUR-0907 — bolgemin NE girdilerinin TUR/EGEMEN alanlarini DOKER.

NICIN: `ORTAK §3` "258 girdinin HEPSI DEVLET DEGIL" diyor ve `kimlik-degil`
kovasini SART kosuyor. Hangi girdinin hangi kovaya dustugu VARSAYILMAZ,
DOKULUR (`§11`: alan kumesi varsayilmaz, repr/keys ile dokulur).
"""
import json, os, sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")

BOLGE = {
    "Syria", "Lebanon", "Israel", "Palestine", "Jordan", "Iraq",
    "Saudi Arabia", "Yemen", "Oman", "United Arab Emirates",
    "Qatar", "Bahrain", "Kuwait",
}
KOMSU = {"Turkey", "Iran", "Egypt"}   # kenarimin obur ucundakiler

with open(NE, encoding="utf-8") as f:
    gj = json.load(f)

print("%-24s %-16s %-22s %-10s %s" % ("ADMIN", "TYPE", "SOVEREIGNT", "ISO_A2", "NAME_TR ?"))
alanlar = None
for ft in gj["features"]:
    pr = ft["properties"]
    ad = pr.get("ADMIN")
    if ad not in BOLGE and ad not in KOMSU:
        continue
    if alanlar is None:
        alanlar = sorted(pr.keys())
    print("%-24s %-16s %-22s %-10s %s" % (
        ad, pr.get("TYPE"), pr.get("SOVEREIGNT"), pr.get("ISO_A2"),
        pr.get("NAME_TR", "(NAME_TR alani YOK)")))

print("\nALAN KUMESI (dokuldu, varsayilmadi): %d alan" % len(alanlar))
print(", ".join(a for a in alanlar if a.startswith("NAME") or a in
                ("ADMIN", "TYPE", "SOVEREIGNT", "ISO_A2", "FORMAL_EN", "NOTE_BRK", "SUBUNIT")))
