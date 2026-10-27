"""Mevcut yerleşim dizininde ad / koordinat sorgusu (mükerrer taraması: normalleştirilmiş ad + 3 km).

Kullanım (worktree kökünden):
  py denetim/dogu/yer_ara.py ad "Chang'an"          # ada göre (normalleştirilmiş, alt dize)
  py denetim/dogu/yer_ara.py yakin 34.26 108.94 3   # lat lon yarıçap_km
  py denetim/dogu/yer_ara.py devlet song             # bu devlet kimliğini s:/d:/v:/isg:'de taşıyan yerleşimler
Dizin: denetim/dogu/yer_indeks.json (node ile üretildi; salt okunur).
"""
import json, math, os, sys, unicodedata, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
YOL = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'yer_indeks.json')

HARF = {'ı': 'i', 'İ': 'i', 'ş': 's', 'Ş': 's', 'ğ': 'g', 'Ğ': 'g', 'ü': 'u', 'Ü': 'u', 'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c'}


def norm(s):
    s = ''.join(HARF.get(c, c) for c in s)  # "İ".lower() iki kod noktası verir: önce elle eşle
    s = unicodedata.normalize('NFKD', s.lower())
    return ''.join(c for c in s if c.isalnum())


def km(a, b, c, d):
    r = 6371.0088
    p1, p2 = math.radians(a), math.radians(c)
    dl = math.radians(d - b)
    h = math.sin((p2 - p1) / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * r * math.asin(math.sqrt(h))


def goster(y, ek=''):
    print('%-34s %9.4f %9.4f k=%s kur=%s %s%s' % (y['ad'], y['lat'], y['lon'], y['k'], y['kur'], ','.join(y['devletler'][:6]), ek))


def main():
    Y = json.load(open(YOL, encoding='utf-8'))
    if len(sys.argv) < 3:
        print(__doc__); return
    kip = sys.argv[1]
    if kip == 'ad':
        q = norm(sys.argv[2])
        for y in Y:
            if q and q in norm(y['ad']):
                goster(y)
    elif kip == 'yakin':
        la, lo, r = float(sys.argv[2]), float(sys.argv[3]), float(sys.argv[4]) if len(sys.argv) > 4 else 3.0
        for y in sorted(Y, key=lambda z: km(la, lo, z['lat'], z['lon'])):
            d = km(la, lo, y['lat'], y['lon'])
            if d <= r:
                goster(y, '  [%.2f km]' % d)
    elif kip == 'devlet':
        for y in Y:
            if sys.argv[2] in y['devletler']:
                goster(y)
    else:
        print(__doc__)


main()
