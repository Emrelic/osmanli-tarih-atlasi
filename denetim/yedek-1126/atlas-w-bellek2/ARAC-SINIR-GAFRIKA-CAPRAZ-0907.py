# -*- coding: utf-8 -*-
"""ARAC-SINIR-GAFRIKA-CAPRAZ-0907 — IKI SINIFLAMAYI KARSILASTIRIR.

TARIH  (TUR 1)  : 1923 EGEMEN tablosundan — "iki yan ayri egemenlik mi?"
ATLAS  (TUR 2)  : atlasin o gun BOYADIGI kimlikten — "iki yan ayri kimlik mi?"

🔴 NICIN AYRI OLCUYORUM: iki sayi birbirine COK YAKIN cikti
   (tarih 35 · atlas 34). `§11`: ***AYNI SAYI ≠ AYNI VAKA.*** Iki
   yontemin ayni sonuca varmasi bir DOGRULAMA degildir; ancak AYNI
   KENARLARDA vardilarsa dogrulamadir. Bu alet onu olcer.
"""
import io
import json
import os
import sys
from collections import Counter

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "denetim", "SINIR-HUKUKI-GAFRIKA-0907.json")


def tarih(r):
    s = r["sinif_1923"]
    if s in ("ic_idari_cizgi", "ayni_egemen_farkli_yapi"):
        return "SINIR-DEGIL"
    if s == "uluslararasi":
        return "ULUSLARARASI"
    return "olculemedi"


def atlas(r):
    return {"ayni-kimlik": "SINIR-DEGIL",
            "farkli-kimlik": "ULUSLARARASI",
            "olculemedi": "olculemedi"}[r["hal_atlas"]]


def main():
    with io.open(CIKTI, encoding="utf-8") as f:
        R = json.load(f)["kayitlar"]
    c = Counter((tarih(r), atlas(r)) for r in R)
    print("%-14s %-14s %s" % ("TARIH", "ATLAS", "n"))
    for k, v in sorted(c.items()):
        print("%-14s %-14s %d" % (k[0], k[1], v))

    uy = sum(v for k, v in c.items() if k[0] == k[1] and k[0] != "olculemedi")
    ay = [r for r in R if tarih(r) != atlas(r)
          and "olculemedi" not in (tarih(r), atlas(r))]
    print("\nUYUSAN %d · AYRISAN %d" % (uy, len(ay)))
    for r in ay:
        print("   %-22s ↔ %-22s tarih=%-13s atlas=%-13s | %s / %s"
              % (r["a"], r["b"], tarih(r), atlas(r),
                 r["kimlik_1923_atlas"][0], r["kimlik_1923_atlas"][1]))
    return 0


if __name__ == "__main__":
    sys.exit(main())
