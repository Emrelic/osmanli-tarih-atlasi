# parti-0035 ORTA — ALTI YENİ KALEM · TARİH DOĞRULUĞU

**Oturum:** OPUS HAZIR KITA 102 · **Sevk:** 1.MURAT (`M-1942`ye cevabı, "altı kalem sende kalsın")
**Tarih:** 2 Eylül 2026 · Devamı: `denetim/BULGU-0035-ORTA.md` §12

> Koordinatörün uyarısı: *"TDV esastır, ama TDV'nin hangi takvimi verdiğine bak.
> Hicrî/Rûmî dönüşümü farkın kaynağı olabilir. **Bunu ölç, varsayma.**"*
> **Ölçüldü. Ve iki vakada iki AYRI cevap çıktı** — biri takvim değil, öbürü takvim.

---

## 0. TESLİM — SAYIYLA

```
6 kalem → 6 hükme bağlandı
  ÇÖZÜLDÜ, düzeltme önerisi hazır      3   ① Tiflis · ⑤ Nahçıvan · ③ Herceg Novi
  ÇÖZÜLDÜ, "kusur yok" çıktı           2   ② Özi (takvim farkı) · ⑥ Vehhâbî kesintisi
  ÇÜRÜDÜ — kendi açtığım kalem YANLIŞTI 1   ④ Nûbe 1555
🔴 Ve en değerlisi ④: KENDİ kalemimi çürüttüm. Onu "veri eksik" diye açmıştım;
   TDV okununca veri DOĞRU, ŞÜPHELİ OLAN KRONOLOJİ MADDESİ çıktı.
```

---

## 1. TAKVİM SINAVI — önce bu, çünkü iki kalemin de cevabı buna bağlıydı

TDV'nin hangi takvimi kullandığını **varsaymadım, sınadım.** `tdv/tiflis`
maddesi kendi içinde sınanabilir bir ipucu veriyor:

> *"24 Ağustos'ta Tiflis'e ulaştı ve boşaltılmış kaleyi ele geçirdi.
> **29 Ağustos Cuma günü** padişah adına iki kilise … camiye çevrildi."*

```
29 Ağustos 1578 JÜLYEN     → CUMA      ✓ TDV ile uyuyor
29 Ağustos 1578 GREGORYEN  → SALI      ✗
```
🟢 **HÜKÜM: TDV bu dönemde JÜLYEN (Rûmî) takvim veriyor.** Ölçüldü, bir
haftagünü sınavıyla, tek değişkenle.

📌 **Ve atlasın kendi geleneği de aynı:** `CLAUDE.md §1` *"İstanbul haritaya
29 Mayıs 1453'te eklenir"* diyor — 29 Mayıs 1453 **Jülyen** tarihidir
(Gregoryen karşılığı 7 Haziran). ⇒ **Atlas, dönemin kendi takvimindeki
YERLEŞİK tarihi kullanıyor, çevirmiyor.** Dolayısıyla aşağıdaki düzeltmelerde
de **çevirme yapılmamalı**, TDV'nin verdiği gün doğrudan yazılmalıdır.

⚠️ Bu bir **proje çapında** bulgudur ve şimdiye kadar hiçbir belgede yazılı
değildi. `VERI-YAPISI.md`ye bir cümle olarak girmeyi hak ediyor —
ama o dosya bende değil, **koordinatöre bırakıyorum.**

---

## 2. ① TİFLİS — **TAKVİM DEĞİL: BİR ZAFERİN GÜNÜ, BÜTÜN BÖLGEYE YAZILMIŞ**

```
veri      Tiflis  d.f = 1578-08-09
TDV       Tiflis  24 Ağustos 1578        (iki AYRI maddede: `tiflis` ve `gurcistan`)
fark      15 gün · Jülyen/Gregoryen kayması 1578'de 10 gün ⇒ AÇIKLAMIYOR
```
**Peki 1578-08-09 nedir? TDV'nin kendisi söylüyor** — `cildir-eyaleti`:
> *"**9 Ağustos 1578**'de Osmanlı kuvvetlerinin galibiyetiyle sonuçlanan
> **Çıldır Savaşı**"*

