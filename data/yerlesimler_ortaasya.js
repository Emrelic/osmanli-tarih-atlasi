// ============================================================================
// YERLEŞİM VERİ SETİ — HAZAR DOĞUSU, HAREZM ve KUZEY HORASAN  (Oturum 11)
// ============================================================================
// data/yerlesimler.js ile AYNI ŞEMA. Ayrı dosya olmasının tek sebebi oturumlar
// arası dosya çakışmasını önlemektir; entegrasyon oturumu YERLESIMLER dizisiyle
// birleştirecektir. Alan sözlüğü: VERI-YAPISI.md.
//
// ---------------------------------------------------------------------------
// BU DOSYANIN SEBEBİ — ölçülmüş, görünür bir hata
// ---------------------------------------------------------------------------
// Kullanıcı şunu gördü: "Osmanlı Bakü'yü ele geçirince Hazar'ın doğusu da
// Osmanlı'ya katılmış gibi renkleniyor." Sebep MIMARI.md §2'deki emilme:
// Hazar'ın DOĞU kıyısında hiç yerleşim noktası yoktu, en yakın nokta denizin
// öbür yakasındaki Bakü (266 km) idi. Voronoi noktalar üzerinden hesaplanıp
// SONRA karaya kırpıldığı için Bakü'nün hücresi denizi aşıp öbür kıyıda
// yeniden ortaya çıkıyordu; Osmanlı Şirvan'ı aldığında (1578-1607) Türkmen
// sahili de Osmanlı boyanıyordu.
//
// Ölçüm (bu dosyadan ÖNCE → SONRA, en yakın yerleşime uzaklık):
//   Türkmenbaşı .......... Bakü 266 km  →  kendi noktası 0 km
//   Hazar doğu kıyısı ort. Bakü 330 km  →  Garabogaz  ~90 km
//   Mangışlak ............ Derbend 328 km → kendi noktası 0 km
//   Uzboy ................ Karakum 214 km → kendi noktası 0 km
//   Hîve ................. Karakum 262 km → kendi noktası 0 km
//   Merv ................. Meşhed 245 km → kendi noktası 0 km
//
// ---------------------------------------------------------------------------
// ⚠️ 62° DOĞU BOYLAMI SINIRI
// ---------------------------------------------------------------------------
// uret_petek.py penceresi box(-12, 1.5, 62, 62). 62°D'nin doğusuna nokta
// KONMADI: Buhara (64.4°D), Semerkant (66.9°D), Çârcûy (63.6°D), Kerki
// (65.2°D), Hokand (70.9°D) bu yüzden YOK. Kutu açılmadan eklenirlerse
// çizilmezler.
// Tek sınır vakası MERV: ortaçağ Merv'i (Sultan Kale) 37.662°K / 62.192°D'de,
// yani kutunun 0.19° DIŞINDA. Nokta, vahanın batı ucuna — bugünkü Mari
// şehrine (37.594 / 61.833) — konuldu; ortaçağ mevkiine uzaklığı ~32 km.
// Kutu doğuya açıldığında bu nokta 37.662 / 62.192'ye TAŞINMALIDIR.
//
// ---------------------------------------------------------------------------
// ⚠️ HENÜZ TANIMSIZ DEVLET KİMLİKLERİ — dört tane
// ---------------------------------------------------------------------------
// Görev tanımı gereği eksik devletler arac/renkler.py'ye EKLENMEDİ. Aşağıdaki
// dört kimlik BOYALAR sözlüğünde YOKTUR; üretim "UYARI boya: ... bilinmeyen
// devlet kimliği" satırı basar ve o pencereyi BOYAMAZ (uret_petek.py:174).
// Yani harita bugün o dönemlerde BOŞ görünür — görev tanımındaki "boş bırak"
// talimatının sonucuyla birebir aynıdır:
//
//     cagatay   Çağatay Hanlığı        (1227-1370)   TDV: cagatay-hanligi
//     hive      Hîve Hanlığı           (1512-1920)   TDV: hive-hanligi
//     buhara    Buhara Hanlığı         (1500-1920)   TDV: buhara-hanligi
//     turkmen   Türkmen boyları        (Yomut/Teke)  TDV: turkmenler
//
// Kimlik dizgisi yine de YAZILDI, çünkü:
//   • Görsel sonuç "boş bırakmak" ile aynıdır (boyanmaz),
//   • ama Değişmez 1 (sahipsizlik yok) TEMİZ kalır — boş bırakılsaydı 13
//     yerleşim yüzlerce yıl sahipsiz görünecek ve gerçek delikleri gizleyecekti,
//   • ve renk eklendiği anda veri kendiliğinden doğru boyanır; kimse bu
//     tarihleri yeniden araştırmak zorunda kalmaz.
// Ayrıntılı kimlik önerisi (tam ad, aralık, merkez, TDV maddesi):
// oturumlar/OTURUM-11-ILERLEME.md.
//
// TANIMLI kimliklerden kullanılanlar: ilhanli · altinorda · timurlu · safevi ·
// iran · rusya.
// "iran" burada Oturum 4'ün (yerlesimler_iran.js) kurduğu geleneğe uyar:
// İlhanlı sonrası Kertler/Serbedârîler, 1507-1510 Şeybânî Özbek işgali ve
// 1736 sonrası Afşar-Zend-Kaçar hanedanları ayrı kimlik almadığı için genel
// "iran" ile boyanır. Komşu Nîşâbur, Tûs, Serahs, Kelât-ı Nâdirî kayıtları
// birebir bu zinciri taşıyor; bu dosya onlarla hizalıdır.
//
// ---------------------------------------------------------------------------
// KAYNAKLAR — hepsi TDV, slug'lar <title> ile doğrulandı
// ---------------------------------------------------------------------------
//   harizm · gurgenc · urgenc(→gurgenc) · hive-hanligi · merv · mangislak ·
//   cagatay-hanligi · buhara-hanligi · turkmenler · turkmenistan · turkistan
// Dayanılan cümleler:
//   HÂRİZM: "Kuzey ve Batı Hârizm Cuci ulusuna, Kâs ve Hîve Çağatay ulusuna
//     bırakıldı" (1256 sonrası) — bu dosyada kuzey Harezm altinorda, güney
//     Harezm cagatay yazılmasının tek sebebi budur.
//   HÂRİZM: Timur 1379'da bölgeyi kesin olarak aldı; 1388'de Ürgenç yıkıldı.
//   HÂRİZM: "Şeybânî Han 1502'de Hârizm'i işgal edip..." → 1502.
//   HÎVE HANLIĞI: kuruluş 1512 (İlbars Han); Nâdir Şah 1740; 29 Mayıs 1873
//     Rus vasallığı; 2 Şubat 1920 son hanın çekilmesi, 26 Nisan 1920 Hârizm
//     Halk Cumhuriyeti.
//   MERV: 1221 Tuluy yıkımı; 1410 Şâhruh bendi; 1510 Şah İsmâil sonrası
//     Safevî; "XVIII. yüzyılda Buhara Emîri Murad Han'ın Murgāb Bendi'ni
//     yıkıp halkı sürgüne yollaması"; 1884 Rus işgali.
//   MANGIŞLAK: XIV. yy ortasında Altın Orda'ya katıldı (Balhan bölgesiyle
//     birlikte); XVI. yy başında Hîve Hanlığı'na girdi, "yaklaşık bir asır
//     sonra" Türkmen boyları göreli bağımsızlığını geri kazandı; 1840'a
//     kadar Kazak Bayûlı/Aday boyları yerleşti; 1881'de Kafkasya idarî
//     bölgesine bağlandı.
//   TÜRKMENİSTAN: Türkmen boyları "yaklaşık 1860-1884" arasında fiilî
//     bağımsızlık kazandı; 1869 Krasnovodsk; 24 Ocak 1881 Göktepe;
//     30 Ocak 1881 Aşkabad; 1884 Merv.
//
// ---------------------------------------------------------------------------
// ⚠️ UYDURMA KESİNLİK YOK — yıl başına yaslanan tarihler
// ---------------------------------------------------------------------------
// Aşağıdaki kırılmalarda TDV yıl veriyor, gün vermiyor; CLAUDE.md §4 gereği
// YYYY-01-01 yazıldı ve gerekçesi kaydın yorumundadır:
//   1502-01-01  Şeybânî Han'ın Harezm'i işgali
//   1512-01-01  Hîve Hanlığı'nın kuruluşu
//   1600-01-01  Mangışlak/Balhan'da Türkmen boylarının Hîve'den kopuşu
//               ("XVI. yy başı + yaklaşık bir asır" — yüzyıl başına yaslandı)
//   1740-01-01  Nâdir Şah'ın Hîve seferi
//   1785-01-01  Buhara'da Mangıt hanedanının başlangıcı (Emîr Murad Han)
//   1860-01-01  Türkmen boylarının fiilî bağımsızlığının başlangıcı
//   1869-01-01  Krasnovodsk'un kurulması ve Hazar doğu kıyısının ilhakı
//   1881-01-01  Mangışlak'ın Kafkasya idarî bölgesine bağlanması
//   1884-01-01  Merv'in Rusya'ya geçmesi
// Gün verilen tek kırılmalar: 1881-01-30 (Aşkabad), 1747-06-20 (Nâdir Şah'ın
// öldürülmesi), 1920-04-26 (Hârizm Halk Cumhuriyeti) ve mevcut yerlesimler.js
// zincirinden aynen alınan 1335-12-01, 1507-05-24, 1510-12-02, 1736-03-08.
//
// ---------------------------------------------------------------------------
// ⚠️ kur: ve bit: ALANLARI
// ---------------------------------------------------------------------------
// Motor ikisini de OKUMUYOR (MIMARI.md §3.1, denetim raporunda B-5); yalnız
// denetim betikleri kur:'u okuyor. Yine de yazıldılar — zaman dilimli Voronoi
// yapıldığında veri hazır olacak. Bugünkü davranış:
//   • Krasnovodsk (kur 1869) peteği 1281'den beri var ama 1869 öncesinde
//     SAHİPSİZ, yani BOŞ görünüyor. Bu, olması gereken görüntüdür: 1869'dan
//     önce orada şehir yoktu, çevresi Türkmen boylarınındı ve o kimlik henüz
//     boyanmıyor.
//   • Köhne Ürgenç (bit 1646) peteği 1646'dan sonra da duruyor; sahiplik
//     zinciri 1923'e kadar TAM bırakıldı ki Değişmez 1 ihlal olmasın
//     (yerlesimler_iran.js'in Oturum 4'te kurduğu desen).
//
// ---------------------------------------------------------------------------
// ⚠️ KASTEN SAHİPSİZ 3 DOLGU NOKTASI
// ---------------------------------------------------------------------------
// Uzboy, Üstyurt platosu (batı) ve Üstyurt platosu (doğu) hiçbir tarihte
// sahipli DEĞİLDİR — mevcut "Karakum" dolgu noktasıyla aynı desen. Susuz çöl
// ve plato; MIMARI.md §6'daki bos:"devletsiz" durumudur. Bunlar olmadan
// Mangışlak ile Küngrat arası 474 km açık kalıyor ve boşluk komşu peteklere
// emiliyordu.
// ⚠️ BİRLEŞTİRMEDE: arac/denetle.py'deki BEKLENEN_SAHIPSIZ 32'den 35'e
// çıkarılmalıdır. Başka hiçbir kayıt sahipsiz değildir.
//
// ---------------------------------------------------------------------------
// ⚠️ KIYI ve MASKE KOORDİNATLARI
// ---------------------------------------------------------------------------
// Natural Earth 10 m kara maskesi bu kıyılarda kaba. Ölçüldü:
//   • Çeleken'in gerçek merkezi (39.486 / 53.124) maskede DENİZDE kalıyor;
//     nokta 39.460 / 53.140'a çekildi (~3 km). Şehir merkezi değildir.
//   • Kara Boğaz Gölü maskede su; 41.30/54.00 gibi "iç" görünen koordinatlar
//     aslında lagünün içine düşüyor. Garabogaz noktası lagünün BATI kordonuna
//     (Bekdaş, 41.562 / 52.601) konuldu — maskede karadır.
// Diğer 14 noktanın hepsi maskede karadadır, hiçbiri 117 gölün içinde değildir.
//
// ---------------------------------------------------------------------------
// DEĞİŞMEZ 2 (sessiz toprak değişimi yok) — bu dosya tetiklemez
// ---------------------------------------------------------------------------
// Denetim yalnız d: ve v: dönemlerinin başını/sonunu sorgular (arac/denetle.py,
// degismez2). Bu dosyada hiçbir kaydın d: veya v: dönemi YOKTUR — hepsi
// yabancı sahiplik (s:). Dolayısıyla tek bir yeni kronoloji maddesi gerekmez.
//
// ---------------------------------------------------------------------------
// EKLENMEYENLER ve GEREKÇELERİ
// ---------------------------------------------------------------------------
//   Kât (Beruni, 41.693/60.752) — Yeni Ürgenç'e 18.7 km; bütün tarih boyunca
//     onunla aynı sahibi taşıyor, ayrı petek kazandırmıyor. Kutu doğuya
//     açıldığında eklenebilir.
//   Aşkabad (37.95/58.38) — Nesâ'ya 17 km; 1881'de Rus garnizon şehri olarak
//     kuruldu, öncesi köydür. Nesâ'nın peteği aynı vahayı temsil ediyor.
//   Guryev/Atyrau (47.11/51.92) — Hazar'ın KUZEYdoğu köşesi; bildirilen
//     hatanın dışında ve Astrahan'a 300 km. Görev tanımının kapsamında değil,
//     ilerleme raporunda öneri olarak bırakıldı.
//   Buhara, Semerkant, Çârcûy, Kerki, Hokand, Taşkent — 62°D'nin doğusunda.
// ============================================================================

