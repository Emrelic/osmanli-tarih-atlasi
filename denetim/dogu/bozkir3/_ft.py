import re,io,sys
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
t=open('../../../data/devletler.js',encoding='utf-8').read()
for k in sys.argv[1:]:
    m=re.search(r'\{\s*id:\s*"'+re.escape(k)+r'"(.*?)\n\{ ?id:',t,re.S)
    if not m:
        print(k,'YOK');continue
    b=m.group(1)
    f=re.search(r'\bf:\s*"([^"]+)"',b); tt=re.search(r'\bt:\s*"([^"]+)"',b)
    print(k,'f=',f.group(1) if f else None,'t=',tt.group(1) if tt else None)
