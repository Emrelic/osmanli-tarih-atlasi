# uret_petek.py ENVANTER — DİLİM 1 (satır 1–2735)

Okuma: satır 1–2735 tamamı, atlamadan okundu. Salt okuma; hiçbir betik koşmadı.
Koşu 40 bayrak kümesi esas alındı. Kısaltma: CANLI = bu kümede çalışır · ÖLÜ = hiç çalışmaz · HER ZAMAN = bayraksız.
Genel not: Dilimde "gövde / puan / B2 / dolgu / kuşatma" mantığı YOK (sonraki dilimler). Burada yalnız girdi, ızgara, sürtünmeli yürüyüş ve yürüyüş-bütçesi altyapısı var. Yorumlardaki satır numaraları (:1515, :1731, :1819, :1343, ~285) BAYAT — dosya o günden sonra çok büyümüş.

---
## A. Süreç/altyapı

**1. İTHAL KİLİDİ** (18–45)
- AMAÇ: `import uret_petek` 80 dk'lık üretimi başlatır; 16 Ağu 2026 vakası (işçi oturum BOLGE okumak için import etti, tam üretim koştu). "Bu bilgiyi bir `if` ile sorabiliyor muyum?" ilkesi.
- YÖNTEM: `__name__ != "__main__"` ise RuntimeError.
- AYAR: HER ZAMAN. (İşçi süreç `python uret_petek.py` ile başladığı için `__main__`, sorun yok.)
- ŞÜPHE: yok. "Gerçek import eden alet 0" ölçümü yorumda; dilim dışı araçların bunu atlaması için dosya METİN olarak ayrıştırılıyor (ör. ARAC-LEGO-zincir AST taraması) — dosya yapısı değişirse o araçlar kırılır.

**2. Satır tamponlu stdout + CANLI LOG (_Catal)** (46–103) — M-4533, 18 Eyl 2026
- AMAÇ: Koşu 13B 24 sa zaman aşımında kaçta kaldığı bilinemedi (boru + capture_output). Her satır ayrıca `uretim_canli.log`a yazılır; stderr de.
- YÖNTEM: `TextIOWrapper(line_buffering=True)` + `_Catal` (iki akışa yazar, ikincisi bozulursa sessizce düşer). Yol `MOTOR_CANLI_LOG` ya da `<kök>/uretim_canli.log`, mod "w" (her koşu ezer).
- AYAR: HER ZAMAN. Koşu 40'ta işçi süreci `MOTOR_CANLI_LOG=uretim_isci_<k>.log` alır.
- ŞÜPHE: log "w" ile açıldığından yeniden başlatılan (DEVAM) koşu bir önceki canlı logu SİLER (iz kaybı — soruşturma için önemli). `_yan` bozulunca sessiz düşer (log kaybı görünmez).

