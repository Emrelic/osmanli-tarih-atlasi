# -*- coding: utf-8 -*-
"""Kesik cümlelerin tamini göster: ad -> yıl anahtarında tam cümle."""
import io, json, os, sys
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ISTEK = {"Alanya": [1221], "Divriği": [1276], "Merzifon": [None], "Midilli": [1354]}
tarama = {}
for l in io.open(os.path.join(KOK, "glm", "epok_asama1.jsonl"), encoding="utf-8"):
    r = json.loads(l)
    tarama[r["ad"]] = r
for ad, yillar in ISTEK.items():
    r = tarama.get(ad)
    if not r:
        print(f"{ad}: tarama yok")
        continue
    print(f"== {ad} · slug={r.get('slug')}")
    for kaynak in ("c_yil", "c_ek"):
        for y, c in (r.get(kaynak) or []):
            if y in yillar or (y is None and None in yillar):
                print(f"  [{kaynak} {y}] {c}")
