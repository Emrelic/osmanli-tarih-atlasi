# YAPI DENETİM 3 · İŞ 1 — `H-0023` ETİKETSİZ GÖVDE

> **Emre'nin isteği:** *"haritada hiçbir zaman çizelgesindeki noktada ETİKETSİZ
> toprak parçası olmamalı; hangi devlete aitse etiketi kesin olmalı.
> BİR KONTROL ÇALIŞTIRALIM ve hepsini kontrol etsin."*

**Ölçüm tarihi:** 14 Ağustos 2026, 07:20–07:50 · **Taban:** r1288 (`91e3d1c`),
`data/devletler_harita.js` 20:13 üretimi · **Ölçen:** YAPI DENETİM 3

---

## 0. ÖNCE ŞUNU AYIRT ETTİM: VERİ TEMİZ, KUSUR ÇİZİMDE

Şartname *"kimlik tarafının ölçüldüğünü ama ekran tarafının ayrı olduğunu,
ikisinin aynı olduğunu VARSAYMA"* diyordu. Ölçtüm — **veri tarafı kusursuz:**

```
DEVLET_HARITA kimlik sayısı                 305
toplam gövde-dönem kaydı                   2563
ad alanı BOŞ                                  0
renk alanı BOŞ                                0
etiket çapası (c) YOK                         0
parçası (g) YOK → hiç çizilmez                0
künyesi YOK (id ve harita: ikisi de tutmuyor) 0
ad === id (ham slug gösteren)                 0
```
⇒ **Ölçüm:** her kimliğin adı, rengi ve künyesi var.
⇒ **Çıkarım (ayrı satır):** Emre'nin gördüğü etiketsizlik veriden gelmiyor.
Kusur **`js/app.js`in etiket yerleştirme mantığında** — ve orada iki ayrı
eleme kapısı var.

---

## 1. MEKANİZMA — bir gövde iki yoldan adsız kalır

`js/app.js:396 etiketleriYerlestir()`:

```
① ALAN EŞİĞİ    app.js:404   esik = 0.55 / 2^(z-3)      alan < esik ⇒ etiket YOK
② ÇAKIŞMA       app.js:429   kutu başka etiketle kesişiyorsa ⇒ etiket YOK
                             (büyük gövde önce yerleşir, app.js:325)
```
⚠️ **Eşik ZOOM'a bağlı** ⇒ *"kaç gövde etiketsiz"* sorusunun **tek bir sayısı
yoktur.** Uzaklaştıkça eşik büyür, etiket sayısı düşer. Bu yüzden üç zoomda
ölçtüm: **2,5 (minZoom)** · **5,5 (açılış zoomu, `app.js:572`)** · **8 (maxZoom)**.

---

## 2. ANA ÖLÇÜM — "bu devlet sahnede AMA ADI HİÇ GEÇMİYOR"

Gövde başına değil **devlet başına** saydım; çünkü Emre'nin sorusu *"şu toprak
kimin"*dir ve bir devletin **bir** etiketi görünüyorsa soru cevaplanmıştır.
Örneklem: **1300–1900 arası 25 yılda bir, 25 kesit** (`YYYY-06-15`).

| zoom | sahnedeki devlet-tarih çifti | 🔴 ADI HİÇ GEÇMEYEN | oran |
|---|---|---|---|
| 2,5 (minZoom) | 2845 | **1164** | **%40,9** |
| 5,5 (açılış) | 2845 | **127** | **%4,5** |
| 8 (maxZoom) | 2845 | **2** | %0,1 |

### En büyük sessiz gövdeler — açılış zoomunda (5,5)
```
1875-06-15  nguyen-hanedani     28,8 derece²   ~343.579 km²
1300-1550   lan-na               8,7 derece²   ~101.198 km²   (11 kesitte üst üste)
1475-1550   astarhan            11,4-14,0      ~130.000 km²
1450-1500   nogay                9,4-39,0      ~110.000 km²
```
### Uzaklaşınca (zoom 2,5) — kullanıcının imparatorluk büyükken gördüğü hâl
```
1900  habesistan       93,0 derece²  ~1.138.309 km²     ← BİR MİLYON KM²'DEN BÜYÜK
1825  konbaung         73,5          ~857.026 km²
1425  delhi-sultanligi 58,0          ~607.497 km²
1825  afgan-durrani    57,5          ~590.562 km²
1300-1425 habesistan   45,6          ~549.318 km²  (altı kesitte üst üste)
```

📌 **Ve desen tesadüfi değil:** sessiz kalan gövdelerin çoğu **Hindistan ·
Güneydoğu Asya · Habeşistan · Bozkır** — yani kronolojinin az konuştuğu,
kullanıcının *"burası kimin"* diye en çok soracağı coğrafyalar.

## 2.1 Gövde (halka) başına döküm — aynı örneklem

