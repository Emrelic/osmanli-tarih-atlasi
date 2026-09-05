# SEKİZ YAMA ÇAKIŞMASI — TASNİF ve HÜKÜM

> Ölçüm: 5 Eylül 2026, 14:10 · `1.MURAT HÜDAVENDİGAR` (koordinatör)
> Araç: `py arac/_sahiplik_uygula.py` **kuru koşu** — hiçbir dosya yazılmadı.
> İçerik dökümü **regex ile değil**, `node` + `vm` ile (JS'in kendi
> yorumlayıcısı — `§11`in altı kez öğrendiği ders).

```
TABAN     3819 benzersiz ad · 77 girdi dosyası
uygulandı 113
ÇAKIŞMA     8        ← sabah 27'ydi; 19'u gün içinde karara bağlandı
```

---

## ⓪ ÖNCE İKİ ÖLÇÜM — ikisi de hükümden ÖNCE gerekliydi

### ① Sekiz yama dosyasının hiçbiri MOTOR GİRDİSİ DEĞİL

```
py -c "import girdi; ..." → GIRDI_DOSYALARI 77
yer_yama_p0035 · ok110 · ok109_fetret · uyg3 · erken · kafkas ·
ferhatpasa · romanya            → SEKİZİ DE "girdi DEĞİL (yama)"
```
⇒ Koşu sürerken `data/*.js` donması **yayının bayatlamasını** önlemek
içindir (`denetle_yayin` girdi dosyalarının sha256 izini karşılaştırır).
Bu sekizi girdi olmadığı için **düzenlenmeleri koşuyu etkilemez.**

⚠️ **Yine de bu turda DÜZENLENMEDİ.** Gerekçe kolaylık değil tutarlılık:
dört işçi oturuma blanket `data/*.js YASAK` kuralı verildi, ve
koordinatörün aynı kuralı bir teknik ayrımla kendine gevşetmesi kuralı
zayıflatır. Kazanç da yok — merge zaten koşu sonrasına kuyruklu.
📌 Ama ölçüm **kayda değer**: donma kuralının blanket yazımı *imprecise*.
Gerekçesi girdi dosyalarıdır; yama dosyaları o gerekçenin dışında.

### ② `d:` ile `s:` ÇAKIŞIRSA NE OLUR — üç yerde ölçüldü

```
denetle.py:1472 `degismez3.durum()`   d: → v: → s:  (İLK EŞLEŞEN kazanır)
js/app.js:863   katman sırası          9 devlet-dolgu … 16 osmanli-dolgu
                                       ⇒ Osmanlı ÜSTTE çizilir
uret_petek.py   yabancı gövde `s:`ten kurulur — çakışan gün DIŞLANMAZ
```
⇒ **Görsel olarak ve denetimde Osmanlı kazanır**, ama yabancı gövde o
günü **kendi alanına saymaya devam eder.**
🔴 ⇒ Bir `d:`/`s:` çakışması *"hata vermez ve görünmez"* — ama lejanttaki
**≈km² yüzölçümünü şişirir.** ⇒ Tamamlayıcı iki yamayı birleştirirken
çakışan pencere **kasıtlı mı** diye sorulmalı; kasıtlı değilse `s:`
kısaltılır.

---

## TASNİF — 4 MEKANİK · 4 ESASA İLİŞKİN

### 🟢 MEKANİK (koordinatör hükmü, kaynak gerekmez)

