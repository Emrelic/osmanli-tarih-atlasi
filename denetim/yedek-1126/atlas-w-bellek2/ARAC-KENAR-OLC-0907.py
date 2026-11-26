# -*- coding: utf-8 -*-
"""ARAC-KENAR-OLC-0907 — Natural Earth ülke poligonlarının ORTAK KENAR ölçümü.

    KADEME-MODEL-0907 · 7 Eylül 2026 · şartname §②d

Bu alet TEK BİR SORUYU sorar ve cevabı işin cinsini belirler:

    İki komşu ülke poligonu, paylaştıkları kenarda BİREBİR AYNI
    koordinatları mı taşıyor?

        birebir aynı  → kenar çıkarımı MEKANİK
        ayrışıyor     → TOLERANS gerekir, ve toleransın kendisi bir KARAR

🔴 NE ÖLÇMEZ (ve bu bilerek):
    · bir kenarın hukukî olup olmadığını      → o `kaynak` işi, geometri değil
    · sınırın 1923'te nerede olduğunu         → NE 2020'leri taşıyor
    · kenarın hangi antlaşmaya dayandığını    → §4, ayrı kalem

🔴 KENDİ AYRIŞTIRICIMI YAZMIYORUM (§11, bu proje 7 kez ısırdı):
    GeoJSON `json` modülüne, geometri `shapely`ye okutuluyor.

🔴 VE BİR TUZAK ÖNCEDEN KAPATILDI — `A.intersects(B)` KOMŞULUK DEĞİLDİR:
    iki ülke tek bir NOKTADA da kesişebilir (üçlü sınır kavşağı) ve o
    bir KENAR değildir. Bu yüzden komşuluk ölçütü `boundary` kesişiminin
    UZUNLUĞUdur, varlığı değil.
"""
import io
import json
import os
import sys
from collections import Counter

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

from shapely.geometry import shape
from shapely.strtree import STRtree
from shapely.ops import unary_union  # noqa: F401  (rapor dalında kullanılıyor)

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GEOJSON = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
CIKTI = os.path.join(KOK, "denetim", "OLCUM-KENAR-0907.json")

# Kıl payı ayrışmayı ölçmek için: bir A tepe noktasının EN YAKIN B tepe
# noktasına uzaklığı. 0.0 ise BİREBİR aynı koordinat.
# Derece cinsinden; ekvatorda 1e-7 derece ~ 1,1 cm.
BANTLAR = [0.0, 1e-9, 1e-7, 1e-6, 1e-5, 1e-4, 1e-3]


def tepeler(geom):
    """Geometrinin BÜTÜN tepe noktaları, (x, y) demetleri olarak.

    🔴 float DEMETİ olarak tutuluyor — YUVARLAMA YOK. Sorunun kendisi
    'birebir aynı mı' olduğu için burada yuvarlamak soruyu yok ederdi.
    """
    out = []
    if geom.geom_type == "Polygon":
        halkalar = [geom.exterior] + list(geom.interiors)
        for h in halkalar:
            out.extend(list(h.coords))
    elif geom.geom_type == "MultiPolygon":
        for p in geom.geoms:
            out.extend(tepeler(p))
    return out


def cizgi_uzunlugu(g):
    """Kesişim geometrisinin TOPLAM çizgi uzunluğu (derece).

    Nokta kesişimleri 0 katkı verir — üçlü kavşakları elemek için şart.
    """
    if g.is_empty:
        return 0.0
    t = g.geom_type
    if t in ("LineString", "LinearRing"):
        return g.length
    if t in ("MultiLineString", "GeometryCollection", "MultiPolygon", "Polygon"):
        try:
            return sum(cizgi_uzunlugu(p) for p in g.geoms)
        except AttributeError:
            return g.length
    return 0.0


