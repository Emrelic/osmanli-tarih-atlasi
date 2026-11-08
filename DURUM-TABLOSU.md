# DURUM TABLOSU — atlasın ölçülen sayıları

**Elle yazılmaz, üretilir:** `py arac/durum_tablosu.py --yaz` bu dosyadaki tabloyu yerinde
günceller (12 Ekim 2026'ya kadar CLAUDE.md §1.5'teydi). Güvenmeden önce koştur — tablo
son `--yaz`ın fotoğrafıdır.

## 1.5 Bugün nerede duruyoruz

| Katman | Ölçülen durum |
|---|---|
| Yerleşim (motorun okuduğu) | **5530** nokta, 124 girdi dosyası · kaynak_zayif işaretli kayıt: 0 |
| Kronoloji | **4732** madde · 1609 duygu etiketli · 3768 `yer_id` (boş yer_id: 4) · 38 `vefat_id` |
| Değişmez 1 — sahipsizlik | ✓ 5530 yerleşim, 311 sahipsiz (beklenen 311) |
| Değişmez 1b — iç boşluk | ✓ BEYANSIZ pencere arası boşluk: 0 (beklenen 0) · beyanlı 7/8 — tam tarama |
| Değişmez 2 — Osmanlı senkronu | ✓ 746 kırılma, 0 açık (beklenen 0) |
| Değişmez 2s — yabancı senkron | ✓ 3530 YABANCI kırılması · 198 AÇIK (tavan inf) · 870 KAPSAM DIŞI · 379 YIL-TEMSİLÎ BORÇ |
| Değişmez 2i — işgal senkronu | ✓ 333 İŞGAL kırılması, 0 açık (tavan 1) |
| Değişmez 2t — kırılmasız madde | ✓ kırılmasız madde: 232 (tavan inf) — bilinen borç |
| Konum denetimi | 0 nokta kara maskesinin dışında (beklenen 0) |
| Devletler dizini | **2251** künye · **2257** renk (`renkler.py`) |
| Dizinsiz harita kimliği | ✓ **0** kimlik / 0 pencere karşılıksız · *kapsam: `girdi.py`nin okuduğu 124 dosya, `s:`+`isg:` alanları — bağlanmamış partiler HARİÇ* |
| Kasıtlı boşluk kimliği | 🟡 **1** kimlik / 687 pencere · *`__BOSLUK__` — hiçbir künyenin kapsamadığı dilim; en yakın kimliğe İTİLMEDİ (`§3.5.1`). Kusur değil, BEYAN* |
| Renkli-künyesiz kimlik | ✓ **0** çiziliyor ama dizinsiz · 🟡 32 ölü renk (kullanılmıyor) · *kapsam: `renkler.py` BOYALAR − (künye `id` ∪ `harita:`)* |
| Renksiz künye — HARİTA DELİĞİ | ✓ **0** kimlik haritada (`s:`/`isg:`) kullanılıyor ama BOYANMIYOR · *kapsam: künye `id` ∪ veride kullanılan − BOYALAR(`harita:` varsa o) · `v:kid` ayrı kova · katman evreni: `index.html`in yüklediği 13 sınır · 283 kronoloji/olay · 2 savaş · 1 kişi dosyası (kimlik alanları `durum_tablosu.py`de) · `__BOSLUK__` muaf* |
| Padişah · kartvizit | 41 kayıt · 36 portre · **41** kartvizit dolu |
| Kişi kaynağı | TDV 217 · başka 66 · bulunamadı BEYANI 5 · kaynaksız 0 |
| Harita penceresi | `box(-180, -60, 180, 85)` |
| Yayın | **r14881** · `10e06d288` |
