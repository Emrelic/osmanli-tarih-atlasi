# LAB-KONUM-ADAY-1010: KATMAN raporunun altı aday noktası (Pantelerya · İmroz · Ayamavra · Erciş · Balasagun · Şiraz)

> **Yalnız ölçüm ve öneri.** `data/` dokunulmadı. Commit ve push yapılmadı. Taban `origin/main` @ `46ebbc3c6` (ayrık worktree, iş sonunda kaldırıldı).
> **Kurallar:** HUKUM-KASA-1010 §6.1 (tanığın hatası) · §6.2 (hangi nesne + geometri türü: alan/nokta) · §6.3 (pencere: TAŞIMA ya da İKAME) · §9.4 (çözünürlük) · koordinatörün eşik-düşer kuralı (kesin, adlı, uzun süre tanıklanmış nesne ⇒ eşik düşer).
> **Tanık kaynakları:**
> - Pleiades `places/<id>/json`: her konum ayrı ayrı okundu.
> - TGN: `vocab.getty.edu/sparql.json` üzerinden canlı sorgu.
> - al-Ṯurayyā: yerel geojson.
> - GeoNames: yalnız modern yerleşim/ada koordinatı için.
>
> Wikipedia kullanılmadı.

## ÖNGÖRÜ (ölçümden önce)

⚠️ **Beyan:** Bu öngörüler görevin başında, KATMAN raporu okunurken kuruldu. Ancak ölçümden önce **ayrı bir dosyaya zaman damgasıyla yazılmadı.** Buraya ölçümden sonra, değiştirilmeden aktarıldı. Kanıt değeri bu yüzden zayıftır.

| ad | öngörü | gerekçe (öngörü anında) |
|---|---|---|
| Pantelerya | **ADA**, ardından KESİN'e yükselebilir | KATMAN: atlas noktası ada temsil noktasına 0,06 km. Kale ise limanda olmalı |
| İmroz | **ADAY** | Imbros yerleşimi 7,83 km uzakta, tek Pleiades tanığı var |
| Ayamavra | **ADA** | Nokta ada ortasında. Leucas antik bir nesne |
| Erciş | **ÖLÇÜLEMEDİ** | Eski Erciş için tanık bulunamayacak |
| Balasagun | **ÖLÇÜLEMEDİ** (nesne belirsiz) | Ad ile nokta çelişiyor |
| Şiraz | **TEMİZ** (gürültü) | Ṯ 6,2 km ve tek tanık |

## Sonuç tablosu

