# KOŞU GÖZLEM DEFTERİ — 28 Kasım 2026 ölçüm/kurtarma koşusu (HAVVA, `C:\atlas-olcum-1128`)

Emre'nin 27.11.2026 talimatı: koşuyu gözle, olup biteni not et; hata büyükse durdur-düzelt-yeniden başlat,
değilse not et ve sonra düzelt; karar oturumda. Her satır bir nöbet anıdır; sayılar ölçüldüğü dosyayla.

## Koşudan önce (27.11)

- **17:26** Bekleyen süreç kuruldu: `olcum_kos.py` PID 9604, başlangıç 28.11 02:05, son 30.11 08:00.
  Ağaç Koşu 40 commit'i `be618bf23`; tuz dosyaları ve 1.163 girdi Koşu 40 klasörüyle aynı.
- **~18:00** Koşu 40'ın `_petek_devam` 1.927 pkl'i tek tek yüklenip ölçüm ağacına kopyalandı (bozuk 0,
  1.140 MB, tek iz `8da467691084425a`). Amaç: A kısmı kaldığı yerden yürüsün.
- **18:43 (nöbet)** Koşu bekliyor; PID 9604 canlı. Arka planda iki sınav koşuyor: sıkı eşitlik (1300/1550/
  1760, sadeleştirme ve kanonik adım kapalı) ve yeni kodun 1760 hız ölçümü. Ölçüm ağacındaki `dolgu.py`
  hâlâ ESKİ sürüm; sıkı sınav geçerse düzeltilmişi konacak ve koşu `--b-dk` büyük + kapanış mirasıyla
  yeniden kurulacak.

- **19:46** Sınav sonuçları [ÖLÇÜLDÜ, scratchpad `esitlik_siki.log`, `hiz_1760_yeni.log`]:
  - 1300-06-15, sadeleştirme ve kanonik adım kapalı: ESKİ ↔ YENİ **bit bit aynı** (1.127/1.127 ayrık parça,
    simetrik fark 0); engellenen listesi aynı. Ezber sağlamlığı (gövde oynatılınca sıcak ↔ sıfırdan) aynı:
    manica oynayınca 3/334 devlet (1 sn), altinorda oynayınca 22/334 devlet (53 sn) yeniden hesaplandı.
  - 1760-03-11, üretim ayarları, YENİ kod soğuk: **1.787 sn** (kapanış 827 · çekişme 714 · cins 56).
    Eski kod aynı kesitte 3.652–4.110 sn idi (Ek A). Kapanış payı koşuda mirastan gelecek.
  - ③ "ters yön" (deliğe engel noktası sonucu değiştirmeli) üç kesitte de KÖR: bu kesitlerde delik
    kuralına kalan dolu delik yok. Engel anahtarının doğruluğu kodla gerekçeli, ölçümle GÖSTERİLMEDİ.
