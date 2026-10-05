# UMIT-W10-LEGO-1006 — MOTOR-LEGO-0925 tuz ölçümü (yalnız ölçüm)

Ağaç: `C:\atlas-w10` · detached `origin/main` = `8552686e` · ölçen: UMIT-W10-LEGO-1006 · 5 Ekim 2026

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi
Ön bulgu (ölçüm değil, git kaydı): iki .diff `denetim/` kökünde YOK; `51e77f88` (1 Ekim)
onları "zaten uygulanmış" diye `denetim/arsiv-yama/`ya taşımış (ileri=1 · geri=0).
- Ö1: bugün de ileri `--check` = HATA, geri (`-R`) = TEMİZ (yama main'de zaten içeride).
- Ö2: geometri tuzu (govde/osm/sb) `renkler.py`yi İÇERMEZ → CGK boyası onları öldürmez.
- Ö3: `girdi.py` BILINEN_ALANLAR eki — tuz `girdi.py` sha'sını içeriyorsa öldürür; yama
  geometri tuzundan `girdi.py`yi de çıkarmışsa öldürmez. Öngörüm: ÖLDÜRMEZ (yama amacı bu).
- Ö4: `uret_petek.py` değişikliği her katmanı öldürür.
- Ö5: col/kusat/dolgu katmanları hâlâ ESKİ (tam) tuzda olabilir → renkler/girdi onları öldürür.

## 1. Yama main'de var mı / uyuyor mu — ÖLÇÜLDÜ
Geçici indeks (`GIT_INDEX_FILE`=scratch, `git read-tree origin/main`), `git apply --cached --check`:

| diff (bugünkü yeri) | CR | satır | hunk | ileri | geri (-R) | hüküm |
|---|---|---|---|---|---|---|
| `denetim/arsiv-yama/MOTOR-LEGO-0925-yama.diff` (motor_onbellek.py + uret_petek.py) | 0 | 161 | 9 | **1** (`motor_onbellek.py:127`, `uret_petek.py:429` "patch does not apply") | **0** | ZATEN UYGULANMIŞ |
| `denetim/arsiv-yama/MOTOR-LEGO-0925-ayikla.diff` (uret_petek.py) | 0 | 54 | 1 | **1** | **0** | ZATEN UYGULANMIŞ |

- İkisi de `denetim/` kökünde YOK; `51e77f88` (1 Ekim, "6 uygulanmis yama arsive alindi") `git mv` ile
  `denetim/arsiv-yama/`ya taşıdı. `51e77f88` bugünkü `origin/main`in atası (ölçüldü).
- Satır sonu sorunu YOK (CR=0). "Uymuyor" ileri yönde çakışma değil: geri yön temiz ⇒ içerik main'de.
- Ö1 TUTTU. ⇒ **Soru 3 (yeniden üretim) BOŞ KÜME: üretilecek yama yok, yapısal çare zaten main'de.**

## 2. Tuz — koddan, satır numarasıyla (origin/main `8552686e`)
- `girdi.py:772` `motor_izi()` = sha256 of **uret_petek.py · renkler.py · girdi.py**.
- `uret_petek.py:576` **GENEL tuz** `_ONB_TUZ` = `surum` + `motor` (=motor_izi, üç dosya) +
  `onbellek_modulu` (motor_onbellek.py sha) + `ortam` (`:581` MOTOR_* ortam değişkenleri, `_ONB_ISLETIM`
  `:571` hariç).
- `uret_petek.py:604-608` **GEO tuz** `_ONB_GEO_TUZ` = aynı, ama `:606`
  `motor = {k:v … if k not in ("renkler.py","girdi.py")}` ⇒ yalnız **uret_petek.py + motor_onbellek.py + ortam**.
- `motor_onbellek.py:67-71` anahtar = sha256(**tuz** · katman · parçalar) — tuz anahtarı hesaplayan nesneden gelir.
- Hangi nesne hangi katmanın anahtarını kuruyor:
  - `_ONB` (genel): `k1` (:740 :779 :4215 :4682) · `col` (:4307 :4350) · `kusat` (:4872) · `dolgu` (:6307)
  - `_ONB_GEO`: `govde` (:6746 `_onb_parca_anahtar` → :6803/:6814) · `osm` (aynı işlev, :7528/:7536) · `sb` (:7623)
- Alt tuzlar içerik (geometri) özetidir, dosya değil: `_ONB_COL_TUZ` :4286 (COL+_SU_TAMPON WKB) ·
  `_ONB_KUS_TUZ` :4687 (kıyı tamponu WKB) · `_ONB_GOVDE_TUZ` :6571 (KARA WKB) · `_ONB_KIM` :2966 (lon,lat).

### Tablo — katman × dosya → tuzda mı
| katman | uret_petek.py | renkler.py | girdi.py | motor_onbellek.py | MOTOR_* ortam |
|---|---|---|---|---|---|
| k1 | ✔ | ✔ | ✔ | ✔ | ✔ |
| col | ✔ | ✔ | ✔ | ✔ | ✔ |
| kusat | ✔ | ✔ | ✔ | ✔ | ✔ |
| dolgu | ✔ | ✔ | ✔ | ✔ | ✔ |
| **govde** | ✔ | **✘** | **✘** | ✔ | ✔ |
| **osm** | ✔ | **✘** | **✘** | ✔ | ✔ |
| **sb** | ✔ | **✘** | **✘** | ✔ | ✔ |

### ① renkler.py (CGK boyası) öldürür mü?
- **govde/osm/sb: ÖLDÜRMEZ** (tuzda değil, :606). **k1/col/kusat/dolgu: ÖLDÜRÜR** (genel tuzda).
- ⚠️ Ama tuz dışı bir yan etki var — içerik anahtarından geçer: `uret_petek.py:1070-1074` `sp["d"] not in
  BOYALAR` ise `harita:` alt anahtarına yönlendirir, o da yoksa kayıt boyasız kalır (UYARI). CGK bugün
  künyesiz/boyasız ⇒ CGK'lı dönemler ya başka anahtara yönleniyor ya çizilmiyor. Boya eklenince CGK
  yerleşimleri YENİ bir `aktif` kümesi olur ⇒ **yalnız etkilenen gün×devlet gövdeleri** yeni anahtar alır
  (CGK + varsa önceki yönlendirme hedefi + komşu çevre `cevre` :6744). Bu DOĞRU geçersizleştirmedir, toplu ölüm değil.
  Bulunamadı: CGK'nın main'de `devletler.js` kimliği/`harita:` alanı (grep `cgk` → 0); yönlendirme hedefini ölçemedim.
- Genel katmanlar ucuz mu? Ölçmedim (koşturmak yasak). §9.1 notundaki koşu 14 sayıları (col 549 · kusat 2437 ·
  dolgu 1920 anahtar) bunların da boş olmadığını gösteriyor.

### ② girdi.py BILINEN_ALANLAR eki öldürür mü?
- **govde/osm/sb: ÖLDÜRMEZ** (tuzda değil). **k1/col/kusat/dolgu: ÖLDÜRÜR** (genel tuz, dosya sha'sı).
- İçerik yoluyla da öldürmez: `girdi.py:615-617` bilinmeyen alan yalnız `bilinmeyen` sözlüğüne düşer,
  `:639` UYARI basar; kayıt AYIKLANMAZ, YERLER değişmez ⇒ gövde anahtarlarının içeriği aynı. (Ö3 TUTTU)
- 📌 Not: genel tuz içerik değil DOSYA sha'sıdır — `girdi.py`ye yorum satırı eklemek bile k1/col/kusat/dolgu'yu öldürür.

### ③ uret_petek.py değişikliği öldürür mü?
- **HEPSİNİ öldürür** (iki tuzda da `motor_izi["uret_petek.py"]`). §9.1 ile uyumlu (Ö4 TUTTU).

### 🔴 Gözden kaçabilecek dördüncü öldürücü: ORTAM
- `"ortam"` (:581) İKİ tuzda da. `_ONB_ISLETIM` (:571-575) dışındaki her `MOTOR_*` değişkeni tuza girer.
  Koşu 20 `MOTOR_YURUYUS=1 MOTOR_YURUYUS_SAAT=40 MOTOR_UFUK_BANT=40,56,80 MOTOR_COL_UFUK_SAAT=56` ile koştu
  (`oturumlar/SABAH-1004.md`); bu dördü İŞLETİM listesinde YOK ⇒ tuzda. Bir sonraki koşu bu değerlerden
  BİRİNİ değiştirirse (ör. saat tavanı) **govde dahil her katman ölür** — renkler/girdi dokunulmasa bile.
  Bu değişkenlerin sonucu gerçekten değiştirip değiştirmediğini ölçmedim (bulunamadı); işletim mi sonuç mu
  sınıflandırması ayrı soru.
- Koşu başı uyarısı zaten var: `:620-638` `tuz_karsilastir` iki tuz için "değişen: …" basar.

## 3. Yama bayatsa yeniden üretim
**Gerekmiyor** — iki yama da main'de (geri yön temiz). Hunk sayıları kayıt için: yama 9 hunk (motor_onbellek.py
`tuz_karsilastir` :130-145 + uret_petek.py geo tuzu/katman satırları), ayıkla 1 hunk.

## 4. Sonuç — üç kalemin bekleme gerekçesi
- CGK boyası (renkler.py) ve BILINEN_ALANLAR eki (girdi.py) **govde/osm/sb önbelleğini öldürmez.** Öldürdükleri
  yalnız genel tuzlu k1/col/kusat/dolgu. ⇒ "Tam inşa koşusunu beklemek zorunda" hükmü **gövde için ölçüme
  dayanmıyor**; asıl soru genel katmanların yeniden inşa bedeli kabul edilir mi — o ayrı ölçüm (koşu logu).
- Koşu SÜRERKEN dokunma yasağı (§9.1 ③) ayrı ve hâlâ geçerli: `motor_izi_dogrula` (`girdi.py:818`) üç dosyanın
  sha'sını koşu ortasında sınar ⇒ HAVVA'nın koşu 20'si bitmeden dokunulmaz. Bu yasak tuzdan bağımsızdır.

## Sınır
- AST kanıtı (`denetim/ARAC-LEGO-zincir.py`) bugünkü main'e yeniden koşturulmadı — :600-603 yorumu "motor
  değişikliğinde yeniden koşturulur" diyor; 25 Eylül'den beri uret_petek.py değişti. Govde zincirine BOYALAR
  okuyan satır girdiyse ① hükmü yanlışlanır. ÖLÇÜLMEDİ (görev "koşturma").
- Ağaç `C:\atlas-w10` temiz bırakıldı; geçici indeks silindi; dört motor dosyasına ve sqlite'a dokunulmadı.
