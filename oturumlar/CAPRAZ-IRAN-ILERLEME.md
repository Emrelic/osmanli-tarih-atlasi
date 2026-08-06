# ÇAPRAZ İRAN — ilerleme kaydı

> Oturum açılışı: 6 Ağustos 2026 · model Opus · rol ÇAPRAZ
> Görev tanımı: `oturumlar/CAPRAZ-IRAN-GOREV.md`
> Yazma yetkim: **yalnız bu dosya.** `data/` · `arac/` · `js/` · kök `*.md` bende değil.

---

## Açılış

Okunanlar: `CAPRAZ-IRAN-GOREV.md` · `CLAUDE.md` (baştan sona) ·
`oturumlar/CAPRAZ-GOREV.md` · `git log --oneline -8` (HEAD `47f8f97`).
Koordinatöre açılış haberi verildi.

---

## TESLİM 1 — B10 ölçümü: devraldığım üç sayıyı kendim saydım

**Ölçüm tabanı:** `arac/girdi.py` `GIRDI_DOSYALARI` — **16 dosya, 1713 nokta.**
Yükleyici olarak `girdi.yukle()`in kendisi kullanıldı (ayrı ayrıştırıcı yazmadım;
`CAPRAZ-GOREV.md §1`'in *"iki ayrıştırıcı aynı dosyada aynı sonucu verse bile biri
eksik dosya kümesi okuyorsa sayı yanlıştır"* dersi bunu gerektiriyor).

⚠️ `CLAUDE.md §5` hâlâ *"CANLI toplam 951 nokta, iki dosya"* diyor — **bayat.**
Canlı taban bugün 16 dosya / 1713 nokta ve `yerlesimler_asya.js` de içinde.
(Kök `*.md` bende değil; koordinatöre bildirildi.)

| brifingdeki | benim ölçümüm | hüküm |
|---|---|---|
| İran kutusu (lon 44-63 · lat 25-40) **149** nokta | **149** | ✓ tutuyor |
| 1510-06-15'te **33** `iran` noktası | **30** | 🔴 ölçüt farkı |
| `iran` **244** pencere, **1281→1779** | **277** pencere, **1281→1860** | 🔴 iki hata |

### 33 → 30 — `kur:`/`bit:` süzgeci

Brifing noktaların **var olup olmadığına** bakmamış. Süzgeci kaldırınca
brifingin bütün kesit sayılarını **birebir** yeniden ürettim:

```
süzgeçsiz  1510-06-15  safevi 101 · iran 33 · SAHIPSIZ 8 · cebri 4 · nebhani 2   ← brifing
süzgeçli   1510-06-15  safevi  94 · iran 30 · SAHIPSIZ 5 · cebri 4 · nebhani 2   ← doğrusu
```

⇒ Aritmetik doğru, **süzgeç yok.** 1510'da elenen üç `iran` noktası:

| nokta | sebep |
|---|---|
| Zerenc (Sîstan) | `bit:1383-01-01` — 1510'da **zaten ölü** |
| Tûs | `bit:1389-01-01` — 1510'da **zaten ölü** |
| Ferahâbâd | `kur:1611-01-01` — 1510'da **daha kurulmamış** |

📌 Üçü de 1510'da haritayı **hiç boyamıyor** (`kur:` peteği komşuya devrediyor —
`VERI-YAPISI` alan sözlüğü). Benek şikâyetinin sebebi olamazlar. **Gerçek iş 30.**

### 244 → 277 — kapsam adı yanlış yazılmış

`244` sayısı **kutu içi** ölçüm; brifing onu *"`iran` etiketi 244 pencerede
kullanılıyor"* diye **bütün taban** gibi sunuyor.

```
bütün canlı taban (16 dosya)   277 pencere / 133 nokta
yalnız kutu içi                244 pencere          ← brifingin sayısı
yalnız yerlesimler.js          268 pencere
en erken f: 1281-01-01   en geç t: 1860-01-01       ← brifing "1779" diyor
```

📌 `CAPRAZ-GOREV.md §1`'in kayıtlı hatasının **aynısı** (`fransa 178/149 → 99/98`,
`iran 326 → 317`): bir sayı ölçüldüğü kapsamdan koparılıp başka kapsamın sayısı
gibi aktarılıyor. Bu sefer yön ters — merge dışı dosya değil, **kutu daralması.**

