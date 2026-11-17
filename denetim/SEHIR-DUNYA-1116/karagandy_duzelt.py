# -*- coding: utf-8 -*-
import csv
p = r'denetim/SEHIR-DUNYA-1116/orta-asya-mogolistan/LISTE.tsv'
r = list(csv.DictReader(open(p, encoding='utf-8'), delimiter='\t'))
n = 0
for x in r:
    if x['ad_modern'] == 'Karagandy' and x['giris'] == 'modern-merkez':
        x['lat'] = '49.80187'; x['lon'] = '73.10211'
        x['koord_yolu'] = 'geonames-arama-sayfasi(17Kas) geonameId 1537266 DMS 49°48′06.73″N 73°06′07.60″E'
        x['bugun_kaynak'] = 'GeoNames admin1 merkezi (17 Kasım 2026); koordinat düzeltildi: önceki değer Temirtau konumundaydı, Karaganda şehri geonameId 1537266 (PPLA, pop. 497777)'
        n += 1
w = csv.DictWriter(open(p, 'w', encoding='utf-8', newline=''), fieldnames=list(r[0].keys()), delimiter='\t')
w.writeheader(); w.writerows(r); print('düzeltilen', n)
