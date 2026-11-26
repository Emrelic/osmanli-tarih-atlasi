# -*- coding: utf-8 -*-
"""Hucre bazinda SAHIPSIZ KARA olcumu (petek mantigi: hucrenin sahibi = o gun
VAR OLAN en yakin nokta). Uc sinif:
  C-UFUK   : gercek kara ama motor cizmiyor
  B-KAYIT  : motor ciziyor, hucrenin petek sahibi nokta o gun SAHIPSIZ
  OK       : sahipli
Ayrica ufuk kalibrasyonu: cizilen/cizilmeyen hucrelerin en yakin nokta km dagilimi.
Cikti: denetim/HARITA-DURUM-0074-SAHIPSIZ.json
"""
import json, io, os, sys
from shapely.geometry import shape, Point, box as _box
from shapely.ops import unary_union
from shapely.prepared import prep

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = [y for y in girdi.yukle(sessiz=True) if y.get("lat") is not None]

def pad(t):
    if not t: return ""
    p = str(t).split("-")
    return "%04d-%02d-%02d" % (int(p[0]), int(p[1]) if len(p) > 1 else 1,
                               int(p[2]) if len(p) > 2 else 1)

def var_mi(y, g):
    kur, bit = pad(y.get("kur") or ""), pad(y.get("bit") or "")
    if kur and kur > g: return False
    if bit and bit <= g: return False
    return True

def sahibi(y, g):
    for kat in ("d", "v", "s"):
        for p in y.get(kat) or []:
            f, t = pad(p.get("f", "")), pad(p.get("t", ""))
            if f and f > g: continue
            if t and t <= g: continue
            return (kat, p.get("d") or p.get("kid") or "OSMANLI")
    return None

mk = json.load(io.open(os.path.join(KOK, "veri-kaynak", "motor_kara.geojson"), encoding="utf-8"))
MOTOR = prep(shape(mk["features"][0]["geometry"]))
nel = json.load(io.open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))
kapsayan = _box(10, 36, 48, 53)
KARA = prep(unary_union([shape(f["geometry"]).intersection(kapsayan)
                         for f in nel["features"]
                         if shape(f["geometry"]).intersects(kapsayan)]))

KUTULAR = {
    "H-0007 Bohemya":     (49.84, 51.10, 15.73, 18.09, "1827-07-06"),
    "H-0014 Poti":        (41.82, 42.64, 41.35, 42.70, "1829-09-14"),
    "H-0015 EflakBogdan": (43.14, 48.21, 22.91, 29.42, "1830-05-07"),
}

SON = {}
for ad, (la0, la1, lo0, lo1, gun) in KUTULAR.items():
    g = pad(gun)
    canli = [y for y in Y if var_mi(y, g)]
    say = {"deniz": 0, "C-UFUK": 0, "B-KAYIT": 0, "OK": 0}
    sahipsiz_nokta = {}
    sahip_dagilim = {}
    ciz_km, cizme_km = [], []
    la = la0
    while la <= la1:
        lo = lo0
        while lo <= lo1:
            p = Point(lo, la)
            if not KARA.contains(p):
                say["deniz"] += 1
            else:
                en = min(canli, key=lambda y: girdi.km(la, lo, y["lat"], y["lon"]))
                dk = girdi.km(la, lo, en["lat"], en["lon"])
                if not MOTOR.contains(p):
                    say["C-UFUK"] += 1; cizme_km.append(dk)
                else:
                    ciz_km.append(dk)
                    s = sahibi(en, g)
                    if s is None:
                        say["B-KAYIT"] += 1
                        sahipsiz_nokta[en["ad"]] = sahipsiz_nokta.get(en["ad"], 0) + 1
                    else:
                        say["OK"] += 1
                        k = "%s:%s" % s
                        sahip_dagilim[k] = sahip_dagilim.get(k, 0) + 1
            lo += 0.1
        la += 0.1
    ciz_km.sort(); cizme_km.sort()
    SON[ad] = {"gun": gun, "kutu": [la0, la1, lo0, lo1], "hucre_sayisi": say,
               "sahipsiz_petek_sahipleri": dict(sorted(sahipsiz_nokta.items(),
                                                       key=lambda x: -x[1])[:20]),
               "sahip_dagilimi": dict(sorted(sahip_dagilim.items(), key=lambda x: -x[1])[:15]),
               "cizilen_hucre_km": {"ortanca": round(ciz_km[len(ciz_km)//2], 1) if ciz_km else None,
                                    "azami": round(ciz_km[-1], 1) if ciz_km else None},
               "cizilmeyen_hucre_km": {"asgari": round(cizme_km[0], 1) if cizme_km else None,
                                       "ortanca": round(cizme_km[len(cizme_km)//2], 1) if cizme_km else None,
                                       "azami": round(cizme_km[-1], 1) if cizme_km else None}}
    print(ad, "|", json.dumps(say), "| cizilen azami km:", SON[ad]["cizilen_hucre_km"]["azami"],
          "| cizilmeyen asgari km:", SON[ad]["cizilmeyen_hucre_km"]["asgari"])
    if say["B-KAYIT"]:
        print("   sahipsiz petek sahipleri:", json.dumps(SON[ad]["sahipsiz_petek_sahipleri"], ensure_ascii=False))
    print("   sahip dagilimi:", json.dumps(SON[ad]["sahip_dagilimi"], ensure_ascii=False)[:400])

yol = os.path.join(KOK, "denetim", "HARITA-DURUM-0074-SAHIPSIZ.json")
io.open(yol, "w", encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazildi:", yol)
