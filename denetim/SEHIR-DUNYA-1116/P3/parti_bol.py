# -*- coding: utf-8 -*-
"""F2-ADAY.tsv P3 satırlarını kat (1,2 → 3) ve giris (1900-liste önce, modern-merkez sonra) sırasıyla 22'şerlik partilere böler: P3/B01.tsv ... Ayrıca P3/SIRA.tsv."""
import csv, io, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = 'denetim/SEHIR-DUNYA-1116/'
TUM = [r for r in csv.DictReader(open(D + 'F2-ADAY.tsv', encoding='utf-8'), delimiter='\t') if r['oncelik'] == 'P3']
R = [r for r in TUM if r['lat'].strip() and (r['ad_modern'].strip() not in ('', '(atlas)') and not r['ad_modern'].startswith(' ('))]   # koordinatsız/adsız satırlar elenir
print('P3 toplam', len(TUM), '| koordinatsız/adsız elenen', len(TUM) - len(R))
def anahtar(r):
    kat = int(r['kat']) if r['kat'].isdigit() else 9
    return (kat, 0 if r['giris'] == '1900-liste' else 1, r['blok'], r['ad_modern'])
R.sort(key=anahtar)
N = 22; os.makedirs(D + 'P3', exist_ok=True)
cols = ['blok', 'ad_modern', 'ad_1900', 'modern_ulke', 'lat', 'lon', 'giris', 'kat', 'not_']
for i in range(0, len(R), N):
    with open(D + 'P3/B%02d.tsv' % (i // N + 1), 'w', encoding='utf-8', newline='') as f:
        w = csv.writer(f, delimiter='\t'); w.writerow(cols); w.writerows([[r[c] for c in cols] for r in R[i:i + N]])
print(len(R), 'aday →', (len(R) + N - 1) // N, 'parti; ilk parti:', [r['ad_modern'] or r['ad_1900'] for r in R[:N]])
