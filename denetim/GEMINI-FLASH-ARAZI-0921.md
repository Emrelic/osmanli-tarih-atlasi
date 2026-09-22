# COĞRAFİ VERİ ENVANTERİ: ORMAN VE TUNDRA MASKESİ BULGULARI

Tarih: 21 Eylül 2026  
Kapsam: `veri-kaynak/` klasöründeki tüm veri dosyaları  
Görev: Orman ve tundra maskesi için elimizde ne olduğunu ölçmek ve sayıyla belgelemek.

---

## 1. SAYISAL ÖZET: ELİMİZDE NE VAR?

`veri-kaynak/` klasöründe taranan 11 veri katmanında (9 vektörel GeoJSON, 2 raster GeoTIFF):
- **Taranan toplam vektörel öznitelik sayısı:** 24.894 adet
- **Taranan toplam raster veri hacmi:** 818.336.000 bayt (~780,42 MB)
- **ORMAN maskesi için elimizde:** **0 poligon / 0 katman** (Orman ve yağmur ormanı verisi **BULUNAMADI**).
- **TUNDRA maskesi için elimizde:** **4 poligon** (Yalnızca `ne_10m_geography_regions_polys.geojson` içinde).
  - Bu 4 poligonun 3'ü Kuzey Amerika'dadır (Kanada kalkanı ve Barren Grounds).
  - Yalnızca 1 tanesi Avrupa Rusyası'ndadır (`Bol’shezemel’skaya Tundra`).
  - Asya / Sibirya / Yakutistan / İrkutsk tundra alanları için elimizde: **0 poligon** (Asya tundrası **BULUNAMADI**).

---

## 2. ADAY KATMANLARIN AYRINTILI ENVANTERİ

### Katman 1: `ne_10m_geography_regions_polys.geojson`
1. **Dosya adı (tam yol):**  
   `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\veri-kaynak\ne_10m_geography_regions_polys.geojson`
2. **Dosya boyutu ve geometri türü:**  
   - Boyut: 5.583.870 bayt (5,33 MB)  
   - Geometri türü: polygon (Polygon: 885, MultiPolygon: 162; taranan toplam öznitelik: 1047)
3. **Sınıf alanının ADI:**  
   `FEATURECLA`
4. **O alandaki BENZERSİZ DEĞERLERİN TAMAMI ve her birinin kaç öznitelik taşıdığı:**  
   (Taranan toplam öznitelik sayısı: 1047; benzersiz sınıf sayısı: 23)  
   - Island: 295  
   - Range/mtn: 222  
   - Island group: 160  
   - Plateau: 72  
   - Desert: 58  
   - Pen/cape: 57  
   - Geoarea: 43  
   - Coast: 37  
   - Plain: 30  
   - Delta: 12  
   - Peninsula: 11  
   - Basin: 9  
   - Continent: 7  
   - Valley: 6  
   - Lowland: 5  
   - Tundra: 4  
   - Isthmus: 4  
   - Wetlands: 3  
   - Gorge: 3  
   - Foothills: 3  
   - Lake: 3  
   - Depression: 2  
   - Dragons-be-here: 1  
   *(Orman / Rainforest / Forest: BULUNAMADI, 0 öznitelik)*
5. **Bu katman orman/tundra maskesi olarak KULLANILABİLİR Mİ:**  
   - **Orman için: Hayır.** Katmanda orman veya yağmur ormanına dair herhangi bir poligon sınıfı BULUNAMADI.  
   - **Tundra için: Hayır.** Katmandaki 4 tundra poligonunun 3'ü Kuzey Amerika'da, 1'i Avrupa Rusyası'nda olup Yakutistan, İrkutsk ve tüm Sibirya tundra coğrafyası BULUNAMADI.

---

### Katman 2: `ne_10m_land.geojson`
1. **Dosya adı (tam yol):**  
   `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\veri-kaynak\ne_10m_land.geojson`
2. **Dosya boyutu ve geometri türü:**  
   - Boyut: 10.157.965 bayt (9,69 MB)  
   - Geometri türü: polygon (MultiPolygon: 10, Polygon: 1; taranan toplam öznitelik: 11)
3. **Sınıf alanının ADI:**  
   `featurecla`
4. **O alandaki BENZERSİZ DEĞERLERİN TAMAMI ve her birinin kaç öznitelik taşıdığı:**  
   (Taranan toplam öznitelik sayısı: 11; benzersiz sınıf sayısı: 3)  
   - Land: 9  
   - null: 1  
   - Null island: 1  
   *(Orman: BULUNAMADI, 0 öznitelik; Tundra: BULUNAMADI, 0 öznitelik)*
