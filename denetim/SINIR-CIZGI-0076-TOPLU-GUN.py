# -*- coding: utf-8 -*-
"""Verilen gun(ler)de kirilan TUM yerlesimleri listeler — "toplu gun" (batch date) avi.
Kullanim: py denetim/SINIR-CIZGI-0076-TOPLU-GUN.py 1885-01-26 1885-02-05 ...
"""
import sys, os
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.path.insert(0, r'C:\atlas\arac')
os.chdir(r'C:\atlas')
import girdi

Y = girdi.yukle(sessiz=True)
for gun in sys.argv[1:]:
    print('\n== %s ==' % gun)
    n = 0
    for y in Y:
        vur = []
        for alan in ('d', 's', 'v', 'isg'):
            for p in (y.get(alan) or []):
                if p.get('f') == gun:
                    vur.append('%s BASLIYOR %s' % (alan, p.get('d') or p.get('kid') or p.get('k') or 'OSMANLI'))
                if p.get('t') == gun:
                    vur.append('%s BITIYOR %s' % (alan, p.get('d') or p.get('kid') or p.get('k') or 'OSMANLI'))
        if vur:
            n += 1
            print('  %-30s %8.3f,%8.3f  %s' % ((y.get('ad') or '?')[:30], y.get('lon') or 0, y.get('lat') or 0, ' · '.join(vur)))
    print('  TOPLAM %d yerlesim' % n)
