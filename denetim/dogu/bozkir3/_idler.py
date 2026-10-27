import re,io,sys
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
t=open('../../../data/devletler.js',encoding='utf-8').read()
ids=sorted(set(re.findall(r'\bid:\s*"([a-z0-9-]+)"',t)))
print(len(ids))
for k in sys.argv[1:]:
    print(k+':', ' '.join(i for i in ids if k in i))
