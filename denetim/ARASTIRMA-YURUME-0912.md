# YÜRÜME VE TIRMANMA BİLİMİ — `R1` araştırma raporu

**Oturum:** KITA 9 · **12 Eylül 2026** · şartname `oturumlar/YURUME-BILIMI-PROGRAMI.md §2-R1`
**Makine okunur çıktı:** `denetim/VERI-YURUME-0912.json` ← **KITA 6'nın girdisi bu**
**Öngörü (ölçümden ÖNCE yazıldı, `D022`):** `denetim/ONGORU-YURUME-0912.json` · commit `ddd1f61`
**Aletler:** `ARAC-YURUME-SINA-0912.py` (kaynak kapsaması sınavı) · `ARAC-YURUME-PDF-0912.py` (ikinci PDF çıkarıcı)

> Bu rapor **anlatıdır**. Bağlayıcı olan `.json`dur; her sayı orada `kaynak:` ile durur.
> Sınav: `py denetim/ARAC-YURUME-SINA-0912.py` → **29 kaynaklı düğüm, 0 kaynaksız.**

---

## ⓪ ÜÇ MANŞET

### 🔴 ① Üç standart model, Emre'nin sorusunda **İŞARET OLARAK** ayrışıyor

Emre şunu sordu: *"1000 m rakıma 1000 m mesafe ile çıkmak ile 1000 m rakıma
4000 m mesafe ile çıkmak aynı şey değildir."* Üçünü de hesapladım:

| model | (b) 1000 m / 1000 m · %100 | (c) 1000 m / 4000 m · %25 | b ÷ c |
|---|---|---|---|
| **Tobler** | 9,30 saat | 1,96 saat | **4,74** |
| **Naismith** | 1,87 saat | 2,47 saat | **0,76** |
| **Munter** | 2,75 saat | 3,50 saat | **0,79** |

🔴 **Tobler dik yolu 4,7 kat YAVAŞ sayıyor; Naismith ve Munter dik yolu uzun
yoldan %21-24 HIZLI sayıyor.** Sebep yapısal, ve bir tercih değil bir *biçim*
farkı:

```
TOBLER         EĞİME göre ücret keser  → dik yol pahalı, uzun-yumuşak yol ucuz
NAISMITH/MUNTER DİKEY METREYE sabit ücret keser, yatayı EKLER
               → aynı zirveye giden UZUN yol HER ZAMAN daha pahalı
```

⇒ **Emre haklı, ve modellerden yalnız Tobler onun sezgisini taşıyor.**
Ama Tobler'in *büyüklüğü* (4,7 kat) bir **ekstrapolasyondur** — aşağıya bak.

**Motor için hüküm:** maliyet fonksiyonu **eğim tabanlı** olmalı; Naismith/Munter
tipi *"dikey metreye sabit ücret"* biçimi Emre'nin ayrımını **ifade edemez**.

### 🔴 ② Bir tarihî kaynak, modern askerî talimnamenin **zorlanmış yürüyüş tavanını** aşıyor

Osmanlı ordusunun günlük menzili için iki akademik kaynak **3,2-3,8 kat** ayrıştı.
Çözdüm, ve gerekçesi ölçülebilir — ayrıntı `§④`.

### 🟢 ③ Kalibrasyon hedefinin **kendisi** özneyi söylüyor

Emre'nin *"güney düz ova → 200 km / 40 saat"* hedefi **5,0 km/saat** demektir —
ve bu **tam olarak** Tobler'in düz hızı (5,04) ve Naismith'in düz hızıdır.
Aynı bütçe **yüklü ordu** öznesiyle 200 değil **~90 km** verirdi. Ayrıntı `§⑥`.

---

## ① DÜZ ARAZİ GÜNLÜK MENZİL — dördü ayrı, ve **seçmedim**

> Şartname: *"hangisi 'bölge sirayeti' için doğru özne? Bunu SOR, kendi başına seçme."*
> **Seçmedim.** Dördü de `VERI…json §K4`te; seçim koordinatörün.

