# -*- coding: utf-8 -*-
"""post-it #127 · MOTOR-KUSATMA-BILESEN-1027 ölçümü — motor KOŞULMAZ, kod değiştirmez.
Kullanım:  py denetim/ARAC-KUSATMA-BILESEN-1027.py <YAMALI uret_petek.py yolu>
  (yamalı kopya: arac/uret_petek.py'yi geçici yere kopyala, `git apply` ile
   denetim/MOTOR-KUSATMA-BILESEN-1027.diff'i uygula; yama main'e girdiyse arac/uret_petek.py)
Önkoşul (worktree'de): py arac/kodla.py coz-c data data/petek_govde.js govde
                      py arac/kodla.py coz-c data data/donemler.js donem
Yamalı kopyadan `_kusatilmis` ve `_kusatma_bilesen` AST ile çekilir; bayrak kapalı/açık
karşılaştırılır. Petek geometrisi: data/petek_govde.js (son koşunun PETEK_D'si, ada göre).
KARA YAKLAŞIĞI: ham ne_10m_land birleşimi (göller ve KARA_TOL yok sayıldı; kıyı tamponu yalnız
paydadan kıyıyı çıkarır). Kıyı farkı (`.boundary.difference(_KIYI_TAMPON)`) metinde `_kd(...)`ya
çevrilir: aynı küme farkı, tampon 5°'lik karolara bölünmüş (yalnız hız).
Günler: 1281-1923, 15 yılda bir 06-15 + 1676-09-19. Sonuç: <geçici dizin>/kusatma_bilesen_1027.json"""
import ast, io, json, os, re, sys, time, math, pickle, tempfile
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BURA = tempfile.gettempdir()
if len(sys.argv) < 2 or not os.path.exists(sys.argv[1]):
    raise SystemExit("kullanım: py denetim/ARAC-KUSATMA-BILESEN-1027.py <YAMALI uret_petek.py>")
sys.path.insert(0, os.path.join(KOK, "arac"))
import shapely
from shapely import wkb
from shapely.geometry import Polygon, MultiPolygon, shape, box
from shapely.ops import unary_union
from shapely.strtree import STRtree
import girdi

t0 = time.time()
KP = os.path.join(BURA, "kusatma_bilesen_1027_kiyi.pickle")
if os.path.exists(KP):
    KIYI = wkb.loads(pickle.load(open(KP, "rb")))
else:
    _ld = json.load(io.open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))
    KARA = unary_union([shape(f["geometry"]).buffer(0) for f in _ld["features"]])
    KIYI = KARA.boundary.buffer(0.01)
    pickle.dump(wkb.dumps(KIYI), open(KP, "wb"))
print(f"KIYI {time.time()-t0:.0f} sn", flush=True)
t0 = time.time()
KARO, KARO_B = [], []
for x in range(-180, 180, 5):
    for yy in range(-90, 90, 5):
        c = shapely.clip_by_rect(KIYI, x - 0.05, yy - 0.05, x + 5.05, yy + 5.05)
        if not c.is_empty:
            KARO.append(c); KARO_B.append(box(x - 0.05, yy - 0.05, x + 5.05, yy + 5.05))
KAGAC = STRtree(KARO_B)
print(f"kıyı karoları {len(KARO)} · {time.time()-t0:.0f} sn", flush=True)


def _kd(geo):
    b = geo.boundary
    for q in KAGAC.query(b):
        b = b.difference(KARO[int(q)])
        if b.is_empty:
            break
    return b


src = io.open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
ESIK = float(re.search(r"^KUSATMA_ESIK\s*=\s*([0-9.]+)", src, re.M).group(1))


def pencere(yol, adlar):
    s = io.open(yol, encoding="utf-8").read()
    out = {}
    for ad in adlar:
        a = "window." + ad + " = "; i = s.find(a)
        out[ad] = json.loads(s[i + len(a):s.find(";\n", i)])
    return out


Y = girdi.yukle(sessiz=True)
for y in Y:
    for _a, _dv in girdi.VARSAYILAN.items():
        y.setdefault(_a, [] if _dv == [] else _dv)
N = len(Y)
pg = pencere(os.path.join(KOK, "data", "petek_govde.js"), ["PETEK_GOVDE_PARCA", "PETEK_GOVDE"])
eski_ad = [p["a"] for p in pencere(os.path.join(KOK, "data", "donemler.js"), ["PETEKLER"])["PETEKLER"]]
eix = {a: i for i, a in enumerate(eski_ad)}
PP, PG = pg["PETEK_GOVDE_PARCA"], pg["PETEK_GOVDE"]