window.YERLESIMLER_ORTAASYA = [

// ===== 1. HAZAR DOĞU KIYISI (51-56°D) — bildirilen hatayı doğrudan kapatan beş nokta =====

// Krasnovodsk 1869'da Albay Stoletov'un çıkarmasıyla kuruldu; öncesinde
// Kızılsu koyunda şehir yoktur (TDV TÜRKMENİSTAN: "1869: Krasnovodsk
// alındı, resmî ilhak başladı"). kur: bu yüzden yazıldı; 1869 öncesi boşluk
// KASITLIDIR — o kıyının o tarihteki sahibi komşu Çeleken noktası taşıyor.
{ ad:"Krasnovodsk (Türkmenbaşı)", tur:"liman", lat:40.0220, lon:52.9600, g:1, k:0, d:[],
  kur:"1869-01-01",
  s:[{f:"1869-01-01", t:"1923-10-29", d:"rusya"}] },

// Çeleken yarımadası ve Balhan sahili. TDV MANGIŞLAK, Balhan bölgesini
// Mangışlak ve kuzey Harezm ile aynı siyasî zincire koyar; zincir birebir
// Mangışlak kaydındakidir, tek fark Rus ilhakının 1869'da (Mangışlak'ta
// 1881'de) gerçekleşmesidir. Koordinat maske yüzünden ~3 km kaydırıldı.
{ ad:"Çeleken", tur:"bolge", lat:39.4600, lon:53.1400, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1502-01-01", d:"altinorda"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1600-01-01", d:"hive"},
     {f:"1600-01-01", t:"1869-01-01", d:"turkmen"},
     {f:"1869-01-01", t:"1923-10-29", d:"rusya"}] },

