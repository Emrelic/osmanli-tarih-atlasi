# ENKLAV-TARAMA-1013 — dünya enklav/eksklav taraması (Emre-kutu 0080 / H-0019)

Salt okuma. Ağaç: worktree `agent-aee2c04c166336d6d` @ `1daef2a98`, makine: bu oturumun makinesi.
Ham aday listesi: `denetim/ENKLAV-TARAMA-1013.json` (1,37 MB, 1.774 tekil aday). Betikler repoda yok
(scratchpad `enklav/`: `tara.py`, `analiz*.py`, `d7.py`).

## 0. Üç cümle

1. 17 test gününde, 250 km bağ eşiğiyle **5.452 (gün, aday)** = **1.774 tekil** kopuk bileşen çıktı; bunların
   **1.028'i >800 km (denizaşırı/uzak; enklav değil, koloni/uzak kalıntı)**, 422'si koridorda hiç nokta olmayan
   (noktasızlık), 302'si koridorda başka sahibin noktası olan **ve kaynaksız** (asıl inceleme kovası),
   22'si meşru (beyanlı ya da kaynaklı).
2. Sayı eşiğe çok duyarlı (150 km: 14.161 · 250 km: 5.452 · 400 km: 1.622 gün-aday): veri seyrek olduğu için
   "bağlantısızlık"ın büyük kısmı **noktasızlık** (Değişmez 7'nin 150 km'lik bağının görmediği ya da fazla gördüğü yer).
3. Mevcut D7 kovası bu ağaçta **725 değil 800** (veri büyüdü); ikisi farklı evren: D7 *kırılma olayı* başına ada
   sorar (150 km, 5 muafiyet), bu tarama *gün kesiti* başına bileşen sorar (250 km, muafiyet yok).

## 1. Yöntem

- **Girdi:** `girdi.yukle()` — `arac/girdi_listesi.py GIRDI_DOSYALARI`nin hepsi (4.303 yerleşim; ölçüldü).
  Yalnız okundu, `uret_petek` içe alınmadı.
