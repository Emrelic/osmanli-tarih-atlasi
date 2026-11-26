# -*- coding: utf-8 -*-
"""GEOMETRI 0916 — DALGA-0052 ekran görüntülerinin ölçümü (YALNIZ OKUR).

Her vaka = (madde, gün, kutu). Yayındaki çıktıdan (koşu 11: data/donemler.js ·
data/devletler_harita.js · data/petek_govde.js) o gün sahnede olan gövdeler
yeniden kurulur ve kutu içinde ölçülür:
  ① ÖRTÜŞME   iki FARKLI sahibin gövdesi aynı yeri boyuyor mu (km²)
  ② BOŞLUK    karada olup hiçbir gövdenin boyamadığı parçalar (km²)
  ③ ŞERİT     ince uzun parça (Polsby-Popper < 0,08) · uzun düz kenar (>120 km)
  ④ SAHİP     örtüşen/boşluk parçasının altındaki TABAN peteği kimin (petek_govde)
  ⑤ BAYATLIK  örtüşen yabancı dönemin (dnm) başlangıcı ile, altındaki peteğin
              sahip değişimi arasındaki ilişki: gövde, peteğin SONRAKİ bir
              değişimini görmüş mü?

⚠️ petek_govde ZAMANSIZ taban geometridir (kur:/bit: devirlerini taşımaz) —
   ④'ün cevabı "hangi taban petek", devredilmiş hâli değil.
⚠️ uret_petek İMPORT EDİLMEZ (modül düzeyinde üretim koşturur).
Kullanım:  py denetim/ARAC-GEO-OLCUM-0916.py  → denetim/OLCUM-GEO-0916.json
"""
import json, math, os, re, sys
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Polygon, MultiPolygon, box, shape, Point
from shapely.ops import unary_union
from shapely.strtree import STRtree

KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402  (yalnız okur)

VAKALAR = [
    ("H-0012",   "1605-10-03", 40.76, 45.33, 39.93, 48.92),
    ("H-0124",   "1679-01-01", 42.91, 45.04, 44.12, 46.59),
    ("H-0069",   "1642-02-26", 45.62, 48.26, 37.07, 44.12),
    ("H-0097-1", "1672-10-18", 50.98, 53.70, 27.74, 31.07),
    ("H-0097-2", "1672-10-18", 50.21, 50.84, 16.15, 18.24),
    ("H-0097-3", "1672-10-18", 53.83, 54.63, 16.20, 17.26),
    ("H-0097-4", "1672-10-18", 49.05, 50.02, 30.85, 33.24),
    ("H-0097-5", "1672-10-18", 44.20, 45.18, 44.19, 45.56),
    ("H-0099-1", "1672-10-18", 49.73, 50.40, 4.95, 6.21),
    ("H-0099-2", "1672-10-18", 49.65, 50.26, 3.07, 3.53),
    ("H-0099-3", "1672-10-18", 54.67, 56.20, -4.27, -2.61),
    ("H-0102",   "1672-08-27", 48.11, 53.66, 61.77, 68.96),
    ("H-0103",   "1672-08-27", 42.99, 47.12, 56.80, 62.31),
    ("H-0107",   "1672-08-27", 17.62, 20.68, 95.69, 99.31),
    ("H-0108",   "1672-08-27", 17.87, 20.37, 108.34, 111.26),
    ("H-0109",   "1672-08-27", 23.22, 24.77, 103.88, 107.46),
    ("H-0110",   "1672-08-27", 21.89, 23.26, 113.14, 115.43),
]


def js_oku(ad):
    t = open(os.path.join(KOK, "data", ad), encoding="utf-8").read()
    konum = [(m.group(1), m.end()) for m in re.finditer(r"window\.([A-Z_]+)\s*=\s*", t)]
    out = {}
    dec = json.JSONDecoder()
    for k, s in konum:
        out[k], _ = dec.raw_decode(t, s)
    return out


