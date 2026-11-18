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
p.add_argument("--dolgu", default="", help="B DOLGU ÖLÇÜMÜ: virgüllü günler; her bant gövdesiyle 5/7/10 gün yarıçaplı dolgu talebi/yazılan km²")
p.add_argument("--komsu-esik", type=float, default=0.5,
               help="'komşu genişledi' sınıfı: kaybolan alanın komşunun bant gövdesiyle örtüşme oranı >= bu")
a = p.parse_args()
lo, hi = a.aralik.split(",")
_BANT_GEO = {}      # (bütçe_saat, devlet, dönem_f) -> (bant gövdesi, dönem_t); motor DEĞİŞMEZ

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
    "tarihler = [t for t in tarihler if gn(%r) <= gn(t) <= gn(%r)]\n"
    "if not tarihler or tarihler[0] != %r: tarihler.insert(0, %r)\n"
    "if len(tarihler) < 2: tarihler.append(_t_son)\n" % (lo, hi, lo, lo)
) + capa, 1)

_ic2 = "            _bant_alan_dnm[(_did, _f)] = _ham_km2(_u)\n"
if src.count(_ic2) != 1:
    raise SystemExit("bant alan çapası %d kez geçti — alet güncellenmeli" % src.count(_ic2))
src = src.replace(_ic2, _ic2 + "            _BANT_GEO[(_bs, _did, _f)] = (_u, _t)\n", 1)

# taban gövde alanı seyreltmeden ÖNCE de ölçülür (tabana giden hattın hangi aşaması alan kaybettiriyor?)
_ic3 = "DEV_HALKA = seyrelt(DEV_HALKA, DEV_PARCA, DEVLET_KAYIT, _don, SEYRELT_TOL, _SEYRELT_SAYAC)\n"
if src.count(_ic3) != 1:
    raise SystemExit("seyrelt çapası %d kez geçti — alet güncellenmeli" % src.count(_ic3))
src = src.replace(_ic3, (
    "import dolgu as _dgx\n"
    "_HAL_OLD = list(DEV_HALKA)\n"
    "_PARCA_OLD = [list(_k) for _k in DEV_PARCA]\n"
    "_DON_OLD = _don\n"
    "_PRE_SEY = {}\n"
    "for _d in DEVLET_KAYIT:\n"
    "    for _q in _d['dnm']:\n"
    "        if _q.get('g'):\n"
    "            _gx = _dgx._coz(_q['g'], DEV_HALKA, DEV_PARCA)\n"
    "            _PRE_SEY[(_d['id'], _q['f'])] = _ham_km2(_gx)\n"
    "            if _d['id'] in %r: _PRE_GEO[(_d['id'], _q['f'])] = _gx\n" % (tuple(x for x in a.tani.split(",") if x),)
) + _ic3, 1)

