# KRONO-ASYA-UZAK-0929 — DÜZELTME ÖNERİLERİ (mevcut kayıtlarda kusur)

Hiçbir mevcut dosyaya dokunulmadı (`kronoloji_*.js` `KRONO-BAGLAMA-0929`un elinde; `devletler.js` koordinatörde).
Şema: dosya · kayıt · mevcut · önerilen · kaynak · gerekçe · **kesinlik** (🟢 kaynakla doğrulanmış · 🟡 kaynaksız ama tutarsızlık
SAYILARLA gösteriliyor · 🔴 şüphe, sınanmadı).

## D1 🟡 Nerçinsk Antlaşması — ÜÇ dosya, üç GÜN, biri Julian takvimi
| Dosya | `t` | Kaynak alanı |
|---|---|---|
| `kronoloji_cin.js` | 1689-09-07 | Cambridge History of China cilt 9 · «WebSearch ile tarih doğrulandı» |
| `kronoloji_rusya.js` | 1689-09-07 | Riasanovsky & Steinberg, A History of Russia |
| `kronoloji_sinir_asya.js` | **1689-08-27** | IBS No. 64 China–U.S.S.R. (rev. 1978) |
- Tanı: 1689-08-27 **Julian (eski takvim)** günüdür; 1689'da Julian→Gregoryen +10 gün ⇒ **6 Eylül**. Haritadaki Nikolayevsk
  kırılması da `1689-09-06` (yani bu çevrim). Çin yönteminde 7 Eylül. **Aynı olay için üç gün: 08-27 / 09-06 / 09-07.**
- Önerilen: `kronoloji_sinir_asya.js` satırı Gregoryen'e çevrilsin (1689-09-06 ya da 09-07) ve `gun:` alanına «27 Ağustos 1689
  (Jul.)» yazılsın; ikisi arasındaki 1 günlük fark (Rus/Çin metinleri) ayrıca notlansın. Aynı olay üç kez var (`t`+`b` farklı olduğundan
  mükerrer sayılmıyor) — biri ana, ötekiler `sinir` kaydı sayılabilir.
- Kesinlik: takvim çevrimi **hesap** (kesin); 6/7 Eylül farkı 🔴 (kaynak sayfası açılmadı).

