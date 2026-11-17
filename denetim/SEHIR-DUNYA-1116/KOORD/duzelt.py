# -*- coding: utf-8 -*-
"""KOORD-HATA-1117: Hint LISTE koordinat taraması (GeoNames arama sayfası, en kalabalık nüfuslu PPL; 241 satır: hint bloğu ilk 241). İnsan incelemesiyle doğrulanan 4 hata düzeltilir (LISTE + LAB kayıtları)."""
import csv, io, json, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = 'denetim/SEHIR-DUNYA-1116/'
DUZ = {  # ad_modern: (yeni lat, yeni lon, GeoNames notu)
    'Chandrapur': (19.951, 79.295, "GeoNames 'Chānda (Chandrapur)' PPL pop 328351, Maharashtra"),
    'Chhapra': (25.780, 84.747, "GeoNames 'Chāpra' PPL pop 202352, Bihar"),
    'Sagar': (23.839, 78.739, "GeoNames 'Sagar' PPL pop 274556, Madhya Pradesh (1900 Saugor)"),
    'Shahjahanpur': (27.882, 79.909, "GeoNames 'Shahjahanpur' PPL pop 320434, Uttar Pradesh"),
}
rows_out = []
p = D + 'hint/LISTE.tsv'
rd = csv.DictReader(open(p, encoding='utf-8'), delimiter='\t'); cols = rd.fieldnames; rows = list(rd)
for r in rows:
    if r['ad_modern'] in DUZ and r['giris'] == '1900-liste':
        la, lo, k = DUZ[r['ad_modern']]
        rows_out.append(['hint/LISTE.tsv', r['ad_modern'], '%s,%s' % (r['lat'], r['lon']), '%s,%s' % (la, lo), k + ' (17 Kasım 2026; ad çakışması: ilk eşleşme başka yer)'])
        r['lat'], r['lon'] = str(la), str(lo); r['koord_yolu'] = 'geonames-arama-sayfasi(17Kas) düzeltildi (KOORD-HATA-1117)'
        r['not_'] = (r['not_'] + ' | koordinat düzeltildi: önceki değer başka (aynı adlı) yer: ' + k).strip(' |')
with open(p, 'w', encoding='utf-8', newline='') as f:
    w = csv.DictWriter(f, fieldnames=cols, delimiter='\t'); w.writeheader(); w.writerows(rows)
# LAB kayıtları (P3 ön tarama): Sagar, Shahjahanpur
pj = D + 'F2-1117/hint_birlesik11.json'
L = json.load(open(pj, encoding='utf-8')); n = 0
for x in L:
    for ad, (la, lo, k) in DUZ.items():
        if x['id'].startswith(ad.lower() + '-') and x['id'].endswith('-p3o'):
            rows_out.append(['F2-1117/hint_birlesik11.json (kayıt)', x['id'], '%s,%s' % (x['lat'], x['lon']), '%s,%s' % (la, lo), k])
            x['lat'], x['lon'] = la, lo
            x['ic_not'] = (x.get('ic_not') or '') + ' | KOORD düzeltildi (17 Kasım): önceki koordinat aynı adlı başka yer; ' + k; n += 1
json.dump(L, open(pj, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
# belirsiz (düzeltilmedi)
bel = [['hint/LISTE.tsv', 'Pratapgarh', '24.032,74.782', '25.921,81.996 (GeoNames en kalabalık)', 'AD ÇAKIŞMASI: Rajasthan Pratapgarh (eski devlet merkezi) ↔ UP Pratapgarh (Oudh); 1900 listesinde hangisi? DÜZELTİLMEDİ'],
       ['hint/LISTE.tsv', 'Shahpur', '32.268,72.469', '26.154,68.650', 'AD ÇAKIŞMASI: Pencap Shahpur (Sargodha) ↔ Sind; DÜZELTİLMEDİ (Pencap doğru görünüyor)']]
with open(D + 'KOORD/KOORD-HATA-1117.tsv', 'w', encoding='utf-8', newline='') as f:
    w = csv.writer(f, delimiter='\t'); w.writerow(['dosya', 'id/ad', 'eski', 'onerilen', 'kaynak/not']); w.writerows(rows_out); w.writerows(bel)
print('düzeltilen', len(rows_out), '| belirsiz', len(bel), '| LAB kaydı', n)
