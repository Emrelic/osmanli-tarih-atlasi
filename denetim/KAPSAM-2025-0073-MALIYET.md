# KAPSAM-2025-0073 — 1923 sonrası genişlemenin MALİYET ÖLÇÜMÜ

**Oturum:** KAPSAM-2025-0073 (H-0006) · **tarih:** 21 Eylül 2026 · **şartname:**
`oturumlar/DALGA-0073.md:68` · **öngörü (ölçümden önce yazıldı):**
`denetim/KAPSAM-2025-0073-ONGORU.md` · **ham sayılar:** `denetim/KAPSAM-2025-0073-HAM.json`

🔴 **Bu bir ÖLÇÜM raporudur. Kod yazılmadı, veri yazılmadı, hiçbir `data/` dosyasına
dokunulmadı.** Ölçüm sırasında makinede `uret_petek.py` koşuyordu (01:33'te başlamış);
yalnız OKUNDU, hiçbir şey yazılmadı.

---

## 0. HÜKÜM — beş satır

1. **Genişleme teknik olarak pahalı DEĞİL, editöryel olarak pahalı.** Motor koşusu
   %33 uzuyor (+6,1 saat), çıktı %12 büyüyor (+20 MB) — ama **~350 yeni künye,
   ~700 kronoloji maddesi ve ~5.700 yerleşim dilimi** yazılması gerekiyor. Maliyetin
   %95'i insan/oturum tarafında.
2. 🔴 **"Önce I. Dünya Savaşı sonu" diye bir kademe YOK — 1918 zaten pencerenin
   İÇİNDE.** Atlas 1923-10-29'da bitiyor. O kalem genişleme değil, `ONCELIK.md`
   ÖNCELİK 1'in (1900-1923'ü doldur) ta kendisidir ve ölçüm onun hâlâ ince olduğunu
   gösteriyor (§2.3).
3. 🔴 **`CLAUDE.md §9`daki "tam koşu ~40 dk" BAYAT ve 28 kat yanlış.** Ölçülen son
   tam koşu **18,5 saat işlemci** (15 Eylül, `kosu_zincir.log`). Sevk mektubu bu
   bayat sayıyı taşıyor; bütün koşu hesabı buradan düzeltildi (§4).
4. **`ONCELIK.md` bu işi ÖNCELİK 2'ye koyuyor ve açıkça uyarıyor** — itiraz §1'de,
   üç cümle. Israr hâlinde iş yapılır; itiraz veto değildir.
5. **En ucuz kademe C (1991→2025), en pahalı kademe B (1945→1991).** Sevkin sırası
   (1918 → 1991 → 2025) ile `ONCELIK.md`nin sırası (1945 → 1989 → bugün) uyuşmuyor;
   hüküm Emre'nin (§1.2).

---

## 1. ÖNCE İTİRAZ (`ONCELIK.md` gereği)

### 1.1 İtiraz — üç cümle
Bu iş `ONCELIK.md` §5'te **ÖNCELİK 2**'dir; önündeki halka **ÖNCELİK 1 = "1281-1923
penceresini doldur, özellikle 1900-1923"** ve o halka bitmedi. Ölçüldü: 1919-1923
yoğunluğu **yılda 17,0 madde** iken **1914-1918 yılda 10,4** — yani I. Dünya Savaşı
yılları, kendisinden sonraki mütareke yıllarından DAHA SEYREK, üstelik `ONCELIK.md`
"her cephe (Çanakkale · Kafkas · Filistin · Irak · Galiçya) ayrı işlenmeli" diyor.
`ONCELIK.md`nin kendi cümlesi: *"Açık pencereyi bırakıp yenisini açmak, bu belgenin
yasakladığı şeyin ta kendisidir."*
⚠️ **Bu bir veto değil uyarıdır. Emre ısrar ederse iş yapılır** — maliyeti aşağıda.

### 1.2 Belge ile sevk arasında UYUMSUZLUK var (hüküm Emre'nin)
| | duraklar |
|---|---|
| `ONCELIK.md` §④ "İLERİ" | **1945 · 1989 · bugün** |
| Sevk mektubu (M-4872) | **1918 · 1991 · 2025** |

İki fark: (a) 1918 durağı `ONCELIK.md`de YOK — çünkü pencerenin içinde (§2.3);
(b) 1989 ↔ 1991. Ölçüm açısından 1989 ile 1991 ARASINDA BÜYÜK FARK VAR: SSCB
26 Aralık 1991'de dağıldı, Yugoslavya 1991-92'de bölündü. **1989'da durmak 15 ardıl
cumhuriyeti ve 6 Yugoslav ardılını DIŞARIDA bırakır** — yani en pahalı tek kalemi
(410 nokta + 77 nokta) erteler. 1991'de durmak ise onu içeri alır.
⇒ Bu bir kapsam kararıdır, ölçüm değil. **Sormadan seçmedim.**

