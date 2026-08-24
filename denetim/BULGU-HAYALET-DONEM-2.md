# BULGU — HAYALET DÖNEM, İKİNCİ PARTİ

**OPUS HAZIR KITA 87** · 24 Ağustos 2026 · OSMANGAZİ sevkiyle
Teslim ①: `data/yer_yama_hayalet2.js` → `window.YER_YAMA_HAYALET2` (**118 kayıt**)
Teslim ②: `denetim/ONERI-HAYALET-RENK.txt` (4 hex + ΔE delili)
Veri/motor dosyalarına **yazılmadı**.

---

## 1. GÖRÜNMEYEN YARI — 118 kayıt

Birinci partiden farkı: **boya doğru, ekrandaki AD yanlış.** Kullanıcı bugün
1920'de Saraybosna'ya tıkladığında *"Sırbistan Krallığı (Nemanjić Hanedanı)"*
görüyor; o künye **1402'de** bitti. Sebep `js/app.js:70 devletAdi()`in zaman körü
olması: bir anahtar → tek ad, tarihe bakmadan, dosyada ilk geçen künyenin adı.

**Yöntem:** her dönem, aynı boya anahtarına cevap veren künyeler üzerinde
**yürünerek** zincire bölündü. Kapsayan künye aranmadı, **ölçüldü**.

```
kayıt 118 · öneri parçası 164 · doğrulama hatası 0 (dış sınır + iç boşluk)
  bulgaristan  42 → bulgaristan-kralligi (42) · -prensligi (6) · rusya (2)
  sirbistan    36 → sirbistan-kralligi (29) · yugoslavya (29) ·
                    sirbistan-prensligi (10) · sirp-despotlugu (6)
  suud         26 → suud-ucuncu (15) · suud-ikinci (11)
  arnavutluk   13 → arnavutluk-bagimsiz (12) · __BOSLUK__ (1)
  sardinya      1 → savoya (1)
```

**Çapraz dolgu — 4 dilim başka bir boya anahtarındaki künyeyle kapandı:**

| dilim | künye | dayanak |
|---|---|---|
| `sirbistan` 1918-12-01 → 1923-10-29 (29 kayıt) | **`yugoslavya`** | künye 1918-12-01..1923-10-29 — dilimin **iki ucuyla da birebir**; SHS Krallığı 1 Aralık 1918'de ilan edildi |
| `sardinya` 1281 → 1536 (Lozan) | **`savoya`** | künye 1032..1720-08-02 dilimin tamamını kapsıyor; `sardinya-piyemonte` **1720'de** kuruldu, 1281'de henüz yoktu |
| `bulgaristan` 1877-07-16 / 1877-12-10 → 1878-07-13 | **`rusya`** 🟡 | 93 Harbi'nde **Rus Muvakkat İdaresi**. Ayastefanos Bulgaristan'ı için künye yok |

**🔴 Kalan tek `__BOSLUK__`:** Berat, `arnavutluk` 1281-01-01 → 1417-01-01.
Bu dilimi kapsayan künye **yok** (Muzaka/Berat beyliği). **En yakın kimliğe
itilmedi** — bir hayaleti kapatıp yenisini doğurmanın bilinen yolu (`§3.5.1`).

---

## 2. 🟢 ÖNCEKİ RAPORUMUN BİR MADDESİNİ ÖLÇTÜM VE DARALTTIM

Birinci raporda *"(A) veri (B) kod, ikisi birbirinin alternatifi değil"* demiştim.
Ölçüm bunu **daralttı** — üçüncü bir yol var ve en ucuzu o:

### YOL A — motor `harita:` takma adını okusun
`anahtar = künye.harita or künye.id`. **Ölçüldü ve ÇÜRÜDÜ:**
```
bugünkü 8886 s: döneminin 8'inin anahtarı DEĞİŞİYOR
   romanya-kralligi → romanya       #2828d8 → #6c6912
⇒ Erdel · Temeşvar · Varad · Yanova · Brassó … sessizce YENİDEN BOYANIRDI.
```

### 🟢 YOL A′ — `id` BOYALAR'da ise onu kullan, değilse `harita`
*"Kendi rengi olan kimlik kendi rengiyle boyanır; olmayan, künyesinin takma
adına düşer."* **Ölçüldü:**

