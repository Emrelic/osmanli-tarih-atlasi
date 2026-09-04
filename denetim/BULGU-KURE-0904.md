# BULGU — KÜRE GÖRÜNÜM · Mercator'dan çıkış fizibilitesi

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `oturumlar/KURE-GORUNUM-0904.md`
> **Tarih:** 4 Eylül 2026 · **Cins:** FİZİBİLİTE
> 🔴 **Hiçbir şey yayına alınmadı.** `index.html` · `js/app.js` ·
> `css/style.css` **değiştirilmedi** (`git status` temiz). Ölçüm, ayrı
> deneme sayfaları üzerinde yapıldı.
>
> ⚠️ **Bütün süre ölçümleri koşu 5 sürerken alındı** — CPU paylaşılıyor.
> Süreler bu makinenin boştaki hâlini **temsil etmez**.

---

## 0. ÖZET — üç satır

```
① v5 GEREKLİ ve YETERLİ: 4.7.1'de setProjection YOK (ölçüldü), 5.24.0'da
   atlasın 39 KATMANININ HEPSİ küre üzerinde çalıştı. Çalışan kanıt alındı.
② KADEMELİ SEÇENEK ÇALIŞIYOR: küre↔mercator geçişi çalışma anında
   yapıldı, 39 katman ve 173 işaretçi HER GEÇİŞTE ayakta kaldı.
   ⇒ v5 riski "her şey ya da hiç" DEĞİL.
③ TEK GERÇEK KIRILMA: 173 DOM işaretçisinin 173'ü kürenin ARKA YÜZÜNDE
   de görünüyor. Bu v5'in değil DOM işaretçisinin doğası.
```

---

## 1. DEVRALINAN ÜÇ SATIR — kendim ölçtüm (`B10`)

`TESPIH.md` #13'ün kaydı üç şey söylüyordu. **Üçünü de çalışma anında
doğrudan sınadım**, kod okumakla yetinmedim.

| devralınan | ölçüm | damga |
|---|---|---|
| `4.7.1`de `setProjection` YOK | `typeof harita.setProjection` → `"undefined"`; çağrı `TypeError` attı | 🟢 **TUTTU** |
| `setTerrain` VAR | `typeof harita.setTerrain` → `"function"` | 🟢 **TUTTU** |
| **37 katman** | çalışma anında **39** | 🟡 **DÜZELTİLDİ** |
| **9 sefer katmanı** | `sefer-cizgi-*` → **9** | 🟢 **TUTTU** |
| **481 DOM işaretçisi** | **173** — ve 10 tarih × 4 zoom seviyesinde **sabit** | 🔴 **ÇÜRÜDÜ** |

**İşaretçilerin gerçek bileşimi** (hepsi *boşluk* işaretçisi, şehir değil):
```
bosluk-kutu   92        bosluk-benek  49        bosluk-soru  32   = 173
```
Tarihi 1300 → 1923 arası on kesitte, zoom'u 2,5 → 8 arasında değiştirdim;
sayı **hiç oynamadı**. 481'in nereden geldiğini **bulamadım** — bu bir
`bulunamadı`, bir *"yok"* değil.

### 🟢 Ve bir sürüm satırı da bayat çıktı
Kayıt *"v5 gerekli"* diyor. npm'de bugün **`latest` = 6.7.0**; v5 hattının
sonu **5.24.0**. Yani "v5" bir hedef değil bir **aile adı** — ve aşağıda
ölçüldüğü gibi **v6 bambaşka bir iştir**.

---

## 2. ÇALIŞAN KANIT — v5.24.0 + küre + atlasın TAMAMI

Kabul ölçütü *"en az bir ÇALIŞAN kanıt: küçük bir sayfada v5 + küre +
bizim bir katmanımız"* diyordu. **Küçük sayfa yapmadım — daha iyisini
yaptım:** `index.html`in birebir kopyası, yalnız maplibre sürümü
değiştirilmiş hâli. Böylece **1 katman değil 39 katmanın hepsi** sınandı.

