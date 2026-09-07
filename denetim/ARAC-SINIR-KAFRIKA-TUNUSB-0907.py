# -*- coding: utf-8 -*-
"""KALEM Ⓑ ikinci tur — SINIF TUNUS'TAN BÜYÜK · SINIR-KAFRIKA-0907

Sevk *"Tunus — 36 noktada `kid` VE `k` ikisi de null"* diyordu. Ölçüm
sınıfın daha geniş olduğunu gösterdi: **56 dönem, 7 ayrı polity, 5 dosya,
üç kıta değil ama üç bölge.** Hepsi aynı cins: **adı konmamış Osmanlı
tâbii.**

Bu tur `§3.5.0`nın sınavını uygular:
   ***Ardıl künyenin VAR OLMASI, YAZILABİLİR olduğu anlamına gelmez —
      PENCERESİ DE TUTMALI.***
Her adsız dönem için: bir künye var mı, ve künye o dönemi KAPSIYOR mu?
"""
import io
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402


def kume_adi(y, p):
    """Adsiz donemi bir POLITY kumesine bagla — koordinata ve doneme gore."""
    la, lo, f = y["lat"], y["lon"], p.get("f")
    if 30.0 <= la <= 37.6 and 7.5 <= lo <= 11.6:
        return "Tunus (Husyni beyligi)"
    if 34.7 <= la <= 35.8 and 23.4 <= lo <= 26.4:
        return ("Girit (Misir idaresi 1830-1841)" if f < "1850"
                else "Girit (Girit Devleti 1898-1913)")
    if 37.5 <= la <= 38.0 and 26.5 <= lo <= 27.3:
        return "Sisam Prensligi"
    if 45.0 <= la <= 47.0 and 22.0 <= lo <= 26.5:
        return "Erdel Prensligi"
    if 47.0 <= la <= 48.0 and 21.0 <= lo <= 22.0:
        return "Debrecen (Erdel/Hayduk bolgesi)"
    if 42.5 <= la <= 44.0 and 26.5 <= lo <= 28.5:
        return "Bulgaristan Prensligi"
    if 43.0 <= la <= 45.0 and 20.0 <= lo <= 23.0:
        return "Sirbistan Prensligi"
    return "SINIFLANAMADI"


def main():
    Y = girdi.yukle()
    D = girdi.oku_devletler()
    kunye = {d["id"]: d for d in D}

    adsiz = []
    for y in Y:
        for p in (y.get("v") or []):
            if not p.get("kid") and not p.get("k"):
                adsiz.append((y, p))

    kume = {}
    for y, p in adsiz:
        a = kume_adi(y, p)
        kume.setdefault(a, []).append((y, p))

    print("ADSIZ `v:` DONEMI: %d   ·   POLITY KUMESI: %d" % (len(adsiz), len(kume)))
    print("AN: (disk)")
    print("")
    print("%-34s %5s  %-12s %-12s  %s"
          % ("polity kumesi", "donem", "f", "t", "dosya(lar)"))
    print("-" * 100)
    for a, lst in sorted(kume.items(), key=lambda x: -len(x[1])):
        f = min(p.get("f") for _, p in lst)
        t = max(p.get("t") for _, p in lst)
        ds = sorted(set(y.get("_kaynak") for y, _ in lst))
        print("%-34s %5d  %-12s %-12s  %s"
              % (a, len(lst), f, t, ", ".join(x.replace("yerlesimler", "y") for x in ds)))

    # --- kunye adaylari: ad benzerligi DEGIL, elle eslenmis liste ---
    ADAY = {
        "Tunus (Husyni beyligi)": ["tunus-ocagi"],
        "Girit (Misir idaresi 1830-1841)": ["misir-kavalali", "girit"],
        "Girit (Girit Devleti 1898-1913)": ["girit", "girit-devleti"],
        "Sisam Prensligi": ["sisam", "sisam-prensligi"],
        "Erdel Prensligi": ["erdel", "erdel-prensligi"],
        "Debrecen (Erdel/Hayduk bolgesi)": ["erdel", "erdel-prensligi"],
        "Bulgaristan Prensligi": ["bulgaristan-prensligi", "bulgaristan-kralligi"],
        "Sirbistan Prensligi": ["sirbistan-prensligi", "sirbistan"],
    }
    print("")
    print("=" * 100)
    print("§3.5.0 SINAVI — kunye VAR MI, ve PENCERESI DONEMI KAPSIYOR MU?")
    print("=" * 100)
    for a, lst in sorted(kume.items(), key=lambda x: -len(x[1])):
        f = min(p.get("f") for _, p in lst)
        t = max(p.get("t") for _, p in lst)
        print("")
        print("%s   (%d donem · %s -> %s)" % (a, len(lst), f, t))
        bulundu = False
        for kid in ADAY.get(a, []):
            k = kunye.get(kid)
            if not k:
                print("   %-26s 🔴 KUNYE YOK" % kid)
                continue
            bulundu = True
            kaps = (k.get("f") <= f and t <= k.get("t"))
            isaret = "🟢 KAPSIYOR" if kaps else "🔴 KAPSAMIYOR"
            print("   %-26s %s -> %-12s  %s"
                  % (kid, k.get("f"), k.get("t"), isaret))
            if not kaps:
                if k.get("f") > f:
                    print("      künye %s GEÇ başlıyor" % k.get("f"))
                if t > k.get("t"):
                    print("      künye %s ERKEN bitiyor (dönem %s'e kadar)"
                          % (k.get("t"), t))
        if not bulundu:
            print("   ⇒ hicbir aday kunye YOK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