// Kara Boğaz'ın batı kordonu (Bekdaş). Hazar'ın doğu kıyısının 41-42° kuşağı
// Krasnovodsk'a 175 km, Mangışlak'a 380 km — bu nokta olmadan kıyı ortası
// yine karşı yakadan emiliyordu.
{ ad:"Garabogaz (Bekdaş)", tur:"bolge", lat:41.5619, lon:52.6014, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1502-01-01", d:"altinorda"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1600-01-01", d:"hive"},
     {f:"1600-01-01", t:"1869-01-01", d:"turkmen"},
     {f:"1869-01-01", t:"1923-10-29", d:"rusya"}] },

// TDV MANGIŞLAK: XIV. yy ortasında Altın Orda'ya katıldı; XVI. yy başında
// Hîve Hanlığı'na girdi; "yaklaşık bir asır sonra" Türkmen boyları göreli
// bağımsızlığını geri kazandı; XVII. yy'da Kalmuk akınları, 1840'a kadar
// Kazak Bayûlı ve Aday boylarının yerleşmesi; 1881'de Kafkasya idarî
// bölgesine bağlandı. 1840-1881 arası nüfus Kazak'tır ama ayrı bir devlet
// kurulmadığı için pencere "turkmen" (boy düzeni) altında bırakıldı.
// Koordinat: Tüp-Karagan burnu, Fort Şevçenko (tarihî demirleme yeri).
{ ad:"Mangışlak", tur:"bolge", lat:44.5100, lon:50.2670, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1502-01-01", d:"altinorda"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1600-01-01", d:"hive"},
     {f:"1600-01-01", t:"1881-01-01", d:"turkmen"},
     {f:"1881-01-01", t:"1923-10-29", d:"rusya"}] },

