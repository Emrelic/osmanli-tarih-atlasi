# Çeviri durumu — 18 Kasım 2026 (KASA 17, origin/main `ac01efa5`)

Ölçüm: `py arac/ceviri.py denetim` (tavan: aşılmadı, açık borç 12888 = yalnız dosyası olan 7 dilin eksik+bayat toplamı) ve
`ceviri.denetim_olc(diller=[…11 dil])` (dosyası olmayan fa/zh/hi/ja için de aynı ölçüt). Hücre = **eksik (bayat)**.
Türkçe toplam: arayüz 1859 · devlet 2315 · olay 5139 madde.

| dil | arayüz | devlet | olay |
|---|---|---|---|
| en | 79 | 27 (1) | 442 (116) |
| de | 79 | 27 (1) | 442 (116) |
| es | 79 | 27 (1) | 442 (116) |
| ar | 79 | 27 (1) | 442 (116) |
| pt | 79 | 27 (1) | 1553 (95) |
| ru | 79 | 27 (1) | 3635 (63) |
| fr | 79 | 27 (1) | **4535 (26)** |
| fa | 1859 | 2315 | 5139 |
| zh | 1859 | 2315 | 5139 |
| hi | 1859 | 2315 | 5139 |
| ja | 1859 | 2315 | 5139 |

Notlar
- fa/zh/hi/ja için hiç `data/ceviri_<dil>_*.js` dosyası yok (dil seçicide görünmez); sayılar sıfırdan başlangıçtır.
- Bayat = Türkçe kaynağı çeviriden sonra değişmiş madde (yeniden çevrilir).
- Arayüz 79 / devlet 27 eksik, bütün dillerde aynı Türkçe yeni maddelerdir (tavan olarak sabit); olay 442 (116 bayat) en/de/es/ar için ortak kuyruk.
- Yetim sayıları (arayüz 77-222, devlet 14, olay 3-27) denetimde yalnız basılır, borç değildir.
