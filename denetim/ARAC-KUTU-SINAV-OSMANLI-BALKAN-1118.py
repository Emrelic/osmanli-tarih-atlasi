# -*- coding: utf-8 -*-
"""MOTOR-YAMA-5GUN-B-1118 KUTU SINAVI (Osmanli/Balkan) - TEK KESIT, motor kesiti + dolgu.

ARAC-B-GORUNUM-UFUK-0072 kalibi: motor metni kutuya cevrilir, `Ⓑ dolgu katmani` blogunun
BASINDA kesilir (blogun tanimlari `_dg_*` kesimin ICINDE kalir), kesit gununde A govdeleri
ve dolgu burada hesaplanir. Motor DEGISTIRILMEZ. data/ ve veri-kaynak/ dosyalarini YAZAN
motor asamalari (bolgeler.js, motor_kara.geojson) calisir -> sinavdan sonra git checkout.

Kullanim: py denetim/ARAC-KUTU-SINAV-OSMANLI-BALKAN-1118.py --kutu=18,36,32,46 --gun=1600-01-01
Cikti: stdout + --json yolu.
"""
import argparse, importlib.util, io, json, os, sys, time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
_s = importlib.util.spec_from_file_location(
    "ufuk0072", os.path.join(KOK, "denetim", "ARAC-B-GORUNUM-UFUK-0072.py"))
U = importlib.util.module_from_spec(_s)
_s.loader.exec_module(U)

p = argparse.ArgumentParser()
p.add_argument("--kutu", default="18,36,32,46")
p.add_argument("--gun", required=True)
p.add_argument("--bitis", default="")
p.add_argument("--json", default="")
a = p.parse_args()
lo = a.gun
hi = a.bitis or (str(int(lo[:4]) + 2) + lo[4:])

src = io.open(U.ANA_MOTOR, encoding="utf-8", newline="").read().replace("\r\n", "\n")


def degis(eski, yeni):
    global src
    if src.count(eski) != 1:
        raise SystemExit("CAPA %d kez gecti: %r" % (src.count(eski), eski[:60]))
    src = src.replace(eski, yeni)


degis("BOLGE = box(-180, -60, 180, 85)\n", "BOLGE = box(%s)\n" % a.kutu)
degis('    if not _KILIT.al("petek"):\n        sys.exit(1)\n'
      '    atexit.register(_KILIT.birak, "petek")\n', "    pass  # SINAV: kilit atlandi\n")
i = src.index('io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..",')
j = src.index('+ "\\n")\n', i) + len('+ "\\n")\n')
if '".uretim-basladi"' not in src[i:j]:
    raise SystemExit("damga satiri taninmadi")
src = src[:i] + "pass  # SINAV: damga yazilmadi\n" + src[j:]
capa = 'if os.environ.get("MOTOR_B_DOLGU") == "1":\n    asama("Ⓑ dolgu katmanı (B görünümü)")\n'
if src.count(capa) != 1:
    raise SystemExit("kesim capasi %d" % src.count(capa))
src = src[:src.index(capa)]
capa2 = 'print(f"Kırılma tarihi: {len(tarihler)}")\n'
if src.count(capa2) != 1:
    raise SystemExit("tarihler capasi")
src = src.replace(capa2, (
    "tarihler = [t for t in tarihler if gn(%r) <= gn(t) <= gn(%r)]\n"
    "if not tarihler or tarihler[0] != %r: tarihler.insert(0, %r)\n"
    "if len(tarihler) < 2: tarihler.append('9999-12-31')\n" % (lo, hi, lo, lo)) + capa2, 1)

# HIZ: kesit gununde hicbir yerlesimin s: donemi o devleti kapsamiyorsa govdesi o gun bostur;
# faz-1'i tum 1281-1923 icin kosturmak yerine yalniz aktif devletler isler (kesit gunu sonucu ayni).
_ic = "    _i, (did, (dad, renk)) = _arg\n"
if src.count(_ic) != 1:
    raise SystemExit("faz1 capasi")
src = src.replace(_ic, _ic + "    if did not in _AKTIF_LO: return did, dad, renk, [], []\n", 1)
_ic = "\n    ts = gsirala(t for t in ts if _EPOK_N <= gn(t) <= _KESIT_SON_N)\n"
if src.count(_ic) != 1:
    raise SystemExit("ts capasi")