```
denetim/kure-deneme-v4.html   maplibre 4.7.1   ← KONTROL GRUBU
denetim/kure-deneme-v5.html   maplibre 5.24.0
denetim/kure-deneme-v6.html   maplibre 6.7.0
```
(Üçü de `<base href="/">` ile köke sabitlendi; `index.html`e dokunulmadı.)

**v5.24.0 sonucu:**
```
maplibre sürümü        5.24.0
katman                 39   ← 4.7.1 ile AYNI
DOM işaretçisi        173   ← 4.7.1 ile AYNI
setProjection          VAR
setProjection({type:'globe'})   → çalıştı, küre ÇİZİLDİ
```
Küre üzerinde fizikî altlık, boşluk etiketleri ve bütün arayüz çalışıyor;
1683-07-14 kesiti küre üzerinde görüntülendi (ekran görüntüsü alındı).

### 🟢 KADEMELİ SEÇENEK — ölçüldü ve ÇALIŞIYOR
Şartname *"küre AYRI BİR KİP olabilir, `SIYASI_KIP` deseninde"* diyordu.
Çalışma anında ileri geri geçiş yaptım:

| geçiş | projeksiyon | katman | işaretçi | yeni hata |
|---|---|---:|---:|---:|
| başlangıç | globe | 39 | 173 | 0 |
| → mercator | mercator | 39 | 173 | 0 |
| → globe | globe | 39 | 173 | 0 |

**Hiçbir geçişte katman ya da işaretçi kaybı olmadı, yeni hata doğmadı.**
`unproject` küre merkezinde tam koordinatı döndürdü (35,000°D / 25,000°K).
⇒ **Küre bir KİP olarak eklenebilir; "her şey ya da hiç" değil.**

---

## 3. 🔴 KIRILACAK ŞEYLER — sayıyla

### ③.1 ARKA YÜZ — tek gerçek kırılma, ve ÖLÇÜLDÜ
Küreyi Pasifik'e çevirdim (merkez 160°B). Anadolu, Arabistan ve Sibirya
artık kürenin **arka yüzünde**. Ölçüm:

```
DOM işaretçisi                        173
CSS'te görünür olan                   173   ← hepsi
harita kabının İÇİNE konumlanan       173   ← hepsi
kabın dışına atılan                     0
```
Örnek: **Abu Dabi** (54°D) ve **Albazin** (125°D) — ikisi de arka yüzde —
kabın içinde, görünür ve konumlanmış hâlde bulundu.

⇒ **DOM işaretçileri küre tarafından KAPATILMIYOR.** Uzak yarımkürenin
etiketleri yakın yarımkürenin üzerine biniyor. Ekran görüntüsüyle de
doğrulandı.
📌 Bu **v5'in kusuru değil**: DOM işaretçisi WebGL sahnesinin dışında,
üstte duran bir HTML katmanıdır; küre onu gizleyemez. Aynı şey 4.7.1'de
de olurdu — orada küre olmadığı için **soru hiç doğmuyordu**.
🟢 **Çaresi biliniyor ve ucuz:** her işaretçi için nokta ile kamera
arasındaki açıyı hesaplayıp arka yüzdekileri gizlemek (~15 satır).
⚠️ **Bu çareyi UYGULAMADIM ve SINAMADIM** — `ölçmedim` diye yazıyorum.

### ③.2 🔴🔴 BİR KIRILMA BULDUM AMA v5'İN DEĞİL — ve bu ayrımı KONTROL GRUBU verdi

v5 sayfasında iki hata düştü:
```
Uncaught TypeError: Cannot read properties of undefined (reading 'push')
   js/app.js:8443  ← katmanSinifla()
   ← uygula()  ← katmanSeciciKur()
```
İlk okuyuşta bu *"v5 katman seçiciyi kırıyor"* diye raporlanacaktı.
**Kontrol grubunda aynı çağrıyı koşturdum:**

