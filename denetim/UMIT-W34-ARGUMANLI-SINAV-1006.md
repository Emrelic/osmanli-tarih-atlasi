# UMIT-W34-ARGUMANLI-SINAV-1006 — argümanlı / üretilmiş-çıktılı sınavlar

## 0. ÖNGÖRÜ (mühür — ölçümden ÖNCE yazıldı, kod okunmadan)
Evren: `SINAV-ENVANTER-1006.tsv` (W27, 13a3ae93) HATA kovası · alt_sebep "argüman" = 12 · "üretilmiş-çıktı-yok" = 5.
- 12 argümanlı betikten **~6** makul bir argümanla koşar ve GEÇER; **~4** argüman olarak
  bir yama/ara dosyası (temp/scratchpad) bekler ve o dosya artık yok ⇒ tek seferlik;
  **~2** koşar ama OTTU (çürümüş) çıkar.
- Kapıya sabit argümanla alınabilecek: **≤ 4**.
- 5 üretilmiş-çıktılı betiğin **5'i** de yalnız tam koşudan (`uret_petek.py`) sonra anlamlı;
  hiçbiri dosyayı kendisi üretmez.

Mühür: sha256 `2ce6dcbb…8969` (yalnız §0), 2026-10-06T01:27:09+03:00, ölçümden önce.

## 1. Ortam
- Ağaç: `git -C C:\atlas worktree add --detach C:\atlas-w34 origin/main` → **a59e4b7b**. Dubious ownership çıkmadı.
- `git -C C:\atlas-umit fetch origin` bir yarış hatası verdi (`cannot lock ref … expected a04eef4c`): başka bir fetch aynı anda ref'i güncellemiş. Envanter (13a3ae93) ve origin/main (a59e4b7b) yine de okundu.
- Koşu: sırayla, `timeout 300`, paralel yok. Ara girdiler yalnız scratchpad'e yazıldı (havuz.json, seferler.json, girdi.json, yamalı `denetle_yayin.py` kopyası). Ağaca hiçbir şey yazılmadı.
- Mutlak yol ya da ağ çağrısı içeren betik yok. `git show` kullanan betikler yalnız yerel depoyu okur.
- Motorun 4 tuz dosyasına dokunulmadı. Tam koşu çağrılmadı.

