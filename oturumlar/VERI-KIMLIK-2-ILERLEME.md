# VERİ KİMLİK 2 — İLERLEME

Görev tanımı: [VERI-KIMLIK-2.md](VERI-KIMLIK-2.md) (`880c382`)
Claim kuralı: `ORGANIZASYON Karar 2` — durum mesajla değil dosyayla akar.

---

## 1 Ağustos 2026

✅ **`sirbistan-nemanjic` — 17:44 → 17:52**
`harita:"sirbistan"` bağlandı (`data/devletler.js:497`). **Yeni renk yazılmadı.**
Gerekçe: `sirbistan` anahtarı (`#6a8fa0`) zaten vardı ve üç Sırp kaydı onu
kullanıyor — `sirp-despotlugu` (1402-1459), `sirbistan-prensligi` (1804-1882),
`sirbistan-kralligi` (1882-1918). Nemanjić 1217-1402, despotlukla **tam
bitişik**. Güç etiketi: **KESİN** (§73).
⚠️ Yeni renk açmak Sırbistan'ı dönemlere göre iki farklı ülke gibi gösterirdi.
Ölçüm: `denetle.py` temel çizgiyle **birebir aynı** (2s 115/114 · 2t 56/49,
ikisi de önceden var olan borç) — sıfır yeni ihlal. `node --check` temiz.
Ayrıca özetteki *"Henüz renk/harita karşılığı yok"* ifadesi artık yanlış
olduğu için çıkarıldı, TDV kaynak künyesi korundu.

✅ **`merini` — 17:52 → 17:51**
`harita:"fas"` bağlandı (`data/devletler.js:1728`). **Yeni renk yazılmadı.**
Gerekçe: `fas` anahtarı (`#9e6b5b`) zaten vardı; `fas` kaydı (Sâdî/Alevî
Şerifleri) **1549-1923**, `merini` (Merînî/Vattâsî) **1196-1549** — bitiş ve
başlangıç **aynı gün**, örtüşme yok. `merini`'nin kendi özeti zaten
*"sonra Sâdîlere devretti (bkz. [[fas]])"* diyor. İkisi de `tur:"krallik"`,
`bolge:"kuzey-afrika"`. Güç etiketi: **KESİN** (§73).
⚠️ Yeni renk açmak Fas'ı 1549'da renk değiştiren iki ayrı ülke gibi
gösterirdi; oysa hanedan değişimi, ülke değişimi değil.
Ölçüm: `denetle.py` temel çizgiyle **birebir aynı** (2s 115/114 · 2t 56/49)
— sıfır yeni ihlal. `node --check` temiz. `harita:"fas"` kullanıcı 1 → 2.

---

### 🔴 `dehlek` — sınıfı yanlış, araştırma kalemi

Görev tanımı satır 21/34 `dehlek`i *"kayıt var, yalnız renk yok"* sınıfına
koyuyor. Ölçtüm, **değil**:
```
grep 'id:"dehlek"' data/devletler.js  → yok
grep '"dehlek"'    arac/renkler.py    → yok
```
Sıfırdan kayıt gerekiyor (`f` · `t` · `bolge` · `baskent` · `ozet` ·
`kronoloji`) **artı** yeni renk — ve burada Kısıt 1 (13,6 eşiği) gerçekten
uygulanacak. Bugünkü ilk üçün diğer ikisi tek satırdı; bu değil.

**Tarih verisi ÇAPRAZ DOĞU'da var** (`9078760` · `b620dc1`), iki bağımsız TDV
maddesi, güç etiketi KESİN:
```
TDV dehlek   "VI. (XII.) yy'dan itibaren kendi meliklerince BAĞIMSIZ"
             Memlük yönetimi belgelenmiyor
TDV masavva  XII-XIV. yy "Dehlek emîrlerinin hâkimiyetinde"
önerilen pencere:  1281-01-01 → 1557-04-02   (sonrası OSMANLI)
```

🔴 **AMA İKİ ŞEY ÇÖZÜLMEDEN YAZILAMAZ:**

