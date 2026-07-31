# COĞRAFYA — doğal hatta yaslama: ölçüm raporu

**Oturum:** COĞRAFYA (Opus) · **Tarih:** 31 Temmuz 2026
**Yazdığı dosya:** yalnız bu rapor. `arac/uret_petek.py` MOTOR'undur, **dokunulmadı.**
**Girdi:** `data/donemler.js` (31 Tem 11:00 koşusu) + `veri-kaynak/*.geojson` — salt okuma.

---

## 0. Soru

Kullanıcı: *"Hep topografyaya göre sınırların çizilmesini istiyorum ama haritaya
bakınca bu pek gerçekleşmemiş görünüyor — cetvelle çizimler ya da dağ tepe nehir
demeden geçen sınırlar var."*

Koordinatörün hipotezi: motor `ne_10m_geography_regions_polys.geojson`'dan yalnız
`Range/mtn` alıyor; aynı dosyadaki plato, çöl, ova, delta poligonları
**kullanılmıyor.** Bunlar da yaslama hedefi yapılsa sınırlar topografyaya oturur.

**Hipotez ölçüldü. Büyük ölçüde OLUMSUZ çıktı.** Gerekçe aşağıda.

---

## 1. Motorun bugünkü davranışı — doğrulandı

`arac/uret_petek.py:194`

```python
if "Range" not in (p.get("FEATURECLA") or ""): continue
```

Tek satır, dosyadaki 1.047 poligonun `Range/mtn` dışındaki hepsini eliyor.
Yaslama hedefleri (`uret_petek.py:348`, `dogal_hatta_yasla`):

| Hedef | Yarıçap | Hattın tanımı |
|---|---|---|
| Nehir | 0.30° ≈ 33 km | `BUYUK` adlı 76 akarsudan pencerede 36 parça |
| Dağ sırtı | 0.35° ≈ 39 km | poligon `buffer(-0.12)` → çekirdeğin sınırı (eksen yaklaşımı) |
| — | — | ikisi de yoksa çıplak Voronoi hattı kalır |

## 2. Ölçüm 1 — kullanılmayan poligonlar (pencere içi, alan ≥ 0.05)

⚠️ Koordinatörün ilk verdiği sayılar (222 Range, 72 Plateau, 58 Desert…)
**dünya geneliydi.** Bizim penceremiz `box(-12, 1.5, 62, 62)`:

| FEATURECLA | Dünya | Pencerede | Eşiği geçen | Durum |
|---|---|---|---|---|
| Range/mtn | 222 | 61 | 61 | ✅ **kullanılıyor** |
| Island | 295 | 21 | 19 | kara maskesinde |
| Desert | 58 | 31 | 31 | ❌ |
| Plateau | 72 | 18 | 18 | ❌ |
| Island group | 160 | 10 | 10 | kara maskesinde |
| Geoarea | 43 | 12 | 12 | ❌ |
| Plain | 30 | 10 | 10 | ❌ |
| Pen/cape | 57 | 7 | 7 | ❌ |
| Coast | 37 | 7 | 7 | ❌ |
| Delta | 12 | 4 | 4 | ❌ |
| Continent | 7 | 3 | 3 | ❌ |
| Valley · Lowland · Depression | 13 | 6 | 6 | ❌ |
| Basin | 9 | 1 | 1 | ❌ |

## 3. 🔴 Bulgu A — sınıf filtresi yetmez, çünkü sınıflar HOMOJEN DEĞİL

Poligonların adlarına bakınca kullanılmayanların çoğu **coğrafî engel değil,
haritacının isim yazmak için çizdiği leke** çıkıyor:

```
Continent : AFRICA 1594 · EUROPE 995 · ASIA 746          (kıta lekesi)
Pen/cape  : ARABIAN PENINSULA 247 · SOMALI PEN. 74 · SCANDINAVIA 54 · BALKAN PEN. 52
Geoarea   : ANATOLIA 77 · Ogaden 23 · Mesopotamia 15 · BALUCHISTAN 13
Plain     : SAHEL 336 · NORTHERN EUROPEAN PLAIN 191 · PONTIC STEPPE 141 · KAZAKH STEPPE 42
Coast     : Riviera 1.5 · Dalmatia 1.3 · Levant Coast 1.1 · Gold/Ivory/Slave Coast
```

Üç ayrı sebeple reddedilir:

