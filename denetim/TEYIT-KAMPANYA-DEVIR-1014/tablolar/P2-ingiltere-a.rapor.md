# P2-ingiltere-a: teyit raporu

Girdi: `data/kronoloji_ingiltere.js` dosyasından 80 madde. Hepsi `el-kitabi` damgalı, yani eser adı yok.
Çıktı: `P2-ingiltere-a.cikti.tsv` (80 satır). `anahtar`, `dosya`, `t` ve `b` sütunları girdiyle betikle karşılaştırıldı, hepsi birebir aynı.
Süre: 14 Ekim 2026, 15:03–15:38, yaklaşık 35 dakika (kabuk saati).

## Hüküm sayıları
| hüküm | sayı |
|---|---|
| teyit | 52 |
| teyit-yil | 23 |
| tarih-celiski | 5 |
| teyit-edilemedi | 0 |

Tarih çelişkileri (madde değiştirilmedi, karar Emre'nin):
- [9] Edinburgh–Northampton: madde 1328-05-01, kaynak 1328-05-04. Kaynak Oxford Companion to British History, «Northampton, treaty of».
- [25] VI. Henry: madde 1422-08-31, kaynak 1422-09-01. Kaynak Encyclopedia of World Biography. Madde V. Henry'nin ölüm gününü almış, saltanat 1 Eylül'den sayılıyor.
- [36] VIII. Henry: madde 1509-04-22. Kaynaklar dağınık: EWB 21 Nisan, Oxford maddesi 23 Nisan (ilan), Europe 1450–1789 babanın ölümünü 22 Nisan veriyor.
- [44] Ortak Dua Kitabı: madde 1549-01-21, kaynak «Act of Uniformity (March 1549)». Kaynak: A Dictionary of British History.
- [61] Jamestown: madde 1607-05-14, kaynak 13 Mayıs. Kaynaklar: Oxford Companion to US History ve Oxford Companion to American Literature.

## Kaynaklar (satır sayısı)
- **Oxford Reference** (OUP, kod OXFORD, A), 46 satır. Kullanılan eserler: A Dictionary of British History, Oxford Companion to British History, Oxford Dictionary of the Middle Ages, Dictionary of World History, World Encyclopedia ve Kings and Queens of Britain. Arama sayfası abonelik istemeden madde özetini (hitContext) veriyor. Ham HTML curl/py ile çekildi, tarihler oradan okundu.
- **encyclopedia.com** (ENCYCLOPEDIA-COM, B), 22 satır. Bu site Oxford Companion to British History, Europe 1450–1789 (Scribner), Encyclopedia of World Biography, New Catholic Encyclopedia ve World Eras maddelerinin tam metnini barındırıyor. Metinde «(OUP)» geçtiği için bir kısmı tabloda UNIV-YAYIN-KISALTMA (A) olarak da tanınıyor.
- Diğerleri:
  - Catholic Encyclopedia / newadvent (NEWADVENT, B): 3 satır
  - legislation.gov.uk (MEVZUAT, A): 2 satır
  - Dictionary of Welsh Biography (DWB, A): 1 satır
  - Dictionary of Canadian Biography (DCB, A): 1 satır
  - Royal Museums Greenwich (MUZE, B): 1 satır
  - Cambridge University Library ve Internet Encyclopedia of Philosophy (UNIV-SITE, B): 2 satır
  - Bank of England resmî sitesi: 1 satır
- Bütün `yeni_kaynak` metinleri tablonun desenleriyle betikle sınandı. Biri dışında hepsi A ya da B olarak tanınıyor.
  - İstisna [81] İngiltere Bankası: bankofengland.co.uk tabloda yok, kodu `TABLODA-YOK:BOE` yazıldı. Tabloya eklenmedikçe bu madde gizli kalır.
  - [72] royalsociety.org da tabloda yok. O satırı encyclopedia.com (B) karşılıyor.

## Doğrulama yöntemi
- Oturumun ortasında ana oturum worktree'ye geçince Bash ve PowerShell yaklaşık 20 dakika kilitlendi. O arada WebFetch ile devam edildi.
- Kabuk açılınca WebFetch'le okunan 33 tarih cümlesinin hepsi `teyit_is_P2/dogrula.py` ile ham sayfadan (py urllib) yeniden okundu, 33'ü de çıktı.
- Bu doğrulama [66] için daha iyi bir kaynak verdi: Europe 1450–1789'da «22 August 1642» geçiyor. Bu yüzden [66] teyit-yil'den teyit'e çıktı.
- Ham doğrulanamayan satır yok.
- Oxford Reference satırları baştan ham HTML önbelleğinden okundu (`teyit_is_P2/html/ors_*.html`).

## Zorluklar
- Britannica (Cloudflare), Historic England, parliament.uk ve History of Parliament bot korumalı. Hiçbiri aşılmaya çalışılmadı, atlandı.
- BHO aramasında CAPTCHA var. ODNB abonelik istiyor, madde gövdesi kapalı.
- Oxford Reference 69. sorgudan sonra 405 hız sınırı verdi. Kalan maddeler encyclopedia.com, legislation.gov.uk ve resmî/müze sitelerinden tamamlandı.
- Birçok maddede gün, ayın 1'i ya da 01-01 yer tutucusu: [19], [31], [40], [49], [62], [79]. Bunlar doğal olarak teyit-yil oldu.
- Bazı maddeler iki olayı birleştiriyor. Yalnız tarihi taşıyan olay teyit edildi, ikinci olay not'a yazıldı: [10], [32], [68], [76], [44].
- Takvim: [63] Mayflower için kaynak 21 Kasım 1620 veriyor (Gregoryen). Bu, maddedeki 11 Kasım'ın (Jülyen) karşılığı; çeviri not'ta beyan edildi.
- Takvim: [57] Armada ve [85] Blenheim için kaynaklar Gregoryen gün veriyor, madde de Gregoryen. Kronolojinin geri kalanı Jülyen (eski üslup) gün kullanıyor; bu karışıklık Emre'ye bildirilmeli.

## Öneri
- Kaynak tablosuna `BOE` (bankofengland.co.uk, B) ve `ROYAL-SOCIETY` (royalsociety.org, B) eklenmeli.
- teyit-yil kalan 23 maddenin gün düzeyinde teyidi için ODNB ya da HBC'ye kurumsal erişim gerekir.
