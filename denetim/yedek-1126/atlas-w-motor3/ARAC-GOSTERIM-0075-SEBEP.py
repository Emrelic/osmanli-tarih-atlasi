# -*- coding: utf-8 -*-
"""GOSTERIM-0075 / H-0024 — çakışan alan KİMİN peteğine ait? (SEBEP sınıflandırması)

Petekler bir bölümlemedir (Voronoi): bir gün, bir toprak parçası TEK yerleşimin peteğindedir.
Bir toprak iki gövdede birden görünüyorsa gövdelerden EN AZ BİRİ, kendi peteğinin DIŞINA taşmıştır.
Bu alet çakışma poligonunu 0,02° ızgarayla örnekler; her örnek için o gün VAR olan en yakın
yerleşimi (Voronoi'nin tanımı) ve onun sahibini bulur:

  A-PETEĞİ  : en yakın nokta A'nın        → B gövdesi A'nın toprağına taşmış
  B-PETEĞİ  : en yakın nokta B'nin        → A gövdesi B'nin toprağına taşmış
  ÜÇÜNCÜ    : en yakın nokta C'nin (C≠A,B)→ İKİSİ de kendi peteği dışında (C'nin toprağı)
  SAHİPSİZ  : en yakın nokta o gün sahipsiz/devletsiz → serbest alan iki gövdeye birden dağılmış

Ayrıca en yakın noktaya UZAKLIK (km) medyanı. Yaklaşıklık: kıyı/nehir yaslaması ve ufuk tavanı
YOK SAYILIR — sınıflandırma "hangi tarafa yakın"dır, sınırın kendisi değil.
SALT OKUR. Girdi: HEAD kopyası + arac/girdi.py (3921 nokta).
  py denetim/ARAC-GOSTERIM-0075-SEBEP.py <KOK> <gun> [<gun> ...]
Çıktı: denetim/GOSTERIM-0075-SEBEP.json
"""
import io, os, sys, json, time, math
import numpy as np
from collections import Counter
from shapely.geometry import Polygon, Point
from shapely.ops import unary_union
from shapely.strtree import STRtree
from shapely import make_valid, points as sh_points, contains_xy

KOK = sys.argv[1]; GUNLER = sys.argv[2:]
ARAC = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac")
sys.path.insert(0, ARAC)
import girdi
CIKTI = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "denetim", "GOSTERIM-0075-SEBEP.json")

def satir_json(yol, degisken):
    for satir in io.open(yol, encoding="utf-8"):
        if satir.startswith("window." + degisken + " "):
            i = satir.index("=") + 1
            return json.loads(satir[i:].rstrip().rstrip(";\n").rstrip(";"))
    raise KeyError(degisken)

t0 = time.time()
DON = os.path.join(KOK, "data", "donemler.js"); DEV = os.path.join(KOK, "data", "devletler_harita.js")
PARCALAR = satir_json(DON, "PARCALAR"); PARCA_HALKA = satir_json(DON, "PARCA_HALKA"); DONEMLER = satir_json(DON, "DONEMLER")
D_PARCALAR = satir_json(DEV, "DEVLET_PARCALAR"); D_PARCA_HALKA = satir_json(DEV, "DEVLET_PARCA_HALKA")
DEVLET_HARITA = satir_json(DEV, "DEVLET_HARITA")
YERLER = girdi.yukle(sessiz=True)
print("ayrıştırma %.1f sn" % (time.time() - t0), flush=True)

def poligon(halka, havuz):
    dis = havuz[halka[0]]
    if len(dis) < 4: return None
    ic = [havuz[i] for i in halka[1:] if len(havuz[i]) >= 4]
    try:
        p = Polygon(dis, ic)
        if not p.is_valid: p = make_valid(p)
        return p if not p.is_empty else None
    except Exception:
        return None

def birlestir(ps):
    try: return unary_union(ps)
    except Exception: return unary_union([make_valid(p) for p in ps])

def gecerli(f, t, g): return (not f or f <= g) and (not t or g < t)

def govdeler(gun):
    out = {}
    for d in DONEMLER:
        if not gecerli(d.get("f"), d.get("t"), gun): continue
        for alan, kim in (("o", "OSM-dogrudan"), ("v", "OSM-tabi")):
            idx = []
            for e in d.get(alan) or []:
                if isinstance(e, int): idx.append(e)
                elif isinstance(e, dict): idx.extend(e.get("g") or [])
            ps = [poligon(PARCA_HALKA[i], PARCALAR) for i in idx if i < len(PARCA_HALKA)]
            ps = [p for p in ps if p is not None]
            if ps: out[kim] = birlestir(ps)
        break
    for dv in DEVLET_HARITA:
        for d in dv.get("dnm") or []:
            if not gecerli(d.get("f"), d.get("t"), gun): continue
            ps = [poligon(D_PARCA_HALKA[i], D_PARCALAR) for i in (d.get("g") or []) if i < len(D_PARCA_HALKA)]
            ps = [p for p in ps if p is not None]
            if ps: out[dv["id"]] = birlestir(ps)
            break
    return out

