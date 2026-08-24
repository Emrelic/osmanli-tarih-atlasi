# BULGU — KAYNAK DESTEK DENETİMİ

**Oturum:** OPUS HAZIR KITA 85 · **Tarih:** 24 Ağustos 2026
**Görev:** OSMANGAZI (koordinatör) sevki · tahta M-1245 → M-1256 → M-1259 → M-1262
**Yetki:** YALNIZ RAPOR. `data/` `arac/` `js/` ve kök `*.md` dosyalarına
yazılmadı. Uygulamayı koordinatör yapar (`CLAUDE.md §7`).

---

## 0. Sorulan soru

Bugüne kadar `kaynak:` alanı için sorulan soru **"KAYNAK YAZILI MI"**ydı ve
temiz cevap veriyordu. Hiç sorulmayan soru:

> **"KAYNAK BUNU SÖYLÜYOR MU?"**

Doğuran vaka (OPUS HAZIR KITA 82, aynı gün): Dubrovnik'in tâbiiyeti hem veride
hem kronolojide `1458-01-01` yazıyordu, madde `kaynak:"dubrovnik"` diyordu,
slug canlıydı, madde doğru maddeydi — ama **"1458" o maddede hiç geçmiyordu.**
Maddenin eşikleri: 1365 · 1430-12-06 · 1442-02 · 1452 · **1459-03-07** ·
1469/71/72/78. Düzeltildi (`8404688`).

Bu rapor şunu cevaplar: **sınıf mı, tek mi?**

---

## 1. Cevap: SINIF — ve tek sınıf değil, ÜÇ ayrı sınıf

| # | sınıf | ne demek | sayı | karar |
|---|---|---|---|---|
| **A** | ÖLÜ ADRES | `kaynak:` var olmayan bir TDV maddesini gösteriyor | **37 slug / 40 çift** | makineyle kesin |
| **B** | KAYNAK BAŞKA TARİH SÖYLÜYOR | Dubrovnik'in tam deseni | **21 çift** | gövde okundu |
| **C** | KAYNAK O TANECİKTE SUSUYOR | madde doğru, olay o maddede yok | **27 çift** | gövde okundu |

Ve dördüncü bir kova, **kusur değil ama "temiz" de değil**:

| **Z** | ÖLÇÜLEMEDİ | gövde alınamadı (§4④) | **53 çift / 8 slug** | tekrar denenecek |

---

## 2. Kapsam ve dörtlü — ölçüm