```
zoom 2,5   çizilen dış halka 62.221 · etiket kondu  2.521 (%4,1)
           etiketsiz: alan eşiği 57.767 (%92,8) · çakışma 1.933 (%3,1)
zoom 5,5   çizilen dış halka 62.221 · etiket kondu  6.277 (%10,1)
           etiketsiz: alan eşiği 55.673 (%89,5) · çakışma   271 (%0,4)
zoom 8     çizilen dış halka 62.221 · etiket kondu 11.858 (%19,1)
           etiketsiz: alan eşiği 50.307 (%80,9) · çakışma    56 (%0,1)
```
⚠️ **Bu tablodaki %89,5 bir İHLAL DEĞİLDİR ve öyle raporlanmamalı.** Halkaların
ezici çoğunluğu petek kırıntısı / adacık; ekranda birkaç pikseldir ve adı
yazılamaz. Anlamlı olan **§2'deki devlet başına** ölçümdür.
🔴 Ama çakışma sütunu ayrı: zoom 5,5'te **alanı 5 derece²'den büyük** olduğu
hâlde çakışmadan elenen **17 gövde-tarih çifti** var — bunlar *"küçük olduğu
için yazılamadı"* değil, ***"yeri vardı, komşusunun etiketi kapattı"***.

---

## 3. 🟢 MODELİN DOĞRULAMASI — taklit değil, CANLI SAYFAYLA KARŞILAŞTIRILDI

Ölçümü `node` ile yaptım ve `app.js`in mantığını **kopyalayarak** taklit ettim.
Taklit bir risktir (`§11`: *kendi ayrıştırıcını yazma*), o yüzden **canlı
yayını açıp sayfanın KENDİ fonksiyonlarına aynı soruyu sordum** —
`https://emrelic.github.io/osmanli-tarih-atlasi/`, kesit `1500-06-15`:

```
                     CANLI SAYFA        BENİM MODELİM
dış halka                  2481                 2481   ✓
sahnedeki devlet            127                  127   ✓
toplam alan (derece²)   4066,27              4066,27   ✓
lan-na                    8,655                8,655   ✓
astarhan                 14,041               14,041   ✓
nogay                    39,007               39,007   ✓
memluk                  133,300              133,300   ✓
```
Ve projeksiyon ayrı sınandı (`harita.project` ↔ kendi Web Mercator'üm), üç
nokta çiftinde **üç ondalığa kadar aynı**:
```
dx_ab 321,812 · dy_ab -436,859 · dx_ac 4505,370 · dy_ac 3460,296   (ikisi de)
```
⇒ **Geometri sayfanın kendi fonksiyonlarıyla, projeksiyon haritanın kendi
projesiyle doğrulandı.** Modelin doğrulanmamış tek parçası kalmadı.

⚠️ **Ölçemediğim (ayrı kova, "temiz" diye raporlamıyorum):** tarayıcı
penceresinde `haritaHazir === false` kaldı (harita stili yüklenmedi), yani
**DOM'a gerçekten kaç etiket düştüğünü** canlı sayamadım. Doğrulama
fonksiyon düzeyinde yapıldı, piksel düzeyinde **yapılmadı**.

---

## 4. AYRI BİR BULGU — OSMANLI VE TÂBİ GÖVDELERİNİN HİÇ ETİKETİ YOK

`etiketAdaylari` yalnız `devletler2` (= `DEVLET_HARITA`, **yabancı** devletler)
üzerinden kuruluyor (`app.js:304`). Osmanlı doğrudan toprağı ve tâbi toprağı
**hiçbir zoomda ad almıyor** — rengi ve lejantı var, **yazısı yok.**

⇒ Bunu **ihlal diye raporlamıyorum**, çünkü tasarım olabilir (atlasın öznesi
Osmanlı; lejant onu söylüyor). Ama Emre'nin cümlesi *"hangi devlete aitse
etiketi KESİN olmalı"* diyor ve tâbi gövdeler (Boğdan · Eflak · Erdel · Kırım)
bugün **jenerik tek renkle, adsız** çiziliyor.
📌 Bu, `M-0021`de koordinatörün bulduğu *"Erdel 158 yıl yaşadı ve haritada adı
hiç geçmedi"* zincirinin **ikinci ucu**: orada kusur RENK TABLOSUNDAYDI,
burada **etiket katmanında.** İkisi kapanmadan Erdel adı ekrana gelmez.
**Karar Emre'nin / koordinatörün** — ben ölçtüm, hüküm vermiyorum.

---

## 5. HENÜZ YAPILMADI

```
· arac/denetle.py'ye `etiketsiz_govde()` fonksiyonu     — sırada
· C13 iki yönlü sınama (GEÇME + ATEŞLEME)               — sırada
· İŞ 2 (H-0024 sessiz toprak değişimi)                  — başlanmadı
· İŞ 3 (H-0066 kopuk gövde / enklav)                    — başlanmadı
```