1. **`Plain` işin TERSİNİ yapar.** Ova, sınırın *keyfî* olduğu yerdir. Pontik
   bozkırın konturuna yaslanan bir sınır bugünkünden daha uydurma olur —
   üstelik "doğal hatta yaslandı" diye **haklı görünür.** En tehlikelisi bu.
2. **`Coast` · `Island` · `Island group` · `Pen/cape` zaten kara maskesinde.**
   Yeni bilgi taşımazlar, kıyıyı tekrar ederler (ölçüldü: §5).
3. **`Continent` · `Geoarea` sınır değil ad taşır.** "ANATOLIA"nın konturu
   coğrafî bir olgu değil, bir etiketin kapladığı alan.

Ve sınıf **içinde bile** homojenlik yok:

| Sınıf | Gerçek engel | Leke |
|---|---|---|
| Plateau | Ustyurt 8.7 · Libyan Plat. 13.7 · Jilf al Kabir 6.5 · Ennedi 4.9 · Al Harüj 4.0 · Jabal al Abyad 11.0 | PENÍNSULA IBÉRICA 61 · CENTRAL RUSSIAN UPLAND 24 · Volga 7.5 · Dnieper 4.1 · Azov 3.1 · Stavropol' 4.8 |

> **Sonuç: `FEATURECLA` filtresi genişletilemez. Gerekli olan AD BAZLI beyaz
> listedir.** Ustyurt şevi ile İber Yarımadası aynı sınıfta duruyor.

## 4. Ölçüm 2 — kaba kazanç (yanıltıcı, §5 düzeltiyor)

`data/donemler.js` → `window.PARCALAR` havuzundan 22.564 benzersiz sınır köşesi,
0.05° ızgarada 12.337 temsilci. Motorun kendi yarıçaplarıyla:

* doğal hedefe yaslanabilen: 4.696 (%38,1)
* hedefsiz: **7.641 (%61,9)**

Adayların kapattığı: Pen/cape 2.802 · Plain 1.430 · Geoarea 892 · **Desert 746** ·
Delta 234 · Plateau 169 · Coast 90 · Basin+Valley+Lowland+Depression 51.

⚠️ **Bu tablo yanlış okunur.** `Pen/cape` birinci görünüyor ama bir yarımadanın
konturu büyük ölçüde kıyı çizgisidir ve kara maskesi zaten oraya kesiyor.
`ORGANIZASYON.md §7-5`: *sayı büyükse önce sayma yöntemini sorgula.*

## 5. Ölçüm 3 — kıyıdan arındırılmış GERÇEK kazanç

Kıyıda duran köşe "cetvelle çizilmiş" değildir — kara maskesi onu gerçek kıyıya
oturtmuştur. İki arındırma yapıldı: (a) kıyıya 0.10° (~11 km) yakın köşeler
yetim sayılmadı, (b) aday hattın kıyıya yakın parçaları atıldı.

```
TEMSİLCİ KÖŞE                              12.605
  KIYIDA — kara maskesi zaten doğal hat      7.465   %59,2
  nehir/dağ yarıçapında                      3.376   %26,8
  GERÇEK YETİM — iç bölgede, hedefsiz        1.764   %14,0
```

> **"Cetvelle çizilmiş sınır" şikâyetinin gerçek büyüklüğü %62 değil, %14.**
> Sınırların %86'sı bugün zaten bir doğal olguya oturuyor.

| Aday | Hattın kıyı dışı kalanı | Ham kazanç | **Gerçek kazanç** | Yetimin oranı |
|---|---|---|---|---|
| **Desert** | %93 | 198 | **191** | %10,8 |
| Plain | %76 | 203 | 189 | %10,7 ❌ coğrafî olarak yanlış |
| Pen/cape | **%24** | 176 | 122 | %6,9 ❌ kıyının tekrarı |
| Geoarea | %59 | 69 | 46 | %2,6 ❌ etiket |
| **Plateau** | %81 | 26 | **23** | %1,3 |
| **Basin/Valley/Lowland/Depression** | %88 | 11 | **11** | %0,6 |
| Coast | %37 | 11 | 11 | %0,6 ❌ |
| **Delta** | %38 | 9 | **6** | %0,3 |

`Pen/cape` hattının yalnız **%24'ü** kıyıdan uzak — §3'teki şüphe ölçüldü ve
doğrulandı. `Delta` da öyle: dört delta da kıyıda, hattın %62'si kara
maskesinde; geriye **6 köşe** kalıyor. **Delta fikri ölçüldü ve değmez.**

