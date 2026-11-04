# EK — `s:` dönemlerinde künye id'si yerine harita anahtarı (TOP100-1103)

Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 4 Kasım 2026. Betik: scratchpad/harita_anahtar_dokum.py (salt okur).

Kural: CLAUDE.md «`s:[{d:"..."}]` içindeki devlet kimliği `devletler.js`teki gerçek `id:` olmalı». Koordinatör: en yüksek öncelik; düzeltme KASA'nın, motorun bu anahtarlarla nasıl boyadığını KASA ölçer.

Çözüm sınıfı: **TEK** = dönem tek künyenin ömrüne TAM sığıyor → doğrudan yeniden yazılır · **BÖL** = dönem birden çok künyenin ömrüne yayılıyor → künye sınırlarında bölünmeli · **ÇOK** = birden çok künye tam sığıyor → elle karar · **YOK** = örtüşen künye yok (künye ömrü dışında; hayalet dönem).


## Özet

| anahtar | dönem | harita-sahibi künyeler | TEK | BÖL | ÇOK | YOK |
|---|---|---|---|---|---|---|
| `suleyman-celebi` | 247 | fetret-suleyman | 247 | 0 | 0 | 0 |
| `avusturya` | 188 | habsburg | 163 | 25 | 0 | 0 |
| `musa-celebi` | 178 | fetret-musa | 89 | 0 | 0 | 89 |
| `mehmed-celebi` | 140 | fetret-mehmed | 140 | 0 | 0 | 0 |
| `isa-celebi` | 63 | fetret-isa | 0 | 63 | 0 | 0 |
| `sardinya` | 39 | sardinya-piyemonte | 35 | 4 | 0 | 0 |
| `sirbistan` | 35 | sirbistan-nemanjic, sirp-despotlugu, sirbistan-prensligi, sirbistan-kralligi | 20 | 15 | 0 | 0 |
| `yemen` | 28 | yemen-zeydi | 28 | 0 | 0 | 0 |
| `ceneviz` | 22 | cenova | 22 | 0 | 0 | 0 |
| `suud` | 21 | suud-birinci, suud-ikinci, suud-ucuncu, suudi-arabistan | 21 | 0 | 0 | 0 |
| `sovalye` | 18 | rodos-sovalyeleri | 18 | 0 | 0 | 0 |
| `hicaz` | 16 | hicaz-kralligi | 16 | 0 | 0 | 0 |
| `milanoduka` | 15 | milano-dukaligi | 15 | 0 | 0 | 0 |
| `bosna` | 11 | bosna-kralligi | 4 | 7 | 0 | 0 |
| `lusignan` | 6 | kibris-krallik | 6 | 0 | 0 | 0 |
| `atinadukaligi` | 4 | atina-dukaligi | 4 | 0 | 0 | 0 |
| `bulgaristan` | 4 | bulgar-carligi, bulgaristan-prensligi, bulgaristan-kralligi, bulgaristan-halk, bulgaristan-cumhuriyeti | 4 | 0 | 0 | 0 |
| `arnavutluk` | 2 | arnavutluk-iskenderbey, arnavutluk-bagimsiz, arnavutluk-halk-cumhuriyeti, arnavutluk-cumhuriyeti, arnavutluk-italyan-koruma, arnavutluk-alman-himayesi | 2 | 0 | 0 | 0 |
| `kaffa` | 2 | kaffa-kralligi | 0 | 2 | 0 | 0 |
| `cimma` | 1 | cimma-sultanligi | 1 | 0 | 0 | 0 |
| `vollayta` | 1 | vollayta-kralligi | 1 | 0 | 0 | 0 |
| `sidamo` | 1 | sidamo-kralliklari | 1 | 0 | 0 | 0 |

Toplam: 1042 dönem, 22 anahtar.


## `suleyman-celebi` → fetret-suleyman (247 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Ahtapolu (Ahtopol) | yerlesimler_ek24.js:134 | 1402-07-28 | 1403-02-01 | fetret-suleyman | TEK |
| Alasonya (Elassona) | yerlesimler_ek29.js:1082 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Aydos (Aytos) | yerlesimler_ek29.js:1120 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Bolayır | yerlesimler.js:1761 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Burgaz (Burgas) | yerlesimler_ek29.js:1116 | 1402-07-28 | 1403-02-01 | fetret-suleyman | TEK |
| Debre (Dibra) | yerlesimler_ok104.js:179 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Demirköy | yerlesimler_ek24.js:85 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Dereköy (Kırklareli) | yerlesimler_ek24.js:81 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Dimetoka | yerlesimler.js:453 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Doyran | yerlesimler_ok107.js:435 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Drama | yerlesimler.js:445 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Edirne | yerlesimler.js:451 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Elhova (Elhovo) | yerlesimler_ek24.js:126 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Eski Zağra (Stara Zagora) | yerlesimler.js:429 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Ferecik (Feres) | yerlesimler.js:1658 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Filibe | yerlesimler.js:458 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Filorina (Florina) | yerlesimler_a78_avrupa.js:83 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Gelibolu | yerlesimler.js:449 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Gevgili (Gevgelija) | yerlesimler_ok107.js:449 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Golos (Volos) | yerlesimler_ek29.js:1060 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Görice (Korçë) | yerlesimler_a78_avrupa.js:75 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Gümülcine | yerlesimler.js:1670 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Hasköy (Haskovo) | yerlesimler_ek29.js:1098 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Havsa | yerlesimler_ek24.js:50 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Kalabaka (Kalambaka) | yerlesimler_ek29.js:1068 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Karaferye (Veria) | yerlesimler_ok107.js:475 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Kardiçe (Karditsa) | yerlesimler_ek29.js:1075 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Karpuzlu (Yenikarpuzlu) | ? | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Kavala | yerlesimler.js:492 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Kesriye (Kastoria) | yerlesimler_a78_avrupa.js:79 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Keşan | yerlesimler.js:395 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Kofçaz | yerlesimler_ek24.js:77 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Köprülü (Veles) | yerlesimler_ok107.js:394 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Köstendil | yerlesimler.js:435 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Küfkaynapınarı (Azatlı) | ? | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Kılkış (Avrathisar) | yerlesimler_ok107.js:463 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Kırklareli | yerlesimler.js:454 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Lalapaşa | yerlesimler_ek24.js:73 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Lanzaka (Lagkadas) | yerlesimler_ek29.js:577 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Lofça (Loveč) | yerlesimler_ek29.js:843 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Lüleburgaz | yerlesimler.js:391 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Malak Dervent (Lalkovo) | ? | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Malkara | yerlesimler.js:393 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Malko Tırnova | yerlesimler_ek24.js:130 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Manastır | yerlesimler.js:494 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Maydos (Eceabat) | yerlesimler.js:1762 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Meriç (İpsala kuzeyi) | yerlesimler_ek24.js:54 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Mustafapaşa (Svilengrad) | yerlesimler_ek24.js:94 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Nevrokop (Gotse Delçev) | yerlesimler.js:442 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Niğbolu | yerlesimler.js:488 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Niş | yerlesimler.js:460 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Ohri | yerlesimler.js:495 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Orestiada (Kumçiftliği) | yerlesimler_ek24.js:59 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Petriç | yerlesimler.js:439 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Plevne | yerlesimler.js:1606 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Praviște (Eleftheroupoli) | yerlesimler_ek29.js:565 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Preslav | yerlesimler_ms1_1281_yeni.js:292 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Prevadi (Provadia) | yerlesimler_ek29.js:461 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Rezve (Rezovo) | yerlesimler_ek24.js:138 | 1402-07-28 | 1403-02-01 | fetret-suleyman | TEK |
| Rusçuk | yerlesimler.js:489 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Saroz kuzey kıyısı | yerlesimler_ek23.js:165 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Selanik | yerlesimler.js:490 | 1402-07-28 | 1403-06-01 | fetret-suleyman | TEK |
| Serez | yerlesimler.js:491 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Sofulu (Soufli) | yerlesimler_ek24.js:63 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Sofya | yerlesimler.js:459 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Stérna | ? | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Tekirdağ | yerlesimler.js:456 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Távri | ? | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Tırhala | yerlesimler.js:499 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Tırnova | yerlesimler.js:484 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Uluköy (Akçadam) | ? | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Umur Fakih (Fakia) | ? | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Ustrumca (Strumica) | yerlesimler_ok107.js:421 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Varna | yerlesimler.js:485 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Vidin | yerlesimler.js:483 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Vize | yerlesimler_ek29.js:454 | 1402-07-28 | 1403-02-01 | fetret-suleyman | TEK |
| Vodina (Edessa) | yerlesimler_ok107.js:469 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Yenice-i Vardar | yerlesimler_ok107.js:481 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Yenişehir (Larissa) | yerlesimler.js:498 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Ziştovi (Svishtov) | yerlesimler_ek29.js:871 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Çimpe | yerlesimler.js:450 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Çirmen | yerlesimler.js:427 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Çorlu | yerlesimler.js:389 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Üsküp | yerlesimler.js:493 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| İhtiman | yerlesimler.js:433 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| İpsala | yerlesimler.js:397 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| İskeçe | yerlesimler_seyrek.js:197 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| İslimye (Sliven) | yerlesimler_ek29.js:857 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| İzdin (Lamia) | yerlesimler.js:562 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| İğneada | yerlesimler_ek24.js:89 | 1402-07-28 | 1403-02-01 | fetret-suleyman | TEK |
| İştip (Štip) | yerlesimler_ok107.js:407 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Şarköy | yerlesimler_ek23.js:151 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Şehirköy (Pirot) | yerlesimler_serhat.js:140 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Şumnu | yerlesimler.js:486 | 1402-07-28 | 1410-02-13 | fetret-suleyman | TEK |
| Absu (Hypsu) | yerlesimler.js:1718 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Adranos (Orhaneli) | yerlesimler.js:1720 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Akhisar (Pamukova) | yerlesimler.js:81 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Akyazı | yerlesimler.js:104 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Anadolu Hisarı | yerlesimler.js:1733 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Armutlu | yerlesimler.js:116 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Aydos Kalesi | yerlesimler.js:73 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Ayvalık | yerlesimler.js:2026 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Balıkesir | yerlesimler.js:161 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Behramkale (Assos) | yerlesimler_ek23.js:126 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Bergama | yerlesimler.js:163 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Beykoz | yerlesimler_ek23.js:137 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Biga | yerlesimler.js:1671 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Bilecik | yerlesimler.js:151 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Bozüyük | yerlesimler.js:148 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Bursa | yerlesimler.js:155 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Dimbos | yerlesimler.js:1710 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Domaniç | yerlesimler.js:1702 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Edremit | yerlesimler.js:1992 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Erdek | yerlesimler.js:1994 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Ermeni Derbendi | yerlesimler.js:149 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Eskişehir | yerlesimler.js:153 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Gebze | yerlesimler.js:1726 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Gemlik (Kios) | yerlesimler.js:118 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Geyve | yerlesimler.js:75 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Gölyazı (Apollonia) | yerlesimler.js:1734 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Harmankaya | yerlesimler.js:102 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Hereke | yerlesimler.js:1727 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Kandıra | yerlesimler.js:108 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Karabiga | yerlesimler_seyrek.js:316 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Karacahisar | yerlesimler.js:1706 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Karamürsel | yerlesimler.js:114 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Karatigin | yerlesimler.js:1717 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Karaçepüş | yerlesimler.js:1716 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Kestel | yerlesimler.js:85 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Kirmasti (M.Kemalpaşa) | yerlesimler.js:1730 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Kite (Kete) | yerlesimler.js:1711 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Kulacahisar | yerlesimler.js:1704 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Köprühisar (Yenişehir) | yerlesimler.js:77 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Lapseki (Lampsakos) | yerlesimler_ek29.js:1091 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Leblebicihisar | yerlesimler.js:1714 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Lefke (Osmaneli) | yerlesimler.js:1713 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Marmaracık | yerlesimler.js:79 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Mekece | yerlesimler.js:83 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Mihaliç (Karacabey) | yerlesimler.js:1731 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Mudanya | yerlesimler.js:110 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Pazaryeri | yerlesimler.js:150 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Pelekanon (Eskihisar) | yerlesimler.js:1725 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Samandıra | yerlesimler.js:1728 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Soma | yerlesimler_ek29.js:1126 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Söğüt | yerlesimler.js:147 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Truva yöresi (Tevfikiye) | yerlesimler_ek29.js:1111 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Ulubat | yerlesimler.js:100 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Yalova | yerlesimler.js:112 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Yarhisar | yerlesimler.js:1708 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Yenişehir (Bursa) | yerlesimler.js:69 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Çanakkale | yerlesimler.js:162 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Çanakkale yöresi (Kepez) | yerlesimler_ek29.js:1108 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Üsküdar | yerlesimler_ek29.js:368 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| İmralı Adası | yerlesimler.js:106 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| İnegöl | yerlesimler.js:71 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| İzmit | yerlesimler.js:158 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| İznik | yerlesimler.js:157 | 1404-03-01 | 1410-05-06 | fetret-suleyman | TEK |
| Ankara | yerlesimler.js:164 | 1406-01-01 | 1410-05-06 | fetret-suleyman | TEK |
| Ayaş | yerlesimler_anadolu_0914.js:96 | 1406-01-01 | 1410-05-06 | fetret-suleyman | TEK |
| Alasonya (Elassona) | yerlesimler_ek29.js:1082 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Aydos (Aytos) | yerlesimler_ek29.js:1120 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Bolayır | yerlesimler.js:1761 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Debre (Dibra) | yerlesimler_ok104.js:179 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Demirköy | yerlesimler_ek24.js:85 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Dereköy (Kırklareli) | yerlesimler_ek24.js:81 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Dimetoka | yerlesimler.js:453 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Doyran | yerlesimler_ok107.js:435 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Drama | yerlesimler.js:445 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Edirne | yerlesimler.js:451 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Elhova (Elhovo) | yerlesimler_ek24.js:126 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Eski Zağra (Stara Zagora) | yerlesimler.js:429 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Ferecik (Feres) | yerlesimler.js:1658 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Filibe | yerlesimler.js:458 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Filorina (Florina) | yerlesimler_a78_avrupa.js:83 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Gelibolu | yerlesimler.js:449 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Gevgili (Gevgelija) | yerlesimler_ok107.js:449 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Golos (Volos) | yerlesimler_ek29.js:1060 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Görice (Korçë) | yerlesimler_a78_avrupa.js:75 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Gümülcine | yerlesimler.js:1670 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Hasköy (Haskovo) | yerlesimler_ek29.js:1098 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Havsa | yerlesimler_ek24.js:50 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Kalabaka (Kalambaka) | yerlesimler_ek29.js:1068 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Karaferye (Veria) | yerlesimler_ok107.js:475 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Kardiçe (Karditsa) | yerlesimler_ek29.js:1075 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Karpuzlu (Yenikarpuzlu) | ? | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Kavala | yerlesimler.js:492 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Kesriye (Kastoria) | yerlesimler_a78_avrupa.js:79 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Keşan | yerlesimler.js:395 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Kofçaz | yerlesimler_ek24.js:77 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Köprülü (Veles) | yerlesimler_ok107.js:394 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Köstendil | yerlesimler.js:435 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Küfkaynapınarı (Azatlı) | ? | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Kılkış (Avrathisar) | yerlesimler_ok107.js:463 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Kırklareli | yerlesimler.js:454 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Lalapaşa | yerlesimler_ek24.js:73 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Lanzaka (Lagkadas) | yerlesimler_ek29.js:577 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Lofça (Loveč) | yerlesimler_ek29.js:843 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Lüleburgaz | yerlesimler.js:391 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Malak Dervent (Lalkovo) | ? | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Malkara | yerlesimler.js:393 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Malko Tırnova | yerlesimler_ek24.js:130 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Manastır | yerlesimler.js:494 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Maydos (Eceabat) | yerlesimler.js:1762 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Meriç (İpsala kuzeyi) | yerlesimler_ek24.js:54 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Mustafapaşa (Svilengrad) | yerlesimler_ek24.js:94 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Nevrokop (Gotse Delçev) | yerlesimler.js:442 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Niğbolu | yerlesimler.js:488 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Niş | yerlesimler.js:460 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Ohri | yerlesimler.js:495 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Orestiada (Kumçiftliği) | yerlesimler_ek24.js:59 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Petriç | yerlesimler.js:439 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Plevne | yerlesimler.js:1606 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Praviște (Eleftheroupoli) | yerlesimler_ek29.js:565 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Preslav | yerlesimler_ms1_1281_yeni.js:292 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Prevadi (Provadia) | yerlesimler_ek29.js:461 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Rusçuk | yerlesimler.js:489 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Saroz kuzey kıyısı | yerlesimler_ek23.js:165 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Serez | yerlesimler.js:491 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Sofulu (Soufli) | yerlesimler_ek24.js:63 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Sofya | yerlesimler.js:459 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Stérna | ? | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Tekirdağ | yerlesimler.js:456 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Távri | ? | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Tırhala | yerlesimler.js:499 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Tırnova | yerlesimler.js:484 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Uluköy (Akçadam) | ? | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Umur Fakih (Fakia) | ? | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Ustrumca (Strumica) | yerlesimler_ok107.js:421 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Varna | yerlesimler.js:485 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Vidin | yerlesimler.js:483 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Vodina (Edessa) | yerlesimler_ok107.js:469 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Yenice-i Vardar | yerlesimler_ok107.js:481 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Yenişehir (Larissa) | yerlesimler.js:498 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Ziştovi (Svishtov) | yerlesimler_ek29.js:871 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Çimpe | yerlesimler.js:450 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Çirmen | yerlesimler.js:427 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Çorlu | yerlesimler.js:389 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Üsküp | yerlesimler.js:493 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| İhtiman | yerlesimler.js:433 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| İpsala | yerlesimler.js:397 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| İskeçe | yerlesimler_seyrek.js:197 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| İslimye (Sliven) | yerlesimler_ek29.js:857 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| İzdin (Lamia) | yerlesimler.js:562 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| İştip (Štip) | yerlesimler_ok107.js:407 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Şarköy | yerlesimler_ek23.js:151 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Şehirköy (Pirot) | yerlesimler_serhat.js:140 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |
| Şumnu | yerlesimler.js:486 | 1410-06-15 | 1411-02-17 | fetret-suleyman | TEK |

