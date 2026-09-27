# -*- coding: utf-8 -*-
"""GOVDE-CAKISMA-0079 — Emre'nin gorsel pencerelerini TAZE govdeyle cizer.
Her govde yarı saydam + kenar cizgisi; ust uste binen yer renk karisimindan okunur.
Cikti: scratch dizini (arg1) altina PNG. data/ ve arac/a YAZMAZ."""
import sys, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.argv, _cikti = sys.argv[:1], sys.argv[1]
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import importlib.util
_s = importlib.util.spec_from_file_location("olc", os.path.join(os.path.dirname(os.path.abspath(__file__)), "GOVDE-CAKISMA-0079-olc.py"))
olc = importlib.util.module_from_spec(_s); _s.loader.exec_module(olc)
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import PathPatch
from matplotlib.path import Path
import numpy as np

RENK = {}
for d in olc.D2["DEVLET_HARITA"]:
    RENK["devlet:" + d["id"]] = d["renk"]
RENK["osmanli"] = "#8e0b22"; RENK["vassal"] = "#b2384a"


def yol(g):
    vs, cs = [], []
    for p in getattr(g, "geoms", [g]):
        if p.geom_type != "Polygon":
            continue
        for r in [p.exterior] + list(p.interiors):
            c = np.asarray(r.coords)
            vs.append(c); cs.append([Path.MOVETO] + [Path.LINETO] * (len(c) - 2) + [Path.CLOSEPOLY])
    return Path(np.concatenate(vs), np.concatenate(cs)) if vs else None


for ad, gun, kutu, _ in olc_pencere if False else []:
    pass

PENCERE = [
    ("H79-1", "1281-01-01", (42.02, 36.63, 43.11, 38.00)),
    ("H79-2", "1281-01-01", (36.73, 39.53, 41.81, 41.52)),
    ("H79-5", "1281-01-01", (103.97, 30.92, 110.73, 40.34)),
    ("H79-6", "1281-01-01", (103.38, 20.33, 112.73, 27.36)),
]
for ad, gun, kutu in PENCERE:
    x0, y0, x1, y1 = kutu
    G = olc.govdeler(gun, kutu)
    fig, ax = plt.subplots(figsize=(7, 7 * (y1 - y0) / (x1 - x0) / np.cos(np.radians((y0 + y1) / 2))))
    for gad, g, f, t in G:
        p = yol(g)
        if p is None:
            continue
        r = RENK.get(gad, "#888888")
        ax.add_patch(PathPatch(p, facecolor=r, alpha=0.45, edgecolor=r, lw=1.2))
        rp = g.intersection(olc.shapely.box(*kutu)).representative_point()
        ax.text(rp.x, rp.y, f"{gad}\n{f}..{t}", fontsize=7)
    for y in olc.sahne(gun, kutu, pay=0):
        ax.plot(y["lon"], y["lat"], "k.", ms=3)
        ax.text(y["lon"], y["lat"], " " + y["ad"][:14] + " [" + olc.etiket(y, gun)[:10] + "]", fontsize=5)
    ax.set_xlim(x0, x1); ax.set_ylim(y0, y1); ax.set_aspect(1 / np.cos(np.radians((y0 + y1) / 2)))
    ax.set_title(f"{ad} {gun} TAZE govde")
    fig.savefig(os.path.join(_cikti, ad + ".png"), dpi=110, bbox_inches="tight")
    plt.close(fig)
    print(ad, [(g[0], g[2], g[3]) for g in G])
