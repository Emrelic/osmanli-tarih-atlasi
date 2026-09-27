# -*- coding: utf-8 -*-
"""BOGAZ-OLCUM-0081 — SINIF sayimi (kosu 16 petek_govde.js uzerinde, salt okur).

Soru: peteğin tohumu İÇERMEYEN bir parçası, tohumdan düz hattı DENİZDEN geçtiği
hâlde petekte kalmış mı? `uret_petek.py:3837` 200 km² altını ızgaraya SORMADAN
bırakıyor (`KV_MIN_KM2`). Bu parçaları sayar ve her biri için düz hattı KARADAN
geçen en yakın başka tohumu (aday alıcı) bulur.
"""
import sys, json, math, re, pickle, sqlite3
import shapely
from shapely.geometry import Point, LineString, Polygon
from shapely.strtree import STRtree
KOSU = "C:/atlas-kosu16"
sys.path.insert(0, KOSU + "/arac")
import girdi

b = sqlite3.connect(f"file:{KOSU}/_motor_onbellek/motor_onbellek.sqlite?mode=ro", uri=True)
KARA = None
for (blob,) in b.execute("select deger from kayit where katman='k1' order by zaman desc"):
    v = pickle.loads(blob)
    if isinstance(v, tuple) and len(v) == 4 and isinstance(v[3], list):
        KARA = v[1]; break
shapely.prepare(KARA)

def js(yol, ad):
    s = open(yol, encoding="utf-8").read()
    m = re.search(r"window\." + ad + r"\s*=\s*", s)
    return json.JSONDecoder().raw_decode(s, m.end())[0]
PARCA = js(KOSU + "/data/petek_govde.js", "PETEK_GOVDE_PARCA")
GOVDE = js(KOSU + "/data/petek_govde.js", "PETEK_GOVDE")
PET = js(KOSU + "/data/donemler.js", "PETEKLER")
Y = girdi.yukle(sessiz=True)
koor = {}
for y in Y: koor.setdefault(y["ad"], (y["lon"], y["lat"]))

def km2(g):
    return g.area * 111.32 ** 2 * math.cos(math.radians(g.centroid.y))

tohum = [Point(koor[p["a"]]) if p["a"] in koor else None for p in PET]
gecerli = [k for k, t in enumerate(tohum) if t is not None]
agac = STRtree([tohum[k] for k in gecerli])

satir = []
for k, p in enumerate(PET):
    t = tohum[k]
    if t is None or GOVDE[k] is None: continue
    for q in (GOVDE[k] if isinstance(GOVDE[k], list) else [GOVDE[k]]):
        r = PARCA[q]
        try: g = Polygon(r[0], r[1:])
        except Exception: continue
        if g.is_empty or g.buffer(1e-4).contains(t): continue
        a = km2(g)
        if a < 1.0: continue
        rp = g.representative_point()
        if KARA.contains(LineString([t, rp])): continue   # kara hattı: Voronoi meşru
        # aday alıcı: en yakın 12 tohumdan düz hattı KARADAN geçen ilki
        aday = None
        for ix in agac.query_nearest(rp, all_matches=False, return_distance=False) if False else []:
            pass
        yakin = sorted(((tohum[gecerli[i]].distance(rp), gecerli[i])
                        for i in agac.query(rp.buffer(1.5))), key=lambda z: z[0])[:15]
        for d, j in yakin:
            if j == k: continue
            if KARA.contains(LineString([tohum[j], rp])):
                aday = (PET[j]["a"], round(girdi.km(rp.y, rp.x, tohum[j].y, tohum[j].x), 1)); break
        satir.append({"petek": p["a"], "km2": round(a, 1), "lon": round(rp.x, 3), "lat": round(rp.y, 3),
                      "tohum_km": round(girdi.km(rp.y, rp.x, t.y, t.x), 1),
                      "esik_alti": a < 200.0, "aday_kara_hatli": aday})
alt = [s for s in satir if s["esik_alti"]]
print(f"tohumsuz + düz hattı denizden geçen parça: {len(satir)} · {sum(s['km2'] for s in satir):,.0f} km²")
print(f"  200 km² ALTI (ızgaraya sorulmadı): {len(alt)} · {sum(s['km2'] for s in alt):,.0f} km²")
print(f"    kara hatlı aday alıcısı OLAN: {sum(1 for s in alt if s['aday_kara_hatli'])}")
print(f"  200 km² ÜSTÜ (ızgara 'aynı sahip' dedi ya da kilit/kararsız): {len(satir)-len(alt)}")
for s in sorted(satir, key=lambda s: -s["km2"])[:25]: print(" ", s)
json.dump(satir, open("C:/atlas/denetim/BOGAZ-OLCUM-0081-sinif.json", "w", encoding="utf-8"),
          ensure_ascii=False, indent=0)
