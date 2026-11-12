# -*- coding: utf-8 -*-
import os
d = os.path.dirname(__file__)
ek = """
## 11-12 Kasım turu (dilim 2-3 + teyit)
- main'de (28e48bb82, denetle 0 + denetle_yayin 0): 34 yeni yerleşim (yerlesimler_sahne1108.js), 71+16 kronoloji maddesine yer_id, yükleyici düzeltmesi.
- Teyit turu (4 ajan): okunan kaynakla yalnız Sangju Goryeo dilimi teyitlendi (damga kalktı); Orašac 1281-1459 dilimleri kırpıldı (kur 1717-08-18, beyanlı). Öteki kayıtlara TEYİT-TURU notu işlendi, damga KALDI. Akademik (TDV/İSAM/TTK/DergiPark) teyit AÇIK.
- Erdel zinciri: öneri cikti/teyit/erdel_oneri.md|json; veriye UYGULANMADI (Değişmez 2 taraması 1699-01-26, 1711-04-29, 1867-06-20 + Nagyszeben ekleme gerek). romanya-kralligi BOYALAR'da var (renkler.py).
- Açık bulgular: Chocontá 1810-1816, Kosova 1342-1402 d, Dorestad 834-2000 zinciri, Managua kur 1933, Beaune/Chalon/Autun 1477-01-05, Hawikuh d, Wageningen isg bitişi, Takova/Orašac 1738 vs 1739.
- yer_id yazılamayan ~8 madde: Maulung, Dalan Nemürges, Liupan, Çakırmaut, Eystribygð, Belovej, Sâsârâm, Formigny; Saint-Germain 1919 maddesi.
"""
open(os.path.join(d, 'UYGULAMA-0911.md'), 'a', encoding='utf-8').write(ek)
open(os.path.join(d, '_commit_mesaj5.txt'), 'w', encoding='utf-8').write(
    "YERLESIM-SAHNE-1108: UYGULAMA notu + Erdel zinciri onerisi (veriye uygulanmadi)\n\nCo-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>\n")
