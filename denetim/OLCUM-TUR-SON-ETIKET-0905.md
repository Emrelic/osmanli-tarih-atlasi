# ÖLÇÜM — `tur:"son"` etiketi: **yanlış olan 5, ama asıl soru MODEL**

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2931` · **Tarih:** 5 Eylül 2026
> **Cins:** ÖLÇÜM — *veri yazılmadı, HİÇBİR ETİKET DEĞİŞTİRİLMEDİ.*

---

## 1. ⑤ ÖNCE: **YENİ ETİKET GEREKMİYOR — VAR OLAN ZATEN ORADA**

Sevkin şartı: *"yeni alan önermeden önce `git grep` ile ARA"*. Aradım —
`tur` sözlüğünde **19 değer** var ve ikisi tam bunu taşıyor:

```
vassal    24 kayıt
  gilan-kiya 1501  "Safevî hâkimiyeti kuruldu, Kârkiyâ'lar yerel/nominal
                    beylik olarak SÜRDÜ"
  kilikya-ermeni 1269 "…krallık fiilen Memlük vassalı oldu"
siyaset    4 kayıt
  afganistan 1880-07-22  "Abdurrahman Han emir oldu, ÜLKE İNGİLİZ
                          HİMAYESİNE GİRDİ"
```

### 🔴 VE KANIT AYNI DOSYANIN İÇİNDE — aynı olay sınıfı, iki etiket
```
afganistan  1880-07-22  tur:"siyaset"  "ülke İngiliz himayesine girdi"
                        → künye 1923'e kadar SÜRÜYOR
manipur     1891-01-01  tur:"son"      "krallık İngiliz himâyesine alındı"
                        → künye 1923'e kadar SÜRÜYOR
```
**Aynı olay, aynı sonuç, iki farklı etiket.** ⇒ Külliyat zaten tutarsız,
ve **doğru etiket zaten mevcut.**
📌 `§11`in *"bir alan icat etmek beş dakika, var olanı aramak on
saniye"* dersi: bu turda arama **on saniye sürdü ve cevabı verdi.**
⇒ **`tur:"statu"` ÖNERMİYORUM.**

---

## 2. TARAMA — 441 `son` kaydının tamamı

Kaydın **kendi metnine** bakıldı (künyeye değil, sevkin şartı):

```
🟢 GERÇEK SON (aday)              212
🟡 STATÜ DEĞİŞİMİ (aday)           29
🟠 ikisi de geçen (elle okundu)     4
⚪ AYIRT EDİLEMEDİ                196   ← metin yetmiyor; "bulunamadı" DEĞİL
────────────────────────────────────
                                  441
```
⚠️ **⚪ 196 büyük ve dürüst bir kova:** çoğu *"Osmanlı'ya katıldı"* ya
da *"X tarafından alındı"* gibi kısa cümleler; **hangi cinsten olduğu
metinden okunamıyor.** Bunları 🟢'ya saymak sayıyı şişirirdi.

---

## 3. 🔴 KRİTİK AYRIM — 33 statü kaydının **28'i kusur DEĞİL**

`son` kaydının tarihi künyenin `t:`siyle **aynı mı**?

```
son == t:   28   ⇒ künye O TARİHTE BİTİYOR
                   ⇒ etiket künyenin KENDİ modeliyle TUTARLI
son <  t:    5   ⇒ künye DEVAM EDİYOR
                   ⇒ 🔴 ETİKET GERÇEKTEN YANLIŞ
