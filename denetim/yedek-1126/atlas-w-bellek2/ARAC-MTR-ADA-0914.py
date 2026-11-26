# -*- coding: utf-8 -*-
"""ARAC-MTR-ADA-0914 — ada gövdelerinin kıyıya oturma kalitesi. SALT OKUMA.

Kullanım:
  py denetim/ARAC-MTR-ADA-0914.py <gun> <lat0> <lat1> <lon0> <lon1> [--min 5] [--max 6000]

Her ada (NE 10m tam çözünürlük, kutunun TAMAMEN içinde, min..max km²) için:
  sahip          adayı en çok kaplayan boyalı katman
  denize_tasan   gövde ∖ ada        (adanın 0,15° tamponu içinde)  km²
  boyanmayan     ada ∖ gövde                                         km²
  sapma_km       gövde sınırı ile ada kıyısı arası Hausdorff (km, ≈)
  petek_uyumu    aynı ölçüler adanın PETEKLERİNİN birleşimi için (petek_govde.js)
  kose           gövde parçasının köşe sayısı / NE ada köşe sayısı
İki yönlü kıyas kendiliğinden: `seyrelt(tol 0,03°)` yalnız YABANCI havuzu
sadeleştirir (uret_petek.py:5333). Osmanlı adası iyi, yabancı adası kaba
çıkıyorsa kusur seyrelt'tedir; ikisi de kaba ise petek/kara maskesindedir.
"""
import sys, os, json, importlib.util, argparse, math
from shapely.geometry import box, Point
from shapely.ops import unary_union

_s = importlib.util.spec_from_file_location("mtr", os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-MTR-ORTAK-0914.py"))
M = importlib.util.module_from_spec(_s); _s.loader.exec_module(M)


def kose(g):
    n = 0
    for p in M.parcalar(g):
        n += len(p.exterior.coords) + sum(len(h.coords) for h in p.interiors)
    return n


def olc(gun, la0, la1, lo0, lo1, amin=5, amax=6000, etiket=""):
    K = box(lo0, la0, lo1, la1)
    Y = M.yerler()
    kat = M.sahipler(gun, K)
    Ktam = M.ne_kara_tam(K, tampon=0.0)
    kmlat = 111.2
    out = []
    pix = M.kutudaki_petekler(K)
    for ada in M.parcalar(Ktam):
        a = M.km2(ada)
        if not (amin <= a <= amax):
            continue
        if not K.buffer(-0.01).contains(ada):
            continue
        cev = ada.buffer(0.15)
        en, enk = None, 0.0
        for k, g in kat.items():
            x = M.km2(g.intersection(ada))
            if x > enk:
                en, enk = k, x
        if en is None:
            out.append({"ada_km2": round(a, 1), "sahip": None, "temsil": [round(ada.representative_point().y, 3), round(ada.representative_point().x, 3)]})
            continue
        gv = kat[en].intersection(cev)
        pet = unary_union([M.petek(i) for i in pix if M.petek(i).intersects(ada)]).intersection(cev)
        coslat = math.cos(math.radians(ada.centroid.y))
        def sap(g):
            if g.is_empty:
                return None
            return round(g.boundary.hausdorff_distance(ada.boundary) * kmlat * (0.5 + 0.5 * coslat), 2)
        adaY = [Y[i]["ad"] for i in range(len(Y)) if ada.buffer(0.02).contains(Point(Y[i]["lon"], Y[i]["lat"]))]
        out.append({
            "ada_km2": round(a, 1), "yerlesim": adaY[:4], "sahip": en,
            "temsil": [round(ada.representative_point().y, 3), round(ada.representative_point().x, 3)],
            "govde": {"denize_tasan_km2": round(M.km2(gv.difference(ada)), 1),
                      "boyanmayan_km2": round(M.km2(ada.difference(gv)), 1),
                      "boyanmayan_yuzde": round(100 * M.km2(ada.difference(gv)) / a, 1),
                      "sapma_km": sap(gv), "kose": kose(gv)},
            "petek": {"denize_tasan_km2": round(M.km2(pet.difference(ada)), 1),
                      "boyanmayan_km2": round(M.km2(ada.difference(pet)), 1),
                      "sapma_km": sap(pet), "kose": kose(pet)},
            "ada_kose_NE": kose(ada),
        })
    out.sort(key=lambda r: -r["ada_km2"])
    R = {"etiket": etiket, "gun": gun, "kutu": [la0, la1, lo0, lo1], "ada": out}
    print(json.dumps(R, ensure_ascii=False, indent=1))
    return R


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("gun")
    for n in ("la0", "la1", "lo0", "lo1"):
        ap.add_argument(n, type=float)
    ap.add_argument("--min", type=float, default=5); ap.add_argument("--max", type=float, default=6000)
    ap.add_argument("--etiket", default="")
    a = ap.parse_args()
    olc(a.gun, a.la0, a.la1, a.lo0, a.lo1, a.min, a.max, a.etiket)