---

## TESLİM 1b — brifingin sormadığı yer: 20 çift, biri %44

`iran`ın 277 penceresi yalnız **20 ayrık `(f,t)` çifti** kullanıyor.
⇒ İş 277 karar değil, **20 karar.** Dağılım:

```
1747-06-20 → 1796-01-01    123 nokta   %44   ← tek çift
1335-12-01 → 1393-01-01     28
1335-12-01 → 1386-01-01     21
1335-12-01 → 1381-01-01     19
1507-05-24 → 1510-12-02     19          ← 1510 beneklerinin ÇEKİRDEĞİ
1281-01-01 → 1501-07-01     16
1335-12-01 → 1387-11-01     13
1281-01-01 → 1508-01-01      8
1738-01-01 → 1747-06-20      5
1335-12-01 → 1596-01-01      5
1281-01-01 → 1510-12-02      5
1281-01-01 → 1503-01-01      4
1335-12-01 → 1538-01-01      3
1281-01-01 → 1592-01-01      2
1335-12-01 → 1411-01-01 · 1335-12-01 → 1510-12-02 · 1709-04-21 → 1747-06-20
1736-03-08 → 1785-01-01 · 1736-03-08 → 1860-01-01 · 1776-04-16 → 1779-04-01   (1'er)
```

### 🔴 %44'lük kütle KUSUR DEĞİL — kayıtlı bir karar

`arac/renkler.py` satır 157-176 (RENK oturumu, 3 Ağustos 2026):

> ```
> 1736-03-08 → 1747-06-20   `afsar`   (Nadir Şah, tartışmasız)
> 1747-06-20 → 1796-01-01   `iran`    (İran PARÇALI — genel etiket burada
>                                       MEŞRU; Horasan afsar, Şiraz zend,
>                                       Tahran kacar aynı gün)
> 1796-01-01 → dönem sonu   `kacar`
> ```
> *"🔴 `zend` YAZILMADI ve sebebi ÖLÇÜLDÜ, unutulduğu için değil: ① Şimdilik
> GEREKMİYOR — pencere 2 `iran` kalıyor. ② YER DE YOK: bu kutuda beşinci aile
> üyesi için uygun aday SIFIR."*

Doğruladım:

| | durum |
|---|---|
| `zend` künyesi | **VAR** — `data/devletler.js:1490`, 1751-1794, başkent Şiraz |
| `zend` rengi | **YOK** — `renkler.py`'de kayıt yok |
| `zend` yerleşim kullanımı | **0 pencere** |
| `afsar` | 128 pencere ✓ · renk `#f488fc` ✓ |
| `kacar` | 123 pencere ✓ · renk `#c840a8` ✓ |

⇒ **Brifing bu kaydı görmemiş** ve beni 277'nin %44'ünü "hata" sanarak aramaya
gönderiyordu. `CLAUDE.md §2`'nin *"ilk sorulacak soru"* mantığının belge tarafı:
bir etiket tuhaf görünüyorsa **önce o etiketin kayıtlı gerekçesi var mı** diye bak.

🟡 **AÇIK KALAN:** aynı yorum *"Pencere 2'nin TDV araştırması bitince kutu YENİDEN
ÖLÇÜLMELİ; gerekirse aile ikiye bölünür (safevi+afsar · iran+kacar+zend)"* diyor.
O araştırmanın **sahibi yazılı değil.** Koordinatöre soruldu.

---

## Soru ① — `iran` etiketi NE DEMEK? (ön hüküm, ölçümle)

Brifing üç şık veriyor: *devlet / coğrafya / dolgu*. **Üçü de tek başına yanlış** —
ölçüm `iran`ın **en az üç ayrı işte** kullanıldığını gösteriyor ve **her birinin
ilacı ayrı:**

| kullanım | pencere | ne olduğu | ilaç |
|---|---|---|---|
| **A · İlhanlı sonrası dolgu** | `1335-12-01 → 1381…1411` (82 nokta) | İlhanlı 1335'te bitti, halefi yazılmamış — **"kim olduğunu bilmiyoruz" dolgusu** | Celâyirli/Muzafferî/Kert/Serbedârî ayrımı |
| **B · Şeybânî işgali** | `1507-05-24 → 1510-12-02` (19 nokta) | Tarihi ele veriyor (aşağıda) — **yanlış etiket** | `buhara`/Şeybânî |
| **C · parçalılık şemsiyesi** | `1747-06-20 → 1796-01-01` (123 nokta) | **KASTEN, kayıtlı gerekçeyle meşru** | dokunulmaz (renk kutusu yeniden ölçülene dek) |