Otorite `index.html`in kendi `<script>` etiketleri; ayrıştırma regex'le değil
**node ile** yapıldı (`CLAUDE.md`: *"veri zaten bir dilde yazılıysa, o dilin
yorumlayıcısını çağır"*). Kaba `grep` **1215** diyordu; gerçek başka.

```
dosya       19 canlı / diskte 19 · index.html DIŞINDA kalan 0
ad alanı    19 ayrı window.OLAYLAR* anahtarı — ÇAKIŞMA YOK
madde       1226 toplam · kaynak: DOLU 1213 (%98,9) · BOŞ 13
cins        tdv_slug 1169 · bulunamadi 43 · çoklu 1 · url 0
evren       534 benzersiz slug · 1061 (slug, yıl) çifti
```

`bulunamadi` 43 kaydı taramaya **girmedi** — onlar zaten *"arandı, yok"* diye
kayıtlı, yani bu sınıfın kusuru değil.

### Nihai dörtlü

| | çift | oran |
|---|---|---|
| **DESTEKLİ** | 860 | %81,1 |
| **ADAY** | 148 | %14,0 |
| **ÖLÇÜLEMEDİ** | 53 | %5,0 |

> ⚠️ **Bu dörtlü, ilk ölçümün DÜZELTİLMİŞ hâlidir.** İlk koşu
> `877 / 131 / 53` demişti ve **yanlıştı**; sebebi §5'te.

### Adayın elenmesi — 148 → 48

Koordinatörün saydığı üç meşru sebepten **ikisi makineyle sınanabiliyor**:

```
elendi_yuzyil   75   TDV "XV. yüzyılın ortalarında" tipi ifade kullanmış
elendi_hicri    25   TDV yalnız hicrî yıl vermiş (AH karşılığı gövdede var)
MEŞRU ELENEN   100
OKUNAN          48   (21 B sınıfı + 27 C sınıfı)
```

---

## 3. A SINIFI — ÖLÜ ADRES (37 slug)

`kaynak:` alanı HTTP **302** dönen bir slug gösteriyor: adres **yok**.
Dubrovnik'te adres doğruydu, içerik desteklemiyordu; burada **adres yok**.

İki bağımsız testle doğrulandı (HTTP kodu **ve** izlenmiş sayfanın başlığı
`"Arama - TDV İslâm Ansiklopedisi"`).

```
anadolu-hisari · bab-i-ali-baskini · balkan-savaslari · belgrad-antlasmalari
bukres-antlasmasi · buyuk-taarruz · camurlu-savasi · candarli-halil-hayreddin-pasa
cildir-savasi · cimpe-kalesi · cumhuriyet · derbend · duzmece-mustafa
edirne-segedin-antlasmasi · ferhad-pasa-antlasmasi · hasimiler · istanbulun-fethi
izladi-savasi · kasr-i-sirin-antlasmasi · kirim-hanligi · kirim-savasi
kosmidion · kutsal-ittifak · mesaleler-savasi · nasuh-pasa-antlasmasi
ozdemiroglu-osman-pasa · ozi · preveze-deniz-savasi · reji · rumeli-hisari
sakarya-meydan-muharebesi · salankamen-savasi · selimiye-camii-ve-kulliyesi
sirpsindigi-savasi · ulubat · varna-savasi · zenta-savasi
```

### 🟢 Ve kurtarılabilir — *"TDV'de yok"* demek DEĞİL (`§4③`)

18 aday slug denendi, **7'si ilk denemede canlı** çıktı:

| ölü | canlı karşılığı |
|---|---|
| `istanbulun-fethi` | `istanbul` |
| `varna-savasi` | `varna` |
| `kirim-hanligi` | `kirim` |
| `zenta-savasi` | `zenta` |
| `izladi-savasi` | `izladi` |
| `cumhuriyet` | `turkiye` |
| `nasuh-pasa-antlasmasi` | `nasuh-pasa` |

> 🔴 **YENİ EKSEN** — koordinatörün bulduğu `-muahedesi` ve Türkçe-yazım
> eksenlerinin yanına: **TDV savaşları çoğunlukla YER ADIYLA tutuyor,
> `-savasi` ekiyle değil.**

Kalan 11'i (`salankamen` · `sirpsindigi` · `ulubat` · `kosmidion` · `cimpe` ·
`camurlu` · `preveze` · `kasr-i-sirin` …) ikinci turda aranacak.

📌 Bu sınıf **gövde okumadan** kapatılabilir — ucuz ve kesin.

---

## 4. B ve C SINIFLARI — okunmuş hükümler

**Koordinatörün uyarısı doğrulandı: ADAY ≠ İHLAL.** Okunan her kalem farklı
çıktı.

### 🔴 Gerçek kusur adayı

| kayıt | ne diyor | TDV ne diyor | hüküm |
|---|---|---|---|
| `bozcaada` 1913-11-01 | "Bozcaada ve İmroz'un **geri alınışı** — Atina Antlaşması" | "1912'de Rumlar'ın eline geçti … Sevr'in 84. maddesiyle **Yunanistan'a bırakıldı** … **20 Eylül 1923'te** kurtuldu" | 🔴 **EN GÜÇLÜSÜ.** Kaynak kaydı desteklemiyor, **çürütüyor**: 1912→1923 kesintisiz Yunan elinde diyor. Dubrovnik'ten ağır |
| `rodos` 1310-08-15 | "Rodos ve Oniki Ada'nın St. Jean şövalyelerince fethi" | "Rodos adası **1309'da** Saint Jean şövalyelerinin … eline geçişine kadar" | 🔴 Dubrovnik'in **birebir** deseni: kaynak konuşuyor, **başka yıl** söylüyor |
| `anapa` 1810-07-01 | "**Sohum'un** Ruslara kaybı" | `anapa` maddesi Sohum'u yalnız 1812 Bükreş bağlamında anıyor | 🔴 Adres canlı, şehir maddesi doğru, **olay o maddede yok** |
| `sirvan` 1606-01-01 | "**Tiflis ve Gence'nin** kaybı" | "Şah Abbas **1607'de** bölgeyi yeniden Safevî idaresine kattı" (Şirvan) | 🔴 Aynı desen: kayıt Tiflis/Gence, madde Şirvan |
| `aden` 1884-01-01 | "**Zeyla ve Somali sahilinin** İngiliz idaresine geçişi" | `aden` maddesi Aden şehrini anlatıyor, Zeyla'yı değil | 🔴 Aynı desen |
| `abdulhamid-ii` 1896-08-26 | "Osmanlı Bankası Baskını" | biyografi maddesinin gövdesinde yok; 1896 eşleşmesi bir **yan bağlantı bloğunda** (Dârülaceze) | 🔴 Kaynak olayı taşımıyor |

