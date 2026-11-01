import json, sys, io, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
o = json.load(open('denetim/once1281/amerika/yerlesim_am.json', encoding='utf8'))
def n(s): return ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if unicodedata.category(c) != 'Mn')
for x in o:
    nm = n(x['ad'])
    if any(k in nm for k in sys.argv[1].split('|')):
        print(x['ad'], x['lat'], x['lon'], x['pre'][:2], x['post'])
