# -*- coding: utf-8 -*-
"""devletler.js alan sayimi (olcum aleti, veri yazmaz)."""
import io, os, sys, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
D = girdi.oku_devletler()
c = collections.Counter()
for d in D:
    for k in d:
        c[k] += 1
print(len(D), "kayit")
for k, v in c.most_common():
    print(k, v)
