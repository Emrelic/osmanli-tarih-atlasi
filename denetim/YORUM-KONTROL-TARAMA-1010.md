# YORUM-KONTROL-TARAMA-1010 — "YORUM ≠ KONTROL" sınıfının taraması

**Taban:** `origin/main` `37770b31561d67b1593ddcd4c0a9a07e5b4d11eb` (ayrı worktree `C:tlas-yorum`, detached) · **makine:** UMIT ·
**model:** Opus (koordinatör kıta + 6 alt ajan, her biri bir dosya grubu) · **10 Ekim 2026** ·
YALNIZ ÖLÇÜM: depoya hiçbir şey yazılmadı, `uret_petek.py` koşturulmadı ve ithal edilmedi.
Tam döküm (her iddia: yorum · kod satırı · eksik · kanıt komutu→çıktı): `YORUM-KONTROL-TARAMA-1010.json`.

## 0. Pozitif kontroller
| kontrol | şartname | ölçüm |
|---|---|---|
| `girdi.py:108-109` "aynı ad iki dosyada ⇒ HATA (aşağıda kontrol ediliyor)" | BOŞ | **KARŞILANMIŞ** — `girdi.py:621-625` `yukle()` `raise ValueError("AD ÇAKIŞMASI…")`; yorumla aynı commit (`35436fe9`, 30 Tem). Motor bu yoldan okur (`uret_petek.py:1028`), `denetle.py:1111` de. Sentetik: a.js+b.js aynı ad → ValueError · aynı dosya listede iki kez → ValueError. Şartname düzeltildi (İRTİBAT, aynı sabah). |
| `uret_petek.py:564` "TUZ = motor kodu (uret_petek · renkler · girdi · motor_onbellek)" | SIFAT-YANLIŞ | **SIFAT-YANLIŞ** ✓ — motor ayrıca `kosu_kilit`(:121) · `yukseklik`(:708) · `dolgu` · `girdi_listesi`(girdi.py:115 yoluyla) ithal ediyor; tuzda yoklar. Aynası: `motor_onbellek.py:14`, `girdi.py:831`. |

📌 Tek gerçek yan yol: `_sahiplik_uygula.py:430` `girdi.oku_dosya`yı doğrudan çağırıyor, `yukle()`nin AD ÇAKIŞMASI'nı atlıyor. Orada tekillik İDDİA eden yorum YOK ama `:422` "motorun okuduğu hâl" sıfatı yanlış (çapraz-dosya mükerrerde sözlük sonuncuyu tutar, motor durur). Yanlış uygulamayı `:1062` "belirsiz" kovası önlüyor.

## 1. Sayılar
Yöntem: iddia kalıplarıyla aday grep'i (yorum + docstring), ardından her iddia için kodu **akışla** arama (raise / sys.exit / return kodu / ihlal bayrağı / kova çağrısı), çağrı zinciri modüller arası izlendi. Tarihî anlatı ve uygulanan ilke cümleleri iddia sayılmadı. grep adaylarından (yalnız arac yarıları + js: 215+227+137) **291 iddia** sınıflandı.