| özne | günlük | dayanak |
|---|---|---|
| yalın yürüyücü, **yolda** | **32 km** (4,0 km/s × 8 s) | FM 21-18, Fig. 3-1 + para. 4-20 |
| yalın yürüyücü, **arazide** | **19,2 km** (2,4 km/s × 8 s) | FM 21-18, Fig. 3-1 |
| **kervan** | **30-40 km** | Ekin 2017, *Belleten* 81(291) s. 388 |
| **yüklü ordu** (Osmanlı) | **~18 km** (13-22) | Murphey 1999, *Ottoman Warfare* |
| süvari / ulak | **ölçülemedi** | TDV `menzil--osmanli` km vermiyor |

🟢 **Ve `arazi/yol` oranı iki bağımsız kaynakta AYNI çıktı:**
```
Tobler 1993   "off-path travel … multiplied by 3/5"      = 0,60
FM 21-18      gündüz arazi 2,4  ÷  gündüz yol 4,0        = 0,60
```
Bu, motorun **yol/yol-dışı** ayrımı için kaynaklı bir çarpandır.

⚠️ **Ordu çarpanı bir GÜNLÜK MENZİL oranıdır, ANLIK HIZ oranı değil.** Ordunun
yavaşlığı yalnız yürüyüş hızından değil, konak kurma-bozma ve ikmalden de
geliyor. İkisini **ayıran bir ölçüm bulunamadı** — `K11`de damgalandı.

---

## ② EĞİM–HIZ EĞRİSİ — ve hangisi nerede geçerli

**Tobler (1993)**, hakemli bir kaynaktan **birebir**:
```
Tobler(s) = 6e-3.5|s+0.05|      s = vertical change divided by horizontal change
                                    (Herzog 2014, Archeologia e Calcolatori 25)
```
⚠️ Herzog aynı sayfada **en sık yapılan hatayı** adıyla anıyor: yüzde eğimi 100'e
bölmeden, ya da **dereceyi** doğrudan koyarak kullanmak. Motor bu dönüşümü
**açıkça** yapmalı.

🟢 **Ve Tobler ampirik olarak sınanmış — Higgins 2021 (*Findings*, hakemli):**
```
Tobler der          en hızlı 6,0 km/s @ -%5   ·  düz 5,04 km/s
Higgins ÖLÇTÜ       en hızlı 4,6 km/s @ -%3,3 ·  düz 4,4 km/s
                    ve dik eğimlerde Tobler'den HIZLI
```
⚠️ **Örneklem N=1** (yazarın kendi izleri, kentsel Hong Kong). Bir yön işareti,
bir kalibrasyon değil (`D021`). Ama düzde ~%13 iyimserlik iki kaynakta da aynı
yöne bakıyor: FM 21-18 de yolda **4,0** diyor, 5,0 değil.

**Minetti 2002** (*J Appl Physiol* 93:1039) metabolik maliyeti ölçtü, ve üç şey söylüyor:
```
en ucuz hareket DÜZ DEĞİL, -%10 EĞİM      0,81  vs  düz 1,64 J/kg/m   (YARISI)
+%45 eğimde maliyet                      17,33  =  düzün 10,6 KATI
ölçüm aralığı                            -0,45 ile +0,45 ARASI, fazlası YOK
```
⇒ **Eğim cezası doğrusal değil, üsteldir** — ve bu, `EGIM_CARPANI = 0,005` gibi
**doğrusal** bir sabitin niçin yanlış biçimde olduğunun ölçülmüş cevabıdır.

