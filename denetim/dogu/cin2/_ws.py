"""Kullanim: py _ws.py "<sayfa>" "<anahtar1>" ... | '*' = tum metin | '@gz' = ganzhi gunu iceren cumleler
Onbellek: cin2/_cache/. Sayfa zh.wikisource.org."""
import sys, os, re, html, io, urllib.parse, subprocess, hashlib
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
d = os.path.join(os.path.dirname(os.path.abspath(__file__)), '_cache')
os.makedirs(d, exist_ok=True)
baslik = sys.argv[1]
url = baslik if baslik.startswith('http') else 'https://zh.wikisource.org/wiki/%s' % urllib.parse.quote(baslik.replace(' ', '_'))
fn = os.path.join(d, hashlib.md5(url.encode()).hexdigest() + '.txt')
if not os.path.exists(fn):
    r = subprocess.run(['curl', '-sL', '-m', '60', '-A', 'Mozilla/5.0', url], capture_output=True)
    t = r.stdout.decode('utf-8', 'replace')
    t = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', t, flags=re.S)
    t = re.sub(r'<br\s*/?>|</p>|</div>|</li>|</tr>', '\n', t)
    t = re.sub(r'<[^>]+>', '', t)
    t = html.unescape(t)
    t = re.sub(r'\n\s*\n+', '\n', t)
    open(fn, 'w', encoding='utf-8').write(t)
t = open(fn, encoding='utf-8').read()
print('# %s (%d karakter)' % (url, len(t)))
GZ = r'[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥]'
for k in sys.argv[2:]:
    if k == '*':
        a = t.find('姊妹计划'); b = t.find('↑返回顶部')
        print(t[a + 6 if a >= 0 else 0: b if b > 0 else len(t)]); continue
    n = 0
    if k.startswith('+'):
        pat = r'(?s).{0,450}' + re.escape(k[1:]) + r'.{0,250}'
    else:
        pat = r'.{0,60}' + GZ + r'.{0,100}' if k == '@gz' else r'.{0,70}' + re.escape(k) + r'.{0,150}'
    for m in re.finditer(pat, t):
        print('...' + m.group(0).replace('\n', ' ') + '...')
        n += 1
        if n >= 12: break
    if not n:
        print('[YOK]', k)
