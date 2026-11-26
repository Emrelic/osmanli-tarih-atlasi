# -*- coding: utf-8 -*-
"""HER DOSYA KENDI HEDEFINI SOYLUYOR MU? — 440 maddenin 418'i
   `data/devletler.js`e (kunye kronolojisi) gidiyor, `olaylar*.js`e DEGIL.
   🔴 Bu ayrimi yapmadan toplamak, kunye maddelerini cekirdege dokerdi."""
import json, io, glob, os, re, sys
sys.dont_write_bytecode = True

HEDEF_ANAHTAR = ('hedef_dosya', '_HEDEF', 'hedef', 'HEDEF', 'hedef_dosya_onerisi')

print('%-44s %s' % ('dosya', 'BEYAN EDILEN HEDEF'))
print('-' * 100)
cekirdek, kunye, belirsiz = [], [], []
for f in sorted(glob.glob('denetim/KRONOLOJI-*.json')):
    ad = os.path.basename(f)
    try:
        d = json.load(io.open(f, encoding='utf-8'))
    except Exception:
        continue
    h = None
    for a in HEDEF_ANAHTAR:
        if isinstance(d, dict) and a in d:
            h = d[a]
            break
    if h is None:
        # metnin icinde ara
        ham = io.open(f, encoding='utf-8').read()
        m = re.search(r'data/(olaylar[a-z0-9_]*\.js|devletler\.js)', ham)
        h = ('(metinden) ' + m.group(0)) if m else None
    hs = json.dumps(h, ensure_ascii=False)[:66] if not isinstance(h, str) else h[:66]
    print('%-44s %s' % (ad, hs if h else '🔴 BEYAN YOK'))
    if h and 'olaylar' in str(h):
        cekirdek.append(ad)
    elif h and 'devletler' in str(h):
        kunye.append(ad)
    else:
        belirsiz.append(ad)

print()
print('🟢 CEKIRDEGE (data/olaylar*.js) : %d  %s' % (len(cekirdek), cekirdek))
print('🟡 KUNYEYE (data/devletler.js)  : %d  %s' % (len(kunye), kunye))
print('🔴 BEYANSIZ                     : %d  %s' % (len(belirsiz), belirsiz))
