import re,io,sys
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
t=open('../../../data/devletler.js',encoding='utf-8').read()
r=open('../../../arac/renkler.py',encoding='utf-8').read()
anah=set(re.findall(r'["\']([a-z0-9-]+)["\']\s*:',r[r.index('BOYALAR = {'):]))
for k in sys.argv[1:]:
    m=re.search(r'\{\s*id:\s*"'+re.escape(k)+r'"(.*?)\n\{ ?id:',t,re.S)
    if not m: print(k,'devletler.js YOK'); continue
    h=re.search(r'\bharita:\s*"([^"]+)"',m.group(1))
    hk=h.group(1) if h else None
    print(k,'harita=',hk,'| BOYALAR(id):',k in anah,'| BOYALAR(harita):',(hk in anah) if hk else None)
