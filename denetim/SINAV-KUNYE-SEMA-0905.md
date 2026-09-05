# SINAV — künye yaması şeması: **kusur `bolge:` değildi, DOSYANIN CİNSİYDİ**

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2968` · **Tarih:** 5 Eylül 2026
> **Cins:** SINAV + DÜZELTME — *`data/` yazılmadı; yalnız `denetim/`
> altındaki KENDİ dosyam yeniden adlandırıldı.*

---

## 0. 🔴 SEVKİN ÖNCÜLÜ YANLIŞTI — `bolge:` EKLEMEDİM, ve sebebi ölçüldü

Sevk şöyle diyordu:
> *"① dört künye için `bolge:` EKLE — değeri tahmin etme, `devletler.js`ten
> OKU."*

Değerleri okudum (`nkore`/`toro` → `dogu-afrika`, `eve-notse`/`ibadan`
→ `bati-afrika`) **ama eklemedim**, çünkü kodu okuyunca eklemenin
**reddi kaldırmayacağı** çıktı:

```python
# arac/_kunye_uygula.py:219
eksik = [a for a in ZORUNLU if not k.get(a)]
if eksik:  red.append(... "şema eksik: " ...)
if i in mevcut:  red.append(... "KİMLİK ÇAKIŞMASI — zaten var")   # ← İKİNCİ KAPI
```
Ve ölçtüm — **dördü de hedefte ZATEN VAR:**
```
nkore      hedefte EVET   mevcut bolge: dogu-afrika
toro       hedefte EVET   dogu-afrika
eve-notse  hedefte EVET   bati-afrika
ibadan     hedefte EVET   bati-afrika
```
> ### ⇒ `bolge:` eklemek reddi **KALDIRMAZ**, gerekçesini
> *"şema eksik"* → *"KİMLİK ÇAKIŞMASI"* yapar.
> Ve bu **daha kötü** olurdu: yanlış bir gerekçeyle reddedilen bir
> yama, okuyanı *"aynı künye iki kez yazılmış"* diye düşündürür.

---

## 1. 🔴 ASIL KUSUR: **YANLIŞ ALET, ve onu ADIM çağırdı**

```
`_kunye_uygula.py`  YENİ künye EKLER  (mevcut id'yi REDDEDER)
benim dosyam        MEVCUT künyenin `kaynak:` alanını DÜZELTME ÖNERİSİ
```
Aracın varsayılan taraması:
```python
VARSAYILAN = "denetim/YAMA-KUNYE-*0905*.json"
```
Dosyamın adı **`YAMA-KUNYE-HIMAYE-UCUZ-0905.json`** idi ⇒ **glob onu
sahiplendi.** İçerik bir künye yaması değildi; **adı öyle diyordu.**

📌 Bu, bu gecenin *"eşleşme ≠ doğru şey"* ailesinin **dosya adı** yüzü —
ve `§7`nin *"ayrı dosya vermek ayrı ad alanı vermek değildir"* dersinin
kardeşi: orada `window.<AD>` çakışıyordu, burada **bir glob deseni**.
⇒ ***Bir glob bir AD SÖZLEŞMESİDİR: ad, dosyanın CİNSİNİ ilan eder.***

### 🟢 ÇARE VE ÖLÇÜMÜ
```
git mv denetim/YAMA-KUNYE-HIMAYE-UCUZ-0905.json \
       denetim/ONERI-KAYNAK-HIMAYE-4-0905.json
```
`ONERI-` öneki benim bu geceki öteki öneri dosyalarımın (
`ONERI-KAYNAK-7-0905.json` · `ONERI-SOZLESME-5-0905.json`) sözleşmesi
ve glob onu **tutmuyor.**

```
ÖNCE   TOPLAM istek 27 · KABUL 23 · RED 4   (dördü de benim)
SONRA  TOPLAM istek 23 · KABUL 23 · RED 0 · UYARI 0
```
⇒ **RED 4 → 0. Ölçüldü.** Ve öneri dosyasının **içeriği değişmedi**.

---

## 2. ① ŞEMANIN TAMAMI — koddan okundu

```python
# arac/_kunye_uygula.py:45
ZORUNLU  = ("id", "ad", "f", "t", "bolge")
ONERILEN = ("ozet", "kaynak")
```
Ve **üçüncü bir kapı** var, listede yazılı değil ama kodda:
```
③ `bolge` değeri HEDEFTEKİ bölge kümesinde OLMALI (27 cins)
   → değilse RED: "bölge listede YOK"
④ `id` hedefte OLMAMALI → varsa RED: "KİMLİK ÇAKIŞMASI"
```

🟢 **Ve `ONERILEN`in niçin zorunlu olmadığı kodda gerekçelendirilmiş** —
alıntılamaya değer:
> *"`ozet` ve `kaynak` zorunlu DEĞİL ama eksikse UYARILIR: `§4`ün
> «kaynağı yazılmayan bilgi, kaynağı olmayandan ayırt edilemez» kuralı
> bir REDDETME ölçütü değil bir GÖRÜNÜRLÜK ölçütüdür — reddedersek
> oturum onu gizlemeye değil, **uydurmaya** yönelir."*
📌 Bu, `§4`ün bir aleti tasarlarken **doğru** uygulanmış hâli: kural
sıkıysa uydurma davet edilir.

---

## 3. ② ON İKİ YAMA DOSYASININ UYUM TABLOSU

Aracın **kendi ayrıştırıcısıyla** (`kunyeleri_cikar`) tarandı — kendi
ayrıştırıcımı yazmadım (`§11`).

| dosya | künye | şema TAM | ozet | kaynak | ÇAKIŞMA | bölge geçersiz |
|---|---:|---:|---:|---:|---:|---:|
| `YAMA-KUNYE-1923-0905.json` | 10 | 10 | 10 | 10 | 0 | 0 |
| `…-AIR-HADRAMUT-…` | 3 | 3 | 3 | 3 | 0 | 0 |
| `…-AMMAR-…` | 1 | 1 | 1 | 1 | 0 | 0 |
| `…-ARMA-…` | 1 | 1 | 1 | 1 | 0 | 0 |
| `…-ARNAVUTLUK-…` | 2 | 2 | 2 | 2 | 0 | 0 |
| `…-HURMUZ-…` | 1 | 1 | 1 | 1 | 0 | 0 |
| `…-NORSE-…` | 1 | 1 | 1 | 1 | 0 | 0 |
| `…-PIOMBINO-…` | 1 | 1 | 1 | 1 | 0 | 0 |
| `…-SUDAN-…` | 1 | 1 | 1 | 1 | 0 | 0 |
| `…-SUTAY-YELMAN-…` | 2 | 2 | 2 | 2 | 0 | 0 |
| **`…-HIMAYE-UCUZ-…` (benim)** | 4 | **0** | 0 | 0 | **4** | 0 |
| `…-T-0905.json` | **0** | — | — | — | — | — |

```
TOPLAM 27 künye · şema TAM 23 · şema EKSİK 4 · ÇAKIŞMA 4 · bölge geçersiz 0
```

> ### 🟢 ⇒ ÖTEKİ ON BİR DOSYA TEMİZ
> 23 künyenin **23'ü** şema-tam, **23'ü** hem `ozet` hem `kaynak`
> taşıyor, **0** çakışma, **0** geçersiz bölge.
> Sevkin *"onlar da aynı kusuru taşıyor olabilir"* endişesi **ölçüldü ve
> çıkmadı.** Şanslı değillerdi — **doğru cins dosyalardı.**

---

## 4. 🟡 VE İKİNCİ BİR VAKA — aynı sınıf, başka oturum

```
YAMA-KUNYE-T-0905.json   →  0 künye
anahtarları: _NOT · oturum · tarih · sevk ·
             🔴_ONERIYI_BEN_YAPMISTIM_VE_TERS_CIKTI · olcum · sonuc ·
             _ACIK_KALEM · _OLCMEDIKLERIM
```
Bu bir **bulgu dosyası**, künye yaması değil — ama glob onu da
sahipleniyor. Bugün zararsız (0 künye üretiyor, sessizce geçiliyor),
ama:
🔴 **`0 künye` bir SESSİZ SIFIRDIR.** Araç *"0 künye"* diye basıyor ve
kimse durmuyor; yarın o dosyaya künye biçimli bir alan eklenirse
**istenmeden uygulanır.**
⇒ İki dosya, iki ayrı oturum, **aynı kusur**: yama olmayan bir dosya
yama glob'una adlandırılmış.

---

## 5. DAMGALAR

```
🔴 SEVKİN ÖNCÜLÜNÜ ÇÜRÜTTÜM  `bolge:` eklemek reddi KALDIRMAZDI —
               ikinci kapı (KİMLİK ÇAKIŞMASI) devreye girerdi.
               Değerleri OKUDUM ama EKLEMEDİM.
🟢 ÖLÇTÜM      dördü de hedefte VAR (591 künye içinde)
🟢 ÇARE        dosya glob'dan çıkarıldı (`ONERI-` öneki) ·
               RED 4 → 0 · içerik DEĞİŞMEDİ
🟢 OKUDUM      şemanın tamamı: ZORUNLU 5 · ÖNERİLEN 2 · +2 gizli kapı
               (bölge kümesi · id çakışması)
🟢 TARADIM     12 dosya · aracın KENDİ ayrıştırıcısıyla
🟢 ÇÜRÜTTÜM    "öteki dosyalar da aynı kusuru taşıyabilir" — 23/23 temiz
🟡 BULDUM      ikinci vaka: `YAMA-KUNYE-T-0905.json` 0 künye ·
               bir bulgu dosyası, glob'da duruyor
⚪ ÖLÇMEDİM    `kaynak:` alanını GERÇEKTEN güncelleyecek bir aracın
               var olup olmadığını — `_sahiplik_uygula.py` yerleşim
               içindir, künye alanı için bir eşi ARAMADIM
🔴 YAZMADIM    `data/` altına hiçbir şey. Yalnız kendi `denetim/`
               dosyamı yeniden adlandırdım.
```

---

## 6. TESLİM — sayıyla

```
① ŞEMA      ZORUNLU: id · ad · f · t · bolge
            ÖNERİLEN: ozet · kaynak (eksikse UYARI, RED değil — ve
            kodun kendi gerekçesi §4'e dayanıyor)
            +2 GİZLİ KAPI: bölge kümesinde olmalı · id ÇAKIŞMAMALI
② UYUM      12 dosya · 27 künye · şema TAM 23 · öteki 11 dosya TEMİZ
③ KUSUR     `bolge:` DEĞİLDİ — dosyanın CİNSİ. Glob bir ad sözleşmesi.
④ ÇARE      yeniden adlandırma · RED 4 → 0 ÖLÇÜLDÜ
⑤ İKİNCİ VAKA  YAMA-KUNYE-T-0905.json — 0 künye, sessiz sıfır
```

---
---

# EK — GLOB DENETİMİ: **bir yama hiçbir alete bağlı değil**

> **Sevk:** `M-2975` · aynı gün · *ölçüm, hüküm yok, veri yazılmadı.*

## G1. ① BEŞ UYGULAYICI — ve **yalnız İKİSİ** `denetim/` glob'u kullanıyor

Sevk *"üç uygulayıcı"* diyordu; kodu taradım, **beş** var ve girdi
biçimleri farklı:

```
_kunye_uygula.py      denetim/YAMA-KUNYE-*0905*.json     GLOB
_kronoloji_uygula.py  denetim/KRONOLOJI-*0905*.json      GLOB
_sahiplik_uygula.py   data/  dizin taraması  ^yer_yama.*\.js$
                      🔴 `denetim/` altına HİÇ BAKMIYOR
_kademe_uygula.py     data/yer_yama_kademe.js + kademe2.js   SABİT
_bayat_uygula.py      denetim/HUKUM-BAYAT.json               SABİT
```
⇒ **`denetim/*.json` yazan bir oturumun yamasını yalnız İKİ alet
görebilir.** Ötekiler `data/` tarafında çalışıyor.

## G2. ② GLOB'UN TUTTUKLARI — ve **iki sessiz sıfır**

```
YAMA-KUNYE-*0905*  → 12 dosya · 11'i 🟢 doğru cins
   🔴 YAMA-KUNYE-T-0905.json           0 künye
KRONOLOJI-*0905*   → 11 dosya
   🔴 KRONOLOJI-ZEND-1794-0905.json    0 madde
       (aracın KENDİ okuyucusuyla doğrulandı: kuru koşu
        "yama KRONOLOJI-ZEND-1794-0905.json  0 madde" diyor)
```
İkisi de aynı sınıf: **glob sahipleniyor, alet hiçbir şey bulamıyor,
ve `0` basıp geçiyor.** O sıfır *"bu dosyada kayıt yok"* değil,
*"bu dosya o cinsten değil"* demek — **ve alet ikisini ayırt etmiyor.**

## G3. 🔴🔴 ③ TERS YÖN — **21 dosyayı hiçbir glob tutmuyor**

```
denetim/*0905*.json toplam      43
glob'un TUTMADIĞI               21
   bunlardan `YAMA-` adlı         4   ← 🔴 sessiz kayıp riski
   `ONERI-` adlı                  7   ← tasarım gereği (aşağıda)
   ölçüm/bulgu adlı              10   ⚪ sorun yok
```

### 🔴 EN AĞIRI: `YAMA-1923-0905.json` — **ÇİFT KAÇIRMA**

```
içerik   "maddeler": 11 öğe
alanlar  kova · id_onerisi · ad_onerisi · f · t · bolge · ozet · kaynak · not
```
Bu **gerçek bir künye yaması** — `f`, `t`, `bolge`, `ozet`, `kaynak`
hepsi yerinde. Ama iki ayrı yerden kaçıyor:
```
① ADI     `YAMA-1923-*`   ≠  `YAMA-KUNYE-*`   ⇒ glob TUTMUYOR
② ALANI   `id_onerisi` / `ad_onerisi`  ≠  `id` / `ad`
          ⇒ glob tutsaydı BİLE `kunyeleri_cikar` **0 KAYIT** görürdü
```
🔴 **Ölçüldü: `kunyeleri_cikar(YAMA-1923)` = 0.**
⇒ **11 künye merge'de sessizce kaybolur** — ve hiçbir denetim ötmez.
📌 İki bağımsız kusur aynı dosyada: biri düzeltilse öteki hâlâ yutardı.

### 🟡 `YAMA-1923-DUZELTME-0905.json` — doğru cins, YANLIŞ KATMAN
```
"duzeltmeler": 4 öğe · alanlar: nokta · eski · yeni · kaynak
```
Bu bir **nokta** düzeltmesi — `_sahiplik_uygula.py`nin alanı. Ama o alet
`data/yer_yama*.js` okuyor, `denetim/*.json` **değil.** ⇒ Hiçbir alet
almaz.

### ⚪ `YAMA-HAYALET-IRAN-0905.json` · `YAMA-ZEND-KACAR-0905.json`
Bulgu/ölçüm dosyaları (`🔴_HUKUM_VERILMEDI` · `olcmediklerim` gibi
anahtarlar). `YAMA-` adı **yanıltıcı** — `YAMA-KUNYE-T` ile aynı sınıf.
⇒ Bugün zararsız; ama üç dosya aynı gece aynı yanlış öneki aldı.

## G4. ③b ⇒ **BENİM DOSYAMI HANGİ ALET UYGULAYACAK? — HİÇBİRİ**

Sevkin doğrudan sorusu. Ölçtüm:
```
ONERI-KAYNAK-HIMAYE-4-0905.json
   `kunyeleri_cikar` → 4 KAYIT görüyor  (yani glob'da olsa claim edilirdi)
   ama o alet YENİ künye ekler; benim dördü hedefte VAR ⇒ RED
   ve `denetim/` glob'u olan öteki alet KRONOLOJI, konusu değil
```
> ### 🔴 CEVAP: **künyenin bir ALANINI güncelleyen uygulayıcı YOK.**
> `_sahiplik_uygula.py` `kaynak`/`bos`/`neden`/`not` alanlarını
> günceller ama **yerleşim** için (`yerlesimler*.js`), künye için değil.
> ⇒ Benim dört `kaynak:` metnim **elle ve tek elden** inecek. Bu bir
> kusur değil bir **boşluk**, ve yedi `ONERI-*` dosyasının tamamı aynı
> durumda.

## G5. ④ TABLO — glob × dosya × kayıt

| glob | dosya | kayıt | hüküm |
|---|---|---:|---|
| `YAMA-KUNYE-*` | 11 dosya | 23 | 🟢 doğru cins |
| `YAMA-KUNYE-*` | `…-T-0905` | **0** | 🔴 yanlış cins (bulgu dosyası) |
| `KRONOLOJI-*` | 10 dosya | 218 | 🟢 doğru cins |
| `KRONOLOJI-*` | `…-ZEND-1794-…` | **0** | 🔴 yanlış cins |
| *(hiçbiri)* | `YAMA-1923-0905` | **11 künye** | 🔴🔴 KAYBOLUYOR |
| *(hiçbiri)* | `YAMA-1923-DUZELTME` | 4 nokta | 🔴 yanlış katman |
| *(hiçbiri)* | `YAMA-HAYALET-IRAN` · `YAMA-ZEND-KACAR` | — | ⚪ bulgu, adı yanıltıcı |
| *(hiçbiri)* | 7 × `ONERI-*` | — | ⚪ uygulayıcısı YOK (boşluk) |
| *(hiçbiri)* | 10 × ölçüm/bulgu | — | ⚪ sorun yok |

## G6. DAMGALAR — EK

```
🔴 DARALTTIM   sevk "üç uygulayıcının glob deseni" diyordu; BEŞ alet var
               ve yalnız İKİSİ `denetim/` glob'u kullanıyor
🔴 BULDUM      `YAMA-1923-0905.json` — 11 künyelik GERÇEK yama, hiçbir
               glob tutmuyor VE alan adları da tutmuyor (ÇİFT kaçırma)
🔴 BULDUM      `YAMA-1923-DUZELTME` — doğru cins, yanlış katman
🔴 BULDUM      ikinci sessiz sıfır: `KRONOLOJI-ZEND-1794` 0 madde
               (aracın KENDİ kuru koşusuyla doğrulandı)
🟢 CEVAPLADIM  benim dosyamı hangi alet uygular: HİÇBİRİ — künye ALAN
               güncelleyicisi YOK. Boşluk, kusur değil.
⚪ ÖLÇMEDİM    `YAMA-1923-0905`in 11 künyesinin şema-tam olup olmadığını
               (alan adları farklı; `id_onerisi`→`id` eşlemesi
               yapılmadan sınanamaz — ve o eşlemeyi YAPMADIM)
⚪ ÖLÇMEDİM    `data/` tarafındaki `yer_yama*.js` dosyalarının
               `_sahiplik_uygula` tarafından tam kapsanıp kapanmadığını
🔴 YAZMADIM    hiçbir dosyayı düzeltmedim — üçü de başka oturumların
```

## G7. TESLİM — EK, sayıyla

```
① UYGULAYICI   5 alet · 2'si `denetim/` glob'u · 3'ü `data/` ya da sabit
② YANLIŞ CİNS  2 sessiz sıfır (YAMA-KUNYE-T · KRONOLOJI-ZEND-1794)
③ TUTULMAYAN   43 artefaktın 21'i · bunların 4'ü `YAMA-` adlı
   🔴 KAYIP     YAMA-1923-0905 — 11 künye, ÇİFT kaçırma
   🔴 KATMAN    YAMA-1923-DUZELTME — 4 nokta, yanlış alet
   ⚪ AD         YAMA-HAYALET-IRAN · YAMA-ZEND-KACAR — bulgu dosyası
④ BOŞLUK       künye ALAN güncelleyicisi YOK ⇒ 7 `ONERI-*` elle iner
```

---
---

# EK 2 — 21'in tasnifi, ve **`denetim/` altında 397 kayıt bekliyor**

> **Sevk:** `M-2984` · aynı gün · *ölçüm, hüküm yok, veri yazılmadı.*

## H1. 🔴 ÖNCE: MANŞET DÜZELTMESİ KABUL — ve bir kademe daha inceldi

Koordinatör *"11 değil ~4"* dedi. **Bağımsız ölçtüm, doğru — ve sayı
biraz farklı:**
```
YAMA-1923-0905          11 öğe ·  8 kimlik  (3 öğe KİMLİKSİZ)
YAMA-KUNYE-1923-0905    10 öğe · 10 kimlik  ← doğru adlı, glob TUTUYOR
ORTAK                    5   harezm-halk-cumhuriyeti · irak-kralligi ·
                             rif-cumhuriyeti · suriye-lubnan-mandasi · tannu-tuva
YALNIZ kaçanda           3   fransiz-guyanasi · hollanda-guyanasi · ingiliz-guyanasi
kimliksiz öğe            3
⇒ GERÇEK KAYIP: 3 kimlik + 3 kimliksiz öğe   (11 DEĞİL)
```
🟢 **Kusur yöntemimdeydi:** kaybı **alete karşı** ölçtüm (*"glob bunu
tutmuyor"*), **öteki artefaktlara karşı** ölçmedim.
📌 ***Bir kaybı ölçerken, kaybolanın BAŞKA BİR YERDEN gelip gelmediği
de ölçülür.*** Bulgu gerçekti, büyüklüğü değil.

## H2. ① 21 DOSYANIN TASNİFİ — ve çoğu **kendi niyetini yazmış**

Ayırt edici soru sevkin verdiği: *bu dosya `data/` altında bir şey
DEĞİŞTİRMEYİ mi amaçlıyor?* Cevabı çoğunda dosyanın **kendi üst
beyanında** buldum.

### ⚪ BULGU / ÖLÇÜM — hiçbir şey inmeyecek (doğru durum) · **6**
```
BEYAN-KUSAK-0905          "🔴 BEYAN TÜRÜ — NOKTA YAZILMADI (M-2721)"
SEYREKLIK-DUNYA-0905      "🔴 ÖLÇÜM TURU — NOKTA YAZILMADI (M-2711)"
ONGORU-BARKA-DOGU8-0905   öngörü dosyası, ölçümden ÖNCE yazılmış
YAMA-HAYALET-IRAN-0905    "BU BİR YAMA DEĞİL, BİR RET GEREKÇESİDİR"
YAMA-ZEND-KACAR-0905      "🔴 HÜKÜM VERİLMEDİ — üç yol ölçüldü"
YERLESIM-SIBIRYA-0905     içerik listesi boş
```
⚠️ Son ikisinin adı `YAMA-` ile başlıyor ama **yama değiller** — dün
bildirdiğim ad sözleşmesi boşluğunun aynısı.

### 🟡 ÖNERİ — merge'de ELLE inecek (boşluk, kusur değil) · **8**
```
ONERI-KAYNAK-7-0905                7 künye  `kaynak:` metni
ONERI-KAYNAK-HIMAYE-4-0905         4 künye  `kaynak:` metni   (benim)
ONERI-SOZLESME-5-0905              5 künye  `ozet:` beyanı    (benim)
ONERI-SOZLESME-11-0905            11 künye  `ozet:` beyanı
ONERI-V-KANON-0905                13 kanon + 16 şüpheli
ONERI-KRONOLOJI-ISG-0905           3 madde önerisi
ONERI-KRONOLOJI-MISIR-KRALLIK      1 madde   ← ⚠️ aşağıda
DUZELTME-KRONOLOJI-GUN-0905        4 gün düzeltmesi
```
🟢 Sekizinin de üst beyanı **açıkça** *"ÖNERİDİR, UYGULANMADI"* diyor.
🔴 Ve `DUZELTME-KRONOLOJI-GUN` niçin ayrı tutulduğunu **kendisi
yazmış**: *"`_kronoloji_uygula.py`nin APPEND-ONLY olması nedeniyle
ayrı tutuldu — her kayıt MEVCUT bir maddenin GÜNÜNÜ değiştirme
ÖNERİSİDİR."* ⇒ Alet ekler, güncellemez; benim künye vakamın
**kronoloji tarafı.** Aynı boşluk, iki katmanda.

⚠️ **`ONERI-KRONOLOJI-MISIR-KRALLIK` benim sayacımda `0 öğe` göründü** —
çünkü `madde` bir **sözlük**, liste değil. Sayacım listeleri sayıyor.
🔴 Bu benim aletimin *"0 ≠ yok"* vakası; elle okuyunca **1 madde** var.

### 🔴 UYGULANMASI GEREKEN ama alete bağlı DEĞİL · **1 JSON + 6 rapor**
```
YAMA-1923-0905            künye yaması · ÇİFT KAÇIRMA (ad + alan adı)
                          gerçek kayıp: 3 kimlik + 3 kimliksiz öğe
```
Ve **altı `YERLESIM-*` / `YAMA-1923-DUZELTME` JSON'u aslında RAPOR** —
uygulanabilir biçimleri `denetim/yer_yama_*.js` dosyalarında. Bunu
`YAMA-1923-DUZELTME` **kendisi söylüyor**:
> *"Uygulanabilir yama: `denetim/yer_yama_1923_duzeltme.js`"*

⇒ **Asıl 🔴 kova JSON'larda değil, `.js` dosyalarında.**

---

## H3. 🔴🔴 ASIL BULGU: `denetim/` ALTINDA **32 DOSYA · 397 KAYIT** BEKLİYOR

`_sahiplik_uygula.py` yalnız **`data/`** dizinini tarıyor
(`^yer_yama.*\.js$`). Ölçtüm:

```
data/    altında yer_yama*.js      58 dosya   ← alet BUNLARI görüyor
denetim/ altında yer_yama*.js      32 dosya · 397 KAYIT
                                   🔴 alet BUNLARI GÖRMÜYOR
data/'da aynı adla var olan          0        ← HİÇBİRİ taşınmamış
```

**En büyükleri:**
```
yer_yama_zend_kacar.js       132 kayıt      yer_yama_egeadalari.js     10
yer_yama_misir_himaye.js      56            yer_yama_gronland_col.js    9
yer_yama_tunus.js             36            yer_yama_barka_dogu8.js     8
yer_yama_doguasya.js          19            yer_yama_sibirya_beyan.js   8
yer_yama_litvanya.js          19            yer_yama_zaza.js            7
yer_yama_yunananakara.js      17            … ve 21 dosya daha
yer_yama_onikiada.js          13
yer_yama_fizan.js             12
```

### 🟢 VE BU BİR KUSUR DEĞİL — ŞU AN DOĞRU DAVRANIŞ
Koşu 5b canlı ve `data/*.js` **YASAK**. Oturumlar yazamadıkları için
`denetim/`e koymuşlar — **kural gereği doğru.** Ve koordinatörün
kendi kuyruğunda zaten bir *"önce `data/`ye TAŞI"* adımı (⑥) var.

### 🔴 AMA RİSK GERÇEK VE ÖLÇÜLEBİLİR
```
o adım ATLANIRSA ya da EKSİK yapılırsa → 397 kayıt sessizce kaybolur
ve hiçbir denetim ötmez: `_sahiplik_uygula` onları hiç GÖRMEDİĞİ için
"eksik" diye de raporlamaz.
```
⇒ **Bu tablo o adımın MANİFESTOSUDUR.** Taşıma sonrası tek sınav:
```
denetim/ altında kalan yer_yama*.js  →  0 OLMALI
data/ altındaki yer_yama*.js         →  58 + 32 = 90 OLMALI
`_sahiplik_uygula.py` kuru koşusu    →  ~397 yeni kayıt görmeli
```

## H4. DAMGALAR — EK 2

```
🟢 DOĞRULADIM  koordinatörün manşet düzeltmesi — ve inceldi:
               gerçek kayıp 3 kimlik + 3 kimliksiz öğe (11 değil, ~4 değil)
🔴 KENDİ YÖNTEM KUSURUM  kaybı ALETE karşı ölçtüm, ÖTEKİ ARTEFAKTLARA
               karşı ölçmedim
🟢 TASNİF      21 dosya: ⚪ 6 bulgu · 🟡 8 öneri · 🔴 1 künye yaması +
               6 rapor (uygulanabilir biçimleri `.js`te)
🔴🔴 BULDUM    `denetim/` altında 32 `yer_yama*.js` · 397 kayıt ·
               `data/`ya taşınmış 0 · alet hiçbirini GÖRMÜYOR
🟢 AMA         bu şu an DOĞRU davranış (koşu canlı, `data/` yasak) —
               kusur değil, BEKLEYEN İŞ. Kuyruğun ⑥ adımı zaten var.
🔴 KENDİ ALETİM  `ONERI-KRONOLOJI-MISIR-KRALLIK`i "0 öğe" saydım —
               `madde` bir SÖZLÜK, listem sözlük saymıyor. 1 madde var.
               Kendi "0 ≠ yok" vakam.
⚪ ÖLÇMEDİM    397 kaydın şema-tam olup olmadığını — yalnız SAYDIM
⚪ ÖLÇMEDİM    `denetim/`deki 20 `ARAC-*.js`in bir yama olup olmadığını
               (adları alet gibi duruyor, açmadım)
🔴 YAZMADIM    hiçbir dosyayı taşımadım — `data/` YASAK ve dosyalar
               başka oturumların
```

## H5. TESLİM — EK 2, sayıyla

```
① MANŞET      YAMA-1923 kaybı: 3 kimlik + 3 kimliksiz öğe (11 DEĞİL)
② TASNİF      21 dosya → ⚪ 6 · 🟡 8 · 🔴 7
③ 🔴🔴 ENVANTER  denetim/ altında 32 `yer_yama*.js` · 397 kayıt ·
              taşınmış 0 · `_sahiplik_uygula` hiçbirini görmüyor
④ SINAV       taşıma sonrası: denetim/'de 0 · data/'da 90 ·
              kuru koşuda ~397 yeni kayıt
⑤ BOŞLUK      künye ALAN güncelleyicisi yok (7 `ONERI-*`) ·
              kronoloji GÜN güncelleyicisi de yok (1 `DUZELTME-*`)
              ⇒ aynı boşluk, İKİ katmanda
```
