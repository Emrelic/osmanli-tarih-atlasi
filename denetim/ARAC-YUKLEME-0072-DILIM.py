# -*- coding: utf-8 -*-
"""YUKLEME-0072 (b) — DEVRE GORE PARCALAMANIN gercek kazanci.

Soru: tarayici belli bir GUNU gosterirken gövde havuzunun yuzde kaci gerekli?
Olcum: DONEMLER (Osmanli) ve DEVLET_HARITA (yabanci) kayitlarindaki tarih
pencereleri ile havuz indeksleri kesistirilir; havuz ogelerinin GERCEK bayt
boyu (kaynak metindeki dilimi) toplanir. Paylasilan oge BIR KEZ sayilir.
Ayrica yuzyil dilimlerine bolunce her dilimin bayti (birlesim) olculur.

Cikti: denetim/YUKLEME-0072-DILIM.json
"""
import json, os, re, sys

sys.stdout.reconfigure(encoding='utf-8')
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, 'denetim'))
from importlib import import_module
K = import_module('ARAC-YUKLEME-0072-KALDIRAC'.replace('-', '_')) if False else None

# --- dizi dilimleyici (KALDIRAC.py ile ayni; tire'li dosya adi import edilemiyor) ---
def dizi_dilimle(metin, bas):
    ogeler = []; derin = 0; i = bas; oge_bas = None; dize = False; kacis = False; n = len(metin)
    while i < n:
        c = metin[i]
        if dize:
            if kacis: kacis = False
            elif c == '\\': kacis = True
            elif c == '"': dize = False
        elif c == '"': dize = True
        elif c in '[{':
            derin += 1
            if derin == 2 and oge_bas is None: oge_bas = i
        elif c in ']}':
            derin -= 1
            if derin == 1 and oge_bas is not None:
                ogeler.append((oge_bas, i + 1)); oge_bas = None
            elif derin == 0:
                return ogeler, i
        elif c == ',' and derin == 1: oge_bas = None
        i += 1
    return ogeler, n


def yukle(metin, ad):
    m = re.search(r'window\.' + ad + r'\s*=\s*', metin)
    if not m: return None, None
    p = m.end()
    ogeler, bit = dizi_dilimle(metin, p)
    return ogeler, (p, bit + 1)


def gun(s):
    p = (s or '')[:10].split('-')
    try: return int(p[0]) * 10000 + int(p[1]) * 100 + int(p[2])
    except Exception:
        try: return int(p[0]) * 10000
        except Exception: return 0


ORNEK_GUN = ['1300-01-01', '1453-05-29', '1529-09-27', '1683-07-14',
             '1789-01-01', '1878-07-13', '1914-08-01', '1922-11-01']

rap = {'ornek_gun': {}, 'dilim': {}}

# ---------------- Osmanli ----------------
yol = os.path.join(KOK, 'data', 'donemler.js')
m_os = open(yol, encoding='utf-8').read()
hav_os, sp_os = yukle(m_os, 'PARCALAR')
boy_os = [b - a for a, b in hav_os]
don_ogeler, dsp = yukle(m_os, 'DONEMLER')
DON = json.loads(m_os[dsp[0]:dsp[1]])
HAVUZ_OS = sum(boy_os)

# ---------------- yabanci ----------------
yol2 = os.path.join(KOK, 'data', 'devletler_harita.js')
m_yb = open(yol2, encoding='utf-8').read()
hav_yb, sp_yb = yukle(m_yb, 'DEVLET_PARCALAR')
boy_yb = [b - a for a, b in hav_yb]
dh_ogeler, dhsp = yukle(m_yb, 'DEVLET_HARITA')
DH = json.loads(m_yb[dhsp[0]:dhsp[1]])
HAVUZ_YB = sum(boy_yb)

# yabanci donemleri duzlestir: (f,t,[g])
YB_DON = []
for d in DH:
    for dn in d.get('dnm', []):
        YB_DON.append((gun(dn.get('f')), gun(dn.get('t')), dn.get('g', [])))

mb = lambda b: round(b / 1048576.0, 2)

