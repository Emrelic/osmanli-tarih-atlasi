# KRONO-BOSLUK-0930 — kronolojisiz künye ölçümü

Oturum: KRONO-BOSLUK-OLC-0930 · 30 Eylül 2026 · koordinatör: YILDIRIM BAYEZIT · **yalnız ölçüm, hiçbir veriye dokunulmadı.**
Makine okunur tam çıktı: `denetim/KRONO-BOSLUK-0930.json`.

## 0. 🔴 Önce: "348 künyenin hiç kronolojisi yok" cümlesi ölçümde TUTMADI

Dosyalar düz metinle değil **node `vm` ile değerlendirilerek** okundu (çıplak / JSON tırnaklı anahtar farkı böylece ortadan kalkar). Bağlama mantığı `js/app.js:14208-14290`dan (`derinKronolojiBindir` + `cokTarafliKronolojiEkle`) birebir alındı.

```
künye evreni                              704
taranan olaylar*/kronoloji* dosyası       165   (paket_* ATLANDI: 30 dosya)
bu dosyalardaki madde                     8187
dosya katmanında GEÇEN künye              358   (koordinatör: 356)
dosya katmanında GEÇMEYEN künye           346   (koordinatör: 348 — fark 2)
AMA devletler.js künye-içi `kronoloji:`   674 künyede dolu
⇒ sitede HİÇ maddesi olmayan künye         3   → harezm-halk-cumhuriyeti, buhara-halk-cumhuriyeti, luksemburg-hollanda-birligi
```
346 "dosyasız" künyenin 343'ünün künyesinde kendi kronolojisi var; **medyan 3.0 madde** (dağılım: 0→3 · 1→4 · 2→50 · 3→124 · 4→110 · 5→34 · 6+→21). Yani doğru teşhis **"sessiz" değil "İNCE"**: künye kuruluş/doruk/son gibi 2-5 iskelet madde taşıyor, derin kronoloji dosyası yok. Kampanyanın hedefi boşluğu doldurmak değil, iskeleti etlendirmektir — ve yazan oturum künye-içi maddeleri **tekrarlamamalı** (mükerrer).

## 1. 🔴 Yan bulgu — 2084 madde yüklü ama HİÇBİR künyeye bağlı değil

15 bölgesel `KRONOLOJI_<BÖLGE>` değişkeni sitede yükleniyor (pakette), ama `derinKronolojiBindir` adı künye kimliğine çeviremiyor (`KRONOLOJI_BALKAN` → `balkan` künyesi yok) ve `SINIR|COK` deseninde de değiller. `js/*.js`de başka tüketicileri yok (grep: 0). Maddelerin künye-içi kronolojiyle birebir (t+b) örtüşmesi toplam 16. ⇒ **2084 madde yazılmış, yüklenmiş, görünmüyor.** Sitede konsol `KRONOLOJI_* eşlenemedi` uyarısı basar.

| değişken | dosya | madde | taraf alanlı (`kunye`) |
|---|---|---:|---:|
| `KRONOLOJI_ANADOLU` | `kronoloji_anadolu.js` | 281 | 0 |
| `KRONOLOJI_ARABISTAN` | `kronoloji_arabistan.js` | 60 | 0 |
| `KRONOLOJI_BALKAN` | `kronoloji_balkan.js` | 177 | 0 |
| `KRONOLOJI_CIN` | `kronoloji_cin.js` | 136 | 0 |
| `KRONOLOJI_DOGU_AFRIKA` | `kronoloji_dogu_afrika.js` | 218 | 0 |
| `KRONOLOJI_GUNEY_ASYA` | `kronoloji_guney_asya.js` | 153 | 0 |
| `KRONOLOJI_HINDISTAN` | `kronoloji_hindistan.js` | 131 | 10 |
| `KRONOLOJI_IRAN_ARDILLARI` | `kronoloji_iran_ardillari.js` | 155 | 0 |
| `KRONOLOJI_ITALYA_SEHIR` | `kronoloji_italya_sehir.js` | 186 | 0 |
| `KRONOLOJI_JAPONYA` | `kronoloji_japonya.js` | 71 | 0 |
| `KRONOLOJI_KUZEYAFRIKA` | `kronoloji_kuzeyafrika.js` | 83 | 0 |
| `KRONOLOJI_MISIR` | `kronoloji_misir.js` | 120 | 29 |
| `KRONOLOJI_ORTA_ASYA` | `kronoloji_orta_asya.js` | 205 | 0 |
| `KRONOLOJI_OZBEK` | `kronoloji_ozbek.js` | 73 | 1 |
| `KRONOLOJI_SIRBISTAN` | `kronoloji_sirbistan.js` | 35 | 7 |

Çoğu maddede künye kimliği alanı YOK (yalnız `d:` metninde `[Kamakura Şogunluğu]` gibi köşeli önek var) — bağlamak için ya dosyalar `COK_` desenine + `taraflar:` alanına çevrilmeli ya da madde başına kimlik atanmalı. Bu iş 348'lik kampanyadan **önce** gelmeli: bir kısmı zaten yazılmış kronolojidir.

Ayrıca taraf alanında künyesi olmayan kimlikler (15): `alman-konfederasyonu`, `baden`, `brandenburg-prusya`, `dini-elektorlukler`, `dogu-macar-kralligi`, `hannover`, `hansa`, `kuca-hocalari`, `kunduz-hanligi`, `osmanli`, `pfalz`, `saksonya`, `teuton-sovalyeleri`, `trablus-cumhuriyeti`, `wurttemberg` — bu maddeler o tarafa düşmüyor (`osmanli` `kronoloji_sinir_turkiye.js`te; künye kimliği farklı olmalı).

## 2. Öncelik ölçütü — niçin önerilenden farklı

Önerilen: `yerleşim sayısı × ömür`. Kullanılan: **`yerleşim-yıl` = Σ (her `s:` döneminin uzunluğu), künye `f`/`t` penceresine kırpılmış.**
- `sayı × ömür` bir yerleşimi 5 yıl tutulsa da devletin bütün ömrü boyunca sayar. Ölçüldü: İlhanlı 220 yerleşim × 97 yıl = 21.340, gerçek ekran süresi 12.669 yerleşim-yıl.
- Ömrü 1281 öncesine uzanan devletler (Selçuklu, Artuklu, Karaman) haritada yalnız pencere içinde görünür; ölçüt bunu doğal olarak yakalar.
- İki ölçütün ilk-40'ı 27'de örtüşüyor. Yalnız eskide: afsar, artuklu, bicapur, campa, dacu, goryeo, kamakura, karaman, nayak-devletleri, nguyen-hanedani, nogay, selcuklu, sirvansah. Yalnız yenide: adar, irlanda, kanem-tubu, kenya-kuzey-halklari, kri, lan-xang, nama-orlam, ovimbundu, sosoni, tsvana, tubu-tibesti, yarkent-hanligi, zerma.
- ⚠️ Zaafı: az noktalı ama çok uzun ömürlü halk sahalarını (Kri, Şoşoni, Tsvana) yukarı taşır. Bunlar TDV kapsamı dışında kalma eğiliminde — kampanya TDV'si canlı olanlarla başlarsa bu zaaf kendiliğinden süzülür.
- 🔴 **Paylaşılan boya anahtarı ölçülemedi:** 11 künyenin `harita:` anahtarı başka künyelerle ortak (`ingiltere` 11 künye, `fransa-cumhuriyet` 5, `portekiz` 4, `belcika` 3, `suud` 3). `s:` dönemi künyeyi değil boyayı taşır; hangi yerleşimin Siyera Leone'ye ait olduğu bu veriden okunamaz. Sayıları ÜST SINIRDIR (Siyera Leone 499 = İngiltere'nin o penceredeki bütün noktaları). Sıralamaya sokulmadı, §5'te ayrı kova.

## 3. En acil kova — çok yerleşimde çizilen VE dosya kronolojisi olmayan

`yer_s ≥ 20` (künye penceresinde en az 20 yerleşimin `s:`ında): **29 künye** (tek boyalı) + 9 paylaşımlı (üst sınır, ölçülemedi). Eşikler: ≥10 → 52 · ≥20 → 29 · ≥50 → 8 (tek boyalı).

