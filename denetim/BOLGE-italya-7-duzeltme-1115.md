# BOLGE italya — Adım 7: düzeltme (15 Kasım 2026)

Dal: `umit-1115-bolge-italya` (origin). Yalnız `data/devletler.js` (künye-içi kronoloji) değişti; `yerlesimler*.js`, üretilmiş dosyalar, `index.html` damgası, tuz dosyaları, tavan DOKUNULMADI.

## Yazılan düzeltmeler (3 künye, 4 madde-değişikliği)
| # | Künye | Değişiklik | Kaynak | Çeviri etkisi |
|---|---|---|---|---|
| 1 | `ferrara` 1598 maddesi | t 1598-01-01 → **1598-01-29**; `kaynak`+`ic_not` eklendi | Chiappini, «1598: diario di una svolta», Ferrara. Voci di una città, Fondazione Estense 1997 (künye `modena` ic_not_f alıntısı: 28 Ocak çıkış, «ertesi gün» Aldobrandini; bu oturumda sayfa yeniden okunmadı) | `b` DEĞİŞMEDİ; tarih değişti. Çeviri anahtarı `<DIZI>:<t>:<idx>` devletler.js kronolojisini kapsıyorsa `1598-01-01`→`1598-01-29` taşınmalı — **KASA doğrulasın** |
| 2 | `urbino-dukaligi` madde 0 | t 1443-01-01 → **1443-04-25**; `kaynak`a Treccani eklendi, `ic_not` | Treccani EI «Urbino»: «ricevuta a Siena dalle mani di Eugenio IV il 25 aprile 1443» (OKUNDU; künye f ile aynı) | aynı çekince |
| 3 | `modena` (kronoloji boştu) | 2 madde eklendi: **1598-01-29** (kuruluş), **1859-06-11** (V. Francesco'nun ayrılışı) | Chiappini 1997; Archivio di Stato di Modena «Austro Estense Vienna» (11 Haziran 1859, okundu). İlhak günü 1860-03-18 maddede yalnız yerleşim penceresine atıf | yeni maddeler; çeviri üretilmemiş |

Sınır: `bolge:"italya"` künye-içi 119 künyenin 607 maddesinden **2'sine gün yazıldı**, 2 madde eklendi. 216 yıl-hassasiyetli ortaçağ maddesine gün YAZILMADI (kaynak okunamadı = uydurma yok).

## Yazılmayanlar (neden)
- Yerleşim penceresi / yeni yerleşim: `denetim/YERLESIMLER-JS-KUYRUK-1115-italya.md` (14 kalem).
- Yeni künye (Malatesta, Montefeltro, Montalcino cumhuriyeti vb.): gün kaynağı okunmadı (Malatesta için Treccani gün vermedi).
- İkiz künye birleştirme (della-scala/verona-scaliger, carrara/padova-carrara, visconti/visconti-signoria, sardinya-aragon): hangi f/t kazanır hakem kararı; KASA/Emre.
- `saluzzo-markizligi` 1549/1548 çelişkisi: DBI 1504'te bitiyor, kaynak okunmadı.
- `ferrara.t` (1859-01-01): "Este/Ferrara-Modena" tek polity mi iki künye mi kararı ister; modena t 1859-06-11 ile çelişki beyanlı.

## Ölçümler
- `py arac/odak_olc.py`: ÇÖZÜLMEYEN ODAK ATFI **0** (düzeltmelerden sonra).
- `node --check data/devletler.js`: temiz.
- `py arac/denetle.py` (düzeltmelerden sonra; ayrıntı adım 3): D1 ✓ (306 sahipsiz = beklenen 306), 1b ✓, **D2 760 kırılma 0 açık**, 2i ✓, D4/4c/4d ✓ (0/0/0), D5 ✓, dönem sağlığı ✓. **2sk tavan aşıldı (5927>5892)** — bu oturumun D2 evrenine satır yazılmadı; kaynak bu oturum değil (baseline ayrıca ölçülmedi). Tavan AÇILMADI. D8 ana checkout'ta ölçülemez.
- "Önce" ölçümü ayrıca koşturulmadı: değişiklik yalnız künye-içi kronolojide olup denetle'nin okuduğu (`olaylar*.js`, `kronoloji_sinir*.js`, yerleşimler) kümelere girmediği için önce=sonra beklenir (ölçülmedi, beyan).
