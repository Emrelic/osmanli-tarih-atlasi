# -*- coding: utf-8 -*-
"""ARAC-MTR-SERBEST-0914 — "yıldız/kirpi" ışınsal çıkıntı sınavı. SALT OKUMA.

Kullanım:
  py denetim/ARAC-MTR-SERBEST-0914.py <gun> <lat0> <lat1> <lon0> <lon1> <zoom> [--etiket X]

Hipotez (ölçümden ÖNCE yazıldı, OLCUM-MOTOR-0914.md §öngörü):
  Işınsal çıkıntılar bir gövde geometrisi değil, SERBEST KENAR çiziminin
  (js/app.js:1676 `serbest-hale` · `serbest-cekirdek`) izidir: genişliği
  u·2^z/67,8 px (tavan 80 px), `line-blur` ~0,85·genişlik, `line-join: bevel`.
  Parça boyu genişliğin yarısından KISA ve dönüş açısı büyük olan köşelerde
  her kısa parçanın dikdörtgeni dışa taşar ⇒ ışın. Motor SERBEST hattını
  gövde sınırı ∩ tampon(0,02°, sahipsiz petekler) olarak kuruyor
  (uret_petek.py:3402) — sahipsiz bir peteğe komşu KIYI da bu tampona girer.

Ölçtükleri (kutu içindeki, o günün `sb` hatları):
  hat_n · uzunluk_km · u (km, dağılım) · hale_px (zoom'da)
  isin_adayi: köşe dönüşü ≥ 60° VE komşu iki parçadan kısası < hale_px/2
  kiyi_payi: hat uzunluğunun motor kıyısına (kara sınırı) 1 km'den yakın yüzdesi
"""
import sys, os, json, importlib.util, argparse, math
from shapely.geometry import box, LineString, Point
from shapely.ops import unary_union

_s = importlib.util.spec_from_file_location("mtr", os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-MTR-ORTAK-0914.py"))
M = importlib.util.module_from_spec(_s); _s.loader.exec_module(M)

TAVAN_PX, K_HALE = 80.0, 1.0


def px(lon, lat, z):
    s = 256.0 * 2 ** z
    x = (lon + 180.0) / 360.0 * s
    y = (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * s
    return x, y


def olc(gun, la0, la1, lo0, lo1, z, etiket=""):
    K = box(lo0, la0, lo1, la1)
    d = M.donem(gun)
    R = {"etiket": etiket, "gun": gun, "kutu": [la0, la1, lo0, lo1], "zoom": z}
    if d is None or not d.get("sb"):
        R["hat_n"] = 0
        print(json.dumps(R, ensure_ascii=False)); return R
    kara = M.kara(K)
    kiyi = kara.boundary
    hatlar, us, uz, kiyi_uz = [], [], 0.0, 0.0
    aday, kose_n = 0, 0
    ornek = []
    for j in d["sb"]:
        cs = M.C["SERBEST"][j]
        L = LineString(cs)
        if not L.intersects(K):
            continue
        u = M.C["SERBEST_U"][j] or 60
        hale = min(u * K_HALE * 2 ** z / 67.8, TAVAN_PX)
        hatlar.append(j); us.append(u)
        # uzunluk ve kıyı payı (km)
        for a, b in zip(cs[:-1], cs[1:]):
            seg = LineString([a, b])
            if not seg.intersects(K):
                continue
            skm = M.km(a[1], a[0], b[1], b[0])
            uz += skm
            if kiyi.distance(seg.centroid) < 0.009:
                kiyi_uz += skm
        # ışın adayı
        P = [px(x, y, z) for x, y in cs]
        for i in range(1, len(P) - 1):
            if not K.contains(Point(cs[i])):
                continue
            kose_n += 1
            v1 = (P[i][0] - P[i-1][0], P[i][1] - P[i-1][1])
            v2 = (P[i+1][0] - P[i][0], P[i+1][1] - P[i][1])
            l1, l2 = math.hypot(*v1), math.hypot(*v2)
            if l1 == 0 or l2 == 0:
                continue
            c = max(-1, min(1, (v1[0]*v2[0] + v1[1]*v2[1]) / (l1*l2)))
            don = math.degrees(math.acos(c))
            if don >= 60 and min(l1, l2) < hale / 2:
                aday += 1
                if len(ornek) < 6:
                    ornek.append({"latlon": [round(cs[i][1], 3), round(cs[i][0], 3)], "donus": round(don),
                                  "kisa_parca_px": round(min(l1, l2), 1), "hale_px": round(hale, 1), "u_km": u})
    us.sort()
    R.update({"hat_n": len(hatlar), "uzunluk_km": round(uz), "kiyi_payi_yuzde": round(100 * kiyi_uz / uz, 1) if uz else None,
              "u_km_min_med_max": [us[0], us[len(us)//2], us[-1]] if us else None,
              "kose_n": kose_n, "isin_adayi": aday, "isin_orani_yuzde": round(100 * aday / kose_n, 1) if kose_n else None,
              "ornek": ornek})
    print(json.dumps(R, ensure_ascii=False, indent=1))
    return R


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("gun")
    for n in ("la0", "la1", "lo0", "lo1", "z"):
        ap.add_argument(n, type=float)
    ap.add_argument("--etiket", default="")
    a = ap.parse_args()
    olc(a.gun, a.la0, a.la1, a.lo0, a.lo1, a.z, a.etiket)