os.environ["MOTOR_YURUYUS"] = "1"
os.environ["MOTOR_YURUYUS_SAAT"] = "40"
os.environ["MOTOR_UFUK_BANT"] = "40,56,80"
os.environ["MOTOR_EGIM_AB_KAPALI"] = "1"
os.environ["MOTOR_NEHIR_AB_KAPALI"] = "1"
_PRE_GEO = {}
NS = {"__name__": "__main__", "__file__": U.ANA_MOTOR, "_BANT_GEO": _BANT_GEO, "_PRE_GEO": _PRE_GEO}
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
    print("\n① TABAN BANT ↔ taban gövde (km²). Referans bant = günün TABAN bütçesi: 1281 sonrası <=5 (40 sa),")
    print("   1281 ÖNCESİ <=10 (80 sa; taban MÖ/öncesi bütçesiyle yürür). 'öncesi' = seyreltmeden ÖNCE taban;")
    print("   'yayın' = seyreltme SONRASI. Hat eşitliği ölçütü: bant ↔ seyrelt-öncesi (±%0,1); seyreltme ayrı kalem.")
    fark_n, sey_n = 0, 0
    _sey_buyuk = []
    gn_h = NS["gn"]
    _t_h = {(kay[0], kay[1]): kay[2] for kay in NS["_BANT_AKTIF"]}
    for k in sorted(TUM[b0]):
        bref = max(TUM) if (k[0] != "OSMANLI" and gn_h(k[1]) < gn_h("1281-01-01")) else b0
        v = TUM[bref].get(k)
        t = tab.get(k)
        pre = NS["_PRE_SEY"].get(k) if k[0] != "OSMANLI" else t
        if t is None or v is None:
            print("  %-26s %s  bant %s  taban %s" % (k[0], k[1], v, t))
            fark_n += 1
            continue
        if max(v, t) >= a.esik:
            ok = abs(v - pre) <= max(1.0, 0.001 * pre)
            fark_n += 0 if ok else 1
            sey = (t - pre)
            if abs(sey) > max(50.0, 0.005 * pre):
                sey_n += 1
                _sey_buyuk.append((abs(sey), k, pre, t))
            print("  %-26s %s  bant<=%g %9.0f  öncesi %9.0f  yayın %9.0f  %s%s" % (
                k[0], k[1], bref / 8.0, v, pre, t, "✓" if ok else "FARK %.0f" % (v - pre),
                ("  [seyrelt %+.0f]" % sey) if abs(sey) > 0.5 else ""))
    print("  hat eşitliği ihlali (bant ↔ seyrelt-öncesi): %d" % fark_n)
    print("  seyrelt etkisi > max(50 km², %%0,5): %d dönem; en büyük 5:" % sey_n)
    for r_ in sorted(_sey_buyuk, reverse=True)[:5]:
        print("     %s %s: öncesi %.0f → yayın %.0f (%+.0f km²)" % (r_[1][0], r_[1][1], r_[2], r_[3], r_[3] - r_[2]))
    print("\n② MONOTONLUK (km²):")
    sira = sorted(TUM)
    ih = 0
    gn_m = NS["gn"]
    _t_of = {(kay[0], kay[1]): kay[2] for kay in NS["_BANT_AKTIF"]}

    def _komsu_orani(k, b1, b2):
        """Kaybolan (b1 − b2) alanın, AYNI günlerde başka devletlerin b2 gövdesiyle örtüşme oranı."""
        e1, e2 = _BANT_GEO.get((b1,) + k), _BANT_GEO.get((b2,) + k)
        if e1 is None:
            return None
        g1 = e1[0]
        g2 = e2[0] if e2 is not None else None
        kayip = g1 if g2 is None else g1.difference(g2)
        if kayip.is_empty or kayip.area <= 0:
            return None
        f, t = k[1], _t_of.get(k)
        diger = [v[0] for (bb, d2, f2), v in _BANT_GEO.items()
                 if bb == b2 and d2 != k[0] and gn_m(f2) < gn_m(t) and gn_m(f) < gn_m(v[1])]
        if not diger:
            return 0.0
        from shapely.ops import unary_union as _uu
        ort = kayip.intersection(_uu(diger))
        return ort.area / kayip.area

    ih_komsu = 0
    for k in sorted(TUM[b0]):
        vs = [TUM[b].get(k) for b in sira]
        if max(x or 0 for x in vs) < a.esik:
            continue
        bozuk = [i for i in range(len(vs) - 1)
                 if vs[i] is not None and (vs[i + 1] is None or vs[i + 1] < vs[i] * 0.995 - 50)]
        etiket = ""
        if bozuk:
            sinif = []
            for i in bozuk:
                r = _komsu_orani(k, sira[i], sira[i + 1])
                if r is not None and r >= a.komsu_esik:
                    sinif.append("%g→%g: KOMŞU-GENİŞLEDİ (örtüşme %%%.0f)" % (sira[i], sira[i + 1], 100 * r))
                else:
                    sinif.append("%g→%g: GERÇEK-İHLAL (komşu örtüşmesi %s)" % (
                        sira[i], sira[i + 1], "%%%.0f" % (100 * r) if r is not None else "?"))
                    # kayıp parçaların yeri (nedeni bulmak için): en büyük 3 parça km² + kutu
                    _e1, _e2 = _BANT_GEO.get((sira[i],) + k), _BANT_GEO.get((sira[i + 1],) + k)
                    if _e1 is not None and _e2 is not None:
                        _ky = _e1[0].difference(_e2[0])
                        _ps = sorted(getattr(_ky, "geoms", [_ky]), key=lambda x: -x.area)[:3]
                        sinif.append("kayıp parça: " + "; ".join(
                            "%.0f km² %s" % (NS["_ham_km2"](x), tuple(round(v, 2) for v in x.bounds)) for x in _ps))
            gercek = any("GERÇEK" in x for x in sinif)
            ih += 1 if gercek else 0
            ih_komsu += 0 if gercek else 1
            etiket = "MONOTON-İHLAL " + "; ".join(sinif)
        print("  %-26s %s  %s %s" % (k[0], k[1],
              " / ".join("%.0f" % x if x is not None else "YOK" for x in vs), etiket))
    print("  monotonluk GERÇEK ihlal: %d · komşu-genişledi (ihlal sayılmaz, ayrı rapor): %d" % (ih, ih_komsu))