**3. ÇİFT KOŞU KİLİDİ + işçi ebeveyn nöbeti** (105–154) — A2 `BULGU-GEOMETRI-0904`
- AMAÇ: kilit yalnız `kos_ve_yayinla.py`deydi; doğrudan başlatan görmüyordu; eski yaş tavanı (240 dk) koşu 4b'nin 16 sa 09 dk'sıyla çürüdü → yeni kilit süreç canlılığına bakar (`arac/kosu_kilit.py`).
- YÖNTEM: ana süreç `_KILIT.al("petek")`, atexit ile bırakır; işçi (`MOTOR_SUREC_ISCI_NO` var) kilit almaz. Windows'ta 30 sn'de bir ebeveyn canlılığı OpenProcess/GetExitCodeProcess ile sorulur; ebeveyn ölmüşse `os._exit(3)` (yetim kalmasın). `os.kill(pid,0)` Windows'ta süreci öldürür uyarısı.
- AYAR: HER ZAMAN (nöbet yalnız `MOTOR_SUREC_EBEVEYN` verilen işçide, Windows'ta).
- ŞÜPHE: ebeveyn nöbeti yalnız `os.name=="nt"`; başka platform yetim işçi bırakır (HAVVA Windows, sorun değil).

**4. İçe aktarmalar, `temiz()`** (156–170)
- shapely/numpy/STRtree; `temiz(q)` make_valid + çokgen dışı artıkları atar + buffer(0). Küçük yardımcı; HER ZAMAN.

**5. Yollar, BOLGE penceresi** (172–262)
- AMAÇ: KOK/BASEMAPS(`veri-kaynak`)/CIKTI(`data/donemler.js`). BOLGE = `box(-180,-60,180,85)` (29 Ağu 2026, Emre: "tüm dünyayı açalım").
- YÖNTEM: yorumlar pencere tarihçesini (L şekli, Batı Afrika/Kanarya sorunu, DÜNYA PENCERE ölçümü: -60 gerekli çünkü Tierra del Fuego -55,9; kuzey 85 çünkü Grönland 83,6) ve ±180 sarma BORCUNU anlatır (Bau↔Lapaha komşuluk kaybı: motor 353,7° görür, gerçek 750 km).
- AYAR: HER ZAMAN.
- ŞÜPHE: (a) ±180 meridyen sarması KAYITLI BORÇ — Fiji↔Tonga komşuluğu eksik; Pasifik noktası arttıkça büyür. (b) Başlık "Girdi: ../data/yerlesimler.js" bayat (56 dosya). (c) SEYREK BÖLGE EŞİĞİ (SEYREK_ESIK_KM=300) kasten UYGULANMADI (3 ölçülmemiş soru) — "TAVAN_KM {1:700,…}" yorumda geçer; bunun dilim dışında yaşayan kural olduğu anlaşılıyor.

**6. BOYALAR içe aktarma, R_DUNYA** (264–272): `renkler.BOYALAR`, `girdi`. HER ZAMAN.

**7. ANLIK GÖRÜNTÜ + damga** (274–284, 558–559)
- AMAÇ: motor girdi dosyalarının KOPYASINDAN okusun, orijinaller koşu sırasında değişebilsin ("üretim kilidi kalktı").
- YÖNTEM: `girdi.anlik_goruntu()` (yalnız GIRDI_DOSYALARI + goller.js kopyalar; `girdi.DATA`yı geçici dizine çevirir). `.uretim-basladi` damga dosyası (yalnız ana süreç yazar).
- AYAR: HER ZAMAN.
- ŞÜPHE: `devletler.js`, `gecitler.js`, `d_sinirlar*.js`, `index.html` anlık görüntüye GİRMİYOR (yorumlar bunu itiraf eder: "pencereyi daraltır, KAPATMAZ — girdi.py işi, borç"). Bu üçü koşu sırasında değişirse çıktıya girer; yalnız GEÇİT için sha256 loga basılır.

**8. AŞAMA ZAMANLAYICISI: asama / sayac / ilerleme / nabiz / asama_ozet** (286–456)
- AMAÇ: MOTOR 3 (3 Ağu): 4s41dk koşunun nerede yandığı dosya damgasından tahmin ediliyordu; uyku (2s29dk) aşama süresini şişirmişti. Duvar + işlemci süresi birlikte; çapraz sayaç; iş-ağırlıklı kalan süre tahmini (`kum`); nabız (MOTOR_NABIZ_SN, varsayılan 300 sn).
- YÖNTEM: `asama(ad)` önceki aşamayı kapatıp bilanço satırı basar (duvar>60 ve işlemci<%60 ise "UYKU/REKABET" uyarısı) ve her aşama başında `girdi.motor_izi_dogrula(_MOTOR_IZI, ...)` çağırır (NameError yutulur — ilk aşamalar).
- AYAR: HER ZAMAN.
- ŞÜPHE: `motor_izi_dogrula` NameError ile `except NameError: pass` — doğrulama sırasında fırlayan başka bir NameError de sessizce yutulur. Aşama başı motor izi sınaması 83 dk'lık geç-reddedilme vakasından doğdu (8 Ağu).

**9. KÜNYE `_HARITA_ALT`** (459–485)
- AMAÇ: boya anahtarı `harita:`ya düşebilsin (24 Ağu). Anlık görüntüden ÖNCE okunmalı (yoksa `devletler.js` kopyada olmadığı için koşu 20 sn'de ölmüştü, 25 Ağu).
- YÖNTEM: `girdi.oku_devletler()` → {id: harita}. `BaseException` yakalanır (SystemExit dahil), uyarı basılır, düşüş devre dışı.
- AYAR: HER ZAMAN.
- ŞÜPHE: `except BaseException` — künye okunamazsa sessiz-değil ama devam eder; sonuçta bazı gövdeler boyanmaz (uyarı tek satır). Künye `girdi.oku_devletler()` bu dilimde 2 kez (burada ve SINIR_KISIT içinde) okunur.

**10. MOTOR-SINIR-KISIT-1015 (+ MOTOR-YAMA-5GUN-B-1118)** (487–556; asıl uygulama `_sinir_kisit_uygula` DİLİM DIŞI)
- AMAÇ: Emre 15 Eki 2026 "Sınır çizgisi motorun kesin kısıtı olsun." Değişmez 8a'nın 1108 biriminin ~%89'u motorun D/E/F antlaşma hattını aşan gövde üretmesinden. Yabancı gövde, hattın karşı yakasındaki koridordan kırpılır, pay hattın o yakasına verilir. 1118: Emre kararı 7 — C sınıfı da duvar.
- YÖNTEM: dilimdeki kısım yalnız GİRDİ: `index.html`den `paket_coz.index_esleyen` ile `d_sinirlar*.js` bulunur, `node -e` ile eval edilip `_SK_HAM` (id+hat'lı kayıtlar) JSON olarak alınır, dosya sha256'ları `_SK_IZ`, Osmanlı'ya tâbi pencereler `_SK_TABI`. Sabitler: SINIR_KISIT_KM (varsayılan 80), DEGME_KM 1,0, DEGME_KM2 2,0, SINIF ("C","D","E","F"), KUYRUK_KM 400.
- AYAR: `MOTOR_SINIR_KISIT=1` ⇒ CANLI. Hat dosyası/ node yoksa SystemExit.
- BAĞ: yabancı gövde aşamasında kapama/B2/B3/puan/komşu-çıkarma SONRASINDA koşar (yoruma göre).
- ŞÜPHE: (a) motor C'yi kısıt sayıyor, `denetle.py` D8_SINIF ("D","E","F") C'yi saymıyor — kodda açıkça "AYNI DEĞİL" — yani ölçüm ile motor iki ayrı hat kümesine bakıyor. (b) Girdi `node` alt süreciyle okunur (zaman aşımı 300 sn); işçi süreçte de tekrar koşar. (c) `SINIR_KISIT =os.environ…` bitişik atama biçim kusuru, işlevsiz.

**11. KOMSU_KUR_BOL ve YAKA_KILIDI bayrakları** (510–518)
- Yalnız bayrak okuması; mantık dilim dışı. KOMSU_KUR_BOL = MOTOR-KOMSU-KUR-BOL-1016 (Emre notları #14,#17: noktanın kur:/bit: günü komşu yabancı devletlerin dönemini böler). YAKA_KILIDI = MOTOR-YAKA-KILIDI-1017 (not #7, Zimnicea×Ziştovi 1284; ham hücresi kayda değer sahip değilse "kendi yüzü" sayılmaz; `YAKA_ORAN=0.25`).
- AYAR: ikisi de `==1` ⇒ CANLI (Koşu 40: ikisi 1).
- ŞÜPHE: bu iki bayrağın mantığı bu dilimde YOK (yalnız tanım); "yama üstüne yama" değerlendirmesi diğer dilimde.

**12. SÜREÇ PARALELLİĞİ (işçi süreçler)** (560–614) — M-4533
- AMAÇ: "Yabancı devlet gövdeleri" koşunun %81'i; iş parçacığı paralelliği GIL yüzünden ~0,79 çekirdek. Süreç GIL paylaşmaz.
- YÖNTEM: `MOTOR_SUREC_ISCI=N` (>1) ⇒ ana süreç N-1 işçi başlatır (aynı betik, `MOTOR_SUREC_ISCI_NO=k`, `MOTOR_SUREC_DIZIN` temp, `MOTOR_SUREC_EBEVEYN`). İşçi motoru BAŞTAN koşar (Windows'ta fork yok), gövde aşamasında kendi payını diske yazıp çıkar. Bit denkliği: işçi sonucu ön-aşama parmak iziyle (YERLER·BOYALAR·PETEK_D WKB·ızgara sahipliği·bayraklar·motor izi) uyuşursa kabul; yoksa ana süreç kendisi hesaplar.
- AYAR: `MOTOR_SUREC_ISCI=2` ⇒ CANLI (1 işçi). `MOTOR_PARALEL_KAPALI=1` hepsini kapatırdı (verilmedi).
- ŞÜPHE: (a) BELLEK: yorum "her işçi ana süreç kadar bellek ister ~2-3 GB" — bu ölçüm eski penceredendir; dünya penceresinde (20,9 M hücre ızgara + Python listeleri) çok daha fazla. Ayrıca işçi, ön aşamanın TAMAMINI (aşağıdaki iki ölçüm-yalnız A/B Dijkstra dahil) tekrar koşar ⇒ bellek ve CPU iki katı. (b) Önbellek SQLite dosyasına iki süreç aynı anda yazar/okur; çakışma yönetimi dilimde görünmez (`motor_onbellek.py` bakılmalı). (c) "ön aşamalar ~1,5–3 saat" işçide de yenilenir.

**13. KALDIĞI YERDEN DEVAM (MOTOR_DEVAM)** (574–587) — M-4535 (Emre 18 Eyl: "hiçbir koşu bir daha çöpe gitmeyecek")
- YÖNTEM: gövde aşamasının devlet başına FAZ 1 sonucu `<kök>/_petek_devam/<ön aşama izi>/` altında kalıcı; aynı girdi+kod ⇒ aynı iz ⇒ hazır devletler diskten. Koşu başarıyla bitince dizin silinir. `_SUREC_YOLU = _SUREC_ISCI>1 or _DEVAM`.
- AYAR: `MOTOR_DEVAM=1` ⇒ CANLI.
- ŞÜPHE: ön aşamalar (1,5–3 sa) yine koşar — devam yalnız gövdede. Yeniden başlatmada `uretim_canli.log` ezilir (madde 2).

**14. Parmak izleri** (616–631)
- `_GIRDI_IZI = girdi.parmak_izi()` (kopyadan), `_MOTOR_IZI = girdi.motor_izi()` (koşu başında; "çıktı yazılırken diskten okunuyordu" kusuru, 1 Ağu). HER ZAMAN.

**15. ARTIMLI MOTOR — KOŞULAR ARASI ÖNBELLEK (M-4537, Emre 18 Eyl "Bir ampul için bina yıkılmaz") + GEOMETRİ TUZU (MOTOR-LEGO-0925)** (633–713)
- AMAÇ: katman başına kalıcı önbellek; tuz = motor kodu + sonucu etkileyen MOTOR_* değişkenleri; tuz değişince tam yeniden inşa.
- YÖNTEM: `_ONB_TUZ` (motor izi, motor_onbellek özeti, gun.py özeti, MOTOR_* ortamı (işletim değişkenleri hariç)). `_ONB_GEO_TUZ` aynısı ama `renkler.py`/`girdi.py` özeti hariç (govde·osm·sb katmanları BOYALAR/künye okumaz — AST ile ölçüldü, 91 modül adı). İkisi de `motor_onbellek.Onbellek` ile AYNI sqlite dosyası (`_motor_onbellek/motor_onbellek.sqlite`, `MOTOR_ONBELLEK_DIZIN` ile değişir). Tuz önceki koşudan farklıysa baştan uyarı basar (M-5175 ③).
- AYAR: `MOTOR_ONBELLEK_KAPALI` verilmedi ⇒ CANLI. İşletim listesi (tuza girmeyenler): SUREC_ISCI(_NO), SUREC_DIZIN, SUREC_EBEVEYN, CANLI_LOG, DEVAM, DEVAM_DIZIN, PARALEL_ISCI, PARALEL_KAPALI, NABIZ_SN, ISCI_BETIK, ONBELLEK_DIZIN, ONBELLEK_KAPALI, ONBELLEK_BUDA_GUN, EZBER_TAVAN, EZBER_TAVAN_PUAN.
- ŞÜPHE: (a) "CANLI: k1 · col · kusat · dolgu · osm · sb · govde" satırı SABİT METİNDİR (hangi katmanın gerçekten isabet aldığını ölçmez; yalnız MOTOR_PARALEL_KAPALI'ya bakar). Koşu 40'ta MOTOR_DOLGU_KAPALI=1 verildi — "dolgu" katmanının canlı sayılması bununla çelişebilir (dolgu mantığı dilim dışı, doğrulanamadı). (b) KANIT SINIRI yorumda: geometri tuzu "renkler/girdi okumaz" iddiası statik AST taramasıdır; globals()/getattr dolaylı okumayı görmez, motor değişince `ARAC-LEGO-zincir.py` elle yeniden koşturulmalı (makine denetimi yok). (c) `MOTOR_EZBER_TAVAN`/`MOTOR_EZBER_TAVAN_PUAN` (ezber sözlüğü tavanı) burada yalnız "işletim" olarak adlandırılır; tanımı dilim dışı. (d) Tuza giren `os.environ` MOTOR_* içinde yazım hatası/yeni bayrak tüm önbelleği geçersiz kılar (kasıtlı, ama bilinen kırılganlık).

**16. `_onb_oz(g)`** (714–726)
- Geometri WKB sha256 özeti; sonuç `_ONB_OZ` sözlüğünde id(g) → (nesne, özet). Nesne sözlükte canlı tutulur (id yeniden kullanımı olmasın).
- ŞÜPHE: `_ONB_OZ` SINIRSIZ büyür ve tuttuğu geometrilerin ÖMRÜ boyunca bellekte kalır (tavan/temizlik yok; dilimde tavan görünmüyor).

---
## B. Fiziksel girdi katmanları (kara, göl, nehir, geçit, sırt)

**17. EĞİM ÇARPANI sabiti + DEM seçimi** (728–802) — "ALTYAPI ①", T-0112, 15 Ağu 2026
- AMAÇ: Dijkstra ağırlıksızdı; 44 gerçek sefer güzergâhıyla ölçüldü: çarpan 0,005 en iyi (ort. sapma 88,2→71,9 km). Eğri düz ("ince ayarlama gürültüyü kalibre etmek olur, YAPMA").
- YÖNTEM: `EGIM_CARPANI = 0.005`; `MOTOR_EGIMSIZ` ⇒ 0. DEM yoksa/yarımsa SystemExit (sessiz eğimsiz koşmak yasak). `yukseklik.tam_mi` ile `etopo2022_30s_dunya.tif` → `etopo2022_30s_atlas.tif` sırası.
- AYAR: `MOTOR_EGIMSIZ` verilmedi ⇒ CANLI (çarpan 0,005).
- ŞÜPHE: "B YOLU" (kara/deniz kararını da DEM'e taşıma) tek-değişken kuralıyla ERTELENMİŞ BORÇ (denetim/EGIM-ONGORU.md). Gradyan batimetri dahil ham z üzerinde (kasıtlı; kıyıda sürtünme şişmesi ölçüldü, "marjinal").

**18. KARA MASKESİ** (804–826)
- AMAÇ: Natural Earth 10m kara; KARA_TOL=0.002° (≈220 m; 0.004 Çanakkale'yi genişletiyordu, B-12).
- YÖNTEM: `ne_10m_land.geojson` → BOLGE ile kesişim → unary_union → simplify(0.002). Önbellek katmanı `k1` (anahtar `k1_kara`: dosya özeti + pencere).
- AYAR: HER ZAMAN.

**19. GÖLLER (baraj kuralı + tarihî göl düzeltmesi)** (828–903)
- AMAÇ: göl sınırdır; kara maskesinden çıkarılır. (1) Modern baraj gölleri ÇIKARILMAZ (Nâsır, Keban, Atatürk, Dinyeper zinciri… anakronik delik açıyordu; hatalar 5.docx md.1); ölçüt `featurecla=="Reservoir" and (yıl≥1900 or baraj adı)`; `DOGAL_GOL = {Il'Men', Kubenskoye, Mjøsa, Kostroma Reservoir}` yanlış yakalananları kurtarır. (2) Eksik su tamamlanır: `girdi.oku_goller()` (data/goller.js; ör. Aral 73.666 km² — NE kuruma sonrası 6.579 km²; Küngrat petek haritada gölü yutuyordu).
- YÖNTEM: alan>0.02 filtre, birleştir, simplify(0.01), `KARA = KARA.difference(GOLLER)`. Önbellek `k1` (anahtar `k1_goller`: KARA özeti + göl dosyası + goller.js içeriği + pencere); hata yolunda kayıt YAZILMAZ.
- AYAR: HER ZAMAN.
- ŞÜPHE: (a) `DOGAL_GOL` el yazımı ezber küme (4 öğe, sınırsız büyümeye açık). (b) Göl verisi yoksa `print("göl verisi yok")` ile DEVAM eder — `GOLLER=None`; "sessiz bayat çıktı" ilkesiyle çelişir (DEM için SystemExit var, göl için yok). (c) Aral yamasının "zaman" boyutu yok: Aral tarihî göl her yüzyılda aynı (kuruma tarihi yok) — yalnız not.

**20. NEHİR YATAKLARI: BUYUK ad listesi + scalerank ikinci kapı + bedel sınıfı** (904–1034)
- AMAÇ: sınır cetvelle değil coğrafyayla çizilsin. Başta 31 adlık beyaz liste (yalnız Osmanlı kuşağı); 7 Ağu'da ölçüldü: pencerede 780 parça/593 adlı akarsu, motor 43'ünü kullanıyordu. İkinci kapı: `scalerank ≤ NEHIR_ONEM_ESIGI (5.0)` (3,6 kat artış; 6'da 267'ye fırlıyor, gürültü). Ad listesi "küçük ama sınır taşıyan"ı (Porsuk, Bakırçay), scalerank "büyük ama listede olmayan"ı (Ren, Po, Elbe…) kurtarır — birbirinin yerine geçmez. `name_alt` de okunur (Mur→Drava); Dicle/Tigris farklı rivernum ayrı ad vakası → yerel yazımlar eklendi. `_ad_sadelestir` yalnız harf bırakır (bozuk kodlanmış Türkçe adlar için); `BUYUK_SADE |= {...}` bozuk kodlama varyantları.
- YÖNTEM: `ne_10m_rivers.geojson` → `NEHIRLER` (BOLGE'ye kesilmiş geometriler), `NEHIR_SINIFI` aynı sırada (sınıf 1: `scalerank≤3` ya da `NEHIR_SINIF1_ADLAR` (araştırılan 16 nehir: Tuna, Sava, Drava, Tisa, Prut, Dnipro, Don, Volga, Fırat, Dicle, Nil, Aras, Kura, Kızılırmak, Sakarya, Meriç… — `scalerank` kartografik sıradır, debi değil; 72 çiftin %38'inde ters); sınıf 2: geri kalan). İki liste ayrışırsa nehir bedeli KAPALI. `NEHIR_HAT = unary_union`.
- AYAR: HER ZAMAN (liste kapısı, eşik 5.0, sınıf).
- BAĞ: sınıf listesi madde 31 (kenar bedeli), `NEHIR_HAT`/`NEHIRLER` madde 34 (tohum yakası) ve dilim dışı nehre yaslama.
- ŞÜPHE: (a) `BUYUK` ve `NEHIR_SINIF1_ADLAR` EL YAZIMI ezber sözlük/kümeler (31+ ad ve çok sayıda yazım varyantı); yeni nehir/yazım eklendikçe büyür, tavanı/denetimi yok ("bulunamayan yazımlar zararsız duruyor" — yani ölü girdiler de birikir). (b) `BUYUK_SADE |= …` içinde "kprüay","kopruay","gksu" gibi elle eklenmiş bozuk-kodlama varyantları — "yama üstüne yama". (c) NE `scalerank` ile 16 adlı nehir kümesi AYRI iki sınıflama (kapı vs bedel sınıfı) — aynı veriyi iki ölçütle ayırıyor, bilinçli (yorumda gerekçeli). (d) Nehir verisi yoksa sessiz devam (`print("nehir verisi yok")`).

**21. GEÇİTLER** (1037–1056)
- AMAÇ: `data/gecitler.js` (63 kayıt) nehir geçiş bedelini indirir. Koşunun BAŞINDA okunur (Dijkstra'da değil) çünkü anlık görüntüye girmiyor.
- YÖNTEM: `GECIT_KAYIT [(lon,lat,tur,etki_km,ad)]`, `GECIT_IZI` sha256; okunamazsa BOŞ liste değil İSTİSNA.
- AYAR: HER ZAMAN.
- ŞÜPHE: anlık görüntü dışında (yorum itiraf eder, borç `girdi.py`); `_GIRDI_IZI`ne girmiyor — koşu sırasında değişimi tespit eden bekçi yok; yalnız sha256 loga basılır.

**22. DAĞ SIRTLARI** (1058–1092)
- AMAÇ: iki şehir arasında dağ varsa sınır sırttan; OCOKA/OAKOC doktrini: unrestricted (ova/bozkır) engel DEĞİL, restricted (yayla/bataklık) ve severely restricted (sıradağ) engel.
- YÖNTEM: `ne_10m_geography_regions_polys.geojson`; `FEATURECLA` içinde "Range/mtn","Plateau","Gorge","Wetlands" geçenler (pencerede 127/34/2/1); area<0.05 elenir; sırt = poligonun −0,12° daraltılmış çekirdeğinin sınırı (çekirdek boşsa poligon sınırı). `SIRTLAR`, `SIRT_HAT`. `Plain` ve `Geoarea` (bozkır koridordur) bilerek dışarıda.
- AYAR: HER ZAMAN (burada yalnız üretim; kullanım dilim dışı).
- ŞÜPHE: "orta eksen (skeleton) yerine daraltılmış çekirdek" bilinen yaklaşıklık; bozkır koridoru "ayrı mantık ister" ama YAPILMAMIŞ.

---
## C. Yerleşim verisi ve ön doğrulamalar

**23. Yerleşim yükleme + boya anahtarı `harita:`ya DÜŞME (A')** (1094–1158)
- AMAÇ: `s:[{d:…}]` kimliği `BOYALAR`da yoksa gövde HİÇ çizilmiyordu. Yol A ("harita: kazansın") 8 kaydın anahtarını değiştirecekti (romanya-kralligi→romanya, #2828d8→#6c6912) ⇒ reddedildi. Yol A': anahtar=id, BOYALAR'da yoksa `harita:` ya düş; ölçüm: bugünkü kayıtlardan değişen 0.
- YÖNTEM: `girdi.yukle()`; `girdi.yakin_ciftler` mükerrer uyarısı; `VARSAYILAN` alan setdefault'ları (artık gereksiz güvenlik ağı); `_yonlendirilen` sayacı HER ZAMAN basılır; yerleşim sayıları (Osmanlı/komşu/tâbi).
- AYAR: HER ZAMAN.
- ŞÜPHE: yorum "setdefault'lar artık gereksiz ama zararsız" = ölü-benzeri kod. Bilinmeyen kimlik yalnız UYARI basar (koşu devam eder, gövde çizilmez).

**24. `k12_merkez` + kademe uyarısı** (1160–1200)
- AMAÇ: `m:` zinciri TEK hop bakıyordu (8 kayıt: Divriği, Arapkir, Hısn-ı Mansûr, Behisni, Kâhta, Siverek, Kanina, Oreoi bölge sınırına girmiyordu). Veriyi değiştirmek 4 seçenekte de Değişmez 3'ü 378→390-395'e çıkarıp 383 tavanını aşıyordu ⇒ düzeltme motorda: zinciri azami 5 hop takip.
- YÖNTEM: `AD2IDX`, `k12_merkez(i, azami=5)`; k:3/k:4 Osmanlı yerleşimi için zincir kapanmıyorsa "UYARI kademe" (beklenen 0).
- AYAR: HER ZAMAN (yalnız uyarı).
- ŞÜPHE: m: tek değerli ve zamansız (MIMARI §3.4) — kural bunun semptomunu motorda kapatıyor, kök sorun (zamansız m:) çözülmedi; bu dilimde sonucu kullanan kod yok (bölge katmanı sonraki dilimde).

**25. `gun(s)`** (1202–1204)
- `y,a,g = s.split("-")` → yyyymmdd int. ŞÜPHE: tuz bloğu "tarih kıyası artık gun.py'ye bağlı (C3)" diyor — burada ikinci, eski bir gün sayacı var. Ayrıca negatif yıl ("-0500-03-01") `split("-")` 4 parça verir → ValueError; MÖ kuralları varken bu işlevin hâlâ kullanılıp kullanılmadığı dilimde anlaşılmadı (kullanım dilim dışı olabilir).

---
## D. Yürüyüş (MOTOR_YURUYUS) ve MÖ katmanı — ayar bildirimleri

**26. MOTOR_YURUYUS bayrakları (YURUYUS_SAAT, SACAK, KARO, SADE, YURUYUS_16)** (1206–1246) — MOTOR-YURUYUS, 17 Eyl 2026
- AMAÇ: Emre 17 Eyl: "Haritadaki bir nokta, kendisine askerî yürüyüşle EN YAKIN yerleşim yerine ait olur. Bu sahiplik 5 günlük yoldan fazlasını içermez… 5 günden yakın yerleşim yoksa SAHİPSİZ kalır." Bütçe MENZIL-KARARLARI-0912 ②: 40 saat × 5,04 km/sa. Açıkken: ① Voronoi hücreleri ızgara Dijkstra sahipliğinden kurulan hücrelerle değiş tokuş edilir, ② A1 tavanı (200 km·16 sektör) kıyı kesiminde ızgaranın karar verdiği karada 40-saat eşyükseltiyle yer değiştirir (bütçe ötesi SAHİPSİZ), ③ ızgaranın karar VERMEDİĞİ parça (hücreden küçük ada, tohumsuz kara, kıyıdan ≥SAÇAK uzak) ESKİ A1 tavanına kalır (bir boşluk değil BEYAN).
- DOKUNULMAYAN: ada kuralı, ana parça, bileşen kilidi, kara-kısıtlı devir, çöl tavanı, puan kapısı, varlık epokları (petek_epok mini-Voronoi).
- AYAR: `MOTOR_YURUYUS=1` CANLI; `YURUYUS_SAAT=40` CANLI; `YURUYUS_16` verilmedi ⇒ ÖLÜ (8 komşulu ızgara; oktil %8 hatası kalır — 16 komşu ~%3). SACAK=2 hücre, KARO=5°, SADE=0.05° sabit.
- ŞÜPHE: (a) Izgara bloğu Voronoi'nin ÖNÜNE taşındı (yalnız sıra değişti, AST ile bağımlılık sınandı). (b) `YURUYUS_16`'ya bağlı yan kodlar (madde 31/33/35'te `_kv_ara_kara`, `_KV_YARI`) bu kümede tamamen ÖLÜ.

**27. MÖ KATMANI (MO-MOTOR-1020)** (1248–1298) — Emre 18-19 Ekim 2026
- AMAÇ: MÖ 12000'de nokta sayısı onlarla ölçülür; petek kıtayı kaplarsa "Neolitik kültür sınırı Karadeniz'e kadar" uydurma sınır çizer; kur:'u olmayan ~2900 nokta MÖ'de sahnede sayılırsa hayalet komşu olur. ① MO_YURUYUS_GUN (varsayılan 10 gün=80 sa) petek yarıçap tavanı; aşan toprak SAHİPSİZ="veri yok". ② MO_SINIR (varsayılan "1281-01-01", VERI_UFKU; Emre 21 Eki): g bundan ÖNCE ise MÖ kuralları (tavan, sahne, puan kapısı atlanır); MÖ sahnesi: kur:'lu nokta kur≤g<bit; kur:'suz nokta ancak en erken yazılı sahiplik kaydı g'yi geçmişse (örtük kuruluş); ne kur: ne sahiplik ⇒ sahnede DEĞİL. ③ MERKEZ_KURALI "mo"(varsayılan)/"1" (her tarih; Emre 19 Eki post-it #126; Osmanlı çağı haritasını da değiştirir, KOŞU EMRİ ister)/"0": sahnedeki k≥4 noktalar kendi bölgesini ALMAZ, peteği yürüyüşle en yakın sahne merkezine devredilir (m: merkezi ayrıca korunmaz). `MOTOR_MERKEZ_K0` (varsayılan "1"): k:0 merkez SAYILIR (Sümer 21 noktası k:0).
- YÖNTEM: sabitler `MO_SINIR`, `MO_YURUYUS_GUN`, `MO_SAAT=gün*8`, `MERKEZ_KURALI`, `MERKEZ_K0`, `MO_PUAN`. Koşu başında sınama: MO_SAAT≠YURUYUS_SAAT ise MO_SAAT `MOTOR_UFUK_BANT` içinde bulunmak ZORUNDA, yoksa SystemExit (eskiden saatler sonra patlardı; MOTOR-YAMA-5GUN-B-1118).
- AYAR (Koşu 40): `MO_SINIR=9999-12-31` ⇒ "MÖ kuralları" HER TARİHTE geçerli (sahne + k≥4 devri + tavan); `MO_YURUYUS_GUN=5` ⇒ MO_SAAT=40=YURUYUS_SAAT ⇒ ayrı bant gerekmez; `MOTOR_MO_PUAN_KAPISI=0` ⇒ yoğunluk kapısı MÖ günlerinde ÖLÜ (burada "MÖ" her gün olduğu için puan kapısı KOŞUDA HİÇ çalışmıyor — MOTOR_PUAN_KAPALI=1 ile de tutarlı); `MOTOR_TARIH_BASI_MERKEZ=1` CANLI (her tarih); `MOTOR_MERKEZ_K0` varsayılan 1 CANLI.
- ŞÜPHE: (a) Adlandırma yanıltıcı: "MÖ katmanı" Koşu 40'ta TÜM tarihler için açık; yani `MO_SINIR` varsayılanı (1281) ile Koşu 40 değeri (9999) arasında devasa fark — kurallar tek tarih aralığına göre tasarlanmış ama her yerde uygulanıyor. (b) "kur:'su olmayan nokta, yazılı sahiplik kaydı g'yi geçmişse sahnede" kuralı Osmanlı çağında binlerce noktanın görünürlüğünü doğrudan değiştirir (kural dilim dışında uygulanır). (c) m: merkezi ayrıca korunmuyor ("bkz. rapor") — kuralın açık ucu. (d) Yorumdaki varsayılan değerler ile Koşu 40 değerleri ayrışık; eski ölçümler (10 gün/80 sa) bu koşuya geçerli değil. (e) `_ub_erken` kontrolü yalnız MOTOR_YURUYUS açıkken.

---
## E. KARA-KISITLI SAHİPLİK (ızgara, Dijkstra)

**28. Izgara kurulumu** (1300–1354) — hatalar 15 md.19: "PETEK BÖLGESİ DENİZAŞIRI OLAMAZ… Oran'ın peteği İspanya'ya geçiyor"
- AMAÇ: ada kuralı KARA BİLEŞENİ bazlı, Afrika+Avrasya Sina'dan tek bileşen. Sahipliği düz mesafeyle değil KARA ÜZERİNDEN mesafeyle sormak. "IZGARA YALNIZ SAHİPLİĞE KARAR VERİR, SINIR ÇİZMEZ" (cetvel kusuru olmasın). Kapsam kuralı: tohum→parça düz hattı tamamen karadaysa Voronoi kalır; denize değiyorsa ızgara karar verir (eşik yok). Geçme ölçütü: Oslo, Königsberg, Azak 0 km² kaybetmeli (32/32 kabul).
- YÖNTEM: `KV_ADIM=0.05°`, `KV_MIN_KM2=200`; ızgara `_kvnx×_kvny` = 7200×2900 ≈ 20,9 M hücre; `_kvkara` bytearray, `shapely.contains_xy` ile satır satır (vektörleştirme: 25,7× hız, MOTOR 3; eskiden 4,74 M `contains(Point)` = 3dk20sn).
- AYAR: HER ZAMAN.
- ŞÜPHE: `KV_MIN_KM2` bu dilimde kullanılmıyor (yorumdaki "güvenilir taban" — kullanım dilim dışı olabilir; anlaşılmadı). Yorumdaki "4,74 milyon hücre" pencere genişlemeden önceki sayı (şimdi ~20,9 M).

**29. Tohum yerleştirme + PENCERE DIŞI TOHUM** (1356–1425) — 16 Ağu 2026, M-0247/M-0502/M-0509
- AMAÇ: eski kod pencere dışı noktayı ızgara kenarına KISTIRIYORDU (Cape Town −33,9→−11,0, 2.555 km; Güney Afrika'nın 6 gövdesi Kongo/Tanzanya kuşağına oturuyordu). Bileşen kilidi engellemiyordu (alıcının noktası maskenin dışında).
- YÖNTEM: pencere dışı tohum ızgaraya ALINMAZ (`_kvpencere_disi`, Voronoi kalır). Pencere içinde su hücresine düşen tohum ±3 hücrede en yakın kara hücresine kaydırılır (`_kvkaydi`), bulunamazsa `_kverisilmez`. Çıktı: `_kvtohum {hücre: [yerleşim indisleri]}`. Pencere dışı liste İSİM İSİM basılır (sessiz eleme yasak).
- AYAR: HER ZAMAN.
- ŞÜPHE: aynı hücreye düşen birden çok yerleşimde Dijkstra tohum etiketi yalnız `idxs[0]` (ilk eklenen) — diğerleri görmezden gelinir (madde 35/36'da yorumlanmış sözleşme); hangi nokta "ilk" olur YERLER sırasına bağlı.

**30. EĞİM SÜRTÜNMESİ yüzeyi (DEM → `_kvsurt`)** (1427–1522)
- AMAÇ: `surt = 1 + EGIM_CARPANI × |∇z|` (birim m/hücre ⇒ ızgara çözünürlüğü kalibrasyonla (egim_olc.py ADIM=0.05) AYNI olmak zorunda). `np.flipud` şart (rasterio satır0=kuzey, ızgara _j=0 güney; Everest/K2 ile bağımsız tanıkla doğrulandı). DEM'in üst ucu 84° < 85°: istenen pencere kırpılmazsa 144°'lik veri 145°'ye GERİLİYOR (Everest +0,637°, Ağrı +0,673° ≈75 km kuzey; KITA 11 buldu, Koşu 8-9 bu hatayla koştu); şimdi pencere DEM üst ucuna kırpılır, eksik kuşak 0 ile doldurulur.
- YÖNTEM: `rasterio` ile `average` yeniden örnekleme; `np.gradient`; `array('f')` 4 B/öğe.
- AYAR: `EGIM_CARPANI>0 and EGIM_DEM` ⇒ CANLI.
- ŞÜPHE: (a) BELLEK: yorum "düz liste 6,4 M Python float'ı olurdu ~200 MB, array 25 MB" — ama kod `(1.0 + EGIM_CARPANI*_kvegim).ravel().tolist()` ile ÖNCE 20,9 M elemanlı Python listesi kurar (~670 MB geçici zirve), yorumdaki sayılar eski pencereye ait. (b) Gradyan ham z (batimetri dahil) üzerinde — kıyıda şişme ölçüldü ("marjinal") ama kalibrasyon bu yüzeyde yapıldığı için KASITLI. (c) Koşu 8 ve 9 çıktısının eğim yüzeyi kaymıştı (tarihî; yeniden üretilmedi mi bilinmiyor).

**31. NEHİR GEÇİŞ BEDELİ (kenar bazlı)** (1524–1721) — MOTOR DALGA-0052, 16 Eyl 2026 (`NEHIR-GECIS-SURE-0915`)
- AMAÇ: nehir geçişi bir KENAR olayıdır (nehir boyunca yürümek ≠ nehri geçmek); hücreye yazılsaydı boyu cezalandırılırdı. Bedel saat→km-eşdeğeri (×5,04). Tablo `NEHIR_BEDEL_SAAT`: "idare" (varsayılan, MENZIL ① D030): geçitsiz sınıf-1 16 sa (Musul 1737: 2 gün, Misis: 6 gün), geçitsiz sınıf-2 4 sa (TÜRETİLDİ, kaynaksız, KARAR BEKLİYOR), köprü 0, feribot/kale-çifti 8, sığ geçit 4 (TÜRETİLDİ, kayıt BULUNAMADI). "ordu" (KAPALI, Emre özneyi seçmedi): köprü 16, kurarak 72, sığ geçit None.
- YÖNTEM: `_nehir_kenar_kur(parcalar, siniflar, gecitler, tablo)`: nehir hatları yarım ızgara adımıyla örneklenir → nehir hücreleri (`_hs`) → aday kaynak hücreler (nehir hücresi ∪ komşuları, yalnız kara) → adayın merkez→komşu merkez doğrusu `STRtree.query(intersects)` ile nehirle kesişiyorsa en pahalı sınıfı alır → geçit indirimi (orta nokta geçidin `etki_km` içindeyse `min(geçitsiz, tür bedeli)`; `f`/`t` OKUNMAZ — "geçit köprüden eskidir") → `bedel {h*_KV_YS+yön: km-eşdeğeri}`, `bayrak` bytearray, `olcum` sözlüğü. Sonuç `_KVNEHIR=(bedel, bayrak)`.
- AYAR: `MOTOR_NEHIR_OZNE` verilmedi ⇒ "idare" CANLI; `MOTOR_NEHIR_KAPALI` verilmedi ⇒ CANLI (sınıf listesi sağlam ise). "ordu" tablosu ÖLÜ.
- KAPSAM UYARISI (yorumda): bu Dijkstra'nın cevabı haritaya YALNIZ düz hattı DENİZİ kesen parçalar için iner (`_kvkp.contains(LineString)` süzgeci, dilim dışı); kara-kara sınırı hâlâ Voronoi + tavan çiziyor ⇒ nehir bedeli ızgarayı değiştirir, haritayı dar kapıdan etkiler. (MOTOR_YURUYUS açıkken bu kapsam genişler.)
- ŞÜPHE: (a) İki bedel (sınıf-2 4 sa, sığ geçit 4 sa) KAYNAKSIZ/TÜRETİLMİŞ — CLAUDE.md "tarih uydurma/kaynaklı" ilkesiyle gerginlik; "karar bekliyor". (b) Geçit NEHİR ADIYLA değil YAKINLIKLA eşleşir (iki nehrin kavşağındaki geçit ikisine de indirim verir, Belgrad); yorumda sınır kayıtlı. (c) `etki_km` (30/20/15/10) gecitler.js'in kendi beyanıyla kalibre edilmemiş. (d) `_kv_ara_kara`, `_KV_YARI` bu kümede ÖLÜ (YURUYUS_16 kapalı). (e) Dijkstra'nın "ordu" tablosunda `sig-gecit` None ⇒ geçit atlanır.

**32. BOĞAZ YASAĞI** (1735–1779) — BOGAZ-OLCUM-0081, 28 Eyl 2026
- AMAÇ: ızgara hücre MERKEZİNE sorar; 0,05° hücreden (41°K'da 4,2×5,5 km) dar su hattı (İstanbul Boğazı 0,7–3,4 km) iki yakada KARA merkezli hücreler bırakır ve 8-komşu çapraz adım suyu atlar. Ölçüldü (koşu 16): doğrusu sudan geçen adım 50.617; küme 8.720; İstanbul Boğazı penceresinde gerçek maskede 2 yaka, ızgarada TEK bileşen.
- YÖNTEM: `_KVSU` = doğrusu KARA dışına çıkan YASAK yönlü kenarlar kümesi; yalnız KIYI hücresine değen adımlar sınanır; 11 noktalı örnekleme (Eğriboz 40 m gibi dar hat KAÇABİLİR, kalan kaçak "ölçüm satırında sayılır"); `rasterio.features.rasterize(KARA.boundary, all_touched=True)`.
- AYAR: `MOTOR_BOGAZ_KAPALI` verilmedi ⇒ CANLI.
- ŞÜPHE: örnekleme aralığından dar su hatları (Eğriboz vb.) hâlâ geçilebilir — "kalan kaçak sayılır" ama sınırlanmaz. Ölçüm önceden ~101.000 yönlü kenar öngörüyordu (8 komşuda).

**33. KISTAK KÖPRÜSÜ** (1781–1887 işlevler; 1953–1987 uygulama) — post-it #80 (Aden), 18 Eki 2026, Emre onayı; `denetim/MOTOR-KISTAK-KOPRU-1018.md`
- AMAÇ: kıstak/burun/lagün kentinin tohum hücresi ızgarada ADA kalabiliyor (komşu hücre merkezleri denizde, çapraz adımı boğaz yasağı kesiyor) ⇒ tohum çıkamıyor, bağlı olduğu anakarayı başka tohum alıyor. Koşu 27 KARA'sında 194 hapis tohum, 39'u taşınır (Aden 1538'de 10 km kuzeyi Taiz/Yemen'e gidiyordu; Sinop, Cádiz, Özi, Kılburun, Lagos, Koçin, Masavva).
- YÖNTEM: `_kv_adim_serbest` (Dijkstra adım şartlarının aynısı), `_kv_hapis(h)` (±KISTAK_PENCERE=6 hücre kutusundan çıkılabiliyor mu), `_kk_kara_yolu(lon,lat)` (0,005° ince ızgarada GERÇEK karada Dijkstra, 8 komşu, en çok KISTAK_YOL_KM=16 km; kıstak geçilir, liman/boğaz geçilmez). Hapis tohum ≤16 km karadan varılan hapis OLMAYAN en yakın hücreye (±KISTAK_ARAMA=4) `_kvtohum`da taşınır; küçük adadaki tohum (Santorini, Malta) hedef bulamaz, OLDUĞU GİBİ kalır; eski hücre sahipsiz ⇒ "karar dışı" ⇒ Voronoi (en yakın nokta tohumun kendisi) — kent hücresini kaybetmez.
- AYAR: `MOTOR_KISTAK_KOPRU=1` ⇒ CANLI.
- BAĞ: tek sözlük `_kvtohum` değiştiği için bütün Dijkstra'lar tutarlı; boğaz yasağını AYNEN uygular; tohum yakası (madde 34) ÖNCE koşar.
- ŞÜPHE: (a) 30 km denemesinde Sakız/Korfu/İbiza ada içinde 18–20 km kayıyordu ⇒ 16 km "ampirik" sabit (Koçin 15,6) — bir ölçüm artığı, genel kural değil. (b) `_kk_kara_yolu` nehir yakasını sınamaz: kıstak köprüsü, tohum yakası'nın düzelttiği nehir yakasını yeniden bozabilir (anlaşılmadı: iki yama sıralı koşuyor, etkileşim ölçülmüş mü yorumda yok). (c) Üç ayrı Dijkstra kopyası aşağıda (madde 35/36/44) + bu işlevin 4. yerel kopyası.

**34. TOHUM YAKASI (MOTOR-TOHUM-YAKA-1029)** (1890–1951) — post-it #157, Haram/Banatska Palanka 1716, KOŞU 30
- AMAÇ: Haram noktası Tuna çizgisinin 2,2 km KUZEYİNDE ama 0,05° hücrenin merkezi ~30 m GÜNEYİNDE; nehir bedeli merkezden merkeze adıma yazıldığı için Dijkstra tohumu güney yakada sayıyordu: Haram peteği 309 km², tamamı güney yakada; 1716-11-16 devri yanlış yakada.
- YÖNTEM: nokta ↔ kendi hücresinin merkezi doğrusu bir NEHİR hattını kesiyorsa tohum, merkezi noktayla AYNI yakada kalan (doğrusu hiçbir nehri kesmeyen) en yakın 8-komşu kara hücresine taşınır (`_kvyaka`); uygun komşu yoksa OLDUĞU GİBİ. Kıstak köprüsünden ÖNCE koşar.
- AYAR: `MOTOR_TOHUM_YAKA=1` ve `_KVNEHIR` not None ⇒ CANLI.
- ŞÜPHE: (a) tek vaka (Haram) için genel kural: ölçüm "kaç tohum etkilendi" satırında basılır, önceden sayısı yorumda yok. (b) `_ty_keser` TÜM `NEHIRLER`i (sınıf 2 dahil, scalerank≤5 + ad listesi) engel sayar — küçük nehir de tohum kaydırır; bedel sınıfı süzülmez. (c) Taşınan tohum bir sonraki hücrede tekrar sınanmaz.

**35. `_kv_dijkstra` (üretim Dijkstra'sı)** (1988–2033, 2107–2108)
- AMAÇ: çok kaynaklı Dijkstra, YALNIZ kara hücrelerinde; adım maliyeti = gerçek km (boylam adımı cos(enlem) ile daralır) × hedef hücre sürtünmesi (+ kaynak hücre nehir bayrağı varsa kenar bedeli); `_kvuzak` artık "kilometre" değil "yürüme bedeli (km-eşdeğeri)", ÷5,04 = saat. İşlev hâline getirildi ki aynı kod A/B ölçümlerinde yeniden koşsun (`denetim/ARAC-MOTOR-NEHIR-0916.py` AST ile çekip koşturur).
- YÖNTEM: `uzak`, `sahip` düz Python listeleri (20,9 M); 8 (ya da 16) komşu; boğaz yasağı (`_KVSU`) ve (16 komşuda) ara hücre şartı; sürtünme HEDEF hücreden okunur (egim_olc.py:136 kalibrasyonu birebir).
- AYAR: HER ZAMAN. Üretim çağrısı: `_kvuzak, _kvsahip = _kv_dijkstra(_kvsurt, _KVNEHIR)`.
- ŞÜPHE: bellek: iki düz Python listesi ×20,9 M (+ A/B çağrılarında 2 tane daha, madde 37-38).

**36. `_kv_iki_etiket` (iki etiketli Dijkstra, BTB için)** (2036–2104)
- AMAÇ: her hücre için en ucuz tohum `(d1,s1)` ve ondan FARKLI en ucuz tohum `(d2,s2)`; `d1+d2` iki tohum arası sürtünmeli açıklık ("boş toprak bölüşümü" kapısı, madde 41). AYRI GÖVDE çünkü `_kv_dijkstra` AST sınavının çekip koştuğu işlevdir; ayrışma çağıranda `s1==_kvsahip` sınavıyla yakalanır (assert/SystemExit).
- AYAR: yalnız BTB açıkken çağrılır ⇒ Koşu 40'ta ÖLÜ.
- ŞÜPHE: aynı adım hesabının üçüncü kopyası (`_kv_dijkstra` / `_kv_iki_etiket` / `_yr_yerel_dijkstra`) — yorum "kopya ayrışır" riskini kendisi söylüyor; ayrışma sınavı yalnız BTB yolunda (d1/s1 eşitliği) var, `_yr_yerel_dijkstra` için yok.

**37. A/B ÖLÇÜMÜ — EĞİMİN ETKİSİ (eğimsiz ikinci Dijkstra)** (2110–2146)
- AMAÇ: A1-tavan vakasının dersi (düzeltme doğru, sonraki aşama geri alabilir); eğimin etkisini aynı koşunun içinde ölç (maliyet ~1dk38sn, koşunun %2,1'i). Sonuç ÜRETİME KARIŞMAZ; `_kvsahip0` olarak kalır. ÖNGÖRÜ: ~166.966 hücre / %4,97.
- YÖNTEM: `_kv_dijkstra(None, _KVNEHIR)`; erişilen hücre sayısı ve sahibi değişen hücre sayısı basılır; `_kvuzak0` silinir.
- AYAR: `MOTOR_EGIM_AB_KAPALI` verilmedi ⇒ CANLI (eğim açık olduğu için).
- ŞÜPHE: SALT ÖLÇÜM işi — haritaya hiçbir şey katmıyor ama tam bir ızgara Dijkstra'sı (süre + ~2×20,9 M liste: `uzak` silinse de `_kvsahip0` listesi KALIYOR). İşçi süreçte (madde 12) de tekrar koşar. Dilim dışında `_kvsahip0` okunuyor mu — anlaşılmadı (okunmuyorsa ölü bellek yükü).

**38. A/B ÖLÇÜMÜ — NEHİR BEDELİNİN ETKİSİ (nehirsiz ikinci Dijkstra)** (2148–2163)
- Eğim A/B'sinin aynası; `_kv_dijkstra(_kvsurt, None)` ⇒ `_kvsahipN`; `_kvuzakN` silinir. Öngörü `denetim/MOTOR-0916.md ②`.
- AYAR: `MOTOR_NEHIR_AB_KAPALI` verilmedi ⇒ CANLI.
- ŞÜPHE: madde 37'nin aynısı — SALT ÖLÇÜM, ikinci tam Dijkstra, `_kvsahipN` bellekte kalıyor.

**39. YÜRÜYÜŞ: bütçe bölgesi + ızgara karar bölgesi (eşyükselti)** (2165–2200, 2402–2472)
- AMAÇ: `_YR_UZAK` (bütçeden UZAK eşyükselti poligonları) ve `_YR_IZGARA` (ızgaranın KARAR verdiği bölge) üretmek; kara-kara sınırını yürüyüş süresi çizsin. Karar bölgesi = erişilen kara + kıyı saçağı (2 hücre) − tohumsuz karanın saçağı. Maliyet alanı: erişilen karada Dijkstra bedeli; saçakta komşu minimum; karar dışında 0 (orada bütçe SORULMAZ, kural ③).
- YÖNTEM: `_YR_SAHIP` (ny×nx int32), `_YR_KARAR`, `_YR_BUTCE = SAAT×5,04 = 201,6 km-eşd.`; `contourpy.contour_generator(FillType.OuterOffset)`, 5°'lik karolar (YURUYUS_KARO), `rasterio.features.shapes(connectivity=8)` ile karar poligonları; STRtree'ler `_YR_UZAK_AGAC`, `_YR_IZGARA_AGAC`. Başlangıçta `_YR_UZAK=[]`, `_YR_BANT_UZAK={}`, `_BTB=[]`, `_YR_KORUMA=[]` BURADA da tanımlı (bayrak kapalıyken NameError olmasın).
- AYAR: `MOTOR_YURUYUS=1` ⇒ CANLI.
- ŞÜPHE: "çağrılmıyor bir savunma değil — ad var olsun" tanımları = bayrak kapalı yolu için ölü-benzeri yedek. `_YR_KORUMA` (korunan adlar) sınırsız liste, yalnız rapor için.

**40. ÇÖL KELEPÇESİ (MOTOR_COL_UFUK_SAAT)** (2201–2273) — B-GORUNUM-0072, 21 Eyl 2026
- AMAÇ: 16 Eyl kararı "Çöl/buz/yüksek plato hücrelerinde ufuk 5 günde kalır" yazılı değildi; ufuk hücre başına. Sahra kutusunda 5→10 gün sahipsiz karayı 950.218→16.608 km²'ye indiriyor; kelepçe 5 günde tutulursa kazancın %98,2'si geri gider, 7 günde %79,4 korunur — karar EMRE'nin, bu yüzden PARAMETRE.
- YÖNTEM: `ne_10m_geography_regions_polys` `FEATURECLA=="Desert"` ikinci kez okunur (motorun `COL`u ~2000 satır sonra kuruluyor); `_kel_M` maske, `_YR_ESIK` (hücre başına eşik: genel `_YR_BUTCE`, çölde `COL_UFUK_SAAT×5,04`). Kapalıyken blok HİÇ çalışmaz (bit bit eski: "alanı normalleştirip 1.0'dan kontur almak aynı sonucu vermeli ama kayan nokta birebir olmaz").
- AYAR: `MOTOR_COL_UFUK_SAAT=0` ⇒ ÖLÜ (bu bayrak kümesinde kelepçe KAPALI; bu da BTB'nin çöl ucunu ve madde 43 `_ozel` dalını ölü yapar).
- ŞÜPHE: (a) Çöl tanımı iki yerde (burada ve ~2000 satır sonra `COL`) — "biri değişirse öteki DE değişmeli" (yorum itirafı). (b) Epok onarımı (madde 47) kelepçeyi BİLEREK uygulamıyor (skaler tavan) — "ölçülmedi, ayrı kalem". (c) Yorumdaki 950.218→16.608 km² ve %98,2/%79,4 sayıları ölçüm fotoğrafıdır.

**41. BOŞ TOPRAK BÖLÜŞÜMÜ AYARI — "BTB" (MOTOR_BOS_TOPRAK, MOTOR_BOS_TOPRAK_COL)** (2274–2388) — Emre 21 Eyl 2026
- AMAÇ: "nasıl Atlantik'i Akdeniz'i iki ülke arasında bölüştürmüyor isek kum denizini dağ denizini ve orman denizini de iki yerleşim arasında bölüştürmemeliyiz." Açıklık `d1+d2` > `esik_km` ise aradaki toprak "deniz" sayılır; her iki yakada `pay_km` saçak kalır. Muafiyet (aynı devletin iki yakası) B1/B2'de zaten var; AMA B2 tavanı `B2_ENKLAV_KM=250` — eşik>250 seçilirse B2 tavanı da yükseltilmeli (motor bunu İHBAR EDER, kendiliğinden değiştirmez). Çöl ayrıcalığı `pay` ucundadır (ölçüm: Sahra koridorunun en boş noktası 261 km, açıklık ~522 km; esik indirimi anlamsız, `pay` indirimi anlamlı). Süreklilik şartı: `esik<2×pay` ⇒ kapı sıçrayarak açılır, uyarı basılır.
- YÖNTEM: `_kv_iki_etiket` + `_btb_g` (açıklık raster'ı) → `_btb_M` (eşiği aşan hücre) → `_YR_ESIK` bu hücrelerde `min(eski, pay)`; çöl maskesi varsa çöl hücrelerinde ayrı pay/eşik. AYRIŞMA SINAVI: iki etiketli Dijkstra `s1` ≠ `_kvsahip` ⇒ SystemExit.
- AYAR: `MOTOR_BOS_TOPRAK` verilmedi ⇒ ÖLÜ; `MOTOR_BOS_TOPRAK_COL` ÖLÜ (ve çöl maskesi de ölü).
- ŞÜPHE: (a) Tamamen ÖLÜ kod bloğu (~115 satır) bu kümede; "pay/eşik" ölçeği yorumda yalnız öneri. (b) "B2 tavanı uyarısı" burada DEĞİL, ~1000 satır sonra (yorum yönlendirmesi: `_BTB` adı iki yerde geçer). (c) Yorumdaki "dağ denizi kendiliğinden geniştir, kum/orman denizi değil" — kum için çöl maskesi, ORMAN/TUNDRA denizi için hiçbir mekanizma yok (yorumda belirtilmiş, çözülmemiş).

**42. KONTUR NORMALLEŞTİRME + `_yr_kontur`** (2389–2401, 2419–2454)
- AMAÇ: `_YR_ESIK` varsa alan kendi eşiğine bölünüp seviye 1.0'dan kontur alınır (contourpy tek skaler seviye alır); yoksa skaler `_YR_BUTCE` (bit bit eski yol). `_yr_kontur(seviye, _alan)`: "seviyeden UZAK bölge poligonları", 5°'lik karolar, `contour_generator.filled(seviye, üst)`, halkalar `Polygon(...).buffer(0)`. İşleve alınma gerekçesi: bantlar aynı kodu farklı seviyelerde koşsun (kopya ayrışır).
- AYAR: `_YR_ESIK is None` (kelepçe ve BTB ölü) ⇒ Koşu 40'ta skaler yol CANLI; normalleştirme dalı ÖLÜ.
- ŞÜPHE: `_yr_F_ham` yalnız `_YR_ESIK` varken saklanır; ölü dal.

**43. Ⓑ UFUK BANTLARI (MOTOR_UFUK_BANT)** (2473–2526) — Emre kararı 5/7/10 gün; P84-UFUK-BANT-KOD-1006
- AMAÇ: Emre 16 Eyl: "Motor çıktısı devlet başına iç içe OLMAYAN ARTIŞ bantları verir; arayüz seçilen ufka kadarki bantları birleştirir." Bant = AYNI bedel alanının farklı kontur seviyesi (yeni Dijkstra yok; bant başına ~4 sn). Tekdüzelik (küçük bütçe ⊂ büyük bütçe) iki kutuda ölçüldü: 0 ihlal. P84 düzeltmesi: eski `_sv=_bs/YURUYUS_SAAT` katı ÖZEL hücre eşiğini de büyütüyordu (çöl 56→78,4→112 sa) — Emre'nin "çölün ufku 7 gün" kararı bantta çiğneniyordu; yeni hâl: ÖZEL hücrede eşik SABİT ⇒ çölde 5=7=10 (KARAR GEREĞİ).
- YÖNTEM: `_UFUK_BANT` listesi; `_bs==YURUYUS_SAAT` ise taban (`_YR_UZAK`) yeniden kullanılır; diğerleri `_yr_kontur`. `_YR_BANT_UZAK[bant] = (poligonlar, STRtree)`.
- AYAR (Koşu 40): `MOTOR_UFUK_BANT=40` = YURUYUS_SAAT ⇒ TEK bant, o da taban (yeni kontur ÜRETİLMEZ); `_ozel` dalı ÖLÜ.
- ŞÜPHE: bu kümede "bant" mekanizması fiilen tek-bantlı (40) — çok bantlı yapının yükü (kod + yeniden kullanma yolu) boşuna; yalnız MÖ tavanı ≠ 40 olsaydı anlam kazanırdı.

**44. `_yr_yerel_dijkstra`** (2529–2571)
- AMAÇ: kısıtlı çok kaynaklı Dijkstra — üretim Dijkstra'sıyla AYNI adım bedeli (hedef sürtünmesi, nehir kenarı, 16 komşuda ara hücre); `izinli` kümesi + `tavan`. Paylaşılan durumu değiştirmez (iş parçacığı güvenli).
- YÖNTEM: sözlük tabanlı; kaynak [(bedel, hücre, sahip)] → {hücre: (bedel, sahip)}.
- AYAR: MOTOR_YURUYUS açık ve epok devri olduğunda çağrılır ⇒ CANLI (dilim dışından).
- ŞÜPHE: boğaz yasağı (`_KVSU`) BU kopyada UYGULANMIYOR (yalnız `_kv_dijkstra`/`_kv_iki_etiket`'te var) — üç Dijkstra kopyasından biri öbürlerinden farklı davranıyor; yorum "AYNI adım bedeli" diyor ama `_KVSU` satırı yok. (Doğrulanabilir tutarsızlık.)

**45. `_yr_etiket_poligon`** (2574–2598)
- AMAÇ: etiket penceresini (satır0=GÜNEY; −1/−2 etiketsiz) {etiket: poligon}'a çevirir; petek kurulumundaki yolun aynısı (rasterio parçaları tek ağda düğümlenir, örtü birleşir, `coverage_simplify(YURUYUS_SADE=0.05)`).
- AYAR: CANLI (epok devrinde kullanılıyorsa; çağıran dilim dışı).

**46. `_yr_canli_pencere`** (2607–2627) — MO-MOTOR-1020 (dünya ölçeği)
- AMAÇ: epok devrinde ölü hücreler içinden yalnız CANLI tohumların erişebileceği hücreleri döndür. Sürtünme≥1 ve nehir bedeli≥0 ⇒ bedel kuş uçuşundan küçük olamaz ⇒ pencere (tavan/_KVDY+4 satır, enleme göre genişleyen sütun) kesin üst küme. Eskiden MÖ epokunda ~6 M ölü hücre Python döngüsüne giriyordu: 540 sn · 8,8 GB (ölçüldü).
- YÖNTEM: `_KV_TOHUM_TERS` {idx: hücre} ilk çağrıda kurulur (global önbellek).
- AYAR: `canli is not None` olduğunda (MÖ/sahne kuralı) ⇒ CANLI (MO_SINIR=9999).
- ŞÜPHE: `W` her çağrıda tam ızgara boyutunda bool dizisi (20,9 MB) yeniden yaratılır; `_KV_TOHUM_TERS` ömür boyu kalır (tavan yok, tek seferlik).

**47. `_yr_epok_onar` (EPOK DEVRİ b)** (2630–2704)
- AMAÇ: `olu` tohumlarının ızgara hücreleri CANLI komşu hücrelerden (kendi üretim bedelleriyle) tohumlanan kısıtlı Dijkstra ile yeniden dağıtılır; canlı hücrenin mesafesi ölü tohumun silinmesinden etkilenmez ⇒ sonuç epok başına tam Dijkstra'ya AYNI (iddia). Bütçe (40 sa) aşılırsa hücre sahipsiz (−2).
- YÖNTEM: `_YR_SAHIP_SIRA` (argsort önbelleği, bir kez), her ölü için `searchsorted` (M-4537 hızlandırması; dtype uyumu cProfile ile bulundu: çağrı başına ~2 ms ve +8 GB), `D` (ölü hücreler), 5×5 `binary_dilation` yalnız ölü kutusu ±2 pencerede (hata yarıçapı 2, eski tam-ızgara yolu ile BİREBİR), kaynak = aynı hücredeki canlı tohum + sınır halkası (d ≤ tavan); `butce`, `canli` parametreleri MÖ içindir; `_yr_yerel_dijkstra`.
- AYAR: CANLI (dilim dışından çağrılır).
- ŞÜPHE: (a) Çöl kelepçesi BİLEREK uygulanmıyor ("ara hesabın menziline bakar, çıktıya değil; tam doğrusu tavanın da hücre başına olması — ölçülmedi") — kelepçe kapalı kümede önemsiz. (b) `_yr_yerel_dijkstra` boğaz yasağı eksikliği (madde 44) epok devrini de etkiler: ölü tohumun toprağı boğazı atlayarak devredilebilir (anlaşılmadı; ölçülmüş mü bilinmiyor). (c) Eşitlik iddiası "AYNIDIR" yorumda; yalnız mantıkla savunulmuş (bu dilimde sınav yok).

**48. `_yr_kes` (A1 tavanı yerine bütçe kesimi)** (2707–2731)
- AMAÇ: `geo`dan bütçeden UZAK olanı çıkar; ızgaranın karar vermediği payda ESKİ tavanı (`TAVAN_DAIRE[i]`, dilim dışı) uygula. Tohumun kendi yeri asla kesilmez (Değişmez 1): keserse `geo∩nokta.buffer(KV_ADIM)` eklenir ve `_YR_KORUMA`ya ADIYLA sayılır. `bant` verilirse o bütçenin kontur kümesiyle keser.
- AYAR: CANLI.
- BAĞ: `TAVAN_DAIRE`, `noktalar`, `poligonal` (dilim dışı/sonraki satırda tanımlı).
- ŞÜPHE: `noktalar` hemen sonraki satırda (2736) tanımlanıyor — işlev çağrıldığında var olması gerekir; sıra yalnız çağrı zamanına bağlı. Eski A1 tavanı (`TAVAN_DAIRE`) ile yeni yürüyüş bütçesi İKİ AYRI MEKANİZMA aynı işi yapıyor, ızgara karar bölgesi dışında eskisi kalıyor ("④ beyan").

**49. Sınır: Petekler (Voronoi) başlangıcı** (2734–2735)
- `asama("Petekler üretiliyor (Voronoi)")`, `noktalar`, `voronoi_diagram(...envelope=BOLGE)` — dilim 2'ye geçer.

---
## ÖZET ŞÜPHELER (dilim 1)
1. Koşu 40 "MÖ kuralları" (sahne/devir/tavan) MO_SINIR=9999 ile BÜTÜN tarihlerde açık; kuralın varsayılan tasarımı (1281 öncesi) ile fiilî kullanım ayrık — Osmanlı çağı da etkileniyor.
2. İşçi süreç (MOTOR_SUREC_ISCI=2) ön aşamanın TAMAMINI (iki salt-ölçüm A/B Dijkstra, DEM eğim yüzeyi, 20,9 M elemanlı Python listeleri, node alt süreci) baştan koşar ⇒ ana süreç kadar bellek; yorumdaki "2–3 GB" eski pencereye ait.
3. Eğim ve nehir A/B ölçümleri üretime katkısız ama tam Dijkstra + bellekte `_kvsahip0`/`_kvsahipN`; dilim dışında okunmuyorsa saf yük.
4. Üç ayrı Dijkstra kopyası (`_kv_dijkstra`, `_kv_iki_etiket`, `_yr_yerel_dijkstra`); yalnız ilk ikisinde boğaz yasağı var — `_yr_yerel_dijkstra` (epok devri) yasağı uygulamıyor.
5. Kıstak köprüsü, tohum yakası'ndan SONRA koşar ama nehir yakasını sınamaz: iki yama (Haram/Aden vakaları) birbirinin sonucunu bozabilir.
6. Ölü kod blokları bu bayrak kümesinde: ÇÖL KELEPÇESİ, BTB(+COL), YURUYUS_16 dalları, "ordu" nehir tablosu, `_ozel` bant dalı, `MOTOR_EGIMSIZ`.
7. Ezber sözlükleri: `BUYUK`, `BUYUK_SADE` ek varyantları, `NEHIR_SINIF1_ADLAR`, `DOGAL_GOL`, `ENGEL_SINIFI` — el yazımı, tavansız, ölü girdi birikimi.
8. Kaynaksız/türetilmiş nehir bedelleri (sınıf-2 4 sa, sığ geçit 4 sa) "KARAR BEKLİYOR".
9. `.tolist()` ile 20,9 M float'lık geçici liste (eğim yüzeyi) — yorum eski (6,4 M/200 MB).
10. "CANLI: …dolgu…" katman satırı sabit metin; Koşu 40'ta MOTOR_DOLGU_KAPALI=1 ile çelişebilir (dilim dışı doğrulama).
11. Anlık görüntü dışı girdiler (devletler.js, gecitler.js, d_sinirlar*.js, index.html) koşu sırasında değişirse çıktıya girer.
12. Motor C hattını duvar sayıyor, `denetle.py` D8 saymıyor (iki ölçü).

---
## (1) Bu dilimde tanımlanan SÜREÇ İÇİ ezberler / önbellekler

Süreç içi:
- `_ONB_OZ` {id(geo): (geo, sha256)} — SINIRSIZ, tavan yok; geometrileri canlı tutar.
- `_SAYAC`, `_ASAMA_KAYIT` — küçük, sınırsız ama önemsiz.
- `_HARITA_ALT` {id: harita anahtarı} — künye boyutu.
- `_SK_HAM`, `_SK_IZ`, `_SK_TABI` — SINIR_KISIT girdisi, koşu boyu sabit.
- `AD2IDX` {ad: indeks}.
- `_kvkara` bytearray (20,9 MB), `_kvsurt` array('f') (~84 MB), `_kvuzak`/`_kvsahip` (düz Python listeleri, 20,9 M), `_kvsahip0`/`_kvsahipN` (ölçüm listeleri, kalıyor), `_YR_SAHIP` int32 dizisi, `_KVSU` (set, yönlü yasak kenarlar), `_KVNEHIR=(bedel sözlüğü, bayrak bytearray)`.
- `_kvtohum` {hücre: [yerleşim indisleri]}, `_kvpencere_disi`, `_kvyaka`, `_kvkopru` (taşıma kayıtları).
- `_YR_UZAK`, `_YR_IZGARA`, `_YR_BANT_UZAK`, `_YR_UZAK_AGAC`, `_YR_IZGARA_AGAC` (STRtree'ler), `_YR_KORUMA` (liste).
- `_YR_SAHIP_SIRA` (argsort önbelleği, ilk çağrıda kurulur), `_KV_TOHUM_TERS` (global, ilk çağrıda kurulur) — ikisi de tavansız ama tek seferlik.
- `NEHIRLER`, `NEHIR_SINIFI`, `NEHIR_HAT`, `SIRTLAR`, `SIRT_HAT`, `KARA`, `GOLLER`, `GECIT_KAYIT`.
Koşular arası:
- `_motor_onbellek/motor_onbellek.sqlite` (`MOTOR_ONBELLEK_DIZIN`): iki `Onbellek` nesnesi, aynı dosya: `_ONB` (genel tuz: k1, col, kusat, dolgu) ve `_ONB_GEO` (geometri tuzu: govde, osm, sb). Bu dilimde yazılan katman: `k1` (anahtarlar `k1_kara`, `k1_goller`). Tuz değişince tam yeniden inşa; `MOTOR_ONBELLEK_BUDA_GUN` budama (tanım dilim dışı).
- `_petek_devam/<ön aşama izi>/` (MOTOR_DEVAM; gövde devlet-başı FAZ 1 sonuçları; koşu bitince silinir).
- Geçici: `petek_surec_*` temp dizin (işçi ara dosyaları).

## (2) Dilimin okuduğu girdiler / yazdığı çıktılar

Okur:
- `veri-kaynak/ne_10m_land.geojson`, `ne_10m_lakes.geojson`, `ne_10m_rivers.geojson`, `ne_10m_geography_regions_polys.geojson`.
- `veri-kaynak/yukseklik/etopo2022_30s_dunya.tif` (ya da `…_atlas.tif`) — eğim DEM'i.
- `data/goller.js` (`girdi.oku_goller()`), `data/gecitler.js` (doğrudan, rb + sha256), yerleşim dosyaları (`girdi.yukle()`, `GIRDI_DOSYALARI` anlık görüntü kopyasından), `data/devletler.js` (`girdi.oku_devletler()`, anlık görüntüden ÖNCE).
- `index.html` (`paket_coz.index_esleyen` ile d_sinirlar*.js yolları) ve `d_sinirlar*.js` (node ile eval edilir) — yalnız `MOTOR_SINIR_KISIT=1`.
- Modüller: `arac/kosu_kilit.py`, `renkler.py` (BOYALAR), `girdi.py`, `motor_onbellek.py`, `gun.py` (tuz için özet), `yukseklik.py`, `paket_coz.py`.
- Ortam: yukarıdaki MOTOR_* değişkenleri.
Yazar:
- `<kök>/uretim_canli.log` (ya da `MOTOR_CANLI_LOG`; "w"), `uretim_isci_<k>.log`, `<kök>/.uretim-basladi`, kilit kaydı (`kosu_kilit` "petek"), `_motor_onbellek/motor_onbellek.sqlite`, `_petek_devam/…` (DEVAM; gövde aşamasında), geçici `petek_surec_*` dizini, standart çıktı.
- `data/donemler.js` (CIKTI) bu dilimde YAZILMAZ (yalnız yol sabiti; sonraki dilimler).
