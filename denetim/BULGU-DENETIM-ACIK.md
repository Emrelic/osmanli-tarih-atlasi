# BULGU — DENETİM AÇIKLARI (28 Ağustos 2026)

> Oturum: **DENETİM AÇIK** (HAZIR KITA OPUS 95) · koordinatör: ORHANGAZİ
> Görev: `denetle.py` çıkış kodu 1 — yayını engelleyen iki ihlal.
> Taban: `git 38b9b7f` · `py arac/denetle.py --ayrinti` (2026-08-28 03:0x)

---

## 0. ÖZET — İKİ İHLAL, İKİ AYRI CİNS

```
① Değişmez 7   488 sorgusuz enklav (beklenen 486)
   sebep       KESİN ÖLÇÜLDÜ: `yerlesimler_ek_korfez.js` bağlandı
   ama mekanizma  koordinatörün varsaydığı DEĞİL — kopuk gövde doğmadı,
                  bir MUAFİYET DÜŞTÜ
   çare        tavan yükseltmek DEĞİL, ALETİ düzeltmek → 488 → 485

② mükerrer     11 şüpheli çift (beklenen 0)
   sebep       KESİN ÖLÇÜLDÜ: 11'in 11'i bu geceden — her çiftin bir tarafı
               `data/olaylar_ek17.js`te (dosyanın TEK commit'i var: 78e2a03)
   çare        9 birleştirme + 2 `BILINEN_AYRI` kaydı
   ⚠️ dosyalar BENDE DEĞİL — bu ihlal benim elimle sıfıra inemez
```

---

## 1. ① DEĞİŞMEZ 7 — TEK DEĞİŞKENLİ DENEY

### 1.1 Ölçüm

Aynı `denetle.py`, aynı ayraç, tek değişken **dosya listesi**:

| koşu | nokta | ihlal | beyan | coğrafi-tecrit | ada | küçük-devlet | cephe |
|---|---|---|---|---|---|---|---|
| **A** korfez bağlı (bugün) | 2607 | **488** | 53 | 2120 | 9 | 192 | 53 |
| **B** korfez bağlı değil | 2606 | **486** | 53 | 2123 | 9 | 191 | 53 |
| **C** dolgu komşu sayılmıyor | 2607 | **485** | 53 | 2124 | 9 | 191 | 53 |
| **TABAN** `e53c86a` gerçek ağaç | 2606 | **486** | 53 | 2123 | 9 | 191 | 53 |

Doğan iki kayıt:

```
+ 1871-09-20  Doha (Katar) -> OSMANLI     B-bilinmiyor  574,5 km
              ada: Cübeyl+Doha+Katîf+Lahsa+Ukayr
+ 1916-11-03  Doha (Katar) -> ingiltere   B-bilinmiyor  303,5 km
              ada: Doha+Manama (Bahreyn)
```

### 1.2 🟢 SAYI DEĞİL KÜME KARŞILAŞTIRILDI

`B = 486` ile tabanın `486`sı **aynı sayı** olabilir ama **aynı kayıtlar**
olmayabilirdi (biri düşüp biri doğsaydı sayı yine 486 olurdu). Ölçüldü:
`e53c86a` bir **worktree**ye çıkarıldı, **bugünkü** `denetle.py` oraya
kopyalanıp koşuldu — aynı alet, eski veri.

```
A \ TABAN = 2   (yalnız iki Doha kaydı)      TABAN \ A = 0
B \ TABAN = 0                                 TABAN \ B = 0   ← BİREBİR AYNI KÜME
C \ TABAN = 0                                 TABAN \ C = 1   (Gode, aşağıda)
```

⇒ **Kademe yaması (`892417b`, 1128 kayıt, 29 dosya) ve `4c877bd`
Macaristan düzenlemesi D7'ye SIFIR katkı yaptı** — sayıda değil,
**kümede.** Bunu çıkarım olarak değil ölçüm olarak yazıyorum.
(Kod okuması da aynı şeyi söylüyor: `degismez7` yalnız `lat/lon` ·
`d/v/s` · `enklav` okur; `k:`/`kd:` alanlarını hiç görmez.)

### 1.3 🔴 MEKANİZMA — ŞARTNAMEDEKİ HİPOTEZ ÇÜRÜDÜ

Şartname: *"Katar noktasıysa BEKLENEN'i 488'e çıkarmak doğru olabilir
(dolgu noktası **tasarım gereği kopuk gövde üretir**)."*

**Ölçüldü, öyle olmadı.** Dolgu noktası hiçbir gövde üretmedi — sahibi
yok, hiçbir bileşene giremez. Yaptığı şey başka:

