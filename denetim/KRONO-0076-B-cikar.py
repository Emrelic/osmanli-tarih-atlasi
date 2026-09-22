# -*- coding: utf-8 -*-
"""KRONO-0076-B — kendi 24 maddesinin gövdesini PARTI.md'den çıkarır."""
import re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

P = r"C:\claudemre\kutu\giden\parti-emrelic-0076\PARTI.md"
MINE = ("H-0067 H-0070 H-0074 H-0081 H-0082 H-0083 H-0084 H-0085 H-0086 H-0087 "
        "H-0088 H-0089 H-0091 H-0092 H-0094 H-0100 H-0101 H-0102 H-0103 H-0104 "
        "H-0105 H-0109 H-0110 H-0112").split()
mine = set(MINE)

t = open(P, encoding="utf-8").read()
parts = re.split(r"(?m)^## ", t)
found = []
for s in parts[1:]:
    code = s[:6]
    if code in mine:
        found.append("## " + s.rstrip())
print("\n\n".join(found))
print("\nBULUNAN: %d / %d" % (len(found), len(MINE)))
eksik = mine - {f[3:9] for f in found}
if eksik:
    print("EKSIK:", sorted(eksik))
