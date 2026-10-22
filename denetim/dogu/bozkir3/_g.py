import re,io,sys
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
# py _g.py dosya anahtar1 anahtar2 ... -> her anahtar icin baglam (-250/+450)
t=open(sys.argv[1],encoding='utf-8').read()
t=re.sub(r'\s+',' ',t)
for k in sys.argv[2:]:
    for m in re.finditer(k,t):
        print('['+k+']',t[max(0,m.start()-250):m.start()+450]);print('--')
