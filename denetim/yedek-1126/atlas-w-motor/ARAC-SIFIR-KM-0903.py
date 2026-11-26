# -*- coding: utf-8 -*-
"""0 km CIFTLERI ARTEFAKT MI — zaman duyarli olcum.

DUNYA-AFRIKA-0903 buldu: bir NOKTA iki kunyeye ARDISIK ait olabilir.
"kunye A'nin butun noktalari x kunye B'nin butun noktalari" olcumu
AYNI NOKTAYI iki kumeye koyar ve 0 km der — oysa ortusme penceresinde
o nokta yalniz BIRINE aittir.

Onlar kendi 99 kunyesini yeniden olctu; CANLI devletler.js kimliklerini
OLCMEDI. Uc cift kaldi: hausa-sehir-devletleri↔sokoto · mali↔songhay ·
massina↔tekrur. Bu arac onlari olcer.
"""
import sys, os, io, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
import girdi

CIFT = [("hausa-sehir-devletleri", "sokoto"),
        ("mali", "songhay"),
        ("massina", "tekrur"),
        ("bate", "vasulu")]


def gun(s):
    q = str(s).split("-")
    try:
        return (int(q[0]), int(q[1]) if len(q) > 1 else 1,
                int(q[2]) if len(q) > 2 else 1)
    except (ValueError, IndexError):
        return None


def km(a, b):
    la1, lo1 = math.radians(a[0]), math.radians(a[1])
    la2, lo2 = math.radians(b[0]), math.radians(b[1])
    h = (math.sin((la2 - la1) / 2) ** 2 +
         math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(h))


Y = girdi.yukle(sessiz=True)


def donemler(kid):
    """(ad, lat, lon, f, t) — o kimligin SAHIP OLDUGU her dilim"""
    r = []
    for y in Y:
        if y.get("lat") is None:
            continue
        for p in (y.get("s") or []):
            if p.get("d") == kid and p.get("f") and p.get("t"):
                r.append((y["ad"], y["lat"], y["lon"], gun(p["f"]), gun(p["t"])))
    return r


for a, b in CIFT:
    A, B = donemler(a), donemler(b)
    print("=== %s ↔ %s ===" % (a, b))
    print("   nokta: %d ↔ %d" % (len(A), len(B)))
    if not A or not B:
        print("   ⚪ biri veride YOK — ölçülemedi")
        print()
        continue
    # NAIF: butun noktalar x butun noktalar
    naif = min(km((x[1], x[2]), (y[1], y[2])) for x in A for y in B)
    # ZAMAN DUYARLI: yalniz ES ZAMANLI dilimler, ve AYNI NOKTA HARIC
    es = []
    for x in A:
        for y in B:
            if x[0] == y[0]:
                continue                      # AYNI YERLESIM — ardillik
            if x[3] < y[4] and y[3] < x[4]:   # dilimler ORTUSUYOR
                es.append((km((x[1], x[2]), (y[1], y[2])), x[0], y[0]))
    print("   NAİF (bütün × bütün)      : %.2f km" % naif)
    if es:
        d, xa, yb = min(es)
        print("   ZAMAN DUYARLI (eş zamanlı, aynı nokta hariç): %.2f km"
              " (%s ↔ %s)" % (d, xa, yb))
        print("   eş zamanlı çift sayısı    : %d" % len(es))
        if naif < 1.0 and d > 1.0:
            print("   🔴 ARTEFAKT — naif 0 km, gerçek %.2f km" % d)
        else:
            print("   🟢 artefakt DEĞİL")
    else:
        print("   ⚪ EŞ ZAMANLI dilim YOK ⇒ çift hiç sahnede birlikte değil")
        print("   🔴 naif ölçüm 0 km diyordu ve BU TAMAMEN YANLIŞ")
    # ortak nokta var mi
    ortak = {x[0] for x in A} & {y[0] for y in B}
    if ortak:
        print("   ⚠️ ORTAK YERLEŞİM (ardıl sahiplik): %s"
              % ", ".join(sorted(ortak)[:5]))
    print()