- **Sahip (gün g):** `s:` → `d:` kimliği (D7'nin aile eşlemesiyle: avusturya = macaristan-habsburg = HABSBURG);
  `d:` ve `v:` → "OSMANLI" ailesi (D7 ile aynı kural); `__BOSLUK__` ve dönemsiz = sahipsiz; `kur:` > g ya da
  `bit:` <= g olan nokta o gün yok sayıldı. `isg:` yalnız işaret (hukukî sahip esas alındı).
- **Günler (17):** 1281-01-02 · 1350-06-15 · 1400-06-15 · 1453-05-29 · 1500-06-15 · 1526-09-01 · 1600-06-15 ·
  1683-09-12 · 1700-06-15 · 1774-07-21 · 1800-06-15 · 1850-06-15 · 1878-07-13 · 1900-06-15 · 1914-07-28 ·
  1918-11-11 · 1923-10-28. (1281-01-01 ufuk damgası olduğu için 01-02 alındı.)
- **Grafik:** her devlet için yerleşimler arası büyük daire mesafesi <= R ise bağ (tek bağlantı bileşenleri,
  scipy). R = 250 km ana ölçüt; 150 ve 400 duyarlılık için. En çok noktalı bileşen "ana gövde"; ötekiler aday.
  Yalnız >= 2 noktalı devletler (tek noktalı devlet kopuk sayılmaz).
- **Koridor** (KORIDOR-0081 ① tanımı): aday bileşenin gövdeye en yakın çifti (P, B), mesafe d; o gün
  d(q,P) < d ve d(q,B) < d olan, aday devletin olmayan her q. Sahipli/sahipsiz ayrı sayıldı.
- **Sınıf:** `u` en yakın aynı-devlet yerleşim > 800 km (D7 "C-hakiki" eşiği) · `a` bileşen döneminde
  `enklav:true` var, ya da koridor dolu ve bütün dönemler `kaynak:` taşıyor · `b` koridorda hiç nokta yok
  (noktasızlık) · `c` koridor dolu, `enklav` yok, kaynak eksik (veri hatası şüphesi, kaynakla elenecek).
- **Kıta:** kaba enlem-boylam kutusu (Trakya, Kafkasya, Sina elle ayrıldı). Sınır vakalarında hatalı olabilir.
- **Referans:** `denetle.degismez7()` aynen koşturuldu (salt okuma): 800 ihlal.

## 2. Sayılar

### 2.1 Gün başına aday (R = 250 km; sütun: a, b, c, u)

| gün | a | b | c | u |
|---|---|---|---|---|
| 1281-01-02 | 4 | 54 | 36 | 69 |
| 1350-06-15 | 1 | 57 | 42 | 69 |
| 1400-06-15 | 1 | 53 | 50 | 62 |
| 1453-05-29 | 3 | 53 | 54 | 62 |
| 1500-06-15 | 4 | 58 | 51 | 62 |
| 1526-09-01 | 3 | 57 | 58 | 82 |
| 1600-06-15 | 1 | 58 | 66 | 123 |
| 1683-09-12 | 2 | 71 | 61 | 201 |
| 1700-06-15 | 1 | 76 | 61 | 214 |
| 1774-07-21 | 1 | 77 | 76 | 232 |
| 1800-06-15 | 1 | 80 | 68 | 247 |
| 1850-06-15 | 4 | 89 | 84 | 259 |
| 1878-07-13 | 9 | 101 | 60 | 255 |
| 1900-06-15 | 7 | 90 | 49 | 320 |
| 1914-07-28 | 5 | 113 | 47 | 289 |
| 1918-11-11 | 4 | 118 | 51 | 282 |
| 1923-10-28 | 4 | 125 | 50 | 275 |

Toplam gün-aday 5.452. Duyarlılık (toplam gün-aday): R=150: 14.161 · R=250: 5.452 · R=400: 1.622.
(Gün başına 1281'de 163, 1923'te 454: denizaşırı imparatorluklar `u`yu şişiriyor.)

### 2.2 Tekil aday, kıta x sınıf (R = 250 km; 1.774)

| kıta | a meşru | b noktasızlık | c veri şüphesi | u uzak | toplam |
|---|---|---|---|---|---|
| Avrupa | 6 | 9 | 46 | 27 | 88 |
| Asya | 5 | 209 | 153 | 354 | 721 |
| Afrika | 6 | 48 | 36 | 177 | 267 |
| Amerika | 4 | 135 | 66 | 376 | 581 |
| Okyanusya | 1 | 21 | 1 | 94 | 117 |
| **toplam** | **22** | **422** | **302** | **1.028** | **1.774** |

`c` içinde 169 tek nokta, 133 grup (2-32 nokta); 24'ünde koridorda sahipsiz nokta da var (S1 sınıfı).
Mesafe kovası (c): 61 aday <= 300 km (A), 241 aday 300-800 km (B).

### 2.3 "725'lik kova" — canlı D7 kovası bu ağaçta 800

D7 (`degismez7`, olay başına, 150 km bağ, 5 muafiyet) ihlal: **800** (muafiyet: beyan 77, coğrafi tecrit 4.705,
ada-fethi 11, küçük devlet 371, geçici cephe 83). Kova x kıta:

| kıta | A-koridor (<=300) | B-bilinmiyor (300-800) | C-hakiki (>800) | toplam |
|---|---|---|---|---|
| Avrupa | 163 | 24 | 4 | 191 |
| Asya | 280 | 116 | 4 | 400 |
| Afrika | 82 | 23 | 2 | 107 |
| Amerika | 56 | 38 | 0 | 94 |
| Okyanusya | 6 | 0 | 2 | 8 |
| **toplam** | **587** | **201** | **12** | **800** |

Dönem dağılımı (D7 olay günü): 1000'ler 1, 1100'ler 4, 1200'ler 56, 1300'ler 77, 1400'ler 66, 1500'ler 170,
1600'ler 79, 1700'ler 92, 1800'ler 183, 1900'ler 72. En çok: OSMANLI 61, ingiltere 49, rusya 47,
fransa-cumhuriyet 28, ispanya 23, portekiz 22.

**Çapraz:** 800 D7 kaydının 459'unun yerleşimi benim 1.774 adayımın bir noktasıdır; **341'i eşleşmedi**
(D7 olay günü benim 17 günümde değil ya da 150 km'de kopuk, 250 km'de bağlı). Eşleşenler: yalnız c 63 ·
yalnız b 52 · yalnız u 159 · karışık (birden çok gün/sınıf) 185 · a içerenler 24. Yani "725 (şimdi 800)"
kovasının yarısından fazlası bu taramanın da gördüğü, kalanı yalnız D7'nin gördüğü küme.
**D7'yi sınıfa çevirme tahmini** (eşleşen 459 üzerinden, eşleşmeyen için tahmin yok): a ≈ %5, b/noktasızlık
≈ %40, c/kaynaksız şüphe ≈ %35, u ≈ %45 (örtüşüyor, toplam %100'ü aşar). Bu bir tahmindir; D7 evreninde
a/b/c ayrımı olay başına ayrıca ölçülmeli.

## 3. Meşru (a) — 22 tekil

Beyanlı (`enklav:true`): Ceuta (Sebte) portekiz, Safi portekiz, Agadir-Azemmûr-Mazagan portekiz, Bicâye ispanya,
Ahmednagar-Ahmedâbâd-Bombay ingiliz-hindistani, Alor-Atapupu-Ende hollanda-dogu-hint. Kaynaklı koridorlu:
Diyarbakır selcuklu, Malta sicilya-kralligi, Kalyari piza, Lashio-Namkham san-devletleri (17 gün), Hacıbey (Odessa)
litvanya, Andican-Hokand-Hucend timurlu, Taşkent mogulistan, Szatmár HABSBURG, Vardø isvec, Sokoto sokoto,
Fort Reliance/Dease Lake/Bella Bella/Yuquot kanada, Abomey fransa, Alta-Tromsø norvec.
Not: Cebelitarık, Kaliningrad tarzı örnekler taranan 17 günde bu kovada çıkmadı (ya `isg`/komşuyla bağlı ya da
kaynak alanı eksik) — **ölçülmedi**, aşağıda.

## 4. İlk 40 öncelikli aday (sınıf c; sıra = koridordaki yabancı nokta sayısı + gün sayısı + yakınlık)

Sütunlar: devlet | aday noktalar | gün sayısı (ilk-son) | en yakın aynı-devlet yerleşim (km) | koridor: nk (baskın sahip) |
**ön not** (kaynak doğrulaması yok; yalnız ayıklama ipucu).

| # | devlet | noktalar | gün | ana (km) | koridor | ön not |
|---|---|---|---|---|---|---|
| 1 | racput | Bhuc (Kutch) | 12 (1526-1923) | Udeypûr 437 | 7 babur | Kutch Racput olabilir; kaynak/beyan |
| 2 | kri | Sandy Lake | 12 | Pukatawagan 596 | 7 ing-kuzey-amerika | seyrek Amerikan yerli; noktasızlık ağırlıklı |
| 3 | nama-orlam | Varmbad (Warmbad) | 14 | Rehoboth 594 | 5 almanya | Warmbad Orlam toprağı; Almanya ile çakışma sorgulanır |
| 4 | sosoni | Ruby Vadisi | 12 | Tukudeka 647 | 6 abd | seyrek |
| 5 | kanem-tubu | Ati | 14 | Faya-Largeau 529 | 4 vaday | Sahra, seyrek |
| 6 | arakan | Sandoway | 10 | Mrauk U 264 | 3 pagan | **A kovası**; Arakan güney kıyısı - koridor Pagan; kaynak aranır |
| 7 | turkmen | Mangışlak | 7 | Kızılarvat 791 | 21 rusya, 3 sahipsiz | Hazar karşı kıyı; sahipsiz 3 var |
| 8 | kanem-bornu | Bilma | 14 | Zinder 686 | 6 tuareg-air | vaha, seyrek |
| 9 | san-devletleri | Kalaw, Loikaw | 14 | Kengtung 308 | 2 lan-na | A kovasına yakın |
| 10 | nama-orlam | Bethanie | 14 | Rehoboth 353 | 2 almanya | #3 ile aynı bölge |
| 11 | norvec-kralligi | Alta, Tromsø | 6 (1281-1526) | Östersund 735 | 9 isvec-birlik-öncesi | **Avrupa**; Finnmark - isvec ile kopuk görünür; Danimarka-Norveç varyantı (#15) |
| 12 | inuit | Kangiva | 13 | Kangirsuk 468 | 2 ing-kuzey-amerika | seyrek |
| 13 | ojibwe | Saginaw | 11 | Keweenaw 440 | 3 fransa | seyrek |
| 14 | azerbaycan-dc | Bakü | 1 (1918-11-11) | Gence 298 | 12 sovyet-rusya | **şüpheli**: 1918-11'de Bakü/Gence ilişkisi ve koridor Sovyet-Rusya; tarih/sahip kontrol |
| 15 | ingiliz-hindistani | Masulipatnam, Râcahmundry, Vişâkapatnam | 8 | Kalküta 764 | 6 maratha | Kuzey Sirkar bölgesi; kaynak aranır |
| 16 | danimarka | Alta, Tromsø | 5 (1600-1800) | Trondheim 788 | 10 isvec | Danimarka-Norveç; Finnmark sahibi kontrol |
| 17 | dene | Batzulnetas, Nabesna | 12 | Telida 484 | 2 rusya | seyrek |
| 18 | dene | Iliamna/Nondalton | 12 | Nikolai 339 | 2 rusya | seyrek |
| 19 | papalik | Avignon | 9 (1350-1774) | Bolonya 524 | 38 (almanya %21) | **meşru olabilir** (Papalık Avignon/Venaissin eksklavı); `enklav:true` + kaynak yazılabilir |
| 20 | ingiliz-sudani | Darfur | 2 (1918-23) | Ğubeyş 396 | 10 ingiltere | Darfur 1916'da eklendi; tarih/sahip kontrol |
| 21 | afganistan | Kandehar | 6 | Feyzâbâd 758 | 6 ing-hindistani | büyük olasılıkla `Herat/Kâbil` noktası eksik; noktasızlık |
| 22 | ingiltere | Bayonne, Bordo | 3 (1281-1400) | Plymouth 671 | 22 fransa | **meşru olabilir** (Gaskonya İngiliz); `enklav:true` + kaynak |
| 23 | dene | Tetlit Gwich'in | 13 | Nuchalawoya 791 | 4 inuit | seyrek |
| 24 | italya | Libya noktaları (32) | 3 (1914-23) | Pantelerya 429 | 20 OSMANLI/Akdeniz | Libya kıyısı İtalyan; 1914-1923 arası iç-saha OSMANLI/Senusi durumu; kaynak/dönem sorgulanır |
| 25 | somali | Kısmâyû | 3 | Ceel Dheere 694 | 18 italya | Kismayo 1925 öncesi İngiliz; devlet etiketi kontrol |
| 26 | somali | Ceel Vaak | 3 | Ceel Buur 642 | 21 italya, 1 sahipsiz | |
| 27 | kanem-tubu | Nguigmi | 14 | Faya-Largeau 759 | 3 kanem-bornu | |
| 28 | ilhanli | Burûcird, Luristan, Nihâvend | 1 (1350) | Gōrabī 462 | 25 celayirli | 1350: Celayirli/Ilhanli sınırı; kaynak |
| 29 | meksika | Sonoyta | 5 (1878-1923) | El Paso del Norte 601 | 6 abd | **veri hatası şüphesi**: Sonoyta Sonora'da, Meksika; koridorda ABD noktaları ise sınır boyu, ana gövde yok |
| 30 | delhi-sultanligi | Gayâ, Patna | 2 (1400-1453) | Etâve 625 | 9 cavnpur | Cavnpur ile devir tarihi kontrol |
| 31 | venedik | Baf, Girne, Lefkoşa, Limasol | 2 (1500-1526) | Karpatos 481 | 22 OSMANLI | **meşru** (Kıbrıs, Venedik); `enklav:true` + kaynak |
| 32 | venedik | Butrint, Kefalonya, Korfu, Paksos | 2 | Kotor 315 | 30 OSMANLI | **meşru** (İyon adaları, Venedik) |
| 33 | maratha | Nagpûr | 2 (1774-1850) | Ahmednagar 507 | 10 haydarabad-nizam | Bhonsle Nagpur: Maratha konfederasyonu bağı; kaynak |
| 34 | fransa-cumhuriyet | Abomey, Notse | 2 (1918-23) | Buna 527 | 9 ingiltere | Dahomey/Togo: Fransa kolonileri; Togo bölünmüş; kaynak/dönem |
| 35 | jukun-kvararafa | Lokoca | 13 | Vukari 335 | 2 birom-plato | |
| 36 | kazak-hanligi | Karkaralinsk | 7 | Taraz 790 | 4 mogulistan | |
| 37 | arjantin | Beyan G54.5, Ushuaia | 4 (1900-23) | Puerto Deseado 760 | 6 sili | Ateş Ülkesi; Arjantin/Şili paylaşımı; `Beyan G54.5` kuşkulu ad (dolgu mu?) |
| 38 | ilhanli | Bender Enzeli, Bârfurûş, Eşref, Lâhîcan | 1 (1350) | Gōrabī 424 | 27 celayirli | Hazar kıyısı Ilhanlı; kaynak |
| 39 | venedik | Bergamo, Brakya, Brescia, Cres + 17 | 1 (1526) | Butrint 315 | 30 OSMANLI | **meşru** (Terraferma + Dalmaçya; Venedik gövdesi 250 km altında bağlanmıyor) |
| 40 | almanya | Ptuj (Pettau) | 1 (1526) | Třeboň 299 | 17 macaristan | **şüpheli**: Ptuj Habsburg (Steiermark); "almanya" etiketi vs HABSBURG ailesi; D7 aile eşlemesine girmeyen kimlik |

Not: sıra bir önem hükmü değildir; ölçüm sırasıdır. Ön notlar bu oturumun çıkarımıdır, TDV/akademik kaynakla
doğrulanmadı (Atlas referans değildir).

## 5. Ölçemediklerim (ölçülemedi != yok)

1. **Deniz/kara:** koridorun denizden mi karadan mı geçtiği ölçülmedi (kara maskesi/`veri-kaynak` kullanılmadı).
   Ceuta/Cebelitarık/Kaliningrad tarzı gerçek eksklavlar ile adalar aynı kovaya düşer; `u` kovasının >800 km
   eşiği bu yüzden editoryal.
2. **Kaynak içeriği:** yalnız `kaynak:` alanının VARLIĞI sayıldı ("veri-içi" kabuğu elendi); içeriğin
   kaynak kuralına uygunluğu (TDV, akademik) okunmadı. `a`/`c` ayrımı bu kabaca eşiğe bağlı.
3. **Gün örneklemi:** 17 gün; kırılma günleri (ör. 1683-09-12 dışı) seçilmedi. D7 olaylarının 341'i bu
   günlerin dışında. Tam bir "her kırılma günü" taraması D7'nin olay ekseninde yapıldı.
4. **Aile eşlemesi:** yalnız D7'nin iki eşlemesi (Habsburg, Osmanlı+tâbi). Sovyet-Rusya/Rusya, Ingiltere/ingiliz-hindistani,
   Fransa/fransa-cumhuriyet, Sili/Arjantin ardıl/akraba kimlikleri AYRI sayıldı; aile eşlemesi eklenirse `u` ve
   `c` içinden bir kısım düşer. Bu oran **ölçülmedi**.
5. **Ana gövde seçimi:** en çok noktalı bileşen. Bölünmüş iki eşit gövdeli devletlerde (ör. Mogol, İlhanlı)
   "aday" tarafı keyfidir.
6. **Kıta kutuları** kaba; Kafkasya, Trakya, Kıbrıs, Sina sınır vakalarında ±birkaç aday.
7. **Tâbi (v:)** Osmanlı ailesine katıldı; öteki devletlerin tâbi/himaye ilişkisi (`devletler.js tabi:`)
   bu taramada hesaba katılmadı.
8. **725 kovasının kendisi:** `denetim/PAKET-0080-BOLUSUM.md` bu ağaçta YOK, H-0019 metnini okuyamadım;
   ölçütü `denetim/KORIDOR-0081.md ①/⑥/⑧` ve `arac/denetle.py degismez7`den aldım. 725 -> 800 farkı bu ağacın
   verisidir (en son bilinen 725, 28 Eylül ölçümü).
9. **Harita çıktısı:** motor koşulmadı; petek/boyama sonucu değil, girdi verisi ölçüldü (ağaçta üretilmiş
   dosya yok). Girdide kopuk görünen bileşen haritada da kopuk olur diye varsayıldı (koridor noktası var ise).

## 6. Önerilen sonraki adım

1. `c` kovasını (302) önce **kaynaklı olabilecek meşru eksklavlardan** ayıkla: Avignon, Bayonne/Bordo, Kıbrıs,
   İyon adaları, Terraferma, Libya, Kutch gibi ~10-15 aday tek oturumda `enklav:true` + kaynakla kapanır
   (beyan D7'de de muafiyet "beyan" olarak sayılır, 77 kayıt zaten böyle).
2. Şüpheli kimlikler (Ptuj almanya/HABSBURG, Bakü 1918, Darfur, Kismayo, Sonoyta, Beyan G54.5) tek tek dönem kaynağıyla
   sorgulanır — bu "uzak kayıt sorgulanır" (⑤) sınıfıdır.
3. `b` (422) ve `u` (1.028) için işlem yok: noktasızlık (yerleşim yoğunluğu işi, Oturum 0 kolu) ve denizaşırı
   koloniler. Eşik editoryal kalmalı; D7'nin bağını 250 km'ye çekmek ya da RNG/Delaunay'a geçmek ayrı karardır.
4. Tam kapsam için: kara maskesi ile (deniz/kara) ve her kırılma gününde bu taramayı yinelemek (tahmini 30 dk
   hesap); sonuç D7 olay kovasıyla birleştirilir.
