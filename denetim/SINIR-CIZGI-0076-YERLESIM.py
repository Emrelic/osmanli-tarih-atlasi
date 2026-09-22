# -*- coding: utf-8 -*-
"""Kutu + gun ver, o kutudaki YERLESIMLERI ve o gunku sahibini bas.
Kullanim: py denetim/SINIR-CIZGI-0076-YERLESIM.py <G> <K> <B> <D> [gun]
Kaynak: arac/girdi.py GIRDI_DOSYALARI (CANLI liste — CLAUDE.md §5).
"""
import sys, os
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.path.insert(0, r'C:\atlas\arac')
os.chdir(r'C:\atlas')
import girdi

G, K, B, D = map(float, sys.argv[1:5])
GUN = sys.argv[5] if len(sys.argv) > 5 else None


def pad(s):
    if not s:
        return None
    p = str(s).split('-')
    y = p[0].zfill(4)
    a = p[1] if len(p) > 1 else '01'
    g = p[2] if len(p) > 2 else '01'
    return y + '-' + a + '-' + g


Y = girdi.yukle(sessiz=True)

g = pad(GUN) if GUN else None
print('kutu %.2f-%.2fK %.2f-%.2fD · gun %s · evren %d yerlesim' % (G, K, B, D, GUN or '(yok)', len(Y)))
sayi = 0
for y in Y:
    lat = y.get('lat') if isinstance(y, dict) else None
    lon = y.get('lon') if isinstance(y, dict) else None
    if lat is None or lon is None:
        continue
    if not (B <= lon <= D and G <= lat <= K):
        continue
    sayi += 1
    sahip = []
    for p in (y.get('d') or []):          # `d:` = OSMANLI DOGRUDAN penceresi (devlet id'si YOK)
        f, t = pad(p.get('f')), pad(p.get('t'))
        if g and ((f and g < f) or (t and g >= t)):
            continue
        sahip.append('OSMANLI[%s→%s]' % (p.get('f'), p.get('t')))
    for p in (y.get('s') or []):
        f, t = pad(p.get('f')), pad(p.get('t'))
        if g and ((f and g < f) or (t and g >= t)):
            continue
        sahip.append('%s[%s→%s]' % (p.get('d'), p.get('f'), p.get('t')))
    tabi = []
    for p in (y.get('v') or []):
        f, t = pad(p.get('f')), pad(p.get('t'))
        if g and ((f and g < f) or (t and g >= t)):
            continue
        tabi.append('%s[%s→%s]' % (p.get('kid') or p.get('k'), p.get('f'), p.get('t')))
    isg = []
    for p in (y.get('isg') or []):
        f, t = pad(p.get('f')), pad(p.get('t'))
        if g and ((f and g < f) or (t and g >= t)):
            continue
        isg.append('%s[%s→%s]' % (p.get('d') or p.get('kid'), p.get('f'), p.get('t')))
    print('  %-28s %8.4f,%8.4f  s:%s%s%s' % (
        (y.get('ad') or '?')[:28], lon, lat,
        ('+'.join(sahip) if sahip else ('SAHIPSIZ' if g else '(gun yok)')),
        ('  v:' + '+'.join(tabi)) if tabi else '',
        ('  isg:' + '+'.join(isg)) if isg else ''))
print('  toplam %d nokta' % sayi)