| ad · dosya:satır | atlas | kova | bir cümlede |
|---|---|---|---|
| **Pantelerya** · `data/yerlesimler.js:1696` | 36.792, 11.990 · kale | **KESİN** (ADA kaynaklı; pencere tek katmanlı ⇒ TAŞIMA) | Atlasın kale noktası adanın temsil noktası. Adanın tek kasabası ve limanı (Cossyra, −30..2100) iki tanıkla 5,8–5,9 km kuzeybatıda |
| **İmroz** · `data/yerlesimler.js:556` | 40.163, 25.905 · kale | **ADAY** (nesne seçimi bekliyor) | Kale = Kaleköy ise iki tanık 0,14 km içinde uyuşuyor ve fark 7,86 km. Ama Osmanlı merkezi Panagia/Çınarlı ayrı bir yer ve tanığı yok |
| **Ayamavra (Lefkada)** · `data/yerlesimler.js:1446` | 38.716, 20.643 · kale | **ADA** | Nokta adanın gazetteer merkezinden (TGN ve GeoNames, aynı enlem) alınmış. Santa Maura kalesi için gazetteer tanığı yok. Kasaba 13,8 km kuzeyde |
| **Erciş** · `data/yerlesimler.js:1805` | 39.026, 43.360 · kale | **ÖLÇÜLEMEDİ** | Atlas noktası TGN'nin modern Erciş **ilçe** kaydına 0,03 km. Bütün tanıklar modern kasabayı gösteriyor. Eski (göl kıyısı) Erciş için tanık yok |
| **Balasagun (Ak-Beşim)** · `data/yerlesimler_ortaasya3.js:131` | 42.760, 75.240 · şehir | **ADAY** (atlasın niyeti ile koordinatı çelişiyor) | Adı ve TDV kaynağı **Ak-Beşim** diyor, koordinat **Burana**'da. TGN Balasagun'u Burana'yla özdeşleştiriyor. Ak-Beşim (TGN) 6,02 km uzakta |
| **Şiraz** · `data/yerlesimler.js:1149` | 29.591, 52.584 · şehir | **ADAY** (KESİN'e yakın) | Ṯ (6,18) ile GeoNames (5,54) 0,98 km içinde uyuşuyor. İkisi de şehir-alanı temsil noktası, adlı bir nokta-nesne değil ⇒ eşik düşmez. Ṯ kendi gürültü bandında |

Dağılım: **1 KESİN · 3 ADAY · 1 ADA · 1 ÖLÇÜLEMEDİ · 0 TEMİZ.**

---

## 1 · PANTELERYA

**Geometri türü (önce bu soruldu).** Atlas noktası (36.792, 11.990) Pleiades [462168](https://pleiades.stoa.org/places/462168) *Pantelleria (island)* `reprPoint`'ine **0,06 km**, TGN [7008298](http://vocab.getty.edu/page/tgn/7008298) *Isola di Pantelleria*'ya 1,31 km uzakta. Yani atlas, `tur:"kale"` diye bir nokta iddia ediyor ama koordinatı **adanın alan temsil noktası.** Bu nokta adanın iç kesiminde ve orada hiçbir dönemde kale yoktu. ⇒ ADA sınıfı. Bu kez sorun tanık tarafında değil, **atlas tarafında**: atlasın kendisi alanı noktaya indirgemiş.

**Tanıklar (nokta nesne):**

| tanık | nesne | km | not |
|---|---|---|---|
| Pleiades [462167](https://pleiades.stoa.org/places/462167) *Cossyra (settlement)* | liman yerleşimi; port; −30..2100 | **5,94** | tek konum: OSM modern Pantelleria (`associated_modern`) |
| TGN [1045872](http://vocab.getty.edu/page/tgn/1045872) *Pantelleria* | inhabited place, 1′ yuvarlak | **5,81** | Pleiades'e 0,49 km |

**Değerlendirme:**
- Adanın tek kasabası ve limanı var. Kale (Barbacane) bu limanda; bu bilgi genel bilgidir, tanıkla teyit edilmedi.
- Pleiades kaydı yerleşimi −30'dan 2100'e kadar sürekli tanıklıyor ⇒ kasaba ayrı bir ortaçağ sitesi değil, sürekli aynı yer. §6'ya göre böyle bir durumda modern koordinat yeterlidir.
- §9.4 itirazı: TGN *inhabited place* kaydı ikinci tanık sayılmaz. Bu itiraz bu vakada sonucu değiştirmiyor. Kararı veren şey 5,9 km'lik fark değil, atlas noktasının **ada merkezi** olması: o nokta hiçbir aday nesnenin yeri değil.
- **Eşik-düşer kuralı:** Nesne (Cossyra limanı/kasabası) adlı ve 2100 yıl boyunca tanıklı ⇒ **KESİN.**

**Pencere:** `s:` 1281-01-01→1861-02-13 napoli, 1861-02-13→1923-10-29 italya. Kale ve kasaba sürekli ⇒ **tek katman ⇒ TAŞIMA.**

**Hazır diff:** `LAB-KONUM-ADAY-1010-pantelerya.diff`: `lat:36.792, lon:11.990` → `lat:36.8315, lon:11.9450` (Pleiades 462167). `--check` 46ebbc3c6'ya karşı **GEÇTİ**. Karada (kıyıya 0,8 km). En yakın atlas noktası Kelîbiye, 75,8 km.
Bu ADAY turunun ürünü olduğu için `v2.diff`'e konmadı. Koordinatör kovayı onaylarsa doğrudan eklenebilir.

## 2 · İMROZ

**Geometri:** Atlas noktası (40.163, 25.905) ada temsil noktalarına uzak: Pleiades [501439](https://pleiades.stoa.org/places/501439) 4,10 km, TGN [1007154](http://vocab.getty.edu/page/tgn/1007154) 6,10 km. Enlemi Pleiades ada noktasıyla aynı (40.163), ama boylamı değil. ⇒ Ada merkezi olduğu kanıtlanamadı. Nokta ne merkezde, ne kalede, ne de bugünkü kasabada.

**Tanıklar:**

| tanık | nesne | km |
|---|---|---|
| Pleiades [501438](https://pleiades.stoa.org/places/501438) *Imbros (settlement)*, "modern Kaleköy" | DARMC (−750..−330, doğruluk 10 km) + OSM Kaleköy (modern) | **7,83 / 7,86** |
| TGN [7718212](http://vocab.getty.edu/page/tgn/7718212) *Kaleköy* | inhabited place, 6 haneli | **7,9** (Pleiades OSM'ye 0,14 km) |

**§6.2 ters yönde: atlas hangi nesneyi kastediyor?**
- Kayıt `tur:"kale"`, `k:4`, `m:"Edirne"`.
- Adanın tarihî kalesi Kaleköy'de (Kastro). Osmanlı döneminin idarî merkezi ise Panagia/Çınarlı, bugünkü Gökçeada merkezi; ikisi arası ~4 km. Bu ayrım genel bilgidir.
- Panagia için tanık bulunamadı: TGN'de "Gökçeada" sorgusu boş döndü, Pleiades'te kayıt yok.
- ⇒ Nesne = kale (Kaleköy) kabul edilirse: iki tanık 0,14 km içinde, fark 7,86 km, pencere (bizans 1281→1455, Osmanlı `d:` 1455→1912, yunanistan 1912→13, `d:` 1913→20, tbmm 1920→23) kale için tek katman ⇒ **TAŞIMA olur.**
- Nesne = idarî kasaba kabul edilirse ölçülemez.

**Kova: ADAY** (nesne seçimi koordinatörde). Kale seçilirse KESİN'e yükselir; önerilecek koordinat 40.2336/25.8986 (Pleiades OSM Kaleköy), karada.

## 3 · AYAMAVRA (Lefkada)

**Geometri türü (görevin istediği gibi önce soruldu):** Atlas noktası (38.716, 20.643) iki ada kaydına çok yakın:
- TGN [7002712](http://vocab.getty.edu/page/tgn/7002712) *Lefkás, Nísos* ve GeoNames [258437](https://www.geonames.org/258437) *Lefkas* (island): ikisinin de koordinatı 38.716667/20.633333, atlasa **0,84 km**. Enlem birebir aynı.
- Pleiades [530975](https://pleiades.stoa.org/places/530975) *Leucas (island)*: 2,13 km.

⇒ **Kale noktası adanın gazetteer merkezinden alınmış: ADA sınıfı. Bu bir konum farkı değil, geometri türü hatası.**

**Kalenin (Santa Maura / Ayamavra) tanığı:**
- Pleiades: yok. 530974 *Leucas*, antik şehir (DARMC, −750..640, doğruluk 10 km), 11,84 km; yanlış nesne.
- TGN: "Santa Maura", "Agia Mavra", "Lefkada" sorguları kale ya da kasaba kaydı döndürmedi.
- GeoNames "Mavra" araması: Lefkada'da kale kaydı yok.
- GeoNames [258438](https://www.geonames.org/258438) *Lefkada* (city), 38.8304/20.7044: **13,79 km.** Bu modern kasaba; kale de kasabanın hemen kuzeydoğusunda, setin başında (genel bilgi).

**Kova: ADA.** Atlas noktasının yanlış olduğu kesin: ada merkezinde kale yok. Ama doğru noktanın tanığı yalnız modern kasaba (GeoNames). Kalenin kendisi için tanık bulunamadı.

Pencere:
- Napoli 1281→1479
- Osmanlı `d:` 1479→1684
- Venedik 1684→1715
- Osmanlı `d:` 1715→18
- Venedik/Fransa/İngiltere/Yunanistan 1718→1923

Kale ve kasaba sürekli ⇒ tek katman. Kale için bir tanık bulunursa çare **TAŞIMA** olur; büyüklüğü ~14 km. Etki notu: yeni nokta Preveze'ye ~15 km yaklaşır (Preveze `yerlesimler.js:1454`), yani peteğin sınırı değişir. D206 gereği iki uç da ölçülmeli.

## 4 · ERCİŞ

**Geometri ve nesne:** Atlas noktası (39.026, 43.360) TGN [7725924](http://vocab.getty.edu/page/tgn/7725924) *Erciş* (**second level subdivisions**, yani ilçe) kaydıyla 39.025866/43.359644'te, **0,03 km**. ⇒ Atlas koordinatı **modern ilçenin idarî kaydından** alınmış. Malatya desenini yapısal olarak teyit ediyor: atlas noktası modern yerde.

| tanık | gösterdiği nesne | km |
|---|---|---|
| Ṯ ARJISH_433E390N_S (*towns*, certain) | Cornu koordinatı = modern kasaba | 0,42 |
| TGN [1086247](http://vocab.getty.edu/page/tgn/1086247) (inhabited, 1′) | modern kasaba | 1,35 |
| Pleiades [874463](https://pleiades.stoa.org/places/874463) *Elegoana | geç antik (300–640), DARMC, BAtlas özdeşleştirmesi | 0,58 |
| Pleiades [662610533](https://pleiades.stoa.org/places/662610533) / [393203595](https://pleiades.stoa.org/places/393203595) *Çelebibağı* | göl kıyısındaki modern köy + Urartu stelinin buluntu yeri | 6,19 |
| Pleiades [874356](https://pleiades.stoa.org/places/874356) Arsesa | BAtlas **etiket** konumu, yer değil | 9,36 · sayılmadı |

**Değerlendirme:**
- Eski (göl kıyısındaki, 19. yüzyılda sular altında kalan) Erciş için **hiçbir tanık kaydı yok.**
- Çelebibağı kaydı kendini eski Erciş'le özdeşleştirmiyor: tanımı yalnız "modern city" ve "stela findspot". Özdeşliği varsaymak §6.2'yi çiğnemek olur.
- TGN'de "Arjish", "Erdjish" ve "Zortul" sorguları yalnız modern kayıt döndürdü.

**Kova: ÖLÇÜLEMEDİ.** Pencere: ilhanlı 1281 → … → safevi 1502–1548, Osmanlı `d:` 1548→1920, tbmm 1920→1923. Eski şehrin terki pencerenin içinde (19. yüzyıl, genel bilgi) ⇒ tanık bulunursa çare **TAŞIMA değil İKAME** olur (§6.3).

## 5 · BALASAGUN (Ak-Beşim): §6.2 ters yönde

Koordinatörün vurgusuyla: önce **atlasın hangi nesneyi kastettiği** soruldu, sonra tanığın.

**Atlasın niyeti (kaydın kendi alanlarından):**
1. `ad:"Balasagun (Ak-Beşim)"`: ad açıkça **Ak-Beşim** diyor.
2. `kaynak:"balasagun"`: TDV maddesi. Bu turda açıldı ve şöyle diyor: *"bugünkü Ak-Peşin harabelerinin bulunduğu yerde kurulmuş olduğu kabul edilmektedir."* ⇒ Kaydın kaynağı da **Ak-Beşim** diyor.
3. Yorum (`yerlesimler_ortaasya3.js:124-130`): *"Çu vadisi … Atlas penceresinin TAMAMINDA meşru bir nokta; Çu vadisinin temsilcisi."* ⇒ Nokta 1281–1923 boyunca bir **vadi temsilcisi** olarak da kullanılıyor.

⇒ **Atlas Ak-Beşim'i kastediyor.**

**Koordinat neyi gösteriyor:**

| tanık | nesne | km |
|---|---|---|
| TGN [8724271](http://vocab.getty.edu/page/tgn/8724271) *Burana* (archaeological sites; üst birimi "Balasagun") | Burana minaresi ve şehir harabesi | **1,69** |
| TGN [8711886](http://vocab.getty.edu/page/tgn/8711886) *Balasagun* (deserted settlements) | **Burana ile aynı koordinat** (42.746/75.248) ⇒ TGN Balasagun'u Burana'yla özdeşleştiriyor | 1,69 |
| TGN [8711887](http://vocab.getty.edu/page/tgn/8711887) *Ak-Beshim* (deserted settlements; sorguda "Suyab" adıyla da dönüyor) | Ak-Beşim harabesi (TGN'ye göre Suyab) | **6,02** |
| Ṯ SARIGH (waystation) | başka bir nesne | 4,96 · sayılmadı |
| Pleiades | 16 km içinde kayıt yok | — |

**Sonuç:**
- Atlasın **koordinatı Burana'da** (TGN'ye 1,69 km), **adı ve kaynağı Ak-Beşim'de** (TGN'ye 6,02 km). Kayıt kendi içinde çelişiyor.
- Çelişki bir koordinat hatası değil, **iki rakip özdeşleştirmenin** atlasın içine taşınması:
  - TDV: Balasagun = Ak-Beşim.
  - TGN: Balasagun = Burana, Ak-Beşim = Suyab.
- Hangi harabenin Balasagun olduğu bir **tarih yazımı sorusu**. Gazetteer mesafesi bunu çözemez.
- Ak-Beşim tek tanıklı (TGN, hata dağılımı ölçülmedi, 3 haneli). §6.1'e göre tek TGN ≥5 km sayılmaz. Eşik-düşer kuralı da uygulanamaz, çünkü nesnenin **kimliği** (hangi harabe Balasagun?) kesin değil; kural tam da bu kimlik kesinliğini şart koşuyor.

**Kova: ADAY.** Seçenekler (karar koordinatörde):

| seçenek | ne yapar | koordinat sonucu |
|---|---|---|
| (a) adı koordinata uydur: `"Balasagun (Burana)"` | ad değişir, nokta kalır | TEMİZ (TGN Burana 1,69). TDV kaynağıyla çelişir; `kronoloji_orta_asya.js` 611/988'deki `odak_yer` referansları değişir |
| (b) koordinatı ada uydur: Ak-Beşim 42.805/75.199 | 6,02 km taşıma | TDV ile tutarlı. Tek tanık TGN; ikinci tanık aranmalı |
| (c) dokunma, çelişkiyi `not:` alanında beyan et | — | — |

Yan not: Vadi temsilcisi rolünde 6 km fark motor açısından küçüktür (en yakın komşu 145 km). Kaydın 14. yüzyıldan sonra harabe olarak 1923'e kadar boyanması ayrı bir `§3.5` hayalet sorusudur; `yerlesimler_ok107.js:24-28` bunu zaten not etmiş.

## 6 · ŞİRAZ

**Nesne:** Kayıt `tur:"sehir"`, iki başkentlik dönemi (`kd` 1353–1393, 1766–1791). Şiraz sürekli yaşayan bir şehir; ortaçağ çekirdeği bugünkü eski şehrin içinde. ⇒ §6'ya göre modern şehir koordinatı tarihî şehir için de geçerli olabilir. Ortaçağ sitesi modern şehirden ayrı bir yer değil.

| tanık | nesne · geometri | km |
|---|---|---|
| Ṯ SHIRAZ_525E296N_S (*metropoles*, certain) | ortaçağ şehri · alan temsil noktası | **6,18** |
| GeoNames [115019](https://www.geonames.org/115019) (PPLA) | modern şehir · temsil noktası 29.61031/52.53113 | **5,54** (Ṯ'ya 0,98) |
| TGN [7002148](http://vocab.getty.edu/page/tgn/7002148) (inhabited, 1′) | modern şehir | 4,99 (Ṯ'ya 4,01) · §9.4 gereği sayılmadı |
| Pleiades [922706](https://pleiades.stoa.org/places/922706) | Qasr-i Abu Nasr ile Şiraz'ı **birleştiriyor**. DARMC 4,43 / DARE 5,67 / reprPoint 0,81 | sayılmadı (§6.2) |
| Pleiades [65424878](https://pleiades.stoa.org/places/65424878) | Qasr-i Abu Nasr, Ahameniş höyüğü, ayrı nesne | 4,04 · yanlış nesne |

**Değerlendirme:**
- Ṯ ile GeoNames 1 km içinde aynı yeri (eski şehrin batı kesimini) gösteriyor. Atlas noktası ikisinden de 5,5–6,2 km doğu-güneydoğuda, modern yayılma alanında.
- Ama:
  1. İki tanığın gösterdiği şey de bir **şehir-alanının temsil noktası.** Atlas noktası da öyle. Alan ile alan arasındaki temsil-noktası mesafesi ancak kısmen bir konum testidir (§6.2'nin geometri yüzü).
  2. Ṯ 6,18 km ile kendi p90 değerinin (8,7) içinde kalıyor. GeoNames'in hata dağılımı ölçülmedi.
  3. Eşik-düşer kuralı için adlı bir nokta-nesne gerekiyor (Atik Cuma Camii, Kerim Han Kalesi, Vekil Çarşısı). TGN'de "Atiq", "Vakil" ve "Karim Khan" sorguları boş döndü. Pleiades'te kayıt yok.

**Kova: ADAY** (KESİN'e yakın). Adlı bir nokta-nesne tanığı bulunursa eşik düşer ve karar mesafeyle verilir. Pencere 1281→1923 kesintisiz ve şehir sürekli ⇒ çare **TAŞIMA** olur (adayı: Ṯ ile GeoNames'in uyuştuğu eski şehir).

---

## Öngörü ↔ ölçüm

| ad | öngörü | ölçüm | tuttu mu |
|---|---|---|---|
| Pantelerya | ADA → KESİN olabilir | **KESİN** (ADA kaynaklı) | tuttu |
| İmroz | ADAY | **ADAY**, ama gerekçe değişti: tanık sayısı değil, **nesne seçimi** (kale mi, kasaba mı) | yarı |
| Ayamavra | ADA | **ADA**. Atlasın noktası ada gazetteer kaydıyla aynı enlemde | tuttu |
| Erciş | ÖLÇÜLEMEDİ | **ÖLÇÜLEMEDİ**. Atlasın noktası TGN ilçe kaydından alınmış (0,03 km) | tuttu |
| Balasagun | ÖLÇÜLEMEDİ (nesne belirsiz) | **ADAY**: atlasın niyeti ölçülebildi (ad + TDV = Ak-Beşim). Belirsiz olan atlas değil, özdeşleştirme | **tutmadı** |
| Şiraz | TEMİZ (gürültü) | **ADAY**: ikinci bir tanık (GeoNames) Ṯ ile 1 km içinde uyuştu | **tutmadı** |

**Yeni gözlem (desen):** Üç vakada atlas koordinatının **kaynağı** bulundu ve üçü de bir alan ya da idarî kayıt çıktı:
- Pantelerya → Pleiades ada kaydı (0,06 km).
- Ayamavra → TGN/GeoNames ada kaydı (0,84 km, aynı enlem).
- Erciş → TGN ilçe kaydı (0,03 km).

Yani KATMAN'ın ADA sınıfı ve Malatya deseni aynı kökten geliyor: **atlas noktası, nesnenin değil, onu içeren alanın ya da idarî birimin kaydından alınmış.** Bu, ADA sınıfının 42 noktasının geri kalanında "atlas noktası ↔ ada/ilçe kaydı ≤1 km" taramasıyla mekanik olarak aranabilir. Bu turda taranmadı.

Tablo: `LAB-KONUM-ADAY-1010.csv`.
