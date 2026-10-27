import sys, re, os, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '_ham')
slug = sys.argv[1]
pat = re.compile(sys.argv[2])
w = int(sys.argv[3]) if len(sys.argv) > 3 else 200
t = open(os.path.join(D, slug + '.txt'), encoding='utf-8').read()
t = re.sub(r'\s+', ' ', t)
n = 0
for m in pat.finditer(t):
    a = max(0, m.start() - w); b = min(len(t), m.end() + w)
    print('...' + t[a:b] + '...\n')
    n += 1
    if n >= 12: break
