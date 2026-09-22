# -*- coding: utf-8 -*-
"""Tahtadan belirli mesaj(lar)i okur: py denetim/SINIR-CIZGI-0076-mesaj.py M-5019 [M-5020 ...]"""
import json, sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
d = json.load(open(r'C:\atlas\oturumlar\tahta.json', encoding='utf-8'))
msgs = d['mesajlar'] if isinstance(d, dict) and 'mesajlar' in d else d
istenen = set(sys.argv[1:])
for m in msgs:
    mid = m.get('id') or m.get('no') or ''
    if str(mid) in istenen:
        print('---', mid, m.get('kim'), '->', m.get('kime'), m.get('zaman', ''))
        print(m.get('mesaj', ''))
        print()
if not istenen:
    print('son 5 id:', [str(m.get('id')) for m in msgs[-5:]])
    print('anahtarlar:', list(msgs[-1].keys()))