### Hüküm

Coğrafî olarak savunulabilir küme = **Desert + Plateau + Basin/Valley/Lowland**
→ **225 köşe** = gerçek yetimin %12,7'si = bütün sınır köşelerinin **%1,8'i.**

> Koordinatörün hipotezi doğru ama **kaldıracı küçük.** "Kullanılmayan veri"
> gerçekten kullanılmıyor; kullanılsa sınırların %1,8'i oynar. Kullanıcının
> şikâyetinin kaynağı burası değil.

## 6. Ölçüm 4 — geri kalan %14 NEREDE (kararı bu ölçüm verdi)

1.764 yetim köşenin her biri en yakın yerleşimle etiketlendi.

| Yerleşim | Yetim | Aday küme kapatıyor | Bölge |
|---|---|---|---|
| **Bahçesaray** | **50** | **0** | Kırım |
| **Kefe** | **48** | **1** | Kırım |
| Kırşehir | 37 | 0 | Orta Anadolu |
| **Erciş** | **37** | **0** | Van gölü |
| **Van** | **28** | **0** | Van gölü |
| Kerbelâ | 16 | 14 ✅ | Mezopotamya |
| **Bitlis** | **16** | **0** | Van gölü |
| Tâsîlî n'Accer | 16 | 5 | Sahra |
| Varad · Bender · İstolni Belgrad · Yanova | 13-14 | 0-2 | Macar ovası |
| Zigetvar · Kanije · Temeşvar · Solnok | 11 | 0 | Macar ovası |
| Süveyş | 11 | 7 ✅ | Mısır |
| Ramâdi | 11 | 6 ✅ | Irak |

**Aday küme (Desert+Plateau+Basin/Valley/Lowland) 1.764'ün 223'ünü kapatıyor
(%12,6) ve kapattıklarının hemen hepsi Sahra / Mezopotamya kenarı.**

> 🔴 Kullanıcının aylardır şikâyet ettiği yerlerde — **Kırım, Van havzası,
> Macar ovası** — coğrafya poligonlarının kazancı **SIFIR.**

Yetimlerin en yakın yerleşime ortalama uzaklığı 1,11°. En uzaktakiler
(Ndjamena 11,7° · Nyala 10,9° · Bonga 10,8°) Sudan-Çad çölünde: bunlar yaslama
sorunu değil, `CLAUDE.md §2` **nokta yokluğu** sorunudur — ayrı iş.

## 6.5 Ölçüm 5 — asıl kaldıraç iki yerde olabilir

Yetim kümelerinin üçü de coğrafya poligonlarıyla açıklanmıyor. İki hipotez:

**H1 — Nehir listesi bir BEYAZ LİSTE ve dar.** `uret_petek.py` `BUYUK` diye
**76 nehir adı** sayıyor, pencerede yalnız **36 parça** eşleşiyor. Oysa
`ne_10m_rivers.geojson`'da **1.455 parça** var. Macar ovası kalelerinin hepsi
nehir kalesidir (Solnok–Tisza, Temeşvar–Bega, Kanije–Zala, Varad–Kırışhâne);
o nehirler listede yoksa yaslanacak hedef de yok.

**H2 — Göller haritadan ÇIKARILIYOR ama yaslama hedefi DEĞİL.** Motor 89 gölü
kara maskesinden düşüyor; hiçbirinin kıyısına yaslamıyor. Van + Erciş + Bitlis
= **81 yetim köşe** ve üçü de Van gölünün çevresinde.

### H1 — NEHİR BEYAZ LİSTESİ ✅ doğrulandı, dairesellik yok

```
ne_10m_rivers.geojson            1.455 parça
  pencere içinde                   329 parça
  motorun BUYUK listesine uyan      36 parça   ← %11
```

**Motor pencere içindeki nehirlerin %89'unu görmüyor.** Bu bir kalite eşiği
değil, `uret_petek.py`'de elle yazılmış **76 adlık bir liste**. Elenenler
"önemsiz dere" de değil — `scalerank` dağılımı: `1:11 · 2:7 · 3:18 · 4:26 ·
5:23 · 6:53 · 7:59 · 8:76 · 9:56`.