⇒ `1578-08-09` **Tiflis'in fethi değil, ÇILDIR SAVAŞI'nın günüdür.**

**KAPSAM ÖLÇÜLDÜ — bir gün, beş yerleşim, 9 dönem ucu:**
```
Batum          d-başlangıç + s-bitiş(gurcistan)     yerlesimler.js
Sohum          d-başlangıç + s-bitiş(gurcistan)     yerlesimler.js
Hulo (Acara)   d-başlangıç + s-bitiş(gurcistan)     yerlesimler_ek26.js
Kutaisi        v-başlangıç                          yerlesimler.js
Tiflis         d-başlangıç                          yerlesimler.js
Zagem (Kaheti) v-başlangıç                          yerlesimler.js
```

🔴 **VE ASIL BULGU: KRONOLOJİ ZATEN DOĞRU, HARİTA ONU YALANLIYOR.**
`data/kronoloji_gurcistan.js` üç maddeyi de **doğru günlerle** taşıyor:
```
1578-08-09   Çıldır Zaferi — Osmanlı ordusu Safevî kuvvetlerini yendi
1578-08-24   Tiflis'in Lala Mustafa Paşa tarafından fethi        ← TDV ile birebir
1578-08-29   Tiflis'te iki kilisenin camiye çevrilmesi           ← TDV ile birebir
```
⇒ Harita Tiflis'i, **fethini duyuran maddeden 15 gün önce** Osmanlı boyuyor.

⚠️ **Ve `Değişmez 2` bunu GÖREMEZ**, çünkü 1578-08-09'da bir madde **var**
(Çıldır Zaferi). Denetim *"maddesi var mı"* diye sorar, *"DOĞRU maddesi mi"*
diye sormaz. `CLAUDE.md §11`in *"denetim var ≠ o soruyu soruyor"* ailesinin
yeni bir üyesi: **kronoloji ile harita arasında SESSİZ 15 günlük çelişki.**

### ÖNERİ (veri bende değil, uygulamıyorum)
```
Tiflis          d.f  1578-08-09 → 1578-08-24     TDV `tiflis` + `gurcistan`, İKİ madde
Zagem (Kaheti)  v.f  1578-08-09 → 1578-08-24 SONRASI
                TDV `gurcistan`: "TİFLİS'İN FETHİNDEN SONRA İmeret ve Kahet
                yöneticileri Osmanlılar'a [itaat etti]" ⇒ 08-09 KESİNLİKLE erken
Batum · Sohum · Hulo · Kutaisi   ⚠️ AYRI ARAŞTIRMA — Karadeniz kıyısı ayrı
                bir harekât sahasıdır; Çıldır gününü onlara da yazmak aynı
                hatanın tekrarı olur. BEN ÖLÇMEDİM, kaynak aramadım.
```
🟢 **Değişmez 2 açılmaz:** 1578-08-24 günü kronolojide **zaten var**
(`kronoloji_gurcistan.js`). Yani düzeltme yeni kırılma doğurmuyor.

---

## 3. ⑤ NAHÇIVAN — **EN BÜYÜK BULGU: BEŞ YILLIK KAYIP, VE GEOMETRİ MASUM**

`BULGU-0035-ORTA.md §10`da Nahçıvan'ın Ahmed Paşa taralı alanında çıkmasını
*"şüpheli, kaynak bulunamadı"* diye bırakmıştım. Kaynak **bulundu.**

**TDV `nahcivan` (HTTP 200, gövdesi okundu):**
> *"Nahcıvan da Nahcıvan sancağının merkezi olarak **1724-1735 yıllarında
> Osmanlı idaresinde kaldı**."*

**Veri ne diyor:**
```
Nahçıvan   d: 1725-01-01 → 1730-08-12      ⇒ 1730'da Osmanlı'dan çıkıyor
Ordubad    d: 1725-01-01 → 1730-08-12      ⇒ aynı
KIYAS — Aras'ın kuzeyindeki komşuları:
Revan · Gence · Tiflis · Şamahı · Ereş · Kabala · Şeki · Berde
           d: … → 1735-06-19               ⇒ BEŞ YIL DAHA Osmanlı
```
⇒ **Nahçıvan ve Ordubad, 1735 kuşağına ait oldukları hâlde 1730 kuşağına
yazılmışlar.** TDV ile fark: **~5 yıl.**

