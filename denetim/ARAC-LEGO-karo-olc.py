# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 · KARO TASARIMI — gövde hesabının adımları ne kadar sürüyor, hangisi YEREL?

Motoru KOŞTURMAZ. `arac/uret_petek.py`nin gövde adımlarını AST ile BİREBİR çeker
(kapat · delikleri_doldur · _b2 · _b3 · gosterim_duzelt · poligonal · _puan_bolgesi …)
ve gerçek geometride zamanlar:
  petekler : data/petek_govde.js (koşu 6'nın ZAMANSIZ taban petekleri — epok devri YOK)
  kara     : veri-kaynak/motor_kara.geojson (motorun çizdiği kara)
  yerleşim : koşu 6 girdisi (git'ten yeniden kurulmuş kök, ARAC-LEGO-etki.py yukle())
Adımlar (`_yabanci_govde_hesap` sırasıyla):
  U  unary_union(petekler)     K  kapat (0,15° kapama)      B1 delikleri_doldur
  B2 _b2_enklav_birlestir      B3 _b3_koridor_kirp          KR ∩KARA + poligonal
  P  _puan_bolgesi + ∩         (PUAN_KAPALI değil)
Kullanım: py denetim/ARAC-LEGO-karo-olc.py <koşu6_kok> [--ornek N] [--tohum S] [--karo DERECE]
"""
import ast, importlib.util, json, math, os, random, sys, time
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import numpy as np
import shapely
from shapely import STRtree
from shapely.geometry import Point, Polygon, MultiPolygon, LineString, box, shape
from shapely.ops import unary_union, nearest_points
from shapely.prepared import prep
from shapely.validation import make_valid

KOK = r"C:\atlas"
MOTOR = os.path.join(KOK, "arac", "uret_petek.py")
FONK = ["temiz", "kapat", "poligonal", "delikleri_doldur", "_km_derece", "_yasakli_mi",
        "_bant_baskasinin_topragini_kesiyor_mu", "_b2_enklav_birlestir", "_b3_koridor_kirp",
        "gosterim_duzelt", "_puan_bolgesi", "_ham_km2", "alan_km2"]
SABIT = ["R_DUNYA", "B2_ENKLAV_KM", "B2_KAVIS", "B3_KAPAMA_DER", "B3_SADELIK", "B2_TEMAS",
         "KV_ADIM", "PUAN_ESIK", "PUAN_HALKA"]


def motor_ad_alani():
    src = open(MOTOR, encoding="utf-8").read()
    t = ast.parse(src)
    ns = dict(math=math, np=np, shapely=shapely, STRtree=STRtree, Point=Point, Polygon=Polygon,
              MultiPolygon=MultiPolygon, LineString=LineString, box=box, unary_union=unary_union,
              nearest_points=nearest_points, prep=prep, make_valid=make_valid)
    bulunan = set()
    for n in t.body:
        if isinstance(n, ast.FunctionDef) and n.name in FONK:
            exec(compile(ast.Module([n], []), MOTOR, "exec"), ns); bulunan.add(n.name)
        elif isinstance(n, ast.Assign) and len(n.targets) == 1 and isinstance(n.targets[0], ast.Name) \
                and n.targets[0].id in SABIT:
            exec(compile(ast.Module([n], []), MOTOR, "exec"), ns); bulunan.add(n.targets[0].id)
    eksik = set(FONK + SABIT) - bulunan
    if eksik:
        raise SystemExit(f"motordan çekilemedi: {eksik}")
    return ns


def js_dizi(yol, ad):
    t = open(yol, encoding="utf-8").read()
    i = t.index(f"window.{ad} = ") + len(f"window.{ad} = ")
    return json.JSONDecoder().raw_decode(t[i:])[0]


def kur(kok6):
    sys.path.insert(0, os.path.join(KOK, "denetim"))
    sp = importlib.util.spec_from_file_location("etki", os.path.join(KOK, "denetim", "ARAC-LEGO-etki.py"))
    et = importlib.util.module_from_spec(sp)
    _argv = sys.argv; sys.argv = ["x", "yok"]
    try:
        src = open(sp.origin, encoding="utf-8").read().replace("\nmain()\n", "\n")
        exec(compile(src, sp.origin, "exec"), et.__dict__)
    finally:
        sys.argv = _argv
    Y, B = et.yukle(kok6)
    parca = js_dizi(os.path.join(KOK, "data", "petek_govde.js"), "PETEK_GOVDE_PARCA")
    pg = js_dizi(os.path.join(KOK, "data", "petek_govde.js"), "PETEK_GOVDE")
    if len(pg) != len(Y):
        raise SystemExit(f"petek sayısı {len(pg)} ≠ yerleşim {len(Y)} — sıra eşleşmez")
    PE = []
    for ix in pg:
        # koordinatlar 3 haneye yuvarlanmış ⇒ bazı halkalar geçersiz; motorun `temiz`i gibi onar
        ps = [make_valid(Polygon(parca[k][0], parca[k][1:])).buffer(0) for k in (ix or [])]
        PE.append(unary_union(ps).buffer(0) if ps else Polygon())
    ic = sum(1 for y, p in zip(Y, PE) if not p.is_empty and p.buffer(0.02).contains(Point(y["lon"], y["lat"])))
    print(f"  petek {len(PE)} · noktası kendi peteğinde (0,02° tolerans) {ic}/{sum(1 for p in PE if not p.is_empty)}")
    kara = unary_union([shape(f["geometry"]) for f in
                        json.load(open(os.path.join(KOK, "veri-kaynak", "motor_kara.geojson"), encoding="utf-8"))["features"]])
    return Y, B, PE, kara, et


def ns_hazirla(ns, Y, kara):
    noktalar = [Point(y["lon"], y["lat"]) for y in Y]
    kb_ix = [i for i, y in enumerate(Y) if y.get("kasitli_bosluk")]
    kb_n = [noktalar[i] for i in kb_ix]
    x0, y0, x1, y1 = -180, -60, 180, 85
    ns.update(YERLER=Y, noktalar=noktalar, _TUM_AGAC=STRtree(noktalar), KARA=kara,
              _KARA_HAZIR=prep(kara), _KB_IX=kb_ix, _KB_NOKTA=kb_n,
              _KB_AGAC=STRtree(kb_n) if kb_n else None, _KB_MUAF={},
              _B1_SAYAC={"dolduruldu": 0, "yabanci_yerlesim": 0, "yabanci_ad": set()},
              _B23_SAYAC={k: 0 for k in ("b2_birlesti", "b2_deniz", "b2_uzak", "b2_yerlesim",
                                         "b3_dolduruldu", "b3_sig", "b3_yerlesim", "b3_kb",
                                         "b3_kapali", "b2_kopru_dogrudan", "b2_kopru_tabi")},
              _B3_KALAN_IHLAL=[], B23_ACIK=True, MOTOR_YURUYUS=True, _PUAN_ONBELLEK={},
              _kvx0=x0, _kvy0=y0, _kvnx=int(round((x1 - x0) / 0.05)), _kvny=int(round((y1 - y0) / 0.05)))


def govde_adimli(ns, did, aktif, PE):
    """_yabanci_govde_hesap'ın adımları, ayrı ayrı zamanlanarak. Döner: (g, {adım: sn})."""
    sira = sorted(aktif)
    t = {}; s = time.perf_counter()
    g = unary_union([PE[j] for j in sira]); t["U"] = time.perf_counter() - s; s = time.perf_counter()
    g = ns["kapat"](g); t["K"] = time.perf_counter() - s; s = time.perf_counter()
    g = ns["delikleri_doldur"](g, sahip_ix=aktif); t["B1"] = time.perf_counter() - s; s = time.perf_counter()
    if not g.is_empty:
        g = ns["_b2_enklav_birlestir"](g, aktif)
    t["B2"] = time.perf_counter() - s; s = time.perf_counter()
    if not g.is_empty:
        g = ns["_b3_koridor_kirp"](g, aktif)
    t["B3"] = time.perf_counter() - s; s = time.perf_counter()
    g = ns["poligonal"](g.intersection(ns["KARA"])); t["KR"] = time.perf_counter() - s; s = time.perf_counter()
    if not g.is_empty:
        pb = ns["_puan_bolgesi"](did, aktif, None)
        g = ns["poligonal"](g.intersection(pb)) if pb is not None else Polygon()
    t["P"] = time.perf_counter() - s
    return g, t


def donemler(Y, B, did):
    """ARAC-LEGO-etki.govdeler ile aynı dönem mantığı, tek devlet: [(gün, aktif)]"""
    E, S = "1281-01-01", "1923-11-01"
    hj = [j for j, y in enumerate(Y) if any(sp["d"] == did for sp in y["s"])]
    ts = set()
    for j in hj:
        for sp in Y[j]["s"]:
            if sp["d"] == did: ts.add(sp["f"]); ts.add(sp["t"])
        for dn in Y[j]["d"] + Y[j]["v"]:
            ts.add(dn["f"]); ts.add(dn["t"])
    ts = sorted(t for t in ts if E <= t < S)
    if not ts: return []
    if ts[0] != E: ts.insert(0, E)
    out, onceki = [], None
    for a in ts:
        ak = frozenset(j for j in hj if not ((Y[j].get("kur") and Y[j]["kur"] > a) or (Y[j].get("bit") and Y[j]["bit"] <= a))
                       and any(sp["d"] == did and sp["f"] <= a < sp["t"] for sp in Y[j]["s"])
                       and not any(dn["f"] <= a < dn["t"] for dn in Y[j]["d"] + Y[j]["v"]))
        if ak and ak != onceki:
            out.append((a, ak))
        onceki = ak
    return out


def main():
    kok6 = sys.argv[1]
    n_orn = int(sys.argv[sys.argv.index("--ornek") + 1]) if "--ornek" in sys.argv else 60
    tohum = int(sys.argv[sys.argv.index("--tohum") + 1]) if "--tohum" in sys.argv else 1
    ns = motor_ad_alani()
    Y, B, PE, kara, et = kur(kok6)
    ns_hazirla(ns, Y, kara)
    rnd = random.Random(tohum)
    butun = [(did, a, ak) for did in B for a, ak in donemler(Y, B, did)]
    W = sum(len(ak) for _, _, ak in butun)
    print(f"  evren: {len(butun):,} gövde · ağırlık (|aktif| toplamı) {W:,}")
    # ağırlıkla orantılı örnek (süre ≈ |aktif|, R²=0,96) — pahalı gövdeler temsil edilsin
    orn = rnd.choices(butun, weights=[len(ak) for _, _, ak in butun], k=n_orn)
    top = {}; n_ok = 0; t0 = time.time()
    satir = []
    for did, a, ak in orn:
        g, t = govde_adimli(ns, did, ak, PE)
        for k, v in t.items():
            top[k] = top.get(k, 0.0) + v
        satir.append((did, a, len(ak), sum(t.values()), t))
        n_ok += 1
    T = sum(top.values())
    print(f"  örnek {n_ok} gövde (ağırlıkla orantılı) · toplam {T:,.1f} sn · {time.time() - t0:,.0f} sn duvar")
    print("  ADIM PAYI (örnekte):")
    for k in ("U", "K", "B1", "B2", "B3", "KR", "P"):
        print(f"    {k:3s} {top.get(k, 0):9.1f} sn  %{100 * top.get(k, 0) / max(T, 1e-9):5.1f}")
    satir.sort(key=lambda r: -r[3])
    print("  en pahalı 8:")
    for did, a, n, s, t in satir[:8]:
        print(f"    {did:22s} {a} |aktif| {n:4d} · {s:6.1f} sn · " +
              " ".join(f"{k} {v:.1f}" for k, v in t.items()))
    json.dump({"adim": top, "satir": [(d, a, n, s, t) for d, a, n, s, t in satir]},
              open(os.path.join(os.environ.get("TEMP", "."), "lego_karo_olc.json"), "w", encoding="utf-8"))


if __name__ == "__main__":
    main()