// Meşhed-i Misriyân ovası — ortaçağ Dihistan'ı. Şehir Moğol istilâsından
// sonra toparlanamadı; nokta ŞEHİR değil OVA olarak konuldu (tur:"bolge"),
// çünkü hangi yüzyılda büsbütün terk edildiği TDV'de yazılı değil ve uydurma
// bir bit: tarihi yazmaktan kaçınıldı. Zincir, güney komşusu Esterâbâd
// (Gürgân) ile hizalıdır; ayrıldığı tek yer 1860 sonrasıdır: Etrek'in
// KUZEYİ 1881 Ahal düzenlemesiyle Rus tarafında kaldı, Esterâbâd İran'da.
// Not: Esterâbâd'ın 1723-1734 Rus penceresi (Petro'nun Hazar seferi)
// buraya UYGULANMADI — 1723 antlaşması Gîlân, Mâzenderan ve Esterâbâd'ı
// kapsar, Etrek kuzeyindeki Türkmen bozkırını değil.
{ ad:"Dihistan ovası (Meşhed-i Misriyân)", tur:"bolge", lat:38.1667, lon:54.6333, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"},
     {f:"1335-12-01", t:"1381-01-01", d:"iran"},
     {f:"1381-01-01", t:"1507-05-24", d:"timurlu"},
     {f:"1507-05-24", t:"1510-12-02", d:"iran"},
     {f:"1510-12-02", t:"1736-03-08", d:"safevi"},
     {f:"1736-03-08", t:"1860-01-01", d:"iran"},
     {f:"1860-01-01", t:"1881-01-30", d:"turkmen"},
     {f:"1881-01-30", t:"1923-10-29", d:"rusya"}] },

