# KRONO-DIFF-1006 — KRONO-CELISKI-1006'nın düzeltme diff'leri (UMIT-W28)

Taban `ee415f4e` · çalışma yeri: ayrı worktree (scratchpad `w28`). `C:\atlas-umit` çalışma ağacına
yalnız `denetim/` altındaki bu rapor ve diff'ler yazıldı. `data/paket_*.js`'e dokunulmadı: diff'ler
uygulandıktan sonra **`arac/paketle.py` koşmalıdır**, yoksa site eski veriyi gösterir. Motor tuzu
(`uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py`) değişmedi.

| diff | dosyalar | satır | `git apply --check` |
|---|---|---|---|
| `denetim/KRONO-SAHTE-ALINTI-1006.diff` (D1) | kronoloji_timurlu · kronoloji_naksa_dukaligi · kronoloji_kirim | 48 · CR 0 | `ee415f4e` üstüne ✓ |
| `denetim/KRONO-TARIH-1006.diff` (D2, D1'in ÜSTÜNE) | devletler · kronoloji_timurlu · kronoloji_karakoyunlu · kronoloji_safevi · kronoloji_atina_dukaligi · kronoloji_rodos_sovalyeleri · kronoloji_bizans | 188 · CR 0 | D1 + D2 zinciri ✓ |
| `denetim/KRONO-MUKERRER-SIL-1006.diff` (D3, D2'nin ÜSTÜNE) | devletler | ayrı teslim | §5 |

## 1. D1 — sahte alıntı / atlas dayanağı (yalnız `kaynak:` alanı, tarih DEĞİŞMEDİ)
| dosya:satır | eski dayanak | yeni dayanak |
|---|---|---|
| `kronoloji_timurlu.js:88` (1400-10-01 Halep) | tırnaklı "1400-1401: Halep, Hama, Humus ve Şam…" — TDV gövdesinde YOK | TDV `timur`'un gerçek cümlesi (TARİHSİZ) + `timurlular` "1399-1400 döneminde" · gün: bulunamadı |
| `kronoloji_naksa_dukaligi.js:85` (1537-11-01) | İngilizce tırnaklı cümle — TDV gövdesinde YOK | TDV `naksa`'nın Türkçe cümlesi "944-945 (1537-1538)" · gün: bulunamadı (11-01 yaklaşık) |
| `kronoloji_kirim.js:211` (1571-01-01 Moskova) | "devletler.js:189 eski kayıtla örtüşüyor" — atlas kaydı | TDV `devlet-giray` gerçek cümlesi · gün: bulunamadı · künyedeki 05-24 kaynaksız (D207) |
| `kronoloji_kirim.js:315` (1648-05-16 Sarı Sular) | "kronoloji_lehistan.js:429 ile birebir" — atlas kaydı (onun kaynağı da "el-kitabi") | TDV `kirim` gerçek cümlesi "1648-1653" · gün: bulunamadı · Tugay Bey/Sarı Sular TDV'de geçmiyor |

## 2. İki küme — ADIYLA AYRI (karışmasın diye)
**(i) künyede `-01-01`, TDV gün veriyor → D2'de gün YAZILDI (8)**
| # | dosya:satır (`ee415f4e`) | eski → yeni | TDV slug |
|---|---|---|---|
| 11 | `devletler.js:798` fransa | 1536-01-01 → **1536-02-18** | `fransa` |
| 13 | `devletler.js:515` akkoyunlu | 1467-01-01 → **1467-11-10** | `uzun-hasan` |
| 15 | `devletler.js:547` karakoyunlu | 1410-01-01 → **1410-08-30** (metin: Bağdat 1411'e ayrıldı) | `karakoyunlular` |
| 16 | `devletler.js:548` karakoyunlu | 1420-01-01 → **1420-11-13** | `karakoyunlular` |
| 17 | `devletler.js:549` karakoyunlu | 1438-01-01 → **1438-04-19** | `cihan-sah` |
| 18 | `devletler.js:550` karakoyunlu | 1447-01-01 → **1447-03-12** | `timurlular` |
| 21 | `devletler.js:1822` timurlu | 1409-01-01 → **1409-05-13** | `sahruh` |
| 24 | `devletler.js:1054` gürcistan | 1578-01-01 → **1578-08-24** | `tiflis` · `gurcistan` |

**(ii) kaynağı olmayan gün → DOKUNULMADI (9).** Akademik kaynak turu ayrı iş. D1/D2 bunların hiçbirinin `t:`'sine dokunmadı (diff'te `{ t:` ile başlayan satırlar sayıldı: 15 eski / 17 yeni; 13'ü (i)+(iii)+üçüncü gün, 2'si yeni safevi maddesi, 2'si yalnız beyan — `t:` aynı: 1722-10-23, 1503-06-01).
| kalem | künye dosya:satır | dosya:satır | not |
|---|---|---|---|
| Potop 1655 | `devletler.js:739` 07-01 | `kronoloji_lehistan.js:293` 07-25 | — |
| Hanya 1645 | `devletler.js:369` 01-01 | `kronoloji_venedik.js:402` 08-22 | — |
| Mora 1715 | `devletler.js:373` 06-25 | `kronoloji_venedik.js:481` 07-01 | — |
| 1422 kuşatması | `devletler.js:95` 06-10 | `kronoloji_bizans.js:454` 06-08 | D2: yalnız BEYAN eklendi (TDV iç uyumsuzluğu §4) |
| Sarı Sular 1648 | `devletler.js:216` 05-01 | `kronoloji_kirim.js:311` 05-16 | D1: yalnız dayanak |
| Dózsa 1514 | `devletler.js:685` 07-15 | `kronoloji_macaristan.js:364` 07-20 | — |
| Halep 1400 | `devletler.js:1819` 01-01 | `kronoloji_timurlu.js:85` 10-01 | D1: yalnız dayanak |
| Katalan 1303 | `devletler.js:998` 01-01 | `kronoloji_katalan.js:13` 09-01 | — |
| Moskova 1571-05-24 | `devletler.js:215` 05-24 | `kronoloji_kirim.js:207` 01-01 | D1: yalnız dayanak |

## 3. D2 — tarih düzeltmeleri
**(iii) künyenin YILI yanlış (W26'nın üç ayrı olayı)**
- `devletler.js:1823` timurlu 1449-01-01 "Uluğ Bey tahta çıktı" → **1447-01-01** (`gun:` "yıl — günü TDV'de yok; Şâhruh'un 12 Mart 1447 ölümü üzerine").
- `devletler.js:546` karakoyunlu 1406-01-01 "Celâyirlileri yenip Tebriz" → **1408-04-13** "Serdrûd'da Timurlu Ebû Bekir Mirza'yı yenip Azerbaycan'ı ele geçirdi".
- `devletler.js:128` safevi 1503-01-01 "Diyarbekir, Bağdat ve Musul" → **1507-01-01** "Diyarbekir… (Bağdat 1508)". Musul metinden çıktı (TDV'de bulunamadı).
  `kronoloji_safevi.js`'e **iki madde TAŞINDI**: 1507-01-01 Diyarbekir (`yer_id:"Diyarbakır"`) · 1508-01-01 Bağdat (`yer_id:"Bağdat"`); ikisi de TDV `safeviler`+`sah-ismail` cümleleriyle.
**TDV'nin üçüncü gün verdiği iki dosya maddesi:** `kronoloji_karakoyunlu.js:406` 1447-03-13 → **1447-03-12** · `kronoloji_timurlu.js:124` 1409-05-01 → **1409-05-13**. Eski gün `gun:` alanında not.
Her künye düzeltmesinde eski `t`/`b` `ic_not_b:`'ye, TDV cümlesi `kaynak:`'a yazıldı (künye maddelerinde bu iki alan zaten kullanılıyor: 235 `ic_not_b` · 1129 `kaynak`).

## 4. D2 — BEYAN (düzeltilmedi, MGGP-NOT: kullanılan gün · kullanılmayan kaynaklı gün · neden · rapor)
- ÇELİŞKİ 3: `kronoloji_atina_dukaligi.js:66` (Setton 1388-05-02 ↔ TDV 1387) · `kronoloji_rodos_sovalyeleri.js:248` (Vatin 21 ↔ TDV 20 Aralık; künyenin 25'i kaynaksız) · `devletler.js:136` İsfahan (künye 1722-10-23 KAYNAKSIZ ↔ TDV 10 Kasım).
- TDV iç uyumsuzluk 5: ① Cihan Şah/İskender — `kronoloji_karakoyunlu.js:374` **zaten beyanlıydı** (`gun:`), dokunulmadı; künye `:549`'un `kaynak:`'ına da yazıldı · ② 1422 Receb↔Haziran `kronoloji_bizans.js:454` · ③ Hemedan 908↔909 `kronoloji_safevi.js:83` · ④ Diyarbekir 912↔913 yeni 1507 maddesi (+ künye `:128` `gun:`) · ⑤ Uluğ Bey'in ölümü 8↔10 Ramazan `kronoloji_timurlu.js:153`.

## 5. Ölçüm — Değişmez 2 önce/sonra (`py arac/denetle.py`, worktree)
| | Değişmez 2 | 2s | 2i | 2t | mükerrer madde | çıkış |
|---|---|---|---|---|---|---|
| önce (`ee415f4e`) | 623 kırılma · 0 açık | 187 açık (tavan 189) | 1 açık | 13 | 112 | 2 |
| D1+D2 sonrası | 623 · 0 açık | 187 | 1 | 13 | 112 | 2 |
- İki çıktı **satır satır AYNI** (`diff`: 0 satır). Beklenen buydu: Değişmez 2'nin evreni `olaylar*` + `kronoloji_sinir*`
  (`denetle.py:1104-1111`). Değişen dosyaların hiçbiri o evrende değil ve yerleşim `s:`/`d:` değişmedi ⇒ safevi taşıması
  **kırılma DOĞURMADI** (kırılma yerleşim döneminden doğar, kronoloji maddesinden değil).
- Çıkış 2'nin sebebi iki ölçümde de aynı: **Değişmez 8 ÖLÇÜLEMEDİ** (`devletler_harita.js` üretilmiş + gitignore'lu, taze
  worktree'de yok). Bu değişiklikten bağımsız; ana ağaçta koşudan sonra ölçülür.
- ⚠️ ÖLÇMEDİĞİM: odak kapısı (`odak_olc.py`/`denetle_yayin.py`) — iki yeni safevi maddesinin `yer_id`'si (`Diyarbakır` 32,
  `Bağdat` 45 maddede zaten kullanılıyor) çözülür olmalı, ama kapıyı paketlenmiş veriyle koşturmadım.

## 6. Yan bulgu (D2'de dokunulan satırda çıktı)
- `kronoloji_timurlu.js:157` (1449-10-25) `kaynak:`'taki tırnaklı TDV `ulug-bey` cümlesi ("…1449'da (25 Ekim) idam edildi")
  da TDV gövdesinde birebir YOK. Beyan zaten bu satıra yazılacağından gerçek cümleyle değiştirildi (D2).
- `kronoloji_atina_dukaligi.js:66`'daki "1387: …" tırnağı da TDV'nin birebir cümlesi değildi; beyanla birlikte düzeltildi.
- Korpus geneli taraması ayrı kıtaya verildiği için başka satır aranmadı.
