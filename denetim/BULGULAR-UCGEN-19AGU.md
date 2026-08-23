# ÜÇGEN / OK UCU BOZUKLUKLARI — 1703-08-22

**Oturum:** ÜÇGEN (Oturum 2 sınıfı — yalnız ölçer, düzeltme uygulamaz)
**Tarih:** 20 Ağustos 2026
**Şikâyet:** Emre, 1703-08-22 tarihli 5 ekran görüntüsünde Osmanlı gövdesinin
kenarlarından dışarı uzanan **üçgen / ok ucu** biçimli **soluk kırmızı**
bozukluklar bildirdi. *"Sanki bir köşeden ışın çıkıyor gibi."*

---

## 0. ÖLÇÜM TABANI — ve bir uyarı

```
data/donemler.js          2026-08-20 02:10:46   (SERBEST havuzu 534 hat)
data/devletler_harita.js  2026-08-20 02:10:42
```

⚠️ **DOSYA OTURUM ORTASINDA DEĞİŞTİ.** İlk üç ölçümüm 02:10 ÖNCESİ dosyayla
yapıldı (`SERBEST_U` 548 hat), sonrakiler sonrasıyla (534 hat). Bir otomatik
üretim koşusu (`kosu_otomatik.log`, 02:13) araya girdi.
**Aşağıdaki bütün sayılar 02:10 SONRASI dosyadan yeniden ölçüldü** — havuz
indeksleri iki sürüm arasında kaydığı için eski indeksler kullanılmadı.
📌 Ve nitel sonuç iki sürümde de aynı: aynı hatlar, aynı `u` değerleri,
aynı köşeler. Değişen yalnız havuz numaralandırması.

**1703-08-22'de aktif dönem: TEK.**
```
idx 298 · 1699-01-26 → 1705-07-17
"Kayıp: Kamaniçe, Çehrin (Çigirin), Bar (Podolya)…"
o (doğrudan) 150 parça · v (tâbi) 9 parça · sb (serbest kenar) 31 hat
```

**Emre'nin kutuları** (hepsi çöl, hepsi seyrek noktalı):
```
K1  25,72-28,09 K · 20,49-24,97 D   z6,2    (Libya — Sirte/Kufra arası)
K2  22,90-27,46 K · 15,90-20,71 D   z5,9    (Fizan — Sahra)
K3  23,20-27,92 K ·  6,12- 9,42 D   z5,6    (Cezayir/Tunus güney Sahra)
K4  29,60-32,48 K · 41,81-43,61 D   z6,6    (Bâdiyetü'ş-Şâm — Suriye çölü)
K5  29,76-31,77 K · 45,33-46,91 D   z7,1    (Basra kuzeybatısı — Necid kenarı)
```

---

## 1. ADAY 1 — GEOMETRİ: kendini kesen halka / ince uzun "spike"

### ÖLÇTÜĞÜM
`shapely 2.1.2` ile, dönem 298'in bütün gövdesi kuruldu (`PARCA_HALKA` → halka
0 dış, kalanlar delik) ve `is_valid` + Polsby-Popper yuvarlaklık (`4πA/P²`)
ölçüldü:

```
KATMAN                parça   kurulamayan   GEÇERSİZ poligon
Osmanlı doğrudan (o)   150         0              0
tâbi (v)                 9         0              0
```

Kutu başına kesişen parça sayısı ve en ipince parça:
```
[K1] kesişen parça 1 · geçersiz 0     [K4] kesişen parça 1 · geçersiz 0
[K2] kesişen parça 1 · geçersiz 0     [K5] kesişen parça 1 · geçersiz 0
[K3] kesişen parça 1 · geçersiz 0
```
Beş kutuda da kesişen **tek** parça aynı: ana imparatorluk gövdesi
(alan 345 deg², bbox 6,25/20,16 – 48,20/44,82). Yuvarlaklığı 0,0398 —
düşük, ama bu bir spike değil, **imparatorluk gövdesinin kendisi**: bir kıtaya
yayılmış gövde tanımı gereği daireden uzaktır.

