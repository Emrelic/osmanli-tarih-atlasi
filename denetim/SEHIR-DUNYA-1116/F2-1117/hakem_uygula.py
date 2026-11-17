# -*- coding: utf-8 -*-
"""HAKEM12A/B.tsv hakemli kararlarını birleşik JSON'lara işler: tüm 11 kayda ic_not notu; DEĞER değişikliği yalnız Luanda (1576→1575) ve Mîrat (1203→1192).
Diğerlerinde mevcut değer kalır (Libreville/Bamako: iki ayrı olgu; Hugli: 1579 kalır; Douala, Serowe, Ibadan, Yafna, Indor, Mapungubwe: mevcut kalır)."""
import csv, json
D = 'denetim/SEHIR-DUNYA-1116/F2-1117/'
DOS = {'afrika': D + 'afrika_birlesik10.json', 'hint': D + 'hint_birlesik11.json'}
veri = {k: json.load(open(v, encoding='utf-8')) for k, v in DOS.items()}
NOT = {}
for f in ('HAKEM12A.tsv', 'HAKEM12B.tsv'):
    for r in csv.DictReader(open(D + f, encoding='utf-8'), delimiter='\t'): NOT[r['id']] = r
IDMAP = {'indor-in-p6': 'indor-p6'}
yapilan = []
for k, L in veri.items():
    for x in L:
        r = NOT.get(x['id'])
        if not r or 'HAKEMLİ KARAR (LAB' in (x.get('ic_not') or ''): continue
        x['ic_not'] = 'HAKEMLİ KARAR (LAB, 17 Kasım 2026): ' + r['ic_not_onerisi'].strip() + ' || ' + (x.get('ic_not') or '')
        yapilan.append(x['id'])
        if x['id'] == 'luanda-p9':   # 4 bağımsız kaynak 1575 (Columbia, Oxford, Universalis/Vennetier, Caldeira 2014)
            x['ilk'].update(t='1575-01-01', gun='1575', kesinlik='yil',
                kaynak='The Columbia Encyclopedia 6th ed., «Luanda», https://www.encyclopedia.com (tarayıcı okuma 17 Kasım 2026); teyit: Oxford World Encyclopedia «Luanda»; P. Vennetier, Encyclopaedia Universalis «Luanda»; A. M. Caldeira, Rev. Tempo, Espaço e Linguagem 5(3), 2014',
                tanik='Founded in 1575 by the Portuguese')
        if x['id'] == 'mirat-p6':    # TDV 1192-1203 iktâ aralığıdır; Columbia 1192 + Minhâc-ı Sirâc (Elliot&Dowson II) 588 H./1192
            x['ilk'].update(t='1192-01-01', gun='1192', kesinlik='yil',
                kaynak='The Columbia Encyclopedia 6th ed., «Meerut» (encyclopedia.com, 17 Kasım 2026); teyit: Minhâc-ı Sirâc Cûzcânî, Tabakât-ı Nâsırî, in Elliot & Dowson, History of India II (archive.org): Mirat Tarain sonrası aynı yıl (588 H./1192) alındı',
                tanik='Meerut was conquered by Muslims in 1192')
            if x['sahip']: x['sahip'][0]['f'] = '1192-01-01'
for k, v in DOS.items(): json.dump(veri[k], open(v, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('işlenen', len(yapilan), yapilan)
