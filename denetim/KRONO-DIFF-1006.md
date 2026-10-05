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

---
# EK — D2b (İsfahan) · odak kapısı · D3 (mükerrer silme)

## 7. D2b — `denetim/KRONO-TARIH-1006b.diff` (D2'nin ÜSTÜNE, ayrı tek satırlık diff seçildi)
Neden ayrı: D3 geri alınamaz silme; İsfahan bir TARİH düzeltmesidir, D2 ailesine aittir ve D3'ten bağımsız geri alınabilmeli.
- `devletler.js:136` safevi 1722-10-23 → **1722-11-10** (TDV `safeviler`: "30 Muharrem 1135’te (10 Kasım 1722)").
- Eski 23 Ekim SİLİNMEDİ: `ic_not_b:"eski t: 1722-10-23 — KAYNAKSIZ; … yerini bıraktı"` + `kaynak:`'ta MGGP-NOT beyanı
  (kullanılan 11-10 TDV · kullanılmayan 10-23 kaynaksız · neden: çelişki iki KAYNAK ister — koordinatör hükmü).
- Sıra bozulmadı: künyede önceki madde 1639-05-17, sonraki 1736-03-08.
- 13 satır · devletler.js CR 8 (dosya index'te `-text`, karışık satır sonu — meşru).

## 8. Odak kapısı önce/sonra (`py arac/odak_olc.py`, salt okunur)
| | madde | KONUMLU | ODAKSIZ | BEYANLI→yabancı | ÇÖZÜLMEYEN ATIF | çıkış |
|---|---|---|---|---|---|---|
| yamasız `ee415f4e` | 10026 | 8113 | 769 | 653 | 1 | 0 |
| D1+D2+D2b | 10028 | 8115 | 769 | 653 | 1 | 0 |
- Fark yalnız `kronoloji_safevi.js` satırında: 81→83 madde, 64→66 konumlu. Yani taşınan iki madde (1507 Diyarbakır ·
  1508 Bağdat) ODAKLI. Başka satır oynamadı.
- Tek çözülmeyen atıf iki ölçümde de aynı ve bu işle ilgisiz: `kronoloji_dogu_afrika.js` 1897-01-01 `yer_id:'Ogaden'`.

## 9. D3 — `denetim/KRONO-MUKERRER-SIL-1006.diff` (D2b'nin ÜSTÜNE)
**Sıra: ÖNCE kaynak taşındı, SONRA silindi.** 229 satır · devletler.js CR 105 (meşru, `-text`) · öteki 6 dosya CR 0.

### 9.1 Silinen 20 künye maddesi ↔ kalan ikizi (D1+D2+D2b uygulanmış hâlde ölçüldü, `d3olc.js`)
| # | künye (silinen) | ikiz (KALAN) | künyenin kaynağı | ikizin kaynağı (D3 sonrası) | ikiz ≥ künye? |
|---|---|---|---|---|---|
| 2 | venedik 1645-01-01 `:369` | kronoloji_venedik 1645-08-22 | yok | TDV `girit` birebir parça + `venedik` | ✓ |
| 8 | memluk 1382-01-01 `:113` | kronoloji_memluk 1382-11-27 | yok | TDV `berkuk` (yıl) + Britannica (gün) | ✓ |
| 11 | fransa 1536-02-18 `:798` | kronoloji_fransa 1536-02-18 | TDV birebir (D2) | **TAŞINDI** TDV `fransa` birebir + `imtiyazat` notu | ✓ (taşımayla) |
| 13 | akkoyunlu 1467-11-10 `:515` | kronoloji_akkoyunlu 1467-11-10 | TDV birebir (D2) | **TAŞINDI** TDV `uzun-hasan` birebir | ✓ (taşımayla) |
| 14 | karakoyunlu 1408-04-13 `:546` | kronoloji_karakoyunlu 1408-04-13 Serdrûd | TDV birebir (D2) | **TAŞINDI** (eskiden yalnız slug) | ✓ (taşımayla) |
| 15 | karakoyunlu 1410-08-30 `:547` | … 1410-08-30 Esed | TDV birebir (D2) | **TAŞINDI** (eskiden yalnız slug) | ✓ (taşımayla) |
| 16 | karakoyunlu 1420-11-13 `:548` | … 1420-11-13 | TDV birebir (D2) | **TAŞINDI** (eskiden yalnız slug) | ✓ (taşımayla) |
| 17 | karakoyunlu 1438-04-19 `:549` | … 1438-04-19 Cihan Şah tahta | TDV birebir (D2) | **TAŞINDI** (eskiden yalnız slug) | ✓ (taşımayla) |
| 18 | karakoyunlu 1447-03-12 `:550` | … 1447-03-12 | TDV birebir (D2) | TDV `timurlular` birebir (D2'de yazıldı) | ✓ |
| 20 | timurlu 1400-01-01 `:1819` | kronoloji_timurlu 1400-10-01 Halep (+ 1401-01-25 Şam ayrı madde) | yok | TDV `timur`+`timurlular` birebir (D1) | ✓ |
| 21 | timurlu 1409-05-13 `:1822` | … 1409-05-13 | TDV birebir (D2) | TDV `sahruh` birebir (D2) | ✓ |
| 22 | timurlu 1447-01-01 `:1823` | … 1447-01-01 Uluğ Bey tahta | TDV birebir (D2) | **TAŞINDI** (eskiden tırnaklı özetleme) | ✓ (taşımayla) |
| 23 | atina-dukaligi 1388-01-01 `:989` | kronoloji_atina_dukaligi 1388-05-02 | yok | TDV `atina` birebir + Setton + ÇELİŞKİ beyanı (D2) | ✓ |
| 24 | gurcistan 1578-08-24 `:1054` | kronoloji_gurcistan 1578-08-24 | TDV birebir (D2) | **TAŞINDI** (eskiden tırnaklı özetleme) | ✓ (taşımayla) |
| 26 | katalan 1303-01-01 `:998` | kronoloji_katalan 1303-09-01 | yok | Setton · **döngüsel atıf temizlendi** | ✓ |
| 27 | naksa-dukaligi 1537-01-01 `:1010` | kronoloji_naksa_dukaligi 1537-11-01 | yok | TDV `naksa` birebir (D1) | ✓ |
| 29 | safevi 1507-01-01 `:128` | kronoloji_safevi 1507-01-01 (D2'de taşınan) | TDV birebir (D2) | TDV `safeviler`+`sah-ismail` birebir | ✓ |
| 31 | kirim 1571-05-24 `:215` | kronoloji_kirim 1571-01-01 | yok (05-24 kaynaksız) | TDV `devlet-giray` birebir (D1) | ✓ — kaybolan yalnız kaynaksız gün |
| 32 | macaristan 1308-06-15 `:678` | kronoloji_macaristan 1308-11-27 | yok | Engel (2001) (yıl TDV ile uyumlu) | ✓ — kaybolan yalnız kaynaksız gün |
| 33 | isvec 1714-02-01 `:861` | kronoloji_isvec 1714-10-11 | yok | TDV `isvec` | ✓ — kaybolan yalnız yanlış gün |
Satır numaraları `ee415f4e`'dendir. Her silinen için ikizin dosyada TEK eşleşmesi olduğu ölçüldü (`ikiz_say=1` · 20/20).
Silmeden sonra hiçbir künyenin kronolojisi boş kalmadı (en az: fransa 2 · isveç 2 · nakşa 2).

### 9.2 Taşınan her alıntı TDV gövdesinde BİREBİR mi — iki yönlü sınav (`birebir.py`)
Alet: `ARAC-TDV-CIKARICI-1006`in `tam()` gövdesi; alıntı `…` ile bölünür, her parça normalize boşlukla aranır.
- **34 sınav · 31 ✓ birebir · 3 ✗.** ✗ olan üçü kasıtlı sınama: ikizlerdeki ESKİ tırnaklı özetlemeler (aşağıda) → alet
  sahte alıntıyı yakalıyor (ters yön ✓).
- D3'te 8 ikize taşınan 11 alıntı parçasının 11'i ✓ (#11 #13 #14 #15a/b #16 #17 #22a/b #24a/b). D1/D2/D2b'de yazılan 19 alıntının 19'u ✓.
- #11'de ikizde kalan `imtiyazat` parçası ("sultan tarafından tasdik edilmeden kaldı") da ✓.

### 9.3 İkizlerde bulunan "tırnaklı özetleme"ler (TDV'de birebir YOK — D3'te kaldırıldı)
| ikiz | eski tırnaklı metin | durum |
|---|---|---|
| kronoloji_fransa 1536-02-18 | "18 Şubat 1536'da Jean de la Forest ile İbrahim Paşa arasında ticari anlaşma imzalandı" | ✗ → TDV cümlesiyle değişti |
| kronoloji_timurlu 1447-01-01 | `ulug-bey`: "1447-1449 arası hükümdarlık yaptı" | ✗ → `timurlular` cümlesiyle değişti |
| kronoloji_gurcistan 1578-08-24 | `tiflis`: 'Lala Mustafa Paşa'nın kuvvetleri 24 Ağustos 1578'de şehre girdi' | ✗ → TDV cümlesiyle değişti |
D1/D2'de bulunanlarla birlikte bu işte görülen sahte/özetleme tırnak sayısı **7** (timurlu:88 · naksa:85 · timurlu:157 ·
atina:66 · ve bu üçü). Korpus taraması ayrı kıtada.

### 9.4 Değişmez 2 önce/sonra
| | Değişmez 2 | 2s | 2i | 2t | mükerrer madde | 4s | çıkış |
|---|---|---|---|---|---|---|---|
| D3 öncesi (D1+D2+D2b) | 623 · 0 açık | 187 | 1 | 13 | 112 | 5 | 2 |
| D3 sonrası | 623 · 0 açık | 187 | 1 | 13 | 112 | 5 | 2 |
- Tek satır farkı: Değişmez 4s'in örnek listesinde `katalan` ile `adal` (ikisi de "1 dönem") YER DEĞİŞTİRDİ. Eşit sayılı
  kayıtların yazdırma sırası; sayı (5) ve küme aynı. Değer değişimi değil.
- D3 öncesi ölçüm ile ilk taban (`ee415f4e`) satır satır aynı (D2b de Değişmez 2 evreninde değil).
- Çıkış 2 her ölçümde aynı sebepten: Değişmez 8 ÖLÇÜLEMEDİ (taze worktree'de `devletler_harita.js` yok).

### 9.5 Zincir sınavı
`ee415f4e` üstünde D1 → D2 → D2b → D3 sırayla `git apply` ✓ ve sonuç W28 worktree'nin son hâliyle **birebir** (`git diff --quiet`).
On üç hedef dosyanın hiçbiri `ee415f4e` → bugünkü HEAD `13a3ae93` arasında değişmedi ⇒ zincir bugünkü HEAD'e de oturur.
⚠️ D2 ve D2b aynı satıra (`devletler.js:136`) dokunduğu için dördünü TEK `git apply --check` çağrısıyla sınamak YANLIŞ
hata verir; sırayla uygulanmalı.
