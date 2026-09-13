# -*- coding: utf-8 -*-
"""P13B · 0048-Y7 birim sınaması — serbest kenar birleştirme + sadeleştirme.
uret_petek.py KOŞULMAZ. `serbest_sadelestir` + `hat_koord` + `SERBEST_SADE_TOL`
dosyanın KENDİSİNDEN AST ile çekilir; sentetik girdi + koşu 10 SERBEST havuzu."""
import ast, io, json, os, sys, math, time
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
from shapely.geometry import (LineString, MultiLineString, Point, GeometryCollection,
                              LinearRing, Polygon, box)
from shapely.ops import linemerge

src = io.open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
ns = {"LineString": LineString, "MultiLineString": MultiLineString, "linemerge": linemerge}
ISTENEN = {"serbest_sadelestir", "hat_koord"}
bul = set()
for n in ast.parse(src).body:
    if isinstance(n, ast.FunctionDef) and n.name in ISTENEN:
        exec(compile(ast.Module([n], []), "uret_petek.py", "exec"), ns); bul.add(n.name)
    if (isinstance(n, ast.Assign) and len(n.targets) == 1
            and getattr(n.targets[0], "id", None) in ("SERBEST_SADE_TOL", "SERBEST_TOL")):
        exec(compile(ast.Module([n], []), "uret_petek.py", "exec"), ns)
assert bul == ISTENEN, ISTENEN - bul
SS, HK, TOL = ns["serbest_sadelestir"], ns["hat_koord"], ns["SERBEST_SADE_TOL"]
sonuc = []


def sina(ad, kosul, ayrinti=""):
    sonuc.append((ad, bool(kosul)))
    print(("  ✓ " if kosul else "  ✗ ") + ad + (("  — " + str(ayrinti)) if ayrinti else ""))


print(f"① SENTETİK (SERBEST_SADE_TOL={TOL} · SERBEST_TOL={ns.get('SERBEST_TOL')})")
sina("① tolerans = SERBEST_TOL (gerekçe: hattın konum payı)", TOL == ns.get("SERBEST_TOL"))
l2 = LineString([(30.0, 30.0), (31.0, 30.5)])
sina("① 2 noktalı tek hat → koordinatlar BİREBİR", HK(SS(l2)) == HK(l2), HK(SS(l2)))
kaba = LineString([(30, 30), (30.5, 30.3), (31, 30), (31.5, 30.4), (32, 30)])
sina("① tüm sapmaları tol üstü hat → BİREBİR", HK(SS(kaba)) == HK(kaba))
p1 = LineString([(30, 30), (30.5, 30.1)]); p2 = LineString([(30.5, 30.1), (31, 30)])
m = SS(MultiLineString([p1, p2]))
sina("① bitişik iki parça → TEK hat", m.geom_type == "LineString" and len(HK(m)) == 1, HK(m))
zz = LineString([(30 + i * 0.01, 30 + (0.004 if i % 2 else 0)) for i in range(101)])
z2 = SS(zz)
sina("① 0,004° dişli zikzak → sadeleşir, sapma ≤ tol",
     len(z2.coords) < 10 and zz.hausdorff_distance(z2) <= TOL + 1e-12,
     f"{len(zz.coords)} → {len(z2.coords)} köşe · sapma {zz.hausdorff_distance(z2):.4f}")
sina("① yalnız nokta → None", SS(Point(30, 30)) is None and HK(SS(Point(30, 30))) == [])
gc = GeometryCollection([Point(1, 1), LineString([(0, 0), (1, 1)])])
sina("① GeometryCollection → yalnız çizgi bileşeni", HK(SS(gc)) == [[[0.0, 0.0], [1.0, 1.0]]], HK(SS(gc)))
sina("① boş → None", SS(LineString()) is None)
ayrik = MultiLineString([LineString([(0, 0), (1, 0)]), LineString([(5, 5), (6, 5)])])
sina("① ayrık iki parça → iki hat, koordinat BİREBİR", HK(SS(ayrik)) == HK(ayrik))
# motordaki kesişim deseni: gövde sınırı ∩ tamponlu boş bölge
gov = Polygon([(0, 0), (4, 0), (4, 4), (0, 4)]).difference(box(1.9, -1, 2.1, 0.01))
bos = box(-1, -2, 5, 0.05).buffer(0.02)
k = gov.boundary.intersection(bos)
sina("① motor deseni boundary∩buffer: parça sayısı azalır ya da eşit",
     len(HK(SS(k))) <= len(HK(k)), f"{len(HK(k))} → {len(HK(SS(k)))}")