def coz(ix, parca, halka):
    polys = []
    for p in ix or []:
        hs = [parca[h] for h in halka[p]]
        try:
            pg = Polygon(hs[0], hs[1:])
            if not pg.is_valid:
                pg = pg.buffer(0)
            polys.append(pg)
        except Exception:
            pass
    return unary_union(polys) if polys else Polygon()


def km2(g, lat):
    return g.area * (111.32 ** 2) * math.cos(math.radians(lat))


def pp(g):
    return 4 * math.pi * g.area / (g.length ** 2) if g.length else 1


def uzun_kenarlar(g, lat, esik_km=120):
    n = 0
    en = 0
    geoms = g.geoms if hasattr(g, "geoms") else [g]
    for p in geoms:
        if not isinstance(p, Polygon):
            continue
        cs = list(p.exterior.coords)
        for a, b in zip(cs, cs[1:]):
            d = math.hypot((b[0] - a[0]) * 111.32 * math.cos(math.radians(lat)), (b[1] - a[1]) * 111.32)
            en = max(en, d)
            if d > esik_km:
                n += 1
    return n, round(en)


def sahip(y, g):
    for k in ("d",):
        for p in y.get(k) or []:
            if p["f"] <= g < p["t"]:
                return "OSMANLI"
    for p in y.get("v") or []:
        if p["f"] <= g < p["t"]:
            return "TABI"
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return p["d"]
    return None


def olaylar(y):
    ts = set()
    for k in ("s", "d", "v"):
        for p in y.get(k) or []:
            ts.add(p["f"]); ts.add(p["t"])
    for k in ("kur", "bit"):
        if y.get(k):
            ts.add(y[k])
    return sorted(ts)


