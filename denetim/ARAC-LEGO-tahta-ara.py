# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 — tahtada bir dizgiyi geçen mesajları kısaltılmış basar (salt okunur)."""
import json, sys, re
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
aranan = sys.argv[1]
d = json.load(open(r"C:\atlas\oturumlar\tahta.json", encoding="utf-8"))
m = d if isinstance(d, list) else d.get("mesajlar", d)
for x in m:
    t = x.get("mesaj", "")
    for mt in re.finditer(re.escape(aranan), t):
        s = max(0, mt.start() - 300)
        print(f"--- {x['no']} {x['zaman']} {x['kimden']} -> {x['kime']}")
        print(t[s:mt.end() + 300].replace("\n", " "))
        break