| yer | çift | durum | HÜKÜM |
|---|---|---|---|
| **Bağdat** | `erken` vs `ok109_fetret` | `d:` **birebir aynı**; ok109 ayrıca tam `s:` zinciri taşıyor | **ok109_fetret** (üst küme). `erken`in `kaynak:` metni korunur — `SKALER_KORUNAN` zaten ezmez |
| **Halepçe** | `ok109_fetret` vs `uyg3` | aynı desen: `d:` birebir aynı, ok109 ayrıca `s:` | **ok109_fetret** (üst küme) |
| **Kutaisi** | `ferhatpasa` vs `kafkas` | `s:` ve `v:` **birebir aynı**; kafkas'ta fazladan **boş** `d:[]` | **ferhatpasa** — `d:[]` anlamsız alan, içerik farkı YOK |
| **Şehrizor** | `ok109_fetret` vs `uyg3` | **tamamlayıcı**: ok109 yalnız `s:`, uyg3 yalnız `d:` | **BİRLEŞTİR** ⚠️ ama önce ②: uyg3'ün `d:1535→1550`i ok109'un `safevi 1508→1554`ünün İÇİNDE — çakışma. `s:`i 1535'te kesip 1550'de yeniden başlatmak mı, yoksa çakışma kasıtlı mı? **ÖLÇÜLMELİ** |

### 🔴 ESASA İLİŞKİN — kaynak gerekir, işçiye sevk edilecek

| yer | çift | ÇATIŞAN İDDİA |
|---|---|---|
| **Başkale** | `ok110` vs `p0035` | safevî **1639-05-17**'ye kadar mı, yoksa **1548-08-25**'te Osmanlı mı? |
| **Çaldıran** | `ok110` vs `p0035` | **aynı soru** |
| **Kasr-ı Şîrîn** | `kafkas` vs `p0035` | p0035 fazladan `d:1590-03-21→1603-10-21` (Ferhad Paşa dönemi) iddia ediyor; kafkas'ta yok ve `s:safevi 1503→1736` o pencereyi kapsıyor |
| **Yergöğü** | `p0035` vs `romanya` | 1810 Rus varlığı **egemenlik** mi (`s:rusya` 1810→1829) yoksa **işgal** mi (`isg:rusya` 1810→**1812**)? |

---

## 🔴 BAŞKALE ve ÇALDIRAN — TEK SORU, ve bir taraf KENDİ ÇAPASIYLA ÇELİŞİYOR

```
ok110  s:[… safevi 1502-01-01 → 1639-05-17]
       kaynak: "ankraj Van (78 km) — külliyattaki zincir"   ← KONVANSİYON
p0035  s:[… safevi 1502-01-01 → 1548-08-25]  +  d:[1548-08-25 → 1923-10-29]
       neden: "kaydın kendi kaynak: alanı 'ankraj Van — külliyattaki zincir'…"
```
🔴 **ok110'un dayanağı bir kaynak değil bir konvansiyondur** ve çapası
**Van**. p0035 tam da o çapayı işaret ediyor.
⇒ Sınav tek ve ucuz: ***atlasta Van hangi gün Osmanlı oluyor?*** Van
1548-08-25 ise ok110 kendi çapasıyla çelişir ve p0035 kazanır. Van
1639-05-17 ise tersi.
📌 Bu, aynı gün öğrenilen *"komşusunun kullandığı günü kullanmak, kendi
gününü seçmekten dayanaklıdır"* dersinin **denetim** yüzü: bir konvansiyon
çapasını **kendi çapasına karşı** sınamak.

---

## SIRA

```
🟢 dört MEKANİK hüküm      merge'de uygulanır — kaybeden kayıt KENDİ
                           dosyasından DÜŞÜRÜLÜR (`§11`: "bir hüküm,
                           veriye inmedikçe hüküm değil bir metindir";
                           uygulayıcı bu belgeyi OKUMAZ)
🔴 dört ESASA İLİŞKİN      ilk boşalan işçiye sevk — Van sınavı önce
⚠️ Şehrizor'un çakışan penceresi ②'ye göre ayrıca ölçülür
```

---
---

# EK — DÖRT ESASA İLİŞKİN ÇAKIŞMANIN ÖLÇÜMÜ