def geo(i):
    ps = [Polygon(PP[j][0], PP[j][1:]) for j in PG[i]]
    return MultiPolygon(ps) if len(ps) > 1 else (ps[0] if ps else Polygon())


PETEK_D = [geo(eix[y["ad"]]) if y["ad"] in eix else Polygon() for y in Y]
PETEK_D = [g if g.is_valid else shapely.make_valid(g).buffer(0) for g in PETEK_D]
print(f"yerleşim {N}", flush=True)

ysrc = io.open(sys.argv[1], encoding="utf-8").read()
assert "def _kusatma_bilesen" in ysrc, "verilen uret_petek.py YAMALI değil"
ns = {"time": time, "unary_union": unary_union, "sayac": lambda *a, **k: None, "_kd": _kd,
      "gn": lambda s: s, "_ONB": type("O", (), {"acik": False})(), "os": os,
      "KUSATMA_BILESEN": False, "_KUS_BIL_KARAR": {}, "_KUS_BIL_SAYAC": {"bilesen": 0, "uye": 0}}
for n in ast.parse(ysrc).body:
    if isinstance(n, ast.FunctionDef) and n.name in {"_sahipli", "_ic_kara", "_cep", "_kusatilmis", "_kusatma_bilesen"}:
        kod = ast.get_source_segment(ysrc, n)
        kod2 = re.sub(r"([\w\[\]]+)\.boundary\.difference\(_KIYI_TAMPON\)", r"_kd(\1)", kod)
        assert kod2 != kod or n.name not in {"_ic_kara", "_kusatma_bilesen"}, n.name
        exec(compile(kod2, "uret_petek.py", "exec"), ns)
KUS_IX = [i for i in range(N) if not PETEK_D[i].is_empty]
ns.update({"YERLER": Y, "PETEK_D": PETEK_D, "_KUS_AGAC": STRtree([PETEK_D[i] for i in KUS_IX]),
           "_KUS_IX": KUS_IX, "_KIYI_TAMPON": None, "KUSATMA_ESIK": ESIK,
           "_IC_ONBELLEK": {}, "_CEP_ONBELLEK": {}})


def km2(k):
    c = PETEK_D[k].representative_point()
    return PETEK_D[k].area * 111.32 * 110.574 * math.cos(math.radians(c.y))


gunler = sorted({f"{y}-06-15" for y in range(1281, 1924, 15)} | {"1676-09-19"})
tabl = {}
for g in gunler:
    t1 = time.time()
    ns["KUSATMA_BILESEN"] = False; ns["_KUS_ONBELLEK"] = {}
    e = set(ns["_kusatilmis"](g))
    t2 = time.time()
    ns["KUSATMA_BILESEN"] = True; ns["_KUS_ONBELLEK"] = {}
    yk = set(ns["_kusatilmis"](g))
    t3 = time.time()
    ek = yk - e
    kur = [k for k in ek if Y[k].get("kur") and Y[k]["kur"] > g]
    bit = [k for k in ek if k not in set(kur)]
    for k in ek:
        r = tabl.setdefault(Y[k]["ad"], {"gun": 0, "km2": km2(k), "taraf": "kur" if k in kur else "bit",
                                         "lon": round(Y[k]["lon"], 1), "lat": round(Y[k]["lat"], 1)})
        r["gun"] += 1
    print(f"{g}: eski {len(e)} · yama {len(yk)} · ek {len(ek)} (kur {len(kur)}, bit {len(bit)}) · "
          f"ek alan ≈{sum(km2(k) for k in ek):,.0f} km² · eski {t2-t1:.0f} sn · bileşen {t3-t2:.0f} sn", flush=True)
print(f"TOPLAM ayrı yerleşim {len(tabl)} · kur-tarafı {sum(1 for r in tabl.values() if r['taraf']=='kur')} · "
      f"bit-tarafı {sum(1 for r in tabl.values() if r['taraf']=='bit')}")
bolge = {}
for a, r in tabl.items():
    anah = (int(r["lat"] // 10) * 10, int(r["lon"] // 10) * 10)
    bolge.setdefault(anah, []).append(a)
print("10° karelere göre (enlem, boylam) → sayı · örnek:")
for k, v in sorted(bolge.items(), key=lambda kv: -len(kv[1]))[:20]:
    print(f"   {k}: {len(v)} · {', '.join(sorted(v)[:5])}")
json.dump(tabl, io.open(os.path.join(BURA, "kusatma_bilesen_1027.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=0)
print("bitti")