## 2. Grup A — argüman bekleyen 12 betik
| # | betik | beklediği | koşu | sonuç | kapı önerisi |
|---|---|---|---|---|---|
| 1 | ARAC-B-GORUNUM-BANTSINAV-0072.py | `--bantli <döküm> --taban N=<döküm>`: pickle dökümler. Kaynağı `ARAC-B-GORUNUM-UFUK-0072.py --dokum`, MOTORU dar kutuda koşturur | **KOŞTURULMADI** | dökümler diskte yok; üretmek motor koşusu demek | **tek seferlik** (B-GORUNUM ölçümü) |
| 2 | ARAC-KOSU10-KALAN-SINA-0917.py | `<yama.json>…`: `YAMA-KOSU10-KALAN-0917.json` | 0,34 sn | çıkış **1** · ✗ 114 · ✓ 4 · 🟡/⚪ 31. Yama uygulanmış, `eski` metinler artık yok | **tek seferlik**: yalnız uygulama ÖNCESİ anlamlı. Kapıya girerse her gün kırmızı yanar |
| 3 | ARAC-KUNYE-SINA-0903.py | `<öneri künye .json>` | 0,37 / 0,41 sn | CERKEZ (uygulanmış): HATA 1 (① çakışma). ZEND öneri: HATA 2 (⑤ kaynak boş). 🔴 **İkisinde de çıkış 0**, "UYGULAMA DURDU" basmasına rağmen | **kapıya ALINAMAZ**: çıkış kodu hükmü taşımıyor (yanlış temiz). Girdiye bağlı ön-sınav aleti, tek seferlik. Çıkış-kodu kusuru ayrı iş |
| 4 | ARAC-LEGO-alet-sinav.py | `<motor_onbellek.py dizini>` = `arac` | 0,37 sn | **GEÇTİ** (çıkış 0) | **sabit argümanla eklenir** (`arac`). Yan etki: `%TEMP%\lego_sinav_*` silinmeden kalıyor (benim 2 koşumun artıklarını sildim) |
| 5 | ARAC-SEFER-OK-SINAV-0075.py | `<seferler.json>`: önce `node denetim/ARAC-SEFER-OK-DUMP-0075.js <çıktı>` (index.html'in data/ listesi, 131 sefer) | dump + 6,0 sn | **GEÇTİ**: rotalı 17 geçti · ihlal 0 · rotasız deniz 4 (kara kesen 0) | **sabit argümanla eklenir, iki adım** (dump → geçici dosya → sınav). Kontrol yönü (rotasız kara kesen) bugün 0; ateşleme ispatı yalnız yama öncesi vardı |
| 6 | ARAYUZ-MADDE-0930-KAPI-SINAV.py | `<yamalı denetle_yayin.py>`: main'de `dom_sozlesmesi` **YOK** (grep 0) | yamalı kopyayla 2,8 sn | `ARAYUZ-MADDE-0930-kapi-dom-sozlesmesi-1006.diff` scratch kopyaya temiz uygulandı → **GEÇTİ** 5/5 (kırık 2ddede3d · 9a956026 → uyumsuz 2 · sağlam 17cd2f98 · 7f790990 · HEAD → 0) | **yama main'e inince sabit argümanla eklenir** (`arac/denetle_yayin.py`). Bugün eklenemez |
| 7 | GOVDE-CAKISMA-0079-yama-sina.py | `<yama-dizini>/b/arac/uret_petek.py` + `devletler_harita.js` / `donemler.js` (asama.py üzerinden) | **KOŞTURULMADI** | `GOVDE-CAKISMA-0079-yama.diff` denetim/'de YOK (bulunamadı). Üretilmiş çıktı da yok | **tek seferlik**. Yama kayıp, motor dosyasının yamalı kopyasını ister |
| 8 | ARAC-TEMIZ-SINAV-0914.js | `ONCE_DIZINI` ya da `--head` + `denetim/TEMIZ-DUZENLE-0914.json` | `--head` 2,8 sn | GEÇTİ: 34 dosya, izinsiz fark 0. ⚠️ Temiz ağaçta HEAD = WT olduğu için **dairesel**, hiçbir şey ölçmez | **tek seferlik**: yalnız PAKET-TEMIZ düzenlemesi sırasında anlamlı |
| 9 | ARAC-YAMA-JS-SINA-0905.js | `<kök> <girdi-listesi.json>` (`GIRDI_DOSYALARI`, `data/` önekli) | 0,25 sn | 11 yer_yama dosyası · ATLASTA YOK 0 · AD BELİRSİZ 0. Çıkış kodu **her zaman 0** | **kapıya alınamaz**: hükmü yok, bilgi aleti. İstenirse önce çıkış kodu eklenmeli |
| 10 | ARAC-YUK-SINAV-0925.js | `<dilimli kök> <orijinal kök>`: `data/donemler_web.js` + `devletler_harita_web.js` (geo_dilimle.py çıktısı) | **KOŞTURULMADI** | girdinin tamamı üretilmiş çıktı (gitignore'da) | Envanter "argüman" dedi, gerçekte **üretilmiş-çıktı grubu**. Koşu + `geo_dilimle.py` sonrası anlamlı |
| 11 | ODAK-AVRUPA-BATI-0080-sina.js | `<havuz.json> <kip> …`. Havuz `ODAK-*-havuz.py <çıktı>` (girdi.yukle → 4299 yerleşim) | 0,37 sn (`dosya oneri.json`) | 203 öneri: A 50 · B 116 · C 37. Çıkış her zaman 0 | **kapıya alınamaz**: ölçüm/sorgu aleti, sınav değil. Tek seferlik |
| 12 | ODAK-BALKAN-0080-sina.js | 11 ile **birebir aynı** (fark yalnız 1. yorum satırı) | 0,20 sn (`id osmanli`) | sorgu çıktısı, hüküm yok | 11 ile aynı. **Mükerrer** |

## 3. Grup B — üretilmiş çıktı isteyen 5 betik (çıktı ÜRETİLMEDİ)
| betik | istediği | hangi koşudan sonra anlamlı | not |
|---|---|---|---|
| ARAC-DEGISMEZ8-KORLUK-SINAV-1004.py | `devletler_harita.js` (B: gerçek degismez8 ~1 dk) + C: gerçek `denetle.py` 2 × ~3 dk | `uret_petek.py` sonrası (HAVVA) | Bölüm A birimdir (yapay R); ayrılırsa çıktısız da koşar. Tamamı ~7 dk, kapı için ağır |
| ARAC-HALKA-SINA-0913.js | `data/devletler_harita.js`: yalnız `DEVLET_HARITA` id/renk (regex) | her `uret_petek.py` sonrası | Ucuz. Yayın kapısına (koşu sonrası) aday |
| DEGISMEZ-0086-sinav.py | gerçek bölüm: `devletler_harita.js` gövdeleri (~2 dk) | `uret_petek.py` sonrası | 🟢 **`--yapay` kipi çıktısız koşar**: ölçtüm, 1,9 sn, **18/18 tuttu**, çıkış 0 ⇒ **bugün `--yapay` sabit argümanıyla kapıya alınabilir** |
| SINAV-JSON-ESDEGER-0907.py | `devletler_harita` · `donemler` · `altlik`: hem `.js` hem `.json` (YUK-FETCH .json üretimi) | koşu + .json üretimi sonrası | .json üretiminin bugün canlı olup olmadığı ölçülmedi |
| SINAV-M0342-0907.js | `data/donemler.js` (DONEMLER o/v) + `devletler_harita.js` (dnm.g), node 4 GB | `uret_petek.py` sonrası | 4 `kasitli_bosluk` kaydının emilmediğini sınar |

## 4. Özet ve öngörü karşılaştırması
- A grubu: koşturulan **9/12** (#2–#6, #8, #9, #11, #12), koşturulmayan 3 (#1, #7, #10). B grubunda yalnız `DEGISMEZ-0086 --yapay` koştu.
- Hükümlü GEÇTİ: LEGO · SEFER · ARAYUZ (yamalı kopyayla) · TEMIZ (dairesel). Hükümsüz bilgi aleti: YAMA-JS · ODAK×2. Çürümüş: KOSU10. Kusurlu çıkış kodu: KUNYE.
- **Kapıya bugün sabit argümanla girebilecek: 3** → LEGO (`arac`) · SEFER (dump + sınav) · DEGISMEZ-0086 (`--yapay`). **Koşullu: 1** → ARAYUZ, dom-sözleşmesi yaması inince.
- Öngörü: "~6 koşar ve geçer" → 4 hükümle geçti (biri dairesel). "~4 kayıp girdi" → 3 (#1, #7, #10). "~2 OTTU" → 1 (KOSU10) + 1 yanlış-temiz çıkış (KUNYE). "kapıya ≤ 4" → **TUTTU** (3 + 1 koşullu). "5'in 5'i yalnız tam koşu sonrası" → **YANLIŞ**: DEGISMEZ-0086 `--yapay` ve DEGISMEZ8-KORLUK Bölüm A çıktısız koşar.
- Envanter düzeltmeleri: #10 YUK-SINAV "argüman" değil **üretilmiş-çıktı**. #12 ODAK-BALKAN, #11'in mükerreri.

## 5. git status
`git -C C:\atlas-w34 status --porcelain` → **boş** (bütün koşulardan sonra, ağaç kaldırılmadan önce).

---

## EK (1006, ikinci görev) — KUNYE-SINA çıkış kodu + KOSU10-KALAN teşhisi
Ağaç: atılabilir worktree, origin/main **7afbe86f**. Veriye dokunulmadı. Motor tuz dosyalarına dokunulmadı.

### EK-1. `denetim/ARAC-KUNYE-SINA-0903.py` çıkış kodu → `denetim/KUNYE-SINA-CIKIS-1006.diff`
Yama (+30 −3), CLAUDE.md §3'ün üç çıkış kodu:
- `0`: temiz.
- `1`: en az bir 🔴 HATA. Sonda `sys.exit(1 if hata else 0)`.
- `2`: ÖLÇÜLEMEDİ. Beş durumda: argüman yok · girdi okunamadı / JSON değil · `arac/renkler.py` yüklenemedi · `data/devletler.js` node ile okunamadı · girdide künye yok (boş küme TEMİZ sayılmaz).

UYARI (⑤ ⑦) çıkışı etkilemez; eski davranış korundu. `git apply --check` temiz (atlas-umit HEAD 0576e28b'ye karşı).

**İki yönlü sınav — eski (HEAD) ve yeni yan yana:**
| girdi | eski çıkış | yeni çıkış |
|---|---|---|
| YAMA-KUNYE-CERKEZ-0918.json (HATA 1) | **0** ✗ | **1** ✓ |
| ONERI-KUNYE-ZEND-0907.json (HATA 2) | **0** ✗ | **1** ✓ |
| yapay ters aralık (HATA 1) | 0 ✗ | 1 ✓ |
| yapay temiz künye (`harita:"zend"`, HATA 0) | 0 | **0** ✓ |
| boş künye kümesi | 0 ✗ ("HATA 0", yanlış temiz) | **2** ✓ |
| olmayan dosya | 1 (traceback) | 2 ✓ |
| argümansız | 1 (IndexError) | 2 ✓ |
| `data/devletler.js` yok | 1 (JSONDecodeError) | 2 ✓ |
| `arac/renkler.py` yok | — | 2 ✓ |

📌 Yapay temiz girdinin ilk hâli `harita:"osmanli"` taşıyordu ve yeni sürüm **1** verdi: ⑥ "HEDEFİ YOK". Bu doğruydu, çünkü `osmanli` hiçbir künyenin `id`/`harita` değeri değil. Kusur betikte değil sınav girdimdeydi; `zend` ile düzeltildi.

**Bugünkü HATA'lar gerçek mi?**
- **CERKEZ, 1 HATA (① çakışma): ölçüm DOĞRU, ama ihlal değil "zaten uygulanmış".** `cerkez` künyesi 2336d246 (2026-09-18, "cerkez kunyesi + rengi indi") ile `devletler.js`e girdi. Öneri dosyası artık bayat bir girdi. Veri hatası YOK.
- **ZEND, 2 HATA (④ `ad` boş + ① çakışma): YANLIŞ POZİTİF, girdi sınıfı uyumsuz.** `ONERI-KUNYE-ZEND-0907.json` yeni künye önerisi DEĞİL. Mevcut `zend` künyesinin **kaynak düzeltme** önerisi (`④_ONERI.KUNYE_kaynak_DEGISSIN`). `topla()` sezgisi `①_OLCUM_KUNYE_VS_VERI.kunye = {id,f,t}` ölçüm görüntüsünü öneri sanıyor: `ad` yok, id zaten var. Veri hatası YOK.
- ⚠️ Kalıcı sınırlama (düzeltmedim, kapsam dışı): betik "id + f/t taşıyan her sözlüğü" öneri sayar. Rapor biçimli JSON'larda sahte HATA üretir. Kapıya bağlanacaksa evren **yalnız yeni-künye öneri dosyaları** olmalı, ya da girdide açık bir `kunyeler` anahtarı şart koşulmalı.

### EK-2. `ARAC-KOSU10-KALAN-SINA-0917.py` ✗114 — HÜKÜM: **BAYAT GİRDİ (tek seferlik sınav), GERİLEME DEĞİL, SINAV KUSURU DEĞİL**
Ölçüm: betiğin kendi `sina()` mantığı birebir kopyalandı. Her çapa iki uçta okundu: yazıldığı commit **15737d93** (2026-09-17) ve HEAD. Kırıldığı commit, o dosyanın `git log 15737d93..HEAD` dizisinde ikili aramayla bulundu.
| sınıf | sayı |
|---|---|
| UYGULANDI (yamanın `yeni` metni dosyada) | **71** |
| METİN DEĞİŞTİ (ne eski ne yeni; uygulayıcı farklı biçimde yazmış) | **35** |
| SATIR KAYDI (eski metin dosyada ama başka satırda) | **8** |
| YEŞİL | 4 |
| **yazıldığında zaten kırmızı** | **0** ⇒ sınav kendi anında doğruydu |
| toplam çapa | 118 (✗ 114 = 71 + 35 + 8 ✓ envanterle tutar) |

**Kıran commit:**
- **107/114 → 9b92117f** (2026-09-17, aynı gün): "KOSU13 OTOBUSU". Commit gövdesi: *"KOSU13-YAMA: 0052 + KOSU10-KALAN + 0064 yerlesim yamalari (M-4380)"*. Yani yama **bilerek uygulandı**; sınav tam o anda tek seferlik işini bitirdi.
- 4 → 63d064a1 (aynı gün, KUNYE-TARAF; 4'ü de UYGULANDI).
- Kalan 3 sonraki commit'lerde; üçü de **KARAR** kovasında (karar kalemleri zaten değişmek için yazılmıştı):
  - G6-KRON2-08 → 7c39ebf6 (UYGULANDI)
  - G6-KRON2-15 → f6fd7aec (satır kaydı)
  - G4-DEBRECEN-K → 464f91fd (2026-09-28, metin değişti)

⇒ **Gerileme kanıtı 0.** Bulunamadı: G4-DEBRECEN-K'nin 464f91fd'deki değişikliği kararın uygulanması mı, başka bir düzeltme mi? Bu ölçülmedi (KARAR kalemi, hüküm kaydı aranmadı).
⇒ Kapı önerisi değişmedi: **tek seferlik**. Kapıya bağlanırsa her gün 114 sahte kırmızı yanar. İstenirse emekliye ayırmak için tek satır yeter, betiğin docstring'ine: *"9b92117f'de uygulandı; sonrası için anlamsız"*.

### EK-3. git status
- Worktree (7afbe86f): yalnız ` M denetim/ARAC-KUNYE-SINA-0903.py` (yama, diff'e alındı). Teslimden sonra ağaç kaldırıldı.
- atlas-umit: yeni dosya `?? denetim/KUNYE-SINA-CIKIS-1006.diff`. Bu .md'ye EK eklendi (değişti).
