"""Koordinat tanığı arama: py ara.py <kalıp> ... -> Pleiades places + GeoNames cities1000 eşleşmeleri (salt okunur)."""
import csv, io, math, sys, re
BASE = r"C:\Users\user\AppData\Local\Temp\claude\C--atlas\2e265d3a-21c7-47e9-ac13-c26e0cabd3c6\scratchpad"
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
pats = [re.compile(a, re.I) for a in sys.argv[1:]]
csv.field_size_limit(10**8)
with open(BASE + r"\gaz-pleiades\pleiades-places-latest.csv", encoding='utf-8', newline='') as f:
    r = csv.DictReader(f)
    for row in r:
        t = row.get('title', '') or ''
        if any(p.search(t) for p in pats):
            print('PLEIADES', row.get('id'), t, row.get('reprLat'), row.get('reprLong'), row.get('minDate'), row.get('maxDate'), (row.get('timePeriodsKeys') or '')[:40])
with open(BASE + r"\gaz-geonames1000\cities1000.txt", encoding='utf-8') as f:
    for line in f:
        c = line.rstrip('\n').split('\t')
        s = c[1] + ' ' + c[2] + ' ' + c[3]
        if any(p.search(s) for p in pats):
            print('GEONAMES', c[0], c[1], c[8], c[4], c[5], 'pop', c[14])