---

## 2. YÖNTEM VE EVREN

Her sayı bir evrenle verildi; türetilen her sayının formülü yazıldı.

| ölçülen | evren | değer |
|---|---|---|
| künye | `data/devletler.js`, satır başı `{ id:"` | **678** (§1.5 "677" der — 1 bayat) |
| kronoloji maddesi | `data/olaylar*.js`, `{t:"YYYY…"` | **1.704** (§1.5 "1688" der — 16 bayat) |
| kronoloji kuyruğu | `data/kronoloji*.js` (Değişmez 2 evreninde DEĞİL) | 4.955 |
| yerleşim | `arac/girdi.py` · 87 dosya | **3.921** |
| yerleşim dilimi | `d`+`v`+`s`+`isg` | **15.496** (d 1.302 · v 493 · s 13.375 · isg 326) |
| yabancı dönem gövdesi | `data/devletler_harita.js` · `DEVLET_HARITA[].dnm` | **3.874** (581 devlet) |
| Osmanlı dönem gövdesi | `data/donemler.js` · `URETIM_OLCU.donem` | **579** |
| toplam gövde | ikisi | **4.453** ✓ (B-GORUNUM-0072 ile aynı) |
| çıktıdaki farklı kesit tarihi | iki dosyadaki tarih dizgileri | **1.883** ✓ |
| motorun kendi "Kırılma tarihi" | `uret_petek.py:3933` — YALNIZ `d`+`v` | **594** |
| index.html'in yüklediği | 262 `<script src>` | **165,1 MB ham** (sevk "157,6" der — bayat) |
| bunun kesitle ölçekleyen payı | `donemler.js`+`devletler_harita.js` | **137,7 MB = %83,4** |
| gzip (ölçülen, 20 MB örnek) | dev.harita %24,1 · dönemler %30,3 · altlık %35,9 | **≈ 44 MB** |

### 2.1 🔴 Motorun iki ayrı zaman ekseni var — karıştırılırsa hesap 3 kat şişer
`uret_petek.py`nin bastığı **"Kırılma tarihi: N" (bugün 594) YALNIZ `d:`+`v:`**, yani
**Osmanlı doğrudan + tâbi** eksenidir. Yabancı devletler (`s:`) o listeye GİRMİYOR;
onlar `devletler_harita.js` yolundan, kendi dönem gövdeleriyle üretiliyor.
⇒ **1923'ten sonra Osmanlı YOKTUR. Yani genişleme motorun 594'lük ana eksenine
TEK BİR KESİT bile eklemez.** Bütün yük yabancı gövde yoluna biner. Bu, maliyeti
beklenenden küçük yapan tek yapısal gerçektir.

### 2.2 1923-10-29'da haritanın hâli — genişlemenin başlangıç tablosu
| | |
|---|---|
| o gün açık dilim (`t:`i taşınacak pencere) | **3.844** |
| bu dilimlerin kapsadığı nokta | **3.753** / 3.921 |
| hiç kapsanmayan nokta | 168 |
| o gün canlı künye (aynı anda haritada) | **146** |
| o gün nokta tutan farklı kimlik | **115** |

En çok nokta tutan kimlikler (1923-10-29, toplam 3.753 nokta):
`sovyet-rusya 410` · `ingiltere 338` · `tbmm-turkiye 263` · `fransa-cumhuriyet 261` ·
`abd 200` · `kanada 188` · `italya 127` · `ingiliz-hindistani 120` · `kacar 108` ·
`cin-cumhuriyeti 105` · `yunanistan 99` · `avustralya 79` · `meksika 78` ·
`yugoslavya 77` · `hollanda-dogu-hint 67` · `habesistan 64` · `portekiz 60` ·
`belcika 59` · `meiji-japonya 55` · `misir-kralligi 52`.
**Bu tablo işin tamamını taşıyor:** sömürgesizleşme yükü `ingiltere+fransa+hollanda+
belcika+portekiz+italya+ingiliz-hindistani ≈ 1.150 nokta`; 1991 yükü
`sovyet-rusya 410 + yugoslavya 77 ≈ 490 nokta`.

### 2.3 🔴 "1918 kademesi" diye bir genişleme YOK — ÖLÇÜLDÜ
Atlasın penceresi `UFUK = ("1281-01-01", "1923-10-29")` (`arac/girdi.py:1366`);
`js/app.js:90` `BITIS = 1923-10-29`. **1918 bu pencerenin tam ortasında.**
Kronoloji yoğunluğu (ölçülen, `olaylar*.js`):

