# BULGU — DÖRT KALEM · 0907

**Oturum:** DORT-KALEM-0907 · `local_a6f8263a-6b20-402f-9873-fa068acf6e26`
**Şartname:** `oturumlar/DORT-KALEM-0907.md` · hüküm M-3140
**Cins:** ÖLÇÜM + ÖNERİ. Veri yazılmadı, `data/`+`arac/` DONUK (koşu 8).

---

## ⓪ TESLİM — ÜÇLÜ KURALLA (`§7.1④`), DÖRT KALEM

| kalem | ÖLÇTÜM | BULAMADIM | İSTİYORUM |
|---|---|---|---|
| ① Zapolya | künye yok ✓ · **28 dönem** `macaristan` künyesini aşıyor | `1570` TDV `erdel`de **0 cümle** | künye kararı — **ama 1541-1570 aralığı ÇÜRÜDÜ** |
| ② Boğdan | tarif edilen blok **veride YOK** · gerçek blok **1456→1878** | — | kalemin **yeniden tarifi** |
| ③ Faysal | kırılma **VAR: 31 yerleşim** · çekirdekte madde **YOK** | — | madde uygulansın (yazıldı) |
| ④ Mısır ordusu | 3 ✓ · `isg:` **247/247 kimlik taşıyor**, `v:` **hiç** | — | `isg:`e taşınsın (öneri yazıldı) |

🔴 **Şartnamenin `§6` öncül damgalarından ÜÇÜ çürüdü, biri doğrulandı.**

---

## ① ZAPOLYA — künye yokluğu DOĞRU, ama **TARİH ARALIĞI ÇÜRÜDÜ**

**🟢 ÖLÇTÜM (senin damgan doğruydu):** `devletler.js`te Zapolya / Doğu Macar
künyesi **YOK**. Aday adlar tarandı; en yakın olanlar:
```
macaristan            1000-01-01 → 1526-08-29   (Mohaç'ta biter)
macaristan-habsburg   1526-08-29 → 1918-11-16
erdel                 1570-01-01 → 1711-04-30
orta-macar-kralligi   1682-09-16 → 1688-01-17
```

**🔴 VE VERİ O BOŞLUĞU `macaristan`ı UZATARAK DOLDURMUŞ:**
```
`macaristan` veride 60 dönem · 59 yerleşim
künyeyi AŞAN: 28 dönem
   14'ü 1526-09-01'de biter (3 gün taşma — 400 günlük tolerans yutuyor)
   🔴 gerçek aşımlar:  Peçuy 1543-07-21 · Estergon 1543-08-10 ·
      İstolni Belgrad 1543-08-10 · Kalocsa 1541-08-29 · Temeşvar 1552-07-27
      → künyeden 15-26 YIL sonra
denetle.4c bunların 15'ini görüyor (400 gün üstü olanlar)
```
📌 Bu tarihler **Osmanlı fetih günleridir** (Estergon ve İstolni Belgrad 1543,
Peçuy 1543, Temeşvar 1552) — yani veri modeli doğru bir şey yapıyor: o
topraklar 1526-1543 arası Macar kalmıştı. **Kusur modelde değil, kimlikte:**
kullanılabilecek bir künye olmadığı için ölmüş bir künye uzatılmış.

### 🔴 DEVRALDIĞIM ARALIK — TDV İKİ UCUNU DA ÇÜRÜTTÜ
```
devraldığım   "1541-1570 Doğu Macar Krallığı"
TDV `budin`   «asilzadelerden bir kısmı Macar Krallığı'na János Szapolyai'yi
               (10 KASIM 1526), diğer kısmı … Ferdinand'ı (17 Aralık 1526)
               seçmişti»
              «1527 Ağustosunda Buda'yı ele geçiren Ferdinand'a karşı János
               Szapolyai Sultan Süleyman'dan yardım istedi … kale ile şehri
               Szapolyai'ye bıraktı»
TDV `erdel`   «Böylece 1541'DE ERDEL Osmanlılar'a bağlı HARAÇGÜZÂR
               STATÜSÜNDE BİR VOYVODALIK haline geldi»
              `1570` → **0 CÜMLE** · `Speyer` → **0 CÜMLE**
```
⇒ **BAŞLANGIÇ:** Szapolyai **10 Kasım 1526**'da kral seçildi — 1541 değil.
⇒ **1541** başka bir olay: Budin Osmanlı eyaleti oldu **ve Erdel tâbi
voyvodalık** haline geldi.
⇒ **1570:** TDV `erdel` bu tarihi **hiç anmıyor** ⇒ `bulunamadı`.