> 🔴 **Ve buradan bir ALT-SINIF doğdu — `§4②`nin yeni yüzü.**
> `ordu` / `saray` / `cin` deseni *"yanlış madde"*ydi. Burada madde **doğru**
> (Anapa maddesi Anapa'yı anlatıyor, Aden maddesi Aden'i) — yanlış olan
> **olayın o maddede olmaması**. Yani:
> ```
> §4②  YANLIŞ MADDE          ordu -> askerî ordu
> YENİ  DOĞRU MADDE, YANLIŞ OLAY   anapa maddesi · Sohum olayı
> ```
> İkincisi daha sinsi: slug canlı ✓ başlık doğru ✓ şehir doğru ✓ — ve
> `<title>` testini de, HTTP testini de, "doğru madde mi" testini de geçer.

### 🟢 Meşru — kusur değil

| kayıt | niçin meşru |
|---|---|
| `akka` 1831-11-27 | Kayıt kuşatmanın **başlangıcını**, TDV **bitişini** (1832) veriyor. TDV'nin kendi cümlesi: *"altı ay süren bu kuşatma sonunda … teslim alındı"*. İkisi de doğru |
| `cezayir` 1833 (Bicâye) · 1838 (Sétif) · 1899 (Aynı Sâlih) | Tarihen doğru; TDV'nin genel `cezayir` maddesi şehir şehir saymıyor |
| `adana` 1832-07-29 | Belen Geçidi bozgunu tarihen doğru; TDV idarî devri (1833) anlatıyor — **farklı olaylar** |
| `resid-mehmed-pasa` 1826-04-22 | Missolonghi'nin düşüşü doğru; TDV kuşatmanın başını (1825) ve Navarin'i (1827) veriyor, düşüş gününü vermiyor |
| `sirbistan` 1455-06-01 | Kosova fethi doğru; TDV daha kaba tanecikte (1459 Semendire) |
| `girit` 1822-06-28 | Mısır kuvvetlerinin çıkışı; TDV 1821 isyanını ve havaleyi anlatıyor, çıkarma gününü vermiyor |

### ⚠️ Çelişki — hüküm koordinatöre bırakıldı

| `anabolu` 1822-12-12 | Nauplion 30 Kasım 1822 (Julyen) = **12 Aralık 1822** (Gregoryen) düştü; kayıt takvim çevirisini doğru yapmış ve **TDV'den hassas**. Ama TDV *"1823'te … Kolokotranis tarafından işgal edildi"* diyor. Kaydı tutmak **TDV'yi çürütmek** demek (`§4`: *"çelişirse TDV esastır"*). Akademik ikinci dayanak aranmalı mı, yoksa TDV'ye mi uyulmalı? |
|---|---|

---

## 5. 🔴 ALETİN KUSURU — ve bu raporun asıl dersi

**İlk dörtlü (`877 / 131 / 53`) YANLIŞTI.** Kusuru hiçbir denetim bulmadı;
**gövdeleri okumak** buldu.

Üç eşleşme tuhaf geldi:

```
girit 1822   "TDV 1823 diyor" dedim  ->  eşleşme "Göttingen 1823-28"
gilan 1371   "TDV 1370 diyor" dedim  ->  eşleşme "Tahran 1370 hş."
cezayir 1838 "TDV 1839 diyor" dedim  ->  eşleşme bir MAKALE BAŞLIĞI
```

Üçü de TDV'nin **bibliyografyasında**, madde metninde değil.

> ⚠️ **Ve asıl zarar aday tarafında değildi.** Aynı kusur **"DESTEKLİ"**
> tarafında da çalışıyordu: bir kaydın yılı madde metninde hiç geçmese bile,
> kaynakçadaki bir **basım yılıyla** eşleşip **temiz** görünüyordu.
> ⇒ Bu bir **YANLIŞ NEGATİF** — yani ihlali **gizleyen** yön.
> Ölçüldü: **17 çift** tam olarak böyle temiz görünüyormuş.

```
bursa 1323 · budin 1684 · nizam-i-cedid 1789 · osmanlilar 1330
germiyanogullari 1429 · sinop 1853 · sirket-i-hayriyye 1851 · bogdan 1456
abdulhamid-ii 1896 · resid-mehmed-pasa 1826 · cezayir 1843 · suveys 1517
mustafa-i 1603 · murad-iv 1628 · aden 1884 · anapa 1781 · nedim--divan-sairi 1718
```

Düzeltme sonrası kesici **ters yönde de sınandı** (fazla kesiyor mu?):
en çok kesilen madde bile gövdesinin **%50'sini** koruyor, 72 çok bölümlü
madde doğru işleniyor, `dubrovnik` 1459/1430/1365 hâlâ DESTEKLİ ve 1458 hâlâ
ADAY.

