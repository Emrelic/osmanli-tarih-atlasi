# -*- coding: utf-8 -*-
"""BUTUN ADAY DOSYALARINDA AD CAKISMASI TARA — kosu oldurucu sinif.

girdi.py:1180  if y['ad'] in nereden:   ← TAM DIZGI, normallestirme YOK
⇒ cakisan ad `girdi.yukle`'de ValueError ATAR ve MOTOR HIC BASLAMAZ.
Mesafe ne olursa olsun: olculmus emsal 15 707 km (Roma).

Ayrica ADAYLAR ARASI cakismayi da tarar — iki bolge ayni adi
onerebilir ve ikisi de tek tek TEMIZ gorunur.
"""
import sys, os, io, json, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
import girdi

Y = girdi.yukle()
ix = {y["ad"]: y for y in Y}


def km(a, b):
    la1, lo1 = math.radians(a[0]), math.radians(a[1])
    la2, lo2 = math.radians(b[0]), math.radians(b[1])
    h = (math.sin((la2 - la1) / 2) ** 2 +
         math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(h))


def oku(yol):
    kay = []

    def topla(o):
        if isinstance(o, dict):
            if "ad" in o and "lat" in o and o.get("lat") is not None:
                kay.append(o)
            else:
                for v in o.values():
                    topla(v)
        elif isinstance(o, list):
            for e in o:
                topla(e)

    topla(json.load(io.open(yol, encoding="utf-8")))
    return kay


hepsi = {}
print("atlas ad kümesi : %d" % len(ix))
print()
print("① ATLASLA ÇAKIŞMA — girdi.yukle ValueError atar, MOTOR BAŞLAMAZ")
top = 0
for yol in sys.argv[1:]:
    if not os.path.exists(yol):
        print("   ⚪ %s — DOSYA YOK" % os.path.basename(yol))
        continue
    kay = oku(yol)
    ad = os.path.basename(yol)
    n = 0
    for k in kay:
        if k["ad"] in ix:
            o = ix[k["ad"]]
            d = km((k["lat"], k["lon"]), (o["lat"], o["lon"]))
            print("   🔴 %-26s %-22s %7.0f km  [%s]" % (ad[:26], k["ad"], d,
                                                       o.get("_kaynak")))
            n += 1
        hepsi.setdefault(k["ad"], []).append((ad, k["lat"], k["lon"]))
    print("   %-40s %3d kayıt · çakışma %d" % (ad, len(kay), n))
    top += n
print("   TOPLAM ÇAKIŞMA: %d" % top)

print()
print("② ADAYLAR ARASI ÇAKIŞMA — iki bölge aynı adı önerirse, ikisi de")
print("   tek tek TEMİZ görünür ve motor yine ölür")
n2 = 0
for a, yerler in sorted(hepsi.items()):
    if len(yerler) > 1:
        d = km((yerler[0][1], yerler[0][2]), (yerler[1][1], yerler[1][2]))
        print("   🔴 %-24s %s  %.0f km" % (a, " ↔ ".join(y[0] for y in yerler), d))
        n2 += 1
print("   TOPLAM: %d" % n2)
