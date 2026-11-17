# -*- coding: utf-8 -*-
"""İndirilmiş (scratchpad, depoya GİRMEZ) djvu.txt metinlerinde şehir adı + yıl cümlesi arar. Çalıştırma: py -I metin_ara.py <dosya> <ad> [<ad2> ...]"""
import re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
t = open(sys.argv[1], encoding='utf-8', errors='replace').read()
t = re.sub(r'-\n\s*', '', t); t = re.sub(r'\s+', ' ', t)
sent = re.split(r'(?<=[.;])\s+(?=[A-Z])', t)
for ad in sys.argv[2:]:
    n = 0
    print('=====', ad)
    for s in sent:
        if re.search(ad, s) and re.search(r'\b(1[0-9]{3}|[5-9][0-9]{2})\b', s) and len(s) < 420:
            print('-', s); n += 1
            if n >= 14: break
