# -*- coding: utf-8 -*-
"""H-0008 — UST USTE BINMIS TOPRAK (cifte iddia) olcumu, VEKTOR yontemiyle.

ENKLAV-0072 (20 Eylul) ayni soruyu 0,01 derecelik IZGARA ile, TEK kutuda sordu
(Karadag, 1814-01-28: 1.563 km2 cifte iddiali). Izgara dunya olceginde
imkansiz (0,01 derece ~ 6,5 milyar hucre). Bu betik ayni soruyu poligon
KESISIMIYLE sorar: sonuc km2 cinsinden AYNI buyuklugu olcer, maliyet gövde
sayisiyla (yuzlerce) orantilidir, hucre sayisiyla degil.

Kullanim:
  py denetim/ARAC-HARITA-DURUM-0074-CAKISMA.py <gun> [<gun> ...]
  py denetim/ARAC-HARITA-DURUM-0074-CAKISMA.py --kesit     (10 yillik kesit)
Cikti: denetim/HARITA-DURUM-0074-CAKISMA.json
"""
import io, os, sys, json, time, math
from shapely.geometry import Polygon, MultiPolygon
from shapely.ops import unary_union
from shapely.strtree import STRtree
from shapely import make_valid

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")

def _satir_json(yol, degisken):
    """window.<degisken> = <JSON>; satirini ayrıstir."""
    for satir in io.open(yol, encoding="utf-8"):
        if satir.startswith("window." + degisken + " "):
            i = satir.index("=") + 1
            return json.loads(satir[i:].rstrip().rstrip(";\n").rstrip(";"))
    raise KeyError(degisken + " yok: " + yol)

t0 = time.time()
DON = os.path.join(DATA, "donemler.js")
DEV = os.path.join(DATA, "devletler_harita.js")
PARCALAR    = _satir_json(DON, "PARCALAR")
PARCA_HALKA = _satir_json(DON, "PARCA_HALKA")
DONEMLER    = _satir_json(DON, "DONEMLER")
t1 = time.time()
D_PARCALAR    = _satir_json(DEV, "DEVLET_PARCALAR")
D_PARCA_HALKA = _satir_json(DEV, "DEVLET_PARCA_HALKA")
DEVLET_HARITA = _satir_json(DEV, "DEVLET_HARITA")
t2 = time.time()
print("ayristirma: donemler.js %.1f sn (%d parca, %d donem) · devletler_harita.js %.1f sn "
      "(%d parca, %d devlet)" % (t1-t0, len(PARCA_HALKA), len(DONEMLER),
                                 t2-t1, len(D_PARCA_HALKA), len(DEVLET_HARITA)))

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
    """Kaba esit-alan: derece^2 -> km^2, agirlik merkezi enlemiyle duzeltilmis."""
    if g.is_empty: return 0.0
    try: la = g.centroid.y
    except Exception: return 0.0
    return g.area * (111.32 ** 2) * math.cos(math.radians(la))

def gun_gecerli(f, t, g):
    return (not f or f <= g) and (not t or g < t)

def govdeler(gun):
    """gun icin {kimlik: [poligon, ...]} — Osmanli dogrudan/tabi + yabancilar."""
    out = {}
    for d in DONEMLER:
        if not gun_gecerli(d.get("f"), d.get("t"), gun): continue
        for alan, kim in (("o", "OSM-dogrudan"), ("v", "OSM-tabi"), ("h", "OSM-himaye")):
            ham = d.get(alan) or []
            idx = []
            for e in ham:
                if isinstance(e, int): idx.append(e)
                elif isinstance(e, dict): idx.extend(e.get("g") or [])
            ps = [poligon(PARCA_HALKA[i], PARCALAR) for i in idx if i < len(PARCA_HALKA)]
            ps = [p for p in ps if p is not None]
            if ps: out.setdefault(kim, []).extend(ps)
        break
    for dv in DEVLET_HARITA:
        for d in dv.get("dnm") or []:
            if not gun_gecerli(d.get("f"), d.get("t"), gun): continue
            ps = [poligon(D_PARCA_HALKA[i], D_PARCALAR) for i in (d.get("g") or [])
                  if i < len(D_PARCA_HALKA)]
            ps = [p for p in ps if p is not None]
            if ps: out.setdefault(dv["id"], []).extend(ps)
            break
    return out

def olc(gun):
    t = time.time()
    G = govdeler(gun)
    kimlik = sorted(G)
    birlesik = {}
    for k in kimlik:
        try: birlesik[k] = unary_union(G[k])
        except Exception: birlesik[k] = unary_union([make_valid(p) for p in G[k]])
    liste = [birlesik[k] for k in kimlik]
    agac = STRtree(liste)
    ciftler = {}
    toplam_ort = 0.0
    for i, k in enumerate(kimlik):
        for j in agac.query(liste[i]):
            j = int(j)
            if j <= i: continue
            try: kes = liste[i].intersection(liste[j])
            except Exception: continue
            if kes.is_empty: continue
            a = km2(kes)
            if a < 1.0: continue          # 1 km2 alti gurultu (sinir yaslama payi)
            ciftler["%s + %s" % (k, kimlik[j])] = {
                "km2": round(a, 1),
                "merkez": [round(kes.centroid.y, 3), round(kes.centroid.x, 3)],
                "kutu": [round(v, 2) for v in kes.bounds],
            }
            toplam_ort += a
    sahipli = km2(unary_union(liste))
    sn = time.time() - t
    return {"gun": gun, "kimlik_sayisi": len(kimlik),
            "sahipli_toprak_km2": round(sahipli, 1),
            "cifte_iddiali_km2": round(toplam_ort, 1),
            "cifte_iddia_yuzde": round(100.0 * toplam_ort / sahipli, 2) if sahipli else 0,
            "cift_sayisi": len(ciftler),
            "ciftler": dict(sorted(ciftler.items(), key=lambda x: -x[1]["km2"])),
            "sure_sn": round(sn, 1)}

if __name__ == "__main__":
    arg = sys.argv[1:]
    if not arg: arg = ["1828-02-22"]
    if arg[0] == "--kesit":
        arg = ["1300-01-01", "1400-01-01", "1500-01-01", "1600-01-01", "1700-01-01",
               "1800-01-01", "1828-02-22", "1850-01-01", "1900-01-01", "1920-01-01"]
    SON = {"_ayristirma_sn": round(t2 - t0, 1), "olcumler": {}}
    for g in arg:
        r = olc(g)
        SON["olcumler"][g] = r
        print("%s | kimlik %3d | sahipli %12s km2 | CIFTE %10s km2 (%.2f%%) | %d cift | %.1f sn"
              % (g, r["kimlik_sayisi"], "{:,.0f}".format(r["sahipli_toprak_km2"]),
                 "{:,.0f}".format(r["cifte_iddiali_km2"]), r["cifte_iddia_yuzde"],
                 r["cift_sayisi"], r["sure_sn"]))
        for ad, v in list(r["ciftler"].items())[:6]:
            print("     %-46s %10s km2  merkez %s" % (ad[:46], "{:,.0f}".format(v["km2"]), v["merkez"]))
    yol = os.path.join(KOK, "denetim", "HARITA-DURUM-0074-CAKISMA.json")
    io.open(yol, "w", encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
    print("yazildi:", yol)
