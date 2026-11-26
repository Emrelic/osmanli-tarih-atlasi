# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — H-0009'un acik biraktigi kusuru OLCER (SALT OKUR).

H-0007'nin yamasi Yanikkale'yi (Gyor) duzeltti: kayit "ortacag Macar
Kralligi" ile "Mohac sonrasi Habsburg Kraliyet Macaristani"ni ayirmiyordu;
`macaristan 1281->1594` tek blogu Mohac gununde (1526-08-29) bolundu.

H-0009 notu ayni kusurun Uyvar ve Nitra'da SURDUGUNU soyluyor. Bu alet
kusurun BUGUNKU BUYUKLUGUNU olcer: `avusturya` donemi 1526-08-29'DAN ONCE
baslayan kac nokta var?

ONGORU (olcumden ONCE yazildi, D022):
    Uyvar + Nitra kesin (H-0009 adlariyla sayiyor). Toplamin 2-12 arasi
    cikmasini bekliyorum; 12'den cok cikarsa kusur "iki komsu" degil
    BOLGESEL demektir ve tek tek yama yanlis carredir.
"""
import os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

MOHAC = "1526-08-29"
Y = girdi.yukle(sessiz=True)

erken = []
for y in Y:
    for p in (y.get("s") or []):
        if p.get("d") == "avusturya" and (p.get("f") or "9999") < MOHAC:
            erken.append((p.get("f"), p.get("t"), y.get("ad"),
                          y.get("lat"), y.get("lon")))
erken.sort()

print("# taban: %d nokta · %d girdi dosyasi"
      % (len(Y), len(girdi.GIRDI_DOSYALARI)))
print("# olcut: s: donemi d=='avusturya' VE f < %s (Mohac)" % MOHAC)
print("# BULUNAN: %d donem" % len(erken))
print()
for f, t, ad, lat, lon in erken:
    print("  %-26s %s -> %s   (%s, %s)" % (ad, f, t, lat, lon))

print()
print("# 1281-01-01'de baslayanlar: %d"
      % sum(1 for f, _, _, _, _ in erken if f == "1281-01-01"))
