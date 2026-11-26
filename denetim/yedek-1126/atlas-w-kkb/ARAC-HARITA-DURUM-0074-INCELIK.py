# -*- coding: utf-8 -*-
"""H-0008 ALT SINIFLANDIRMA — cifte iddiali toprak KIL PAYI SIZINTI mi,
GERCEK GOVDE mi?

Olcut: ortalama genislik = 2 x alan / cevre (km). Iki govdenin ortak sinir
boyunca sadelestirme/yaslama artefakti cok INCE bir serit birakir (ort.
genislik < 1 km); gercek cifte iddia GENIS bir lekedir.

Kullanim: py denetim/ARAC-HARITA-DURUM-0074-INCELIK.py <gun>
Cikti: denetim/HARITA-DURUM-0074-INCELIK-<gun>.json
"""
import io, os, sys, json, math, time
from shapely.ops import unary_union
from shapely.strtree import STRtree
from shapely import make_valid

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "denetim"))
import importlib.util
spec = importlib.util.spec_from_file_location(
    "cak", os.path.join(KOK, "denetim", "ARAC-HARITA-DURUM-0074-CAKISMA.py"))
cak = importlib.util.module_from_spec(spec)
sys.argv = [sys.argv[0]]            # alt betigin __main__ blogunu etkisizlestir
spec.loader.exec_module(cak)

GUN = sys.argv[1] if len(sys.argv) > 1 else "1850-01-01"
t = time.time()
G = cak.govdeler(GUN)
kimlik = sorted(G)
birlesik = {}
for k in kimlik:
    try: birlesik[k] = unary_union(G[k])
    except Exception: birlesik[k] = unary_union([make_valid(p) for p in G[k]])
liste = [birlesik[k] for k in kimlik]
agac = STRtree(liste)

def cevre_km(g):
    """Cevre: derece -> km (agirlik merkezi enlemi duzeltmeli kaba deger)."""
    la = math.radians(g.centroid.y)
    # x yonu cos(enlem) ile kisalir; kaba ortalama olcek kullaniyoruz
    return g.length * 111.32 * math.sqrt((1 + math.cos(la) ** 2) / 2)

kayit = []
for i, k in enumerate(kimlik):
    for j in agac.query(liste[i]):
        j = int(j)
        if j <= i: continue
        try: kes = liste[i].intersection(liste[j])
        except Exception: continue
        if kes.is_empty: continue
        a = cak.km2(kes)
        if a < 1.0: continue
        c = cevre_km(kes)
        gen = (2.0 * a / c) if c else 0.0
        kayit.append({"cift": "%s + %s" % (k, kimlik[j]), "km2": round(a, 1),
                      "cevre_km": round(c, 1), "ort_genislik_km": round(gen, 3),
                      "parca": len(kes.geoms) if kes.geom_type.startswith("Multi") else 1,
                      "merkez": [round(kes.centroid.y, 3), round(kes.centroid.x, 3)]})

kayit.sort(key=lambda x: -x["km2"])
SIZ = [r for r in kayit if r["ort_genislik_km"] < 1.0]
ORTA = [r for r in kayit if 1.0 <= r["ort_genislik_km"] < 5.0]
GOVDE = [r for r in kayit if r["ort_genislik_km"] >= 5.0]
ozet = {
  "gun": GUN, "cift": len(kayit),
  "toplam_km2": round(sum(r["km2"] for r in kayit), 1),
  "SIZINTI_<1km": {"cift": len(SIZ), "km2": round(sum(r["km2"] for r in SIZ), 1)},
  "ARA_1-5km":    {"cift": len(ORTA), "km2": round(sum(r["km2"] for r in ORTA), 1)},
  "GOVDE_>=5km":  {"cift": len(GOVDE), "km2": round(sum(r["km2"] for r in GOVDE), 1)},
  "sure_sn": round(time.time() - t, 1),
}
print(json.dumps(ozet, ensure_ascii=False, indent=1))
print("\nEN BUYUK 20 GOVDE (gercek cifte iddia):")
for r in GOVDE[:20]:
    sys.stdout.buffer.write(("  %-44s %10s km2  gen %6.1f km  merkez %s\n" % (
        r["cift"][:44], "{:,.0f}".format(r["km2"]), r["ort_genislik_km"],
        r["merkez"])).encode("utf-8", "replace"))
print("\nEN BUYUK 10 SIZINTI (sinir artefakti):")
for r in SIZ[:10]:
    sys.stdout.buffer.write(("  %-44s %10s km2  gen %6.3f km  parca %d\n" % (
        r["cift"][:44], "{:,.0f}".format(r["km2"]), r["ort_genislik_km"],
        r["parca"])).encode("utf-8", "replace"))

io.open(os.path.join(KOK, "denetim", "HARITA-DURUM-0074-INCELIK-%s.json" % GUN), "w",
        encoding="utf-8").write(json.dumps({"ozet": ozet, "ciftler": kayit},
                                           ensure_ascii=False, indent=1))
print("yazildi")
