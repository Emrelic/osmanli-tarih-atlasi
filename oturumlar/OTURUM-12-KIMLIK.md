# Oturum 12 — KİMLİK DOSYASI: renkler.py/DSATUR girdisi

`data/yerlesimler_avrupa.js`'nin kullandığı, `arac/renkler.py`'de tanımsız
**15 kimlik** için DSATUR'un ihtiyaç duyduğu girdiler: yaşam aralığı, komşuluk
çizgesi, kesit kesit sahne sayımı ve granülerlik önerisi. **renkler.py'ye
dokunulmadı** (Oturum 16'nın dosyası); burası yalnız ölçülmüş girdidir.

## Ölçüm yöntemi

Birleşik veri (yerlesimler.js 917 + avrupa 237 = 1154 nokta; iran ve ortaasya
dosyaları da sahne sayımına dahil) üzerinde 7 zaman kesiti alındı. Komşuluk,
her kesitte **shapely `voronoi_diagram`** ile hesaplandı (motorun ilkesiyle
aynı: petek kenarı paylaşan iki farklı sahip = komşu). DSATUR bu çizge üzerinde
koşturuldu. ⚠️ Voronoi karaya kırpılMAdan alındığı için **deniz aşırı
komşuluklar dahildir** (ör. kastilya↔irlanda Biskay üzerinden) — bu, renk
ayrımı için *muhafazakâr* bir çizgedir: gerçek çizgeden fazla kenarı vardır,
eksik kenarı yoktur; DSATUR sonucu güvenli üst sınırdır.

## 1. Kesit kesit sahne ve DSATUR

| Kesit | Sahnedeki kimlik | Bunların yenisi | DSATUR (15 ayrı) | DSATUR (İtalyanlar birleşik) |
|---|---|---|---|---|
| 1300 | 74 | 11 | **5** | 5 |
| 1400 | 69 | 12 | **5** | 5 |
| 1500 | 51 | 8 | **5** | 5 |
| 1600 | 40 | 7 | **4** | **5** ← birleşince ARTIYOR |
| 1700 | 39 | 5 | **5** | 5 |
| 1800 | 35 | 3 | **5** | 5 |
| 1900 | 29 | 3 | **5** | 5 |

Mevcut ölçümle uyum: renkler.py başlığı "aynı anda sahnede en çok 66 devlet,
7 renk yetiyor" diyor; 15 kimlik eklenince sahne tepe noktası 74'e çıkıyor ama
**DSATUR hiçbir kesitte 5'i aşmıyor** — 10-12 renklik mevcut palet rahat.

## 2. Granülerlik kararı — ÖLÇÜLDÜ: birleştirme fayda ETMİYOR

Soru: siena/ferrara/mantua/parma/piza tek `italyan-sehir-devletleri` kimliğinde
toplanmalı mı? **Hayır, iki ölçülmüş sebeple:**

1. **DSATUR'u rahatlatmıyor, kötüleştiriyor.** Birleşik düğüm beş devletin
   komşularının bileşimini devralıyor (avusturya, ceneviz, fransa, ispanya,
   milanoduka, papalik, toskana, venedik…) ve yerel yoğunluğu artırıyor —
   1600 kesitinde renk sayısını 4'ten 5'e ÇIKARIYOR, hiçbir kesitte düşürmüyor.
2. **İç komşuluk var:** ferrara↔mantua↔parma Po boyunca birbirine sınırdaş,
   piza↔siena Toskana'da sınırdaş. Tek kimlik olurlarsa haritada **üç ayrı
   devlet tek gövde** gibi boyanır ve tek etiket alır — hayalet devletin ters
   yüzü: "hayalet birleşik devlet".

Renk tasarrufu istenirse doğru yol birleşik kimlik değil **renk paylaşımı**dır
(renkler.py kuralı: hiç komşu olmayan devletler aynı rengi paylaşabilir):
- `piza` (1281-1406) ↔ `parma` (1545-1860) hiçbir tarihte aynı sahnede değil → aynı renk olabilir.
- `siena` (…-1555) ↔ `belcika` (1830-…) / `luksemburg` (1890-…) hiç aynı sahnede değil.
- `bretanya` (…-1532) ↔ `belcika` (1830-…) hiç aynı sahnede değil.
- `kastilya`/`aragon` (…-1479) ↔ `isvicre`nin geç yüzyılları çakışır — bunlar paylaşamaz.

## 3. Kimlik tablosu (renkler.py + devletler.js girdisi)

Hiçbirinin `devletler.js` dizin kaydı YOK (ölçüldü) — Oturum 3'e de girdi.
"Komşular" satırı yukarıdaki Voronoi ölçümünün kesit birleşimidir; renk bu
kümeden uzak seçilmeli. TDV bu coğrafyayı kapsamıyor; yaşam aralıkları standart
akademik literatürden (Pitcher; Cambridge dizileri; ülke tarihleri).

### Birinci öncelik — geniş alan / uzun süre (9)

| id | tam ad | tur | yaşam (f/t) | veride | komşular (ölçüldü) |
|---|---|---|---|---|---|
| `iskocya` | İskoçya Krallığı | krallik | ~0843 – 1707-05-01 | 1281–1707 | ingiltere, irlanda, norvec, danimarka |
| `irlanda` | İrlanda — Gal beylikleri; 1922+ Serbest Devlet | krallik | –1603-03-30 · 1922-12-06– | 1281–1603, 1922–1923 | ingiltere, iskocya (+deniz: kastilya, portekiz, ispanya) |
| `bretanya` | Bretanya Dükalığı | dukalik | 0939 – 1532-08-13 | 1281–1532 | fransa, ingiltere (+deniz: kastilya, ispanya) |
| `burgonya` | Burgonya Dükalığı (Valois) | dukalik | 1032 – 1482-03-27 | 1281–1482 | fransa, almanya, ingiltere |
| `kastilya` | Kastilya Tacı | krallik | 1230-09-23 – 1479-01-20 | 1281–1479 | aragon, navarra, granada, portekiz, fransa, bretanya, fas (+deniz: ingiltere, irlanda, zeyyani) |
| `aragon` | Aragon Tacı | krallik | 1164 – 1479-01-20 | 1281–1479 | kastilya, navarra, fransa (+deniz: zeyyani) |
| `navarra` | Navarra Krallığı | krallik | 0824 – 1512-07-25 (Béarn kolu 1620-10-19) | 1281–1512; Pau 1479–1620 | kastilya, aragon, fransa, ingiltere |
| `isvicre` | İsviçre Konfederasyonu | cumhuriyet | 1291-08-01 – (1923+) | 1332–1923 | almanya, fransa, avusturya, sardinya, milanoduka, venedik, italya |
| `belcika` | Belçika Krallığı | krallik | 1830-10-04 – (1923+) | 1830–1923 | fransa, hollanda, almanya, luksemburg (+deniz: ingiltere) |

### İkinci öncelik — küçük alan (6); ayrı tutulmalı ama renk PAYLAŞABİLİRLER

| id | tam ad | tur | yaşam (f/t) | veride | komşular (ölçüldü) |
|---|---|---|---|---|---|
| `siena` | Siena Cumhuriyeti | cumhuriyet | ~1125 – 1555-04-17 | 1281–1555 | toskana, papalik, piza |
| `ferrara` | Este Devleti (Ferrara; 1598+ Modena) | dukalik | 1240 – 1859 | 1281–1860 | papalik, venedik, mantua, parma, milanoduka, toskana, avusturya, piza |
| `mantua` | Mantua Dukalığı (Gonzaga) | dukalik | 1328 – 1708 | 1281–1708 | venedik, milanoduka, ferrara, parma, papalik |
| `parma` | Parma Dukalığı (Farnese/Bourbon) | dukalik | 1545-08-16 – 1860-03-18 | 1545–1860 | milanoduka→ferrara, mantua, toskana, ceneviz, avusturya, ispanya, fransa, venedik |
| `piza` | Pisa Cumhuriyeti | cumhuriyet | ~1000 – 1406-10-09 | 1281–1406 | toskana, siena, ceneviz, milanoduka, ferrara |
| `luksemburg` | Lüksemburg Büyük Dükalığı | dukalik | 1890-11-23 – (1923+) | 1890–1923 | fransa, almanya, belcika |

Önerilen renk paylaşım çiftleri (hiç eş-zamanlı değiller, §2):
**piza+parma** · **siena+belcika** · **bretanya+luksemburg** → ikinci küme
6 kimlik için fiilen **3 yeni renk** yeter; toplam yeni renk ihtiyacı 9+3=12
değil, paylaşımlarla ~**9-10**.

`devletler.js` bolge değerleri: iskocya/irlanda/bretanya/burgonya/belcika/
luksemburg → `bati-avrupa` · kastilya/aragon/navarra → `iberya` ·
isvicre → `orta-avrupa` · siena/ferrara/mantua/parma/piza → `italya`.
