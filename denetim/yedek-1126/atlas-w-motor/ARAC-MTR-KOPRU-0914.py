# -*- coding: utf-8 -*-
"""ARAC-MTR-KOPRU-0914 — Osmanlı doğrudan (o) / tâbi (v) gövdesinin, altındaki
PETEKLERİN sahibine göre dökümü: "boş eklenmiş kırmızı bölge" nereden geliyor. SALT OKUMA.

Kullanım:  py denetim/ARAC-MTR-KOPRU-0914.py <gun> <lat0> <lat1> <lon0> <lon1>

Her katman (OSMANLI · OSMANLI-tabi) için kutudaki alan şu kovalara bölünür:
  kendi      o günün sahibi bu katman olan petek (doğru boyama)
  oteki_osm  diğer Osmanlı katmanının peteği (o↔v yer değiştirmiş: köprü rengi)
  sahipsiz   sahipsiz yerleşimin peteği (EKLEYİCİ KAPI dolgusu / B2 köprü / B3 koridor)
  yabanci    başka devletin peteği (binme)
  sahnede-yok  kur:/bit: dışı yerleşimin peteği (epok devri)
  peteksiz   hiçbir peteğin kapsamadığı alan (kapat() / B2 / B3 dolgusu tavanın ötesine)
Ayrıca her büyük parça için içindeki yerleşimler.
"""
import sys, os, json, importlib.util
from collections import defaultdict
from shapely.geometry import box, Point
from shapely.ops import unary_union

_s = importlib.util.spec_from_file_location("mtr", os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-MTR-ORTAK-0914.py"))
M = importlib.util.module_from_spec(_s); _s.loader.exec_module(M)


def olc(gun, la0, la1, lo0, lo1, etiket=""):
    K = box(lo0, la0, lo1, la1)
    Y = M.yerler()
    o, v, _ = M.osmanli(gun)
    pix = M.kutudaki_petekler(K)
    ps = {i: (M.sahip(Y[i], gun) if M.sahnede(Y[i], gun) else "__SAHNEDE_YOK__") for i in pix}
    R = {"etiket": etiket, "gun": gun, "kutu": [la0, la1, lo0, lo1]}
    for ad, g, kendi in (("OSMANLI", o, "OSMANLI"), ("OSMANLI-tabi", v, "OSMANLI-tabi")):
        if g is None or g.is_empty:
            continue
        gk = g.intersection(K)
        kova = defaultdict(float); orn = defaultdict(list); kalan = gk
        for i in pix:
            x = gk.intersection(M.petek(i)); a = M.km2(x)
            if a <= 0.5:
                continue
            s = ps[i]
            if s == kendi: k = "kendi"
            elif s in ("OSMANLI", "OSMANLI-tabi"): k = "oteki_osm"
            elif s is None: k = "sahipsiz"
            elif s == "__SAHNEDE_YOK__": k = "sahnede-yok"
            else: k = "yabanci"
            kova[k] += a; orn[k].append((round(a), Y[i]["ad"], s))
            kalan = kalan.difference(M.petek(i))
        kova["peteksiz"] = M.km2(kalan)
        parc = []
        for p in M.parcalar(gk):
            a = M.km2(p)
            if a < 2000:
                continue
            ic = [(Y[i]["ad"], M.sahip(Y[i], gun)) for i in range(len(Y)) if p.contains(Point(Y[i]["lon"], Y[i]["lat"]))]
            parc.append({"km2": round(a), "yerlesim_n": len(ic), "yerlesim": ic[:8],
                         "temsil": [round(p.representative_point().y, 2), round(p.representative_point().x, 2)]})
        R[ad] = {"km2": round(M.km2(gk)), "kova_km2": {k: round(x) for k, x in kova.items()},
                 "ornek": {k: sorted(x, reverse=True)[:6] for k, x in orn.items()},
                 "parca": sorted(parc, key=lambda r: -r["km2"])[:12]}
    print(json.dumps(R, ensure_ascii=False, indent=1))
    return R


if __name__ == "__main__":
    a = sys.argv[1:]
    olc(a[0], float(a[1]), float(a[2]), float(a[3]), float(a[4]), a[5] if len(a) > 5 else "")