| sınav | sonuç |
|---|---|
| bugünkü kayıtlardan anahtarı değişen | **0** |
| `YER_YAMA_HAYALET2`in 11 hedefinden boyasız kalan | **0** (8'i takma adın rengine düşer — bugünkü renkleriyle aynı) |
| `YER_YAMA_HAYALET`in 25 hedefinden boyasız kalan | **4 → 3** (`macaristan-naiplik` de takma ada düşer) |

⇒ **YOL A′ ile bu iki yamanın toplam renk borcu 12 kimlikten 3'e iner** ve
bugünkü haritada **hiçbir piksel değişmez.** Tek satırlık bir çözümleme kuralı;
dosya `arac/uret_petek.py`, yani **koordinatörde**.

⚠️ Ama **denetimi düzeltmez**: `denetle.py` hâlâ `id:` sözlüğüyle bakıyor.
Onun ayrı düzeltmesi gerekiyor (o da koordinatörde).
📌 Ve `devletAdi(id, gün)` konusundaki itirazınızı **kabul ediyorum**: zaman körü
eklemek belirtiyi örter, kusuru sürdürür. Bu yamalar veriyi düzelttiği için
`devletAdi()` zaten doğru adı basacak — zamanlı ad ancak **ağ** olarak, sonradan.

---

## 3. RENK ÖNERİSİ — dört kimlik

### 3.1 🔴 Önce: mevcut aletin çıktısı ÇÜRÜK, kullanılmamalı

`py arac/renk_olc.py --oner norvec-kralligi,isvec-birlik-oncesi,sirvansah,macaristan-naiplik`
koşturuldu. Alet **kendi uyarısını öttürdü**:

> *"🔴 komşusu ölçülemeyen kimlik: … (verisi girdi.py'nin okuduğu dosyalarda
> DEĞİL — öneri yalnız altlık ve Osmanlı ikilisine dayanır)"*

Dördünün de veride dönemi **yok** (dönemleri bu yamayla gelecek). Sonuç:

```
#2424d2 · #242ad2 · #2430d2 · #2436d2      ← dördü de aynı mavi
norvec-kralligi ↔ isvec-birlik-oncesi   ΔE 1,97
sirvansah       ↔ macaristan-naiplik    ΔE 1,97
```

Kalmar Birliği'nin iki ortağı, **ayırt edilemez iki renk**. Artefaktı
`denetim/oneri-20260824-232904.txt`'te duruyor — **kullanılmamalı**, silmedim
ki bu vaka kayıtlı kalsın.

📌 Bu, `§11`'in *"VERİ penceresi ile KÜNYE penceresi ayrı şeylerdir"* dersinin
**alet tarafı**: aynı dosyanın `engel_kumesi()` fonksiyonu dersi taşıyor
(*"ölçemediğini eleyen süzgeç onu temiz sayar"*), ama `oner()` komşuluğu
**yalnız bugünkü veriden** kuruyor.

### 3.2 Engel kümesi YAMANIN UYGULANDIĞI evrende kuruldu

Hedefin yamayla alacağı **noktalar** ve **pencere** kullanıldı; o pencerede
sahnede olan ve ≤1500 km'deki palet kimlikleri engel sayıldı. Renk matematiği
yeniden yazılmadı — `renk_olc`'un kendi `lab/dE/bind/uyum/ALT/OSM`'i çağrıldı.

**Eşik kademesi — gevşetilmedi, SIKILAŞTIRILDI:**
```
anlatının merkezindeki çift   ≥ 25    (bugis↔gova vakası: 12,4 geçiyordu ama YETMİYORDU)
≤ 600 km eşzamanlı komşu      ≥ 15    (DE_SINIRDA — 12'yi geçmek yetmez, EKRANA da düşmesin)
600-1500 km eşzamanlı         ≥ 12    (DE_KOMSU tabanı)
```
İlk koşuda `sirvansah ↔ karakoyunlu` **43 km'de ΔE 12,8** çıkmıştı: eşiği
geçiyor ama *sınırda* listesine düşerdi. ≥15 kademesi konunca çözüm değişti.

### 3.3 ÖNERİ