```
maplibre 4.7.1  →  katmanSinifla()  PATLADI  (aynı hata)
maplibre 5.24.0 →  katmanSinifla()  PATLADI  (aynı hata)
```

⇒ **Kusur `js/app.js`te ve BUGÜN DE VAR.** Sebep tek satır:
```js
KATMAN_KUMESI          → dört kova:  tani · cografya · yollar · siyasi
katmanSinifla()'daki kova → { cografya, yollar, siyasi, siniflanmamis, hazir }
                            ⇒ `tani` YOK
```
`g-nehir-motor` ve `g-sirt-motor` katmanları sahnede **var** (ölçüldü);
`tani` kalıbına düşüyorlar ve `kova.tani.push(...)` **undefined üzerinde**
çağrılıyor.

🔴 **Bugünkü sonucu:** `katmanSinifla()` patlayınca `uygula()` tamamlanmıyor
⇒ **katman seçici düğmeleri ölü.** Bu bir küre kalemi değil, **canlı
yayında duran bir kusur.**
🟢 **Çaresi bir kelime:** `kova`ya `tani: []` eklemek.
⚠️ **UYGULAMADIM** — bu tur fizibilite, `js/app.js`e yayın amaçlı
dokunmadım. Karar Emre'nin.

📌 Ve dersin kendisi: **kontrol grubu olmasaydı var olan bir kusuru
göçün üstüne yıkacaktım** — ve göç haksız yere pahalı görünecekti.

### ③.3 KIRILMADIĞI ÖLÇÜLENLER
```
39 katmanın 39'u        küre kipinde ayakta          🟢
9 sefer katmanı         ayakta                        🟢
173 işaretçi            konumlanıyor (arka yüz hariç) 🟢
kip geçişi              kayıpsız                      🟢
unproject / project     küre üzerinde doğru           🟢
setTerrain              v5'te de fonksiyon olarak VAR 🟢
```

### ③.4 ÖLÇEMEDİĞİM — "temiz" diye okunmayacak
```
⚪ setTerrain + küre BİRLİKTE — setTerrain'in VARLIĞINI ölçtüm,
   arazi ile küreyi birlikte ÇALIŞTIRMADIM
⚪ Küre üzerinde TIKLAMA: queryRenderedFeatures İstanbul'da 0 döndü —
   ama KONTROL GRUBUNDA (mercator) da 0 döndü ⇒ küre kusuru DEĞİL,
   deneme sayfasında o anda o katmanların özelliği yoktu. AYRICA ÖLÇÜLMELİ.
⚪ Kare hızı / küre kipinin çizim maliyeti — koşu 5 CPU'yu paylaşıyor,
   anlamlı ölçüm alınamaz
⚪ Arka yüz gizleme çaresinin gerçekten çalıştığı — yazılmadı, sınanmadı
⚪ 481 işaretçi sayısının kaynağı — bulunamadı
```

---

## 4. BEDEL — ölçüldü

### ④.1 Kütüphane boyutu
```
maplibre 4.7.1     803.086 bayt   (784 KB)
maplibre 5.24.0  1.056.837 bayt  (1.032 KB)   → +254 KB · +%31,6
```

### ④.2 🔴 v6 BAMBAŞKA BİR İŞ — ve sebebi ölçüldü
```
unpkg maplibre-gl@6.7.0/dist/maplibre-gl.js  →  "Not found"
v6 dist içeriği: maplibre-gl.mjs · maplibre-gl-shared.mjs ·
                 maplibre-gl-worker.mjs  (+ dev sürümleri)
⇒ v6'da UMD paketi YOK — YALNIZ ESM.
```
Atlas maplibre'yi düz `<script src>` ile yüklüyor ve küresel `maplibregl`
değişkenini kullanıyor. **v6'da bu desen ölü**: ya `<script type="module">`
+ `import`, ya bir paketleyici gerekir.
⇒ **Hedef 5.24.0 olmalı.** v6 ayrı ve çok daha büyük bir kalemdir.

