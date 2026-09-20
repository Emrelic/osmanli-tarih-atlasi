# -*- coding: utf-8 -*-
"""NAPOLYON-MISIR-0070 — 1798-1801 Mısır'da sahiplik/işgal ölçümü (20 Eylül 2026).

Soru (Emre, paket 0070 H-0002, görsel H-0002-1.png): *Napolyon'un Mısır'ı
işgalinde işgal edilen topraklar haritada doğru mu?* Görselin künyesi
**1798-07-01** — Fransız ordusunun İskenderiye'ye çıktığı gün; o kesitte Sina,
Süveyş ve Yukarı Mısır taralı görünüyor.

Bu alet YALNIZ ÖLÇER, veri YAZMAZ (şartname: yama teslimden sonra onaylanınca
uygulanır). Motorun okuduğu dosya kümesini `arac/girdi.py`den alır — burada
liste TUTULMAZ (D219).

    py denetim/ARAC-NAPOLYON-MISIR-0070.py
    py denetim/ARAC-NAPOLYON-MISIR-0070.py --json denetim/OLCUM-NAPOLYON-MISIR-0070.json
"""
import json
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'arac'))
import girdi  # noqa: E402

# Mısır + Sina kutusu (kaba; kayıtlar ada göre de sınanıyor)
KUTU = dict(lat1=21.0, lat2=32.5, lon1=24.0, lon2=36.5)
PENCERE = ("1797-01-01", "1802-12-31")


def gun(s):
    return (s or "")[:10]


def icinde(y):
    return KUTU['lat1'] <= y.get('lat', 0) <= KUTU['lat2'] and KUTU['lon1'] <= y.get('lon', 0) <= KUTU['lon2']


def kesisir(f, t, a, b):
    return gun(f) <= b and gun(t or "9999") >= a


def main():
    Y = girdi.yukle(sessiz=True)
    if isinstance(Y, tuple):
        Y = Y[0]
    kayitlar = [y for y in Y if icinde(y)]

    isgal, sahiplik, sahip_dagilim = [], [], {}
    for y in kayitlar:
        for ig in (y.get('isg') or []):
            if kesisir(ig.get('f'), ig.get('t'), *PENCERE):
                isgal.append({
                    'ad': y.get('ad'), 'lat': y.get('lat'), 'lon': y.get('lon'),
                    'f': gun(ig.get('f')), 't': gun(ig.get('t')), 'd': ig.get('d'),
                    'kaynak': (ig.get('kaynak') or '')[:200]})
        for s in (y.get('s') or []):
            if kesisir(s.get('f'), s.get('t'), *PENCERE):
                sahiplik.append({
                    'ad': y.get('ad'), 'lat': y.get('lat'), 'lon': y.get('lon'),
                    'f': gun(s.get('f')), 't': gun(s.get('t')), 'd': s.get('d')})
                sahip_dagilim[s.get('d')] = sahip_dagilim.get(s.get('d'), 0) + 1

    # 🔴 GÖRSELİN GÜNÜ: 1798-07-01'de kim işgal altında görünüyor?
    def kesit(g):
        return sorted(
            [i for i in isgal if i['f'] <= g <= (i['t'] or '9999')],
            key=lambda i: i['f'])

    kesitler = {g: kesit(g) for g in
                ("1798-07-01", "1798-07-21", "1798-07-24", "1798-08-25",
                 "1799-02-20", "1800-03-20", "1801-09-02")}

    cikti = {
        'olcum': 'NAPOLYON-MISIR-0070', 'tarih': '2026-09-20',
        'kutu': KUTU, 'pencere': PENCERE,
        'kutudaki_yerlesim': len(kayitlar),
        'isgal_kaydi': len(isgal),
        'sahiplik_kaydi': len(sahiplik),
        'sahip_dagilimi': sahip_dagilim,
        'isgal_baslangic_dagilimi': {},
        'kesitler': {g: [{'ad': i['ad'], 'f': i['f'], 't': i['t'], 'd': i['d']} for i in v]
                     for g, v in kesitler.items()},
        'kesit_sayilari': {g: len(v) for g, v in kesitler.items()},
        'isgal_tamami': sorted(isgal, key=lambda i: (i['f'], i['ad'] or '')),
    }
    for i in isgal:
        cikti['isgal_baslangic_dagilimi'][i['f']] = cikti['isgal_baslangic_dagilimi'].get(i['f'], 0) + 1

    if '--json' in sys.argv:
        yol = sys.argv[sys.argv.index('--json') + 1]
        with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', yol), 'w', encoding='utf-8') as f:
            json.dump(cikti, f, ensure_ascii=False, indent=1)
    ozet = dict(cikti)
    ozet.pop('isgal_tamami', None)
    print(json.dumps(ozet, ensure_ascii=False, indent=1))


if __name__ == '__main__':
    main()
