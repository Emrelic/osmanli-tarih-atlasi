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
- **Bu koşuda İLK KEZ denenen şeyler** (anayasa ilke 5'e aykırı; motor 02:05'ten önce koşturulamadığı için
  başka yolu yoktu, her biri ilk nöbette gözle doğrulanacak): ① motorun `bellek_olc2.py` sarmalı içinde
  koşması ② tek süreç + tek iş parçacığı (`MOTOR_SUREC_ISCI=1`, `MOTOR_PARALEL_ISCI=1`) ③ kopyalanmış
  1.927 `_petek_devam` dosyasından DEVAM ④ gerçek motor kancalarıyla anlık görüntü yazımı ⑤ kapanış mirası
  (gerçek önbellekte isabet edip etmediği ilk ilerleme satırında görülecek).
- **Beklenen akış:** 02:05 motor → A aşamaları (DEVAM ile) → "Ⓑ dolgu katmanı" aşamasında yalnız anlık
  görüntü (`C:\atlas-olcum-1128\_dolgu_anlik\`) → çıktı yazımı (`petek_govde.js`, `donemler.js`; kod Koşu
  39 ile aynı, o koşuda çalıştı) → motor biter → nöbetçi Ⓑ'yi ayrı süreçte başlatır (`olcum\dolgu.out`).

## Bilinen, bu koşuda DÜZELTİLMEYECEK kusurlar (not: sonraki tam inşaya)

- Çıktı yazımı Ⓑ'den sonra (`uret_petek.py:10312` ↔ `:10353/:10595`).
- `petek_epok` her dönemi baştan hesaplıyor; `_VARLIK_ONBELLEK` sınırsız.
- Ana sürecin yedek hesapladığı devlet `_petek_devam`a yazılmıyor (`:8917-8920`).
- A/B ölçüm Dijkstra'ları her koşuda (2,5 dk).

## Koşu (28.11 02:05 →)

