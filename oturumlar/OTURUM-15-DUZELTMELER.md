# Oturum 15 — `data/yerlesimler.js` düzeltme önerisi (yazma yetkim yok)

KOORDINASYON.md §1'in kuralı gereği (`yerlesimler.js` — tek çekişmeli dosya,
yalnız entegrasyon oturumu toplu uygular): bu iki değişikliği BEN YAZMADIM,
öneri olarak bırakıyorum. Karar merkezin ("Kararım:" mesajı), ben yalnız
canlı veriyi doğrulayıp mekanik karşılığını çıkardım.

---

## 1. Yeni Ürgenç — `kasitli_bosluk:true` kaldırılsın, s: zinciri genişlesin

**Gerekçe (merkezin kararı):** 1646 bir taşınma, iki ayrı şehir değil.
Köhne Ürgenç (Gürgenç) `bit:"1646-01-01"` ile terk ediliyor, Yeni Ürgenç
`kur:"1646-01-01"` ile aynı anda kuruluyor — aynı vahanın aynı toprağı.
Nitekim mevcut veride 1646'nın HER İKİ tarafında da egemen zaten `hive`
(devir sırasında hanedan değişmiyor) — yani Köhne Ürgenç'in tam s: zincirini
Yeni Ürgenç'e aynen taşımak yeni bir tarihî iddia ÜRETMİYOR, var olan
kaydı aynalıyor.

**Şimdiki (canlı `yerlesimler.js`):**
```js
{ ad:"Yeni Ürgenç", ... kur:"1646-01-01", kasitli_bosluk:true,
  s:[{f:"1646-01-01",t:"1740-01-01",d:"hive"},
     {f:"1740-01-01",t:"1747-06-20",d:"iran"},
     {f:"1747-06-20",t:"1920-04-26",d:"hive"},
     {f:"1920-04-26",t:"1923-10-29",d:"rusya"}] }
```

**Önerilen:**
```js
{ ad:"Yeni Ürgenç", ... kur:"1646-01-01",
  // 1646 öncesi: Köhne Ürgenç'in (Gürgenç) aynen taşınmış zinciri.
  // Amuderya yatak değiştirince şehir taşındı, egemen değişmedi (bkz.
  // TDV GÜRGENÇ: 1645 sonrası Yeni Ürgenç); kasitli_bosluk KALDIRILDI,
  // çünkü toprak boş değildi — Köhne Ürgenç'in peteği zaten taşıyordu.
  s:[{f:"1281-01-01",t:"1379-01-01",d:"altinorda"},
     {f:"1379-01-01",t:"1502-01-01",d:"timurlu"},
     {f:"1502-01-01",t:"1512-01-01",d:"buhara"},
     {f:"1512-01-01",t:"1740-01-01",d:"hive"},
     {f:"1740-01-01",t:"1747-06-20",d:"iran"},
     {f:"1747-06-20",t:"1920-04-26",d:"hive"},
     {f:"1920-04-26",t:"1923-10-29",d:"rusya"}] }
```
(Köhne Ürgenç'in `s:`'i ile birebir aynı — doğrulandı, `node -e` ile
canlı veriden okundu.)

## 2. Krasnovodsk — DOKUNMA, tasarım zaten doğru

Kontrol edildi: komşu **Garabogaz (Bekdaş)** kaydının `turkmen` dönemi
tam **1869-01-01**'de bitiyor, Krasnovodsk'un `rusya` dönemi tam
**1869-01-01**'de başlıyor — dikişsiz devir, boşluk yok:
```
Garabogaz (Bekdaş):  ... {f:"1600-01-01", t:"1869-01-01", d:"turkmen"}
Krasnovodsk:               {f:"1869-01-01", t:"1923-10-29", d:"rusya"}
```
Mangışlak'ın `turkmen` dönemi de (1600-1881) o kıyı şeridini ayrıca
kaplıyor. 1869 öncesi Krasnovodsk'un peteğini komşular zaten taşıyor —
merkezin sorduğu "taşımıyorsa söyle" durumu **yok**, değişiklik gerekmiyor.

---

## 4. KIRIM HANLIĞI / DEŞT-İ KIPÇAK — TDV taraması (WebFetch, `<title>` ile sınandı)

Merkezin isteği üzerine TDV'yi bizzat açtım; aşağıdakiler gerçekten okunmuş
maddelerden. `kirim-hanligi` ve `altin-orda` slug'ları ÖLÜ (arama sayfasına
yönlendi) — doğru slug'lar bulundu ve doğrulandı.

### 4.1 ✅ SAĞLAM KAYNAK — Bozkır (Deşt-i Kıpçak) 1441-1502: `kirim` → `altinorda`

`altin-orda-hanligi` (canlı, gerçek madde): **"1241-1502 yılları arasında
Deştikıpçak'ta hüküm süren bir Türk-Moğol devleti."** Son hükümdar Şeyh Ahmed
Han (1481-1502) "dirayetsiz" olduğu için devlet çöktü; yıkılışın ardından
"daha önce kurulan Kırım, Kazan ve Nogay hanlıklarından başka Astarhan ve
Sibir hanlıkları da ortaya çıktı" — yani **Kırım Hanlığı Altın Orda'dan ÖNCE
zaten ayrı bir devletti**, Deşt-i Kıpçak'ın merkezî bozkırı ise **1502'ye
kadar hâlâ Altın Orda'nındı.**

