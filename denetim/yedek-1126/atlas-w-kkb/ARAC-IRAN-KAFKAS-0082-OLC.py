# -*- coding: utf-8 -*-
"""IRAN-KAFKAS-0082 ölçüm aleti — bir GÜN + kutu için yerleşimlerin sahibini basar.

Sahiplik önceliği motorla aynı (uret_petek.py:6176-6181): d: → OSMANLI,
v: → TABI, yoksa o günün s: dönemi. isg: ayrı katmandır (taralı), ayrıca basılır.

Kullanım:  py denetim/ARAC-IRAN-KAFKAS-0082-OLC.py <gun> <lat0> <lat1> <lon0> <lon1> [ad1,ad2,...]
"""
import sys, io
sys.path.insert(0, "arac")
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi

def sahip(y, a):
    for dn in y.get("d") or []:
        if dn["f"] <= a < dn["t"]:
            return "OSMANLI"
    for dn in y.get("v") or []:
        if dn["f"] <= a < dn["t"]:
            return "TABI(" + str(dn.get("k", "")) + ")"
    for sp in y.get("s") or []:
        if sp["f"] <= a < sp["t"]:
            return sp["d"]
    return "—SAHIPSIZ/YOK—"

def isg(y, a):
    return ",".join(p["d"] for p in (y.get("isg") or []) if p["f"] <= a < p["t"])

def main():
    gun = sys.argv[1]
    la0, la1, lo0, lo1 = map(float, sys.argv[2:6])
    adlar = set(sys.argv[6].split(",")) if len(sys.argv) > 6 else None
    Y = girdi.yukle(sessiz=True)
    satir = []
    for y in Y:
        if adlar is not None:
            if y["ad"] not in adlar:
                continue
        elif not (la0 <= y["lat"] <= la1 and lo0 <= y["lon"] <= lo1):
            continue
        satir.append((y["lat"], y["lon"], y["ad"], sahip(y, gun), isg(y, gun), y["_kaynak"]))
    for s in sorted(satir, key=lambda r: (-r[0], r[1])):
        print(f"{s[0]:7.3f} {s[1]:7.3f}  {s[2]:<28} {s[3]:<22} {('isg:'+s[4]) if s[4] else '':<14} {s[5]}")
    print(f"# {len(satir)} nokta · gün {gun}")

if __name__ == "__main__":
    main()
