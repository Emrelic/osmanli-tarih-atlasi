# BULGU — ENKLAV-0907 · `Değişmez 7`

Oturum: ENKLAV-0907 (`local_c3fd502b-7e87-4bd3-bab6-977c184e9dfa`).
Koordinatör: 1.MURAT HÜDAVENDİGAR. Şartname: `oturumlar/ENKLAV-0907.md`.
Taban: `py arac/denetle.py --ayrinti`, 7 Eylül 2026 · **661 sorgusuz enklav**
(tavan 660) · A-koridor 483 · B-bilinmiyor 166 · C-hakiki 12.

```
VERİ YAZILMADI · TAVANA DOKUNULMADI · bütün çıktı `denetim/` altında
```

---

## ① C-HAKİKİ (12) — 12/12 SINIFLANDI, ÖLÇÜLEMEDİ 0

Şartnamenin şartı: *"gerçekten enklav mı, yoksa `§2`'nin noktasızlık vakası
mı? İkisi haritada AYNI görünür ve çareleri TERS."* Her kayıt için üç şey
ölçüldü (`denetim/ARAC-ENKLAV-C-0907.js`):

```
① tam `s:`/`d:`/`v:`/`isg:` zinciri — süzgeçli bakış SİLDİĞİNİ göstermez
② aynı kimliği taşıyan bütün noktalar — GÖVDE NEREDE?
③ ada ile gövde ARASINDAKİ kutuda kaç nokta var ve KİMİN
   (§2: noktasızlığın hangi yöne hata ürettiği KOMŞUNUN kimliğine bağlı)
```

| sınıf | n | çare |
|---|---|---|
| 🟢 **HAKİKİ ENKLAV** | **9** | `enklav: true` — yama YAZILDI |
| 🔴 **TARİH KUSURU** | **2** | enklav DEĞİL — kimlik yanlış. Bildirildi, yazılmadı |
| ⚪ **KİMLİK TUTARSIZLIĞI** | **1** | enklav DEĞİL — iki kimlik yan yana. Bildirildi |

### 🟢 Dokuz hakiki enklav — ve üçü de ③'te doğrulandı

```
Gore (Gorée) ×2    ARADA merini 10 · colof/valo/sine-salum 4 ⇒ koridor YOK,
                   arada BAŞKA DEVLETLER var
Massangano         birbirlerine 39 km, Luanda'ya 132/170 km ⇒ kendi aralarında
Kambambe           BAĞLI, ana gövdeden (Tete 2188-2226 km) KOPUK · arada ndongo
Çandernagor        birbirlerine 1514 km · ARADA 12 nokta `ingiliz-hindistani`
Pondişeri          ⇒ kuşatılmışlar
Pemaquid           ana gövde Jamestown 829-963 km · ARADA Yeni Hollanda vardı
Falmouth           kutuda `abenaki` + SAHİPSİZ
Portsmouth (NH)
```

### 🟢 ÖN SINAV — alet TAKLİT EDİLMEDİ, ÇAĞRILDI

`denetim/ARAC-ENKLAV-SINAV-0907.py` → `denetle.degismez7(Y)` doğrudan:
```
C13①  GEÇME     taban 661   ← tavan 660 · doğru yerden okuduğumun KANITI
C13②  ATEŞLEME  yamalı 652  ← düşmeseydi `enklav` alanı yanlış yerdeydi
C13③  GİRDİ     Y `denetle.yerlesimleri_yukle()`den — gerçek dosyalardan
C13④  ÇIKTI     dönüş yapısı VARSAYILMADI, döküldü
                (anahtarlar: ada · ana · ana_km · gun · kova · sahip · yerlesim)
C-hakiki 12 → 3 · muaf.beyan 52 → 61
⇒ `Değişmez 7` ✗ → ✓  TAVAN YÜKSELTİLMEDEN
```