> Oturum **NEHİR SÜRTÜNME** · sevk M-2959 · 5 Eylül 2026
> 🔴 **VERİ YAZILMADI** (`data/*.js` donuk). Biri çözüldü, ikisi kaynakta yok.

## ⇒ ÖZET
```
🟢 ÇÖZÜLDÜ      Başkale + Çaldıran → **p0035 KAZANIR**, ve kesin
🔴 ÇÖZÜLEMEDİ   Kasr-ı Şîrîn — TDV 1590-1603'ü kapsamıyor
🔴 ÇÖZÜLEMEDİ   Yergöğü — TDV 1812'yi hiç anmıyor
```

---

## ① 🟢 BAŞKALE ve ÇALDIRAN — **ok110 KENDİ ÇAPASIYLA ÇELİŞİYOR**

### Sınav koşuldu: atlasta Van hangi gün Osmanlı oluyor?
Van'ın **canlı kaydı okundu** (hatırlanmadı):
```
{ ad:"Van", … s:[… {f:"1502-01-01", t:"**1548-08-25**", d:"safevi"}],
             d:[{f:"**1548-08-25**", t:"1923-10-29", y:"kusatma"}] }
```
Ve `ok110`'un iki kaydının **kendi `kaynak:` alanı**:
```
Çaldıran  "ankraj **Van** (78 km) — külliyattaki zincir"
Başkale   "ankraj **Van** (73 km) · Çölemerik (63 km) — külliyattaki zincir"
```
🔴 ⇒ `ok110` çapasını **Van** olarak ilân ediyor ama Van'ın gününü
(1548-08-25) değil **1639-05-17**'yi yazıyor — çapasından **91 yıl**
sapıyor. **Kendi beyanıyla çelişiyor.**

### Ve kaynak da doğruluyor — TDV `van` (200, gövde okundu)
```
"15 Ağustos 1548'de padişahın otağı Van ovasına kuruldu" ·
"**24 Ağustos 1548**" tarihinde kale fethedildi
1534 girişimi BAŞARISIZ olmuştu (Safevîler geri aldı)
🟢 **1555 Amasya Antlaşması: "VAN VE ÇEVRESİNİN Osmanlılar'a ait
   olduğu kabul edildi"**
```
🟢 Son satır belirleyici: Başkale ve Çaldıran **"Van çevresi"**dir ve
1555'te Osmanlı sayılmışlardır. `safevi → 1639-05-17` **yanlış.**
📌 Ve `1639-05-17`in nereden geldiği belli: **Kasr-ı Şîrîn/Zühâb
Antlaşması'nın günü.** O tarih sınırın *sabitlendiği* gündür, Van
çevresinin *fethedildiği* gün değil. ⇒ `ok110` bir **antlaşma gününü**
bir **fetih günü** yerine kullanmış.

### ⇒ HÜKÜM: **p0035** (safevi → 1548-08-25 · d: 1548-08-25 → 1923)
```
dayanak ①  ok110'un KENDİ çapası (Van) onu çürütüyor — 91 yıl
dayanak ②  TDV `van`: 24 Ağustos 1548 fetih
dayanak ③  TDV `van`: 1555 Amasya "Van VE ÇEVRESİ" Osmanlı
```
⚠️ **KÜÇÜK BİR TUTARSIZLIK, DÜZELTİLMEDİ:** TDV **24** Ağustos diyor,
atlas **25** Ağustos. Bir günlük fark; Van'ın mevcut kaydına
DOKUNULMADI (bu çakışmanın konusu değil ve `data/*.js` donuk).
🔜 Ayrı kalem olarak kaydedildi.
⚠️ Ve TDV `baskale` slug'ı **302**; `hakkari` ve `colemerik` 200 ama
**OKUNMADI** (bütçe) — bu `bulunamadı` DEĞİL, **okumadım.**

---

## ② 🔴 KASR-I ŞÎRÎN — ÇÖZÜLEMEDİ, ve bir YAN BULGU daha ağır

