# KRONO-ITALYA-0929 — KÜNYE NOTLARI (`data/devletler.js`e DOKUNULMADI)

## Kullanılan künyeler (id · pencere) — hepsi `devletler.js`ten okundu
`cenova` 1005→1797-06-14 (**Ceneviz'in id'si `cenova`**, "ceneviz" DEĞİL) · `venedik` 697→1797-05-12 · `papalik` 756→1870-09-20 · `napoli` 1282-03-30→1861-02-13 ·
`milano-dukaligi` 1395-05-11→1859-11-10 (şüpheli) · `floransa` 1115→1532-05-01 · `toskana` 1532-05-01→1860-03-22 · `siena` 1125→1555-04-17 ·
`ferrara` 1240→1859-01-01 · `savoya` 1032→1720-08-02 · `sardinya-piyemonte` 1720-08-02→1861-03-17 · `italya` 1861-03-17→1923-10-29 · `italya-napolyon` 1797-07-09→1814-04-16.
192 madde pencereyle sınandı: **0 dışarıda** (üç haneli yılda `padStart` kullanıldı, CLAUDE.md §3.5).

## Açılmasını önerdiklerim (M-5416 kural 3 — madde `devlet:` ile bu id'yi yazdım DEĞİL; mevcut künyeye bağladım, künye açılınca taşınır)
| Önerilen id | Neden | Şu an bağlı olduğu künye | Taşınacak madde |
|---|---|---|---|
| `lombardiya-venedik` (1815→1866) | KUNYE-DUNYA `eksik` (öncelik 4) | `milano-dukaligi` | `italya.js` #99 (1815-04-07) |
| `ligurya-cumhuriyeti` (1797→1805) | aynı liste | `cenova` | `italya.js` #77 (1797-06-14 "Ligurya'nın kuruluşu") |
| `sicilya-kralligi` (1282→1816) | Sicilya ayrı taçtı; `napoli` 1282'den başlıyor | `napoli` | `italya.js` #30-#32 (1282 Sicilya Akşamı · III. Peter · Caltabellotta) |
| `sakiz-maonasi` (1346→1566) | hüküm koordinatörde; `cenova` altında kalırsa sorun yok | `cenova` | `cenova` maddeleri (Sakız) |
| **Papalık — devlet/kurum ayrımı** | `papalik` künyesi hem Roma'nın dünyevî devleti hem makam; madde `tur:` ile ayrıldı (`isgal/son/kurulus` ↔ `din/kriz`) | `papalik` | ayrı künye gerekmiyor |

## Dikkat çeken künye sorunları
1. `milano-dukaligi.t = 1859-11-10` — KUNYE-DUNYA zaten `supheli_omur`; maddeler 1815-59 "Lombardiya-Venedik" olayı. İtalya.js #96-#102 buna bağlandı; künye düzelince #97-#98 (Napolyon) ve #99+ (Avusturya) taşınmalı.
2. `venedik.t = 1797-05-12` iken 1797-10-17 Campoformio maddesi künye penceresi dışında (DUZELTME D8).
3. `naksa-dukaligi` 1207→1579 (TDV `naksa`: 1579'da Nasi ölümü) ile atlasın 1566 "ilhak" günü çelişir (DUZELTME D9). Kiklad yerleşimleri `venedik` sahipli — künye `naksa-dukaligi` olmalı.
4. Ceneviz'in Ege kolonileri (Foça, Sakız, Midilli-Gattilusio, Enez) için ayrı künyeler yok/ karışık: `midilli-gattilusio` (KUNYE-DUNYA öncelik 2) açılırsa 1462 Midilli maddesi taşınır.
