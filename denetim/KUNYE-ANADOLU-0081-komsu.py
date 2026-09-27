"""KUNYE-ANADOLU-0081 — bir kimliğin bir gündeki yerleşimleri kaç BİTİŞİK parça? (yaklaşık)

Yöntem: motor evrenindeki (girdi.yukle) bütün noktaların Delaunay komşuluğu (= düz Voronoi
komşuluğu). ⚠️ YAKLAŞIKTIR: motor peteği kara maskesi, nehir/sırt yaslanması ve göllerle
keser; düz Voronoi komşuluğu motorun çizdiğinden FAZLA bitişiklik görebilir (deniz aşırı
komşuluk dahil). Bu yüzden 500 km'den uzun kenarlar atılır. Hüküm motor ÇIKTISIYLA teyit
edilmelidir; bu alet yalnız "eksklavı hangi nokta doğuruyor / hangi atama kapatır" sorusunu
ölçer. Ek atama simülasyonu: --ata Ad=kimlik,Ad=kimlik (o gün için sahibi değiştirilmiş say).

Kullanım: py denetim/KUNYE-ANADOLU-0081-komsu.py <gün> <kimlik> [--ata "Erzincan=eretna"]
"""
import math
import os
import sys

import numpy as np
from scipy.spatial import Delaunay

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.path.insert(0, os.path.join(KOK, "denetim"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

Y = [y for y in girdi.yukle(sessiz=True) if isinstance(y.get("lat"), (int, float))]


def sahip(y, g):
    for p in y.get("d") or []:
        if p["f"] <= g < p["t"]:
            return "osmanli"
    for p in y.get("v") or []:
        if p["f"] <= g < p["t"]:
            return "tabi:" + (p.get("kid") or p.get("k") or "")
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return "s:" + p["d"]
    return ""


def km(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a["lat"], a["lon"], b["lat"], b["lon"]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))


g, kim = sys.argv[1], sys.argv[2]
ata = {}
if "--ata" in sys.argv:
    for s in sys.argv[sys.argv.index("--ata") + 1].split(","):
        a, b = s.split("=")
        ata[a] = b
sah = [("s:" + ata[y["ad"]]) if y["ad"] in ata else sahip(y, g) for y in Y]
hedef = {"s:" + kim, "tabi:" + kim}
P = np.array([[y["lon"] * math.cos(math.radians(y["lat"])), y["lat"]] for y in Y])
tri = Delaunay(P)
kom = {i: set() for i in range(len(Y))}
for s in tri.simplices:
    for i in s:
        for j in s:
            if i != j and km(Y[i], Y[j]) < 500:
                kom[i].add(j)
uye = [i for i in range(len(Y)) if sah[i] in hedef]
gor, parca = set(), []
for i in uye:
    if i in gor:
        continue
    yig, p = [i], []
    gor.add(i)
    while yig:
        k = yig.pop()
        p.append(k)
        for j in kom[k]:
            if j not in gor and sah[j] in hedef:
                gor.add(j)
                yig.append(j)
    parca.append(p)
parca.sort(key=len, reverse=True)
print("%s %s%s → %d yerleşim · %d parça" % (g, kim, (" (ata: %s)" % ata) if ata else "", len(uye), len(parca)))
for p in parca:
    ad = sorted(Y[i]["ad"] for i in p)
    print("   parça %d nokta: %s" % (len(p), ", ".join(ad[:25])))
    if len(parca) > 1 and p is not parca[0]:
        sin = sorted({j for i in p for j in kom[i] if sah[j] not in hedef}, key=lambda j: Y[j]["lon"])
        print("      çevresindeki yabancı komşular: " + ", ".join("%s[%s]" % (Y[j]["ad"], sah[j]) for j in sin))
