# -*- coding: utf-8 -*-
"""UFUK BANDI ölçümü (HAVVA 17 Kasım): devlet başına alan — taban pd(b) vs bant_ham(b).
Girdi: ARAC-B-GORUNUM-UFUK-0072.py --dokum çıktıları (bantli.pkl, t40/t56/t80.pkl).
Kullanım: py denetim/ARAC-UFUK-FRANSA-ALAN-1117.py <klasör> [alan-eşiği-km2]
"""
import io
import math
import pickle
import sys

import shapely
from shapely.geometry import Polygon
from shapely.ops import unary_union

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
D = sys.argv[1]
ESIK = float(sys.argv[2]) if len(sys.argv) > 2 else 2000


def L(p):
    return pickle.load(open(p, "rb"))


def coz(w):
    return [shapely.from_wkb(x) if x else Polygon() for x in w]


def km2(g):
    if g is None or g.is_empty:
        return 0.0
    return abs(g.area) * 111.32 ** 2 * max(.05, math.cos(math.radians(g.centroid.y)))


B = L(D + "/bantli.pkl")
T = {s: L(D + "/t%d.pkl" % s) for s in (40, 56, 80)}
sah = B["sahiplik"]
ham = {float(k): coz(v) for k, v in B["bant_ham"].items()}
tab = {s: coz(T[s]["pd"]) for s in T}
print("bant_ham bütçeleri:", sorted(ham))


def govde(g, gun, kim):
    gs = [g[i] for i, dn in enumerate(sah)
          if i < len(g) and not g[i].is_empty
          and any(f <= gun < t and k == kim for f, t, k in dn)]
    return unary_union(gs) if gs else Polygon()


ihlal = 0
for gun in ("1520-06-15", "1683-06-15", "1800-06-15"):
    print(gun)
    for kim in sorted(set(k for dn in sah for f, t, k in dn if f <= gun < t)):
        r = [km2(govde(tab[s], gun, kim)) for s in (40, 56, 80)]
        rh = [km2(govde(ham[s], gun, kim)) for s in (40, 56, 80) if s in ham]
        if max(r + rh + [0]) > ESIK:
            mono_t = all(r[i] <= r[i + 1] * 1.001 for i in range(2))
            mono_h = all(rh[i] <= rh[i + 1] * 1.001 for i in range(len(rh) - 1))
            if not (mono_t and mono_h):
                ihlal += 1
            print("  %-26s taban %s | bant_ham %s %s" % (
                kim, ["%d" % x for x in r], ["%d" % x for x in rh],
                "" if mono_t and mono_h else "MONOTON-IHLAL"))
print("monotonluk ihlali:", ihlal)
