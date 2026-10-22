import sys,re,subprocess,html,os,io
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
D=os.path.join(os.path.dirname(os.path.abspath(__file__)),'_ham')
os.makedirs(D,exist_ok=True)
for slug in sys.argv[1:]:
    out=os.path.join(D,slug+'.txt')
    if not os.path.exists(out):
        raw=subprocess.run(['curl','-sL','-A','Mozilla/5.0','-m','60','https://islamansiklopedisi.org.tr/'+slug],capture_output=True).stdout.decode('utf-8','replace')
        raw=re.sub(r'(?s)<(script|style).*?</\1>',' ',raw);raw=re.sub(r'(?s)<[^>]+>',' ',raw)
        t=html.unescape(raw);t=re.sub(r'[ \t\r\f\v]+',' ',t);t=re.sub(r'\n\s*\n+','\n',t)
        open(out,'w',encoding='utf-8').write(t)
    print('##',slug,len(open(out,encoding='utf-8').read()))
