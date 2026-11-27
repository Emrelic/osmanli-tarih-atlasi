# Koşu 28-40 log ölçümü (salt-okuma, HAVVA, 27 Kas 2026 ~16:30)

Kaynak: `C:\atlas-kosuNN\` kök loglar. Kısaltmalar: L<n> = ilgili log dosyasının satır numarası. "wall" = ⏱ satırındaki duvar süresi, "işl" = işlemci süresi (ana süreç; işçi süreç işlemcisi dahil değil, ⏱ satırı ne diyorsa o). Süre biçimi `Xs YYdk ZZsn` = saat/dakika/saniye.
Not: dosya mtime'ları tutarsız (ör. kosu29 ilk log mtime 17:31 iken son nabız 18:02; kosu36 ilk log mtime 20:53 iken içerik 01:14'e kadar). Başlangıç/bitiş zamanları **log içeriğindeki damgalardan** alındı; gün, dosya adından.
Bütün koşularda log kodlaması: `uretim_canli.log` = o koşunun son logunun kopyası (kosu32-35 ve 40'ta birkaç satır fazla: rasterio uyarıları).

## 1. Karşılaştırma tablosu (başarıyla biten deneme esas; deneme sayısı ayrı sütunda)

| Koşu | Başlangıç (bitiren deneme) | Bitiş | Koşu saati (log içi) | Tamamlandı mı | Deneme | İşçi | En uzun aşama (wall) | Tepe bellek | Çökme/uyarı |
|---|---|---|---|---|---|---|---|---|---|
| 28 | 10-19 01:31:38 | 10-19 08:51:11 | 7s19dk31sn | EVET (donemler.js yazımı + aşama özeti) | 1 | 1 (SUREC_ISCI=2) | Yabancı gövdeler 3s29dk15sn | ölçüm yok | yok |
| 29 | ilk 10-21 09:18:52 (kesildi 18:02, Dönemler 436/712); bitiren devam 10-21 20:50:46 | 10-22 00:45:36 | devam 3s54dk47sn | EVET (devam) | 2 | 1 | Dönemler 2s08dk32sn (devam); ilk denemede Yabancı gövde 5s11dk46sn | ölçüm yok | yok |
| 30 | ilk 10-25 00:49:32 (kesildi 08:44, Yabancı 1456/2179); bitiren devam 10-25 08:53:22 | 10-25 19:30:54 | devam 10s37dk30sn | EVET (devam) | 2 | 1 | Yabancı gövdeler 4s42dk07sn (1375/2179 diskten hazırdı) | ölçüm yok | 1 SÜREÇ uyarısı (ilk deneme, sovyet-rusya) |
| 31 | 10-30 20:38:24 (anında öldü, DEM yok); 20:39:42 (kesildi 10-31 08:35 GEOS çökmesi); bitiren devam 10-31 10:50:35 | 11-01 05:12:31 | devam 18s21dk53sn | EVET (devam) | 3 | 1 | Yabancı gövdeler 13s29dk39sn | ölçüm yok | **işçi çökmesi** (çıkış kodu 3221225477), 370 devleti ana süreç hesapladı |
| 32 | 11-01 16:02:20 | 11-02 08:22:25 | 16s20dk04sn | EVET | 1 | 1 | Yabancı gövdeler 11s54dk12sn | ölçüm yok | yok |
| 33 | 11-03 22:44:47 | 11-04 22:44:10 (yaklaşık; log içi koşu saatinden) | 23s59dk21sn | EVET | 1 | 1 | Yabancı gövdeler 19s27dk19sn | ölçüm yok | yok |
| 34 | 11-05 02:36:59 | 11-06 00:48:34 | 22s11dk33sn | EVET | 1 | 1 | Yabancı gövdeler 16s19dk23sn | ölçüm yok | yok |
| 35 | 11-08 02:46:14 | 11-08 19:20:37 | 16s34dk21sn | EVET | 1 | 1 | Yabancı gövdeler 12s51dk11sn | ölçüm yok (bekçi logu yanıltıcı, bkz. §5) | **işçi çökmesi** (3221225477), 520 devleti ana süreç hesapladı |
| 36 | ilk 11-08 20:53:52 (kesildi 11-09 01:14); devam 11-10 10:35:05 (kesildi 11-11 02:58); bitiren devam 11-11 08:17:43 | 11-11 23:38:29 | devam 15s20dk44sn | EVET (3. deneme) | 3 | 1 | Yabancı gövdeler 10s20dk02sn (1740/2245 hazır) | ölçüm yok | 1 Traceback (UnpicklingError, 2. deneme .err) |
| 37 | 11-12 20:51:46 (kesildi 11-13 01:52); 11-13 09:45:25 (kesildi 09:55); 11-13 10:44:22 (log 11:23'te Varlık epokları başlangıcında bitiyor) | — | — | **HAYIR** (hiçbir denemede donemler.js yazımı yok) | 3 | 1 | ilk deneme Varlık epokları 2s43dk54sn | ölçüm yok | yok |
| 38 | ilk 11-13 14:12:44 (kesildi 11-14 07:34, Yabancı 1461/2246); bitiren 11-14 07:35:18 | 11-15 03:57:25 | 20s22dk05sn | EVET (2. deneme) | 2 | 1 | Yabancı gövdeler 11s35dk23sn (1802/2246 hazır) | ölçüm yok | yok |
| 39 | 11-15 08:42:04 (kesildi 22:39, Yabancı 1809/2248); 22:44:26 (kesildi 22:57 Ada kuralı); bitiren 23:00:47 | 11-16 17:04:20 | 18s03dk33sn | EVET (3. deneme) | 3 | **2** (3. denemede 2 işçi; öncekilerde 1) | Yabancı gövdeler 9s00dk03sn (1617/2248 hazır) | ölçüm yok | yok |
| 40 | 11-19 00:49:22 | **bitmedi**: son aşama satırı 11-19 22:21:51 "Ⓑ dolgu katmanı"; log dosyası 11-27 13:36'ya kadar yazılmış | 21s32dk28sn'de Ⓑ dolguya girdi | **HAYIR / belirsiz** (Ⓑ dolgu için ⏱ yok, "Çıktı yazımı" yok, aşama özeti yok) | 1 | 1 (SUREC_ISCI=2) | Yabancı gövdeler 17s57dk47sn | gözlem logu: en yüksek python 14,811 MB, en düşük boş RAM 1.31 GB (13:22:51); dinamik log en düşük 0.19 GB | **işçi 1 GEOS çökmesi** (0xC0000005), 347 devlet ana süreçte; 5 GEOSException (çekoslovakya) |

Toplam "koşu saati" kıyası (tek denemede sıfırdan biten koşular, Yabancı gövdeler diskten az hazır): 32 = 16s20dk, 33 = 23s59dk, 34 = 22s11dk, 35 = 16s34dk. Devam/yeniden denemeler `_petek_devam` önbelleğinden başladığı için saatleri daha kısa görünür (bkz. "diskte HAZIR devlet").

## 2. Bayraklar (MOTOR_*)

Ortak (28-40 hepsinde): MOTOR_SUREC_ISCI=2, MOTOR_ONBELLEK_DIZIN=C:\atlas-onbellek, MOTOR_YURUYUS=1, MOTOR_YURUYUS_SAAT=40, MOTOR_DEVAM=1, MOTOR_COL_UFUK_SAAT=0, MOTOR_SINIR_KISIT=1, MOTOR_COL_GIRINTI_KAPALI=1 (hepsinde), MOTOR_KOMSU_KUR_BOL=1 (28-39; 40'ta da var), MOTOR_YAKA_KILIDI=1.
Hiçbirinde MOTOR_PARALEL_ISCI, MOTOR_EZBER_TAVAN*, yok (bayraklar logunda geçmiyor: "bulunamadı"). MOTOR_B_DOLGU yalnız 40'ta.

Farklar (bayraklar dosyası → kaynak yolu aşağıda):
| Koşu | Eklenen / çıkan bayrak |
|---|---|
| 28 | MOTOR_UFUK_BANT=40,56,80; KISTAK_KOPRU yok |
| 29 | +MOTOR_KISTAK_KOPRU=1 |
| 30 | 29 ile aynı |
| 31 | +MOTOR_KUR_DEVIR=1, +MOTOR_KUSATMA_BILESEN=1, +MOTOR_TOHUM_YAKA=1 (üç deneme aynı; "devam" bayraklar dosyası bayrak içermiyor, yalnız "08:35 GEOS cokmesi sonrasi" notu) |
| 32-36 | 31 ile aynı set (32'den itibaren alfabetik sıralı) |
| 37-39 | +MOTOR_ENKLAV_KIRP_KM=10 |
| 39 | 3. deneme (23:00:47) için ayrı bayraklar dosyası YOK ("bulunamadı"); ama o denemenin logu 2 işçi başlatmış (L86 civarı, "2 işçi süreç başlatıldı (pid [9548, 4432])") → MOTOR_SUREC_ISCI değerinin 3 olduğu çıkarsanabilir ama bayraklar dosyasında doğrulanmadı |
| 40 | +MOTOR_B_DOLGU=1, +MOTOR_DOLGU_KAPALI=1, +MOTOR_DOLGU_UFUK_GUN=10, +MOTOR_MO_PUAN_KAPISI=0, +MOTOR_MO_SINIR=9999-12-31, +MOTOR_MO_YURUYUS_GUN=5, +MOTOR_PUAN_KAPALI=1, +MOTOR_TARIH_BASI_MERKEZ=1; MOTOR_UFUK_BANT=40 (öncekiler 40,56,80) |

MOTOR_DEVAM=1: hepsinde. MOTOR_B_DOLGU: yalnız 40 (=1). MOTOR_UFUK_BANT: 28-39 `40,56,80`; 40 `40`. MOTOR_EZBER_TAVAN*: hiçbir bayraklar dosyasında yok ("EZBER TAVANI (BELLEK-1016)" log satırı ise hepsinde var, bayrak değil). MOTOR_ONBELLEK_DIZIN: hepsinde `C:\atlas-onbellek`. MOTOR_PARALEL_ISCI: hiçbirinde yok.
Kaynak: `C:\atlas-kosuNN\kosuNN-*-bayraklar.log` (40'ta: `kosu40-20261119-004922-bayraklar.log`, 24 satır).
Başlık notları: 31-38 bayrak dosyaları taban commit (ör. 32: 58190fb5…, 33: 01d545bd…, 34: 7acb10c1…, 35: 57af6004…, 36: 27ee40a5…, 37: 148bc9f2…, 38: 092b3b66…) yazıyor; 39 ve 40 bayrak dosyasında başlık/taban yok.

## 3. Koşu başına ayrıntı

Genel notlar:
- **MOTOR_SUREC_ISCI=2 her koşuda "1 işçi süreç" başlatıyor** (ana + 1 işçi, yük payı %50). Kanıt: "⚙️ SÜREÇ PARALELLİĞİ: 1 işçi süreç başlatıldı" (28 L28, 29 L29, 30 L177, 31 L177, 32 L176, 33 L176, 38 L134, 39-1 ve 39-2 L85, 40 L85). Yalnız 39'un 3. denemesi (kosu39-20261115-230047.log L85): "2 işçi süreç başlatıldı (pid [9548, 4432])", yük payı %33 (L3269, "749/2248").
- Aşama özeti tablosu (ÇAPRAZ SAYAÇ'lı) yalnız tamamlanan loglarda var: 28 (L~1738+), 29-devam, 30-devam, 31-devam, 32, 33, 34, 35, 36-devam3, 38-2, 39-3. Kosu40'ta ve kesilen denemelerde yok.

### Koşu 28
- Log: `C:\atlas-kosu28\kosu28-20261019-013138.log` (1796 satır), bayrak `…-bayraklar.log`, `.err` 0 bayt, `uretim_isci_1.log`. İlk aşama 01:31:43 (L26); donemler.js yazımı 08:51:10 (L1672). Bitti: "donemler.js yazımı — 1sn", koşu 7s19dk31sn (L1736), aşama özeti var.
- En uzun 6 aşama (wall/işl): Yabancı devlet gövdeleri 3s29dk15sn/7s36dk29sn (L1578) · Dönemler kuruluyor 1s55dk45sn/1s55dk20sn (L1652) · Ⓑ ufuk bantları 51dk47sn/51dk28sn (L1664) · Çöl tavanı 17dk34sn/17dk06sn (L897) · Varlık epokları kuşatılmışlık 9dk52sn/9dk49sn (L1393) · Ada kuralı 8dk14sn/8dk12sn (L643).
- İstenen aşamalar: Yabancı devlet gövdeleri 3s29dk15sn (işl 7s36dk29sn) · Dönemler kuruluyor 1s55dk45sn (1s55dk20sn) · Uzak coğrafya seyreltme 8dk09sn (7dk57sn) (L1657) · Ⓑ ufuk bantları 51dk47sn (51dk28sn) · Ⓑ dolgu katmanı **yok** · Çıktı yazımı 4sn (3sn) (L1667).
- Önbellek (L29-32): tuz ccef3306bc3c; "tuz geçen koşudan FARKLI … bu koşu isabet ALMAYACAK" (hem genel hem geo). Özet (L1737-1743): col isabet 1,189 · ıska 1,202; dolgu 698/1,642; k1 0/4; kusat 575/3,011; govde 287/2,940; osm 5/694; sb 4/695. "🧱 ÖNBELLEK budandı: 0 kayıt · dosya 6,652 MB".
- Bellek: ölçüm satırı yok (RSS/RAM logu yok). EZBER TAVANI (L1555): _SAHIPLI_EZBER 128/128 atılan 2666 · _DEVIR_EZBER 128/128 atılan 7653 · _PUAN_ONBELLEK 3063/∞ · _SK_SAHIP_EZBER 128/128 atılan 469 · _SAHIP_EZBER 128/128 atılan 2792.
- Hata: Traceback 0, GEOSException 0, "SÜREÇ: devlet … gelmedi" 0, işçi çıkış kodları [0] (L1553), ⚠️ satırı 36 (renk/DEM tipi uyarılar), ACIL dosyası yok.
- Girdi: 4676 yerleşim (1091 Osmanlı, 3585 komşu, 489 tâbi dönemi olan) (L432); 4673 tohum (L520); 4676 petek (L552); iş: 1043 devlet (L1552, "devlet 1043/1043"); 937 devlet, 6277 dönem (L1559); kırılma 707/707 (L1617); devletler_harita.js 338,675 KB (L1656); künye `harita:` 347 kimlik (L24).

### Koşu 29
- Deneme 1: `kosu29-20261021-091852.log` (1703 satır): 09:18:56 başlangıç (L26), son satır nabız 18:02:26, koşu 8s43dk33sn, "Dönemler kuruluyor 2s27dk33sn · kırılma 436/712" → **kesildi** (log neden kesildiğini söylemiyor; "bulunamadı"). `.err` 0 bayt. Bu denemede Yabancı gövdeler 5s11dk46sn (işl 7s44dk37sn) (L1665).
- Deneme 2 (devam): `kosu29-devam-20261021-205046.log` (1812 satır; 20:50:54 → 00:45:35 yazım; `.err` 0). Bitti, koşu 3s54dk47sn (donemler.js yazımı, L1752), özet var.
- En uzun 6 (devam): Dönemler 2s08dk32sn/2s05dk18sn (L1668) · Ⓑ ufuk 1s10dk11sn/1s09dk41sn (L1680) · Uzak coğrafya 9dk05sn/8dk55sn (L1673) · Ada kuralı 7dk59sn/7dk58sn (L692) · ekleyici kapı matrisi 3dk13sn/3dk12sn (L1469) · Kıyı kesimi 2dk45sn/2dk45sn (L686).
- İstenen: Yabancı gövdeler 1dk48sn (işl 1dk46sn) (L1598; hepsi diskten: "diskte HAZIR devlet 1117/1117" L1472) · Dönemler 2s08dk32sn (2s05dk18sn) · Uzak coğrafya 9dk05sn (8dk55sn) · Ⓑ ufuk 1s10dk11sn (1s09dk41sn) · Ⓑ dolgu yok · Çıktı yazımı 5sn (5sn) (L1683).
- Önbellek (L30-33): tuz 0f4efe772956, "AYNI ⇒ isabet bekleniyor". Özet (L1753-1758): col isabet 2,415/ıska 0; dolgu 698/13; k1 4/0; kusat 3,850/0; osm 442/262; sb 441/263 (govde satırı yok). Önbellekten: göl, çöl satırları (L37, L43, L943).
- Bellek: ölçüm yok; EZBER (L1588): _SAHIPLI 0/128 · _DEVIR 128/128 atılan 870 · diğerleri 0.
- Hata: Traceback 0, GEOS 0, SÜREÇ uyarısı 0; çıkış kodları [0] (L1586).
- Girdi: 4764 yerleşim (1096/3668/495) (L477); 4761 tohum; 4764 petek; iş 1117 devlet; 1012 devlet, 6777 dönem (L1592); kırılma 712/712 (L1640); 342,458 KB (L1672); künye 349.

### Koşu 30
- Deneme 1 `kosu30-20261025-004932.log` (2510 satır, 00:49:38 → son nabız 08:44:52 koşu 7s55dk17sn; Yabancı gövdeler 1456/2179): kesildi; `.err` 0; 1 uyarı "⚠️ SÜREÇ: devlet sovyet-rusya işçi 1'den gelmedi — ana süreç hesaplıyor" (L2503).
- Deneme 2 `kosu30-devam-20261025-085322.log` (2838 satır; 08:53:27 → 19:30:53): bitti, koşu 10s37dk30sn (L2777); `.err` 0; özet var.
- En uzun 6 (devam): Yabancı gövdeler 4s42dk07sn/7s36dk47sn (L2602) · Dönemler 3s17dk20sn/3s15dk56sn (L2689) · Ⓑ ufuk 1s40dk06sn/1s39dk12sn (L2701) · Ada kuralı 14dk16sn/14dk12sn (L1458) · Uzak coğrafya 13dk22sn/13dk05sn (L2694) · ekleyici kapı matrisi 5dk27sn/5dk26sn (L2310).
- İstenen: Yabancı gövdeler 4s42dk07sn (7s36dk47sn) · Dönemler 3s17dk20sn (3s15dk56sn) · Uzak 13dk22sn (13dk05sn) · Ⓑ ufuk 1s40dk06sn (1s39dk12sn) · Ⓑ dolgu yok · Çıktı yazımı 6sn (6sn) (L2704). Diskten hazır: 1375/2179 (L2313); deneme 1 başında 28/2179 (L2314).
- Önbellek (L178-181): tuz d9305734fb74, AYNI. Özet (L2778-2784): col 2,578/0; dolgu 1,247/177; k1 4/0; kusat 5,044/2; govde 341/1,182; osm 5/705; sb 6/704. Budama: 0 kayıt · 8,796 MB.
- Bellek: ölçüm yok; EZBER (L2588): _DEVIR atılan 58463 · _SAHIPLI 1116 · _SAHIP 1141.
- Hata: Traceback 0, GEOS 0; SÜREÇ uyarısı 1 (deneme 1) ; devamda 0 (çıkış kodları [0], L2586).
- Girdi: 5378 yerleşim (1105/4273/495) (L1222); 5375 tohum; 5378 petek (2 yedek); iş 2179 devlet; 1394 devlet, 8008 dönem (L2592); kırılma 718/718 (L2656); 349,256 KB; künye 349. (Dünya genişlemesi: 29→30'da iş 1117→2179 devlet.)

### Koşu 31
- Deneme 1 `kosu31-20261030-203824.log` (180 satır, 20:38:24): "EGIM DEM YOK ya da YARIM. Kosu baslamadan durduruldu." `.err` (450 bayt): etopo2022_30s_dunya.tif / _atlas.tif aranıyor. Anında öldü.
- Deneme 2 `kosu31-20261030-203942.log` (2966 satır; 20:39:45 → son nabız 08:35:06, koşu 11s55dk23sn, Yabancı 1541/2179): kesildi. Devam bayrak dosyasının başlığı: "08:35 GEOS cokmesi sonrasi" (`kosu31-devam-…-bayraklar.log`). Bu denemede Varlık epokları 2s15dk16sn/2s14dk30sn (L2728).
- Deneme 3 (devam) `kosu31-devam-20261031-105035.log` (3722 satır; 10:50:41 → 05:12:30): bitti, koşu 18s21dk53sn (L3660). `.err` 0 bayt. Özet var.
- En uzun 6 (devam): Yabancı gövdeler 13s29dk39sn/21s53dk30sn (L3509) · Varlık epokları 1s46dk30sn/1s45dk46sn (L2727) · Dönemler 1s25dk38sn/1s25dk12sn (L3573) · Ⓑ ufuk 52dk34sn/52dk18sn (L3585) · Ada kuralı 13dk32sn/13dk28sn (L1347) · Uzak coğrafya 7dk19sn/7dk13sn (L3578).
- İstenen: Yabancı 13s29dk39sn (21s53dk30sn) · Dönemler 1s25dk38sn (1s25dk12sn) · Uzak 7dk19sn (7dk13sn) · Ⓑ ufuk 52dk34sn (52dk18sn) · Ⓑ dolgu yok · Çıktı yazımı 3sn (3sn) (L3588). Diskten hazır: 1397/2179 (L2740).
- Önbellek (L178-181): tuz 72c2ff6a5467, AYNI. Özet (L3661-3667): col 2,586/0; dolgu 1,953/232; k1 4/0; kusat 5,034/3; govde 768/2,972; osm 5/716; sb 6/715. Budama: **22,363 kayıt** · 9,976 MB.
- Bellek: ölçüm yok; EZBER (L3487): _DEVIR atılan 133535 · _SAHIPLI 2640 · _SAHIP 2729.
- Hata: "[SÜREÇ] FAZ 2 bitti · işçiden gelmeyip ana süreçte hesaplanan devlet **370** · işçi çıkış kodları [3221225477]" (L3485) = 0xC0000005 işçi çökmesi. İlk "⚠️ SÜREÇ: devlet ingiltere işçi 1'den gelmedi" L2974, son "bergamo-komunu" L3482; toplam 370 satır. Traceback 0, GEOSException 0 (logda yazılı), Python-seviyesi MemoryError 0.
- Girdi: 5381 yerleşim (1108/4273/495) (L1108); 5378 tohum; 5381 petek; iş 2179; 1440 devlet, 9452 dönem (L3491); kırılma 730/730 (L3541); 347,435 KB; künye 349 (L173).

### Koşu 32
- `kosu32-20261101-160220.log` (3457 satır; 16:02:24 → 08:22:24 11-02); `.err` 267 bayt (1 rasterio NotGeoreferencedWarning). Bitti, koşu 16s20dk04sn (L3395). `uretim_canli.log` 3 satır fazla. Özet var.
- En uzun 6: Yabancı gövdeler 11s54dk12sn/25s08dk26sn (L3244) · Varlık epokları 1s21dk17sn/1s20dk58sn (L2848) · Dönemler 1s17dk42sn/1s16dk43sn (L3308) · Ⓑ ufuk 57dk02sn/56dk37sn (L3320) · Çöl tavanı 14dk12sn/13dk53sn (L1660) · Uzak coğrafya 9dk00sn/8dk26sn (L3313).
- İstenen: Yabancı 11s54dk12sn (25s08dk26sn) · Dönemler 1s17dk42sn (1s16dk43sn) · Uzak 9dk00sn (8dk26sn) · Ⓑ ufuk 57dk02sn (56dk37sn) · Ⓑ dolgu yok · Çıktı 5sn (4sn) (L3323). Diskten hazır 0/2187 (L2861).
- Önbellek (L177-180): tuz 3808bacb3a46; genel katman "FARKLI (değişen: motor:renkler.py) ⇒ isabet ALMAYACAK"; geo "AYNI". Özet (L3396-3402): col 2,606/0; dolgu 1,303/1,458; k1 0/4; kusat 2,154/3,206; govde 755/4,883; osm 5/732; sb 7/730. Budama 12,144 kayıt.
- Bellek: ölçüm yok; EZBER (L3224): _DEVIR atılan 174930 · _SAHIPLI 4550 · _SAHIP 4927.
- Hata: Traceback 0 (log), işçi kodları [0] (L3222), SÜREÇ uyarısı 0.
- Girdi: 5531 yerleşim (1125/4406/505) (L1163); 5526 tohum; 5531 petek (3 yedek); iş 2187; 1612 devlet, 10691 dönem (L3228); kırılma 746/746 (L3275); 397,388 KB; künye 357.

### Koşu 33
- `kosu33-20261103-224447.log` (3544 satır; 22:44:53 → koşu 23s59dk21sn); `.err` 801 bayt (3 rasterio uyarısı). Bitti (L3482), özet var.
- En uzun 6: Yabancı gövdeler 19s27dk19sn/25s27dk34sn (L3332) · Dönemler 1s19dk18sn/1s17dk58sn (L3396) · Varlık epokları 1s17dk31sn/1s16dk20sn (L2846) · Ⓑ ufuk 1s16dk02sn/1s14dk54sn (L3408) · Uzak coğrafya 10dk02sn/9dk16sn (L3401) · Ada kuralı 9dk48sn/9dk39sn (L1403).
- İstenen: Yabancı 19s27dk19sn (25s27dk34sn) · Dönemler 1s19dk18sn (1s17dk58sn) · Uzak 10dk02sn (9dk16sn) · Ⓑ ufuk 1s16dk02sn (1s14dk54sn) · Ⓑ dolgu yok · Çıktı yazımı 8sn (6sn) (L3411). Diskten hazır 2/2187 (L2859).
- Önbellek (L177-180): tuz 3808bacb3a46, AYNI. Özet (L3483-3489): col 2,606/0; dolgu 1,884/903; k1 4/0; kusat 5,300/54; govde 3,997/1,869; osm 113/625; sb 7/731. Budama 12,210 kayıt. (Önbelleği sıcak olduğu hâlde koşu 23s59dk sürdü; Yabancı gövde süresi 32'ye göre +7s33dk, işlemci süresi aynı bandda 25s27dk.)
- Bellek: ölçüm yok; EZBER (L3311): _DEVIR atılan 175066.
- Hata: Traceback 0 (log), işçi kodları [0] (L3309), SÜREÇ uyarısı 0.
- Girdi: 5531 yerleşim (1126/4405/505) (L1162); 5526 tohum; 5531 petek; iş 2187; 1612 devlet, 10687 dönem (L3315); kırılma 747/747 (L3364); 397,067 KB; künye 357.

### Koşu 34
- `kosu34-20261105-023659.log` (3486 satır; 02:37:04 → 00:48:33 11-06); `.err` 267 bayt (1 uyarı). Bitti, koşu 22s11dk33sn (L3424). Özet var.
- En uzun 6: Yabancı gövdeler 16s19dk23sn/30s40dk42sn (L3265) · Dönemler 2s10dk16sn/2s08dk37sn (L3338) · Varlık epokları 1s28dk08sn/1s26dk41sn (L2813) · Ⓑ ufuk 1s10dk15sn/1s09dk41sn (L3350) · Çöl tavanı 17dk43sn/16dk48sn (L1624) · Uzak coğrafya 16dk44sn/15dk54sn (L3343).
- İstenen: Yabancı 16s19dk23sn (30s40dk42sn) · Dönemler 2s10dk16sn (2s08dk37sn) · Uzak 16dk44sn (15dk54sn) · Ⓑ ufuk 1s10dk15sn (1s09dk41sn) · Ⓑ dolgu yok · Çıktı 5sn (4sn) (L3353). Diskten hazır 3/2257 (L2826).
- Önbellek (L138-141): tuz ef3d49e7c2d9; genel "FARKLI (renkler.py) ⇒ isabet ALMAYACAK"; geo AYNI. Özet (L3425-3431): col 2,606/0; dolgu 1,060/1,737; k1 0/4; kusat 828/4,519; govde 3,745/2,218; osm 6/709; sb 323/392. Budama 15,138 kayıt.
- Bellek: ölçüm yok; EZBER (L3248): _DEVIR atılan 181926 · _SAHIPLI 4790 · _SAHIP 5275.
- Hata: Traceback 0 (log), işçi kodları [0] (L3246), SÜREÇ uyarısı 0.
- Girdi: 5532 yerleşim (1127/4405/506) (L1128); 5527 tohum (L1220); 5532 petek; iş 2257; 1642 devlet, 10745 dönem (L3252); kırılma 748/748 (L3307); 380,665 KB; künye 357 (L133).

### Koşu 35
- `kosu35-20261108-024614.log` (3962 satır; 02:46:21 → 19:20:36); `.err` 267 bayt (1 uyarı); `kosu35-BEKCI-KOSU7.log` (44 satır). Bitti, koşu 16s34dk21sn (L3900). Özet var.
- En uzun 6: Yabancı gövdeler 12s51dk11sn/25s02dk16sn (L3750) · Dönemler 1s12dk52sn/1s12dk21sn (L3814) · Varlık epokları 1s08dk14sn/1s07dk59sn (L2805) · Ⓑ ufuk 48dk13sn/47dk56sn (L3826) · Ada kuralı 8dk13sn/8dk10sn (L1366) · Uzak coğrafya 8dk07sn/7dk55sn (L3819).
- İstenen: Yabancı 12s51dk11sn (25s02dk16sn) · Dönemler 1s12dk52sn (1s12dk21sn) · Uzak 8dk07sn (7dk55sn) · Ⓑ ufuk 48dk13sn (47dk56sn) · Ⓑ dolgu yok · Çıktı yazımı **20sn (17sn)** (L3829; diğerlerinde 3-8sn). Diskten hazır 0/2257 (L2818).
- Önbellek (L138-141): tuz ef3d49e7c2d9, AYNI. Özet (L3901-3907): col 2,606/0; dolgu 827/2,413; k1 4/0; kusat 5,272/75; govde 7,542/2,546; osm 158/562; sb 270/450. Budama 26,186 kayıt.
- Bellek: log'da RSS/GB satırı yok. EZBER (L3721): _DEVIR atılan 289606 · _SAHIPLI 8200 · _SAHIP 8863 · _SK_SAHIP 1876 (en yüksek atılan sayılar 28-39 arasında 40 hariç). Bekçi logu (`kosu35-BEKCI-KOSU7.log`): "bellek 9 MB / CPU 0 sn" izlenen PID 19108 (bekçi koşu betiğinin değil başka bir sürecin PID'ini izlemiş; dosyada iki eski bekçi koşusu da var, 13:43-23:26 satırları 11-05 öncesi eski koşuya ait: bellek 296 MB-2.6 GB) → bu dosyadan koşu 35 belleği çıkarılamaz.
- Hata: Traceback 0 (log). **İşçi çökmesi:** "[SÜREÇ] FAZ 2 bitti · işçiden gelmeyip ana süreçte hesaplanan devlet 520 · işçi çıkış kodları [3221225477]" (L3719); ilk "⚠️ SÜREÇ: devlet safevi işçi 1'den gelmedi" L3016, son "xi-liang-li-gao" L3716; toplam 520.
- Girdi: 5530 yerleşim (1131/4399/506) (L1127); 5525 tohum; 5530 petek; iş 2257; 1646 devlet, 10840 dönem (L3725); kırılma 752/752 (L3780-3781); 382,681 KB; künye 358.

### Koşu 36
- Deneme 1 `kosu36-20261108-205352.log` (2879 satır; 20:53:56 → son nabız 01:14:56 (11-09), koşu 4s21dk03sn, Yabancı gövdeler 257/2245): kesildi; `.err` 0; neden log'da yok.
- Deneme 2 `kosu36-devam-20261110-103505.log` (3025 satır; 10:35:12 → son nabız 02:58:30 (11-11), koşu 16s23dk23sn, Yabancı 1450/2245): kesildi. `.err` 213 bayt: `Traceback … File "C:\atlas-kosu36\arac\uret_petek.py", line 8647 … _iz, _r = _pk.load(_f) … _pickle.UnpicklingError: invalid load key, '\x00'.` (hangi süreçten geldiği, log'dan kesin değil: "bulunamadı"; bozuk `_petek_devam` .pkl okuması).
- Deneme 3 `kosu36-devam-20261111-081743.log` (3398 satır; 08:17:49 → 23:38:28): bitti, koşu 15s20dk44sn (L3336). `.err` 534 bayt (2 uyarı). Özet var.
- En uzun 6 (deneme 3): Yabancı gövdeler 10s20dk02sn/19s35dk37sn (L3183) · Varlık epokları 1s50dk13sn/1s49dk19sn (L2810) · Dönemler 1s38dk38sn/1s38dk03sn (L3250) · Ⓑ ufuk 57dk15sn/56dk59sn (L3262) · Uzak coğrafya 7dk33sn/7dk20sn (L3255) · Ada kuralı 7dk19sn/7dk17sn (L1371).
- İstenen: Yabancı 10s20dk02sn (19s35dk37sn) · Dönemler 1s38dk38sn (1s38dk03sn) · Uzak 7dk33sn (7dk20sn) · Ⓑ ufuk 57dk15sn (56dk59sn) · Ⓑ dolgu yok · Çıktı yazımı 5sn (3sn) (L3265). Diskten hazır 1740/2245 (L2823). Deneme 2'de Varlık epokları 2s15dk34sn (L2810), deneme 1'de 1s21dk29sn.
- Önbellek (L136-139): tuz 1d85a667ac42, AYNI. Özet (L3337-3343): col 2,614/0; dolgu 2,025/111; k1 4/0; kusat 5,406/0; govde 1,431/1,056; osm 5/729; sb 7/727. Budama 30,546 kayıt.
- Bellek: ölçüm yok; EZBER (L3170): _DEVIR atılan 78929 · _SAHIPLI 1841.
- Hata: Traceback 1 (yalnız .err, deneme 2); log içi Traceback 0; işçi kodları [0] (L3168); SÜREÇ uyarısı 0.
- Girdi: 5593 yerleşim (1173/4420/520) (L1133); 5588 tohum; 5593 petek; iş 2245; 1702 devlet, 11032 dönem (L3174); kırılma 763/763 (L3219); 382,997 KB; künye 358 (L131).

### Koşu 37 (TAMAMLANMADI)
- Deneme 1 `kosu37-20261112-205146.log` (2847 satır; 20:51:52 → son nabız 01:52:30 (11-13), koşu 5s00dk43sn; Yabancı gövdeler 52dk01sn, "devlet 13/2245"): kesildi. "Diskten HAZIR 0/2245" (L2835). Varlık epokları 2s43dk54sn/2s42dk21sn (L2821).
- Deneme 2 `kosu37-20261113-094525.log` (1281 satır; 09:45:32 → 09:55:23, YÜRÜYÜŞ petekler ızgaradan başlangıcı; 9dk51sn): kesildi.
- Deneme 3 `kosu37-20261113-104422.log` (1880 satır; 10:44:28 → 11:23:37 Varlık epokları kuşatılmışlık ön geçişi başladı; ENKLAV KIRPMA satırı L1880; dosya mtime 11:27): kesildi. 
- Üç denemenin üçünde de "Yabancı devlet gövdeleri" ⏱ bitiş satırı yok, donemler.js yazımı yok, aşama özeti yok.
- İlk deneme (en ilerleyen) en uzun 6: Varlık epokları 2s43dk54sn · Çöl tavanı 31dk22sn (L1632) · Ada kuralı 16dk15sn (L1383) · ekleyici kapı matrisi 6dk23sn (L2832) · Kıyı kesimi 6dk00sn (L1377) · Petek alanları 5dk19sn (L1873).
- İstenen aşamalar (Yabancı, Dönemler, Uzak, Ⓑ ufuk/dolgu, Çıktı yazımı): hiçbirinde **yok** (ulaşılmadı).
- Önbellek (deneme 1 L135-138): tuz 62251a7c63a4, genel+geo "FARKLI (motor:uret_petek.py, ortam) ⇒ isabet ALMAYACAK"; özet satırı yok.
- Bellek: ölçüm yok. Hata: Traceback 0, GEOS 0, SÜREÇ uyarısı 0; `.err` boyutu hepsinde 0.
- Girdi: 5628 yerleşim (1175/4453/520) (L1139); 5628 petek; iş 2245 devlet (L2835).
- Not: kosu37'de MOTOR_ENKLAV_KIRP_KM=10 ilk kez bayraklarda (L135 civarı "🏰 ENKLAV KIRPMA AÇIK").

### Koşu 38
- Deneme 1 `kosu38-20261113-141244.log` (3108 satır; 14:12:49 → son nabız 07:34:19 (11-14), koşu 17s21dk34sn, Yabancı gövdeler 13s10dk45sn, 1461/2246): kesildi; `.err` 801 bayt (3 uyarı). Varlık epokları 2s43dk47sn (L2819). Diskten hazır 2/2246.
- Deneme 2 `kosu38-20261114-073518.log` (3450 satır; 07:35:24 → 03:57:24 (11-15)): bitti, koşu 20s22dk05sn (L3388). `.err` 534 bayt. Özet var. Ek dosyalar: `kosu38-denetle.txt`, `kosu38-renk.txt`, `kosu38-inis-mesaj.txt` (iniş, bu ölçüm kapsamı dışı).
- En uzun 6: Yabancı gövdeler 11s35dk23sn/21s26dk25sn (L3205) · Dönemler 4s14dk25sn/4s11dk17sn (L3302) · Ⓑ ufuk 2s09dk43sn/2s08dk09sn (L3314) · Varlık epokları 1s32dk29sn/1s31dk44sn (L2817) · Uzak coğrafya 20dk43sn/19dk54sn (L3307) · Ada kuralı 8dk26sn/8dk25sn (L1380).
- İstenen: Yabancı 11s35dk23sn (21s26dk25sn) · **Dönemler 4s14dk25sn (4s11dk17sn)** (33'e göre 3 kat) · Uzak 20dk43sn (19dk54sn) · **Ⓑ ufuk 2s09dk43sn (2s08dk09sn)** (önceki 48dk-1s16dk) · Ⓑ dolgu yok · Çıktı yazımı 20sn (4sn) (L3317). Diskten hazır 1802/2246 (L2831).
- Önbellek (L135-138): tuz e5e25d2d7b83, AYNI. Özet (L3389-3395): col 2,618/0; dolgu 1,731/109; k1 4/0; kusat 5,421/0; govde 473/1,587; osm 5/732; sb 7/730. Budama **72 kayıt** (öncekiler 12-30 bin).
- Bellek: ölçüm yok; EZBER (L3190): _DEVIR atılan 80069.
- Hata: Traceback 0; işçi kodları [0] (L3188); SÜREÇ uyarısı 0.
- Girdi: 5628 yerleşim (1175/4453/520) (L1136); 5623 tohum; 5628 petek; iş 2246; 1708 devlet, 11087 dönem (L3194); kırılma 766/766 (L3270); 383,827 KB; künye 374 (L130).

### Koşu 39
- Deneme 1 `kosu39-20261115-084204.log` (3529 satır; 08:42:09 → son nabız 22:39:24, koşu 13s57dk19sn, Yabancı 11s35dk39sn, 1809/2248): kesildi; `.err` 1068 bayt (4 uyarı). Varlık epokları 1s33dk46sn (L3257). Önbellek (L88): "genel: FARKLI (değişen: motor:girdi.py, motor:renkler.py)".
- Deneme 2 `kosu39-20261115-224426.log` (1798 satır; 22:44:31 → 22:57:39 Ada kuralı başlangıcı; 13dk08sn): kesildi; `.err` 0.
- Deneme 3 `kosu39-20261115-230047.log` (3855 satır; 23:00:50 → 17:04:19 (11-16)): bitti, koşu 18s03dk33sn (L3793). `.err` 267 bayt. **2 işçi** (L85), işçi logları `uretim_isci_1.log` + `uretim_isci_2.log`. Özet var.
- En uzun 6: Yabancı gövdeler 9s00dk03sn/12s58dk29sn (L3610) · Dönemler 4s15dk32sn/4s12dk01sn (L3707) · Ⓑ ufuk 2s30dk59sn/2s28dk13sn (L3719) · Varlık epokları 1s26dk32sn/1s26dk07sn (L3255) · Uzak coğrafya 20dk19sn/19dk17sn (L3712) · Ada kuralı 9dk43sn/9dk41sn (L1803).
- İstenen: Yabancı 9s00dk03sn (12s58dk29sn) · Dönemler 4s15dk32sn (4s12dk01sn) · Uzak 20dk19sn (19dk17sn) · Ⓑ ufuk 2s30dk59sn (2s28dk13sn) · Ⓑ dolgu yok · Çıktı yazımı 27sn (10sn) (L3722). Diskten hazır 1617/2248 (L3268).
- Önbellek (L86-89): tuz 49b285f9c15e, AYNI. Özet (L3794-3800): col 2,618/0; dolgu 1,504/122; k1 4/0; kusat 5,533/0; govde 918/379; osm 5/732; sb 7/730. Budama 18,131 kayıt.
- Bellek: ölçüm yok; EZBER (L3600): _DEVIR atılan 43894.
- Hata: Traceback 0; işçi kodları [0, 0] (L3598); SÜREÇ uyarısı 0. Ek dosya `denetle-kosu39-1116.txt` (denetim çıktısı, kapsam dışı).
- Girdi: 5636 yerleşim (1176/4460/521) (L1559); 5631 tohum; 5636 petek; iş 2248; 1718 devlet, 11173 dönem (L3604); kırılma 766/766 (L3675); 405,586 KB; künye 377 (L81).

### Koşu 40 (BİTMEDİ / belirsiz)
- `kosu40-20261119-004922.log` (5576 satır; 00:49:26 → 22:21:51 (11-19) "▶ Ⓑ dolgu katmanı (B görünümü)" başladı, **bitiş ⏱ satırı yok**). Sonra yalnızca `[yavas] <devlet> <sn> sn (kapanis)` satırları (1397 adet; toplam 14,217.1 sn; en yavaş tek: isvec 36.0 sn; devlet bazında toplam: OSMANLI 327 satır 3576.3 sn, ispanya 168/2231.9, ingiltere 72/1207.6, fransa 106/1193.8, rusya 128/1133.4). Bu satırların zaman damgası yok.
- `uretim_canli.log` 5582 satır (6 satır fazla: rasterio uyarıları). Her iki log dosyası mtime 11-27 13:36:07; `C:\atlas-onbellek\motor_onbellek.sqlite-shm` mtime 11-27 16:28, `-wal` 13:41 (bu da yazım sürüyor/sürmüş olabileceğini düşündürür; **süreç canlılığı doğrulanmadı** — süreç sorgulanmadı). Koşu başlangıcından 8 gün sonra hâlâ yazım olması durumunda Ⓑ dolgu katmanı aşaması ~7 günü aşmış demektir (ölçülemedi: log'da zaman damgası yok).
- ⏱ aşamaları (ilk 40 satır dahil): Girdi anlık görüntüsü 8sn; Kara maskesi 32sn; Göller 14sn; Yerleşimler okunuyor 11sn; ızgara 12sn; DEM 14sn; nehir geçiş bedeli 15sn; boğaz yasağı 16sn; Dijkstra 1dk29sn; A/B eğimsiz 1dk14sn; A/B nehirsiz 1dk17sn; YÜRÜYÜŞ bütçe bölgesi 7sn; Petekler (Voronoi) 40sn; YÜRÜYÜŞ petekler ızgaradan 1dk26sn; ortak kenar 2sn; kenar yumuşatma 27sn; polygonize 1dk04sn; coverage_simplify 5sn; Kıyı kesimi 3dk00sn; Ada kuralı 5dk36sn (L1805); parçaları sına 6sn; Çöl tavanı 14dk21sn (L2054); motor_kara 24sn; Petek alanları 2dk43sn; Varlık epokları 1s32dk01sn (L3295); Bölge sınırları 3sn; ekleyici kapı matrisi 3dk32sn (L3305).
- En uzun 6 (wall/işl): Yabancı devlet gövdeleri **17s57dk47sn / 34s34dk36sn** (L4133) · Varlık epokları 1s32dk01sn/1s31dk14sn (L3295) · Dönemler kuruluyor 1s06dk52sn/1s05dk39sn (L4172) · Uzak coğrafya seyreltme 16dk07sn/15dk35sn (L4177) · Çöl tavanı 14dk21sn/14dk11sn (L2054) · Ada kuralı 5dk36sn/5dk35sn (L1805).
- İstenen: Yabancı 17s57dk47sn (34s34dk36sn) · Dönemler 1s06dk52sn (1s05dk39sn) · Uzak 16dk07sn (15dk35sn) · Ⓑ ufuk bantları: **yok** (tek bant 40 sa; "Ⓑ ufuk bantları: 40 sa · kontur parçaları 2520 · 0.0 sn" satırı L1693 ayrı aşama değil) · **Ⓑ dolgu katmanı: başladı 22:21:51 (L4178), ⏱ bitişi yok** (ilk satır: "🧱 DOLGU DUVARI: 453 hat (C+D+E+F) · Osmanlı taraflı 22 …" L4179) · Çıktı yazımı: yok. Ayrıca "🚪 EKLEYİCİ KAPI KAPALI (MOTOR_DOLGU_KAPALI=1)" (L4171).
- Önbellek (L86-89): tuz d7de80374c5d; genel (k1·col·kusat·dolgu) "FARKLI (değişen: motor:renkler.py, motor:uret_petek.py, ortam) ⇒ isabet ALMAYACAK"; geo (govde·osm·sb) "FARKLI (değişen: motor:uret_petek.py, ortam) ⇒ isabet ALMAYACAK". Özet satırları (isabet/ıska) **yok** (koşu sonuna ulaşılmadı).
- Bellek: log içinde RSS/GB satırı yok. EZBER TAVANI (L4101): _SAHIPLI 128/128 atılan 6452 · _DEVIR 128/128 atılan **366776** · _PUAN_ONBELLEK 0/∞ · _SK_SAHIP 128/128 atılan 1692 · _SAHIP 128/128 atılan 7217. `kosu40-gozlem.log` (13:13:15-13:23:06, 40 örnek, 15 sn aralıklı): **en yüksek pythonRAM_MB 14,811 (13:22:51)**, **en düşük bosRAM_GB 1.31 (13:22:51)**, eczaneRAM_MB ~862-865, koşuCPU% 30-78. `kosu40-dinamik.log` (1285 satır, 19 Kas 13:24 → 23 Kas 11:54:52 son satır): 177 mod değişimi (Idle 10, BelowNormal 82, Normal 85); en düşük bosRAM **0.19 GB (19 Kas 22:09:21, mod=Idle)**; bosRAM < 1.0 GB olan 26 satır; 23 Kas 11:54'ten sonra kayıt yok. `kosu40-oncelik.log` 09:00'da 4 pid BelowNormal.
- Hata: GEOSException 5 (L4108-4112; hepsi `cekoslovakya` 1920-07..10: "TopologyException: side location conflict at -29.019771819056835 -18.65723199999…" — ana sürecin Dönemler/SINIR-KISIT aşaması). "⚠️ SÜREÇ: devlet X işçi 1'den gelmedi — ana süreç hesaplıyor" **347** satır (ilk ingiltere L3605); "[SÜREÇ] FAZ 2 bitti · … ana süreçte hesaplanan devlet 347 · işçi çıkış kodları [3221225477]" (L4099). `geos-coku-1119.txt` (elle yazılmış inceleme notu): işçi 1 (PID 3588) 17:08:57'de python.exe, geos-ae6efa….dll içinde 0xc0000005 erişim ihlali (Windows olay 1000/1001; WER minidump), son nabız 17:08:56 "devlet 1587/2274 jukun-kvararafa · gün 360/414 (1835-01-01)"; o saatte işçi 1 ~7.4 GB; boş RAM 1.2-3.9 GB. İşçi logu: `uretim_isci_1.log` (311,283 bayt; son satır 17:08:56). ACIL dosyaları: `ACIL-1324.txt`, `ACIL-1503.txt`, `ACIL-1631.txt`, `ACIL-1636.txt` ("bos RAM 1.27/…  GB < 1.5 iki ornek; koşu Idle"), `ACIL-2111.txt` (19 Kas 21:11, "0.98 GB < 1.0"), `ACIL.txt` (5 satır; 19 Kas 21:20, 22:03, 22:17, 22:37 ve 20 Kas 02:05: boş RAM 0.97, 0.99, 0.83, 0.99, **0.67 GB**, "mesai dışı"). Traceback 0. `.err` 801 bayt (3 uyarı).
- Girdi: 5649 yerleşim (1176 Osmanlı, 4473 komşu, 521 tâbi) (L1559); 5644 tohum (365 kaydırıldı); 5649 petek (3 yedek); iş 2274 devlet (L4097); **1752 devlet, 11384 dönem** (L4105, L4176); kırılma 765/765 (L4163); devletler_harita.js 401,676 KB; künye `harita:` 396 kimlik (L81); "SÜREÇ 1137/2274" (L3309). Diskten hazır 0/2274 (L3308).

## 4. Girdi boyutu — koşudan koşuya büyüme (bitiren deneme)

| Koşu | Yerleşim (Osmanlı/komşu/tâbi) | Petek | "devlet-iş" (Yabancı gövde) | Devlet, dönem (yazım) | Kırılma | devletler_harita.js KB | künye harita: |
|---|---|---|---|---|---|---|---|
| 28 | 4676 (1091/3585/489) | 4676 | 1043 | 937 / 6277 | 707 | 338,675 | 347 |
| 29 | 4764 (1096/3668/495) | 4764 | 1117 | 1012 / 6777 | 712 | 342,458 | 349 |
| 30 | 5378 (1105/4273/495) | 5378 | 2179 | 1394 / 8008 | 718 | 349,256 | 349 |
| 31 | 5381 (1108/4273/495) | 5381 | 2179 | 1440 / 9452 | 730 | 347,435 | 349 |
| 32 | 5531 (1125/4406/505) | 5531 | 2187 | 1612 / 10691 | 746 | 397,388 | 357 |
| 33 | 5531 (1126/4405/505) | 5531 | 2187 | 1612 / 10687 | 747 | 397,067 | 357 |
| 34 | 5532 (1127/4405/506) | 5532 | 2257 | 1642 / 10745 | 748 | 380,665 | 357 |
| 35 | 5530 (1131/4399/506) | 5530 | 2257 | 1646 / 10840 | 752 | 382,681 | 358 |
| 36 | 5593 (1173/4420/520) | 5593 | 2245 | 1702 / 11032 | 763 | 382,997 | 358 |
| 37 | 5628 (1175/4453/520) | 5628 | 2245 | (bitmedi) | (bitmedi) | — | ? |
| 38 | 5628 (1175/4453/520) | 5628 | 2246 | 1708 / 11087 | 766 | 383,827 | 374 |
| 39 | 5636 (1176/4460/521) | 5636 | 2248 | 1718 / 11173 | 766 | 405,586 | 377 |
| 40 | 5649 (1176/4473/521) | 5649 | 2274 | 1752 / 11384 | 765 | 401,676 | 396 |
Not: "devlet-iş" = "devlet N/N" ilerleme sayacının paydası (L1552 vb.); 28→30'da 1043→2179 sıçraması (MÖ/dünya devletlerinin eklenmesi) görünür. Yerleşim sayısı 28→40'ta +973 (4676→5649, +%20.8); dönem sayısı 28→40'ta 6277→11384 (+%81); devlet 937→1752 (+%87).

## 5. Süre eğilimi — Yabancı devlet gövdeleri (en baskın aşama)

Sıfırdan (diskten hazır ~0) koşulan hâllerde:
| Koşu | wall | işlemci | devlet-iş | diskten hazır |
|---|---|---|---|---|
| 28 | 3s29dk15sn | 7s36dk29sn | 1043 | 0 |
| 32 | 11s54dk12sn | 25s08dk26sn | 2187 | 0 |
| 33 | 19s27dk19sn | 25s27dk34sn | 2187 | 2 |
| 34 | 16s19dk23sn | 30s40dk42sn | 2257 | 3 |
| 35 | 12s51dk11sn | 25s02dk16sn | 2257 | 0 |
| 40 | 17s57dk47sn | 34s34dk36sn | 2274 | 0 |
Kısmen diskten (devam) koşulan: 29d 1dk48sn (1117/1117) · 30d 4s42dk07sn (1375/2179) · 31d 13s29dk39sn (1397/2179, 370 devlet ana süreçte) · 36d3 10s20dk02sn (1740/2245) · 38-2 11s35dk23sn (1802/2246) · 39-3 9s00dk03sn (1617/2248, 2 işçi).
İşçi 1 çöktüğünde (31, 35, 40) kalan devletler ana süreçte tek başına hesaplandı (370, 520, 347 devlet); yalnız 40'ta işçi saati (işlemci) en yüksek: 34s34dk36sn.
Dönemler kuruluyor: 28 1s55dk45sn · 29d 2s08dk32sn · 30d 3s17dk20sn · 31d 1s25dk38sn · 32 1s17dk42sn · 33 1s19dk18sn · 34 2s10dk16sn · 35 1s12dk52sn · 36d3 1s38dk38sn · 38 4s14dk25sn · 39 4s15dk32sn · 40 1s06dk52sn.
Ⓑ ufuk bantları: 28 51dk47sn · 29d 1s10dk11sn · 30d 1s40dk06sn · 31d 52dk34sn · 32 57dk02sn · 33 1s16dk02sn · 34 1s10dk15sn · 35 48dk13sn · 36d3 57dk15sn · 38 2s09dk43sn · 39 2s30dk59sn · 40 yok (MOTOR_UFUK_BANT=40 tek bant, Ⓑ ufuk ⏱ yok; sıra Ⓑ dolguya geçmiş).

## 6. Bulunamayanlar / ölçülemeyenler
- Bellek (RSS/GB/boş RAM) ölçümü yalnız **koşu 40** için var (`kosu40-gozlem.log` 13:13-13:23, `kosu40-dinamik.log` 19-23 Kas); koşu 28-39 için log yok ("bulunamadı"). Koşu 35'in bekçi logu bellek ölçümü sayılamaz (izlenen PID 9 MB).
- Koşu 40: Ⓑ dolgu katmanı bitiş/⏱ satırı, Çıktı yazımı, önbellek isabet özeti, aşama özeti, işçi bitiş kodu (kodu 3221225477 ama sonrası yok): log'da **yok**. Süreç canlılığı: **doğrulanmadı** (sorgulanmadı); yalnız dosya mtime'ları 11-27 13:36 (log), 13:41/16:28 (sqlite wal/shm).
- Koşu 37: üç denemenin hiçbiri tamamlanmadı; kesilme nedeni log'da yok.
- Kesilen denemelerin (29-1, 30-1, 31-2, 36-1, 36-2, 37-x, 38-1, 39-1, 39-2) neden kesildiği log'da yazmıyor (yalnız 31-2 için bayrak dosyasında "08:35 GEOS çökmesi sonrası" notu ve 31-1 için `.err`'de DEM yok mesajı; 36-2 için `.err` UnpicklingError).
- Koşu 39 3. deneme için bayrak dosyası yok; MOTOR_SUREC_ISCI değeri doğrulanamadı (log 2 işçi gösteriyor).
- Hiçbir koşuda MOTOR_PARALEL_ISCI, MOTOR_EZBER_TAVAN* bayrağı yok; MOTOR_B_DOLGU yalnız koşu 40'ta.
