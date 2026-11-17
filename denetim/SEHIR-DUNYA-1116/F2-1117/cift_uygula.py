# -*- coding: utf-8 -*-
"""CIFT12.tsv 'E' satırlarını (yıl+şehir birebir ikinci bağımsız kaynakla teyitli) birleşik JSON'lardaki kayıtlara işler:
ic_not başındaki 'TEK KAYNAK' -> 'ÇİFT TEYİT' + ikinci kaynak/tanık eklenir. H (çelişki) satırlarına DOKUNMAZ."""
import csv, json, re
D = 'denetim/SEHIR-DUNYA-1116/F2-1117/'
DOS = {'afrika': D + 'afrika_birlesik10.json', 'orta': D + 'orta_asya_birlesik10.json', 'hint': D + 'hint_birlesik11.json'}
veri = {k: json.load(open(v, encoding='utf-8')) for k, v in DOS.items()}
E = [r for r in csv.DictReader(open(D + 'CIFT12.tsv', encoding='utf-8'), delimiter='\t') if r['ilk_yil_teyit'].strip() == 'E']
yapilan = []; yok = []
for r in E:
    bulundu = False
    for k, L in veri.items():
        for x in L:
            if x['id'] == r['id']:
                bulundu = True
                ic = x.get('ic_not') or ''
                if 'ÇİFT TEYİT (LAB' in ic: break
                ic = re.sub(r'^\s*TEK KAYNAK', 'İLK KAYNAK', ic, count=1, flags=re.I)
                x['ic_not'] = 'ÇİFT TEYİT (LAB, 17 Kasım 2026; Britannica/ilk kaynaktan bağımsız ikinci kaynak): ' + r['ikinci_kaynak'].strip() + ' | tanık 2: "' + r['tanik_2'].strip() + '" | ' + r['uyum_notu'].strip() + ' || ' + ic
                yapilan.append(r['id']); break
        if bulundu: break
    if not bulundu: yok.append(r['id'])
for k, v in DOS.items(): json.dump(veri[k], open(v, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('işlenen', len(yapilan), yapilan); print('kayıt bulunamayan', yok)
