# YUKLEME-0072 — SİTE AÇILIŞ HIZI · ÖLÇÜM RAPORU
20 Eylül 2026 · oturum YUKLEME-0072 · hüküm Emre'nin

Emre'nin şikâyeti: *"sitenin yüklenmesi biraz uzun sürüyor, site çok mu yüklü, tık diye
yüklenmesi için ne yapmalıyız."*

🔴 **TEK CÜMLELİK CEVAP: site "çok yüklü" ama dert İNDİRME DEĞİL.** İkinci ziyarette
tarayıcı **0,00 MB** indiriyor ve harita yine **65 saniyede** açılıyor (ilk ziyaret 64,5 sn).
Bayt kısmak tek başına bu saniyeleri geri vermez; saniyeler **JS ayrıştırma + nesne
kurma + çöp toplama**da yanıyor. Koda dokunmadan en büyük kazanç, veriyi `<script>`
yerine `JSON.parse` ile okumaktır (ölçüldü: %66–73 daha hızlı, yarı yarıya az bellek).

Öngörüler ölçümden önce yazıldı: [`YUKLEME-0072-ONGORU.md`](YUKLEME-0072-ONGORU.md) · sınav
sonuçları §6.

---

## 1. Taban — ne yükleniyor (ölçüldü, koordinatörün sayısı DOĞRULANDI)

`py denetim/ARAC-YUKLEME-0072-YEREL.py` → [`YUKLEME-0072-YEREL.json`](YUKLEME-0072-YEREL.json)

| | |
|---|---|
| `index.html`in yüklediği yerel dosya | **261** (+2 dış: unpkg MapLibre js+css) |
| ham toplam | **157,58 MB** |
| gzip toplam (yerelde ölçülen) | **43,85 MB** |
| `data/` | 253 dosya · 156,64 MB ham · 43,51 MB gzip |
| `js/` + `css/` | 8 dosya · 0,94 MB ham |
| `?v=rNNNN` damgası olmayan dosya | **0** (hepsi damgalı) |
| eksik (404) | `data/dolgu.js` — beyan edildi, kusur sayılmadı |

Üç dosya toplamın **%91,7**'si: `devletler_harita.js` 72,30 MB · `donemler.js` 58,99 MB ·
`altlik.js` 13,17 MB.

---

## 2. GERÇEK AÇILIŞ — yayından ölçüldü (headless Chrome + CDP)

`node denetim/ARAC-YUKLEME-0072-SINAV.js A|B` → `YUKLEME-0072-SINAV-A.json`, `-B.json`
Hedef: https://emrelic.github.io/osmanli-tarih-atlasi/ · "harita kullanılabilir" ölçütü:
`harita.loaded() && harita.isStyleLoaded() && katman sayısı > 0`.

| ölçü | SOĞUK (1. ziyaret) | SICAK (2. ziyaret) |
|---|---|---|
| tel üstü toplam | **44,75 MB** | **0,00 MB** |
| istek | 331 (263 script/stil + 61 MapLibre glif/döşeme + 7) | 357 (hepsi önbellekten) |
| ilk boyama (FCP) | 3,0 sn | 0,5 sn |
| DOMContentLoaded | 39,8 sn | 53,6 sn |
| **HARİTA KULLANILABİLİR** | **64,5 sn** | **65,2 sn** |
| ScriptDuration | 20,1 sn | 22,2 sn |
| TaskDuration (ana iplik meşgul) | 33,8 sn | 55,8 sn |
| JS yığını | 829 MB | 856 MB |

(İkinci koşuda soğuk 79,1 sn / sıcak 77,1 sn ölçüldü — mutlak saniyeler makineye ve hatta
bağlı, **oran değişmiyor**.)

🔴 **Sıcak ziyaret hiç bayt indirmiyor ve hızlanmıyor.** Bu tek satır, "bayt kıs" temelli
her öneriyi ikinci sıraya atar.

### Sunucu ne veriyor — başlıklara BAKILDI (varsayılmadı)
```
data/donemler.js?v=r9454
  durum 200 · content-encoding: GZIP · cache-control: max-age=600 · etag: var
  protokol: h2 · server: GitHub.com
```
- **gzip AÇIK** — sıkıştırmadan kazanılacak şey yok (157,58 MB → 44,75 MB, %28,4).
- **HTTP/2** — aynı anda **264** istek açık ölçüldü; indirme zaten paraleldir.
- **`cache-control: max-age=600`** (10 dakika). `?v=rNNNN` damgası **bunu uzatmaz** —
  GitHub Pages özel başlık kabul etmez. Damga doğruluk içindir (bayat dosya gelmesin),
  hız için değil.