def main():
    print("═" * 74)
    print("ARAC-KENAR-OLC-0907 — NE ülke poligonları · ORTAK KENAR ölçümü")
    print("═" * 74)

    with io.open(GEOJSON, encoding="utf-8") as f:
        ham = json.load(f)

    ozn = ham["features"]
    print("ülke (feature)          : %d" % len(ozn))

    adlar = []
    geoms = []
    parca = Counter()
    for o in ozn:
        p = o["properties"]
        ad = p.get("NAME") or p.get("ADMIN") or p.get("SOVEREIGNT") or "?"
        g = shape(o["geometry"])
        adlar.append(ad)
        geoms.append(g)
        parca[g.geom_type] += 1

    tv = [tepeler(g) for g in geoms]
    toplam_tepe = sum(len(v) for v in tv)
    print("geometri tipi           : %s" % dict(parca))
    print("toplam tepe noktası     : %d" % toplam_tepe)
    print("geçersiz geometri       : %d" % sum(0 if g.is_valid else 1 for g in geoms))

    # ---- KOMŞU ADAYLARI: STRtree ile kutu kesişimi, sonra gerçek test ----
    agac = STRtree(geoms)
    aday = set()
    for i, g in enumerate(geoms):
        for j in agac.query(g):
            j = int(j)
            if j != i:
                aday.add((min(i, j), max(i, j)))
    print("kutu-kesişen çift (aday): %d" % len(aday))

    kume = [set(v) for v in tv]

    kenar = []          # gerçek KENAR paylaşan çiftler
    yalniz_nokta = 0    # yalnız noktada değen (üçlü kavşak) çiftler
    ortusen = []        # ALAN olarak örtüşen çiftler (kirli topoloji)
    for (i, j) in sorted(aday):
        a, b = geoms[i], geoms[j]
        try:
            kes = a.intersection(b)
        except Exception as e:
            print("  🔴 kesişim hatası %s ↔ %s: %s" % (adlar[i], adlar[j], e))
            continue
        alan = kes.area if not kes.is_empty else 0.0
        try:
            uz = cizgi_uzunlugu(a.boundary.intersection(b.boundary))
        except Exception:
            uz = 0.0
        if alan > 0:
            ortusen.append((adlar[i], adlar[j], alan))
        if uz > 0:
            ortak = kume[i] & kume[j]
            kenar.append({
                "a": adlar[i], "b": adlar[j],
                "uzunluk_derece": uz,
                "ortak_tepe": len(ortak),
                "tepe_a": len(kume[i]), "tepe_b": len(kume[j]),
            })
        elif not kes.is_empty:
            yalniz_nokta += 1

    print("")
    print("─" * 74)
    print("GERÇEK KENAR paylaşan çift : %d" % len(kenar))
    print("yalnız NOKTADA değen çift  : %d   (üçlü kavşak — KENAR DEĞİL)" % yalniz_nokta)
    print("ALAN olarak örtüşen çift   : %d" % len(ortusen))
    if ortusen:
        for a, b, al in sorted(ortusen, key=lambda x: -x[2])[:8]:
            print("   %-24s ↔ %-24s alan %.3e derece²" % (a, b, al))

    # ---- ASIL SORU: ortak kenarda BİREBİR aynı tepe var mı? ----
    hic_ortak_yok = [k for k in kenar if k["ortak_tepe"] == 0]
    ortak_var = [k for k in kenar if k["ortak_tepe"] > 0]
    print("")
    print("─" * 74)
    print("ASIL SORU — kenar paylaşan çiftlerde BİREBİR aynı tepe noktası:")
    print("   ortak tepesi VAR  : %d çift" % len(ortak_var))
    print("   ortak tepesi YOK  : %d çift  🔴" % len(hic_ortak_yok))
    if ortak_var:
        oc = sorted(k["ortak_tepe"] for k in ortak_var)
        print("   ortak tepe sayısı : min %d · ortanca %d · azami %d" %
              (oc[0], oc[len(oc) // 2], oc[-1]))
    for k in sorted(kenar, key=lambda x: -x["uzunluk_derece"])[:12]:
        print("   %-22s ↔ %-22s  kenar %8.3f°  ortak tepe %5d" %
              (k["a"], k["b"], k["uzunluk_derece"], k["ortak_tepe"]))

    ozet = {
        "_NOT": "ARAC-KENAR-OLC-0907 · NE ülke poligonu ortak kenar ölçümü",
        "ulke": len(ozn),
        "toplam_tepe": toplam_tepe,
        "aday_cift": len(aday),
        "kenar_cift": len(kenar),
        "yalniz_nokta_cift": yalniz_nokta,
        "ortusen_cift": len(ortusen),
        "ortak_tepesi_olan": len(ortak_var),
        "ortak_tepesi_olmayan": len(hic_ortak_yok),
        "kenarlar": sorted(kenar, key=lambda x: -x["uzunluk_derece"]),
    }
    with io.open(CIKTI, "w", encoding="utf-8") as f:
        json.dump(ozet, f, ensure_ascii=False, indent=1)
    print("")
    print("→ %s yazıldı" % os.path.relpath(CIKTI, KOK))


if __name__ == "__main__":
    main()
