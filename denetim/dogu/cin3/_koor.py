"""Kullanim: py _koor.py ad1 ad2 ...  -> Pleiades (title/names) ve GeoNames cities1000 (name/alternatenames) eslesmeleri."""
import sys, io, csv, os, unicodedata
csv.field_size_limit(10**9)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
B = r'C:\Users\user\AppData\Local\Temp\claude\C--atlas\2e265d3a-21c7-47e9-ac13-c26e0cabd3c6\scratchpad'
def norm(s):
    s = unicodedata.normalize('NFKD', s.lower())
    return ''.join(c for c in s if c.isalnum())
qs = [norm(a) for a in sys.argv[1:]]
print('--- PLEIADES places')
for r in csv.DictReader(open(B + r'\gaz-pleiades\pleiades-places-latest.csv', encoding='utf-8')):
    t = norm(r['title'])
    for q in qs:
        if q and q in t and r['reprLat']:
            print('P', r['id'], r['title'], r['reprLat'], r['reprLong'], r['timePeriodsRange'])
print('--- PLEIADES names')
for r in csv.DictReader(open(B + r'\gaz-pleiades\pleiades-names-latest.csv', encoding='utf-8')):
    t = norm(r['title']) + '|' + norm(r['nameTransliterated'])
    for q in qs:
        if q and q in t and r['reprLat']:
            print('PN', r['pid'], r['title'], r['nameTransliterated'], r['reprLat'], r['reprLong'])
print('--- GEONAMES')
for line in open(B + r'\gaz-geonames1000\cities1000.txt', encoding='utf-8'):
    f = line.split('\t')
    names = norm(f[1]) + '|' + norm(f[2]) + '|' + ','.join(norm(x) for x in f[3].split(','))
    for q in qs:
        if q and (q == norm(f[1]) or q == norm(f[2]) or (',' + q + ',') in (',' + ','.join(norm(x) for x in f[3].split(',')) + ',')):
            print('G', f[0], f[1], f[4], f[5], f[8], 'pop', f[14])
