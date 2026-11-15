# BOLGE maritim — Adım 2: Kronoloji teyidi (15 Kasım 2026)

Ölçüm: `data/olaylar*.js` + `data/kronoloji*.js` (295 dosya, node vm) içinde bölge künyesini `taraflar:`da veya bölge yerleşimini `yer_id`/`odak_yer`inde anan **230 madde** (bir kısmı yer adı eşleşmesiyle gelen yabancı maddeler: Kudus=Cava/Kudüs, Alor, Yap, Indrapura-Champa vb.; onlar sayılmadı). Bölgeye ait ~185 madde.
Kaynak durumu: **TDV'den bu oturumda okunanlar:** malaka, bruney, bentem, ace, filipinler, cava (islamansiklopedisi.org.tr, çekilebildi — Cloudflare engeli yok). Okunmadı: Coedès/Ricklefs/Andaya/Hägerdal/Runciman ham metinleri (kitap; kaynak alanında adı var, sayfa yok) → "okunmadı", sayılmadı. Vikipedi yalnız çelişki işareti için bakıldı, dayanak sayılmadı.

## A. TDV ile TEYİT edilen (atlas = TDV)
| madde | atlas | TDV |
|---|---|---|
| Malaka'nın Portekiz'e düşüşü | 1511-08-10 (KRONOLOJI_PORTEKIZ[26], OLAYLAR_P0047[0]; pencere 1511-08-10) | tdv malaka: "10 Ağustos 1511" — **teyit** (Vikipedi 15 Ağu der; TDV esas, ≥2 bağımsız akademik karşı kaynak okunmadığı için gün KALIR) |
| Brunei Müslüman sultanlık | 1405 (KRONOLOJI_SINIR_ASYA[13]) | tdv bruney: Muhammed Şah 1405–1415 (yıl) — teyit |
| Açe Sultanlığı kuruluşu | 1521-01-01 (yıl) | tdv ace: 1521 — teyit (yalnız yıl; gün teyitsiz) |
| Pasai'nin Portekiz'e düşüşü | 1521-01-01 | tdv ace: 1521 — teyit (yıl) |
| Açe teslimi / son | 1903-01-01 (pencere) | tdv ace: Tunku Muhammed Dâvûd 1903'te teslim — teyit (yıl) |
| Sunan Gunung Jati Bentem'i aldı | 1522 | tdv bentem: 1522 — teyit |
| Hasanüddin bağımsızlık (1552) | 1552-01-01 | tdv bentem: hükümdarlık 1552–1570 — teyit (yıl) |
| Mataram Sultanlığı | 1585 | tdv cava: 1585 — teyit |
| Legazpi Cebu / Manila | 1565 / 1571 | tdv filipinler: 1565 Cebu, 1571 Manila — teyit (yıl) |
| Sulu Sultanlığı maddesi | 1450 (SINIR_ASYA[16]) | tdv filipinler: "(1450 [?])" — madde teyitli, TDV soru işaretli |
| Magindanao | künye f 1515 | tdv: "tah. 1515" — teyit |
| Paris Antlaşması | 1898-12-10 | tdv filipinler: 10 Aralık 1898 — teyit |
| Filipinler bağımsızlığı | 1946-07-04 | tdv filipinler: 4 Temmuz 1946 — teyit |
| Brunei İngiliz himayesi, Brooke genişlemeleri | madde yok/1861/1882/1890 | tdv bruney: 1885 Trusan, 1887 Padas, 1890 Limbang, Aralık 1888 himaye; **Limbang 1890-03-17 madde: TDV yıl 1890 — teyit**, Baram 1882: TDV'de yok (Runciman/Tarling okunmadı) |