## `avusturya` → habsburg (188 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Freistadt | yerlesimler_a78_avrupa.js:58 | 1281-01-01 | 1918-11-12 | habsburg (kısmî) | BÖL |
| Gmünd (Aşağı Avusturya) | yerlesimler_a78_avrupa.js:64 | 1281-01-01 | 1918-11-12 | habsburg (kısmî) | BÖL |
| Linz | yerlesimler_a78_avrupa.js:61 | 1281-01-01 | 1918-11-12 | habsburg (kısmî) | BÖL |
| Graz | yerlesimler.js:1165 | 1282-12-27 | 1918-11-12 | habsburg | TEK |
| Hartberg | yerlesimler_p77_avrupa.js:50 | 1282-12-27 | 1918-11-12 | habsburg | TEK |
| Maribor (Marburg) | yerlesimler_p77_avrupa.js:26 | 1282-12-27 | 1918-11-11 | habsburg | TEK |
| Viyana | yerlesimler.js:1164 | 1282-12-27 | 1918-11-12 | habsburg | TEK |
| Wiener Neustadt | ? | 1282-12-27 | 1918-11-12 | habsburg | TEK |
| Klagenfurt | yerlesimler_a78_avrupa.js:111 | 1335-05-01 | 1918-11-12 | habsburg | TEK |
| Ljubljana | yerlesimler.js:1168 | 1335-05-02 | 1809-10-14 | habsburg | TEK |
| Innsbruck | yerlesimler_a78_avrupa.js:105 | 1363-01-26 | 1805-12-26 | habsburg | TEK |
| Landeck | yerlesimler_a78_avrupa.js:102 | 1363-01-26 | 1805-12-26 | habsburg | TEK |
| Freiburg | yerlesimler_avrupa.js:456 | 1368-01-01 | 1677-01-01 | habsburg | TEK |
| Feldkirch | yerlesimler_a78_avrupa.js:92 | 1379-01-01 | 1805-12-26 | habsburg | TEK |
| Trieste | yerlesimler_avrupa.js:496 | 1382-09-30 | 1809-10-14 | habsburg | TEK |
| Görz (Gorizia) | yerlesimler_avrupa.js:492 | 1500-01-01 | 1809-10-14 | habsburg | TEK |
| Lienz | yerlesimler_a78_avrupa.js:108 | 1500-04-12 | 1805-12-26 | habsburg | TEK |
| Cortina d'Ampezzo | yerlesimler_avrupa.js:684 | 1511-01-01 | 1918-11-03 | habsburg | TEK |
| Gradisca d'Isonzo | yerlesimler_avrupa.js:688 | 1511-01-01 | 1809-10-14 | habsburg | TEK |
| Bregenz | yerlesimler_a78_avrupa.js:89 | 1523-01-01 | 1805-12-26 | habsburg | TEK |
| Breslau (Wrocław) | yerlesimler.js:1272 | 1526-08-29 | 1742-06-11 | habsburg | TEK |
| Brno | yerlesimler.js:1266 | 1526-08-29 | 1918-10-28 | habsburg | TEK |
| Broumov (Braunau) | yerlesimler.js:1278 | 1526-08-29 | 1918-11-11 | habsburg | TEK |
| Glatz (Kłodzko) | yerlesimler.js:1275 | 1526-08-29 | 1742-06-11 | habsburg | TEK |
| Gleiwitz (Gliwice) | yerlesimler.js:1276 | 1526-08-29 | 1742-06-11 | habsburg | TEK |
| Hradec Králové | yerlesimler.js:1264 | 1526-08-29 | 1918-10-28 | habsburg | TEK |
| Jeseník (Freiwaldau) | yerlesimler.js:1279 | 1526-08-29 | 1918-11-11 | habsburg | TEK |
| Karviná (Fryštát) | yerlesimler_avrupa.js:593 | 1526-08-29 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Kattowitz (Katowice) | yerlesimler.js:1277 | 1526-08-29 | 1742-06-11 | habsburg | TEK |
| Liegnitz (Legnica) | yerlesimler.js:1273 | 1526-08-29 | 1742-06-11 | habsburg | TEK |
| Olomouc | yerlesimler.js:1265 | 1526-08-29 | 1918-10-28 | habsburg | TEK |
| Opava (Troppau) | yerlesimler_avrupa.js:579 | 1526-08-29 | 1918-11-11 | habsburg | TEK |
| Oppeln (Opole) | yerlesimler.js:1274 | 1526-08-29 | 1742-06-11 | habsburg | TEK |
| Ostrava (Mährisch Ostrau) | yerlesimler_avrupa.js:586 | 1526-08-29 | 1918-11-11 | habsburg | TEK |
| Prag | yerlesimler.js:1280 | 1526-08-29 | 1918-10-28 | habsburg | TEK |
| Třeboň (Wittingau) | yerlesimler_a78_avrupa.js:70 | 1526-08-29 | 1918-11-11 | habsburg | TEK |
| České Budějovice (Budweis) | yerlesimler_a78_avrupa.js:67 | 1526-08-29 | 1918-11-11 | habsburg | TEK |
| Gospić | yerlesimler_ek29.js:712 | 1527-01-01 | 1527-05-01 | habsburg | TEK |
| Konstanz | yerlesimler_avrupa.js:457 | 1548-01-01 | 1805-12-26 | habsburg | TEK |
| Ptuj (Pettau) | yerlesimler_p77_avrupa.js:35 | 1555-01-01 | 1918-11-11 | habsburg | TEK |
| Karlovac | yerlesimler_ek29.js:239 | 1579-07-13 | 1809-10-14 | habsburg | TEK |
| Cetin (Cetingrad) | yerlesimler_ek29.js:723 | 1638-01-01 | 1670-01-01 | habsburg | TEK |
| Freiburg | yerlesimler_avrupa.js:456 | 1697-10-30 | 1805-12-26 | habsburg | TEK |
| Orbetello | yerlesimler_avrupa.js:667 | 1707-01-01 | 1736-01-01 | habsburg | TEK |
| Mantova | yerlesimler_avrupa.js:500 | 1708-01-01 | 1797-02-02 | habsburg | TEK |
| Como | yerlesimler_once1281_avrupa.js:22 | 1714-03-07 | 1859-06-04 | habsburg | TEK |
| Milano | yerlesimler.js:1230 | 1714-03-07 | 1796-05-15 | habsburg | TEK |
| Guastalla | yerlesimler_avrupa.js:677 | 1746-01-01 | 1748-01-01 | habsburg | TEK |
| Tarvis (Tarvisio) | yerlesimler_avrupa.js:494 | 1759-01-01 | 1809-10-14 | habsburg | TEK |
| Villach | yerlesimler_avrupa.js:493 | 1759-01-01 | 1809-10-14 | habsburg | TEK |
| Lvov | yerlesimler.js:1174 | 1772-08-05 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Yazlofça (Yazlovets) | yerlesimler.js:1601 | 1772-08-05 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Suçava (Suceava) | yerlesimler.js:588 | 1775-05-07 | 1918-11-28 | habsburg (kısmî) | BÖL |
| Çernovitz (Çernivtsi) | yerlesimler.js:589 | 1775-05-07 | 1918-11-28 | habsburg (kısmî) | BÖL |
| Chełm (Kholm) | yerlesimler_p0037.js:79 | 1795-10-24 | 1809-10-14 | habsburg | TEK |
| Kielce | yerlesimler.js:1262 | 1795-10-24 | 1809-10-14 | habsburg | TEK |
| Krakov | yerlesimler.js:1170 | 1795-10-24 | 1809-10-14 | habsburg | TEK |
| Lublin | yerlesimler_p0037.js:73 | 1795-10-24 | 1809-10-14 | habsburg | TEK |
| Radom (Polonya) | yerlesimler.js:1263 | 1795-10-24 | 1809-10-14 | habsburg | TEK |
| Zamość | yerlesimler_p0037.js:85 | 1795-10-24 | 1809-10-14 | habsburg | TEK |
| Belluno | yerlesimler_avrupa.js:490 | 1797-10-17 | 1805-12-26 | habsburg | TEK |
| Brakya (Brač) | yerlesimler.js:1862 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Cres (Cherso) | yerlesimler.js:1844 | 1797-10-17 | 1806-01-01 | habsburg | TEK |
| Feltre | yerlesimler_avrupa.js:491 | 1797-10-17 | 1805-12-26 | habsburg | TEK |
| Herseknovi (Herceg Novi) | yerlesimler_ek.js:245 | 1797-10-17 | 1806-01-01 | habsburg | TEK |
| Hvar (Lesina) | yerlesimler.js:1863 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Klis | yerlesimler_ek.js:224 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Knin | yerlesimler_ek.js:202 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Korçula (Kurzola) | yerlesimler.js:1864 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Kotor (Cattaro) | yerlesimler_ek.js:177 | 1797-10-17 | 1806-01-01 | habsburg | TEK |
| Krk (Veglia) | yerlesimler.js:1843 | 1797-10-17 | 1806-01-01 | habsburg | TEK |
| Lošinj (Lussino) | yerlesimler.js:1845 | 1797-10-17 | 1806-01-01 | habsburg | TEK |
| Nadin | yerlesimler_ek.js:315 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Padova | yerlesimler_avrupa.js:473 | 1797-10-17 | 1805-12-26 | habsburg | TEK |
| Pag (Pago) | yerlesimler.js:1860 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Pula (Pola) | yerlesimler_avrupa.js:605 | 1797-10-17 | 1806-01-01 | habsburg | TEK |
| Rab (Arbe) | yerlesimler.js:1859 | 1797-10-17 | 1806-01-01 | habsburg | TEK |
| Sin (Sinj) | yerlesimler_ek.js:211 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Split (Spalato) | yerlesimler_ek.js:164 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Udine | yerlesimler_avrupa.js:485 | 1797-10-17 | 1805-12-26 | habsburg | TEK |
| Uzunada (Dugi Otok) | yerlesimler.js:1861 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Venedik | yerlesimler.js:1193 | 1797-10-17 | 1805-12-26 | habsburg | TEK |
| Verona | yerlesimler_avrupa.js:472 | 1797-10-17 | 1805-12-26 | habsburg | TEK |
| Vis (Lissa) | yerlesimler.js:1865 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Vrana (Urana) | yerlesimler_ek.js:306 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Zadar (Zara) | yerlesimler_ek.js:152 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Şibenik (Sebenico) | yerlesimler_ek.js:155 | 1797-10-17 | 1806-02-01 | habsburg | TEK |
| Bergamo | yerlesimler_avrupa.js:475 | 1799-04-27 | 1800-06-04 | habsburg | TEK |
| Bolonya | yerlesimler_avrupa.js:510 | 1799-04-27 | 1800-06-04 | habsburg | TEK |
| Bormio | yerlesimler_avrupa.js:483 | 1799-04-27 | 1800-06-04 | habsburg | TEK |
| Brescia | yerlesimler_avrupa.js:474 | 1799-04-27 | 1800-06-04 | habsburg | TEK |
| Chiavenna | yerlesimler_avrupa.js:482 | 1799-04-27 | 1800-06-04 | habsburg | TEK |
| Ferrara | yerlesimler_avrupa.js:506 | 1799-04-27 | 1800-06-04 | habsburg | TEK |
| Mantova | yerlesimler_avrupa.js:500 | 1799-04-27 | 1800-06-04 | habsburg | TEK |
| Milano | yerlesimler.js:1230 | 1799-04-27 | 1800-06-04 | habsburg | TEK |
| Modena | yerlesimler_avrupa.js:507 | 1799-04-27 | 1800-06-04 | habsburg | TEK |
| Ravenna | yerlesimler_avrupa.js:512 | 1799-04-27 | 1800-06-04 | habsburg | TEK |
| Rimini | yerlesimler_avrupa.js:513 | 1799-04-27 | 1800-06-04 | habsburg | TEK |
| Sondrio | yerlesimler_avrupa.js:481 | 1799-04-27 | 1800-06-04 | habsburg | TEK |
| Brixen (Bressanone) | yerlesimler_a78_avrupa.js:114 | 1803-02-25 | 1805-12-26 | habsburg | TEK |
| Trento | yerlesimler_avrupa.js:498 | 1803-02-25 | 1805-12-26 | habsburg | TEK |
| Salzburg | yerlesimler_once1281_avrupa.js:41 | 1805-12-26 | 1809-10-14 | habsburg | TEK |
| Brakya (Brač) | yerlesimler.js:1862 | 1813-01-01 | 1918-11-11 | habsburg | TEK |
| Cres (Cherso) | yerlesimler.js:1844 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Gradisca d'Isonzo | yerlesimler_avrupa.js:688 | 1813-01-01 | 1918-11-03 | habsburg | TEK |
| Görz (Gorizia) | yerlesimler_avrupa.js:492 | 1813-01-01 | 1918-11-03 | habsburg | TEK |
| Hvar (Lesina) | yerlesimler.js:1863 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Klis | yerlesimler_ek.js:224 | 1813-01-01 | 1918-11-11 | habsburg | TEK |
| Knin | yerlesimler_ek.js:202 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Korçula (Kurzola) | yerlesimler.js:1864 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Krk (Veglia) | yerlesimler.js:1843 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Lastovo (Lagosta) | yerlesimler.js:1867 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Ljubljana | yerlesimler.js:1168 | 1813-01-01 | 1918-11-11 | habsburg | TEK |
| Lošinj (Lussino) | yerlesimler.js:1845 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Mliyet (Mljet) | yerlesimler.js:1866 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Nadin | yerlesimler_ek.js:315 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Pag (Pago) | yerlesimler.js:1860 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Pula (Pola) | yerlesimler_avrupa.js:605 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Rab (Arbe) | yerlesimler.js:1859 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Sin (Sinj) | yerlesimler_ek.js:211 | 1813-01-01 | 1918-11-11 | habsburg | TEK |
| Split (Spalato) | yerlesimler_ek.js:164 | 1813-01-01 | 1918-11-11 | habsburg | TEK |
| Tarvis (Tarvisio) | yerlesimler_avrupa.js:494 | 1813-01-01 | 1918-11-03 | habsburg | TEK |
| Trieste | yerlesimler_avrupa.js:496 | 1813-01-01 | 1918-11-03 | habsburg | TEK |
| Uzunada (Dugi Otok) | yerlesimler.js:1861 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Villach | yerlesimler_avrupa.js:493 | 1813-01-01 | 1918-11-12 | habsburg | TEK |
| Vis (Lissa) | yerlesimler.js:1865 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Vrana (Urana) | yerlesimler_ek.js:306 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Zadar (Zara) | yerlesimler_ek.js:152 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Şibenik (Sebenico) | yerlesimler_ek.js:155 | 1813-01-01 | 1919-09-10 | habsburg (kısmî) | BÖL |
| Trento | yerlesimler_avrupa.js:498 | 1813-10-15 | 1918-11-03 | habsburg | TEK |
| Herseknovi (Herceg Novi) | yerlesimler_ek.js:245 | 1814-01-01 | 1918-11-11 | habsburg | TEK |
| Kotor (Cattaro) | yerlesimler_ek.js:177 | 1814-01-01 | 1918-11-11 | habsburg | TEK |
| Dubrovnik | yerlesimler.js:2528 | 1814-01-28 | 1918-11-11 | habsburg | TEK |
| Ston | yerlesimler_once1281_yt_avrupa.js:269 | 1814-01-28 | 1918-11-11 | habsburg | TEK |
| Belluno | yerlesimler_avrupa.js:490 | 1814-04-16 | 1866-10-03 | habsburg | TEK |
| Bergamo | yerlesimler_avrupa.js:475 | 1814-04-16 | 1859-06-04 | habsburg | TEK |
| Bolonya | yerlesimler_avrupa.js:510 | 1814-04-16 | 1815-06-09 | habsburg | TEK |
| Bormio | yerlesimler_avrupa.js:483 | 1814-04-16 | 1859-06-04 | habsburg | TEK |
| Brescia | yerlesimler_avrupa.js:474 | 1814-04-16 | 1859-06-04 | habsburg | TEK |
| Chiavenna | yerlesimler_avrupa.js:482 | 1814-04-16 | 1859-06-04 | habsburg | TEK |
| Feltre | yerlesimler_avrupa.js:491 | 1814-04-16 | 1866-10-03 | habsburg | TEK |
| Ferrara | yerlesimler_avrupa.js:506 | 1814-04-16 | 1815-06-09 | habsburg | TEK |
| Mantova | yerlesimler_avrupa.js:500 | 1814-04-16 | 1866-10-03 | habsburg | TEK |
| Milano | yerlesimler.js:1230 | 1814-04-16 | 1859-06-04 | habsburg | TEK |
| Modena | yerlesimler_avrupa.js:507 | 1814-04-16 | 1814-07-14 | habsburg | TEK |
| Padova | yerlesimler_avrupa.js:473 | 1814-04-16 | 1866-10-03 | habsburg | TEK |
| Ravenna | yerlesimler_avrupa.js:512 | 1814-04-16 | 1815-06-09 | habsburg | TEK |
| Rimini | yerlesimler_avrupa.js:513 | 1814-04-16 | 1815-06-09 | habsburg | TEK |
| Sondrio | yerlesimler_avrupa.js:481 | 1814-04-16 | 1859-06-04 | habsburg | TEK |
| Udine | yerlesimler_avrupa.js:485 | 1814-04-16 | 1866-10-03 | habsburg | TEK |
| Venedik | yerlesimler.js:1193 | 1814-04-16 | 1848-03-22 | habsburg | TEK |
| Verona | yerlesimler_avrupa.js:472 | 1814-04-16 | 1866-10-03 | habsburg | TEK |
| Bregenz | yerlesimler_a78_avrupa.js:89 | 1814-06-03 | 1918-11-12 | habsburg | TEK |
| Brixen (Bressanone) | yerlesimler_a78_avrupa.js:114 | 1814-06-03 | 1918-11-03 | habsburg | TEK |
| Feldkirch | yerlesimler_a78_avrupa.js:92 | 1814-06-03 | 1918-11-12 | habsburg | TEK |
| Innsbruck | yerlesimler_a78_avrupa.js:105 | 1814-06-03 | 1918-11-12 | habsburg | TEK |
| Landeck | yerlesimler_a78_avrupa.js:102 | 1814-06-03 | 1918-11-12 | habsburg | TEK |
| Lienz | yerlesimler_a78_avrupa.js:108 | 1814-06-03 | 1918-11-12 | habsburg | TEK |
| Salzburg | yerlesimler_once1281_avrupa.js:41 | 1816-04-14 | 1918-11-12 | habsburg | TEK |
| Krakov | yerlesimler.js:1170 | 1846-11-11 | 1918-11-11 | habsburg | TEK |
| Venedik | yerlesimler.js:1193 | 1849-08-22 | 1866-10-03 | habsburg | TEK |
| Banaluka | yerlesimler.js:579 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Bihaç (Bihać) | yerlesimler_ek.js:377 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Bijeljina | ? | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Bosna Brod'u (Bosanski Brod) | yerlesimler_ek29.js:318 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Bosna Dubiçası (Bosanska Dubica) | yerlesimler_ek29.js:295 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Bosna Novi'si (Bosanski Novi) | yerlesimler_ek29.js:302 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Foça (Foča) | yerlesimler.js:2523 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Koniçe (Konjic) | yerlesimler_ek2.js:37 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Krupa (Bosanska Krupa) | yerlesimler_ek29.js:673 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Livno (İhlevne) | yerlesimler.js:2524 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Mostar | yerlesimler.js:578 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Orašje | ? | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Ostrovica (Stara Ostrovica, Kulen Vakuf) | yerlesimler_ek29.js:690 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Saraybosna | yerlesimler.js:575 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Srebrenik | yerlesimler.js:2526 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Travnik | yerlesimler.js:2521 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Trebinye | yerlesimler_seyrek.js:269 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Tuzla (Bosna) | yerlesimler_seyrek.js:292 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Visoko | yerlesimler_ek2.js:51 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Vişegrad | yerlesimler_seyrek.js:282 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Yayça (Jajce) | yerlesimler.js:2525 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| İzvornik (Zvornik) | yerlesimler.js:2522 | 1908-10-05 | 1918-11-11 | habsburg | TEK |
| Radom (Polonya) | yerlesimler.js:1263 | 1915-07-01 | 1918-11-11 | habsburg | TEK |
| Chełm (Kholm) | yerlesimler_p0037.js:79 | 1915-08-01 | 1918-11-11 | habsburg | TEK |
| Lublin | yerlesimler_p0037.js:73 | 1915-08-01 | 1918-11-11 | habsburg | TEK |
| Zamość | yerlesimler_p0037.js:85 | 1915-09-01 | 1918-11-11 | habsburg | TEK |
| Kielce | yerlesimler.js:1262 | 1915-10-01 | 1918-11-11 | habsburg | TEK |

