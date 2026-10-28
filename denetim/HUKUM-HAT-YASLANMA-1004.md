# ⚖️ PROJE HÜKMÜ — BOYAMA HATLARA YASLANIR

**Veren:** Emre · **Tarih:** 4 Ekim 2026 · **Soran:** YILDIRIM BAYEZIT (koordinatör)
**Kapattığı:** kutuda bekleyen **12 çizgi/sınır şikâyeti** (tek kökten)

---

## 1 · HÜKMÜN METNİ (Emre'nin kendi sözü)

> **"Boyamalar hatlara yaslanmalı.** Ama hatlar doğru tarihlerde haritaya konmuş olmalı.
> Hattın ortaya çıktığı anlaşma belgenin tarihinden veya o anlaşmada geçen filanca tarihten
> itibaren sınır böyle olacak ibaresi varsa o tarih esas alınır. Öbür türlü belgenin tarihi
> esas alınır.
> Eğer bu anlaşma sonrasında fiili bir aksi durum oluşmamış ise bu şekilde yapılır. Bu hattın
> geçerliliğini yitirdiği tarihe kadar haritada durur ve renklenmeler bu hatta dayanır.
> **Eğer hukuki anlaşmadan sonra bir devlet boşaltması gereken toprağı boşaltmadı ise
> istisnaî durum olarak o zaman o yer işgal edilmiş statüsünde taranır.**"

---

## 2 · HÜKMÜN AYRIŞTIRILMASI — beş kural

| # | kural |
|---|---|
| **H1** | **Boyama hatta yaslanır.** Petek sınırı, o gün yürürlükte olan hatta oturur. |
| **H2** | **Yürürlük tarihi:** anlaşmada *"şu tarihten itibaren sınır böyle olacak"* ibaresi **varsa O TARİH**; **yoksa BELGENİN TARİHİ**. |
| **H3** | **Şart:** anlaşmadan sonra **fiilî bir aksi durum oluşmamışsa** H1 uygulanır. |
| **H4** | **Süre:** hat, **geçerliliğini yitirdiği tarihe kadar** haritada durur ve boyama ona dayanır. |
| **H5** | **İSTİSNA:** hukukî anlaşmadan sonra bir devlet **boşaltması gereken toprağı boşaltmadıysa**, o yer **`isg:` (işgal) statüsünde TARANIR**. |

🔴 **H5 doktrinin kilit taşıdır:** hukukî sınır ile fiilî durum ayrıldığında, atlas **ikisini
birden** gösterir — hat hukuku söyler, tarama fiilîyi söyler. Çelişki **gizlenmez, ÇİZİLİR**.

---

## 3 · ÖLÇÜM — hükmün bugünkü maliyeti

Ölçüldü (node, gerçek yükleyiciyle; **regex ile 0 kayıt bulmuştum — dokuzuncu desen kusuru**):

```
13 küme · TOPLAM 801 HAT KAYDI
sınıf:   YOK 352  ·  E 267  ·  C 140  ·  D 42        (F sınıfı: 0)
f:/t:    801/801 — hepsinde yürürlük penceresi VAR ✓
```

### 🔴 3.1 · Bugün hatların **üçte ikisi boyamayı etkilemiyor**
```
js/d_katman.js:331   _D_YASLA_SINIF_HUKUKI = { F, E }
⇒ YASLANAN:      E 267  (+ F 0)           =  267
⇒ YASLANMAYAN:   C 140 + D 42 + YOK 352   =  534   (%67)
```
Ve daha ağırı: **`uret_petek.py` D hatlarını HİÇ OKUMUYOR** (grep 0) ⇒ motor, çizilen hattan
**bağımsız** boyuyor. Hat yalnız bir **görüntü katmanı**.
⇒ **H1'i uygulamak bir MOTOR değişikliğidir** ve motor tuzundadır (`§9.1`) ⇒ **tam inşa koşusu.**

