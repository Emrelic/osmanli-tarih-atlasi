# -*- coding: utf-8 -*-
"""parti 10 birleştirme: afrika_birlesik (28) + X10 + Y10 + Y10b (Afrika), orta_asya_birlesik (35) + Mezârışerif."""
import json
D = 'denetim/SEHIR-DUNYA-1116/F2-1117/'
def y(p): return json.load(open(D + p, encoding='utf-8'))
afr = y('afrika_birlesik.json'); oa = y('orta_asya_birlesik.json')
yeni = y('X10.json') + y('Y10.json') + y('Y10b.json')
ids = {x['id'] for x in afr + oa}
ORTA = ('mezar', 'mazar')
na = no = 0
for x in yeni:
    if x['id'] in ids: continue
    if x['id'].startswith(ORTA): oa.append(x); no += 1
    else: afr.append(x); na += 1
json.dump(afr, open(D + 'afrika_birlesik10.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
json.dump(oa, open(D + 'orta_asya_birlesik10.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('afrika +', na, '->', len(afr), '| orta asya +', no, '->', len(oa))
