# KASA-YEMEN-RESULI-1010 — Taiz Resûlî başşehri Zeydî boyanıyor: tek şehir mi, bölge deseni mi?

Görev: YILDIRIM BAYEZIT (öncelikli — BUGÜNKÜ YAYINDA duran hata; KUR-ANADOLU-48'den önce) ·
Araştırmacı: KASA · `data/` DONUK — öneri yazılır, veri/renk yazılmaz (boya MOTOR PARTİSİNE;
yalnız "boya gerekiyor" işaretlenir).
Tetik: kıta ölçümü `NOKTA-ONCE1281-DELIK-1010` — atlas Taiz `s: 1281-1547 d:"yemen"` (kaynak alanı
YOK) ↔ TDV "Resûlîler devrinde (1229-1454) başşehir"; Aden atlasta `resuli`.
Kurallar: CLAUDE.md §4 hicrî kuralı (hicrî yılın miladî kesişimi; `YYYY-01-01` kaynağın DIŞINDA
olabilir) · §6.2 önce nesneyi sor · D204 (devlet var, yeri yanlış).

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)
- **Yemen noktaları (atlas):** 8 ± 3 (Taiz · Zebîd · San'a · Aden · Muha · Hadramut/Terim/Şibam ·
  Ebha · Sa'de …). **`yemen` (Zeydî) yazan:** 5 ± 2. **Yanlış sahipte (Resûlî döneminde Zeydî
  boyanan):** **3 ± 1** — Taiz kesin; Zebîd (Resûlî'nin ikinci merkezi) büyük olasılıkla; Muha/
  Hadramut olası. San'a'nın Zeydî olması kısmen doğru (Zeydî imamlar San'a'yı dönem dönem tuttu,
  Resûlîler de dönem dönem) ⇒ San'a **karışık**.
- ⇒ **BÖLGE ÇAPINDA desen** (tek şehir değil): atlasın `yemen` künyesi "1281'den itibaren Zeydî
  Yemen" diye bütün dağlık/sahil Yemen'i tek renkle boyamış; Resûlî/Tâhirî dönemleri sahil ve güney
  şehirlerde yazılmamış.
- **`resuli` künyesi:** devletler.js'te **VAR** (Aden ona bağlı) ama **BOYALAR'da yok** (kıta
  ölçümü). f/t: TDV 626/1229 – 858/1454 ile **1-2 yıl ayrışma** (hicrî yıl kesişimi).
- **Taiz zinciri:** 1281'den 1454'e Resûlî · 1454-1517 Tâhirî · 1517-1538 Memlük/Çerkez kalıntısı?
  · 1538/1547 Osmanlı ⇒ **en az 3 dilim** (bugün 1). Tâhirî künyesi **YOK (%60)**.
- **`kaynak:` alanı olmayan Yemen kaydı:** 5 ± 2.

## 1. ÖLÇÜM

Zemin: atlas `origin/main` **a42fd6f5** (worktree, salt okunur) · TDV gövdeleri 2026-10-10 çekildi
(yönlendirme izlenmez; `muha`, `mokha`, `muha--yemen`, `ferasan`, `kameran`, `kemeran` = **302 ölü**).
Hicrî → miladî: tabular takvim, 1582 öncesi **Jülyen** (TDV'nin çevirisiyle aynı; kontrol: 19 CA 922 =
1516-06-20, 16 Safer 923 = 1517-03-10, 30 Muh. 945 = 1538-06-28, TDV'de birebir). ±1 gün tabular payı.

### 1.1 Künyeler (④)
```
id            f            t            BOYALAR'da   kaynak               hüküm
yemen-zeydi   0897-01-01   1962-09-26   "yemen" VAR  "yemen"              (harita:"yemen" ⇒ noktalardaki d:"yemen" ile EŞLEŞİR; uyuşmazlık YOK)
resuli        1229-01-01   1454-01-01   YOK          TDV resuliler        f ✓ · t ✗ (aşağıda) · boya_gerekli:true
tahiri        1454-07-01   1517-04-15   YOK          TDV tahiriler--yemen f ✓ · t ✓ · boya_gerekli alanı YOK
memluk        1250-01-01   1517-04-13   (bu turda bakılmadı)
```
- **resuli f 1229-01-01 ✓** — TDV resuliler: "Atsız'ın ölümünden (626/1229) sonra Yemen'i atabeg sıfatıyla
  idaresi altına aldı"; 626 = **1228-11-30 → 1229-11-19**, 01-01 kesişimde. (Bağımsızlık ilânı 632/1235 —
  TDV sana; künye atabeglik başlangıcını alıyor, ic_not'ta beyan edilmeli.)
- **resuli t 1454-01-01 ✗** — 1454-01-01 = **1 Muharrem 858**, yani 858'in İLK günü; ama TDV'nin cümleleri
  Resûlî iktidarını 858'in içine taşıyor:
  - "Aden'i ele geçirdiler (Receb 858/Temmuz 1454)" (tahiriler) — Receb 858 = 1454-06-27…07-26
  - "Zebîd'e çekilen el-Melikü'l-Mes'ûd, şevval ayı sonlarında (Ekim 1454) saltanatı bıraktığını açıklayıp"
    (tahiriler) — Şevval 858 = 1454-09-24…**10-22**
  - "el-Melikü'l-Müeyyed Hüseyin (Zebîd'de, 1454'te Taiz'de) 855-858" (resuliler hükümdar listesi)
  ⇒ **öneri t = 1454-10-22, kesinlik `ay`** (Mes'ûd'un çekilişi; son tasdik). Bugünkü t, Zebîd/Aden
  noktalarında Resûlî'yi **~10 ay erken** bitiriyor ve 1454-01-01 → 07-01 arası tahiri künyesinin f'sinden
  önce kalan **6 aylık sahipsiz delik** üretiyor (Zebîd ve Aden `tahiri` dilimi 1454-01-01'de başlıyor ⇒
  künye penceresi DIŞINDA, 1454-01-01…06-30).
- **tahiri t 1517-04-15 ✓** (II. Âmir'in öldürülmesi, 23 RA 923). AMA hânedanın **Aden kolu** sürüyor:
  "927'de (1521) Aden'de yönetimi eline geçiren Aden Tâhirî liderlerinin sonuncusu Âmir b. [Dâvûd]" ·
  "[Hadım Süleyman Paşa] … 3 Ağustos 1538'de Aden'e girdi" (tahiriler) · "1538'de Aden'i alarak Tâhirîler
  hânedanına son verdi" (TDV yemen). ⇒ ya tahiri t → 1538-08-03 (ic_not: 1517-1538 yalnız Aden kolu), ya
  ayrı künye. Koordinatöre karar: **seçenek (a) t uzatma** önerim — kaynak iki maddede de "hânedana son
  verdi"yi 1538'e koyuyor.
- 🎨 **Boya gerekiyor: `resuli` VE `tahiri`** — ikisi de BOYALAR'da yok (renk önermiyorum). `tahiri`'de
  `boya_gerekli:true` alanı da YOK ⇒ eklenmesi gerekiyor (motor partisinin listesinde görünmüyor).

### 1.2 Resûlî ömrü ve başşehirleri (①)
| olay | TDV cümlesi (madde) | hicrî | miladî kesişim |
|---|---|---|---|
| başlangıç (atabeg) | "Atsız'ın ölümünden (626/1229) sonra Yemen'i … idaresi altına aldı" (resuliler) | 626 | 1228-11-30…1229-11-19 |
| Taiz dahil | "Tihâme, San'a ve Taiz'i idaresi altına alması (626/1229)" (sana) | 626 | aynı |
| bağımsızlık | "birkaç yıl sonra bağımsızlığını ilân etmesiyle (632/1235)" (sana) | 632 | 1234-09-26…1235-09-15 |
| **başşehir Taiz** | "el-Melikü'l-Muzaffer Yûsuf'un Taiz'i 653'te (1255) başşehir yapmasıyla" (taiz) | 653 | **1255-02-10…1256-01-29** (`1255-01-01` DIŞARIDA) |
| Zebîd = kışlık merkez | "başşehirlerinin Taiz olmasına rağmen … Resûlî sultanlarının kışlık merkezi olan Zebîd" (zebid) | — | yılsız (Ş) |
| Cened | "Cened'de … suikastına uğradığında (Zilkade 647/Şubat 1250)" (resuliler) — ölüm yeri, başşehir cümlesi DEĞİL | 647 | — |
| hâkimiyet alanı | "Mekke ile Hadramut arasındaki bölgede tanınıyordu" (resuliler, 1250) · 678/1279 Zafâr, ertesi yıl Şibâm ve Hadramut | | (S sınıfı) |
| Aden kaybı | "Aden'i ele geçirdiler (Receb 858/Temmuz 1454)" (tahiriler) | 858 | 1454-06-27…07-26 |
| **son** | "şevval ayı sonlarında (Ekim 1454) saltanatı bıraktığını açıklayıp" (tahiriler) | 858 | 1454-09-24…10-22 |
| Zebîd Tâhirî'ye | "önce Taiz'i … daha sonra … Zebîd'e yöneldiler ve şehri ele geçirdiler (859/1455)" (tahiriler) | 859 | 1454-12-22…1455-12-10 |

⚠️ Künyenin `baskent` alanı "Taiz / Zebîd (sultanlar Cened, Taiz, Zebîd arasında)" — **Cened için başşehir
cümlesi bulunamadı**; Taiz 1255'ten itibaren Y, Zebîd kışlık merkez Ş. 1229-1255 başşehri TDV'de yok.

### 1.3 Taiz'in doğru `s:` zinciri (②) — bugün: `yemen 1281→1547-02-01` tek dilim, kaynak YOK
Bugünkü `d:` (Osmanlı) dilimleri: 1547-02-01→1629-01-01 · 1872-04-01→1918-10-30.
| # | sahip | f → t | TDV cümlesi (taiz, aksi belirtilmedikçe) | sınıf |
|---|---|---|---|---|
| 1 | **resuli** | 1281-01-01 (UFUK; künye 1229) → **1454-10-22** | "Resûlîler devrinde (1229-1454) başşehir olduğu yıllara" · "Taiz'i 653'te (1255) başşehir" | Y |
| 2 | **tahiri** | 1454-10-22 → **1517-03-10** | "el-Melikü'l-Mes'ûd'un Zebîd'den ayrılmasının ardından önce Taiz'i hâkimiyetleri altına aldılar" (tahiriler) · "Tâhirîler döneminde şehir siyasî ve ticarî önemini kaybetti" | Y (f: Mes'ûd'un çekilişinden SONRA, gün yok ⇒ `ay`) |
| 3 | **memluk** | 1517-03-10 → 1517-04-13 (künye sonu, R1) | "Memlük kumandanı Barsbay'ın emrindeki Mısır ordusu 16 Safer 923'te (10 Mart 1517) Taiz'i ele geçirdi" | Y, gün |
| 4 | Osmanlı (`d:`) | 1517-04-13 → 1535 | "Yavuz Sultan Selim, Memlükler'i ortadan kaldırınca Emîr Ramazan adlı bir levendi Taiz'in idaresiyle görevlendirdi" (yılsız, Ş) · "931'de (1525) … Emîr Hüseyin Rûmî Taiz'i aldı" · "Zilhicce 932'de (Eylül 1526) Selman Reis … Taiz'i ele geçirdi" | 1517-1525 Ş · 1525-1535 Y (aradaki kopuşlar: 1523 levend isyanı) |
| 5 | yemen (Zeydî) | **1535** → 1547-02-01 | "941 (1535) yılında Zeydî İmamı Mutahhar b. … Mütevekkil-Alellah Şerefeddin'in kontrolüne girdi" — 941 ∩ 1535 = **1535-01-01…1535-07-01** · "(1545) kısa bir süre için ele geçirildiyse de tekrar Zeydîler tarafından geri alındı" (gün yok) | Y ✓ (bugünkü dilimin DOĞRU kısmı) |
| 6 | Osmanlı | 1547-02-01 → **1567-10** | "Zilhicce 953'te (Şubat 1547) zaptedildi" — Zilhicce 953 = 1547-01-23…02-20, `1547-02-01` içeride ✓ | Y ✓ |
| 7 | **yemen** | **1567-10-05…11-03** → **1569-01** | "Taiz, Rebîülâhir 975'te (Ekim 1567) İmam Mutahhar b. [Şerefeddin'in eline geçti]" · "Receb 976'da (Ocak 1569) Zeydîler'den geri aldığı Taiz" — Receb 976 ∩ Ocak = 1569-01-01…01-19 | Y — **atlasta YOK** |
| 8 | Osmanlı | 1569-01 → 1629 | "1038'de (1629) … Taiz'i de terkettiler" — 1038 ∩ 1629 = 1629-01-01…08-20; `1629-01-01` sınırda içeride | Y ✓ |
| 9 | yemen (Kāsımî) | 1629 → **1835** | (8 ile aynı cümle) | Y ✓ |
| 10 | Mısır (Mehmed Ali) | **1835** → ? | "İbrâhim Paşa … Taiz'i Kāsımîler'den geri aldı (1835)" — bitişi TDV taiz'de **bulunamadı**; Mısır/Mehmed Ali künyesi devletler.js'te id ile bulunamadı (`misir`, `misir-hidiv`, `mehmed-ali` YOK) | Y — **atlasta YOK** |
| 11 | Osmanlı | 1872-04-01 → 1892 | "Gazi Ahmed Muhtar Paşa'nın 1872'de Yemen'i tekrar zaptı üzerine Taiz Osmanlı kontrolüne geçti" | Y ✓ |
| 12 | **yemen** | **1892 → 1893** | "1892'de tekrar Yemen imamlarının eline geçen Taiz 1893'te Osmanlılar tarafından geri alındı" | Y — **atlasta YOK** |
| 13 | Osmanlı → yemen | 1893 → 1918-10-30 → | "I. Dünya Savaşı sonuna kadar fiilen Osmanlı yönetiminde kaldı" | Y ✓ |

⇒ Taiz 1 dilim → **en az 13 dilim**; **1281-1535 arası 254 yıl yanlış sahipte** (resuli 173 · tahiri 63 ·
memluk 1 ay · Osmanlı-nominal 18 yıl), **1535-1547 12 yıl doğru**. Ayrıca 3 eksik dilim (7, 10, 12).
§6.2: Taiz'in yeri sorun değil (TDV: "San'a'nın 195 km güneyi … Cebelisabr'ın kuzey etekleri"; modern şehir =
tarihî şehir, ayrı nesne şüphesi yok) — KONUM ölçülmedi, yalnız KİMLİK.

### 1.4 Öteki Yemen noktaları (③) — BÖLGE ÇAPINDA desen
11 `s:`'li nokta (+7 `s:`'siz: Aseb, Rub'ul Hâlî gb, Rahbût, Seyûn, Sa'de, Şehâre, Kevkebân).
Resûlî döneminde (1281-1454) `yemen` (Zeydî) yazan: **7** — Moha, San'a, Taiz, Hudeyde, Ebha, Ferasan, Kemeran.
| nokta | atlas (Resûlî/Tâhirî dönemi) | TDV | hüküm |
|---|---|---|---|
| Taiz (811) | yemen 1281→1547 | §1.3 | **YANLIŞ (Y)** |
| Hudeyde (812) | yemen 1281→1849 | "VIII. (XIV.) yüzyılda av sahası olarak kullanılan Hudeyde'den yerleşim merkezi niteliğiyle bahsedilmesi, XV. yüzyılın ortalarında Aden'deki Tâhirî Sultanlığı'nın hâkimiyet yıllarına rastlamaktadır" · "1515'te Memlükler … Hudeyde'de hâkimiyet sağladılar" · "1538'de … Hadım Süleyman Paşa … Hudeyde'ye … uğrayarak bölgeyi kontrol altına aldı" | **YANLIŞ (Y)** — hem `kur` (1281'de yerleşim değil; ~XV. yy ortası, yüzyıl) hem sahip (Tâhirî → 1515 memluk → 1538 Osmanlı) |
| Kemeran (1711) | yemen 1281→1538-08-03 | "Kansu Gavri tarafından gönderilen Memlük donanması Kızıldeniz'deki Kemeran adasına yerleşti (921/1515)" (tahiriler) | **YANLIŞ (Y)** — en az 1515→1517-04-13 memluk; öncesi bulunamadı |
| Ebha (813) | yemen 1281→1871 | "Ebhâ şehri ve Asîr bölgesi … Ziyâdîler, Hemdânîler, Eyyûbîler, Resûlîler ve Osmanlılar zamanında Yemen'e … [tâbi olmuş]" | **YANLIŞ (Ş)** — Resûlî tâbiiyeti yılsız; `s:`'de kullanılabilir, kaynaklı halka DEĞİL |
| San'a (804) | yemen 1281→1547 | "Tihâme, San'a ve Taiz'i idaresi altına alması (626/1229)" · "San'a, Resûlîler (1229-1454) ve halefleri Tâhirîler (1454-1517) döneminde birçok defa Zeydîler'le el değiştirdi" · "tekrar Zeydî imamı … Şerefeddin'in eline geçti (922/1516)" · "Özdemir Paşa tarafından gerçekleştirildi (953/1546)" | **KARIŞIK** — düz `yemen` kaynaksız; dilim tarihleri TDV sana'da YOK ⇒ 1229-1516 arası dilimler **bulunamadı** (TDV yemen/zeydiyye'de yıl-San'a eşleşmesi taramada çıkmadı) |
| Moha (796) | yemen 1281→1538 | TDV maddesi 302; TDV yemen'de Muhâ yalnız 1538 sonrası | **bulunamadı** — Zeydî iddiası da kaynaksız; Resûlî için yalnız S ("Mekke ile Hadramut arası") |
| Ferasan (1710) | yemen 1281→1538 | madde 302 | **bulunamadı** (S) |
| Zebîd (788) | resuli 1281→**1454-01-01** · tahiri →1516-06-20 · memluk →1517-07-06 | Zebîd Tâhirî'ye 859/1455 · "19 Cemâziyelevvel 922'de (20 Haziran 1516) Zebîd'i ele geçirdi" ✓ | sahip doğru, **tarih yanlış**: resuli→tahiri geçişi 1454-01-01 değil 859 (1454-12-22…1455-12-10); **memluk dilimi künye t'sini (1517-04-13) 84 gün aşıyor** (1517-07-06) |
| Aden (789) | resuli→1454-01-01 · tahiri→1517-01-01 · **yemen 1517-01-01→1538-08-03** | Receb 858/Temmuz 1454 · Aden Tâhirî kolu 927/1521 → 3 Ağustos 1538 | resuli/tahiri geçişi ~6 ay erken; **1517-1538 `yemen` YANLIŞ (Y)** — Zeydî değil, Tâhirî Aden kolu (Âmir b. Dâvûd) |
| Hadramut (1253) · Mukalla (1224) | 1881+/1888+ | — | Resûlî dönemine dokunmuyor |

**Sayım:** Resûlî döneminde `yemen` yazan 7 · bunlardan **Y ile yanlış 3** (Taiz, Hudeyde, Kemeran) +
**Ş ile yanlış 1** (Ebha) + **karışık 1** (San'a) + **bulunamadı 2** (Moha, Ferasan). Ayrıca `resuli`/`tahiri`
olan 2 noktada tarih hatası (Zebîd, Aden) ve Aden'de 21 yıllık ikinci yanlış `yemen` dilimi.
⇒ **Tek şehir DEĞİL, BÖLGE DESENİ**: 7 noktanın 7'si de `1281-01-01` başlangıçlı ve **hiçbirinde kaynak yok** —
`yemen` dilimi UFUK[0]'dan geriye bir varsayılan olarak yazılmış; doğru sahip Resûlî/Tâhirî'yi kaynaklı
taşıyan yalnız `kaynak:` alanı OLAN iki nokta (Zebîd, Aden).

### 1.5 `kaynak:` alanı OLMAYAN Yemen kayıtları (⑤) — **8**
Moha (796) · Sana (804) · Taiz (811) · Hudeyde (812) · Ebha (Asir) (813) · Mukalla (1224) · Ferasan (1710) ·
Kemeran (1711). (Kaynaklı: Zebîd 788, Aden 789, Hadramut 1253.)

## 2. ÖNGÖRÜ ↔ ÖLÇÜM
| öngörü | ölçüm | |
|---|---|---|
| Yemen noktası 8 ± 3 | 11 `s:`'li (+7 `s:`'siz) | sınırda ✓ |
| `yemen` yazan 5 ± 2 | 7 | sınırda ✓ |
| yanlış sahipte 3 ± 1 | Y 3 + Ş 1 (+ San'a karışık) | ✓ |
| Zebîd büyük olasılıkla yanlış | Zebîd **doğru sahipte** (resuli, kaynaklı); yalnız tarih kayık | ✗ |
| BÖLGE deseni | 7/7 kaynaksız, 1281 başlangıçlı | ✓ |
| `resuli` VAR, BOYALAR'da yok | ✓ | ✓ |
| resuli f/t'de 1-2 yıl ayrışma | f ✓; t **~10 ay** erken | ✓ (yön doğru, büyüklük küçük) |
| Taiz ≥3 dilim | **13** | ✓ (az tahmin) |
| Tâhirî künyesi YOK (%60) | **VAR** (devletler.js:8340, kaynaklı) | ✗ |
| kaynaksız kayıt 5 ± 2 | **8** | ✗ (1 fazla) |
Ders: atlasın "kaynaksız" dilimleri bölgesel bir varsayılan gibi davranıyor — kaynaklı noktalar doğru,
kaynaksızlar sistematik yanlış. Yanılma: Tâhirî künyesi için "yok" bahsi; künye taraması öngörüden önce
yapılsaydı kaçmazdı.

## 3. İSTEK (öneri — `data/` DONUK, yazılmadı)
a) **resuli t → 1454-10-22 (`ay`)**; ic_not: f = atabeglik (626/1229), bağımsızlık 632/1235.
b) **tahiri t**: 1517-04-15 → 1538-08-03 (Aden kolu) — ya da ayrı künye; koordinatör kararı.
c) 🎨 `resuli` + `tahiri` **boya gerekiyor** (motor partisi); `tahiri`'ye `boya_gerekli:true`.
d) **Taiz `s:`** §1.3 zinciri (13 dilim); Mısır/Mehmed Ali künyesi yok ⇒ 1835 dilimi N-boşluk.
e) **Hudeyde** `kur:` (XV. yy ortası, `yuzyil`) + tahiri → memluk 1515 → Osmanlı 1538.
f) **Kemeran** 1515→1517-04-13 memluk; **Ebha** Resûlî dönemi resuli (Ş).
g) **Zebîd** resuli→tahiri geçişi 859/1455 (`yil`); memluk dilimi 1517-04-13'te kesilmeli (künye sonu).
h) **Aden** 1517-1538 `yemen` → `tahiri` (b'ye bağlı).
i) **San'a, Moha, Ferasan**: 1281-1454 `yemen` kaynaksız ⇒ ya kaynaklı dilim, ya `__BOSLUK__` (K).
   San'a için Resûlî/Zeydî el değiştirmelerini tarihleyen ikinci kaynak gerekiyor (TDV sana yetmiyor).
