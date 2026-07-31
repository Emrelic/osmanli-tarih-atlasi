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

## ⏳ Bloke — görsel doğrulama

Tarayıcı paneli kapalı olduğu için sayfa kare üretmiyor
(`isStyleLoaded() === false`, ekran görüntüsü zaman aşımı). Kod okuyup
"iyi görünüyor" demek bu projede kanıt sayılmadığı için §4.1'in okunabilirlik
kısmı ve §4.4'ün geçme ölçütü **ölçülmemiş** olarak duruyor.

## Kuyruğun kalanı — henüz başlanmadı

- §4.2 bölge isimleri büyük punto (`md.21`in ikinci yarısı)
- §4.3 dokuz ok tipi için lejant
- §4.4 vektör coğrafya katmanı kademe 3 geçme ölçütü (`COGRAFYA-HATLAR.md`)
