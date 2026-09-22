# -*- coding: utf-8 -*-
"""H-0037 — 1878-07-13'te biten eflak/bogdan tâbilik pencerelerini dosyasıyla listeler."""
import sys, os, json
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.path.insert(0, r'C:\atlas\arac')
os.chdir(r'C:\atlas')
import girdi

Y = girdi.yukle(sessiz=True)
cikti = []
for y in Y:
    for p in (y.get('v') or []):
        if p.get('t') != '1878-07-13':
            continue
        kid = p.get('kid') or ''
        k = p.get('k') or ''
        if kid in ('eflak', 'bogdan') or 'Eflak' in k or 'Boğdan' in k:
            cikti.append({
                'dosya': y.get('_kaynak'), 'ad': y.get('ad'),
                'lon': y.get('lon'), 'lat': y.get('lat'),
                'v_kid': kid or k, 'v_f': p.get('f'), 'v_t': p.get('t'),
                's': [(q.get('f'), q.get('t'), q.get('d')) for q in (y.get('s') or []) if q.get('f') == '1878-07-13']
            })
print(json.dumps(cikti, ensure_ascii=False, indent=1))
print('TOPLAM', len(cikti))