```

### 🔴 ETİKETİ YANLIŞ OLAN BEŞ — tam liste
```
manipur              son:1891-01-01   t:1923-10-29   "İngiliz himâyesine alındı"
san-devletleri       son:1887-01-01   t:1923-10-29   "İngiliz himâyesine girdi"
yemen-zeydi          son:1918-11-01   t:1923-10-29   "garnizonlar çekildi, fiilî bağımsızlık"
sirbistan-prensligi  son:1878-07-13   t:1882-03-06   "Berlin Kongresi'nde tam bağımsızlık tanındı"
mutahharten          son:1403-01-01   t:1410-01-01   "beylik Akkoyunlu nüfuzuna girdi"
```
🟢 **Ve beşinin beşi de bugün BAŞKA turlarda zaten çıkmıştı** — yeni
künye yok. Üç bağımsız ölçüt (pencere sözleşmesi · `son`↔`t:` ·
etiket metni) **aynı beş kayda** yakınsadı.

### ⬜ ÖTEKİ 28 — kusur değil, **MODEL KARARI**
24'ü + 🟠 dördü, ve çoğu tek bir desen: **sömürge himayesi ilanı.**
```
bagirmi · bundu · eve-notse · futa-callon · gyaaman · ibadan · lozi ·
nijer-deltasi · nkore · sine-salum · tio · toro · tsvana · yatenga ·
gambiya-mandinka · gonja · laos-kralliklari · malay-sultanliklari ·
matamba · lan-na · tunus-ocagi · svahili-sehirleri · misir-kavalali · ruanda
```
Bu künyeler *"himayeye girdi"* gününde **bitiyor** — yani atlas
*"himaye = kimliğin sonu"* modelini uyguluyor, ve **tutarlı**
uyguluyor.
⇒ Etiket doğru; tartışılacak olan **model.**

---

## 4. 🔴🔴 VE MODEL KENDİ İÇİNDE TUTARSIZ — ölçülebilir vaka

```
afganistan   1880 İngiliz himayesi → tur:"siyaset" · künye 1923'e SÜRÜYOR
bundu        1858 Fransız nüfuzu   → tur:"son"     · künye 1858'de BİTİYOR
manipur      1891 İngiliz himayesi → tur:"son"     · künye 1923'e SÜRÜYOR
```
**Üç aynı cins olay, üç farklı işlem.** ⇒ Asıl soru bir etiket sorusu
değil:

> ### SORULACAK OLAN
> **Bir devlet himâyeye girince künyesi BİTER Mİ, yoksa SÜRER Mİ?**
> Bugün külliyat **her ikisini de** yapıyor: 24 künye bitiriyor,
> `afganistan` · `manipur` · `san-devletleri` sürdürüyor.
> 🔴 **Bu bir KAPSAM kararıdır ve ben vermiyorum.**

⚠️ Ve kararın haritaya doğrudan etkisi var: künye biterse o gövde
**boyanmaz**; sürerse boyanır. `manipur` (32,8 yıl) ve `san-devletleri`
(36,8 yıl) bu sabah tam bu yüzden ölçülmüştü.

---

## 5. ③ AYRIMI ZATEN YAPANLAR — ve külliyatın **kendi tipolojisi** var

Sevk sordu: *"başka kaç künyenin başlığı/özeti bu ayrımı yapıyor?"*

```
ayrımı `ozet`inde bir biçimde yapan künye:   77 / 591   (%13,0)
```
Ve daha keskini: **külliyat kendi terimlerini geliştirmiş.**
```
HANEDAN ÖMRÜ          46   safevi · altinorda · germiyan · aydin · saruhan · mentese
ÜLKE SÜREKLİLİĞİ      20   napoli · bogdan · sadi · misir-kavalali · sirbistan-prensligi
künye DIŞ ZARFI        5   germiyan · aydin · saruhan · teke · mutahharten
DEVLET SÜREKLİLİĞİ     3   sirbistan-prensligi · bulgaristan-prensligi · romanya
──────────────────────────
en az birini kullanan  64 / 591  (%10,8)
```

> 🔴 **BU BİR TİPOLOJİDİR VE VERİDE YOK.**
> *"HANEDAN ÖMRÜ"* ile *"ÜLKE SÜREKLİLİĞİ"* birbirinden farklı iki
> kimlik cinsi — ve fark tam olarak bu turun sorduğu şey: hânedan
> ömrü biterken ülke sürer.
> **64 künye bunu biliyor ve YAZIYOR — ama serbest metinde.**
> ⇒ `§11`: *"bir ders veriye SERBEST METİN olarak inerse inmiş
> sayılmaz."* Makine soramıyor, motor okuyamıyor, denetim göremiyor.
> 🟢 **Sınavı tek soru:** *bunu bir `if` ile sorabiliyor muyum?*
> Bugün **hayır.**

📌 Ve bu, ⑤'in cevabını genişletiyor: `tur:"son"` etiketi için yeni bir
değer gerekmiyor — ama **künye cinsi** için külliyatın zaten
kullandığı bir ayrım var ve o **alansız.** İkisi ayrı kalem.
⚠️ **Bir alan ÖNERMİYORUM** — o bir tasarım kararı ve `k:`/`sinif:`
vakası bu projede bir kez yaşandı.

---

## 6. DAMGALAR

```
🟢 ARADIM      ⑤ yeni etiket gerekmiyor: `vassal` (24) ve `siyaset` (4)
               ZATEN var. Kanıt aynı dosyada: afganistan `siyaset` ile
               manipur `son`, AYNI olay sınıfı.
