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
