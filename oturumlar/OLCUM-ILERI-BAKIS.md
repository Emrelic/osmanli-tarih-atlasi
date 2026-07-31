# ÖLÇÜM — gelecek olayın şehirlerini önceden göstermek

**Ölçen:** ARAYÜZ (A) · **31 Temmuz 2026** · **Uygulama YOK** — yeni özellik,
dört sınav kapanmadan yazılmaz

> Kullanıcı: *"Bir iki madde sonra gerçekleşecek tarihî olaydan önce, o olayda
> geçecek olan şehirleri haritada görünür kılmalıyız."*
> Bugün `anilan` mekanizması **o anki** maddede geçen yerleşimleri görünür
> kılıyor; istenen bunun **ileriye** uzatılması.

---

## 1. MADDE BAŞINA KAÇ YERLEŞİM ANILIYOR

`app.js`'in kendi eşleştirme ölçütüyle (`ad.split(" (")[0]`, ≥4 harf, `yer:`+`b`):

```
min 0 · %25 1 · medyan 1 · %75 2 · %90 3 · azami 11 · ortalama 1,34
hiç yerleşim anmayan madde: 108
```

**İki madde ileri bakmanın ekrana eklediği işaret:**
```
medyan 2 · %90 4 · azami 13
```
⇒ Maliyet **sınırlı**. En kötü hâlde 13 ek işaret; bugün z6'da 108 aday
işaretten 97'si tutuluyordu, yani bu mertebe dengeyi devirmez.

---

## 2. 🔴 SABİT SAYI mı SABİT SÜRE mi — ÖLÇÜM KESİN

Kullanıcı *"bir iki madde"* dedi. İki aday kural var ve **çok farklı
davranıyorlar**:

### (a) Sabit sayı — "2 madde ileri"
```
kapsadığı süre: medyan 308 gün · %90 1.074 · azami 5.327 (14,6 yıl)

yüzyıla göre medyan:
  1200'ler 7,0 yıl   1500'ler 0,8 yıl   1800'ler 0,5 yıl
  1300'ler 1,3 yıl   1600'ler 1,2 yıl   1900'ler 0,3 yıl
  1400'ler 1,0 yıl   1700'ler 1,1 yıl
```
⚠️ Zaman ufku **23 kat** oynuyor (7,0 yıl ↔ 0,3 yıl).

### (b) Sabit süre — "1 yıl ileri"
```
kapsadığı madde: medyan 2 · %90 7 · AZAMİ 24
```
🔴 24 madde × 1,34 yerleşim ≈ **32 ek işaret.** Ekranı basar ve bugün
sıfırladığımız çakışmayı geri açar.

### Karar: **SABİT SAYI**

| | sabit sayı (2 madde) | sabit süre (1 yıl) |
|---|---|---|
| ek işaret | **azami 13** | **azami ~32** |
| zaman ufku | 0,3 – 7,0 yıl (23×) | sabit |

⇒ Sabit sayı **görsel maliyeti** sınırlıyor, sabit süre **zaman ufkunu**.
Bozulan denge görsel tarafta olduğu için sabit sayı kazanıyor.

📌 Ve zaman ufkunun oynaması burada **kusur değil**: kullanıcı gün değil
**madde** okuyor. *"Sıradaki iki madde"* onun listede kaydırdığı şeyin ta
kendisi; 1200'lerde o iki madde 7 yıla yayılıyorsa, orada zaten 7 yılda iki
olay olmuş demektir.

---

## 3. ÇAKIŞMAYA ETKİSİ — ölçülemedi, ama sınırlandı

Bugün z4/z5/z6'da çakışan çift **sıfıra** indirildi. Ek işaretler bunu bozar mı,
**tarayıcı olmadan ölçülemez** (panel gizli).

