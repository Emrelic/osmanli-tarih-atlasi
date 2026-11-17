# -*- coding: utf-8 -*-
import json
D = 'denetim/SEHIR-DUNYA-1116/hint/'
b = json.load(open(D + 'parti7_birlesik.json', encoding='utf-8'))
ids = {x['id'] for x in b}
a = json.load(open(D + 'parti8/A.json', encoding='utf-8'))
bb = json.load(open(D + 'parti8/B.json', encoding='utf-8'))
n = 0
for x in a + bb:
    if x['id'] == 'haldighati-in-p8':
        continue  # savaş alanı, yerleşim değil; parti 7'de kural 4 ile reddedilmişti; OCR tek kaynak
    if x['id'] in ids:
        continue
    b.append(x); n += 1
json.dump(b, open(D + 'parti8_birlesik.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('eklenen', n, 'toplam', len(b))