for g in ORNEK_GUN:
    G = gun(g)
    i_os = set()
    for d in DON:
        if gun(d.get('f')) <= G < gun(d.get('t')):
            i_os.update(d.get('o', [])); i_os.update(d.get('c', []))
    b_os = sum(boy_os[i] for i in i_os if i < len(boy_os))
    i_yb = set()
    for f, t, gg in YB_DON:
        if f <= G < t: i_yb.update(gg)
    b_yb = sum(boy_yb[i] for i in i_yb if i < len(boy_yb))
    rap['ornek_gun'][g] = {
        'osmanli_oge': len(i_os), 'osmanli_mb': mb(b_os), 'osmanli_yuzde': round(100.0 * b_os / HAVUZ_OS, 2),
        'yabanci_oge': len(i_yb), 'yabanci_mb': mb(b_yb), 'yabanci_yuzde': round(100.0 * b_yb / HAVUZ_YB, 2),
        'toplam_mb': mb(b_os + b_yb),
        'toplam_yuzde': round(100.0 * (b_os + b_yb) / (HAVUZ_OS + HAVUZ_YB), 2),
    }

# ---------------- yuzyil dilimleri (birlesim) ----------------
for yy in range(13, 21):
    A, B = yy * 100 * 10000, (yy + 1) * 100 * 10000
    i_os = set()
    for d in DON:
        if gun(d.get('f')) < B and gun(d.get('t')) > A:
            i_os.update(d.get('o', [])); i_os.update(d.get('c', []))
    i_yb = set()
    for f, t, gg in YB_DON:
        if f < B and t > A: i_yb.update(gg)
    b_os = sum(boy_os[i] for i in i_os if i < len(boy_os))
    b_yb = sum(boy_yb[i] for i in i_yb if i < len(boy_yb))
    rap['dilim'][str(yy) + '. yy'] = {
        'osmanli_mb': mb(b_os), 'yabanci_mb': mb(b_yb), 'toplam_mb': mb(b_os + b_yb),
        'toplam_yuzde': round(100.0 * (b_os + b_yb) / (HAVUZ_OS + HAVUZ_YB), 1)}

rap['havuz'] = {'osmanli_mb': mb(HAVUZ_OS), 'osmanli_oge': len(hav_os),
                'yabanci_mb': mb(HAVUZ_YB), 'yabanci_oge': len(hav_yb),
                'toplam_mb': mb(HAVUZ_OS + HAVUZ_YB)}
rap['dilim_toplami_mb'] = round(sum(v['toplam_mb'] for v in rap['dilim'].values()), 2)

json.dump(rap, open(os.path.join(KOK, 'denetim', 'YUKLEME-0072-DILIM.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)

print('havuz  : Osmanli', rap['havuz']['osmanli_mb'], 'MB /', rap['havuz']['osmanli_oge'], 'oge  |  yabanci',
      rap['havuz']['yabanci_mb'], 'MB /', rap['havuz']['yabanci_oge'], 'oge  |  TOPLAM', rap['havuz']['toplam_mb'], 'MB')
print('\n--- TEK GUN icin gereken govde ---')
print('  %-12s %10s %10s %10s %8s' % ('gun', 'osmanli', 'yabanci', 'toplam', 'havuzun'))
for g, v in rap['ornek_gun'].items():
    print('  %-12s %7.2f MB %7.2f MB %7.2f MB %7.2f%%' % (g, v['osmanli_mb'], v['yabanci_mb'], v['toplam_mb'], v['toplam_yuzde']))
print('\n--- YUZYIL DILIMI (o yuzyili gostermek icin gereken govde) ---')
for k, v in rap['dilim'].items():
    print('  %-8s osm %6.2f MB  yab %6.2f MB  TOPLAM %6.2f MB  (%4.1f%%)' % (k, v['osmanli_mb'], v['yabanci_mb'], v['toplam_mb'], v['toplam_yuzde']))
print('\n8 dilimin toplami:', rap['dilim_toplami_mb'], 'MB  (havuz', rap['havuz']['toplam_mb'], 'MB) => cakisma payi',
      round(rap['dilim_toplami_mb'] / rap['havuz']['toplam_mb'], 2), 'kat')
