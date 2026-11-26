# -*- coding: utf-8 -*-
"""MISIR GEÇERSİZLİĞİ — ÇAPRAZ ÖLÇÜM · SINIR-KAFRIKA-0907

🔴 BU BİR HÜKÜM DEĞİL, BİR ÇAPRAZ KONTROLDÜR. Kalem KADEME-MODEL-0907'de.
   Ölçüyorum çünkü kilit tam benim bölgemin merkezinde ve iki bağımsız
   ölçüm, tek ölçümden değerlidir. Ayrışırsak AKSAKLIK yazarım.

Ne sorar:
  ① geçersizlik NEREDE — koordinat, ve hangi kenara komşu
  ② `make_valid` sonrası Mısır'ın BEŞ kenarının tepe sayısı / uzunluğu
     DEĞİŞİYOR MU
  ③ değişiyorsa HANGİ kenarda — hepsinde mi, yalnız kusurun yanındakinde mi
"""
import io
import json
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from shapely.geometry import shape, MultiLineString
from shapely.ops import linemerge
from shapely.validation import explain_validity, make_valid

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
KOMSU = ["Sudan", "Libya", "Israel", "Palestine", "Bir Tawil"]


def uzunluk_km(c):
    top = 0.0
    par = []
    if c.geom_type == "LineString":
        par = [list(c.coords)]
    elif c.geom_type in ("MultiLineString", "GeometryCollection"):
        par = [list(g.coords) for g in c.geoms if g.geom_type == "LineString"]
    for co in par:
        for i in range(len(co) - 1):
            x1, y1, x2, y2 = co[i][0], co[i][1], co[i + 1][0], co[i + 1][1]
            f1, f2 = math.radians(y1), math.radians(y2)
            a = (math.sin((f2 - f1) / 2) ** 2
                 + math.cos(f1) * math.cos(f2) * math.sin(math.radians(x2 - x1) / 2) ** 2)
            top += 6371.0 * 2 * math.asin(min(1.0, math.sqrt(a)))
    return top


def tepe(c):
    if c.geom_type == "LineString":
        return len(c.coords)
    if c.geom_type in ("MultiLineString", "GeometryCollection"):
        return sum(len(g.coords) for g in c.geoms if g.geom_type == "LineString")
    return 0


def cizgile(kes):
    gg = [kes] if kes.geom_type != "GeometryCollection" else list(kes.geoms)
    ciz = []
    for g in gg:
        if g.geom_type == "LineString" and len(g.coords) > 1:
            ciz.append(g)
        elif g.geom_type == "MultiLineString":
            ciz.extend([x for x in g.geoms if len(x.coords) > 1])
    if not ciz:
        return None
    return linemerge(MultiLineString(ciz)) if len(ciz) > 1 else ciz[0]


def main():
    with io.open(NE, encoding="utf-8") as f:
        g = json.load(f)
    geo = {}
    for ft in g["features"]:
        ad = ft["properties"].get("ADMIN")
        if ad in KOMSU + ["Egypt"]:
            geo[ad] = shape(ft["geometry"])

    ham = geo["Egypt"]
    print("① GECERSIZLIK")
    print("   is_valid            : %s" % ham.is_valid)
    print("   explain_validity    : %s" % explain_validity(ham))
    print("   MultiPolygon parca  : %d" % (len(ham.geoms) if ham.geom_type == "MultiPolygon" else 1))

    duz = make_valid(ham)
    print("   make_valid tipi     : %s" % duz.geom_type)
    print("   make_valid is_valid : %s" % duz.is_valid)
    print("")
    print("   ALAN (derece^2)  ham %.9f -> duz %.9f  (fark %.3e)"
          % (ham.area, duz.area, duz.area - ham.area))
    # make_valid GeometryCollection dondurebilir; poligon olmayanlari ayikla
    if duz.geom_type == "GeometryCollection":
        from shapely.geometry import MultiPolygon
        poli = [x for x in duz.geoms if x.geom_type in ("Polygon", "MultiPolygon")]
        artik = [x.geom_type for x in duz.geoms if x.geom_type not in ("Polygon", "MultiPolygon")]
        print("   🔴 GeometryCollection dondu — poligon disi artik: %s" % artik)
        duz = MultiPolygon([p for x in poli for p in
                            (x.geoms if x.geom_type == "MultiPolygon" else [x])])

    print("")
    print("② BES KENAR — ham vs make_valid")
    print("   %-14s %10s %10s %8s   %10s %10s %8s   %s"
          % ("komsu", "ham_km", "duz_km", "d_km", "ham_tepe", "duz_tepe", "d_tepe", "AYRISMA"))
    sonuc = []
    for k in KOMSU:
        if k not in geo:
            print("   %-14s KOMSU NE'DE YOK" % k)
            continue
        a = cizgile(ham.boundary.intersection(geo[k].boundary))
        b = cizgile(duz.boundary.intersection(geo[k].boundary))
        ha, hb = (uzunluk_km(a) if a else 0.0), (uzunluk_km(b) if b else 0.0)
        ta, tb = (tepe(a) if a else 0), (tepe(b) if b else 0)
        ayr = "🔴 DEGISTI" if (abs(ha - hb) > 0.0005 or ta != tb) else "🟢 AYNI"
        print("   %-14s %10.3f %10.3f %8.4f   %10d %10d %8d   %s"
              % (k, ha, hb, hb - ha, ta, tb, tb - ta, ayr))
        sonuc.append({"komsu": k, "ham_km": round(ha, 4), "duz_km": round(hb, 4),
                      "ham_tepe": ta, "duz_tepe": tb, "ayristi": ayr.endswith("DEGISTI")})

    print("")
    print("③ KUSURUN YERI — hangi kenara ne kadar uzak")
    import re
    m = re.search(r"\[([-\d.]+)\s+([-\d.]+)\]", explain_validity(ham))
    if m:
        px, py = float(m.group(1)), float(m.group(2))
        from shapely.geometry import Point
        p = Point(px, py)
        print("   kusur noktasi: %.6f D, %.6f K" % (px, py))
        for k in KOMSU:
            if k not in geo:
                continue
            a = cizgile(ham.boundary.intersection(geo[k].boundary))
            if a is None:
                continue
            d = p.distance(a)
            print("   %-14s kenara uzaklik %.6f derece  (~%.1f km)" % (k, d, d * 111.0))

    cikti = os.path.join(KOK, "denetim", "OLCUM-SINIR-KAFRIKA-MISIR-0907.json")
    with io.open(cikti, "w", encoding="utf-8") as f:
        f.write(json.dumps({
            "_NOT": "CAPRAZ KONTROL — kalem KADEME-MODEL-0907'de. Hukum degil olcum.",
            "gecersizlik": explain_validity(ham),
            "kenarlar": sonuc,
        }, ensure_ascii=False, indent=1))
    print("")
    print("yazildi: %s" % cikti)


if __name__ == "__main__":
    main()
