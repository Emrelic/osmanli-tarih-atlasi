// =====================================================================
// ORTA ASYA + GÜNEY ASYA — ÇOK KÜNYELİ KRONOLOJİ (KRONO-ASYA-UZAK-0929, 29 Eylül 2026)
// Oturum: KRONO-ASYA-UZAK-0929 · koordinatör: YILDIRIM BAYEZIT
// =====================================================================
// ⚠️ index.html'e ve arac/paketle.py'ye BAĞLANMADI — bağlamak koordinatörün işi.
//    Bağlanana kadar sitede görünmez (normal).
// 📌 Dosya adındaki `2` KASITLI: mevcut kronoloji_orta_asya.js (205 madde,
//    KRONO-BAGLAMA-0929'un elinde) ile çakışmayı önler. Güney Asya maddeleri
//    (Sih · İngiliz Hindistanı · Fârûkîler) şartnamede ayrı dosya olmadığı için
//    BURADA — koordinatör isterse kronoloji_cok_guney_asya.js'e ayırır.
//
// ── BAĞLAMA YOLU (ORTAK §4.1) ─────────────────────────────────────
// window.KRONOLOJI_COK_ORTA_ASYA2 → app.js cokTarafliKronolojiEkle: her madde
// `taraflar:[...]` künyelerine EKLENİR (ezmez; t+b tekrarı atlanır).
// Künyeler data/devletler.js'ten okundu (29 Eylül 2026), madde günü pencere içinde:
//   buhara 1500→1920 · mogulistan 1347→1680 · timurlu 1370-04-09→1507-05-01
//   hokand 1710→1876 · kazak-hanligi 1465→1847 · yakub-beg 1865-01-01→1878-03-16
//   qing-hanedani 1636→1912 · afganistan 1823→1923 · afgan-durrani 1747→1823
//   farukiler 1370→1601 · delhi-sultanligi 1206→1526 · sih-imparatorlugu 1801→1849-03-29
//   ingiliz-hindistani 1757→1947
// 🔴 KÜNYESİ OLMAYAN id'ler (M-5416 kural 3 — madde KAYBOLMAZ, künye inince bağlanır):
//   kuca-hocalari (1864-65 Kuça Hoca rejimi) · kunduz-hanligi · nagpur-bhonsle
//   → gerekçeleri denetim/KRONO-ASYA-UZAK-0929-KUNYE.md
//
// ── MÜKERRER DİSİPLİNİ ─────────────────────────────────────────────
// Önceden tarandı: VAR, YAZILMADI → 1370-04-09 Timur (kronoloji_iran) · 1379
// Harezm (olaylar_2s_0919) · 1500-07 Şeybânî'nin Buhara/Semerkant/Herat'ı
// (kronoloji_ozbek + timurlu) · 1808 Âlim Han'ın Taşkent'i (kronoloji_ozbek) ·
// 1826 Belh (olaylar_2s_0919) · 1878 Zuo Zongtang (kronoloji_cin) · 1895 Pamir
// notaları (kronoloji_sinir_asya) · 1573 Ekber'in Gucerât'ı (kronoloji_hindistan)
// · 1849 Pencap ilhakı (kronoloji_hindistan). Aşağıdakiler bulunamadı, YAZILDI.
//
// ── KAYNAK DÜRÜSTLÜĞÜ ─────────────────────────────────────────────
// TDV bu coğrafyanın çoğunu kapsamaz; aranan TDV maddeleri (Yâkub Bey — yanlış
// kişiye düşer, Şeybânî Muhammed Han, Hokand) isabet vermedi → akademik kaynak
// (ORTAK §3). Kitap SAYFALARI açılmadı: `kaynak:` eser+yazar+yıl verir. Günler
// web özetlerinden alınmıştır (çoğu Vikipedi; Britannica/Iranica/Te Ara bazılarını destekledi) — akademik eserlerin sayfasında OKUNMADI; çelişen ya da
// tek kaynaklı gün `gun:` alanında AÇIKÇA yazılıdır.
// =====================================================================

