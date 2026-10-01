import json, re, sys, os, collections
sys.stdout.reconfigure(encoding='utf-8')
D = './'
K = json.load(open(D + 'kova3.json', encoding='utf-8'))
def nz(s):
    s = s.replace('’', "'").replace('‘', "'").replace('`', "'").replace('“', '"').replace('”', '"').replace('–', '-').replace('—', '-').replace('â', 'a').replace('î', 'i').replace('û', 'u')
    return re.sub(r'\s+', ' ', s).strip().lower()
B = {}
for f in os.listdir(D + 'cache'):
    if f.startswith('web_'): continue
    o = json.load(open(D + 'cache/' + f, encoding='utf-8'))
    B[f[:-5]] = nz(o['body']) if o['status'] == 200 else '302'
res = []; c = collections.Counter()
for x in K['tdv_q']:
    s = x['slug']
    for q in x['q']:
        segs = [nz(t) for t in re.split(r'…|\.\.\.|\[…\]|\(…\)', q) if len(t.strip()) >= 12]
        if not segs: continue
        b = B.get(s) if s else None
        if not s: v = 'SLUG-ÇIKARILAMADI'
        elif b is None: v = 'ÇEKİLEMEDİ'
        elif b == '302': v = 'SLUG-302'
        elif all(t in b for t in segs): v = 'VAR'
        else:
            other = [k for k, bb in B.items() if bb != '302' and all(t in bb for t in segs)]
            if other: v = 'VAR-BAŞKA-MADDEDE'; s2 = other[:3]
            else:
                w = nz(q).split(' '); hit = n = 0
                for i in range(0, max(1, len(w) - 4), 2):
                    n += 1; hit += ' '.join(w[i:i + 5]) in b
                v = 'YAKIN' if hit / n >= 0.5 else 'YOK'
        r = {'k': x['k'], 'slug': s, 'v': v, 'q': q[:200]}
        if v == 'VAR-BAŞKA-MADDEDE': r['bulundugu'] = s2
        c[v] += 1; res.append(r)
print(c, 'toplam', sum(c.values()))
json.dump(res, open(D + 'tdvq.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
for v in ('YOK', 'YAKIN', 'VAR-BAŞKA-MADDEDE', 'SLUG-302', 'SLUG-ÇIKARILAMADI'):
    L = [r for r in res if r['v'] == v]
    print(f'\n== {v} {len(L)}  dosya:', collections.Counter(r['k'].split('#')[0] for r in L).most_common(6))
    for r in L[:12]: print('  ', r['k'], r['slug'], r.get('bulundugu', ''), '|', r['q'][:110])
