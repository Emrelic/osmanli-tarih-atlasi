# ARABİSTAN — DÜZELTME LİSTESİ

Oturum: **ARAŞTIRMA · ARABİSTAN (A5)**
Kapsam: Hicaz · Yemen · Necid · Asîr · Lahsa · Katar · Kuveyt · Umman · Kızıldeniz kıyıları

🔴 Bu oturum `data/yerlesimler.js`'e **yazmaz.** Aşağıdaki satırları koordinatör
tek elden uygular. Biçim: **kayıt · mevcut · önerilen · TDV slug · gerekçe**

Slug doğrulaması: her slug `<title>` ile sınandı. `"Arama - TDV İslâm
Ansiklopedisi"` çıkan slug ÖLÜ sayıldı ve kullanılmadı.

---

---

# 🔴 GÜNCEL DURUM ÖZETİ — UYGULAYICI ÖNCE BUNU OKUSUN

> Bu belge **dört geri çekme turu** içeriyor (§H · §I.1 · §L · §R). Aşağıdaki
> bölümler **kayıt** olarak duruyor, bir kısmı **geçersizdir.** Aşağıdaki tablo
> tek yetkili özettir; çelişki hâlinde **bu tablo** geçerlidir.
>
> **Dört kural:** (1) uygulamadan önce kaydın **bugünkü** hâlini oku — bir kısmı
> zaten uygulandı, ikinci kez uygulanırsa tarih iki kez kayar; (2) ölçümü
> **`girdi.yukle` ile** yap, ham metinle değil; (3) Mekke ve Zebîd'e **yeni dönem**
> ekleniyor ⇒ sonrasında **Değişmez 1** koştur (sahipsiz ≤ 34).
>
> 🔴 **(4) SATIR NUMARALARINA GÜVENME.** Alt bölümlerde `olaylar_ek5.js:300`
> gibi numaralar var; **`data/olaylar*.js` şu an çok yazarlı** (U1 · BALKAN ·
> kırılma-kapatma oturumları aynı dosyalara yazıyor, `ek10` bir oturumda 16→21
> kayda çıktı). O numaraların bir kısmı **artık yanlıştır.**
> · kronoloji kaydı → **`t:` + `b:` içeriğiyle** eşleştir
> · yerleşim kaydı → **`ad:"…"`** ile eşleştir
> Yukarıdaki tablo zaten **kayıt adıyla** yazılmıştır; alt bölümlerdeki satır
> numaraları **yalnız iz sürmek içindir, uygulama için değil.**

## ✅ GEÇERLİ — uygulanacak

