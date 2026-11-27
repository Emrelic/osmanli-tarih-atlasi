# KOŞU SORUŞTURMASI — Koşu 40 adli incelemesi, Koşu 28–40 ölçümü, motorun kaynak kullanımı

HAVVA · 27 Kasım 2026 · oturum "Koşu kodu analizi" · görev: LAB "Bilgisayar parçaları" oturumunun
ilettiği Emre brifi. **Kod değiştirilmedi, motor koşturulmadı.** Okunan ağaç: `origin/main` `ab9a9f535`
(motor dosyaları Koşu 40'ın koştuğu `acb9cc0ff` ile aynı; `git diff` boş).

İşaretler: **[ÖLÇÜLDÜ]** bu oturumda HAVVA'da ölçüldü (komut/dosya yanında) · **[LOG]** koşu logundan
okundu · **[KOD]** kodda okundu (`dosya:satır`) · **[HESAP]** ölçülmüş sayılardan aritmetik ·
**[TAHMİN]** ölçülmedi. Ölçüm betikleri: `denetim/KOSU-SORUSTURMA-1127/` (salt okuma).

---

## 0. Bir sayfada

1. **Koşu 40 bitmedi ve bitemezdi.** Motor süreci 27.11 ~13:41'de Emre'nin emriyle durduruldu (veri
   korunarak; yedek alındı). Ⓑ dolgu 7 gün 15 saatte 2.505 kesit işledi; toplam kesit en az 4.212. Kesit başına
   süre 1 sn'den **1.767 sn'ye** tırmandı. Aynı hızla kalan iş **en az 35 gün** [HESAP §2.3].
2. **A haritası da kayboldu.** `donemler.js` ve `petek_govde.js` Ⓑ'den SONRA yazılıyor
   (`uret_petek.py:10312` Ⓑ, `:10353` ve `:10595` yazım). 21,5 saatlik A hesabının Osmanlı çıktısı
   diske hiç inmedi. Diskte yalnız `devletler_harita.js` (392 MB), önbellek (12,4 GB) ve
   `_petek_devam` (1.927 devlet, 1,1 GB) var.
3. **Ⓑ'nin yavaşlığı donanım değil algoritma.** Kesit başına ortalama 2,7 gövde değişiyor ama 50,7
   devlet yeniden hesaplanıyor (son 500 kesitte 126) [ÖLÇÜLDÜ §2.4]. Sebep: önbellek anahtarı ve
   hesap, komşuluğu **sınır kutusuyla** kuruyor; dünyaya yayılmış imparatorlukların kutusu gezegenin
   yarısı. Daha hızlı işlemci bunu 2 aydan 1 aya indirir, çözmez.
4. **"33,7 GB" bir gereksinim değil, birikmiş ölü yük.** Ölçülen gerçek tepe çalışma kümesi ana süreçte
   16,6 GB, işçi süreçte çökme anında ~7,4 GB; makine 23,7 GB. En güçlü bellek adayı: her varlık dönemi
   için bütün petek katmanını saklayan sınırsız `_VARLIK_ONBELLEK` [KOD §4.2; boyu ölçülmedi].
5. **A'nın asıl maliyeti `petek_epok`.** Koşu 32–39'da koşu başına 1.510–3.044 çağrı, toplam 27–79
   iş parçacığı-saat (koşu duvar süresinin %160–395'i) [LOG §3.3]. Her dönem baştan hesaplanıyor,
   koşular arası önbelleği yok, iş parçacıkları aynı dönemi aynı anda hesaplayabiliyor.
6. **İşçi süreç 3 koşuda aynı hatayla çöktü** (31, 35, 40; `0xC0000005`, GEOS içinde). İşçi belleği
   ikiye katlıyor, ön aşamaları baştan koşuyor.
7. **Bilgisayar sorusu (ön cevap, §6):** bugünkü kodla tek süreçli koşu ~17 GB çalışma kümesi ister:
   16 GB yetmez, 24 GB sınırda yeter. 64 GB'ı gerektiren bir ölçüm yok. Düzeltme sonrası 16 GB'a
   sığması makul ama **ölçülmedi**; karar için §7'deki bellek ölçümü gerekiyor.

---

## 1. Koşu 40'ın bugünkü durumu [ÖLÇÜLDÜ 27.11 16:23, HAVVA]

| Soru | Ölçüm |
|---|---|
| Motor süreci çalışıyor mu | **Hayır.** `Win32_Process` python/py: yalnız `kasa_api_server.py` (eczane). |
| Ne zaman durdu | Log son yazım 27.11 13:36:07; önbellek son kayıt 13:35, WAL 13:41. |
| Çöktü mü, durduruldu mu | Uygulama olay günlüğünde bugün python çökmesi YOK (yalnız 13:57 `tail.exe` askıda). Makine 19.11 00:37:59'dan beri yeniden başlamamış. 13:42'de `C:\atlas-kosu40-yedek-1127` oluşmuş (97 dosya, 12,61 GB: önbellek + `devletler_harita.js` + loglar). **HAVVA 26 KASIM oturumunun beyanı (27.11, oturumlar arası mesaj):** Emre'nin doğrudan emriyle ("veri korunarak durdur") ~13:41'de `taskkill /F /T /PID 5448` (alt süreç 6424); kendiliğinden ölmedi; yedek durdurmadan sonra alındı, sqlite `quick_check` ok. Olay günlüğü ölçümü bu beyanla tutarlı. |
| Bitti mi | **Hayır.** Logda Ⓑ için ⏱ bitiş satırı, "Çıktı yazımı", aşama bilançosu yok. |
| Diskteki çıktı | `data/devletler_harita.js` 392,3 MB (19.11 22:21) · `data/bolgeler.js`. **Yok:** `donemler.js`, `petek_govde.js`, `dolgu.js`. |
| İniş yapıldı mı | **Hayır.** `origin/main` son commit 26.11 22:59 `ab9a9f535`; Koşu 40 inişi yok. |
| Kurtarılabilir ne var | Önbellek `C:\atlas-onbellek` 12,4 GB / 288.447 kayıt · `C:\atlas-kosu40\_petek_devam` 1.140 MB / 1.927 dosya (FAZ 1 sonuçları; ana süreçte hesaplanan 347 devlet burada YOK, `uret_petek.py:8917-8920` diske yazmıyor). |

---

## 2. Koşu 40 adli incelemesi

### 2.1 Zaman çizelgesi

| Zaman | Olay | Kaynak |
|---|---|---|
| 18.11 | Motor yaması `acb9cc0ff` (tek harita: 5 gün + B dolgusu; sürtünmeli paylaşım, hat duvarı, devlet içi delik) | git |
| 19.11 00:37 | Makine yeniden başladı | [ÖLÇÜLDÜ] |
| 00:49:22 | Koşu 40 başladı. 24 bayrak; `MOTOR_SUREC_ISCI=2`, `MOTOR_B_DOLGU=1` (ilk kez), `MOTOR_MO_SINIR=9999-12-31` (MÖ kuralları her çağa, ilk kez) | bayraklar.log |
| 00:49 | Önbellek tuzu iki katmanda da FARKLI ⇒ "bu koşu isabet ALMAYACAK" (soğuk koşu) | log :88-89 |
| 00:49–03:01 | Ön aşamalar 2 sa 11 dk; içinde "Varlık epokları" 1 sa 32 dk | log |
| 03:01 | "Yabancı devlet gövdeleri" başladı; `_petek_devam` hazır 0/2274; ana 1137 + işçi 1137 devlet | log :3308-3309 |
| 13:13–13:23 | Gözlem: python toplam 14,3–14,8 GB, boş RAM 1,3–1,9 GB | kosu40-gozlem.log |
| 17:08:57 | **İşçi 1 çöktü** (PID 3588, `geos-*.dll`, `0xC0000005`); o an ~7,4 GB. Kalan 347 devleti ana süreç hesapladı | geos-coku-1119.txt, log :4105 |
| 20:58 | Gövde aşaması bitti: duvar 17 sa 58 dk, işlemci 34 sa 35 dk | log :4139 |
| 20:58–22:05 | Dönemler kuruluyor 1 sa 07 dk | log |
| 21:20–22:37 | Boş RAM < 1 GB (5 ACIL kaydı; en düşük 0,19 GB 22:09'da) | ACIL.txt, kosu40-dinamik.log |
| 22:05–22:21 | Seyreltme 16 dk; `devletler_harita.js` yazıldı | log :4179-4183 |
| **22:21:51** | **Ⓑ dolgu başladı** (A kısmı toplam 21 sa 32 dk) | log :4184 |
| 22:33 | İlk kesit önbelleğe yazıldı (11 dk kurulum) | [ÖLÇÜLDÜ §2.3] |
| 20.11 04:00 | Kesit başına süre 40 sn'yi geçti | [ÖLÇÜLDÜ] |
| 21.11 12:00 | Kesit başına süre 5 dakikayı geçti | [ÖLÇÜLDÜ] |
| 23.11 | Emre: "koşu sürsün" (borç D8); o gün kesit başına ~17 dk | BORC-DEFTERI D8 |
| 25.11 | Ölçüm: özel bellek 33,7 GB, çalışma kümesi 0,9 GB, tepe çalışma kümesi 16,6 GB, commit 49,5/54,5 GB | BORC-DEFTERI D9 |
| 27.11 13:35 | 2.505. kesit yazıldı (kesit başına 29 dk); süreç durdu | [ÖLÇÜLDÜ] |

Ⓑ'de geçen süre: 19.11 22:21 → 27.11 13:36 = **7 gün 15 saat (183 saat)**.

### 2.2 Ne yanlış gitti (sınıflı)

**Tasarım / kod**
- **K1 — A çıktısı Ⓑ'nin rehinesi.** [KOD] Ⓑ `uret_petek.py:10312`de; `petek_govde.js` + `donemler.js`
  yazımı `:10353` ve `:10595`te. `dolgu.kosudan`ın belge satırı tersini söylüyor: "A çıktısını yazdıktan
  SONRA bunu çağırır … Bu işlev patlasa bile A yazılmıştır" (`dolgu.py:1275-1288`). Patlamaya karşı
  `try/except` var, **bitmemeye** karşı bir şey yok.
- **K2 — Ⓑ'nin maliyeti kesit ilerledikçe patlıyor** (§2.4).
- **K3 — Ⓑ'de ilerleme sayacı yok.** [KOD] `kosudan`ın `ilerleme` parametresi var (`dolgu.py:1273`,
  `:1317`) ama motor vermiyor (`uret_petek.py:10327-10331`). Sonuç: 6 gün boyunca "takıldı mı, yavaş
  mı, ne kadar kaldı" ölçülemedi (borç D8, D9 "ÖLÇÜLEMEDİ: toplam kesit sayısı").
- **K4 — Ana süreç yedek hesabı diske yazmıyor.** İşçi çökünce ana sürecin hesapladığı 347 devlet
  `_petek_devam`a girmiyor (`:8917-8920`).

**Süreç / karar**
- **S1 — İlk kez açılan aşama tam koşuda denendi.** Ⓑ yaması 18.11'de yazıldı, 19.11'de tam koşuya
  girdi. Yama dar kutuda sınanmıştı ama dünya ölçeğinde birim süre ve toplam süre tahmini yoktu.
  [`KOSU-YAYIN.md` :78-89 "tam inşa 7-8 sa" diyor; gerçek A 21,5 sa, Ⓑ aylar.]
- **S2 — Aynı koşuda üç yenilik:** yeni yama, yeni aşama (Ⓑ), yeni kural kapsamı (MÖ kuralları her
  çağa). Hangisinin süreyi ne kadar büyüttüğü ayrılamıyor.
- **S3 — Durdurma ölçütü yoktu.** Karar 23.11 ve 25.11'de sayısız verildi ("sürsün"), çünkü kalan iş
  ölçülemiyordu. Bu rapordaki ölçüm (§2.3) o gün yapılabilseydi koşu 20.11'de durdurulurdu.

**Ayar**
- **A1 — `MOTOR_SUREC_ISCI=2`:** işçi 17:08'de çöktü, o ana dek ~7,4 GB tuttu, ön aşamaları (2 sa 08 dk)
  ikinci kez koştu. Aynı çökme Koşu 31 ve 35'te de var (§3.2). 23,7 GB makinede ana (tepe 16,6 GB) +
  işçi (7,4 GB) = fiziksel belleğin tamamı.
- **A2 — Bellek sınırda:** boş RAM 0,19 GB'a düştü; sayfa dosyası tepe kullanımı 14,1 GB (30,8 GB
  ayrılmış) [ÖLÇÜLDÜ, `Win32_PageFileUsage`]. İşçi çökmesinin bellek baskısıyla ilgisi **kanıtlanmadı**
  (§4.4).
- **A3 — Soğuk önbellek:** yama + yeni bayraklar tuzu değiştirdi; bütün katmanlar ıskaladı. Beklenen
  ve kaçınılmazdı, ama süre tahmini buna göre yapılmamıştı.

**Eczane çakışması:** koşu mesaide Idle öncelikte sürdü (dinamik öncelik betiği, 177 mod değişimi).
Eczanenin aksadığına dair kayıt bulunmadı; koşunun ne kadar yavaşladığı **ölçülmedi**.

**Kayıp zaman:** A 21,5 sa + Ⓑ 183 sa = **8,5 gün makine süresi**; yayına inen çıktı yok. Bu sürede
Koşu 41'i bekleyen veri birikti (borç H4, C48, C-KASA-1123).

### 2.3 Ⓑ ne kadar ilerledi, ne kadar kalmıştı [ÖLÇÜLDÜ]

Kaynak: `C:\atlas-onbellek\motor_onbellek.sqlite` salt okuma, yalnız birincil anahtar dizini
(`onb_say.py`, `onb_sira.py`); kesit kayıtlarının yazım zamanı 60 örnekten.

| Ölçüm | Değer |
|---|---|
| Biten kesit (`dolgu2_kesit` kaydı) | **2.505** |
| Devlet hesabı (`dolgu2_devlet` kaydı = ıska) | 126.976 |
| Kapanış hesabı (`dolgu2_talep` kaydı = ıska) | 6.659 |
| Toplam kesit, alt sınır (`devletler_harita.js`teki ayrık dönem başlangıcı; `kesit_say.py`) | **4.212** (+ Osmanlı'nın 765 kırılma günü; çakışma ölçülemedi ⇒ 4.212–4.977) |
| Durduğu yer | yabancı dönem günlerine göre 2.505. gün = 1760-03-11 |
| Tamamlanan pay | %50–59 |

Kesit başına süre (ardışık örnekler arası ortalama):

| Kesit sırası | Tarih | sn/kesit |
|---|---|---|
| 0–200 | 19.11 22:33–22:45 | 1–6 |
| 250–1100 | 19.11 23:00 – 20.11 03:30 | 10–40 |
| 1200–1900 | 20.11 05:00 – 21.11 08:30 | 80–200 |
| 1950–2080 | 21.11 12:00 – 22.11 06:00 | 290–670 |
| 2120–2290 | 22.11 15:00 – 24.11 07:00 | 575–1.040 |
| 2330–2504 | 24.11 20:00 – 27.11 13:35 | **1.120–1.770** |

[HESAP] Kalan en az 1.707 kesit × 1.767 sn = **34,9 gün**; kesit sayısı 4.977 ise 50,6 gün. Hız her
blokta kötüleştiği için gerçek süre daha uzun olurdu. Geriye kalan dilim (1760–2000) sömürge
imparatorluklarının en yaygın olduğu, en pahalı dilimdir.

### 2.4 Ⓑ neden yavaş [ÖLÇÜLDÜ + KOD]

**Kapanış darboğaz değil.** Logdaki 1.397 `[yavas]` kapanış satırının toplamı 14.217 sn = 3,9 saat
(183 saatin %2'si). 4 sn'den kısa kapanışlar loga yazılmıyor; payları ölçülmedi.

**Yeniden hesap çarpanı.** Bir kesitte gerçekten değişen gövde sayısı = kapanış ıskası; yeniden
hesaplanan devlet sayısı = devlet ıskası (`onb_sira.py`, `onb_hist.py`):

| Kesit bloğu | Kapanış ıskası (ort.) | Devlet ıskası (ort.) |
|---|---|---|
| 0–249 | 1,4 | 3,8 |
| 750–999 | 2,3 | 24,9 |
| 1500–1749 | 2,8 | 58,7 |
| 2000–2249 | 3,2 | 109,3 |
| 2250–2499 | 3,4 | 126,0 |
| Tümü | 2,7 (medyan 2) | **50,7** (medyan 24, p90 128, en çok 327) |

Yalnız **tek** gövdenin değiştiği kesitlerde bile: kesit 2000–2505'te medyan 36, p90 222, en çok 275
devlet yeniden hesaplandı. Son 505 kesitte dağılım üç kümeli: ~20–40, ~85 ve ~260–300 (o kesitte
~346 gövde var). Yani kesitlerin kabaca üçte birinde **dünyanın tamamına yakını** yeniden hesaplanıyor.

**Kod sebebi — iki aday, ikisi de "yerel işi gezegen ölçeğinde anahtarlamak":**
- **N1 — Komşuluk sınır kutusuyla kuruluyor.** [KOD] `dolgu.py:694` `g_agac.query(ham[i])` ve `:702`
  yüklemsiz STRtree sorgusu = kutu kesişimi. Devlet anahtarı kendisi + bu komşuların hepsinin gövde
  özetini taşır (`:715-721`). [ÖLÇÜLDÜ, `b_profil.py`, 1760 kesiti] 346 gövdenin 8'inin kutusu 90°'den,
  3'ünün 180°'den geniş (ispanya 234°×88°, ingiltere 206°×77°, portekiz 183°×77°, fransa 176°×79°).
  Bu gövdelerin kutusuna dünyanın çoğu girer ⇒ dünyanın herhangi bir yerindeki değişiklik onların
  anahtarını bozar; onlar değişince kutularına değen herkesin anahtarı bozulur. Hesap da aynı
  komşulukla yapılır: `B = unary_union(bütün kutu-komşusu gövdeler)` (`:753-756`), `yakin()`
  birleşim + tampon (`:821-838`) — devlet hesabı başına, ezber yalnız o çağrı içinde.
- **N2 — Delik engeli anahtarda küresel.** [KOD] `_ctx_oz` her devletin anahtarına o günün **bütün
  dünyadaki** kabile/devletsiz noktalarının özetini koyar (`dolgu.py:677`; nokta listesi
  `uret_petek.py:10301-10309`). Engel yalnız o devletin kendi deliklerinde kullanılır
  (`dolgu.py:902`). Dünyanın herhangi bir yerinde bir kabile noktası sahip değiştirince bütün
  devletler ıskalar. `MOTOR_MO_SINIR=9999` ile sahne kuralı her çağda işlediği için bu küme sık değişir.
- N1 ve N2'nin payları ayrı ayrı **ölçülmedi** (profil ölçümü §2.5).

**Kesit başına sabit yük** [KOD; süresi ölçülmedi]: her kesitte bütün gövdelere `is_valid`
(`dolgu.py:942`), her devlet için isabet olsa bile SQLite okuma + `pickle.loads` + `UPDATE zaman`
(`motor_onbellek.py:87-98`; süreç içi devlet ezberi yok), bütün yerleşimler üzerinden engel listesi,
`_OZ_ONB`de her kesitin geçici geometrisinin sonsuza dek tutulması (`dolgu.py:217-231`).

### 2.5 Tek kesit profili [ÖLÇÜLDÜ — bkz. Ek A]

1760 kesiti eski kodla soğuk 3.652–4.110 sn; sürenin %78–80'i devlet hesabı, %54–60'ı onun içindeki
talep kesişimleri.
Siam'ı 100 m oynatmak 19 devleti (ingiltere 400 sn, ispanya 162 sn) yeniden hesaplatıp 740 sn tuttu.
N1 doğrulandı; N2'nin (küresel engel) payı ayrıca ölçülmedi ama aynı düzeltmeyle kapandı.

---

## 3. Koşu 28–40 ölçümü [LOG]

Kaynak: `C:\atlas-kosuNN\` logları (alt ajan taraması; ayrıntı ve satır numaraları
`denetim/KOSU-SORUSTURMA-1127/kosu28-40-olcum.md`).

### 3.1 Özet tablo

| Koşu | Bitiren denemenin süresi | Deneme | Gövde aşaması (duvar / işlemci) | Diskten hazır devlet | Sonuç |
|---|---|---|---|---|---|
| 28 | 7 sa 19 dk | 1 | 3 sa 29 dk / 7 sa 36 dk | 0/1043 | tamam |
| 29 | 3 sa 54 dk (devam) | 2 | ilk deneme 5 sa 12 dk | 1117/1117 | tamam |
| 30 | 10 sa 37 dk (devam) | 2 | 4 sa 42 dk | 1375/2179 | tamam |
| 31 | 18 sa 21 dk (devam) | 3 | 13 sa 30 dk / 21 sa 53 dk | 1397/2179 | tamam · **işçi çöktü** (370 devlet ana süreçte) |
| 32 | 16 sa 20 dk | 1 | 11 sa 54 dk / 25 sa 08 dk | 0/2187 | tamam |
| 33 | 23 sa 59 dk | 1 | 19 sa 27 dk / 25 sa 27 dk | 2/2187 | tamam |
| 34 | 22 sa 11 dk | 1 | 16 sa 19 dk / 30 sa 40 dk | 3/2257 | tamam |
| 35 | 16 sa 34 dk | 1 | 12 sa 51 dk / 25 sa 02 dk | 0/2257 | tamam · **işçi çöktü** (520 devlet ana süreçte) |
| 36 | 15 sa 20 dk (devam) | 3 | 10 sa 20 dk | 1740/2245 | tamam · 2. denemede bozuk `.pkl` |
| 37 | — | 3 | — | — | **bitmedi** (neden logda yok) |
| 38 | 20 sa 22 dk | 2 | 11 sa 35 dk | 1802/2246 | tamam |
| 39 | 18 sa 03 dk | 3 | 9 sa 00 dk | 1617/2248 | tamam |
| 40 | A: 21 sa 32 dk; Ⓑ: 183 sa, bitmedi | 1 | 17 sa 58 dk / 34 sa 35 dk | 0/2274 | **bitmedi** · **işçi çöktü** (347) |

13 koşuda 24 deneme başlatılmış; 11 koşu tamamlanmış. Yarıda kalan 12 denemenin 3'ünün nedeni
belli (31-1: DEM dosyası eksik · 31-2: GEOS çökmesi · 36-2: `UnpicklingError`); öteki 9'unun nedeni
loglarda yok. `KOSU-YAYIN.md`deki "tam inşa 7-8 saat"
rakamı Koşu 28'e aittir; Koşu 32'den beri soğuk koşu 16–24 saattir.

Girdi büyümesi 28 → 40: yerleşim 4.676 → 5.649 (+%21) · devlet 937 → 1.752 (+%87) · dönem 6.277 →
11.384 (+%81) · gövde aşamasındaki devlet işi 1.043 → 2.274.

### 3.2 Tekrarlayan çökme

İşçi süreç 31, 35 ve 40'ta çıkış kodu `3221225477` (`0xC0000005`, erişim ihlali) ile öldü; 40'ta
Windows olay kaydı hatalı modülü Shapely'nin GEOS kitaplığı olarak gösteriyor. Üçünde de ana süreç
sağ kaldı ve eksik devletleri kendi hesapladı. Sıfırdan başlayan 6 koşunun (28, 32, 33, 34, 35, 40)
2'sinde, devamla başlayanlarla birlikte 3 koşuda görüldü. Sebep **kanıtlanmadı** (adaylar §4.4).

### 3.3 Süre nereye gidiyor: `petek_epok` [LOG, aşama bilançosu "ÇAPRAZ SAYAÇ"]

| Koşu | Duvar | `petek_epok` çağrı · toplam | Kuşatılmışlık | Yabancı gövde geometrisi |
|---|---|---|---|---|
| 28 | 7 sa 19 dk | 619 · 3 sa 33 dk | 15 dk | 8 sa 10 dk |
| 32 | 16 sa 20 dk | 3.017 · **55 sa 51 dk** | 12 sa 25 dk | 13 sa 45 dk |
| 33 | 23 sa 59 dk | 2.976 · **77 sa 28 dk** | 20 sa 34 dk | 22 sa 14 dk |
| 34 | 22 sa 11 dk | 3.044 · **79 sa 07 dk** | 16 sa 33 dk | 14 sa 16 dk |
| 35 | 16 sa 34 dk | 1.510 · 26 sa 48 dk | 6 sa 49 dk | 6 sa 12 dk |
| 36 (devam) | 15 sa 20 dk | 1.791 · 50 sa 57 dk | 8 sa 13 dk | 9 sa 45 dk |
| 38 | 20 sa 22 dk | 1.771 · 47 sa 49 dk | 7 sa 07 dk | 12 sa 57 dk |
| 39 | 18 sa 03 dk | 2.818 · 71 sa 23 dk | 8 sa 57 dk | 9 sa 38 dk |

(Sayaçlar iş parçacıklarının toplamıdır; 4 iş parçacığı GIL beklerken de sayar, bu yüzden duvar
süresini aşar. Koşu 40'ın bilançosu yok, koşu bitmedi.)

Okuma:
- Koşu 31'de giren iki yama (`MOTOR_KUR_DEVIR`, `MOTOR_KUSATMA_BILESEN`; devir kümesi bir günde 4 →
  1.703 yerleşim, `KOSU-YAYIN.md` :100) sonrası `petek_epok` koşunun en pahalı işi oldu: çağrı başına
  64–102 sn (iş parçacığı toplamı).
- **Koşular arası önbelleği yok.** Katmanlar: `k1 · col · kusat · dolgu · govde · osm · sb`
  (`uret_petek.py:692`); dönem petekleri her koşuda baştan hesaplanır.
- **`govde` önbelleği süreyi düşürmüyor.** Koşu 32 (isabet 755 / ıska 4.883) ile Koşu 33 (3.997 /
  1.869) aynı tuz ve aynı girdi boyunda; gövde aşaması işlemci süresi 25 sa 08 dk ↔ 25 sa 27 dk.
- **İki süreç aynı dönemleri ayrı ayrı hesaplıyor.** İşçinin sayaçlarının ana sürece eklendiği
  koşularda (32, 33, 34, 39) ~3.000 çağrı; işçinin çöküp sayaçlarının kaybolduğu Koşu 35'te, neredeyse
  aynı girdiyle (Koşu 34: 5.532, Koşu 35: 5.530 yerleşim) 1.510 çağrı. Yani süreç paralelliği bu işi
  ikiye bölmüyor, **iki kez yaptırıyor** (bellekte de iki kopya). Ayrıca [KOD] `petek_epok` "ezberde
  var mı" diye bakıp yoksa hesaplıyor, anahtar başına kilit yok (`:6229-6231`, `:6425`): iki iş
  parçacığı aynı dönemi aynı anda hesaplayabilir; bunun payı **ölçülmedi**.
- **`_DEVIR_EZBER` çırpınıyor:** tavan 128, Koşu 40'ta atılan 366.776 (Koşu 28'de 7.653) [LOG :4107].
  Iska başına süre ölçülmedi.

---

## 4. Motor: amaç, akış, kaynak kullanımı

### 4.1 Akış (Koşu 40 süreleriyle) [LOG + KOD]

`uret_petek.py` 10.668 satır, tamamı modül düzeyinde koşar (içe aktarılamaz, `:38`).

| # | Aşama | Satır | Koşu 40 süresi | Not |
|---|---|---|---|---|
| 1 | Girdi kopyası, kara, göl, nehir, sırt, yerleşim okuma | 558–1230 | 1 dk | |
| 2 | Kara-kısıtlı sahiplik ızgarası (0,05°), DEM, Dijkstra | 1329–2530 | 6 dk | **2 Dijkstra yalnız A/B ölçümü için** (`:2130`, `:2155`; 2,5 dk) |
| 3 | Petekler (Voronoi + ızgara), kenar yaslama, kıyı, ada, çöl | 2735–5180 | 27 dk | çöl tavanı 14 dk |
| 4 | Varlık epokları, kuşatılmışlık ön geçişi | 5327–6800 | 1 sa 32 dk | 1.173 varlık kırılması |
| 5 | **Yabancı devlet gövdeleri** (FAZ 1 iş parçacığı/işçi; FAZ 2 havuz) | 8222–9225 | **17 sa 58 dk** | içinde `petek_epok` |
| 6 | Dönemler (Osmanlı, delta) | 9411–9860 | 1 sa 07 dk | |
| 7 | Seyreltme + `devletler_harita.js` yazımı | 9862–9920 | 16 dk | |
| 8 | Ⓑ ufuk bantları | 9923–10150 | yok (tek bant) | Koşu 38–39'da 2 sa 10–30 dk |
| 9 | **Ⓑ dolgu** (`dolgu.py`) | 10312–10349 | **183 sa, bitmedi** | |
| 10 | Çıktı yazımı (`petek_govde.js`, `donemler.js`), kıyas | 10353–10668 | hiç gelinmedi | |

### 4.2 Boşaltılmayan yapılar [KOD; boyları ÖLÇÜLMEDİ — §7 ölçümü gerekir]

| Aday | Yer | Neden şüpheli | Koşu 40 göstergesi |
|---|---|---|---|
| **`_VARLIK_ONBELLEK`** (+ `_VARLIK_DEVIR`, `_VARLIK_PAY`) | `:5327`, yazım `:6425-6427` | Her varlık dönemi için **bütün petek listesinin** kopyası; devir alan her hücre için yeni geometri (`:6307`, `:6398`). Sınırsız, hiç silinmez. `:3366` yorumu "bilerek dokunulmadı" diyor. | 1.173 varlık kırılması; bir dönemde 1.745–5.328 petek devrediliyor [LOG :2298-2302]. İşçi süreçte de ayrıca. |
| `_ONB_OZ` | `:714-726` | Özeti alınan her geometriyi sonsuza dek canlı tutar (yanlış `id()` eşleşmesine karşı). `petek_epok` hücreleri (`:8617-8622`) ve kuşatma bileşenleri (`:5528`) buradan geçer ⇒ `_VARLIK_ONBELLEK` boşaltılsa bile bunlar yaşar. | — |
| Havuzlar: `DEV_HALKA` + `DEV_HALKA_IX`, `OSM_*` | `havuza()` `:6980-7015` | Koordinatlar Python listesi `[x, y]`; dizin anahtarı her halkanın **JSON metni** (`:7005`). | Seyreltme öncesi 45.257.962 köşe [LOG :4180]. [HESAP] köşe başına ~120 bayt liste + ~16 bayt metin ⇒ ~6 GB; seyreltme sırasında eski ve yeni havuz birlikte. Boş RAM'in 0,19 GB'a düştüğü an (22:09) tam bu aşama. |
| `_KUS_ONBELLEK`, `_KUS_KARAR`, `_KUS_BIL_KARAR` | `:5344`, `:5447`, `:5594` | Sınırsız | 568.304 dönem-vaka [LOG] |
| `_SERBEST_ONBELLEK`, `_SK_BOLGE_EZBER`, `_ENKLAV_GUN_EZBER`, `_COL_NOKTA_ONBELLEK` | `:5790`, `:8059`, `:6022`, `:7470` | Sınırsız | — |
| `dolgu._OZ_ONB` | `dolgu.py:217-231` | Ⓑ'de özeti alınan her geometri (her kesitin engel `MultiPoint`i dahil) canlı kalır | — |
| `_PUAN_ONBELLEK`, `_DOLGU_ONBELLEK` | `:7282`, `:7439` | Sınırsız, ama Koşu 40'ta **kapalı** (`0/∞`) | brifteki aday; bu bayrak kümesinde etkisiz |
| `_b_ar` (Ⓑ'nin girdi gövdeleri) | `:10316-10326` | 11.384 dönemin geometrisi baştan topluca kurulur | [ÖLÇÜLDÜ] 1760 kesitinde 346 gövde = 198.589 köşe ⇒ **küçük**; aday değil |

Not: CPython serbest bıraktığı küçük nesne belleğini işletim sistemine çoğunlukla geri vermez; bu
yüzden "özel bellek 33,7 GB / çalışma kümesi 0,9 GB" tablosu, yapılar silinse bile tek süreçte
kısmen sürer. Kalıcı çare aşamaları **ayrı süreçlere** bölmektir (her süreç bitince belleği tam iade eder).

### 4.3 Gereksiz ya da mükerrer iş [KOD]

1. Dönem petekleri her dönem için **baştan** hesaplanır (`petek_epok :6232-6405`): bir dönem öncekinden
   bir-iki yerleşimle ayrılsa da bütün ölü petekler yeniden bölüştürülür.
2. İşçi süreç motorun tamamını baştan koşar (`:560-568`): ön aşamalar iki kez (2 × 2 sa 08 dk),
   bellek iki kat. `:567` yorumu "her işçi ~2-3 GB" diyor; ölçülen ~7,4 GB.
3. A/B ölçüm Dijkstra'ları her koşuda (`:2130`, `:2155`): üretim çıktısına girmez.
4. Ⓑ: yerel iş gezegen ölçeğinde anahtarlanır ve hesaplanır (§2.4).
5. `dolgu2_kesit` katmanı her kesitin bütün parçalarını ayrıca saklar (örnek kayıtlar 0,8–1,2 MB
   [ÖLÇÜLDÜ]; 2.505 kayıt ≈ 2 GB): `dolgu2_devlet` ile aynı veri, ikinci kez.
6. `_TALEP_ONB` "ilk giren ilk çıkar" (`dolgu.py:1051-1053`): uzun ömürlü gövdenin kapanışı ezberden
   düşer, SQLite'tan yeniden okunur.

### 4.4 İşçi çökmesi için adaylar [KOD; kanıtlanmadı]

- **İş parçacığı güvenliği.** FAZ 1, 4 iş parçacığıyla koşar (`:8868`, `:8890`); iş parçacıkları aynı
  hazır geometriyi (`_KARA_HAZIR = prep(KARA)` `:3607`) ve aynı `STRtree`leri paylaşır. Çökme üç
  koşuda da GEOS içinde ve iş parçacıklı aşamada. Tek iş parçacığıyla (`MOTOR_PARALEL_ISCI=1`,
  tuzu değiştirmez) çökmenin kaybolup kaybolmadığı ölçülmedi.
- **Bellek baskısı.** Koşu 40'ta çökme saatinde boş RAM 1,2–3,9 GB arasındaydı (`geos-coku-1119.txt`).
  31 ve 35 için bellek ölçümü yok.
- Minidump duruyor: `C:\ProgramData\Microsoft\Windows\WER\Temp\WER.b4953638-…mdmp` (incelenmedi).

### 4.5 Ortalıkta kalan dosyalar [ÖLÇÜLDÜ]

- `%TEMP%\petek_surec_*`: 39 boş dizin (6 Ekim'den beri).
- `C:\atlas-kosu26\_petek_devam` 305 MB / 337 dosya; `C:\atlas-kosu37\_petek_devam` 31 dosya;
  `C:\atlas-kosu40\_petek_devam` 1.140 MB / 1.927 dosya (bu sonuncusu kurtarma için DEĞERLİ).
- `C:\` kökünde 80'e yakın `atlas*` dizini: 26 koşu klasörü (her birinin `data/`sı 1,0–1,4 GB),
  ~35 `atlas-w-*`, ölçüm ve geçici dizinler. Boş disk 141,9 GB.
- Önbellek 12,4 GB; içinde Koşu 40'ın Ⓑ kayıtları (135.140 kayıt) — `dolgu.py` değişince hepsi geçersiz.

---

## 5. Brifteki ön tespitlerin sınanması

| Brifteki tespit | Bu ölçüm |
|---|---|
| "Ⓑ'de özel bellek 33,7 GB, çalışma kümesi 0,9 GB — ölü yük" | Doğru; ölü yükün en güçlü adayı `_VARLIK_ONBELLEK` + havuzlar (§4.2). Boyları ölçülmedi. |
| "Gerçek tepe 16,6 GB, gövde aşamasında" | 16,6 GB ana sürecin tepesi. Boş RAM'in dibi (0,19 GB) ise gövdede değil **seyreltme** sırasında (22:09). Makine toplamı için işçi (~7,4 GB) eklenir. |
| "4 iş parçacığı ortalama 0,79 çekirdek" | Koşu 40'ta gövde aşaması işlemci/duvar = 34,6/18,0 = **1,9 çekirdek** (Koşu 32: 2,1 · 33: 1,3 · 34: 1,9 · 35: 1,9). 0,79 eski (Koşu 13C) ölçüm. |
| "İşçi ön aşamaları baştan koşuyor, belleği katlıyor, çöktü" | Doğru; çökme 3 koşuda (§3.2). |
| "Ⓑ tek çekirdekte 5,5 günü aştı" | 7 gün 15 saatte %50–59; sebep tek çekirdek değil **çarpan** (§2.4). Paralelleştirmek (E-HAVVA-1125b) tek başına yetmez: 4 çekirdekle bile kalan iş haftalar. |
| Adaylar `_dj`, `_kvsahip0/N`, bant havuzları | Okunmadı / Koşu 40'ta bant yok (tek bant). `_kvuzak0/N` siliniyor (`:2146`, `:2163`). |

---

## 6. Bilgisayar sorusuna ön cevap

**Ölçülen:**
- HAVVA 23,7 GB RAM, 8 mantıksal işlemci. Koşu 40'ta ana süreç tepe çalışma kümesi 16,6 GB, işçi ~7,4 GB,
  boş RAM dibi 0,19 GB, sayfa dosyası tepe 14,1 GB.
- 33,7 GB özel belleğin o anda kullanılan kısmı 0,9 GB.

**Sonuç:**
1. **64 GB'ı gerektiren bir ölçüm yok.** `DONANIM-1124-NIHAI.md`deki "tek işçi 33,7 GB" gerekçesi ölü
   yükü gereksinim saymış.
2. **Bugünkü kodla, tek süreç (`MOTOR_SUREC_ISCI=1`):** ~17 GB çalışma kümesi + işletim sistemi ⇒
   **16 GB yetmez; 24 GB sınırda yeter** (sayfa dosyası ≥ 32 GB şartıyla, çünkü özel bellek 30 GB'ı
   aşıyor). 32 GB rahat eder.
3. **Düzeltme sonrası (ölü yük boşaltılır, aşamalar ayrı süreç):** tepe ~8–10 GB **[TAHMİN]** ⇒ 16 GB
   yeter. Bu sayı ölçülmeden karar verilmemeli; ölçüm §7-1.
4. **İşlemci:** A kısmı bugün ~1,9 çekirdek kullanıyor; Ⓑ tek çekirdek. Çekirdek sayısı bugünkü kodu
   hızlandırmaz. Tek çekirdek hızı Ⓑ'yi orantılı hızlandırır ama Ⓑ'nin sorunu 30–50 kat, 1,5–2 kat değil.
5. **Öneri:** bilgisayar kararı koşuya göre verilecekse §7-1 ölçümünü bekleyin (bir gece). Beklenemiyorsa
   **24 GB'lık makine bugünkü kodu da taşır**; 64 GB'lık masaüstü koşu için gerekçesiz.

---

## 7. Ölçülemeyenler ve sıradaki ölçümler

| # | Ölçülmeyen | Neden | Nasıl ölçülür |
|---|---|---|---|
| 1 | Aşama başına bellek ve hangi yapının ne tuttuğu; tek süreçli koşunun tepesi | Motor koşturulmadı (mesai/nöbet; Emre onayı) | `denetim/ARAC-BELLEK-OLC-1125.py`, mesai dışı, ayrı kopya dizin, Koşu 40 bayrakları + `MOTOR_SUREC_ISCI=1` + `MOTOR_PARALEL_ISCI=1`, aynı önbellek ve `_petek_devam` ⇒ A kısmı ~4–6 sa [TAHMİN]; Ⓑ başlayınca durdurulur |
| 2 | Ⓑ'de N1 ve N2'nin ayrı payları; gerçek ızgarayla paylaşım süresi | Gerçek `_YR_SAHIP` diskte yok | #1 koşusunda `MOTOR_DOLGU_IZ=1` (işletim değişkeni değil ⇒ tuzu değiştirir; ayrı karar) ya da Ek A'nın taklit ızgarası |
| 3 | Koşu 40'ı kimin durdurduğu | **Kapandı:** HAVVA 26 KASIM, Emre'nin emriyle (§1) | — |
| 4 | Koşu 28–39 bellek tepeleri | Log yok | Geriye dönük ölçülemez |
| 5 | Kesilen 9 denemenin nedeni | Logda yok | Geriye dönük ölçülemez; karne (anayasa §5) bundan sonra yazar |
| 6 | İşçi çökmesinin nedeni | Minidump incelenmedi | Minidump + tek iş parçacıklı karşılaştırma koşusu |
| 7 | `petek_epok` mükerrer hesap payı; `_DEVIR_EZBER` ıska süresi | Sayaç yok | #1 koşusunun bilançosu (tek iş parçacığında çağrı sayısı = ayrık dönem sayısı olmalı) |
| 8 | Eczane mesaisinde koşunun yavaşlama oranı | Ayrı ölçüm yok | Karneye mesai içi/dışı sn/birim |
| 9 | `uret_petek.py`nin tamamı satır satır | ~%35'i okundu (`:1-160`, `:556-745`, `:3366-3430`, `:6160-6430`, `:6976-7050`, `:8555-9045`, `:10176-10355`) ; `renkler.py`, `girdi.py` okunmadı | Aşama B planı yazılırken ilgili bölümler okunur |

---

## 8. Emre'den istenenler

1. **Koşu 40'ın akıbeti.** Öneri: **kapatılsın** (Ⓑ bu kodla bitmez). `C:\atlas-kosu40`, önbellek ve
   `_petek_devam` §7-1 ölçümü için saklansın.
2. **Bir gece bellek ölçümü izni** (§7-1; mesai dışı, tek süreç, Ⓑ'ye girince durdurulur). Bilgisayar
   kararının sayısı buradan çıkar.
3. **Sıradaki haritanın nasıl üretileceği.** Seçenekler:
   - (a) **Koşu 41, Ⓑ kapalı** (`MOTOR_B_DOLGU` yok), `MOTOR_SUREC_ISCI=1`: güncel veriyle A haritası,
     ~1–1,5 gün [TAHMİN]; dolgu yok (5 günlük yürüyüşün bıraktığı boşluklar boş görünür).
   - (b) **Önce Ⓑ düzeltmesi** (N1 + N2 + çıktı sırası + sayaç; `dolgu.py` ve `uret_petek.py` değişir,
     eşitlik sınavı gerekir), sonra Koşu 41 Ⓑ açık.
   - (c) Koşu 40'ın 19 Kasım verisini Ⓑ'siz kurtarmak (`_petek_devam` ile ~9–10 sa [TAHMİN]): eski
     veri; önerilmez.
   Öneri: **(a) hemen, (b) paralelde ayrı dalda.**
4. **`KOSU-ANAYASASI.md` taslağına onay** ya da düzeltme.
5. Onaydan sonra **aşamalı düzeltme planı** (A ayar · B ölü yük · C hız/yapı · D lego fizibilitesi)
   yazılacak; bu rapordaki bulgular (K1–K4, N1–N2, §4.2, §4.3) planın girdisidir.

---

## Ek B. Bellek ölçüm koşusu — ZAMANLANDI (Emre onayı 27.11.2026: "Evet, başlat")

- **Ne:** Koşu 40'ın girdisi ve koduyla, tek süreç + tek iş parçacığı, aşama aşama bellek ve yapı boyu ölçümü.
- **Nerede:** `C:\atlas-olcum-1128` (Koşu 40'ın commit'i `be618bf23`ten ayrı ağaç; tuz dosyaları ve 1.163 `data/`
  girdisi Koşu 40 klasörüyle karşılaştırıldı, fark 0). `C:\atlas-kosu40`a dokunulmaz.
- **Ne zaman:** 28.11.2026 02:05 (nöbet 02:00'de biter). Bekleyen süreç PID 9604 (`olcum_kos.py`); makine
  yeniden başlarsa ya da Claude uygulaması süreci kapatırsa başlamaz.
- **Bayraklar:** Koşu 40'ın 21 sonuç bayrağı aynen + `MOTOR_SUREC_ISCI=1`, `MOTOR_PARALEL_ISCI=1`,
  `MOTOR_DEVAM=1` (kendi boş `_petek_devam`ı), `MOTOR_EZBER_TAVAN_PUAN=2000`; önbellek `C:\atlas-onbellek`
  (aynı). Beklenen tuz `d7de80374c5d`; ilk 3 dakikada logda görünmezse nöbetçi koşuyu durdurur.
- **Ölçer:** `denetim/KOSU-SORUSTURMA-1127/bellek_olc2.py` (ARAC-BELLEK-OLC-1125'in genişletilmiş kopyası):
  30 sn'de bir özel bellek / çalışma kümesi / tepe / boş RAM / boş commit / yapı boyları; 30 dk'da bir
  ve her aşama değişiminde `_VARLIK_ONBELLEK`in ayrık geometri ve köşe sayısı, `_ONB_OZ`, havuzlar.
- **Nöbet** (`olcum_kos.py`, sahte motorla uçtan uca sınandı): mesaide (Pzt-Cmt 09-19) IDLE öncelik;
  mesaide çalışma kümesi > 16 GB ya da boş RAM < 2,5 GB ⇒ askıya alır, 19:00'da sürdürür; boş commit
  < 4 GB ⇒ durdurur; Ⓑ dolgu 60 dk gözlenince durdurur; en geç 30.11 08:00'de durdurur.
- **Sınanmayan:** gerçek motorla duman sınaması yapılmadı (02:00'den önce motor çalıştırmak onayın dışında).
  İlk gerçek deneme 02:05'tekidir; açılışta düşerse `olcum\nobet.log` "SÜREÇ BİTTİ: çıkış kodu" yazar.
- **Süre [TAHMİN]:** tek iş parçacığında gövde aşaması 15–30 saat; Cumartesi mesaisi IDLE öncelikte geçer.
- **Çıktı:** `C:\atlas-olcum-1128\olcum\bellek.csv`, `bellek-derin.csv`, `nobet.log`, `motor.out/err`.

---

## Ek A. Tek kesit Ⓑ profili (1760-03-11) [ÖLÇÜLDÜ 27.11, HAVVA, IDLE öncelik, mesai içi]

Girdi: Koşu 40'ın `devletler_harita.js`i, 346 yabancı gövde (Osmanlı gövdesi yok: `donemler.js`
yazılmamıştı), toplam 198.589 köşe. ESKİ kod (Koşu 40'ın `dolgu.py`si), önbellek boş.
Betikler ve ham loglar: `b_profil.py` → `b_profil_1760.log` (kancasız) · `b_profil2.py` →
`b_profil2_1760.log` (taklit ızgarayla sürtünmeli paylaşım; gerçek `_YR_SAHIP` diskte yok).

| Ölçüm | Kancasız | Taklit ızgaralı |
|---|---|---|
| Kesit toplamı (soğuk) | 4.110 sn | 3.652 sn |
| Kapanış (`_talep`) | 823 sn | 794 sn (içinde `_deniz_kapanisi` 510 sn) |
| Devlet hesabı (`_devlet_hesap`, 342 çağrı) | 3.288 sn | 2.858 sn |
| — içinde çekişme (talep kesişimleri) | 2.234 sn | 2.193 sn |
| — içinde cins | 280 sn | 275 sn |
| — içinde paylaşım (`_paylas`, 853 çağrı) | — | 41 sn |
| Tepe bellek (JSON okurken) | 4,8 GB | 4,8 GB |

En pahalı devlet hesapları (taklit ızgaralı): ingiltere 405 sn (kutu komşusu 273 gövde) · fransa 274 sn
(254) · danimarka 244 sn (165) · ispanya 133 sn (277) · qing 79 sn (46). Kutu komşusu sayısı: medyan 8,
p90 17, en çok 277 — yani 346 gövdenin birkaçı dünyanın tamamını komşu sayıyor.

**Yeniden hesap deneyi (aynı kesit, önbellek sıcak, eski kod):** Ayutthaya (Siam) gövdesi 100 m
oynatıldı ⇒ **19 devlet yeniden hesaplandı, 740 sn**: ingiltere 400 sn, ispanya 162 sn, qing 79 sn,
portekiz 16 sn. Koşu 40'ta kesit başına 1.767 sn'ye çıkan sürenin mekanizması budur (§2.4-N1).

Okuma: sürtünmeli paylaşım (18.11 yamasının ızgara işi) ucuz (41 sn); pahalı olan, kutu komşuluğuyla
yüzlerce gövdeye karşı yapılan talep kesişimleri ve bunların her küçük değişiklikte dünya çapında
gövdeler için yinelenmesi. Düzeltme: `arac/dolgu.py` DOLGU-YEREL-1127 (dal
`origin/motor-b-dolgu-yerel-1127`); eşitlik ve hız ölçümü Ek C'de.

---

## Ek C. DOLGU-YEREL-1127 düzeltmesinin sınavı [ÖLÇÜLDÜ 27.11, HAVVA, IDLE öncelik, mesai içi]

Betik: `denetim/KOSU-SORUSTURMA-1127/dolgu_esitlik.py` (motoru koşturmaz; Koşu 40'ın
`devletler_harita.js`i + taklit ızgara + taklit engel; önbellek dosyası açmaz). ESKİ = Koşu 40'ın
`dolgu.py`si (sha256 `da2eb150…`), YENİ = bu dal.

**C.1 Eşitlik (aynı girdi, ikisi de sıfırdan).** Sadeleştirme ve kanonik adım kapalıyken iki kod aynı
geometriyi vermeli; komşuluk daraltmasının kanıtı budur.

| Kesit | Gövde | ESKİ ↔ YENİ (sadeleştirme öncesi) | Engellenen listesi |
|---|---|---|---|
| 0800-01-01 | 80 | AYNI · 448/448 ayrık parça · simetrik fark 2,3e-15 derece² | aynı |
| 1300-06-15 | 339 | **bit bit AYNI** · 1.127/1.127 ayrık parça · simetrik fark 0 | aynı |
| 1550-06-15 | 320 | **bit bit AYNI** · 1.041/1.041 ayrık parça · simetrik fark 0 | aynı |
| 1760-03-11 | 346 | AYNI · 1.538/1.538 ayrık parça bit bit · simetrik fark 1,3e-15 | aynı |

Sınav 27.11 22:58'de bitti: **SONUÇ: HEPSİ AYNI** (dört kesit). 1760'ta sadeleştirme kapalıyken soğuk
süre: ESKİ 2.514 sn (kapanış ezberden; çekişme 1.923) ↔ YENİ 1.490 sn (kapanış 660 dahil; çekişme 617).

**Bilinen ve beyan edilen fark:** üretim ayarında (sadeleştirme 0,01° açık) YENİ çıktı ESKİ çıktıyla bit
düzeyinde aynı DEĞİLDİR: 0800 kesitinde toplam 602,8 derece² dolguda simetrik fark 6,5e-3 derece²
(en büyüğü `silla` 2,5e-3 ≈ 25 km², kıyı kırıntısı). Sebep ölçüldü: Douglas-Peucker sadeleştirmesi
halkanın başlangıç köşesinden demirler ve o köşe, çıkarılan komşu kümesine göre değişiyordu; yani ESKİ
kodun çıktısı da komşu kümesinin bir yan ürünüydü. YENİ kod parçayı önce kanonik biçime getirir
(`shapely.normalize`), sonuç yalnız geometriye bağlıdır. Kural değişmedi; kırıntının yeri değişti.

**C.2 Ezber sağlamlığı (bayat sonuç okunuyor mu).** Girdi değiştirilip ezber sıcakken hesaplanan sonuç,
ezber boşaltılıp sıfırdan hesaplananla karşılaştırıldı: 0800 ve 1300'de hepsi AYNI (simetrik fark 0).

| Kesit | Oynatılan | Yeniden hesaplanan devlet | Süre |
|---|---|---|---|
| 1300 | manica (orta boy gövde, 100 m) | 3 / 334 | 1 sn |
| 1300 | altinorda (en büyük gövde, 100 m) | 22 / 334 | 53 sn |
| 1550 | rusya (en büyük gövde) | 12 / 316 | 60 sn |
| 1760 | yatenga (orta boy gövde) | 4 / 342 | <1 sn |
| 1760 | rusya (en büyük gövde) | 29 / 342 | 143 sn |
| 1760 (ESKİ kod, Ek A) | ayutthaya | 19 / 342 | 740 sn |

**C.3 Hız (soğuk kesit, üretim ayarı).** 1760-03-11: YENİ **1.787 sn** (kapanış 827 · çekişme 714 · cins
56), ESKİ 3.652–4.110 sn (Ek A). Kapanış payı koşuda Koşu 40'ın kayıtlarından (miras) gelir.

**C.4 Ters yön (sınav kör mü).** "Deliğe düşen engel noktası sonucu değiştirmeli" denetimi 0800, 1300
ve 1760'ta fark üretmedi (o kesitlerde delik kuralına kalan dolu delik yok; küçük delikleri kapanış
zaten dolduruyor) — o üçünde sınav KÖR. **1550'de GÖRDÜ:** mogulistan'ın deliğine konan engel noktası
dolguyu 1e-4 derece² değiştirdi ve ezber sıcakken hesaplanan sonuç sıfırdan hesaplananla aynı çıktı.
Yerel engel anahtarı böylece bir kesitte ölçümle doğrulandı. `anlik_esitlik.py`de de delik kuralı
çalıştı (78 devlet-kesit, 39 engelli delik) ve üç yol aynı dosyayı verdi.

**C.5 Ayrı süreç yolu.** `denetim/KOSU-SORUSTURMA-1127/anlik_esitlik.py`: aynı 7 kesit üç yoldan
(süreç içi · anlık görüntüden ayrı süreç, devlet kayıtları silinmiş · ayrı süreç, sıcak) hesaplanır,
`dolgu.js` dosyaları bayt bayt karşılaştırılır. Sonuç `KOSU-GOZLEM-1128.md`de.

**C.6 Ölçülmeyen.** Gerçek motor bağlamıyla (gerçek `_YR_SAHIP`, gerçek duvar ve engel) hiçbir sınav
yapılmadı: motor 28.11 02:05'ten önce koşturulamadı. Tam koşuda kesit başına süre ÖLÇÜLMEDİ; ilk sayı
koşunun kendi ilerleme satırından gelecek.
