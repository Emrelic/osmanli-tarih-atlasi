import sys,re,subprocess,html,io
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
for q in sys.argv[1:]:
    raw=subprocess.run(['curl','-sL','-A','Mozilla/5.0','-m','60','https://islamansiklopedisi.org.tr/arama/?q='+q],capture_output=True).stdout.decode('utf-8','replace')
    ls=re.findall(r'href="https://islamansiklopedisi.org.tr/([a-z0-9-]+)"[^>]*>([^<]{2,60})<',raw)
    seen=set()
    print('##',q)
    for s,t in ls:
        if s in seen or s in('arama','hakkimizda'):continue
        seen.add(s);print(s,'|',t.strip())
