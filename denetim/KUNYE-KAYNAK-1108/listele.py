import sys,os,json,re
sys.path.insert(0,"arac")
import kaynak_guven as K
os.chdir(K.KOK)
T,_=K.tablo_oku(); S=K.Siniflayici(T)
_,F,KK,KU=K.evren_yukle()
out=[]
for k in KU:
    d=S.damgala(k["kaynak"],None)
    out.append({"id":k["anahtar"],"ad":k["b"],"f":k["t"],"bolge":k["bolge"],"kaynak":k["kaynak"],"damga":d["damga"],"alt":d["alt"]})
json.dump(out,open("denetim/KUNYE-KAYNAK-1108/kunyeler.json","w",encoding="utf-8"),ensure_ascii=False)
from collections import Counter
print(Counter((o["damga"],o["alt"]) for o in out))
