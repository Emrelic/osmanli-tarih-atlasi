# -*- coding: utf-8 -*-
"""3 LAB LISTE.tsv: koordinat taraması girdisi KOORD/girdi.json: [{k:'blok|satır', ad, iso, lat, lon, giris, yol}] (adı ve ülkesi olanlar)."""
import csv, io, json, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = 'denetim/SEHIR-DUNYA-1116/'
ISO = {'Butan': 'BT', 'Nepal': 'NP', 'Hindistan': 'IN', 'Pakistan': 'PK', 'Sri Lanka': 'LK', 'Bangladeş': 'BD', 'Maldivler': 'MV', 'Güney Afrika': 'ZA', 'Kongo DC': 'CD', 'Liberya': 'LR', 'Angola': 'AO', 'Benin': 'BJ', 'Botsvana': 'BW', 'Burkina Faso': 'BF', 'Ekvator Ginesi': 'GQ', 'Esvatini': 'SZ', 'Fildişi Sahili': 'CI', 'Gabon': 'GA', 'Gambiya': 'GM', 'Gana': 'GH', 'Gine': 'GN', 'Gine-Bissau': 'GW', 'Kamerun': 'CM', 'Lesotho': 'LS', 'Malavi': 'MW', 'Mali': 'ML', 'Mozambik': 'MZ', 'Namibya': 'NA', 'Nijerya': 'NG', 'Senegal': 'SN', 'Sierra Leone': 'SL', 'São Tomé ve Príncipe': 'ST', 'Togo': 'TG', 'Yeşil Burun': 'CV', 'Zambiya': 'ZM', 'Zimbabve': 'ZW', 'Moritanya': 'MR', 'Nijer': 'NE', 'Batı Sahra': 'EH', 'Kongo Cum.': 'CG', 'Moğolistan': 'MN', 'Kazakistan': 'KZ', 'Türkmenistan': 'TM', 'Özbekistan': 'UZ', 'Kırgızistan': 'KG', 'Tacikistan': 'TJ', 'Çin': 'CN', 'Afganistan': 'AF'}
out = []; atlanan = 0
for b in ('hint', 'afrika-guney-bati', 'orta-asya-mogolistan'):
    for i, r in enumerate(csv.DictReader(open(D + '%s/LISTE.tsv' % b, encoding='utf-8'), delimiter='\t')):
        ad = (r['ad_modern'] or r['ad_1900']).strip(); ad = re.sub(r'\s*\(.*?\)', '', ad).strip()
        u = r['modern_ulke'].strip(); iso = ISO.get(u, u if len(u) == 2 else '')
        if not (ad and iso and r['lat'] and r['lon']): atlanan += 1; continue
        out.append({'k': '%s|%d' % (b, i), 'ad': ad, 'iso': iso, 'lat': float(r['lat']), 'lon': float(r['lon']), 'giris': r['giris'], 'yol': r['koord_yolu']})
os.makedirs(D + 'KOORD', exist_ok=True)
json.dump(out, open(D + 'KOORD/girdi.json', 'w', encoding='utf-8'), ensure_ascii=False)
print('taranacak', len(out), '| atlanan (ad/ülke/koordinat yok)', atlanan)
print(json.dumps([[x['k'], x['ad'], x['iso'], x['lat'], x['lon']] for x in out], ensure_ascii=False)[:200])
