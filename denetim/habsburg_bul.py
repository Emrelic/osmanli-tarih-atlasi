# -*- coding: utf-8 -*-
import sys, io, contextlib
sys.path.insert(0, 'arac')
with contextlib.redirect_stdout(io.StringIO()):
    import girdi
    Y = girdi.yukle(sessiz=True)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
for y in Y:
    for k in ('s', 'isg'):
        for p in y.get(k) or []:
            if p.get('d') == 'habsburg':
                print(y['ad'], y.get('_dosya') or y.get('dosya'), k, p['f'], p['t'])