### Kaynak turu tüketilmedi ama TDV yolu kapandı
```
`kasr-i-sirin`  302 ÖLÜ
`ferhad-pasa`   200 · gövde OKUNDU → **toprak ayrıntısı VERMİYOR**
                (yalnız "1590 Osmanlı-Safevî anlaşmasında rol oynadı")
`kirmansah`     200 · gövde OKUNDU → "Osmanlı-İran savaşları sırasında
                **birçok defa el değiştiren**" ama **1590-1603'ü
                kapsamıyor**; Kasr-ı Şîrîn'i ANMIYOR
`luristan`      200 · **OKUNMADI** (bütçe) — `CLAUDE.md` ondan bir
                alıntı taşıyor ("998'de (1590) İstanbul'da yapılan
                antlaşma") ama o alıntı Kasr-ı Şîrîn'in STATÜSÜNÜ
                vermiyor
```
⇒ **ÇÖZÜLEMEDİ.** `d:1590-03-21 → 1603-10-21` iddiası ne doğrulandı
ne çürütüldü.

### 🔴 YAN BULGU: ÇAKIŞMA ZATEN CANLI VERİDE VAR
Kasr-ı Şîrîn'in **canlı** kaydı okundu:
```
s:[… {f:"1503-01-01", t:"1736-03-08", d:"safevi"} …]
d:[{f:"**1723-10-01**", t:"**1730-08-12**"}]     ← s: İÇİNDE
```
🔴 ⇒ `②`de tarif edilen `d:` ∩ `s:` çakışması **bu noktada halihazırda
mevcut** (1723-1730). p0035'in eklediği 1590-1603 **ikinci** bir
çakışma olurdu.
⇒ Soru artık *"1590-1603 çakışması kabul edilir mi"* değil:
***"1723-1730 çakışması KASITLI MI?"*** Kasıtlıysa konvansiyon var ve
p0035 ona uyuyor; kasıtsızsa **canlı veride ölçülmemiş bir alan
şişmesi** var ve p0035 onu **ikiye katlar.**
🔜 Bu, tek bir noktanın çakışmasından büyük bir soru — koordinatöre.

---

## ③ 🔴 YERGÖĞÜ — ÇÖZÜLEMEDİ, ama bir YAPI ARGÜMANI var

### TDV iki maddede de 1812'yi ANMIYOR
```
`yergogu` (200, okundu)
   🟢 "Yergöğü **27 Eylül 1810**'da Ruslar'ın eline geçti"  ← İKİ YAMA DA AYNI
   🟢 "Edirne Antlaşması'na göre (**2-14 Eylül 1829**) İbrâil ve
      Kule/Turnu ile **Eflak Prensliği'ne bırakıldı**"
   🔴 1812 Bükreş Antlaşması **HİÇ GEÇMİYOR**
`edirne-antlasmasi` (200, okundu)
   "Eflak-Boğdan **müstakil idareye** kavuşturuluyor", Rusya **kefil**
   "Yerköy Kalesi" Eflak'a devri **Rus tahliyesi** şartları içinde
   🔴 1812 yine **HİÇ GEÇMİYOR**, ve kimin devrettiği **YAZMIYOR**
`bukres-antlasmasi`  **302 ÖLÜ**
```
⇒ TDV yolu tüketildi ve **cevap vermiyor.** `romanya`nın `s:rusya
1810→1829`u da p0035'in `isg:rusya 1810→1812`si de TDV'den
doğrulanamıyor.