| bant | madde | yılda |
|---|---|---|
| 1281-1499 | 339 | 1,55 |
| 1500-1699 | 526 | 2,63 |
| 1700-1799 | 267 | 2,67 |
| 1800-1899 | 365 | 3,65 |
| 1900-1913 | 69 | 4,93 |
| **1914-1918** | **52** | **10,4** |
| **1919-1923** | **85** | **17,0** |

⇒ Dünya savaşının beş yılı, onu izleyen beş yıldan **%39 daha seyrek**. `ONCELIK.md`
"1914 senesi 1450-1500 ile yarışır, hattâ geçer" diyor; bugün 1914-1918'de toplam
**52 madde** var — beş cephe için bu, cephe başına 10 madde demektir.
**Sevkin "önce I. Dünya Savaşı sonu" kalemi bir kapsam genişlemesi değil, ÖNCELİK 1
işidir ve KAPSAM-2025 oturumunun konusu değildir.** Bu yüzden aşağıdaki kademeler
**A = 1923→1945**, **B = 1945→1991**, **C = 1991→2025** diye kuruldu.

---

## 3. SORU (1) — KAÇ YENİ KÜNYE

### 3.1 Ölçülen: dizin 1923'te gerçekten kesiliyor mu
| ölçüm | değer |
|---|---|
| `t:` 1923'te biten künye | **90** |
| `t:` 1922-1924 arasında biten | **94** |
| `t:` 1918-1924 arasında biten | **109** |
| `t:` 1917 ve öncesi | 513 |
| `t:` 1925 ve sonrası (bugün zaten ileri uzanan) | **56** |
| **1923-10-29'da canlı** | **146** |
| **1945-09-02'de canlı** | **49** |
| **1991-12-26'da canlı** | **1** |
| **2025-01-01'de canlı** | **1** |

🔴 **Ve 1945'te canlı olan 49 künyenin HEPSİ sömürge/manda/racalıktır** —
`ingiliz-hindistani`, `fransiz-cinhindi`, `belcika-kongo`, `filistin-mandasi`,
`portekiz-angola`… **Tek bir egemen ardıl devlet yok:** Türkiye Cumhuriyeti yok,
SSCB yok, Almanya 1923'te kesilmiş, Suudi Arabistan yalnız `suud-ucuncu` (1932'de
biter). 1991 ve 2025'te canlı tek künye `iran` (t: 2026-08-07).
⇒ Dizinin 1923 sonrası tarafı **fiilen boş**. 2.3'teki 56 "ileri uzanan" künye
ardıl değil, SELEF künyeleridir (bağımsızlık tarihinde biterler) — yani
**genişlemenin ön şartlarının yarısı zaten hazır, ardıl tarafı ise sıfır.**

### 3.2 Türetilen: kaç yeni künye gerekiyor
Yöntem: *(o tarihte haritada bulunması gereken kimlik sayısı) − (bugün o tarihte
canlı künye)* + *(iki durak ARASINDA doğup ölen kısa ömürlü yapılar)*. İlk terim
bugünkü atlas taneciğinde ölçüldü (1923'te 115 kimlik 3.753 noktayı tutuyor,
sömürgeler tek künye ile temsil ediliyor — `fransiz-bati-afrika` gibi); ikinci terim
`devletler.js`ten ölçüldü; üçüncü terim **TAHMİNDİR** ve öyle işaretlendi.

