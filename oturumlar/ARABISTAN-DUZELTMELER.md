# ARABİSTAN — DÜZELTME LİSTESİ

Oturum: **ARAŞTIRMA · ARABİSTAN (A5)**
Kapsam: Hicaz · Yemen · Necid · Asîr · Lahsa · Katar · Kuveyt · Umman · Kızıldeniz kıyıları

🔴 Bu oturum `data/yerlesimler.js`'e **yazmaz.** Aşağıdaki satırları koordinatör
tek elden uygular. Biçim: **kayıt · mevcut · önerilen · TDV slug · gerekçe**

Slug doğrulaması: her slug `<title>` ile sınandı. `"Arama - TDV İslâm
Ansiklopedisi"` çıkan slug ÖLÜ sayıldı ve kullanılmadı.

---

# A) VEHHÂBÎ MESELESİ — `hatalar 16 md.8` + `hatalar 11 md.1`

## A.0 🔴 DENETÇİ'YE: iki maddenin tam metni ve hükmü

Kullanıcının gördüğü iki madde bunlar:

**MADDE 1** — `data/olaylar_ek5.js:300`
```
t:"1803-05-15", k:"kayip", etiket:["ayaklanma","toprak-kaybi"],
b:"Vehhâbîlerin Mekke ve Tâif'i ele geçirmesi",
gun:"1803", yer:"Mekke ve Tâif, Hicaz",
kisiler:"Suûd b. Abdülazîz, Şerif Gālib, III. Selim",
d:"Önce Tâif'i alan Vehhâbî kuvvetleri, ardından Mekke'ye girerek türbeleri yıktı
ve kendi anlayışlarına göre bir düzen kurdu; Şerif Gālib Cidde'ye çekilmek zorunda
kaldı. Haremeyn'in hâmisi sıfatını taşıyan Osmanlı padişahı için bu, saltanatın
meşruiyetini doğrudan sarsan bir darbeydi. Hac yollarının kapanması bütün İslâm
dünyasında yankılandı ve İstanbul'u Mısır valisi Mehmed Ali'den askerî yardım
istemeye mecbur bıraktı. Aynı tarihte elden çıkan diğer yerleşimler: Tâif.",
kaynak:"vehhabilik"
```

**MADDE 2** — `data/olaylar_ek6.js:85`
```
t:"1806-02-01", k:"kayip", etiket:["toprak-kaybi","ayaklanma"],
b:"Mekke'nin Vehhâbîlere kaybı",
gun:"1806", yer:"Mekke, Hicaz",
kisiler:"Suûd b. Abdülazîz, III. Selim",
d:"Necid'de doğan Vehhâbî hareketi Suûd b. Abdülazîz döneminde Hicaz'a yöneldi;
Tâif ve Medine'den sonra Mekke de teslim alındı. Türbeler yıkıldı, Osmanlı adına
okunan hutbe kaldırıldı ve Şam ile Kahire'den gelen hac kafilelerinin yolu kesildi.
Haremeyn'in hâmisi sıfatı padişahın meşruiyetinin temel dayanaklarından biri olduğu
için bu kayıp, toprak kaybının ötesinde ağır bir siyasî darbe oldu; geri alınması
yedi yıl sürecek ve Kavalalı Mehmed Ali Paşa'nın ordusuyla mümkün olacaktı.",
kaynak:"vehhabilik"
```

### 🟢 HÜKÜM: MÜKERRER DEĞİL. Mekke GERÇEKTEN iki kez düştü.

TDV `mekke` maddesi dört ayrı el değiştirme veriyor ve ikisi de gerçek:

| # | Olay | TDV'nin verdiği tarih | Alıntı |
|---|---|---|---|
| 1 | Suûd Mekke'yi **birinci kez** işgal eder | **30 Nisan 1803** | *"30 Nisan 1803"* |
| 2 | Şerif Gālib şehri **geri alır** | ~**6 Ağustos 1803** ⚠️ türetilmiş | *"Mekke'yi kuşattı (12 Temmuz 1803) ve yirmi beş gün süren kuşatmadan sonra şehri ele geçirdi"* |
| 3 | Suûd **ikinci kez** alır, Gālib teslim eder | **Ocak 1806** | *"1805 yılının sonlarında Mekke'yi yeniden kuşattı. Üç ay kadar süren kuşatmanın ardından… şehri Vehhâbîler'e teslim etti (Ocak 1806)"* |
| 4 | Tosun Paşa Mekke'ye girer | **23 Ocak 1813** | *"Mekke'nin kurtuluşu İstanbul ve Mısır'da törenlerle kutlandı"* |

⚠️ 2. satırdaki 6 Ağustos **TDV'de yazmıyor** — "12 Temmuz + yirmi beş gün"den
benim türettiğim tarihtir. Kesinliği `gun` değil `ay` mertebesindedir; kayda
`1803-08-06` yazılacaksa bunun türetilmiş olduğu not düşülmeli (`OGRENILENLER §8`,
uydurulmuş kesinlik).

📌 Ayrıca TDV, 1806 tesliminin **şartlı** olduğunu söylüyor: *"Mekke Emîri Şerîf
Gālib emirlikte kalmak şartıyla şehri Vehhâbîler'e teslim etti."* Yani 1806-1813
arası Mekke, Suûdî üstünlüğü altında **yerinde kalan şerif** tarafından yönetildi.
Veri bunu düz `s:{d:"suud"}` (tam hâkimiyet) olarak modelliyor; `v:` (tâbi)
katmanı daha doğru olabilir — kararı koordinatöre bırakıyorum, çünkü aynı soru
Kırım ve Erdel'de zaten verilmiş bir kararın tekrarı.

### 🔴 ASIL HATA — ve yeni denetim sınıfı

Kullanıcının *"iki kez farklı yerlerde aksiyon oluyor"* demesinin sebebi mükerrerlik
değil, şu: **MADDE 1'in başlığı iki yerleşim adı taşıyor ama haritada yalnız biri
kıpırdıyor.**

```
MADDE 1 (1803-05-15) "Mekke ve Tâif"  →  haritada yalnız TÂİF döner
                                          (Mekke kaydında 1803 dönemi HİÇ YOK)
MADDE 2 (1806-02-01) "Mekke"          →  haritada MEKKE döner
```

Kullanıcı "Mekke alındı" başlığını iki kez okuyor; birincisinde harita Tâif'i,
ikincisinde Mekke'yi boyuyor. Rapor bu yüzden "iki farklı yerde aksiyon".

**Değişmez 2** *"her kırılmanın maddesi var mı"* diye sorar — geçiyor.
**Değişmez 2t** *"her maddenin kırılması var mı"* diye sorar — MADDE 1'in Tâif
kırılması olduğu için **o da geçiyor.**
Hiçbiri *"maddenin ANDIĞI HER yerleşimin kırılması var mı"* diye sormuyor.

> ### 🆕 ÖNERİLEN ONBİRİNCİ DENETİM — «çok yerleşimli başlık»
> Bir maddenin `b:` ve `yer:` alanlarında **`yerlesimler.js`'te kaydı olan N
> yerleşim adı** geçiyorsa, o N adın **her biri** için ±30 gün içinde bir kırılma
> aranır. N adın yalnız M'sinde kırılma varsa (M < N) madde işaretlenir.
>
> Makinece ölçülebilir, çünkü iki taraf da veride yazılı. Bu vaka: N=2 (Mekke,
> Tâif), M=1 (Tâif) → işaretlenir.
>
> ⚠️ `OGRENILENLER §26` gereği ateşlememesi gereken vakaya karşı sınanmalı:
> *"Aynı tarihte elden çıkan diğer yerleşimler: …"* cümlesi ÜRETİLMİŞ bir ektir
> ve zaten kırılması olan adları sayar — bu ekte geçen adlar denetimin dışında
> tutulmalı, yoksa denetim kendi kuyruğunu ısırır ve yüzlerce yanlış pozitif verir.
> Ölçüt yalnız `b:` başlığındaki ve `yer:` alanındaki adlara uygulanmalı.

### Bu vakanın kapanması için gereken üç şey

1. MADDE 1'in başlığından **Mekke çıkarılmalı** ya da Mekke kaydına 1803 dönemi
   eklenmeli (aşağıda A.1);
2. **Şerif Gālib'in şehri geri alışının maddesi yok** — 1803 dönemi eklenirse
   Değişmez 2 gereği yazılması **zorunlu** olur;
3. MADDE 2'nin günü uydurulmuş (`1806-02-01`), TDV "Ocak 1806" diyor.

---

## A.1 Yerleşim kaydı düzeltmeleri — Hicaz

Altı tarihin **altısı da** TDV ile çelişiyor. Hiçbiri yuvarlama farkı değil.

### 1. Tâif — iki tarih yanlış
`data/yerlesimler.js:966`

| | Mevcut | Önerilen | Fark |
|---|---|---|---|
| Suûd dönemi başı | `s:{f:"1803-05-15"}` | **`1803-02-01`** | 103 gün |
| Suûd dönemi sonu | `s:{t:"1813-01-24"}` | **`1813-05-02`** | 98 gün |

`v:` dönemleri de aynı iki tarihe yaslı, birlikte kaymalı:
`v:{f:"1517-07-06",t:"1803-05-15"}` → `t:"1803-02-01"` ·
`v:{f:"1813-01-24",…}` → `f:"1813-05-02"`

**TDV slug: `taif`** ✅ canlı (`<title>` = "TÂİF - TDV İslâm Ansiklopedisi")
Alıntı: *"Suûd emrindeki ordu **Şubat 1803**'te Tâif'i ele geçirerek yağmaladı"* ·
*"Mısır Valisi Kavalalı Mehmed Ali Paşa'nın, oğlu Tosun Paşa kumandasında
gönderdiği ordu Medine ve Mekke'den sonra Tâif'i Vehhâbîler'den geri aldı"* —
**2 Mayıs 1813**.

⚠️ TDV gün vermiyor, "Şubat 1803" diyor → `CLAUDE.md §4` gereği `1803-02-01`.
📌 Tâif'in Mekke'den **önce** düştüğü ve Mekke'den **sonra** geri alındığı
TDV'de açık: Vehhâbî hâkimiyeti Tâif'te Mekke'dekinden hem erken başlıyor hem
geç bitiyor. Bugünkü veri ikisini de `1813-01-24`'te bitirerek bu farkı siliyor.

### 2. Mekke — bir dönem eksik, iki tarih yanlış
`data/yerlesimler.js:577-579`

| | Mevcut | Önerilen |
|---|---|---|
| **1803 işgali** | ❌ **kayıt YOK** | **`s:{f:"1803-04-30",t:"1803-08-06",d:"suud"}` EKLE** |
| İkinci dönem başı | `s:{f:"1806-02-01"}` | **`1806-01-01`** |
| İkinci dönem sonu | `s:{t:"1813-01-24"}` | **`1813-01-23`** |

`v:{f:"1517-07-06",t:"1806-02-01",k:"Mekke Şerifliği"}` bu eklemeyle **üçe
bölünür**: 1517→1803-04-30 · 1803-08-06→1806-01-01 · (1813-01-23'ten sonrası
zaten Mısır).

**TDV slug: `mekke`** ✅ canlı · destekleyen: **`suudiler`** ✅ canlı
(*"1806'da Mekke ve Medine'yi ele geçirmelerine engel olunamadı"*) ·
**`suud-b-abdulaziz`** ✅ canlı (*"Önce Tâif'e, daha sonra Mekke'ye girmesiyle
(1218/1803)"* — 1803 işgalini bağımsız olarak doğruluyor).

⚠️ **`1803-08-06` türetilmiştir**, TDV'de yazmıyor (12 Temmuz + 25 gün).
Koordinatör bunu kabul etmezse alternatif `1803-08-01`'dir; ikisi de "Ağustos
1803 başı" demenin yoludur, aradaki fark haritada görünmez.

### 3. Medine — iki tarih yanlış
`data/yerlesimler.js:580-582`

| | Mevcut | Önerilen | Fark |
|---|---|---|---|
| Suûd dönemi başı | `s:{f:"1805-07-01"}` | **`1805-06-01`** | 30 gün |
| Suûd dönemi sonu | `s:{t:"1812-11-08"}` | **`1812-12-03`** | 25 gün |

`v:` dönemleri aynı tarihlere yaslı, birlikte kaymalı.

**TDV slug: `medine`** ✅ canlı
Alıntı: *"Vehhâbîler şehri kuşattılar; bazı küçük çatışmaların ardından işgal edip
(**Haziran 1805**)"* · *"iki hafta kadar süren bir kuşatmanın ardından
**3 Aralık 1812**'de Medine geri alındı"*

📌 Geri alış sırası TDV'de net ve veriyle **uyumlu**: Medine (3 Aralık 1812) →
Mekke (23 Ocak 1813) → Tâif (2 Mayıs 1813). Bugünkü veri üçünü de tek güne
(`1813-01-24`) topladığı için bu beş aylık ilerleyişi siliyor. Düzeltilirse
harita Mısır ordusunun Hicaz'da kuzeyden güneye ilerleyişini gösterir.

### 4. Yenbu — ⚠️ gün kaynaksız, DEĞİŞTİRME ÖNERMİYORUM
`data/yerlesimler.js:586-588` · `s:{f:"1805-07-20",t:"1811-11-01",d:"suud"}`

**TDV slug: `yenbu`** ✅ canlı (`<title>` = "YENBU' - TDV İslâm Ansiklopedisi")
Alıntı: *"Tosun ve İbrâhim paşaların öncülüğünde Yenbu' tekrar Osmanlı
egemenliğine sokuldu (**1811**)"*

TDV yılı doğruluyor, **ay ve gün vermiyor.** `1811-11-01` ve `1805-07-20`'nin
kaynağı bende yok. `OGRENILENLER §8` gereği **uydurma yerine "kaynak yok" diye
işaretliyorum** — mevcut değerler yılı tutturduğu için zararsız, ama bir gün
kesinlik alanı (`kesinlik:`) gelirse bu iki tarih `yil` işaretlenmeli.

---

## A.2 `hatalar 11 md.1` — "Yanbu neresi, oradaki ufak Osmanlı toprağı gerçek mi?"

### 🟢 CEVAP: GERÇEK. Hata değil.

**Yenbu'** (Yanbu' el-Bahr), Kızıldeniz kıyısında **Medine'nin iskelesi** — 24.089 K,
38.063 D, Medine'nin ~200 km batı-güneybatısı. Veride `tur:"liman"`, `m:"Medine"`.