**SEBEP DE ÖLÇÜLDÜ — yine "bir günün toptan yazılması":**
`1730-08-12` veride **12 dönem ucunda** geçiyor ve kronoloji maddesi şu:
> `olaylar_ek6.js` 1730-08-12 — *"Nâdir'in taarruzu: Tebriz, **Nahçıvan**,
> Hemedan, Kirmanşah, Merâga ve Kasr-ı Şîrîn'in kaybı"*

Yani Nadir'in **batı İran** taarruzunun günü, **Aras'ın kuzeyindeki**
Nahçıvan'a da yazılmış. Öteki on kayıt (Tebriz · Hemedan · Kirmanşah ·
Merâga · Kasr-ı Şîrîn · Nihâvend · Miyâne · Sarâb · Ahar · Hoy) **batı
İran'dadır ve 1730 doğrudur** — yalnız Nahçıvan ile Ordubad ayrı düşüyor.

🟢 **VE EMRE'NİN GÖRSEL ŞİKÂYETİ TAM BURADAN DOĞUYOR** (`H-0076`):
taralı alan *"savaş başındaki (1730-08-01) Osmanlı gövdesi"*nden üretiliyor.
Nahçıvan o gün Osmanlı, 12 gün sonra Safevî ⇒ üreteç onu **doğru** şekilde
"devredilen" saydı. **Geometri masum, kusur VERİDE.**
📌 `CLAUDE.md §11`: *"aracın söylediğini yapmadan önce aracın ne ölçtüğünü
anla"* — burada araç doğru ölçtü, girdisi yanlıştı.

### ÖNERİ
```
Nahçıvan   d.t  1730-08-12 → 1735-06-19        TDV `nahcivan`
Ordubad    d.t  1730-08-12 → 1735-06-19        ⚠️ TDV'de MÜSTAKİL madde YOK;
           gerekçe Nahçıvan sancağına bağlı olması ve Aras'ın kuzeyinde
           bulunması. Bu bir ÇIKARIM, ölçüm değil — ayrıca doğrulanmalı.
olaylar_ek6.js 1730-08-12 maddesinin başlığından "Nahçıvan" ÇIKARILMALI
           (yoksa madde ile veri yine çelişir — bu sefer ters yönde)
```
🟢 **Değişmez 2 açılmaz:** 1735-06-19'un maddesi var (`olaylar_ek6.js`,
*"Baghavard (Arpaçay) bozgunu — Kafkasya'nın Nâdir Han'a kaybı"*) ve o madde
**tam olarak bu kuşağı** anlatıyor.

---

## 4. ② ÖZİ — **BU SEFER GERÇEKTEN TAKVİM. VE KUSUR YOK.**

```
veri   1737-07-13        TDV `ozu`   "11 Temmuz 1737"        fark 2 gün
```
**Üç ihtimal tek tek sınandı:**
```
① Jülyen/Gregoryen kayması?   1737'de fark 11 GÜN. 2 gün DEĞİL.  ✗ ELENDİ
② Rus eski takvimi (O.S.)?    Ochakov 2 Temmuz 1737 (O.S.)
                              + 11 gün = 13 Temmuz (N.S.)
                              ⇒ VERİDEKİ GÜN BUDUR.                ✓
③ TDV Hicrî'den mi çevirmiş?  13 Rebîülevvel 1150 → 11 Temmuz 1737 ✓ TUTUYOR
```
⇒ **İki taraf iki AYRI kaynak takviminden geliyor:** veri Rus eski takviminin
Gregoryen karşılığını, TDV muhtemelen Osmanlı Hicrî kaydının karşılığını
veriyor. **Hiçbiri "yanlış" değil; ikisi farklı defterin günü.**