En ipince gerçek parçalar (`yuv` 0,051-0,074) Nil deltası, Şattülarap ve Basra
körfezi kıyısındaki küçük petekler — **hiçbiri Emre'nin kutularında değil.**

### ÇIKARDIĞIM
**ADAY 1 ÇÜRÜDÜ.** Emre'nin beş kutusunda ne geçersiz halka var, ne ince-uzun
üçgen parça. Kutulardaki gövde tek, geçerli ve bütün bir poligon. Bozukluk
dolgu geometrisinden gelmiyor.

---

## 2. ADAY 2 — SADELEŞTİRME (Chaikin / `seyrelt()` / `SEYRELT_TOL = 0.03`)

### ÖLÇTÜĞÜM
`arac/uret_petek.py` içinde `seyrelt()` **tek bir yerde** çağrılıyor:

```
uret_petek.py:3937   DEV_HALKA = seyrelt(DEV_HALKA, DEV_PARCA, DEVLET_KAYIT, _don, SEYRELT_TOL)
```

ve dosyanın kendi yorumu (`:3911-3912`) bunu açıkça söylüyor:
> *"⚠️ YALNIZ YABANCI HAVUZ. Osmanlı havuzu (`PARCALAR`) ELLENMİYOR."*

⇒ Seyreltme **Osmanlı gövdesine dokunmuyor** ve **SERBEST hat havuzuna hiç
dokunmuyor** (`SRB_HAVUZ` `seyrelt()` çağrısının argümanı değil).

Chaikin (`chaikin_acik`, `:976`, çağrısı `:1203`) yumuşatma aşamasındadır ve
**köşeyi keskinleştirmez, kırar** — spike üretmesi yön olarak ters.

### ÇIKARDIĞIM
**ADAY 2 ÇÜRÜDÜ.** Ne `seyrelt()` ne Chaikin, Emre'nin kutularındaki gövde
kenarına ya da serbest hatlara uygulanıyor. Sadeleştirme sebep değil.

⚠️ Ama bir yan bulgu var ve ADAY 5'e bağlanıyor: serbest hat koordinatları
`hat_koord()` (`:2775`) içinde **3 ondalığa yuvarlanıyor (~111 m)** ve hat
`gövde.boundary ∩ boş_bölge.buffer(0,02)` kesişiminden doğduğu için
**0,11-0,24 km'lik dejenere segmentler ve 36-65°'lik mikro köşeler** taşıyor.
Bunlar sadeleştirmenin ürünü değil, **kesişimin** ürünü.

---

## 3. ADAY 3 — ÇİZİM: aynı gövde üst üste mi çiziliyor (opaklık birikmesi)

