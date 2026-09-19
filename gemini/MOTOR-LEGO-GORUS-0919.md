# MOTOR-LEGO Mimari İnceleme Raporu (GEMINI, 19 Eylül 2026)

Bu rapor, `arac/uret_petek.py` (ana dal - main) ve `arac/kos_ve_yayinla.py` dosyalarının derinlemesine analiziyle, `oturumlar/MOTOR-LEGO.md` belgesinde tanımlanan artımlı motor mimarisine bağımsız bir "ikinci göz" değerlendirmesi sunar.

---

## (a) Aşama Aşama Bağımlılık Haritası (Dependency Map)

Aşağıdaki tablo, `uret_petek.py` motorunun ardışık aşamalarını, okudukları girdileri ve ürettikleri çıktıları (bellek veya disk düzeyinde) göstermektedir:

| Aşama No | Aşama Adı / Fonksiyonu | Okuduğu Girdiler | Yazdığı Çıktılar (Bellek / Disk) | İlgili Satır Aralığı |
| :---: | :--- | :--- | :--- | :--- |
| **1** | **Girdi Anlık Görüntüsü** | `data/` altındaki orijinal girdi dosyaları (`yerlesimler.js`, `goller.js`, `gecitler.js`, `devletler.js`). | `%TEMP%/petek_girdi_XXXXXX` geçici dizinine kopyalanmış dosyalar. Girdi yolları (`girdi.DATA`) buraya yönlendirilir. | L380 - L381 |
| **2** | **Kara Maskesi Kurulumu** | `veri-kaynak/ne_10m_land.geojson` (veya ilgili NE katmanı). | Bellekte `KARA` (Shapely MultiPolygon) maskesi. | L483 - L510 |
| **3** | **Göller Katmanı** | `girdi.oku_goller()` aracılığıyla anlık görüntü klasöründeki `goller.js`. | Bellekte `GOL` (Shapely MultiPolygon) göl gövdeleri. | L511 - L550 |
| **4** | **Nehir Yatakları** | `veri-kaynak/ne_10m_rivers_lake_centerlines.geojson`. | Bellekte `NEHIR_HAT` (Shapely MultiLineString). | L551 - L708 |
| **5** | **Dağ Sırtları** | `veri-kaynak/ne_10m_physical_boundaries.geojson`. | Bellekte `DAG_HAT` (Shapely MultiLineString). | L709 - L747 |
| **6** | **Yerleşimler Okunuyor** | `girdi.yukle()` ile anlık görüntüdeki `yerlesimler*.js` dosyaları. | Bellekte `YERLER` yerleşim nesneleri listesi. | L748 - L930 |
| **7** | **Kara Izgarası Kurulumu** | `KARA` ve `GOL` Shapely geometrileri. | Bellekte `_kvkara` (bool array), genişlik `_kvnx`, yükseklik `_kvny`. | L931 - L1332 |
| **8** | **Izgara Üzerinde Dijkstra** | `_kvkara`, `_kvnx`, `_kvny` ve `YERLER` koordinatları. | Bellekte `_YR_SAHIP` (ızgara hücre sahipliği dizisi). | L1333 - L1649 |
| **9** | **Voronoi Hücre Üretimi** | `YERLER` koordinatları ve `BOLGE` kutusu. | Bellekte `PETEK` listesi (Shapely Polygon hücreleri). *Yürüyüş modu aktifse,* ızgara sahipliği `_YR_SAHIP` kullanılarak bölünür. | L1650 - L1734 |
| **10** | **Kıyı Kesimi & A1 Tavanı** | `PETEK`, `KARA` ve `TAVAN_KM` elipsleri. | Bellekte kıyıya ve 200 km enlem düzeltmeli yarıçap tavanına göre kesilmiş `PETEK_D` listesi. | L2856 - L2928 |
| **11** | **Ada Kuralı** | `PETEK_D` ve `KARA` kara parçaları. | İnsansız adaları temizleyen, peteği kendi kara parçasına kıstıran güncellenmiş `PETEK_D`. | L2929 - L3010 |
| **12** | **Çöl Tavanı** | `ne_10m_geography_regions_polys.geojson` (çöller), `ne_10m_rivers.geojson` (muafiyet suları) ve `PETEK_D`. | Çöl poligonları içindeki peteklerin 300 km elips ile kesilmesiyle güncellenmiş `PETEK_D`. | L3379 - L3525 |
| **13** | **Motor Kara Çıktısı** | `PETEK_D` poligonları. | Diske `veri-kaynak/motor_kara.geojson` dosyası yazılır. | L3526 - L3654 |
| **14** | **Varlık Epokları Hesaplama**| `PETEK_D` ve `YERLER` (kur:/bit: tarihleri). | Bellekte `petek_epok` fonksiyonu (L4195) devir önbellekleri (`_VARLIK_ONBELLEK`, `_VARLIK_DEVIR`, `_VARLIK_PAY`). | L4359 - L4689 |
| **15** | **Yabancı Devlet Gövdeleri** | `BOYALAR` (`arac/renkler.py`), `PETEK_D` ve sahiplik verileri. | Bellekte `DEVLET_KAYIT` listesi. Puanlama kapısı (`_puan_bolgesi` L4883) ile uzak küçük cepler elenir. | L5270 - L5756 |
| **16** | **Dönemler Kuruluyor** | `DEVLET_KAYIT` ve `tarihler` (L3614, tüm kırılma günleri). | Bellekte `donemler` listesi (doğrudan/tâbi alan geometrik birleşimleri ve yüz ölçümleri). | L5757 - L6153 |
| **17** | **Seyreltme & Çıktı Yazımı** | `donemler`, `DEVLET_KAYIT` ve havuzlar (`DEV_PARCA` vb.). | Diske `data/petek_govde.js` ve `data/donemler.js` (taslak ve nihai yazımlar). | L6154 - L6487 |

