# ARAYÜZ (A) — ilerleme

> `ORGANIZASYON.md Karar 2`: durum mesajla değil dosyayla akar.
> Görev tanımı: `oturumlar/OTURUM-ARAYUZ.md`

---

## 2026-07-31 · Oturum açılışı

Görev tanımı okundu. Ön yüz dosyalarının tek yazarı olarak devir alındı.
**Açılışta hiçbir dosyaya yazılmadı** — "ARAYÜZ COĞRAFYA" oturumu çalışıyordu ve
kimin yazdığı netleşmeden `js/`'e girmek `ORGANIZASYON §1`'in yasakladığı
iki-yazarlı deseni kurardı. Koordinatör (b) şıkkını onayladı: devir tam.

---

## 🔴 BULGU 1 — `isg:` örtüsü ekranda HİÇ ÇİZİLMİYOR (md. 4.1)

Görev tanımı §4.1 şunu soruyordu: *"58 kayıt yan yana olduğunda tarama deseni
okunabiliyor mu, yoksa katı bir leke mi oluyor?"*

**Soru bugün cevaplanamaz, çünkü ekranda sıfır kayıt var.** Katmanın veri
kaynağı `window.ISGALLER` ve **bu değişkenin üreticisi yok.**

### Ölçüm

| Ne | Nasıl ölçüldü | Sonuç |
|---|---|---|
| Veride `isg:` taşıyan kayıt | `girdi.yukle()` (Kural 5.1 — kendi regex'imle değil) | **58** |
| `window.ISGALLER`'ı tanımlayan dosya | `grep -rn "ISGALLER"` bütün depo | **0 dosya** |
| `index.html`'de yüklenen 25 veri dosyası | script etiketleri tek tek | hiçbiri tanımlamıyor |
| Canlı sayfada `ISGALLER.length` | tarayıcıda çalıştırıldı | **0** |

`data/devirler.js` yalnız `window.DEVIRLER` (11 kayıt) ve `DEVIRLER_KAYNAK_OZET`
tanımlıyor — `ISGALLER` orada da yok.

`js/app.js:1110` `var ISGALLER = window.ISGALLER || []` yazıyor ve `|| []` deseni
sayesinde harita çökmüyor; `isgalGuncelle` ilk satırda `!ISGALLER.length` ile
sessizce dönüyor. **Yani hata vermiyor, sadece görünmüyor.** `olaylar_ek8.js`
vakasının (4 commit boyunca 404) aynı sınıfı — koruma çalıştı, eksiklik sessiz kaldı.

`arac/denetle_statu.py:598` bunu zaten yazmış:
> `window.ISGALLER` üreticisi henüz yok, katman BOŞ diziyle çalışıyor.

`arac/girdi.py:121` üreticinin adresini veriyor: **`arac/uret_devirler.py`** —
bu dosya **koordinatörün**, benim değil. Uygulaması bende değil.

### Kapsam — üretici yazılırken gerekecek

```
58 dönem / 58 kayıt
├─ ingiltere   55   Kahire, İskenderiye…   1882-09-14 → 1914-12-18
└─ avusturya    3   Saraybosna, Mostar…    1878-07-29 → 1908-10-05
```

### 🔴 BULGU 2 — üretici yazılsa bile gösterim Mısır'ı YANLIŞ boyayacak

Bu, üreticiden bağımsız ve **benim dosyamda.** İşgal altındaki toprağın *de jure*
tabanını ölçtüm:

```
isgal BASLARKEN altindaki de jure taban:
  v (tabi)      55      ← Mısır, Kavalalı hanedanı
  d (dogrudan)   3      ← Bosna
```

`js/app.js:1118`:
```js
var s = ig.sahipRenk ? renkAyir(ig.sahipRenk) : OSMANLI_KIRMIZI;   // #8e0b22
```

Tarama deseninin alt şeridi "nominal sahip" rengidir ve **varsayılanı doğrudan
idare kırmızısı**. Ama 58 kaydın **55'inin tabanı `v:` (tâbi, `#b2384a`)**.
Üretici `sahipRenk` alanını kayıt kayıt doldurmazsa Mısır ekranda *"doğrudan
idare edilen Osmanlı toprağı, İngiltere işgalinde"* diye okunur ve **Kavalalı
vasallığı haritadan silinir.**

Görev tanımı §4.1 tam bunu soruyordu: *"Mısır 1882-1914'te hem `v:` hem `isg:`
taşıyor — ikisi birden görünmeli."* Bugünkü kodda **görünmez.**

⚠️ Ve bu hata sınıfı `ORGANIZASYON §2`'nin "neden Opus" gerekçesinin birebir
örneği: **hiçbir denetim ötmez.** Harita boyanır, `denetle_yayin.py` temiz der,
kullanıcı yanlış okur.

### Kime ne düşüyor

| İş | Sahibi | Durum |
|---|---|---|
| `window.ISGALLER` üreticisi (`uret_devirler.py`) | **koordinatör** | bildirildi |
| Üreticinin kayıt başına `sahipRenk` vermesi (55×tâbi, 3×doğrudan) | **koordinatör** | bildirildi |
| Gösterimin tabanı veriden alması / varsayılanın düzeltilmesi | **ben** | üretici gelince |
| 55 kayıtlık taramanın okunabilirliği | **ben** | ⏳ ölçülemedi — veri yok |

---

## 🔴 BULGU 3 — "serbest kenar" (sönen kenar) katmanları HİÇ EKLENMİYORDU

Koordinatörün konsol bulgusu; kodu okuyup doğruladım, düzelttim.

`app.js:618` eski hâli:
```js
var PX_KM = ["/", ["^", 2, ["zoom"]], 67.8];
var YER_GENISLIK = ["*", U, PX_KM];
```
MapLibre `["zoom"]`i **yalnız** `step`/`interpolate`in doğrudan girdisi olarak
kabul ediyor. Burada üç kat gömülüydü (`*` içinde `/` içinde `^`), `addLayer`
fırlatıyordu ve `serbest-hale` + `serbest-cekirdek` **hiç eklenmiyordu.**
Yorumlar mekanizmayı uzun uzun anlatıyor, anlatılan şey ekranda yok.

**`isg:` ile aynı sınıf: yazılmış görünüyor, çalışmıyor.** Bugün üçüncü vaka
(1: `ISGALLER` üreticisi yok · 2: bölge adları hiç çizilmiyor · 3: bu).

### Düzeltme birebir, yaklaşık değil

Taban-2 `exponential` interpolate'in ara değer formülü
`t = (2^(z−z₀) − 1)/(2^(z₁−z₀) − 1)` olduğu için, iki durağa da `u·2^z/67,8`
eğrisinin kendi değeri konduğunda sadeleşiyor:

```
v₀ + t·(v₁ − v₀) = u·2^z⁰/67,8 · (1 + 2^(z−z₀) − 1) = u·2^z/67,8
```

Özdeşlik **her (z₀, z₁) çifti için** geçerli; duraklar haritanın zoom aralığını
(2,5–8) kuşatsın diye 2 ve 9 seçildi.

| Doğrulama | Sonuç |
|---|---|
| `node --check js/app.js` | temiz |
| eski eğri ↔ yeni ifade, k∈{1; 0,85; 0,35; 0,28}, z 2,5→8 | en büyük bağıl fark **4,1×10⁻¹⁶** |
| çıpa kontrolü (yorumdaki "z4'te 14 px ≈ 60 km") | **14,16 px** — korunuyor |

⚠️ Aciliyeti: çöl tavanı (300 km) sahipsiz alanı **tam bu sönen kenarla**
gösterecek; `COGRAFYA-COL-TAVANI.md` mekanizmanın var olduğunu varsayıyor.

⚠️ **Henüz gözle görülmedi** — bugüne kadar hiç çizilmediği için "doğru
görünüm" diye bir taban yok. Panel açılınca ilk bakılacak şey bu.

## ✅ md.4.2 — bölge adları yazıldı (görsel doğrulama bekliyor)

Ölçülen dağılım: 62 kayıt · 0,143 → 107,7 derece² · oran 752× · medyan 6,05 ·
aynı anda sahnede en çok 61 bölge (1680).
Band ölçülen aralığa yayıldı: `punto = 8 + 0,628·log2(alan/0,143)`, tavan 14.
Medyan bölge **11,4 punto** — tavana yapışmıyor (§33'ün başarısızlık deseni).

Kademe ayrımı **punto ile değil biçimle**: bölge bandı 8-14, devlet bandı
10-26 olduğu için büyük bir eyalet küçük bir devletten iri yazılabiliyor.
Punto ile ayırmak ya bölgeleri okunmaz küçültürdü ya alanı sürücü olmaktan
çıkarırdı — ikisi de §33'e aykırı. Ayrım renk + büyük/küçük harfte.

Yan düzeltme: etiket yerleşimi bugüne kadar **yalnız dönem değişince**
hesaplanıyordu; punto ve çakışma elemesi zoom'a bağlı olduğu hâlde bayat
kalıyordu. Bölge kademesi 5,2 eşiğine bağlı olduğu için artık zoom'da da
tazeleniyor (`requestAnimationFrame`, kare sonunda).

## md.4.4 — Kademe 3 geçme ölçütleri: 2 kapandı, 1 soru çıktı, 1 bekliyor

| Ölçüt | Durum |
|---|---|
| altlık kapatılınca kara/deniz ayırt ediliyor mu | ✅ koordinatör panelde doğruladı |
| göller deniz rengiyle mi | ✅ **kod ölçümü, kesin** |
| kıyı ile devlet sınırı çakışıyor mu | 🔴 **ölçüldü: sapma GERÇEK** — aşağıda |
| Esri'ye kalan atıf = 0 | ⏳ çalışma anı ölçümü gerekiyor |

**Göller — kapandı, oluşturma gerekmedi.** `g-gol` dolgusu `#a8c8dc`
(`app.js:488`), deniz zemini `zemin` katmanı `#a8c8dc` (`app.js:370`).
**Birebir aynı hex.** Göl deniz renginde çiziliyor, ölçüt sağlanıyor.

**Kıyı ↔ devlet sınırı — şartname "tolerans aynı" diyor, ama algoritma aynı
değil.** `uret_altlik.py:171` kıyıyı `simplify(SADE_TOL)` ile sadeleştiriyor;
motor ise `uret_petek.py:73`'te maskeyi `simplify(KARA_TOL=0,002)` ile alıp
peteklere `coverage_simplify(SADE_TOL=0,012)` uyguluyor (`:549`).

> Sabit ortak (`_sabit("SADE_TOL")` ile okunuyor, ayrıca yazılmıyor — kural
> doğru uygulanmış). **Ama `simplify` ile `coverage_simplify` farklı
> algoritmalar** ve Douglas-Peucker bu şekilde bileşilebilir değil:
> `simplify(0,012)` ≠ `simplify(0,002)` ∘ `coverage_simplify(0,012)`.
> Yani çakışma *tasarlanmış* ama *garanti değil*; sapma teorik olarak
> 0,012° ≈ 1,3 km mertebesine çıkabilir.

⇒ COĞRAFYA'ya havale edildi (`OTURUM-ARAYUZ.md §6`). **Ölçtü ve şüphe
doğrulandı** — `altlik.js`.`kara` ↔ `donemler.js`.`PARCALAR`, 16.249 kıyı köşesi:

```
medyan 0,26 km · %75 0,62 · %90 0,94 · %99 1,29 km
köşelerin %54'ü 0,2 km'den, %8,1'i 1 km'den fazla sapıyor
```

%99 dilimi teorik sınıra (1,34 km) yapışık ⇒ sapma **sadeleştirme farkının
kendisi**. Görünürlük: z5'te 0,4 px (görünmez — gözle kapatamamam bu yüzden),
**z8'de 3,3 px, z10'da 13 px**; `kara`nın `minzoom`u yok.
⚠️ COĞRAFYA'nın kendi çekincesi kayda geçti: **azami 3,82 km güvenilmez**
(kıyıya yakın iç sınır köşeleri kümeye giriyor); yüzdelikler sağlam.

### Çözüm: sadeleştirme ayarı değil, KAYNAK

Toleransı eşitlemek tavanı 1,3 km'ye indirmekten öteye gitmiyor — iki hat aynı
sabitten geçse de aynı algoritmadan geçmiyor. Motorun nihai örtüsünün birleşimi
**zaten** "motorun çizdiği kara"dır; dışa aktarılırsa çakışma inşa gereği tam.

📌 **Kural (COĞRAFYA'nın formülasyonu):** *"tek sayı iki yerde durmasın"ın
geometri hâli — TEK GEOMETRİ İKİ YERDE ÜRETİLMESİN. Sabiti paylaşmak yetmiyor,
ÇIKTIYI paylaşmak gerekiyor.* `SADE_TOL`'ü motordan okumak doğru refleksti ve
yine de yetmedi.

### Bende biten kısım — geriye uyumlu, kilitsiz

`uret_altlik.py` tüketiciye çevrildi; **üretim kaldırılmadı**:

```
veri-kaynak/motor_kara.geojson VARSA → tüketilir, sapma 0
YOKSA                                 → eski yerel üretim sürer
```

⚠️ COĞRAFYA "üretimi kaldır" dedi, kaldırmadım: dışa aktarım MOTOR'un işi ve
henüz yok. Şimdi kaldırsam `kara` boş kalır ve **Kademe 3'ün bugün geçen tek
ölçütü** (kara/deniz ayrımı) yerine hiçbir şey gelmezdi. İkinci fayda: geçiş
kilit istemiyor — MOTOR dışa aktarımı bağımsız indirir, dosya belirdiği an
davranış kendiliğinden değişir.

**MOTOR'dan istenen:** `uret_petek.py`'de `coverage_simplify` sonrası nihai
örtünün birleşimi `veri-kaynak/motor_kara.geojson` olarak yazılsın.

## ✅ SINANDI ve YAYINDA — r246

Koordinatör panelde ölçtü ve gözle baktı:

```
serbest-hale true · serbest-cekirdek true · katman 30 → 32 · 17 özellik
gözle: 1550, z4,6 — Osmanlı kırmızısı Rub'ul Hâlî'ye YUMUŞAK sönüyor
```
Bugüne kadar hiç çizilmediği için taban yoktu; **bu taban.**

```
bölge etiketi (1550 · z5,4 · 48 etiket):  taban 1 · bant 47 · TAVAN 0
§33'ün başarısız ilk denemesi          :  taban 22 · bant 24 · TAVAN 40
devlet etiketi 43 — DÜŞMEDİ
```
Tavanda sıfır ⇒ "kısıt sağlandı" değil **"amaç sağlandı"**.
⚠️ Tek kesit (1550/z5,4). Başka dönem-yakınlık çiftlerinde tavana yığılma
sınanmadı — panel bu oturumda hiç açılmadığı için bende ölçülemedi.

📌 Koordinatörün ölçüm yöntemi notu (bana da lazım): `jumpTo` sonrası **aynı
çağrıda** ölçme — `bolgeEtiketleri` `moveend` ile doluyor, senkron okuma 0
döndürüyor ve "etiket yok" sanılıyor.

---

## 🔴 OLAY — commit'im başka bir oturumun commit'ine karıştı

`ORGANIZASYON §7.2`'nin önlemek için var olduğu vakanın **ayna hâli**.

Sıra: dosyalarımı tek tek `git add` ettim → `git diff --cached --stat` ile
doğruladım (5 dosya, yalnız benimkiler) → `git commit` **"no changes added to
commit"** dedi. Sebep: aradaki pencerede koordinatör commit attı ve **benim
hazırlanmış (staged) dosyalarım onun commit'ine girdi.**

```
b58002f  "OGRENILENLER §35: sabiti paylasmak yetmiyor..."
         OGRENILENLER.md  +48        ← koordinatörün işi
         js/app.js       +139        ← BENİM
         css/style.css    +19        ← BENİM
         arac/uret_altlik.py +39     ← BENİM
         index.html       ±50        ← BENİM (r246 damgası)
         oturumlar/ARAYUZ-ILERLEME.md +234  ← BENİM
```

**Kayıp YOK, içerik tam** (`git diff HEAD` benim beş dosyam için boş) ve
**yayında** (origin ile eşit, damga r246 gitti). Bedel yalnız **izlenebilirlik**:
beş dosyalık arayüz işi "OGRENILENLER §35" başlıklı bir commit'in içinde
duruyor, gerekçelerin hiçbiri commit kütüğünde yok. Bu dosya o boşluğu
kapatıyor.

📌 **Ders — kuralın eksik yarısı.** `§7.2` *"`git add .` yasak, dosyaları tek
tek ekle"* diyor ve ben aynen öyle yaptım; yine de oldu. Çünkü kural
**ekleme**yi düzenliyor, **hazırlama ile commit arasındaki pencereyi**
düzenlemiyor: `git add` global bir indeks yazıyor ve o pencerede commit atan
HERKES benim hazırladığımı alır. Tek yazarlı dosya kuralı burada korumuyor —
dosyalar gerçekten yalnız benimdi.
> Öneri: `git add` ile `git commit` **tek çağrıda bitişik** olsun (araya
> ölçüm/inceleme girmesin), ya da commit `git commit -o <dosya...>` ile yalnız
> adı verilen yolları alsın. İkincisi pencereyi tamamen kapatıyor.

## ÖLÇÜM — süzgeç hangi alana dayanmalı: `k:` mi `etiket:` mi

```
madde 989 · k: %100 · etiket: %100
k:      25 değer · DİZİ olan madde 0     ← TEK DEĞERLİ (bölüntü)
etiket: 20 değer · DİZİ olan madde 989   ← ÇOK DEĞERLİ (~1,7 etiket/madde)
11 değer ikisinde de var, sayılar çok farklı:
   savas      k:151  etiket:336
   diplomasi  k: 13  etiket:145
   ekonomi    k: 10  etiket: 88
```

⇒ **İkisi aynı şeyi ölçmüyor:** `k:` maddenin *birincil* kategorisi,
`etiket:` uygulanabilir *bütün* yönleri.

### 🔴 KARAR: gruplu kutucuklar `k:`e dayanmalı — ve sebep DIŞLAMA

Kullanıcının cümlesi *"…ama tahta geçmeler, hükümdar ölümleri, iç isyanlar
**kapalı**"* — yani süzgecin işi seçmek kadar **dışlamak**.

**Dışlama yalnız bölüntü üzerinde çalışır.** `etiket:` çok değerli olduğu için
`ayaklanma` + `siyaset` taşıyan bir madde "İÇ DÜZEN"i kapatınca **yine
görünür** (siyaset açık). Kullanıcı "iç isyanları kapattım" der, isyan
maddesi ekranda kalır, hiçbir hata çıkmaz — bugünkü üç vakanın aynı ailesi.
`k:` tek değerli olduğu için her madde tam bir kutuya düşer: kapatılan grup
tam olarak kaybolur, sayılar toplanabilir.

📌 `etiket:` atılmıyor — `PLAN-ETIKET.md`'nin dikey kesen KONU ekseni için
doğru alan o. İkisi farklı iş yapıyor: `k:` **gruplar**, `etiket:` **kesişir**.

⚠️ Temizlenecek yazım ikizleri: `toprak-kazanc` 296 ↔ `toprak-kazanci` 1 ·
`idari` ↔ `idare` · `isyan` ↔ `ayaklanma` (ikisi de her iki alanda).

## ÖLÇÜM — zaman çizgisi yoğunluğu: uyarı doğru, SEBEBİ farklı

```
50 yıllık dilim: 14 tane · en az 5 (1250-1299) · en çok 144 (1800-1849)
oran 28,8×
```

Ama kullanıcının kendi örneğini (HÂNEDAN + İÇ DÜZEN kapalı) uyguladım:
```
kalan madde 900/989 · TAMAMEN BOŞALAN dilim: 0 · 3'ten az kalan: 0
```

⇒ **Süzgeç dilim boşaltmıyor.** Yoğunluk göstergesi yine gerekli ama gerekçesi
süzgeç değil **taban dağılım**: 1250-1299'da zaten 5 madde var, 1800-1849'da
144. Kullanıcı süzgeç açmadan da seyrek bir yüzyıla yakınlaşıp "hata var"
sanabilir. Gösterge tabanı anlatmalı, süzgeç etkisini değil.

## 🔴 ÖLÇÜM — şehir görünürlük eşiği: ÜÇ ADAY SİNYALİN ÜÇÜ DE ÇÖKÜYOR

Kullanıcı kararı (a): şehir katmanı yakınlaştırmaya göre çalışacak.
Koordinatör haklı olarak uyardı: eşiği `g:`ye bağlarsan 846 kayıt **tek
kovada** olur. Ölçtüm — ve `tur:` de, anılma sayısı da kurtarmıyor.

```
aday 1 — g:      846 tek kovada                        ✗
aday 2 — tur:    sehir 416 · kale 222 · liman 147 · bolge 61   ✗ en büyük kova 416
aday 3 — kronolojide anılma sayısı (app.js'in kendi ölçütüyle):
         hiç anılmayan 538 (%63,6) · 1 kez 168 · 2-3 kez 105 · 4-9 kez 32 · 10+ kez 3
         medyan 0 · %90 2 · azami 17 (Venedik)          ✗ 538 tek kovada
```

⇒ **Veride bu 846 kayıt için yerleşik bir önem derecesi YOK.** Hangi mevcut
alana bağlarsak bağlayalım, yüzlerce işaret tek bir zoom kademesinde birden
belirir — kullanıcının şikâyet ettiği "ekran çöplüğü"nün ta kendisi.
📌 Üç sinyali de denemeden birini seçseydik "makul göründü" diye yazacaktık;
`OGRENILENLER §34`'ün ölçütü (*"başka bir cevap verebileceği bir dünya
olmalı"*) burada gerçekten farklı cevap verdi.

### Öneri: eşiği ATTRİBÜTE değil, EKRAN YOĞUNLUĞUNA bağla

Sıralama için zayıf sinyal yeter; **eleme işini çakışma yapsın.** Bu makine
zaten var, kurulu ve ölçülmüş: devlet etiketleri ve (bugün eklenen) bölge
etiketleri aynı `yerlesen` kutu dizisiyle eleniyor ve ölçümü
**taban 1 · bant 47 · tavan 0** çıktı.

- **Sürücü (sıralama):** petek alanı — sürekli, eşitliksiz, bedava (`PETEKLER`
  çalışma anında elde). `g:`/`tur:`/anılma **kırıcı** olarak eklenebilir.
- **Eleme:** ekranda kutu çakışması — zoom arttıkça yer açılır, işaretler
  kendiliğinden kademe kademe belirir. Eşik tablosu yazmaya gerek kalmaz.

⚠️ Sınama **dağılımla** yapılacak (§33): her zoom kademesinde kaç işaret
görünüyor — "kalabalık değil" ölçüm değildir.
### 🔴 DÜZELTME — sıralamayı TERS kurmuşum

Yukarıdaki öneride *"sürücü alan, üç sinyal eşitlik kırıcı"* yazmıştım.
**Yanlış.** Koordinatör petek gövdelerini ölçtü: alan **yakınlık değil
ıssızlık** ölçüyor — Timbuktu 2.820.803 km² ile birinci, İstanbul 750/951,
Bursa 879/951. İlk 30'da tek Osmanlı merkezi yok.

⚠️ Ve planladığım *"alan dağılımı sürekli mi"* ölçümü bunu **yakalayamazdı**:
951'in 927'si benzersiz, yüzdelikler pürüzsüz — sınav GEÇİYOR, tasarım tersken.
Alan gerçek sayıdır, sürekli çıkacağı baştan belliydi.
📌 **`§34`'e eklenen kat:** ölçümün farklı cevap verebilmesi yetmez, **verdiği
cevap kararı değiştirebilmelidir.**

**Doğrusu roller ters:** üç sinyal **sürücü**, alan yalnız kova **içinde**
eşitlik kırıcı. Ölçüldü:

```
üçlü kova (g:, tur:, anılma) — app.js'in kendi eşleştirme ölçütüyle
  965 kayıt · 46 ayrı kova · EN BÜYÜK ORTAK KOVA 299 (g:0, sehir, anılma 0)
  846 kümesi · 19 ayrı kova · aynı 299 · ilk üç kova 482 (%57)
  ⇒ üç sinyal birlikte en kötü kovayı 846 → 299'a indiriyor (%65)

karşı örneklerin yeri:
  Timbuktu · Agadez · Ndjamena   g:0 sehir anılma 0    → EN ALT kova
  İstanbul                       g:3 sehir anılma 249  → EN ÜST kova
  Bursa · Edirne  g:3 anılma 26        Kahire  g:2 anılma 26
```

⇒ Sözlük sıralamasında (**önce kova, sonra kova içinde alan**) ters örneklerin
tamamı çözülüyor: Timbuktu en son beliren gruptadır, İstanbul ilk. Alan
kovalar **arasında** hiç karar vermez.

Bu, "alan komşu eklendikçe değişir" itirazını da zararsızlaştırıyor: alan artık
yalnız en düşük öncelikli kovanın **iç sırasını** belirliyor, kimin görüneceğini
değil.

⇒ **Editoryal `g:` doldurma işi gerekmiyor.** 299'un tek kovada olması sorun
değil çünkü o kova **en sondaki**: bu kayıtlar yalnız en yüksek yakınlaştırmada,
ekranda yer varken beliriyor.

⏳ **Kalan tek sınav (panel gerekiyor):** her zoom kademesinde ekranda kaç
işaret kalıyor — z5/z6/z7/z8 dağılımı. Çakışma elemesinden sonra en yüksek
zoom'da 299 kalabalık yapıyorsa bu tasarım düşer.

## ⏳ Bloke — görsel doğrulama

Tarayıcı paneli kapalı olduğu için sayfa kare üretmiyor
(`isStyleLoaded() === false`, ekran görüntüsü zaman aşımı). Kod okuyup
"iyi görünüyor" demek bu projede kanıt sayılmadığı için §4.1'in okunabilirlik
kısmı ve §4.4'ün geçme ölçütü **ölçülmemiş** olarak duruyor.

## Kuyruğun kalanı — henüz başlanmadı

- §4.2 bölge isimleri büyük punto (`md.21`in ikinci yarısı)
- §4.3 dokuz ok tipi için lejant
- §4.4 vektör coğrafya katmanı kademe 3 geçme ölçütü (`COGRAFYA-HATLAR.md`)
