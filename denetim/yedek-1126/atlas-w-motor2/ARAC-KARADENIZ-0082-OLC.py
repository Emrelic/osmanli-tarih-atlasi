# -*- coding: utf-8 -*-
"""KARADENIZ-0082 olcum aleti — yerlesimlerin donemlerini (d/v/s/isg) okur.

  py denetim/ARAC-KARADENIZ-0082-OLC.py --ad Ibrail Yergogu
  py denetim/ARAC-KARADENIZ-0082-OLC.py --kutu lat1 lon1 lat2 lon2 --gun YYYY-AA-GG
  py denetim/ARAC-KARADENIZ-0082-OLC.py --kutu ... --tum     (butun donemler)

Evren: girdi.GIRDI_DOSYALARI (arac/_yer_ara.py ile ayni). _yer_ara.py'den farki:
isg: (isgal) alanini da okur ve donemleri tek satirda basar.
"""
import sys, os, io, contextlib

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
with contextlib.redirect_stdout(io.StringIO()):
    import girdi
    Y = girdi.yukle()
if isinstance(Y, tuple):
    Y = Y[0]


def donemler(y):
    out = []
    for alan in ("d", "v", "s", "isg"):
        for p in y.get(alan) or []:
            kim = {"d": "OSM", "v": "tabi"}.get(alan, "")
            if alan == "v" and p.get("kid"):
                kim = "tabi:" + p["kid"]
            if alan in ("s", "isg"):
                kim = alan + ":" + str(p.get("d", "?"))
            out.append((p.get("f", ""), p.get("t", ""), kim))
    return sorted(out)


def sahip(y, gun):
    r = []
    for f, t, kim in donemler(y):
        if f <= gun < t:
            r.append(kim)
    return " + ".join(r) or "-"


def satir(y):
    return "%-30s %7.3f %8.3f k%s [%s]" % (
        y["ad"][:30], y["lat"], y["lon"], y.get("k", 0), y.get("_dosya", y.get("dosya", "")))


a = sys.argv[1:]
gun = None
tum = "--tum" in a
if tum:
    a.remove("--tum")
if "--gun" in a:
    i = a.index("--gun"); gun = a[i + 1]; del a[i:i + 2]

if a and a[0] == "--kutu":
    la1, lo1, la2, lo2 = (float(x) for x in a[1:5])
    ic = [y for y in Y if la1 <= y["lat"] <= la2 and lo1 <= y["lon"] <= lo2]
    print("KUTU %.2f-%.2fK / %.2f-%.2fD : %d nokta (evren %d)" % (la1, la2, lo1, lo2, len(ic), len(Y)))
    for y in sorted(ic, key=lambda x: (-x["lat"], x["lon"])):
        print(" ", satir(y), (" => " + sahip(y, gun)) if gun else "")
        if tum:
            for f, t, kim in donemler(y):
                print("      %s → %s  %s" % (f, t, kim))
elif a and a[0] == "--ad":
    for q in a[1:]:
        ql = q.lower()
        for y in Y:
            if ql in y["ad"].lower():
                print(satir(y), (" => " + sahip(y, gun)) if gun else "")
                for f, t, kim in donemler(y):
                    print("      %s → %s  %s" % (f, t, kim))
else:
    print(__doc__)
