# -*- coding: utf-8 -*-
"""HARITA-0076 — "bozuk harita" kümesinin kök sebep ölçümü, 1. adım.

Sorduğu soru: ÜRETİLMİŞ gövde havuzlarında (PARCALAR, DEVLET_PARCALAR)
DİKDÖRTGEN / dejenere halka var mı? H-0139, H-0147, H-0148 ekran
görüntülerindeki eksen hizalı kutu, veri tarafında böyle bir halkaya
karşılık geliyorsa kusur VERİDEDİR (üretimde); gelmiyorsa kusur
ÇİZİMDEDİR (MapLibre/earcut) ve ölçüm oraya kayar.

Ölçüt:
  * dikdortgen : halkanın BÜTÜN noktaları bbox kenarında ve tekil nokta <= 6
  * seyrek     : bbox köşegeni >= 1.0 derece ama nokta sayısı <= 8
  * bowtie     : halka kendi kendini kesiyor (kaba tarama, yalnız seyreklerde)

Çıktı: sayılar + ilk 40 örnek. Hüküm yok — hüküm rapordadır.
"""
import io
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

KOK = r'C:\atlas'


def havuz_oku(yol, ad):
    """<ad> = [...] satırını bulup JSON olarak çözer."""
    onek = 'window.' + ad + ' = '
    with io.open(yol, encoding='utf-8') as f:
        for satir in f:
            if satir.startswith(onek):
                govde = satir[len(onek):].rstrip()
                if govde.endswith(';'):
                    govde = govde[:-1]
                return json.loads(govde)
    raise SystemExit('BULUNAMADI: ' + ad + ' @ ' + yol)


def kesisir(p1, p2, p3, p4):
    def yon(a, b, c):
        v = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
        return (v > 1e-12) - (v < -1e-12)
    d1, d2 = yon(p3, p4, p1), yon(p3, p4, p2)
    d3, d4 = yon(p1, p2, p3), yon(p1, p2, p4)
    return d1 != d2 and d3 != d4


def halka_olc(h):
    if len(h) < 4:
        return None
    xs = [p[0] for p in h]
    ys = [p[1] for p in h]
    x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
    tekil = set((p[0], p[1]) for p in h)
    kosegen = ((x1 - x0) ** 2 + (y1 - y0) ** 2) ** 0.5
    e = 1e-9
    kenarda = all(
        abs(p[0] - x0) < e or abs(p[0] - x1) < e or
        abs(p[1] - y0) < e or abs(p[1] - y1) < e
        for p in h
    )
    return {
        'n': len(h), 'tekil': len(tekil), 'bbox': (x0, y0, x1, y1),
        'kosegen': kosegen, 'kenarda': kenarda,
    }


def bowtie(h):
    n = len(h) - 1
    if n < 4 or n > 60:
        return False
    for i in range(n):
        for j in range(i + 2, n):
            if i == 0 and j == n - 1:
                continue
            if kesisir(h[i], h[i + 1], h[j], h[j + 1]):
                return True
    return False


def tara(havuz, ad):
    dikdortgen, seyrek, bowtieler = [], [], []
    for i, h in enumerate(havuz):
        o = halka_olc(h)
        if o is None:
            continue
        if o['kenarda'] and o['tekil'] <= 6:
            dikdortgen.append((i, o))
        if o['kosegen'] >= 1.0 and o['n'] <= 8:
            seyrek.append((i, o))
            if bowtie(h):
                bowtieler.append((i, o))
    print('=' * 72)
    print(ad, ' halka:', len(havuz))
    print('  DIKDORTGEN (hepsi bbox kenarinda, tekil<=6) :', len(dikdortgen))
    print('  SEYREK     (kosegen>=1deg, n<=8)            :', len(seyrek))
    print('  BOWTIE     (seyrekler icinde kendini kesen) :', len(bowtieler))
    for etiket, kume in (('DIKDORTGEN', dikdortgen), ('SEYREK', seyrek)):
        for i, o in kume[:40]:
            x0, y0, x1, y1 = o['bbox']
            print('   %-10s #%-7d n=%-4d tekil=%-4d bbox=%.3f,%.3f..%.3f,%.3f kosegen=%.3f'
                  % (etiket, i, o['n'], o['tekil'], x0, y0, x1, y1, o['kosegen']))
        if len(kume) > 40:
            print('   ... +%d daha' % (len(kume) - 40))
    return dikdortgen, seyrek, bowtieler


if __name__ == '__main__':
    tara(havuz_oku(KOK + r'\data\devletler_harita.js', 'DEVLET_PARCALAR'), 'DEVLET_PARCALAR')
    tara(havuz_oku(KOK + r'\data\donemler.js', 'PARCALAR'), 'PARCALAR')
    tara(havuz_oku(KOK + r'\data\donemler.js', 'SERBEST'), 'SERBEST')
