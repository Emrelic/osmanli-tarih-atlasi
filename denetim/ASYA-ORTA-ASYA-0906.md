# ASYA — TUR 2: ORTA ASYA KOLU (âtıl künyeler)

**Oturum:** ASYA · 1.MURAT sevki · 6 Eylül 2026
**Cins:** ÖLÇÜM — **veri yazılmadı**, **commit edilmedi** (koordinatörün
yeni protokolü: `denetim/` yaz, commit'i ona bırak).

---

## SONUÇ — DÖRT KALEMİN DÖRDÜ DE OYNADI
```
🟢 buhara   evren TAM 6 — şartnamenin tahmini BİREBİR doğru
🔴          …ama `buhara` künyesinin `t:`si TDV ile ÇELİŞİYOR
🟢 harezm   evren 4 DEĞİL **5** — bir nokta şartnamede yok
🔴 turkistan-assr  künye YOK, ve YARATILMASI TARTIŞMALI (aşağıda)
🔴 tannu-tuva      şartnamenin gösterdiği nokta YANLIŞ ÖZNE
```

## ① `buhara-halk-cumhuriyeti` — evren TAM, ama TARİH ÇELİŞİYOR

Ölçüt kutu değil **öncül kimlik**: `s:` zincirinde `buhara` dönemi 1900
sonrasına kadar süren noktalar. (İlk turda kutu denedim ve 1507-1510
Şeybânî dönemi yüzünden Horasan'ı topladı — 45 sahte aday. Ölçüt
değiştirildi.)

```
Buhara · Karşi (Nahşeb) · Şehrisebz (Kiş) · Termez · Hisar · Külâb
= 6 nokta, hepsi  `buhara 1500-01-01 → 1920-09-02` sonra `sovyet-rusya`
```
🟢 Şartname *"gerçek küme muhtemelen ~6 (Buhara · Karşi · Şehrisebz ·
Termez · Hisar · Külâb)"* diyordu — **altısı da birebir doğru.**
🔵 Buhara'nın kendisi cascade'de `ORTADOGU-IRAN` kovasında (lon 64,42),
ötekiler `GUNEY-ORTA-ASYA`. Kimlik kalemi bölünmediği için hepsi bende.

### 🔴 VE BURADA ŞARTNAMENİN BİLMEDİĞİ BİR ÇELİŞKİ VAR
```
veri     `buhara` biter          1920-09-02
künye    `buhara-halk-cumhuriyeti` başlar  1920-10-08     ⇒ 36 GÜN BOŞLUK
TDV `buhara`: "1920 yılı AĞUSTOS SONUNDA son emîr Âlim Han Kızılordu'nun
   şehri işgali sonunda tahtından uzaklaştırıldı ve **6 EKİM 1920'de
   Buhara Hanlığı İLGA EDİLDİ**."
```
⇒ Üç tarih var ve **verininki kaynaksız**: TDV emirin uzaklaştırılmasını
*"Ağustos sonu"* diyor (2 Eylül değil) ve hanlığın **ilgasını 6 Ekim**.
🟢 `buhara` `t:`si **1920-10-06**'ya çekilirse boşluk **36 gün → 2 gün**e
iner, ve o iki gün (6→8 Ekim) **tarihen gerçek** — ilga ile ilânın arası.
🔵 Şartname bu kalemi *"künye+renk VAR, 12 nokta kaba sayıldı"* diye
tarif ediyordu; tarih tarafına hiç bakmamış.

