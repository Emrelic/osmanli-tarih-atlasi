# HİNDİSTAN DENETİMİ — 11/12 Kasım 2026

Kapsam: Güney Asya künye zinciri (Delhi Sultanlığı → Bâbürlü → İngiliz Hindistanı → Hindistan /
Pakistan / Bangladeş) ile Dekken, Bengal, Gucerât, Keşmir, Maratha, Sih, Portekiz/Fransız/Danimarka
Hindistanı, prens devletleri ve 1947 sonrası katılımlar. **Yalnız denetim; `data/`ya dokunulmadı.**

**Ölçüm koşulu (önemli):** UMIT makinesi, HAFİF KİP (yönetici oturumu talimatı, Emre onayıyla).
`denetle.py`, `paketle`, `push_kapisi`, üretilmiş harita ölçümü **koşturulmadı**;
`kodla.py coz-c` bellek yetmediği için düştü (MemoryError). Bu yüzden:
- Değişmez 2 (sessiz toprak değişimi) `denetle.py` ile değil, aşağıdaki **kendi hafif betiğimle**
  yaklaşık ölçüldü (yalnız zincir künyelerinin `taraflar/devletler/devlet` alanlarına bakar;
  `yer_id`, bölge-geniş madde, motorun öteki eşleme yolları sayılmaz ⇒ **aday** listesidir, ihlal değil).
- Değişmez 8 ve haritanın petek sınırları **ölçülemedi**.

Ağaç: worktree `sharp-lewin-46458b`, taban `7a3659d54` (origin/main, 11 Kasım).
Betikler (scratchpad, depoya girmedi): `kunye.py` (künye süzgeci: `bolge:"guney-asya"`, `t ≥ 1281`),
`envanter.py` (bütün `kronoloji*`/`olaylar*` + künye içi kronoloji, yerleşim kırılmaları, ±30 gün
eşlemesi), `hayalet.py` (s: dönemi künye ömrünü aşıyor mu; 1940 sonrası kırılmalar).

Kaynak notu: TDV maddeleri (behmeniler, bengal, gucerat, kesmir, sir-sah) 12 Kasım'da HTTP 200 ile
okundu. Öteki bulgular atlasın kendi iç çelişkisine (iki dosya aynı olay için farklı gün) ya da
künye ↔ yerleşim uyumsuzluğuna dayanır; bunlar kaynak gerektirmeden ölçülmüş olgulardır. Kaynakla
yeni tarih öneren maddelerde kaynak yazıldı; **web'de bu oturumda teyit edilemeyenler "teyit
bekler" diye işaretlendi** (üçüncü bağımsız kaynak kuralı).

---

## A. En önemli 5 bulgu

1. **Keşmir'in Pakistan yönetimindeki kesimi ve Aksai Çin haritada yok (SINIR, siyasi hassas).**
   Gilgit, Muzaffarabad, Skardu, Mirpur, Aksai Çin, Tawang/Itanagar için **hiç yerleşim noktası
   yok** (`yerlesimler*.js` taraması). 1947-10-26'dan sonra Srinagar, Cammû, Leh →
   `hindistan-cumhuriyeti`; petek motoru Gilgit-Baltistan ve Azad Keşmir topraklarını en yakın
   peteğe, büyük olasılıkla Srinagar/Leh'e (Hindistan) emer. Bu, Hindistan'ın hukukî iddiasını
   fiilî idare gibi gösterir. Kronolojide 1947-10-22 kabile akını (Muzaffarabad, `devletler.js#pakistan`)
   ve 1949-01-01 ateşkes maddesi var ama haritada karşılığı yok ⇒ madde ↔ harita birbirini doğrulamıyor.
   **Seçenek Emre'ye:** (a) fiilî idare: Muzaffarabad, Gilgit, Skardu noktaları `pakistan`
   (1947-10-22/1948 →), Aksai Çin'de bir nokta `cin-halk` (1950'ler →); Srinagar/Leh/Cammû
   `hindistan-cumhuriyeti` kalır; her birine "tartışmalı bölge: Hindistan iddiası / Pakistan
   (Çin) iddiası" beyanı. (b) Hukukî iddia gösterimi (taraf tutar, önerilmez). (c) Tartışmalı
   bölgeyi beyanlı boşluk bırakmak. Hindistan'ın tezi: 26 Ekim 1947 Katılım Belgesi (Instrument
   of Accession). Pakistan'ın tezi: katılımın meşruiyeti tartışmalı, BM Güvenlik Konseyi
   47 (1948) halk oylaması kararı. İki tarafın akademik kaynağı rapora eklenecek (ölçülemedi:
   bu oturumda web teyidi yapılmadı).
