# -*- coding: utf-8 -*-
"""D-RENK-0073 — C: KAPALI POLIGON KURULABILIRLIGI.
Her devlet icin, verilen gunde yururlukteki hatlari zincirle; acik uclarin
kiyiya uzakligini olc. Kiyiya degen uc => poligon kiyiyi izleyerek KAPANIR."""
import io, json, math, collections, sys

from shapely.geometry import shape, LineString, MultiLineString, Point
from shapely.ops import linemerge, unary_union
from shapely.strtree import STRtree

SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\0f85f827-a96b-4a7c-bfd6-a06cab079a08\scratchpad"
K = json.load(io.open(SP + r"\hatlar.json", encoding="utf-8"))["kayitlar"]

print("kara maskesi yukleniyor (ne_10m_land.geojson)...")
gj = json.load(io.open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
kiyi = []
for f in gj["features"]:
    g = shape(f["geometry"])
    b = g.boundary
    if b.geom_type == "MultiLineString":
        kiyi.extend(list(b.geoms))
    elif b.geom_type == "LineString":
        kiyi.append(b)
agac = STRtree(kiyi)
print("  kiyi parcasi:", len(kiyi))

def kiyi_km(p):
    i = agac.nearest(p)
    g = kiyi[int(i)]
    d = p.distance(g)                      # derece
    return d * 111.32 * max(0.2, math.cos(math.radians(p.y)))

def yur(k, g):
    f = k.get("f") or "0000-01-01"
    t = k.get("t") or "9999-12-31"
    return f <= g <= t

ESIK_KM = 25.0

def olc(GUN):
    ac = [k for k in K if yur(k, GUN) and k["nokta"] >= 2]
    per = collections.defaultdict(list)
    for k in ac:
        for t in (k.get("taraflar") or []):
            per[t].append(LineString(k["hat"]))
    sonuc = {"RING": [], "KIYI": [], "ACIK": []}
    ayrinti = []
    for dev, hatlar in per.items():
        birlesik = linemerge(MultiLineString(hatlar)) if len(hatlar) > 1 else hatlar[0]
        parcalar = list(birlesik.geoms) if birlesik.geom_type == "MultiLineString" else [birlesik]
        acik_uc, ic_uc, uzak = 0, 0, []
        for p in parcalar:
            c = list(p.coords)
            if c[0] == c[-1]:
                continue                                  # kapali halka
            for uc in (c[0], c[-1]):
                acik_uc += 1
                d = kiyi_km(Point(uc))
                if d > ESIK_KM:
                    ic_uc += 1
                    uzak.append(round(d, 1))
        toplam_km = sum(p.length for p in parcalar) * 111.32
        if acik_uc == 0:
            hal = "RING"
        elif ic_uc == 0:
            hal = "KIYI"
        else:
            hal = "ACIK"
        sonuc[hal].append(dev)
        ayrinti.append({"devlet": dev, "hal": hal, "hat": len(hatlar), "parca": len(parcalar),
                        "acik_uc": acik_uc, "ic_uc": ic_uc,
                        "km": round(toplam_km), "ic_uc_uzaklik_km": sorted(uzak, reverse=True)[:4]})
    return ac, per, sonuc, ayrinti

for GUN in ["1923-10-29", "1914-07-28", "1878-07-13", "1821-09-15"]:
    ac, per, sonuc, ayrinti = olc(GUN)
    n = len(per)
    print()
    print("=== %s · yururlukte %d hat · hat tasiyan devlet %d ===" % (GUN, len(ac), n))
    for hal in ("RING", "KIYI", "ACIK"):
        print("  %-5s %3d  (%%%.0f)" % (hal, len(sonuc[hal]), 100.0 * len(sonuc[hal]) / max(1, n)))
    if GUN == "1923-10-29":
        json.dump(ayrinti, io.open(SP + r"\kapali_1923.json", "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)
        print("  --- 12 ornek ---")
        for a in sorted(ayrinti, key=lambda x: -x["km"])[:12]:
            print("   %-26s %-5s hat=%2d parca=%2d acik_uc=%2d ic_uc=%2d %6d km  ic_uc_km=%s"
                  % (a["devlet"], a["hal"], a["hat"], a["parca"], a["acik_uc"],
                     a["ic_uc"], a["km"], a["ic_uc_uzaklik_km"]))
