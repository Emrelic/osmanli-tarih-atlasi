# -*- coding: utf-8 -*-
"""yer_id_kronoloji.tsv: ölçüm aracı yer_id'yi PARANTEZSİZ normalleştirerek çözmüştü; site ise tam ad / ' (' öncesi (adKonumBul) kullanır.
Burada atlas_ad'ı yer_id ile site kuralına göre kıyaslar: site kuralına UYMAYAN eşleşmeler 'riskli' (farklı yerleşim seçilmiş olabilir). SALT OKUR."""
import csv, io, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.dirname(os.path.abspath(__file__))
for b in ('afrika-guney-bati', 'hint', 'orta-asya-mogolistan'):
    r = list(csv.DictReader(open(os.path.join(D, b, 'yer_id_kronoloji.tsv'), encoding='utf-8'), delimiter='\t'))
    # site kuralı: p.ad === yer_id  VEYA  p.ad.split(' (')[0] === yer_id  → atlas_ad bu ikisinden birini sağlamıyorsa site başka yeri (ya da hiçbirini) çözer
    risk = [x for x in r if x['atlas_ad'] and x['yer_id'] != x['atlas_ad'] and x['atlas_ad'].split(' (')[0] != x['yer_id']]
    print('==', b, 'satır', len(r), 'site-kuralına uymayan eşleşme', len(risk))
    for x in risk: print('  ', x['yer_id'], '→ atlas_ad:', x['atlas_ad'], '|', x['lat'], x['lon'], '| madde', x['madde'], x['ilk_yil'], '-', x['son_yil'])
