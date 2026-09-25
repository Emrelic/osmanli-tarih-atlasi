# YUK-BOLME-0925 — geometri yükünü zamana göre bölmek

25 Eylül 2026 · oturum YUK-BOLME-0925 · koordinatör YILDIRIM BAYEZIT · karar Emre'nin

> 🔴 **ASIL BULGU (M-5180 ② gereği başa alındı):** 127 MB'lık geometri havuzunun
> **%76'sı (96,25 MB) TEK SEFERLİK halka**, yani yalnız bir kayıtta geçen 37.067
> halka. Sebebi şu: yabancı devletin her yeni `dnm` dönemi gövdesini **baştan
> yazıyor**. Tek bir günü çizmek için en çok 2,2 MB gerekiyor, bütün zaman ekseni ise
> 127 MB. **Bölmenin bu kadar kazandırmasının sebebi bölmenin kendisi değil, bu
> TEKRAR.** Kök motorda (§9); bulgu MOTOR-LEGO-0925'e yatay mesajla iletildi.
>
> 🔴 **KAPI (M-5180 ④):** Bu yamadan sonra tarayıcı `_web` + `geo/` dosyalarını, sekiz
> araç ise asıl dosyaları okuyor. Bu bir ÇATAL. Eşdeğerlik her yayından önce
> `py arac/geo_dilimle.py --sina` ile yeniden sorulur (§10).

**Kısa cevap:** Böl, ama eşit BAYTLI dilimlerle, eşit yıllı dilimlerle değil. Eşit yıl
10 kat eşitsiz dosya veriyor. **24 dilim** öneriyorum. Böylece açılışta inen geometri
**35,36 → 1,49 MB gzip** olur, açılıştaki toplam yük **44,2 → 11,1 MB gzip** iner.
Yerelde, aynı makinede ölçtüm: harita **27,0/29,9 → 19,3/17,2 sn**'de hazır oluyor, JS
yığını **863 → 165 MB**'a düşüyor. Doğruluk: dilimi inmemiş bir günde harita
**hiç çizilmez**; önceki doğru gün ekranda kalır (§6). Yama hazır, **uygulanmadı**.
Dal `yuk-bolme-0925` (worktree `C:/atlas-yuk-bolme`), yama dosyası
[`YUK-BOLME-0925.patch`](YUK-BOLME-0925.patch).

Ölçüm aletleri:
- `ARAC-YUK-YAPI-0925.py`: dosya yapısı
- `ARAC-YUK-BOLME-0925.py`: bayt dağılımı → [`YUK-BOLME-0925.json`](YUK-BOLME-0925.json)
- `ARAC-YUK-ACILIS-0925.py`: geometri dışı açılış yükü
- `ARAC-YUK-SINAV-0925.js`: tamlık ve aynılık sınavı
- `ARAC-YUK-ACILIS-SINAV-0925.js`: CDP açılış süresi (`ARAC-YUKLEME-0072-SINAV.js` kopyası)
- `ARAC-YUK-SINAV-OKU-0925.py`: süre çıktısının özeti

---

## 1. Ne ölçtüm — birim HALKA (havuz öğesi)

Bugünkü biçim şu (motorun halka havuzlaması): `DONEMLER[].o/.v/.h[].g` ve
`DEVLET_HARITA[].dnm[].g` **PARCA_HALKA** indeksi taşır, o da halka listesidir.
Yani bölünecek şey halkalardır.

