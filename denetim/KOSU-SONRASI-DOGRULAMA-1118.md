# KOŞU SONRASI DOĞRULAMA — ufuk bandı (5/7/10) + B dolgu ayrı geçiş

*17-18 Kasım 2026 · HAVVA · koşu bitince ilk iş. Ölçülmeyen madde "ölçülmedi" yazılır, geçti sayılmaz.*
Kod yolları: `index.html` `#ufuk-segment` (radyo `name="ufuk-gun"` 5/7/10, 7/10 varsayılan `disabled`),
`data-katman="dolgu"` onay kutusu · `js/app.js` `bVeriKapisi`, `ufukYukle`, `ufukGuncelle`, `ufukSecimEsitle`,
`ufukSeciciKur`, `dolguGuncelle`, `ufukEtkin(t)` (5 gün yalnız `t < VERI_BASI` iken; 7/10 her zaman).

## 0. Önkoşul (koşu çıktısı → siteye)
- [ ] `py arac/denetle.py` çıkış 0 (coz-c sonrası) — çıkış kodunu yaz, cümleyi değil.
- [ ] `py arac/renk_olc.py` 0 görünmez; yeni künyeler (boyalar/D1) için komşu ΔE (Texas/Deseret vb. sınırda idi).
- [ ] `py arac/paketle.py yenile` + `py arac/surum_damgala.py`; `ufuk_bantlari_ust.js` + `ufuk_bant_parcalar*.js` takipli.
- [ ] Dosya boyutları: tek dosya < 95 MiB (push kapısı), parça dosyaları 45 MiB bölmeli; toplam `data/` MB koşu öncesine göre fark (tahmin +~5 MB; ÖLÇ).
- [ ] Pages boyut sınırı: site klasörü toplamı (GitHub Pages 1 GB) ve gzip sonrası ilk yük.

## 1. Yerel sunucu açılış (`mcp__Claude_Browser__*` veya Chrome)
- [ ] `py -m http.server` ile (Temp dışı klasörden) sayfa açılır; **konsol hatası 0** (`read_console_messages onlyErrors`).
- [ ] Ağ: açılışta `HEAD data/ufuk_bantlari_ust.js` YOK (tembel yoklama; yalnız seçiciye yaklaşınca) — 404 yok.
- [ ] Segment açılışta: 5 işaretli, 7/10 `disabled`; seçiciye pointerenter sonrası 7/10 açılır (`ufukDurum(true)`), rozet boş.

## 2. 5 / 7 / 10 bant davranışı
- [ ] 7'ye tıkla: `ufuk-bant-alan` görünür, `ufukTabanDegistir(true)` → taban katmanları gizli (bant tabanın YERİNE, H-0013); rozet sayı.
- [ ] 10'a tıkla: yalnız `<=10` bandı çizilir (`<=7` ile üst üste YOK); 5'e dön: bant kaynağı boş, taban geri açık.
- [ ] Tembel parça dosyaları (`ufuk_bant_parcalar*.js`) yalnız 7/10 seçilince iner (ağ kaydı); 5'te inmez.
- [ ] Başarısız yükleme simülasyonu (dosyayı geçici gizle): rozet sebebi yazar, sessiz 5'e zıplama YOK.
- [ ] **Tek bölge ölçümü (javascript_tool)**: aynı gün için 5/7/10 seçip `harita.querySourceFeatures("ufuk-bant")` toplam alan SIRASI: 5 ≤ 7 ≤ 10 (Roma −0150-06-15, Massalia, Zeyyani 1281-01-01, Hafsi 1229, Kastilya 1230, İsviçre 1800 için).
- [ ] Monotonluk koşu logu: `MONOTONLUK` satırı gerçek ihlal sayısı; beklenen borç: Cenevre/Leman 121 km² (cenevre-cumhuriyeti 1536, beyanlı). Başka gerçek ihlal → DUR, rapor.
- [ ] 1281 öncesi tarihte (örn. 1000-01-01, −0150): 5 günlük bant YALNIZ `t < VERI_BASI` iken etkin; 7 ve 10 her zaman — üçünde de konsol hatası yok.
- [ ] **Seyrelt düzeltmesi görsel kanıt**: Zeyyani 1281 (Cezayir iç ~20 000 km² bloğu geri), Empuries 819, Provence 1000 — önce/sonra ekran görüntüsü.
- [ ] Tarih çubuğunu kaydır (10 farklı gün, 1281-öncesi/sonrası): bant+taban titreme/boşluk yok; `ufukImza` yeniden yazımı gecikmesiz.

## 3. B dolgu (ayrı geçiş; `MOTOR_B_DOLGU` varsayılan KAPALI)
- [ ] Dolgu verisi YOKSA: kutu `disabled`, etiket "veri henüz üretilmedi" (`bVeriKapisi`); ufuk satırı `b-pasif` DEĞİL (iki bağımsız kapı, index.html yorumu).
- [ ] Dolgu geçişi koşulduktan sonra: `dolgu.py kosudan(..., ufuk_gun=)` ile 5/7/10 için ayrı üretim (r = gün×40,32/2); yalnız SEÇİLİ ufkun dolgusu görünür; ufuk değişince `dolguImza` sıfırlanır.
- [ ] A (sürtünmeli) ↔ B (A+dolgu) geçişinde bant aktifken dolgu ÇİZİLMEZ (B-dolgu overlay yok kararı) — doğrula.
- [ ] Süre/MB maliyeti: ek geçiş tek soğuk kesit 5g ≈354 s, 7g ≈398 s, 10g ≈522 s (ölçüm); tam geçiş maliyeti ölçülmedi → ölç, +%10 kuralı EMRELİC'e raporla.

## 4. Veri yönü / ek sınamalar
- [ ] Yeni künyeler haritada boyanıyor mu: chuzan-krallik, los-altos, deseret (BOYALAR); D1 topluluk künyeleri (Hawaii, Tahiti, Aborijin vb.) — nokta sahipsiz delik değil.
- [ ] Boşluk/enklav ölçümü: `arac/_dunya_bosluk.py`, `arac/_enklav_kara.py` → KASA'nın HARITA-KALITE-1117 tablosuna ekle.
- [ ] Değişmez 8a tavanı (283) ve D8a yeniden ölçüm: Doğu Avrupa 25 + Balkan 24 sınıflama dosyası (`D8A-DOGU-BALKAN-SINIF-1117.tsv`) A(8)+B(21) tur için güncelle.
- [ ] Mobil (375×812) ve karanlık mod: segment ve rozet taşmıyor.
- [ ] Yayın öncesi: `py arac/denetle_yayin.py` (≈9 dk) çıkış 0; push yalnız KASA kapısı (HAVVA itmez).

## Kanıt biçimi
Her madde için: ölçüm (sayı/komut/çıktı kısaltması) + hangi makine/ağaç + geçti/kaldı/ölçülmedi. Kalanlar `denetim/KOSU-SONRASI-SONUC-1118.md`.
