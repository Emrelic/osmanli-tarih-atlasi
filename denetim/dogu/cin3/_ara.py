import json, sys, os, io, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
Y = json.load(open(os.path.join(os.path.dirname(__file__), '..', 'yer_indeks.json'), encoding='utf-8'))
def norm(s):
    s = unicodedata.normalize('NFKD', s.lower())
    return ''.join(c for c in s if c.isalnum())
for q in sys.argv[1:]:
    nq = norm(q)
    print('==', q)
    for y in Y:
        if nq in norm(y['ad']):
            print('  %-34s %8.3f %8.3f k=%s kur=%s %s' % (y['ad'], y['lat'], y['lon'], y['k'], y['kur'], ','.join(y['devletler'][:5])))
