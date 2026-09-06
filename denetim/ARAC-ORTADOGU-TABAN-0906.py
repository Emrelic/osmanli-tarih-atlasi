# -*- coding: utf-8 -*-
"""ORTADOĞU — TABANI KENDİM ÖLÇÜYORUM (`B10`).

Şartname "Ortadoğu-İran 450 + Kuzey Afrika 182 = 632" diyor ve
6 Eylül'e ait. Bu ölçüm onu devralmaz, yeniden kurar.

🔴 Bölge, kimliğin `bolge:` alanından DEĞİL, noktanın KOORDİNATINDAN
   alınır — kimlik bölgesi bir polity özniteliği, coğrafî kutu değil
   (`ingiltere` Ortadoğu'da 100+ nokta boyuyor ama `bolge` bati-avrupa).
   İki ölçüt de basılır ve AYRIŞMA gösterilir.
🔴 VERİ YAZMAZ.
"""
import io
import os
import sys

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi  # noqa: E402

GUN = "1923-10-28"

# coğrafî kutular — ŞARTNAMENİN "Ortadoğu-İran" ve "Kuzey Afrika"sı
KUTU = {
    "ORTADOĞU-İRAN": (12.0, 45.0, 25.0, 75.0),      # G,K enlem · B,D boylam
    "KUZEY AFRİKA": (19.0, 38.0, -18.0, 25.0),
}


def sahip(z, g):
    for p in (z.get("d") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "OSMANLI"
    for p in (z.get("v") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "OSMANLI-tabi"
    for p in (z.get("s") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return p.get("d") or "(kimliksiz)"
    return None


Y = girdi.yukle(sessiz=True)
print("═══ TABAN — kendi ölçümüm · kesit %s" % GUN)
print("   canlı nokta (toplam) : %d" % len(Y))

toplam = {}
for ad, (g1, g2, b1, b2) in KUTU.items():
    icinde = [z for z in Y
              if z.get("lat") is not None
              and g1 <= z["lat"] <= g2 and b1 <= z["lon"] <= b2]
    sahipli = [(z, sahip(z, GUN)) for z in icinde]
    kimlik = {}
    for z, s in sahipli:
        kimlik[s] = kimlik.get(s, 0) + 1
    sahipsiz = kimlik.pop(None, 0)
    toplam[ad] = len(icinde)
    print("\n── %s   kutu %s..%s°K / %s..%s°D" % (ad, g1, g2, b1, b2))
    print("   nokta %d · sahipli %d · 🔴 SAHİPSİZ %d · kimlik %d"
          % (len(icinde), len(icinde) - sahipsiz, sahipsiz, len(kimlik)))
    for k, n in sorted(kimlik.items(), key=lambda x: -x[1]):
        print("      %-30s %d" % (k, n))

print("\n═══ ŞARTNAME İLE KIYAS")
print("   şartname : Ortadoğu-İran 450 + Kuzey Afrika 182 = 632")
print("   ölçüm    : %d + %d = %d"
      % (toplam["ORTADOĞU-İRAN"], toplam["KUZEY AFRİKA"],
         sum(toplam.values())))
