# GMP-ACIKLIK-0921 — Boş toprak bölüşümü eşiği için ölçüm

**Tarih:** 21 Eylül 2026 · **Amaç:** "İki yerleşim arasındaki açıklık eşiği aşarsa aradaki toprak bölüştülmez" ayarına, tahmine değil ölçüme dayalı eşik adayları sunmak.
**Yöntem:** Haversine büyük daire (R = 6371 km) · yüzdelikler doğrusal aradeğerleme (R tip 7 / numpy `linear`) · ayrıştırma projenin TEK okuyucusu `arac/girdi.py::oku_dosya` ile (her dosyanın kendi `window.YERLESIMLER*` değişkenini bulur) · `py` 3.13.8 + numpy 2.2.6. Koordinat alanları veride **`lat` (enlem) / `lon` (boylam)**; şartnamedeki `y`/`x` adlandırması buna karşılık gelir. `s:`, `d:`, `v:` alanlarına betik dokunmaz.

## Okunan veri

**88 dosya bulundu ve 88'i okundu (okunamayan: YOK).** `data/` altında `yerlesimler*.js` desenine uyan 88 dosyanın tamamı ayrıştırıldı: 3924 kayıt, koordinatsız atlanan 0. Bunlardan **87'si canlı** (`girdi.py GIRDI_DOSYALARI`, 3921 nokta — CLAUDE.md §1.5 tablosundaki 3921 ile birebir uyuştu ✓). Canlı olmayan tek dosya:

- `yerlesimler_ok102.js` — 3 nokta (Müdevvere · Medâin-i Sâlih (el-Hicr) · el-Ulâ). İkisi canlı `yerlesimler_ok101.js`'teki aynı adlı kayıtların ~0,1–0,7 km yakınındaki kopyası (birleşik kümede ENN<1 km çiftler yaratır; tüm-dosyalar kümesinde min ENN 0,04 km, ENN<3 km nokta sayısı 10 iken canlıda 6). Yüzdeliklere etkisi ≤0,1 km. Ölçüm şartname gereği **tüm 88 dosya** üzerinden verildi; canlı küme yan sütunda.

## A — En yakın komşu mesafesi dağılımı (km)

| küme | n | ortanca | %75 | %90 | %95 | %99 | en büyük | ortalama |
|---|---|---|---|---|---|---|---|---|
| **tüm 88 dosya** | **3924** | **80,07** | **140,19** | **209,47** | **247,62** | **336,27** | **3548,68** | **102,32** |
| canlı 87 dosya | 3921 | 80,10 | 140,31 | 209,50 | 247,68 | 336,27 | 3548,68 | 102,41 |

## B — En yakın komşusu >300 km olan yerleşimler (75 adet, azalan sırada)

> ⚠️ **Sağdaki iki sütun (SINIF ve GEREKÇE) ölçüm DEĞİL, bu rapor yazarının coğrafî yorumudur** — koordinata ve genel coğrafya bilgisine dayanır; emin olunamayanlarda SINIFLANAMADI yazıldı. "Beyan …" ile başlayan kayıtlar veri setindeki beyanlı dolgu noktalarıdır; sınıfları yine coğrafî yorumdur.

