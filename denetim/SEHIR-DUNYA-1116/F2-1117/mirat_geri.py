# -*- coding: utf-8 -*-
"""Mîrat 1192→1203 GERİ (EMRELİC itirazı, 17 Kasım): Columbia büyük olasılıkla Minhâc-ı Sirâc'a dayanır → bağımsız ≥2 sayılmaz; TDV değeri kalır (CLAUDE.md Hakemli karar).
1192 ikinci aday olarak ic_not'ta."""
import json
p = 'denetim/SEHIR-DUNYA-1116/F2-1117/hint_birlesik11.json'
L = json.load(open(p, encoding='utf-8'))
for x in L:
    if x['id'] != 'mirat-p6': continue
    x['ilk'].update(t='1203-01-01', gun='1203', kesinlik='yil',
        kaynak="TDV İslâm Ansiklopedisi, 'AYBEG, Kutbüddin', https://islamansiklopedisi.org.tr/aybeg-kutbuddin (17 Kasım 2026'da okundu; tarayıcı tam gövde): Aybeg 1192-1203 arasında Meerut'u iktâları arasına kattı",
        tanik='1192-1203 yılları arasında ise Meerut, Ecmîr, Delhi, Kol, Thankir')
    x['sahip'][0]['f'] = '1203-01-01'
    i = x['ic_not'].find(' || ')
    eski = x['ic_not'][i + 4:] if i >= 0 else x['ic_not']
    x['ic_not'] = ('HAKEMLİ KARAR (LAB, 17 Kasım 2026; EMRELİC itirazıyla revize): TDV değeri 1203 KALIR (ilk yıl = TDV\'nin 1192-1203 aralığının üst ucu; aralık iktâ edinme tarihidir, fetih tarihi değildir). '
                   'İKİNCİ ADAY 1192: Columbia 6th ed. "Meerut was conquered by Muslims in 1192" ve Minhâc-ı Sirâc Cûzcânî, Tabakât-ı Nâsırî (Elliot&Dowson II) Mirat Tarain sonrası aynı yıl (588 H./1192; aynı eserin başka pasajı 587 H./1191) — '
                   'Columbia büyük olasılıkla Minhâc\'a dayandığından ikisi BAĞIMSIZ iki kaynak sayılmadı; Minhâc\'a dayanmayan üçüncü akademik kaynak (örn. P. Jackson, The Delhi Sultanate; Cambridge History of India III) bulunursa 1192\'ye çekilmeli. || ') + eski
    break
json.dump(L, open(p, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('mirat-p6 geri alındı')
