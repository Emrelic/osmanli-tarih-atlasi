# BOLGE-cinhindi-7-duzeltme-1115 — Çinhindi bölge denetimi, adım 7 (düzeltme)

Dal `umit-1115-bolge-cinhindi` (taban `origin/main` 8fb10bdf1). 15 Kasım 2026, UMIT. Ön okuma: adım 1-6 belgelerindeki "yöntem sınırı" (akademik kitapların çoğu okunamadı; yalnız açık erişimli JSS makaleleri ve Baker-Pasuk 2017 bölümü okundu).

## Yazılan düzeltmeler (3 küme, 6 dosya, hepsi `node --check` OK)

### D1. Chiang Mai / Chiang Rai / Nan — Siyam'a geçiş 1774-01-15 → 1775-01-15 (ÇİFT TEYİT)
- Dosyalar: `data/yerlesimler_asya.js` (Chiang Mai: konbaung `t` + tonburi `f` + başlık yorumu), `data/yerlesimler_gdasya.js` (Chiang Rai, Nan; gün komşudan, beyanlı), `data/kronoloji_sinir_asya.js` (madde metni «1774'te» → «15 Ocak 1775»).
- Kaynaklar (açıldı, okundu): Volker Grabowsky, JSS 87 (1999), Kuzey Tay cotmaihet'i «14th day of the waxing moon in the fourth month of C.S. 1136 [Sunday, 15 January 1775] the Siamese conquered Chiang Mai»; Hiroshi Kirigaya, JSS 102 (2014): «final liberation of Chiang Mai in 1775». 15 Ocak 1775 Pazar (hesaplandı).
- Çelişen kayıt: atlas pencere 1774-01-15 kaynaksız; Lamphun maddesi 1775-01-14 (Vikipedi) 1 gün fark, değişmedi.
- Not: Chiang Rai/Nan için ayrı tanık yok (BEYANLI YAKLAŞIKLIK); Phayao 1775-01-01 ve Lamphun 1775-01-14 dokunulmadı.

### D2. Chiang Mai kronoloji maddesi 1558-01-01 → 1558-04-02 (tek akademik kaynak)
- `data/kronoloji_sinir_asya.js` satır 41: yıl-temsilî madde gün teyidiyle çekildi (91 gün açı kapandı). Kaynak: Kirigaya JSS 102 (2014) s. 261, Chiang Mai Chronicle «(2 April 1558)»; Birman kaynağıyla tutarlı. Çift teyit yok, aynı gün atlasta zaten (1558-04-02, Phayao/Lamphun maddeleri). Çeviri anahtarı yok, `olay_taraf` anahtarı yok.

### D3. Ayutthaya kuruluşu 1350 → 1351-03-04 (HAKEMLİ KARAR; KASA gözden geçirsin)
- Dosyalar: `data/devletler.js` (ayutthaya `f` 1350-01-01 → 1351-03-04; künye-içi kronoloji t; `ic_not` karar metni), `data/kronoloji_sinir_asya.js` satır 18 (t 1351-03-04, `gun`, `ic_not_d`), `data/kronoloji_sinir_dogu_500_1281.js` (Nakhon Pathom maddesi 1350-01-01 → 1351-03-04, kesinlik gun), `data/yerlesimler_dogu_500_1281.js` (Nakhon Pathom: `__BOSLUK__` `t` ve ayutthaya `f` → 1351-03-04, kesinlik gun).
- Çelişen: TDV «Tayland» (1350), Coedès 1968 (1350), Wood 1924 (1350). Teyit eden üç bağımsız akademik kaynak: Baker-Pasuk, *A History of Ayutthaya* (CUP 2017) böl. 2 «equivalent to March 4, 1351»; Vickery, JSS 67/2 (1979) «suddenly founded in 1351», «cula 712»; Charnvit, JSS 80/1 (1992) «founded in 1351». Luang Prasoet kroniği «712, Friday, sixth waning day of the fifth month»: Jülyen 4 Mart 1351 = Cuma ✓ (hesaplandı).
- ÖNEMLİ: önceki oturumun (DUNYA-1102 hücre 10) «TDV esas, 1351 için akademik kaynak açılamadı» kararını geçersiz kılar; bu karar CLAUDE.md hakemli kural ile alındı. Gün tek kaynakta (Baker-Pasuk), yıl üç kaynakta; KASA isterse yalnız `f` günü 1351-01-01'e indirilip yıl-temsilî bırakılabilir. Atlasın kendi Ayutthaya penceresi ve Lopburi geçişi zaten 1351-03-04 idi.

## Önce/sonra
| ölçüm | önce (temel koşu) | sonra |
|---|---|---|
| `denetle` Değişmez 1 | 306 sahipsiz (beklenen 306) | 306 |
| Değişmez 2 | 760 kırılma, 0 açık | 760, 0 açık |
| Değişmez 2s | 3698 yabancı kırılma, 154 açık, 432 yıl-temsilî borç | 3699, 154 açık, 432 |
| Değişmez 4/4c/4d | 0 / 0 / 0 | 0 / 0 / 0 |
| `odak_olc` ÇÖZÜLMEYEN ODAK ATFI | 0 | 0 |
| Çıkış kodu | temel koşu «SONUÇ: temiz» | düzeltme sonrası koşu: bkz. rapor sonu notu (bitmemişse "ölçülmedi") |
Yeni D2/D4c ihlali yok. Tavan açılmadı. Not: temel koşu düzenlemelerle zamanca çakışmış olabilir (dosyalar koşu başında okundu varsayıldı); sayılar iki koşuda aynı.

## Bu turda YAZILMAYAN (kaynak okunamadı; ayrıntı adım 1-4 ve `YERLESIMLER-JS-KUYRUK-1115-cinhindi.md`)
Toungoo→Konbaung 1752-04-23 (22 pencere) · Tây Sơn→Nguyễn 1802-06-20 · Mạc→Lê 1592-01-01 · Nguyễn 1801-06-15 künye uyumsuzluğu · Chakri 1782-04-06/04-20 ve Thonburi `t` çakışması · Tayland adı 1939-06-05 (şüpheli, 24 Haziran?) · Pagan 1287/1297 · Arakan künyesi f=1281 ve Launggyet çakışması · Thonburi `f`/Bangkok `kur` 88 gün · eksik künyeler ve eksik kronoloji maddeleri (Vijaya 1471, Panduranga 1832, 1569/1584 Ayutthaya, Lê 1592, Tây Sơn 1786, Lan Xang 1707 …).

## Çeviri notu (KASA)
D2'de kronoloji madde metni (`b`) değişmedi; yalnız `d` (açıklama) ve `t` değişti, `<DIZI>:<t>:<idx>` çeviri anahtarı ve `olay_taraf` anahtarı bu üç maddede **yok** (grep ile doğrulandı). Çeviri hash bayatlığı: `d` metni değiştiği için bu iki maddenin açıklama çevirisi (varsa) bayat sayılabilir.

## Paketleme
`paketle yenile`, `surum_damgala`, üretilmiş dosyalar: **yapılmadı** (brif gereği; KASA).
