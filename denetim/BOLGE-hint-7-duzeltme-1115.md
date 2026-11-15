# BOLGE hint — Adım 7: Düzeltme (15 Kasım 2026)

## 0. İKİNCİ TUR (aşağıdaki §1–§4 birinci turdur; ikinci tur bunları ezer)
`data/devletler.js` içinde 14 satır değişti (yalnız künye-içi `kronoloji:`; `node --check` ✓): **1 tarih düzeltmesi** (bengal-nevabligi#1 Sirâceddevle 1756-04-01 → 1756-04-10, Datta + «How the British Occupied Bengal», `ic_not_t`), **11 kaynaksız maddeye `kaynak:`** (TDV Hindistan/Tîpû Sultan/Haydar Ali/Âdilşâhîler/Gûlkünde), **Buxar'a çift teyit `ic_not`** (Oldham 1926 + Srivastava 1939: 23 Ekim 1764, gün değişmedi), **Goa/Diu 1961-12-19 kaynağı** zayıf beyandan TDV «Diû»ya yükseltildi. S3/S4 (Bîcâpûr/Golkonda) TDV'ye göre atlas doğru; S5 (Şivâcî) Jülyen → 06-16, KASA kuyruğunda (L2-1111) uygulanmadı. Çeviri/olay_taraf anahtarı taşınması gerekmedi (devletler.js künye-içi maddeleri o anahtarlara girmez; tarihi değişen tek madde künye-içi). Madde metni `b` değişmedi → çeviri hash'i etkilenmedi. `devletler.js` değişince `paketle.py yenile` + `surum_damgala` KASA'da (üretilmiş `paket_*.js` yasak). Ayrıntı: `BOLGE-hint-2-kronoloji-1115.md` «İKİNCİ TUR».

## 1. Birinci tur: yazılan veri düzeltmesi **0**
Birinci turda hiçbir `data/*.js` dosyası değiştirilmedi. Gerekçe (kural gereği, dürüstçe):
- Düzeltme adaylarının hepsi ya (i) **gün/ay teyidi** ister (Adım 2 S1–S9; Adım 3 §3 künye↔pencere farkları) — web aramasının döndüğü ders-notu/Vikipedi düzeyi kaynaklar CLAUDE.md'ye göre kaynak değildir, ≥2 bağımsız akademik kaynak okunamadı; ya (ii) `yerlesimler*.js` içine düşer (yasak → `denetim/YERLESIMLER-JS-KUYRUK-1115-hint.md`); ya da (iii) `devletler.js` künye f/t'sini değiştirir ve hangi uçun (künye mi pencere mi) doğru olduğu kaynaksız belirlenemez.
- "Kaynağın adlandırmadığı yeri beyanlı yaklaşıklık diye ekleme" kuralı: eksik devlet/yerleşim satırları (Adım 1 §3, kuyruk §C) kaynaksız yazılmadı.
- Veri değişmediğinden `renkler.py`/üretilmiş dosya/`index.html` damgası da değişmedi; çeviri hash'i etkilenmedi.

## 2. Önce / sonra ölçüm (veri aynı → önce = sonra)
`py arac/odak_olc.py`: ÇÖZÜLMEYEN ODAK ATFI **0**. `py arac/denetle.py` (origin/main 8fb10bdf1 tabanı, bu worktree): Değişmez 1 ✓, 1b ✓ 0, 2 ✓ 760 kırılma/0 açık, 2s 154 açık (tavan inf), **2sk ⚠ tavan aşıldı 5927>5892 (tabandan gelen, bu iş değil)**, 2i ✓, 4/4c/4d/4s ✓ 0, 5 ✓ 0. Değişmez 8 ölçülemedi. Ayrıntı ve çıkış kodu bu belgenin altındaki "denetle sonu" satırında.

**denetle sonu:** süreç Değişmez 7 satırından sonra çıktı üretmeyi bıraktı (~8 dk sessizlik), ben durdurdum; **çıkış kodu OKUNMADI → denetle "ölçülmedi" (tam koşu tamamlanmadı), yukarıdaki satırlar kısmî çıktıdır.** Veri değişmediği için `push_kapisi` bu dalı zaten ayrı worktree'de ölçer.

## 3. Sonraya devreden öncelikli iş listesi (kimin, ne)
| # | İş | Neden | Kim |
|---|---|---|---|
| 1 | S1–S9 gün teyidi (Buxar 22/23 Ekim, Sirâceddevle 1756-04, Bîcâpûr/Golkonda, Şivâcî tacı Jülyen/Gregoryen, Sugauli, Kot…) | atlas günü şüpheli | web erişimli oturum (EMRELİC): TDV + Eaton/Sarkar/Gordon/New Cambridge History of India |
| 2 | 177 kaynaksız künye-içi `kronoloji:` maddesine `kaynak:` | kural | EMRELİC |
| 3 | Künye↔pencere gün farkları (Adım 3 §3, 51 satır; resmî D4c=0 olduğundan düşük aciliyet) | iç tutarlılık | KASA kararı: künye genişlet ↔ pencere kısalt |
| 4 | Çandernagor/Pondişeri `fransa`→`fransa-cumhuriyet` bölünmesi 1792-09-22 | künye ömrü aşımı | kuyruk §A (kural gereği kaynaksız uygulanabilir) |
| 5 | `bhutan`/`butan` çift künye; `fransiz-hindistani`/`danimarka-hindistani` yerleşimsiz | Adım 1 K1–K2 | KASA |
| 6 | Eksik alt devletler (Delhi hanedanları, Racput prenslikleri, Himalaya ve KB dağ devletleri, Nepal Malla, Sih misller) + 1764–1801 Pencap, 1538–1540 Bengal, 1576–1592 Orissa boşlukları | Adım 1 §3, Adım 3 §4 | araştırma + yazma makinesi |
| 7 | Bengal Nevablığı rengi (Babür'e d=32,6) | Adım 5 | KASA renk_olc |

## 4. Düzeltme sonu notu
Bu bölge denetimi **ölçüm ve işaretleme** düzeyinde tamamlandı; **doğrulama/düzeltme düzeyinde tamamlanmadı** (ölçüt: ≥2 akademik kaynak okunamadı). Beyan edilmiş borç sessiz borçtan iyidir — ama beyan ödeme değildir.
