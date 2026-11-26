# -*- coding: utf-8 -*-
"""kimlik_1923 ÖLÇÜMÜ — SINIR-KAFRIKA-0907

🔴 `kimlik_1923` MEKANİK DOLDURULAMAZ (ortak şartname §⑦) — ama TAHMİN de
   edilmez. Bu alet cevabı ATLASIN KENDİ VERİSİNDEN okur: her NE ülkesinin
   bugünkü sınırları içine düşen atlas yerleşimlerinin `1923-10-01`deki
   sahipleri kimlerdir, ve DAĞILIM nedir?

⚠️ SINIRLARI — üçü de basılır, gizlenmez:
   ① nokta sayısı düşükse dağılım bir ORAN değil bir GÖZLEMDİR
   ② çapa günü `1923-10-29` atlasın PENCERE UCUDUR; bir dönem tam o gün
      biterse "yok" görünür ⇒ ölçüm `1923-10-01`de yapılır ve bu YAZILIR
   ③ veri 1923'te yanlışsa ölçüm de yanlış olur — kaynağa AYRICA sorulur
"""
import io
import json
import os
import sys
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

from shapely.geometry import shape, Point  # noqa: E402
from shapely.strtree import STRtree  # noqa: E402

GUN = "1923-10-01"


def sahip(y, g):
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI-dogrudan"
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "tabi:" + str(p.get("kid") or p.get("k") or "?")
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return p.get("d")
    return None


def main():
    Y = girdi.yukle()
    payda = json.load(io.open(os.path.join(KOK, "denetim",
                     "OLCUM-SINIR-KAFRIKA-PAYDA-0907.json"), encoding="utf-8"))
    uclar = sorted(set([k["a"] for k in payda["kenarlar"]]
                       + [k["b"] for k in payda["kenarlar"]]))

    gj = json.load(io.open(os.path.join(KOK, "veri-kaynak",
                   "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
    poly = {}
    for ft in gj["features"]:
        ad = ft["properties"].get("ADMIN")
        if ad in uclar:
            poly[ad] = shape(ft["geometry"]).buffer(0)   # gecersizi onar

    nokta = [(Point(y["lon"], y["lat"]), y) for y in Y
             if y.get("lon") is not None and y.get("lat") is not None]
    agac = STRtree([p for p, _ in nokta])

    print("ÇAPA GÜNÜ: %s   (1923-10-29 PENCERE UCU oldugu icin kullanilmadi)" % GUN)
    print("atlas yerlesimi: %d" % len(Y))
    print("")
    cikti = {}
    for ad in uclar:
        pg = poly.get(ad)
        if pg is None:
            print("%-26s 🔴 NE POLIGONU YOK" % ad)
            continue
        ic = []
        for i in agac.query(pg):
            p, y = nokta[i]
            if pg.covers(p):
                ic.append(y)
        c = Counter()
        sahipsiz = 0
        for y in ic:
            s = sahip(y, GUN)
            if s is None:
                sahipsiz += 1
            else:
                c[s] += 1
        toplam = len(ic)
        ozet = " · ".join("%s %d" % (k, v) for k, v in c.most_common(5))
        uyari = ""
        if toplam == 0:
            uyari = "  🔴 BU ULKEDE ATLAS NOKTASI YOK — kimlik OLCULEMEDI"
        elif toplam < 4:
            uyari = "  ⚠️ %d nokta — dagilim bir ORAN degil" % toplam
        print("%-26s n=%-4d %s%s" % (ad, toplam, ozet or "(sahipsiz)", uyari))
        if sahipsiz:
            print("%-26s        sahipsiz: %d" % ("", sahipsiz))
        cikti[ad] = {"nokta": toplam, "sahipsiz": sahipsiz,
                     "dagilim": dict(c.most_common())}

    with io.open(os.path.join(KOK, "denetim",
                 "OLCUM-SINIR-KAFRIKA-KIMLIK1923-0907.json"), "w",
                 encoding="utf-8") as f:
        f.write(json.dumps({"_NOT": "atlas verisinden olculen 1923 kimligi; "
                                    "gun %s (pencere ucu degil)" % GUN,
                            "ulkeler": cikti}, ensure_ascii=False, indent=1))
    print("")
    print("yazildi: denetim/OLCUM-SINIR-KAFRIKA-KIMLIK1923-0907.json")


if __name__ == "__main__":
    main()
