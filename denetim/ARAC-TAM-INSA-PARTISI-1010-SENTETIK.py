# SENTETIK: Sippar'a NEGATIF-YIL-OLCUM s3 desenindeki iki negatif s: dilimi (arada bilerek bosluk). ac/kapa.
import sys,io
yol=sys.argv[1]+"/data/yerlesimler_nokta_ortadogu_0917.js"; mod=sys.argv[2]
t=io.open(yol,encoding="utf-8",newline="").read()
i=t.index('ad:"Sippar (Tell Abu Habbah)"'); j=t.index("s:[]",i)
YENI='s:[{d:"ahameni",f:"-0538-01-01",t:"-0330-10-22"},{d:"selefki",f:"-0311-01-01",t:"-0140-07-03"}]'
if mod=="ac": t=t[:j]+YENI+t[j+4:]
else:
    j=t.index(YENI,i); t=t[:j]+"s:[]"+t[j+len(YENI):]
io.open(yol,"w",encoding="utf-8",newline="").write(t); print(mod,"tamam")
