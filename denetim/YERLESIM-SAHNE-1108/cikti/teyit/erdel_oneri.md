# Erdel (Transilvanya) sahiplik zinciri — kaynaklı öneri (11 Kasım 2026)

Salt araştırma; repo dosyasına dokunulmadı. Ayrıntı: `erdel_oneri.json`.

## Kimlik ve boya durumu (ölçüldü)
- devletler.js'te VAR: `macaristan`, `dogu-macar-kralligi`, `erdel`, `macaristan-habsburg`, `habsburg`, `macaristan-naiplik`, `romanya-kralligi`, `romanya-halk`, `romanya-cumhuriyeti`, `eflak`, `bogdan`, `romanya`.
- BOYALAR'da VAR: `romanya-kralligi` (renkler.py:2631) dahil hepsi. Görevdeki "romanya-kralligi YOK" varsayımı YANLIŞ. `romanya-halk` ve `romanya-cumhuriyeti` BOYALAR'da yok ama `harita:"romanya-kralligi"` ile boyanır. `boya_anahtari_gerekli` = boş.
- YOK ve önerilmiyor: Erdel Voyvodalığı (1281-1526) künyesi, Erdel Büyük Prensliği (1711-1867) künyesi.
- Nagyszeben (Sibiu) atlasta yok.

## Önerilen ortak zincir (Kaloşvar, Gyulafehérvár, Brassó, Segesvár, Szászsebes, Zilah)
| Dilim | d |
|---|---|
| 1281-01-01 → 1526-11-10 | macaristan (korunur) |
| 1526-11-10 → 1541-08-29 | dogu-macar-kralligi (şimdi v:vassal) |
| 1541-08-29 → 1551-07-26 | erdel (şimdi v:) |
| 1551-07-26 → 1556-03-12 | macaristan-habsburg (korunur) |
| 1556-03-12 → 1711-04-29 | erdel (şimdi 1687'de Habsburg'a dönüyor) |
| 1711-04-29 → 1867-06-20 | habsburg (şimdi macaristan-habsburg) |
| 1867-06-20 → 1918-11-16 | macaristan-habsburg |
| 1918-11-16 → 1920-06-04 | macaristan-naiplik (+ isg romanya-kralligi şehre göre) |
| 1920-06-04 → 1947-12-30 | romanya-kralligi (korunur) |

## Teyit durumu (AÇILAN kaynaklar)
- TDV "Erdel" (Kemal Karpat, c.11, 1995, s.280-283) OKUNDU: 1541 haraçgüzar voyvodalık; 1699 Karlofça ile Avusturya'ya terk; 1765 büyük prenslik; 1849-60 özel idare; "1866'da Macaristan'a bağlandı"; 1920 Trianon onayı; 30 Ağustos 1940 iki-beşi Macaristan'a; 1944 geri; 10 Şubat 1947 doğrulama. Speyer 1570 ve 1711 bu maddede YOK.
- MTA History of Transylvania (mek.oszk.hu): 26 Temmuz 1551 (I/102), 12 Mart (1556) Szászsebes diyeti, Speyer ratifikasyonu 10 Mart 1571 (I/103; antlaşma günü verilmiyor), Fogaras 9 Mayıs 1688 (II/247), 20 Haziran 1867 Kolozsvár diyeti feshi ve "300 yıllık ayrı statü sona erdi" (III/415), 1 Aralık 1918 Gyulafehérvár (III/438).
- habsburger.net: 8 Haziran 1867 taç giyme.
- Atlas alıntısı olup bu oturumda yeniden AÇILMAYAN: Mohaç 29 Ağustos 1526, Zapolya seçimi 10 Kasım 1526, Trianon 4 Haziran 1920 (TDV birinci-dunya-savasi), TDV macaristan'daki 1867 cümlesi (özetleyici bulamadı, atlas kaydı alıntılıyor).
- Britannica 403 verdi, açılamadı. Speyer günü (16 Ağustos 1570) bağımsız kaynakta BULUNAMADI.
- 1944 Kuzey Erdel'in geri dönüş GÜNÜ: BULUNAMADI.

## Düşük güvenli 4 aday
- Marosvásárhely: GİRER, koşullu — kuruluş (1332) yalnız wiki; zincir 1281'den değil kaynaklı tarihten başlamalı.
- Beszterce: GİRER (kuzey Erdel boşluğu).
- Medgyes: GİRER (önce Nagyszeben eklenmeli).
- Szászrégen: GİRMEZ (Marosvásárhely'e ~28 km, ikincil).
Hiçbirinin kuruluşu akademik kaynakla teyit edilmedi (yalnız en.wikipedia).

## Riskler
1. TDV 1866, MTA 20 Haziran 1867: öneri 1867-06-20 (Erdel'e özgü, gün teyitli), iç notla beyan.
2. 1711-1867 için `habsburg` seçimi tasarım kararıdır; mevcut `macaristan-habsburg` Macar tacı toprağı varsayıyor, MTA/TDV "ayrı birim" diyor.
3. s: d:"erdel" yazılırsa mevcut v:kid erdel dilimleri çift sayılır; v: kaldırılmalı veya motor sınanmalı.
4. Mevcut 1687-08-12 (Mohaç II) Erdel'e özgü kaynakla desteklenmiyor; fiilî Habsburg himayesi Balázsfalva (güz 1687, gün yok) / Fogaras 9 Mayıs 1688; hukuken 26 Ocak 1699. Öneri künyeye uyar: 1711-04-29.
5. Kaloşvar fiilî Romanya girişi: atlas 24 Aralık 1918, MTA ertesi gün = 23 Aralık (çıkarım). Romanya birleşme fermanı: MTA 13 Aralık der, bilinen 11 Aralık — çözülmedi.
6. 1940-44 Kuzey Erdel (Kaloşvar, Zilah, Marosvásárhely, Beszterce) Macaristan dilimi bitiş günü yok; yazılmadı.
7. Değişmez 2: 1699-01-26, 1711-04-29, 1867-06-20 yakınında kronoloji maddesi gerekir (taranmadı).
8. macaristan-habsburg künye t=1918-11-16, Kaloşvar/Zilah 1918-11-11: tek değere indirilmeli.
