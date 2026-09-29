# -*- coding: utf-8 -*-
"""Kutu+gun icin yerlesim noktalarinin o gunku sahibi (s:/d:/v:) dokumu.
  py denetim/ARAC-AVRUPA-TEYID-0082-KUTU.py GUN latmin latmax lonmin lonmax [--ad]
"""
import sys, collections
sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi
Y = girdi.yukle()
if isinstance(Y, tuple): Y = Y[0]
gun = sys.argv[1]; a, b, c, d = map(float, sys.argv[2:6]); ad = "--ad" in sys.argv
def akt(y, al):
    return [p for p in (y.get(al) or []) if p.get("f", "") <= gun < p.get("t", "9999")]
say = collections.Counter(); ornek = collections.defaultdict(list)
for y in Y:
    if y.get("lat") is None or not (a <= y["lat"] <= b and c <= y["lon"] <= d): continue
    s = akt(y, "s"); o = akt(y, "d"); v = akt(y, "v")
    if o: k = "OSMANLI"
    elif v: k = "tabi:" + v[0].get("kid", v[0].get("d", "?"))
    elif s: k = s[0].get("d", "?")
    else:
        if not (y.get("s") or y.get("d") or y.get("v")): k = "(donemsiz)"
        else: k = "(yok bugun)"
    say[k] += 1; ornek[k].append((y["ad"], round(y["lat"], 2), round(y["lon"], 2)))
for k, n in say.most_common():
    print(k, n, ([f"{x[0]}@{x[1]},{x[2]}" for x in ornek[k][:12]] if ad else ""))