**① SLUG ÇELİŞKİSİ — `dahlak` mı `dehlek` mi?** ÇAPRAZ DOĞU kendi içinde
tutarsız:
```
CAPRAZ-DOGU.md            `dahlak` 6 kez  ← somut önerilerin HEPSİ burada
                          `dehlek` 1 kez
CAPRAZ-DOGU-ILERLEME:488  "canlı slug: func · nube · bece · dehlek"
b620dc1 commit mesajı     "Yeni canli slug: bece, dehlek, func, nube"
KOORDİNATÖR kuyruğu       dehlek
VERİ KİMLİK'in rengi      "dehlek": ("Dehlek Melikleri", "#a838a8")
```
`yerlesimler*.js`'te ikisinin de izi **yok** (0 eşleşme), yani veriden
çözülemiyor. Yanlış olanı seçersem `renkler.py` anahtarı ile `harita:` değeri
tutmaz → kayıt **"dizinde var, kullanım 0"** olur; §4'ün uyardığı sessiz
başarısızlığın **tam kendisi**.

**② `f:` GERÇEK KURULUŞ DEĞİL.** 1281 bir kuruluş tarihi değil, yanlış
atfın *başladığı* yıl. TDV "XII. yüzyıldan beri bağımsız" diyor, kesin gün
vermiyor. `f:"1281-01-01"` yazmak uydurma kuruluş tarihi olur.

⇒ **Yazmıyorum.** *"Yanlış renk boşluktan kötüdür"* kuralı tarihe de geçerli:
236 yıllık yanlış atfı düzeltirken uydurma tarihle yeni bir yanlış yazmam.

📌 Not: noktaların memluk → yeni kimliğe geçirilmesi **bende değil** —
`yerlesimler*.js` bana kapalı (koordinatör talimatı). Benim payıma kimlik
kaydı + renk düşüyor; ikisi de yukarıdaki iki cevabı bekliyor.

---

### 🔴 `cezayir-fransiz` — YAZILMADI, kategori kararı gerekiyor

Bu kalem `sirbistan`/`merini` sınıfında **değil.** Ölçtüm:

**① `tur:"gecici-isgal"` kayıtlarının 15'inin 15'inde `harita:` YOK.**
```
bosna-isgal · girit-devleti · fransiz-misir-seferi · kibris-ingiliz
oniki-ada-italyan · cezayir-fransiz · sarki-rumeli · ingiliz-hindistani
hollanda-dogu-hint · ingiliz-malaya · yeni-ispanya · ispanyol-peru
portekiz-brezilyasi · ingiliz-kuzey-amerika · yeni-zelanda
```
Dizinde `harita:` dolu **123** kayıt var; işgallerden **hiçbiri** onlarda değil.
⇒ Bu bir unutma değil, **örüntü.** `§78.1`: *"şema şunu taşıyabilir" ≠ "şema
bunu BÖYLE KULLANIYOR."* Şema `harita:`yı işgalde taşıyabilir; **hiç
kullanmamış.**
⇒ `cezayir-fransiz`e renk vermek **tek kalem değil, 15 kayıtlık kategori
politikası** kurar: İngiliz Hindistanı, Hollanda Doğu Hint, Yeni İspanya,
Brezilya, Kanada, Yeni Zelanda… hepsi aynı kuralla boyanır. Bu benim tek
başıma vereceğim karar değil.

**② Ve boyarsam `abdulkadir`i eziyorum.** Kaydın kendi özeti:
> *"Batı'da Emîr Abdülkādir'in direniş devletiyle (bkz. [[abdulkadir]])
> **1847'ye dek fiilen paylaşıldı**."*
```
cezayir-fransiz  1830-07-05 → 1923-10-29   harita YOK
abdulkadir       satır 885                 harita YOK
cezayir-ocagi    satır 706                 harita YOK
```
Cezayir'in **üçü de** boyasız. Yalnız `cezayir-fransiz`e `harita:"fransa"`
yazarsam harita 1830'dan itibaren **bütün Cezayir'i Fransa** gösterir ve
Abdülkādir'in 17 yıllık direniş devleti **hiç var olmamış** gibi görünür.
Bu, *"yanlış renk boşluktan kötüdür"*ün ders kitabı örneği — ve bugün
koordinatörün `abd`/`abdulkadir` vakasında uyardığı şeyin aynısı.

⇒ **Yazmıyorum.** Koordinatörden kategori kararı bekliyor.

---

### 🔴 `aragon` + `kastilya` — YAZILMADI, emsal buraya TAŞINMIYOR

