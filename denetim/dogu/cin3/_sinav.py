# -*- coding: utf-8 -*-
import json, re, subprocess, os, sys
D = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.abspath(os.path.join(D, '..', '..', '..'))
node = r'''
const vm=require('vm'),fs=require('fs');
const sb={window:{}};vm.createContext(sb);
for(const f of process.argv.slice(1)){vm.runInContext(fs.readFileSync(f,'utf8'),sb);}
console.log(JSON.stringify(sb.window));
'''
def load(files):
    r = subprocess.run(['node', '-e', node] + files, capture_output=True, cwd=KOK)
    return json.loads(r.stdout.decode('utf-8'))
w = load([os.path.join(D, x) for x in ['kunye_yeni.js', 'kronoloji_cok_dogu_cin3.js', 'kronoloji_sinir_dogu_cin3.js', 'yama_dogu_cin3.js', 'yerlesimler_dogu_cin3.js']])
dev = load([os.path.join(KOK, 'data/devletler.js'), os.path.join(KOK, 'denetim/_gecici_devletler_ms1.js')])
ids = {d['id'] for d in dev.get('DEVLETLER', [])} | {d['id'] for d in w['DOGU_KUNYE_CIN3']}
sys.path.insert(0, D)
from _gzlib import jdn_jul, tparse
def gn(t):
    y, m, d = tparse(t); return jdn_jul(y, m, d)
bad = []
yama = w['YAMA_DOGU_CIN3']; sinir = w['KRONOLOJI_SINIR_DOGU_CIN3']; cok = w['KRONOLOJI_COK_DOGU_CIN3']
# 1) yama dilimleri
bounds = []
for y in yama:
    prev = None
    for p in y['s']:
        if p['d'] not in ids: bad.append('yama %s: kimlik yok %s' % (y['ad'], p['d']))
        if gn(p['f']) >= gn(p['t']): bad.append('yama %s: f>=t %s %s' % (y['ad'], p['f'], p['t']))
        if prev and gn(p['f']) != gn(prev['t']): bad.append('yama %s: bosluk/cakisma %s -> %s' % (y['ad'], prev['t'], p['f']))
        if not p.get('kaynak'): bad.append('yama %s: kaynak yok' % y['ad'])
        if prev: bounds.append((y['ad'], p['f']))
        prev = p
# 2) devir (kirilma) basina sinir maddesi ±30 gun (yer_id ile)
by = {}
for m in sinir: by.setdefault(m['yer_id'], []).append(m)
for ad, f in bounds:
    ok = any(abs(gn(m['t']) - gn(f)) <= 30 for m in by.get(ad, []))
    if not ok: bad.append('kirilma %s %s: ±30 gun sinir maddesi yok' % (ad, f))
# her sinir maddesi bir yama dilim basina (ya da dilim bitisine) denk gelmeli
for m in sinir:
    ok = False
    for y in yama:
        if y['ad'] != m['yer_id']: continue
        for p in y['s']:
            if m['t'] in (p['f'], p['t']): ok = True
    if not ok: bad.append('sinir maddesi yama kirilmasina denk gelmiyor: %s %s' % (m['yer_id'], m['t']))
# 3) YYYY-MM yok
for fn in ['kunye_yeni.js', 'kronoloji_cok_dogu_cin3.js', 'kronoloji_sinir_dogu_cin3.js', 'yama_dogu_cin3.js']:
    s = open(os.path.join(D, fn), encoding='utf-8').read()
    for mm in re.finditer(r'"(?:t|f)": "(-?\d{3,5}-\d{2})"', s): bad.append('YYYY-MM: %s %s' % (fn, mm.group(1)))
    for mm in re.finditer(r'"(?:t|f)": "(\d{1,3}-\d{2}-\d{2})"', s): bad.append('3 haneli yil dolgusuz: %s %s' % (fn, mm.group(1)))
# 4) toprak maddesi yer'i atlasta mevcut mu (sinir yer_id'leri yama kayitlari)
yam_ad = {y['ad'] for y in yama}
for m in sinir:
    if m['yer_id'] not in yam_ad: bad.append('sinir yer_id yama listesinde yok: %s' % m['yer_id'])
# 5) cok: toprak-kazanc/kayip yok
for m in cok:
    if m['tur'] in ('toprak-kazanc', 'toprak-kayip'): bad.append('cok icinde toprak maddesi: %s %s' % (m['t'], m['b']))
# 6) polity basina madde sayisi (cok + sinir + kunye iskelet)
from collections import Counter
c = Counter()
for m in cok + sinir:
    for t in m['taraflar'][:1]: c['ilk:' + t] += 1
    for t in m['taraflar']: c[t] += 1
print(json.dumps({'ihlal': len(bad), 'tarafSay': dict(sorted(c.items()))}, ensure_ascii=False))
for b in bad: print('IHLAL', b)
sys.exit(1 if bad else 0)
