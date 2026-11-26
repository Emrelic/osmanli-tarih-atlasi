# -*- coding: utf-8 -*-
"""sehir_tarihce.py yaz/denetle yeni 'ad_kaynak' alanını kabul ediyor mu? (scratchpad'e yazar, data/ a dokunmaz)"""
import json, subprocess, os, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
L = json.load(open('denetim/SEHIR-DUNYA-1116/F2-1117/hint_birlesik11.json', encoding='utf-8'))
L[0]['ad_kaynak'] = [{'ad': 'Test', 'dil': 'hi', 'donem': None, 'kaynak': 'deneme'}]
t = os.environ.get('TEMP', '.')
json.dump(L, open(os.path.join(t, 'adtest.json'), 'w', encoding='utf-8'), ensure_ascii=False)
for cmd in (['py', 'arac/sehir_tarihce.py', 'yaz', os.path.join(t, 'adtest.json'), os.path.join(t, 'adtest.js'), 'ADTEST'],
            ['py', 'arac/sehir_tarihce.py', 'denetle', os.path.join(t, 'adtest.js')]):
    r = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
    print(' '.join(cmd[2:3]), 'çıkış', r.returncode, '|', (r.stdout.strip().splitlines() or [''])[-1])
print('ad_kaynak js içinde:', 'ad_kaynak' in open(os.path.join(t, 'adtest.js'), encoding='utf-8').read())