🔴 **VE YAMADA 20 `enklav:true` GÖRÜNÜYOR AMA YENİ OLAN DOKUZ.** Yama canlı
veriden üretildiği için mevcut bayrakları koruyor: `Çandernagor` 4/5 ve
`Pondişeri` 7/9 dönem **zaten beyanlıydı**.
📌 Ve buradan bir sınıf çıktı: ***YARIM BEYAN, TAM BEYANDAN AYIRT
EDİLEMİYOR*** — ikisi de *"bu kayıtta enklav var"* der. İki comptoir'ın
statüsü biliniyormuş; atlanan yalnız **son** dönemleriydi (1816-12-04).

---

## ② 🔴 İKİ TARİH KUSURU — enklav DEĞİL, ve ARDIL KÜNYELER HAZIR

```
Khami              s: torva 1450→1683 · ingiltere 1683→1923   🔴 207 YIL
Danangombe (Rozvi) s: rozvi 1684→1834 · ingiltere 1834→1923   🔴  56 YIL
```
İngiltere 1683'te ve 1834'te Zimbabve'de **yoktu** — Matabele Savaşı ve
Bulawayo'nun düşüşü **1893-11-04**.

🟢 **VE EMSAL 21 KM ÖTEDE, DOĞRU ZİNCİRİ TAŞIYOR:**
```
Bulavayo   (Khami'ye 21 km)   1850: matabele   1900: ingiltere   ✅
Khami                          1700: ingiltere  1850: ingiltere   🔴
```
📌 `CLAUDE.md §3.5.-1`in birebir tekrarı: *"bir bölgenin en ayrıntılı
modellenmiş yeri, en az ayrıntılı kaydını en iyi ele veren yerdir."*
Khami ve Danangombe **tek blok**; komşuları ayrıntılı.

🟢 **VE `§3.5.0`ın ÖN KOŞULU SAĞLANIYOR — künye VAR *ve* penceresi TUTUYOR:**
```
torva     1450-01-01 → 1683-01-01     veride 1 dönem  (Khami)
rozvi     1684-01-01 → 1834-01-01     veride 1 dönem  (Danangombe)
matabele  1840-01-01 → 1893-11-04     veride 1 dönem  (Bulavayo)
```
⚠️ Ama iki **boşluk** var ve `Değişmez 1` onları görür: `1683→1684` (1 yıl)
ve `1834→1840` (6 yıl, Rozvi'nin yıkılışı ile Ndebele'nin gelişi arası).
⇒ Çare *"kısalt ve `matabele` yaz"* kadar basit değil. **`§3.5.0` ARDIL
sınıfı**: kısaltmak delik açar, genişletmek fetihten önce boyar.

🔴 **YAZILMADI.** Bu bir tarih düzeltmesi, benim kovam değil; ve boşluk
kararı bir kaynak sorusu. Damga: **`okumadım`** — akademik kaynak aranmadı.

---

## ③ ⚪ `Delgo (Sükkût)` — ADA BİR KİMLİK TUTARSIZLIĞINDAN DOĞUYOR

Ada 962 km görünüyor, ama aradaki kutuda **2 nokta `ingiltere` taşıyor**.
Sudan kutusu 1900-01-01'de ölçüldü (171 nokta):
```
ingiltere       47      ingiliz-sudani  36
```
Ve bölünme **coğrafî değil**: Nil vadisi enlem sırasıyla
```
18,06  Debbe            ingiltere
19,17  Dongola          ingiltere
19,60  Kerma            ingiltere
20,13  Delgo (Sükkût)   ingiliz-sudani   ← ADA BURADA DOĞUYOR
20,80  Abrî (Mahas)     ingiliz-sudani
21,80  Vâdî Halfâ       tâbi (Mısır)
```
⇒ **Aynı kondominyum iki kimlikle yazılmış.** Çare `enklav:true` DEĞİL;
47 ile 36'nın birleştirilmesi — ve bu bir **model kararı**.
📌 Bu, `TRİYAJ METROPOL`ün *"KOVA-DIŞI · Anglo-Mısır Sudanı (kondominyum)"*
kalemiyle **aynı kalem**, iki ayrı koldan görüldü.

---

## ④ YAN BULGU — beyansız ikiz, ve benim yamamın kaydında