Ölçülebilen: eklenen işaret sayısı **azami 13**, medyan 2. Ve bu işaretler
`anilan` sınıfına girecekse **elemeye dahil olacaklar** (bugünkü düzeltme:
anılanlar muaf değil, öncelikli). Yani kalabalık yaparlarsa **kendileri
elenirler**, mevcut işaretleri itmezler.
⇒ Risk yapısal olarak sınırlı, ama **sınav şart**: z4/z5/z6'da `CAKISAN` yine 0 mu?

---

## 4. TASARIM — gelecek şehri AYIRT EDİLEBİLMELİ

🔴 Gelecek olayın şehri, olmuş olayın şehrinden ayrılmazsa kullanıcı *"bu şehir
şimdi mi el değiştirdi"* diye okur ve **yanlış okur**.

**Öneri:** aynı işaret, **soluk** (opaklık ~%55) + **kesikli** nokta çerçevesi.
- Punto küçültmek **yanlış olur**: punto zaten önem derecesini anlatıyor
  (`d1/d2/d3`), ikinci bir anlam yüklenirse ikisi de okunmaz olur.
- Renk değiştirmek **yanlış olur**: renk devlet sahipliğini anlatıyor.
- ⇒ Serbest kalan tek eksen **opaklık + kenar deseni**.

⚠️ **Lejantta karşılığı olacak.** Bugün sönen kenar tam bunu yapmadığı için
kullanıcı *"iki ayrı kırmızı"* diye kusur bildirdi — görünen her yeni şey
lejanta girmezse kusur diye rapor ediliyor.

---

## 5. 🔄 KULLANICI KARARI: SABİT SÜRE (365 gün) — ve tavan ölçüldü

Önerim sabit sayıydı; kullanıcı **sabit süre** seçti. Gerekçesi benimkinden
güçlü çıktı, özellikle ikinci çapa: `sonrakiOlayaKadar` zaten **tavan 365 gün**
kullanıyor (maddenin geriye dönük etki penceresi). İleri pencereyi aynı sayıya
eşitlemek **yeni bir sabit doğurmuyor** — tek sayı, iki yön (`§35`).

### 365 günlük ileri pencerenin gerçek maliyeti

```
kapsanan MADDE : medyan 2 · %90  7 · %99 20 · azami 24
EK İŞARET      : medyan 2 · %90  7 · %99 20 · azami 23

10+ ek işaret çıkan an :  54 / 994  (%5,4)
15+ ek işaret çıkan an :  21 / 994  (%2,1)
en kalabalık: 1912-03-13 (23) · 1911 sonbaharı (22×3) · 1516-06-05 (21)
```

⚠️ İlk ölçümümdeki *"azami 32 işaret"* tahmini **fazla kötümserdi**: madde
başına 1,34 yerleşimi çarpmıştım, ama aynı madde grubunda **aynı şehir tekrar
ediyor** (Trablusgarp savaşı boyunca aynı limanlar). Gerçek azami **23**.
📌 Kendi tahminimi ölçüm düzeltti — çarpım değil **birleşim** gerekiyormuş.

### Tavan gerekiyor mu — HAYIR, ve sebebi daha iyi bir sınır var

Tavan seçenekleri ölçüldü:
```
tavan 2 madde → azami 13    tavan 3 → azami 14    tavan 5 → azami 17
tavan YOK     → azami 23
```
Tavan medyanı hiç değiştirmiyor (2), yalnız en kötü %1'i kırpıyor.

> **Öneri: sabit tavan KOYMA.** Çakışma elemesi zaten ekran farkında bir sınır
> ve sabit sayıdan iyi: 20 işaret **sığıyorsa** göstermek doğru, **sığmıyorsa**
> zaten eleniyor. Sabit tavan ekranı bilmez, eleme bilir.

🔴 **Bunun tek şartı öncelik sırası:** gelecek işaretler öncelik listesinin
**SONUNA** konmalı. O zaman kalabalıkta **önce onlar** elenir — yani bugünkü
görünümü asla bozmazlar, yalnız boş yer varken belirirler. Bu, sabit tavanın
yapmaya çalıştığı şeyi **ekran ölçüsünde** yapıyor.

