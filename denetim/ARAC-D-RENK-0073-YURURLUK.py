# -*- coding: utf-8 -*-
"""D-RENK-0073 — K: "O TARIHTE GECERLI MI?" (DALGA-0074 H-0009/H-0006)
Hat kayitlarinin zaman penceresi var mi, guvenilir mi, taraflarinin kunyesiyle
tutarli mi (hayalet cizgi)."""
import io, json, collections, datetime

SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\0f85f827-a96b-4a7c-bfd6-a06cab079a08\scratchpad"
K = json.load(io.open(SP + r"\hatlar.json", encoding="utf-8"))["kayitlar"]
KUNYE = {d["id"]: d for d in json.load(io.open(SP + r"\kunye.json", encoding="utf-8"))}
GEO = [k for k in K if k["nokta"] >= 2]          # cizilebilen kayitlar

def gun(s):
    try:
        return datetime.date(*map(int, s.split("-")[:3]))
    except Exception:
        return None

print("== K1 · PENCERE VAR MI ==")
print("  cizilebilen kayit:", len(GEO), "/", len(K))
print("  f alani dolu:", sum(1 for k in GEO if k.get("f")))
print("  t alani dolu:", sum(1 for k in GEO if k.get("t")))
son = collections.Counter(k.get("t") for k in GEO)
print("  t = 1923-10-29 (verinin tasarim gunu):", son.get("1923-10-29", 0),
      "(%%%.0f)" % (100.0 * son.get("1923-10-29", 0) / len(GEO)))
print("  en sik 6 bitis tarihi:", son.most_common(6))
uzun = []
for k in GEO:
    a, b = gun(k.get("f") or ""), gun(k.get("t") or "")
    if a and b:
        uzun.append(((b - a).days / 365.25, k["id"]))
uzun.sort(reverse=True)
if uzun:
    ort = sum(u for u, _ in uzun) / len(uzun)
    print("  pencere uzunlugu: ortalama %.1f yil · medyan %.1f yil · en uzun %.0f yil (%s)"
          % (ort, uzun[len(uzun)//2][0], uzun[0][0], uzun[0][1]))

print()
print("== K2 · HAYALET CIZGI: pencere, tarafin KUNYESINI asiyor mu ==")
asan, asma_gun, ornek = 0, [], []
kunyesiz = collections.Counter()
for k in GEO:
    hf, ht = gun(k.get("f") or ""), gun(k.get("t") or "")
    if not hf or not ht:
        continue
    for t in (k.get("taraflar") or []):
        ku = KUNYE.get(t)
        if not ku:
            kunyesiz[t] += 1
            continue
        kf, kt = gun(ku.get("f") or "0001-01-01"), gun(ku.get("t") or "9999-12-31")
        if kf is None:
            kf = datetime.date(1, 1, 1)
        if kt is None:
            kt = datetime.date(9999, 12, 31)
        d1 = (kf - hf).days          # hat kunyeden ONCE basliyor
        d2 = (ht - kt).days          # hat kunyeden SONRA bitiyor
        if d1 > 0 or d2 > 0:
            asan += 1
            asma_gun.append(max(d1, 0) + max(d2, 0))
            ornek.append((max(d1, 0) + max(d2, 0), k["id"], t,
                          "%s..%s" % (k.get("f"), k.get("t")),
                          "%s..%s" % (ku.get("f"), ku.get("t"))))
print("  taraf-kayit ciftinde kunye asimi:", asan, "/", sum(len(k.get("taraflar") or []) for k in GEO))
if asma_gun:
    asma_gun.sort()
    print("  asim (yil): medyan %.1f · ortalama %.1f · en buyuk %.1f"
          % (asma_gun[len(asma_gun)//2]/365.25, sum(asma_gun)/len(asma_gun)/365.25, asma_gun[-1]/365.25))
etkilenen = set(o[1] for o in ornek)
print("  etkilenen KAYIT sayisi:", len(etkilenen), "(%%%.0f)" % (100.0*len(etkilenen)/len(GEO)))
print("  kunyesi devletler.js'te OLMAYAN taraf:", len(kunyesiz),
      dict(kunyesiz.most_common(6)) if kunyesiz else "")
print("  --- en buyuk 12 asim ---")
for g, hid, t, hp, kp in sorted(ornek, reverse=True)[:12]:
    print("   %5.0f yil  %-26s taraf=%-22s hat[%s] kunye[%s]" % (g/365.25, hid, t, hp, kp))

print()
print("== K3 · EMRE'NIN IKI GORSELI: O GUN HANGI KAYIT CIZILIYOR ==")
for ad, GUN, kutu in [("H-0009 Turkmencay", "1828-02-22", (43.90, 37.02, 44.84, 39.85)),
                      ("H-0006 Londra", "1827-07-06", (1.94, 48.87, 7.83, 53.74))]:
    print(" ", ad, GUN, "kutu", kutu)
    n = 0
    for k in GEO:
        f, t = k.get("f") or "0000-01-01", k.get("t") or "9999-12-31"
        if not (f <= GUN < t):          # d_katman.js: f <= gun < t
            continue
        xs = [p[0] for p in k["hat"]]; ys = [p[1] for p in k["hat"]]
        if max(xs) < kutu[0] or min(xs) > kutu[2] or max(ys) < kutu[1] or min(ys) > kutu[3]:
            continue
        n += 1
        tar = k.get("taraflar") or []
        oms = []
        for tt in tar:
            ku = KUNYE.get(tt)
            oms.append("%s[%s..%s]" % (tt, (ku or {}).get("f"), (ku or {}).get("t")) if ku else tt + "[KUNYE YOK]")
        print("    %-28s sinif=%-4s %s..%s  taraf: %s" % (k["id"], k.get("sinif"), k.get("f"), k.get("t"), " / ".join(oms)))
    print("    kutuda o gun cizilen hat:", n)
