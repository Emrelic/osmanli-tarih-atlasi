# KRONO-ONCE1281-1010-A — 1281 öncesi Değişmez 2s borcu, kol A

10 Ekim 2026 · UMIT · model: Opus · **taban `23b6fb00`** (origin/main; `C:\atlas` HEAD `e54e60df` 1 commit gerideydi, ölçüm ayrı worktree `C:\atlas-umit-krA`'da yapıldı)

## Teslim
- Diff: `denetim/KRONO-ONCE1281-1010-A.diff` (LF, BOM yok, CR 0; temiz `23b6fb00` üstünde `git apply --check` ✓; `-R --check` tutmuyor, yani zaten uygulanmış değil; **C kolunun diff'inin üstüne de temiz biniyor**)
- **YENİ DOSYALAR:** `data/olaylar_once1281_a.js` (4 madde, `window.OLAYLAR_ONCE1281_A`)
- Değişen: `index.html` +1 satır (`paket_04.js` satırının hemen arkası, `<script src="data/olaylar_once1281_a.js?v=r11995">`, paketlenmedi). `py arac/paketle.py yenile` ile pakete almak koordinatörde.
- Yazdığım dosya YALNIZ `data/olaylar_once1281_a.js` + `index.html`. B ve C kolları kendi dosyalarına yazarsa çakışma yok.

## Öngörü (ölçümden önce yazıldı)
4 tarih kapanır (1084-12-12 · 1097-06-19 · 1098-06-03 · 1147-03-23); 2 / 2t / mükerrer / odakta yeni açık 0. **TUTTU.**

## Birimler: kaynak (hepsi TDV, 10 Ekim'de GET 200, gövde okundu)
| birim | kırılma (atlas) | TDV slug | gün taşıyan cümle |
|---|---|---|---|
| 1084-12-12 Antakya | kazanç `selcuklu` | `antakya` · `suleyman-sah-i` | "12 Aralık 1084’te Kutalmışoğlu Süleyman Şah şehri ele geçirdi, bir müddet direnen kale ise 12 Ocak 1085’te düştü" · "10 Şâban 477’de (12 Aralık 1084) şehri … fethetti" |
| 1097-06-19 İznik | `selcuklu` → `bizans` | `iznik` · `haclilar` | "… şehri ona [Butumites] teslim ettiler (19 Haziran 1097)" · "İznik garnizonu da şehri Bizans imparatoruna teslim etmeyi tercih etti (19 Haziran 1097)" |
| 1098-06-03 Antakya | `selcuklu` → `antakya-prinkipsligi` | `antakya` · `haclilar` | "Fîrûz’un ihaneti sonucunda Antakya Haçlılar’ın eline geçti (3 Haziran 1098)" · "Antakya Prinkepsliği (1098-1268). 3 Haziran 1098’de Haçlılar’ın eline geçen Antakya …" |
| 1098-06-03 İskenderun | kazanç `antakya-prinkipsligi` | `iskenderun` | "1097’de Tankred tarafından zaptedilmiştir. Bu dönemde kurulan Antakya Prinkepsliği’nin sınırları içinde kalan İskenderun …". 🔴 **GÜN YOK** |
| 1147-03-23 Merakeş | kazanç `muvahhidler` | `merakes` · `murabitlar` | "… on bir ay süren kuşatmayla ele geçirdi (18 Şevval 541 / 23 Mart 1147)" |

## Kuyrukta zaten var mıydı (dosya:satır)
- 1084-12-12: `data/kronoloji_anadolu.js:471` "Antakya'nın fethi" · `devletler.js:10455` künye iskeleti
- 1097-06-19: `data/kronoloji_anadolu.js:495` · `devletler.js:1775` · `kronoloji_cok_once1281_anadolu.js:704` (yalnız `ic_not` içinde tarih anması)
- 1098-06-03: yalnız `devletler.js:9897` künye iskeleti
- 1147-03-23: yalnız `devletler.js:8585/8597` künye iskeleti
- Dördü de D2 evreninde değil. `kronoloji_cok_once1281_*` dosyalarında dört birimin hiçbirine ait **gerçek madde yok** (1097 yalnız bir iç-not cümlesi).

## Ölçüm: `PYTHONHASHSEED=0 py arac/denetle.py --ayrinti`, iki yönde
| | önce | Yol 1 (bu diff) | Yol 2 (yalnız ölçüm) |
|---|---|---|---|
| D2 evreni madde | 2223 | 2227 | 3187 |
| 2s AÇIK | 193 | **189** | 191 |
| 2sk kapalı (YER / TARAF) | 4237 (2122/2115) | 4242 (2127/2115) | 4256 (2137/2119) |
| 2sk yalnız-taraf görünür+maskeli | 2265 | 2265 | **2269 > tavan 2265** ⚠️ |
| 2 | 0 açık | 0 açık | 0 açık |
| 2t | 13 | 13 | **270** ✗ |
| mükerrer | 95 | 95 | **133** ✗ |
| YIL-TEMSİLÎ borç | 228 | 228 | 220 |
| çıkış | 2 (yalnız D8) | 2 (yalnız D8) | **1 İHLAL** |

- ① **Kendi birimlerim, adıyla:** 1084-12-12 Antakya · 1097-06-19 İznik · 1098-06-03 Antakya+İskenderun · 1147-03-23 Merakeş: dördü de AÇIK listesinden düştü. Kapanış YER kolundan geldi (YER +5 = 5 yerleşim-birim; TARAF 0).
- ② **Başka açılan birim:** 0. Önce/sonra çıktı farkı 20 satır; hepsi bu sayaçlar ve "en yakın madde" metinleri. 2 / 2t / 2i / mükerrer / konum / 1 / 1b birebir aynı.
- **Odak** (`py arac/odak_olc.py`, iki yönde): 4 madde 4 odaklı, ODAKSIZ 0, çözülmeyen atıf 0. Tarayıcı evreni 314 → 315 betik, OLAYLAR 1801 → 1805 (yani index.html bağlantısı tutuyor).
- **D8:** her iki koşuda da ÖLÇÜLEMEDİ (`devletler_harita.js` taze ağaçta yok). Benim diff'im motor çıktısına dokunmuyor.
- 🔴 **Bu sayaca 3 diff dokunuyor, tek başına ölçüm yapmadım** (yalnız A'yı ölçtüm; tavan önermiyorum).

## Yol 2: öneri DEĞİL, ölçüm sonucu "yapılmamalı"
Yedi `kronoloji_cok_once1281_*` dosyası geçici `olaylar_zzyol2_*` kopyalarıyla evrene katıldı, sonra silindi; ağaç temiz.
- 2s'den yalnız 2 tarih kapattı. **Benim 4 birimimden yalnız İznik'i kapattı**, o da bir `ic_not` cümlesindeki tarih anmasıyla (sahte kapanışa yakın). Kalan 3'ü açık kaldı.
- Bedeli: 2t +257 · mükerrer +38 · 2sk tavan aşımı. Kapsam değişikliği bu hâliyle tavanları patlatır.
- Hüküm koordinatörde. Benim ölçümüm: **Yol 2'nin bedeli kazancının çok üstünde.**

## Ölçtüm · bulamadım · istiyorum
- **Ölçtüm:** 4/4 birim kapandı, yeni açık 0, odak temiz, `apply --check` ✓ (A tek başına ve C'nin üstüne).
- **Bulamadım:**
  - İskenderun'un 1098-06-03 günü için kaynak yok: TDV yalnız "1097, Tankred" diyor. Atlas günü künyeden devralmış. Madde İskenderun'a gün iddia etmiyor; yalnız TDV'nin "prinkepslik sınırları içinde kaldı" cümlesini anıyor. Not: kapanış YER kolundan, çünkü `d` alanı İskenderun'u anıyor. Kapanışın günü buna rağmen kaynaksız; beyanı `ic_not_d`'de.
  - TDV `kilic-arslan-i` slug'ı 302 döndü (ölü slug, D211 ①). Kullanılmadı.
- **İstiyorum / öneriyorum (veri kalemleri, koordinatöre):**
  1. Merakeş'in 1147 öncesi Murâbıt dönemi atlasta yok (ilk dönem 1147-03-23 muvahhidler). TDV onu "Murâbıtlar’ın başşehri" diye anıyor ve `murabitlar` künyesi var (f 1056). Bu bir yerleşim kalemi.
  2. `kronoloji_anadolu.js:495` başlığı "I. Haçlı Seferi İznik'i aldı" diyor; TDV'ye göre teslim Bizans'a yapıldı. Kuyruk dosyası benim değil.
  3. C kolunun diff'inde `index.html` satırı yok. `olaylar_once1281_c.js` D2'de sayılır ama tarayıcıya yüklenmez (`_bagli_mi` sınıfı).
  4. `paketle.py yenile` ile `olaylar_once1281_a.js` pakete alınmalı.