| # | Yerleşim | lat | lon | mesafe (km) | en yakın komşu | SINIF *(yorum)* | GEREKÇE *(yorum)* |
|---|---|---|---|---|---|---|---|
| 1 | Rapa Nui (Paskalya Adası) | −27,113 | −109,350 | 3548,7 | Arauco (Mapuche/Araukanya) | ADA-KIYI | Okyanus ortasında tek başına duran volkanik ada; komşuya dek kesintisiz Pasifik. |
| 2 | Güney Georgia (Grytviken) | −54,280 | −36,510 | 1990,3 | Beyan G54.5 B67.5 | ADA-KIYI | Subantarkitik okyanus adası. |
| 3 | Yap | 9,517 | 138,133 | 1238,8 | Manokwari | ADA-KIYI | Mikronezya ada dünyası. |
| 4 | Severnaya Zemlya | 79,500 | 96,000 | 826,4 | Franz Josef Toprağı | ADA-KIYI | Kuzey Buz Denizi'nde buzullu takımada; açıklık buzlu deniz. |
| 5 | Svalbard | 78,230 | 15,735 | 785,7 | Franz Josef Toprağı | ADA-KIYI | Arktik Okyanus takımadası. |
| 6 | Lapaha (Muʻa) | −21,179 | −175,117 | 744,1 | Levuka | ADA-KIYI | Tonga; çevresi okyanus. |
| 7 | Kuzeydoğu Grönland | 76,770 | −18,660 | 706,4 | Doğu Grönland | ORMAN-TUNDRA | Kutup çölü ve buz kalkanı; ormanız ama sınıfın "seyrek soğuk boşluk" anlamına alındı. |
| 8 | Franz Josef Toprağı | 80,330 | 52,800 | 655,8 | Novaya Zemlya kuzeyi | ADA-KIYI | Arktik takımada. |
| 9 | Şuri (Naha) | 26,217 | 127,719 | 630,8 | Taipei | ADA-KIYI | Ryukyu (Okinawa) ada zinciri; doğusu Pasifik boşluğu. |
| 10 | Unalaska (Iliuliuk) | 53,870 | −166,530 | 583,2 | Chignik (Alaska Yarımadası) | ADA-KIYI | Aleut ada zinciri. |
| 11 | Doğu Grönland | 70,483 | −21,967 | 555,6 | Akureyri | ORMAN-TUNDRA | Buz kalkanı ve kutup çölü kıyısı. |
| 12 | Oeiras (Piauí) | −7,025 | −42,131 | 528,5 | Viana (Maranhão) | ORMAN-TUNDRA | Piauí sertãosu; kurak çalı-dikenli caatinga. |
| 13 | Çamdo (Chamdo) | 31,140 | 97,178 | 523,8 | Sibsâgar (Rangpûr) | DAĞ | Hengduan dağ sistemi / Tibet platosu doğu kenarı, derin vadi ormanlarıyla parçalı. |
| 14 | Yeni Sibirya Adaları | 75,200 | 140,500 | 494,7 | Ust-Yansk | ADA-KIYI | Arktik takımada. |
| 15 | Yamal ucu | 70,167 | 72,517 | 471,1 | Obdorsk (Salehard) | ORMAN-TUNDRA | Yamal yarımadasının çıplak tundra ucu. |
| 16 | Cartagena de Indias | 10,391 | −75,479 | 466,2 | Portobelo (Puerto Bello) | ADA-KIYI | Karayip kıyı şeridi; açıklık deniz + Darién sulak ormanı karışımı. |
| 17 | Puerto Princesa (Palawan) | 9,740 | 118,740 | 432,0 | Iloilo | ADA-KIYI | Palawan ada zinciri (Sulu/Güney Çin Denizi). |
| 18 | Olinda | −8,009 | −34,855 | 422,1 | São Cristóvão (Sergipe) | SINIFLANAMADI | Kıyı şeridinde açıklık; belirgin coğrafi engel göze çarpmıyor, izlenim veri seyrekliğinden. |
| 19 | Cuiabá | −15,601 | −56,098 | 418,5 | Vila Bela da Santíssima Trindade | SINIFLANAMADI | Cerrado savanı + Pantanal sulak alanı; dört sınıfa da oturmuyor. |
| 20 | Beyan G10.5 B52.5 | −10,500 | −52,500 | 399,4 | Beyan G7.5 B50.5 | ORMAN-TUNDRA | Amazon güney kenarı yağmur ormanı dolgu noktası. |
| 21 | Verhoyansk | 67,550 | 133,383 | 392,8 | Ust-Yansk | ORMAN-TUNDRA | Sibirya "soğuk kutbu"; tayga-tundra geçişi. |
| 22 | Essey | 68,480 | 102,180 | 389,0 | Hatanga | ORMAN-TUNDRA | Evenkiya taygası/tundrası. |
| 23 | Tabatinga | −4,253 | −69,938 | 381,4 | San Joaquín de Omaguas (Fritz) | ORMAN-TUNDRA | Üst Solimões Amazon yağmur ormanı. |
| 24 | Tulagi | −9,094 | 160,150 | 380,6 | Gizo | ADA-KIYI | Solomon Adaları. |
| 25 | Gizo | −8,101 | 156,836 | 380,6 | Tulagi | ADA-KIYI | Solomon Adaları. |
| 26 | São Pedro de Alcântara (Tibagi) | −24,300 | −50,600 | 375,9 | Ciudad Real del Guairá | ORMAN-TUNDRA | Paraná yaylası; araucária ormanı-campos mozaigi. |
| 27 | Aru-Tanimbar adaları | −7,500 | 131,500 | 373,0 | Banda Neira | ADA-KIYI | Maluku denizleri arası ada grubu. |
| 28 | Kanngiqtugaapik (Clyde River) | 70,472 | −68,591 | 372,2 | Qikiqtarjuaq (Broughton Adası) | ADA-KIYI | Baffin Adası fiyortlu arktik kıyısı. |
| 29 | Beyan G7.5 B56.5 | −7,500 | −56,500 | 362,6 | Itaituba | ORMAN-TUNDRA | Amazon (Pará) orman dolgusu. |
| 30 | Ust-Olenyok zimovyesi | 72,900 | 119,800 | 362,1 | Bulun | ORMAN-TUNDRA | Olenyok ağzı tundra kıyısı. |
| 31 | Ennadai (Ihalmiut, Karayer İnuit) | 61,103 | −100,895 | 359,4 | Brochet (Ren Geyiği Gölü) | ORMAN-TUNDRA | Keewatin barrens; tundra-tayga sınırı. |
| 32 | Novaya Zemlya kuzeyi | 74,500 | 57,000 | 357,8 | Novaya Zemlya güneyi | ADA-KIYI | Arktik takımada. |
| 33 | Beyan G7.5 B62.5 | −7,500 | −62,500 | 351,2 | Beyan G10.5 B61.5 | ORMAN-TUNDRA | Amazon (Amazonas) orman dolgusu. |
| 34 | Esperance | −33,860 | 121,890 | 348,1 | Kalgoorlie | SINIFLANAMADI | Kıyı-iç kesim mallee/çalılık; dört sınıfa da oturmuyor. |
| 35 | Brunei | 4,903 | 114,939 | 347,6 | Tarakan | ORMAN-TUNDRA | Borneo kıyı bataklık yağmur ormanı. |
| 36 | Beyan G10.5 B68.5 | −10,500 | −68,500 | 346,8 | Beyan G9.5 B65.5 | ORMAN-TUNDRA | Amazon (Acre) orman dolgusu. |
| 37 | Beyan G9.5 B65.5 | −9,500 | −65,500 | 345,2 | Forte Príncipe da Beira | ORMAN-TUNDRA | Amazon (Amazonas/Batı) orman dolgusu. |
| 38 | Sokotra | 12,510 | 53,872 | 344,6 | Alula | ADA-KIYI | Hint Okyanusu'nda izole ada. |
| 39 | Yinchuan (Ningxia) | 38,487 | 106,231 | 343,1 | Lanzhou | ÇÖL | Sarı Irmak vahası dışı Tengger/Ordos çöl-step kenarı (dağ karışımı, sınırda). |
| 40 | Karkaralinsk (Karkaralı) | 49,410 | 75,480 | 336,3 | Pavlodar (Koryakov) | SINIFLANAMADI | Kazak bozkırı; dört sınıfa da oturmuyor. |
| 41 | Ohotsk | 59,363 | 143,243 | 336,2 | Tauysk | ADA-KIYI | Ohotsk Denizi tayga kıyısı. |
| 42 | Bulun | 70,667 | 127,400 | 335,6 | Ust-Yansk | ORMAN-TUNDRA | Lena ağzı tundrası. |
| 43 | Ust-Yansk | 70,900 | 136,550 | 335,6 | Bulun | ORMAN-TUNDRA | Yana ağzı tundrası. |
| 44 | Beyan G4.5 B52.5 | −4,500 | −52,500 | 335,4 | Santarém (Tapajós) | ORMAN-TUNDRA | Amazon (Pará) orman dolgusu. |
| 45 | Beyan K1.5 B60.5 | 1,500 | −60,500 | 333,5 | Beyan K1.5 B63.5 | ORMAN-TUNDRA | Guyan kalkanı; Roraima orman-savan mozaigi. |
| 46 | Kandehar | 31,610 | 65,710 | 333,4 | Gazne | DAĞ | Hindu Kuş'un güneybatı eteklerinde kurak Afgan yayla-dağlığı. |
| 47 | Beyan K4.5 B62.5 | 4,500 | −62,500 | 332,6 | Beyan K4.5 B59.5 | ORMAN-TUNDRA | Guyan kalkanı; Gran Sabana orman-savan/tepui bölgesi. |
| 48 | Beyan G7.5 B50.5 | −7,500 | −50,500 | 330,7 | Beyan G7.5 B47.5 | ORMAN-TUNDRA | Amazon (Araguaia-Xingu) orman dolgusu. |
| 49 | Beyan G7.5 B47.5 | −7,500 | −47,500 | 330,7 | Beyan G7.5 B50.5 | ORMAN-TUNDRA | Amazon doğu kenarı (Pará/Maranhão) dolgusu. |
| 50 | Tanami Çölü | −20,500 | 130,500 | 330,7 | Büyük Kum Çölü 3 | ÇÖL | Adı üstünde Tanami çölü. |
| 51 | Tefé (Teffé de Aisuaris) | −3,350 | −64,710 | 330,4 | Barcelos (Mariuá) | ORMAN-TUNDRA | Rio Negro/Solimões Amazon ormanı. |
| 52 | Bancarmasin | −3,320 | 114,591 | 328,5 | Kotawaringin | ORMAN-TUNDRA | Borneo güney bataklık yağmur ormanı. |
| 53 | Beyan G10.5 B61.5 | −10,500 | −61,500 | 328,0 | Beyan G10.5 B58.5 | ORMAN-TUNDRA | Amazon (Rondônia) orman dolgusu. |
| 54 | Beyan G10.5 B58.5 | −10,500 | −58,500 | 328,0 | Beyan G10.5 B61.5 | ORMAN-TUNDRA | Amazon (Mato Grosso) orman dolgusu. |
| 55 | Korsakov (Güney Sahalin) | 46,633 | 142,786 | 327,7 | İmperator limanı | ADA-KIYI | Sahalin adası. |
| 56 | Gibson Çölü | −23,500 | 130,500 | 324,4 | Büyük Kum Çölü 6 | ÇÖL | Adı üstünde Gibson çölü. |
| 57 | Guiyang | 26,647 | 106,630 | 324,3 | Çongqing (Chongqing) | DAĞ | Guizhou karst dağlığı. |
| 58 | Samarai | −10,610 | 150,683 | 322,9 | Louisiade-Milne takımadası | ADA-KIYI | Papua kıyı adacıkları. |
| 59 | Louisiade-Milne takımadası | −11,500 | 153,500 | 322,9 | Samarai | ADA-KIYI | Mercan takımadası. |
| 60 | Yerbogaçen | 61,280 | 108,010 | 322,4 | Vitim (Vitimskoye zimov'e) | ORMAN-TUNDRA | Orta Sibirya taygası (Tungus bölgesi). |
| 61 | Udskoy ostrogu | 54,550 | 134,450 | 315,4 | Ayan | ORMAN-TUNDRA | Uda havzası taygası. |
| 62 | Ruby Vadisi (Batı Şoşoni) | 40,100 | −115,500 | 314,1 | Camas Ovası (Kuzey Şoşoni) | ÇÖL | Great Basin ada-havzaları sagebrush çöl-çalısı. |
| 63 | Yakutsk | 62,028 | 129,732 | 312,8 | Ust-Maya | ORMAN-TUNDRA | Orta Lena taygası. |
| 64 | Ust-Maya | 60,420 | 134,530 | 312,8 | Yakutsk | ORMAN-TUNDRA | Maya havzası taygası. |
| 65 | Dunhuang | 40,142 | 94,662 | 311,4 | Ciyayuguan (Jiayuguan) | ÇÖL | Gobi/Hexi koridorunda izole vaha. |
| 66 | Zerenc (Sîstan) | 30,958 | 61,861 | 310,7 | Hâş | ÇÖL | Sistan çöl havzası (Dasht-e Lut kenarı). |
| 67 | Honolulu | 21,307 | −157,858 | 310,5 | Hawaii Adaları (Birleşme Öncesi) | ADA-KIYI | Hawaii ada zinciri. |
| 68 | Hawaii Adaları (Birleşme Öncesi) | 19,600 | −155,500 | 310,5 | Honolulu | ADA-KIYI | Hawaii ada zinciri. |
| 69 | Yeni Gine Batı (Kuş Başı / Vogelkop) 2 | −0,500 | 130,500 | 309,7 | Seram (Ceram) | ORMAN-TUNDRA | Vogelkop yağmur ormanı. |
| 70 | Dariganga | 45,320 | 113,900 | 309,7 | Kerulen (Çoybalsan) | ÇÖL | Doğu Gobi kenarı step-çölü (sınırda bir sınıf). |
| 71 | Pavlodar (Koryakov) | 52,285 | 76,967 | 307,7 | Semipalatinsk | SINIFLANAMADI | Kazak bozkırı; dört sınıfa da oturmuyor. |
| 72 | Wellington | −41,286 | 174,776 | 305,3 | Christchurch | ADA-KIYI | Kuzey-güney ada arası; Cook Boğazı ve Güney Alpler. |
| 73 | Hatanga | 71,977 | 102,468 | 301,2 | Voloçanka (Voloçanı zimovyesi) | ORMAN-TUNDRA | Taymir tundrası. |
| 74 | Voloçanka (Voloçanı zimovyesi) | 70,980 | 94,530 | 301,2 | Hatanga | ORMAN-TUNDRA | Taymir tundrası. |
| 75 | Manokwari | −0,860 | 134,060 | 300,1 | Yeni Gine Batı (Kuş Başı / Vogelkop) | ORMAN-TUNDRA | Vogelkop kıyı yağmur ormanı. |

**Sınıf dağılımı (yorum):** ORMAN-TUNDRA 35 · ADA-KIYI 25 · ÇÖL 7 · DAĞ 3 · SINIFLANAMADI 5.

## C — Üç somut açıklık

### Sahra: Trablus (13,2°D, 32,9°K) → Kano (8,5°D, 12,0°K)
**Uçlar arası haversine: 2372,8 km.** Veri kümesinde Trablus (32,897/13,191) ve Kano (12,000/8,517) bizzat mevcut. ±150 km koridor içinde 21 veri noktası var (Trablus'tan itibaren km):

Trablus 0,5 · Hums (Lebde) 4,8 · Zilten 17,9 · Zuvâre 19,1 · Zâviye 25,1 · Terhûne 41,4 · Garyân 82,7 · Yefren 104,5 · Benî Velîd 108,6 · Kabâv (Nefûsa) 127,6 · Mızde 161,8 · **[531,9 km boşluk]** · Ubârî 693,7 · İdehân Murzuk 744,1 · İdehân Ubârî 799,6 · Gât 924,2 · Ramletü Murzuk 924,4 · Vâdî Tanezzûft 1180,6 · **[939,2 km boşluk]** · Goure 2119,8 · Zinder 2165,9 · Katsina 2283,1 · Kano 2372,5.

**Gerçek açıklık (en büyük alt-boşluk): 939,2 km — Vâdî Tanezzûft → Goure (Ténéré).** İkinci boşluk 531,9 km (Mızde → Ubârî, Libya iç çölü). Duyarlılık: koridor ±75 km'ye daralınca en büyük boşluk 985,3 km; ±300 km'ye genişleyince Kaouar (Fachi) ve Aïr (Arlit 1658 · Agadez 1840 · In Gall 1881 km'de) hattına girer ve en büyük boşluk **461,5 km**'e düşer (Tanezzûft → Fachi). Yani "gerçek açıklık" koridor tanımına göre **~460–985 km** bandındadır; 2372,8 km'lik uç mesafesi ölçülebilir ama bölge hiçbir zaman tek parça boş değil.

### Sibirya: Yakutsk (129,7°D, 62,0°K) → Kuzey Buz Denizi kıyısı (~130°D, 72,5°K)
**1167,6 km.** ±150 km koridorda yalnız 2 veri noktası: Yakutsk (3,1 km'de) ve Bulun (964,5 km'de). **Gerçek açıklık: 961,4 km (Yakutsk → Bulun)**; kalan ~203 km (Bulun → kıyı ucu) da boş. Hat üzerinde tek yerleşim zinciri yok denecek kadar seyrek.

### Himalaya: Lhasa (91,1°D, 29,6°K) → Katmandu (85,3°D, 27,7°K)
**604,0 km.** ±150 km koridorda 3 nokta: Gyantse 161,1 · Şigatse 214,8 · Katmandu 601,1 km'de (Lhasa ve Katmandu veri kümesinde mevcut). **Gerçek açıklık: 386,3 km — Şigatse → Katmandu**, yani Himalaya ana sırtının kendisi.

## SONUÇ — eşik adayları

Ölçülen dağılım (A: %90 = 209, %95 = 248, %99 = 336 km) ve gerçek dünya açıklıkları (B+C: Himalaya sırtı 386 km; Sahra 461–939 km; Sibirya 961 km; uç değerler B listesinde 300–3549 km) yan yana konunca üç eşik beliriyor — hangisinin seçileceği bu raporun kapsamı dışındadır, sayılar: **DAR ≈ 300 km** (B listesinin tanım sınırı, %99'un hemen altı): B'nin **75/75** yerleşimi eşiğin ardında kalır — bozkır ve kıyı tipi kıtasal noktalar dahil hiçbiri kurtulmaz; kapı arkasına düşen yalnız %1'lik kuyruk değil, noktaların %1,9'udur; **ORTA ≈ 500 km** (Himalaya gerçek açıklığının 386 km'sinin üstünde, Sahra/Sibirya'nın 940–960 km'sinin çok altında): **13/75** kalır (9 ada + 2 Grönland + Oeiras + Çamdo) — bu eşikte Himalaya sırtı bölüşülür, Ténéré'nin 939 km'lik ana boşluğu hâlâ sahipsiz kalır; **GENİŞ ≈ 700 km** (Sahra'nın ±300-koridor parçalarının 461 km'sinin de üstünde): **7/75** kalır (Rapa Nui, Güney Georgia, Yap, Severnaya Zemlya, Svalbard, Lapaha, Kuzeydoğu Grönland) — yalnız okyanus/kutup uçları yalnızlaşır, tüm kıtasal çöl-tundra açıklıkları bölüşülür.

## Betik (tekrar koşturulabilir)

Aşağıdaki ana betik raporun bütün sayılarını (A, B, eşik tablosu, C uç mesafeleri ve koridor çözümlemesi) üretir; ikinci betik rapordaki ek detayları (canlı olmayan dosya, ad çakışmaları, ±300 km koridor adları) verir. Projeye YAZILMADILAR — geçici dizinde koşturuldu. Koşturma: betiği bir yere kaydedip `py gmp_aciklik.py` (proje kökü varsayılan; istenirse argümanla değiştirilir). Ortam: `py` 3.13.8, numpy 2.2.6.

```python
# GMP-ACIKLIK-0921 — boş toprak bölüşümü eşiği için ölçüm betiği
import sys, os, glob, math
sys.stdout.reconfigure(encoding="utf-8")
import numpy as np

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
if len(sys.argv) > 1:
    KOK = sys.argv[1]
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

R = 6371.0  # km — ortalama Dünya yarıçapı (haversine)

dosyalar = sorted(os.path.basename(p)
                  for p in glob.glob(os.path.join(girdi.DATA, "yerlesimler*.js")))
canli = set(girdi.GIRDI_DOSYALARI)
okunan, okunamayan, eksik_koord = [], [], 0
for ad in dosyalar:
    try:
        okunan.append((ad, girdi.oku_dosya(ad)))
    except Exception as e:
        okunamayan.append((ad, repr(e)))

noktalar = []
for ad, kayitlar in okunan:
    for y in kayitlar:
        lat, lon = y.get("lat"), y.get("lon")
        if lat is None or lon is None:
            eksik_koord += 1
            continue
        noktalar.append((str(y.get("ad", "?")), float(lat), float(lon), ad))

gordu = {}
for p in noktalar:
    gordu.setdefault(p[0], []).append(p)
ayni_konum = sum(1 for a, ls in gordu.items() if len(ls) > 1
                 and len({(round(x[1], 4), round(x[2], 4)) for x in ls}) == 1)
ad_cakisma = {a: ls for a, ls in gordu.items() if len(ls) > 1}

temiz, goruldu = [], set()
for p in noktalar:
    k = (p[0], round(p[1], 4), round(p[2], 4))
    if k not in goruldu:
        goruldu.add(k)
        temiz.append(p)

print(f"DOSYALAR: {len(dosyalar)} bulundu, {len(okunan)} okundu, "
      f"{len(okunamayan)} okunamadı; canlı: {sum(1 for a,_ in okunan if a in canli)}/{len(okunan)}")
for ad, h in okunamayan:
    print(f"  OKUNAMADI: {ad} — {h}")
print(f"KAYIT: {sum(len(k) for _, k in okunan)}; koordinatsız: {eksik_koord}")
print(f"Özdeş mükerrer teke indirildi: {len(noktalar)-len(temiz)}; "
      f"adı çakışan farklı konumlu: {len(ad_cakisma) - ayni_konum}")
print(f"NOKTA (tüm dosyalar): {len(temiz)}; "
      f"NOKTA (canlı {len(canli)} dosya): {sum(1 for p in temiz if p[3] in canli)}")

def enn(pts):
    lat = np.radians(np.array([p[1] for p in pts]))
    lon = np.radians(np.array([p[2] for p in pts]))
    sl, cl = np.sin(lat), np.cos(lat)
    n = len(pts)
    d_min, j_min = np.full(n, np.inf), np.full(n, -1, dtype=int)
    for i in range(n):
        a = (np.sin((lat - lat[i]) / 2) ** 2
             + cl[i] * cl * np.sin((lon - lon[i]) / 2) ** 2)
        d = 2 * R * np.arcsin(np.sqrt(np.clip(a, 0, 1)))
        d[i] = np.inf
        j = int(np.argmin(d))
        d_min[i], j_min[i] = d[j], j
    return d_min, j_min

for etiket, pts in (("TÜM DOSYALAR", temiz), ("CANLI", [p for p in temiz if p[3] in canli])):
    d, _ = enn(pts)
    print(f"\n=== A · {etiket} · n={len(pts)} ===")
    print(f"  p50 {np.percentile(d,50):8.2f} · p75 {np.percentile(d,75):8.2f} · "
          f"p90 {np.percentile(d,90):8.2f} · p95 {np.percentile(d,95):8.2f} · "
          f"p99 {np.percentile(d,99):8.2f}")
    print(f"  max {d.max():8.2f} · ortalama {d.mean():8.2f} · min {d.min():6.2f} km")
    print(f"  ENN<3 km: {(d<3).sum()} · ENN=0: {(d==0).sum()}")

d, j = enn(temiz)
B = sorted((i for i in range(len(temiz)) if d[i] > 300), key=lambda i: -d[i])
print(f"\n=== B · ENN > 300 km · {len(B)} yerleşim (azalan) ===")
for i in B:
    p, q = temiz[i], temiz[j[i]]
    print(f"{p[0]:34} {p[1]:8.3f} {p[2]:9.3f} {d[i]:8.1f}  → {q[0]} "
          f"({q[1]:.2f},{q[2]:.2f})  {p[3]}{'[CANLI]' if p[3] in canli else '[değil]'}")

def vek(la_d, lo_d):
    la, lo = math.radians(la_d), math.radians(lo_d)
    return np.array([math.cos(la)*math.cos(lo), math.cos(la)*math.sin(lo), math.sin(la)])

def koridor(A_, B_, pts, genislik):
    A, Bs = vek(*A_), vek(*B_)
    nv = np.cross(A, Bs); nv = nv / np.linalg.norm(nv)
    AB = math.acos(min(1.0, max(-1.0, float(np.dot(A, Bs))))) * R
    icte = []
    for k, p in enumerate(pts):
        P = vek(p[1], p[2])
        xt = math.asin(min(1.0, max(-1.0, abs(float(np.dot(nv, P)))))) * R
        if xt <= genislik:
            at = math.atan2(float(np.dot(P, np.cross(nv, A))), float(np.dot(P, A))) * R
            if 0 <= at <= AB:
                icte.append((at, k, xt))
    icte.sort()
    serit = [(0.0, None)] + [(a, k) for a, k, _ in icte] + [(AB, None)]
    bos = [(serit[m+1][0]-serit[m][0], serit[m], serit[m+1]) for m in range(len(serit)-1)]
    return AB, icte, sorted(bos, reverse=True)

def rapor(ad_, A_, B_, genislik=150):
    AB, icte, bos = koridor(A_, B_, temiz, genislik)
    print(f"\n=== C · {ad_} · {A_} → {B_} ===  uçlar arası: {AB:.1f} km")
    print(f"  ±{genislik:.0f} km koridor ({len(icte)} nokta, A'dan uzaklıkla):")
    for a, k, x in icte:
        p = temiz[k]
        print(f"    {a:7.1f} km  {p[0]} ({p[1]:.2f},{p[2]:.2f}) şerit-dışı {x:5.1f}")
    for g, s1, s2 in bos[:3]:
        n1 = temiz[s1[1]][0] if s1[1] is not None else f"UÇ-A {A_}"
        n2 = temiz[s2[1]][0] if s2[1] is not None else f"UÇ-B {B_}"
        print(f"    boşluk {g:7.1f} km : {n1} → {n2}")
    return AB, icte, bos

rapor("SAHRA", (32.9, 13.2), (12.0, 8.5))
for gw in (75, 300):
    _, icte, bos = koridor((32.9, 13.2), (12.0, 8.5), temiz, gw)
    print(f"  [duyarlılık] ±{gw} km: {len(icte)} nokta, en büyük boşluk {bos[0][0]:.1f} km")
for ad_, A_, B_ in (("SİBİRYA", (62.0, 129.7), (72.5, 130.0)),
                    ("HİMALAYA", (29.6, 91.1), (27.7, 85.3))):
    rapor(ad_, A_, B_)

print("\n=== EŞİK · B listesinden eşiği aşan (kapı ardında kalan) sayısı ===")
for esik in (200, 250, 300, 350, 400, 450, 500, 550, 600, 700, 800):
    print(f"  eşik {esik:4} km → {sum(1 for i in B if d[i] > esik):3} / {len(B)}")
```

```python
# GMP-ACIKLIK-0921 — ek sorgular (canlı olmayan dosya · ad çakışmaları · ±300 koridor)
import sys, os, glob, math
sys.stdout.reconfigure(encoding="utf-8")
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
import numpy as np
R = 6371.0
canli = set(girdi.GIRDI_DOSYALARI)
dosyalar = sorted(os.path.basename(p)
                  for p in glob.glob(os.path.join(girdi.DATA, "yerlesimler*.js")))
for ad in dosyalar:
    if ad not in canli:
        k = girdi.oku_dosya(ad)
        print(f"CANLI DEĞİL: {ad}: {len(k)} nokta")
        for y in k:
            print(f"  {y.get('ad')} ({y.get('lat')},{y.get('lon')})")
hepsi = [(str(y.get("ad")), float(y["lat"]), float(y["lon"]), ad)
         for ad in dosyalar for y in girdi.oku_dosya(ad)]
for bak in ("el-Ulâ", "Medâin-i Sâlih (el-Hicr)"):
    print(f"'{bak}':", [(p[1], p[2], p[3], p[3] in canli) for p in hepsi if p[0] == bak])

def vek(la_d, lo_d):
    la, lo = math.radians(la_d), math.radians(lo_d)
    return np.array([math.cos(la)*math.cos(lo), math.cos(la)*math.sin(lo), math.sin(la)])
A, B = vek(32.9, 13.2), vek(12.0, 8.5)
nv = np.cross(A, B); nv /= np.linalg.norm(nv)
AB = math.acos(min(1.0, max(-1.0, float(np.dot(A, B))))) * R
print("±300 km koridor — A'dan 1100–2200 km arası:")
for p in sorted(hepsi):
    P = vek(p[1], p[2])
    xt = math.asin(min(1.0, max(-1.0, abs(float(np.dot(nv, P)))))) * R
    at = math.atan2(float(np.dot(P, np.cross(nv, A))), float(np.dot(P, A))) * R
    if 0 <= at <= AB and xt <= 300 and 1100 <= at <= 2200:
        print(f"  {at:7.1f} km  {p[0]:30} ({p[1]:.2f},{p[2]:.2f}) şerit-dışı {xt:5.1f}")
```

---
*Bu rapor bir ölçüm raporudur; veri düzeltilmesi önermez, hiçbir proje dosyası değiştirilmedi. Tek yazılan dosya: `denetim/GMP-ACIKLIK-0921.md`. SINIF/GEREKÇE sütunları rapor yazarının yorumudur, ölçümle aynı tabloda ama ayrı sütunda durur.*
