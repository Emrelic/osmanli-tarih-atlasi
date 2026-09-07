# -*- coding: utf-8 -*-
"""20 MEKANIK `kid` TAMAMLANSA ETIKET KAC OLUR?

Olculdu: 157 kidsiz donemin 20'si verinin KENDI sozlugunden mekanik
baglanabiliyor (14 tek anlamli `k`->`kid` eslesmesi, 0 cok anlamli).
Soru: o 20 inince mukerrer etiketler KAPANIR MI?

Bu bir SIMULASYON — veriye dokunmaz, bellekte uygular.
"""
import collections
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi   # noqa: E402

Y = girdi.yukle(sessiz=True)
DEV = {d["id"]: d for d in girdi.oku_devletler() if d.get("id")}
if len(Y) < 3000:
    raise SystemExit("SESSIZ SIFIR")

sozluk = collections.defaultdict(collections.Counter)
for y in Y:
    for p in (y.get("v") or []):
        if p.get("k") and p.get("kid"):
            sozluk[p["k"]][p["kid"]] += 1
tek = {k: list(v)[0] for k, v in sozluk.items() if len(v) == 1}

GUNLER = ["1500-06-15", "1600-06-15", "1683-07-14", "1830-06-15", "1900-06-15"]


def etiketler(g, tamamla):
    kume = set()
    for y in Y:
        dn = next((p for p in (y.get("v") or [])
                   if p.get("f") and p.get("t") and p["f"] <= g < p["t"]), None)
        if dn is None:
            continue
        kid = dn.get("kid")
        if not kid and tamamla and dn.get("k") in tek:
            kid = tek[dn["k"]]
        if kid:
            ad = (DEV.get(kid) or {}).get("ad") or kid
        else:
            ad = dn.get("k")
        if ad:
            kume.add((ad, dn.get("statu") or "vassal"))
    return kume


print("=" * 68)
print("%-13s %-8s %-8s %s" % ("tarih", "BUGUN", "20 SONRA", "fark"))
print("=" * 68)
for g in GUNLER:
    a, b = etiketler(g, False), etiketler(g, True)
    print("%-13s %-8d %-8d %+d" % (g, len(a), len(b), len(b) - len(a)))
    for x in sorted(a - b):
        print("     🟢 KAPANDI  %s (%s)" % (x[0][:44], x[1]))
    for x in sorted(b - a):
        print("     🔴 DOGDU    %s (%s)" % (x[0][:44], x[1]))

print("\n" + "=" * 68)
print("20 SONRASI ETIKET LISTESI — 1683-07-14")
print("=" * 68)
for ad, st in sorted(etiketler("1683-07-14", True)):
    print("   %-48s (%s)" % (ad[:48], st))
