# R1 SINAVININ TABANI — 🟢 **BİREBİR YENİDEN ÜRETİLDİ**

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2995 · 5 Eylül 2026, 16:05
> Koşu 5b CANLI · `data/*.js` DONUK · hiçbir dosya yazılmadı
> (çıktı scratchpad'e alındı)

## ⇒ SONUÇ: 🟢 TABAN SAĞLAM — dört sayının dördü de tuttu
```
                    TESPIH.md (4 Eylül)     BUGÜN (5 Eylül 16:05)
gövde                     232                    **232**   ✓
DİKİŞ            640 parça / 34.318 km²   **640 / 34318**  ✓
KIYI KENARI           42.233                  **42233**    ✓
KAPSAMA                  357                    **357**    ✓
```
⇒ **Bayat değil.** 18:50'de tek değişken YENİ GEOMETRİ olacak.

## ① ÖNCE GİRDİ PROVENANSI — ölçümden ÖNCE, ve sebebi var
Bir sayı farkı çıksaydı iki açıklaması olurdu: **girdi kaydı** ya da
**alet**. İkincisini ölçebilmek için önce birincisini elemek gerekiyordu:
```
data/donemler.js            4 Eyl 16:56   DEĞİŞMEMİŞ
data/devletler_harita.js    4 Eyl 16:56   DEĞİŞMEMİŞ
js/app.js                   5 Eyl 04:56   🔴 DEĞİŞMİŞ
   → ama alet ondan yalnız `parcaCoz`u çekiyor, ve o fonksiyon
     son **29 Temmuz**'da değişmiş (`git log -S`). 5 Eylül commit'i
     (`1078060`, nehir katmanı) `parcaCoz`a **hiç dokunmuyor**
     (diff'te 0 geçiş).
```
🟢 ⇒ Girdi kayması **elendi.** Sayı tuttuğu için bu bir teyit; tutmasa
bir teşhis olacaktı.

## ② ALET NE OKUYOR — ve koşu ikisini de YENİDEN YAZACAK
```
node ARAC-DIKIS-0904-govde.js
   data/donemler.js            🔴 koşu YENİDEN YAZAR
   data/devletler_harita.js    🔴 koşu YENİDEN YAZAR
   js/app.js → `parcaCoz`      🟢 koşudan etkilenmez
py ARAC-DIKIS-0904-olc.py
   <govde.geojson>             ← yukarıdakinin çıktısı
   veri-kaynak/motor_kara.geojson  🔴 koşu YENİDEN YAZAR (`uret_petek:2776`)
```
⚠️ ⇒ Koşu sonrası ölçüm **üç girdinin üçünü de** yenilenmiş bulacak.
Kıyasın anlamlı olması için tam da bu isteniyor — ama *"aynı alet, aynı
gün"* demek **aynı girdi** demek değil; kıyas **geometrinin** kıyası.

## ③ SÜRE — 18:50 için bir çizelge bilgisi
```
gövde çıkarma (node)   15:57:02 → 15:57:0x   ~saniyeler
dikiş ölçümü (py)      15:57:16 → 16:05:07   **7 dk 51 sn**
```
⚠️ Ve bu **üretim tam bir çekirdek kullanırken** ölçüldü. Koşu bitince
CPU serbest kalacağı için muhtemelen daha kısa sürer, ama **8 dakika**
diye planlanması güvenli.
🔴 Koordinatörün ④ şartı uygulandı: alet uzun sürmedi, durdurmaya gerek
kalmadı. İkinci bir uzun koşu **başlatılmadı.**

## ④ 🔴 İKİ TABAN VAR VE KARIŞTIRILMAMALI
```
 96 parça / 9.046 km²   ALETİN KENDİ BAŞLIĞINDA — reçetenin sayısı,
                        **2731 petekli yayından** (koşu 4b ÖNCESİ)
640 parça / 34.318 km²  TESPIH.md — **3805 petekli bugünkü taban**
```
🟢 `TESPIH.md` bunu zaten uyarmış (*"AYNI TABAN DEĞİL. Kıyas ŞU 640 ile
yapılacak"*) ve alet de kendi çıktısında uyarıyor. **Kıyas 640 ile.**
📌 Reçetenin *"R1'den sonra < 10 parça"* hedefi **96'lık tabana** aitti;
640'lık tabanda o eşiğin karşılığı **ölçülmemiş.** Yani koşu sonrası
sayı 10'un üstünde çıkarsa bu tek başına *"R1 çalışmadı"* demek DEĞİL —
eşik yeniden türetilmeli.

## ⑤ 🟡 VE BİR ORAN — R1'in ölçtüğü şey küçük
```
boşluk toplamı     53.783.178 km²
   KAPSAMA         53.415.578 km²   (%99,3)  → VERİ işi, nokta yok
   KIYI KENARI        333.282 km²   (%0,62)  → görünmez artefakt
   DİKİŞ               34.318 km²   (**%0,064**) → R1'in konusu
```
⇒ R1 sınavı toplam boşluğun **onbinde altısını** ölçüyor. Bu bir kusur
değil (üç aile ayrı ayrı raporlanıyor, tam da karışmasınlar diye) ama
*"R1 geçti"* demek *"boşluk çözüldü"* demek **değildir.**
📌 Aletin kendi başlığı bunu zaten yazıyor: *"tek satırda raporlanırsa
aynı çare uygulanır ve «boşluk çözüldü» sanılır — o yüzden AYRI."*

## ⑥ NE ÖLÇMEDİM
```
🔴 640'lık tabanda R1'in kabul eşiğinin ne olması gerektiğini —
   reçetenin «< 10»u 96'lık tabandan; oran alınabilir mi, ÖLÇMEDİM
🔴 KAPSAMA'nın 357 parçasının nerede olduğunu (`--ayrinti` koşmadım —
   CPU'yu ikinci kez meşgul etmemek için)
⚪ Koşu sonrası ölçümü — koşu CANLI, yapılamaz
```

---
---

# EK — 640'LIK TABANDA EŞİK NE OLMALI (M-2999)

## ⇒ HÜKÜM: **REÇETENİN «< 10»U TAŞINAMAZ** — ve sebebi üç değil **DÖRT**
Koordinatörün üçüncü ihtimali doğru çıktı, ama gerekçesi düşündüğünden
geniş. Reçeteyi (`denetim/BULGU-GEOMETRI-0904.md`) okudum:

```
REÇETE (R13, satır 626 · ölçüm satır 586-598)
   "Avrupa kutusu (-10..40D · 35..70K), 1281-01-01, `ne_10m_land` tabanlı"
   "5 km² altı sayılmadı — **9.472 parça, piksel gürültüsü**"
   ① DİKİŞ        **95** parça ·  15.526 km²   → R1'den sonra < 10
   ② KENAR/KIYI  2.159 parça ·  85.765 km²
   ③ KAPSAMA        19 parça · 127.232 km²

BUGÜN (aynı alet, aynı gün)
   GLOBAL · `motor_kara.geojson` tabanlı · **alan tabanı YOK**
   DİKİŞ         **640** ·     34.318 km²
   KIYI KENARI **42.233** ·    333.282 km²
   KAPSAMA         357 · 53.415.578 km²
```

### DÖRT FARK, ve dördü de ölçüldü
```
① KAPSAM   Avrupa kutusu (-10..40°D · 35..70°K)   ↔  GLOBAL
② ZEMİN    `ne_10m_land`                          ↔  `motor_kara.geojson`
           🔴 R15 bunu BİLEREK değiştirdi ("ham maske kullanılırsa GÖL
             KIYILARI dikiş sayılır — en büyük dikiş Sivaş lagünüydü")
③ PETEK    2731                                   ↔  3805
④ 🔴 ALAN TABANI  reçete **<5 km²'yi ELEDİ** (9.472 parça)
           alet **ELEMİYOR** — `olc.py:144` tek süzgeci `if a <= 0`
```

### 🔴 ④'ÜN KANITI SAYIDA — ve nicelik olarak ölçülebilir
```
KIYI KENARI   reçete  2.159 parça  ↔  alet **42.233**   = 20 KAT
DİKİŞ         reçete     95 parça  ↔  alet **640**      = 6,7 kat
DİKİŞ km²     reçete 15.526 km²    ↔  alet 34.318 km²   = **2,2 kat**
```
⇒ **Parça sayısı 6,7 kat, ama ALAN yalnız 2,2 kat.** Ortalama parça
büyüklüğü **163 km² → 54 km²**, yani üçte bire düşmüş.
🟢 Bu tam olarak *"küçük parçalar elenmemiş"* imzasıdır — kapsam
büyümesi alanı da orantılı büyütürdü, sayıyı bu kadar öne geçirmezdi.

## ⇒ ÜÇ İHTİMALİN CEVABI
```
🔴 ORAN  640 × (10/95) ≈ 67   → GEÇERSİZ. Oran, iki tabanın aynı şeyi
                                saymasını gerektirir; dördü de farklı.
🔴 MUTLAK «< 10»             → GEÇERSİZ ve muhtemelen ULAŞILAMAZ:
                                yalnız ④ (alan tabanı) bile sayıyı
                                büyütüyor, R1 mükemmel çalışsa dahi
                                <5 km² gürültü parçaları kalır.
🟢 ÜÇÜNCÜ                    → **DOĞRU.** Eşik ancak YENİ tabandan
                                türetilir, ve alet bunu kendi çıktısında
                                zaten söylüyor: *"Bu koşu bittikten sonra
                                aynı aletle yeniden ölçülecek; ASIL kıyas
                                O olacak."*
```

## 🟢 VE BİR ÖNERİ — ölçüt PARÇA değil **km²** olsun
Yukarıdaki ③ bunu doğrudan veriyor: **alan iki ölçüm arasında
kararlı (2,2×), sayı değil (6,7×).** Sebebi yapısal — parça sayısı
alan tabanına ve sadeleştirme gürültüsüne duyarlı, toplam alan değil.
```
ÖNERİLEN KABUL ÖLÇÜTÜ   DİKİŞ **km²**'si, 34.318'den ne kadar düştü
   🟢 aynı alet · aynı zemin · aynı kapsam ⇒ tek değişken GEOMETRİ
   🟢 <5 km² gürültüsüne DUYARSIZ (34.318'in içinde payı küçük)
   🔴 parça SAYISI yine raporlansın ama EŞİK OLMASIN — bilgi, ölçüt değil
```
⚠️ **Ve hedef sayıyı ÖNERMİYORUM** — *"%X düşsün"* demek için R1'in
dikiş alanını ne kadar kapatacağını bilmem gerekir ve **bilmiyorum.**
Bu bir koordinatör/Emre kararı.

## ⑦ NE ÖLÇEMEDİM
```
🔴 Bugünkü 640'ın kaçının Avrupa kutusunda olduğunu — alet kutu
   argümanı almıyor ve `--ayrinti` yalnız en büyük 15'i basıyor.
   Ölçmek için aleti DEĞİŞTİRMEK gerekirdi; `§7`, dosya benim değil.
🔴 Bugünkü 640'ın kaçının <5 km² olduğunu — aynı sebep.
   ⇒ Bu iki sayı bilinseydi eşik TÜRETİLEBİLİRDİ; şimdi türetilemiyor.
🟡 Ve R1'in koşu 4'e girip girmediğini ölçmedim: aletin başlığı
   *"R1 4 Eylül'de uygulandı ama SINANAMADI"* diyor, `TESPIH.md`
   640'ı *"koşu 5 ÖNCESİ"* diye damgalıyor. İkisi tutarlı ise 640
   R1-ÖNCESİ geometridir ve kıyas anlamlıdır — ama **doğrulamadım.**
```

---
---

# EK 2 — KONTROL DEĞİŞKENİ: 4b ↔ 5b arasında VERİ değişti mi (M-3001)

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-3001 · 5 Eylül 2026, 16:4x
> Koşu 5b CANLI (783 dk, PID 21540) · **HÜKÜM YOK, SAYI**

## ⇒ İKİ SAYI, VE İKİNCİSİ SEVKİN BEKLEMEDİĞİ YERDE
```
VERİ  4b'den sonra değişen girdi dosyası      🟢 0
KOD   4b'den sonra inen motor commit'i        🔴 10  (233 satır)
```
Sevk *"R1 (kod) değişti; **verinin** de değişip değişmediği ölçülmedi"*
diyordu. Ölçüm **veriyi temiz** buldu — ve riski **kod tarafında.**

## ① VERİ — iki BAĞIMSIZ ölçüm, ikisi de 0
Çapa: koşu 4b'nin çıktısı `data/donemler.js` = **4 Eyl 16:56:38**

```
ÖLÇÜM A — DAMGA   girdi evreni `girdi.GIRDI_DOSYALARI`nın KENDİSİNDEN
                  (§5: "tek doğru kaynak girdi.py"), 77 dosya
   4b'den SONRA yazılan girdi dosyası ................ 🟢 0
   en yeni girdi dosyası   `yerlesimler.js`  4 Eyl 00:45:55
                                            ← 4b'den 16 SAAT ÖNCE
   sonraki dördü ............ 3 Eyl 20:59 – 22:47

ÖLÇÜM B — GIT    4b'den sonra `data/` dokunan commit: 4
   0e7cb11 · f384609 · 46dad90 · 055567d
   bunların dokunduğu dosyalar:
      altlik · bekleyenler · bolgeler · devirler ·
      devletler · devletler_harita · donemler · petek_govde
   🔴 `yerlesimler*` dosyası: **0**       (hepsi ÇIKTI ya da DİZİN)
   commit'siz değişiklik (`git status`): 🟢 boş
   izlenmeyen `data/yer_yama_p0035.js`  → `GIRDI_DOSYALARI`da YOK (0 eşleşme)
                                          ⇒ motor okumuyor
```
🟢 **Nokta sayısı bugün 3805** — `§1.5` tablosuyla birebir.
⇒ **M-3001 ④'ün üç kovasından 🟢: 0 yeni nokta.**

## ② KOD — ve burası tek değişkenli DEĞİL
```
4b (16:56) → 5b arası motor/renk commit'i: 10 · 233 satır
   uret_petek.py  192 satır (5 commit)
   renkler.py      66 satır (5 commit)
```
Beş `uret_petek` commit'i **hunk konumuyla** ayrıldı
(`_pe_ozet` = satır 3615, geometri özet aşamasının başı):
```
89cd681 R1  don_köşe ortak ızgara   @1845 · 3604 · 3648   🔴 GEOMETRİ
1fd5a20 R7  örtülmeyen kara         @2820                 ⚪ ölçüm
            14 gönderme de 2820-2880 arasında, hepsi oku/bas,
            try/except sarılı, `PETEK_D`ye yazım YOK
93a3f9f A2  çift koşu kilidi        @54                   ⚪ kilit
d4e56e7     kuşatılmışlık listesi   @3639 (>3615)         ⚪ nöbetçi
            eklenen tek ad `_KUS_BEKLENEN` — bir BEKLENEN-DEĞER kümesi
6af6a00     atıf düzeltmesi         @3645 (>3615)         ⚪ rapor
```
`renkler.py` — **BOYALAR Python'un kendisine okutuldu** (§11: regex değil):
```
anahtar sayısı   4b öncesi 550   ↔   bugün 550
YENİ kimlik      🟢 0      KALKAN kimlik   🟢 0
yalnız HEX değişen  16   (aydin · karaman · sardinya · teke · siena …)
```
⇒ Renk yeni **gövde doğuramaz**; dikişi etkilemez.

🟢 ⇒ **10 commit'ten geometriye dokunan: 1 (R1).** Ama bu bir ölçümdür,
bir varsayım değil — sevk *"tek değişken R1"* diye başlamıştı ve
**arada 233 satır vardı.**

## ③ 🔴 VE TABANIN BİR KÖR NOKTASI ÇIKTI — mtime YALAN SÖYLEDİ
`§①`de (bu belgenin ilk bölümü) girdi provenansını elerken
`donemler.js` · `devletler_harita.js` · `js/app.js` ölçülmüş,
**`motor_kara.geojson` ölçülmemişti.** Bugün bakıldı:
```
veri-kaynak/motor_kara.geojson   mtime  5 Eyl 03:43   ← 4b'den SONRA
```
Bir an *"640 tabanı iki ayrı koşunun çıktısını karıştırıyor"* göründü.
**Ölçüldü, çürüdü:**
```
git status --porcelain   🟢 BOŞ        (çalışan kopya = commit'li kopya)
boyut  çalışan 8.016.830  ↔  commit 8.016.830   BİREBİR
son commit  0e7cb11 · 4 Eyl 17:15 · "KOSU 4 INDI"
```
⇒ İçerik **koşu 4b'nin çıktısı.** 03:43 damgası içerik değişmeden
atılmış (checkout/restore sınıfı bir dokunuş).
📌 ***mtime bir ölçüm değil bir DAMGADIR; içerik değişmeden değişir.***
Ve bu, `§①`in ölçtüğü şeyin aynısını **ters yönden** gösteriyor: orada
değişen bir dosya (`js/app.js`) elenmişti çünkü ilgili fonksiyonu
değişmemişti; burada değişmiş **görünen** bir dosya elendi çünkü
**hiç değişmemişti.**
⚠️ Ve `§①`in *"girdi kayması elendi"* cümlesi bu dosya için
**yazıldığında dayanaksızdı** — bugün dayanağı kondu, sonuç aynı kaldı.

## ④ NE ÖLÇMEDİM
```
🔴 233 satırın tamamını OKUMADIM. Beş commit'i hunk KONUMU +
   isim izleme + `PETEK_D`/`unary_union`/`difference` taramasıyla
   sınıfladım. Bir commit geometriye ADI GEÇMEYEN bir yoldan
   dokunuyorsa (bir sabit, bir eşik, bir önbellek) bu yöntem KAÇIRIR.
🔴 R1'in dikiş alanını NE KADAR kapatacağını — hâlâ ölçülmedi
   (EK 1'deki eşik sorusu açık; ölçüt olarak km² önerildi)
⚪ Koşu sonrası ölçüm — 5b CANLI (783 dk), yapılamaz
```

## ⑤ YAN BULGU — sevkin konusu değil, kayda geçsin
`girdi.yukle()` bugün bir uyarı bastı:
```
UYARI alan: `s.kesinlik` BILINEN_ALANLAR'da yok — 2 kayıtta
   yerlesimler.js : Vidin
   yerlesimler_ok106.js : Kızıkermen (Gazi Kerman)
```
`§7` — ikisi de benim dosyam değil, **dokunmadım.** Alan bir yazım
hatası mı yoksa kaydedilmemiş yeni bir şema alanı mı, **ölçmedim.**
