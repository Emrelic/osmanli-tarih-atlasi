# -*- coding: utf-8 -*-
"""IRAN-KAFKAS-0082 — önbellekteki TDV metninde anahtar kelimelerin geçtiği cümle çevresini basar.
Kullanım: py denetim/ARAC-IRAN-KAFKAS-0082-OKU.py <slug> <genislik> kelime1 kelime2 ...
  kelime 'GOVDE' ise 'Kopyalama metni' işaretinden sonraki ilk <genislik> karakter basılır."""
import sys, io, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
slug, gen = sys.argv[1], int(sys.argv[2])
t = open(f"denetim/IRAN-KAFKAS-0082-tdv-onbellek/{slug}.txt", encoding="utf-8").read()
for k in sys.argv[3:]:
    if k == "GOVDE":
        i = t.find("Kopyalama metni")
        print("GOVDE >>", t[i:i + gen].replace("\n", " "))
        continue
    goren = 0
    for m in re.finditer(re.escape(k), t):
        if goren >= 2:
            break
        print(f"{k} >> " + t[max(0, m.start() - gen // 2):m.start() + gen // 2].replace("\n", " "))
        print("--")
        goren += 1
    if not goren:
        print(f"{k} >> YOK")
