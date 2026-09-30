# UFUK-DUGME-0930 — 5/7/10 gün ufuk düğmesi · Aşama ① ölçüm + ② tasarım önerisi

Oturum: UFUK-DUGME-0930 · 30 Eylül 2026 · koordinatör YILDIRIM BAYEZIT
Durum: ② ONAYLANDI · **③ aşama 1 UYGULANDI** (§③ aşağıda) · aşama 2 (biçim okuyucusu +
tarayıcı ölçümü) kodlanmış bant dosyasını bekliyor.

## ① ÖLÇÜM

### Veri
| ne | ölçüm |
|---|---|
| `data/ufuk_bantlari.js` ana ağaçta | **YOK** (`ls`: No such file) |
| `C:/atlas-kosu17/data/ufuk_bantlari.js` | **265.320.865 bayt** (253 MiB), 28 Eyl 14:17 — yalnız `ls -la`, okunmadı |
| aynı şemanın ölçü tabanı `data/donemler.js` | 57.455.085 bayt |

### Arayüz — %95'i ZATEN YAZILI (sıfırdan yazılmayacak)
| parça | yer | durum |
|---|---|---|
| tembel yükleyici `ufukYukle()` (`<script>` ekler, `parcaCoz` çağırır) | `js/app.js:661-697` | var, çalışır |
| çizici `ufukGuncelle(t)` — seçili ufka kadarki ARTIŞ bantlarını birleştirir, taban (≤5) çizilmez, imza kapılı | `js/app.js:699-725` | var |
| seçici `ufukSeciciKur()` — `#ufuk-sec` change → yükle → `setLayoutProperty` | `js/app.js:727-750` | var |
| veri kapısı `bVeriKapisi()` — dosya yoksa 7/10 pasif + gerekçe, tembel HEAD | `js/app.js:761-812` | var |
| kaynak `ufuk-bant` + katman `ufuk-bant-alan` (`devlet-dolgu`nun ALTINDA, yalnız fill) | `js/app.js:1905-1909` | var |
| gün döngüsü çağrısı | `js/app.js:9513` | var |
| `KATMAN_KUMESI` kovası `ufuk` (`dolgu`dan sonra, `yollar`dan önce; kutusu YOK, bilerek) | `js/app.js:15755` | var |
| **`<select id="ufuk-sec">` satırı** | `index.html:121-130` | **29 Eylül'de KALDIRILDI** (yayında 404) — yorumda geri konacak satır duruyor |
| `.secici-satir` · `.b-pasif` CSS | `css/style.css:2894 · 3199` | var |

`parcaCoz(dizi, havuz, parcaHalka)` (`js/app.js:133`) — bant aynı üçlü şemayı
(`g` → `UFUK_BANT_PARCA` → `UFUK_BANT_PARCALAR`) kullanıyor, yükleyici onu doğrudan çağırıyor.

### Ölçülen kusurlar (mevcut kodda)
1. **İki denetleyici tuzağının yarısı:** `ufukGuncelle` açık/kapalıyı kendi `var ufukGun`
   sayacından okuyor, katmanın GERÇEK `visibility`sinden değil. `dolguGuncelle`
   (`js/app.js:817`) bunu `getLayoutProperty` ile doğru yapıyor; ufuk yapmıyor.
2. **Hevesli çözüm:** `ufukYukle` 12.180 devlet-dönemin HEPSİ için `parcaCoz` çağırıp
   GeoJSON kuruyor — ekranda o gün ~birkaç düzine gerekirken.
3. **Taban bant ölü yük:** `ufukGuncelle` `b.gun <= 5` bandını hiç çizmiyor (A'nın
   kendisi), ama dosya onu taşıyor: 4.776 / 12.180 kayıt = **%39** (kayıt sayısıyla;
   bayt payı ölçülmedi).