📌 Ve bu ayrım bugün üçüncü kez çıkıyor: **sürücü kural + sigorta** (eşik +
çakışma · pencere + eleme). Sürücü anlamı taşır, sigorta sınırı tutar.

⏳ Sınav şartı değişmedi: z4/z5/z6'da `CAKISAN` yine **0** olmalı. Yoğun anlar
(1911-1912) sınavda özellikle bakılmalı — kusur oradaysa orada görünür.

---

## 6. ✅ NİHAİ KARAR — 365 GÜN, ve karar iki kez döndü

⚠️ **Kayıt açıkça yazılıyor, çünkü karar bir turda iki kez değişti** ve ileride
biri geçmişe bakarsa hangisinin geçerli olduğunu bilmeli.

| sıra | karar | dayanağı | durumu |
|---|---|---|---|
| 1 | sabit **süre** 365 gün | kullanıcı; üç çapa (2 sn görünürlük · `sure` simetrisi · "bir iki madde") | ✅ **GEÇERLİ** |
| 2 | sabit **sayı** 2 madde | ARAYÜZ ölçümü: *"365 gün 32 işaret basar"* | ❌ geri alındı |
| 3 | sabit **süre** 365 gün | o 32 sayısı **yanlıştı** — çarpım, birleşim değil | ✅ **NİHAİ** |

### Neden döndü — ve neden bir daha dönmemeli

Kararı iki kez oynatan şey **benim hatalı sayımdı.** *"1 yıl → azami ~32
işaret"* demiştim: madde başına 1,34 yerleşimi **çarpmıştım.** Ama aynı madde
grubunda **aynı şehir tekrar ediyor** (Trablusgarp boyunca aynı limanlar).
**Çarpım değil birleşim gerekiyordu.** Gerçek:

```
365 günlük ileri pencere:  medyan 2 · %90 7 · %99 20 · AZAMİ 23 ek işaret
10+ işaret çıkan an: %5,4 · 15+ : %2,1
```

⇒ Sabit sayıyı savunan tek somut argüman (ekranı basar) **yoktu.** Onu
düzeltince kullanıcının ilk kararı kendiliğinden geri geldi.

📌 Ve 365'in ikinci gerekçesi hiç sarsılmadı: `sonrakiOlayaKadar` **zaten
tavan 365** kullanıyor. Yeni sabit doğmuyor — **tek sayı, iki yön** (`§35`).

### Uygulama sözleşmesi — bunlar birlikte geçerli

```
pencere    365 gün ileri
tavan      YOK
sıralama   gelecek işaretler öncelik listesinin EN SONUNDA
görünüm    aynı işaret · opaklık ~%55 · kesikli çerçeve
lejant     ZORUNLU
süzgeç     gizlenmiş maddenin şehirleri gösterilmez (panel kuralıyla aynı)
```

🔴 **Tavansızlık, sıralama şartına BAĞLI.** Gelecek işaretler listenin sonunda
olduğu için kalabalıkta **önce onlar** elenir; bugünkü görünümü asla bozmazlar,
yalnız boş yer varken belirirler. Biri sıralamayı değiştirirse **tavansızlık
geçersiz olur** — ikisi tek karardır, ayrı ayrı değiştirilemez.

### Geri dönüş şartı — koordinatörün notu, korunuyor

İleride *"tarama modunda önizleme çok kısa"* şikâyeti gelirse çözüm **sabit
sayıya dönmek değil**: **asgarî süre tabanı** eklenir (365 gün, ama en az N gün
ekranda kalsın). Sürücü pencere kalır, taban yalnız sigorta olur.

### Sınav — iki uçlu (`§42`)

```
kesitler : 1912-03-13 (23 işaret) · 1516-06-05 (21) · z4/z5/z6
ölçüt 1  : CAKISAN = 0
ölçüt 2  : gelecek işaretlerin BİR KISMI ELENMİŞ olmalı
```
⚠️ İkincisi kritik: *"hepsi göründü"* de bir **kusur işaretidir** — öncelik
sırası çalışmıyor demektir.
