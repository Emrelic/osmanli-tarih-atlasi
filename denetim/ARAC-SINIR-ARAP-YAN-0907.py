# -*- coding: utf-8 -*-
"""ARAC-SINIR-ARAP-YAN-0907 — her kenarin IKI YANINDA 1923'te NE VARDI.

bbox bir IPUCUYDU (§11) ve gurultu uretti: sömürge imparatorluklarinin
bbox'i kitalar asiyor (portekiz · abd · ingiltere her ulkeyi "kapsiyor").
Bu alet bbox YERINE gercek YERLESIM NOKTALARINI kullanir: NE ulke
poligonunun ICINE dusen, 1923-10-28'de CANLI olan noktalarin kimlikleri.

🔴 SORGU GUNU 1923-10-28 — donemler yari acik (`f <= g < t`) ve UFUK sonu
   1923-10-29; cipa kayda 1923-10-29 diye YAZILIR, atlasa 10-28 SORULUR.
   (1.MURAT tahta M-3191 · KIMLIK-1923-0907 olctu.)

🔴 KATMAN SIRASI denetle.py semantigi: d (Osmanli dogrudan) -> v (tabi)
   -> s (yabanci). `isg:` AYRI raporlanir, sahiplik SAYILMAZ.
"""
import sys, os, json
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

import girdi
from shapely.geometry import shape, Point
from shapely.prepared import prep

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
G = "1923-10-28"

BOLGE = ["Syria", "Lebanon", "Israel", "Palestine", "Jordan", "Iraq",
         "Saudi Arabia", "Yemen", "Oman", "United Arab Emirates",
         "Qatar", "Bahrain", "Kuwait", "Turkey", "Iran", "Egypt"]


def kimlik(y, g):
    """denetle.py semantigi — d > v > s. isg: sahiplik degildir."""
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI-dogrudan"
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "TABI:" + (p.get("kid") or p.get("k") or "(kidsiz)")
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return p.get("d") or "(dsiz)"
    return None


def main():
    Y = girdi.yukle()
    print("yerlesim toplam : %d" % len(Y))
    canli = []
    for y in Y:
        k = kimlik(y, G)
        if k:
            canli.append((y["ad"], y["lon"], y["lat"], k))
    print("%s'de kimligi olan nokta: %d" % (G, len(canli)))
    print("kimliksiz (sahipsiz)    : %d" % (len(Y) - len(canli)))

    gj = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
    hazir = {}
    for ft in gj["features"]:
        ad = ft["properties"].get("ADMIN")
        if ad in BOLGE:
            g = shape(ft["geometry"])
            if not g.is_valid:
                g = g.buffer(0)
            hazir[ad] = prep(g)

    print()
    print("%-22s %s" % ("NE ULKE (bugun)", "ICINE DUSEN 1923-10-28 KIMLIKLERI (nokta sayisi)"))
    tablo = {}
    for ad in BOLGE:
        p = hazir.get(ad)
        if p is None:
            print("%-22s (NE geometrisi yok)" % ad)
            continue
        sayim = {}
        for nad, lon, lat, k in canli:
            if p.contains(Point(lon, lat)):
                sayim[k] = sayim.get(k, 0) + 1
        tablo[ad] = sayim
        s = ", ".join("%s(%d)" % (k, v) for k, v in sorted(sayim.items(), key=lambda x: -x[1]))
        print("%-22s %s" % (ad, s or "🔴 NOKTA YOK — 1923 kimligi OLCULEMEDI"))

    yol = os.path.join(KOK, "denetim", "OLCUM-SINIR-ARAP-YAN-0907.json")
    json.dump({
        "_NOT": "Her NE ulkesinin bugunku poligonunun ICINE dusen, 1923-10-28'de canli "
                "atlas noktalarinin kimlik dagilimi. bbox DEGIL, GERCEK NOKTA. "
                "Cipa kayda 1923-10-29 yazilir; atlasa 1923-10-28 sorulur (yari acik aralik).",
        "sorgu_gunu": G,
        "katman_sirasi": "d > v > s ; isg: sahiplik sayilmaz (denetle.py semantigi)",
        "yerlesim_toplam": len(Y),
        "kimligi_olan": len(canli),
        "ulke": tablo,
    }, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("\nYAZILDI: %s" % os.path.relpath(yol, KOK))


if __name__ == "__main__":
    main()
