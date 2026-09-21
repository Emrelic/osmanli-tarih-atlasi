# -*- coding: utf-8 -*-
"""GOSTERIM-0075 — H-0011 · H-0017 · H-0022 · H-0024 · H-0039 için gövde ÇAKIŞMASI ve sahipsiz-hücre ölçümü.

SALT OKUR. `data/` DONMUŞ (tam koşu sürüyor) — bu yüzden girdi çalışma ağacından DEĞİL,
HEAD'in temiz bir kopyasından (git worktree) okunur: koşu `data/devletler_harita.js`i
yarım yazıyor (112 KB, 20 devlet; HEAD'de 75 MB, ~100 devlet).

Kullanım:
  py denetim/ARAC-GOSTERIM-0075-KESIT.py <KOK> <gun> [<gun> ...]
    KOK = data/donemler.js + data/devletler_harita.js'in bulunduğu depo kökü
Çıktı: denetim/GOSTERIM-0075-KESIT.json
"""
import io, os, sys, json, time, math
from shapely.geometry import Polygon, box
from shapely.ops import unary_union
from shapely.strtree import STRtree
from shapely import make_valid

if len(sys.argv) < 3:
    print(__doc__); sys.exit(1)
KOK = sys.argv[1]
GUNLER = sys.argv[2:]
CIKTI = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                     "denetim", "GOSTERIM-0075-KESIT.json")

# Şartnamedeki kutular (görsel altyazılarından: enlem × boylam)
KUTULAR = {
    "H-0011 Annaba 1832-03-01":    ("1832-03-01", (7.23, 36.48, 8.38, 37.20)),
    "H-0024 Konstantin 1837-10-13": ("1837-10-13", (2.89, 34.42, 8.68, 37.24)),
    "H-0039 Şattülarap 1847-05-31": ("1847-05-31", (45.83, 27.14, 51.23, 31.66)),
    "H-0017-1 Eflak 1834-01-01":    ("1834-01-01", (20.08, 42.67, 30.01, 48.29)),
    "H-0017-2 Yergöğü 1834-01-01":  ("1834-01-01", (24.87, 43.36, 28.35, 45.48)),
    "H-0022-1 İbrail 1836-01-01":   ("1836-01-01", (27.81, 44.61, 28.37, 45.52)),
    "H-0022-2 Yergöğü 1836-01-01":  ("1836-01-01", (24.77, 43.54, 26.54, 44.36)),
}

def satir_json(yol, degisken):
    for satir in io.open(yol, encoding="utf-8"):
        if satir.startswith("window." + degisken + " "):
            i = satir.index("=") + 1
            return json.loads(satir[i:].rstrip().rstrip(";\n").rstrip(";"))
    raise KeyError(degisken + " yok: " + yol)

t0 = time.time()
DON = os.path.join(KOK, "data", "donemler.js")
DEV = os.path.join(KOK, "data", "devletler_harita.js")
PARCALAR = satir_json(DON, "PARCALAR"); PARCA_HALKA = satir_json(DON, "PARCA_HALKA")
DONEMLER = satir_json(DON, "DONEMLER")
D_PARCALAR = satir_json(DEV, "DEVLET_PARCALAR"); D_PARCA_HALKA = satir_json(DEV, "DEVLET_PARCA_HALKA")
DEVLET_HARITA = satir_json(DEV, "DEVLET_HARITA")
print("ayrıştırma %.1f sn · %d dönem · %d devlet" % (time.time() - t0, len(DONEMLER), len(DEVLET_HARITA)))

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

def km2(g):
    if g.is_empty: return 0.0
    return g.area * (111.32 ** 2) * math.cos(math.radians(g.centroid.y))

def gecerli(f, t, g):
    return (not f or f <= g) and (not t or g < t)

