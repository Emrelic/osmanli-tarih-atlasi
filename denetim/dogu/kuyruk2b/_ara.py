import sys, re, html, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
# kullanim: py -I _ara.py "<regex>" <pencere> <maks> dosya...
pat, w, mx = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
for f in sys.argv[4:]:
    t = open(f, encoding='utf-8', errors='replace').read()
    if f.endswith('.html'):
        t = re.sub(r'(?s)<(script|style).*?</\1>', ' ', t)
        t = re.sub(r'<[^>]+>', ' ', t)
        t = html.unescape(t)
    t = re.sub(r'-\n(?=[a-z])', '', t)
    t = re.sub(r'\s+', ' ', t)
    n = 0
    last = -10**9
    for m in re.finditer(pat, t):
        if m.start() - last < w:
            continue
        last = m.start()
        a = max(0, m.start() - w); b = min(len(t), m.end() + w)
        print('[%s @%d] ...%s...\n' % (f.split('/')[-1], m.start(), t[a:b]))
        n += 1
        if n >= mx:
            break