5. **Bu katman orman/tundra maskesi olarak KULLANILABİLİR Mİ:**  
   - **Hayır.** Yalnızca küresel kara kütlelerinin dış sınırlarını içeren kaba kıyı çizgisi maskesi olup vejetasyon veya arazi örtüsü ayrımı BULUNAMADI.

---

### Katman 3: `ne_10m_admin_0_countries.geojson`
1. **Dosya adı (tam yol):**  
   `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\veri-kaynak\ne_10m_admin_0_countries.geojson`
2. **Dosya boyutu ve geometri türü:**  
   - Boyut: 13.287.234 bayt (12,67 MB)  
   - Geometri türü: polygon (MultiPolygon: 151, Polygon: 107; taranan toplam öznitelik: 258)
3. **Sınıf alanının ADI:**  
   `featurecla` *(ayrıca idari sınıf alanı: `TYPE`)*
4. **O alandaki BENZERSİZ DEĞERLERİN TAMAMI ve her birinin kaç öznitelik taşıdığı:**  
   (Taranan toplam öznitelik sayısı: 258)  
   - `featurecla` (1 benzersiz değer):  
     - Admin-0 country: 258  
   - `TYPE` (7 benzersiz değer):  
     - Sovereign country: 185  
     - Dependency: 33  
     - Country: 19  
     - Indeterminate: 12  
     - Disputed: 5  
     - Sovereignty: 2  
     - Lease: 2  
   *(Orman: BULUNAMADI, 0 öznitelik; Tundra: BULUNAMADI, 0 öznitelik)*
5. **Bu katman orman/tundra maskesi olarak KULLANILABİLİR Mİ:**  
   - **Hayır.** Çağdaş egemen devlet ve bağımlı bölge sınırlarını gösteren idari bir katman olup doğal örtü veya biyom verisi BULUNAMADI.

---

### Katman 4: `ne_10m_lakes.geojson`
1. **Dosya adı (tam yol):**  
   `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\veri-kaynak\ne_10m_lakes.geojson`
2. **Dosya boyutu ve geometri türü:**  
   - Boyut: 5.043.554 bayt (4,81 MB)  
   - Geometri türü: polygon (Polygon: 1346, MultiPolygon: 9; taranan toplam öznitelik: 1355)
3. **Sınıf alanının ADI:**  
   `featurecla`
4. **O alandaki BENZERSİZ DEĞERLERİN TAMAMI ve her birinin kaç öznitelik taşıdığı:**  
   (Taranan toplam öznitelik sayısı: 1355; benzersiz sınıf sayısı: 3)  
   - Lake: 1056  
   - Reservoir: 230  
   - Alkaline Lake: 69  
   *(Orman: BULUNAMADI, 0 öznitelik; Tundra: BULUNAMADI, 0 öznitelik)*
5. **Bu katman orman/tundra maskesi olarak KULLANILABİLİR Mİ:**  
   - **Hayır.** Yalnızca tatlı ve tuzlu su gölleri ile baraj rezervuarlarını içeren hidroloji katmanı olup orman veya tundra geometrisi BULUNAMADI.

---

### Katman 5: `ne_10m_rivers.geojson`
1. **Dosya adı (tam yol):**  
   `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\veri-kaynak\ne_10m_rivers.geojson`
2. **Dosya boyutu ve geometri türü:**  
   - Boyut: 7.307.743 bayt (6,97 MB)  
   - Geometri türü: line (MultiLineString: 1455; taranan toplam öznitelik: 1455)
3. **Sınıf alanının ADI:**  
   `featurecla`
4. **O alandaki BENZERSİZ DEĞERLERİN TAMAMI ve her birinin kaç öznitelik taşıdığı:**  
   (Taranan toplam öznitelik sayısı: 1455; benzersiz sınıf sayısı: 2)  
   - River: 1202  
   - Lake Centerline: 253  
   *(Orman: BULUNAMADI, 0 öznitelik; Tundra: BULUNAMADI, 0 öznitelik)*
5. **Bu katman orman/tundra maskesi olarak KULLANILABİLİR Mİ:**  
   - **Hayır.** Doğrusal akarsu eksenlerini içeren çizgi katmanı olup kapalı poligon maskesi veya vejetasyon alanı BULUNAMADI.

---

### Katman 6: `motor_kara.geojson`
1. **Dosya adı (tam yol):**  
   `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\veri-kaynak\motor_kara.geojson`
2. **Dosya boyutu ve geometri türü:**  
   - Boyut: 10.589 bayt (0,01 MB)  
   - Geometri türü: polygon (MultiPolygon: 1; taranan toplam öznitelik: 1)
