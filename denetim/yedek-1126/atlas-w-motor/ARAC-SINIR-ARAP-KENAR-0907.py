# -*- coding: utf-8 -*-
"""ARAC-SINIR-ARAP-KENAR-0907 — Arap Dogu bolgesinin KENAR kumesini olcer.

NICIN: `SINIR-HUKUKI-ORTAK-0907.md §2`nin sordugu tek soru KENAR basinadir
       ("bu sinir cizgisi 1923-10-29'dan bugune degisti mi?"). Once o kenar
       kumesi — yani PAYDA — olculur; kaynak isi ondan sonra baslar.

NE OLCER (ve ne olcmez):
    OLCER   iki ulkenin poligon SINIRLARININ kesisiminden dogan CIZGI
    OLCMEZ  o cizginin 1923'te ne oldugunu  ← o ayri bir is, kaynak isi

`§3` DEVRALDIM/DOGRULANMADI: ortak sartname "342 cift · %100 birebir ortak
tepe" diyor. Bu alet o sayiyi DEVRALMAZ, kendi bolgesi icin YENIDEN olcer.

`§11` KABUK KURALI: bu dosya Write ile yazildi, kabuktan gecmedi.
"""
import json, sys, os, math

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from shapely.geometry import shape
from shapely.ops import linemerge
from shapely import STRtree

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")

# Arap Dogu — 1.MURAT'in sevkindeki bolge tarifi:
# Suriye · Lubnan · Filistin · Urdun · Irak · Hicaz/Necid · Yemen · Korfez
BOLGE = {
    "Syria", "Lebanon", "Israel", "Palestine", "Jordan", "Iraq",
    "Saudi Arabia", "Yemen", "Oman", "United Arab Emirates",
    "Qatar", "Bahrain", "Kuwait",
}