| kimlik | hex | L* / ton | engel | en yakın ΔE | anlatı çiftleri |
|---|---|---|---|---|---|
| `norvec-kralligi` | **#2490d2** | 73,9 / 231° | 25 | 15,1 (milanoduka 1415 km) | **danimarka 25,4** · isvec-birlik-oncesi 46,4 |
| `isvec-birlik-oncesi` | **#a824d2** | 66,6 / 326° | 29 | 13,2 (mantua 1480 km) | **danimarka 25,0** · norvec-kralligi 46,4 |
| `sirvansah` | **#d2cc24** | 84,8 / 102° | 59 | 14,2 (taceddin 852 km) | **safevi 53,7** · **akkoyunlu 25,1** |
| `macaristan-naiplik` | **#d23024** | 67,8 / 39° | 30 | 17,0 (hollanda 797 km) | **yugoslavya 47,5** · **romanya-kralligi 55,4** |

Dördü de: altlıktan ΔE ≥ 30,8 · Osmanlı doğrudandan ≥ 26,5 · ≤600 km'deki her
eşzamanlı komşudan ≥ 15 · birbirlerinden ≥ 45,4.
Aktarım dosyası: `denetim/ONERI-HAYALET-RENK.txt` (`--dogrula` biçiminde).

⚠️ **`macaristan-naiplik` YOL A′ seçilirse GEREKMEZ** (künyesi `harita:"macaristan"`
taşıyor). Hex yine de verildi ki YOL B seçilirse hazır olsun.

### 3.4 🔴 "Bu çifti alet KURUYOR mu?" — sorduğunuz soru

**Hayır, bugün hiçbirini kurmuyor.** `komsuluk()` Voronoi komşuluğunu **veriden**
kuruyor; dört kimliğin de veride dönemi yok ⇒ `k[kimlik]` **boş** ⇒ alet o
çiftlerin **hiçbirini** kurmuyor (yukarıdaki "0 komşu" satırı bunun ölçümü).

Yama uygulandıktan sonra alet bunların bir kısmını kuracak — ama **hepsini
değil**, çünkü `renk_olc` yalnız **Voronoi komşusu** çiftleri kuruyor
(`kaffa ↔ sidamo` vakası: ΔE 2,8, beş yüzyıl sahnede, komşu olmadıkları için
hiçbir denetim bildirmedi). Benim ölçtüğüm çiftler **mesafe + eşzamanlılık**
tabanlı, yani aletin kuracağının **üst kümesi**. Ölçümler:

```
alet BUGÜN kuruyor mu?         hayır — 4 kimliğin 4'ünde 0 komşu
yama sonrası kuracak mı?       kısmen — yalnız Voronoi komşusu olanları
benim kurduklarım              25 · 29 · 59 · 30 engel (mesafe+eşzamanlılık)
en kritik çift Voronoi'de mi?  norvec-kralligi ↔ danimarka: 0 km (aynı noktalar
                               farklı dönemlerde) ⇒ kuracak
                               isvec-birlik-oncesi ↔ mantua (1480 km) ⇒ KURMAZ
```
⇒ `isvec-birlik-oncesi`in **en dar kısıtı** (13,2) aletin hiç kurmayacağı bir
çiftten geliyor. Yani bu öneriyi `renk_olc --dogrula` ile doğrulamak
**yeterli değil**; en dar çift o denetimin menzilinde değil.

---

## 4. Ölçmediklerim

- **Hiçbir öneri haritada denenmedi.** `uret_petek.py` koşturulmadı.
- **`renkler.py`ye yazmadım** (parmak izleniyor, koşarken değişirse koşu ölür).
- **`yugoslavya` #00695c ile `hive` #00695c aynı hex.** Bunu bu partide fark
  ettim; mesafe ~3000 km ve `>1500 km` tasarım kovasında, yani **ihlal değil**.
  Ayrıca **ölçmedim** — sadece kaydediyorum.
- `rusya` çapraz dolgusunun (93 Harbi, 2 kayıt) TDV doğrulaması **yapılmadı**;
  dayanak genel tarih bilgisi + künye penceresi. 🟡 işaretli.
- `savoya` ve `yugoslavya` çapraz dolgularının dayanağı **künye pencereleri**;
  şehir özelinde TDV maddesi okunmadı.
