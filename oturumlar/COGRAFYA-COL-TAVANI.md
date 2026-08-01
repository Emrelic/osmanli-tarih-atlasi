# ÇÖL TAVANI — şartname

**Yazan:** COĞRAFYA (G) · **Tarih:** 31 Temmuz 2026
**Uygulayacak:** MOTOR (`arac/uret_petek.py`) · **Onay:** KOORDİNATÖR + kullanıcı
**Ölçüm dayanağı:** `oturumlar/COGRAFYA-YASLAMA.md` + Ölçüm 10-12 (bu belge)

---

## 0. KULLANICININ YEDİ KURALI

Kullanıcı 31 Temmuz'da sınır çizme kurallarını madde madde yazdı. **Bugüne
kadar hiçbir belgede yazılı değildi.** `VERI-YAPISI.md`'ye koordinatör
taşıyacak; burada şartnamenin dayanağı olarak duruyor.

> **1)** Arada dağ, deniz, nehir, çöl yok ise diğer yerleşim yeri ile
> aralarındaki araziyi **eşit bölerek**.
>
> **2)** **Deniz** var ise sınır **deniz kıyısına dayanır**. Deniz kıyısı
> boyunca, diğer yerleşimin bölgesi onu kesene kadar kıyıyı takip eder ve
> diğerinin kıyıya yaslanan bölgesinde biter.
>
> **3)** İki yerleşim arasında **dağ** var ise sınır **dağın tepesinden** ve
> bu iki yerleşimi birleştiren doğruya **dik** uzanan bir şekilde dağın
> sırtlarından geçer; dağın bir yamacı A'ya, diğer yamacı B'ye ait olur.
>
> **4)** İki yerleşim arasında **nehir** var ise sınır nehirden geçer ve
> nehre yaslanır.
>
> **5)** **Göl** var ise gölün konumuna bağlı olarak bir tarafı A'ya diğeri
> B'ye ait olur; gölün çevresinde 4 şehir var ise kıyıları ve etrafındaki
> bölgeleri **uzaklıklarına göre** bölerler. Gölün bir tarafındaki iki şehir
> arasında dağ varsa sınır dağın sırtı, nehir varsa nehir olur.
>
> **6)** İki yerleşim arasında **çöl** var ise aralarındaki toprakları
> **cetvelle bölebilirler**; her toprak kendine **en yakın** yerleşime ait
> olur. Bir çölde bulunan 10 yerleşim, çölün topraklarını en yakınlık
> esasıyla böler. **Fakat çölün bir yerinde tepe, dağ, göl var ise sınırlar
> o engele göre konumlanır.**
>
> **7)** Yerleşimler arasındaki **yollar** genellikle düz yerlerden, vadilerden,
> dere yataklarından geçer; bu hattın olduğu yer en yakın şehre bağlanır.

### Motorun bugünkü durumu — denetlendi

| # | Motorda | Not |
|---|---|---|
| 1 | ✅ Voronoi tam olarak bu | — |
| 2 | ✅ kara maskesi kırpması | sınır köşelerinin %63,2'si kıyıda |
| **3** | 🔴 **AÇIK KALEM** | aşağıda §7.1 |
| 4 | 🟡 var ama liste kırık | `COGRAFYA-YASLAMA.md` §6.10 |
| 5 | ✅ fiilen oluyor | 326 köşe göl kıyısında |
| **6** | 🟡 doğru **ama tavansız** | **bu şartnamenin konusu** |
| 7 | ❌ yok | pencerede 2 `Valley` poligonu — veri yetersiz |

---

## 1. SORUN — ölçülmüş

Kural 6 doğru ama **sınırsız**. Kullanıcının itirazı:

> *"Bir yerleşim çöl kıyısında diye Sahra'nın diğer yakasındaki şehirle koca
> çöl alanını ikiye bölmemeli. … Fizan'daki şehrin alanı 1000 km öteye pat
> diye geçecek — ülke sınırlarında suni bir büyüklük yaratır."*

**Ölçüldü, itiraz doğru:**