⚠️ Bu tabloyu **hüküm değil ön hüküm** sayıyorum: A ve B kaynaklandırılmadı.
C kaynaklı (renkler.py kaydı).

---

## Sıradaki iş — 19 noktalık Şeybânî kümesi

1510'daki 30 noktanın **19'u** tek pencerede: `1507-05-24 → 1510-12-02`.
Tarihlerin ikisi de adlandırılmış olaya oturuyor (`CAPRAZ-GOREV §3.2`:
**ad tarihi kilitler**):

```
1507         Şeybânî Han Herat'ı aldı — Timurlu Horasan'ın sonu
1510-12-02   MERV SAVAŞI — Şah İsmail, Şeybânî Han'ı öldürdü
```

⇒ Bu pencere **Horasan'ın Özbek/Şeybânî işgali.** Etiketi `iran` olmamalı.

19 nokta: Nesâ · Ebîverd · Merv · Bocnûrd · Kûçân · Esferâyin · Kelât-ı Nâdirî ·
Serahs · Sebzevâr · Nîşâbur · Turbet-i Haydariye · Turbet-i Câm · Turşiz · Kâin ·
Bîrcend · Kızılarvat · Dihistan ovası · (+2)

📌 Brifingin *"Özbek/Şeybânî çekişmesi olabilir"* hipotezi ölçümle **uyuşuyor** —
ama hipotez hâlâ hipotez, TDV'ye bakılmadı. **Sıradaki adım o.**
🟢 Renk engeli çıkmayabilir: `buhara` zaten 9 pencereyle kullanımda.
⚠️ `§3.5.1` gereği **İKİ UÇ** ölçülecek: 19'u Şeybânî'ye çevirmek Şeybânî'yi
olmadığı yerde büyütüyor mu?

---

## TESLİM 2 — 19 noktalık Şeybânî kümesi KAPANDI

### İKİ UÇ ölçümü (§3.5.1) — hiçbir sınır oynamıyor

Pencere `1507-05-24 → 1510-12-02` · 19 nokta. Komşu dönemler:

```
ÖNCEKİ  (1507-05-24'ten önce)     timurlu  19/19   İSTİSNASIZ
SONRAKİ (1510-12-02'den sonra)    safevi   19/19   İSTİSNASIZ
```

⇒ Pencere tam olarak Timurlu ile Safevî **arasında** duruyor. Etiket değişince
`timurlu`nun bitişi ve `safevi`nin başlangıcı **yerinde kalıyor**; yalnız
ortadaki 3,5 yılın adı değişiyor. §3.5.1'in *"öbür tarafta ne doğuyor"*
sorusunun cevabı: **hiçbir şey.** Geometri değil, yalnız kimlik.

### TDV — iki bağımsız madde aynı şeyi söylüyor

| slug | `<title>` sınaması | alıntı |
|---|---|---|
| `herat` | ✓ CANLI | *"Herat 913'te (1507) Özbekler"* tarafından ele geçirildi · *"916'da (1510) Safevî Hükümdarı Şah İsmâil tarafından zaptedildi"* |
| `merv` | ✓ CANLI | *"Şah İsmâil'in 916 (1510) yılında Şeybânî Han'ı yenmesinden sonra Safevî hâkimiyetine giren şehir"* |
| `seybaniler` | ✓ CANLI | *"916 (1510) yılında Şah İsmâil'le yaptığı savaşta yenilgiye uğrayıp hayatını kaybeden Şeybânî Han"* |
| `nisabur` | 🔴 **ÖLÜ** | doğrusu **`nisabur--iran`** (CANLI) — ama 1500-1520'ye **basmıyor** |

Hicrî çapraz kontrolü (`CAPRAZ-GOREV §4②` — bağımsız veriyle çarpıştır):
913 H = 1507-05-13 başlar ⇒ verideki `1507-05-24` **913'ün içinde** ✓
916 H = 1510-04-10 → 1511-03-30 ⇒ verideki `1510-12-02` **916'nın içinde** ✓
⇒ **Verinin tarihleri doğru. Yanlış olan tek şey ETİKET.**