---

## (b) Yerel Olmayan (Non-Local) Adımlar & Etki Yarıçapları

Motorun içinde yer alan ve tek bir yerleşim noktasındaki değişikliğin etki alanını bölgesel sınırlardan uzağa taşıyabilecek mekanizmalar aşağıda analiz edilmiştir:

### 1. Emilme (Absorption)
*   **Mekanizma:** Voronoi diyagramının doğası gereği, bir yerleşim kaldırıldığında veya eklendiğinde komşu peteklerin sınırları genişler/daralır. Yoğun bölgelerde bu etki birkaç on kilometreyle sınırlıyken, yerleşimi olmayan seyrek alanlarda (Sibirya, Sahra, okyanus adaları) etki binlerce kilometre uzağa yayılabilir ve uzak yerleşimler devasa boş toprakları "emebilir".
*   **Koddaki Karşılığı:** L1650 - L1664 (`voronoi_diagram` çağrısı ve hücrelerin noktalarla eşleştirilmesi).
*   **Sınırlandırma:** L1828'deki `TAVAN_KM = {1..4: 200}` (A1 yarıçap tavanı) ile tüm yerleşimlerin petek büyümesi enlem düzeltmeli **200 km** ile sınırlandırılarak emilmenin küresel boyuta ulaşması engellenmiştir.

### 2. Epok Devri (Period Devolution)
*   **Mekanizma:** Bir yerleşim henüz kurulmadığında (kur:) veya yok olduğunda (bit:), o peteğin alanı sahnedeki canlı komşularına yerel Voronoi yöntemiyle bölüştürülür. Eğer bitişik birden fazla yerleşim ölü ise, bu hücreler birleştirilerek (`_olu_bilesenler`) ortak bir alan halinde dıştaki canlı komşulara paylaştırılır. Bu durum, bir "ölü zinciri" boyunca etkiyi komşu peteklere taşıyabilir.
*   **Koddaki Karşılığı:** L4195 - L4356 (`petek_epok` fonksiyonu) ve L4166 - L4194 (`_olu_bilesenler` gruplaması).
*   **Sınırlandırma:** Devir işlemi yalnızca doğrudan sınırdaş olan canlı komşularla (veya yürüyüş modu aktifse yürüyüş hücresi sınırlarıyla) sınırlıdır. Dolayısıyla etki yarıçapı, ölü bileşenin dış çeperindeki ilk canlı komşu katmanıyla sınırlanır.

