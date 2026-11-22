# BOYA İSTEKLERİ — toplu paket (arac/renkler.py BOYALAR = motor dondurma)

Kural (EMRELİC 21 KASIM, 22 Kasım): koşu 40 sürerken `arac/renkler.py` ve `BOYALAR`a dokunan commit `main`e girmez.
Yeni künye isteyen dallar (bu dosyada satırı olanlar) BEKLER; koşu 40 inişi bittikten sonra, koşu 41 BAŞLAMADAN,
tek commit'le `BOYALAR` + bekleyen dallar KASA'dan inecek. Renkler mevcut paletle ayırt edilebilir seçilmeli
(`py arac/renk_olc.py`). Boya anahtarsız künye taşıyan dal kapıdan geçmez (renksiz künye = harita deliği).

Satır biçimi: `devlet-id | ad | f | t | kaynak | ihtiyaç duyan dal | önerilen renk | durum`

| devlet-id | ad | f | t | kaynak | dal | renk | durum |
|---|---|---|---|---|---|---|---|
| ~~naksos-dukaligi~~ | — | — | — | UMIT düzeltmesi (22 Kasım): künye `naksa-dukaligi` (devletler.js:1188, f 1207-01-01, t 1579-01-01) ve BOYALAR anahtarı ZATEN VAR | — | — | GEREKMİYOR |
| bearn-vikontlugu | Béarn Vikontluğu | kaynakta f yok | — | — | — | — | YAZILMADI (f bulunamadı) |
| artois-kontlugu | Artois Kontluğu | 1237/1238 çelişkili (Longnon / EB1911) | 1659 | — | — | — | şimdilik ihtiyaç yok |

(UMIT'in kendi satırları: `BOYA-ISTEKLERI-UMIT21.md`. Şu an bekleyen gerçek boya isteği YOK.)
