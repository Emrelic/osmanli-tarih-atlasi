import json, sys, io, unicodedata, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
Y = json.load(open('denetim/dogu/yer_indeks.json', encoding='utf-8'))
def n(s): return ''.join(c for c in unicodedata.normalize('NFKD', s.lower()) if c.isalnum())
for q in sys.argv[1:]:
    qq = n(q)
    for y in Y:
        if qq in n(y['ad']):
            print('%s | %.3f %.3f k%s kur=%s | %s' % (y['ad'], y['lat'], y['lon'], y['k'], y['kur'], ','.join(y['devletler'][:8])))
