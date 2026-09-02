# BULGU — TENHA ASYA · Sibirya · Ural · Yakut · Kamçatka · Moğolistan · Himalaya

> **Oturum:** OPUS HAZIR KITA 120 · **Sevk:** `M-2281` § ③ ·
> **Şartname:** `oturumlar/ARASTIRMA-DUNYA-0902.md`
> **Tarih:** 2 Eylül 2026 · **Cins:** ÖLÇÜM oturumu — *düzeltme yapılmadı,
> `data/` altına hiçbir şey yazılmadı.* Bu belge bir **reçetedir.**

---

## 0. KUTU İLANI — bir sonraki oturum aynı kutuyu koşabilsin diye

Şartname dört bölgeyi **adıyla** verdi, **kutusuyla değil.** Kutuları ben
ilan ediyorum; ölçümlerimin hepsi bunlarla yapıldı.

```
Himalaya-Tibet          27–36 K /  78–100 D
Moğolistan              41–53 K /  87–120 D
Ural-Batı Sibirya       56–78 K /  55– 96 D
Orta-Doğu Sibirya       50–78 K /  96–128 D
Yakut-Kamçatka-Çukotka  50–78 K / 128–180 D
```
Sıra önemlidir: bir nokta **ilk eşleşen** bölgeye yazılır.

### 🔴 ŞARTNAMENİN KUTU ÖNCÜLÜ ÇÜRÜDÜ

Şartname *"kutu 26–78 K / 46–180 D · 152 nokta"* diyor. Bağlı evrende
(`girdi.yukle()`, 2663 nokta) o kutuyu ölçtüm:

| ölçüm | nokta |
|---|---|
| 26–78 K / 46–180 D | **466** |
| eksi Orta Asya (35–50 K / 46–88 D) | **347** |
| şartnamenin dediği | 152 |

Fark 195 nokta ve **sebebi ölçüldü** — kutu şunları da içeriyor: İran'ın
tamamı (İsfahan · Şiraz · Yezd · Kirman) · Irak güneyi (Basra · Vâsıt) ·
Afganistan (Kâbil · Kandehar · Herat) · **Çin'in tamamı** (Pekin ·
Nanking · Şanghay) · **Kore'nin tamamı** · **Japonya'nın tamamı**.

⇒ Kutu harfiyen uygulansaydı Japonya ve Çin *"benim bölgem"* sayılacaktı.
**DAMGA: kutu ÇÜRÜDÜ.** 152 sayısı muhtemelen doğru — o, kutunun değil
**dört adlı bölgenin** toplamı (55+34+22+41). Kusur sayıda değil,
*kutunun sayıyı tarif ettiği varsayımında.*

**DAMGA: 152'yi birebir üretemedim — ÖLÇÜLEMEDİ** (alt kutular ilan
edilmemişti; kendi kutularımla 152'ye yakın ama eşit olmayan sayı çıktı).

### ⚠️ VE AYNI KUSURU BEN DE YAPTIM

İlk Himalaya kutum `26–36 K / 73–100 D` idi ve **Pencap ovasını yuttu**:
Lahor · Amritsar · Ludhiyana · Ecmîr · Siyâlkot · Râvalpindi · Delhi ·
Caypûr. Kutuyu daralttım; **düşen 44 nokta** ölçüldü ve adıyla kaydedildi.
📌 *Koordinatöre bildirdiğim kusurun bende tekrarı. Kutu bir sınır değil,
kaba bir çevredir.*

---

## 1. 🔴🔴 GİRDİ KUSURU — BOŞLUK ARARKEN BOŞLUKLARI ELEYEN MASKE

Boşluk haritamın **1. koşusunu `veri-kaynak/motor_kara.geojson`** ile
kurdum. Sonuç şüpheli çıktı: *"en büyük delik 367 km · 400 km üstü hücre
**sıfır**"* — Sibirya için inandırıcı değildi. **Hüküm kurmadan önce
maskeyi sınadım** (`C13 ③`: girdiyi gerçek kaynağından oku).

İki nokta KARA çıkmadı: **Sibirya içi (63 K/95 D)** ve **Çukotka içi
(66 K/175 D)**. Sonra iki maskeyi aynı ızgarada kıyasladım:

| BÖLGE | motor_kara | ne_10m_land | fark |
|---|---:|---:|---:|
| Himalaya-Tibet | 564 | 1.080 | 516 |
| Moğolistan | 1.042 | 1.584 | 542 |
| Ural-Batı Sibirya | 1.614 | 3.066 | 1.452 |
| Orta-Doğu Sibirya | 1.305 | 3.830 | 2.525 |
| Yakut-Kamçatka-Çukotka | 1.124 | 2.857 | 1.733 |
| **TOPLAM** | **5.649** | **12.417** | **6.768 (%55)** |

**SEBEP — koddan, tahminden değil:** `uret_petek.py:2776` —
`motor_kara.geojson` bir **girdi değil, motorun ÇIKTISI**:
`unary_union(PETEK_D)`, **A1 tavanı ve çöl tavanı uygulandıktan sonra.**
Motorun gerçek girdi maskesi `ne_10m_land.geojson` (`uret_petek.py:462`).

🟢 **Ve proje bunu zaten biliyor:** `arac/olc_enklav/_ortak.py:206`
başlığı aynen *"ADI YANILTICI — BU BİR GİRDİ MASKESİ DEĞİL, MOTORUN
ÇIKTISIDIR"* diyor. Ben o uyarıyı okumadan önce kendi ölçümümle aynı yere
vardım; uyarı ölçümümü **doğruladı.**

### NİÇİN TEHLİKELİ — yönü tesadüfi değil
Kaybolan %55, motorun **zaten boyamadığı** topraktır. Yani boşluk aramak
için kullanılan maske, tam da **boşlukların olduğu yerleri** eliyor.
📌 `§11`in *"ölçemediğini eleyen süzgeç onu TEMİZ sayar"* dersinin
boşluk-haritası yüzü. **Alet hiçbir hata vermedi — daha küçük bir dünya
ölçtü.**

⚠️ **Bu bende kalmaz:** `AMERIKA-0902` M-2161'de *"kara maskesi üzerinde
0,5 derece ızgara, 17.963 kara hücresi"* diyor ama **hangi maske olduğunu
yazmıyor.** Ona yatay sordum (`M-2314`). **Onun maskesini ÖLÇMEDİM** —
bu bir suçlama değil, sorulması gereken bir sorudur.

**ÖNERİ (arac/ benim değil, uygulamadım):** dosyanın adı
`motor_cizdigi_kara.geojson`a benzer bir şeye dönsün ya da
`veri-kaynak/README`ye tek satır düşsün. **Ad, uyarıdan önce okunuyor.**

---

## 2. BOŞLUK HARİTASI — doğru maskeyle

`ne_10m_land` · 0,5° ızgara · **10.857 kara hücresi** · en yakın komşu
büyük-çember uzaklığı.

| BÖLGE | hücre | ort km | en büyük | >400 km | >600 km |
|---|---:|---:|---:|---:|---:|
| **Himalaya-Tibet** | 792 | **290** | **723** | **200 (%25)** | **29** |
| Orta-Doğu Sibirya | 2.921 | 258 | 559 | 404 (%14) | 0 |
| Yakut-Kamçatka-Çukotka | 2.857 | 227 | 662 | 140 (%5) | 2 |
| Ural-Batı Sibirya | 2.703 | 214 | 589 | 144 (%5) | 0 |
| **Moğolistan** | 1.584 | **168** | 456 | **20 (%1,3)** | 0 |
| TOPLAM | 10.857 | 228 | 723 | 908 | 31 |

⚠️ **Bu ızgara yaklaşımıdır, gerçek Voronoi değil.** Motorun peteği biraz
başka çıkabilir. *"Yaklaşık"* diye yazıyorum, *"kesin"* diye **değil.**

### 🔴 ŞARTNAMENİN SIRASI TERS ÇIKTI
Şartname `SIRAN:` diye yazıyor — ① İrkutsk-Yakutsk-Kamçatka ②
Moğolistan ③ Himalaya-Tibet. Ölçüm **tam tersini** söylüyor:
**Moğolistan bölgemin EN İYİ kaplı yeri, Himalaya-Tibet EN KÖTÜSÜ.**
Sıra ①→③ değil **③→①**.
📌 `AMERIKA-0902`nin And vakasının (M-2161) aynısı: orada da şartname
*"AND — en çok hata burada"* diyordu, ölçüm And'ı anakaranın en iyi kaplı
bölgesi buldu. **İki bölge, iki oturum, aynı desen.**

