# -*- coding: utf-8 -*-
"""TEBRIZ-1388-KARAKOYUNLU-1006 — SALT OKUR ölçüm.
Azerbaycan/Arrân/Doğu Anadolu kutusunda 1380-1410 penceresine dokunan s:/v:/isg:
dönemlerini dosya:satır ile basar; 1388/1390/1392/1394 günlerinde sahibi sayar.
Hiçbir dosyaya yazmaz. Kök __file__'dan bulunur."""
import os, sys, io, re, collections
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

KUTU = (36.0, 41.6, 43.0, 50.5)  # lat_min, lat_max, lon_min, lon_max
GUNLER = ["1386-06-01", "1388-06-01", "1390-06-01", "1392-06-01", "1394-06-01", "1400-06-01", "1405-06-01"]


def satir_bul(dosya, ad):
    yol = os.path.join(KOK, "data", dosya)
    for i, s in enumerate(io.open(yol, encoding="utf-8"), 1):
        if re.search(r'ad:\s*"' + re.escape(ad) + '"', s):
            return i
    return None


def sahip(y, gun):
    for p in y.get("s") or []:
        if p["f"] <= gun < p["t"]:
            return p["d"]
    return "-"


Y = girdi.yukle(sessiz=True)
sec = [y for y in Y if KUTU[0] <= y["lat"] <= KUTU[1] and KUTU[2] <= y["lon"] <= KUTU[3]]
print(f"kutu {KUTU}: {len(sec)} nokta")
say = {g: collections.Counter() for g in GUNLER}
for y in sorted(sec, key=lambda y: (-y["lat"], y["lon"])):
    for g in GUNLER:
        say[g][sahip(y, g)] += 1
    ilgili = []
    for kat in ("s", "v", "isg", "d"):
        for p in y.get(kat) or []:
            f, t = p.get("f", ""), p.get("t", "")
            if f < "1411" and t > "1379":
                ilgili.append(f'{kat}:{f}→{t} {p.get("d") or p.get("v") or p.get("kid") or ""}')
    if ilgili:
        print(f'{y["_kaynak"]}:{satir_bul(y["_kaynak"], y["ad"])}  {y["ad"]} ({y["lat"]},{y["lon"]})  ' + " | ".join(ilgili))
print()
for g in GUNLER:
    print(g, dict(say[g].most_common()))
