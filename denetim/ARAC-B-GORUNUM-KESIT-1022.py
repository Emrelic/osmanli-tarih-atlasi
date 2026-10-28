"""Dar kesit sınavı v2: py kesit2.py <tarih> <ufuk_gun> <cikti_json>
A'yı YARDIMCI SÜREÇTE okur (çıkınca bellek iade olur), ana süreç yalnız canlı gövdeleri taşır.
A dizini: MOTOR_DOLGU_VERI_DIZIN (yalnız okunur). Bellek tavanı KAP_GB (varsayılan 6)."""
import json, os, pickle, subprocess, sys, tempfile, threading, time

if len(sys.argv) > 1 and sys.argv[1] == "--hazirla":
    tarih, pk = sys.argv[2], sys.argv[3]
    sys.path.insert(0, "arac")
    import dolgu
    import shapely
    ar, tar, d, y = dolgu._kesitler()
    canli = {}
    for ai, (f, t, kim, kaynak, idx) in enumerate(ar):
        if dolgu._gk(f) <= dolgu._gk(tarih) < dolgu._gk(t):
            canli.setdefault((kim, kaynak), [[], []])
            canli[(kim, kaynak)][0].extend(idx)
            canli[(kim, kaynak)][1].append(ai)
    out = []
    for (kim, kaynak), (idx, ailer) in canli.items():
        if kaynak == "o":
            g = dolgu._coz(idx, d["PARCALAR"], d["PARCA_HALKA"])
        else:
            g = dolgu._coz(idx, y["DEVLET_PARCALAR"], y["DEVLET_PARCA_HALKA"])
        if not g.is_empty:
            out.append((kim, shapely.to_wkb(g), (kim, tuple(ailer))))
    pickle.dump(out, open(pk, "wb"))
    sys.exit(0)

tarih, gun, cikti = sys.argv[1], sys.argv[2], sys.argv[3]
os.environ["MOTOR_DOLGU_UFUK_GUN"] = gun
os.environ["MOTOR_ONBELLEK_DIZIN"] = os.path.join(tempfile.gettempdir(), "dolgu_sina_onb")
import psutil
_ZIRVE = [0.0]
def _bekci():
    pr = psutil.Process()
    kap = float(os.environ.get("KAP_GB", "6"))
    while True:
        g = pr.memory_info().rss / 2**30
        _ZIRVE[0] = max(_ZIRVE[0], g)
        if g > kap:
            import traceback
            fr = sys._current_frames()[threading.main_thread().ident]
            print("RAM TAVANI ASILDI %.1f GB · " % g + " <- ".join(
                "%s:%d(%s)" % (os.path.basename(f.filename), f.lineno, f.name)
                for f in traceback.extract_stack(fr)[-9:]), flush=True)
            os._exit(3)
        time.sleep(0.5)
threading.Thread(target=_bekci, daemon=True).start()

t0 = time.time()
pk = os.path.join(tempfile.gettempdir(), "dolgu_gov_%s.pkl" % tarih)
if not os.path.exists(pk):
    r = subprocess.run([sys.executable, os.path.abspath(__file__), "--hazirla", tarih, pk])
    assert r.returncode == 0, "hazırlama süreci düştü"
sys.path.insert(0, "arac")
import dolgu, shapely
from shapely.geometry import mapping
from shapely.ops import unary_union
gov = [(k, shapely.from_wkb(w), a) for k, w, a in pickle.load(open(pk, "rb"))]
print("gövde:", len(gov), "hazırlık %.1f sn · ana süreç RSS %.2f GB" % (
    time.time() - t0, psutil.Process().memory_info().rss / 2**30), flush=True)
kara = dolgu._kara_yukle()
kh = dolgu.KaraIndeks(kara)
t1 = time.time()
parcalar, rapor = dolgu.kesit_dolgu(gov, kara, kh)
sure = time.time() - t1
sayac, alan = {}, {}
for p in parcalar:
    sayac[p["cins"]] = sayac.get(p["cins"], 0) + 1
    alan[p["cins"]] = alan.get(p["cins"], 0) + dolgu._km2(p["g"])
tum = unary_union([g for _, g, _a in gov])
ort = sum(dolgu._km2(p["g"].intersection(tum)) for p in parcalar)
h = dolgu.Havuz()
kay = [{"f": tarih, "t": "9999-12-31", "k": p["kim"], "c": p["cins"],
        "p": [h.ekle(x) for x in dolgu._parcalar(p["g"])]} for p in parcalar]
bayt = dolgu.js_yaz(os.path.join(tempfile.gettempdir(), "dolgu_tek_kesit.js"), kay, h)
cikis = {"tarih": tarih, "ufuk_gun": float(gun), "yaricap_km": dolgu.YARICAP_KM,
         "govde": len(gov), "parca": len(parcalar), "sure_sn": round(sure, 1),
         "cins_sayi": sayac, "cins_km2": {k: round(v) for k, v in alan.items()},
         "engellendi": len(rapor["engellendi"]), "yazilan_km2": round(rapor["yazilan_km2"]),
         "govde_km2": round(sum(dolgu._km2(g) for _, g, _a in gov)),
         "sn": {k: round(rapor[k], 1) for k in ("sn_kapanis", "sn_cekisme", "sn_cins")},
         "govdeyle_ortusen_km2": round(ort, 1), "js_bayt": bayt, "js_kayit": len(kay),
         "rss_zirve_gb": round(_ZIRVE[0], 2)}
cikis["g"] = [{"k": p["kim"], "c": p["cins"], "geo": mapping(p["g"])} for p in parcalar]
cikis["gov_geo"] = [{"k": k, "geo": mapping(g.simplify(0.02))} for k, g, _a in gov]
json.dump(cikis, open(cikti, "w"), ensure_ascii=False)
print({k: v for k, v in cikis.items() if k not in ("g", "gov_geo")}, flush=True)