🟢 TARADIM     441 `son` kaydının tamamı · 🟢212 · 🟡29 · 🟠4 · ⚪196
🔴 AYIRDIM     33 statü adayının 28'i kusur DEĞİL (`son`==`t:`) ·
               ETİKETİ YANLIŞ olan 5
🟢 YAKINSAMA   o 5, üç BAĞIMSIZ ölçütle bugün aynı çıktı — yeni künye YOK
🔴 BULDUM      model kendi içinde tutarsız: afganistan sürüyor, bundu
               bitiyor, manipur sürüyor — üç aynı cins olay, üç işlem
🔴 BULDUM      külliyatın KENDİ tipolojisi (HANEDAN ÖMRÜ 46 · ÜLKE
               SÜREKLİLİĞİ 20 · DIŞ ZARF 5 · DEVLET SÜREKLİLİĞİ 3)
               — 64 künye · ve HEPSİ SERBEST METİNDE, alansız
⚪ AYIRT EDİLEMEDİ  196 kayıt — metin yetmiyor. "bulunamadı" DEĞİL,
               ve 🟢'ya SAYILMADI (sayıyı şişirirdi)
⚪ ÖLÇMEDİM    ⚪196'nın içinde kaç statü değişimi gizli olduğunu —
               künye künye okuma gerekir
⚪ ÖLÇMEDİM    "himaye = son mu" modelinin haritada kaç gövdeyi
               etkilediğini (manipur 32,8 · san-devletleri 36,8 yıl
               bu sabah ölçüldü; ötekiler ÖLÇÜLMEDİ)
🔴 ÖNERMEDİM   ne yeni `tur` değeri, ne yeni alan. İkincisi bir TASARIM
               kararı ve bu proje `sinif:`/`k:` vakasını yaşadı.
🔴 YAZMADIM    hiçbir etiket, hiçbir alan. HÜKÜM YOK.
```

---

## 7. TESLİM — sayıyla

```
⑤ YENİ ETİKET   GEREKMİYOR — `vassal`/`siyaset` zaten var, ve külliyat
                aynı olayı ikisiyle de etiketlemiş
① TARAMA        441 kayıt · 🟢212 · 🟡29 · 🟠4 · ⚪196
② ETİKETİ YANLIŞ    5   manipur · san-devletleri · yemen-zeydi ·
                        sirbistan-prensligi · mutahharten
   KUSUR DEĞİL     28   `son`==`t:` — künye o tarihte bitiyor, etiket
                        künyenin KENDİ modeliyle tutarlı
③ AYRIMI YAPAN  77 / 591 künye · ve 64'ü külliyatın KENDİ
                terimleriyle (HANEDAN ÖMRÜ · ÜLKE SÜREKLİLİĞİ · DIŞ ZARF)
④ ASIL SORU     etiket değil MODEL: "himâyeye giren devletin künyesi
                BİTER Mİ?" — bugün külliyat her ikisini de yapıyor.
                KAPSAM KARARI, ve bende değil.
```