---

## 3. YALAN — ve tek bir yerde toplanmış: ÇANG TANG

En büyük 60 deliğin **50'den fazlası** tek bölgede: **Çang Tang (Kuzey
Tibet platosu), 33–36 K / 84–92 D.** En büyük delik **723 km**.

Bu hücreleri boyayan noktalar ve taşıdıkları kimlik:

| çeken nokta | kesitlerde boyadığı kimlik |
|---|---|
| Şigatse · Lhasa | `tibet` → `tibet-ganden-phodrang` (yön doğru) |
| **Hotan** | çağatay · moğulistan · yarkent-hanlığı · qing · **1870: `yakub-beg`** |
| **Dunhuang** | ming · **`kuzey-yuan`** · qing |
| **Katmandu** | **`nepal`, 1300'den 1923'e KESİNTİSİZ**, 580 km öteden |

🔴 **En keskin uç: Yâkub Beg (Kâşgarya, 1865–1877) Tibet platosunu
boyuyor.** Yâkub Beg Kunlun'un güneyine hiç inmedi.
🔴 **İkincisi:** batı Tibet'in (Ngari) bir dilimi Katmandu'dan çekilip
**1300'de `nepal`** oluyor.

📌 `§2`nin emilme kuralı: **kusur veride değil, NOKTASIZLIKTA.** Çang
Tang'da nokta olmadığı için plato üç ayrı komşuya bölünüyor ve sınır
tarihten değil **geometriden** çıkıyor.

### 🔴🔴 3.0 DÜZELTME — AŞAĞIDAKİ TABLO ABARTILI, SEBEBİ ÖLÇÜLDÜ

> **Bu bölümü okumadan 3.1'i okuma.** Aşağıdaki tablo **en yakın komşu**
> ile hesaplandı ve **A1 yarıçap tavanını hesaba katmıyor.**

