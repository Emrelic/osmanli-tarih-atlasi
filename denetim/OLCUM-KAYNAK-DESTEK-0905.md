# ÖLÇÜM — `kaynak:` alanının denetimsiz dalı: madde iddiayı destekliyor mu?

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2832` · **Tarih:** 5 Eylül 2026
> **Cins:** ÖLÇÜM — *veri yazılmadı, hiçbir dosya değiştirilmedi.*

---

## 0. 🔴 SINIRI ÖNCE YAZIYORUM

```
Bu bir ÖRNEKLEMDİR, tam tarama DEĞİL: 548 sluglık evrenden 25.
⇒ 25'lik bir örneklem KÜÇÜK BİR ORANI AYIRT EDEMEZ.
⇒ Aşağıdaki sayılardan bir ORAN hükmü çıkarılamaz; yalnız bir BANT
  ve — asıl değerli olan — KUSUR SINIFLARI çıkar.
⇒ "5 çıktı" demek "%20" demek DEĞİLDİR.
```
Ve ikinci bir sınır: **her slugun BÜTÜN iddiaları sınanmadı.** Çok
kayıtlı sluglarda (bahreyn 8 · bayezid-i 5 · aydinogullari 5) ilk dörde
bakıldı. Geri kalanlar **ÖLÇÜLMEDİ.**

---

## 1. EVREN — ve kurarken bir kusur çıktı

```
`kaynak:` taşıyan kayıt                1.279
benzersiz `kaynak:` değeri               596
   bunlardan SLUG biçimli                548
   DAMGA METNİ (slug değil)               48   ← sınava GİREMEZ
```
🔴 **İlk örneklemim kirliydi:** 25'in **4'ü slug değil**, damga metniydi
(*"bulunamadı — TDV bu antlaşmayı müstakil ele almıyor, dayanak: standart
akademik kaynak…"*). Bunlar zaten *"kaynak yok"* beyanıdır; destek
sınavına giremezler. Evreni `^[a-z0-9][a-z0-9-]*$` ile süzüp örneklemi
**yeniden çektim.**

📌 Ve bu, devralınan sayıyı da düzeltiyor: sevkte *"553 benzersiz slug"*
yazıyordu; ölçtüğüm **596 değer, bunun 548'i slug.** Fark bir hata değil
**tanım**: `kaynak:` alanı iki farklı şey taşıyor ve tek sayıyla
sayılamaz.

**Örneklem:** `random.Random(20260905)` · 548'den 25.

---

## 2. SONUÇ — üç kova

| kova | slug | iddia |
|---|---:|---:|
| 🟢 **DESTEKLİYOR** | 18 | 28 |
| 🔴 **DESTEKLEMİYOR** | 6 | 5 |
| ⚪ **ÖLÇÜLEMEDİ** | 1 | 1 |
| toplam sınanan | 25 | 34 |

*(Slug ile iddia sayısı ayrı: bir slug birden çok maddeye dayanak
olabiliyor ve **bazılarında bir iddia tutuyor, öteki tutmuyor.**)*

---

## 3. 🔴 İKİ AYRI KUSUR SINIFI — ve ikincisi yıl taramasından KAÇAR

### SINIF A — kaynak olayı HİÇ TARİHLEMİYOR (3)
Madde varlığı anlatıyor ama iddia edilen olayı **hiçbir tarihle**
bağlamıyor.
```
aydinogullari ← "1330 · Osmanlı-Aydın-Saruhan ittifakı"
   gövdede 1330 YOK. Aydın-Saruhan ortak hareketi VAR ama 1335, ve
   Bizans'la antlaşma anlatılıyor — iddia edilen ÜÇLÜ ittifak yok.
bahreyn ← "1417 · Bahreyn'in Cebrîler'in eline geçmesi"
   Cebrîler GEÇİYOR ama TARİHSİZ: "adanın sırasıyla Uyûnîler,
   Salgurlular, Tabîler, Cebrîler idaresinde kaldığı…" — 1417 YOK.
huseyniler ← "1705 · Tunus'ta Hüseynî hanedanının kurulması"
   1705 yalnız KAYNAKÇADA geçiyor (Chérif 1705-1740 gibi). Gövde
   1756'dan başlıyor; kuruluş cümlesi YOK.
```

### 🔴 SINIF B — kaynak DESTEKLİYOR ama BAŞKA AY veriyor (3)
**Bu sınıf bir yıl taramasından GEÇER.** Yıl tutuyor, olay doğru, kaynak
canlı ve doğru madde — **ay çelişiyor.**
```
konya ← iddia t:1832-11-21 · gun:"Kasım 1832"
   TDV: "Mısır kuvvetleri Konya'yı işgal etti (21 ARALIK 1832)"
   ⇒ gün aynı (21), AY FARKLI: Kasım ≠ Aralık

