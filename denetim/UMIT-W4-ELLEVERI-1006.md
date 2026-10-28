# UMIT-W4-ELLEVERI-1006 — P3 · S1 · VY

Temel: `origin/main` = `85c7e2dd00d486a89d4674bbdd36c2484dae5efd` · worktree `C:\atlas-w4` (detached)

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (hiçbir veri dosyası açılmadan)
- **P3:** Murad II 1. saltanat 1421 → 1444 ⇒ `saltanat_yil` ≈ **23** (dosya ondalık kullanıyorsa ~23,2).
- **S1:** `denetle.py` seferler dosyalarını mükerrer için taramıyor sanıyorum ⇒ denetle'de mükerrer sayısı **0 azalır** (değişmez); çıkış kodu ÖNCE = SONRA.
- **VY:** `kisiler.js` bugün **288** (rapor ölçümü) ya da üstü.

## 0.1 Öngörü tuttu mu
- **P3: TUTTU** — kaydın kendi `from:"1421-06"` → `to:"1444-08"` = 23,17 yıl ⇒ **23** (dosya tam yıla yuvarlıyor: `osman1` 27,25→27, `mehmed2` 2,08→2, `murad2` 2. saltanat 4,42→5).
- **S1: TUTTU, ama SORU yanlıştı** — `denetle.py` çıktısı ÖNCE/SONRA birebir aynı (yalnız süre satırı farklı); `mükerrer madde` 112 → 112. `denetle.py` SEFERLER'i okumaz (yalnız `SAVASLAR` penceresi, satır 6185); "mükerrer madde" kronoloji maddesi çiftidir, sefer değil. ⇒ Sefer mükerreri `denetle.py`nin evreninde DEĞİL, ölçüm node ile yapıldı (§2).
- **VY: TUTTU** — `KISILER` **288** (node ile yüklenip sayıldı).

## 1. P3 — `data/padisahlar.js` `murad2` sıra 6
`saltanat_yil:28` → `23` (+ satır sonu gerekçe yorumu). 28 = 23 + 5 (iki saltanatın toplamı).
⚠️ Yan bulgu (DOKUNULMADI): aynı kaydın `tahta:` alanı ikinci saltanatı `1446-05` diyor, ikinci saltanat kaydının `from:` alanı `1446-09`. Hangisinin doğru olduğu kaynak ister (TDV `murad-ii`).

## 2. S1 — Abdülaziz'in Avrupa seyahati (1867): şartname DÜZELTİLDİ (UMIT İRTİBAT onayı)
**Ölçüm — "p0037'den çıkar" veri kaybettirirdi:**
- `seferler_p0037.js` TEK kayıt taşıyor; o kayıt `savaslar.js` SEFERLER[82]'nin KAYNAKLI GENİŞ hâli (dosya başı: PAKET-0037, H-0006, Emre isteği).
- `app.js seferKayitlariniTopla()` çıplak `SEFERLER`i başa koyar; `_mukerrerMi` (app.js:5747) İLK çizileni tutar ⇒ **ÖNCE: çizilen SEFERLER[82] (5 nokta), ELENEN SEFERLER_P0037[0] (27 nokta, kaynaklı).**
- Dosyanın kendi notu "ikisi birden OLMAZ (mükerrer ok)" diyordu; olan tam oydu (index.html bağladı, eski kayıt da kaldı).
- **SONRA (node ile ölçüldü):** "Avrupa seyahati" eşleşen kayıt 1 · SEFERLER[82] **27 nokta**, `kaynak` alanı VAR · SEFERLER_P0037 0 kayıt · `_mukerrerMi`nin bu çiftte elediği kayıt **yok** (çift kalmadı). SEFERLER toplam 86 (değişmedi, yer değiştirme).
- **② Alan karşılaştırması (HEAD, iki kayıt):** `ad` · `tur` · `sonuc` · `f` · `t` · `taraf` · `devlet` · `renk` · `rota` — **hepsi AYNI** (taraf/devlet/renk/rota ikisinde de yok). Fark YALNIZ `yol` (5 ↔ 27). ⇒ Birleştirme = `yol` değişimi + `kaynak` eklenmesi; başka alan kaybı yok.
- **`kaynak:` alanı** p0037 dosya başı yorumundan taşındı: [1] OGÜ SBD C.4 S.1 (2003) — günler · [2] Yurtbilir, Eklektik s.129-160 — ara duraklar · [3] TDV `abdulaziz` — çıkış/dönüş günü, ülkeler · ÇELİŞKİ notu ([2] "28 Haziran ... Dover", [1] esas) · VARSAYIM notu (Calais). Alıntı cümlesi p0037'de de yoktu, EKLENMEDİ (uydurma olurdu). Gün gün tablo p0037 dosya başında belge olarak kaldı.
- `seferler_p0037.js` SİLİNMEDİ: `window.SEFERLER_P0037 = [];` + başlık notu güncellendi. Gerekçe: `index.html:1671` ve `paket_kunye.json:1298` dosyayı yüklüyor; toplayıcı boş diziyi `SEFERLER_P0037 0/0` sayar, hata vermez.
- Görünür etki: haritada Abdülaziz oku düz 5 noktalı hattan (İstanbul→Paris→Londra→Viyana→İstanbul) deniz/tren/Tuna güzergâhlı 27 noktaya geçer.

