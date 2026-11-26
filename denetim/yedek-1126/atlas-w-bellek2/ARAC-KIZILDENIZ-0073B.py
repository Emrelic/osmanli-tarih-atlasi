# -*- coding: utf-8 -*-
"""KIZILDENIZ-0073B — H-0009 ikinci soru: BOŞLUĞUN SEBEBİ (K2 Afar/Denakil)

(1) K2 kutusunun merkezine ve dört köşesine en yakın yerleşim noktaları + km
(2) genişletilmiş kutuda (K2 +2 derece) nokta dökümü ve 1822-10-24 sahipleri
(3) petek çöl tavanı: uret_petek.py'deki mesafe tavanı kaç km (kaynaktan okunur)
(4) Barentu gibi görselde görünüp K1 kutusuna girmeyen noktalar için ek tarama

Çıktı: denetim/OLCUM-KIZILDENIZ-0073B.json
"""
import json
import math
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8")
import girdi  # noqa: E402

GUN = "1822-10-24"
K2 = dict(lat0=12.20, lat1=14.94, lon0=40.30, lon1=41.98)


def km(a, b):
    la1, lo1 = math.radians(a[0]), math.radians(a[1])
    la2, lo2 = math.radians(b[0]), math.radians(b[1])
    h = (math.sin((la2 - la1) / 2) ** 2
         + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(h))


def gunde(p, g):
    return (p.get("f") or "0000-01-01") <= g <= (p.get("t") or "9999-12-31")


def sahip(y, g):
    for p in (y.get("s") or []):
        if gunde(p, g):
            return (p.get("d") or "?"), "s"
    for p in (y.get("d") or []):
        if gunde(p, g):
            return "OSMANLI", "d"
    for p in (y.get("v") or []):
        if gunde(p, g):
            return "tabi:" + (p.get("kid") or "?"), "v"
    return None, None


def main():
    TUM = girdi.yukle(sessiz=True)
    sonuc = {"gun": GUN, "kutu": K2}

    noktalar = [
        ("merkez", ((K2["lat0"] + K2["lat1"]) / 2, (K2["lon0"] + K2["lon1"]) / 2)),
        ("KB", (K2["lat1"], K2["lon0"])), ("KD", (K2["lat1"], K2["lon1"])),
        ("GB", (K2["lat0"], K2["lon0"])), ("GD", (K2["lat0"], K2["lon1"])),
    ]
    sonuc["en_yakinlar"] = {}
    for ad, pt in noktalar:
        liste = sorted(
            ((km(pt, (y["lat"], y["lon"])), y) for y in TUM), key=lambda r: r[0])[:5]
        sonuc["en_yakinlar"][ad] = [
            {"ad": y.get("ad"), "km": round(d, 1),
             "lat": round(y["lat"], 4), "lon": round(y["lon"], 4),
             "sahip": sahip(y, GUN)[0]} for d, y in liste]

    G = dict(lat0=K2["lat0"] - 2, lat1=K2["lat1"] + 2,
             lon0=K2["lon0"] - 2, lon1=K2["lon1"] + 2)
    genis = [y for y in TUM
             if G["lat0"] <= y["lat"] <= G["lat1"] and G["lon0"] <= y["lon"] <= G["lon1"]]
    sonuc["genis_kutu"] = {"kutu": G, "nokta_sayisi": len(genis), "kayitlar": sorted(
        [{"ad": y.get("ad"), "lat": round(y["lat"], 4), "lon": round(y["lon"], 4),
          "sahip": sahip(y, GUN)[0]} for y in genis],
        key=lambda r: (str(r["sahip"]), r["ad"] or ""))}

    # petek mesafe tavanı — kaynaktan
    kay = open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
    tavanlar = []
    for m in re.finditer(r"^(.*(?:TAVAN|MESAFE|MAX_KM|KM_TAVAN|COL).*)$", kay, re.M):
        s = m.group(1).strip()
        if s.startswith("#"):
            continue
        if re.search(r"\d", s):
            tavanlar.append(s[:160])
    sonuc["petek_tavan_satirlari"] = tavanlar[:25]

    # görselde görünen ama K1'e girmeyen adlar
    ek = []
    for y in TUM:
        a = (y.get("ad") or "").lower()
        if any(x in a for x in ("barentu", "agordat", "keren", "nakfa",
                                "assab", "asseb", "aseb", "beylul", "edd",
                                "tacura", "tacûra", "obok", "rahayta", "rahayta")):
            ek.append({"ad": y.get("ad"), "lat": round(y["lat"], 4),
                       "lon": round(y["lon"], 4), "sahip": sahip(y, GUN)[0]})
    sonuc["ek_ad_taramasi"] = ek

    yol = os.path.join(KOK, "denetim", "OLCUM-KIZILDENIZ-0073B.json")
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(sonuc, f, ensure_ascii=False, indent=1)

    print("K2 en yakin noktalar:")
    for ad, liste in sonuc["en_yakinlar"].items():
        r = liste[0]
        print("  %-7s -> %-22s %6.1f km  sahip=%s" % (ad, r["ad"], r["km"], r["sahip"]))
    print("genis kutu (K2+2): %d nokta" % len(genis))
    print("ek ad taramasi: %d" % len(ek))
    for r in ek:
        print("   %-22s %7.3fN %7.3fE  sahip=%s" % (r["ad"], r["lat"], r["lon"], r["sahip"]))
    print("petek tavan satiri: %d" % len(tavanlar))
    for s in tavanlar[:12]:
        print("   ", s)
    print("->", yol)


if __name__ == "__main__":
    main()