# ⑥ SEYRELT TARAMASI: seyrelt-öncesi ↔ sonrası alan oranı (tüm taban devlet-dönemleri)
_sn, _s5, _s1, _lst = 0, 0, 0, []
for _k, _pv in NS["_PRE_SEY"].items():
    _tv = tab.get(_k)
    if _tv is None or _pv < 100:
        continue
    _sn += 1
    _r = abs(_tv / _pv - 1.0)
    if _r > 0.05:
        _s5 += 1
        _lst.append((abs(_tv - _pv), _k, _pv, _tv))
    if _r > 0.01:
        _s1 += 1
print("\n⑥ SEYRELT TARAMASI: %d devlet-dönem · oran sapması >%%1: %d · >%%5: %d" % (_sn, _s1, _s5))
for _x in sorted(_lst, reverse=True)[:25]:
    print("   %-26s %s  öncesi %9.0f  sonrası %9.0f  (%+.1f%%)" % (_x[1][0], _x[1][1], _x[2], _x[3], 100 * (_x[3] / _x[2] - 1)))

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
        if did not in a.tani.split(","):
            continue
        aktif = frozenset(ak)
        g0, _k, _t = NS["_yabanci_govde_hesap"](did, aktif, f, sorted(aktif), None)
        g1 = NS["_komsu_toprak_cikar"](did, aktif, f, g0, None)
        gb = NS["_bant_yabanci_govde"](did, f, ak, None)
        km = NS["_ham_km2"]
        print("  %s  hesap %9.0f  komşu-çıkar %9.0f  seyrelt-öncesi %9.0f  yayın %9.0f  bant-işlevi %9.0f  (|aktif|=%d)" % (
            f, km(g0), km(g1), NS["_PRE_SEY"].get((did, f), -1), tab.get((did, f), -1),
            km(gb) if gb is not None else -1, len(ak)))
        # seyrelt kaybı nerede? (önce/sonra farkı: alan, kutu, parça sayısı)
        _pre = _PRE_GEO.get((did, f))
        _post = None
        for _d in NS["DEVLET_KAYIT"]:
            if _d["id"] == did:
                for _q in _d["dnm"]:
                    if _q["f"] == f and _q.get("g"):
                        _post = dolgu._coz(_q["g"], NS["DEV_HALKA"], NS["DEV_PARCA"])
        if _pre is not None and _post is not None and abs(km(_pre) - km(_post)) > 2000:
            # halka düzeyi tanı: eski/yeni halka, köşe sayısı, işaretli alan, aslı mı, donmuş köşe sayısı
            from shapely.geometry import Polygon as _PGx
            for _d in NS["DEVLET_KAYIT"]:
                if _d["id"] != did:
                    continue
                for _q in _d["dnm"]:
                    if _q["f"] != f:
                        continue
                    for _pj in _q["g"]:
                        _old, _new = NS["_PARCA_OLD"][_pj], NS["DEV_PARCA"][_pj]
                        for _o, _n in zip(_old, _new):
                            _ro, _rn = NS["_HAL_OLD"][_o], NS["DEV_HALKA"][_n]
                            _don = sum(1 for _c in _ro if (round(_c[0], 6), round(_c[1], 6)) in NS["_DON_OLD"])
                            print("      halka parça %d: köşe %d→%d  alan(deg²) %.3f→%.3f  aslı=%s  donmuş köşe=%d  eski basit=%s yeni basit=%s" % (
                                _pj, len(_ro), len(_rn), _PGx(_ro).area, _PGx(_rn).area, _rn is _ro or _rn == _ro, _don,
                                _PGx(_ro).exterior.is_simple, _PGx(_rn).exterior.is_simple))
            _kayip = _pre.difference(_post)
            _parc = sorted(getattr(_kayip, "geoms", [_kayip]), key=lambda x: -x.area)[:3]
            print("      ↳ SEYRELT KAYBI %.0f km²: pre %d parça → post %d parça; en büyük kayıp parçalar (km², kutu): %s" % (
                km(_pre) - km(_post), len(getattr(_pre, "geoms", [_pre])), len(getattr(_post, "geoms", [_post])),
                "; ".join("%.0f %s" % (km(x), tuple(round(v, 2) for v in x.bounds)) for x in _parc)))

