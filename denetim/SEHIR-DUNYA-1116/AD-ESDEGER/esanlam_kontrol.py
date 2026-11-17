# -*- coding: utf-8 -*-
"""ad_kaynak adlarını data/ad_esanlam.js 'belirsiz' kovasıyla ve boş-sadeleştirme (ASCII dışı yazı) açısından sınar. SALT OKUR."""
import io, json, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.path.insert(0, 'arac')
import ad_esanlam as ae
bel = ae.belirsiz_dizin(); ters = ae.ters_dizin()
D = 'denetim/SEHIR-DUNYA-1116/F2-1117/'
bos = cakisma = tara = 0
for f in ('hint_birlesik11.json', 'orta_asya_birlesik10.json', 'afrika_birlesik10.json'):
    for x in json.load(open(D + f, encoding='utf-8')):
        for e in x.get('ad_kaynak') or []:
            tara += 1
            s = ae.sadelestir(e['ad'])
            if not s:
                bos += 1; print('BOŞ sadeleştirme (yazı sistemi):', x['id'], e['ad'], e['dil'])
            elif s in bel or ae.cekirdek(e['ad']) in bel:
                cakisma += 1; print('BELİRSİZ kova:', x['id'], e['ad'], '→', bel.get(s) or bel.get(ae.cekirdek(e['ad'])))
print('taranan ad_kaynak', tara, '| boş-sadeleştirme', bos, '| belirsiz-kova çakışması', cakisma)
