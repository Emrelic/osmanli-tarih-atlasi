# -*- coding: utf-8 -*-
"""KIZILDENIZ-0073D — boşluk KAYNAK kara maskesinden mi geliyor?

C ölçümü: K2'nin 126 hücresinin 50'si motor_kara DIŞINDA, ama hiçbir hücrenin
en yakın yerleşimi 200 km'yi aşmıyor (azami 188,6) ⇒ 200 km tavanı sebep DEĞİL.
Bu alet, aynı ızgarayı motorun GİRDİ maskelerine sorar:
  ne_10m_land · ne_10m_lakes · (varsa) ne_10m_geography_regions_polys
Böylece boşluk "kaynak kara maskesinde su/boş" mu, yoksa motorun kendi
kesmesi mi — ayrılır.

Çıktı: denetim/OLCUM-KIZILDENIZ-0073D.json
"""
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import shape, Point  # noqa: E402
from shapely.ops import unary_union  # noqa: E402
from shapely.prepared import prep  # noqa: E402

K2 = dict(lat0=12.20, lat1=14.94, lon0=40.30, lon1=41.98)


def yukle(ad):
    yol = os.path.join(KOK, "veri-kaynak", ad)
    gj = json.load(open(yol, encoding="utf-8"))
    return unary_union([shape(f["geometry"]) for f in gj["features"]
                        if f.get("geometry")])


def main():
    C = json.load(open(os.path.join(KOK, "denetim", "OLCUM-KIZILDENIZ-0073C.json"),
                       encoding="utf-8"))
    land = prep(yukle("ne_10m_land.geojson"))
    lakes = prep(yukle("ne_10m_lakes.geojson"))

    sonuc = {"kutu": K2, "hucreler": []}
    say = {"kara_var_motor_yok": 0, "kara_yok": 0, "gol": 0, "ikisi_de_var": 0}
    for o in C["ornekler"]:
        p = Point(o["lon"], o["lat"])
        L = bool(land.contains(p))
        G = bool(lakes.contains(p))
        M = o["motor_kara"]
        if M:
            say["ikisi_de_var"] += 1
        elif G:
            say["gol"] += 1
        elif L:
            say["kara_var_motor_yok"] += 1
        else:
            say["kara_yok"] += 1
        sonuc["hucreler"].append({**o, "ne_land": L, "ne_lake": G})
    sonuc["ozet"] = say

    yol = os.path.join(KOK, "denetim", "OLCUM-KIZILDENIZ-0073D.json")
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(sonuc, f, ensure_ascii=False, indent=1)

    print("K2 126 hucre:")
    print("  motor_kara VAR (boyanabilir)      :", say["ikisi_de_var"])
    print("  NE gol (kasitli cikarilmis)       :", say["gol"])
    print("  NE kara VAR ama motor_kara YOK    :", say["kara_var_motor_yok"], " <-- MOTOR KESMESI")
    print("  NE kara da YOK (deniz)            :", say["kara_yok"])
    lats = sorted({r["lat"] for r in sonuc["hucreler"]}, reverse=True)
    lons = sorted({r["lon"] for r in sonuc["hucreler"]})
    print("  harita  (M=motor kara · l=NE gol · K=NE kara motorda yok · .=deniz)")
    print("       " + "".join("%6.1f" % x for x in lons))
    for la in lats:
        row = ""
        for lo in lons:
            r = [x for x in sonuc["hucreler"] if x["lat"] == la and x["lon"] == lo][0]
            c = "M" if r["motor_kara"] else ("l" if r["ne_lake"] else
                                             ("K" if r["ne_land"] else "."))
            row += "%6s" % c
        print("%5.1f" % la + row)
    print("->", yol)


if __name__ == "__main__":
    main()
