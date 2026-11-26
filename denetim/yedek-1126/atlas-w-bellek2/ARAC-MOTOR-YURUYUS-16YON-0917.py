# -*- coding: utf-8 -*-
"""ARAC-MOTOR-YURUYUS-16YON-0917 — 8 komşu mu 16 komşu mu? (koşusuz ölçüm)

Aynı kutuda, eğimsiz ve nehirsiz (DÜZ) Dijkstra iki kez koşar: 8 ve 16 komşu.
Her hücrenin ızgara mesafesi, SAHİBİ olan tohuma gerçek büyük daire mesafesiyle
(girdi.km) karşılaştırılır. Sapma = ızgara / gerçek − 1 (≥ 0 beklenir).
Ayrıca iki koşunun süresi ve sahipliğin kaç hücrede değiştiği.

🔴 AYNI KOD: motor dilimi WORKTREE'den (motor-yuruyus dalı) exec edilir;
`YURUYUS_16` bayrağı dilimden ÖNCE ad alanına konur.
Kullanım: py denetim/ARAC-MOTOR-YURUYUS-16YON-0917.py --kutu=55,45,75,55 --ad bozkir
"""
import io, json, math, os, re, sys, time, argparse
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", line_buffering=True)
try:
    import ctypes
    ctypes.windll.kernel32.SetPriorityClass(ctypes.windll.kernel32.GetCurrentProcess(), 0x4000)
except Exception:
    pass
import numpy as np
import shapely
from shapely.geometry import (shape, box, Polygon, MultiPolygon, Point, MultiPoint,
                              LineString, MultiLineString, GeometryCollection)
from shapely.ops import unary_union
from shapely.strtree import STRtree
from shapely.prepared import prep
import girdi

ap = argparse.ArgumentParser()
ap.add_argument("--kutu", required=True)
ap.add_argument("--ad", required=True)
ap.add_argument("--motor", default=r"C:\atlas-yuruyus\arac\uret_petek.py")
A = ap.parse_args()
KAYNAK = io.open(A.motor, encoding="utf-8").read().replace("\r\n", "\n")


def dilim(bas, son):
    i = KAYNAK.find(bas); j = KAYNAK.find(son, i + 1)
    if i < 0 or j < 0:
        raise SystemExit(f"İŞARET BULUNAMADI: {bas[:40]!r}")
    return KAYNAK[i:j]


def kur(yon16):
    NS = dict(json=json, os=os, sys=sys, io=io, math=math, re=re, time=time,
              shapely=shapely, shape=shape, box=box, Polygon=Polygon,
              MultiPolygon=MultiPolygon, Point=Point, MultiPoint=MultiPoint,
              LineString=LineString, MultiLineString=MultiLineString,
              GeometryCollection=GeometryCollection, unary_union=unary_union,
              STRtree=STRtree, prep=prep, girdi=girdi, asama=lambda *a: None, KOK=KOK,
              BASEMAPS=os.path.join(KOK, "veri-kaynak"), __name__="dilim",
              YURUYUS_16=yon16)
    NS["BOLGE"] = box(*[float(v) for v in A.kutu.split(",")])
    exec(dilim("EGIM_CARPANI = 0.005\n", "# ---------------- Nehir yatakları"), NS)
    exec(dilim("# ---------------- Nehir yatakları", "# ---------------- Dağ sırtları"), NS)
    NS["YERLER"] = girdi.yukle(sessiz=True)
    exec(dilim("KV_ADIM = 0.05 ", "_kvuzak, _kvsahip = _kv_dijkstra(_kvsurt, _KVNEHIR)"), NS)
    return NS


SON = {"kutu": A.kutu, "motor": A.motor}
sonuc = {}
for yon16 in (False, True):
    NS = kur(yon16)
    t = time.time()
    u, s = NS["_kv_dijkstra"](None, None)
    sure = time.time() - t
    nx, ny, KV = NS["_kvnx"], NS["_kvny"], NS["KV_ADIM"]
    x0, y0 = NS["_kvx0"], NS["_kvy0"]
    u = np.array(u, dtype=np.float64).reshape(ny, nx)
    s = np.array(s, dtype=np.int64).reshape(ny, nx)
    Y = NS["YERLER"]
    jj, ii = np.nonzero(s >= 0)
    lat = y0 + (jj + 0.5) * KV
    lon = x0 + (ii + 0.5) * KV
    slat = np.array([Y[k]["lat"] for k in s[jj, ii]])
    slon = np.array([Y[k]["lon"] for k in s[jj, ii]])
    # girdi.km ile aynı formül (haversine) — vektörel
    p1, p2 = np.radians(lat), np.radians(slat)
    dp, dl = p2 - p1, np.radians(slon - lon)
    h = np.sin(dp / 2) ** 2 + np.cos(p1) * np.cos(p2) * np.sin(dl / 2) ** 2
    gercek = 2 * 6371.0088 * np.arcsin(np.sqrt(h))
    ok = gercek > 30.0                     # tohum dibindeki kaydırma/yuvarlama gürültüsü dışarı
    sap = u[jj, ii][ok] / gercek[ok] - 1.0
    ad = "16" if yon16 else "8"
    sonuc[ad] = {"sure_sn": round(sure, 2), "hucre": int(ok.sum()),
                 "sapma_medyan_yuzde": round(100 * float(np.median(sap)), 2),
                 "sapma_p95_yuzde": round(100 * float(np.percentile(sap, 95)), 2),
                 "sapma_maks_yuzde": round(100 * float(sap.max()), 2)}
    sonuc[ad + "_sahip"] = s
    print(ad, "komşu:", sonuc[ad])
SON["8"], SON["16"] = sonuc["8"], sonuc["16"]
SON["sahibi_degisen_hucre_yuzde"] = round(
    100.0 * float(((sonuc["8_sahip"] != sonuc["16_sahip"]) & (sonuc["8_sahip"] >= 0)).sum())
    / max(1, int((sonuc["8_sahip"] >= 0).sum())), 2)
SON["sure_orani"] = round(SON["16"]["sure_sn"] / max(SON["8"]["sure_sn"], 1e-9), 2)
print("sahibi değişen hücre %", SON["sahibi_degisen_hucre_yuzde"], "· süre oranı", SON["sure_orani"])
cikti = os.path.join(KOK, "denetim", "ARAC-MOTOR-YURUYUS-16YON-0917.json")
H = json.load(io.open(cikti, encoding="utf-8")) if os.path.exists(cikti) else {}
H[A.ad] = SON
json.dump(H, io.open(cikti, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("YAZILDI", cikti)
