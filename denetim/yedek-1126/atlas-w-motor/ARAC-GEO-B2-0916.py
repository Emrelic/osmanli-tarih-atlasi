# -*- coding: utf-8 -*-
"""GEOMETRI 0916 — HİPOTEZ-4: büyük örtüşmeler B2 KÖPRÜSÜNDEN. YALNIZ OKUR.

`_b2_enklav_birlestir` (uret_petek.py) BİREBİR kopyalanır (yamuk+kavis,
B2_ENKLAV_KM=250, B2_KAVIS=0,35, en_ana tavanı 3°) ve davetsiz gövdenin o günkü
taban hücreleri U üzerinde koşulur. Sınav: köprü bantları, REÇETE sınavında
açıklanamayan örtüşme noktalarını kapsıyor mu?
Motorun "başkasının toprağı" sınavı (`_bant_baskasinin_topragini_kesiyor_mu`)
YALNIZ ORTA ÇİZGİYİ 10 km adımla örnekler; burada aynı sınav + BANDIN
kendisinin başka sahibin hücresine taşan alanı ölçülür.
ÖNGÖRÜ (ölçümden önce): açıklanamayan 13 parçanın ≥8'ini B2 bantları kapsar.
⚠️ Yaklaşık: U taban hücrelerdir (devir/dolgu/KARA kesimi yok) ⇒ motorun gerçek
   parça kümesinden sapabilir; sonuç "B2 bu yeri üretebilir mi"yi söyler.
"""
import json, math, os, sys
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import LineString, Point, Polygon, box
from shapely.ops import nearest_points, unary_union
from shapely.strtree import STRtree
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import importlib.util
_sp = importlib.util.spec_from_file_location("geo", os.path.join(KOK, "denetim", "ARAC-GEO-OLCUM-0916.py"))
geo = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(geo)
B2_ENKLAV_KM, B2_KAVIS = 250.0, 0.35
kmd = lambda lat: 111.32 * max(0.15, math.cos(math.radians(lat)))


def bantlar(g):
    ps = list(g.geoms) if g.geom_type == "MultiPolygon" else [g]
    ps.sort(key=lambda p: p.area, reverse=True)
    ana, out = ps[0], []
    for p in ps[1:]:
        n1, n2 = nearest_points(ana, p)
        lat = (n1.y + n2.y) / 2
        d = math.hypot((n2.x - n1.x) * kmd(lat), (n2.y - n1.y) * 110.574)
        if d > B2_ENKLAV_KM or d < 1e-6:
            continue
        x0, y0, x1, y1 = p.bounds
        la = (y0 + y1) / 2
        w_e = max(min((x1 - x0) * kmd(la), (y1 - y0) * 110.574), 25.0)
        e_enk = (w_e / 2) / kmd(la)
        e_ana = min(2 * e_enk, 3.0)
        dx, dy = n2.x - n1.x, n2.y - n1.y
        bo = math.hypot(dx, dy) or 1e-9
        px, py = -dy / bo, dx / bo
        sol, sag = [], []
        for i in range(25):
            t = i / 24
            w = (e_ana + (e_enk - e_ana) * t) * (1 - B2_KAVIS * math.sin(math.pi * t))
            cx, cy = n1.x + dx * t, n1.y + dy * t
            sol.append((cx + px * w, cy + py * w)); sag.append((cx - px * w, cy - py * w))
        out.append((LineString([n1, n2]), Polygon(sol + sag[::-1]).buffer(0), round(d), round(e_ana * 111, 1)))
    return out


DN = geo.js_oku("donemler.js"); PG = geo.js_oku("petek_govde.js")
YER = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
PET = DN["PETEKLER"]; PGP = PG["PETEK_GOVDE_PARCA"]
cell = []
for ix in PG["PETEK_GOVDE"]:
    ps = [Polygon(PGP[j][0], PGP[j][1:]) for j in ix]
    cell.append(unary_union([p if p.is_valid else p.buffer(0) for p in ps]) if ps else Polygon())
agac = STRtree(cell)
nokta_agac = STRtree([Point(y["lon"], y["lat"]) for y in YER.values()])
YL = list(YER.values())
norm = lambda s: {"OSMANLI": "OSM-o", "TABI": "OSM-v"}.get(s, s)
R = json.load(open(os.path.join(KOK, "denetim", "OLCUM-GEO-RECETE-0916.json"), encoding="utf-8"))
O = {v["id"]: v for v in json.load(open(os.path.join(KOK, "denetim", "OLCUM-GEO-0916.json"), encoding="utf-8"))["vakalar"]}
sonuc, n_ac, n_b2 = [], 0, 0
for s in R["satir"]:
    if "davetsiz" not in s or s["kapama_noktayi_kapsar"] or s["b3_noktayi_kapsar"]:
        continue
    n_ac += 1
    v = O[s["vaka"]]
    gun = v["gun"]
    # parça noktası
    nk = None
    for o in v["ortusme"]:
        for p in o["parca"]:
            if p["km2"] == s["parca_km2"] and p["taban_petek"] and p["taban_petek"][0]["petek"] == s["hucre"]:
                nk = Point(p["nokta"])
    la0, la1, lo0, lo1 = v["kutu"]
    B = box(lo0 - 6, la0 - 6, lo1 + 6, la1 + 6)
    own = {}
    for i in agac.query(B):
        i = int(i); y = YER.get(PET[i]["a"])
        own[i] = norm(geo.sahip(y, gun)) if y else None
    U = unary_union([cell[i] for i, o_ in own.items() if o_ == s["davetsiz"]])
    baska = unary_union([cell[i] for i, o_ in own.items() if o_ not in (None, s["davetsiz"])])
    kapsayan = None
    for hat, bant, d, gen in bantlar(U):
        if bant.buffer(0.005).contains(nk):
            # motorun sınavı: orta çizgi üzerindeki her 10 km noktasının en yakın yerleşimi davetsizin mi?
            n = max(2, int(hat.length * 111.32 / 10))
            merkez_serbest = True
            for k in range(n + 1):
                q = hat.interpolate(k / n, normalized=True)
                yy = YL[int(nokta_agac.nearest(q))]
                if norm(geo.sahip(yy, gun)) != s["davetsiz"]:
                    merkez_serbest = False; break
            lat = nk.y
            kapsayan = {"bant_uzunluk_km": d, "bant_yari_genislik_ana_km": gen,
                        "motor_orta_cizgi_sinavi_gecer": merkez_serbest,
                        "bandin_baska_sahip_hucresine_tasan_km2": round(geo.km2(bant.intersection(baska), lat))}
            break
    if kapsayan:
        n_b2 += 1
    sonuc.append({**{k: s[k] for k in ("vaka", "davetsiz", "asil", "hucre", "parca_km2")}, "b2": kapsayan})
ozet = {"aciklanamayan": n_ac, "b2_kapsar": n_b2}
json.dump({"ozet": ozet, "satir": sonuc}, open(os.path.join(KOK, "denetim", "OLCUM-GEO-B2-0916.json"), "w",
                                                encoding="utf-8"), ensure_ascii=False, indent=1)
print(ozet)
for r in sonuc:
    print(r)
