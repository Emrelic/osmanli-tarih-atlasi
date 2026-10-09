# KASA 4 Ekim 2026 - YALNIZ OLCUM. Kullanim: py denetim/ARAC-KASA-IMZA-YERI-1004.py cikti.json
import sys, os, re, json, collections
AR=os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"); sys.path.insert(0,AR); os.chdir(AR)
import denetle, girdi
O=denetle.olaylari_yukle(); h={y["ad"]:y for y in girdi.yukle(sessiz=True)}
ANT=re.compile(r"Antlaşma|Antlasma|Barış|Barışı|Mütareke|Sözleşme|Protokol|Konvansiyon|Kongre|Muahede|Ahidnâme|Tenkihnâme|Mukāsemenâme|Paylaşım|Taksim|Treaty|Peace",re.I)
def kirilma_yakin(ad,t):
    y=h.get(ad)
    if not y: return False
    g=denetle.gun_no(t)
    for kat in ("s","d","v","isg"):
        for p in y.get(kat) or []:
            for k in ("f","t"):
                if p.get(k) and abs(denetle.gun_no(p[k])-g)<=30: return True
    return False
out=[]
for o in O:
    b=o.get("b") or ""; yid=o.get("yer_id") or ""; t=o.get("t") or ""
    if not yid or not t: continue
    if not (o.get("k")=="antlasma" or ANT.search(b)): continue
    cek=yid.split(" (")[0]
    alt=re.findall(r"\(([^)]+)\)",yid)
    adlar=[cek]+alt
    imza=any(re.search(re.escape(a)+r"\w*\s+(Antlaşma|Barış|Mütareke|Sözleşme|Protokol|Konvansiyon|Kongre|Muahede|Ahidnâme|Tenkihnâme|Mukāsemenâme)",b) for a in adlar if len(a)>=3)
    imza = imza or bool(re.search(r"(imzalan|imza edil|toplanan)",(o.get("d") or ""))) and any(a in b for a in adlar)
    if not imza: continue
    tt=denetle.tam(t) if len(t)<10 else t
    out.append(dict(t=t,yer_id=yid,b=b,kayit_var=yid in h,yerde_kirilma=kirilma_yakin(yid,tt),kapsam_genis=bool(o.get("kapsam_genis")),odak=bool(o.get("odak_kutu_kaynak") or o.get("odak_kutu"))))
print("antlaşma maddesi, yer_id = imza yeri:",len(out))
c=collections.Counter((x["yerde_kirilma"]) for x in out); print("imza yerinin kendi kaydında ±30 gün kırılma (yer aynı zamanda etkilenen):",c[True],"| yok:",c[False])
print("kayıt yok (yer_id hiçbir noktaya bağlanmıyor):",sum(not x["kayit_var"] for x in out))
print("kapsam_genis:",sum(x["kapsam_genis"] for x in out),"| odak kutusu var:",sum(x["odak"] for x in out))
json.dump(out,open(sys.argv[1],"w",encoding="utf-8"),ensure_ascii=False,indent=1)
for x in sorted(out,key=lambda x:x["t"]): print(("◆" if x["yerde_kirilma"] else " "), x["t"], "|", x["yer_id"], "|", x["b"][:90])
