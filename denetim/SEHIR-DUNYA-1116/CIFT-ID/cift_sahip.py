# -*- coding: utf-8 -*-
"""Çift id'lerde sahip zinciri farkı (ortak önek sonrası) ve yalnız-bir-tarafta olay (±400 gün + ortak kelime eşleşmesiyle 'aynı olay farklı hassasiyet' ayıklanır). SALT OKUR."""
import json, io, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.path.insert(0, 'arac')
import sehir_tarihce as st
T = json.load(open('denetim/SEHIR-DUNYA-1116/CIFT-ID/cift_tam.json', encoding='utf-8'))
def g(t):
    try: return st.gun_no(t)
    except Exception: return None
def kel(s): return {w for w in re.findall(r'\w{5,}', (s or '').lower())}
def ayni(o, p):
    ta, tb = g(o.get('t')), g(p.get('t'))
    if ta is None or tb is None: return False
    d = abs(ta - tb)
    if d <= 30: return True
    return d <= 400 and len(kel(o.get('b')) & kel(p.get('b'))) >= 2
for id, v in T.items():
    a, b = v['a'], v['b']; fa, fb = v['dosyalar']
    sa, sb = a.get('sahip') or [], b.get('sahip') or []
    k = 0
    while k < min(len(sa), len(sb)) and (sa[k]['f'], sa[k]['d']) == (sb[k]['f'], sb[k]['d']): k += 1
    print('=' * 6, id, fa, len(sa), 'vs', fb, len(sb), '| ortak önek', k)
    if k < len(sa) or k < len(sb):
        print('   A ek:', [(s['f'], s['t'], s['d']) for s in sa[k:k + 6]])
        print('   B ek:', [(s['f'], s['t'], s['d']) for s in sb[k:k + 6]])
    A, B = a.get('olay') or [], b.get('olay') or []
    ya = [o for o in A if not any(ayni(o, p) for p in B)]; yb = [o for o in B if not any(ayni(o, p) for p in A)]
    print('   gerçek yalnız A olay', len(ya), [(o['t'], (o.get('b') or '')[:45]) for o in ya][:8])
    print('   gerçek yalnız B olay', len(yb), [(o['t'], (o.get('b') or '')[:45]) for o in yb][:16])
