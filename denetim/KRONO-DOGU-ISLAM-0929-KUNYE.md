# KRONO-DOGU-ISLAM-0929 — KÜNYE notları (`data/devletler.js`e DOKUNULMADI)

`denetim/KUNYE-DUNYA-0929.json` açıldı; aşağıdakiler onun "eksik" listesiyle kesişim ve bu paketin ölçümü.

## Koordinatörün sorusu — "Mısır 1517-1805 için künye gerekebilir"
**Gerekmiyor, VAR:** `misir-eyaleti` "Osmanlı Mısır Eyaleti" 1517-04-13 → 1805-07-03 ve
`misir-kavalali` 1805-07-03 → 1914-12-18, ardından `misir-sultanligi`, `misir-kralligi`,
`fransiz-misir-seferi` (1798-1801), `ingiliz-sudani`. `kronoloji_misir.js`in bağlanması BAGLAMA'nın işi.

## Eksik künyeler (bu paketin maddelerinde ya da haritasında kullanılıyor)
| Önerilen id | Ad | Ömür (TDV) | Nerede lazım | Kaynak |
|---|---|---|---|---|
| `tahiri` | Yemen Tâhirîleri | 1454 → 1517 | kronoloji_cok_memluk.js 1516-06-20 (`devletler` içinde, önerilen id ile yazıldı); harita Zebîd'i `s:{d:"yemen"}` ile boyuyor — `yemen` künyesi YOK (yalnız `yemen-zeydi`) | TDV `zebid` ("Tâhirîler döneminde de (1454-1517)") |
| `cobanli` | Çobanlılar (Çobanîler, İlhanlı ardılı) | 1335 sonrası → Melik Eşref'in sonu (yıl ÖLÇÜLMEDİ; iran_ardillari 1355 diyor) | kronoloji_iran_ardillari.js Çobanlı maddeleri (Hasan-ı Kûçek, Melik Eşref); ⚠️ mevcut `cobanogullari` Anadolu'daki AYRI beyliktir (1211-1309) | TDV `celayirliler`, `ilhanlilar` |
| `karabag-hanligi` | Karabağ Hanlığı | 1748 → 1822 | Şuşa'nın gerçek sahibi (harita `zend` diyor) | TDV `karabag` |
| `erdelan-emirligi` | Erdelan Emirliği | — | KUNYE-DUNYA'da zaten öneri; Senendec (Sine) 1636 kuruluşu | TDV `erdelan` 302 — bulunamadı |

## Künye ömrü şüpheleri (§3.5: önce SINIFLANDIR)
| Künye | Mevcut | TDV | Sınıf |
|---|---|---|---|
| `karakoyunlu` | t **1469-01-01** | Hasan Ali'nin öldürülüşü **Şevval 873 / Nisan 1469**; Bağdat kolunun sonu **14 Cemâziyelâhir 874 / 19 Aralık 1469** (`karakoyunlular`) | ② aynı polity sürüyor → künye GENİŞLER (1469-04 ya da 1469-12-19); kronoloji_karakoyunlu.js'in 1469-04-01 ve 1469-12-19 maddeleri şu an pencere DIŞINDA |
| `cebri` | t **1524-01-01** | Âl-i Ecved (Cebrîler) Lahsa'yı **1547**'de Osmanlı'ya kaptırdı (`lahsa`) | ② → 1547; YERLESIM-ONERI #1 ile birlikte |
| `ilhanli` | t **1353-01-01** | Toğa Timur'un öldürülüşü 13 Aralık 1353 (iran_ardillari); "fiilen dağılma" 30 Kasım 1335 | ölçülemedi — 1353-01-01 künye günü yerleşim kırılmalarına kopyalanmış (ONERI #10) |
| `safevi` | f **1501-07-01** | `safeviler`, `akkoyunlular` yalnız **907/1501** | ay dayanaksız; üç dosya üç ay diyor (Nisan / Temmuz). Künye günü kaynak değildir (§4) — f 1501-01-01 + beyan ya da kaynaklı gün |
| `zend` | f **1751-01-01** | "1751 yılının ilk aylarında" (`zendler`) | ✓ yıl tutuyor; safevi.js 1750 maddesi künyeden ÖNCE |
| `mazenderan-marasi` | t **1596-01-01** | `taberistan`: 1504'te Safevîlere geçti | çelişki (ONERI #13) |
| `iran` | f **1925-12-12** | — | `KRONOLOJI_IRAN` (1281-1923, 107 madde) bu künyeye bağlanıyor → maddelerin TAMAMI pencere dışında; harita da Ağraham burnu'nu 1281-1501 `iran` ile boyuyor |
