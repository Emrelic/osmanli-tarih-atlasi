# BULGU — `Değişmez 4c` KÖKENİ (286 vs 280)

**Oturum:** OPUS HAZIR KITA 127 · Opus 5 · `local_8aae7ac2-1d69-49dd-8bf7-5908724bae6c`
**Şartname:** `oturumlar/DAGITIM-0902-AKSAM.md` bölüm ②
**Tarih:** 2 Eylül 2026 · **DÜZELTME YAPILMADI** — hiçbir `data/` ya da `arac/` dosyasına yazılmadı.

---

## 0. CEVAP — tek cümleyle

> Şartnamenin sorusu **"bu altı, 280'e mi eklendi yoksa 280'in içinden altısı mı
> yer değiştirdi?"** idi.
> **ÖLÇÜM: İKİSİ DE DEĞİL.** `4c` içinde **hiçbir kayıt yer değiştirmedi (0)**.
> **7 kayıt ÇIKTI, 13 kayıt GİRDİ**, ve yirmisinin yirmisi de **tek bir
> commit'ten** geldi: `aaadabf`, 2 Eylül 11:58.
> `+6` bir **artık değil, bir NET**: aynı anda bir borç **ödendi** ve daha
> büyük yeni bir borç **doğdu**.

---

## 1. YÖNTEM — ve niçin bu yöntem

**Soru doğrudan ölçülemezdi.** `BEKLENEN_ASAN = 280` düz bir **sayıdır, liste
değil** (`arac/denetle.py:1588`). Yani *"280'in hangi kayıtlar olduğu"* bilgisi
kodda **yok**. Aynı boşluk `BEKLENEN_HAYALET`te de var (`:1506`).

⇒ **Kontrol grubu kuruldu.** `git archive 07e1ec9 -- arac data` ile
**1 Eylül 22:50** anı ayrı bir dizine çıkarıldı ve **o anın `denetle.py`si o anın
verisiyle** koşturuldu. Böylece `280` bir sayı değil bir **liste** olarak elde
edildi ve bugünün `286`sıyla küme farkı alındı.

**Tabanın seçimi ölçüldü, varsayılmadı.** `git log -G "BEKLENEN_ASAN = "`:

```
590  30 Ağu 03:51  e1c16d2   (dalın doğuşu)
275 → 277  31 Ağu 16:33  d24718f
277 → 278   1 Eyl 11:23  a7f000f
278 → 280   1 Eyl 22:50  07e1ec9   ← EN SON TABAN, kontrol grubu bu
```

### 🟢 Kontrol grubu geçerli — çünkü o an TEMİZDİ

Taban koşusunun kendi çıktısı:

```
Değişmez 1  ✓ 2624 yerleşim        Değişmez 4  ✓   8 hayalet (beklenen   8)
Değişmez 2  ✓  528 kırılma         Değişmez 4c ✓ 280 aşan    (beklenen 280)
                                    Değişmez 4d ✓ 468        (beklenen 468)
                                    Değişmez 4s ✓ 143        (beklenen 143)
SONUÇ: temiz
```

**Dört tavanın dördü de o commit'te BİREBİR kalibreliydi.** Yani bugünkü her
sapma, tanımı gereği **07e1ec9'dan sonraki delta**dır.

> 🔴 **VE BU, KENDİ SABAHKİ CÜMLEMİ DÜZELTİYOR.** M-2198'de *"`denetle.py`nin
> kendi tabanları çok bayat"* yazmıştım. Ölçüm ayırıyor:
> ```
> BİLGİ sayaçları   BEKLENEN_YERLESIM=968 · BEKLENEN_KIRILMA=476   🔴 gerçekten bayat
> TAVAN sayaçları   4 · 4c · 4d · 4s                               🟢 07e1ec9'da TAM
> ```
> İkisi tek cümlede birleşince yanlış oluyordu. Tavanlar bakımlı, bilgi
> sayaçları bakımsız.

> 📌 **§1.5 tablosu için de aynı incelik:** tablo *"2624 yerleşim"* diyor ve
> taban koşusu da **2624** ölçtü. Yani tablo **yanlış yazılmamış**, yalnız
> **bir commit geride**. `BAYAT` damgası doğru, ama *"özensiz"* değil
> *"gecikmiş"* anlamında.

### Ayrıştırma güvencesi

Kıyas betiği `denetle.py`nin **kendi çıktısını** okur (veriyi değil) ve
**ayrıştırdığı satır sayısı aletin bastığı başlığa eşit değilse DURUR**.

