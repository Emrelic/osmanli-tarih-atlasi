# -*- coding: utf-8 -*-
"""GEOMETRI 0916 — REÇETE SINAVI (D029: reçete kendi testini geçmeli). YALNIZ OKUR.

Her örtüşme parçası için "davetsiz" gövde = parçanın altındaki taban hücrenin
SAHİBİ OLMAYAN taraf. Onun o günkü kendi hücreleri U ile:
   KAPAMA   = kapat(U, 0,15°) − U       (motorun `kapat`ı, mitre, birebir)
   B3       = kapat(U.simplify(0,02), 0,45°) − U   (B3 adayının üst sınırı)
ölçülür: parçanın yüzde kaçını üretiyorlar?
ÖNGÖRÜ (ölçümden önce): KAPAMA kovası ≥%60 kapsar.
REÇETE: KAPAMA_FIX = kapat(U) − (o gün BAŞKA bir sahibi olan hücreler).
   SINAV A: fix, parçayı hâlâ üretiyor mu? (beklenen ~0)
   SINAV B: fix, kapamanın MEŞRU dolgusunun (sahipsiz ya da kendi hücresi
            üstündeki) ne kadarını koruyor? (beklenen yüksek — yoksa reçete
            kapamayı öldürüyor demektir)
"""
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Polygon, box, Point
from shapely.ops import unary_union
from shapely.strtree import STRtree
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import importlib.util
_sp = importlib.util.spec_from_file_location("geo", os.path.join(KOK, "denetim", "ARAC-GEO-OLCUM-0916.py"))
geo = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(geo)


def kapat(g, r):
    k = g.buffer(r, join_style=2, mitre_limit=2.0).buffer(0).buffer(-r, join_style=2, mitre_limit=2.0)
    return unary_union([k.buffer(0), g])


DN = geo.js_oku("donemler.js"); PG = geo.js_oku("petek_govde.js")
YER = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
PET = DN["PETEKLER"]; PGP = PG["PETEK_GOVDE_PARCA"]
cell = []
for ix in PG["PETEK_GOVDE"]:
    ps = [Polygon(PGP[j][0], PGP[j][1:]) for j in ix]
    cell.append(unary_union([p if p.is_valid else p.buffer(0) for p in ps]) if ps else Polygon())
agac = STRtree(cell)
O = json.load(open(os.path.join(KOK, "denetim", "OLCUM-GEO-0916.json"), encoding="utf-8"))
norm = lambda s: {"OSMANLI": "OSM-o", "TABI": "OSM-v"}.get(s, s)
sat, top = [], {"parca": 0, "kapama_>=50": 0, "b3_>=50": 0, "hicbiri": 0}
for v in O["vakalar"]:
    gun = v["gun"]
    la0, la1, lo0, lo1 = v["kutu"]
    B = box(lo0 - 2, la0 - 2, lo1 + 2, la1 + 2)
    own = {}
    for i in agac.query(B):
        i = int(i); y = YER.get(PET[i]["a"])
        own[i] = norm(geo.sahip(y, gun)) if y else None
    for o in v["ortusme"]:
        for p in o["parca"]:
            if p["km2"] < 20:
                continue
            nk = Point(p["nokta"])
            alt = [i for i in agac.query(nk) if cell[int(i)].contains(nk)]
            if not alt:
                continue
            asil = own.get(int(alt[0]))
            davetsiz = o["b"] if asil == o["a"] else o["a"] if asil == o["b"] else None
            if davetsiz is None:
                sat.append({"vaka": v["id"], "parca_km2": p["km2"], "not": f"taban sahibi {asil} iki taraftan da değil"})
                continue
            U = unary_union([cell[i] for i, s in own.items() if s == davetsiz])
            baska = unary_union([cell[i] for i, s in own.items() if s not in (None, davetsiz)])
            # parça geometrisi: taban hücrenin içinde, noktanın çevresinde U dışı kalan kapama/B3 alanı
            K = kapat(U, 0.15).difference(U)
            B3 = kapat(U.simplify(0.02, preserve_topology=True), 0.45).difference(U)
            hc = cell[int(alt[0])]
            k_in = K.intersection(hc); b_in = B3.intersection(hc)
            # parçanın kendisi elde yok (json yalnız alan+nokta) → nokta testi + alan oranı
            k_kaps = K.buffer(0.005).contains(nk)
            b_kaps = B3.buffer(0.005).contains(nk)
            lat = nk.y
            fix = kapat(U, 0.15).difference(baska).difference(U)
            top["parca"] += 1
            if k_kaps: top["kapama_>=50"] += 1
            elif b_kaps: top["b3_>=50"] += 1
            else: top["hicbiri"] += 1
            sat.append({"vaka": v["id"], "davetsiz": davetsiz, "asil": asil, "hucre": PET[int(alt[0])]["a"],
                        "parca_km2": p["km2"], "kapama_noktayi_kapsar": k_kaps, "b3_noktayi_kapsar": b_kaps,
                        "kapama_bu_hucrede_km2": round(geo.km2(k_in, lat)),
                        "b3_bu_hucrede_km2": round(geo.km2(b_in, lat)),
                        "SINAV_A_fix_noktayi_kapsar": fix.buffer(0.005).contains(nk),
                        "SINAV_B_mesru_kapama_korunan_%": round(100 * fix.area / K.area, 1) if K.area else None})
json.dump({"ozet": top, "satir": sat},
          open(os.path.join(KOK, "denetim", "OLCUM-GEO-RECETE-0916.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print(top)
for s in sat:
    print(s)