def main():
    print("okunuyor: donemler.js · devletler_harita.js · petek_govde.js · yerleşim girdisi …")
    DN = js_oku("donemler.js")
    DH = js_oku("devletler_harita.js")
    PG = js_oku("petek_govde.js")
    YER = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
    PETEKLER = DN["PETEKLER"]
    pet_geo = [None] * len(PG["PETEK_GOVDE"])
    # PETEK_GOVDE_PARCA öğeleri parça (halka listesi) — doğrudan Polygon
    PGP = PG["PETEK_GOVDE_PARCA"]
    for i, ix in enumerate(PG["PETEK_GOVDE"]):
        ps = []
        for j in ix:
            try:
                q = Polygon(PGP[j][0], PGP[j][1:])
                ps.append(q if q.is_valid else q.buffer(0))
            except Exception:
                pass
        pet_geo[i] = unary_union(ps) if ps else Polygon()
    agac = STRtree(pet_geo)
    kara = unary_union([shape(f["geometry"]) for f in
                        json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"),
                                       encoding="utf-8"))["features"]])
    sonuc = {"taban": {"donemler_js_izi": "koşu 11 çıktısı (data/ damgası)",
                       "petek": len(PETEKLER), "yerlesim_girdi_simdi": len(YER)},
             "vakalar": []}
    for vid, gun, la0, la1, lo0, lo1 in VAKALAR:
        B = box(lo0, la0, lo1, la1)
        lat = (la0 + la1) / 2
        katman = {}  # sahip -> (geo, bilgi)
        for d in DN["DONEMLER"]:
            if d["f"] <= gun < d["t"]:
                for kat in ("o", "v"):
                    g = coz(d.get(kat), DN["PARCALAR"], DN["PARCA_HALKA"]).intersection(B)
                    if not g.is_empty:
                        katman["OSM-" + kat] = (g, {"f": d["f"], "t": d["t"]})
                for hi, hb in enumerate(d.get("h") or []):
                    g = coz(hb["g"], DN["PARCALAR"], DN["PARCA_HALKA"]).intersection(B)
                    if not g.is_empty:
                        katman[f"OSM-h{hi}"] = (g, {"f": d["f"], "t": d["t"]})
        for s in DH["DEVLET_HARITA"]:
            for p in s["dnm"]:
                if p["f"] <= gun < p["t"]:
                    g = coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"]).intersection(B)
                    if not g.is_empty:
                        katman[s["id"]] = (g, {"f": p["f"], "t": p["t"]})
        v = {"id": vid, "gun": gun, "kutu": [la0, la1, lo0, lo1], "katman": {}, "ortusme": [],
             "bosluk": [], "serit": []}
        for k, (g, bi) in katman.items():
            n, en = uzun_kenarlar(g, lat)
            v["katman"][k] = dict(bi, km2=round(km2(g, lat)), uzun_kenar=n, en_uzun_kenar_km=en)
            for p in (g.geoms if hasattr(g, "geoms") else [g]):
                if isinstance(p, Polygon) and km2(p, lat) > 30 and pp(p) < 0.08:
                    v["serit"].append({"sahip": k, "km2": round(km2(p, lat)), "pp": round(pp(p), 3),
                                       "merkez": [round(p.representative_point().x, 2),
                                                  round(p.representative_point().y, 2)]})
        ks = list(katman)
        for i in range(len(ks)):
            for j in range(i + 1, len(ks)):
                a, b = ks[i], ks[j]
                if a.startswith("OSM") and b.startswith("OSM"):
                    continue
                x = katman[a][0].intersection(katman[b][0])
                if x.is_empty or km2(x, lat) < 5:
                    continue
                parcalar = []
                for p in (x.geoms if hasattr(x, "geoms") else [x]):
                    if not isinstance(p, Polygon) or km2(p, lat) < 5:
                        continue
                    rp = p.representative_point()
                    alt = []
                    for q in agac.query(rp):
                        if pet_geo[int(q)].contains(rp):
                            ad = PETEKLER[int(q)]["a"]
                            y = YER.get(ad)
                            alt.append({"petek": ad,
                                        "sahip_gunde": sahip(y, gun) if y else "GIRDIDE_YOK",
                                        "olaylar": [t for t in (olaylar(y) if y else [])
                                                    if "1550" <= t <= "1700"]})
                    parcalar.append({"km2": round(km2(p, lat)), "nokta": [round(rp.x, 3), round(rp.y, 3)],
                                     "taban_petek": alt})
                v["ortusme"].append({"a": a, "a_dnm": katman[a][1], "b": b, "b_dnm": katman[b][1],
                                     "km2": round(km2(x, lat)), "parca": parcalar[:6]})
        boya = unary_union([g for g, _ in katman.values()]) if katman else Polygon()
        bos = kara.intersection(B).difference(boya)
        for p in sorted((bos.geoms if hasattr(bos, "geoms") else [bos]),
                        key=lambda p: -p.area)[:6]:
            if not isinstance(p, Polygon) or km2(p, lat) < 20:
                continue
            rp = p.representative_point()
            alt = []
            for q in agac.query(rp):
                if pet_geo[int(q)].contains(rp):
                    ad = PETEKLER[int(q)]["a"]
                    y = YER.get(ad)
                    alt.append({"petek": ad, "sahip_gunde": sahip(y, gun) if y else "GIRDIDE_YOK"})
            v["bosluk"].append({"km2": round(km2(p, lat)), "pp": round(pp(p), 3),
                                "nokta": [round(rp.x, 3), round(rp.y, 3)], "taban_petek": alt})
        sonuc["vakalar"].append(v)
        print(f"{vid:9} {gun}  katman {len(katman):2}  örtüşme {sum(o['km2'] for o in v['ortusme']):6} km²"
              f"  boşluk {sum(b['km2'] for b in v['bosluk']):6} km²  şerit {len(v['serit'])}")
    json.dump(sonuc, open(os.path.join(KOK, "denetim", "OLCUM-GEO-0916.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    print("→ denetim/OLCUM-GEO-0916.json")


if __name__ == "__main__":
    main()
