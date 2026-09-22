# -*- coding: utf-8 -*-
"""P13B · 0048-Y5 ÖLÇÜMÜ (kod değişikliği YOK) — `_dolgu_kumesi` kasitli_bosluk
bayrağını tanımıyor. Öneri "bos_ix'e eklemeden önce kasitli_bosluk ise atla".
Bu alet önerinin BEDELİNİ ölçer: bugün ekleyici kapının doldurduğu kasıtlı boşluk
peteği sayısı = önerinin tam farkı (bir boş peteğin elenmesi ötekilerin puanını
DEĞİŞTİRMEZ — puan yalnız sahipli noktalardan toplanır, çekişme de satır başınadır).

Yaklaşıklık (açıkça): `devir_kumesi` yerine yalnız YAZILI devir (kur/bit dışı +
sahipli) kullanılır; `_kusatilmis` kısmı (koşu 10: 160 ad) PETEK_D gerektirir ve
DAHİL EDİLMEDİ. Kuşatılmış noktalar burada sahip/boş kovasına yanlış düşebilir."""
import ast, io, json, os, sys, time
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = r"C:\atlas"
sys.path.insert(0, os.path.join(KOK, "arac"))
from shapely.geometry import shape, box, Point
from shapely.ops import unary_union
import girdi

src = io.open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
ns = {"json": json, "os": os}
FON = {"_dolgu_kumesi", "_col_icinde", "_osm_aktif", "_sahipli"}
SAB = {"PUAN_HALKA", "PUAN_ESIK", "COL_PUAN_ESIK", "ORTME_DILIM_SAYISI", "DOLDURULABILIR_BOS"}
bul = set()
for n in ast.parse(src).body:
    if isinstance(n, ast.FunctionDef) and n.name in FON:
        exec(compile(ast.Module([n], []), "uret_petek.py", "exec"), ns); bul.add(n.name)
    if (isinstance(n, ast.Assign) and len(n.targets) == 1
            and getattr(n.targets[0], "id", None) in SAB):
        exec(compile(ast.Module([n], []), "uret_petek.py", "exec"), ns); bul.add(n.targets[0].id)
assert bul == FON | SAB, (FON | SAB) - bul

Y = girdi.yukle(sessiz=True)
for y in Y:
    for _alan, _dv in girdi.VARSAYILAN.items():
        y.setdefault(_alan, [] if _dv == [] else _dv)
BOLGE = box(-180, -60, 180, 85)
_gr = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_geography_regions_polys.geojson"),
                     encoding="utf-8"))
_cp = [shape(f["geometry"]).buffer(0).intersection(BOLGE) for f in _gr["features"]
       if (f["properties"].get("FEATURECLA") or "") == "Desert"]
COL = unary_union([g for g in _cp if not g.is_empty])


def devir_yazili(g):
    return frozenset(i for i, y in enumerate(Y)
                     if ((y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g))
                     and ns["_sahipli"](y, g))


ns.update({"YERLER": Y, "noktalar": [Point(y["lon"], y["lat"]) for y in Y], "COL": COL,
           "devir_kumesi": devir_yazili, "_DOLGU_ONBELLEK": {}, "_COL_NOKTA_ONBELLEK": {},
           "_DOLGU_SAYAC": {"petek": 0, "gun": 0, "cekismeli": 0, "col_dusen": 0, "col_gecen": 0}})
KB = {i for i, y in enumerate(Y) if y.get("kasitli_bosluk")}
print(f"yerleşim {len(Y)} · kasitli_bosluk {len(KB)} · çöl poligonu {len(_cp)}")
GUNLER = ["1300-06-15", "1400-06-15", "1453-05-29", "1500-06-15", "1517-07-06",
          "1600-06-15", "1602-01-01", "1700-06-15", "1800-06-15", "1900-06-15"]
toplam_kb, adlar = 0, {}
for g in GUNLER:
    t0 = time.time()
    out = ns["_dolgu_kumesi"](g)
    tum = sum(len(v) for v in out.values())
    kb = [(Y[j]["ad"], d) for d, v in out.items() for j in v if j in KB]
    toplam_kb += len(kb)
    for a, d in kb:
        adlar.setdefault(a, set()).add(d)
    print(f"  {g}: kapı {tum} petek dolduruyor · bunun KASITLI BOŞLUK olanı {len(kb)}"
          f"  ({time.time()-t0:.1f} sn)")
    for a, d in sorted(kb)[:12]:
        print(f"       {a:<40} → {d}")
    if len(kb) > 12:
        print(f"       … +{len(kb)-12}")
print(f"\nÖNERİNİN FARKI (10 kesit toplamı): {toplam_kb} petek-gün · {len(adlar)} ayrı kasıtlı boşluk")
doha = [i for i, y in enumerate(Y) if y["ad"].startswith("Doha")]
for i in doha:
    y = Y[i]
    print(f"  {y['ad']}: kasitli_bosluk={y.get('kasitli_bosluk')!r} kur={y.get('kur')} "
          f"1602 kapı → {[d for d, v in ns['_dolgu_kumesi']('1602-01-01').items() if i in v]}")