### 🔴 VE BİR YAN BULGU — `erdel` KÜNYESİ 29 YIL GEÇ AÇILIYOR OLABİLİR
TDV Erdel'in voyvodalık hâline gelişini **1541**'e koyuyor; künye
**1570-01-01**'de açılıyor. Bu benim kalemim değil ama kaydediliyor.

🔴 **HÜKÜM VERMİYORUM.** Künye açmak 28 dönemi ve iki kimliği bağlar; ve
şartnamenin verdiği aralık çürüdüğü için **doğru aralık ayrıca kararlaştırılmalı**
(1526-11-10 → 1541? → 1570? üçü de savunulabilir ve üçü farklı şey boyar).
`§3.5.0`: ardıl künye açmadan önce penceresinin ne kapatacağı ölçülür.

---

## ② BOĞDAN — 🔴 KALEMİN TARİFİ VERİYLE UYUŞMUYOR

**Şartname:** *"veride Boğdan `1856-03-30 → 1878-07-13` TEK BLOK"*

**ÖLÇÜM:**
```
`bogdan` kimliği veride: 14 dönem · 14 yerleşim
   bitiş günleri: {1456-06-01: 14}   ← HEPSİ 1456'da biter
   1859-01-24'ten sonra biten: 0
   `1856-03-30` `bogdan`da: 0
```
⇒ Tarif edilen blok **`bogdan` kimliğinde HİÇ YOK.**

**GERÇEK YAPI (Yaş ve Bükreş zincirleri):**
```
Yaş     s:bogdan 1281-01-01 → 1456-06-01
        v: "Boğdan Voyvodalığı"  1456-06-01 → 1878-07-13   ← 422 YILLIK TEK BLOK
        s:romanya 1878-07-13 → 1881-03-26 → romanya-kralligi
Bükreş  s:eflak 1281-01-01 → 1462-06-01
        v: "Eflak Voyvodalığı"   1462-06-01 → 1878-07-13   ← aynı
```
⇒ Blok **var ama `v:` katmanında ve 1456'da başlıyor**, 1856'da değil. Ve yine
`k:` alanında **serbest metin** — kalem ④'ün birebir aynı yapısal eksiği.

**🟡 `1859-01-24` — künyelerde ZATEN İŞLENMİŞ, veride KISMEN:**
```
bogdan künye 1359-01-01 → 1859-01-24     ✓
eflak  künye 1330-01-01 → 1859-01-24     ✓
romanya künye f: 1859-01-24              ✓
veride kırılma VAR: eflak t ×2 · romanya f ×2   ← ama Yaş/Bükreş'te DEĞİL
```
🔴 ⇒ Atlas **kendi içinde tutarsız**: bazı yerleşimler 1859-01-24'te kırılıyor,
**iki başkent kırılmıyor** ve `v:` bloğu 1878'e kadar sürüyor.

🔴 **HÜKÜM VERMİYORUM, KALEMİ YENİDEN TARİF EDİYORUM.** Gerçek soru
*"1856 bloğunu 1859'da böl"* değil:
```
① `v:` bloğu 1456→1878 · bölünme noktası 1859-01-24 künyelerde ZATEN var
② ama `v:` kimlik taşıyamıyor ⇒ bölsen bile "Romanya" ifade edilemez
③ ve kırılma bazı kayıtlarda inmiş, iki başkentte inmemiş — ÖNCE O
   TUTARSIZLIK sayılmalı (kaç kayıt kırılıyor, kaç kayıt kırılmıyor)
```
⚠️ Ve `1859-01-24` tarihini **kaynağa sormadım** — künyelerin üçünde birden
duruyor olması onu *atlas içinde tutarlı* yapar, **kaynaklı yapmaz.**
Damga: **`okumadım`**, `bulunamadı` değil.

---

## ③ FAYSAL — 🟢 KALEM KAPANDI, MADDE YAZILDI

