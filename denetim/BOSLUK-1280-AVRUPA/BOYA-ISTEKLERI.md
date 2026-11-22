# BOYA İSTEKLERİ — toplu paket (arac/renkler.py BOYALAR = motor dondurma)

Kural (EMRELİC 21 KASIM, 22 Kasım): koşu 40 sürerken `arac/renkler.py` ve `BOYALAR`a dokunan commit `main`e girmez.
Yeni künye isteyen dallar (bu dosyada satırı olanlar) BEKLER; koşu 40 inişi bittikten sonra, koşu 41 BAŞLAMADAN,
tek commit'le `BOYALAR` + bekleyen dallar KASA'dan inecek. Renkler mevcut paletle ayırt edilebilir seçilmeli
(`py arac/renk_olc.py`). Boya anahtarsız künye taşıyan dal kapıdan geçmez (renksiz künye = harita deliği).

Satır biçimi: `devlet-id | ad | f | t | kaynak | ihtiyaç duyan dal | önerilen renk | durum`

| devlet-id | ad | f | t | kaynak | dal | renk | durum |
|---|---|---|---|---|---|---|---|
| naksos-dukaligi | Naksos Dükalığı | 1207 (yıl) | t okunmadı | Miller 1908 s.43-44 | umit-bosluk-boya-1122 | (UMIT önerir) | bekliyor |
| bearn-vikontlugu | Béarn Vikontluğu | (UMIT) | (UMIT) | (UMIT) | umit-bosluk-boya-1122 | (UMIT önerir) | bekliyor |
| artois-kontlugu | Artois Kontluğu | (UMIT) | (UMIT) | (UMIT) | umit-bosluk-boya-1122 | (UMIT önerir) | bekliyor |