def km(lon1, lat1, lon2, lat2):
    """Haversine — kenar uzunlugunu KABA olcmek icin (siniflama icin degil)."""
    R = 6371.0088
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp = p2 - p1
    dl = math.radians(lon2 - lon1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(min(1.0, math.sqrt(a)))


def hat_uzunluk_km(geom):
    t = 0.0
    parcalar = [geom] if geom.geom_type == "LineString" else list(geom.geoms)
    for p in parcalar:
        c = list(p.coords)
        for i in range(len(c) - 1):
            t += km(c[i][0], c[i][1], c[i + 1][0], c[i + 1][1])
    return t


def main():
    with open(NE, encoding="utf-8") as f:
        gj = json.load(f)

    kayit = []           # (ad, tur, egemen, geom, gecerli_mi)
    gecersiz = []
    for ft in gj["features"]:
        pr = ft["properties"]
        ad = pr.get("ADMIN") or pr.get("NAME")
        try:
            g = shape(ft["geometry"])
        except Exception as e:
            gecersiz.append((ad, "shape() COKTU: %s" % e))
            continue
        kayit.append({
            "ad": ad,
            "tur": pr.get("TYPE"),
            "egemen": pr.get("SOVEREIGNT"),
            "geom": g,
            "gecerli": g.is_valid,
        })
        if not g.is_valid:
            gecersiz.append((ad, "is_valid FALSE"))

    print("GIRDI  : %s" % os.path.relpath(NE, KOK))
    print("girdi sayisi        : %d" % len(kayit))
    print("GECERSIZ geometri   : %d  %s" % (len(gecersiz), [a for a, _ in gecersiz]))
    bulunan = {k["ad"] for k in kayit}
    eksik = sorted(BOLGE - bulunan)
    print("bolge adi eslesmeyen: %d  %s" % (len(eksik), eksik))
    print()

    idx = STRtree([k["geom"] for k in kayit])

    kenarlar = {}
    olculemedi = []
    for i, A in enumerate(kayit):
        if A["ad"] not in BOLGE:
            continue
        for j in idx.query(A["geom"]):
            B = kayit[j]
            if B["ad"] == A["ad"]:
                continue
            anahtar = tuple(sorted([A["ad"], B["ad"]]))
            if anahtar in kenarlar or anahtar in [o[0] for o in olculemedi]:
                continue
            if not (A["gecerli"] and B["gecerli"]):
                olculemedi.append((anahtar, "geometri GECERSIZ"))
                continue
            try:
                kes = A["geom"].boundary.intersection(B["geom"].boundary)
            except Exception as e:
                olculemedi.append((anahtar, "intersection COKTU: %s" % e))
                continue
            if kes.is_empty:
                continue
            # yalniz CIZGI parcalari kenardir; nokta temaslari kenar DEGILDIR
            cizgiler = []
            parcalar = [kes] if kes.geom_type not in ("GeometryCollection", "MultiLineString", "MultiPoint") else list(kes.geoms)
            if kes.geom_type == "MultiLineString":
                parcalar = list(kes.geoms)
            for p in parcalar:
                if p.geom_type == "LineString" and len(p.coords) >= 2:
                    cizgiler.append(p)
            if not cizgiler:
                continue
            birlesik = linemerge(cizgiler) if len(cizgiler) > 1 else cizgiler[0]
            tepe = sum(len(p.coords) for p in ([birlesik] if birlesik.geom_type == "LineString" else list(birlesik.geoms)))
            kenarlar[anahtar] = {
                "uzunluk_km": round(hat_uzunluk_km(birlesik), 1),
                "ham_parca": len(cizgiler),
                "birlesik_parca": 1 if birlesik.geom_type == "LineString" else len(birlesik.geoms),
                "tepe": tepe,
                "a_tur": A["tur"], "b_tur": B["tur"],
                "a_egemen": A["egemen"], "b_egemen": B["egemen"],
            }

    ic = [(a, b) for (a, b) in kenarlar if a in BOLGE and b in BOLGE]
    dis = [(a, b) for (a, b) in kenarlar if not (a in BOLGE and b in BOLGE)]

    print("KENAR SAYISI (PAYDA)")
    print("  bolge ICI  (iki ucu da Arap Dogu) : %d" % len(ic))
    print("  bolge DISI (bir ucu disarida)     : %d" % len(dis))
    print("  TOPLAM                            : %d" % len(kenarlar))
    print("  OLCULEMEDI                        : %d  %s" % (len(olculemedi), olculemedi))
    print()
    print("%-46s %10s %6s %6s" % ("KENAR", "km", "parca", "tepe"))
    for (a, b), v in sorted(kenarlar.items(), key=lambda x: -x[1]["uzunluk_km"]):
        isaret = "  " if (a in BOLGE and b in BOLGE) else "* "
        print("%s%-44s %10.1f %6d %6d" % (isaret, a + " | " + b, v["uzunluk_km"], v["birlesik_parca"], v["tepe"]))
    print("\n* = bir ucu bolge DISINDA")

    cikti = os.path.join(KOK, "denetim", "OLCUM-SINIR-ARAP-KENAR-0907.json")
    with open(cikti, "w", encoding="utf-8") as f:
        json.dump({
            "_NOT": "ARAC-SINIR-ARAP-KENAR-0907.py ciktisi. Kenar KUMESI (payda). "
                    "1923 sorusunun cevabini ICERMEZ.",
            "girdi": os.path.relpath(NE, KOK),
            "bolge": sorted(BOLGE),
            "gecersiz_geometri": [a for a, _ in gecersiz],
            "kenar": [{"a": a, "b": b, **v} for (a, b), v in sorted(kenarlar.items())],
            "olculemedi": [{"a": a, "b": b, "sebep": s} for (a, b), s in olculemedi],
        }, f, ensure_ascii=False, indent=1)
    print("\nYAZILDI: %s" % os.path.relpath(cikti, KOK))


if __name__ == "__main__":
    main()