## `musa-celebi` → fetret-musa (178 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Alasonya (Elassona) | yerlesimler_ek29.js:1082 | 1410-02-13 | 1410-06-15 | — | YOK |
| Aydos (Aytos) | yerlesimler_ek29.js:1120 | 1410-02-13 | 1410-06-15 | — | YOK |
| Bolayır | yerlesimler.js:1761 | 1410-02-13 | 1410-06-15 | — | YOK |
| Debre (Dibra) | yerlesimler_ok104.js:179 | 1410-02-13 | 1410-06-15 | — | YOK |
| Demirköy | yerlesimler_ek24.js:85 | 1410-02-13 | 1410-06-15 | — | YOK |
| Dereköy (Kırklareli) | yerlesimler_ek24.js:81 | 1410-02-13 | 1410-06-15 | — | YOK |
| Dimetoka | yerlesimler.js:453 | 1410-02-13 | 1410-06-15 | — | YOK |
| Doyran | yerlesimler_ok107.js:435 | 1410-02-13 | 1410-06-15 | — | YOK |
| Drama | yerlesimler.js:445 | 1410-02-13 | 1410-06-15 | — | YOK |
| Edirne | yerlesimler.js:451 | 1410-02-13 | 1410-06-15 | — | YOK |
| Elhova (Elhovo) | yerlesimler_ek24.js:126 | 1410-02-13 | 1410-06-15 | — | YOK |
| Eski Zağra (Stara Zagora) | yerlesimler.js:429 | 1410-02-13 | 1410-06-15 | — | YOK |
| Ferecik (Feres) | yerlesimler.js:1658 | 1410-02-13 | 1410-06-15 | — | YOK |
| Filibe | yerlesimler.js:458 | 1410-02-13 | 1410-06-15 | — | YOK |
| Filorina (Florina) | yerlesimler_a78_avrupa.js:83 | 1410-02-13 | 1410-06-15 | — | YOK |
| Gelibolu | yerlesimler.js:449 | 1410-02-13 | 1410-06-15 | — | YOK |
| Gevgili (Gevgelija) | yerlesimler_ok107.js:449 | 1410-02-13 | 1410-06-15 | — | YOK |
| Golos (Volos) | yerlesimler_ek29.js:1060 | 1410-02-13 | 1410-06-15 | — | YOK |
| Görice (Korçë) | yerlesimler_a78_avrupa.js:75 | 1410-02-13 | 1410-06-15 | — | YOK |
| Gümülcine | yerlesimler.js:1670 | 1410-02-13 | 1410-06-15 | — | YOK |
| Hasköy (Haskovo) | yerlesimler_ek29.js:1098 | 1410-02-13 | 1410-06-15 | — | YOK |
| Havsa | yerlesimler_ek24.js:50 | 1410-02-13 | 1410-06-15 | — | YOK |
| Kalabaka (Kalambaka) | yerlesimler_ek29.js:1068 | 1410-02-13 | 1410-06-15 | — | YOK |
| Karaferye (Veria) | yerlesimler_ok107.js:475 | 1410-02-13 | 1410-06-15 | — | YOK |
| Kardiçe (Karditsa) | yerlesimler_ek29.js:1075 | 1410-02-13 | 1410-06-15 | — | YOK |
| Karpuzlu (Yenikarpuzlu) | ? | 1410-02-13 | 1410-06-15 | — | YOK |
| Kavala | yerlesimler.js:492 | 1410-02-13 | 1410-06-15 | — | YOK |
| Kesriye (Kastoria) | yerlesimler_a78_avrupa.js:79 | 1410-02-13 | 1410-06-15 | — | YOK |
| Keşan | yerlesimler.js:395 | 1410-02-13 | 1410-06-15 | — | YOK |
| Kofçaz | yerlesimler_ek24.js:77 | 1410-02-13 | 1410-06-15 | — | YOK |
| Köprülü (Veles) | yerlesimler_ok107.js:394 | 1410-02-13 | 1410-06-15 | — | YOK |
| Köstendil | yerlesimler.js:435 | 1410-02-13 | 1410-06-15 | — | YOK |
| Küfkaynapınarı (Azatlı) | ? | 1410-02-13 | 1410-06-15 | — | YOK |
| Kılkış (Avrathisar) | yerlesimler_ok107.js:463 | 1410-02-13 | 1410-06-15 | — | YOK |
| Kırklareli | yerlesimler.js:454 | 1410-02-13 | 1410-06-15 | — | YOK |
| Lalapaşa | yerlesimler_ek24.js:73 | 1410-02-13 | 1410-06-15 | — | YOK |
| Lanzaka (Lagkadas) | yerlesimler_ek29.js:577 | 1410-02-13 | 1410-06-15 | — | YOK |
| Lofça (Loveč) | yerlesimler_ek29.js:843 | 1410-02-13 | 1410-06-15 | — | YOK |
| Lüleburgaz | yerlesimler.js:391 | 1410-02-13 | 1410-06-15 | — | YOK |
| Malak Dervent (Lalkovo) | ? | 1410-02-13 | 1410-06-15 | — | YOK |
| Malkara | yerlesimler.js:393 | 1410-02-13 | 1410-06-15 | — | YOK |
| Malko Tırnova | yerlesimler_ek24.js:130 | 1410-02-13 | 1410-06-15 | — | YOK |
| Manastır | yerlesimler.js:494 | 1410-02-13 | 1410-06-15 | — | YOK |
| Maydos (Eceabat) | yerlesimler.js:1762 | 1410-02-13 | 1410-06-15 | — | YOK |
| Meriç (İpsala kuzeyi) | yerlesimler_ek24.js:54 | 1410-02-13 | 1410-06-15 | — | YOK |
| Mustafapaşa (Svilengrad) | yerlesimler_ek24.js:94 | 1410-02-13 | 1410-06-15 | — | YOK |
| Nevrokop (Gotse Delçev) | yerlesimler.js:442 | 1410-02-13 | 1410-06-15 | — | YOK |
| Niğbolu | yerlesimler.js:488 | 1410-02-13 | 1410-06-15 | — | YOK |
| Niş | yerlesimler.js:460 | 1410-02-13 | 1410-06-15 | — | YOK |
| Ohri | yerlesimler.js:495 | 1410-02-13 | 1410-06-15 | — | YOK |
| Orestiada (Kumçiftliği) | yerlesimler_ek24.js:59 | 1410-02-13 | 1410-06-15 | — | YOK |
| Petriç | yerlesimler.js:439 | 1410-02-13 | 1410-06-15 | — | YOK |
| Plevne | yerlesimler.js:1606 | 1410-02-13 | 1410-06-15 | — | YOK |
| Praviște (Eleftheroupoli) | yerlesimler_ek29.js:565 | 1410-02-13 | 1410-06-15 | — | YOK |
| Preslav | yerlesimler_ms1_1281_yeni.js:292 | 1410-02-13 | 1410-06-15 | — | YOK |
| Prevadi (Provadia) | yerlesimler_ek29.js:461 | 1410-02-13 | 1410-06-15 | — | YOK |
| Rusçuk | yerlesimler.js:489 | 1410-02-13 | 1410-06-15 | — | YOK |
| Saroz kuzey kıyısı | yerlesimler_ek23.js:165 | 1410-02-13 | 1410-06-15 | — | YOK |
| Serez | yerlesimler.js:491 | 1410-02-13 | 1410-06-15 | — | YOK |
| Sofulu (Soufli) | yerlesimler_ek24.js:63 | 1410-02-13 | 1410-06-15 | — | YOK |
| Sofya | yerlesimler.js:459 | 1410-02-13 | 1410-06-15 | — | YOK |
| Stérna | ? | 1410-02-13 | 1410-06-15 | — | YOK |
| Tekirdağ | yerlesimler.js:456 | 1410-02-13 | 1410-06-15 | — | YOK |
| Távri | ? | 1410-02-13 | 1410-06-15 | — | YOK |
| Tırhala | yerlesimler.js:499 | 1410-02-13 | 1410-06-15 | — | YOK |
| Tırnova | yerlesimler.js:484 | 1410-02-13 | 1410-06-15 | — | YOK |
| Uluköy (Akçadam) | ? | 1410-02-13 | 1410-06-15 | — | YOK |
| Umur Fakih (Fakia) | ? | 1410-02-13 | 1410-06-15 | — | YOK |
| Ustrumca (Strumica) | yerlesimler_ok107.js:421 | 1410-02-13 | 1410-06-15 | — | YOK |
| Varna | yerlesimler.js:485 | 1410-02-13 | 1410-06-15 | — | YOK |
| Vidin | yerlesimler.js:483 | 1410-02-13 | 1410-06-15 | — | YOK |
| Vize | yerlesimler_ek29.js:454 | 1410-02-13 | 1410-06-15 | — | YOK |
| Vodina (Edessa) | yerlesimler_ok107.js:469 | 1410-02-13 | 1410-06-15 | — | YOK |
| Yenice-i Vardar | yerlesimler_ok107.js:481 | 1410-02-13 | 1410-06-15 | — | YOK |
| Yenişehir (Larissa) | yerlesimler.js:498 | 1410-02-13 | 1410-06-15 | — | YOK |
| Ziştovi (Svishtov) | yerlesimler_ek29.js:871 | 1410-02-13 | 1410-06-15 | — | YOK |
| Çimpe | yerlesimler.js:450 | 1410-02-13 | 1410-06-15 | — | YOK |
| Çirmen | yerlesimler.js:427 | 1410-02-13 | 1410-06-15 | — | YOK |
| Çorlu | yerlesimler.js:389 | 1410-02-13 | 1410-06-15 | — | YOK |
| Üsküp | yerlesimler.js:493 | 1410-02-13 | 1410-06-15 | — | YOK |
| İhtiman | yerlesimler.js:433 | 1410-02-13 | 1410-06-15 | — | YOK |
| İpsala | yerlesimler.js:397 | 1410-02-13 | 1410-06-15 | — | YOK |
| İskeçe | yerlesimler_seyrek.js:197 | 1410-02-13 | 1410-06-15 | — | YOK |
| İslimye (Sliven) | yerlesimler_ek29.js:857 | 1410-02-13 | 1410-06-15 | — | YOK |
| İzdin (Lamia) | yerlesimler.js:562 | 1410-02-13 | 1410-06-15 | — | YOK |
| İştip (Štip) | yerlesimler_ok107.js:407 | 1410-02-13 | 1410-06-15 | — | YOK |
| Şarköy | yerlesimler_ek23.js:151 | 1410-02-13 | 1410-06-15 | — | YOK |
| Şehirköy (Pirot) | yerlesimler_serhat.js:140 | 1410-02-13 | 1410-06-15 | — | YOK |
| Şumnu | yerlesimler.js:486 | 1410-02-13 | 1410-06-15 | — | YOK |
| Alasonya (Elassona) | yerlesimler_ek29.js:1082 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Aydos (Aytos) | yerlesimler_ek29.js:1120 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Bolayır | yerlesimler.js:1761 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Debre (Dibra) | yerlesimler_ok104.js:179 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Demirköy | yerlesimler_ek24.js:85 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Dereköy (Kırklareli) | yerlesimler_ek24.js:81 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Dimetoka | yerlesimler.js:453 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Doyran | yerlesimler_ok107.js:435 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Drama | yerlesimler.js:445 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Edirne | yerlesimler.js:451 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Elhova (Elhovo) | yerlesimler_ek24.js:126 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Eski Zağra (Stara Zagora) | yerlesimler.js:429 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Ferecik (Feres) | yerlesimler.js:1658 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Filibe | yerlesimler.js:458 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Filorina (Florina) | yerlesimler_a78_avrupa.js:83 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Gelibolu | yerlesimler.js:449 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Gevgili (Gevgelija) | yerlesimler_ok107.js:449 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Golos (Volos) | yerlesimler_ek29.js:1060 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Görice (Korçë) | yerlesimler_a78_avrupa.js:75 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Gümülcine | yerlesimler.js:1670 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Hasköy (Haskovo) | yerlesimler_ek29.js:1098 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Havsa | yerlesimler_ek24.js:50 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Kalabaka (Kalambaka) | yerlesimler_ek29.js:1068 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Karaferye (Veria) | yerlesimler_ok107.js:475 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Kardiçe (Karditsa) | yerlesimler_ek29.js:1075 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Karpuzlu (Yenikarpuzlu) | ? | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Kavala | yerlesimler.js:492 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Kesriye (Kastoria) | yerlesimler_a78_avrupa.js:79 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Keşan | yerlesimler.js:395 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Kofçaz | yerlesimler_ek24.js:77 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Köprülü (Veles) | yerlesimler_ok107.js:394 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Köstendil | yerlesimler.js:435 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Küfkaynapınarı (Azatlı) | ? | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Kılkış (Avrathisar) | yerlesimler_ok107.js:463 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Kırklareli | yerlesimler.js:454 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Lalapaşa | yerlesimler_ek24.js:73 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Lanzaka (Lagkadas) | yerlesimler_ek29.js:577 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Lofça (Loveč) | yerlesimler_ek29.js:843 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Lüleburgaz | yerlesimler.js:391 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Malak Dervent (Lalkovo) | ? | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Malkara | yerlesimler.js:393 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Malko Tırnova | yerlesimler_ek24.js:130 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Manastır | yerlesimler.js:494 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Maydos (Eceabat) | yerlesimler.js:1762 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Meriç (İpsala kuzeyi) | yerlesimler_ek24.js:54 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Mustafapaşa (Svilengrad) | yerlesimler_ek24.js:94 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Nevrokop (Gotse Delçev) | yerlesimler.js:442 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Niğbolu | yerlesimler.js:488 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Niş | yerlesimler.js:460 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Ohri | yerlesimler.js:495 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Orestiada (Kumçiftliği) | yerlesimler_ek24.js:59 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Petriç | yerlesimler.js:439 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Plevne | yerlesimler.js:1606 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Praviște (Eleftheroupoli) | yerlesimler_ek29.js:565 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Preslav | yerlesimler_ms1_1281_yeni.js:292 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Prevadi (Provadia) | yerlesimler_ek29.js:461 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Rusçuk | yerlesimler.js:489 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Saroz kuzey kıyısı | yerlesimler_ek23.js:165 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Serez | yerlesimler.js:491 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Sofulu (Soufli) | yerlesimler_ek24.js:63 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Sofya | yerlesimler.js:459 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Stérna | ? | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Tekirdağ | yerlesimler.js:456 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Távri | ? | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Tırhala | yerlesimler.js:499 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Tırnova | yerlesimler.js:484 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Uluköy (Akçadam) | ? | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Umur Fakih (Fakia) | ? | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Ustrumca (Strumica) | yerlesimler_ok107.js:421 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Varna | yerlesimler.js:485 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Vidin | yerlesimler.js:483 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Vodina (Edessa) | yerlesimler_ok107.js:469 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Yenice-i Vardar | yerlesimler_ok107.js:481 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Yenişehir (Larissa) | yerlesimler.js:498 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Ziştovi (Svishtov) | yerlesimler_ek29.js:871 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Çimpe | yerlesimler.js:450 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Çirmen | yerlesimler.js:427 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Çorlu | yerlesimler.js:389 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Üsküp | yerlesimler.js:493 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| İhtiman | yerlesimler.js:433 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| İpsala | yerlesimler.js:397 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| İskeçe | yerlesimler_seyrek.js:197 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| İslimye (Sliven) | yerlesimler_ek29.js:857 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| İzdin (Lamia) | yerlesimler.js:562 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| İştip (Štip) | yerlesimler_ok107.js:407 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Şarköy | yerlesimler_ek23.js:151 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| Şehirköy (Pirot) | yerlesimler_serhat.js:140 | 1411-02-17 | 1412-01-01 | fetret-musa | TEK |
| Şumnu | yerlesimler.js:486 | 1411-02-17 | 1413-07-05 | fetret-musa | TEK |
| İvranye (Vranje) | yerlesimler_ek29.js:780 | 1413-01-01 | 1413-07-05 | fetret-musa | TEK |

