# -*- coding: utf-8 -*-
import json, re, os, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.dirname(os.path.abspath(__file__))
ids = set(re.findall(r'id:"([^"]+)"', open(os.path.join(D, '..', '..', '..', 'data', 'devletler.js'), encoding='utf-8').read()))
ids |= {'masakado-shinno', 'abe-mutsu'}
L = lambda n: json.load(open(os.path.join(D, n), encoding='utf-8'))
cok, sin, yama, kun = L('_part_jp_cok.json'), L('_part_jp_sinir.json'), L('_part_jp_yama.json'), L('_part_jp_kunye.json')
bad = []
def ordi(s):
    y, m, d = s.split('-'); return int(y) * 372 + int(m) * 31 + int(d)
for m in cok + sin:
    if not re.match(r'^\d{4}-\d\d-\d\d$', m['t']): bad.append(('tarih', m['t']))
    for x in m['taraflar']:
        if x not in ids: bad.append(('id', x, m['t']))
    if not m.get('kaynak'): bad.append(('kaynak', m['t']))
for y in yama:
    prev = None
    for p in y['s_onek']:
        if p['d'] not in ids: bad.append(('d', p['d']))
        if ordi(p['f']) >= ordi(p['t']): bad.append(('f>=t', y['ad'], p['f']))
        if prev and ordi(p['f']) < ordi(prev): bad.append(('cakisma', y['ad'], p['f']))
        prev = p['t']
        if not any(s['yer_id'] == y['ad'] and s['t'] == p['f'] for s in sin): bad.append(('sinir yok', y['ad'], p['f']))
    if prev != '1281-01-01': bad.append(('devam', y['ad'], prev))
for k in kun:
    if ordi(k['f']) >= ordi(k['t']): bad.append(('kunye f>=t',))
    if k['id'] in ids and k['id'] != 'abe-mutsu': bad.append(('kunye id var', k['id']))
print('cok', len(cok), 'sinir', len(sin), 'yama', len(yama), 'kusur', bad)
from collections import Counter
print(Counter(t for m in cok for t in m['taraflar']))
