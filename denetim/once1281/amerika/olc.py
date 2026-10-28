import sys, io, json, collections
sys.path.insert(0,'arac'); sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
import girdi, renkler
Y=girdi.yukle(sessiz=True); DEV={d['id']:d for d in girdi.oku_devletler()}; B=renkler.BOYALAR
def num(s):
    s=str(s); neg=s.startswith('-'); y=int(s.lstrip('-').split('-')[0]); return -y if neg else y
def gun(s):
    s=str(s); neg=s.startswith('-'); p=s.lstrip('-').split('-'); y=int(p[0]); return (-y if neg else y, int(p[1]) if len(p)>1 else 1, int(p[2]) if len(p)>2 else 1)
def boyali(i):
    d=DEV.get(i); return i in B or (d is not None and d.get('harita') in B)
AM=[y for y in Y if -170<=y['lon']<=-30 and -57<=y['lat']<=75]
print('Amerika yerlesim',len(AM)); print(list(AM[0].keys()))
kun={}
for i,d in DEV.items():
    if d.get('bolge') in('kuzey-amerika','orta-amerika','guney-amerika') and num(d['f'])<1281:
        kun[i]=d
use=collections.defaultdict(list); asim=[]; sahipsiz=[]; bosluk=[]; yok=collections.Counter()
LIM=gun('1281-01-01')
for y in AM:
    s=y.get('s') or []
    if not s: sahipsiz.append(y['ad'])
    for p in s:
        d=p.get('d')
        if d=='__BOSLUK__': bosluk.append((y['ad'],p.get('f'),p.get('t'))); continue
        if d in('__YOK__',None): continue
        if d not in DEV: yok[d]+=1; continue
        if gun(p['f'])<LIM: use[d].append(y['ad'])
        k=DEV[d]
        if k.get('bolge') not in('kuzey-amerika','orta-amerika','guney-amerika'): continue
        if gun(p['f'])<gun(k['f']) and gun(p['f'])<LIM or (p.get('t') and gun(p['t'])>gun(k.get('t') or '9999-12-31') and gun(p['f'])<LIM):
            asim.append((y['ad'],d,p['f'],p.get('t'),k['f'],k['t']))
print('kunye on1281 Amerika',len(kun))
for i,d in sorted(kun.items(),key=lambda x:num(x[1]['f'])):
    print(i,'| boya' if boyali(i) else '| BOYASIZ','| yerlesim_on1281',len(use.get(i,[])),'| bg' if d.get('boya_gerekli') else '')
print('s bos',len(sahipsiz)); print('kunyesiz d',dict(yok))
print('bosluk',len(bosluk))
print('pencere asim',len(asim))
for a in asim[:80]: print(a)
json.dump({'sahipsiz':sahipsiz,'bosluk':bosluk,'asim':asim},open('denetim/once1281/amerika/olc.json','w',encoding='utf8'),ensure_ascii=False,indent=0)
