import sys, io, json, collections, os
sys.path.insert(0,'arac')
_so=sys.stdout; sys.stdout=io.StringIO()
import girdi, renkler
Y=girdi.yukle(sessiz=True); DEV={d['id']:d for d in girdi.oku_devletler()}
sys.stdout=io.TextIOWrapper(open(1,'wb',closefd=False),encoding='utf-8')
def gun(s):
    s=str(s); neg=s.startswith('-'); p=s.lstrip('-').split('-'); y=int(p[0]); return (-y if neg else y, int(p[1]) if len(p)>1 else 1, int(p[2]) if len(p)>2 else 1)
LIM=gun('1281-01-01')
AM=[y for y in Y if -170<=y['lon']<=-30 and -57<=y['lat']<=75]
out=[]
for y in AM:
    s=y.get('s') or []
    pre=[p for p in s if gun(p['f'])<LIM]
    out.append(dict(ad=y['ad'],lat=y['lat'],lon=y['lon'],kur=y.get('kur'),bit=y.get('bit'),bos=y.get('bos'),src=y.get('_kaynak'),
        pre=[(p.get('d'),p['f'],p.get('t')) for p in pre],post=len(s)-len(pre)))
json.dump(out,open('denetim/once1281/amerika/yerlesim_am.json','w',encoding='utf8'),ensure_ascii=False)
withpre=[o for o in out if o['pre']]
print('AM',len(out),'on1281 s: olan',len(withpre))
c=collections.Counter(os.path.basename(str(o['src'])) for o in withpre); print(c)
for o in withpre: print(o['ad'],o['lat'],o['lon'],o['pre'])
nopre=[o for o in out if not o['pre'] and (o['kur'] is not None and gun(o['kur'])<LIM)]
print('kur<1281 ama pre yok',len(nopre),[ (o['ad'],o['kur']) for o in nopre][:40])