`denetle.py` her koşuda basıyor:
```
i 1 nokta çifti 3.0 km'den yakın ve BEYANSIZ:
    2.96 km  Dakar <-> Gore (Gorée)
```
Bu bir mükerrer **değil** — Gorée bir ada, Dakar anakara; `Anadolu Hisarı ↔
Rumeli Hisarı` (1,54 km) ve `Budin ↔ Peşte` (1,57 km) emsalinin aynısı ve
ikisi de **beyanlı**. ⇒ Karşılıklı `ikiz:` + iki tarafta `kaynak:` beyanı
gerekiyor. **Yazılmadı** (kalemim değil), bildirildi.

---

---

## ⑤ B (166) ve A (483) — TARANDI, ve ÖNCE ÖLÇÜT SINANDI

`denetim/ARAC-ENKLAV-B-0907.py`. Ölçüt: *ada ile ANA GÖVDE arasındaki
kutuda ne var?* — C'de elle uygulanan ③. adımın otomatik hâli.

### 🔴 ÖLÇÜT ELLE DOĞRULANMIŞ KÜMEYE KARŞI SINANDI VE İKİ KEZ ÇÖKTÜ

```
① ilk yazım EN YAKIN AYNI-KİMLİK noktasına bakıyordu, `denetle` ise ANA
   GÖVDEye. Portsmouth'un yolu Plymouth'a (124 km) gidiyordu, oysa gövde
   Jamestown'da (829 km) ⇒ elle doğrulanmış 12 kayıtta DÖRT AYRIŞMA.
   🟢 Çare yönü düzeltmek değil, `denetle`nin KENDİ `ana` alanını
      kullanmaktı — dönüşte ZATEN VARDI ve kullanılmamıştı.
② düzeltilmiş hâli 12/12 "arada yabancı var" dedi. Ama elle doğrulanmış
   sonuç 9 hakiki + 2 TARİH KUSURU + 1 KİMLİK TUTARSIZLIĞI.
```
📌 ⇒ ***Kova bir HÜKÜM değil bir KALINTI*** ve adı düzeltildi
(`HAKİKİ-ADAY` → **`ARADA-YABANCI`**). Alet *"arada başka kimlik var"* der,
*"arada duran şey GERÇEKTEN başka bir devlet mi"* diye **soramaz**:
```
Khami · Danangombe   kaydın KENDİSİ yanlış ⇒ arada elbette yabancı çıkar
Delgo                aradaki 27 nokta `ingiltere` — AYNI kondominyumun
                     öteki kimliği, başka devlet DEĞİL
```
Alt-ayrım bir **kimlik sözlüğü** ister (`ingiltere ↔ ingiliz-sudani ↔
ingiliz-hindistani`) ve o sözlük **yok**. İsabet: **9/12**.

```
kova            ARADA-YABANCI   KORİDOR-ADAY   NOKTASIZLIK
C-hakiki  12          12              0              0
B        166         147             19              0
A        483         312            167              4
```
🔴 **`ARADA-YABANCI` sayıları bir hüküm olarak okunmamalıdır.**
🟢 `KORİDOR-ADAY` ve `NOKTASIZLIK` güvenilir — alet tam onları ölçüyor.