| kademe | haritadaki kimlik (tahmin) | bugün canlı (ÖLÇÜLDÜ) | ardıl açığı | ara yapı (tahmin) | **yeni künye** |
|---|---|---|---|---|---|
| **A · 1923→1945** | ~150-160 | **49** | ~105 | 25-40 (Mançukuo · NDH · Vichy · Slovakya · İtalyan Doğu Afrikası…) | **130-170** (orta **145**) |
| **B · 1945→1991** | ~195-205 | **1** (A'dan devreden ~110 hariç) | ~90 | 30-45 (DDR · Güney Vietnam · BAC · Biafra · Rodezya · Zanzibar…) | **120-165** (orta **140**) |
| **C · 1991→2025** | ~200 egemen + ~50 bağımlı | **1** (B'den devreden ~185 hariç) | ~30-45 | ~20-40 bağımlı ülke | **50-85** (orta **65**) |
| **TOPLAM** | | | | | **300-420** (orta **~350**) |

⇒ Bugünkü 678 künye **+%52** büyür → **~1.030 künye**.
📌 Ve bu sayı **renk** demektir: `renkler.py` bugün 602 boya tutuyor; +350 kimlik
paleti **%58 büyütür** ve `renk_olc.py`nin komşuluk/ΔE kısıtı doğrusal değil
karesel zorlaşır. **Bu kalem ayrıca ölçülmeli** (§7 açık kalem).

---

## 4. SORU (2) — KRONOLOJİ MADDESİ ve YERLEŞİM PENCERESİ

### 4.1 Kronoloji — iki bağımsız model, büyüğü bağlar
**① Editöryel yoğunluk modeli** (§2.3 tablosundan; `ONCELIK.md` "zaman bize
yaklaştıkça keskinlik artar" kuralıyla):

| kademe | yıl | varsayılan yoğunluk | **madde** |
|---|---|---|---|
| A · 1923→1945 | 21,9 | 1923-39 6-8/yıl · 1939-45 16-20/yıl | **180-320** (orta **225**) |
| B · 1945→1991 | 46,3 | 5-8/yıl | **200-450** (orta **300**) |
| C · 1991→2025 | 33,1 | 4-6/yıl | **135-205** (orta **170**) |
| **TOPLAM** | 101,3 | | **515-975** (orta **~695**) |

**② Değişmez 2s alt sınırı** (sessiz toprak değişimi yasağı): bugün **1.418 yabancı
kırılması** var ve `olaylar*.js`te 1.704 madde — ölçülen bağlaşım **0,37 kırılma /
gövde**. Yeni gövde sayısıyla (§5.1) çarpılınca: A ~96 · B ~229 · C ~74 = **~399
madde MUTLAK ZORUNLU**.
⇒ İki model çelişmiyor: **zorunlu taban 399, editöryel hedef ~695.** 695 madde
bugünkü kronolojinin **%41'i** kadardır.
📌 Öngörüm (Ö2d: 1.000-1.800) **ÇÜRÜDÜ** — evreni yanlış aldım: bütün dünyanın
20. yüzyılını değil, atlasın bugünkü taneciğini ölçmem gerekiyordu.

### 4.2 Yerleşim penceresi — iki ayrı kalem, karıştırılmamalı

**① TAŞINACAK PENCERE (düz düzenleme, kaçınılmaz):** 1923-10-29'da **3.844 dilim
açık** ve hepsinin `t:` alanı kademe sonuna taşınmak zorunda. 3.753 noktayı kapsıyor.
Bu bir araştırma işi değil, toplu ve mekanik bir düzenlemedir — **ama `CLAUDE.md §11`
"toplu düzeltme" ailesinin tam hedefidir** (`replace(...,1)` tuzağı, Türkçe `sed`
yasağı). Bir kere, kademe A'da yapılır.

**② YENİ DİLİM (araştırma işi):** her sahiplik değişimi bir yeni `s:` dilimi.
Ölçülen devir hızı (dilim BAŞLANGICI):

| bant | dilim başlangıcı | yılda |
|---|---|---|
| 1850-1874 | 573 | 23 |
| 1875-1899 | 983 | 39 |
| **1900-1923** | **2.657** | **111** |

§2.2'deki nokta havuzlarından türetildi:

| kademe | başlıca devir | **yeni dilim** |
|---|---|---|
| A · 1923→1945 | `tbmm-turkiye` 263 → Türkiye · II. Dünya Savaşı işgalleri ve geri dönüşleri (Avrupa ~400-600 nokta × 2 dilim) · Habeşistan 64 × 2 · Baltık 1940/41/44 × 3 · Suud birleşmesi | **2.000-3.500** (orta **2.600**) |
| B · 1945→1991 | sömürgesizleşme ~1.150 nokta × 1 · Hindistan-Pakistan 120 · Vietnam/Kore 60 · Almanya 34 × 2 · Çin 105 | **1.800-3.000** (orta **2.300**) |
| C · 1991→2025 | `sovyet-rusya` 410 · `yugoslavya` 77 · Çekoslovakya ~15 · Eritre/D.Timor/G.Sudan ~30 | **600-1.000** (orta **800**) |
| **TOPLAM** | | **4.400-7.500** (orta **~5.700**) |

⇒ Bugünkü 15.496 dilim **+%37** büyür. Öngörüm (Ö3d: 6.000-11.000) **kısmen
tuttu** — alt ucu doğru, üst ucu şişkindi.

🔴 **Ve bir ön şart:** `ONCELIK.md` KALİTE MERDİVENİ'ne göre Amerika-Sahra altı-
Avustralya bugün kalite 6'da (0,33 nokta/100.000 km², **%80'i pencere dışı**).
1923 sonrasında bu bölgeler **egemen devletlerle dolacak** — yani bugün "başkent
düzeyi" sayılan yerler, 1960'ların Afrika'sında **ayrı ayrı ülkeler** olacak.
Sömürgesizleşmeyi doğru göstermek **nokta yoğunluğu da ister**; `ONCELIK.md` §6
"nokta yoğunluğu sağlanmadan pencere açılmaz" kuralının zaman eksenindeki karşılığı
budur. Bu kalem yukarıdaki sayılara DÂHİL DEĞİL (§7 açık kalem).

---

## 5. SORU (3) — MOTOR KOŞUSUNA ETKİSİ

### 5.1 🔴 ÖNCE BİR DÜZELTME: taban 40 dakika değil, 18,5 SAAT
`CLAUDE.md §9` "harita üretimi (~40 dk)" diyor ve sevk mektubu bunu devraldı.
Bütün koşu loglarından ölçüldü (`arac/olc_kosu_suresi.py` + aşama bilançoları):

| koşu | tarih | kesit | **işlemci** | kesit başına |
|---|---|---|---|---|
| `kosu_r772.log` | ~Ağustos | 500 | 1,19 sa | 8,6 sn |
| `kosu_25agu.log` | 25 Ağu | 526 | 3,53 sa | 24,2 sn |
| `kosu_31agu.log` | 31 Ağu | 533 | 6,83 sa | 46,1 sn |
| `kosu_2eylul.log` | 2 Eyl | 536 | 9,23 sa | 62,0 sn |
| `kosu4b.log` | 4 Eyl | 541 | 15,88 sa | 105,7 sn |
| **`kosu_zincir.log` (son)** | **15 Eyl** | **540** | **18,50 sa** | **123,3 sn** |

⇒ Kesit sayısı 500→540 (+%8) iken süre 1,2→18,5 saat (**×15**). **Koşu süresi kesit
sayısının değil, KESİT BAŞINA İŞİN fonksiyonu** — eklenen motor katmanları (çöl
tavanı, kuşatılmışlık, kara-kısıtlı sahiplik, seyreltme) büyüttü.
📌 **"~40 dk" cümlesi `CLAUDE.md §9`dan DÜZELTİLMELİ** (bu oturum kök `*.md`
dosyalarının sahibi değil — hüküm 1.MURAT'ta, §7 açık kalem).

### 5.2 Ölçülen birim maliyetler (son koşunun aşama bilançosundan)
```
Yabancı devlet gövdeleri      15s 03dk 53sn   %81,5   ← genişlemenin BİNECEĞİ yer
Dönemler kuruluyor (delta)     1s 57dk 58sn   %10,5   ← kesit sayısıyla ölçekler
Varlık epokları                   29dk 01sn   % 2,5
Çöl tavanı                        33dk 23sn   % 3,1
... (geri kalan hepsi)            ~25dk       % 2,4   ← kesitten BAĞIMSIZ, sabit

ÇAPRAZ SAYAÇ:
  yabancı gövde geometrisi   3.643 çağrı  14s 43dk  →  14,55 sn / gövde   ⟵ BİRİM
  Osmanlı gövde geometrisi     535 çağrı   1s 13dk  →   8,19 sn / gövde
```
**Maliyet formülü (ölçülmüş):**
`Δsüre ≈ 14,55 sn × (yeni yabancı gövde) + 13,3 sn × (yeni kesit tarihi)`
(ikinci terim: 1s58dk ÷ 540 kesit = 13,3 sn/kesit, "Dönemler kuruluyor" aşaması.)
Yeni kesit tarihi ≈ **0,42 × yeni gövde** (bugün 1.883 tarih ÷ 4.453 gövde).

### 5.3 Kademe kademe koşu maliyeti

| kademe | yeni gövde | yeni kesit tarihi | Δ süre | **koşu (kümülatif)** | artış |
|---|---|---|---|---|---|
| bugün | — | 1.883 | — | **18,5 sa** | — |
| **A · 1945** | 180-400 (orta **260**) | ~110 | **+1,5 sa** | **~20,0 sa** | +%8 |
| **B · 1991** | 450-850 (orta **620**) | ~260 | **+3,5 sa** | **~23,5 sa** | +%27 |
| **C · 2025** | 120-300 (orta **200**) | ~84 | **+1,1 sa** | **~24,6 sa** | +%33 |

🟢 **Ölçek patlaması YOK:** motorun pahalı çekirdeği (Osmanlı gövdesi, çöl tavanı,
kuşatılmışlık, petek üretimi) 1923'te BİTİYOR ve genişlemeden hiç etkilenmiyor.
Genişleme yalnız yabancı gövde sayısını artırıyor ve o kalem **doğrusal**.
Öngörüm Ö4e (doğrusal, süper-doğrusal patlama yok) **TUTTU**; Ö4b/c/d (dakika
mertebesi) **ÇÜRÜDÜ**, çünkü tabanı 40 dk sandım.

⚠️ **Ama bir uyarı:** bu hesap **Ⓑ görünümü (dolgu katmanı) KAPALI** iken geçerli.
B-GORUNUM-0072'nin ölçümü (M-4847): dolgu katmanı açılırsa soğuk ilk hesap
**4,5-6 GÜN**. Kapsam genişlemesi o sayıyı da **%33 büyütür** → 6-8 gün.
**İki işin sırası kararı Emre'nin/1.MURAT'ın:** önce dolgu mu, önce kapsam mı.

---

## 6. SORU (4) — ÇIKTI BOYUTU

### 6.1 Ölçülen taban ve birim
| | |
|---|---|
| `index.html`in yüklediği | **262 betik · 165,1 MB ham** (sevkteki "261 / 157,6 MB" bayat) |
| `devletler_harita.js` | 75,8 MB · 3.874 gövde ⇒ **18,9 KB / gövde** |
| `donemler.js` | 61,9 MB · 579 gövde ⇒ 104 KB / gövde (Osmanlı, **1923'te durur**) |
| ikisinin payı | **%83,4** (öngörüm Ö5a "%85 üstü" — hafif şişkin, ✓ sayılır) |
| gzip (ölçüldü) | dev.harita **%24,1** · dönemler %30,3 · altlık %35,9 ⇒ toplam **≈ 44 MB** |

**Birim:** yeni gövde başına **+18,9 KB ham / +4,6 KB gzip**. `donemler.js` BÜYÜMEZ.

### 6.2 Kademe kademe
| kademe | yeni gövde | Δ ham | **ham toplam** | Δ gzip | **gzip toplam** |
|---|---|---|---|---|---|
| bugün | — | — | **165,1 MB** | — | **~44 MB** |
| **A · 1945** | 260 | +4,9 MB | **170,0 MB** | +1,2 MB | ~45,2 MB |
| **B · 1991** | 620 | +11,7 MB | **181,7 MB** | +2,8 MB | ~48,0 MB |
| **C · 2025** | 200 | +3,8 MB | **185,5 MB** | +0,9 MB | ~48,9 MB |
| **TOPLAM** | ~1.080 | **+20,4 MB (+%12,4)** | | **+4,9 MB** | |

Öngörüm Ö5b (170-185 MB) **TUTTU**; Ö5c/Ö5d **ÇÜRÜDÜ** (190-250 dedim, 182-186
çıktı) — sebebi aynı: `donemler.js`in büyümeyeceğini hesaba katmamıştım.

### 6.3 🔴 YUKLEME-0072 ile bağ — ve tersi bir sonuç
Öngörüm Ö5e "genişleme yükleme sorununu ağırlaştırır" diyordu; **doğru ama küçük**:
+%12. Asıl sonuç şu: **bugünkü 165 MB'ın %83'ü zaten kesit gövdeleri** ve genişleme
bu oranı değiştirmiyor. Yani **yükleme sorunu kapsamdan bağımsız olarak bugün de
var ve bugün de çözülmeli**; kapsam onu %12 kötüleştirir, sebebi değildir.
⇒ "Önce yüklemeyi çöz, sonra kapsamı aç" **gerekçelendirilemez** — ama "kapsamı
açmadan yüklemeyi çöz, çünkü sonra 185 MB'ı bölmek 165 MB'ı bölmekten zor değil"
de gerekçelendirilemez. **İki iş bağımsızdır.** Sıra kararı Emre'nin.

---

## 7. SORU (5) — TOKEN / SÜRE / OTURUM

### 7.1 Kalibrasyon — tahminle değil, bu projenin ÖLÇÜLEN hızıyla
| ölçüm | değer |
|---|---|
| künye: 30 gün önce (`19882b4`) → bugün | **431 → 678 = +247 künye / 30 gün** (8,2/gün) |
| `data/` commit'i, son 30 gün | 495 |
| tahta mesajı, son 14 gün | 1.818 |
| tahtaya yazan farklı oturum / gün (son 14 gün) | 12-82, **ortalama ~35** |
| tahtadaki toplam TESLIM | 791 |

⇒ **Bu kadro 30 günde künye stokunun %57'sini üretti.** Genişlemenin künye yükü
(+%52) bununla AYNI mertebededir.

### 7.2 Türetilen maliyet
Genişlemenin toplam içerik yükü, bugünkü stoka göre: künye **+%52** · kronoloji
**+%41** · yerleşim dilimi **+%37** ⇒ ağırlıklı **≈ bugünkü atlasın %43'ü kadar
yeni içerik.**

| kademe | içerik payı | **proje-günü** (bugünkü kadro) | **oturum-günü** (~30 oturum/gün) |
|---|---|---|---|
| **A · 1923→1945** | ~%30 | **12-18** | 350-550 |
| **B · 1945→1991** | ~%45 | **18-27** | 550-800 |
| **C · 1991→2025** | ~%25 | **10-15** | 300-450 |
| **TOPLAM** | %100 | **40-60 proje-günü** | **1.200-1.800 oturum-günü** |

⚠️ **Bu sayının kırılganlığı:** "proje-günü" = bütün kadronun bir günlük işi ve
kadro son 14 günde 12 ile 82 oturum arasında oynadı. Kadro yarıya inerse takvim
ikiye katlanır. **Token cinsinden vermedim — ölçemedim** (§8b).

📌 Öngörüm Ö6d (70-145 oturum-gün) **ÇÜRÜDÜ ve birim karışıklığındandı**:
"oturum-gün"ü proje-günü sanmışım. Proje-günü cinsinden 40-60 çıktı; oturum-günü
cinsinden 1.200-1.800. **İki birim arasında 30 kat var ve sevk hangisini istediğini
söylemiyor — 1.MURAT'ın hangisini istediğini bilmem gerek.**

---

## 8. NE BULAMADIM / ÖLÇEMEDİM

**a) Kaç künye gerektiğinin ilk terimi TAHMİNDİR, ölçüm değil.** "1945'te haritada
~150-160 kimlik olmalı" cümlesi bugünkü atlas taneciğinden çıkarıldı (1923'te 115
kimlik / 3.753 nokta), bir kaynaktan değil. Kesin sayı ancak **hedef tarihlerin
siyasî haritası akademik kaynaktan çıkarılıp** bugünkü dizinle karşılaştırılınca
bulunur; o ayrı bir oturumluk iştir. Bugünkü rakamlar **±%25** taşır.

**b) TOKEN cinsinden maliyet ÖLÇÜLEMEDİ.** `arac/olc_token.py` ve `olc_indirme.py`
oturum dökümlerini okuyor ama birim iş başına token bağlamak için "şu 247 künyeyi
şu oturumlar yazdı" eşleşmesi gerekiyor; tahtada o eşleşme yok. **"Ölçülemedi"
yazıyorum, "az" ya da "çok" demiyorum.**

**c) PALET maliyeti ölçülmedi.** +350 kimlik `renkler.py`nin 602 boyasını %58
büyütür; `renk_olc.py`nin komşuluk/ΔE kısıtı doğrusal değildir. **Bu kalem bu
raporun sayılarına DÂHİL DEĞİL** ve kendi ölçümünü hak ediyor.