🔴 **Ve durdu:** ilk sürüm `ad` ile `kimlik` arasında iki boşluk varsaydı; uzun
adlarda dolgu erirse tek boşluk kalıyor (`Dihistan ovası (Meşhed-i Misriyân) iran`).
**286 yerine 281 gördü ve çıkış kodu 3 ile durdu.** Sayı zorlanmadı,
**ayrıştırıcı düzeltildi**: artık sağdaki sabit yapıya tutunuyor, kimlik gövdenin
son parçası (slug'da boşluk olmaz). Düzeltmeden sonra **286/286 ve 280/280**.

---

## 2. ÖLÇÜM — küme farkı

```
TABAN 280  ·  BUGÜN 286  ·  ORTAK 273
GİDEN  7      YENİ 13      NET +6
AYNI YERLEŞİM HEM GİDEN HEM YENİ (yer değiştirdi):  0
```

### Kimlik dağılımı — taban → bugün

| kimlik | taban | bugün | delta |
|---|---|---|---|
| `zend` | 132 | 132 | 0 |
| `macaristan` | 15 | 15 | 0 |
| `ilhanli` | 12 | **13** | **+1** |
| `akkoyunlu` | **7** | **0** | **−7** |
| `rusya` | 0 | **11** | **+11** |
| `eretna` | 0 | **1** | **+1** |

### GİDEN — 7 kayıt, hepsi `akkoyunlu` (künye 1340-01-01 → **1514-01-01**)

```
Arpaçay (Akyaka)       1281-01-01→1534-01-01   +20.0 yıl
Digor                  1281-01-01→1534-01-01   +20.0 yıl
Eçmiyadzin             1281-01-01→1534-01-01   +20.0 yıl
Gümrü (Aleksandropol)  1281-01-01→1534-01-01   +20.0 yıl
Iğdır                  1281-01-01→1534-01-01   +20.0 yıl
Ceylanpınar            1281-01-01→1516-08-24    +2.6 yıl
Bitlis                 1467-01-01→1515-09-15    +1.7 yıl
```

### YENİ — 13 kayıt

**11 `rusya`** (künye 1547-01-16 → **1917-03-15**):

```
Derbend · Gence            1813-10-24→1923-10-29   +6.6 yıl
Kutaisi                    1810-02-20→1923-10-29   +6.6 yıl
Sohum                      1810-07-11→1923-10-29   +6.6 yıl
Revan                      1828-02-22→1923-10-29   +6.6 yıl
Soçi (Sâşe) · Tuapse ·
Maykop (Çerkezya)          1829-09-14→1923-10-29   +6.6 yıl
İsmail                     1878-07-13→1923-10-29   +6.6 yıl
Ardahan                    1877-05-17→1918-05-25   +1.2 yıl
Kars                       1877-11-18→1918-05-25   +1.2 yıl
```

**2 Erzurum** — art arda gelen tek bir zincir:

```
Erzurum  ilhanli  1281-01-01→1360-01-01   künye 1353-01-01   +7.0 yıl
Erzurum  eretna   1360-01-01→1385-01-01   künye 1381-01-01   +4.0 yıl
```

### 🟢 ÇAPRAZ SINAV — `4s` bağımsız olarak doğruluyor

`akkoyunlu` künyesi **1340**'ta doğuyor. Giden 7 kaydın **6'sı 1281-01-01'de
başlıyor** ⇒ doğumdan önce ⇒ `4d`de de vardılar ⇒ `4c ∩ 4d = 4s`teydiler.
Bitlis 1467'de başlıyor ⇒ yalnız `4c`.

⇒ **`4s`ten tam 6 kayıt düşmeli.** Ölçüm: `4s` **143 → 137**, yani **−6**. ✓

Ve 11 `rusya` kaydının hepsi 1810-1878'de, yani künye doğumundan (1547) **sonra**
başlıyor ⇒ hiçbiri `4d`ye girmiyor ⇒ `4s`i büyütmüyorlar. ✓
İki sayaç birbirini bağımsız doğruluyor.

---

## 3. `4c ∩ 4d` — şartnamenin istediği uyarı

`denetle.py:3342` aynen şunu basıyor: **🔴 AYRI KOVA DEĞİL KESİŞİM — 4c ∩ 4d.
ÜÇÜ TOPLANMAZ.** Bugünkü değerler:

```
4c 286  ·  4d 432  ·  4s 137
4c YALNIZ 149  ·  4d YALNIZ 295  ·  İKİSİ BİRDEN 137  ·  BİRLEŞİK 581
```

⚠️ **Ve `denetle.py:1664`ün notu bunu bir adım öteye taşıyor:** *"tek kayıt üç
sayacı birden büyütüyor"* (`zend` vakası). ⇒ *"`4c` altı fazla"* cümlesi **altı
bağımsız kayıt** demek zorunda değildi. Bu vakada öyle çıktı (11 `rusya` yalnız
`4c`), **ama bu ölçümün sonucudur, varsayımı değil.**

---

## 4. KÖKEN — hepsi TEK commit

`git log -S` ile, `data/yerlesimler.js` üzerinde, her grup için ayrı ayrı:

```
GİDEN akkoyunlu (Bitlis)          →  aaadabf   2 Eylül 11:58
YENİ  ilhanli   (Erzurum)         →  aaadabf   2 Eylül 11:58
YENİ  rusya     (Kars)            →  aaadabf   2 Eylül 11:58
YENİ  rusya     (Sohum)           →  aaadabf   2 Eylül 11:58
```

`07e1ec9..HEAD` arasında `data/yerlesimler.js`e dokunan **yalnız iki commit** var:
`aaadabf` (11:58, 137 yama) ve `e9ba26c` (15:51, ikiz beyanı). Yirmi hareketin
tamamı **birincisinden**.

Commit'in adı: **"137 YAMA İNDİ — ve FETRET DÜZELTMESİ 48 DÖNEMİ 4d'DEN DÜŞÜRDÜ"**

### 🔴 ASIL BULGU — commit kendi 4c etkisini RAPOR ETMEDİ

Commit gövdesi dört sayacı **adıyla ve deltasıyla** ölçüyor:

```
Değişmez 4d   480 → 432   ✓        Değişmez 4s   143 → 137   ✓
Değişmez 7    523 → 515   ✓        Değişmez 2t    19 →  18   ✓
```

`4c`yi ise **kalan kırmızılar** listesine koyup şöyle sınıflıyor:

> *"(c)(d) 2i ve 4c: küçük sayımlar, sınıflandırılacak."*

**Bu sınıflandırma ölçümle çürüyor.** `4c`nin `+6`sı *"sınıflandırılacak küçük bir
sayım"* değil — **o commit'in kendi ürünü**, ve altında **20 kayıtlık bir
devir-teslim** var.

**ÖLÇÜM:** commit `4d/4s/7/2t` deltalarını yazdı, `4c` deltasını yazmadı.
**ÇIKARIM (ayrı satır):** yama partisi **hedeflediği eksende** ölçüldü, **zarar
verdiği eksende** ölçülmedi. `4c` yalnız **net** gösterdiği için (`280 → 286`),
kazanılan `−7` ile doğan `+13` **birbirini gizledi**.

> 📌 ***Net gösteren bir sayaç, eşzamanlı ödeme ile eşzamanlı borçlanmayı aynı
> anda saklar.*** Bu, `§11`in *"denetim var ≠ o soruyu soruyor"* ailesinin
> **muhasebe** yüzü: sayaç doğru sayıyor, ama **brüt hareketi** hiç sormuyor.

---

## 5. MEKANİZMA — 13 yeninin 11'i tek bir sınıf

`rusya` künyesi **1917-03-15**'te bitiyor (Şubat Devrimi). Onbir kaydın hepsi o
günün **ötesine** taşıyor. Ve künye seti ardılları **zaten taşıyor**, üstelik
**boşluksuz**:

```
rusya                 1547-01-16 → 1917-03-15
rusya-gecici-hukumet  1917-03-15 → 1917-11-07
sovyet-rusya          1917-11-07 → 1923-10-29
```

**ÖLÇÜM:** zincir kapalı, aradan gün düşmüyor.
**ÇIKARIM (ayrı satır):** onbir kaydın çaresi **yeni künye yazmak değil**,
var olan zinciri kullanmak. Bu, sabah `Değişmez 4`te ölçtüğüm `iran`/Pehlevî
vakasının **birebir aynı sınıfı** — *doğru tarih, yanlış kimlik seçimi* —
bu sefer `4c` kovasında.

⚠️ **AMA İKİ KAYIT AYRI:** `Kars` ve `Ardahan` **1918-05-25**'te bitiyor —
Elviye-i Selâse, gerçek bir olay. Onlarda kusur dönemin **bitişi** değil,
1917-03-15 → 1918-05-25 arası **1,2 yılın hangi Rus künyesine yazılacağı**.
Ötekilerden farklı bir soru; **aynı reçeteyle kapatılmamalı.**

**Erzurum'un iki kaydı üçüncü bir şey.** `ilhanli` 1281→1360, künye 1353'te
bitiyor; OK109'un fetret hükmü `ilhanli t:`yi **1340**'a çekiyordu. Erzurum
**1360**'ta bitiyor, yani hem künyeyi (+7,0) hem hükmü (+20 yıl) aşıyor.
**ÖLÇMEDİM:** Erzurum'un `aaadabf` içindeki 137 yamanın hangisinden geldiğini
açmadım. *"Fetret yamasındandır"* **demiyorum** — bakmadım.

---

## 6. DEVRALDIĞIM ÖNCÜLLERİN HÜKMÜ

| öncül | kaynak | damga |
|---|---|---|
| `4c` = 286, beklenen 280 | koordinatör, ÖLÇTÜM damgalı | 🟢 **TUTTU** |
| *"`4c`de `ilhanli` 13 dönem, en büyüğü 18,0 yıl"* | OK109 | 🟢 **TUTTU** (bugün 13; **tabanda 12'ydi**) |
| *"Konya·Niğde 1308→1366 (+13,0)"* | OK109 | 🟢 **TUTTU** — ve **ORTAK** kümede, yani **tabandan önce** vardı |
| *"Erzurum 1281→1360 (+7,0)"* | OK109 | 🟢 **TUTTU** — ama **YENİ**, bugün doğdu |
| *"Bunlar fetret yamasından DEĞİL"* | OK109, *"ölçmedim"* demiş | ⚪ **ÖLÇEMEDİM** — Konya/Niğde için **tutarlı** (taban öncesi), Erzurum için **açık soru** |

> 🟢 Ve sabahki kendi **çıkarımım** bağımsız olarak **doğrulandı**: M-2198'de
> *"`Değişmez 4`ün tavanı aşan 4'ü Lehistan kayıtlarıdır — bu benim ÇIKARIMIM,
> ölçümüm değil"* yazmıştım. `aaadabf`in gövdesi bunu ölçmüş:
> *"(a) VARŞOVA DÜKALIĞI künyesi YOK … p0037 onu **1'den 4'e** çıkardı."*
> ⇒ Çıkarım doğruydu; **çıkarım olduğunu yazmak da doğruydu.**

---

## 7. NE İSTİYORUM — öneri, uygulamadım

1. **`BEKLENEN_ASAN`ı 286'ya çekme.** Çekilirse **13 yeni borç normalleşir** ve
   kazanılan `−7` görünmez olur. Doğru sıra: önce 11 `rusya` kaydı ardıl
   künyelere bölünsün, `4c` **275**e insin, tavan **ondan sonra** sıkılaşsın.
2. **11 `rusya` kaydı tek kalem** — `rusya-gecici-hukumet`/`sovyet-rusya`
   zinciri hazır. Dosya `data/yerlesimler.js` ⇒ **Oturum 0**.
   `Kars`+`Ardahan` **ayrı sorulsun** (§5).
3. **Erzurum'un iki kaydı ayrı kalem** — hangi yamadan geldiği ölçülsün.
4. 🔴 **Sistemik:** bir yama partisi teslim edilirken **net değil brüt** yazılsın
   — *"4c 280→286"* değil, *"4c: −7 akkoyunlu, +11 rusya, +2 erzurum"*.
   `aaadabf` dört sayaç için delta yazdı, `4c` için yazmadı ve **kazancını da
   kaybını da** aynı anda gizledi.

---

## 8. ÖLÇMEDİKLERİM — açıkça

- `4c`nin 273 **ortak** kaydını açmadım; yalnız **fark** ölçüldü.
- `zend`in 132 kaydı (sınıfın %46'sı) **tabanda da vardı**, bu partinin konusu
  değil — **dokunmadım, saymadım.**
- 137 yamanın hangisinin hangi kaydı ürettiğini **yama yama** açmadım;
  köken **commit** düzeyinde ölçüldü, **yama** düzeyinde değil.
- `macaristan`ın 40 yıllık aşması ve `aaadabf`in *"Emre'nin himaye kararıyla
  ilgili olabilir"* işareti — **bakmadım**, o kalem bende değil.

---

## Ekler — yeniden üretmek için

```
scratchpad/ayrinti127.log            bugünkü  denetle.py --ayrinti  (4505 satır)
scratchpad/taban127.log              07e1ec9 anının koşusu          (4493 satır)
scratchpad/taban_07e1ec9/            git archive ile çıkarılan taban ağacı
scratchpad/kiyas4c.py                küme farkı + ayrıştırma güvencesi
scratchpad/kokler.py                 köken taraması (git log -S)
scratchpad/kunye.js                  künye ömürleri (node ile, regex DEĞİL)
```