### Tarayıcı bedeli — ÖLÇÜLEN taban + DOĞRUSAL KESTİRİM
Node 22 (V8, Chrome'la aynı motor), `vm.runInContext`, `data/donemler.js`:
```
57,5 MB  → ayrıştır+çalıştır 9.967 ms · heap +494 MB   (ÖLÇÜLDÜ)
265 MB   → ~46 sn · heap ~2,3 GB                       (KESTİRİM, ×4,6 doğrusal — ölçülmedi)
```
+ madde 2'nin hevesli `parcaCoz`u bunun üstüne biner. Boş RAM ölçüm anında 2,37 GB.
⇒ **Bugünkü biçimde dosya tarayıcıda kullanılamaz** (sekme ya çöker ya ~1 dk donar).

🔴 **Ve yayına hiç çıkamaz:** GitHub dosya başına **100 MB** üst sınır koyar
(push reddedilir). 265 MB tek dosya `main`e girmez. ⇒ Kodlama/bölme bir tercih değil ŞART.

## ② TASARIM ÖNERİSİ

**Düğme:** `index.html`e yorumda bekleyen `<select id="ufuk-sec">` satırını geri koymak
değil, aynı yere (⑥ Dolgu'nun altı) **üç şıklı segment düğme**: `5 gün · 7 gün · 10 gün`
(radyo grubu, `name="ufuk"`). Emre "switch" dedi; açılır liste iki tık, segment tek tık ve
seçili ufuk hep görünür. Tek denetleyici kalır (kova `ufuk` kutusuz, `uygula()` dokunmaz).

**Durum gerçeği:** `ufukGuncelle` `dolguGuncelle` desenine çevrilir —
`getLayoutProperty("ufuk-bant-alan","visibility")` "none" ise imzayı sıfırlayıp çıkar;
`ufukGun` yalnız "hangi ufuk" değeri olarak kalır, "açık mı" sorusunu katman cevaplar.
Radyo grubunun işaretli şıkkı da açılışta katmandan türetilir.

**Fetch:** istek üzerine, bir kez, bellekte önbellek (bugünkü `ufukVeri`); bayt önbelleği
tarayıcının (`?v=rNNNN` damgası). Açılışta HİÇ indirme yok; HEAD yoklaması yalnız düğmeye
yaklaşınca (bugünkü davranış). Yüklenirken seçili şıkta "yükleniyor…" rozeti — sessiz
bekleme yok.

**Çözüm TEMBEL:** `ft` hepsi için değil, `ufukGuncelle`de `aktifAralik` tutan kayıt için
ilk kez gerektiğinde kurulur ve saklanır.

**Kodlanmış biçimden istediklerim (`kodla.py` 4. hedef için, karar senin):**
1. Taban bandı (≤5) **dosyaya girmesin** — arayüz onu hiç çizmiyor (%39 kayıt).
2. **Bant başına ayrı dosya** (`ufuk_bant_7` · `ufuk_bant_10`): 7 seçilince yalnız 5-7
   iner; 10 seçilince ikisi. Her dosya < 100 MB (GitHub sınırı) ŞART.
3. Mümkünse **zaman dilimi (ör. yüzyıl) başına parça** — o zaman yükleyici yalnız
   görünen günün dilimini çeker; tarayıcı bedeli dilim boyutuna iner.
4. Yükleyiciye biçimi bir alanla söyle (`UFUK_BANT_IZI.bicim`) — okuyucu bilmediği
   biçimi sessizce yanlış çözmesin (D240), sayıp konsola bassın.

Bunlar gelince yükleyiciyi o biçime uyarlarım; `parcaCoz` aynı kalır.

## Ölçülemeyen / bulunamadı
- Bant dosyasının bant başına bayt payı: ölçülmedi (dosyayı okumak yasaktı).
- 265 MB'ın gerçek tarayıcı ayrıştırma süresi: ölçülmedi (kestirim; RAM darboğazında
  koşunun yanında 2+ GB'lık deney yapılmadı).

---

## ③ AŞAMA 1 — UYGULANDI (koordinatör onayı sonrası)

### Değişen dosyalar (yalnız izinli üçü + bu rapor + ölçüm aleti)
| dosya | ne |
|---|---|
| `index.html` | 29 Eyl'de silinen seçici yerine **⑥b Ⓑ Ufuk** segment düğmesi: `#ufuk-sec` radyo grubu (`name="ufuk-gun"`, 5·7·10), `data-katman` YOK. CRLF korundu (1908/1908). |
| `css/style.css` | `.ufuk-satir` · `.ufuk-segment` (radyo gizli, seçili şık `#8e0b22`, pasif şık soluk) |
| `js/app.js` | aşağıdaki dört düzeltme · `node --check` temiz |
| `denetim/ARAC-UFUK-DUGME-0930-TABAN.py` | (a) ölçüm aleti |

### js/app.js
1. **Kusur (1) düzeldi — açıklık KATMANDAN:** yeni `ufukAcik()` =
   `getLayoutProperty("ufuk-bant-alan","visibility") !== "none"`. `ufukGuncelle`
   kapalıysa imzayı sıfırlayıp çıkar (`dolguGuncelle` deseni). `ufukGun` yalnız
   "hangi ufuk". Düğmenin işaretli şıkkı `ufukSecimEsitle()` ile katmandan türetilir.
2. **Kusur (2) düzeldi — `parcaCoz` TEMBEL:** yüklemede yalnız `fi/ti`; `ft` kayıt o gün
   ilk kez aktif olunca `ufukGuncelle` içinde kurulup saklanır.
3. **(d) biçim kapısı:** `UFUK_BICIMLER = {ham:true}`; `UFUK_BANT_IZI.bicim` yoksa "ham"
   (motorun ham çıktısı). Tanınmayan biçim → katman ÇİZİLMEZ, rozette **"biçim
   tanınmadı"**, konsolda tanınanlar listesiyle `warn`. Aşama 2'de kodlanmış biçimin adı
   bu sözlüğe eklenecek.
4. **Sessiz geri dönüş kalktı:** yükleme başarısızsa şık 5'e döner AMA rozet sebebi
   yazar (`yok` · `bant yok` · `biçim tanınmadı`); yüklenirken rozet `yükleniyor…`.
   Yükleme sürerken gelen ikinci tık kaybolmuyor (`ufukBekleyen` kuyruğu — eskiden
   `if (ufukYukleniyor) return;` geri çağrıyı düşürüyordu). HEAD yoklaması `focus` →
   `focusin` (span'de `focus` baloncuklanmaz).

### (a) TABAN BANT — ÖLÇÜLDÜ ⇒ **KALSIN**
Motor okundu: taban bandın devlet-dönemi = `unary_union(PETEK_D[aktif])`
(`uret_petek.py` ~7870) ve `petek_govde.js` = `PETEK_D` (~7990). Boyalı A = `DONEMLER[k].o ∪ v`.
`py denetim/ARAC-UFUK-DUGME-0930-TABAN.py` · 30 rastgele Osmanlı dönemi (evren 589, tohum 930):
```
MEDYAN |Δalan| %1,181 · MEDYAN simetrik fark %1,185 · en büyük %2,583
```
**%1,18 > %0,5 eşiği ⇒ taban bant dosyadan ÇIKARILMAZ.**
Ek gözlem: 30'un 30'unda A > taban ve simfark ≈ |Δalan| ⇒ taban neredeyse tamamen A'nın
İÇİNDE; boyalı gövde ham peteklerden ~%1,2 DIŞARI taşıyor (örtü boru hattı). Yani 7 gün
açılınca A'nın kenarında BOŞLUK beklenmez; bant A'nın altına ~%1 biner, A opak olduğu
için görünmez. ⚠️ İlk koşu yalnız `o` ile %25 verdi — aktif küme tâbiyi (`v`) de kapsıyor.
**Kapsam:** yalnız OSMANLI ölçüldü; yabancı A (`devletler_harita.js`, 177 MB) RAM
darboğazında yüklenmedi ⇒ yabancı için **ölçülemedi**.

### Aşama 2'ye devreden gözlem (ölçülmedi, kod okundu)
Osmanlı bandının aktif kümesi tâbiyi kapsıyor ama bant rengi `DOLGU_RENK[r.d]` =
OSMANLI koyu kırmızısı ⇒ tâbi bir devletin (açık kırmızı) ötesindeki 5-7 gün artışı KOYU
kırmızı çizilebilir. Tarayıcıda gözle bakılmalı.

### Tarayıcı doğrulaması — YAPILMADI
Boş RAM 1,14 GB iken koşu 18 sürüyordu; atlas ~157 MB indirip ~1 GB heap kuruyor.
Koşuyu riske atmamak için aşama 2'ye (koşu bitince) bırakıldı. Bu aşamada yalnız
`node --check` (sözdizimi) koştu.
➜ **Sonradan YAPILDI** (koşu bitti, koordinatör serbest bıraktı) — §④ Tarayıcı delili.

---

## ④ İKİNCİ İŞ — ARAYÜZ KOVASI (`PAKET-ACIK-0930.json`, 77 açık madde)

### Pay okundu — 7 aday, gerekçeleri kendi raporlarından
| madde | sınıf (kova) | hüküm | benim okumam | sonuç |
|---|---|---|---|---|
| 0078 H-0001 (5/7/10 tıklanmıyor) | arayuz | sirada | ARAYÜZ — bu paket | aşama 1 UYGULANDI + tarayıcıda ölçüldü; 7/10 kodlanmış veriyi bekliyor (aşama 2) |
| 0077A H-0002 (açılış perdesi) | arayüz | senin-kararin | İki yüz: `data/acilis_siluet.js` **index.html'e bağlı değildi** ("o satır koordinatörde") — index.html artık bende ⇒ ARAYÜZ, karar gerektirmiyor. Kalan iki soru (hareketi azalt a/b/c · Roma/Cengiz silüet kaynağı) Emre'nin | **BAĞLANDI** + tarayıcıda ölçüldü; Emre kararları AÇIK |
| 0072 H-0003 (sarı C noktaları) | arayuz | senin-kararin | (3) zaman penceresi seçeneği A/B Emre'de | UYGULANMADI — karar bekliyor |
| 0073 H-0001 (sefer okları) | arayuz | sirada | kalan (2) şehir üstünden güzergâh + (5) literatür güzergâhı = VERİ işi (`guzergah_kesinlik:'temsili'`, kaynak gerekir) | **başka kova: VERİ/SEFER-OK** |
| 0077A H-0020 (derin pencere) | arayüz (yeni özellik) | sirada | altyapı İNDİ; eksik `alt_kronoloji` VERİSİ (0 madde) | **başka kova: KRONOLOJİ kolu** |
| 0077B H-0049 (Zadar/buton) | harita+arayüz | sirada | harita yüzü nokta/veri; buton yüzü FAZ 2, `alt_kronoloji` şema kararı bekliyor | **başka kova: VERİ** + şema kararı |
| 0074 H-0006 · 0077A H-0015 · 0077B H-0065 · H-0084 | harita görünümü | olculecek | kod işi değil, `js/d_katman.js` yaslamasının TARAYICI ölçümü (alet `SINIR-D-ASYA-0077-olc.js`) — d_katman.js bende değil | UYGULANMADI; tarayıcı artık serbest, istenirse ölçerim |

### index.html — açılış perdesi satırı
`<body>`nin HEMEN ardından `<script src="data/acilis_siluet.js?v=r10675"></script>`
(ACILIS-ANIM-0929 §4-1'in tarif ettiği yer; damga sitenin geri kalanıyla aynı, `surum_damgala.py`
`data/*.js` kalıbıyla bunu da yükseltir). CRLF korundu (1913/1913).

### Tarayıcı delili (yerel `py -m http.server 8765`, 30 Eylül)
```
Açılış perdesi : window.ACILIS_SILUET VAR · performance mark "acilis-kuruldu" 1 kez ·
                 "atlas-hazir" 13.823 ms · atlas-hazir sonrası #acilis DOM'da YOK (kaldırıldı)
Konsol         : hata 0
Ufuk (veri yok): radyolar 5✓ · 7 disabled · 10 disabled · satır .b-pasif ·
                 rozet "veri henüz üretilmedi" · katman visibility "none" · kova 'ufuk' 1 katman
Ufuk (sentetik bant = DONEMLER[0].o, 1281 aktif, ufukVeri elle kuruldu):
  7 tık   → katman visible · rozet "1" · seçili 7 · ft TEMBEL kuruldu ✓ · ufukGun 7
  DIŞARIDAN setLayoutProperty none → ufukSecimEsitle → seçili 5, imza null  (tek gerçek = katman ✓)
  10 tık  → visible · rozet "1" · seçili 10
  5 tık   → none · rozet "" · seçili 5
Biçim kapısı (script onload taklit edildi):
  UFUK_BANT_IZI.bicim="kod-9" → katman none · seçili 5 · rozet "biçim tanınmadı" · ufukVeri null ✓
  bicim yok ("ham")           → katman visible · rozet "1" ✓
```
Ekran görüntüsü: katman menüsünde `⑥b Ⓑ Ufuk (yürüyüş) [5 gün | 7 | 10]` 7 seçili (kırmızı),
rozet 1 — oturum scratchpad'inde `ufuk-dugme-7gun.jpg` (denetim/'e yazma yetkim yok).
⚠️ Sentetik bant yalnız ARAYÜZ zincirini sınar; gerçek bant verisinin görünümü aşama 2'de.

---

## ⑤ YARIM YAYIN SONRASI — üç dosya BİRLİKTE, aşama 2 dâhil (30 Eylül akşam)

### Olan: koordinatör yeni `index.html`i eski `app.js`le yayınladı (r10707-r10712) → site açılmadı
**Gerçek kırılma ÖLÇÜLDÜ** (koordinatörün "acilisBitir yolu" teşhisi değil): eski
`app.js`in `bVeriKapisi()`si `#ufuk-sec`i buluyor, ama o artık `<select>` değil radyo
grubu ⇒ `Array.prototype.map.call(sec.options)` →
**`TypeError: Array.prototype.map called on null or undefined`** (tarayıcıda, eski app.js
üstünde birebir üretildi). Çağrı `haritaHazir`dan ÖNCE ve `try`sız ⇒ kurulum yarıda,
`atlas-hazir` yok, perde kalkmıyor. Eski `app.js` `acilisBitir()`i zaten çağırıyordu (HEAD:3086).
⚠️ Ayrıca: **gizli sekmede ölçüm yanıltır.** MapLibre satır içi stili `requestAnimationFrame`
ile yükler; pencere gizliyken rAF durur ⇒ `harita.style.stylesheet` YOK, `haritaHazir` false
— sağlam paket de gizli sekmede böyle görünüyor (ölçüldü: 68 sn'de stil yok, görünür yapınca
~8 sn'de hazır). Canlı ölçümdeki "stylesheet YOK" belirtisi bu kaynaklı olabilir.

### Değişiklikler (üstüne: `index.html` r10713 / 873282d8)
| dosya | ne |
|---|---|
| `index.html` | ⑥b segment (kimlik **`ufuk-segment`**, 7/10 **varsayılan `disabled`**) · `<body>` ardına `data/acilis_siluet.js?v=r10713` · **satır içi perde gözcüsü** (`atlas-hazir` sınıfı gelince `acilisBitir()`; MutationObserver). Damgaya dokunulmadı (yeni satır mevcut r10713'ü taşır). CRLF 1931/1931. |
| `js/app.js` | **aşama 2:** yükleyici `ufuk_bantlari_ust.js → ufuk_bant_parcalar.js` kuyruğu, `__UB_B64` → `geoCoz.havuzCoz(b64Coz())` (biçim "kodlu", dosyanın kendisinden tanınır; 266 MB ham dosya artık HİÇ istenmez) · HEAD yoklaması `ufuk_bantlari_ust.js`e · kimlik `ufuk-segment` · `ufukSeciciKur()`/`bVeriKapisi()` çağrıları **`try` içinde** (bir ayarın kusuru siteyi açılmaz kılmasın) |
| `css/style.css` | değişmedi (aşama 1'deki segment stili) |

### Yarım yayına dayanıklılık — üç kombinasyon
| index | app.js | beklenen | ölçülen |
|---|---|---|---|
| yeni | yeni | tam çalışır | ✓ (aşağıda) |
| yeni | **eski (HEAD)** | site açılır, düğme pasif | ✓ `#ufuk-sec` null ⇒ eski kod `if (!sec) return;` · atlas-hazir ✓ · #acilis kalktı ✓ · stil ✓ · konsol hata 0 · radyolar 5✓ 7✗ 10✗ |
| yeni | eski, **`acilisBitir` çağrısı SİLİNMİŞ** | perde yine kalkar | ✓ app.js'te `acilisBitir` 0 geçiş · atlas-hazir sonrası #acilis YOK · `acilisBitir` boşa dönmüş (gözcü çağırdı) |
| (karşı sınav) yeni ama kimlik `ufuk-sec` | eski | PATLAR | ✓ `TypeError … map called on null or undefined` — koruma olmasa kırılma aynen döner |
Sınav ortamı: scratchpad'de yeni index + `git show HEAD:js/app.js` + HEAD css, `data/`
`assets/` kavşakla; ayrı port. Sonra kavşaklar `rmdir` ile kaldırıldı, hedefler sağlam.

### Tam paket — tarayıcıda (yerel, görünür sekme)
```
atlas-hazir ✓ · #acilis DOM'dan kalktı ✓ · stil ✓ · konsol hata 0
veri yokken (yoklama öncesi) : 5✓ 7✗ 10✗ · rozet "veri henüz üretilmedi"
satıra yaklaşınca HEAD ust.js 200 : 7/10 açıldı, .b-pasif kalktı
7 tık  : 7.876 ms yükleme (çözüm 4.787 ms) · havuz 67.457 halka ·
         bantlar <=5:4824 · 5-7:4303 · 7-10:3163 · katman visible · 1281'de 177 kayıt
         🔴 heap +790 MB (performance.memory) — AĞIR; zayıf makinede risk
10 tık : visible · 253 kayıt  ·  5 tık : none
```
📌 Koordinatörün sayısı 7-10 = 3.138; tarayıcı **3.163** okudu (fark 25 — hangisi güncel bilinmiyor).
Ekran görüntüleri (5 ve 10 gün, 1281, z4.2): 10 günde Anadolu/Kafkas boşlukları dolu.
