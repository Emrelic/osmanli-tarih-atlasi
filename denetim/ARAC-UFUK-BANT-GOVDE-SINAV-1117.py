# -*- coding: utf-8 -*-
"""UFUK-BANT-1117 SINAVI — bant gövdesi taban gövde hattından geçiyor mu? (kutu, TEK GÜN dilimi)

ARAC-B-GORUNUM-UFUK-0072.py'nin motor kesitini kullanır (kesim = bant-sonrası) ama
`tarihler` listesini dar bir aralığa indirir (varsayılan 1680..1690 ⇒ birkaç dönem) —
2 saatlik tam kutu koşusu yerine dakikalar sürer. Motor DEĞİŞTİRİLMEZ, yalnız kesit metni.

Ölçer (Fransa kutusu varsayılan):
  ① taban bant (<=5) alanı == yayınlanan taban gövde alanı (hat eşitliği) — devlet-dönem başına
  ② bant alanları monoton (<=5 <= <=7 <= <=10) — motorun kendi MONOTONLUK satırı + burada tablo
  ③ 'bant YOK' ve HATA sayıları
Kullanım:
  py denetim/ARAC-UFUK-BANT-GOVDE-SINAV-1117.py --kutu=-5,42,8,51 --aralik=1680-01-01,1690-01-01
"""
import argparse
import importlib.util
import io
import math
import os
import sys
import time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
_s = importlib.util.spec_from_file_location(
    "ufuk0072", os.path.join(KOK, "denetim", "ARAC-B-GORUNUM-UFUK-0072.py"))
U = importlib.util.module_from_spec(_s)
_s.loader.exec_module(U)

p = argparse.ArgumentParser()
p.add_argument("--kutu", default="-5,42,8,51")
p.add_argument("--aralik", default="1680-01-01,1690-01-01")
p.add_argument("--esik", type=float, default=1000.0, help="tabloya girecek en küçük km²")
p.add_argument("--devlet", default="", help="yalnız bu devlet(ler) (virgüllü); boş = hepsi")
p.add_argument("--gunler", default="", help="virgüllü günler: o günü kapsayan dönemlerin taban/<=5/<=7/<=10 tablosu")
p.add_argument("--tani", default="", help="TANI: bu devletin gövdesini aşama aşama ayrıştır")
a = p.parse_args()
lo, hi = a.aralik.split(",")

src, _sha = U._motor_kesiti(a.kutu, "bant-sonrasi")
if a.devlet:
    # BOYALAR'a DOKUNULMAZ (eski taban kıyası onu okuyor); yalnız FAZ 1 girişinde süzülür.
    _ic = "    _i, (did, (dad, renk)) = _arg\n"
    if src.count(_ic) != 1:
        raise SystemExit("FAZ1 çapası %d kez geçti" % src.count(_ic))
    _liste = tuple(x for x in a.devlet.split(",") if x)
    src = src.replace(_ic, _ic + "    if did not in %r: return did, dad, renk, [], []\n" % (_liste,), 1)
capa = 'print(f"Kırılma tarihi: {len(tarihler)}")\n'
if src.count(capa) != 1:
    raise SystemExit("tarihler çapası %d kez geçti — alet güncellenmeli" % src.count(capa))
src = src.replace(capa, (
    "_t_ilk, _t_son = tarihler[0], tarihler[-1]\n"
    "tarihler = [t for t in tarihler if %r <= t <= %r]\n"
    "if not tarihler or tarihler[0] != %r: tarihler.insert(0, %r)\n"
    "if len(tarihler) < 2: tarihler.append(_t_son)\n" % (lo, hi, lo, lo)
) + capa, 1)

os.environ["MOTOR_YURUYUS"] = "1"
os.environ["MOTOR_YURUYUS_SAAT"] = "40"
os.environ["MOTOR_UFUK_BANT"] = "40,56,80"
os.environ["MOTOR_EGIM_AB_KAPALI"] = "1"
os.environ["MOTOR_NEHIR_AB_KAPALI"] = "1"
NS = {"__name__": "__main__", "__file__": U.ANA_MOTOR}
t0 = time.time()
exec(compile(src, U.ANA_MOTOR + " [BANT-GOVDE kesiti]", "exec"), NS)
sure = time.time() - t0
print("\n==== SINAV ÇIKTISI ====")
print("süre %.0f sn" % sure)
TUM = NS.get("_BANT_ALAN_TUM") or {}
print("ölçülen bant bütçeleri:", sorted(TUM))
for b in sorted(TUM):
    print("  bant %g saat: %d devlet-dönem" % (b, len(TUM[b])))