### Kimlik önerisi: `iran` → `buhara` · yeni renk GEREKMİYOR

| ölçüt | durum |
|---|---|
| §3.5 ömür kontrolü | ✓ `devletler.js:1874` — `buhara` f:1500-01-01 t:1920-09-02 |
| künye içeriği | ✓ *"dört ardışık hanedanın (**Şeybânî**, Canoğulları, Mangıt) ortak adı"* |
| emsal | ✓ proje Şeybânî dönemini **zaten** `buhara` diyor: Hîve · Köhne Ürgenç · Hazârasp · Küngrat · Yeni Ürgenç · Mangışlak · Garabogaz · Çeleken · Bekdaş = `buhara` **1502→1512**, sonra `hive` |
| renk | ✓ `#4527a0` **mevcut** — RENK 2'nin kuyruğuna hiçbir şey eklemiyor |

📌 Hârizm'de yapılan işlem Horasan'da yapılmamış. Kusur bir bilgi eksikliği
değil, **bir işlemin yarım bırakılması.**

**Kesinlik kademeleri (§⑦②):**
```
KESİN    ( 1)  Merv — TDV `merv` birebir cümle
KUVVETLİ (16)  Nesâ·Ebîverd·Serahs·Sebzevâr·Nîşâbur·Kûçân·Bocnûrd·Esferâyin·
               Kelât-ı Nâdirî·Turbet-i Haydariye·Turbet-i Câm·Turşiz·Kâin·
               Bîrcend·Zerenc·Tûs
ZAYIF    ( 2)  Kızılarvat (38,98K 56,28D) · Dihistan ovası (38,17K 54,63D)
               Köpetdağ'ın KUZEYİNDE, Horasan dışı — Şeybânî hükmü buraya
               UZATILMAMALI. Ayrı soru.
```
⚠️ Zerenc (`bit:1383`) ve Tûs (`bit:1389`) 1507'de zaten ölü — düzeltme
yazılabilir ama haritada bir şey değiştirmez.

---

## 🔴 TESLİM 3 — BENEK ŞİKÂYETİNİN KAYNAĞI BULUNDU (ve 1510'da değil)

Brifing beni **1510'a** yönlendirdi. Orada bakılacak şey yoktu: 1600'de `iran`
kendiliğinden sıfırlanıyor, yani 1510 zaten **sönmekte olan** bir izdi.
Şikâyetin kaynağı **1400-1500 arasında** ve ölçülebilir.

### Enklav taraması — üç kesit, aynı dokuz şehir

Ölçüt: bir `iran` noktasının **en yakın 5 komşusunun hepsi** başka devlette.

```
1400-06-15   ENKLAV 10 / 44 `iran` noktası
1450-06-15   ENKLAV  9 / 43
1490-06-15   ENKLAV  9 / 43
```

**Üç kesitte de enklav olanlar — KRONİK:**

| şehir | çevresi 1400 | 1450 | 1490 | en yakın komşu |
|---|---|---|---|---|
| **Tebriz** | timurlu | karakoyunlu | akkoyunlu | 60 km |
| **Şiraz** | timurlu | timurlu | akkoyunlu | 83 km |
| **Meşhed** | timurlu | timurlu | timurlu | 73 km |
| **Yezd** | timurlu | timurlu | akkoyunlu | 56 km |
| **Kirman** | timurlu | timurlu | akkoyunlu | 105 km |
| **Erdebil** | timurlu | karakoyunlu | akkoyunlu | 54 km |
| **Nahçıvan** | timurlu | karakoyunlu | akkoyunlu | 34 km |
| **Urmiye** | timurlu | karakoyunlu | akkoyunlu | 77 km |
| **Tebbes** | timurlu | timurlu | timurlu | 212 km |

🔴 **Listeye bak: Tebriz · Şiraz · Meşhed · Yezd · Kirman · Erdebil.**
Bunlar İran'ın **en büyük şehirleri** — Tebriz başkent, Erdebil Safevî ocağı,
Meşhed ziyaretgâh. Tebbes dışında hepsi birinci sınıf merkez.

### Sebep — ölçüldü, ve bir TERSLİK

Bu dokuz şehir `1281-01-01 → [Safevî fetih tarihi]` **battaniyesi** taşıyor;
220-229 yıl tek pencere. Küçük komşuları ise düzgün işlenmiş:

```
Meşhed   iran      1281-01-01 → 1510-12-02              229 yıl, TEK pencere
Tûs      ilhanli   1281-01-01 → 1335-12-01              ← 10 km ötesi
         iran      1335-12-01 → 1381-01-01
         timurlu   1381-01-01 → 1507-05-24
```

⇒ **En önemli şehirlerin verisi en az işlenmiş.** Bir ters orantı:
işleme sırası büyüklükle ters gitmiş.

### Ve niçin bu kadar göze batıyor — renk ölçüldü

```
iran         #cc1664   parlak kırmızı-pembe
timurlu      #9c7563   soluk kahve
karakoyunlu  #305d30   koyu yeşil
akkoyunlu    #48ae48   parlak yeşil
```
⇒ Kahve/yeşil zemin üzerinde **parlak pembe tekil noktalar.** Kontrast azami.
Kullanıcının *"BENEK ENKLAV"* demesi bir abartma değil, **gördüğü şeyin tam
tarifi.** Renk kusuru değil — renk, veri kusurunu sadakatle gösteriyor.

### İki ayrı görsel kusur, aynı etiket

| dönem | görüntü | sebep | nokta |
|---|---|---|---|
| **1335-1400** | büyük pembe **kütle** | İlhanlı halefleri (Muzafferî · Kert · Serbedârî · Çobanlı · İncû) hiç yazılmamış | 1350'de 105 nokta `iran` |
| **1400-1510** | pembe **benekler** | dokuz büyük şehir battaniyeli, komşuları işlenmiş | 9 kronik enklav |

📌 `ilhanli` etiketinin 124 penceresi **birebir `1281-01-01 → 1335-12-01`**
kullanıyor — yani battaniyenin ilk 54 yılı **araştırma gerektirmiyor**,
projenin başka yerde zaten yaptığı işlemin aynısı. Geri kalanı (1335-1501)
hanedan hanedan araştırma ister.

---

## TESLİM 4 — Hürmüz kümesi (2 nokta): brifingin hipotezi KISMEN ÇÜRÜDÜ

Brifing: *"Hürmüz · Kişm → 1507'den PORTEKİZ olabilir."* Ölçtüm — **hayır.**

### Bizde ne var

```
Hürmüz Adası / Kişm (ikisi de aynı)
    iran      1281-01-01 → 1510-12-02      229 yıl battaniye
    safevi    1510-12-02 → 1515-04-01
    portekiz  1515-04-01 → 1622-05-01
    safevi    1622-05-01 → 1736-03-08
```

### Kaynakta ne var

`hurmuz` slug'ı 🔴 **ÖLÜ** (`<title>` "Arama - TDV"). §4③ gereği aradım:
doğrusu **`hurmuz--iran`** ✓ CANLI. İkinci madde `benderabbas` ✓ CANLI.

> `hurmuz--iran`: *"1507'de kumandan Albuquerque Hürmüz adasını kuşattı; ancak
> **alamayarak geri döndü**"*
> *"Fakat yedi yıl sonra tekrar kuşattığında sultanın **metbûu Şah İsmâil**'in
> o yıllarda Osmanlı Devleti ile mücadele etmesinden de yararlanarak adayı ele
> geçirdi ve **İran'ın vasalı olan sultanı Portekiz'e bağladı (1514)**"*
> *"Hürmüz, Portekizliler'in işgalinden 108 yıl sonra Safevî Şahı I. Abbas'ın
> zamanında geri alındı (**23 Nisan 1622**)"*
> *"İzkî, Suhâr, Hûr Fekkân ve Kebbâ gibi yerlerin **Hürmüz Sultanlığı**'na
> bağlı olduğundan"*

> `benderabbas`: *"**1514 yılında** Albuquerque'in kumandasındaki Portekizliler
> Hürmüz'ü ve kıyıdaki Gamrûn İskelesi'ni ele geçirdiler."*

### Hüküm — dört ayrı kalem

