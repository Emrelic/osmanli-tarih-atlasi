# -*- coding: utf-8 -*-
"""12 aynı-id çift: olay eşleştirme (±30 gün), yalnız-bir-tarafta olan olaylar, sahip zinciri farkı, kaynak/tanık kalitesi. SALT OKUR."""
import json, io, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.path.insert(0, 'arac')
import sehir_tarihce as st
atlas = st.atlas_ilk_gunleri()
T = json.load(open('denetim/SEHIR-DUNYA-1116/CIFT-ID/cift_tam.json', encoding='utf-8'))
def g(t):
    try: return st.gun_no(t)
    except Exception: return None
def eslestir(A, B):
    """A'nın her olayına ±30 gün içinde B'de aynı tür olay var mı."""
    yalniz = []
    for o in A:
        t = g(o.get('t'))
        ok = any(abs((g(p.get('t')) or 10**9) - (t if t is not None else -10**9)) <= 30 for p in B)
        if not ok: yalniz.append(o)
    return yalniz
def kalite(c):
    o = c.get('olay') or []
    tan = sum(1 for x in o if x.get('tanik')); kn = sum(1 for x in o if x.get('kaynak') and 'bulunamad' not in str(x.get('kaynak')).lower())
    return dict(olay=len(o), olay_tanikli=tan, olay_kaynakli=kn, sahip=len(c.get('sahip') or []), sahip_kaynakli=sum(1 for x in (c.get('sahip') or []) if x.get('kaynak')), ic_not=len(c.get('ic_not') or ''), ilk_t=c['ilk']['t'], ilk_tanik=bool(c['ilk'].get('tanik')))
for id, v in T.items():
    a, b = v['a'], v['b']; fa, fb = v['dosyalar']
    ka, kb = kalite(a), kalite(b)
    ya = eslestir(a.get('olay') or [], b.get('olay') or []); yb = eslestir(b.get('olay') or [], a.get('olay') or [])
    atl = atlas.get(a.get('atlas_ad') or '')
    print('=' * 8, id, '|', fa, 'vs', fb, '| atlas_ad', a.get('atlas_ad'), '/', b.get('atlas_ad'), '| atlas ilk', atl)
    print('  A', fa, ka); print('  B', fb, kb)
    print('  sahip A', [(s['f'], s['t'], s['d']) for s in a.get('sahip') or []][:4], '...', len(a.get('sahip') or []))
    print('  sahip B', [(s['f'], s['t'], s['d']) for s in b.get('sahip') or []][:4], '...', len(b.get('sahip') or []))
    print('  yalnız A olay', len(ya), [(o['t'], (o.get('b') or '')[:40]) for o in ya][:6])
    print('  yalnız B olay', len(yb), [(o['t'], (o.get('b') or '')[:40]) for o in yb][:6])
