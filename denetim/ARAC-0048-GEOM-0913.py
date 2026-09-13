# -*- coding: utf-8 -*-
"""PAKET-ARAS0048 — yayındaki üretilmiş geometriyi (donemler.js + devletler_harita.js)
bir gün ve kutu için SALT OKUR. Proje verisine dokunmaz.
py denetim/ARAC-0048-GEOM-0913.py GUN LAT1 LAT2 LON1 LON2
Basar: o gün aktif DONEMLER kaydı (Osmanlı o / tâbi v / serbest sb), kutuyu kesen
yabancı devlet gövdeleri (id · parça sayısı · alan · kutu içi alan · geçerlilik),
Osmanlı/tâbi parçaları ve serbest hatlar (u değeri, segment uzunlukları).
"""
import io, os, sys, json, re, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
from shapely.geometry import Polygon, box, LineString
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def oku(yol, adlar):
    s = open(os.path.join(KOK, yol), encoding="utf-8").read()
    out = {}
    for ad in adlar:
        m = re.search(r"window\." + ad + r"\s*=\s*", s)
        if not m:
            out[ad] = None
            continue
        dec = json.JSONDecoder()
        out[ad], _ = dec.raw_decode(s, m.end())
    return out


g = sys.argv[1]
a1, a2, o1, o2 = map(float, sys.argv[2:6])
K = box(o1, a1, o2, a2)
D = oku("data/devletler_harita.js", ["DEVLET_PARCALAR", "DEVLET_PARCA_HALKA", "DEVLET_HARITA"])
P = D["DEVLET_PARCALAR"]


def halka_poly(idx, havuz, halka):
    """halka havuzu varsa idx -> [dis, delik...] indeksleri; yoksa idx doğrudan halka."""
    if halka is not None and idx < len(halka) and isinstance(halka[idx], list):
        hs = [havuz[j] for j in halka[idx]]
        return Polygon(hs[0], hs[1:])
    h = havuz[idx]
    if h and isinstance(h[0][0], list):
        return Polygon(h[0], h[1:])
    return Polygon(h)


print("== yabancı gövdeler", g)
for dv in D["DEVLET_HARITA"]:
    for dn in dv["dnm"]:
        if not (dn["f"] <= g < dn["t"]):
            continue
        for gi in dn["g"]:
            try:
                pg = halka_poly(gi, P, D["DEVLET_PARCA_HALKA"])
            except Exception as e:
                print("  kurulamadi", dv["id"], gi, e)
                continue
            if not pg.intersects(K):
                continue
            gecerli = pg.is_valid
            if not gecerli:
                from shapely.validation import explain_validity
                neden = explain_validity(pg)
                pg = pg.buffer(0)
            else:
                neden = ""
            print(f"  {dv['id']:22} parça {gi:6} dnm {dn['f']}→{dn['t']}  alan {pg.area:.3f}°²  "
                  f"kutu-içi {pg.intersection(K).area:.3f}  valid {gecerli} {neden}  "
                  f"bbox {tuple(round(x,2) for x in pg.bounds)}  parça-sayısı {len(getattr(pg, 'geoms', [pg]))}")

M = oku("data/donemler.js", ["DONEMLER", "PARCALAR", "PARCA_HALKA", "SERBEST", "SERBEST_U"])
akt = [d for d in M["DONEMLER"] if d["f"] <= g < d["t"]]
print("== aktif DONEMLER", len(akt))
for d in akt:
    print("  ", d["f"], "→", d["t"], d.get("ad", "")[:70], "anahtarlar:", sorted(d.keys()))
    for alan in ("o", "v"):
        for pi in d.get(alan) or []:
            try:
                pg = halka_poly(pi, M["PARCALAR"], M["PARCA_HALKA"])
            except Exception as e:
                continue
            if pg.intersects(K):
                print(f"    {alan} parça {pi} kutu-içi {pg.intersection(K).area:.3f}°² valid {pg.is_valid} "
                      f"bbox {tuple(round(x,2) for x in pg.bounds)}")
    for si in d.get("sb") or []:
        ln = M["SERBEST"][si]
        L = LineString(ln)
        if not L.intersects(K):
            continue
        u = M["SERBEST_U"][si] if M["SERBEST_U"] else None
        seg = [math.dist(ln[i], ln[i + 1]) * 111 for i in range(len(ln) - 1)]
        seg.sort()
        print(f"    sb hat {si} u={u} km · {len(ln)} köşe · segment km min {seg[0]:.2f} "
              f"medyan {seg[len(seg)//2]:.2f} max {seg[-1]:.2f} · bbox {tuple(round(x,2) for x in L.bounds)}")
