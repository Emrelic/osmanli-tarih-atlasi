# -*- coding: utf-8 -*-
"""FAS–İSPANYA kenarının 1923 kimliği — atlasa SORULUYOR

Kenar 21,5 km ve İKİ PARÇA: Ceuta ve Melilla. Yetkili tablo Fas için
`fas`, İspanya için `ispanya` diyor — ama o değerler ÜLKE GENELİNİN
baskın kimliği. Bu kenar Fas'ın KUZEY UCUNDA ve orada 1921-1926 arası
Rif Cumhuriyeti var (`rif-cumhuriyeti` künyesi 1921-09-18 → 1923-10-29).

SORU: kenarın ÇEVRESİNDEKİ atlas noktaları 1923-10-28'de ne diyor?
🔴 Ülke geneli bir kenarın iki yakası hakkında hüküm vermez — bu, `§11`in
   "temiz çıkan bir örneklem, örneklemin dışını temiz ilan etmez"
   dersinin YEREL yüzü.
"""
import io
import json
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

GUN = "1923-10-28"
YARICAP = 200.0   # km


def sahip(y, g):
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI-dogrudan"
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "tabi:" + str(p.get("kid") or p.get("k") or "__KIDSIZ__")
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return p.get("d")
    return None


def km(a, b):
    f1, f2 = math.radians(a[1]), math.radians(b[1])
    x = (math.sin((f2 - f1) / 2) ** 2
         + math.cos(f1) * math.cos(f2) * math.sin(math.radians(b[0] - a[0]) / 2) ** 2)
    return 6371.0 * 2 * math.asin(min(1.0, math.sqrt(x)))


def main():
    S = json.load(io.open(os.path.join(KOK, "denetim",
                  "SINIR-HUKUKI-KAFRIKA-0907.json"), encoding="utf-8"))
    kenar = None
    for k in S["kenarlar"]:
        if (k["a"], k["b"]) == ("Morocco", "Spain"):
            kenar = k
    if kenar is None or not kenar.get("gc"):
        print("🔴 kenar ya da geometrisi YOK")
        return 2

    print("kenar: %s ↔ %s  ·  %.1f km  ·  %d parca"
          % (kenar["a"], kenar["b"], kenar["km"], len(kenar["gc"])))
    merkez = []
    for i, par in enumerate(kenar["gc"]):
        xs = [c[0] for c in par]
        ys = [c[1] for c in par]
        m = (sum(xs) / len(xs), sum(ys) / len(ys))
        merkez.append(m)
        print("   parca %d: %d tepe · merkez %.4f D, %.4f K"
              % (i + 1, len(par), m[0], m[1]))

    Y = girdi.yukle()
    print("")
    print("SORGU GUNU: %s   (1923-10-29 PENCERE UCU, kullanilmadi)" % GUN)
    for i, m in enumerate(merkez):
        print("")
        print("=== PARCA %d cevresi (%.0f km) ===" % (i + 1, YARICAP))
        yakin = []
        for y in Y:
            if y.get("lon") is None or y.get("lat") is None:
                continue
            d = km((y["lon"], y["lat"]), m)
            if d <= YARICAP:
                yakin.append((d, y["ad"], sahip(y, GUN)))
        yakin.sort()
        if not yakin:
            print("   🔴 %.0f km icinde atlas noktasi YOK" % YARICAP)
            continue
        for d, ad, s in yakin[:14]:
            print("   %6.1f km  %-28s %s" % (d, ad, s))
        if len(yakin) > 14:
            print("   ... %d nokta daha" % (len(yakin) - 14))

    # rif-cumhuriyeti veride HIC kullaniliyor mu?
    print("")
    print("=== `rif-cumhuriyeti` VERIDE KULLANILIYOR MU? ===")
    kul = []
    for y in Y:
        for kat in ("d", "v", "s"):
            for p in (y.get(kat) or []):
                if "rif" in str(p.get("d") or p.get("kid") or "").lower():
                    kul.append((y["ad"], kat, p.get("f"), p.get("t"),
                                p.get("d") or p.get("kid")))
    if kul:
        print("   %d donem:" % len(kul))
        for u in kul:
            print("     %-24s %s: %s -> %s  (%s)" % u)
    else:
        print("   🔴 SIFIR — kunye VAR, veride HIC KULLANILMIYOR")
        print("   ⇒ `§1.5`in 'sessiz borc' kovasi: kunye var, veri yok.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
