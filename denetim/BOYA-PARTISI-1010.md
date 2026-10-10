# BOYA-PARTISI-1010 — dört kimliğin boya ölçümü + `renkler.py` önerisi (UMIT)

10 Ekim 2026 · makine UMIT · model Opus · **UYGULANMADI, commit/push YOK.**
Taban: ölçüm `origin/main` **534633f8**; teslimden önce main **4b76e9b0**'a ilerledi.
Aradaki 3 commit'in `arac/` ve `data/` farkı **boş** (`git diff --stat 534633f8 4b76e9b0 -- arac/ data/`).
`git apply --check` iki tabanda da temiz.
Teslim: `denetim/BOYA-PARTISI-1010.diff`. Yalnız `arac/renkler.py`'ye dokunuyor: +10 satır, 3 BOYALAR kaydı + 7 yorum.
Kayıtlar `prusya-dukaligi` satırının (main `renkler.py:3119`) hemen altına giriyor.

## 0. Mükerrer araması — HAZIR DİFF YOK

| nerede | sonuç |
|---|---|
| `C:\atlas-umit\denetim\BOYA*` · `RENK-ARDIL*` · `NEGATIF-YIL*` | dört kimliğe boya veren diff yok |
| `BOYA-GEREKLI-1001.json:848` | `teuton-devleti` yalnız "yeni künye" kaydı olarak geçiyor |
| `RENK-ARDIL-1009.md:119,169` | misir çiftini **ölçmüş** (ΔE 0,97), hüküm vermemiş |
| `origin/main` `denetim/` | misir için üç belge var, ama boya diff'i değil karar notları:<br>`ONERI-RENK-MISIR-0905.md` (aday listesi)<br>`ONERI-MISIR-BOYA-ANAHTARI-0906.md` (tek anahtar önerisi, §④ "karar Emre'nin")<br>`ARAC-MISIR-RENK-ADAY-0905.py` |
| `oturumlar/INIS-KOSU22.md` | dört kimliğin hiçbiri yok. Yalnız `:75` "renk_olc ŞART" |

`NEGATIF-YIL-1010-B-v2.diff` `renkler.py`'ye **DOKUNMUYOR** (denetle · girdi · gun · motor_esitlik · uret_petek · sınav).
⇒ Onunla sıralı check gerekmedi.
🔴 **Ama `BOYA-BORC-1009-v2.diff` (17 boya) `renkler.py`'ye dokunuyor ve main'de inmemiş** (ileri check ✓, `-R` ✗).
Sıralı check iki yönde de temiz:
- main + BORC-v2 + bu diff ✓
- main + bu diff + BORC-v2 ✓

Hunk'lar ayrı yerde: BORC `:3356`, bu diff `:3119`. Renkler BORC-v2'nin 17 rengiyle birlikte seçildi.

## 1. Kimlik başına ölçüm (taban main, `girdi.yukle` + `durum_tablosu` işlevleri)

| kimlik | künye `devletler.js` | f → t | `harita:` | `bolge` | `s:`/`isg:` | `v:kid` | katman | BOYALAR (main) | renksiz kovası |
|---|---|---|---|---|---|---|---|---|---|
| misir-sultanligi | `:7523` | 1914-12-18 → 1922-03-15 | — | misir-sudan | **57** yerleşim (`s:`) | 0 | sınır 5 · krono 9 | **VAR** `#4ed224` (`renkler.py:3148`) | yok (renkli) |
| misir-kralligi | `:7530` | 1922-03-15 → 1953-06-18 | — | misir-sudan | **57** | 0 | sınır 4 · krono 5 | **VAR** `#48d224` (`:3147`) | yok (renkli) |
| teuton-devleti | `:10255` | 1230-01-01 → 1525-04-08 | — | orta-avrupa · `boya_gerekli:true` | **0** | 0 | krono 6 | yok | ⚪ yalnız kronoloji |
| teuton-sovalyeleri | `:10537` | 1281-01-01 → 1525-04-08 | — | dogu-avrupa | **0** | 0 | krono 2 | yok | ⚪ yalnız kronoloji |
| bavyera | `:8090` | 1506-07-08 → 1918-11-08 | — | orta-avrupa | **0** | 0 | krono 3 | yok | ⚪ yalnız kronoloji |
| nagpur-bhonsle | `:8405` | 1730-01-01 → 1853-12-11 | — | guney-asya | **0** | 0 | krono 1 | yok | ⚪ yalnız kronoloji |

"Renksiz künye — HARİTA DELİĞİ" listesi (main, 11 ad):
`abbasi · antakya-prinkipsligi · eyyubi · eyyubi-hama · gozleroglu · kudus-kralligi · mogol-imparatorlugu · resuli · sicilya-kralligi · tahiri · trablus-kontlugu`.
⇒ **Dört kimliğin HİÇBİRİ delik değil.**

