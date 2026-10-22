import re,io,sys,json
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
t=open('../../../data/devletler.js',encoding='utf-8').read()
def ft(k):
    m=re.search(r'\{\s*id:\s*"'+re.escape(k)+r'"(.*?)\n\{ ?id:',t,re.S)
    if not m: return None
    b=m.group(1)
    f=re.search(r'\bf:\s*"([^"]+)"',b); tt=re.search(r'\bt:\s*"([^"]+)"',b)
    return (f.group(1) if f else None, tt.group(1) if tt else None)
js=open('yama_bozkir3.js',encoding='utf-8').read()
data=json.loads(js[js.index('=')+1:].rstrip().rstrip(';'))
kj=open('kunye_yeni.js',encoding='utf-8').read()
kun={k['id']:(k['f'],k['t']) for k in json.loads(kj[kj.index('=')+1:].rstrip().rstrip(';'))}
def key(s):
    neg=s.startswith('-'); p=s.lstrip('-').split('-'); return ((-1) if neg else 1)*int(p[0])*10000+int(p[1])*100+int(p[2])
for y in data:
    prev=None
    for s in y['s_onek']:
        d=s['d']
        if prev and prev!=s['f']: print('SUREKSIZ',y['ad'],prev,s['f'])
        prev=s['t']
        if key(s['f'])>=key(s['t']): print('TERS',y['ad'],s)
        if d=='__BOSLUK__': continue
        r=kun.get(d) or ft(d)
        if not r: print('KIMLIK YOK',d); continue
        f,tt=r
        if f and key(s['f'])<key(f): print('HAYALET(erken)',y['ad'],d,s['f'],'<',f)
        if tt and key(s['t'])>key(tt): print('HAYALET(gec)',y['ad'],d,s['t'],'>',tt)
print('bitti')