- ⚠️ `ölçülemedi`: 10 dakikayı AŞAN tekrar ziyarette 263 koşullu istek (304) turu
  doğacak mı — ölçmedim (ölçüm penceresi 10 dk içindeydi).

---

## 3. NEREDE BEKLİYOR — indirme mi, ayrıştırma mı, haritaya aktarma mı

Üçü ayrı ölçüldü.

### 3a. İndirme — darboğaz DEĞİL
Soğuk koşuda son bayt 57,4 sn'de indi, harita 64,5 sn'de hazırdı; **sıcak koşuda hiç bayt
inmedi, süre aynı kaldı**. İndirme, CPU işinin arkasına tamamen gizleniyor.
(Yan ölçüm: tek dosya `curl` ile 32,6–38,9 Mbit/s iniyor; sayfa 264 akışı paylaştırınca
etkin hız 6,0–6,5 Mbit/s'e düşüyor. Yani hat da 264 eşzamanlı istek de darboğaz değil —
ikisi de CPU'yu bekliyor.)

### 3b. JS ayrıştırma + çalıştırma — 20,8 sn, %94'ü ÜÇ DOSYADA
`node denetim/ARAC-YUKLEME-0072-AYRISTIRMA.js` → [`YUKLEME-0072-AYRISTIRMA.json`](YUKLEME-0072-AYRISTIRMA.json)
260 dosya, ağ etkisi yok (yerel), tek tek, sırayla:

| dosya | MB | ayrıştırma+çalıştırma | yığın |
|---|---|---|---|
| `data/devletler_harita.js` | 72,30 | **11 392 ms** | 512 MB |
| `data/donemler.js` | 58,99 | **7 214 ms** | 431 MB |
| `data/altlik.js` | 13,17 | **983 ms** | 69 MB |
| `js/app.js` | 0,69 | 412 ms | 24 MB |
| *kalan 256 dosya* | ~12 | **1 232 ms** | ~36 MB |
| **TOPLAM** | 156,7 | **20,8 sn** | **1 072 MB** |

**Üç dosya = 19,6 sn = toplam ayrıştırmanın %94. Kalan 257 dosya hep birlikte 1,2 sn.**

### 3c. Haritaya aktarma / nesne kurma — ~35 sn (artık)
Sıcak koşuda ana iplik 55,8 sn meşgul; bunun 22,2 sn'si betik. Aradaki ~33 sn nesne kurma,
düzen ve **çöp toplama**dır — 856 MB–1,07 GB'lık yığında büyük GC turları kaçınılmazdır.

Sebebi `js/app.js`te açıkça duruyor:
- [`js/app.js:332`](../js/app.js#L332) — `window.DONEMLER.map(...)` **579 dönemin HEPSİNİN**
  gövdesini açılışta `parcaCoz` ile çözüyor.
- [`js/app.js:430`](../js/app.js#L430) — `devletler2.forEach(... p.ft = parcaCoz ...)`
  **581 yabancı döneminin HEPSİNİ** açılışta GeoJSON `Feature`a çeviriyor.

Yani tarayıcı 1281–1923'ün **bütün günlerinin** haritasını, kullanıcı tek bir gün
görecekken kuruyor.

---

## 4. ÜÇ KALDIRAÇ + brief'te olmayan DÖRDÜNCÜSÜ

### 🥇 (d) YENİ — `<script>` yerine `fetch` + `JSON.parse` · **ÖLÇÜLDÜ, kayıpsız**
`node denetim/ARAC-YUKLEME-0072-JSON.js` → [`YUKLEME-0072-JSON.json`](YUKLEME-0072-JSON.json)
Aynı bayt, aynı öge sayısı (`esit: true`), iki okuma yolu:

| havuz | MB | JS kaynak (`<script>`) | `JSON.parse` | kazanç | yığın |
|---|---|---|---|---|---|
| `PARCALAR` (Osmanlı) | 57,56 | 8 964 ms | **3 040 ms** | **%66** | 366 → **161 MB** |
| `DEVLET_PARCALAR` (yabancı) | 69,89 | 10 481 ms | **2 843 ms** | **%73** | 434 → **191 MB** |
| **toplam** | 127,4 | **19,4 sn** | **5,9 sn** | **−13,5 sn** | 800 → **352 MB** |

- **Maliyet:** veri değişmez, harita değişmez, `uret_petek.py` KOŞMAZ. Havuzlar `.json`
  olarak yazılır, `app.js` `fetch`+`JSON.parse` ile okur.
- `js/app.js:306`taki not bu göçü zaten öngörüyor ve kendi ölçümünü veriyor
  ("`<script>` 12,0–14,1 sn ↔ `fetch`+JSON 5,9–6,9 sn, ~%51"); **bağımsız ölçümüm o iddiayı
  doğruluyor, hatta daha yüksek çıkıyor (%66–73).**
- Ek kazanç: `fetch` DOMContentLoaded'ı bloklamaz; harita kabuğu veri beklemeden açılabilir.
- ⚠️ `js/app.js:311`deki `geometriKapisi()` iki hâli birden bilmeli (not orada duruyor).

### 🥈 (b) DEVRE GÖRE PARÇALI YÜKLEME · **en büyük bayt kazancı**
`py denetim/ARAC-YUKLEME-0072-DILIM.py` → [`YUKLEME-0072-DILIM.json`](YUKLEME-0072-DILIM.json)
Havuz = **127,38 MB** (Osmanlı 57,55 / 5 650 öge · yabancı 69,83 / 68 647 öge) = sitenin %81'i.

**Bir GÜN için gereken gövde** (paylaşılan öge bir kez sayıldı):

| gün | Osmanlı | yabancı | toplam | havuzun |
|---|---|---|---|---|
| 1300-01-01 | 0,00 | 3,22 | 3,22 MB | %2,53 |
| 1453-05-29 | 0,11 | 3,55 | 3,67 MB | %2,88 |
| 1683-07-14 | 1,73 | 3,88 | 5,61 MB | %4,40 |
| 1878-07-13 | 1,56 | 5,29 | **6,85 MB** | **%5,38** |
| 1922-11-01 | 1,52 | 4,44 | 5,96 MB | %4,68 |

**Tarayıcı 127 MB indirip tek gün için en çok 6,9 MB'ını kullanıyor.**

Yüzyıl dilimine bölünce (o dilimin HERHANGİ bir gününü gösterebilmek için):

| dilim | gereken gövde | havuzun |
|---|---|---|
| 1300–1399 | 6,30 MB | %4,9 |
| 1400–1499 | 10,13 MB | %8,0 |
| 1500–1599 | 23,68 MB | %18,6 |
| 1600–1699 | 27,87 MB | %21,9 |
| 1700–1799 | 31,06 MB | %24,4 |
| 1800–1899 | **50,34 MB** | %39,5 |
| 1900–1999 | 25,00 MB | %19,6 |

- 8 dilimin toplamı 174,38 MB; havuz 127,38 MB ⇒ **çakışma bedeli 1,37 kat** (sınırı aşan
  gövdeler iki dilimde de durur). Yayın boyutu %37 büyür, AÇILIŞ yükü %61–95 küçülür.
- Yarım yüzyıl / çeyrek yüzyıl dilimi tek-gün tabanına (≈7 MB) daha çok yaklaşır; dilim
  küçüldükçe çakışma bedeli büyür. **Bu eğriyi ölçmedim** — hüküm verilirse ölçerim.
- **Motorda dokunulacak yer:** `parcaCoz` çağrıları (`js/app.js:332`, `js/app.js:430`) ve
  `geometriKapisi()` (`js/app.js:311`). Zaman çubuğu dilim sınırını geçince yeni dilimin
  `fetch`i başlar — o anda ya bir önceki dilim gösterilmeye devam eder ya da kısa bir
  "yükleniyor" durur. **Komşu dilimi önden çekmek** (kaydırma yönünde) bu beklemeyi
  gizler. Dilim geçişinin kullanıcıya nasıl görüneceği bir TASARIM kararıdır — Emre'nin.

### 🥉 (a) KALICI SADELEŞTİRME (Douglas–Peucker) · kazanç eşit değil, KAYIPLI
`py denetim/ARAC-YUKLEME-0072-KALDIRAC.py` + `ARAC-YUKLEME-0072-DP2.py`
→ [`YUKLEME-0072-KALDIRAC.json`](YUKLEME-0072-KALDIRAC.json) · [`YUKLEME-0072-DP2.json`](YUKLEME-0072-DP2.json)

**Koordinat basamağı:** `donemler.js` %87 · `devletler_harita.js` %84,9 zaten 3 ondalıklı.
3'e kırpmak %0,1 kazandırır — **koordinatörün "kırpacak yağ YOK" hükmü DOĞRU**… ama yalnız
bu iki dosya için. `altlik.js`in koordinatlarının **%54,6'sı 6 ondalık, %19,1'i 14 ondalık**;
orada yağ VAR.

**DP ölçümü** (örnek öge üzerinde gerçekten koşturuldu, sapma ölçüldü):

| havuz | örnek | tolerans | kalan bayt | düğüm | en büyük sapma |
|---|---|---|---|---|---|
| Osmanlı `PARCALAR` | 400 öge / 4,13 MB | 0,5 km | %58,8 | 275 936 → 162 250 | 0,50 km |
| Osmanlı `PARCALAR` | " | **1 km** | **%40,1** | → 110 723 | 1,00 km |
| Osmanlı `PARCALAR` | " | 2 km | %24,4 | → 67 552 | 2,00 km |
| yabancı `DEVLET_PARCALAR` | 2000 öge / 1,98 MB | 0,5 km | %85,6 | 127 809 → 109 128 | 0,50 km |
| yabancı `DEVLET_PARCALAR` | " | **1 km** | **%76,2** | → 96 950 | 1,00 km |
| yabancı `DEVLET_PARCALAR` | " | 2 km | %67,3 | → 85 436 | 2,00 km |
| `altlik.js` (tam dosya) | 511 013 düğüm | 3 ondalık | %62,4 | değişmez | 0,00 km (yuvarlama ≤55 m) |
| `altlik.js` | " | 3 ondalık + 1 km | **%36,9** | → 302 058 | 1,00 km |

🔴 **Ters sonuç — öngörüm yanlıştı:** DP, EN BÜYÜK dosyada EN AZ işe yarıyor.
`DEVLET_PARCALAR` 68 647 öge için ~64 düğüm/öge taşıyor; bunlar zaten küçük petek
hücreleri, atacak düğümleri yok. Osmanlı havuzunda 5 650 ögede ~49 düğüm/öge ama gövdeler
büyük ve kıvrımlı — orada %60 gidiyor.

1 km toleransla kaba kazanç: Osmanlı −34,5 MB · yabancı −16,6 MB · altlık −8,3 MB ≈ **−59 MB
ham** (%37). **Bedeli:** `uret_petek.py` koşusu (~40 dk, yalnız Oturum 0) + sınırlar
1 km'ye kadar kayar + `denetle.py`nin konum/petek ölçütleri yeniden sınanmalı.

### ❌ (c) SIRALI `<script>` YERİNE PARALEL VERİ ÇEKME · **kazanç ≈ 0, ÖNERMİYORUM**
- İndirme **zaten paralel**: aynı anda **264** istek açık ölçüldü (HTTP/2, tek bağlantı).
  Tarayıcının ön-tarayıcısı 261 `<script src>`i tek seferde görüp hepsini kuyruğa atıyor.
- Üç büyük dosya dışındaki **257 dosyanın ayrıştırması hep birlikte 1,2 sn**.
- Sıcak koşu (0 bayt) bunu kesinleştiriyor: istek düzenini değiştirmek geri verecek
  saniyeye sahip değil.
- Tek gerçek kazanç: üç büyük dosyayı `<script>` olmaktan çıkarmak — o da zaten (d).

### 🎁 BEDAVA KAZANÇ (kayıpsız, koşusuz)
1. **Birebir tekrar eden havuz ögesi:** `DEVLET_PARCALAR`da 68 647 ögenin **11 858'i**
   karakterine kadar aynı → **8,74 MB** saf tekrar. Havuza tek kopya + indeks yeter.
2. **`altlik.js` ondalık kırpma:** 6→3 ondalık, sapma ≤55 m, **−4,9 MB** (%37,6).
3. Yukarıdaki ikisi = **−13,6 MB ham**, veri anlamı değişmeden.

---

## 5. SIRA ÖNERİSİ (hüküm Emre'nin)

| sıra | iş | kazanç (ölçülen) | bedel | veri kaybı | koşu |
|---|---|---|---|---|---|
| 1 | **(d) `fetch`+`JSON.parse`** | ayrıştırma −13,5 sn · yığın −448 MB | `app.js` + yazım biçimi | **yok** | **yok** |
| 2 | **(b) devre dilimi** | açılış gövdesi 127,4 → 6,3–50,3 MB | motor + tasarım kararı | **yok** | yalnız yazım |
| 3 | **bedava**: tekrar ayıklama + `altlik` ondalık | −13,6 MB ham | küçük | **yok** | yazım |
| 4 | **(a) DP 1 km** | −59 MB ham (%37) | `uret_petek.py` ~40 dk + denetim | **var (≤1 km)** | **var** |
| 5 | (c) paralel çekme | ≈ 0 | — | — | — |

1+2 birlikte uygulanırsa **açılışta ayrıştırılacak gövde 127,4 MB'tan tipik 25–31 MB'a**,
ayrıştırma **20,8 sn'den ~3 sn'ye**, yığın **1,07 GB'tan ~0,35 GB'a** iner — **ve bunların
hiçbiri tek bir sınırı bile oynatmaz.** (Bu üç sayı ölçülen birim maliyetlerden türetilmiş
KESTİRİMDİR, ölçüm değil; uygulanınca aynı aletlerle yeniden ölçülmelidir.)

---

## 6. ÖNGÖRÜ SINAVI (ölçümden önce yazılmıştı)

| # | öngörü | sonuç |
|---|---|---|
| Ö1 | gzip açık, tel üstü 35–45 MB | ✅ gzip açık · 44,75 MB |
| Ö2 | darboğaz indirme değil ayrıştırma; üç dosya ≥5 sn | ✅ 19,6 sn; sıcak koşu kesinleştirdi |
| Ö3 | indirme paralel, (c)'nin kazancı az | ✅ 264 eşzamanlı istek; (c) ≈ 0 |
| Ö4 | `max-age=600`; damga önbelleği uzatmaz | ✅ başlık birebir · ⚠️ 10 dk sonrası 304 turu **ölçülemedi** |
| Ö5 | FCP < 1,5 sn, harita > 8 sn | ⚠️ kısmen: sıcakta FCP 0,5 sn ✅, **soğukta 3,0 sn ❌**; harita 64,5 sn ✅ |
| Ö6 | 0,5 km toleransla ≥%50 küçülme | ❌ **YANLIŞ**: Osmanlı %41,2, yabancı yalnız %14,4 |
| Ö7 | tek gün toplamın <%5'i | ⚠️ 4 günde ✅, 1878'de **%5,38** — sınırı aştı |

**En öğretici yanlış Ö6:** "koordinat sayısı çok ⇒ DP çok kazandırır" sezgisi, ögelerin
BÜYÜKLÜĞÜNE bakmadan kurulmuştu. En büyük dosya (72,3 MB) 68 647 küçük petek hücresinden
oluşuyor; oradaki fazlalık geometride değil **ZAMANDA** (her dönem için ayrı kopya) —
çaresi de DP değil (b)'dir.

---

## 7. Aletler ve çıktılar
```
denetim/ARAC-YUKLEME-0072-YEREL.py        yerel envanter (adet, ham, gzip)
denetim/ARAC-YUKLEME-0072-SINAV.js        yayından açılış ölçümü (A soğuk / B sıcak / C kısık)
denetim/ARAC-YUKLEME-0072-AYRISTIRMA.js   dosya başına ayrıştırma+çalıştırma + yığın
denetim/ARAC-YUKLEME-0072-JSON.js         JS kaynak vs JSON.parse
denetim/ARAC-YUKLEME-0072-KALDIRAC.py     basamak dağılımı + Osmanlı havuzunda DP
denetim/ARAC-YUKLEME-0072-DP2.py          yabancı havuzunda DP + altlık + birebir tekrar
denetim/ARAC-YUKLEME-0072-DILIM.py        gün / yüzyıl dilimi gövde payı
```
Ölçüm ortamı: Windows 11, Chrome headless (`--use-gl=swiftshader`), 20 Eylül 2026.
**Mutlak saniyeler makineye ve hatta bağlıdır; raporun dayandığı oranlar
(sıcak = soğuk · %94 üç dosyada · JSON.parse %66–73) ortamdan bağımsızdır.**

Kod yazılmadı, koşu istenmedi, `data/` ve `js/`ye dokunulmadı.
