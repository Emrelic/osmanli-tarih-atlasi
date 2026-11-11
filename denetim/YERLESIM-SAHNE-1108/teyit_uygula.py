# -*- coding: utf-8 -*-
"""teyit_cikti_*.json sonuçlarını data/yerlesimler_sahne1108.js'e işler:
 1) her kaydın son `kaynak:` alanına 'TEYİT-TURU 2026-11-11' notu (genel durum + gerekçe) eklenir; damga KALIR (kayıtlar tam teyit değil).
 2) Orašac: kaynakta köy 18. yy ilk yarısında kuruldu (nmar.rs) ⇒ 1281-1459 Sırp dilimleri kırpılır, kur=1717-08-18 (beyanlı), d ona göre.
 3) Sangju: Goryeo dilimi Encyclopedia of Korean Culture (E0027311) okunarak teyitli ⇒ o diliminin damgası kaynakla değişir.
Kullanım: py -X utf8 -I teyit_uygula.py [--yaz]"""
import glob, json, os, re, sys
KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
P = os.path.join(KOK, 'data', 'yerlesimler_sahne1108.js')
T = open(P, encoding='utf-8', newline='').read()
rap = {}
for f in sorted(glob.glob(os.path.join(os.path.dirname(__file__), 'cikti', 'teyit', 'teyit_cikti_*.json'))):
    for r in json.load(open(f, encoding='utf-8')): rap[r['ad']] = r
n = 0
for ad, r in rap.items():
    i = T.find('ad:' + json.dumps(ad, ensure_ascii=False) + ',')
    if i < 0: print('KAYIT YOK', ad); continue
    j = T.index(' },', i)               # kaydın sonu
    k = T.rfind('kaynak:"', i, j)          # üst düzey kaynak (son)
    kend = T.rindex('"', k + 8, j)
    not_ = ' | TEYİT-TURU 2026-11-11 (%s; okunan kaynak sınırlı, çoğu WebSearch özeti): %s' % (r['genel'], re.sub(r'\s+', ' ', r['gerekce']).replace('"', "'").replace('\\', '/'))
    T = T[:kend] + not_ + T[kend:]
    n += 1
# Orašac
a = T.index('ad:"Orašac (Aranđelovac)"'); b = T.index(' },', a)
blok = T[a:b]
ilk = blok.index('{f:"1717-08-18"')
bas = blok.index(' s:[')
yeni = blok[:bas] + ' kur:"1717-08-18",\n s:[' + blok[ilk:]
yeni = yeni.replace(' d:[{f:"1439-08-27",t:"1444-08-15"}, {f:"1459-06-20",t:"1717-08-18"}, {f:"1738-08-01",t:"1830-10-17"}],', ' d:[{f:"1738-08-01",t:"1830-10-17"}],')
yeni = yeni.replace('Koordinat: Wikidata', 'KUR: köy 18. yy ilk yarısında Avusturya işgali sırasında kuruldu (nmar.rs Aranđelovac müzesi; kuruluş yılı bilinmiyor — kur, Habsburg dilimi başlangıcı olan 1717-08-18 BEYANLI YAKLAŞIKLIKTIR; 1281-1459 Sırp dilimleri "yer yoktu" bulgusuyla kırpıldı). Koordinat: Wikidata', 1)
T = T[:a] + yeni + T[b:]
# Sangju Goryeo damgası
s0 = T.index('ad:"Sangju (Sangju, 尙州)"'); s1 = T.index('[KAYNAK OKUNMADI/teyit bekliyor — YERLESIM-SAHNE-1108]', s0)
T = T[:s1] + '[TEYİT 2026-11-11: Goryeo dilimi — Encyclopedia of Korean Culture (encykorea.aks.ac.kr E0027311) «Sangju-mok, Gyeongsang-do gyesugwan merkezi» okundu; Joseon sonrası dilimler teyit bekliyor]' + T[s1 + len('[KAYNAK OKUNMADI/teyit bekliyor — YERLESIM-SAHNE-1108]'):]
print('not eklendi', n)
if '--yaz' in sys.argv:
    open(P, 'w', encoding='utf-8', newline='').write(T); print('yazıldı')