| kapsam | iddia | KARŞILANMIŞ | KISMİ | BOŞ | SIFAT-YANLIŞ | ÖLÇÜLEMEDİ |
|---|---|---|---|---|---|---|
| denetle.py | 47 | 38 | 7 | 1 | 1 | 0 |
| uret_petek.py | 31 | 22 | 5 | 1 | 1 | 2 |
| girdi · _sahiplik_uygula · denetle_yayin · girdi_listesi · motor_onbellek · kosu_kilit | 36 | 28 | 5 | 0 | 3 | 0 |
| öteki arac/*.py (yarı 1, 77 dosya) | 64 | 45 | 10 | 3 | 5 | 1 |
| öteki arac/*.py (yarı 2, 77 dosya) | 54 | 32 | 15 | 3 | 4 | 0 |
| js/suzgec.js + js/app.js | 59 | 44 | 10 | 5 | 0 | 0 |
| **TOPLAM** | **291** | **209** | **52** | **13** | **14** | **3** |

⇒ Beş kapı dosyasında **BOŞ 2** (`denetle.py:3098` `--yaz` bayrağı yok · `uret_petek.py:1622` "kaçak sayılır" sayacı yok), **KISMİ 17**. Sınıfın ağır hâli BOŞ değil **KISMİ**: kontrol var ama iddiadan dar — çoğu "ölçülemedi ⇒ kod 2/kova" iddiasının yalnız bazı dallarda tutması.

## 2. Ortak desenler (BOŞ+KISMİ'nin kökleri)
1. **"ÖLÇÜLEMEDİ temiz değildir" yalnız metinde, çıkış kodunda değil** — `denetle.py:5756` (~10 soru kovaya bağlı, ötekilerin istisnası çıkış 1) · `:4608` (maske okunamazsa çıkış 1 = "İHLAL", 2 olmalı; modül seviyesinde, `--help` dahil ölür) · `:6940` kunyesiz yalnız basılır · `:7393` yarım maske (göl dosyası yok) sessiz · `_sahiplik_uygula.py:29/417` · `denetle_yayin.py:1584` · `denetle_bosluk.py:205` · `defter_hayalet.py:69` · `evren_dogrula.py:71` · `bayt_denetle.py:8`.
2. **"Tavan bloke eder / aşağı izlenir" ama karşılaştırma yok** — `denetle.py:6778` (2S_YALNIZ_TARAF aşımı ihlal yapmaz; aynı çıktıda "bloke eder" ↔ "İhlal değil") · `:669` yedi tavanda `ölçüm < tavan` hiç sorulmuyor (SAHIPSIZ ve ASAN'da var).
3. **Motor kimliği 3 dosya, motor 7+ modül** — `girdi.py:831/883` `motor_izi` · `uret_petek.py:506` DEVAM izi (+ MOTOR_B23_KAPALI ize girmiyor) · `:564` · `motor_onbellek.py:14`.
4. **"Yazmadan önce yakalanır" ama yazımdan sonra koşuyor** — `uret_petek.py:8452` (havuz kontrolü `:7987` ve `:8446` yazımlarından SONRA) · `:8484` ("tüm yerleşimler" = yalnız d:/v: dönemliler, 4300'ün 3279'u atlanıyor, hata çıkış vermez) · `:4779` (5 çıktının 2'si mühürsüz).
5. **Yayın zincirinde kapı bağlı değil** — `kosu_yayin.py:18` ⑥ yayın kapısı HER sıfır-dışı kodda "bilinen borç" sayılır, commit+push atılır (`--yayin-kapisi-uyari` bayrağı da yok, `:21`) · `kaynak_durum.py:34` SINAMA çıktısı yayına gidebilir (motor `kapi` alanını yazmıyor, `KAPI_ALANI_ZORUNLU=False`) · `kos_ve_yayinla.py:161` zincir kilidi hâlâ 240 dk yaş vekili · `paketle.py:42` künye yoksa 0.
6. **Türkçe düzleme ekseni (CLAUDE.md §4)** — `tahta.py:946` `--aciliyet ACİL` (noktalı İ) dayanaksız geçer, bekçi `_sade()` ile düzleyip HERKESİ uyandırır.
7. **Kayıtlı olmayan kanca** — `kabuk_nobetci.py:28` "PreToolUse kancası reddeder"; hiçbir settings dosyasında kayıtlı değil.

## 3. YÜKSEK öncelik (kapı davranışı)
| sınıf | yer | eksik / not |
|---|---|---|
| BOŞ | `arac/renk_cikti.py:121` | SystemExit YOK: ValueError yutulup eski biçime düşülüyor. Yeni biçimli (tek halkalı parça) dosyada HALKA yoksa `_govde` her parçayı eler (len(halkalar |
| BOŞ | `arac/renk_olc.py:518` | Varsayılan kipte `py arac/renk_olc.py` HER ZAMAN çıkış 0 verir (SystemExit dışında); yakin_renk ihlali — Voronoi ihlali de — koda yansımaz. Yalnız `-- |
| KISMİ | `arac/_sahiplik_uygula.py:29` | Üç ölçülemeyen durum ÇIKIŞ 0 ile biter: ① ayrıştırılamayan yer_yama*.js SESSİZCE atlanır (adı bile basılmaz, 'YAMA KAYDI: 0') ② GIRDI_DOSYALARI'ndan d |
| KISMİ | `arac/_sahiplik_uygula.py:417` | Okuyucu dosyayı ayrıştıramazsa o dosyada sınav HİÇ yapılmaz, sayılmaz, çıkış değişmez ve hemen ardından '✓ tanıma: … HEPSİ bu araçça görülüyor' basılı |
| KISMİ | `arac/denetle.py:4608` | Durur ama ÇIKIŞ 1 ile (string'li SystemExit = 1) — üç-kod protokolünde 1 = 'İHLAL VAR'; doğrusu 2 (ÖLÇÜLEMEDİ). Üstelik MODÜL SEVİYESİNDE olduğu için  |
| KISMİ | `arac/denetle.py:5756` | Yalnız listelenen ~10 soru try/kovaya bağlı. degismez1/1b/1c/2/2s/2i/2t/3/5/7, dönem sağlığı, mükerrer, konum_denetimi İÇİNDEKİ bir istisna ve modül s |
| KISMİ | `arac/denetle.py:6778` | Tavan aşımı HİÇBİR ZAMAN ihlal=True yapmaz ve kovaya girmez — bloke etmez, yalnız uyarı basar. Aynı çıktıda iki cümle çelişiyor ('bloke eder' ↔ aşımda |
| KISMİ | `arac/denetle.py:6940` | Yalnız basılır; ne ihlal=True ne olculemedi() — kunyesiz>0 iken kapı 'SONUÇ: temiz' + çıkış 0 verebilir. 'ayrı kova: ölçülemedi' ve 'TEMİZ de değil' i |
| KISMİ | `arac/denetle.py:7393` | Yalnız TAMAMEN atlanma (shapely/land yok) kovaya düşer. YARIM maske kovaya düşmez: (a) ne_10m_lakes.geojson yoksa göl çıkarma SESSİZCE atlanır (4664 ` |
| KISMİ | `arac/denetle_bosluk.py:205-206 (+31-36, 330-332)` | tam_tarama() bu SystemExit'leri yutuyor: denetle_bosluk.py:354 'except SystemExit: continue' — atlanan dönem SAYILMAZ, BASILMAZ. devletler_harita.js y |
| KISMİ | `arac/denetle_yayin.py:1584` | Yalnız bayatlığın YAŞI ölçülemezse durdurur. Tazeliğin KENDİSİ ölçülemezse (bayat_mi() → None: donemler.js YOK · girdi.yukle() hatası, ör. AD ÇAKIŞMAS |
| KISMİ | `arac/girdi.py:883` | Yalnız motor_izi()'nin 3 dosyasını sorar: koşu sırasında girdi_listesi.py / motor_onbellek.py / kosu_kilit.py / dolgu / yukseklik değişirse ÖLDÜRMEZ v |
| KISMİ | `arac/kabuk_nobetci.py:28-29` | Kanca hiçbir ayar dosyasında KAYITLI DEĞİL: C:\Users\user\.claude\settings.json, settings.local.json, C:\atlas\.claude\ ve C:\atlas-yorum\.claude\ içi |
| KISMİ | `arac/kaynak_durum.py:34,309,320` | Zincirin yazan ucu yok: motor kapi alanını hiç yazmıyor (uret_petek.py'de KOSU-KAPI/KOSU_KAPI geçişi 0; URETIM_IZI yalnız {girdi, motor}, uret_petek.p |
| KISMİ | `arac/kos_ve_yayinla.py:161-180 (+241-243)` | Zincirin kendi kilidi DÜZELTİLMEDİ: hâlâ 240 dk yaş vekili, PID/canlılık yok; tam inşa 7-8 saat (CLAUDE.md §9). Düzeltme kosu_kilit.py'ye (motor kilid |
| KISMİ | `arac/kosu_yayin.py:18` | ③ için doğru (zorunlu, return 1). ⑥ ASLA zinciri durdurmaz: uyari_kodu=True HER sıfır-dışı kodu (1 ihlal, 2 ölçülemedi, çökme) 'BİLİNEN BORÇ' sayıp Tr |
| KISMİ | `arac/paketle.py:42` | Künye dosyası yoksa (silinmiş/taşınmış) index.html PAKETLİ olsa bile sina 0 döner ⇒ denetle_yayin.py:1917 `_paket_ihlali=bool(0)=False`: paketler hiç  |
| KISMİ | `arac/tahta.py:946` | Kapı aciliyeti Türkçe düzlemeden karşılaştırıyor; bekçi (`tahta_bekci.py:569` `_sade()`) düzleyerek. `--aciliyet ACİL` (noktalı İ — Türkçe yazımın doğ |
| KISMİ | `arac/uret_petek.py:506` | İz MOTOR_* ortamının yalnız 4 bayrağını alıyor: FAZ 1'i değiştiren MOTOR_B23_KAPALI (gosterim_duzelt :3450 B23_ACIK) ize girmiyor ⇒ bayrak değişip DEV |
| KISMİ | `arac/uret_petek.py:1720` | Yalnız SAHİP (sahip1) kıyaslanıyor; mesafe d1 (_btb_u1) _kvuzak ile HİÇ kıyaslanmıyor — oysa açıklık d1+d2'den kuruluyor (:2001). Ayrıca 'assert' yok  |
| KISMİ | `arac/uret_petek.py:8452` | Kontrol, sınadığı iki çıktı ZATEN yazıldıktan sonra koşuyor: devletler_harita.js :7987 ve donemler.js :8446. Delik bulunursa koşu durur ama bozuk dosy |
| KISMİ | `arac/uret_petek.py:8484` | 'tüm' değil: yalnız Osmanlı d:/v: dönemli yerleşimler sınanıyor (4300'ün 3279'u atlanıyor); nokta 0,08° tamponla sınanıyor; satır donemler.js yazıldık |
| SIFAT-YANLIŞ | `arac/bekci_olc.py:25` | KUŞKULU (≤5 tur sessiz) çıkış 0 verir; BITMIS de 0. Çıkış 1'in gerçek anlamı ASILI ya da ÖLÇÜLEMEDİ (veya damga dizini/damga yok). Çıkış kodunu okuyan |

## 4. ORTA
| sınıf | yer | eksik / not |
|---|---|---|
| BOŞ | `arac/_isci_nabzi.py:18-20` | Kod her turda basmıyor: çalışma sürerken (calisiyor→calisiyor) HİÇ satır yok, sessizlikte yalnız geçişte ve 8 turda bir (2 saat). Docstring'in vaat et |
| BOŞ | `arac/_yayin_zinciri.py:2-3` | Döngü (:39-49) çıkış kodundan bağımsız olarak üç adımı da koşturur; hiçbir dalda durma yok. Aynı docstring 'hukmu insan verir' diyor — 'durur' sıfatı  |
| BOŞ | `arac/denetle.py:3098` | denetle.py'de `--yaz` argümanı YOK (argparse 6552-6566: --ayrinti · --defter-yaz · --d8-defter-yaz · --d8-kor-defter-yaz · --d8-kor-defter · --kaynak- |
| BOŞ | `arac/uret_petek.py:1622` | Tek ölçüm satırı (:1655) YASAKLANAN kenar sayısını basar; örneklemeden kaçan adım tanımı gereği tespit edilmez ve hiçbir yerde sayılmaz ('kaçak' sözcü |
| BOŞ | `js/app.js:11853` | suzgec.maddeDegisimleri'nde mesafe şartı yok (suzgec.js:763-772); yorum bayat — bkz. suzgec.js:679 |
| BOŞ | `js/suzgec.js:253` | bilinmeyenler tur: alanına hiç bakmaz ⇒ k'siz maddede tanınmayan tur (4838 KRONOLOJI_* maddesinin hepsi bu yoldan) diger'e SESSİZ düşer; üstelik bilin |
| BOŞ | `js/suzgec.js:132` | bilinmeyenler() app.js'te, arac/ ve denetim/ altında hiçbir yerde çağrılmıyor; sonucu hiçbir ekrana/konsola/kapıya ulaşmıyor |
| BOŞ | `js/suzgec.js:679` | Mesafe şartı 763-772'de YOK (748-762 kaldırıldığını söylüyor) ama kuralın başlık tanımı ve dışa verilen MADDE_DEGISIM_AYAR.komsuKm=150 duruyor; komsuK |
| KISMİ | `arac/defter_hayalet.py:69 (+201,220-222)` | Çıkış kodu ölçülemedi'yi taşımıyor: return 1 if s['hayalet'] else 0 (:222) ⇒ yalnız ölçülemedi varken '🟢 SONUÇ: … her satırın en az bir kanıtı VAR' +  |
| KISMİ | `arac/denetle.py:1268` | Yalnız ilk 12 ad basılır, kaç tanesinin gizlendiği yazılmaz ve `--ayrinti` dalı (6610-6612) yalnız KAPSAM DIŞI (_kd) listesini açar — _vd'nin kalanını |
| KISMİ | `arac/denetle.py:669` | ACIK_S · ACIK_ISG · KIRILMASIZ · ONCE(4d) · SARAN(4s) · DEVIR_BEYANI · MUKERRER tavanlarında 'ölçüm < tavan' hiç sorulmaz ⇒ gevşeyen tavan kapıda görü |
| KISMİ | `arac/kodla.py:804` | İstisna yolu ihlal (doğru). Ama bir hedefin `parca` dosyası yoksa o hedef SESSİZCE atlanır — `ust`/`on` diskte ve index.html'de olsa bile; hiçbir eser |
| KISMİ | `arac/kodla.py:887` | Yalnız parca+ust silinir: `_yaz_c` aynı koşuda ON_JS'i (…_on.js) de yazmış/silmiş olabilir, o geri alınmaz. Önceki GEÇERLİ eserlerin üstüne yazıldığı  |
| KISMİ | `arac/motor_onbellek.py:17` | 20 denemede kilit çözülmezse kayıt YAZILMAZ ama sayaç 'yazılan' der; ne uyarı ne hata. (Doğruluk değil önbellek kaybı; ama özet raporu yalan söyler.) |
| KISMİ | `arac/odak_olc.py:110` | ✗ kilidi ve evren koruması VAR. Ama 'yalnız İNER' değil: ⓘ YENİ KAPSAM (evren dışı dosyalarda yeni odaksız madde) kapıyı bloke etmez, `--tavan-yaz` on |
| KISMİ | `arac/tahta_bekci.py:62-64, 156-157` | Üçüncü (son) print('[BEKCI] mesaj basilamadi ama VAR') korumasız: stdout yazılamıyorsa (kapalı boru/akış) istisna _bas'tan dışarı çıkar ve main döngüs |
| KISMİ | `arac/tahta_bekci.py:240-241` | Yalnız AYRIŞTIRMA hatası korunuyor. Geçerli ama beklenmedik biçimli JSON bekçiyi öldürür: defter.json bir LİSTE ise d.get AttributeError (L248, try dı |
| KISMİ | `arac/uret_petek.py:4779` | Beş üretilen çıktıdan ikisi mühür sınanmadan yazılıyor: data/ufuk_bantlari.js (:8147) ve data/petek_govde.js (:8231, doğrudan PETEK_D'den türer) |
| KISMİ | `js/app.js:329` | Sayaç yazılıyor ama HİÇBİR YERDE okunmuyor/basılmıyor (konsol yok, kapı yok) ⇒ kusur yine sessiz |
| KISMİ | `js/app.js:11857` | Yalnız MADDE GÜNÜ elenir (adı da artık BASLANGIC/BITIS değil VERI_BASI/VERI_SONU). Sürüm 5 ±30 penceresi (_yakinKirilmaGunleri 11897-11908 · maddeKiri |
| KISMİ | `js/suzgec.js:33` | ① k tanınmaz ama tur tanınırsa madde tur grubuna gider, DIGER'e değil (88) ② bilinmeyenler() hiçbir yerde çağrılmıyor (js/ arac/ denetim/ grep: yalnız |
| KISMİ | `js/suzgec.js:97` | konu dışı bir aile seçilirse deger=null ⇒ indexOf<0 ⇒ BÜTÜN maddeler sessizce elenir; coğrafya eklenince fonksiyon DEĞİŞMEK ZORUNDA |
| KISMİ | `js/suzgec.js:430` | 0-999 doğru; NEGATİF (MÖ) yıl sessizce bozuk — split('-') ilk parçayı '' yapar. app.js tam bu yüzden gun.js'e geçti (app.js:14-20), suzgec geçmedi; an |
| SIFAT-YANLIŞ | `arac/girdi.py:831` | Liste 3 dosya; motorun ithal ettiği motor_onbellek, kosu_kilit, girdi_listesi (GIRDI_DOSYALARI'nın kaynağı!), dolgu, yukseklik yok — tuz listesinden ( |
| SIFAT-YANLIŞ | `arac/kosu_yayin.py:21` | `--yayin-kapisi-uyari` diye bir bayrak YOK; uyarı sayımı koda sabit (uyari_kodu=True). Bayrakla açılıp kapanan bir istisna sanılıyor, oysa her zaman a |
| SIFAT-YANLIŞ | `arac/motor_onbellek.py:14` | Pozitif kontrol 2'nin aynası: 'motor kodu' tuzda yalnız uret_petek+motor_onbellek; motorun ithal ettiği kosu_kilit, girdi_listesi, dolgu, yukseklik tu |
| SIFAT-YANLIŞ | `arac/uret_petek.py:564` | Liste tuzun içeriği olarak doğru; 'motor kodu' sıfatı yanlış: motor ayrıca kosu_kilit(121), yukseklik(708), dolgu(8178), girdi_listesi(girdi.py:115) i |
| ÖLÇÜLEMEDİ | `arac/girdi_listesi.py:23` | Anahtar sitelerinin VARLIĞI görüldü; 'yeterlilik ispatı' (R derece çevresi her girdiyi kapsar mı) uret_petek.py ithal/koşturulmadan doğrulanamaz (tali |

## 5. DÜŞÜK
| sınıf | yer | eksik / not |
|---|---|---|
| BOŞ | `arac/acici_kur.py:48` | ac.py yer tutucu 'DOLDUR' IP'sini REDDETMEZ; ona HTTP isteği atar, URLError ile '[X] ulasilamadi' basar, çıkış 1. Reddetme değil, ağ hatası. (jeton No |
| BOŞ | `arac/denetle_bosluk.py:334-336` | onbellek (:344) ve anahtar (:349) tanımlanıp HİÇ kullanılmıyor (grep: başka geçiş yok) — L155-157'nin 'belgede var kodda yok' dediği kusurun aynısı ta |
| BOŞ | `js/suzgec.js:32` | Engelleyen/uyaran kod yok: grupIndeksi (73) son yazanı sessizce kazandırır |
| KISMİ | `arac/_koordinator_bekcisi.py:28` | Okuma hatası boş liste döndürür: açılıştaki ilk okuma (ör. os.replace yarışı/PermissionError) düşerse `gorulen` boş kalır ve sonraki turda BÜTÜN eski  |
| KISMİ | `arac/_odunc_capraz_sh110.py:21-26` | tamam KÜME başına artıyor (:242-243), VAKA başına değil: bir vaka iki kümeyle 'guclu' çıkarsa başka bir vaka hiç yakalanmadan 3/3 ve çıkış 0 verilebil |
| KISMİ | `arac/_uc_renk_kisit.py:80` | Durdurma `assert` ile: `py -O` altında assert kaldırılır ve kısıt sessizce eksik kurulur. Tek kullanımlık betik. |
| KISMİ | `arac/bayt_denetle.py:8-10` | Yol çalışma dizinine göreli ('data', KOK yok); okunamayan dosya sessizce 'continue' ile geçilir ve hüküm yine 🟢 — ölçülemedi temiz sayılıyor. Alt dizi |
| KISMİ | `arac/evren_dogrula.py:71-74 (+354-357, 412-416)` | Metinde ayrı, çıkış kodunda değil: main() sys.exit(1 if hata else 0) (:567) — yalnız ölçülemedi varken çıkış 0, temizle aynı. |
| KISMİ | `arac/kontrol_dogrula.py:10` | DESEN regex'ine uymayan kanıt alanı (ör. iki parçalı '[kanıt: a.md · var]') bozuk sayılmaz, SESSİZCE atlanır (:66-67 continue). Bugün KONTROL.md'deki  |
| KISMİ | `arac/renk_olc.py:1071` | Yalnız FARKLI hex'le tekrar reddediliyor; aynı kimlik aynı hex'le iki kez sessizce tekilleşiyor (sayı '1 öneri' basılır). Parantez niyeti açıklıyor, c |
| KISMİ | `arac/tahta_bekci.py:609-616` | Yalnız UZUNLUK kırpılıyor; mesajın içindeki satır sonu (ve no/kimden/kime alanlarındaki) temizlenmiyor. tahta.py yazarken satır sonunu silmiyor (yalnı |
| KISMİ | `arac/tahta_bekci.py:462-475` | --cik yeniden kurulumunda filtre yine YALNIZ numaraya bakıyor: aynı numaralı ikinci bir mesaj (origin ∪ yerel çakışması — L462-464'ün gerekçesi) ya da |
| KISMİ | `arac/tahta_sunucu.py:135-136` | Kayıp yalnız nabız döngüsünde (NABIZ_SN=20 sn'de bir, :220-226) saptanıyor; devralma ile saptama arasındaki ≤20 sn'de iki sunucu da yazar ve aynı numa |
| KISMİ | `arac/tahta_yeni.py:25` | Su seviyesi karşılaştırması DİZGİ: M-9999 sonrası 'M-10000' < 'M-9999' ⇒ yeni mesajlar görünmez, çıkış 0 ('yeni yok'). Ayrıca --kim TAM büyük harf eşi |
| KISMİ | `arac/yorum_temizle.py:31-34` | Tek tırnaklı (ve şablon) dizeler izlenmiyor: kaynak:'https://…' içindeki // yorum sanılır ve --temizle URL'yi keser. Bugün data/*.js'de tek tırnaklı U |
| KISMİ | `js/app.js:5749` | Bayat: js/app.js:6286-6288 _seferRengiCoz devlet bilinince m.renk'i ve ok ucu rengini EZER (5862-5865 bunu bilerek değiştirdiğini yazıyor); yalnız hal |
| KISMİ | `js/app.js:12774` | Diziler özyinelenmez (12535, 12540): dizi içindeki nesnelerin ic_not* alanları ayıklanmaz |
| KISMİ | `js/app.js:12861` | Yalnız baslik/ad/soru + 6 dize alanı (ozet, metin, kisa, not, bag, aciklama) dökülür; metni başka alanda (ör. `d`) ya da dizi olan kayıt boş kart olur |
| KISMİ | `js/suzgec.js:82` | Yalnız TANINAN k için doğru; tanınmayan k + tanınan tur taşıyan madde eskiden diger idi, şimdi tur grubuna geçer |
| KISMİ | `js/suzgec.js:471` | sondaki [a-z]{0,4} -lık/-lik/-luk'u da geçirir; gerçek künye `kazan` (Kazan Hanlığı) 'Kazanlık' (Bulgaristan) metninde antlaşma tarafı sayılır |
| SIFAT-YANLIŞ | `arac/_bekci_kosu4c.py:121-123` | İşlev iki değer döndürüyor; ölçülemedi CANLI'ya katlanıyor (bilinçli, ama 'üç durum' sıfatı yanlış — çağıran ayırt edemez). |
| SIFAT-YANLIŞ | `arac/_sahiplik_uygula.py:422` | Ek soru cevabı: 430 civarında ad tekilliği/çakışma İDDİA EDEN yorum YOK. Ama 'motorun okuduğu hâl' sıfatı yanlış: motor (yukle) çapraz-dosya mükerrerd |
| SIFAT-YANLIŞ | `arac/denetle.py:2936` | Altılı döner; `once` (4d) ve `cok_harita` docstring'de yok. |
| SIFAT-YANLIŞ | `arac/denetle_kapsama.py:323` | Kara maskesi klasörü yoksa ya da bölge tanımsızsa çıkış 2; 'her zaman 0' yanlış (karar bağlamında doğru, kod bağlamında değil). |
| SIFAT-YANLIŞ | `arac/durum_tablosu.py:106` | Bayat iddia: bugün renk_kovalari() '__BOSLUK__'ü (künyede yok, veride kullanılıyor) ihlal kovasına koyar ve tablo '🔴 RENKLİ-KÜNYESİZ' basar — en az bi |
| SIFAT-YANLIŞ | `arac/kos_ve_yayinla.py:403-405` | Basılan PLAN sırası doğru, ama gösterilen satır numaraları bayat (kendisi de borç olarak itiraf ediyor). |
| SIFAT-YANLIŞ | `arac/tahta.py:61` | Belgelenmemiş dördüncü kod: tahta.json yazılamazsa `_kaydet` sys.exit(3) ile çıkar. Kodları okuyan otomasyon (duyur.py) 3'ü tanımıyor; '0/1/2' sözleşm |
| SIFAT-YANLIŞ | `arac/tahta_bekci.py:73-75 (+539-541)` | Docstring (17 Eylül katmanı) ve L539-541 yorumu bayat: aynı docstring L82-83 22 Eylül değişikliğini yazıyor ama 'YENİ VARSAYILAN' bloğu güncellenmemiş |
| SIFAT-YANLIŞ | `arac/tahta_sunucu.py:130-133` | Numara 'en büyük+1' değil 'kayıt sayısı+1'. Kayıtta boşluk/mükerrer olursa iki formül ayrışır ve len+1 var olan bir numarayla çakışabilir. Bugün len=5 |
| ÖLÇÜLEMEDİ | `arac/uret_petek.py:7356` | Yapısal akıl yürütme; _puan_bolgesi (:6070-6074, :6122-6124) noktası ızgara penceresi dışında kalırsa None döndürebilir ⇒ istisna yolu var; rapor saya |
| ÖLÇÜLEMEDİ | `arac/uret_petek.py:7150` | Birleşim sırası iki yolda farklı (kanonik vs frozenset); bit denkliği iddiası yalnız koşuyla sınanabilir |

## 6. Güvenilirlik notu
- Sınıflamaları 6 alt ajan yaptı (her biri iki pozitif kontrolle ayarlandı); kıta şu beşini **ayrıca kendisi** ölçtü, beşi de tuttu: `uret_petek.py:8452` (yazım :8446 önce) · `:8484` (d/v süzgeci, çıkış yok) · `denetle.py:3098` (argparse'ta `--yaz` yok) · `:6778` (`_trf_asim` yalnız 6748/6749/6779'da, ihlal'e dokunmuyor) · `kosu_yayin.py:18` (`kos(uyari_kodu=True)` her kodda True; `:143` dönüş değeri okunmuyor).
- Sentetik kanıtlar (komut→çıktı) JSON'un `kanit` alanında; betikler kıtanın scratch dizinindeydi (kalıcı değil).
- ÖLÇÜLMEDİ: `kosu_yayin.py` / `kos_ve_yayinla.py` / `_yayin_zinciri.py`'nin bugün CANLI yayın yolu olup olmadığı (HAVVA hangisini koşturuyor) — etki derecesi buna bağlı.
- Kapsam dışı: `denetim/*.py` (sınavlar), `arac/*.js` (odak_cozum.js vb.), `data/` yorumları.