2. **Gucerât'ın Bâbürlülere geçişi 4 farklı günle yazılmış (ÇELİŞKİ + TARİH-HATA).**
   - `devletler.js#gucerat-sultanligi` t = `1573-01-01`, kronoloji "1573" (Bâbürlü eyaleti).
   - `kronoloji_hindistan.js` "Ekber Şah Gucerât'ı fethetti" `1573-08-20`.
   - `kronoloji_sinir_dogu_500_1281` Wadhwan `1572-11-20`.
   - Yerleşimler (Sûrat, Kanbâyet, Cûnâgadh, Çampâner, Broaç, Baroda, Somnât) `1573-02-26`.
   - TDV *gucerat*: "Ekber Kasım 1572'de Gucerât'a vardı." Bilinen sıra: Ahmedâbâd'a giriş
     Kasım 1572 → Sûrat'ın teslimi 26 Şubat 1573 → Ahmedâbâd zaferi (isyanın bastırılması)
     2 Eylül 1573. "1573-08-20"nin hangi olayı tarihlediği belirsiz.
   - **Öneri:** künye t = `1573-02-26` (yerleşimlerle aynı; Sûrat'ın teslimi), `kronoloji_hindistan`
     maddesini ya "Ahmedâbâd zaferi 1573-09-02" diye yeniden adlandır ya da 1572-11-20'ye çek;
     Ahmedâbâd yerleşiminin kendi kırılmasını (şu an Gucerât künyesinde değil, 1411'den beri
     başka zincirde) kontrol et. *Gün kaynakları (Ekbernâme/Smith) teyit bekler.*
3. **Bengal Sultanlığı'nın sonu 3 günle (ÇELİŞKİ) ve künye ömrünü aşan yerleşimler (HAYALET).**
   - Künye t = `1576-01-01`; `kronoloji_hindistan` "Ekber Bengal Sultanlığı'na son verdi"
     `1576-04-03`; `kronoloji_sinir_nokta2` Rajmahal `1576-07-12`; yerleşimler (Gaur, Pandua,
     Dakka, Sonârgâon, Hûglî, Mungîr, Bhâgalpûr) `bengal-sultanligi` → `1576-07-12`.
   - TDV *bengal*: yalnız "1576'da Ekber Şah zamanında". Rajmahal muharebesi (Dâvûd Han
     Kerrânî'nin ölümü) 12 Temmuz 1576 genel kabuldür.
   - Kattak, Puri, Bâlâsor `bengal-sultanligi` 1568–1592: künye 1576'da bitiyor ⇒ 16 yıl
     hayalet. Orissa'daki Kerrânî/Afgan kalıntısı 1592'de Man Singh'e kadar sürdü; ardıl
     künye yok.
   - **Öneri:** künye t = `1576-07-12`; `1576-04-03` maddesinin neyi tarihlediğini düzelt
     (Ekber'in Bihar'a hareketi mi?) ya da sil; Orissa 1576-1592 için "Orissa Afganları
     (Kerrânî kalıntısı)" künyesi ya da `bengal-sultanligi` t'sini 1592'ye uzatıp kronolojiye
     beyan (sınıflandırma: aynı polity sürüyor ⇒ künye GENİŞLET).
4. **Bâbürlü künyesi dışına taşan yerleşim dönemleri (HAYALET), iki büyük vaka.**
   - Asîrgarh ve Burhânpûr (`yerlesimler_hindistan.js`): `babur-imparatorlugu` 1601-01-01 →
     **1860-01-01**. Künye 1857-09-21'de bitiyor; üstelik Burhânpûr 1720'lerden sonra Nizam,
     1760'tan sonra Maratha (Sindiya) idaresindeydi; Asîrgarh 1819'da İngilizlerce alındı,
     Burhânpûr 1860'ta Sindiya'dan İngilizlere geçti. **Öneri:** zinciri
     babur → haydarabad-nizam (1724-10-11) → maratha/gvalyar (1760) → ingiliz-hindistani
     (Asîrgarh 1819-04-09, Burhânpûr 1860) olarak kır; her kırılmaya madde. *Günler teyit bekler.*
   - Kâbil, Gazne, Peşâver `babur-imparatorlugu` **1504-10-01**'den başlıyor; künye
     1526-04-21. 1504-1526 Bâbür'ün Kâbil hükümdarlığıdır (Timurlu); Peşâver'in 1504'te
     Bâbür'e geçtiği de şüpheli (1519 seferi / 1526). **Öneri:** künye f'yi değiştirme;
     1504-1526 dönemini `timurlu` (ya da ayrı "Kâbil Bâbürlü Beyliği") künyesine ver.
   - Eski Kandehar `babur` 1522-09-06'dan; aynı durum.
5. **Sih İmparatorluğu künyesi 1801'de başlıyor, yerleşimler 1764-65'ten (HAYALET + EKSİK-DEVLET).**
   Lahor, Amritsar, Sirhind, Câlandhar, Ludhiyana, Siyâlkot, Râvalpindi `sih-imparatorlugu`
   1764-01-14 / 1765-04-16 → ; künye f = 1801-04-12 (Rançit Singh'in taç giymesi). 1765-1799
   Lahor'u Bhangi misli tutuyordu; Rançit Singh Lahor'u 7 Temmuz 1799'da aldı. **Öneri:**
   "Sih Misilleri (Dal Khalsa konfederasyonu, 1748/1765-1799/1801)" künyesi açılsın, yerleşimler
   1765→1799/1801 ona; ya da künye f GENİŞLET (`1765-04-16`) + `ad` "Sih Konfederasyonu →
   İmparatorluğu". Kaynak teyit bekler (J.S. Grewal, *The Sikhs of the Punjab*, NCHI II.3).

---

## B. Bütün bulgular (sınıflı)

### B1. Künye tarihleri

| # | Künye | Atlasta | Kaynak / gerekçe | Sınıf | Öneri |
|---|---|---|---|---|---|
| 1 | `behmeni` f | 1347-01-01 | Kendi kronolojisi `kronoloji_hindistan` ve sınır maddesi **1347-08-03**; TDV *behmeniler* yalnız "748 (1347)" | ÇELİŞKİ | f = 1347-08-03 (atlas maddeleriyle aynı); TDV yalnız yıl verdiği için `ic_not`ta gün kaynağı (Sherwani, *The Bahmanis of the Deccan*) beyan edilmeli — teyit bekler |
| 2 | `bengal-sultanligi` f | 1340-01-01 | TDV *bengal*: "1340 yılına kadar … eyaleti" ✓; ama `kronoloji_sinir_nokta2` 1338 (Fahreddin Mübarek Şah, Sonârgâon) | ÇELİŞKİ (iç) | Künye 1340 TDV ile uyumlu, kalsın; 1338 maddesi "Sonârgâon'da bağımsızlık ilânı (TDV: 1340)" diye çift kaynakla beyan edilsin |
| 3 | `bengal-sultanligi` t | 1576-01-01 | Rajmahal 12 Temmuz 1576; yerleşimler 1576-07-12 | TARİH-HATA | t = 1576-07-12 (bkz. A3) |
| 4 | `gucerat-sultanligi` t | 1573-01-01 | yerleşimler 1573-02-26; TDV Kasım 1572 | TARİH-HATA | bkz. A2 |
| 5 | `kesmir` f | **1000-01-01** | Künye adı "Keşmir Sultanlığı (Şah Mîr Hânedanı)"; TDV *kesmir*: Şah Mîr sultan 1338 | TARİH-HATA / HAYALET | f = 1339 civarı (TDV 1338; künyenin kendi kronolojisi hem 1338 hem 1339 der) — 1000-1338 Lohara/Hindu Keşmir için ayrı künye ya da beyanlı boşluk. Künyenin kendi iki maddesi (1338 ve 1339) birleşmeli |
| 6 | `kesmir` t | 1586-10-01 | `kronoloji_hindistan` "Ekber Keşmir'i ilhak etti" 1586-01-01; TDV yalnız 1586 | ÇELİŞKİ (iç) | Tek güne indir (1586-10-01, Yusuf Şah'ın teslimi 1586 — teyit bekler) |
| 7 | `sur-hanedani` f | 1540-05-17 | TDV *sir-sah*: "944'te (1538) bütün Bengal'i egemenliği altına aldı"; Çavsa 26 Haz 1539; Kannauj 17 May 1540; başlık 1540-1545. Yerleşimler (Gaur, Patna, Dakka…) `sur-hanedani` **1538-01-01** | HAYALET (yerleşim künyeden 2,4 yıl önce) | İki seçenek: künye f = 1538 (Bengal fethi; hicrî 944 = 1537-06-10/1538-05-30 ∩ 1538 → 1538-01-01, hicrî kuralı) ya da yerleşimleri 1540-05-17'ye kadar Bengal'de bırak. Atlas `bengal-sultanligi` kronolojisinde Gaur'un düşüşü 1538-04-06 — o gün kullanılırsa künye f = 1538-04-06 |
| 8 | `sur-hanedani` t | 1564-01-01 | Bengal Sûrî kolu (Gıyâseddin Celâl Şah) 1563/64 sonu ✓; ancak Delhi'deki son Sûrî (Sikender Şah) 1555'te düştü | — | Uygun; `ozet`te Bengal kolu beyanı var |
| 9 | `bengal-nevabligi` t | 1757-06-23 | Yerleşimler (Patna, Gayâ, Mungîr) 1764-10-22'ye, Çatgam 1760-10-11'e kadar `bengal-nevabligi` | HAYALET (7 yıl) | Mîr Câfer / Mîr Kâsım nevablığı 1757'den sonra da sürdü ⇒ künye t'yi GENİŞLET: 1765-08-12 (Divânî) ya da 1764-10-22 (Buksar) |
| 10 | `maratha` f | 1674-06-06 | Kolhapûr `maratha` 1659'dan; Şivâcî devleti taç giymeden önce de vardı (1659 Afzal Han zaferi künyenin kendi kronolojisinde) | HAYALET (15 yıl) | f'yi 1645/1656'ya GENİŞLET ya da Kolhapûr 1659-1674'ü `bicapur`/beyanlı boşluk yap. Taç giyme günü (6 Haziran 1674) **TAKVİM** kontrolü ister: İngiliz tanık Henry Oxenden'in kayıtları Jülyen'dir; Hindu takvimi (Jyeshtha śuddha 13, Śaka 1596) Gregoryen karşılığı teyit bekler |
| 11 | `maratha` t | 1818-06-03 | Ecmîr `maratha` 1818-06-25'e kadar (Sindiya'nın Ecmîr'i bırakması 25 Haziran 1818) | ÇELİŞKİ (22 gün) | Ecmîr 1756-1818 sahibi `gvalyar` (Sindiya) olmalı, `maratha` (Peşva) değil |
| 12 | `bicapur` t | 1686-09-22 | Bangalor `bicapur` 1687-01-01'e, Vellor ve Arkot **1687-09-21**'e kadar | HAYALET + SINIR | Vellor ve Arkot 1677-78'de Şivâcî'nin Karnataka seferiyle **Maratha**ya geçti (Cinci için atlas zaten 1677-05-01 bicapur→maratha yazmış). Vellor 1678 → maratha, 1708 civarı → Bâbürlü/Karnatik; Bangalor 1686/87'de Bâbürlü (Kasım Han) aldı ve 1689'da Meysûr'a sattı — atlas 1687 bicapur→meysur yazmış, Bâbürlü ara dönemi eksik |
| 13 | `bicapur` t / kronoloji | 1686-09-22 vs `kronoloji_hindistan` **1686-09-12** | Aynı olay iki gün; 10 gün farkı Jülyen/Gregoryen farkıdır (Sarkar Avrupa kaynaklarının Eski Usûl tarihini kullanır) | TAKVİM | 1686-09-22 (Gregoryen) kalsın; `kronoloji_hindistan` maddesi 1686-09-22'ye çekilsin, `ic_not`ta "12 Eylül 1686 (E.U.)" beyanı |
| 14 | `vijayanagara` t | 1646-01-01 | Vellor, Arkot `vijayanagara` 1656-01-01'e kadar | HAYALET (10 yıl) | Biri düzelsin: III. Sriranga Vellor'u 1646'da kaybetti (künye) ⇒ yerleşim t = 1646 |
| 15 | `kocin` t, `seylan-sinhala` t | 1503-01-01 / 1518-01-01 | Yerleşimler 1503-09-01 / 1518-09-01 | ÇELİŞKİ (8 ay) | Künye t yerleşim günüyle aynı olsun |
| 16 | `bhopal` f | 1708-01-01 | Bhopâl yerleşimi 1707-01-01 | ÇELİŞKİ | Dost Muhammed Han'ın Berasia/Bhopal'i alışı 1707-1709 arası; tek yıla indir |
| 17 | `ingiliz-hindistani` f | 1757-06-23 | Kalküta `ingiliz-hindistani` **1757-01-02**'den (Clive'ın geri alışı) | HAYALET (6 ay) | 1757-01-02 → 1757-06-23 arası Kalküta'yı `ingiltere` (EIC) bırak — 1690-1756 zaten `ingiltere` |
| 18 | `racput` t | 1947-08-15 | Çitor, Udeypûr, Haldighati `racput` **1948-04-18**'e kadar (Mevar'ın Birleşik Racastan'a girişi) | HAYALET / ÇELİŞKİ | Künye t = 1949-03-30 (Büyük Racastan) ya da 1948-04-18; Codhpûr/Caypûr/Bikaner/Caysalmer 1947-08-15'te Hindistan'a geçiyor, Mevar 1948'de — tutarlı bir ölçüt seçilmeli (katılım belgesi mi, birlik mi) |
| 19 | `cunagadh` t | **1948-02-20** (plebisit) | Yerleşimler (Cûnâgadh, Somnât) ve iki kronoloji maddesi **1947-11-09** (Hint idaresi) | ÇELİŞKİ (iç) + siyasi hassas | Künye t = 1947-11-09 (fiilî devir; harita ile aynı). 20 Şubat 1948 plebisiti ayrı madde. Pakistan tezi: nevabın 15 Eylül 1947 Pakistan'a katılım belgesi geçerli; Hindistan tezi: plebisit. Beyan edilsin |
| 20 | `maldivler-cumhuriyeti` t | 2000-12-31 | Maldivler bugün de cumhuriyet; kronoloji **0 madde** | HAYALET (yanlış bitiş) + EKSİK-MADDE | t boş (açık). En az 1968-11-11 kuruluş maddesi |
| 21 | `bhutan` (1616–**2026-01-01**) ve `butan` (1907-12-17 → açık) | iki künye 1907'den beri **çakışıyor** | Aynı devlet iki kayıt | ÇELİŞKİ (mükerrer künye) | `bhutan` t = 1907-12-17 (ardıl `butan`) ya da tek künyede birleştir; `2026-01-01` uydurma bitiştir |
| 22 | `orissa` (1000–1568) ve `dogu-ganga` (0496–1434) | 1000–1434 **çakışıyor** | `orissa` adı da "Doğu Ganga ve Gacapati" | ÇELİŞKİ (mükerrer) | `orissa` f = 1434 (Gacapati / Kapilendra) ya da tek zincir |
| 23 | Zaman ucu açık (t yok) ölü hanedanlar | `pandya-1` (601→), `kalacuri-tripuri` (850→), `pattikera` (1202→), `deva-samatata` (1234→) | Hepsi 13. yy'da sona erdi; Tripuri (Tewar) yerleşimi `kalacuri-tripuri` 2000-12-31'e kadar boyalı | HAYALET | Kaynakla t yazılsın (Kalaçuri Tripuri ~1212; Deva ~1290'lar); Tripuri yerleşiminin dönemi kırpılsın |
| 24 | `fransiz-hindistani` | Pondişeri ve Çandernagor'un sahibi `fransa-cumhuriyet` (metropol), künye `fransiz-hindistani` hiç boyanmıyor (`harita:` yok) | — | SINIR (boya) | Ya künyeye `harita:` verilsin ya da kronoloji maddeleri `fransa-cumhuriyet` tarafına da bağlansın; ayrıca de jure devir (16 Ağustos 1962) maddesi eksik |
| 25 | Seylan | Kolombo, Kandy, Yafna 1948'e dek `ingiltere`; Kotte, Sitavaka, Dambadeniya `ingiliz-seylan` | Aynı koloni iki sahiple | ÇELİŞKİ | Hepsi `ingiliz-seylan` (künye 1796-02-15 →) |

### B2. Kronoloji maddeleri (aynı olay, farklı gün / takvim)

| # | Yer | Atlasta | Sorun | Sınıf | Öneri |
|---|---|---|---|---|---|
| 26 | `kronoloji_hindistan.js` "Job Charnock Kalküta'yı kurdu" | 1690-08-24 | İngiliz kaynaklarının 24 Ağustos 1690'ı **Jülyen**dir (Britanya 1752'ye kadar). Gregoryen = **1690-09-03** | TAKVİM | t = 1690-09-03, `ic_not`: "24 Ağustos 1690 (E.U.)" |
| 27 | `kronoloji_hindistan.js` Buksar | 1764-10-23 | Yerleşimler 1764-10-22; Buksar Muharebesi genel kabul 22 Ekim 1764 | ÇELİŞKİ (iç) | 1764-10-22 |
| 28 | `kronoloji_sinir_asya.js` Mâlvâ ilhakı | 1562-01-01 | Yerleşimler (Mandu, Uccayn) 1561-03-29 (Sarangpur) | ÇELİŞKİ (iç) | Ya madde 1561-03-29'a ya ikinci madde (1562 Baz Bahadır'ın kesin yenilgisi) beyanıyla |
| 29 | `kronoloji_sinir_asya.js` Asîrgarh/Fârûkîler sonu | 1601-01-01 | Asîrgarh'ın teslimi 17 Ocak 1601 (gün mevcut) | TARİH (hassasiyet) | 1601-01-17 — teyit bekler; künye `farukiler` t = 1601-01-01 da aynı güne |
| 30 | `kronoloji_hindistan.js` Halsa | 1699-04-13 | 13 Nisan modern Vaisakhi'dir; 1699 Vaisakhi'si Jülyen 29/30 Mart'a düşer — Sih tarihçiliği iki günü de kullanır | TAKVİM (beyan) | `ic_not` beyanı; gün değişikliği Emre kararı |
| 31 | Taraf/gün: 1947 bölünmesi | `kronoloji_sinir_halef_1923` Pakistan **1947-08-14**, yerleşimler 1947-08-15 | Hukuken iki dominyon da 15 Ağustos'ta doğdu (Indian Independence Act 1947, s.1 "appointed day"); Pakistan kendi bağımsızlık gününü 14 Ağustos kutlar | ÇELİŞKİ (beyan) | Değişmez 2 bozulmuyor (±30). Madde 1947-08-15'e çekilsin, `ic_not`ta "Pakistan resmî günü 14 Ağustos" beyanı — siyasi hassas, Emre kararı |
| 32 | Bangladeş kuruluşu | künye f 1971-12-16; madde 1971-12-16 | Bangladeş'in kendi resmî tezi: bağımsızlık ilânı **26 Mart 1971** (10 Nisan 1971 Proclamation of Independence geriye yürür); 16 Aralık "Zafer Günü"dür. Pakistan ordusunun teslimi 16 Aralık | ÇELİŞKİ (siyasi hassas) | Harita için fiilî kontrol (16 Aralık) savunulabilir; 26 Mart 1971 ilânı ve 17 Nisan 1971 Mujibnagar hükümeti **EKSİK-MADDE** olarak eklensin |
| 33 | `kronoloji_hindistan.js` Gıyâsüddin Tuğluk | 1320-09-06 | Yaygın tarih 8 Eylül 1320 | TARİH (teyit bekler) | TDV *tugluklular* ile kontrol (bu oturumda okunmadı) |
| 34 | `kronoloji_hindistan.js` Nâdir Şah Delhi | 1739-03-13 | Karnal 24 Şubat; Delhi'ye giriş 20 Mart, katliam 22 Mart 1739 genel kabul | TARİH (teyit bekler) | TDV *nadir-sah* ile kontrol |
| 35 | `kronoloji_guney_asya.js` + `kronoloji_hindistan.js` Hânüvâ | 1527-03-16 | Çoğu kaynak 17 Mart 1527 | TARİH (teyit bekler) | TDV *babur* ile kontrol |

### B3. Sessiz toprak değişimi adayları (hafif ölçüm, `denetle.py` DEĞİL)

Betik 1.352 kırılmadan 653'ünü "±30 gün içinde zincir tarafında madde yok" diye işaretledi. Çoğu
gürültü: (a) 1281-01-01 pencere başlangıcı (≈ 120), (b) 2000-12-31 veri ufku (≈ 180),
(c) `portekiz` boya anahtarı metropol Portekiz'i de kapsadığı için Afrika/Amerika/Asya'daki
Portekiz kırılmaları (≈ 150). Güney Asya'ya ait anlamlı adaylar (madde ya kaynakta öteki
tarafın dosyasında olabilir — **denetle.py ile doğrulanmalı**):

- 1304-01-01 `racput` → `delhi-sultanligi` (Sûrat, Kanbâyet, Diu, Patan … 8 yer): Gucerât fethi
  maddesi 1298/1299'da; 1304 kırılmasının maddesi yok. Ya kırılma 1299'a çekilmeli ya madde.
- 1378-01-01 `delhi-sultanligi` → `vijayanagara` (Cinci, Vellor, Arkot): Mâbar'ın Vijayanagara'ya
  geçişi; madde yok (Madurai Sultanlığı'nın sonu 1378).
- 1479-01-01 `cavnpur` → `delhi` (8 yer): Behlûl Lûdî'nin Cavnpur'u alışı; madde yok.
- 1497-01-01 `delhi` → `bengal-sultanligi` (Patna, Gayâ) ve 1538-01-01 `bengal` → `sur` (9 yer).
- 1504-10-01 Kâbil/Gazne/Peşâver → `babur` (bkz. A4).
- 1532-01-01 `vijayanagara` → `nayak-devletleri` (Tancûr): madde yok.
- 1573-02-26 Gucerât (7 yer), 1574-08-03 Patna/Gayâ (madde yok), 1600-08-28 Ahmednagar, 1633-06-28
  Devletâbâd, 1657-03-29 Bîdar, 1689-11-03 Raygad, 1698-01-08 Cinci: Bâbürlü fetihleri;
  zincir dosyalarında madde yok (öteki dosyalarda olabilir).
- 1752-04-01 `babur` → `afgan-durrani` (Lahor, Multan… 7 yer), 1752 Keşmir; 1765-04-16 Sihler
  Lahor'u aldı (6 yer); 1818-06-02 Multan; 1819-07-05 Srinagar; 1834-05-06 Peşâver.
- 1801-11-10 Avad'ın toprak terki (5 yer), 1803 İkinci Anglo-Maratha seferi (Delhi 09-11,
  Agra 10-17, Kattak 10-14, Aligarh 09-04, Ahmednagar 08-12), 1817-11-17 Pûne, 1818-01-01
  Maratha toprakları (7 yer): kronoloji_hindistan.js'in 1799-1923 dilimi "bir sonraki tur"
  diye bırakılmış (dosya başlığı) — bu dilim büyük ölçüde **eksik**.
- 1845-02-22 Tranquebar'ın satışı, 1885-11-28 Mandalay, 1937-04-01 Burma'nın ayrılışı (27 yer).

### B4. Eksik devlet / eksik madde

- **EKSİK-DEVLET:** Sih Misilleri (1748/1765-1799); Rohilkhand (Rohilla, 1721-1774);
  Orissa Afgan kalıntısı (1576-1592); Bâbür'ün Kâbil beyliği (1504-1526) — ayrı künye ya da
  `timurlu` ile; Hollanda Hindistanı'nın (Koçin 1663-1795, Nagapatnam 1658-1781) Güney Asya
  künyesi var mı ölçülmedi (`hollanda` metropol anahtarıyla boyanıyor).
- **EKSİK-MADDE:** Bangladeş 26 Mart 1971; Pondişeri de jure 16 Ağustos 1962; Dadra–Nagar Haveli
  1954 (nokta da yok); 1962 Çin-Hint Savaşı'nın toprak sonucu (Aksai Çin) — haritada nokta yok;
  1965 ve 1999 (Kargil) savaşları sınır değiştirmediği için yalnız siyasi madde (1965 Taşkent
  var). `kronoloji_hindistan.js` 1799-1923 dilimi eksik (dosya başlığında beyanlı).
- **Hindistan Cumhuriyeti** künyesi `harita:` alanı yok (`h=None`) — `hindistan-cumhuriyeti`
  id'si BOYALAR'da var mı **ölçülmedi** (renkler.py'ye dokunulmadı); aynı soru `pakistan`,
  `banglades`, `sri-lanka`, `sikkim-krallik`, `cammu-kesmir`, `haydarabad-nizam`,
  `bengal-sultanligi` için (`harita:` boş). Yerleşimler bu id'leri kullandığına göre büyük
  olasılıkla tanımlılar; denetle.py ölçemedi.

### B5. Doğru bulunanlar (örnek, ölçüldü)

Delhi Sultanlığı hanedan geçişleri (Halacî 1290-06-13, Seyyid 1414-05-28, Lûdî 1451-04-19),
Panipat 1526-04-21 (künye + madde + yerleşim), Çavsa 1539-06-26 ve Kannauj 1540-05-17 (TDV
*sir-sah* ile **aynı gün**), Plassey 1757-06-23, Talikota 1565-01-05, Sarangpur 1561-03-29,
Evrengzîb'in ölümü 1707-03-03 (Gregoryen ✓), EIC fermanı 1601-01-10 (= 31 Aralık 1600 E.U. ✓
doğru çevrilmiş), Bassein 1802-12-31, Pûne 1817-11-17, Rançit Singh 1801-04-12, Pencap ilhakı
1849-03-29, Amritsar Antlaşması 1846-03-16, Haydarabad 1724-10-11 ve 1948-09-17, Goa
1961-12-19, Çandernagor 1950-05-02, Pondişeri 1954-11-01, Sikkim 1975-05-16, Kalat 1948-03-27,
Swat 1969-07-28, Bahavelpur 1955-10-14.

---

## C. Sayılar

- **Künye:** 171 Güney Asya künyesi, 99'u 1281 sonrası yaşıyor; 25 çekirdek künye ayrıntılı denetlendi.
- **Madde:** 1.177 kronoloji maddesi zincire bağlı (bütün `kronoloji*`/`olaylar*` + künye içi);
  397'si çekirdek 20 künyede, hepsi tarih/olay bakımından okundu. 6 kronoloji dosyası araç
  tarafından ayrıştırılamadı (balkan, italya_sehir, rusya, 2s_0920, ek17, sk105) — Güney Asya dışı.
- **Yerleşim:** 261 yerleşim zincirde, 1.352 kırılma; 61 künye-ömrü-aşımı satırı (çoğu Portekiz
  metropolü dışı), 1940-2000 arası 150+ kırılma okundu.
- **Bulgu:** 35 numaralı bulgu + 5 ana bulgu (A1-A5, B'dekilerle örtüşür) + B3 sessiz-değişim
  aday listesi (≈ 30 grup) + B4 eksikler.
- **TDV:** 5 madde okundu (behmeniler, bengal, gucerat, kesmir, sir-sah).

## D. Ölçülemeyenler

- `denetle.py` (bütün değişmezler; Değişmez 2'nin gerçek sonucu, Değişmez 8) — UMIT hafif kip yasağı.
- Üretilmiş harita (petek sınırları, Keşmir'in fiilen hangi renge boyandığı) — `coz-c` MemoryError.
- Hindistan/Pakistan/Bangladeş'in kendi akademik kaynakları (ICHR, Indian Historical Review,
  İrfan Habib *Atlas*, Pakistan Historical Society, Banglapedia/Asiatic Society of Bangladesh):
  bu oturumda web'den **okunmadı**; "teyit bekler" işaretli maddeler bunlarla kapanmalı.
- B2 #33-35 ve B1 #10 (Şivâcî taç giyme takvimi) gün teyidi.
- `harita:` boş künyelerin BOYALAR karşılığı.

## E. İstediklerim (öneri)

1. Keşmir/Aksai Çin için A1'deki üç seçenekten birini Emre seçsin; seçilene göre Muzaffarabad,
   Gilgit, Skardu, Aksai Çin (ve Tawang) noktaları açılsın — tek bir veri oturumu.
2. A2-A5 ve B1 #9, #12, #17, #19 düzeltmeleri KASA'da tek oturumda (hepsi `devletler.js` +
   `yerlesimler_asya.js` + `yerlesimler_hindistan.js` + `kronoloji_hindistan.js`), ardından
   `denetle.py` ile B3 adaylarının gerçek Değişmez 2 sonucu ölçülsün.
3. `kronoloji_hindistan.js` 1799-1923 diliminin (dosya başlığında "bir sonraki tur") yazılması.