### ④.3 Sayfanın bugünkü yükü — küreden BAĞIMSIZ
```
index.html'in yüklediği yerel betik   177 dosya · 104,6 MB
  devletler_harita.js  53,7 MB
  donemler.js          32,0 MB
  petek_govde.js        6,2 MB
harita nesnesinin oluşması            19,5 – 29,0 sn
```
⚠️ **Bu süreler koşu 5 sürerken ölçüldü**; boştaki makineyi temsil etmez.
📌 Ama şu bağımsız: **+254 KB'lık kütüphane, 104,6 MB'lık yükün yanında
%0,24'tür.** ⇒ **v5'in boyutu bu projede bir karar ölçütü değildir.**
Yükleme derdi varsa kaynağı kütüphane değil **veri**dir.

---

## 5. 🔴 YÖNTEM NOTU — bu turda iki kez yanlış hüküm verilecekti

```
① "v4'te katmanlar hiç yüklenmiyor"  → ARTEFAKT
   Sayfa gizli pane'de açılınca MapLibre ilk çizimi yapmıyor, `load`
   ateşlemiyor, app.js'in 37 addLayer'ı hiç koşmuyor.
   Ölçüm: isStyleLoaded()=true · areTilesLoaded()=true · loaded()=FALSE
          bekleyen `load` dinleyicisi: 3
   ⇒ Pane öne alınıp yeniden yüklenince 39 katman geldi.
   📌 Şartnamenin uyardığı tuzağın BİR KADEME DERİNİ: yalnız ölçüm değil,
      SAYFANIN KENDİSİ gizli pane'de başka davranıyor.

② "v5 katman seçiciyi kırıyor"  → KONTROL GRUBU ÇÜRÜTTÜ
   Aynı hata 4.7.1'de de düşüyor (③.2).
```
Her iki durumda da alet **hata vermedi**, **inandırıcı bir sayı** üretti.

---

## 6. ÖNERİ — ve karar Emre'nin

```
🟢 ÖNERİM: KADEMELİ — maplibre 5.24.0 + küre AYRI BİR KİP
```
**Dört ölçülmüş sebeple:**
1. **Risk kademelendi:** kip geçişi kayıpsız çalışıyor (39/39 katman,
   173/173 işaretçi, 0 yeni hata). Küre kapalıyken atlas bugünkü gibi.
2. **Göçün bedeli küçük:** +254 KB = toplam yükün %0,24'ü.
3. **Kırılacak tek şey biliniyor ve sınırlı:** arka yüz işaretçileri.
   Çaresi de biliniyor (~15 satır), ama **sınanmadı**.
4. **v6 ayrı bir iş:** UMD kalktı; bugünkü `<script src>` deseni ölür.

**Sıra önerim (uygulamadım, seçmedim — sayıyorum):**
```
① `js/app.js:8429` kova'ya `tani: []`  ← KÜREDEN BAĞIMSIZ, bugün kırık
② maplibre 4.7.1 → 5.24.0, küre KAPALI ⇒ hiçbir görünür değişiklik olmamalı
③ arka yüz gizleme yazılıp SINANIR
④ küre kipi düğmesi (`SIYASI_KIP` deseni)
```
⚠️ ①'in ②'den önce gelmesi kasıtlı: kırık bir seçiciyle göç edilirse,
göçten sonra *"v5 kırdı"* diye okunur — bugün bana neredeyse öyle oldu.

---
---

# EK — 5 Eylül 2026 · ARKA YÜZ ÇARESİ ve İKİ AÇIK KALEM

> Sevk: `M-2678` (③ arka yüz gizleme + iki açık kalem).
> `js/app.js`e **dokunulmadı** — çare ayrı bir dosyada:
> `denetim/kure-arka-yuz.js`, deneme sayfasına maplibre'den SONRA,
> `app.js`ten ÖNCE yükleniyor ve `maplibregl.Marker`ı sarmalıyor.

## 🔴🔴 E0. ÖNCE KENDİ DAMGAMI ÇÜRÜTÜYORUM — "481 ÇÜRÜDÜ" YANLIŞTI