window.KRONOLOJI_COK_ORTA_ASYA2 = [

{ t:"1370-01-01", b:"Firuz Şah Tuğluk, Malik Raja'ya Talner ve Karvand iktâlarını verdi — Fârûkîler'in Handeş'teki başlangıcı", tur:"idari", onem:2, dunya:1, kapsam:"ic",
  etiket:["idari","kurulus","konu-siyasi","hindistan"], yer_id:"", taraflar:["farukiler","delhi-sultanligi"],
  d:"Delhi Sultanı Firuz Şah Tuğluk, Tapti vadisindeki Talner ve Karvand bölgelerini Malik Raja'ya iktâ olarak verdi. Malik Raja bu topraklardan çevresini genişletti ve bölge sonradan Handeş adıyla anıldı. Verilişin kendisi bir vasallık ilişkisidir; bağımsızlık ayrı bir maddededir (1382).",
  kaynak:"Encyclopaedia Iranica, «Fārūqī Dynasty» (Yazar: Cambridge History of India / Ferishta'ya dayanır; madde sayfası bu oturumda açılmadı, web özeti okundu).",
  gun:"1370 (yıl; gün bulunamadı)",
  ic_not_d:"Künye `farukiler` f:1370-01-01 bu maddenin yılıdır AMA hükümdarlık 1382'de başlar — künye başlangıcı «vasal iktâ», «devlet» değil: KUNYE.md. Haritadaki Asîrgarh 1370-01-01 kırılması (Delhi→Fârûkîler) yıl temsilîdir." },

{ t:"1382-01-01", b:"Malik Raja bağımsız hükümdar oldu — Handeş (Fârûkî) Sultanlığı", tur:"kurulus", onem:3, dunya:1, kapsam:"dis",
  etiket:["kurulus","bolunme","konu-siyasi","hindistan"], yer_id:"", taraflar:["farukiler","delhi-sultanligi"],
  d:"Tuğluk merkezinin çözülmesi üzerine Malik Raja 1382'de Delhi'den bağımsız davranmaya başladı ve Handeş'te sultanlık kurdu; hanedan kendisini İkinci Halife Ömer'e (Fârûk) dayandırdığı için Fârûkî diye anıldı. Sultanlık başkentini Talner'den Burhânpûr'a taşıyacak ve 1601'de Ekber'e kadar ayakta kalacaktı.",
  kaynak:"Encyclopaedia Iranica, «Fārūqī Dynasty» (web özeti okundu; madde sayfası açılmadı) · Cambridge History of India, cilt 3 (1928) — sayfa verilmedi.",
  gun:"1382 (yıl; «1382'de bağımsız yönetmeye başladı» — gün bulunamadı)",
  ic_not_d:"Burhânpûr'un kuruluşu (haritada 1398-01-01, «—»→Fârûkî) YERLEŞİM KURULUŞUDUR (kur:1398); toprak devri değil, madde YAZILMADI. Kuruluş yılı 1398-1400 arası tartışmalı görünüyor — ölçülemedi." },

{ t:"1503-06-01", b:"Şeybânî Muhammed Han Aksı'da Moğul Mahmud Han'ı yendi — Fergana ve Taşkent Özbek eline geçti", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["savas","toprak-kazanc","konu-askeri","konu-siyasi","maveraunnehir"], yer_id:"Taşkent", taraflar:["buhara","mogulistan"],
  d:"Semerkant'ı 1501'de alan Şeybânî Muhammed Han, Moğulistan hanı Mahmud Han'ı Fergana'daki Aksı yakınında yenerek hem Fergana'yı hem Taşkent'i ele geçirdi. Böylece Aşağı Sirderya-Fergana hattı Moğul hanlarının elinden çıktı ve Şeybânîler Mâverâünnehir'in kuzey-doğusunda kesin üstünlük kurdular. Bâbür Fergana'dan sürülen bu dönemin mağdurlarındandır.",
  kaynak:"Britannica, «Muḥammad Shaybani» · Encyclopaedia of Islam², «Shībānids». Sayfa verilmedi (madde sayfaları bu oturumda açılmadı; web özeti okundu).",
  gun:"Haziran 1503 (web özeti (çoğunlukla Vikipedi); gün bulunamadı). Atlasın Taşkent 1503-01-01 kırılması yıl temsilîdir.",
  ic_not_d:"Haritadaki Taşkent 1503-01-01 (timurlu→buhara) kaydında ESKİ sahip `timurlu` — oysa Taşkent bu tarihte Moğul Mahmud Han'ındı (timurlu değil): harita eski sahibi yanlış gösteriyor; YERLESIM-ONERI.md'ye yazıldı." },

{ t:"1505-01-01", b:"Şeybânî Muhammed Han Harezm'i Timurlu valilerinden aldı", tur:"fetih", onem:4, dunya:2, kapsam:"dis",
  etiket:["fetih","toprak-kazanc","konu-askeri","konu-siyasi","harezm"], yer_id:"Köhne Ürgenç (Gürgenç)", taraflar:["buhara","timurlu"],
  d:"Şeybânî Muhammed Han, Timurlu Hüseyin Baykara'nın vasallarının elindeki Harezm bölgesini (Ürgenç, Hîve, Hazarasp ve çevresi) 1505'te aldı. Fetih, aynı yılların Semerkant-Buhara-Herat fetihleriyle birlikte Timurlu Devleti'nin sonunu getirdi (Herat 1507). Harezm'in Özbek hâkimiyeti kısa sürdü; 1510'da Şeybânî'nin ölümünden sonra bölge Yadigâroğulları'nın (Hîve Hanlığı) eline geçti.",
  kaynak:"Britannica, «Muḥammad Shaybani» · Encyclopaedia of Islam², «Shībānids». Sayfa verilmedi (web özeti okundu; madde sayfaları açılmadı).",
  gun:"1505 (yıl; gün bulunamadı)",
  ic_not_d:"Haritadaki Hazarasp · Hîve · Köhne Ürgenç · Küngrat 1502-01-01 (yil_temsili, timurlu→buhara) kırılması ÜÇ YIL ERKEN görünüyor (kaynak 1505); YERLESIM-ONERI.md. Mevcut «Yadigâroğulları Harzem'i fethetti 1512» maddesiyle çelişmez: Şeybânî hâkimiyeti 1505-1510, Hîve Hanlığı 1512. Hîve künyesinin f:1512 günü de KUNYE.md'de." },

{ t:"1506-01-01", b:"Şeybânî Muhammed Han Belh'i aldı", tur:"fetih", onem:3, dunya:1, kapsam:"dis",
  etiket:["fetih","toprak-kazanc","konu-askeri","konu-siyasi","horasan"], yer_id:"Belh", taraflar:["buhara","timurlu"],
  d:"Hüseyin Baykara'nın Mayıs 1506'daki ölümünden sonra Timurlu devleti oğulları arasında paylaşıldı ve Şeybânî Muhammed Han kuzeydeki Belh'i aldı. Bu, ertesi yıl Herat'ın düşmesini hazırladı. Belh, Amuderya'nın güneyindeki Horasan'ın kuzey kapısıdır.",
  kaynak:"Britannica, «Muḥammad Shaybani» · Encyclopaedia of Islam², «Shībānids». Sayfa verilmedi (web özeti okundu).",
  gun:"1506 (yıl; gün bulunamadı). Hüseyin Baykara'nın ölümü zaten kronoloji_timurlu.js'te 1506-05-04.",
  ic_not_d:"Haritadaki Belh 1506-01-01 (timurlu→buhara) yıl temsilîdir; 1506 içinde sıralama ölçülemedi." },

{ t:"1584-01-01", b:"II. Abdullah Han Bedahşan'ı Buhara Hanlığı'na kattı", tur:"fetih", onem:3, dunya:1, kapsam:"dis",
  etiket:["fetih","toprak-kazanc","konu-askeri","konu-siyasi","bedahsan"], yer_id:"Feyzâbâd (Bedahşan)", taraflar:["buhara"],
  d:"II. Abdullah Han, Şeybânî devletini Buhara merkezli olarak yeniden birleştirirken Amuderya'nın güney doğusundaki Bedahşan'ı da aldı; bölgenin eski Timurlu prensi Mirza Süleyman'ın çevresindeki direniş 1584-85 boyunca sürdü. Bedahşan'ın Şeybânî yönetimi kalıcı olmadı; 17. yüzyıl ortasında dağlık bölge yerel mirler eliyle Buhara'dan koptu.",
  kaynak:"Encyclopaedia of Islam², «ʿAbd Allāh Khān b. Iskandar» · Encyclopaedia Iranica, «Badakhshan». Sayfa verilmedi (web özeti okundu).",
  gun:"1584 (yıl; ay/gün bulunamadı)",
  ic_not_d:"«17. yüzyıl ortasında koptu» ayrıntısı hafızadan (haritadaki Feyzâbâd 1657-01-01 buhara→boşluk kırılması yıl temsilî); kaynaktan sınanmamıştır — ölçülemedi." },

{ t:"1816-01-01", b:"Hokand Hanı Ömer Türkistan şehrini Buhara'dan aldı — Hokand Sirderya boyuna yerleşti", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["toprak-kazanc","konu-askeri","konu-siyasi","sirderya"], yer_id:"Türkistan (Yesi)", taraflar:["hokand","buhara","kazak-hanligi"],
  d:"Âlim Han'ın (1800-09) Taşkent, Şımkent ve Sayram'ı alıp kalıcı kılamadığı Sirderya boyunu, Ömer Han (1809/10-22) yeniden ele geçirdi ve pekiştirdi; Türkistan şehri 1816'da Buhara Emirliği'nden alındı. Hokand bu kuşakta Kazak Orta Cüz'ün güney bozkırına kadar uzanan sınır kaleleri (Ak-Meçit gibi) kurdu ve en geniş sınırlarına doğru ilerledi.",
  kaynak:"Encyclopaedia Iranica, «Kokand Khanate» (Scott C. Levi & Timur K. Beisembiev) — web özeti okundu; madde sayfası bu oturumda açılmadı.",
  gun:"1816 (yıl; Türkistan şehrinin ilhakı). Şımkent · Sayram · Çimkent'in alınış/yeniden alınış tarihleri ayrı ve ölçülemedi. Atlasın 1815-01-01 kırılması yıl temsilîdir.",
  ic_not_d:"Haritadaki Ak-Meçit · Sayram · Taraz · Türkistan · Çimkent 1815-01-01 (kazak-hanligi→hokand) ve Balasagun · Issık Göl · Narın 1825-01-01 kırılmalarını bu madde YALNIZ Türkistan için kapatır; Kırgız bölgesi (Issık Göl · Narın, 1825) için kaynak bulunamadı — ölçülemedi." },

{ t:"1859-05-01", b:"Dost Muhammed Han Kunduz ve Bedahşan'ı Afgan idaresine kattı", tur:"fetih", onem:3, dunya:1, kapsam:"dis",
  etiket:["fetih","toprak-kazanc","konu-askeri","konu-siyasi","afganistan"], yer_id:"Feyzâbâd (Bedahşan)", taraflar:["afganistan","kunduz-hanligi"],
  d:"Kabil Emiri Dost Muhammed Han, Kandahar'ı (1855) aldıktan sonra Belh'i ve kuzey hanlıklarını Afgan yönetimine bağladı (Britannica bunu 1859'a koyar); Kunduz'un alınışıyla Bedahşan da tâbi kılındı. Bu, Afganistan'ın kuzeydoğusunda Pamir eteklerine kadar uzanan hâkimiyetin başlangıcıdır; Abdurrahman Han 1883'te bir adım daha ileri gidecekti.",
  kaynak:"Britannica, «Afghanistan — Dōst Moḥammad (1826–39; 1843–63)» · Ludwig W. Adamec, Historical Dictionary of Afghanistan (Scarecrow Press, 4. bs., 2012). Sayfa verilmedi (web özeti okundu).",
  gun:"Mayıs–Haziran 1859 (web özeti (çoğunlukla Vikipedi); gün bulunamadı). Atlasın Feyzâbâd 1859-01-01 kırılması yıl temsilîdir.",
  ic_not_d:"Belh'in Afgan hâkimiyetine geçişi (haritada 1841-01-01 buhara→afganistan) Britannica'da 1859 (kuzey hanlıkları), başka bir özette 1850 diye görünüyor; atlasın 1841 günü 9-18 YIL ERKEN olabilir. Kaynak metniyle sınanmadı: YERLESIM-ONERI.md." },

{ t:"1864-06-01", b:"Kuça'da Müslüman ayaklanması — Doğu Türkistan'da Qing yönetimi çökmeye başladı", tur:"isyan", onem:4, dunya:2, kapsam:"ic",
  etiket:["isyan","konu-askeri","konu-siyasi","dogu-turkistan"], yer_id:"Kuça (Kuqa)", taraflar:["qing-hanedani","kuca-hocalari"],
  d:"1862'de Gansu ve Shaanxi'de patlayan Hui (Dungan) isyanının etkisiyle Tarım havzasının kuzey kenarındaki Kuça'da Müslümanlar Qing garnizonuna karşı ayaklandı ve Reşidüddin Hoca'nın önderliğinde kendi idarelerini kurdu. Ayaklanma Aksu, Kaşgar ve Yarkent'e yayıldı; sonraki aylarda Kaşgar'a dışarıdan giren Yâkub Bey bu boşluğu dolduracaktı. Qing'in Altışehir üzerindeki 1759'dan beri süren egemenliği fiilen bitti.",
  kaynak:"Kim Hodong, Holy War in China: The Muslim Rebellion and State in Chinese Central Asia, 1864–1877 (Stanford UP, 2004) · James A. Millward, Beyond the Pass (Stanford UP, 1998). Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"Haziran 1864 (Kim 2004'e göre; gün doğrulanamadı). Atlasın haritadaki 1864-06-04 günü DAYANAK DEĞİLDİR.",
  ic_not_d:"Reşidüddin Hoca'nın Kuça rejimi için künye YOK: `kuca-hocalari` önerisi (1864-65) KUNYE.md'de. Haritadaki Aksu · Karaşar · Keriya · Manas · Uçturfan · Çarklık (qing→yakub-beg, 1864-06-04) kırılması bu rejimden geçiş olabilir; kim kime geçti ölçülemedi." },

{ t:"1865-01-01", b:"Yâkub Bey Hokand'dan Kaşgar'a girdi — Doğu Türkistan'da yeni iktidarın başlangıcı", tur:"kurulus", onem:4, dunya:2, kapsam:"dis",
  etiket:["kurulus","isyan","konu-askeri","konu-siyasi","dogu-turkistan"], yer_id:"Kaşgar", taraflar:["yakub-beg","hokand","qing-hanedani"],
  d:"Hokand'ın komutanlarından Yâkub Bey, Hoca ailesinden gelen Büzürg Han'ı öne sürerek Ocak 1865'te küçük bir kuvvetle Kaşgar'a girdi; Büzürg Han'ı bir kenara itip 1866 baharında Kaşgar'ın gerçek hükümdarı oldu. Sonraki on yılda Yarkent, Hoten, Aksu ve Turfan'ı alıp Doğu Türkistan'da (Yettişehir) İngiliz ve Osmanlı ile ilişki kuran bir emirlik kurdu.",
  kaynak:"Kim Hodong, Holy War in China: The Muslim Rebellion and State in Chinese Central Asia, 1864–1877 (Stanford UP, 2004) · Britannica, «Yakub Beg». Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"Ocak 1865 (web özeti (çoğunlukla Vikipedi); gün bulunamadı). Künye `yakub-beg`in f:1865-01-01 günü aynı yıl-ay ile uyumlu ama bir KAYNAK değildir.",
  ic_not_d:"«Osmanlı ile ilişki» cümlesi bu maddenin ilgi alanına girer (kapsam:dis); Osmanlı-Yâkub Bey ilişkisi (unvan · silâh · 1873) için TDV kaynağı bu oturumda BULUNAMADI (`yakub-bey` slug'ı Germiyanoğlu'na düşüyor, arama isabet vermedi) — öneri: TDV `cirağan-vakasi` (Kâşgar elçisi Yâkub Han) ve `dogu-turkistan` aranmalı." },

{ t:"1877-05-01", b:"Yâkub Bey Korla'da öldü — Kaşgar Emirliği dağıldı", tur:"olum", onem:4, dunya:2, kapsam:"ic",
  etiket:["olum","son","konu-siyasi","dogu-turkistan"], yer_id:"Kaşgar", taraflar:["yakub-beg","qing-hanedani"],
  d:"Zuo Zongtang'ın 1876'da Ürümçi'yi aldıktan sonra Turfan'a yönelmesiyle geri çekilen Yâkub Bey, Mayıs 1877'de Korla'da öldü; ölüm sebebi (hastalık, zehirlenme ya da intihar) kaynaklarda kesin değildir. Ölümü emirliğin ordusunu ve idaresini çözdü, Qing'in Kaşgar'a yürüyüşünü kolaylaştırdı.",
  kaynak:"Kim Hodong, Holy War in China (Stanford UP, 2004) · Britannica, «Yakub Beg». Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"Mayıs 1877 (ay). Gün kaynaklarda 16 Mayıs / 30 Mayıs diye ÇELİŞİYOR — ölçülemedi; `t` ayın 1'i, hassasiyet bu alandan okunur.",
  ic_not_d:"Haritadaki Manas 1876-08-18 ve Aksu · Karaşar · Uçturfan 1877-10-18 kırılmaları bu maddenin öncesi/sonrasıdır; Zuo'nun sefer safhaları (Ürümçi Ağustos 1876 · Turfan Nisan 1877) ayrı günlerdir." },

{ t:"1877-12-18", b:"Qing orduları Kaşgar'ı geri aldı — Doğu Türkistan yeniden Qing'in oldu", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"ic",
  etiket:["toprak-kazanc","son","konu-askeri","konu-siyasi","dogu-turkistan"], yer_id:"Kaşgar", taraflar:["qing-hanedani","yakub-beg"],
  d:"Zuo Zongtang'ın generali Liu Jintang komutasındaki Qing orduları Yâkub Bey'in ölümünün ardından Tarım havzasını hızla geri aldı; Kaşgar Aralık 1877'de düştü, Hoten Ocak 1878'de takip etti. Qing 1884'te bölgeyi Sinkiang (Xinjiang) adıyla eyalet yaptı. Kaşgar Emirliği'nin toprakları böylece tamamen Çin'e katıldı.",
  kaynak:"Kim Hodong, Holy War in China (Stanford UP, 2004) · Millward, Beyond the Pass (Stanford UP, 1998). Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"16–18 Aralık 1877 (web'de «18 Aralık 1877»; Kim 2004'ten doğrudan doğrulanmadı). Mevcut madde «Zuo Zongtang Doğu Türkistan'ı yeniden fethetti» 1878-03-16 günü künyenin bitiş günüdür, bir kaynak değildir.",
  ic_not_d:"Hoten'in düşüşü (Ocak 1878) haritadaki Taşkurgan 1878-01-01 ve Karaşar · Keriya kırılmalarıyla örtüşür; bu oturumda ayrı gün doğrulanmadı — ölçülemedi." },

{ t:"1883-01-01", b:"Abdurrahman Han Şugnan ve Roşan'ı ele geçirdi — Afgan hâkimiyeti Pamir'e uzandı", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["toprak-kazanc","konu-askeri","konu-siyasi","pamir","afganistan"], yer_id:"Horog (Khorog)", taraflar:["afganistan","buhara"],
  d:"Afgan Emiri Abdurrahman Han'ın kuvvetleri 1883'te Şugnan'ın son mîri Yusuf Ali Han'ı bölgeden çıkardı ve Şugnan ile komşu Roşan vadisini Kabil'e bağladı. Bu ilerleme Rusya'nın Pamir'e inmesiyle karşılaştı; iki büyük devlet 1895'te Pamir'i sınırlandırdı ve Afganlar Amuderya'nın kuzeyinde kalan Şugnan-Roşan'ı Buhara'ya bırakıp yalnız Vahan koridorunu tuttu. (1895 antlaşması ayrı madde: kronoloji_sinir_asya.js).",
  kaynak:"Garry J. Alder, British India's Northern Frontier, 1865–95 (Longmans, 1963) · Ludwig W. Adamec, Historical Dictionary of Afghanistan (Scarecrow, 4. bs., 2012). Sayfa verilmedi (web özeti okundu; kitaplar açılmadı).",
  gun:"1883 (yıl; web'de «1883'te son mîr Yusuf Ali Han çıkarıldı» — gün bulunamadı). Atlasın 1883-01-01 ve 1883-08-15 kırılmaları iki ayrı vadi grubudur; iki günün de kaynağı yoktur.",
  ic_not_d:"«1895'te Afganlar Buhara'ya bıraktı» cümlesi haritadaki 1895-03-11 (afganistan→buhara) kırılmasıyla uyumlu ama Alder'den sayfa doğrulanmadı. Kaynaktaki Şugnan mîri adı web özetinden." },

{ t:"1819-01-01", b:"Sih İmparatorluğu Dera Gazi Han'ı Durranîlerden aldı (Dera İsmail Han 1821)", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["toprak-kazanc","konu-askeri","konu-siyasi","pencap"], yer_id:"Dera Gazi Han", taraflar:["sih-imparatorlugu","afgan-durrani"],
  d:"Ranjit Singh Multan'ı 1818'de aldıktan sonra Derajat'a (Dera Gazi Han, Dera İsmail Han) yöneldi: Dera Gazi Han 1819'da Durrânî vasallarından alındı, Dera İsmail Han 1821'de. Mankera nevabı Hafız Han'ın direnişi 7 Aralık 1821 – 1 Ocak 1822 arası süren kuşatmayla kırıldı. Derajat, Sih devleti 1849'da İngiliz Hindistanı'na katılana kadar Lahor yönetiminde kaldı.",
  kaynak:"J. S. Grewal, The Sikhs of the Punjab (The New Cambridge History of India II.3, Cambridge UP, 1990). Sayfa verilmedi (bu oturumda açılmadı; web özeti okundu).",
  gun:"1819 (Dera Gazi Han); 1821 (Dera İsmail Han); Mankera kuşatması 7 Aralık 1821 – 1 Ocak 1822 (web özeti (çoğunlukla Vikipedi)). Gün bulunamadı.",
  ic_not_d:"Haritadaki Dera Gazi Han 1819-01-01 ve Dera İsmail Han 1821-01-01 kırılmalarını kapatır; iki yıl temsilîdir. Multan 1818 (haritada kapalı) bu maddeye dâhil değil." },

{ t:"1849-01-01", b:"Sambalpur «ölüm ilkesiyle» İngiliz Hindistanı'na katıldı", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","toprak-kazanc","konu-siyasi","hindistan"], yer_id:"Sambalpur", taraflar:["ingiliz-hindistani"],
  d:"Sambalpur Racası Narayan Singh'in erkek varis bırakmadan ölmesi üzerine Genel Vali Lord Dalhousie, «ölüm ilkesi»ni (doctrine of lapse) uygulayıp krallığı doğrudan Şirket idaresine kattı. Sambalpur, Satara'dan (1848) hemen sonra bu ilkeyle ilhak edilen devletlerdendir; Jhansi (1853), Nagpur (1854) ve Avad (1856) aynı çizgide gelecekti. Yerel direniş (Surendra Sai) uzun süre sürdü.",
  kaynak:"Barbara D. Metcalf & Thomas R. Metcalf, A Concise History of Modern India (Cambridge UP, 2. bs., 2006) · Britannica, «Doctrine of Lapse». Sayfa verilmedi (bu oturumda açılmadı; web özeti okundu).",
  gun:"1849 (yıl; Narayan Singh'in ölümü ve ilhak aynı yıl — gün bulunamadı)",
  ic_not_d:"Haritadaki Sambalpur 1849-01-01 (boşluk→İngiliz Hindistanı) kırılmasını kapatır. Sambalpur'un 1797 (boşluk→maratha) ve 1817 (maratha→boşluk) kırılmaları için kaynak bulunamadı — ölçülemedi (Nagpur Bhonsle idaresinin Sambalpur'a uzanışı kaynaklı sınanmadı)." },

{ t:"1853-12-11", b:"III. Raghuji Bhonsle varissiz öldü — Nagpur «ölüm ilkesiyle» İngiliz Hindistanı'na katıldı", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","toprak-kazanc","hanedan","konu-siyasi","hindistan"], yer_id:"", taraflar:["ingiliz-hindistani","nagpur-bhonsle"],
  d:"Marathaların Nagpur kolunun hükümdarı III. Raghuji 11 Aralık 1853'te erkek evlat ya da onaylanmış evlatlık bırakmadan öldü; Lord Dalhousie krallığı «ölüm ilkesi» gereği ilhak etti (biçimsel katılım 1854). Nagpur'la birlikte Orta Hindistan'daki Chhattisgarh (Raipur, Ratanpur) da doğrudan İngiliz idaresine girdi. Bu ilhak 1857 ayaklanmasının nedenleri arasında sayılır.",
  kaynak:"Barbara D. Metcalf & Thomas R. Metcalf, A Concise History of Modern India (Cambridge UP, 2. bs., 2006) · Britannica, «Doctrine of Lapse». Sayfa verilmedi (bu oturumda açılmadı; web özeti okundu).",
  gun:"11 Aralık 1853 = III. Raghuji'nin ölümü (web özeti (çoğunlukla Vikipedi)). İlhakın biçimsel günü ölçülemedi (kaynaklarda 1853/1854).",
  ic_not_d:"Nagpur Bhonsle Krallığı için künye YOK (`maratha` künyesi 1818-06-03'te bitiyor; Nagpur o tarihten sonra da İngiliz himayesinde krallık olarak sürdü): `nagpur-bhonsle` önerisi KUNYE.md'de. Haritadaki Raipur · Ratanpur 1853-01-01 (boşluk→İngiliz) bu madde ile eşleşir; harita günü 11 ay ERKEN görünüyor (madde Aralık 1853): YERLESIM-ONERI.md." }

];
