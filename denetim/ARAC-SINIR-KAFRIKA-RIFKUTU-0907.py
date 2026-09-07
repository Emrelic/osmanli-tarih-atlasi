# -*- coding: utf-8 -*-
"""RİF ÇEKİRDEĞİ KUTUSU — 1.MURAT'ın hipotezi sınanıyor (M-3237)

HİPOTEZ (onun, 🟡 doğrulanmamış): Rif Cumhuriyeti 1921-1926 gerçek;
künye `t:1923-10-29` bir PENCERE İŞARETİ; veri 1924-1926 ufkun dışında,
DOĞRU olarak. Ve 1921-1923 arası Rif çekirdeği ATLASTA NOKTASI OLMAYAN
bir bölge OLABİLİR ⇒ kusur künyede değil `§2` noktasızlığında.

SINAV: Rif çekirdeği kutusunda atlas noktası var mı, hangi kimlikte?

🔴 VE HİPOTEZİ TABAN YAPMIYORUM. Ölçüm onu çürütebilir; çürütürse
   söyleyeceğim. İki ihtimali de ÖNCEDEN yazıyorum ki sonuç hangisi
   çıkarsa çıksın mazeret üretemeyeyim:
   ① kutuda Rif İÇ BÖLGESİNDE nokta YOK  ⇒ hipotez AYAKTA (§2 noktasızlığı)
   ② kutuda nokta VAR ve `fas`/başka kimlikte ⇒ hipotez ÇÜRÜR; o zaman
     kimlik gerçekten yazılabilirdi ve yazılmamış ⇒ künye/veri kusuru
🔴 Ve bir ÜÇÜNCÜ ihtimal de yazıyorum, çünkü ikisi tüketmiyor:
   ③ kutudaki noktalar YALNIZ İspanyol egemenlik adacıkları (Alhucemas ·
     Peñón de Vélez) ise, onlar Rif İÇ BÖLGESİNİ temsil ETMEZ — coğrafî
     olarak kutunun içinde, siyasî olarak Rif'in dışında.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

GUN = "1923-10-28"
# Rif cekirdegi: Acdir/el-Huseyme merkezli, Tetuan'dan Melilla'ya kiyi seridi
# ve ic dagilik kesim. Genis tutuldu ki hipotez KOLAY curusun.
KUTU = dict(lat0=34.2, lat1=35.9, lon0=-6.0, lon1=-2.5)


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


def main():
    Y = girdi.yukle()
    ic = []
    for y in Y:
        if y.get("lon") is None or y.get("lat") is None:
            continue
        if (KUTU["lat0"] <= y["lat"] <= KUTU["lat1"]
                and KUTU["lon0"] <= y["lon"] <= KUTU["lon1"]):
            ic.append(y)
    ic.sort(key=lambda y: -y["lat"])

    print("KUTU: %.1f-%.1f K  ·  %.1f-%.1f D   (Rif cekirdegi, GENIS)"
          % (KUTU["lat0"], KUTU["lat1"], KUTU["lon0"], KUTU["lon1"]))
    print("SORGU GUNU: %s" % GUN)
    print("nokta: %d" % len(ic))
    print("")
    print("%-30s %8s %8s  %-22s %s" % ("ad", "lat", "lon", "1923-10-28", "tur"))
    print("-" * 88)
    kimlik = {}
    for y in ic:
        s = sahip(y, GUN)
        kimlik[s] = kimlik.get(s, 0) + 1
        print("%-30s %8.3f %8.3f  %-22s %s"
              % (y["ad"], y["lat"], y["lon"], str(s), str(y.get("tur") or "")))
    print("")
    print("kimlik dagilimi: %s" % kimlik)

    print("")
    print("=== HIPOTEZ SINAVI ===")
    ispanyol = [y for y in ic if sahip(y, GUN) == "ispanya"]
    otekiler = [y for y in ic if sahip(y, GUN) != "ispanya"]
    print("Ispanyol egemenlik noktasi : %d  (%s)"
          % (len(ispanyol), ", ".join(y["ad"] for y in ispanyol)))
    print("Ispanyol OLMAYAN nokta     : %d  (%s)"
          % (len(otekiler), ", ".join(y["ad"] for y in otekiler)))
    print("")
    # Rif ic bolgesi: kiyi seridinin GUNEYI degil, Acdir-Targuist ekseni
    # Daha dar bir kutu: 34.6-35.4 K / 5.0-3.2 D
    dar = [y for y in ic if 34.6 <= y["lat"] <= 35.4 and -5.0 <= y["lon"] <= -3.2]
    print("DAR KUTU (34,6-35,4 K / 5,0-3,2 B — Acdir/Targuist ekseni): %d nokta"
          % len(dar))
    for y in dar:
        print("   %-28s %.3f, %.3f  -> %s" % (y["ad"], y["lat"], y["lon"],
                                              sahip(y, GUN)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