Yukarıda `§1`de **481 DOM işaretçisi** iddiasına **ÇÜRÜDÜ** damgası
vurdum ve *"173, ve 10 tarih × 4 zoom seviyesinde sabit"* yazdım.
**O damga YANLIŞ.** Bugün aynı sayfayı daha uzun bekleyerek ölçtüm:

```
sayfa yüklenirken (~20 sn)            173     ← benim dün ölçtüğüm
tam yüklendikten sonra, Anadolu z5,5  481     ← devralınan sayı
dünya görünümü z1,2                   951 – 1.104
```
**Bileşim (tam yüklü):**
```
(sınıfsız, şehir)  280      bosluk-kutu   92      devlet-etiket 27
bosluk-benek        49      bosluk-soru   32      bolge-etiket   1   = 481
```
⇒ Ben yalnız **boşluk işaretçilerini** (173) yakalamışım; şehir ve devlet
etiketleri (308) henüz yaratılmamıştı. **Devralınan 481 DOĞRUYDU.**

📌 İki ders, ikisi de bende:
1. **Ölçüm doğruydu, ANI yanlıştı.** Sayı `load`dan sonra da büyümeye
   devam ediyor; "yüklendi" bir an değil bir **aralık**.
2. **`sabit` demek `ölçtüm` demek değil.** On tarih ve dört zoom denedim
   ve hep 173 gördüm — çünkü hepsini **aynı erken pencerede** ölçtüm.
   Tekrar, evreni genişletmez.
🔴 Ve bu, projenin *"yanlış damga en pahalısıdır"* kuralının canlı
vakası: `ÇÜRÜDÜ` damgası bir sonraki oturumu o sayıyı **aramaktan
alıkoyardı.**

🟢 **VE SAYI GÖRÜNÜME BAĞLI** — küre için asıl önemli olan bu:
```
Anadolu z5,5   481          dünya z1,2   951 – 1.104
```
Küre kipi **tam da dünya görünümüdür** ⇒ arka yüz derdi 481'lik değil,
**~1.100'lük** bir dert.

## E1. ÇARE — `denetim/kure-arka-yuz.js`

Küre merkezi ile işaretçi arasındaki **büyük çember açısı** hesaplanır;
açı ufuk açısını aşarsa işaretçi `visibility:hidden` olur.
Bağlanma **her kare değil**, `move`/`zoom`/`rotate`/`pitch`/`moveend`
olaylarında.

## E2. İKİ YÖNDE SINANDI (`C13`)

Hepsi aynı görünümde (merkez 160°B, zoom 1,2), aynı 1.104 işaretçiyle:

| yol | projeksiyon | DOM | gizli | görünür | damga |
|---|---|---:|---:|---:|---|
| **GEÇME** | mercator | 1.104 | **0** | 1.104 | 🟢 hiçbir şey gizlenmedi |
| **ATEŞLEME** | globe | 1.104 | **1.049** | 55 | 🟢 arka yüz gizlendi |
| **KONTROL** (çare kapalı) | globe | 1.104 | 0 | 1.104 | 🟢 kusur gerçek |
| küre, Anadolu merkez | globe | 906 | 121 | 785 | — |

