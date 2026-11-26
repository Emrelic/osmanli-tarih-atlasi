# KASA 4 Ekim 2026 - YALNIZ OLCUM. Kullanim: py denetim/ARAC-KASA-TERS-MADDE-1004.py cikti.json
# KASA 4 Ekim 2026 - YALNIZ OLCUM: kirilma (yeni sahip) x +-30 gun icinde ayni yer_id'li madde.
# Madde yeni sahibi anmiyor mu (F1) / yalniz kusatma-yikim mi anlatiyor (F2)?
import sys, os, re, json, collections
from datetime import date
AR=os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"); sys.path.insert(0,AR); os.chdir(AR)
import denetle, girdi
O=denetle.olaylari_yukle(); H=girdi.yukle(sessiz=True)
N=denetle._2s_norm
def adlar(sid):
    if sid in ("OSM","osmanli"): return ["osmanli","osmanlilar"]
    return denetle._2s_taraf_adaylari(sid) or [N(sid.replace("-"," "))]
oy=collections.defaultdict(list)
for o in O:
    if o.get("yer_id") and o.get("t"): oy[o["yer_id"]].append(o)
def donemler(y):
    out=[]
    for kat in ("isg","s","d","v"):
        for p in y.get(kat) or []:
            if p.get("f") and p.get("t"):
                sid = "OSM" if kat=="d" else (p.get("kid") or "VASAL" if kat=="v" else p.get("d"))
                out.append((kat,sid,p["f"],p["t"]))
    return out
def sahip(D,g):
    for kat,sid,f,t in D:
        if f<=g<t: return (kat,sid)
    return (None,None)
CAP=re.compile(r"aldi|alindi|fethet|fethi|fethed|ele gecir|zapt|teslim|isgal|hakimiyetine|eline gec|katil|ilhak|geri al|kaybi|birakil|terk|devr|gecti|girdi|bagland",re.I)
SIE=re.compile(r"kusat|yagma|akin|yikti|yerle bir|tahrip|bombard",re.I)
cift=[]; say=collections.Counter()
for y in H:
    D=donemler(y); 
    if y["ad"] not in oy: continue
    for kat,sid,f,t in D:
        if f<="1281-01-02": continue
        g=denetle.gun_no(f)
        once=sahip(D, date.fromordinal(g-1).isoformat())
        if once==(kat,sid): continue
        for o in oy[y["ad"]]:
            ot=denetle.tam(o["t"]) if len(o["t"])<10 else o["t"]
            if abs(denetle.gun_no(ot)-g)>30: continue
            say["cift"]+=1
            m=N(" ".join(str(o.get(k) or "") for k in ("b","d","kisiler")))
            yeni_anılıyor=any(denetle._2s_gecer(m,a) for a in adlar(sid) if sid)
            cap=bool(CAP.search(m)); sie=bool(SIE.search(m))
            f1 = not yeni_anılıyor
            f2 = sie and not cap
            if f1: say["F1_yeni_sahip_anilmiyor"]+=1
            if f2: say["F2_yalniz_kusatma"]+=1
            cift.append(dict(yer=y["ad"],kirilma=f,yeni=f"{kat}:{sid}",once=f"{once[0]}:{once[1]}",t=o["t"],b=o.get("b"),d=(o.get("d") or "")[:260],f1=f1,f2=f2,cap=cap))
print(dict(say))
json.dump(cift,open(sys.argv[1],"w",encoding="utf-8"),ensure_ascii=False,indent=1)
