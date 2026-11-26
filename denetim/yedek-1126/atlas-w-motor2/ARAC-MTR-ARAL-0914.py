# -*- coding: utf-8 -*-
"""ARAC-MTR-ARAL-0914 — Aral kıyısında boyanmayan şerit. SALT OKUMA.

Kullanım:  py denetim/ARAC-MTR-ARAL-0914.py [gun=1281-01-01]

Ölçtükleri:
  ① GÖL KAYNAĞI: motorun çıkardığı göl hangi poligon — NE 10m modern Aral
     parçaları mı, data/goller.js tarihî Aral mı; alanları.
  ② ŞERİT: göl kıyısından 0,5° içerideki motor karası − boyalı katmanlar;
     KUTU aracının kovalarıyla (tavan · sahipsiz · sahnede-yok · SAHİPLİ).
  ③ KIYIYA EN YAKIN YERLEŞİMLER: o gün sahnede, sahipleri, kıyıya mesafe.
     200 km tavanı (TAVAN_KM) ile karşılaştırma.
"""
import sys, os, json, importlib.util
from collections import defaultdict
from shapely.geometry import box, Point, shape
from shapely.ops import unary_union

_s = importlib.util.spec_from_file_location("mtr", os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-MTR-ORTAK-0914.py"))
M = importlib.util.module_from_spec(_s); _s.loader.exec_module(M)

gun = sys.argv[1] if len(sys.argv) > 1 else "1281-01-01"
K = box(55.0, 42.0, 63.5, 48.5)
Y = M.yerler()
R = {"gun": gun}

ne = [f for f in M._ne("ne_10m_lakes.geojson")["features"]
      if "Aral" in ((f["properties"].get("name") or "") + (f["properties"].get("name_alt") or ""))]
R["NE_modern_aral_km2"] = [(f["properties"]["name"], round(M.km2(shape(f["geometry"]).buffer(0)))) for f in ne]
import girdi, io
girdi.DATA = M.kosu10_data_dizini(sessiz=True)
_o = sys.stdout; sys.stdout = io.StringIO()
try:
    ek = girdi.oku_goller(sessiz=True)
finally:
    sys.stdout = _o
tar = [e for e in ek if "Aral" in (e.get("ad") or "")]
R["goller_js_tarihi_aral"] = [(e.get("ad"), round(M.km2(shape(e["geometry"]).buffer(0))), e.get("gecerli")) for e in tar]
gol = unary_union([shape(e["geometry"]).buffer(0) for e in tar]) if tar else unary_union([shape(f["geometry"]).buffer(0) for f in ne])

kara = M.kara(K)
R["motor_karasi_golu_cikarmis_mi"] = round(M.km2(kara.intersection(gol)), 1)
serit = kara.intersection(gol.buffer(0.5))
kat = M.sahipler(gun, K)
boyali = unary_union([g.intersection(K) for g in kat.values()])
bos = serit.difference(boyali)
R["serit_kara_km2"] = round(M.km2(serit)); R["serit_bos_km2"] = round(M.km2(bos))
pix = M.kutudaki_petekler(K)
kova = defaultdict(float); orn = defaultdict(list); kalan = bos
for i in pix:
    x = bos.intersection(M.petek(i)); a = M.km2(x)
    if a <= 0.5:
        continue
    s = M.sahip(Y[i], gun) if M.sahnede(Y[i], gun) else "__SAHNEDE_YOK__"
    k = "sahnede-yok" if s == "__SAHNEDE_YOK__" else ("sahipsiz" if s is None else "SAHIPLI")
    kova[k] += a; orn[k].append((round(a), Y[i]["ad"], s))
    kalan = kalan.difference(M.petek(i))
kova["tavan(petek-yok)"] = M.km2(kalan)
R["serit_bos_kova_km2"] = {k: round(v) for k, v in kova.items()}
R["ornek"] = {k: sorted(v, reverse=True)[:6] for k, v in orn.items()}
kiyi = gol.boundary
L = []
for i, y in enumerate(Y):
    p = Point(y["lon"], y["lat"])
    if not K.contains(p) or not M.sahnede(y, gun):
        continue
    d_deg = kiyi.distance(p)
    L.append((round(d_deg * 111.2 * 0.72), y["ad"], M.sahip(y, gun), round(M.km2(M.petek(i)))))
L.sort()
R["kiyiya_en_yakin_yerlesimler(km≈, ad, sahip, petek_km2)"] = L[:12]
R["katmanlar"] = {k: round(M.km2(g.intersection(K))) for k, g in kat.items()}
print(json.dumps(R, ensure_ascii=False, indent=1))