### 🟡 AMA BİR YAPI ARGÜMANI — ve bunu ÇIKARIM diye yazıyorum
```
Edirne 1829 Osmanlı ile Rusya arasındadır ve Eflak-Boğdan'ı
**Osmanlı süzerenliğinde özerk** kılar, Rusya'yı **kefil** yapar.
⇒ Eflak 1829'da RUS TOPRAĞI DEĞİL, Osmanlı süzerenliğinde bir prensliktir.
⇒ Yergöğü 1810-1829 boyunca RUS EGEMENLİĞİNDE olsaydı, Edirne'de
  Eflak'a "bırakılması" Osmanlı-Rus antlaşmasının konusu olmazdı.
```
⇒ `isg:` modeli (p0035) **yapısal olarak daha tutarlı**, ama
`1812-05-28` günü **TDV'den gelmiyor** — Bükreş Antlaşması'nın günü, ve
o antlaşmanın TDV maddesi **ölü.**

### ⇒ ÖNERİ (hüküm DEĞİL)
```
🟢 1810-09-27 başlangıcı  KESİN — iki yama ve TDV aynı
🟡 `isg:` vs `s:`         yapı argümanı `isg:`i destekliyor
🔴 `1812-05-28` bitişi    KAYNAKSIZ — akademik bir tur ya da
                          Emre'nin kararı gerekir
```

---

## ③b 🟢 AKADEMİK TUR YAPILDI — **`1812-05-28` ARTIK KAYNAKLI**
> *(M-2960 izniyle: `§4` TANECİKLİK boşluğu — `bukres-antlasmasi` 302,
> TDV'nin iki maddesi de 1812'yi anmıyor ⇒ akademik kaynak MEŞRU)*