⚠️ **KENDİ ARACIMIN SINIRINI DA YAZIYORUM:** kullandığım Hicrî dönüştürücü
**tablo (aritmetik) takvimidir**; kendi kendini sınadığında
`1 Muharrem 1 → 0622-07-19` verdi (yerleşik kabul 16 Temmuz) ⇒ **±3 güne
kadar sapabilir.** Bu yüzden ③ bir **hipotez**tir, hüküm değil.

### ÖNERİ: **DEĞİŞTİRME.**
`1737-07-13` kalsın — kronoloji maddesi de aynı günde (`olaylar_ek5.js`,
*"Özi (Ochakov) Kalesi'nin Ruslara düşüşü"*), yani veri kendi içinde tutarlı.
Yapılacak tek şey: o maddenin `kaynak:` alanına **TDV'nin 11 Temmuz varyantı
NOT DÜŞÜLSÜN.** Böylece bir sonraki oturum aynı "çelişkiyi" üçüncü kez
keşfetmez. 📌 *Ölçülmüş ve kabul edilmiş bir fark, kayıtsız kalırsa yarın
kusur diye yeniden bulunur.*

---

## 5. ③ HERCEG NOVİ — **GERİ ALIŞ GÜNÜ BULUNDU; ALINIŞ GÜNÜ İÇİN TDV SUSUYOR**

**TDV `barbaros-hayreddin-pasa` (200, gövdesi okundu):**
> *"Bu arada Doria tarafından **daha önce ele geçirilen** Adriyatik kıyısındaki
> Nova da (Castelnuova) kolaylıkla geri alındı (**10 Ağustos 1539**)."*

```
BUGÜNKÜ KAYIT   ISGALLER[0]  ispanya  f:"1538-01-01"  t:"1539-01-01"
TDV             geri alış = 10 Ağustos 1539            ⇒ t YANLIŞ, 7 AY ERKEN
TDV             alınış: gün YOK, ama "Preveze'den (28 Eylül 1538) SONRA"
                                                       ⇒ f İMKÂNSIZ, 9 AY ERKEN
```
⚠️ TDV'de `herseknovi` · `hersek-novi` · `novi` · `kastelnovo` **dördü de 302
(ÖLÜ)** — müstakil madde yok. Ama TDV'nin **kaynakçası** doğru adresi veriyor:
*C. H. Imber, "The Costs of Naval Warfare: the Account of Hayreddin
Barbarossa's Hercez Novi Campaign in 1539", Archivum Ottomanicum IV (1972).*
⇒ Alınış gününü isteyen oturum **oraya** baksın; ben okumadım.

### ÖNERİ
```
ISGALLER[0].t   1539-01-01 → 1539-08-10          TDV, KESİN
ISGALLER[0].f   1538-01-01 → EN AZINDAN 1538-09-28 SONRASI
                (akademik standart 27 Ekim 1538 der; TDV DOĞRULAMIYOR,
                 "bulunamadı" olarak işaretlenmeli ya da Imber'den alınmalı)
KRONOLOJİ       iki madde YOK ve yazılmalı (Değişmez 2i açığı)
```
⚠️ `data/devirler.js` **ÜRETİLMİŞ** dosyadır, elle düzenlenmez; kaynağı
`arac/uret_devirler.py`nin okuduğu işgal tablosudur. **Koordinatörün kalemi.**

---

## 6. ④ NÛBE 1555 — 🔴 **KENDİ AÇTIĞIM KALEM ÇÜRÜDÜ**

`BULGU-0035-ORTA.md §6`da şunu yazmıştım: *"1555'te gerçekten bir sınır
hareketi varsa, bugün `funj` yazan Delgo ve Abrî kayıtları eksik demektir."*
**TDV okundu, hipotez çürüdü.**

**TDV `nube` (200, gövdesi okundu):**
> *"Yavuz Sultan Selim'in Mısır'ı fethinin ardından Osmanlılar, **Aşağı
> Nûbe'de Halfa vadisine kadar** olan bölgeyi kontrolleri altına alıp Asvan
> ve İbrim'de idarî teşkilât kurdular. **981'de (1573)** Habeş eyaletine
> bağlanan İbrim sancağı … **992'de (1584)** İbrim eyaleti kurulup…"*