```
ÇÖL İÇİ — en yakın yerleşime mesafe
  medyan 201 km · %90 481 km · AZAMİ 1.077 km

En uzak çöl noktaları bugün kime bağlı:
  1.077 km → Agadir     (-11.75, 21.00)
  1.069 km → Timbuktu   (-11.75, 20.75)
  1.058 km → Timbuktu   (-11.75, 20.50)
```

### Ama teşhis "genel kural eksikliği" DEĞİL

| bölge | ortalama | medyan | %90 | azami |
|---|---|---|---|---|
| Anadolu | 47 | 44 | 84 | **125** |
| Rumeli/Balkan | 57 | 50 | 109 | **199** |
| Mısır (Nil) | 81 | 77 | 145 | **225** |
| Suriye-Irak | 106 | 73 | 252 | 399 |
| Libya içi | 124 | 120 | 206 | **296** |
| Arabistan içi | 176 | 173 | **300** | 417 |
| **Batı Sahra** | **417** | **391** | **711** | **1.078** |

Libya (120) ve Arabistan (173) **zaten makul** — vaha var, çöl düzgün bölünüyor.
Bozuk olan tek bölge Batı Sahra.

---

## 2. KURAL — 300 km

> **Bir yerleşimin peteği, ÇÖL içinde kalan kısmında, yerleşim noktasından
> 300 km'den uzağa uzanamaz.**

### 2.1 Sayının gerekçesi — üç kısıttan çıktı

**ALT SINIR — vaha ağı kopmamalı.** Çöl içindeki 120 yerleşimin birbirine
medyan mesafesi **120 km**, %90'ı **312 km**. Tavan 150 km'nin altına inerse
komşu vahalar birbirine değemez; Fizan tek bir bölge olmaktan çıkıp kopuk
lekelere dağılır.

**ÜST SINIR — 400 km üstü hiçbir şeyi düzeltmez.** Batı Sahra'nın medyanı
391 km; tavan 400'ün üstündeyse o bölge olduğu gibi kalır.

**300 km yerleşik toprağa HİÇ DOKUNMAZ.** Anadolu azami 125 · Rumeli 199 ·
Mısır 225 — hiçbiri 300'e yaklaşmıyor. Libya %90'ı 206 → tamamen korunur.
Arabistan %90'ı **tam 300** → vaha kuşağı sağlam kalır, kesilen tek şey
Rub'ul Hâlî'nin ortası olur ki `CLAUDE.md §3` zaten oranın **kasten boş**
olması gerektiğini yazıyor.

### 2.2 Kabul edilen bedel

```
tavan     Sahra'nın sahipsiz kalan kısmı
100 km              80,1 %
200 km              50,6 %
300 km              32,4 %   ← seçilen
400 km              18,0 %
500 km               8,7 %
```

⚠️ **İkisi birden alınamaz — bu estetik değil aritmetik.** Çölde 120 yerleşim
ve 120 km medyan aralıkla Sahra'yı boşluksuz doldurmak ancak ~500 km erişimle
mümkün; 500 km ise kullanıcının itiraz ettiği "pat diye geçme"nin kendisi.
**Sahra'nın %32,4'ünün sahipsiz kalması kusur değil, kabul edilmiş karardır.**

---

## 3. İKİ MUAFİYET

### 3.1 🔴 SU KORİDORU — tavan yalnız ÇÖLE DOĞRU işler

Kullanıcı: *"Nil yatağı var ise orası çöl değildir. Nil yatağının iki yanında
çöl olabilir elbet. Ama bu nehrin kıyısındaki şehirler bir tarafı Nil'e dayanan
diğer tarafı çöle uzanan bölgeyi kullanırlar."*

**Ölçüldü, haklı:** Natural Earth'ün `Western Desert` / `Eastern Desert`
lekeleri **Nil vadisinin üstünden geçiyor, vadiyi oymuyor.** Çöl poligonunun
içinde ve Nil'e 55 km'den yakın **35 yerleşim** var:

```
Esna 0 km · Sennar 1 · Ed-Düveym 1 · Şendî 1 · Berber 1 · Debbe 1 · Kerma 1
Edfû 1 · Uksur 1 · Cirge 1 · Ahmîm 1 · Asyut 1 · Minye 1 · Vad Medenî 2
Merevî 2 · Dongola 2 · İbrim 2 · Kûs 2 · Kına 2 · Asvan 3 · Kosti 4
Kûm Ombo 4 · Tahtâ 4 · Deyrût 5 · Mellevî 5 · Hartum 8 · Ebû Hamed 8
Vâdî Halfâ 8 · Ferşût 9 · Behnesâ 19
```

**Ham tavan Mısır'ı keserdi.** Muafiyet şart.

> **Kural:** Su hattına (nehir · göl kıyısı · deniz kıyısı) **30 km**'den yakın
> alanda tavan UYGULANMAZ.

**W = 30 km'nin gerekçesi:** ölçülen azami Nil mesafesi 19 km (Behnesâ);
30 km pay bırakır. Doğrulandı — çöl poligonu içindeki 120 yerleşimin su hattına
mesafe dağılımı:

| Mesafe | Adet | Sonuç |
|---|---|---|
| 0-10 km | **48** | muaf — Nil vadisi · Ceyhun/Hârizm · Akdeniz kıyısı |
| 10-30 km | **7** | muaf |
| 30-60 km | 4 | tavana tâbi |
| **60+ km** | **61** | **tavana tâbi — gerçek çöl yerleşimleri** |

Tavana tâbi olan 61 kayıt: Tamanrasset · Gât · Ubârî · Murzuk (Fizan) ·
Kufra · Hoggar · Tibesti · Tâsîlî n'Accer · Rebyâne · Vâv el-Kebîr ·
Gilf el-Kebîr · Ma'tan es-Sarra · Sahra batısı …

> **Muafiyet ne fazla ne eksik kesiyor: 55 su kenarı yerleşimi korunuyor,
> 61 gerçek çöl yerleşimi tavana giriyor.**

⚠️ Bu, kullanıcının **2. kuralının** (deniz kıyısı boyunca uzanma) ve
**5. kuralının** (göl çevresi paylaşımı) çöl karşılığıdır — mantık kural
setinde zaten var, yeni bir kavram icat edilmiyor.

### 3.2 Çöl dışı hiç etkilenmez

Tavan **yalnız `Desert` sınıfı poligonların içinde** işler. Çölün dışındaki
hiçbir petek kısalmaz.

---

## 4. UYGULAMA — MOTOR için

### 4.1 Formül

```
petek_son = petek_voronoi ∩ ( disk(tohum, R)  ∪  ÇÖL_DEĞİL  ∪  su_koridoru )

R            = 300 km
ÇÖL          = FEATURECLA == "Desert", pencere içi, alan ≥ 0.05  (31 poligon)
su_koridoru  = buffer(nehir ∪ göl_kıyısı ∪ deniz_kıyısı, 30 km)
```

### 4.2 🔴 GÜVENLİK ÖZELLİĞİ — tavan yalnız ÇIKARIR, hiç EKLEMEZ

`petek_son ⊆ petek_voronoi` her zaman doğrudur. Sonuçları:

- **Yeni emilme riski yok.** `CLAUDE.md §2`'nin klasik hatası (nokta olmayan
  bölge yanlış sahibe boyanır) bu değişiklikle **üretilemez**.
- **Değişmez 1 etkilenmez.** Kural nokta değil ALAN çıkarır; her yerleşim
  kendi diskinin merkezinde olduğu için sahipsiz kalamaz.
- **Değişmez 2 etkilenmez.** Tavan sabit bir yarıçaptır, zamanla değişmez →
  yeni kırılma üretmez.

### 4.3 ⚠️ DERECE ≠ KİLOMETRE — canlı tuzak

Motor her yerde **derece** mesafesi kullanıyor (`nehir_mes=0.30`,
`sirt_mes=0.35`, `KORUMA_PAYI=0.06`). Derece cinsinden çizilen bir daire
yeryüzünde **elips**tir:

| enlem | 1° boylam | 300 km kaç derece |
|---|---|---|
| 0° | 111,3 km | 2,70° |
| 25° (Sahra ortası) | 100,9 km | **2,97°** |
| 35° (Akdeniz kenarı) | 91,2 km | **3,29°** |