3. **Sınıf alanının ADI:**  
   BULUNAMADI *(dosyadaki mevcut alanlar: `kaynak`, `not`)*
4. **O alandaki BENZERSİZ DEĞERLERİN TAMAMI ve her birinin kaç öznitelik taşıdığı:**  
   Sınıf alanı BULUNAMADI (taranan toplam öznitelik: 1; Orman ve Tundra: BULUNAMADI, 0 öznitelik)
5. **Bu katman orman/tundra maskesi olarak KULLANILABİLİR Mİ:**  
   - **Hayır.** Harita motorunun petek geometrilerini kırpmakta kullandığı tekil bir kıyı poligonu olup arazi sınıflandırması BULUNAMADI.

---

### Katman 7: `d_bugunku_sinirlar.geojson`
1. **Dosya adı (tam yol):**  
   `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\veri-kaynak\d_bugunku_sinirlar.geojson`
2. **Dosya boyutu ve geometri türü:**  
   - Boyut: 1.761.788 bayt (1,68 MB)  
   - Geometri türü: line (LineString: 390; taranan toplam öznitelik: 390)
3. **Sınıf alanının ADI:**  
   BULUNAMADI *(dosyadaki mevcut alanlar: `cift`, `taraf_a`, `taraf_b`, `isim_a`, `isim_b`, `parca_no`, `parca_sayisi`, `nokta_sayisi`, `uzunluk_km`)*
4. **O alandaki BENZERSİZ DEĞERLERİN TAMAMI ve her birinin kaç öznitelik taşıdığı:**  
   Sınıf alanı BULUNAMADI (taranan toplam öznitelik: 390; Orman ve Tundra: BULUNAMADI, 0 öznitelik)
5. **Bu katman orman/tundra maskesi olarak KULLANILABİLİR Mİ:**  
   - **Hayır.** Günümüz devlet sınırlarının iki taraflı çizgisel sınır parçalarını içermekte olup doğal maske özelliği BULUNAMADI.

---

### Katman 8: `viabundus\Viabundus-1.3-Edges.geojson`
1. **Dosya adı (tam yol):**  
   `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\veri-kaynak\viabundus\Viabundus-1.3-Edges.geojson`
2. **Dosya boyutu ve geometri türü:**  
   - Boyut: 48.077.114 bayt (45,85 MB)  
   - Geometri türü: line (LineString: 19283; taranan toplam öznitelik: 19283)
3. **Sınıf alanının ADI:**  
   `Type`
4. **O alandaki BENZERSİZ DEĞERLERİN TAMAMI ve her birinin kaç öznitelik taşıdığı:**  
   (Taranan toplam öznitelik sayısı: 19283; benzersiz sınıf sayısı: 4)  
   - land: 18017  
   - water: 1116  
   - ferry: 149  
   - lsnd: 1  
   *(Orman: BULUNAMADI, 0 öznitelik; Tundra: BULUNAMADI, 0 öznitelik)*
5. **Bu katman orman/tundra maskesi olarak KULLANILABİLİR Mİ:**  
   - **Hayır.** Orta Çağ Kuzey ve Orta Avrupa ticaret yolları, suyolları ve feribot hatlarını içeren çizgisel bir ulaşım ağı olup doğal engel maskesi BULUNAMADI.

---

### Katman 9: `viabundus\Viabundus-1.3-Town_Outlines.geojson`
1. **Dosya adı (tam yol):**  
   `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\veri-kaynak\viabundus\Viabundus-1.3-Town_Outlines.geojson`
2. **Dosya boyutu ve geometri türü:**  
   - Boyut: 2.354.289 bayt (2,25 MB)  
   - Geometri türü: polygon (Polygon: 1092; taranan toplam öznitelik: 1092)
3. **Sınıf alanının ADI:**  
   BULUNAMADI *(dosyadaki mevcut tek öznitelik alanı: `Nodes_ID`)*
4. **O alandaki BENZERSİZ DEĞERLERİN TAMAMI ve her birinin kaç öznitelik taşıdığı:**  
   Sınıf alanı BULUNAMADI (taranan toplam öznitelik: 1092; Orman ve Tundra: BULUNAMADI, 0 öznitelik)
5. **Bu katman orman/tundra maskesi olarak KULLANILABİLİR Mİ:**  
   - **Hayır.** Tarihi şehir yerleşim sınırlarını içeren kentsel poligonlar olup doğal arazi örtüsü maskesi BULUNAMADI.

---

