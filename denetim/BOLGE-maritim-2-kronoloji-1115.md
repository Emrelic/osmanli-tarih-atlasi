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


---
# 2. TUR (15 Kasım 2026) — TDV ek okumalar + tam metinle hakemli karar

## TDV'de okunan (2. tur)
- **cakarta:** Portekizliler 1522'de Pajajaran ile anlaştı, «beş yıl sonra» döndüklerinde şehir Bentem'in elindeydi (yaklaşık 1527; gün yok); Batavya surları 1619; İngiliz ara dönemi 1811-1816; Japon dönemi 1942-1945. «Cayakarta»/22 Haziran metinde YOK.
- **malezya:** Malaka kuruluşu «1396 [?]»; düşüş 10 Ağustos 1511; VOC Ocak 1641; Johor Mahmûd Şah'ın 1528 ölümünden «iki yıl sonra» (~1530); Penang adası 1785 (atlas 1786-08-11: TDV yıl çelişkisi; Light'ın günü için ikinci kaynak okunmadı); Straits Settlements 1826; FMS Temmuz 1896; Malaya Birliği Ocak 1946 planı, federasyon 1 Şubat 1948; bağımsızlık 31 Ağustos 1957; Malezya 16 Eylül 1963; 1909 İngiliz-Siyam.
- **endonezya:** Majapahit «1478'de yıkılışı» (vekâyinâme), Demak 1478'de kuruldu (Trenggana 1521-46), Sultan Agung 1613-46; VOC Mart 1602; 1743 ve 1755 metinde yok; İngiliz 1811-1816; Japon 1942-45; bağımsızlık ilanı 17 Ağustos 1945; devir «1949 sonu». TDV içi çelişki: cava Majapahit «1300-1525»; demak: Demak kuruluşu «XV. yy son çeyrek» (yıl yok).
- **sumatra:** Açe Ali Mugāyet Şah «1514-1530» (TDV ace 1521: TDV içi çelişki); Açe-Hollanda 1873-1903; Hollanda hakimiyeti sonu 27 Aralık 1949.
- **singapur:** Raffles 1818 (atlas Singapur 1819-01-29; TDV yıl çelişkisi), 1824, 1826 SS, 1942-45, 1959, 1963, 9 Ağustos 1965.
- **pasai, demak:** pasai: 1521 Portekiz; demak: Trenggana 1524'ten sultan, 1527 Tuban, 1546 ölüm, Demak 1578'de başka güçlerin hakimiyetine girdi.
- **portekiz:** Malay/Malezya 1511, Goa 1510 (Makao tarihsiz); Timor/Flores 1859 yok.
- **Çekilemedi / arama sayfasına düştü (okunmadı):** cohor, gova, ternate (yalnız 1495 İslâm kabulü, 1498), bancarmasin, tidore (ayrı madde slug'ı bulunamadı).

## Tam metinle hakemli karar
İndirilen metinler: Gutenberg #13280 ve #13616 (Blair & Robertson cilt 2-3); archive.org: Ricklefs, A History of Modern Indonesia since c.1200 (3. bs.); Coedès, The Indianized States of Southeast Asia.

| satır | TDV | tam metin 1 | tam metin 2 | karar |
|---|---|---|---|---|
| Malaka düşüşü 1511-08-10 | 10 Ağu 1511 | Coedès «August 10, 1511» | Ricklefs: Temmuz–Ağustos başı çatışmalar (gün yok) | **çift teyit (TDV+Coedès)**; değişmedi |
| Malaka kuruluşu | 1396[?]/1390'lar/1402 | Ricklefs c.1400 | Coedès 1403 | aynı yıl yok; madde (1396) ve künye (1400) olduğu gibi, ic_not hakem beyanı |
| Cebu 1565-04-27 | yalnız 1565 | B&R c.2 Legazpi raporu «Friday, April 27, 1565» | B&R c.2 sefer anlatısı «twenty-seventh and thirtieth of April» | **madde 1565-04-27** |
| Manila 1571-06-24 | 1571 | B&R c.3 Riquel belgesi (3 ve 24 Haziran 1571) | B&R c.3 yayıncı özeti (Mayıs 1571 / 1572 örgütlenme; editör tutarsız) | günü tek birincil belge verir; **madde 1571-06-24** (ic_not) |
| Pajajaran sonu | Yûsuf 1570-80 | Ricklefs c.1579 | — | iki bağımsız kaynak → künye t 1579 |
| Brunei 1405 | 1405-1415 | Ricklefs: 1368 yok | Coedès: Brunei sultanlığı başlangıcı yok | 1368 desteksiz → 1405 |
| Singhasari sonu | — | Coedès 18 Mayıs–15 Haziran 1292 | Ricklefs'te ilgili sayfa okunmadı | atlas 1292-01-01 kaynaksız → kuyruk |
| Majapahit sonu | 1525 / 1478 | Ricklefs c.1527 (1478 «later chronicles») | Coedès: 1478 istila bastırıldı, 1486 yeni hanedan | künye t 1527 korunur |
| Mataram→VOC | — | Ricklefs «November 1743» | — | yalnız ay; gün ikinci kaynakta yok |
| İngiliz ara dönemi 1811 | 1811-1816 | Ricklefs 4 Ağu / 26 Ağu / 18 Eyl 1811 | — | atlas 08-18 kaynaksız; madde 1811-08-04 eklendi |
| 1942 teslim | — | Ricklefs 8 Mart 1942 | — | atlas pencere 03-09; madde 03-08 |
| Sulu 1450/1457 | 1450[?] | Ricklefs «legendary sources» (tarihsiz) | — | karar verilemedi; değişmedi |

DÜZELTME (ilk tur B1): "Sunda Kalapa 1527 Ricklefs günü" ifadesi hatalıydı; Ricklefs yalnız «showed up to build their post in 1527» der, gün vermez. 1. turdaki "künye t'yi 1579'a çekmek ikinci kaynak ister" ifadesi 2. turda karşılandı (TDV + Ricklefs).