⚪ *"ölçmedim"* damgan kapandı:
```
kırılma VAR:  s:ingiltere t: ×31  →  s:irak-kralligi f: ×31   (31 yerleşim)
künye `irak-kralligi` f: 1921-08-23 — veriyle BİREBİR
çekirdekte ±30 gün: 1 madde, ve o da 21 gün ötede «Sakarya Meydan Muharebesi»
```
🔴 Bu, `Değişmez 2`yi doğuran vakanın ta kendisi: *"değişim, o güne rastgele
denk gelen ALAKASIZ bir maddenin altında belirir."* 31 yerleşim el değiştiriyor.

🟢 **KAYNAK — TDV `faysal-i` (7.800 kar, kesilmedi), gün ADIYLA:**
> *"Faysal'ın krallığı Arap Devlet Konseyi tarafından onaylandıktan sonra bir
> referandum yapılarak pekiştirildi ve **Faysal 23 Ağustos 1921 tarihinde
> tahta çıktı.**"*

⇒ Madde yazıldı: **`denetim/YAMA-DORTKALEM-KRONOLOJI-0907.json`**
🔴 ÇEKİRDEĞE (`data/olaylar_ek*.js`) — `kronoloji*.js`e DEĞİL.

---

## ④ MISIR ORDUSU — 🟢 KALEM KAPANDI, KARAR `isg:`

3 sayın **doğrulandı** (Kütahya · Konya · Karaman). Karar **iki bağımsız ayaktan**:

**AYAK 1 — ŞEMA (ölçüldü):**
```
isg:  f 247 · t 247 · d 247 · kaynak 152     ← d: 247/247, HEPSİ kimlik taşıyor
v:    f 429 · t 429 · k 373 · statu 421 · kid 291 · enklav 1   ← d: HİÇ YOK
```
🔴 Mevcut kayıt kimliği `k:` alanına **serbest metin** yazmış
(`"Mısır ordusu (işgal)"`) — çünkü `v:` onu taşıyamıyor. Etiketin kendisi
zaten *"(işgal)"* diyor.
`misir-kavalali` künyesi **1805-07-03 → 1914-12-18** pencereyi kapsıyor 🟢

**AYAK 2 — KAYNAĞIN YÜKLEMİ (TDV `kavalali-mehmed-ali-pasa`, 27.321 kar):**
> *"Konya üzerine **hareket eden** İbrâhim Paşa kumandasındaki Mısır birlikleri…"*
> *"**Kütahya'da bulunan** İbrâhim Paşa'ya gönderildi (30 Mart 1833)"*
> *"**Adana'nın** İbrâhim Paşa'ya **muhassıllık olarak verilmesine** razı oldu"*

⇒ Üçüncü alıntı ayrımı kesinleştiriyor: bir **tasarruf devri gerçekten oldu —
ama Adana için**, Konya/Kütahya için değil. Konya ve Kütahya **işgal edildi ve
boşaltıldı** (`t: 1833-06-30`).

⇒ Öneri: **`denetim/YAMA-DORTKALEM-ISG-0907.json`**
⚫ Ve `.js` yaması YAZMADIM: `_sahiplik_uygula.py`nin bir dönemi `v:`den
**çıkarıp** `isg:`e taşıyabildiğini **ölçmedim**; alet dönem EKLİYOR, silmek
ayrı iş. Ölçmeden yazsaydım aynı pencerede **iki örtü** doğabilirdi.

---

## ⑤ İKİ KALEMİN ORTAK KÖKÜ — ve o bir ŞEMA EKSİĞİ

② ve ④ **aynı şeyin iki yüzü**: `v:` katmanı kimlik taşıyamıyor, ve iki ayrı
yerde kimlik `k:` alanına **serbest metin** olarak sıkıştırılmış:
```
"Boğdan Voyvodalığı"      ← 422 yıllık blok
"Mısır ordusu (işgal)"    ← 7 aylık işgal
```
📌 `§11`in 5 Eylül ölçümü (*"`v:` dönemlerinin kimlik alanı yok — 423 dönem"*)
bugün **429**; ve bu iki kalem onun **görünen sonuçları.** Şemayı düzeltmek
benim kalemim değil, ama iki kalemin de niçin var olduğunu o açıklıyor.

---

## ⑥ NE ÖLÇMEDİM — `ölçmedim` diye yazıyorum

