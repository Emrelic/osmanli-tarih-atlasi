# YERLESIMLER-JS KUYRUK + HAZIR PARÇALAR — Almanya ikinci dalga (UMIT, 15 Kasım 2026)

Bu belge iki şey taşır: **(I)** `data/yerlesimler.js`te yaşadığı için YAZILAMAYAN pencereler (KASA/yazıcı makine uygular),
**(II)** yeni künyelerin yerleşim pencereleri; bunlar `arac/renkler.py` BOYALAR'da kimlik olmadığı için
**bilerek data/'ya yazılmadı** (kimliği BOYALAR'da olmayan dönem bölgeyi BOYANMAZ yapar — `renkler.py` baş açıklaması; delik açar).
Her satırdaki kaynak bu oturumda okunmuştur; okunamayan "okunmadı" diye yazılıdır.

## I. yerlesimler.js'e düşen pencereler

| Yerleşim (yerlesimler.js) | Künye | Önerilen pencere | Kaynak (okundu) | Açık nokta |
|---|---|---|---|---|
| **Hamburg** | `hamburg-sehri` | `1281-01-01 → 1510-01-01 almanya` (eski), `1510-01-01 → 1937-04-01 hamburg-sehri` (yıl/gün) , `1937-04-01 → 1945-06-05 almanya` | EB1911 'Hamburg (city)' (en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Hamburg_(city)): «Hamburg was made a free imperial city by the emperor Maximilian I.»; «Denmark, however, only finally renounced her claims by the treaty of Gottorp in 1768.» · Geschichtsbuch Hamburg «Das Groß-Hamburg-Gesetz 1937/38»: «am 26. Januar 1937 erlassen … ab dem 1. April 1937 wirkte» | f=1510 yılı EB1911'de adlandırılmıyor (yalnız 'Maximilian I'), 1510 künye kaynağındaki Reichsmatrikel — OKUNMADI; çelişki: 1510 ↔ 1768 Gottorp (künye ozet bunu beyan ediyor) → yazan oturum 1768'i mi 1510'u mu seçeceğini hakemli karara bağlamalı. Fransız ilhakı (1810) EB1911'de yok, EB1911 yalnız Jena sonrası işgali anıyor — OKUNMADI. Madde: 1937-04-01 (`olaylar_alm_1115b.js`te Lübeck'e bağlı madde yazıldı, Hamburg'u anan ikinci madde gerekir: yer_id "Hamburg") |
| **Frankfurt** | `frankfurt-serbest-sehri` | `1815-07-09 → 1866-10-08` (künye f/t) | künye kaynağı: Larousse «Confédération germanique» (Vienne 9 juin 1815, 4 villes libres) — bu oturumda okunmadı; EB1911 'Frankfort-on-the-Main' 404 verdi | **bulunamadı** (kaynak okunamadı) — pencere uydurulmadı |
| **Köln** (+ **Bonn**, yerleşim `yerlesimler_once1281_yt_avrupa.js`) | `koeln-elektorlugu` (yeni künye, bu dalda yazıldı) | Bonn `1356-01-01 → 1801-01-01` | EB1911 'Cologne': «in 1262 the archiepiscopal see was transferred to Brühl, and in 1273 to Bonn»; «The last archbishop-elector, Maximilian of Austria, died in 1801» | Bonn kaydı `bit:"1281-01-01"` ile bitmiş (yalnız Roma/boşluk pencereleri); 1356-1801 arası yeniden açmak kayıt kurulumu (`bit` kaldırma + ara dilimlerin sahibi) ister; Köln şehri (özgür imparatorluk şehri) bu künyenin parçası değil |
| **Brno + Olomouc** | `moravya-markgraflik` | `1182?-1918-10-28` | künye: Barbarossa Regensburg 1182-09-29 (künye maddesi), 1197 Bohemya vasalı, 1348-04-07 IV. Karl fermanı (kaynakları bu oturumda okunmadı) | **bulunamadı/yazılmadı:** Brno ve Olomouc `yerlesimler.js`te; ikisi şu an `bohemya`/`avusturya`; yeni Moravya sahibi ancak üç noktayla (Brno, Olomouc, Znaim) tutarlı yazılır, birini tek başına boyamak komşu Bohemya renginde lekeleşme yaratır |

## II. Yeni künyeler için HAZIR pencereler (renkler.py'ye BOYALAR anahtarı eklendikten SONRA uygula)

`d:` alanı aşağıda önerilen BOYALAR anahtarı olacak; anahtar `denetim/RENK-ONERI-1115-almanyab.md`te. Anahtar eklenmeden uygulanırsa bölge BOYANMAZ (delik).

