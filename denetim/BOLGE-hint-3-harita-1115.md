# BOLGE hint — Adım 3: Harita uyumu (15 Kasım 2026)

Ölçüm tabanı: `origin/main` 8fb10bdf1, bu worktree (`coz-c` ile devletler_harita.js/donemler.js açıldı), UMIT. **Veri değiştirilmedi** → önce/sonra aynı.

## 1. Resmî ölçümler (`py arac/denetle.py` + `odak_olc.py`)
| Ölçüt | Sonuç |
|---|---|
| `odak_olc.py` | **ÇÖZÜLMEYEN ODAK ATFI: 0** (bütün repo; yer_id/odak_yer sorunu yok) |
| Değişmez 1 sahipsiz | ✓ 306 (beklenen 306), belgesiz 2 (tavan 2) |
| Değişmez 1b beyansız boşluk | ✓ 0 |
| Değişmez 2 (`d:`/`v:`) | ✓ 760 kırılma, **0 açık** |
| Değişmez 2s (yabancı kırılma, `s:`) | 3698 kırılma · **154 AÇIK** (tavan inf) · 871 kapsam dışı · 432 yıl-temsilî borç (bütün atlas; bölge dökümü denetle çıktısında yok → "ölçülmedi: bölge payı") |
| Değişmez 2sk | ⚠ **TAVAN AŞILDI 5927 > 5892 — bu BEN DEĞİLİM**: veri değişmedi, `origin/main`in kendi durumu (KASA'ya bildirim) |
| Değişmez 4/4c/4d/4s, 5 | ✓ 0 ihlal |
| Değişmez 8 | ölçülemedi (ana checkout'ta ölçülemez; push kapısı ayrı worktree'de yapar) |
Tam `denetle` çıktısı: bkz. rapor sonu notu (çıkış kodu aşağıda).

## 2. Bölgeye özgü çapraz ölçüm (kendi betiğim, naif — resmî denetle DEĞİL)
Hint kutusundaki 244 yerleşimin `s:` pencerelerinde 1281+ sahip değişimi: **950 kırılma**. Her biri için ±30 günde, o yeri (`yer_id`/`odak_yer`) ya da iki tarafı (`taraflar`) anan bir `olaylar*`/`kronoloji_sinir*` maddesi arandı: **417 kapsanan, 533 kapsanmayan**. Bu sayı resmî D2s'in "AÇIK"ından büyüktür çünkü (i) betiğim yalnız `OLAYLAR*` ve `KRONOLOJI_SINIR*` ad alanlarını okudu, (ii) resmî ölçüt "yıl-temsilî", "kapsam dışı" ve maskeli kovaları ayırır. Yorum: sayı bir **üst sınır/aday listesi**dir, ihlal sayısı değildir.
En çok kapsanmayan sahip değişimleri (çift → kırılma sayısı): delhi-sultanligi→babur-imparatorlugu 23, babur→sur-hanedani 23, sur→babur 23 (1540-05-17 ve 1555-07-23 için olaylar*/kronoloji_sinir*'de madde YOK; yalnız künye-içi `kronoloji:`'da var), maratha→ingiliz-hindistani 23, babur→maratha 19, sih→ingiliz-hindistani 13, afgan-durrani→__BOSLUK__ 11, racput→delhi-sultanligi 10, bengal-sultanligi→__BOSLUK__ 9, babur→avad 9, babur→afgan-durrani 9, pandya→delhi-sultanligi 8, cavnpur→delhi 8, gucerat→babur 7, golkonda→babur 7, avad→ingiliz-hindistani 7, portekiz→hollanda 6, fransa→ingiltere 6, haydarabad-nizam→ingiliz-hindistani 6.
**Eksik kırılma önerisi (madde var, `s:` kırılması yok):** tespit edilmedi (ölçülmedi).
**Fazla kırılma (madde yok):** §3 listesi.

## 3. Künye ömrü ile pencere farkları (51 satır; naif, gün düzeyi)
`s:` penceresi künye `f`/`t`'sinin dışına taşıyor. Resmî **D4c = 0** (ölçüt yıl-toleranslı olmalı); gün düzeyinde 51 fark, bölgeye ait olanlar:
- gucerat-sultanligi t=1573-01-01; 9 yerleşimde pencere t=1573-02-26 (Surat vb.) → künye t 1573-02-26'ya uzatılmalı VEYA pencere 1573-01-01'e çekilmeli (kaynak: Gucerât'ın fethi, Akbar; gün okunmadı).
- bengal-sultanligi t=1576-01-01; pencereler t=1576-07-12 (9 yerleşim; Rajmahal savaşı 12 Temmuz 1576) → künye t 1576-07-12.
- bicapur t=1686-09-22; Bangalor t=1687-01-01, Vellor/Arkot t=1687-09-21 → aşım (S3/S4 ile bağlantılı).
- afgan-durrani f=1747-10-01; Attock/Râvalpindi/Peşâver/Kâbil/Gazne/Herat pencere f=1747-06-20 (Nadir Şah'ın ölümü 20 Haziran 1747) → künye f önce çekilmeli ya da pencere 1747-10-01'e.
- afgan-durrani t=1819-01-01; Srinagar t=1819-07-05 (Keşmir'in Sih fethi 5 Temmuz 1819).
- maratha t=1818-06-03; Ecmîr t=1818-06-25 · racput t=1947-08-15; Çitor/Udeypûr/Haldighati t=1948-04-18 (Rajasthan Birliği) · bhopal f=1708-01-01, Bhopâl pencere f=1707-01-01 · ingiliz-hindistani f=1757-06-23, Kalküta f=1757-01-02 (Calcutta'nın geri alınışı 2 Ocak 1757) · fransa t=1792-09-22; Çandernagor t=1793-06-10, Pondişeri t=1793-08-23 (künye değişimi: `fransa`→`fransa-cumhuriyet` bölünmeli) · kocin t=1503-01-01; Koçin t=1503-09-01 · seylan-sinhala t=1518-01-01; Kolombo t=1518-09-01 · pandya-1 f=0601; Madurai f=0600 · Taksila/Lothal/Dholavira/Rakhigarhi (tarih öncesi).
(Ek: Hotan/Keriya cungar·yakub-beg Çin bölgesinde, Belh Orta Asya'da — bu raporun dışı.)
Bu satırların hiçbiri düzeltilmedi: künye f/t ile pencere gününden hangisinin kaynaklı olduğu bu oturumda okunamadı ve künye `f/t` değişimi paket_kunye'yi ve D2 kovalarını etkiler (KASA/EMRELİC kararı).

## 4. Boşluk (`__BOSLUK__`) pencereleri
Bütün kutuda 88 `__BOSLUK__` penceresi (çoğu Kâbil/Gazne/Peşâver/Bâmiyân, Orta Asya komşuluğu; Hint içinde: Delhi 0736–1153, Kannauc, Katmandu 0750–0879, Lahor/Amritsar/Sirhind/Çalandhar/Ludhiyana/Siyalkot/Ravalpindi 1764/65–1801-04-12 (Sih konfederasyonu dönemi), Patna, Gayâ, Mungîr, Bhâgalpûr, Gaur, Pandua, Dakka, Sonârgâon, Hûglî 1538-01-01..1540-05-17 (Şîr Şâh–Humayun geçişi), Kattak/Puri/Bâlâsor 1576-07-12..1592-01-01, Vellor/Arkot 1646..1656, Uccayn 0398..1281, Madurai 0920..1281). 1b beyansız boşluk = 0 (denetle). Boşluk doldurma merdiveni uygulanmadı (kaynak okunamadı); en dikkat çekici çekirdek boşluklar: **1764/65–1801 Pencap (Sih misl dönemi, 7 şehir)**, **1538–1540 Bengal/Bihar (10 şehir)**, **1576–1592 Orissa kıyısı (3 şehir)**. Bunların her biri için `sih-misl` / `sur-hanedani` / `orissa` benzeri künye veya abi-merkez zinciri (CLAUDE.md merdiven ⑤) Adım 1'deki eksik listesine eklenmiştir.

## 5. Kapsanmayan sahip değişimleri — tam aday listesi (naif ölçüm, 533)
Biçim: `tarih yerleşim eski_sahip->yeni_sahip`.

1281-01-01 Dakka (Dhaka) deva-samatata->delhi-sultanligi
1281-01-01 Gaur (Lakhnautî) delhi-sultanligi->delhi-sultanligi
1281-01-01 Gazne cagatay->cagatay
1281-01-01 Gvalyar (Gwalior) delhi-sultanligi->delhi-sultanligi
1281-01-01 Kannauc delhi-sultanligi->delhi-sultanligi
1281-01-01 Katmandu nepal->nepal
1281-01-01 Kâbil cagatay->cagatay
1281-01-01 Patan (Anhilvâda) vaghela->racput
1281-01-01 Patna (Azîmâbâd) nanda->delhi-sultanligi
1281-01-01 Ratanpur kalacuri-ratnapura->kalacuri-ratnapura
1281-01-01 Siyâlkot delhi-sultanligi->delhi-sultanligi
1281-01-01 Sonârgâon deva-samatata->delhi-sultanligi
1281-01-01 Srinagar (Keşmir) kesmir->kesmir
1301-01-01 Cabalpûr (Jabalpur) __BOSLUK__->gond-kralliklari
1303-08-26 Çitor (Chittorgarh) racput->delhi-sultanligi
1304-01-01 Baroda (Vadodara) racput->delhi-sultanligi
1304-01-01 Broaç (Bharuch) racput->delhi-sultanligi
1304-01-01 Diu racput->delhi-sultanligi
1304-01-01 Kanbâyet (Khambhat) racput->delhi-sultanligi
1304-01-01 Patan (Anhilvâda) racput->delhi-sultanligi
1304-01-01 Somnât (Sûmenât) racput->delhi-sultanligi
1304-01-01 Sûrat racput->delhi-sultanligi
1304-01-01 Çampâner racput->delhi-sultanligi
1311-01-01 Arkot (Arcot) pandya->delhi-sultanligi
1311-01-01 Cinci (Gingee) pandya->delhi-sultanligi
1311-01-01 Madurai pandya->delhi-sultanligi
1311-01-01 Nagapatnam pandya->delhi-sultanligi
1311-01-01 Tancûr (Thanjavur) pandya->delhi-sultanligi
1311-01-01 Tranquebar (Tharangambadi) pandya->delhi-sultanligi
1311-01-01 Trichinopoly (Tiruchirappalli) pandya->delhi-sultanligi
1311-01-01 Vellor (Vellore) pandya->delhi-sultanligi
1311-01-01 Çitor (Chittorgarh) delhi-sultanligi->racput
1322-01-01 Bîdar kakatiya->delhi-sultanligi
1335-01-01 Madurai delhi-sultanligi->madurai-sultanligi
1335-01-01 Nagapatnam delhi-sultanligi->madurai-sultanligi
1335-01-01 Tancûr (Thanjavur) delhi-sultanligi->madurai-sultanligi
1335-01-01 Tranquebar (Tharangambadi) delhi-sultanligi->madurai-sultanligi
1335-01-01 Trichinopoly (Tiruchirappalli) delhi-sultanligi->madurai-sultanligi
1335-12-01 Herat ilhanli->kert
1335-12-01 Hâş ilhanli->muzafferi
1337-09-09 Serahs ilhanli->serbedariler
1337-09-09 Zerenc (Sîstan) ilhanli->serbedariler
1347-01-01 Hotan cagatay->mogulistan
1347-01-01 Keriya (Yutian) cagatay->mogulistan
1361-01-01 Varangal (Warangal) nayak-devletleri->behmeni
1365-01-01 Ecmîr (Ajmer) delhi-sultanligi->racput
1370-04-09 Belh cagatay->timurlu
1370-04-09 Gazne cagatay->timurlu
1370-04-09 Kâbil cagatay->timurlu
1378-01-01 Arkot (Arcot) delhi-sultanligi->vijayanagara
1378-01-01 Cinci (Gingee) delhi-sultanligi->vijayanagara
1378-01-01 Madurai madurai-sultanligi->vijayanagara
1378-01-01 Nagapatnam madurai-sultanligi->vijayanagara
1378-01-01 Tancûr (Thanjavur) madurai-sultanligi->vijayanagara
1378-01-01 Tranquebar (Tharangambadi) madurai-sultanligi->vijayanagara
1378-01-01 Trichinopoly (Tiruchirappalli) madurai-sultanligi->vijayanagara
1378-01-01 Vellor (Vellore) delhi-sultanligi->vijayanagara
1381-01-01 Serahs serbedariler->timurlu
1381-01-01 Zerenc (Sîstan) serbedariler->timurlu
1392-01-01 Mandu (Mândû) delhi-sultanligi->malva-sultanligi
1392-01-01 Uccayn (Ujjain) delhi-sultanligi->malva-sultanligi
1393-01-01 Hâş muzafferi->timurlu
1393-01-01 Kançipuram (Kanchipuram) __BOSLUK__->vijayanagara
1398-01-01 Gvalyar (Gwalior) delhi-sultanligi->racput
1398-12-17 Delhi delhi-sultanligi->timurlu
1399-01-01 Delhi timurlu->delhi-sultanligi
1452-01-01 Hâş timurlu->karakoyunlu
1459-01-01 Çatgam (Chittagong) bengal-sultanligi->arakan
1469-01-01 Hâş karakoyunlu->akkoyunlu
1469-01-01 Kandy seylan-sinhala->kandy
1472-01-01 Cûnâgadh racput->gucerat-sultanligi
1479-01-01 Benâres (Vârânasî) cavnpur-sultanligi->delhi-sultanligi
1479-01-01 Cavnpur (Jaunpur) cavnpur-sultanligi->delhi-sultanligi
1479-01-01 Feyzâbâd (Ayodhya) cavnpur-sultanligi->delhi-sultanligi
1479-01-01 Gorakhpûr cavnpur-sultanligi->delhi-sultanligi
1479-01-01 Ilâhâbâd (Allahabad) cavnpur-sultanligi->delhi-sultanligi
1479-01-01 Kannauc cavnpur-sultanligi->delhi-sultanligi
1479-01-01 Kanpûr cavnpur-sultanligi->delhi-sultanligi
1479-01-01 Leknev (Lucknow) cavnpur-sultanligi->delhi-sultanligi
1484-01-01 Çampâner delhi-sultanligi->gucerat-sultanligi
1490-01-01 Bîcâpur (Bijapur) behmeni->bicapur
1490-01-01 Elicpûr (Achalpur) behmeni->berar
1490-01-01 Goa behmeni->bicapur
1490-01-01 Kolhapûr behmeni->bicapur
1490-01-01 Kurnûl (Kurnool) behmeni->vijayanagara
1490-01-01 Nâsik behmeni->ahmednagar
1490-01-01 Pûne (Poona) behmeni->ahmednagar
1490-01-01 Raycur (Raichur) behmeni->bicapur
1490-01-01 Raygad behmeni->ahmednagar
1490-01-01 Satâra behmeni->bicapur
1490-01-01 Çaul (Chaul) behmeni->ahmednagar
1497-01-01 Gayâ delhi-sultanligi->bengal-sultanligi
1497-01-01 Patna (Azîmâbâd) delhi-sultanligi->bengal-sultanligi
1499-01-01 Devagiri (Devletâbâd) behmeni->ahmednagar
1502-01-01 Kolam (Quilon) travankur->portekiz
1503-01-01 Hâş akkoyunlu->safevi
1503-09-01 Koçin (Kochi) kocin->portekiz
1504-10-01 Gazne timurlu->__BOSLUK__
1504-10-01 Kâbil timurlu->__BOSLUK__
1504-10-01 Peşâver delhi-sultanligi->__BOSLUK__
1505-01-01 Kannûr (Cannanore) kalikut->portekiz
1506-01-01 Belh timurlu->buhara
1507-01-01 Herat timurlu->buhara
1509-01-01 Belh buhara->safevi
1509-01-01 Cinci (Gingee) vijayanagara->nayak-devletleri
1510-11-25 Goa bicapur->portekiz-hindistani-goa
1510-12-02 Herat buhara->safevi
1510-12-02 Serahs buhara->safevi
1510-12-02 Zerenc (Sîstan) buhara->safevi
1512-01-01 Golkonda behmeni->golkonda
1512-01-01 Masulipatnam behmeni->golkonda
1512-01-01 Râcahmundry behmeni->golkonda
1512-01-01 Varangal (Warangal) behmeni->golkonda
1512-01-01 Vişâkapatnam behmeni->golkonda
1514-01-01 Hotan mogulistan->yarkent-hanligi
1514-01-01 Keriya (Yutian) mogulistan->yarkent-hanligi
1514-08-23 Belh safevi->buhara
1518-01-01 Gvalyar (Gwalior) racput->delhi-sultanligi
1518-09-01 Kolombo seylan-sinhala->portekiz
1520-05-19 Raycur (Raichur) bicapur->vijayanagara
1526-04-21 Agra delhi-sultanligi->babur-imparatorlugu
1526-04-21 Benâres (Vârânasî) delhi-sultanligi->babur-imparatorlugu
1526-04-21 Cavnpur (Jaunpur) delhi-sultanligi->babur-imparatorlugu
1526-04-21 Câlandhar (Jalandhar) delhi-sultanligi->babur-imparatorlugu
1526-04-21 Delhi delhi-sultanligi->babur-imparatorlugu
1526-04-21 Eski Kandehar (Şehr-i Köhne) __BOSLUK__->babur-imparatorlugu
1526-04-21 Etâve (Etawah) delhi-sultanligi->babur-imparatorlugu
1526-04-21 Feyzâbâd (Ayodhya) delhi-sultanligi->babur-imparatorlugu
1526-04-21 Gazne __BOSLUK__->babur-imparatorlugu
1526-04-21 Gorakhpûr delhi-sultanligi->babur-imparatorlugu
1526-04-21 Gvalyar (Gwalior) delhi-sultanligi->babur-imparatorlugu
1526-04-21 Hisâr-ı Fîrûze delhi-sultanligi->babur-imparatorlugu
1526-04-21 Ilâhâbâd (Allahabad) delhi-sultanligi->babur-imparatorlugu
1526-04-21 Kannauc delhi-sultanligi->babur-imparatorlugu
1526-04-21 Kanpûr delhi-sultanligi->babur-imparatorlugu
1526-04-21 Koil (Aligarh) delhi-sultanligi->babur-imparatorlugu
1526-04-21 Kâbil __BOSLUK__->babur-imparatorlugu
1526-04-21 Lahor delhi-sultanligi->babur-imparatorlugu
1526-04-21 Leknev (Lucknow) delhi-sultanligi->babur-imparatorlugu
1526-04-21 Ludhiyana delhi-sultanligi->babur-imparatorlugu
1526-04-21 Mathura delhi-sultanligi->babur-imparatorlugu
1526-04-21 Mîrat (Meerut) delhi-sultanligi->babur-imparatorlugu
1526-04-21 Peşâver __BOSLUK__->babur-imparatorlugu
1526-04-21 Pânipat delhi-sultanligi->babur-imparatorlugu
1526-04-21 Râvalpindi delhi-sultanligi->babur-imparatorlugu
1526-04-21 Sirhind delhi-sultanligi->babur-imparatorlugu
1526-04-21 Siyâlkot delhi-sultanligi->babur-imparatorlugu
1529-01-01 Madurai vijayanagara->nayak-devletleri
1529-01-01 Trichinopoly (Tiruchirappalli) vijayanagara->nayak-devletleri
1531-01-01 Mandu (Mândû) malva-sultanligi->gucerat-sultanligi
1532-01-01 Tancûr (Thanjavur) vijayanagara->nayak-devletleri
1532-01-01 Tranquebar (Tharangambadi) vijayanagara->nayak-devletleri
1534-12-23 Bombay gucerat-sultanligi->portekiz
1535-01-01 Mandu (Mândû) gucerat-sultanligi->malva-sultanligi
1535-03-08 Çitor (Chittorgarh) racput->gucerat-sultanligi
1535-10-25 Diu gucerat-sultanligi->portekiz-hindistani-goa
1537-01-01 Çitor (Chittorgarh) gucerat-sultanligi->racput
1538-01-01 Bhâgalpûr bengal-sultanligi->__BOSLUK__
1538-01-01 Dakka (Dhaka) bengal-sultanligi->__BOSLUK__
1538-01-01 Gaur (Lakhnautî) bengal-sultanligi->__BOSLUK__
1538-01-01 Gayâ bengal-sultanligi->__BOSLUK__
1538-01-01 Hûglî (Hooghly) bengal-sultanligi->__BOSLUK__
1538-01-01 Mungîr (Monghyr) bengal-sultanligi->__BOSLUK__
1538-01-01 Pandua (Hazret Pandua) bengal-sultanligi->__BOSLUK__
1538-01-01 Patna (Azîmâbâd) bengal-sultanligi->__BOSLUK__
1538-01-01 Sonârgâon bengal-sultanligi->__BOSLUK__
1540-05-17 Agra babur-imparatorlugu->sur-hanedani
1540-05-17 Benâres (Vârânasî) babur-imparatorlugu->sur-hanedani
1540-05-17 Bhâgalpûr __BOSLUK__->sur-hanedani
1540-05-17 Cavnpur (Jaunpur) babur-imparatorlugu->sur-hanedani
1540-05-17 Câlandhar (Jalandhar) babur-imparatorlugu->sur-hanedani
1540-05-17 Dakka (Dhaka) __BOSLUK__->sur-hanedani
1540-05-17 Delhi babur-imparatorlugu->sur-hanedani
1540-05-17 Etâve (Etawah) babur-imparatorlugu->sur-hanedani
1540-05-17 Feyzâbâd (Ayodhya) babur-imparatorlugu->sur-hanedani
1540-05-17 Gaur (Lakhnautî) __BOSLUK__->sur-hanedani
1540-05-17 Gayâ __BOSLUK__->sur-hanedani
1540-05-17 Gorakhpûr babur-imparatorlugu->sur-hanedani
1540-05-17 Gvalyar (Gwalior) babur-imparatorlugu->sur-hanedani
1540-05-17 Hisâr-ı Fîrûze babur-imparatorlugu->sur-hanedani
1540-05-17 Hûglî (Hooghly) __BOSLUK__->sur-hanedani
1540-05-17 Ilâhâbâd (Allahabad) babur-imparatorlugu->sur-hanedani
1540-05-17 Kannauc babur-imparatorlugu->sur-hanedani
1540-05-17 Kanpûr babur-imparatorlugu->sur-hanedani
1540-05-17 Koil (Aligarh) babur-imparatorlugu->sur-hanedani
1540-05-17 Lahor babur-imparatorlugu->sur-hanedani
1540-05-17 Leknev (Lucknow) babur-imparatorlugu->sur-hanedani
1540-05-17 Ludhiyana babur-imparatorlugu->sur-hanedani
1540-05-17 Mathura babur-imparatorlugu->sur-hanedani
1540-05-17 Mungîr (Monghyr) __BOSLUK__->sur-hanedani
1540-05-17 Mîrat (Meerut) babur-imparatorlugu->sur-hanedani
1540-05-17 Pandua (Hazret Pandua) __BOSLUK__->sur-hanedani
1540-05-17 Patna (Azîmâbâd) __BOSLUK__->sur-hanedani
1540-05-17 Pânipat babur-imparatorlugu->sur-hanedani
1540-05-17 Râvalpindi babur-imparatorlugu->sur-hanedani
1540-05-17 Sirhind babur-imparatorlugu->sur-hanedani
1540-05-17 Siyâlkot babur-imparatorlugu->sur-hanedani
1540-05-17 Sonârgâon __BOSLUK__->sur-hanedani
1554-01-01 Nagapatnam vijayanagara->portekiz
1555-07-23 Agra sur-hanedani->babur-imparatorlugu
1555-07-23 Benâres (Vârânasî) sur-hanedani->babur-imparatorlugu
1555-07-23 Cavnpur (Jaunpur) sur-hanedani->babur-imparatorlugu
1555-07-23 Câlandhar (Jalandhar) sur-hanedani->babur-imparatorlugu
1555-07-23 Delhi sur-hanedani->babur-imparatorlugu
1555-07-23 Etâve (Etawah) sur-hanedani->babur-imparatorlugu
1555-07-23 Feyzâbâd (Ayodhya) sur-hanedani->babur-imparatorlugu
1555-07-23 Gorakhpûr sur-hanedani->babur-imparatorlugu
1555-07-23 Gvalyar (Gwalior) sur-hanedani->babur-imparatorlugu
1555-07-23 Hisâr-ı Fîrûze sur-hanedani->babur-imparatorlugu
1555-07-23 Ilâhâbâd (Allahabad) sur-hanedani->babur-imparatorlugu
1555-07-23 Kannauc sur-hanedani->babur-imparatorlugu
1555-07-23 Kanpûr sur-hanedani->babur-imparatorlugu
1555-07-23 Koil (Aligarh) sur-hanedani->babur-imparatorlugu
1555-07-23 Lahor sur-hanedani->babur-imparatorlugu
1555-07-23 Leknev (Lucknow) sur-hanedani->babur-imparatorlugu
1555-07-23 Ludhiyana sur-hanedani->babur-imparatorlugu
1555-07-23 Mathura sur-hanedani->babur-imparatorlugu
1555-07-23 Mîrat (Meerut) sur-hanedani->babur-imparatorlugu
1555-07-23 Râvalpindi sur-hanedani->babur-imparatorlugu
1555-07-23 Sirhind sur-hanedani->babur-imparatorlugu
1555-07-23 Siyâlkot sur-hanedani->babur-imparatorlugu
1556-11-05 Pânipat sur-hanedani->babur-imparatorlugu
1557-01-01 Multan sind->babur-imparatorlugu
1559-01-01 Ecmîr (Ajmer) racput->babur-imparatorlugu
1561-03-29 Mandu (Mândû) malva-sultanligi->babur-imparatorlugu
1561-03-29 Uccayn (Ujjain) malva-sultanligi->babur-imparatorlugu
1568-02-23 Çitor (Chittorgarh) racput->babur-imparatorlugu
1573-02-26 Baroda (Vadodara) gucerat-sultanligi->babur-imparatorlugu
1573-02-26 Broaç (Bharuch) gucerat-sultanligi->babur-imparatorlugu
1573-02-26 Cûnâgadh gucerat-sultanligi->babur-imparatorlugu
1573-02-26 Kanbâyet (Khambhat) gucerat-sultanligi->babur-imparatorlugu
1573-02-26 Somnât (Sûmenât) gucerat-sultanligi->babur-imparatorlugu
1573-02-26 Sûrat gucerat-sultanligi->babur-imparatorlugu
1573-02-26 Çampâner gucerat-sultanligi->babur-imparatorlugu
1574-01-01 Elicpûr (Achalpur) berar->ahmednagar
1574-08-03 Gayâ bengal-sultanligi->babur-imparatorlugu
1574-08-03 Patna (Azîmâbâd) bengal-sultanligi->babur-imparatorlugu
1576-01-01 Nadia (Navadvipa/Nabadwip) bengal-sultanligi->babur-imparatorlugu
1580-01-01 Hûglî (Hooghly) babur-imparatorlugu->portekiz
1586-10-01 Cammû (Jammu) kesmir->babur-imparatorlugu
1586-10-01 Srinagar (Keşmir) kesmir->babur-imparatorlugu
1592-01-01 Bâlâsor (Balasore) __BOSLUK__->babur-imparatorlugu
1592-01-01 Kattak (Cuttack) __BOSLUK__->babur-imparatorlugu
1592-01-01 Puri __BOSLUK__->babur-imparatorlugu
1592-01-01 Tatta (Thatta) sind->babur-imparatorlugu
1595-01-01 Eski Kandehar (Şehr-i Köhne) safevi->babur-imparatorlugu
1596-01-01 Elicpûr (Achalpur) ahmednagar->babur-imparatorlugu
1600-08-28 Ahmednagar ahmednagar->babur-imparatorlugu
1610-01-01 Meysûr (Mysore) vijayanagara->meysur
1610-01-01 Seringapatam (Şrirangapatnam) vijayanagara->meysur
1615-02-05 Çitor (Chittorgarh) babur-imparatorlugu->racput
1619-01-01 Bîdar bidar->bicapur
1619-01-01 Gülberge (Gulbarga) bidar->bicapur
1619-02-01 Yafna (Jaffna) yafna->portekiz
1620-11-19 Tranquebar (Tharangambadi) nayak-devletleri->danimarka
1622-06-22 Eski Kandehar (Şehr-i Köhne) babur-imparatorlugu->safevi
1632-06-24 Hûglî (Hooghly) portekiz->babur-imparatorlugu
1633-06-28 Devagiri (Devletâbâd) ahmednagar->babur-imparatorlugu
1633-06-28 Evrengâbâd ahmednagar->babur-imparatorlugu
1636-01-01 Nâsik ahmednagar->babur-imparatorlugu
1636-01-01 Pûne (Poona) ahmednagar->bicapur
1636-01-01 Raygad ahmednagar->bicapur
1638-01-01 Eski Kandehar (Şehr-i Köhne) safevi->babur-imparatorlugu
1646-01-01 Arkot (Arcot) vijayanagara->__BOSLUK__
1646-01-01 Kançipuram (Kanchipuram) vijayanagara->golkonda
1646-01-01 Vellor (Vellore) vijayanagara->__BOSLUK__
1649-01-01 Cinci (Gingee) nayak-devletleri->bicapur
1649-02-22 Eski Kandehar (Şehr-i Köhne) babur-imparatorlugu->safevi
1656-01-01 Arkot (Arcot) __BOSLUK__->bicapur
1656-01-01 Vellor (Vellore) __BOSLUK__->bicapur
1656-05-12 Kolombo portekiz->hollanda
1657-03-29 Bîdar bicapur->babur-imparatorlugu
1658-01-01 Nagapatnam portekiz->hollanda
1658-06-21 Yafna (Jaffna) portekiz->hollanda
1661-12-08 Kolam (Quilon) portekiz->hollanda
1663-01-07 Koçin (Kochi) portekiz->hollanda
1663-02-15 Kannûr (Cannanore) portekiz->hollanda
1665-02-18 Bombay portekiz->ingiltere
1666-01-27 Çatgam (Chittagong) arakan->babur-imparatorlugu
1674-06-06 Pûne (Poona) bicapur->maratha
1674-06-06 Raygad bicapur->maratha
1674-06-06 Satâra bicapur->maratha
1676-01-01 Tancûr (Thanjavur) nayak-devletleri->tancur-maratha
1677-05-01 Cinci (Gingee) bicapur->maratha
1679-01-01 Codhpûr (Jodhpur) racput->babur-imparatorlugu
1687-01-01 Bangalor bicapur->meysur
1687-09-21 Arkot (Arcot) bicapur->babur-imparatorlugu
1687-09-21 Golkonda golkonda->babur-imparatorlugu
1687-09-21 Haydarâbâd (Dekken) golkonda->babur-imparatorlugu
1687-09-21 Kançipuram (Kanchipuram) golkonda->babur-imparatorlugu
1687-09-21 Masulipatnam golkonda->babur-imparatorlugu
1687-09-21 Râcahmundry golkonda->babur-imparatorlugu
1687-09-21 Varangal (Warangal) golkonda->babur-imparatorlugu
1687-09-21 Vellor (Vellore) bicapur->babur-imparatorlugu
1687-09-21 Vişâkapatnam golkonda->babur-imparatorlugu
1689-11-03 Raygad maratha->babur-imparatorlugu
1690-01-01 Kançipuram (Kanchipuram) babur-imparatorlugu->karnatik
1693-09-06 Pondişeri fransa->hollanda
1698-01-08 Cinci (Gingee) maratha->babur-imparatorlugu
1699-09-01 Pondişeri hollanda->fransa
1701-01-01 Tatta (Thatta) babur-imparatorlugu->sind
1701-01-01 Şikârpûr babur-imparatorlugu->sind
1705-01-01 Hotan yarkent-hanligi->cungar
1705-01-01 Keriya (Yutian) yarkent-hanligi->cungar
1707-03-03 Codhpûr (Jodhpur) babur-imparatorlugu->racput
1709-04-21 Eski Kandehar (Şehr-i Köhne) safevi->galzay
1710-01-01 Kolhapûr maratha->kolhapur
1714-01-01 Arkot (Arcot) babur-imparatorlugu->karnatik
1714-01-01 Vellor (Vellore) babur-imparatorlugu->karnatik
1720-01-01 Gyantse tibet-ganden-phodrang->qing-hanedani
1720-01-01 Şigatse tibet-ganden-phodrang->qing-hanedani
1720-09-24 Sakya Manastırı (Sakya) tibet-ganden-phodrang->qing-hanedani
1721-01-01 Baroda (Vadodara) babur-imparatorlugu->baroda
1722-01-01 Benâres (Vârânasî) babur-imparatorlugu->avad
1722-01-01 Cavnpur (Jaunpur) babur-imparatorlugu->avad
1722-01-01 Etâve (Etawah) babur-imparatorlugu->avad
1722-01-01 Feyzâbâd (Ayodhya) babur-imparatorlugu->avad
1722-01-01 Gorakhpûr babur-imparatorlugu->avad
1722-01-01 Kannauc babur-imparatorlugu->avad
1722-01-01 Kanpûr babur-imparatorlugu->avad
1722-01-01 Leknev (Lucknow) babur-imparatorlugu->avad
1732-01-01 Mandu (Mândû) babur-imparatorlugu->maratha
1732-01-01 Uccayn (Ujjain) babur-imparatorlugu->maratha
1732-07-29 İndor (Indore) babur-imparatorlugu->indor
1733-01-01 Raygad babur-imparatorlugu->maratha
1736-01-01 Madurai nayak-devletleri->karnatik
1736-01-01 Trichinopoly (Tiruchirappalli) nayak-devletleri->karnatik
1738-01-01 Attock babur-imparatorlugu->afsar
1738-01-01 Gazne babur-imparatorlugu->afsar
1738-01-01 Kâbil babur-imparatorlugu->afsar
1738-01-01 Peşâver babur-imparatorlugu->afsar
1738-01-01 Râvalpindi babur-imparatorlugu->afsar
1739-01-01 Dera Gazi Han __BOSLUK__->afsar
1740-01-01 Çaul (Chaul) portekiz->maratha
1743-01-01 Nagpûr gond-kralliklari->maratha
1746-09-21 Madras (Chennai) ingiltere->fransa
1747-06-20 Attock afsar->afgan-durrani
1747-06-20 Gazne afsar->afgan-durrani
1747-06-20 Herat afsar->afgan-durrani
1747-06-20 Kâbil afsar->afgan-durrani
1747-06-20 Peşâver afsar->afgan-durrani
1747-06-20 Râvalpindi afsar->afgan-durrani
1747-10-01 Dera Gazi Han afsar->afgan-durrani
1747-10-01 Dera İsmail Han afsar->afgan-durrani
1748-01-01 Cûnâgadh babur-imparatorlugu->cunagadh
1748-01-01 Somnât (Sûmenât) babur-imparatorlugu->cunagadh
1749-08-21 Madras (Chennai) fransa->ingiltere
1750-01-01 Raipur kalacuri-ratnapura->maratha
1750-09-11 Cinci (Gingee) babur-imparatorlugu->fransa
1751-01-01 Hâş afsar->zend
1751-01-01 Zerenc (Sîstan) afsar->zend
1751-05-17 Bâlâsor (Balasore) babur-imparatorlugu->maratha
1751-05-17 Kattak (Cuttack) babur-imparatorlugu->maratha
1751-05-17 Puri babur-imparatorlugu->maratha
1752-01-01 Cammû (Jammu) babur-imparatorlugu->afgan-durrani
1752-01-01 Srinagar (Keşmir) babur-imparatorlugu->afgan-durrani
1752-04-01 Amritsar babur-imparatorlugu->afgan-durrani
1752-04-01 Câlandhar (Jalandhar) babur-imparatorlugu->afgan-durrani
1752-04-01 Lahor babur-imparatorlugu->afgan-durrani
1752-04-01 Ludhiyana babur-imparatorlugu->afgan-durrani
1752-04-01 Multan babur-imparatorlugu->afgan-durrani
1752-04-01 Sirhind babur-imparatorlugu->afgan-durrani
1752-04-01 Siyâlkot babur-imparatorlugu->afgan-durrani
1753-04-01 Ahmedâbâd babur-imparatorlugu->maratha
1753-04-01 Kanbâyet (Khambhat) babur-imparatorlugu->maratha
1753-04-01 Patan (Anhilvâda) babur-imparatorlugu->maratha
1753-04-01 Çampâner babur-imparatorlugu->maratha
1756-01-01 Ecmîr (Ajmer) babur-imparatorlugu->maratha
1756-06-20 Kalküta ingiltere->bengal-nevabligi
1757-01-02 Kalküta bengal-nevabligi->ingiliz-hindistani
1757-03-23 Çandernagor fransa->ingiltere
1759-01-01 Ahmednagar babur-imparatorlugu->maratha
1759-01-01 Hotan cungar->qing-hanedani
1759-01-01 Keriya (Yutian) cungar->qing-hanedani
1759-03-04 Sûrat babur-imparatorlugu->ingiliz-hindistani
1759-04-08 Masulipatnam haydarabad-nizam->ingiliz-hindistani
1760-01-01 Bîcâpur (Bijapur) haydarabad-nizam->maratha
1760-01-01 Nâsik babur-imparatorlugu->maratha
1760-01-01 Vellor (Vellore) karnatik->ingiliz-hindistani
1761-01-14 Agra babur-imparatorlugu->maratha
1761-01-16 Pondişeri fransa->ingiltere
1761-04-05 Cinci (Gingee) fransa->ingiliz-hindistani
1763-01-01 Kançipuram (Kanchipuram) karnatik->ingiliz-hindistani
1764-01-14 Sirhind afgan-durrani->__BOSLUK__
1765-01-01 Pondişeri ingiltere->fransa
1765-04-16 Amritsar afgan-durrani->__BOSLUK__
1765-04-16 Câlandhar (Jalandhar) afgan-durrani->__BOSLUK__
1765-04-16 Lahor afgan-durrani->__BOSLUK__
1765-04-16 Ludhiyana afgan-durrani->__BOSLUK__
1765-04-16 Râvalpindi afgan-durrani->__BOSLUK__
1765-04-16 Siyâlkot afgan-durrani->__BOSLUK__
1765-08-12 Ilâhâbâd (Allahabad) babur-imparatorlugu->avad
1766-01-01 Kalikut (Kozhikode) kalikut->meysur
1766-11-12 Râcahmundry haydarabad-nizam->ingiliz-hindistani
1766-11-12 Vişâkapatnam haydarabad-nizam->ingiliz-hindistani
1770-01-01 Mathura babur-imparatorlugu->maratha
1771-01-01 Kannûr (Cannanore) hollanda->meysur
1772-11-18 Broaç (Bharuch) babur-imparatorlugu->ingiliz-hindistani
1778-10-18 Pondişeri fransa->ingiltere
1781-01-01 Cabalpûr (Jabalpur) gond-kralliklari->maratha
1781-11-12 Nagapatnam hollanda->ingiliz-hindistani
1783-07-21 Gvalyar (Gwalior) babur-imparatorlugu->gvalyar
1784-01-01 Koil (Aligarh) babur-imparatorlugu->maratha
1785-01-01 Pondişeri ingiltere->fransa
1788-01-01 Delhi babur-imparatorlugu->maratha
1788-01-01 Mîrat (Meerut) babur-imparatorlugu->maratha
1788-01-01 Pânipat babur-imparatorlugu->maratha
1790-12-15 Kannûr (Cannanore) meysur->ingiliz-hindistani
1792-03-18 Kalikut (Kozhikode) meysur->ingiliz-hindistani
1793-06-10 Çandernagor fransa->ingiltere
1793-08-23 Pondişeri fransa->ingiltere
1794-01-01 Hâş zend->kacar
1794-01-01 Serahs afsar->kacar
1794-01-01 Zerenc (Sîstan) zend->kacar
1795-10-20 Koçin (Kochi) hollanda->ingiliz-hindistani
1796-02-16 Kolombo hollanda->ingiltere
1796-02-16 Yafna (Jaffna) hollanda->ingiltere
1797-01-01 Sambalpur __BOSLUK__->maratha
1799-05-04 Bangalor meysur->meysur-racaligi
1799-05-04 Mangalor meysur->ingiliz-hindistani
1799-05-04 Meysûr (Mysore) meysur->meysur-racaligi
1799-05-04 Seringapatam (Şrirangapatnam) meysur->meysur-racaligi
1799-10-25 Tancûr (Thanjavur) tancur-maratha->ingiliz-hindistani
1800-10-12 Kurnûl (Kurnool) haydarabad-nizam->ingiliz-hindistani
1800-10-12 Vijayanagara (Hampi) haydarabad-nizam->ingiliz-hindistani
1801-04-12 Amritsar __BOSLUK__->sih-imparatorlugu
1801-04-12 Câlandhar (Jalandhar) __BOSLUK__->sih-imparatorlugu
1801-04-12 Lahor __BOSLUK__->sih-imparatorlugu
1801-04-12 Ludhiyana __BOSLUK__->sih-imparatorlugu
1801-04-12 Râvalpindi __BOSLUK__->sih-imparatorlugu
1801-04-12 Sirhind __BOSLUK__->sih-imparatorlugu
1801-04-12 Siyâlkot __BOSLUK__->sih-imparatorlugu
1801-07-31 Arkot (Arcot) karnatik->ingiliz-hindistani
1801-07-31 Madurai karnatik->ingiliz-hindistani
1801-07-31 Trichinopoly (Tiruchirappalli) karnatik->ingiliz-hindistani
1801-11-10 Etâve (Etawah) avad->ingiliz-hindistani
1801-11-10 Gorakhpûr avad->ingiliz-hindistani
1801-11-10 Ilâhâbâd (Allahabad) avad->ingiliz-hindistani
1801-11-10 Kannauc avad->ingiliz-hindistani
1801-11-10 Kanpûr avad->ingiliz-hindistani
1803-08-12 Ahmednagar maratha->ingiliz-hindistani
1803-09-04 Koil (Aligarh) maratha->ingiliz-hindistani
1803-09-11 Delhi maratha->ingiliz-hindistani
1803-09-11 Hisâr-ı Fîrûze babur-imparatorlugu->ingiliz-hindistani
1803-09-11 Mîrat (Meerut) maratha->ingiliz-hindistani
1803-09-11 Pânipat maratha->ingiliz-hindistani
1803-10-14 Bâlâsor (Balasore) maratha->ingiliz-hindistani
1803-10-14 Kattak (Cuttack) maratha->ingiliz-hindistani
1803-10-14 Puri maratha->ingiliz-hindistani
1803-10-17 Agra maratha->ingiliz-hindistani
1803-10-17 Mathura maratha->ingiliz-hindistani
1803-12-30 Kanbâyet (Khambhat) maratha->ingiliz-hindistani
1808-01-01 Cammû (Jammu) afgan-durrani->sih-imparatorlugu
1809-04-25 Ludhiyana sih-imparatorlugu->ingiliz-hindistani
1813-07-13 Attock afgan-durrani->sih-imparatorlugu
1815-03-02 Kandy kandy->ingiltere
1816-12-04 Pondişeri ingiltere->fransa-cumhuriyet
1816-12-04 Çandernagor ingiltere->fransa-cumhuriyet
1817-01-01 Gauhâtî (Guwahati) ahom->konbaung
1817-01-01 Sambalpur maratha->__BOSLUK__
1817-11-17 Pûne (Poona) maratha->ingiliz-hindistani
1818-01-01 Ahmedâbâd maratha->ingiliz-hindistani
1818-01-01 Bîcâpur (Bijapur) maratha->ingiliz-hindistani
1818-01-01 Cabalpûr (Jabalpur) maratha->ingiliz-hindistani
1818-01-01 Nâsik maratha->ingiliz-hindistani
1818-01-01 Patan (Anhilvâda) maratha->ingiliz-hindistani
1818-01-01 Raipur maratha->nagpur-bhonsle
1818-01-01 Ratanpur maratha->nagpur-bhonsle
1818-01-01 Çampâner maratha->ingiliz-hindistani
1818-01-01 Çaul (Chaul) maratha->ingiliz-hindistani
1818-05-09 Raygad maratha->ingiliz-hindistani
1818-06-02 Multan afgan-durrani->sih-imparatorlugu
1818-06-03 Mandu (Mândû) maratha->ingiliz-hindistani
1818-06-03 Nagpûr maratha->nagpur-bhonsle
1818-06-03 Satâra maratha->ingiliz-hindistani
1818-06-03 Uccayn (Ujjain) maratha->gvalyar
1818-06-25 Ecmîr (Ajmer) maratha->ingiliz-hindistani
1819-01-01 Belh afgan-durrani->__BOSLUK__
1819-01-01 Dera Gazi Han afgan-durrani->sih-imparatorlugu
1819-01-01 Dera İsmail Han afgan-durrani->__BOSLUK__
1819-01-01 Gazne afgan-durrani->afganistan
1819-01-01 Herat afgan-durrani->__BOSLUK__
1819-01-01 Kandehar afgan-durrani->afganistan
1819-01-01 Kâbil afgan-durrani->afganistan
1819-01-01 Peşâver afgan-durrani->__BOSLUK__
1819-07-05 Srinagar (Keşmir) afgan-durrani->sih-imparatorlugu
1821-01-01 Dera İsmail Han __BOSLUK__->sih-imparatorlugu
1834-01-01 Leh (Ladakh) ladak->sih-imparatorlugu
1834-05-06 Peşâver __BOSLUK__->sih-imparatorlugu
1839-02-03 Karaçi sind->ingiliz-hindistani
1839-07-23 Gazne afganistan->ingiltere
1839-08-07 Kâbil afganistan->ingiltere
1841-01-01 Belh buhara->afganistan
1842-01-06 Kâbil ingiltere->afganistan
1843-02-17 Haydarâbâd (Sind) sind->ingiliz-hindistani
1843-02-17 Tatta (Thatta) sind->ingiliz-hindistani
1843-02-17 Şikârpûr sind->ingiliz-hindistani
1845-02-22 Tranquebar (Tharangambadi) danimarka->ingiliz-hindistani
1846-03-09 Câlandhar (Jalandhar) sih-imparatorlugu->ingiliz-hindistani
1846-03-16 Cammû (Jammu) sih-imparatorlugu->cammu-kesmir
1846-03-16 Leh (Ladakh) sih-imparatorlugu->cammu-kesmir
1846-03-16 Srinagar (Keşmir) sih-imparatorlugu->cammu-kesmir
1849-01-01 Sambalpur __BOSLUK__->ingiliz-hindistani
1849-03-29 Amritsar sih-imparatorlugu->ingiliz-hindistani
1849-03-29 Attock sih-imparatorlugu->ingiliz-hindistani
1849-03-29 Bannu (Edwardesabad) sih-imparatorlugu->ingiliz-hindistani
1849-03-29 Dera Gazi Han sih-imparatorlugu->ingiliz-hindistani
1849-03-29 Dera İsmail Han sih-imparatorlugu->ingiliz-hindistani
1849-03-29 Lahor sih-imparatorlugu->ingiliz-hindistani
1849-03-29 Multan sih-imparatorlugu->ingiliz-hindistani
1849-03-29 Peşâver sih-imparatorlugu->ingiliz-hindistani
1849-03-29 Râvalpindi sih-imparatorlugu->ingiliz-hindistani
1849-03-29 Sirhind sih-imparatorlugu->ingiliz-hindistani
1849-03-29 Siyâlkot sih-imparatorlugu->ingiliz-hindistani
1853-01-01 Raipur nagpur-bhonsle->ingiliz-hindistani
1853-01-01 Ratanpur nagpur-bhonsle->ingiliz-hindistani
1853-05-21 Elicpûr (Achalpur) haydarabad-nizam->ingiliz-hindistani
1856-02-07 Feyzâbâd (Ayodhya) avad->ingiliz-hindistani
1856-02-07 Leknev (Lucknow) avad->ingiliz-hindistani
1859-01-01 Feyzâbâd (Bedahşan) __BOSLUK__->afganistan
1860-01-01 Asîrgarh __BOSLUK__->ingiliz-hindistani
1860-01-01 Burhânpûr __BOSLUK__->ingiliz-hindistani
1863-01-01 Herat __BOSLUK__->afganistan
1877-12-17 Hotan yakub-beg->qing-hanedani
1877-12-17 Keriya (Yutian) yakub-beg->qing-hanedani
1879-10-12 Kâbil afganistan->ingiltere
1880-08-11 Kâbil ingiltere->afganistan
1883-08-15 Kala-i Pençe (Vahan) __BOSLUK__->afganistan
1883-08-15 Serhad (Vahan) __BOSLUK__->afganistan
1883-08-15 İşkâşim (Pamir) __BOSLUK__->afganistan
1893-01-01 Bâmiyan __BOSLUK__->afganistan
1905-01-01 İşkâşim (Pamir) buhara->rusya
1948-01-01 Orchha (Orcha) bundela-orcha->hindistan-cumhuriyeti