Bu kalem `sirbistan`/`merini` sınıfında **değil** ve sebebi tek kelime:
**eşzamanlılar.**
```
kastilya   1230-09-23 → 1479-01-20   harita YOK
aragon     1164-01-01 → 1479-01-20   harita YOK
navarra     824-01-01 → 1512-07-25   harita YOK
ispanya    1479-01-20 → 1923-10-29   harita:"ispanya"
granada    1238-01-01 → 1492-01-02   harita:"granada"
portekiz   1139-07-25 → 1923-10-29   harita:"portekiz"
```
İkisi de tam `ispanya`'nın başladığı gün bitiyor — yani *"ardışık halef"*
kalıbı ilk bakışta uyuyor. **Uymuyor:** `sirbistan`/`merini`'de kayıtlar
**arka arkaya**ydı, hiç örtüşmüyorlardı. Burada Kastilya ile Aragon
**249 yıl boyunca yan yana** yaşadı. İkisine de `harita:"ispanya"` yazmak,
İspanya'yı **var olmadan 249 yıl önce** haritaya koyar ve iki tacı tek ülke
gösterir. `§78`: *mevcut bir kayda benzemek doğru olmanın delili değildir.*
⇒ **İki ayrı yeni renk gerekiyor** — ve `navarra` da boyasız, yani İber
yarımadası tutarlı olsun diye aslında **üç.**

### 📌 VE KURAL ASLINDA FARKLI — `renkler.py` başlığından
> *"Renk KİMLİK taşımaz, **AYIRMA** işi görür… bir rengi birden çok devletin
> paylaşması sorun değildir — yeter ki o devletler tarih boyunca **hiç komşu
> olmasın**."* · *"hex tekrarı başlı başına hata DEĞİLDİR, **komşuluk**
> hatadır."*

⇒ Yeni renk "icat etmek" şart değil; `aragon`/`kastilya` **uzak** bir devletin
hex'ini paylaşabilir. Ama bunu söyleyebilmek için **gerçek Voronoi
komşuluğunu** bilmek gerekiyor.

### ⛔ VE ÖLÇÜM ARACI YOK
Görev tanımı *"`renkler.py`'de zaten bir mesafe kontrolü var, koştur"* diyor.
**Yok.** Dosyada yalnız `BOYALAR` sözlüğü ve `_opaklik_dogrula()` var;
ΔE/komşuluk hesaplayan hiçbir fonksiyon yok. `arac/` altındaki 12 `denetle_*`
aracının hiçbiri de renk mesafesi ölçmüyor (`denetle_gorunurluk.py` **alan**
değişimi ölçüyor, renk değil). Yorumlardaki ΔE sayıları Oturum 16'nın
tek seferlik DSATUR koşusundan elle taşınmış.
⇒ Renk seçmek için önce **ölçüm aracının yazılması** gerekiyor. Bu bir kimlik
kalemi değil, ayrı bir iş.

### ⚠️ AYRICA: `renkler.py:355` BAYAT YORUM — ölçüm yanlış kalibre ettirir
```
satır 355-356:  "ΔE ... BİNDİRİLMİŞ (dolgu %30, bej altlık); eşik 12,0"
                 kazak-hanligi ΔE 14,9 · nogay ΔE 21,2 …
```
Ama **aynı dosyanın başlığı (satır 41-47)** diyor ki: *"%30 bir kez bayatladı
ve bütün ölçümleri bozdu; `app.js:559` gerçeği **0,44**"* — ve yanlış
parametreyle ölçülenler olarak **tam bu iki kimliği** sayıyor
(`macaristan · kavalali · nogay · kazak-hanligi`).
⇒ Dosya kendi kendisiyle çelişiyor: başlık "0,44, %30 yanlıştı" derken, 300
satır aşağıdaki yorum hâlâ "%30" diyor. **Bir sonraki ölçen kişi yanlış
sabitle türetir.** Sayıları ben düzeltmiyorum (ölçmedim, uyduramam); yalnız
işaret ediyorum.

---

## 📊 KUYRUK SINIFLANDIRMASI — ölçüm (koordinatör isteği)

Soru: *"kuyruk göründüğünden ucuz mu?"* Ölçüt, koordinatörün verdiği üç soru:
```
① devletler.js'te kayıt VAR mı   ② bağlanacak renk anahtarı VAR mı
③ harita: DOLU mu
```
②'de **bitişik hanedan** ölçütü uygulandı (kaydın bitiş günü = başka bir
kaydın başlangıç günü, ve o kaydın `harita:`sı dolu) — bugün
`sirbistan-nemanjic` ve `merini`'yi kurtaran kural.