1. **Nürnberg** (`yerlesimler_avrupa.js`, mevcut kayıt; ilk dilim `1050-01-01 → 1281-01-01 almanya`, ikinci `1281-01-01 → 1945-06-05 almanya`)
   - `1050-01-01 → 1219-01-01 almanya` · `1219-01-01 → 1806-01-01 nurnberg-imparatorluk-sehri` (Treccani 'Norimberga': «Città libera dell'Impero dal 1219»; «nel 1806 fu annessa alla Baviera») · `1806-01-01 → 1945-06-05` sahibi: Bavyera Krallığı (`bavyera`, künye f/t önce kontrol) — **1806 sonrası sahip kaynakla yazılmadı**; bu sebeple şimdilik `almanya` bırakmak yazan oturumun kararıdır.
   - Kırılma maddeleri: 1219-01-01 ve 1806-01-01, yer_id "Nürnberg" (künye kronolojisinde HAZIR; `olaylar*.js`e taşınmaları gerekir).
2. **Augsburg** (`yerlesimler_avrupa.js`; `0962-02-02 → 1281-01-01 almanya` + `1281-01-01 → 1945-06-05 almanya`)
   - `0962-02-02 → 1276-01-01 almanya` · `1276-01-01 → 1806-01-01 augsburg-imparatorluk-sehri` (Treccani 'Augusta': «Nel 1276 divenne libera città imperiale»; «In seguito alla pace di Presburgo fu unita alla Baviera (1806)») · 1806 sonrası bavyera (aynı çekince).
3. **Mainz** (`yerlesimler_avrupa.js`; `1281-01-01 → 1945-06-05 almanya`)
   - `1281-01-01 → 1356-01-01 almanya` · `1356-01-01 → 1792-01-01 mainz-elektorlugu` (EB1911 'Mainz': başpiskopos seçmenler kurulu başkanı; 1792 Fransızlara kapılar açıldı; Campo Formio 1797; Lunéville 1801; sekülerleşme 1803; 'Cologne': Altın Bula = seçmenler arasına yazılma) · `1792-01-01 → …` **Fransız dönemi (1792-1814) kaynakla yazılmadı** (EB1911 yalnız 'taken and retaken several times'; Mainz Cumhuriyeti 18 Mart 1793 ve 1814 dönüşü okunmadı).
4. **Trier** (`yerlesimler_avrupa.js`; `1281-01-01 → 1801-02-09 almanya`)
   - **bulunamadı:** Trier başpiskoposluğunun seçmenlik tarihleri EB1911 'Treves' 404, Treccani 'Treviri' (yalnız 898 kont hakları, 1580 Pfalz seçmenine boyun eğiş, 1798 Sarre departmanı, 1815 Prusya) verdi — künye f/t okunmadı, yazılmadı.
5. **Karintiya, Kassel, Schwerin, Stettin, Lübeck, Bremen, Bern**: BU DALDA data/'ya YAZILDI (bkz. BOLGE-almanyab-A-yerlesimsiz-1115.md).

## III. Kapsam dışı notlar
- **Hanse Birliği (`hanse-birligi`)**: toprak sahibi değil, şehirler ittifakı; her Hanse şehri kendi künyesinin (Lübeck, Hamburg, Bremen) sahipliğindedir. Birlik adına yerleşim penceresi yazmak aynı toprağı iki sahibe vermek olur (Değişmez 1/3) ⇒ yazılmadı; öneri: künye `tur` alanı + `harita:` yokluğu "toprak bölgesi olmayan birlik" diye beyan edilsin (KASA kararı).
- **Lihtenştayn (`lihtenstayn` ↔ `liechtenstein`)**: iki künye aynı polity; Vaduz `liechtenstein` sahipli. KASA kararı "SİLİNMEZ, koşu 39 öncesi birleştirilir" — bu dalda dokunulmadı.
- **Orta Macar Krallığı**: yerleşimsiz değil; Kassa/Eperjes/Fülek/Ungvár/Munkács kayıtlarında `v:` (tâbi) penceresi var (1682-09-16 → 1685-10-15; Munkács 1688-01-17'ye dek). Birinci dalga sayımı yalnız `s:` sahiplerine bakıyordu.
- **Nordmark (`nordmark`)**: NDB 'Albrecht der Bär' (okundu) «mit der Nordmark (Altmark) belehnen» (1134) ve Brandenburg'u «11. Juli 1157 erstürmt» diyor; **Salzwedel/Stendal NDB'de adlandırılmıyor**, 965 başlangıcı hiçbir okunan kaynakta yok ⇒ pencere yazılmadı. Not: `Brandenburg an der Havel` kaydında `1157-06-11` başlangıcı var, NDB/ADB günü **11 Temmuz 1157** veriyor ⇒ **bir ay çelişki, düzeltme adayı** (yerlesimler_once1281_yt_avrupa.js; kaynağı okunmadan değiştirilmedi).
