# ANTLAŞMA TAKVİM BORCU (UMIT, 13 Kasım 2026)

Durum: KARAR BEKLİYOR (KASA ayrı bir takvim partisinde toplu karar verecek). Atlas verisi DEĞİŞTİRİLMEDİ.

## Yedi Ada (Rusya-Osmanlı ittifakı) — 21 Mart 1800 ↔ 2 Nisan 1800
- Kayıt: `data/antlasma_madde_yediada1800.js` (`yedi-ada-1800`), ana kronoloji maddesi `data/olaylar_ek17.js` `t:"1800-03-21"`.
- Kaynak günü: Noradounghian (Recueil c. II) ve TDV «Yedi Ada Cumhuriyeti» (Örenç) — 21 Mart 1800.
- Hicrî karşılığı 8 Zilkade 1214, tablo hesabıyla 2-3 Nisan 1800 Gregoryen. 21 Mart büyük olasılıkla Rus (Jülyen) günüdür: 21 Mart Jülyen = 2 Nisan Gregoryen (1800'de fark 12 gün).
- CLAUDE.md «Takvim» kuralı: 1582-10-15 sonrası atlas günü Gregoryendir; geç geçen yerlerin (Rusya) kaynak günü çevrilir, `ic_not`ta iki günüyle beyan edilir; gün taşınınca kırılma ve madde birlikte taşınır.
- Önerilen sonuç (karar KASA'da): atlas günü 1800-04-02; `ic_not`: «Kaynak günü 21 Mart 1800 (Jülyen); Gregoryen karşılığı 2 Nisan 1800». Kırılma (varsa) ve kronoloji maddesi birlikte taşınır; Değişmez 2 (±30 gün) ayrıca ölçülür. Çeviri anahtarı bayatlaması (KASA notu) toplu partide çözülür.
- Aynı soru Rus/Jülyen günü veren diğer kayıtlar için de geçerlidir: Akkirman 1826 (25 Eylül/7 Ekim: atlas günü zaten Gregoryen), Bükreş 1812 (16/28 Mayıs: atlas Gregoryen), Ayastefanos 1878 (19 Şubat/3 Mart: atlas Gregoryen), Berlin 1878 (Rusya Jülyen 1 Temmuz hesabı okunmadı) — bunlarda gün zaten Gregoryen; yalnız Yedi Ada Jülyen günüyle yazılmış görünüyor.

## Sevr üretimi uyarısı (KASA kararı, 14 Kasım 2026)
- Sevr (`data/antlasma_madde_sevr.js`) için girdi/config YOKTUR (yalnız eski tek-amaçlı `eski/uret-sevr.js` betiği); KASA: girdi yeniden çıkarılmasın, `data/` tek doğruluk kaynağıdır.
- Sevr yeniden ÜRETİLİRSE `data/`daki elle doldurulan 9 `yer[]` odağı (Boğazlar Komisyonu bölümünde md. 47, 49, 50, 52, 56, 58, 59, 60 -> Boğazlar; md. 97 -> Suriye, Mezopotamya, Filistin) KAYBOLUR; üretimden önce `origin/umit-1113-odak` dalındaki `data/antlasma_madde_sevr.js` farkı yedeklenmeli, üretimden sonra yeniden uygulanmalı.