### ÖLÇTÜĞÜM
**(a) `o` ile `v` çakışması:** 0,00054 deg² — sıfıra yakın kıymık.
(`o` alanı 419,2 deg² · `v` alanı 78,8 deg²; oran binde 1'in altı.)

**(b) `o` parçaları kendi aralarında:** çakışan çift **0**, toplam çakışma
alanı **0,00000000 deg²**. Aynı gövde iki kez çizilmiyor.

**(c) Yabancı gövdeler (`devlet-dolgu`, opaklık 0,44):** 1703-08-22'de sahnede
15 yabancı devlet var. Emre'nin kutularına giren **tek** gövde:
```
safevi  #a56cab (mor)  K5'te 0,0007 deg²   ← ihmal edilebilir, ve MOR
```
K1-K4'e giren yabancı gövde **YOK**.

**(d) Öteki katmanlar aynı gün, aynı kutularda:**
```
devir-dolgu    1699-1705 arası tek devir kaydı (Karlofça 1699-01-26);
               gövdelerinin HİÇBİRİ kutulara girmiyor        → 0
isgal-dolgu    1703-08-22'de aktif işgal kaydı               → 0
sefer-cizgi-*  61 seferin 1703-08-22'de aktif olanı          → 0
koridor-*      layout.visibility = "none" (varsayılan kapalı) → 0
bolge-cizgi    minzoom 5,2 · ince kesikli kahverengi, dolgu opaklığı 0
```

⇒ **1703-08-22'de bu beş kutuda ekrana çizilen her şeyin tam listesi:**
```
osmanli-dolgu      #8e0b22  opaklık 0,68   (tek, geçerli poligon)
osmanli-cizgi      #4d0713  1,8 px
imparatorluk-hale  #6d0d1c  3,5 px (dolguların ALTINDA)
serbest-hale       #8e0b22  opaklık 0,45   line-blur · 80-350 px GENİŞ
serbest-cekirdek   #8e0b22  opaklık 0,50   line-blur · 0,35 × genişlik
(yalnız K5)        safevi #a56cab, 0,0007 deg²
```

**(e) Serbest halelerin BİRBİRİYLE çakışması** (bu ADAY 3'ün gerçek yüzü):
```
kutu   ilgili hat   birleşim      toplam(çakışmalar sayılarak)   KATLILIK
K1          1       7,5228 deg²        7,5228                     1,00×
K2          2      14,4840            16,0569                     1,11×
K3          3      12,4701            15,0244                     1,20×
K4          4       4,4542             4,6974                     1,05×
K5          6       1,7722             2,2627                     1,28×
```

### ÇIKARDIĞIM
**ADAY 3, "iki DOLGU üst üste" biçiminde ÇÜRÜDÜ** — ölçülen çakışma
0,00054 deg² ve sıfır çift.

**Ama "yarı saydam katman birikmesi" sezgisi DOĞRU, sadece yeri farklı:**
soluk kırmızı, iki ayrı katmanın (`serbest-hale` 0,45 + `serbest-cekirdek`
0,50) üst üste binmesinden geliyor — bileşik opaklık
`1-(1-0,45)(1-0,50) = 0,725`, Osmanlı dolgusunun 0,68'inin **üstünde**, ve
`line-blur` yüzünden kenarlara doğru sönerek **soluk** okunuyor.
Ayrıca K5'te 6 ayrı hat halesi üst üste biniyor (katlılık 1,28×).

📌 Emre'nin *"üst üste binen yarı saydam katmanlara benziyor"* tarifi
**doğruydu**; benim ölçmem gereken şey dolgular değil, **hat halesiydi.**

---

## 4. ADAY 4 — A1 YARIÇAP TAVANI (`TAVAN_KM`) kesme artığı

### ÖLÇTÜĞÜM
Tavan çokgeni `_tv_cokgen_kur()` (`uret_petek.py:844`) ile kuruluyor ve
parametreleri dar mızrak üretmeyi **yapısal olarak engelliyor**:
```
_TV_SEKTOR   = 16     yön çözünürlüğü 22,5°
_TV_KOSE     = 128    çokgen köşe sayısı (yumuşak)
_TV_ANIZ_KAT = 1.75   "şekil oranı sınırı: hiçbir yön medyanın ±bu katından
                       öteye gidemez (dar mızrak çıkmasın diye)"
```
Sektörler arası geçiş doğrusal (`:845-846`: *"köşeli sıçrama ortak kenar ağını
bozardı"*), yani tavan bir **yıldız değil, 128 köşeli düzgünleşmiş elips**.

Kesim sonucu ölçüldü — kutu içindeki Osmanlı gövdesi:
```
[K1] alan  6,6994 deg²  parça tipi Polygon
[K2] alan 13,5529 deg²  parça tipi Polygon
[K3] alan 10,2641 deg²  parça tipi Polygon
[K4] alan  3,3072 deg²  parça tipi Polygon
[K5] alan  0,9423 deg²  parça tipi MultiPolygon
```
K1-K4'te gövde **tek bir Polygon** — tavan kesiminden artmış ayrı üçgen parça
yok. K5'teki MultiPolygon Şattülarap/Basra kıyı adacıklarıdır, kutunun
kuzeybatı çöl kenarında değil.

### ÇIKARDIĞIM
**ADAY 4 ÇÜRÜDÜ.** Tavan dairesel değil ama **anizotropisi 1,75× ile sınırlı
ve 128 köşeyle yumuşatılmış**; kestiği kenar üçgen artık bırakmıyor, ve
kutularda böyle bir artık ölçülmedi.

---

## 5. ADAY 5 — **`serbest-hale` / `serbest-cekirdek`: zoom'la ikiye katlanan, ÜST SINIRSIZ hat genişliği**

*(Şartnamede yoktu; eleme sonucu geriye kalan tek aday, ve ölçüm onu doğruluyor.)*

### 5.1 Mekanizma — kodda ne yazıyor

`js/app.js:820-840`:
```js
var U  = ["coalesce", ["get", "u"], 60];       // hattın belirsizliği, KM
var Z0 = 2, Z1 = 9;
function yerOlcek(k) {
  return ["interpolate", ["exponential", 2], ["zoom"],
          Z0, ["*", U, k * Math.pow(2, Z0) / 67.8],
          Z1, ["*", U, k * Math.pow(2, Z1) / 67.8]];
}
var YER_GENISLIK = yerOlcek(1);     var YER_BULANIK  = yerOlcek(0.85);
var YER_CEKIRDEK = yerOlcek(0.35);  var YER_CBULANIK = yerOlcek(0.28);
harita.addLayer({ id: "serbest-hale", ...
  paint: { "line-color": "#8e0b22", "line-width": YER_GENISLIK,
           "line-blur": YER_BULANIK, "line-opacity": 0.45 } });
harita.addLayer({ id: "serbest-cekirdek", ...
  paint: { "line-color": "#8e0b22", "line-width": YER_CEKIRDEK,
           "line-blur": YER_CBULANIK, "line-opacity": 0.5 } });
```

Formül: **`genişlik_px = u_km × 2^zoom / 67,8`** — yani hat **sabit bir YER
genişliğine** karşılık geliyor (tasarım kararı, ve gerekçesi sağlam: hale bir
görsel efekt değil, *belirsizlik ölçüsü*). **Ama üst sınırı yok.**

### 5.2 ÖLÇTÜĞÜM — `u` ne kadar büyüyor

`SERBEST_U` havuzunun tamamı (534 hat):
```
min 5,2 · Q1 55,9 · MEDYAN 103,2 · Q3 149,3 · MAX 273,8 km
u ≥  60 km : 384 hat (%72)      u ≥ 150 km : 126 hat (%24)
u ≥ 100 km : 276 hat (%52)      u ≥ 200 km :  39 hat (%7)
                                u ≥ 250 km :   7 hat (%1)
u ≥ 150 km hat TAŞIYAN dönem: 330 / 513
```

Ekrana çizilen genişlik:
```
u (km)     z5      z6      z7       z8
  22,5     11 px   21 px   42 px     85 px
  60,0     28      57     113       227
 100,0     47      94     189       378
 150,0     71     142     283       566
 200,0     94     189     378       755
 269,4    127     254     509     1017 px      ← ekranın tamamı
```

### 5.3 ÖLÇTÜĞÜM — Emre'nin BEŞ kutusunun beşinde de bu hatlar var

```
[K1] z6,2   hat 163  u=149,3 km → 161,9 px  (dışarı 75 km)
[K2] z5,9   hat 163  u=149,3 → 131,5 px · hat 164  u=225,7 → 198,8 px (dışarı 113 km)
[K3] z5,6   hat 162  u=269,4 → 192,7 px (dışarı 135 km) · hat 165 u=233,5 → 167,0 px
            · hat 133 u=153,7 → 110,0 px
[K4] z6,6   hat 32   u=244,7 → 350,1 px (dışarı 122 km) · hat 36 u=122,8 → 175,7 px
            · hat 33 u=55,9 → 80,0 px · hat 35 u=25,5 → 36,5 px
[K5] z7,1   hat 43 u=63,8 → 129,1 px · hat 40 u=63,7 → 128,9 px
            · hat 41/42/105 u=56,6 → 114,5 px · hat 44 u=48,9 → 98,9 px
```

### 5.4 ÖLÇTÜĞÜM — halenin GÖVDE DIŞINA taşması

İdeal yuvarlak birleşim (`shapely buffer(u/2)`) ile:
```
kutu   hale kutu içinde        hale GÖVDE DIŞINDA
K1     7,523 deg² (%71)        3,351 deg² — kutunun %32'si
K2    14,484     (%66)         6,375     — kutunun %29'u
K3    12,470     (%80)         4,954     — kutunun %32'si
K4     4,454     (%86)         1,877     — kutunun %36'sı
K5     1,772     (%56)         1,074     — kutunun %34'ü
```
⇒ **Her kutunun yaklaşık üçte biri, gövdenin DIŞINDA kalan soluk kırmızı
hale.** Emre'nin tarifi birebir bu.

### 5.5 ÖLÇTÜĞÜM — ÜÇGEN/OK UCU biçimi nereden geliyor

Hat geometrisi `gövde.boundary ∩ boş_bölge.buffer(0,02)` kesişiminden doğuyor
(`uret_petek.py:2707-2718`) ve **çok kısa segmentler + keskin köşeler**
taşıyor. Genişlik ile segment uzunluğunun oranı:

```
kutu  hat   u      en kısa segment    GENİŞLİK / EN KISA SEGMENT
K1    163   149,3    0,24 km (0,3 px)        616 ×
K2    164   225,7    3,02 km (2,7 px)         75 ×
K3    165   233,5    0,22 km (0,2 px)      1 056 ×
K3    162   269,4    2,00 km (1,4 px)        135 ×
K4     32   244,7    2,50 km (3,6 px)         98 ×
K4     36   122,8    0,44 km (0,6 px)        282 ×
K5     43    63,8    0,11 km (0,2 px)        577 ×
K5     42    56,6    0,80 km (1,6 px)         71 ×   (hattın TAMAMI 2,5 km)
```

Ve köşe keskinliği + o köşenin dışarı uzanma boyu
(`uzantı = min(1/cos(dönüş/2), 2) × u/2`):

```
kutu  hat  köşe       konum            iç açı    DIŞARI UZANTI
K3    165  #1     ( 9,313 · 24,032)     58,7°    233,5 km = 167,0 px
K1    163  #68    (20,559 · 27,297)     64,9°    139,2 km = 150,9 px
K1    163  #55    (24,537 · 27,936)     69,7°    130,6 km = 141,6 px
K4     32  #1     (43,231 · 29,633)    136,1°    131,9 km = 188,8 px
K4     32  #4     (41,950 · 31,192)    139,4°    130,5 km = 186,7 px
K5     42  #1     (46,845 · 30,764)     42,1°     56,6 km = 114,5 px
K5     40  #2     (46,653 · 29,732)     59,4°     63,7 km = 128,9 px
K2    164  #34    (16,284 · 23,113)     96,2°    151,7 km = 133,6 px
```

📌 **`K5 hat 42` en saf vaka:** hattın TAMAMI 2,5 km (5 px), üzerine 114,5 px
genişlik ve 42,1°'lik bir köşe biniyor. Yani **5 piksellik bir çizgi, 114
piksel kalınlıkta çiziliyor.**

### ÇIKARDIĞIM
**ADAY 5 — SEBEP BU.** Üç ayrı ölçüm zinciri aynı yeri gösteriyor:

1. **Eleme:** 1703-08-22'de o beş kutuda **soluk kırmızı çizen tek katman
   çifti** `serbest-hale` + `serbest-cekirdek` (bileşik opaklık 0,725,
   `line-blur`'lu). Öteki bütün katmanlar sıfır ölçüldü (§3d).
2. **Konum ve büyüklük:** beş kutunun beşinde de bu hatlar var, genişlikleri
   80-350 px, ve **gövde dışına taşan kısımları kutuların %29-36'sını**
   kaplıyor (§5.4). Bu, "kenarlardan dışarı uzanan soluk kırmızı"nın ta
   kendisi.
3. **Biçim:** hatların köşeleri 36-65°'ye kadar keskin ve genişlik/segment
   oranı **71-1056×**. Bir çizgiyi kendi segmentlerinden 100-1000 kat kalın
   çizmek, her köşede bisektör boyunca **100-190 px dışarı fırlayan bir lob**
   üretir — ekranda "bir köşeden çıkan ışın / ok ucu".

⚠️ **Ve ölçemediğim yer burası, açıkça yazıyorum:** MapLibre'nin bu aşırı
geniş hattı ekrana **tam olarak hangi köşe/kapak (join/cap) geometrisiyle**
bastığını **ÖLÇMEDİM** — tarayıcı paneli bu oturuma görüntülenemediği için
katmanı açıp kapatarak görsel teyit **YAPILAMADI** (`screenshot` ve
`javascript_tool` erişilemedi). Yukarıdaki ①②③ katman kimliğini ve büyüklüğü
**ölçüyor**; üçgenin tam siluetinin `miter` mi, `round` mu, yoksa MapLibre'nin
karo (tile) kırpması mı olduğu **ÇIKARIMDIR, ölçüm değildir.**

📌 Bu **yeni bir şikâyet de değil:** `denetim/TRIYAJ-parti19.md:216` aynı şeyi
zaten kaydetmiş — *"`H-0054` `H-0055` (üçgen iğneler + sınır kenarında pembe →
**MOTOR/görüntü kusuru**)"* — ve ARAYÜZ kuyruğunda kapanmadan durmuş.

---

## 6. HÜKÜM

> **SEBEP: `serbest-hale` / `serbest-cekirdek` katmanlarının hat genişliği
> `u_km × 2^zoom / 67,8` formülüyle ÜST SINIRSIZ büyüyor. Çölde `u` 269 km'ye
> çıkıyor, z6-z7'de bu 250-500 piksel genişliğinde bulanık kırmızı bir hat
> demek; hattın kendi segmentleri ise 0,1-3 km (0,2-5 px). Bir çizgiyi kendi
> uzunluğundan 100-1000 kat kalın çizmek, her köşede dışarı fırlayan üçgen
> loblar üretiyor.**
>
> Kusur **veride değil, gövde geometrisinde değil, motorda değil** — 
> **ÇİZİMDE**, ve tek bir tasarım açığında: *belirsizliği kilometre cinsinden
> göstermek doğru; ama gösterimin ekranda bir TAVANI olmalı.*

### Düzeltme NEREDE yapılmalı

**BİRİNCİL — `js/app.js:820-840` (`yerOlcek()` ve iki `addLayer`):**
```
:820   var U = ["coalesce", ["get", "u"], 60];
:822   function yerOlcek(k) { ... }         ← TAVAN BURAYA GİRECEK
:827-830  YER_GENISLIK / YER_BULANIK / YER_CEKIRDEK / YER_CBULANIK
:832   serbest-hale      (opaklık 0,45)
:836   serbest-cekirdek  (opaklık 0,50)
```
Yapılacak (uygulamadım, tarif ediyorum):
- `yerOlcek` çıktısına bir **piksel tavanı** koyulmalı (`["min", <eğri>, TAVAN]`).

  ⚠️ **VE TAVANIN BEDELİ ÖLÇÜLDÜ — kozmetik bir ayar DEĞİL:**
```
              48 px tavan            64 px tavan
  z5      269/534 hat bağlanır  (%50)   155/534  (%29)
  z6      433/534               (%81)   363/534  (%68)
  z7      503/534               (%94)   492/534  (%92)
  z8      514/534               (%96)   513/534  (%96)
```
  Yani z7-z8'de tavan **hatların neredeyse tamamını** bağlar ve `u`nun
  taşıdığı bilgi (Anadolu 23 km ↔ Arabistan 217 km, 9,3 kat fark)
  **ekranda tamamen kaybolur.** Oysa o farkı göstermek `serbest-hale`nin
  var oluş sebebiydi (`uret_petek.py:2725-2731`).

  ⇒ **Düz tavan, kusuru kapatırken mekanizmayı öldürür.** Daha iyi aday:
  genişliği tavanlamak yerine **`u` ile ters opaklık** —
  *geniş belirsizlik = daha SOLUK, daha KALIN değil.* Böylece 9,3 katlık
  fark opaklık ekseninde yaşamaya devam eder, piksel ekseninde patlamaz.
  ⚠️ **İkisi de ölçülmedi** — ben yalnız düz tavanın bedelini ölçtüm.
  Karar Emre'nin / koordinatörün.
- Tavan girerse `u`nun bilgi taşıma işlevi kısmen kaybolur; karşılığında
  `line-opacity`nin `u` ile ters ölçeklenmesi düşünülebilir
  (*geniş belirsizlik = daha SOLUK, daha KALIN değil*).

**İKİNCİL — `arac/uret_petek.py:2763` (`hat_koord`) ve `:2707` (`serbest_kenar`):**
Hatlar `boundary ∩ buffer` kesişiminden çıktığı için 0,11-0,24 km'lik
dejenere segment ve 36-42°'lik mikro köşe taşıyor (K5 hat 42: **toplam 2,5 km**
uzunluğunda bir hat). Bunlar tavan konsa bile lob üretmeye devam eder.
Yapılacak:
- `hat_koord` çıktısına **hattın kendi genişliğine göre** bir sadeleştirme
  (`simplify(u/2 mertebesinde)`) — bir hattı, çizileceği kalınlığın çok
  altındaki ayrıntıyla saklamanın hiçbir faydası yok.
- **Uzunluğu genişliğinden kısa olan hatlar** ayrıca ele alınmalı.

🔴 **VE BU SATIRI ÖNCE YANLIŞ YAZDIM — "2 hat" dedim, ölçmeden.** Ölçünce:
```
dönem 298         uzunluğu genişliğinden KISA hat:  11 / 31  (%35)
havuzun tamamı                                     272 / 534 (%51)

en uç vakalar (havuz):
  hat 471   uzunluk 0,24 km · genişlik 141,0 km   584 ×   nokta=2
  hat 485   uzunluk 0,15 km · genişlik  79,0 km   519 ×   nokta=2
  hat 451   uzunluk 0,35 km · genişlik 151,0 km   435 ×   nokta=2
  hat 452   uzunluk 0,40 km · genişlik 151,0 km   381 ×   nokta=2
```
⇒ **İKİ NOKTALI, 240 METRELİK bir hat, 141 KİLOMETRE genişliğinde
çiziliyor.** Bu bir çizgi değil, bir leke — ve `line-cap:"round"` ile
**dairesel bir lekedir**; iki komşusuyla birleşince üçgen/ok ucu okunur.

⚠️ Ama bu hatların **atılması** hemen önerilemez: `Değişmez` yok ama serbest
kenarın **bütünlüğünü** bozabilir (kesişimden doğan parçalar bir arada bir
sınırı anlatıyor). Doğru yol muhtemelen atmak değil, **komşu hatlarla
birleştirmek** (`linemerge`) — ölçülmedi.

**ÜÇÜNCÜL — kayıt:** `denetim/TRIYAJ-parti19.md` `H-0054`/`H-0055`
kalemleri bu bulguya bağlanmalı; "ARAYÜZ kuyruğu"ndan çıkıp **ARAYÜZ ·
`js/app.js:820`** diye adreslenmeli.

---

## 7. ÖLÇMEDİKLERİM (açıkça)

```
· MapLibre'nin köşe/kapak geometrisi   ekranda toggle YAPILAMADI (tarayıcı
                                        paneli bu oturuma görüntülenemedi)
· Tavan için doğru piksel değeri        48/64 px'in KAÇ HATTI bağladığı ölçüldü
                                        (%29-%96); hangisinin DOĞRU olduğu ve
                                        "ters opaklık" seçeneği ÖLÇÜLMEDİ
· Kısa hatların birleştirilmesi          `linemerge` önerildi, DENENMEDİ
· Öteki tarihlerde aynı kusur           u≥150 km hat TAŞIYAN dönem 330/513
                                        ölçüldü; ama her dönemin ekran
                                        karşılığı ölçülmedi
· Emre'nin görüntüsünün hangi yayından  ekran görüntüleri bana ULAŞMADI, yalnız
  olduğu                                kutu koordinatları verildi. `OGRENILENLER`
                                        "N / TOPLAM başlık" aleti kullanılamadı
· data/donemler.js 02:10'da değişti     eski sürümdeki ilk üç ölçüm ATILDI,
                                        yeniden ölçüldü; ama Emre'nin gördüğü
                                        yayın MUHTEMELEN daha eski
```
