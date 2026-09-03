# -*- coding: utf-8 -*-
"""adaylar.json + adaylar2.json -> adaylar_tum.json, ve 3 KM ON SINAVI.

3 km kurali (§11): yeni nokta 3 km icinde baska nokta var mi?
BAGLI evrende VE aday kumesinin KENDI icinde.
"""
import io
import json
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi                                              # noqa: E402

BURA = os.path.dirname(os.path.abspath(__file__))
A = json.load(io.open(os.path.join(BURA, "adaylar.json"), encoding="utf-8"))
B = json.load(io.open(os.path.join(BURA, "adaylar2.json"), encoding="utf-8"))
C = json.load(io.open(os.path.join(BURA, "adaylar3.json"), encoding="utf-8"))
D = json.load(io.open(os.path.join(BURA, "adaylar4.json"), encoding="utf-8"))
E = json.load(io.open(os.path.join(BURA, "adaylar5.json"), encoding="utf-8"))
G = json.load(io.open(os.path.join(BURA, "adaylar6.json"), encoding="utf-8"))
F = json.load(io.open(os.path.join(BURA, "adaylar_serit.json"), encoding="utf-8"))
for x in F:
    x["serit_15_25K"] = True
TUM = A + B + C + D + E + G + F
json.dump(TUM, io.open(os.path.join(BURA, "adaylar_tum.json"), "w",
                       encoding="utf-8"), ensure_ascii=False, indent=1)
print("aday: %d+%d+%d+%d+%d+%d + serit %d = %d"
      % (len(A), len(B), len(C), len(D), len(E), len(G), len(F), len(TUM)))


def km(a_lat, a_lon, b_lat, b_lon):
    t = math.pi / 180.0
    dp = (b_lat - a_lat) * t
    dl = (b_lon - a_lon) * t
    s = (math.sin(dp / 2) ** 2
         + math.cos(a_lat * t) * math.cos(b_lat * t) * math.sin(dl / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(min(1.0, s)))


Y = girdi.yukle(sessiz=True)
BAGLI = [(y["lat"], y["lon"], y.get("ad", "?")) for y in Y
         if isinstance(y.get("lat"), (int, float))
         and isinstance(y.get("lon"), (int, float))]

print("\n--- 3 KM ON SINAVI (bagli evren) ---")
n = 0
for a in TUM:
    for p in BAGLI:
        d = km(a["lat"], a["lon"], p[0], p[1])
        if d < 3.0:
            print("🔴 %.2f km  %s  <->  %s" % (d, a["ad"], p[2]))
            n += 1
print("bagli evrende 3 km alti: %d" % n)

print("\n--- 3 KM ON SINAVI (adaylarin kendi icinde) ---")
m = 0
for i in range(len(TUM)):
    for j in range(i + 1, len(TUM)):
        d = km(TUM[i]["lat"], TUM[i]["lon"], TUM[j]["lat"], TUM[j]["lon"])
        if d < 3.0:
            print("🔴 %.2f km  %s  <->  %s" % (d, TUM[i]["ad"], TUM[j]["ad"]))
            m += 1
print("aday ici 3 km alti: %d" % m)

print("\n--- KUTU SINAVI (15-72K / 170B-52B) ---")
k = 0
for a in TUM:
    if not (15.0 <= a["lat"] <= 72.0 and -170.0 <= a["lon"] <= -52.0):
        print("🔴 KUTU DISI  %s  %.3f %.3f" % (a["ad"], a["lat"], a["lon"]))
        k += 1
print("kutu disi: %d" % k)

print("\n--- AD CAKISMASI (bagli evrenle ayni ad) ---")
adlar = set(p[2] for p in BAGLI)
c = 0
for a in TUM:
    if a["ad"] in adlar:
        print("🔴 AD ZATEN VAR: %s" % a["ad"])
        c += 1
# adaylar arasi mukerrer ad
gor = {}
for a in TUM:
    gor[a["ad"]] = gor.get(a["ad"], 0) + 1
for ad, s in gor.items():
    if s > 1:
        print("🔴 ADAY ICINDE MUKERRER AD: %s (%d)" % (ad, s))
        c += 1
print("ad cakismasi: %d" % c)
print("\nSONUC: %s" % ("🔴 KIRMIZI VAR" if (n + m + k + c) else "🟢 KIRMIZI 0"))