```
⚫ `1859-01-24`ün KAYNAĞI — künyelerde tutarlı, ama kaynağa SORULMADI (`okumadım`)
⚫ ②'de kaç kayıt 1859-01-24'te kırılıyor / kaç kayıt kırılmıyor — SAYILMADI
⚫ `_sahiplik_uygula.py`nin `v:`→`isg:` TAŞIMA yeteneği
⚫ ③'ün maddesinin `Değişmez 2s` sayacını kaça indireceği
⚫ `erdel` künyesinin 1570 yerine 1541'de açılıp açılmayacağı — kalemim DEĞİL
⚫ `yer_id: "Bağdat"` atlasta var mı — uygulayan kontrol etsin
```

---
---

# 🔴🔴 TUR 3 — **TUR 1 VE TUR 2'DE İKİ İDDİAM ÇÜRÜDÜ. KENDİM BİLDİRİYORUM.**

Koordinatör şartnameye bir düzeltme ekledi (`KIMLIK-KID-0907`) ve o düzeltme
benim iki cümlemi birden yıktı. Ölçtüm; **ikisi de yanlış**, ve ikisi de
**aynı kökten**.

## ÇÜRÜYEN ① — «`v:` kimlik taşıyamıyor»

Tur 1 ve Tur 2'de şunu yazdım (kalem ④'ün 1. ayağında ve ②'nin gerekçesinde):
> *"`v:` dönemlerinin kimlik alanı yok ⇒ `v:` seçilirse «Mısır» ifade
> EDİLEMEZ"* · *"`v:` kimlik taşımıyor ⇒ bölünse bile «Romanya» ifade
> edilemezdi"*

**🔴 YANLIŞ. ÖLÇÜM:**
```
v: toplam dönem          429
   `kid` TAŞIYAN         291   (%68)
   `kid` TAŞIMAYAN       138
13 farklı `kid` değeri · künyesi OLMAYAN: **0**
   misir-kavalali 154 · cezayir-ocagi 41 · trablusgarp-ocagi 39 ·
   eflak 16 · bogdan 14 · bulgaristan-prensligi 7 · kirim 6 …
```
🔴 **Ve tam benim iki örneğim kimlik TAŞIYOR:**
```
Yaş     v: k="Boğdan Voyvodalığı"  **kid="bogdan"**  statu=vassal
Bükreş  v: k="Eflak Voyvodalığı"   **kid="eflak"**   statu=vassal
```
⇒ *"Romanya ifade edilemez"* iddiam düpedüz yanlış: `kid:"bogdan"` →
`kid:"romanya"` **doğrudan yazılabilir**.

📌 **VE EN KÖTÜSÜ: SAYIYI KENDİ ÖLÇÜMÜMDE BASMIŞTIM.** Tur 1 çıktımda
`v: … kid 291 …` yazıyor. **Sayıyı gördüm, ne olduğunu TANIMADIM** —
`d:` alanının yokluğunu *"kimlik yok"* sandım ve `kid`i okumadım.
`§11`: *"bir alan adı, kullanıldığı yerden değil TANIMLANDIĞI yerden
okunur"* — ben hiçbirinden okumadım, **varsaydım.**

⚠️ **Ters yöne de yazmıyorum:** kapsama **291/429**; kalan 138'in 56'sı
etiketsiz. *Alan var ve çalışıyor* ile *kapsaması tam* **iki ayrı cümle**.

🟢 **KALEM ④'ÜN HÜKMÜ ETKİLENMİYOR** — ve sebebi, kararı **iki ayağa**
kurmuş olmam: 2. ayak (kaynağın yüklemi: Konya/Kütahya işgal edilip
boşaltıldı, **Adana** ise muhassıllık olarak verildi) tek başına ayakta.
🟢 Ve yeni bir destek çıktı: üç kaydın `statu:` alanı **`vassal`** —
bir askerî işgal için yanlış, `isg:` kararını **güçlendiriyor**.
📌 İki ayaklı kurmasaydım hüküm de düşerdi. `§11`in *"doğrulama, aynı
soruya İKİ YOLDAN gitmektir"* kuralı burada **hükmü kurtardı.**

---

## ÇÜRÜYEN ② — «veri ikiye ayrılmıyor, doğu Habsburg boyanıyor»

Tur 2'de *"ardıl 51 dönemde `avusturya`"* ölçüp şunu yazdım:
> *"Transilvanya 1526'dan itibaren Habsburg Avusturya boyanıyor, 44 yıllık
> yanlış atıf"*