**KAYNAK:** *Çanakkale Araştırmaları Türk Yıllığı Dergisi*, **Cilt 24,
Sayı 39, Güz 2025** — "Edirne Antlaşması'nda (1829) Tuna Nehri Sahil…"
(hakemli, ORCID'li yazar, **BOA arşiv belgeleriyle**: `BOA, HRT.h,
182/14` · `BOA, MHD 40`). `§4` yeşil kümesine oturuyor.
⚙️ **PDF `pypdf` ile açıldı** — WebFetch'in "çıkarılamadı"sı bu sabah üç
PDF'te de yanlış çıkmıştı.

### 🟢 ① 1812 Bükreş — sınır **PRUT**, Eflak devredilmedi
> *"28 Mayıs 1812 … Bükreş Antlaşması'nda, **Prut Nehri'nin Boğdan'a
> girdiği yerden itibaren Tuna Nehri'ne aktığı yere kadar ve oradan da
> Tuna Nehri'nin sol kıyısından Kili'ye ve Karadeniz'e aktığı yere
> kadar** iki devlet arasında sınır olarak belirlenmiştir."*

⇒ Rus sınırı **Prut**tur. Yergöğü Eflak'ta, Prut'un **çok batısında**
⇒ 1812'de Rusya'ya **geçmedi.**

### 🟢 ② Ve makale işgalin GEÇİCİ olduğunu ADIYLA söylüyor
> *"Ruslar **geçici işgal ettikleri** Tuna boyundan **çekilmiş**
> olsalar da…"*

🟢 ⇒ **`isg:` modeli DOĞRULANDI ve `1812-05-28` KAYNAKLANDI.**
`romanya`nın `s:rusya 1810→1829`u — yani 19 yıllık Rus **egemenliği** —
kaynakla **çelişiyor.**

### ⇒ HÜKÜM: **p0035** — `isg:rusya 1810-09-27 → 1812-05-28`
```
dayanak ①  TDV `yergogu`: 27 Eylül 1810 Rus eline geçti
dayanak ②  akademik: 1812 Bükreş sınırı PRUT — Eflak devredilmedi
dayanak ③  akademik: "geçici işgal … çekilmiş"  ← `isg:` tam bu
dayanak ④  yapı: Edirne 1829 Eflak'ı Osmanlı süzerenliğinde özerk
           kılıyor, Rusya KEFİL ⇒ 1829'da Eflak Rus toprağı değil
```

### 🟡 AMA İKİ ŞEY AÇIK KALDI — ve ikisi de yazılmadan geçilemez

**① 1828-29 İKİNCİ İŞGAL — ÖLÇÜLEMEDİ**
Edirne maddesi *"Rus tahliyesi"*nden söz ediyor ⇒ 1828-29'da Ruslar
yine oradaydı. Ama **Yergöğü'nün 1828'de hangi gün alındığını
BULAMADIM.**
⇒ `isg:` **tek blok** olarak öneriliyor; ikinci blok (1828-→1829-09-14)
**ayrı bir kalem** ve kaynak gerektiriyor.
⚠️ Yani bu yama Yergöğü'yü 1812-1829 arası **kesintisiz Osmanlı**
gösterir, ve son bir yılı (1828-29) muhtemelen **eksik** kalır.

**② 🔴 VE BİR NÜANS — TDV ile akademik kaynak FARKLI ŞEY SÖYLÜYOR**
```
TDV `yergogu`   Edirne'yle "**Eflak Prensliği'ne** bırakıldı"
akademik        "**Yerköy Kalesi'nin RUSYA'YA teslim edilmesi** ve
                 istihkâmlarının yıkılması kararlaştırılmıştı"
                 (Şerafeddin Turan, "1829 Edirne Antlaşması", DTCFD IX/1-2)
```
🟡 **Bunu ÇELİŞKİ diye yazmıyorum** — bu gece aynı tuzağa üç kez
düşüldü. Muhtemel okuma: kale **askerî olarak** Rusya'ya teslim edilip
tahkimatı yıkıldı, **egemenlik** ise Eflak'a geçti. İki ifade farklı
şeyi anlatıyor olabilir.
🔴 **AMA AYRIŞTIRMADIM, ÖLÇMEDİM.** Ve `1829-09-14` sonrası `s:eflak`
kaydını bu yüzden **sorgulamadım** — o ayrı bir kalem.

---

## ③c AYNI MAKALE YENİDEN TARANDI — **(b) ÇÖZÜLDÜ, (a) BULUNAMADI**
> *(M-2965: "önce aynı makaleyi tara, yeni kaynak arama" — tarandı.)*

### 🟢 (b) NÜANS ÇÖZÜLDÜ — **ÇELİŞKİ YOKMUŞ, İKİ AYRI NESNE**
Makalenin iki cümlesi yan yana konunca ayrışıyor:
```
① TOPRAK   "1829 Edirne Antlaşması'na göre, Tuna Nehri'nin **sol
   sahilindeki adalar EFLAK VE BOĞDAN'A BIRAKILMIŞ**, nehir ise …
   sınır olarak kabul edilmiştir. **Osmanlıların bu sahilde KALE YA DA
   TAHKİMAT BULUNDURMASI … YASAKLANIRKEN**…"
② KALE     "Bunun yanında **Yerköy Kalesi'nin Rusya'ya TESLİM
   EDİLMESİ ve İSTİHKÂMLARININ YIKILMASI** kararlaştırılmıştı."
```
🟢 ⇒ İki ifade **farklı nesneyi** anlatıyor:
```
TOPRAK/EGEMENLİK  → **EFLAK**      (TDV: "Eflak Prensliği'ne bırakıldı")
KALE (yapı)       → **RUSYA'ya**, ve **YIKILMAK ÜZERE**
```
Bu bir **silahsızlandırma** hükmü: Osmanlı'nın sol sahilde tahkimat
tutması yasaklanıyor, kale Rus kuvvetlerine teslim edilip **yıkılıyor.**
⇒ **TDV ile akademik kaynak ÇELİŞMİYOR.** Dün bıraktığım nüans kapandı.
🟢 ⇒ Atlasın `s:eflak 1829-09-14 → …` kaydı **DOĞRU**, dokunulmayacak.
📌 Ve bu, `§4`ün *"önce ayrıştır, sonra çelişki ilan et"* kuralının bu
gece **dördüncü** doğrulanması: çelişki sanılan dört şeyin dördü de
çelişki çıkmadı (Sisam · Bozcaada · Selanik takvimi · ve bu).

### 🔴 (a) 1828-29 İKİNCİ İŞGAL — **BU KAYNAKTA BULUNAMADI**
Makale Tuna cephesindeki Rus ele geçirmelerini **adıyla** sayıyor:
```
"Prut ve Anapa'yı istila ettikten sonra … Dobruca'ya girmiş … Varna
 ile Silistre'yi kuşatmışlardı. … **İsakçı, İbrail, Pazarcık**
 bölgelerini ele geçirdikten sonra 1829'da **Rahova**'nın düşüşü …
 **Silistre**'nin ele geçirilmesiyle birlikte Edirne…"
```
🔴 **YERGÖĞÜ BU LİSTEDE YOK.**
🟡 Ama bu **zayıf bir olumsuz**: liste seçici olabilir, ve makale
Rusların 1828'de *"Silistre kuşatmasını kaldırarak **Eflak-Boğdan'a
geri çekildiler**"* diyor — yani Eflak'ta **fiilen bulunuyorlardı.**
Yergöğü Eflak sahilinde bir Osmanlı kalesi ⇒ kuşatılmış olması
muhtemel, ama **kaynak söylemiyor.**

⇒ **`bulunamadı`** — bu kaynakta yok. `okumadım` DEĞİL: makale
tarandı ve Tuna cephesi anlatısı okundu.

### ⇒ HÜKÜM (③'ün tamamlanmış hâli)
```
🟢 `isg:rusya 1810-09-27 → 1812-05-28`   TEK BLOK, kaynaklı
🟢 `s:eflak 1829-09-14 → …`              DOĞRU, dokunulmadı
🔴 1828-29 ikinci işgal                  BULUNAMADI ⇒ yama başlığında
   **"1828-29 EKSİK"** damgası DURACAK, silinmeyecek (M-2965 ④)
```
⚠️ Ve `Değişmez 2` sonucu: `isg:` tek blok kaldığı için **yeni kırılma
günü doğmuyor** — `isg:` sınırları zaten kırılma üretmez, ve `d:`
alanına dokunulmadı. İki blok yazılsaydı 1828 ve 1829-09-14 için
çekirdekte madde aranması gerekirdi; **gerekmedi.**
⚠️ Ve şu ayrımı korumak şart: TDV'nin 1812'yi **anmaması**, 1812'de bir
şey olmadığını göstermez. `§11`: *"kaynağın susması bir sonuç değildir."*

---

## ④ NE YAZMADIM / NE ÖLÇMEDİM
```
VERİ YAZMADIM   `data/*.js` DONUK — üçü de hüküm/öneri olarak kaldı
OKUMADIM        `luristan` · `hakkari` · `colemerik` (200, bütçe)
                🔴 bunlar `bulunamadı` DEĞİL, **okumadım**
ÖLÇMEDİM        Kasr-ı Şîrîn'in 1723-1730 çakışmasının KASITLI olup
                olmadığını — `git log -S` ile provenansı bakılabilir,
                YAPMADIM
ÖLÇMEDİM        Şehrizor'un çakışan penceresini (mekanik listede, ②'ye
                bağlı) — sevkin kapsamı dışındaydı
