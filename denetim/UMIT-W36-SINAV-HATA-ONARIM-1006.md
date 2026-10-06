# UMIT-W36 · SINAV-HATA-ONARIM-1006 — HATA kovasının kalan 11 betiği

6 Ekim 2026 · oturum UMIT-W36-SINAV-HATA-ONARIM-1006 (Opus 5.5, EMRELIC) · devir `SINAV-ENVANTER-1006.tsv` (W27, `13a3ae93`)
Çalışma ağacı: `origin/main` = `7afbe86f` üstünde ayrık worktree (iş bitince kaldırıldı). Commit yok.
Yama: [`SINAV-HATA-ONARIM-1006.diff`](SINAV-HATA-ONARIM-1006.diff) — 5 dosya, +72/−9, `git apply --check -R` temiz,
W35'in `SINAV-MUTLAK-YOL-1006.diff`iyle ortak dosyası **0**. Motor tuzunun dört dosyasına dokunulmadı.

## Öngörü (koşturmadan ve betikleri okumadan önce yazıldı) → ölçüm

| # | betik | öngörü | ölçülen sınıf | tuttu mu |
|---|---|---|---|---|
| 1 | ARAC-AFRIKA-SUDAN-SINAV-0906.js | ÖLÜ adayı | **ONARILDI** (yol) | ✗ |
| 2 | ARAC-D-RENK-0073-SINAV.py | ONARILABİLİR | **ONARILDI** (yol → argüman) | ✓ |
| 3 | ARAC-KAMERIKA-0903-kara-sina.py | ÖLÜ adayı | **ONARILDI** (eksik fikstür) | ✗ |
| 4 | ARAC-MANDA-SINAV-0906.js | ÖLÜ adayı | **ÖLÜ** | ✓ |
| 5 | ARAC-SEFER-OK-SINAV-TARAYICI-0075.js | TARAYICI | **TARAYICI** | ✓ |
| 6 | SINAV-VASSAL-GORUNUM-0907.js | TARAYICI | **TARAYICI** | ✓ |
| 7 | SINAV-KOSU8-BITIS-0907.py | ÖLÜ/ONARILABİLİR | **ÖLÜ** | ✓ (yarı) |
| 8 | SINAV-KOSU8-PETEKSIZ-0907.py | ÖLÜ/ONARILABİLİR | **DOĞRU ÖLÇÜLEMEDİ** (ortam: üretilmiş çıktı yok) | ✗ |
| 9 | ARAC-TAHTA-KAPI-SINAV-1003.py | ONARILABİLİR (`rev-parse --git-dir`) | **ONARILDI** + kapıda GERÇEK KUSUR bulundu | ✓ |
| 10 | ODAK-ASYA-0080-sina.js | ONARILABİLİR ya da ÖLÜ | **ONARILDI** (sessiz yanlış sonuç) | ✓ |
| 11 | ODAK-OSMANLI-ANADOLU-0080-olcer-sinav.py | ONARILABİLİR (API adı) | **ÖLÜ** | ✗ |

Toplam: **ONARILDI 5 · ÖLÜ 3 · TARAYICI 2 · DOĞRU ÖLÇÜLEMEDİ 1 · ORTAM GEÇTİ 0.**
Öngörü "ONARILABİLİR 4 · ÖLÜ 3-5 · TARAYICI 2 · ORTAM GEÇTİ 0" idi; 11 betiğin 7'sinde sınıf tuttu.
Asıl yanılgı şuydu: "girdi dosyası yok" hükmünü ÖLÜ'ye yakın saydım. 3 dosya-yok vakasının 2'sinde girdi depoda
**başka adla** duruyordu (taşınmış ya da kesinleşmiş bir kopyası vardı).

## Betik betik

### 1 · ARAC-AFRIKA-SUDAN-SINAV-0906.js → ONARILDI
- **Hata:** `denetim/yer_yama_afrika_1923.js` ENOENT.
- **Ölçüm:** Yama `415d18ac` ile `denetim/` → `data/` taşınmış, içerik aynı (`{denetim => data}` 0 satır fark).
- **Onarım:** tek satır yol düzeltmesi.
- **Sınav:**
  - **geçen:** 7 ayağın hepsi 🟢, çıkış 0.
  - **bozuk:** `data/` kopyasında bir kaydın 1923 kimliği `ingiltere` yapıldı. ③ BEKLENMEYEN 1 🔴 · ⑥ 33/34 🔴 · "2 SINAV BAŞARISIZ", çıkış 2. Dosya geri alındı.
- ⚠️ **Anlam kayması (beyan):** sınav özgün hâlinde "yama uygulanabilir mi" diye soran bir ön kapıydı. Yama artık uygulanmış olduğu için
  bugün "canlı veri yamayla hâlâ aynı mı + 1923'te 34/34 `ingiliz-sudani`" diye soruyor. Bu da meşru bir gerileme sorusu,
  ama aynı soru değil; betiğe yorum olarak yazıldı. Emekli edilmesi de savunulabilir — hüküm koordinatörde.