**Kontrol satırı şart:** çare kapalıyken aynı görünümde gizli 0 çıkıyor
⇒ ölçtüğüm şey çarenin **kendi etkisi**, sayfanın bir yan etkisi değil.
Ekran görüntüsüyle de doğrulandı (çare kapalı: Eski Dünya etiketleri
Pasifik'in üstünde; çare açık: gittiler).

## E3. BEDEL — ölçüldü

```
354 işaretçi   0,404 – 0,487 ms / çağrı
830 işaretçi   0,744 ms / çağrı        ← en kötü hâl
```
Olay tabanlı bağlandığı için yalnız kamera oynarken koşuyor.
*Her karede* koşsaydı 60 fps'te **24 – 45 ms/sn** (bir çekirdeğin
%2,4 – %4,5'i) ederdi.
⚠️ **Koşu 5 CPU'yu paylaşıyor — bu sayılar boştaki makineyi TEMSİL
ETMEZ.** Kare hızı ölçülemedi: `requestAnimationFrame` gizli belgede
durduruluyor, ölçüm asıldı ⇒ **ÖLÇÜLEMEDİ**.

## E4. 🔴 ÇAREMİN SINIRI — kendi aletimi ihbar ediyorum

Ufuk açısını kütüphanenin iç durumundan okumuyorum (iç API'ler sürüm
arası değişir); **zoom'dan türetiyorum** ve formül **ampiriktir**:
```
z 1,2 → ufuk 65,3°     (ortografik sınır 90° olurdu)
```
65,3° **temkinli** bir kesim: kenar yakınındaki bazı **görünür**
işaretçileri de gizliyor olabilir.

**Yanlış pozitif sınavı yazdım ve SONUÇSUZ kaldı:** gizlenen 155
işaretçinin 62'si ekranda küre diskinin içine düşüyor gibi görünüyor —
**ama `project()` arka yüzdeki noktayı ön yüze KATLIYOR**, yani bu sayı
bir **üst sınır**, kanıt değil. Örneklerin üçü de (Acoma Pueblo 107°B ·
Finschhafen · Madang) merkeze 140°'den uzak, yani **gerçekten arka
yüzde** — sınavım onları yanlış pozitif sanıyordu.
⇒ **DAMGA: ÖLÇÜLEMEDİ.** Üretime alınmadan önce ufuk açısı
kalibre edilmeli; `ARKA.pay(derece)` bunun için var.

## E5. İKİ AÇIK KALEM — İKİSİ DE KAPANDI

### `setTerrain` + küre BİRLİKTE 🟢
```
raster-dem kaynağı eklendi · setTerrain({exaggeration:1.4}) çağrıldı
getTerrain() → true · projeksiyon → globe · katman 39 · YENİ HATA 0
```
**Birlikte çalışıyorlar.**

### Küre üzerinde TIKLAMA / `queryRenderedFeatures` 🟢
Dün 0 dönmüştü; sebebi **veri katmanlarının o an boş olmasıydı** (kontrol
grubunda mercator da 0 dönmüştü). Veri yüklüyken tekrar ölçtüm:

| | ekranda toplam özellik | İstanbul ±8 px | katmanlar |
|---|---:|---:|---|
| mercator | 270 | 18 | devlet-cizgi · devlet-dolgu · g-gol · g-kara |
| **globe** | **270** | **18** | aynı |

**Birebir aynı.** Küre etkileşimi kırmıyor.

## E6. ÖZET — bu turun eklediği

```
🟢 arka yüz çaresi YAZILDI ve İKİ YÖNDE sınandı (1.049/1.104 gizlendi,
   mercator'da 0 gizlendi, kontrol grubuyla)
🟢 setTerrain + küre BİRLİKTE çalışıyor
🟢 küre üzerinde tıklama/sorgu mercator ile BİREBİR aynı
🔴 kendi "481 ÇÜRÜDÜ" damgam YANLIŞTI — sayı doğru, benim ölçüm ANIM erken
⚪ ufuk açısı ampirik, kalibre edilmedi — ÖLÇÜLEMEDİ
⚪ kare hızı — rAF gizli belgede durur, ÖLÇÜLEMEDİ
```

## 7. BIRAKTIĞIM DOSYALAR
```
denetim/BULGU-KURE-0904.md      bu rapor
denetim/kure-deneme-v4.html     KONTROL GRUBU — silinebilir
denetim/kure-deneme-v5.html     çalışan küre kanıtı — silinebilir
denetim/kure-deneme-v6.html     ESM olduğu için ÇALIŞMAZ — silinebilir
```
Üçü de **deneme artefaktıdır**, yayının parçası değildir.
`index.html` · `js/app.js` · `css/style.css` **değiştirilmedi**.