Sabit `2,70°` yarıçap kullanılırsa doğu-batı erişim Sahra'da **272 km**,
Akdeniz kenarında **246 km** olur — yani tavan kuzeye gidildikçe kendiliğinden
sıkılaşır ve **hedeflenen 300 km hiçbir yerde tutmaz.**

> **Şart:** yarıçap ya projeksiyonlu hesaplansın ya da boylam ekseni
> `cos(enlem)` ile ölçeklensin. Sabit derece **kullanılmasın**.

### 4.4 Sahipsiz alanın GÖRÜNÜMÜ — yeni mekanizma İCAT EDİLMESİN

Motor bunu **zaten biliyor**:

- `arac/uret_petek.py:911` — `SERBEST KENAR — sahipli ↔ SAHİPSİZ sınırı`
- `arac/uret_petek.py:1270` — *"Bu kenar KESKİN ÇİZİLMEMELİDİR — iki devlet
  arasındaki sınır değil, devlet ile boş alan arasındaki artefakttır"*
- `js/app.js:435` — sönen kenar çizimi
- `window.SERBEST_U` — kenar başına **km cinsinden belirsizlik**, kalınlık
  buradan geliyor

> 300 km tavanının görsel sonucu **sönen kenar** olmalı, keskin çizgi değil.
> Bu yalnız pratik değil tarihî olarak da doğru: **çöldeki hâkimiyet keskin
> bir çizgiyle bitmez.** Mevcut SERBEST havuzuna girecek, yeni katman gerekmez.

### 🔴 4.5 SIRA ŞARTI — tavan, katman düzeltmesinden SONRA inmeli

⚠️ **Yukarıdaki §4.4 yazıldığında yarısı yanlıştı ve düzeltiliyor.**
"Motor bunu zaten biliyor" **veri boru hattı için doğruydu, ÇİZİM için
değildi**: `serbest-hale` / `serbest-cekirdek` katmanları `js/app.js:652-660`'ta
tanımlıydı ama kaynağa **hiç veri beslenmiyordu.**

Ölçüldü: veri beslemesi (`getSource("serbest").setData(d.sb …)`) 31 Temmuz'da
`8d9b51b` commit'iyle geldi — *"Serbest kenar katmanı: sahipsiz alanla sınır
artık SÖNÜYOR"*. Yani `SERBEST` + `SERBEST_U` **üç koşudur üretiliyor ve
ekranda karşılığı yoktu.**

> **ŞART: çöl tavanı, `serbest-hale` düzeltmesi YAYINA GİRDİKTEN SONRA inmeli.**
>
> Önce inerse tavanın ürettiği sahipsiz sınırlar **keskin kırmızı çizgi**
> olarak görünür. Kullanıcı bunu "Sahra'nın ortasına devlet sınırı çizilmiş"
> diye okur — yani şikâyeti **azaltmak yerine artırır**, üstelik tam da
> düzeltmek için yapılan işle.

📌 Bu vakanın kendi dersi, `CLAUDE.md §7-6`'nın bir başka yüzü
(*"bir düzeltmenin GÖRÜNÜR olduğunu doğrula"*):
> **Bir mekanizmanın verisinin üretiliyor olması, çiziliyor olması demek
> değildir.** Üretim tarafına bakıp "mekanizma var" demek yetmiyor; çıktının
> ekrana ulaştığı da ayrıca doğrulanmalı. Üç koşu boyunca kimse bakmadı çünkü
> iki taraf da kendi içinde geçerli görünüyordu.

---

## 5. A/B GEÇME ÖLÇÜTÜ

`OGRENILENLER §33` (Küngrat): **kısıtın sağlanması amacın sağlandığını
göstermez.** Ölçüt iki yönlü olmalı — ama iki yön **aynı türden değil.**

### 🔴 5.0 ÖNCE BİR DÜZELTME: yapısal garanti ÖLÇÜLMEZ, İNCELENİR

Bu bölümün ilk hâlinde dört bölge sayısı (Anadolu 125 · Rumeli 199 ·
Mısır 225 · Libya 206) **A/B ölçütü** olarak yazılmıştı. **Yanlıştı.**

