# -*- coding: utf-8 -*-
"""ARAC-NEHIR-KAPI-0912 — motorun NEHIR KAPISI gercekte neyi eliyor?

Motor (uret_petek.py:629):
    if _ad is None and _sr > NEHIR_ONEM_ESIGI:   # NEHIR_ONEM_ESIGI = 5.0
        continue
Yani kapi IKI kosullu: ADI OLAN nehir scalerank'ten BAGIMSIZ geciyor.
Sevk yalnizca "scalerank <= 5.0 kapisi" diyordu — eksik.

Salt okur. veri-kaynak/ne_10m_rivers.geojson.
"""
import json, io, os, collections

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "veri-kaynak", "ne_10m_rivers.geojson")
ESIK = 5.0

d = json.load(io.open(YOL, encoding="utf-8"))
F = d["features"]


def ad(p):
    a = p.get("name") or p.get("name_en")
    return a if a not in (None, "") else None


adli = [x for x in F if ad(x["properties"])]
adsiz = [x for x in F if not ad(x["properties"])]
print("parca %d · adli %d · adsiz %d" % (len(F), len(adli), len(adsiz)))

gecen = [x for x in F if ad(x["properties"]) or x["properties"]["scalerank"] <= ESIK]
elenen = [x for x in F
          if not (ad(x["properties"]) or x["properties"]["scalerank"] <= ESIK)]
print("")
print("MOTORUN KAPISI  (ad VAR  YA DA  scalerank <= %.1f)" % ESIK)
print("   gecen  %d  (%%%.1f)" % (len(gecen), 100.0 * len(gecen) / len(F)))
print("   elenen %d  (%%%.1f)" % (len(elenen), 100.0 * len(elenen) / len(F)))
sr = collections.Counter(x["properties"]["scalerank"] for x in elenen)
print("   elenenlerin scalerank dagilimi:", dict(sorted(sr.items())))

a5 = sum(1 for x in adsiz if x["properties"]["scalerank"] <= ESIK)
n = [x for x in adli if x["properties"]["scalerank"] > ESIK]
print("")
print("KAPIYI KIM NASIL GECIYOR:")
print("   adsiz ama scalerank<=5 -> SCALERANK sayesinde : %d" % a5)
print("   adli  ama scalerank>5  -> AD sayesinde        : %d" % len(n))
print("   ornek (ad sayesinde gecenler):")
for x in n[:8]:
    print("      %-24s scalerank %s" % (ad(x["properties"])[:24],
                                        x["properties"]["scalerank"]))

# ---- scalerank DEBIYI izliyor mu? bilinen debilerle karsilastir -----------
# 🔴 Debi degerleri DIS BILGIDIR ve raporda kaynaklanacak; burada yalniz
#    SIRALAMANIN ters dusup dusmedigini gostermek icin kullaniliyor.
BILINEN = [("Danube", 6500), ("Nile", 2800), ("Volga", 8060),
           ("Rhine", 2900), ("Dnieper", 1670), ("Don", 900),
           ("Tigris", 1014), ("Euphrates", 356), ("Sava", 1564),
           ("Po", 1540), ("Elbe", 870), ("Oder", 574),
           ("Vistula", 1080), ("Sakarya", 193), ("Maritsa", 200)]
sr_ix = {}
for x in F:
    a = ad(x["properties"])
    if not a:
        continue
    for h, q in BILINEN:
        if a.strip().lower() == h.lower():
            sr_ix.setdefault(h, x["properties"]["scalerank"])
print("")
print("SCALERANK  vs  BILINEN ORTALAMA DEBI (m3/s) — sira TUTUYOR MU?")
sat = [(sr_ix[h], q, h) for h, q in BILINEN if h in sr_ix]
for s, q, h in sorted(sat):
    print("   scalerank %-4s  %-10s  debi ~%5d" % (s, h, q))
ters = 0
cift = 0
for i in range(len(sat)):
    for j in range(i + 1, len(sat)):
        s1, q1, _ = sat[i]
        s2, q2, _ = sat[j]
        if s1 == s2:
            continue
        cift += 1
        # beklenti: kucuk scalerank = buyuk debi
        if (s1 < s2) != (q1 > q2):
            ters += 1
print("")
print("   karsilastirilabilir cift %d · SIRASI TERS olan %d  (%%%.0f)"
      % (cift, ters, 100.0 * ters / max(1, cift)))
print("   (rastgele bir siralamada beklenen ~%%50; %%0 mukemmel uyum)")

cikti = {
    "kaynak_dosya": "veri-kaynak/ne_10m_rivers.geojson",
    "parca": len(F), "adli": len(adli), "adsiz": len(adsiz),
    "alanlar": sorted(set(k for x in F for k in x["properties"])),
    "genislik_alani_var_mi": False,
    "debi_alani_var_mi": False,
    "kapi": {"esik": ESIK, "gecen": len(gecen), "elenen": len(elenen),
             "ad_sayesinde_gecen": len(n), "scalerank_sayesinde_gecen": a5},
    "scalerank_vs_debi": [{"nehir": h, "scalerank": s, "debi_m3s": q}
                          for s, q, h in sorted(sat)],
    "ters_cift_yuzde": round(100.0 * ters / max(1, cift), 1),
}
hedef = os.path.join(KOK, "denetim", "NEHIR-KAPI-0912.json")
io.open(hedef, "w", encoding="utf-8").write(
    json.dumps(cikti, ensure_ascii=False, indent=1))
print("")
print("yazildi:", hedef)
