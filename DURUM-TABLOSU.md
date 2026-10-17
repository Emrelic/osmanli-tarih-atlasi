# DURUM TABLOSU — atlasın ölçülen sayıları

**Elle yazılmaz, üretilir:** `py arac/durum_tablosu.py --yaz` bu dosyadaki tabloyu yerinde
günceller (12 Ekim 2026'ya kadar CLAUDE.md §1.5'teydi). Güvenmeden önce koştur — tablo
son `--yaz`ın fotoğrafıdır.

## 1.5 Bugün nerede duruyoruz

| Katman | Ölçülen durum |
|---|---|
| Yerleşim (motorun okuduğu) | **4536** nokta, 95 girdi dosyası · kaynak_zayif işaretli kayıt: 0 |
| Kronoloji | **1832** madde · 1455 duygu etiketli · 1692 `yer_id` (boş yer_id: 5) · 27 `vefat_id` |
| Değişmez 1 — sahipsizlik | ✓ 4536 yerleşim, 309 sahipsiz (beklenen 309) |
| Değişmez 1b — iç boşluk | ✓ BEYANSIZ pencere arası boşluk: 0 (beklenen 0) · beyanlı 7/7 — tam tarama |
| Değişmez 2 — Osmanlı senkronu | ✓ 639 kırılma, 0 açık (beklenen 0) |
| Değişmez 2s — yabancı senkron | ✓ 2177 YABANCI kırılması · 188 AÇIK (tavan 191) · 815 KAPSAM DIŞI · 257 YIL-TEMSİLÎ BORÇ |
| Değişmez 2i — işgal senkronu | ✓ 213 İŞGAL kırılması, 1 açık (tavan 1) |
| Değişmez 2t — kırılmasız madde | ✓ kırılmasız madde: 12 (tavan 13) — bilinen borç |
| Konum denetimi | 0 nokta kara maskesinin dışında (beklenen 0) |
| Devletler dizini | **1800** künye · **968** renk (`renkler.py`) |
| Dizinsiz harita kimliği | ✓ **0** kimlik / 0 pencere karşılıksız · *kapsam: `girdi.py`nin okuduğu 95 dosya, `s:`+`isg:` alanları — bağlanmamış partiler HARİÇ* |
| Kasıtlı boşluk kimliği | 🟡 **1** kimlik / 116 pencere · *`__BOSLUK__` — hiçbir künyenin kapsamadığı dilim; en yakın kimliğe İTİLMEDİ (`§3.5.1`). Kusur değil, BEYAN* |
| Renkli-künyesiz kimlik | ✓ **0** çiziliyor ama dizinsiz · 🟡 1 ölü renk (kullanılmıyor) · *kapsam: `renkler.py` BOYALAR − (künye `id` ∪ `harita:`)* |
| Renksiz künye — HARİTA DELİĞİ | ✓ **0** kimlik haritada (`s:`/`isg:`) kullanılıyor ama BOYANMIYOR · 🟡 **628** hiçbir yerde (gerçek sessiz borç) · 🟢 5 BEYANLI boya borcu (`boya_gerekli:true` — tam inşa koşusunu bekliyor, sessiz DEĞİL) · ⚪ 96 yalnız sınır/kronoloji/savaş/kişi katmanında (borç değil) · ⚪ 14 tâbi-çizili (yalnız `v:kid`, delik değil) · *kapsam: künye `id` ∪ veride kullanılan − BOYALAR(`harita:` varsa o) · `v:kid` ayrı kova · katman evreni: `index.html`in yüklediği 13 sınır · 186 kronoloji/olay · 2 savaş · 1 kişi dosyası (kimlik alanları `durum_tablosu.py`de) · `__BOSLUK__` muaf* |
| Padişah · kartvizit | 41 kayıt · 36 portre · **41** kartvizit dolu |
| Kişi kaynağı | TDV 257 · başka 2 · bulunamadı BEYANI 29 · kaynaksız 0 |
| Harita penceresi | `box(-180, -60, 180, 85)` |
| Yayın | **r12279** · `b81133f8b` |
