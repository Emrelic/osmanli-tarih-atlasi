# ÖLÇÜM — Bozcaada / İmroz'un `1913-11-01`i nereden geliyor?

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2823` · **Tarih:** 5 Eylül 2026
> **Cins:** ÖLÇÜM — *veri yazılmadı, hiçbir dosya değiştirilmedi.*
> `data/*.js` ve motor dosyalarına dokunulmadı (koşu 5b canlı).

---

## 0. ÖZET

```
① Gün bir YAMA'dan gelmiyor: veriye EN ESKİ commit'le girmiş
   (4e6f3c5 · 28 Temmuz 2026 · "PETEK SİSTEMİ"). Toplu yazım DEĞİL —
   dört geçişin dördü aynı iki kaydın iki alanı.
② 🔴 VE `1913-11-01` BİR GÜN İDDİASI DEĞİL: maddenin kendi `gun:` alanı
   **"Kasım 1913"** diyor. Yani ay hassasiyeti ayın 1'ine kodlanmış —
   projenin `§4`te zaten kayıtlı olan üçüncü hassasiyet ekseni.
③ 🔴🔴 ASIL BULGU: kaydın ZİKRETTİĞİ kaynak iddiayı DESTEKLEMİYOR,
   hatta ÇÜRÜTÜYOR. Destekleyen başka bir TDV maddesi var ama O DA
   BAŞKA BİR ANTLAŞMA adı veriyor. İki TDV maddesi birbiriyle çelişiyor.
⇒ Bu bir "gün yanlış" kalemi değil, bir **DAYANAK** kalemi.
```

---

## 1. PROVENANS — dört soru, dört cevap

### ① Gün veriye ne zaman, hangi commit'le girdi?
```
git log -S "1913-11-01" --oneline -- data/
   e728000  IKINCI DALGA KRONOLOJI
   930a27d  2026-07-29  Sıfır sessiz toprak değişimi
   72feb1a  2026-07-28  Çok devletli harita
   4e6f3c5  2026-07-28  PETEK SİSTEMİ ← EN ESKİ
```
⇒ **Atlasın ilk veri commit'iyle girmiş.** Sonradan eklenmiş bir yama
değil; kurucu veriyle birlikte doğmuş.

### ② Commit mesajı bir kaynak zikrediyor mu?
**Hayır.** `4e6f3c5` toplu bir kuruluş commit'i; tek bir kaydın
gerekçesini taşımıyor. **DAMGA: bulunamadı (arandı, yok).**

### ③ Kaydın kendi `kaynak:` alanı ne diyor?
```
data/yerlesimler.js — Bozcaada ve İmroz kayıtları:  `kaynak:` alanı YOK
data/olaylar_ek5.js:519 — kronoloji maddesi:        kaynak:"bozcaada"
```
🟢 **Yerleşim kaydı sessiz, ama KRONOLOJİ maddesi konuşuyor** — ve
bulunması gereken yer orasıydı:
```
t:      "1913-11-01"
b:      "Bozcaada ve İmroz'un geri alınışı — Atina Antlaşması"
gun:    "Kasım 1913"            ← 🔴 GÜN DEĞİL AY
kaynak: "bozcaada"
d:      "...Atina Antlaşması görüşmelerinde Çanakkale'nin savunması için
         vazgeçilmez sayıldı ve Osmanlı'ya iade edildi. Diğer adalar
         Yunanistan'da kaldı..."
```

### ④ Aynı günü kaç kayıt kullanıyor — yama mı, DESEN mi?
```
data/yerlesimler.js       4   ← Bozcaada + İmroz, her biri s:t ve d:f
data/olaylar_ek5.js       1   ← kronoloji maddesi
data/yer_yama.js          1   ← yalnız yer_id ataması
data/donemler.js          2   } ÜRETİLMİŞ
data/devletler_harita.js  2   }
```
⇒ **DESEN DEĞİL.** `1335-12-01`in 33 kayıtlık toplu yazımına benzemiyor;
tek bir olaya bağlı iki ada.

---

## 2. 🔴 `1913-11-01` BİR GÜN İDDİASI DEĞİL

Maddenin `gun:` alanı **"Kasım 1913"** diyor. Yani yazan kişi ayı
biliyordu, günü bilmiyordu ve `YYYY-MM-01` biçimini kullandı.

📌 Bu, `CLAUDE.md §4`ün zaten kayıtlı **üçüncü hassasiyet ekseni**:
> *"AY, AYIN 1'İNE KODLANMIŞ — 42 künye … kayıt YALAN SÖYLEMİYOR, iki
> ayrı şeyi AYNI BİÇİMDE yazıyor."*

Orada künyelerde ölçülmüştü; burada bir **kronoloji maddesinde**.
⇒ *"Veri 1913-11-01 diyor, TDV 1923 diyor, on yıl fark var"* diye okumak
**biçimi iddia sanmaktır.** Kayıt "1 Kasım" demiyor, "Kasım" diyor.

---

## 3. 🔴🔴 ASIL BULGU — ZİKREDİLEN KAYNAK İDDİAYI DESTEKLEMİYOR

### `kaynak:"bozcaada"` — canlı (200), doğru madde, ve İDDİAYI ÇÜRÜTÜYOR
TDV `bozcaada` gövdesi:
```
"Bozcaada 1912'de Rumlar'ın eline geçti"
"Sevr Antlaşması'nın 84. maddesiyle Yunanistan'a bırakıldı"
"nihayet 20 Eylül 1923'te kurtarıldı"
```
**1913 Atina Antlaşması'ndan ve herhangi bir 1913 iadesinden HİÇ söz
etmiyor.** Üstelik Sevr'in adayı *Yunanistan'a bıraktığını* söylüyor —
yani 1913'te Osmanlı'ya dönmüş bir ada anlatısıyla **ters**.

### 🟢 AMA `imroz` MADDESİ İDDİAYI DESTEKLİYOR — BAŞKA BİR ANTLAŞMAYLA
TDV `imroz` gövdesi (200, canlı):
```
"Balkan savaşları sırasında Yunanlılar tarafından işgal edilen İmroz (1912)"
"ertesi yıl yapılan LONDRA KONFERANSI'nda Osmanlılar'a bırakıldı"
"Nihayet Lozan Antlaşması ile … Türkiye Cumhuriyeti'ne aidiyeti kabul edildi"
```
⇒ 1913'te Osmanlı'ya iade **VAR**, ama enstrüman **Londra Konferansı**,
atlasın yazdığı **Atina Antlaşması** değil.

### ⇒ ÜÇ AYRI KUSUR, ÜÇÜ DE FARKLI CİNS
```
① YANLIŞ ADRES   İddiayı destekleyen madde `imroz`; kayıt `bozcaada`
                 zikrediyor — ve o madde iddiayı ÇÜRÜTÜYOR.
② YANLIŞ AD      Atlas "Atina Antlaşması" diyor, TDV "Londra Konferansı".
③ KAYNAK KENDİYLE ÇELİŞİYOR
                 `bozcaada` "Sevr Yunanistan'a bıraktı, 1923'te
                 kurtarıldı" · `imroz` "1913'te Osmanlılar'a bırakıldı".
                 Aynı ansiklopedi, aynı ada çifti, iki ayrı anlatı.
```
📌 ③, `§4`ün Tordesillas vakasının (1494 / 1498) aynı sınıfı: *kaynak
uyarı vermez, kendiyle çelişir — ve o zaman çelişkiyi BİLDİRMEK taraf
seçmekten değerlidir.*

---

## 4. KOORDİNATÖRÜN `de jure / de facto` ÇERÇEVESİ

Çerçeve **makul ve muhtemelen doğru**: bir yer *hukuken* Osmanlı'ya
bırakılıp *fiilen* Yunan işgalinde kalmış olabilir; atlas **tasarrufu**
boyar, dolayısıyla `d:` 1913'ten başlaması bu okumayla çelişir.

🔴 **AMA ÇERÇEVEYİ DOĞRULAYAMADIM.** Şubat 1914'te Büyük Devletler'in
İmroz ve Bozcaada'yı Osmanlı'da bıraktığı bilgisi **benim genel
bilgimdir, ölçmedim** — ne TDV'de aradım ne akademik kaynakta.
**DAMGA: ÖLÇMEDİM.** Bu satır bir dayanak olarak kullanılmamalı.

Ölçülen tek şey şu: **iki TDV maddesi 1913 iadesi konusunda birbirine
zıt**, ve atlasın zikrettiği madde iddiayı desteklemeyen taraf.

---

## 5. DAMGALAR

```
🟢 ÖLÇTÜM      gün en eski commit'le girdi (4e6f3c5 · 28 Tem 2026) ·
               desen DEĞİL (2 kayıt × 2 alan) · `gun:` alanı "Kasım 1913"
               (ay hassasiyeti) · kronoloji maddesi kaynak:"bozcaada" ·
               yerleşim kayıtlarında `kaynak:` YOK ·
               TDV bozcaada 200 → 1913 iadesinden HİÇ söz etmiyor,
               Sevr'i ve 20 Eylül 1923'ü veriyor ·
               TDV imroz 200 → "ertesi yıl LONDRA KONFERANSI'nda
               Osmanlılar'a bırakıldı"
🔴 BULUNAMADI  commit mesajında gerekçe/kaynak (arandı, yok)
               `atina-antlasmasi` slug'ı 302 — ÖLÜ
⚪ ÖLÇMEDİM    Şubat 1914 Büyük Devletler kararı — çerçevenin dayanağı,
               ARAMADIM (genel bilgi, kaynak değil)
⚪ ÖLÇMEDİM    Londra Konferansı'nın tam tarihi ve hangi oturumunun bu
               kararı verdiği
🔵 OKUMADIM    `imroz` ve `bozcaada` gövdelerinin TAMAMI — yalnız
               1912-1923 bandını sordum
```

---

## 6. NE İSTİYORUM — tek cümle

**Bu kalem bir "gün düzeltmesi" değil bir DAYANAK kalemi: önce
`kaynak:"bozcaada"` alanı düzeltilmeli (madde iddiayı desteklemiyor,
`imroz` destekliyor) ve maddenin adı "Atina Antlaşması"ndan TDV'nin
dediği "Londra Konferansı"na çekilmeli — `d:` gününe dokunmak ise ancak
`de jure/de facto` çerçevesi BİR KAYNAKLA doğrulandıktan sonra
tartışılabilir.**

⚠️ Ve öteki oturumun yazmayı reddetmesi **doğruydu**: tek bir TDV
cümlesiyle devrilecek bir kayıt değil — çünkü ikinci TDV cümlesi
tam tersini söylüyor.
