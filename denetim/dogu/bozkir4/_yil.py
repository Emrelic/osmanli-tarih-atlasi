import re,sys,io
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
f=sys.argv[1];a=int(sys.argv[2]);b=int(sys.argv[3])
t=re.sub(r'\s+',' ',open(f,encoding='utf-8',errors='replace').read())
seg=t[a:b]
for m in re.finditer(r'\b5[3-6]\d\b|twenty-\w+ year|thirtieth|\b[XVI]+\. ?xviii',seg):
    print(m.start()+a,seg[max(0,m.start()-150):m.start()+150]);print('--')