**🔴 CEVAP: HAYIR — kuyruk ucuz değil. Bugünkü iki kalem istisnaydı.**

| sınıf | sayı | kalemler |
|---|---|---|
| **ZATEN BAĞLI** | 1 | `afsar` → `harita:"iran"` (⚠️ aşağıya bak) |
| **TEK SATIR** | 1 | `nogay` — kendi anahtarı var (`#f9a825`) |
| **RENK GEREKLİ** | 9 | `astarhan` · `arnavutluk-bagimsiz` · `zend` · `hersek` · `zeta` · `bahreyn` · `navarra` · `aragon` · `kastilya` |
| **ARAŞTIRMA** (kayıt yok) | 5 | `dehlek` · `kafkas-hanliklari` · `buyuk-orda` · `idrisi` · `suriye-arap-kralligi` |

### ⚠️ Ölçüm aracımdaki açığı da ölçtüm
İlk geçiş `aragon` ve `kastilya`yı **ayrı ayrı** "tek satır" saydı: ikisi de
`ispanya`'nın başladığı gün bitiyor, ikisi de aday olarak `ispanya` anahtarını
alıyor ve **mevcut** `ispanya` kaydıyla çakışmıyorlar. Açık şurada: araç
adayları **birbirine** karşı sınamıyordu.
```
aragon    1164-01-01 → 1479-01-20
kastilya  1230-09-23 → 1479-01-20     249 yıl YAN YANA
```
İkisine de `ispanya` verilseydi **eşzamanlı iki komşu aynı rengi** paylaşırdı —
`renkler.py`'nin tek yasak dediği şey. İkinci geçiş eklendi, ikisi de
**RENK GEREKLİ**'ye düştü. Elle vardığım sonuçla artık örtüşüyor.
📌 Ders: "tek satır" ölçütü kalem başına uygulanamaz; **kuyruğun tamamına
birlikte** uygulanmalı.

### ⚠️ `afsar` boş değil ama DOĞRU da olmayabilir
`afsar` `harita:"iran"` taşıyor — yani kuyrukta "renk bekliyor" diye durması
yanlış. **Ama** kullanıcının bağlayıcı kararı şuydu: *"`afsar`/`zend`, `safevi`
ile **aynı renk ailesi, farklı parlaklık**."* `iran` anahtarı bunu karşılıyor
mu, ölçmedim — `zend` ise hâlâ boş ve adayı yok. **İkisi bir arada
değerlendirilmeli**; "afsar bitti" demiyorum, "boş değil" diyorum.

### ⇒ YARIN İÇİN NE DEMEK
```
1 kalem   bugünkü hızda kapanır          (nogay)
9 kalem   ÖLÇÜM ARACI olmadan kapanmaz   ← gerçek darboğaz
5 kalem   kaynak oturumlardan tanım bekliyor
```
🔴 **Darboğaz kimlik oturumunun hızı değil, renk ölçüm aracının yokluğu.**
İkinci oturum açmak dokuz kalemin hiçbirini açmaz; **ölçüm aracını yazmak
dokuzunu birden açar.** Yarının en yüksek getirili işi bu.

📌 Ölçüm betiği geçici (scratchpad), projeye eklemedim — koordinatör *"yeni
kalem açma, ölçüm yeter"* dedi. Kalıcı araç olarak istenirse `arac/`'a
taşınabilir; ΔE/komşuluk ölçen asıl araç ise ayrı ve daha büyük bir iş.

---

## 2 Ağustos 2026

### 🔴 KÖK SEBEP: `kimlikler.js` canlı değil — VERİ KİMLİK'in işi kaybolmamış

VERİ KİMLİK *"`sirbistan-nemanjic`'i yazdım"* derken **doğru söylüyormuş** —
`data/kimlikler.js:75`'e yazmış, gerekçesi de bugün benim bağımsız olarak
vardığımla birebir aynı. Ama:
```
arac/denetle_yayin.py:414   BEKLEYEN listesinde:
  "data/kimlikler.js": "kimlik sözlüğü, ARAYÜZ HENÜZ KULLANMIYOR"
index.html                  24 data/*.js yüklüyor, kimlikler.js ARALARINDA YOK
```
⇒ **VERİ KİMLİK canlı olmayan bir dosyaya yazıyormuş.** İş yapılmış, harita boş
kalmış, kuyruk aynı kalemleri ona tekrar göndermiş. *"Sessiz kaldı"* teşhisi
haksızdı: **sessiz değil, görünmezdi.**