### Ve kaynakça tek yanlış-pozitif kaynağı değil

Gövdeleri okurken iki tanesi daha çıktı:

```
tilimsan 1842   "1842 m. RÂKIMA sahip"        -> yıl değil, YÜKSEKLİK
hilafet  1515   "BA, DUİT, nr. 71/1515"       -> yıl değil, ARŞİV NUMARASI
iskodra  1500   "1500 DÜKKÂN"                 -> yıl değil, SAYIM
```

⇒ **"Komşu yıl" işareti bir TRİYAJ aracıdır, bir HÜKÜM değil.** Bu raporda
öyle kullanıldı: işaretlenen 21 kalemin **hepsinin gövdesi okundu**.

---

## 6. 🔴 İKİNCİ TASARIM HATASI — bilinen vaka yakaladı

Eleme aracının ilk sürümünde şöyle bir dal vardı: *"komşu yıl (±2) geçtiyse
MEŞRU, ELE."* Bilinen vakada sınandı:

```
dubrovnik 1458  ->  TDV'de 1459 var (fark +1)  ->  ilk sürüm: "ELENDİ, meşru"
```

**Kural, soruşturmayı başlatan gerçek kusuru mazur gösterecekti.**

> *"Yakın ama FARKLI tarih"* bir **mazeret değil**, desenin **ta kendisidir**:
> kaynak konuşuyor, **başka bir gün** söylüyor.

Dal silinmedi, **yönü çevrildi**: eleme → ağırlaştırıcı işaret. Ve araç artık
her koşuda kendini bu vakayla sınıyor (`assert`), bilinen kusuru elerse
**duruyor**.

📌 `CLAUDE.md §11 C13`in üçüncü ayağı: proje *"geçme yolu"* ve *"ateşleme"*yi
biliyordu. Bu vaka şunu ekliyor: **ateşleme sınavı, aracın kendi ELEME
mantığını da kapsamalı** — yoksa araç kusuru bulur ve **kendi eliyle eler**.

---

## 7. Z KOVASI — ÖLÇÜLEMEDİ (53 çift / 8 slug)

`dimask` · `habesistan` · `kapitulasyon` · `kose-mihal` · `maliye-nezareti` ·
`saltanat` · `temesvar` · `zigetvar`

HTTP **200**, başlık **doğru**, ama gövde gelmiyor — hepsi **2316-2882
karakter** arası, **kararlı bir imza**. İkinci denemede de gelmedi, yani
geçici ağ hatası değil, **yapısal** (`§4④`, `mazenderan` vakasının aynısı).

3 ağ hatası (`anapa` · `bolu` · `vehran`) ikinci denemede **düzeldi**
(58 → 53).

> Hüküm: *"TDV'de yok"* **değil**, *"çekilemedi"*. Bu kova **"temiz" diye
> raporlanmaz.**

⚠️ Ayrıca `saltanat` ve `kapitulasyon` `§4②` şüphelisi: genel **kavram**
maddeleri, bir devleti ya da olayı dayanak gösteremezler.

---

## 8. İŞKODRA — koordinatörün ③(c) kalemi

TDV `iskodra` gövdesi tarihi **doğrudan veriyor**:

> *"Osmanlı yönetiminin (1393-1396, 1479-1912)"*
> *"1360-1393 yıllarında Sırp Balšić Prensliği'nin merkezi olan şehir, Osmanlı
> kumandanı Kavala Şâhin tarafından ele geçirildiyse de (1393-1396) bu uzun
> sürmedi. 1396'da George Stratsimirović şehri Venedikliler'e sattı. Şehri
> tahkim eden Venedikliler 1479'a kadar burayı ellerinde tuttular."*

⚠️ KITA 82'nin *"83 YIL"* ifadesi gövdede **geçmiyor** (arandı, 0 geçiş) —
hesaplanmış ya da hatırlanmış. Özü doğru (1396-1479), ama **alıntı değil**.
Ve TDV **1356 değil 1360** diyor; `zeta` künyesi 1356 (kaynağı `karadag`).

### B şıkkının bedeli — sorulan üç sorunun üçü de

```
zeta devletler.js'te VAR mı    ✓ VAR (satır 1938, f:1356 t:1514, harita: alanı YOK)
zeta renkler.py'de rengi VAR mı 🔴 YOK
zeta veride kullanılıyor mu     🔴 HAYIR — 372 kullanılan kimlik içinde YOK
kaç yerleşim etkilenir          1 (yalnız İşkodra kaydı)
```

