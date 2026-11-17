# BOLGE-rusya · A/B/C — yerleşimsiz künye, eksik devlet, seyrek dilim (UMIT, 15 Kasım 2026)

Durum: **hiçbir yerleşim penceresi/künye yazılmadı.** Neden: her yeni pencere için akademik kaynakla gün/yıl + Değişmez 2 maddesi gerekir; bu oturumda tam metin kaynağa (archive.org/DergiPark/Belleten) ulaşılamadı, web araması yalnız ansiklopedi/Vikipedi aynalarına düştü; kural gereği "bulunamadı" yazılır, uydurma yazılmaz.

## A. Yerleşimsiz 11 künye (ölçüm: girdi.yukle)
| Künye | Mevcut durum | Aday yerleşim | Sonuç |
|---|---|---|---|
| yaroslavl-knezligi 1218→1463 | Yaroslavl `yerlesimler_h2_rusya.js`'te ama `s:` sahibi başka künye | Yaroslavl (57.626, 39.894) | **Yazılmadı**: kayıt `kd/s` sahibi ve Rostov/Moskova zinciri okunmadı; öneri: pencere 1218→1463 + 1463 Moskova (kaynak okunmadı) |
| beloozero-knezligi 1238→1389 | yerleşim yok | Belozersk (Beloozero) | Yerleşim atlasta yok; mükerrer tarama yapıldı: yok. **Kaynak okunmadı** → yazılmadı |
| gdansk-kral-sehri 1454→1793 | Gdansk `yerlesimler.js` 1466-1569 polonya-erken | Gdansk | yerlesimler.js → kuyruk (model kararı: Lehistan içi özerk birim) |
| kraliyet-prusyasi 1466-10-19→1772-09-13 | Elbing/Toruń polonya-erken/lehistan | Elbing, Toruń, Gdansk | Aynı model kararı; yazılmadı |
| budjak-ordasi 1697→1812 | Bender/Kili/İsmail `s:` yok (1281-1359 altinorda, sonra bogdan/rusya) | Akkerman, Kili, İsmail | Osmanlı `d:` ile; pencere yazılmadı; **kaynak okunmadı** |
| polonya-naiplik-kralligi 1916-11-05→1918-11-11 | Varşova 1915-08-05→1918-11-11 `almanya` | Varşova, Lublin (Avusturya MGG) | Naiplik Krallığı kâğıt üstünde Alman-Avusturya himayesi; TAM kaynak okunmadı → kuyruk önerisi |
| belarus-halk-cumhuriyeti 1918-03-25→1919-01-05 | Minsk 1917-11-07→1941 sovyet-rusya | Minsk | Fiilî denetimi yok; "ilan edildi ama kontrol etmedi" — kaynakla pencere yazılamadı |
| kolcak-omsk-hukumeti 1918-11-18→1920-01-04 | Omsk Rus pencereleri | Omsk | **Kaynak okunmadı** |
| memel-bolgesi 1920-02-10→1939-03-23 | Klaipėda atlas yok (yer adı Memel/Klaipeda tarandı: bulunamadı) | Klaipėda | Yerleşim yeni açılmalı (mükerrer yok); **kaynak okunmadı** |
| hazar 0650→0965 | Astrahan 0732-0965 hazar-kaganligi (ikiz id) | — | İkiz künye; yeni pencere gereksiz, kuyrukta ikiz önerisi |
| pecenek-konfederasyonu | pecenek ikizi (5 yerleşim pecenek'te) | — | İkiz; silinmedi |

## B. Eksik devlet (KAPSAM-GUNCEL-KUNYESIZ listesi, Rusya bbox, "kunyesiz")
Atlasta künyesi **olmayan**: Murom Knezliği (1015→1392), Turov-Pinsk (0988→1320), Tmutarakan (1010→1094), Dorpat/Ösel-Wiek/Kurland/Ermland piskoposlukları (Livonya/Prusya), Danimarka Estonyası (1219→1346), Pomerelya (1227→1308), Drevlyan, Dulebe, Alan/Sarmat/İskit/Olbia (antik). Süre/gün: kaynakta **okunmadı** → künye yazılmadı. Öncelik önerisi (Rus ortaçağ çekirdeği): Murom, Turov-Pinsk, Tmutarakan, Dorpat piskoposluğu (1224→1558), Ösel-Wiek (1228→1559), Danimarka Estonyası; ayrıca listede olmayan: Astrahan Hanlığı, Kasım Hanlığı, Kalmuk Hanlığı, Vyatka Cumhuriyeti, Don/Yayık Kazak toprakları, Livonya Konfederasyonu (1435-1561), Rusya Cumhuriyeti (1917-09-14→1917-11-07: bu tarih benim bilgimden, okunmadı). Kasım Hanlığı için atlasta madde var (1452) ama künye yok.

### B-düzeltme (ikinci tur, ölçüldü)
Yukarıdaki listede **yanlış**: Astrahan, Kasım ve Kalmuk hanlıkları atlasta VAR (`astarhan` — Astrahan 1502-03-01→1556, `kasim` — Kasimov 1452→1681 TDV «Kāsım Hanlığı», `kalmuk-hanligi` 1632→1771-01-05). Gerçekten eksik (devletler.js id taraması): Vyatka, Livonya Konfederasyonu, Murom, Turov-Pinsk, Tmutarakan, Dorpat/Ösel-Wiek/Kurland/Ermland piskoposlukları, Danimarka Estonyası, Pomerelya, Rusya Cumhuriyeti (aynı polity → `rusya-gecici-hukumet` içinde, ayrı künye gerekmez).
Dorpat Piskoposluğu denemesi: web yalnız Vikipedi aynalarını verdi (kuruluş 1224 Hermann von Buxhoeveden, 6 Kas 1225 enfeodasyon, 1558 Rus fethi; Tartu `yerlesimler_ek11.js` 1224→1558-07-01 şu an `livonya-tarikati` sahipli). CLAUDE.md "Vikipedi tek dayanak olamaz" → **yazılmadı, bulunamadı (akademik kaynak okunmadı)**. Estonca ansiklopedi / Treccani Tartu (ham metin okunmuş: Teutonic Order 1224) piskoposluk statüsünü adlandırmıyor.
Yeni künye/pencere yazılmadığı için denetle/odak_olc sayısı değişmedi.

## C. 1000-1199 seyrek dilim
Rusya/Doğu Avrupa kutusunda 1000s 41, 1100s 49 yerleşim (1200s: 434). Rus kısmı ~12 yerleşim. Aday (yerleşim yoksa açılır, tarih kaynakla): Murom, Rostov (Veliki var), Yaroslavl, Pereyaslavl-Zalesski, Halych, Vladimir-Volınski, Turov, Pinsk, Izyaslavl/Minsk (Minsk 1067 anılışı: bilgi okunmadı), Gnezno ve Krakov dışında Płock/Sandomierz (Płock kaydı `yerlesimler_once1281_yt_avrupa.js` `bos:"veri-yok"`). **Yazılmadı; kaynak okunmadı.** Madde tarafı: 1000-1199 Rus maddeleri (`kronoloji_cok_ms1_1000_dunya.js`) var (Rurik 862, Oleg 882, Igor 912, Olga 959, Svyatoslav 962-972); 1015-1199 Vladimir/Yaroslav/Mstislav dönemi maddeleri yok → boşluk (öneri).
