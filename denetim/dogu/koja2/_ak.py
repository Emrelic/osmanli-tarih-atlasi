import sys, time, re, json
sys.stdout.reconfigure(encoding='utf8')
sys.path.insert(0, r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja2')
from _ws import get
spec = json.load(open(sys.argv[1], encoding='utf8'))
for host, title, pat, w in spec:
    for k in range(4):
        try:
            t = get(host, title); break
        except Exception as e:
            time.sleep(8); t = 'ERR ' + str(e)
    time.sleep(2)
    print('=====', host, title, None if t is None else len(t))
    if not t or t.startswith('ERR'):
        print(t); continue
    n = 0
    for m in re.finditer(pat, t):
        print('>>', t[max(0, m.start() - w):m.end() + w].replace('\n', ' '))
        n += 1
        if n >= 12: break