| # | id | ad | yer_s | yerleşim-yıl | künye-içi madde |
|---:|---|---|---:|---:|---:|
| 3 | `ilhanli` | İlhanlı Devleti | 220 | 12669 | 7 |
| 81 | `fetret-suleyman` | Emîr Süleyman Çelebi Saltanatı (Rumeli) | 150 | 1126 | 3 |
| 47 | `afsar` | Afşar Devleti (Nadir Şah) | 148 | 1721 | 4 |
| 12 | `zend` | Zend Hanedanı (İran) | 135 | 5751 | 4 |
| 212 | `fetret-musa` | Musa Çelebi Saltanatı (Rumeli) | 86 | 203 | 3 |
| 197 | `fetret-mehmed` | Çelebi Mehmed Saltanatı (Amasya/Anadolu) | 68 | 254 | 3 |
| 94 | `mehdi` | Mehdî Devleti (Sudan) | 66 | 943 | 5 |
| 274 | `fetret-isa` | İsa Çelebi Saltanatı (Bursa) | 59 | 39 | 2 |
| 2 | `funj` | Func (Sennâr) Sultanlığı | 47 | 14878 | 6 |
| 4 | `nube` | Nûbe Krallıkları (Makurya-Alve) | 47 | 10481 | 5 |
| 19 | `cagatay` | Çağatay Hanlığı | 46 | 3565 | 5 |
| 5 | `zeyyani` | Zeyyânîler (Tilimsan) | 42 | 10428 | 4 |
| 1 | `inuit` | İnuit | 41 | 23586 | 4 |
| 10 | `novgorod` | Novgorod Cumhuriyeti | 40 | 7071 | 5 |
| 23 | `konbaung` | Konbaung Hanedanı (Birmanya) | 33 | 2792 | 4 |
| 6 | `edo-bakufu` | Edo (Tokugawa) Şogunluğu | 32 | 8442 | 5 |
| 24 | `cungar` | Cungar Hanlığı (Kalmuk) | 31 | 2732 | 4 |
| 39 | `maratha` | Maratha Konfederasyonu | 31 | 1867 | 5 |
| 57 | `muzafferi` | Muzafferî Hanedanı | 30 | 1471 | 5 |
| 156 | `selcuklu` | Anadolu (Türkiye) Selçuklu Devleti | 26 | 537 | 6 |
| 42 | `nguyen-hanedani` | Nguyễn Hanedanı (Vietnam) | 25 | 1835 | 4 |
| 83 | `serbedariler` | Serbedârîler | 24 | 1060 | 3 |
| 181 | `tay-son` | Tay Sơn Hanedanı | 24 | 352 | 5 |
| 53 | `karaman` | Karamanoğulları | 23 | 1590 | 10 |
| 11 | `umman` | Umman (Ya'rubî / Bû Saîd) Sultanlığı | 22 | 6047 | 6 |
| 9 | `kamboc-kralligi` | Kamboçya Krallığı (Post-Angkor) | 21 | 7461 | 4 |
| 14 | `nebhani` | Nebhânîler (Uman) | 21 | 4886 | 2 |
| 16 | `majapahit` | Majapahit İmparatorluğu (Cava) | 20 | 4185 | 4 |
| 192 | `tonburi` | Thonburi Krallığı (Siyam) | 20 | 285 | 4 |

## 4. İlk 40 — TDV durumu

Yöntem: slug'a HTTP isteği, yönlendirme İZLENMEDİ; 200'de yalnız `<title>` okundu (yanlış madde tuzağı için), **gövde okunmadı**. Künyenin kendi `kaynak:` alanında atıf yapılmış TDV slug'ları da denendi. TDV arama sayfası sonuçları JS ile yüklüyor ve liste çekilemedi (`bulunamadı`); onun yerine sitenin `ajax_search_auto.php?mdl=txtdelay` ucundan **"madde içeriklerinde geçiş sayısı"** ölçüldü — bu "kaynak var" demek DEĞİL, "TDV bu adı N maddede anıyor" demektir. 000 (taşıma arızası) hiç çıkmadı.

| # | id | yer_s | yerleşim-yıl | künye-içi | TDV hükmü | canlı slug (başlık) | 302 | içerik geçişi |
|---:|---|---:|---:|---:|---|---|---|---|
| 1 | `inuit` | 41 | 23586 | 4 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | eskimolar, eskimo | eskimo:8 |
| 2 | `funj` | 47 | 14878 | 6 | VAR · doğrudan madde | func (FUNC), sennar (SENNÂR) | funclar, fung | — |
| 3 | `ilhanli` | 220 | 12669 | 7 | VAR · doğrudan madde | ilhanlilar (İLHANLILAR) | — | — |
| 4 | `nube` | 47 | 10481 | 5 | VAR · doğrudan madde | nube (NÛBE) | mukurra | — |
| 5 | `zeyyani` | 42 | 10428 | 4 | VAR · doğrudan madde | tilimsan (TİLİMSÂN), zeyyaniler (ZEYYÂNÎLER) | — | — |
| 6 | `edo-bakufu` | 32 | 8442 | 5 | KAPSAYICI · ülke/bölge/halk maddesi (devletin kendi maddesi değil) | japonya (JAPONYA) | tokugawa | tokugawa:0 |
| 7 | `dene` | 13 | 8040 | 3 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | atabask | atabask:0 |
| 8 | `timor-beylikleri` | 18 | 7814 | 4 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | timor, dogu-timor | timor:7 |
| 9 | `kamboc-kralligi` | 21 | 7461 | 4 | KAPSAYICI · ülke/bölge/halk maddesi (devletin kendi maddesi değil) | kambocya (KAMBOÇYA) | — | — |
| 10 | `novgorod` | 40 | 7071 | 5 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | novgorod | novgorod:18 |
| 11 | `umman` | 22 | 6047 | 6 | VAR · doğrudan madde | yarubiler (YA‘RUBÎLER), uman (UMAN), umman (UMMAN) | — | — |
| 12 | `zend` | 135 | 5751 | 4 | VAR · doğrudan madde | zendler (ZENDLER) | zendiyye | — |
| 13 | `malay-sultanliklari` | 16 | 5622 | 4 | KAPSAYICI · ülke/bölge/halk maddesi (devletin kendi maddesi değil) | malezya (MALEZYA) | malaya, kedah | — |
| 14 | `nebhani` | 21 | 4886 | 2 | KAPSAYICI · ülke/bölge/halk maddesi (devletin kendi maddesi değil) | uman (UMAN) | nebhaniler | — |
| 15 | `tunciler` | 15 | 4425 | 3 | KAPSAYICI · ülke/bölge/halk maddesi (devletin kendi maddesi değil) | darfur (DÂRFÛR) | tuncur, tuncurlar | — |
| 16 | `majapahit` | 20 | 4185 | 4 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | macapahit, majapahit | majapahit:2 |
| 17 | `racput` | 19 | 3792 | 4 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | racputlar, racput | racput:36 |
| 18 | `banda-gbaya` | 6 | 3732 | 3 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | banda | gbaya:2 |
| 19 | `cagatay` | 46 | 3565 | 5 | VAR · doğrudan madde | cagatay-hanligi (ÇAĞATAY HANLIĞI) | cagataylar | — |
| 20 | `iskocya` | 9 | 3455 | 4 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | iskocya | iskoçya:43 |
| 21 | `dan-guro` | 5 | 3085 | 2 | KAPSAYICI · ülke/bölge/halk maddesi (devletin kendi maddesi değil) | fildisi-sahili (FİLDİŞİ SAHİLİ) | — | — |
| 22 | `darfur` | 16 | 3024 | 4 | VAR · doğrudan madde | darfur (DÂRFÛR) | — | — |
| 23 | `konbaung` | 33 | 2792 | 4 | KAPSAYICI · ülke/bölge/halk maddesi (devletin kendi maddesi değil) | burma (BURMA), myanmar (MYANMAR) | birmanya | — |
| 24 | `cungar` | 31 | 2732 | 4 | KAPSAYICI · ülke/bölge/halk maddesi (devletin kendi maddesi değil) | kalmuklar (KALMUKLAR) | cungarlar, kalmuk | — |
| 25 | `adar` | 4 | 2472 | 2 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | hausalar, hausa | hausa:6 |
| 26 | `kenya-kuzey-halklari` | 4 | 2458 | 2 | KAPSAYICI · ülke/bölge/halk maddesi (devletin kendi maddesi değil) | kenya (KENYA) | — | — |
| 27 | `ovimbundu` | 12 | 2424 | 3 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | angola | ovimbundu:0 · angola:7 |
| 28 | `tsvana` | 13 | 2408 | 3 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | botsvana | botsvana:3 |
| 29 | `kri` | 4 | 2383 | 3 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | kri | cree:34 |
| 30 | `sosoni` | 4 | 2350 | 3 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | sosoni | şoşoni:0 |
| 31 | `hive` | 8 | 2134 | 5 | VAR · doğrudan madde | hive-hanligi (HÎVE HANLIĞI) | hive | — |
| 32 | `lan-xang` | 5 | 2130 | 4 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | laos | laos:11 |
| 33 | `haydarabad-nizam` | 15 | 2027 | 7 | VAR · doğrudan madde | haydarabad-nizamligi (HAYDARÂBÂD NİZAMLIĞI) | asafcahlar, haydarabad | — |
| 34 | `irlanda` | 6 | 1933 | 4 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | irlanda | irlanda:40 |
| 35 | `yarkent-hanligi` | 10 | 1910 | 4 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | yarkent, saidiyye | yarkent:0 |
| 36 | `tubu-tibesti` | 3 | 1899 | 2 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | tibesti, tubular | tibesti:8 |
| 37 | `kanem-tubu` | 3 | 1896 | 2 | KAPSAYICI · ülke/bölge/halk maddesi (devletin kendi maddesi değil) | kanim (KÂNİM) | kanem, kanem-bornu | — |
| 38 | `nama-orlam` | 3 | 1871 | 3 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | namibya | namibya:4 |
| 39 | `maratha` | 31 | 1867 | 5 | belirsiz · denenen slug'lar 302 · arama listesi ölçülemedi | — | marathalar, maratha | maratha:4 · marata:39 |
| 40 | `zerma` | 3 | 1851 | 3 | KAPSAYICI · ülke/bölge/halk maddesi (devletin kendi maddesi değil) | nijer (NİJER) | zerma | — |

**Özet:** doğrudan madde 10 · yalnız kapsayıcı madde 11 · belirsiz 19. ⚠️ Belirsiz ≠ yok: TDV yer-kişi ansiklopedisidir; Novgorod (18 içerik geçişi), İskoçya (43), İrlanda (40), Racput (36), Maratha/"marata" (39) başka maddelerde anılıyor. Kuzey Amerika halkları (İnuit, Dene, Kri, Şoşoni) ve Tokugawa için TDV birincil olamaz — §4 kuralı gereği akademik kaynak `kaynak:` alanında açıkça yazılır.

## 5. Paylaşılan boya kovası — yerleşim sayısı ÖLÇÜLEMEDİ

| id | ad | boya | paylaşan künye | yer_s ÜST SINIR | künye-içi |
|---|---|---|---:|---:|---:|
| `ingiliz-siyera-leon` | İngiliz Sierra Leone'si (Koloni ve Protektora) | `ingiltere` | 11 | ≤499 | 3 |
| `ingiliz-altin-kiyisi` | İngiliz Altın Kıyısı (Gold Coast Kolonisi) | `ingiltere` | 11 | ≤456 | 4 |
| `ingiliz-kuzey-rodezya` | Kuzey Rodezya (İngiliz Güney Afrika Şirketi İdaresi → İngiliz Protektorası) | `ingiltere` | 11 | ≤455 | 4 |
| `ingiliz-nyasaland` | Nyasaland Protektorası (İngiliz Orta Afrikası) | `ingiltere` | 11 | ≤455 | 3 |
| `fransiz-bati-afrika` | Fransız Batı Afrikası (AOF) | `fransa-cumhuriyet` | 5 | ≤295 | 3 |
| `fransiz-ekvator-afrikasi` | Fransız Ekvator Afrikası (AEF) | `fransa-cumhuriyet` | 5 | ≤295 | 2 |
| `portekiz-angola` | Portekiz Angolası | `portekiz` | 4 | ≤107 | 3 |
| `portekiz-gine` | Portekiz Ginesi | `portekiz` | 4 | ≤68 | 4 |
| `belcika-kongo` | Belçika Kongosu | `belcika` | 3 | ≤64 | 2 |
| `suud-birinci` | I. Suûdî Devleti (Vehhâbî Emirliği) | `suud` | 3 | ≤17 | 5 |
| `suud-ikinci` | II. Suûdî Devleti (Necid Emirliği) | `suud` | 3 | ≤0 | 3 |

## 6. Ek görüş — 704'ün tamamında "ince" kronoloji (ilk 40)

Dosya kronolojisi OLAN künyeler de ince olabilir. Ölçüt: `yerleşim-yıl / (sitede görünen madde + 1)` — ekranda madde başına düşen yerleşim-yıl. Yalnız tek boyalı künyeler.

| # | id | ad | yerleşim-yıl | sitede madde | yoğunluk | dosya katmanında |
|---:|---|---|---:|---:|---:|---|
| 1 | `inuit` | İnuit | 23586 | 4 | 4717 | YOK |
| 2 | `ming-hanedani` | Ming Hanedanı | 22927 | 5 | 3821 | var |
| 3 | `somali` | Somali Sultanlıkları | 19306 | 5 | 3218 | var |
| 4 | `habesistan` | Habeşistan İmparatorluğu | 28638 | 11 | 2386 | var |
| 5 | `funj` | Func (Sennâr) Sultanlığı | 14878 | 6 | 2125 | YOK |
| 6 | `zeyyani` | Zeyyânîler (Tilimsan) | 10428 | 4 | 2086 | YOK |
| 7 | `dene` | Dene (Atabask Halkları) | 8040 | 3 | 2010 | YOK |
| 8 | `nube` | Nûbe Krallıkları (Makurya-Alve) | 10481 | 5 | 1747 | YOK |
| 9 | `nebhani` | Nebhânîler (Uman) | 4886 | 2 | 1629 | YOK |
| 10 | `ilhanli` | İlhanlı Devleti | 12669 | 7 | 1584 | YOK |
| 11 | `timor-beylikleri` | Timor Beylikleri (Liurai'lar) | 7814 | 4 | 1563 | YOK |
| 12 | `kamboc-kralligi` | Kamboçya Krallığı (Post-Angkor) | 7461 | 4 | 1492 | YOK |
| 13 | `yuan-hanedani` | Yuan Hanedanı (Moğol Çin) | 8728 | 5 | 1455 | var |
| 14 | `edo-bakufu` | Edo (Tokugawa) Şogunluğu | 8442 | 5 | 1407 | YOK |
| 15 | `babur-imparatorlugu` | Bâbürlü (Timurlu-Hint) İmparatorluğu | 12266 | 8 | 1363 | var |
| 16 | `danimarka` | Danimarka Krallığı (1814'e kadar Danimarka-Norveç) | 16343 | 11 | 1362 | var |
| 17 | `novgorod` | Novgorod Cumhuriyeti | 7071 | 5 | 1178 | YOK |
| 18 | `zend` | Zend Hanedanı (İran) | 5751 | 4 | 1150 | YOK |
| 19 | `malay-sultanliklari` | Malay Sultanlıkları (Kedah, Patani, Perak, Selangor, Trengganu, Pahang) | 5622 | 4 | 1124 | YOK |
| 20 | `mogulistan` | Moğulistan (Doğu Çağatay Hanlığı) | 5614 | 4 | 1123 | var |
| 21 | `tunciler` | Tunciler (Tunjur) Hanedanlığı | 4425 | 3 | 1106 | YOK |
| 22 | `adal` | Adal Sultanlığı / Harar Emirliği | 8749 | 7 | 1094 | var |
| 23 | `kanem-bornu` | Kanem-Bornu İmparatorluğu | 6547 | 5 | 1091 | var |
| 24 | `joseon` | Joseon Hanedanı (Kore) | 8242 | 7 | 1030 | var |
| 25 | `dan-guro` | Dan · Guro · Bete Halkları (Fildişi orman kuşağı) | 3085 | 2 | 1028 | YOK |
| 26 | `isvec-birlik-oncesi` | İsveç Krallığı (Kalmar Birliği Öncesi ve Dönemi) | 10263 | 9 | 1026 | var |
| 27 | `qing-hanedani` | Qing Hanedanı (Mançu) | 32824 | 34 | 938 | var |
| 28 | `banda-gbaya` | Banda ve Gbaya Halkları | 3732 | 3 | 933 | YOK |
| 29 | `yemen-zeydi` | Yemen Zeydî İmamlığı | 6315 | 6 | 902 | var |
| 30 | `muromachi` | Muromachi (Ashikaga) Şogunluğu | 4411 | 4 | 882 | var |
| 31 | `umman` | Umman (Ya'rubî / Bû Saîd) Sultanlığı | 6047 | 6 | 864 | YOK |
| 32 | `norvec-kralligi` | Norveç Krallığı (Birlik Öncesi ve Kalmar Dönemi) | 6014 | 6 | 859 | var |
| 33 | `hafsi` | Hafsîler (Tunus) | 16048 | 18 | 845 | var |
| 34 | `majapahit` | Majapahit İmparatorluğu (Cava) | 4185 | 4 | 837 | YOK |
| 35 | `kuzey-yuan` | Kuzey Yuan (Moğol Hanlığı) | 4974 | 5 | 829 | var |
| 36 | `adar` | Adar Hausa Sahası (Tahoua · Konni · Madaova) | 2472 | 2 | 824 | YOK |
| 37 | `kenya-kuzey-halklari` | Kuzey Kenya Halkları (Borana · Rendille · Turkana · Somali klanları) | 2458 | 2 | 819 | YOK |
| 38 | `kazak-hanligi` | Kazak Hanlığı | 6375 | 7 | 797 | var |
| 39 | `ayutthaya` | Ayutthaya Krallığı (Siyam) | 7160 | 8 | 796 | var |
| 40 | `racput` | Racput Devletleri (Mevar, Mârvâr, Amber, Bikaner) | 3792 | 4 | 758 | YOK |

## 7. Tam liste — 346 dosyasız künye, öncelik sıralı

Sütunlar: `yer_s` = künye penceresinde `s:`ında geçtiği yerleşim · `isg` = `isg:` ile · `y-yıl` = yerleşim-yıl · `harita` = künyede `harita:` alanı · `boya` = `renkler.BOYALAR`da boyası var mı · `kiçi` = künye-içi madde.

| # | id | ad | bölge | f | t | ömür | yer_s | isg | y-yıl | harita | boya | kiçi |
|---:|---|---|---|---|---|---:|---:|---:|---:|---|---|---:|
| 1 | `inuit` | İnuit | kuzey-amerika | 1281-01-01 | 1880-09-01 | 599.7 | 41 | 0 | 23586 | — | ✓ | 4 |
| 2 | `funj` | Func (Sennâr) Sultanlığı | misir-sudan | 1504-01-01 | 1821-06-14 | 317.5 | 47 | 0 | 14878 | funj | ✓ | 6 |
| 3 | `ilhanli` | İlhanlı Devleti | iran | 1256-01-01 | 1353-01-01 | 97.0 | 220 | 0 | 12669 | ilhanli | ✓ | 7 |
| 4 | `nube` | Nûbe Krallıkları (Makurya-Alve) | misir-sudan | 543-01-01 | 1504-01-01 | 961.0 | 47 | 0 | 10481 | nube | ✓ | 5 |
| 5 | `zeyyani` | Zeyyânîler (Tilimsan) | kuzey-afrika | 1236-01-01 | 1553-01-01 | 317.0 | 42 | 0 | 10428 | zeyyani | ✓ | 4 |
| 6 | `edo-bakufu` | Edo (Tokugawa) Şogunluğu | dogu-asya | 1603-03-24 | 1868-01-03 | 264.8 | 32 | 0 | 8442 | edo-bakufu | ✓ | 5 |
| 7 | `dene` | Dene (Atabask Halkları) | kuzey-amerika | 1281-01-01 | 1899-06-21 | 618.5 | 13 | 0 | 8040 | — | ✓ | 3 |
| 8 | `timor-beylikleri` | Timor Beylikleri (Liurai'lar) | guneydogu-asya | 1281-01-01 | 1769-10-10 | 488.8 | 18 | 0 | 7814 | timor-beylikleri | ✓ | 4 |
| 9 | `kamboc-kralligi` | Kamboçya Krallığı (Post-Angkor) | guneydogu-asya | 1431-01-01 | 1923-10-29 | 492.8 | 21 | 0 | 7461 | kamboc-kralligi | ✓ | 4 |
| 10 | `novgorod` | Novgorod Cumhuriyeti | dogu-avrupa | 1136-01-01 | 1478-01-15 | 342.0 | 40 | 0 | 7071 | — | ✓ | 5 |
| 11 | `umman` | Umman (Ya'rubî / Bû Saîd) Sultanlığı | arabistan | 1624-01-01 | 1923-10-29 | 299.8 | 22 | 0 | 6047 | umman | ✓ | 6 |
| 12 | `zend` | Zend Hanedanı (İran) | iran | 1751-01-01 | 1794-01-01 | 43.0 | 135 | 0 | 5751 | zend | ✓ | 4 |
| 13 | `malay-sultanliklari` | Malay Sultanlıkları (Kedah, Patani, Perak, Selangor, Trengganu, Pahang) | guneydogu-asya | 1281-01-01 | 1909-07-10 | 628.5 | 16 | 0 | 5622 | malay-sultanliklari | ✓ | 4 |
| 14 | `nebhani` | Nebhânîler (Uman) | arabistan | 1281-01-01 | 1515-04-01 | 234.2 | 21 | 0 | 4886 | nebhani | ✓ | 2 |
| 15 | `tunciler` | Tunciler (Tunjur) Hanedanlığı | misir-sudan | 1400-01-01 | 1695-01-01 | 295.0 | 15 | 0 | 4425 | — | ✓ | 3 |
| 16 | `majapahit` | Majapahit İmparatorluğu (Cava) | guneydogu-asya | 1293-01-01 | 1527-01-01 | 234.0 | 20 | 0 | 4185 | majapahit | ✓ | 4 |
| 17 | `racput` | Racput Devletleri (Mevar, Mârvâr, Amber, Bikaner) | guney-asya | 1281-01-01 | 1947-08-15 | 666.6 | 19 | 0 | 3792 | racput | ✓ | 4 |
| 18 | `banda-gbaya` | Banda ve Gbaya Halkları | orta-afrika | 1281-01-01 | 1903-01-01 | 622.0 | 6 | 0 | 3732 | — | ✓ | 3 |
| 19 | `cagatay` | Çağatay Hanlığı | orta-asya | 1227-01-01 | 1370-01-01 | 143.0 | 46 | 0 | 3565 | cagatay | ✓ | 5 |
| 20 | `iskocya` | İskoçya Krallığı | bati-avrupa | 843-01-01 | 1707-05-01 | 864.3 | 9 | 0 | 3455 | iskocya | ✓ | 4 |
| 21 | `dan-guro` | Dan · Guro · Bete Halkları (Fildişi orman kuşağı) | bati-afrika | 1281-01-01 | 1898-01-01 | 617.0 | 5 | 0 | 3085 | — | ✓ | 2 |
| 22 | `darfur` | Dârfûr Sultanlığı (Keira Hanedanı) | misir-sudan | 1695-01-01 | 1916-11-06 | 221.8 | 16 | 0 | 3024 | darfur | ✓ | 4 |
| 23 | `konbaung` | Konbaung Hanedanı (Birmanya) | guneydogu-asya | 1752-01-01 | 1885-11-29 | 133.9 | 33 | 0 | 2792 | konbaung | ✓ | 4 |
| 24 | `cungar` | Cungar Hanlığı (Kalmuk) | orta-asya | 1634-01-01 | 1758-01-01 | 124.0 | 31 | 0 | 2732 | cungar | ✓ | 4 |
| 25 | `adar` | Adar Hausa Sahası (Tahoua · Konni · Madaova) | bati-afrika | 1281-01-01 | 1899-01-01 | 618.0 | 4 | 0 | 2472 | — | ✓ | 2 |
| 26 | `kenya-kuzey-halklari` | Kuzey Kenya Halkları (Borana · Rendille · Turkana · Somali klanları) | dogu-afrika | 1281-01-01 | 1895-07-01 | 614.5 | 4 | 0 | 2458 | — | ✓ | 2 |
| 27 | `ovimbundu` | Ovimbundu Krallıkları (Bailundu · Viye · Vambu) | orta-afrika | 1700-01-01 | 1902-01-01 | 202.0 | 12 | 0 | 2424 | — | ✓ | 3 |
| 28 | `tsvana` | Tsvana Krallıkları (Ngvato · Kvena · Ngvaketse · Kgatla · Tavana) | guney-afrika | 1700-01-01 | 1885-03-31 | 185.2 | 13 | 0 | 2408 | — | ✓ | 3 |
| 29 | `kri` | Kri (Nehiyaw) | kuzey-amerika | 1281-01-01 | 1876-08-23 | 595.6 | 4 | 0 | 2383 | — | ✓ | 3 |
| 30 | `sosoni` | Şoşoni | kuzey-amerika | 1281-01-01 | 1868-07-03 | 587.5 | 4 | 0 | 2350 | — | ✓ | 3 |
| 31 | `hive` | Hive Hanlığı | orta-asya | 1512-01-01 | 1920-04-26 | 408.3 | 8 | 0 | 2134 | hive | ✓ | 5 |
| 32 | `lan-xang` | Lan Xang Krallığı (Laos) | guneydogu-asya | 1281-01-01 | 1707-01-01 | 426.0 | 5 | 0 | 2130 | lan-xang | ✓ | 4 |
| 33 | `haydarabad-nizam` | Haydarabad Nizamlığı (Âsafcâh Hanedanı) | guney-asya | 1724-10-11 | 1948-09-17 | 223.9 | 15 | 0 | 2027 | — | ✓ | 7 |
| 34 | `irlanda` | İrlanda (Gal Beylikleri ve Krallığı) | bati-avrupa | 1200-01-01 | 1603-03-30 | 403.2 | 6 | 0 | 1933 | irlanda | ✓ | 4 |
| 35 | `yarkent-hanligi` | Yarkent (Sa'îdiyye) Hanlığı | orta-asya | 1514-01-01 | 1705-01-01 | 191.0 | 10 | 0 | 1910 | yarkent-hanligi | ✓ | 4 |
| 36 | `tubu-tibesti` | Tibesti Teda (Tubu) Konfederasyonu | orta-afrika | 1281-01-01 | 1914-01-01 | 633.0 | 3 | 0 | 1899 | — | ✓ | 2 |
| 37 | `kanem-tubu` | Kanem Tubu Sahası (Teda-Daza) | orta-afrika | 1281-01-01 | 1913-01-01 | 632.0 | 3 | 0 | 1896 | — | ✓ | 2 |
| 38 | `nama-orlam` | Nama ve Orlam Kaptanlıkları | guney-afrika | 1281-01-01 | 1904-10-03 | 623.8 | 3 | 0 | 1871 | — | ✓ | 3 |
| 39 | `maratha` | Maratha Konfederasyonu | guney-asya | 1674-06-06 | 1818-06-03 | 144.0 | 31 | 0 | 1867 | maratha | ✓ | 5 |
| 40 | `zerma` | Zerma (Djerma) Devletçikleri | bati-afrika | 1281-01-01 | 1898-01-01 | 617.0 | 3 | 0 | 1851 | — | ✓ | 3 |
| 41 | `mossi-vagadugu` | Mossi Krallığı (Vagadugu) | bati-afrika | 1281-01-01 | 1896-09-01 | 615.7 | 3 | 0 | 1847 | — | ✓ | 4 |
| 42 | `nguyen-hanedani` | Nguyễn Hanedanı (Vietnam) | guneydogu-asya | 1802-06-01 | 1945-08-25 | 143.2 | 25 | 0 | 1835 | nguyen-hanedani | ✓ | 4 |
| 43 | `nyamvezi` | Nyamvezi Şeflikleri (Unyanyembe · Mirambo) | dogu-afrika | 1281-01-01 | 1890-11-04 | 609.8 | 3 | 0 | 1830 | — | ✓ | 3 |
| 44 | `benin-kralligi` | Benin Krallığı (Nijerya) | bati-afrika | 1180-01-01 | 1897-02-18 | 717.1 | 3 | 0 | 1813 | — | ✓ | 4 |
| 45 | `campa` | Champa Krallığı | guneydogu-asya | 1281-01-01 | 1832-01-01 | 551.0 | 8 | 0 | 1734 | campa | ✓ | 5 |
| 46 | `artuklu` | Artukoğulları (Artuklu Beyliği) | anadolu | 1102-01-01 | 1409-01-01 | 307.0 | 14 | 0 | 1726 | artuklu | ✓ | 4 |
| 47 | `afsar` | Afşar Devleti (Nadir Şah) | iran | 1736-03-08 | 1796-01-01 | 59.8 | 148 | 0 | 1721 | afsar | ✓ | 4 |
| 48 | `bali-kralliklari` | Bali Krallıkları (Gelgel, Klungkung, Karangasem) | guneydogu-asya | 1478-01-01 | 1908-04-28 | 430.3 | 4 | 0 | 1701 | bali-kralliklari | ✓ | 4 |
| 49 | `dacu` | Dâcû (Daju) Hanedanlığı | misir-sudan | 1200-01-01 | 1400-01-01 | 200.0 | 14 | 0 | 1666 | — | ✓ | 2 |
| 50 | `vaday` | Vaday Sultanlığı | orta-afrika | 1635-01-01 | 1909-06-02 | 274.4 | 6 | 0 | 1647 | — | ✓ | 3 |
| 51 | `ternate-sultanligi` | Ternate Sultanlığı (Moluk) | guneydogu-asya | 1281-01-01 | 1663-01-01 | 382.0 | 5 | 0 | 1635 | ternate-sultanligi | ✓ | 5 |
| 52 | `sirvansah` | Şirvanşahlar | kafkasya | 861-01-01 | 1538-01-01 | 677.0 | 9 | 0 | 1600 | — | ✓ | 6 |
| 53 | `karaman` | Karamanoğulları | anadolu | 1256-01-01 | 1487-01-01 | 231.0 | 23 | 0 | 1590 | karaman | ✓ | 10 |
| 54 | `pagaruyung` | Pagaruyung (Minangkabau) Krallığı | guneydogu-asya | 1281-01-01 | 1833-01-01 | 552.0 | 4 | 0 | 1550 | pagaruyung | ✓ | 4 |
| 55 | `merina-oncesi` | İmerina Krallıkları (Merina birleşmesi öncesi) | dogu-afrika | 1281-01-01 | 1787-01-01 | 506.0 | 3 | 0 | 1518 | — | ✓ | 3 |
| 56 | `nahua-sehir-devletleri` | Nahua Şehir-Devletleri (Altepetl'ler) | orta-amerika-karayip | 1281-01-01 | 1521-08-13 | 240.6 | 7 | 0 | 1477 | — | ✓ | 3 |
| 57 | `muzafferi` | Muzafferî Hanedanı | iran | 1318-01-01 | 1393-01-01 | 75.0 | 30 | 0 | 1471 | — | ✓ | 5 |
| 58 | `goryeo` | Goryeo Hanedanı (Kore) | dogu-asya | 918-01-01 | 1392-07-17 | 474.5 | 15 | 0 | 1448 | goryeo | ✓ | 3 |
| 59 | `gucerat-sultanligi` | Gucerât Sultanlığı | guney-asya | 1407-01-01 | 1573-01-01 | 166.0 | 12 | 0 | 1444 | gucerat-sultanligi | ✓ | 4 |
| 60 | `nogay` | Nogay Ordası | sibirya-bozkir | 1440-01-01 | 1783-01-01 | 343.0 | 14 | 0 | 1418 | nogay | ✓ | 6 |
| 61 | `bicapur` | Âdilşâhî Sultanlığı (Bîcâpûr) | guney-asya | 1489-01-01 | 1686-09-22 | 197.7 | 15 | 0 | 1361 | bicapur | ✓ | 4 |
| 62 | `lunda-imparatorlugu` | Lunda İmparatorluğu | orta-afrika | 1665-01-01 | 1887-01-01 | 222.0 | 6 | 0 | 1332 | — | ✓ | 3 |
| 63 | `creek-konfederasyonu` | Creek (Mvskoke) Konfederasyonu | kuzey-amerika | 1281-01-01 | 1832-03-24 | 551.2 | 3 | 0 | 1286 | — | ✓ | 4 |
| 64 | `tuareg-accer` | Kel Accer Tuareg Konfederasyonu | kuzey-afrika | 1281-01-01 | 1911-01-01 | 630.0 | 2 | 0 | 1260 | — | ✓ | 2 |
| 65 | `kibris-krallik` | Kıbrıs Krallığı (Lüzinyan) | anadolu | 1192-01-01 | 1489-02-26 | 297.2 | 6 | 0 | 1249 | lusignan | ✓ | 3 |
| 66 | `herero` | Herero Halkı | guney-afrika | 1281-01-01 | 1904-01-12 | 623.0 | 2 | 0 | 1246 | — | ✓ | 3 |
| 67 | `tuareg-ahaggar` | Kel Ahaggar Tuareg Konfederasyonu | kuzey-afrika | 1281-01-01 | 1902-05-07 | 621.3 | 2 | 0 | 1243 | — | ✓ | 2 |
| 68 | `antandroy` | Antandroy ve Bara Halkları | dogu-afrika | 1281-01-01 | 1900-01-01 | 619.0 | 2 | 0 | 1238 | — | ✓ | 3 |
| 69 | `jukun-kvararafa` | Kvararafa (Jukun) Krallığı | bati-afrika | 1281-01-01 | 1900-01-01 | 619.0 | 2 | 0 | 1238 | — | ✓ | 4 |
| 70 | `kaonde-ila` | Kaonde ve İla Halkları | dogu-afrika | 1281-01-01 | 1900-01-01 | 619.0 | 2 | 0 | 1238 | — | ✓ | 3 |
| 71 | `bunyoro` | Bunyoro-Kitara Krallığı | dogu-afrika | 1281-01-01 | 1899-04-09 | 618.3 | 2 | 0 | 1237 | — | ✓ | 3 |
| 72 | `borgu` | Borgu Bariba Krallıkları (Nikki · Busa) | bati-afrika | 1281-01-01 | 1898-01-01 | 617.0 | 2 | 0 | 1234 | — | ✓ | 3 |
| 73 | `fipa-nyakyusa` | Fipa ve Nyakyusa Halkları | dogu-afrika | 1281-01-01 | 1890-11-04 | 609.8 | 2 | 0 | 1220 | — | ✓ | 4 |
| 74 | `arakan` | Arakan (Mrauk U) Krallığı | guneydogu-asya | 1281-01-01 | 1785-01-02 | 504.0 | 3 | 0 | 1215 | arakan | ✓ | 5 |
| 75 | `nijer-deltasi` | Nijer Deltası Şehir Devletleri (Kalabar · Bonny) | bati-afrika | 1281-01-01 | 1884-09-10 | 603.7 | 2 | 0 | 1207 | — | ✓ | 4 |
| 76 | `payut` | Payut (Paiute) | kuzey-amerika | 1281-01-01 | 1872-01-01 | 591.0 | 2 | 0 | 1182 | — | ✓ | 3 |
| 77 | `hayda` | Hayda | kuzey-amerika | 1281-01-01 | 1858-08-02 | 577.6 | 2 | 0 | 1155 | — | ✓ | 3 |
| 78 | `bugis-kralliklari` | Bugis Krallıkları (Bone, Wajo, Soppeng — Tellumpoccoe) | guneydogu-asya | 1330-01-01 | 1905-08-06 | 575.6 | 2 | 0 | 1151 | — | ✓ | 4 |
| 79 | `venezuela-cumhuriyeti` | Venezuela Cumhuriyeti | guney-amerika | 1830-01-13 | 1923-10-29 | 93.8 | 15 | 0 | 1145 | — | ✓ | 5 |
| 80 | `ojibwe` | Ojibwe (Anişinabe) | kuzey-amerika | 1281-01-01 | 1850-09-07 | 569.7 | 2 | 0 | 1139 | — | ✓ | 3 |
| 81 | `fetret-suleyman` | Emîr Süleyman Çelebi Saltanatı (Rumeli) | balkanlar | 1402-07-28 | 1411-02-17 | 8.6 | 150 | 0 | 1126 | suleyman-celebi | ✓ | 3 |
| 82 | `ahom` | Ahom Krallığı (Assam) | guney-asya | 1281-01-01 | 1826-01-01 | 545.0 | 2 | 0 | 1072 | ahom | ✓ | 4 |
| 83 | `serbedariler` | Serbedârîler | iran | 1337-09-09 | 1386-01-01 | 48.3 | 24 | 0 | 1060 | — | ✓ | 3 |
| 84 | `bambara` | Bambara Krallıkları (Segu ve Kaarta) | bati-afrika | 1650-01-01 | 1861-03-10 | 211.2 | 5 | 0 | 1056 | — | ✓ | 4 |
| 85 | `cherokee` | Cherokee Ulusu | kuzey-amerika | 1281-01-01 | 1791-07-02 | 510.5 | 2 | 0 | 1021 | — | ✓ | 4 |
| 86 | `sibir-hanligi` | Sibir Hanlığı | orta-asya | 1430-01-01 | 1598-08-20 | 168.6 | 6 | 0 | 1012 | sibir-hanligi | ✓ | 4 |
| 87 | `nayak-devletleri` | Nâyak Beylikleri (Madurai, Tancûr, Cinci, Keladi) | guney-asya | 1336-01-01 | 1763-01-01 | 427.0 | 7 | 0 | 1008 | nayak-devletleri | ✓ | 4 |
| 88 | `alutiiq` | Alutiiq (Sugpiaq) | kuzey-amerika | 1281-01-01 | 1784-08-14 | 503.6 | 2 | 0 | 1007 | — | ✓ | 2 |
| 89 | `laos-kralliklari` | Laos Krallıkları (Luang Prabang, Vientiane, Champasak) | guneydogu-asya | 1707-01-01 | 1893-10-03 | 186.8 | 7 | 0 | 999 | — | ✓ | 4 |
| 90 | `bemba` | Bemba Krallığı (Citimukulu) | dogu-afrika | 1700-01-01 | 1899-01-01 | 199.0 | 5 | 0 | 995 | — | ✓ | 3 |
| 91 | `golkonda` | Kutubşâhî Sultanlığı (Golkonda) | guney-asya | 1512-01-01 | 1687-09-21 | 175.7 | 6 | 0 | 975 | golkonda | ✓ | 4 |
| 92 | `banjar-sultanligi` | Bancar (Banjar) Sultanlığı | guneydogu-asya | 1526-01-01 | 1860-06-11 | 334.4 | 3 | 0 | 973 | banjar-sultanligi | ✓ | 4 |
| 93 | `mazenderan-marasi` | Mar'aşî Seyyidleri (Mâzenderan) | iran | 1359-01-01 | 1596-01-01 | 237.0 | 5 | 0 | 952 | — | ✓ | 3 |
| 94 | `mehdi` | Mehdî Devleti (Sudan) | misir-sudan | 1881-03-01 | 1898-09-02 | 17.5 | 66 | 0 | 943 | mehdi | ✓ | 5 |
| 95 | `kazan` | Kazan Hanlığı | sibirya-bozkir | 1437-01-01 | 1552-10-02 | 115.8 | 10 | 0 | 920 | kazan | ✓ | 3 |
| 96 | `kamakura` | Kamakura Şogunluğu (Japonya) | dogu-asya | 1185-01-01 | 1333-07-04 | 148.5 | 17 | 0 | 893 | kamakura | ✓ | 4 |
| 97 | `travankur` | Travankur Krallığı (Venâd) | guney-asya | 1281-01-01 | 1949-07-01 | 668.5 | 2 | 0 | 864 | travankur | ✓ | 4 |
| 98 | `dogu-sumatra-sultanliklari` | Doğu Sumatra Sultanlıkları (Jambi, Siyak, Deli, Indragiri) | guneydogu-asya | 1615-01-01 | 1858-01-01 | 243.0 | 4 | 0 | 847 | — | ✓ | 3 |
| 99 | `choctaw` | Choctaw Konfederasyonu | kuzey-amerika | 1281-01-01 | 1830-09-27 | 549.7 | 2 | 0 | 799 | — | ✓ | 3 |
| 100 | `palembang-sultanligi` | Palembang Sultanlığı | guneydogu-asya | 1281-01-01 | 1825-01-01 | 544.0 | 2 | 0 | 790 | palembang-sultanligi | ✓ | 4 |
| 101 | `gova-makassar` | Gova (Makassar) Sultanlığı | guneydogu-asya | 1281-01-01 | 1667-11-18 | 386.9 | 2 | 0 | 774 | gova-makassar | ✓ | 4 |
| 102 | `avad` | Avad Nevablığı (Oudh) | guney-asya | 1722-01-01 | 1856-02-07 | 134.1 | 9 | 0 | 730 | — | ✓ | 4 |
| 103 | `zapotek-krallik` | Zapotek Krallığı | orta-amerika-karayip | 1281-01-01 | 1523-01-01 | 242.0 | 3 | 0 | 726 | — | ✓ | 2 |
| 104 | `kalikut` | Kalikut Zamorinliği | guney-asya | 1281-01-01 | 1766-01-01 | 485.0 | 2 | 0 | 709 | kalikut | ✓ | 5 |
| 105 | `hurmuz-sultanligi` | Hürmüz Sultanlığı | iran | 1281-01-01 | 1514-01-01 | 233.0 | 3 | 0 | 687 | — | ✓ | 2 |
| 106 | `zende` | Zende (Azande) Sultanlıkları | orta-afrika | 1750-01-01 | 1912-01-01 | 162.0 | 4 | 0 | 648 | — | ✓ | 3 |
| 107 | `tidore-sultanligi` | Tidore Sultanlığı (Moluk) | guneydogu-asya | 1281-01-01 | 1923-10-29 | 642.8 | 1 | 0 | 643 | tidore-sultanligi | ✓ | 4 |
| 108 | `purepecha-imparatorlugu` | Purépecha (Tarasko) İmparatorluğu | orta-amerika-karayip | 1300-01-01 | 1530-02-14 | 230.1 | 3 | 0 | 640 | — | ✓ | 3 |
| 109 | `manipur` | Manipûr Krallığı | guney-asya | 1281-01-01 | 1949-10-15 | 668.8 | 1 | 0 | 636 | manipur | ✓ | 5 |
| 110 | `tui-tonga-imparatorlugu` | Tuʻi Tonga İmparatorluğu | okyanusya | 1220-01-01 | 1845-12-04 | 625.9 | 1 | 0 | 626 | — | ✓ | 2 |
| 111 | `benihalid` | Benî Hâlid Emirliği (Lahsa) | arabistan | 1670-01-01 | 1830-01-01 | 160.0 | 5 | 0 | 625 | benihalid | ✓ | 7 |
| 112 | `birom-plato` | Jos Platosu Halkları (Birom · Jarava) | bati-afrika | 1281-01-01 | 1903-01-01 | 622.0 | 1 | 0 | 622 | — | ✓ | 2 |
| 113 | `aydin` | Aydınoğulları | anadolu | 1308-01-01 | 1425-06-01 | 117.4 | 8 | 0 | 621 | aydin | ✓ | 6 |
| 114 | `sakalava-boina` | Boina Sakalava Krallığı | dogu-afrika | 1690-01-01 | 1897-02-28 | 207.2 | 3 | 0 | 621 | — | ✓ | 4 |
| 115 | `tiv` | Tiv Halkı | bati-afrika | 1281-01-01 | 1900-01-01 | 619.0 | 1 | 0 | 619 | — | ✓ | 2 |
| 116 | `dagbon` | Dagbon Krallığı (Dagomba) | bati-afrika | 1281-01-01 | 1899-01-01 | 618.0 | 1 | 0 | 618 | — | ✓ | 3 |
| 117 | `tuareg-adag` | Kel Adag Tuareg Konfederasyonu (Adrar des Ifoghas) | bati-afrika | 1281-01-01 | 1899-01-01 | 618.0 | 1 | 0 | 618 | — | ✓ | 3 |
| 118 | `tuareg-ivellemmedan` | İvellemmedan Tuareg Konfederasyonu | bati-afrika | 1281-01-01 | 1899-01-01 | 618.0 | 1 | 0 | 618 | — | ✓ | 3 |
| 119 | `gurma` | Gurma Krallığı | bati-afrika | 1281-01-01 | 1897-01-01 | 616.0 | 1 | 0 | 616 | — | ✓ | 3 |
| 120 | `sidamo-kralliklari` | Sidamo Krallıkları | dogu-afrika | 1281-01-01 | 1897-01-01 | 616.0 | 1 | 0 | 616 | sidamo | ✓ | 2 |
| 121 | `kamba` | Kamba Halkı | dogu-afrika | 1281-01-01 | 1895-07-01 | 614.5 | 1 | 0 | 614 | — | ✓ | 2 |
| 122 | `gambiya-mandinka` | Gambiya Mandinka Devletçikleri (Niumi · Kombo · Vuli) | bati-afrika | 1281-01-01 | 1894-01-01 | 613.0 | 1 | 0 | 613 | — | ✓ | 3 |
| 123 | `vollayta-kralligi` | Vollayta (Wolaita) Krallığı | dogu-afrika | 1281-01-01 | 1894-01-17 | 613.0 | 1 | 0 | 613 | vollayta | ✓ | 3 |
| 124 | `kesmir` | Keşmir Sultanlığı (Şah Mîr Hânedanı) | guney-asya | 1281-01-01 | 1586-10-01 | 305.8 | 2 | 0 | 612 | kesmir | ✓ | 5 |
| 125 | `lakota` | Lakota (Teton Sioux) | kuzey-amerika | 1281-01-01 | 1890-12-29 | 610.0 | 1 | 0 | 610 | — | ✓ | 4 |
| 126 | `manica` | Manica Krallığı | guney-afrika | 1281-01-01 | 1891-01-01 | 610.0 | 1 | 0 | 610 | — | ✓ | 3 |
| 127 | `magindanao-sultanligi` | Magindanao Sultanlığı | guneydogu-asya | 1281-01-01 | 1888-01-01 | 607.0 | 1 | 0 | 607 | magindanao-sultanligi | ✓ | 5 |
| 128 | `eve-notse` | Eve (Ewe) Notse Birliği | bati-afrika | 1281-01-01 | 1884-07-05 | 603.5 | 1 | 0 | 604 | — | ✓ | 3 |
| 129 | `ute` | Ute (Núuchiu) | kuzey-amerika | 1281-01-01 | 1880-01-01 | 599.0 | 1 | 0 | 599 | — | ✓ | 3 |
| 130 | `nez-perce` | Nez Perce (Nimíipuu) | kuzey-amerika | 1281-01-01 | 1877-10-05 | 596.8 | 1 | 0 | 597 | — | ✓ | 3 |
| 131 | `xhosa` | Xhosa Krallıkları | guney-afrika | 1281-01-01 | 1878-01-01 | 597.0 | 1 | 0 | 597 | — | ✓ | 9 |
| 132 | `meskalero-apaci` | Meskalero Apaçileri | kuzey-amerika | 1281-01-01 | 1873-01-01 | 592.0 | 1 | 0 | 592 | — | ✓ | 4 |
| 133 | `yavapai` | Yavapai | kuzey-amerika | 1281-01-01 | 1873-01-01 | 592.0 | 1 | 0 | 592 | — | ✓ | 3 |
| 134 | `navaho` | Navaho (Diné) | kuzey-amerika | 1281-01-01 | 1868-06-01 | 587.4 | 1 | 0 | 587 | — | ✓ | 4 |
| 135 | `tlingit` | Tlingit | kuzey-amerika | 1281-01-01 | 1867-10-18 | 586.8 | 1 | 0 | 587 | — | ✓ | 4 |
| 136 | `yupik` | Yupik | kuzey-amerika | 1281-01-01 | 1867-10-18 | 586.8 | 1 | 0 | 587 | — | ✓ | 4 |
| 137 | `mohave` | Mohave (Aha Macav) | kuzey-amerika | 1281-01-01 | 1865-01-01 | 584.0 | 1 | 0 | 584 | — | ✓ | 2 |
| 138 | `klamath` | Klamath (Maklaks) | kuzey-amerika | 1281-01-01 | 1864-01-01 | 583.0 | 1 | 0 | 583 | — | ✓ | 3 |
| 139 | `nuu-cah-nulth` | Nuu-chah-nulth (Mowachaht) | kuzey-amerika | 1281-01-01 | 1858-08-02 | 577.6 | 1 | 0 | 578 | — | ✓ | 4 |
| 140 | `nuxalk` | Nuxalk (Bella Coola) | kuzey-amerika | 1281-01-01 | 1858-08-02 | 577.6 | 1 | 0 | 578 | — | ✓ | 3 |
| 141 | `secwepemc` | Secwépemc (Shuswap) | kuzey-amerika | 1281-01-01 | 1858-08-02 | 577.6 | 1 | 0 | 578 | — | ✓ | 2 |
| 142 | `pavni` | Pavni (Pawnee) | kuzey-amerika | 1281-01-01 | 1857-09-24 | 576.7 | 1 | 0 | 577 | — | ✓ | 3 |
| 143 | `ponka` | Ponka (Ponca) | kuzey-amerika | 1281-01-01 | 1858-01-01 | 577.0 | 1 | 0 | 577 | — | ✓ | 4 |
| 144 | `sahaptin` | Sahaptin (Orta Columbia halkları) | kuzey-amerika | 1281-01-01 | 1855-01-01 | 574.0 | 1 | 0 | 574 | — | ✓ | 3 |
| 145 | `kutai` | Kutai Sultanlığı (Doğu Borneo) | guneydogu-asya | 1575-01-01 | 1908-01-01 | 333.0 | 2 | 0 | 573 | — | ✓ | 3 |
| 146 | `hidatsa` | Hidatsa | kuzey-amerika | 1281-01-01 | 1851-09-17 | 570.7 | 1 | 0 | 571 | — | ✓ | 3 |
| 147 | `karga` | Karga (Apsáalooke) | kuzey-amerika | 1281-01-01 | 1851-09-17 | 570.7 | 1 | 0 | 571 | — | ✓ | 3 |
| 148 | `mandan` | Mandan | kuzey-amerika | 1281-01-01 | 1851-09-17 | 570.7 | 1 | 0 | 571 | — | ✓ | 4 |
| 149 | `ladak` | Ladakh Krallığı (Namgyal Hânedanı) | guney-asya | 1281-01-01 | 1834-01-01 | 553.0 | 1 | 0 | 553 | ladak | ✓ | 4 |
| 150 | `sauk` | Sauk (Asakiwaki) | kuzey-amerika | 1281-01-01 | 1832-09-21 | 551.7 | 1 | 0 | 552 | — | ✓ | 3 |
| 151 | `betsileo` | Betsileo Krallıkları | dogu-afrika | 1281-01-01 | 1830-01-01 | 549.0 | 1 | 0 | 549 | — | ✓ | 3 |
| 152 | `beothuk` | Beothuk | kuzey-amerika | 1281-01-01 | 1829-06-06 | 548.4 | 1 | 0 | 548 | — | ✓ | 3 |
| 153 | `usfuri` | Usfûrîler (Benî Usfûr) | arabistan | 1281-01-01 | 1417-01-01 | 136.0 | 4 | 0 | 544 | usfuri | ✓ | 1 |
| 154 | `gond-kralliklari` | Gond Krallıkları (Garha-Mandla, Deogarh) | guney-asya | 1281-01-01 | 1781-01-01 | 500.0 | 2 | 0 | 541 | gond-kralliklari | ✓ | 4 |
| 155 | `kru-grebo` | Kru ve Grebo Halkları | bati-afrika | 1281-01-01 | 1822-04-25 | 541.3 | 1 | 0 | 541 | — | ✓ | 2 |
| 156 | `selcuklu` | Anadolu (Türkiye) Selçuklu Devleti | anadolu | 1075-01-01 | 1308-01-01 | 233.0 | 26 | 0 | 537 | selcuklu | ✓ | 6 |
| 157 | `merina` | Merina Krallığı (Madagaskar) | dogu-afrika | 1787-01-01 | 1897-02-28 | 110.2 | 6 | 0 | 533 | — | ✓ | 4 |
| 158 | `cebri` | Cebrîler (Benî Cebr) | arabistan | 1417-01-01 | 1524-01-01 | 107.0 | 5 | 0 | 532 | cebri | ✓ | 5 |
| 159 | `miami` | Miami (Myaamia) | kuzey-amerika | 1281-01-01 | 1795-08-03 | 514.6 | 1 | 0 | 515 | — | ✓ | 4 |
| 160 | `savni` | Şavni (Shawnee) | kuzey-amerika | 1281-01-01 | 1795-08-03 | 514.6 | 1 | 0 | 515 | — | ✓ | 3 |
| 161 | `bengal-nevabligi` | Bengal Nevablığı | guney-asya | 1717-01-01 | 1757-06-23 | 40.5 | 13 | 0 | 486 | — | ✓ | 4 |
| 162 | `maliseet` | Maliseet (Wolastoqiyik) | kuzey-amerika | 1281-01-01 | 1761-01-01 | 480.0 | 1 | 0 | 480 | — | ✓ | 3 |
| 163 | `mikmak` | Mikmak (Mi'kmaq) | kuzey-amerika | 1281-01-01 | 1761-01-01 | 480.0 | 1 | 0 | 480 | — | ✓ | 3 |
| 164 | `lur-i-buzurg` | Lür-i Büzürg Atabegliği (Hazaraspîler) | iran | 1155-01-01 | 1424-01-01 | 269.0 | 8 | 0 | 471 | — | ✓ | 6 |
| 165 | `abenaki` | Abenaki (Wabanaki) | kuzey-amerika | 1281-01-01 | 1725-12-15 | 445.0 | 2 | 0 | 471 | — | ✓ | 3 |
| 166 | `apaci-ovalar` | Ovalar Apaçileri (Plains Apache) | kuzey-amerika | 1281-01-01 | 1750-01-01 | 469.0 | 1 | 0 | 469 | — | ✓ | 2 |
| 167 | `astarhan` | Astarhan (Ejderhan) Hanlığı | sibirya-bozkir | 1466-01-01 | 1556-01-01 | 90.0 | 6 | 0 | 468 | astarhan | ✓ | 5 |
| 168 | `matamba` | Matamba Krallığı | orta-afrika | 1281-01-01 | 1744-01-01 | 463.0 | 1 | 0 | 463 | — | ✓ | 5 |
| 169 | `don-kazak` | Don Kazak Ordası | sibirya-bozkir | 1570-01-01 | 1721-01-01 | 151.0 | 4 | 0 | 458 | don-kazak | ✓ | 6 |
| 170 | `natchez` | Natchez (Grand Village) | kuzey-amerika | 1281-01-01 | 1731-01-01 | 450.0 | 1 | 0 | 450 | — | ✓ | 3 |
| 171 | `ryukyu` | Ryukyu Krallığı | dogu-asya | 1429-01-01 | 1879-03-27 | 450.2 | 1 | 0 | 450 | ryukyu | ✓ | 3 |
| 172 | `karesi` | Karesioğulları | anadolu | 1297-01-01 | 1345-01-01 | 48.0 | 9 | 0 | 432 | karesi | ✓ | 4 |
| 173 | `seylan-sinhala` | Seylan Sinhala Krallıkları (Portekiz Öncesi) | guney-asya | 1281-01-01 | 1518-01-01 | 237.0 | 2 | 0 | 425 | — | ✓ | 4 |
| 174 | `venda` | Venda Krallığı | guney-afrika | 1700-01-01 | 1898-01-01 | 198.0 | 2 | 0 | 396 | — | ✓ | 4 |
| 175 | `occaneechi` | Occaneechi | kuzey-amerika | 1281-01-01 | 1676-01-01 | 395.0 | 1 | 0 | 395 | — | ✓ | 3 |
| 176 | `mantua` | Mantua Dukalığı (Gonzaga) | italya | 1328-01-01 | 1708-01-01 | 380.0 | 1 | 0 | 380 | mantua | ✓ | 3 |
| 177 | `vendat` | Vendat (Huron) Konfederasyonu | kuzey-amerika | 1281-01-01 | 1649-03-16 | 368.2 | 2 | 0 | 378 | — | ✓ | 4 |
| 178 | `asanti` | Aşanti İmparatorluğu | bati-afrika | 1701-01-01 | 1902-01-01 | 201.0 | 2 | 0 | 374 | — | ✓ | 7 |
| 179 | `teke` | Tekeoğulları | anadolu | 1321-01-01 | 1423-01-01 | 102.0 | 4 | 0 | 366 | teke | ✓ | 3 |
| 180 | `powhatan` | Powhatan Konfederasyonu (Tsenacomoco) | kuzey-amerika | 1281-01-01 | 1646-10-01 | 365.8 | 1 | 0 | 366 | — | ✓ | 4 |
| 181 | `tay-son` | Tay Sơn Hanedanı | guneydogu-asya | 1778-01-01 | 1802-06-20 | 24.5 | 24 | 0 | 352 | — | ✓ | 5 |
| 182 | `kandy` | Kandy Krallığı (Seylan) | guney-asya | 1469-01-01 | 1815-03-02 | 346.2 | 1 | 0 | 346 | kandy | ✓ | 5 |
| 183 | `banda-adalari` | Banda Adaları (Orang Kaya Meclisleri) | guneydogu-asya | 1281-01-01 | 1621-03-08 | 340.2 | 1 | 0 | 340 | banda-adalari | ✓ | 4 |
| 184 | `yafna` | Yafna (Jaffna) Krallığı | guney-asya | 1281-01-01 | 1619-02-01 | 338.1 | 1 | 0 | 338 | yafna | ✓ | 4 |
| 185 | `kabartay` | Kabartay (Kabardey) Beylikleri | kafkasya | 1281-01-01 | 1774-07-21 | 493.6 | 1 | 0 | 334 | — | ✓ | 2 |
| 186 | `ramazanoglu` | Ramazanoğulları | anadolu | 1352-01-01 | 1608-01-01 | 256.0 | 2 | 0 | 329 | ramazanoglu | ✓ | 3 |
| 187 | `parma` | Parma Dukalığı (Farnese / Bourbon) | italya | 1545-08-16 | 1860-03-18 | 314.6 | 1 | 0 | 315 | parma | ✓ | 3 |
| 188 | `hawaii-kralligi` | Hawaii Krallığı | okyanusya | 1795-01-01 | 1898-08-12 | 103.6 | 3 | 0 | 311 | — | ✓ | 3 |
| 189 | `futa-callon` | Futa Callon İmamlığı | bati-afrika | 1747-01-01 | 1896-01-01 | 149.0 | 2 | 0 | 298 | — | ✓ | 3 |
| 190 | `yao` | Yao Sultanlıkları | dogu-afrika | 1800-01-01 | 1899-01-01 | 99.0 | 3 | 0 | 297 | — | ✓ | 3 |
| 191 | `kasance` | Kasance (Kasanje) Krallığı | orta-afrika | 1620-01-01 | 1910-01-01 | 290.0 | 1 | 0 | 290 | — | ✓ | 3 |
| 192 | `tonburi` | Thonburi Krallığı (Siyam) | guneydogu-asya | 1767-12-28 | 1782-04-06 | 14.3 | 20 | 0 | 285 | — | ✓ | 4 |
| 193 | `ingiliz-guyanasi` | İngiliz Guyanası | guney-amerika | 1831-01-01 | 1966-05-26 | 135.4 | 3 | 0 | 278 | — | ✓ | 3 |
| 194 | `kuba` | Kuba Krallığı | orta-afrika | 1625-01-01 | 1900-01-01 | 275.0 | 1 | 0 | 275 | — | ✓ | 4 |
| 195 | `dahomey` | Dahomey Krallığı | bati-afrika | 1625-01-01 | 1894-01-01 | 269.0 | 1 | 0 | 268 | — | ✓ | 9 |
| 196 | `karnatik` | Karnatik Nevablığı (Arcot) | guney-asya | 1690-01-01 | 1801-07-31 | 111.6 | 4 | 0 | 265 | — | ✓ | 4 |
| 197 | `fetret-mehmed` | Çelebi Mehmed Saltanatı (Amasya/Anadolu) | anadolu | 1402-07-28 | 1413-07-05 | 10.9 | 68 | 0 | 254 | mehmed-celebi | ✓ | 3 |
| 198 | `teodoro` | Theodoro (Gotya) Prensliği | dogu-avrupa | 1349-01-01 | 1475-12-01 | 126.9 | 2 | 0 | 253 | teodoro | ✓ | 4 |
| 199 | `kenedugu` | Kenedugu Krallığı (Sikasso) | bati-afrika | 1650-01-01 | 1898-05-01 | 248.3 | 1 | 0 | 248 | — | ✓ | 4 |
| 200 | `tututepec-krallik` | Tututepec Krallığı (Yucu Dzaa) | orta-amerika-karayip | 1281-01-01 | 1522-01-01 | 241.0 | 1 | 0 | 241 | — | ✓ | 1 |
| 201 | `pandya` | Pandya Hanedanı (İkinci İmparatorluk) | guney-asya | 1190-01-01 | 1323-01-01 | 133.0 | 8 | 0 | 240 | — | ✓ | 5 |
| 202 | `burundi` | Burundi Krallığı | dogu-afrika | 1680-01-01 | 1916-06-06 | 236.4 | 1 | 0 | 236 | — | ✓ | 4 |
| 203 | `pedi` | Pedi Krallığı | guney-afrika | 1650-01-01 | 1879-12-02 | 229.9 | 1 | 0 | 230 | — | ✓ | 5 |
| 204 | `bate` | Baté Mandinka Devleti (Kankan) | bati-afrika | 1650-01-01 | 1879-01-01 | 229.0 | 1 | 0 | 229 | — | ✓ | 2 |
| 205 | `bhopal` | Bopal (Bhopal) Devleti | guney-asya | 1708-01-01 | 1923-10-29 | 215.8 | 1 | 0 | 216 | — | ✓ | 4 |
| 206 | `kolhapur` | Kolhapur Devleti (Şivâcî'nin İkinci Kolu) | guney-asya | 1710-01-01 | 1949-03-01 | 239.2 | 1 | 0 | 214 | — | ✓ | 3 |
| 207 | `aro-konfederasyonu` | Aro Konfederasyonu | bati-afrika | 1690-01-01 | 1902-03-01 | 212.2 | 1 | 0 | 212 | — | ✓ | 4 |
| 208 | `betsimisaraka` | Betsimisaraka Konfederasyonu | dogu-afrika | 1712-01-01 | 1817-01-01 | 105.0 | 2 | 0 | 210 | — | ✓ | 3 |
| 209 | `futa-toro` | Futa Toro Almamiliği | bati-afrika | 1776-01-01 | 1881-01-01 | 105.0 | 2 | 0 | 210 | — | ✓ | 4 |
| 210 | `buna` | Buna Krallığı (Kulango) | bati-afrika | 1690-01-01 | 1897-01-01 | 207.0 | 1 | 0 | 207 | — | ✓ | 3 |
| 211 | `gyaaman` | Gyaaman Krallığı | bati-afrika | 1690-01-01 | 1895-01-01 | 205.0 | 1 | 0 | 205 | — | ✓ | 4 |
| 212 | `fetret-musa` | Musa Çelebi Saltanatı (Rumeli) | balkanlar | 1411-02-17 | 1413-07-05 | 2.4 | 86 | 0 | 203 | musa-celebi | ✓ | 3 |
| 213 | `baroda` | Baroda Devleti (Gaikvad Hanedanı) | guney-asya | 1721-01-01 | 1949-05-01 | 228.3 | 1 | 0 | 203 | — | ✓ | 2 |
| 214 | `meysur` | Meysûr Sultanlığı (Haydar Ali / Tipu Sultan) | guney-asya | 1761-01-01 | 1799-05-04 | 38.3 | 6 | 0 | 198 | meysur | ✓ | 5 |
| 215 | `bharatpur-cat` | Bharatpur Krallığı (Jat) | guney-asya | 1733-01-01 | 1948-03-18 | 215.2 | 1 | 0 | 191 | — | ✓ | 6 |
| 216 | `indor` | İndor Devleti (Holkar Hanedanı) | guney-asya | 1732-07-29 | 1948-05-28 | 215.8 | 1 | 0 | 191 | — | ✓ | 3 |
| 217 | `incu` | İncû Hanedanı | iran | 1325-01-01 | 1357-01-01 | 32.0 | 9 | 0 | 190 | — | ✓ | 2 |
| 218 | `kong-vattara` | Kong Devleti (Vattara) | bati-afrika | 1710-01-01 | 1897-05-01 | 187.3 | 1 | 0 | 187 | — | ✓ | 3 |
| 219 | `eyyubi-hisnikeyfa` | Hısnıkeyfâ Eyyûbîleri | anadolu | 1232-01-01 | 1462-01-01 | 230.0 | 1 | 0 | 181 | — | ✓ | 2 |
| 220 | `alaiye` | Alâiye Beyliği (Alanya) | anadolu | 1293-01-01 | 1471-01-01 | 178.0 | 1 | 0 | 178 | alaiye | ✓ | 3 |
| 221 | `bahavelpur` | Bahavelpur Emirliği (Dâvudpotralar) | guney-asya | 1748-01-01 | 1955-10-14 | 207.8 | 1 | 0 | 176 | — | ✓ | 5 |
| 222 | `cunagadh` | Cunagadh (Junagadh) Nevablığı | guney-asya | 1748-01-01 | 1948-02-20 | 200.1 | 1 | 0 | 176 | — | ✓ | 4 |
| 223 | `prusya-dukaligi` | Prusya Dükalığı | orta-avrupa | 1525-04-08 | 1701-01-18 | 175.8 | 1 | 0 | 176 | — | ✓ | 3 |
| 224 | `bundu` | Bundu Emirliği | bati-afrika | 1690-01-01 | 1858-01-01 | 168.0 | 1 | 0 | 168 | — | ✓ | 3 |
| 225 | `damagaram` | Damagaram Sultanlığı (Zinder) | bati-afrika | 1731-01-01 | 1899-01-01 | 168.0 | 1 | 0 | 168 | — | ✓ | 3 |
| 226 | `solima-yalunka` | Solima Yalunka Krallığı | bati-afrika | 1720-01-01 | 1884-01-01 | 164.0 | 1 | 0 | 164 | — | ✓ | 4 |
| 227 | `yogyakarta` | Yogyakarta Sultanlığı | guneydogu-asya | 1755-02-13 | 1923-10-29 | 168.7 | 1 | 0 | 163 | — | ✓ | 4 |
| 228 | `kazembe` | Mvata Kazembe Krallığı | dogu-afrika | 1740-01-01 | 1899-01-01 | 159.0 | 1 | 0 | 159 | — | ✓ | 3 |
| 229 | `cerkez` | Çerkez Kabile Birlikleri — Batı Grubu (Adige) | kafkasya | 1281-01-01 | 1864-07-01 | 583.5 | 3 | 0 | 155 | cerkez | ✓ | 4 |
| 230 | `lur-i-kucek` | Lür-i Küçek Atabegliği | iran | 1184-01-01 | 1597-01-01 | 413.0 | 3 | 0 | 154 | — | ✓ | 2 |
| 231 | `dominik-cumhuriyeti` | Dominik Cumhuriyeti | orta-amerika-karayip | 1844-02-27 | 1923-10-29 | 79.7 | 2 | 0 | 151 | — | ✓ | 5 |
| 232 | `rozvi` | Rozvi İmparatorluğu (Changamire) | guney-afrika | 1684-01-01 | 1834-01-01 | 150.0 | 1 | 0 | 150 | — | ✓ | 4 |
| 233 | `piombino` | Piombino Prensliği (Appiani hânedanı) | italya | 1399-02-19 | 1548-01-01 | 148.9 | 1 | 0 | 149 | — | ✓ | 2 |
| 234 | `griqua` | Griqua Devletleri (Griqualand Batı ve Doğu) | guney-afrika | 1804-01-01 | 1878-01-01 | 74.0 | 2 | 0 | 148 | — | ✓ | 3 |
| 235 | `taceddin` | Tâceddinoğulları (Canik) | anadolu | 1348-01-01 | 1427-01-01 | 79.0 | 3 | 0 | 144 | taceddin | ✓ | 4 |
| 236 | `burhaneddin` | Kadı Burhâneddin Devleti (Sivas) | anadolu | 1381-01-01 | 1398-01-01 | 17.0 | 10 | 0 | 143 | burhaneddin | ✓ | 3 |
| 237 | `kilikya-ermeni` | Kilikya Ermeni Krallığı | anadolu | 1199-01-06 | 1375-04-14 | 176.3 | 2 | 0 | 142 | kilikya-ermeni | ✓ | 5 |
| 238 | `gvalyar` | Gvalyar Devleti (Sindiya Hanedanı) | guney-asya | 1731-01-01 | 1948-05-28 | 217.4 | 1 | 0 | 140 | — | ✓ | 3 |
| 239 | `ngoni` | Ngoni Devletleri | dogu-afrika | 1835-01-01 | 1898-01-01 | 63.0 | 2 | 0 | 126 | — | ✓ | 3 |
| 240 | `mutahharten` | Erzincan-Kemah Beyliği (Mutahharten) | anadolu | 1378-01-01 | 1410-01-01 | 32.0 | 6 | 0 | 125 | mutahharten | ✓ | 3 |
| 241 | `komanci` | Komançi (Comanchería) | kuzey-amerika | 1750-01-01 | 1875-01-01 | 125.0 | 1 | 0 | 125 | — | ✓ | 3 |
| 242 | `fransiz-guyanasi` | Fransız Guyanası | guney-amerika | 1817-01-01 | 1923-10-29 | 106.8 | 1 | 0 | 107 | — | ✓ | 3 |
| 243 | `surakarta` | Surakarta Sunanlığı | guneydogu-asya | 1755-02-13 | 1923-10-29 | 168.7 | 1 | 0 | 107 | — | ✓ | 4 |
| 244 | `tekrur` | Toucouleur Devleti (Umarî / Segu Tukulor) | bati-afrika | 1852-09-01 | 1893-01-01 | 40.3 | 3 | 0 | 101 | — | ✓ | 7 |
| 245 | `transvaal` | Transvaal (Güney Afrika Cumhuriyeti — Zuid-Afrikaansche Republiek) | guney-afrika | 1852-01-01 | 1902-05-31 | 50.4 | 2 | 0 | 100 | — | ✓ | 10 |
| 246 | `cikasav` | Çikasav (Chickasaw) | kuzey-amerika | 1281-01-01 | 1832-10-20 | 551.8 | 1 | 0 | 94 | — | ✓ | 4 |
| 247 | `cimma-sultanligi` | Cimma (Jimma) Sultanlığı | dogu-afrika | 1830-01-01 | 1923-10-29 | 93.8 | 1 | 0 | 94 | cimma | ✓ | 4 |
| 248 | `basuto` | Basuto (Basotho) Krallığı | guney-afrika | 1822-01-01 | 1868-03-12 | 46.2 | 2 | 0 | 92 | — | ✓ | 5 |
| 249 | `esrefogullari` | Eşrefoğulları | anadolu | 1277-01-01 | 1326-01-01 | 49.0 | 2 | 0 | 90 | esrefogullari | ✓ | 5 |
| 250 | `saruhan` | Saruhanoğulları | anadolu | 1313-01-01 | 1416-09-01 | 103.7 | 1 | 0 | 89 | saruhan | ✓ | 5 |
| 251 | `hosut` | Hoşut (Kokonor) Hanlığı | dogu-asya | 1636-01-01 | 1724-01-01 | 88.0 | 1 | 0 | 88 | hosut | ✓ | 4 |
| 252 | `svazi` | Svazi Krallığı | guney-afrika | 1815-01-01 | 1903-01-01 | 88.0 | 1 | 0 | 88 | — | ✓ | 5 |
| 253 | `inancogullari` | İnançoğulları (Denizli/Lâdik Beyliği) | anadolu | 1261-01-01 | 1368-01-01 | 107.0 | 1 | 0 | 87 | inancogullari | ✓ | 3 |
| 254 | `liptako` | Liptako Emirliği (Dori) | bati-afrika | 1810-01-01 | 1897-01-01 | 87.0 | 1 | 0 | 87 | — | ✓ | 3 |
| 255 | `massina` | Masina Halifeliği (Hamdullahi) | bati-afrika | 1818-01-01 | 1862-05-16 | 44.4 | 2 | 0 | 85 | — | ✓ | 4 |
| 256 | `cobanogullari` | Çobanoğulları | anadolu | 1211-01-01 | 1309-01-01 | 98.0 | 3 | 0 | 84 | cobanogullari | ✓ | 3 |
| 257 | `pontianak` | Pontianak Sultanlığı (Borneo) | guneydogu-asya | 1772-01-01 | 1855-01-01 | 83.0 | 1 | 0 | 83 | — | ✓ | 3 |
| 258 | `mangbetu` | Mangbetu Krallığı | orta-afrika | 1815-01-01 | 1895-01-01 | 80.0 | 1 | 0 | 80 | — | ✓ | 3 |
| 259 | `bahreyn` | Bahreyn (Âl Halîfe Şeyhliği) | arabistan | 1783-01-01 | 1923-10-29 | 140.8 | 1 | 0 | 78 | — | ✓ | 4 |
| 260 | `tonga-kralligi` | Tonga Krallığı | okyanusya | 1845-12-04 | 1923-10-29 | 77.9 | 1 | 0 | 78 | — | ✓ | 3 |
| 261 | `tungning` | Tungning Krallığı (Zheng / Koxinga) | dogu-asya | 1650-01-01 | 1683-10-05 | 33.8 | 3 | 0 | 74 | tungning | ✓ | 4 |
| 262 | `kert` | Kertler (Herat) | iran | 1245-01-01 | 1389-01-01 | 144.0 | 2 | 0 | 74 | — | ✓ | 3 |
| 263 | `toro` | Toro Krallığı | dogu-afrika | 1830-01-01 | 1900-06-26 | 70.5 | 1 | 0 | 70 | — | ✓ | 3 |
| 264 | `ibadan` | İbadan Devleti | bati-afrika | 1829-01-01 | 1893-08-15 | 64.6 | 1 | 0 | 65 | — | ✓ | 4 |
| 265 | `darul-kuti` | Dârü'l-Kûtî Sultanlığı (Senûsî) | orta-afrika | 1890-01-01 | 1911-04-12 | 21.3 | 3 | 0 | 64 | — | ✓ | 3 |
| 266 | `ahiler` | Ahi Birliği (Ankara) | anadolu | 1290-01-01 | 1354-01-01 | 64.0 | 1 | 0 | 64 | ahiler | ✓ | 4 |
| 267 | `kenmu` | Kenmu Restorasyonu (Japonya) | dogu-asya | 1333-07-04 | 1336-11-07 | 3.3 | 17 | 0 | 57 | — | ✓ | 5 |
| 268 | `taiping` | Taiping Cennetsel Krallığı | dogu-asya | 1851-01-11 | 1864-07-19 | 13.5 | 8 | 0 | 56 | — | ✓ | 3 |
| 269 | `matabele` | Matabele (Ndebele) Krallığı | guney-afrika | 1840-01-01 | 1893-11-04 | 53.8 | 1 | 0 | 54 | — | ✓ | 4 |
| 270 | `hehe` | Hehe Krallığı | dogu-afrika | 1850-01-01 | 1898-07-19 | 48.5 | 1 | 0 | 49 | — | ✓ | 4 |
| 271 | `oranj` | Oranj Hür Devleti (Oranje Vrijstaat) | guney-afrika | 1854-04-07 | 1902-05-31 | 48.1 | 1 | 0 | 48 | — | ✓ | 11 |
| 272 | `kuayti-sultanligi` | Kuaytî Sultanlığı (Şihr-Mükellâ, Hadramut kıyısı) | arabistan | 1881-01-01 | 1967-11-30 | 86.9 | 1 | 0 | 43 | — | ✓ | 3 |
| 273 | `pervane` | Pervâneoğulları (Sinop) | anadolu | 1277-01-01 | 1322-01-01 | 45.0 | 1 | 0 | 41 | pervane | ✓ | 3 |
| 274 | `fetret-isa` | İsa Çelebi Saltanatı (Bursa) | anadolu | 1403-01-01 | 1403-09-01 | 0.7 | 59 | 0 | 39 | isa-celebi | ✓ | 2 |
| 275 | `pueblo-bagimsizligi` | Pueblo Bağımsızlığı | kuzey-amerika | 1680-08-10 | 1692-08-01 | 12.0 | 3 | 0 | 36 | — | ✓ | 4 |
| 276 | `yeke` | Yeke Krallığı (Msiri) | orta-afrika | 1856-01-01 | 1891-12-20 | 36.0 | 1 | 0 | 36 | — | ✓ | 3 |
| 277 | `krakow-serbest-sehri` | Krakov Serbest Şehri | dogu-avrupa | 1815-05-03 | 1846-11-11 | 31.5 | 1 | 0 | 32 | — | ✓ | 3 |
| 278 | `zeta` | Zeta Prensliği (Balšić / Crnojević) | balkanlar | 1356-01-01 | 1514-01-01 | 158.0 | 1 | 0 | 31 | — | ✓ | 6 |
| 279 | `galzay` | Galzaylar (Hotakî Afgan Devleti) | iran | 1709-04-21 | 1738-01-01 | 28.7 | 1 | 0 | 29 | — | ✓ | 3 |
| 280 | `rabih` | Râbih b. Zübeyr Devleti | orta-afrika | 1893-01-01 | 1900-04-22 | 7.3 | 2 | 0 | 14 | — | ✓ | 3 |
| 281 | `dashun` | Dashun (Li Zicheng) | dogu-asya | 1644-01-01 | 1647-01-01 | 3.0 | 12 | 0 | 13 | — | ✓ | 4 |
| 282 | `izlanda` | İzlanda | kuzey-avrupa | 1918-12-01 | 1923-10-29 | 4.9 | 2 | 0 | 10 | izlanda | ✓ | 4 |
| 283 | `katar` | Katar (Âl Sânî Şeyhliği) | arabistan | 1868-01-01 | 1923-10-29 | 55.8 | 1 | 0 | 10 | katar | ✓ | 4 |
| 284 | `sutayogullari` | Sutayogullari | anadolu | 1343-01-01 | 1353-01-01 | 10.0 | 1 | 0 | 10 | — | ✓ | 2 |
| 285 | `danzig-serbest-sehri-1807` | Danzig Serbest Şehri (Napolyon Dönemi) | dogu-avrupa | 1807-07-09 | 1814-02-04 | 6.6 | 1 | 0 | 7 | — | ✓ | 4 |
| 286 | `dukagin` | Dukagin (Dukagjini) Prensliği | balkanlar | 1387-01-01 | 1479-01-25 | 92.1 | 1 | 0 | 6 | — | ✓ | 3 |
| 287 | `urdun-emirligi` | Şarkî Ürdün Emirliği (Abdullah bin Hüseyin) | arabistan | 1921-02-01 | 1946-05-25 | 25.3 | 2 | 0 | 5 | — | ✓ | 2 |
| 288 | `buhara-halk-cumhuriyeti` | Buhara Halk Sovyet Cumhuriyeti | orta-asya | 1920-10-08 | 1924-01-01 | 3.2 | 1 | 0 | 3 | — | ✓ | 0 |
| 289 | `rif-cumhuriyeti` | Rif Cumhuriyeti (Abdülkerim el-Hattâbî) | kuzey-afrika | 1921-09-19 | 1926-05-27 | 4.7 | 1 | 0 | 2 | — | ✓ | 4 |
| 290 | `aiz` | Âiz Emirliği (Ebhâ / Asîr) | arabistan | 1918-10-30 | 1920-01-01 | 1.2 | 1 | 0 | 1 | aiz | ✓ | 4 |
| 291 | `garbi-trakya` | Garbî Trakya Hükûmet-i Müstakillesi | balkanlar | 1913-08-31 | 1913-10-25 | 0.2 | 1 | 0 | 0 | — | ✓ | 2 |
| 292 | `aleut` | Aleut (Unangax̂) | kuzey-amerika | 1281-01-01 | 1784-08-14 | 503.6 | 0 | 0 | 0 | — | ✗ | 3 |
| 293 | `ammarogullari` | Ammâroğulları (Trablusgarp) | kuzey-afrika | 1327-01-01 | 1401-01-01 | 74.0 | 0 | 0 | 0 | — | ✓ | 6 |
| 294 | `arma` | Arma Paşalığı (Tinbüktü) | bati-afrika | 1750-01-01 | 1760-01-01 | 10.0 | 0 | 0 | 0 | — | ✓ | 2 |
| 295 | `arua` | Aruã (Marajó) | guney-amerika | 1281-01-01 | 1836-01-01 | 555.0 | 0 | 0 | 0 | — | ✗ | 3 |
| 296 | `bali-kralliklari-pejeng` | Bali Pejeng Krallığı | guneydogu-asya | 1292-01-01 | 1343-01-01 | 51.0 | 0 | 0 | 0 | — | ✓ | 2 |
| 297 | `bavyera` | Bavyera (Dükalık → Elektörlük → Krallık) | orta-avrupa | 1506-07-08 | 1918-11-08 | 412.3 | 0 | 0 | 0 | — | ✗ | 4 |
| 298 | `bonacolsi` | Bonacolsi Senyörlüğü (Mantova) | italya | 1273-01-01 | 1328-08-16 | 55.6 | 0 | 0 | 0 | — | ✓ | 2 |
| 299 | `cebel-i-lubnan-mutasarrifligi` | Cebel-i Lübnan Mutasarrıflığı | arabistan | 1861-06-09 | 1915-07-11 | 54.1 | 0 | 0 | 0 | cebel-i-lubnan-mutasarrifligi | ✗ | 3 |
| 300 | `cemisgezek-beyligi` | Cemisgezek Beyligi (Melkisi) | anadolu | 1281-01-01 | 1420-01-01 | 139.0 | 0 | 0 | 0 | — | ✓ | 2 |
| 301 | `charrua` | Charrúa (Minuan · Guenoa) | guney-amerika | 1281-01-01 | 1831-01-01 | 550.0 | 0 | 0 | 0 | — | ✗ | 2 |
| 302 | `crnojevic-zetasi` | Crnojević Zetası | balkanlar | 1482-01-01 | 1499-01-01 | 17.0 | 0 | 0 | 0 | — | ✗ | 2 |
| 303 | `dejanovic-prensligi` | Dejanović Prensliği (Kostadin-ili) | balkanlar | 1371-09-26 | 1395-05-17 | 23.6 | 0 | 0 | 0 | — | ✗ | 2 |
| 304 | `dubrovnik` | Dubrovnik (Ragusa) Cumhuriyeti | balkanlar | 700-01-01 | 1808-01-31 | 1108.1 | 0 | 0 | 0 | — | ✗ | 5 |
| 305 | `el-salvador-cumhuriyeti` | El Salvador Cumhuriyeti | orta-amerika-karayip | 1841-01-01 | 1923-10-29 | 82.8 | 0 | 0 | 0 | — | ✓ | 2 |
| 306 | `fransiz-misir-seferi` | Napolyon'un Mısır Seferi | misir-sudan | 1798-07-01 | 1801-10-02 | 3.3 | 0 | 0 | 0 | — | ✗ | 4 |
| 307 | `harezm-halk-cumhuriyeti` | Harezm Halk Sovyet Cumhuriyeti | orta-asya | 1920-04-26 | 1924-01-01 | 3.7 | 0 | 0 | 0 | — | ✓ | 0 |
| 308 | `harfusogullari` | Harfûşoğulları (Baalbek Emirliği) | arabistan | 1521-01-01 | 1850-01-01 | 329.0 | 0 | 0 | 0 | harfusogullari | ✗ | 3 |
| 309 | `ingiliz-hondurasi` | İngiliz Hondurası (Belize) | orta-amerika-karayip | 1862-01-01 | 1981-09-21 | 119.7 | 0 | 0 | 0 | — | ✗ | 3 |
| 310 | `jin-hanedani` | Jin Hanedanı (Jurchen, Kuzey Çin) | dogu-asya | 1115-01-01 | 1234-02-09 | 119.1 | 0 | 0 | 0 | — | ✗ | 3 |
| 311 | `kaheti-kralligi` | Kaheti Krallığı | kafkasya | 1578-08-09 | 1762-01-01 | 183.4 | 0 | 0 | 0 | — | ✗ | 2 |
| 312 | `kasim` | Kasım Hanlığı (Kasimov) | sibirya-bozkir | 1452-01-01 | 1681-01-01 | 229.0 | 0 | 0 | 0 | — | ✗ | 2 |
| 313 | `kibris-ingiliz` | Kıbrıs'ın İngiliz İdaresi | anadolu | 1878-06-04 | 1914-11-05 | 36.4 | 0 | 0 | 0 | — | ✗ | 2 |
| 314 | `konstantin-beyligi` | Konstantin Beyliği (Ahmed Bey) | kuzey-afrika | 1830-07-05 | 1844-03-04 | 13.7 | 0 | 0 | 0 | — | ✗ | 3 |
| 315 | `kuba-hanligi` | Kuba Hanlığı | kafkasya | 1735-01-01 | 1813-10-24 | 78.8 | 0 | 0 | 0 | kuba-hanligi | ✓ | 4 |
| 316 | `kumuk-samhalligi` | Kumuk Şamhallığı (Tarki) | kafkasya | 1578-11-01 | 1607-01-01 | 28.2 | 0 | 0 | 0 | — | ✓ | 1 |
| 317 | `kutlughanli` | Kutluğhanlılar | iran | 1222-01-01 | 1306-01-01 | 84.0 | 0 | 0 | 0 | — | ✓ | 2 |
| 318 | `lubnan-emirligi` | Lübnan Emirliği (Ma'noğulları · Şihaboğulları) | arabistan | 1516-10-01 | 1842-01-01 | 325.2 | 0 | 0 | 0 | lubnan-emirligi | ✗ | 3 |
| 319 | `luksemburg-hollanda-birligi` | Lüksemburg Büyük Dükalığı (Hollanda ile Şahsî Birlik) | bati-avrupa | 1815-06-09 | 1890-11-23 | 75.5 | 0 | 0 | 0 | — | ✗ | 0 |
| 320 | `meysur-racaligi` | Meysûr Racalığı (Wodeyar Hanedanı, İngiliz himayesinde) | guney-asya | 1799-05-04 | 1947-08-15 | 148.3 | 0 | 0 | 0 | — | ✓ | 3 |
| 321 | `misir-eyaleti` | Osmanlı Mısır Eyaleti | misir-sudan | 1517-04-13 | 1805-07-03 | 288.2 | 0 | 0 | 0 | — | ✗ | 4 |
| 322 | `mogol-imparatorlugu` | Moğol İmparatorluğu (bölünmemiş) | dogu-asya | 1206-01-01 | 1260-01-01 | 54.0 | 0 | 0 | 0 | — | ✗ | 4 |
| 323 | `newfoundland-dominyonu` | Newfoundland (Sorumlu Hükûmet → Dominyon) | kuzey-amerika | 1855-01-01 | 1934-02-16 | 79.1 | 0 | 0 | 0 | — | ✗ | 3 |
| 324 | `norvec-isvec-birligi` | Norveç Krallığı (İsveç ile Birlik) | kuzey-avrupa | 1814-11-04 | 1905-06-07 | 90.6 | 0 | 0 | 0 | — | ✗ | 2 |
| 325 | `oniki-ada-italyan` | İtalya'nın Oniki Ada İşgali | balkanlar | 1912-05-04 | 1923-10-29 | 11.5 | 0 | 0 | 0 | — | ✗ | 3 |
| 326 | `orta-macar-kralligi` | Orta Macar Krallığı (Tököli İmre) | orta-avrupa | 1682-09-16 | 1688-01-17 | 5.3 | 0 | 0 | 0 | — | ✗ | 2 |
| 327 | `ranquel` | Ranquel Konfederasyonu | guney-amerika | 1281-01-01 | 1883-01-01 | 602.0 | 0 | 0 | 0 | — | ✗ | 2 |
| 328 | `sabah-emirligi` | Sabah Emirliği (Kuveyt) | arabistan | 1795-04-01 | 1914-11-22 | 119.6 | 0 | 0 | 0 | — | ✗ | 4 |
| 329 | `sani-emirligi` | Âl-i Sânî Emirliği (Katar) | arabistan | 1871-09-20 | 1913-07-29 | 41.9 | 0 | 0 | 0 | — | ✗ | 3 |
| 330 | `sanzan` | Sanzan Dönemi (Üç Krallık, Okinawa) | dogu-asya | 1322-01-01 | 1429-01-01 | 107.0 | 0 | 0 | 0 | — | ✓ | 3 |
| 331 | `sarki-rumeli` | Şarkî Rumeli Vilayeti (Özerk) | balkanlar | 1878-07-13 | 1885-09-18 | 7.2 | 0 | 0 | 0 | — | ✗ | 2 |
| 332 | `song` | Song Hanedanı (Çin) | dogu-asya | 960-01-01 | 1279-03-19 | 319.2 | 0 | 0 | 0 | — | ✗ | 4 |
| 333 | `suriye-arap-kralligi` | Suriye Arap Krallığı (Faysal) | arabistan | 1918-10-01 | 1920-07-25 | 1.8 | 0 | 0 | 0 | suriye-arap-kralligi | ✓ | 4 |
| 334 | `tannu-tuva` | Tannu Tuva Halk Cumhuriyeti | sibirya-bozkir | 1921-08-14 | 1923-10-29 | 2.2 | 0 | 0 | 0 | — | ✓ | 1 |
| 335 | `topia` | Topia (Thopia) Beyliği | balkanlar | 1363-01-01 | 1415-01-01 | 52.0 | 0 | 0 | 0 | — | ✓ | 4 |
| P | `ingiliz-siyera-leon` | İngiliz Sierra Leone'si (Koloni ve Protektora) | bati-afrika | 1808-01-01 | 1961-04-27 | 153.3 | ≤499 | ≤65 | ölçülemedi | ingiltere | ✓ | 3 |
| P | `ingiliz-altin-kiyisi` | İngiliz Altın Kıyısı (Gold Coast Kolonisi) | bati-afrika | 1874-07-24 | 1957-03-06 | 82.6 | ≤456 | ≤65 | ölçülemedi | ingiltere | ✓ | 4 |
| P | `ingiliz-kuzey-rodezya` | Kuzey Rodezya (İngiliz Güney Afrika Şirketi İdaresi → İngiliz Protektorası) | guney-afrika | 1890-01-01 | 1964-10-24 | 74.8 | ≤455 | ≤65 | ölçülemedi | ingiltere | ✓ | 4 |
| P | `ingiliz-nyasaland` | Nyasaland Protektorası (İngiliz Orta Afrikası) | dogu-afrika | 1891-05-14 | 1964-07-06 | 73.1 | ≤455 | ≤65 | ölçülemedi | ingiltere | ✓ | 3 |
| P | `fransiz-bati-afrika` | Fransız Batı Afrikası (AOF) | bati-afrika | 1895-06-16 | 1959-01-01 | 63.5 | ≤295 | ≤50 | ölçülemedi | fransa-cumhuriyet | ✓ | 3 |
| P | `fransiz-ekvator-afrikasi` | Fransız Ekvator Afrikası (AEF) | orta-afrika | 1910-01-15 | 1958-01-01 | 48.0 | ≤295 | ≤50 | ölçülemedi | fransa-cumhuriyet | ✓ | 2 |
| P | `portekiz-angola` | Portekiz Angolası | orta-afrika | 1575-01-01 | 1975-11-11 | 400.9 | ≤107 | ≤0 | ölçülemedi | portekiz | ✓ | 3 |
| P | `portekiz-gine` | Portekiz Ginesi | bati-afrika | 1879-01-01 | 1974-09-10 | 95.7 | ≤68 | ≤0 | ölçülemedi | portekiz | ✓ | 4 |
| P | `belcika-kongo` | Belçika Kongosu | orta-afrika | 1908-11-15 | 1960-06-30 | 51.6 | ≤64 | ≤0 | ölçülemedi | belcika | ✓ | 2 |
| P | `suud-birinci` | I. Suûdî Devleti (Vehhâbî Emirliği) | arabistan | 1744-01-01 | 1818-09-09 | 74.7 | ≤17 | ≤0 | ölçülemedi | suud | ✓ | 5 |
| P | `suud-ikinci` | II. Suûdî Devleti (Necid Emirliği) | arabistan | 1824-06-01 | 1891-01-24 | 66.6 | ≤0 | ≤0 | ölçülemedi | suud | ✓ | 3 |

`yer_s = 0`: 44 künye haritada hiç çizilmiyor (16'sının boyası var ama noktası yok) — bunların kronolojisi harita-kronoloji doğrulamasına zaten giremez; sıralamanın dibindeler.

## 8. Bulunamadı / ölçülemedi

- TDV arama sonuç LİSTESİ: `bulunamadı` (JS ile yükleniyor; `ajax_search_auto.php?sp=…&=ac` boş döndü). Yalnız içerik geçiş sayısı okunabildi.
- Paylaşılan boyalı 11 künyenin yerleşim sayısı: `ölçülemedi` (s: künyeyi taşımıyor).
- Dizgi içi kimlik geçişi (`neden:"… v:[{\"f\"…"`) ayrıca tarandı (5+ harfli kimlik, sözcük sınırlı): dosya katmanında geçmeyen **51 künyenin** kimliği bir madde dizgisinde geçiyor (`ahiler`, `astarhan`, `aydin`, `bahreyn`, `bavyera`, `benihalid`, `bicapur`, `cimma-sultanligi`, `cungar`, `darfur`, `don-kazak`, `dubrovnik`, `dukagin`, `esrefogullari`, `eyyubi-hisnikeyfa` …; tam liste JSON `dizgi_icinde_gecen`). Çoğu yer adı çakışması (`aydin`, `kazan`, `bahreyn` bir `yer_id`/metin sözcüğüdür). Bir maddenin metninde anılmak o künyenin kronolojisine bağlanmak DEĞİLDİR ve `app.js` bunları bağlamaz ⇒ sayıma KATILMADI; 346 bu yüzden değişmez.

## 9. Yeniden üretim

Araçlar oturum scratchpad'indeydi (şartname yazma iznini `denetim/KRONO-BOSLUK-0930.*` ile sınırladı): node `vm` ile `devletler.js` + 165 dosya değerlendirildi, yerleşimler `arac/girdi.py yukle()` ile (93 dosya, 4296 nokta) okundu, boyalar `arac/renkler.py BOYALAR` (608). `denetle.py` koşturulmadı.
