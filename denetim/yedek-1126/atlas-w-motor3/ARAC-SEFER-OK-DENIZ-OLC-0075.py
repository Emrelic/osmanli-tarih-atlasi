# -*- coding: utf-8 -*-
"""SEFER-OK-0075 / H-0033 — deniz okları karadan geçiyor mu? ÖLÇÜM (yalnız okur).

Girdi : node denetim/ARAC-SEFER-OK-DUMP-0075.js <seferler.json>   (117 kayıt)
Kara  : veri-kaynak/ne_10m_land.geojson — uret_petek.py'nin okuduğu GERÇEK kara
        (motor_kara.geojson DEĞİL: o motorun çıktısıdır, ~200 km tavanla çizilmiş).
Çıktı : kayıt başına, uygulamanın ÇİZDİĞİ hat (kavisli) üzerindeki kara km'si.

Kavis, js/app.js seferKavisliYol() ile BİREBİR aynı formül (eşik 200 km, %6 sapma,
12 adım) — ölçü, ekranda görünen çizgiyi ölçer, kaydın ham yol'unu değil.
"""
import json, math, sys, os
from shapely.geometry import shape, LineString
from shapely.strtree import STRtree

KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
LAND = os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson")

def kmarasi(la1, lo1, la2, lo2):
    R = 6371.0088
    p1, p2 = math.radians(la1), math.radians(la2)
    dp, dl = p2 - p1, math.radians(lo2 - lo1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(a))

def kavisli(yol, esik=200, oran=0.06, adim=12):
    out = [yol[0]]
    for i in range(1, len(yol)):
        a, b = yol[i - 1], yol[i]
        if kmarasi(a[1], a[0], b[1], b[0]) <= esik:
            out.append(b); continue
        ox, oy = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
        dx = (b[0] - a[0]) * math.cos(math.radians(oy)); dy = b[1] - a[1]
        boy = math.sqrt(dx * dx + dy * dy) or 1e-9
        sap = boy * oran
        kx = ox + (-dy / boy) * sap / max(0.2, math.cos(math.radians(oy)))
        ky = oy + (dx / boy) * sap
        for t in range(1, adim + 1):
            u = t / adim; v = 1 - u
            out.append([v * v * a[0] + 2 * v * u * kx + u * u * b[0],
                        v * v * a[1] + 2 * v * u * ky + u * u * b[1]])
    return out

def kara_yukle():
    g = json.load(open(LAND, encoding="utf-8"))
    geoms = [shape(f["geometry"]).buffer(0) for f in g["features"]]
    return geoms, STRtree(geoms)

def kara_km(yol, geoms, agac):
    """yol boyunca kara üstünde kalan km (parça parça, yerel km)."""
    top = kara = 0.0
    for i in range(1, len(yol)):
        a, b = yol[i - 1], yol[i]
        seg = LineString([a, b])
        km = kmarasi(a[1], a[0], b[1], b[0])
        top += km
        if km == 0: continue
        ic = 0.0
        for idx in agac.query(seg):
            k = seg.intersection(geoms[idx])
            if not k.is_empty:
                ic += k.length
        kara += km * min(1.0, ic / seg.length)
    return kara, top

if __name__ == "__main__":
    src = sys.argv[1]
    d = json.load(open(src, encoding="utf-8"))
    geoms, agac = kara_yukle()
    rows = []
    for s in d:
        tur = s.get("tur", "sefer")
        ham = s["yol"]
        egri = kavisli(ham)
        k0, t0 = kara_km(ham, geoms, agac)
        k1, t1 = kara_km(egri, geoms, agac)
        rows.append({"ns": s["_ns"], "i": s["_i"], "ad": s.get("ad"), "tur": tur,
                     "f": s.get("f"), "t": s.get("t"), "n_nokta": len(ham),
                     "toplam_km": round(t0), "ham_kara_km": round(k0),
                     "cizilen_kara_km": round(k1),
                     "cizilen_kara_yuzde": round(100 * k1 / t1, 1) if t1 else 0})
    json.dump(rows, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    deniz = [r for r in rows if r["tur"] == "deniz"]
    print("kayıt", len(rows), "· deniz", len(deniz))
    print("--- DENİZ türü (ham - çizilen kara %):")
    for r in sorted(deniz, key=lambda r: -r["cizilen_kara_yuzde"]):
        print("  %5.1f%%  ham %4d km · çizilen %4d km / %5d km · %s" % (
            r["cizilen_kara_yuzde"], r["ham_kara_km"], r["cizilen_kara_km"], r["toplam_km"], r["ad"]))
