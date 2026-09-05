# ÖLÇÜM — KÜRE ARKA YÜZ OPAKLIĞI

**Oturum:** KURE GORUNUM · 1.MURAT sevki · 6 Eylül 2026
**Cins:** ÖLÇÜM + iki aday — **karar verilmedi, kod yazılmadı**,
`js/app.js`e dokunulmadı (Oturum 1'in dosyası), veri yazılmadı.

### ÖLÇÜM ANI — önce bu (senin uyarın, ve GEREKLİYDİ)
```
ilk sorgu    t=26 s · visibilityState "hidden" · readyState "loading"
             ⇒ kureKipUygula "undefined" · ISARETCI_KUTUK "YOK"
             🔴 Bu bir SONUÇ DEĞİL — `ölçülemedi` kovası
sekme öne alındı → t=56 s · "visible" · "complete" · 481 işaretçi
bütün sayısal ölçümler   visibilityState = "visible"
```
⚠️ Ve işaretçi sayısı ölçüm boyunca **481 → 1836** arasında gezindi
(zoom'a bağlı); her satırın yanına kendi `n`si yazıldı.
⚪ **Ekran görüntüsü ÖLÇÜLEMEDİ** — üç denemede de 5 sn'de render
bitmedi (1027 işaretçi + küre). Sayılar etkilenmiyor.

---

## ① BUGÜNKÜ DAVRANIŞ — 🔴 **OPAKLIK DİYE BİR ŞEY YOK**

Sorunun kendisi bir varsayım taşıyordu (*"hangi opaklıkla çiziliyor"*).
Ölçüm:
```
işaretçi üslup kümesi (TAMAMI):   "(boş)|opacity=1"   ve   "hidden|opacity=1"
⇒ arka yüz OPAKLIKLA değil `visibility:"hidden"` ile GİZLENİYOR — İKİLİ
⇒ hiçbir işaretçi 0 ile 1 arasında bir opaklıkta DEĞİL
KURE_PAY_DER = 0                  ⇒ ufukta EMNİYET PAYI YOK, kesme SERT
```
`js/app.js:8549 kureArkaYuzUygula()` — ölçüt açısal uzaklık > ufuk,
sonuç `visibility`. Gövdeler (WebGL katmanları) küre tarafından zaten
doğru kapatılıyor; sorun **yalnız DOM işaretçilerinde** ve kodun kendi
yorumu bunu söylüyor.

### Zoom'a göre bugünkü tablo
| zoom | ufuk | gizli | görünür | n | ufuk ±5° bandı |
|---|---|---|---|---|---|
| 0,5 | 82,52° | 44 | 600 | 644 | 14 (%2,2) |
| 1,2 | 78,61° | 68 | 849 | 917 | 22 (%2,4) |
| 2 | 72,43° | 121 | 1242 | 1363 | **62 (%4,5)** |
| 3 | 62,29° | 251 | 1585 | 1836 | **72 (%3,9)** |
| 4 | 50,58° | 69 | 1518 | 1587 | 25 (%1,6) |

### 🔴 OKUNURLUĞU NEREDE BOZUYOR — ve sebep opaklık değil, SERT KESME
Kesme sert olduğu için ufka **±5°** içindeki işaretçiler kamera
oynadıkça **görünüp kayboluyor** (pop). O bandın büyüklüğü:
```
en dar   z4  → 25 işaretçi (%1,6)
en geniş z2  → 62 · z3 → 72 işaretçi (%4,5 / %3,9)
```
⇒ **z2-z3 arası** en kırılgan bölge. Bu, "dünya görünümünden bölgeye
inerken" tam olarak geçilen aralık.

---

## ② İKİ ADAY — sayıyla, ve HER BİRİNİN BOZDUĞU

### ADAY A — emniyet payı: `KURE_PAY_DER` 0 → 3-5°
Ölçüldü (z2, n=1385):
```
pay  0°  → ufuk 72,43°  gizli 124
pay  2°  → ufuk 74,43°  gizli 110      (+14 geri geldi)
pay  5°  → ufuk 77,43°  gizli  99      (+25 geri geldi)
pay  8°  → ufuk 80,43°  gizli  90      (+34)
pay 12°  → ufuk 84,43°  gizli  82      (+42)
```
🟢 **Kazandırdığı:** kenar işaretçileri kararlı kalır, pop azalır.
Maliyet **sıfır** — tek sabit, kod değişikliği bir satır.
🔴 **BOZDUĞU:** 5°'de **25 işaretçi** kürenin arkasındayken ön yüze
katlanmış hâlde **görünür kalır** — yani özelliğin var olma sebebi olan
sızmanın bir kısmı geri gelir.
⚠️ Ve yön önemli: kodun kendi tarihi ilk sürümün ufku **DAR** verip
görünür etiketleri sildiğini kaydediyor (z1,2'de 76 işaretçi). Pozitif
pay **ters yöne** hata yapar. ⇒ Bir hatayı ötekiyle takas ediyor.

### ADAY B — kademeli opaklık: ufkun 6° içinde 1 → 0 geçişi
Ölçüldü (z2, n=1344):
```
bugünkü ikili yol   3,5 ms
opaklık yolu        4,4 ms        ⇒ +0,9 ms (+%26) hareket başına
```
🟢 **Kazandırdığı:** pop **tamamen** kalkar — kesme bir solmaya döner.
Maliyet ölçülmüş ve küçük.
🔴 **BOZDUĞU (ölçüldü, tahmin değil):**
```
opacity 0 olan 119 işaretçi:
   pointerEvents = "auto"          ← GÖRÜNMEZ AMA TIKLANABİLİR
   getBoundingClientRect().width > 0  ← hâlâ YER KAPLIYOR
```
⇒ `visibility:hidden` bu iki şeyi de kendiliğinden çözüyor; `opacity`
çözmüyor. Doğru yapmak için her işaretçiye **ikinci bir özellik**
(`pointer-events`) yazmak gerekir — ek maliyet ve **eşzamanlı tutulması
gereken ikinci bir durum.**
⚪ **ÖLÇMEDİM:** yarı saydam banttaki etiketlerin haritanın üstünde
gerçekten okunup okunmadığını — bu görsel bir yargı ve ekran görüntüsü
alınamadı.

---

## ③ 🔴 ÜÇÜNCÜ ADAYI ÖLÇTÜM VE ELEDİM — ve KENDİ MANŞETİMİ ÇÜRÜTTÜM

`js/app.js:8491` bir **açık soru** kaydediyor: MapLibre'nin kendi
`Marker.setOpacity(opacity, opacityWhenCovered)` API'si denenmiş,
*"210'un yalnız 25'i (%12) tepki verdi … NİÇİN yetersiz olduğu
ÖLÇÜLMEDİ."*

**z2'de ölçtüm ve %100 uyum çıktı** — ve *"kod yorumundaki %12
ÇÜRÜDÜ, sebep gizli belgeydi"* diye yazmak üzereydim:
```
z2:  proje ARKA der 120 · MapLibre de 120 · KAÇIRDIĞI 0
```
**Sonra çok zoomda ölçtüm ve manşetim çöktü:**
| zoom | proje ARKA | MapLibre uyum | 🔴 KAÇIRDI | fazla |
|---|---|---|---|---|
| 0,5 | 43 | 42 | 1 | 22 |
| 1,2 | 69 | 64 | 5 | 20 |
| **2** | 121 | 118 | **3** | 2 |
| **3** | 251 | 120 | **131 (%52)** | 0 |
| 4 | 69 | 35 | **34 (%49)** | 0 |
| 5 | 92 | 35 | **57 (%62)** | 0 |

⇒ **Uyum yalnız z2 civarında.** Yakınlaştıkça MapLibre arka yüzdeki
işaretçilerin yarısından fazlasını **kaçırıyor** — yani kod yorumundaki
düşük oran **gerçek**, ve sebebi *"gizli belge"* değil **zoom'a bağlı
ayrışma.**

🔴 **VE İKİNCİ, BAĞIMSIZ ELEME SEBEBİ:** native API kamera hareketinde
**kendini güncellemiyor.**
```
kamera 190° çevrildi (merkez 30°D → 160°B), JS çağrılmadan:
   opacity 0 sayısı  ÖNCE 35  ·  SONRA 35  ⇒ kendi_guncelledi = FALSE
```
⇒ Native yol projenin hareket döngüsünün yerini **alamaz.**
⚠️ Ve yan etkisi de aynı: `pointerEvents auto`, yer kaplıyor.

📌 **Ve bu, projenin kendi dersinin tekrarı:** ilk ufuk formülü de tek
bir zoom'da kalibre edilmiş ve *"her zoom'da yanlış"* çıkmıştı. Ben
aynı hatayı bir ölçümde yaptım ve **yayınlamadan önce** çok-zoom
sınavı çürüttü. *"Örneklem büyüklüğü, örneklem ÇEŞİTLİLİĞİ değildir"*
— bu sefer eksen **zoom**du.

---

## KARAR SENDE — ben seçmiyorum

```
A  pay 3-5°     ucuz (1 satır, 0 ms) · pop azalır · 25 işaretçi SIZAR
B  kademeli     pop BİTER · +0,9 ms · pointer-events İKİNCİ durum olur
C  native API   🔴 ELENDİ — z3+ %52 kaçırıyor VE kendini güncellemiyor
```
🔵 Şunu söyleyebilirim ve söylemekle yetiniyorum: **A ile B aynı sorunu
çözmüyor.** A pop'un *sıklığını* azaltır ve sızmayı *artırır*; B pop'u
*bitirir* ve sızmayı **artırmaz** (0'a giden bant hâlâ görünmez), ama
karşılığında ikinci bir durum (`pointer-events`) getirir.

## ÖLÇMEDİM
```
⚪ Yarı saydam bandın GÖRSEL okunurluğunu — ekran görüntüsü alınamadı
⚪ Tarih aralığına bağımlılığı — sevk "zoom/tarih" diyordu; ölçüm
   1281-01-01'de yapıldı, BAŞKA TARİH DENENMEDİ (işaretçi sayısı
   tarihe göre değişir, bant oranı değişebilir)
⚪ Kare hızını — rAF gizli belgede durur, ve ölçüm koşu 6 CPU'yu
   paylaşırken yapıldı
⚪ B'nin `pointer-events` düzeltmesinin maliyetini — yalnız eksikliğini
   ölçtüm
```

---

# EK — BAĞLAYICI ÖLÇÜM YAPILDI, VE YAMA SINANDI (6 Eylül, hüküm sonrası)

**Sevk:** `denetim/HUKUM-KURE-ARKA-YUZ-0906.md` — ADAY B, iki şartla.
**Bağlayıcı soru:** *yarı saydam banttaki etiketler okunuyor mu?*
**Çıktı:** `denetim/YAMA-KURE-SOLMA-0906.js` — **UYGULANMADI**
(`js/app.js` Oturum 1'in dosyası).

## ① 🔴 CEVAP: BANDIN YALNIZ ÜST YARISI OKUNUYOR — ve sebebi HALO

Ekran görüntüsü üç denemede de alınamadı, bu yüzden **fotometrik**
ölçüldü. Ve ölçüm önce etiketin gerçek üslubunu buldu:
```
etiket = rgba(52,38,22,0.85) KOYU KAHVE metin
       + BEYAZ HALO (text-shadow ×3: 0 0 3.6px / 1.8px / …)
       10px/600  ve  16.2px/600
```
🔴 **Belirleyici:** `opacity` metni **ve halosunu BİRLİKTE** soldurur.
Okunurluğu sağlayan şey halo olduğu için, yerel karşıtlık (metin↔halo)
α ile **hızla** çöküyor:

| α | metin↔halo (deniz) | metin↔halo (kara) | metin↔zemin (deniz) |
|---|---|---|---|
| 1,0 | **11,22** | 9,77 | 4,77 |
| 0,8 | **6,86** | 5,70 | 3,40 |
| 0,6 | **4,16** | 3,44 | 2,43 |
| 0,5 | 3,25 | 2,73 | 2,06 |
| 0,4 | 2,55 | 2,18 | 1,76 |
| 0,3 | 2,00 | 1,77 | 1,52 |

10px/600 WCAG'de **büyük metin değil** ⇒ eşik **4,5:1**.
```
α ≥ 0,8   okunur (4,5 üstü, iki zeminde de)
α ≈ 0,6   sınırda (deniz 4,16 · kara 3,44)
α < 0,5   OKUNMUYOR — etiket VAR ama bilgi taşımıyor
```

🟢 **AMA BU B'Yİ ÇÜRÜTMÜYOR — çünkü okunmayan bant KALICI DEĞİL.**
Ölçüldü: merkez **20° boylam** kaydırılınca kenardaki bir işaretçinin
ufka uzaklığı **9,82°** değişiyor ⇒ **1° ufuk ≈ 2,04° sürükleme.**
4°'lik bir bant ≈ **8°'lik** bir sürüklemede geçilir; okunmayan alt
yarısı bunun yarısı kadar sürer.
⇒ Solmanın amacı *okunur kalmak* değil **yumuşak kaybolmak**; ölçüm
bunun **hızlı** olması gerektiğini söylüyor, olmaması gerektiğini değil.
📌 Ve eşik buradan **türetildi, seçilmedi**: `KURE_TIK_ESIK = 0.5`,
çünkü α<0,5'te etiket okunmuyor ve **okunmayan bir etiketin tıklanması
yanıltıcıdır.**

## ② 🟡 İKİNCİ TARİH — istendi, YAPILDI (ve ilk denemem başarısızdı)

🔴 İlk turda `tarihAyarla('1281-01-01')` çağırdım; fonksiyon **gün
dizini** alıyor, tarih dizgisi değil. Sonuç: üç tarih için **birebir
aynı** üç satır (n=1305, gizli=142, bant=63) ve başlıkta `NaN`.
**Sayfayı bozdum ve o üç satırı «tarih etkilemiyor» diye
raporlayabilirdim** — klasik sahte sıfır. Onardım, `gunIdx()` ile
tekrarladım ve **ekrandaki tarihin gerçekten değiştiğini doğruladım**:

| tarih | ekranda | n | gizli | ±5° bant | oran |
|---|---|---|---|---|---|
| 1281-01-01 | 1 Ocak 1281 ✓ | 1350 | 143 | 65 | %4,8 |
| 1683-07-14 | 14 Temmuz 1683 ✓ | 1474 | 199 | 81 | %5,5 |
| 1914-08-01 | 1 Ağustos 1914 ✓ | 1737 | 294 | 78 | %4,5 |

⇒ Bant mutlak olarak büyüyor ama **oran kararlı: %4,5-5,5**. Bulgu
tarihten bağımsız.

## ③ YAMA SINANDI — inmeden, sayfada koşturularak

```
gizli sayısı        bugün 143  ·  öneri 143      ⇒ AYNI (arka yüz BÜYÜMÜYOR)
solan (0<α<1)       22
tam arka yüz        143/143 computed visibility = hidden   (şart ② tuttu)
görünmez-tıklanabilir ihlali                       0       (şart ① tuttu)
maliyet             bugün 3,2 ms · öneri 3,3 ms  ⇒ +0,1 ms
```
🔴 **VE KENDİ MALİYET SAYIMI DÜZELTTİM:** ilk ölçümüm **6,4 ms**
demişti. O rakam **değişmez taramasının** (`getComputedStyle` her
işaretçide) yüküydü — yamanın değil. *Kendi ölçümümün maliyetini
ölçülen şeye yazmışım.* Aynı koşuda ikisini ayırınca **+0,1 ms** çıktı.

### 🔴 VE ŞARTLARIN GÖRÜNMEYEN ÜÇÜNCÜ AYAĞI — DALI ATEŞLEYEREK BULDUM
`C13` her kusur dalının **ayrı ayrı** ateşlenmesini istiyor. Küre
**kapatma** dalını ateşledim:
```
yapay solmuş durum:        26 opaklıklı · 9 pointer-events:none
BUGÜNKÜ geçme yolundan sonra: 26 opaklıklı · 9 tıklanamaz   🔴 KALDI
ÖNERİLEN temizlikten sonra:    0 ·  0                        🟢
```
⇒ Bugünkü `!KURE_ACIK` dalı **yalnız `visibility` temizliyor** — çünkü
bugün temizlenecek tek şey o. Solma inince küre kapatıldığında düz
haritada **soluk ve tıklanamaz etiketler kalırdı.**
📌 ***Bir özellik eklemek, onu temizleyecek yeri de eklemektir*** — ve
bu, şartların ikisinde de yazılı değildi; **dal ateşlenmeden
görünmüyordu.**

## ④ ÖLÇÜLEMEDİ — ve damgası `temiz` DEĞİL
```
🔴 Bir turda 1 işaretçi (0,1] dışında opaklık aldı; ikinci turda
   ÜRETİLEMEDİ, kim olduğu BULUNAMADI. Yamaya `isFinite` koruması
   kondu — ölçülemeyen bir olaya karşı ucuz sigorta, ama SEBEP AÇIK.
⚪ Yarı saydam bandın İNSAN gözüyle okunurluğu — ölçüm FOTOMETRİK.
   Karşıtlık sayıları gerçek, "gözüme nasıl görünüyor" DEĞİL.
⚪ Kare hızı — koşu 6 CPU'yu paylaşıyor (senin talimatın).
⚪ `KURE_SOLMA_DER = 4` bir ÖLÇÜM DEĞİL bir KALİBRASYON: iki ölçümden
   türetildi (±5° pop bandı · 2,04°/derece sürükleme) ama "4 en iyisi"
   diye bir ölçüm YOK. Sabit olarak bırakıldı, 0 yazılırsa bugünkü
   ikili davranışa döner.
```
