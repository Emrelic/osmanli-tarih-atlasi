# -*- coding: utf-8 -*-
"""P13B · A6A-Y14 ÖLÇÜMÜ (0021/H-0005 Tuna kuzeyi üst boşluk = kurulmamış Uman peteği).
Kod değişikliği YOK. `_kusatilmis` (%90 kara komşuluğu) sahnede OLMAYAN ve sahipsiz
bir komşuyu PAYDADA tutuyor, PAYA katmıyor ⇒ iki bitişik kurulmamış nokta birbirini
kilitliyor (Uman ↔ Yelisavetgrad). Aday çare (BİLEŞEN): bitişik adaylar birlikte
sınanır — `petek_epok`un "bitişik ölü hücreler birlikte işlenir" kuralının aynısı.

Tek-üyeli bileşende sonuç ESKİSİYLE AYNIDIR (tanım gereği) ⇒ fark YALNIZ ≥2 üyeli
bileşenlerde doğar; alet yalnız onları hesaplar. Karar kümesi = eski ∪ bileşen.
Geometri: data/petek_govde.js (koşu 10 PETEK_D tabanı, ada göre eşlenir) ·
KARA: motorun kendi satırları (ARAC-P13B-KARA-0914.py)."""
import ast, io, json, os, sys, time, importlib.util, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = r"C:\atlas"
sys.path.insert(0, os.path.join(KOK, "arac"))
from shapely.geometry import Polygon, MultiPolygon
from shapely.ops import unary_union
from shapely.strtree import STRtree
import girdi

sp = importlib.util.spec_from_file_location("p13b_kara", os.path.join(KOK, "denetim", "ARAC-P13B-KARA-0914.py"))
km_ = importlib.util.module_from_spec(sp); sp.loader.exec_module(km_)
KARA, GOLLER, BOLGE, kns = km_.kara_goller()


def pencere(yol, adlar):
    s = io.open(yol, encoding="utf-8").read()
    out = {}
    for ad in adlar:
        a = "window." + ad + " = "; i = s.find(a)
        out[ad] = json.loads(s[i + len(a):s.find(";\n", i)])
    return out


t0 = time.time()
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


PETEK_D = [geo(eix[y["ad"]]) if y["ad"] in eix else None for y in Y]
eslesmeyen = [y["ad"] for i, y in enumerate(Y) if PETEK_D[i] is None]
PETEK_D = [g if g is not None else Polygon() for g in PETEK_D]
print(f"yerleşim {N} · koşu 10 peteği ada göre eşlenen {N-len(eslesmeyen)} · "
      f"eşlenmeyen {len(eslesmeyen)} (petek YOK sayıldı: {', '.join(eslesmeyen[:6])}…) · "
      f"{time.time()-t0:.0f} sn")
t0 = time.time()
KIYI = KARA.boundary.buffer(0.01)
print(f"_KIYI_TAMPON kuruldu {time.time()-t0:.0f} sn")

src = io.open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
ns = {"time": time, "unary_union": unary_union, "sayac": lambda *a, **k: None}
FON = {"_sahipli", "_ic_kara", "_cep", "_kusatilmis"}
bul = set()
for n in ast.parse(src).body:
    if isinstance(n, ast.FunctionDef) and n.name in FON:
        exec(compile(ast.Module([n], []), "uret_petek.py", "exec"), ns); bul.add(n.name)
assert bul == FON, FON - bul
KUS_IX = [i for i in range(N) if not PETEK_D[i].is_empty]
AGAC = STRtree([PETEK_D[i] for i in KUS_IX])
ns.update({"YERLER": Y, "PETEK_D": PETEK_D, "_KUS_AGAC": AGAC, "_KUS_IX": KUS_IX,
           "_KIYI_TAMPON": KIYI, "KUSATMA_ESIK": kns["KUSATMA_ESIK"], "_KUS_ONBELLEK": {},
           "_IC_ONBELLEK": {}, "_CEP_ONBELLEK": {}})
ESIK = kns["KUSATMA_ESIK"]
sah = ns["_sahipli"]


def sahnede(y, g):
    return not ((y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g))


def oran_eski(i, g):
    """motor döngü gövdesinin TEK ÜYE için birebir kopyası (aşağıda gerçeğiyle sınanır)."""
    ic = ns["_ic_kara"](i)
    if ic.length <= 1e-9:
        return None
    s = []
    for q in AGAC.query(ns["_cep"](i)):
        j = KUS_IX[int(q)]
        if j == i or not sahnede(Y[j], g):
            continue
        if sah(Y[j], g):
            s.append(PETEK_D[j])
    if not s:
        return 0.0
    ort = ic.intersection(unary_union(s).buffer(0.002))
    return 0.0 if ort.is_empty else min(ort.length / ic.length, 1.0)


def adaylar(g):
    return [i for i, y in enumerate(Y) if not y.get("kasitli_bosluk") and not sahnede(y, g)
            and not sah(y, g) and not PETEK_D[i].is_empty]


