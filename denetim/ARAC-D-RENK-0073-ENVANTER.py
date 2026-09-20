# -*- coding: utf-8 -*-
"""D-RENK-0073 — A bolumu: hat envanteri (sinif, cift, tarih, uzunluk)."""
import io, json, math, collections, sys

SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\0f85f827-a96b-4a7c-bfd6-a06cab079a08\scratchpad"
d = json.load(io.open(SP + r"\hatlar.json", encoding="utf-8"))
K = d["kayitlar"]

def km(hat):
    t = 0.0
    for i in range(len(hat) - 1):
        (x1, y1), (x2, y2) = hat[i], hat[i + 1]
        dy = (y2 - y1) * 111.32
        dx = (x2 - x1) * 111.32 * math.cos(math.radians((y1 + y2) / 2))
        t += math.hypot(dx, dy)
    return t

print("== A1 KAPSAM ==")
print("kayit:", len(K), "· kova:", len(d["kovalar"]))
sinif = collections.Counter(k.get("sinif") or "(yok)" for k in K)
kat = collections.Counter(k.get("kategori") or "(yok)" for k in K)
print("sinif:", dict(sinif))
print("kategori:", dict(kat))
print("sol_taraf dolu:", sum(1 for k in K if k.get("sol_taraf")), "/", len(K))
print("hat noktasi yok (kutu kaydi):", sum(1 for k in K if not k["nokta"]))
print("toplam nokta:", sum(k["nokta"] for k in K))

ciftler = collections.Counter()
devletler = collections.Counter()
for k in K:
    tr = k.get("taraflar") or []
    if len(tr) == 2:
        ciftler[tuple(sorted(tr))] += 1
    for t in tr:
        devletler[t] += 1
print("essiz ulke cifti:", len(ciftler), "· essiz devlet:", len(devletler))

uz = 0.0
for k in K:
    if k["hat"]:
        uz += km(k["hat"])
print("toplam hat uzunlugu: %.0f km" % uz)

print()
print("== A2 TARIH ==")
fl = sorted(k["f"] for k in K if k.get("f"))
tl = sorted((k.get("t") or "") for k in K if k.get("t"))
print("f araligi:", fl[0], "->", fl[-1])
print("t araligi:", tl[0], "->", tl[-1])

def yururlukte(tarih):
    n = 0
    for k in K:
        f = k.get("f") or "0000-01-01"
        t = k.get("t") or "9999-12-31"
        if f <= tarih <= t and k["nokta"]:
            n += 1
    return n

for tarih in ["1821-09-15", "1830-01-01", "1878-07-13", "1900-01-01",
              "1914-07-28", "1918-11-11", "1923-10-29"]:
    n = yururlukte(tarih)
    print("  %s : %4d hat (%%%.0f)" % (tarih, n, 100.0 * n / len(K)))

print()
print("== A3 SINIF x YURURLUK (1923-10-29 ve 1821-09-15) ==")
for tarih in ["1821-09-15", "1923-10-29"]:
    c = collections.Counter()
    for k in K:
        f = k.get("f") or "0000-01-01"
        t = k.get("t") or "9999-12-31"
        if f <= tarih <= t and k["nokta"]:
            c[k.get("sinif") or "(yok)"] += 1
    print(" ", tarih, dict(c))

print()
print("== A4 EN COK HAT OLAN 15 DEVLET ==")
for ad, n in devletler.most_common(15):
    print("  %-28s %3d" % (ad, n))
