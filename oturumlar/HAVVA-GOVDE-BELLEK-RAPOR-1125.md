# GÖVDE AŞAMASI + Ⓑ — BELLEK VE İŞLEMCİ KOD OKUMASI (yalnız okuma)

HAVVA · 25 Kasım 2026 · dal `havva-rapor-1124` (worktree `havva-bosluk-olcum-1122`).
Kapsam: `arac/uret_petek.py`, `arac/dolgu.py`, `arac/motor_onbellek.py`, `arac/girdi.py`, `MIMARI.md`,
`oturumlar/TASARIM-B-DOLGU-AYRI-SUREC-1125.md`. Hiçbir süreç çalıştırılmadı, hiçbir şey ölçülmedi.
Etiketler: **[KOD]** = satırda okundu · **[TAHMİN]** = akıl yürütme, ölçülmedi · **[ÖLÇÜLMEDİ]** = bilinmiyor.
Satır numaraları `uret_petek.py` içindir; başka dosya adı yazılıysa o dosyanındır.

> Ön not (önemli): `tracemalloc` shapely geometrisinin **GEOS tarafındaki belleğini görmez** (C++ `new`).
> `denetim/ARAC-BELLEK-OLC-1125.py` yalnız `len()` basıyor (`boy()`, satır 68-72). Geometri tutan
> önbelleklerin gerçek boyu için `sum(shapely.get_num_coordinates(g))` (≈16-24 B/köşe + halka başı yük)
> eklenmeli; yoksa "hangi yapı büyük" sorusu yine cevapsız kalır.

---------------------------------------------------------------------------------------------------

## 1. Gövde aşaması: sınırlar, tutulanlar, birikenler

### 1.1 Sınırlar [KOD]
- Başlangıç `asama("Yabancı devlet gövdeleri")` **:8222**; bitiş `asama("Dönemler kuruluyor…")` **:9411**.
- İşin gövdesi `_yabanci_devlet_faz1` **:8659-8790** (devlet başına, tüm günleri; sonuç `(did, dad, renk, ham, tani)`).
- Üç yol: **süreç yolu** :8795-8971 (`MOTOR_SUREC_ISCI>1` ya da `MOTOR_DEVAM=1`), sıralı eski :8973-9057
  (`MOTOR_PARALEL_KAPALI=1`), **iş parçacığı yolu** :9058-9162 (varsayılan, N=1).
- Bu aşamadan sonra aynı süreçte koşan, gövde verisini kullanan aşamalar: seyreltme :9862, `devletler_harita.js`
  yazımı :9885-9903, **Ⓑ ufuk bantları :9973-10147**, **Ⓑ dolgu :10312-10349**, çıktı yazımı :10353.

### 1.2 Süreç yolunda kim ne yapıyor [KOD]
- İşçi süreçler `Popen` ile :595-600'de, "Girdi anlık görüntüsü" aşamasından hemen sonra açılır ve **motorun TAMAMINI baştan
  koşar** (aynı `uret_petek.py`; yalnız kilit/çıktı yazımı atlanır: :126-129, :5056, :7129). Yani A'nın 21,5 saatlik kısmı
  N süreçte **eşzamanlı ve aynı** hesaplanır (CPU ×N, bellek ×N). Sonuçlar ancak `_SR_IZ` parmak izi tutarsa kabul edilir (:8806-8822, :8913-8916).
- Her süreç kendi payını (LPT yük dengesi :8825-8831) `_TPE(max_workers=MOTOR_PARALEL_ISCI=4)` iş parçacığıyla hesaplar
  (:8793, :8868, :8890) ve **her devletin `ham` listesini `s_<sıra>.pkl` olarak diske yazar** (:8848-8855). İşçi payı bitince
  `sayac_k.pkl` yazıp `os._exit(0)` (:8882-8888) — işçi belleği o anda serbest kalır.
- Ana süreç FAZ 2'yi özgün devlet sırasıyla yürütür (:8893-8937): pickle'ı okur (:8909-8910), `havuza()` çağırır (:8931),
  `DEVLET_KAYIT.append` (:8937). `_sr_yaz` `None` döndürdüğü için futures sonuç tutmaz (:8848-8855, :8891) → **bellekte biriktirme yok**
  (kodun kendi "B2" notu :8797-8798 ile uyumlu).