| | |
|---|---|
| halka | Osmanlı 6.082 · yabancı 71.557 · **yetim 0** (her halka en az bir kayıtta geçiyor) |
| havuz | **127,31 MB ham · 34,73 MB gzip** (şartnamenin 127,4 / ~35'i doğrulandı) |
| kayıt | 590 Osmanlı dönemi + 3.900 yabancı `dnm` = 4.490; zaman ekseni 1.890 temel aralık |
| **tek gün için gereken** | 1281: 1,34 MB ham / **0,43 gzip** · 1683: 1,90 / 0,61 · 1878: 2,19 / 0,70 · en çok **2,21 MB ham** |
| şartname ③ dağılımı | ✅ birebir doğrulandı (590 kayıt, aynı 50 yıllık kovalar) |

🔴 **Yükün asıl sebebi: TEK SEFERLİK halkalar.** 127 MB'ın **96,25 MB'ı (%76)** yalnız
**bir** kayıtta geçen 37.067 halkadır. Ömürlerine bakınca: 5 yıldan kısa ömürlü halkalar
**100,1 MB**, 300 yıldan uzun ömürlüler ise yalnız 1,3 MB. Yabancı devletin her yeni
`dnm` dönemi gövdesini baştan yazıyor, Voronoi sınırı da milim oynadığı için halka
paylaşılamıyor. Sonuç: bir gün 2 MB, bütün zaman ekseni 127 MB. **Bölmenin bu kadar
kazandırmasının sebebi bu.** Aynı sebep kalıcı olarak ancak motorda çözülür (§9).

### Üç kova (şartname ①)
| K | ORTAK (≥2 dilim) | DİLİME ÖZEL | TEK SEFERLİK (1 kayıt) |
|---|---|---|---|
| 12 | 14,59 MB | 112,72 MB | 96,25 MB |
| 20 | 20,21 MB | 107,10 MB | " |
| 24 | 21,79 MB | 105,52 MB | " |
| 30 | 24,69 MB | 102,62 MB | " |

⇒ **"Hep yüklenen ortak dosya + dilimler" düzenini REDDEDİYORUM.** K=24'te ortak kova
tek başına 21,8 MB ham (~6 MB gzip) olurdu; bu, açılış diliminin dört katı. Onun yerine
**her dilim kendi başına yeterlidir**: aralığının her gününü çizmeye yetecek bütün
halkaları taşır. Bedeli çakışmadır: sınırı aşan halka iki dilimde de durur.

## 2. Eşit bayt, eşit yıl — karşılaştırma

Eşit bayt kesimi açgözlüdür: dilim sınırı her zaman bir kaydın f/t gününe oturur, dilim
ham bayt hedefine ulaşınca kesilir, hedef de istenen dilim sayısını verecek şekilde
ikili aramayla bulunur.

| düzen | dilim | gzip en küçük–en büyük | açılış dilimi | toplam gzip (çakışma) |
|---|---|---|---|---|
| eşit bayt K=8 | 8 | 3,97 – 5,42 | 3,97 | 40,02 (1,15×) |
| eşit bayt K=12 | 12 | 2,67 – 3,92 | 2,67 | 42,63 (1,22×) |
| eşit bayt K=16 | 16 | 2,13 – 3,14 | 2,13 | 45,11 (1,29×) |
| eşit bayt K=20 | 20 | 1,74 – 2,68 | 1,74 | 47,89 (1,36×) |
| **eşit bayt K=24** | **24** | **1,49 – 2,30** | **1,49** | **50,33 (1,43×)** |
| eşit bayt K=30 | 30 | 1,24 – 1,97 | 1,24 | 54,07 (1,52×) |
| **eşit 30 YIL** (Emre'nin önerisi) | 22 | **0,45 – 4,51 (10×)** | 0,45 | 47,83 |

- Emre'nin iki sezgisi de doğru büyüklükte (12–24). Şartnamenin ~1,5 MB gzip hedefini
  **K=24** tutuyor.
- **Eşit yıl:** yükün yarısı 1821–1911'de. O yıllarda dilim 4,5 MB gzip, 1281–1311'de
  ise 0,45 MB.
- ⚠️ **Eşit yıl bir şeyde daha iyi: AÇILIŞ.** 1281–1311 dilimi 0,45 MB, eşit baytın
  ilk dilimi 1,49 MB. Seçenek olarak şu yapılabilir: eşit bayt + ilk 30 yılı ayrı küçük
  bir dilime ayırmak. Kazanç ~1 MB gzip, 20 Mbit hatta ~0,4 sn. Uygulamadım, çünkü
  kazanç küçük.
- **Kronoloji maddesi sayısına göre bölmeyi ölçmedim** (`ölçülmedi`). Gerekçe
  şartname §3'te; bayt dağılımı kayıt dağılımını izlemiyor (3.900 yabancı `dnm`
  590 Osmanlı döneminden ağır basıyor).
- Eşit baytta bile gzip ±%25 oynuyor (1,49–2,30), çünkü hedef HAM bayttır ve erken
  dönem halkaları daha iyi sıkışıyor. Hedef gzip'e göre de kurulabilir, ama kazancı
  küçük.

## 3. İlk açılış (şartname ②)

| | bugün | dilimli (K=24) |
|---|---|---|
| geometri (2 dosya) | 131,31 MB ham / **35,36 gzip** | `_web` iki dosya 4,12 ham / 0,84 gzip + g01 7,61 ham / **1,49 gzip** |
| geometri dışı data (264 dosya) | 26,47 / 8,41 | aynı |
| js + css | 1,05 / 0,38 | aynı |
| **açılış toplamı gzip** | **44,15 MB** | **11,12 MB (−%75)** |

🔴 **Şartname başlığındaki "~3 MB" yalnız geometri için doğru.** Açılışın tamamı
~11 MB olur. Sıradaki en büyük kalem `data/altlik.js` (13,50 ham / 4,79 gzip). Onun
6→3 ondalık kırpması YUKLEME-0072'de ölçülmüştü (−4,9 MB ham, kayıpsız sayılır, sapma
≤55 m).

