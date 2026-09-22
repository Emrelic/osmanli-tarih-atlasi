# -*- coding: utf-8 -*-
"""P13B · 0038/H-0003 ÖLÇÜMÜ (Gât enklavı kavisli birleşsin). Kod değişikliği YOK.
Koşu 10 çıktısında 1802-03-25 Osmanlı gövdesinden (o ∪ v) Gât'ın parçası ile ana parça
arasında B2'nin (`_b2_enklav_birlestir`) üç sınavı yeniden koşulur:
  mesafe ≤ B2_ENKLAV_KM · hat karada mı · Emre ③ bant sınavı (hattaki her örneğin en yakın
  yerleşimi sahip_ix içinde mi). Soru: köprü HANGİ sınavda düşüyor, ve bant sınavını
  düşüren yerleşim BAŞKA DEVLETİN mi yoksa SAHİPSİZ bir dolgu noktası mı?
sahip_ix ≈ o gün d/v aktif (yazılı devir hariç) + ekleyici kapı (`_dolgu_kumesi` motordan)."""
import ast, io, json, os, sys, time, importlib.util, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = r"C:\atlas"
sys.path.insert(0, os.path.join(KOK, "arac"))
from shapely.geometry import Polygon, MultiPolygon, Point, LineString, shape, box
from shapely.ops import unary_union, nearest_points
from shapely.strtree import STRtree
from shapely.prepared import prep
import girdi

sp = importlib.util.spec_from_file_location("p13b_kara", os.path.join(KOK, "denetim", "ARAC-P13B-KARA-0914.py"))
km_ = importlib.util.module_from_spec(sp); sp.loader.exec_module(km_)
KARA, GOLLER, BOLGE, kns = km_.kara_goller()
GUN = sys.argv[1] if len(sys.argv) > 1 else "1802-03-25"
HEDEF = sys.argv[2] if len(sys.argv) > 2 else "Gât"

s = io.open(os.path.join(KOK, "data", "donemler.js"), encoding="utf-8").read()


def al(ad):
    a = "window." + ad + " = "; i = s.find(a)
    return json.loads(s[i + len(a):s.find(";\n", i)])


H, PH, DON = al("PARCALAR"), al("PARCA_HALKA"), al("DONEMLER")
del s
d = next(x for x in DON if x["f"] <= GUN < x["t"])
parca = lambda j: Polygon(H[PH[j][0]], [H[h] for h in PH[j][1:]])
ob = [parca(j) for j in (d.get("o") or [])]
vb = [parca(j) for j in (d.get("v") or [])]
birlesik = unary_union(ob + vb)
ps = sorted(list(birlesik.geoms) if birlesik.geom_type == "MultiPolygon" else [birlesik],
            key=lambda p: -p.area)
print(f"dönem {d['f']} → {d['t']} · o {len(ob)} · v {len(vb)} · birleşik parça {len(ps)}")

Y = girdi.yukle(sessiz=True)
for y in Y:
    for _a, _dv in girdi.VARSAYILAN.items():
        y.setdefault(_a, [] if _dv == [] else _dv)
hedef = next(y for y in Y if y["ad"] == HEDEF)
hp = Point(hedef["lon"], hedef["lat"])
enk = next((p for p in ps if p.buffer(0.01).contains(hp)), None)
ana = ps[0]
print(f"{HEDEF}: parça bulundu={enk is not None} · ana parça mı={enk is not None and enk.equals(ana)}")
if enk is None or enk.equals(ana):
    sys.exit(0)

# motor fonksiyonları
src = io.open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
ns = {"json": json, "os": os}
FON = {"_dolgu_kumesi", "_col_icinde", "_osm_aktif", "_sahipli", "_km_derece"}
SAB = {"PUAN_HALKA", "PUAN_ESIK", "COL_PUAN_ESIK", "ORTME_DILIM_SAYISI", "DOLDURULABILIR_BOS"}
for n in ast.parse(src).body:
    if isinstance(n, ast.FunctionDef) and n.name in FON:
        exec(compile(ast.Module([n], []), "uret_petek.py", "exec"), ns)
    if (isinstance(n, ast.Assign) and len(n.targets) == 1 and getattr(n.targets[0], "id", None) in SAB):
        exec(compile(ast.Module([n], []), "uret_petek.py", "exec"), ns)
