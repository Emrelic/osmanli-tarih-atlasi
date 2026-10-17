# GLM-A · BETİK ENVANTERİ — index.html <script src>

*Ölçüm: `glm/glma_betik.py` · anlık görüntü: 2026-09-29 12:04:29 · ham veri: `glm/GLMA-BETIK-0929.json`.*
*Brifing (`oturumlar/GLM-ACILIS-0929.md` §GLM-A) 279 etiket bekliyordu; ölçülen **59** — koordinatör birleştirmeyi sürdürdüğü için durum ilerlemiş.*

## Özet

| ölçüm | değer |
|---|---|
| `<script src>` etiketi | **59** (CDN 2 · yerel 57 · `defer`/`async` 0) |
| diskte YOK olan | **0** |
| yerel toplam boyut | **44.1 MB** (44063722 bayt) |
| tanımlı farklı global ad | **1015** (window.= · üst düzey function · üst düzey var) |
| çakışan ad (≥2 dosya) | **12** |
| üst düzey (yüklenme anı) bağımlılık kenarı | **16** |
| yüklenme anı TANIMSIZ okuma (hata adayı) | **0** |
| dinamik `window[...]` erişimi | 27 (adı çıkarılamaz) |

## ④ Sıra bağımlılığı — KRİTİK (birleştirme sırasının girdisi)

Yüklenme anında çalışan üst düzey kodun okuduğu global, tanımlandığı dosyadan SONRA gelmek zorunda:

| okuyan | global | tanımlayan (daha önce yüklenir) |
|---|---|---|
| 52 js/app.js | `ANTLASMALAR` | 13 data/paket_12.js |
| 52 js/app.js | `BOLGELER` | 34 data/bolgeler.js |
| 52 js/app.js | `DEVIRLER` | 6 data/paket_05.js |
| 52 js/app.js | `DEVLET_HARITA` | 35 data/devlet_harita_ust.js |
| 52 js/app.js | `DEVLET_PARCA_HALKA` | 35 data/devlet_harita_ust.js |
| 52 js/app.js | `DONEMLER` | 38 data/donemler_ust.js |
| 52 js/app.js | `ISGALLER` | 6 data/paket_05.js |
| 52 js/app.js | `PARCA_HALKA` | 38 data/donemler_ust.js |
| 52 js/app.js | `PETEKLER` | 37 data/donemler_on.js |
| 52 js/app.js | `SEHIRLER` | 41 data/sehirler.js |
| 52 js/app.js | `SERBEST` | 37 data/donemler_on.js |
| 52 js/app.js | `SERBEST_U` | 37 data/donemler_on.js |
| 52 js/app.js | `VERI_SINIRI` | 38 data/donemler_ust.js |
| 52 js/app.js | `YERLESIMLER` | 14 data/paket_13.js |
| 56 js/d_katman.js | `harita` | 52 js/app.js |
| 57 js/antlasma_harita.js | `harita` | 52 js/app.js |

**Okunuşu:** veri dosyaları → `js/app.js` (sıra 52, 14 global okur) → `js/d_katman.js` + `js/antlasma_harita.js` (app.js'in `harita` globalini bekler; ayrıca `window.guncelle`/`window.obGoster`'i SARMALAR — d_katman.js:1280, antlasma_harita.js:255). `paket_*` dosyaları ARALARINDA sıra bağımlılığı taşımaz (küme içi kenar 0).

## ③ Çakışan global adları (12) — üç sınıf

- `BOLGELER` → 34 data/bolgeler.js, 52 js/app.js
- `DEVIRLER` → 6 data/paket_05.js, 52 js/app.js
- `DEVLET_PARCA_HALKA` → 35 data/devlet_harita_ust.js, 52 js/app.js
- `ISGALLER` → 6 data/paket_05.js, 52 js/app.js
- `PARCA_HALKA` → 38 data/donemler_ust.js, 52 js/app.js
- `PETEKLER` → 37 data/donemler_on.js, 52 js/app.js
- `SERBEST` → 37 data/donemler_on.js, 52 js/app.js
- `SERBEST_U` → 37 data/donemler_on.js, 52 js/app.js
- `URETIM_IZI` → 6 data/paket_05.js, 34 data/bolgeler.js, 35 data/devlet_harita_ust.js, 38 data/donemler_ust.js, 42 data/altlik.js, 48 data/bekleyenler.js
- `VERI_SINIRI` → 38 data/donemler_ust.js, 52 js/app.js
- `guncelle` → 52 js/app.js, 56 js/d_katman.js
- `obGoster` → 52 js/app.js, 57 js/antlasma_harita.js

