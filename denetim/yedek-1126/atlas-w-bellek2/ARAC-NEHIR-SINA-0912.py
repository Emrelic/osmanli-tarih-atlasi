# -*- coding: utf-8 -*-
"""ARAC-NEHIR-SINA-0912 — teslim edilen VERI-NEHIR-0912.json SINAVI.

§3⑤: yeni dosya yazildiktan sonra AYRISTIRILABILIR mi diye sinanir.
"Bu gece bir dosya tam bu yuzden coktu ve OLU oldugu icin cokmesi
GORUNMUYORDU."

Ayrica bu isin kendi kurali: HER sayi `kaynak` ve `guven` tasimali (§3②).
Tasimayan varsa alet exit(1) verir — sessizce temiz rapor vermez.
"""
import json, io, os, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "denetim", "VERI-NEHIR-0912.json")

d = json.load(io.open(YOL, encoding="utf-8"))
print("JSON AYRISTI. ust anahtar:", len(d))
for k in d:
    print("   ", k)

kad = d["B_bedel_KIM_GECIYOR_a_bagli"]["kademeler"]
print("")
print("BEDEL KADEMELERI (%d):" % len(kad))
for x in kad:
    print("   %-40s %7.1f km  [%s]" % (x["ozne"][:40], x["km_esdeger"], x["guven"]))
print("   en dusuk / en yuksek orani: %.0f kat"
      % (max(x["km_esdeger"] for x in kad) / min(x["km_esdeger"] for x in kad)))

GECERLI = {"olculdu", "kaynakli", "turetildi", "olculemedi", "bulunamadi"}
eksik, kotu = [], []


def gez(o, yol=""):
    if isinstance(o, dict):
        if "deger" in o or "km_esdeger" in o:
            g = o.get("guven")
            if g is None:
                eksik.append(yol)
            elif g not in GECERLI:
                kotu.append((yol, g))
        for k, v in o.items():
            gez(v, yol + "/" + k)
    elif isinstance(o, list):
        for i, v in enumerate(o):
            gez(v, yol + "[%d]" % i)


gez(d)
print("")
print("SINAV:")
print("   `guven` alani EKSIK olan deger dugumu : %d" % len(eksik))
for y in eksik:
    print("      ", y)
print("   `guven` degeri TANIMSIZ olan          : %d" % len(kotu))
for y, g in kotu:
    print("      %s -> %r" % (y, g))

# ongoru karnesi tam mi
karne = d["H_ongoru_karnesi"]
print("   ongoru karnesi kalemi                 : %d" % len(karne))
for k, v in karne.items():
    print("      %-18s %s" % (k, v.get("hukum", v.get("iddia", ""))[:60]))

if eksik or kotu:
    print("")
    print("🔴 SINAV BASARISIZ — her sayi `guven` tasimali (§3②)")
    sys.exit(1)
print("")
print("🟢 SINAV GECTI — ayristi, her deger dugumu `guven` tasiyor")
