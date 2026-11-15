# BOLGE-ortaasya-1-kunye-1115 — Orta Asya künye envanteri (UMIT, 15 Kasım 2026)

Ağaç: dal `umit-1115-bolge-ortaasya` (origin/main 8fb10bdf1 tabanı). Salt-okunur ölçüm; bu belge dışında veri değiştirilmedi (adım 7'ye bak).

## Yöntem ve sınırlar
- Bölge tanımı: `devletler.js` `bolge: orta-asya` = **83 künye** (KAPSAM-OLCUM-1114'ün çoğunluk-bölge yöntemi 77 vermişti; fark: o ölçüm yerleşim çoğunluğuna bakar, bu belge künyenin kendi `bolge:` alanına). Bölge kutusu (yerleşim için): 46-88°D, 35-56°K → 244 yerleşim; ayrıca `s:` sahibi bu 83 künyeden biri olan kutu-dışı noktalar eklenince 390.
- "Yerleşimsiz" = hiçbir yerleşimin `s:` penceresinde sahip olmayan künye (bütün dünya taranır): **22** (brifle uyumlu).
- Madde sayısı = `data/olaylar*.js` + `data/kronoloji*.js` (295 dosya, 18734 madde) içinde `taraflar:` (gömülü ∪ `olay_taraf.js`) ile künyeyi adlandıran madde. Künye-içi `kronoloji:` listesi ayrı sütun.
- Renk: künyenin `harita:` anahtarı (yoksa `id`) `renkler.BOYALAR`'da: **83/83 tanımlı** (BOYALAR 2246 anahtar).
- Atlas kaynak sayılmaz: bu belgedeki f/t değerleri atlasın kendi kaydıdır; doğrulama adım 2'dedir.

## Sayısal özet
| ölçü | değer |
|---|---|
| `bolge: orta-asya` künye | 83 |
| yerleşimsiz künye (hiçbir `s:` penceresinde sahip değil) | 22 |
| `taraflar:` ile madde bağı sıfır olan künye | 3 (xianbei, kusan-sasani, transkaspi-hukumeti) |
| 1281+ ömürlü künye (t ≥ 1281 veya açık) | 28 |
| 1281+ ömürlü, madde ≤ 3 | 14 |
| renksiz (BOYALAR'da yok) | 0 |
| `tur:` alanı boş künye | 2 (buhara-halk-cumhuriyeti, harezm-halk-cumhuriyeti) |

## Tam envanter (83 künye, `f` sırasıyla)
`yer` = künyenin sahibi olduğu farklı yerleşim sayısı (kutu+kutu dışı, `s:` penceresi); `mad` = `taraflar:` bağlı madde; `kr` = künye-içi `kronoloji:` öğesi; `harita` = renk anahtarı (— = `id` kullanılıyor).

| id | ad | tür | f | t | harita | yer | mad | kr |
|---|---|---|---|---|---|---|---|---|
| kuca | Kuça (Qiuci) Krallığı | krallik | -0064-01-01 | 0649-01-19 | — | 1 | 8 | 2 |
| fergana-dayuan | Fergana (Dayuan) Krallığı | krallik | -0103-01-01 | 0649-01-01 | — | 2 | 4 | 2 |
| hunnu-xiongnu | Xiongnu (Hunnu) Konfederasyonu | konfederasyon | -0208-01-01 | 0155-01-01 | — | 0 | 10 | 6 |
| greko-baktria | Greko-Baktriya Krallığı | krallik | -0249-01-01 | -0124-01-01 | — | 1 | 4 | 7 |
| anau-ia-kultur | Anau IA (Namazga öncesi/Meana evresi, Kopet Dağ) | kultur | -4299-01-01 | -3819-01-01 | — | 1 | 2 | 2 |
| jeitun-kultur | Jeitun Kültürü (Kopet Dağ, Türkmenistan) | kultur | -6098-01-01 | -5926-01-01 | — | 1 | 2 | 2 |
| kusan | Kuşan İmparatorluğu | imparatorluk | 0050-01-01 | 0350-01-01 | — | 1 | 4 | 4 |
| xianbei | Xianbei Konfederasyonu (Tanşihuai) | konfederasyon | 0155-01-01 | 0235-01-01 | — | 0 | 0 | 6 |
| kusan-sasani | Kuşano-Sasani Krallığı (Kuşanşahlar) | vasal-krallik | 0230-01-01 | 0360-01-01 | — | 0 | 0 | 5 |
| hivite-afrigid | Hârezm Afrigîleri | hanedanlik | 0305-01-01 | 0995-02-05 | — | 0 | 5 | 5 |
| afrigoglu-harezm | Afrigoğulları (Hârizmşahlar, Kât) | hanedanlik | 0305-01-01 | 0995-01-01 | — | 1 | 5 | 2 |
| kidarit | Kidarit Hunlar | krallik | 0390-01-01 | 0467-01-01 | — | 0 | 2 | 5 |
| rouran | Rouran Kağanlığı | kaganlik | 0402-01-01 | 0552-01-01 | — | 0 | 6 | 6 |
| eftalit | Eftalit (Beyaz Hun) Krallığı | krallik | 0457-01-01 | 0560-01-01 | — | 4 | 16 | 5 |
| khotan | Hotan (Yutian) Krallığı | krallik | 0500-01-01 | 1006-01-01 | — | 1 | 12 | 2 |
| kasgar-shule | Kâşgar (Shule) Krallığı | krallik | 0500-01-01 | 0649-01-19 | — | 1 | 8 | 2 |
| cac-tudun | Çaç (Taşkent) Tudunluğu | sehir-devleti | 0500-01-01 | 0751-01-01 | — | 0 | 5 | 2 |
| buhara-hudat | Buhara Hudâtları (Buhar-hudât) | sehir-devleti | 0500-01-01 | 0709-01-01 | — | 1 | 9 | 2 |
| yanqi-karashahr | Yanqi (Agni, Karaşar) Krallığı | krallik | 0500-01-01 | 0644-11-05 | — | 1 | 4 | 2 |
| gaochang | Gaochang (Turfan) Krallığı - Qu hanedanı | krallik | 0501-01-01 | 0640-08-30 | — | 1 | 10 | 8 |
| gokturk-1 | Birinci Göktürk Kağanlığı | kaganlik | 0552-01-01 | 0582-01-01 | — | 2 | 25 | 6 |
| dogu-gokturk | Doğu Göktürk Kağanlığı (I) | kaganlik | 0582-01-01 | 0630-01-01 | — | 1 | 10 | 4 |
| bati-gokturk | Batı Göktürk Kağanlığı | kaganlik | 0582-01-01 | 0659-01-01 | — | 3 | 14 | 3 |
| xueyantuo-kaganligi | Xueyantuo (Sir-Tardus) Kaganligi | kaganlik | 0627-01-01 | 0646-01-01 | — | 1 | 4 | 6 |
| xueyantuo | Xueyantuo (Sir-Tarduş) Kağanlığı | kaganlik | 0628-01-01 | 0646-10-29 | — | 1 | 5 | 2 |
| tohar-yabgu | Toharistan Yabguluğu (Batı Göktürk vasalı) | yabgu-devleti | 0630-01-01 | 0759-01-01 | — | 1 | 8 | 2 |
| usrusana-afsin | Üsrûşana Afşinleri | beylik | 0680-01-01 | 0893-01-01 | — | 1 | 8 | 2 |
| dogu-gokturk-2 | Doğu Göktürk Kağanlığı (II, İkinci Göktürk) | kaganlik | 0682-01-01 | 0745-01-01 | — | 1 | 23 | 6 |
| semerkant-ihsid | Semerkant Soğd İhşîdleri (Gûrek) | sehir-devleti | 0710-01-01 | 0738-01-01 | — | 0 | 4 | 2 |
| tatar | Tatar Konfederasyonu (Otuz/Dokuz Tatar) | konfederasyon | 0716-01-01 | 1202-01-01 | — | 0 | 3 | 2 |
| turges | Türgiş Kağanlığı | kaganlik | 0717-01-01 | 0766-01-01 | — | 1 | 8 | 6 |
| basmil | Basmıl Kağanlığı | konfederasyon | 0742-01-01 | 0745-01-01 | — | 0 | 1 | 2 |
| uygur | Uygur Kağanlığı (Ötüken) | kaganlik | 0745-01-01 | 0840-01-01 | — | 1 | 7 | 2 |
| karluk | Karluk Devleti (Yabgu -> Kara-ordu) | yabgu-devleti | 0766-01-01 | 0840-01-01 | — | 1 | 12 | 5 |
| oguz-yabgu | Oğuz Yabgu Devleti | devlet | 0775-01-01 | 1003-01-01 | — | 1 | 5 | 2 |
| samani | Sâmânîler | emirlik | 0819-01-01 | 1005-01-01 | — | 14 | 82 | 15 |
| karahanli | Karahanlılar (bölünme öncesi birleşik devlet) | hanlik | 0840-01-01 | 1041-01-01 | — | 10 | 57 | 10 |
| kirgiz-yenisey | Yenisey Kırgız Kağanlığı | kaganlik | 0840-01-01 | 0920-01-01 | — | 0 | 7 | 2 |
| koco-uygur | Koço (Turfan) Uygur Devleti — İdikutlar | devlet | 0911-01-01 | 1209-01-01 | — | 3 | 5 | 4 |
| gazneli | Gazneliler (Gazneli Devleti) | sultanlik | 0963-01-01 | 1186-01-01 | — | 16 | 106 | 14 |
| memuni-harezm | Me'mûnîler (Gürgenç Hârezmşahları) | hanedanlik | 0995-02-05 | 1017-05-30 | — | 0 | 5 | 2 |
| gurlu | Gurlular (Şensebânîler) | sultanlik | 1000-01-01 | 1215-01-01 | — | 19 | 66 | 4 |
| kerait | Kerâyitler (Kereyid, Ong Han ülkesi) | hanlik | 1007-01-01 | 1203-01-01 | — | 0 | 6 | 2 |
| dogu-karahanli | Doğu Karahanlılar | hanlik | 1041-01-01 | 1210-01-01 | — | 5 | 20 | 8 |
| bati-karahanli | Batı Karahanlılar | hanlik | 1041-01-01 | 1212-01-01 | — | 6 | 30 | 4 |
| harizmsah | Hârizmşahlar (Anuştegin hânedanı) | sultanlik | 1097-01-01 | 1231-01-01 | — | 28 | 90 | 4 |
| karahitay | Karahıtaylar (Batı Liao) | devlet | 1130-01-01 | 1211-01-01 | — | 12 | 40 | 9 |
| kamag-mogol | Kamag Moğol (Cengiz öncesi Moğol Hanlığı) | hanlik | 1130-01-01 | 1206-01-01 | — | 0 | 8 | 2 |
| horasan-oguz-hakimiyeti | Horasan ve Gazne Oğuz Hâkimiyeti (Sencer’in esareti sonrası) | devlet | 1153-03-29 | 1181-01-01 | — | 0 | 4 | 2 |
| muayyed-ay-aba-emirligi | Müeyyed Ay-aba ve Halefleri Emirliği (Nîşâbur-Tûs) | beylik | 1157-04-26 | 1187-03-13 | — | 0 | 3 | 2 |
| sultan-sah-emirligi | Sultan Şah Emirliği (Merv-Serahs-Tûs) | beylik | 1181-01-01 | 1193-01-07 | — | 0 | 3 | 2 |
| kerayit | Kerâyitler (Ong Han ülkesi) | hanlik | 1199-01-01 | 1203-01-01 | — | 0 | 2 | 5 |
| nayman | Naymanlar | hanlik | 1199-01-01 | 1204-01-01 | — | 0 | 3 | 4 |
| naiman | Naymanlar | hanlik | 1199-01-01 | 1204-01-01 | — | 0 | 9 | 2 |
| kuclug-karahitay | Küçlüğ Yönetimindeki Karahıtay (Nayman Küçlüğ) | devlet | 1211-01-01 | 1218-01-01 | — | 1 | 7 | 2 |
| cagatay | Çağatay Hanlığı | hanlik | 1227-01-01 | 1370-04-09 | cagatay | 46 | 20 | 5 |
| ogedey-ulusu | Ögedey Ulusu (Ögedeyîler) | hanlik | 1267-01-01 | 1309-01-01 | — | 0 | 1 | 3 |
| mogulistan | Moğulistan (Doğu Çağatay Hanlığı) | hanlik | 1347-01-01 | 1680-01-01 | mogulistan | 25 | 8 | 9 |
| timurlu | Timurlu Devleti | devlet | 1370-04-09 | 1507-05-24 | timurlu | 178 | 23 | 7 |
| sibir-hanligi | Sibir Hanlığı | hanlik | 1430-01-01 | 1598-08-20 | sibir-hanligi | 6 | 21 | 4 |
| kazak-hanligi | Kazak Hanlığı | hanlik | 1465-01-01 | 1847-01-01 | kazak-hanligi | 26 | 45 | 5 |
| buhara | Buhara Hanlığı / Emirliği | hanlik | 1500-01-01 | 1921-02-21 | buhara | 54 | 48 | 7 |
| hive | Hive Hanlığı | hanlik | 1512-01-01 | 1920-04-26 | hive | 8 | 24 | 5 |
| yarkent-hanligi | Yarkent (Sa'îdiyye) Hanlığı | hanlik | 1514-01-01 | 1705-01-01 | yarkent-hanligi | 10 | 3 | 4 |
| turkmen | Türkmen Aşiret Konfederasyonları (Yomut, Teke, Salur, Göklen, Eymir) | devlet | 1600-01-01 | 1884-01-01 | — | 9 | 11 | 5 |
| cungar | Cungar Hanlığı (Kalmuk) | hanlik | 1634-01-01 | 1758-01-01 | cungar | 31 | 6 | 4 |
| hokand | Hokand Hanlığı | hanlik | 1710-01-01 | 1876-02-19 | — | 14 | 14 | 4 |
| afgan-durrani | Dürrânî (Afgan) Devleti | devlet | 1747-10-01 | 1819-01-01 | afgan-durrani | 19 | 3 | 12 |
| afganistan | Afganistan (Bârekzâyî Emirliği) | emirlik | 1819-01-01 | — | afganistan | 14 | 18 | 9 |
| kuca-hocalari | Kuça Hocaları (Döngen-Uygur Birleşik Hükûmeti) | devlet | 1864-01-01 | 1867-12-31 | — | 1 | 3 | 3 |
| yakub-beg | Doğu Türkistan (Yâkub Bey Kâşgar Emirliği) | devlet | 1865-01-01 | 1878-03-16 | yakub-beg | 13 | 14 | 5 |
| turkistan-muhtariyeti-hokand | Türkistan (Hokand) Muhtariyeti | ozerk-hukumet | 1917-11-27 | 1918-01-31 | — | 1 | 2 | 3 |
| transkaspi-hukumeti | Sosyal Devrimci Transhazar (Transkaspiya) Geçici Hükûmeti | hukumet | 1918-01-01 | — | — | 0 | 0 | 8 |
| turkistan-ossc | Türkistan Özerk Sovyet Sosyalist Cumhuriyeti | sovyet-cumhuriyeti | 1918-04-30 | 1924-09-16 | — | 1 | 3 | 6 |
| harezm-halk-cumhuriyeti | Harezm Halk Sovyet Cumhuriyeti | **YOK** | 1920-04-26 | 1924-01-01 | — | 5 | 5 | 6 |
| buhara-halk-cumhuriyeti | Buhara Halk Sovyet Cumhuriyeti | **YOK** | 1920-10-08 | 1924-10-27 | — | 1 | 2 | 6 |
| dogu-turkistan-islam-cumhuriyeti | Doğu Türkistan İslâm Cumhuriyeti (I, Kaşgar) | cumhuriyet | 1933-11-12 | 1934-03-21 | — | 1 | 2 | 2 |
| dogu-turkistan-cumhuriyeti-gulca | Doğu Türkistan Cumhuriyeti (II, Gulca / Üç Vilayet) | cumhuriyet | 1944-11-12 | 1949-10-20 | — | 1 | 2 | 5 |
| ozbekistan | Özbekistan | cumhuriyet | 1991-08-31 | — | — | 13 | 1 | 11 |
| kirgizistan | Kırgızistan | cumhuriyet | 1991-08-31 | — | — | 5 | 1 | 11 |
| tacikistan | Tacikistan | cumhuriyet | 1991-09-09 | — | — | 10 | 1 | 5 |
| turkmenistan | Türkmenistan | cumhuriyet | 1991-10-27 | — | — | 11 | 1 | 8 |
| kazakistan | Kazakistan | cumhuriyet | 1991-12-16 | — | — | 34 | 2 | 4 |

## Bulgular

### A. Yerleşimsiz 22 künye (haritada boyanamaz; kronolojide var)
hunnu-xiongnu, xianbei, kusan-sasani, hivite-afrigid, kidarit, rouran, cac-tudun, semerkant-ihsid, tatar, basmil, kirgiz-yenisey, memuni-harezm, kerait, kamag-mogol, horasan-oguz-hakimiyeti, muayyed-ay-aba-emirligi, sultan-sah-emirligi, kerayit, nayman, naiman, ogedey-ulusu, transkaspi-hukumeti.
- 1281 çekirdeği dışındaki 20'si 1281 öncesidir; **1281+ yerleşimsiz: ogedey-ulusu (1267-1309), transkaspi-hukumeti (1918-)**. Transkaspiya Hükûmeti hem yerleşimsiz hem maddesiz (yalnız künye-içi 8 öğe).
- Bunların bir kısmı çoğul kayıt (aşağıda B). Yerleşimsiz künyeler için `yerlesimler.js`'e düşen iş: `denetim/YERLESIMLER-JS-KUYRUK-1115-ortaasya.md`.

### B. Mükerrer / çakışan künye çiftleri (kimlik DEĞİŞTİRİLMEZ; envanter bulgusu)
| çift | f/t | not |
|---|---|---|
| `kerait` ↔ `kerayit` | 1007-1203 ↔ 1199-1203 | aynı polity; biri 1007 (Nasturî'ye geçiş), öteki 1199 (Ong Han çağı) |
| `nayman` ↔ `naiman` | ikisi de 1199-1204 | birebir aynı ömür, aynı ad; maddeler ikiye bölünmüş (3 ↔ 9) |
| `xueyantuo` ↔ `xueyantuo-kaganligi` | 628-646-10-29 ↔ 627-646 | aynı kağanlık, iki kayıt |
| `hivite-afrigid` ↔ `afrigoglu-harezm` | ikisi de 305-995 | aynı hanedan (Hârizm Afrigîleri) |
| `kirgiz-yenisey` (orta-asya) ↔ `yenisey-kirgiz` (sibirya-bozkir) ↔ `kirgiz-erken` | 840-920 ↔ 840-1207 | bölge etiketi bile farklı |
| `kerait`/`kerayit`/`kamag-mogol` | | yerleşimsiz; Moğol öncesi göçebe yapı |
Etki: madde ve yerleşim bölünmesi, renk anahtarı farkı. Öneri: kimlikleri silme; biri "ana", ötekisi `selef/halef` ya da `bk` notu (KASA kararı).

### C. Künye f/t'nin atlas-içi tutarsızlıkları (kaynak doğrulaması adım 2'de)
- `buhara` t = 1921-02-21 ama künye-içi kronoloji 1920-09-02 (Kızıl Ordu şehirde), 1920-10-06 (resmî ilga), 1921-02-21 (Düşenbe). Künye `kaynak:` bunu açıklıyor (Iranica DUSHANBE) — D205 sınıf ② "de facto bitiş". Harita: Buhara yerleşimi 1920-09-02'de Sovyet'e geçiyor (künye t'den 5,5 ay önce) — bilinçli ayrım.
- `harezm-halk-cumhuriyeti` t = 1924-01-01 (yıl) ↔ Sovyet ulusal sınırlandırması 27 Ekim 1924 (adım 2'de).
- `turkistan-ossc` t = 1924-09-16, `buhara-halk-cumhuriyeti` t = 1924-10-27 (adım 2).
- `hive` t = 1920-04-26 (Hârizm Halk Cum. ilanı), hanın tahttan çekilişi 1920-02-02 (TDV'den okundu); aradaki 84 gün Hive künyesi canlı.
- `afganistan` t boş (güncel). `kazakistan`, `ozbekistan`, `kirgizistan`, `tacikistan`, `turkmenistan` t boş (güncel).

### D. Eksik künye adayları (kaynaklı f/t YAZILMADI: bu oturumda okunabilen akademik kaynak yok; "bulunamadı/okunmadı" kuralı)
Atlas'ta kimliği bulunamayan (ad/`id` alt dizgesi taraması, bütün 2268 künye) ve Orta Asya tarihinin standart özetlerinde ayrı siyasî birim sayılanlar:
| aday | dönem (yaklaşık, kaynak okunmadı) | not |
|---|---|---|
| Yüeçi (Yuezhi) | MÖ 2.-1. yy | Kuşan öncesi; `greko-baktria` t notunda adı geçiyor |
| Wusun, Kangju | MÖ 2. yy - MS 4. yy | İli/Syr-Derya göçebe devletleri |
| Soğd şehir devletleri / Soğdiana | Semerkant ihşidleri dışında | `semerkant-ihsid` 710-738 var; Soğd bütünü yok |
| Hârezm Sûfîleri (Sûfîler hânedanı) | XIV. yy sonu | `hive` 1370-1379 `__BOSLUK__` ile ilişkili (adım 4) |
| Turfan Hanlığı, Kumul (Hâmi) Hanlığı | XV.-XX. yy | `mogulistan`/`yarkent-hanligi`/`qing` arası |
| Âfâkî (Ak Dağlı) Hocalar emirliği | XVII.-XVIII. yy | Kaşgar'da `cungar` penceresi 1705-1759'a oturuyor |
| Kunduz Hanlığı (Mîr Murad Beg) | XIX. yy başı | **1859-05-01 maddesi `taraflar:["afganistan","kunduz-hanligi"]` yazıyor ama `kunduz-hanligi` kimliği devletler.js'te YOK** (tanımsız taraf) |
| Kırgız, Karakalpak hanlık/boy yapıları | XVIII.-XIX. yy | ayrı künye yok (kronoloji_orta_asya.js §KAPSAM KARARI de "kirgiz künyesi yoktur" diyor) |
| Rus Türkistan Genel Valiliği (1867-1917) | | `rusya` künyesi içinde; ayrı künye şart değil |
| Alaş Özerkliği | 1917-12-01 - 1920 | var: `alas-ozerkligi` (bölge sibirya-bozkir) |
| Sovyet ulusal cumhuriyetleri (Özbek SSC, Türkmen SSC, Tacik SSC, Kırgız, Kazak) | 1924-1991 | ayrı künye yok; `sovyet-rusya` altında; ulusal sınırlandırma tarihi haritada görünmez |
**Çeşit: bunların hiçbiri atlas dışında "tahmini f/t" ile eklenmedi.**

### E. Atlasın Orta Asya künyesi olmayan ama bölgeyi boyayan komşu künyeler
Kutudaki noktaların sahipleri (en çok): sovyet-rusya 135, rusya 129, rusya-gecici-hukumet 123, afsar 69, safevi 66, ilhanli 57, kacar 49, altinorda 43, mogol-imparatorlugu 27, qing-hanedani 17, cin-cumhuriyeti 16, nogay 10. Yani Orta Asya'nın büyük bölümü 1500-1991 arası zaten `orta-asya` etiketli künyelerle değil Rusya/Sovyet/İran etiketiyle boyanıyor.
