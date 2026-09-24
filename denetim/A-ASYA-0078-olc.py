# -*- coding: utf-8 -*-
"""A-ASYA-0078 — 1923-09-01'de kapsam kutularında A katmanı ÖLÇÜMÜ (yazmaz).

Kutu başına: ① girdi noktaları ve o günkü sahipleri (s/d/v/isg)
             ② 0,1° ızgarada kara hücrelerinin hangi yabancı GÖVDEDE olduğu
                (devletler_harita.js, son üretim) — gövdesiz = delik
Pozitif kontrol: Kunming Çin gövdesinde mi, Kuçing Sarawak gövdesinde mi.
Kullanım: py denetim/A-ASYA-0078-olc.py [--nokta]
"""
import json
import os
import sys
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi  # noqa: E402
from shapely.geometry import Point, Polygon, shape  # noqa: E402
from shapely.ops import unary_union  # noqa: E402
from shapely.strtree import STRtree  # noqa: E402

G = "1923-09-01"
KUTULAR = {  # ad: (lat0, lat1, lon0, lon1)
    "Yunnan-GB": (21.0, 26.5, 97.5, 104.0),
    "Pamir": (36.5, 39.6, 71.0, 75.6),
    "Borneo": (-4.3, 7.5, 108.5, 119.5),
    "Timor": (-10.5, -8.1, 123.4, 127.4),
    "Sahalin": (45.8, 54.5, 141.5, 144.8),
}


def aktif(y, alan):
    return [p for p in (y.get(alan) or []) if p.get("f", "") <= G < p.get("t", "9999")]


def sahip(y):
    if y.get("kur") and y["kur"] > G:
        return "(kurulmamış)"
    parca = []
    for p in aktif(y, "s"):
        parca.append("s:" + str(p.get("d")))
    for p in aktif(y, "d"):
        parca.append("d:OSMANLI")
    for p in aktif(y, "v"):
        parca.append("v:" + str(p.get("kid") or p.get("k")))
    for p in aktif(y, "isg"):
        parca.append("isg:" + str(p.get("d")))
    return " ".join(parca) or "SAHİPSİZ"


def _dizi(metin, ad):
    i = metin.index("window." + ad + " = ") + len("window." + ad + " = ")
    return json.loads(metin[i:metin.index("];", i) + 1])


def govdeler():
    metin = open("data/devletler_harita.js", encoding="utf-8").read()
    havuz, kayit = _dizi(metin, "DEVLET_PARCALAR"), _dizi(metin, "DEVLET_HARITA")
    ph = _dizi(metin, "DEVLET_PARCA_HALKA")
    del metin
    geo, ids = [], []
    for k in kayit:
        for d in k.get("dnm") or []:
            if d.get("f") and d.get("t") and d["f"] <= G < d["t"]:
                for i in d.get("g") or []:
                    h = [havuz[j] for j in ph[i]]  # app.js parcaCoz: ilk halka kabuk, gerisi delik
                    p = Polygon(h[0], h[1:])
                    if not p.is_valid:
                        p = p.buffer(0)
                    if not p.is_empty:
                        geo.append(p)
                        ids.append(k.get("id"))
    return geo, ids


def main():
    Y = girdi.yukle(sessiz=True)
    if isinstance(Y, tuple):
        Y = Y[0]
    geo, ids = govdeler()
    agac = STRtree(geo)
    print("girdi noktası %d · %s günü yabancı gövde parçası %d" % (len(Y), G, len(geo)))

    def govde_at(lon, lat):
        pt = Point(lon, lat)
        bul = [ids[i] for i in agac.query(pt) if geo[i].covers(pt)]
        return ",".join(sorted(set(bul))) or "—GÖVDESİZ—"

    # pozitif kontrol
    for ad, lon, lat in (("Kunming", 102.71, 25.04), ("Kuçing", 110.34, 1.55),
                         ("Dili", 125.57, -8.56), ("Taşkent", 69.24, 41.30)):
        print("  kontrol %-8s → %s" % (ad, govde_at(lon, lat)))

    ne = json.load(open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
    kara = unary_union([shape(f["geometry"]) for f in ne["features"]])

    for kad, (a0, a1, o0, o1) in KUTULAR.items():
        print("\n=== %s  %.1f..%.1f K · %.1f..%.1f D ===" % (kad, a0, a1, o0, o1))
        nok = [y for y in Y if y.get("lat") is not None
               and a0 <= y["lat"] <= a1 and o0 <= y["lon"] <= o1]
        print("  nokta: %d" % len(nok))
        if "--nokta" in sys.argv:
            for y in sorted(nok, key=lambda y: (-y["lat"], y["lon"])):
                print("   %-34s %7.3f %8.3f  %-40s gövde:%s  [%s]" % (
                    y["ad"][:34], y["lat"], y["lon"], sahip(y)[:40],
                    govde_at(y["lon"], y["lat"]), y["_kaynak"]))
        kutu_kara = kara.intersection(Polygon([(o0, a0), (o1, a0), (o1, a1), (o0, a1)]))
        say = Counter()
        kare = Counter()
        n = 0
        adim = 0.1
        lat = a0 + adim / 2
        while lat < a1:
            lon = o0 + adim / 2
            while lon < o1:
                if kutu_kara.contains(Point(lon, lat)):
                    gg = govde_at(lon, lat)
                    say[gg] += 1
                    if gg == "—GÖVDESİZ—":
                        kare[(int(lat // 1), int(lon // 1))] += 1
                    n += 1
                lon += adim
            lat += adim
        print("  kara hücresi (0,1°): %d" % n)
        if "--kare" in sys.argv:
            print("  gövdesiz hücre, 1° karelerde (≥10):")
            for (ka, ko), v in sorted(kare.items(), key=lambda x: (-x[0][0], x[0][1])):
                if v >= 10:
                    print("    %3d..%3d K  %4d..%4d D : %3d" % (ka, ka + 1, ko, ko + 1, v))
        for k, v in say.most_common():
            print("   %-40s %5d  %%%.1f" % (k, v, 100.0 * v / n if n else 0))


if __name__ == "__main__":
    main()
