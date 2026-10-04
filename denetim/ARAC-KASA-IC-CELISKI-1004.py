# KASA 4 Ekim 2026 - YALNIZ OLCUM: yer_id li sahiplik-degisimi maddesi x kayitta +-1 yil icinde kirilma (s/d/v/isg) YOK => aday.
# Kullanim: py denetim/ARAC-KASA-IC-CELISKI-1004.py cikti.json
import sys, os, re, json, io, contextlib, collections
from datetime import date
AR=r"C:\atlas\arac"; sys.path.insert(0,AR); os.chdir(AR)
if True:
    import denetle, girdi
    O=denetle.olaylari_yukle()
    H=girdi.yukle(sessiz=True)
h={y["ad"]:y for y in H}
def gn(s): return denetle.gun_no(s)
def sahip(y,g):
    for p in y.get("isg") or []:
        if p.get("f") and p.get("t") and p["f"]<=g<p["t"]: return "isg:"+str(p.get("d"))
    for kat in ("s","d","v"):
        for p in y.get(kat) or []:
            if p.get("f") and p.get("t") and p["f"]<=g<p["t"]:
                return ("OSM" if kat=="d" else (f"v:{p.get('kid') or p.get('k') or ''}" if kat=="v" else p.get("d")))
    return None
def kirilmalar(y):
    out=set()
    for kat in ("s","d","v","isg"):
        for p in y.get(kat) or []:
            for k in ("f","t"):
                if p.get(k): out.add(p[k])
    return out
CAP=re.compile(r"\b(aldı|alındı|fethetti|fethi|fethedildi|ele geçir|zapt|teslim (oldu|alındı|edildi|aldı)|işgal|hâkimiyetine (girdi|geçti)|eline geçti|katıldı|ilhak|geri aldı|geri alındı|kaybı|bırakıldı|terk)",re.I)
NOCAP=re.compile(r"kuşat(tı|ma)|yağma|akın|yıktı|yerle bir|tahrip",re.I)
say=collections.Counter(); aday=[]
for o in O:
    t=o.get("t"); yid=o.get("yer_id")
    if not t or not yid or yid not in h: say["yer_id_yok/eşleşmez"]+=1; continue
    t=denetle.tam(t) if len(t)<10 else t
    metin=" ".join(str(o.get(k) or "") for k in ("b","d"))
    cap=bool(CAP.search(metin)) or o.get("k") in ("fetih","kayip")
    if not cap: say["sahiplik_fiili_yok"]+=1; continue
    y=h[yid]; g0=gn(t)
    yakin=[k for k in kirilmalar(y) if abs(gn(k)-g0)<=365]
    if yakin: say["kayitta_±1yil_kirilma_var"]+=1; continue
    say["ADAY"]+=1
    once=sahip(y, date.fromordinal(g0-1).isoformat()); sonra=sahip(y, date.fromordinal(g0+60).isoformat())
    aday.append(dict(t=t,yer=yid,k=o.get("k"),b=o.get("b"),d=(o.get("d") or "")[:300],kisiler=o.get("kisiler"),sahip_once=once,sahip_sonra=sonra,nocap=bool(NOCAP.search(metin))))
print(dict(say), "toplam madde", len(O))
json.dump(aday,open(sys.argv[1],"w",encoding="utf-8"),ensure_ascii=False,indent=1)
