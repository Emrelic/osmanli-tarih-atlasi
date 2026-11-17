# -*- coding: utf-8 -*-
"""parti 13: afrika +P13A (Hwange, Kikwit), orta_asya +Angren; Thimphu (1962 'resmî hükûmet merkezi' ilk anılış DEĞİL; Columbia 1952; şehir daha eski) BİRLEŞTİRİLMEDİ → borç."""
import json
D = 'denetim/SEHIR-DUNYA-1116/F2-1117/'
def y(p): return json.load(open(D + p, encoding='utf-8'))
afr = y('afrika_birlesik10.json'); oa = y('orta_asya_birlesik10.json')
ids = {x['id'] for x in afr + oa}
na = no = 0
for x in y('P13A.json'):
    if x['id'] not in ids: afr.append(x); na += 1
for x in y('P13B.json'):
    if x['id'].startswith('angren') and x['id'] not in ids: oa.append(x); no += 1
json.dump(afr, open(D + 'afrika_birlesik10.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
json.dump(oa, open(D + 'orta_asya_birlesik10.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('afrika +', na, '->', len(afr), '| orta asya +', no, '->', len(oa))