**🔴 YANLIŞ — ÇÜNKÜ `v:` KATMANINA HİÇ BAKMADIM.** Atlas Zapolya'yı ve
Erdel'i **zaten modelliyor**, ve doğru günlerle:
```
v: "Macaristan (Zapolya vasal krallığı)"  1526-09-01 → 1541-08-29   5 dönem
   Budin · Peşte · Erdel (Kaloşvar) · Varad (Oradea) · Yanova (Ineu)
v: "Erdel Prensliği"                      1541-08-29 → 1687/1660/1658  3 dönem
   Erdel (Kaloşvar) · Varad · Yanova
v: "Orta Macar Krallığı (Tököli İmre)"    1682-09-16 → 1685-10-15   6 dönem
```
⇒ **`1541-08-29` dikişi TAM**: Zapolya krallığı biter, Erdel Prensliği başlar
— Budin'in düşüş günü. Model **doğru**.

🔴 **ARDIL ÖLÇÜMÜM NİÇİN YANILTTI:** `dl[i+1]`i **aynı `s:` listesi içinde**
okudum. Erdel (Kaloşvar)'da `s:` listesi `macaristan 1281→1526-09-01`den
sonra **doğrudan `avusturya`ya atlıyor** (arada onlarca yıl var) ve o boşluğu
**`v:` katmanı dolduruyor.** Bitişik iki girdiyi okumak, **aradaki zaman
boşluğunu ve öteki katmanı** görmüyor.
📌 `§11`in *"kendi kurduğun ölçüm penceresi, görmediğini «yok» diye
gösterir"* dersi — ve pencereyi **katman** ekseninde dar kurmuşum.

### ⇒ KALEM ① ÇOK KÜÇÜLDÜ, VE SORUSU DEĞİŞTİ
```
DEĞİL   "Zapolya künyesi yok, aç"          (model zaten var)
DEĞİL   "60 dönemi ikiye ayır"             (v: katmanı zaten ayırıyor)
ASIL    `v:` Zapolya/Erdel dönemlerinin **`kid`i BOŞ** (8 dönemin 8'i)
        ⇒ kimlik ifade EDİLEBİLİR ama EDİLMEMİŞ
        ⇒ `kid:"erdel"` yazılabilir — AMA `erdel` künyesi 1570-01-01'de
          açılıyor, `v:` etiketi 1541-08-29'da başlıyor: **29 YIL FARK**
        ⇒ Zapolya için künye GERÇEKTEN yok (tarama: 8 aday, 8'i de yok)
```
🔴 **HÜKÜM VERMİYORUM.** İki karar gerekiyor ve ikisi de kalemim değil:
`erdel` künyesinin `f:`i 1541'e çekilecek mi, ve Zapolya için künye
açılacak mı. Ama artık soru **ölçülmüş bir zemin üzerinde**.

---

## 📌 İKİ ÇÜRÜMENİN ORTAK KÖKÜ — tek cümle

**`v:` katmanını «kimliksiz» varsaydım, ve o yüzden İÇİNE HİÇ BAKMADIM.**
Bir varsayım, onu çürütecek ölçümü de engelledi: Zapolya oradaydı,
`kid`ler oradaydı, ve ben ikisini de `d:`/`s:` alanlarında aradım.
⇒ `§11`: *bir alanın ne taşıdığı VARSAYILMAZ, DÖKÜLÜR.*

---
---

# TUR 2 — ① ve ② YENİDEN TARİF EDİLDİ (hüküm M-3148)
> ⚠️ **Aşağıdaki ① bölümünün «ardıl `avusturya` ⇒ doğu Habsburg boyanıyor»
> hükmü TUR 3'te ÇÜRÜDÜ.** Ölçüm doğru, ÇIKARIM yanlıştı. Bölüm siliniyor
> değil damgalanıyor (`§3.5.1`: *vakayı silmek dersi de siler*).

Koordinatör ① ve ②'yi yeniden tarif etti. **Ölçtüm; ② kapandı, ① yine
tarif edilenden farklı çıktı.** Hüküm vermiyorum.

## ①-2 MACARİSTAN — 🔴 VERİ **İKİYE AYRILMIYOR**, ardıl TEK KİMLİK

Koordinatör: *"60 dönemi ikiye ayır: Habsburg yarısı ↔ Szapolyai yarısı."*