## 3. VY — `VERI-YAPISI.md:544`
`247 kişi` → `288 kişi (ölçüm 6 Ekim 2026)`; parantezdeki "240'ı hükümdar/komutan" dökümü eski ölçümünkü olarak işaretlendi (yeniden ölçülmedi).
⚠️ Yan bulgu (DOKUNULMADI, kapsam dışı): bir alttaki satır (`:545`) da bayat — belge `SAVASLAR 169 · ANTLASMALAR 33 · SEFERLER 50` der, ölçülen **174 · 41 · 86** (SERILER 16 tutuyor).

## 4. Sınav
| | ÖNCE | SONRA |
|---|---|---|
| `py arac/denetle.py` çıkış | 2 | 2 |
| mükerrer madde | 112 (≤113) | 112 |
| kaynaksız `s:` / kayıt-kaynaksız | 1930 / 2301 | 1930 / 2301 |
| `py arac/denetle_anakronizm.py` (SEFERLER okuyan öbür araç) | çıkış 1, 91 anakronik | çıktı BİREBİR aynı |
- Çıkış **2** yamadan bağımsız: taze worktree'de `devletler_harita.js` yok (gitignore'lu çıktı) → `C:\atlas-umit\data`dan `devletler_harita.js` + `donemler.js` kopyalandı (4 Ekim üretimi); kalan 2 sebebi "Değişmez 8 körlük — defterde olmayan 10 (hat,gün)": üretim çıktısı bugünkü main'den bayat. İki koşuda da aynı.
- `egim_olc.py` (SEFERLER okuyan üçüncü araç) ölçülemedi: `DEM YOK` (çıkış 2) — yamayla ilgisiz.
- `node --check` üç dosya: temiz.
- `git diff --check`: temiz. Temiz main'de `git apply --check`: ileri OK, `-R` reddedildi — iki diff için de.
- Diff'ler LF (CR 0) · ELLE-VERI 8346 bayt, 4 hunk · VERI-YAPISI 1053 bayt, 1 hunk.
- Worktree geri alındı (4 dosya checkout, kopyalanan iki üretim dosyası silindi); `C:\atlas-w4` yerinde duruyor.

## 5. Uygulayana (③)
- **Uygulayan `py arac/paketle.py`yi koşturmalı:** `data/paket_NN.js` kaynak dosyaların sha'lı kopyası; `savaslar.js` · `padisahlar.js` · `seferler_p0037.js` değişince paket bayatlar. `paket_NN.js` / `paket_kunye.json`a DOKUNULMADI.
- `VERI-YAPISI-SAYI-1006.diff` kök `.md` — genel koordinatörün.

Temel: `85c7e2dd00d486a89d4674bbdd36c2484dae5efd`
