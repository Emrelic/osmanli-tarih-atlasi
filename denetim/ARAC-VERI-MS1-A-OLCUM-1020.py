import sys, io, re, collections, json
sys.path.insert(0, 'arac')
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
import girdi, renkler
Y = girdi.yukle(sessiz=True)
D = girdi.oku_devletler()
B = renkler.BOYALAR
yil = lambda s: int(re.match(r'-?\d+', s).group()) if s else None

def var1281(y):
    k = yil(y.get('kur')); b = yil(y.get('bit'))
    return (k is None or k <= 1281) and (b is None or b > 1281)
noktalar = [y for y in Y if y.get('tur') != 'bolge']
v = [y for y in noktalar if var1281(y)]
print('toplam kayit', len(Y), '| tur!=bolge', len(noktalar), '| 1281de var (tur!=bolge)', len(v))

def minf(y):
    fs = [yil(p['f']) for k in ('s', 'd', 'v') for p in (y.get(k) or []) if p.get('f')]
    return min(fs) if fs else None
c = collections.Counter()
for y in v:
    m = minf(y)
    c['zincir_basi_yok' if m is None else '<=1000' if m <= 1000 else '1001-1280' if m < 1281 else '1281']+=1
print('zincir basi dagilimi (1281de var olanlar):', dict(c))
# kur: alani 1281 oncesi
print('kur: 1281 oncesi olan:', sum(1 for y in v if y.get('kur') and yil(y['kur']) < 1281))
# kunye
f = lambda d: yil(d['f']) if d.get('f') else None
t = lambda d: yil(d['t']) if d.get('t') else 99999
bos = lambda d: (d['id'] in B or (d.get('harita') and d['harita'] in B))
K = D
print('kunye toplam', len(K))
print('  f<1281', sum(1 for d in K if f(d) < 1281))
print('  1281 oncesi yasayan (f<1281 & t>1000)', sum(1 for d in K if f(d) < 1281 and t(d) > 1000))
print('  f<=1000 & t>1000 (1000e uzanan)', sum(1 for d in K if f(d) <= 1000 and t(d) > 1000))
print('  f<=0 (MS 1 ve oncesi) & t>0', sum(1 for d in K if f(d) <= 0 and t(d) > 0))
print('  f in [1000,1281)', sum(1 for d in K if 1000 <= f(d) < 1281))
print('  f==1281-01-01 (epok damgali)', sum(1 for d in K if d.get('f') == '1281-01-01'))
yas = [d for d in K if f(d) < 1281 and t(d) > 1000]
print('  1000-1281 yasayan kunyeden BOYALAR tanimli', sum(1 for d in yas if bos(d)), '/', len(yas))
ms = [d for d in K if f(d) < 1000 and t(d) > 1]
print('  MS1-1000 yasayan kunye', len(ms), 'boyali', sum(1 for d in ms if bos(d)))
# yerlesim donemi (f<1281) bolge dagilimi icin kunye bolgesi
kb = {d['id']: d.get('bolge') for d in K}
rc = collections.Counter(); rext = collections.Counter(); rv = collections.Counter()
for y in v:
    # bolge = 1281 sahibinin bolgesi
    bl = None
    for p in y.get('s') or []:
        if p.get('d') in kb:
            bl = kb[p['d']]; break
    bl = bl or 'osmanli/diger'
    rv[bl] += 1
    m = minf(y)
    if m is not None and m < 1281: rext[bl] += 1
print('bolge: 1281de var / zinciri 1281 oncesine uzayan')
for b, n in sorted(rv.items(), key=lambda x: -x[1]):
    print(f'  {b:22} {n:5} {rext[b]:4}')
