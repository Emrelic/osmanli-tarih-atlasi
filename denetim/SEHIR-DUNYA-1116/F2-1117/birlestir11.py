# -*- coding: utf-8 -*-
"""parti 11: hint (parti8_birlesik 70) + H11 (3) -> hint_birlesik11.json. K11 Abeşe: tanık '[...]' içerdiği (birebir değil) için BİRLEŞTİRİLMEDİ (borç)."""
import json
D = 'denetim/SEHIR-DUNYA-1116/'
b = json.load(open(D + 'hint/parti8_birlesik.json', encoding='utf-8'))
ids = {x['id'] for x in b}
n = 0
for x in json.load(open(D + 'F2-1117/H11.json', encoding='utf-8')):
    if x['id'] not in ids: b.append(x); n += 1
json.dump(b, open(D + 'F2-1117/hint_birlesik11.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('hint +', n, '->', len(b))
