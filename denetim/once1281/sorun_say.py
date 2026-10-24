import json,re,collections,io,sys
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
J=json.load(open('denetim/ONCE1281-DEVLET-LISTESI.json',encoding='utf-8'))
c=collections.Counter(re.sub(r'[:x]?\s*[-\w]*$','',s['sorun'])[:40] if False else re.sub(r'(: .*|\d+)','',s['sorun'])[:45] for s in J['sorunlar'])
for k,v in c.most_common(20):print(v,k)
for s in J['sorunlar']:
    if 'mükerrer' in s['sorun']:print(s)
