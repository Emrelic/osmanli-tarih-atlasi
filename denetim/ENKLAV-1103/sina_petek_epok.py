# -*- coding: utf-8 -*-
"""
sina_petek_epok.py — MOTOR-ENKLAV-KIRP-1104 BÜTÜNLEŞME sınaması: motorun GERÇEK
`petek_epok` işlevi (yaması dahil) AST ile sökülüp koşturulur; bayrak KAPALI ve
AÇIK (R=10) aynı girdide karşılaştırılır.

STUB'LAR (beyanlı — sınanmayan kısım):
  · MOTOR_YURUYUS=False ⇒ ölü peteğin payı ③ yerel Voronoi yolundan dağıtılır
    (koşuda YÜRÜYÜŞ ızgarası kullanılır; o yol bu sınamada KOŞMAZ).
  · devir_kumesi(g) = pencere içi `kur > g` ya da `bit <= g` (kuşatılmışlık kolu yok).
  · PETEK_D = koşu 32 `petek_govde.js` — yalnız pencere hücreleri, gerisi boş.
  · _mo_tavanli = False, sayac = boş.
Gerçek olarak koşan: petek_epok, _olu_bilesenler, _canli_komsular, enklav_gunu,
  _enklav_disk, _enklav_kirp, _varlik_anahtar(değil — devir stub'ı ile ayrı sınanır),
  poligonal, temiz, _poligonlar, _ham_km2, _km_derece, gn.
"""
import ast, os, sys, math, time
KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(KOK, "arac", "olc_enklav"))
sys.path.insert(0, os.path.join(KOK, "arac"))
from _ortak import oku_petek_govde
import girdi, gun
import shapely
from shapely.geometry import shape, box, Polygon, MultiPolygon, Point, MultiPoint
from shapely.ops import unary_union, voronoi_diagram
from shapely.affinity import scale as _scale
from shapely.strtree import STRtree
from shapely.validation import make_valid

ISTENEN = ["temiz", "poligonal", "_poligonlar", "_ham_km2", "_km_derece", "gn",
           "enklav_gunu", "_enklav_disk", "_enklav_kirp", "_canli_komsular",
           "_olu_bilesenler", "petek_epok"]
src = open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
kod = {n.name: ast.get_source_segment(src, n) for n in ast.parse(src).body
       if isinstance(n, ast.FunctionDef) and n.name in ISTENEN}
assert set(kod) == set(ISTENEN), set(ISTENEN) - set(kod)

GOV, H = oku_petek_govde()
Y = girdi.yukle(sessiz=True)
N = len(Y)
pts = [Point(y["lon"], y["lat"]) for y in Y]
for i in range(N):
    if not H[i].is_empty and H[i].distance(pts[i]) >= 0.05:
        H[i] = Polygon()
ENK_TUM = frozenset(i for i, y in enumerate(Y) if any(p.get("enklav") for p in y["s"]))


def ns_kur(pencere, R):
    ix = [i for i in range(N) if not H[i].is_empty and pencere.intersects(H[i])]
    PD = [Polygon()] * N
    for i in ix:
        PD[i] = H[i]
    NS = dict(shapely=shapely, shape=shape, box=box, Polygon=Polygon, MultiPolygon=MultiPolygon,
              Point=Point, MultiPoint=MultiPoint, unary_union=unary_union,
              voronoi_diagram=voronoi_diagram, _scale=_scale, STRtree=STRtree,
              make_valid=make_valid, math=math, time=time, MOTOR_YURUYUS=False, _YR_SAHIP=None,
              R_DUNYA=6371.0088, _GUNMOD=gun, _GN_ONB={}, YERLER=Y, noktalar=pts,
              _ENKLAV_GUN_EZBER={}, ENKLAV_KIRP_KM=R, _ENKLAV=ENK_TUM, PETEK_D=PD,
              _BANT_HAM={}, MO_SAAT=0.0, YURUYUS_SAAT=0.0, _VARLIK_ONBELLEK={},
              _VARLIK_DEVIR={}, _VARLIK_PAY={}, _EPOK_PAY_TOL=1e-12,
              _mo_tavanli=lambda g: False, sayac=lambda *a, **k: None,
              _KUS_IX=ix, _KUS_AGAC=STRtree([H[i] for i in ix]))
    for ad in ISTENEN:
        exec(kod[ad], NS)
    gnf = NS["gn"]
    pix = set(ix)

    def devir_kumesi(g):
        G = gnf(g)
        return frozenset(i for i in pix if (Y[i].get("kur") and gnf(Y[i]["kur"]) > G)
                         or (Y[i].get("bit") and gnf(Y[i]["bit"]) <= G))
    NS["devir_kumesi"] = devir_kumesi
    return NS, ix