### Gerçek açılış — yerel sunucu, headless Chrome, sırayla iki tur (`YUK-BOLME-0925-SINAV-*.json`)

Ölçüt: `haritaHazir && aktifDonem >= 0`, yani harita ilk dönemi GERÇEKTEN çizdi.

| | dilimsiz 1 / 2 | dilimli 1 / 2 |
|---|---|---|
| DOMContentLoaded | 17,3 / 20,4 sn | **6,0 / 5,7 sn** |
| **harita hazır** | 27,0 / 29,9 sn | **19,3 / 17,2 sn** (−%29…−%42) |
| JS yığını | 863 / 866 MB | **166 / 163 MB** (−%81) |
| tel üstü (yerel, sıkıştırmasız) | 159,6 MB | 47,4 MB (g01 + önden çekilen g02 dahil) |

- Yerel sunucu gzip yapmıyor ve ağ yok, yani bu sayılar **yalnız CPU/bellek kazancını**
  gösteriyor. Gerçek ağda buna **~34 MB gzip daha az indirme** eklenir; 20 Mbit hatta
  ~14 sn eder. Bunu hesapladım, **ölçmedim**: yayında ancak uygulandıktan sonra
  ölçülebilir.
- DCL'den sonra kalan ~11–13 sn iki sürümde de aynı. Bu harita stili, döşemeler ve
  app.js'in geometri dışı kurulumu; bölme onu değiştirmez. **Sıradaki darboğaz orası.**
- Ölçümler koşu 15 çalışırken alındı, iki sürüm aynı koşullarda. Mutlak saniyeler
  makineye göre değişir, oranlar değişmez.

## 4. Tasarım (şartname ③)

**Dosya düzeni.** Ortak dosya yok.
- `data/geo/g01.json … g24.json`: `{"o":{"i":[global halka indeksleri],"r":[halkalar]},"y":{…}}`.
- `data/donemler_web.js`, `data/devletler_harita_web.js`: motor çıktısının HAVUZSUZ
  kopyası (`window.PARCALAR = []`) ve `window.GEO_DILIMLER` dilim tablosu
  (`{f, dosya, halka, ham, gz}`).
- 🔴 **Motor çıktısına DOKUNULMAZ.** 8 araç havuzu doğrudan `data/donemler.js` /
  `devletler_harita.js`ten okuyor: `denetle_bosluk`, `denetle_bitisiklik`,
  `denetle_gorunurluk`, `uret_devirler`, `motor_esitlik`, `renk_cikti`, `dolgu`,
  `denetle_yayin`. İlk taslağım o dosyaları yerinde boşaltıyordu; bunu görünce
  değiştirdim. Tarayıcı artık yalnız `_web` dosyalarını okuyor.
- Üretici `arac/geo_dilimle.py` (`--k 24`), `uret_petek.py`'den SONRA koşar, 52 sn
  sürer. Yeniden koşturmak güvenlidir.

**Ne zaman istenir.**
- Açılış günü dilimi app.js çalışır çalışmaz `fetch` edilir, harita stiliyle paralel
  iner.
- Bir güne geçerken (`tarihAyarla`) o günün dilimi hazır değilse gün BEKLER.
- Önden çekme: hareket yönündeki komşu dilim, mevcut dilimin son çeyreğine
  girilince istenir; açılışta ilk çizimden 1,5 sn sonra g02 istenir.
- Dilim geçişinin bedeli ~2 MB gzip indirme + 0,4–0,7 sn `JSON.parse` (node'da
  ölçüldü). Önden çekme bu bedeli çoğu zaman gizler.

**Yükleme yolu.** `fetch` + `JSON.parse`, paketleyici yok, düz JS. YUKLEME-0072 ölçmüştü:
`JSON.parse`, `<script>`ten %66–73 hızlı. Sürüm damgası (`?v=rNNNN`) app.js'in kendi
`<script>` etiketinden okunur, yani `surum_damgala.py` yeterli.

**app.js'te değişenler** (tamamı yamada):
- `parcaCoz`: seyrek havuzda eksik halka görürse **throw eder**; sessizce `undefined`
  koordinat çizmez.
