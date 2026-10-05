# HAVVA-HAZIRLIK-1005 — bu makine koşabilir mi? (yalnız ÖLÇÜM, koşu başlatılmadı)

Makine: `HAVVA` (hostname ölçüldü) · Tarih: 2026-10-05 · Python 3.13.5 (`py`)

## 🔴 HÜKÜM: **HAYIR — bu makine bugün koşamaz.**
Eksik (üçü de bloke):
1. **`rasterio` YOK** — `uret_petek.py:1330` ve `:1631` içinde `import rasterio`. Koşu DEM aşamasında `ModuleNotFoundError` ile çöker.
2. **DEM dosyaları YOK** — `veri-kaynak/yukseklik/` içinde yalnız `KAYNAK.md` (1.464 bayt) var. `dunya.tif` ve `atlas.tif` yok, hash ölçülemedi.
3. **Yerel `main` BAYAT** — `origin/main`in 226 commit gerisinde, 1 commit önünde, iki dosyası kirli (aşağıda ⑤).

## ① `denetle.py` — çıkış kodu
| koşu | ağaç | çıkış | sonuç |
|---|---|---|---|
| A | `C:\atlas` (yerel main `f4e6f0c2`, 226 geride) | **0** | `SONUÇ: temiz`. Değişmez 8a ✓ (1517/1517) · 8b ✓ (82/82) · konum ✓ 0 nokta. shapely VAR olduğu için D8 ve konum denetimi gerçekten KOŞTU. |
| B | `C:\atlas-havva` (taze `origin/main` `707b4b12` worktree) | **2** | `ÖLÇÜLEMEDİ`: Değişmez 8 → `FileNotFoundError: data\devletler_harita.js`. Sebep bağımlılık değil: dosya izlenmeyen koşu çıktısı ve taze worktree'de yok. Konum ✓. |

⚠️ A'nın temizliği BAYAT kod ve veri için geçerli. B taze kodu ölçtü ama D8'i ölçemedi. Yani güncel depo üstünde D8 bu makinede **ölçülmedi**.

## ② Python bağımlılıkları
| paket | durum |
|---|---|
| shapely | ✅ 2.1.2 |
| rasterio | ❌ **YOK** (`ModuleNotFoundError`) |
| numpy | ✅ 2.5.3 |
| scipy | ✅ 1.18.1 |

## ③ DEM — `veri-kaynak/yukseklik/`
| dosya | beklenen | ölçülen |
|---|---|---|
| dunya.tif | 626.075.454 bayt · `7bb4779f…ed13` | ❌ **YOK** |
| atlas.tif | 192.260.536 bayt · `4d660c82…1121` | ❌ **YOK** |

Dizinde yalnız `KAYNAK.md` var (2026-10-04 03:39). Transfer hiç başlamamış.

## ④ Disk
`C:` 465 GB · kullanılan 130 GB · **boş 336 GB**. Koşunun istediği ~1,1 GB için yeterli.

## ⑤ Git (`C:\atlas`)
```
f4e6f0c2 TAHTA M-5771 — HAVVA rc -> KOORDINATOR
45458f75 TAHTA M-5770 — HAVVA -> YILDIRIM BAYEZIT
bf1226b0 TAHTA M-5769 — DIZIN-KAPSAM-PILOT-1004 -> YILDIRIM BAYEZIT
## main...origin/main [ahead 1, behind 226]
 M data/devirler.js            (8 satır)
 M oturumlar/KAYNAK-DURUM.json (17 satır)
```
`origin/main` = `707b4b12`. Kirli dosyalara ve yerel commit'e DOKUNULMADI: kimin olduğu bilinmiyor, ben atmadım. Bu rapor ayrı bir worktree'de (`C:\atlas-havva`, dal `makine/havva`) yazıldı.

## Koşucu olmak için gerekenler
1. `py -m pip install rasterio` (Py 3.13 / Windows için wheel var mı, kurulunca ölçülecek)
2. `dunya.tif` + `atlas.tif` EMRELIC'ten kopyalanmalı, sonra sha256 tam eşleşmeli
3. `C:\atlas` main'i: kirli iki dosyanın sahibi karar vermeli, sonra `origin/main`e eşitlenmeli
4. Ardından taze ağaçta `denetle.py` yeniden koşturulup çıkış 0 görülmeli
