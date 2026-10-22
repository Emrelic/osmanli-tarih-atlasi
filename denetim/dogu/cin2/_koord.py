import csv,sys,io,math
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
csv.field_size_limit(10**9)
S="C:/Users/user/AppData/Local/Temp/claude/C--atlas/2e265d3a-21c7-47e9-ac13-c26e0cabd3c6/scratchpad/"
P=[]
for r in csv.DictReader(open(S+"gaz-pleiades/pleiades-places-latest.csv",encoding='utf-8')):
    try:
        la=float(r['reprLat']);lo=float(r['reprLong'])
    except: continue
    if 20<la<47 and 85<lo<132: P.append((r['title'],la,lo,r['id']))
print('pleiades Asya',len(P))
for p in P: print('P',p)