ns["math"] = math
_gr = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_geography_regions_polys.geojson"), encoding="utf-8"))
COL = unary_union([shape(f["geometry"]).buffer(0).intersection(BOLGE) for f in _gr["features"]
                   if (f["properties"].get("FEATURECLA") or "") == "Desert"])
noktalar = [Point(y["lon"], y["lat"]) for y in Y]
sahnede = lambda y, g: not ((y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g))
dv = frozenset(i for i, y in enumerate(Y) if not sahnede(y, GUN) and ns["_sahipli"](y, GUN))
ns.update({"YERLER": Y, "noktalar": noktalar, "COL": COL, "devir_kumesi": lambda g: dv,
           "_DOLGU_ONBELLEK": {}, "_COL_NOKTA_ONBELLEK": {},
           "_DOLGU_SAYAC": {"petek": 0, "gun": 0, "cekismeli": 0, "col_dusen": 0, "col_gecen": 0}})
akt = lambda k: any(p["f"] <= GUN < p["t"] for p in Y[k][ "d"]) or any(p["f"] <= GUN < p["t"] for p in Y[k]["v"])
tabi = {j for j in range(len(Y)) if j not in dv and any(p["f"] <= GUN < p["t"] for p in Y[j]["v"])}
dog = {j for j in range(len(Y)) if j not in dv and any(p["f"] <= GUN < p["t"] for p in Y[j]["d"])} - tabi
dk = ns["_dolgu_kumesi"](GUN)
aktif = dog | tabi | set(dk.get("TABI", ())) | set(dk.get("OSMANLI", ()))
print(f"sahip_ix: doğrudan {len(dog)} · tâbi {len(tabi)} · kapı TABI {len(dk.get('TABI', ()))} · "
      f"kapı OSMANLI {len(dk.get('OSMANLI', ()))}")

n1, n2 = nearest_points(ana, enk)
lat = (n1.y + n2.y) / 2
dkm = math.hypot((n2.x - n1.x) * ns["_km_derece"](lat), (n2.y - n1.y) * 110.574)
hat = LineString([n1, n2])
print(f"① mesafe {dkm:,.1f} km (B2_ENKLAV_KM {kns['B2_ENKLAV_KM']}) → "
      f"{'GEÇER' if dkm <= kns['B2_ENKLAV_KM'] else 'DÜŞER'} · uçlar {n1.y:.2f}K {n1.x:.2f}D ↔ {n2.y:.2f}K {n2.x:.2f}D")
print(f"② hat karada mı (tamponsuz covers): {prep(KARA).covers(hat)}")
agac = STRtree(noktalar)
n = max(2, int(hat.length * 111.32 / 10.0))
kov = {}
ilk = None
for i in range(n + 1):
    p = hat.interpolate(i / float(n), normalized=True)
    q = int(agac.nearest(p))
    if q in aktif:
        cins = "sahip_ix İÇİNDE"
    else:
        y = Y[q]
        if not sahnede(y, GUN):
            cins = "SAHNEDE DEĞİL (kurulmamış/yok olmuş)"
        elif any(sp_["f"] <= GUN < sp_["t"] for sp_ in y["s"]):
            cins = "BAŞKA DEVLETİN (s:)"
        elif y.get("kasitli_bosluk") or y.get("bos") not in (None, ""):
            cins = f"SAHİPSİZ · bos={y.get('bos')!r} kasitli={bool(y.get('kasitli_bosluk'))}"
        else:
            cins = f"SAHİPSİZ · bayraksız (tur={y.get('tur')!r})"
    kov.setdefault(cins, set()).add(Y[q]["ad"])
    if ilk is None and q not in aktif:
        ilk = (i, Y[q]["ad"], cins)
print(f"③ bant sınavı: {n+1} örnek · ilk yasaklayan örnek {ilk}")
for c, a in kov.items():
    print(f"     {c:<55} {sorted(a)}")
