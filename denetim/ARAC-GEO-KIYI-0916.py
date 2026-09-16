# -*- coding: utf-8 -*-
"""GEOMETRI 0916 İKİNCİ TUR — üç kısa sınav. YALNIZ OKUR.
(a) KIYI ŞERİDİ: küçük/kıyı hücrelerinde boyanmayan pay, SEYRELT_TOL (0,03° ≈ 3,3 km)
    Douglas-Peucker'ının imzası mı? Ölçü: boyanmayan km² / hücre çevresi km = ortalama
    şerit genişliği; ve boyanmayanın yüzde kaçı kıyıya 4 km'den yakın.
    ÖNGÖRÜ (ölçümden önce): genişlik ≤ 3,3 km ve kıyıya yakın pay ≥ %70.
(b) TALLINN 1281: Fin kıyısında (59,8°K üstü) 'almanya' gövdesi var mı, altındaki taban
    hücre kimin, kur'u ne? (deniz aşırı devir payı adayı)
(c) 1392 Maraş kutusu: hangi gövdeler, uzun düz kenar, altındaki hücreler.
"""
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Point, Polygon, box, shape
from shapely.ops import unary_union
from shapely.strtree import STRtree
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import importlib.util
_sp = importlib.util.spec_from_file_location("geo", os.path.join(KOK, "denetim", "ARAC-GEO-OLCUM-0916.py"))
geo = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(geo)
DN = geo.js_oku("donemler.js"); DH = geo.js_oku("devletler_harita.js"); PG = geo.js_oku("petek_govde.js")
YER = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
PET = DN["PETEKLER"]; PGP = PG["PETEK_GOVDE_PARCA"]
ix = {p["a"]: i for i, p in enumerate(PET)}
cell = []
for q in PG["PETEK_GOVDE"]:
    ps = [Polygon(PGP[j][0], PGP[j][1:]) for j in q]
    cell.append(unary_union([p if p.is_valid else p.buffer(0) for p in ps]) if ps else Polygon())
agac = STRtree(cell)
kara = unary_union([shape(f["geometry"]) for f in json.load(open(
    os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))["features"]])


def govde(did, gun):
    if did in ("OSMANLI", "TABI"):
        for d in DN["DONEMLER"]:
            if d["f"] <= gun < d["t"]:
                return geo.coz(d.get("o" if did == "OSMANLI" else "v"), DN["PARCALAR"], DN["PARCA_HALKA"])
    for s in DH["DEVLET_HARITA"]:
        if s["id"] == did:
            for p in s["dnm"]:
                if p["f"] <= gun < p["t"]:
                    return geo.coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"])
    return None


out = {"a": [], "b": [], "c": {}}
for ad, gun in [("İmroz", "1352-03-01"), ("Limni", "1352-03-01"), ("Armutlu", "1323-01-01"), ("Beykoz", "1329-06-01"),
                ("Buraymî", "1820-01-08"), ("Östersund (Jämtland)", "1299-01-01"), ("Viyana", "1281-01-01"),
                ("Küngrat", "1281-01-01"), ("Alta", "1281-01-01")]:
    c = cell[ix[ad]]; lat = c.centroid.y
    g = govde(geo.sahip(YER[ad], gun), gun)
    bos = c.difference(g) if g is not None else c
    per = c.length * 111.32 * (0.5 + 0.5 * __import__("math").cos(__import__("math").radians(lat)))
    a = geo.km2(bos, lat)
    # kıyıyı ÖNCE hücre zarfına kırp, SONRA tamponla (dünya kıyısını tamponlamak dakikalar sürüyordu)
    yerel_kiyi = kara.intersection(c.envelope.buffer(0.1)).boundary.intersection(c.envelope.buffer(0.05))
    yakin = geo.km2(bos.intersection(yerel_kiyi.buffer(0.04)), lat)
    out["a"].append({"hucre": ad, "boyanmayan_km2": round(a), "cevre_km": round(per),
                     "ort_genislik_km": round(a / per, 2) if per else None,
                     "kiyiya_4km_pay_%": round(100 * yakin / a) if a else None})
# (b) Tallinn
g = govde("almanya", "1281-01-01")
kuzey = g.intersection(box(21.9, 59.8, 27.1, 60.9))
for p in (kuzey.geoms if hasattr(kuzey, "geoms") else [kuzey]):
    if isinstance(p, Polygon) and geo.km2(p, 60) > 5:
        rp = p.representative_point()
        alt = [PET[int(i)]["a"] for i in agac.query(rp) if cell[int(i)].contains(rp)]
        y = YER.get(alt[0]) if alt else None
        out["b"].append({"km2": round(geo.km2(p, 60)), "nokta": [round(rp.x, 2), round(rp.y, 2)], "alt_hucre": alt,
                         "alt_sahip_1281": geo.sahip(y, "1281-01-01") if y else None,
                         "alt_kur": y.get("kur") if y else None, "alt_ilk_s": (y.get("s") or [{}])[0] if y else None})
# (c) 1392 Maraş
B = box(36.17, 38.19, 36.64, 38.97)
gun = "1392-01-01"
for s in DH["DEVLET_HARITA"]:
    for p in s["dnm"]:
        if p["f"] <= gun < p["t"]:
            x = geo.coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"])
            xi = x.intersection(B)
            if not xi.is_empty and geo.km2(xi, 38.6) > 5:
                cells = sorted({PET[int(i)]["a"] + ":" + str(geo.sahip(YER.get(PET[int(i)]["a"], {}), gun))
                                for i in agac.query(xi) if cell[int(i)].intersection(xi).area > 1e-4})
                out["c"][s["id"]] = {"dnm": [p["f"], p["t"]], "km2_kutuda": round(geo.km2(xi, 38.6)),
                                     "uzun_kenar": geo.uzun_kenarlar(xi, 38.6), "alt_hucre": cells}
json.dump(out, open(os.path.join(KOK, "denetim", "OLCUM-GEO-KIYI-0916.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1, default=str)
print(json.dumps(out, ensure_ascii=False, indent=1, default=str))
