# DENETIM-OLU-ETIKET-1009 — ölü devletin rengiyle boyanan toprak (HARİTA düzeyi)

Emre, 9 Ekim 2026, denetim türü ①: *"bir devlet sona erdikten sonra bazı bölgeler o devletin
etiketi ile kalmaya devam ediyor mu"*. Bu oturum **ölçer, düzeltmez**; hüküm koordinatörde.

## 0. Zemin
- `origin/main` = `46f9d882` (HEAD..origin/main = 0) · ayrık worktree · `py arac/kodla.py coz-c data data/devletler_harita.js`
  → 172,69 MB (yayındaki `data/devlet_harita_ust.js` çözüldü; diskteki eski dosya KULLANILMADI).
- Yayındaki gövdeler **KOŞU 21** (`14174ef7`, 7 Eki 03:33, r11964) üretimidir. `URETIM_IZI` girdi
  özetlerinden **18 dosya** bugünkü veriden farklı ⇒ yayın bugünkü veriye göre BAYAT (beklenen, `§9`).
- Künye: `data/devletler.js`, `node` ile (denetle.py'nin yöntemi), 897 künye. Boya anahtarı → künye
  eşlemesi **`id` ∪ `harita:`**; bir anahtara birden çok künye bakıyorsa pencerelerin BİRLEŞİMİ
  (ör. `bulgaristan` = 3 künye). Tarih karşılaştırması `date.toordinal` ile (dizgi değil ⇒ `pad()` tuzağı yok).

## 1. Öngörü (ölçümden ÖNCE yazıldı)
> Petek emilmesi ALANI değiştirir, ZAMANI değiştirmez: ölü X'in rengi D gününde ancak X'in D'de
> aktif bir `s:` kaydı varsa çizilir. ⇒ künye-sonrası boyama ⊆ 4c + bayat üretim + `harita:` paylaşımı.
> Pencere sayısı ~50-150; çoğu (c)/(b); **(a) NOKTASIZLIK zaman ekseninde vaka ÜRETEMEZ, ~0.**

Sonuç: sayı 91 (aralıkta) · (a)=0 **TUTTU** · ama öngörmediğim bir kova çıktı: **4c'nin 400 günlük
toleransı** (aşağıda §3) — öngörü 4c'yi kapsayıcı sanmıştı, değil.

## 2. Yöntem — üç beyan
1. **Günler: ÖRNEKLEME YOK, bütün günler.** Gövde `dnm[]` pencereleri arasında sabittir; her
   pencere `[f, t)` (app.js `aktifAralik`: `fi ≤ gün < ti`) ile künye birleşiminin `[kf, kt]`
   (kt dahil) farkı aralık aritmetiğiyle alındı. Evren: **585 kimlik · 4.282 pencere**, hepsi.
2. **Künye `t`:** `data/devletler.js` (worktree, `origin/main`), `id` ∪ `harita:`; 0 künyesiz
   anahtar, `DEVLET_HARITA`da `__BOSLUK__` penceresi 0 (o katman ayrı çiziliyor — muaf).
3. **Alan birimi: km²** — gövde parçalarının (dış halka − delikler) küresel alanı, R=6371 km;
   şiddet ölçüsü **km²·gün** (alan × ölü gün). Poligon sayısı kullanılmadı.

## 3. Ne ölçtüm
| Kova | Pencere | Kimlik | Ölü gün | milyon km²·gün |
|---|---:|---:|---:|---:|
| **Ölüm SONRASI boyama — TOPLAM** | **91** | **61** | 423.680 | 20.977 |
| ↳ B0 bugünkü veride `s:` YOK (bayat üretim) | 6 | 6 | 190.509 | 3.846 |
| ↳ `s:` VAR, kimliği 4c listesinde | 53 | 29 | — | — |
| ↳ `s:` VAR, **4c HİÇ GÖRMÜYOR** | **32** | **24** | — | — |
| (kapsam dışı) doğumdan ÖNCE boyama | 99 | 65 | 1.471.423 | 158.047 |

- **4c çapraz sınaması** (`denetle.degismez4`, bugünkü veri): asan 118 · once 325 · hayalet 0 —
  §1.5 ile uyuşuyor. 4c'nin 30 kimliğinden 29'u haritada ölüm-sonrası boyanıyor; 1'i (`macaristan`) değil.
- 🔴 **4c'nin kör noktası ölçüldü:** `degismez4` aşmayı yalnız `> HAYALET_TOLERANS_GUN` (400 gün)
  ise sayar. 400 gün ve altındaki aşmalar **hiçbir kapıda görünmüyor** ⇒ 32 pencere / 24 kimlik.
  En büyükleri: `mehdi` 138 gün × 1.060.343 km² (51 yer) · `cungar` 364g × 628.029 · `altinorda`
  58g × 776.821 · `memluk` 35+48g × 530.100/384.004 · `toungoo` 112g × 341.228 · `funj` 65g × 328.575.
- **(a) NOKTASIZLIK = 0 (zaman ekseninde).** `s:` kaydı olan 85 pencerenin **85'inde** ölü dilimde o
  kimliği taşıyan aktif `s:` kaydı var (`aktif_s > 0`); kaydı olmayan 6'sı bayat üretim (B0).
  Komşuluk ölü bir rengi **zamanda uzatmıyor**; yalnız var olan vakanın **alanını büyütüyor**
  (ör. `mehdi`: 51 yer → 1,06 milyon km²). Koordinatörün "kayıtlar temiz olsa bile komşuluk
  boyar" hipotezi bu evrende **0 vaka** verdi.

## 4. Sınıflama — MEKANİK ön-sınıf (kaynak okunmadı; hüküm DEĞİL)
`D205`: ilk iş sınıflandırma. Aşağıdaki sınıflar veriden türetilen **sinyallerdir**; (b)/(c)
ayrımı her vakada kaynak ister, o yüzden kesin sınıf "ölçülemedi" sayılmalı.

| Ön-sınıf | Pencere | Kimlik | Anlamı · olası çare |
|---|---:|---:|---|
| **B0** bayat üretim → (e)-benzeri | 6 | 6 | bugünkü veride kayıt yok; 9 Eki DALGA 1/2 düzeltmiş (`658a7552`, `f6ff142d`, `04971c2a`). **Sonraki koşu kapatır**, veri işi YOK |
| **H** hassasiyet içi (adayı) | 17 (+1 `bulgaristan`) | 17 | künye `t` = `YYYY-01-01` (yıl-temsilî) ve ölü dilim **aynı yıl içinde** biter. Yıl hassasiyetli bir künye için bu aşma **kusur olmayabilir**; ama künye kaynakta GÜN veriyorsa künye kısadır → (c) |
| **F** ardıl canlıydı | 40 | 29 | ölü dilimde kaydı devralan sahip (Osmanlı dahil) ZATEN canlı ⇒ ya kayıt geç devrediyor (çare KAYIT), ya bölgesel teslim gecikmesi gerçek ve künye kısa (c) |
| **BC** ardıl doğmamış | 12 | 12 | devralan sahip ölü dilim başında yok ⇒ (b) ARDIL EKSİK ya da (c) KÜNYE KISA |
| **F+BC** karışık | 16 | 6 | (`ming` 1644 · `ilhanli` 1353-71 · `maratha` · `avusturya` 1918-19 · `timurlu` · `bicapur`) |
| (d) `__BOSLUK__` | 0 | — | bu katmanda yok |

**Dikkat çeken somut vakalar** (kaynak okunmadan, yalnız sinyal):
- **(c) adayı — künye kısa, polity sürüyor:** `mehdi` (künye 1898-09-02 Ömdürman; Halife Abdullah
  1899-11'e dek Kordofan'da) · `ispanyol-peru` (Ayacucho sonrası Yukarı Peru kralcıları 1825'e dek)
  · `qing` Kobdo 1912 · `toungoo` 1752 (künye yıl-temsilî, kayıt 1752-04-23).
- **(b) adayı — ardıl yok ya da kayıt ardılı atlıyor:** `toskana` 1860-03-22 → `italya` 1861-03-17
  (arada Sardinya beklenir) · `avusturya` 1918-11 → `itilaf-emaneti` 1919-09-10 (Dalmaçya/Galiçya
  10 ay Habsburg renginde) · `cungar` 1758 → Kaşgar/Hotan 1759 (arada Hoca yönetimi) · `malaka`
  1511 → `cohor` 1528 (17 yıl) · `pagan` 1297 → `ava` 1313 · `singhasari` 1292 → `majapahit` 1343.
- **F ve en uzunları — kayıt mı künye mi, kaynak ister:** `kazak-hanligi` 1847→1868 (21 yıl,
  479.349 km²) · `kuzey-yuan` 1691→1720 · `artuklu` 1409→1465 (Palu) · `mataram` 1755→1811 ·
  `filipin-racaliklari` 1571→1635 · `bizans` 1461→1479 (2 yer, 485 km²). **Bunlar 4c'de
  zaten var** (>400 gün); haritada görünür hâlleri bu tabloda.
- **F, kısa ve "fransa"/"venedik" tipi:** `fransa` 1792-09-22 sonrası Pondişeri/Çandernagor 1793'e
  dek *krallık* renginde — ardıl `fransa-cumhuriyet` canlı ⇒ kayıt ardıla geçmeli (sinyal güçlü).
  `venedik` 1797-05-12 → 1797-10-17 (30 yer): ardıllar canlı.

## 5. Ne bulamadım
- (b)/(c) **kesin** sınıfı: 0 vakada kaynak okundu (denetim kapsamı dışı) ⇒ **ölçülemedi**.
- KOŞU 21'in girdi özeti (`yerlesimler.js` `f67b7434…`) `origin/main`in son 80 sürümünde
  **bulunamadı** — koşu ara bir commit'ten başlamış olabilir; B0 hükmü bu yüzden "bugün kayıt yok"
  ölçümüne dayanıyor, "koşu anında vardı" ölçülmedi (git log -S ile 5/6'sının 5-9 Eki arası
  değiştiği görüldü; `bosna` için iz yok).
- H kovasında künyenin `t`si **gerçekten yıl hassasiyetli mi** (açıklayan alan, `D213`): okunmadı.

## 6. Ne istiyorum / öneriyorum
1. **4c toleransı ayrı kova olsun** (`denetle.py`, koordinatör/yazıcı işi): `0 < aşma ≤ 400 gün`
   bugün sessiz. Hayalet (`ihlal`) için tolerans meşru (teslim gecikmesi), ama 4c'nin sorusu
   "ölümü AŞIYOR mu" — 32 pencere/24 kimlik görünmüyor. Öneri: H adaylarını (yıl-temsilî künye,
   aynı yıl) ayrı say, kalanı (16 pencere / 12 kimlik) yeni tavanla dondur.
2. **B0 için iş yok** — sonraki koşu kapatır; koşudan sonra bu ölçüm tekrarlanırsa B0 = 0 beklenir.
3. (b)/(c) sınıflaması için kaynak okuyan bir kıta (Opus) — öncelik `km²·gün` sırasıyla:
   `kazak-hanligi`, `mehdi`, `yuan`, `pagan`, `malaka`, `cungar`, `avusturya`, `toskana`.

## Dosyalar
- `denetim/DENETIM-OLU-ETIKET-1009-olc.py` ölçüm · `-capraz.py` 4c çapraz · `-sinif.py` ön-sınıf
  · `-sinif.json` 91 pencerenin tam listesi (sınıf, alan, devralan).
- Yeniden üretmek: worktree + `coz-c` (§0), sonra
  `py olc.py <wt> sonuc.json` → `py capraz.py <wt> sonuc.json capraz.json` → `py sinif.py <wt> sonuc.json sinif.json`.