**d) NOKTA YOĞUNLUĞU maliyeti ölçülmedi** (§4.2 sonu). Sömürgesizleşmeyi
göstermek için Afrika/Amerika'da yeni yerleşim noktası gerekip gerekmediği
`ONCELIK.md` KALİTE MERDİVENİ'ne göre **muhtemelen gerekir**, ama kaç nokta
olduğunu ölçmedim.

**e) Ⓑ dolgu katmanıyla birleşik maliyet ölçülmedi** (§5.3 uyarısı) — yalnız
B-GORUNUM-0072'nin sayısı %33 ile çarpıldı; o sayının kendisi bir başka oturumun
ölçümüdür, ben doğrulamadım.

**f) `denetle.py` KOŞTURULMADI** — veri değiştirmedim, evreninde olan hiçbir şeye
dokunmadım. "Temiz" demiyorum, "sorulmadı" diyorum.

**g) Ölçüm sırasında `uret_petek.py` koşuyordu** (01:33'te başladı). `data/`
dosyalarını okurken koşu henüz Voronoi aşamasındaydı, yani çıktı dosyalarına
yazmamıştı; yine de **bu raporun `donemler.js`/`devletler_harita.js` sayıları
koşudan ÖNCEKİ çıktıya aittir** ve koşu bitince 1-2 gövde oynayabilir.

---

## 9. ÖNGÖRÜ KARNESİ (`KAPSAM-2025-0073-ONGORU.md`, ölçümden ÖNCE yazıldı)

| # | öngörü | ölçülen | hüküm |
|---|---|---|---|
| Ö1a | 1918-1923'te biten künye 40-80 | 1918-1924: **109**, 1922-1924: **94** | ✗ (düşük) |
| Ö1b | 1923 sonrasına uzanan künye <60 | **56** | ✓ |
| Ö1c | 1918 için 60-110 yeni künye | kademe A: 130-170 | ✗ (düşük) |
| Ö1d | 1991 için 180-300 | A+B: 250-335 | ✓ |
| Ö1e | 2025 için 250-400 | **300-420** | ✓ |
| Ö2a | 1900-1923 yoğunluğu 5-9/yıl | 1900-13: **4,9** · 1919-23: **17,0** | ✗ (bant çok dar) |
| Ö2b | 1923-45 için 250-450 madde | 180-320 | ~ (üst üst üste biniyor) |
| Ö2d | 1923-2025 için 1.000-1.800 | **515-975** | ✗ (2 kat şişkin) |
| Ö3a | noktaların >%80'i 1923'te bitiyor | **3.753/3.921 = %95,7** | ✓ |
| Ö3d | 2025 için 6.000-11.000 dilim | **4.400-7.500** | ~ (üst ucu şişkin) |
| Ö4a | kesit yoğunluğu ~2,9/yıl | motor ekseni **594/642 = 0,93** · çıktı 1.883/642 = 2,93 | ✓ (çıktı ekseninde) |
| Ö4b-d | koşu 43-66 dk | **20,0 / 23,5 / 24,6 SAAT** | ✗ (taban bayattı) |
| Ö4e | doğrusal, patlama yok | ✓ doğrusal, üstelik Osmanlı çekirdeği hiç büyümüyor | ✓ |
| Ö5a | kesitle ölçekleyen pay >%85 | **%83,4** | ~ |
| Ö5b | 1945'te 170-185 MB | **170,0 MB** | ✓ |
| Ö5c/d | 1991/2025'te 190-250 MB | **181,7 / 185,5 MB** | ✗ (şişkin) |
| Ö5e | yükleme sorununu ağırlaştırır | ✓ ama yalnız %12; sorun kapsamdan bağımsız | ~ |
| Ö6d | toplam 70-145 oturum-gün | 40-60 proje-günü **ya da** 1.200-1.800 oturum-günü | ✗ (birim karışıklığı) |
| Ö7a | `ONCELIK.md` gereği itiraz edeceğim | ✓ §1.1 | ✓ |
| Ö7b | belge ile sevkin durakları uyuşmayacak | ✓ §1.2 (1945/1989/bugün ↔ 1918/1991/2025) | ✓ |
| Ö7c | "1918 kademesi" aslında ÖNCELİK 1'dir | ✓ §2.3, ölçümle | ✓ |

**19 maddenin 10'u tuttu, 5'i çürüdü, 4'ü kısmen.** Çürüyenlerin üçü tek bir kök
sebepten: **`CLAUDE.md §9`un "~40 dk"sına ve `donemler.js`in de büyüyeceğine
inanmıştım.** İkisi de yanlıştı ve ikisi de ölçümle düzeldi.

---

## 10. ÖNERİM (hüküm Emre'nin / 1.MURAT'ın)

1. 🔴 **"1918 kademesi"ni kapsam işi olmaktan çıkarın** — o ÖNCELİK 1'dir ve
   ölçüm onun ince olduğunu gösterdi (1914-18: yılda 10,4 madde, beş cephe için
   toplam 52 madde). Kapsam oturumu değil, **kronoloji oturumu** işidir.
2. **Kademe C'yi (1991→2025) B'den ÖNCE yapmayı değerlendirin.** Ölçüm bunu
   destekliyor: C en az yeni künye (50-85), en az dilim (600-1.000), en az koşu
   yükü (+1,1 sa) ve **`ONCELIK.md` ② "kaynak yoğunluğu" ölçütünde en zengin**
   dönemdir. B (sömürgesizleşme) hem en pahalı hem Osmanlı hikâyesine en uzak
   kalemdir. ⚠️ Ama C, B olmadan **tarihsel olarak boşlukta durur** (SSCB kurulmadan
   dağılamaz) — bu yüzden bir öneri değil, **tartılacak bir seçenek** olarak yazıyorum.
3. **`CLAUDE.md §9`daki "~40 dk" düzeltilsin** (ölçülen: 18,5 saat). Bu oturum kök
   `*.md` sahibi değil; kalem 1.MURAT'ta.
4. **Üç açık ölçüm ayrı oturuma verilsin:** palet maliyeti (§8c) · nokta yoğunluğu
   (§8d) · hedef tarihlerin siyasî haritasının kaynaktan çıkarılması (§8a).
5. **Token birimi netleşsin:** proje-günü mü, oturum-günü mü (§7.2 sonu).