## `mehmed-celebi` → fetret-mehmed (140 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Amasya | yerlesimler.js:349 | 1402-07-28 | 1413-07-05 | fetret-mehmed | TEK |
| Ladik (Amasya) | yerlesimler.js:1767 | 1402-07-28 | 1413-07-05 | fetret-mehmed | TEK |
| Merzifon | yerlesimler.js:1766 | 1402-07-28 | 1413-07-05 | fetret-mehmed | TEK |
| Osmancık | yerlesimler.js:1765 | 1402-07-28 | 1413-07-05 | fetret-mehmed | TEK |
| Samsun | yerlesimler.js:348 | 1402-07-28 | 1413-07-05 | fetret-mehmed | TEK |
| Tokat | yerlesimler.js:350 | 1402-07-28 | 1413-07-05 | fetret-mehmed | TEK |
| Çorum | yerlesimler.js:1692 | 1402-07-28 | 1413-07-05 | fetret-mehmed | TEK |
| Absu (Hypsu) | yerlesimler.js:1718 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Adranos (Orhaneli) | yerlesimler.js:1720 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Akhisar (Pamukova) | yerlesimler.js:81 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Akyazı | yerlesimler.js:104 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Anadolu Hisarı | yerlesimler.js:1733 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Armutlu | yerlesimler.js:116 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Aydos Kalesi | yerlesimler.js:73 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Ayvalık | yerlesimler.js:2026 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Balıkesir | yerlesimler.js:161 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Behramkale (Assos) | yerlesimler_ek23.js:126 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Bergama | yerlesimler.js:163 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Beykoz | yerlesimler_ek23.js:137 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Biga | yerlesimler.js:1671 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Bilecik | yerlesimler.js:151 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Bozüyük | yerlesimler.js:148 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Bursa | yerlesimler.js:155 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Dimbos | yerlesimler.js:1710 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Domaniç | yerlesimler.js:1702 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Edremit | yerlesimler.js:1992 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Erdek | yerlesimler.js:1994 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Ermeni Derbendi | yerlesimler.js:149 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Eskişehir | yerlesimler.js:153 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Gebze | yerlesimler.js:1726 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Gemlik (Kios) | yerlesimler.js:118 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Geyve | yerlesimler.js:75 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Gölyazı (Apollonia) | yerlesimler.js:1734 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Harmankaya | yerlesimler.js:102 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Hereke | yerlesimler.js:1727 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Kandıra | yerlesimler.js:108 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Karabiga | yerlesimler_seyrek.js:316 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Karacahisar | yerlesimler.js:1706 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Karamürsel | yerlesimler.js:114 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Karatigin | yerlesimler.js:1717 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Karaçepüş | yerlesimler.js:1716 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Kestel | yerlesimler.js:85 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Kirmasti (M.Kemalpaşa) | yerlesimler.js:1730 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Kite (Kete) | yerlesimler.js:1711 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Kulacahisar | yerlesimler.js:1704 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Köprühisar (Yenişehir) | yerlesimler.js:77 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Lapseki (Lampsakos) | yerlesimler_ek29.js:1091 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Leblebicihisar | yerlesimler.js:1714 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Lefke (Osmaneli) | yerlesimler.js:1713 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Marmaracık | yerlesimler.js:79 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Mekece | yerlesimler.js:83 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Mihaliç (Karacabey) | yerlesimler.js:1731 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Mudanya | yerlesimler.js:110 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Pazaryeri | yerlesimler.js:150 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Pelekanon (Eskihisar) | yerlesimler.js:1725 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Samandıra | yerlesimler.js:1728 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Soma | yerlesimler_ek29.js:1126 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Söğüt | yerlesimler.js:147 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Truva yöresi (Tevfikiye) | yerlesimler_ek29.js:1111 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Ulubat | yerlesimler.js:100 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Yalova | yerlesimler.js:112 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Yarhisar | yerlesimler.js:1708 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Yenişehir (Bursa) | yerlesimler.js:69 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Çanakkale | yerlesimler.js:162 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Çanakkale yöresi (Kepez) | yerlesimler_ek29.js:1108 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Üsküdar | yerlesimler_ek29.js:368 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| İmralı Adası | yerlesimler.js:106 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| İnegöl | yerlesimler.js:71 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| İzmit | yerlesimler.js:158 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| İznik | yerlesimler.js:157 | 1403-09-01 | 1404-03-01 | fetret-mehmed | TEK |
| Ankara | yerlesimler.js:164 | 1404-03-01 | 1406-01-01 | fetret-mehmed | TEK |
| Ayaş | yerlesimler_anadolu_0914.js:96 | 1404-03-01 | 1406-01-01 | fetret-mehmed | TEK |
| Sivas | yerlesimler.js:351 | 1408-06-01 | 1413-07-05 | fetret-mehmed | TEK |
| Zara | yerlesimler_ek29.js:1138 | 1408-06-01 | 1413-07-05 | fetret-mehmed | TEK |
| İmranlı | yerlesimler_ek29.js:1142 | 1408-06-01 | 1413-07-05 | fetret-mehmed | TEK |
| Absu (Hypsu) | yerlesimler.js:1718 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Adranos (Orhaneli) | yerlesimler.js:1720 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Akhisar (Pamukova) | yerlesimler.js:81 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Akyazı | yerlesimler.js:104 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Anadolu Hisarı | yerlesimler.js:1733 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Ankara | yerlesimler.js:164 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Armutlu | yerlesimler.js:116 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Ayaş | yerlesimler_anadolu_0914.js:96 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Aydos Kalesi | yerlesimler.js:73 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Ayvalık | yerlesimler.js:2026 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Balıkesir | yerlesimler.js:161 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Behramkale (Assos) | yerlesimler_ek23.js:126 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Bergama | yerlesimler.js:163 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Beykoz | yerlesimler_ek23.js:137 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Biga | yerlesimler.js:1671 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Bilecik | yerlesimler.js:151 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Bozüyük | yerlesimler.js:148 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Bursa | yerlesimler.js:155 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Dimbos | yerlesimler.js:1710 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Domaniç | yerlesimler.js:1702 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Edremit | yerlesimler.js:1992 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Erdek | yerlesimler.js:1994 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Ermeni Derbendi | yerlesimler.js:149 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Eskişehir | yerlesimler.js:153 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Gebze | yerlesimler.js:1726 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Gemlik (Kios) | yerlesimler.js:118 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Geyve | yerlesimler.js:75 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Gölyazı (Apollonia) | yerlesimler.js:1734 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Harmankaya | yerlesimler.js:102 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Hereke | yerlesimler.js:1727 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Kandıra | yerlesimler.js:108 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Karabiga | yerlesimler_seyrek.js:316 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Karacahisar | yerlesimler.js:1706 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Karamürsel | yerlesimler.js:114 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Karatigin | yerlesimler.js:1717 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Karaçepüş | yerlesimler.js:1716 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Kestel | yerlesimler.js:85 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Kirmasti (M.Kemalpaşa) | yerlesimler.js:1730 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Kite (Kete) | yerlesimler.js:1711 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Kulacahisar | yerlesimler.js:1704 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Köprühisar (Yenişehir) | yerlesimler.js:77 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Lapseki (Lampsakos) | yerlesimler_ek29.js:1091 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Leblebicihisar | yerlesimler.js:1714 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Lefke (Osmaneli) | yerlesimler.js:1713 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Marmaracık | yerlesimler.js:79 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Mekece | yerlesimler.js:83 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Mihaliç (Karacabey) | yerlesimler.js:1731 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Mudanya | yerlesimler.js:110 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Pazaryeri | yerlesimler.js:150 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Pelekanon (Eskihisar) | yerlesimler.js:1725 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Samandıra | yerlesimler.js:1728 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Soma | yerlesimler_ek29.js:1126 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Söğüt | yerlesimler.js:147 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Truva yöresi (Tevfikiye) | yerlesimler_ek29.js:1111 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Ulubat | yerlesimler.js:100 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Yalova | yerlesimler.js:112 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Yarhisar | yerlesimler.js:1708 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Yenişehir (Bursa) | yerlesimler.js:69 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Çanakkale | yerlesimler.js:162 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Çanakkale yöresi (Kepez) | yerlesimler_ek29.js:1108 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| Üsküdar | yerlesimler_ek29.js:368 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| İmralı Adası | yerlesimler.js:106 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| İnegöl | yerlesimler.js:71 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| İzmit | yerlesimler.js:158 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |
| İznik | yerlesimler.js:157 | 1410-05-06 | 1413-07-05 | fetret-mehmed | TEK |

