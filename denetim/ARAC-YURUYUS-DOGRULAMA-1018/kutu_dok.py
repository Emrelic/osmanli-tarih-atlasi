"""Motoru KUTU modunda (tam kosu DEGIL) Dijkstra + bant konturu asamasina kadar kosturur,
ham alanlari npz/pkl olarak scratchpad'e doker. Kod degistirmez; yalniz mevcut aleti
(denetim/ARAC-B-GORUNUM-UFUK-0072.py::_motor_kesiti) kullanir.
Kullanim: py -X utf8 kutu_dok.py <ad> <lon0,lat0,lon1,lat1>"""
import importlib.util, os, sys, time, pickle
import numpy as np

KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SP = os.environ.get("YDOG_DIZIN") or os.path.join(__import__("tempfile").gettempdir(), "ydog1018")
os.makedirs(SP, exist_ok=True)
BETIK_DIZIN = os.path.dirname(os.path.abspath(__file__))
ad, kutu = sys.argv[1], sys.argv[2]

spec = importlib.util.spec_from_file_location(
    "ufuk_alet", os.path.join(KOK, "denetim", "ARAC-B-GORUNUM-UFUK-0072.py"))
alet = importlib.util.module_from_spec(spec)
sys.argv = ["x"]
spec.loader.exec_module(alet)

os.chdir(KOK)
os.environ["MOTOR_YURUYUS"] = "1"
os.environ["MOTOR_YURUYUS_SAAT"] = "40"
os.environ["MOTOR_UFUK_BANT"] = "40,56,80"
os.environ["MOTOR_COL_UFUK_SAAT"] = "0"
os.environ["MOTOR_EGIM_AB_KAPALI"] = "1"
os.environ["MOTOR_NEHIR_AB_KAPALI"] = "1"
os.environ["MOTOR_ONBELLEK_DIZIN"] = os.path.join(SP, "onbellek_" + ad)
os.environ.pop("MOTOR_YURUYUS_16", None)

src, sha = alet._motor_kesiti(kutu)
NS = {"__name__": "__main__", "__file__": alet.ANA_MOTOR}
t0 = time.time()
exec(compile(src, alet.ANA_MOTOR + " [DOKUM]", "exec"), NS)
print("kosu sn", round(time.time() - t0, 1), "motor sha", sha, flush=True)

import shapely
g = {k: NS[k] for k in ("_kvx0", "_kvy0", "_kvnx", "_kvny")}
nx, ny = g["_kvnx"], g["_kvny"]
D = {
    "grid": g,
    "uzak": np.array(NS["_kvuzak"], dtype=np.float32).reshape(ny, nx),
    "sahip": np.array(NS["_kvsahip"], dtype=np.int32).reshape(ny, nx),
    "kara": (np.frombuffer(bytes(NS["_kvkara"]), dtype=np.uint8) > 0).reshape(ny, nx),
    "surt": (np.array(NS["_kvsurt"], dtype=np.float32).reshape(ny, nx)
             if NS["_kvsurt"] is not None else None),
    "tohum": {k: list(v) for k, v in NS["_kvtohum"].items()},
    "yerler": [(y["ad"], y["lon"], y["lat"]) for y in NS["YERLER"]],
    "yer_var": [(y.get("kur"), y.get("bit")) for y in NS["YERLER"]],
    "yer_donem": [([(p["f"], p["t"]) for p in (y.get("d") or [])] + [(p["f"], p["t"]) for p in (y.get("v") or [])], [(p.get("d"), p["f"], p["t"]) for p in (y.get("s") or [])]) for y in NS["YERLER"]],
    "nehir": NS["_KVNEHIR"],
    "kvsu": set(NS["_KVSU"]) if NS.get("_KVSU") else set(),
    "yon": NS["_KV_YON"], "KVDY": NS["_KVDY"],
    "NEHIR_KM_SAAT": NS["NEHIR_KM_SAAT"],
    "bant_uzak": {b: [shapely.to_wkb(p) for p in v[0]] for b, v in NS["_YR_BANT_UZAK"].items()},
    "yr_uzak": [shapely.to_wkb(p) for p in NS["_YR_UZAK"]],
    "kutu": kutu, "sha": sha,
}
pickle.dump(D, open(os.path.join(SP, "dok_%s.pkl" % ad), "wb"), protocol=4)
print("yazildi dok_%s.pkl" % ad, "ny,nx", ny, nx, "kara", int(D["kara"].sum()),
      "tohum", len(D["tohum"]), "bant", {b: len(v) for b, v in D["bant_uzak"].items()}, flush=True)
