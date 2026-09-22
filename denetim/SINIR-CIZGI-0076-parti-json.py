# -*- coding: utf-8 -*-
"""PARTI.json'da kendi maddelerimin meta alanlarini (tarih/bbox/gorsel) arar."""
import json, sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
p = json.load(open(r'C:\claudemre\kutu\giden\parti-emrelic-0076\PARTI.json', encoding='utf-8'))
print('tip:', type(p).__name__)
if isinstance(p, dict):
    print('anahtarlar:', list(p.keys())[:20])
    for k in list(p.keys())[:3]:
        print('  ', k, '->', str(p[k])[:300])
else:
    print('uzunluk:', len(p))
    print(json.dumps(p[0], ensure_ascii=False, indent=1)[:1500])
