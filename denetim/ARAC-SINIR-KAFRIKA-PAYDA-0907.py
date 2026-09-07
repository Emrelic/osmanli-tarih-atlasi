# -*- coding: utf-8 -*-
"""PAYDA ÖLÇÜMÜ — SINIR-KAFRIKA-0907

Ne sorar:  «Kuzey Afrika + Sahra bölgesinde KAÇ kara kenarı var, hangi
           çiftler arasında, ve her birinin geometrisi ne kadar uzun?»
Ne SORMAZ: «bu kenar 1923'ten beri değişti mi?» — o ikinci tur.

🔴 DEVRALMIYOR: ortak şartname 342 kenar / 69.011 tepe diyor; bu alet
   kendi bölgesinin sayısını SIFIRDAN ölçer ve devralınan sayıyı
   yalnız KIYAS olarak basar.

⚠️ Egypt'in NE geometrisi GEÇERSİZ (258'in tek geçersizi). Bu alet
   Mısır kenarlarını AYRI bir kovada tutar ve onlara dayanan hiçbir
   sayıyı ana toplamla karıştırmaz.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from shapely.geometry import shape
from shapely.ops import linemerge
from shapely.validation import explain_validity

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")

# Bölgemin ÇEKİRDEĞİ — NE'nin ADMIN alanındaki adlarla.
CEKIRDEK = {
    "Morocco", "Western Sahara", "Algeria", "Tunisia",
    "Libya", "Egypt", "Sudan",
}


def yukle():
    with io.open(NE, encoding="utf-8") as f:
        g = json.load(f)
    kayit = []
    for ft in g["features"]:
        p = ft["properties"]
        ad = p.get("ADMIN") or p.get("NAME")
        try:
            geo = shape(ft["geometry"])
        except Exception as e:
            print("  GEOMETRI OKUNAMADI: %s (%s)" % (ad, e))
            continue
        kayit.append({
            "ad": ad,
            "name": p.get("NAME"),
            "tip": p.get("TYPE"),
            "egemen": p.get("SOVEREIGNT"),
            "iso": p.get("ISO_A3"),
            "geo": geo,
            "gecerli": geo.is_valid,
            "sebep": None if geo.is_valid else explain_validity(geo),
        })
    return kayit


def kenar_uzunlugu_km(cizgi):
    """Kaba büyük-daire uzunluğu — SIRALAMA için, iddia için değil."""
    import math
    top = 0.0
    parcalar = []
    if cizgi.geom_type == "LineString":
        parcalar = [list(cizgi.coords)]
    elif cizgi.geom_type in ("MultiLineString", "GeometryCollection"):
        for g in cizgi.geoms:
            if g.geom_type == "LineString":
                parcalar.append(list(g.coords))
    for co in parcalar:
        for i in range(len(co) - 1):
            x1, y1 = co[i][0], co[i][1]
            x2, y2 = co[i + 1][0], co[i + 1][1]
            f1, f2 = math.radians(y1), math.radians(y2)
            dl = math.radians(x2 - x1)
            df = f2 - f1
            a = math.sin(df / 2) ** 2 + math.cos(f1) * math.cos(f2) * math.sin(dl / 2) ** 2
            top += 6371.0 * 2 * math.asin(min(1.0, math.sqrt(a)))
    return top


def tepe_say(cizgi):
    n = 0
    if cizgi.geom_type == "LineString":
        n = len(cizgi.coords)
    elif cizgi.geom_type in ("MultiLineString", "GeometryCollection"):
        for g in cizgi.geoms:
            if g.geom_type == "LineString":
                n += len(g.coords)
    return n


def main():
    kayit = yukle()
    print("NE girdisi: %d" % len(kayit))
    gecersiz = [k for k in kayit if not k["gecerli"]]
    print("GECERSIZ geometri: %d" % len(gecersiz))
    for k in gecersiz:
        print("   %s — %s" % (k["ad"], (k["sebep"] or "")[:90]))

    ad_var = set(k["ad"] for k in kayit)
    eksik = CEKIRDEK - ad_var
    if eksik:
        print("🔴 CEKIRDEK ADI NE'DE BULUNAMADI: %s" % sorted(eksik))

    # Sinirlari (boundary) onceden hazirla. Gecersiz olani DOKUNMADAN birak;
    # kesisim denemesi cokerse ayri kovaya duser.
    for k in kayit:
        try:
            k["sinir"] = k["geo"].boundary
        except Exception:
            k["sinir"] = None
        k["kutu"] = k["geo"].bounds

    kenarlar = []
    coken = []
    n = len(kayit)
    for i in range(n):
        A = kayit[i]
        for j in range(i + 1, n):
            B = kayit[j]
            if not (A["ad"] in CEKIRDEK or B["ad"] in CEKIRDEK):
                continue
            ax0, ay0, ax1, ay1 = A["kutu"]
            bx0, by0, bx1, by1 = B["kutu"]
            if ax1 < bx0 - 0.001 or bx1 < ax0 - 0.001:
                continue
            if ay1 < by0 - 0.001 or by1 < ay0 - 0.001:
                continue
            try:
                kes = A["sinir"].intersection(B["sinir"])
            except Exception as e:
                coken.append((A["ad"], B["ad"], str(e)[:70]))
                continue
            if kes.is_empty:
                continue
            # Yalnizca CIZGI parcalari kenar sayilir; tek nokta temas DEGIL.
            cizgiler = []
            gg = [kes] if kes.geom_type != "GeometryCollection" else list(kes.geoms)
            for g in gg:
                if g.geom_type == "LineString" and len(g.coords) > 1:
                    cizgiler.append(g)
                elif g.geom_type == "MultiLineString":
                    cizgiler.extend([x for x in g.geoms if len(x.coords) > 1])
            if not cizgiler:
                continue
            from shapely.geometry import MultiLineString
            birlesik = linemerge(MultiLineString(cizgiler)) if len(cizgiler) > 1 else cizgiler[0]
            a, b = sorted([A["ad"], B["ad"]])
            kenarlar.append({
                "a": a, "b": b,
                "km": round(kenar_uzunlugu_km(birlesik), 1),
                "tepe": tepe_say(birlesik),
                "parca": 1 if birlesik.geom_type == "LineString" else len(birlesik.geoms),
                "gecersiz_uc": sorted([x["ad"] for x in (A, B) if not x["gecerli"]]),
                "cekirdek_uc": sorted([x for x in (a, b) if x in CEKIRDEK]),
                "tip_a": A["tip"], "tip_b": B["tip"],
            })

    kenarlar.sort(key=lambda k: -k["km"])
    temiz = [k for k in kenarlar if not k["gecersiz_uc"]]
    kirli = [k for k in kenarlar if k["gecersiz_uc"]]

    print("")
    print("=== PAYDA ===")
    print("bolgemi ilgilendiren KARA KENARI : %d" % len(kenarlar))
    print("  gecerli iki ucu olan (SAYILIR) : %d" % len(temiz))
    print("  GECERSIZ uclu (AYRI KOVA)      : %d" % len(kirli))
    print("  kesisimi COKEN cift            : %d" % len(coken))
    for c in coken:
        print("     %s <-> %s : %s" % c)
    ic = [k for k in kenarlar if len(k["cekirdek_uc"]) == 2]
    dis = [k for k in kenarlar if len(k["cekirdek_uc"]) == 1]
    print("  cekirdek-ICI kenar             : %d" % len(ic))
    print("  cekirdek-DISI komsu kenari     : %d" % len(dis))
    print("  toplam tepe                    : %d" % sum(k["tepe"] for k in kenarlar))

    print("")
    print("=== KENARLAR (uzunluga gore) ===")
    for k in kenarlar:
        bayrak = "  ⚠️GECERSIZ" if k["gecersiz_uc"] else ""
        print("%-26s %-26s %9.1f km  tepe %5d  parca %d%s"
              % (k["a"], k["b"], k["km"], k["tepe"], k["parca"], bayrak))

    print("")
    print("=== UCLARIN TIPI (kimlik-degil kovasi icin) ===")
    uclar = sorted(set([k["a"] for k in kenarlar] + [k["b"] for k in kenarlar]))
    ix = {k["ad"]: k for k in kayit}
    for u in uclar:
        k = ix[u]
        print("%-26s TYPE=%-16s SOVEREIGNT=%-24s ISO=%s"
              % (u, k["tip"], k["egemen"], k["iso"]))

    cikti = os.path.join(KOK, "denetim", "OLCUM-SINIR-KAFRIKA-PAYDA-0907.json")
    with io.open(cikti, "w", encoding="utf-8") as f:
        f.write(json.dumps({
            "_NOT": "PAYDA olcumu — kenar sayimi. Tarih/hukum YOK.",
            "cekirdek": sorted(CEKIRDEK),
            "kenar_toplam": len(kenarlar),
            "kenar_gecerli": len(temiz),
            "kenar_gecersiz_uclu": len(kirli),
            "coken": coken,
            "kenarlar": kenarlar,
        }, ensure_ascii=False, indent=1))
    print("")
    print("yazildi: %s" % cikti)


if __name__ == "__main__":
    main()
