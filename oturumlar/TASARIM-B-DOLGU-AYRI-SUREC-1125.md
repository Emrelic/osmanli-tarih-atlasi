# TASARIM — Ⓑ dolguyu motor sürecinden ayırmak ve tarih dilimleriyle paralel koşturmak

HAVVA 21 · 25 Kasım 2026 · borç satırları E-HAVVA-1125a / E-HAVVA-1125b (C-HAVVA-1125a ölçümüne bağlı).
Durum: **YALNIZ TASARIM.** Kod yazılmadı, motor koşturulmadı. Satır numaraları `havva-rapor-1124` dalındaki
`arac/uret_petek.py` (10.668 satır) ve `arac/dolgu.py` (1.580 satır) içindir.
İşaretler: **[ÖLÇÜLDÜ]** = Koşu 40'ta ölçüldü · **[KOD]** = kodda okundu · **[TAHMİN]** = ölçülmedi.

## 0. Neden

- **[ÖLÇÜLDÜ 25.11]** Koşu 40 Ⓑ aşamasında PID 6424: özel bellek 33,7 GB, çalışma kümesi 0,9 GB, sayfa hatası
  0/sn, 1 çekirdek %100; tepe çalışma kümesi 16,6 GB (önceki aşamalarda). Ⓑ 19.11 22:21'de başladı,
  25.11'de hâlâ sürüyor (5,5+ gün, tek çekirdek). Commit 49,5/54,5 GB.
- Yani Ⓑ'nin kendi bellek ihtiyacı küçük, ama A aşamalarının ~33 GB ölü yükünü taşıyan süreçte koşuyor ve
  tek çekirdeğe mahkûm. Ayırmak iki şey kazandırır: (1) Ⓑ sırasında bellek yükü kalkar, (2) Ⓑ dilimlere
  bölünüp N çekirdekte koşar.
- ⚠️ Ayırmak **tek başına 16 GB hedefini sağlamaz**: tepe 16,6 GB A'nın gövde aşamasındadır (bkz. §5).

## 1. Bugünkü akış

### 1.1 `uret_petek.py`

