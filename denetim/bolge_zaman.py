# -*- coding: utf-8 -*-
"""Bolge zaman cizelgesi: bbox icinde yillara gore hangi boya anahtari kac yerlesimi tutuyor.
Kullanim: py denetim/bolge_zaman.py ad la0 la1 lo0 lo1 [y0 y1 adim]
Cikti: (1) boya anahtari basina var olus araliklari (2) yerlesim bazinda A->B->A kisa arayagirmeler."""
import sys, io, collections, contextlib
sys.path.insert(0, 'arac')
with contextlib.redirect_stdout(io.StringIO()):
    import girdi, renkler, gun
    Y = girdi.yukle(sessiz=True)
    D = girdi.oku_devletler()
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
DV = {d['id']: d for d in D}
def boya(i):
    d = DV.get(i)
    return d['harita'] if d and d.get('harita') else i
ad = sys.argv[1]
la0, la1, lo0, lo1 = map(float, sys.argv[2:6])
y0 = int(sys.argv[6]) if len(sys.argv) > 6 else 1000
y1 = int(sys.argv[7]) if len(sys.argv) > 7 else 1923
adim = int(sys.argv[8]) if len(sys.argv) > 8 else 5
R = [y for y in Y if la0 <= y['lat'] <= la1 and lo0 <= y['lon'] <= lo1]
print('##', ad, len(R), 'yerlesim')
# sahiplik dizisi
seq = {}
for y in R:
    s = []
    for p in y.get('s') or []:
        if p.get('d'):
            s.append((gun.gun(p['f']), gun.gun(p['t']), boya(p['d']), p['d'], p['f'], p['t']))
    # Osmanli sahipligi s: icinde degil, d: (dogrudan) ve v: (vassal/tabi) icinde
    for p in y.get('d') or []:
        s.append((gun.gun(p['f']), gun.gun(p['t']), 'osmanli', 'osmanli', p['f'], p['t']))
    for p in y.get('v') or []:
        kid = p.get('kid') or p.get('k') or 'v?'
        s.append((gun.gun(p['f']), gun.gun(p['t']), 'v:' + kid, kid, p['f'], p['t']))
    s.sort()
    seq[y['ad']] = s
presence = collections.defaultdict(list)  # boya -> [(yil, n)]
for yr in range(y0, y1 + 1, adim):
    g = gun.gun('%04d-07-01' % yr)
    c = collections.Counter()
    for nm, s in seq.items():
        for f, t, b, d, pf, pt in s:
            if f <= g < t:
                c[b] += 1
    for b, n in c.items():
        presence[b].append((yr, n))
rows = []
for b, v in presence.items():
    runs = []
    for yr, n in v:
        if runs and yr - runs[-1][1] <= adim:
            runs[-1][1] = yr; runs[-1][2] = max(runs[-1][2], n)
        else:
            runs.append([yr, yr, n])
    rows.append((runs[0][0], b, runs))
rows.sort()
for _, b, runs in rows:
    if b == '__BOSLUK__':
        label = 'BOSLUK'
    else:
        label = b
    print('%-28s %s %s' % (label, (renkler.BOYALAR.get(b) or ['', '?'])[1],
          ' '.join('%d-%d(%d)' % tuple(r) for r in runs)))
# A->B->A arayagirmeler
fl = collections.defaultdict(list)
for nm, s in seq.items():
    for a, b, c in zip(s, s[1:], s[2:]):
        if a[2] == c[2] and b[2] != a[2] and (b[1] - b[0]) < 365 * 20 and b[2] != '__BOSLUK__':
            fl[(a[2], b[2])].append((nm, b[4][:10], b[5][:10]))
print('-- A->B->A arayagirme (<20 yil):')
for (a, b), v in sorted(fl.items(), key=lambda kv: -len(kv[1])):
    print('  %s -> %s -> %s  n=%d  %s' % (a, b, a, len(v), '; '.join('%s %s..%s' % x for x in v[:2])))