- İş parçacığı yolunda (N=1) sınırlı pencere: `FAZ1_PENCERE = max(8*4, 64) = 64` future (:9127). `popleft()` sırayla tükettiği için
  baştaki yavaş devlet (Rusya, ETA ağırlığının ~%22'si, :9083-9084/:9118-9126) pencereyi doldurur → **tamamlanmış ama tüketilmemiş
  en çok ~63 devletin `ham` sonucu RAM'de bekler** (süreç yolunda bu yok, diske gider). [KOD; büyüklük TAHMİN]

### 1.3 Geometri nasıl taşınıyor — asıl boyut sorunu [KOD]
- `ham[i]["mp"]` = `mp_koord(g)` çıktısı (**:7017-7049**): `[parça][halka][[x,y],…]` iç içe **Python listeleri**.
  Köşe başına: `[x,y]` listesi 72 B + 2 float 48 B + üst listede işaretçi 8 B ≈ **128 B/köşe**. Shapely/GEOS'ta ≈16-24 B/köşe;
  WKB 16 B/köşe → **~6-8× şişme** [KOD hesabı; `sys.getsizeof` bilinen değerler].
- Bir devletin **bütün dönemlerinin** `mp`'si, devlet bitene kadar `ham` listesinde birikir (:8784-8789), sonra pickle'lanır (pickle
  zaten `[x,y]` listelerini memo'lar) ve ana süreçte `pickle.load` ile **tamamı** yeniden Python listesine açılır (:8910). En büyük
  devletlerde (Rusya) tek devletin `ham`ı tepe bellek adayıdır. [KOD; boyut ÖLÇÜLMEDİ]
- Aynı nesneler bir de **önbellek yükü** olarak sqlite'a pickle'lanır: `_ONB_GEO.yaz("govde", …, (_mp, _c, _kesilen, _tamamen))` (:8751)
  ve okunurken `pickle.loads` (motor_onbellek.py:92) tekrar listeye açar; sonra `_mp_geo(_mp)` (:8555-8557) onları yine Polygon'a çevirir.
  Yani her gövde-dönem: Polygon → liste → pickle → liste → Polygon gidiş-dönüşü. (Yuvarlama 3 ondalık, :7041 — çıktı için gerekli.)

### 1.4 Ana süreçte gövde boyunca büyüyen kalıcı yapılar (FAZ 2 ve FAZ 1) [KOD]
| Yapı | Nerede dolar | Not |
|---|---|---|
| `DEV_HALKA`, `DEV_PARCA` (+`_IX` sözlükleri) | `havuza()` :6980-7015, çağrı :8931 | `halka_ix` anahtarı = **halkanın JSON metni** (`json.dumps(halka)` :7005); yani her benzersiz halka hem liste (128 B/köşe) hem JSON dizgesi (~15-20 B/köşe) olarak tutulur. Seyreltmeye (:9871) kadar yaşar. |
| `DEVLET_KAYIT` | :8937 | dönem başına `{"f","t","g":[indeks],"c"}`; küçük |
| `_BANT_AKTIF` | :8935 (+:9055, :9160, :9701) | her dönem için `sorted(aktif)` int listesi (pickle'dan gelen her int ayrı nesne ≈ 36 B/öğe); Osmanlı kayıtlarında `aktif`,`dogrudan`,`tabi` üç liste. Yalnız `MOTOR_UFUK_BANT` doluysa. [TAHMİN: yüzlerce MB] |
| `_PUAN_ONBELLEK` | `_puan_bolgesi` :7287-7380 | anahtar `(did, aktif)`; **sınırsız** (`MOTOR_EZBER_TAVAN_PUAN` varsayılan 0, :3370). Değer = piksel-merdiven birleşimi poligonu. Gövde aşamasında her `(did, aktif)` dönem başına benzersizdir → **isabet ≈ 0, saf bellek maliyeti** [KOD; isabet oranı sayaçla ÖLÇÜLMEDİ]. |
| `_VARLIK_ONBELLEK/_DEVIR/_PAY` | `petek_epok` :6425-6427 | anahtar = devir kümesi (+MÖ/enklav). Değer = N uzunluklu hücre listesi (çoğu öğe `PETEK_D` nesnesine işaretçi, 8 B) + yalnız **alıcı** hücreler yeni poligon. Anahtar sayısı ≈ benzersiz devir durumu sayısı (`len(_epok_gun)` civarı, log :6437). Sınırsız. |
| `_ONB_OZ` | `_onb_oz` :714-726 | **nesneyi canlı tutar** (`v=(g,digest)` — `id()` yeniden kullanılmasın diye). Sınırsız. Aşağıda §2.2. |
| `_KUS_ONBELLEK`, `_KUS_KARAR`, `_IC_ONBELLEK`, `_CEP_ONBELLEK`, `_DOLGU_ONBELLEK`, `_COL_NOKTA_ONBELLEK`, `_GN_ONB` | :5447/:5344/:5470/:7439/:7470/:3281 | gün/petek başına küçük küme-kayıtları; `_IC`/`_CEP` en çok petek sayısı kadar (N) poligon. Tek tek küçük, toplam GB mertebesine çıkma ihtimali düşük [TAHMİN]. |
| `_SERBEST_ONBELLEK` | `bos_bolge` :5834-5848 | **sınırsız ve kullanıcı listesinde yok.** Anahtarı `(frozenset(sahipsiz indeksler), devir_kumesi)`, değeri sahipsiz bölgenin tamponlu birleşimi (büyük poligon). Osmanlı döngüsünde (:9685) dolar. Adet "birkaç düzine" diye yorumlanmış (:5837-5838) [ÖLÇÜLMEDİ]. |
| LRU'lu ezberler | `_SAHIPLI_EZBER` :3426, `_DEVIR_EZBER` :5663, `_SAHIP_EZBER` :8344, `_SK_SAHIP_EZBER` :7846, `_PUAN_ONBELLEK` :7282 | tavan `MOTOR_EZBER_TAVAN` (vars. 128, :3369). Değerleri frozenset/sözlük (~100 KB/gün, :3355-3360 ölçümü) → tavanlı dört ezber ≈ **<60 MB/süreç**. Yani bunlar bellek sorunu DEĞİL. |

### 1.5 Her süreçte yaşayan A mirası [KOD]
Her işçi (ve ana süreç) gövde aşamasına A'nın bütün yapılarıyla girer: `PETEK_D` (:4261…), **`PETEK_TAM`** (:4157-4194; son kullanım
:4296 — sonrasında hiç okunmuyor ama süreç boyu yaşıyor), `_BANT_HAM` (bant başına N poligon, :4213/:4247), `_YR_SAHIP` (int32
ızgara, KV_ADIM=0,05° → dünya kutusunda ~2×10⁷ hücre, :1329/:2185), `_YR_ESIK`/`_yr_F_ham` ızgaraları, `_KUS_AGAC`, `STRtree`ler, `YERLER`.
Süreç başına toplamı ÖLÇÜLMEDİ; N süreç → N ile çarpılır.

### 1.6 33,7 GB özel / 0,9 GB çalışma kümesi ne anlama gelebilir [YORUM]
Sayfa hatası 0 ve çalışma kümesinin küçüklüğü, belleğin **ya canlı ama dokunulmayan nesnelerde** (önbellek/`_ONB_OZ`/liste havuzları) **ya da
serbest bırakılmış ama CRT yığınında kalmış (parçalanma)** bloklarda durduğunu gösterir. Kodla ayırt edilemez. Ayırt etmenin yolu: Ⓑ
sırasında `commit` zaman serisi — **düz** ise miras (A'dan), **monoton artıyorsa** Ⓑ'nin kendi sızıntısı (§2.2'deki `_OZ_ONB`). Koşu 40'ın mevcut
izleme dosyasında bu seri varsa bakılmalı.

---------------------------------------------------------------------------------------------------

## 2. Ⓑ başlarken canlı olan ama Ⓑ'nin kullanmadığı yapılar

### 2.1 Ⓑ'ye ne geçiyor [KOD :10312-10331]
- `_b_ar`: her Osmanlı dönemi için `_coz(o+v, OSM_HALKA, OSM_PARCA)` ve her `DEVLET_KAYIT.dnm` için `_coz(g, DEV_HALKA, DEV_PARCA)` —
  **yeniden kurulan shapely poligonları listesi** (dolgu.py:1345-1364). Bu liste Ⓑ süresince yaşar.
- `KARA`, çıktı yolu, `kesit_sinir`, üç kanca: `_dg_izgara` (:10283, `_gun_sahipleri`→`devir_kumesi`/`_dolgu_kumesi`, `_YR_SAHIP`, `_kvx0/_kvy0`),
  `_dg_duvar` (:10258, `_DG_HATLAR`, `_sk_tabi_mi`), `_dg_engel` (:10301, `_mo_sahne_disi`, `noktalar`).
- Kancaların dolaylı bağımlılığı: `devir_kumesi(a)` önbellekte yoksa `_kusatilmis(g)` (:5491) → `PETEK_D`, `_KUS_AGAC`, `_IC/_CEP_ONBELLEK`.
  Ana süreç süreç-yolunda yalnız kendi payının günlerini hesapladığı için bu günler Ⓑ'de **ıskalayabilir** (işçi ezberleri ana süreçte yok).
  ⇒ `PETEK_D` ve kuşatma yapıları Ⓑ'de dolaylı olarak GEREKLİ kabul edilmeli. [KOD çıkarımı]

### 2.2 Ⓑ başında ölü olanlar (aday listesi) — çıktıyı değiştirir mi?
Kontrol yöntemi: satır `:10353` sonrası ve Ⓑ içinde bu adlar `grep` ile arandı; okuyan satır yok → "ölü".
| Aday | Son okuyan satır | Serbest bırakma | Çıktıyı değiştirir mi |
|---|---|---|---|
| `_BANT_HAM`, `_BANT_TABAN_ONB` | bant aşaması :10045-10092, `petek_epok` | `del` + `gc.collect()` bant dosyası yazıldıktan sonra (:10147) | **Hayır.** `petek_epok` Ⓑ'de hiç çağrılmıyor (son çağrı :9962; :10353 sonrası hiç yok). |
| `_BANT_AKTIF`, `_bant_havuz/_bant_ix/_bant_parca/_bant_pix/_bant_kayit` | :10045, :10133-10138 | `del` (:10147'den sonra) | Hayır |
| `_VARLIK_ONBELLEK/_DEVIR/_PAY` (taban anahtarları; bant anahtarları zaten :9926-9934'te siliniyor) | son okuma :9962 (bant) | `.clear()` | Hayır (Ⓑ ve sonrası `petek_epok` çağırmıyor). Uyarı: `_VARLIK_PAY` 6453'te ve işçi sayaç toplamında :8860-8963 okunuyor; Ⓑ'den sonra yok. |
| `_PUAN_ONBELLEK` | `_puan_bolgesi` yalnız `_yabanci_govde_hesap` içinden (:8582); bant aşaması bitince ölü | `.clear()` | Hayır (saf fonksiyon, yeniden hesap aynı) |
| `_ONB_OZ` | yalnız özet önbelleği | `.clear()` | Hayır (özet yeniden hesaplanır, aynı sha256) |
| `PETEK_TAM` | son okuma :4296 | `del` ≈ :4300 | Hayır |
| `_don` (dondurulan köşe kümesi) | seyrelt :9871 | `del` | Hayır |
| `js` dizgesi (donemler.js metni, :9745-9766) | yazım :10595 | **silinemez** (henüz yazılmadı) | — |
| `_SERBEST_ONBELLEK` | `len()` yalnız :10620 | değerleri bırakıp yalnız sayıyı saklamak | Hayır (rapor satırı değişmez) |
| `_IC_ONBELLEK`, `_CEP_ONBELLEK`, `_KUS_AGAC`, `PETEK_D` | `_kusatilmis` ıskalarsa | **tutulmalı** | — |

⚠️ **`del` + `gc.collect()` özel baytı işletim sistemine geri vermeyebilir** (Windows CRT yığını, GEOS'un küçük blokları). Özel bellek
düşmezse bu liste yararsızdır; kesin çözüm Ⓑ'yi ayrı süreçte koşturmak (TASARIM-B-DOLGU-AYRI-SUREC-1125). [TAHMİN]

### 2.3 Sızıntı adayları (kodun kendi önlemini boşa çıkaranlar) [KOD]
1. **`_ONB_OZ` (uret_petek.py:714-726)** — `_onb_oz(g)` nesneyi `(g, digest)` olarak sözlükte tutar. Bant aşaması her bant sonunda
   `_bant_onbellek_temizle()` ile (:9926-9934, çağrı :10094) epok listelerini "bellekten atıyor" ama `_onb_parca_anahtar` her dönemin
   `pe[j]`'lerini `_onb_oz` ile özetlediği için (:8617, :8622) **bant epok listelerinin alıcı poligonları `_ONB_OZ` yüzünden asla serbest
   kalmaz**. Yani kodun açıkça yazdığı "bu bütçenin epok listeleri bir sonraki banda taşınmaz" (:10093) niyeti fiilen tutmuyor. Aynı biçimde
   `_onb_oz(_bb)` (:9686) her gün için sahipsiz-bölge poligonunu tutar (zaten `_SERBEST_ONBELLEK`te de var). [KOD; büyüklük ÖLÇÜLMEDİ]
2. **`dolgu._OZ_ONB` (dolgu.py:217-231)** — aynı desen. `kesit_dolgu` her kesitte `_oz(v)` ile **duvar sözlüğündeki bütün geometrileri**
   özetler (:972, :676). Kancanın `_DG_DUVAR_EZBER`i 400'ü aşınca `.clear()` edilir (:10277-10278) — ama o sözlüklerin geometrileri
   `_OZ_ONB`de yaşamaya devam eder. Dolayısıyla `_DG_DUVAR_EZBER` tavanı **fiilen işlemez**; Ⓑ boyunca benzersiz her "aktif hat kümesi"
   için `{kim: 250 km tamponlu birleşim}` sözlüğü birikir. Ayrıca her kesitin `engel` MultiPoint'i (:309, :677) de. [KOD; boyut ÖLÇÜLMEDİ —
   aktif-hat-kümesi sayısı × kim sayısı × yaka poligonu boyu; 453 hat (Koşu 40)]. **Ⓑ boyunca commit'in artması bunun işareti olurdu.**
3. `dolgu._TALEP_ONB` (dolgu.py:155, tavan `MOTOR_DOLGU_ONBELLEK`=1200): kapanış "halka" poligonları (≈ gövde çevresinde 100-200 km'lik şerit);
   en çok 1200 adet. Sınırlı ama poligon başına ~0,1-1 MB olabilir → 0,1-1,2 GB [TAHMİN].
   Anahtar aralık indeksidir (kosudan :1303-1304) — FIFO kuyruğu `_TALEP_SIRA` (isabette tazelenmiyor, :1027-1053) → LRU değil FIFO.

---------------------------------------------------------------------------------------------------

## 3. Tavansız önbellekler: doluş, anahtar uzayı, tavan etkisi

| Önbellek | Anahtar uzayı | Doldurduğu yer | Tavan konursa |
|---|---|---|---|
| `_VARLIK_ONBELLEK` (:5327) | benzersiz (devir kümesi, MÖ, enklav[, bant]); üst sınır ≈ kırılma günü sayısı (`_epok_gun`, log :6437) + MÖ/enklav varyantları. Devir kümesi `kur/bit/sahipli/kuşatma`dan geldiği için günlerle değil **durumlarla** büyür. | gövde (her süreç kendi günleri), Osmanlı :9451, bant | Yorum (:3366) bunu "~15 sn/çağrı" diye pahalı ilan ediyor. Gövde aşaması devletleri sırayla gezer; her devlet kendi günlerinde aynı anahtarlara döner → tavan, **anahtar sayısının altındaysa** thrash (15 sn × ıskalama). Tavan ancak ≥ benzersiz anahtar sayısı ise güvenli; çıktı değişmez (saf). `_epok_gun` ve `len(_VARLIK_ONBELLEK)` basılmadan tavan yazılamaz. |
| `_KUS_ONBELLEK` (:5447) | gün dizgisi; frozenset(≤ yüzlerce indeks) | `_kusatilmis` | Küçük (≈ gün sayısı × <10 KB). Tavan gereksiz; konursa `_kusatilmis` ıskalaması **pahalı** (tamamı petek taraması, :5500-5575; yorum :5461: 11,7 sn/çağrı eski). |
| `_PUAN_ONBELLEK` (:7282) | `(did, aktif frozenset)` — dönem başına benzersiz; ≈ yayınlanan dönem sayısı (~4,4 bin yabancı, bant aşamasında her bant aynı anahtarları yeniden okur) | gövde (işçilerde), bant (ana süreçte; yorum :10077-10079) | Env ile verilebilir (`MOTOR_EZBER_TAVAN_PUAN`). Gövde aşamasında isabet beklenmiyor → tavan 64-256 **ücretsiz**. Bant aşamasında anahtarlar bant başına sırayla taranır (LRU'da en kötü desen) → tavan < dönem sayısı ise bant 2 ve 3 için puan bölgesi yeniden hesaplanır (CPU↑, tek çekirdek). Çıktı değişmez. |
| `_DOLGU_ONBELLEK` (:7439) | gün dizgisi; `{kim: frozenset(indeks)}` | `_dolgu_kumesi` :7567-7790 | Küçük. Tavan gereksiz. |
| `_IC_ONBELLEK`/`_CEP_ONBELLEK` (:5470) | petek indeksi (≤ N) | `_ic_kara`, `_cep` | Zaten sınırlı (≤N). Tavan koymak `_kusatilmis`'i yavaşlatır, kazanç ≤ N poligon. |
| `_SERBEST_ONBELLEK` (:5790) | `(frozenset(sahipsiz), devir)` | `bos_bolge` | Anahtar frozenset binlerce öğe; değer büyük poligon. Aynı gün aynı küme tekrar kullanılır → tavan thrash riski düşük (ardışık günler aynı anahtar), ama `len()` Ⓑ sonrası rapor satırında kullanılıyor (:10620). |
| `_ONB_OZ` / `dolgu._OZ_ONB` | benzersiz geometri nesnesi sayısı | §2.3 | **Tavan yerine temizleme** doğru çare (özet saf; yeniden hesap aynı sha256). Çıktıyı değiştirmez. |
| `_KUS_KARAR`, `_KUS_BIL_KARAR`, `_GN_ONB`, `_COL_NOKTA_ONBELLEK` | sha dizgesi→bool vb. | — | Küçük. |

Genel: LRU'lu dördü (:3369) zaten ucuz; tavanı 128'den indirmek ≈ **40 MB/süreç** kazandırır (hesap :3355-3360), değmez.

---------------------------------------------------------------------------------------------------

## 4. Ortam değişkenleri ve önbellek tuzu

Tuz kuralı [KOD :642-662]: `_ONB_TUZ["ortam"]` = **`MOTOR_` ile başlayan bütün ortam değişkenleri, `_ONB_ISLETIM` kümesi hariç** (:642-647). `motor`
özeti = `girdi.motor_izi()` (girdi.py:840-859: yalnız `uret_petek.py`, `renkler.py`, `girdi.py` sha256'ları; ortam DEĞİL) + `motor_onbellek.py` sha256 + `gun.py` sha256.
`_ONB_GEO_TUZ` (:678-683) aynısı ama `renkler.py`/`girdi.py` hariç. **`dolgu.py` bu tuzlarda yok**; dolgu kendi tuzunu kurar (dolgu.py:199-215:
sürüm + **`dolgu.py` sha256** + kural sabitleri; **`MOTOR_DOLGU_ONBELLEK` bu kural sözlüğünde yok**).

| Değişken | Okunduğu yer | Bellek/CPU etkisi | uret_petek tuzuna girer mi | Çıktıyı değiştirir mi |
|---|---|---|---|---|
| `MOTOR_SUREC_ISCI` (N) | :573 | N−1 işçi süreç; her biri **A'nın tamamını baştan koşar** (:595-600) → bellek ve CPU ×N; gövde hızlanır | **Hayır** (:642) | Hayır (iz doğrulamalı, :8913) |
| `MOTOR_PARALEL_ISCI` | :8793 (vars. 4) | süreç başına iş parçacığı sayısı; aynı yığını paylaşır (GIL shapely'de bırakılıyor, :9061-9064) | Hayır | Hayır |
| `MOTOR_DEVAM`, `MOTOR_DEVAM_DIZIN` | :582 | `=1` süreç yolunu zorlar; FAZ 1 sonuçlarını kalıcı diske yazar; pencere (64 future) yerine diske gider | Hayır | Hayır |
| `MOTOR_PARALEL_KAPALI` | :583 | `=1` sıralı eski yol; `govde` önbellek katmanı ÖLÜ (:690-697) | Hayır (:644) | Hayır ama yavaş |
| `MOTOR_EZBER_TAVAN` | :3369 | LRU tavanı (vars. 128; 0 = sınırsız) | **Hayır** (:646-647) | Hayır |
| `MOTOR_EZBER_TAVAN_PUAN` | :3370 | `_PUAN_ONBELLEK` tavanı (vars. 0 = sınırsız) | **Hayır** | Hayır (saf fonksiyon) |
| `MOTOR_NABIZ_SN`, `MOTOR_CANLI_LOG`, `MOTOR_ONBELLEK_DIZIN`, `MOTOR_ONBELLEK_KAPALI`, `MOTOR_ONBELLEK_BUDA_GUN`, `MOTOR_SUREC_DIZIN`, `MOTOR_SUREC_EBEVEYN`, `MOTOR_SUREC_ISCI_NO`, `MOTOR_ISCI_BETIK` | çeşitli | işletim | Hayır | Hayır |
| `MOTOR_DOLGU_ONBELLEK` | dolgu.py:157 (vars. 1200) | `_TALEP_ONB` tavanı (bellek↔hız) | **EVET** (`MOTOR_` öneki, işletim listesinde yok) → A önbelleği tamamen ıskalar | Hayır (dolgu tuzunda da yok → `dolgu2_*` kayıtları korunur) |
| `MOTOR_B_DOLGU`, `MOTOR_DOLGU_KESIT`, `MOTOR_DOLGU_*` (yarıçap/eşik/sadeleştirme…) | :10312, dolgu.py:77-121 | Ⓑ açma/kapama ve kural sabitleri | EVET | Evet (kural sabitleri) / `KESIT` yalnız dilim |
| `MOTOR_UFUK_BANT`, `MOTOR_YURUYUS*`, `MOTOR_SINIR_KISIT`, `MOTOR_*_KAPALI` vb. | uret_petek.py | motor davranışı | EVET | Evet |

Sonuç: **yalnız ortam değişkeniyle, tuzu bozmadan** değişebilecek bellek/CPU kolları: `MOTOR_SUREC_ISCI`, `MOTOR_PARALEL_ISCI`, `MOTOR_EZBER_TAVAN`,
`MOTOR_EZBER_TAVAN_PUAN`, `MOTOR_DEVAM`. `MOTOR_DOLGU_ONBELLEK`'i değiştirmek A önbelleğini boşa çıkarır; **ancak Koşu 41 zaten motor
değişikliğiyle tam yeniden inşa olacaksa bedeli sıfırdır** ve sonraki artımlı koşularda aynı değer kullanılmalıdır.
`dolgu.py`'ye tek bayt dokunmak bütün `dolgu2_*` kayıtlarını geçersiz kılar (dolgu.py:202); koşan Koşu 40'ta dolgu zaten bellekte yüklü olsa da
**Koşu 40'ın `arac/` dizinindeki dolgu.py'yi ya da uret_petek.py'yi değiştirme** (`motor_izi_dogrula` her aşama başı kodu doğrular, girdi.py:901-925;
Ⓑ içinde `import dolgu` :10315 gecikmeli içe aktarma). Başka dizinde (bu worktree) yapılan değişiklik koşuyu etkilemez.
Süreç düzeyinde ortam (MOTOR_ olmayan) bellek ayarı bulunamadı; Python/GEOS yığın davranışı ortam değişkeniyle ayarlanamıyor [bilmiyorum, denenmedi].

---------------------------------------------------------------------------------------------------

## 5. İşlemci tarafı

### 5.1 Gövde (FAZ 1) — döngüler ve tekrar hesap [KOD; süre payları ÖLÇÜLMEDİ]
Her gövde-dönem için sırayla (`_yabanci_devlet_faz1` :8683-8789):
1. `aktif` kümesi: `any(... for sp in YERLER[j]["s"])` döngüsü, devlet × gün (:8689-8693) — saf Python, O(|hj|×|s|) gün başına.
2. `_govde_anahtar` (:8739 → `_onb_parca_anahtar` :8597-8647): `_TUM_AGAC.query(geniş kutu)` + kutudaki **bütün yerleşimler** için bayt birleştirme,
   her petek için `_onb_oz` (nesne başına önbellekli). Rusya gibi büyük kutuda binlerce nokta/dönem.
3. Önbellek ıskalarsa `_yabanci_govde_hesap` (:8560-8587): `unary_union(petek)` → `kapat` (buffer(+r).buffer(−r), :3333) →
   `delikleri_doldur` (:3527-3591; her iç halka için `Polygon(h)` + STRtree sorgu + `contains`) → `gosterim_duzelt` (B2/B3) →
   **`g.intersection(KARA)`** (dünya karası; GEOS OverlayNG zarf kırpması kısmen yardım eder, dolgu.py'nin `KaraIndeks` deseni (:273-314)
   gövde kutusuna düşen kara parçalarıyla kesmenin ölçülmüş kazancını belgeliyor — burada uygulanmamış) → `_puan_bolgesi` (numpy ızgara + raster→poligon).
4. **Önbellek isabetinde bile her koşuda yeniden hesaplananlar** (anahtar bunları kapsamıyor, :8331-8333/:8741-8764): `_komsu_toprak_cikar`
   (:8432-8471: `_col_girinti_yumusat` → `kapat(r=0,5°)` iki büyük `buffer`; `_TUM_AGAC.query` kutu m=5°; `h.intersects(g)` Python döngüsü;
   `g.difference(unary_union(diger))`), `_eklenti_bolustur_ic` (:8511-8550: **`unary_union(own)` aynı birleşimi bir daha kurar**,
   `g.difference(ic)`, `voronoi_polygons`, `STRtree.nearest` döngüsü, `unary_union(benim)`, iki `intersection`). Yani "lego" önbelleği tam
   isabet etse bile gövde aşaması sıfıra inmez; bu iki işlev önbelleğin DIŞINDA. **En büyük "kolay" kazanç adayı**: sonuçlarını (gövde özeti + çevre
   sahipliği imzası anahtarıyla) ikinci bir katmanda önbelleğe almak. Risk: anahtar eksik girdi taşırsa bayat sonuç (sessiz) — motorun kendi dersi.
5. `_PUAN_ONBELLEK` gövdede isabetsiz (bkz. §1.4) → numpy `_puan_bolgesi` hesabı her dönem yapılır; kendisi `:7318-7323`te ayıklanmış.
6. Dönem sınırlı CPU bölünmesi: Rusya ≈ ETA ağırlığının **%22,2'si** tek iş (:9083-9084, :9118-9126; `PARALEL-TASARIM-0910.md §④` "devlet başına tavan 4,51×").
   ⇒ **5'ten fazla eşzamanlı iş parçacığı gövde aşamasını kısaltmaz** (en kısa süre = Rusya'nın tek iş parçacıklı süresi). N süreç × 4 iş parçacığı
   (ör. 3×4=12) bu sınırın çok üstünde → fazladan süreç yalnız bellek yer. [Ağırlık ölçümü 10 Eylül veri evrenine ait; bugünkü payı log
   `[SÜREÇ] … yük payı %` satırlarından okunur — ÖLÇÜLMEDİ].

### 5.2 Ⓑ ufuk bantları (:9973-10147) — tek süreç, tek çekirdek, bant × dönem [KOD]
- Dış döngü bant, iç döngü bütün `_BANT_AKTIF` (≈ yabancı ~4,4 bin + Osmanlı dönemleri). Her bantta `_bant_yabanci_govde` (:9937-9955) önbellek
  (anahtar bant paleti içerir) → ıskalarsa `_yabanci_govde_hesap(…, bant)`, sonra **her zaman** `_komsu_toprak_cikar(…, bant)` (§5.1-4).
  Osmanlı: `_bant_osmanli_govde` (:9958-9970) her seferinde `_osm_govde_hesap` + iki `_komsu_toprak_cikar` — önbelleksiz.
- `petek_epok(a, bant)`: her bant × benzersiz gün için "~15 sn/çağrı" (yorum :3366) yeni epok listesi; `_bant_onbellek_temizle` bunu her bant sonunda atar
  (:10094) → epok listeleri **bant başına yeniden** hesaplanır. 
- Bantlar birbirine bağımsız (anahtarda `("BANT", bant, …)`, :6222-6223) → **bant başına iş parçacığı/süreç** doğal paralelleştirme noktası; engel: `_bant_onbellek_temizle`
  global temizler ve `_BANT_HAM` küresel. Beklenen hızlanma ≤ bant sayısı (3 ya da 2 gerçek hesap, taban bant önbellek isabeti) [TAHMİN].

### 5.3 Ⓑ dolgu (tek çekirdek) [KOD; tasarım ayrıca var]
- `kosudan` her kesit için O(aralık sayısı) tarama: `for _ai,(f,t,kim,g) in enumerate(araliklar): _gk(f)<=_gk(a)<_gk(t)` (dolgu.py:1303-1304):
  ~11,4 bin aralık × kesit sayısı × 3 `lru_cache` çağrısı ≈ 10⁷-10⁸ çağrı → dakikalar; saatlerce süren Ⓑ içinde küçük, bisect ile kolay.
- `kesit_dolgu` (dolgu.py:928-1180) önce **kesitin bütün gövdeleri** için `_oz` sha ve anahtar kurar, `STRtree` kurar, `_TALEP_ONB`/sqlite sorgular;
  tam isabette kısa, ıskalamada `_talep` (buffer+buffer, :384-385), `_devlet_hesap` (çekişme, `_paylas` Voronoi, `_cins` tampon) pahalı. 1.242 `[yavas]`
  satırının 283'ü OSMANLI, 148'i ispanya (TASARIM §4). Kesit tekrarında önbellek devrede olduğundan kazanç **paralel kesit işçileri** (TASARIM-B).
- `_dg_duvar` (:10258-10280): `ak` anahtarlı ezber ama 400'de komple `.clear()` + (§2.3-2) sızıntıyla birlikte boşuna; `_dg_izgara` her kesitte
  `_gun_sahipleri(a)` + `sha1(repr(js))` her devlet için (:10294-10296) — O(yerleşim) Python.
- `_ONB_GEO.oku` her isabette **`UPDATE kayit SET zaman=?`** çalıştırır (motor_onbellek.py:95-100) → her okuma bir sqlite yazma işlemi; N süreç × 4 iş
  parçacığı aynı dosyada yazma kilidi için sıraya girer (`busy_timeout=600000`). Zaman damgasını yalnız >1 gün eskiyse güncellemek (ya da toplu) bu
  serileşmeyi kaldırır. **Bu motor_onbellek.py değişikliğidir → tuz değişir.** [KOD; maliyet ÖLÇÜLMEDİ]
- Python GC: milyonlarca küçük `[x,y]` liste nesnesi → döngüsel GC yüksek gen2 maliyeti; `gc.freeze()` (A bittikten sonra) ya da
  koordinatı liste yerine `array`/numpy tutmak CPU de kazandırır. [TAHMİN]

---------------------------------------------------------------------------------------------------

## 6. Öneriler (en çok bellek → en az), motor değişikliği mi / yalnız env mi

| # | Değişiklik | Tür | Çıktıyı değiştirir mi | Tahmini kazanç ve dayanak |
|---|---|---|---|---|
| 1 | Ⓑ'yi ayrı sürece al (TASARIM-B) **+ sarmalayıcıda** `dolgu._OZ_ONB.clear()` / kesit başı temizleme (dolgu.py'ye DOKUNMADAN, `dolgu_ayri.py` içinde monkeypatch) | motor (uret_petek.py döküm kipi + yeni dosya) | Hayır (bit denkliği sınavı gerekli) | Ⓑ sırasında 33,7 GB özel → Ⓑ sürecinin kendi payı (1-3 GB/dilim, TAHMİN). Dayanak: ÖLÇÜLDÜ 33,7 GB özel / 0,9 GB çalışma kümesi; yük A'dan miras. |
| 2 | `_ONB_OZ` temizliği (`_bant_onbellek_temizle` içine `_ONB_OZ.clear()`; kesin çözüm digest'i weak/`id`-bağımsız kurmak) + Ⓑ öncesi `del/clear` listesi (§2.2) + `PETEK_TAM` `del` | motor (uret_petek.py) | Hayır | Bant aşamasında epok alıcı poligonlarının biriken kopyası; **büyüklük ÖLÇÜLMEDİ** (Python `len(_ONB_OZ)` + koordinat toplamı ölçülmeli). Özel bayt OS'a dönmeyebilir (parçalanma). |
| 3 | Köşe depolamayı kompaktlaştır: `mp_koord` çıktısı / `ham[].mp` / `DEV_HALKA` / `OSM_HALKA` / `_ONB_GEO` yükü için WKB/`array('d')`; `halka_ix` anahtarı JSON yerine özet | motor | Hayır (3 ondalık yuvarlama korunmalı) | 128 B/köşe → 16 B/köşe. Havuz boyu = log satırı :9873 "yabancı havuz köşe A" × ~150 B (liste+JSON anahtarı). A bilinmiyor → bu sayı HAVVA log'undan okunmalı. Gövde FAZ 1 `ham` (tek devlet tüm dönemleri) tepe anı için de aynı oranda. |
| 4 | `MOTOR_SUREC_ISCI=1`, `MOTOR_PARALEL_ISCI=6-8` (Koşu 41 için; Koşu 40'ın kullandığı N bilinmiyor) | **yalnız ortam** | Hayır (`MOTOR_SUREC_ISCI`/`PARALEL_ISCI` işletim, tuz dışı) | Süreç sayısı kadar A yığını tekilleşir (N süreç ⇒ ~N× miras). Gövde süresi Rusya'ya bağlı (≈%22 tek iş) → 5+ iş parçacığı yeter (:9118-9126). Kayıp: iş parçacığı yolunda 64'lük pencere RAM'de (:9127) ve GIL'li Python kısımları; `MOTOR_DEVAM=1` pencereyi diske alır. Hız ÖLÇÜLMEDİ. |
| 5 | `MOTOR_EZBER_TAVAN_PUAN=64…256` | **yalnız ortam** | Hayır | Gövde aşamasında isabet ≈0 (anahtar dönem başına benzersiz) → `_PUAN_ONBELLEK` ücretsiz boşalır. Kazanç ≈ dönem sayısı × puan poligonu (TAHMİN: 1-3 GB/ana süreç, ÖLÇÜLMEDİ). Bedel: bant 2-3'te puan yeniden hesabı (tek çekirdek). |

Ek (CPU): `_komsu_toprak_cikar`+`_eklenti_bolustur_ic` sonuç önbelleği (§5.1-4) · bant aşamasını bant başına paralelleştirme (§5.2) ·
motor_onbellek `UPDATE` kaldırma (§5.3). Hepsi motor değişikliği.

## 7. Ölçülmesi gereken (kodla bilinemeyen)
1. Koşu 40'ta N (`[SÜREÇ] N/M devlet · yük payı %…` satırları) ve `MOTOR_*` değerleri.
2. Log :9873 `yabancı havuz köşe A → B` (havuz boyu) ve `dondurulan köşe`.
3. Ⓑ sırasında `commit` zaman serisi (düz mü, artıyor mu).
4. `len(_ONB_OZ)`, `len(dolgu._OZ_ONB)`, `len(_PUAN_ONBELLEK)`, `len(_VARLIK_ONBELLEK)`, `len(_SERBEST_ONBELLEK)` ve her biri için
   `sum(shapely.get_num_coordinates(...))` — `ARAC-BELLEK-OLC-1125.py`'ye eklenmeli (tracemalloc GEOS'u görmez).
5. `_DG_DUVAR_EZBER`in `.clear()` sayısı (kaç kez 400'ü aştı).
6. Rusya'nın gövde aşamasındaki bugünkü payı (ETA ağırlığı 10 Eylül ölçümü).