## B. Çelişki / bulgu (düzeltme adayı)
**B1. Sunda-Pajajaran ömrü (1527-06-22).** Atlas künye `t=1527-06-22` ve Banten/Cirebon/Purwokerto'da `banten-sultanligi`e geçiş 1527-06-22. TDV bentem: Pangeran Yûsuf (hükm. 1570–1580) Pajajaran'ı alıp son Hindu-Budist devleti yıktı. Yani Sunda Kalapa 1527'de düştü; Pajajaran **devleti** bitmedi (içeride — Pakuan/Bogor — ~1579). 22 Haziran 1527 günü TDV'de yok (TDV "cakarta" maddesi bu oturumda okunmadı; madde SINIR_ASYA[25] 1527-01-01 yazıyor, pencere 1527-06-22: **madde günü ile pencere günü 172 gün ayrı** → Değişmez 2 sağlanıyorsa başka madde karşılıyor, `ölçülmedi`). Öneri: künye t'yi 1579'a çekmek kaynakla (Ricklefs/Pigeaud-de Graaf okunmadı) ikinci kaynak ister; bu oturumda **değişmedi**.
**B2. Brunei künye f = 1368 vs madde 1405.** Brunei künyesi `f=1368-01-01` (Bintulu/Baram/Limbang/Labuan/Niah pencereleri 1368'de başlar; öncesi `__BOSLUK__`), ama Brunei şehri 977–1405 `poni`, 1405'ten `brunei-sultanligi`; madde ve TDV 1405. 1368 TDV'de yok → TDV esas: künye 1405 olmalı (kaynak: tdv bruney). Düzeltme yerlesimler.js'te (5 yerleşim) + devletler.js — kuyruk.
**B3. Sulu künyesi f=1457 vs madde/TDV 1450[?].** Jolo `1281→1457 __BOSLUK__`. TDV'de 1450 soru işaretli, 1457 TDV'de yok. Öneri: f=1450-01-01 + ic_not (TDV "?"); ikinci akademik kaynak (Majul, *Muslims in the Philippines*; Warren) **okunmadı**.
**B4. Majapahit 1293–1527 vs TDV "1300–1525".** Atlas künye 1293-01-01/1527-01-01; Trowulan yerleşimi 1293-11-10 (Raden Wijaya taç; Coedès/Pararaton geleneği 10 Kasım 1293) fakat Demak/Semarang/Surabaya… 1293-01-01. Aynı künyenin başlangıcı iki farklı günle yazılı (iç tutarsızlık). Son: Demak/Semarang'da Majapahit **1478**'de biter (Demak künyesi f=1478), Trowulan'da 1527. TDV: Demak 1520'lerde son Majapahit hükümdarını yendi. 1478 Demak kuruluşu TDV'de yok → atlas'ta kaynaksız.
**B5. Ternate/İspanya/Portekiz.** Ternate 1522-01-01 (Portekiz) → 1575-12-28 (Ternate) → 1606-04-01 İspanya → 1663-05-01 Hollanda. Madde 1606 ve 1512 var; 1575-12-28 (Sultan Babullah, Portekiz'in Ternate kalesini alması: Andaya'ya göre 1575) ve 1663-05-01 (İspanya'nın Ternate'yi boşaltması) için **±30 gün içinde madde bulunamadı** (maddeler ya yıl-01-01 ya yok) → Değişmez 2 adayı; denetle'nin sonucu için bkz. adım 3.
**B6. Cebu 1565-04-27 / Manila 1571-06-24 / Iloilo 1569 / Vigan 1572.** Pencere günleri gün hassasiyetinde; madde günleri 1565-01-01, 1571-01-01 (ve SINIR_ASYA[35] 1571-01-01). Gün-yıl uyumsuzluğu (madde "yalnız yıl" yazılmış, pencere gün): 27 Nisan 1565 ve 24 Haziran 1571 kaynak olarak Blair&Robertson/Scott ile bilinen günlerdir ama **bu oturumda ham okunmadı**; TDV yalnız yıl verir ("yalnız yıl teyitli"). Madde günlerini pencerelere taşımak için ikinci kaynak okunmalı.
**B7. Hollanda/Avusturalya Papua vb.** Bölge dışı kayıtlar (Kuk Evre, Lapita) atlasta arkeoloji maddeleri olarak var; kaynak alanı dolu, doğrulanmadı.
**B8. Kaynağı `bulunamadı` olan maddeler:** KRONOLOJI_COK_ONCE1281_DOGU_ASYA[65] (Srivijaya 1003 elçilik), [66] (Sanghyang Tapak, 1030 Sunda) — `kaynak: bulunamadı` — kaynak eksik, bu oturumda da bulunamadı.

## C. Okunmadı / yapılamadı
Coedès bağlı ~70 madde (500–1281): kaynak kitabı bu oturumda erişilemedi; atlas günleri çoğu yıl-01-01 (yıl hassasiyeti, beyan var). Ricklefs/Andaya/Hägerdal/Runciman/Tarling: okunmadı. TDV `cakarta`, `malezya`, `endonezya`, `sumatra`, `portekiz`: bu oturumda okunmadı (kaynak alanında "TDV:" yazan 1396 Malaka kuruluşu, 1405, 1450, 1521, 1522, 1527, 1530, 1552, 1571, 1578, 1585 maddelerinden TDV filipinler/ace/bentem/cava/bruney/malaka ile örtüşenler A'da).
**1396 Malaka kuruluşu (SINIR_ASYA[11]) ≠ künye f=1400:** tdv malaka "1390'lı yılların ortaları" der; yerleşim penceresi `1400-01-01`'de başlar, madde 1396-01-01 — iç tutarsızlık (Johor/Muar/Bintan/Jambi 1400 'e kadar `malay-sultanliklari`). Düzeltme: künye f 1396'ya mı, madde 1400'e mi — TDV "ortaları" yıl vermez; **madde kaynaklı yıl yazamaz → bulunamadı** olarak bırakıldı.
