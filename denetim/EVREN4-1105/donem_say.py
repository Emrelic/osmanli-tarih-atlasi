import sys, os, collections, re
kok = sys.argv[1]
sys.path.insert(0, kok + '/arac')
os.chdir(kok)
import girdi
Y = girdi.yukle(sessiz=True)
say = collections.Counter(); kaynakli = collections.Counter(); yz = collections.Counter()
for t in Y:
    for k in ('s', 'd', 'v', 'isg'):
        for p in (t.get(k) or []):
            say[k] += 1
            kn = (p.get('kaynak') or '') + ' ' + (t.get('kaynak') or '')
            if p.get('kaynak'):
                kaynakli[k] += 1
            f = p.get('f') or ''
            yz[('MO' if f.startswith('-') else f[:2] + '00') if f else '?'] += 1
print('yerlesim', len(Y))
print('donem toplam', sum(say.values()), dict(say))
print('donem kendi kaynak alani olan', sum(kaynakli.values()), dict(kaynakli))
print('yuzyil', sorted(yz.items()))
