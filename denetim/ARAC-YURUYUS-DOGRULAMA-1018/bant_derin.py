"""Motoru KUTU modunda bant ciktisina kadar (bant-sonrasi kesim) kosturur; PUAN kapisi acik/kapali A/B.
Kullanim: py -X utf8 bant_derin.py <ad> <lon0,lat0,lon1,lat1> <puan_kapali 0|1> <ic kutu lon0,lat0,lon1,lat1> <tarih>
Cikti: scratchpad/bantderin_<ad>_<puan>.json (bant basina ic kutuda sahipli kara km2)."""
import importlib.util, json, math, os, sys, time
import numpy as np
import shapely
from shapely.geometry import box, Polygon
from shapely.ops import unary_union

KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SP = os.environ.get("YDOG_DIZIN") or os.path.join(__import__("tempfile").gettempdir(), "ydog1018")
os.makedirs(SP, exist_ok=True)
BETIK_DIZIN = os.path.dirname(os.path.abspath(__file__))
ad, kutu, puan, ickutu, tarih = sys.argv[1:6]
spec = importlib.util.spec_from_file_location("ufuk_alet", os.path.join(KOK, "denetim", "ARAC-B-GORUNUM-UFUK-0072.py"))
alet = importlib.util.module_from_spec(spec)
sys.argv = ["x"]
spec.loader.exec_module(alet)
os.chdir(KOK)
os.environ.update({"MOTOR_YURUYUS": "1", "MOTOR_YURUYUS_SAAT": "40", "MOTOR_UFUK_BANT": "40,56,80",
                   "MOTOR_COL_UFUK_SAAT": "0", "MOTOR_EGIM_AB_KAPALI": "1", "MOTOR_NEHIR_AB_KAPALI": "1",
                   "MOTOR_PUAN_KAPALI": puan, "MOTOR_ONBELLEK_DIZIN": os.path.join(SP, "onb_derin_%s_%s" % (ad, puan))})
os.environ.pop("MOTOR_YURUYUS_16", None)
src, sha = alet._motor_kesiti(kutu, "bant-sonrasi")
NS = {"__name__": "__main__", "__file__": alet.ANA_MOTOR}
t0 = time.time()
exec(compile(src, alet.ANA_MOTOR + " [BANT-DERIN]", "exec"), NS)
sure = time.time() - t0
print("kosu sn", round(sure), flush=True)
kayit, havuz, parca = NS["_bant_kayit"], NS["_bant_havuz"], NS["_bant_parca"]
ib = tuple(float(x) for x in ickutu.split(","))
bx = box(*ib)
KMD = 6371.0088 * math.pi / 180
lon0 = (ib[0] + ib[2]) / 2


def sinuz(x):
    def f(c):
        return np.column_stack([(c[:, 0] - lon0) * np.cos(np.radians(c[:, 1])) * KMD, c[:, 1] * KMD])
    return shapely.transform(x, f)


def gecerli(x):
    return x if x.is_valid else shapely.make_valid(x)


def poligon(pi):
    hs = [np.array(havuz[h]) for h in parca[pi]]
    return gecerli(Polygon(hs[0], hs[1:]))


kara = gecerli(alet.shapely.from_wkb(shapely.to_wkb(NS["KARA"])).intersection(bx)) if False else gecerli(NS["KARA"].intersection(bx))
kara_s = sinuz(kara)
out = {"ad": ad, "kutu": kutu, "ic": ib, "tarih": tarih, "puan_kapali": puan, "sure_sn": round(sure), "sha": sha,
       "kara_km2": round(kara_s.area), "bant": {}}
for b in kayit:
    gl = []
    nrec = 0
    for r in b["dnm"]:
        if r["f"] <= tarih < r["t"]:
            nrec += 1
            gg = gecerli(unary_union([poligon(p) for p in r["g"]])).intersection(bx)
            if not gg.is_empty:
                gl.append(gg)
    u = gecerli(sinuz(gecerli(unary_union(gl)))) if gl else Polygon()
    try:
        sah = gecerli(kara_s).intersection(u).area
    except Exception:
        sah = gecerli(kara_s.buffer(0)).intersection(gecerli(u.buffer(0))).area
    out["bant"][b["ad"]] = {"aktif_kayit": nrec, "sahipli_km2": round(sah), "oran": round(sah / kara_s.area, 4),
                            "toplam_kayit": len(b["dnm"])}
    print(b["ad"], out["bant"][b["ad"]], flush=True)
json.dump(out, open(os.path.join(SP, "bantderin_%s_%s.json" % (ad, puan)), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("BITTI")
