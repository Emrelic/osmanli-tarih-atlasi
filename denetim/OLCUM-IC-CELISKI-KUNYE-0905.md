# ÖLÇÜM — dört iç çelişki: **hayalet mi, sözleşme mi?**

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2854` · **Tarih:** 5 Eylül 2026
> **Cins:** ÖLÇÜM — *veri yazılmadı, hiçbir `data/` ya da `arac/` dosyası değiştirilmedi.*
> **İstenen:** hüküm değil **sayı**.

---

## 0. 🔴🔴 ÖNCE KENDİ HATAMI DÜZELTİYORUM — ve bu rapordan ÖNEMLİ

Önceki raporumda (`OLCUM-1923-2026-KAPSAM-0905.md §2.2`) şunu yazdım:

> *"Sözleşmeye uyum ölçüldü — 98 künyenin **34'ü (%34,7)**."*

**BU SAYI YANLIŞ. Gerçek: 80/98 (%81,6).**

Sebep benim süzgecimde:
```
künyelerin KULLANDIĞI kalıp   "(1923 sonrasında da sürdü)"   ← 46 künye AYNEN
benim regex'imdeki kalıp      "sonra da"                     ← BOŞLUKLU
"sonrasında da" içinde "sonra da" alt-dizgisi YOKTUR ⇒ 46 künye SESSİZCE ELENDİ
```
Genişletilmiş kalıpla ölçüm:
```
ESKİ regex   BEYANLI 34 / 98      ← raporladığım
YENİ regex   BEYANLI 80 / 98      ← gerçek
kaçırdığım                46 künye
```
Sözleşmenin fiilî yazımı **standart bir parantez** ve sayılabiliyor:
```
46  (1923 sonrasında da sürdü)
 5  (1923 sonrasında da sürdü, 1945'e / 1954'e / 1947'ye … dek)
 3  (1923)
────────────────────────────────
54  künye "(1923…)" parantezi taşıyor; kalan 26 beyan yıl ya da
    başka ifadeyle veriliyor
```

⚠️ **Ve zararı kayıtta kalmadı:** `M-2854`'te *"sözleşme uyumu %34,7 — ve bu
bir kusur sınıfı"* diye **yayıldı.** Sınıf gerçek ama **ölçeği dörtte biri
kadar**: 64 değil **18** künye susuyor, ve o 18'in ikisi de haklı (aşağıda).

📌 `§11`in *"kendi yazdığın ayrıştırıcı, var olan bir ayrıştırıcıdan her
zaman kötüdür"* dersinin **kalıp** yüzü. Ve daha keskini: kalıbı
**varsaydım**, oysa **sayılabilirdi** — `(1923…)` parantezini saymak on
saniyelik iş ve doğru cevabı doğrudan verirdi.
⇒ ***Bir sözleşmenin uyumunu ölçmeden önce, sözleşmenin fiilî YAZIMINI
say.***

**Kalan 18 beyansız — gözle sınandı (n küçük):**
```
🟢 HAKLI 2   tbmm-turkiye  GERÇEKTEN 29 Ekim 1923'te bitti — beyan GEREKMEZ
             liberya       beyan VAR ama ozet'te değil, `son` KRONOLOJİ
                           kaydında: "1923 ufkunda bağımsız devlet olarak
                           sürüyordu"  ⇒ sözleşmenin ÜÇÜNCÜ biçimi
🔴 EKSİK 16  almanya · yemen-zeydi · afganistan · mogolistan · somali ·
             bolivya · brezilya · dominik · ekvador · guatemala · kuba ·
             paraguay · peru · sili · uruguay · venezuela
             (11'i Latin Amerika cumhuriyeti — tek bir parti eksiği gibi
              duruyor, ama bunu ÖLÇMEDİM)
```

---

## 1. SINAV — `§3.5`in kendi ölçütü uygulandı

**Soru (sevkten):** *veri o kimliği `son` gününden SONRA kullanıyor mu?*

| künye | boya anahtarı | `son` | veride toplam dönem | `son`dan SONRA biten | etkilenen nokta | fazladan süre |
|---|---|---|---:|---:|---:|---:|
| `yemen-zeydi` | `yemen` | 1918-11-01 | 29 | **9** | 9 | **5,0 yıl** |
| `almanya` | `almanya` | 1918-11-11 | 153 | **42** | 42 | **5,0 yıl** |
| `manipur` | `manipur` | 1891-01-01 | 2 | **1** | 1 | **32,8 yıl** |
| `san-devletleri` | `san-devletleri` | 1887-01-01 | 3 | **3** | 3 | **36,8 yıl** |

```
`son` gününden sonra BAŞLAYAN dönem: 4 künyenin 4'ünde de  0
boya anahtarını PAYLAŞAN başka künye: 4 künyenin 4'ünde de  yok
   ⇒ ölçülen dönemler gerçekten BU künyelere ait; atıf karışmıyor
```
🟢 Anahtar paylaşımını ayrıca kontrol ettim çünkü paylaşılsaydı sayılar
**başka bir künyenin** dönemlerini de toplardı — `§11`in *"doğru aleti
yanlış evrenle koşturmak"* tuzağı. Paylaşım yok.

---

## 2. 🔴 AMA SINAVIN İKİNCİ YARISI: **polity gerçekten bitti mi?**

Sevk haklı olarak uyardı: *"künyenin NEYİ temsil ettiği sorusu, hayalet
sorusundan ÖNCE gelir."* Dört künyenin `ozet` ve `son` metni okundu:

```
yemen-zeydi     `son` metni: "Mondros sonrası Osmanlı garnizonları
                 ÇEKİLDİ, FİİLÎ BAĞIMSIZLIK"
                ⇒ bu bir SON değil, TAM BAĞIMSIZLIĞIN BAŞLANGICI.
                  Zeydî imamlığı sürdü. Boyama DOĞRU.

almanya         künye: "Kutsal Roma / Almanya" — 962'den beri bir
                 ÇATI YAPISI (ozet'in kendi kelimesi).
                `son` metni: "İMPARATORLUK yıkıldı, cumhuriyet ilan edildi"
                ⇒ metin bir son ANLATIYOR ama çatının değil,
                  İÇİNDEKİ REJİMİN sonu. Almanya sürdü. Boyama DOĞRU.
                🟢 Ve veri bunu zaten biliyor: 42 dönemin 8'i 1918-1920
                  arasında AYRI AYRI bitiyor (Poznan 1918-12-27,
                  Versay 1919-06-28 ×5, 1920-01-18, 1920-06-15)
                  — yani toprak kayıpları TARİHLİ işlenmiş.

manipur         `son` metni: "İNGİLİZ HİMÂYESİNE ALINDI"
                ozet: "1891'de İngiliz himâyesine girdi ama
                       TAHTI 1923'ÜN ÖTESİNE TAŞIDI"
                ⇒ krallık sürdü. Boyama VAR OLAN bir devleti gösteriyor.

san-devletleri  `son` metni: "beylikler İNGİLİZ HİMÂYESİNE GİRDİ"
                ozet: "…tâbiiyet değiştirerek 1923'ÜN ÖTESİNE GEÇTİLER"
                ⇒ aynı.
```

> ### 🟢 CEVAP: **DÖRDÜNÜN DÖRDÜ DE SÖZLEŞME — HAYALET SAYISI 0.**
> Dördünde de polity `son` gününden sonra **yaşamaya devam etti.**
> `§3.5`in hayalet tanımı (*"var olmayan devleti boyamak"*) **hiçbirinde
> gerçekleşmiyor.**

⚠️ **Ama "kusur yok" DEMEK DEĞİL.** Kusur yer değiştirdi: `tur:"son"`
alanının kendisinde.

---

## 3. 🔴 GERÇEK BULGU: `tur:"son"` DE İKİ FARKLI ŞEY TAŞIYOR

Aynı desen, bir kademe aşağıda. Önceki rapor `t:1923-10-29`un iki şeyi
aynı biçimde yazdığını ölçmüştü; **`son` alanı da öyle:**

```
"bu polity BİTTİ"              ile
"bu polity STATÜ DEĞİŞTİRDİ"   (himâye · bağımsızlık · rejim)
```

**Tüm 591 künyede tarandı** — `son` kaydı kendi `t:`sinden önce olanlar:

```
son < t olan künye:  14 / 591   (%2,4 — desen DAR)

  STATU     5   yemen-zeydi · manipur · san-devletleri ·
                sirbistan-prensligi (1878 tam bağımsızlık) ·
                mutahharten (1403 Akkoyunlu nüfuzuna girdi)
  BITIS     4   almanya · aydin (1425 ilhak) · saruhan (1410 ilhak) ·
                berar (1572 ilhak)
  BELIRSIZ  5   afsar · ranquel · kuzey-yuan · muisca · purepecha
```
📌 Sınıflandırma **metnin anahtar kelimesine** bakıyor (`himâye` ·
`bağımsızlık` · `çekildi` ↔ `yıkıl` · `ilhak` · `sona erdi`).
⚠️ **Ve `almanya` bu sınıflandırmanın sınırını gösteriyor:** metni
*"İmparatorluk yıkıldı"* diyor ⇒ alet `BITIS` sayıyor, **doğru**. Ama
künyenin **kapsamı** çatı yapısı ⇒ gerçekte statü değişimi.
⇒ ***Metin doğru sınıflanıyor, KAPSAM sınıflanmıyor*** — ve otomatik bir
süzgeç kapsamı okuyamaz.

---

## 4. 🔴 VE AYRI BİR KOVA DOĞDU: **himâye ifade edilemiyor**

`manipur` (32,8 yıl) ve `san-devletleri` (36,8 yıl) hayalet değil, ama
haritada **bağımsız gibi** boyanıyorlar — oysa ikisi de İngiliz
himâyesindeydi. Veri modeli bunu ifade **edemiyor**:

```
v: (tâbi) dönem sayısı : 423
v: dönemlerinin ALANLARI: f · t · k · enklav
🔴 KİMLİK ALANI YOK — `v:` yalnız "OSMANLI'ya tâbi" demektir
```
⇒ Osmanlı dışı bir himâye için elde **iki şık var ve ikisi de yanlış:**
```
s:"manipur"             → BAĞIMSIZ görünür   (bugün yapılan)
s:"ingiliz-hindistani"  → İLHAK EDİLMİŞ görünür
```
📌 `OGRENILENLER §72`nin tam deseni: **model bir hâli ifade edemediği
için veri en yakın kimliğe itiliyor.** Orada *"kimsenin değildi"*
ifade edilemiyordu, burada *"kendi hânedanı var ama himâye altında."*

⚠️ Kaç kaydı bağladığını **ÖLÇMEDİM** — `ozet`inde *"himâye"* geçen künye
sayısı bu raporun evreni değil. Ayrı bir ölçüm kalemi.

---

## 5. DAMGALAR

```
🔴 KENDİ HATAM   sözleşme uyumu 34/98 diye raporlamıştım — GERÇEK 80/98.
                 Regex'im "(1923 sonrasında da sürdü)" kalıbını kaçırdı
                 ("sonra da" ≠ "sonrasında da"). M-2854'te yayılmıştı,
                 BURADA DÜZELTİLDİ.
🟢 ÖLÇTÜM        4 künyenin veri kullanımı: 9/42/1/3 dönem · 5,0/5,0/32,8/
                 36,8 yıl · anahtar paylaşımı 4'ünde de YOK
🟢 ÖLÇTÜM        son < t deseni TÜM külliyatta: 14/591 · STATU 5 · BITIS 4 ·
                 BELIRSIZ 5
🟢 ÖLÇTÜM        v: 423 dönem, KİMLİK ALANI YOK
🟢 HÜKÜM YOK     hayalet sayısı 0 — ama bu bir ÖLÇÜM sonucu, bir onay değil
⚪ ÖLÇMEDİM      "himâye ifade edilemiyor" kovasının KAÇ kaydı bağladığını
⚪ ÖLÇMEDİM      16 eksik beyanın 11'inin Latin Amerika olmasının tek bir
                 partiden mi geldiğini (git log'a BAKMADIM)
⚪ ÖLÇMEDİM      BELIRSIZ 5 künyenin (afsar · ranquel · kuzey-yuan ·
                 muisca · purepecha) hangi kovaya girdiğini — metinleri
                 anahtar kelime taşımıyor, KAYNAK sorgusu gerekir
🔵 OKUMADIM      manipur ve san-devletleri için akademik kaynağın himâye
                 statüsünü nasıl tarif ettiğini — künyenin kendi beyanına
                 dayandım
```

---

## 6. TESLİM — sayıyla

```
SINAV SONUCU   4 künyenin 4'ü de veride `son` gününden SONRA kullanılıyor
               AMA 4'ünün 4'ünde de polity O TARİHTE BİTMEMİŞ
               ⇒ HAYALET: 0 · SÖZLEŞME: 4
FAZLADAN SÜRE  yemen-zeydi 5,0 · almanya 5,0 · manipur 32,8 ·
               san-devletleri 36,8 yıl   (ama "fazladan" DEĞİL — doğru)
KUSUR NEREDE   `tur:"son"` alanı iki şeyi aynı biçimde yazıyor:
               polity SONU ile STATÜ DEĞİŞİMİ. Desen dar: 14/591.
YENİ KOVA      Osmanlı dışı HİMÂYE ifade edilemiyor (`v:`in kimlik alanı
               yok) ⇒ manipur/san-devletleri bağımsız gibi boyanıyor.
               Bu bir MODEL eksiği, bir veri hatası değil.
DÜZELTME       sözleşme uyumu 34/98 DEĞİL 80/98 — kendi süzgeç hatam
```
