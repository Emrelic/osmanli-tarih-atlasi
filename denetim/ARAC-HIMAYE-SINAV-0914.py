# -*- coding: utf-8 -*-
"""MOTOR-HIMAYE birim sınaması — uret_petek.py'yi KOŞMADAN (19 saat), yeni
fonksiyonları AST ile dosyanın KENDİSİNDEN çekip sentetik girdiyle koşar."""
import ast, io, json, os, sys, random
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
from shapely.geometry import Polygon, MultiPolygon, box, Point
from shapely.ops import unary_union
from shapely.validation import make_valid

src = io.open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
agac = ast.parse(src)
ISTENEN = {"temiz", "poligonal", "havuza", "mp_koord",
           "himaye_gruplari", "himaye_imza", "himaye_govdeleri"}
ns = {"json": json, "Polygon": Polygon, "MultiPolygon": MultiPolygon,
      "unary_union": unary_union, "make_valid": make_valid}
bulunan = set()
for n in agac.body:
    if isinstance(n, ast.FunctionDef) and n.name in ISTENEN:
        exec(compile(ast.Module([n], []), "uret_petek.py", "exec"), ns); bulunan.add(n.name)
    if (isinstance(n, ast.Assign) and len(n.targets) == 1
            and getattr(n.targets[0], "id", None) == "HIMAYE_GEVSEK_RENK"):
        exec(compile(ast.Module([n], []), "uret_petek.py", "exec"), ns)
assert bulunan == ISTENEN, ISTENEN - bulunan
GEVSEK = ns["HIMAYE_GEVSEK_RENK"]
from renkler import BOYALAR
H_GRUP, H_IMZA, H_GOV = ns["himaye_gruplari"], ns["himaye_imza"], ns["himaye_govdeleri"]

sonuc = []
def sina(ad, kosul, ayrinti=""):
    sonuc.append((ad, bool(kosul)))
    print(("  ✓ " if kosul else "  ✗ ") + ad + (("  — " + str(ayrinti)) if ayrinti else ""))

def coz(kod, HH, PH):
    """app.js parcaCoz'un Python ikizi: parça → halka indeksleri → poligon."""
    ps = []
    for p in kod:
        hs = [HH[h] for h in PH[p]]
        ps.append(Polygon(hs[0], hs[1:]))
    return unary_union(ps)

# ── SENTETİK DÜNYA: 3×3 ızgara (her hücre 1°) + solda ayrı bir tâbi ──────
#   j0..j8 ızgara (lon 32-35, lat 45-48); j4 = MERKEZ, himayesiz tâbi (kirim)
#   j0-j3,j5-j8 = himaye:true statu:gevsek kid:kirim  (Nogay bozkırı gibi)
#   j9 = lon 30-32, himaye:true kid:eflak (statüsüz ⇒ BOYALAR rengi)
#   j10 = lon 36-37, himaye:true, kid YOK, k YOK (adsız)
#   j11 = lon 28-30, düz tâbi (himaye yok)
pe, yer = [], []
V = lambda **kw: {**dict(f="1475-06-06", t="1774-07-21"), **kw}
for r in range(3):
    for c in range(3):
        j = r * 3 + c
        pe.append(box(32 + c, 45 + r, 33 + c, 46 + r))
        if j == 4:
            yer.append({"ad": f"y{j}", "v": [V(k="Kırım Hanlığı", kid="kirim")]})
        else:
            yer.append({"ad": f"y{j}", "v": [V(k="Kırım Hanlığı", kid="kirim",
                                                statu="gevsek", himaye=True)]})
pe.append(box(30, 45, 32, 48)); yer.append({"ad": "y9", "v": [V(k="Eflak", kid="eflak", himaye=True)]})
pe.append(box(36, 45, 37, 48)); yer.append({"ad": "y10", "v": [V(himaye=True)]})
pe.append(box(28, 45, 30, 48)); yer.append({"ad": "y11", "v": [V(k="Boğdan", kid="bogdan")]})
tabi = frozenset(range(12))
gt = unary_union(pe)
A = "1600-01-01"

# ① HİMAYE YOK ⇒ davranış BİREBİR
yer0 = [{"ad": y["ad"], "v": [{k: v for k, v in p.items() if k not in ("himaye", "statu")}
                               for p in y["v"]]} for y in yer]
