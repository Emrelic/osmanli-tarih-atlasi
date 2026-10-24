import sys,io,re
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
for ad in sys.argv[1:]:
    t=open('_ham/'+ad+'.txt',encoding='utf-8').read()
    i=t.find('Kopyalama metni'); j=t.find('Madde Bildirim Formu')
    b=t[i+15:j]
    b=re.sub(r'Bu madde TDV.*?indirmek için tıklayınız\.','',b,flags=re.S)
    print('####',ad)
    print(re.sub(r'\n\s*\n+','\n',b))