Değişmez 2 borcu (kırılma gününe ±30 gün madde var mı — **ölçüldü**):

| gün | durum |
|---|---|
| 1281-01-01 | ✓ KAPALI (0 gün) |
| 1360-01-01 | 🔴 **AÇIK** (en yakın madde 365 gün) |
| 1393-01-01 | ✓ KAPALI (0 gün) |
| 1396-01-01 | 🔴 **AÇIK** (en yakın madde 153 gün) |
| 1479-01-25 | ✓ KAPALI (0 gün) |

⇒ **B'nin bedeli: 1 renk borcu + 2 madde borcu.** KITA 82 *"iki yeni Değişmez
2 borcu"* demişti — **sayısı doğru**, teyit edildi.

### 🟢 ÜÇÜNCÜ ŞIK — C: `sirbistan` kullan, `zeta`ya hiç dokunma

Bu, **tasarlanarak değil komşusuna bakılarak** bulundu:

```
Podgorica (40 km ötede)   s:sirbistan 1281->1457   ZATEN BÖYLE YAZILI
İşkodra                   s:venedik   1281->1479   <- komşusuyla ÇELİŞİYOR
```

`sirbistan-nemanjic` künyesi `f:1217 t:1402`, `harita:"sirbistan"`, ve
`sirbistan` **renkli** (`#518790`). 1281-1393 aralığı künyenin **tam içinde**
— yani `§3.5` **hayalet devlet değil**.

| | B | **C** |
|---|---|---|
| yeni renk | 1 | **0** |
| harita deliği | VAR (`zeta` renksiz) | **0** |
| madde borcu | 2 (1360 + 1396) | **1** (yalnız 1396) |

Ve TDV'nin **kendi ifadesi** destekliyor: *"**Sırp** Balšić Prensliği"*,
*"Zeta **Sırp** Prensliği"*.

⚠️ **Bedeli:** taneciklik kaybı — Balšić'i (1360-1393) Nemanjić'ten ayırmıyor.
Ama proje 40 km ötede Podgorica'da bu kaybı **zaten kabul etmiş**. C yeni bir
ödün değil, var olan uygulamayla **hizalanma**.

> **ÖNERİ: C.** Gerekçe *"daha ucuz"* değil: B bir renk borcu **yaratır** ve
> `renk_olc.py`nin yeniden koşulmasını gerektirir; C ise İşkodra'yı
> **komşusuyla tutarlı** hâle getirir — yani bir ödün değil, bir **düzeltme**.
> 🔴 Karar koordinatörün. B'yi savunacaksa tek gerekçesi **taneciktir**:
> *"Balšić ayrı görünmeli"* denirse B doğrudur, bedeli de ölçüldü.

---

## 9. Ölçmediklerim — açıkça

`§7.1 ④`in ters yüzü: *ölçmediğini `ölçmedim` diye yaz.*

- **`iskodra` peteğinin görsel etkisi** — kutuda 3 nokta var ama petek
  yüzünden etkilenen alan daha büyük. **ÖLÇMEDİM.**
- **`adana` 1832/1833** — Çukurova'nın haritadaki el değiştirme günü hangisi?
  Kayıt bir savaşı, TDV idarî devri anlatıyor. Kırılma varsa bakılmalı.
  **ÖLÇMEDİM.**
- **C sınıfının 27 kaleminin tamamı** — 5'i okundu, 22'si okunmadı.
- **A sınıfının 11 ölü slugu** — doğru karşılıkları aranmadı.
- **Uşi (1912-10-18 mi 10-15 mi)** ve **Sırbistan Özerklik Fermanı** (70 gün
  farkı) kalemleri — sıraya girdi, **başlanmadı**.

---

## 10. Kabul ölçütüne karşı

| istenen | teslim |
|---|---|
| ①'de `N · x · y · z` dörtlüsü SAYIYLA | ✓ `1213 · 860 · 148 · 53` (düzeltilmiş) |
| ②'de aday kümesinin GÖVDESİ OKUNMUŞ hâli | ✓ 148 → 100 makineyle elendi, kalan 48'in 26'sı okundu, hükümleri §4'te |
| (c)'de B şıkkının bedeli SAYIYLA | ✓ §8 — ve ölçülmemiş bir **C şıkkı** çıktı |

> ⚠️ *"Tek vaka, sınıf değil"* de geçerli bir sonuç olurdu — **ama olmadı.**
> Sayarak söylüyorum: **üç sınıf**, en az **6 gerçek kusur adayı**, ve
> Dubrovnik'ten **ağır** bir tanesi (`bozcaada`).