Kullanıcının gördüğü ufak Osmanlı toprağı **Tosun Paşa'nın köprübaşıdır** ve
TDV'nin `yenbu` maddesi tam olarak bunu anlatıyor: Vehhâbîler Mekke'yi aldıktan
sonra *"Medine'nin erzak ambarı Yenbu' ile bağlantısını kesip burayı hedef
aldılar"*; Mısır kuvvetleri 1811'de burayı geri alıp Hicaz seferinin üssü yaptılar.

Yani sıralama şu ve veri bunu **doğru** modelliyor:
```
1811 Yenbu geri alınır  →  köprübaşı (haritadaki ufak Osmanlı toprağı)
1812-12-03 Medine       →  3 Aralık 1812
1813-01-23 Mekke        →  23 Ocak 1813
1813-05-02 Tâif         →  2 Mayıs 1813
```
Vehhâbîler Mekke-Medine-Tâif'i tutarken Yenbu'nun Osmanlı görünmesi **anakronizm
değil, seferin kendisidir.** Kullanıcıya böyle açıklanmalı.

### 🔴 ASIL SEBEP BULUNDU — DENETÇİ ölçtü (commit `b21a985`)

**1811'de Yenbu'nun geri alınmasının kronoloji maddesi YOK.** Bunu "ölçülmeli"
diye bırakmıştım; DENETÇİ ölçtü ve doğruladı. `1811-11-01` kırılmasının
±30 gününde iki madde var, **ikisi de Yenbu'dan bahsetmiyor**:

```
1811-10-25  Slobozia Bozgunu — Tuna ordusunun kuşatılması   (7 gün uzakta)
1811-12-01  Safra-Cedîde boğazında ilk bozgun               (30 gün uzakta)
```

Slobozia **Tuna'dadır.** Kullanıcı Yenbu'da toprak belirdiğini görüyor, panelde
Tuna ordusunun kuşatılmasını okuyor. **`hatalar 11 md.1`'in asıl sebebi budur** —
"Yanbu neresi?" sorusu, haritanın kıpırdayıp kronolojinin susmasından doğuyor.

📌 Ayrıca bu kırılma, DENETÇİ'nin ölçtüğü **28 sessiz kırılmanın içindeydi**:
`d:` gövdesindeki üretilmiş *"Aynı tarihte…"* eki eşleştirmeye sokulduğu için
denetim kendi ürettiği listeyi kanıt sayıyordu (§A.0'daki `§26` uyarısının
karşılığı). Ek kapsam dışına alınınca kırılmasız madde sayısı **67 → 95** çıktı.

> 🔴 Yani `olaylar_ek4.js:52`'deki Tosun Paşa maddesi seferin *başlangıcını*
> anlatıyor, Yenbu'nun alınışını değil. **§A.3'teki 5. madde (Yenbu'nun geri
> alınması) artık "öneri" değil, ölçülmüş borçtur.**

---

## A.3 Kronoloji maddesi önerileri — U1 / koordinatör için

**1. `olaylar_ek5.js:300` — başlık daraltılmalı, tarih düzeltilmeli**
`t:"1803-05-15"` → **`1803-02-01`**, başlık `"Vehhâbîlerin Mekke ve Tâif'i ele
geçirmesi"` → **`"Vehhâbîlerin Tâif'i ele geçirmesi"`**, `yer:` → `"Tâif, Hicaz"`.
Gövdedeki Mekke anlatısı 2. maddeye taşınır.

**2. 🆕 YENİ MADDE — Mekke'nin birinci işgali** (`1803-04-30`)
Tâif'ten sonra Mekke'ye giren Suûd b. Abdülazîz'in üç aylık ilk hâkimiyeti.
`kaynak:"mekke"`

