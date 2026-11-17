# -*- coding: utf-8 -*-
"""LISTE.tsv (afrika-guney-bati): 'Middelburg' ve 'Middelburg (Cape)' aynı koordinatta (-25.7751, 29.4648 = Transvaal Middelburg) çift satır → tek satır.
Cape Middelburg ayrı bir yerdir (Doğu Cape) ama LISTE'de ona ait koordinat YOK: uydurulmaz; kalan satırın not_'una beyan yazılır."""
import csv, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
p = 'denetim/SEHIR-DUNYA-1116/afrika-guney-bati/LISTE.tsv'
rd = csv.DictReader(open(p, encoding='utf-8'), delimiter='\t'); cols = rd.fieldnames; rows = list(rd)
out = []; dusen = 0
for r in rows:
    if r['ad_modern'] == 'Middelburg (Cape)' and r['lat'] == '-25.7751' and r['lon'] == '29.4648':
        dusen += 1; continue
    if r['ad_modern'] == 'Middelburg' and r['lat'] == '-25.7751':
        r['ad_modern'] = 'Middelburg (Transvaal)'
        r['not_'] = (r['not_'] + ' | 17 Kasım: LISTE\'de aynı koordinatta çift satır (Middelburg / Middelburg (Cape)) birleştirildi; Doğu Cape Middelburg ayrı yerdir, bu listede koordinatı yok (uydurulmadı) → gerekirse ayrı doğrulanıp eklenmeli').strip(' |')
    out.append(r)
with open(p, 'w', encoding='utf-8', newline='') as f:
    w = csv.DictWriter(f, fieldnames=cols, delimiter='\t'); w.writeheader(); w.writerows(out)
print('düşen satır', dusen, '| kalan', len(out))
