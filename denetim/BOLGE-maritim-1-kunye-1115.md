# BOLGE maritim — Adım 1: Künye envanteri (15 Kasım 2026)

Dal: `umit-1115-bolge-maritim` (origin/main 8fb10bdf1 tabanı). Salt-okunur ölçüm; veri değişmedi.
Yöntem: `girdi.yukle()` (5636 nokta) → koordinat kutusu lon 95–155, lat −11,5…19 (Çinhindi anakarası hariç) = **177 yerleşim**; bunların `s:` pencerelerinde geçen **69 künye kimliği** + `__BOSLUK__` (58 pencere). Ölçüm betiği scratchpad'de (depoya girmedi).

## A. Atlasta karşılığı olan künyeler (pencereli, 66 + 3 yardımcı)
Sırayla (künye f–t / yerleşim penceresi): kedah-kadaram (0400–1281), langkasuka (0100–1400; pencere 1281'e kadar), kantoli (0454–0519), melayu-jambi (0644–1347; pencere 0644–0689), srivijaya (0683–1275; pencere 0689–1275, **yalnız 1 yerleşim: Jambi**), tondo, bali-warmadewa, medang, poni, butuan, kahuripan, kediri, singhasari, malay-sultanliklari, samudra-pasai, pagaruyung, palembang-sultanligi, sunda-pajajaran, gova-makassar, ternate/tidore-sultanligi, banda-adalari, timor-beylikleri, filipin-racaliklari, bali-kralliklari-pejeng, majapahit, bugis-kralliklari, brunei-sultanligi, malaka-sultanligi, sulu-sultanligi, demak, bali-kralliklari, magindanao-sultanligi, ace-sultanligi, banjar-sultanligi, banten-sultanligi, cohor-sultanligi, kutai, mataram-sultanligi, dogu-sumatra-sultanliklari, surakarta, yogyakarta, pontianak, portekiz-timor, sarawak-brooke, kuzey-borneo, fed-malay-devletleri, ingiliz-malaya, filipin-malolos-cumhuriyeti, amerikan-filipinleri, filipin-commonwealth, federe-olmayan-malay-devletleri, endonezya-cumhuriyeti, malaya-birligi, singapur-kolonisi, sarawak-tac-kolonisi, filipinler-cumhuriyeti, kuzey-borneo-tac-kolonisi, pasundan-devleti, papua-yeni-gine-avustralya, malezya, singapur, papua-yeni-gine, endonezya-dogu-timor, untaet, palau, pasifik-adalari-vesayet-toprak, queensland, chamorro. Dış güç künyeleri (bölgede pencereli): hollanda-dogu-hint (182 pencere), portekiz, ispanya, ingiltere, almanya, abd, avustralya, meiji-japonya, siyam (sukhothai/ayutthaya/tonburi/siyam-chakri).

## B. Maddelerde adı geçen ama yerleşimsiz künyeler (harita sahibi olamaz)
`taraflar:`da geçen ve devletler.js'te olan, bölgeye ait: tarumanagara, kalingga-holing, sailendra, janggala, tambralinga, perlak, lamuri, cebu-racaligi, ispanyol-filipinler (KAPSAM-1114: portekiz-malaka, hollanda-malaka da yerleşimsiz). `taraflar:`da olup devletler.js'te OLMAYAN tek kimlik: `birlesik-krallik` (KRONOLOJI_SINIR_HALEF_1923_2000[55,56,57] — bölgeye değil Britanya'ya ait, Britanya oturumuna bildirilir).

## C. Eksik devlet adayları (kaynak, gün hassasiyeti)  — YAZILMADI (yalnız aday)
Kaynak okunabilen: Coedès, *The Indianized States of Southeast Asia* (atlas maddeleri bu kaynağa dayanıyor; bu oturumda ham okunmadı). Aşağıdakiler atlasta künye olarak **yok** (ölçüldü: `devletler.js` id taraması) — künye eklenmesi KASA/araştırma kararıdır:
| aday | not |
|---|---|
| Tarumanagara (5. yy., B. Cava) | künye var, yerleşim yok (madde 0450/0669) |
| Kalingga/Ho-ling (6.–8. yy.) | künye var, yerleşim yok |
| Sunda Kalapa / Jayakarta (1527–1619) | Cayakarta tek şehir; Batavia 1619-05-30 pencerede |
| Perlak, Lamuri (K. Sumatra, ~1292) | künye var, yerleşim yok; 1292 Marco Polo maddesi var |
| Jayakatwang Kediri'si (1292–1293) | **atlasta künye yok**; bu yüzden Cava'da 1292-01-01→1293-01-01 `__BOSLUK__` (12 yerleşim) |
| Cebu Racalığı | künye var, yerleşim yok (filipin-racaliklari altında) |
| Pattani/Songkhla sultanlıkları, Kelantan | malay-sultanliklari altında toplu |
| Iloko/Lanao/Maranao, Sultanlık-ı Buayan | **yok**; Mindanao'da yalnız Magindanao/Sulu |
| Portugal Timor öncesi Sonbai, Wehali | timor-beylikleri altında toplu |
| Banten öncesi Pajajaran 1527–1579 | sunda-pajajaran künyesi 1527-06-22'de bitiyor, TDV Pajajaran'ın sonunu Yusuf döneminde (1570–1580) verir → bkz. adım 2 B1 |

## D. Künye ömrü aşımı (D4c ölçümü, bölge yerleşimleri)
ingiliz-malaya künye f=1826-01-01, pencere 1825-03-01 (Malaka); portekiz-timor t=1975-11-28, pencere 1975-12-07 (Dili…); filipin-racaliklari t=1571-06-24, pencere 1572-01-01 (Vigan); meiji-japonya f=1868-01-03/t=1947-05-03, pencere 1914-10-01…1947-07-18 (t aşımı, Mikronezya). **2. tur düzeltmesi:** bu satırlar benim kaba karşılaştırmamdır (künye f/t ile pencere ucu); yetkili `denetle` Değişmez 4c = 0, 4d = 0 verdi. Dolayısıyla "künye ömrü aşımı" olarak SAYILMAZ; olası nedenler: motor `kd:`/`devir_beyani` muafiyeti ya da künye alanının farklı okunması. Doğrulanmadı, ihlal listesi değildir.
**2. tur ek (kaynaklı künye değişiklikleri):** brunei-sultanligi f 1368→1405 (TDV bruney), sunda-pajajaran t 1527-06-22→1579-01-01 (TDV bentem + Ricklefs). Ayrıntı: BOLGE-maritim-7.
