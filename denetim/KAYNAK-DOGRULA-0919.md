# KAYNAK-DOGRULA — Gemini kaynak denetimi taslağının doğrulanması (19 Eylül 2026)

Sevk: 1.MURAT M-4572 · girdi: `gemini/KAYNAK-DENETIM-0919.json` (93 dosya, 1922 kayıt).
Yöntem: her kayıt gerçek `data/` dosyasında bulundu, kaynak alanı + şema seviyesi okundu;
kaynak iddiaları TDV gövdesi (sayfa çekildi, cümle okundu) ya da akademik/kurumsal kaynakla sınandı.

## 1. Vikipedi (7) + blog/forum (17) = 24 kayıt — TEK TEK

### 1a. GERÇEK sorun (10) — ne yapıldı

| # | Dosya · kayıt | Sorun | Yapılan | Kalan |
|---|---|---|---|---|
| 1 | `devletler.js` · harezm-halk-cumhuriyeti | tek dayanak Wikipedia | **DÜZELTİLDİ** → TDV `hive-hanligi` (M. Saray): «26 Nisan 1920'de Hârizm Halk Cumhuriyeti ilân edildi … 1924'te bu cumhuriyete son verilip» + TDV `ozbekistan` | t: YIL (1924) |
| 2 | `olaylar_ek8.js` · Buhara HSC 1920-10-08 | Wikipedia + msu.edu (okunmamış) | **DÜZELTİLDİ** → TDV `ozbekistan` (1920, YIL) + TDV `buhara` («6 Ekim 1920'de Buhara Hanlığı ilga edildi») | **8 Ekim GÜNÜ BULUNAMADI** (TDV 6 Ekim diyor, o da hanlığın ilgası) → tarih önerisi §4 |
| 3 | `olaylar_2s_0918.js` · Bambari 1903 | Wikipedia + adı geçen ama okunmamış kitap; "TDV kapsam dışı" notu YANLIŞ | **DÜZELTİLDİ** → TDV `orta-afrika-cumhuriyeti` (A. Kavas): «Fransa 29 Aralık 1903'te Ubangi-Şari sömürgesini kurduğunu ilân» | Bambari-Bria'nın fiilen alınış tarihi BULUNAMADI (t: YIL) |
| 4 | `olaylar_ek8.js` · ʻAi Noa 1819-11-01 | Wikipedia + okul bülteni + ders notu | **İŞARETLENDİ** — akademik dayanaksız; Kuykendall (1938) arandı, archive.org ödünç → OKUNAMADI | **BULUNAMADI** |
| 5 | `yer_yama_isvec.js` · Svensksund noktası | Wikipedia/latitude.to | **DÜZELTİLDİ** → Kotka Belediyesi yayını (bölge: Kotka takımadaları, Kymi ağzı) | nokta koordinatı akademik kaynakta BULUNAMADI (yaklaşık) |
| 6 | `devletler.js` · teksas-cumhuriyeti (+2 kronoloji) | Teksas'la ilgisiz Encyclopedia.com maddesi | **DÜZELTİLDİ** → Nance, *Republic of Texas*, Handbook of Texas (TSHA): 2 Mart 1836 · 29 Aralık 1845 (ABD yasası); fiilî devir 19 Şubat 1846 — fark yazıldı | — |
| 7 | `olaylar_ek8.js` · Timur Şah ölümü / Zaman Şah 1793-05-20 | Wikipedia + New World Encyclopedia | **DÜZELTİLDİ** → TDV `afganistan`: «Timur Şah'ın ölümü üzerine (1793), yerine geçen oğlu Zaman Şah» (YIL) | **20 Mayıs GÜNÜ BULUNAMADI** → tarih önerisi §4 |
| 8 | `yer_yama_1923_nepal_karayip.js` · Guatemala City | Wikipedia + NWE | **DÜZELTİLDİ** → Peláez Almengor & Gellert, *Guatemala City*, Encyclopedia of Latin American History and Culture: «founded officially in Ermita Valley on 2 January 1776» | s: zinciri denetlenmedi (§5) |
| 9 | `yer_yama_memluk.js` · Kal'atü İbn Selâme | Wikipedia + Encyclopedia.com | **DÜZELTİLDİ** → TDV `ibn-haldun` (S. Uludağ): «Benî Tûcîn beldesindeki İbn Selâme Kalesi'ne … müsveddelerini 779'da (1377) tamamladı» | koordinat akademik kaynakta BULUNAMADI |
| 10 | `d_sinirlar_afrika.js` · d1923-becuanaland-guneybati-afrika-caprivi | `dayanak.url` = Wikipedia | **YAZILMADI** — birincil kaynak ICJ *Kasikili/Sedudu* kararı (13 Ara 1999) PDF'i bot doğrulama duvarının (CAPTCHA) arkasında; okumadığım kaynağı yazmadım | öneri §4 |

### 1b. Gemini YANLIŞ POZİTİF (14)

- **Encyclopedia.com = blog DEĞİL (10):** arjantin, bolivya, sili, paraguay, uruguay, brezilya, dominik
  cumhuriyetleri, guatemala, kosta-rika, honduras. Encyclopedia.com, Gale/Scribner başvuru eserlerini
  (Encyclopedia of Latin American History and Culture, Worldmark) barındırıyor; kurumsal, kırmızı
  listede değil (§4 "kırmızıya girmeyen kurumsal kaynak adıyla yazılarak kabul edilir").
  Zayıflık: 7'si yalnız madde başlığını veriyor (eser/müellif yok). Kosta Rika ve Honduras müellifli.
- **suriye-arap-kralligi:** dayanağı TDV (`sam--suriye`, `suriye`, `faysal-i`, `halep`), alıntılı.
- **ekokuma_rivayet · tartisma-ibrahim-sisman:** forumu kaynak olarak KULLANMIYOR; "yalnız forum
  bulundu, TDV/akademikte yok" diyen bir `bulunamadı` beyanı.
- **kronoloji_portekiz · Lizbon 1640-12-01:** Encyclopedia.com (Scribner, *Europe 1450-1789*). Ayrıca
  TDV `portekiz` (K. Beydilli) yılı teyit ediyor (1640) — eklenmedi, gerek görülmedi.
- **yerlesimler_ek4 · Nuhayb:** kayıt Wikipedia'yı "TEK BAŞINA dayanak SAYILMADI" diye açıkça
  sınırlıyor; Osmanlı dönemine özgü kaynağın bulunamadığı zaten yazılı.

### 1c. Gemini'nin KAÇIRDIKLARI (yanlış negatif, tarama değil tesadüf — tam sayı ölçülmedi)
- `devletler.js` · **buhara-halk-cumhuriyeti** künyesi: tek dayanak Wikipedia → **DÜZELTİLDİ** (1. satırla aynı TDV
  cümleleri; f: 8 Ekim günü BULUNAMADI).
- `devletler.js` · bharatpur-cat (Gemini'nin ayrı `VIKI-TEK-KAYNAK-0919.json`'unda var, ana listede yok):
  kayıt kendisi "Wikipedia TEK dayanak" diyor — **dokunulmadı**, bu turun kapsamı dışında.
- `yer_yama_1923_nepal_karayip.js:32` Bhaktapur — "Wikipedia 'Battle of Bhaktapur' ile doğrulandı" —
  **dokunulmadı**.

## 2. BOŞ/belirsiz 1898 kayıt — 30'luk ÖRNEKLEM

Çekiliş: `random.seed(20260919)`, havuz = sınıfı "kaynak alani BOS/eksik" (1261) ∪ "kaynak adi belirsiz" (637).

| Sınıf | Sayı | Kayıtlar (örneklem no) |
|---|---|---|
| **ÖLÇÜLEMEDİ** — Gemini `Bilinmeyen ID / Bilinmeyen Tarih`, kayıt bulunamıyor | 3 | #0 yer_yama_kademe · #6 yer_yama_ok110 · #18 olaylar_ek12 |
| **ŞEMA yanlış pozitifi** — kaynak başka seviyede ya da tür kaynak alanı taşımıyor | 12 | yama dosyaları (kaynak başlıkta / bilerek düşürülmüş): #2 #5 #8 zend_kacar (başlıkta TDV `kacarlar`, `lutf-ali-han`) · #7 #12 #24 #29 tbmm_1920 (başlık: «`kaynak` alani DUSURULDU», asıl kayıtta duruyor) · #9 vassal_kid · `dayanak` dizisi: #27 d_sinirlar · kişi dizini (şemada kaynak alanı yok; 287 kaydın 21'i taşıyor): #1 #4 #19 |
| **Adı verilmiş akademik kaynak** — "belirsiz/boş" değil | 3 | #3 Kamen, *Spain 1469-1714* · #10 Elliott, *The Old World and the New* · #15 Handbook of North American Indians c.10 (Smithsonian) |
| **GERÇEK** — kaynak yok ya da adsız | 12 | #11 "(Payne)" (eser adı yok) · #13 "standart akademik kaynak — Galler Yasası" · #14 #22 "el-kitabi" · #16 Batangafo "bulunamadı" · #17 doğu-sumatra "bulunamadı — arandı" (dürüst beyan) · #20 Pungdo "standart atlas" (§4: atlas dayanak olamaz) · #21 gonja · #25 eve-notse · #28 karagve "standart akademik el kitabı" · #23 Roxburgh · #26 "genel Latin Amerika tarihi" |

**Oranlar (ölçülebilen 27):** gerçek **12/27 = %44** · Gemini yanlış pozitif **15/27 = %56**
(şema 12 + adlı kaynak 3). n=27'de ±~%19 (95%) — kaba ölçü. 1898'e taşınırsa kaba tahmin
~800 gerçek, ~1050 yanlış pozitif; ayrıca 1898'in ~%10'u (`Bilinmeyen ID` 112+) hiç ölçülemez.

**Gemini'nin şema kusurları (ayrıştırıcı hataları):**
1. Yama dosyalarını (`yer_yama_*`) asıl kayıt sanıyor; `kaynak` alanının dosya başlığında ya da
   asıl `yerlesimler` kaydında durduğunu görmüyor.
2. `tarih` alanına ilk rastladığı tarihi yazıyor (Sarâb → `1340-01-01` = s: dönem sınırı); kişi
   dizininde `tarih` = devlet kimliği (`"ingiltere"`, `"kirim"`).
3. `id` alanına `yer_id`i yazıyor (`Londra` 98 kez) → aynı dosyada birden çok kayıt eşleşiyor;
   tarih + id birlikte aranınca bulunuyor.
4. d_sinirlar'ın `dayanak[]` dizisini görmüyor.
5. "bulunamadı — <adlı kaynak> çevrimiçi doğrulanmadı" gibi adlı kaynak içeren beyanları BOŞ sayıyor.

## 3. Değişen dosyalar (commitlenmedi — paylaşılan `data/`, commit koordinatörün)

`data/devletler.js` (harezm, buhara-halk, teksas + 2 kronoloji) · `data/olaylar_ek8.js` (3) ·
`data/olaylar_2s_0918.js` (1) · `data/yer_yama_memluk.js` (1) · `data/yer_yama_isvec.js` (1) ·
`data/yer_yama_1923_nepal_karayip.js` (1). **Yalnız `kaynak:` metinleri** — tarih, geometri ve
dönem alanlarına DOKUNULMADI. `node` sözdizimi 6/6 OK. `py arac/denetle.py`: **SONUÇ temiz**. İlk
koşuda görülen "mükerrer madde 2 çift" ihlali ikinci koşuda 0'a indi; bu, benim dokunmadığım
alanlarda eşzamanlı bir değişiklikti.

## 4. Öneriler (karar koordinatörde)

1. **Tarih hassasiyeti (§4 D210, "kaynak yıl diyorsa yıl yazılır"):** Buhara HSC `1920-10-08` (olay +
   künye f:) ve Zaman Şah `1793-05-20` için günü veren akademik kaynak bulunamadı. Seçenek: ⓐ gün
   kalsın, kaynak alanı "gün BULUNAMADI" diyor (şimdiki hâli) · ⓑ `YYYY-01-01`e çek. **Önerim ⓐ.**
   Çünkü künye f:'nin değişmesi dönem ve Değişmez 2 zincirine dokunur; Buhara için 6 Ekim (TDV)
   ile 8 Ekim arasındaki 2 gün, ±30 gün ölçütünde fark yaratmaz.
2. **Caprivi `dayanak.url`:** ICJ *Kasikili/Sedudu Island (Botswana/Namibia)* kararı, 13 Aralık 1999
   (1890 Anglo-Alman Antlaşması md. III'ü aktarır). PDF bot doğrulama duvarının arkasında; Emre
   tarayıcıdan açıp alıntıyı teyit ederse url değiştirilebilir.
3. **Gemini taslağı veri düzeltmesinin girdisi OLAMAZ** (yanlış pozitif ~%56, kayıtların %6'sı kimliksiz).
   Kullanılacaksa önce ayrıştırıcıya 5 şema kuralı (§2) verilmeli.
4. Gerçek boşluk sınıfının çoğu künye "standart akademik el kitabı" (Afrika/Amerika künyeleri) ile
   `kronoloji_ingiltere/ispanya` "el-kitabi / (Payne)" etiketleri. Kapatılabilir, ama iş Afrika ve
   İngiltere başlıklarına bölünmeli.
5. Guatemala City `s:` 1821-09-15 → `guatemala`: 1822-23 Meksika İmparatorluğu ve 1823-1838/40 Orta
   Amerika Federasyonu dönemleri eksik görünüyor (§3.5 "devlet var, yeri yanlış" adayı) — ölçülmedi.