### 🔴 NOKTASIZLIK (4) — `§2`nin saf vakası, çaresi TERS
```
1466-10-19 · 1920-01-18   Torun (Toruń)     → lehistan · polonya   184 km
1561-11-28                Tartu (Dorpat)    → lehistan             278 km
1561-11-28                Cēsis (Wenden)    → lehistan             177 km
```
Aradaki kutuda **SIFIR nokta**. `enklav:true` yazmak burada **yanlış olur**
— çare nokta eklemek. (Ve `Toruń` `CLAUDE.md §4`te kayıtlı: TDV'de müstakil
maddesi yok, `torun` slug'ı bir akrabalık terimi açıyor.)

---

## ⑥ 🔴🔴 EN BÜYÜK BULGU — KÖPRÜLER EŞİĞİN KIL PAYI ÜSTÜNDE TOPLANIYOR

`denetim/ARAC-ENKLAV-KOPRU-0907.py`: her ada için **ada ile ana gövde
arasındaki EN KISA ATLAMA** ölçüldü. `denetle.py:2029` `D7_BAG_KM = 150.0`
— *"aynı devletin iki yerleşimi bu mesafede BAĞLI"*.

```
köprüsü ölçülen: 634 / 661
   ≤200 km               332
   200-400 km            255
   >400 km                47
kova × bant     A: ≤200 305 · 200-400 155 · >400   0
                B: ≤200  27 · 200-400 100 · >400  35
                C: ≤200   0 · 200-400   0 · >400  12   ← YAMAMI DOĞRULUYOR
```

🔴 **VE EN UCUZ YİRMİSİNİN YİRMİSİ DE 150,3 – 150,9 km.** Eşik **150,0**.
```
150,4 km  Sirhind ↔ Pânipat    → Câlandhar ve Ludhiyana'yı ÜÇ ayrı dönemde
                                 (1480 delhi · 1526 babur · 1540 sur) ada yapıyor
150,4 km  Pau ↔ Toulouse       → Bayonne ve Pau, dört dönem
150,9 km  Surat Thani ↔ Chumphon → Trang ve Songkhla, altı dönem
```
⇒ ***A-koridor'un 305 kaydı (%66) 200 km'nin altında bir köprüyle ana
gövdeye bağlanıyor — yani bir VERİ KUSURU değil, NOKTA SEYREKLİĞİ.***

📌 Ve `CLAUDE.md`nin *"bir eşiğin kıl payı üstünde durmak, eşiği geçmek
değildir"* dersi — orada renk çözücüsü için yazılmıştı, burada `D7_BAG_KM`
için geçerli.

🔴 **BU BİR "EŞİĞİ GEVŞET" ÖNERİSİ DEĞİLDİR.** Eşik de tavan gibi
koordinatörün. Ve `§11`: *eşiği gevşetme, SIKILAŞTIR*. Doğru çare `§2`nin
kendi çaresi: **aradaki boşluğa nokta eklemek** — hem zinciri kapatır hem
veriyi zenginleştirir. Sirhind-Pânipat arasına bir nokta (Ambala · Karnal
gibi) üç dönemi birden kapatır.

⚠️ **Ve şartnamenin B tarifi bu ölçümle DÜZELDİ.** Şartname
*"🟢 KORİDOR VAR → aradaki KAYITLARA DÖNEM yazılmalı"* diyor. Ölçüm
gösteriyor ki aradaki kayıtlarda **dönem ZATEN var** (Zaachila 1535: arada
11 nokta, 11'i de `yeni-ispanya`). Eksik olan dönem değil **yoğunluk**.

---

## ⑦ ÖLÇMEDİKLERİM — damgayla

```
B ve A'nın `ARADA-YABANCI` 459 kaydının hukukî durumu   OKUMADIM
   (kaynağa gidilmedi; ölçüt zaten hüküm veremiyor)
kimlik sözlüğü (ingiltere ↔ ingiliz-sudani …)           YOK — kurulmadı
Khami/Danangombe için akademik kaynak                    OKUMADIM
Gore (Gorée)'nin 1677 ve 1792 dönemleri                  OKUMADIM
küre `enklav` 57 iken `muaf.beyan` 52 — 5 dönemlik fark  OKUMADIM
köprüsü ölçülemeyen 27 kayıt (gövdesiz / ad eşleşmedi)   OKUMADIM
```

## ⑧ TESLİM — sayıyla

```
661 → 652   (-9, C-hakiki kovasından)   tavan 660  ⇒  Değişmez 7  ✗ → ✓
C-hakiki 12 → 3    (kalan 3'ün 3'ü SINIFLANDI: 2 tarih kusuru + 1 tutarsızlık)
B 166 · A 483      TARANDI ve üç kovaya ayrıldı; VERİYE DOKUNULMADI
```
Uygulanacak yama: **`denetim/yer_yama_enklav_c_0907.js`** (8 kayıt · 9 yeni
bayrak). `data/`ye taşımak koordinatörün işi — koşu 8 sürüyor.
Üretilen dökümler: `TRIYAJ-ENKLAV-{A,B,C}-0907.json` ·
`TRIYAJ-ENKLAV-KOPRU-0907.json`.