### 3. Çöl Tavanı (Desert Ceiling)
*   **Mekanizma:** Çöl coğrafyası (`COL`) poligonlarıyla kesişen peteklerin çöl içindeki payı, merkezden itibaren enlem düzeltmeli elips şeklinde kesilir.
*   **Koddaki Karşılığı:** L3379 - L3525 (`asama("Çöl tavanı")`) ve L3354 (`COL_TAVAN_KM = 300.0`).
*   **Etki Yarıçapı:** Kesin olarak **300 km** ile sınırlandırılmıştır. Nil vadisi gibi su koridorlarına 30 km mesafedeki yerleşimler bu kuraldan muaftır (Line 3355, `COL_SU_MUAF_KM = 30.0`).

### 4. Puan Kapısı (Score Gate) - *En Tehlikeli Yerel Olmayan Adım!*
*   **Mekanizma:** Bir devletin birbiriyle bağlantılı petek gövdelerinin bütünlüğünü korumak için tasarlanmıştır. Gövdenin merkez noktaya olan mesafelerine göre peteklere puan verilir (0-200 km = 4p, 200-300 km = 2p, 300-400 km = 1p). Eğer bağlı bir gövdenin toplam puanı `PUAN_ESIK` (4, çölde `COL_PUAN_ESIK` = 8) altındaysa, o gövde tamamen silinir (boyanmaz).
*   **Koddaki Karşılığı:** L4883 - L4900 (`_puan_bolgesi` puanlama hesabı) ve L5207 - L5217 (puanlama kapısı eşik kontrolü).
*   **Çığ Etkisi (Cascading Effect):** Tek bir yerleşim noktasının el değiştirmesi veya eklenmesi, iki ayrı devlet gövdesini birbirine bağlayan bir "köprü" oluşturabilir. Bu birleşme, toplam puanı aniden eşiğin üzerine çıkararak daha önce puan yetersizliğinden dolayı boyanmayan devasa bir uzak bölgenin aniden renklenmesine (veya tam tersi durumda tamamen silinmesine) yol açar. Bu durum, yerel değişikliklerin yüzlerce kilometre ötede dramatik harita sapmaları üretmesine yol açan yerel olmayan en kritik adımdır.

### 5. Yürüyüş Bütçesi (Walk Budget)
*   **Mekanizma:** `MOTOR_YURUYUS` modunda sınırlar Voronoi yerine yürüyüş bütçesi (40 saat) mesafesiyle belirlenir.
*   **Koddaki Karşılığı:** L1445 - L1640. `YURUYUS_SAAT = 40.0` (Line 884).
*   **Etki Yarıçapı:** Petek genişlemesi kesin olarak 40 saatlik yürüyüş mesafesiyle (yaklaşık 200 km) sınırlandırılır (lokalize etki).

---

## (c) Önbellek ve Paralelde Bit-Bit Aynılığı (Bit-Bit Identity) Tehdit Eden Unsurlar

Artımlı çalıştırma, sıfırdan koşuyla **bit-bit aynı** olmak zorundadır. Kodda determinizmi (bit denkliğini) tehdit eden potansiyel riskler ve bunlara karşı alınan yapısal önlemler aşağıda incelenmiştir:

### 1. Set ve Dict İterasyon Sırası (Set/Dict Iteration Order)
*   **Risk:** Python'da `set` ve `dict` elemanlarının taranma sırası hash-randomization nedeniyle her oturumda değişebilir. Eğer bu elemanların sırası geometrik birleşimleri (`unary_union`) veya çıktı listelerinin sırasını etkilerse, ortaya çıkan geometrik köşe koordinatları (kayan nokta gürültüsü nedeniyle) veya JS dosyasındaki satır sıraları değişir ve bit-bit aynılık bozulur.
*   **Koddaki Korunma Yolları:**
    *   L1229: `for h in set((jj * _kvnx + ii).tolist()):` -> Set içinde sadece tamsayılar (integer) olduğu için deterministiktir (Python'da integer'ların hash değeri kendisidir).
    *   L3614: `tarihler = set()` -> Hemen ardından `tarihler = sorted(...)` yapıldığı için determinizm korunur.
    *   L4171: `baglanti = {i: set() for i in olu}` -> `_olu_bilesenler` içinde bitişik ölü hücrelerin taranması set iterasyonuna (`for j in baglanti[k]:` Line 4181) tabidir. Bu durum `grup` içindeki ölü indekslerin sırasını değiştirebilir. Ancak `grup` birleştirilirken `unary_union` (Line 4225) kullanıldığı için geometrik sonuç deterministiktir. Yine de `kayit.append` sırasını değiştirebilir (ancak bu kayıt çıktı dosyalarına yazılmamaktadır).
    *   L5198: `devletler = sorted(set(sahip_kim))` -> `sorted()` kullanılarak determinizm sağlanmıştır.

### 2. Paralel Çalışmada İş Tamamlama Sırası (Parallel Execution Thread Races)
*   **Risk:** `ThreadPoolExecutor` (L5570) kullanılarak devlet gövdelerinin paralel olarak hesaplanması, iş parçacıklarının işletim sistemi tarafından farklı sürelerde tamamlanmasına neden olur. Eğer sonuçlar tamamlanma sırasıyla toplansaydı (`as_completed`), JS dosyasına yazılma veya havuza eklenme sırası her koşuda değişecek ve "bit-bit aynılık" kesinlikle bozulacaktı.
*   **Koddaki Muazzam Çözüm:** L5557 - L5583 (`deque` ve `.submit` yapısı).
    *   Kod, işleri kuyruğa (`_uy_kuyruk` - `deque`) **gönderim sırasıyla** ekler ve `.result()` çağrısını da gönderim sırasıyla `popleft()` yaparak bekler. Bu sayede paralellikten tam yararlanılırken, sonuçların `havuza()` (Line 5589) eklenme sırası kesinlikle **gönderim sırasıyla aynı** kalır. Bu harika tasarım, bit-bit aynılığın paralellik altında korunmasını sağlayan en kritik emniyet kemeridir.

### 3. Kayan Nokta Toplama Sırası (Floating Point Summation Order)
*   **Risk:** Kayan noktalı (float) sayıların toplanma sırası, bilgisayardaki yuvarlama hassasiyetleri nedeniyle küçük farklar (1e-16 mertebesinde) üretebilir. Bu durum alan hesaplarını veya kesim toleranslarını etkileyerek sınırların farklı çizilmesine yol açabilir.
*   **Koddaki Korunma Yolları:** Alan hesapları `int(round(T, -3))` ile 1.000 km²'ye yuvarlandığı için küçük yüzen nokta farkları çıktıyı bozmaz. Ayrıca hassas geometrik birleşimler için `poligonal(g.buffer(0))` ve `unary_union` gibi Shapely'nin kendi deterministik geometrik onarım mekanizmaları kullanılır.

---

## (d) Emre'nin A–G Katmanlarının Koddaki Karşılıkları

`oturumlar/MOTOR-LEGO.md` belgesindeki kavramsal katmanların `uret_petek.py` içindeki somut değişken, dosya ve işlem karşılıkları aşağıda eşlenmiştir:

*   **A coğrafya (Kara, deniz, göl, nehir, dağ, çöl, yürüyüş maliyet ızgarası):**
    *   *Kara Maskesi:* `KARA` değişkeni (`ne_10m_land.geojson` verisinden, Line 483).
    *   *Göller:* `GOL` değişkeni (`data/goller.js` -> `girdi.oku_goller()`, Line 511).
    *   *Nehir Yatakları:* `NEHIR_HAT` değişkeni (`ne_10m_rivers_lake_centerlines.geojson`, Line 551).
    *   *Dağ Sırtları:* `DAG_HAT` değişkeni (`ne_10m_physical_boundaries.geojson`, Line 709).
    *   *Çöl Poligonları:* `COL` değişkeni (`ne_10m_geography_regions_polys.geojson`, Line 3398).
    *   *Izgara / Maliyet:* `_kvkara` (bool array, Line 931) ve `_kv_ara_kara` (Line 1190).
