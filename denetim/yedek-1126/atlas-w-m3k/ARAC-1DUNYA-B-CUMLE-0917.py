# -*- coding: utf-8 -*-
"""1DUNYA-B · TDV govdelerinden 1914-1923 yillarini TASIYAN cumleleri suzer.

Kullanim:  py denetim/ARAC-1DUNYA-B-CUMLE-0917.py <slug> [<slug> ...]
Govde:     denetim/_govde_1dunyab/<slug>.txt (ARAC-1DUNYA-B-GOVDE-0917.py ceker)
Dikkat (CLAUDE.md §4 ⑧): rakamin cumlede gecmesi o degeri desteklemez;
cumlenin NEYI tarihledigi elle okunur. Bu alet yalniz ADAY cumle verir.
"""
import sys, os, re

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_govde_1dunyab")
YIL = re.compile(r"\b(191[4-9]|192[0-3])\b")

for slug in sys.argv[1:]:
    t = open(os.path.join(KOK, slug + ".txt"), encoding="utf-8").read()
    i = t.find("Kopyalama metni")          # govde bundan sonra baslar
    t = t[i:] if i >= 0 else t
    t = re.sub(r"\s+", " ", t)
    cumleler = re.split(r"(?<=[.!?])\s+(?=[A-ZÇĞİÖŞÜÂÎÛ“\"(0-9])", t)
    print("=" * 20, slug)
    for c in cumleler:
        if YIL.search(c) and not c.startswith("BİBLİYOGRAFYA"):
            print("-", c.strip()[:600])
