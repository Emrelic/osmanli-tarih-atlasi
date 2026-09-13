# -*- coding: utf-8 -*-
"""ARAC-MTR-DENIZASIRI-0914 — "petek denizi geçmiş mi" sınavı. SALT OKUMA.

Kullanım:
  py denetim/ARAC-MTR-DENIZASIRI-0914.py <gun> <katman> <yan_lat> <yan_lon> <tohum_lat> <tohum_lon> [--kutu la0 la1 lo0 lo1]
    katman   : OSMANLI | OSMANLI-tabi | <yabancı id>
    yan      : karşı yakada şüpheli boyanan nokta
    tohum    : boyamanın geldiği sanılan yakadaki bir nokta (bileşen sınavı için)

Soruları (0040/H-0002 şartındaki ÜÇ KAPI + maske):
  M  motor kara maskesinde (simplify 0,002) yan ile tohum AYNI bileşende mi?
     tam çözünürlüklü NE 10m'de aynı bileşende mi?  (ikisi ayrışırsa BOĞAZ SADELEŞTİRMEDE KAPANMIŞ)
  1  yanı kaplayan PETEK kimin (petek_govde.js), tohumu nerede, o gün sahibi kim
  2  o petek parçasının alanı KV_MIN_KM2 (200) altında mı (ızgara karar vermez)
  3  tohum→parça düz hattı motor karasında mı (":2471 kesin geometri — dokunma")
  4  yan bileşendeki o gün sahnede yerleşimler: sahibi, peteğinin km²'si, yana mesafe
"""
import sys, os, json, importlib.util, argparse
from shapely.geometry import Point, LineString, box
from shapely.ops import unary_union

_s = importlib.util.spec_from_file_location("mtr", os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-MTR-ORTAK-0914.py"))
M = importlib.util.module_from_spec(_s); _s.loader.exec_module(M)


def bilesen(geo, p):
    for q in M.parcalar(geo):
        if q.buffer(1e-9).contains(p):
            return q
    return None


def olc(gun, katman, ylat, ylon, tlat, tlon, kutu=None, etiket=""):
    Y = M.yerler()
    P, T = Point(ylon, ylat), Point(tlon, tlat)
    if kutu is None:
        la0, la1 = min(ylat, tlat) - 0.6, max(ylat, tlat) + 0.6
        lo0, lo1 = min(ylon, tlon) - 0.6, max(ylon, tlon) + 0.6
    else:
        la0, la1, lo0, lo1 = kutu
    K = box(lo0, la0, lo1, la1)
    R = {"etiket": etiket, "gun": gun, "katman": katman, "yan": [ylat, ylon], "tohum": [tlat, tlon]}
    kat = M.sahipler(gun, K)
    R["yani_kaplayan_katman"] = [k for k, g in kat.items() if g.contains(P)]
    g = kat.get(katman)
    if g is not None:
        pr = bilesen(g, P)
        if pr is not None:
            ic = [(Y[i]["ad"], M.sahip(Y[i], gun)) for i in range(len(Y)) if pr.contains(Point(Y[i]["lon"], Y[i]["lat"]))]
            R["yandaki_govde_parcasi"] = {"km2": round(M.km2(pr)), "tohum_da_icinde": pr.contains(T),
                                          "icindeki_yerlesim": ic[:10]}
    # M — maske
    Kmot = M.kara(K)
    Ktam = M.ne_kara_tam(K)
    bm_y, bm_t = bilesen(Kmot, P), bilesen(Kmot, T)
    bt_y, bt_t = bilesen(Ktam, P), bilesen(Ktam, T)
    R["maske"] = {
        "motor_kara(0.002)": {"yan_karada": bm_y is not None, "tohum_karada": bm_t is not None,
                              "ayni_bilesen": (bm_y is not None and bm_t is not None and bm_y.equals(bm_t))},
        "NE10m_tam": {"yan_karada": bt_y is not None, "tohum_karada": bt_t is not None,
                      "ayni_bilesen": (bt_y is not None and bt_t is not None and bt_y.equals(bt_t))},
    }
    # 1-3 — yanı kaplayan petek
    pix = M.kutudaki_petekler(K)
    kap = [i for i in pix if M.petek(i).contains(P)]
    R["yani_kaplayan_petek"] = []
    for i in kap:
        y = Y[i]; sp = Point(y["lon"], y["lat"])
        pp = bilesen(M.petek(i), P)
        hat = LineString([sp, pp.representative_point()]) if pp is not None else None
        R["yani_kaplayan_petek"].append({
            "tohum": y["ad"], "tohum_latlon": [y["lat"], y["lon"]],
            "gun_sahibi": M.sahip(y, gun), "sahnede": M.sahnede(y, gun),
            "petek_toplam_km2": round(M.km2(M.petek(i))),
            "petek_parca_sayisi": len(M.parcalar(M.petek(i))),
            "yandaki_parca_km2": round(M.km2(pp)) if pp is not None else None,
            "kapi2_KV_MIN_altinda(<200)": (M.km2(pp) < 200.0) if pp is not None else None,
            "kapi3_duz_hat_motor_karasinda": bool(hat is not None and Kmot.buffer(1e-9).contains(hat)),
            "tohum_yan_ayni_motor_bileseni": bool(bm_y is not None and bm_y.buffer(1e-9).contains(sp)),
            "tohum_yan_ayni_NE_tam_bileseni": bool(bt_y is not None and bt_y.buffer(1e-9).contains(sp)),
            "tohum_yana_km": round(M.km(y["lat"], y["lon"], ylat, ylon), 1),
        })
    # 4 — yan bileşendeki yerleşimler
    L = []
    if bt_y is not None:
        for i in range(len(Y)):
            y = Y[i]; sp = Point(y["lon"], y["lat"])
            if not K.contains(sp):
                continue
            if bt_y.buffer(0.01).contains(sp):
                L.append({"ad": y["ad"], "sahnede": M.sahnede(y, gun), "sahip": M.sahip(y, gun),
                          "yana_km": round(M.km(y["lat"], y["lon"], ylat, ylon), 1),
                          "petek_km2": round(M.km2(M.petek(i))), "kur": y.get("kur")})
    R["yan_bilesendeki_yerlesimler"] = sorted(L, key=lambda r: r["yana_km"])[:12]
    print(json.dumps(R, ensure_ascii=False, indent=1))
    return R


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("gun"); ap.add_argument("katman")
    for n in ("ylat", "ylon", "tlat", "tlon"):
        ap.add_argument(n, type=float)
    ap.add_argument("--kutu", nargs=4, type=float); ap.add_argument("--etiket", default="")
    a = ap.parse_args()
    olc(a.gun, a.katman, a.ylat, a.ylon, a.tlat, a.tlon, a.kutu, a.etiket)