### Katman 10: `yukseklik\etopo2022_30s_atlas.tif`
1. **Dosya adı (tam yol):**  
   `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\veri-kaynak\yukseklik\etopo2022_30s_atlas.tif`
2. **Dosya boyutu ve geometri türü:**  
   - Boyut: 192.260.536 bayt (183,35 MB)  
   - Geometri türü: raster / GeoTIFF (vektörel geometri türü BULUNAMADI)
3. **Sınıf alanının ADI:**  
   BULUNAMADI *(sürekli piksel değerleri içeren int16 yükseklik ızgarasıdır)*
4. **O alandaki BENZERSİZ DEĞERLERİN TAMAMI ve her birinin kaç öznitelik taşıdığı:**  
   Sınıf alanı BULUNAMADI (sayısal yükseklik modeli / DEM olup vejetasyon kategorisi taşımaz; Orman ve Tundra: BULUNAMADI)
5. **Bu katman orman/tundra maskesi olarak KULLANILABİLİR Mİ:**  
   - **Hayır.** Yürüyüş motorunun eğim ve dağlık sürtünme maliyetini hesaplamaya yarayan sürekli yükseklik ızgarası olup orman veya tundra tematik sınıflandırması BULUNAMADI.

---

### Katman 11: `yukseklik\etopo2022_30s_dunya.tif`
1. **Dosya adı (tam yol):**  
   `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ\veri-kaynak\yukseklik\etopo2022_30s_dunya.tif`
2. **Dosya boyutu ve geometri türü:**  
   - Boyut: 626.075.454 bayt (597,07 MB)  
   - Geometri türü: raster / GeoTIFF (vektörel geometri türü BULUNAMADI)
3. **Sınıf alanının ADI:**  
   BULUNAMADI *(küresel sürekli piksel değerleri içeren int16 yükseklik ızgarasıdır)*
4. **O alandaki BENZERSİZ DEĞERLERİN TAMAMI ve her birinin kaç öznitelik taşıdığı:**  
   Sınıf alanı BULUNAMADI (küresel ETOPO 2022 DEM verisidir; Orman ve Tundra: BULUNAMADI)
5. **Bu katman orman/tundra maskesi olarak KULLANILABİLİR Mİ:**  
   - **Hayır.** Küresel topografik yükseklik ızgarası olup arazi örtüsü, orman veya tundra maskesi olarak kullanılamaz.

---

## 3. MEVCUT DİĞER VERİ VE BELGELER

- `veri-kaynak/viabundus/Viabundus-1.3-CSV.zip` (25.792.947 bayt): Viabundus veritabanının CSV tabloları (`Descriptions`, `Edges`, `Fairs`, `Nodes`, `Towns`, `Water-1500`). Sınıflandırılmış orman veya tundra poligon verisi BULUNAMADI.
- `veri-kaynak/viabundus/Viabundus_Documentation_v1.3.pdf` (1.322.758 bayt): Viabundus veri dokümantasyonu.
- `veri-kaynak/README.md`, `veri-kaynak/KAYNAK-README.md`, `veri-kaynak/KAYNAK-LICENSE.md`, `veri-kaynak/viabundus/KAYNAK.md`, `veri-kaynak/yukseklik/KAYNAK.md`: Lisans ve kaynak künye metinleri.

---

## 4. DENİZ SINIFLARI DURUM TABLOSU

| deniz sınıfı | elimizdeki en iyi kaynak | kapsıyor mu | eksik ne |
|---|---|---|---|
| kum | `veri-kaynak/ne_10m_geography_regions_polys.geojson` (`FEATURECLA == "Desert"`) | Evet | Eksik BULUNAMADI (Sahra, Arabistan, Gobi dahil 58 çöl poligonu tam mevcuttur) |
| dağ | `veri-kaynak/yukseklik/etopo2022_30s_atlas.tif` (ve `ne_10m_geography_regions_polys.geojson` içindeki `Range/mtn`: 222 poligon) | Evet | Eksik BULUNAMADI (Sürtünme motoru raster eğimi doğrudan okumakta olup ilave poligon maske gereksinimi bulunmamaktadır) |
| orman | BULUNAMADI | Hayır | Katman ve poligonların tamamı (%100 eksik; Amazon, Kongo, Sibirya ve Avrasya tayga poligonları BULUNAMADI) |
| tundra | `veri-kaynak/ne_10m_geography_regions_polys.geojson` (`FEATURECLA == "Tundra"`) | Hayır | Asya ve Sibirya tundrası (%100 eksik; Yakutistan, İrkutsk, Taymir, Yamal ve Çukotka tundra poligonları BULUNAMADI, mevcut 4 poligonun 3'ü Kuzey Amerika'dadır) |