def nokta_sahibi(y, g):
    """o gün yerleşimin sahibi — gövde adlandırmasıyla AYNI: OSM-dogrudan / OSM-tabi / <s:d> / None (sahipsiz)."""
    if y.get("kur") and y["kur"] > g: return "YOK"          # henüz kurulmadı
    if y.get("bit") and y["bit"] <= g: return "YOK"         # yok oldu
    for x in y["d"]:
        if x["f"] <= g < x["t"]: return "OSM-dogrudan"
    for x in y["v"]:
        if x["f"] <= g < x["t"]: return "OSM-tabi"
    for x in y["s"]:
        if x["f"] <= g < x["t"]: return x["d"]
    return "SAHIPSIZ"

# yalnız BU kutularla kesişen çiftler (gün → kutular): şartnamedeki görsellerin bulunduğu yerler
HEDEF = {"1832-03-01": [(7.23, 36.48, 8.38, 37.20)],
         "1837-10-13": [(2.89, 34.42, 8.68, 37.24)],
         "1847-05-31": [(45.83, 27.14, 51.23, 31.66)],
         "1834-01-01": [(20.08, 42.67, 30.01, 48.29)]}

def cift_isle(gun, B):
    from shapely.geometry import box as _box
    hedef = [_box(*k) for k in HEDEF.get(gun, [])]
    sahip =[nokta_sahibi(y, gun) for y in YERLER]
    var = [i for i, s in enumerate(sahip) if s != "YOK"]
    lat = np.array([YERLER[i]["lat"] for i in var]); lon = np.array([YERLER[i]["lon"] for i in var])
    etiket = [sahip[i] for i in var]
    kimlik = sorted(B)
    sonuc = {}
    for i, a in enumerate(kimlik):
        for b in kimlik[i + 1:]:
            try: kes = B[a].intersection(B[b])
            except Exception: continue
            if kes.is_empty: continue
            la = math.cos(math.radians(kes.centroid.y))
            ar = kes.area * 111.32 ** 2 * la
            if ar < 200: continue      # 200 km² altı gürültü — bu ölçüm için
            if hedef and not any(kes.intersects(h) for h in hedef): continue
            x0, y0, x1, y1 = kes.bounds
            adim = 0.02
            xs = np.arange(x0 + adim / 2, x1, adim); ys = np.arange(y0 + adim / 2, y1, adim)
            gx, gy = np.meshgrid(xs, ys); gx = gx.ravel(); gy = gy.ravel()
            ic = contains_xy(kes, gx, gy)
            gx, gy = gx[ic], gy[ic]
            if len(gx) == 0: continue
            if len(gx) > 4000:                       # bellek: en fazla 4000 örnek (düzgün seyreltme)
                adimsay = int(math.ceil(len(gx) / 4000.0)); gx, gy = gx[::adimsay], gy[::adimsay]
            # enlem düzeltmeli uzaklık (km)
            k = np.cos(np.radians(gy))[:, None]
            dx = (gx[:, None] - lon[None, :]) * 111.32 * k
            dy = (gy[:, None] - lat[None, :]) * 110.57
            d2 = dx * dx + dy * dy
            en = d2.argmin(axis=1); mesafe = np.sqrt(d2[np.arange(len(gx)), en])
            sayim = Counter(etiket[j] for j in en)
            toplam = sum(sayim.values())
            def pay(ad): return round(100 * sayim.get(ad, 0) / toplam, 1)
            diger = {k2: round(100 * v / toplam, 1) for k2, v in sayim.items() if k2 not in (a, b)}
            # A'nın / B'nin EN YAKIN kendi noktasına uzaklık (medyan)
            def en_yakin_sahip(ad):
                m = np.array([e == ad for e in etiket])
                if not m.any(): return None
                dd = np.sqrt(np.min(d2[:, m], axis=1))
                return round(float(np.median(dd)), 1)
            sonuc["%s + %s" % (a, b)] = {
                "km2": round(ar), "merkez": [round(kes.centroid.y, 3), round(kes.centroid.x, 3)], "ornek": int(toplam),
                "pay_" + a + "_petegi": pay(a), "pay_" + b + "_petegi": pay(b),
                "pay_ucuncu_veya_sahipsiz": diger,
                "en_yakin_nokta_uzaklik_medyan_km": round(float(np.median(mesafe)), 1),
                "medyan_km_A_kendi_noktasina": en_yakin_sahip(a),
                "medyan_km_B_kendi_noktasina": en_yakin_sahip(b),
                "A_noktasi": sum(1 for e in etiket if e == a), "B_noktasi": sum(1 for e in etiket if e == b)}
    return sonuc

SON = {}
for gun in GUNLER:
    B = govdeler(gun)
    SON[gun] = cift_isle(gun, B)
    print("\n== %s · %d gövde" % (gun, len(B)), flush=True)
    for k, v in sorted(SON[gun].items(), key=lambda x: -x[1]["km2"])[:12]:
        print("  %-46s %9s km² @%s  %s" % (k[:46], "{:,}".format(v["km2"]), v["merkez"],
              {kk: vv for kk, vv in v.items() if kk.startswith("pay_") or kk.startswith("en_") or kk.startswith("medyan") or kk.endswith("noktasi")}), flush=True)
io.open(CIKTI, "w", encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("\nyazıldı:", CIKTI, "· %.1f sn" % (time.time() - t0))
