# -*- coding: utf-8 -*-
"""DEGISMEZ2-KAPAT — açık json'unu tarih bazında özetler + künye ad adayları."""
import sys, io, json, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle as D
S = json.load(open(os.path.join(KOK, "denetim", "DEGISMEZ2-KAPAT-0930-acik.json"),
                   encoding="utf-8"))
g = {}
for s in S:
    g.setdefault(s["gun"], []).append(s)
for d, L in sorted(g.items(), key=lambda x: (-len(x[1]), x[0])):
    c = {}
    for s in L:
        k = (s["eski"], s["yeni"])
        c[k] = c.get(k, 0) + 1
    print(d, len(L), " | ".join(f"{e or '-'}>{n or '-'}:{v}" for (e, n), v in c.items()))
ids = sorted({x for s in S for x in (s["eski"], s["yeni"]) if x})
print("\nADAY:")
for i in ids:
    print(i, D._2s_taraf_adaylari(i))
