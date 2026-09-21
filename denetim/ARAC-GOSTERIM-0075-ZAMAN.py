# -*- coding: utf-8 -*-
"""GOSTERIM-0075 / H-0024 — üst üste binme: KAÇ GÖVDE ÇİFTİ, KAÇ GÜN, NE KADAR ALAN (bütün zaman).

0074'ün `-CAKISMA.py`si TEK GÜN keser (17-140 sn/gün, 10 kesit = 13 dk). Bu alet ZAMAN
boyunu ölçer: her (gövde kaydı × gövde kaydı) çifti için pencere kesişimi (`f<=gün<t`)
ile poligon kesişimi bir kez hesaplanır → km² × gün.

  * Osmanlı `o` (doğrudan) ve `v` (tâbi) kaydı gövde sayılır; `h` (himaye) tâbinin ALT
    KÜMESİ olduğu için (şema notu, app.js) dışarıda — dahil edilseydi tanımı gereği çakışırdı.
  * Pencere kesişimi < 1 gün ya da alan < ESIK_KM2 ise çift sayılmaz.
  * Genişlik = 2·alan/çevre: ≥5 km GÖVDE · 1–5 ARA · <1 SIZINTI (0074 ölçütü, aynen).

SALT OKUR. Girdi HEAD kopyasından (data/ donmuş).
  py denetim/ARAC-GOSTERIM-0075-ZAMAN.py <KOK> [--yil0 1281 --yil1 1923]
Çıktı: denetim/GOSTERIM-0075-ZAMAN.json
"""
import io, os, sys, json, time, math, datetime
from collections import defaultdict
from shapely.geometry import Polygon
from shapely.ops import unary_union
from shapely.strtree import STRtree
from shapely import make_valid

KOK = sys.argv[1]
ESIK_KM2 = 50.0
CIKTI = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                     "denetim", "GOSTERIM-0075-ZAMAN.json")

def satir_json(yol, degisken):
    for satir in io.open(yol, encoding="utf-8"):
        if satir.startswith("window." + degisken + " "):
            i = satir.index("=") + 1
            return json.loads(satir[i:].rstrip().rstrip(";\n").rstrip(";"))
    raise KeyError(degisken)

t0 = time.time()
DON = os.path.join(KOK, "data", "donemler.js"); DEV = os.path.join(KOK, "data", "devletler_harita.js")
PARCALAR = satir_json(DON, "PARCALAR"); PARCA_HALKA = satir_json(DON, "PARCA_HALKA"); DONEMLER = satir_json(DON, "DONEMLER")
D_PARCALAR = satir_json(DEV, "DEVLET_PARCALAR"); D_PARCA_HALKA = satir_json(DEV, "DEVLET_PARCA_HALKA")
DEVLET_HARITA = satir_json(DEV, "DEVLET_HARITA")
print("ayrıştırma %.1f sn" % (time.time() - t0), flush=True)

def poligon(halka, havuz):
    dis = havuz[halka[0]]
    if len(dis) < 4: return None
    ic = [havuz[i] for i in halka[1:] if len(havuz[i]) >= 4]
    try:
        p = Polygon(dis, ic)
        if not p.is_valid: p = make_valid(p)
        return p if not p.is_empty else None
    except Exception:
        return None

def birlestir(ps):
    try: return unary_union(ps)
    except Exception: return unary_union([make_valid(p) for p in ps])

def ordinal(s):
    y, m, d = (int(x) for x in s.split("-"))
    return datetime.date(y, m, d).toordinal()

def km2(g):
    if g.is_empty: return 0.0
    return g.area * (111.32 ** 2) * math.cos(math.radians(g.centroid.y))

def km_cevre(g):
    if g.is_empty: return 0.0
    la = math.radians(g.centroid.y)
    # boylam derecesi enlemle küçülür: çevreyi derece cinsinden ölçüp ortalama ölçekle çarp
    return g.length * 111.32 * math.sqrt((1 + math.cos(la) ** 2) / 2)

KAYIT = []          # (kimlik, f_ord, t_ord, geom)
for d in DONEMLER:
    f, t = d.get("f"), d.get("t")
    if not f or not t: continue
    for alan, kim in (("o", "OSM-dogrudan"), ("v", "OSM-tabi")):
        idx = []
        for e in d.get(alan) or []:
            if isinstance(e, int): idx.append(e)
            elif isinstance(e, dict): idx.extend(e.get("g") or [])
        ps = [poligon(PARCA_HALKA[i], PARCALAR) for i in idx if i < len(PARCA_HALKA)]
        ps = [p for p in ps if p is not None]
        if ps: KAYIT.append((kim, ordinal(f), ordinal(t), birlestir(ps)))