vehran ← iddia t:1792-02-12 · gun:"12 Şubat 1792"
   TDV: "12 EYLÜL 1792 tarihinde Muasker'deki Osmanlı idarecisi…"
   ⇒ gün aynı (12), AY FARKLI: Şubat ≠ Eylül
   ⚠️ Ve "boşaltılma/terkedilme" kelimeleri gövdede HİÇ yok.

ibrahim-pasa-kavalali ← iddia t:1825-02-24 · gun:"24 Şubat 1825"
   TDV: "Modon'da Mora'ya ayak bastı (MART 1825)"
   ⇒ AY FARKLI: Şubat ≠ Mart. TDV ayrıca GÜN vermiyor.
```
📌 **İkisinde de GÜN AYNI, AY FARKLI (21 ve 12).** Bu bir okuma hatası
deseni gibi duruyor — ama sebebini **ÖLÇMEDİM**, yalnız farkı ölçtüm.

### ⚪ ÖLÇÜLEMEDİ (1)
```
camurlu-savasi   HTTP 302 — ÖLÜ SLUG
   Gövde 4.215 karakter ve içeriği "FETRET DEVRİ" maddesi:
   yani arama/yönlendirme sayfası. 1413 orada geçiyor ama BAŞKA
   MADDEDE — `dahomey` vakasının aynısı.
🔴 Ve bu, boyut eşiğimin sınırını gösterdi: 3.000 karakter eşiği bunu
  "gövde geldi" saydı. Eşik tek başına yetmiyor; İÇERİĞE bakmak gerekti.
```

---

## 4. 🟢 DESTEKLEYENLER — ve bazıları GÜNÜ BİREBİR veriyor

18 slug / 28 iddia. En temizleri (TDV günü **birebir** veriyor):
```
dolmabahce-sarayi   "7 Haziran 1856 tarihinde açılmıştır"        ✓ t:1856-06-07
dulkadirogullari    "Alâüddevle yenildi ve öldürüldü (13 Haziran 1515)" ✓
galatasaray-...     "Mekteb-i Sultânî 1 Eylül 1868'de törenle öğretime başladı" ✓
islahat-fermani     "11 Cemâziyelâhir 1272 (18 Şubat 1856) … okundu" ✓
mehmed-aga-sedefkar "8 Cemâziyelâhir 1015 (11 Ekim 1606) … tayin edildi" ✓
ragib-pasa          "8 Cemâziyelâhir 1170 / 28 Şubat 1757"        ✓
tehcir              "13 Receb 1333/27 Mayıs 1915"                 ✓
vehran (2. iddia)   "4 Ocak 1831'de Fransızlar tarafından işgal"  ✓
ayastefanos         "31 Ocak 1878 … Edirne Mütarekesi" + "3 Mart 1878" ✓✓
lozan-antlasmasi    "24 Temmuz 1923'te sona erdi"                 ✓
```
⚠️ Bir küçük iç tutarsızlık: `mahmud-ii--osmanli` iddiası `t:1808-07-29`
ama kendi `gun:` alanı **"28 Temmuz 1808"** diyor ve TDV de 28'i veriyor.
Kaynak destekliyor; **`t:` ile `gun:` bir gün ayrışıyor.** Ayrı ve küçük
bir kalem.

---

## 5. DAMGALAR

```
🟢 ÖLÇTÜM      25 slug · 34 iddia · 18 slug/28 iddia destekleniyor ·
               6 slug/5 iddia desteklenmiyor · 1 ölçülemedi ·
               evren 596 değer = 548 slug + 48 damga metni
🔴 BULUNAMADI  aydinogullari'nda 1330 · bahreyn'de 1417 · huseyniler'de
               1705 kuruluş cümlesi — ARANDI (yıl + anahtar kelime), YOK
⚪ ÖLÇÜLEMEDİ  camurlu-savasi (302, yönlendirme kütüğü)
⚪ ÖLÇMEDİM    çok kayıtlı slugların 4'ten sonraki iddiaları
               (bahreyn 8 · bayezid-i 5 · aydinogullari 5 kayıt taşıyor)
⚪ ÖLÇMEDİM    "gün aynı, ay farklı" deseninin SEBEBİ (iki vakada da
               21 ve 12 korunmuş — okuma hatası mı, başka kaynak mı?)
🔵 OKUMADIM    hiçbir gövdenin TAMAMI — yıl ve anahtar kelime çevresi
```

---

## 6. NE İSTİYORUM — tek cümle

**Bulduğum ikinci sınıf (`kaynak: canlı + doğru madde + YIL doğru + AY
YANLIŞ`) bir yıl taramasından geçtiği için hiçbir mevcut denetim onu
göremez; bu üç kayıt (`konya` · `vehran` · `ibrahim-pasa-kavalali`) ayrı
bir düzeltme kalemi olarak kuyruğa alınsın — ama oran hükmü için
örneklem 25'ten büyük olmalı.**
