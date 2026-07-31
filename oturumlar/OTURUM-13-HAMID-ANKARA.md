# OTURUM 13 — HAMİD İLİ / ISPARTA ENKLAVI · 1354 ANKARA MADDESİ

---

# BÖLÜM I — ISPARTA ENKLAVI

> *"Isparta enklav şeklinde ana parçadan kopuk görünüyor, arada koridor var.
> Bu görünüm bozukluk mu tarihî gerçeklik mi?"*

## 🔴 CEVAP: BOZUKLUK — ve sebebi tek bir yanlış tarih

Isparta'nın `hamid` dönemi **`1381-06-01`**'de bitiyor. Komşularınınki
bitmiyor. 1385 kesitinde ölçülen tablo:

| Isparta'ya uzaklık | Yerleşim | 1385'teki sahibi |
|---|---|---|
| **23,7 km** | Burdur | `hamid` |
| **28,8 km** | Eğirdir | `hamid` |
| **36,7 km** | Uluborlu | `hamid` |
| **80,4 km** | Yalvaç | **OSMANLI** ← en yakın Osmanlı noktası |

⇒ Isparta, üç yanı 24-37 km'den Hamid toprağıyla çevrili, en yakın Osmanlı
komşusu **80 km** ötede bir ada. Petek motoru bunu ancak enklav olarak
çizebilir. **Kullanıcının gördüğü şey tam olarak budur.**

📌 Ve koordinatörün ölçtüğü bağlam doğrulandı: bu **seyreklik değil.**
Batı Anadolu'nun ortanca komşu mesafesi 19 km; buradaki komşular da 24-37 km.
Noktalar yerinde — **yanlış olan tarih.**

## Kaynak: Isparta satın alma listesinde YOK

**TDV `hamidogullari`** ✔ — satılan beldeleri **adıyla** sayıyor:
> *"Hüseyin Bey idaresindeki **Akşehir, Beyşehir, Seydişehir, Yalvaç ve
> Karaağaç** beldeleri 80.000 altın karşılığında"* Osmanlılar'a satıldı.

**Isparta bu listede yok.** Ve devamı:
> 1386'da **Eğridir**'i ele geçirdi… **1390-1391** yıllarında Yıldırım
> Bayezid *"bütün Hamîd ülkesini"* ele geçirdi.

**TDV `isparta`** ✔ — meseleyi doğrudan tartışıyor ve hükmü veriyor:
> Kroniklerin bir kısmı Isparta'yı listeye ekliyor (*"Atsız tarafından
> yayımlanan nüshada bunlara Yalvaç ve Isparta'nın da eklenmiş olduğu
> görülmektedir"*) — **ama** Isparta *"muhtemelen onun **1391**'de ölümünden
> sonra kesin olarak Osmanlı idaresi altına girdi."*

⚠️ Ayrıca: Isparta Hamidoğulları'nın **merkezi değildi** — merkez Eğirdir'di.
Veride Isparta `k:3`, Eğirdir `k:4`; bu da ayrıca gözden geçirilmeli.

## 🔧 PAKET A — Isparta

```
Isparta   s:hamid  {f:"1297-01-01", t:"1381-06-01"}  →  t:"1391-01-01"
          d:       {f:"1381-06-01", t:"1402-07-28"}  →  f:"1391-01-01"
```
Sonuç zinciri **Burdur ve Uluborlu ile birebir aynı** olur:
`selcuklu` 1281→1297 · `hamid` 1297→**1391-01-01** · `d:` 1391-01-01→1402-07-28 ·
`timurlu` 1402-07-28→1402-09-15 · `hamid` 1402-09-15→1414-06-01 ·
`d:` 1414-06-01→1923-10-29

✅ **Enklav kapanır** — Isparta, Burdur/Eğirdir/Uluborlu ile tek bir Hamid
bloğu oluşturur; Osmanlı gövdesi Yalvaç-Akşehir-Beyşehir-Seydişehir hattından
kesintisiz devam eder.
✅ **Değişmez 2 riski yok** — `1391-01-01` kırılmasını Burdur, Uluborlu ve
Eğirdir zaten taşıyor, yani maddesi var.

## 🔧 PAKET B — Eğirdir

```
Eğirdir   s:hamid  {f:"1297-01-01", t:"1391-01-01"}  →  t:"1386-01-01"
          d:       {f:"1391-01-01", ...}             →  f:"1386-01-01"
```
**TDV `hamidogullari`** ✔: Murad I *"**1386**'da Eğridir'i ele geçirdi"*.
⚠️ **Gün bilinmiyor** — `-01-01` yer tutucudur.
⚠️ Bu **yeni bir kırılma günü** açar (`1386-01-01`) ⇒ Değişmez 2 koşulmalı,
AÇIK çıkarsa madde yazılmalı.

