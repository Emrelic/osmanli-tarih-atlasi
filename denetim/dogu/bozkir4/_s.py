import sys,re,html,io,subprocess,urllib.parse
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
for q in sys.argv[1:]:
    raw=subprocess.run(['curl','-sL','-A','Mozilla/5.0','-m','60','https://islamansiklopedisi.org.tr/arama/?q='+urllib.parse.quote(q)],capture_output=True).stdout.decode('utf-8','replace')
    t=re.sub(r'(?s)<(script|style).*?</\1>',' ',raw);t=re.sub(r'<[^>]+>',' ',t);t=html.unescape(t);t=re.sub(r'\s+',' ',t)
    i=t.find('Madde Başlıkları')
    j=t.find('Otuz üç yıllık')
    print('##',q,'::',t[i:j][:2500])
