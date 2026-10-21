import json,collections,io,sys
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
J=json.load(open('denetim/ONCE1281-DEVLET-LISTESI.json',encoding='utf-8'))
c=collections.Counter()
for k in J['kayitlar']:
    kod,dil=k['_dilim'].rsplit('_',1)
    if k['devredilebilir'] and k['esleme']['durum']!='var': c[(kod,dil)]+=1
for (kod,dil),n in sorted(c.items()):print(kod,dil,n)
print(sum(c.values()))
