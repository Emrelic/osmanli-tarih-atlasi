import re,io,sys
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
t=open('../../../arac/renkler.py',encoding='utf-8').read()
i=t.index('BOYALAR = {')
blok=t[i:]
# BOYALAR sozlugunun anahtarlari
anah=set(re.findall(r'["\']([a-z0-9-]+)["\']\s*:',blok))
for k in sys.argv[1:]:
    print(k, 'VAR' if k in anah else 'YOK')
