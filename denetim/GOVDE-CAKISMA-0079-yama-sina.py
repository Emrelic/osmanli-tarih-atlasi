# -*- coding: utf-8 -*-
"""GOVDE-CAKISMA-0079 — yamanin KENDI kodunu gercek motor ciktisina uygular.

Yamali dosyadan (`<yama-dizini>/b/arac/uret_petek.py`) `_gun_sahipleri`,
`_komsu_toprak_cikar`, `_mp_geo` METIN olarak cekilir ve exec edilir (kopya
yazilmaz ⇒ sinanan kod yamanin ta kendisidir). Motor globalleri asama aletinin
yeniden kurulumuyla saglanir: petek_epok ≈ epok_hucre (en yakin canliya
Voronoi), DOLGU KAPALI (ekleyici kapi kopyalanmadi — SINIRLAMA).
Gercek SON govdelere (devletler_harita.js) uygulanir; yama motorda gövdeyi
tam bu noktada (puan + KARA sonrasi) keser.
Kullanim: py denetim/GOVDE-CAKISMA-0079-yama-sina.py <yama-dizini>
"""
import sys, os, re, importlib.util
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
BURA = os.path.dirname(os.path.abspath(__file__))
yamali = os.path.join(sys.argv[1], "b", "arac", "uret_petek.py")
_s = importlib.util.spec_from_file_location("asama", os.path.join(BURA, "GOVDE-CAKISMA-0079-asama.py"))
A = importlib.util.module_from_spec(_s); sys.argv = sys.argv[:1]; _s.loader.exec_module(A)
from shapely.geometry import Polygon, MultiPolygon, box
from shapely.ops import unary_union

kod = open(yamali, encoding="utf-8").read()
m = re.search(r"^_SAHIP_EZBER = \{\}.*?(?=^def _yabanci_govde_hesap)", kod, re.S | re.M)
assert m, "yama kodu bulunamadi"

PENCERE = [
    ("Kafkas", "1921-06-01", (40.99, 40.45, 43.4, 41.59)),
    ("Trabzon", "1281-01-01", (36.73, 39.53, 41.81, 41.52)),
    ("G.Cin", "1281-01-01", (103.38, 20.33, 112.73, 27.36)),
    ("Nigbolu", "1915-09-06", (24.2, 43.6, 25.8, 44.4)),
    ("Cizre", "1281-01-01", (42.02, 36.63, 43.11, 38.00)),
]
for ad, g, kutu in PENCERE:
    H = A.epok_hucre(g, kutu, pay=6.0)
    pe = [H.get(j, Polygon()) for j in range(len(A.Y))]
    ns = {"YERLER": A.Y, "DOLGU_ACIK": False, "_TUM_AGAC": A.AGAC, "box": box,
          "unary_union": unary_union, "Polygon": Polygon, "MultiPolygon": MultiPolygon,
          "temiz": A.temiz, "poligonal": lambda q: q,
          "devir_kumesi": lambda a: {j for j, y in enumerate(A.Y) if A.olu_mu(y, a)},
          "_osm_aktif": lambda y, a: any(dn["f"] <= a < dn["t"] for dn in y["d"] + y["v"]),
          "_dolgu_kumesi": lambda a: {}, "petek_epok": lambda a: pe}
    exec(m.group(0), ns)
    W = box(*kutu); lat = (kutu[1] + kutu[3]) / 2
    G = [x for x in A.olc.govdeler(g, kutu) if x[0].startswith("devlet:")]
    once, sonra = {}, {}
    for gad, son, f, t in G:
        did = gad[7:]
        ak = A.aktif_kume(did, g)
        once[gad] = son
        sonra[gad] = ns["_komsu_toprak_cikar"](did, ak, g, ns["_mp_geo"](
            [[list(p.exterior.coords)] + [list(r.coords) for r in p.interiors]
             for p in getattr(son, "geoms", [son]) if p.geom_type == "Polygon"]))
    ad_ = list(once)
    for i in range(len(ad_)):
        for k in range(i + 1, len(ad_)):
            o1 = A.km2(A.kes(A.kes(once[ad_[i]], once[ad_[k]]), W), lat)
            o2 = A.km2(A.kes(A.kes(sonra[ad_[i]], sonra[ad_[k]]), W), lat)
            if o1 >= 1 or o2 >= 1:
                print(f"{ad:8s} {g}  {ad_[i][7:]} × {ad_[k][7:]}:  yama ONCESI {o1:,.0f} km² → SONRASI {o2:,.0f} km²")
    for gad in ad_:
        kay = A.km2(A.kes(A.fark(once[gad], sonra[gad]), W), lat)
        print(f"{'':8s} {gad[7:]:24s} kesilen {kay:,.0f} km²")
    print(f"{'':8s} sayac: {ns['_KOMSU_CIKAR_SAYAC']}")
