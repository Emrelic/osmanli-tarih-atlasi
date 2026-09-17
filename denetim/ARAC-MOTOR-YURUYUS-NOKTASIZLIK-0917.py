# -*- coding: utf-8 -*-
"""ARAC-MOTOR-YURUYUS-NOKTASIZLIK-0917 — 16 komşulu dünya öngörüsünün sahipsiz
kümelerini NOKTA işi için sınıflar (koşusuz, SALT OKUMA).

Girdi: denetim/ONGORU-MOTOR-YURUYUS-0917-16YON.json (≥10.000 km² kümeler)
Sınıflar:
  DAG                 medyan sürtünme > 1,5 — arazi yürüyüşü gerçekten yavaşlatıyor
  NOKTASIZ-COL        medyan sürtünme ≤ 1,5 VE küme merkezi motorun çöl poligonunda
                      (ne_10m_geography_regions_polys, FEATURECLA=Desert — uret_petek.py
                      ile aynı kaynak) ⇒ sahipsizlik büyük ihtimalle KASITLI/BEKLENEN
  NOKTASIZ-ADAY       medyan sürtünme ≤ 1,5 VE çöl dışı ⇒ NOKTA oturumlarına asıl aday
⚠️ Çöl testi yalnız küme MERKEZİNE sorulur (yaklaşık; büyük kümenin kenarı çöl dışına
   taşabilir). "Aday" bir kusur hükmü DEĞİL: orada tarihte yerleşim olup olmadığını
   ancak kaynak söyler (CLAUDE.md §2 · §4).
Çıktı: denetim/NOKTASIZLIK-ADAY-0917.json
"""
import io, json, os, sys
from shapely.geometry import shape, Point
from shapely.ops import unary_union
from shapely.prepared import prep

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.stdout.reconfigure(encoding="utf-8")
O = json.load(io.open(os.path.join(KOK, "denetim", "ONGORU-MOTOR-YURUYUS-0917-16YON.json"),
                      encoding="utf-8"))
gr = json.load(io.open(os.path.join(KOK, "veri-kaynak", "ne_10m_geography_regions_polys.geojson"),
                       encoding="utf-8"))
col = prep(unary_union([shape(f["geometry"]).buffer(0) for f in gr["features"]
                        if (f["properties"].get("FEATURECLA") or "") == "Desert"]))
nk = O["ongoru"]["noktasizlik"]
kumeler = sorted(nk["NOKTASIZ"]["liste"] + nk["DAG"]["liste"], key=lambda k: -k["km2"])
out = {"DAG": [], "NOKTASIZ-COL": [], "NOKTASIZ-ADAY": []}
for k in kumeler:
    if k["sinif"] == "DAG":
        s = "DAG"
    else:
        s = "NOKTASIZ-COL" if col.contains(Point(k["merkez_lon"], k["merkez_lat"])) else "NOKTASIZ-ADAY"
    out[s].append(k)
ozet = {s: {"kume": len(v), "km2": sum(k["km2"] for k in v)} for s, v in out.items()}
SON = {"_ne": __doc__.split("\n\n")[0], "kaynak": "ONGORU-MOTOR-YURUYUS-0917-16YON.json",
       "esikler": {"kume_min_km2": nk["siniflanan_min_km2"], "surt": nk["surt_esik"]},
       "ozet": ozet, **out}
json.dump(SON, io.open(os.path.join(KOK, "denetim", "NOKTASIZLIK-ADAY-0917.json"), "w",
                       encoding="utf-8"), ensure_ascii=False, indent=1)
print(ozet)
for k in out["NOKTASIZ-ADAY"][:30]:
    print(f"  {k['km2']:>8,} km²  {k['merkez_lat']:7.2f} {k['merkez_lon']:8.2f}  sürt {k['surtunme_medyan']:.2f}"
          f"  tohum {k['en_yakin_tohum_km_medyan']:5.0f} km  {k['yuruyus_saat_medyan']:4.1f} s  "
          f"{', '.join(k['A_sahipleri'])}")
