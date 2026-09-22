# -*- coding: utf-8 -*-
"""HARITA-0076 — 2. adım: SİVRİ / İNCE ŞERİT gövde ölçümü.

H-0022 · H-0071 · H-0075 · H-0093 ekran görüntülerinde gövdeden dışarı
fırlayan iğne/şerit parçalar var. Soru: bunlar ÖLÇÜLEBİLİR bir sınıf mı,
yoksa gözün yanılması mı?

Ölçüt — Polsby-Popper tıkızlığı:  C = 4*pi*alan / cevre^2
  daire C=1 · kare C=0.785 · 1:20 oranlı ince şerit C~0.06
Eşik: C < 0.08 VE alan >= 0.0005 derece^2 (gözle görülür) ⇒ SİVRİ.

Ayrıca bildirilen dört pencerede kaç sivri parça var, onu sayar.
"""
import sys

sys.path.insert(0, r'C:\atlas\denetim')
from importlib import import_module

olc = import_module('HARITA-0076-olc') if False else None  # tire yüzünden import edilemez

import io
import json
import math

sys.stdout.reconfigure(encoding='utf-8')
KOK = r'C:\atlas'


def havuz_oku(yol, ad):
    onek = 'window.' + ad + ' = '
    with io.open(yol, encoding='utf-8') as f:
        for satir in f:
            if satir.startswith(onek):
                g = satir[len(onek):].rstrip()
                if g.endswith(';'):
                    g = g[:-1]
                return json.loads(g)
    raise SystemExit('BULUNAMADI ' + ad)


def alan_cevre(r):
    a = 0.0
    c = 0.0
    n = len(r)
    for i in range(n - 1):
        x1, y1 = r[i][0], r[i][1]
        x2, y2 = r[i + 1][0], r[i + 1][1]
        a += x1 * y2 - x2 * y1
        c += math.hypot(x2 - x1, y2 - y1)
    return abs(a) / 2.0, c


PENCERE = [
    ('H-0022 Asir',        40.46, 45.05, 18.27, 21.14),
    ('H-0071 Dogu Sudan',  41.68, 46.90, 18.72, 21.27),
    ('H-0075 Dogubayazit', 42.83, 44.68, 39.36, 40.03),
    ('H-0093 Skiathos',    23.04, 23.49, 39.08, 39.59),
]


def tara(havuz, ad, esik_c=0.08, esik_alan=0.0005):
    sivri = []
    for i, r in enumerate(havuz):
        if len(r) < 4:
            continue
        a, c = alan_cevre(r)
        if c <= 0 or a < esik_alan:
            continue
        tikiz = 4 * math.pi * a / (c * c)
        if tikiz < esik_c:
            xs = [p[0] for p in r]
            ys = [p[1] for p in r]
            sivri.append((i, tikiz, a, (min(xs), min(ys), max(xs), max(ys))))
    print('=' * 72)
    print('%s — halka %d · SIVRI (C<%.2f, alan>=%.4f) : %d  (%%%.2f)'
          % (ad, len(havuz), esik_c, esik_alan, len(sivri),
             100.0 * len(sivri) / max(1, len(havuz))))
    for etiket, x0, x1, y0, y1 in PENCERE:
        icinde = [s for s in sivri
                  if s[3][0] < x1 and s[3][2] > x0 and s[3][1] < y1 and s[3][3] > y0]
        print('   %-22s pencerede sivri: %d' % (etiket, len(icinde)))
        for i, t, a, b in sorted(icinde, key=lambda s: s[1])[:6]:
            print('        #%-6d C=%.4f alan=%.5f bbox=%.3f,%.3f..%.3f,%.3f'
                  % (i, t, a, b[0], b[1], b[2], b[3]))
    en = sorted(sivri, key=lambda s: s[1])[:10]
    print('   --- butun havuzun en ince 10 parcasi ---')
    for i, t, a, b in en:
        print('        #%-6d C=%.4f alan=%.5f bbox=%.3f,%.3f..%.3f,%.3f'
              % (i, t, a, b[0], b[1], b[2], b[3]))
    return sivri


if __name__ == '__main__':
    tara(havuz_oku(KOK + r'\data\donemler.js', 'PARCALAR'), 'PARCALAR (Osmanli petek)')
    tara(havuz_oku(KOK + r'\data\devletler_harita.js', 'DEVLET_PARCALAR'), 'DEVLET_PARCALAR (yabanci)')