# faz-1 gun listesi kesit penceresine daralir (kesit gunu her zaman listede)
src = src.replace(_ic, _ic + "    ts = gsirala(set(t for t in ts if gn(%r) <= gn(t) <= gn(%r)) | {%r})\n" % (lo, hi, lo), 1)
_ic = 'print(f"Kırılma tarihi: {len(tarihler)}")\n'
_bx = [float(v) for v in a.kutu.split(",")]
_M = 12.0   # derece: kutu disindan komsu devletlerin yerlesimleri de gövdeye girer (yuruyus/petek tasmasi)
src = src.replace(_ic, ("_BX = %r\n"
                        "_AKTIF_LO = {sp['d'] for y in YERLER for sp in y['s'] if gn(sp['f']) <= gn(%r) < gn(sp['t'])\n"
                        "             and _BX[0]-%r <= y['lon'] <= _BX[2]+%r and _BX[1]-%r <= y['lat'] <= _BX[3]+%r}\n"
                        "print('AKTIF devlet (s:, kutu+%gderece) kesit gununde:', len(_AKTIF_LO))\n"
                        % (_bx, lo, _M, _M, _M, _M, _M)) + _ic, 1)

BAYRAK = dict(
    MOTOR_YURUYUS="1", MOTOR_YURUYUS_SAAT="40", MOTOR_UFUK_BANT="40", MOTOR_COL_UFUK_SAAT="0",
    MOTOR_SINIR_KISIT="1", MOTOR_COL_GIRINTI_KAPALI="1", MOTOR_KOMSU_KUR_BOL="1",
    MOTOR_YAKA_KILIDI="1", MOTOR_KISTAK_KOPRU="1", MOTOR_KUR_DEVIR="1", MOTOR_KUSATMA_BILESEN="1",
    MOTOR_TOHUM_YAKA="1", MOTOR_MO_SINIR="9999-12-31", MOTOR_MO_YURUYUS_GUN="5",
    MOTOR_MO_PUAN_KAPISI="0", MOTOR_PUAN_KAPALI="1", MOTOR_TARIH_BASI_MERKEZ="1",
    MOTOR_B_DOLGU="1", MOTOR_DOLGU_UFUK_GUN="10", MOTOR_DOLGU_KAPALI="1",
    MOTOR_EGIM_AB_KAPALI="1", MOTOR_NEHIR_AB_KAPALI="1")
os.environ.update(BAYRAK)

NS = {"__name__": "__main__", "__file__": U.ANA_MOTOR}
t0 = time.time()
exec(compile(src, U.ANA_MOTOR + " [KUTU-SINAV kesiti]", "exec"), NS)
t_motor = time.time() - t0
print("\n==== SINAV CIKTISI ==== kutu", a.kutu, "gun", lo, "motor sn %.0f" % t_motor, flush=True)

import dolgu as D
from shapely.ops import unary_union
from shapely.geometry import Point

gun = lo
# A govdeleri (uret_petek B bloku ile ayni kurulum)
ar = []
for r in NS["donemler"]:
    ix = (r.get("o") or []) + (r.get("v") or [])
    if ix:
        ar.append((r["f"], r["t"], "OSMANLI", D._coz(ix, NS["OSM_HALKA"], NS["OSM_PARCA"])))
for d in NS["DEVLET_KAYIT"]:
    for q in d["dnm"]:
        if q.get("g"):
            ar.append((q["f"], q["t"], d["id"], D._coz(q["g"], NS["DEV_HALKA"], NS["DEV_PARCA"])))
gk = D._gk
govdeler = [(kim, g, i) for i, (f, t, kim, g) in enumerate(ar) if gk(f) <= gk(gun) < gk(t)]
print("A govde sayisi (devlet):", len(govdeler), flush=True)

S0 = dict(D.SAYAC)
Y0 = dict(D.YUTMA)
izg = NS["_dg_izgara"](gun)
duv = NS["_dg_duvar"](gun)
eng = NS["_dg_engel"](gun)
print("izgara:", "VAR" if izg else "YOK", "| duvar devlet sayisi:", (len(duv) if duv else 0),
      "| engel:", (len(eng.geoms) if eng is not None else 0), flush=True)
r_km = 10 * D.KM_GUN / 2.0
t1 = time.time()
parcalar, rapor = D.kesit_dolgu(govdeler, NS["KARA"], D.KaraIndeks(NS["KARA"]), r_km=r_km,
                                izgara=izg, duvar=duv, engel=eng)
t_dolgu = time.time() - t1
SAY = {k: D.SAYAC[k] - S0.get(k, 0) for k in D.SAYAC}
YUT = {k: v - Y0.get(k, 0) for k, v in D.YUTMA.items()}

