# -*- coding: utf-8 -*-
"""KASA bulgusu (17 Kasım): ölçüm aracı yer_id'yi parantezsiz normalleştirip yanlış yerleşime çözmüştü (site adKonumBul: tam ad önce).
6 satır düzeltilir: yer_id_kronoloji.tsv (atlas_ad,lat,lon) ve LISTE.tsv 'kronoloji' satırları (atlas_en_yakin,lat,lon). Koordinatlar atlas yerlesimler_*.js'ten (tam ad)."""
import csv, io, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.dirname(os.path.abspath(__file__))
DUZ = {  # yer_id: (atlas_ad, lat, lon)
    'Akra (Accra)': ('Akra (Accra)', '5.55', '-0.2'),
    'Lagos (Eko)': ('Lagos (Eko)', '6.45', '3.4'),
    'Haydarâbâd (Dekken)': ('Haydarâbâd (Dekken)', '17.385', '78.487'),
    'Feyzâbâd (Bedahşan)': ('Feyzâbâd (Bedahşan)', '37.117', '70.58'),
    'Kazak bozkırı (Turgay)': ('Kazak bozkırı (Turgay)', '49.6', '63.5'),
    'Kazak bozkırı (Sarısu)': ('Kazak bozkırı (Sarısu)', '47.0', '67.0'),
}
def yaz(yol, rows, cols):
    with open(yol, 'w', encoding='utf-8', newline='') as f:
        w = csv.DictWriter(f, fieldnames=cols, delimiter='\t'); w.writeheader(); w.writerows(rows)
for b in ('afrika-guney-bati', 'hint', 'orta-asya-mogolistan'):
    p = os.path.join(D, b, 'yer_id_kronoloji.tsv')
    rd = csv.DictReader(open(p, encoding='utf-8'), delimiter='\t'); cols = rd.fieldnames; rows = list(rd); n = 0
    for x in rows:
        if x['yer_id'] in DUZ:
            x['atlas_ad'], x['lat'], x['lon'] = DUZ[x['yer_id']]; n += 1
    if n: yaz(p, rows, cols)
    p = os.path.join(D, b, 'LISTE.tsv')
    rd = csv.DictReader(open(p, encoding='utf-8'), delimiter='\t'); cols = rd.fieldnames; rows = list(rd); m = 0
    for x in rows:
        if x['giris'] != 'kronoloji': continue
        for yid, (ad, la, lo) in DUZ.items():
            if x['not_'].startswith('kronolojide yer_id: ' + yid + ' '):
                x['atlas_en_yakin'], x['lat'], x['lon'] = ad, la, lo
                x['not_'] += ' [17 Kasım: yer_id çözümü site adKonumBul kuralıyla düzeltildi (önceki: parantezsiz ad → yanlış yerleşim)]'; m += 1
    if m: yaz(p, rows, cols)
    print(b, 'yer_id_kronoloji', n, 'LISTE', m)