def sahip(NS, y, G):
    gnf = NS["gn"]
    for k, lst in (("OSMANLI", y.get("d")), ("TABI", y.get("v")), (None, y.get("s"))):
        for p in lst or []:
            if gnf(p["f"]) <= G < gnf(p["t"]):
                return k or p.get("d") or "?"
    return None


def olc(NS, ix, hucre, g, pencere):
    G = NS["gn"](g)
    dev = NS["devir_kumesi"](g)
    km2 = NS["_ham_km2"]
    canli = [i for i in ix if i not in dev]
    by = {}
    for i in canli:
        if hucre[i].is_empty:
            continue
        s = sahip(NS, Y[i], G)
        if s:
            by.setdefault(s, []).append(i)
    nok = {}
    for s, ii in by.items():
        u = unary_union([hucre[i].buffer(0.0006) for i in ii]).buffer(0)
        for p in (list(u.geoms) if u.geom_type == "MultiPolygon" else [u]):
            if not pencere.contains(p.representative_point()):
                continue
            ic = [i for i in canli if sahip(NS, Y[i], G) == s and p.buffer(0.01).contains(pts[i])]
            if not ic and km2(p) >= 1:
                nok.setdefault(s, []).append(round(km2(p)))
    cel = []
    dolu = [i for i in ix if not hucre[i].is_empty]
    ag = STRtree([hucre[i] for i in dolu])
    for i in canli:
        s = sahip(NS, Y[i], G)
        if s is None or not pencere.contains(pts[i]):
            continue
        for q in ag.query(pts[i]):
            k = dolu[int(q)]
            if hucre[k].contains(pts[i]) and sahip(NS, Y[k], G) != s:
                cel.append(f"{Y[i]['ad']}({s})∈{Y[k]['ad']}({sahip(NS, Y[k], G)})")
    top = sum(km2(hucre[i]) for i in ix)
    return nok, cel, top


def kos(etiket, pencere, g):
    print(f"\n=== {etiket} · {g}")
    sonuc = {}
    for R in (0.0, 10.0):
        NS, ix = ns_kur(pencere, R)
        t = time.time()
        h = NS["petek_epok"](g)
        sure = time.time() - t
        nok, cel, top = olc(NS, ix, h, g, pencere)
        enk = [i for i in ix if i in NS["enklav_gunu"](g)]
        anah = list(NS["_VARLIK_ONBELLEK"].keys())
        pay = list(NS["_VARLIK_PAY"].values())
        print(f"  R={R:g}: {sure:.1f} sn · önbellek anahtarı {'ENKLAV ile' if anah and isinstance(anah[0], tuple) and 'ENKLAV' in anah[0] else 'eski biçim'}"
              f" · pay {({k: v for k, v in pay[0].items() if 'enklav' in k} if pay else {})}")
        for i in sorted(set(enk) | {i for i in ix if i in ENK_TUM and Y[i]['ad'] in ('Oran', "Mersa'l-Kebîr", 'Melîle (Melilla)', 'Bâdis (Peñón de Vélez)', 'Kefe')}):
            print(f"     {Y[i]['ad']:<26} {NS['_ham_km2'](h[i]):>8,.0f} km²")
        print(f"     noktasız parça: {nok or 'YOK'}")
        print(f"     nokta-başka-sahip çelişkisi: {len(cel)} {cel[:4]}")
        print(f"     pencere alanı {top:,.1f} km²")
        for r in NS["_VARLIK_DEVIR"].get(anah[0], []) if anah else []:
            if "ENKLAV" in r[3]:
                print(f"     kayıt: {r}")
        sonuc[R] = (nok, cel, top)
    d = sonuc[10.0][2] - sonuc[0.0][2]
    print(f"  KORUNUM farkı (açık − kapalı): {d:+.3f} km²")


kos("ORAN", box(-2.6, 34.4, 1.4, 36.3), "1600-06-15")
kos("ORAN (Osmanlı devri — kırpma YOK beklenir)", box(-2.6, 34.4, 1.4, 36.3), "1800-06-15")
kos("BÂDİS", box(-5.6, 34.2, -2.6, 35.6), "1650-06-15")
kos("KIRIM 1400", box(32.8, 44.2, 37.2, 45.8), "1400-06-15")
kos("LUGOS __BOSLUK__ (kırpma YOK beklenir)", box(20.5, 45.0, 23.0, 46.4), "1690-06-15")
