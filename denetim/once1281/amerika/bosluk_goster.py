import json, sys, io
sys.path.insert(0, 'arac')
_so = sys.stdout; sys.stdout = io.StringIO()
import girdi
Y = girdi.yukle(sessiz=True)
sys.stdout = io.TextIOWrapper(open(1, 'wb', closefd=False), encoding='utf-8')
adlar = sys.argv[1].split('|')
for y in Y:
    if y['ad'] in adlar:
        print('##', y['ad'], y['lat'], y['lon'], 'kur', y.get('kur'), 'bit', y.get('bit'), 'bos', y.get('bos'), str(y.get('_kaynak'))[-40:])
        for p in y.get('s') or []:
            print('  ', p.get('d'), p.get('f'), p.get('t'), (p.get('kaynak') or '')[:int(sys.argv[2])])