# (a) bagimsiz duvar sayimi
km2 = D._km2
gecen = []
for pc in parcalar:
    w = (duv or {}).get(pc["kim"])
    if w is None:
        continue
    ic = km2(pc["g"].intersection(w))
    if ic > 1.0:
        gecen.append((pc["kim"], pc["cins"], round(ic, 1)))
duvar_alan = {}
for kim, w in (duv or {}).items():
    duvar_alan[kim] = round(km2(w))

# (b) parcalanma
def bilesen(g, esik):
    ps = [x for x in D._parcalar(g) if km2(x) >= esik]
    if not ps:
        return 0
    u = unary_union([x.buffer(1e-6) for x in ps])
    return len(getattr(u, "geoms", [u]))

kimler = {}
for kim, g, _ in govdeler:
    kimler.setdefault(kim, []).append(g)
dolgu_par = {}
for pc in parcalar:
    dolgu_par.setdefault(pc["kim"], []).append(pc["g"])
parca_tab = []
for kim, gl in kimler.items():
    A = unary_union(gl)
    ak = km2(A)
    dk = km2(unary_union(dolgu_par.get(kim, []))) if dolgu_par.get(kim) else 0.0
    AD = unary_union(gl + dolgu_par.get(kim, []))
    parca_tab.append(dict(kim=kim, a_km2=round(ak), dolgu_km2=round(dk),
                          A0=bilesen(A, 0), AD0=bilesen(AD, 0),
                          A10=bilesen(A, 10), AD10=bilesen(AD, 10),
                          A100=bilesen(A, 100), AD100=bilesen(AD, 100),
                          dolgu_parca=len(dolgu_par.get(kim, []))))
parca_tab.sort(key=lambda r: -r["a_km2"])
# (b2) cakisma: dolgu<->dolgu (farkli kim) ve dolgu<->baska devletin A govdesi (cift boyama olcusu)
from shapely import STRtree
_pg = [(pc["kim"], pc["g"]) for pc in parcalar]
_ag = {kim: unary_union(gl) for kim, gl in kimler.items()}
_dd = 0.0
_dd_n = 0
_dd_liste = []
_agac = STRtree([g for _, g in _pg])
for i, (k, g) in enumerate(_pg):
    for j in _agac.query(g):
        if j <= i or _pg[j][0] == k:
            continue
        v = km2(g.intersection(_pg[j][1]))
        if v > 1.0:
            _dd += v
            _dd_n += 1
            _dd_liste.append((v, k, _pg[j][0], parcalar[i]["cins"], parcalar[j]["cins"], round(km2(g)), round(km2(_pg[j][1]))))
_da = []
for k, g in _pg:
    for k2, A2 in _ag.items():
        if k2 == k:
            continue
        v = km2(g.intersection(A2))
        if v > 1.0:
            _da.append((k, k2, round(v, 1)))
_da_k = sum(x[2] for x in _da)
cins = {}
for pc in parcalar:
    cins[pc["cins"]] = cins.get(pc["cins"], 0) + 1

SON = dict(kutu=a.kutu, gun=gun, motor_sn=round(t_motor), dolgu_sn=round(t_dolgu), devlet=len(govdeler),
           sayac=SAY, yutma=YUT, rapor={k: v for k, v in rapor.items() if isinstance(v, (int, float))},
           duvar_gecen_bagimsiz_n=len(gecen), duvar_gecen_bagimsiz=gecen, duvar_alan_km2=duvar_alan,
           dolgu_dolgu_cakisma_km2=round(_dd, 1), dolgu_dolgu_cakisma_n=_dd_n,
           dolgu_dolgu_en_buyuk=[(round(x[0]),) + x[1:] for x in sorted(_dd_liste, reverse=True)[:12]],
           dolgu_parca_listesi=[(pc["kim"], pc["cins"], round(km2(pc["g"])), tuple(round(v, 2) for v in pc["g"].bounds)) for pc in parcalar][:80],
           dolgu_baskaA_cakisma_km2=round(_da_k, 1), dolgu_baskaA_cakisma=sorted(_da, key=lambda x: -x[2])[:12],
           dolgu_toplam_km2=round(sum(km2(g) for _, g in _pg)),
           cins=cins, parca=parca_tab[:25], dolgu_parca_toplam=len(parcalar),
           duvar_hat_sayisi=len(NS["_dg_duvar_hazirla"]()),
           osm_taraf=sum(1 for L in NS["_dg_duvar_hazirla"]() if "OSMANLI" in (L["ks"], L["kg"])))
print(json.dumps(SON, ensure_ascii=False, indent=1, default=str))
if a.json:
    with io.open(a.json, "w", encoding="utf-8") as f:
        json.dump(SON, f, ensure_ascii=False, indent=1, default=str)