```
TDV'nin verdiği sınır   "Halfa vadisine kadar"  = Vâdî Halfâ
VERİ                    İbrim ve Vâdî Halfâ d: 1517-04-13'ten OSMANLI
                        Delgo · Abrî ve güneyi  s: funj                ✓ UYUYOR
TDV'de 1555             ARANDI — YOK. Verdiği tarihler 1573 ve 1584.
```
⇒ **VERİ DOĞRU, DÜZELTİLECEK BİR ŞEY YOK.** Şüpheli olan **kronoloji
maddesinin kendisi**: *"İbrim ve Nûbe sınırının güneye taşınması"*
(1555-01-01) TDV'de **karşılığı olmayan** bir olayı anlatıyor.

### ÖNERİ (KRONOLOJİ oturumuna)
Madde ya **1573**'e (İbrim sancağının Habeş eyaletine bağlanması) ya da
**1584**'e (İbrim eyaletinin kurulması) çekilsin — ikisi de TDV'de var ve
ikisi de gerçek bir idarî kırılma. Ya da madde **kaldırılsın**.
Böylece `H-0065`teki *"haritada hiçbir şey olmuyor"* şikâyeti de kökünden kapanır.

🟢 **Ve bu, kalemi açan oturumun onu çürütmesi olduğu için ayrıca değerli:**
öneriyi uygulasaydık **doğru veriye yanlış bir Osmanlı dönemi** yazacaktık.
📌 `§3.5.1`: *bir sınır kayması önerildiğinde iki uç da ölçülür.* Burada
ikinci uç **kaynak**tı ve kaynak *"böyle bir şey yok"* dedi.

---

## 7. ⑥ ŞAM HAC YOLUNDA 1805-1812 VEHHÂBÎ KESİNTİSİ — **DEĞİŞTİRME**

**TDV `vehhabilik` (200, gövdesi okundu):**
> *"1803-1805 yılları arasında **Tâif, Mekke ve Medine** ele geçirildi …
> 1811'de harekete geçen Mısır kuvvetleri **1813 yılı itibariyle Mekke ve
> Medine'yi** tekrar Osmanlı yönetimi altına aldılar."*

```
TDV'nin ADIYLA saydığı yerler   Tâif · Mekke · Medine
TDV'nin SUSTUĞU yerler          Tebük · el-Ulâ · Medâin-i Sâlih · Müdevvere
                                (kuzey Hicaz / Şam hac yolu menzilleri)
VERİDEKİ DURUM                  Mekke ve Medine'nin Vehhâbî dönemi VAR
                                Tebük'ün YOK
```
⇒ TDV **o tanecikte konuşmuyor** (`§4`in "tanecik boşluğu"). Kaynak
susuyorken menzillere Vehhâbî dönemi yazmak **uydurmak** olurdu.

### ÖNERİ: `yerlesimler_ok102.js`teki kararım **KORUNSUN** (kesinti yazılmadı).
Değiştirilecekse **Tebük de dâhil** hepsine birden yazılmalı — yoksa aynı
yolda, aynı idarede, komşu iki menzilden biri Vehhâbî öteki Osmanlı görünür.
**Tek başına bir menzili değiştirmek, kusuru düzeltmez, GÖRÜNÜR KILAR.**

---

## 8. NE ÖLÇMEDİM

- **Batum · Sohum · Hulo · Kutaisi**'nin 1578 günleri — Çıldır gününü
  paylaşıyorlar ama Karadeniz kıyısı ayrı bir harekât sahası. **Kaynak
  aramadım**; Tiflis'in düzeltmesini onlara UZATMAK aynı hatayı tekrarlamak olur.
- **Ordubad**'ın TDV'de müstakil maddesi yok; 1735 önerim Nahçıvan'a
  bağlılığından çıkarılmış bir **çıkarımdır**, ölçüm değil.
- **Herceg Novi'nin alınış günü** — Imber (1972) makalesi okunmadı.
- **Hicrî dönüştürücüm ±3 gün** sapabilir (kendi sınavında 3 gün saptı).
- `denetle.py` yine **koşturulmadı** — koşu sürüyor.
