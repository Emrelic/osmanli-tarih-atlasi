"""Kullanim: py _ws.py "<sayfa basligi>" "<anahtar1>" ["<anahtar2>" ...]  -> sayfa metninde anahtarlarin cevresi.
Sayfa onbellege cin3/_cache/ altina yazilir. Anahtar yoksa sayfa uzunlugunu verir. ANAHTAR '*' = tum metin."""
import sys, os, re, html, io, urllib.parse, subprocess, hashlib
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
d = os.path.join(os.path.dirname(os.path.abspath(__file__)), '_cache')
os.makedirs(d, exist_ok=True)
site = 'zh.wikisource.org'
baslik = sys.argv[1]
if baslik.startswith('http'):
    url = baslik
else:
    url = 'https://%s/wiki/%s' % (site, urllib.parse.quote(baslik.replace(' ', '_')))
fn = os.path.join(d, hashlib.md5(url.encode()).hexdigest() + '.txt')
if not os.path.exists(fn):
    r = subprocess.run(['curl', '-sL', '-m', '40', '-A', 'Mozilla/5.0', url], capture_output=True)
    t = r.stdout.decode('utf-8', 'replace')
    t = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', t, flags=re.S)
    t = re.sub(r'<br\s*/?>|</p>|</div>|</li>|</tr>', '\n', t)
    t = re.sub(r'<[^>]+>', '', t)
    t = html.unescape(t)
    t = re.sub(r'\n\s*\n+', '\n', t)
    open(fn, 'w', encoding='utf-8').write(t)
t = open(fn, encoding='utf-8').read()
print('# %s  (%d karakter)' % (url, len(t)))
for k in sys.argv[2:]:
    if k == '*':
        print(t); continue
    n = 0
    for m in re.finditer(re.escape(k), t):
        a = max(0, m.start() - 60); b = min(len(t), m.end() + 140)
        print('...' + t[a:b].replace('\n', ' ') + '...')
        n += 1
        if n >= 4: break
    if not n:
        print('[YOK]', k)
