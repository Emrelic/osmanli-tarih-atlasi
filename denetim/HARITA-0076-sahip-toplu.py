# -*- coding: utf-8 -*-
"""HARITA-0076 — D kovasının bütün pencerelerini TEK yüklemede ölçer.
(`HARITA-0076-sahip.py` aynı işi tek pencere için yapar; bu sürüm
`girdi.yukle`yi bir kez çağırdığı için altı ölçüm altı kat ucuza gelir.)
"""
import sys

sys.path.insert(0, r'C:\atlas\arac')
sys.path.insert(0, r'C:\atlas\denetim')
sys.stdout.reconfigure(encoding='utf-8')

import girdi  # noqa: E402
import importlib.util  # noqa: E402

_spec = importlib.util.spec_from_file_location(
    'h76sahip', r'C:\atlas\denetim\HARITA-0076-sahip.py')
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
gun_no, sahip = _m.gun_no, _m.sahip

PENCERELER = [
    ('H-0023 Katar yarimadasi', 49.60, 52.15, 23.48, 26.71, '1871-04-20'),
    ('H-0038 Tuna/Balkan',      21.55, 30.33, 42.06, 47.79, '1878-01-04'),
    ('H-0064 Misir',            24.00, 34.00, 22.00, 31.50, '1882-09-13'),
    ('H-0065 Darfur merkez',    22.52, 25.24, 12.07, 14.09, '1883-01-19'),
    ('H-0068 Darfur-Kordofan',  22.90, 29.99, 11.44, 14.39, '1883-12-23'),
    ('H-0095 Bosna (Bihac)',    14.95, 18.16, 44.68, 45.78, '1899-11-27'),
    ('H-0121 Sina',             32.87, 35.32, 27.83, 29.86, '1911-10-08'),
    ('H-0136 Trakya (Tekirdag)', 27.06, 27.91, 40.64, 41.35, '1913-03-06'),
]


def main():
    Y = girdi.yukle(sessiz=True)
    if isinstance(Y, tuple):
        Y = Y[0]
    for etiket, x0, x1, y0, y1, tarih in PENCERELER:
        gun = gun_no(tarih)
        ic = [y for y in Y
              if x0 <= float(y.get('lon', 0)) <= x1 and y0 <= float(y.get('lat', 0)) <= y1]
        sayac = {}
        for y in ic:
            o, v = sahip(y, gun)
            k = (o or 'SAHIPSIZ') + (' | tabi:' + str(v) if v else '')
            sayac.setdefault(k, []).append(y.get('ad', '?'))
        print('=' * 74)
        print('%-26s %s   nokta: %d' % (etiket, tarih, len(ic)))
        if not ic:
            print('   🔴 NOKTASIZLIK — pencerede hic yerlesim yok (CLAUDE.md §2)')
            continue
        for k in sorted(sayac, key=lambda k: -len(sayac[k])):
            adlar = sayac[k]
            ek = '' if len(adlar) > 6 else '  ← ' + ', '.join(adlar)
            print('   %-42s %3d%s' % (k, len(adlar), ek))


if __name__ == '__main__':
    main()