| # | konu | bizde | TDV | hüküm |
|---|---|---|---|---|
| B1 | 1507 Portekiz? | yok | *"alamayarak geri döndü"* | ✅ **UYUYOR** — brifingin hipotezi yanlış, verimiz doğru |
| B2 | Portekiz başlangıcı | `1515-04-01` | **1514** (iki madde birden) | 🟡 **ÇELİŞKİLİ** — kaydedildi, çözülmedi |
| B3 | Portekiz bitişi | `1622-05-01` | **23 Nisan 1622** | 🟡 TDV **gün** veriyor, bizde ay hassasiyeti — 8 gün |
| B4 | 1281-1510 `iran` | `iran` | **Hürmüz Sultanlığı** | 🔴 **ÇELİŞİYOR** — bağımsız devletti |

**B2 notu:** `CAPRAZ-GOREV §3` üçüncü satırı — bu bir **temas olgusu** (X bizden
Y'yi ne zaman aldı) ⇒ *"İKİSİ BİRDEN"* gerekiyor. Portekiz kaynakları
Albuquerque'in filosunun 26 Mart 1515'te Hürmüz'e vardığını verir; TDV
*"yedi yıl sonra"* (1507+7) diyerek 1514'e ulaşıyor. Fark ~1 yıl.
⚠️ `§2.1`'in Jülyen şüphesi **işlemiyor** (fark 10-13 gün değil, bir yıl).
📌 `§8` gereği **çözmedim, kaydettim.**

**B4 — ve burada projenin kendi kaydını düzeltiyorum.** `devletler.js:1581`
(`uman` künyesi) şöyle diyor:
> *"Cülfâr limanının **Hürmüz Krallığı**'na tâbiiyeti literatürde geçer ama
> **TDV'de ayrı madde bulunmadığı için** henüz ayrılmamıştır."*

🔴 **TDV'de madde VAR** — `hurmuz--iran`, ve *"Hürmüz Sultanlığı"* adını
kullanıyor. Erteleme gerekçesi **ölü bir slug denemesine** dayanıyor olabilir
(`hurmuz` ölü, `hurmuz--iran` canlı — §4③'ün tam deseni: *"Kaynak vardı,
adres yanlıştı"*). Bu, ertelenmiş bir kararın **yeniden açılması** demek.

### 🔴 YAPISAL BULGU — proje "Safevî tâbii" diye bir şey SÖYLEYEMİYOR

TDV Hürmüz sultanının **metbûunun Şah İsmâil** olduğunu, sonra **Portekiz'e
bağlandığını** söylüyor. Yani 1510-1622 arası Hürmüz bir **tâbi devlet** —
önce Safevî'nin, sonra Portekiz'in. Bizim veri ikisini de **doğrudan
hâkimiyet** olarak boyuyor.

Ölçtüm — bu bir ihmal değil, **şema sınırı.** 313 `v:` döneminin **tamamı**
Osmanlı sistemi içinde:
```
Kavalalı hanedanı 54 · Mısır (Kavalalı) 37 · Cezayir Ocaklığı 33 ·
Mısır (İbrâhim Paşa) 28 · Tunus Ocaklığı 27 · Trablusgarp Ocaklığı 26 ·
Eflak 16 · Boğdan 11 · Mekke Şerifliği 7 · Bulgaristan Prensliği 7 …
```
⇒ `v:` **Osmanlı'ya tâbilik** demek (motor onu açık Osmanlı tonu boyuyor,
`CLAUDE.md §1`). Yabancı bir devlete tâbilik ifade edilemiyor.

📌 Bu `CLAUDE.md §3.5`'in *"hayalet devletler"* sınıfının **aynası**: orada
olmayan devlet boyanıyordu, burada **olan devlet boyanamıyor.** Ve
`OGRENILENLER §72`'nin *"`Değişmez 1` 'kimsenin değildi' cevabını ifade
edemiyor"* teşhisiyle aynı aile — şema, gerçeğin bir hâlini **söyleyemiyor**.

⚠️ Bu benim çözeceğim bir şey değil (MİMARİ kararı). Kaydediyorum.

---

## Sistem kaydı — koordinatöre bildirilenler

1. `CLAUDE.md §5` canlı taban satırı bayat (951/2 dosya → gerçekte 1713/16 dosya).
2. `BEKLEYENLER.md` **2 Ağustos tarihli, dört gün bayat.** Kullanıcının sorusu
   üzerine ölçüldü: ek oturum açma **ölçütü** yazılı (`ORGANIZASYON §1`) ve
   **talep biçimi** yazılı (`§17` dört alan), ama kuralın **ne sıklıkta
   işletileceği** yazılı değil — tetik yok.