// ===== 2. ÇÖL DOLGULARI — kasten sahipsiz, mevcut "Karakum" ile aynı desen =====

// Uzboy, Amuderya'nın Hazar'a akan kurumuş eski yatağı. 1576'da Amuderya
// mecrasını değiştirip Aral'a döküldü (TDV HÂRİZM); yatak bütünüyle çöl.
// Susuz, devletsiz. Krasnovodsk'a 216 km, Karakum'a 261 km — ikisinin
// arasındaki 475 km'lik açığı kapatır.
{ ad:"Uzboy", tur:"bolge", lat:39.9000, lon:55.5000, g:0, k:0, d:[] },

// Üstyurt, Hazar ile Aral arasındaki susuz kireçtaşı platosu. Yerleşim yok;
// Türkmen, Kazak ve Karakalpak boylarının geçiş güzergâhı. Hîve'nin iddiası
// vardı ama fiilî idare kurulmadığı için sahip yazılmadı (MIMARI.md §6:
// "burada kimse yoktu" ile "burasını bilmiyoruz" farklı iddialardır — bu
// devletsizliktir). İki nokta gerekti: Mangışlak ile Küngrat arası 474 km.
{ ad:"Üstyurt platosu (batı)", tur:"bolge", lat:43.8000, lon:53.5000, g:0, k:0, d:[] },
{ ad:"Üstyurt platosu (doğu)", tur:"bolge", lat:43.5000, lon:56.5000, g:0, k:0, d:[] },