- `tembelAlan`: `donemler[].o/.v/.h` ve `dnm[].ft` ilk okunduklarında çözülür. Bütün
  tüketiciler (`guncelle`, `devletGuncelle`, `devletiYay`, `d_katman`) yalnız o gün aktif
  olan kaydı okuyor; tek tek taradım, başka tüketici bulmadım.
- `geoDilimNo` · `geoHazir` · `geoIste` · `geoBekle` · `geoOnden` · `geoRozet`
- Kapı iki yerde: `tarihAyarla` (tek `suanki` yazıcısı, grep'le doğrulandı) ve
  `guncelle`'nin başı (açılış için).

## 5. Ters yön (şartname ④) — yanlış harita mı, bekleme mi?

**Karar: BEKLEME. Harita, başlık ve kronoloji ÖNCEKİ doğru günde kalır.**
- Kaydırma çubuğu kullanıcının bıraktığı yerde durur.
- Rozet şunu yazar: *"⏳ 1683 haritası iniyor… (ekrandaki harita: 1 Ocak 1281)"*.
- Dilim inince **en son istenen** güne geçilir, aradaki istekler düşer.
- Boş harita çizilmez; eski geometri yeni tarihle de gösterilmez.
- İndirme hatasında rozet uyarı verir, yarım dilim "hazır" sayılmaz, bir sonraki
  istek yeniden dener.

### Sınavlar (ikisi de iki yönde)

| sınav | sonuç |
|---|---|
| **S1 TAMLIK** (`ARAC-YUK-SINAV-0925.js`): 3.782 test günü (her kaydın f, f−1, t, t−1 günü, dilim sınırı ±1, uçlar), 858.270 aktif kayıt-gün | **0 eksik halka** |
| S1 negatif: dilim seçimi bir gün kaydırıldı | **2.894 eksik yakalandı** ✓ (sınav kör değil) |
| **S2 AYNILIK**: dilimlerdeki 224.706 halka ↔ orijinal havuz | **0 fark** · havuz boyu 6.082/6.082 · 71.557/71.557 |
| tarayıcı: 1281 açılışında 1683-09-12'ye atlama | beklerken `suanki` 1281'de kaldı; 5,2 sn sonra (uygulama önizleme paneli, yerel sunucu) 1683 çizildi, `aktifDonem` doğru |
| tarayıcı: 40 rastgele güne 30 ms arayla hızlı sürükleme | dilimi inmemiş gün **0 kez** gösterildi · son gün = son istek · `donemBul` tutarlı · hata **0** |
| tarayıcı: 1592 görünümü | Osmanlı + 126 yabancı gövde çizildi (ekran görüntüsüyle bakıldı) |

## 6. Bulamadıklarım ve ölçemediklerim
- **Yayında (GitHub Pages, gzip, gerçek ağ) ölçüm yok.** Yama uygulanmadan ölçülemez.
- **Bellekten atma (eviction) yok.** Gezilen dilimler bellekte kalır. Bütün tarih
  gezilirse ~173 MB ham birikir; bu bugünkü açılış yığınından (863 MB) yine de az.
- **Oynatma (oynat) modunda dilim sınırında kısa duraklama** olabilir; önden çekme
  bunu gizlemeli. Oynatmayı ayrıca uzun koşturmadım.
- Kronoloji maddesi sayısına göre bölme ölçülmedi (§2).

## 7. Uygulama sırası (koşu 15'ten sonra, koordinatör emriyle)
1. Dal `yuk-bolme-0925`, `main`e alınır (index.html · js/app.js · arac/geo_dilimle.py).
2. Koşu çıktısı indikten sonra: `py arac/geo_dilimle.py --k 24` → **`py arac/geo_dilimle.py --sina` (0 dönmeli)** → `py arac/surum_damgala.py`.
3. `data/geo/*.json` + iki `_web` dosyası commit'lenir. Her yayında ~173 MB ham
   dilim demek; Pages sitesi ~335 MB olur. Pages'in 1 GB sınırının altında, ama depo
   geçmişi her koşuda büyür.
4. 🔴 **`arac/denetle_yayin.py`'ye iki ek şart** (sahibi karar verir, ben
   dokunmadım). Worktree'de koşturdum, yeni düzende şunları söylüyor:
   - `data/donemler.js` ve `data/devletler_harita.js` "yetim" görünüyor → muafiyet
     gerekir: "motor çıktısı, tarayıcı `_web` kopyasını okur".
   - Kapı `data/geo/gNN.json`u **hiç tanımıyor** → `GEO_DILIMLER.d[].dosya`nın her
     birinin git'te izlendiğini soran bir satır gerekir. Yoksa eksik dilim yayında
     404 verir. Uygulama bunu sessizce geçmez (rozet "indirilemedi" der), ama kapı
     da yakalamaz.
   - Aynı değişkenin iki dosyada tanımlı olması (`donemler.js` ↔ `_web`) 12 uyarı
     üretiyor. Bunlar yayını durdurmuyor.
