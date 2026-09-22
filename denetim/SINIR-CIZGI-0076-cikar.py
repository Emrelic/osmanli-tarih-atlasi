# -*- coding: utf-8 -*-
"""Kendi 21 maddemin govdesini PARTI.md'den cikarir."""
import re, sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

PARTI = r'C:\claudemre\kutu\giden\parti-emrelic-0076\PARTI.md'
BENIM = """H-0002 H-0004 H-0037 H-0041 H-0042 H-0054 H-0059 H-0066 H-0076 H-0097
H-0099 H-0116 H-0118 H-0120 H-0123 H-0126 H-0137 H-0144 H-0149 H-0155 H-0156""".split()

parti = open(PARTI, encoding='utf-8').read()
bolum = {}
for m in re.finditer(r'(?m)^##\s+(H-\d{4})\b(.*?)(?=(?m:^##\s)|\Z)', parti, re.S):
    bolum[m.group(1)] = m.group(0).strip()

for k in BENIM:
    print(bolum.get(k, '### ' + k + ' — BULUNAMADI'))
    print()
    print('=' * 70)
    print()
