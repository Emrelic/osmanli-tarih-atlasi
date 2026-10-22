import re,io,sys,glob
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
# kullanim: py _gm.py "glob" anahtar [pencere] [azami]
w=int(sys.argv[3]) if len(sys.argv)>3 else 350;mx=int(sys.argv[4]) if len(sys.argv)>4 else 6
for f in sorted(glob.glob(sys.argv[1])):
    t=open(f,encoding='utf-8',errors='replace').read()
    t=re.sub(r'\s+',' ',t)
    print('####',f,len(t))
    n=0;last=-10**9
    for m in re.finditer(sys.argv[2],t,re.I):
        if m.start()-last<w:continue
        last=m.start();n+=1
        print('--',m.start(),':',t[max(0,m.start()-w):m.start()+w])
        if n>=mx:break