İki dosyayı `harita:` alanında karşılaştırdım: **113 kalemde aynı, 0 uyuşmazlık,
4 kalem kurtarılabilir.**
⚠️ Koordinatörün düzeltmesi yerinde: bu ölçüm **tek alan** üzerindeydi. Bütün
alanlara bakınca **6 tarih çatışması** var (`rodos-sovalyeleri` 275 yıl,
`akkoyunlu` 13 yıl, `memluk` 81 gün…) — en az üçü `§74` vakası, yani rakip
cevap değil **ayrı soruların** cevapları. Ders: bir alanda çatışma yokluğu,
dosyaların uyuştuğu demek değil.

### ✅ KURTARMA — üç kalem taşındı (koordinatör talimatı, `2a61bc4`)
```
arnavutluk-bagimsiz  ->  harita:"arnavutluk"      devletler.js:935
nogay                ->  harita:"nogay"           devletler.js:1528
kazak-hanligi        ->  harita:"kazak-hanligi"   devletler.js:1862
```
🔴 `kazak-hanligi` kısa `kazak` **DEĞİL**. `kimlikler.js` `harita:"kazak"`
diyordu ama `renkler.py`'de öyle bir anahtar yok; kısa ad **bilerek
reddedilmiş** (satır 349: Türkçede "kazak" hem Kazak Hanlığı'nı hem Ukrayna
kazaklarını karşılıyor, karışma sessiz olurdu). Olduğu gibi taşınsaydı kayıt
*"dizinde var, kullanım 0"* olurdu. `renkler.py`'ye **dokunulmadı.**

**Ölçüm — iki araç, öncesi/sonrası:**
```
renk_olc.py   14 gorunmez · 71 cakisma   ->   14 gorunmez · 71 cakisma
denetle.py    cikti BAYT BAYT AYNI (diff bos)
node --check  temiz
```
Sıfır yeni ihlal, sıfır yeni çakışma.

### 🔴 `zend` TAŞINMADI — bağlayıcı kullanıcı kararına aykırı

Dördüncü kalem `zend -> safevi` idi. **Taşımadım.** Ölçüm:
```
safevi  1501-07-01 -> 1736-03-08   harita:"safevi"   #6b4a7d  (mor)
afsar   1736-03-08 -> 1796-01-01   harita:"iran"     #b5885b  (kahve)
zend    1751-01-01 -> 1794-01-01   harita: YOK
```
**① Kullanıcının bağlayıcı kararı** (görev tanımı Kısıt 2):
> *"`afsar`/`zend`, `safevi` ile **aynı renk AİLESİ, farklı PARLAKLIK**."*

`zend`e `harita:"safevi"` yazmak `safevi` ile **birebir aynı rengi** verir —
*"farklı parlaklık"* değil, **sıfır** parlaklık farkı. Kararın tam tersi.
Üstelik `afsar` şu an `iran` (**kahve**) taşıyor, `safevi` ise **mor** —
yani zincirin üç halkası şu an **iki ayrı aileye** dağılmış durumda. Karar
*"ayrı renkler İran'ı üç ayrı devlet gibi gösterir"* diye konmuştu; bugünkü
hâli tam olarak o.

**② Ve `afsar` ile `zend` ÇAKIŞIYOR:**
```
afsar 1736-1796  ∩  zend 1751-1794   =  43 YIL eszamanli
```
İkisi aynı anda sahnede ve komşu ⇒ `renkler.py`'nin tek yasağı gereği
**aynı rengi alamazlar.** Yani `zend` tek başına çözülemez; `safevi`+`afsar`+
`zend` **birlikte** çözülmeli.

⇒ Ve araç artık tam bunun için var: `py arac/renk_olc.py --oner safevi,afsar,zend`
— docstring'in kendi deyişiyle *"`--oner` N kimliği BİRLİKTE çözer, tek tek
değil."* Ama üç halkanın ikisi **zaten atanmış**; yeniden atama MOTOR'un ve
kullanıcının sahası. **Karar bende değil, ölçüm bende.**

### 🔴 İRAN ZİNCİRİ — üç düzeltme, ölçüldü