### 🔴 3.2 · Yürürlük tarihleri H2'ye göre DENETLENMEDİ
```
id'deki yıl  ↔  f: yılı      UYUYOR 188  ·  AYRIŞIYOR 401  ·  id'de yıl yok 212
f: YYYY-01-01 (yıl hassasiyeti adayı)   51
```
Ayrışma **kusur değil, H2'nin kendisi olabilir** — örnek:
```
d1923-tr-sscb-gurcistan    f = 1921-03-16   (Moskova Antlaşması)   t = 1923-10-29
d1923-tr-ir-1              f = 1920-04-23                          t = 1923-10-29
```
⇒ `f:` zaten **belgenin/yürürlüğün** tarihini taşıyor görünüyor, `id` başka bir şeyi kodluyor.
**Ama hangisi H2'nin hangi şıkkı (belge tarihi mi, "şu tarihten itibaren" mi) KAYITLARDA
AYIRT EDİLMİYOR** — ve H2 tam bu ayrımı istiyor.
⚠️ `t: 1923-10-29` **UFUK ucu** ⇒ H4'ün ("geçerliliğini yitirdiği tarih") karşılığı değil,
**kenetleme**. H4 için gerçek bitiş tarihi gerekiyor.

### 3.3 · H5 bir ŞEMA GENİŞLETMESİ istiyor — ve bugün o boşluk ölçüldü
H5 *"işgal statüsünde taranır"* diyor. Bugün LAB ölçtü:
```
isg: katmanı "yabancı devlet işgal etti"yi biliyor
AMA  "Osmanlı kendi olmayan yeri işgal etti" (Osmanlı bir d: KATMANI, BOYALAR'da `osman` 0)
VE   "üç devlet BİRLİKTE işgal etti" (İtilaf — koalisyon kimliği YOK)
     ifade EDİLEMİYOR
```
⇒ **H5'i uygulamak `isg:` şemasının genişletilmesini gerektirir** (`OGLEDEN-SONRA-1004 C3`).

---

## 4 · HÜKMÜN BAĞLADIĞI ÜÇ AYRI BULGU

Bu hüküm, bugün **birbirinden bağımsız** bulunan üç şeyi tek zincire bağladı:
1. **12 çizgi şikâyeti** (kutuda, aylardır) — kökü `_D_YASLA_SINIF_HUKUKI={F,E}` + motorun
   D hatlarını okumaması
2. **`isg:` şema boşluğu** (LAB, bugün) — H5 onu zorunlu kılıyor
3. **Pencere ucu ↔ ölçüm ayrımı** (`D210`, bugün 4 ayrı yerde) — H2 ve H4 tam bu ayrımı istiyor

---

## 5 · UYGULAMA SIRASI (koordinatör önerisi)

```
① ÖLÇ    801 hattın H2'ye göre tarihi DOĞRU MU — kayıtta "belge tarihi" ile
         "şu tarihten itibaren" AYIRT EDİLİYOR MU (`dayanak` alanı 795 kayıtta var)
② ÖLÇ    534 yaslanmayan hattın kaçı GERÇEKTEN hukukî sınır, kaçı başka bir şey
         (C sınıfı "hiçbir görünümde yaslanmaz" — sebebi ayrı)
③ YAMA   uret_petek.py hatları okusun + yaslansın        → MOTOR TUZU, tam inşa
④ ŞEMA   isg: işgalci kimliği (Osmanlı + koalisyon)      → BOYALAR, tam inşa
⑤ KOŞ    tam inşa: 3 bekleyen yama + ③ + ④ + 9 UFUK sabiti — TUZ BİR KEZ DEĞİŞİR
```
🔴 **③④ ve bekleyen üç yama (`MOTOR-BILINEN-ALAN` · `MOTOR-V-KID` · ölü betik uyarısı) ile
9 UFUK sabiti AYNI tam inşada girecek.** Ölçüldü (`MOTOR-LEGO-0925`): 19 commit ayrı ayrı
girdiği için önbellek **iki hafta boyunca HİÇ isabet almadı.** Tuz **bir kez** değişecek.

---

## 6 · SINIF TANIMLARI — Emre, 4 Ekim 2026 (S1 ve S2 CEVAPLANDI)

> **D** = milimetrik, **FİİLÎ** durum (*"tam üzerinde anlaşılmış değil"*)
> **E** = milimetrik, **HUKUKÎ METNE** dayanır
> **F** = milimetrik, **ULUSLARARASI TANINMIŞ** (BM/dünya devletleri) — *"E'den farkı yok, çok mühim değil"*
> **C** = **MİLİMETRİK HAT YOK.** Anlaşma şehirleri bölüştürür; sınır, bölüşülen şehirlerin
> **bölgelerinin birleşimidir**. Bölgeler iki devlet arasındaki şehirlerin bölgelerinden kurulur.
> **A / B** = **tarihî kayıtlara** dayanır (anlaşma yok); sınır yine şehir bölgelerinden.
> *"A B C sınıfları arasındaki ayrım incedir."*