### 2 · ARAC-D-RENK-0073-SINAV.py → ONARILDI
- **Hata:** `SP` sabitinde başka makinenin yolu gömülüydü (`C:\Users\emrem\…\scratchpad`).
- **Onarım:** `SP` artık `argv[1]` ya da `D_RENK_SP` ortam değişkeninden okunuyor.
  - Girdi yoksa `OLCULEMEDI` basılıyor, çıkış 2.
  - 16 şehirden biri tutmazsa çıkış 1 (eskiden yalnız metinde "X" basıyordu, çıkış hep 0'dı).
  - "(115)" sabit sayısı yerine ölçülen sayı basılıyor.
  - 16 şehir ve soru değişmedi.
- **Sınav:** gerçek girdi (`govde1923.geojson`) bu makinede **üretilemez**: üreticisi `ARAC-D-RENK-0073-GOVDE.js`,
  `data/devletler_harita.js` istiyor ve o dosya EMRELIC'te yok. Bu yüzden sentetik fikstür kullanıldı (16 şehrin her birine beklenen kimlikle kare).
  - geçen: 16/16, çıkış 0.
  - bozuk: Paris→`almanya` yapıldı; 15/16, Paris X, çıkış 1.
  - argümansız: çıkış 2.
- 🟡 **Kapsam dışı, aynı kusur:** `ARAC-D-RENK-0073-HATBOYA.py` ve `-KOMSU.py` aynı gömülü `SP`yi taşıyor. Envanterin HATA kovasında
  değiller (sınav sayılmamışlar); kilidim dışında oldukları için dokunulmadı.

### 3 · ARAC-KAMERIKA-0903-kara-sina.py → ONARILDI
- **Hata:** argüman verilmezse `denetim/adaylar_tum.json` aranıyor. Bu dosya `ARAC-KAMERIKA-0903-birlestir.py`nin scratch çıktısıydı ve
  **depoya hiç girmedi** (`git log --all` boş). Alet argüman verilince sağlamdı.
- **Onarım:** argüman yoksa ve `adaylar_tum.json` da yoksa, kesinleşmiş set `denetim/ADAY-KAMERIKA-0903.json` okunuyor
  (aynı şema, 377 nokta, `12d9d93b`). Okunan girdi basılıyor. >10 km aday varsa çıkış 1 (eskiden hep 0'dı).
- **Sınav:**
  - geçen: 377 adayın 4'ü maske dışında, dördü de ≤0,1 km ⚪; çıkış 0.
  - bozuk: Atlantik ortasında sahte bir nokta verildi → 🔴 930 km, çıkış 1.

### 4 · ARAC-MANDA-SINAV-0906.js → ÖLÜ (emekliye aday, silinmedi)
- **Hata:** yama `415d18ac` ile `data/`ya taşınmış.
- **Yol düzeltilerek koşturuldu, sonuç:** temiz kolda 3 hata.
  - `Beyrut: SAHIPSIZ PENCERE 1918-10-07 → 1918-10-08`
  - `Musul: SAHIPSIZ PENCERE 1624-01-01 → 1625-01-01`
  - `irak-kralligi 19 ≠ 35`
- **Ölçüm — hatalar veri kusuru değil, kayma:**
  - Yamanın 42 kaydının **7'si** canlı `s:` ile artık aynı değil (Beyrut · Musul · Erbil · Şehrizor · Halepçe · Bağdat · Ammâre).
  - Bu kayıtlar yamadan sonra başka yamalarla değişti; örneğin Musul'daki 1624-25 Safevî dilimi `YAMA-BAGDAT-0914` ile geldi.
  - Sınav ESKİ yama `s:`ini YENİ canlı `d:` ile birleştiriyor ve aradaki boşluğu "sahipsiz" sayıyor. Canlı Beyrut'ta boşluk yok (`fransa-cumhuriyet` 1918-10-07'de başlıyor).
- **Gerekçe:**
  - Yama 6 Eylül'de uygulandı.
  - Yama dosyasını okuyan **hiçbir tüketici yok** (`arac/` · `js/` · `index.html` taraması: 0).
  - Değişmez 1/1b bugün aynı soruyu canlı veride soruyor.
  - Sınavı "geçirmek" için `BEKLENEN`i değiştirmek, sorusunu değiştirmek olur.

### 5 · ARAC-SEFER-OK-SINAV-TARAYICI-0075.js → TARAYICI
### 6 · SINAV-VASSAL-GORUNUM-0907.js → TARAYICI

| betik | ne istiyor | node/vm? | bugün koşulunca |
|---|---|---|---|
| SEFER-OK-TARAYICI | Canlı sayfada `harita` (MapLibre), `harita.getSource("seferler").setData` kancası, `harita.getLayer("sefer-cizgi-sefer")`, `tarihAyarla` · `gunIdx` · `olaylar` · `SEFER_OK_FAZ`. Konsola yapıştırılır. | **HAYIR**: WebGL çizimi + DOM + app.js globalleri gerekir. | Yayında (r11374) denendi: sekme `visibilityState:"hidden"` (önizleme paneli gizli), `sefer-cizgi-sefer` katmanı yok, `aktifDonem:-1`. ⇒ **ÖLÇÜLEMEDİ**. Bu bir "yok" değil, gizli sekme artefaktı. |
| VASSAL-GORUNUM | Canlı sayfada `donemler` · `aktifDonem` · `etiketleriYerlestir` · `d.vl`; fikstürü sayfa belleğine enjekte eder. `fetch(...).then(eval)` ile koşulur. | **HAYIR**: aynı sebep. | Kendi kapısı `visibilityState!=="visible"` ise OLCULEMEDI döner; bu oturumda sekme gizli. |

Dayandıkları adların **hepsi bugün var**: `tarihAyarla` · `gunIdx` · `etiketleriYerlestir` · `"seferler"` · `sefer-cizgi-sefer` ·
`VASSAL_PUNTO` (`js/app.js`), `SEFER_OK_FAZ` (`js/sefer_ok.js`), `SEFERLER_SEFER_OK_0075` (`data/paket_26.js`).
⇒ İkisi de ölü değil. Görünür bir tarayıcı sekmesinde elle koşulmayı bekliyorlar; otomatik envanterden çıkarılıp "TARAYICI" kovasında tutulmalılar.

### 7 · SINAV-KOSU8-BITIS-0907.py → ÖLÜ (emekliye aday)
- Kendi damgası: *"BU BİR ÖLÇÜM DEĞİL, BİR PROJEKSİYONDUR."* KOŞU 8'in (başlangıç `2026-09-07 11:17:46`) bitiş saatini tahmin ediyordu.
- `kosu7-*.log` dosyası ne bu ağaçta ne `C:\atlas`ta var; koşu 8 de bitti.
- Çıkış 2 (ölçülemedi) doğru bir davranış, ama sorduğu soru artık anlamsız.

### 8 · SINAV-KOSU8-PETEKSIZ-0907.py → DOĞRU ÖLÇÜLEMEDİ (değişiklik yok)
- **Hata:** çıkış 2, "aletin çıktısı beklenen biçimde değil".
- **Ölçüm:** sardığı alet `ARAC-PETEKSIZ-0905.js`, `data/donemler.js` ENOENT ile düşüyor. Bu dosya üretilmiş ve gitignore'lu; EMRELIC'te yok.
  ⇒ Sınav kendi işini **doğru** yapıyor: ölçemediğini "temiz" diye değil ÖLÇÜLEMEDİ diye bildiriyor.
- Soru ("peteksiz hâlâ 0 mı?") hâlâ anlamlı ve eşikleri ilişkisel (sabit sayı yok). Koşu çıktısı olan makinede (HAVVA) koşmalı.
- Sınıfı W34'ün "üretilmiş-çıktı-yok" kovasıdır, "ölçülemedi" kovası değil.
- Küçük iyileştirme önerisi (yapılmadı): ENOENT'i tanıyıp "donemler.js yok" diye adıyla söylesin.

### 9 · ARAC-TAHTA-KAPI-SINAV-1003.py → ONARILDI + 🔴 GERÇEK KUSUR
- **Teşhis düzeltmesi:** envanter ve görev mesajı sebebi "`.git/rebase-merge` — rebase artık çözüldü" diye yazıyor. Sebep bu **değil**:
  - Sınav, sahte `rebase-merge/` dizinini KENDİSİ kuruyor.
  - Çöküşün sebebi, worktree'de `.git`in dizin değil **dosya** (`gitdir: …`) olması: `os.makedirs(KOK/.git/rebase-merge)` WinError 3 veriyor.
  - Rebase çözülse de worktree'de yine düşerdi. (Ayrıca: `C:\atlas` bu oturum boyunca hâlâ rebase ortasındaydı, `onto a59e4b7b`.)
- **Onarım:** git dizini `git rev-parse --absolute-git-dir` ile soruluyor. Sorulamazsa çıkış 2. Worktree olduğu da basılıyor.
- **Sınav:**
  - **düz klonda (geçen):** 9/9 OK, `SONUÇ: temiz`, çıkış 0.
  - **bozuk kapı:** düz klonda `_git_yarim()` her zaman `None` döndürecek biçimde bozuldu → 4 KUSUR, çıkış 1.
  - **worktree'de:** 4 KUSUR, çıkış 1. Bu sonuç **doğrudur**.
- 🔴 **BULGU — `arac/tahta.py:340` `_git_yarim()` worktree'de KÖR** (kilidim dışında, dokunulmadı):
  - Kapı `os.path.join(KOK, ".git")` altına bakıyor; worktree'de orası bir dosya.
  - Sonuç: rebase/merge/cherry-pick ortasındaki bir worktree'de kapı **susar** ve `tahta.py yaz` yazar.
  - 3 Ekim'de UMIT'i kilitleyen (M-5717) tam bu sınıf. Kapının koruduğu yer ana klonla sınırlı.
  - Çare: aynı `git rev-parse --absolute-git-dir` çağrısı. Sınav, çare indiği an worktree'de de temize döner.

### 10 · ODAK-ASYA-0080-sina.js → ONARILDI (envanter "boş girdi" demişti; asıl kusur SESSİZ YANLIŞ SONUÇ)
- **"Boş girdi"nin sebebi:** betik stdin'den JSON bekleyen bir yardımcı, kendi başına koşulacak bir sınav değil. Çağıranı `ODAK-ASYA-0080-uygula.py`.
- **Asıl kusur (girdi verilince):** index.html 29 Eylül'den (`af0c78c6`, paketleme) beri `data/paket_NN.js` yüklüyor.
  - Betiğin `src="data/…"` regex'i yalnız `yerlesimler_epir.js`i buluyor, `devletler.js`i HİÇ bulamıyor.
  - Sonuç hata vermeden yanlış çıkıyordu:
    - eski sürüm: `Tebriz n=0` · `safevi` künyesiz
    - onarılmış sürüm: `Tebriz n=1` · `safevi@1530 n=172` künyeli
  - `arac/paket_coz.py`nin belgelediği "boş küme" körlüğünün aynısı.
- **Onarım:** paketler `data/paket_kunye.json` ile açılıyor (`paket_coz.py` ile aynı kural, aynı sıra). Künye/dosya eksikse `OLCULEMEDI`, çıkış 2; sessiz geçiş yok.
- **Sınav:**
  - **geçen:** `Bağdat n=1` · `memluk@1500 n=129` · `memluk@1530 n=0` (Memlûk 1517'de bitti; ayırt ediyor) · `YokBoyleYer n=0` · `zzz-yok` künyesiz.
  - **bozuk:** `paket_kunye.json` kaldırıldı → çıkış 2; `devletler.js` kaldırıldı → çıkış 2. İkisi de geri kondu.
- 🟡 **Kapsam dışı:** çağıranı `ODAK-ASYA-0080-uygula.py:401` aynı kaldırılmış API'yle (`odak_olc.yer_havuzu`) çöküyor.
  - Kararlar veride zaten var (`kronoloji_sinir_asya.js`).
  - Ama uygulayıcının kendi yorumu, üretici `ARAC-D5-ASYA-KRONOLOJI-0916.py` yeniden koşarsa bu odakların **SİLİNECEĞİNİ** söylüyor. Yani yeniden uygulama gerekebilir.
  - Kilidim dışında olduğu için dokunulmadı.

### 11 · ODAK-OSMANLI-ANADOLU-0080-olcer-sinav.py → ÖLÜ (emekliye aday)
- **Hata:** `odak_olc.yer_havuzu` yok.
- **`git log -S`:** hem `yer_havuzu` hem `_oku` `26741c10` ile (27 Eylül, "Odak denetimi YAYIN KAPISINA bağlandı") kaldırıldı. Çözüm Python'dan `arac/odak_cozum.js`e taşındı.
- **Gerekçe:**
  - Sınav, ölçerin ESKİ kuralının sabit bir kopyasını test ediyor (`olcer = isinstance(ok, list) and len(ok) >= 2`, sınavın içinde gömülü). O kuralı app.js'in kuralıyla karşılaştırıyor.
  - `odak_olc.py`nin kendi başlığı (satır 48-55) tam bu farkı kusur olarak ölçüp Python kuralını **kaldırdığını** yazıyor: *"`odak_kimlik` için kimlik sayısına bakıyordu (yerleşim sayısına değil)"*.
  - Yardımcıları içeri kopyalayıp koşturmak, artık var olmayan bir kodun tarihî farkını yeniden sayar. Sorunun nesnesi yok; uyarlanırsa soru değişir.

## Kapsam dışı bulgular — hükme sunulanlar
1. 🔴 `arac/tahta.py` `_git_yarim()` worktree'de kör (bkz. 9). Yazıcısı kim ise onarım tek satır.
2. 🟡 `denetim/ODAK-ASYA-0080-uygula.py` aynı kaldırılmış API'yle çöküyor (bkz. 10).
3. 🟡 `ARAC-D-RENK-0073-HATBOYA.py` · `-KOMSU.py` başka makinenin gömülü `SP` yolunu taşıyor (bkz. 2).
4. Envanter düzeltmesi: TAHTA-KAPI "ortam/rebase" değil "worktree `.git` dosyası". ODAK-ASYA "boş girdi" değil "paketleme körlüğü". PETEKSIZ "ölçülemedi" değil "üretilmiş çıktı yok".

---

## EK · W36b (6 Ekim 2026) — iki 🟡'nin devamı

Görev: UMIT İRTİBAT. Yama [`SINAV-HATA-ONARIM-1006b.diff`](SINAV-HATA-ONARIM-1006b.diff) **1006'nın üstüne** kuruldu.
- **Temel commit:** `4a9a15f8` (`origin/makine/umit`). Bu commit yalnız 1006 diff'ini ve raporu taşıyor.
- Diff, atılabilir worktree'de 4a9a15f8 üstüne 1006 uygulandıktan sonra çıkarıldı.
- `git apply --check`: 1006 üstüne ileri temiz · `-R` temiz.
- 3 dosya, +128/−34. Motor tuzunun dört dosyasına ve `arac/tahta.py`ye dokunulmadı (③ beklemede).

### ① `ODAK-ASYA-0080-uygula.py` → ONARILDI

**Önce ölçüm — kod okuyarak.** Betik üç kaldırılmış işleve dayanıyordu, üçü de `26741c10` ile (27 Eylül) gitti:
- `odak_olc.yer_havuzu`
- `odak_olc._oku`
- `odak_olc.sinifla` — süzgecin kendisi

Çöküş satır 401'de, **hiçbir dosya açılmadan** oluyor. Yani bugüne kadar sessiz silme YOKTU; betik hiç koşmadı.

Betiğin yapabildiği silmeler, kodda iki yer:
- `duzenle()`: `kapsam_genis:true` siliniyor. Bu kasıtlı (A/AK/B/C/E sınıfları; "yabancı maddede Osmanlı çapı beyanı yalandır").
- `duzenle()`: boş `yer_id:""` değeri yeni odak alanlarıyla değiştiriyor.

Bunun dışında hiçbir alan silinmiyor. Her dosya yazılmadan önce node ile yeniden ayrıştırılıyor ve düzenlenmeyen maddeler eskisine BİREBİR eşit değilse dosya yazılmıyor.

**Kuru kip, onarılmış betik, bugünkü veri** (`--uygula` YOK; `data/` temiz kaldı):
```
SAYAÇ  değişen 189 · zaten böyle 5 · kayıt yok 0 · eski tutmuyor 2 · şartı sağlamadı 0
SINIF  A 19 · AK 10 · B 109 · C 50 · E 1   (kapsam_genis kaldırılan 137)
ÖNGÖRÜ  şimdi app.js ODAKSIZ 55 · BEYANLI 137  →  sonra ODAKSIZ 4 · BEYANLI 0
8 dosyanın hiçbiri "YAZILMADI/DOKUNULMADI" vermedi (yeniden ayrıştırma eşitliği tuttu)
```

⇒ **Bugün koşarsa ne siler:**
- 137 maddede `kapsam_genis:true` silinir. 136'sının yerine odak yazılır. 1 E-sınıfı madde (`kronoloji_cin.js#25` Yongle) odaksız kalır: kamera Osmanlı'ya uçmak yerine durur.
- **0 odak alanı silinir.**
- 2 madde "ESKİ TUTMUYOR" diye **dokunulmadan** atlanır (`kronoloji_ozbek.js#40`, `#44`); başka bir odakları var ve üstüne yazılmaz.
- ⚠️ 10 AK kararı YAKLAŞIK `yer_kon` koordinatı yazar (betiğin kendi beyanı). `--konsuz` ile bunun yerine yedek `odak_yer` yazılabilir.

🔴 **BULGU — ODAK-ASYA-0080'in 196 kararının 189'u VERİYE HİÇ İNMEMİŞ:**
- Uygulayıcı `298c9733` ile 27 Eylül'de geldi. Aynı gün `26741c10` API'yi kaldırdı ve uygulayıcı o günden beri çöküyor.
- `kronoloji_sinir_asya.js`in son değişikliği 17 Eylül (`4132dd30`).
- Yani "üretici yeniden koşarsa odaklar silinir" endişesi bugün boşa: silinecek odak yok, çünkü hiç yazılmadılar.
- 137 Asya maddesi hâlâ BEYANLI, yani kamera o günün **Osmanlı** sınırına uçuyor (`odak_olc.py` başlığı: "odaksızlıktan KÖTÜ").
- ⇒ `--uygula`yı koordinatör koşturmalı (`data/` sahibi). Önce `--konsuz` kararı verilmeli.

**Onarım** (sınayıcıdaki W36 çaresiyle uyumlu, ölçülemeyen her durumda çıkış 2 ve hiçbir şey yazılmaz):
- `_oku` ve `yer_havuzu` yerelde, eski tanımların aynısıyla duruyor. Havuz kurulamaz ya da BOŞ çıkarsa → ÇIKIŞ 2.
- "Eski tutmuyor" süzgeci artık alana bakıyor: madde hiçbir odak alanı taşımıyorsa uygun (`yer_kon` · `yer_id` · `odak_kutu_kaynak` · `odak_yer` · `odak_kimlik`).
  - Eski `sinifla ∈ {BEYANLI, ODAKSIZ}` + boş alan şartının bugünkü karşılığı bu.
  - Tek fark `odak_kutu_kaynak`; eskiden yalnız `sinifla` üzerinden görülüyordu, şimdi doğrudan sayılıyor.
- ÖNGÖRÜ app.js'in gerçek çözücüsünden (`odak_olc.olc` → `arac/odak_cozum.js`) okunuyor. 8 dosya için TEK seferde ve **hiçbir dosya yazılmadan önce** ölçülüyor; arızada ÇIKIŞ 2 ve yarım yazım yok.
- Eski "sonra odak_olc ≠ sonra app.js" satırı düştü: o fark, kaldırılan Python kuralının kusuruydu.

**Sınav:**

| yön | koşul | sonuç |
|---|---|---|
| geçen | kuru koşu | çıkış 0. Çıktı, onarım sonrası iki ayrı koşuda birebir aynı (`UYARI` satırları hariç). |
| bozuk | `girdi.yukle` arıza (sahte modül), `--uygula` İLE | `ÖLÇÜLEMEDİ — yerleşim havuzu yok; HİÇBİR ŞEY UYGULANMAZ`, çıkış 2, `data/` temiz |
| bozuk | `girdi.yukle` → `[]` | aynısı, çıkış 2 |
| bozuk | `odak_olc.olc` → `{"hata":…}`, `--uygula` İLE | ilk dosyada `ÖLÇÜLEMEDİ … HİÇBİR ŞEY UYGULANMAZ`, çıkış 2, `data/` temiz |

Sahte arızalar, `girdi.py`ye (motor tuzu) dokunmamak için `runpy` + `sys.modules` enjeksiyonuyla verildi.

### ② `ARAC-D-RENK-0073-HATBOYA.py` · `-KOMSU.py` → ONARILDI
- Çare D-RENK-SINAV'daki ile aynı: dizin `argv[1]` ya da `D_RENK_SP`.
- Üç girdinin (`hatlar.json` · `govde1923.geojson` · `govde1923_idharita.json`) her biri yoksa ADIYLA basılıyor: `OLCULEMEDI`, çıkış 2.
- `SP + r"\x.json"` → `os.path.join(SP, "x.json")` (HATBOYA 4, KOMSU 3 yer; HATBOYA'nın çıktısı `hat_boya_1923.json` dahil).
- Ölçüm gövdeleri DEĞİŞMEDİ. Bunlar ölçüm aleti, geçti/kaldı sınavı değil; çıkış kodu eklenmedi.
- **Sınav** — sentetik fikstür: iki bitişik kare A|B ve aralarında dikey hat. Gerçek girdi EMRELIC'te üretilemez (`devletler_harita.js` yok).

| alet | iyi fikstür | bozuk fikstür | girdi yok |
|---|---|---|---|
| HATBOYA | `DOGRU-CIFT 8 (%100)` | `sol_taraf` ters → `TERS-CIFT 8 (%100)` · taraf C → `TEK-YAN-DOGRU 8 (%100)` | çıkış 2 |
| KOMSU | `komşu çift 1 · hatlı 1 · HATSIZ 0` | taraf C → `KOMŞU olan 0 · HATSIZ 1 (%100)` | çıkış 2 |

### ③ `arac/tahta.py` `_git_yarim()` — DOKUNULMADI
Koordinatörün hükmünü bekliyor (UMIT İRTİBAT iletti). → Hüküm geldi: EVET, aşağıda W36c.

---

## EK · W36c (6 Ekim 2026) — koordinatör kararları ③ ④

### ③ `arac/tahta.py` `_git_yarim()` → DIFF YAZILDI, UYGULANMADI
- Yama: [`TAHTA-GIT-YARIM-1006.diff`](TAHTA-GIT-YARIM-1006.diff).
  - **Temel commit:** `origin/main` = `d0877829`. `main`in `tahta.py`si bu temelle aynı.
  - `git apply --check -R` temiz. 2 dosya, +293/−9.
  - `makine/tahta-web` dalına (`20c5cea7`) DOKUNULMADI.
- **Değişiklik:**
  - `git_durum(kok=None)` → `{hal: SURUYOR|KABUK|YOK, sebep, git_dizini, ayrinti}`. Salt okur.
  - Git dizini git'e soruluyor (`rev-parse --absolute-git-dir`). Git yoksa `gitdir:` satırı okunuyor; bulunamazsa SÜRÜYOR sayılıyor (ölçülemedi ≠ temiz, kapı kapalıya düşer).
  - `_git_yarim()`in dönüş sözleşmesi DEĞİŞMEDİ: SÜRÜYOR ⇒ sebep dizgisi · KABUK/YOK ⇒ None. Bu yüzden iki çağıran (`yaz()` satır 756 · `_tazele()` satır 378) aynen çalışıyor.
  - **KABUK** süreç başına bir kez ADIYLA basılıyor: içeriği listeleniyor ve "kabuk SİLİNMEDİ, karar Emre'nin" deniyor. Yazımı ENGELLEMİYOR. `_tazele()` ona `rebase --abort` UYGULAMIYOR; kabuğa abort, autostash'i çalışma ağacına geri basabilirdi.
- **İmza seti:**
  - Koordinatör ölçütü (`git-rebase-todo` / `orig-head`) eksiksiz uygulandı.
  - Eski kapının imzaları (`head-name` / `onto`) **güvenli yöne genişletme** olarak KORUNDU: bunlardan biri varsa da SÜRÜYOR sayılıyor.
  - `rebase-apply` için `next` / `last` / `orig-head` / `head-name`.
  - ⚠️ Bu, ölçütün harfiyen hâli değil. 24 Eylül kabuğunda bu imzaların hiçbiri yok, yani sonuç aynı. Koordinatör daraltmak isterse tek satırlık değişiklik.
- **Sınav** — `denetim/ARAC-TAHTA-GIT-YARIM-SINAV-1006.py` (yeni), 27 soru.
  - Fikstürler gerçek git deposu: düz depo + aynı deponun worktree'si + git'siz dizin; geçici dizinde kurulup siliniyor.
  - Sorular: 2 YOK · 10 SÜRÜYOR · 10 KABUK (24 Eylül kopyası `rebase-merge` + `rebase-apply`, BOŞ dizin) · 1 git'siz · 2 iz · 2 CANLI.
  - 24 Eylül kabuğunun ASLI artık yok (yerine bugünkü canlı rebase kuruldu). İçeriği `697c6d32`nin kaydından birebir kopyalandı: yalnız `autostash` = `d33e2879`. `d33e2879` nesnesi bu depoda da `atlas-umit`te de yok; içerik zaten okunmuyor.
  - CANLI = EMRELIC `C:\atlas`'ın gerçek rebase'i (onto `a59e4b7b`). Dizinde 15 dosya; `git-rebase-todo` (BOŞ ama var) · `orig-head` · `onto` · `head-name` dolu. **Salt okundu:** dosyaların ad/boyut/mtime özeti sınavdan önce ve sonra AYNI. (`.git`in kendi mtime'ı başka git işlemleriyle oynuyor; o dizine sınav yazmıyor.)

| sınanan | sonuç | çıkış |
|---|---|---|
| YENİ kapı (diff) | 27/27 OK, `SONUÇ: temiz` · CANLI SÜRÜYOR sayıldı, dokunulmadı | 0 |
| ESKİ kapı (`origin/main`) — bozuk yön | **13 KUSUR**: worktree'de 5 SÜRÜYOR'u da kaçırıyor · 6 KABUK'u adıyla basmıyor · git'siz dizinde "temiz" diyor · ve 🔴 **düz depoda yalnız `git-rebase-todo` taşıyan bir rebase'i de görmüyor** (eski imza seti todo'yu içermiyordu; üçüncü kör nokta) | 1 |
| W36'da onarılan `ARAC-TAHTA-KAPI-SINAV-1003.py` (1006 diff) + YENİ kapı, worktree'de | W36'daki 4 KUSUR kapandı → `SONUÇ: temiz` (KABUK satırı adıyla basıldı) | 0 |

📌 Sınavın kendi kusuru da yakalandı ve düzeltildi: `shutil.rmtree(ignore_errors=True)` Windows'ta salt okunur git nesnelerini SESSİZCE silemiyor, `%TEMP%`te 4 fikstür dizini bırakmıştı (elle silindi). Artık salt okunurluk kaldırılıp siliniyor; silinemezse ADIYLA basılıyor. Düzeltme sonrası iki koşu: yeni kapı temiz/0 · eski kapı 13 KUSUR/1 · kalıntı 0.

⚠️ `yaz()`ın uçtan uca koşusu (tahtaya gerçek yazım + push) sınanmadı. Kapının iki çağıranı dönüş sözleşmesi üzerinden okundu.

### ④ Tüketici taraması — 3 ÖLÜ · 2 TARAYICI

Yöntem:
- Üçünün de dosyaya yazıp yazmadığına bakıldı: `writeFile` / `open(…'w')` / `json.dump` / `.write(` → **0**. Yalnız stdout'a basıyorlar. ⇒ "Çıktısını okuyan" ancak onları ÇAĞIRAN bir şey olabilir.
- `git grep -F <betik adı>` izlenen BÜTÜN dosyalarda koşturuldu, isabetler uzantıya göre KOD / BELGE diye ayrıldı.
- Desenle toplu koşturan bir koşucu da arandı: `arac/` + `denetim/` içinde `glob` / `listdir` / `readdirSync` + `denetim`.
  - 4 isabet çıktı (`_hukum_birlestir.py` → `HUKUM-*.json` · üç JS → `yer_yama_*.js`). Hiçbiri bu betikleri kapsamıyor.
  - `.github/workflows` yok, etkin git kancası yok.

| betik | KOD tüketici | BELGE anılışı | hüküm |
|---|---|---|---|
| ARAC-MANDA-SINAV-0906.js | **0** | 3: envanter · `oturumlar/ORTADOGU-1923.md:72,132` · `oturumlar/YONTEM-1923-SINIR.md:95` — ikisi onu **"Emsal"** (örnek kalıp) diye gösteriyor | EMEKLİYE ADAY — tüketici YOK (ölçüldü). ⚠️ Şartnameler onu kalıp diye işaret ediyor: emekli edilirse silinmemeli, işaret düzeltilmeli. |
| SINAV-KOSU8-BITIS-0907.py | **0** | 2: envanter · `denetim/PLAN-SINAV-KOSU8-0907.md:245` (tarihî plan) | EMEKLİYE ADAY — tüketici YOK (ölçüldü) |
| ODAK-OSMANLI-ANADOLU-0080-olcer-sinav.py | **0** | 1: envanter | EMEKLİYE ADAY — tüketici YOK (ölçüldü). Kendi bağımlılığı `…-kimlik.js`i `ODAK-OSMANLI-ANADOLU-0080-uygula.py` de kullanıyor; yardımcı ortak, sınav değil. |
| ARAC-SEFER-OK-SINAV-TARAYICI-0075.js | — | — | **TARAYICI — kapısı yok, beyanlı borç** |
| SINAV-VASSAL-GORUNUM-0907.js | — | — | **TARAYICI — kapısı yok, beyanlı borç** |

### 🔴 W36b ÖNERİMİN DÜZELTMESİ — ODAK-ASYA `--uygula` olduğu gibi KOŞTURULMAMALI
④'ün taraması `odak_olc` kaldırılmış API'sini kullanan **9 betik** buldu. Hepsi argümansız (kuru) koşturuldu ve hepsi çöküyor:
- 6 uygulayıcı: AFRIKA-AMERIKA · ASYA · AVRUPA-BATI · BALKAN · DOGU-ISLAM · OSMANLI-ANADOLU
- 3 yardımcı: AFRIKA-AMERIKA-olc · OSMANLI-ANADOLU-dok · …-olcer-sinav

Yani ODAK-0080'in hiçbir uygulayıcısı 27 Eylül'den beri koşamıyor. **Ama iş durmadı**: ODAK-KAPAT kendi yoluyla ilerledi (`575be146` · `1307745a` · `0ba4bfe9` · `2c0ec6ac`, 1-4 Ekim).

Ve 4 Ekim'de `2585791b` **"122 vekil `odak_yer` SİLİNDİ — yanlış odak yerine BEYANLI odaksızlık"** (D257):
- Hedef yer havuzda yoksa komşu şehri yazmak SESSİZ kusurdur.
- Silmek, yanlış şehre bırakmaktan doğrudur.

ODAK-ASYA'nın 194 karar satırından **51'i** metninde vekil işareti taşıyor ("gösterim" / "havuzda yok" / "en yakın havuz noktası"):
- B 37 · C 4 → bunlar ~41 vekil adayı.
- AK 10 vekil değil: gerçek yerin YAKLAŞIK koordinatı.

⇒ ODAK-ASYA'yı `--uygula` ile koşturmak, koordinatörün 4 Ekim'de bilerek sildiği sınıfı **geri yazar**.

W36b'deki öneri ("`--uygula`yı koordinatör koşturmalı") bu yüzden GERİ ALINDI. Önce kararlar D257 / `2585791b` ölçütüyle yeniden süzülmeli. Sayım metin işaretinden yapıldı, karar karar doğrulanmadı.

Uygulayıcı onarımı (1006b) yine geçerli: koşturulduğunda sessiz silme yapmıyor ve ölçemezse duruyor. Sorun koşturup koşturmamak, kodda değil.

---

## EK · W36d (6 Ekim 2026) — D257 süzmesi · tahta hükmü · MANDA işareti

**Temel commit:** `origin/main` = `481b0482`.
- 1006 ve 1006b bu temelde ZATEN var (`git apply --check -R` ikisinde de temiz). `TAHTA-GIT-YARIM-1006.diff` henüz yok.
- `data/` bu temelde `origin/main` ile aynı.
- Çıktılar:
  - [`ODAK-ASYA-SUZME-1006.diff`](ODAK-ASYA-SUZME-1006.diff): `denetim/ODAK-ASYA-0080-uygula.py` + yeni `denetim/ODAK-ASYA-SUZME-1006.tsv`, 196 madde.
  - [`MANDA-EMEKLI-1006.diff`](MANDA-EMEKLI-1006.diff): 2 dosya, 3 satır.
  - İkisinde de `-R` temiz. **UYGULANMADI.**

### ① ODAK-ASYA — D257 ölçütüyle yeniden süzme

**Ölçüt** (`dersler/D257` + `2585791b`): vekil = *hedef yer havuzda yok ve onun yerine BAŞKA bir şehir yazılmış* ("kapı ötmesin diye komşu şehir"). Hüküm: *odaksız bırakmak > yanlış şehre bırakmak*.

**W36c'deki "41 vekil" sayımım ölçüt değil METİN İŞARETİYDİ ve şişkindi.** "havuz noktalarına" ifadesi bütün sınır kesimi gerekçelerinde geçiyor; bölge temsilleri de aynı kelimeleri taşıyor. Karar karar okununca 51 işaretli kararın gerçek dağılımı:
- 5 VEKIL-NOKTA
- 26 bölge temsili ve 49 sınır kesimi işaretli olanlarla birlikte ayrıştı
- C'deki 9 işaretli karar devletin kendi kimliği; şehir vekili değil.

| kova | adet | ne | D257'ye göre |
|---|---|---|---|
| **VEKIL-NOKTA** | **5** | belirli bir yer havuzda yok, yerine BAŞKA nokta: Singhasari→Malang · Pekan Tua→Johor · Mey-Tuble→Balasagun · Anandpur→Lahor+Amritsar (kutu Anandpur'u içine almıyor) · Kunduzca→Samara | **ODAK YAZILMAZ.** Diff bunu uyguluyor: yalnız `kapsam_genis` kalkıyor, kamera Osmanlı'ya uçmak yerine duruyor |
| **AK-YAKLASIK** | **10** | gerçek yerin yaklaşık koordinatı (`yer_kon`), vekil değil | AYRI kova, hüküm koordinatörde. 🔴 Yedekleri (`--konsuz`) **10/10 VEKİL** (Fetihpûr Sikri→Agra · Buksar→Patna · Göktepe→Krasnovodsk+Serahs…) ⇒ `--konsuz` artık REDDEDİLİYOR (çıkış 2). Kovanın tamamı `--kova-atla AK-YAKLASIK` ile dışarıda bırakılabilir |
| B-BOLGE-TEMSIL | 26 | metindeki BÖLGE kendi havuz noktalarıyla çerçeveleniyor (Pencap→Lahor+Amritsar · Bengal→Gaur · Dekken→3 nokta · orta Çin…) | vekil değil: kutu bölgeyi içine alıyor. Koordinatör farklı düşünürse `--kova-atla B-BOLGE-TEMSIL` |
| B-SINIR-YAKA | 49 | sınır kesimi: kutu hattın iki yakasındaki gerçek noktalardan kuruluyor; 5'inde ara nokta havuzda yok ama kutunun İÇİNDE (Kiahta, Kumaon, Dhundwa, Sikkim, Simla/Assam) | vekil değil |
| B-GERCEK | 30 | ad maddenin kendi metnindeki yer (15'i yazım farkı: Mültan/Multan · Bîder/Bîdar · Leknevtî/Gaur…) | yazılır |
| A-GERCEK | 21 | `yer_id`, gerçek yer (7'si yazım farkı) | yazılır |
| C-KIMLIK | 51 | devletin kendi toprağı (`odak_kimlik`) | yazılır |
| E-ODAKSIZ | 4 | zaten odak yazılmıyor | — |

- Kod (`kova()`) ile elle kurulan sınıflandırma **196/196 aynı**.
- Madde madde liste `denetim/ODAK-ASYA-SUZME-1006.tsv`de. Sütunlar: dosya · t · başlık öneki · sınıf · kova · yazılacak alan · W37 aynı olay.
- ⚠️ VEKIL-NOKTA sınırı bir yargı. D257 "komşu şehir"e mesafe eşiği vermiyor. Singhasari ile Malang çok yakın olabilir; mesafeyi kaynaklı koordinatla ölçmedim. Kova kararı koordinatörün.

**Kuru koşu** (onarılmış uygulayıcı, `--uygula` YOK; `data/` temiz):
```
varsayılan         değişen 186 · zaten böyle 8 · eski tutmuyor 2 · şartı sağlamadı 0
  KOVA  A 19 · AK 10 · BÖLGE 26 · B-GERÇEK 29 · SINIR 49 · C 50 · E 1 · VEKİL-NOKTA 2
  app.js  ODAKSIZ 55 → 9 · BEYANLI 137 → 0      (W36b: 189 değişen, ODAKSIZ → 4)
--kova-atla AK-YAKLASIK,B-BOLGE-TEMSIL   değişen 150 · ODAKSIZ → 29 · BEYANLI → 16
--konsuz           REDDEDİLDİ, çıkış 2
--kova-atla YOK    bilinmeyen kova, çıkış 2
```
VEKIL-NOKTA'nın 2'sinde yalnız `kapsam_genis` kalkıyor. Öteki 3'ü zaten `kapsam_genis` taşımadığı için "zaten böyle" sayılıp dokunulmuyor; ODAKSIZ kalıyorlar.

**W37 (KRONOLOJI-COK) ile çakışma:**
- Dosya düzeyinde **ortak dosya 0**: ODAK-ASYA 8 dosya (`kronoloji_sinir_asya/cin/orta_asya/ozbek/hindistan/guney_asya/japonya/timurlu`), W37'ninkiler `kronoloji_cok_*` (56 dosya, 3084 madde). Yazım çakışması imkânsız.
- Ama **aynı olayı anlatan 4 madde** var. Önce aynı yıl + ≥2 ortak özel kelime (47 aday) ile süzüldü, sonra elle okundu:
  - `sinir_asya` 1858-05-28 Aigun ↔ `cok_rusya` 1858-05-28 (W37 tarafı odaklı)
  - `ozbek` 1538 Ubeydullah Han ↔ `cok_ince_misir_orta_asya` 1538 (odaklı)
  - `ozbek` 1645 Ebulgazi ↔ `cok_ince_misir_orta_asya` 1645 (odaklı)
  - `sinir_asya` 1370 Melik Ahmed Handeş ↔ `cok_orta_asya2` 1370 Malik Raja/Farukîler (W37 tarafı **ODAKSIZ** — W37 buna odak yazarsa ODAK-ASYA'nın BÖLGE kararıyla (Asîrgarh+Burhânpûr) tutarlı olmalı)
- 4'ü TSV'nin son sütununda. W37 ODAK-ASYA'nın 8 dosyasına dokunmuyorsa liste karşılıklı ayrık.

### ② tahta.py → GENİŞLETİLMİŞ imza seti iner
Koordinatör hükmü: *yanlış SÜRÜYOR güvenli, yanlış YOK güvensiz.* `TAHTA-GIT-YARIM-1006.diff` olduğu gibi geçerli. Ek iş yok.

### ③ MANDA → emekli, SİLİNMEZ, atıflar işaretlendi
- `oturumlar/` kök değil, bu yüzden doğrudan diff yazıldı:
  - `ORTADOGU-1923.md:72` → "⚪ EMEKLİ SINAV, EMSAL OLARAK KORUNUYOR (… koşturma, kalıp olarak oku)"
  - `ORTADOGU-1923.md:132` · `YONTEM-1923-SINIR.md:95` → "(⚪ emekli sınav, emsal olarak korunuyor — W36)"
- 🟡 Yan bulgu (dokunulmadı): `ORTADOGU-1923.md:71` hâlâ `denetim/yer_yama_manda_0906.js` diyor. Dosya `415d18ac` ile `data/`ya taşındı.

---

## EK · W36e (6 Ekim 2026) — vekil mesafeleri · mühürlü kuru koşu · MANDA yolu

**Temel commit:** `origin/main` = `ce885ec2`.
- W36d'nin iki diff'i bu temelde henüz YOK.
- Yenilenen iki diff (`ODAK-ASYA-SUZME-1006.diff` · `MANDA-EMEKLI-1006.diff`) bu temelden çıkarıldı ve W36d sürümlerinin YERİNE geçiyor. İkisinde de `-R` temiz. UYGULANMADI.
- 8 kronoloji dosyası `481b0482` ile aynı; W36d ölçümleri geçerli.

### ① Beş VEKIL-NOKTA çiftinin mesafesi
- Gerçek yer: GeoNames (geonames.org yer adı sözlüğü, arama sayfası). Havuz noktası: `girdi.yukle()`. Büyük daire hesabı.
- Beş gerçek yerin HİÇBİRİ veride yok; D257'nin tam vakası.

| karar | gerçek yer (GeoNames) | havuz noktası | mesafe | kova |
|---|---|---|---|---|
| sinir_asya 1292 Kertanagara | Singosari, populated place, Kab. Malang (−7,892; 112,666) | Malang (−7,98; 112,63) | **10,5 km** | 🔵 **VEKIL-BITISIK** (yeni, ayrı) |
| hindistan 1699 Guru Gobind Singh | Anandpur (31,239; 76,503) | Lahor · Amritsar | 207,8 · 160,7 km — Lahor–Amritsar kutusunun ~160 km DIŞINDA | VEKIL-NOKTA |
| timurlu 1391 Kunduzca | Kondurcha ırmağı (stream noktası 53,650; 50,253) · Nizhnyaya Kondurcha (53,976; 50,374) | Samara (53,2; 50,15) | 50,5 · 87,6 km | VEKIL-NOKTA |
| sinir_asya 1530 Alâeddin Riâyet Şah | Pekan Tua — **GeoNames'te YOK** (arama yalnız Pahang'daki Kuala Pahang/Pahang Tua'yı veriyor, yanlış yer) | Johor (1,493; 103,741) | **ÖLÇÜLEMEDİ**. Kota Tinggi → Johor 32,5 km, ama Kota Tinggi Pekan Tua DEĞİL; yalnız yakınlık göstergesi | VEKIL-NOKTA |
| orta_asya 1847 Kenasarı | Mey-Tuble — **GeoNames'te YOK** ("Maitobe" de yok) | Balasagun (42,76; 75,24) | **ÖLÇÜLEMEDİ** | VEKIL-NOKTA |

**VEKIL-BITISIK (yalnız Singhasari):**
- 10,5 km. Singosari, Malang kabupaten'inin ilçesi; havuzun "Malang" noktasıyla bitişik.
- D257'nin "BAŞKA şehir" tanımı tutmuyor ⇒ ayrı kovaya alındı ve **odak YAZILIYOR** (`odak_yer:["Malang"]` + `kapsam_genis` kalkar).
- Koordinatör bunu da vekil sayarsa tek satır: anahtarı `VEKIL_BITISIK`ten `VEKIL_NOKTA`ya taşımak. ⚠️ `--kova-atla VEKIL-BITISIK` ise maddeyi BEYANLI bırakır (kamera Osmanlı'ya uçar), o yüzden önerilmez.

**Kalan dört VEKIL-NOKTA İNİYOR** (odak yazılmaz):
- İkisi ölçüldü ve uzak.
- İkisi ölçülemedi: bitişik olduğu gösterilemedi. Kapalı yön, yani odak yazmamak, güvenli yön.

### ② Kova hükmü uygulandı
- AK-YAKLASIK `--kova-atla` ile dışarıda.
- B-BOLGE-TEMSIL 26 ve B-SINIR-YAKA 49 iniyor.
- Diff'te başka kova değişikliği yok: W36d'ye göre yalnız Singhasari NOKTA → BITISIK.

### ③ Kuru koşu — `--kova-atla AK-YAKLASIK` · ÖNGÖRÜ MÜHÜRLÜ

Öngörü ölçümden 43 sn önce yazıldı ve mühürlendi (`denetim/ONGORU-W36e.txt`, 09:22:36, sha256 `b6a01a15…`). W36d'nin ölçülmüş satırlarından türetildi:
- AK'nin 10'unda `kapsam_genis` yok, yani bugün ODAKSIZ.
- Singhasari W36d'de zaten "değişen"di (BEYANLI → ODAKSIZ).

| | öngörü | ölçüm (09:23:19) |
|---|---|---|
| değişen | 176 (186 − 10 AK) | **176** ✓ |
| BEYANLI sonra | 0 | **0** ✓ |
| ODAKSIZ sonra | 18 (9 + 10 AK − 1 Singhasari KUTULU olur) | **18** ✓ |
| şimdi | 55 · 137 | 55 · 137 ✓ |

```
KOVA  A-GERÇEK 19 · BÖLGE 26 · B-GERÇEK 29 · SINIR 49 · C 50 · E 1 · VEKİL-BİTİŞİK 1 · VEKİL-NOKTA 1
      (+3 VEKİL-NOKTA "zaten böyle": kapsam_genis taşımıyorlar, dokunulmuyor) · eski tutmuyor 2 · şartı sağlamadı 0
data/ dokunulmadı · çıkış 0
```

**"55→9" ile W36b'nin "55→4"ü** (mesajdaki "W36c" W36b'dir; 55→4 ölçümü W36b kuru koşusu):
- 4 → 9 farkı tam olarak **beş VEKIL-NOKTA**: W36b'de beşine de odak yazılıyordu (hepsi KUTULU oluyordu), W36d'de yazılmıyor.
  - 2'si BEYANLI → ODAKSIZ (Kertanagara, Alâeddin Riâyet Şah; `kapsam_genis` kalkıyor)
  - 3'ü zaten ODAKSIZ ve öyle kalıyor (Kenasarı, Guru Gobind Singh, Kunduzca)
  - ⇒ 4 + 2 + 3 = 9.
- Bugünkü 18'in açılımı: 9 + 10 (AK atlandı, ODAKSIZ kalır) − 1 (Singhasari VEKIL-BITISIK'e geçti, KUTULU olur) = **18**.

### ④ MANDA-EMEKLI paketine bayat yol eklendi
- `oturumlar/ORTADOGU-1923.md:71`: `denetim/yer_yama_manda_0906.js` → `data/yer_yama_manda_0906.js` (+ "415d18ac ile taşındı" notu). Dosyanın `data/`da var olduğu doğrulandı.
- Paket artık 2 dosya, 4 satır.
