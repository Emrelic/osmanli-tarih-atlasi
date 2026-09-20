# -*- coding: utf-8 -*-
"""KIZILDENIZ-0073C — beyaz alan BOYASIZ mı, yoksa boyalı da altlık mı beyaz?

Ölçüm: motorun KENDİ çizdiği kara (`veri-kaynak/motor_kara.geojson` — motorun
ÇIKTISI, CLAUDE.md §5) K2 kutusunu kapsıyor mu. Kapsamıyorsa beyaz alan
"motorun hiç boyamadığı kara" demektir; kapsıyorsa boşluk başka yerdedir.

Izgara: K2 kutusunda 0.1° adımlı nokta ızgarası; her nokta için
  (1) motor_kara içinde mi
  (2) en yakın yerleşim kaç km (Voronoi sahibi bu olur)
Çıktı: denetim/OLCUM-KIZILDENIZ-0073C.json
"""
import json
import math
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import shape, Point  # noqa: E402
from shapely.ops import unary_union  # noqa: E402
from shapely.prepared import prep  # noqa: E402
import girdi  # noqa: E402

GUN = "1822-10-24"
K2 = dict(lat0=12.20, lat1=14.94, lon0=40.30, lon1=41.98)


def km(a, b):
    la1, lo1 = math.radians(a[0]), math.radians(a[1])
    la2, lo2 = math.radians(b[0]), math.radians(b[1])
    h = (math.sin((la2 - la1) / 2) ** 2
         + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(h))


def gunde(p, g):
    return (p.get("f") or "0000-01-01") <= g <= (p.get("t") or "9999-12-31")


def sahip(y, g):
    for p in (y.get("s") or []):
        if gunde(p, g):
            return p.get("d") or "?"
    for p in (y.get("d") or []):
        if gunde(p, g):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if gunde(p, g):
            return "tabi:" + (p.get("kid") or "?")
    return None


def main():
    TUM = girdi.yukle(sessiz=True)
    gj = json.load(open(os.path.join(KOK, "veri-kaynak", "motor_kara.geojson"),
                        encoding="utf-8"))
    geoms = [shape(f["geometry"]) for f in gj["features"]]
    kara = unary_union(geoms)
    pk = prep(kara)

    ic, dis = 0, 0
    ornekler = []
    lat = K2["lat0"]
    while lat <= K2["lat1"] + 1e-9:
        lon = K2["lon0"]
        while lon <= K2["lon1"] + 1e-9:
            p = Point(lon, lat)
            icinde = pk.contains(p)
            if icinde:
                ic += 1
            else:
                dis += 1
            d, y = min(((km((lat, lon), (t["lat"], t["lon"])), t) for t in TUM),
                       key=lambda r: r[0])
            ornekler.append({"lat": round(lat, 2), "lon": round(lon, 2),
                             "motor_kara": bool(icinde),
                             "en_yakin": y.get("ad"), "km": round(d, 1),
                             "sahip": sahip(y, GUN)})
            lon += 0.2
        lat += 0.2

    ustu200 = [o for o in ornekler if o["km"] > 200]
    sonuc = {"gun": GUN, "kutu": K2, "izgara_nokta": len(ornekler),
             "motor_kara_icinde": ic, "motor_kara_disinda": dis,
             "en_yakin_200km_ustu": len(ustu200),
             "azami_km": max(o["km"] for o in ornekler),
             "ornekler": ornekler}
    yol = os.path.join(KOK, "denetim", "OLCUM-KIZILDENIZ-0073C.json")
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(sonuc, f, ensure_ascii=False, indent=1)

    print("izgara %d nokta (0.2 derece) — K2" % len(ornekler))
    print("  motor_kara ICINDE : %d" % ic)
    print("  motor_kara DISINDA: %d" % dis)
    print("  en yakin nokta >200 km olan izgara hucresi: %d (azami %.1f km)"
          % (len(ustu200), sonuc["azami_km"]))
    sayac = {}
    for o in ornekler:
        if o["motor_kara"]:
            sayac[str(o["sahip"])] = sayac.get(str(o["sahip"]), 0) + 1
    print("  kara icindeki hucrelerin Voronoi sahibi:", sayac)
    print("->", yol)


if __name__ == "__main__":
    main()
