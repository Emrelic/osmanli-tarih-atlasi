# -*- coding: utf-8 -*-
"""ARAC-SINIR-GAFRIKA-KENAR-0907 — Sahra alti Afrika KENAR kumesini cikarir.

SORAR   "Bu bolgede hangi ulke ciftleri BIREBIR bir sinir cizgisi paylasiyor,
         ve o cizgi nedir?"
SORMAZ  "o cizgi 1923'ten beri degisti mi"  (o AYRI bir alet ve AYRI bir soru)

YONTEM — ORTAK sartname §3'un devraldigi mekanigin AYNISI, ama BEN
YENIDEN OLCUYORUM (devraldigim rakami dogrulamadan aktarmam):
  · aday cift  : sinirlayici kutular kesisiyorsa
  · kenar      : a.boundary ∩ b.boundary'nin CIZGI parcalari
  · birlestirme: linemerge — cunku shapely bir kenari IKI NOKTALI PARCALARIN
                 YIGINI olarak dondurur; birlestirilmezse ic tepeler IKI KEZ
                 sayilir (KADEME-MODEL bunu olctu: 137.234 -> 69.011)
  · esik YOK, tolerans YOK — cizgi uzunlugu > 0 yeterli

C13 UC AYAK — bu alet icin:
  ① GECME    : kusursuz veride sessiz mi (asagida "ates" bayragi kapaliyken)
  ② ATESLEME : --ates ile SAHTE bir cift zorlanir, alet ONU BILDIRMELI
  ③ GIRDI    : geometri GERCEK dosyadan okunur (enjekte yok)
"""
import io
import json
import os
import sys
from collections import Counter

try:                       # konsol cp1254; isaretler yuzunden alet OLMESIN
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
CIKTI = os.path.join(KOK, "denetim", "_gafrika_kenarlar.json")

SAHRA_ALTI_ALT = ("Western Africa", "Middle Africa", "Eastern Africa",
                  "Southern Africa")
# 🔴 SUDAN ELLE EKLENIYOR VE SEBEBI YAZILI: NE onu "Northern Africa" sayiyor,
# ama Sudan'in Cad · Orta Afrika C. · Etiyopya · Eritre · G.Sudan kenarlari
# Sahra alti kenarlaridir. Bolgeyi SUBREGION tek basina TANIMLAYAMIYOR
# (bu, kosudan ONCE yazilmis ongorunun ⑤. kalemiydi ve TUTTU).
# Sahiplik kurali: "SAHRA ALTI UCU OLAN KENAR BENDE" — yani Sudan↔Misir ve
# Sudan↔Libya BENIM DEGIL, Kuzey Afrika kolunun.
SAHRA_ALTI_EK = ()          # Sudan'i BOLGEYE degil, KENAR KURALINA birakiyoruz


def sahra_alti(p):
    return (p.get("CONTINENT") == "Africa"
            and p.get("SUBREGION") in SAHRA_ALTI_ALT) or p.get("NAME") in SAHRA_ALTI_EK


