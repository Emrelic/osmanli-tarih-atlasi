# -*- coding: utf-8 -*-
"""27 GÜNLÜK PENCERE — çıkarımı ÖLÇÜME çeviriyor · SINIR-KAFRIKA-0907

1.MURAT'ın çekincesi (M-3217): kendi ölçümüm `1923-10-01`, yetkili tablo
`1923-10-28`. Ayrışma 0 çıktı ve ben bundan *"o pencerede kırılma yok"*
sonucunu ÇIKARDIM — ölçmedim. Haklı: bir sonuçtan çıkarılan şey bir
ölçüm değildir.

Bu alet o boşluğu kapatır: bölgemin 19 ucundaki NE poligonlarının içine
düşen atlas noktalarında, `1923-10-01 < g <= 1923-10-28` aralığında
BAŞLAYAN ya da BİTEN bir dönem var mı?

🔴 İki yönü de sorar — bir dönemin bitmesi de başlaması da kimliği
değiştirir. Yalnız birini sormak, ötekini sessizce temiz sayar.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

from shapely.geometry import shape, Point  # noqa: E402
from shapely.strtree import STRtree  # noqa: E402

ALT = "1923-10-01"
UST = "1923-10-28"


def main():
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
            poly[ad] = shape(ft["geometry"]).buffer(0)

    Y = girdi.yukle()
    nokta = [(Point(y["lon"], y["lat"]), y) for y in Y
             if y.get("lon") is not None and y.get("lat") is not None]
    agac = STRtree([p for p, _ in nokta])

    bulgu = []
    kapsanan = 0
    for ad in uclar:
        pg = poly.get(ad)
        if pg is None:
            continue
        for i in agac.query(pg):
            p, y = nokta[i]
            if not pg.covers(p):
                continue
            kapsanan += 1
            for kat in ("d", "v", "s"):
                for per in (y.get(kat) or []):
                    for uc in ("f", "t"):
                        g = per.get(uc)
                        if g and ALT < g <= UST:
                            bulgu.append((ad, y["ad"], kat, uc, g,
                                          per.get("d") or per.get("kid")
                                          or per.get("k")))

    print("PENCERE: %s (dahil degil) .. %s (dahil)" % (ALT, UST))
    print("taranan nokta (19 ucun poligonu icinde): %d" % kapsanan)
    print("")
    if bulgu:
        print("🔴 PENCEREDE KIRILMA VAR: %d" % len(bulgu))
        for b in bulgu:
            print("   %-24s %-24s %s.%s = %s   -> %s" % b)
        print("")
        print("⇒ Cikarimim YANLISTI: ayrisma 0 olmasi kirilma olmadigini")
        print("  gostermiyormus. Rapor DUZELTILECEK.")
    else:
        print("🟢 PENCEREDE KIRILMA YOK: 0")
        print("")
        print("⇒ Cikarimim ARTIK OLCULMUS. Ayrisma 0 ile bu bulgu ayni")
        print("  yone cikiyor ama IKISI AYRI KANIT: biri sonuclarin")
        print("  ortusmesi, oteki nedenin YOKLUGU.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