BULUNAMADI      `kasr-i-sirin` (302) · `bukres-antlasmasi` (302) ·
                `baskale` (302) — arandı, ölü
```


---
---

# EK 2 — KOORDİNATÖRÜN ÖLÇÜMÜ: ÇAKIŞMA BİR **KONVANSİYON**

> `1.MURAT HÜDAVENDİGAR` · 5 Eylül 2026, 14:25 · **veri yazılmadı**
> Araç: `node` + `vm`, `data/yerlesimler*.js` (78 dosya · 3808 nokta)

`NEHİR SÜRTÜNME`nin yan bulgusu (*"çakışma zaten canlı veride var"*)
doğru çıktı **ve tekil değil.** Külliyat tarandı:

```
🔴 d: ∩ s:  çakışan ÇİFT 67 · ETKİLENEN NOKTA 41 (%1,1)
   toplam çakışan gün 452.164 ≈ 1.238 nokta-yıl
⚪ d: ∩ v:  26   (Osmanlı iç ayrımı — çakışma SAYILMAZ)
⚪ v: ∩ s:   7
```

**Desen tek: Osmanlı-Safevî cephesi.** `s:safevi` hânedanın tüm ömrü
olarak **tek blok** yazılmış (`1501-07-01 → 1736-03-08`), Osmanlı
işgalleri onun üstüne `d:` ile oyulmuş:

```
 5  Tebriz      1514-09-06→1514-09-15  ∩  safevi 1501-07-01→1736-03-08
 3  Revan       1583-06-01→1604-06-08  ∩  safevi …
 2  Nahçıvan · Gence · Şamahı · Kabala · Ereş · Merâga · Ahar · Sarâb
 2  Hemedan     **1590-03-21→1603-10-21**  ∩  safevi 1508-01-01→1736-03-08
 2  Kirmanşah   **1590-03-21→1603-10-21**  ∩  safevi 1508-01-01→1736-03-08
 2  Şehrizor    1535-01-01→1550-01-01  ∩  safevi 1508-01-01→1554-08-22
