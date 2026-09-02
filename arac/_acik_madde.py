# -*- coding: utf-8 -*-
"""ACIK PAKET MADDELERINI DOK — sevk icin.
Evren: ClaudEmre/kutu/giden/*/CEVAP.json
   maddeler: {"H-0007": {"hukum":..., "not":..., "onceki_hukum":..., "ilerleten":...}}

kullanim:
   py acik_madde.py --karar            -> yalniz `senin-kararin` (BENDE BLOKE)
   py acik_madde.py <paket> [<paket>]  -> o paketlerin tum acik maddeleri
"""
import json, io, os, sys, glob
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KUTU = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"

yalniz_karar = "--karar" in sys.argv
istenen = set(a for a in sys.argv[1:] if not a.startswith("--"))
ACIK = {"senin-kararin"} if yalniz_karar else {"sirada", "olculecek", "senin-kararin"}
kesme = 400 if yalniz_karar else 130

toplam = 0
for yol in sorted(glob.glob(os.path.join(KUTU, "*", "CEVAP.json"))):
    paket = os.path.basename(os.path.dirname(yol))
    if istenen and paket not in istenen:
        continue
    try:
        d = json.load(io.open(yol, encoding="utf-8"))
    except Exception as e:
        print(paket, "OKUNAMADI", e)
        continue
    md = d.get("maddeler", {}) if isinstance(d, dict) else {}
    if not isinstance(md, dict):
        continue
    acik = [(k, v) for k, v in md.items()
            if isinstance(v, dict) and str(v.get("hukum", "")).strip() in ACIK]
    if not acik:
        continue
    print("=" * 74)
    print(paket, " ->", len(acik))
    for k, v in sorted(acik):
        toplam += 1
        print("  %-8s [%-13s] %s" % (k, v.get("hukum", ""),
              str(v.get("not", "")).replace("\n", " ")[:kesme]))
print("\nTOPLAM:", toplam)
