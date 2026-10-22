# -*- coding: utf-8 -*-
import sys, os, json, datetime
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _uret import *

def gn(s):
    y, m, d = s.split('-')
    return datetime.date(int(y), int(m), int(d)).toordinal()

# sinir tarihleri per yer
sin = {}
for x in SINIR:
    sin.setdefault(x['yer_id'], []).append(x['t'])
eksik = []
def kontrol(ad, s_list):
    prev = None
    for p in s_list:
        if gn(p['f']) >= gn(p['t']): print('HATA f>=t', ad, p['f'], p['t'])
        if prev and gn(p['f']) < gn(prev['t']): print('HATA cakisma', ad, p['f'])
        prev = p
    # kirilma noktalari: her dilimin f ve t'si
    pts = set()
    for p in s_list:
        pts.add(p['f']); pts.add(p['t'])
    for t in sorted(pts):
        if not any(abs(gn(t) - gn(u)) <= 30 for u in sin.get(ad, [])):
            eksik.append((ad, t))
for y in YAMA: kontrol(y['ad'], y['s'])
for y in YER: kontrol(y['ad'], y['s'])
print('sinir maddesi olmayan s: kirilma noktasi:', len(eksik))
for e in eksik: print('  ', e)
# sinir yer_id'leri yama/yer listesinde mi
adlar = {y['ad'] for y in YAMA} | {y['ad'] for y in YER}
for x in SINIR:
    if x['yer_id'] not in adlar: print('sinir yer_id yok:', x['yer_id'])
# hicbir YYYY-MM bicimi
import re
for nm, L in (('KR', KR), ('SINIR', SINIR)):
    for m in L:
        if not re.match(r'^\d{4}-\d{2}-\d{2}$', m['t']): print('tarih bicimi', nm, m['t'])
for y in YER + YAMA:
    for p in y['s']:
        for a in ('f', 't'):
            if not re.match(r'^\d{4}-\d{2}-\d{2}$', p[a]): print('s tarih bicimi', y['ad'], p[a])
# tur kumesi
from collections import Counter
print(Counter(m['tur'] for m in KR))
print(Counter(m['kesinlik'] for m in KR))
# polity basina kron sayisi
c = Counter()
for m in KR:
    for t in m['taraflar']:
        c[t] += 1
for k in sorted(MINE): print(k, c.get(k, 0))
