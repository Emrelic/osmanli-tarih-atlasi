import json, sys, io, re, os
sys.path.insert(0, 'arac')
_so = sys.stdout; sys.stdout = io.StringIO()
import girdi, renkler
Y = girdi.yukle(sessiz=True); DEV = {d['id']: d for d in girdi.oku_devletler()}; B = renkler.BOYALAR
sys.stdout = io.TextIOWrapper(open(1, 'wb', closefd=False), encoding='utf-8')
def gun(s):
    s = str(s); neg = s.startswith('-'); p = s.lstrip('-').split('-'); y = int(p[0]); return (-y if neg else y, int(p[1]) if len(p) > 1 else 1, int(p[2]) if len(p) > 2 else 1)
def boyali(i):
    d = DEV.get(i); return i in B or (d is not None and d.get('harita') in B)
LIM = gun('1281-01-01')
for y in Y:
    if not (-170 <= y['lon'] <= -30 and -57 <= y['lat'] <= 75): continue
    for p in y.get('s') or []:
        if p.get('d') == '__BOSLUK__' and gun(p['f']) < LIM:
            k = p.get('kaynak') or ''
            m = re.match(r'BOŞLUK BEYANI: sahip (\S+) \(renkler', k)
            tur = 'SAHIP-' + m.group(1) + ('(boyali)' if m and boyali(m.group(1)) else '(BOYASIZ)') if m else ('ARANDI' if 'arandı, bulunamadı' in k[:60] else 'DIGER')
            kn = DEV.get(m.group(1)) if m else None
            pen = ''
            if kn:
                pen = 'kunye %s..%s' % (kn['f'], kn.get('t'))
            print(y['ad'], '|', p['f'], p['t'], '|', tur, '|', pen, '|', os.path.basename(str(y.get('_kaynak'))))