## 🟡 PAKET C — satın alma tarihinin kendisi kuşkulu

| Veri | TDV `hamidogullari` |
|---|---|
| `1381-06-01` (5 kayıt + kronoloji maddesi) | *"**1382-1383** yılında"* |

⚠️ Gün (`-06-01`) hiçbir kaynakta yok; yıl da 1-2 yıl oynuyor. **Karar
vermiyorum** — beş kaydı birden kaydırmak Değişmez 2'yi tetikler ve TDV bir
gün vermiyor. Sahibine (Oturum 0) denetim olarak havale ediyorum.

## 🔧 PAKET D — kronoloji maddesinin başlığı yanlış

```
t:"1381-06-01"  b:"Hamîd ilinin satın alınışı: Isparta'nın katılışı"
```
🔴 **Isparta o satın almada yoktu.** Başlık, kullanıcının tam olarak sorduğu
yanlış izlenimi üretiyor. Kullanıcının yeni genel kuralına (*"fethedilen tüm
şehirleri teker teker saysın"*) uygun yeni metin:

```js
{ t:"1381-06-01", k:"fetih", etiket:["toprak-kazanc"], gun:"1381",
  b:"Hamîd ilinin satın alınışı: Akşehir, Beyşehir, Seydişehir, Yalvaç, Karaağaç",
  yer:"Akşehir, Beyşehir, Seydişehir, Yalvaç, Karaağaç",
  kisiler:"Murad I, Hamidoğlu Kemâleddin Hüseyin Bey",
  d:"Murad I, Hamidoğlu Hüseyin Bey'den beş beldeyi 80.000 altın karşılığında satın aldı: Akşehir, Beyşehir, Seydişehir, Yalvaç ve Karaağaç. Hamîd ilinin GERİ KALANI — Isparta, Eğirdir, Burdur, Uluborlu — beyliğin elinde kaldı; Eğirdir 1386'da, ötekiler 1390-1391'de Yıldırım Bayezid tarafından alındı.",
  kaynak:"hamidogullari" }
```

## 🟡 PAKET E — eksik nokta: KARAAĞAÇ (Şarkîkaraağaç)

Satın alma listesinde **adıyla geçiyor** ama veride nokta **yok** (parça
eşleşme: `Karaağaç` → YOK).

```js
{ ad:"Şarkîkaraağaç", tur:"sehir", lat:38.0783, lon:31.3667, g:0, k:4, m:"Konya",
    s:[{f:"1281-01-01",t:"1297-01-01",d:"selcuklu"},
       {f:"1297-01-01",t:"1381-06-01",d:"hamid"},
       {f:"1402-07-28",t:"1402-09-15",d:"timurlu"},
       {f:"1402-09-15",t:"1414-06-01",d:"hamid"}],
    d:[{f:"1381-06-01",t:"1402-07-28"},{f:"1414-06-01",t:"1923-10-29"}] },
```
⚠️ **1402 sonrası sahibi kaynaklı DEĞİL.** Komşuları ikiye ayrılıyor:
Yalvaç (24 km) `hamid`'e dönüyor, Beyşehir (45 km) `karaman`'a. En yakın
komşu Yalvaç olduğu için onunki yazıldı — **ama bu bir tercih, kaynak değil.**
İşaretlendi.

## Kullanıcının ikinci sorusu: "Hamid ilinin katılmayan kısımları var mı?"

**Evet, iki ayrı sebeple:**

1. **Kademeli ilhak (gerçeklik).** 1381 satın alması yalnız beş beldeydi.
   Eğirdir 1386'da, Isparta-Burdur-Uluborlu 1390-1391'de katıldı.
   Ve 1402'den sonra **hepsi geri verildi**, kesin ilhak **1414-06-01**.
2. **Teke kolu hiç Hamid değildi (gerçeklik).** Antalya, Elmalı, Finike, Kaş
   1321'de ayrılan **Tekeoğulları**'nındır (`teke` kimliği) ve 1392'de ayrıca
   alınmıştır. Kullanıcı güneyde "katılmamış Hamid toprağı" görüyorsa
   **o doğru veridir.**

---

# BÖLÜM II — 1354 ANKARA MADDESİ

> *"1354 Ankara alınırken başka yerler de alındı ise onları da belirtilse
> iyi olur."*

## Maddede zaten iki yer sayılı — ama ikisi de kaynakla çelişiyor

Mevcut madde: `yer:"Ankara"`, metinde *"Aynı tarihte haritaya katılan diğer
yerleşimler: **Sivrihisar, Çankırı**."* Ve veri bunu izliyor: üçünün de `d:`
dönemi `1354-08-01`'de başlıyor.

| Yer | Veride | TDV | Hüküm |
|---|---|---|---|
| **Ankara** | `ahiler` → `d:` 1354-08-01 | `ankara` ✔ *"Ankara **1354** yılında Orhan Gazi'nin oğlu **Süleyman Paşa** tarafından Osmanlı ülkesine katıldı"* | ✅ **DOĞRU** (gün `-08-01` kaynaklı değil) |
| **Sivrihisar** | `germiyan` → `d:` 1354-08-01 | `sivrihisar` ✔ İlhanlı sonrası **Karamanoğulları**'nın elinde; Osmanlı'ya **757 (1356)**, *"Ankara'nın fethinin ardından"*; kesin hâkimiyet **818/1415** | 🔴 **kimlik yanlış** (`germiyan` → `karaman`) **ve tarih 2 yıl erken** |
| **Çankırı** | `candar` → `d:` 1354-08-01 | `cankiri` ✔ **I. Murad** devrinde katıldı (1362-1389); Bayezid I geri aldı | 🔴 **1354'te değil** — Orhan devrine yazılmış, en az 8 yıl erken |

⇒ Kullanıcının sorusunun cevabı beklenenin tersi: **madde başka yerler
sayıyor, ama ikisi de yanlış.** Zenginleştirmeden önce düzeltilmeli.

## 🔧 PAKET F — 1354 maddesi

```js
{ t:"1354-08-01", k:"fetih", etiket:["toprak-kazanc"], gun:"1354",
  b:"Ankara'nın alınışı", yer:"Ankara", kisiler:"Süleyman Paşa",
  d:"Orhan Gazi'nin oğlu Süleyman Paşa, Ahî yönetimindeki Ankara'yı Osmanlı ülkesine kattı; Orta Anadolu yolu açıldı. Sivrihisar iki yıl sonra (1356) aynı harekâtın devamında alındı.",
  kaynak:"ankara" }
```
🔧 **Çankırı cümleden ve 1354 tarihinden çıkarılmalı.**
🔧 **Sivrihisar ayrı bir maddeye taşınmalı** (`1356-01-01`), çünkü aynı gün
değil.

## 🔧 PAKET G — Sivrihisar kaydı

```
Sivrihisar  s:germiyan {f:"1300-01-01", t:"1354-08-01"}
        →   s:karaman  {f:"1300-01-01", t:"1356-01-01"}
            d:         {f:"1354-08-01", ...}  →  f:"1356-01-01"
```
**TDV `sivrihisar`** ✔: *"Anadolu'daki Moğol/İlhanlı idaresi sonrasında
**Karamanoğulları**'nın eline geçen Sivrihisar"*; Osmanlı'ya **757 (1356)**.
⚠️ Gün bilinmiyor · ⚠️ yeni kırılma günü ⇒ Değişmez 2 koşulmalı ve
`1356-01-01` için madde yazılmalı.
⚠️ TDV *"sonradan birkaç kez kaybedilip geri alındı, kesin hâkimiyet
**818/1415**"* diyor — veride bu ara dönemler **yok**; ayrı bir tur işi.

## 🔧 PAKET H — Çankırı kaydı

```
Çankırı  s:candar {f:"1309-01-01", t:"1354-08-01"}  →  t: 🔴 ÇÖZÜLMEDİ
         d:       {f:"1354-08-01", ...}             →  f: 🔴 ÇÖZÜLMEDİ
```
**TDV `cankiri`** ✔ yalnız *"I. Murad devrinde"* diyor — **yıl vermiyor.**
Murad I 1362-1389 arası hüküm sürdü. ⇒ **Tarih uydurulamaz.**
📌 `KARAR-DAYANAK 14`: kaynaksız yer tutucu **işaretlenir**. Bugünkü
`1354-08-01` en az 8 yıl erkendir ve **Orhan devrine** düşüyor — yani kesin
yanlış olduğu biliniyor, doğrusu bilinmiyor. Ayrı bir kaynak turu gerekiyor.

---

## Slug denetimi (`<title>` + **madde metni**)

| Slug | Durum |
|---|---|
| `hamidogullari` | ✅ CANLI — satın alınan beş beldeyi **adıyla** sayıyor; 1386 Eğirdir; 1390-1391 |
| `isparta` | ✅ CANLI — Isparta'nın listede olup olmadığını tartışıyor, **1391** hükmünü veriyor |
| `ankara` | ✅ CANLI — 1354, Süleyman Paşa |
| `sivrihisar` | ✅ CANLI — Karamanoğulları; 757 (1356); 818/1415 |
| `cankiri` | ✅ CANLI — I. Murad devri (**yıl vermiyor**) |