# ① hat eşitliği: taban bant alanı ↔ yayınlanan taban gövde alanı
import dolgu
tab = {}
for d in NS["DEVLET_KAYIT"]:
    for q in d["dnm"]:
        if q.get("g"):
            g = dolgu._coz(q["g"], NS["DEV_HALKA"], NS["DEV_PARCA"])
            tab[(d["id"], q["f"])] = NS["_ham_km2"](g)
for q in NS["donemler"]:
    ix = (q.get("o") or []) + (q.get("v") or [])
    if ix:
        g = dolgu._coz(ix, NS["OSM_HALKA"], NS["OSM_PARCA"])
        tab[("OSMANLI", q["f"])] = NS["_ham_km2"](g)
if TUM:
    b0 = min(TUM)
    print("\n① TABAN BANT (<=5) ↔ yayın taban gövde (km²):")
    fark_n = 0
    for k, v in sorted(TUM[b0].items()):
        t = tab.get(k)
        if t is None:
            print("  %-26s %s  bant %8.0f  taban YOK" % (k[0], k[1], v))
            fark_n += 1
            continue
        if max(v, t) >= a.esik:
            ok = abs(v - t) <= max(1.0, 0.001 * t)
            fark_n += 0 if ok else 1
            print("  %-26s %s  bant %9.0f  taban %9.0f  %s" % (
                k[0], k[1], v, t, "✓" if ok else "FARK %.0f" % (v - t)))
    print("  hat eşitliği ihlali: %d" % fark_n)
    print("\n② MONOTONLUK (km²):")
    sira = sorted(TUM)
    ih = 0
    for k in sorted(TUM[b0]):
        vs = [TUM[b].get(k) for b in sira]
        if max(x or 0 for x in vs) < a.esik:
            continue
        mono = all(vs[i] is not None and vs[i + 1] is not None and vs[i + 1] >= vs[i] * 0.995 - 50
                   for i in range(len(vs) - 1))
        ih += 0 if mono else 1
        print("  %-26s %s  %s %s" % (k[0], k[1],
              " / ".join("%.0f" % x if x is not None else "YOK" for x in vs),
              "" if mono else "MONOTON-İHLAL"))
    print("  monotonluk ihlali: %d" % ih)

# ④ GÜN TABLOSU: --gunler 0001-01-01,-0100-06-15 → o günü kapsayan her dönem için taban/<=5/<=7/<=10
if a.gunler:
    print("\n④ GÜN TABLOSU (km²): taban(yayın) | <=5 | <=7 | <=10")
    gn_ = NS["gn"]
    for gun in a.gunler.split(","):
        for kay in NS["_BANT_AKTIF"]:
            did, f, t = kay[0], kay[1], kay[2]
            if not (gn_(f) <= gn_(gun) < gn_(t)):
                continue
            vs = [TUM[b].get((did, f)) for b in sorted(TUM)]
            print("  %s  %-18s dönem %s..%s  taban %9.0f | %s" % (
                gun, did, f, t, tab.get((did, f), -1),
                " | ".join("%9.0f" % x if x is not None else "     YOK" for x in vs)))

# ③ TANI: bir devletin her dönemi için gövdeyi aşama aşama ayrıştır
if a.tani:
    print("\n③ TANI %s (km²): hesap(None) → komşu çıkar → yayın taban | bant işlevi" % a.tani)
    for kay in NS["_BANT_AKTIF"]:
        did, f, t, ak = kay[:4]
        if did != a.tani:
            continue
        aktif = frozenset(ak)
        g0, _k, _t = NS["_yabanci_govde_hesap"](did, aktif, f, sorted(aktif), None)
        g1 = NS["_komsu_toprak_cikar"](did, aktif, f, g0, None)
        gb = NS["_bant_yabanci_govde"](did, f, ak, None)
        km = NS["_ham_km2"]
        print("  %s  hesap %9.0f  komşu-çıkar %9.0f  yayın %9.0f  bant-işlevi %9.0f  (|aktif|=%d)" % (
            f, km(g0), km(g1), tab.get((did, f), -1), km(gb) if gb is not None else -1, len(ak)))