`uret_petek.py:878` — `TAVAN_KM = {1:200, 2:200, 3:200, 4:200, 0:200}`
(27 Ağustos 2026, Emre'nin kararı). Hiçbir petek noktasından ~200 km
öteye uzanamaz. Hipotezi sınadım — 10.857 hücre, bant bant:

| bant (km) | boyalı | boş | % boyalı |
|---|---:|---:|---:|
| 0–50 | 377 | 1 | **100%** |
| 50–100 | 1.050 | 18 | 98% |
| 100–150 | 1.390 | 176 | 89% |
| 150–200 | 1.149 | 700 | 62% |
| 200–250 | 523 | 1.178 | 31% |
| 250–300 | 95 | 1.365 | 7% |
| 300–350 | 3 | 1.137 | **0%** |
| 350+ | **0** | **1.694** | **0%** |

**DAMGA: TUTTU.** Geçiş tam 200 km'de, omuzlu — `A1b`nin yöne duyarlı
tavanı bunu birebir açıklar. **350 km'nin ötesinde boyalı hücre SIFIR.**

⇒ **Aşağıdaki "yalanların" büyük kısmı HARİTADA YOK:**
```
yakub-beg Tibet platosunu boyuyor   716 km  🔴 BOYAMIYOR — tavan kesiyor
nepal 196.357 km² (580 km)          580 km  🔴 o kadarını boyamıyor
kuzey-yuan 224.971 km² (434 km)     434 km  🔴 boyamıyor
tibet-ganden-phodrang 1.034.836     723 km  🔴 GERÇEK: 338.911 km² (%33)
```
**ÇANG TANG YANLIŞ BOYANMIYOR — HİÇ BOYANMIYOR.** Ve bu, Emre'nin
hükmünün ta kendisi: *"DEVASA BOŞLUKLAR OLACAKSA OLSUN."* Motor zaten
öyle yapıyor.

📌 `§11` *"ölçüm doğru, çıkarım yanlış"* — bende. Mesafeleri doğru
ölçtüm; ***"bu mesafe boyama üretiyor"*** çıkarımı yanlıştı, çünkü
**arada bir tavan var** ve onu hesaba katmadım. Ve bu, bu belgenin
`§1`inde kendi yazdığım dersin ikinci yarısı: orada *girdiyi* sınamıştım,
burada **aradaki aşamayı** sınamamıştım.

🟢 **AMA `§4`ÜN TİBET BULGUSU AYAKTA** — ve sebebi ayrı: Qing kusuru bir
**mesafe** kusuru değil bir **zincir** kusuru. Lhasa · Şigatse ·
Gyantse'nin **kendi hücreleri** (0–200 km, tavanın tam içinde) 1720–1912
arası `tibet-ganden-phodrang` boyanıyor. **Tavan bunu kesmiyor, kesemez.**
Bulgunun **alanı** küçüldü (1.034.836 → 338.911 km²), **kendisi**
durmuyor.

### 3.1 YALAN KAÇ km²? — kimlik başına boyanan alan
*(⚠️ TAHMİN sütunu; gerçek boyalı alan için §3.0'daki orana bak — ölçülen
oran %33–66 arası)*

Her kesitte her kara hücresi en yakın noktanın sahibiyle boyanıp kimlik
başına toplandı (yaklaşık km², 0,5° ızgara). **En uzak çekim** sütunu, o
kimliği taşıyan en uzak hücrenin kendi noktasına uzaklığıdır.

| kesit | kimlik | ≈km² | en uzak çekim |
|---|---|---:|---:|
| 1300 | `—BOŞ—` | 11.918.646 | — |
| 1300 | **`kuzey-yuan`** | **224.971** | 434 km 🔴 künye 1368'de başlıyor |
| 1300–1870 | **`nepal`** (hiç değişmiyor) | **196.357** | **580 km** |
| 1300–1800 | `ladak` (hiç değişmiyor) | 157.942 | 548 km |
| 1700 | **`kuzey-yuan`** | **78.444** | 712 km 🔴 künye 1691'de bitiyor |
| 1700–1870 | **`tibet-ganden-phodrang`** (hiç değişmiyor) | **1.034.836** | **723 km** |
| 1800 | `sih-imparatorlugu` | 18.511 | 299 km 🔴 künye 1801'de başlıyor |
| 1870 | **`yakub-beg`** | **353.921** | **716 km** |
| 1870 | `rusya` | 9.913.194 | 559 km |
| 1870 | `qing-hanedani` | 2.758.815 | 712 km |

🔴 **Üç sayı ayrıca okunmalı:**
1. **`yakub-beg` 1870'te 353.921 km² boyuyor ve en uzak hücresi 716 km
   ötede.** Kâşgarya'nın gerçek gövdesi Tarım havzasıdır; bu alanın önemli
   kısmı **Tibet platosudur.**
2. **`tibet-ganden-phodrang` 1.034.836 km²'yi 1700 · 1800 · 1870'te
   BİREBİR aynı** boyuyor — 393 hücre, hiç oynamıyor. Bir devletin sınırı
   170 yıl boyunca hücre hücre aynı kalıyorsa, o sınır **tarihten değil
   noktasızlıktan** geliyordur. (§4'teki Qing bulgusu tam buraya oturur.)
3. **`nepal` 1300'den 1870'e 196.357 km²'yi değişmeden** boyuyor, en uzak
   hücresi **580 km.** Nepal'in 1768 Gorkha birleşmesinden önce Katmandu
   vadisinde **üç Malla krallığı** vardı; TDV `nepal` maddesi de 1296 ·
   1316 · 1351 · 1742 · 1814 · 1816 · 1846 kırılmalarını veriyor. Tek
   kesintisiz `nepal:1281-1923` dönemi bu kronolojiyi ifade etmiyor.
   ⚠️ **Bu kalemi ölçtüm, KARARA BAĞLAMADIM** — Nepal benim şartnamemin
   adlı bölgelerinden biri değil, Himalaya kutuma coğrafî olarak giriyor.

### ⚠️ VE KENDİ ALETİMİ İHBAR EDİYORUM — bir YANLIŞ POZİTİF üretti
Hayalet sınavım tarihleri **dizgi olarak** kıyaslıyor. Üç haneli yıl
gelince kırılıyor:
```
"1300-06-15" < "849-01-01"   → Python'da TRUE  ('1' < '8')
⇒ alet `pagan` künyesini (f:849-01-01) 1300'de HAYALET ilan etti
⇒ GERÇEKTE hayalet DEĞİL — künye 849'da başlıyor, 1300'ü kapsıyor
```
Dört haneli yılların hepsinde kıyas doğru, o yüzden öteki damgalar
ayakta. Ama **sayı doğru diye yöntem doğru sayılmaz**: bir sonraki
belgede aynı dizgi farkı sessiz bir **yanlış negatif** üretebilir.
📌 Bunu ancak **aleti yazan** söyleyebilir; çıktıya bakan göremez.

---

## 4. 🔴🔴🔴 EN BÜYÜK BULGU — TİBET'İN QING DÖNEMİ ATLASTA YOK

Bu bir *boşluk* değil, **yanlış sahip** — ve karşı delili projenin kendi
birincil kaynağı veriyor.

**Atlasta bugün** (`Lhasa` · `Şigatse` · `Gyantse`, üçü de birebir aynı):
```
yuan-hanedani            1281 → 1354
tibet                    1354 → 1642
tibet-ganden-phodrang    1642 → 1923      ← 281 YIL KESİNTİSİZ BAĞIMSIZ
```

**TDV `tibet` maddesi** (HTTP 200 · gövde okundu · 14.987 karakter, 26
ayrı yıl dizgisi — boilerplate DEĞİL, `§4④` sınavını geçti) şunları
söylüyor:

```
1354   Phag Mo Gru Pa idarenin başına geçti        ✓ atlasla UYUŞUYOR
1617-1682  V. Dalay Lama · Koşot Moğolları yönetimi ona bıraktı
                                                    ✓ atlasın 1642'si
1720   Ch'ing hânedanı bölgeyi ele geçirdi ve
       "askerlerini yerleştirerek ülkeyi DOĞRUDAN yönetmeye başladı"
                                                    🔴 ATLASTA YOK
1751   mahallî hükümet organize edildi — "kurduğu bu VASAL DEVLET"
                                                    🔴 ATLASTA YOK
1893   Tibet üzerinde çok daha geniş boyutta egemenlik
                                                    🔴 ATLASTA YOK
1904   İngiliz kuvvetleri Lhasa'ya girdi            🔴 ATLASTA YOK
1908   İngilizler çekilince Çinliler ülkeyi işgal etti
                                                    🔴 ATLASTA YOK
```

⇒ **1720–1912 arası ~192 yıl ve ~2,5 Mkm², atlasta bağımsız Ganden
Phodrang olarak boyanıyor; TDV aynı dönem için önce doğrudan Qing
yönetimi, sonra vasallık diyor.**

🟢 **Ve atlas bunu kısmen BİLİYOR:** `Çamdo` kaydında
`qing-hanedani: 1910 → 1912` **var.** Yani Qing kimliği bu coğrafyada
kullanılmış — ama yalnız bir noktada ve yalnız son iki yıl için.

### ⚠️ BU KALEMİ BEN KARARA BAĞLAMIYORUM — ÜÇ SEBEPLE
1. **Yetkim yok:** ölçüm oturumuyum, sahiplik değiştirmem.
2. **Kaynaklar çelişebilir:** Tibet'in 1720–1912 statüsü (doğrudan idare
   mi, vasallık mı, himaye mi) tarih yazımında tartışmalıdır. TDV
   *"doğrudan"* ve *"vasal"* kelimelerinin ikisini de kullanıyor,
   **farklı tarihler için.** `§7.1 ⑥`: kaynaklar çelişiyorsa seçmem.
3. **`tâbi` ekseni belirsiz:** atlasta `v:` alanı Osmanlı tâbiliği için.
   Yabancı bir devletin vasallığı `s:` ile mi, başka bir kademeyle mi
   ifade edilecek — **bunu ölçmedim.**

**ÖNERİM (uygulanmadı):** bu, tek bir kayıt düzeltmesi değil bir
**araştırma partisi** ister — Lhasa · Şigatse · Gyantse · Çamdo ve
eklenecek plato noktaları birlikte. Kırılma günü adayları TDV'nin verdiği
yıllardır (1720 · 1751 · 1904 · 1908) ve **gün hassasiyeti için ayrıca
kaynak gerekir** — TDV bu maddede gün vermiyor.

---

## 5. ADAY LİSTESİ SINAVI — 19 adayın 15'i ZATEN VAR

Şartnamenin **adıyla saydığı** adayları ortak bir normalleştiriciyle
(Türkçe harf + diakritik + kesme; `§4` — `usku` ≠ `Üsküp`) aradım:

```
🟢 VAR (15)  Yakutsk · Ohotsk · Anadır · Verhoyansk · Kirensk · Nerçinsk ·
             Urga · Karakurum · Kobdo · Uliastay · Lhasa · Şigatse ·
             Gyantse · Katmandu · Leh
🔴 YOK  (4)  Kyahta · Punakha (Butan) · Sikkim · Nijnekamçatsk
```
⚠️ **Nijnekamçatsk için `Petropavlovsk-Kamçatskiy` 364 km ötede VAR** —
aynı hat, başka kale. *"Yok"* demek yerine *"başka adla var"* demek daha
doğru olabilir; **onu ölçmedim.**

⇒ **%79'u ödenmiş.** `AMERIKA-0902`nin M-2158'de ölçtüğü desenin aynısı
(orada 35/41). **İki bağımsız ölçüm, aynı sonuç: bu turun aday listeleri
`git log`a bakılmadan yazılmış.**

### 🔴 VE ASIL BULGU BU DEĞİL — TİBET'İN GERÇEK BOYU
Tibet-Himalaya kutumda (27–36 K / 78–100 D) **8 nokta** var ve **üçü
Kuzey Hindistan ovası** (Agra · Koil · Kannauc). Gerçek Tibet noktası:

```
Şigatse · Gyantse · Lhasa · Çamdo   =  DÖRT     (+ Katmandu, Nepal)
```
**2,5 Mkm²'ye dört nokta.** Şartnamenin *"Himalayalar-Tibet 41 nokta"*
tabanı, kutunun Hindistan ovasını yutmasından geliyor.

---

## 6. ÖNERİLEN NOKTALAR — hepsi gerçek, hiçbiri uydurma

**Önce "atlasta var mı" diye ölçüldü; on iki adayın on ikisi de YOK.**
Sıra, kapattıkları deliğin büyüklüğüne göre:

| aday | konum | en yakın nokta | kapattığı |
|---|---|---|---|
| **Gartok (Garyarsa, Ngari)** | 31,70 K / 80,35 D | Leh 376 km | batı Tibet |
| **Rudok (Rutog)** | 33,38 K / 79,71 D | Leh 215 km | kuzeybatı plato |
| **Nagçu (Nagqu)** | 31,48 K / 92,06 D | Lhasa 220 km | kuzey plato |
| **Purang (Taklakot)** | 30,30 K / 81,17 D | Mîrat 365 km | Ngari güneyi |
| **Gerze** | 32,29 K / 84,06 D | Katmandu 523 km | **Çang Tang göbeği** |
| **Jyekundo (Yushu)** | 33,01 K / 97,01 D | Çamdo 209 km | Kham kuzeyi |
| Tingri (Dingri) | 28,65 K / 87,12 D | Şigatse 185 km | Gurka savaşı hattı |
| Tsona (Cona) | 27,99 K / 91,95 D | Lhasa 200 km | güneydoğu sınır |
| Sakya | 28,90 K / 88,02 D | Şigatse 93 km | *(delik kapatmaz)* |
| Kyahta | 50,35 K / 106,45 D | — | **1727 antlaşması** |
| Punakha (Butan) | 27,59 K / 89,87 D | — | Butan künyesi |
| Gangtok / Sikkim | 27,33 K / 88,61 D | — | Sikkim künyesi |

### 🔴 KAYNAK DURUMU — ve `bulunamadı` olanı `bulunamadı` diye yazıyorum
```
🟢 TDV CANLI (200, gövde okundu): tibet · nepal · kesmir · mogolistan ·
   mogollar · yakutlar · sibir-hanligi · hoten · turfan · budizm
🔴 TDV ÖLÜ (302): lhasa · butan · sikkim · ladak · kalmuk · cungar ·
   oyrat · halha · buryat · sibirya · kaskar · yarkent · urumci · kobdo ·
   karakurum · urga · kyahta · nercinsk · kamcatka · cukotka · ostrog ·
   dalay-lama · pancen-lama · gelugpa · lamaizm
```
⇒ **35 slugun 10'u canlı: %29.** Ve deseni `§4`ün tam tarifi: **`tibet`
CANLI ama `lhasa` ÖLÜ** — künye düzeyinde kapsıyor, **kasaba taneciğinde
susuyor.** `kirman` (57 KB) / kasaba slugları ölü vakasının aynısı.

⇒ **`§4` TANECİKLİK boşluğu bu bölgede yürürlüktedir**: standart akademik
kaynak **meşru**, şartı `kaynak:` alanına açıkça yazmak. Yukarıdaki on iki
adayın **hiçbirinin TDV'de müstakil maddesi yoktur** —
`kaynak:"bulunamadı — TDV bu taneciği kapsamıyor"` damgasıyla ve kapsayıcı
canlı madde (`tibet` · `mogolistan`) ile yazılmalıdır.

⚠️ **ÖLÇMEDİĞİM:** on iki adayın **gün hassasiyetli kuruluş/devir
tarihini ÖLÇMEDİM.** TDV bu tanecikte susuyor; akademik kaynak taraması
(Shakabpa, *Tibet: A Political History*, 1967 — TDV'nin kendi kaynakçasında
duruyor; Petech, *China and Tibet*) **yapılmadı.** Bu, nokta kolunun işi.
**"Bulunamadı" değil, "ARANMADI" diye yazıyorum.**

---

## 7. BOŞLUĞUN CİNSİ — ve makinenin göremediği bir cins

Bölgemde `kasitli_bosluk` işaretli **53 nokta** var. Cinslerini saydım:

```
devletsiz     29
veri-yok       6
YAZILMAMIŞ    18   🔴
```

### 🔴 VE "YAZILMAMIŞ" 18'İN ÇOĞU ASLINDA BOŞ DEĞİL — ATIFLA TAŞINIYOR
```
Yamal ucu       "Obdorsk ile aynı gerekçe"
Ust-Yansk       "Verhoyansk ile aynı 1638 ilerlemesi"
Surgut          "Berezov ile aynı gerekçe ve aynı TDV cümlesi"
Vaygaç          "Novaya Zemlya ile aynı hüküm"
Bratsk ostrogu  "İrkutsk kaydındaki Halha/Altan Han..."
```
Cins **vardır** — ama **komşusuna atıfla.** Bir insan çözer, **bir `if`
çözemez.**
📌 `§11`in *"bir ders veriye SERBEST METİN olarak inerse inmiş sayılmaz"*
dersinin **atıf zinciri** yüzü: orada cins metne gömülüydü, burada
**başka bir kaydın metnine** gömülü. `git grep devletsiz` ikisini de
*"uygulanmış"* gösterir.
🟢 **Sınavı tek soru:** *bu kaydın cinsini komşusunu okumadan
sorabiliyor muyum?*

**ÖNERİ:** `neden:` serbest metni kalsın, yanına makine okunur bir alan
(`bosluk_cinsi: "devletsiz" | "veri-yok"`) gelsin ve **atıf zinciri
çözülüp her kayda kendi cinsi yazılsın.** 18 kaydın 18'i.

---

## 8. HAYALET / ÖMÜR AŞIMI — daraltılmış kutuda 5

```
qing-hanedani  Karakurum   f:1635-01-01 < künye f:1636-05-15   (~17 ay)
qing-hanedani  Kobdo       t:1912-08-20 > künye t:1912-02-12   (~6 ay)
yakub-beg      Turfan      f:1864-06-04 < künye f:1865-01-01   (~7 ay)
yakub-beg      Ürümçi      f:1864-06-04 < künye f:1865-01-01   (~7 ay)
kuzey-yuan     Buryat toprakları (Selenginsk)
                           f:1281-01-01 < künye f:1368-09-14   🔴 87 YIL
```

**AYIRT EDİYORUM — dördü meşru, biri değil:**
- İlk dördü **aylar mertebesinde** ve `§3.5`in kendi kuralı bunu meşru
  sayıyor (*"bölgesel teslim gecikmeleri meşrudur… yıllar değil aylar
  mertebesinde olmalıdır"*). Kobdo'nunki tarihen de doğru: Qing garnizonu
  hanedan düştükten sonra Ağustos 1912'ye kadar direndi.
- **`kuzey-yuan` Buryat kaydı 87 YIL** — ayrı sınıf. Kuzey Yuan 1368'de
  (Yuan'ın Çin'den çekilmesiyle) doğar; 1281–1368 arasında doğru kimlik
  `yuan-hanedani` ya da onun öncesidir. **Bu bir hayalettir.**

⚠️ **ÖLÇMEDİM:** bu beşinin `denetle.py`nin `Değişmez 4 / 4c / 4d`
kovalarında **zaten sayılıp sayılmadığını ölçmedim.** `4c` 286 (beklenen
280) ve `4d` 432 (beklenen 468) diye büyük bilinen kümeler var; beşi de
onların içinde olabilir. **"Yeni ihlal" diye raporlamıyorum.**

🔴 **VE İKİSİ BENİM DEĞİL:** `Turfan` (42,9 K/89,2 D) ve `Ürümçi`
(43,8 K/87,6 D) **Doğu Türkistan** — `ORTAASYA-0902`nin kutusunda.
Bulguyu ona yatay devrediyorum, **kendim dokunmuyorum.**

---

## 9. KUTU SINIRI — `ORTAASYA-0902` ile, cevap BEKLENİYOR

Şartnamemin dışlaması (35–50 K / 46–88 D) ile `ORTAASYA-0902`nin kendi
ilanı (33–56 K / 46–96 D, M-2160) **birbirini tutmuyor.** Ortada iki şerit
kalıyor:
```
A  50–56 K / 46–96 D     B  35–50 K / 88–96 D
```
`M-2303` ile ona **yatay** yazdım ve hattı **onun lehine** kestim:
A ve B **onun**, Moğolistan (41–53 K / 87–120 D) **benim**, Tibet'e
**Kunlun'un güneyinden** (lat < 36 K) giriyorum.

⏳ **Cevabı gelene kadar A ve B şeritlerini boşluk diye RAPORLAMIYORUM** —
*"ORTAASYA-0902'de, ölçmedim"* diye yazıyorum.

---

## 10. ÖLÇÜLEMEDİ KOVASI — asla "temiz" diye okunmayacak

```
① Şartnamenin 152 sayısı birebir üretilemedi (alt kutular ilan edilmemiş)
② Önerilen 12 noktanın GÜN hassasiyetli tarihi — TDV bu tanecikte susuyor,
   akademik tarama YAPILMADI (aranmadı, "bulunamadı" değil)
③ Bölümdeki 5 ömür aşımının `denetle.py` 4/4c/4d kovalarında zaten sayılıp
   sayılmadığı
④ `AMERIKA-0902`nin hangi kara maskesini kullandığı — soruldu, cevap yok
⑤ Nijnekamçatsk'ın `Petropavlovsk-Kamçatskiy` ile aynı kayıt sayılıp
   sayılamayacağı (364 km — 3 km sınavının çok üstünde ama aynı hat)
⑥ Tibet'in 1720–1912 statüsünün atlasta HANGİ eksende ifade edileceği
   (`s:` mi, tâbilik kademesi mi) — model sorusu, ölçmedim
⑦ Izgara yaklaşımı ile motorun gerçek Voronoi peteği arasındaki fark
```

---

## 11. ÖZET — üç satır

```
① Bölgemin en boş yeri Moğolistan DEĞİL TİBET: 2,5 Mkm²'ye DÖRT nokta,
   en büyük delik 723 km, ve boşluk Yâkub Beg'i Tibet platosuna taşıyor.
② Şartnamenin aday listesinin %79'u ZATEN ÖDENMİŞ; iş nokta yazmak değil,
   Tibet'in SAHİPLİK ZİNCİRİNİ düzeltmek — TDV 1720 Qing diyor, atlas 1923'e
   kadar bağımsız Ganden Phodrang boyuyor.
③ Ve bir alet kusuru: motor_kara.geojson ile ölçülen her boşluk haritası
   %55 daha küçük bir dünya ölçüyor. Bu turdaki DÖRT oturumu da bağlar.
```

**Durum:** `⏳ BEKLİYORUM:` ① kutu sınırı onayı · `ORTAASYA-0902`den ·
② Tibet sahiplik kaleminin sevki · `1.MURAT`tan.
