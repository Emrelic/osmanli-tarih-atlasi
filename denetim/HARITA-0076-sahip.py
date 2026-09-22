# -*- coding: utf-8 -*-
"""HARITA-0076 — 3. adım: D kovası (yerleşim sahiplik penceresi) için
"o pencerede, o günde, hangi yerleşim kime ait?" ölçümü.

Emre'nin "şurası yanlış renkte" dediği yerin ALTINDAKİ SEBEP, CLAUDE.md §2
gereği önce "orada nokta var mı?", sonra "noktanın o günkü sahibi ne?"
sorusudur. Bu betik ikisini birden basar — hüküm vermez, SAYI verir.

Kullanım:
    py denetim/HARITA-0076-sahip.py <lon0> <lon1> <lat0> <lat1> <YYYY-MM-DD> [etiket]
"""
import sys
import os

sys.path.insert(0, r'C:\atlas\arac')
sys.stdout.reconfigure(encoding='utf-8')

import girdi  # noqa: E402


def gun_no(s):
    y, a, g = (s.split('-') + ['01', '01'])[:3]
    return int(y) * 10000 + int(a) * 100 + int(g)


def aralikta(f, t, gun):
    a = gun_no(f) if f else 0
    b = gun_no(t) if t else 99999999
    return a <= gun < b


def sahip(y, gun):
    """(sahip_id, tabi_id) — ŞEMA (VERI-YAPISI.md, Kudüs kaydıyla sınandı):
         y['d'] : OSMANLI doğrudan dönemleri (kimlik taşımaz, Osmanlı demektir)
         y['s'] : yabancı dönemler; devlet kimliği ALT alan 'd' içindedir
         y['v'] : tâbilik; kimlik 'kid'
       Bu ayrımı atlayan ilk sürüm Kudüs'ü 1882'de SAHİPSİZ göstermişti —
       ölçüm yalan olurdu, sınav yakaladı.
    """
    o = None
    v = None
    for k in (y.get('d') or []):
        if aralikta(k.get('f'), k.get('t'), gun):
            o = 'OSMANLI'
    if o is None:
        for k in (y.get('s') or []):
            if aralikta(k.get('f'), k.get('t'), gun):
                o = k.get('d') or k.get('id') or '?'
    for k in (y.get('v') or []):
        if aralikta(k.get('f'), k.get('t'), gun):
            v = k.get('kid') or k.get('k') or '?'
    return o, v


def main():
    if len(sys.argv) < 6:
        print(__doc__)
        return
    lon0, lon1, lat0, lat1 = (float(x) for x in sys.argv[1:5])
    tarih = sys.argv[5]
    etiket = sys.argv[6] if len(sys.argv) > 6 else ''
    gun = gun_no(tarih)

    Y = girdi.yukle(sessiz=True)
    if isinstance(Y, tuple):
        Y = Y[0]

    icinde = [y for y in Y
              if lon0 <= float(y.get('lon', y.get('lng', 0))) <= lon1
              and lat0 <= float(y.get('lat', 0)) <= lat1]

    print('=' * 74)
    print('%s  pencere %.2f..%.2f E · %.2f..%.2f N  ·  gun %s'
          % (etiket, lon0, lon1, lat0, lat1, tarih))
    print('  havuzdaki toplam yerlesim : %d' % len(Y))
    print('  pencerede yerlesim        : %d' % len(icinde))
    if not icinde:
        print('  🔴 NOKTASIZLIK — pencerede HIC yerlesim yok; alan en yakin petege emilir (CLAUDE.md §2)')
        return
    sayac = {}
    for y in icinde:
        d, v = sahip(y, gun)
        anahtar = (d or 'SAHIPSIZ') + (' | tabi:' + v if v else '')
        sayac[anahtar] = sayac.get(anahtar, 0) + 1
    print('  sahiplik dagilimi:')
    for k in sorted(sayac, key=lambda k: -sayac[k]):
        print('     %-46s %d' % (k, sayac[k]))
    print('  --- nokta nokta ---')
    for y in sorted(icinde, key=lambda y: y.get('ad', '')):
        d, v = sahip(y, gun)
        print('     %-28s %8.3f,%7.3f   s=%-24s v=%s'
              % (y.get('ad', '?'), float(y.get('lon', 0)), float(y.get('lat', 0)),
                 d or 'SAHIPSIZ', v or '-'))


if __name__ == '__main__':
    main()