g0 = H_GRUP(A, tabi, yer0, BOYALAR, {}, GEVSEK)
sina("① himaye yok → grup {}", g0 == {}, g0)
sina("① himaye yok → imza frozenset()", H_IMZA(g0) == frozenset())
sina("① himaye yok → d.h []", H_GOV(g0, pe, tabi, gt, lambda g: [1]) == [])
# delta kararı: eski anahtar (d,t) ile yeni (d,t,imza) rastgele 2000 adımlık dizide aynı mı
rnd = random.Random(20260914); eski_k = yeni_k = None; fark = 0
for _ in range(2000):
    d = frozenset(rnd.sample(range(20), rnd.randint(0, 3)))
    t = frozenset(rnd.sample(range(20), rnd.randint(0, 3)))
    ke, ky = (d, t), (d, t, H_IMZA({}))
    if (ke == eski_k) != (ky == yeni_k): fark += 1
    eski_k, yeni_k = ke, ky
sina("① 2000 adımda uzat/yeni-dönem kararı eski anahtarla aynı", fark == 0, f"fark {fark}")
# veri tarafı: gerçek girdide himaye:true sayısı
import girdi
Y = girdi.yukle(sessiz=True)
him_n = sum(1 for y in Y for p in (y.get("v") or []) if p.get("himaye") is True)
gev_n = sum(1 for y in Y for p in (y.get("v") or []) if p.get("statu") == "gevsek")
sina("① GERÇEK veride v:[himaye:true] = 0 ⇒ _HIMAYE_VAR False", him_n == 0,
     f"himaye:true {him_n} · statu:gevsek {gev_n} · yerleşim {len(Y)}")

# ② GRUPLAMA + RENK
say = {"donem": 0, "govde": 0, "adsiz": 0, "renksiz": 0, "bos": 0}
gr = H_GRUP(A, tabi, yer, BOYALAR, {}, GEVSEK, say)
eflak_renk = BOYALAR["eflak"][1] if "eflak" in BOYALAR else None
beklenen = {("kirim", GEVSEK): (0, 1, 2, 3, 5, 6, 7, 8),
            ("eflak", eflak_renk): (9,),
            ("__adsiz__", None): (10,)}
sina("② gruplar kid+renk ile", gr == beklenen, gr)
sina("② gevşek renk = açık ton", GEVSEK == "#e8a2aa", GEVSEK)
sina("② statüsüz himaye → BOYALAR[kid]", eflak_renk is not None and gr.get(("eflak", eflak_renk)) == (9,), eflak_renk)
sina("② adsız SAYILDI (yutulmadı)", say["adsiz"] == 1, say)
sina("② renksiz SAYILDI", say["renksiz"] == 1, say)
# harita: düşüşü
gr_h = H_GRUP(A, frozenset([9]), [None]*9 + [{"v": [V(kid="eflak-x", himaye=True)]}],
              BOYALAR, {"eflak-x": "eflak"}, GEVSEK)
sina("② kid BOYALAR'da yok → künye harita: anahtarına düşer", ("eflak-x", eflak_renk) in gr_h, gr_h)
# k var kid yok
gr_k = H_GRUP(A, frozenset([0]), [{"v": [V(k="Nogay", himaye=True, statu="gevsek")]}],
              BOYALAR, {}, GEVSEK)
sina("② kid yoksa k ile gruplar", gr_k == {("Nogay", GEVSEK): (0,)}, gr_k)
# pencere dışı gün
sina("② pencere DIŞI gün → grup yok", H_GRUP("1780-01-01", tabi, yer, BOYALAR, {}, GEVSEK) == {})

# ③ İMZA dönem sınırında değişir, içinde değişmez
sina("③ imza 1600 == 1700 (aynı pencere)",
     H_IMZA(H_GRUP("1600-01-01", tabi, yer, BOYALAR, {}, GEVSEK)) ==
     H_IMZA(H_GRUP("1700-01-01", tabi, yer, BOYALAR, {}, GEVSEK)))
yer_b = json.loads(json.dumps(yer)); yer_b[9]["v"] = [V(k="Eflak", kid="eflak", himaye=True, t="1650-01-01"),
                                                     dict(f="1650-01-01", t="1774-07-21", k="Eflak", kid="eflak")]
sina("③ himaye biterse imza DEĞİŞİR (yeni dönem açılır)",
     H_IMZA(H_GRUP("1649-12-31", tabi, yer_b, BOYALAR, {}, GEVSEK)) !=
     H_IMZA(H_GRUP("1650-01-01", tabi, yer_b, BOYALAR, {}, GEVSEK)))