5. Yayından sonra `ARAC-YUK-ACILIS-SINAV-0925.js A <yayın url> yayin-dilimli` ile ölç.

## 8. Önceki ölçümün düzeltmesi (YUKLEME-0072 §4b)
`ARAC-YUKLEME-0072-DILIM.py` Osmanlı gövdesi için `o` + **`c`** indekslerini topluyordu.
Oysa `c`, **PETEKLER** indeksidir (kapanan petekler), parça değildir. Halka havuzlaması
da (`PARCA_HALKA`) o tarihten sonra geldi. Bu yüzden oradaki "tek gün 6,85 MB" bugün
**en çok 2,21 MB**, "yüzyıl dilimi 6–50 MB" tablosu da bugünkü veri için geçersiz. Bu
rapordaki sayılar halka düzeyinde ve güncel dosyadan.

## 9. Kapsam dışı ama ölçüldü — motor tarafı
Havuzun %76'sı tek seferlik halka (§1). Motor, yabancı `dnm` dönemlerinde değişmeyen
parçaları önceki dönemin halkasıyla paylaştırabilirse (halka kimliği geometrik eşitlik
yerine "değişmedi" hükmüyle verilirse) toplam havuz küçülür, dilimler de onunla
birlikte küçülür. Bu `uret_petek.py` işidir; ne kadar kazandıracağını **ölçmedim**.

## 10. Çatal kapısı — `py arac/geo_dilimle.py --sina` (M-5180 ④)

**Neden `denetle_yayin.py`nin içinde değil de üreticide:** Sınav, dilimleyicinin
biçimini (satır düzeni, `GEO_DILIMLER` şeması, halka bölme) birebir bilmek zorunda.
Biçim değişirse üretici ile sınavı **aynı dosyada, aynı commit'te** değişir; ikisi
birbirinden bayatlayamaz. `denetle_yayin.py` sınavı yalnız çağırır ve çıkış koduna
bakar (0 temiz / 1 ihlal). Çağrı satırını dosyanın sahibi yazar. Sınav ~1 dk sürer ve
~2 GB bellek kullanır; hiçbir dosyaya yazmaz.

| şart | ne sorar |
|---|---|
| S1 TAMLIK | app.js'in seçtiği dilim, o gün aktif her kaydın her halkasını taşıyor mu? `gunIdx` (Date.UTC huyları dahil: 0–99 yılı, gün taşması), `aktifAralik` ve `geoDilimNo` app.js'in AYNISI |
| S1-NEG | aynı sınav dilim seçimi 1 gün kaydırılarak koşar ve **eksik BULMALIDIR**; bulamazsa sınav kördür ve kapı KALIR |
| S2 AYNILIK | dilimdeki her halka asıl havuzdakine eşit mi, asıl havuzun her halkası en az bir dilimde mi? |
| S3 ÇATAL | `_web` dosyaları asıl dosyalarla, havuz satırı ve `GEO_DILIMLER` dışında **satır satır** aynı mı, `_web` havuzu gerçekten boş mu? |
| S4 DOSYA | tablodaki her dilim diskte mi, bayt boyu tabloyla tutuyor mu? (bayat dilimi yakalar) |

**Temiz çıktıda:** S3 17/17 + 7/7 satır, 0 fark · S4 24/24 dilim · S2 224.706 halka,
0 fark, kapsanmayan halka 0 · S1 3.782 gün, 858.270 kayıt-gün, 0 eksik · S1-NEG 2.894
eksik. **Python'daki gün taklidi JS sınavıyla aynı üç sayıyı verdi** (3.782 · 858.270 ·
2.894); yani iki ayrı çalışma zamanı aynı hükme vardı.

**Kapının kendi sınavı** (`denetim/ARAC-YUK-KAPI-SINAV-0925.py`): **5/5**.

| durum | beklenen | kapı |
|---|---|---|
| T0 temiz | 0 | 0 ✓ |
| T1 çatal: `_web` DONEMLER'de bir tarih +1 yıl | 1 | 1 ✓ (S3) |
| T2 bir dilimde 1 rakam değişti, bayt boyu aynı | 1 | 1 ✓ (S2) |
| T3 bir dilim dosyası silindi | 1 | 1 ✓ (S4) |
| T0' geri yazıldıktan sonra | 0 | 0 ✓ |