**3. 🆕 YENİ MADDE — Şerif Gālib'in Mekke'yi geri alması** (`~1803-08-06`)
Cidde valisi Şerif Paşa'nın yardımıyla 12 Temmuz'da başlayan 25 günlük kuşatma.
Değişmez 2 gereği **zorunlu** (A.1'deki 1803 dönemi eklenirse). `kaynak:"mekke"`

**4. `olaylar_ek6.js:85` — tarih düzeltilmeli, metin zenginleştirilmeli**
`t:"1806-02-01"` → **`1806-01-01"`**. Metne iki şey girmeli: şehrin **ikinci kez**
düştüğü ve Şerif Gālib'in **emirlikte kalmak şartıyla** teslim ettiği.
Mevcut metnin *"Tâif ve Medine'den sonra Mekke de teslim alındı"* sırası
**doğru** (Şubat 1803 → Haziran 1805 → Ocak 1806), dokunulmasın.

**5. 🆕 YENİ MADDE — Yenbu'nun geri alınması** (1811, gün kaynaksız)
A.2'deki sessiz kırılma. `kaynak:"yenbu"`

**6. Geri alış maddeleri ayrışmalı:** bugün Medine/Mekke/Tâif tek güne toplanmış.
Üç ayrı tarih → üç ayrı madde (3 Aralık 1812 · 23 Ocak 1813 · 2 Mayıs 1813).

---

## A.4 Doğrulanmış slug listesi — KAYNAK oturumuna

| Slug | Durum | `<title>` |
|---|---|---|
| `vehhabilik` | ✅ CANLI | VEHHÂBÎLİK - TDV İslâm Ansiklopedisi |
| `mekke` | ✅ CANLI | MEKKE - TDV İslâm Ansiklopedisi |
| `medine` | ✅ CANLI | MEDİNE - TDV İslâm Ansiklopedisi |
| `taif` | ✅ CANLI | TÂİF - TDV İslâm Ansiklopedisi |
| `yenbu` | ✅ CANLI | YENBU' - TDV İslâm Ansiklopedisi |
| `suudiler` | ✅ CANLI | SUÛDÎLER - TDV İslâm Ansiklopedisi |
| `suud-b-abdulaziz` | ✅ CANLI | SUÛD b. ABDÜLAZÎZ - TDV İslâm Ansiklopedisi |
| `tosun-pasa` | ❌ **YOK** | Şerif Gālib ve Tosun Paşa'nın **müstakil maddesi yok**; bilgileri `mekke`, `taif`, `yenbu`, `suud-b-abdulaziz` maddelerinden toplanır |

⚠️ `vehhabilik` maddesi bu blokta **yetersiz kaynaktır** — yalnız *"1803-1805
yılları arasında Tâif, Mekke ve Medine ele geçirildi"* diyor, gün vermiyor ve
Mekke'nin iki kez düştüğünü hiç anmıyor. Bugün beş maddenin `kaynak:` alanı bu
slug'ı gösteriyor; yer maddelerine (`mekke`, `medine`, `taif`) çevrilmeli.
**Bu, ölü slug değil "fakir slug" tuzağı** — bağlantı çalışır, kullanıcı tıklar,
maddede aradığı tarihi bulamaz.

---

# B) YEMEN — `hatalar 11` md.24 · md.25 · md.53

## B.1 `md.25` — "Şirket-i Hayriye maddesinde Yemen toprakları artıyor"

### 🟢 VAKA DOĞRULANDI. Madde adı farklı ama mekanizma tam olarak bu.

Önce ölçüm: **`Hayriye` kelimesi `data/` altındaki hiçbir dosyada geçmiyor.**
(`grep` bütün `*.js` üzerinde, sıfır eşleşme.) Yani "Şirket-i Hayriye" diye bir
kronoloji maddesi yok — kullanıcı başlığı yanlış hatırlamış. Ama şikâyet **doğru**,
çünkü tarif ettiği şey birebir yaşanıyor:

**`data/olaylar_ek5.js:324`**
```
t:"1849-05-01", b:"Baltalimanı Sözleşmesi: Eflak ve Boğdan'da ortak Osmanlı-Rus himayesi"
… "Aynı tarihte haritaya katılan diğer yerleşimler: Zebîd, Moha, Hudeyde.
   Aynı tarihte haritaya katılan diğer yerleşimler: Zebîd."
```

Yemen sahilinin üç limanı (**Zebîd · Moha · Hudeyde**) haritaya **Eflak-Boğdan
antlaşmasının maddesi altında** katılıyor. Kullanıcı Tuna prenslikleriyle ilgili
bir sözleşmeyi okurken Kızıldeniz kıyısının boyandığını görüyor.

📌 Bu **tam olarak `olaylar_ek5.js:405`'teki yorum satırının anlattığı hata
sınıfı** — *"Basra ve Yemen 'İstanbul Antlaşması'nda, Lahsa 'Trablusgarp'ın
fethi'nde… beliriyordu"*. O parti (satır 409+) bu bağı düzeltmek için yazılmış
ama **1849 Yemen'i atlanmış.** Sınıf kapanmamış, bir vakası kalmış.

Sebep: `1849-05-01` yerleşim kaydındaki **uydurma bir gündür** ve Baltalimanı
Sözleşmesi'nin **gerçek günü** olan 1 Mayıs 1849'a çarpmıştır. Değişmez 2 bu
yüzden "maddeli" diyor — aynı gün, sıfır mesafe. Denetim geçiyor, kullanıcı hatayı
görüyor. (`OGRENILENLER §18`: Değişmez 2 maddenin VAR olduğunu sorar, DOĞRU
olduğunu sormaz.)

### 🐞 İKİNCİ BULGU — üretilmiş cümle İKİ KEZ basılmış
Aynı maddede o cümle **iki defa** var; ikincisi birincinin alt kümesi:
> *"…: Zebîd, Moha, Hudeyde."* + *"…: Zebîd."*

Bu bir üretici kusuru (aynı maddeye iki ayrı turda ek yapılmış, ikincisi
öncekini görmemiş). Nerede üretildiğini bilmiyorum — bende değil. **Koordinatöre
havale ediyorum**; aynı desen başka maddelerde de olabilir, ölçülmeli:
`grep -c 'Aynı tarihte' ` ile madde başına sayım yeterli.

### Öneri
1. 🆕 **Yemen sahili için kendi maddesi yazılsın** (1849) — Tanzimat devrinde
   Tihâme'ye dönüş. TDV `yemen`: *"San'a'yı ele geçirmek istedilerse de halkın
   isyanı yüzünden Hudeyde'ye geri dönmek zorunda kaldılar (1849)."*
   Yani 1849'da tutulan yer **sahildir**, iç bölge değil — kayıtlar bunu zaten
   doğru modelliyor.
2. Baltalimanı maddesinden üretilmiş cümleler çıkarılsın (mükerreri de).
3. ⚠️ `1849-05-01` günü **kaynaksız**. TDV yalnız "1849" diyor. Yeni madde
   yazılırken gün uydurulmamalı; `1849-01-01` daha dürüst olur ve Baltalimanı
   çarpışmasını da kendiliğinden bitirir.

---

## B.2 `md.53` — "San'â'nın geri alınması: kaybı haritada hiç görünmüyor"

### 🔴 KULLANICI HAKLI. Kayıp haritada YOK.

**`data/olaylar_ek5.js:370`**
```
t:"1905-08-31", b:"San'a'nın geri alınması: İmam Yahyâ isyanının bastırılması"
```

**`data/yerlesimler.js:599` — Sana kaydı:**
```
d:[{f:"1547-01-01",t:"1635-01-01"},{f:"1872-04-01",t:"1918-10-30"}]
```
1872'den 1918'e **kesintisiz Osmanlı.** 1905'te hiçbir kırılma yok. Madde
"geri alındı" diyor, harita şehri hiç kaybetmemiş gösteriyor.

**TDV `yemen` ✅ canlı — kaybı doğruluyor:**
> *"şehri isyancılara teslim etmeye mecbur oldu"* (1905)
> geri alınış: *"…1 Eylül 1905 tarihleri arasında yürüttüğü harekâtta… San'a'ya girdi"*

Yani San'a **gerçekten imamın eline geçti** ve geri alındı. Veri bunu modellemiyor.

### Öneri — Sana kaydına 1905 dönemi eklensin
| | Mevcut | Önerilen |
|---|---|---|
| Sana | `d:{f:"1872-04-01",t:"1918-10-30"}` | **ikiye böl:** `1872-04-01→1905-04-01` ve `1905-09-01→1918-10-30` |
| | — | **`s:[{f:"1905-04-01",t:"1905-09-01",d:"yemen"}]` EKLE** |

⚠️ **Nisan 1905 günü kaynaksız.** TDV kuşatmanın bittiği tarihi veriyor
(1 Eylül 1905), şehrin teslim edildiği günü vermiyor. `1905-04-01` benim
koyduğum ay-hassasiyetli yaklaşıklıktır — koordinatör kabul etmezse alternatif,
kaybı hiç modellemeyip **maddeyi düzeltmektir** ("geri alınması" → "kuşatmanın
kaldırılması"). İkisi de tutarlı; ilki daha bilgilendirici.

📌 Madde `1905-08-31` diyor, TDV **1 Eylül 1905**. Bir gün. Düzeltilebilir.
📌 Taiz de aynı isyanda düştü mü — **ölçemedim**, TDV `yemen` Taiz'i anmıyor.
Kaynak bulunmadan Taiz'e dokunulmamalı.

---

## B.3 `md.24` — "Yemen'de nokta nokta Osmanlı idaresi" + Kızıldeniz'in karşı kıyısı

### Birinci yarı: nokta nokta görüntü **GERÇEK, hata değil**

1849-1872 arası veride yalnız **sahil** Osmanlı:

| Yerleşim | 1849-1872 arası | |
|---|---|---|
| Hudeyde · Zebîd · Moha | 🔴 Osmanlı | Tihâme sahili |
| Sana · Taiz | ⚪ Kāsımî imamları | iç yayla |
| Ebha (Asîr) | ⚪ bağımsız | 1871'e kadar |

Bu **tarihin kendisidir.** TDV `yemen`: 1849'da San'a'ya çıkılmak istendi,
*"halkın isyanı yüzünden Hudeyde'ye geri dönmek zorunda kaldılar"*. Osmanlı 23 yıl
boyunca gerçekten yalnız sahil şeridini tuttu; yaylaya ancak 1872'de Ahmed Muhtar
Paşa ile çıkabildi. Kullanıcının gördüğü "nokta nokta" görüntü **doğru bilgidir**
ve düzeltilmemelidir.

⚠️ Tek gerçek eksik: **1835-1840 Mısır işgali modellenmemiş.** TDV `yemen`:
*"Mehmed Ali Paşa 1835'te Emin Bey'in emrinde bir orduyu ve deniz gücünü Yemen'e
sevkedip Lühayye ve Hudeyde'yi aldıktan sonra"*. Bugünkü veri Hudeyde'yi
1281'den 1849'a kadar kesintisiz `yemen` gösteriyor. Düşük öncelik, ama Kavalalı'nın
Kızıldeniz yayılmasının parçası olduğu için `md.20` ile birlikte ele alınmalı.

### İkinci yarı: **Kızıldeniz'in karşı kıyısı MISIR'A bağlı — veri yanlış**

Kullanıcının sorusunun cevabı net: **Mısır'a.**

**TDV `masavva` ✅ canlı** (`<title>` = "MASAVVA' - TDV İslâm Ansiklopedisi"):
> *"**1846** yılında Sultan Abdülmecid tarafından Mısır Hidivi Mehmed Ali Paşa'ya
> **Sevâkin ile birlikte sâlyâne olarak verilen** Masavva'"*
> *"Hidiv İsmâil Paşa zamanında Dehlek ve Sevâkin ile birlikte **Mısır emlâkine
> dahil edilerek** kaymakamlık statüsünde teşkilâtlandırıldı (**1865**)"*
> *"**5 Şubat 1885**'te Masavva'a girdiler"* (İtalyanlar)

Bugünkü veri üç kaydı da **doğrudan Osmanlı** (`d:`) gösteriyor:

| Kayıt | Mevcut | Önerilen | Gerekçe |
|---|---|---|---|
| **Sevâkin** `:629` | `d:{f:"1517-04-13",t:"1885-02-05"}` | `d:` **1865-01-01**'de bitsin, `v:[{f:"1865-01-01",t:"1885-02-05",k:"Mısır (Kavalalı)"}]` **EKLE** | `masavva` |
| **Masavva** `:630` | `d:{f:"1557-01-01",t:"1885-02-05"}` | aynı bölme | `masavva` |
| **Dahlak** `:1164` | `d:{f:"1557-01-01",t:"1885-02-05"}` | aynı bölme | `masavva` ("Dehlek") |

Bu düzeltilince Kızıldeniz'in Afrika kıyısı, hemen yanındaki Sudan ve Mısır'la
**aynı açık tonda** boyanır — kullanıcının sorduğu görsel tutarsızlık kapanır.
Bugün Sudan `v:"Mısır (Kavalalı)"`, kıyı `d:` doğrudan Osmanlı; ikisi komşu ve
farklı renkte, oysa aynı idareye bağlılar.

📌 **1846 mı 1865 mi?** İkisi de TDV'de var ve farklı hukukî statü: 1846 **sâlyâne**
(gelir tahsisi, mülkiyet değil), 1865 **Mısır emlâkine dahil** (idarî ilhak).
Haritada tâbi katmanın başlangıcı için **1865** daha doğru — 1846'da nominal bağ
İstanbul'daydı. Kararı koordinatöre bırakıyorum; ikisi de savunulabilir, ama
seçilen tarihe **madde yazılması gerekir** (Değişmez 2).

⚠️ **Sevâkin'in 1885 tarihi şüpheli.** Kayıtta `s:{f:"1885-02-05",d:"ingiltere"}`
yazılı — bu, Masavva'nın **İtalyan** işgal tarihinin kopyalanmış hâli gibi
görünüyor. Sevâkin İtalyanlara değil İngiliz-Mısır kuvvetlerine kaldı ve tarihi
aynı gün olmak zorunda değil. **Ölçemedim, `sevakin` slug'ı ölü** (aşağıya bak);
`habes-eyaleti` maddesinden doğrulanmalı — kendi turumda sıraya alıyorum.

---

## B.4 🔴 SLUG UYARISI — `sevakin` ÖLÜ, neredeyse tuzağa düşüyordum

| Slug | Durum | `<title>` |
|---|---|---|
| `yemen` | ✅ CANLI | YEMEN - TDV İslâm Ansiklopedisi |
| `masavva` | ✅ CANLI | MASAVVA' - TDV İslâm Ansiklopedisi |
| `surre` | ✅ CANLI | SURRE - TDV İslâm Ansiklopedisi |
| **`sevakin`** | ❌ **ÖLÜ** | **"Arama - TDV İslâm Ansiklopedisi"** |

⚠️ **Kayda değer:** `sevakin` ölü olmasına rağmen arama sayfası, içinde "Sevâkin"
geçen **başka maddelerden alıntı parçaları** döndürdü — 1846, 1865 ve 1885
tarihleri o parçalarda görünüyordu. `<title>` kontrolü yapılmasaydı bu parçalar
"Sevâkin maddesi böyle diyor" diye rapora girecekti. **Ölü slug yalnız boş sayfa
döndürmüyor; içerik de döndürüyor ve o içerik doğru bile olabilir — ama kaynağı
yanlış gösterilmiş olur.** `OGRENILENLER §7`'ye bu ayrıntı eklenmeli.

Sevâkin için doğru kaynaklar: **`habes-eyaleti`** (Sevâkin eyaletin ilk sancağı),
`masavva`, `dehlek`. ⚠️ Veri "Dahlak" yazıyor, TDV **"Dehlek"** — slug `dehlek`.

---

# C) KÖRFEZ VE DOĞU

## C.1 🔴 `hatalar 16 md.6` — Lahsa-Katîf karasal kopukluk: **GERÇEK, ve sebebi ölçüldü**

### Kullanıcı haklı. Kopukluk var, sebebi geometri değil **sahipsiz Kuveyt peteği.**

Körfez kıyısındaki bütün noktaları kuzeyden güneye sıralayıp 1600-06-15'te
sahiplerini ölçtüm (`scratchpad/korfez_olc.py`, salt okur):

```
  Kürne              31.010K  OSMANLI
  Basra              30.508K  OSMANLI
  Fâv                29.976K  OSMANLI
  Kuveyt             29.376K  --- SAHİPSİZ ---   <<< kur:"1716-01-01"
  Cübeyl             26.998K  OSMANLI
  Katîf              26.557K  OSMANLI
  Ukayr (Uceyr)      25.650K  OSMANLI
  Lahsa              25.383K  OSMANLI
```

**Kuveyt, körfez koridorundaki TEK sahipsiz noktadır ve tam da Osmanlı kuzeyi
(Basra-Fâv) ile Osmanlı güneyi (Cübeyl-Katîf-Ukayr-Lahsa) arasında durur.**
Peteği boş kaldığı için güney öbeği ana gövdeden **kopuk bir ada gibi** görünür.

Sebep `CLAUDE.md §2`'nin tersi: burada emilme değil, **emilecek sahip yok.**
Kuveyt `kur:"1716-01-01"` taşıyor ve **motor `kur:` alanını okumuyor** — nokta
1281'den itibaren petek alıyor ama 1716'ya kadar hiçbir `d:`/`v:`/`s:` dönemi yok.

Ölçülen açıklık: Kuveyt'in peteği Basra yönünde **63,7 km**, Katîf yönünde
**185,4 km** uzanıyor (komşulara yarı mesafe). Basra→Katîf düz uzaklık **489,8 km**.

**Görünür pencere: 1550-1670** — Lahsa ve Katîf'in Osmanlı olduğu 120 yıl.
1670'ten sonra güney zaten Benî Hâlid'e geçtiği için şikâyet doğal olarak biter.

### 📌 BU ZATEN BİLİNEN BİR BORÇ — ve ikinci kez farklı yüzden görüldü

`YAPILACAKLAR.md`'deki *"Motor `kur:` ve `bit:` alanlarını okumuyor"* maddesi
**tam bu vakayı** anlatıyor ve örnek olarak yine Kuveyt'i veriyor
(`hatalar 3.docx md.8`, Katîf ekran görüntüsü). Yani:

> `hatalar 3 md.8` ile `hatalar 16 md.6` **aynı kusurun iki ayrı yüzüdür.**
> Biri "kıyı zincirinde delik var" der, öteki "Lahsa-Katîf kopuk görünüyor" der.
> Tek düzeltme ikisini birden kapatır.

**Önerilen çözüm — YAPILACAKLAR'daki reçetenin aynısı:** kurulmamış peteği o
dönem için **en yakın SAHİPLİ komşuya bağışla** (ADA KURALI'nın makinesi).
1550-1670 için Kuveyt'in peteği Fâv'a ya da Cübeyl'e gider, ikisi de Osmanlı,
kopukluk kapanır. ⚠️ Veri tarafında **hiçbir düzeltme gerekmiyor** — kayıt doğru,
motor eksik. Bu satır **M (MOTOR) oturumunundur, benim listemde değil.**

⚠️ **DENETÇİ'ye not:** `denetim/BITISIKLIK-2026-07-30.md`'de aradım,
koordinatörün andığı **"91,42 km / 254 dönem"** kaydını **bulamadım.** Raporda
Basra yalnız **C bölümünde** (uzak kara sıçraması, >100 km, "meşru") geçiyor.
Eğer Lahsa-Katîf kopukluğu C'ye "meşru" diye düşüyorsa **yanlış sınıflanmış** —
burada araya giren yabancı toprak yok, **sahipsiz boşluk** var. İkisi ayrı sınıf
olmalı: *"araya devlet girmiş"* ≠ *"araya hiçbir şey girmemiş"*.

### 🔴🔴 §C.1'İN HÜKMÜ GERİ ÇEKİLDİ — motor `kur:`i OKUYOR (bkz. §K)

> Yukarıdaki **ölçüm doğru**: Kuveyt koridordaki tek sahipsiz noktadır, petek
> açıklığı 63,7 km / 185,4 km. **Ama hükmüm yanlıştı.** Motor `kur:`/`bit:`i
> **30 Temmuz'dan beri okuyor** (`b781c2c`); ben `YAPILACAKLAR.md`'nin
> "okumuyor" satırına dayandım, o satır bir gün bayat kalmıştı.
> Ve Kuveyt'in boşluğu **kusur değil, kasıtlı** — körfez şeyhlikleri
> `CLAUDE.md §3`'te sayılı. Ayrıntı: **§K.1**.

### ~~🐞 Yan bulgu — `kur:` okunmamasının İKİNCİ yüzü: hayalet nokta~~ (geçersiz)
Aynı ölçüm dört noktayı daha yakaladı; bunlar delik açmıyor ama **kuruluşundan
önce toprak boyuyor**:

| Nokta | `kur:` | 1600'de görünen sahip |
|---|---|---|
| Nâsıriye | 1869 | OSMANLI |
| Muhammere | 1812 | safevi |
| Buşehr | 1734 | safevi |
| Doha (Katar) | 1825 | (sahipsiz) |

Nâsıriye 1600'de Osmanlı boyuyor — şehir 269 yıl sonra kurulacak. Bugün zararsız
(çevresi zaten Osmanlı'ydı) ama **aynı motor eksiğinin sessiz hâli**. Bunlar
`ARAŞTIRMA DOĞU`'nun bölgesinde; oraya haber verilmeli.

---

## C.2 `hatalar 11 md.35` — "Lahsa: neresi doğrudan, neresi özerk?"

**TDV `lahsa` ✅ CANLI** (`<title>` = "LAHSÂ - TDV İslâm Ansiklopedisi")

Cevap: **Lahsa özerk değil, tam bir Osmanlı eyaletiydi.**
> *"Osmanlı Devleti tarafından hâkimiyet altına alınarak Basra beylerbeyiliğine
> bağlandı"* (**1547**) — ardından ~1553'te kendisi beylerbeyilik oldu
> (900.000 akçe hâs; Katîf 130.000).
> 1871: *"Midhat Paşa bölgeyi **Necid sancağı** adı altında Basra'ya bağladı"*

Yani iki ayrı dönem, iki ayrı kademe — ikisi de **doğrudan idare**:
`1550-1670` beylerbeyilik (eyalet) · `1871-1913` Basra'ya bağlı sancak.

### 🔴🔴 AŞAĞIDAKİ BÖLÜM GERİ ÇEKİLDİ — İDDİA YANLIŞTI (bkz. §H)

> Bu bölümde *"`y:"vassal"` şema ihlalidir, kaldırılmalı"* dedim ve **yanılmıştım.**
> `js/app.js:769` `YONTEM_SIMGE` sözlüğü `vassal`'ı **tanıyor ve 🤝 ile çiziyor**;
> yani `vassal` meşru bir *ediniliş yöntemidir*. Ayrıntı ve düzeltilmiş öneri:
> **§H.1**. Aşağıdaki metin, nasıl yanıldığımın kaydı olarak duruyor.

### ~~Ama veri bunu ÇELİŞKİLİ yazıyor — şema ihlali~~ (geçersiz)

`data/yerlesimler.js:572` (Lahsa) ve `:571` (Basra), `:1521` (Katîf):
```
d:[{f:"1550-01-01",t:"1670-01-01",y:"vassal"}]
```
`VERI-YAPISI.md:38`: **`y` = Kazanım biçimi: `savas` | `kusatma` | `antlasma` | `miras`**

`"vassal"` bu sözlükte **yok** — ve zaten *kazanım biçimi* değil, *bağlılık
kademesi* anlatıyor. Üstelik `d:` "doğrudan Osmanlı" demek, `v:` "tâbi" demek;
`d:` içine `y:"vassal"` yazmak kaydın kendisiyle çelişiyor.

**Bütün dosyada ölçtüm — sözlük dışı iki değer, 23 kullanım:**

| Değer | Kaç kez | Sözlükte? | Nerede (benim bölgemde) |
|---|---|---|---|
| `vassal` | **12** | ❌ | Basra `:571` · Lahsa `:572` · Katîf `:1521` · Ukayr `:1522` · Cübeyl `:1535` · Zeyla `:636` |
| `ilhak` | **11** | ❌ | Sevâkin `:629` · Masavva `:630` · Zeyla `:675` · Dahlak `:634` |

Kalan `savas`/`kusatma`/`antlasma`/`miras` kullanımları geçerli.

**Öneri:** ya `VERI-YAPISI.md`'nin sözlüğü genişletilsin (`ilhak` makul bir
kazanım biçimidir), ya da bu 23 kayıt sözlüğe çekilsin. **`vassal` her hâlükârda
yanlış** — kademe bilgisi `y:`nin işi değil. Karar `VERI-YAPISI.md` sahibinin;
ben yalnız ölçtüm.

📌 Lahsa'da ayrıca **iki tarih TDV ile çelişiyor:**

| | Mevcut | TDV `lahsa` | Not |
|---|---|---|---|
| Osmanlı fethi | `1550-01-01` | **1547** | 3 yıl. Kronoloji maddesi `ek5:419` de 1550 diyor |
| Suûdî alışı | `1913-05-08` | **8 Temmuz 1913** (Hüfûf) | ⚠️ `05-08` ↔ `07-08`: **ay/gün karışması gibi duruyor** |

⚠️ TDV ayrıca **1818'de Benî Hâlid'in yeniden iktidara getirildiğini** ve 1841'de
Osmanlı'nın kıyıyı yeniden işgal ettiğini söylüyor; veride bu iki dönem **hiç
yok** (1795→1871 kesintisiz `suud`). Bu bir eksik, ama düzeltmesi yeni dönem
ekler ve madde borcu doğurur — **öncelik kararı sende.**

---

## C.3 `hatalar 11 md.34` — Asîr'in doğrudan idareye alınması

**⚠️ ÖNCE SLUG:** `CLAUDE.md` `asir`'ı ölü diye kaydetmiş — **doğru.**
Canlısını buldum: **`asir--suudi-arabistan`** ✅ (`<title>` = "ASÎR - TDV İslâm
Ansiklopedisi"). Ayrıca **`ebha`** ✅ maddesi de var.

**Gösterim büyük ölçüde DOĞRU.** Ebha kaydı `d:{f:"1871-01-01",t:"1918-10-30"}`,
kronoloji maddesi `ek5:472` (1871-01-01, "Asîr'in doğrudan idareye alınması")
kırılmayla eşleşiyor. Redif Paşa da TDV'de geçiyor.

Üç ince düzeltme:

1. **Kademe:** TDV, Muhammed b. Âiz'in ölümünden sonra *"Asîr… **Yemen
   vilâyetine bağlı** bir mutasarrıflığa çevrildi"* diyor ve tarihi **1872**
   veriyor, 1871 değil. 1871 seferin yılı, 1872 teşkilâtlanmanın yılı. Madde
   başlığı "doğrudan idareye alınması" derken kastedilen doğru (özerk emirlikten
   çıkış) ama bağlantı İstanbul'a değil **Yemen vilâyetine**.
2. **`kaynak:` düzeltilmeli:** `ek5:472` bugün `kaynak:"yemen"` gösteriyor;
   **`asir--suudi-arabistan`** olmalı. (§A.4'teki "fakir slug" sınıfı: `yemen`
   maddesi Asîr'in teşkilâtını anlatmıyor.)
3. 🔴 **`aiz` kimliği şüpheli.** Ebha `s:[{f:"1918-10-30",t:"1920-04-01",d:"aiz"}]`
   yazıyor. Ama TDV'ye göre Âiz ailesi **1872'de** sahneden çekildi; 1911'den
   sonra bölgeye hâkim olan **İdrîsî emirliğidir** (*"1911'e gelindiğinde
   İdrîsî önemli bir toprağa hâkimdi"*, İtalyan ve İngilizlerle ittifak).
   1918-1920 için `aiz` yerine `idrisi` beklenirdi.
   ⚠️ **DEĞİŞTİRME ÖNERMİYORUM** — TDV'de **İdrîsîler için müstakil madde
   bulamadım** (arama sonuçlarında yok). `CLAUDE.md §4` gereği kaynaksız kimlik
   değişikliği yapılmamalı. **"Kaynak yok" diye işaretliyorum**; KAYNAK oturumu
   `idrisiler` / `idrisi-emirligi` gibi slug'ları denerse çözülür.

---

## C.4 `hatalar 11 md.20` — Kavalalı'nın irsî valiliğinde Arabistan nüfuzu

**Kısmen ölçüldü, kısmen açık.** Bugünkü veri şunu diyor:
Mekke · Medine · Cidde · Yenbu → `v:"Mısır (Kavalalı)"` **1841-06-01**'e kadar,
sonra `v:"Mekke Şerifliği"`. Yani 1841 fermanıyla Hicaz Mısır'dan **çıkıyor**.
Bu doğru yöndür: 1841 Londra Konvansiyonu Mehmed Ali'yi Mısır ve Sudan'la
sınırladı, Hicaz ve Girit elinden alındı.

⚠️ **Açık kalan:** Kızıldeniz'in Afrika kıyısı (§B.3) bunun **tersi** yönde
yanlış — Sevâkin/Masavva/Dahlak 1846 ve 1865'te Mısır'a **verilmiş** ama veride
doğrudan Osmanlı duruyor. Yani 1841'de Hicaz'ı Mısır'dan alıyoruz (doğru), ama
1865'te Habeş sahilini Mısır'a vermiyoruz (yanlış). İkisi aynı maddenin iki yüzü;
**§B.3'teki düzeltme bunu da kapatır.**

📌 `md.20`'nin "Arabistan'da nüfuz alanına geçen toprak" kısmını **tam
ölçemedim** — hangi ekran görüntüsüne baktığı belli değil. Kullanıcıdan tarih
ya da görüntü gelirse bir turda kapatırım. **`❓ konumu belirsiz`** olarak
işaretliyorum.

---

# D) KUVEYT VE KATAR

## D.1 🔴 KUVEYT — önerilen 1914-11-05 de, 1914-11-03 de TDV'yi tutmuyor

**TDV `kuveyt` ✅ CANLI** (`<title>` = "KÜVEYT - TDV İslâm Ansiklopedisi")
> *"İngiltere savaşta Basra'yı ele geçirince (**22 Kasım 1914**) Küveyt'in kendi
> himayesinde olduğunu ilân etti"*

| Kaynak | Tarih |
|---|---|
| Bugünkü veri | `1914-11-05` |
| Koordinatörün önerisi | `1914-11-03` |
| **TDV `kuveyt`** | **22 Kasım 1914** |

**Öneri: `1914-11-22`.** İki ek gerekçe:
1. `data/yerlesimler.js:571` **Basra** zaten `s:{f:"1914-11-22",d:"ingiltere"}`
   taşıyor — TDV'nin cümlesi ikisini **aynı olaya** bağlıyor ("Basra'yı ele
   geçirince… ilân etti"). Aynı tarih verilirse Kuveyt ile Basra **tek
   kırılmada** birlikte döner ve zaten var olan Basra maddesi ikisini de karşılar.
2. Bugünkü `1914-11-05`'in kaynağı bende yok.

⚠️ **Dürüst olmak için:** 3 Kasım 1914 tarihi TDV dışı literatürde geçiyor
(İngiltere'nin Kuveyt'i "İngiliz himayesinde bağımsız emirlik" sayması). Yani
koordinatörün hatırladığı tarih uydurma değil — ama `CLAUDE.md §4` TDV'yi
birincil sayıyor ve TDV bu olayı **22 Kasım**'a bağlıyor. İki tarih iki farklı
hukukî işlem de olabilir. **Kararı sana bırakıyorum; ben TDV'yi öneriyorum.**

TDV'nin verdiği diğer iki tarih veriyle uyumlu ve teyit edildi:
**23 Ocak 1899** gizli İngiliz-Kuveyt antlaşması · **29 Temmuz 1913**
Osmanlı-İngiliz mukavelesi.

## D.2 🟢 KATAR — dünkü kayıt DOĞRU, teyit edildi

**TDV `katar` ✅ CANLI** (`<title>` = "KATAR - TDV İslâm Ansiklopedisi")

| Veri | TDV | |
|---|---|---|
| `s:{f:"1913-07-29"}` | *"**29 Temmuz 1913**… Osmanlı Devleti Katar yarımadası üzerindeki bütün taleplerinden feragat etti"* | ✅ |
| `s:{t:"1916-11-03"}` | *"**3 Kasım 1916**"* İngiliz-Katar himaye antlaşması | ✅ |
| `d:"katar"` (Âl Sânî) | Âl Sânî 1860'lardan itibaren bölge politikalarında etkin | ✅ |

Aradaki dönemi ayrı kimlikle göstermek doğru — `:789`'daki yorumun gerekçesi
(*"Boşluk bırakmak 'burada kimse yoktu' der; oysa şeyhlik oradaydı"*) TDV ile
uyumlu.

⚠️ **Tek incelik:** TDV, 1913 mukavelesinin **hiç onaylanmadığını** söylüyor
(*"London treaty signed (never ratified)"*). Osmanlı garnizonu Doha'dan fiilen
1915'te çekildi. Yani `1913-07-29` **hukukî** tarihtir, **fiilî** değil. Bu
projede benzer durumlarda fiilî tarih tercih edildi (Mekke'nin 1517-07-06'sı
gibi). **Ama TDV garnizonun çekilme gününü vermiyor** — kaynaksız gün yazmamak
için `1913-07-29` **olduğu gibi kalsın** diyorum. Değiştirilecekse önce kaynak.

📌 `KONTROL.md`'deki yedi "fetih" maddesinden **`1871-09-20 Katar`** bana ait:
madde `ek5:346`, Doha kaydında karşılığı `v:{f:"1871-01-01"}`. **Tarihler
tutmuyor — 262 gün fark.** Madde "Sonbahar 1871" diyor, kayıt 1 Ocak 1871.
Kayıt maddeye çekilirse (`1871-09-20`) hem Değişmez 2 kapanır hem madde
kırılmasız olmaktan çıkar. **TDV `katar` "1871 (sonbahar)" diyor, maddeyi
destekliyor.** Öneri: Doha `v:{f:"1871-01-01"}` → **`1871-09-20`**.

---

# E) ZEBÎD 1516 — Değişmez 2t'nin yedi fetihinden biri

## E.1 🟢 MADDE HAKLI. Tarih doğru, üstelik güne kadar TDV'de yazılı.

`data/olaylar_ek5.js:151`
```
t:"1516-06-20", k:"fetih", etiket:["savas","ekonomi"],
b:"Zebîd'in alınması: Osmanlı denizcilerinin Kızıldeniz'e ilk girişi",
kisiler:"Selman Reis, Hüseyin Rûmî, Kansu Gavri", kaynak:"yemen"
```

**İKİ ayrı TDV maddesi tarihi birebir doğruluyor:**

**`zebid`** ✅ CANLI (`<title>` = "ZEBÎD - TDV İslâm Ansiklopedisi")
> *"Müttefik Osmanlı-Memlük ordusu **19 Cemâziyelevvel 922'de (20 Haziran 1516)**
> Zebîd'i ele geçirdi."*

**`selman-reis`** ✅ CANLI (`<title>` = "SELMAN REİS - TDV İslâm Ansiklopedisi")
> *"Hüseyin Bey, Sultan Âmir'e düşman olan **Zeydîler'in yardımıyla** 19
> Cemâziyelevvel 922'de (20 Haziran 1516) Zebîd'i aldı."*
> Harekât **Kansu Gavri'nin hizmetinde**; filo Yavuz'a **1517**'de bağlandı.

Maddenin gövdesi de doğru: *"Henüz Memlük hizmetinde yürütülen bu harekât"*
cümlesi TDV ile bire bir örtüşüyor. **Bu maddede düzeltilecek tarih yok.**

## E.2 O hâlde denetim neden işaretliyor — ve doğru cevap ne

Çünkü `k:"fetih"` ama haritada kırılma yok. Zebîd kaydı:
```
s:[{f:"1281-01-01", t:"1538-08-03", d:"yemen"}]
```
1281'den 1538'e **tek kesintisiz "yemen" dönemi** — Resûlî, Tâhirî, Memlûk,
hepsi aynı blokta. 1516'daki gerçek el değiştirme (Tâhirî Sultan Âmir → Memlûk
hizmetindeki filo) veride **görünmüyor.**

Yani üç ihtimalden (madde yanlış tarihte / özne yanlış / kayıt eksik) geçerli
olan **üçüncüsü: yerleşim kaydı eksik.**

### Önerilen çözüm — ama 🔴 HAYALET DEVLET TUZAĞI VAR

İlk akla gelen `s:{f:"1516-06-20", t:"1538-08-03", d:"memluk"}` eklemektir ve
**bu YANLIŞ olur**: Memlûk Devleti **1517-04-13'te yıkılıyor**, 21 yıllık hayalet
etiket doğardı — `CLAUDE.md §3.5`'in tam olarak yasakladığı şey.

Doğrusu iki dönem:

| # | Öneri | Gerekçe |
|---|---|---|
| 1 | `s:[{f:"1516-06-20", t:"1517-07-06", d:"memluk"}]` | Fiilî Memlûk idaresi (Barsbay). Bitiş, Mekke'ye verilen **bölgesel teslim gecikmesi** tarihinin aynısı — §3.5'in izin verdiği aylar mertebesinde |
| 2 | `v:[{f:"1517-07-06", t:"1538-08-03", k:"eski Memlûk beyleri (Osmanlı desteğiyle)"}]` | TDV `zebid`: *"Osmanlılar'ın desteğiyle **Emîr İskender** Zebîd'e hâkim oldu"*; 1520'ler boyunca *"eski Memlük beylerinin fiilî hâkimiyeti"* Osmanlı nominal üstünlüğüyle birlikte |

Bu iki dönem eklenirse:
- 1516 maddesi kırılmasını bulur → **Değişmez 2t tavanı bir indirilir**
- `ek5:411` (1538 "Yemen sahilinin ilhakı") maddesi anlamını korur — 1538 artık
  "yoktan fetih" değil, **nominal bağın kalıcı idareye çevrilmesi** olur ki
  TDV'nin anlattığı da budur

⚠️ **Alternatif, daha ucuz çözüm:** `k:"fetih"` → `k:"savas"` (ya da `diger`).
Madde zaten `etiket:` içinde `toprak-kazanc` **taşımıyor** — yazan kişi Osmanlı
toprak kazancı olmadığını bilerek işaretlemiş. `k:"fetih"` ile `etiket:` arasındaki
bu çelişki, denetimi tetikleyen asıl şey olabilir. **Bu yol veriye hiç
dokunmadan kapatır** ama 1516'daki gerçek el değiştirmeyi haritada görünmez
bırakır. **Karar koordinatörün.**

## E.3 İki yan bulgu

**1. `kaynak:"yemen"` yine "fakir slug".** `yemen` maddesi 20 Haziran 1516
iddiasını **taşımıyor**; tarihi veren `zebid` ve `selman-reis`. Kullanıcı
bağlantıya tıklarsa aradığı günü bulamaz. → **`kaynak:"zebid"`** olmalı.
(§A.4'teki `vehhabilik` vakasının aynısı — bu, bölgemde **üçüncü** kez çıkıyor:
`vehhabilik`, `yemen`×2 (Asîr + Zebîd). Desen: **bölge maddesi, olay maddesinin
yerine kaynak gösterilmiş.**)

**2. ⚠️ 1538 mi 1539 mu — ölçülmeli, ben karar vermiyorum.**
TDV `zebid`: *"Yemen ve Zebîd'de Osmanlı hâkimiyeti kalıcı olarak Mısır
Beylerbeyi Hadım Süleyman Paşa tarafından gerçekleştirildi"* — **945/1539**.
Veri ve `ek5:411` ise **3 Ağustos 1538** diyor. Hadım Süleyman Paşa donanması
1538 yazında Aden'e ulaştı, sonra Diu'ya gitti ve **1539'da** dönüp Yemen'i
düzene soktu; yani iki tarih iki ayrı aşama olabilir ve ikisi de savunulabilir.
**Hata ilan etmiyorum** — `ek5:411`'in dayandığı kaynak görülmeden karar
verilmemeli. `KAYNAK` oturumuna ölçüm işi olarak veriyorum.

---

# F) İKİNCİ TUR — koordinatörün 2-6 numaralı maddeleri

## F.1 `1849` Yemen sahili — **TDV'de ay/gün YOK, üçü de yalnız yıl veriyor**

Koordinatörün istediği ay/günü aradım. **Üç ayrı TDV maddesinde de yok:**

| Slug | Ne diyor |
|---|---|
| `yemen` ✅ | *"San'a'yı ele geçirmek istedilerse de halkın isyanı yüzünden Hudeyde'ye geri dönmek zorunda kaldılar (**1849**)"* |
| `hudeyde` ✅ | *"**1849**'da Osmanlı Devleti'nin Mekke şerifinin nezareti ve Tevfik Paşa'nın kumandası altında"* |
| `zebid` ✅ | *"**1849**'da tekrar Osmanlı hâkimiyetine geçen Zebîd"* |

> **Öneri: `1849-05-01` → `1849-01-01`.**
> `CLAUDE.md §4`'ün "yıl biliniyor, gün bilinmiyor" biçimi. **Uydurmuyorum,
> bilinmediğini yazıyorum.**

Bu tek değişiklik iki işi birden yapıyor:
1. Uydurma günü kaldırır;
2. **Baltalimanı çarpışmasını kendiliğinden bitirir** — Yemen sahili artık
   Eflak-Boğdan sözleşmesinin altında belirmez (§B.1). `hatalar 3 md.8` sınıfının
   kapanmamış son vakası kapanır.

⚠️ Yeni tarihe **madde borcu doğar** — 1849 Yemen sahili maddesi (§B.1'deki 1.
öneri) artık zorunlu, çünkü Baltalimanı tesadüfi örtüsü kalkıyor.

📌 **Yan teyit — 1835-1840 Mısır dönemi doğrulandı.** `hudeyde` ✅:
*"Mısır ordusunun şehirden ayrılmasıyla Hudeyde de… Şerîf Hüseyin'in kontrolüne
girdi (**1840**)"*. §B.3'te "düşük öncelik" diye bıraktığım boşluğun bitiş tarihi
artık kaynaklı: Kavalalı dönemi **1835 → 1840**.

---

## F.2 `Sana 1905` — 🟢 GÜN DEĞİL ama **AY KAYNAKLI ÇIKTI**

Koordinatörün (c) şıkkına ("bulamazsan kaynaksız yaz") gerek kalmadı.

**`mutevekkil-alellah-yahya-hamiduddin`** ✅ CANLI
(`<title>` = "MÜTEVEKKİL-ALELLAH, Yahyâ Hamîdüddin - TDV İslâm Ansiklopedisi")
> İmam **20 Rebîülevvel 1322 (5 Haziran 1904)**'te imâmete geçti, cihad çağrısı yaptı;
> **"1905 Nisanında"** San'a'yı ve çevresini ele geçirdi.

Yani `f:"1905-04-01"` artık **"Nisan 1905, günü bilinmiyor"** demektir —
uydurulmuş gün değil, `§4`'ün kabul ettiği ay hassasiyeti. Koordinatörün
şıklarından **(b)'ye yükseldi.**

| Alan | Değer | Kaynak |
|---|---|---|
| `s:{f:` | **`1905-04-01`** | `mutevekkil-alellah-yahya-hamiduddin` — "1905 Nisanında" |
| `s:{t:` | **`1905-09-01`** | `yemen` — "1 Eylül 1905… San'a'ya girdi" |
| madde `t:` | `1905-08-31` → **`1905-09-01`** | TDV'ye çekilsin |

⚠️ `sana` slug'ı ✅ canlı ama **1905'i hiç anlatmıyor** — yine "fakir slug".
Bu blokta **dördüncü** vaka.

📌 **Bonus bulgu — Daân Antlaşması, `9 Ekim 1911`.** Aynı maddede:
*"**9 Ekim 1911** tarihinde imzalanan Daân Antlaşması"* imama Zeydî kadılarının
tayini, San'a istînaf mahkemesi reisliği ve vakıfların idaresini bıraktı.
**Bu, 1911-1918 arası Osmanlı hâkimiyetinin neden nominal olduğunun cevabıdır**
ve veride hiç yok. Haritada gösterilir mi tartışılır (toprak el değiştirmiyor,
yetki devrediliyor) ama **kronoloji maddesi hak ediyor.** Kararı koordinatörün.

---

## F.3 🔴 `Sevâkin 1885` — kayıt YANLIŞ, ve tahminim doğru çıktı

§B.3'te *"1885 tarihi şüpheli, Masavva'nın İtalyan tarihinden kopyalanmış
görünüyor"* diye işaretlemiştim. Ölçtüm: **öyle.**

**`habes-eyaleti`** ✅ CANLI — slug'ı **iki kez** sınadım, çünkü ilk deneme
`<title>`'ı döndürmedi ve `sevakin` dersinden sonra risk almadım. İkinci sınama:
`<title>` = **"HABEŞ EYALETİ - TDV İslâm Ansiklopedisi"**, tek konulu madde
sayfası, arama sonucu değil.

> *"Habeş eyaleti kurulunca Sevâkin yeni eyaletin **merkez sancağı** yani eyalet
> merkezi oldu"*
> 1865: idare **Hidiv İsmâil Paşa**'ya geçti
> **1885: Mısır'ın malî sıkıntıları yüzünden idare YEMEN VİLÂYETİNE bağlandı**
> *"Fransa'nın Zeyla' yöresini işgal etmesi bu yönetimi sona erdirdi (**1888**)"*

**Yani 1885'te Sevâkin İngiltere'ye geçmiyor — Mısır'dan alınıp Yemen vilâyetine,
yani doğrudan Osmanlı idaresine geri veriliyor.**

| | Mevcut | Önerilen |
|---|---|---|
| Sevâkin `:629` | `s:[{f:"1885-02-05",t:"1923-10-29",d:"ingiltere"}]` | 🔴 **KALDIRILMALI** |
| | `d:[{f:"1517-04-13",t:"1885-02-05",y:"ilhak"}]` | `d:` **1865'te `v:`ye geçsin (§B.3), 1885'te `d:`ye DÖNSÜN** |

Yani Sevâkin'in doğru dizisi:
```
d: 1517-04-13 → 1865       (doğrudan Osmanlı, Habeş eyaleti merkezi)
v: 1865       → 1885       (Mısır/Kavalalı idaresi)
d: 1885       → 1888       (Yemen vilâyetine bağlandı — YİNE OSMANLI)
?  1888       → 1923       ⚠️ ÖLÇEMEDİM
```

⚠️ **1888 sonrası açık.** TDV bu maddede Fransa'nın Zeyla'yı işgalinin "bu
yönetimi sona erdirdiğini" söylüyor ama Sevâkin'in sonraki sahibini vermiyor.
İngiliz-Mısır idaresine geçtiği biliniyor olabilir; **kaynağım yok, yazmıyorum.**
Bu satırı `❓ kaynak aranacak` bırakıyorum — `sudan` ya da `mehdi` maddeleri
çözebilir.

📌 Masavva ve Dahlak **ayrı**: onlarda `1885-02-05 → italya` **doğru**
(`masavva`: *"5 Şubat 1885'te Masavva'a girdiler"*). Hata yalnız **Sevâkin'in
aynı güne ve yanlış devlete bağlanmasında.** Üç kayıt tek satır gibi işlenmiş,
oysa 1885'te üçü üç ayrı yöne gitti.

---

## F.4 `y:"vassal"` ×12 — kısmen çözüldü, biri sınır dışı

| Kayıt | Öneri | Kaynak |
|---|---|---|
| **Lahsa** `:572` | **`y:"savas"`** | `lahsa` — 1547 fetih (§C.2) |
| **Basra** `:571` | ⚠️ **belirsiz, aşağıya bak** | `basra` |
| Katîf `:1521` · Ukayr `:1522` · Cübeyl `:1535` · Zeyla `:636` | **`y:` alanını KALDIR** | TDV müstakil madde vermiyor |

**Basra — iki sebeple bana ait değil ve tek cevabı da yok:**
1. 🔴 **Kapsam:** Basra **Irak**'tır, koordinatörün ayrımında **ARAŞTIRMA DOĞU**'nun.
   Körfez kıyısı bende diye kaydı açtım ama **kararı DOĞU vermeli.**
2. TDV `basra` ✅ **iki ayrı anlatı** veriyor ve `y:` seçimi buna bağlı:
   > *"Basra hâkimi olan **Râşid b. Megāmis bizzat gelerek itaatini bildirdi**;
   > 1538'de de oğlu Mâni'i ve veziri Mîr Mehmed'i Edirne'de bulunan padişaha
   > göndererek **şehrin anahtarlarını teslim etti**"*
   > ayrıca **26 Aralık 1545**, Ayas Paşa kumandasında askerî harekât

   Gönüllü itaat `ilhak`ı, askerî harekât `savas`ı gerektirir. **İkisi arasında
   ben karar vermiyorum.**
   ⚠️ Ayrıca **tarih de çelişiyor:** veri `1546-01-01`, TDV **26 Aralık 1545**
   (21 gün) · İran işgali veri `1776-04-16→1779-04-01`, TDV **1775-1779**.
   Üçünü de **DOĞU'ya havale ediyorum.**

📌 Koordinatörün kuralını uyguladım: *"çıkmayanı `y:` alanı olmadan bırak —
eksik alan yanlış alandan iyidir."* Dördünde kaynak bulamadım, tahmin yazmadım.

---

## F.5 `olaylar_ek6.js:85` — hutbe cümlesinin kaynaklı karşılığı

Koordinatör kaynaksız cümlenin çıkmasına karar verdi. Önerilen metin (U1 için):

> **ÇIKACAK:** *"Türbeler yıkıldı, **Osmanlı adına okunan hutbe kaldırıldı** ve
> Şam ile Kahire'den gelen hac kafilelerinin yolu kesildi."*
>
> **GİRECEK:** *"Türbeler yıkıldı ve Şam ile Kahire'den gelen hac kafilelerinin
> yolu kesildi; padişahın her yıl Haremeyn'e gönderdiği **surre de bu yıllarda
> kesintiye uğradı** — 1915'e kadar aralıksız süren bu tahsisatın tek istisnası
> Vehhâbî hâkimiyeti dönemidir."*

Dayanak — TDV `surre` ✅:
> *"XIX. yüzyılın başında Mekke ve Medine'nin **Vehhâbîler'in yönetiminde kaldığı
> yıllar hariç** 1915 yılına kadar kesintisiz sürdü"*

Ayrıca maddeye §A.0'daki iki bilgi girmeli: şehrin **ikinci kez** düştüğü ve
Şerif Gālib'in **emirlikte kalmak şartıyla** teslim ettiği (`mekke`).
`kaynak:` → `vehhabilik` yerine **`mekke`**.

---

# G) ÜÇÜNCÜ TUR

## G.1 🟢 Lahsa 1818 ve 1841 — ikisi de doğrulandı, biri veriyi yalanlıyor

**TDV `lahsa` ✅** üç şey veriyor:
> 1818, İbrâhim Paşa'dan sonra: *"Böylece Lahsâ'da tekrar **Benî Hâlid** kabilesi
> eski güçlü durumuna kavuştu"*
> *"öte yandan **Katîf ve Ukayr sahillerine asker yerleştirildi (Ekim 1841)**"*
> ardından: *"**Faysal b. Türkî**, Benî Hâlid kabilesini yenerek tekrar Lahsâ'yı
> ele geçirdi"* (Osmanlı/Mısır çekildikten sonra)

🔴 **Bugünkü veri bu 23 yılı görmüyor.** Lahsa `:572` ve Katîf `:1521`:
```
s:[{f:"1795-04-01", t:"1871-04-20", d:"suud"}]     ← 76 yıl tek blok
```
Oysa 1818-1841 arası bölge **Suûdî değil, Benî Hâlid** elinde.

| | Mevcut | Önerilen |
|---|---|---|
| Lahsa · Katîf · Ukayr · Cübeyl | `s:{1795-04-01 → 1871-04-20, d:"suud"}` | **üçe böl:** `suud` 1795-04-01→**1818-09-09** · **`benihalid` 1818-09-09→1841-10-01** · `suud` 1841-10-01→1871-04-20 |

`1818-09-09` uydurma değil — **Dir'iye kaydında zaten var** (`:591`), İbrâhim
Paşa'nın Dir'iye'yi düşürdüğü gün. `1841-10-01` TDV'nin "Ekim 1841"i, günü yok.

⚠️ **İki şeyi ölçemedim, yazmıyorum:**
1. Benî Hâlid'in bu dönemde **bağımsız mı Mısır'a tâbi mi** olduğu. TDV cümlesi
   yalnız "eski güçlü durumuna kavuştu" diyor. `s:"benihalid"` (yabancı) mı
   `v:"Mısır (İbrâhim Paşa)"` mı — Dir'iye'de 1818-1824 için `v:` seçilmiş,
   paralellik `v:`yi düşündürüyor ama **TDV bunu söylemiyor.** Koordinatörün kararı.
2. Faysal b. Türkî'nin Lahsa'yı geri alış **tarihi** verilmiyor; "Ekim 1841'den
   sonra" deniyor. `1841-10-01` bu yüzden **dönem sınırı**, olay günü değil.

📌 Ayrı ayrıntı: **Ekim 1841'de asker yerleştirilen yer Katîf ve Ukayr**, yani
kıyı — Lahsa vahası değil. Kayıtlar ayrışacaksa bu ikisi farklı davranmalı.

---

## G.2 🟢 Taiz 1905 — **HAYIR, düşmedi. Tam tersi.**

Koordinatörün 3. maddesi kapandı ve cevap olumsuz.

**TDV `yemen` ✅:**
> *"Ahmed Feyzi Paşa, **15 Temmuz - 1 Eylül 1905** tarihleri arasında yürüttüğü
> harekâtta **Taiz'deki kuvvetlerin desteğiyle** San'a'ya girdi"*

Taiz isyancıların elinde **değil**, San'a'yı kurtaran harekâtın **üssü**.
→ **Taiz'e 1905 dönemi EKLENMEMELİ.** Sana'nınki (§F.2) tek başına doğru.
📌 Yan kazanç: harekât penceresi **15 Temmuz – 1 Eylül 1905** olarak kaynaklandı,
`t:"1905-09-01"` teyit edildi.

### 🔴 AMA `taiz` maddesi BAŞKA bir çelişki verdi — 6 yıl

**TDV `taiz` ✅** (`<title>` = "TAİZ - TDV İslâm Ansiklopedisi"):
> *"Osmanlılar, **1038'de (1629)** Yemen'deki hâkimiyetlerini San'a'daki Kāsımî
> yönetimine bıraktıkları için **Taiz'i de terkettiler**."*

Veri Taiz'in kaybını **`1635-01-01`** yazıyor — Sana, Zebîd, Moha ile aynı gün.
TDV Taiz için **1629** diyor, altı yıl önce.

| Kayıt | Mevcut | Öneri | Kaynak |
|---|---|---|---|
| Taiz `:600` | `d:{…t:"1635-01-01"}` · `s:{f:"1635-01-01"…}` | **`1629-01-01`** | `taiz` |
| Taiz fetih | `1547-01-01` | **`1547-02-01`** | `taiz`: *"Zilhicce 953'te (**Şubat 1547**) zaptedildi"* |

📌 Bu, Hicaz'daki *"üç geri alış tek güne toplanmış"* kusurunun (§A.1) **aynısı,
ters yönde**: Yemen'in kaybı da tek güne toplanmış, oysa Taiz altı yıl önce
terk edilmiş. Desen artık üç kez görüldü — **bölgesel çöküşler veriye tek tarih
olarak giriyor.**

⚠️ Sana/Zebîd/Moha'nın 1635'i **ayrıca ölçülmeli**; ben yalnız Taiz'i ölçtüm,
ötekilere dokunulmasın.
⚠️ `taiz` maddesi bir katman daha veriyor: *"Zilhicce 932'de (**Eylül 1526**)
Selman Reis… Zebîd'i aldıktan sonra Taiz'i ele geçirdi"* — 1526'da kısa bir
Osmanlı/Memlûk-bakiye hâkimiyeti. §E'deki Zebîd 1516-1538 boşluğunun **ikinci
katmanı**; iki dönemli çözüm uygulanırken bu da gözden geçirilmeli.

---

## G.3 🟢 `1538 ↔ 1539` — hata DEĞİL, iki aşama. Tahmin doğrulandı.

§E.3'te *"hata ilan etmiyorum, iki aşama olabilir"* demiştim. TDV `yemen` ✅ ayırıyor:

| Aşama | TDV | Veri |
|---|---|---|
| Donanmanın Süveyş'ten çıkışı | **30 Muharrem 945 / 28 Haziran 1538** | — |
| Zebîd, Moha, Aden'in askerî olarak alınması | tarih verilmiyor | `1538-08-03` · `1538-09-01` |
| **Yemen beylerbeyiliğinin kurulması** | **8 Şevval 945 / 27 Şubat 1539** — *"Gazze sancak beyi Mustafa Bey'i vali ve hâkim tayin ederek Yemen beylerbeyiliğinin temellerini attı"* | — |
| "Kalıcı" hâkimiyet yılı | **1539** | — |

> **Hüküm: `1538-08-03` ve `1538-09-01` KALSIN.** Harita **fiilî** el değiştirmeyi
> boyar; askerî alınış 1538 yazındadır ve TDV çıkış tarihiyle (28 Haziran 1538)
> tutarlıdır. TDV'nin 1539'u **idarî kuruluştur**, ayrı olaydır.

🆕 **Öneri: 1539 için AYRI madde** — "Yemen beylerbeyiliğinin kurulması,
27 Şubat 1539, Mustafa Bey". Toprak kırılması doğurmaz (`etiket:` içinde
`toprak-kazanc` olmamalı — §F'deki A yönü dersi), ama `ek5:411`'in eksik
yarısıdır. `kaynak:"yemen"` burada **doğru**, çünkü iddiayı bu madde taşıyor.

---

## G.4 ❓ Sevâkin 1888 sonrası — **BULAMADIM, boş bırakıyorum**

`sudan` ✅ CANLI (`<title>` = "SUDAN - TDV İslâm Ansiklopedisi") ama:
> Sevâkin'in 1885 sonrası idaresi **anlatılmıyor**; 1888 sonrası sahibi
> **verilmiyor**; Mehdî ayaklanması sırasındaki durumu **geçmiyor**.
> Yalnız **19 Ocak 1899** İngiliz-Mısır ortak yönetimi (condominium) anlatılıyor —
> ama Sevâkin özelinde değil.

📌 `19 Ocak 1899` tarihi veride **zaten var** (Dongola, Hartum, Sennar, Kordofan
`s:{f:"1899-01-19", d:"ingiltere"}`). Sevâkin'i de oraya bağlamak **cazip ama
kaynaksız** — TDV o cümleyi Sevâkin için kurmuyor. **Yazmıyorum.**

**Sonuç: `1888 → 1923` aralığı ❓ kalıyor**, koordinatörün dediği gibi. Denenmesi
gereken kalan slug'lar: `mehdi` / `mehdiyye` · `masavva` (ikinci okuma) ·
`osman-digne`. Sıradaki tura.

---

## G.5 🆕 1849 Yemen sahili maddesi — U1 için metin

Koordinatör *"metnini sen yaz"* dedi. §F.1'in doğurduğu zorunlu madde:

```js
{ t:"1849-01-01", k:"fetih", etiket:["toprak-kazanc","savas"],
  b:"Tihâme sahiline dönüş: Hudeyde, Zebîd ve Moha'nın alınması",
  gun:"1849", yer:"Hudeyde, Zebîd, Moha (Tihâme, Yemen)",
  kisiler:"Tevfik Paşa, Mekke şerifi",
  d:"Mısır ordusunun 1840'ta çekilmesiyle sahipsiz kalan Yemen sahiline, Mekke
  şerifinin nezareti altında Tevfik Paşa kumandasındaki kuvvetler çıkarak
  Hudeyde, Zebîd ve Moha limanlarını Osmanlı idaresine bağladı. San'a'ya kadar
  ilerlenmek istendiyse de halkın direnişi yüzünden Hudeyde'ye dönüldü; böylece
  yaylalar Zeydî imamlarında kaldı ve Osmanlı hâkimiyeti yirmi üç yıl boyunca
  yalnız Tihâme şeridinde sürdü. İç Yemen ancak 1872'de Ahmed Muhtar Paşa'nın
  seferiyle geri alınacaktı.", kaynak:"hudeyde" },
```

⚠️ **Gün yok, kasten.** TDV'nin üç maddesi de (`yemen`, `hudeyde`, `zebid`)
yalnız "1849" veriyor; `1849-01-01` "yıl biliniyor, gün bilinmiyor" demektir.
📌 `kaynak:"hudeyde"` seçtim, `"yemen"` değil — çünkü Tevfik Paşa ve şerif
nezareti ayrıntısını **`hudeyde` maddesi** taşıyor. "Fakir slug" desenine
düşmemek için.

---

# H) GERİ ÇEKME — `y:"vassal"` önerim yanlıştı

## H.1 🔴 §C.2 ve §F.4'teki `y:` önerileri GEÇERSİZ

DENETÇİ `js/app.js`'e baktı; ben bakmamıştım.

```
js/app.js:768  // Ediniliş yöntemi simgeleri (fetihten sonra ~1,5 yıl gösterilir)
js/app.js:769  var YONTEM_SIMGE = { savas:"⚔", kusatma:"♜", antlasma:"📜", vassal:"🤝" };
```

**Arayüz `vassal`'ı biliyor ve 🤝 ile çiziyor.** Yani `y:"vassal"` =
*"ediniliş yöntemi: itaat / tâbiiyet yoluyla"* — bu **tam olarak `y:`nin
tanımıdır**, ihlali değil.

### Nerede yanıldım

§C.2'de *"`vassal` kazanım biçimi değil bağlılık kademesi; `d:` içinde kaydın
kendisiyle çelişiyor"* dedim. **Yanlış.** `d:` + `y:"vassal"` çelişki değil,
anlamlı bir cümledir: *"mahallî hâkimin itaatiyle **doğrudan** idareye geçti."*

⚠️ Ve bunu **kendi ölçümüm çürütüyordu, görmedim.** §F.4'te Basra için TDV'den
aldığım alıntı şuydu:
> *"Basra hâkimi olan **Râşid b. Megāmis bizzat gelerek itaatini bildirdi**;
> 1538'de de oğlu Mâni'i ve veziri Mîr Mehmed'i Edirne'de bulunan padişaha
> göndererek **şehrin anahtarlarını teslim etti**"*

Savaş yok, kuşatma yok, antlaşma yok — **itaat var.** `y:"vassal"` Basra için
doğru değerdir. 13 kaydın çoğu aynı sınıf: Basra, Lahsa, Katîf, Ukayr, Cübeyl,
Zeyla — körfez ve Habeş kıyısında **mahallî emirlerin katılımıyla** girilen yerler.

### Geri çekilen üç öneri

| Öneri | Durum |
|---|---|
| *"Katîf/Ukayr/Cübeyl/Zeyla'da `y:` kaldır"* | ❌ **GERİ ÇEKİLDİ** — 13 simge sessizce kaybolurdu |
| *"Lahsa → `y:"savas"`"* | ❌ **GERİ ÇEKİLDİ** — TDV `lahsa` savaştan bahsetmiyor (*"hâkimiyet altına alınarak Basra beylerbeyiliğine bağlandı"*); `savas` kaynaktan değil benim çıkarımımdandı |
| *"`vassal` her hâlükârda yanlış"* | ❌ **GEÇERSİZ** |

**Ayakta kalan:** Basra'nın DOĞU'ya havalesi ve Basra'nın iki tarih çelişkisi
(`1546-01-01` ↔ 26 Aralık 1545 · İran işgali `1776-1779` ↔ TDV 1775-1779).

## H.2 Ters yönde gerçek eksik — `ilhak` ve `miras` arayüzde yok

```
veride:  kusatma 85 · savas 77 · antlasma 67 · vassal 13 · ilhak 11 · miras 2
app.js:      ✓          ✓           ✓           ✓          ✗        ✗
belge:       ✓          ✓           ✓           ✗          ✗        ✓
```

Üç otorite üç ayrı sözlük — `k:` alanındaki tablonun aynısı (§F'de ölçülmüştü).
**13 kayıt (`ilhak` 11 + `miras` 2) bugün simgesiz çiziliyor**, çünkü
`YONTEM_SIMGE[aktif.y] || ""` eksik değeri **sessizce yutuyor.**

> Doğru düzeltme veriyi kırpmak değil: `YONTEM_SIMGE`'ye **`ilhak` ve `miras`
> eklensin**, `VERI-YAPISI.md:38` **altı değere** genişlesin
> (`savas | kusatma | antlasma | miras | vassal | ilhak`).

## H.3 📌 DERS — üçüncü kez aynı tuzak, ve bu sefer ben düştüm

Bugün üç kez **belgeye bakıp "veri ihlal ediyor" demek** gündeme geldi:
1. `y:"vassal"` — §C.2'de **ben iddia ettim, yanlıştı**
2. `k:` sözlüğü — §F'de ölçtüm, **belgenin bayat olduğunu buldum**
3. `y:` yeniden — DENETÇİ yakaladı, **yine belge bayattı**

⚠️ İkinci maddede dersi yazdıktan **sonra** üçüncüsüne düştüm. Sebebi:
`k:`de CSS'e bakma refleksi doğdu çünkü **sınıf adı üretiliyordu** (`"k-" + o.k`),
göze çarpıyordu. `y:`de arayüz bağı **görünmüyordu** — ben de belgeyi tek otorite
saydım. Yani ders, onu doğuran vakanın **görünürlüğüne** yapışmış, kurala dönüşmemişti.

> **Kural önerisi:** bir alanın değer sözlüğü tartışılacaksa, karar vermeden önce
> **`js/app.js` ve `css/style.css` o alanı okuyor mu** diye bakılsın. Belge üç
> otoriteden yalnız biridir ve bu projede **en çabuk bayatlayanıdır.**
>
> Ölçülmüş üç vaka: `k:` (110 kayıt), `y:` (13 kayıt), `.k-siyaset` (237 kayıt).

---

# I) DÖRDÜNCÜ TUR — bir düzeltme, bir kaynaklı gün, bir kapanan ❓

## I.1 🔴 §F.3 KISMEN ÇÜRÜDÜ — Sevâkin'de İngiliz kontrolü gerçekmiş

§F.3'te *"1885'te Sevâkin İngiltere'ye geçmiyor, Yemen vilâyetine bağlanıyor,
`s:{1885-02-05, d:"ingiltere"}` kaldırılmalı"* demiştim. **Tek maddeye
bakmıştım** (`habes-eyaleti`). İkinci madde tabloyu değiştirdi:

**`muhammed-ahmed-el-mehdi`** ✅ CANLI
(`<title>` = "MUHAMMED AHMED el-MEHDÎ - TDV İslâm Ansiklopedisi")
> *"**1884 Şubatından itibaren Sevâkin DIŞINDAKİ** bütün doğu bölgeleri
> Muhammed Ahmed'in hâkimiyetine geçti"*
> General Graham **üç taburluk** İngiliz kuvvetiyle Sevâkin'e geliyor

**Sevâkin, Mehdî'ye düşmeyen tek yerdir** ve Şubat 1884'ten itibaren **İngiliz
askerî kontrolündedir.**

### İki madde çelişmiyor — iki KATMAN anlatıyor

| | fiilî | hukukî |
|---|---|---|
| Şubat 1884 → | **İngiliz askerî kontrolü** (`muhammed-ahmed-el-mehdi`) | Osmanlı/Mısır nominal |
| 1885 → 1888 | İngiliz | **Yemen vilâyetine bağlı** (`habes-eyaleti`) |

📌 **Katar 1913 ve Zebîd 1517 ile aynı sınıf: hukukî tarih ≠ fiilî tarih.**
Bu projede harita **fiilîyi** boyuyor.

### Düzeltilmiş öneri

| Öneri | Durum |
|---|---|
| *"`s:{1885-02-05, d:"ingiltere"}` kaldırılmalı"* | ❌ **GERİ ÇEKİLDİ** — yön doğruymuş |
| `1865 → 1885` arası `v:"Mısır (Kavalalı)"` | ✅ **ayakta** (`masavva` kaynaklı, sağlam) |
| İngiliz döneminin başlangıcı | ❓ veri `1885-02-05` · TDV **"1884 Şubatından itibaren"** → **`1884-02-01`** önerilebilir ama **gün yok** |

⚠️ `1885-02-05`'in Masavva'nın İtalyan gününden kopyalandığı gözlemim **duruyor** —
o tarihin Sevâkin için bağımsız bir kaynağı yok. Ama "yanlış devlet" demem
yanlıştı; doğrusu **"muhtemelen yanlış yıl, doğru devlet."**

## I.2 🟢 Yemen'in kaybı — Moha'nın günü çıktı, desen dördüncü kez

§G.2'de *"Sana/Zebîd/Moha'nın 1635'ini ölçmedim, dokunulmasın"* demiştim. Ölçtüm.

**TDV `yemen`** ✅:
> Mustafa Bey **10 Cemâziyelevvel 1045'te (22 Ekim 1635)** kalan kuvvet ve
> silahlarla **Moha'yı tahliye etti**; ardından *"Hasan b. Kāsım da Zebîd ve
> Muhâ'ya kendi adamlarını tayin etti"*

| Kayıt | Mevcut | Öneri | Kaynak |
|---|---|---|---|
| **Moha** | `1635-01-01` | **`1635-10-22`** (294 gün) | `yemen` |
| **Taiz** | `1635-01-01` | **`1629-01-01`** (6 yıl) | `taiz` (§G.2) |
| Sana · Zebîd | `1635-01-01` | ⚠️ **DOKUNULMASIN** | ayrı tarih verilmiyor |

📌 **"Bölgesel çöküş tek güne toplanmış" deseni dördüncü kez** — ve artık
ölçülü: bir kayıtta **294 gün**, bir kayıtta **6 yıl** sapma. Hicaz'da üç geri
alış, Yemen'de dört kayıp; ikisi de aynı hastalık.

## I.3 ❓ İdrîsî — soru kapandı: **müstakil madde YOK**

Arama yaptım. **İdrîsîler için müstakil TDV maddesi yok.** Asîr İdrîsîleri
hakkındaki bilgi **`asir--suudi-arabistan`** ve **`ebha`** maddelerine dağılmış.
`ahmed-b-idris` ✅ var — tarikatın kurucusu, emirliğin dedesi.

🔴 **TUZAK:** `magrib` maddesindeki "İdrîsîler" **Fas hânedanıdır**, Asîr'inki
değil. Karıştırılırsa haritaya **hayalet devlet** girer (§3.5 sınıfı).

→ Ebha `s:{1918-10-30 → 1920-04-01, d:"aiz"}` sorusu **`ebha` maddesinden**
çözülebilir. Koordinatörde bekliyor.

## I.4 ⚠️ İKİNCİ KEZ: tek maddeye bakıp hüküm verdim

§H.3'te *"belge tek otorite değildir"* dersini yazmıştım. Bu tur aynı hatanın
**kaynak tarafındaki** hâlini yaptım: `habes-eyaleti`'ne bakıp Sevâkin hakkında
hüküm verdim, `muhammed-ahmed-el-mehdi` tersini söylüyordu.

> **Ders: TDV'de bir yerin tarihi, o yerin maddesinde değil, ona ne olduğunu
> anlatan OLAYIN maddesinde durur.** Sevâkin'in 1884'ü Mehdî maddesinde,
> Mekke'nin 1803'ü `mekke`'de değil kısmen `selman-reis`'te, Sana'nın 1905'i
> `sana`'da değil İmam Yahyâ'nın maddesinde.
>
> Bu, "fakir slug" bulgusunun (§A.4) **madalyonun öbür yüzü**: yer maddesi
> olayı taşımıyorsa, olay maddesi taşıyordur. Biri "kaynağı yanlış gösterme"
> hatası, öteki "kaynağı eksik arama" hatası.

**Uygulanabilir kural:** bir tarih için **en az iki madde** okunmalı —
yerin maddesi **ve** olayın/kişinin maddesi. Bu turda ikincisini okuduğum üç
yerde (Selman Reis, İmam Yahyâ, Mehdî) **üçünde de** yer maddesinin vermediği
bilgi çıktı.

---

# J) `aiz` KİMLİĞİ — ❓ kapandı: **HAYALET KİMLİK, 46 yıl**

§C.3'te *"`aiz` şüpheli ama kaynak bulamadım, değiştirme önermiyorum"* demiştim.
`ebha` maddesi çözdü.

**TDV `ebha`** ✅ CANLI (`<title>` = "EBHÂ - TDV İslâm Ansiklopedisi")
> **1872:** Osmanlı kuvvetleri *"**Muhammed b. Âiz'i öldürerek** âsileri
> mağlûp etti"* — Âiz ailesi bu tarihte sahneden çekiliyor
> **1910-1911:** Seyyid Muhammed b. Ali el-İdrîsî ayaklandı, Ebhâ'yı **yedi ay**
> kuşattı, kuşatma **11 Haziran 1911**'de kalktı
> **Ekim 1918:** Osmanlı çekilişinden sonra *"**Muhammed b. Ali el-İdrîsî
> bölgeye hâkim oldu**"*
> **1922:** Suûdî emîri Abdülazîz *"oğlu Faysal'ı bölgeye göndererek
> hâkimiyetini ilân etti"*

## J.1 🔴 Ebha kaydında iki hata

`data/yerlesimler.js:602`
```
s:[{f:"1281-01-01",t:"1871-01-01",d:"yemen"},
   {f:"1918-10-30",t:"1920-04-01",d:"aiz"},      ← ikisi de yanlış
   {f:"1920-04-01",t:"1923-10-29",d:"suud"}]
```

| | Mevcut | Önerilen | Gerekçe |
|---|---|---|---|
| 1918-1920 sahibi | `d:"aiz"` | 🔴 **`d:"idrisi"`** | Âiz **1872'de öldürüldü**; 1918'de o kimlik **46 yıldır yok** |
| Suûdî başlangıcı | `1920-04-01` | **`1922-01-01`** | `ebha`: Faysal 1922'de hâkimiyeti ilân etti |

## J.2 📌 Bu, `CLAUDE.md §3.5`'in TAM ÖRNEĞİ — ve denetim hâlâ göremiyor

§3.5'teki tablo Patmos'u (`bizans`, 84 yıl fazla) ve İbrim'i (`memluk`, 38 yıl)
sayıyor. **`aiz` bunların kardeşi ve daha uzun:**

| Kayıt | Yazılan | Kimliğin gerçek sonu | Fazlalık |
|---|---|---|---|
| Ebha | `aiz` 1918-1920 | **1872** (Muhammed b. Âiz öldürüldü) | **46 yıl** |

⚠️ Fark şu: Patmos/İbrim'de dönem **erken başlayıp geç bitiyordu**; burada dönem
**kimlik öldükten 46 yıl SONRA başlıyor.** Yani "hayalet devlet" denetimi
`f`/`t` aralığı taşmasına bakıyorsa bunu yakalar — ama **yalnız `devletler.js`'te
`aiz` kaydı ve doğru `t:` alanı varsa.** Ölçmedim; `aiz` dizinde var mı,
`t:"1872"` yazıyor mu bilmiyorum. **DENETÇİ için somut sınama vakası.**

## J.3 ⚠️ `idrisi` YENİ KİMLİK — palet uyarısı

`idrisi` bugün `renkler.py`'de **yok**. Eklenmesi gerekiyor ve `YAPILACAKLAR.md`
§Palet stratejisi *"24 aday hex 30 kimliğe yetmedi, ADAY KALMADI"* diyor.

📌 Ama bu vaka **paylaşıma uygun**: `idrisi` yalnız **1918-1922** yaşıyor (4 yıl).
Palet notundaki *"hiç aynı anda var olmamış kimlikler aynı hex'i kullanabilir"*
kaldıracı burada doğrudan işe yarar — `idrisi`, 1918'den önce ölmüş herhangi bir
kimliğin rengini alabilir. Kararı MOTOR'un.

⚠️ Alternatif: `aiz` kimliğini **silmeyip yeniden adlandırmak** (`aiz` → `idrisi`)
— eğer `aiz` başka hiçbir kayıtta kullanılmıyorsa renk zaten tahsisli demektir ve
palet hiç büyümez. **Ölçmedim**, `aiz`in başka kullanımı var mı MOTOR bakmalı.

## J.4 🆕 1910-1911 kuşatması — madde adayı, kırılma DEĞİL

İdrîsî'nin Ebhâ'yı yedi ay kuşatması (**11 Haziran 1911**'de kalktı) gerçek ve
kaynaklı, ama **şehir düşmedi** — Osmanlı 1918'e kadar elinde tuttu. Yani
**toprak kırılması doğurmaz**, `etiket:`inde `toprak-kazanc`/`toprak-kaybi`
**olmamalı** (§F'deki A yönü dersi). Kronoloji maddesi olarak değerli: Daân
Antlaşması (9 Ekim 1911, §F.2) ile **aynı yılın** olayı ve ikisi birlikte
Yemen-Asîr cephesinin 1911'de neden çözüldüğünü anlatıyor.

---

# K) İKİNCİ GERİ ÇEKME — ve Sevâkin'in kapanışı

## K.1 🔴 §C.1'in hükmü yanlıştı — ölçüm doğru, sonuç değil

Koordinatör motorun kendi ölçütünü koşturdu:
```
Nâsıriye  kur 1869  d:osmanli  → DEVREDİLİR (hayalet OLUŞMUYOR)
Muhammere kur 1812  s:safevi   → DEVREDİLİR
Buşehr    kur 1734  s:safevi   → DEVREDİLİR
```
**Motor `kur:`/`bit:`i 30 Temmuz'dan beri okuyor** (`b781c2c`). §C.1'deki
"hayalet nokta" yan bulgum **geçersiz.**

Ve daha önemlisi: **Kuveyt deliği kusur değil.** Motorun ölçütü *"kurulmamış"*
değil, *"kurulmamış **VE** o tarihte sahibi yazılı"* — çünkü bu projede
sahipsizlik bazen **kasıtlıdır** (`CLAUDE.md §3`: çöl dolgu noktaları,
**körfez şeyhlikleri**). Kuveyt'in peteğini Basra'ya bağışlamak, **bilerek
bırakılmış boşluğu yok ederdi.**

> ⇒ `hatalar 16 md.6` teşhisim **gözlem olarak doğru, hüküm olarak yanlış:**
> motor borcu değil, **gösterim sorusu.** Ölçtüğüm 63,7 km / 185,4 km
> `YAPILACAKLAR`daki yeni kalemin girdisi olarak duruyor.

### 📌 Hatanın sebebi — gün boyu teşhis ettiğim hastalığın kendisi

`YAPILACAKLAR.md` *"Motor `kur:` ve `bit:` alanlarını okumuyor"* diyordu ve ben
**o satıra dayanarak hüküm verdim.** Satır bir gün bayat kalmıştı.

| Otorite | Ne diyordu |
|---|---|
| commit `b781c2c` | okuyor (30 Temmuz) |
| `YAPILACAKLAR.md` | okumuyor |
| bu rapor §C.1 | "hiç okumuyor" |

**Üç otorite, üç cevap** — §H.3'te `k:`/`y:` için yazdığım tablonun aynısı.
Orada bayat olan `VERI-YAPISI.md`'ydi, burada `YAPILACAKLAR.md`. Yani ders
**belgeye özel değil**: bu projede *"şu iş yapılmadı"* diyen bir satır, o iş
yapıldıktan sonra en az bir gün yanlış kalıyor.

> **Kuralın genişletilmiş hâli:** bir eksikliği rapor etmeden önce **`git log`a
> bak.** Belge "yapılmadı" diyorsa bile commit "yapıldı" diyor olabilir; koda
> bakmak yetmez, **koda ne zaman bakıldığına** da bakmak gerekir.
> ✅ Koordinatör satırı düzeltti (`YAPILACAKLAR.md:105`, `[x]` + üç kaynağın
> çelişme kaydı).

## K.2 🟢 Sevâkin — soru sanıldığından DAR, ve cevabı zaten elimde

Altı slug denedim, tükendi:

| Slug | Sonuç |
|---|---|
| `sevakin` | ❌ ÖLÜ |
| `mehdiyye` | ❌ **ÖLÜ** (`<title>` = "Arama - TDV İslâm Ansiklopedisi") |
| `osman-digne` | ❌ madde yok |
| `sudan` | ✅ canlı — Sevâkin'i **anlatmıyor** |
| `habes-eyaleti` | ✅ canlı — **1888'de kesiliyor** |
| `muhammed-ahmed-el-mehdi` | ✅ canlı — **cevabı veren tek madde** |

**Soruyu yanlış kurmuşum.** "1888-1923 arası Sevâkin kimde?" diye sordum; oysa
`muhammed-ahmed-el-mehdi` şunu söylüyor:
> *"**1884 Şubatından itibaren Sevâkin DIŞINDAKİ** bütün doğu bölgeleri
> Muhammed Ahmed'in hâkimiyetine geçti"* + General Graham'ın üç taburu

**Sevâkin Mehdî'ye hiç düşmedi ve Şubat 1884'ten itibaren İngiliz askerî
kontrolünde.** Yani `1884 → 1923` **kesintisiz İngiliz**; 1888'de biten şey
İngiliz kontrolü değil, `habes-eyaleti`'nin anlattığı **nominal Yemen vilâyeti
bağıdır.**

⇒ **❓ kapandı.** Geriye tek soru kalıyor ve o bir tarih sorusu, sahiplik sorusu
değil: **`1884-02-01` mi `1885-02-05` mi?** (§I.1). TDV "1884 Şubatından
itibaren" diyor, gün vermiyor; `1885-02-05`'in Sevâkin için bağımsız kaynağı yok
(Masavva'nın İtalyan gününden kopyalanmış görünüyor). **Karar koordinatörün.**

## K.3 📌 "Ölü slug içerik döndürüyor" — üçüncü vaka

`mehdiyye` ölü, ama yine boş dönmedi: içinde *"P. M. Holt, el-Mehdiyye fi's-Sûdân"*
gibi **kaynakça satırları** olan bir arama sayfası döndürdü. `<title>` kontrolü
yapılmasa "Mehdiyye maddesi böyle diyor" diye alıntılanabilirdi.
Sayı artık üç: `sevakin` · `mehdiyye` · (§A.4'teki genel uyarı).
**`<title>` kontrolü bu blokta üç kez tek başına hatayı önledi.**

---

## SLUG ÖZETİ — KAYNAK oturumuna

| Slug | Durum |
|---|---|
| `mekke` `medine` `taif` `yenbu` `vehhabilik` `suudiler` `suud-b-abdulaziz` | ✅ CANLI |
| `yemen` `masavva` `surre` `lahsa` `kuveyt` `katar` `ebha` | ✅ CANLI |
| **`zebid`** `selman-reis` | ✅ CANLI — ikisi de 20 Haziran 1516'yı veriyor |
| `hudeyde` `sana` `basra` | ✅ CANLI |
| **`habes-eyaleti`** | ✅ CANLI — `<title>` iki kez sınandı; Sevâkin'in doğru kaynağı |
| **`mutevekkil-alellah-yahya-hamiduddin`** | ✅ CANLI — İmam Yahyâ; "1905 Nisanında" |
| `yahya-b-muhammed` | ✅ var (ayrı kişi, karıştırma) |
| `zeydiyye` | ❌ **YOK** — arama sonucunda müstakil madde çıkmadı |
| **`taiz`** `sudan` | ✅ CANLI — `taiz` Taiz'in 1629 terkini veriyor |
| **`muhammed-ahmed-el-mehdi`** | ✅ CANLI — Sevâkin'in 1884 İngiliz kontrolünü veren tek madde |
| `mehdi-es-sudani` · `muhammed-mehdi-es-sudani` | ↪️ **YÖNLENDİRME** — ikisi de `muhammed-ahmed-el-mehdi`'ye gider |
| `ahmed-b-idris` | ✅ CANLI — İdrîsî tarikatının kurucusu |
| `osman-digne` | ❌ **YOK** |
| İdrîsî emirliği (Asîr) | ❌ **müstakil madde YOK** — bilgi `asir--suudi-arabistan` + `ebha`'da. 🔴 `magrib`'deki "İdrîsîler" **Fas** hânedanıdır, karıştırma |
| **`asir--suudi-arabistan`** | ✅ CANLI — `asir` ölüsünün doğrusu |
| `sevakin` | ❌ ÖLÜ → `habes-eyaleti` · `masavva` · `dehlek` |
| `tosun-pasa` | ❌ YOK (Şerif Gālib'in de müstakil maddesi yok) |
| İdrîsîler | ❓ **bulunamadı** — aranmalı |

⚠️ `vehhabilik` = **"fakir slug"** (canlı ama gün vermiyor, §A.4).
⚠️ Veri "Dahlak" yazıyor, TDV **"Dehlek"** (`dehlek`).