`§3.2` zaten şunu söylüyor: **tavan yalnız `Desert` poligonlarının İÇİNDE
işler.** Yani çöl dışındaki hiçbir petek zaten kısalmaz — bu bir **yapısal
garanti**. Dört bölge sayısı o garantiyi *ölçmeye* çalışıyordu ve sonuç
**kutu seçimine bağlı** çıkıyordu:

- kutu yanlışsa → garanti sağlanmıyor **sanılır**
- kutu doğruysa → zaten sağlanacağı **biliniyor**

Her iki durumda da ölçüm, ölçtüğü şey hakkında bilgi taşımıyor; yalnız
**kendi kutusu** hakkında konuşuyor.

> **Yapısal olarak garanti edilen şey ölçülmez, incelenir.** Ölçmeye kalkmak
> hem gereksiz hem yanıltıcıdır.

**Kanıtı ölçümün kendisinde:** "çöl dışı azami" sütunu eklenince Suriye-Irak
**344**, Arabistan **366**, Batı Sahra **349** çıktı — üçü de 300'ün üstünde.
Yani *"300 km yerleşik toprağa hiç dokunmaz"* cümlesi üç bölgede yanlış; ama
tavan yine de onlara dokunmuyor, çünkü **çöl dışındalar.**

### 5.1 YAPISAL — kod incelemesiyle doğrulanır, ölçümle değil

| Şart | Nasıl doğrulanır |
|---|---|
| Tavan yalnız `Desert` poligonu içinde uygulanıyor | `§4.1` formülündeki `ÇÖL_DEĞİL` terimi kodda var mı |
| Su koridoru muafiyeti uygulanıyor | `su_koridoru` terimi kodda var mı, W = 30 km |
| Tavan yalnız çıkarıyor (`petek_son ⊆ petek_voronoi`) | `§4.2` |

⇒ Bu üçü **koşu gerektirmez.** Kod okunur, ya vardır ya yoktur.

### 5.2 ÖLÇÜM — amaç gerçekleşti mi (çöl İÇİNDE)

| Ölçü | Bugün | Beklenen |
|---|---|---|
| Batı Sahra azami erişim | 1.078 km | **≤ 300 km** |
| Batı Sahra medyan erişim | 391 km | belirgin düşüş |
| Çölün sahipsiz kalan oranı | — | ~%32,4 |
| Sıfır alanlı petek | 0 | **0** (`KORUMA_PAYI` sınanmalı) |
| Değişmez 1 (sahipsiz nokta) | 38 | sabit |
| Değişmez 2 (açık kırılma) | 0 | sabit |

### 5.3 Yalnız "ihlal yok" DEME — dağılımı raporla