# ⑤ B DOLGU ÖLÇÜMÜ (--dolgu GÜN,...): her bant gövdesi seti × dolgu yarıçapı (5/7/10 günlük)
#    arac/dolgu.py kesit_dolgu o günkü BANT gövdeleriyle koşturulur; ölçülen: talep km²,
#    yazılan km², çekişmeli km², parça sayısı/cinsi, engellenen, süre.
if a.dolgu:
    import dolgu as _dg
    KARA = NS["KARA"]
    kh = _dg.KaraIndeks(KARA)
    gn_d = NS["gn"]
    print("\n⑤ B DOLGU ÖLÇÜMÜ (km²): bant gövdesi × dolgu yarıçapı (gün → r = gün·40,32/2 km)")
    for gun in a.dolgu.split(","):
        for bs in sorted(TUM):
            gov = [(did, v[0], (bs, did, f)) for (b_, did, f), v in _BANT_GEO.items()
                   if b_ == bs and gn_d(f) <= gn_d(gun) < gn_d(v[1])]
            tabanA = sum(NS["_ham_km2"](g) for _d, g, _a in gov)
            for rg in (5.0, 7.0, 10.0):
                rkm = rg * 40.32 / 2.0
                t0 = time.time()
                gov_r = [(d_, g_, (a_, rg)) for d_, g_, a_ in gov]
                parc, rap = _dg.kesit_dolgu(gov_r, KARA, kh, r_km=rkm)
                cins = {}      # cins -> "parça sayısı/km²"
                _cn, _ca = {}, {}
                for pc in parc:
                    _cn[pc["cins"]] = _cn.get(pc["cins"], 0) + 1
                    _ca[pc["cins"]] = _ca.get(pc["cins"], 0.0) + _dg._km2(pc["g"])
                cins = {k_: "%d/%.0fkm2" % (_cn[k_], _ca[k_]) for k_ in _cn}
                yaz = sum(_dg._km2(pc["g"]) for pc in parc)
                print("  %s  bant<=%g  gövde %9.0f | dolgu r=%5.1f km (%g gün): talep %8.0f yazılan %8.0f (%%%.1f) "
                      "çekişmeli %7.0f parça %3d %s engel %d  %.0f sn" % (
                          gun, bs / 8.0, tabanA, rkm, rg, rap["talep_km2"], yaz,
                          100.0 * yaz / tabanA if tabanA else 0, rap["cekismeli_km2"], len(parc),
                          cins, len(rap["engellendi"]), time.time() - t0))
