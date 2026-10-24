# -*- coding: utf-8 -*-
# ortalama yeniay (+-1 gun), Julyen. kullanim: py _yeniay.py YIL
import sys, io
sys.path.insert(0, '.')
from _gz import jdn_jul, jul_from_jdn, gz
SYN = 29.530588853
REF = 2451550.26  # 2000-01-06 18:14 UT yeniay (JD)
def newmoons(y):
    j0 = jdn_jul(y - 1, 11, 1)
    j1 = jdn_jul(y, 12, 31)
    k = int((j0 - REF) // SYN)
    out = []
    while True:
        jd = REF + k * SYN
        if jd > j1:
            break
        if jd >= j0:
            out.append(int(jd + 0.5))
        k += 1
    return out
if __name__ == '__main__':
    y = int(sys.argv[1])
    for j in newmoons(y):
        print('%04d-%02d-%02d %s' % (jul_from_jdn(j) + (gz(j),)))