## D2 🟡 Üç Vasal İsyanı — başlangıç günü
- `kronoloji_cin.js` · `t:1673-12-01` «Üç Senyörlük İsyanı (San Fan) başladı» · kaynak «Cambridge History of China, cilt 9».
- Künye `san-fan` `f:1673-12-28`. Web özetleri de 28 Aralık 1673 (Wu Sangui'nin isyan bildirisi) diyor. **27 günlük fark.**
- Önerilen: `t` → **1673-12-28** (kaynak sayfasıyla sınandıktan sonra); künye zaten 28'i taşıyor. Not: 1673-12-01 bir «başlangıç
  yılı» işareti olabilir (CHC 9'da tek bir gün yerine aylık anlatım) — ölçülemedi.

## D3 🟡 Künye `pingnan` — f:1855-01-01 bir yıl erken
- `devletler.js` `pingnan` `f:1855-01-01…t:1873-01-15`. Atwill (2005) başlığı **1856–1873**; Kunming katliamı Mayıs 1856,
  Dali'nin alınışı Eylül-Ekim 1856, başkomutan ilanı 23 Ekim 1856 (web özeti).
- Önerilen: `f` → **1856-…** (kaynak: Atwill 2005). `t:1873-01-15`: Du Wenxiu'nun ölümü 26 Aralık 1872; Dali'nin Qing'e geçişi
  Ocak 1873 diye tek kaynakta — 1873-01-15 günü kaynaksız bir sınır işareti olabilir.
- Etkisi: haritada Shunning 1858-05-17 kırılması `pingnan` başlangıcından değil sonradan geliyor; künyenin yanlış başlangıcı
  1855-1856 arasında yerleşimi haksız `pingnan` gösterebilir (bugün böyle bir yerleşim ölçülmedi).

## D4 🟡 Künye `yakub-beg` — t:1878-03-16 bir KAYNAK değil
- `devletler.js` `yakub-beg` `t:1878-03-16`; `kronoloji_cin.js` «Zuo Zongtang Doğu Türkistan'ı yeniden fethetti» aynı gün.
- Web özetleri: **Kaşgar 16-18 Aralık 1877**, Hoten Ocak 1878. **1878-03-16 için kaynak bulunamadı** (CLAUDE.md §4: «künyenin `t:`
  günü bir KAYNAK DEĞİLDİR»).
- Önerilen: `t` → **1877-12-18** (Kaşgar) ve maddenin başlığı «Zuo Zongtang seferi tamamlandı — Kaşgar'ın düşüşü»ne dönsün
  ya da 1878-03-16 için kaynak aransın. `KRONOLOJI_COK_ORTA_ASYA2` 1877-12-18 maddesi bu ikisini ayrı bırakıyor.

## D5 🔴 `farukiler` — f:1370-01-01 bağımsızlık günü değil, iktâ günü
- `devletler.js` `farukiler` `f:1370-01-01`. Encyclopaedia Iranica web özeti: 1370 = Firuz Şah Tuğluk'un Malik Raja'ya Talner+Karvand
  iktâsı; **bağımsız yönetim 1382'de başlar**. Künye ömrü ilk 12 yıl **Delhi Sultanlığı'nın iktâ sahibidir** (üçüncü sınıf:
  CLAUDE.md §3.5 — hangi polity'ye ait?). Öneri: `f:1382-01-01` ya da 1370-1382 için «vasal iktâ» beyanı. Yerleşim (Asîrgarh,
  Burhânpûr) etkilenir. Kaynak sayfası açılmadı 🔴.

## D6 🟡 Künye `timor-beylikleri` — t:1769-10-10 sınır işareti
- `devletler.js`: `t:1769-10-10`. Timor liurai'lerinin 1769'da sona erdiğine dair kaynak bulunamadı; 9 yerleşim o günden sonra
  `__BOSLUK__` (bkz. YERLESIM-ONERI Ö10). Öneri: künye ömrünü kaynakla gözden geçir (Portekiz Timoru: Dili başkenti 1769'da…
  🔴 sınanmadı).

## D7 🟡 Künye `hive` — f:1512-01-01 ile Harezm'in Özbek fethi 1505-1510
- `hive` künyesi Yadigâroğulları/Hîve Hanlığı'nı 1512'de başlatıyor (mevcut `kronoloji_ozbek.js` 1512-01-01 ile uyumlu); ama
  Harezm'de 1505-1510 arası Şeybânî yönetimi var ve o `buhara` künyesinde kalıyor — kusur değil, ARA notu. Kaynak: Britannica
  «Muḥammad Shaybani».

## D8 🔴 `kronoloji_cin.js` — Yongli'nin ölümü
- `t:1662-01-01` «Yongli yakalanıp idam edildi». Yongli'nin infazı için genel kabul gören gün **1662 yazı (Haziran)** olarak
  hatırlanıyor — **doğrulanmadı**; 1662-01-01 bir YIL işareti olabilir. Künye `guney-ming` `t:1662-01-01` aynı işareti taşıyor.
  Sınırdaki bir kusur: gün kaynaklı bulunana dek dokunulmasın; yıl doğru.

## D9 🟢 Mükerrer sınıfı — bulunmadı, ama tuzak var
- Bu oturumda tarama: `kronoloji_cin.js` (136) · `kronoloji_orta_asya.js` (205) · `kronoloji_ozbek.js` (73) · `kronoloji_hindistan.js` (131) ·
  `kronoloji_guney_asya.js` (153) ve öteki 7.689 madde: **aynı olayın iki farklı gününü YALNIZ Nerçinsk'te buldum** (D1).
  Yöntem: yazacağım her olay için yıl aralığı + anahtar kelime araması (adlar, hükümdarlar, yer adları) ve yeni maddelerin `t`+`b`
  çiftinin mevcut 7.689 kayıtla kesin eşleşmesi. **Bu bir TAM tarama DEĞİL** — yalnız yazdığım olayların komşuluğunu gördüm;
  Japonya (71) hiç taranmadı (defterde Japonya adayı yok).
- ⚠️ `t`+`b` kesin eşleşmesi «aynı olay, farklı başlık»ı yakalamaz; başka mükerrerler de olabilir — kapsam ölçülemedi.
