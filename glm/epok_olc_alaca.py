# -*- coding: utf-8 -*-
"""Alacahisar ve Hums kayitlarini oldugu gibi bas; govde_metni neden bos."""
import io, json, os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "glm"))
import epok_tarama as T
KOK = T.KOK
src = os.path.join(KOK, "glm", "epok_asama1.jsonl")
for l in io.open(src, encoding="utf-8"):
    r = json.loads(l)
    if r["ad"] in ("Alacahisar (Kruševac)", "Hums (Lebde)", "Urfa"):
        print(json.dumps(r, ensure_ascii=False, indent=1)[:900])
        print("---")
        kod, govde = T._onbellek_oku(r.get("slug", ""))
        print("slug:", r.get("slug"), "kod:", kod, "govde_uzunlug ham:", len(govde or ""))
        if govde:
            satirlar = govde.split("\n")
            print("satir sayisi:", len(satirlar), "en uzun satir:", max(len(s) for s in satirlar))
            print("govde_metni uzunlugu:", len(T.govde_metni(govde)))
        print("=====")
