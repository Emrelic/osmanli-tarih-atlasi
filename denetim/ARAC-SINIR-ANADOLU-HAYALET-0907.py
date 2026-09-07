# -*- coding: utf-8 -*-
"""
ARAC-SINIR-ANADOLU-HAYALET-0907 — SINIR-ANADOLU-0907 · 7 Eylul 2026

`KIMLIK-1923-0907-ADIM1.json` 1923-10-28'de `rusya` kimliginin 5 NOKTA
tasidigini gosterdi. `rusya` = "Rusya Carligi / Imparatorlugu", kunyesi
**1917-03-15'te BITIYOR** ⇒ §3.5 HAYALET DEVLET.
bbox [39.08, 42.06, 48.29, 44.61] ⇒ KAFKASYA, yani BENIM BOLGEM.

Bu alet o bes noktayi ADIYLA bulur ve zincirini basar.
🔴 YALNIZ OKUR. `data/` DONUK (kosu 8) ve zaten §7'ye gore benim degil.
🔴 DUZELTME ONERMEZ — §3.5.1: "bir sinir kaymasi onerildiginde IKI UC DA
   olculur"; ikinci ucu (ardil kimlik) olcmeden oneri yazmak, bir hayaleti
   kapatip bir DELIK acmak olur.
"""
import sys, io, os, json

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
CIKTI = os.path.join(KOK, "denetim", "OLCUM-HAYALET-ANADOLU-0907.json")

import girdi  # noqa: E402

GUN = "1923-10-28"          # 🔴 cipa DEGIL: UFUK sonu yari acik araligin DISINDA (M-3191)
KIMLIK = "rusya"


def main():
    Y = girdi.yukle()
    print("yerlesim:", len(Y))
    bulunan = []
    for y in Y:
        for sp in (y.get("s") or []):
            if sp.get("d") != KIMLIK:
                continue
            if not (sp.get("f", "") <= GUN < sp.get("t", "9999")):
                continue
            zincir = []
            for q in (y.get("s") or []):
                zincir.append("%s→%s %s" % (q.get("f"), q.get("t"), q.get("d")))
            bulunan.append({
                "ad": y.get("ad"), "lat": y.get("lat"), "lon": y.get("lon"),
                "donem": {"f": sp.get("f"), "t": sp.get("t"), "d": sp.get("d"),
                          "kaynak": sp.get("kaynak")},
                "zincir": zincir,
                "d_donemi_var_mi": bool(y.get("d")),
                "v_donemi_var_mi": bool(y.get("v")),
            })
            break

    print("\n🔴 HAYALET `%s` (kunye 1547-01-16 → 1917-03-15) · %s'de aktif: %d nokta\n"
          % (KIMLIK, GUN, len(bulunan)))
    for b in sorted(bulunan, key=lambda r: r["ad"]):
        print("  %-22s %7.3f,%7.3f   donem %s → %s   kaynak: %s"
              % (b["ad"], b["lat"], b["lon"], b["donem"]["f"], b["donem"]["t"],
                 b["donem"].get("kaynak") or "YOK"))
        for z in b["zincir"]:
            print("        %s" % z)
        print()

    # ── IKINCI UC: bu noktalarin cevresinde 1923'te hangi kimlik var?
    #    (ardil kimlik olcmeden oneri YAZILMAZ — §3.5.1)
    komsu = {}
    for b in bulunan:
        yakin = []
        for y in Y:
            if y.get("ad") == b["ad"]:
                continue
            dx = (y.get("lon", 0) - b["lon"]) * 0.74      # ~43°K'de boylam duzeltmesi
            dy = (y.get("lat", 0) - b["lat"])
            km = ((dx * dx + dy * dy) ** 0.5) * 111.0
            if km > 200:
                continue
            for sp in (y.get("s") or []):
                if sp.get("f", "") <= GUN < sp.get("t", "9999"):
                    yakin.append((round(km, 1), y.get("ad"), sp.get("d")))
                    break
        yakin.sort()
        komsu[b["ad"]] = yakin[:5]

    print("── IKINCI UC: 200 km icindeki EN YAKIN BES komsu ve 1923 kimlikleri ──")
    for ad, yk in komsu.items():
        print("  %s:" % ad)
        for km, kad, kim in yk:
            print("      %6.1f km  %-22s %s" % (km, kad, kim))

    json.dump({
        "_NOT": "§3.5 hayalet devlet olcumu — `rusya` kunyesi 1917-03-15'te bitiyor, "
                "veri 1923'te hala kullaniyor. YALNIZ OLCUM: duzeltme ONERILMEDI, "
                "cunku ardil kimligin PENCERESI olculmedi (§3.5.0 ARDIL sinifi).",
        "gun": GUN, "kimlik": KIMLIK, "nokta": len(bulunan),
        "noktalar": bulunan, "ikinci_uc_komsular": komsu,
    }, open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("\nyazildi:", CIKTI)


if __name__ == "__main__":
    main()