## ② `harezm-halk-cumhuriyeti` — 4 DEĞİL **5**
```
Küngrat · Köhne Ürgenç (Gürgenç) · Hîve · Yeni Ürgenç · Hazârasp
= 5 nokta, hepsi  `hive 1747-06-20 → 1920-04-26` sonra `sovyet-rusya`
```
🔴 Şartname dördünü sayıyor (*"Hîve · Hazârasp · Yeni Ürgenç · Küngrat —
kutu TEMİZ çıktı"*); **`Köhne Ürgenç (Gürgenç)` eksik.** Kutu ölçümü onu
kaçırmış.
🟢 **Tarihler BURADA TUTUYOR:** veri `hive` 1920-04-26'da bitiyor, künye
`f:1920-04-26` — birebir. Boşluk YOK.
🔴 **Ama gün KAYNAKSIZ:** TDV `hive` slug'ı **302 ÖLÜ**. Kapsayıcı
`ozbekistan` maddesi olayı doğruluyor ama **gün vermiyor**:
> *"1920'de Buhara Halk Sovyet Cumhuriyeti ile Hîve'de Hârizm Halk
> Cumhuriyeti teşkil edildi."*
⇒ `1920-04-26` veride duruyor, TDV'de dayanağı **bulunamadı**. Akademik
kaynak aranmalı — ya da `§4` gereği yıl hassasiyetine düşürülmeli.

## ③ 🔴 `turkistan-assr` — KÜNYE YOK, VE YARATILMASI TARTIŞMALI

Şartnamenin adayları ölçüldü — **hiçbiri bir Türkistan kimliğinden
geçmiyor**, beşi de doğrudan Rusya'ya bağlanıyor:
```
Taşkent   hokand 1809→1865-06-17 · rusya → 1917 → sovyet-rusya
Hokand    hokand 1710→1876-02-19 · rusya → …
Hucend    hokand 1802→1866-05-24 · rusya → …
Semerkant buhara 1500→1868-05-14 · rusya → …
Cizzah    buhara 1500→1866-10-18 · rusya → …
```
🟢 TDV `turkistan` tarihi VERİYOR ve üçünü birlikte anıyor:
> *"Bolşevik devrimi esnasında Türkistan'da **Türkistan Sovyet Sosyalist
> Cumhuriyeti (30 Nisan 1918)**, Buhara Sovyet Halk Cumhuriyeti ve
> Hârizm Sovyet Halk Cumhuriyeti gibi **yerel kuruluşlar** ortaya çıktı."*

🔴 **AMA BİR AYRIM VAR VE TDV ONU SÖYLEMİYOR:** Buhara ve Harezm 1924'e
kadar **nominal olarak bağımsız** halk cumhuriyetleriydi; Türkistan
ASSR ise **RSFSR'nin İÇİNDE** bir özerk cumhuriyetti. Onu ayrı bir gövde
olarak boyamak, öteki RSFSR özerk cumhuriyetlerini (Başkurt · Tatar …)
boyamamakla **tutarsız** olur.
⚠️ **Bu benim okumam, TDV'nin beyanı DEĞİL** — TDV üçünü aynı cümlede
*"yerel kuruluşlar"* diye anıyor ve egemenlik ayrımına girmiyor.
Damgalıyorum: bu bir **kapsam kararı**, ve bende değil.
⇒ Künye önerisi **YAZMADIM.** Karar gelirse yazarım.

## ④ 🔴 `tannu-tuva` — ŞARTNAMENİN GÖSTERDİĞİ NOKTA YANLIŞ ÖZNE

Şartname: *"`Sayansk ostrogu` 1 nokta, bugün `sovyet-rusya`."*
```
Sayansk ostrogu   lat 52,85 · lon 91,90   [Minusinsk havzası]
   s: rusya 1709-01-01 → 1917 → sovyet-rusya
   kaynak: "ostrog — …Хакасии (cyberleninka) ⚠️ KOORDİNAT yaklaşık"
```
🔴 **Sayansk, Sayan dağlarının KUZEYİNDE** — Hakasya/Minusinsk havzası,
1709'dan beri Rus. Tannu Tuva **güneyde** (≈ lat 50-52). Aynı kutuda
Abakan ostrogu ve Minusinsk de var; üçü de Tuva değil.
⇒ Sayansk'ı `tannu-tuva` yapmak **yanlış toprağı boyamak** olurdu.

🟢 **VE GERÇEK TAŞIYICI ZATEN YAZILMIŞ — ama HENÜZ CANLI DEĞİL:**
```
Kızıl (Belotsarsk)   lat 51,717 · lon 94,450 · k:1   ← Tuva'nın BAŞKENTİ
dosya: data/yer_yama_1923_yeni.js   → BEKLEYEN YAMA
77 canlı girdi dosyasının İÇİNDE DEĞİL
```
⇒ `tannu-tuva`nın **canlı adayı SIFIR**, bekleyen adayı **1**. Kalem bu
turda kapanamaz; o yama indikten sonra açılır.

## ⑤ TABAN FARKI (+7) — İKİ HİPOTEZ ÇÜRÜDÜ, SEBEP AÇIK
```
benim sahipli sayım 3637   ·   ARAC-BOLGE-KUTU der 3630   ·   fark 7
hipotez ① `isg:`      ÇÜRÜDÜ — isg dâhil/hariç ikisi de 3637
hipotez ② mükerrer ad ÇÜRÜDÜ — 3805 kayıt, 3805 benzersiz ad, 0 mükerrer
```
⇒ Sebep hâlâ **bilinmiyor**. `ölçmedim` değil, **ölçtüm ve bulamadım** —
iki aday elendi, kalem açık.

## ÖLÇMEDİM / BULUNAMADI
```
🔴 bulunamadı  Harezm'in 1920-04-26 gününün TDV dayanağı (`hive` 302 ölü,
               `ozbekistan` gün vermiyor)
⚪ ölçmedim    2s kapısını (yeni kırılma günlerinin çekirdek maddesi)
⚪ ölçmedim    Buhara/Harezm kimliklerinin renk çakışmasını — ikisinin de
               rengi VAR (#244ed2 · #24d2b4) ama sahneye çıkınca yeni
               çift doğar; `renkler.py` donuk
⚪ ölçmedim    `buhara` künyesinin `t:1920-09-02`sinin NEREDEN geldiğini
               (veride kaynak alanı yok)
⚠️ kapsam      `turkistan-assr`ın yaratılıp yaratılmayacağı — egemenlik
               ayrımı BENİM OKUMAM, TDV söylemiyor. Karar koordinatörde.
```

---

# EK — HÜKÜMLER İŞLENDİ (6 Eylül, 1.MURAT'ın dört hükmü)

## ① 🟢 `harezm` GÜNÜ ARANDI VE **BULUNDU** — `bulunamadı` damgası KALKTI

Hüküm *"bir kez ara, bulamazsan dokunma"* idi. **Buldum.**
```
`hive`         → 302 ÖLÜ          (ilk turda denenen)
`harizm`       → 200 · 25.850 kar. 🟢  ← TÜRKÇE YAZIM
`harezm`       → 200 ama 2.375 kar. 🔴 BOİLERPLATE (§4④)
`hivehanligi`  → 302 ÖLÜ
```
> TDV `harizm`: *"1917 Bolşevik İhtilâli'nden sonra Abdullah Han
> Moskova'ya götürüldü ve hanlığa son verilerek **26 Nisan 1920**'de
> Hârizm Halk Cumhuriyeti ilân edildi."*

⇒ Verinin `1920-04-26`sı **TDV-DESTEKLİ**. Künyenin `f:1920-04-26`sı da
aynı gün. Değiştirilecek bir şey yok — **yalnız kimlik** değişiyor.
📌 Ve bu, `§4`ün Türkçe yazım dersinin bu turdaki vakası: `hive` ölü,
`harizm` canlı. Dört slug denendi; ikisi ölü, biri **canlı ama
boilerplate**, biri cevabı verdi. Tek slug'da dursaydım *"bulunamadı"*
diye kapatacaktım — ve **yanlış olacaktı.**

## ② 🔴 `turkistan-assr` — **YARATILMAYACAK.** (1.MURAT hükmü + gerekçe)

> 📌 Bu karar burada **gerekçesiyle** duruyor ki bir sonraki oturum aynı
> boşluğu görüp yeniden önermesin (`§11`: kabul edilmiş bir borç kayıtsız
> kalırsa yarın yeniden **iş** sanılır).

```
Buhara Halk Cum. · Harezm Halk Cum.   1924'e kadar NOMİNAL OLARAK BAĞIMSIZ
Türkistan ASSR                        RSFSR'nin İÇİNDE özerk cumhuriyet
```
Türkistan ASSR'yi ayrı bir gövde olarak boyamak, **Başkurt ve Tatar
ASSR'lerini boyamamakla tutarsız** olurdu — ve atlas onları boyamıyor.
⚠️ TDV üçünü aynı cümlede *"yerel kuruluşlar"* diye anıyor ve egemenlik
ayrımına **girmiyor**; ayrım bir okumadır, TDV beyanı değil. Hüküm bu
ayrımı kabul etti.
⇒ Beş nokta (Taşkent · Semerkant · Hokand · Hucend · Cizzah)
`sovyet-rusya` olarak **KALIYOR**. Bu bir kusur değil, **karar**.

## ③ 🔵 `tannu-tuva` — **DONDURULDU** (1.MURAT onayladı)
```
Sayansk ostrogu  52,85°K / 91,90°D — Sayan'ın KUZEYİ, Minusinsk havzası,
                 1709'dan beri Rus. TUVA DEĞİL.
Kızıl (Belotsarsk) 51,717°K / 94,450°D · k:1 — Tuva'nın BAŞKENTİ,
                 ama `data/yer_yama_1923_yeni.js`te BEKLİYOR (canlı değil)
```
⇒ Kalem `data/yer_yama_1923_yeni.js` **indikten sonra** açılır.
Bugün canlı aday **sıfır**; Sayansk'a `tannu-tuva` yazmak **yanlış
toprağı boyamak** olurdu.

## ④ 🟢 `buhara` GÜNÜ TAŞINDI — ve bir YAN ETKİ doğdu
Hüküm: `buhara` `t:` **1920-09-02 → 1920-10-06** (TDV `buhara`:
*"6 Ekim 1920'de Buhara Hanlığı ilga edildi"*), altı noktanın **tamamı
birlikte**. Yamaya girdi.
🔴 **Ve zorunlu yan etki:** ardıl dönem de o gün başlamalı, yoksa 2
günlük **sahipsiz** pencere doğar. Ama künye `f:1920-10-08` ⇒ dönem
künyenin 2 gün öncesinde başlar ve **`4c` ateşler.** İkisi birden olamaz.
⇒ `denetim/ONERI-KUNYE-ASYA-0906.json`a **künye `f:` düzeltme önerisi**
eklendi (1920-10-08 → 1920-10-06), üç seçenek ve gerekçeleriyle.
**Karar bende değil**; yama Ⓐ'ya göre üretildi, Ⓑ seçilirse tek satır.

## ⑤ 🟢 YAMA GENİŞLEDİ — 5 → **16 KAYIT**, sınav temiz
`denetim/yer_yama_asya_1923.js` · `node --check` geçti.
```
HINDISTAN  5 nokta   Bangalor · Seringapatam · Meysûr · Gvalyar · İndor
ORTA ASYA  6 nokta   Buhara · Karşi · Şehrisebz · Termez · Hisar · Külâb
ORTA ASYA  5 nokta   Küngrat · Köhne Ürgenç · Hîve · Yeni Ürgenç · Hazârasp

SINAV (üreticinin içinde):
  KAYBOLAN gün   yalnız 1920-09-02 × 6  ⇒ KASITLI (TDV günüyle değişti)
  SÜREKSİZLİK    0 / 16
  KAPANIŞ        16/16 → 1923-10-29
```
🔵 Orta Asya kolunun künyeleri **HAZIR** (renk dâhil): Hindistan kolu
künye bekliyor, Orta Asya kolu beklemiyor — **ikisi ayrı inebilir.**
