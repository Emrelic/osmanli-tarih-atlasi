# -*- coding: utf-8 -*-
"""GEOMETRI 0916 — HİPOTEZ-6: hücresiz şerit = PUAN MERCEĞİ. YALNIZ OKUR.

`_puan_bolgesi`: her aktif noktadan 0-200 km 4p · 200-300 2p · 300-400 1p,
toplam ≥4 ise boyanabilir. İki nokta 400-600 km arayla dururken aradaki
200-300 km kuşağında 2+2=4 ⇒ iki tavan dairesinin ARASINDA ince bir mercek
boyanabilir hâle gelir; boşluğu önce kapat/B1/B3 doldurmuşsa PUAN kesimi
geriye YALNIZ bu merceği bırakır.
Sınav: şerit noktasında puan ≥4 mü, ve puan yalnız 200-300 km kuşağından mı?
Karşı sınav: şeridin 60 km yanındaki boyanmamış noktada puan <4 mü?
ÖNGÖRÜ (ölçümden önce): 4 şerit noktasının ≥3'ünde puan tam 4-5 ve 0-200
kuşağından katkı YOK.
"""
import json, math, os, sys
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import importlib.util
_sp = importlib.util.spec_from_file_location("geo", os.path.join(KOK, "denetim", "ARAC-GEO-OLCUM-0916.py"))
geo = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(geo)
HALKA = ((200.0, 4), (300.0, 2), (400.0, 1))
YL = [y for y in girdi.yukle(sessiz=True) if "lat" in y]
S = json.load(open(os.path.join(KOK, "denetim", "OLCUM-GEO-INCEHUCRE-0916.json"), encoding="utf-8"))
GUN = {v[0]: v[1] for v in geo.VAKALAR}


def puan(lon, lat, did, gun):
    top, katki = 0, []
    for y in YL:
        if geo.sahip(y, gun) != did:
            continue
        d = math.hypot((lon - y["lon"]) * 111.32 * math.cos(math.radians(lat)), (lat - y["lat"]) * 110.574)
        once = 0
        for e, p in HALKA:
            if once <= d < e:
                top += p; katki.append((y["ad"], round(d), p))
            once = e
    return top, sorted(katki, key=lambda k: k[1])


out = []
for vid, v in S.items():
    for s in v["serit_r017"]:
        lon, lat = s["nokta"]
        p, k = puan(lon, lat, s["govde"], GUN[vid])
        yan = []
        for dx, dy in ((0.9, 0), (-0.9, 0), (0, 0.55), (0, -0.55)):
            q, _ = puan(lon + dx, lat + dy, s["govde"], GUN[vid])
            yan.append(q)
        out.append({"vaka": vid, "govde": s["govde"], "nokta": s["nokta"], "puan": p,
                    "0-200_katkisi_var": any(x[2] == 4 for x in k), "katki": k[:6], "60km_yanlarda_puan": yan})
json.dump(out, open(os.path.join(KOK, "denetim", "OLCUM-GEO-PUAN-0916.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
for r in out:
    print(r)
