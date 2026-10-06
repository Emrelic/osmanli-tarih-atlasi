# UMIT-W55-ZINCIR-GOC-1006 — iki yayın zinciri: tam tablo, başlatıcılar, göç seçenekleri

Kalem: KUYRUK-1006.md L278 · SABAH-1004 ⑲ · makine UMIT (`hostname` = UMIT)
Taban: worktree `C:\atlas-w55` = `origin/makine/umit` @ `cac68699` (7acc42f2 dahil)
Kip: YALNIZ ÖLÇÜM. Hiçbir betik değiştirilmedi, zamanlanmış göreve dokunulmadı, koşu/yayın başlatılmadı.
Koşturulan tek şey iki salt-okur denetimdi (`denetle_arayuz.py`, `denetle_kronoloji.py`); ikisi de diske
yazmıyor (`open(...,'w')` 0 · tek `write` node stdout'u). Ölçümden sonra `git status`: temiz.

---

## ① İki zincir — adım adım

### ESKİ: `arac/kosu_yayin.py` (221 satır · 18 Ağu `f1873bc2` · son değişiklik 22 Ağu `530c6998`)
`kos()` (:53) → `subprocess.run([sys.executable]+argv)`, **zaman aşımı YOK**, çıktı adım bitince
`kosu_gunluk/<adım>.log`a, özet `kosu_otomatik.log`a.

| # | adım | betik | çıkış kodunu okuyor mu | ≠0 olursa |
|---|---|---|---|---|
| ① | üretim | `uret_petek.py` (:126) | evet | **DURUR**, 3 bip, `return 1` |
| ② | devirler | `uret_devirler.py` (:130) | okur, `zorunlu=False` | sürer |
| ③ | altı değişmez | `denetle.py` (:134) | evet | **DURUR**, `return 1` (çıkış 2 = ÖLÇÜLEMEDİ da durdurur) |
| ④ | renk | `renk_olc.py` (:139) | okur, `zorunlu=False` | sürer |
| ⑤ | sürüm damgası | `surum_damgala.py` (:141) | okur, `zorunlu=False` | 🔴 **sürer** — damga düşse de yayınlar |
| ⑥ | yayın kapısı | `denetle_yayin.py` (:143) | okur, `uyari_kodu=True` | 🔴 **sürer** — "bilinen borç" deyip YAYINLAR |
| ⑥b | kronoloji şeması | `denetle_kronoloji.py` (:157) | okur, `uyari_kodu=True` | sürer |
| ⑥c | arayüz | `denetle_arayuz.py` (:171) | okur, `uyari_kodu=True` | sürer |
| ⑦ | commit | `git add -- <10 sabit dosya>` + `commit -F _kosu_mesaji.txt -- <aynı>` (:190-199) | commit kodu loglanır | push'a geçilmez, ama `main` yine **0** döner |
| ⑧ | push | `git push` (:206) | 🔴 kod loglanır, **dönüşe yansımaz** | `return 0` — push düştüyse de "BİTTİ" + 9 bip |

Yok: kilit · zaman aşımı · motor ortamı (`MOTOR_ONBELLEK_DIZIN`/`MOTOR_SUREC_ISCI`) · `pull --rebase` ·
`uret_altlik` · `uret_bekleyenler` · `adres_nobetci`. Bayraklar: `--kuru`, `--push-yok` (commit eder, push etmez).

### YENİ: `arac/kos_ve_yayinla.py` (425 satır · 12 Ağu `fbe0a913` · son değişiklik 20 Eyl `27b76088`)
📌 Not: "yeni" adı yanıltıcı — bu dosya **ÖNCE** doğdu (12 Ağu), `kosu_yayin.py` 18 Ağu'da ayrıca yazıldı.
⑥b/⑥c (21-22 Ağu) yalnız eskiye eklendi; yeni o günden sonra 9 commit daha aldı, ikisi hiç taşınmadı.
`kos()` (:49) → `Popen`, satır satır `kosu_zincir.log`a akış, zaman aşımında süreç ağacı `taskkill /T`.

| # | adım | betik | çıkış kodunu okuyor mu | ≠0 olursa |
|---|---|---|---|---|
| 0 | kilit | `.zincir.kilit` (:161) | — | varsa ve <240 dk ise `return 2` |
| 0 | motor ortamı | `_motor_ortami()` (:135) | — | — |
| 1 | üretim | `uret_petek.py` (:263) · 1440 dk (`KOSU_ZAMAN_DK`) | evet | **DURUR** `return 1` |
| 2 | devirler | `uret_devirler.py` (:270) · 40 dk | evet | **DURUR** (eskide sürüyordu) |
| 3 | altlık | `uret_altlik.py` (:286) | okur, `olumcul=False` | sürer |
| 4 | bekleyenler | `uret_bekleyenler.py` (:288) | okur, `olumcul=False` | sürer |
| 5 | renk | `renk_olc.py` (:292) — **denetle'den ÖNCE** (eskide sonra) | okur, `olumcul=False` | sürer |
| 6 | altı değişmez | `denetle.py` (:294) | evet | **DURUR** (çıkış 2 da) |
| 7 | sürüm damgası | `surum_damgala.py` (:320) · yalnız yayın koşusunda | evet | **DURUR** |
| 8 | yayın kapısı | `denetle_yayin.py` (:323) | evet | **DURUR** (eskide uyarıydı) |
| 9 | adres nöbetçisi | `adres_nobetci.py` (:335) | okur, `olumcul=False` | sürer |
| — | `--yayinlama` ise | (:338) | — | burada `return 0` |
| 10 | mesaj dosyası | `denetim/zincir-commit-mesaji.txt` (:346) | var mı | yoksa `return 1` |
| 11 | git add | `git add -A -- data index.html` (:350) | `olumcul=False` | sürer |
| 12 | git commit | `git commit -F MESAJ` (:352) — **pathspec YOK** | evet | DURUR |
| 13 | git pull --rebase | (:354) | `olumcul=False` | 🔴 sürer — çatışmada depo REBASE ORTASINDA kalır |
| 14 | git push | (:355) | evet | DURUR `return 1` (depo rebase'de kalmış olabilir) |

Bayraklar: `--kuru` (planı basar) · `--yayinlama` (damga/commit/push yok) · `--uretimsiz` (emniyet ağı:
üretimi atlar, `donemler.js` 6 saatten yaşlıysa durur) · `--zamanla SS:DD` (`schtasks /Create /SC ONCE`).

### Fark kümesi
```
YALNIZ ESKİDE   ⑥b denetle_kronoloji · ⑥c denetle_arayuz · kosu_gunluk/ adım başına tam log
YALNIZ YENİDE   kilit · zaman aşımı · motor ortamı · uret_altlik · uret_bekleyenler ·
                adres_nobetci · pull --rebase · --uretimsiz emniyet ağı · akışlı log
İKİSİNDE AMA SERTLİĞİ FARKLI
                devirler       eski: uyarı   · yeni: ÖLÜMCÜL
                sürüm damgası  eski: uyarı   · yeni: ÖLÜMCÜL (ve kapıdan önce, 2f1bc208)
                yayın kapısı   eski: UYARI   · yeni: ÖLÜMCÜL      ← en ağır fark
                push hatası    eski: 0 döner · yeni: 1 döner
                commit kapsamı eski: 10 sabit dosya, pathspec'li · yeni: `add -A -- data index.html`, pathspec'siz
```
🔴 **Bunun anlamı:** Emre'nin düğmesi (`KOSU-BASLAT.bat` → eski zincir) yayın kapısı düşse bile
**yayınlar**. Eski zincirin docstring'i bunu 18 Ağu'da "⑥ bugün SARI" diye bilerek kurmuş; o borç
bugün de süren bir istisna mı, ölçmedim (`denetle_yayin.py`yi koşturmadım: üretilmiş çıktıya bakar,
UMIT'te bayat olur ve hüküm yanıltır).

---

## ② Dört başlatıcı (UMIT'te ölçüldü)

| başlatıcı | çağırdığı | log | notlar |
|---|---|---|---|
| `KOSU-BASLAT.bat` (kök, 18 Ağu `f1873bc2`) | `py arac\kosu_yayin.py` | `kosu_otomatik.log` | Emre'nin "çift tıkla" düğmesi. Yorumu **bayat**: "24:00'te kendiliğinden koşar (AtlasKosu)" — görev KAPALI, son koşu 23:00'dı |
| `KOSUYU-SIMDI-BASLAT.bat` (kök, 12 Ağu `2cb07255`) | `py arac\kos_ve_yayinla.py` | `kosu_zincir.log` | E/H onayı sorar; kod 0/2/diğer ayrımını basar. Metni **bayat**: "~75 dk" ve sırayı "YAYIN KAPISI → sürüm damgası" basıyor; kod 2f1bc208'den beri tersini yapıyor |
| `arac/zincir_baslat.bat` (22 Eyl `7a02aad8`) | `cd /d C:\atlas` + `py -u arac\kos_ve_yayinla.py > kosu_ayrik.log 2>&1` | `kosu_ayrik.log` (her koşuda **ezilir**) + `kosu_zincir.log` | ATLAS-ZINCIR görevinin hedefi. Yol `C:\atlas`a GÖMÜLÜ ⇒ başka makinede/worktree'de yanlış depoyu koşturur |
| `arac/kosu_ayrik_baslat.ps1` (6 Eyl `119d2473`) | `Start-Process py arac/kos_ve_yayinla.py` (gizli pencere) | `kosu7-<damga>.log/.err` | `.petek.kilit`e bakar (motor kilidi), `.zincir.kilit`e BAKMAZ — o kontrol zincirin içinde |

Bulunamadı: masaüstünde zincir başlatıcısı (UMIT'te `Desktop`, `OneDrive/Desktop`, `OneDrive/Masaüstü`,
`Public/Desktop` tarandı: 0) · `.lnk`/`.vbs`/`.cmd` başlatıcı 0 · `ClaudEmre/` dizini UMIT'te YOK
(`C:\atlas\ClaudEmre` bulunamadı). EMRELIC masaüstü taranmadı (erişimim yok).

⇒ Dağılım: **1 → eski, 3 → yeni.** Eski zincirin TEK başlatıcısı Emre'nin düğmesi ve kapalı AtlasKosu görevi.

---

## ③ Zamanlanmış görevler — 🔴 UMIT'TE YOKLAR, ölçemedim

`Get-ScheduledTask` adı/eylemi `atlas|kosu|zincir|yayin|kos_ve|kosu_yayin` geçen görev: **0**
(`schtasks /query` toplam 396 görev). İki görev EMRELIC'te yaşıyor; şartnamede istenen
`schtasks /query /v /fo LIST` tam tanımı **UMIT'ten alınamaz**. Elimdeki tek veri depodaki kayıtlar:
```
SABAH-1004 ⑲ (koordinatör, Get-ScheduledTask ile)
  AtlasKosu     DISABLED · son 2026-08-21 23:00:01 · sonuç 0 · py.exe arac\kosu_yayin.py
  ATLAS-ZINCIR  Ready    · son 2026-09-11 03:00:55 · 0x8007042B · C:\atlas\arac\zincir_baslat.bat · NextRun boş
denetim/ARAC-TASIMA-0922.py:47-50 (taşıma planı, 22 Eyl)
  ATLAS-ZINCIR [Hazır] arac\zincir_baslat.bat · AtlasKosu [Kapalı] "çalışma dizini mutlak"
  ClaudEmre-gece-kipi [Hazır] kutu\gece-kipi.bat (her gece 01:00)   ← üçüncü görev
```
- `0x8007042B` = Win32 1067 `ERROR_PROCESS_ABORTED` ("süreç beklenmedik biçimde sonlandı") —
  0x80070002 (boşluklu yol) sınıfı DEĞİL; görev başladı, süreç dışarıdan/çökerek bitti. Sebebi ölçülmedi.
- 🟡 HİPOTEZ, ölçülmedi: AtlasKosu'nun "çalışma dizini mutlak"ı 22 Eyl taşımasından ÖNCEKİ yol
  (`…\TARİH COĞRAFYA SİTESİ`) olabilir; taşıma aleti KAPALI görevi `<Enabled>` korunarak taşıdığını
  söylüyor (:869-908), ama taşındı mı bilinmiyor. Yeniden açılırsa yanlış dizinde koşabilir.
- 📌 İstek: EMRELIC'te biri şunu koştursun (salt okur):
  `schtasks /query /tn ATLAS-ZINCIR /v /fo LIST` · `schtasks /query /tn AtlasKosu /v /fo LIST` ·
  `py denetim/ARAC-ZINCIR-GOREV-DENETIM-0910.py` (onarmadan, `--onar` YOK).

---

## ④ Birleştirme seçenekleri — KOD YAZILMADI, karar Emre'de

### Motor tuzu (§9.1) — iki seçenek de DOKUNMUYOR
Tuz dosyaları: `girdi.motor_izi()` (:757-775) yalnız `uret_petek.py · renkler.py · girdi.py`
özetliyor; CLAUDE.md §9.1 buna `motor_onbellek.py`yi ekliyor. Zincir dosyaları
(`kos_ve_yayinla.py`, `kosu_yayin.py`) ve başlatıcılar **hiçbirinde yok** ⇒ önbellek ölmez.
⚠️ Ama CLAUDE.md §7: koşu sürerken `arac/` donuktur ⇒ değişiklik **koşular ARASINDA** iner
(koşan Python süreci dosyayı bellekte tuttuğu için koşuyu bozmaz, ama kural kuraldır).

### (b) ⑥b/⑥c'yi `kos_ve_yayinla.py`ye TAŞI — değişen satırlar
1. `:325`ten sonra (yayın kapısından sonra, adres nöbetçisinden önce) iki `kos()`:
   `kos("kronoloji şeması (denetle_kronoloji.py)", [sys.executable, "arac/denetle_kronoloji.py"], olumcul=?, dk=10)`
   `kos("arayüz (denetle_arayuz.py)", [sys.executable, "arac/denetle_arayuz.py"], olumcul=?, dk=5)`
   + eskideki "NİÇİN" yorumlarının (`kosu_yayin.py:146-170`) taşınması.
2. `--kuru` PLAN metni `:412-414` (kendi yorumu `:393-411` "adım eklenirse BU LİSTE DE güncellenir" diyor).
3. Docstring/başlatıcı metinleri: `KOSUYU-SIMDI-BASLAT.bat:10-11` zaten bayat, birlikte düzelir.
4. Eski taraf: `kosu_yayin.py` emekli · `KOSU-BASLAT.bat` → `kos_ve_yayinla.py`ye yönlendirilir
   (Emre'nin düğmesi ADIYLA kalır) · AtlasKosu görevi silinir (EMRELIC'te, Emre kararı).

Risk: düşük, ~25 satır, tek dosya. **Asıl risk `olumcul` seçimi** — bugünkü ölçümle:
```
denetle_kronoloji.py   çıkış 1 · 109 dosya · 8261 madde · 84 İHLAL   (SABAH-1004: 83 — +1)
denetle_arayuz.py      çıkış 0 · ①a ✓ · ①b ✓ (ani kapanan 0) · ② ✓ · ③ 33 denetim, ölü 0
```
⇒ ⑥b ölümcül yapılırsa zincir **bugün yayınlamaz** (84 ihlal). Tavan (§3.4) olmadan ölümcül olamaz.
⇒ ⑥c bugün temiz ⇒ ölümcül yapılabilir, bugün bir şey durdurmaz.
⚠️ Yeni zincirde `olumcul=False` **sessizdir**: yalnız `→ kod=1 · x dk` basar, eski zincirin
"⚠️ … BİLİNEN BORÇ sayıldı" satırı YOK. Uyarı kipinde taşınırsa log'da düşüş GÖRÜNMEZ —
eski zincirin "sessiz de kalmaz" vaadi bu taşımada kaybolur.

### (a) Tek zincirde BİRLEŞTİR
= (b) + eski zincirin taşıdığı ve yenide olmayan şeylerin kararı:
- `kosu_gunluk/<adım>.log` (adım başına ayrı tam log) — yenide akışlı TEK log var; ayrı dosya istenirse `kos()` değişir (orta risk: akış iş parçacığı).
- `--push-yok` (commit et, push etme) — yenide eşi yok; `--yayinlama` commit'i de atlar. Anlam farkı Emre'nin düğmesini etkiler.
- Sertlik farkları (devirler · damga · yayın kapısı · push) — birleşik zincirde **yeninin** sertliği alınmalı; eskinin "yayın kapısı uyarı" istisnası bugün hâlâ gerekli mi ÖLÇÜLMEDİ (HAVVA'da `denetle_yayin.py` çıkışı).
`kosu_yayin.py` ince bir yönlendiriciye iner (aynı ad, aynı düğme). Risk: orta — iki davranış
değişikliği aynı commit'e yığılır (`kos_ve_yayinla.py:406-411`in kendi uyarısı).

### ÖNERİ
**(b), ama tek commit'te değil iki adımda:** ① ⑥b `olumcul=False` + ⑥c `olumcul=True` taşınır,
`kos()`a `olumcul=False` dalında kod≠0 için görünür bir "⚠️ UYARI — sürüyor" satırı eklenir
(yoksa ⑥b sessizleşir) · ② `KOSU-BASLAT.bat` yeniye yönlendirilir, `kosu_yayin.py` emekli,
AtlasKosu silinir. Sebep: (a)'nın kazandırdığı tek gerçek şey adım başına log, ve onun için
`kos()`un akış mantığına dokunmak gerekiyor; değmez.
⚠️ Bu kod bir **yayın zinciri** ⇒ CLAUDE.md §7: `main`in tek yazıcısı koordinatör; uygulama
şartnameyle ve koordinatör kararıyla.

---

## ⑤ 7acc42f2 (①b) yeni zincire taşınınca çıkış koduna bakılacak mı — ÖLÇÜLDÜ
- `denetle_arayuz.py:230` ①b'nin bulgusu `ihlal += len(yetim)` ile **aynı sayaca** girer;
  `:271` `return 1 if ihlal else 0`. ⇒ ①b yetim kapanış bulursa betik **çıkış 1** verir.
- Yeni zincir her adımın kodunu okur (`kos_ve_yayinla.py:97`). ⇒ Bakılıp bakılmayacağını
  belirleyen tek şey taşırken yazılacak `olumcul=` değeri:
  `True` → ①b sızıntısı yayını DURDURUR · `False` → yalnız `→ kod=1` basılır, yayın sürer.
- Bugün (makine/umit, `cac68699`): çıkış **0**, ①b "yetim kapanış yok", ani kapanan 0.
- Eski zincirde ①b ZATEN koşardı (⑥c çağrılıyor) ama `uyari_kodu=True` ⇒ çıkış 1 yayını durdurmazdı.

---

## Yan bulgular (bu kalemin dışında; düzeltilmedi, yalnız kayıt)
1. 🔴 **Kilit 4 saatte "takılmış" sayılıyor** — `kos_ve_yayinla.py:174` `if yas < 240`. Koşular 8-16+
   saat sürüyor (aynı dosyanın `:233-261` yorumu). Kilit koşu boyunca tazelenmiyor ⇒ 4. saatten sonra
   ikinci bir başlatıcı kilidi DEVRALIR ve ikinci üretimi başlatır — kilidin önlemek için yazıldığı
   durum (`:162-166`). `:241-243` yorumu "kilit düzeltildi" diyor; kod 240 diyor. Ölçülen: kod.
2. 🔴 `git add -A -- data index.html` (:350) — CLAUDE.md §7 dizin pathspec'i + `-A` YASAK; elle
   düzenlenmiş/izlenmeyen her `data/` dosyası otomatik yayına girer. `commit -F` pathspec'siz (:352)
   ⇒ önceden sahnelenmiş başka dosyalar da girer.
3. 🔴 `git pull --rebase` ölümcül değil (:354): çatışmada depo REBASE ORTASINDA kalır, push düşer,
   `return 1`, kilit bırakılır — depo yarım rebase'de. Bu sabah `C:\atlas` tam bu hâldeydi (tahta
   commit'i `11e3dd92` rebase ortasında; `tahta.py` yazmayı reddetti). Aynı sınıf, kaynağı farklı olabilir.
4. 🟡 Eski zincir push düşse de `return 0` + 9 bip (:205-217).
5. 🟡 `zincir_baslat.bat` `C:\atlas` gömülü; `kosu_ayrik.log`u her koşuda ezer.
6. 🟡 İki başlatıcının metni bayat (yukarıda ②).
7. ℹ️ `denetle.py` çıkış 2 her iki zinciri de ③'te durdurur; 7acc42f2 commit mesajı UMIT'te
   `denetle.py: cikis 2 (D8 körlük) = taban` diyor ⇒ bu hâl sürerse HAVVA'da da otomatik zincir
   değişmezde durabilir. **Ölçmedim** (kaynak: commit mesajı; HAVVA'da ölçülmeli).