def main():
    ates = "--ates" in sys.argv
    try:
        from shapely.geometry import shape, LineString, MultiLineString
        from shapely.ops import linemerge
        from shapely.strtree import STRtree
    except Exception as e:                                   # pragma: no cover
        print("🔴 OLCULEMEDI — shapely yok: %s" % e)
        return 2

    with io.open(NE, encoding="utf-8") as f:
        ozl = json.load(f)["features"]

    ad, geo, prop, gecersiz = [], [], [], []
    for f in ozl:
        p = f["properties"]
        g = shape(f["geometry"])
        if not g.is_valid:
            gecersiz.append(p["NAME"])
            g = g.buffer(0)
        ad.append(p["NAME"])
        geo.append(g)
        prop.append(p)
    print("girdi: %d · gecersiz geometri (buffer(0) ile onarildi): %s"
          % (len(ad), ", ".join(gecersiz) or "yok"))

    if ates:
        # ② ATESLEME — bilerek KESISEN sahte bir cift. Alet bunu BILDIRMELI.
        from shapely.geometry import Polygon
        ad += ["ZZZ-ATES-A", "ZZZ-ATES-B"]
        geo += [Polygon([(10, 10), (11, 10), (11, 11), (10, 11)]),
                Polygon([(11, 10), (12, 10), (12, 11), (11, 11)])]
        prop += [{"NAME": "ZZZ-ATES-A", "CONTINENT": "Africa",
                  "SUBREGION": "Western Africa", "TYPE": "Sovereign country"},
                 {"NAME": "ZZZ-ATES-B", "CONTINENT": "Africa",
                  "SUBREGION": "Western Africa", "TYPE": "Sovereign country"}]

    agac = STRtree(geo)
    kenarlar, bakilan = [], 0
    for i, gi in enumerate(geo):
        for j in agac.query(gi):
            j = int(j)
            if j <= i:
                continue
            bakilan += 1
            ort = gi.boundary.intersection(geo[j].boundary)
            if ort.is_empty:
                continue
            parcalar = []
            for h in getattr(ort, "geoms", [ort]):
                if h.geom_type in ("LineString", "LinearRing") and h.length > 0:
                    parcalar.append(h)
            if not parcalar:
                continue
            birlesik = linemerge(MultiLineString([LineString(list(h.coords))
                                                  for h in parcalar]))
            hatlar = [list(h.coords) for h in getattr(birlesik, "geoms", [birlesik])]
            tepe = sum(len(h) for h in hatlar)
            kenarlar.append({
                "a": ad[i], "b": ad[j],
                "uzunluk_derece": round(sum(LineString(h).length for h in hatlar), 6),
                "hat_sayisi": len(hatlar), "tepe": tepe,
                "a_alt": prop[i].get("SUBREGION"), "b_alt": prop[j].get("SUBREGION"),
                "a_kita": prop[i].get("CONTINENT"), "b_kita": prop[j].get("CONTINENT"),
                "a_tur": prop[i].get("TYPE"), "b_tur": prop[j].get("TYPE"),
                "gc": [[[round(x, 3), round(y, 3)] for x, y in h] for h in hatlar],
            })
    print("aday cift bakildi: %d · KENAR paylasan cift (KURESEL): %d"
          % (bakilan, len(kenarlar)))

    if ates:
        v = [k for k in kenarlar if k["a"].startswith("ZZZ") or k["b"].startswith("ZZZ")]
        print("② ATESLEME: sahte cift bildirildi mi -> %s (%d kayit)"
              % ("EVET ✓" if v else "HAYIR 🔴 ALET BOZUK", len(v)))
        return 0 if v else 1

    # ---- BOLGE SUZGECI: "SAHRA ALTI UCU OLAN KENAR BENDE" -----------------
    benim, komsu_kuzey, disarida = [], [], 0
    for k in kenarlar:
        pa = next(p for p in prop if p["NAME"] == k["a"])
        pb = next(p for p in prop if p["NAME"] == k["b"])
        sa, sb = sahra_alti(pa), sahra_alti(pb)
        if sa and sb:
            k["sahiplik"] = "BENDE"
            benim.append(k)
        elif sa or sb:
            k["sahiplik"] = "BEKLIYOR"      # tek ucu Sahra alti — sahiplik sorusu tahtada
            komsu_kuzey.append(k)
        else:
            disarida += 1

    print("\n🟢 BENDE (iki ucu da Sahra alti)      : %d" % len(benim))
    print("🟡 BEKLIYOR (tek ucu Sahra alti)      : %d" % len(komsu_kuzey))
    for k in sorted(komsu_kuzey, key=lambda x: (x["a"], x["b"])):
        print("     %-22s ↔ %-22s (%s | %s)"
              % (k["a"], k["b"], k["a_alt"], k["b_alt"]))
    print("⚪ bolgem disi                        : %d" % disarida)

    print("\nBENDEKI kenarlarin alt bolge dagilimi:")
    for kv, n in sorted(Counter(
            tuple(sorted((k["a_alt"], k["b_alt"]))) for k in benim).items(),
            key=lambda x: -x[1]):
        print("   %-42s %3d" % (" ↔ ".join(kv), n))

    with io.open(CIKTI, "w", encoding="utf-8") as f:
        json.dump({"_NOT": "ARAC-SINIR-GAFRIKA-KENAR-0907 ham cikti — HUKUM YOK,"
                           " yalniz kenar kumesi. hal/dayanak AYRI alette.",
                   "bende": benim, "bekliyor": komsu_kuzey},
                  f, ensure_ascii=False)
    print("\nyazildi: %s (%.2f MB)" % (CIKTI, os.path.getsize(CIKTI) / 1e6))
    return 0


if __name__ == "__main__":
    sys.exit(main())
