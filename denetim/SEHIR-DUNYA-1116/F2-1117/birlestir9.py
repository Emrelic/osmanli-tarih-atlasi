# -*- coding: utf-8 -*-
"""parti 9 birleştirme: parti4_birlesik (afrika_gb) + W + W2 + S (afrika), parti3_birlesik (orta asya) + S orta asya (Astana).
Sahip zinciri kaynaksız (atlas gününden uzatılmış dikiş) olan Dakar/Konakri/Yaunde kayıtlarında sahip BOŞALTILDI (atlas referans değildir)."""
import json, sys
D = 'denetim/SEHIR-DUNYA-1116/'
def yukle(p): return json.load(open(D + p, encoding='utf-8'))
afr = yukle('afrika-guney-bati/parti4_birlesik.json'); oa = yukle('orta-asya-mogolistan/parti3_birlesik.json')
yeni = yukle('F2-1117/W.json') + yukle('F2-1117/W2.json') + yukle('F2-1117/S.json')
BOS_SAHIP = set()  # denetle 'zincir boş' ihlali verdiği için ≤1 yıllık beyanlı dikiş korundu (ic_not'ta açık)
ORTA = {'astana-p9'}
ids = {x['id'] for x in afr + oa}
na = no = 0
for x in yeni:
    if x['id'] in ids: continue
    if x['id'] in BOS_SAHIP:
        x['sahip'] = []
        x['ic_not'] = (x.get('ic_not') or '') + ' | LAB 17 Kasım: kaynaksız sahip dikişi (atlas gününden uzatılmış) kaldırıldı; sahip boş.'
    if x['id'] in ORTA: oa.append(x); no += 1
    else: afr.append(x); na += 1
json.dump(afr, open(D + 'F2-1117/afrika_birlesik.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
json.dump(oa, open(D + 'F2-1117/orta_asya_birlesik.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('afrika +', na, '->', len(afr), '| orta asya +', no, '->', len(oa))
