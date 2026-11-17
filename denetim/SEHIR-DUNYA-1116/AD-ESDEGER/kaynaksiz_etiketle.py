# -*- coding: utf-8 -*-
"""adlar içinde ad_kaynak girdisine bağlı OLMAYAN mevcut adları her kayda 'adlar_kaynaksiz' listesi olarak etiketler (silinmez; EMRELİC kararı 17 Kasım).
Eşleşme: normalize ad (parantez içi atılmış) ad_kaynak adlarından biriyle aynı ya da biri ötekini içeriyor."""
import io, json, re, sys, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = 'denetim/SEHIR-DUNYA-1116/F2-1117/'
def norm(s):
    s = unicodedata.normalize('NFKD', re.sub(r'\(.*?\)', '', (s or '')).lower()); s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^\w]+', ' ', s).strip()
top = 0; sehir = 0
for f in ('hint_birlesik11.json', 'orta_asya_birlesik10.json', 'afrika_birlesik10.json'):
    L = json.load(open(D + f, encoding='utf-8'))
    for x in L:
        kay = [norm(e['ad']) for e in x.get('ad_kaynak') or [] if norm(e['ad'])]
        ks = [a for a in x.get('adlar') or [] if norm(a) and not any(norm(a) == z or norm(a) in z or z in norm(a) for z in kay)]
        if ks: x['adlar_kaynaksiz'] = ks; top += len(ks); sehir += 1
        else: x.pop('adlar_kaynaksiz', None)
    json.dump(L, open(D + f, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('adlar_kaynaksiz etiketli şehir', sehir, '| ad', top)
