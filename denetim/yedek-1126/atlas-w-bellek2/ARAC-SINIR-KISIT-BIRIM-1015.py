# -*- coding: utf-8 -*-
"""MOTOR-SINIR-KISIT-1015 — BİRİM SINAVI (motor koşturmadan, saniyeler).

Yamalı `arac/uret_petek.py`den kısıt bloklarının METNİ okunur ve sahte motor
ortamında (iki/üç yerleşim, bilinen Voronoi) `exec` edilir — kopya kod YOK,
sınanan satırlar motorun satırlarıdır. İKİ YÖNDE sorular:
  S1 taşan petek KESİLİR ve karşı tarafa EKLENİR (alanlar eşit)
  S2 koridorun ötesine uzanan kuyruk da kesilir/eklenir (yetim kuralı)
  S3 hatta değmeyen parça (eksklav) KESİLMEZ
  S4 karşı taraf o gün sahnede yoksa KESİLMEZ (delik açılmaz)
  S5 taraf tâbi penceresindeyse hat UYGULANMAZ
  S6 hat penceresi dışında hiçbir şey değişmez
  S7 ters yazılmış sol_taraf (TERS YAKA ŞÜPHESİ) uygulanmaz
  S8 kendi yakasındaki gövde hiç değişmez
  S9 hatanın gövdeyi BOZMADAN döndüğü (try kolu)
Kullanım: py denetim/ARAC-SINIR-KISIT-BIRIM-1015.py   (çıkış 0 = hepsi geçti)
"""
import io, math, os, re, sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
AG = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = io.open(os.environ.get("SK_MOTOR") or os.path.join(AG, "arac", "uret_petek.py"), encoding="utf-8").read().replace("\r\n", "\n")

import shapely
from shapely.geometry import box, Polygon, MultiPolygon, Point, LineString, MultiLineString
from shapely.ops import unary_union, voronoi_diagram
from shapely.strtree import STRtree
from shapely.prepared import prep
from shapely.validation import make_valid


def blok(bas, son):
    i = SRC.index(bas)
    j = SRC.index(son, i)
    return SRC[i:j]


B1 = blok("def _sk_pad(s):", 'asama("Girdi anlık görüntüsü")')
B2 = blok("_SK_HATLAR = []\n", 'asama("Yabancı devlet gövdeleri")')


def temiz(q):
    if not q.is_valid:
        q = make_valid(q)
    if q.geom_type == "GeometryCollection":
        q = unary_union([p for p in q.geoms if p.geom_type in ("Polygon", "MultiPolygon")])
    return q.buffer(0)


def poligonal(g):
    if g.geom_type == "GeometryCollection" or not g.is_valid:
        return temiz(g)
    if g.geom_type in ("LineString", "MultiLineString", "Point", "MultiPoint"):
        return Polygon()
    return g


def ortam(noktalar_xy, sahip, hat, tabi=None, sahne=None, kutu=(-3, -3, 3, 3), ek_petek=None):
    """noktalar_xy: [(x,y)] · sahip: [kimlik] (s: tek dönem 1900-2000) · hat: D kaydı."""
    os.environ.pop("MOTOR_SINIR_KISIT", None)
    G = dict(os=os, sys=sys, json=__import__("json"), math=math, re=re, box=box, Polygon=Polygon,
             MultiPolygon=MultiPolygon, Point=Point, LineString=LineString,
             MultiLineString=MultiLineString, unary_union=unary_union, STRtree=STRtree,
             prep=prep, temiz=temiz, _th=__import__("threading"), MultiPoint=shapely.MultiPoint, poligonal=poligonal, shapely=shapely,
             KOK=AG, girdi=None, EPOK="1000-01-01", KESIT_SON="2001-01-03",
             PUAN_KAPALI=True, _HARITA_ALT={}, BOYALAR={k: ("", "#000") for k in set(sahip)})
    exec(B1, G)
    assert G["SINIR_KISIT"] is False
    G["SINIR_KISIT"] = True
    G["_SK_HAM"] = hat if isinstance(hat, list) else [hat]
    G["_SK_TABI"] = tabi or {}
    nk = [Point(x, y) for x, y in noktalar_xy]
    vd = voronoi_diagram(shapely.MultiPoint(nk), envelope=box(*kutu))
    pe = []
    for p in nk:
        h = [c for c in vd.geoms if c.contains(p)][0]
        pe.append(h.intersection(box(*kutu)))
    if ek_petek:
        for i, g in ek_petek.items():
            pe[i] = unary_union([pe[i], g])
    G["PETEK_D"] = pe
    G["noktalar"] = nk
    G["_TUM_AGAC"] = STRtree(nk)
    G["YERLER"] = [{"ad": f"N{i}", "lon": x, "lat": y,
                    "s": [{"d": sahip[i], "f": "1900-01-01", "t": "2000-01-01"}], "d": [], "v": []}
                   for i, (x, y) in enumerate(noktalar_xy)]
    kim = {i: sahip[i] for i in range(len(nk)) if sahne is None or sahip[i] in sahne}
    G["_gun_sahipleri"] = lambda a: kim
    G["petek_epok"] = lambda a: pe
    G["_puan_bolgesi"] = lambda *x: None
    exec(B2, G)
    return G, pe