### 🔴 6.1 · ÖLÇÜM — Emre'nin modeli VERİYLE BİREBİR UYUŞUYOR
`dayanak.alinti` alanı anlaşmanın **kendi sözünü** taşıyor; C ile E arasındaki fark **kaynağın
kendi dilinde** görünüyor:
```
C  kesinlik_km 10 · nokta 2    "immediately to the south of the locality of Payas and will
                                proceed generally towards Meidan-Ekbes"   (Ankara İtilafnamesi md.8)
C  kesinlik_km 10 · nokta 2    "a line drawn from Enos on the Aegean Sea to Midia on the Black Sea"
C  kesinlik_km 40 · nokta 153  "the limits of the two empires were VAGUELY DEFINED"
──────────────────────────────────────────────────────────────────────────────────────────
E  kesinlik_km 1.5 · nokta 77  "Bulgaristanın elyevm TAHDİT EDİLMİŞ olduğu şekilde cenup hududu"
E  kesinlik_km 1.5 · nokta 84  "Meriç mecrası … Arda mecrası … Bosna Köy'ü Türkiye'de bırakan … hat"
```
⇒ **C**: *"locality"* adıyla · *"generally towards"* · *"vaguely defined"* = **şehirler ve yönler**
⇒ **E**: *"tahdit edilmiş"* (işaretlenmiş) · *"Meriç mecrası"* = **nehir yatağı, ölçülmüş hat**
**Niceliksel ayırt edici `kesinlik_km`:** C ort **8,3** / med **5** · E ort **2,7** / med **1,5**.

### 🟢 6.2 · `sinif: "YOK"` 352 KAYIT — Emre'nin tahmini DOĞRU, ve DAHA GÜÇLÜ
```
kategori: D-YOK     351 / 352      (öteki 1: "fiili")
nokta 0 — GEOMETRİ YOK  351 / 352
not'unda "A/B" geçen       228 / 352
not'unda "ELDE YOK" geçen  208 / 352
🟢 kategorisi de olmayan: 0   ⇒ GERÇEKTEN SINIFSIZ HAT YOK
```
Örnek not: *"1923 hattının koordinatı ELDE YOK (1913 protokol metni/haritası okunmadı) ⇒ bu
kutuda D ÇİZİLMEZ, **A/B geçerli**. Bugünkü çizgi 1923'ü GÖSTERMEZ."*
⇒ Bunlar **sınıflandırılmamış değil**, **"hat çizilemez, A/B geçerli" diye BEYAN EDİLMİŞ**.
`D-YOK` = *"D olmalıydı ama koordinatı yok"*. ⇒ **Yapılacak iş değil, kapanmış bir beyan.**

### 🔴 6.3 · VE BU, §3.1'DEKİ KENDİ SAYIMIN ANLAMINI ÇÜRÜTÜYOR
§3.1'de *"534 hat (%67) boyamayı etkilemiyor"* yazdım ve bunu **kusur gibi** sundum. Ölçüm:
```
E  267  ✅ yaslanıyor — DOĞRU
C  140  ✅ yaslanMIYOR — DOĞRU (hat yok; sınırı BÖLGELER kurar, Emre'nin modeli)
YOK 352  ✅ yaslanMIYOR — DOĞRU (geometri YOK, 351'inde nokta 0; A/B beyanlı)
D   42  🔴 YASLANMIYOR — **YANLIŞ.** D milimetriktir (Emre: "ikisi de milimetrik")
```
⇒ **GERÇEK BOŞLUK 534 DEĞİL, 42.** `_D_YASLA_SINIF_HUKUKI = {F, E}` tanımına **`D` eklenecek.**
📌 *"%67 yaslanmıyor"* sayısı doğruydu, **çıkarımı yanlıştı** — 492'si doğru davranıyordu.
Bugünün en sık ailesi: **ölçüm doğru, çıkarım yanlış.**

## 7 · AÇIK SORU (Emre'ye)

| # | soru |
|---|---|
| **S3** | H4 için `t: 1923-10-29` kenetli kayıtların gerçek bitiş tarihleri aranacak mı (ayrı kampanya), yoksa UFUK içinde kalanı yeterli mi? |