```
Doha, korfez YOKKEN   2 komşu (≤150 km): Ukayr 138,4 · Manama 141,2
                      D7_TECRIT_KOMSU = 2   ⇒  ② "coğrafi tecrit" MUAF
Doha, korfez VARKEN   3 komşu — Katar Yarımadası (dolgu) 59,8 km
                      eşik aşıldı           ⇒  muafiyet DÜŞTÜ, kayıt GÖRÜNDÜ
```

Muaf kovaları da bunu doğruluyor: `cografi-tecrit 2123 → 2120 (−3)` ·
`kucuk-devlet 191 → 192 (+1)` · ihlal `+2`. Yani **üç kayıt tecrit
kovasından çıktı**, biri küçük-devlet muafiyetine düştü, ikisi ihlal oldu.

📌 İki Doha kaydı **zaten doğruydu** — geometri değişmedi. Yalnızca
**görünür oldular.**

### 1.4 🔴 ASIL BULGU — ÖLÇÜT KENDİ ANLAMININ TERSİNİ YAPIYOR

D7'nin ② muafiyeti kendi yorumunda şunu diyor:

> *"150 km'de ≤2 komşusu olan nokta (ada · çöl · step) … Jeju bir ADA,
> Bikaner ÇÖLDE: orada veri eksik değil, **YERLEŞİM SEYREK**."*

Katar dolgu noktası ise `tur:"bolge"` · `kasitli_bosluk:true` ·
`bos:"devletsiz"` · `d:[] s:[]` — **hiçbir zaman sahiplenmez**, ve tam da
**orada yerleşim olmadığı için** konmuştur (`girdi.py` kendi yorumu:
*"yalnızca peteğin nerede biteceğini belirleyen bir DOLGUDUR"*).

⇒ **Seyrekliğin KANITI olan bir nokta, seyreklik ölçütünde KALABALIK
sayılıyor.** Ölçüt doğru çalışıyor; **evreni** yanlış.

Bu, `CLAUDE.md §11`in *"denetim var ≠ o soruyu soruyor"* ailesinin yeni
üyesi ve `§11`in *"aletin evreni değişince alet sessizce yanılır"*
dersinin **girdi tarafı**: alet değişmedi, **girdinin CİNSİ** değişti.

### 1.5 Varyant C — ölçülmüş çare

Ölçüt: **hiçbir döneminin olmadığı nokta** (`d`/`v`/`s` üçü de boş) komşu
sayılmaz. Bugün böyle **71 nokta** var (199 `kasitli_bosluk` noktasının
dönemi olmayanları). Bu noktalar zaten hiçbir bileşene giremez, yani
**flood fill'i etkilemez** — değişen tek şey ② muafiyetinin sayacı.

```
C \ TABAN = 0          hiçbir YENİ ihlal doğurmuyor
TABAN \ C = 1          − 1897-01-01  Gode → habesistan  A-koridor 163,1 km
```

🟢 **Ve C fazladan bir ESKİ vakayı da kapattı:** Gode (Ogaden) aynı
kusurun bugüne kadar görülmemiş bir örneğiydi — o da bir dolgu noktası
yüzünden tecrit muafiyetini kaybetmişti. Yani kusur Katar'la doğmadı,
Katar'la **görünür oldu.**

### 1.6 HÜKÜM

```
🔴 YAPILMAMALI   BEKLENEN_ENKLAV_SORGU = 488
                 Tavanı yükseltmek, aletin yanlış sorusunu KABUL etmek olur.
🟢 YAPILMALI     ① _d7_komsuluk'ta dönemi olmayan noktalar komşu sayılmaz
                 ② BEKLENEN_ENKLAV_SORGU 486 → 485
```

⚠️ **`enklav:true` yazmak da düşünüldü ve REDDEDİLDİ.** İki Doha dönemi
gerçekten kopuk (1871 Osmanlı Lahsa–Necid sancağı ile ana gövde arasında
Kuveyt'e kadar ~370 km'lik yerleşimsiz kıyı var; en yakın Osmanlı noktası
**Kuveyt, 574,5 km**). Ama `enklav:` bir **BEYAN**dır ve motorun yetim-yüz
emme mantığını **durdurur** — yani haritayı değiştirir. Dört saatlik bir
koşunun hemen öncesinde, ölçülmemiş bir geometri değişikliği yazmak
`CLAUDE.md §11`in *"aşamalar arası"* tuzağıdır. **Kayıt olarak burada
duruyor; kararı koordinatörün.**

---

## 2. ② MÜKERRER MADDE — 11 ÇİFTİN 11'İ DE BU GECEDEN

### 2.1 Ölçüm

1264 madde · 20 dosya. Her çiftin **en az bir tarafı** `olaylar_ek17.js`te;
o dosyanın git geçmişinde **tek commit** var (`78e2a03`, 28 Ağu 01:11).

