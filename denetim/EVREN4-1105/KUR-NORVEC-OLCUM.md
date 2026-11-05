# İki sistemik ölçüm — KASA SALI, gece-115 (EMRELİC isteği)

Ölçüm KASA'da, kasa-1104-kronoloji ağacında yapıldı (origin/main ile eş). Okuma `girdi.oku_dosya` ayrıştırıcısıyla, bütün GIRDI_DOSYALARI (124 dosya). Veriye dokunulmadı.

## 1) KUR = KÜNYE f taraması (`KUR-KUNYE-TARAMA.tsv`)

**Ölçüt:**
- Kaydın en erken `s:`/`d:` dilimi, o dilimin künyesinin f gününde başlıyor.
- Künye f > 1800-01-01.
- Öncesinde hiçbir dilim yok (`__BOSLUK__` dahil).

**Sayılar:**
- **198 kayıt, 89 künye.**
- `kur` durumu: 163'ünde kur = künye f, 29'unda kur yok, 6'sında kur farklı.
- 163'ünde atlas "yerleşim künyeyle doğdu" diyor. Schwerin (1160) ve Frankfurt (Oder) (1253) gibi eski yerleşimler için bu yanlıştır; her biri F-GERİ adayıdır. Kur yoksa ilk dilim öncesi D1 deliğidir.
- Dosyaya göre: `yerlesimler_halef_1946.js` 112 · `yerlesimler_afrika2.js` 31 · `yerlesimler_h2_afrika.js` 23 · nokta3 8 · nokta2 6 · a78_okyanusya 6 · öteki 12.
- En çok görülen künyeler: ingiliz-sudani 24, kongo-serbest-devleti 6, adamava 6, ve 4'er kayıtla kosta-rika, el-salvador, fransiz-togo, biafra, ryukyu-abd-idaresi, DDR, transdinyester, daglik-karabag, ickerya, vasulu.
- İlk günün on yıllara dağılımı: 1800'ler 83 · 1900'ler 5 · 1910'lar 10 · 1920'ler 13 · 1930'lar 3 · 1940'lar 22 · 1950'ler 5 · 1960'lar 12 · 1970'ler 14 · 1980'ler 3 · 1990'lar 28.

**🔴 Son uçta delik: 65 kayıt.** Zincir 2000-12-31'den önce bitiyor, `bit:` yok, ardıl yok.
- Örnekler:
  - Schwerin, Cottbus, Chemnitz ve Frankfurt (Oder): DDR → 1990-10-03.
  - Batı Berlin ×2: 1990-10-03.
  - Bantustanlar (Butterworth, Ga-Rankuwa, Thohoyandou, Bisho): 1994-04-27.
  - Togo ve Kamerun manda şehirleri: 1957, 1960, 1961.
  - Biafra ×4, Pasundan ×3, Krajina ×3, UNTAES ×3, Herzeg-Bosna ×3, Bosna Sırp Cumhuriyeti ×2, Kosova gölge cumhuriyeti ×2, İçkerya.
  - Svaziland ×2: 1968. Rodezya-Nyasaland ×2: 1963. Juba 1983. Nador 1956-04-07. Brazzaville 1958.
- ⚠️ Değişmez 1 (`denetle.py:1268`) yalnız 1285–1920 yıllarını örnekliyor. Bu yüzden 1920 sonrası uç deliklerinin hiçbiri BEKLENEN_SAHIPSIZ'a girmiyor; delikler sessizdir.
  - Bunların çoğu halef_1946 kampanyasının "noktasız devlete nokta" kayıtları. Nokta yalnız o devletin ömrü boyunca sahipli; önce ve sonra yerleşim var ama sahibi yok.
  - Bir kısmı ARDIL 71 listesiyle çakışıyor (DDR halefleri).
- **Öneri:**
  1. 65 uç deliğine kaynaklı ardıl dilim yazılsın (DDR/Berlin → `almanya` 1990-10-03, bantustanlar → Güney Afrika 1994-04-27, mandalar → bağımsız devletler…). Bunlar çoğu zaman tek kaynaklı ülke devirleridir, ülke gruplamasıyla hızlı yazılır.
  2. 198 kaydın ilk ucu için kaynaklı kuruluş + öncül zincir (F-GERİ).
  3. Değişmez 1 örneklemi 1920 sonrasına uzatılmalı. Bu bir araç değişikliğidir, Emre'nin kararıdır; yeni tavan ölçülerek yazılır.

## 2) Norveç 1814 (`norvec1814.py`)

**Künyeler (devletler.js):**
- `norvec-kralligi` 872 → 1537-01-01.
- `danimarka` 950 → (Danimarka-Norveç 1814'e kadar).
- `norvec-1814` (Eidsvoll) 1814-05-17 → 1814-11-04.
- `norvec-isvec-birligi` 1814-11-04 → 1905-06-07.
- `norvec` 1905-06-07 →.
- `isvec` 1523-06-06 →.

**Zincir deseni (s:, 1800-1906): 20 kayıt.**
- 19 kayıt (Oslo, Bergen, Stavanger, Tønsberg, Trondheim, Ålesund…): `danimarka` → **1814-01-14 `isvec`** → 1814-05-17 `norvec-1814` → 1814-11-04 `norvec-isvec-birligi` → 1905-06-07 `norvec`.
- 1 kayıt: Kristiansand, aynı desen; danimarka f 1641.
- İzlanda'nın 4 kaydı `izlanda-norvec-danimarka` 1262 → 1918 ile ayrı; 1814'ten etkilenmiyor.
- **Sonuç: 20 kayıt 1814-01-14'te `isvec`'e geçiyor**, 1814-05-17'ye kadar (123 gün).

**Model önerisi (uygulama yok):**
- Kiel 1814-01-14 bir imzadır; İsveç Norveç'i o gün idare etmiyordu. TEK ÖLÇÜ'ye göre `isvec` dilimi düşer ve 1814-01-14 `ic_not`a yazılır.
- Christian Frederik Şubat 1814'te naip olarak fiilî idareyi aldı. Önceki LAB SALI notu (KARARLAR gece-25): `norvec-1814` f **1814-02-19** (SNL).
- Önerilen zincir:
  - `danimarka` → **1814-02-19** `norvec-1814` (naiplik; Eidsvoll anayasası 05-17 ve kral seçimi künye içi `ic_not`).
  - **1814-08-14** Moss sözleşmesi. İsveç ordusunun Ağustos seferinde işgal ettiği doğu yerlerine (Fredrikstad, Hvaler vb.) `isg isvec` 1814-07/08 → 11-04 katmanı; kaynakla.
  - **1814-11-04** `norvec-isvec-birligi` (Storting birliği kabul etti).
  - 1905-06-07 `norvec`.
- Değişmez 2 için 1814-02-19 ve Moss maddeleri `kronoloji_sinir`de olmalı. Bugün yalnız Kiel 01-14 maddesi var (gece-25 notu).
- **Emre'nin kararı:** şahsî birlik (1814-11-04 → 1905-06-07) için iki seçenek var.
  - (a) Bugünkü gibi ayrı `norvec-isvec-birligi` künyesi `s:`, üstüne `v: isvec` yok. Norveç ayrı krallık, ortak kral; dış işleri Stockholm'deydi.
  - (b) `s: norvec-isvec-birligi` + `v: isvec`.
  - Öneri (a): Norveç 1814-1905 kendi anayasası, meclisi ve ordusuyla ayrı devletti. Ortak kral ve dış politika bir vasallık ilişkisi değildir.