## `isa-celebi` → fetret-isa (63 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Absu (Hypsu) | yerlesimler.js:1718 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Adranos (Orhaneli) | yerlesimler.js:1720 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Akhisar (Pamukova) | yerlesimler.js:81 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Akyazı | yerlesimler.js:104 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Anadolu Hisarı | yerlesimler.js:1733 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Armutlu | yerlesimler.js:116 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Aydos Kalesi | yerlesimler.js:73 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Ayvalık | yerlesimler.js:2026 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Balıkesir | yerlesimler.js:161 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Behramkale (Assos) | yerlesimler_ek23.js:126 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Bergama | yerlesimler.js:163 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Beykoz | yerlesimler_ek23.js:137 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Biga | yerlesimler.js:1671 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Bilecik | yerlesimler.js:151 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Bozüyük | yerlesimler.js:148 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Bursa | yerlesimler.js:155 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Dimbos | yerlesimler.js:1710 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Domaniç | yerlesimler.js:1702 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Edremit | yerlesimler.js:1992 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Erdek | yerlesimler.js:1994 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Ermeni Derbendi | yerlesimler.js:149 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Eskişehir | yerlesimler.js:153 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Gebze | yerlesimler.js:1726 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Gemlik (Kios) | yerlesimler.js:118 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Geyve | yerlesimler.js:75 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Gölyazı (Apollonia) | yerlesimler.js:1734 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Harmankaya | yerlesimler.js:102 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Hereke | yerlesimler.js:1727 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Kandıra | yerlesimler.js:108 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Karabiga | yerlesimler_seyrek.js:316 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Karacahisar | yerlesimler.js:1706 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Karamürsel | yerlesimler.js:114 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Karatigin | yerlesimler.js:1717 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Karaçepüş | yerlesimler.js:1716 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Kestel | yerlesimler.js:85 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Kirmasti (M.Kemalpaşa) | yerlesimler.js:1730 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Kite (Kete) | yerlesimler.js:1711 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Kulacahisar | yerlesimler.js:1704 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Köprühisar (Yenişehir) | yerlesimler.js:77 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Lapseki (Lampsakos) | yerlesimler_ek29.js:1091 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Leblebicihisar | yerlesimler.js:1714 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Lefke (Osmaneli) | yerlesimler.js:1713 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Marmaracık | yerlesimler.js:79 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Mekece | yerlesimler.js:83 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Mihaliç (Karacabey) | yerlesimler.js:1731 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Mudanya | yerlesimler.js:110 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Pazaryeri | yerlesimler.js:150 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Pelekanon (Eskihisar) | yerlesimler.js:1725 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Samandıra | yerlesimler.js:1728 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Soma | yerlesimler_ek29.js:1126 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Söğüt | yerlesimler.js:147 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Truva yöresi (Tevfikiye) | yerlesimler_ek29.js:1111 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Ulubat | yerlesimler.js:100 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Yalova | yerlesimler.js:112 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Yarhisar | yerlesimler.js:1708 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Yenişehir (Bursa) | yerlesimler.js:69 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Çanakkale | yerlesimler.js:162 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Çanakkale yöresi (Kepez) | yerlesimler_ek29.js:1108 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| Üsküdar | yerlesimler_ek29.js:368 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| İmralı Adası | yerlesimler.js:106 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| İnegöl | yerlesimler.js:71 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| İzmit | yerlesimler.js:158 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |
| İznik | yerlesimler.js:157 | 1402-07-28 | 1403-09-01 | fetret-isa (kısmî) | BÖL |