🔴 **Coğrafî bir çizgi VARSAYMADIM** (talimat: *"ölçüt coğrafî olabilir ama
SINAMADAN kullanma"*). Bunun yerine **zincirin kendisine** sordum:
***her `macaristan` döneminden sonra hangi kimlik geliyor?*** — ardıl kimlik,
o yerin hangi tarafa düştüğünü **verinin kendi içinden** söyler.

```
60 dönemin ARDILI:
   avusturya            51        venedik   9 (Dalmaçya, 1409-1537)
   macaristan            1        fransa-cumhuriyet 1 (Ragusa)
```
🔴 **Veri ikiye AYRILMIYOR — ardıl 51 dönemde tek tip: `avusturya`.**
Ve o 51'in içinde **doğunun tamamı** var:
```
Erdel (Kaloşvar) 46,77/23,59 · Erdel Belgradı 46,07/23,58 ·
Brassó 45,64/25,59 · Segesvár 46,22/24,79 · Varad 47,05/21,94 ·
Yanova 46,43/21,74            → hepsi ardıl `avusturya`
```
⇒ **Transilvanya 1526'dan itibaren Habsburg Avusturya boyanıyor**, ve
`erdel` künyesi **1570-01-01**'de açıldığı için arada **44 yıllık** bir
yanlış atıf var.

### 🔴 KÜNYE TARAMASI — `devletler.js`in TAMAMI, ORTAK NORMALLEŞTİRİCİYLE
Kimlik **tahmin etmedim, taradım** (`denetim/ARAC-NORMAL-0903.py`, 627 künye,
`id` + `ad` normalleştirilmiş):
```
🟢 BATI YARISI — KİMLİK ZATEN VAR, VE KULLANILMIYOR
   macaristan-habsburg  1526-08-29 → 1918-11-16  «Macaristan Krallığı (Habsburg Tacı)»
   habsburg             1526-08-29 → 1918-11-11  «Habsburg Avusturya»
   📌 `macaristan-habsburg`ın `f:`i, `macaristan`ın `t:`si ile BİREBİR AYNI
      (1526-08-29) ⇒ dikiş TAM, boşluk doğmaz.

🔴 DOĞU YARISI — KİMLİK GERÇEKTEN YOK
   zapolya · szapolyai · yanos · janos · «dogu macar» · partium ·
   bethlen · rakoczi   →  SEKİZİNİN SEKİZİ DE **YOK**
   `erdel` VAR ama f: 1570-01-01 — 44 YIL GEÇ
   1526-1570 penceresini kapsayan Macaristan/Erdel/Avusturya künyesi: **2**
   (ikisi de Habsburg tarafı)
```

### ⇒ KALEM İKİYE AYRILDI, VE İKİSİ AYRI CİNS
```
BATI  bir KÜNYE kalemi DEĞİL, bir KULLANIM kalemi:
      künye var (`macaristan-habsburg`), dikiş tam, veri `avusturya` yazıyor
DOĞU  gerçek bir KÜNYE kalemi: hiçbir kimlik yok ve `erdel` 44 yıl geç
```
🔴 **HÜKÜM VERMİYORUM.** Batı için `avusturya` → `macaristan-habsburg`
değişimi bir **model kararıdır** (Habsburg Avusturya ile Habsburg tacındaki
Macaristan Krallığı ayrı boyanacak mı?), ve doğu için künye açmak
`erdel`in `f:`ini de bağlar. İkisi de kalemim değil.

---

## ②-2 BOĞDAN — 🟢 KALEM KAPANDI

### ① SAYIM — kırılan / kırılmayan
```
1859-01-24'te KIRILAN      2 yerleşim   Yergöğü (Giurgiu) · İbrail
                                        ve İKİSİ DE `s:` katmanında
                                        (s:eflak → s:romanya)
1859-01-24'ü KAPSAYIP
        KIRILMAYAN        18 yerleşim   Yaş · Bükreş · Kalas · Roman ·
                                        Birlad · Krayova · Piteşti · … 
                                        ve HEPSİ `v:` katmanında
```
🟢 **VE SEBEP ÖLÇÜMÜN İÇİNDEN ÇIKTI:** kırılma **`s:` katmanında inmiş,
`v:` katmanına hiç inmemiş.** `s:` kimlik taşıyor ⇒ `eflak`→`romanya`
yazılabildi. `v:` kimlik taşımıyor ⇒ bölünse bile *"Romanya"* ifade
edilemezdi. **Tutarsızlık keyfî değil, şema eksiğinin doğrudan sonucu.**

### ② KAYNAK — 🟢 `1859-01-24` DOĞRULANDI, ve fark TAKVİM ÇIKTI
```
TDV `bogdan` (22.241 kar, kesilmedi):
  «**5 Şubat 1859**'da Besarabya'nın üç vilâyetinin yönetimi de dahil olmak
   üzere Boğdan prensliğine seçilen Alexandru Ion Cuza 24 Şubat günü …»
TDV `eflak` (23.567 kar): «Her iki ülke 1859'da Albay Alexandru Ioan Cuza'yı
   (Kuza) başkan seçti» · «Sultan Abdülmecid, Cuza'yı Memleketeyn'in tek
   reisi olarak tanıyıp Eflak ve Boğdan'ın Romanya adı altında tek bir ülke
   şeklinde birleşmesini onayladı»
TDV `romanya` (38.132 kar): «Eflak-Boğdan'ın birleşmesini, yani Küçük
   Romanya'nın kurulmasını (1859-1862) kabul ettiler»
```
🟢 **HESAP TAM TUTUYOR:** 19. yüzyılda Jülyen-Gregoryen farkı **12 gün**.
```
24 Ocak 1859 (Jülyen)  +12  =  5 Şubat 1859 (Gregoryen)
atlas                         TDV
```
⇒ **ÇELİŞKİ YOK — AYNI GÜN.** Atlas Jülyen'i, TDV Gregoryen'i kullanıyor.
Eflak/Boğdan 1919'a kadar Jülyen'deydi (`§4` takvim kuralının (a) hâli).
📌 Ve atlas **kendi içinde tutarlı**: `1859-01-24` kırılması `eflak→romanya`
geçişini **Eflak kasabalarında** (Yergöğü · İbrail) yapıyor, ve 24 Ocak
(Jülyen) standart anlatıda **Eflak seçiminin** günüdür.

⚠️ **ÇÖZMEDİĞİM:** TDV o günü *"Boğdan prensliğine seçilen"* diye niteliyor;
standart anlatı 24 Ocak (Jülyen) gününü **Eflak** seçimine bağlıyor
(Boğdan seçimi 5 Ocak Jülyen). **Bu bir ATIF sorusudur ve ÇÖZMEDİM** —
tarihi etkilemiyor, ama bir sonraki oturum TDV'yi okuyup şaşırmasın.

⇒ **DAMGA `okumadım` → `DOGRULANDI` (takvim kapısıyla).**

---

## ③-2 🔴 KENDİ ÖLÇÜMÜMDE BİR DARLIK BULDUM — kendim bildiriyorum

Tur 1'de yazdım: *"`1856-03-30` `bogdan`da **0**"* ve bundan
*"şartnamenin tarifi veriyle uyuşmuyor"* çıkardım. **Ölçüm doğruydu,
EVREN DARDI:**
```
benim ölçtüğüm   p["d"] == "bogdan"  içinde 1856-03-30  →  0     ✓ doğru
GERÇEK           veride 1856-03-30 → 6 GEÇİŞ:
   s: `rusya` t: ×3   (İsmail · Kahul · Bolgrad — Güney Besarabya)
   v: f: ×3           «Boğdan Voyvodalığı (Cenûbî Besarabya)»
```
⇒ Tarih **veride VAR** — `v:` katmanının `k:` ETİKETİNDE, ve 1856 Paris
Antlaşması'yla Güney Besarabya'nın Rusya'dan Boğdan'a geçişini işaretliyor.
🔴 **Koordinatörün öncülü benim dediğimden DAHA DOĞRUYMUŞ**; ben `d:`
alanına bakıp `k:` etiketini kaçırdım.
📌 `§11`in *"ölçüm doğru, evren dar"* dersi — ve bu sefer **bende**.
Bir öncülü çürütürken kendi evrenimin yeterli olduğunu varsaymışım.

---

## ⑦ KOMUTLAR / DOSYALAR

```
denetim/YAMA-DORTKALEM-KRONOLOJI-0907.json   kalem ③ — madde, kaynaklı
denetim/YAMA-DORTKALEM-ISG-0907.json         kalem ④ — v: → isg:, iki ayaklı
denetim/BULGU-DORTKALEM-0907.md              bu dosya
```
Gövde çekimi için bugün kurduğum `denetim/ARAC-KAYNAK-DENETIM-0907.py`in
`govde_cek`i kullanıldı — **yeniden yazılmadı**, ve gövdeler kesilmedi.
