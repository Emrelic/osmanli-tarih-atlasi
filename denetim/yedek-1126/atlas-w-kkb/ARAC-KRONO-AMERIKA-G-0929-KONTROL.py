# -*- coding: utf-8 -*-
"""KRONO-AMERIKA-G-0929 — künye penceresi kontrolü (M-5416 kural 2): her madde t'sinde devlet(ler) VAR mı?
Önerilen (künyesiz) id'ler ayrıca listelenir."""
import re, json, io, os, subprocess, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
dev = io.open(os.path.join(KOK, "data", "devletler.js"), encoding="utf-8").read()
kun = {}
for m in re.finditer(r'\{\s*id:"([^"]+)"[^\n]*\n(?:[^\n]*\n){0,3}?\s*f:"(\d{4}-\d\d-\d\d)",\s*t:"(\d{4}-\d\d-\d\d)"', dev):
    kun[m.group(1)] = (m.group(2), m.group(3))
js = io.open(os.path.join(KOK, "data", "kronoloji_cok_guney_amerika.js"), encoding="utf-8").read()
arr = js[js.index("= [") + 2: js.rindex("];") + 1]
E = json.loads(arr)
oneri, ihlal = {}, []
for e in E:
    ids = e.get("devletler") or [e["devlet"]]
    for i in ids:
        if i not in kun:
            oneri.setdefault(i, []).append(e["t"]); continue
        f, t = kun[i]
        if not (f <= e["t"] <= t):
            ihlal.append((e["t"], i, f, t, e["b"][:50]))
print("madde:", len(E), "künye:", len(kun))
print("ÖNERİLEN (künyesiz) id:", {k: len(v) for k, v in oneri.items()})
print("PENCERE İHLALİ:", len(ihlal))
for x in ihlal: print("  ", x)