**① `zend`in kaydı VAR.** Koordinatör *"`zend` kaydı yok, sınıfı `dehlek` ile
aynı"* dedi. **Değil:**
```
data/devletler.js:1477
{ id:"zend", ad:"Zend Hanedanı (İran)", tur:"devlet", bolge:"iran",
  f:"1751-01-01", t:"1794-01-01", baskent:"Şiraz",
  ozet:"... Kaçarlar tarafından ortadan kaldırıldı (bkz. [[kacar]]).
        TDV'de ayrı maddesi yok; tarihler standart akademik kaynaklara göre",
  kronoloji:[ ... ] }
```
Kayıt **tam** — `bolge`, `baskent`, `ozet`, `kaynak notu`, `kronoloji` hepsi
yerinde. **Eksik olan yalnız `harita:`.** Yani `dehlek` sınıfı değil,
`sirbistan-nemanjic` sınıfı. Tek engel renk ailesi kararı.
📌 Koordinatör muhtemelen `kimlikler.js`'e bakıp *"orada var, canlıda yok"*
diye okudu; ikimizin de bugün düştüğü aynı tuzağın üçüncü tekrarı — **kaynağı
sormadan değer okumak.**

**② Çakışma ikili değil ÜÇLÜ.** Ölçtüm:
```
safevi x afsar   ortusme YOK        (safevi 1736-03-08'de biter, afsar baslar)
afsar  x zend    1751-01-01 -> 1794-01-01   43 yil
afsar  x kacar   1789-03-21 -> 1796-01-01   <<< IKISI DE harita:"iran"
zend   x kacar   1789-03-21 -> 1794-01-01

UCU BIRDEN sahnede:  1789-03-21 -> 1794-01-01   (~4,8 yil)
```
⇒ O pencerede **üç ayrı renk** gerekiyor, iki değil. Ve `safevi` o pencerede
sahnede **değil** — yani *"safevi ailesi"* dendiğinde `safevi` taban rengi
olarak kalır ama asıl ayrışması gereken üçlü **`afsar` · `zend` · `kacar`**.

**③ Mevcut ihlal:** `afsar` ve `kacar` **ikisi de** `harita:"iran"` → aynı
`#b5885b` → **1789-1796 arası haritada ayırt edilemiyorlar.** Bu, `zend` için
öne sürdüğüm yasağın **hâlihazırda çiğnenmiş** hâli. Kimse ölçmemiş.

### ⚠️ VE `renk_olc.py` BU SINIFI GÖREMİYOR — araç açığı
Aracı koşturdum; `afsar ↔ kacar` çakışması **çıktıda yok.** Sebep yapısal:
```
arac cift kurarken ANAHTAR-ANAHTAR olcuyor:  "iran ↔ memluk", "gurcistan ↔ safevi"
afsar ve kacar AYNI anahtari kullaniyor  ->  ortada cift YOK  ->  dE hic hesaplanmiyor
```
⇒ Araç *"iki farklı rengin birbirine yakın olması"*nı yakalıyor; **"eşzamanlı
iki kimliğin aynı rengi paylaşması"**nı yakalayamıyor. İkincisi ΔE 0, yani
sonsuz kötü — ama hiçbir listeye düşmüyor. `71 çakışma` sayısı bu sınıfı
**hiç saymıyor.**
📌 Bu bir denetim körlüğü: aracın yeşil verdiği yerde en kötü hata durabilir.
Düzeltmek tek geçişlik iş (aynı anahtarı paylaşan kayıtlar arasında tarih
örtüşmesi taraması) ama `renk_olc.py` MOTOR'un sahası — **teklif ettim,
dokunmadım.**

### ✅ VE KÖRLÜĞÜN BOYUTUNU ÖLÇTÜM — tek vaka, küme yok
Bütün dizini bu sınıf için taradım (salt okuma):
```
harita: dolu kayit    125
kullanilan anahtar    112      -> 13 anahtar birden cok kayitta paylasiliyor
AYNI ANAHTAR + ESZAMANLI:  1 cift
    7 yil  'iran'  afsar x kacar   1789-03-21 -> 1796-01-01
```
⇒ **`afsar`/`kacar` yalnız.** Denetim körlüğü gerçek ama arkasında saklı bir
küme **yok** — düzeltme tek kalemlik.
📌 Ve bu, bugünkü `sirbistan`/`merini` yaklaşımının da doğrulaması: **13
anahtar birden çok kayıt tarafından paylaşılıyor** ve biri hariç hepsi
ardışık/örtüşmesiz. Yani "halef aynı anahtarı alır" konvansiyonu dizinde
yerleşik ve doğru uygulanmış; tek istisna İran zinciri.

