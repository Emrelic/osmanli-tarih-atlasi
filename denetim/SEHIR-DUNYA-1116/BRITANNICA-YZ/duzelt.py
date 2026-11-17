# -*- coding: utf-8 -*-
"""Britannica YZ-özeti denetimi (DENETIM.json): YZ_OZET (bangalor ilk+kur, bangui ilk+olay[0]) ve YOK (kroonstad ilk) tanıklarını GÖVDEDEN alternatifle değiştirir; ic_not beyanı eklenir."""
import json
D = 'denetim/SEHIR-DUNYA-1116/'
DEN = json.load(open(D + 'BRITANNICA-YZ/DENETIM.json', encoding='utf-8'))
sorun = [d for d in DEN if d.get('sinif') in ('YZ_OZET', 'YOK')]
DOS = [D + 'F2-1117/hint_birlesik11.json', D + 'F2-1117/orta_asya_birlesik10.json', D + 'F2-1117/afrika_birlesik10.json']
veri = {p: json.load(open(p, encoding='utf-8')) for p in DOS}
n = 0; atlanan = []
for d in sorun:
    alt = (d.get('alternatif_tanik') or '').strip()
    if not alt: atlanan.append((d['id'], d['alan'], 'alternatif yok')); continue
    for p, L in veri.items():
        for x in L:
            if x['id'] != d['id']: continue
            a = d['alan']
            o = x['ilk'] if a == 'ilk' else (x.get('kur') if a == 'kur' else (x.get('ark') if a == 'ark' else x['olay'][int(a[5:-1])]))
            if not o: atlanan.append((d['id'], a, 'alan yok')); continue
            eski = o.get('tanik')
            o['tanik'] = alt
            x['ic_not'] = (x.get('ic_not') or '') + ' | BRITANNICA YZ-ÖZETİ DENETİMİ (LAB, 17 Kasım 2026): %s.tanik önceden Britannica sayfasındaki YZ özeti (SSS) bloğundaydı/sayfada birebir yoktu (%s); Britannica makale gövdesinden alternatif tanıkla değiştirildi: "%s"' % (a, str(eski)[:80], alt)
            n += 1
for p, L in veri.items(): json.dump(L, open(p, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('düzeltilen', n, '| atlanan', atlanan)