def govde(pe, sahip, did):
    return unary_union([pe[i] for i in range(len(pe)) if sahip[i] == did])


HAT = {"id": "test-hat", "taraflar": ["X", "Y"], "sol_taraf": "X", "sinif": "E",
       "f": "1910-01-01", "t": "1950-01-01", "hat": [[0.0, -2.5], [0.0, 2.5]]}
# kuzeye giden hat ⇒ SOL = batı (x<0) = X · SAĞ = doğu = Y


def S(ad, kosul, ayrinti=""):
    print(("  ✓ " if kosul else "  ✗ ") + ad + (f"  [{ayrinti}]" if ayrinti else ""))
    return bool(kosul)


def main():
    sonuc = []
    xy = [(-0.3, 0.0), (1.5, 0.0)]           # X'in Voronoi sınırı x=0,6 ⇒ ~0,6° (≈67 km) taşma
    sahip = ["X", "Y"]
    G, pe = ortam(xy, sahip, HAT)
    sonuc.append(S("hazırlık: 1 hat kısıt, 2 devlet", len(G["_SK_HATLAR"]) == 1 and len(G["_SK_TARAF"]) == 2,
                   f"{len(G['_SK_HATLAR'])} hat"))
    gx, gy = govde(pe, sahip, "X"), govde(pe, sahip, "Y")
    a = "1920-01-01"
    nx = G["_sinir_kisit_uygula"]("X", frozenset([0]), a, gx)
    ny = G["_sinir_kisit_uygula"]("Y", frozenset([1]), a, gy)
    dogu = box(0, -3, 3, 3)
    bati = box(-3, -3, 0, 3)
    sonuc.append(S("S1 X'in doğu (Y) yakasındaki payı koridorda kesildi",
                   nx.intersection(dogu).intersection(box(0, -2.5, 0.72, 2.5)).area < 1e-6,
                   f"X∩doğu önce {gx.intersection(dogu).area:.4f} sonra {nx.intersection(dogu).area:.6f}"))
    sonuc.append(S("S1 kesilen pay Y'ye eklendi (Y ∪ X = önce ile aynı, binme yok)",
                   abs(unary_union([nx, ny]).area - unary_union([gx, gy]).area) < 1e-6
                   and nx.intersection(ny).area < 1e-6,
                   f"birleşim {unary_union([nx, ny]).area:.4f} = {unary_union([gx, gy]).area:.4f} · binme {nx.intersection(ny).area:.6f}"))
    sonuc.append(S("S8 X'in kendi (batı) yakası değişmedi",
                   abs(nx.intersection(bati).area - gx.intersection(bati).area) < 1e-9))
    # S2 kuyruk: koridor 80 km ≈ 0,72° (enlem 0'da); taşma 0,6° ⇒ kuyruk yok. Daha uzak Y ile:
    xy2 = [(-0.3, 0.0), (2.6, 0.0)]           # sınır x=1,15 ⇒ 1,15° (≈128 km) > koridor
    G2, pe2 = ortam(xy2, sahip, HAT, kutu=(-4, -3, 4, 3))
    gx2, gy2 = govde(pe2, sahip, "X"), govde(pe2, sahip, "Y")
    nx2 = G2["_sinir_kisit_uygula"]("X", frozenset([0]), a, gx2)
    ny2 = G2["_sinir_kisit_uygula"]("Y", frozenset([1]), a, gy2)
    sonuc.append(S("S2 koridor ötesi kuyruk (yetim) da kesildi ve Y'ye eklendi",
                   nx2.intersection(box(0, -2.5, 4, 2.5)).area < 1e-6
                   and abs(unary_union([nx2, ny2]).area - unary_union([gx2, gy2]).area) < 1e-6,
                   f"X doğuda (hat boyu) {nx2.intersection(box(0, -2.5, 4, 2.5)).area:.6f} · yetim kes {G2['_SK_SAYAC']['yetim_kes']} ekle {G2['_SK_SAYAC']['yetim_ekle']}"))
    # S3 eksklav: X'e hattan kopuk, doğuda ayrı bir parça (Y gövdesinin içinde ada)
    ada = box(0.9, 1.0, 1.1, 1.2)
    gx3 = unary_union([gx, ada])
    nx3 = G["_sinir_kisit_uygula"]("X", frozenset([0]), a, gx3)
    sonuc.append(S("S3 hatta değmeyen eksklav KESİLMEDİ", nx3.intersection(ada).area > 0.99 * ada.area))
    # S4 karşı taraf sahnede yok
    G4, pe4 = ortam(xy, sahip, HAT, sahne={"X"})
    nx4 = G4["_sinir_kisit_uygula"]("X", frozenset([0]), a, govde(pe4, sahip, "X"))
    sonuc.append(S("S4 karşı taraf sahnede yoksa kesilmedi (delik açılmaz)",
                   abs(nx4.area - govde(pe4, sahip, "X").area) < 1e-12,
                   f"karşı yok sayacı {G4['_SK_SAYAC']['karsi_yok']}"))
    # S5 tâbi
    G5, pe5 = ortam(xy, sahip, HAT, tabi={"Y": [("1915-01-01", "1925-01-01")]})
    nx5 = G5["_sinir_kisit_uygula"]("X", frozenset([0]), a, govde(pe5, sahip, "X"))
    sonuc.append(S("S5 taraf tâbi penceresinde ⇒ hat uygulanmadı",
                   abs(nx5.area - govde(pe5, sahip, "X").area) < 1e-12))
    # S6 pencere dışı
    nx6 = G["_sinir_kisit_uygula"]("X", frozenset([0]), "1960-01-01", gx)
    sonuc.append(S("S6 hat penceresi dışında gövde aynı", nx6.equals(gx)))
    # S7 ters yaka: 3 X noktası doğuda (Y koridorunda), X'in batıda 0 noktası
    xy7 = [(0.2, -1.0), (0.2, 0.0), (0.2, 1.0), (-0.3, 0.0)]
    sahip7 = ["X", "X", "X", "Y"]
    G7, pe7 = ortam(xy7, sahip7, HAT)
    sonuc.append(S("S7 ters yazılmış sol_taraf uygulanmadı (TERS YAKA ŞÜPHESİ)", len(G7["_SK_HATLAR"]) == 0))
    # S9 hata kolu: bozuk girdi gövdeyi DEĞİŞTİRMEDEN döndürmeli
    G9, pe9 = ortam(xy, sahip, HAT)
    G9["_TUM_AGAC"] = None                    # sorgu AttributeError atar
    g9 = govde(pe9, sahip, "X")
    n9 = G9["_sinir_kisit_uygula"]("X", frozenset([0]), a, g9)
    sonuc.append(S("S9 iç hata ⇒ gövde değişmeden döner, sayılır", n9 is g9 and G9["_SK_SAYAC"]["hata"] == 1,
                   str(G9["_SK_SAYAC"]["hata_ornek"][:1])))
    # S10 imza: dönem birleştirme imzası hat penceresinde dolu, dışında boş
    sonuc.append(S("S10 imza penceresi", G["_sk_imza"]("X", a) != () and G["_sk_imza"]("X", "1960-01-01") == ()))
    # S11 kırılma günleri hat f/t'yi içerir
    sonuc.append(S("S11 kırılma günleri hat f/t içerir",
                   {"1910-01-01", "1950-01-01"} <= set(G["_SK_HATLAR"][0]["gunler"])))
    # S12 iki hat bir köşede (küçük ülke): koridorlar üst üste biner — en yakın hatta
    # paylaşım ile ikisi de uygulanmalı ve üç gövde BİNMEMELİ
    L1 = dict(HAT, id="h1", taraflar=["X", "Y"], sol_taraf="X", hat=[[0.0, -2.5], [0.0, 0.0]])
    L2 = dict(HAT, id="h2", taraflar=["X", "Z"], sol_taraf="Z", hat=[[-2.5, 0.0], [0.0, 0.0]])
    xy12 = [(-0.3, -0.3), (1.6, -1.0), (-1.0, 1.6)]
    s12 = ["X", "Y", "Z"]
    G12, pe12 = ortam(xy12, s12, [L1, L2])
    for L in G12["_SK_HATLAR"]:
        L["komsu"] = [0, 1]
    g12 = {k: govde(pe12, s12, k) for k in "XYZ"}
    n12 = {k: G12["_sinir_kisit_uygula"](k, frozenset([i]), a, g12[k]) for i, k in enumerate("XYZ")}
    yd = box(0.0, -2.5, 0.7, -0.05)          # L1'in Y yakası (X burada olmamalı)
    zd = box(-2.5, 0.0, -0.05, 0.7)          # L2'nin Z yakası
    bin12 = sum(n12[p].intersection(n12[q]).area for p, q in (("X", "Y"), ("X", "Z"), ("Y", "Z")))
    sonuc.append(S("S12 köşede iki hat: X iki karşı yakadan da çekildi, binme yok",
                   n12["X"].intersection(yd).area < 1e-6 and n12["X"].intersection(zd).area < 1e-6
                   and bin12 < 1e-6,
                   f"X∩Yyaka {n12['X'].intersection(yd).area:.5f} (önce {g12['X'].intersection(yd).area:.4f}) · "
                   f"X∩Zyaka {n12['X'].intersection(zd).area:.5f} (önce {g12['X'].intersection(zd).area:.4f}) · binme {bin12:.6f}"))
    gec = sum(sonuc)
    print(f"BİRİM SINAVI: {gec}/{len(sonuc)} geçti")
    return 0 if gec == len(sonuc) else 1


if __name__ == "__main__":
    sys.exit(main())