// ===== 3. HAREZM (58-62°D) =====

// TDV HÂRİZM: 1256'dan sonra "Kâs ve Hîve Çağatay ulusuna bırakıldı" —
// GÜNEY Harezm'in 1281'deki sahibi Çağatay Hanlığı'dır, Altın Orda değil.
// Timur bölgeyi 1379'da kesin olarak aldı. Şeybânî Han 1502'de işgal etti.
// İlbars Han 1512'de Hîve Hanlığı'nı kurdu. Nâdir Şah 1740'ta Hîve'yi topa
// tuttu ve İlbars Han'ı idam ettirdi; hanlık, Nâdir'in 20 Haziran 1747'de
// öldürülmesine kadar Afşar hâkimiyetinde kaldı.
// ⚠️ 29 Mayıs 1873'te hanlık Rus vasalı oldu ama HANEDAN ve idare yerinde
// kaldı; bu yüzden 1873'te kimlik DEĞİŞTİRİLMEDİ. Gerçek kopuş, son han
// Seyyid Abdullah'ın 2 Şubat 1920'de çekilmesi ve 26 Nisan 1920'de Hârizm
// Halk Cumhuriyeti'nin ilânıdır.
{ ad:"Hîve", tur:"sehir", lat:41.3783, lon:60.3639, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1379-01-01", d:"cagatay"},
     {f:"1379-01-01", t:"1502-01-01", d:"timurlu"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1740-01-01", d:"hive"},
     {f:"1740-01-01", t:"1747-06-20", d:"iran"},
     {f:"1747-06-20", t:"1920-04-26", d:"hive"},
     {f:"1920-04-26", t:"1923-10-29", d:"rusya"}] },

// Hazârasp, Hîve'nin 55 km doğusunda, Amuderya'nın sol kıyısındaki eski
// kale. Güney Harezm'dedir, zinciri Hîve ile aynıdır.
// ⚠️ TDV'de "Hazarasp" başlıklı madde YOKTUR (arama sıfır sonuç verdi);
// zincir, HÂRİZM maddesinin bölge tarihinden türetilmiştir.
{ ad:"Hazârasp", tur:"kale", lat:41.3200, lon:61.0700, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1379-01-01", d:"cagatay"},
     {f:"1379-01-01", t:"1502-01-01", d:"timurlu"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1740-01-01", d:"hive"},
     {f:"1740-01-01", t:"1747-06-20", d:"iran"},
     {f:"1747-06-20", t:"1920-04-26", d:"hive"},
     {f:"1920-04-26", t:"1923-10-29", d:"rusya"}] },

