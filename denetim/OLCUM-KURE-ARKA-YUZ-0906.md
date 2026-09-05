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
