# -*- coding: utf-8 -*-
"""Kutu+gun: izgara noktasi -> en yakin AKTIF sahipli yerlesim -> sahip (Voronoi yaklasigi, kara maskesiz).
  py denetim/ARAC-AVRUPA-TEYID-0082-IZGARA.py GUN latmin latmax lonmin lonmax [adim=0.25] [--surucu]
Cikti: sahip -> izgara payi + o sahibi suren yerlesimler (ad@lat,lon). STDERR'e girdi gurultusu gider.
"""
import sys, collections, math, os, io
sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
_o = sys.stdout; sys.stdout = io.StringIO()
import girdi
Y = girdi.yukle()
sys.stdout = _o
if isinstance(Y, tuple): Y = Y[0]
gun = sys.argv[1]; a, b, c, d = map(float, sys.argv[2:6])
adim = float(sys.argv[6]) if len(sys.argv) > 6 and not sys.argv[6].startswith("--") else 0.25
def sahip(y):
    for al, et in (("d", "OSMANLI"), ("v", None), ("s", None)):
        for p in y.get(al) or []:
            if p.get("f", "") <= gun < p.get("t", "9999"):
                if al == "v": return "tabi:" + str(p.get("kid", p.get("d", "?")))
                return et or p.get("d", "?")
    return None
P = []
for y in Y:
    if y.get("lat") is None: continue
    s = sahip(y)
    if s: P.append((y["lat"], y["lon"], s, y["ad"]))
say = collections.Counter(); surucu = collections.defaultdict(collections.Counter); n = 0
la = a
while la <= b:
    lo = c
    while lo <= d:
        k = math.cos(math.radians(la))
        best = min(P, key=lambda p: (p[0]-la)**2 + ((p[1]-lo)*k)**2)
        say[best[2]] += 1; surucu[best[2]][best[3]] += 1; n += 1
        lo += adim
    la += adim
for s, m in say.most_common():
    print(f"{s:28s} {100*m/n:5.1f}%  " + ", ".join(f"{ad}({x})" for ad, x in surucu[s].most_common(6)))
if "--harita" in sys.argv:
    harf = {}; kod = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    la = b
    print()
    while la >= a:
        satir = ""; lo = c
        while lo <= d:
            k = math.cos(math.radians(la))
            best = min(P, key=lambda p: (p[0]-la)**2 + ((p[1]-lo)*k)**2)
            harf.setdefault(best[2], kod[len(harf) % len(kod)])
            satir += harf[best[2]]; lo += adim
        print(f"{la:6.2f} {satir}"); la -= adim
    print("       " + "  ".join(f"{h}={s}" for s, h in harf.items()))
