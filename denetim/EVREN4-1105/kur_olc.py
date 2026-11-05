import sys, os, collections
kok = sys.argv[1]; cik = sys.argv[2]
sys.path.insert(0, kok + '/arac')
os.chdir(kok)
import girdi, gun
Y = girdi.yukle(sessiz=True)

def ilk(t):
    fs = [p.get('f') for k in ('s', 'd', 'v', 'isg') for p in (t.get(k) or []) if p.get('f')]
    return min(fs, key=gun.gun) if fs else None

n = len(Y)
kurlu = sum(1 for t in Y if t.get('kur'))
bitli = sum(1 for t in Y if t.get('bit'))
erken, gec, kursuz_gec = [], [], []
for t in Y:
    f = ilk(t); k = t.get('kur')
    if not f:
        continue
    if k and gun.gun(f) < gun.gun(k):
        erken.append((t['ad'], k, f))
    if k and gun.gun(f) - gun.gun(k) > 365 * 50:
        gec.append((t['ad'], k, f))
    if not k and not f.startswith('-') and f > '1300-01-01':
        kursuz_gec.append((t['ad'], f))
print('yerlesim', n, 'kur:', kurlu, 'bit:', bitli)
print('A) sahiplik kur oncesi basliyor (hayalet sahip):', len(erken))
print('B) kur ile ilk sahiplik arasi >50 yil:', len(gec))
print('C) kur YOK, ilk sahiplik 1300 sonrasi:', len(kursuz_gec))
c = collections.Counter(f[:2] + '00' for _, f in kursuz_gec)
print('   C yuzyil dagilimi', sorted(c.items()))
for nm, lst in (('A', erken), ('B', gec), ('C', kursuz_gec)):
    with open(cik + '/kur_' + nm + '.tsv', 'w', encoding='utf-8') as fh:
        fh.write('\n'.join('\t'.join(map(str, x)) for x in lst))
