# -*- coding: utf-8 -*-
import sys
from _gz import *
def newmoons(y1,m1,y2,m2):
    j1=jdn_julian(y1,m1,1); j2=jdn_julian(y2,m2,1)
    k=int((j1-2451550.09766)/29.530588861)-1
    out=[]
    while True:
        jd=2451550.09766+29.530588861*k+0.5+9/24  # UT -> JST gun sinirina yaklasik (JDN tam sayi gunu)
        d=int(jd)
        if d>j2: break
        if d>=j1: out.append(from_jdn_julian(d))
        k+=1
    return out
if __name__=='__main__':
    a=sys.argv[1:]
    print(newmoons(int(a[0]),int(a[1]),int(a[2]),int(a[3])))