- **A · motor izi:** `URETIM_IZI` (6 dosya) — her üretilmiş dosya damga basıyor; birleştirmede TEK tanım yeter.
- **B · app.js var-alias:** `var X = window.X \|\| …` (9 ad) — app.js var tanımı var-değil-DEĞER okur; bağımlılık ④'te kenar kurdu, çakışma değil.
- **C · sarmalama (monkey-patch):** `guncelle` (app.js→d_katman), `obGoster` (app.js→antlasma_harita) — sarmalayıcı tanımı DEĞİŞTİRİR; birleştirmede sıra korunmalı.

## ⑤ Kümeler

| küme | dosya | toplam bayt | küme içi sıra bağımlılığı |
|---|---|---|---|
| cdn | 2 | 0 | 0 |
| paket | 29 | 12.873.469 | 0 |
| yerlesimler | 1 | 26.436 | 0 |
| olaylar | 4 | 48.871 | 0 |
| seferler | 1 | 16.078 | 0 |
| oteki | 22 | 31.098.868 | 12 |

*Not: brifingteki yerlesimler/olaylar/kronoloji/d_sinirlar/seferler/ekokuma kümeleri ad kalıbıyla anılıyordu; birleştirme sonrası bu içerikler `paket_*` dosyalarına taşındı — kümeleme AD KALIBIYLA yapıldı, içerik taramasıyla değil.*

## ① Dosya envanteri (yükleme sırasıyla)

| # | yol | boyut | satır | global | üst düz. okuma |
|---|---|---|---|---|---|
| 1 | `https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.js` | CDN |  |  |  |
| 2 | `data/paket_01.js` | 823.702 | 3176 | 10 | 0 |
| 3 | `data/paket_02.js` | 223.332 | 2160 | 7 | 0 |
| 4 | `data/paket_03.js` | 142.278 | 703 | 3 | 0 |
| 5 | `data/paket_04.js` | 78.196 | 789 | 6 | 0 |
| 6 | `data/paket_05.js` | 1.141.732 | 8222 | 5 | 0 |
| 7 | `data/paket_06.js` | 449.064 | 4401 | 6 | 0 |
| 8 | `data/paket_07.js` | 247.668 | 1833 | 3 | 0 |
| 9 | `data/paket_08.js` | 387.929 | 3645 | 3 | 0 |
| 10 | `data/paket_09.js` | 998.042 | 5694 | 17 | 0 |
| 11 | `data/paket_10.js` | 101.894 | 1129 | 2 | 0 |
| 12 | `data/paket_11.js` | 349.818 | 2628 | 7 | 0 |
| 13 | `data/paket_12.js` | 1.730.590 | 15083 | 31 | 1 |
| 14 | `data/paket_13.js` | 1.212.414 | 9747 | 13 | 0 |
| 15 | `data/paket_14.js` | 593.471 | 6683 | 30 | 0 |
| 16 | `data/yerlesimler_epir.js` | 26.436 | 383 | 1 | 0 |
| 17 | `data/olaylar_serhat.js` | 7.052 | 91 | 1 | 0 |
| 18 | `data/paket_15.js` | 165.653 | 1557 | 17 | 0 |
| 19 | `data/paket_16.js` | 209.683 | 2271 | 4 | 0 |
| 20 | `data/paket_17.js` | 102.147 | 1410 | 4 | 0 |
| 21 | `data/paket_18.js` | 60.896 | 775 | 4 | 0 |
| 22 | `data/paket_19.js` | 11.115 | 151 | 2 | 0 |
| 23 | `data/paket_20.js` | 113.537 | 1034 | 9 | 0 |
| 24 | `data/paket_21.js` | 75.696 | 966 | 5 | 0 |
| 25 | `data/paket_22.js` | 386.971 | 3795 | 8 | 0 |
| 26 | `data/paket_23.js` | 252.617 | 3281 | 10 | 0 |
| 27 | `data/paket_24.js` | 290.913 | 3087 | 6 | 0 |
| 28 | `data/olaylar_ok107.js` | 6.256 | 74 | 1 | 0 |
| 29 | `data/seferler_ok103.js` | 16.078 | 210 | 1 | 0 |
| 30 | `data/olaylar_ok109.js` | 21.578 | 230 | 1 | 0 |
| 31 | `data/olaylar_ok106.js` | 13.985 | 146 | 1 | 0 |
| 32 | `data/paket_25.js` | 20.997 | 281 | 5 | 0 |
| 33 | `data/paket_26.js` | 248.333 | 2050 | 24 | 0 |
| 34 | `data/bolgeler.js` | 480.550 | 6 | 2 | 0 |
| 35 | `data/devlet_harita_ust.js` | 3.092.642 | 5 | 3 | 0 |
| 36 | `data/devlet_parca_on.js` | 437.946 | 7 | 2 | 0 |
| 37 | `data/donemler_on.js` | 189.430 | 15 | 3 | 0 |
| 38 | `data/donemler_ust.js` | 994.989 | 7 | 5 | 0 |
| 39 | `data/donem_parcalar.js` | 10.481.639 | 10 | 3 | 0 |
| 40 | `js/geo_coz.js` | 13.299 | 269 | 0 | 0 |
| 41 | `data/sehirler.js` | 67.475 | 600 | 1 | 0 |
| 42 | `data/altlik.js` | 14.152.133 | 5 | 2 | 0 |
| 43 | `data/koridor.js` | 31.565 | 156 | 2 | 0 |
| 44 | `data/paket_27.js` | 44.986 | 329 | 4 | 0 |
| 45 | `data/koridor_yama_f5c9a5.js` | 10.361 | 274 | 1 | 0 |
| 46 | `data/koridor_yama_e9353f.js` | 7.874 | 129 | 1 | 0 |
| 47 | `data/koridor_owtrad.js` | 71.617 | 432 | 1 | 0 |
| 48 | `data/bekleyenler.js` | 4.806 | 151 | 2 | 0 |
| 49 | `data/isyan_tarama.js` | 23.203 | 218 | 1 | 0 |
| 50 | `js/suzgec.js` | 49.297 | 858 | 50 | 0 |
| 51 | `js/zaman.js` | 8.252 | 146 | 11 | 1 |
| 52 | `js/app.js` | 876.046 | 15324 | 555 | 58 |
| 53 | `data/paket_28.js` | 2.334.236 | 1643 | 10 | 0 |
| 54 | `data/paket_29.js` | 75.559 | 273 | 5 | 0 |
| 55 | `https://cdn.jsdelivr.net/npm/polygon-clipping@0.15.7/dist/polygon-clipping.umd.min.js` | CDN |  |  |  |
| 56 | `js/d_katman.js` | 71.051 | 1290 | 104 | 3 |
| 57 | `js/antlasma_harita.js` | 13.994 | 267 | 14 | 1 |
| 58 | `js/anim_dili.js` | 7.454 | 156 | 1 | 0 |
| 59 | `js/sefer_ok.js` | 13.245 | 259 | 1 | 0 |