*   **B şehirler (Yerleşim noktaları, konum, varlık pencereleri):**
    *   *Yerleşimler listesi:* `YERLER` (`girdi.yukle()`, Line 749).
    *   *Konum noktaları:* `noktalar` (`Point` nesneleri listesi, Line 1651).
    *   *Varlık pencereleri:* Yerleşim nesnelerinin içindeki `d` (doğrudan) ve `v` (vassal/tâbi) dönem dizileri.
*   **C şehir bölgeleri (Petekler - Voronoi + yaslanma + kesim):**
    *   *Voronoi ilk hücreleri:* `PETEK` (Line 1650).
    *   *Yaslanmış ve basitleştirilmiş petekler:* `PETEK_D` (Line 1828'den itibaren güncellenir; kıyı kesimi, yarıçap tavanı ve çöl tavanı uygulanmış hali).
*   **D siyasi sahiplik (Peteğin boyası):**
    *   *Varlık epoklarındaki canlı/ölü durumu:* `devir_kumesi(g)` (Line 3995) ve `petek_epok(g)` (Line 4195).
    *   *Siyasi sahiplik belirleme:* `_yabanci_devlet_faz1` içindeki `s:` (sahip), `isg:` (işgal) ve `tabi:` verilerinin okunması ve eşlenmesi.
*   **E ileri sınır (Sınır çizgileri, devlet gövdeleri):**
    *   *Devlet gövdeleri üretimi:* `_yabanci_devlet_faz1` (Line 5364) ve `himaye_govdeleri` (Line 5707).
    *   *Çıktılar:* `DEVLET_KAYIT` listesi, `data/devletler_harita.js` ve `data/petek_govde.js`.
*   **F zaman (Epoklar):**
    *   *Kırılma tarihleri:* `tarihler` (Line 3614).
    *   *Üretilen dönemler:* `donemler` (Line 5757).
*   **G mekân (Karolar / bölgeler):**
    *   *Üretim kutusu:* `BOLGE` (Line 1789).
    *   *Mimari Açık / Borç:* Şu an `uret_petek.py` içinde 10x10 derecelik coğrafi karolara (spatial tiling) bölme yapısı **bulunmamaktadır**. Tüm işlemler küresel `BOLGE` içinde çalıştırılmaktadır. Bu durum, artımlı motor mimarisi (`MOTOR-LEGO.md`) için en büyük yapısal eksiklik ve geliştirme borcudur! Karo bazlı lokalizasyonun yapılmaması, tek bir küçük değişiklikte tüm dünyanın baştan hesaplanmasına yol açmaktadır.

---

## (e) Sonuç ve Öneriler (Artımlı Geçiş Değerlendirmesi)

1.  **Paralel Tasarım Başarısı:** `uret_petek.py` içerisindeki paralel `ThreadPoolExecutor` tasarımı, iş sonuçlarını gönderim sırasıyla toplayarak determinizmi (bit-bit aynılığı) garanti altına alan mükemmel bir mimari çözümdür.
2.  **Karolama (Spatial Tiling) İhtiyacı:** `G mekân` katmanı kavramsal olarak tanımlanmış olsa da koddaki karşılığı yoktur. Artımlı motorun (Lego mimarisi) verimli çalışabilmesi için **ızgara karo (spatial tiling)** yapısına geçilmesi zorunludur. Aksi takdirde, Macaristan'daki tek bir nokta değişikliği bile tüm Avrasya ve Afrika geometrilerinin baştan hesaplanmasını tetikleyecektir.
3.  **Çığ Etkisi Uyarısı:** Puanlama kapısının yerel olmayan yapısı nedeniyle, artımlı önbelleklemede "güvenli değişiklik yarıçapı" belirlenirken bu kuralın tetikleyebileceği çığ etkileri göz önünde bulundurulmalı; eğer bir birleşme/bölünme söz konusuysa ilgili tüm devlet gövdelerinin önbellekleri geçersiz kılınmalıdır.