| Satır | Ne |
|---|---|
| :8227-8228 | `DEV_HALKA/DEV_PARCA` havuzları (→ `devletler_harita.js`) |
| :9423-9424 | `OSM_HALKA/OSM_PARCA` havuzları (→ `donemler.js` `PARCALAR/PARCA_HALKA`) |
| :9871 | `DEV_HALKA = seyrelt(...)` — yabancı havuz seyreltilir |
| :9885-9900 | `data/devletler_harita.js` YAZILIR (Ⓑ'den ÖNCE) |
| :10150-10182 | Ⓑ başlık yorumu: A'nın iki çıktısı da "bu satırda hazır ve bellekte", seyreltmeden SONRA çağrılmalı (dolgu tarayıcıdaki seyreltilmiş gövdeyle hizalı olmalı) |
| :10183-10186 | `_DG_DUVAR_KM=250`, `_DG_HATLAR`, `_DG_DUVAR_EZBER`, `_DG_GRID_OZ` |
| :10189-10196 | `_dg_bk(p)` — hat tarafı/sahip → dolgu `kim` (`BOYALAR`, `_HARITA_ALT`) |
| :10199-10255 | `_dg_duvar_hazirla()` — duvar hatlarını bir kez kurar |
| :10258-10280 | `_dg_duvar(a)` |
| :10283-10298 | `_dg_izgara(a)` |
| :10301-10309 | `_dg_engel(a)` |
| :10312-10349 | `MOTOR_B_DOLGU=1` ise: `_b_ar` kurulur (:10316-10326 — Osmanlı `donemler` × `_coz(o+v, OSM_HALKA, OSM_PARCA)`, sonra her `DEVLET_KAYIT.dnm` × `_coz(g, DEV_HALKA, DEV_PARCA)`), `dolgu.kosudan(_b_ar, KARA, data/dolgu.js, kesit_sinir, izgara_fn, duvar_fn, engel_fn)` (:10327-10331), kabul satırları (:10337-10345: `Ⓑ dolgu DUVAR: aşan … (kabul: 0)`, `SESSİZ YUTMA`) |
| :10353 | Ⓑ'den SONRA: "Çıktı yazımı (petek_govde.js + donemler.js)" |
| :10595-10596 | `data/donemler.js` YAZILIR (Ⓑ'den SONRA) |

**[KOD]** Sonuç: Ⓑ başladığında `devletler_harita.js` diskte, `donemler.js` değil. Bugünkü `dolgu._ana`
iki dosyayı da okuduğu için motordan sonra çağrılmalı ya da girdiyi motor kendisi dökmeli (§2.4).

### 1.2 `dolgu.py`

| Satır | Ne |
|---|---|
| :49 | `YUTMA = {}` (sessiz yutma sayacı) |
| :122 | `_CTX` — kesit bağlamı (izgara/duvar/engel/kara) modül global'i; `kesit_dolgu` girişinde yazılır |
| :125 | `SAYAC` — `duvar_gecen_n/km2`, `delik_*`, `surtunme/voronoi` |
| :136 | `YOL = MOTOR_BDOLGU_YOL` (varsayılan `devlet`) |
| :155-158 | `_TALEP_ONB` süreç içi kapanış önbelleği, anahtar = **aralık indeksi**, tavan `MOTOR_DOLGU_ONBELLEK=1200` |
| :199-215 | `KURAL_SURUM="dolgu-kural-3"`, `_ONB_TUZ` = sürüm + **`dolgu.py`nin sha256'sı** + kural sabitleri; SQLite `MOTOR_ONBELLEK_DIZIN/motor_onbellek.sqlite` |
| :220-231 | `_oz(g)` = WKB sha256 (içerik adresi) |
| :273-297 | `KaraIndeks`; `self.oz = _oz(kara)` (:297) |
| :666-678 | `_ctx_oz` — ızgara (`grid_oz` + `devlet_oz`), kendi duvarı, engel özeti anahtara girer |
| :928-1062+ | `kesit_dolgu(govdeler, kara, kara_hazir, r_km, izgara, duvar, engel)`; kanonik sıra (:947); kesit anahtarı `dolgu2_kesit` (:968-976); gövde kapanışı `dolgu2_talep` (:1036-1048, anahtar = kara özü + r_km + gövde WKB özü; `[yavas]` satırı :1045-1047) |
| :1198-1222 | `Havuz` — halka/parça havuzu, **ekleme sırasına göre indeks** |
| :1225-1241 | `_birlestir` — (k, c, halka dizisi) aynıysa ve `onc.t == a` ise `t` uzatılır |
| :1244-1267 | `js_yaz` |
| :1273-1323 | `kosudan(...)` — motor içi yol: her tarihte `govdeler = [(kim, g, _ai)]` (her aralık AYRI gövde), üç kanca çağrılır |
| :1345-1364 | `_coz` |
| :1367-1408 | `_kara_yukle` — **kendi** kara maskesi (simplify 0,002, göl simplify 0,01, pickle) |
| :1411-1433 | `_kesitler` — A çıktısını dosyadan okur |
| :1436-1578 | `_ana` — tek başına yol; `MOTOR_DOLGU_TARIH_BAS/SON`, `MOTOR_DOLGU_KESIT` (:1456-1469) |

### 1.3 `_ana` bugün motor içi yolla AYNI ŞEYİ ÜRETMEZ — üç fark [KOD]

1. **Kancalar yok:** `kesit_dolgu(govdeler, kara, kara_hazir)` (dolgu.py ~:1514) — izgara/duvar/engel
   `None` ⇒ yama öncesi davranış (Voronoi paylaşım, duvarsız, her delik aday; :115-121 yorum).
2. **Gövde gruplaması farklı:** `_ana` aynı (kim, kaynak) için o gün canlı bütün aralıkların indekslerini
   birleştirip TEK gövde yapar (:1484-1503); `kosudan` her aralığı ayrı gövde olarak verir (:1303-1304).
   Farklı girdi ⇒ farklı `dolgu2_*` anahtarı ve olası farklı sonuç.
3. **Kara maskesi farklı:** motor `KARA`yı kendi kurar (uret_petek.py :814-894, `KARA_TOL` simplify +
   `GOLLER` farkı); `_ana` `_kara_yukle()` ile ayrı parametrelerle kurar. `KaraIndeks.oz` farklıysa her
   önbellek anahtarı ıskalar ve sonuç değişir. **[TAHMİN: büyük ihtimalle farklı; ölçülmedi.]**

⇒ `_ana`yı olduğu gibi kullanmak bit denkliğini bozar. Tasarım `_ana`yı DEĞİL, `kosudan`ın döngüsünü
taklit eden yeni bir koşturucu öneriyor (§2.4).

## 2. Kancaların bağımlılıkları ve diske dökme

### 2.1 `_dg_izgara(a)` (:10283-10298)
Okur: `_YR_SAHIP` (ny×nx int32 yürüyüş sahiplik ızgarası, :2173/:2185), `_kvx0`, `_kvy0`, `KV_ADIM`
(:1329, 0,05°), `_gun_sahipleri(a)` (:8406-8429), `_dg_bk` (→ `BOYALAR`, `_HARITA_ALT` :470).
`_gun_sahipleri` derin A mantığıdır: `devir_kumesi(a)`, `_osm_aktif(y,a)`, `YERLER[*].s`, `DOLGU_ACIK` ise
`_dolgu_kumesi(a)`. **Ayrı süreçte yeniden hesaplanmamalı** — sonucu dökülmeli.
Döndürdüğü: `{"sahip": _YR_SAHIP, "x0","y0","adim", "kim": {j: kim}, "grid_oz", "devlet_oz": {kim: sha1(sıralı j listesi)[:12]}}`.

### 2.2 `_dg_duvar(a)` (:10258-10280) ve `_dg_duvar_hazirla()` (:10199-10255)
Okur: `SINIR_KISIT` (:519), `SINIR_KISIT_SINIF` (:526), `_SK_HAM` (:528/545, d_sinirlar hatları),
`_sk_pad` (:500), `gn` (:3284), `_sk_aff`, `temiz` (:165), `unary_union`, `_dg_bk`, `_sk_tabi_mi(p,a)` (:7993 → `_SK_TABI`).
Döndürdüğü: `{kim: geometri}` — o gün aktif hatların karşı yakalarının birleşimi.

### 2.3 `_dg_engel(a)` (:10301-10309)
Okur: `_mo_gunu` (:5682 → `_MO_SINIR_N`), `_mo_sahne_disi` (:5700 → `YERLER` kur/bit, `_ortuk_kur`),
`_gun_sahipleri(a)`, `YERLER[*].bos`, `noktalar` (:2736).
Döndürdüğü: `MultiPoint(pts)` (j sırasıyla) ya da `None`.

### 2.4 Önerilen dökme biçimi (motor Ⓑ'yi koşturmak yerine bunu yazar)

Kesit tarihleri `tarihler = sorted({f for (f,t,kim,g) in _b_ar})` — `kosudan` ile aynı küme (dolgu.py :1295).
Her öğe **içerik adresli ve sıralı** dökülür ki ayrı süreç aynı WKB'yi, aynı sırayı, dolayısıyla aynı anahtarı üretsin.

| Dosya | İçerik | Biçim | Boyut |
|---|---|---|---|
| `b_ar.bin` | `_b_ar` sırasıyla `(f, t, kim, WKB)` — `_coz` SONRASI geometri | uzunluk-önekli kayıt / SQLite tablo | [TAHMİN] 0,2-1 GB (11.384 dönem + Osmanlı; ölçülmedi) |
| `kara.wkb` | motorun `KARA`sı (seyreltme ve göl farkı dahil) | WKB | [TAHMİN] 50-200 MB |
| `yr_sahip.npy` | `_YR_SAHIP` + `_kvx0, _kvy0, KV_ADIM` | `.npy` + json | [TAHMİN] ~80 MB (dünya kutusu 0,05° ⇒ ~7.200×2.900 int32; gerçek `_kvnx/_kvny` :1333-1334 ölçülmedi) |
| `kesit_baglam.jsonl` | her kesit tarihi için: `izgara.kim` (j→kim), `duvar` aktif hat indeks demeti, `engel` j listesi | JSONL, satır = tarih; `kim` önceki tarihe göre fark olarak | [TAHMİN] 50-300 MB (tarih sayısı ≈2.000 eski tahmin :10170; yerleşim sayısı bugün ölçülmedi) |
| `duvar_hatlar.bin` | `_DG_HATLAR`: id, f, t, ks, kg, sol_ham, sag_ham, `yaka` iki WKB | WKB + json | [TAHMİN] 10-100 MB (Koşu 40: 453 hat) |
| `noktalar.bin` | `noktalar[j]` lon/lat (engel MultiPoint'i aynı sırayla kurmak için) | float64 dizi | küçük |
| `meta.json` | `_ONB_TUZ` parmak izi, `MOTOR_*` ortamı, `KURAL_SURUM`, dolgu.py sha256, `r_km`, `kesit_sinir`, girdi/motor izi | json | küçük |

Ayrı süreç bunlardan **aynı nesneleri** kurar:
- izgara: `{"sahip": yr_sahip, …, "kim": kim_t, "grid_oz": sha1(yr_sahip.tobytes())[:16], "devlet_oz": …}` — :10289-10298'in birebir kopyası (aynı sha1 girdisi: `repr(sorted j listesi)`).
- duvar: `_dg_duvar`'ın :10270-10279 birleştirmesi, aynı sıra (`ak` sırası, `per.setdefault` sırası) ⇒ aynı `unary_union` girdisi.
- engel: `MultiPoint([noktalar[j] for j in liste])`, j sırası korunur.

**Bağlama:** `dolgu.py`ye DOKUNMADAN yeni bir koşturucu (öneri adı `arac/dolgu_ayri.py`): `import dolgu`,
dökülen girdiyi okur, `kosudan`ın döngüsünü (:1301-1318) aynen uygular ve `dolgu.kesit_dolgu(...)`ı
üç kanca değeriyle çağırır. Gerekçe §6.1 (dolgu.py'nin hash'i dolgu önbellek tuzundadır).

## 3. Bit denkliği

### 3.1 Anahtarlar ayrı süreçte aynı kalır mı? [KOD]
- `dolgu2_talep` anahtarı (:1036) = `_kara_oz` + `r_km` + `_oz(g)`. `_oz` WKB sha256'dır. Gövde motor
  belleğinden WKB olarak dökülüp okunursa WKB birebir döner ⇒ **aynı**. Ama `kara` da aynı olmalı: motorun
  `KARA`sı dökülmeli, `_kara_yukle()` KULLANILMAMALI (§1.3-3).
- `dolgu2_kesit` anahtarı (:968-972) = `YOL` + kara özü + r_km + sıralı (kim=gövde özü) + `_ctx_oz` (ızgara
  özü + devlet özleri + engel özü) + sıralı duvar özleri. Bağlam nesneleri §2.4'teki gibi aynı sırayla
  kurulursa **aynı**.
- `_TALEP_ONB` (süreç içi, :155) anahtarı aralık indeksi `_ai`; yalnız hızı etkiler, sonucu değil. Dilimli
  koşuda aralık indeksi `_b_ar`daki **küresel** sıra olarak korunmalı (karışıklık olmasın diye).
- SQLite tuzu (`dolgu._ONB_TUZ` :200-215) dolgu.py içeriğine ve kural sabitlerine bağlı; ortam aynı ve
  dolgu.py değişmemişse **aynı** ⇒ Koşu 40'ın 11,8 GB önbelleği isabet verir. [Koşu 40 önbelleğinin ne
  kadarının `dolgu2_*` olduğu ölçülmedi.]

### 3.2 Sınav (dar dilim)
1. Aynı girdi ve kodla motor içi Ⓑ'yi `MOTOR_DOLGU_KESIT=N` (ör. 20 kesit, :10329) ile koştur → `dolgu.js` A.
2. Motorun döküm kipiyle aynı N kesitlik girdi dök; `dolgu_ayri.py` ile koştur → `dolgu.js` B.
3. **Kabul:** A ve B bayt bayt aynı (`DOLGU_IZI` hariç değil — o da aynı olmalı); `SAYAC` ve `YUTMA`
   satırları aynı; iki yönde sına: önbellek KAPALI (`MOTOR_ONBELLEK_KAPALI=1`) ve AÇIK.
4. Ters sınav: bir kancayı bilerek `None` ver ⇒ çıktı DEĞİŞMELİ (sınavın kör olmadığını gösterir).

## 4. Tarih dilimli paralellik

- **Dilimleme:** tarih listesi K dilime bölünür (`[bas_k, son_k)`). Her dilim süreci yalnız kendi
  tarihlerini işler, yalnız o dilimle kesişen aralıkları yükler (bellek kazancı).
- **`_birlestir` sorunu [KOD]:** `Havuz` indeksleri ekleme sırasına bağlı (:1206-1222) ve `_birlestir`
  önceki kesitle karşılaştırır (:1236). Dilimler kendi `Havuz`unu kurarsa indeksler farklı olur ve dilim
  sınırında bir kayıt ikiye bölünür ⇒ çıktı sıralı koşudan FARKLI olur.
- **Çözüm — üretim ve birleştirme ayrı:** dilim süreci her kesit için `kesit_dolgu`nun `parcalar`ını
  HAM olarak yazar: `(tarih, kim, cins, [_halka_koord(x) for x in _parcalar(g)])` (dolgu.py :1186, :252).
  Tek bir **birleştirme süreci** bütün dilim dosyalarını tarih sırasıyla okur, TEK `Havuz` ve
  `_birlestir`'i `kosudan` :1312-1316'daki gibi sırayla uygular, `js_yaz` eder. Birleştirme geometri
  hesabı yapmaz (ucuz). Ekleme sırası sıralı koşuyla aynı olduğu için `dolgu.js` **bayt bayt aynı**
  olmalı — sınavla kanıtlanacak (§3.2'nin dilimli hâli: K=1 ile K=4 aynı çıktı).
- **Sayaçlar:** her dilim `SAYAC` ve `YUTMA`yı dosyaya yazar, birleştirme toplar; kabul satırı
  (:10338-10345) toplam üzerinden basılır.
- **Dilim başına bellek [TAHMİN, ölçülmedi]:** kara + ızgara + o dilimin aralık geometrileri + süreç içi
  önbellek (tavan 1.200) ⇒ dilim başına 1-3 GB. Ölçüm şart (C-HAVVA-1125a aracı dilim sürecine de uygulanabilir).
- **SQLite eşzamanlı yazım [KOD]:** `motor_onbellek.py` :52-55 `journal_mode=WAL`, `busy_timeout=600000`,
  `timeout=600` ⇒ yazarlar sıraya girer, veri bozulmaz; ama kilit beklemesi süreyi uzatabilir
  [TAHMİN]. Motorun süreç işçileri aynı dosyayı zaten paylaşıyor (emsal). İstenirse her dilim kendi geçici
  SQLite'ına yazar, birleştirmede ana dosyaya aktarılır.
- **Yük dengesi [TAHMİN]:** tarihler eşit sayıda bölünürse dilimler eşit sürmez (yavaş kapanışlar belli
  devletlerde: Koşu 40 Ⓑ log'unda 1.242 `[yavas]` satırının 283'ü OSMANLI, 148'i ispanya). Dilimler
  küçük tutulup havuzdan çekilmeli (iş kuyruğu), sabit bölme değil.
- **Hızlanma [TAHMİN]:** önbellek isabeti yokken kabaca çekirdek sayısı kadar; tam önbellek isabetinde
  zaten hızlı. Ölçülmedi.

## 5. Bellek kazancı beklentisi ve ölçülmesi gerekenler

| Aşama | Bugün | Ayırma sonrası |
|---|---|---|
| A (ön aşamalar + gövde) | tepe çalışma kümesi 16,6 GB [ÖLÇÜLDÜ] | DEĞİŞMEZ — döküm A bitince yapılır |
| Ⓑ | 33,7 GB ayrılmış, 0,9 GB çalışma kümesi [ÖLÇÜLDÜ] | motor süreci döküm sonrası çıkar ⇒ 33 GB serbest; Ⓑ dilim başına 1-3 GB [TAHMİN] |

- **16 GB hedefi için ayrıca gerekir:** A gövde aşamasının tepesini 16,6 GB'tan aşağı çekmek. Bu
  C-HAVVA-1125a ölçümüne bağlıdır (`denetim/ARAC-BELLEK-OLC-1125.py`): aşama başı özel bellek, çalışma kümesi
  ve `_VARLIK_ONBELLEK`, `_KUS_ONBELLEK`, `_DOLGU_ONBELLEK`, `_PUAN_ONBELLEK`, `PETEK_D` boyları.
- Ölçülecekler: (1) döküm dosyalarının gerçek boyu, (2) dilim sürecinin tepe belleği, (3) K dilimde
  toplam bellek (K × dilim), (4) SQLite kilit beklemesi, (5) sıralı/dilimli süre.

## 6. Riskler, dondurma ve tuz, uygulama sırası, kabul

### 6.1 Motor dondurma ve tuz [KOD]
- Motor tuzu (`uret_petek.py` :642-656): `_MOTOR_IZI = girdi.motor_izi()` (:631; girdi.py :855 —
  `uret_petek.py`, `renkler.py`, `girdi.py`) + `motor_onbellek.py` + `gun.py` + bütün `MOTOR_*` ortamı
  (`_ONB_ISLETIM` hariç, :642-647). **`dolgu.py` motor tuzunda YOK.**
- `dolgu.py` kendi tuzunda: `_ONB_TUZ["modul"]` = dolgu.py sha256 (:202). ⇒ **dolgu.py'ye tek bayt
  dokunmak bütün `dolgu2_*` önbelleğini geçersiz kılar** — yani Ⓑ'nin 5,5 günlük hesabı baştan. Bu yüzden
  yeni kod `dolgu.py`ye DEĞİL ayrı dosyaya (`dolgu_ayri.py`) yazılmalı ve `dolgu`yu yalnız import etmeli.
- `uret_petek.py`ye döküm kipi eklemek motor tuzunu değiştirir ⇒ A için **bir kez** tam yeniden inşa
  (Koşu 40'ta A kısmı 21 sa 32 dk sürdü [ÖLÇÜLDÜ, DONANIM-1124]). Kaçınılmaz; en az bir koşu bedeli.
- `MOTOR_B_DOLGU` bir `MOTOR_*` değişkeni ve `_ONB_ISLETIM`de değil ⇒ değerini değiştirmek (ör. `dok`)
  de tuzu değiştirir. Döküm kipi motor koduna eklenirken bu da aynı yeniden inşanın içinde kalır.
- Kural: motor koşarken bu commit `main`e girmez; Koşu 41 Emre'nin "başla"sıyla.

### 6.2 Riskler
- Bit denkliği sınavı geçmezse (WKB, sıra, kara) Ⓑ çıktısı sessizce değişir — §3.2 olmadan yayın yok.
- `donemler.js` Ⓑ'den sonra yazıldığı için (:10595), Ⓑ'nin `_b_ar`ı ile yayın dosyasının aynı olduğu
  ayrıca doğrulanmalı (:10353-10595 arasında `donemler`/`OSM_HALKA`nın değişmediği okunmadı — DOĞRULANMALI).
- Döküm boyu tahminden büyük çıkarsa disk/IO yükü.
- Dilim süreçleri aynı anda çok bellek isterse (K × dilim) 16 GB aşılabilir ⇒ K, ölçüme göre seçilmeli.
- Kancaların `_DG_DUVAR_EZBER` gibi ezberleri yalnız hız içindir; ayrı süreçte yeniden kurulur.

### 6.3 Adım adım uygulama sırası
1. C-HAVVA-1125a: Koşu 40 inişinden sonra bellek ölçümü (A tepesi, yapı boyları).
2. `uret_petek.py`: `MOTOR_B_DOLGU=dok` kipi — Ⓑ yerine §2.4 dosyalarını yazar ve çıkar (`kosudan`'ı çağırmaz). Mevcut `=1` kipi aynen kalır (sınavın karşı tarafı).
3. `arac/dolgu_ayri.py` (yeni): döküm okur, `kosudan` döngüsünü taklit eder, `--bas/--son` dilim, ham parça dosyası yazar.
4. `arac/dolgu_birlestir.py` (yeni ya da aynı dosyada alt komut): dilim dosyaları → tek `Havuz` + `_birlestir` → `data/dolgu.js` + kabul satırları.
5. Dar dilim bit denkliği sınavı (§3.2) — önbellek kapalı ve açık, K=1 ve K=4.
6. Koşu 41 ya da sonrası: Emre onayıyla tam koşu, `MOTOR_SUREC_ISCI=1`, Ⓑ dilimli.
7. `KOSU-YAYIN.md` iniş zincirine `dolgu_ayri` + `dolgu_birlestir` adımı eklenir.

### 6.4 Kabul ölçütleri
- `Ⓑ dolgu DUVAR: aşan 0 parça` (uret_petek.py :10338; kabul 0) — birleştirilmiş sayaçla.
- `Ⓑ dolgu SESSİZ YUTMA` satırı basılır (0 da basılır).
- Dar dilimde motor içi (`MOTOR_B_DOLGU=1`) ile ayrı süreç (`dok` + `dolgu_ayri` + birleştirme) `dolgu.js` bayt bayt aynı; K=1 ile K≥2 aynı.
- Ⓑ sırasında makine toplam bellek tepe değeri ölçülür ve raporlanır (hedef: dilimler toplamı + işletim ≤ 16 GB koşu payı).
- Önbellek karnesi (dolgu.py `_ONB.ozet()`) ilk koşuda ıskalama, ikinci koşuda isabet gösterir.

## 7. Bilinmeyenler (özet)
Ölçülmedi: kesit tarihi sayısı (bugün), yerleşim sayısı (bugün), döküm boyları, dilim belleği, SQLite kilit
beklemesi, hızlanma, Koşu 40 önbelleğinin `dolgu2_*` payı, `_kara_yukle` ile motor `KARA`sının farkı,
:10353-10595 arasında Osmanlı havuzunun değişip değişmediği.
