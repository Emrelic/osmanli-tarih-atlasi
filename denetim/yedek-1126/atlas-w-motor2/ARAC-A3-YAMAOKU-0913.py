# -*- coding: utf-8 -*-
"""PAKET-A3 — iki hazır yamayı okur (yazmaz).
py denetim/ARAC-A3-YAMAOKU-0913.py icnot   → YAMA-IC-NOT-0913.json'da Fizan (ek8) kayıtları
py denetim/ARAC-A3-YAMAOKU-0913.py yerid   → YAMA-YER-ID-0913.json'da 'zaten-dogru' DIŞI kayıtlar
"""
import io, json, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ne = sys.argv[1]
if ne == "icnot":
    d = json.load(open(os.path.join(KOK, "denetim/YAMA-IC-NOT-0913.json"), encoding="utf-8"))
    for r in d["kayitlar"]:
        if "ek8" in r["dosya"] and ("Fizan" in r["eski_metin"] or "1551" in r["eski_metin"]):
            print(json.dumps(r, ensure_ascii=False, indent=1))
elif ne == "yerid":
    d = json.load(open(os.path.join(KOK, "denetim/YAMA-YER-ID-0913.json"), encoding="utf-8"))
    for r in d["kayitlar"]:
        if r.get("kova") != "zaten-dogru":
            print(json.dumps(r, ensure_ascii=False))
