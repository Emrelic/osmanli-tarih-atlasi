# BOLGE italya — Adım 4: yerleşim kronolojisi (15 Kasım 2026)

## 1. Ölçüm
Tüm girdi dosyaları (`arac/girdi_listesi.py`, 126 dosya) vm ile yüklendi: **5636 yerleşim** (benim yükleyicimin okuyabildiği; `const` ile tanımlı dosya olursa eksik kalır — ölçülmedi). İtalya sınır kutusu (lat 36.4-47.2, lon 6.5-18.7; Balkan/Tunus kıyıları da düşer) içinde **263 yerleşim**; bunlardan 1000-1550 arasında `s:` penceresinde en az bir `__BOSLUK__` taşıyan İtalya anakara/ada yerleşimi **ölçüm listesinde 61 pencere** (Roma-öncesi/Kuzey Afrika kopyaları dahil).

Ortaçağ (1000-1550) İtalya içi `__BOSLUK__` pencereleri (yaklaşık 40) ve atlas sahip adayı künyesi:

| Yerleşim | Boşluk | Pencerede olmayan ama künyesi bulunan sahip | Durum |
|---|---|---|---|
| Verona | 1164-01-01..1277-01-01 | verona-komunu 1136..1259 (Treccani EI «Verona»), ezzelino-signoria 1236-11-01..1259-10-01, della-torre/della-scala | **Çelişki:** künyeler kaynaklı, pencere "arandı bulunamadı" diyor. Düzeltme adaylı → kuyruk |
| Padova | 1318-07-25..1345-01-01 | padova-carrara 1318-01-01..1405-11-22 | Padova penceresi künye `carrara` (1345) kullanıyor, ikiz `padova-carrara` 1318'den başlıyor; beyan: Jacopo I da Carrara fiilî hâkimiyeti (BEYAN, AVRUPA-SINIR-0077) |
| Capua | 0535-01-01..1281-01-01 (tek dilim) | capua-prensligi 0900..1135 (EI 1930 «Capua») | **Düzeltme adaylı** (Capua prensliği başkenti): 0900→1135 `capua-prensligi`, sonrası Normandiya/Sicilya devletine → kuyruk |
| Aquileia | 0553..1281 | aquileia-patrikligi 1077-04-03..1420 | Düzeltme adaylı: 1077-04-03→1281 → kuyruk |
| Torino | 1000..1136, 1159..1270, 1276..1280 | torino-markizligi 0940..1091-12-19 | Pencere beyanı kaynaklı; 1000-1091 `torino-markizligi` yazılabilir (yer adı kaynakla teyit edilmeli) → kuyruk |
| Pavia | 0962-02-02 → (pencere yok) | pavia-komunu 1100..1359 | Pavia 962 sonrası pencere eksik (yalnız karolenj-italya var) → kuyruk |
| Cagliari | 0711..1281 | sardinya-aragon (1326..), arborea (Oristano) | Sardinya 1000-1281 yargıçlıkları (Cagliari/Arborea/Torres/Gallura) künyesiz; Cagliari boşluk beyanlı |
| Brescia/Bergamo/Parma/Piacenza/Modena/Perugia/Ancona/Ravenna/Bolonya/Rimini/Mantova | 1000-1281 arası değişik | komün künyeleri f'leri (1090-1141) boşluğun SONUNDA başlıyor | Boşluklar **beyanlı**; komün-öncesi dönem için piskopos/kont egemenliği künyesi yok (künye eksiği, adım 1) |
| Parma | 1281-1346; Piacenza 1281-1335 | — | "künyesiz" beyanlı; atlas yerleşim notu "komün / Scotti senyörlüğü ve kısa Visconti dönemleri — künyesiz" |
| Feltre/Belluno | 1281-1404 | — | beyanlı; Da Camino/Scaligeri/Carrara künyesiz |
| Torino 1276-1280, Palermo/Messina/Trapani/Siracusa/Catania 1282-03-30..08-30 | | | **Vespri** boşlukları, kaynaklı beyan: Palermo komün (Communitas Siciliae) 30 Mart 1282; Aragon 30 Ağustos 1282 |

## 2. Yerleşimi hiç olmayan künyeler
- Pencerede hiç geçmeyen ama yerleşimi var: **Taranto** (`taranto-prensligi` 1088..1465; pencerede `apulya-dukaligi`/`sicilya-kralligi`/`napoli`) — Taranto Prensliği Sicilya/Napoli vasalıdır; sahip = egemen devlet; künye pencerede kullanılmamaktır, hata değil (BEYAN gerekir).
- **Urbino**: atlasta yerleşim YOK (`ad:"Urbino"` hiçbir girdi dosyasında); urbino-dukaligi 1443-04-25..1631-04-28 yerleşimsiz. Madde `odak_yer:["Rimini","Roma"]` kullanıyor (yerine geçici odak). **Yeni yerleşim önerisi → kuyruk** (Urbino 43.7262 N, 12.6366 E; mükerrer taraması YAPILMADI (3 km taraması yazım oturumunda şart); ad taraması: şu adlı yerleşim atlasta yok — Pesaro, Cesena, Forlì, Imola, Faenza, Camerino, Arezzo, Treviso, Vicenza, Savona, Novara adlı yerleşim de YOK).
- **Trento**: yerleşim var, pencere `almanya` 1000..1803; trento-piskoposlugu (1027-05-31..1803) pencerede kullanılmıyor. Doğru tahsis: Kutsal Roma içindeki prens-piskoposluk ⇒ `almanya` yerine künye. **Kuyruk** (kaynak: Treccani EI «Alto Adige»: 31 Mayıs 1027).
- Pencerede olmayan antik/geç: malta-*, anglo-korsika, korsika-cumhuriyeti, lombardiya-venedik → Korsika yerleşimleri (Bastia, Ayacyo) 1281..1768-05-15 `cenova`; **Korsika 1755-1769 Paoli** ve **1794-96 Anglo-Korsika** pencereleri yok (adım 6/7 kuyruğu).

## 3. Özel gözlemler (ölçüldü)
1. **San Marino** (`san-marino`): yerleşim penceresi 1000-01-01..1739-10-17, `papalik` 1739-10-17..1740-02-05, yine `san-marino` — Alberoni işgali ve iadesi modellenmiş. Künye f=1000-01-01 yıl hassasiyeti (kaynaklı gün okunmadı).
2. **Malta** 1530-03-24..1798-06-12 `rodos-sovalyeleri`; künye bolge=balkanlar.
3. **Elba/Piombino**: `piombino` 1399-02-19..1804-01-01; Elba'da `toskana` 1548 (Cosimo I'in Portoferraio satın alması) kaynakla okunmadı.
4. **Savoya sahipliği**: Torino 1280-01-01 `savoya` (künye f=1032) — "1280" yıl hassasiyeti.

## 4. Eksik yerleşim (Değişmez 1 etkisi)
Sahipsiz yerleşim ihlali 0 (denetle sonucu adım 7). Fakat **Urbino**, **Pesaro**, **Cesena**, **Forlì**, **Imola**, **Faenza**, **Camerino**, **Arezzo**, **Treviso**, **Vicenza**, **Savona**, **Novara** adlı yerleşim yok: bu bölgelerin toprağı en yakın peteğe emiliyor (Petek motoru). Yeni yerleşim yazımı yerleşim dosyası + D2 maddesi + HAVVA koşusu ister; kuyruğa yazıldı.