- **19:50–20:00 (Emre: "koşu başlamadan alıcı gözle bir daha bak")** İkinci okumada bulunanlar ve yapılan:
  1. **Ⓑ hâlâ motorun içinde koşacaktı** (16 GB'lık süreç günlerce açık; A çıktıları Ⓑ'yi bekler; Ⓑ'de
     her düzeltme A'yı baştan koşturur). → `dolgu.py`: `DOLGU_AYRI_SUREC=1` ile `kosudan` yalnız bir
     ANLIK GÖRÜNTÜ yazar (`_dolgu_anlik/`: gövdeler, kara, ızgara, kesit bağlamı) ve döner; motor A'yı
     yazıp biter. Dolgu `py arac/dolgu.py --anlik <dizin>` ile ayrı, küçük süreçte hesaplanır.
     `uret_petek.py`ye DOKUNULMADI (tuz aynı). `olcum_kos.py`ye 2. aşama eklendi (`dolgu_nobet`,
     `--yalniz-dolgu`).
  2. **Kesit ezberi aynı veriyi ikinci kez diske yazıyordu** (kayıt başına 0,8–1,2 MB; 4.212 kesitte
     ~4 GB). → kesit kaydı artık yalnız devlet anahtarlarının listesi (`ref-1`).
  3. **Yeni çift ezberlerinde yarıçap/kara anahtarda yoktu** (benim 27.11 kodumun kusuru; tek bantlı
     koşuda zararsız, çok bantlıda bayat cevap verirdi). → `_yerel_baglam`: yarıçap ya da kara
     değişince ezberler boşalır.
  4. **Tuzun kapsamı bütün dosyaydı**: dosyaya bir yorum eklemek bütün Ⓑ kayıtlarını çöpe atıyordu
     ("durdur, düzelt, sürdür" imkânsızdı). → devlet katmanının tuzu yalnız okuduğu 22 işlevin kaynağı.
  5. Engel `MultiPoint`i her kesitte `_OZ_ONB`de sonsuza dek canlı kalıyordu → tek gözlü ezber.
  6. Her kesitte ~1.600 parçanın bütün köşeleri yeniden yuvarlanıp JSON'a çevriliyordu (parçaların
     ~%99'u bir önceki kesitle aynı nesne) → parça→indeks ezberi.
  7. `_BOLGE_ONB` tavanı 3.000 → 1.200 (kesitte ~350 gövde canlı).

- **20:07 ve 20:14** `anlik_esitlik.py` iki kez (ikincisi son kod hâliyle) [ÖLÇÜLDÜ, scratchpad
  `anlik_esitlik.log`]: 87 aralık, 7 kesit (0800-06-15 → 0810); duvar, sürtünmeli paylaşım ve delik
  engeli oynatılarak. Süreç içi = ayrı süreç (devlet kayıtları silinmiş, 290 devlet yeniden hesaplandı) =
  ayrı süreç sıcak (7/7 kesit hazır): `dolgu.js` üçünde de 847.688 bayt, sha256 `dd3dc96f…` — **bayt bayt
  aynı**. Kesit kaydı 7 kesitte 46 KB (eski biçimde ~1 MB/kesit). Sessiz yutma 0, duvarı aşan dolgu 0.
- **20:14** `olcum_kos.py --yalniz-dolgu` sahte kökte uçtan uca: Ⓑ süreci başladı, bitti (çıkış 0), aynı
  dosya özeti.
- **20:15** KURULUM: eski bekleyen süreç (PID 9604) durduruldu. `C:\atlas-olcum-1128\arac\dolgu.py` ←
  düzeltilmiş sürüm (sha256 `1af93447…`; Koşu 40'ınki `olcum\dolgu_kosu40_yedek.py`), `olcum\olcum_kos.py`
  ve `bellek_olc2.py` yenilendi. `uret_petek.py` Koşu 40 ile bayt bayt aynı (cmp). Yeni bekleyen süreç
  **PID 8588**: başla 28.11 02:05 · motor için son 30.11 08:00 · Ⓑ için son 02.12 08:00 · `--b-dk 100000`
  · ortam: `DOLGU_AYRI_SUREC=1`, `DOLGU_MIRAS_MODUL=da2eb150…`, `DOLGU_MIRAS_TALEP_KAYNAK=cb995dd6…`,
  `DOLGU_IZ_SN=20`.
- **22:58** Sıkı eşitlik sınavı bitti: 0800, 1300, 1550, 1760 — **HEPSİ AYNI**. 1760'ta en büyük gövde
  (rusya) oynatılınca 29/342 devlet yeniden hesaplandı, 143 sn; orta boy gövde (yatenga) 4/342, <1 sn.
  Beklenti: Ⓑ'de kesit süresi, o kesitte hangi gövdenin değiştiğine göre 1 sn ile birkaç dakika arasında.
- **Bu koşuda İLK KEZ denenen şeyler** (anayasa ilke 5'e aykırı; motor 02:05'ten önce koşturulamadığı için
  başka yolu yoktu, her biri ilk nöbette gözle doğrulanacak): ① motorun `bellek_olc2.py` sarmalı içinde
  koşması ② tek süreç + tek iş parçacığı (`MOTOR_SUREC_ISCI=1`, `MOTOR_PARALEL_ISCI=1`) ③ kopyalanmış
  1.927 `_petek_devam` dosyasından DEVAM ④ gerçek motor kancalarıyla anlık görüntü yazımı ⑤ kapanış mirası
  (gerçek önbellekte isabet edip etmediği ilk ilerleme satırında görülecek).
- **Beklenen akış:** 02:05 motor → A aşamaları (DEVAM ile) → "Ⓑ dolgu katmanı" aşamasında yalnız anlık
  görüntü (`C:\atlas-olcum-1128\_dolgu_anlik\`) → çıktı yazımı (`petek_govde.js`, `donemler.js`; kod Koşu
  39 ile aynı, o koşuda çalıştı) → motor biter → nöbetçi Ⓑ'yi ayrı süreçte başlatır (`olcum\dolgu.out`).

- **28.11 01:43 ÖN UÇUŞ** [ÖLÇÜLDÜ, HAVVA]: ① eşitlik sınavları geçti (sıkı sınav dört kesit HEPSİ AYNI
  22:58; ayrı süreç sınavı bayt bayt aynı 20:14) ② ölçüm ağacındaki `arac\dolgu.py` düzeltilmiş sürüm
  (sha256 `1af93447…`), `uret_petek.py` Koşu 40 ile aynı (sha256 `a60af734…`) ③ bekleyen süreç canlı: PID
  8588 (üst süreç 19128), komut satırında `DOLGU_AYRI_SUREC=1`, miras ayarları ve `DOLGU_IZ_SN=20` var
  ④ başka motor süreci yok (çalışan öteki Python'lar eczane uygulamaları) ⑤ boş RAM 12,1 / 23,7 GB, boş
  commit 39,2 GB, boş disk 137,5 GB ⑥ `_petek_devam` 1.927 dosya. Eksik yok; hiçbir şeye dokunulmadı.

## Bilinen, bu koşuda DÜZELTİLMEYECEK kusurlar (not: sonraki tam inşaya)

- Çıktı yazımı Ⓑ'den sonra (`uret_petek.py:10312` ↔ `:10353/:10595`).
- `petek_epok` her dönemi baştan hesaplıyor; `_VARLIK_ONBELLEK` sınırsız.
- Ana sürecin yedek hesapladığı devlet `_petek_devam`a yazılmıyor (`:8917-8920`).
- A/B ölçüm Dijkstra'ları her koşuda (2,5 dk).

## Koşu (28.11 02:05 →)

- **02:19 BAŞLANGIÇ DENETİMİ** [ÖLÇÜLDÜ: `olcum\nobet.log`, `uretim_canli.log`, `olcum\bellek.csv`]
  - 02:05:00 başladı (ölçer PID 2340). Sarmal (`bellek_olc2.py`) gerçek motorla ilk kez koştu: çalışıyor,
    `motor.err` boş, `bellek-hata.txt` yok.
  - 02:06 tuz `d7de80374c5d` doğrulandı; iki tuz da "geçen koşuyla AYNI ⇒ isabet bekleniyor". Düzeltilmiş
    `dolgu.py` motor tuzunu değiştirmedi (beklenen, şimdi ölçüldü).
  - 14 dakikada: girdi → ızgara → DEM → Dijkstra (2 dk) → iki A/B ölçüm Dijkstra'sı (1 dk 50 sn + 2 dk;
    üretime katkısız, bilinen israf) → petekler → yaslama → polygonize (1 dk 52 sn) → örtü sadeleştirme.
  - Bellek: özel 2,3 GB · çalışma 1,8 GB · boş RAM 10,9 GB. İşçi süreç yok (tek süreç).
  - Uyarılar (koşuyu etkilemez, not): ızgarada yer bulunamayan 5 ada tohumu (Tarawa, Banaba, Funafuti,
    Cocos, Kavaratti); DEM 84°'de bitiyor, kuzey 20 satır deniz seviyesiyle doldu; "hücresiz kaldı"
    uyarıları (Mısır, Eski Kahire, Masvingo, Kaminaljuyú, Remle…): aynı yerde iki nokta olabilir, veri
    tarafında bakılacak. 6.512 yetim yüz komşulara katıldı.
  - Karar: sürdür.
- **02:38** Emre istatistik istedi ⇒ `kosu_istatistik.py` yazıldı (`bellek.csv`den aşama aşama duvar /
  işlemci / ortalama çekirdek / bellek; her nöbette ve koşu sonunda koşturulacak). İlk 34 dakika
  [ÖLÇÜLDÜ]: 26 aşama geçildi, şu an "Varlık epokları — kuşatılmışlık ön geçişi". İşlemci 33 dk 12 sn /
  duvar 33 dk 46 sn = **0,98 çekirdek** (tek iş parçacığı, makinenin %12'si). Özel bellek en çok 2,9 GB,
  çalışma kümesi en çok 2,4 GB, boş RAM en az 9,8 GB. En uzun aşamalar: ada kuralı 9 dk 25 sn · kıyı
  kesimi + tavan 4 dk 51 sn · petekler ızgaradan 2 dk 14 sn · iki A/B ölçüm Dijkstra'sı toplam 3 dk 52 sn
  (üretime katkısız). Koşu 40'ta aynı ön aşamalar ~2 sa 06 dk sürmüştü (iki süreç, 4'er iş parçacığı,
  mesai içi düşük öncelik); bu koşuda petek aşamalarının sonuna 30 dakikada gelindi.
- **02:43 (nöbet)** Süreç canlı (PID 2340). Aşama: varlık epokları, kuşatılmışlık ön geçişi (7 dk 34 sn;
  Koşu 40'ta bu aşama 1 sa 32 dk idi). Özel 2,9 GB · çalışma 2,4 GB · boş RAM 10,0 GB · 0,98 çekirdek.
  Hata yok, askı yok. Henüz gövde aşamasına gelinmedi (DEVAM satırı yok). Değişiklik yok; sürdür.

**04:10 (Emre'nin sorusu üzerine ara denetim)** Süreç canlı (PID 2340; 20 sn'de 20 işlemci sn = 1,0 çekirdek).
Geçen 2 sa 04 dk. Ön aşamalar 1 sa 41 dk'da bitti (Koşu 40: 2 sa 11 dk); varlık epokları 1 sa 08 dk
(Koşu 40: 1 sa 32 dk). 03:46:46'da "Yabancı devlet gövdeleri" başladı.

- **③ DEVAM DOĞRULANDI:** "♻️ DEVAM … diskte HAZIR devlet 1927/2274"; ilk 1.210 devlet 1 dk 09 sn'de geçildi,
  iş ağırlığının %48'i hazır sayıldı. Kalan 347 devlet hesaplanıyor; ilki ingiltere (1211/2274).
- **İngiltere hızı [ÖLÇÜLDÜ, kalp atışlarından]:** gün 235 → 257 → 278 → 301 → 317 (1.317 günden), 5'er dk
  arayla: 22 · 21 · 23 · 16 gün / 5 dk ⇒ gün başına 13–20 sn. Kalan 1.000 gün bu hızla 4–6 saat [TAHMİN;
  imparatorluk büyüdükçe yavaşlaması beklenir].
- **YAKALANAN İSRAF (önbellek isabeti işi kısaltmıyor) [ÖLÇÜLDÜ]:** `C:\atlas-onbellek\motor_onbellek.sqlite`
  salt okunarak bakıldı: en büyük satır numarası 466.816, son yazılan satır 27.11 13:41:58 (Koşu 40'ın durduğu
  an). Yani bu koşu 2 saatte önbelleğe TEK yeni satır yazmadı ⇒ ıska yok, bütün okumalar isabet. Buna rağmen
  ingiltere'nin bir günü 13–20 sn. Sebep [KOD, `uret_petek.py:8683-8765`]: önbellek yalnız
  `_yabanci_govde_hesap`ı kısaltır; anahtarı kurmak için `petek_epok(a)` yine hesaplanır, isabetten sonra
  `_komsu_toprak_cikar` ve `_sinir_kisit_uygula` her gün yeniden koşar, bunların hiçbiri önbellekte değil.
  Aynı desen varlık epoklarında: `kusat` katmanı tam isabet, aşama yine 1 sa 08 dk. Koşu içinde DÜZELTİLEMEZ
  (`uret_petek.py` tuzdur; dokunmak 12 GB önbelleği boşa çıkarır). Sonraki tam inşa listesine: (a) anahtar
  `petek_epok`un girdisinden kurulsun, çıktısından değil; (b) komşu çıkarma + sınır kısıtı sonrası gövde de
  önbelleğe girsin; (c) DEVAM pkl'i her devlet bitince yazılsın (Koşu 40 gövde aşamasını bitirdiği hâlde 347 devletin
  pkl'i yok; en yeni pkl 19.11 17:37. Neden yazılmadığı ÖLÇÜLMEDİ; çıkarımım: havuzun hesapladığı
  devletler pkl'e düşmüyor. O yüzden şimdi yeniden yürünüyor).
- **Bellek:** gövde aşaması başlarken 5 dakikada 2,8 → 7,7 GB (1.927 pkl = diskte 1,11 GB, bellekte ~5 GB;
  DEV_HALKA 45.636). Şimdi özel 8,1 · çalışma 7,6 · boş RAM en az 7,8 GB · boş commit 37,6 GB. Koşu 40'ta bu
  aşamanın tepesi 16,6 GB idi. **Risk:** bugün Cumartesi, 09–19 mesai; çalışma kümesi 16 GB'ı aşarsa nöbetçi
  19:00'a kadar askıya alır (10 saat kayıp). 09:00 nöbetinde bakılacak.
- **İşlemci:** baştan beri 0,99 çekirdek (8 mantıksal işlemcinin %12'si); 5 dk pencerede en düşük 0,94, en
  yüksek 1,02. Tek iş parçacığı kasıtlı (bellek ölçümü); 7 işlemci boş duruyor.
- **Uyarılar (Koşu 40 günlüğüyle sayıldı, BİREBİR AYNI ⇒ bu koşuya özgü yeni hata yok):** UYARI 1.347
  (boya 1.170 · kademe 90 · renkler.py beyan edilmemiş paylaşım 60 · örtü 26 · 1 başlık) · BOZUK KENAR 385 ·
  "✗ BEKLENMEDİK — İNCELE" 875 · `motor.err` 0 bayt. Gürültü olarak not: epok tablosundaki ~990 satırın
  875'i "beklenmedik" damgalı ⇒ `denetim/EPOK-ONGORU.md` bayat, damga hiçbir şey söylemiyor (ya öngörü
  yenilenmeli ya denetim kalkmalı). Veri borcu olarak not: iki antlaşma hattı "TERS YAKA ŞÜPHESİ" ile
  UYGULANMADI (`d1918-fr-de-isgal`, `d1920-hu-ro-fiili`); 26 yer hücresiz kaldı (içinde bölge adları: Trakya,
  Endülüs, Mısır, İfrîkıye, Cibâl); 5 ada tohumu ızgarada yer bulamadı.
- **Yapılmadan geçen ölçüm işi:** iki A/B ölçüm Dijkstra'sı (3 dk 52 sn) ve ada kuralı (9 dk 25 sn) bilinen
  kalemler; değişmedi.
- **Ne kadarı bitti [TAHMİN]:** motor (A) kısmı için Koşu 40 süreleriyle ~%6–10 (gövde 15–30 sa + dönemler
  ~1 sa + seyreltme ~16 dk + çıktı yazımı ölçülmedi); Ⓑ ayrı süreç ondan sonra, 2–6 gün (ölçülmedi).
- **Karar:** sürdür. Durdurmayı haklı çıkaran hata yok; görülen israf tuz dosyasında, koşu içinde giderilemez.

**04:43 (nöbet)** Süreç canlı (PID 2340, Normal öncelik, 1,00 çekirdek), `motor.err` 0 bayt, askı yok. Geçen
2 sa 38 dk; gövde aşaması 56 dk, hâlâ ingiltere: gün 411/1317 (1502).
- **İngiltere yavaşlıyor [ÖLÇÜLDÜ]:** 5 dk'da gün sayısı 18 · 18 · 22 · 16 · 10 · 10 ⇒ son 10 dakikada gün
  başına ~30 sn (04:10'da 13–20 sn idi). Kalan 906 gün 30–60 sn/gün ile 7,5–15 saat [TAHMİN].
- **Önbellek:** hâlâ tek yeni satır yok (en büyük satır 466.816) ⇒ ıska yok; süre önbellek dışı işte.
  Varsayımım (ÖLÇÜLMEDİ): bir kısmı her yeni epok için `petek_epok`un ilk hesabı; öyleyse sonraki devletler
  bu epokları bellekten bulur ve daha hızlı geçer.
- **`_VARLIK_ONBELLEK` büyüyor [ÖLÇÜLDÜ, bellek-derin.csv 04:16]:** 80 epok · 418.980 geometri (418.053'ü
  PETEK_D ile paylaşılmıyor) · 13,0 milyon köşe; yani epok başına 5.237 geometrinin tam kopyası. 04:16 → 04:43:
  80 → 126 epok, özel 8,3 → 8,7 GB ⇒ epok başına ~8 MB. Toplam 1.173 varlık kırılması var ⇒ hepsi dolarsa
  +8 GB, özel ~17 GB [TAHMİN, doğrusal]. Bu, Koşu 40'ın 16,6 GB tepesiyle uyumlu ve raporun §4.2'deki
  "boşaltılmayan yapı" adayının ilk ölçümü.
- **Mesai riski somutlaştı:** özel 8,7 · çalışma 8,1 · boş RAM 6,3 GB (en az). Nöbetçi mesaide boş RAM
  < 2,5 GB olunca askıya alır; bu, özel ~12,5 GB (≈600 epok) dolayında olur. İngiltere bugün 09–19 arasında
  oraya varırsa koşu 19:00'a kadar askıda kalır. Eşik eczane kuralıdır, gevşetilmez.
- **Karar:** sürdür.

**06:43 (nöbet)** Süreç canlı (PID 2340, Normal öncelik, 1,00 çekirdek), `motor.err` 0 bayt, askı yok. Geçen
4 sa 37 dk; gövde aşaması 2 sa 56 dk, hâlâ ingiltere: gün 714/1317 (1723).
- **İngiltere hızı oturdu [ÖLÇÜLDÜ]:** 04:40 → 06:40 arası 411 → 714 gün ⇒ gün başına 23,8 sn (daha fazla
  yavaşlamadı). Kalan 603 gün ≈ 4 saat ⇒ askı olmazsa ingiltere ~10:40'ta biter [TAHMİN]. Devam dizininde pkl
  hâlâ 1.927 (ingiltere bitince 1.928 olmalı; bakılacak).
- **Önbellek:** hâlâ tek yeni satır yok (466.816) ⇒ ıska yok.
- **Bellek [ÖLÇÜLDÜ]:** özel 11,7 GB (tepe) · çalışma 9,6 GB · boş RAM 4,5 GB (en az) · boş commit 34,3 GB.
  `_VARLIK_ONBELLEK` 379 epok; 06:16'da 326 epok · 1.616.017 geometri (1.614.869'u paylaşılmıyor) · 73,8 milyon
  köşe ⇒ epok başına ~226 bin köşe. 126 → 379 epokta özel +3,0 GB ⇒ epok başına ~11,8 MB (04:43'teki 8 MB
  tahminimden yüksek; geç epoklar daha köşeli). Özel belleğin 11,7 GB'ının en az ~4 GB'ı bu yapı.
- **Gözlem:** 05:01–06:01 arası çalışma kümesi 8,2 → 3,4 GB'a indi (Windows soğuk sayfaları kırptı; özel bellek
  büyümeye devam etti), 06:06'da 8,7 GB'a geri döndü. Yani eski epokların sayfaları soğuk ama bir şey (ÖLÇÜLMEDİ;
  çöp toplayıcının tam turu olabilir) hepsini yeniden dokunuyor.
- **09:00 beklentisi:** boş RAM saatte ~1 GB düşüyor ⇒ 09:00'da 2,5 GB eşiğinin altında ya da sınırında
  olacak; nöbetçi büyük olasılıkla mesai başında askıya alır ve 19:00'da sürdürür (ingiltere'nin bitmesine
  ~1,5 saat kala). Eczane kuralı; dokunulmaz. Kayıp ≤ 10 saat; motor son tarihi 30.11 08:00.
- **Karar:** sürdür.

**08:43 (nöbet)** Süreç canlı (PID 2340, Normal öncelik, 1,00 çekirdek), `motor.err` 0 bayt, henüz askı yok.
Geçen 6 sa 37 dk; gövde aşaması 4 sa 56 dk, hâlâ ingiltere: gün 1094/1317 (1899).
- **İngiltere [ÖLÇÜLDÜ]:** 06:40 → 08:40 arası 714 → 1094 gün ⇒ gün başına 18,9 sn. Kalan 223 gün ≈ 70 dk;
  askı olmasa ~09:50'de biterdi. pkl hâlâ 1.927. Önbellekte yeni satır yok (466.816).
- **BELLEK — ÖLÇÜMÜN ANA BULGUSU [ÖLÇÜLDÜ]:** özel 15,9 GB (tepe) · çalışma 13,5 GB · boş RAM 1,98 GB (en az)
  · boş commit 30,2 GB. `_VARLIK_ONBELLEK` 645 epok; 08:17'de 582 epok · 2.754.543 ayrık geometri
  (2.752.632'si PETEK_D ile paylaşılmıyor) · 146,0 milyon köşe ⇒ **her epok ~4.730 YENİ geometri nesnesi
  üretiyor, epoklar arasında paylaşım yok** (bir kırılmada birkaç petek değiştiği hâlde 5.649 peteğin
  ~%84'ü yeniden kuruluyor). 379 → 645 epokta özel +4,2 GB ⇒ epok başına ~15,8 MB (artıyor: 8 → 11,8 → 15,8).
  Gövde başındaki 7,7 GB'ın üstüne binen 8,2 GB'ın tamamına yakını bu yapı.
- **Öngörü [TAHMİN, doğrusal]:** 1.173 epokun hepsi dolarsa özel ~23–24 GB. Koşu 40'la tutarlı (ana süreç
  16,6 + işçi 7,4 = 24 GB; orada iki sürece bölünmüştü). Yani tek süreç 16 GB'lık makineye sığmıyor; 19:00'dan
  sonra sayfa dosyasına taşarak koşacak (commit payı yeterli, çökmez; hız kaybı ÖLÇÜLECEK).
- **Kod notu [KOD, `uret_petek.py:3366`, `:6229-6425`]:** `_VARLIK_ONBELLEK` sınırsız sözlük; `MOTOR_EZBER_TAVAN`
  ona dokunmuyor ("~15 sn/çağrı" diye bilerek bırakılmış). İngiltere'nin gün başına 13–30 sn'si de büyük
  ölçüde bu ilk-epok hesabı; sonraki devletler epokları bellekten bulacak (04:43 varsayımını kod yorumu
  destekliyor; hız ölçümü ingiltere bitince). Sonraki tam inşa için: epok = taban + yalnız değişen petekler
  (paylaşımlı), ya da köşe dizisi olarak sakla; kazanç ~15 GB.
- **09:00:** boş RAM 2,5 GB eşiğinin altında ⇒ nöbetçi mesai başında askıya alacak. Askı yolunun ilk gerçek
  sınavı; 09:04'te ayrıca bakılacak.
- **Karar:** sürdür.