| Kayıt | Değişiklik | Slug |
|---|---|---|
| **Tâif** | `s:` `1803-05-15`→**`1803-02-01`** · `1813-01-24`→**`1813-05-02`** (+`v:` sınırları) | `taif` |
| **Mekke** | **YENİ** `s:{1803-04-30 → 1803-08-06, d:"suud"}` · `1806-02-01`→**`1806-01-01`** · `1813-01-24`→**`1813-01-23`** · `v:` üçe bölünür | `mekke` |
| **Medine** | `s:` `1805-07-01`→**`1805-06-01`** · `1812-11-08`→**`1812-12-03`** (+`v:`) | `medine` |
| **Sana** | 1872-1918 `d:`sine kesinti: **`s:{1905-04-01 → 1905-09-01, d:"yemen"}`** | `mutevekkil-alellah-yahya-hamiduddin` |
| **Zebîd·Moha·Hudeyde** | `1849-05-01`→**`1849-01-01`** | `hudeyde` |
| **Zebîd** | **YENİ** `s:{1516-06-20 → 1517-07-06, d:"memluk"}` + `v:{1517-07-06 → 1538-08-03, k:"eski Memlûk beyleri (Osmanlı desteğiyle)"}` | `zebid` |
| **Bâra** | `1885-01-26`→**`1882-09-01`** | `muhammed-ahmed-el-mehdi` |
| **Kordofan (Ubeyyid)** | `1885-01-26`→**`1882-09-07`** | aynı |
| **Kordofan** (bölge) | `1883-01-19`→**`1882-09-07`** — Ubeyyid'le **birlikte** | aynı |
| **Berber** | `1885-01-26`→**`1884-05-01`** | aynı |
| **Manama** | `1861-05-31`→**`1861-05-21`** (kimlikten bağımsız, güvenli) | `bahreyn` |
| **Dongola** | `mehdi` `1885-01-26`→**`1886-01-01`** · `1899-01-19`→**`1896-09-23`** ⚠️ 1886 için **madde borcu** (±30'da madde yok) | `dongola` + `ek9:1896-09-23` |
| **Akkâ** | `v:` bitişi `1840-11-03`→**`1840-11-04`** | `kavalali-mehmed-ali-pasa` |

**Dokunulmayacak:** Yenbu · Taiz · Hartum · Darfur · Sudan'ın kalan **15** kaydı
(kaynaksız, `1885-01-26`'da kalır) · Sana ve Zebîd'in **1635**'i.

## ⏸️ KİMLİK BEKLİYOR — uygulanmayacak

| İş | Engel |
|---|---|
| Kütahya·Konya·Karaman `v:"Mısır ordusu (işgal)"` → `isg:` | **`kavalali`** kimliği MOTOR'da, `renkler.py`'de yok |
| Manama'nın Portekiz/İran/Âl Halîfe dönemleri | **`bahreyn`** kimliği yok — **kısmi uygulama YAPMA** |

## ❌ GERİ ÇEKİLDİ — asla uygulanmayacak

| İptal | Nerede | Neden |
|---|---|---|
| `y:"vassal"` silme · `y:` alanı kaldırma · Lahsa `y:"savas"` | §H | `app.js` `vassal`ı 🤝 ile çiziyor |
| **Ebha `d:"aiz"` → `d:"idrisi"`** ve Suûdî `1922-01-01` | §L | Âiz ailesi 1918'de **gerçekten döndü** |
| **Konya `1832-11-21` → `1832-12-21`** | §R | Ordu 21 Kasım'da girdi; 21 Aralık **ayrı olay** |
| Sevâkin `s:{…ingiltere}` kaldırma | §I.1 | İngiliz kontrolü **gerçek** (Şubat 1884) |
| **Zübâre noktası ekleme** | §T.1 | Kaynak yok — kaynaksız nokta kaynaksız boşluktan kötü |

## 🔍 ZATEN UYGULANDI — yalnız doğrula, tekrarlama

Sevâkin `1884-02-01` · Masavva/Dahlak `1885-02-05` · Lahsa-Katîf-Ukayr-Cübeyl
(`benihalid` 1818-09-09→1841-10-01, `suud` 1913-07-08) · Doha `v:{1871-09-20 →
1913-07-29}` · Mısır `1805-07-03`(56) · `1841-05-24`(4) · `1914-12-18`(43+13) ·
`isg:{1882-09-14 → 1914-12-18, d:"ingiltere"}`(55)

## 📌 BAŞKA ORGANIN

`kasitli_bosluk` bayrakları (Kuveyt/Doha **`false`**, Ebûzabî **`true`**) → MOTOR ·
kronoloji maddeleri ve `kaynak:` düzeltmeleri → U1 · Kuveyt `1914-11-22` →
koordinatör · Basra `y:` ve iki tarihi → ARAŞTIRMA DOĞU

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

# J) ~~`aiz` KİMLİĞİ — HAYALET KİMLİK~~ 🔴 **TAMAMI GERİ ÇEKİLDİ**

> **Bu bölümdeki hüküm YANLIŞTI. `aiz` hayalet değil, veri doğru.**
> TDV `ebha`, ikinci ve doğru soruyla okununca şunu söylüyor:
> > *"**Önce eski Âiz ailesi hâkimiyeti ele geçirdiyse de** hemen arkasından
> > Muhammed b. Ali el-İdrîsî bölgeye hâkim oldu."*
>
> Âiz ailesi 1918'de Ebhâ'da **gerçekten yeniden iktidara geldi.**
> `s:{1918-10-30 → …, d:"aiz"}` **doğrudur, değiştirilmemelidir.**
> Ayrıntı ve nerede yanıldığım: **§L**. Metin kayıt olarak duruyor.

# ~~J) eski hüküm~~ (geçersiz)

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

# L) ÜÇÜNCÜ GERİ ÇEKME — `aiz`, ve üç hatanın ortak kökü

## L.1 Nerede yanıldım

İlk okumamda `ebha` maddesinden şunu aldım:
> *"Osmanlı kuvvetleri 1872'de Muhammed b. Âiz'i öldürerek âsileri mağlûp ettiler"*

ve **kişinin ölümünü hânedanın sonu saydım.** Hânedan bir kişi değildir; 46 yıl
sonra aynı aile geri dönebilir — ve TDV'nin **aynı maddesi** döndüğünü söylüyor:
> *"Önce eski Âiz ailesi hâkimiyeti ele geçirdiyse de hemen arkasından
> Muhammed b. Ali el-İdrîsî bölgeye hâkim oldu."*

Cümle **ilk okuduğum maddede, muhtemelen aynı paragraftaydı.** Kaçırmamın sebebi
sorumdu: *"Âiz ne zaman çekildi?"* diye sordum. Sormam gereken şuydu:
**"1918'de Ebhâ'da kim vardı?"**

📌 Bu, §I.4'te **kendi yazdığım kuralın** yarım uygulanması. *"Yerin tarihi
olayın maddesinde durur"* demiştim ve ikinci maddeyi okumayı öğrenmiştim; ama
**aynı maddeyi ikinci kez farklı soruyla okumayı** öğrenmemiştim.

## L.2 Geri çekilen ve ayakta kalan

| §J iddiası | Durum |
|---|---|
| *"`aiz` 46 yıllık hayalet kimlik"* | ❌ **YANLIŞ** |
| *"`d:"aiz"` → `d:"idrisi"`"* | ❌ **GERİ ÇEKİLDİ** |
| *"`idrisi` yeni kimlik + palet uyarısı"* | ⚠️ **askıda** — Ebha için gerekmiyor; İdrîsî Tihâme'de olabilir, **ölçmedim** |
| *"Suûdî `1920-04-01` → `1922-01-01`"* | ⚠️ **ZAYIFLADI** — TDV 1922 diyor ama 1920'nin dayanağı olabilir (İbn Suûd'un Ebhâ'yı alışı); **iki tarih de savunulabilir, uygulanmasın** |

⚠️ **Düzeltemediğim gerçek incelik:** TDV İdrîsî'nin *"hemen arkasından"* hâkim
olduğunu söylüyor — yani `aiz` dönemi muhtemelen 1920'ye kadar sürmüyor, arada
bir İdrîsî dönemi var. **TDV tarih vermiyor** → `❓` bırakıyorum.

## L.3 🟢 Elde kalan gerçek bulgu — dizin ↔ harita kayması

```
devletler.js   aiz:  1918-10-30 → 1920-01-01
yerlesimler.js Ebha: 1918-10-30 → 1920-04-01      ← 3 AY FARK
```
Hayalet değil, ama **iki veri dosyası aynı kimlik için farklı bitiş taşıyor.**
Ölçülebilir bir sınıf ve örneği elimizde:
> **Bir kimliğin `devletler.js`'teki ömrü, `yerlesimler.js`'teki kullanım
> aralığıyla uyuşuyor mu?**

📌 DENETÇİ'nin kurmak istediği denetimin sağlam hâli bu. Farkı: hayalet denetimi
*"kimlik yaşıyor mu"* sorar, bu *"iki dosya aynı şeyi mi söylüyor"* sorar.
`renkler.py` üçüncü otorite olarak eklenebilir (`idrisi` orada yok).

⚠️ **DENETÇİ'nin önerdiği imza `aiz`i zaten yakalamazdı:** *"ömrü tam olarak tek
bir yerleşim dönemine eşit"* ölçütü, `f` aynı `t` 3 ay farklı olduğu için
tutmuyor. İmza, onu doğuran vakayı **kuruluş anında** elecekti.

## L.4 🔴 Kendi ölçümümü çöpe attım

Sezgiyi ölçmek için ayrıştırıcı yazdım, "1 vuruş" çıktı, **raporlamadım.**
Doğrulayınca `letonya`nın `f`'ini komşu kayıttan aldığını gördüm
(`1918-11-11` yazdı, gerçeği **`1918-11-18`**). `devletler.js` iç içe
`kronoloji:[{…}]` taşıyor; basit küme eşleştirmesi sessizce komşu kayda kayıyor
**ve çıktı makul görünüyor.**

> Girdi kırılganlığı uyarımın üçüncü örneği — bu sefer **benim kodumda.**
> Sayıyı vermedim çünkü sayı yanlıştı.

## L.5 📌 ÜÇ GERİ ÇEKMENİN ORTAK KÖKÜ

| # | Hata | Kök |
|---|---|---|
| §H | `y:"vassal"` şema ihlali sandım | `app.js`'e **sormadım** |
| §I.1 | Sevâkin'de İngiliz yok sandım | ikinci maddeye **sormadım** |
| §L | `aiz` hayalet sandım | aynı maddeye **ikinci soruyu sormadım** |

Üçünde de **ölçüm doğruydu, soru eksikti.** Yanlış sayı üretmedim; doğru sayıdan
yanlış hüküm çıkardım. Ve üçü de **aynı gün, dersi yazdıktan sonra** oldu — yani
ders "kaynağa iki kez bak" biçiminde ezberlendi, "**hükmün dayandığı soruyu
yaz ve tersini sor**" biçiminde içselleşmedi.

> **Uygulanabilir hâli:** bir hüküm yazmadan önce, o hükmü **çürütecek soruyu**
> açıkça formüle et ve kaynağa onu sor. *"Âiz 1918'de dönmüş olabilir mi?"*
> sorusu, cevabı zaten elimde olan maddede duruyordu.

---

# M) YENİ BÖLGE: MISIR VE KAVALALI ZİNCİRİ — ilk üç tarih

⚠️ Slug uyarısı önce: **`mehmed-ali-pasa` ❌ ÖLÜ** (`<title>` = "Arama - TDV
İslâm Ansiklopedisi"). Doğrusu **`kavalali-mehmed-ali-pasa`** ✅.
📌 Ölü slug yine boş dönmedi — **on maddelik bir liste** döndürdü.
"Ölü slug içerik döndürüyor" **dördüncü vaka.**

## M.1 🔴 Üç tarihin ÜÇÜ DE kayıyor

**TDV `kavalali-mehmed-ali-pasa`** ✅ CANLI

| Olay | Veri | **TDV** | Fark |
|---|---|---|---|
| Mısır valiliğine tayin | `1805-07-09` | *"Bâbıâli tarafından valiliğe getirildi (**3 Temmuz 1805**)"* | **6 gün** |
| İrsî valilik fermanı | `1841-06-01` | *"**24 Mayıs 1841** tarihli bir fermanla Mısır'ın irsî idaresinin Mehmed Ali Paşa soyundan gelen en büyük erkek evlâda verileceği ilân edildi"* | **8 gün** |
| Tosun Paşa'nın Mekke'ye girişi | `1813-01-24` | *"**23 Ocak 1813**"* (`mekke`, §A.1) | **1 gün** |

### Etkilenen kayıtlar

**`1805-07-09` → `1805-07-03`** — Kahire, İskenderiye, Dimyat, Asyut, Asvan,
İbrim: altısında da `d:` bitişi ve `v:"Kavalalı hanedanı"` başlangıcı bu gün.

**`1841-06-01` → `1841-05-24`** — Mekke, Medine, Cidde, Yenbu: dördünde de
`v:"Mısır (Kavalalı)"` bitişi ve `v:"Mekke Şerifliği"` başlangıcı.
📌 **Bu tam olarak `md.20`'nin konusu** ("Kavalalı'ya irsî valilik").

**`1813-01-24` → `1813-01-23`** — Mekke `s:"suud"` bitişi + Cidde `d:` bitişi
ve `v:"Mısır (Kavalalı)"` başlangıcı. §A.1'de Mekke için bulmuştum;
**Kavalalı zincirinde ikinci kez** karşıma çıktı — aynı bir günlük kayma
**iki ayrı kaydı** birden etkiliyor.

## M.2 ⚠️ SUDAN — özet belirsiz, DEĞİŞİKLİK ÖNERMİYORUM

Fetch özeti *"Hejaz & Sudan: Lost after the London Treaty (15 Temmuz 1840)"*
dedi. **Buna güvenmiyorum ve şu sebeple:**

Standart anlatı, 1841 fermanının Mehmed Ali'ye **Mısır ile birlikte Sudan'ı**
irsî olarak bıraktığı, buna karşılık **Hicaz, Girit ve Suriye'nin** geri
alındığı yönünde. Veri de böyle modelliyor (Sudan `v:"Mısır (Kavalalı)"`
1821 → 1885) ve §B.3'te okuduğum `sudan` maddesi Mısır idaresinin sürdüğünü
anlatıyordu.

⇒ Özet muhtemelen **Hicaz ile Sudan'ı tek cümlede toplamış.** Doğrudan alıntı
yok, yalnız İngilizce özet var. **`§4` gereği bunu düzeltme gerekçesi
saymıyorum** — Sudan'a dokunulmasın.
🔴 Bugün üç kez tek kaynaktan yanlış hüküm çıkardım; **dördüncüsünü, kaynağın
kendi cümlesi bile elimde değilken yapmam.**

## M.3 ⚠️ `misir` maddesi — canlı ama BU DÖNEMİ getiremedim

`misir` ✅ CANLI (`<title>` = "MISIR - TDV İslâm Ansiklopedisi") ama çekilen
metin **18. yüzyılda kesiliyor** (1786, Gazi Hasan Paşa). Maddenin 6-9.
bölümleri (Fransız işgali ve sonrası) içerik dökümüne girmemiş.

📌 Bu **"fakir slug" DEĞİL** — madde konuyu kapsıyor, benim aracım tamamını
getiremedi. Ayrı bir sınıf: **"eksik çekim".** Fark önemli, çünkü fakir slugda
`kaynak:` değiştirilir, burada **tekrar denenir** ya da başka bölüm istenir.
⇒ 1805 ve 1841 tarihlerini **tek maddeden** doğruladım (`kavalali-mehmed-ali-pasa`);
çapraz doğrulama **yapılamadı**, ikinci kaynak arandığında `misir`'in ilgili
bölümü hedeflenmeli.

---

# N) NİL VADİSİ — zincirin SONU

## N.0 ⚠️ Önce kendi ölçümüm: satır bazlı tarama **on kat yanıldı**

Kapsamı ölçme talimatını uyguladım, ilk betiğim **5 kayıt** dedi. Doğrulayınca
gördüm: satır bazlı tarıyordu ve **çok satırlı kayıtların `v:` dizisini
kaçırıyordu** — Kahire tam öyle yazılmış (`ad:` bir satırda, `v:` sonrakinde).
Parantez dengesiyle çalışan ayrıştırıcı yazdım (`scratchpad/kayit_ayir.py`):

```
satır bazlı :  5 kayıt      ← YANLIŞ
kayıt bazlı : 52 kayıt      ← doğru (767 kayıt tarandı)
```

📌 Bu, `devletler.js`'te (§L.4) ve şimdi `yerlesimler.js`'te **ikinci kez** aynı
tuzak. Ve ikisinde de **çıktı makul görünüyordu.** Bundan sonraki bütün
ölçümlerimde bu ayrıştırıcıyı kullanacağım.

## N.1 🟢 KAVALALI ZİNCİRİNİN SONU — ölçüldü

`Mısır (Kavalalı)` / `Kavalalı hanedanı` / `Mısır (İbrâhim Paşa)` etiketli
**52 `v:` dönemi**, bitiş tarihine göre:

| Bitiş | Kayıt | Nereler |
|---|---|---|
| 1824-06-01 | 7 | Necid (Dir'iye, Riyad, Buraydâ, Uneyze…) |
| 1828-10-05 | 2 | Mora, Modon |
| 1833-06-30 | 3 | Kütahya, Konya, Karaman |
| 1840-10-10 | 3 | Beyrut, Trablusşam, Sayda |
| 1840-11-03 | 1 | Akkâ |
| **1841-02-25** | **17** | Suriye, Adana, Girit (Urfa, Maraş, Tarsus, Antakya, Kandiye…) |
| **1841-05-24** | **4** | Hicaz (Mekke, Medine, Cidde, Yenbu) ✅ senin uyguladığın |
| 1867-06-08 | 1 | Sina güneyi |
| 1883-01-19 | 1 | Kordofan (bölge) |
| 1885-01-26 | 4 | Sudan (Dongola, Hartum, Sennar, Kordofan-Ubeyyid) |
| **1914-12-18** | **9** | **Mısır'ın kendisi** (Kahire, İskenderiye, Dimyat, Asyut, Asvan, İbrim…) |

⇒ Zincirin sonu **açık değil, tutarlı**: Mısır 1805-07-03'ten 1914-12-18'e kadar
kesintisiz `v:` (Osmanlı tâbii). **Ama bir katman eksik.**

## N.2 🔴 1882-1914 İNGİLİZ İŞGALİ HARİTADA YOK — ve mekanizması hazır

**TDV `urabi-pasa`** ✅ CANLI (`<title>` = "URÂBÎ PAŞA - TDV İslâm Ansiklopedisi")
> *"**11-12 Temmuz**'da İskenderiye istihkâmlarını topa tuttu"* (1882)
> *"**13 Eylül**'de Süveyş Kanalı ile Kahire arasındaki **Tellülkebîr** mevkiinde"*
> Urâbî **14 Eylül**'de teslim oldu
> 🔴 *"**hukuken bir Osmanlı eyaleti olmakla birlikte İngiliz işgali altında**"*

Son cümle `isg:` örtüsünün **tanımıdır.** Ve mekanizma veride zaten var —
tek kullanımı Bosna:
```
isg:[{f:"1878-07-29", t:"1908-10-05", d:"avusturya", kaynak:"berlin-antlasmasi"}]
     Saraybosna · Mostar · Banaluka   (3 kayıt)
```
Bosna 1878-1908: hukuken Osmanlı, fiilen Avusturya → `d:` durur, `isg:` örter.
**Mısır 1882-1914 birebir aynı yapı.**

### Öneri — kapsamı ÖLÇTÜM: **9 kayıt**

```
isg:[{f:"1882-09-14", t:"1914-12-18", d:"ingiltere", kaynak:"urabi-pasa"}]
```
Kahire · İskenderiye · Dimyat · Asyut · Asvan · İbrim + 3 kayıt daha
(1914-12-18'de biten `v:` dönemine sahip olanların tamamı).

⚠️ **Gün seçimi:** `1882-09-14` Urâbî'nin teslim olduğu ve direnişin bittiği
gün. Alternatif `1882-07-11` (İskenderiye bombardımanı, işgalin başlangıcı).
İkisi de TDV'de yazılı; **09-14'ü öneriyorum** çünkü fiilî idarenin el
değiştirdiği an odur. Karar koordinatörün.
📌 Bu, `KONTROL 16-06`'daki Napolyon `isg:` örtüsüyle **aynı sınıf** ve ikisi
birlikte uygulanırsa Mısır'ın iki işgali de haritada görünür.

## N.3 🔴 İKİ KORDOFAN KAYDI — 738 gün çelişki

Ölçüm sırasında çıktı. Aynı yer için **iki kayıt, iki farklı Mehdî tarihi:**

| Satır | Kayıt | `tur` | Konum | Mehdî'ye geçiş |
|---|---|---|---|---|
| `:903` | **Kordofan** | `bolge` | 13.00 K, 29.50 D | **1883-01-19** |
| `:655` | **Kordofan (Ubeyyid)** | `sehir` | 13.184 K, 30.218 D | **1885-01-26** |

Aralarında ~80 km var, yani `§11`'in 3 km mükerrer ölçütüne takılmıyor — ama
**aynı tarihî varlığın** bölgesi ve merkezi (Ubeyyid = El-Obeid, Kordofan'ın
merkezi) ve **iki farklı tarih taşıyorlar.**

⚠️ Şüphem: `1885-01-26` **Hartum'un düşüş tarihidir** ve veride Hartum, Sennar,
Dongola aynı günü taşıyor. Yani `Kordofan (Ubeyyid)` komşularının tarihini
almış görünüyor — **Sevâkin/Masavva vakasının (§F.3) aynısı: komşu kayıtlar tek
satır gibi işlenmiş.**

🔴 **AMA HANGİSİNİN DOĞRU OLDUĞUNU ÖLÇMEDİM.** TDV'ye sormadım. Kesin olan tek
şey **iç çelişki**: aynı yer iki kayıtta 738 gün arayla el değiştiriyor.
Hangisinin düzeltileceği kaynağa bakmadan söylenmemeli. Sıradaki turumda
`mehdi`/`sudan`/`kordofan` maddelerinden ölçerim.

---

# O) ÇAPRAZ DOĞRULAMA TUTMADI — ve §N'in bütün sayıları eksikti

## O.1 🔴 Sebep ayrıştırıcı değil, **DOSYA KAPSAMI**

Koordinatörün kuralını uyguladım: kendi ayrıştırıcımı `girdi.yukle` ile
karşılaştırdım. **Tutmadı** — ve sebebi beklediğimden başka çıktı:

```
girdi.yukle       951 kayit  |  Kavalalı v: 121  |  isg: 15
kayit_ayir.py     767 kayit  |  Kavalalı v:  55  |  isg: 11
```

```python
arac/girdi.py:  GIRDI_DOSYALARI = ['yerlesimler.js', 'yerlesimler_afrika.js']
```

**Motor iki dosya okuyor; ben yalnız `yerlesimler.js`'i okumuşum.**
`yerlesimler_afrika.js` (Oturum 14, 153+ nokta) **merge edilmiş** — ve o dosya
**tam benim bölgem**: Mısır, Sudan, Kızıldeniz kıyıları.

⇒ §N'deki *"52 Kavalalı dönemi"*, *"9 kayıt"*, *"zincirin sonu tutarlı"*
hükümlerinin **hepsi eksik dosyayla** kuruldu. Doğru sayılar aşağıda.

⚠️ **`CLAUDE.md §5` hâlâ `yerlesimler_afrika.js` için "HENÜZ index.html'e
BAĞLANMAMIŞ, merge bekliyor" diyor.** Bayat. Bugünün dördüncü belge-bayatlığı
vakası ve **bu sefer beni doğrudan yanılttı**: dosyayı kapsam dışı saymamın
gerekçesi o satırdı.

📌 Ders, koordinatörün kuralının **ötesine** geçiyor: ayrıştırıcıyı doğrulamak
yetmiyor, **hangi dosyaları okuduğunu** da doğrulamak gerekiyor. İki ayrıştırıcı
aynı dosyada aynı sonucu verse bile, biri eksik dosya kümesi okuyorsa sayı yanlış.

## O.2 🔴 `isg:` ÖRTÜSÜ EKSİK UYGULANDI — 12 kayıt, olması gereken ~56

Projenin okuyucusuyla ölçüm:

| Kavalalı `v:` bitişi | Kayıt | Nereler |
|---|---|---|
| **`1914-11-05`** | **43** | Demenhûr, Dessûk, Kafrüşşeyh, Bürüllüs, Tanta, Mahalletülkübrâ, Şibînülkûm… |
| **`1914-12-18`** | **13** | Kahire, İskenderiye, Dimyat, Asyut, Asvan, İbrim, Süveyş… |

**Mısır'ın Kavalalı dönemi İKİ AYRI TARİHTE bitiyor** — 43 gün arayla, aynı ülke,
aynı olay. 43 kayıt Nil deltası kasabaları (`yerlesimler_afrika.js`'ten).

Ve `isg:` örtüsü **yalnız 12 kayda** uygulandı:
```
1882-09-14 → 1914-12-18  d:ingiltere  12 kayıt
  Kahire, İskenderiye, Dimyat, Asyut, Asvan, İbrim, Süveyş,
  Reşîd (Rosetta), Hârice (Vâhât), Dâhile…
```
⇒ **44 Mısır kaydı örtüsüz.** Delta kasabaları da 1882-1914 arası İngiliz
işgali altındaydı; Tanta ile Kahire arasında bu konuda hiçbir fark yok.

### İki ayrı düzeltme gerekiyor

1. **`1914-11-05` → `1914-12-18`** (43 kayıt). İngiliz himayesi **18 Aralık
   1914**'te ilan edildi; `1914-11-05` **başka bir olayın** tarihi (İngiltere'nin
   Osmanlı'ya savaş ilanı / Kıbrıs'ı ilhakı). ⚠️ **TDV'den doğrulamadım** —
   `1914-12-18`'in kaynağı veride zaten kullanılıyor ama 11-05'in nereden
   geldiğini bilmiyorum. Uygulamadan önce ölçülmeli.
2. **`isg:` örtüsü 44 kayda genişletilmeli** — aynı `f`/`t`/`d`/`kaynak` ile.

## O.3 🔴 KORDOFAN ÇÖZÜLDÜ — Ubeyyid Hartum'un tarihini taşıyor

**TDV `muhammed-ahmed-el-mehdi`** ✅ ikisini **açıkça ayırıyor**:
> **Ubeyyid:** *"şehre hâkim olmayı başardı (**24 Şevval 1299 / 7 Eylül 1882**)"*
> **Hartum:** *"Mehdî kuvvetleri **26 Ocak 1885**'te Hartum'u ele geçirdi"*
> Şeyhan/Kaşgil (Hicks Paşa): **5 Kasım 1883**

Veri:
| Kayıt | `tur` | Mehdî'ye geçiş | Hüküm |
|---|---|---|---|
| `Kordofan (Ubeyyid)` | sehir | `1885-01-26` | 🔴 **Hartum'un tarihi** |
| `Kordofan` | bolge | `1883-01-19` | ⚠️ TDV bu günü vermiyor |
| `Hartum` | sehir | `1885-01-26` | ✅ doğru |

⇒ **Kesin olan: `Kordofan (Ubeyyid)` = `1885-01-26` YANLIŞ.** TDV Ubeyyid'i
Hartum'dan **iki yıl dört ay** önceye koyuyor. Bu, `1885-01-26` taşıyan
**19 kayıtlık** öbeğe yapışmış — komşu kayıtların tek satır gibi işlenmesi
sınıfının **beşinci** vakası.

⚠️ **Hangi tarihin yazılacağı belirsiz ve tahmin yazmıyorum:**
TDV **7 Eylül 1882** diyor (hicrî karşılığıyla, yani kesin bir iddia).
Veride duran `1883-01-19` ise TDV'de **geçmiyor** — kaynağını bulamadım.
İkisi arasında karar vermek için ikinci bir TDV maddesi gerekiyor; `sudan`
maddesi Sevâkin'de sustuğu gibi burada da susabilir.
**Önerim: TDV'nin verdiği `1882-09-07`** (§4 gereği birincil kaynak), ama
`1883-01-19`'un kaynağı bulunursa o tercih edilmeli — çünkü **iki tarih iki ayrı
aşama** olabilir (kuşatmanın başlaması ↔ şehrin teslimi), tıpkı Zebîd'in
1538/1539'u gibi.

## O.4 Yeni ölçülen Sudan/Kızıldeniz kayıtları (Afrika dosyasından)

| Tarih | Kayıt | Nereler |
|---|---|---|
| `1883-12-23` | 3 | El-Fâşir, Nyala, Cenîne (Darfur) |
| `1884-02-01` | 1 | **Sevâkin** ✅ benim önerim uygulanmış |
| `1884-06-03` | 1 | Kerene |
| `1885-01-26` | 19 | Dongola, Hartum, Sennar, Kordofan (Ubeyyid), Kerma, Debbe, Merevî… |
| `1885-02-05` | 2 | Masavva, Dahlak ✅ |

📌 **`1885-01-26`'da 19 kayıt** var — Hartum'un düştüğü gün bütün Sudan'ın el
değiştirmiş gösterilmesi, "bölgesel çöküş tek güne toplanmış" deseninin
**en büyük örneği.** Darfur (1883-12-23) ve Kordofan (1883-01-19) ayrı tarih
taşıdığına göre öbeğin tamamı ölçülebilir; **ölçmedim**, sıradaki tur.

---

# P) SUDAN'IN DÜŞÜŞÜ — `1885-01-26`'daki 19 kayıt ölçüldü

**TDV `muhammed-ahmed-el-mehdi`** ✅ düşüş sırasını **kronolojik** veriyor:

| # | Yer | TDV tarihi |
|---|---|---|
| 1 | Ebâ Adası | 16 Ramazan 1298 / **12 Ağustos 1881** (ilk zafer) |
| 2 | Fâşûdâ | 16 Muharrem 1299 / **8 Aralık 1881** |
| 3 | Ashaf (Kordofan kuzeyi) | tarih yok |
| 4 | **Bâra** | **Eylül 1882** |
| 5 | **Ubeyyid (El-Obeid)** | 24 Şevval 1299 / **7 Eylül 1882** |
| 6 | **Dârfûr** | **Aralık 1883** |
| 7 | Bahrülgazâl | Nisan 1884 |
| 8 | **Berber** | **Mayıs 1884** |
| 9 | **Hartum** | **26 Ocak 1885** |

Mehdî'nin ölümü: 9 Ramazan 1302 / **22 Haziran 1885** · Halife Abdullah 1885-1898

## P.1 🟢 19 kaydın 4'ü çözüldü — üçü taşınıyor, biri doğrulandı

| Kayıt | Mevcut | Önerilen | Kaynak |
|---|---|---|---|
| **Bâra** | `1885-01-26` | **`1882-09-01`** | *"Bâra — Eylül 1882"* (gün yok) |
| **Kordofan (Ubeyyid)** | `1885-01-26` | **`1882-09-07`** | *24 Şevval 1299* — hicrî karşılıklı |
| **Berber** | `1885-01-26` | **`1884-05-01`** | *"Berber — Mayıs 1884"* (gün yok) |
| **Hartum** | `1885-01-26` | ✅ **DOĞRU, dokunulmasın** | *"26 Ocak 1885"* |

⚠️ Bâra ve Berber'de **gün yok**, TDV yalnız ay veriyor → `§4` gereği ayın 1'i.
📌 Bâra (13,70K 30,37D) ile Ubeyyid (13,18K 30,22D) **60 km arayla** ve TDV
ikisini de Eylül 1882'ye koyuyor — tutarlı, iki komşu şehir aynı harekâtta düşmüş.

## P.2 ✅ Mevcut veriden DOĞRULANAN: Darfur

Veri `1883-12-23`'te El-Fâşir · Nyala · Cenîne diyor; TDV **"Dârfûr — Aralık
1883"**. **Uyuşuyor**, dokunulmasın. (Verideki gün TDV'de yok ama ay tutuyor.)

## P.3 ⚠️ 15 KAYIT KAYNAKSIZ — `1885-01-26`'da BIRAKILIYOR

TDV bu maddede **adlarını hiç anmıyor**:
```
Debbe · Dongola · Ebû Hamed · Ed-Düveym · Fâzûğlî · Kadârif · Kerma ·
Kesela · Kosti · Merevî · Nühûd · Rusayris · Sennar · Vad Medenî · Şendî
```
**Tahmin yazmıyorum.** Bunlar Hartum'la aynı günde düşmüş olabilir de olmayabilir
de; TDV susuyorsa `1885-01-26` kalır ve **kaynaksız olduğu işaretlenir.**

📌 Ama öbeğin **homojen olmadığı artık kanıtlı**: aynı öbekten üç kayıt
(Bâra, Ubeyyid, Berber) 2,5 yıla kadar erkene taşınıyor. Yani kalan 15'in de
bir kısmı yanlış tarihte olabilir — **ölçülmedi, ölçülebilir.** İkinci kaynak
gerekiyor (`sudan` maddesi Sevâkin'de susmuştu, burada da susabilir).

## P.4 ⚠️ Yan çelişki — Kordofan bölgesi ile merkezi

`Kordofan (Ubeyyid)` **1882-09-07**'ye taşınırsa, `Kordofan` (bölge, `:903`)
kaydındaki **`1883-01-19`** merkezinden **dört ay sonra** kalıyor: bölge,
merkezi düştükten sonra dört ay daha Mısır'da görünüyor.

Bu ters yönde bir tutarsızlık ve **§O.3'te tahmin ettiğim "iki aşama"
ihtimalini destekliyor**: `1883-01-19` gerçekten kuşatmanın sonu / bölgenin
tamamının teslimi olabilir. **TDV bu ayrımı yapmıyor**, ben de yapmıyorum —
ama koordinatöre not: **Ubeyyid taşınırsa bölge kaydı da gözden geçirilmeli**,
yoksa yeni bir iç çelişki doğar.

## P.5 📌 Muhtemel eksik noktalar — ölçmedim

TDV'nin andığı üç yerin veride karşılığını **görmedim**:
**Ebâ Adası** (1881, hareketin doğduğu yer) · **Fâşûdâ** (1881) ·
**Bahrülgazâl** (1884). Nokta var mı diye `girdi.yukle` üzerinde aramadım.
Varsa tarihleri kaynaklı; yoksa `§2` gereği bölgeleri komşu peteğe emiliyor.
**Sıradaki tura.**

---

# Q) KÜTAHYA · KONYA · KARAMAN — 1832-33 Anadolu işgali

⚠️ Slug: **`kutahya-antlasmasi` ❌ ÖLÜ** (arama sayfası, 50 eşleşme döndürdü —
"ölü slug içerik döndürüyor" **beşinci vaka**). Kütahya Antlaşması'nın
**müstakil maddesi yok**; bilgi `kavalali-mehmed-ali-pasa` ✅ içinde.

## Q.1 🟢 ŞEMA SORUSUNUN CEVABI: **VERİLMEDİ, İŞGAL EDİLDİ**

Koordinatörün sorduğu ayrım TDV'de net:

> **Konya Muharebesi:** *"İbrâhim Paşa, **21 Aralık 1832**'de Sadrazam Reşid
> Mehmed Paşa kumandasındaki Osmanlı ordusunu da yendi"*
> **Kütahya Antlaşması:** **3 Mayıs 1833** (ferman 5-6 Mayıs'ta yazılıp gönderildi)
> **Mehmed Ali'ye VERİLEN:** *"Halep, Şam ve **Adana** (muhassıllık olarak)"*
> + Akkâ kaydıhayat şartıyla

**Konya, Karaman ve Kütahya bu listede YOK.** Yani antlaşma onları Mehmed Ali'ye
**vermedi**; İbrâhim Paşa oralardan **çekildi.**

⇒ **`isg:` doğru şema.** Osmanlı `d:`si kesintisiz sürer, üstüne işgal örtüsü
gelir — Bosna 1878-1908 ve Mısır 1882-1914 ile birebir aynı yapı.
⇒ **Adana `v:` olarak kalmalı** (bugünkü hâli doğru, `1841-02-25`'te bitiyor) —
o gerçekten devredildi, işgal değil.

## Q.2 🔴 KAPSAM VE TARİHLER — 3 kayıt, iki tarih yanlış

Projenin okuyucusuyla ölçtüm, **tam 3 kayıt**:

| Kayıt | Mevcut `v:"Mısır ordusu (işgal)"` | Öneri |
|---|---|---|
| **Konya** | `1832-11-21` → `1833-06-30` | `isg:` **`1832-12-21`** → `1833-05-03` |
| **Karaman** | `1832-11-21` → `1833-06-30` | `isg:` **`1832-12-21`** → `1833-05-03` |
| **Kütahya** | `1833-02-02` → `1833-06-30` | `isg:` `1833-02-02` → `1833-05-03` |

🔴🔴 **`1832-11-21` → `1832-12-21` ÖNERİSİ GERİ ÇEKİLDİ — veri doğruymuş.**
Ayrıntı §R. Kısaca: kronolojide **iki ayrı madde** var — `1832-11-21` *"Mısır
ordusu Konya'ya girdi"*, `1832-12-21` *"Konya Meydan Muharebesi"*. İşgal ordunun
girdiği gün başlar. Transpozisyon teşhisim yanlıştı.

⚠️ **`1833-06-30` kaynaksız.** TDV antlaşmayı **3 Mayıs 1833** veriyor ama
İbrâhim Paşa'nın Anadolu'yu **boşaltma tarihini vermiyor**. İki seçenek:
· **`1833-05-03`** — antlaşma günü, kaynaklı, işgalin hukuken bittiği an
· `1833-06-30` — fiilî tahliye olabilir ama **kaynağı yok**
**`1833-05-03`'ü öneriyorum** (§4: kaynaksız tarih kaynaklıya yenilir), ama
tahliye haftalar sürdüğü için koordinatör fiilîyi tercih ederse `1833-06-30`
kalabilir — o zaman **kaynaksız diye işaretlenmeli.**
⚠️ Kütahya'nın başlangıcı `1833-02-02` de TDV'de **yok**; makul (İbrâhim Şubat
1833'te Kütahya'ya ulaştı) ama kaynaksız. Dokunmuyorum, işaretliyorum.

## Q.3 🔴 ENGEL: `isg:` için KİMLİK YOK

`isg:` şeması `d:"<BOYALAR kimliği>"` istiyor (Bosna `d:"avusturya"`,
Mısır `d:"ingiltere"`). Ölçtüm:

```
renkler.py  "misir"  → YOK      "kavalali" → YOK      "ibrahim" → YOK
```

**Mehmed Ali'nin ordusu için tanımlı kimlik yok**, çünkü Mısır bu atlasta
Osmanlı tâbii (`v:`) olarak modellenmiş — yani kendi rengi hiç olmamış.

Üç yol var, **hangisinin seçileceğine karar vermiyorum:**
1. **Yeni `misir` kimliği** — `YAPILACAKLAR §Palet` "aday hex kalmadı" diyor
   ⇒ ama bu vaka **paylaşıma çok uygun**: kimlik yalnız **1832-1833** (ve varsa
   başka Kavalalı işgalleri) için gerekiyor. Paylaşım kaldıracı burada ucuz.
2. `isg:`ye kimliksiz/etiketli bir biçim eklemek — **şema değişikliği**, MOTOR'un.
3. Bugünkü `v:` hâlinde bırakmak — ama `denetle_statu.py` **ihlal veriyor**,
   yani mevcut durum zaten sürdürülebilir değil.

📌 Bu, bugünkü ikinci "veri hazır, kimlik yok" vakası (`idrisi` §J'de askıya
alınmıştı). İkisi birlikte MOTOR'a gitmeli — palet kararı tek elden verilmeli.

---

# R) ÇARPIŞMA SINAMASI — kendi önerimi çürüttü

Koordinatörün istediği ucuz sınamayı koştum: *"bu tarih başka bir olayın gününe
çarpıyor mu, kronolojide karşılığı var mı?"* Üç tarihi birden test ettim.

## R.1 🔴 `1832-12-21` ÖNERİM YANLIŞTI — iki AYRI olay var

```
kronolojide:
  1832-11-21   "Mısır ordusu Konya'ya girdi"                 ← işgalin başlangıcı
  1832-12-21   "Konya Meydan Muharebesi: sadrazam esir düştü" ← ayrı olay
  1833-02-02   "Mısır ordusu Kütahya'ya ulaştı"
```

Mısır ordusu Konya'ya **21 Kasım**'da girdi; meydan muharebesi **bir ay sonra**,
21 Aralık'ta şehrin **dışında** oldu.

⇒ `isg:` başlangıcı olarak **`1832-11-21` DOĞRU.** İşgal, ordunun şehre girdiği
gün başlar — muharebenin kazanıldığı gün değil.
⇒ TDV'nin verdiği 21 Aralık **gerçek ama başka bir olayın** tarihi; veri ikisini
zaten ayrı ayrı tutuyor.
⚠️ *"Transpozisyon sınıfı, bugün ikinci kez"* iddiam **geçersiz** — elde yalnız
Lahsa (`05-08` ↔ `07-08`) kaldı. **Tek vakayla sınıf kurulmaz.**

## R.2 🟢 `1833-02-02` KAYNAKSIZ DEĞİLMİŞ

`1833-02-02` → kronolojide **aynı gün** *"Mısır ordusu Kütahya'ya ulaştı"*
(0 gün fark). TDV vermiyor ama **verinin kendi maddesi veriyor.**
§Q.2'de "kaynaksız" diye işaretlemiştim, **geri alıyorum.** Dokunulmasın.

## R.3 ⚠️ `1833-06-30` — çarpmıyor ama MADDESİZ

```
veride 1833-06-30: yalnız o 3 işgal kaydı (başka çarpışma YOK)
kronolojide ±30 gün: yalnız 1833-07-08 "Hünkâr İskelesi Antlaşması" (8 gün)
```

· Uydurma-gün-çarpması **yok** — 1849 Yemen'deki gibi başka bir olayın gerçek
  gününe oturmuyor.
· **Ama kendi maddesi de yok** ⇒ Anadolu'nun tahliyesi bugün haritada
  *"Hünkâr İskelesi Antlaşması"nın altında* beliriyor. **§B.1'deki Baltalimanı
  deseninin aynısı** — Rus-Osmanlı antlaşmasının altında Mısır ordusunun çekilişi.

⇒ **Önerimi değiştiriyorum.** `1833-05-03` demiyorum artık: `isg:` **fiilî**
katmandır, işgal ordu çekilince biter, antlaşma imzalanınca değil.
`1833-06-30` bir tahliye tahmini olarak **savunulabilir.**
> **Doğru düzeltme tarihi değiştirmek değil, MADDE YAZMAK:**
> *"İbrâhim Paşa'nın Anadolu'yu tahliyesi"* (1833 Haziran sonu).
> Hem kırılmanın maddesi olur hem Hünkâr İskelesi'nin altından kurtulur.
⚠️ Tarih yine de kaynaksız — TDV tahliye gününü vermiyor, madde "gün kaynaksız"
notuyla yazılmalı.

## R.4 📌 DERS — "kaynak ne diyor" ile "veri zaten ne diyor" AYRI SORULAR

Bu, bugünün dördüncü geri çekmesi ama öncekilerden farklı: **hatayı uygulamadan
önce koşulan ucuz bir test yakaladı.** `y:"vassal"`, Sevâkin ve `aiz`de hatayı
başkası ya da ikinci bir kaynak bulmuştu.

§I.4'te *"yerin tarihi olayın maddesinde durur"* demiştim — o **kaynak içi** bir
kuraldı. Bunun **veri içi** karşılığını atlamışım:

> **Bir tarihi değiştirmeden önce, o tarihin kronolojide karşılığı var mı diye
> bak.** Varsa tarih uydurma değildir; farklı bir olayı gösteriyor olabilir.

Üç tarihin üçünde de test bir şey söyledi: biri önerimi çürüttü (`1832-12-21`),
biri "kaynaksız" damgamı kaldırdı (`1833-02-02`), biri gerçek bir eksiği
gösterdi (`1833-06-30` maddesiz).

---

# S) `kasitli_bosluk` — ÖLÇÜT VE ÜÇ KARAR

## S.1 🔴 ÖNCE ÖLÇÜT — çünkü Arabistan'ın tamamına emsal olacak

**"Aşiret nüfuzu devlet idaresi midir?" sorusu yanlış kurulmuş** ve bu atlasın
kendi kararları onu zaten cevaplamış: `benihalid` · `suud` · `sammar` · `nogay` ·
`kazak-hanligi` hepsi aşiret/hânedan siyasî yapıları ve **hepsi boyanıyor.**
Yani ayrım "aşiret mi devlet mi" olamaz — olsaydı Necid'in tamamını silmek
gerekirdi.

> ### ÖNERDİĞİM ÖLÇÜT: **ADI KONMUŞ MERKEZ + SÜREKLİLİK**
>
> Bir toprak, **adı bilinen bir merkezden** (şehir · vaha · kale · mevsimlik
> idare merkezi) **sürekli** bir idare işlevi yürütülüyorsa — vergi, asayiş,
> yol/hac güvenliği, tahkim — **yönetilendir**; o merkezin sahibi aşiret
> konfederasyonu olsa bile.
>
> **Yönetilen SAYILMAZ:** mevsimlik otlak hakkı · geçiş güzergâhı · yalnız
> nominal biat · uzaktaki bir başkentin kâğıt üzerindeki iddiası.

**Ve operasyonel hâli — asıl işe yarayan biçim bu:**
> Soru *"orada devlet var mıydı"* değil,
> **"o toprağı hangi MERKEZ idare ediyordu ve o merkez veride var mı?"**
>
> · Merkez biliniyor, veride **var** → petek zaten doğru boyanır, sorun yok
> · Merkez biliniyor, veride **YOK** → boşluk **kusurdur**; doğru çözüm
>   `kasitli_bosluk:false` değil, **eksik noktayı eklemektir**
> · Merkez **bilinmiyor** → boşluk **kasıtlıdır** (`true`)

📌 Bu çerçeve `kasitli_bosluk`u ne olduğu şeye indirger: **"bilinen bir merkez
yok" iddiasının vekili.** Ve vekil olduğu için, merkez bulunduğu anda bayraktan
daha iyi bir çözüm doğar.

## S.2 Kuveyt (`kur:1716`) → **`false`** 🔴 varsayım çürüdü

**TDV `halid-beni-halid`** ✅ (`<title>` = "HÂLİD (Benî Hâlid) -…", dolu madde):
> Berrâk b. Urey'ir'in nüfuzu *"kuzeyde **Kuveyt**'ten güneyde **Katar**'a"* uzandı
> 🔴 *"**Kuveyt'te Kût adlı bir yazlık idare merkezi kurdu**"* (sonradan Kuveyt)
> Merkezleri: **Hufûf** (Lahsa'nın merkez şehri)

**Yani Kuveyt körfezi 1716 öncesinde boş değildi ve idaresiz de değildi:**
Benî Hâlid'in nüfuz alanıydı ve **Berrâk orada bir idare merkezi kurmuştu.**
Üstelik atlas `benihalid`i Lahsa ve Katîf'ten **zaten boyuyor** — yani komşu
petekler o kimliği taşıyor, ortadaki delik veriyi değil eksikliğimizi gösteriyor.

⚠️ **Sınır:** bu 1670-1716 için kesin. 1550-1670 arası Osmanlı Lahsa eyaleti
(veride `d:` vassal olarak var), öncesi daha belirsiz. Bayrak tek boolean olduğu
için tüm `kur:` öncesini kapsıyor; **1670-1716'nın kaynaklı olması `false` için
yeterli sayılmalı**, çünkü boşluğun *tamamen* kasıtlı olduğu iddiası çürüdü.

## S.3 Katar / Doha (`kur:1825`) → **`false`** — ve asıl çözüm nokta eklemek

**TDV `katar`** ✅ dolu madde:
> **Zübâre** (1776'da işgal edildi), **Huveyle** ve başka kıyı yerleşimleri
> Doha'dan **önce** vardı
> 18. yy'da yarımadada **Benî Müsellem** otoritesi; İran ve Osmanlı da ilgili
> Âl Sânî ancak *"Benî Müsellem'in siyaset sahnesinden çekilmesinden sonra"*
> güç kazandı, 1860'lardan itibaren

Ayrıca `halid-beni-halid` Benî Hâlid nüfuzunu **Katar'a kadar** getiriyor.

⇒ Yarımada 1825 öncesinde **ne boştu ne idaresizdi.**
🔴 **Ama `false` yapmak ikinci en iyi çözüm.** Asıl kusur şu: **Zübâre ve
Huveyle'nin veride noktası yok.** Doha'nın peteği 1825 öncesini temsil edemez
çünkü yanlış şehri temsil ediyor. **Doğru çözüm: Zübâre noktası eklemek**
(1760'lar-1811 arası bölgenin gerçek merkezi). O eklenirse bayrak tartışması
kendiliğinden biter.
📌 Bu, §S.1'deki ölçütün ikinci maddesinin canlı örneği.

## S.4 Ebûzabî (`kur:1761`) → **`true`** ✅ mevcut hâli doğru

⚠️ Slug tuzağı: **`abudabi` KÜTÜK MADDE** — `<title>` = "ABUDABİ - TDV İslâm
Ansiklopedisi" sınamayı **geçiyor** ama gövdesi yalnız *"bk. EBÛZABÎ"*.
Doğru slug **`ebuzabi`** ✅ (ARAP-AFRİKA'nın bildirdiği sınıfın canlı doğrulaması —
`<title>` yetmiyor, gövde de okunmalı).

**TDV `ebuzabi`** ✅ dolu madde:
> *"Benî Yâs kabilesi… Ebûzabî adasına **1761**'de geldiler"*
> *"buraya yerleştiklerinde **yirmi ev** kadar bir topluluk oluşturmaktaydılar"*
> 🔴 Madde **1761 öncesini hiç anlatmıyor** — ne kıyıda yerleşim, ne Umman
> (Ya'rubî/Bû Saîd) hâkimiyeti, ne başka bir otorite.

⇒ **Adı konmuş bir merkez yok, kaynak da yok.** Ölçütün üçüncü maddesi:
boşluk kasıtlıdır. **`true` kalsın.**
📌 Yirmi hanelik bir topluluğun 1761'de gelmesi, öncesinde kıyının yerleşik idare
taşımadığının dolaylı göstergesi — ama **bunu delil saymıyorum**, kaynak
sessizliği delil değildir. `true` kararım **kanıt yokluğuna** dayanıyor,
yokluk kanıtına değil.

## S.5 Özet ve emsal

| Yer | Karar | Dayanak |
|---|---|---|
| **Kuveyt** | **`false`** | `halid-beni-halid`: Berrâk **Kuveyt'te idare merkezi kurdu**, nüfuz Kuveyt→Katar |
| **Doha/Katar** | **`false`** ⚠️ | `katar`: Zübâre/Huveyle daha eski, Benî Müsellem otoritesi. **Asıl çözüm: Zübâre noktası** |
| **Ebûzabî** | **`true`** ✅ | `ebuzabi`: 1761 öncesi için **kaynak yok**, merkez bilinmiyor |

⚠️ **Emsalin sınırı:** bu üç karar `kasitli_bosluk`un tek boolean olmasından
zarar görüyor. Kuveyt'in boşluğu 1670-1716 için kusur, 1281-1550 için belki
değil. **Zamanlı bir bayrak** gerekirse bu üç vaka gerekçe olur.

---

# T) ZÜBÂRE PAKETİ — ve ararken çıkan 580 YILLIK BOŞLUK

## T.1 🔴 ZÜBÂRE'Yİ YAZAMIYORUM — kaynak yok

Paketi istedin, dürüst cevabım: **yazamam.** Üç slug denedim:

| Slug | Sonuç |
|---|---|
| `zubare` | ❌ **ÖLÜ** (`<title>` = "Arama - TDV İslâm Ansiklopedisi") |
| `bahreyn` ✅ | dolu madde ama **Zübâre'yi anlatmıyor** — yalnız 1834'te Katîf/Ukeyr baskını bağlamında geçiyor |
| `katar` ✅ | yalnız *"Zübâre'yi işgal etmesi"* (**1776**) |

Elimde tek tarih var (1776) ve **kimin kimden işgal ettiği bile net değil.**
Bir yerleşim kaydı en az kuruluş + sahiplik dizisi ister; ikisi de yok.

> **Kuruluş tarihi, kurucu, sahiplik zinciri ve terk tarihi TDV'de bulunamadı.
> Nokta eklemeyi ÖNERMİYORUM** — kaynaksız bir nokta, kaynaksız bir boşluktan
> kötüdür: boşluk "bilmiyoruz" der, uydurma nokta "biliyoruz" der ve **peteğiyle
> 100 km²'lerce toprağı boyar.**

⇒ **KAYNAK oturumuna havale:** `zubare` ölü, Zübâre bilgisi hangi maddede?
Aday: `utub` · `al-i-halife` · `bahreyn`in tam metni (çekimim eksik olabilir,
§M.3'teki "eksik çekim" sınıfı).

## T.2 🔴 ARARKEN ÇIKTI: MANAMA 580 YIL SAHİPSİZ

Bahreyn'i okurken veriye baktım. **Manama'nın kaydı tek satır:**
```
Manama (Bahreyn)  tur:liman  kur:YOK
   s: {1861-05-31 → 1923-10-29, d:"ingiltere"}
```
Ölçtüm — **1400 · 1500 · 1600 · 1700 · 1800 · 1850 kesitlerinin hepsinde
SAHİPSİZ.** `kur:` alanı da yok, yani "henüz kurulmamış" bile denemez.

🔴 **Bu, `CLAUDE.md §3`'ün kastettiği kasıtlı boşluk DEĞİL.** Kasıtlı boşluklar
çöl ve otoritesiz bölge içindir. Bahreyn **belgeli bir adadır** ve TDV hâkimiyet
sırasını **tarihleriyle** veriyor:

**TDV `bahreyn`** ✅ (`<title>` = "BAHREYN - TDV İslâm Ansiklopedisi", dolu):
> *"**1521**'de Bahreyn'i ele geçirdiler"* (Portekiz) → **1602**
> *"**1602**'de İran'a bağlı kuvvetler tarafından"* → **1783**
> *"**1783** yılında Utûb kabilesinden **Âl-i Halîfe**'nin hâkimiyetine girdi"*
> *"**21 Mayıs 1861**'de İngiltere ile… anlaşma imzaladılar"*

### Önerilen kayıt

```js
Manama (Bahreyn)
  s:[{f:"1521-01-01", t:"1602-01-01", d:"portekiz"},
     {f:"1602-01-01", t:"1783-01-01", d:"iran"},
     {f:"1783-01-01", t:"1861-05-21", d:"bahreyn"},     // ⚠️ kimlik yok
     {f:"1861-05-21", t:"1923-10-29", d:"ingiltere"}]
```

| Düzeltme | Mevcut | Öneri | Kaynak |
|---|---|---|---|
| İngiliz dönemi başı | `1861-05-31` | **`1861-05-21`** (10 gün) | `bahreyn` |
| Portekiz dönemi | ❌ yok | **1521 → 1602** | `bahreyn` |
| İran dönemi | ❌ yok | **1602 → 1783** | `bahreyn` |
| Âl Halîfe dönemi | ❌ yok | **1783 → 1861** | `bahreyn` |

⚠️ **1281-1521 arası:** TDV bu maddede vermiyor (Cebrîler / Hürmüz dönemi).
**Boş bırakıyorum**, uydurmuyorum.
⚠️ `portekiz` ve `iran` kimlikleri **var** (Maskat kullanıyor). **`bahreyn` YOK** —
bugünün **üçüncü** "veri hazır, kimlik yok" vakası (`kavalali` · `idrisi` · `bahreyn`).
Üçü birlikte tek palet kararına bağlanmalı.

## T.3 ⚠️ DOHA 1825-1871 — hipotez, iddia değil

Doha `kur:1825` ama ilk dönemi **1871-09-20**. Arada **46 yıl sahipsiz.**
`v:{1871-09-20 → 1913-07-29, k:"Sânî emirliği (Osmanlı kazâsı)"}` doğru
görünüyor (1871 tarihini §D'de teyit etmiştim).

**Hipotezim:** 1825-1868 arası yarımada **Bahreyn'in (Âl Halîfe) üstünlüğü**
altındaydı; 1868 İngiliz düzenlemesi Katar'ı Bahreyn'den ayırdı.
🔴 **Ama bunu TDV'den doğrulamadım** ve `katar` maddesinin çektiğim kısmı
söylemiyor. **Hipotez olarak yazıyorum, uygulanmasını önermiyorum.**
Bahreyn kimliği kurulursa aynı turda ölçülebilir.

---

# U) SUDAN'IN 15 KAYNAKSIZ KAYDI — ikinci kaynak turu

## U.1 Denenen slug'lar

| Slug | Sonuç |
|---|---|
| **`dongola`** | ✅ **dolu madde — iki tarih verdi** |
| **`sennar`** | ❌ **KÜTÜK MADDE** — `<title>` = "SENNÂR - TDV İslâm Ansiklopedisi" geçiyor ama gövde yalnız *"Sudan'da Func Sultanlığı'nın başşehri"* + **bk. FUNC**. Bugünün **üçüncü** kütük vakası (`abudabi` · `mehdi-es-sudani` · `sennar`) |

📌 `sennar` için doğru adres **`func`** ✅ — **denendi, sonuç NEGATİF:**

**TDV `func`** ✅ dolu madde (`<title>` = "FUNC - TDV İslâm Ansiklopedisi"):
> Func Sultanlığı **1504**'te kuruldu ✅ (veri `funj` 1504-01-01 — **doğru**)
> *"1820'de Sudan'ın Kavalalı Mehmed Ali Paşa tarafından fethine kadar sürdü"*
> *"**1885**'te Mehdî taraftarlarınca tahrip edildikten sonra"* — **gün/ay yok**
> Son sultan VII. Bâdî **1804-1821**

⇒ **Sennâr'da değişiklik YOK.** TDV **yılı** doğruluyor (1885) ama **günü
vermiyor** — yani `1885-01-26`'nın Hartum'dan geldiği şüphesi **çürütülmedi de
doğrulanmadı da.** §U.4'teki karar geçerli: kayıt `1885-01-26`'da kalır,
**kaynaksız işaretiyle.**
📌 Yan teyit: `funj` döneminin **1504** başlangıcı ve Kavalalı fethinin **1820-21**
aralığı doğrulandı; veride Sennâr `v:{1821-06-14}` bu aralığın içinde, çelişmiyor.

## U.2 🔴 DONGOLA — İKİ tarih birden çürüdü

**TDV `dongola`** ✅:
> *"**1820** yılında Mehmed Ali Paşa'nın oğlu İsmâil Kâmil Paşa Sudan'a
> düzenlediği sefer"*
> *"**1886** yılına kadar Mısır'ın… bu tarihten itibaren **on yıl** da bölgedeki
> Sudan Mehdî Devleti'nin hâkimiyetinde"*
> *"**1896**'da Lord Kitchner'in kuvvetleri tarafından zaptedildi"*

| | Mevcut | TDV | Fark |
|---|---|---|---|
| Mehdî dönemi başı | `1885-01-26` | **1886** | ~1 yıl |
| Mehdî dönemi sonu | `1899-01-19` | **1896** | **3 yıl** |

⇒ Öneri: `s:{f:"1886-01-01", t:"1896-01-01", d:"mehdi"}` · `s:{f:"1896-01-01", …, d:"ingiltere"}`
⚠️ TDV **gün/ay vermiyor**, yalnız yıl → `§4` gereği `01-01`.

## U.3 🔴 ASIL BULGU — `1899-01-19` HUKUKÎ TARİH, FİİLÎ DEĞİL

Ölçtüm: **20 kayıt** `ingiltere` dönemine `1899-01-19`'da başlıyor.
Ama `1899-01-19` **İngiliz-Mısır ortak yönetimi (condominium) anlaşmasıdır** —
`sudan` maddesinden §F.3'te okumuştum. Fiilî geri alış **kademeliydi:**

```
Dongola          1896        (TDV `dongola`)
Omdurman/Hartum  2 Eylül 1898 — Halife Abdullah mağlûp
                             (TDV `muhammed-ahmed-el-mehdi`, §P'de okundu)
condominium      19 Ocak 1899 — hukukî düzenleme
```

🔴 **Ve veri kendi içinde zaten tutarsız:** Darfur (Cenîne · El-Fâşir · Nyala)
`mehdi` dönemini **`1898-09-02`**'de bitiriyor — yani Omdurman tarihi **veride
zaten kullanılıyor.** 19 kayıtlık öbek ise `1899-01-19`'da.

| Mehdî dönemi | Kayıt | Bitiş |
|---|---|---|
| `1883-12-23 → 1898-09-02` | 3 | Darfur — **Omdurman** |
| `1885-01-26 → 1899-01-19` | 19 | öbek — **condominium** |
| `1883-01-19 → 1899-01-19` | 1 | Kordofan (bölge) |
| `1884-01-01 → 1891-02-06` | 1 | Tokar |

## U.4 ⚠️ ÖNERİM — ve neden 19'unu topluca TAŞIMIYORUM

**Uygulanacak (kaynaklı):**
· **Dongola** → `1886-01-01` / `1896-01-01` (§U.2)

**Uygulanmayacak, ama işaretlenecek:**
· Kalan **18 kayıt** `1899-01-19`'da kalsın — **fiilî tarihleri tek tek
  kaynaklanmadı.**

🔴 **Neden topluca `1898-09-02` yapmıyorum:** o, bir yığını **başka bir yığınla
değiştirmek** olurdu. Geri alış kademeliydi (Dongola 1896 · Ebû Hamed ve Berber
1897 · Omdurman 1898) ve her yerin kendi tarihi var. 19'unu tek güne toplamak,
bugün altı kez eleştirdiğim desenin **kendi elimle tekrarı** olur.

📌 **Ama Darfur ile öbek arasındaki çelişki kasıtlı mı, karar verilmeli:**
üçü Omdurman'ı, on dokuzu condominium'u kullanıyor. İkisi de savunulabilir ama
**aynı anda ikisi birden olamaz.** Koordinatörün şema kararı — `isg:`de olduğu
gibi *"harita fiilîyi boyar"* denirse öbeğin tamamı 1898-09-02'ye gider ve
Dongola 1896'da ayrışır.

---

# V) `1841-02-25` — koordinatörün tahmini doğru: YER TUTUCU

## V.1 Kapsam — 17 yerleşim, 20 dönem sınırı

`1841-02-25`, üç ayrı coğrafyada 17 kayıtta duruyor:
· **Suriye-Filistin (10):** Şam · Halep · Hama · Kudüs · Nablus · Gazze · Yafa · Urfa · Antakya
· **Adana-Çukurova (3):** Adana · Tarsus · Maraş
· **Girit (5):** Hanya · Kandiye · Resmo · Sitiye · İsfakiye (ayrıca 3 `d:` başlangıcı)

## V.2 🔴 TDV'DE ŞUBAT 1841 FERMANI YOK

**`kavalali-mehmed-ali-pasa`** ✅ 1840-41 zincirini veriyor ama **`1841-02-25`'i
hiç anmıyor:**
> Londra Antlaşması **15 Temmuz 1840** · Akkâ **4 Kasım 1840** düştü ·
> Amiral Napier'le anlaşma **27 Kasım 1840** (Suriye'yi boşaltma taahhüdü)
> Adana'nın iadesi: **tarih yok** · Girit'in dönüşü: **tarih yok**
> *"1841 için anılan tek ferman **24 Mayıs 1841**"*

⇒ **`1841-02-25` kaynaksızdır** — `1899-01-19` ile aynı sınıf: tek bir gün, üç
ayrı coğrafyanın kademeli devri için yer tutucu olarak kullanılmış.
📌 Veri zaten kademeyi kısmen tanıyor: Beyrut/Sayda/Trablusşam **1840-10-10**,
Akkâ **1840-11-03**. Yani kıyı ayrı, iç bölge tek güne toplanmış.

## V.3 ✅ İKİ SOMUT DÜZELTME

**1. Akkâ `1840-11-03` → `1840-11-04`** — TDV: *"**4 Kasım**'da Akkâ düştü."*
Tek kayıt, tek gün. Kaynaklı, güvenli.

**2. Girit'in 5 kaydı — sourced alternatif var**
**TDV `girit`** ✅: Mehmed Ali *"**15 Temmuz 1840** tarihinde Londra Antlaşması
gereğince bu ada üzerindeki **tasarruf hakkını kaybetti**"*
⇒ Girit için kaynaklı tarih **`1840-07-15`**, `1841-02-25` değil.
⚠️ **Ama bu hukukî tarihtir.** Aynı madde, devrin fiilî tarafını da söylüyor:
*"Girit eyaleti… Mehmed Ali Paşa'nın Girit'teki muhafızı bulunan **Mustafa
Paşa**'ya verildi"* — yani **aynı kişi yerinde kaldı**, fiilî devir günü yok.
⇒ Sevâkin ve Sudan'daki ayrımın aynısı. **Karar koordinatörün:** harita fiilîyi
boyuyorsa ve fiilî gün bilinmiyorsa `1841-02-25` yer tutucu olarak kalabilir;
hukukî tercih edilirse `1840-07-15` kaynaklıdır.

## V.4 ⚠️ SURİYE VE ADANA — TAŞIMIYORUM

10 + 3 kayıt için **fiilî tahliye tarihi TDV'de yok.** Elimde yalnız Napier
anlaşması (**27 Kasım 1840**, *taahhüt*) var — tahliyenin **başlangıcı**, bitişi
değil.
🔴 **Sudan'da 18 kaydı taşımayı reddettiğim gerekçenin aynısı geçerli:** tek
kaynaksız günü başka tek günle değiştirmek, yığını yığınla değiştirmektir.
⇒ **`1841-02-25` kalsın, yer tutucu diye işaretlensin.**

📌 Koordinatörün `1899-01-19` için yazdığı yorum bloğunun kardeşi buraya da
gerekiyor: *"Bu 17 kayıttaki `1841-02-25` fiilî değil yer tutucudur; TDV'de
Şubat 1841 fermanı yoktur. Kademeli devir: Beyrut-Sayda-Trablusşam 1840-10-10 ·
Akkâ 1840-11-04 · Napier taahhüdü 1840-11-27 · Girit'in hukukî kaybı
1840-07-15. Her kayıt tek tek kaynaklanmadan değiştirilmemeli."*

---

# W) KEVKEBÂN — YER DİZİNİ'nin (U4) bildirdiği eksik nokta

## W.1 Bulgu doğrulandı

`olaylar_ek5.js` · `1567-04-01` *"Yemen isyanı ve Koca Sinan Paşa'nın Yemen
seferi"* · `yer:"Yemen – San'a, **Kevkebân**"` — ve `girdi.yukle` içinde
**Kevkebân kaydı YOK.** U4'ün tespiti doğru.

## W.2 ✅ Sahiplik zinciri TDV'den tam çıkıyor

**TDV `kevkeban`** ✅ CANLI, dolu madde (`<title>` = "KEVKEBÂN - TDV İslâm
Ansiklopedisi"):
> **1506** (912): Yahyâ Şerefeddin imâmetini ilan etti, **Kevkebân'ı merkez
> edindi** — Şerefeddinî hânedanının başşehri, XVI-XIX. yüzyıl
> **1569** (977): **Koca Sinan Paşa** dokuz aylık kuşatmadan sonra aldı
> **~1598**: İmam Kāsım'ın ayaklanmasıyla kaybedildi
> **1872**: **Ahmed Muhtar Paşa** yedi aylık kuşatmadan sonra geri aldı

Önerilen dönem dizisi (`Sana`nın kalıbıyla):
```js
s:[{f:"1281-01-01", t:"1569-01-01", d:"yemen"},
   {f:"1598-01-01", t:"1872-04-01", d:"yemen"},
   {f:"1918-10-30", t:"1923-10-29", d:"yemen"}]
d:[{f:"1569-01-01", t:"1598-01-01", y:"kusatma"},
   {f:"1872-04-01", t:"1918-10-30", y:"kusatma"}]
```
⚠️ Gün/ay yok → `-01-01`. 1872 için Sana'nın `1872-04-01`i kullanılabilir
(aynı sefer, `yemen` maddesinde tarihli).

## W.3 🔴 ENGEL: KOORDİNAT YOK — ve TDV'nin yön bilgisi ŞÜPHELİ

Bir yerleşim kaydı `lat`/`lon` ister. **TDV koordinat vermiyor.** Verdiği tek
konum ipucu:
> *"Yemen'de **San'a'nın kuzeydoğusunda**"*

⚠️ **Bu ipucu bende şüphe uyandırıyor:** Kevkebân'ı Şibâm'ın yanında, San'a'nın
**kuzeybatısında** biliyorum. TDV "kuzeydoğu" diyor. **İkisinden hangisinin
doğru olduğunu ölçemiyorum** ve `§4` gereği TDV'yi kendi hatırladığımla
düzeltmem.

⇒ **Nokta eklemeyi ÖNERMİYORUM** — §T.1'de Zübâre için verdiğim kararın aynısı,
ama sebebi farklı: orada **tarih** yoktu, burada **konum** yok.
🔴 Ve konum hatası bu projede özellikle pahalı: yanlış yere konan bir nokta
**peteğiyle yüzlerce km² boyar** ve hata "veri var" görüntüsü altında saklanır.

**Gereken:** coğrafî bir kaynaktan koordinat. `veri-kaynak/` altındaki Natural
Earth kümesi ya da KAYNAK oturumu çözebilir. Koordinat gelirse §W.2'deki zincir
**hazır**, kayıt tek adımda yazılır.

## W.4 📌 Yan tespit — madde tarihi ile TDV çelişiyor olabilir

Madde `1567-04-01` diyor, TDV Kevkebân'ın alınışını **1569** veriyor. İkisi
çelişmiyor olabilir (sefer 1567'de başlar, Kevkebân 1569'da düşer) ama
**maddenin `yer:` alanında Kevkebân sayılıyor.** Kevkebân noktası eklenirse
`1569` kırılması **1567 maddesinden 2 yıl uzakta** kalır ⇒ Değişmez 2 açık verir.
⇒ Nokta eklenirse **ayrı bir madde** gerekir: *"Kevkebân'ın dokuz aylık
kuşatmadan sonra alınması (1569)"*. Pakete yazılmalı.

---

# X) UYGULAMA SONRASI DOĞRULAMA — kendi paketimi ölçtüm

YAMACI Hicaz paketini uyguladı. Her kırılmanın **hangi maddeyle** eşleştiğini
ölçtüm (yalnız "madde var mı" değil).

## X.1 ✅ 34 kırılmanın 31'i temiz

Tâif · Mekke · Zebîd · Moha · Sana · Hudeyde · Cidde — hepsi **0 gün**.
Mekke'nin beş kırılması tam yerinde ve §A.3'te *zorunlu* dediğim
*"Şerif Gālib'in Mekke'yi geri alması"* maddesi **yazılmış.** ✅

## X.2 🟢 YENBU 1811 — yeni madde GEREKMİYOR, tarih düzeltmesi yeter

```
yerleşim         1811-11-01   ← kaynaksız (§A.1'de öyle işaretlenmişti)
eşleşen madde    1811-10-25   "Slobozia Bozgunu — Tuna ordusunun kuşatılması"  (7 gün)
gerçek madde     1811-09-03   "Hicaz seferi başladı: Tosun Paşa Yenbu'ya çıktı" (59 gün)
```
`Değişmez 2` **"OK" diyor** çünkü Tuna'daki bir bozgunu yakalıyor.

> **Öneri: `1811-11-01` → `1811-09-03`.** Kronoloji zaten *"Tosun Paşa Yenbu'ya
> çıktı"* diyor — **çıkarmanın yapıldığı gün liman alınmıştır.** `1811-11-01`'in
> kaynağı yok; `1811-09-03` verinin kendi iddiası.
⇒ Tek tarih değişikliği sessiz kırılmayı kapatır, **madde borcu doğurmaz.**
§A.2'de "zorunlu yeni madde" demiştim — **gerekmiyormuş**, düzeltiyorum.

## X.3 🔴 MEDİNE — veri taşındı, MADDE TAŞINMADI

```
yerleşim 1805-06-01 ✅ uygulandı  ↔  madde 1805-07-01 "Vehhâbîlerin Medine'yi işgali"  30 gün
yerleşim 1812-12-03 ✅ uygulandı  ↔  madde 1812-11-08 "Medine geri alındı"             25 gün
```
İkisi de **aynı olayın maddesi**, yalnız eski tarihte kalmışlar. Denetim
`1805-06-01`'i *"Kahire ulemâsı Mehmed Ali'yi vali ilan etti"* ile eşleştiriyor.

⇒ **U1'e:** `1805-07-01`→**`1805-06-01`** · `1812-11-08`→**`1812-12-03`**

⚠️ **Bu benim eksiğimdi.** §A.1'de yerleşim tarihlerini önerdim, §A.3'te Tâif ve
Mekke'nin madde tarihlerini de listeledim — **Medine'yi atladım.** Paketin
yarısı uygulanınca ortaya çıktı.

## X.4 ⚠️ YENBU 1805-07-20 — açık borç, çözüm önermiyorum

Vehhâbîlerin Yenbu'yu alışının **maddesi yok**; denetim *"Bâbıâli oldubittiyi
kabul etti"* ile eşleştiriyor (17 gün). Tarih de kaynaksız. **TDV Yenbu için
yalnız yıl veriyor** ⇒ ne tarihi düzeltebiliyorum ne madde metnini
kaynaklandırabiliyorum.

## X.5 📌 İKİ UYGULANABİLİR KURAL

**1.** Bir paket uygulandıktan sonra kırılmaların **eşleştiği MADDE ADI**
okunmalı. *"±30'da madde var mı"* yetmiyor — bugün üç kırılma "OK" verdi ve
üçünde de yanlış madde vardı: **Tuna bozgunu · Kahire ulemâsı · Mısır fermanı**,
üçü de Hicaz'la ilgisiz.

**2.** **Veri tarihi taşınırken, o tarihe bağlı MADDENİN de taşınması gerekip
gerekmediği aynı pakette sorulmalı.** Medine'de bu soru sorulmadığı için iki
madde 25-30 gün geride kaldı — ve `Değişmez 2` bunu göremez, çünkü madde
"var"dır.

---

# Y) `ittifak` TARAMASI — ve kendi yöntemimdeki kusur

## Y.1 🔴 YÖNTEM HATASI: dış liste ile bizim veri AYNI OLAYA FARKLI AD veriyor

İlk turda beş adayı *"bizde yok"* diye raporladım. **Biri yanlıştı:**

```
dış liste       "1376 — Bizans ile İttifak"
bizim veri      "1376-09-01  Gelibolu'nun geri alınışı"     ← AYNI OLAY
```
Ben **karşı tarafın adıyla** aradım (`Bizans`, `Ioannis`, `Andronikos`); bizim
madde **yerin adıyla** yazılmış. Anahtar kelime eşleşmedi, *"yok"* dedim.

⚠️ Aynı sebeple Gelibolu'nun 1366 kaybı ve 1376 geri alınışının **veride zaten
modellendiğini** de kaçırmıştım — üçü de (Gelibolu · Çimpe · Bolayır) `s:"bizans"`
1366-08-01 → 1376-09-01 dönemi taşıyor ve **iki maddesi de var.**

> **Kural: dış kaynakla karşılaştırma anahtar kelimeyle YAPILMAZ.**
> İki kaynak aynı olayı farklı adlandırır — biri tarafla (*"Bizans ile ittifak"*),
> öteki yerle (*"Gelibolu'nun geri alınışı"*), öteki sonuçla.
> **Doğrusu: tarih penceresi alınır ve penceredeki BÜTÜN maddeler okunur.**

📌 Bu, DENETÇİ'nin `§19` ad-eşleştirme dersinin **kaynaklar arası** hâli. Ve yedi
başlığın hepsinde tekrarlanacak — Danişmend'de *"Kabakçı Mustafa isyanı"* diye
geçen olay bizde *"III. Selim tahttan indirildi"* olabilir.

## Y.2 Düzeltilmiş tablo (pencere okumasıyla)

| Aday | Durum |
|---|---|
| **1352 Ceneviz ittifakı** | ❌ **yok** — 1348-1356 penceresinde **3 madde** var, hiçbiri diplomatik |
| **1454 Kırım ittifakı** | ❌ **yok** — 1450-1460'ta 18 madde, hepsi askerî; Kırım'la ilgili **hiç madde yok** |
| **1553 Fransa ittifakı** | ❌ **yok** — 1550-1557'de 21 madde, hiçbiri Fransa |
| 1366 Bulgaristan ittifakı | ❓ yok ama **ayrı bir olay olduğuna güvenim düşük** |
| ~~1376 Bizans ittifakı~~ | ✅ **VAR** — `Gelibolu'nun geri alınışı` (yanlış raporlamıştım) |
| 1799 üçlü ittifak | ⚠️ **kısmen** — `1798-09-03` maddesi *"Rusya-İngiltere ile ittifak"*ı başlıkta anıyor |

⇒ **Sağlam eksik: üç.** Beş değil.

## Y.3 📌 Pencere okumasının yan bulgusu — erken dönem gerçekten seyrek

`1348-1356` penceresinde **dokuz yılda üç madde** var (Çimpe · Gelibolu · Ankara).
Koordinatörün dilim ölçümü *"yalnız 1275-1299 seyrek"* diyordu; **1348-1356 de
seyrek** ve bu dilim ölçümünde görünmüyor çünkü 25 yıllık dilimler bunu
ortalıyor. ⚠️ **Ölçmedim** — yalnız bir pencerede gördüm, genelleme yapmıyorum.

## Y.4 ⚠️ Doğrulama YAPILAMADI — `kirim-hanligi` ölü slug

Üç sağlam eksiği TDV'de doğrulamaya başladım, ilk denemede takıldım:
**`kirim-hanligi` ❌ ÖLÜ** (`<title>` = "Arama - TDV İslâm Ansiklopedisi",
*"madde başlıklarında sonuç bulunamadı"*). Doğru slug aranmalı.

⇒ **Üç adayın hiçbiri henüz doğrulanmadı; madde önerisi YAZMIYORUM.**
Sıradaki adım: doğru slug'ları bulup üçünü TDV'de aramak. Bulunmayan
**"kaynak yok" diye işaretlenip bırakılacak** — `func`ta ve Zübâre'de olduğu gibi.

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

---

# Z. `etiket:` — YEDİ BAŞLIK · ölçüm, öneri ve ÜÇ YAPISAL BULGU

> Koordinatörün 2. kalemi. Kendi gerekçemle ittifaktan önce yapıldı: *elde ne
> olduğunu bilmeden dışarıdan gelenle karşılaştırılamaz.*
> **Bu bölüm veri dosyasına DOKUNMAZ** — uygulama YAMACI'nın.

## Z.1 Mevcut durum — ölçüldü

`data/olaylar*.js` → **997 madde, 997'sinde `etiket:` alanı var. Eksik yok.**
Sayı iki bağımsız yolla tutuyor: `grep -c 'etiket:'` toplamı 997, kayıt bazlı
ayrıştırıcı 997. *(Ayrıştırıcı çapraz doğrulaması — §5'teki üç ayrıştırıcı
hatasından sonra artık her sayım iki yolla alınıyor.)*

Kullanımdaki `etiket:` sözlüğü (997 madde, çok değerli):

| etiket | adet | | etiket | adet |
|---|---:|---|---|---:|
| `savas` | 339 | | `ekonomi` | 88 |
| `toprak-kazanc` | 299 | | `kultur-sanat` | 57 |
| `siyaset` | 247 | | `bilim` | 43 |
| `toprak-kaybi` | 174 | | **`ittifak`** | **36** |
| `diplomasi` | 145 | | `diger` | 25 |
| `antlasma` | 104 | | `denizcilik` | 11 |
| `ayaklanma` | 89 | | `saray` | 7 |

**Yedi başlığın karşılığı:**

| istenen başlık | `etiket:`te | durum |
|---|---|---|
| `ittifak` | ✅ 36 | var, genişletilecek |
| `ayaklanma` | ✅ 89 | var |
| `taht` | ❌ yok | `k:"taht"` 12 var, `etiket:` yok |
| `darbe` | ❌ yok | `k:"darbe"` 9 var — **ama ikisi yanlış anlamda, bkz. Z.5** |
| `hanedan` | ❌ yok | hiçbir katmanda yok |
| `ic-savas` | ❌ yok | hiçbir katmanda yok |
| `dis-savas` | ❌ yok | `savas` 339 var ama **iç/dış ayrımı yapmıyor** |

## Z.2 📌 YÖNTEM — anahtar kelime aday üretir, KARARI İÇ DİZİN VERİR

§Y'deki 1376 dersini bu işe uyguladım ve **iki kere daha aynı hataya düşmekten
kurtardı**:

**1)** `taht` için anahtar kelime taraması 69 aday verdi ve içinde **V. Murad,
Mehmed Reşad, Vahdeddin'in cülûsu yoktu.** "Üç cülûs eksik" diye rapor edecektim.
Tarih penceresiyle bakınca üçü de **veride var** — sadece madde başlıkları benim
kelime listemle eşleşmiyordu.

**2)** `ic-savas` için `fetret` kelimesi 22 aday verdi; **çoğu Fetret Devri'nde
geçen sıradan fetihlerdi** ("Amasya'nın katılması", "Konya kuşatması"). Kelime
madde metninde değil, dönem adında geçiyor. Bu başlık kelimeyle değil
**tarih aralığıyla** (1402-07-28 → 1413-07-05) çözülür.

> **Kural:** iç veri için ölçüt **dış liste değil, kendi dizinlerimizdir.**
> `padisahlar.js` "tüm cülûslar"ı, `savaslar.js` "tüm savaşlar"ı zaten tanımlıyor.
> Dış kaynağa ancak bunlar tükendikten sonra gidilir.

## Z.3 ✅ CÜLÛS DENETİMİ — `padisahlar.js` × kronoloji

41 saltanat kaydının **her `from:` tarihinin ±45 gün penceresi** okundu
(`padisahlar.js` ay hassasiyetinde, o yüzden pencere 30 değil 45).

**Sonuç: 39/41 cülûsun maddesi VAR. İki boşluk:**

| # | saltanat | tarih | pencerede |
|---|---|---|---|
| **Z.3-a** | **II. Murad (1. saltanat)** | `1421-06` | 🔴 **hiç madde yok** |
| **Z.3-b** | **II. Murad (2. saltanat)** | `1446-09` | 🔴 **hiç madde yok** |

Saltanat **sonları** da ayrıca tarandı; aynı iki an çıktı:
`I. Mehmed (Çelebi)` sonu `1421-05` ve `II. Mehmed 1. saltanat` sonu `1446-09`.
Yani **iki boşluk değil, İKİ OLAY**:

- **1421 — Çelebi Mehmed'in ölümü ve II. Murad'ın cülûsu.** Kronolojide
  1421 yılında hiçbir madde yok; en yakın komşular 1419 ve 1425.
- **1446 — II. Mehmed'in ilk saltanatının sonu ve II. Murad'ın dönüşü.**

### 🔴 Z.3-c — İKİ KENDİ DOSYAMIZ ÇELİŞİYOR (1446)

1446 için kronolojide **madde var ama tarihi tutmuyor**:

```
data/olaylar*.js   1446-05-05  "Buçuktepe Vak'ası — ilk yeniçeri ayaklanması
                                ve II. Murad'ın tahta dönüşü"
data/padisahlar.js 1446-09     II. Murad (2. saltanatı) from:
```
**Fark 119 gün.** Aynı olayı iki dosyamız dört ay arayla yazıyor. Biri yanlış.
Hangisi olduğunu **TDV'ye bakmadan söylemiyorum** — Z.9'da doğrulama işi olarak
duruyor. Uygulayıcı bu ikisinden birini "doğru" sayıp ötekini düzeltmeden
`taht` etiketini işlemesin.

## Z.4 ✅ SAVAŞ DENETİMİ — `savaslar.js` × kronoloji

170 savaş kaydının her biri ±30 gün (gün hassasiyeti yoksa ±60) penceresiyle
tarandı. **12'si penceresiz çıktı — ama 8'i YANILSAMA.**

### 8 yanılsama: dizin kuşatmanın BAŞINI, kronoloji SONUCUNU yazıyor

| savaslar.js | kronoloji | fark |
|---|---|---|
| `1480-05-23` Rodos kuşatması | `1480-07-28` Rodos kuşatmasının başarısızlığı | +66 g |
| `1511-03-01` Şahkulu (Teke) | `1511-04-01` Şahkulu isyanının başlaması | +31 g |
| **`1522-06-26` Rodos kuşatması** | `1522-12-21` Rodos'un fethi | **+178 g** |
| `1538-02-03` Diu kuşatması | `1538-06-13` Hint Okyanusu seferi: Diu kuşatması | +130 g |
| `1621-09-02` Hotin kuşatması | `1621-10-09` Hotin Seferi ve Hotin Antlaşması | +37 g |
| `1638-11-15` Bağdat kuşatması | `1638-12-24` Bağdat'ın geri fethi | +39 g |
| `1657-07-19` Çanakkale zaferi | `1657-08-25` Çanakkale zaferi ve Bozcaada | +37 g |
| **`1683-07-14` II. Viyana kuşatması** | `1683-09` II. Viyana Kuşatması bozgunu | +49 g |

Bunlar eksik madde değil. **Ama görmezden gelinecek de değil** — bkz. Z.7.

### 🔴 4 GERÇEK EKSİK — kronolojide karşılığı yok

| # | savaslar.js kaydı | en yakın madde | uzaklık |
|---|---|---|---|
| **Z.4-a** | `1509-02-03` **Diu (Portekiz)** | 1509-09-14 İstanbul depremi | 223 g, alâkasız |
| **Z.4-b** | `1526-01-01` **Kalender Çelebi** | 1526-08-29 Mohaç | 240 g, alâkasız |
| **Z.4-c** | `1603-01-01` **Deli Hasan** | 1603-10-21 Tebriz'in kaybı | 293 g, alâkasız |
| **Z.4-d** | `1620-09-17` **Cecora (Ţuţora)** | 1621-10-09 Hotin | 387 g, alâkasız |

Dördü de kullanıcının saydığı başlıklara giriyor: Diu ve Cecora **dış savaş**,
Kalender Çelebi ve Deli Hasan **ayaklanma / iç savaş**.

⚠️ **Madde metnini YAZMIYORUM** — dördü de TDV'de doğrulanmadan yazılmaz.
`1526-01-01` ve `1603-01-01` zaten `YYYY-01-01` yer tutucusu (§4: "yıl biliniyor,
gün bilinmiyor"), yani dizindeki tarihin kendisi de doğrulanmalı.
*Kalender Çelebi isyanının 1526 mı 1527 mi olduğu ayrıca sorulacak.*

**`ANTLASMALAR` dizini: 31/31 tam. Boşluk yok.** ✅

## Z.5 🔴 `k:"darbe"` İKİ AYRI ANLAMDA KULLANILMIŞ

9 `k:"darbe"` kaydının **en az ikisi hükümet darbesi değil**, Türkçedeki öbür
anlamda ("ağır darbe, sarsıntı"):

| kayıt | gerçekte ne |
|---|---|
| `1839-07-14` Donanmanın İskenderiye'ye teslimi | **firar/teslim** — darbe değil |
| `1683-12-25` Merzifonlu Kara Mustafa Paşa'nın idamı | **idam** — darbe değil |

Kalan 7'si (1648 · 1687 · 1703 · 1811 · 1876 · 1878 · 1913) gerçek darbe.

Bu, DENETÇİ'ye bildirdiğim **üç otorite ayrışması**nın yeni bir örneği: `k:`
sözlüğünde tanımsız bir terim, iki farklı yazarın elinde iki farklı anlam
kazanmış. `etiket:"darbe"` işlenirken `k:"darbe"` **otomatik kopyalanamaz.**

## Z.6 🔴 MÜKERRER ADAYI — 1622 Genç Osman İKİ MADDE

```
1622-05      k:isyan      "II. Osman'ın katli (Hâile-i Osmâniye)"
1622-05-20   k:ayaklanma  "Genç Osman'ın yeniçeriler tarafından katledilmesi"
```
Aynı olay, iki madde. Üstelik biri **ay hassasiyetinde** (`1622-05`) — CLAUDE.md §8
"gün yaz" kuralının ihlali; ayın 1'ine genişleyip 19 gün önce sıralanıyor.

📌 **DENETÇİ'ye:** bu, mükerrer madde denetiminin (±400 gün + Türkçe kök, eşik
0.34) **yakalaması gereken** bir vaka — "II. Osman'ın katli" ↔ "Genç Osman'ın …
katledilmesi". Yakalıyor mu, yoksa "Osman" ortak kökü eşiği geçmeye yetmiyor mu?
**Bu iyi bir kabul testi.**

## Z.7 📌 DENETÇİ'ye — Değişmez 2'nin GÖRMEDİĞİ bir senkron sınıfı

Değişmez 2, `yerlesimler.js` kırılmalarını kronolojiye bağlar. **`savaslar.js`
kayıtlarını hiçbir denetim kronolojiye bağlamıyor.** Oysa savaş kaydı da haritada
görünüyor — `lat/lon` ile **⚔ işareti ~2 yıl boyunca** çiziliyor
(`savaslar.js` başlığındaki açıklama).

Sonuç: Rodos 1522'de ⚔ işareti haritada **26 Haziran'da** beliriyor, kronolojideki
"Rodos'un fethi" maddesi **21 Aralık'ta** akıyor. **178 gün boyunca kullanıcı
sebebi anlatılmayan bir kılıç görüyor** — Değişmez 2'nin tam da önlemek için var
olduğu şey, ama denetimin kör noktasında.

**Öneri:** `denetle.py`'ye 7. kontrol — *her `SAVASLAR` kaydının ±30 gün içinde
maddesi var mı?* Bugünkü ölçüm: **170'in 158'i geçer, 12'si kalır** (8'i yukarıdaki
başlangıç/sonuç kayması, 4'ü gerçek eksik). Eşiği tanımlarken kuşatmalar için
"başlangıç mı sonuç mu" kararı önce verilmeli — yoksa denetim 8 kalıcı gürültüyle
doğar.

## Z.8 Sözlük hijyeni — 4 tekil yazım hatası

| yanlış | adet | doğrusu | adet |
|---|---:|---|---:|
| `toprak-kazanci` | 1 | `toprak-kazanc` | 299 |
| `isyan` | 3 | `ayaklanma` | 89 |
| `idari` | 1 | `idare` | 2 |
| `yikim` | 1 | — (tek kullanım, `diger`?) | |

Tekil kalanlar filtrelemede sessizce düşüyor. Ucuz düzeltme, ama **veri dosyasına
yazmak YAMACI'nın işi.**

## Z.9 Sırada ne var — `etiket:` önerisinin kendisi

Yukarıdakiler ölçüm ve boşluk raporu. **Asıl teslim — hangi maddeye hangi etiket —
henüz tamam değil.** Bugün bitmiş kısmı:

- `taht` · 69 aday okundu, **40'ı gerçek cülûs** olarak ayıklandı (29'u yanlış
  pozitif: "saltanat" kelimesi geçen fetih maddeleri, şehzade idamları, vefatlar).
- `darbe` · 79 aday okundu, **7 kesin + 6 tartışmalı** (Beylerbeyi Vakası, Çınar
  Vak'ası, Vak'a-i Hayriyye, 31 Mart, II. Meşrutiyet, Yıldız Suikastı — bunlar
  "darbe mi ayaklanma mı" sorusunun cevabına bağlı ve **bu bir tanım kararı,
  araştırma bulgusu değil**; koordinatör karar vermeli).
- `hanedan` · `ic-savas` · `dis-savas` — henüz ayıklanmadı.

**Koordinatöre soru:** `darbe` ile `ayaklanma`nın sınırını nereye çekiyoruz?
Tanım verilirse listeyi tek turda bitiririm; verilmezse 13 maddeyi "tartışmalı"
diye işaretleyip geçerim.

---

# AA. `etiket:` TESLİMİ — dört başlık işlendi, `dis-savas` ölçütü yazıldı

> Koordinatörün tanım kararından sonra. **Çok değerli alan** — sınırda kalan
> maddeye *iki etiket birden* verilir, "tartışmalı" diye işaretlenmez.
> **Bu bölüm veri dosyasına DOKUNMAZ** — uygulama YAMACI'nın.

Uygulanan tanımlar:
```
ayaklanma : otoriteye karşı SİLAHLI kalkışma — sonucu ne olursa olsun
darbe     : YAPININ İÇİNDEKİLERİN eylemiyle hükümdarın/hükümetin FİİLEN DEĞİŞMESİ
taht      : bir hükümdarın tahta çıkışı (cülûs) — Osmanlı ve yabancı
hanedan   : hanedan üyeleri arasında veraset mücadelesi
ic-savas  : aynı devletin tebaası arasında SÜREKLİ silahlı çatışma
```

## AA.0 🔴 ÖNCE OKU — uygulama kuralı

1. **`k:` → `etiket:` OTOMATİK KOPYALANMAZ.** §Z.5: `k:"darbe"` iki ayrı anlamda
   kullanılmış. Aşağıdaki liste elle ayıklandı; betikle üretilmedi.
2. **Etiket EKLENİR, mevcut etiketler SİLİNMEZ.** Hepsi çok değerli alana ek.
3. Eşleştirme **`t:` + `b:` ile** yapılır, satır numarasıyla değil.
4. `1446-05-05` maddesine `taht` işlenmeden önce **AA.5'teki çelişki çözülmeli.**

---

## AA.1 `taht` — 40 madde

**Osmanlı cülûsları (33):**

| `t:` | madde | eklenecek |
|---|---|---|
| `1320-01-01` | Orhan Bey'in fiilî yönetimi devralması | `taht` |
| `1362-03` | I. Murad tahta çıktı | `taht` |
| `1413-07` | Çelebi Mehmed birliği yeniden kurdu | `taht` `ic-savas` `hanedan` |
| `1446-05-05` | Buçuktepe Vak'ası — II. Murad'ın tahta dönüşü | `taht` `darbe` `ayaklanma` ⚠️AA.5 |
| `1451-02-18` | II. Murad'ın vefatı ve II. Mehmed'in ikinci cülûsu | `taht` |
| `1481-05-22` | II. Bayezid'in İstanbul'da cülûsu | `taht` |
| `1481-05-28` | Cem Sultan'ın Bursa'da kendini sultan ilan etmesi | `taht` `hanedan` `ic-savas` |
| `1512-04-24` | II. Bayezid'in tahttan çekilişi ve Yavuz'un cülûsu | `taht` `darbe` |
| `1520-09-30` | Kanunî Sultan Süleyman tahta çıktı | `taht` |
| `1566-09-24` | II. Selim İstanbul'a ulaşıp cülus etti | `taht` |
| `1574-12-22` | II. Selim'in vefatı ve III. Murad'ın cülûsu | `taht` |
| `1595-01-16` | III. Murad'ın vefatı ve III. Mehmed'in cülûsu | `taht` |
| `1595-01-27` | III. Mehmed tahta çıktı, on dokuz şehzade boğduruldu | `taht` `hanedan` |
| `1603-12-22` | III. Mehmed'in vefatı ve I. Ahmed'in cülûsu | `taht` |
| `1617-11-22` | I. Ahmed'in ölümü ve I. Mustafa'nın cülûsu — ekberiyet | `taht` `hanedan` |
| `1618-02-26` | I. Mustafa'nın hal'i ve Genç Osman'ın cülûsu | `taht` `darbe` |
| `1622-05-21` | I. Mustafa'nın ikinci kez tahta çıkarılması | `taht` `darbe` |
| `1623-09-10` | I. Mustafa'nın ikinci hal'i ve IV. Murad'ın cülûsu | `taht` `darbe` |
| `1640-02-08` | IV. Murad'ın ölümü ve Sultan İbrahim'in cülûsu | `taht` |
| `1648-08-09` | IV. Mehmed'in yedi yaşında cülusu | `taht` `darbe` |
| `1687-11-08` | IV. Mehmed'in hal'i ve II. Süleyman'ın cülûsu | `taht` `darbe` |
| `1691-06-23` | II. Ahmed'in tahta çıkışı | `taht` |
| `1695-02-06` | II. Mustafa'nın cülusu | `taht` |
| `1703-08-22` | Edirne Vakası — II. Mustafa'nın hal'i | `taht` `darbe` `ayaklanma` |
| `1730-10-02` | III. Ahmed'in tahttan çekilmesi, I. Mahmud'un cülusu | `taht` `darbe` |
| `1754-12-13` | I. Mahmud'un ölümü ve III. Osman'ın cülûsu | `taht` |
| `1757-10-30` | III. Osman'ın ölümü ve III. Mustafa'nın cülûsu | `taht` |
| `1774-01-21` | III. Mustafa'nın ölümü ve I. Abdülhamid'in cülûsu | `taht` |
| `1789-04-07` | III. Selim tahta çıktı | `taht` |
| `1807-05-30` | IV. Mustafa tahta çıktı | `taht` `darbe` |
| `1808-07-29` | II. Mahmud tahta çıktı | `taht` `darbe` |
| `1839-07-01` | II. Mahmud'un ölümü, Abdülmecid'in cülûsu | `taht` |
| `1861-06-25` | Abdülmecid'in vefatı ve Sultan Abdülaziz'in cülûsu | `taht` |
| `1876-05-30` | Abdülaziz'in hal'i *(V. Murad'ın cülûsu bu maddede)* | `taht` `darbe` |
| `1876-08-31` | V. Murad'ın hal'i ve II. Abdülhamid'in cülûsu | `taht` `darbe` |
| `1909-04-27` | II. Abdülhamid'in hal'i: V. Mehmed Reşad'ın cülûsu | `taht` `darbe` `ayaklanma` |
| `1918-07-03` | V. Mehmed Reşad'ın vefatı ve VI. Mehmed Vahdeddin'in cülûsu | `taht` |

**Yabancı hükümdar cülûsları (3):**

| `t:` | madde | eklenecek |
|---|---|---|
| `1501-07-01` | Şah İsmail'in Tebriz'i alması: Safevî Devleti'nin kuruluşu | `taht` |
| `1516-10-10` | Tomanbay'ın Kahire'de Memlük sultanı ilân edilmesi | `taht` |
| `1736-03-08` | Nadir Şah'ın Mugan Sahrası'nda tahta çıkışı | `taht` `hanedan` |

### ⚠️ `taht` verilmeyecek 29 yanlış pozitif — sebebiyle

Kelime taraması bunları getirdi; **hiçbiri cülûs değil.** Uygulayıcı listeyi
genişletmesin diye sebepleri yazıyorum:

- **"saltanat" kelimesi geçen fetih/antlaşma maddeleri (9):** `1484-07-15` Kili ·
  `1502-12-14` Venedik barışı · `1521-07-07` Böğürdelen · `1550-06-01` Süleymaniye ·
  `1735-03-10` Gence · `1803-02-01` Tâif · `1808-10-07` Sened-i İttifak ·
  `1877-06-27` Tuna · `1790-01-31` Prusya İttifakı
- **Hükümdar ÖLÜMÜ, cülûs değil (5):** `1403-03-09` Yıldırım · `1512-05-26`
  II. Bayezid · `1566-09-07` Zigetvar · `1871-09-07` Âlî Paşa · `1808-07-28` III. Selim
- **Şehzade idamları — `hanedan`a gider (4):** `1513-04-24` Ahmed · `1553-10-05`
  Mustafa · `1562-07-23` Bayezid · `1651-09-02` Kösem Sultan
- **Öteki (11):** `1402-08-01` şehzadelerin bölünmesi · `1411-02-17` Emîr Süleyman ·
  `1421-08-15` Düzmece Mustafa · `1481-05` Cem Sultan olayı · `1482-01-01` Zeta ·
  `1559-05-30` Konya Şehzâdeler · `1622-05-20` Genç Osman'ın katli · `1695-02-11`
  sefer kararı · `1789-04` Nizâm-ı Cedîd · `1808-07-19` Alemdar · `1832-11-22`
  Abdülkādir'e biat · `1878-05-20` Çırağan

---

## AA.2 `darbe` — 17 kesin

Koordinatörün ölçütü: **(a)** eyleyen yapının içinde mi · **(b)** hükümdar/hükümet
fiilen değişti mi. İkisi de evet.

| `t:` | madde | eklenecek |
|---|---|---|
| `1446-05-05` | Buçuktepe Vak'ası | `darbe` `ayaklanma` `taht` |
| `1512-04-24` | II. Bayezid'in tahttan çekilişi | `darbe` `taht` |
| `1618-02-26` | I. Mustafa'nın hal'i, Genç Osman'ın cülûsu | `darbe` `taht` |
| `1622-05-20` | Genç Osman'ın yeniçeriler tarafından katledilmesi | `darbe` `ayaklanma` |
| `1622-05-21` | I. Mustafa'nın ikinci kez tahta çıkarılması | `darbe` `taht` |
| `1623-09-10` | I. Mustafa'nın ikinci hal'i | `darbe` `taht` |
| `1648-08-08` | Sultan İbrahim'in hal'i ve katli | `darbe` |
| `1648-08-09` | IV. Mehmed'in yedi yaşında cülusu | `darbe` `taht` |
| `1651-09-02` | Kösem Sultan'ın öldürülmesi | `darbe` `hanedan` |
| `1687-11-08` | IV. Mehmed'in hal'i | `darbe` `taht` |
| `1703-08-22` | Edirne Vakası — II. Mustafa'nın hal'i | `darbe` `taht` `ayaklanma` |
| `1730-09-25` | Patrona Halil İsyanı | `darbe` `ayaklanma` |
| `1730-10-02` | III. Ahmed'in tahttan çekilmesi | `darbe` `taht` |
| `1807-05-25` | Kabakçı Mustafa isyanı başladı | `darbe` `ayaklanma` |
| `1807-05-29` | III. Selim tahttan indirildi | `darbe` |
| `1807-05-30` | IV. Mustafa tahta çıktı | `darbe` `taht` |
| `1808-07-19` | Alemdar Mustafa Paşa ordusuyla İstanbul'a girdi | `darbe` |
| `1808-07-29` | II. Mahmud tahta çıktı | `darbe` `taht` |
| `1876-05-30` | Abdülaziz'in hal'i | `darbe` `taht` |
| `1876-08-31` | V. Murad'ın hal'i | `darbe` `taht` |
| `1909-04-13` | 31 Mart Vakası | `darbe` `ayaklanma` |
| `1909-04-27` | II. Abdülhamid'in hal'i | `darbe` `taht` `ayaklanma` |
| `1913-01-23` | Bâb-ı Âli Baskını | `darbe` |

**Darbe GİRİŞİMİ — hükümdar değişmedi, ölçüt (b) sağlanmıyor. Yine de `darbe`
verilmeli mi?** İkisini işaretliyorum, kararı koordinatöre bırakıyorum:
`1859-09-14` Kuleli Vak'ası · `1878-05-20` Çırağan Baskını (Ali Suâvi).
*Ölçüt harfiyen uygulanırsa ikisi de dışarıda kalır — ama kullanıcı "tüm darbeler"
dedi ve bunlar Osmanlı darbe tarihinin bilinen iki vakası. **Öneri:
`darbe` verilsin, çünkü ölçüt (b)'nin "fiilen" kelimesi teşebbüsü dışlamak için
değil, söylenti/plan aşamasını dışlamak için var.***

**🔴 `k:"darbe"` OLDUĞU HÂLDE `etiket:"darbe"` VERİLMEYECEK 2 kayıt** (§Z.5):
- `1839-07-14` "Donanmanın İskenderiye'ye teslimi" → firar/teslim, `darbe` değil
- `1683-12-25` "Merzifonlu Kara Mustafa Paşa'nın idamı" → idam, `darbe` değil

### 🟡 Vak'a-i Hayriyye — koordinatöre önerim

`1826-06` "Vak'a-i Hayriyye — Yeniçeri Ocağı kaldırıldı". Koordinatörün teşhisi
doğru: eyleyen **hükümdarın kendisi**, hükümet değişmiyor ⇒ ne `darbe` ne
`ayaklanma`. **Yeni etiket önermiyorum.** Sebebi: `tasfiye` tek bir olay için
sözlüğe girer ve §Z.8'de saydığım *tekil etiket* sorununu bir tane daha üretir.
Bunun yerine **mevcut `reform` + `siyaset`** yeter — `k:"reform"` zaten öyle
diyor. Kullanıcının on bir başlığından hiçbirine girmiyor olması bir eksiklik
değil, **doğru sonuç**: Vak'a-i Hayriyye bir darbe değildi.

---

## AA.3 `hanedan` — 21 madde

| `t:` | madde | eklenecek |
|---|---|---|
| `1402-08-01` | Şehzadeler arasında ülkenin bölünmesi | `hanedan` `ic-savas` |
| `1402-08-20` | Emîr Süleyman devlet hazinesiyle Rumeli'ye kaçtı | `hanedan` `ic-savas` |
| `1402-12-20` | Îsâ Çelebi Bursa'yı ele geçirdi | `hanedan` `ic-savas` |
| `1403-03-09` | Yıldırım Bayezid'in esarette ölümü | `hanedan` |
| `1403-09-01` | Ulubat çarpışması — İsa Çelebi'nin yenilgisi | `hanedan` `ic-savas` |
| `1404-03-01` | Emîr Süleyman Anadolu'ya geçti | `hanedan` `ic-savas` |
| `1405-01-01` | Yenişehir Ovası savaşı | `hanedan` `ic-savas` |
| `1406-06-01` | İsa Çelebi'nin ortadan kalkması | `hanedan` `ic-savas` |
| `1409-02-01` | Musa Çelebi Rumeli'ye geçti | `hanedan` `ic-savas` |
| `1410-02-13` | Yanbolu Savaşı — Mûsâ Çelebi Edirne'ye girdi | `hanedan` `ic-savas` |
| `1410-06-15` | Kosmidion Savaşı | `hanedan` `ic-savas` |
| `1411-02-17` | Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim | `hanedan` `ic-savas` |
| `1412-10-01` | İnceğiz Savaşı | `hanedan` `ic-savas` |
| `1413-07-05` | Çamurlu Savaşı — birliğin yeniden kurulması | `hanedan` `ic-savas` |
| `1421-08-15` | Düzmece Mustafa ayaklanması | `hanedan` `ic-savas` `ayaklanma` |
| `1481-05` | Fatih'in ölümü — Cem Sultan olayı | `hanedan` |
| `1481-06-20` | Yenişehir Muharebesi — Cem Sultan'ın yenilgisi | `hanedan` `ic-savas` |
| `1482-07-29` | Cem Sultan'ın Rodos'a sığınması | `hanedan` |
| `1495-02-25` | Cem Sultan'ın ölümü | `hanedan` |
| `1513-04-24` | Şehzade Ahmed'in Yavuz Selim'in emriyle idamı | `hanedan` |
| `1553-10-05` | Şehzade Mustafa'nın Konya Ereğlisi'nde idamı | `hanedan` |
| `1559-05-30` | Konya Şehzâdeler Muharebesi | `hanedan` `ic-savas` |
| `1562-07-23` | Şehzade Bayezid'in Kazvin'de idamı | `hanedan` |
| `1603-12-23` | Kardeş katli geleneğinin fiilen sona ermesi | `hanedan` |

**Yabancı hanedan mücadeleleri** — `hanedan` yalnız Osmanlı hanedanı mı, yoksa
her hanedan mı? Kullanıcı "tüm hanedan mücadeleleri" dedi, sınır koymadı.
Kapsanırsa şunlar da girer: `1736-03-08` Safevî hanedanının sonu · `1835-05-26`
Karamanlı hanedanının sonu · `1467-11-10` Karakoyunlu Cihan Şah'ın öldürülmesi ·
`1409-01-01` Artuklu hanedanının sonu. **Koordinatör kararı.** Ben yalnız
Osmanlı'yı kesin listeye aldım.

---

## AA.4 `ic-savas` — tarih aralığıyla çözüldü

📌 **Kelime taraması bu başlıkta ÇALIŞMIYOR** (§Z.2): `fetret` kelimesi 22 aday
verdi, çoğu Fetret Devri'nde geçen sıradan fetihlerdi ("Amasya'nın katılması",
"Konya kuşatması"). Kelime **madde metninde değil dönem adında** geçiyor.

**Yöntem:** Fetret aralığı `1402-07-28 → 1413-07-05` alındı, penceredeki
**26 maddenin tamamı okundu**, hangisinin taraflarının ikisi de Osmanlı hanedanına
mensup olduğuna bakıldı. Sonuç: **14'ü `ic-savas`** (AA.3 tablosunda işaretli),
12'si değil.

**`ic-savas` VERİLMEYEN 12 Fetret maddesi — sebebiyle:**
- **Timur'un eylemleri (4):** `1402-07-28` Ankara Savaşı · `1402-09-15` beyliklerin
  yeniden kurulması · `1402-12-14` İzmir · `1403-03-15` Timur'un çekilmesi
  → bunlar `dis-savas`. *Ankara Savaşı Fetret'i başlatır ama kendisi bir dış savaştır.*
- **Yabancıyla antlaşma (2):** `1403-06-01` Süleyman Çelebi–Bizans ·
  `1403-06-15` Gelibolu Antlaşması → `antlasma` `diplomasi`
- **Yabancıya karşı harekât (3):** `1406-10-21` Kara Yusuf · `1408-06-01` Sivas'ın
  Timurlu'dan alınışı · `1411-06-01` Musa Çelebi'nin İstanbul kuşatması → `dis-savas`
- **Toprak/idare (3):** `1402-08-17` Saruhanoğulları · `1409-01-01` Artuklu ·
  `1413-07` birliğin kurulması *(bu `taht`+`hanedan`, çatışma değil sonucu)*

**Fetret dışındaki `ic-savas` (4):** `1421-08-15` Düzmece Mustafa · `1481-05-28` ve
`1481-06-20` Cem Sultan · `1559-05-30` Konya Şehzâdeler.

⚠️ **Celâlî isyanları henüz taranmadı.** `1596-1610` kuşağı `ic-savas` sayılır mı,
yoksa büyük `ayaklanma` mı — ve §Z.4'teki iki eksik olay (`1603` Deli Hasan,
`1526` Kalender Çelebi) tam bu kuşağa düşüyor. Ayrı tur.

---

## AA.5 🔴 1446 ÇELİŞKİSİ ÇÖZÜLMEDEN `taht` İŞLENMEZ

```
data/olaylar*.js   1446-05-05  "Buçuktepe Vak'ası — II. Murad'ın tahta dönüşü"
data/padisahlar.js 1446-09     II. Murad (2. saltanatı) from:
                   119 gün fark
```
İki kendi dosyamız aynı olayı dört ay arayla yazıyor. **TDV doğrulaması yapılmadı**
— hangisinin doğru olduğunu söylemiyorum. Uygulayıcı biri "doğru" seçilmeden
`1446-05-05`'e `taht` işlemesin; yoksa yanlış tarih **etiketle mühürlenmiş** olur.

---

## AA.6 ⭐ `dis-savas` ÖLÇÜTÜ — başlamadan önce, koordinatörün istediği gibi

339 `savas` etiketli madde var ve **hiçbiri iç/dış ayrımı yapmıyor.** Ölçüt
yazılmadan taramaya başlamıyorum.

### Önerilen ölçüt — kendi verimizden okunur, yorum gerektirmez

> **Bir çatışma `dis-savas`tır** ⇔ olayın tarihinde karşı taraf, `devletler.js`'te
> kendi `f`/`t` ömrü olan bir devlettir **ve** o tarihte Osmanlı hâkimiyetinde
> (`d:` ya da `v:`) değildir.
> **`ic-savas`tır** ⇔ her iki taraf da o tarihte aynı devletin hâkimiyetindedir.

Bu ölçüt §Z.2'deki kuralın doğrudan uygulaması: **karar dış listeden değil kendi
dizinlerimizden okunuyor**, ve `yerlesimler.js` + `devletler.js` ile
**makinede sınanabilir.**

**Ölçütün zor vakalarda verdiği cevaplar** (elle sınadım):

| olay | ölçütün cevabı | doğru mu |
|---|---|---|
| `1511` Şahkulu | iki taraf da Osmanlı ⇒ **`ic-savas`** | ✅ |
| `1526` Mohaç | Macaristan ayrı devlet ⇒ **`dis-savas`** | ✅ |
| `1410` Kosmidion | iki şehzade de Osmanlı ⇒ **`ic-savas`** | ✅ |
| `1411` Musa'nın İstanbul kuşatması | Bizans ayrı ⇒ **`dis-savas`** | ✅ |
| `1832` Konya (Kavalalı) | Mısır o tarihte `v:` tâbi ⇒ **`ic-savas`** | ✅ *vali isyanıydı* |
| `1821` Yunan · `1804` Sırp | o tarihte Osmanlı ⇒ **`ic-savas`** + `ayaklanma` | 🟡 aşağı bak |

### 🟡 Ölçütün tek çekişmeli sonucu — ve neden yine de doğru

Balkan bağımsızlık hareketleri (`1804` Sırp, `1821` Yunan, `1875` Hersek) ölçüte
göre **`ic-savas`** çıkıyor, çünkü o tarihte hepsi Osmanlı toprağı. Bugünkü
ulusal tarih yazımı bunlara "bağımsızlık savaşı" der.

**Ölçütü değiştirmiyorum, üç sebeple:**
1. Çok değerli alan var — `ayaklanma` + `ic-savas` **birlikte** verilir, bilgi
   kaybolmaz.
2. Ölçüt **o günün hukukî durumunu** yansıtır; bu proje zaten böyle çalışıyor
   (Mısır 1882-1914 `isg:` örtüsü, Bosna 1878-1908 — ikisi de "fiilen kayıp ama
   hukuken Osmanlı").
3. Alternatif ölçüt ("sonunda bağımsız oldu mu") **geleceğe bakar** — 1821'de
   duran kullanıcı için anlamsızdır ve haritanın gün mantığına aykırıdır.

⚠️ **Ölçütün uygulanabilmesi için `savas` etiketli 339 maddenin karşı tarafının
belirlenmesi gerekiyor.** `savaslar.js`'te `taraf:` alanı (devletler.js id listesi,
Oturum 10) zaten var — ama yalnız 170 savaş kaydında; kronoloji maddelerinde yok.
**Kesişim ölçülmeden tarama süresi kestirilemez.** Onay verilirse önce kesişimi
ölçerim: 339 maddenin kaçı `savaslar.js`'teki bir kayda ±30 günde bağlanıyor?

---

## AA.7 Sözlük hijyeni — YAMACI'ya (§Z.8 tekrarı, uygulanabilir hâlde)

| madde | mevcut | olması gereken |
|---|---|---|
| `toprak-kazanci` geçen 1 kayıt | `toprak-kazanci` | `toprak-kazanc` |
| `isyan` geçen 3 kayıt | `isyan` | `ayaklanma` |
| `idari` geçen 1 kayıt | `idari` | `idare` |
| `yikim` geçen 1 kayıt | `yikim` | `diger` *(öneri — tek kullanım)* |

---

## AA.8 Sırada — ve neye takılıyorum

| # | iş | durum |
|---|---|---|
| 1 | `taht` `darbe` `hanedan` `ic-savas` | ✅ **teslim edildi (yukarıda)** |
| 2 | 1446 çelişkisi — TDV | 🔴 **AA.5'i çözmeden `taht` işlenmez** |
| 3 | Altı eksik olayın TDV doğrulaması | ⏳ sırada |
| 4 | Celâlî kuşağı (`ic-savas` mı `ayaklanma` mı) | ⏳ ayrı tur |
| 5 | `dis-savas` | ⏸️ **ölçüt yazıldı (AA.6), onay bekliyor** |
| 6 | Üç ittifak adayı | ⏸️ en sonda |

**Koordinatöre iki soru:**
1. `hanedan` yalnız Osmanlı hanedanı mı, her hanedan mı? (4 yabancı kayıt buna bağlı)
2. Darbe **girişimleri** (Kuleli, Çırağan) `darbe` alsın mı? Önerim: evet.

---

# AB. 1421 ve 1446 — TDV DOĞRULAMASI TAMAM · dört slug canlı

> AA.5'teki blokaj çözüldü. Dört TDV maddesi okundu, dördünün de `<title>`'ı
> sınandı. **Sonuç beklediğimden ilginç: `1446-05-05` uydurma değil — GERÇEK bir
> TDV tarihi, ama YANLIŞ OLAYA bağlanmış.**

## AB.0 ⚠️ ÖNCE KENDİ HATAMI DÜZELTİYORUM

§Z.3'te şöyle yazmışım:
> *"1421 — … Kronolojide 1421 yılında hiçbir madde yok; en yakın komşular 1419 ve 1425."*

**Bu yanlış.** 1418-1426 penceresini okuyunca 11 madde çıktı; 1421'de de madde var:
`1421-08-15` "Düzmece Mustafa ayaklanması". 1420, 1422, 1423, 1424, 1426 da dolu.
Doğrusu: **1421-06-25'e en yakın madde `1421-08-15`, 51 gün uzakta** — benim
±45 gün penceremin hemen dışında kaldığı için "boş" göründü.

**Boşluk gerçek** (cülûsun maddesi yok), **ama komşuluğu yanlış tarif etmişim.**
Pencere ölçümü "penceremde ne yok"u söyler, "civarda ne var"ı söylemez — ikisi
ayrı sorudur ve ikincisini sormadan yazmışım.

---

## AB.1 ✅ 1421 — TDV KESİN, İKİ MADDE BİRBİRİNİ DOĞRULUYOR

| slug | durum | verdiği tarih |
|---|---|---|
| `mehmed-i` | ✅ CANLI (`MEHMED I - TDV İslâm Ansiklopedisi`) | I. Mehmed'in ölümü |
| `murad-ii` | ✅ CANLI (`MURAD II - TDV İslâm Ansiklopedisi`) | II. Murad'ın cülûsu |

> `mehmed-i`: **"I. Mehmed 23 Cemâziyelâhir 824'te (25 Haziran 1421) Edirne'de
> vefat ettiğinde Murad Bursa'da tahta çıktı…"**

> `murad-ii`: **"Murad Osmanlı tahtına çıktı (23 Cemâziyelâhir 824 / 25 Haziran 1421)."**

**İki bağımsız TDV maddesi aynı günü veriyor.** Ölüm ve cülûs aynı gün, farklı
şehirlerde (Edirne ↔ Bursa).

### 🟢 ÖNERİ — yeni kronoloji maddesi

| alan | değer |
|---|---|
| `t:` | `1421-06-25` |
| `b:` | I. Mehmed'in vefatı ve II. Murad'ın Bursa'da cülûsu |
| `k:` | `taht` |
| `etiket:` | `taht` `siyaset` |
| `kaynak:` | `mehmed-i` *(ya da `murad-ii`; ikisi de canlı)* |

`d:` metnini yazmıyorum — anlatım maddesi kronoloji oturumunun işi; ben tarihi ve
kaynağı doğruladım. `padisahlar.js`'teki `1421-06` bu tarihle **tutuyor**, düzeltme
gerekmiyor. ✅

---

## AB.2 🔴 1446 — HER İKİ DOSYAMIZ DA YANLIŞ, AMA FARKLI ŞEKİLDE

| slug | durum |
|---|---|
| `mehmed-ii` | ✅ CANLI (`MEHMED II - TDV İslâm Ansiklopedisi`) |
| `bucuktepe-vakasi` | ✅ CANLI (`BUÇUKTEPE VAK'ASI - TDV İslâm Ansiklopedisi`) |

Belirleyici cümle — `mehmed-ii`:

> **"8 Safer 850'de (5 Mayıs 1446) yola çıkmış olan II. Murad Edirne'deki isyan
> sebebiyle Bursa'ya gelip bir süre bekledi, ardından ağustosta Edirne'ye geldi
> ve yeniçerilerin yardımıyla tekrar tahta çıktı."**

Aynı madde II. Mehmed'in ilk saltanatını **"1444 Ağustosundan 1446 Ağustosuna
kadar"** diye sınırlıyor.

### ⭐ `1446-05-05` UYDURMA DEĞİL — YANLIŞ OLAYA BAĞLANMIŞ

```
5 Mayıs 1446 (8 Safer 850)  =  II. Murad'ın YOLA ÇIKTIĞI gün
Ağustos 1446                =  Edirne'ye varıp TAHTA ÇIKTIĞI ay
```
Bizim maddemiz `1446-05-05`'e **"Buçuktepe Vak'ası — ilk yeniçeri ayaklanması ve
II. Murad'ın tahta dönüşü"** diyor. Tarih TDV'den gelmiş ama **üç ay sonraki olayın
adıyla** yazılmış. Araya "Bursa'ya gelip bir süre bekledi" giriyor.

📌 Bu, §5'teki *"madde var mı ≠ **doğru** madde mi"* sınıfının yeni bir çeşidi:
**tarih doğru kaynaktan alınmış, olay adı başka bir tarihten.** Kaynak denetimi
bunu yakalamaz — `kaynak:` alanı gerçekten o tarihi içeren canlı bir maddeyi
gösteriyor.

### İki düzeltme

**AB.2-a · `data/olaylar*.js`** — kronoloji oturumuna

| | mevcut | önerilen |
|---|---|---|
| `t:` | `1446-05-05` | **`1446-08-01`** |
| `b:` | Buçuktepe Vak'ası — ilk yeniçeri ayaklanması ve II. Murad'ın tahta dönüşü | *(aynı kalabilir)* |
| `kaynak:` | — | `mehmed-ii` |

⚠️ **`1446-08-01`'deki gün UYDURMA DEĞİL, "ay biliniyor gün bilinmiyor" demek.**
TDV yalnız "ağustos" diyor; `bucuktepe-vakasi` maddesi **hiçbir gün vermiyor**
(baştan sona okundu). §4'e göre gün uydurulmaz.

🟡 **Kural gerilimi — koordinatörün kararı gerekiyor.** CLAUDE.md §4 "gün
bilinmiyorsa `YYYY-01-01` yaz" diyor, §8 "gün yaz, ay hassasiyeti senkronu bozar"
diyor. Burada **yıl ve AY biliniyor, gün bilinmiyor** — iki kuralın da tarif
etmediği ara durum. Üç seçenek:
1. `1446-08-01` — ayı korur, §8'i sağlar, günü uydurmuş *görünür*
2. `1446-08` — dürüst ama §8 ihlali (ayın 1'ine genişler)
3. `1446-01-01` — §4'ün harfi, ama **bildiğimiz ayı atar**; bence en kötüsü

**Önerim 1**, yanına `// TDV yalnız "ağustos" diyor, gün yok` yorumu.

**AB.2-b · `data/padisahlar.js`** — `1446-09` → **`1446-08`**

TDV iki yerde "ağustos" diyor (`mehmed-ii`: "ardından ağustosta Edirne'ye geldi",
ve "1444 Ağustosundan 1446 Ağustosuna kadar"). `padisahlar.js` bir ay geç.
**Küçük ama AA.5'teki 119 günlük çelişkiyi kapatan düzeltme bu.**

📌 Not: `murad-ii` maddesi "Ağustos sonlarında… Edirne'ye ulaştı" diyor, `mehmed-ii`
"ağustosta" diyor — **ikisi çelişmiyor**, biri ötekini daraltıyor.

---

## AB.3 ✅ AA.5 BLOKAJI KALKTI

AA.1'de `1446-05-05` maddesine `taht` `darbe` `ayaklanma` önermiş, "AA.5 çözülmeden
işlenmesin" demiştim. **Çözüldü.** Etiketler aynen geçerli, ama **maddenin tarihi
önce `1446-08-01`'e taşınmalı** — yoksa yanlış tarih etiketle mühürlenir.

📌 Bu, senin yaydığın kuralın tam vakası: **"veri tarihi taşınırken, o tarihe bağlı
maddenin de taşınması gerekip gerekmediği aynı pakette sorulur."** Burada tersi
oldu — madde taşınıyor, `padisahlar.js`'teki karşılığı da aynı pakette taşınmalı.
**İkisi ayrı oturumda yapılırsa çelişki 119 günden 30 güne iner ama KALIR.**

---

## AB.4 Slug özeti — KAYNAK oturumuna

**Bu turda CANLI olduğu `<title>` ile sınanmış 4 slug:**
`mehmed-i` · `mehmed-ii` · `murad-ii` · `bucuktepe-vakasi`

⚠️ **Bir ayrıştırma tuzağı kaydediyorum:** `bucuktepe-vakasi`'nı ilk çektiğimde
özetleyici *"24 Safer 848'de (12 Haziran 1444)"* diye bir tarih üretti — madde 1446
olayını anlatıyor, 848/1444 oraya ait değil. İkinci çekişte o cümle **yok**.
Yani **özetleyici parça birleştirmiş.** Tek çekişe güvenip yazsaydım, TDV'ye
dayanan uydurma bir tarih üretmiş olacaktım.

📌 **Kural: bir tarih tek bir çekişten alınmaz.** Kaynak canlı olsa bile, sayısal
veriyi ya ikinci bir çekişle ya ikinci bir maddeyle doğrula. Bu turda 1421 tarihi
**iki ayrı maddeden** (`mehmed-i` + `murad-ii`) aynı çıktığı için kesin; 1446 ayı
**iki ayrı cümleden** (`mehmed-ii` içinde) aynı çıktığı için kesin.

---

## AB.5 Kalan beş eksik olay — sırada

`1509` Diu · `1526` Kalender Çelebi · `1603` Deli Hasan · `1620` Cecora, ve 1421
tamamlandığına göre cülûs tarafı bitti. Dördü de henüz TDV'de doğrulanmadı,
**madde önerisi yazmıyorum.**

---

# AC. DÖRT EKSİK SAVAŞ — TDV turu · İKİ ÖNERİ, İKİ RET

> §Z.4'teki dört gerçek eksiğin doğrulaması. Yedi TDV maddesi okundu, yedisinin de
> `<title>`'ı sınandı. **Sayısal veri hiçbir yerde tek çekişten alınmadı.**
> **Bu bölüm veri dosyasına DOKUNMAZ** — `olaylar*.js` çok yazarlı, öneri getiriyorum.

| # | olay | TDV | sonuç |
|---|---|---|---|
| Z.4-a | `1509` Diu | `diu` ✅ canlı — ama **Osmanlı tarafı yok** | 🔴 **önce başka soru** |
| Z.4-b | `1526` Kalender Çelebi | `kalender-sah` ✅ canlı — **kesin gün var** | ✅ **madde öneriyorum** |
| Z.4-c | `1603` Deli Hasan | `celali-isyanlari` ✅ canlı — yıl var, gün yok | ✅ **madde öneriyorum** |
| Z.4-d | `1620` Cecora | ❌ **KAYNAK YOK** | 🔴 **yazmıyorum** |

**Bu turda CANLI olduğu `<title>` ile sınanmış 5 yeni slug:**
`celali-isyanlari` · `kalender-sah` · `hotin` · `osman-ii` · `diu`

---

## AC.1 ✅ KALENDER — ve ADI BİZDE YANLIŞ

`kalender-sah` (✅ `KALENDER ŞAH - TDV İslâm Ansiklopedisi`), **iki çekiş aynı**:

> **"Kalender … Dulkadirli beylerinden Veli Dündar öldürüldü
> (22 Ramazan 933 / 22 Haziran 1527)."**

Maddenin verdiği üç tarih:
| | |
|---|---|
| **1526** | "Mohaç seferi sırasında patlak verdi" — Orta Anadolu, ~30.000 kişi |
| **8 Ramazan 933 / 8 Haziran 1527** | Cincife'de (Tokat) Behram Paşa ile savaş |
| **22 Ramazan 933 / 22 Haziran 1527** | **Başsaz yaylasında son muharebe, Kalender öldürüldü** |

Hicrî↔milâdî iç tutarlılık sağlanıyor (8→8, 22→22 Ramazan, iki tarafta da 14 gün
ara). Bastıran: **Makbul İbrâhim Paşa**.

### 🔴 AC.1-a — `savaslar.js`'te ad YANLIŞ

```
savaslar.js   "Kalender Çelebi"
TDV maddesi   "KALENDER ŞAH"     ← "Kalender Çelebi" diye madde YOK (arama ile sınandı)
```
📌 §Y'deki *"aynı olaya farklı ad"* dersinin bir daha tekrarı — bu sefer **bizim
dizinimizle TDV arasında.** Ad düzeltilmezse ileride kimse bu kaydı TDV'de
bulamaz.

### 🟢 ÖNERİ — yeni kronoloji maddesi

| alan | değer |
|---|---|
| `t:` | **`1527-06-22`** |
| `b:` | Kalender Şah isyanının bastırılması — Başsaz Muharebesi |
| `k:` | `ayaklanma` |
| `etiket:` | `ayaklanma` `ic-savas` |
| `kaynak:` | `kalender-sah` |

⚠️ **Dikkat: `savaslar.js` `1526-01-01` diyor, ben `1527-06-22` öneriyorum.** Çelişki
değil — TDV isyanın **1526'da çıkıp 1527'de bastırıldığını** söylüyor. `savaslar.js`
çıkışı, önerdiğim madde bitişi tarihliyor. **Ama `1526-01-01`'deki `-01-01` yanlış:**
TDV "Mohaç seferi sırasında" diyor, Mohaç 1526-08-29'dur — yani isyan **yaz
ortasında** çıkmış, ocakta değil. `savaslar.js` sahibi kararını versin.

---

## AC.2 ✅ DELİ HASAN — yıl kesin, gün yok

`celali-isyanlari` (✅ `CELÂLÎ İSYANLARI - TDV İslâm Ansiklopedisi`),
**iki çekiş aynı cümleyi verdi**:

> **"Deli Hasan Kütahya'yı istilâ ederek Afyonkarahisar üzerine yürüdü. Bu zor
> durum karşısında mesele tatlılıkla halledilerek Deli Hasan Bosna
> beylerbeyiliğine tayin edildi (1603)."**

**Gün ve ay verilmiyor.** `savaslar.js`'teki `1603-01-01` bu yüzden **doğru
biçimde yazılmış** (§4: "yıl biliniyor, gün bilinmiyor").

### 🟢 ÖNERİ — yeni kronoloji maddesi

| alan | değer |
|---|---|
| `t:` | **`1603-01-01`** |
| `b:` | Deli Hasan'ın Bosna beylerbeyiliğine tayini — Celâlî isyanının pazarlıkla sonlandırılması |
| `k:` | `ayaklanma` |
| `etiket:` | `ayaklanma` `siyaset` |
| `kaynak:` | `celali-isyanlari` |
| yorum | `// TDV yalnız yıl veriyor, gün yok` |

📌 **Bu madde bir zincirin tek eksik halkasıydı.** Celâlî penceresini
(1595-1612) okuduğumda gerisi tam çıktı: `1599-06-01` Karayazıcı ayaklanması ·
`1602-02-15` Karayazıcı'nın ölümü · `1607-10-23` Canbolatoğlu · `1608-08-05`
Kalenderoğlu. **Yalnız Deli Hasan yoktu** — Karayazıcı'nın kardeşi ve halefi.

### 🟡 Celâlî kuşağı `ic-savas` mı? — ÖNERİM: HAYIR

Koordinatörün sorusu. `celali-isyanlari`'nın anlattığı tabloya göre bunlar
**merkeze karşı silahlı kalkışmalar**, hanedan ya da hükümet talebi olan taraflar
değil — üstelik ikisi (Deli Hasan 1603, Canbolatoğlu 1605) **beylerbeyilik
teklifiyle** çözülmüş, yani devletin içine alınarak. `ic-savas` ölçütü ("aynı
devletin tebaası arasında sürekli silahlı çatışma") harfiyen sağlanıyor ama
`ayaklanma` **daha bilgilendirici**; ikisini birden vermek burada bilgi eklemiyor,
`ic-savas`ı sulandırıyor.
**Öneri: Celâlî maddeleri yalnız `ayaklanma` alsın.** `ic-savas` Fetret · Cem
Sultan · Şehzâdeler gibi **taht talebi olan** çatışmalara ayrılsın.

---

## AC.3 🔴 DİU 1509 — asıl soru "maddesi yok" değil

`diu` (✅ `DİÛ - TDV İslâm Ansiklopedisi`), **iki çekiş aynı**:

> **"1509'da Sûret Valisi Melik Ayaz, bu kıyılarda bir ikmal üssü kurmayı
> planlayan Portekiz genel valisi Francisco d'Almeida'nın donanması karşısında
> yenik düştü."**

Maddenin bütün tarih dizisi ikinci çekişte alındı (698 · 1349 · 1407 · 1431 ·
**1509** · 1513 · 1520 · 1521 · 1522 · 1526-27 · **1531** · 1537 · 1538 · 1546 …).

### 🔴 TDV bu savaşta OSMANLI'DAN SÖZ ETMİYOR

Ne Memlük donanması, ne Emîr Hüseyin el-Kürdî, ne Osmanlı. TDV'ye göre yenilen
taraf **Gucerât'ın Sûret valisi Melik Ayaz**. Aynı maddede **Osmanlı donanması
Diû'ya ilk defa 1531'de** giriyor.

Oysa `savaslar.js` `1509-02-03 "Diu (Portekiz)"` kaydını **Osmanlı savaşları
dizininde** tutuyor.

**Bu yüzden kronoloji maddesi ÖNERMİYORUM.** Önce sorulacak soru şu:
> **Bu kayıt Osmanlı savaşları dizinine ait mi?**

Aitse gerekçesi TDV `diu` maddesinden gelmiyor — başka bir maddeden gelmeli
(Memlük donanmasındaki Osmanlı topçuları / gönüllüleri). O gerekçe bulunmadan
madde yazmak, **haritada ve kronolojide Osmanlı'yı olmadığı bir savaşa sokar.**

### 🔴 AC.3-a — YAN BULGU: `1538-02-03` bir KOPYALA-YAPIŞTIR hatası

```
savaslar.js   1509-02-03   "Diu (Portekiz)"        ← 3 Şubat 1509 tarihsel olarak DOĞRU
savaslar.js   1538-02-03   "Diu kuşatması"         ← AYNI GÜN-AY. Şüpheli.
kronoloji     1538-06-13   "Hint Okyanusu seferi: Diu kuşatması"
```
İki Diu kaydı **aynı gün-ayı** taşıyor. Hadım Süleyman Paşa'nın Diu kuşatması
1538 **sonbaharındadır**; şubat olamaz — donanma o tarihte henüz Süveyş'ten
çıkmamıştı. `diu` maddesi Hadım Süleyman Paşa kuşatmasına tarih vermiyor, o yüzden
**doğrusunu öneremiyorum**; ama `1538-02-03`'ün 1509'dan kopyalandığı kuvvetle
muhtemel.

📌 §Z.4'te bunu "8 yanılsamadan biri" saymıştım — **yanılsama değilmiş, ayrı bir
hataymış.** Kronoloji `1538-06-13` diyor, dizin `1538-02-03`; aradaki 130 gün
"başlangıç/sonuç kayması" diye açıklanamaz, çünkü şubat kuşatmanın başı da değil.
**§Z.4'teki 8'lik sayı 7'ye, 4'lük sayı 5'e düzeliyor.**

---

## AC.4 🔴 CECORA 1620 — KAYNAK YOK, YAZMIYORUM

İki madde tarandı:
- `hotin` (✅ canlı): Cecora'dan **hiç söz etmiyor.** Yalnız *"II. Osman'ın Hotin
  seferine çıkışı (1620)"* ve antlaşma için **"9 Ekim 1621"**.
- `osman-ii` (✅ canlı): *"İskender Paşa'nın Turla suyu civarında Leh kuvvetlerini
  üst üste yenilgiye uğratması…"* — **tarih vermiyor**, olayı adlandırmıyor.

⇒ **TDV Cecora Muharebesi'ne tarih vermiyor. `savaslar.js`'teki `1620-09-17`
doğrulanamadı. Madde önerisi YAZMIYORUM.**

### ✅ Yan kazanç — `1621-10-09` iki maddeden doğrulandı

`hotin`: *"…iki taraf arasında **9 Ekim 1621**'de bir antlaşma imzalanarak"* —
kronolojideki `1621-10-09 "Hotin Seferi ve Hotin Antlaşması"` **tam tutuyor.** ✅

### 🟡 İki TDV maddesi arasında küçük bir gerilim
`hotin` seferin çıkışını **1620**, `osman-ii` sefer başlangıcını **29 Nisan 1621**
veriyor. Muhtemelen biri karar tarihini öteki hareket tarihini anlatıyor.
**Bizim veriyi etkilemiyor** (ikisi de 1621-10-09'u doğruluyor), not olarak
bırakıyorum.

---

## AC.5 Özet — ve neyi yazmadığım

| yazdım | yazmadım |
|---|---|
| ✅ `1527-06-22` Kalender Şah — kesin gün, iki çekiş | 🔴 `1509` Diu — TDV'de Osmanlı yok, **kapsam sorusu önce** |
| ✅ `1603-01-01` Deli Hasan — yıl kesin, gün yok diye yazılı | 🔴 `1620` Cecora — **kaynak yok** |

Dört eksikten **ikisi madde oldu, ikisi olmadı.** İkisini yazmamak bir başarısızlık
değil: biri kaynaksız, öteki **muhtemelen hiç bizim savaşımız değil.**

**Sırada:** `dis-savas` kesişim ölçümü (onay verildi) → üç ittifak adayı.

---

# AD. `dis-savas` KESİŞİM ÖLÇÜMÜ — ve KENDİ ÖLÇÜTÜMDE BİR EKSİK

> Koordinatör onayıyla yapılan ön ölçüm. **Sonuç: ölçüt çalışıyor ama EKSİK —
> iki değil ÜÇ sonucu olmalı.** Bunu taramaya başlamadan bulduğum için
> düzeltmesi ücretsiz.

## AD.1 Kesişim — iş yükünün ölçüsü

| ölçü | değer |
|---|---:|
| `etiket:"savas"` taşıyan kronoloji maddesi | **339** |
| `savaslar.js` `SAVASLAR` kaydı | 170 |
| bunlardan `taraf:` alanı dolu olan | 108 |
| **±30 günde `savaslar.js` kaydına bağlanan madde** | **146 (%43)** |
| bağlananlardan `taraf:` alanı dolu olan | **105 → ölçüt MAKİNEYLE uygulanabilir** |
| bağlanıp `taraf:` boş olan | 41 |
| **bağlanmayan — elle karar gerekir** | **193 (%57)** |

**Yorum:** ölçütün makineyle uygulanabildiği kısım **105 madde (%31)**. Geri kalan
**234 madde elle okunacak.** Yüzyıl dağılımı bağlanmayanlarda dengeli
(1400'ler 27 · 1500'ler 30 · 1600'ler 35 · 1700'ler 25 · **1800'ler 50**), yani
"bir dönemi halledip gerisini bırakma" seçeneği yok.

⚠️ **Süre tahmini vermiyorum.** Elle okunacak 234 maddenin her biri için
"karşı taraf kim, o tarihte kimin hâkimiyetinde" sorusu var; bugüne kadarki
tempoma bakarak **tek oturumda bitmez**. Bölünmesi gerekirse doğal kesit
`taraf:` alanı — dolu olanlar makineye, boş olanlar elle.

## AD.2 🔴 ÖLÇÜTÜMÜN EKSİĞİ — ÜÇÜNCÜ BİR SINIF VAR

§AA.6'da ölçütü **iki sonuçlu** yazmıştım: `dis-savas` ya da `ic-savas`.
Bağlanmayan 193 maddeyi okurken üçüncü bir sınıf çıktı:

> **Osmanlı hiçbir tarafta DEĞİL.** Üçüncü devletler arası savaş; kronolojide
> duruyor çünkü haritayı ya da bağlamı değiştiriyor.

Elle okuduğum örnekler:

| `t:` | madde | taraflar |
|---|---|---|
| `1387-11-01` | Timur'un İran'ın büyük bölümünü hâkimiyeti altına alması | Timur ↔ İran |
| `1393-08-29` | Timur Bağdat'ı zaptetti — Celâyirliler Anadolu'ya kaçtı | Timur ↔ Celâyirli |
| `1402-12-14` | Timur İzmir'i Saint Jean şövalyelerinden aldı | Timur ↔ Şövalyeler |
| `1406-10-21` | Kara Yusuf'un Tebriz'i Timurlulardan geri alması | Karakoyunlu ↔ Timurlu |
| `1467-11-10` | Karakoyunlu Devleti'nin çöküşü: Cihan Şah'ın öldürülmesi | Akkoyunlu ↔ Karakoyunlu |
| `1468-04-01` | Uzun Hasan'ın Karakoyunlu Devleti'ne son vermesi | Akkoyunlu ↔ Karakoyunlu |
| `1501-07-01` | Şah İsmail'in Tebriz'i alması: Safevî'nin kuruluşu | Safevî ↔ Akkoyunlu |
| `1502-01-01` | Erzurum ve Van havzası Safevî'ye geçti | Safevî ↔ Akkoyunlu |
| `1503-01-01` | Murad Bey'in Hemedan yenilgisi | Safevî ↔ Akkoyunlu |
| `1507-01-01` | Şah İsmail'in Diyarbekir seferi | Safevî ↔ Akkoyunlu |
| `1508-01-01` | Bağdat'ın Safevî'ye geçişi | Safevî ↔ Akkoyunlu |
| `1510-12-02` | Merv Savaşı: Özbekler ağır yenilgiye uğradı | Safevî ↔ Özbek |

📌 **Ve §AC.3'teki Diu 1509 tam da bu sınıfa giriyor.** Orada "tek tuhaf kayıt"
sanmıştım — **tuhaf kayıt değil, bir KATEGORİ.** TDV `diu` maddesinin Osmanlı'dan
hiç söz etmemesi o yüzden.

### 🟢 ÖLÇÜTÜN DÜZELTİLMİŞ HÂLİ

```
Osmanlı taraf DEĞİL                          → ne dis-savas ne ic-savas
                                               (yalnız mevcut `savas` etiketi kalır)
Osmanlı taraf + karşı taraf bağımsız devlet  → dis-savas
Osmanlı taraf + iki taraf aynı hâkimiyette   → ic-savas
```

**Üçüncü sınıfa ayrı bir etiket önermiyorum.** İki etiketin de yokluğu zaten
"bizim savaşımız değil" demek — yeni bir terim §Z.8'deki tekil-etiket sorununu
büyütür. *(Vak'a-i Hayriyye'de aynı gerekçeyle `tasfiye` önermemiştim; burada da
aynı mantık, ama fark şu: orada tek olaydı, burada bir sınıf — yine de sınıfın
adı "ikisi de yok" olarak yeterince ifade ediliyor.)*

## AD.3 ⚠️ Üçüncü sınıfın BÜYÜKLÜĞÜNÜ ölçemedim — ve neden ölçemediğimi yazıyorum

Kaba bir anahtar kelime taraması (yabancı devlet adı geçen + "Osmanlı" geçmeyen)
**43 aday** verdi. **Bu sayıyı rapor etmiyorum**, çünkü ilk 30'unu elle okuyunca
**yalnız 12'si gerçek üçüncü sınıf** çıktı. Gerisi Osmanlı savaşıydı ve sırf madde
metninde "Osmanlı" kelimesi geçmediği için listeye girmişti: Koyunhisar 1302,
Kemah 1515, İnebahtı 1499, Korfu 1537, Revan 1604…

📌 **Yine aynı ders** (§Y · §Z.2 · §AB.4): *anahtar kelime aday üretir, sayı
üretmez.* Kalan 13 aday okunmadı — **üçüncü sınıfın gerçek büyüklüğü
bilinmiyor, "en az 12" diyebilirim.**

## AD.4 Sırada

`dis-savas` taraması ölçüt onaylanınca başlar. **Düzeltilmiş üç sonuçlu ölçütü
koordinatörün bir kere daha onaylamasını istiyorum** — iki sonuçlu hâlini
onaylamıştı, değişen bir şey var.

---

# AE. 1622 MÜKERRER — TDV KESTİ · düzeltme bende

> DENETÇİ ölçtü: mükerrer denetimi bu çifti **eşik yüzünden değil**, kırpmanın
> sabit uzunlukta olması yüzünden kaçırıyormuş (`katli` vs `katled` → ortak kök
> `katl` sessizce kayboluyor). Düzeltme gerçek bir belirteç hatasını kapattı ama
> **benim vakamı çözmüyor** — çünkü iki başlık dokuz kökten yalnız ikisini
> paylaşıyor. DENETÇİ'nin teşhisi doğru: **çözüm denetimin ayarında değil,
> verinin §8'e uymasında.**

## AE.1 ✅ TDV — iki madde AYNI OLAY, ve ad da TDV'nin

`osman-ii` (✅ canlı, daha önce sınandı):

> **"8 Receb 1031 (19 Mayıs 1622) tarihinde isyan başladı."**
> **"…onun konağında olduğunu öğrendikleri II. Osman'ı yakaladılar (20 Mayıs)"**
> — aynı gün öğleden sonra Yedikule'ye sevkedilip **boğularak öldürüldü**.

Ve belirleyici olan:

> **"(II. Osman Vak'ası/Faciası, Hâile-i Osmâniyye)"**

TDV üç adı **aynı olayın adı** olarak sayıyor. `Hâile-i Osmâniyye` diye müstakil
madde yok (aramayla sınandı) — terim `osman-ii` içinde geçiyor.

⇒ **Bizim iki maddemiz kesin olarak mükerrer.**

```
1622-05      k:isyan       "II. Osman'ın katli (Hâile-i Osmâniye)"
1622-05-20   k:ayaklanma   "Genç Osman'ın yeniçeriler tarafından katledilmesi"
```

## AE.2 🟢 ÖNERİ

**1. `1622-05` kaydı SİLİNSİN** — mükerrer, üstelik §8 ihlali (ay hassasiyeti).

**2. `1622-05-20` KALSIN** — tarihi TDV ile tam tutuyor (yakalanma ve öldürülme
aynı gün, 20 Mayıs).

**3. `1622-05-20`'nin `b:` alanına TDV'nin terimi eklensin** ki silinen maddeyle
birlikte kaybolmasın:
> `b:"Genç Osman'ın katledilmesi (Hâile-i Osmâniyye)"`
`kaynak:"osman-ii"`

⚠️ **Yazım:** TDV **`Osmâniyye`** yazıyor, bizim maddede **`Osmâniye`**. Küçük ama
arama tutarlılığı için TDV'ninki alınsın.

## AE.3 🟡 İsteğe bağlı — 19 Mayıs ayrı madde olabilir

TDV isyanın başlangıcını (**19 Mayıs**) öldürmeden (**20 Mayıs**) ayırıyor.
İstenirse `1622-05-19` "Yeniçeri ayaklanmasının başlaması ve II. Osman'ın
tahttan indirilmesi" diye ayrı madde yazılabilir — `etiket:` `ayaklanma` `darbe` `taht`.

**Bunu ÖNERİ olarak yazmıyorum, seçenek olarak bırakıyorum.** Sebebi: mevcut
`1622-05` kaydının `b:`'si *"II. Osman'ın katli"* diyor, yani **öldürmeyi**
anlatıyor. Onu 19 Mayıs'a taşıyıp metnini değiştirmek tarih düzeltmesi değil
**yeni madde yazmaktır** ve kronoloji oturumunun işidir.

📌 Bu ayrımı §AB'deki dersten çıkarıyorum: `1446-05-05` orada da *gerçek bir
tarihti ama yanlış olayın adını taşıyordu.* Aynı hatayı ters yönde yapmayayım —
**doğru tarihe yanlış olay adı koymak da aynı kusur.**

## AE.4 📌 Not — benim hipotezim yanlıştı, vaka yine de işe yaradı

§Z.6'da *"`Osman` ortak kökü eşiği geçmeye yetmiyor olabilir"* diye sormuştum.
DENETÇİ ölçtü: sebep o değilmiş, **sabit uzunlukta kırpma** imiş — kelimelerden
biri kırpma boyundan kısaysa ortak kök kayboluyor. Bu, benim vakam olmadan
çıkmayacak gerçek bir hataydı ve düzeltilince **üç gerçek mükerrer** ortaya çıktı
(Pîrî Reis 1553/1554 · Şûrâ-yı Devlet 1868 · Balkan Savaşları 1912).

Yani soru yanlış kurulmuştu ama **doğru yere bakıyordu.**

---

# AF. ÜÇ İTTİFAK ADAYI — ÜÇÜ DE DOĞRULANDI · artı bir DÜZELTME, iki YENİ ADAY

> §Y'de "üç sağlam eksik" demiş, `kirim-hanligi` ölü çıkınca doğrulayamamıştım.
> Doğru slug'lar bulundu: **`kirim` · `ceneviz` · `fransa`** — üçü de canlı,
> `<title>` ile sınandı. **Her tarih iki ayrı çekişle doğrulandı** (§AB.4 kuralı).
> Ve her üç boşluk **tarih penceresi okunarak** teyit edildi, kelimeyle değil.

| # | aday | TDV | pencere | sonuç |
|---|---|---|---|---|
| AF.1 | 1352 Ceneviz | ✅ `ceneviz` | 1350-1356: **3 madde, hiçbiri Ceneviz** | ✅ öneriyorum |
| AF.2 | 1454 Kırım | ✅ `kirim` | 1452-1457: **12 madde, hiçbiri Kırım/Kefe** | ✅ öneriyorum ⚠️adı |
| AF.3 | 1553 Fransa | ✅ `fransa` | 1550-1557: **21 madde, hiçbiri Fransa** | ✅ **kesin gün** |

---

## AF.1 ✅ 1352 — Orhan Gazi ile Ceneviz antlaşması

`ceneviz` (✅ `CENEVİZ - TDV İslâm Ansiklopedisi`), iki çekiş aynı:

> **"Görüşmenin sonucu olumlu olmuş ve 1352 başlarında bir antlaşma imzalanmıştı…
> Böylece Orhan Gazi Cenevizliler'in yanında yer almış, Galata'ya erzak
> yardımında ve askerî destekte bulunmuştu."**

**Gün ve ay yok** — "1352 başlarında".

| alan | değer |
|---|---|
| `t:` | **`1352-01-01`** |
| `b:` | Orhan Gazi – Ceneviz antlaşması: Galata'ya erzak ve askerî destek |
| `k:` | `antlasma` |
| `etiket:` | `ittifak` `antlasma` `diplomasi` |
| `kaynak:` | `ceneviz` |
| yorum | `// TDV "1352 başlarında" diyor, gün ve ay yok` |

📌 Bu, **kronolojinin en seyrek penceresine** düşüyor: 1350-1356 arası yedi yılda
**3 madde** var (Çimpe 1352-03 · Gelibolu 1354-03 · Ankara 1354-08). §Y.3'te
"erken dönem gerçekten seyrek" derken tek pencere görmüştüm; ikinci kez aynı
yerden çıkması tesadüf değil.

---

## AF.2 ✅ 1454 — ama ADI "ittifak antlaşması" DEĞİL

`kirim` (✅ `KIRIM - TDV İslâm Ansiklopedisi`), iki çekiş **birebir aynı cümle**:

> **"1454 yazında Osmanlı-Kırım müşterek kuvvetleri ilk defa olarak Kefe'yi
> muhasara etti."**
> *(ikinci çekiş ekliyor: "Kefe Cenevizlileri Osmanlı sultanına ve Kırım hanına
> yıllık vergi vermeye razı oldular.")*

### ⚠️ Dış listenin adı TDV'yi tutmuyor

Dış liste buna **"1454 Kırım ittifakı"** diyor. TDV'de **antlaşma yok** — anlatılan
şey **ilk müşterek askerî harekât.** Dahası TDV resmî ittifak siyasetini başka bir
yere koyuyor:

> **"Hanlık da ilk defa 889'da (1484) II. Bayezid'in Akkirman seferine katılarak
> Osmanlılar'la batıda iş birliği siyasetine bağlanmıştır."**

Ve **1484 bizde zaten var**: `1484-08-04 "Akkirman'ın fethi"`. ✅

📌 **§Y dersinin üçüncü tekrarı**, bu sefer dış listeyle TDV arasında: dış kaynak
olayı *sonucuyla* ("ittifak"), TDV *fiiliyle* ("müşterek muhasara") adlandırıyor.
**Madde adını dış listeden değil TDV'den alıyorum.**

| alan | değer |
|---|---|
| `t:` | **`1454-01-01`** |
| `b:` | Osmanlı-Kırım müşterek kuvvetlerinin ilk Kefe muhasarası |
| `k:` | `kusatma` |
| `etiket:` | `ittifak` `savas` `dis-savas` |
| `kaynak:` | `kirim` |
| yorum | `// TDV "1454 yazında" diyor, ay ve gün yok` |

⚠️ **`1454-01-01`'i mecburen yazıyorum, memnun değilim.** TDV "yaz" diyor; bu bir
**mevsim**, koordinatörün onayladığı `YYYY-MM-01` kuralı ay için geçerli, mevsim
için değil. Mevsimi aya çevirmek (haziran? temmuz?) **uydurma olur.** §4'ün
`YYYY-01-01`'i tek dürüst seçenek — ama yorumu şart, yoksa "ocak ayında" sanılır.
🟡 **Koordinatöre: mevsim hassasiyeti için bir kural var mı? Yoksa gerekiyor.**

---

## AF.3 ✅ 1553 — KESİN GÜN

`fransa` (✅ `FRANSA - TDV İslâm Ansiklopedisi`), iki çekiş birebir aynı:

> **"Fransa Habsburglar'a karşı Osmanlı Devleti ile yeni bir ittifak yaptı
> (1 Şubat 1553) ve yine Fransız donanmasıyla Osmanlı donanması Akdeniz'de
> İspanyollar'a karşı ortak harekâtta bulundu."**

| alan | değer |
|---|---|
| `t:` | **`1553-02-01`** |
| `b:` | Osmanlı-Fransız ittifakı — Habsburglara karşı yeni antlaşma |
| `k:` | `antlasma` |
| `etiket:` | `ittifak` `antlasma` `diplomasi` |
| `kaynak:` | `fransa` |

**Üç adayın en sağlamı** — gün TDV'de açıkça yazılı, uydurma ya da yaklaştırma yok.

---

## AF.4 🔴 YAN BULGU — MEVCUT BİR MADDENİN TARİHİ YANLIŞ

`fransa` maddesi kapitülasyonlara **gün veriyor**:

> **"18 Şubat 1536'da, I. François adına elçi Jean de la Forest ile Kanûnî adına
> Sadrazam Makbul İbrâhim Paşa arasında Fransa'ya ticarî imtiyazlar tanıyan bir
> anlaşma gerçekleştirildi."**

Bizde:
```
1536-02-01   k:ekonomi   e:ekonomi+ittifak   "Fransa'ya ilk kapsamlı kapitülasyonlar"
```
**17 gün fark.** `1536-02-01` bir "ay biliniyor gün bilinmiyor" yer tutucusu gibi
duruyor ve TDV onu **doldurabiliyor**.

### 🟢 DÜZELTME ÖNERİSİ
`1536-02-01` → **`1536-02-18`**, `kaynak:"fransa"` eklenerek.

⚠️ Bu bir **tarih taşıma**. Senin yaydığın kural gereği aynı pakette soruyorum:
**bu tarihe bağlı bir `yerlesimler.js` kırılması var mı?** Kapitülasyon toprak
değiştirmediği için **olmaması gerekir** — ama uygulayıcı Değişmez 2'yi koştursun.

---

## AF.5 🟡 İKİ YENİ ADAY — doğrulanmadı, yazmıyorum

**1. `1387-06-08` Ceneviz ahidnâmesi.** `ceneviz` maddesi *"8 Haziran 1387'de
imzalanan… ahidnâme"* diyor — **gün kesin.** 1385-1390 penceresini okudum:
**13 madde, hiçbiri Ceneviz ahidnâmesi değil.** Boşluk gerçek görünüyor.
🔴 **Ama ahidnâmenin tarafları ve içeriği hakkında TDV'den yeterli cümle almadım**
(Osmanlı ile mi, Bizans ile mi?). **İkinci tur gerekiyor, madde yazmıyorum.**

**2. 1543 Nice ortak deniz harekâtı.** `fransa`: *"1543'te Nice şehrine karşı
ortak bir deniz harekâtı"* — **TDV gün ve ay vermiyor.** 1535-1545 penceresinde
Nice yok (13 madde Macaristan ve Ege ağırlıklı). Boşluk gerçek ama
**kaynak tarihi yetersiz.**

---

## AF.6 ✅ Yan doğrulama — DENETÇİ'nin Pîrî Reis mükerreri gözle görüldü

1550-1557 penceresini okurken DENETÇİ'nin bulduğu çift ekranda göründü:
```
1553-12-01   k:siyaset   "Kaptan-ı derya Pîrî Reis idam edildi"
1554-01-01   k:bilim     "Pîrî Reis'in idamı"
```
31 gün ara, aynı olay, **farklı `k:` değerleriyle** (`siyaset` / `bilim`).
Düzeltilmiş mükerrer denetiminin gerçek bir şeyi yakaladığını bağımsız olarak
teyit ediyorum. *(Not: `k:"bilim"` bir idam için yanlış — muhtemelen Pîrî Reis'in
haritacılığı yüzünden konmuş; §Z.5'teki `k:` sözlüğü sorununun bir örneği daha.)*

---

## AF.7 Özet

| yazdım | yazmadım |
|---|---|
| ✅ `1352-01-01` Ceneviz antlaşması | 🟡 `1387-06-08` Ceneviz ahidnâmesi — **taraflar netleşmedi** |
| ✅ `1454-01-01` Kefe müşterek muhasarası | 🟡 1543 Nice — **TDV gün vermiyor** |
| ✅ `1553-02-01` Osmanlı-Fransız ittifakı | |
| 🔴 `1536-02-01` → `1536-02-18` düzeltmesi | |

**Üç ittifak adayının üçü de doğrulandı.** §Y'de "hiçbiri doğrulanmadı" diye
bırakmıştım; doğru slug'lar bulununca üçü de çıktı — **eksik olan kaynak değil,
slug'dı.**

**Bu turda canlı sınanmış 3 yeni slug:** `ceneviz` · `kirim` · `fransa`
**ÖLÜ olduğu bilinen:** `kirim-hanligi` (doğrusu **`kirim`**)

---

# AG. `dis-savas` — MAKİNE TURU BİTTİ · 104 madde sınıflandı, 14 gerçek kusur çıktı

> Koordinatörün onayladığı **üç sonuçlu ölçüt**, `taraf:` alanı dolu olan kesitte
> uygulandı. Ölçüt `devletler.js` `id`/`f`/`t` + `savaslar.js` `taraf:` üzerinden
> **makineyle** çalıştı; hiçbir karar elle verilmedi.
> **Bu bölüm veri dosyasına DOKUNMAZ.**

## AG.1 Sonuç

| sınıf | adet |
|---|---:|
| **`dis-savas`** | **91** |
| **`ic-savas`** | **8** |
| **Osmanlı taraf değil** (etiketsiz) | **5** |
| **UYARI — elle bakılacak** | **14** |
| toplam sınıflanan | **104** |

`devletler.js` 241 kayıt, `savaslar.js` 170 kayıt (108'inde `taraf:` dolu).
Ayrıştırma **parantez dengesiyle** yapıldı — `devletler.js`'te satır bazlı
ayrıştırıcının daha önce `letonya`nın `f`'sini komşudan çektiğini biliyorum.

## AG.2 ⚠️ ÖNCE KENDİ HATAM — 33 uyarının 19'u benim bug'ımdı

İlk koşu **33 uyarı** verdi ve çoğu "HAYALET DEVLET" diyordu: *Bizans ömrü
330-1461, olay 1302* — ki 1302 aralığın **içinde.**

Sebep: tarihleri **metin olarak** kıyaslamışım.
```
"330-05-11" <= "1302-07-27"   →  YANLIŞ (sözlük sırasında '3' > '1')
```
**Üç haneli yıllar** (Bizans 330, Venedik 697, Papalık 756, Yemen-Zeydî 897,
Fransa 987) her karşılaştırmayı ters çeviriyordu. Gün sayısına çevirince
**33 → 14** düştü.

📌 Koordinatörün §61'i burada bir kez daha: bu, *"düzeltme turunda aynı kör
noktaya ikinci kez basmak"*ın kardeşi — **ölçüm aracının kendisi ölçülmeden
kullanılmak.** Aracı yazarken dikkat ölçüte kilitlenmişti, kıyas operatörü
sorgulanmadan geçti. **19 sahte bulguyu rapor edecektim.**

## AG.3 🔴 KALAN 14 UYARININ HEPSİ GERÇEK — ve 3'ü tek bir sınıf

### AG.3-a ⭐ EN CİDDİSİ — Memlük Devleti'nin sonu için ÜÇ FARKLI TARİHİMİZ VAR

```
data/devletler.js   memluk  t:"1517-01-22"          ← Ridâniye günü
data/olaylar*.js    1517-02-15 "…1250'den beri süren Memlük hâkimiyetinin
                                HUKUKEN SONA ERDİĞİNİN ilânıdır"
CLAUDE.md §3.5      "Memlük ... devletin gerçek sonu 1517-04-13"
```
**Üç otoritemiz üç ayrı gün söylüyor** — ve ikisi kendi belgemiz.

Somut sonucu: `savaslar.js` `1517-01-24` ve `1517-01-27` tarihli iki Osmanlı-Memlük
çatışması kaydediyor. `devletler.js`'e göre bunlar **var olmayan bir devlete karşı**
verilmiş savaşlar — CLAUDE.md §3.5'in "hayalet devlet" sınıfı, ama bu sefer
`yerlesimler.js`'te değil `savaslar.js`'te.

Ve kronolojinin kendi metni `devletler.js`'i çürütüyor: `1517-01-24` maddesi
diyor ki *"Memlük direnişi henüz kırılmamıştı"*; `1517-01-27` maddesi
*"Memlükler şehrin büyük bölümünü geçici olarak ellerinde tuttu"* diyor.
**22 Ocak'ta bitmiş bir devlet 27 Ocak'ta Kahire'yi geri alamaz.**

🔴 **`devletler.js`'in `t:"1517-01-22"` değeri yanlış görünüyor.** Doğrusunun
`1517-02-15` (hukukî son) mi `1517-04-13` (Tomanbay'ın idamı) mı olduğu bir
**karar**; ikisi de belgelerimizde geçiyor. **Ben seçmiyorum** — `devletler.js`
sahibi ile CLAUDE.md sahibi aynı günü söylemeli.

### AG.3-b 🔴 ÜÇ VAKA, TEK SINIF — "devlet kimlik değiştirdi, `savaslar.js` eskisini kullanıyor"

| `savaslar.js` `taraf:` | `devletler.js` ömrü | olay | `devletler.js`'te doğrusu var mı |
|---|---|---|---|
| `sirbistan-prensligi` | 1804-02-14 → **1882-03-06** | 1912-10, 1912-10-08, 1912-10-23, 1912-11-03 | ✅ **`sirbistan-kralligi`** |
| `bulgaristan-prensligi` | 1878-07-13 → **1908-10-05** | 1912-10, 1912-10-08, 1912-10-23, 1912-11-03, 1913-06-29 | ✅ **`bulgaristan-kralligi`** |
| `rodos-sovalyeleri` | 1310-01-01 → **1522-12-25** | 1565-05-18 Malta, 1571-10 İnebahtı | ❌ **karşılığı YOK** |

İlk ikisi **basit düzeltme**: Sırbistan 1882'de krallık, Bulgaristan 1908'de
bağımsız oldu; `devletler.js`'te ardıl kimlikler **zaten var**, `savaslar.js`
güncellenmemiş. 9 kayıt.

Üçüncüsü **modelleme boşluğu**: Şövalyeler 1522'de Rodos'u kaybetti ama 1530'da
Malta'ya yerleşip varlığını sürdürdü. `devletler.js` kuruluşu Rodos'un düşüşünde
kapatıyor. **Ya `t:` uzatılmalı ya `malta-sovalyeleri` diye ikinci kimlik
açılmalı.** Ben öneri yapmıyorum — VERİ KİMLİK'in işi.

📌 Bu üçü **tek tek görülünce üç ayrı tuhaflık**, birlikte görülünce bir sınıf:
*devletin hukukî statüsü değişince `devletler.js` yeni kimlik açıyor, ama ona
atıf yapan öteki dosyalar eski kimlikte kalıyor.* Diu'daki desenin aynısı —
**tekil sanılan vaka, ölçülünce sınıf.**

### AG.3-c 🔴 `1799-05-20` Akkâ Savunması — `taraf:` EKSİK

`taraf:["osmanli"]` — **karşı taraf hiç yazılmamış.** Napolyon'un Akkâ kuşatması;
`fransa` eksik. Ölçüt bu kayıtta karar veremiyor çünkü karşılaştıracak taraf yok.
Tek vaka, ama ölçütün **sessizce yanlış cevap vermek yerine durduğunu** gösteriyor.

## AG.4 🟡 `ic-savas` çıkan 8 madde — biri tartışmalı, sebebini yazıyorum

| `t:` | madde | karşı taraf |
|---|---|---|
| `1515-06-13` | Turnadağ Zaferi ve Dulkadir Beyliği'nin ilhakı | `dulkadir` ⚠️ |
| `1815-01-20` | Bisel Muharebesi | `misir-kavalali` + `suud-birinci` |
| `1832-07-08` | Humus Muharebesi | `misir-kavalali` |
| `1832-07-29` | Belen Geçidi bozgunu | `misir-kavalali` |
| `1832-11-21` | Mısır ordusu Konya'ya girdi | `misir-kavalali` |
| `1832-12-21` | Konya Meydan Muharebesi | `misir-kavalali` |
| `1839-06-24` | Nizip Muharebesi | `misir-kavalali` |
| `1875-06-19` | Hersek İsyanı'nın başlaması | `sirbistan-prensligi` |

✅ **Kavalalı beşlisi ölçütün doğru çalıştığının kanıtı** — koordinatörün
"Konya 1832 `ic-savas` çıkmalı" beklentisini makine kendiliğinden verdi.

⚠️ **Dulkadir tartışmalı ve sebebi bende.** Bu karar `devletler.js`'ten değil,
**benim elle kurduğum tâbiiyet tablosundan** geliyor ve tabloya Dulkadir'i
`1515-06-13 → 1522` diye yazmışım — yani **aralığın başlangıcı savaşın kendi
günü.** Bu keyfî: bir gün kaydırsam sonuç `dis-savas` olurdu.

🔴 **Daha genel sorun:** ölçütün "o tarihte Osmanlı hâkimiyetinde miydi" ayağı
**veriden okunmuyor.** `devletler.js`'te tâbiiyet alanı yok; ben 10 kimlik için
tarih aralığını **elle** yazdım. Yani ölçütün üçte biri makine değil, benim
hükmüm. **Bunu gizlemiyorum** — 8 `ic-savas` kararının tamamı bu tabloya dayanıyor.

**Öneri: `devletler.js`'e tâbiiyet alanı eklensin** (ör. `tabi:[{f,t,ust:"osmanli"}]`).
O zaman ölçüt gerçekten uçtan uca makineyle çalışır ve `ic-savas`/`dis-savas`
ayrımı **elle kurulmuş bir tablodan** değil veriden gelir.

## AG.5 🟡 "Osmanlı taraf değil" çıkan 5 madde — dördü bir KAPSAM SORUSU

| `t:` | madde | `taraf:` |
|---|---|---|
| `1578-08-04` | Vâdisseyl (Kasrılkebir) Savaşı | `fas`, `portekiz` |
| `1921-01-10` | Birinci İnönü Muharebesi | `tbmm-turkiye`, `yunanistan` |
| `1921-04-01` | İkinci İnönü Muharebesi | `tbmm-turkiye`, `yunanistan` |
| `1921-09` | Sakarya Meydan Muharebesi | `tbmm-turkiye`, `yunanistan` |
| `1922-09-09` | Büyük Taarruz ve İzmir'in kurtuluşu | `tbmm-turkiye`, `yunanistan` |

Vâdisseyl doğru: Fas ↔ Portekiz savaşı, Osmanlı desteği dolaylıydı.

🔴 **Ama İstiklâl Harbi dördü de "Osmanlı savaşı değil" çıkıyor** — çünkü
`taraf:` `tbmm-turkiye` diyor, `osmanli` demiyor. **Ölçüt bakımından doğru**
(Ankara hükûmeti Osmanlı devleti değildi) ama sonucu şu: bu dört madde
`dis-savas` etiketi **almayacak.**

**Bu bir veri hatası değil, kapsam kararı** ve koordinatöre ait. İki seçenek:
1. Olduğu gibi kalsın — ölçüt tutarlı, İstiklâl Harbi Osmanlı'nın savaşı değil
2. `tbmm-turkiye` de "bizim taraf" sayılsın — o zaman ölçüte ikinci bir özne eklenir

**Ben 1'i uyguladım** çünkü ölçüt öyle diyor; ama kararın senin olduğunu
biliyorum ve **sessizce geçmiyorum.**

## AG.6 Sırada — 193'e GİRMEDEN önce ölçtüm

Koordinatör *"ölçmeden 193'e girme"* dedi; ölçtüm ve söyleyeceğim şey şu:

**193'ün büyük kısmı elle okunmak zorunda değil.** `savaslar.js`'te `taraf:`
alanı 170 kaydın **108'inde dolu, 62'sinde boş.** Bu 62'yi doldurmak, 193 kronoloji
maddesini tek tek okumaktan **çok daha ucuz** — çünkü bir `taraf:` alanı ortalama
birden fazla kronoloji maddesini çözer (bugün 108 kayıt 104 maddeyi çözdü).

🟢 **Önerim:** 193'e girmeden önce **`savaslar.js`'in 62 boş `taraf:` alanı
doldurulsun** (VERİ SAVAŞ'ın işi). Sonra bu betik yeniden koşar ve geriye gerçekten
elle okunması gereken kaç madde kaldığını **ölçerek** söylerim.

⚠️ **Kalan 193'ün hepsi `savaslar.js`'e bağlanmıyor** — yani bir kısmı hiçbir savaş
kaydına denk gelmiyor ve `taraf:` doldurulsa bile çözülmez. O kısmın büyüklüğünü
**henüz ölçmedim**; 62 alan dolduktan sonra ölçülür.

---

# AH. MEVSİM ÇÖZÜLDÜ · 1387 İKİNCİ TURU TAMAM · bir ÖZETLEYİCİ TUZAĞI daha

> Koordinatörün `gun:` çözümü uygulandı, `1387-06-08` ikinci turu yapıldı,
> `1543` Nice "kaynak yok" diye kapatıldı.

## AH.1 ✅ MEVSİM — `gun:` alanı, emsal ÖLÇÜLDÜ

Koordinatörün çözümü doğru ve emsali sandığımdan çok: `gun:` alanında
**18 mevsim kaydı** var, tek değil.

```
1323 sonbaharı · 1357 sonbaharı · 1381 sonbaharı · 1390 kışı · 1398 yazı
1400-1401 kışı · 1402 sonbaharı · 1403 sonbaharı · 1411 yazı · 1460 yazı
1462 yazı · 1463 yazı · 1468 baharı · 1501 yazı · 1538 yazı · 1715 yazı …
```
Ve Bosna emsali birebir istediğim desen:
```
t:"1463-06-01"  gun:"1463 yazı"  b:"Bosna Krallığı'nın yıkılışı — Fâtih'in Bosna seferi"
```
⇒ **`t:` sıralama için, `gun:` insan için.** *"Ocakta oldu sanılır"* endişem
kapanıyor.

### §AF'deki üç öneri — `gun:` eklenmiş hâli

| `t:` | `gun:` | `b:` |
|---|---|---|
| `1352-01-01` | **`"1352 başları"`** | Orhan Gazi – Ceneviz antlaşması: Galata'ya erzak ve askerî destek |
| `1454-01-01` | **`"1454 yazı"`** | Osmanlı-Kırım müşterek kuvvetlerinin ilk Kefe muhasarası |
| `1553-02-01` | *(gerekmez — gün kesin)* | Osmanlı-Fransız ittifakı |

📌 **Kural olarak yazıyorum:** *kaynağın verdiği hassasiyet, verildiği gibi
yazılır.* Mevsimi aya çevirmek de, ayı güne çevirmek de aynı kusurdur — ikisi de
kaynakta olmayan bir kesinlik uydurur.

## AH.2 ✅ 1387 CENEVİZ AHİDNÂMESİ — taraflar netleşti, ÖNERİYORUM

İki çekiş, ikisi de aynı:

> **"ilk dostluk ve ticaret anlaşması olarak 8 Haziran 1387'de imzalanan ve
> Orhan Gazi ile yapılmış anlaşmayı yenileyen ahidnâmeyi kabul etmek doğru olur."**

> **"bu anlaşma ile iki devlet arasında tesbit edilen vergileri ödemek ve esirlere
> yapılacak davranışları tesbit etmek yoluyla serbest ticaret öngörülüyordu."**

**Taraflar: Osmanlı ↔ Ceneviz.** Belirsizlik kalktı — ahidnâme **Orhan Gazi ile
yapılan (1352) antlaşmayı yeniliyor**, yani Osmanlı tarafı kesin.

### 🎁 Yan kazanç — 1352 önerisi de zenginleşti

Aynı paragraf 1352 hakkında iki şey daha veriyor:
> **"Bu antlaşmanın metni bugüne ulaşmamakla birlikte bundan sonraki olaylar
> muhtevası hakkında fikir vermektedir."**

ve tarafı adlandırıyor: **Paganino Doria ↔ Orhan Gazi.**
⇒ `1352-01-01` maddesinin `kisiler:` alanına **"Orhan Gazi, Paganino Doria"**
yazılabilir.

### 🟢 ÖNERİ — yeni kronoloji maddesi

| alan | değer |
|---|---|
| `t:` | **`1387-06-08`** |
| `b:` | Osmanlı-Ceneviz ahidnâmesi — ilk dostluk ve ticaret antlaşması |
| `k:` | `antlasma` |
| `etiket:` | `antlasma` `diplomasi` `ekonomi` |
| `kaynak:` | `ceneviz` |

⚠️ **`ittifak` etiketi VERMİYORUM.** TDV bunu *"dostluk ve ticaret anlaşması"*
diye tanımlıyor, askerî ittifak demiyor — vergi ve esir muamelesi düzenliyor.
1352'dekinden farkı bu: orada TDV açıkça *"Orhan Gazi Cenevizliler'in yanında yer
almış, Galata'ya erzak yardımında ve **askerî destekte** bulunmuştu"* diyor.
**1352 ittifak, 1387 ticaret.**

**Pencere teyidi:** 1385-1390 arası 13 madde okundu, hiçbiri bu ahidnâme değil. ✅

## AH.3 🔴 ÖZETLEYİCİ TUZAĞI — İKİNCİ VAKA, yine yakalandı

İkinci çekişin özeti şunu yazdı:

> ❌ *"Bu anlaşma **Orhan Gazi döneminde** imzalanmıştır."*

**Bu imkânsız.** Orhan Gazi 1362'de öldü; 1387 ahidnâmesi I. Murad dönemindedir
(`padisahlar.js`: I. Murad 1362-03 → 1389-06). TDV'nin cümlesi *"Orhan Gazi ile
yapılmış anlaşmayı **yenileyen**"* diyor — yani 1352'deki antlaşmayı yeniliyor,
onun döneminde imzalanmıyor. **Özetleyici "Orhan Gazi" adını görüp dönemi
uydurmuş.**

📌 §AB.4'te `bucuktepe-vakasi` için aynı şey olmuştu (uydurma "24 Safer 848").
**İki vakada da yakalayan şey aynı: iç tutarlılık kontrolü.** Orada hicrî↔milâdî
tutmuyordu, burada padişahın ölüm tarihi tutmuyordu.

🟢 **Kuralı genişletiyorum:** *"sayısal veri tek çekişten alınmaz"* yetmiyor —
**iki çekiş de aynı yanlışı üretebilir.** Asıl koruma şu:
> **Gelen her tarih, elimizdeki bağımsız bir veriyle çarpıştırılır**
> (`padisahlar.js` saltanat aralığı · hicrî↔milâdî tutarlılık · `devletler.js`
> ömrü). Kaynak canlı ve iki çekiş aynı olsa bile.

Bugün bu kontrol **üç kez** iş gördü: Buçuktepe (hicrî), 1387 (saltanat),
ve §AG'de kendi ölçüm aracımın metin kıyası (üç haneli yıllar).

## AH.4 🔴 1543 NICE — "KAYNAK YOK", kapatıldı

`fransa` maddesi *"1543'te Nice şehrine karşı ortak bir deniz harekâtı"* diyor,
**gün ve ay vermiyor.** 1535-1545 penceresi okundu (18 madde), Nice yok.

⇒ **Boşluk gerçek, kaynak tarihi yetersiz. Madde yazmıyorum, "kaynak yok" diye
işaretliyorum.** Koordinatörün talimatı bu yönde.

🟡 Not: burada **mevsim çözümü de kurtarmıyor** — TDV "1543" diyor, mevsim bile
vermiyor. `1543-01-01` + `gun:"1543"` yazılabilirdi ama o zaman madde, kaynağın
söylemediği hiçbir şeyi eklemeden **yalnız yılı** taşırdı. Diğer 1543 maddelerinin
(Valpo `07-21`, Estergon `08-10`) yanında sırasız durur. **Değmez.**

## AH.5 Özet — bu turda

| ✅ | 🔴 |
|---|---|
| Mevsim çözümü uygulandı, 3 öneri `gun:` aldı | `1543` Nice — **kaynak yok**, kapatıldı |
| `1387-06-08` Osmanlı-Ceneviz ahidnâmesi — **öneriyorum** | |
| `1352` önerisi `kisiler:` ile zenginleşti | |
| Özetleyici tuzağı **ikinci kez** yakalandı | |

**Yeni canlı slug yok** — bu tur `ceneviz` ve `fransa` üzerinden yürüdü, ikisi de
§AF'de sınanmıştı.

---

# Aİ. MEMLÜK'ÜN SONU · ŞÛRÂ-yı DEVLET · ve iki YAN BULGU

> Koordinatörün iki araştırma işi. **Dört TDV maddesi okundu, dördü de canlı,
> her tarih iki çekişle.** İkisi de kesin sonuç verdi — biri "düzelt", biri
> "düzeltme".

**Bu turda canlı sınanmış 3 yeni slug:** `memlukler` · `ridaniye-savasi` ·
`sura-yi-devlet`

---

## Aİ.1 🔴 MEMLÜK — `devletler.js`'e SAVAŞIN TARİHİ yazılmış, devletin sonu değil

### Teşhis

```
devletler.js  memluk t:"1517-01-22"
savaslar.js   1517-01-22  ad:"Ridaniye"          ← AYNI GÜN
```
**`devletler.js`'in `t:`'si Ridâniye Muharebesi'nin günü.** Yani devletin ömrü,
son meydan savaşının kaybedildiği güne kapatılmış.

### TDV ne diyor

`ridaniye-savasi` (✅ `RİDÂNİYE SAVAŞI - TDV İslâm Ansiklopedisi`):
> Savaş **28 Zilhicce 922 / 22 Ocak 1517**.
> *"Memlükler tamamen dağıtıldı"* — **ama devlet bitmedi**: Tomanbay 7000
> kişiyle Kahire'ye çekildi, *"4-5 Muharrem 923 gecesi… şehir içinde direniş
> başlattı"*, üç gün sokak savaşı sürdü.
> **"yakalanıp idam edilmesiyle (21 Rebîülevvel 923 / 13 Nisan 1517)"** Mısır'da
> Osmanlı idaresi tam olarak kuruldu.

`memlukler` (✅ `MEMLÜKLER - TDV İslâm Ansiklopedisi`), maddenin tanım aralığı
**1250-1517**:
> **"Böylece Memlükler Devleti tarihe karıştı ve toprakları Osmanlılar'ın eline
> geçti"** — ve bu cümle **Tomanbay'ın idamı bağlamında** kullanılıyor
> (`21 Rebîülevvel 923 / 13 Nisan 1517`).

### 🟢 CEVAP — koordinatörün kavramsal sorusuna

Sorun şuydu: *"bir devletin `t:`'si son hükümdarının düştüğü gün mü, hukukî devir
günü mü?"*

**TDV son hükümdarın düştüğü günü alıyor.** Ne savaşı (22 Ocak), ne hutbeyi
(15 Şubat) — **Tomanbay'ın idamını (13 Nisan)** devletin sonu sayıyor.

⇒ **`devletler.js` `memluk` `t:"1517-01-22"` → `"1517-04-13"`.**

Bu değişiklik **üç otoriteyi hizalıyor**:
| otorite | diyor |
|---|---|
| CLAUDE.md §3.5 | `1517-04-13` ✅ zaten böyle |
| TDV `memlukler` + `ridaniye-savasi` | `1517-04-13` ✅ |
| `data/olaylar*.js` | `1517-04-13 "Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin sonu"` ✅ zaten var |
| **`data/devletler.js`** | `1517-01-22` 🔴 **tek aykırı** |

### 🟡 `1517-02-15` maddesi çelişmiyor — açıklıyorum

Kronolojideki `1517-02-15` maddesi *"1250'den beri süren Memlük hâkimiyetinin
**hukuken** sona erdiğinin ilânıdır"* diyor (Kahire'de hutbenin Yavuz adına
okunması). Bu, `t:"1517-04-13"` ile **çelişmez**: hutbe **Osmanlı hâkimiyetinin
ilânı**, idam **Memlük devletinin sonu.** Arada iki ay boyunca tahtından edilmiş
bir sultan firarda — ikisi de doğru.

**Yani üç tarihten biri yanlış değil, ikisi farklı şeyi anlatıyor; yalnız
`devletler.js`'inki yanlış yere konmuş.**

### ⚠️ Ve TDV kendi içinde bir gün oynuyor — hangisinin doğru olduğunu söylüyor

`memlukler` maddesi Ridâniye'yi *"29 Zilhicce 922 / 23 Ocak 1517"* diye veriyor;
`ridaniye-savasi` maddesi **"28 Zilhicce 922 / 22 Ocak"** diyor ve ekliyor ki
29 Zilhicce / 23 Ocak **yanlış kaydedilmiş** bir tarihtir.

⇒ **İhtisas maddesi genel maddeyi düzeltiyor.** Ve bizim `savaslar.js`
`1517-01-22` yazıyor — **doğru olan.** ✅

📌 Buradan bir kural: **iki TDV maddesi çeliştiğinde, olayın kendi maddesi
esastır.** Genel madde (devlet, şehir) tarihi ikincil aktarır.

---

## Aİ.2 🎁 YAN BULGU — Ridâniye maddemiz AY HASSASİYETİNDE

```
data/olaylar*.js   t:"1517-01"  b:"Ridaniye — Mısır'ın fethi ve hilâfet"
data/savaslar.js   t:"1517-01-22"  ad:"Ridaniye"
```
Kronoloji maddesi **ay hassasiyetinde** — CLAUDE.md §8 ihlali; ayın 1'ine
genişleyip **21 gün önce** sıralanıyor. Dizin doğru günü zaten taşıyor, TDV de
onaylıyor.

### 🟢 DÜZELTME ÖNERİSİ
`t:"1517-01"` → **`t:"1517-01-22"`**, `kaynak:"ridaniye-savasi"` eklenerek.

⚠️ Senin kuralın gereği aynı pakette soruyorum: **bu maddeye bağlı bir
`yerlesimler.js` kırılması var mı?** Ridâniye Mısır'ın fethini açan savaş —
kırılma **olması muhtemel** ve tarih 21 gün kayarsa Değişmez 2 penceresi
etkilenebilir. **Uygulayıcı Değişmez 2'yi mutlaka koştursun.**

📌 Not: bu madde §Z.4'ün "12 penceresiz savaş" listesinde **çıkmamıştı**, çünkü
`1517-01` ile `1517-01-22` arası 21 gün ve eşik ±30. Yani denetim **"madde var"
diyordu ve haklıydı** — ama tarih yine de yanlıştı. *"Madde var mı ≠ doğru
madde mi"*nin bir çeşidi daha: **madde doğru, tarihi kaba.**

---

## Aİ.3 ✅ ŞÛRÂ-yı DEVLET — MÜKERRER DEĞİL, İKİSİ DE DOĞRU

`sura-yi-devlet` (✅ `ŞÛRÂ-yı DEVLET - TDV İslâm Ansiklopedisi`), iki çekiş aynı.
**1868'de ÜÇ ayrı olay var:**

| tarih | ne oldu |
|---|---|
| **5 Mart 1868** | İrade: Meclis-i Ahkâm-ı Adliyye, **Şûrâ-yı Devlet** ve **Dîvân-ı Ahkâm-ı Adliyye** diye ikiye ayrıldı. Midhat Paşa birincisine, Ahmed Cevdet Paşa ikincisine tayin edildi. |
| 1 Nisan 1868 | İç tüzük yürürlüğe girdi |
| **10 Mayıs 1868** | **Resmî açılış**: Bâbıâli'de, Sadrazam Âlî Paşa padişahın nutkunu okudu |

⇒ **Bizim iki maddemiz de doğru ve gerçekten ayrı olay:**
```
1868-03-05  "Şûrâ-yı Devlet kuruldu"        ← kuruluş iradesi
1868-05-10  "Şûrâ-yı Devlet'in açılışı"     ← resmî açılış töreni
```

### 📌 DENETÇİ'ye — bu bir YANLIŞ POZİTİF

Düzeltilmiş mükerrer denetiminin bulduğu 3 "gerçek" çiftten **biri gerçek değil.**
Benzerlik 0,500 çıkıyor çünkü başlıkların ikisi de "Şûrâ-yı Devlet" içeriyor —
ama fiiller farklı (*kuruldu* ↔ *açılışı*) ve **fark tam da olayın kendisi.**

🟡 Bu, denetimin **yapısal sınırı**: aynı kurumun iki farklı aşaması, kelime
benzerliğiyle mükerrerden ayrılamaz. Aynı `kaynak:` slug'ını taşımaları da ayırt
edici değil — **doğru davranış zaten bu** (tek TDV maddesi iki olayı anlatıyor).

**Öneri: mükerrer denetimi çıktısına "aynı kurum/kişi, farklı aşama" diye bir
elle-eleme kademesi girsin** — kuruluş↔açılış, tayin↔azil, kuşatma↔fetih çiftleri
bu sınıfa düşecek ve hepsi meşru.

---

## Aİ.4 ✅ `tbmm-turkiye` İKİNCİ ÖZNE — uygulandı, yorumuyla

Koordinatörün kararı betiğe girdi ve **koda yorum olarak** yazıldı:

```
# ⚠️ KAPSAM KARARI, TARİHÎ İDDİA DEĞİL: hukuken TBMM hükûmeti Osmanlı devleti
# DEĞİLDİR. İkinci özne, atlasın 1923'e kadar izlediği siyasetin 1920 sonrası
# ÇİFT olmasından geliyor.
```

**Yeni sayım:**
| sınıf | önce | sonra |
|---|---:|---:|
| `dis-savas` | 91 | **95** |
| `ic-savas` | 8 | 8 |
| Osmanlı taraf değil | 5 | **1** |
| UYARI | 14 | 14 |

Üçüncü sınıfta yalnız **`1578-08-04` Vâdisseyl (Kasrılkebir)** kaldı —
`fas` ↔ `portekiz`, Osmanlı desteği dolaylıydı. **Doğru sonuç.**

---

## Aİ.5 Özet

| ✅ düzelt | ✅ düzeltme |
|---|---|
| `devletler.js` `memluk` `t:` → **`1517-04-13`** | Şûrâ-yı Devlet iki maddesi — **ikisi de doğru** |
| `olaylar*.js` Ridâniye `t:"1517-01"` → **`1517-01-22`** | `savaslar.js` Ridâniye `1517-01-22` — **zaten doğru** |

**Açık kalan:** `devletler.js`'e `tabi:` alanı gelene kadar **8 `ic-savas` kararı
"elle tabloya dayanıyor" damgalı** — kesinleşmiş sayılmasın. Ve `savaslar.js`'in
62 boş `taraf:` alanı dolunca betiği yeniden koşup 193'ün ne kadarının elle
okunacağını ölçerim.
