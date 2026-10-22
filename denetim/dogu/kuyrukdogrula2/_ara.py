import sys, os, re, json, urllib.request, urllib.parse
C = r'C:\Users\user\AppData\Local\Temp\claude\C--atlas--claude-worktrees-loving-brattain-e1cca0\6caf8387-0483-4635-b50e-aaab3d8a58c2\scratchpad\kd2'
os.makedirs(C, exist_ok=True)
sys.stdout.reconfigure(encoding='utf8')
UA = {'User-Agent': 'Mozilla/5.0'}

def get(url, timeout=120):
    r = urllib.request.Request(url, headers=UA)
    return urllib.request.urlopen(r, timeout=timeout).read()

def metin(ident):
    p = os.path.join(C, ident + '.txt')
    if not os.path.exists(p):
        try:
            b = get('https://archive.org/download/%s/%s_djvu.txt' % (ident, ident))
        except Exception:
            fl = json.loads(get('https://archive.org/metadata/' + ident))['files']
            ad = [f['name'] for f in fl if f['name'].endswith('_djvu.txt') or f['name'].endswith('.txt')]
            if not ad: print('TXT YOK', ident, [f['name'] for f in fl][:10]); sys.exit(3)
            b = get('https://archive.org/download/%s/%s' % (ident, urllib.parse.quote(ad[0])))
        open(p, 'wb').write(b)
    return open(p, encoding='utf8', errors='replace').read()

def ara_ia(q, n=10):
    u = 'https://archive.org/advancedsearch.php?q=%s&fl[]=identifier&fl[]=title&fl[]=year&fl[]=creator&rows=%d&output=json' % (urllib.parse.quote(q), n)
    for d in json.loads(get(u))['response']['docs']:
        print(d.get('identifier'), '|', d.get('title'), '|', d.get('creator'), '|', d.get('year'))

def grep(ident, rx, w=300, maks=8):
    t = metin(ident)
    t2 = re.sub(r'\s+', ' ', t)
    k = 0
    for m in re.finditer(rx, t2, re.I):
        a = max(0, m.start() - w); b = min(len(t2), m.end() + w)
        print('--[%d]' % m.start(), t2[a:b]); k += 1
        if k >= maks: break
    print('eslesme sayisi >=', k, 'metin uzunluk', len(t2))

if __name__ == '__main__':
    c = sys.argv[1]
    if c == 'ia': ara_ia(sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 10)
    elif c == 'g': grep(sys.argv[2], sys.argv[3], int(sys.argv[4]) if len(sys.argv) > 4 else 300, int(sys.argv[5]) if len(sys.argv) > 5 else 8)
    elif c == 's':
        t = re.sub(r'\s+', ' ', metin(sys.argv[2]))
        print(t[int(sys.argv[3]):int(sys.argv[4])])
    elif c == 'm':
        for ln in open(sys.argv[2], encoding='utf8'):
            ln = ln.rstrip('\n')
            if not ln or ln.startswith('#'): continue
            p = ln.split('\t')
            print('=====', p[0], '|', p[1])
            try:
                if p[0].startswith('http'):
                    b = get(p[0]).decode('utf8', 'replace')
                    b = re.sub(r'(?s)<(script|style).*?</\1>', ' ', b); b = re.sub(r'<[^>]+>', ' ', b); b = re.sub(r'\s+', ' ', b)
                    w = int(p[2]) if len(p) > 2 else 300; k = 0
                    for m in re.finditer(p[1], b, re.I):
                        print('--', b[max(0, m.start() - w):m.end() + w]); k += 1
                        if k >= (int(p[3]) if len(p) > 3 else 4): break
                    print('n>=', k, 'len', len(b))
                else:
                    grep(p[0], p[1], int(p[2]) if len(p) > 2 else 300, int(p[3]) if len(p) > 3 else 4)
            except SystemExit: pass
            except Exception as e: print('HATA', e)
    elif c == 'url':
        b = get(sys.argv[2]).decode('utf8', 'replace')
        b = re.sub(r'(?s)<(script|style).*?</\1>', ' ', b); b = re.sub(r'<[^>]+>', ' ', b); b = re.sub(r'\s+', ' ', b)
        rx = sys.argv[3] if len(sys.argv) > 3 else None
        if rx:
            k = 0
            for m in re.finditer(rx, b, re.I):
                print('--', b[max(0, m.start() - 300):m.end() + 400]); k += 1
                if k >= 6: break
        else: print(b[:int(sys.argv[4]) if len(sys.argv) > 4 else 3000])
