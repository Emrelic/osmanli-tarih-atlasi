import sys, re, time
sys.stdout.reconfigure(encoding='utf8')
sys.path.insert(0, r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja2')
from _ws import get
def hdr(title, pat, w=60):
    t = get('zh.wikisource.org', title)
    time.sleep(3)
    print('=====', title, len(t) if t else None)
    if not t: return
    yrs = [(m.start(), m.group(0)) for m in re.finditer(r'(?:===\s*)?[元二三四五六七八九十]+年\s*(?:===)?', t)]
    for m in re.finditer(pat, t):
        prev = [y for y in yrs if y[0] < m.start()]
        print('  year-hdr:', prev[-1][1] if prev else None, '|', t[max(0, m.start() - w):m.end() + w].replace('\n', ' '))
hdr('三國史記/卷06', '耽羅國主')
hdr('三國史記/卷25', '躭|聃|耽|恩率')
hdr('三國史記/卷26', '躭|聃|恩率|文周')
hdr('高麗史/卷十一', '乇羅|託羅')
hdr('高麗史/卷十二', '乇羅|託羅|郡')
