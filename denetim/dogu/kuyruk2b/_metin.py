import sys, re, html, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
t = open(sys.argv[1], encoding='utf-8', errors='replace').read()
t = re.sub(r'(?s)<(script|style).*?</\1>', ' ', t)
t = re.sub(r'<br\s*/?>|</p>|</div>|</h\d>', '\n', t)
t = re.sub(r'<[^>]+>', ' ', t)
t = html.unescape(t)
t = re.sub(r'[ \t\r\xa0]+', ' ', t)
t = re.sub(r'\n\s*\n+', '\n', t)
pat = sys.argv[2] if len(sys.argv) > 2 else None
w = int(sys.argv[3]) if len(sys.argv) > 3 else 300
if not pat:
    print(t)
else:
    for m in re.finditer(pat, t):
        a = max(0, m.start() - w); b = min(len(t), m.end() + w)
        print('...' + t[a:b].replace('\n', ' ') + '...\n')