| Aday | Parça | Kazanç | Yetimin oranı |
|---|---|---|---|
| scalerank ≤ 5 | 85 | 32 | %1,8 |
| scalerank ≤ 7 | 197 | 133 | %7,5 |
| **penceredeki bütün nehirler** | **329** | **213** | **%12,1** |
| yalnız adlı olanlar | 319 | 195 | %11,1 |

Tek başına nehir listesini açmak, coğrafya poligonlarının tamamından
(223 ama %12,6'sı Sahra kenarı) **daha isabetli** bir kazanç veriyor ve
Macar ovasında 120 yetimin **42'sini** çözüyor — orada coğrafya poligonları
sıfır veriyordu.

### H2 — GÖL KIYILARI ⚠️ ham sayı büyük ama DOĞRULAMA GEREKTİRİYOR

Ham ölçüm: 142 göl kıyısı **375 yetim köşe** (%21,3) kapatıyor; Kırım'da
95/95 (**%100**), Van'da 69/77 (%90), Orta Anadolu'da 36/64 (%56).

🔴 **Ama bu sayı dairesel olabilir.** Motor 89 gölü kara maskesinden
**çıkarıyor** (`uret_petek.py`, `DOGAL_GOL` bloğu). Çıkarıyorsa petek sınırı
zaten göl kıyısına oturmuştur; ben §5'te "kıyı" tanımına yalnız `ne_10m_land`
sınırını koyduğum için göl kıyısındaki köşeleri **yanlışlıkla yetim** ilan
etmiş olurum. O hâlde %21,3 kazanç değil, ölçüm artefaktı olur.

### Ölçüm 6 — H2 ÖLDÜ. Göl kazancı ARTEFAKTMIŞ.

Göl kapattığı 375 köşenin göl kıyısına mesafe dağılımı:

| Mesafe | Köşe | Yorum |
|---|---|---|
| **< 0.02** | **326** | ZATEN göl kıyısında |
| 0.02-0.05 | 6 | pratikte kıyıda |
| 0.05-0.15 | 11 | gerçek kazanç |
| 0.15-0.30 | 20 | gerçek kazanç |

**Gerçek kazanç 375 değil 31** (yetimin %1,8'i). Motor gölü maskeden çıkardığı
için sınır zaten göl kıyısına çökmüş; ben §5'te "kıyı" tanımına yalnız
`ne_10m_land` sınırını koyduğum için o köşeleri yanlışlıkla yetim saymıştım.

🔴 **Kırım'daki %100 tamamen artefakt.** 95 köşenin 95'i **Syvash** kıyısında ve
hepsi "zaten kıyıda". Kırım'ın kuzey sınırı Sivaş bataklığına **bugün de
oturuyor** — orada düzeltilecek bir şey yok. Van gölünde de 77 yetimin yalnız
**1'i** gerçek.

Gerçek kazancı verenler: Tuz Gölü 9 · Balaton 8 · Sevan 3 · Eğirdir 3 ·
Great Bitter 2 · Skadar 2 · Hammar 2 · Van 1 · adsız 1.

> **Ders:** "zaten doğal hatta" kümesi kara kıyısından ibaret değil. Motor
> maskeden ne çıkarıyorsa (89 göl) o da doğal hattır. Bunu taban tanımına
> katmayan her ölçüm kazancı şişirir. Ölçüm 3'ün %14'ü de bu yüzden yüksekti.

## 6.6 Ölçüm 7 — DÜZELTİLMİŞ TABAN

"Zaten doğal" = kara kıyısı **+ motorun çıkardığı 89 gölün kıyısı**.

```
TEMSİLCİ KÖŞE                                12.605
  zaten doğal hatta (kara kıyısı + göl)       7.963   %63,2
  nehir/dağ yarıçapında                       3.222   %25,6
  GERÇEK YETİM                                1.420   %11,3
```

67 aday poligonun **32'si sıfır köşe kapatıyor.** Kapatanların başı: SAHARA 56 ·
BALKAN PEN. 53 · ARABIAN PENINSULA 27 · WESTERN DESERT 20 · LIBYAN DESERT 17 ·
SYRIAN DESERT 15 · Eastern Desert 14.

### `Pen/cape` HÜKMÜ — ELENDİ (koordinatörün askıya aldığı kalem)

`BALKAN PEN.` listenin ikinci en yüksek skoru (53). Sebebi "yarımada" değil:
Balkan Yarımadası'nın kara tarafındaki sınırı geleneksel olarak **Tuna–Sava
hattıdır**, yani poligon **nehrin vekili** olarak iş görüyor. `ARABIAN
PENINSULA` (27) için aynı şey Fırat hattında geçerli.

Vekil hedef iki kat zararlı: yanlış yere yaslar (yarımada konturu Tuna'nın
üstünden geçmez) ve **gerçek eksiği gizler.** Doğru düzeltme `Pen/cape` eklemek
değil, nehri düzeltmektir. → **ELENDİ.**

## 6.7 🔴 KURAL 6 — kullanıcı `Desert` kalemini kapattı

Kullanıcı 31 Temmuz'da yaslama kurallarını yazdı. **Kural 6:**

> *"Eğer iki yerleşim yeri arasında bir çöl var ise aralarındaki toprakları
> cetvelle bölebilirler, her toprak kendine en yakın yerleşim yerine ait
> olacaktır. … Fakat çölün bir yerinde tepe dağ göl var ise o zaman bu engele
> göre sınırlar konumlanacaktır."*

**Çölde düz Voronoi DOĞRUDUR.** Çöl konturuna yaslamak kuralın ihlalidir.
`Desert` beyaz listeden çıktı — ölçümün hükmü kullanıcıdan geldi.

Aynı sonuca **üç bağımsız yoldan** varıldı:
1. Kullanıcının kural 6'sı (yukarıda)
2. Koordinatörün Fizan uyarısı (Sebha/Ubârî/Murzuk konturun içinde)
3. Ölçüm 8B (aşağıda) — kontur **88 gerçek yerleşimi** yutuyor

## 6.8 Ölçüm 8 — ŞARTNAME SAYILARI

### A) Kazanç ve yer değiştirme (A/B beklentisi)

| Paket | Köşe | Medyan kayma | Max |
|---|---|---|---|
| Nehir listesi açılsın (36→329) | 173 | 0.152° (**17 km**) | 0.299° (33 km) |
| Coğrafya beyaz listesi (çöl **dahil**) | 174 | 0.166° (**18 km**) | 0.343° (38 km) |
| **Birleşik (mükerrersiz)** | **332** | — | — |

⚠️ **Medyan kayma 17-18 km.** Bu kozmetik rötuş değil. MOTOR'un A/B'de bakması
gereken şey "sınırlar güzelleşti mi" değil, **17 km oynayan 332 köşenin hiçbirinin
bir peteği sıfır alana düşürmediği** — `uret_petek.py:326`'daki Estergon/Solnok
vakası tam olarak buydu ve oradaki yarıçap 33 km'ydi.

### B) Çöl konturu ↔ dolgu noktaları — İKİ YÖNLÜ

```
hiçbir kesitte sahipli olmayan nokta      : 38
  bunlardan çöl konturu içinde            : 31/38   ← tek yönlü bakılsa BAŞARILI
  FAZLADAN yuttuğu GERÇEK yerleşim        : 88      ← ikinci yön
```

Yutulanlar arasında **Kahire · Hîve · Merv · Hartum · Tobruk · Feyyûm · Uksur ·
Asvan · Asyut · Küngrat · Köhne Ürgenç · Sennar · Sevâkin · Ğadâmis** ve Nil
vadisinin neredeyse tamamı (Esna, Kûs, Kına, Minye, Mellevî, Kûm Ombo).

> **Kontur içi sahipsiz ilan edilseydi Kahire sahipsiz kalacaktı.**
> Koordinatörün "iki yönlü ölç" ısrarı bu yüzden doğruydu: tek yön 31/38 ile
> başarılı görünüyordu.

## 6.9 Ölçüm 9 — KURAL 6 SONRASI NİHAİ TABLO

Beyaz listede çöl yok:

| Ad | Sınıf | Kapatır |
|---|---|---|
| GREAT RIFT VALLEY | Valley | 8 |
| Nile Delta | Delta | 7 |
| Libyan Plateau | Plateau | 4 |
| Danube Delta | Delta | 2 |
| Jabal al Abyad | Plateau | 2 |
| Tademaït · Jilf al Kabir · Ennedi · Al Harüj | Plateau | 1 ×4 |
| Ustyurt · Volga Delta | | **0** |
| **BİRLEŞİK COĞRAFYA** | | **27 = yetimin %1,9** |

```
NEHİR listesi açılsın (36→329)     173  = yetimin %12,2
İKİSİ BİRDEN                       192  = yetimin %13,5 / tüm köşenin %1,5
KAPATILAMAYAN                    1.228  = tüm köşenin %9,7
```

> **Coğrafya poligonu kalemi kapandı (%1,9).** Geriye tek gerçek kaldıraç
> nehirler kaldı. Ve kapatılamayan 1.228 köşe **kusur değil**: kullanıcının
> kural 1'i (engel yoksa eşit böl) ve kural 6'sı (çölde cetvel) gereği
> **doğru davranış**.

## 6.10 🔴 NEHİR LİSTESİ — kök sebep ad eşleştirmesi

`uret_petek.py:171`:

```python
_ad = pr.get("name") or pr.get("name_en") or ""      # name_alt HİÇ okunmuyor
```

Natural Earth aynı nehri farklı parçalarda farklı adla taşıyor ve motorun 76
adlık listesindeki adlar çoğu zaman `name_alt` alanında duruyor:

| Motorun listesinde | NE `name` | NE `name_alt` | Eşleşiyor mu |
|---|---|---|---|
| `Maritsa` / `Meric` | **Evros** | `Maritsa` | ❌ → ✅ (name_alt) |
| `Drava` | **Drau** | `Drava` | ❌ → ✅ |
| `Danube` | **Donau** | `Danube` | ❌ → ✅ |
| `Struma` | **Strymnas** | `Truma` | ❌ **tek harf** |
| `Tigris` · `Dijlah` | **Dicle** | *(boş)* | ❌ kurtarılamaz |

**Dicle ↔ Tigris mesafesi = 0.0000°** — aynı nehrin bitişik parçaları, farklı
`rivernum` (120 / 135). Motor "Tigris" parçasını (uzunluk 11,38) yaslıyor,
"Dicle" parçasını (4,48) yaslamıyor: **sınır nehri takip ediyor, sonra bırakıyor.**

### Ölçülen kazançlar

| Ölçüt | Parça | Kapattığı yetim |
|---|---|---|
| bugün (76 adlık liste) | 36 | — |
| + `name_alt` okunsun | 40 | **35** (%2,5) |
| **`scalerank ≤ 7`** | **197** | **104** (%7,3) |
| `scalerank ≤ 9` (penceredeki hepsi) | 329 | 173 (%12,2) |

> **ÖNERİ: ad eşleştirmesini düzeltme, TERK ET.** Liste yapısal olarak kırılgan —
> üç translitasyon, bir tek harf farkı (`Truma`/`Struma`), bir boş alan (`Dicle`).
> Her yeni coğrafya fazında yeniden kırılır. `scalerank` veriye gömülü, ad
> bilmeyi gerektirmez ve `name_alt` yamasının **üç katını** kazandırır.

---

## 6.11 YÖNTEM UYARISI — MOTOR bu ölçümü tekrar koşacak

Bu oturumda **dört kez** yüksek skorlu bir aday çıktı ve dördü de yanıltıcıydı:

| Aday | Ham | Gerçek | Sebep |
|---|---|---|---|
| `Pen/cape` | %36,7 | — | hattın %76'sı kıyının tekrarı |
| Göl kıyıları | %21,3 | %1,8 | 326/375 köşe **zaten** göl kıyısında |
| `Plain` | %18,7 | — | ova = sınırın keyfî olduğu yer |
| `Desert` | %14,0 | — | kural 6 + 88 yerleşim yutuyor |

> ⚠️ **Yaslama ölçümünde yüksek skor, çoğu zaman hedefin ZATEN ORADA olduğunun
> işaretidir — kazancın değil.** Her aday için iki soru ayrı ayrı sorulmalı:
> (1) hedef gerçekten yeni bilgi mi taşıyor, (2) oraya yaslamak coğrafî olarak
> doğru mu. İkisi de "evet" değilse sayı ne olursa olsun listeye girmez.

---

## 7. ŞARTNAME — MOTOR'un uygulayacağı iş

### 7.1 Yapılacak — sırayla

| # | İş | Dosya | Kazanç | Risk |
|---|---|---|---|---|
| **1** | `scalerank ≤ 7` ölçütü, ad listesi kaldırılsın | `uret_petek.py:165-181` | **104 köşe** | orta |
| **2** | `name_alt` de okunsun (1'i yapmazsan asgarî yama) | `uret_petek.py:171` | 35 köşe | düşük |
| 3 | `Dicle` açıkça eklensin (`name_alt` boş) | aynı | 6 köşe | düşük |
| 4 | Coğrafya beyaz listesi (aşağıdaki 6 ad) | `uret_petek.py:190-205` | 27 köşe | düşük |

**1 ve 2 birbirinin alternatifidir**, ikisi birden gerekmez — `scalerank ≤ 7`
zaten `name_alt`'ın kazandırdığı nehirleri içine alır.

### 7.2 Coğrafya beyaz listesi — SINIF DEĞİL, AD

```python
YASLANIR = {
    "GREAT RIFT VALLEY",        # Valley   — 8 köşe
    "Nile Delta",               # Delta    — 7
    "Libyan Plateau",           # Plateau  — 4
    "Danube Delta",             # Delta    — 2
    "Jabal al Abyad Plateau",   # Plateau  — 2
    "Plat. du Tademaït",        # Plateau  — 1
    "Jilf al Kabir Plateau",    # Plateau  — 1
    "Ennedi Plat.",             # Plateau  — 1
    "Al Harüj al Aswad",        # Plateau  — 1
}
```

**Sınıf filtresi KULLANILAMAZ** — `Plateau` sınıfı içinde hem Ustyurt şevi hem
PENÍNSULA IBÉRICA lekesi var. Beyaz liste ada dayanmalı.

**Yarıçap:** nehir `0.30°` · sırt `0.35°` — mevcut değerler korunsun; bu ölçümde
değiştirilmedi, dolayısıyla değiştirilmesi için ölçülmüş gerekçe yok.

### 7.3 ELENENLER — gerekçeleriyle

| Sınıf | Ham skor | Neden elendi |
|---|---|---|
| `Desert` | 199 | **Kullanıcı kural 6**: çölde cetvelle bölme doğru. Ayrıca kontur 88 gerçek yerleşimi yutuyor (Kahire dahil) |
| `Pen/cape` | 122 | Hattın %76'sı kıyının tekrarı; skor aslında Tuna–Sava'nın vekili |
| `Plain` | 189 | Ova = sınırın keyfî olduğu yer; yaslamak uydurmayı gerçek gösterir |
| `Geoarea` | 46 | ANATOLIA/Mesopotamia — saf etiket |
| `Coast` | 11 | Kara maskesinde zaten var |
| `Continent` | — | AFRICA/EUROPE/ASIA — saf etiket |
| Göl kıyısı | 375 | **%87'si artefakt**; motor gölü zaten maskeden çıkarıyor |
| `Basin` | 3 | CONGO BASIN — kapsam dışı |
| `Ustyurt` · `Volga Delta` | 0 | ölçüldü, sıfır |

### 7.4 A/B GEÇME ÖLÇÜTÜ — MOTOR için

Koordinatörün şartı: *"geçme ölçütü kusurun kendisini ölçebilmeli"*
(`OGRENILENLER §33`, Küngrat vakası). Bu iş için kusur **sıfır alanlı petek**tir.

| Ölçüt | Beklenen |
|---|---|
| Oynayan sınır köşesi | ~192 (paket 1+4) |
| Medyan kayma | 0.15-0.17° ≈ **17 km** |
| Azamî kayma | ≤ 0.35° ≈ 38 km |
| **Sıfır/kritik alanlı petek** | **0 — koşul budur** |
| Değişmez 1 (sahipsiz) | 38'de sabit kalmalı |
| Değişmez 2 (açık kırılma) | 0'da sabit kalmalı |
| Yüzölçümü kayması | ölçülmedi — MOTOR koşuda ölçmeli |

⚠️ **17 km medyan kayma kozmetik değildir.** `uret_petek.py:326`'daki
Estergon (8 km²) ve Solnok (0 km²) vakası tam olarak yaslamanın peteği kendi
üstüne çökertmesiydi ve oradaki yarıçap 33 km'ydi. `KORUMA_PAYI` bu paketle
birlikte yeniden sınanmalı.

### 7.5 Yüzölçümü tahmini — YAPILMADI, sebebi

Koordinatör "kaç km²" istedi. Bunu ölçemedim ve tahmin yazmıyorum: alan
değişimi ancak Voronoi yeniden koşturulunca çıkar, o da `uret_petek.py`
çalıştırmayı gerektirir — bu oturumun yetkisi dışında (MOTOR'un kilidi).
Köşe sayısı ve kayma dağılımı elde; alanı **MOTOR koşuda ölçsün.**

## 7.6 BU ŞARTNAMENİN DIŞINDA KALAN, DAHA BÜYÜK İKİ İŞ

Ölçüm bu ikisinin şartnameden daha değerli olabileceğini gösterdi:

**A) Motorun kullandığı hatlar haritaya çizilsin.** Altlık bir *fotoğraf*
(Esri raster); motorun kullandığı vektörler görünmez. Kullanıcı ekranda
Toroslar'ı görüyor, motor `Taurus Mts.` poligonunun `buffer(-0.12)` konturunu
kullanıyor — **ikisi aynı yer değil.** Hattı çizmek: (1) kullanıcının
"coğrafya haritada olsun" talebini karşılar, (2) sınırın neden oradan geçtiğini
haritanın kendisinden açıklar, (3) hata avını gözle yapılabilir kılar.
→ `js/app.js` — KOORDİNATÖR/ARAYÜZ kalemi.

**B) Gerçek sırt için yükseklik modeli.** Kullanıcının kural 3'ü *"dağın
tepesinden, iki şehri birleştiren doğruya dik, bir yamaç A'ya bir yamaç B'ye"*
diyor. Motorun yaptığı bu değil: poligonu içeri daraltıp **kalan çekirdeğin
kapalı konturuna** yaslıyor — sırt ekseni değil, dağın *etrafı*. Sınır tepeden
değil eteğinden geçebiliyor.
Doğru çözüm poligon değil **su bölümü çizgisi** (watershed divide); tarihî
sınırların ezici çoğunluğu odur. `HydroSHEDS/HydroBASINS` hazır, küresel, vektör
bir havza seti sunuyor ve sınırları doğrudan su bölümü çizgileridir.
⚠️ **Lisansı kullanmadan önce doğrulanmalı** — `veri-kaynak/KAYNAK-LICENSE.md`
bugün `404: Not Found` içeriyor, yani lisans kontrolü bir kez zaten atlanmış.

## 8. Yan bulgular — sahibi başkası

1. **`veri-kaynak/KAYNAK-LICENSE.md` içeriği tek satır: `404: Not Found`.**
   Natural Earth lisans metni hiç inmemiş, hata sayfası dosya diye kaydedilmiş.
2. **`js/app.js:362` atfı yanlış.** Kullanılmayan `historical-basemaps`'e atıf
   veriyor, kullanılan Natural Earth'e vermiyor.
3. **Altlık açık kaynak değil.** `js/app.js:359` → `server.arcgisonline.com`
   (Esri World Physical Map). Kullanıcı "harita bizim olsun" dedi; kamu malı
   muadili Natural Earth'ün kendi kabartmalı raster ürünleridir.
   ⚠️ Alternatif ararken **OSM türevi (ODbL) ve OpenTopoMap (CC-BY-SA)
   bulaşıcıdır** — türev veriyi aynı şartlarla paylaşmaya zorlar, "kontrol
   bizde kalsın" şartını bozar. Kamu malı kaynakta kalınmalı.
4. **Depo bütçesi:** `.git` 184 MB, çalışma ağacı 201 MB, GitHub Pages tavanı
   1 GB. `.git`'in şişkinliği `donemler.js`'in (25 MB) her üretimde yeniden
   commit'lenmesinden. Raster altlık eklenecekse bütçe önce konuşulmalı.
5. **`CLAUDE.md` bayat:** `arac/girdi.py:50-63` bugün 951 nokta okuyor
   (`yerlesimler.js` 767 + `yerlesimler_afrika.js` 184). `CLAUDE.md §1.5` hâlâ
   "Afrika 153 merge bekliyor" diyor.
6. **`veri-kaynak/README.md` bayat:** "117 büyük göl · 25 adlı akarsu" yazıyor;
   ölçülen 89 göl (maskeden çıkarılan) ve 36 eşleşen nehir parçası.

## 8. Yan bulgu — `CLAUDE.md` bayat

`arac/girdi.py:50-63` bugün **951 nokta** okuyor: `yerlesimler.js` 767 +
`yerlesimler_afrika.js` 184. Ama `CLAUDE.md §1.5` hâlâ *"Afrika 153 merge
bekliyor"* diyor ve §5'te merge bekleyenler arasında sayıyor. Hem bağlanmış
hem de sayı büyümüş (153 → 184). `CLAUDE.md` koordinatörün dosyası — düzeltme
ona ait.
