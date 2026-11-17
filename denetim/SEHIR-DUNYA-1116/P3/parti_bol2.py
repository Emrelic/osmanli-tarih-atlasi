# -*- coding: utf-8 -*-
"""P3 yeniden sıralama (17 Kasım): B01-B15'te işlenenler hariç kalan satırlar: önce 1900-liste (kat 2 → kat 3; tarihî yerleşimler), sonra modern-merkez (admin1; yıllı kuruluş cümlesi seyrek, verim ~%0-5).
Yeni partiler: P3/B16.tsv ... (22'şerlik). Eski B16+ dosyaları silinir."""
import csv, glob, io, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = 'denetim/SEHIR-DUNYA-1116/'
islenen = set()
for f in glob.glob(D + 'P3/B[01][0-9].tsv'):
    n = int(re.search(r'B(\d+)\.tsv', f).group(1))
    if n <= 15:
        for r in csv.DictReader(open(f, encoding='utf-8'), delimiter='\t'): islenen.add((r['ad_modern'], r['lat'], r['lon']))
tum = [r for r in csv.DictReader(open(D + 'F2-ADAY.tsv', encoding='utf-8'), delimiter='\t') if r['oncelik'] == 'P3' and r['lat'].strip() and r['ad_modern'].strip() not in ('', '(atlas)') and not r['ad_modern'].startswith(' (')]
kalan = [r for r in tum if (r['ad_modern'], r['lat'], r['lon']) not in islenen]
def anahtar(r):
    kat = int(r['kat']) if r['kat'].isdigit() else 9
    return (0 if r['giris'] == '1900-liste' else 1, kat, r['blok'], r['ad_modern'])
kalan.sort(key=anahtar)
for f in glob.glob(D + 'P3/B[0-9][0-9].tsv'):
    if int(re.search(r'B(\d+)\.tsv', f).group(1)) >= 16: os.remove(f)
cols = ['blok', 'ad_modern', 'ad_1900', 'modern_ulke', 'lat', 'lon', 'giris', 'kat', 'not_']
N = 22
for i in range(0, len(kalan), N):
    with open(D + 'P3/B%02d.tsv' % (16 + i // N), 'w', encoding='utf-8', newline='') as f:
        w = csv.writer(f, delimiter='\t'); w.writerow(cols); w.writerows([[r[c] for c in cols] for r in kalan[i:i + N]])
from collections import Counter
print('işlenen', len(islenen), '| kalan', len(kalan), '→', (len(kalan) + N - 1) // N, 'parti (B16+) |', Counter((r['giris'], r['kat']) for r in kalan))
