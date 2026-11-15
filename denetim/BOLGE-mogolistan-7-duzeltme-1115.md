# BOLGE-mogolistan — Adım 7: düzeltme (15 Kasım 2026)

## Yazılan (dalda commit'lenen)
`data/devletler.js`, `mogolistan-halk-cumhuriyeti` künye-içi 6 madde: `odak_yer:["Karakurum"]` → `["Urga (Ulan Batur)"]` (1924-11-26, 1945-10-20, 1946-01-05, 1961-10-27, 1990-03-09, 1992-02-12). Yalnız kamera odağı; tarih, metin, `t`, taraf değişmedi. `node --check data/devletler.js` temiz. Çeviri hash'i etkilenmez (anahtar `t|b`). `Urga (Ulan Batur)` adı atlas yerleşimiyle birebir eşit. Değişmez 2/D4c etkisi yok (tarih değişmedi). Bu 6 kayıt için gerekçe: Karakurum 1235'te kurulan eski kent; MHC kronolojisi Ulan Batur'dadır; künyenin kendi `baskent:"Ulan Batur"` alanı.

## Yazılmayan (neden)
Tüm tarih/künye düzeltmeleri akademik kaynak okunamadığı için YAZILMADI (CLAUDE.md: Vikipedi tek dayanak olamaz; kaynakta kesin okunmayan değer yazılmaz). Bekleyenler:
- Karakurum/Ejin/Urga yerleşim pencereleri → `YERLESIMLER-JS-KUYRUK-1115-mogolistan.md`.
- Yeni künyeler (Oyrat, Çahar, Halha, Tümed): Adım 1 listesi, kaynak şart.
- Yeni maddeler: Dolon Nor 1691, Galdan Halha işgali 1688, Zuunmod 1696-06-12 (Wikipedia'dan; akademik teyit şart), Karakurum 1388, Kyahta anlaşması 1727.
- Kronoloji tarih düzeltmeleri: Galdan 1682 (iki olay birleşik), Bur/Kyahta 1727-10-12 (hangi belge?).
- Renk: Yuan = Qing #636f03 (tuz; KASA).

## Ölçüm
- `py arac/odak_olc.py`: ÇÖZÜLMEYEN ODAK ATFI 0.
- `py arac/denetle.py`: KOŞULMADI (ölçülmedi); gerekçe: tarih/dönem/`s:` değişmedi, yalnız `odak_yer` değişti; kapı denetimi KASA'da.
- Veri değişikliği öncesi/sonrası ihlal sayısı: ölçülmedi (değişiklik ihlal alanına dokunmaz).