yer_c = json.loads(json.dumps(yer)); yer_c[0]["v"][0]["statu"] = "vassal"
sina("③ yalnız statü değişse de imza DEĞİŞİR (renk anahtarda)",
     H_IMZA(H_GRUP(A, tabi, yer, BOYALAR, {}, GEVSEK)) != H_IMZA(H_GRUP(A, tabi, yer_c, BOYALAR, {}, GEVSEK)))

# ④ GEOMETRİ + ŞEMA (gerçek havuza/mp_koord ile parça-kodlu)
HH, HIX, PH, PIX = [], {}, [], {}
kodla = lambda g: ns["havuza"](ns["mp_koord"](g), HH, HIX, PH, PIX)
# d.v'yi ÖNCE aynı havuza yaz (motordaki sıra) — d.h ile havuz paylaşımı sınanır
kod_v = kodla(gt); n_halka_v = len(HH)
h = H_GOV(gr, pe, tabi, gt, kodla, say)
sina("④ d.h liste, 3 gövde", isinstance(h, list) and len(h) == 3, len(h))
sina("④ her öğe TAM {g, renk}", all(set(x) == {"g", "renk"} for x in h))
sina("④ g = int dizisi, PARCA_HALKA'da geçerli indeks",
     all(isinstance(x["g"], list) and x["g"] and all(isinstance(p, int) and 0 <= p < len(PH) for p in x["g"]) for x in h))
sina("④ renk #rrggbb ya da None",
     all(x["renk"] is None or (isinstance(x["renk"], str) and len(x["renk"]) == 7 and x["renk"][0] == "#") for x in h))
sina("④ JSON'a yazılabilir", json.loads(json.dumps(h)) == h)
geo = {x["renk"]: coz(x["g"], HH, PH) for x in h}
kir = geo[GEVSEK]
sina("④ gevşek gövde alanı = 8 hücre (merkez HARİÇ)", abs(kir.area - 8.0) < 1e-6, round(kir.area, 6))
sina("④ merkez (himayesiz tâbi) YUTULMADI", not kir.contains(Point(33.5, 46.5)))
sina("④ gevşek gövdede 1 delik (halka)", kir.geom_type == "Polygon" and len(kir.interiors) == 1)
vg = coz(kod_v, HH, PH)
sina("④ bütün d.h ⊂ d.v", all(vg.buffer(1e-9).contains(g) for g in geo.values()))
ust = sum(geo[a].intersection(geo[b]).area for a in geo for b in geo if (a or "") < (b or ""))
sina("④ d.h gövdeleri ÜST ÜSTE BİNMİYOR", ust < 1e-9, ust)
sina("④ eflak 6, adsız 3 birim", abs(geo[eflak_renk].area - 6) < 1e-6 and abs(geo[None].area - 3) < 1e-6)
# gt'nin doldurduğu boşluk: j4'ü sil ⇒ merkez hiçbir peteğe ait değil, gt onu doldurmuş
pe2 = list(pe); pe2[4] = None
tabi2 = tabi - {4}
gr2 = H_GRUP(A, tabi2, yer, BOYALAR, {}, GEVSEK)
h2 = H_GOV(gr2, pe2, tabi2, gt, kodla)
k2 = [coz(x["g"], HH, PH) for x in h2 if x["renk"] == GEVSEK][0]
sina("④ gt'nin DOLDURDUĞU (peteksiz) delik himayeye katıldı", abs(k2.area - 9.0) < 1e-6, round(k2.area, 6))
# gt dışına taşmaz: gt'den bir hücre kes
gt3 = gt.difference(box(34, 47, 35, 48))
h3 = H_GOV(gr, pe, tabi, gt3, kodla)
k3 = [coz(x["g"], HH, PH) for x in h3 if x["renk"] == GEVSEK][0]
sina("④ gt DIŞINA taşmaz (doğrudan enklav kesilir)", abs(k3.area - 7.0) < 1e-6, round(k3.area, 6))
sina("④ gt boş/None → []", H_GOV(gr, pe, tabi, None, kodla) == [] and H_GOV({}, pe, tabi, gt, kodla) == [])

ok = sum(1 for _, s in sonuc if s)
print(f"\nSONUÇ: {ok}/{len(sonuc)} geçti")
json.dump({"gevsek": GEVSEK, "ornek_d_h": h, "PARCALAR": HH, "PARCA_HALKA": PH},
          io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "sinav_dh.json"), "w", encoding="utf-8"))
sys.exit(0 if ok == len(sonuc) else 1)