**Öneri:** `Bozkır (Deşt-i Kıpçak)` kaydının 1441→1502 dilimi `d:"kirim"`
yerine `d:"altinorda"` olmalı (nitekim dosyada `altinorda` zaten 1281'den
beri kullanılıyor olmalı — kontrol edilsin, önceki dilimle birleşebilir).
1502 sonrası `kirim` kalabilir; bu kısmı DOĞRULAYAMADIM (TDV, 1502 sonrası
o spesifik bozkır şeridinin kime geçtiğini açıkça yazmıyor — Nogay mı Kırım
mı belirsiz, coğrafi olarak ikisi de mümkün). **1502 sonrası için kaynak
yok, dokunmadım, mevcut `kirim` bırakıldı** ama bu bir onay değil.

### 4.2 ✅ SAĞLAM KAYNAK — Çerkez sahili: `nominal_tabiiyet` + tarih düzeltmesi

`cerkezler` (canlı madde): iki ayrı, kesin tarihli olay var:
- **1480:** "Fâtih Sultan Mehmed'e elçi göndererek savaşlarda atlı asker
  verme karşılığında Osmanlı himayesine giren Çerkezler" — doğrudan Osmanlı
  himayesi, Kırım değil.
- **1484:** "II. Bayezid tarafından Kırım hanının hizmetine verildiler."
  "**XVIII. yüzyıla kadar hukuken Kırım Hanlığı'na tâbi, gerçekte ise
  serbest yaşayan Çerkezler** tahta çıkan her hana 300 köle vermek, yılda
  köle hediye etmek ve seferlere asker göndermekle mükellefti."

Bu **birebir `nominal_tabiiyet:true`'nun tanımı** — hukuken tâbi, fiilen
serbest.

**Öneri:** Soçi, Tuapse, Maykop, Kabartay kayıtlarının `s:"kirim"` dilimi
şu an **1281'den** başlıyor — TDV'ye göre bu 203 yıl erken (Kırım'ın kendisi
1441'den önce yok, Çerkez tâbiiyeti 1484'ten önce yok). Önerilen: bu dört
kayıtta 1484-01-01'den itibaren `d:"kirim", nominal_tabiiyet:true` (üst
sınır TDV "XVIII. yüzyıla kadar" diyor, kesin yıl vermiyor — mevcut kayıtların
bitiş tarihleri, örn. 1774/1829, o yüzyıl içinde kaldığı için makul, kesin
kaynak değil). **1281-1484 arası için kaynak yok** — o dönem Çerkezlerin
siyasi statüsü TDV'de bu maddede yazmıyor, başka bir madde gerekebilir;
dokunmadım.

**Anapa ve Kuban (Yekaterinodar) için AYNI mantığı UYGULAMADIM** —
ikisi de coğrafi olarak Çerkez/Kuban bölgesinde ama TDV'de bu iki nokta
için özel bir cümle bulamadım (ÇERKEZLER maddesi genel coğrafyayı
"Kafkaslar" olarak veriyor, bu iki nokta için ayrıştırıcı bilgi yok).
**Kaynak yok, dokunmadım.**

### 4.3 ⏸️ ARAŞTIRILMADI — kapsam dışında kaldı

- **Voronej/Harkov (Yabani Ova mı Kırım mı):** TDV'de aradım, doğrudan
  madde bulamadım (bu daha çok Rusya/Ukrayna tarihi kapsamı — CLAUDE.md §4
  "TDV'nin kapsamadığı coğrafyalar için standart akademik referans yeterli"
  diyor ama elimde doğrulanmış bir standart kaynak yok). **Araştırmadım,
  kaynak yok, dokunmadım.**
- **Nogay ulusları (Yedisan · Cedişkul · Bucak) yeni kayıt:** konum ve
  tarih araştırması gerektiriyor, bu turda YAPMADIM — kapsam çok büyüdü.
- **12 kayda toplu `v:"Kırım Hanlığı"` (1475-06-06 → 1774-07-21):** bu iki
  tarihi kendim TDV'den DOĞRULAMADIM — Bahçesaray'ın mevcut kaydında zaten
  kullanılıyor (başka bir oturum tarafından, muhtemelen `kefe`/`mengli-giray`
  maddesinden). Hacı Giray I maddesini okudum, o 1466'da öldüğü için 1475
  olayını (Kefe'nin fethi) kapsamıyor. **Bu iki tarihi bağımsız
  doğrulamadım** — Bahçesaray'daki mevcut kullanıma güvenerek Özi ve
  Hacıbey (Odessa) için aynı v: dilimini önermek İSTİYORDUM ama TDV'den
  taze doğrulama olmadan yazmıyorum. Rostov ve Kuban için coğrafi/siyasi
  emin değilim (Azak çevresi Osmanlı doğrudan idaresi ile de çakışabilir,
  ayrı bir soru). **Bu dört kayda dokunmadım.**

## 3. `kazak` / `kazak-hanligi` — durum

İsim kararı: **`kazak-hanligi`** (merkezin kararı, sabit). Rengin
`renkler.py`'ye eklendiği bildirildi ama ölçümde `kazak` (kısa hâl, 3
kayıt) hâlâ renksiz çıktı — bu TUTARLI, çünkü benim dosyamda hâlâ kısa
`d:"kazak"` yazıyor, `kazak-hanligi` değil. Üç satırlık rename (Aral
kuzeyi · Üstyurt kuzeyi · Emba (Cem)) hazır, yalnız "motor serbest"
sinyalini bekliyorum (önceki kilit talimatı gereği).
