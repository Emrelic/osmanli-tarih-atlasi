# -*- coding: utf-8 -*-
"""ARAC-SINIR-GAFRIKA-ENVANTER-0907 — Sahra alti Afrika kenar EVRENININ envanteri.

SORAR   "NE 10m admin_0'da Sahra alti Afrika'da hangi girdiler var,
         ve bolgeyi tanimlayan alan kumesi NEDIR?"
SORMAZ  "bu kenar 1923'ten beri degisti mi"   (o bir sonraki alet)

ONCUL DAMGASI (ORTAK sartname §9):
  🟢 OLCTUM   asagidaki her sayi bu dosyanin kendi kosusundan gelir
  ⚪ OLCMEDIM alan adlarini VARSAYMADIM — dokuyorum (§11: bir alan adi,
              kullanildigi yerden degil TANIMLANDIGI yerden okunur)
"""
import io
import json
import os
import sys
from collections import Counter

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")


def yukle():
    with io.open(NE, encoding="utf-8") as f:
        g = json.load(f)
    return g["features"]


def main():
    ozl = yukle()
    print("girdi sayisi: %d" % len(ozl))

    # ---- ① ALAN KUMESI DOKULUR, VARSAYILMAZ -------------------------------
    alanlar = set()
    for f in ozl:
        alanlar |= set(f["properties"].keys())
    ilgi = [a for a in sorted(alanlar)
            if a in ("NAME", "NAME_EN", "NAME_LONG", "ADMIN", "SOVEREIGNT",
                     "CONTINENT", "REGION_UN", "SUBREGION", "REGION_WB",
                     "TYPE", "ISO_A2", "ISO_A3", "ADM0_A3", "SOV_A3")]
    print("alan sayisi: %d" % len(alanlar))
    print("kullanacagim alanlar: %s" % ", ".join(ilgi))

    # ---- ② KITA VE ALT BOLGE DAGILIMI -------------------------------------
    afr = [f for f in ozl if f["properties"].get("CONTINENT") == "Africa"]
    print("\nCONTINENT=Africa: %d girdi" % len(afr))
    print("SUBREGION dagilimi:")
    for k, v in sorted(Counter(f["properties"].get("SUBREGION") for f in afr).items(),
                       key=lambda x: -x[1]):
        print("   %-24s %3d" % (k, v))
    print("TYPE dagilimi (Africa):")
    for k, v in sorted(Counter(f["properties"].get("TYPE") for f in afr).items(),
                       key=lambda x: -x[1]):
        print("   %-24s %3d" % (k, v))

    # ---- ③ SAHRA ALTI ADAYI ------------------------------------------------
    SAHRA_ALTI = ("Western Africa", "Middle Africa", "Eastern Africa",
                  "Southern Africa")
    sa = [f for f in afr if f["properties"].get("SUBREGION") in SAHRA_ALTI]
    ku = [f for f in afr if f["properties"].get("SUBREGION") not in SAHRA_ALTI]
    print("\nSAHRA ALTI (4 alt bolge): %d" % len(sa))
    print("KUZEY / DISARIDA           : %d" % len(ku))
    print("  kuzeydekiler: %s" % ", ".join(sorted(
        f["properties"]["NAME"] for f in ku)))

    print("\nSahra alti girdiler (NAME | TYPE | SUBREGION):")
    for f in sorted(sa, key=lambda x: x["properties"]["NAME"]):
        p = f["properties"]
        print("   %-26s %-14s %s" % (p["NAME"], p.get("TYPE"), p.get("SUBREGION")))

    # ---- ④ DEVLET OLMAYANLAR — `kimlik-degil` kovasinin adaylari ----------
    dd = [f for f in sa if f["properties"].get("TYPE") != "Sovereign country"]
    print("\nTYPE != 'Sovereign country' (kimlik-degil ADAYI): %d" % len(dd))
    for f in sorted(dd, key=lambda x: x["properties"]["NAME"]):
        p = f["properties"]
        print("   %-26s %-16s sov=%s" % (p["NAME"], p.get("TYPE"),
                                         p.get("SOVEREIGNT")))
    return 0


if __name__ == "__main__":
    sys.exit(main())