### 1a. 🔴 MISIR — görev öncülü BAYAT: künye de renk de main'de VAR
- `"KUNYE+RENK BEKLIYOR"` notu 51 kayıtta duruyor (`yerlesimler.js` 7 + `yerlesimler_afrika.js` 44; ayrıca girdi dışı `yer_yama_misir_himaye.js` 56).
- Not şunu söylüyor: *"devletler.js'e henuz UYGULANMADI (YAMA-KUNYE-1923-0905.json)"*. **Yanlış.**
  - Künyeler `devletler.js:7523/7530`'da.
  - Boyalar `renkler.py:3147-3148`'de.
  - 57 yerleşim ikisini de `s:`te kullanıyor.
- ⇒ Boya işi YOK. Bayat not temizliği bir VERİ işi; `renkler.py` işi değil (dosya sahibine).
- Asıl açık soru farklı: **ardıl çakışması ΔE 1,0.**
  - 57 geçiş, ör. Kahire 1922-03-15.
  - RENK-ARDIL v3 ile ölçüldü. ARDIL listesinin **1 numarası**.
  - Bu, `ONERI-MISIR-BOYA-ANAHTARI-0906 §④`'ün açık kararı: tek anahtar mı, görünür fark mı. Hüküm Emre'nin.
  - Diff'e **KONMADI**. Seçenek olarak ölçüldü (aynı alet, §2):
    `misir-sultanligi → #9cd824`, min ΔE 13,46 (misir-kralligi'ye).
    Engel 41: Voronoi 8 (OSMANLI · filistin-mandasi · hicaz · ingiliz-sudani · ingiltere · italya · tbmm-turkiye · yunanistan), ardıl/selef OSMANLI tâbi + misir-kralligi.
  - Ya da tersi: ikisi aynı hex + `PAYLASIM` beyanı (goryeo/joseon emsali).

### 1b. 🔴 TÖTON — İKİ künye, AYNI devlet
- `teuton-devleti` 1230 → 1525-04-08 (`boya_gerekli:true`).
- `teuton-sovalyeleri` 1281 → 1525-04-08.
- Bitiş günü aynı, ardıl aynı (`prusya-dukaligi` f 1525-04-08).
- Boya yalnız **`teuton-devleti`**'ne verildi: geniş pencere bu, boya beyanı da bu.
- ⚠️ `teuton-sovalyeleri` boyasız kalır. Veri onu kullanırsa delik açılır.
- ÖNERİ (`devletler.js` sahibine): `teuton-sovalyeleri`'ne `harita:"teuton-devleti"` (sirbistan/bulgaristan dolaylama emsali), ya da mükerrer künye birleştirilsin.
- Königsberg notu (`yerlesimler.js:1122`): *"1281-1525 'almanya' da YANLIŞ … künyesi YOK"* — o da BAYAT (künye var).

### 1c. Bavyera · Nagpur
- **bavyera.** Freistadt/Linz notu (`yerlesimler_a78_avrupa.js:58-63`): "1620-1628 Bavyera rehni (bavyera BOYALAR'da yok)". Künye var, veri yok.
- **nagpur-bhonsle.** Raipur/Ratanpur (`yerlesimler_nokta_asya_0917.js:66,75`): 1818-1853 `__BOSLUK__`. Notun (a) seçeneği bu künye.
  - ⚠️ Nagpûr kaydı `maratha`yı 1853-12-11'e kadar taşıyor; not *"künye dışı"* diyor. Veri işi, burada ölçülmedi.

## 2. Renk seçimi — niçin `--oner` YETMEDİ ve ne yapıldı

`py arac/renk_olc.py --oner teuton-devleti,bavyera,nagpur-bhonsle` (main) çıktısı:
`🔴 komşusu ölçülemeyen kimlik` · üçünde de **0 komşu, 2 renkli engel** (= yalnız Osmanlı ikilisi).
⇒ Öneri BOŞ KÜMEYE karşı yapılmış oluyor. Verdiği #6c24d8 / #6cd824 / #7224d8 dayanaksız.
(`engel_kumesi` noktasız kimlikte mesafe ölçemiyor, `continue`.)

**Yöntem.** Yalnız scratchpad'de `sim_renk.py`. Hiçbir dosyaya yazmaz.
1. `girdi.yukle()` sarıldı. Notlarda adı geçen yerleşimlere dönemler **BELLEKTE** eklendi. Çevre en kötü hâl için genişletildi:
   - **teuton-devleti:** Prusya kutusundaki `almanya` 1281→(≤1525-04-08) dilimi → Königsberg · Elbing · Gdansk.
   - **bavyera:** Freistadt·Linz 1620-1628, artı Bavyera kutusunda `almanya` 1506-1918 → Augsburg · Münih · Nürnberg · Regensburg.
   - **nagpur-bhonsle:** Raipur·Ratanpur 1818-1853, Nagpûr 1743-1853.
2. 🔴 Simülasyon bir **VERİ ÖNERİSİ DEĞİL**; yalnız engel evrenini doldurmak için.
3. `renk_olc.py` olarak **RENK-ARDIL-1009-v3-PAKETUSTU** yamalı kopya koşturuldu (scratchpad). Main'deki `renk_olc` ardılı ölçmüyor.
   Engel evreni: Voronoi ∪ 1500 km eşzamanlı ∪ ardıl/selef ∪ Osmanlı ikilisi.
4. `oner()`in uygulamadığı iki proje kuralı eklendi:
   - **kırmızı aile** (Lab ton 70°-330° DIŞI) Osmanlı'ya ayrılmış (`renkler.py:1588,2687,2943`).
     Bunun yüzünden ilk sim önerisi `teuton #d82a24` (ton 36°) ELENDİ.
   - **`ACIKLIK_TABANI_L` 59** (`renkler.py:3719`).
5. Eşik: ΔE ≥ **13** (`_GUVENLI_PAY`, `renkler.py:3852`), DE_KOMSU 12 değil. Deniz DAL1/DAL2 süzgeci aynen.
6. Geçenler arasından `uyum()` ile seçildi (yetinmeci).
7. teuton↔bavyera karşılıklı engel sayıldı: 1506-1525 eşzamanlı, ~1000 km.

| kimlik | Voronoi (sim) | ardıl/selef (sim) | engel | seçilen | L* | ton | en yakın engel ΔE |
|---|---|---|---|---|---|---|---|
| teuton-devleti | almanya · danimarka · isvec-birlik-oncesi · litvanya-buyuk-dukalik · polonya-erken | polonya-erken · prusya-dukaligi | 56 | **#6c0cf0** | 62,0 | 312,4° | 13,51 (litvanya-buyuk-dukalik) |
| bavyera | almanya · avusturya | almanya · avusturya | 72 | **#ea9618** | 79,6 | 80,8° | 13,12 (piombino) |
| nagpur-bhonsle | __BOSLUK__ · bhopal · gond-kralliklari · haydarabad-nizam · ingiliz-hindistani · maratha | gond-kralliklari · ingiliz-hindistani · maratha | 45 | **#b424d8** | 67,3 | 327,1° | 14,08 (konbaung) |

## 3. `renk_olc` kanıtı — ÖNCE / SONRA (ADIYLA)

Koşu, ardıl yamalı `renk_olc` ile ve simülasyonla `denetle()` (`--ayrinti`). İki taban:

| taban | görünmez | komşu çakışma | aynı-anahtar | aynı-hex | yakın-değmeyen | **ARDIL** |
|---|---|---|---|---|---|---|
| A: main + BORC-v2 · ÖNCE | 0 | 8 | 70 | 0 | 15 | 10 |
| A: main + BORC-v2 + BU DİFF · SONRA | 0 | 8 | 70 | 0 | 15 | 10 |
| B: main · ÖNCE | 0 | 8 | 70 | 0 | 15 | 10 |
| B: main + BU DİFF · SONRA | 0 | 8 | 70 | 0 | 15 | 10 |
| C: main, DÜZ `renk_olc.py` (simsiz) ÖNCE → SONRA | 0→0 | 8→8 | 70→70 | 0→0 | 15→15 | (ölçmüyor) |

- İhlal satırları satır satır `diff`lendi (A ve B). **Yeni ihlal: 0. Kaybolan: 0.**
- **Tek yeni satır** SINIRDA kovasında (12 ≤ ΔE < 15, ekran; çıkış kodunu etkilemez): `ARDIL 13,59 avusturya ↔ bavyera`.
  Ardıl SINIRDA 52 → 53.
- Ardıl **ÖLÇÜLEMEDİ 7 → 0**. Yedisi bu üç kimliğin boyasızlığıydı:
  almanya↔bavyera · avusturya↔bavyera · gond↔nagpur · ingiliz-hindistani↔nagpur · maratha↔nagpur · polonya-erken↔teuton · prusya-dukaligi↔teuton.
- Yakın-renk ÖLÇÜLEMEDİ 7433 → 7471 (+38). Yeni renkli üç kimliğin, verisi olmayan künyelerle çiftleri; ihlal değil.
- Mevcut 8 komşu + 10 ardıl + 15 yakın ihlal bu diff'ten ÖNCE de var. Listede misir-kralligi↔misir-sultanligi ARDIL 1,0 (§1a). Hiçbirine dokunulmadı.
- Çıkış kodu dört koşuda da 0.

⚠️ **SINIR:** simülasyon gerçek veri değildir. Bu üç kimliği `s:`'e yazan veri işi inince `py arac/renk_olc.py` ŞART (diff'teki yorumda da yazılı).

## 4. Dosyalar · tekrar üretim
- Ara dosyalar (scratchpad, `c186cb98…/scratchpad/`):
  - `olc4.py` (§1 ölçümü)
  - `sim_renk.py` (sim + `oner2`)
  - `ardil/arac/renk_olc.py` (RENK-ARDIL v3 yamalı)
  - çıktılar: `once_sim.txt` · `A_sonra.txt` · `B_once.txt` · `B_sonra.txt` · `B_once_nosim.txt` · `once.txt` · `B_sonra_main_rolc.txt` · `oner.txt` · `oner_sim.txt`
- Worktree `C:\atlas-boya` (tek kullanımlık): yalnız `arac/renkler.py` değiştirildi ve geri alındı. Teslimden sonra kaldırıldı.
  (`renk_olc --oner` kendi `denetim/oneri-*.txt` artefaktını yazdı; o da silindi.)
