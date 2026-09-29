# KRONO-ATLANTIK-B-0929 — senkron defterinden B koluna düşen kırılmaları ayır
# B kümesi (A kolu ile M-5419 bölüşümü): ingiltere · hollanda · ingiliz-* · hollanda-* · belcika · avustralya
# ORTAK (bir ucu A kümesinde) kayıtlar A kolunda — burada ayrı sayılır, yazılmaz.
import json, io, collections, sys
d = json.load(io.open('denetim/SENKRON-DEFTER-0929.json', encoding='utf-8'))
K = d['paket']['KRONO-ATLANTIK-0929']['kayit']
A = {'fransa', 'fransa-cumhuriyet', 'ispanya', 'portekiz', 'aragon', 'kastilya', 'navarra', 'yeni-ispanya',
     'ispanyol-peru', 'portekiz-brezilyasi', 'burgonya', 'italya-napolyon'}
BS = {'ingiltere', 'iskocya', 'irlanda', 'irlanda-serbest-devlet', 'hollanda', 'belcika',
      'luksemburg-hollanda-birligi', 'kibris-ingiliz', 'avustralya'}
def b(x): return x in BS or x.startswith('ingiliz') or x.startswith('hollanda')
def bolge(r):
    la, lo = r['lat'], r['lon']
    if 35 <= la <= 62 and -11 <= lo <= 30: return 'Avrupa'
    if lo < -30 and la > 24: return 'K.Amerika'
    if lo < -30 and la > 5: return 'Karayip/O.Amerika'
    if lo < -30: return 'G.Amerika'
    if la < -20 and lo < 60: return 'G.Afrika'
    if lo < 60 and la < 37: return 'Afrika/Ortadogu'
    if lo < 100: return 'G.Asya'
    if la < -10 and lo > 110: return 'Avustralya/Okyanusya'
    return 'GD.Asya'
R = [r for r in K if (b(r['eski']) or b(r['yeni']))]
ortak = [r for r in R if r['eski'] in A or r['yeni'] in A]
Bk = [r for r in R if not (r['eski'] in A or r['yeni'] in A)]
net = [r for r in Bk if not r['kuyrukta_kapali'] and not r['kunyede_kapali']]
print('B+ORTAK kayit', len(R), '· ORTAK(A kolunda)', len(ortak), '· B', len(Bk), '· B net', len(net))
print('bolge', collections.Counter(bolge(r) for r in net).most_common())
print('yeni nokta dogusu (eski=—)', sum(1 for r in net if r['eski'] == '—'),
      '· gercek devir', sum(1 for r in net if r['eski'] != '—'))
print('kova', collections.Counter(r['kova'] for r in net))
print('ayri olay (gun,eski,yeni)', len(set((r['gun'], r['eski'], r['yeni']) for r in net)))
print('--- gercek devirler (eski != —), bolge · gun · eski>yeni · n · ornek')
g = collections.defaultdict(list)
for r in net:
    if r['eski'] != '—': g[(bolge(r), r['gun'], r['eski'], r['yeni'])].append(r['yerlesim'])
for k in sorted(g, key=lambda k: (k[0], k[1])):
    print(' ', k[0], k[1], k[2] + '>' + k[3], len(g[k]), '·', ', '.join(g[k][:4]))
if '--avrupa' in sys.argv:
    print('--- Avrupa, B kümesi, TÜM kayıtlar (kapalı dahil)')
    for r in sorted([r for r in Bk if bolge(r) == 'Avrupa'], key=lambda r: r['gun']):
        print(' ', r['gun'], r['eski'] + '>' + r['yeni'], r['yerlesim'], r['kova'],
              'KAPALI' if (r['kuyrukta_kapali'] or r['kunyede_kapali']) else 'NET', '·', r['en_yakin_madde'][:50])
