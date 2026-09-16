# -*- coding: utf-8 -*-
"""GEOMETRI 0916 — HİPOTEZ-3: örtüşme = gövde başına SÜS İŞLEMİNİN komşu toprağına taşması.

`_yabanci_devlet_faz1` sırası: unary_union(hücreler) → kapat(0,15°) →
delikleri_doldur → gosterim_duzelt (B2 köprü · B3 koridor) → KARA → PUAN kapısı.
kapat/B2/B3 "içeride başka devletin NOKTASI var mı" diye sorar; komşunun
PETEĞİNİ (toprağını) sormaz ⇒ komşu gövdeye binebilir.

SINAV: her gövde için TAŞMA = gövde − (o gün sahibi o olan taban peteklerin
birleşimi). Taşma parçası başka bir sahibin peteğine düşüyorsa derinliğine
(taşmanın kendi hücrelerinden en uzak noktası) göre sınıflanır:
    ≤ 20 km          → KAPAMA (kapat 0,15° ≈ 15-17 km)
    > 20 km, pp<0,15 → B2 KÖPRÜ adayı (ince uzun)
    > 20 km, diğer   → B3 KORİDOR / DEVİR adayı
ÖNGÖRÜ (ölçümden önce): H-0097/H-0099 Avrupa örtüşmelerinin çoğu KAPAMA;
H-0102/H-0109 bantları B2.
⚠️ Taban petek ZAMANSIZ; devredilmiş (kur:/kuşatılmış) hücreler "sahipsiz"
   görünür ve taşmayı ŞİŞİRİR — o yüzden sahipsiz hücreye düşen taşma ayrı
   kovadadır (DEVİR/DOLGU), kusur sayılmaz.
"""
import json, math, os, re, sys
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Point, Polygon, box
from shapely.ops import unary_union
from shapely.strtree import STRtree

KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.path.insert(0, os.path.join(KOK, "denetim"))
import girdi  # noqa: E402
import importlib.util
_sp = importlib.util.spec_from_file_location("geo", os.path.join(KOK, "denetim", "ARAC-GEO-OLCUM-0916.py"))
geo = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(geo)


def main():
    DN = geo.js_oku("donemler.js"); DH = geo.js_oku("devletler_harita.js"); PG = geo.js_oku("petek_govde.js")
    YER = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
    PET = DN["PETEKLER"]
    PGP = PG["PETEK_GOVDE_PARCA"]
    cell = []
    for ix in PG["PETEK_GOVDE"]:
        ps = []
        for j in ix:
            q = Polygon(PGP[j][0], PGP[j][1:])
            ps.append(q if q.is_valid else q.buffer(0))
        cell.append(unary_union(ps) if ps else Polygon())
    agac = STRtree(cell)
    ozet = {}
    rapor = []
    for vid, gun, la0, la1, lo0, lo1 in geo.VAKALAR:
        B = box(lo0, la0, lo1, la1)
        B2 = B.buffer(1.0)
        lat = (la0 + la1) / 2
        own = {}
        for i in agac.query(B2):
            i = int(i)
            y = YER.get(PET[i]["a"])
            s = geo.sahip(y, gun) if y else None
            if s == "OSMANLI": s = "OSM-o"
            elif s == "TABI": s = "OSM-v"
            own[i] = s
        govdeler = {}
        for d in DN["DONEMLER"]:
            if d["f"] <= gun < d["t"]:
                for kat in ("o", "v"):
                    govdeler["OSM-" + kat] = geo.coz(d.get(kat), DN["PARCALAR"], DN["PARCA_HALKA"])
        for s in DH["DEVLET_HARITA"]:
            for p in s["dnm"]:
                if p["f"] <= gun < p["t"]:
                    govdeler[s["id"]] = geo.coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"])
        for k, g in govdeler.items():
            g = g.intersection(B2)
            if g.is_empty or geo.km2(g.intersection(B), lat) < 50:
                continue
            kendi = unary_union([cell[i] for i, s in own.items() if s == k]) if any(
                s == k for s in own.values()) else Polygon()
            tas = g.difference(kendi.buffer(0.001)).intersection(B)
            for p in (tas.geoms if hasattr(tas, "geoms") else [tas]):
                if not isinstance(p, Polygon) or geo.km2(p, lat) < 20:
                    continue
                rp = p.representative_point()
                alt = [i for i in agac.query(rp) if cell[int(i)].contains(rp)]
                alt_s = own.get(int(alt[0])) if alt else "PETEK_YOK"
                alt_ad = PET[int(alt[0])]["a"] if alt else None
                # YÖNLÜ derinlik: taşmanın kendi hücrelerinden EN UZAK köşesi.
                # (simetrik hausdorff kendi gövdenin uzak ucunu sayıyordu — ilk koşu yanlıştı)
                derin = (max(kendi.distance(Point(c)) for c in p.exterior.coords) * 111.32
                         if not kendi.is_empty else 9999)
                if alt_s is None or alt_s == "PETEK_YOK":
                    kova = "DEVIR/DOLGU (sahipsiz taban hücre)"
                elif alt_s == k:
                    kova = "AYNI SAHİP (tampon artığı)"
                elif derin <= 20:
                    kova = "KAPAMA"
                elif geo.pp(p) < 0.15:
                    kova = "B2 KÖPRÜ adayı"
                else:
                    kova = "B3 KORİDOR / DEVİR adayı"
                ozet.setdefault(kova, [0, 0]); ozet[kova][0] += 1; ozet[kova][1] += round(geo.km2(p, lat))
                rapor.append({"vaka": vid, "gun": gun, "govde": k, "km2": round(geo.km2(p, lat)),
                              "pp": round(geo.pp(p), 3), "derinlik_km": round(derin),
                              "nokta": [round(rp.x, 3), round(rp.y, 3)],
                              "alttaki_petek": alt_ad, "alttakinin_sahibi": alt_s, "kova": kova})
    json.dump({"ozet": ozet, "tasma": rapor},
              open(os.path.join(KOK, "denetim", "OLCUM-GEO-TASMA-0916.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    for k, (n, a) in sorted(ozet.items(), key=lambda x: -x[1][1]):
        print(f"{k:38} {n:4} parça {a:9} km²")
    for r in rapor:
        if not r["kova"].startswith(("DEVIR", "AYNI")):
            print(f"  {r['vaka']:9} {r['govde']:15} {r['km2']:6} km² pp {r['pp']:.2f} derin {r['derinlik_km']:4} km"
                  f"  → {r['alttaki_petek']} ({r['alttakinin_sahibi']})  [{r['kova']}]")


if __name__ == "__main__":
    main()
