# -*- coding: utf-8 -*-
"""Ada gore yerlesim: enlem/boylam + s:/d:/v: pencereleri. py ...-NOKTA.py "Chambéry" "Nice" ..."""
import sys, io, unicodedata
sys.path.insert(0, "arac"); sys.stdout.reconfigure(encoding="utf-8", errors="replace")
o = sys.stdout; sys.stdout = io.StringIO()
import girdi; Y = girdi.yukle(); sys.stdout = o
if isinstance(Y, tuple): Y = Y[0]
def n(s): return unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().lower()
for q in sys.argv[1:]:
    for y in Y:
        if n(q) in n(y["ad"]):
            print(y["ad"], y.get("lat"), y.get("lon"))
            for al in ("s", "d", "v"):
                for p in y.get(al) or []:
                    print("   ", al, p.get("d") or p.get("kid"), p.get("f"), "->", p.get("t"))