// Köhne Ürgenç = ortaçağ Gürgenç'i, Harezm'in idarî ve iktisadî merkezi.
// KUZEY Harezm'dedir; TDV HÂRİZM'e göre Cuci ulusunda (Altın Orda) kaldı —
// 55 km güneydeki Hîve'den AYRI bir zincirle başlaması bunun sonucudur.
// Moğollar 1221'de yıktı, şehir Ceyhun'un başka bir kolunda yeniden kuruldu.
// Timur 1388'de ahaliyi Semerkant'a sürdü ve yerine arpa ektirdi; Timurlular
// (Şâhruh) yeniden imar etti. Amuderya 1576'da mecrasını değiştirince şehir
// susuz kaldı; TDV GÜRGENÇ: "1645'ten sonra Hîve'nin kuzeydoğusunda" Yeni
// Ürgenç kuruldu ve eski şehir terk edildi.
// ⚠️ bit: yazıldı ama sahiplik zinciri 1923'e kadar TAM bırakıldı — motor
// bit:'i okumadığı için kesilseydi Değişmez 1 ihlal olurdu.
{ ad:"Köhne Ürgenç (Gürgenç)", tur:"sehir", lat:42.3417, lon:59.1500, g:1, k:0, d:[],
  bit:"1646-01-01",
  s:[{f:"1281-01-01", t:"1379-01-01", d:"altinorda"},
     {f:"1379-01-01", t:"1502-01-01", d:"timurlu"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1740-01-01", d:"hive"},
     {f:"1740-01-01", t:"1747-06-20", d:"iran"},
     {f:"1747-06-20", t:"1920-04-26", d:"hive"},
     {f:"1920-04-26", t:"1923-10-29", d:"rusya"}] },

// Yeni Ürgenç — TDV GÜRGENÇ: "1645'ten sonra" kuruldu. Bugünkü Özbekistan'ın
// Ürgenç şehri. Köhne Ürgenç'ten 100 km güneydoğuda, Hîve'ye 29.5 km.
// Ayrı kayıt olmasının sebebi zaman boyutudur: kur:/bit: okunur hâle
// geldiğinde 1646'da sahneye çıkması, Köhne Ürgenç'in aynı gün sahneden
// çekilmesi gerekir. Bugün ikisi de petek taşıyor, sahipleri aynı olduğu
// için haritada fark görünmez.
{ ad:"Yeni Ürgenç", tur:"sehir", lat:41.5500, lon:60.6333, g:0, k:0, d:[],
  kur:"1646-01-01",
  s:[{f:"1646-01-01", t:"1740-01-01", d:"hive"},
     {f:"1740-01-01", t:"1747-06-20", d:"iran"},
     {f:"1747-06-20", t:"1920-04-26", d:"hive"},
     {f:"1920-04-26", t:"1923-10-29", d:"rusya"}] },

// Küngrat, Amuderya deltasında, Aral'ın güney kıyısında. Kuzey Harezm
// zinciri (Köhne Ürgenç ile aynı). Aral'ın güney kıyısı bu nokta olmadan
// Karakum dolgusuna 399 km uzaktaydı.
{ ad:"Küngrat", tur:"sehir", lat:43.0833, lon:58.8333, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1379-01-01", d:"altinorda"},
     {f:"1379-01-01", t:"1502-01-01", d:"timurlu"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1740-01-01", d:"hive"},
     {f:"1740-01-01", t:"1747-06-20", d:"iran"},
     {f:"1747-06-20", t:"1920-04-26", d:"hive"},
     {f:"1920-04-26", t:"1923-10-29", d:"rusya"}] },

// ===== 4. KUZEY HORASAN — Kopet Dağ'ın kuzey eteği (58-62°D) =====

// Nesâ, Ahal vahasının ortaçağ merkezi; bugünkü Aşkabad'ın 17 km batısı.
// 1736'ya kadarki zincir komşu Kûçân, Kelât-ı Nâdirî ve Serahs kayıtlarıyla
// BİREBİR aynıdır (yerlesimler.js). Ayrıldığı yer 1860 sonrasıdır:
// TDV TÜRKMENİSTAN, Türkmen boylarının "yaklaşık 1860-1884" arasında fiilî
// bağımsızlık kazandığını, Aşkabad'ın 30 Ocak 1881'de işgal edildiğini yazar.
// ⚠️ TDV'de "Nesâ" başlıklı şehir maddesi YOKTUR; zincir TÜRKMENİSTAN ve
// komşu yerleşim kayıtlarından türetilmiştir.
{ ad:"Nesâ", tur:"sehir", lat:37.9667, lon:58.1833, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"},
     {f:"1335-12-01", t:"1381-01-01", d:"iran"},
     {f:"1381-01-01", t:"1507-05-24", d:"timurlu"},
     {f:"1507-05-24", t:"1510-12-02", d:"iran"},
     {f:"1510-12-02", t:"1736-03-08", d:"safevi"},
     {f:"1736-03-08", t:"1860-01-01", d:"iran"},
     {f:"1860-01-01", t:"1881-01-30", d:"turkmen"},
     {f:"1881-01-30", t:"1923-10-29", d:"rusya"}] },

