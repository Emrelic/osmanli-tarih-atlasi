import csv, json, sys, collections
W = sys.argv[1]
dadim = set(json.load(open(W + '/dadim_sonuc.json', encoding='utf-8')).keys())
rows = list(csv.DictReader(open(W + '/donem_kaynak_sinif.tsv', encoding='utf-8'), delimiter='\t'))
zayif = {'ZAYIF_VIKI', 'ZAYIF_ATLAS', 'BOS', 'DIGER'}
ev = [r for r in rows if r['ad'] not in dadim and r['sinif'] in zayif]
def oncelik(r):
    f = r['f'] or ''
    cekirdek = (not f.startswith('-')) and '1281' <= f[:4] <= '1923'
    s = {'ZAYIF_VIKI': 0, 'ZAYIF_ATLAS': 1, 'BOS': 2, 'DIGER': 3}[r['sinif']]
    return (0 if cekirdek else 1, s)
ev.sort(key=oncelik)
yer = collections.OrderedDict()
for r in ev:
    yer.setdefault(r['ad'], []).append(r)
print('DADIM disi yerlesim (zayif donemli):', len(yer), ' donem:', len(ev))
c = collections.Counter(r['sinif'] for r in ev); print(dict(c))
cek = sum(1 for r in ev if oncelik(r)[0] == 0); print('cekirdek 1281-1923 donem:', cek)
# 3 kova, yerlesim bazinda donem sayisi dengeli
kova = [[], [], []]; yuk = [0, 0, 0]
for ad, lst in yer.items():
    i = yuk.index(min(yuk)); kova[i].extend(lst); yuk[i] += len(lst)
for i, ad in enumerate(['KASA', 'LAB', 'HAVVA']):
    with open(W + '/evren4_' + ad + '.tsv', 'w', encoding='utf-8', newline='') as fh:
        w = csv.writer(fh, delimiter='\t')
        w.writerow(['sira', 'sinif', 'dosya', 'ad', 'kat', 'sahip', 'f', 't', 'kaynak'])
        for j, r in enumerate(kova[i], 1):
            w.writerow([j, r['sinif'], r['dosya'], r['ad'], r['kat'], r['sahip'], r['f'], r['t'], r['kaynak']])
    print(ad, len(kova[i]), 'donem', len({r['ad'] for r in kova[i]}), 'yerlesim')