n_osm = len(KAYIT)
for dv in DEVLET_HARITA:
    for d in dv.get("dnm") or []:
        f, t = d.get("f"), d.get("t")
        if not f or not t: continue
        ps = [poligon(D_PARCA_HALKA[i], D_PARCALAR) for i in (d.get("g") or []) if i < len(D_PARCA_HALKA)]
        ps = [p for p in ps if p is not None]
        if ps: KAYIT.append((dv["id"], ordinal(f), ordinal(t), birlestir(ps)))
print("kayıt: %d Osmanlı + %d yabancı = %d · hazır %.1f sn" % (n_osm, len(KAYIT) - n_osm, len(KAYIT), time.time() - t0), flush=True)

agac = STRtree([k[3] for k in KAYIT])
CIFT = defaultdict(lambda: {"pencereler": [], "alan_km2_gun": 0.0, "max_km2": 0.0, "n": 0, "govde_km2_gun": 0.0})
SINIF = {"gövde(>=5km)": [0, 0.0], "ara(1-5km)": [0, 0.0], "sızıntı(<1km)": [0, 0.0]}
sayac = 0
for i, (ka, fa, ta, ga) in enumerate(KAYIT):
    for j in agac.query(ga):
        j = int(j)
        if j <= i: continue
        kb, fb, tb, gb = KAYIT[j]
        if ka == kb: continue
        f, t = max(fa, fb), min(ta, tb)
        if t - f < 1: continue
        try: kes = ga.intersection(gb)
        except Exception: continue
        if kes.is_empty: continue
        a = km2(kes)
        if a < ESIK_KM2: continue
        c = km_cevre(kes)
        gen = 2 * a / c if c else 0
        s = "gövde(>=5km)" if gen >= 5 else ("ara(1-5km)" if gen >= 1 else "sızıntı(<1km)")
        SINIF[s][0] += 1; SINIF[s][1] += a * (t - f)
        anahtar = " + ".join(sorted((ka, kb)))
        r = CIFT[anahtar]
        r["pencereler"].append((f, t)); r["n"] += 1
        r["alan_km2_gun"] += a * (t - f); r["max_km2"] = max(r["max_km2"], a)
        if gen >= 5: r["govde_km2_gun"] += a * (t - f)
        sayac += 1
    if i % 500 == 0:
        print("  %d/%d · %d çakışan kayıt çifti · %.0f sn" % (i, len(KAYIT), sayac, time.time() - t0), flush=True)

def birlesik_gun(pencereler):
    """çakışan pencerelerin birleşimi → toplam gün (aynı çift ardışık kayıtlarda tekrar sayılmasın)."""
    pencereler = sorted(pencereler); top = 0; son = None
    for f, t in pencereler:
        if son is None or f > son: top += t - f; son = t
        elif t > son: top += t - son; son = t
    return top

satirlar = []
for k, r in CIFT.items():
    g = birlesik_gun(r["pencereler"])
    f0 = min(p[0] for p in r["pencereler"]); t0_ = max(p[1] for p in r["pencereler"])
    satirlar.append({"cift": k, "gun": g, "yil": round(g / 365.25, 1),
                     "ilk": datetime.date.fromordinal(f0).isoformat(), "son": datetime.date.fromordinal(t0_).isoformat(),
                     "kayit_cifti": r["n"], "en_buyuk_km2": round(r["max_km2"]),
                     "km2_gun": round(r["alan_km2_gun"]), "govde_km2_gun": round(r["govde_km2_gun"])})
satirlar.sort(key=lambda x: -x["km2_gun"])
toplam = sum(s["km2_gun"] for s in satirlar)
ozet = {"esik_km2": ESIK_KM2, "kayit_osmanli": n_osm, "kayit_yabanci": len(KAYIT) - n_osm,
        "cakisan_kayit_cifti": sayac, "farkli_kimlik_cifti": len(satirlar),
        "toplam_km2_gun": round(toplam),
        "toplam_km2_yil_esdeger": round(toplam / 365.25),
        "sinif": {k: {"kayit_cifti": v[0], "km2_gun": round(v[1]), "pay": round(100 * v[1] / toplam, 1) if toplam else 0}
                  for k, v in SINIF.items()},
        "osmanli_iceren_cift": sum(1 for s in satirlar if "OSM-" in s["cift"]),
        "osmanli_km2_gun": round(sum(s["km2_gun"] for s in satirlar if "OSM-" in s["cift"])),
        "sure_sn": round(time.time() - t0, 1)}
io.open(CIKTI, "w", encoding="utf-8").write(json.dumps({"ozet": ozet, "ilk_60": satirlar[:60], "hepsi": satirlar},
                                                     ensure_ascii=False, indent=1))
print(json.dumps(ozet, ensure_ascii=False, indent=1))
for s in satirlar[:25]:
    print("%-52s %7.1f yıl %s→%s  en büyük %9s km²  %d kayıt" % (s["cift"][:52], s["yil"], s["ilk"], s["son"], "{:,}".format(s["en_buyuk_km2"]), s["kayit_cifti"]))