// Ebîverd, Ahal vahasının doğu ucu (bugünkü Kâhka yakını). Nesâ ile Serahs
// arasındaki 210 km'lik açığı kapatır; zinciri Nesâ ile aynıdır.
{ ad:"Ebîverd", tur:"sehir", lat:37.9000, lon:59.6167, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"},
     {f:"1335-12-01", t:"1381-01-01", d:"iran"},
     {f:"1381-01-01", t:"1507-05-24", d:"timurlu"},
     {f:"1507-05-24", t:"1510-12-02", d:"iran"},
     {f:"1510-12-02", t:"1736-03-08", d:"safevi"},
     {f:"1736-03-08", t:"1860-01-01", d:"iran"},
     {f:"1860-01-01", t:"1881-01-30", d:"turkmen"},
     {f:"1881-01-30", t:"1923-10-29", d:"rusya"}] },

// Merv. TDV MERV: Tuluy 1221'de yıktı; Hülâgû'dan sonra İlhanlı toprağı;
// Şâhruh 812/1410'da yeni bir bent yaptırıp sulama kanallarını açtırdı;
// Şah İsmâil'in 916/1510'da Şeybânî Han'ı yenmesinden sonra Safevî; "XII.
// (XVIII.) yüzyılda Buhara Emîri Murad Han'ın Murgāb Bendi'ni yıkıp halkı
// sürgüne yollaması yüzünden canlılığını tamamen kaybetti"; 1884'te Ruslar
// aldı.
// ⚠️ TDV Buhara yıkımına YIL VERMİYOR. 1785 uydurulmadı: TDV BUHARA HANLIĞI
// Mangıt hanedanının 1785'te başladığını yazar, Murad Han da ilk Mangıt
// emîridir — pencere hanedanın başına yaslandı, gün yazılmadı.
// ⚠️ KOORDİNAT: ortaçağ Merv'i (Sultan Kale) 37.662/62.192'de, kutunun
// 0.19° dışında. Nokta vahanın batı ucuna (Mari) konuldu; kutu açılınca
// 37.662/62.192'ye taşınmalıdır.
{ ad:"Merv (Mari)", tur:"sehir", lat:37.5936, lon:61.8333, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"},
     {f:"1335-12-01", t:"1381-01-01", d:"iran"},
     {f:"1381-01-01", t:"1507-05-24", d:"timurlu"},
     {f:"1507-05-24", t:"1510-12-02", d:"iran"},
     {f:"1510-12-02", t:"1736-03-08", d:"safevi"},
     {f:"1736-03-08", t:"1785-01-01", d:"iran"},
     {f:"1785-01-01", t:"1860-01-01", d:"buhara"},
     {f:"1860-01-01", t:"1884-01-01", d:"turkmen"},
     {f:"1884-01-01", t:"1923-10-29", d:"rusya"}] },

];