# ① SADAKAT SINAVI: oran_eski, motorun GERÇEK _kusatilmis'i ile birebir mi?
SINAV_GUN = ["1500-06-15", "1594-11-13", "1700-06-15"]
for g in SINAV_GUN:
    t1 = time.time()
    gercek = ns["_kusatilmis"](g)
    kopya = frozenset(i for i in adaylar(g) if (oran_eski(i, g) or 0) >= ESIK)
    print(f"① sadakat {g}: gerçek {len(gercek)} · kopya {len(kopya)} · "
          f"{'✓ BİREBİR' if gercek == kopya else '✗ AYRIŞIYOR ' + str(sorted(gercek ^ kopya)[:5])}"
          f" ({time.time()-t1:.0f} sn)")

gunler = sorted({"1281-01-01", "1594-11-13"} | {y["kur"] for y in Y if y.get("kur")}
                | {y["bit"] for y in Y if y.get("bit")})
gunler = [g for g in gunler if "1281-01-01" <= g <= "1923-11-01"]
print(f"② tarama: {len(gunler)} varlık epoku günü")
kayit = {}
t0 = time.time()
for gi, g in enumerate(gunler):
    ad = adaylar(g)
    aset = set(ad)
    komsu = {i: [] for i in ad}
    for i in ad:
        for q in AGAC.query(ns["_cep"](i), predicate="intersects"):
            j = KUS_IX[int(q)]
            if j != i and j in aset:
                komsu[i].append(j)
    gor = set()
    for i in ad:
        if i in gor or not komsu[i]:
            continue
        yig, bil = [i], []
        gor.add(i)
        while yig:
            k = yig.pop(); bil.append(k)
            for j in komsu[k]:
                if j not in gor:
                    gor.add(j); yig.append(j)
        if len(bil) < 2:
            continue
        U = unary_union([PETEK_D[k] for k in bil])
        icU = U.boundary.difference(KIYI)
        if icU.length <= 1e-9:
            continue
        bset = set(bil)
        s = [PETEK_D[KUS_IX[int(q)]] for q in AGAC.query(U.buffer(0.02), predicate="intersects")
             if KUS_IX[int(q)] not in bset and sahnede(Y[KUS_IX[int(q)]], g) and sah(Y[KUS_IX[int(q)]], g)]
        r = 0.0
        if s:
            o = icU.intersection(unary_union(s).buffer(0.002))
            r = 0.0 if o.is_empty else min(o.length / icU.length, 1.0)
        eski = {k for k in bil if (oran_eski(k, g) or 0) >= ESIK}
        yeni = set(bil) if r >= ESIK else set()
        anah = frozenset(Y[k]["ad"] for k in bil)
        e = kayit.setdefault(anah, {"gun": [], "oran": [], "eski": set(), "ek": set(), "km2": 0.0})
        e["gun"].append(g); e["oran"].append(r)
        e["eski"] |= {Y[k]["ad"] for k in eski}
        ek = yeni - eski
        e["ek"] |= {Y[k]["ad"] for k in ek}
        for k in ek:
            c = PETEK_D[k].representative_point()
            e["km2"] = max(e["km2"], sum(PETEK_D[x].area for x in ek) * 111.32 * 110.574
                           * math.cos(math.radians(c.y)))
    if gi % 100 == 0:
        print(f"   {gi}/{len(gunler)} · {time.time()-t0:.0f} sn")
print(f"② bitti {time.time()-t0:.0f} sn · ≥2 üyeli bileşen (eşsiz üye kümesi) {len(kayit)}")
ek_olan = {k: v for k, v in kayit.items() if v["ek"]}
print(f"③ BİLEŞEN KURALININ EKLEDİĞİ devir: {len(ek_olan)} bileşen · "
      f"{sum(len(v['ek']) for v in ek_olan.values())} ayrı yerleşim")
for k, v in sorted(ek_olan.items(), key=lambda kv: -max(kv[1]["oran"])):
    print(f"   {' + '.join(sorted(k))[:90]}")
    print(f"      gün {len(v['gun'])} ({v['gun'][0]} … {v['gun'][-1]}) · oran "
          f"%{100*min(v['oran']):.1f}-%{100*max(v['oran']):.1f} · EK {sorted(v['ek'])} · "
          f"≈{v['km2']:,.0f} km² · eskiden de devredilen {sorted(v['eski'])}")
alt = sorted(kayit.items(), key=lambda kv: -max(kv[1]["oran"]))
print("④ EŞİK ALTINDA KALAN en yüksek oranlı 10 bileşen (bilgi — kural onları DEVRETMEZ):")
for k, v in [x for x in alt if not x[1]["ek"]][:10]:
    print(f"   %{100*max(v['oran']):.1f}  {' + '.join(sorted(k))[:100]}  ({len(v['gun'])} gün)")
for a in ("Uman", "Yelisavetgrad (Aziz Yelizaveta Kalesi)"):
    ilgili = [(k, v) for k, v in kayit.items() if a in k]
    print(f"⑤ {a}: {len(ilgili)} bileşende · " + "; ".join(
        f"{sorted(k)} %{100*max(v['oran']):.1f} ek={sorted(v['ek'])}" for k, v in ilgili[:3]))