def govdeler(gun):
    """{kimlik: [poligon]} — Osmanlı doğrudan/tâbi/himaye + yabancılar (donemler.js'in `f<=gün<t` kuralı)."""
    out = {}
    for d in DONEMLER:
        if not gecerli(d.get("f"), d.get("t"), gun): continue
        for alan, kim in (("o", "OSM-dogrudan"), ("v", "OSM-tabi"), ("h", "OSM-himaye")):
            idx = []
            for e in d.get(alan) or []:
                if isinstance(e, int): idx.append(e)
                elif isinstance(e, dict): idx.extend(e.get("g") or [])
            ps = [poligon(PARCA_HALKA[i], PARCALAR) for i in idx if i < len(PARCA_HALKA)]
            ps = [p for p in ps if p is not None]
            if ps: out.setdefault(kim, []).extend(ps)
        break
    for dv in DEVLET_HARITA:
        for d in dv.get("dnm") or []:
            if not gecerli(d.get("f"), d.get("t"), gun): continue
            ps = [poligon(D_PARCA_HALKA[i], D_PARCALAR) for i in (d.get("g") or []) if i < len(D_PARCA_HALKA)]
            ps = [p for p in ps if p is not None]
            if ps: out.setdefault(dv["id"], []).extend(ps)
            break
    return out

def birlestir(ps):
    try: return unary_union(ps)
    except Exception: return unary_union([make_valid(p) for p in ps])

SON = {}
onbellek = {}
for etiket, (gun, kutu) in KUTULAR.items():
    if gun not in GUNLER: continue
    if gun not in onbellek:
        G = govdeler(gun)
        onbellek[gun] = {k: birlestir(v) for k, v in G.items()}
    B = onbellek[gun]
    lon0, lat0, lon1, lat1 = kutu
    kt = box(lon0, lat0, lon1, lat1)
    kutu_km2 = km2(kt)
    # 1) kutuda hangi kimlik ne kadar yer kaplıyor
    kaplam = {}
    for k, g in B.items():
        i = g.intersection(kt)
        if not i.is_empty:
            a = km2(i)
            if a >= 1: kaplam[k] = round(a, 1)
    # 2) kutudaki çifte iddia: çiftler
    kimlik = [k for k in kaplam]
    parca = {k: B[k].intersection(kt) for k in kimlik}
    ciftler = {}
    for i, a in enumerate(kimlik):
        for b in kimlik[i + 1:]:
            try: kes = parca[a].intersection(parca[b])
            except Exception: continue
            if kes.is_empty: continue
            ar = km2(kes)
            if ar < 1: continue
            ciftler["%s + %s" % (a, b)] = {"km2": round(ar, 1),
                                           "merkez": [round(kes.centroid.y, 3), round(kes.centroid.x, 3)]}
    # 3) kutudaki HİÇBİR gövdenin kaplamadığı alan (sahipsiz DEĞİL — kayıt yokluğu / ufuk değil, GÖVDE deliği)
    hepsi = unary_union(list(parca.values())) if parca else box(0, 0, 0, 0)
    bos = kt.difference(hepsi)
    SON[etiket] = {"gun": gun, "kutu_lon0lat0lon1lat1": kutu, "kutu_km2": round(kutu_km2),
                   "kaplam_km2": dict(sorted(kaplam.items(), key=lambda x: -x[1])),
                   "cift_sayisi": len(ciftler),
                   "cifte_iddia_toplam_km2": round(sum(v["km2"] for v in ciftler.values()), 1),
                   "ciftler": dict(sorted(ciftler.items(), key=lambda x: -x[1]["km2"])),
                   "hicbir_govdenin_kaplamadigi_km2_denizDahil": round(km2(bos), 1)}
    print("\n== %s  (kutu %s km²)" % (etiket, "{:,.0f}".format(kutu_km2)))
    print("  kaplam:", ", ".join("%s %s" % (k, "{:,.0f}".format(v)) for k, v in list(SON[etiket]["kaplam_km2"].items())[:10]))
    print("  çift %d · çifte iddia %s km²" % (len(ciftler), "{:,.0f}".format(SON[etiket]["cifte_iddia_toplam_km2"])))
    for ad, v in list(SON[etiket]["ciftler"].items())[:8]:
        print("     %-48s %10s km²  merkez %s" % (ad[:48], "{:,.0f}".format(v["km2"]), v["merkez"]))

io.open(CIKTI, "w", encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("\nyazıldı:", CIKTI, "· toplam %.1f sn" % (time.time() - t0))