# ── ② GERÇEK: koşu 10 SERBEST havuzu, dönem dönem ─────────────────────────
print("② GERÇEK — data/donemler.js SERBEST + DONEMLER.sb (koşu 10)")
t0 = time.time()
s = io.open(os.path.join(KOK, "data", "donemler.js"), encoding="utf-8").read()


def al(ad):
    a = "window." + ad + " = "; i = s.find(a)
    return json.loads(s[i + len(a):s.find(";\n", i)])


SRB, SU, DON = al("SERBEST"), al("SERBEST_U"), al("DONEMLER")
del s


def km(a, b):
    la = math.radians((a[1] + b[1]) / 2)
    return math.hypot((b[0] - a[0]) * 111.32 * math.cos(la), (b[1] - a[1]) * 110.574)


once_hat, sonra_hat, once_kose, sonra_kose = set(), set(), 0, 0
once_2n, sonra_2n, maks_sapma = 0, 0, 0.0
min_seg_once, min_seg_sonra = [], []
ornek = None
for d in DON:
    sb = d.get("sb") or []
    if not sb:
        continue
    hatlar = [SRB[j] for j in sb]
    g = MultiLineString([LineString(h) for h in hatlar])
    y = HK(SS(g))
    for h in hatlar:
        once_hat.add(json.dumps(h))
    for h in y:
        sonra_hat.add(json.dumps(h))
    try:
        sap = g.hausdorff_distance(MultiLineString([LineString(h) for h in y]))
        maks_sapma = max(maks_sapma, sap)
    except Exception:
        pass
    if d["f"] == "1600-10-20":
        ornek = (len(hatlar), sum(len(h) for h in hatlar), len(y), sum(len(h) for h in y),
                 min(km(h[i], h[i+1]) for h in hatlar for i in range(len(h)-1)),
                 min(km(h[i], h[i+1]) for h in y for i in range(len(h)-1)) if y else None)
for kod in once_hat:
    h = json.loads(kod); once_kose += len(h); once_2n += (len(h) == 2)
    min_seg_once.append(min(km(h[i], h[i+1]) for i in range(len(h)-1)))
for kod in sonra_hat:
    h = json.loads(kod); sonra_kose += len(h); sonra_2n += (len(h) == 2)
    min_seg_sonra.append(min(km(h[i], h[i+1]) for i in range(len(h)-1)))
med = lambda v: sorted(v)[len(v)//2] if v else None
print(f"     {time.time()-t0:.0f} sn")
sina("② eşsiz hat (bilgi)", True, f"{len(once_hat)} → {len(sonra_hat)}")
sina("② köşe AZALIR", sonra_kose <= once_kose, f"{once_kose:,} → {sonra_kose:,}")
sina("② en büyük sapma ≤ tol + yuvarlama (0,02 + 0,0015)", maks_sapma <= TOL + 0.0015,
     f"{maks_sapma:.4f}°")
sina("② hat içi en kısa segment medyanı büyür (bilgi)", True,
     f"{med(min_seg_once):.2f} km → {med(min_seg_sonra):.2f} km")
sina("② 2 noktalı hat (bilgi)", True, f"{once_2n} → {sonra_2n}")
sina("② 0048/H-0010 dönemi 1600-10-20 bulundu", ornek is not None,
     f"hat {ornek[0]}→{ornek[2]} · köşe {ornek[1]}→{ornek[3]} · min segment "
     f"{ornek[4]:.2f}→{ornek[5]:.2f} km" if ornek else "")
ok = sum(1 for _, x in sonuc if x)
print(f"\nSONUÇ: {ok}/{len(sonuc)} geçti")
sys.exit(0 if ok == len(sonuc) else 1)
