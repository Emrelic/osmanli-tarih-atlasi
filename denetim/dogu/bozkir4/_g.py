import re,io,sys
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
# kullanim: py _g.py dosya anahtar [pencere] [azami]
f=sys.argv[1];k=sys.argv[2];w=int(sys.argv[3]) if len(sys.argv)>3 else 350;mx=int(sys.argv[4]) if len(sys.argv)>4 else 12
t=open(f,encoding='utf-8',errors='replace').read()
t=re.sub(r'<[^>]+>',' ',t);t=re.sub(r'\s+',' ',t)
n=0;last=-10**9
for m in re.finditer(k,t,re.I):
    if m.start()-last<w:continue
    last=m.start();n+=1
    print('--',m.start(),':',t[max(0,m.start()-w):m.start()+w]);
    if n>=mx:break
print('TOPLAM bulunan pencere',n,'/ metin',len(t))