## `sardinya` → sardinya-piyemonte (39 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Alghero | yerlesimler_avrupa.js:699 | 1720-02-24 | 1861-03-17 | sardinya-piyemonte (kısmî) | BÖL |
| Kalyari (Cagliari) | yerlesimler.js:1881 | 1720-02-24 | 1861-03-17 | sardinya-piyemonte (kısmî) | BÖL |
| Oristano | yerlesimler_avrupa.js:698 | 1720-02-24 | 1861-03-17 | sardinya-piyemonte (kısmî) | BÖL |
| Sasari (Sassari) | yerlesimler.js:1882 | 1720-02-24 | 1861-03-17 | sardinya-piyemonte (kısmî) | BÖL |
| Annemasse | yerlesimler_a78_avrupa.js:136 | 1720-08-02 | 1860-06-14 | sardinya-piyemonte | TEK |
| Aosta | yerlesimler_a78_avrupa.js:119 | 1720-08-02 | 1861-03-17 | sardinya-piyemonte | TEK |
| Bourg-Saint-Maurice | yerlesimler_a78_avrupa.js:122 | 1720-08-02 | 1860-06-14 | sardinya-piyemonte | TEK |
| Chambéry | yerlesimler_avrupa.js:245 | 1720-08-02 | 1792-11-27 | sardinya-piyemonte | TEK |
| Nice | yerlesimler_avrupa.js:244 | 1720-08-02 | 1793-01-31 | sardinya-piyemonte | TEK |
| Thonon | yerlesimler_a78_avrupa.js:133 | 1720-08-02 | 1860-06-14 | sardinya-piyemonte | TEK |
| Torino | yerlesimler.js:1245 | 1720-08-02 | 1798-12-09 | sardinya-piyemonte | TEK |
| Torino | yerlesimler.js:1245 | 1814-05-20 | 1861-03-17 | sardinya-piyemonte | TEK |
| Nice | yerlesimler_avrupa.js:244 | 1814-05-30 | 1860-06-14 | sardinya-piyemonte | TEK |
| Cenova | yerlesimler.js:1246 | 1815-06-09 | 1861-03-17 | sardinya-piyemonte | TEK |
| Chambéry | yerlesimler_avrupa.js:245 | 1815-11-20 | 1860-06-14 | sardinya-piyemonte | TEK |
| Bergamo | yerlesimler_avrupa.js:475 | 1859-06-04 | 1861-03-17 | sardinya-piyemonte | TEK |
| Bormio | yerlesimler_avrupa.js:483 | 1859-06-04 | 1861-03-17 | sardinya-piyemonte | TEK |
| Brescia | yerlesimler_avrupa.js:474 | 1859-06-04 | 1861-03-17 | sardinya-piyemonte | TEK |
| Chiavenna | yerlesimler_avrupa.js:482 | 1859-06-04 | 1861-03-17 | sardinya-piyemonte | TEK |
| Como | yerlesimler_once1281_avrupa.js:22 | 1859-06-04 | 1861-03-17 | sardinya-piyemonte | TEK |
| Milano | yerlesimler.js:1230 | 1859-06-04 | 1861-03-17 | sardinya-piyemonte | TEK |
| Sondrio | yerlesimler_avrupa.js:481 | 1859-06-04 | 1861-03-17 | sardinya-piyemonte | TEK |
| Bolonya | yerlesimler_avrupa.js:510 | 1860-03-18 | 1861-03-17 | sardinya-piyemonte | TEK |
| Ferrara | yerlesimler_avrupa.js:506 | 1860-03-18 | 1861-03-17 | sardinya-piyemonte | TEK |
| Guastalla | yerlesimler_avrupa.js:677 | 1860-03-18 | 1861-03-17 | sardinya-piyemonte | TEK |
| Modena | yerlesimler_avrupa.js:507 | 1860-03-18 | 1861-03-17 | sardinya-piyemonte | TEK |
| Parma | yerlesimler_avrupa.js:502 | 1860-03-18 | 1861-03-17 | sardinya-piyemonte | TEK |
| Piacenza | yerlesimler_avrupa.js:504 | 1860-03-18 | 1861-03-17 | sardinya-piyemonte | TEK |
| Ravenna | yerlesimler_avrupa.js:512 | 1860-03-18 | 1861-03-17 | sardinya-piyemonte | TEK |
| Rimini | yerlesimler_avrupa.js:513 | 1860-03-18 | 1861-03-17 | sardinya-piyemonte | TEK |
| Elba | yerlesimler.js:1895 | 1860-03-22 | 1861-03-17 | sardinya-piyemonte | TEK |
| Floransa | yerlesimler.js:1244 | 1860-03-22 | 1861-03-17 | sardinya-piyemonte | TEK |
| Lucca | yerlesimler_avrupa.js:527 | 1860-03-22 | 1861-03-17 | sardinya-piyemonte | TEK |
| Orbetello | yerlesimler_avrupa.js:667 | 1860-03-22 | 1861-03-17 | sardinya-piyemonte | TEK |
| Piombino | yerlesimler_avrupa.js:661 | 1860-03-22 | 1861-03-17 | sardinya-piyemonte | TEK |
| Pisa | yerlesimler_avrupa.js:523 | 1860-03-22 | 1861-03-17 | sardinya-piyemonte | TEK |
| Siena | yerlesimler_avrupa.js:517 | 1860-03-22 | 1861-03-17 | sardinya-piyemonte | TEK |
| Perugia | yerlesimler_avrupa.js:515 | 1860-09-14 | 1861-03-17 | sardinya-piyemonte | TEK |
| Ancona | yerlesimler_avrupa.js:514 | 1860-09-29 | 1861-03-17 | sardinya-piyemonte | TEK |

