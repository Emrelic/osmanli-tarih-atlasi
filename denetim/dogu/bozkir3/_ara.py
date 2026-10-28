import json, sys, io, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
Y = json.load(open('../yer_indeks.json', encoding='utf-8'))
HARF = {'ı': 'i', 'İ': 'i', 'ş': 's', 'Ş': 's', 'ğ': 'g', 'Ğ': 'g', 'ü': 'u', 'Ü': 'u', 'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c'}
def norm(s):
    s = ''.join(HARF.get(c, c) for c in s)
    s = unicodedata.normalize('NFKD', s.lower())
    return ''.join(c for c in s if c.isalnum())
for a in sys.argv[1:]:
    q = norm(a)
    print('##', a)
    for y in Y:
        if q in norm(y['ad']):
            print('  %-34s %8.3f %8.3f k=%s kur=%s %s [%s]' % (y['ad'], y['lat'], y['lon'], y.get('k'), y.get('kur'), ','.join(y['devletler'][:8]), y.get('dosya')))