- kaç petek kısaldı, ne kadar (medyan · %90 · azami km²)
- **tavana yapışan** petek sayısı (tam 300 km'de duran)
- toplam sahipsizleşen alan (km²)

### 5.4 🔴 MOTOR'un çıpası ASIL, bu tablo BİLGİ

MOTOR çıpayı **tavanın kullandığı çöl sınıflandırmasından** türetiyor.
**Doğru yol odur ve bu tablo onun yerine geçmez:**

> Buradaki bölge tablosu **kutuya** bağlı; MOTOR'unki **tanıma** bağlı.
> Tanım daha sağlam — kutu bir tercih, tanım tavanın kendisi.

⚠️ MOTOR **iki ölçüte birden uymaya çalışmasın.** Aşağıdaki §5.5 tablosu
A/B geçme şartı **değildir**, coğrafî bağlam bilgisidir.

### 5.5 Bölge erişim tablosu — BİLGİ (A/B ölçütü DEĞİL)

965 nokta · ızgara 0,2° · `ne_10m_land` içindeki noktalar · en yakın yerleşime
mesafe · derece × 111,32 (**cos düzeltmesi yok**) · **çöl noktaları dışlanmaz**:

| Bölge | n | ortalama | medyan | %90 | **AZAMİ** | çöl dışı azami |
|---|---|---|---|---|---|---|
| Anadolu | 2393 | 47 | 44 | 84 | **125** | 125 |
| Rumeli/Balkan ⚠️ | 2296 | 46 | 43 | 85 | **158** | 158 |
| Suriye-Irak | 3051 | 106 | 73 | 252 | **399** | 344 |
| Mısır (Nil) | 1143 | 81 | 77 | 145 | **225** | 141 |
| Libya içi | 3736 | 124 | 120 | 206 | **296** | 207 |
| Arabistan içi | 4336 | 176 | 173 | 300 | **417** | 366 |
| Batı Sahra | 5121 | 417 | 391 | 711 | **1078** | 349 |

**Kutular** (çıpanın ayrılmaz parçası — ilk hâlinde YAZILMAMIŞTI):

```
Anadolu       box(26,   36, 45, 42)     Mısır (Nil)   box(29, 22, 34, 32)
Rumeli/Balkan box(18.5, 38, 30, 48)     Libya içi     box(10, 22, 25, 32)
Suriye-Irak   box(35,   29, 49, 38)     Arabistan içi box(40, 17, 55, 30)
Batı Sahra    box(-12,  18,  5, 30)
```

⚠️ **Rumeli kutusu DÜZELTİLDİ: 16°D → 18,5°D.** Eski kutu Calabria, Puglia ve
Sicilya'yı içine alıyordu; azami 173 km'nin en yakın yerleşimi **Taranto**,
ikincisininki **Messina** — yani İtalya. Düzeltilmiş kutuda azami **158 km**
ve noktası **Suçava (Suceava)**, gerçek bir Boğdan noktası.
📌 Seçim: **kutu düzeltildi, ad korundu.** (Alternatif adı değiştirmekti;
"Rumeli" bu projede anlamlı bir birim olduğu için kutu daraltıldı.)

📌 **İstatistik: AZAMİ.** İlk hâlinde Libya için `%90` sütunu (206) yazılmış,
diğer üçü için `AZAMİ` yazılmıştı. Libya'nın azamisi **296**'dır.

📌 **Rumeli 199 → 158:** 199 sayısı **951 noktayla** ve **eski kutuyla**
ölçülmüştü. Fark iki sebepten: kutu düzeltmesi (İtalya çıktı) ve 14 yeni nokta.
Nokta eklemek mesafeyi **yalnız azaltabilir** — artsaydı ölçüm bozuk olurdu.
Bu, kendini doğrulayan bir tutarlılık kontrolüdür.

### 5.6 ÇIPA BETİĞİ — tam metin

⚠️ Betik scratchpad'de bırakılmadı; scratchpad oturumla birlikte silinir ve
Kırım kalibrasyonunda (`§22`) çıpayı üreten betik **tam bu yüzden** bulunamadı.
Metin buradadır:

```python
# ÇIPA — bölge erişim tablosu (COGRAFYA-COL-TAVANI.md §5.5)
import json, os, sys
from shapely.geometry import shape, box, Point
from shapely.ops import unary_union
from shapely.strtree import STRtree

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
BM  = os.path.join(KOK, "veri-kaynak")
sys.path.insert(0, os.path.join(KOK, "arac"))
BOLGE, ADIM, KM = box(-12, 1.5, 62, 62), 0.2, 111.32

KUTU = {
    "Anadolu":       box(26,   36, 45, 42),
    "Rumeli/Balkan": box(18.5, 38, 30, 48),   # 16 → 18.5: İtalya çıkarıldı
    "Suriye-Irak":   box(35,   29, 49, 38),
    "Mısır (Nil)":   box(29,   22, 34, 32),
    "Libya içi":     box(10,   22, 25, 32),
    "Arabistan içi": box(40,   17, 55, 30),
    "Batı Sahra":    box(-12,  18,  5, 30),
}

kara = []
for f in json.load(open(os.path.join(BM,"ne_10m_land.geojson"),encoding="utf-8"))["features"]:
    g = shape(f["geometry"]).buffer(0)
    if g.is_empty or not g.envelope.intersects(BOLGE): continue
    gi = g.intersection(BOLGE)
    if not gi.is_empty: kara.append(gi)
KARA = unary_union(kara)

COL = []
for f in json.load(open(os.path.join(BM,"ne_10m_geography_regions_polys.geojson"),
                        encoding="utf-8"))["features"]:
    p = f["properties"]
    if (p.get("FEATURECLA") or "").strip() != "Desert": continue
    g = shape(f["geometry"]).buffer(0)
    if g.is_empty or not g.envelope.intersects(BOLGE): continue
    g = g.intersection(BOLGE)
    if not g.is_empty and g.area >= 0.05: COL.append(g)
COL = unary_union(COL)

import girdi
Y = girdi.yukle(sessiz=True)
N = [Point(y["lon"], y["lat"]) for y in Y]
T = STRtree(N)

for ad, k in KUTU.items():
    x0, y0, x1, y1 = k.bounds
    hepsi, coldisi = [], []
    x = x0
    while x < x1:
        y = y0
        while y < y1:
            p = Point(x, y)
            if KARA.contains(p):
                d = N[int(T.nearest(p))].distance(p) * KM
                hepsi.append(d)
                if not COL.contains(p): coldisi.append(d)
            y += ADIM
        x += ADIM
    hepsi.sort(); coldisi.sort(); n = len(hepsi)
    print(f"{ad:<16}{n:>6}{sum(hepsi)/n:>10.0f}{hepsi[n//2]:>9.0f}"
          f"{hepsi[int(n*.90)]:>8.0f}{hepsi[-1]:>9.0f}"
          f"{(coldisi[-1] if coldisi else 0):>16.0f}")
```

---

## 6. VERİ TARAFI — bağımsız iş

Batı Sahra'nın 391 km medyanı **kuralın değil VERİNİN** eksikliği.
`CLAUDE.md §2`: *"o bölgede yerleşim noktası var mı? Cevap hayırsa hata orada,
kodda değil."*

Önerilen kervan yolu noktaları → **ARAP-AFRİKA (A3)**:
Tindûf · Şinkît · Vâdân · Tîşît · Vâlâta · Smara

⚠️ **Tavan bu noktalar eklenmeden de uygulanabilir; ikisi bağımsızdır.**
Nokta eklenince tavanın kestiği alan kendiliğinden küçülür — sıra beklemesin.

---

## 7. AÇIK KALEMLER

### 7.1 🔴 KURAL 3 — motor dağı tepeden değil ETEKTEN yaslıyor

Kullanıcı *"dağın tepesinden, iki şehri birleştiren doğruya **dik**, bir yamacı
A'ya diğeri B'ye"* diyor. Motor bunu yapmıyor:

```python
# uret_petek.py:200
cekirdek = g.buffer(-0.12)
SIRTLAR.append(cekirdek.boundary if not cekirdek.is_empty else g.boundary)
```

`buffer(-0.12).boundary` **kapalı bir halkadır** — sırt ekseni değil, dağın
ETRAFI. Sınır tepeden değil etekten geçebilir; "bir yamaç A'ya diğeri B'ye"
şartı hiç sağlanmıyor.

**Kullanıcı bunu tarif ederken motorun ne yaptığını bilmiyordu.** Tarifi ile
kod farklı.

Doğru çözüm **su bölümü çizgisi** (watershed divide) — tarihî sınırların ezici
çoğunluğu odur. `HydroSHEDS/HydroBASINS` hazır, küresel, vektör bir havza seti
sunar ve sınırları doğrudan su bölümü çizgileridir.
⚠️ **Lisansı kullanılmadan önce doğrulanmalı** — `veri-kaynak/KAYNAK-LICENSE.md`
bir dönem `404: Not Found` içeriyordu, yani lisans kontrolü bir kez zaten
atlanmıştı.

Koordinatör kararı: **şimdi değil, yaslama paketi yayına girdikten sonra.**

### 7.2 Kural 7 — vadi / dere yatağı / yol hattı

Veri yok: pencerede yalnız 2 `Valley` poligonu var (ikisi de GREAT RIFT
VALLEY). Yol verisi hiç yok. Su bölümü çizgisi geldiğinde dere yatakları da
onunla birlikte gelir — **7.1 ile aynı kalem**.
