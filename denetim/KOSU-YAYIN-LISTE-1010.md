# KOSU-YAYIN-LISTE-1010 — `kosu_yayin.py` commit listesi ölçülerek türetiliyor

**Taban:** `origin/main` `1d5e2dfd` + `KOSU-YAYIN-KAPI-1010.diff` (dd33fb7e…). LISTE diff'i
**KAPI'nın ÜSTÜNE** uygulanıyor: `git apply --check` temiz; iki diff sırayla uygulanınca
geliştirme ağacıyla birebir aynı sonuç çıkıyor.
**Diff:** `KOSU-YAYIN-LISTE-1010.diff` (sha256 `ea361154…7c39`) · `arac/kosu_yayin.py` +32/−7 ·
**yeni** `arac/yayin_listesi.py` (371 satır, içe aktarılabilir, CLI'si var).
**Sınav:** `ARAC-KOSU-YAYIN-LISTE-SINAV-1010.py` (sha256 `9d5a4880…`) — yamalıda **11/11**,
yamasızda **1/11**. `sinav_isirma` sonucu: ISIRIYOR 10 · TESADÜF 1 (N0, sınavın kendi güvenliği) ·
GERİLEME 0 · EŞLEŞMEDİ 0.

## 1. Kural
`LİSTE = {index.html} ∪ (Y ∩ Ü) ∪ (Ü'de olup git'te izlenenler) ∪ {paket_kunye.json — listede paket varsa}`

- **Y — yayın kümesi:** iki kaynaktan gelir.
  - `index.html` içindeki `<script src="data/…">` satırları. HTML yorumları satır sayısı korunarak boşaltılıyor, yani yorum içindeki bir etiket sayılmıyor.
  - `js/*.js` içinde tırnak içinde yazılı `"data/….js"` sabitleri. Bunlar dinamik yükleyiciler: `geo_coz.js:195`, `app.js:1041` (ufuk) ve `app.js:11555` (petek).
  - Adı çalışma anında kurulan iki yükleyici (`"data/" + ad`; `app.js:9067` ve `:12258`) çözülemiyor. Bunlar sayılıyor ve yerleriyle basılıyor.
- **Ü — üretim kümesi:**
  - `uret_petek.py` ve `uret_devirler.py` **AST ile okunuyor; içe aktarılmıyor**. Bir `.js` sabiti, `open`/`io.open(...,"w"|"a")` çağrısına doğrudan ya da bir değişken üzerinden ulaşıyorsa "yazılır" sayılıyor.
  - Türevler ekleniyor:
    - `kodla.py`'deki `HEDEFLER` (AST ile `literal_eval`): kaynağı Ü'de olan hedefin parca, ust ve on dosyaları. Buna `on_dilim()`'in yazdığı `devlet_parca_on.js` de dahil.
    - `data/paket_kunye.json`: kaynağı Ü'de olan paket (devirler.js → paket_05.js).
- **Elle yazılan kaynaklar Ü'ye giremez**, çünkü üreteçler onları yazmıyor. Sınavda kirli `yerlesimler.js` ve kirli `css/style.css` commitlenmedi (N2).
- **Y − Ü commitlenmez:** yayında ama bu zincirin üretmediği dosyalar bunlar; bugün 64 tane (paket_* · kronoloji_* · olaylar_* …). Böylece başka bir oturumun yarım işi zincirle yayına sızmıyor. Eski betik de bunları commitlemiyordu. `kos_ve_yayinla`'nın `git add -A -- data` satırı ise hepsini alıyor; bu iş kapsam dışı, aşağıya bkz.

## 2. Durdurucular (commit ATILMAZ, her biri dosya adıyla basılır)
| Durum | Karar | Gerekçe |
|---|---|---|
| ① Listedeki dosya `.gitignore`'da | **DUR** | Site o dosyayı yüklüyor ama git onu taşımıyor ⇒ yayında 404. Üstelik pathspec commit'i bütünüyle düşer; eski K9 kusuru buydu. "Listeden sessizce çıkar" seçeneği **reddedildi**: yeni bir sessiz liste doğurur ve index'in yüklediği dosyanın yayına gitmediğini gizler. Durum "uyarı" olsaydı commit yine düşerdi, yani uyarı yalan söylemiş olurdu. |
| ② Listedeki dosya diskte yok | **DUR** | İzlenen bir dosyaysa pathspec commit onu SİLER; izlenmiyorsa commit düşer. |
| ③ BAYAT TÜREV | **DUR** | kodla türevinin `window.__XX_SHA` değeri ya da paket künyesindeki kısa sha, diskteki kaynakla tutmuyor. Commit atılsa yeni bölgeler/devirler ile ESKİ harita yayınlanırdı. Yayın kapısının kodlama kapısı türevi **kendi damgasıyla** kıyaslıyor, taze motor çıktısıyla değil (`denetle_yayin.py:1864-1895`). Bu sınıfı bugün başka hiçbir kapı görmüyor. |
| ÖLÇÜLEMEDİ: index/AST okunamadı · Y∩Ü boş · türevin kaynağı diskte yok · git ls-files ya da check-ignore koşmadı | **DUR** (ayrı kova) | `§3`: ölçülemeyen soru temiz değildir. |

## 3. Gerçek origin/main (`1d5e2dfd`) üstünde türetilen liste — `py arac/yayin_listesi.py --eski`
```
LİSTE (15): index.html
  data/bolgeler.js            ← index.html:1747   üretim uret_petek.py:5885→:5899, :8147
  data/devlet_harita_ust.js   ← index.html:1768   kodla ← devletler_harita.js
  data/devlet_parca_on.js     ← index.html:1787   kodla ← devletler_harita.js
  data/devlet_parcalar.js     ← js/geo_coz.js:195 (dinamik)
  data/donemler_on.js         ← index.html:1812   kodla ← donemler.js
  data/donemler_ust.js        ← index.html:1813
  data/donem_parcalar.js      ← index.html:1814
  data/paket_05.js            ← index.html:1138   paketle ← devirler.js
  data/petek_govde_parca.js · data/petek_govde_ust.js  ← js/app.js:11555 (dinamik)
  data/ufuk_bant_parcalar.js · data/ufuk_bantlari_ust.js ← js/app.js:1041 (dinamik)
  data/devirler.js            izlenen üretim (uret_devirler.py:456→:457)
  data/paket_kunye.json       listede paket var
FARK (eski → türetilen):
  − css/style.css  − data/altlik.js  − data/bos_alanlar.js  − veri-kaynak/motor_kara.geojson
      (bu zincir üretmiyor ya da yayında değil)
  − data/devletler_harita.js  − data/donemler.js  − data/petek_govde.js   (.gitignore'da)
  + data/devlet_harita_ust.js  + devlet_parca_on.js  + devlet_parcalar.js
  + donem_parcalar.js  + donemler_on.js  + donemler_ust.js  + paket_05.js  + paket_kunye.json
  + petek_govde_parca.js  + petek_govde_ust.js  + ufuk_bant_parcalar.js  + ufuk_bantlari_ust.js
  = data/bolgeler.js  data/devirler.js  index.html
SONUÇ: ÖLÇÜLEMEDİ 4 — taze ağaçta donemler.js/devletler_harita.js/petek_govde.js/
       ufuk_bantlari.js yok (gitignore'da) ⇒ türev damgaları kıyaslanamadı. Gerçek koşuda
       motor bu dosyaları üretir ve soru ölçülür. paket_05 künyesi = devirler.js ✓ taze.
```
Not: `motor_kara.geojson` izlenen bir dosya ama `data/` dışında ve yayında değil. Görev "yalnız data/" dediği için listeden çıktı. Zincir onu yeniden yazarsa dosya kirli kalır, commitlenmez.

## 4. 🔴 Bulgu: zincir yayın türevlerini ÜRETMİYOR
`kosu_yayin.py` (ve `kos_ve_yayinla.py`) **`kodla.py yay` ile `paketle.py yenile`'yi koşturmuyor**. uret_petek de kodla'yı çağırmıyor: AST'de `kodla` yalnız bir parametre adı olarak geçiyor. Yayındaki haritanın tamamı (devlet/dönem/petek/ufuk türevleri) ve devirler'in yayın kopyası (paket_05) kodla ve paketle ürünü.

⇒ Gerçek bir koşuda motor donemler.js'i yeniden üretir, türev bayat kalır ve ⑦a **BAYAT TÜREV** ile DURUR. Bu doğru davranış: eskiden zincir commit'i gitignore yüzünden zaten düşürüyordu (K9), ve düşmeseydi yeni bolgeler.js'i eski haritayla yayınlayacaktı.

Zincire `kodla yay` (4 hedef) + `on-dilim` + `paketle yenile` adımları eklenmeden zincir uçtan uca yayın yapamaz. Bu karar bu işin kapsamında değil.

## 5. Sınav (her soru taze `git init` deposunda; push/pull/powershell sahte; depo dışı git → 97)
| Soru | Yamalı | Yamasız (origin/main ham) |
|---|---|---|
| N1 gitignore'lu motor çıktısı diskte iken commit atılır | ✓ commit +1 | ✗ **commit +0, çıkış 0** (eski K9 düşüşü) |
| N2 commit = index + bolgeler + devirler; gitignore'lu, elle yazılan ve css yok | ✓ | ✗ |
| N3 türetme satırıyla basılıyor (index.html:9 · js/geo_coz.js:2) | ✓ | ✗ |
| N4 HTML yorumundaki `<script>` listeye girmiyor | ✓ | ✗ |
| N5 gitignore'lu dosya listede ⇒ DUR, adıyla | ✓ | ✗ |
| N6 türev diskte yok ⇒ DUR, adıyla | ✓ | ✗ |
| N7 bayat kodla türevi ⇒ DUR | ✓ | ✗ |
| N8 bayat paket ⇒ DUR | ✓ | ✗ |
| N9 türev kaynağı yok ⇒ ÖLÇÜLEMEDİ | ✓ | ✗ |
| N10 `--eski` CLI farkı adıyla basıyor | ✓ | ✗ (araç yok) |
| N0 depo dışı git yok | ✓ | ✓ (sınavın kendi güvenliği) |

Yamasızda N5–N9'un düşme sebebi çoğunlukla aynı: eski liste commit'i zaten düşürüyor ama **çıkış 0** veriyor ve hiçbir dosya adı basılmıyor.

## 6. Kapsam dışı / bulunamadı
- Zincirde kodla/paketle adımları yok (§4).
- `kos_ve_yayinla.py` `git add -A -- data index.html` ile data/ altındaki **her şeyi** alıyor, başka oturumların yarım işi dahil. Aynı türetme ona da bağlanmalı; bu iş istenmedi, dokunulmadı.
- Adı çalışma anında kurulan iki yükleyici (`app.js:9067` kaynaklı halka, `:12258` ek okuma) çözülemiyor. Bu zincir o dosyaları üretmediği için listeyi etkilemiyorlar; yerleri basılıyor.
- AST sınıflaması değişken adına dayanıyor. Aynı değişken iki dosya için kullanılırsa (`_byol`: bolgeler.js ve ufuk_bantlari.js) ikisi de "yazılır" sayılıyor. Bugün ikisi de gerçekten yazılıyor; ileride yanlış "yazılır" çıkarsa dosya fazladan Ü'ye girer, ama yine yalnız Y ile kesişirse listeye girer.
