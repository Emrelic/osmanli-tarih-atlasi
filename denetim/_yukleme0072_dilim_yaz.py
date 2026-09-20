# -*- coding: utf-8 -*-
"""PARCALAR havuzunun metin dilimini ayri dosyaya yazar (JSON.parse vs JS kaynak sinavi icin).
Gecici olcum dosyasi — commit EDILMEZ."""
import os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def dilim(metin, ad):
    m = re.search(r'window\.' + ad + r'\s*=\s*', metin)
    p = m.end()
    derin = 0; dize = False; kacis = False; i = p
    while i < len(metin):
        c = metin[i]
        if dize:
            if kacis: kacis = False
            elif c == '\\': kacis = True
            elif c == '"': dize = False
        elif c == '"': dize = True
        elif c in '[{': derin += 1
        elif c in ']}':
            derin -= 1
            if derin == 0: return metin[p:i + 1]
        i += 1
    raise SystemExit('kapanis bulunamadi: ' + ad)


m = open(os.path.join(KOK, 'data', 'donemler.js'), encoding='utf-8').read()
s = dilim(m, 'PARCALAR')
open(os.path.join(KOK, 'denetim', '_parcalar_olcum.json'), 'w', encoding='utf-8').write(s)
print('PARCALAR dilimi:', round(len(s) / 1048576.0, 2), 'MB')

m2 = open(os.path.join(KOK, 'data', 'devletler_harita.js'), encoding='utf-8').read()
s2 = dilim(m2, 'DEVLET_PARCALAR')
open(os.path.join(KOK, 'denetim', '_devletparca_olcum.json'), 'w', encoding='utf-8').write(s2)
print('DEVLET_PARCALAR dilimi:', round(len(s2) / 1048576.0, 2), 'MB')