## `sirbistan` → sirbistan-nemanjic, sirp-despotlugu, sirbistan-prensligi, sirbistan-kralligi (35 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Kotor (Cattaro) | yerlesimler_ek.js:177 | 1189-01-01 | 1371-01-01 | sirbistan-nemanjic | TEK |
| Alacahisar (Kruševac) | yerlesimler_serhat.js:153 | 1281-01-01 | 1428-01-01 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Belgrad | yerlesimler.js:571 | 1281-01-01 | 1355-12-20 | sirbistan-nemanjic | TEK |
| Belgrad Kalesi (Kalemegdan) | yerlesimler.js:573 | 1281-01-01 | 1427-01-01 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Kragujevac | yerlesimler.js:2502 | 1281-01-01 | 1439-08-27 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Niş | yerlesimler.js:460 | 1281-01-01 | 1386-01-01 | sirbistan-nemanjic | TEK |
| Pasarofça (Požarevac) | yerlesimler_ek29.js:756 | 1281-01-01 | 1439-08-27 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Peç (Pejë) | ? | 1281-01-01 | 1456-01-01 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Podgorica | yerlesimler.js:2516 | 1281-01-01 | 1457-01-01 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Prizren | yerlesimler_ek_bosluk.js:60 | 1281-01-01 | 1455-06-20 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Rudnik | yerlesimler_ek29.js:771 | 1281-01-01 | 1439-08-27 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Semendire | yerlesimler.js:570 | 1281-01-01 | 1439-08-27 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Valjevo | yerlesimler_ek29.js:761 | 1281-01-01 | 1439-08-27 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Yagodina (Jagodina) | yerlesimler_ek29.js:558 | 1281-01-01 | 1439-08-27 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Yenipazar (Novi Pazar) | yerlesimler.js:1607 | 1281-01-01 | 1455-06-01 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Çaçak | yerlesimler.js:2503 | 1281-01-01 | 1439-08-27 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Ćuprija | yerlesimler_ek29.js:766 | 1281-01-01 | 1439-08-27 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Şehirköy (Pirot) | yerlesimler_serhat.js:140 | 1281-01-01 | 1386-01-01 | sirbistan-nemanjic | TEK |
| Üsküp | yerlesimler.js:493 | 1282-01-01 | 1392-01-06 | sirbistan-nemanjic | TEK |
| Debre (Dibra) | yerlesimler_ok104.js:179 | 1284-01-01 | 1395-01-01 | sirbistan-nemanjic | TEK |
| Köprülü (Veles) | yerlesimler_ok107.js:394 | 1330-01-01 | 1371-09-26 | sirbistan-nemanjic | TEK |
| İştip (Štip) | yerlesimler_ok107.js:407 | 1330-01-01 | 1371-09-26 | sirbistan-nemanjic | TEK |
| Doyran | yerlesimler_ok107.js:435 | 1334-01-01 | 1371-09-26 | sirbistan-nemanjic | TEK |
| Manastır | yerlesimler.js:494 | 1334-01-01 | 1385-01-01 | sirbistan-nemanjic | TEK |
| Ohri | yerlesimler.js:495 | 1334-01-01 | 1385-01-01 | sirbistan-nemanjic | TEK |
| Ustrumca (Strumica) | yerlesimler_ok107.js:421 | 1334-01-01 | 1371-09-26 | sirbistan-nemanjic | TEK |
| Priştine | yerlesimler.js:569 | 1342-01-01 | 1455-06-01 | sirbistan-nemanjic (kısmî), sirp-despotlugu (kısmî) | BÖL |
| Drama | yerlesimler.js:445 | 1345-01-01 | 1371-11-01 | sirbistan-nemanjic | TEK |
| Gevgili (Gevgelija) | yerlesimler_ok107.js:449 | 1345-01-01 | 1383-09-19 | sirbistan-nemanjic | TEK |
| Karaferye (Veria) | yerlesimler_ok107.js:475 | 1345-01-01 | 1387-05-08 | sirbistan-nemanjic | TEK |
| Kılkış (Avrathisar) | yerlesimler_ok107.js:463 | 1345-01-01 | 1383-09-19 | sirbistan-nemanjic | TEK |
| Nevrokop (Gotse Delçev) | yerlesimler.js:442 | 1345-01-01 | 1374-01-01 | sirbistan-nemanjic | TEK |
| Petriç | yerlesimler.js:439 | 1345-01-01 | 1374-01-01 | sirbistan-nemanjic | TEK |
| Vodina (Edessa) | yerlesimler_ok107.js:469 | 1345-01-01 | 1387-01-01 | sirbistan-nemanjic | TEK |
| Serez | yerlesimler.js:491 | 1345-09-25 | 1371-11-01 | sirbistan-nemanjic | TEK |

## `yemen` → yemen-zeydi (28 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Ebha (Asir) | yerlesimler.js:957 | 1281-01-01 | 1871-01-01 | yemen-zeydi | TEK |
| Ferasan (Farasan) | yerlesimler.js:1902 | 1281-01-01 | 1538-08-03 | yemen-zeydi | TEK |
| Kemeran (Kamaran) | yerlesimler.js:1903 | 1281-01-01 | 1538-08-03 | yemen-zeydi | TEK |
| Kevkebân | yerlesimler_ok104.js:242 | 1281-01-01 | 1872-04-01 | yemen-zeydi | TEK |
| Moha | yerlesimler.js:940 | 1281-01-01 | 1538-08-03 | yemen-zeydi | TEK |
| Sa'de | yerlesimler_ok104.js:219 | 1281-01-01 | 1872-04-01 | yemen-zeydi | TEK |
| Sana | yerlesimler.js:948 | 1281-01-01 | 1547-01-01 | yemen-zeydi | TEK |
| Şehâre | yerlesimler_ok104.js:233 | 1281-01-01 | 1872-04-01 | yemen-zeydi | TEK |
| Hudeyde | yerlesimler.js:956 | 1490-01-01 | 1849-01-01 | yemen-zeydi | TEK |
| Taiz | yerlesimler.js:955 | 1517-04-15 | 1547-02-01 | yemen-zeydi | TEK |
| Taiz | yerlesimler.js:955 | 1629-01-01 | 1872-04-01 | yemen-zeydi | TEK |
| Aden | yerlesimler.js:933 | 1635-01-01 | 1839-01-19 | yemen-zeydi | TEK |
| Ferasan (Farasan) | yerlesimler.js:1902 | 1635-01-01 | 1849-05-01 | yemen-zeydi | TEK |
| Kemeran (Kamaran) | yerlesimler.js:1903 | 1635-01-01 | 1849-05-01 | yemen-zeydi | TEK |
| Lahic (el-Havta) | ? | 1635-01-01 | 1729-01-01 | yemen-zeydi | TEK |
| Sana | yerlesimler.js:948 | 1635-01-01 | 1872-04-01 | yemen-zeydi | TEK |
| Zebîd | yerlesimler.js:932 | 1635-01-01 | 1849-01-01 | yemen-zeydi | TEK |
| Moha | yerlesimler.js:940 | 1635-10-22 | 1849-01-01 | yemen-zeydi | TEK |
| Sana | yerlesimler.js:948 | 1905-04-01 | 1905-09-01 | yemen-zeydi | TEK |
| Ferasan (Farasan) | yerlesimler.js:1902 | 1918-10-30 | 1923-10-29 | yemen-zeydi | TEK |
| Hudeyde | yerlesimler.js:956 | 1918-10-30 | 1923-10-29 | yemen-zeydi | TEK |
| Kevkebân | yerlesimler_ok104.js:242 | 1918-10-30 | 1923-10-29 | yemen-zeydi | TEK |
| Moha | yerlesimler.js:940 | 1918-10-30 | 1923-10-29 | yemen-zeydi | TEK |
| Sa'de | yerlesimler_ok104.js:219 | 1918-10-30 | 1923-10-29 | yemen-zeydi | TEK |
| Sana | yerlesimler.js:948 | 1918-10-30 | 1923-10-29 | yemen-zeydi | TEK |
| Taiz | yerlesimler.js:955 | 1918-10-30 | 1923-10-29 | yemen-zeydi | TEK |
| Zebîd | yerlesimler.js:932 | 1918-10-30 | 1923-10-29 | yemen-zeydi | TEK |
| Şehâre | yerlesimler_ok104.js:233 | 1918-10-30 | 1923-10-29 | yemen-zeydi | TEK |

## `ceneviz` → cenova (22 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Cenova | yerlesimler.js:1246 | 1099-01-01 | 1281-01-01 | cenova | TEK |
| Alghero | yerlesimler_avrupa.js:699 | 1281-01-01 | 1354-01-01 | cenova | TEK |
| Amasra | yerlesimler.js:341 | 1281-01-01 | 1459-06-20 | cenova | TEK |
| Ayacyo (Ajaccio) | yerlesimler.js:1884 | 1281-01-01 | 1768-05-15 | cenova | TEK |
| Azak | yerlesimler.js:741 | 1281-01-01 | 1475-06-06 | cenova | TEK |
| Bastia (Korsika) | yerlesimler.js:1883 | 1281-01-01 | 1768-05-15 | cenova | TEK |
| Cenova | yerlesimler.js:1246 | 1281-01-01 | 1797-06-14 | cenova | TEK |
| Fornoz (Fourni) | yerlesimler.js:1823 | 1281-01-01 | 1521-01-01 | cenova | TEK |
| Kefe | yerlesimler.js:719 | 1281-01-01 | 1475-06-06 | cenova | TEK |
| Kerç | yerlesimler.js:721 | 1281-01-01 | 1475-06-06 | cenova | TEK |
| Sasari (Sassari) | yerlesimler.js:1882 | 1281-01-01 | 1324-01-01 | cenova | TEK |
| Taman | yerlesimler.js:742 | 1281-01-01 | 1479-01-01 | cenova | TEK |
| Taşoz | yerlesimler.js:697 | 1281-01-01 | 1455-01-01 | cenova | TEK |
| İpsara (Psara) | yerlesimler.js:1826 | 1281-01-01 | 1566-04-14 | cenova | TEK |
| Sakız | yerlesimler.js:666 | 1304-01-01 | 1329-01-01 | cenova | TEK |
| Sisam | yerlesimler.js:700 | 1304-01-01 | 1329-01-01 | cenova | TEK |
| Semadirek | yerlesimler.js:696 | 1335-01-01 | 1355-01-01 | cenova | TEK |
| Balaklava (Cembalo) | yerlesimler_kirim.js:171 | 1357-01-01 | 1475-06-06 | cenova | TEK |
| Sudak (Suğdak) | yerlesimler_kirim.js:163 | 1365-01-01 | 1475-06-06 | cenova | TEK |
| Aluşta | yerlesimler_kirim.js:185 | 1380-01-01 | 1475-06-06 | cenova | TEK |
| Yalta | yerlesimler_kirim.js:180 | 1380-01-01 | 1475-06-06 | cenova | TEK |
| Tabarka | yerlesimler_afrika.js:366 | 1544-01-01 | 1741-06-12 | cenova | TEK |

## `suud` → suud-birinci, suud-ikinci, suud-ucuncu, suudi-arabistan (21 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Buraydâ (Kasîm) | yerlesimler.js:2286 | 1744-01-01 | 1818-09-09 | suud-birinci | TEK |
| Dir'iye (Necid) | yerlesimler.js:918 | 1744-01-01 | 1818-09-09 | suud-birinci | TEK |
| Necid içi | yerlesimler.js:1417 | 1744-01-01 | 1818-09-09 | suud-birinci | TEK |
| Riyad | yerlesimler.js:1203 | 1744-01-01 | 1818-09-09 | suud-birinci | TEK |
| Uneyze | yerlesimler.js:2287 | 1744-01-01 | 1818-09-09 | suud-birinci | TEK |
| Şakrâ | yerlesimler.js:2288 | 1744-01-01 | 1818-09-09 | suud-birinci | TEK |
| Hâil | yerlesimler.js:1323 | 1779-01-01 | 1818-09-01 | suud-birinci | TEK |
| Nefud çölü | yerlesimler.js:1407 | 1779-01-01 | 1818-09-09 | suud-birinci | TEK |
| Cübeyl | yerlesimler.js:2285 | 1795-04-01 | 1818-09-09 | suud-birinci | TEK |
| Katîf | yerlesimler.js:2271 | 1795-04-01 | 1818-09-09 | suud-birinci | TEK |
| Lahsa | yerlesimler.js:894 | 1795-04-01 | 1818-09-09 | suud-birinci | TEK |
| Ukayr (Uceyr) | yerlesimler.js:2272 | 1795-04-01 | 1818-09-09 | suud-birinci | TEK |
| Tâif | yerlesimler.js:1628 | 1803-02-01 | 1813-05-02 | suud-birinci | TEK |
| Mekke | yerlesimler.js:904 | 1803-04-30 | 1803-08-06 | suud-birinci | TEK |
| Kunfüze (el-Kunfüze) | yerlesimler.js:959 | 1804-01-01 | 1814-03-01 | suud-birinci | TEK |
| Hayber | yerlesimler_ok101.js:103 | 1805-06-01 | 1812-12-03 | suud-birinci | TEK |
| Medine | yerlesimler.js:907 | 1805-06-01 | 1812-12-03 | suud-birinci | TEK |
| Bedir | yerlesimler_ok107.js:181 | 1805-07-20 | 1811-11-01 | suud-birinci | TEK |
| Yenbu | yerlesimler.js:913 | 1805-07-20 | 1811-11-01 | suud-birinci | TEK |
| Mekke | yerlesimler.js:904 | 1806-01-01 | 1813-01-23 | suud-birinci | TEK |
| Kunfüze (el-Kunfüze) | yerlesimler.js:959 | 1814-05-01 | 1815-03-01 | suud-birinci | TEK |

