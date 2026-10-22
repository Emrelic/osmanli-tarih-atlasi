import subprocess, re, html, sys, io, urllib.parse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
for q in ['Balhae', 'Nanzhao', 'Dunhuang', 'Tangut', 'Batı Xia', 'Çin Şarkî Türkistan Guiyi', 'Liao hanedanı', 'Kitan', 'Taiyuan', 'Kaifeng', 'Çengdu', 'Hangzhou', 'Wuyue', 'Şato Türkleri', 'Sonraki Tang', 'Ganzhou', 'Sarı Uygur', 'An Lushan']:
    url = 'https://islamansiklopedisi.org.tr/arama/?q=' + urllib.parse.quote(q)
    r = subprocess.run(['curl', '-sL', '-m', '40', '-A', 'Mozilla/5.0', url], capture_output=True)
    t = r.stdout.decode('utf-8', 'replace')
    hits = re.findall(r'href="/([a-z0-9\-]+)"[^>]*>\s*([^<]{2,60})', t)
    seen = []
    for s, a in hits:
        if s in seen or s in ('arama', 'index', 'harf', 'iletisim'): continue
        seen.append(s)
    print(q, '|', len(t), '|', ', '.join(seen[:12]))