## Yan bulgular

- `data/paket_kunyeon.js` ölçüm sırasında `data/paket_kunye.json` olarak yeniden adlandı (koordinatör çalışması); hiçbir biçimde bağlı değil.
- En büyük iki dosya yerel toplamın %56'sı: `data/altlik.js` (14,2 MB) + `data/donem_parcalar.js` (10,5 MB).
- İlk koşuda (11:38) yerel toplam 77,2 MB ölçüldü; üç sonraki koşuda 44,06 MB kararlı — koşum penceresinde dosyalar yazıldı (ör. js/app.js 11:43). **Bu rapor kararlı skorun anlık görüntüsüdür; koordinatör işi durunca betiği yeniden koşmalı.**

## Yöntem ve sınırlar

- Tanım üç biçim sayıldı (klasik betik semantiği): `window.X =` (her derinlikte) · üst düzey `function X(` (hoisting) · üst düzey `var X` (window'a bağlar). `let`/`const` window'a BAĞLAMAZ — sayılmadı.
- Üst düzey = yorum/dize/şablon/regex ayıklamalı `{}` derinliği 0 (parçalar arası derinlik taşınır). `function (a,b)` parametre bölgeleri dışlandı (parametre gölgelenmesi yanlış-pozitif üretir — ölçüldü: suzgec.js `olaylar` parametresi).
- Sınır 1: `dize_boslugu` yok — ok-parametresi `(a) => …` kapsam dışı. Sınır 2: regex düzeyi kestirimle atlandı — derinlik saparsa kenar AZ/ÇOK çıkabilir; 0 hata adayının ELLE doğrulaması yapıldı (guncelle/obGoster = app.js'in kendi hoisted tanımı; d_katman/antlasma_harita typeof bekçisiyle sarar).
- Sınır 3: `window[...]` dinamik erişimi 27 kez geçiyor — ad çözülemedi (denetim dışı).