**İniş bedava değil ve tek yönlü de değil** — Langmuir 1984:
hafif iniş (5-12°) düzden **hızlı** (300 m'de −10 dk), dik iniş (>12°) düzden
**yavaş** (300 m'de +10 dk). ⇒ *Tek bir iniş çarpanı ikisinde de yanlış olur.*

---

## ③ GEÇERLİLİK SINIRI — ve *"yürüyüş nerede biter"* sorusunun dürüst cevabı

```
🟢 SAVUNULABİLİR SINIR    S = 0,45  (24,2°)  — Minetti'nin ÖLÇÜM TAVANI
🟡 kritik eğim (zikzak)   S = 0,12          — Herzog 2014 (Posluschny 2012)
🔴 yürüyüş→tırmanış eşiği  BULUNAMADI
```

**Öngörümde 30-35° yazmıştım. Doğrulayamadım.** SAC/CAS T1-T6 ölçeği el
kullanımının T3-T4'te başladığını **nitel** olarak söylüyor ama **derece
vermiyor**, ve bulunan sayfaların tamamı blog/ticari — `§4` kırmızı listesinde.
⇒ Uydurmak yerine **ölçülmüş sınırı** kullandım: **24,2°'nin ötesinde yürüme
maliyeti ölçülmüş değildir.**

📌 Bu, `§K5b`nin hükmünün dayanağı: 45°'lik örnek Minetti'nin tavanının
**1,9 katı**. Tobler'in oradaki 9,30 saati bir ölçüm değil bir **ekstrapolasyondur**,
ve Naismith'in 1,87 saati 45°'de **yürünebildiğini** varsayar — varsayılamaz.
Savunulabilir cevap **2,5-3,5 saat** (tırmanma hızından; Munter'in 2,75'i bu
aralığın içine düşüyor).

**Kritik eğim (%12) ayrı bir şey söylüyor ve motoru doğrudan ilgilendiriyor:**
bunun üstünde gerçek yol **eğim yönünde gitmez, uzar**. Yani bir hücrenin
gerçek yol uzunluğu yatay mesafeden **büyüktür**.

---

## ④ 🔴 KAYNAK ÇELİŞKİSİ — çözüldü, ve elenen kayıt SİLİNMEDİ

| kaynak | Osmanlı ordusu günlük |
|---|---|
| Murphey 1999 (alanın standart monografisi) | **≤18 km** (13-22) |
| Ekin 2017, *Belleten* (hakemli) | kervan 30-40; ordu **daha yavaş** |
| İÜ *Menzil Hizmetleri* makalesi | **57-68 km** (10-12 saat) |

**Aykırı iddia dört ayrı gerekçeyle elendi:**
```
① Murphey aynı sistemde menzil arasını 4-5 SAAT veriyor, 6-8'i İSTİSNA sayıyor.
   İddia edilen 10-12 saat, istisnanın da ÜSTÜNDE.
② Murphey'in 18 km'sinin 3,2-3,8 KATI.
③ FM 21-18 modern piyade için 24 SAATLİK ZORLANMIŞ tavanı 56 km veriyor.
   İddia, ağırlık katarıyla yürüyen 16. yy ordusuna modern zorlanmış tavanın
   ÜSTÜNDE bir GÜNLÜK RUTİN yüklüyor.
④ Ekin kervanı 30-40 diyor, orduyu bundan YAVAŞ sayıyor. İddia orduyu kervandan
   1,6-2,3 kat HIZLI yapıyor — YÖNÜ TERS.
```
🔴 **Ve bir bağımsızlık tuzağı:** bu sayı aramada **iki ayrı yerde** çıktı ama
**ikisi de aynı makaledir** (biri DergiPark kopyası). *Tekrar eden bir iddia
bağımsız teyit değildir.*

🟢 **Ve Murphey kendi içinde çapraz doğrulanıyor:** menzil arası 4-5 saat ×
4 km/s = **18 km** — aynı sayı, iki bağımsız yoldan.

📌 Kayıt `VERI…json §K7`de **duruyor**, elenme gerekçesiyle. `D173`: *bir listede
olmayan şey, elenmiş olandan ancak eleme gerekçesi yazılırsa ayırt edilebilir.*

⚠️ **Ve TDV bir kademe daha söylüyor:** Halaçoğlu (`menzil--osmanli`) menzilleri
*"üç saatten yirmi sekiz saate kadar"* aralıklarla veriyor ve **km vermiyor**,
ordu/kervan/ulak için **ayrı sayı da vermiyor**. ⇒ *Menzil türü belirtilmeden bir
menzil aralığından günlük yürüyüş mesafesi türetilemez* — `D073`ün tam deseni:
iki kaynağın aynı şeyden bahsettiği **doğrulanmadan** çelişki ilan edilemez, ve
burada aslında **üç ayrı menzil türü** (askerî · haberleşme · hac) konuşuluyor.

---

## ⑤ GEÇİT Mİ TIRMANIŞ MI — bir eşik oranı

**Eşdeğerlik — iki modelden, ve yakınlar:**
```
Naismith   600 m tırmanış = 1 saat = 5 km düz   ⇒  1 m tırmanış ≈ 8,3 m düz yol
Munter     100 m dikey = 1 birim = 1 km yatay   ⇒  1 m tırmanış ≈ 10 m düz yol
```

**Emre'nin vakası — 2000 m zirve yerine 1200 m geçit** (800 m çıkış + 800 m iniş kaçınılıyor):
```
Naismith + Langmuir   1,78 saat kazanç  ⇒  8,9 km dolanmaya değer
Munter                2,80 saat kazanç  ⇒ 16,8 km dolanmaya değer
```
⇒ **Geçit, dolanma ~9-17 km'den kısa olduğu sürece kârlıdır.** İki model 1,9 kat
ayrışıyor; **dar olanı (9 km) temkinli seçimdir.**

🟢 **Ve eşik motorun çözünürlüğünde ifade edilebilir:** ızgara adımı 0,05° =
5,57 km ⇒ 9 km ≈ **1,6 hücre**, 17 km ≈ **3 hücre**.

---

## ⑥ YÜKSEKLİK CEZASI — ve niçin **ikincil**

```
eşik           1500 m
kayıp          %1 / 100 m   (ya da akklimatize olmayanda ~%6,3 / 1000 m)
2000 m'de      %5      ·   3000 m'de  %15
akklimatizasyon VO2max kaybını KAPATMIYOR
```
🟡 İki değer literatürde yan yana dolaşıyor ve **tek bir hakemli makaleye
indiremedim**; ikisini de kaydettim, **seçim yapmadım.**

**Hüküm:** atlasın çoğu geçidi 2500 m'nin altında; orada ceza %10'un altında
kalıyor — ve Minetti'de **+%45 eğimin maliyeti düzün 10,6 katı**. ⇒ Yükseklik
cezası **önce eklenmemeli**; önce eğim, sonra pürüzlülük (`R3`), en sonda yükseklik.

**Kar sınırı ve kışın kapanma: `ölçülemedi`.** `§4`e uygun sayısal bir kaynak
bulunamadı. Ekin 2017 s. 416 kışın nakliye ücretinin **~%25 arttığını** veriyor —
bu bir **maliyet** sinyalidir, **hız** değil, ve ikisi karıştırılmamalı.

---

## ⑦ TARİHÎ ÇAPRAZ KONTROL — ve öngörümün yönü tuttu, büyüklüğü tutmadı

```
modern yalın yürüyücü (FM 21-18)   32 km/gün
Osmanlı yüklü ordusu (Murphey)     18 km/gün
ayrışma                            1,8 kat     (öngörüm: 1,3-2,0 — SINIRDA)
Osmanlı kervanı (Ekin)             30-40 km/gün ≈ modern yürüyücüyle AYNI
```

📌 **Ve asıl ders buradan çıkıyor:** tarihî kaynakla modern kaynak **ayrışmıyor** —
*farklı özneleri ölçüyorlar.* Kervan ile modern yalın yürüyücü neredeyse aynı;
ayrışan tek şey **ordudur**, ve onu ayrıştıran şey yürüyüş hızı değil **konak
düzeni ve ikmaldir**. Şartname *"ayrışırsa tarihî olanı esas al"* diyor; burada
**esas alınacak bir ayrışma yok**, özne seçimi var.

---

## ⑧ ÖNGÖRÜLERİM — ölçümden önce yazıldı, şimdi hesabı

| öngörü | sonuç |
|---|---|
| Minetti'nin minimumu düz değil, **−%10 eğimde** | 🟢 **TUTTU** (0,81 vs 1,64) |
| Emre'nin (b) örneği: formüller geçersiz, 2-4 saat | 🟢 **TUTTU** (savunulabilir 2,5-3,5) |
| (c) örneği 2,0-2,5 saat | 🟡 **KISMEN** — Tobler 1,96 ✓, Naismith 2,47 ✓, **Munter 3,50 dışarıda** |
| geçit eşiği 7-10 km / 1000 m | 🟢 **TUTTU** (8,3-10,0) |
| tırmanma hızı 300-400 m/saat | 🟡 **türetilebildi** (Munter'den 400), ama 300 için `§4`e uygun kaynak **bulunamadı** |
| yürüyüş→tırmanış eşiği 30-35° | 🔴 **DOĞRULANAMADI** — sayısal eşik **bulunamadı**; savunulabilir tek sınır **24,2°** (Minetti ölçüm tavanı), yani tahminimin **altında** |
| tarihî menzil modernden 1,3-2,0 kat yavaş | 🟡 **SINIRDA TUTTU** (1,8) ama **teşhisim yanlıştı**: ayrışma "çağ" farkı değil **özne** farkı |
| Tobler'in orijinaline ulaşamama riski | 🔴 **GERÇEKLEŞTİ** — ve `D144` hakemli bir kaynaktan (Herzog 2014) birebir alıntıyla kapatıldı |
| ordu 25 km'nin üstüne çıkmayacak | 🟢 **TUTTU** (18) |

📌 En değerli çürüme **sonuncudan bir öncekidir**: *"tarihî kaynak daha yavaş"*
öngörüm **sayı olarak tuttu ama sebebi yanlıştı.** `§11`in *"ölçüm doğru, çıkarım
yanlış"* ailesi — burada çıkarım da doğru çıktı, **gerekçe** yanlıştı.

---

## ⑨ BULAMADIKLARIM — `D107`

**`bulunamadı`:** yürüyüş→tırmanış geçişi için sayısal eşik · Munter yönteminin
orijinal SAC/DAV yayını (erişilenlerin tamamı `§4` kırmızı listesinde) · 300 m/saat
tırmanma hızı için kurumsal kaynak · kar sınırı ve geçit kapanması için sayısal kaynak.

**`ölçülemedi`:** süvari/ulak günlük menzili (TDV km vermiyor) · ordunun
yavaşlığının ne kadarı yürüyüş hızı, ne kadarı konak/ikmal · yükseklik cezasının
tek hakemli değeri (iki rakam yan yana duruyor).

**`okumadım`:** Tobler 1993 NCGIA Teknik Rapor 93-1'in **kendisi** (formül hakemli
bir kaynaktan birebir alındı) · Naismith 1892 ve Langmuir 1984'ün **orijinalleri** ·
Murphey 1999'un **kitabı** (sayılar ikincil aktarımdan; 🔴 **bu, raporun en zayıf
ayağıdır ve kapatılmalıdır** — ordu sayısı bütün `§④` hükmünü taşıyor).

---

## ⑩ KOORDİNATÖRE İKİ SORU

**① ÖZNE — şartname seçmemi yasakladı, seçmedim.** Ama ölçüm bir şey söylüyor:
Emre'nin kendi hedefi (200 km / 40 saat = **5,0 km/saat**) tam olarak *yalın,
yol üstünde, yüksüz yürüyücü* demektir. Aynı bütçe yüklü ordu öznesiyle **~90 km**
verir. ⇒ **Özne "yalın yürüyücü" mü — teyit ister misin?**

**② `R1` tek başına Emre'nin kuzey hedefini (40-50 km) TUTTURAMAZ, ve bunu
öngörümde yazmıştım.** Eğim-hız eğrisini düzeltmek 2000 m / 40 km'lik bir rampada
*ortalama* eğimi değiştirmez — %5 eğim Tobler'de hâlâ düze yakındır. Hedefi
tutturacak olan şey **hücre içi dalgalanmadır**, yani `R3`. ⇒ **`R1` verisi `R3`
olmadan birleştirilirse kuzey hedefi tutmaz; sıralama böyle kurulmalı.**