```
BU GECE doğan : 11 / 11          ESKİ : 0
Aynı başlık birden çok dosyada : 0   ⇒ kopyala-yapıştır YOK, YENİDEN YAZIM var
```

📌 Onda birinin `kaynak:` alanı eski maddeyle **aynı slug**
(`karamanogullari` · `habes-eyaleti` · `piri-reis` ·
`kemankes-mustafa-pasa` · `damad-ibrahim-pasa-nevsehirli` · `osman-ii` ·
`mustafa-i` · `tilimsan` · `prut-antlasmasi`). Yani yazan oturum **aynı TDV
maddesine** ikinci kez gitmiş; eldeki maddeyi görmemiş.

### 2.2 Çift çift hüküm

| # | gün | ek17 tarafı | eski taraf | hüküm |
|---|---|---|---|---|
| 1 | 1390-01-01 | I. Bayezid'in Batı Anadolu beyliklerini ilhakı (18 yer) | `ek.js` Batı Anadolu beyliklerinin ilhakı (3 yer) | **MÜKERRER** |
| 2 | 1468-01-01 | Karamanoğulları Beyliği'nin ilhakı (8 yer) | `ek.js` Karaman'ın kesin ilhakı (2 yer) | **MÜKERRER** |
| 3 | 1513-01-01 | Pîrî Reis … en eski dünya haritası | `ek2.js` 1513-03-01 Pîrî Reis'in dünya haritası | **MÜKERRER** |
| 4 | 1552-01-01 | Cezayir Ocaklığı'nın Sahra'ya genişlemesi (14 yer) | `ek5.js` Sâlih Reis'in Sahra seferi (3 yer) | **MÜKERRER** |
| 5 | 1557-01-01 | Habeş Eyaleti'nin kuruluşu (13 yer) | `ek5.js` Habeş Eyaleti: Sevâkin, Masavva… (3 yer) | **MÜKERRER** |
| 6 | 1617-11-22 | Yeni padişah I. Mustafa: solgun çehreli… | `ek5.js` I. Ahmed'in ölümü ve I. Mustafa'nın cülûsu | **EMRE'NİN KARARI** |
| 7 | 1622-05-20 | Genç Osman'ın son saatleri | `ek7.js` Genç Osman'ın … katledilmesi | **MÜKERRER** |
| 8 | 1644-01-31 | Kemankeş Kara Mustafa Paşa'nın idamı | `ek7.js` Kemankeş Mustafa Paşa'nın idamı | **MÜKERRER** |
| 9 | 1711-07-21 | Baltacı–Katerina rivayeti (TDV'nin uyarısı) | `ek5.js` Prut Antlaşması | **AYRI** |
| 10 | 1718-05-09 | Nevşehirli … sadrazam oldu — Lâle Devri | `ek7.js` Nevşehirli … sadrazamlığı | **MÜKERRER** |
| 11 | 1738-08-01 | Semendire'nin geri alınışı | `ek5.js` Özi'nin geri alınışı ve Kırım | **AYRI** |

**#6 niçin ayrı bir kova:** ek17 sürümü bir **portre** (padişah kartviziti
diliyle yazılmış), eski sürüm bir **olay** (`vefat_id:"ahmed1"` taşıyor,
yani I. Ahmed'in vefatını da bağlıyor). İkisi aynı ânı anlatıyor ama farklı
cinsten. Bu bir doğruluk değil **zevk** meselesi — `ORTAK-PAKET-KURALLARI
§1`e göre `senin-kararin`.

**#11 niçin AYRI:** iki madde **ayrı şehirler**, ayrı cepheler; ölçüt
yalnız *"geri alınış"* kelimesinde eşleşiyor. Klasik yanlış pozitif.

**#9 niçin AYRI:** biri antlaşmanın kendisi, öteki TDV'nin *"Katerina
rivayeti asılsızdır"* uyarısı. `BILINEN_AYRI`deki *"olay ↔ sonucu"*
sınıfının kardeşi: **olay ↔ o olay hakkındaki kaynak uyarısı.**

### 2.3 Çare — ve niçin SİLMEK değil BİRLEŞTİRMEK

Sekiz mükerrerin beşinde (**#1 · #2 · #4 · #5**, ve kısmen #11) ek17 sürümü
**çok daha zengin `yer:` listesi** taşıyor (18 · 8 · 14 · 13 yer). Bu
listeler `js/app.js:1691`de metin eşleşmesiyle okunuyor — düz silmek o
yerlerin madde bağını koparır.

⚠️ Ama `Değişmez 2` **etkilenmez**: `denetle.py` `yer:` alanını hiç
okumuyor, kırılma senkronu yalnız **güne** bakıyor ve aynı günde eski madde
zaten duruyor. Yani hangi sürüm silinirse silinsin `Değişmez 2` bozulmaz.
(Ölçüldü: `grep '"yer"' arac/denetle.py` → 0 sonuç.)

**Tarif — her çift için tek satır:**

```
#1  ek17 sürümünü TUT (18 yer, 5 kişi, doğru künye `bayezid-i`),
    ek.js sürümünü SİL. ek.js'in `duygu:"🎉"` alanı ek17'de zaten var.
#2  ek17 sürümünü TUT (8 yer), ek.js sürümünü SİL.
#3  ek2.js sürümünün YAPISAL ALANLARINI TUT (`yer:"Gelibolu"` ·
    `k:"kesif"` · `kisiler` · `duygu`), ek17'nin daha zengin başlığını ve
    UNESCO notunu onun üstüne taşı, ek17'yi SİL —
    🔴 AMA TARİHİ `1513-01-01` YAP (aşağıda ölçüldü).
#4  ek17 sürümünü TUT (14 yer), ek5.js sürümünü SİL.
#5  ek17 sürümünü TUT (13 yer), ek5.js sürümünü SİL.
#6  KARAR EMRE'NİN — ikisi de kalabilir.
#7  ek7.js sürümünü TUT (`vefat_id:"osman2"` taşıyor, ek17'de YOK),
    ek17'nin anlatısını onun başlığına/metnine kat, ek17'yi SİL.
#8  ek7.js sürümünü TUT (`yer` · `kisiler` dolu), ek17'yi SİL.
#10 ek7.js sürümünü TUT, ek17'nin "Lâle Devri" vurgusunu ona kat, SİL.
#9  ve #11  →  `BILINEN_AYRI`
```

🔴 **#7 ve #8'de ek17 sürümü `vefat_id`/`kisiler` TAŞIMIYOR** — eski
sürümü silmek kişi/vefat bağını koparırdı. Bu yüzden bu ikisinde yön
ötekilerin TERSİ.

### 2.4 🔴 YETKİ SINIRI — ② BENİM ELİMLE SIFIRA İNEMEZ

```
data/olaylar_ek17.js      KRONOLOJİ İÇERİK'in  (o oturum 22:00'den beri duruyor)
data/olaylar_ek.js · ek2 · ek5 · ek7     KOORDİNATÖR'ün
arac/denetle.py           sahibi tabloda YAZILI DEĞİL; koordinatörün
                          SAHNELENMİŞ değişikliği var (BEKLENEN_SAHIPSIZ 214→215)
```

Elimdeki dosyalar: `denetim/BULGU-DENETIM-ACIK.md` ·
`denetim/HUKUM-DENETIM-ACIK.json` · `data/yer_yama_denetim.js`.
⇒ Ölçüm ve tarif bende, **uygulama koordinatörde.**

---

## 3. HAZIR YAMALAR

### 3.1 `arac/denetle.py` — D7 dolgu düzeltmesi

`_d7_komsuluk`in sonuna, `return kom`dan hemen önce:

```python
    # 🔴 DOLGU NOKTASI KOMŞU SAYILMAZ — 28 Ağustos 2026, ölçülerek eklendi.
    # ② muafiyeti "burada YERLEŞİM SEYREK mi" diye sorar. Hiçbir dönemi
    # olmayan bir nokta (`kasitli_bosluk` dolgusu) tam da orada yerleşim
    # OLMADIĞI için konmuştur — onu komşu saymak ölçütü TERSİNE çevirir.
    # Vaka: Katar Yarımadası dolgusu 59,8 km'den Doha'nın 3. komşusu oldu,
    # Doha'nın tecrit muafiyeti düştü, 2 kayıt ihlal göründü (488). Aynı
    # kusurun eski bir vakası da vardı: Gode (Ogaden) 1897.
    # Bu noktalar hiçbir bileşene giremez (sahipleri yok), yani flood
    # fill DEĞİŞMEZ — değişen tek şey ②'nin sayacıdır.
    _dolgu = {i for i, y in enumerate(Y)
              if not (y.get("d") or y.get("v") or y.get("s"))}
    if _dolgu:
        kom = [[j for j in k if j not in _dolgu] for k in kom]
    return kom
```

ve `BEKLENEN_ENKLAV_SORGU = 486` → `485` (gerekçe satırıyla).

**Ölçülmüş sonuç:** `488 → 485` · `Değişmez 7 ✓` · yeni ihlal `0`.

### 3.2 `arac/denetle.py` — `BILINEN_AYRI` iki kayıt

```python
    # OLAY ↔ O OLAY HAKKINDAKİ KAYNAK UYARISI — 28 Ağustos 2026.
    # TDV `prut-antlasmasi` maddesi Katerina rivayetinin asılsızlığını
    # AYRICA anlatıyor; atlas da onu ayrı bir madde olarak taşıyor.
    # "Olay ↔ sonucu" sınıfının kardeşi.
    ("Prut Antlaşması — Azak ve Taygan'ın geri alınması",
     "Baltacı Mehmed Paşa ve Çariçe Katerina rivayeti — TDV'nin kendi uyarısı"),
    # AYNI GÜN, AYNI FİİL, AYRI CEPHE: 1737-39 savaşında Semendire (Tuna)
    # ile Özi (Karadeniz) aynı gün geri alındı. Ölçüt yalnız "geri alınış"
    # kelimesinde eşleşiyor — ayırt edici bilgi ÖZEL ADDA.
    ("Semendire'nin Avusturya'dan geri alınışı — 1737-39 Savaşı",
     "Özi'nin geri alınışı ve Kırım'ın Rus istilâsından kurtarılması"),
```

**Beklenen sonuç:** `11 → 9`. Kalan 9, `olaylar*.js` birleştirmeleriyle
kapanır (§2.3).

---

## 3.3 🟢 UYGULANDI — ve `C13` sınavı İKİ YÖNDE de koşuldu

`arac/denetle.py`ye üç düzenleme indi (dosya o sırada `git status`ta
TEMİZDİ — koordinatörün sahnelenmiş `BEKLENEN_SAHIPSIZ` değişikliği
`38b9b7f` ile commit edilmişti, yani çakışma yok):

```
① _d7_komsuluk        dolgu süzgeci      (yeni)
② BEKLENEN_ENKLAV_SORGU   486 → 485
③ BILINEN_AYRI        iki kayıt          (#9 · #11)
```

**Ölçülmüş sonuç — `py arac/denetle.py`:**

```
Değişmez 7  ✓  485 sorgusuz enklav (beklenen 485)      ← ① KAPANDI
Ek denetim  ✗  mükerrer madde: 9 şüpheli çift          ← 11 → 9
```

**`C13` — yeni dal iki yönde de sınandı, üçüncü yönde de:**

| sınav | beklenen | ölçülen | |
|---|---|---|---|
| **GEÇME** yama bağlı | 485 | **485** | ✓ |
| **ATEŞLEME F1** süzgeç etkisiz kılındı | 488 (eski hâl) | **488** | ✓ dal gerçekten çalışıyor |
| **ATEŞLEME F2** her nokta dolgu sayıldı | 0 | **0** | ✓ süzgeç komşuluğu gerçekten siliyor |
| **F3 İDDİA** flood fill değişmedi | ada listeleri aynı | 485 ortak kayıt, **0 fark** | ✓ |

📌 **F3 kasten eklendi.** *"Flood fill değişmez"* cümlesini yamanın
yorumuna yazmıştım; `CLAUDE.md`nin *"silinen kodun mezar taşı, hayatta
kalan kod hakkında bir İDDİADIR"* ve *"ölçmediğini ölçmedim diye yaz"*
dersleri gereği onu **iddia bırakmayıp ölçtüm**: 485 ortak kaydın `ada`
listeleri yamalı ve yamasız hâlde **birebir aynı.**

---

## 3.4 #3 PÎRÎ REİS — TARİH ÖLÇÜLDÜ (TDV okundu)

`islamansiklopedisi.org.tr/piri-reis` · HTTP **200** · **gövde okundu**
(`<title>` testi yetmez, `CLAUDE.md §4②`).

> *"Gelibolu'da çizdiği 919 (1513) tarihli dünya haritası parçası…"*
> *"…Kahire'de 919 (1513) tarihli ilk dünya haritasını … padişaha takdim
> etti (923/1517)."*

```
TDV AY VERMİYOR — yalnız hicrî 919.
hicrî 919  =  8 Mart 1513 – 24 Şubat 1514
```

⇒ `ek2.js`in **`1513-03-01`i AY HASSASİYETİ İDDİA EDİYOR** ama kaynakta
karşılığı yok; üstelik 919'un başlangıcından **bir hafta önce** düşüyor.
`CLAUDE.md §4`ün *"gün bilinmiyorsa `YYYY-01-01` yaz"* kuralı gereği doğru
biçim **`1513-01-01`**.

📌 Yan bulgu: harita **Gelibolu'da çizilmiş**, padişaha **Kahire'de
1517'de takdim edilmiş**. İki maddenin de `yer`/`yer_id`i Gelibolu — yani
**çizim yeri doğru yazılmış**, düzeltilecek tek şey tarih.

---

## 3.5 ALTI ÇİFT KAPANDI — SİLME DEĞİL BİRLEŞTİRME

`mükerrer 7 → 1` · `madde 1262 → 1256` · dört dosya `node --check` temiz ·
**`Değişmez 2` 522 kırılma, 0 açık — bozulmadı.**

⚠️ Kapatmadan önce ölçüm TAZELENDİ ve iyi ki tazelendi: KRONOLOJİ İÇERİK
`#1` ve `#2`yi çoktan kapatmıştı (ek17'den silmiş, koordinatör `ek.js`i
genişletmiş). `§2.3`teki tarifim **o güncellemeden önceki okumaya
dayanıyordu** — yani kendi raporum bayatlamıştı. Uygulamadan önce yeniden
ölçmeseydim, kapanmış bir işi ikinci kez yapacaktım.

**Ve altısının hiçbiri düz silme değil.** `ek17` kayıtları uzun TDV
anlatımları (`d:`) taşıyordu; koordinatörün *"bir maddeyi silmek, taşıdığı
BİLGİYİ silmek olmamalı"* şartını yalnız `yer:` listesine değil **`d:`
metinlerine de** uyguladım.

| # | kalan | taşınan |
|---|---|---|
| 1513 | **ek17** | ek2'nin `k`/`yer`/`kisiler`/`duygu` alanları |
| 1552 | **ek17** | (ek5'in 3 yeri zaten 14'ün içinde) |
| 1557 | **ek17** | "Portekiz'in Kızıldeniz'e sızmasını önlemek" gerekçesi |
| 1622 | **ek7** | Ali Ağa'nın konağı · TDV'nin tasviri · Orta Cami · kulak-burun |
| 1644 | **ek7** | Hocapaşa Çarşısı · cellât Kara Ali · Çarşıkapı türbesi · "Kara" |
| 1718 | **ek7** | 8 Cemâziyelâhir 1130 · Pasarofça bağı · TDV alıntısı |

Silinen her kaydın yerine **dosyanın kendi geleneğine uyan** bir yorum
bırakıldı (`olaylar_ek7.js`te zaten üç örneği vardı). Her yorum üç şeyi
yazıyor: ne silindi · niçin · **neyin nereye taşındığı.**

🔴 **PAKET TARAMASI BİR KARARI DEĞİŞTİRDİ.** `parti-emrelic-0034 / H-0039`:
*"KEMANKEŞ MUSTAFA PAŞA EK OKUMALAR İLE SÜSLE."* ek17'nin 1644 kaydı bu
talebin **karşılığıydı** — düz silinseydi Emre'nin istediği zenginleştirme
sessizce geri alınırdı. Ayrıntılar kalan kayda taşındı ve bu, silme
yorumuna da yazıldı.
⚠️ Tarama sınırı: Türkçe karakterli aramalar kabuk kodlamasında tutmadı,
ASCII kalıplarıyla arandı (`Kemanke` · `Gen. Osman` · `L.le Devri`).
Öteki beşi için hüküm **"bakıldı, bulunamadı"** — bu yöntemin sınırı içinde.

---

## 3.6 `arac/_bagli_mi.py` — İKİ KAPININ NÖBETÇİSİ

Koordinatörün istediği alet (M-1410). Bir gecede **üç** vakası olan bir
kusuru ölçer: `korfez` · `olaylar_ek17` · `serhat`+`kdmacar`.

```
MOTOR      arac/girdi.py  →  GIRDI_DOSYALARI
TARAYICI   index.html     →  <script src="data/...">
```
Biri yazılıp öteki yazılmazsa **hiçbir denetim ötmez.** `index.html`in
kendi yorumu dersi zaten yazmış (*"güncellenecek yer İKİYE düştü"*) —
ders vardı, **ötecek alet yoktu.**

**Üç soru, üçü ayrı kusur sınıfı:** ① motor var/tarayıcı yok · ② tarayıcı
var/motor yok · ③ yükleniyor ama `/^YERLESIMLER_/` desenini tutmadığı için
`window.YERLESIMLER`e **hiç katılmıyor**. ③ niçin gerekli: birleştirme bir
**önek taramasıdır**, yani belirleyici olan dosya adı değil **değişken
adı** — `§7`in *"ayrı dosya vermek, ayrı ad alanı vermek değildir"*
dersinin ters yüzü.

Muafiyet betikte **açık bir sözlükte** ve gerekçesi zorunlu. Dosyanın kendi
yorumundan muafiyet okumak yasak: bir yorum değişir, kimse görmez.

### `C13` sınavı — 5/5, ve `index.html`e DOKUNULMADAN

| sınav | beklenen | ölçülen | |
|---|---|---|---|
| GEÇME · iki liste eşit | kod 0 | 0 | ✓ |
| ATEŞLEME ① bir dosya index'ten çıkarıldı | kod 1 + adı | 1 | ✓ |
| ATEŞLEME ② index'e sahte dosya eklendi | kod 1 + adı | 1 | ✓ |
| ATEŞLEME ③ değişken adı bozuldu | kod 1 + adı | 1 | ✓ |
| MUAF gerçekten susturuyor mu | kod 0 | 0 | ✓ |

Sınav `index_dosyalari` ve `dosya_degiskeni` fonksiyonlarını sahte girdiyle
değiştirerek koşuldu — koordinatörün dosyasına hiç dokunulmadı.

### Bugünkü ölçüm

```
motor 56 dosya · tarayıcı 133 dosya
① 2 ihlal: yerlesimler_serhat.js · yerlesimler_kdmacar.js
② 0   ③ 0
tarayıcıda GÖRÜNMEYEN 3 nokta: Şehirköy (Pirot) · Alacahisar (Kruševac) · Debrecen
motor 2607 nokta görüyor · tarayıcı 2604
```

## 3.7 serhat + kdmacar — **KUSUR**, tasarım değil (üç ölçüm)

```
① DESEN TARANIYOR MU?   index.html:878 `/^YERLESIMLER_/` önek taraması
                        ⇒ satır eklemek GERÇEKTEN işe yarar
                        ⇒ koordinatörün "sahte düzeltme olur" endişesi ÇÜRÜDÜ
② GİT NE DİYOR?         `yerlesimler_serhat.js` index.html'e HİÇ eklenmemiş.
                        169a136 commit'i bir TASARIM İDDİASI yazmış:
                        "yerlesimler_serhat.js → girdi.py · olaylar_serhat.js
                         → index.html". İddia YANLIŞ.
                        `yerlesimler_kdmacar.js` hiç geçmiyor, gerekçesi YOK.
③ KONVANSİYON NE?       Hemen ÜSTÜNDEKİ NOKTA EPİR yorumu TERSİNİ söylüyor:
                        "girdi.py'ye de eklendi; ikisi AYRI kapıdır" —
                        `CLAUDE.md §5` ile uyumlu olan bu.
```

📌 Ve `②` bu projenin *"silinen kodun mezar taşı bir İDDİADIR"* dersinin
kardeşi: **yaşayan kodun yanına yazılan yorum da bir iddiadır.**
`index.html`deki serhat yorumu bir tasarımı *tarif ediyor* gibi duruyor,
oysa ölçülmemiş bir varsayımı **kalıcılaştırmış.** Bir güvence, okuyanı
ölçmekten alıkoyar.

⇒ **İkisi de `index.html`e eklenmeli.** Uygulama koordinatörde —
`index.html` yasak listemde.

---

## 3.8 NÖBETÇİ KAPIYA BAĞLANDI — ve "40+ yanlış alarm" TASNİF EDİLDİ

*(29 Ağustos 2026)*

Koordinatör yayın kapısının `yetim veri dosyası: 45` satırını *"40+ yanlış
alarm"* diye tarif edip `yer_yama_*` ailesini **toptan** muaf tuttu.
Toptan muafiyet ölçüldü ve **iki ayrı cinsi tek kovaya koyduğu** çıktı —
`§11`in *"iki ayrı kusur tek satırda raporlanırsa aynı çare uygulanır"*
tuzağı. 45'in içinde şunlar vardı:

```
🟢 43 YAMA dosyası      tasarım gereği tarayıcıya gitmez — gerçekten muaf
🟡  1 KRONOLOJİ         olaylar_ek19.js: `denetle.py` SAYIYOR,
                        `index.html` YÜKLEMİYOR ⇒ 27 Ağustos'ta
                        `olaylar_ek17`i kaybettiren kusurun AYNI SINIFI
🔴  1 CANLI ÇAKIŞMA     window.KADEME_YAMA — 4 dosya, TEK ad
```

### `olaylar_ek19.js` — kusur DEĞİL, ama kayıtsızdı
Bugün doğmuş (UYGULAMA-0035, Bastille maddesi). Emre'nin 29 Ağustos
kararı ②: 8. boyut açılsın ama **ayara bağlı, varsayılan kapalı**. ARAYÜZ
süzgecinin `kapsam:"konu"` mü `boyut:8` mi okuyacağı **henüz
kesinleşmedi** (M-1518) ⇒ şimdi yüklenirse madde süzgeçsiz görünür, yani
**yüklememek bugün doğru davranış.**
⇒ `MUAF_KRONOLOJI_YETIMI`ne **gerekçesiyle** yazıldı. Kusur değil; ama 45
satırlık düz bir listede **bekleyen mi kusur mu olduğu görünmüyordu.**

### 🔴 `window.KADEME_YAMA` — `§7`in ölçülmüş tuzağı HÂLÂ CANLI
```
kademe_4ff22b.js  239 kayıt   BEKLEYEN sözlüğünde AÇIK (uygulanmamış)
kademe_8beb2b.js   11 kayıt   AÇIK
kademe_d48240.js  111 kayıt   "UYGULANDI, kapali"
kademe_f5c9a5.js  137 kayıt   "UYGULANDI, kapali"
```
Dördü de `window.KADEME_YAMA` tanımlıyor. **İkisi hâlâ açık** ⇒ bekleyen
250 kayıt, onları **tek bağlamda** okuyan bir uygulayıcıda sonuncusu
dışında kaybolur. `CLAUDE.md §7` bunu 16 Ağustos'ta ölçmüş (*"tek tek
okununca 537, birlikte 137 ⇒ %74 görünmez"*) ve zararın gerçekleşmemesini
**tesadüf** diye kaydetmişti. Tesadüf hâlâ tutuyor; **çakışma duruyor.**

### 🟢 VE İKİ ADAY ÖLÇÜLÜP TEMİZE ÇIKTI — negatif sonuç da sonuçtur
```
window.URETIM_IZI   7 dosya · 6'sı TARAYICIYA YÜKLENİYOR · ezişme GERÇEK
                    ama ZARARSIZ: `grep URETIM_IZI js/app.js index.html`
                    → 0 sonuç. Tarayıcı bu değişkeni HİÇ OKUMUYOR;
                    okuyanların hepsi Python ve dosyayı TEK TEK okuyor.
window.KUNYE_YAMA   2 dosya · İKİSİ DE "islendi, kapali" ⇒ ÖLÜ çakışma.
                    Temiz çare `arsiv/`; muafiyete o not düşüldü.
```
⚠️ `URETIM_IZI` en çok yüklenen ve en çok ezişen çiftti — **ilk bakışta
en büyük bulgu gibi duruyordu.** Hüküm vermeden önce *"tarayıcı bunu
okuyor mu"* diye sormak onu ihlal kovasından çıkardı.

### İHLAL / UYARI AYRIMI — ve niçin gerekli
```
YÜKLENEN > 1   ezişme YAYINLANMIŞ SAYFADA   ⇒ İHLAL, yayın DURUR
öteki hâller   ezişme ancak biri dosyaları
               TEK BAĞLAMDA okursa olur      ⇒ UYARI, yayın durmaz
```
Bu kapı **siteyi** yayınlıyor. Yayınlanan çıktıya zarar vermeyen bir
riskle yayını durdurmak kategori hatasıdır ve `renkler.py`nin dersini
tekrarlar: *gürültü üreten denetime kimse bakmaz.*
⚠️ Ama **"durdurmuyor" ≠ "raporlamıyor"**: uyarı her koşuda basılır ve
sayısı `SONUÇ` satırına yazılır — yoksa *"TEMİZ"* satırı onu sessizce
öldürürdü.

### Sınav — toplam 14/14, ve iki dalın yönü TERS çıktı
```
①②③  5/5   (geçme + üç ateşleme + muafiyet)
④⑤   6/6   ⑤ gerçek veride ATEŞLİYOR  ⇒ GEÇME yolu zorlandı
            ④ gerçek veride SUSUYOR    ⇒ ATEŞLEME zorlandı
kapı  3/3   yabancı argümanlarla `denetle()` · `main()` gerçekten
            öldürür mü · nöbetçi patlarsa istisna yukarı çıkıyor mu
```
📌 `C13`ün *"hangi yönün zorlanacağı önceden bilinmez"* ayağının canlı
örneği: **aynı gün, aynı alette, iki dal ters yöne zorlandı.**

### Bağlama
`arac/denetle_yayin.py` son hüküm bloğunun önüne 12 satır; `_bagli`
koşula eklendi. Kapı bugün **çıkış 1** veriyor ama **nöbetçi yüzünden
değil** — üç önceki kalem açık: `git`te izlenmeyen 1 dosya · yetim 45 ·
üretim izi bayat 1.

---

## 4. ÖLÇMEDİĞİM ŞEYLER — açıkça

```
· (ÖLÇÜLDÜ, §3.4 — bu satır kapandı)
· Doha'nın iki döneminin `enklav:true` hak edip etmediği — TARİHEN
  savunulabilir görünüyor ama TDV `katar` / `lahsa` maddeleri OKUNMADI
· Birleştirme sonrası `Değişmez 2`nin GERÇEKTEN bozulmadığı — kod
  okumasıyla gösterildi (`yer:` denetimde hiç okunmuyor), birleştirme
  UYGULANIP koşulmadı
· FERHAT PAŞA 1590'ın canlı olup olmadığı: `isRunning=false`, son hareket
  2026-08-27 22:22 — bu bir ÖLÇÜM, "öldü" bir HÜKÜM ve o koordinatörün
```