```

## ⇒ İKİ HÜKÜM DEĞİŞTİ

### ② `Kasr-ı Şîrîn` → **BİRLEŞTİR** (p0035 kabul)
`Hemedan` ve `Kirmanşah` **tam o pencereyi** zaten taşıyor
(`1590-03-21→1603-10-21`) ve ikisi de Kasr-ı Şîrîn'in komşusu. ⇒ p0035
bir çakışma **icat etmiyor**, kaydı komşularıyla **tutarlı** hâle
getiriyor.
🟢 Birleşim: `kafkas`ın `s:`/`v:`/`kaynak:`ı + p0035'in **iki** `d:`
dönemi (`1590-03-21→1603-10-21` ve `1723-10-01→1730-08-12`).
📌 Ve `1723-10-01` bir kronoloji günü: *«Kirmanşah'ın alınışı — Zağros
kapısı»* (`olaylar_ek5.js`). Uydurma değil.

### ④ `Şehrizor` → **BİRLEŞTİR**, çakışma uyarısı DÜŞTÜ
Önceki notumda *"`s:`i 1535'te kesmek mi gerekir"* diye sormuştum.
**Gerekmez** — aynı konvansiyon.

## 🔴 AMA BEDELİ ÖLÇÜLDÜ VE KAYITSIZDI

`uret_petek` yabancı gövdeyi `s:`ten kuruyor ve çakışan günü
**dışlamıyor**. Osmanlı hem denetimde hem ekranda kazanıyor, ama
**Safevî gövdesinin yüzölçümü 1.238 nokta-yıl kadar fazla sayılıyor.**
⇒ Görsel doğru, **lejanttaki ≈km² şişik.** Bu bir kusur değil
konvansiyonun **fiyatı** — ama bugüne kadar ölçülmemişti.
🔜 Ayrı kalem: `s:`i `d:` pencerelerine göre bölmek mi, yoksa gövde
kurulurken `d:` aktifse o hücreyi yabancıdan düşürmek mi?

## SON DURUM — 8 çakışmanın 7'si kapandı

```
🟢 Bağdat · Halepçe · Kutaisi        MEKANİK (üst küme / boş alan)
🟢 Şehrizor · Kasr-ı Şîrîn           BİRLEŞTİR (konvansiyon ölçüldü)
🟢 Başkale · Çaldıran                p0035 — ok110 kendi çapasıyla çelişiyor
🔴 Yergöğü                           MODEL çözüldü (`isg:`), GÜN açık
```
