# BULGU — DERE / ÇAY · Emre'nin "nehirler akarsular dereler çaylar" isteği

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2712` · **Tarih:** 5 Eylül 2026
> **Cins:** ÖLÇÜM turu — *hiçbir çizim değiştirilmedi.*
> `js/app.js` · `index.html` · `css/style.css` **DEĞİŞTİRİLMEDİ** (git temiz).
> `data/*.js` ve üç motor dosyasına **dokunulmadı** (koşu 5b canlı).

---

## 0. ÖZET — üç satır

```
① DERE/ÇAY VERİDE HİÇ YOK. Kaynak Natural Earth 10m; `featurecla` yalnız
   "River" ve "Lake Centerline" taşıyor. Bütün ANADOLU'da 17 akarsu var,
   ortanca uzunluk 305 km. Emre'nin istediği tanecik mevcut DEĞİL.

② 🔴 VE ASIL BULGU BU DEĞİL: BUGÜN ÇİZİLEN 1454 NEHİR DE GÖRÜNMÜYOR.
   `g-nehir` katmanı Esri rasterinin ALTINDA (indeks 4 · raster 5) ve
   raster opak. Ölçüldü: varsayılan ayarlarla Kızılırmak'ın üstünde
   dahi tek piksel nehir yok; rasteri şeffaflaştırınca nehirler BELİRİYOR.
   Ve kullanıcı bunu AÇAMAZ — raster ile nehir AYNI ① Coğrafya kovasında.

③ Dere/çay isteniyorsa iki yol var; biri 585 KB ve kamu malı, öteki
   544 MB ve lisansı DOĞRULANAMADI. Ama ikisi de ②'den SONRA gelmeli:
   görünmeyen bir katmana veri eklemek görünmeyen veri üretir.
```

---

## 1. TANECİK — dere/çay sınıfı var mı? (soru ①)

### Kaynak dosya: `veri-kaynak/ne_10m_rivers.geojson`

```
feature sayısı                1455
featurecla dağılımı           River             1202
                              Lake Centerline    253
                              ⇒ DERE/ÇAY SINIFI YOK
```

**Uzunluk dağılımı (km):**
| ölçü | değer |
|---|---:|
| en kısa | 0,0 |
| %10 | 49,0 |
| **ortanca** | **311,7** |
| %90 | 941,9 |
| en uzun | 4.490,5 |
| 50 km altı parça | 148 (%10) |
| 20 km altı parça | 51 (%4) |

⇒ Veri **büyük nehir** verisidir. Bir "dere" 5–20 km'dir; o bantta 51
parça var ve onlar da dere değil, **büyük nehirlerin uç parçaları.**

### Çizilen katman: `data/altlik.js` → `ALTLIK.nehir`
```
1454 çizgi (kaynakta 1455 — bir parça düşmüş, sebebi ÖLÇMEDİM)
ortanca 305,1 km · en uzun 4.399,5 km
🔴 özellik alanları BOŞ — nehirlerin ADI YOK, yani etiket de yazılamaz
```
Yanındaki iki tanı katmanı: `nehir_motorun` 43 · `sirt_motorun` 205.

### 🔴 ANADOLU SINAVI — Emre'nin göz aşinalığı orada
`36–42 K / 26–45 D` kutusunda çizilen akarsu: **17.**
```
Fırat (Al Furat) · Dicle (Tigris) · Kızılırmak · Sakarya · Ceyhan ·
Büyük Menderes · Aras · Kura · Murat · Kelkit · Simav · Evros
```
Hepsi adlı, hepsi büyük. **Porsuk yok · Gediz yok · Bakırçay yok ·
Göksu yok · Zamantı yok** — ve dere/çay hiç yok.

⇒ **DAMGA: Emre'nin istediği tanecik ile verinin taşıdığı tanecik
AYRIŞIYOR, ve fark bir kademe değil iki kademe.**

---

## 2. 🔴🔴 GÖRÜNÜRLÜK — çizilen nehirler de GÖRÜNMÜYOR (soru ②)

### Katman sırası — çalışma anından okundu
```
0 zemin · 1 g-kara · 2 g-gol · 3 g-dag · 4 g-nehir · 5 altlik · 6 g-nehir-motor …
```
**`g-nehir` (4), Esri rasterinin (5) ALTINDA.** `raster-opacity` beyan
edilmemiş ⇒ varsayılan **1**, yani opak.

### Ekrandan ölçüldü — beyanla yetinilmedi
| durum | sonuç |
|---|---|
| varsayılan (raster açık, siyasî açık) | z6,2 orta Anadolu'da **hiç nehir görünmüyor** |
| siyasî katman kapalı, raster açık | yine **görünmüyor** — Esri fotoğrafı örtüyor |
| `raster-opacity: 0` | 🟢 **NEHİRLER BELİRDİ** — Kızılırmak'ın mavi kıvrımı ekranda |

Ekran görüntüsü alındı; üç durum da kaydedildi.

### 🔴 VE KULLANICI BUNU AÇAMAZ
`katmanSinifla()` kovaları ölçüldü:
```
cografya = [zemin, g-kara, g-gol, g-dag, g-nehir, altlik]   ← ALTISI BİR ARADA
```
Kalıp `^(zemin|altlik|g-)`. Yani **① Coğrafya** onay kutusu rasteri de
nehri de aynı anda kapatır. **Rasteri kapatıp nehri görmenin arayüzde
yolu YOK.**

### Beyan ↔ ekran: bu sefer AYRIŞMA YOK
```
beyan (app.js:744)   minzoom 3,5 · #4a86b8 · genişlik 0,6 · opaklık 0,75
çalışma anı          minzoom 3,5 · #4a86b8 · genişlik 0,6 · opaklık 0,75
```
📌 `SU_RENGI` vakasının aksine burada beyan ile çizilen **uyuşuyor**;
kusur renkte değil **sırada**.

### ⚠️ ÖLÇEMEDİĞİM
```
⚪ Nehirlerin göründüğü KESİN zoom eşiği — iki yoldan da ölçemedim:
   · `gl.readPixels` hep [0,0,0] döndü (preserveDrawingBuffer kapalı;
     kare derlendikten sonra tampon okunamıyor)
   · zoom taraması 2,5'in altına inemedi (minZoom kelepçesi), ve
     `queryRenderedFeatures` katman minzoom'unu dikkate almıyor gibi
     görünüyor (z2,5'te 18 döndürdü, oysa katman minzoom 3,5)
   ⇒ "minzoom 3,5" BEYAN olarak doğrulandı, EKRANDAN doğrulanmadı.
⚪ `ALTLIK.nehir`in kaynaktan bir parça eksik olmasının (1455→1454) sebebi
⚪ Esri rasterinin KENDİ üzerinde nehir çizip çizmediği — fotoğrafta
   akarsu izleri var ama bunlar bizim katmanımız DEĞİL; ayırt etmedim
```

---

## 3. ÇARE ÖNERİSİ — uygulanmadı (soru ③)

### 🟢 A) NATURAL EARTH EK DOSYALARI — aynı kaynak ailesi, kamu malı
Natural Earth'ün **bölgesel ek** nehir dosyaları var ve bunları
kullanmıyoruz:
```
ne_10m_rivers_europe.zip                     585 KB
ne_10m_rivers_north_america.zip             3,07 MB
ne_10m_rivers_australia.zip                  402 KB
ne_10m_rivers_lake_centerlines_scale_rank    2,3 MB  (incelme/tapering)
```
**Lisans — kaynağından doğrulandı** (naturalearthdata.com/about/terms-of-use):
> kamu malı · atıf **gerekmiyor** · ticarî kullanım serbest

**Bedel:** sayfanın bugünkü yükü 104,6 MB; Avrupa eki **%0,5**'i.
🔴 **AMA ANADOLU'YA FAYDASI ŞÜPHELİ:** Orta Doğu / Anadolu için **ek
dosya YOK**. Avrupa ekinin Trakya'yı ve Anadolu'yu ne kadar kapsadığını
**ÖLÇMEDİM** — ölçmek indirmeyi gerektirir, ve bu tur "öneriyi uygulama"
turu. **DAMGA: ÖLÇÜLEMEDİ (indirme izni istenmedi).**

### 🟡 B) HydroRIVERS — dere/çay taneciği GERÇEKTEN burada
```
çözünürlük        15 açı-saniyesi · ortalama parça uzunluğu 4,2 km
kapsam            8,5 MİLYON parça · 35,9 milyon km
eşik              havza ≥ 10 km²  YA DA  akış ≥ 0,1 m³/sn
                  ⇒ İSTENEN TANECİK BU
boyut             küresel shapefile 544 MB · geodatabase 618 MB
                  + 9 bölgesel dosya (bölgesel boyutlar ÖLÇÜLMEDİ)
```
🔴 **LİSANS DOĞRULANAMADI — ve çelişki var:**
```
ürün sayfası     "freely available for scientific, educational and
                  commercial use"
sitenin Terms of Use  ticarî kullanımı, yeniden dağıtımı ve TÜRETİLMİŞ
                  ESERİ YASAKLIYOR (genel site materyali için)
```
İkisi aynı şeyi söylemiyor. Kesin hüküm **Technical Documentation**
PDF'inde; onu **okumadım**.
⇒ **DAMGA: ÖLÇÜLEMEDİ.** Bu projede lisans kırmızı çizgidir
(`§1.6` görsel kuralı); doğrulanmadan veri alınmaz.

**Ve boyut tek başına engel:** 544 MB, atlasın bugünkü toplam yükünün
**beş katı.** Kullanılacaksa ① bölgesel dosya ② `ORD_FLOW` (akış
mertebesi) süzgeciyle kırpma şart — ikisi de ölçülmeli.

### 🔴 SIRA — ve bu öneriden önemli
```
Dere/çay eklemek ②'DEN SONRA gelmeli.
Bugün 1454 nehir çiziliyor ve HİÇBİRİ görünmüyor. Aynı yere 8,5 milyon
parça eklemek, GÖRÜNMEYEN VERİYİ ÇOĞALTMAKTIR.
```
Önerilen sıra (seçmiyorum, sayıyorum):
```
① `g-nehir`i rasterin ÜSTÜNE al (Grup A → Grup B) ya da rastere
   ayrı bir opaklık/kapatma anahtarı ver
② raster ile nehri AYRI kovalara ayır — bugün ikisi de `cografya`da,
   yani kullanıcı birini kapatmadan ötekini göremiyor
③ nehir adlarını geri ver (`ALTLIK.nehir` özellikleri BOŞ; etiket
   yazılamıyor — Emre "Kızılırmak" yazısını göremez)
④ ANCAK bundan sonra tanecik artırılsın
```

---

## 4. RAPOR BİÇİMİ — üç damga ayrı

```
🟢 ÖLÇTÜM      kaynak 1455 parça · featurecla iki sınıf · ortanca 311,7 km
               Anadolu 17 akarsu · çizilen 1454 · özellikler BOŞ
               katman sırası 4 vs 5 · raster opak · aynı kovada
               raster şeffaflaşınca nehirler GÖRÜNÜYOR (ekran görüntüsü)
               NE ek dosyaları ve boyutları · NE lisansı (kamu malı)
               HydroRIVERS ölçek/eşik/boyut

🔴 BULUNAMADI  ne_10m_rivers içinde dere/çay sınıfı — ARANDI, YOK
               Orta Doğu için Natural Earth ek dosyası — ARANDI, YOK

⚪ ÖLÇÜLEMEDİ  nehirlerin göründüğü kesin zoom (readPixels siyah döndü,
                 minZoom kelepçesi 2,5'in altına inmeye izin vermedi)
               Avrupa ekinin Anadolu kapsaması (indirme gerekir)
               HydroRIVERS lisansı (Technical Documentation okunmadı)
               HydroRIVERS bölgesel dosya boyutları
               1455 → 1454 kaybının sebebi
               Esri rasterinin kendi akarsu çizimi ile bizimkinin ayrımı

🔵 OKUMADIM    HydroSHEDS Technical Documentation PDF
               OpenStreetMap `waterway=*` yolu (üçüncü ihtimal, bakılmadı)
```

---

---
---

# EK — GÖL KALEMİ · 5 Eylül 2026 · **YAPILMADI, ve sebebi ölçüldü**

> Sevk: `M-2791` — *"GÖLLER: EVET, YAP — tek kalemde bitir."*
> **Yapmadım.** Sevkin dayandığı öncül BENİM kendi cümlemdi ve **çürüdü.**
> `js/app.js` · `index.html` · `css/style.css` **değiştirilmedi.**

## G1. ÇÜRÜYEN ÖNCÜL — VE SAHİBİ BENİM

`M-2753`te şunu yazmıştım:
> *"Göller (`g-gol`) hâlâ rasterin ve siyasî dolguların ALTINDA — nehirle
> BİREBİR aynı kusur."*

O cümle bir **çıkarımdı**: katman sırasına baktım (`g-gol` 2, `altlik` 4),
nehirdeki desenin aynısını varsaydım. **Ekrandan ölçmedim.** Ölçünce çürüdü.

## G2. ÖLÇÜM — göller GÖRÜNÜYOR

**On bilinen göl, varsayılan ayarla, `queryRenderedFeatures` ile:**

| ölçü | sonuç |
|---|---:|
| ölçülen göl | 10 |
| siyasî dolgunun **örttüğü** | **0** |
| açıkta kalan | 10 |

Van · Tuz · Beyşehir · Eğirdir · Urmiye · Sevan · İznik · Manyas ·
Uluabat · Acıgöl — **hiçbirinin üstünde** `osmanli-dolgu` ·
`devlet-dolgu` · `vassal-dolgu` · `himaye-dolgu` yok.

**Sebep, koordinatörün kendi uyarısında yazılıydı:** göller motor
tarafında **petekten çıkarılıyor** (705 göl). Dolgunun orada **deliği
var**, ve delikten Esri rasterinin suyu görünüyor.

**Görsel doğrulama:** Van Gölü z7'de mavi, siyasî dolgular çevresinde ama
üstünde değil. Tuz Gölü z7,2'de aynı. Ekran görüntüleri alındı.

**Ayırt edici sınav — görünen mavi KİMİN?**
`g-gol` gizlendi → **göl hâlâ görünüyor.** ⇒ Ekrandaki su bizim
katmanımız değil, **Esri rasterinin kendi suyu.**

## G3. ⇒ DEĞİŞİKLİK YAPILSAYDI NE OLURDU
`g-nehir`e yapılanın aynısı `g-gol`e yapılsaydı, Esri'nin **fotoğrafik**
gölünün üstüne bizim **düz `#c4dcea` dolgumuz** binerdi.
```
kazanç : YOK — göl zaten görünüyor
bedel  : fizikî altlığın su dokusu düz renkle ÖRTÜLÜR
```
Ve bu, sevkin **④ numaralı kendi şartını** çiğnerdi: *"Rastere DOKUNMA —
amaç onu silmek değil."* Üstüne opak bir dolgu koymak, silmenin
görsel eşdeğeridir.

## G4. YAN ÖLÇÜM — ve BİR YANLIŞ ALARMI KENDİM DURDURDUM

Tarayıcı sorgusu **"10 gölün 8'i `g-gol` katmanında YOK"** dedi — Van
Gölü dâhil. Alarm verecektim. **Veriye sordum, çürüdü:**

| kaynak | Van | Tuz | Beyşehir | Eğirdir | Urmiye | Sevan | İznik | Manyas | Uluabat | Acıgöl |
|---|---|---|---|---|---|---|---|---|---|---|
| tarayıcı sorgusu | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| **`ALTLIK.gol` verisi** | **✓** | ✓ | ✓ | **✓** | **✓** | **✓** | ✗ | ✗ | ✗ | ✗ |
| `ne_10m_lakes` kaynağı | ✓ | ✓ | — | — | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ |

```
🔴 tarayıcı  8 eksik dedi
🟢 veri      4 eksik      ⇒ tarayıcı sorgusu bu katman için GÜVENİLMEZ
🟢 kaynak    o 4'ü ZATEN taşımıyor (ne ada ne geometriye göre)
```
⇒ **Boru hattında kayıp YOK.** `uret_altlik.py` kaynağa sadık: 691 göl
gövdesi taşıyor, 674'ü 100 km² üstü. Eksik dördü (İznik · Manyas ·
Uluabat · Acıgöl) **Natural Earth 10m'in kendi kapsama sınırı.**
📌 Ve ders tanıdık: *rasterin altındaki bir katmana `queryRenderedFeatures`
ile sormak yanlış cevap verir.* `g-nehir`de aynı sorgu çalışmıştı, bu
yüzden güvenmiştim — **bir aletin bir katmanda çalışması ötekinde
çalışacağı anlamına gelmiyor.**

## G5. DAMGALAR
```
🟢 ÖLÇTÜM      10 gölün 0'ı siyasî dolgu altında · g-gol gizlenince göl
               DURUYOR (⇒ Esri'nin suyu) · ALTLIK.gol 691 gövde ·
               veride 6/10 · kaynakta o 4 göl YOK
🔴 ÇÜRÜDÜ      kendi öncülüm ("göller de aynı kusurda") — ÇIKARIMDI, ölçüm değil
🔴 ÇÜRÜDÜ      "8 göl katmanda yok" — tarayıcı artefaktı, veri 4 diyor
⚪ ÖLÇÜLEMEDİ  Anadolu/Kafkasya dışındaki göller (10'luk örneklem yalnız
               bu bölgeden; başka coğrafyada dolgu göl örtüyor olabilir)
⚪ ÖLÇMEDİM    `g-gol`ün varsayılan kipte HERHANGİ bir şey ekleyip
               eklemediği — amacı raster kapalıyken yedek olmak, o çalışıyor
🔵 OKUMADIM    NE 10m'in göl eşiği (dört gölün niçin yok olduğunun kuralı)
```

## G6. NE İSTİYORUM
**Göl kalemini KAPAT** — yapılacak bir şey yok, ve yapılsaydı fizikî
altlığı bozardı. İstenirse ayrı ve küçük bir iş olarak: NE 10m'in
kapsamadığı dört Anadolu gölü (İznik · Manyas · Uluabat · Acıgöl) başka
bir kamu malı kaynaktan eklenebilir — ama bu bir **veri** kalemi,
çizim kalemi değil.

---

## 5. NE İSTİYORUM — tek cümle

**Emre'nin isteğinin yarısı "veri yok" değil "veri var ama görünmüyor"
çıktı; önce görünürlük kalemini (② — katman sırası + kova ayrımı + nehir
adları) sevk et, dere/çay taneciği ondan sonra anlamlı olur.**