## `sovalye` → rodos-sovalyeleri (18 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Herke (Halki) | yerlesimler.js:1819 | 1310-08-15 | 1522-12-21 | rodos-sovalyeleri | TEK |
| Kelemez (Kalimnos) | yerlesimler.js:1814 | 1310-08-15 | 1523-01-05 | rodos-sovalyeleri | TEK |
| Lindos | yerlesimler.js:1938 | 1310-08-15 | 1522-12-21 | rodos-sovalyeleri | TEK |
| Rodos | yerlesimler.js:665 | 1310-08-15 | 1522-12-21 | rodos-sovalyeleri | TEK |
| Sömbeki (Simi) | yerlesimler.js:1816 | 1310-08-15 | 1522-12-21 | rodos-sovalyeleri | TEK |
| İleryoz (Leros) | yerlesimler.js:1815 | 1310-08-15 | 1523-01-05 | rodos-sovalyeleri | TEK |
| İlyaki (Tilos) | yerlesimler.js:1818 | 1310-08-15 | 1522-12-21 | rodos-sovalyeleri | TEK |
| İncirli (Nisiros) | yerlesimler.js:1817 | 1310-08-15 | 1522-12-21 | rodos-sovalyeleri | TEK |
| İstanköy | yerlesimler.js:701 | 1315-01-01 | 1523-01-05 | rodos-sovalyeleri | TEK |
| Aydın | yerlesimler.js:180 | 1344-10-28 | 1390-01-01 | rodos-sovalyeleri | TEK |
| Çeşme | yerlesimler.js:177 | 1344-10-28 | 1402-07-28 | rodos-sovalyeleri | TEK |
| İzmir | yerlesimler.js:173 | 1344-10-28 | 1402-12-01 | rodos-sovalyeleri | TEK |
| Bodrum | yerlesimler.js:132 | 1402-01-01 | 1523-01-05 | rodos-sovalyeleri | TEK |
| Batnoz (Patmos) | yerlesimler.js:1820 | 1453-05-29 | 1522-12-21 | rodos-sovalyeleri | TEK |
| Gozo (Cittadella, Rabat) | yerlesimler_avrupa.js:697 | 1530-03-24 | 1798-06-12 | rodos-sovalyeleri | TEK |
| Malta | yerlesimler.js:1197 | 1530-03-24 | 1798-06-12 | rodos-sovalyeleri | TEK |
| Mdina (Città Notabile) | yerlesimler_avrupa.js:696 | 1530-03-24 | 1798-06-12 | rodos-sovalyeleri | TEK |
| Trablus | yerlesimler.js:1014 | 1530-03-24 | 1551-08-15 | rodos-sovalyeleri | TEK |

## `hicaz` → hicaz-kralligi (16 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Hurma (Tâif doğusu) | yerlesimler_nokta_ortadogu_0917.js:42 | 1916-06-10 | 1919-05-26 | hicaz-kralligi | TEK |
| Mekke | yerlesimler.js:904 | 1916-06-10 | 1923-10-29 | hicaz-kralligi | TEK |
| Türabe | yerlesimler_nokta_ortadogu_0917.js:37 | 1916-06-10 | 1919-05-26 | hicaz-kralligi | TEK |
| Cidde | yerlesimler.js:910 | 1916-06-16 | 1923-10-29 | hicaz-kralligi | TEK |
| Râbiğ | yerlesimler_ok107.js:195 | 1916-06-16 | 1923-10-29 | hicaz-kralligi | TEK |
| Bedir | yerlesimler_ok107.js:181 | 1916-07-27 | 1923-10-29 | hicaz-kralligi | TEK |
| Yenbu | yerlesimler.js:913 | 1916-07-27 | 1923-10-29 | hicaz-kralligi | TEK |
| Tâif | yerlesimler.js:1628 | 1916-09-17 | 1923-10-29 | hicaz-kralligi | TEK |
| Medâin-i Sâlih (el-Hicr) | yerlesimler_ok101.js:87 | 1918-01-01 | 1923-10-29 | hicaz-kralligi | TEK |
| Tebük | yerlesimler.js:920 | 1918-01-01 | 1923-10-29 | hicaz-kralligi | TEK |
| el-Ulâ | yerlesimler_ok101.js:80 | 1918-01-01 | 1923-10-29 | hicaz-kralligi | TEK |
| el-Vech | yerlesimler_ok101.js:95 | 1918-01-01 | 1923-10-29 | hicaz-kralligi | TEK |
| Maan | yerlesimler.js:921 | 1918-09-27 | 1923-10-29 | hicaz-kralligi | TEK |
| Hayber | yerlesimler_ok101.js:103 | 1919-01-10 | 1923-10-29 | hicaz-kralligi | TEK |
| Medine | yerlesimler.js:907 | 1919-01-10 | 1923-10-29 | hicaz-kralligi | TEK |
| Kunfüze (el-Kunfüze) | yerlesimler.js:959 | 1919-05-01 | 1923-10-29 | hicaz-kralligi | TEK |

## `milanoduka` → milano-dukaligi (15 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Milano | yerlesimler.js:1230 | 1097-01-01 | 1281-01-01 | milano-dukaligi | TEK |
| Milano | yerlesimler.js:1230 | 1281-01-01 | 1311-07-13 | milano-dukaligi | TEK |
| Bellinzona | yerlesimler_avrupa.js:647 | 1395-05-11 | 1500-04-14 | milano-dukaligi | TEK |
| Bergamo | yerlesimler_avrupa.js:475 | 1395-05-11 | 1428-01-01 | milano-dukaligi | TEK |
| Bormio | yerlesimler_avrupa.js:483 | 1395-05-11 | 1512-06-24 | milano-dukaligi | TEK |
| Brescia | yerlesimler_avrupa.js:474 | 1395-05-11 | 1426-01-01 | milano-dukaligi | TEK |
| Chiavenna | yerlesimler_avrupa.js:482 | 1395-05-11 | 1512-06-24 | milano-dukaligi | TEK |
| Como | yerlesimler_once1281_avrupa.js:22 | 1395-05-11 | 1535-11-01 | milano-dukaligi | TEK |
| Locarno | yerlesimler_avrupa.js:653 | 1395-05-11 | 1503-01-01 | milano-dukaligi | TEK |
| Lugano | yerlesimler_avrupa.js:640 | 1395-05-11 | 1512-01-01 | milano-dukaligi | TEK |
| Milano | yerlesimler.js:1230 | 1395-05-11 | 1535-11-01 | milano-dukaligi | TEK |
| Parma | yerlesimler_avrupa.js:502 | 1395-05-11 | 1512-06-24 | milano-dukaligi | TEK |
| Piacenza | yerlesimler_avrupa.js:504 | 1395-05-11 | 1512-06-24 | milano-dukaligi | TEK |
| Sondrio | yerlesimler_avrupa.js:481 | 1395-05-11 | 1512-06-24 | milano-dukaligi | TEK |
| Verona | yerlesimler_avrupa.js:472 | 1395-05-11 | 1404-04-08 | milano-dukaligi | TEK |

## `bosna` → bosna-kralligi (11 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Foça (Foča) | yerlesimler.js:2523 | 1281-01-01 | 1465-01-01 | bosna-kralligi (kısmî) | BÖL |
| Koniçe (Konjic) | yerlesimler_ek2.js:37 | 1281-01-01 | 1463-06-01 | bosna-kralligi (kısmî) | BÖL |
| Livno (İhlevne) | yerlesimler.js:2524 | 1281-01-01 | 1469-01-01 | bosna-kralligi (kısmî) | BÖL |
| Srebrenik | yerlesimler.js:2526 | 1281-01-01 | 1463-06-01 | bosna-kralligi (kısmî) | BÖL |
| Trebinye | yerlesimler_seyrek.js:269 | 1281-01-01 | 1448-01-01 | bosna-kralligi | TEK |
| Visoko | yerlesimler_ek2.js:51 | 1281-01-01 | 1448-01-01 | bosna-kralligi | TEK |
| Vişegrad | yerlesimler_seyrek.js:282 | 1281-01-01 | 1463-06-01 | bosna-kralligi (kısmî) | BÖL |
| Yayça (Jajce) | yerlesimler.js:2525 | 1281-01-01 | 1463-06-01 | bosna-kralligi (kısmî) | BÖL |
| İzvornik (Zvornik) | yerlesimler.js:2522 | 1281-01-01 | 1460-01-01 | bosna-kralligi | TEK |
| Herseknovi (Herceg Novi) | yerlesimler_ek.js:245 | 1382-01-01 | 1448-01-01 | bosna-kralligi | TEK |
| Travnik | yerlesimler.js:2521 | 1463-01-01 | 1463-06-01 | bosna-kralligi (kısmî) | BÖL |

## `lusignan` → kibris-krallik (6 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Lefkoşa | yerlesimler.js:686 | 1192-01-01 | 1489-02-26 | kibris-krallik | TEK |
| Baf (Paphos) | yerlesimler.js:1926 | 1281-01-01 | 1489-02-26 | kibris-krallik | TEK |
| Girne (Kyrenia) | yerlesimler.js:1925 | 1281-01-01 | 1489-02-26 | kibris-krallik | TEK |
| Limasol | yerlesimler.js:1927 | 1281-01-01 | 1489-02-26 | kibris-krallik | TEK |
| Magosa | yerlesimler.js:687 | 1281-01-01 | 1489-02-26 | kibris-krallik | TEK |
| Tuzla (Larnaka) | yerlesimler.js:1928 | 1281-01-01 | 1489-02-26 | kibris-krallik | TEK |

## `atinadukaligi` → atina-dukaligi (4 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Atina | yerlesimler.js:504 | 1204-01-01 | 1456-06-04 | atina-dukaligi | TEK |
| Livadya | yerlesimler.js:561 | 1205-01-01 | 1456-06-04 | atina-dukaligi | TEK |
| İstefe (Tebai) | yerlesimler.js:560 | 1205-01-01 | 1456-06-04 | atina-dukaligi | TEK |
| Kulluk (Salamis) | yerlesimler.js:1833 | 1281-01-01 | 1456-06-04 | atina-dukaligi | TEK |

## `bulgaristan` → bulgar-carligi, bulgaristan-prensligi, bulgaristan-kralligi, bulgaristan-halk, bulgaristan-cumhuriyeti (4 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Babadağı (Babadag) | yerlesimler_ek29.js:487 | 1359-01-01 | 1393-09-01 | bulgar-carligi | TEK |
| Mangalya (Mangalia) | yerlesimler_ek29.js:503 | 1359-01-01 | 1393-09-01 | bulgar-carligi | TEK |
| Tulça (Tulcea) | yerlesimler_ek29.js:494 | 1359-01-01 | 1393-09-01 | bulgar-carligi | TEK |
| İshakçı (Isaccea) | yerlesimler_ek29.js:538 | 1359-01-01 | 1393-09-01 | bulgar-carligi | TEK |

## `arnavutluk` → arnavutluk-iskenderbey, arnavutluk-bagimsiz, arnavutluk-halk-cumhuriyeti, arnavutluk-cumhuriyeti, arnavutluk-italyan-koruma, arnavutluk-alman-himayesi (2 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Akçahisar (Kruja) | yerlesimler.js:564 | 1443-01-01 | 1478-06-16 | arnavutluk-iskenderbey | TEK |
| Mat (Mati) | yerlesimler_ok104.js:118 | 1443-01-01 | 1478-06-15 | arnavutluk-iskenderbey | TEK |

## `kaffa` → kaffa-kralligi (2 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Bonga (Kaffa) | yerlesimler_afrika.js:1024 | 1281-01-01 | 1897-10-01 | kaffa-kralligi (kısmî) | BÖL |
| Cimma (Jiren) | yerlesimler_afrika.js:1027 | 1281-01-01 | 1830-01-01 | kaffa-kralligi (kısmî) | BÖL |

## `cimma` → cimma-sultanligi (1 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Cimma (Jiren) | yerlesimler_afrika.js:1027 | 1830-01-01 | 1923-10-29 | cimma-sultanligi | TEK |

## `vollayta` → vollayta-kralligi (1 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Sodo (Vollayta) | yerlesimler_afrika.js:1030 | 1281-01-01 | 1894-01-01 | vollayta-kralligi | TEK |

## `sidamo` → sidamo-kralliklari (1 dönem)

| yerleşim | dosya:satır | f | t | aday künye(ler) | sınıf |
|---|---|---|---|---|---|
| Yirgalem (Sidamo) | yerlesimler_afrika.js:1033 | 1281-01-01 | 1897-01-01 | sidamo-kralliklari | TEK |
