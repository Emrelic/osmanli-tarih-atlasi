// ============================================================================
// YERLEŞİM VERİ SETİ — HİNDİSTAN, ÇİN, JAPONYA, KORE ve GÜNEYDOĞU ASYA
// (Oturum 13)
// ============================================================================
// data/yerlesimler.js ile AYNI ŞEMA. Ayrı dosya olmasının tek sebebi oturumlar
// arası dosya çakışmasını önlemektir; entegrasyon oturumu YERLESIMLER dizisiyle
// birleştirecektir. Alan sözlüğü: VERI-YAPISI.md.
//
// ---------------------------------------------------------------------------
// ⚠️ BU DOSYA BUGÜN HARİTADA GÖRÜNMEZ — bilinçli bir veri hazırlığıdır
// ---------------------------------------------------------------------------
// arac/uret_petek.py penceresi box(-12, 1.5, 62, 62). DOĞU SINIRI 62°D.
// Bu dosyadaki 344 noktanın TAMAMI 62°D'nin doğusundadır (en batıdaki nokta
// Kandehar 65.710°D, en doğudaki Sapporo 141.354°D). Yani hiçbiri bugün
// çizilmez.
//
// Bu bir hata değil, CLAUDE.md §6'daki zorunlu sıradır: kutu ancak aradaki
// coğrafyada nokta yoğunluğu sağlandıktan sonra doğuya açılabilir. Erken
// açılırsa mevcut peteklerin kenardakileri boş coğrafyaya yayılır (MIMARI.md
// §2 — "noktası olmayan bölge en yakın peteğe emilir").
//
// Kutu doğuya açıldığında ARADAKİ BOŞLUK da doldurulmuş olmalıdır:
// 62-65°D arası (Herat, Sîstan, Belûcistan) bu dosyada YOKTUR ve başka bir
// oturumun işidir. Ayrıntı: OTURUM-13-ILERLEME.md.
//
// ---------------------------------------------------------------------------
// ⚠️ DEVLET KİMLİKLERİ — bu dosyadaki kimliklerin ÇOĞU renkler.py'de YOK
// ---------------------------------------------------------------------------
// Görev tanımı gereği bu dosya arac/renkler.py'ye YAZMAZ, yalnız bildirir.
// Kullanılan 147 kimliğin dağılımı (ölçüldü, tahmin değil):
//   • 12'si renkler.py'de TANIMLI ve doğrudan kullanıldı:
//       ingiltere · fransa · portekiz · ispanya · hollanda · danimarka ·
//       almanya · rusya · timurlu · cagatay · safevi · iran
//   • 37'si data/devletler.js'te (213 kayıtlık dünya dizini) VAR, renkler.py'de
//       YOK. Görev tanımının "Kolaylık" maddesi gereği dizin id'leri birebir
//       kullanıldı; böylece dizin ile harita baştan aynı kimliği taşıyor.
//   • 98'i hiçbir yerde yok, bu oturumda ÖNERİLDİ.
// Üçünün de tam listesi, varlık aralığı, merkez ve kaynağıyla birlikte
// oturumlar/OTURUM-13-ILERLEME.md dosyasındadır. Renk tablosuna ekleme
// ENTEGRASYON OTURUMUNUN işidir (renkler DSATUR ile komşuluk çizgesine göre
// dağıtılıyor; rastgele eklenen renk dengeyi bozar).
//
// ---------------------------------------------------------------------------
// KİMLİK GRANÜLERLİĞİ — nerede hanedan ayrıldı, nerede birleştirildi
// ---------------------------------------------------------------------------
// Kural: BİR KİMLİK = haritada ayrı boyanması anlamlı olan bir siyasî gövde.
// Aynı gövdenin hanedan değişimi ayrı kimlik değildir.
//   • BİRLEŞTİRİLDİ: delhi-sultanligi 1206-1526'nın beş hanedanını (Memlük,
//     Halacî, Tuğluk, Seyyid, Lodî) tek kimlikte topluyor — devletler.js de
//     böyle yapıyor. Aynı şekilde "kesmir" (1281-1586 Lohara + Şah Mîr),
//     "sind" (Sûmra/Samma/Erguni/Kalhora/Talpur), "racput" (Mevar, Marvar,
//     Amber, Bikaner, Caysalmer), "malay-sultanliklari" (Kedah, Patani,
//     Perak, Selangor). Gerekçe her kaydın yorumunda yazılıdır. Bu, Oturum
//     4'ün (yerlesimler_iran.js) "iran" genel kimliğiyle kurduğu gelenektir.
//   • AYRILDI: Behmenî'nin beş halefi (ahmednagar, bicapur, golkonda, berar,
//     bidar) ayrı ayrı — çünkü 1490-1687 arasında beşi AYNI ANDA sahnede ve
//     birbirine sınırdaş. Tek renkte toplanırlarsa Dekken'in yüz yıllık
//     parçalanmışlığı haritadan silinir.
//
// ---------------------------------------------------------------------------
// ZEMİN 1281 — bu coğrafyanın kutu açıldığında göreceği ilk kare
// ---------------------------------------------------------------------------
// Görev tanımındaki kullanıcı notu doğrudur: bu coğrafya Amerika ya da Sahra
// altı Afrika gibi değildir, 1281'de bile kaynak zengindir.
//   Kuzey Hindistan .... Delhi Sultanlığı (Memlük hanedanı, Balban)
//   Dekken ............. Yâdava (Devagiri), Kâkatiya (Varangal), Hoysala
//   Güney Hindistan .... Pândya (Madurai)
//   Çin ................ Yuan hanedanı; Güney Song 1279'da bitti, yani 1281'de
//                        Çin'in tamamı Yuan'dır — tek kare, tek renk
//   Japonya ............ Kamakura şogunluğu (Moğol istilâları 1274 ve 1281)
//   Kore ............... Goryeo, Yuan tâbiiyetinde
//   Tibet .............. Sakya makamı, Yuan idaresinde
//   Birmanya ........... Pagan krallığı (Moğol istilâsı; 1287'de çöktü)
//   Kamboçya ........... Angkor Kmer
//   Cava ............... Singhasari (1292'de yıkıldı, 1293'te Majapahit)
//   Vietnam ............ Trần hanedanı (Moğol istilâları 1285 ve 1288)
//
// ---------------------------------------------------------------------------
// KAYNAK KURALI (CLAUDE.md §4)
// ---------------------------------------------------------------------------
// Hint-İslâm devletleri için TDV birincildir ve kullanıldı: DELHİ SULTANLIĞI ·
// BÂBÜRLÜLER · BEHMENÎLER · GUCERÂT · BENGÂL · MÂLVÂ · KEŞMİR · SİND ·
// MULTAN · BÎCÂPUR · GOLKONDA · AHMEDNAGAR · MEYSÛR · AÇE · MALAKA ·
// ENDONEZYA · FİLİPİNLER · ÇİN · JAPONYA · KORE · HİNDİSTAN.
// TDV'nin kapsamadığı alanlar (Çin hanedanları, Japonya, Kore, Tibet, Kmer,
// Vietnam, Cava, Tayland, Birmanya) için standart akademik referans:
// Cambridge History of China · Cambridge History of Japan · Cambridge History
// of Southeast Asia · Cambridge History of India · Schmidt-Glintzer,
// Geschichte Chinas · Lieberman, Strange Parallels · Ricklefs, A History of
// Modern Indonesia. Vikipedi hiçbir kayıtta TEK dayanak değildir.
//
// ⚠️ UYDURMA TARİH YOK. Gün bilinmiyorsa YYYY-01-01 yazıldı ve bu, "yıl
// biliniyor, gün bilinmiyor" demenin kabul edilmiş yoludur. Bu dosyada gün
// hassasiyetli tarih ancak kaynakta gün varsa yazılmıştır; hangi kırılmanın
// günü nereden geldiği o kaydın yorumundadır. Sık kullanılan gün hassasiyetli
// dönüm noktaları:
//     1281-08-15  İkinci Moğol donanmasının kamikaze ile yok olması
//     1333-07-04  Kamakura'nın düşüşü
//     1368-09-14  Yuan sarayının Hanbalık'tan çekilmesi
//     1398-12-17  Timur'un Delhi'ye girişi
//     1405-07-11  Zheng He'nin ilk seferi (referans, kırılma değil)
//     1526-04-21  I. Pânipat — Bâbür'ün Delhi Sultanlığı'nı yıkması
//     1556-11-05  II. Pânipat — Bâbürlü ihyâsı
//     1565-01-26  Talikota — Vijayanagara'nın yıkılışı
//     1600-10-21  Sekigahara
//     1603-03-24  Tokugawa Ieyasu'nun şogun oluşu
//     1644-04-25  Ming'in son imparatorunun intiharı (Pekin'in Şun'a düşüşü)
//     1644-06-06  Qing ordusunun Pekin'e girişi
//     1683-10-05  Tayvan'da Zheng hanedanının teslimi
//     1757-06-23  Palaşi (Plassey) — Bengal'in İngiliz denetimine geçişi
//     1761-01-14  III. Pânipat
//     1799-05-04  Seringapatam — Tipu Sultan'ın ölümü
//     1803-09-11  Delhi Muharebesi — Bâbürlü sarayının İngiliz himayesine girişi
//     1819-01-29  Singapur'un kurulması
//     1849-03-29  Pencap'ın ilhakı
//     1868-01-03  Meiji restorasyonu ilânı
//     1912-02-12  Qing'in tahttan çekilmesi
//
// ---------------------------------------------------------------------------
// ⚠️ kur: ve bit: ALANLARI
// ---------------------------------------------------------------------------
// Motor ikisini de OKUMUYOR (MIMARI.md §3.1). Görev tanımı gereği yine de
// yazıldılar. Bu dosyada 84 kayıtta kur:, 4 kayıtta bit: var — bu coğrafya
// tam da bu alanların en çok işlediği yerdir (Agra 1504, Kalküta 1690,
// Batavia 1619, Singapur 1819, Nagazaki 1571, Mandalay 1857, Sapporo 1869).
// ⚠️ İKİNCİ TUR (denetim sonrası): 23 kayda daha kur: eklendi ve kuruluştan
// ÖNCEKİ sahiplik pencereleri SİLİNDİ — DURUM.md'deki "atlasın zaman çizgisi
// neredeyse düz" ölçümünün sebebi tam olarak buydu. Eklenenler: Şanhayguan
// 1381 · Kalgan 1429 · Kyongsong 1434 · Ludhiyana 1480 · Bhuc 1510 ·
// Bancarmasin 1526 · Kanazawa 1546 · Yamaguchi 1360 · Fukui 1575 ·
// Morioka 1597 · Kōchi 1601 · Matsuyama 1602 · Matsue 1607 · Hirosaki 1611 ·
// Şikârpûr 1617 · Ningguta 1653 · Aigun 1683 · Qiqihar 1691 · Nagpûr 1702 ·
// Champasak 1713 · Baotou 1809 · Kuching 1827 · Hong Kong 1841.
// Hong Kong'un 1281-1841 arası Yuan/Ming/Qing zinciri tamamen kaldırıldı:
// şehir 26 Ocak 1841'de kuruldu, öncesinde balıkçı adasıydı ve o dönemin
// sahibini komşu Kanton noktası taşıyor (Kalküta-Singapur deseni).
// bit: taşıyan dört kayıt: Gaur (1575 vebası), Vijayanagara (1565 Talikota),
// Karakurum (1380 Ming baskını), Ayutthaya (1767 Birman yangını).
//
// Bugünkü davranış ve neden böyle bırakıldı:
//   • kur: olan kayıtta kuruluştan ÖNCE sahiplik penceresi YOKTUR — nokta o
//     tarihe kadar sahipsizdir, yani boş görünür. Bu OLMASI GEREKEN
//     görüntüdür (Oturum 11'in Krasnovodsk deseni).
//   • bit: olan kayıtta sahiplik zinciri 1923'e kadar TAM bırakılmıştır ki
//     Değişmez 1 ihlal olmasın (Oturum 4'ün Köhne Ürgenç deseni). Yani
//     Vijayanagara noktası 1565'ten sonra da bölgenin sahibini taşır.
//
// ---------------------------------------------------------------------------
// KENDİ KENDİNİ DENETLEME — sonuçlar
// ---------------------------------------------------------------------------
// Görev tanımının istediği üç denetim, arac/denetle.py bu coğrafyayı
// görmediği için ayrı bir betikle koşturuldu (betik geçicidir, sonuçlar
// OTURUM-13-ILERLEME.md'dedir):
//   1. KARADA MI — veri-kaynak/ne_10m_land.geojson KÜRESELDİR (lon -180..180,
//      lat -90..83.6), yani bu coğrafyayı kapsıyor; görev tanımının "kapsamıyor
//      olabilir" uyarısı bu dosya için geçersizdir. 344 noktanın tamamı
//      maskede karadadır ve hiçbiri 117 gölün içinde değildir.
//      ⚠️ ON İKİ NOKTA maske yüzünden kaydırıldı. Hepsi haliç, delta ya da
//      küçük ada limanıdır ve 10m çözünürlükte kıyı çizgisinin deniz tarafına
//      düşüyordu; her biri EN YAKIN kara noktasına çekildi (azami 2.4 km):
//        Broaç 1.1 · Bombay 0.9 · Koçin 1.5 · Zeytun 1.1 · Amoy 1.2 ·
//        Swatow 1.0 · Moulmein 2.2 · Mergui 1.3 · Bengkulu 0.8 ·
//        Ternate 1.8 · Banda Neira 2.4 · Wuchang 2.4 km
//      (Wuchang maskede Yangtze/göl poligonunun içine düşüyordu.) Kutu doğuya
//      açılıp daha yüksek çözünürlüklü maske kullanılırsa bu on iki nokta
//      gerçek mevkiine geri alınmalıdır.
//   2. MÜKERRER — 3 km'nin altında hiçbir çift YOK; ölçüm yalnız bu dosyanın
//      içinde değil, yerlesimler.js + yerlesimler_iran.js +
//      yerlesimler_ortaasya.js ile ÇAPRAZ yapıldı. En sıkı çift
//      Hûglî–Çandernagor 5.16 km, ikincisi Ternate–Tidore 11.2 km. 3 km'nin
//      altına düştüğü için ELENEN adaylar "EKLENMEYENLER" başlığındadır.
//   3. SAHİPSİZLİK — kur: taşıyan 84 kaydın kuruluş sonrası, kalan 260 kaydın
//      1281-01-01 → 1923-10-29 aralığının TAMAMI kesintisiz sahiplidir
//      (ölçüldü: 0 boşluk). Dönemlerde çakışma, ters aralık ve sıfır uzunluk
//      yoktur (ölçüldü: 0).
//
// DEĞİŞMEZ 2 (sessiz toprak değişimi yok) — bu dosya TETİKLEMEZ. Denetim
// yalnız d: ve v: dönemlerinin başını/sonunu sorgular; bu dosyada hiçbir
// kaydın d: veya v: dönemi YOKTUR, hepsi yabancı sahipliktir (s:). Tek bir
// yeni kronoloji maddesi gerekmez.
//
// DEĞİŞMEZ 1 — arac/denetle.py'nin BEKLENEN_SAHIPSIZ sayacı bu dosya
// birleştirilirken DEĞİŞMEMELİDİR: bu dosyada kasten sahipsiz DOLGU NOKTASI
// YOKTUR. kur: öncesi boşluklar sahipsizlik değil, yokluktur.
//
// ---------------------------------------------------------------------------
// EKLENMEYENLER ve GEREKÇELERİ
// ---------------------------------------------------------------------------
//   Herat (34.35/62.20) — Oturum 4 kutunun 0.2° dışında kaldığı için KASTEN
//     eklemedi (yerlesimler_iran.js başlığı). Bu oturum onun kararını
//     bozmuyor; İran oturumunun işidir.
//   Sagaing (21.878/95.980) — Ava'ya 2.6 km. 3 km kuralı gereği elendi;
//     aynı vadinin peteğini Ava taşıyor.
//   Amber (26.985/75.851) — Caypur'a 9.1 km. Sınırı geçiyor ama 1727 öncesi
//     ile sonrası aynı hanedanın iki merkezi; Caypur kaydının yorumunda
//     Amber dönemi yazılı.
//   Xianyang (34.33/108.71) — Xi'an'a 21 km, aynı ovanın peteği.
//   Nepal, Butan, Seylan'ın iç krallıkları — Seylan'a üç nokta konuldu
//     (aşağıda gerekçesi), Nepal'e bir (Katmandu). Butan atlandı.
//   62-65°D arası (Sîstan, Belûcistan, Mekran) — bu oturumun coğrafyası
//     değil; ILERLEME raporunda açık boşluk olarak bildirildi.
// ============================================================================

window.YERLESIMLER_ASYA = [

// ###########################################################################
// BÖLÜM 1 — KUZEY HİNDİSTAN
// ###########################################################################
//
// STANDART ZİNCİR (Ganj ovası çekirdeği: Delhi, Doâb, Agra):
//   1281-01-01 → 1526-04-21   delhi-sultanligi
//   1526-04-21 → 1540-05-17   babur-imparatorlugu   (I. Pânipat)
//   1540-05-17 → 1555-07-23   sur-hanedani          (Kannauc; Şîr Şah Sûr)
//   1555-07-23 → …            babur-imparatorlugu   (Hümâyûn'un dönüşü)
// Şehirden şehire sapmalar her kaydın yorumundadır.
// TDV DELHİ SULTANLIĞI ve BÂBÜRLÜLER maddeleri; I. Pânipat 21 Nisan 1526,
// Kannauc 17 Mayıs 1540, Hümâyûn'un Delhi'ye dönüşü 23 Temmuz 1555.
//
// ===== 1a. Delhi ve Doâb =====

// Delhi — bu coğrafyanın tek en önemli noktası. Zincire iki istisnâ:
//   • Timur 17 Aralık 1398'de şehre girdi, on beş gün yağmaladı ve 1 Ocak
//     1399'da ayrıldı (TDV TİMUR). İki haftalık bir pencere ama gerçek bir
//     el değiştirmedir ve haritada Timurlu rengiyle görünmesi doğrudur.
//   • 1739 Nâdir Şah (Mart-Mayıs) ve 1757 Ahmed Şah Dürrânî (Ocak-Nisan)
//     işgalleri saray değiştirmedi, ayrı pencere AÇILMADI; ikisi de yağma
//     ve haraçla bitti.
//   • 1788'de Mahâdcî Şinde Delhi'yi fiilen denetimine aldı; Bâbürlü
//     hükümdarı tahtta kaldı ama şehir Maratha'nındı. 11 Eylül 1803 Delhi
//     Muharebesi'nden sonra saray İngiliz himayesine girdi.
{ ad:"Delhi", tur:"sehir", lat:28.6440, lon:77.2160, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1398-12-17", d:"delhi-sultanligi"},
     {f:"1398-12-17", t:"1399-01-01", d:"timurlu"},
     {f:"1399-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1788-01-01", d:"babur-imparatorlugu"},
     {f:"1788-01-01", t:"1803-09-11", d:"maratha"},
     {f:"1803-09-11", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Agra — Sikender Lodî 1504'te kurdu ve başkent yaptı; Bâbürlü başkenti
// 1526-1648. kur: bu yüzden yazıldı, 1504 öncesi boşluk KASITLIDIR.
// 1761 III. Pânipat'tan sonra Câtlar (Bharatpur) 1761-1774 Agra kalesini
// tuttu; sonra Maratha (Şinde), 1803'te İngiliz.
{ ad:"Agra", tur:"sehir", lat:27.1770, lon:78.0080, g:2, k:0, d:[],
  kur:"1504-01-01",
  s:[{f:"1504-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1761-01-14", d:"babur-imparatorlugu"},
     {f:"1761-01-14", t:"1803-10-17", d:"maratha"},
     {f:"1803-10-17", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Mathura — Yamuna'nın kutsal şehri; siyasî olarak hep Delhi/Agra ile aynı
// eldedir. 1670 Evrengzîb'in mâbed yıkımı sahiplik değiştirmedi.
{ ad:"Mathura", tur:"sehir", lat:27.4920, lon:77.6730, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1770-01-01", d:"babur-imparatorlugu"},
     {f:"1770-01-01", t:"1803-10-17", d:"maratha"},
     {f:"1803-10-17", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Mîrat (Meerut) — Delhi'nin kuzeydoğu kapısı. 1857 ayaklanması burada
// başladı (10 Mayıs); sahiplik değişmediği için pencere açılmadı.
{ ad:"Mîrat (Meerut)", tur:"sehir", lat:28.9840, lon:77.7060, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1788-01-01", d:"babur-imparatorlugu"},
     {f:"1788-01-01", t:"1803-09-11", d:"maratha"},
     {f:"1803-09-11", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Pânipat — Hint tarihinin üç dönüm noktasının sahnesi: 21 Nisan 1526
// (Bâbür–İbrâhîm Lodî), 5 Kasım 1556 (Ekber–Hemû), 14 Ocak 1761
// (Dürrânî–Maratha). Üçü de bu noktanın zincirinde görünür.
{ ad:"Pânipat", tur:"sehir", lat:29.3900, lon:76.9770, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1556-11-05", d:"sur-hanedani"},
     {f:"1556-11-05", t:"1788-01-01", d:"babur-imparatorlugu"},
     {f:"1788-01-01", t:"1803-09-11", d:"maratha"},
     {f:"1803-09-11", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Hisâr-ı Fîrûze — Fîrûz Şah Tuğluk'un 1354'te kurduğu şehir; kur: yazıldı.
{ ad:"Hisâr-ı Fîrûze", tur:"kale", lat:29.1530, lon:75.7220, g:0, k:0, d:[],
  kur:"1354-01-01",
  s:[{f:"1354-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1803-09-11", d:"babur-imparatorlugu"},
     {f:"1803-09-11", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Koil (Aligarh) — Doâb'ın ortası. 1757-1803 arası Rohilla, Câtlar ve
// Maratha arasında elden ele geçti; 4 Eylül 1803'te İngiliz'e düştü.
{ ad:"Koil (Aligarh)", tur:"kale", lat:27.8970, lon:78.0880, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1784-01-01", d:"babur-imparatorlugu"},
     {f:"1784-01-01", t:"1803-09-04", d:"maratha"},
     {f:"1803-09-04", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Etâve (Etawah) — Yamuna-Ganj arası. 1801'de Avad nevâbı tarafından
// İngilizlere devredilen "Ceded Districts" içindedir.
{ ad:"Etâve (Etawah)", tur:"sehir", lat:26.7760, lon:79.0150, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1801-11-10", d:"avad"},
     {f:"1801-11-10", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Kannauc — 17 Mayıs 1540'ta Şîr Şah Sûr'un Hümâyûn'u yendiği yer; Sûr
// hanedanının kuruluş sahnesi. Cavnpur Sultanlığı 1394-1479 arasında
// buraya kadar uzandı.
{ ad:"Kannauc", tur:"sehir", lat:27.0550, lon:79.9160, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1801-11-10", d:"avad"},
     {f:"1801-11-10", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Kanpûr — 1778'de İngiliz karargâhı kurulana kadar Ganj kıyısında bir
// köydür; şehir sonradan büyümüştür. Görev tanımının örnek merkezlerinden
// olduğu için konuldu ama UYDURMA kuruluş tarihi yazılmadı: kur: YOK,
// nokta bütün dönem boyunca bölgesinin sahibini taşıyor.
{ ad:"Kanpûr", tur:"sehir", lat:26.4500, lon:80.3320, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1801-11-10", d:"avad"},
     {f:"1801-11-10", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// ===== 1b. Avad ve doğu Ganj =====
//
// Avad (Oudh) nevâblığı 1722'de Sa'âdet Han ile fiilen bağımsızlaştı;
// Bâbürlü hükümdarı adına hutbe okunmaya devam etti. 1764 Bakser'den
// sonra İngiliz himayesine girdi, 1801'de topraklarının yarısını devretti,
// 7 Şubat 1856'da tamamen ilhak edildi. Bu dosyada nevâblık, fiilî
// bağımsızlığın başladığı 1722'den ilhak tarihine kadar ayrı kimliktir.

// Leknev (Lucknow) — 1775'te Avad başkenti oldu; 1856'da ilhak.
{ ad:"Leknev (Lucknow)", tur:"sehir", lat:26.8470, lon:80.9470, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1856-02-07", d:"avad"},
     {f:"1856-02-07", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Feyzâbâd — Avad'ın 1722-1775 arası ilk başkenti; Ayodhya'nın yanı başında.
{ ad:"Feyzâbâd (Ayodhya)", tur:"sehir", lat:26.7750, lon:82.1450, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1856-02-07", d:"avad"},
     {f:"1856-02-07", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Cavnpur — 1359'da Fîrûz Şah Tuğluk kurdu (kur:); 1394-1479 arasında Şarkî
// hanedanının başkenti olarak Delhi'den bağımsız bir sultanlıktır. Bu
// dosyanın "cavnpur-sultanligi" kimliği bu 85 yıl içindir.
{ ad:"Cavnpur (Jaunpur)", tur:"sehir", lat:25.7500, lon:82.6840, g:1, k:0, d:[],
  kur:"1359-01-01",
  s:[{f:"1359-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1775-01-01", d:"avad"},
     {f:"1775-01-01", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Benâres (Vârânasî) — 1775'te Avad'dan İngilizlere devredildi.
{ ad:"Benâres (Vârânasî)", tur:"sehir", lat:25.3170, lon:83.0060, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1775-01-01", d:"avad"},
     {f:"1775-01-01", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Ilâhâbâd (Prayag) — Ekber 1583'te kaleyi kurdu ve şehre bu adı verdi;
// yerleşim daha eskidir, bu yüzden kur: YAZILMADI.
{ ad:"Ilâhâbâd (Allahabad)", tur:"sehir", lat:25.4360, lon:81.8470, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1765-08-12", d:"babur-imparatorlugu"},
     {f:"1765-08-12", t:"1801-11-10", d:"avad"},
     {f:"1801-11-10", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Gorakhpûr — Ganj ovasının Nepal eteğindeki kuzey ucu.
{ ad:"Gorakhpûr", tur:"sehir", lat:26.7600, lon:83.3730, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1801-11-10", d:"avad"},
     {f:"1801-11-10", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Katmandu — Nepal. Görev tanımının tablosunda yok; Himalaya'nın güney
// yamacında 500 km'lik bir boşluk kalmasın diye TEK nokta olarak konuldu
// (kutu açıldığında Patna ya da Lhasa'nın peteğine emilirdi). Malla
// krallıkları 1482'de üçe bölündü, 25 Eylül 1768'de Gorkha'lı Prithvi
// Narayan Şah Katmandu'yu aldı ve bugünkü Nepal kuruldu.
{ ad:"Katmandu", tur:"sehir", lat:27.7170, lon:85.3240, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1923-10-29", d:"nepal"}] },

// ===== 1c. Pencap, kuzeybatı ve Sind =====
//
// ⚠️ BU DOSYANIN GENEL KURALI — "İngiliz hâkimiyeti" ile "İngiliz Hindistanı"
// aynı şey değildir. Yerli hânedanın tahtta kaldığı yerler (Racputâne,
// Haydarâbâd, Meysûr, Cammû-Keşmir, Travankur, Koçin, Bhopâl, Gvalyar,
// Nepal) 1923'e kadar KENDİ kimliğini taşır; "ingiliz-hindistani" yalnız
// doğrudan idare edilen topraklarda kullanılır. Bunun sebebi haritanın
// "burayı kim yönetiyor" sorusuna cevap vermesidir; himâye (paramountcy)
// ayrı bir katmandır ve bu projede henüz gösterimi yoktur.
//
// PENCAP STANDART ZİNCİRİ:
//   … → 1526-04-21 delhi-sultanligi · 1526→1540 babur · 1540→1555 sur ·
//   1555 → 1752-04-01 babur (Bâbürlü, Pencap'ı Ahmed Şah Dürrânî'ye bıraktı)
//   1752 → 1765-04-16 afgan-durrani (Sih misllerinin Lahor'u alması)
//   1765 → 1849-03-29 sih-imparatorlugu  · 1849 → 1923 ingiliz-hindistani
// ⚠️ "sih-imparatorlugu" burada 1765'ten başlatıldı; devletler.js aralığı
// 1801-1849'dur ve Ranjit Singh'in imparatorluk ilânını esas alır. 1765-1799
// arası misl konfederasyonudur, ayrı kimlik AÇILMADI (aynı siyasî gövdenin
// erken evresi). Ranjit Singh Lahor'a 7 Temmuz 1799'da girdi.

{ ad:"Lahor", tur:"sehir", lat:31.5490, lon:74.3430, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1765-04-16", d:"afgan-durrani"},
     {f:"1765-04-16", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Multan — 1445-1528 arası Langah hânedanının bağımsız sultanlığıdır
// (TDV MULTAN). 1528'de Şah Hüseyin Erguni aldı, 1557'de Bâbürlü'ye geçti.
// Ranjit Singh 2 Haziran 1818'de kaleyi düşürdü.
{ ad:"Multan", tur:"sehir", lat:30.1980, lon:71.4750, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1445-01-01", d:"delhi-sultanligi"},
     {f:"1445-01-01", t:"1528-01-01", d:"multan-langah"},
     {f:"1528-01-01", t:"1557-01-01", d:"sind"},
     {f:"1557-01-01", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1818-06-02", d:"afgan-durrani"},
     {f:"1818-06-02", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Amritsar — Sih dininin merkezi; Ram Das 1577'de havuzu kazdırdı, şehir o
// tarihten itibaren vardır (kur:). 1802'de Ranjit Singh'in eline geçti.
{ ad:"Amritsar", tur:"sehir", lat:31.6340, lon:74.8730, g:1, k:0, d:[],
  kur:"1577-01-01",
  s:[{f:"1577-01-01", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1765-04-16", d:"afgan-durrani"},
     {f:"1765-04-16", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Sirhind — Delhi ile Lahor arasındaki menzil şehri; 14 Ocak 1764'te Sih
// misllerince yıkıldı, o tarihten sonra bir daha toparlanamadı.
{ ad:"Sirhind", tur:"kale", lat:30.6410, lon:76.3830, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1764-01-14", d:"afgan-durrani"},
     {f:"1764-01-14", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Câlandhar (Jalandhar)", tur:"sehir", lat:31.3260, lon:75.5760, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1765-04-16", d:"afgan-durrani"},
     {f:"1765-04-16", t:"1846-03-09", d:"sih-imparatorlugu"},
     {f:"1846-03-09", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Ludhiyana", tur:"sehir", lat:30.9010, lon:75.8570, g:0, k:0, d:[],
  kur:"1480-01-01",
  s:[{f:"1480-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1765-04-16", d:"afgan-durrani"},
     {f:"1765-04-16", t:"1809-04-25", d:"sih-imparatorlugu"},
     {f:"1809-04-25", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Siyâlkot", tur:"sehir", lat:32.4940, lon:74.5310, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1765-04-16", d:"afgan-durrani"},
     {f:"1765-04-16", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Attock — Ekber 1581'de İndus geçidini tutmak için kurdu (kur:).
{ ad:"Attock", tur:"kale", lat:33.7660, lon:72.3600, g:0, k:0, d:[],
  kur:"1581-01-01",
  s:[{f:"1581-01-01", t:"1738-01-01", d:"babur-imparatorlugu"},
     {f:"1738-01-01", t:"1747-06-20", d:"afsar"},
     {f:"1747-06-20", t:"1813-07-13", d:"afgan-durrani"},
     {f:"1813-07-13", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Râvalpindi", tur:"sehir", lat:33.5980, lon:73.0480, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1738-01-01", d:"babur-imparatorlugu"},
     {f:"1738-01-01", t:"1747-06-20", d:"afsar"},
     {f:"1747-06-20", t:"1765-04-16", d:"afgan-durrani"},
     {f:"1765-04-16", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Peşâver — Hayber geçidinin doğu ağzı. Nâdir Şah 1738'de, Dürrânî 1747'de,
// Sihler 6 Mayıs 1834'te, İngilizler 1849'da aldı.
{ ad:"Peşâver", tur:"sehir", lat:34.0080, lon:71.5780, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1504-10-01", d:"delhi-sultanligi"},
     {f:"1504-10-01", t:"1738-01-01", d:"babur-imparatorlugu"},
     {f:"1738-01-01", t:"1747-06-20", d:"afsar"},
     {f:"1747-06-20", t:"1834-05-06", d:"afgan-durrani"},
     {f:"1834-05-06", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// ⚠️ KÖPRÜ NOKTALARI — Kâbil, Gazne, Kandehar görev tanımının tablosunda
// (68-97°D) yok; üçü de 65-69°D arasındadır. Yine de konuldular çünkü Delhi
// Sultanlığı → Bâbürlü → Dürrânî zincirinin bu ucu olmadan Hint kuzeybatısı
// ile Oturum 4'ün İran verisi arasında 600 km'lik boşluk kalıyor. Herat
// (62.20°D) EKLENMEDİ: Oturum 4 onu kasten dışarıda bıraktı, o oturumun işidir.

// Kâbil — Bâbür 1504 Ekim'inde aldı ve 1526'ya kadar burada hüküm sürdü;
// Bâbürlü hânedanının çıkış noktasıdır. İki İngiliz işgali gerçek el
// değiştirmedir ve ayrı pencere aldı: 7 Ağustos 1839 – 6 Ocak 1842 ve
// 12 Ekim 1879 – 11 Ağustos 1880.
{ ad:"Kâbil", tur:"sehir", lat:34.5280, lon:69.1720, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1370-01-01", d:"cagatay"},
     {f:"1370-01-01", t:"1504-10-01", d:"timurlu"},
     {f:"1504-10-01", t:"1738-01-01", d:"babur-imparatorlugu"},
     {f:"1738-01-01", t:"1747-06-20", d:"afsar"},
     {f:"1747-06-20", t:"1826-01-01", d:"afgan-durrani"},
     {f:"1826-01-01", t:"1839-08-07", d:"afganistan"},
     {f:"1839-08-07", t:"1842-01-06", d:"ingiltere"},
     {f:"1842-01-06", t:"1879-10-12", d:"afganistan"},
     {f:"1879-10-12", t:"1880-08-11", d:"ingiltere"},
     {f:"1880-08-11", t:"1923-10-29", d:"afganistan"}] },

{ ad:"Gazne", tur:"sehir", lat:33.5510, lon:68.4230, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1370-01-01", d:"cagatay"},
     {f:"1370-01-01", t:"1504-10-01", d:"timurlu"},
     {f:"1504-10-01", t:"1738-01-01", d:"babur-imparatorlugu"},
     {f:"1738-01-01", t:"1747-06-20", d:"afsar"},
     {f:"1747-06-20", t:"1826-01-01", d:"afgan-durrani"},
     {f:"1826-01-01", t:"1839-07-23", d:"afganistan"},
     {f:"1839-07-23", t:"1842-09-06", d:"ingiltere"},
     {f:"1842-09-06", t:"1923-10-29", d:"afganistan"}] },

// Kandehar — Bâbürlü ile Safevî arasında altı kez el değiştirdi: 1522 Bâbür,
// 1537 Safevî, 1595 Bâbürlü, 1622 Safevî, 1638 Bâbürlü, 1649 Safevî.
// 1709'da Mîr Veys ile Hotakî Afgan idaresi başladı; bu dosya Oturum 4'ün
// geleneğine uyarak Hotakî ve Afşar dönemlerini genel "iran" ile boyuyor.
// 1747'de Ahmed Şah Dürrânî burada taç giydi ve ilk başkenti oldu.
{ ad:"Kandehar", tur:"sehir", lat:31.6100, lon:65.7100, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1370-01-01", d:"cagatay"},
     {f:"1370-01-01", t:"1522-09-06", d:"timurlu"},
     {f:"1522-09-06", t:"1537-01-01", d:"babur-imparatorlugu"},
     {f:"1537-01-01", t:"1595-01-01", d:"safevi"},
     {f:"1595-01-01", t:"1622-06-22", d:"babur-imparatorlugu"},
     {f:"1622-06-22", t:"1638-01-01", d:"safevi"},
     {f:"1638-01-01", t:"1649-02-22", d:"babur-imparatorlugu"},
     {f:"1649-02-22", t:"1709-04-21", d:"safevi"},
     {f:"1709-04-21", t:"1747-06-20", d:"iran"},
     {f:"1747-06-20", t:"1826-01-01", d:"afgan-durrani"},
     {f:"1826-01-01", t:"1923-10-29", d:"afganistan"}] },

// Keşmir — "kesmir" kimliği 1281-1586 arasının TAMAMINI kapsar: 1320'ye
// kadar Lohara hânedanı, 1339'dan itibaren Şah Mîr sultanlığı (TDV KEŞMİR).
// İkisi ayrı kimlik yapılmadı çünkü ikisi de aynı vadinin tek devletidir.
// Ekber 1586 Ekim'inde ilhak etti; Dürrânî 1752'de aldı; Sihler 5 Temmuz
// 1819'da Srinagar'a girdi; 16 Mart 1846 Amritsar Antlaşması ile Gulâb
// Singh'e satıldı ve Cammû-Keşmir prens devleti doğdu.
{ ad:"Srinagar (Keşmir)", tur:"sehir", lat:34.0840, lon:74.7970, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1586-10-01", d:"kesmir"},
     {f:"1586-10-01", t:"1752-01-01", d:"babur-imparatorlugu"},
     {f:"1752-01-01", t:"1819-07-05", d:"afgan-durrani"},
     {f:"1819-07-05", t:"1846-03-16", d:"sih-imparatorlugu"},
     {f:"1846-03-16", t:"1923-10-29", d:"cammu-kesmir"}] },

{ ad:"Cammû (Jammu)", tur:"sehir", lat:32.7340, lon:74.8690, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1586-10-01", d:"kesmir"},
     {f:"1586-10-01", t:"1752-01-01", d:"babur-imparatorlugu"},
     {f:"1752-01-01", t:"1808-01-01", d:"afgan-durrani"},
     {f:"1808-01-01", t:"1846-03-16", d:"sih-imparatorlugu"},
     {f:"1846-03-16", t:"1923-10-29", d:"cammu-kesmir"}] },

// Leh (Ladakh) — Namgyal hânedanı; Tibet-Bhutan savaşı sonrası 1684 Tingmosgang
// antlaşmasıyla Tibet'e vergi verir hâle geldi ama krallık sürdü. 1834-1842
// Zorâver Singh'in seferleriyle Cammû'ya bağlandı; 1846'da Cammû-Keşmir'in
// parçası oldu. "ladak" ayrı kimliktir: Tibet kültür alanında ama Lhasa'nın
// devleti değildir.
{ ad:"Leh (Ladakh)", tur:"sehir", lat:34.1640, lon:77.5850, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1834-01-01", d:"ladak"},
     {f:"1834-01-01", t:"1846-03-16", d:"sih-imparatorlugu"},
     {f:"1846-03-16", t:"1923-10-29", d:"cammu-kesmir"}] },

// SİND — "sind" kimliği Sûmra, Samma (1351-1524), Erguni-Tarhan (1524-1591),
// Kalhora (1701-1783) ve Talpur (1783-1843) hânedanlarının tamamını kapsar
// (TDV SİND). Beşi de aynı deltanın tek devletidir; ayrı ayrı boyanmaları
// haritaya bilgi katmaz. Bâbürlü aradaki 1592-1701 penceresidir. 17 Şubat
// 1843 Miyânî Muharebesi'nden sonra İngiliz ilhakı.
{ ad:"Tatta (Thatta)", tur:"sehir", lat:24.7470, lon:67.9240, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1592-01-01", d:"sind"},
     {f:"1592-01-01", t:"1701-01-01", d:"babur-imparatorlugu"},
     {f:"1701-01-01", t:"1843-02-17", d:"sind"},
     {f:"1843-02-17", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Haydarâbâd (Sind) — Gulâm Şah Kalhora 1768'de kurdu (kur:). Dekken'deki
// Haydarâbâd ile karışmasın diye ad parantezlidir.
{ ad:"Haydarâbâd (Sind)", tur:"sehir", lat:25.3960, lon:68.3770, g:0, k:0, d:[],
  kur:"1768-01-01",
  s:[{f:"1768-01-01", t:"1843-02-17", d:"sind"},
     {f:"1843-02-17", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Karaçi — Kalhora idaresinde 1729'da balıkçı limanı olarak kuruldu (kur:);
// İngilizler 3 Şubat 1839'da işgal etti, Sind'in ilhakından dört yıl önce.
{ ad:"Karaçi", tur:"liman", lat:24.8610, lon:67.0100, g:1, k:0, d:[],
  kur:"1729-01-01",
  s:[{f:"1729-01-01", t:"1839-02-03", d:"sind"},
     {f:"1839-02-03", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Şikârpûr", tur:"sehir", lat:27.9550, lon:68.6380, g:0, k:0, d:[],
  kur:"1617-01-01",
  s:[{f:"1617-01-01", t:"1701-01-01", d:"babur-imparatorlugu"},
     {f:"1701-01-01", t:"1843-02-17", d:"sind"},
     {f:"1843-02-17", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Bahâvelpûr — 1748'de Abbâsî nevâblarının kurduğu prens devleti (kur:);
// 1833'ten itibaren İngiliz himayesinde ama tahtı 1955'e kadar sürdü, bu
// yüzden "sind" değil kendi kimliğiyle bırakıldı.
{ ad:"Bahâvelpûr", tur:"sehir", lat:29.3950, lon:71.6840, g:0, k:0, d:[],
  kur:"1748-01-01",
  s:[{f:"1748-01-01", t:"1923-10-29", d:"bahavelpur"}] },

// ===== 1d. Racputâne =====
//
// STANDART ZİNCİR: racput 1281→1570 · babur 1570→1707-03-03 (Evrengzîb'in
// ölümü) · racput 1707→1923.
// Ekber, Amber (1562), Bikaner ve Caysalmer ile evlilik-ittifak yoluyla,
// Mârvâr ile 1570'te bağ kurdu; 1570 bu yüzden ortak eşiktir. 1818
// antlaşmalarıyla racput devletleri İngiliz himayesine girdi ama HÂNEDAN
// TAHTTA KALDI — yukarıdaki genel kural gereği kimlik değişmez.

// Ecmîr (Ajmer) — Racputâne'nin tek DOĞRUDAN idare edilen parçası: Ekber
// 1559'da aldı, 1818'de Maratha'dan İngilizlere geçti ve prens devleti
// olmadı. Bu yüzden zinciri komşularından ayrılır.
{ ad:"Ecmîr (Ajmer)", tur:"sehir", lat:26.4500, lon:74.6390, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1365-01-01", d:"delhi-sultanligi"},
     {f:"1365-01-01", t:"1559-01-01", d:"racput"},
     {f:"1559-01-01", t:"1756-01-01", d:"babur-imparatorlugu"},
     {f:"1756-01-01", t:"1818-06-25", d:"maratha"},
     {f:"1818-06-25", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Çitor (Chittorgarh) — Mevar'ın kalesi ve Hint tarihinin üç büyük
// kuşatmasının sahnesi: Alâeddin Halacî 26 Ağustos 1303, Gucerât sultanı
// Bahadır Şah 8 Mart 1535, Ekber 23 Şubat 1568. 1615 Şubat'ında Cihângîr
// ile Rana Amar Singh anlaştı ve Mevar toprakları iade edildi.
{ ad:"Çitor (Chittorgarh)", tur:"kale", lat:24.8790, lon:74.6290, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1303-08-26", d:"racput"},
     {f:"1303-08-26", t:"1311-01-01", d:"delhi-sultanligi"},
     {f:"1311-01-01", t:"1535-03-08", d:"racput"},
     {f:"1535-03-08", t:"1537-01-01", d:"gucerat-sultanligi"},
     {f:"1537-01-01", t:"1568-02-23", d:"racput"},
     {f:"1568-02-23", t:"1615-02-05", d:"babur-imparatorlugu"},
     {f:"1615-02-05", t:"1923-10-29", d:"racput"}] },

// Udeypûr — Rana Udai Singh 1559'da Çitor'un yerine kurdu (kur:). Mevar
// Bâbürlü'ye 1615'te bağlandı ama başkent hiç Bâbürlü eline geçmedi.
{ ad:"Udeypûr (Udaipur)", tur:"sehir", lat:24.5850, lon:73.7120, g:1, k:0, d:[],
  kur:"1559-01-01",
  s:[{f:"1559-01-01", t:"1923-10-29", d:"racput"}] },

// Codhpûr — Rao Codha 1459'da kurdu (kur:). 1679-1707 arası Evrengzîb'in
// doğrudan idaresi altında kaldı (Mârvâr veraset savaşı).
{ ad:"Codhpûr (Jodhpur)", tur:"sehir", lat:26.2880, lon:73.0190, g:1, k:0, d:[],
  kur:"1459-01-01",
  s:[{f:"1459-01-01", t:"1679-01-01", d:"racput"},
     {f:"1679-01-01", t:"1707-03-03", d:"babur-imparatorlugu"},
     {f:"1707-03-03", t:"1923-10-29", d:"racput"}] },

// Caypûr — Sevâî Cay Singh 1727'de kurdu (kur:). Öncesinde hânedanın
// merkezi 9 km kuzeydoğudaki Amber'dir; Amber ayrı nokta olarak EKLENMEDİ
// (3 km kuralını geçiyor ama aynı peteği paylaşıyorlar).
{ ad:"Caypûr (Jaipur)", tur:"sehir", lat:26.9120, lon:75.7870, g:1, k:0, d:[],
  kur:"1727-01-01",
  s:[{f:"1727-01-01", t:"1923-10-29", d:"racput"}] },

{ ad:"Caysalmer", tur:"kale", lat:26.9150, lon:70.9120, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1923-10-29", d:"racput"}] },

// Bikaner — Rao Bika 1488'de kurdu (kur:).
{ ad:"Bikaner", tur:"sehir", lat:28.0220, lon:73.3120, g:0, k:0, d:[],
  kur:"1488-01-01",
  s:[{f:"1488-01-01", t:"1923-10-29", d:"racput"}] },

// Bharatpûr — Câtların devleti; Sûrac Mal 1733'te kaleyi kurdu (kur:).
// Racput değildir, ayrı kimlik: 1761-1774 arasında Agra kalesini de tuttu.
{ ad:"Bharatpûr", tur:"kale", lat:27.2170, lon:77.4900, g:0, k:0, d:[],
  kur:"1733-01-01",
  s:[{f:"1733-01-01", t:"1923-10-29", d:"bharatpur-cat"}] },

// ===== 1e. Gucerât, Mâlvâ ve Orta Hindistan =====
//
// GUCERÂT: Vâghela racput hânedanı 1304'e kadar; Delhi Sultanlığı 1304-1407;
// Muzaffer Şah'ın 1407'de bağımsızlık ilânıyla Gucerât Sultanlığı; Ekber
// 1572 Kasım'ında Ahmedâbâd'ı, 1573 Şubat'ında Sûrat'ı aldı (TDV GUCERÂT).
// Maratha 1753'te Ahmedâbâd'a girdi; 1818'de İngiliz.

// Ahmedâbâd — Ahmed Şah 26 Şubat 1411'de kurdu (kur:); Gucerât
// Sultanlığı'nın başkenti.
{ ad:"Ahmedâbâd", tur:"sehir", lat:23.0230, lon:72.5710, g:1, k:0, d:[],
  kur:"1411-02-26",
  s:[{f:"1411-02-26", t:"1572-11-18", d:"gucerat-sultanligi"},
     {f:"1572-11-18", t:"1753-04-01", d:"babur-imparatorlugu"},
     {f:"1753-04-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Sûrat — Hint Okyanusu'nun en büyük Müslüman limanı ve Mekke yolunun
// çıkış kapısı; Osmanlı ile temasın olduğu tek Hint şehridir (1538 Diu
// kuşatmasında Süleyman Paşa donanması buradaydı). Şivâcî 1664 ve 1670'te
// iki kez yağmaladı ama şehri elde tutmadı — pencere AÇILMADI. İngiliz
// fabrikası 1612'de kuruldu, şehir idaresi 1759'da İngiliz'e geçti.
{ ad:"Sûrat", tur:"liman", lat:21.1700, lon:72.8310, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1573-02-26", d:"gucerat-sultanligi"},
     {f:"1573-02-26", t:"1759-03-04", d:"babur-imparatorlugu"},
     {f:"1759-03-04", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Kanbâyet (Cambay/Khambhat) — Gucerât'ın ortaçağdaki asıl limanı; körfezin
// dolmasıyla yerini Sûrat'a bıraktı. 1780'den sonra Bâbürlü nevâbının
// prens devleti olarak kaldı.
{ ad:"Kanbâyet (Khambhat)", tur:"liman", lat:22.3170, lon:72.6200, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1573-02-26", d:"gucerat-sultanligi"},
     {f:"1573-02-26", t:"1753-04-01", d:"babur-imparatorlugu"},
     {f:"1753-04-01", t:"1803-12-30", d:"maratha"},
     {f:"1803-12-30", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Diu — 1509 Diu deniz savaşı ve 1538 Osmanlı-Gucerât kuşatmasının sahnesi.
// Portekiz 1535'te kaleyi kurdu ve 1961'e kadar elinde tuttu; bu dosyadaki
// en uzun kesintisiz Avrupa penceresidir.
{ ad:"Diu", tur:"liman", lat:20.7140, lon:70.9850, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1535-10-25", d:"gucerat-sultanligi"},
     {f:"1535-10-25", t:"1923-10-29", d:"portekiz"}] },

// Cûnâgadh — Girnar eteğindeki racput kalesi; 1472'de Gucerât sultanı
// Mahmud Begada aldı, 1748'de Bâbürlü nevâbı bağımsızlaşarak prens devleti
// kurdu ve hânedan 1948'e kadar sürdü.
{ ad:"Cûnâgadh", tur:"kale", lat:21.5220, lon:70.4570, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1472-01-01", d:"racput"},
     {f:"1472-01-01", t:"1573-02-26", d:"gucerat-sultanligi"},
     {f:"1573-02-26", t:"1748-01-01", d:"babur-imparatorlugu"},
     {f:"1748-01-01", t:"1923-10-29", d:"cunagadh"}] },

// Bhuc (Kutch) — Câdeja racput hânedanı; 1549'da kuruldu, 1819'da İngiliz
// himayesine girdi ama taht sürdü.
{ ad:"Bhuc (Kutch)", tur:"sehir", lat:23.2420, lon:69.6670, g:0, k:0, d:[],
  kur:"1510-01-01",
  s:[{f:"1510-01-01", t:"1923-10-29", d:"racput"}] },

// Patan (Anhilvâda) — Vâghela başkenti; 1304'te Delhi'ye, 1411'de
// Ahmedâbâd'ın kurulmasıyla ikinci sıraya düştü.
{ ad:"Patan (Anhilvâda)", tur:"sehir", lat:23.8500, lon:72.1260, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1572-11-18", d:"gucerat-sultanligi"},
     {f:"1572-11-18", t:"1753-04-01", d:"babur-imparatorlugu"},
     {f:"1753-04-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Çampâner — Gucerât sultanı Mahmud Begada 1484'te aldı ve 1535'e kadar
// başkent yaptı; Hümâyûn'un 1535 seferinden sonra terk edildi ve bir daha
// toparlanamadı. bit: YAZILMADI çünkü şehir bütünüyle yok olmadı, küçüldü.
{ ad:"Çampâner", tur:"kale", lat:22.4860, lon:73.5370, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1484-01-01", d:"delhi-sultanligi"},
     {f:"1484-01-01", t:"1573-02-26", d:"gucerat-sultanligi"},
     {f:"1573-02-26", t:"1753-04-01", d:"babur-imparatorlugu"},
     {f:"1753-04-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Broaç (Bharuch)", tur:"liman", lat:21.7153, lon:72.9950, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1573-02-26", d:"gucerat-sultanligi"},
     {f:"1573-02-26", t:"1772-11-18", d:"babur-imparatorlugu"},
     {f:"1772-11-18", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// MÂLVÂ: Delhi 1305'te aldı; Dilâver Han 1392'de bağımsızlığını ilân etti
// (TDV MÂLVÂ). Gucerât 1531-1535 arasında işgal etti. Bâz Bahadır'ın
// yenilgisiyle 29 Mart 1561'de Bâbürlü'ye geçti. 1732'den sonra Maratha.

// Mandu (Mândû) — Mâlvâ Sultanlığı'nın başkenti.
{ ad:"Mandu (Mândû)", tur:"kale", lat:22.3360, lon:75.4030, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1305-01-01", d:"racput"},
     {f:"1305-01-01", t:"1392-01-01", d:"delhi-sultanligi"},
     {f:"1392-01-01", t:"1531-01-01", d:"malva-sultanligi"},
     {f:"1531-01-01", t:"1535-01-01", d:"gucerat-sultanligi"},
     {f:"1535-01-01", t:"1561-03-29", d:"malva-sultanligi"},
     {f:"1561-03-29", t:"1732-01-01", d:"babur-imparatorlugu"},
     {f:"1732-01-01", t:"1923-10-29", d:"maratha"}] },

{ ad:"Uccayn (Ujjain)", tur:"sehir", lat:23.1790, lon:75.7850, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1305-01-01", d:"racput"},
     {f:"1305-01-01", t:"1392-01-01", d:"delhi-sultanligi"},
     {f:"1392-01-01", t:"1561-03-29", d:"malva-sultanligi"},
     {f:"1561-03-29", t:"1732-01-01", d:"babur-imparatorlugu"},
     {f:"1732-01-01", t:"1923-10-29", d:"maratha"}] },

// İndor — Holkar hânedanının merkezi; Malhar Rao Holkar 1733'ten itibaren
// buradan yönetti, şehir 1715 civarında pazar yeri olarak kuruldu.
// Kesin gün bilinmediği için kur: YYYY-01-01 yazıldı.
{ ad:"İndor (Indore)", tur:"sehir", lat:22.7200, lon:75.8580, g:0, k:0, d:[],
  kur:"1715-01-01",
  s:[{f:"1715-01-01", t:"1732-01-01", d:"babur-imparatorlugu"},
     {f:"1732-01-01", t:"1923-10-29", d:"maratha"}] },

// Gvalyar — Hindistan'ın en güçlü kalelerinden; Tomar racputları 1398-1518,
// Delhi 1518-1526, Bâbürlü, 1784'ten sonra Şinde (Maratha) hânedanının
// merkezi ve 1948'e kadar prens devleti.
{ ad:"Gvalyar (Gwalior)", tur:"kale", lat:26.2180, lon:78.1830, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1398-01-01", d:"delhi-sultanligi"},
     {f:"1398-01-01", t:"1518-01-01", d:"racput"},
     {f:"1518-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1784-01-01", d:"babur-imparatorlugu"},
     {f:"1784-01-01", t:"1923-10-29", d:"maratha"}] },

// Bhopâl — Afgan asıllı Dost Muhammed Han 1707'den sonra kurdu; 1818'de
// İngiliz himayesine giren prens devleti, hânedan 1949'a kadar sürdü.
{ ad:"Bhopâl", tur:"sehir", lat:23.2590, lon:77.4130, g:0, k:0, d:[],
  kur:"1707-01-01",
  s:[{f:"1707-01-01", t:"1923-10-29", d:"bhopal"}] },

// Nagpûr — Bhonsle Maratha hânedanının merkezi; Gond krallığından 1743'te
// alındı, 1853'te "lapse" doktriniyle ilhak edildi.
{ ad:"Nagpûr", tur:"sehir", lat:21.1460, lon:79.0880, g:1, k:0, d:[],
  kur:"1702-01-01",
  s:[{f:"1702-01-01", t:"1743-01-01", d:"gond-kralliklari"},
     {f:"1743-01-01", t:"1853-12-11", d:"maratha"},
     {f:"1853-12-11", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Cabalpûr — Gond Garha-Mandla krallığı; Ekber 1564'te vergiye bağladı ama
// hânedan sürdü. 1781'de Maratha, 1818'de İngiliz.
{ ad:"Cabalpûr (Jabalpur)", tur:"sehir", lat:23.1810, lon:79.9870, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1781-01-01", d:"gond-kralliklari"},
     {f:"1781-01-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// ===== 1f. Bihâr, Bengal ve Orissa =====
//
// BENGAL STANDART ZİNCİRİ (TDV BENGAL):
//   1281 → 1338            delhi-sultanligi
//   1338 → 1538            bengal-sultanligi  (Fahreddin Mübârek Şah'ın
//                          Sonârgâon'da bağımsızlık ilânı; 1352'de İlyas Şah
//                          bütün Bengal'i birleştirdi — tek kimlik)
//   1538 → 1564            sur-hanedani       (Şîr Şah'ın Gaur'u alması)
//   1564 → 1576-07-12      bengal-sultanligi  (Karrânî hânedanı)
//   1576-07-12 → 1717      babur-imparatorlugu (Râcmahal Muharebesi)
//   1717 → 1757-06-23      bengal-nevabligi   (Murşid Kulı Han'ın fiilî
//                          bağımsızlığı; hutbe Bâbürlü adına okunmaya devam
//                          etti ama toprağı nevâb yönetti)
//   1757-06-23 → 1923      ingiliz-hindistani (Palaşi)
// ⚠️ Diwânî'nin 12 Ağustos 1765'te alınması İDARÎ bir devirdir; toprak
// denetimi Palaşi ile değiştiği için eşik 1757 seçildi.

// Patna (Azîmâbâd) — Bihâr'ın merkezi. Bihâr 1497'de Bengal'in Hüseyin Şâhî
// hânedanına geçti; Şîr Şah Sûr'un çıkış bölgesidir. Ekber 3 Ağustos
// 1574'te aldı. 22 Ekim 1764 Bakser Muharebesi bu şehrin yukarısındadır.
{ ad:"Patna (Azîmâbâd)", tur:"sehir", lat:25.5940, lon:85.1380, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1497-01-01", d:"delhi-sultanligi"},
     {f:"1497-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1574-08-03", d:"bengal-sultanligi"},
     {f:"1574-08-03", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1764-10-22", d:"bengal-nevabligi"},
     {f:"1764-10-22", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Gayâ", tur:"sehir", lat:24.7960, lon:85.0010, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1497-01-01", d:"delhi-sultanligi"},
     {f:"1497-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1574-08-03", d:"bengal-sultanligi"},
     {f:"1574-08-03", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1764-10-22", d:"bengal-nevabligi"},
     {f:"1764-10-22", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Mungîr (Monghyr)", tur:"kale", lat:25.3750, lon:86.4740, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1764-10-22", d:"bengal-nevabligi"},
     {f:"1764-10-22", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Bhâgalpûr", tur:"sehir", lat:25.2440, lon:86.9820, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Gaur (Lakhnautî) — Bengal Sultanlığı'nın başkenti. 1575 vebasından sonra
// terk edildi; bit: bu yüzden yazıldı. Sahiplik zinciri Oturum 4'ün Köhne
// Ürgenç deseni gereği 1923'e kadar TAM bırakıldı — nokta yok olsa da
// peteğin sahibi bilinmeye devam ediyor.
{ ad:"Gaur (Lakhnautî)", tur:"sehir", lat:24.8680, lon:88.1330, g:1, k:0, d:[],
  bit:"1575-01-01",
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Pandua (Hazret Pandua) — Bengal'in 1342-1453 arası başkenti; Gaur'a
// 30 km, 3 km kuralını rahatça geçiyor.
{ ad:"Pandua (Hazret Pandua)", tur:"sehir", lat:25.1350, lon:88.1500, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Râcmahal — Man Singh 1592'de Bâbürlü Bengal'inin başkenti yaptı (kur:).
// 12 Temmuz 1576'daki Râcmahal Muharebesi Bengal Sultanlığı'nı bitirdi.
{ ad:"Râcmahal", tur:"sehir", lat:25.0520, lon:87.8360, g:0, k:0, d:[],
  kur:"1592-01-01",
  s:[{f:"1592-01-01", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Murşidâbâd — Murşid Kulı Han 1704'te kurdu ve nevâblığın başkenti yaptı
// (kur:). Palaşi'den sonra da nevâb sarayı burada kaldı ama toprak
// denetimi İngiliz'e geçtiği için kimlik 1757'de değişir.
{ ad:"Murşidâbâd", tur:"sehir", lat:24.1800, lon:88.2700, g:1, k:0, d:[],
  kur:"1704-01-01",
  s:[{f:"1704-01-01", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Dakka (Cihângîrnagar) — İslâm Han 1610'da Bâbürlü Bengal'inin başkenti
// yaptı; şehir daha eskidir, bu yüzden kur: YAZILMADI.
{ ad:"Dakka (Dhaka)", tur:"sehir", lat:23.8110, lon:90.4130, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Sonârgâon — 1338'de Fahreddin Mübârek Şah'ın bağımsızlık ilân ettiği yer,
// yani Bengal Sultanlığı'nın doğduğu şehir. Dakka'ya 34 km.
{ ad:"Sonârgâon", tur:"sehir", lat:23.6460, lon:90.5990, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Çatgam (Chittagong) — Bengal ile Arakan arasında yüzyıllarca el değiştirdi.
// Mrauk U 1459'da aldı; Bâbürlü vali Şâyeste Han 27 Ocak 1666'da geri aldı
// ve şehre İslâmâbâd adını verdi.
{ ad:"Çatgam (Chittagong)", tur:"liman", lat:22.3350, lon:91.8340, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1459-01-01", d:"bengal-sultanligi"},
     {f:"1459-01-01", t:"1666-01-27", d:"arakan"},
     {f:"1666-01-27", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1760-10-11", d:"bengal-nevabligi"},
     {f:"1760-10-11", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Kalküta — Job Charnock'un 24 Ağustos 1690'da kurduğu ticaret merkezi
// (kur:). 1690 öncesi boşluk KASITLIDIR. 1756 Haziran'ında Sirâceddevle
// şehri aldı ve altı ay elinde tuttu; 2 Ocak 1757'de Clive geri aldı —
// gerçek bir el değiştirme olduğu için ayrı pencere açıldı.
{ ad:"Kalküta", tur:"liman", lat:22.5720, lon:88.3640, g:2, k:0, d:[],
  kur:"1690-08-24",
  s:[{f:"1690-08-24", t:"1756-06-20", d:"ingiltere"},
     {f:"1756-06-20", t:"1757-01-02", d:"bengal-nevabligi"},
     {f:"1757-01-02", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Hûglî — Portekiz 1580'de kurdu, Şah Cihan 1632'de zaptetti; Bengal'in
// ilk Avrupa yerleşimidir.
{ ad:"Hûglî (Hooghly)", tur:"liman", lat:22.8970, lon:88.3900, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1580-01-01", d:"babur-imparatorlugu"},
     {f:"1580-01-01", t:"1632-06-24", d:"portekiz"},
     {f:"1632-06-24", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Çandernagor — Fransız Bengal'i, 1688'de kuruldu (kur:). Hûglî'ye 5.1 km;
// 3 km kuralını geçiyor ve iki ayrı devletin toprağı olduğu için ikisi de
// tutuldu. 23 Mart 1757'de Clive aldı, 1763'te iade edildi, 1793-1815 arası
// tekrar İngiliz işgalinde kaldı, sonra 1950'ye kadar Fransız.
{ ad:"Çandernagor", tur:"liman", lat:22.8620, lon:88.3570, g:0, k:0, d:[],
  kur:"1688-01-01",
  s:[{f:"1688-01-01", t:"1757-03-23", d:"fransa"},
     {f:"1757-03-23", t:"1763-02-10", d:"ingiltere"},
     {f:"1763-02-10", t:"1793-06-10", d:"fransa"},
     {f:"1793-06-10", t:"1816-12-04", d:"ingiltere"},
     {f:"1816-12-04", t:"1923-10-29", d:"fransa"}] },

// ORISSA: Doğu Ganga (1281-1434) ve Gacapati (1434-1568) hânedanları tek
// "orissa" kimliğinde; ikisi de aynı krallığın hânedanlarıdır. 1568'de
// Bengal'in Karrânî hânedanı aldı, 1592'de Bâbürlü, 1751'de Nagpûr
// Bhonsle'si (Maratha), 1803'te İngiliz.

{ ad:"Kattak (Cuttack)", tur:"sehir", lat:20.4630, lon:85.8830, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1568-01-01", d:"orissa"},
     {f:"1568-01-01", t:"1592-01-01", d:"bengal-sultanligi"},
     {f:"1592-01-01", t:"1751-05-17", d:"babur-imparatorlugu"},
     {f:"1751-05-17", t:"1803-10-14", d:"maratha"},
     {f:"1803-10-14", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Puri", tur:"sehir", lat:19.8130, lon:85.8310, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1568-01-01", d:"orissa"},
     {f:"1568-01-01", t:"1592-01-01", d:"bengal-sultanligi"},
     {f:"1592-01-01", t:"1751-05-17", d:"babur-imparatorlugu"},
     {f:"1751-05-17", t:"1803-10-14", d:"maratha"},
     {f:"1803-10-14", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Bâlâsor — İngiliz Doğu Hindistan Şirketi'nin Bengal'deki İLK fabrikası
// (1633); Kalküta'dan 57 yıl önce.
{ ad:"Bâlâsor (Balasore)", tur:"liman", lat:21.4940, lon:86.9330, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1568-01-01", d:"orissa"},
     {f:"1568-01-01", t:"1592-01-01", d:"bengal-sultanligi"},
     {f:"1592-01-01", t:"1751-05-17", d:"babur-imparatorlugu"},
     {f:"1751-05-17", t:"1803-10-14", d:"maratha"},
     {f:"1803-10-14", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// ASSAM — Ahom krallığı 1228'de kuruldu ve altı yüzyıl boyunca hem
// Bâbürlü hem Bengal saldırılarını püskürttü (1671 Saraighat). Birmanya
// 1817-1826 arasında işgal etti; 24 Şubat 1826 Yandabo Antlaşması ile
// Assam İngilizlere geçti.
{ ad:"Gauhâtî (Guwahati)", tur:"sehir", lat:26.1450, lon:91.7360, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1817-01-01", d:"ahom"},
     {f:"1817-01-01", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Rangpûr (Sibsâgar) — Ahom krallığının 1699'dan sonraki başkenti.
{ ad:"Sibsâgar (Rangpûr)", tur:"sehir", lat:26.9850, lon:94.6380, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1817-01-01", d:"ahom"},
     {f:"1817-01-01", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Manipûr — Ahom ile Birmanya arasındaki dağ krallığı; 1819-1826 Birman
// işgali, 1826'dan sonra İngiliz himayesinde prens devleti, 1891'de
// doğrudan idareye alındı.
{ ad:"İmphâl (Manipûr)", tur:"sehir", lat:24.8170, lon:93.9370, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1819-01-01", d:"manipur"},
     {f:"1819-01-01", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1923-10-29", d:"manipur"}] },

// ###########################################################################
// BÖLÜM 2 — DEKKEN ve GÜNEY HİNDİSTAN
// ###########################################################################
//
// ZEMİN 1281: Dekken üç Hindu krallığın elindedir — Yâdava (Devagiri),
// Kâkatiya (Varangal), Hoysala (Dvârasamudra); güneyde Pândya (Madurai).
// Alâeddin Halacî 1296'da Devagiri'ye ilk akını yaptı; 1311-1323 arasında
// dördü de Delhi'ye bağlandı. 3 Ağustos 1347'de Behmenî Sultanlığı kuruldu.
// 1490'da Behmenî beşe bölündü ve BU BEŞ DEVLET AYNI ANDA SAHNEDEDİR:
//     ahmednagar (Nizâmşâhî) · bicapur (Âdilşâhî) · golkonda (Kutubşâhî) ·
//     berar (İmâdşâhî) · bidar (Barîdşâhî)
// Bu yüzden beşi ayrı kimlik aldı (dosya başlığındaki granülerlik kuralı).
// Evrengzîb 12 Eylül 1686'da Bîcâpur'u, 21 Eylül 1687'de Golkonda'yı aldı.
// 1724'te Nizâmülmülk Âsafcâh fiilen bağımsızlaştı (11 Ekim 1724 Şeker
// Khedâ Muharebesi) ve Haydarâbâd Nizamlığı doğdu.

// ===== 2a. Kuzey Dekken =====

// Devagiri (Devletâbâd) — Yâdava başkenti; Muhammed b. Tuğluk 1327'de
// Delhi'nin nüfusunu buraya sürdü ve şehre Devletâbâd adını verdi.
{ ad:"Devagiri (Devletâbâd)", tur:"kale", lat:19.9430, lon:75.2200, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1499-01-01", d:"behmeni"},
     {f:"1499-01-01", t:"1633-06-28", d:"ahmednagar"},
     {f:"1633-06-28", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1923-10-29", d:"haydarabad-nizam"}] },

// Evrengâbâd — Melik Anber 1610'da Hadkî adıyla kurdu (kur:); Evrengzîb
// 1681-1707 arasında Dekken seferlerinin karargâhı yaptı. Devagiri'ye
// 14.7 km, 3 km kuralının çok üstünde.
{ ad:"Evrengâbâd", tur:"sehir", lat:19.8770, lon:75.3430, g:1, k:0, d:[],
  kur:"1610-01-01",
  s:[{f:"1610-01-01", t:"1633-06-28", d:"ahmednagar"},
     {f:"1633-06-28", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1923-10-29", d:"haydarabad-nizam"}] },

// Ahmednagar — Ahmed Nizâm Şah 1490'da kurdu (kur:) ve Nizâmşâhî
// hânedanına adını verdi. Ekber'in ordusu 1600'de aldı ama devlet Melik
// Anber ile 1636'ya kadar direndi; başkent düştüğü için nokta 1600'de
// Bâbürlü olur. Wellesley 12 Ağustos 1803'te zaptetti.
{ ad:"Ahmednagar", tur:"sehir", lat:19.0950, lon:74.7480, g:1, k:0, d:[],
  kur:"1490-01-01",
  s:[{f:"1490-01-01", t:"1600-08-28", d:"ahmednagar"},
     {f:"1600-08-28", t:"1759-01-01", d:"babur-imparatorlugu"},
     {f:"1759-01-01", t:"1803-08-12", d:"maratha"},
     {f:"1803-08-12", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Elicpûr (Achalpur) — Berâr'ın İmâdşâhî başkenti; 1574'te Ahmednagar
// ilhak etti. 1853'te Berâr, Nizam'ın borcuna karşılık İngiliz idaresine
// "devredilen bölgeler" (assigned districts) oldu — taht Nizam'da kaldı
// ama toprağı İngiliz yönetti, bu yüzden kimlik değişir.
{ ad:"Elicpûr (Achalpur)", tur:"sehir", lat:21.2570, lon:77.5120, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1574-01-01", d:"berar"},
     {f:"1574-01-01", t:"1596-01-01", d:"ahmednagar"},
     {f:"1596-01-01", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1853-05-21", d:"haydarabad-nizam"},
     {f:"1853-05-21", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Bîdar — Behmenî başkenti 1432'den itibaren; 1489'da Barîdşâhî hânedanı
// bağımsızlaştı, 1619'da Bîcâpur ilhak etti, 1657'de Evrengzîb aldı.
{ ad:"Bîdar", tur:"kale", lat:17.9130, lon:77.5200, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1322-01-01", d:"kakatiya"},
     {f:"1322-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1489-01-01", d:"behmeni"},
     {f:"1489-01-01", t:"1619-01-01", d:"bidar"},
     {f:"1619-01-01", t:"1657-03-29", d:"bicapur"},
     {f:"1657-03-29", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1923-10-29", d:"haydarabad-nizam"}] },

// Gülberge (Gulbarga) — Behmenî'nin İLK başkenti (1347-1432); devletin
// kurulduğu şehirdir.
{ ad:"Gülberge (Gulbarga)", tur:"sehir", lat:17.3300, lon:76.8340, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1489-01-01", d:"behmeni"},
     {f:"1489-01-01", t:"1619-01-01", d:"bidar"},
     {f:"1619-01-01", t:"1686-09-12", d:"bicapur"},
     {f:"1686-09-12", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1923-10-29", d:"haydarabad-nizam"}] },

// Bîcâpur — Âdilşâhî hânedanının başkenti; Evrengzîb 12 Eylül 1686'da
// on beş aylık kuşatmadan sonra aldı.
{ ad:"Bîcâpur (Bijapur)", tur:"sehir", lat:16.8270, lon:75.7100, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1686-09-12", d:"bicapur"},
     {f:"1686-09-12", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1760-01-01", d:"haydarabad-nizam"},
     {f:"1760-01-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Golkonda — Kutubşâhî kalesi; Evrengzîb 21 Eylül 1687'de sekiz aylık
// kuşatmadan sonra aldı ve Dekken'in son bağımsız sultanlığı bitti.
// Haydarâbâd'a 9.1 km — 3 km kuralının üstünde, ikisi de tutuldu çünkü
// biri kale biri şehirdir ve 1591-1687 arasında ikisi de ayakta.
{ ad:"Golkonda", tur:"kale", lat:17.3830, lon:78.4010, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1512-01-01", d:"behmeni"},
     {f:"1512-01-01", t:"1687-09-21", d:"golkonda"},
     {f:"1687-09-21", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1923-10-29", d:"haydarabad-nizam"}] },

// Haydarâbâd (Dekken) — Muhammed Kulı Kutub Şah 1591'de kurdu (kur:);
// 1724'ten sonra Nizamlığın başkenti ve Hindistan'ın en büyük prens
// devleti. 1798 yardımcı ittifakı ve 1857 sonrası himâye taht'ı
// değiştirmediği için kimlik 1923'e kadar sabittir.
{ ad:"Haydarâbâd (Dekken)", tur:"sehir", lat:17.3850, lon:78.4870, g:2, k:0, d:[],
  kur:"1591-01-01",
  s:[{f:"1591-01-01", t:"1687-09-21", d:"golkonda"},
     {f:"1687-09-21", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1923-10-29", d:"haydarabad-nizam"}] },

// Varangal — Kâkatiya başkenti; Uluğ Han (sonradan Muhammed b. Tuğluk)
// 1323'te aldı. 1336-1361 arasında Musunuri nâyakları Delhi idaresini
// kovup bölgeyi yönetti; bu pencere "nayak-devletleri" kimliğiyle
// yazıldı — aynı kimlik güneyde Vijayanagara sonrası nâyaklıklarını da
// kapsıyor ve ikisi de "yerel Telugu/Tamil beyliği" anlamındadır.
{ ad:"Varangal (Warangal)", tur:"kale", lat:17.9780, lon:79.5940, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1336-01-01", d:"delhi-sultanligi"},
     {f:"1336-01-01", t:"1361-01-01", d:"nayak-devletleri"},
     {f:"1361-01-01", t:"1512-01-01", d:"behmeni"},
     {f:"1512-01-01", t:"1687-09-21", d:"golkonda"},
     {f:"1687-09-21", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1923-10-29", d:"haydarabad-nizam"}] },

// ===== 2b. Maratha yurdu ve batı kıyısı =====
//
// Şivâcî 6 Haziran 1674'te Raygad'da taç giydi — Maratha devletinin resmî
// kuruluş tarihidir. 1818'de Peşvâlık sona erdi ama Şinde (Gvalyar),
// Holkar (İndor), Gaikvad (Baroda), Bhonsle (Nagpûr, Kolhapûr) hânedanları
// prens devleti olarak sürdü; dosya kuralı gereği onlar "maratha" kalır.

{ ad:"Pûne (Poona)", tur:"sehir", lat:18.5200, lon:73.8560, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1636-01-01", d:"ahmednagar"},
     {f:"1636-01-01", t:"1674-06-06", d:"bicapur"},
     {f:"1674-06-06", t:"1817-11-17", d:"maratha"},
     {f:"1817-11-17", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Raygad — Şivâcî'nin başkenti. Evrengzîb 3 Kasım 1689'da aldı, Marathalar
// 1733'te geri aldı, İngilizler 9 Mayıs 1818'de.
{ ad:"Raygad", tur:"kale", lat:18.2340, lon:73.4410, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1636-01-01", d:"ahmednagar"},
     {f:"1636-01-01", t:"1674-06-06", d:"bicapur"},
     {f:"1674-06-06", t:"1689-11-03", d:"maratha"},
     {f:"1689-11-03", t:"1733-01-01", d:"babur-imparatorlugu"},
     {f:"1733-01-01", t:"1818-05-09", d:"maratha"},
     {f:"1818-05-09", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Satâra — 1708-1818 arası Maratha çhatrapatilerinin makamı; 1818'de
// prens devleti oldu, 1848'de "lapse" doktriniyle ilhak edildi.
{ ad:"Satâra", tur:"sehir", lat:17.6860, lon:74.0070, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1674-06-06", d:"bicapur"},
     {f:"1674-06-06", t:"1848-04-05", d:"maratha"},
     {f:"1848-04-05", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Kolhapûr — Şivâcî soyunun ikinci kolu; 1949'a kadar prens devleti kaldı,
// bu yüzden 1923'e kadar "maratha".
{ ad:"Kolhapûr", tur:"sehir", lat:16.7050, lon:74.2430, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1659-01-01", d:"bicapur"},
     {f:"1659-01-01", t:"1923-10-29", d:"maratha"}] },

{ ad:"Nâsik", tur:"sehir", lat:19.9980, lon:73.7900, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1636-01-01", d:"ahmednagar"},
     {f:"1636-01-01", t:"1760-01-01", d:"babur-imparatorlugu"},
     {f:"1760-01-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Bombay — yedi adanın Portekiz'e geçişi 23 Aralık 1534 Bassein
// Antlaşması'yladır. 1661 evlilik antlaşmasıyla İngiltere'ye verildi,
// fiilî devir 18 Şubat 1665'te oldu; 27 Mart 1668'de Şirket'e kiralandı.
{ ad:"Bombay", tur:"liman", lat:18.9418, lon:72.8265, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1534-12-23", d:"gucerat-sultanligi"},
     {f:"1534-12-23", t:"1665-02-18", d:"portekiz"},
     {f:"1665-02-18", t:"1757-06-23", d:"ingiltere"},
     {f:"1757-06-23", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Çaul — Portekiz'in Bombay'dan eski limanı (1521); Marathalar 1740'ta
// aldı. Bombay'a 43 km.
{ ad:"Çaul (Chaul)", tur:"liman", lat:18.5600, lon:72.9200, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1521-01-01", d:"ahmednagar"},
     {f:"1521-01-01", t:"1740-01-01", d:"portekiz"},
     {f:"1740-01-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Goa — Albuquerque 25 Kasım 1510'da Bîcâpur'dan aldı; Portekiz Hindistanı'nın
// başkenti ve 1961'e kadar Portekiz toprağı. Bu dosyadaki en uzun ikinci
// Avrupa penceresi.
{ ad:"Goa", tur:"liman", lat:15.5030, lon:73.9120, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1510-11-25", d:"bicapur"},
     {f:"1510-11-25", t:"1923-10-29", d:"portekiz"}] },

{ ad:"Mangalor", tur:"liman", lat:12.9140, lon:74.8560, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1343-01-01", d:"hoysala"},
     {f:"1343-01-01", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1763-01-01", d:"nayak-devletleri"},
     {f:"1763-01-01", t:"1799-05-04", d:"meysur"},
     {f:"1799-05-04", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// ===== 2c. Vijayanagara ve Karnataka =====

// Vijayanagara (Hampi) — 1336'da kuruldu (kur:), 26 Ocak 1565 Talikota
// Muharebesi'nden sonra yağmalandı ve terk edildi (bit:). Sahiplik zinciri
// 1923'e kadar TAM bırakıldı; bölgenin sahibi Bîcâpur → Bâbürlü → Nizam →
// 1800 "devredilen bölgeler" ile İngiliz.
{ ad:"Vijayanagara (Hampi)", tur:"sehir", lat:15.3350, lon:76.4620, g:2, k:0, d:[],
  kur:"1336-01-01", bit:"1565-01-26",
  s:[{f:"1336-01-01", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1686-09-12", d:"bicapur"},
     {f:"1686-09-12", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1800-10-12", d:"haydarabad-nizam"},
     {f:"1800-10-12", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Raycur (Raichur) — Krişna ile Tungabhadra arasındaki "Raycur doâbı",
// Vijayanagara ile Bîcâpur'un yüz yıllık kavga konusu. Krişnadevarâya
// 19 Mayıs 1520'de aldı.
{ ad:"Raycur (Raichur)", tur:"kale", lat:16.2070, lon:77.3550, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1520-05-19", d:"bicapur"},
     {f:"1520-05-19", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1686-09-12", d:"bicapur"},
     {f:"1686-09-12", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1923-10-29", d:"haydarabad-nizam"}] },

// Kurnûl — 1751-1839 arası Kurnûl nevâblığı; Nizam'ın tâbii sayıldığı için
// ayrı kimlik açılmadı. 12 Ekim 1800'de "devredilen bölgeler" ile İngiliz.
{ ad:"Kurnûl (Kurnool)", tur:"sehir", lat:15.8280, lon:78.0370, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1686-09-12", d:"bicapur"},
     {f:"1686-09-12", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1800-10-12", d:"haydarabad-nizam"},
     {f:"1800-10-12", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Bangalor — Kempe Gowda 1537'de kurdu (kur:); 1687'de Bîcâpur'dan
// Meysûr'a satıldı. Cornwallis 21 Mart 1791'de aldı ama 1792 Seringapatam
// Antlaşması'yla Tipu'ya iade edildi — bu yüzden ayrı pencere AÇILMADI.
{ ad:"Bangalor", tur:"sehir", lat:12.9720, lon:77.5940, g:1, k:0, d:[],
  kur:"1537-01-01",
  s:[{f:"1537-01-01", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1687-01-01", d:"bicapur"},
     {f:"1687-01-01", t:"1923-10-29", d:"meysur"}] },

// MEYSÛR — Vodeyar hânedanı 1399'dan beri Vijayanagara'nın tâbiidir;
// Talikota'dan sonra bağımsızlaştı. Haydar Ali 1761'de, Tipu Sultan
// 1782'de yönetimi aldı; Tipu 4 Mayıs 1799'da Seringapatam'da öldü ve
// Vodeyar hânedanı İngiliz himayesinde tahta iade edildi. Devletler.js
// aralığı (1761-1799) Haydar Ali-Tipu evresini esas alır; bu dosyada
// kimlik krallığın TAMAMINI kapsar, çünkü haritada boyanan toprak aynıdır.
{ ad:"Seringapatam (Şrirangapatnam)", tur:"kale", lat:12.4120, lon:76.6940, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1343-01-01", d:"hoysala"},
     {f:"1343-01-01", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1923-10-29", d:"meysur"}] },

// Meysûr — Seringapatam'a 13 km; 1799'dan sonra krallığın başkenti oldu.
{ ad:"Meysûr (Mysore)", tur:"sehir", lat:12.2950, lon:76.6390, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1343-01-01", d:"hoysala"},
     {f:"1343-01-01", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1923-10-29", d:"meysur"}] },

// ===== 2d. Koromandel ve Tamil ülkesi =====

// Madras — Francis Day 22 Ağustos 1639'da Vijayanagara nâyabından aldığı
// beratla Fort St. George'u kurdu (kur:). La Bourdonnais 21 Eylül 1746'da
// Fransızlara aldı, 1748 Aachen Antlaşması ile 1749'da iade edildi.
{ ad:"Madras (Chennai)", tur:"liman", lat:13.0830, lon:80.2700, g:2, k:0, d:[],
  kur:"1639-08-22",
  s:[{f:"1639-08-22", t:"1746-09-21", d:"ingiltere"},
     {f:"1746-09-21", t:"1749-08-21", d:"fransa"},
     {f:"1749-08-21", t:"1757-06-23", d:"ingiltere"},
     {f:"1757-06-23", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Pondişeri — Fransız Hindistanı'nın başkenti, 1674'te kuruldu (kur:).
// Beş kez el değiştirdi: 1693 Hollanda, 1699 iade; 1761 İngiliz, 1765
// iade; 1778 İngiliz, 1785 iade; 1793 İngiliz, 1816 iade. Bu dosyadaki
// en çok kırılan noktadır ve hepsi belgelidir.
{ ad:"Pondişeri", tur:"liman", lat:11.9340, lon:79.8300, g:1, k:0, d:[],
  kur:"1674-01-01",
  s:[{f:"1674-01-01", t:"1693-09-06", d:"fransa"},
     {f:"1693-09-06", t:"1699-09-01", d:"hollanda"},
     {f:"1699-09-01", t:"1761-01-16", d:"fransa"},
     {f:"1761-01-16", t:"1765-01-01", d:"ingiltere"},
     {f:"1765-01-01", t:"1778-10-18", d:"fransa"},
     {f:"1778-10-18", t:"1785-01-01", d:"ingiltere"},
     {f:"1785-01-01", t:"1793-08-23", d:"fransa"},
     {f:"1793-08-23", t:"1816-12-04", d:"ingiltere"},
     {f:"1816-12-04", t:"1923-10-29", d:"fransa"}] },

// Nagapatnam — Portekiz 1554, Hollanda 1658 (Hollanda Koromandel'inin
// başkenti), İngiliz 12 Kasım 1781.
{ ad:"Nagapatnam", tur:"liman", lat:10.7660, lon:79.8430, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1335-01-01", d:"delhi-sultanligi"},
     {f:"1335-01-01", t:"1378-01-01", d:"madurai-sultanligi"},
     {f:"1378-01-01", t:"1554-01-01", d:"vijayanagara"},
     {f:"1554-01-01", t:"1658-01-01", d:"portekiz"},
     {f:"1658-01-01", t:"1781-11-12", d:"hollanda"},
     {f:"1781-11-12", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Tranquebar — Danimarka Doğu Hindistan Şirketi 19 Kasım 1620'de Tanjur
// nâyabından kiraladı; 1845'te İngiltere'ye satıldı. Bu coğrafyadaki tek
// Danimarka noktasıdır. Nagapatnam'a 30 km.
{ ad:"Tranquebar (Tharangambadi)", tur:"liman", lat:11.0290, lon:79.8510, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1335-01-01", d:"delhi-sultanligi"},
     {f:"1335-01-01", t:"1378-01-01", d:"madurai-sultanligi"},
     {f:"1378-01-01", t:"1532-01-01", d:"vijayanagara"},
     {f:"1532-01-01", t:"1620-11-19", d:"nayak-devletleri"},
     {f:"1620-11-19", t:"1845-02-22", d:"danimarka"},
     {f:"1845-02-22", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Tancûr (Thanjavur) — 1674'te Şivâcî'nin üvey kardeşi Venkocî burada
// Maratha hânedanı kurdu ve 1855'e kadar sürdü; 1799'da toprak idaresi
// İngiliz'e devredildi.
{ ad:"Tancûr (Thanjavur)", tur:"sehir", lat:10.7870, lon:79.1380, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1335-01-01", d:"delhi-sultanligi"},
     {f:"1335-01-01", t:"1378-01-01", d:"madurai-sultanligi"},
     {f:"1378-01-01", t:"1532-01-01", d:"vijayanagara"},
     {f:"1532-01-01", t:"1674-01-01", d:"nayak-devletleri"},
     {f:"1674-01-01", t:"1799-10-25", d:"maratha"},
     {f:"1799-10-25", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Madurai — Pândya başkenti; Malik Kâfûr 1311'de yağmaladı, 1335'te
// Ma'ber (Madurai) Sultanlığı kuruldu ve 1378'de Vijayanagara yıktı.
{ ad:"Madurai", tur:"sehir", lat:9.9250, lon:78.1190, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1335-01-01", d:"delhi-sultanligi"},
     {f:"1335-01-01", t:"1378-01-01", d:"madurai-sultanligi"},
     {f:"1378-01-01", t:"1529-01-01", d:"vijayanagara"},
     {f:"1529-01-01", t:"1736-01-01", d:"nayak-devletleri"},
     {f:"1736-01-01", t:"1801-07-31", d:"karnatik"},
     {f:"1801-07-31", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Trichinopoly (Tiruchirappalli)", tur:"kale", lat:10.7900, lon:78.7040, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1335-01-01", d:"delhi-sultanligi"},
     {f:"1335-01-01", t:"1378-01-01", d:"madurai-sultanligi"},
     {f:"1378-01-01", t:"1529-01-01", d:"vijayanagara"},
     {f:"1529-01-01", t:"1736-01-01", d:"nayak-devletleri"},
     {f:"1736-01-01", t:"1801-07-31", d:"karnatik"},
     {f:"1801-07-31", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Cinci (Gingee) — Hindistan'ın en sarp kalelerinden; Bîcâpur 1649,
// Maratha 1677, Bâbürlü 1698 (sekiz yıllık kuşatma), Fransız 1750,
// İngiliz 1761.
{ ad:"Cinci (Gingee)", tur:"kale", lat:12.2520, lon:79.3970, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1378-01-01", d:"delhi-sultanligi"},
     {f:"1378-01-01", t:"1509-01-01", d:"vijayanagara"},
     {f:"1509-01-01", t:"1649-01-01", d:"nayak-devletleri"},
     {f:"1649-01-01", t:"1677-05-01", d:"bicapur"},
     {f:"1677-05-01", t:"1698-01-08", d:"maratha"},
     {f:"1698-01-08", t:"1750-09-11", d:"babur-imparatorlugu"},
     {f:"1750-09-11", t:"1761-04-05", d:"fransa"},
     {f:"1761-04-05", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Vellor — Vijayanagara'nın Talikota sonrası başkenti (1606-1646).
{ ad:"Vellor (Vellore)", tur:"kale", lat:12.9160, lon:79.1320, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1378-01-01", d:"delhi-sultanligi"},
     {f:"1378-01-01", t:"1656-01-01", d:"vijayanagara"},
     {f:"1656-01-01", t:"1687-09-21", d:"bicapur"},
     {f:"1687-09-21", t:"1714-01-01", d:"babur-imparatorlugu"},
     {f:"1714-01-01", t:"1760-01-01", d:"karnatik"},
     {f:"1760-01-01", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// KARNÂTİK (Arkot) nevâblığı 1690'da Haydarâbâd Nizamlığı'na bağlı olarak
// kuruldu, 1710'lardan sonra fiilen bağımsızlaştı; 31 Temmuz 1801'de
// toprakları İngiliz idaresine devredildi.
{ ad:"Arkot (Arcot)", tur:"sehir", lat:12.9060, lon:79.3200, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1378-01-01", d:"delhi-sultanligi"},
     {f:"1378-01-01", t:"1656-01-01", d:"vijayanagara"},
     {f:"1656-01-01", t:"1687-09-21", d:"bicapur"},
     {f:"1687-09-21", t:"1714-01-01", d:"babur-imparatorlugu"},
     {f:"1714-01-01", t:"1801-07-31", d:"karnatik"},
     {f:"1801-07-31", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// ===== 2e. Malabar ve güneybatı kıyısı =====

// Kalikut — Zamorin'in şehri; Vasco da Gama 20 Mayıs 1498'de buraya geldi
// ve Avrupa'nın Hindistan'a deniz yolu açıldı. Haydar Ali 1766'da Malabar'ı
// aldı, 1792 Seringapatam Antlaşması'yla İngiliz'e geçti.
{ ad:"Kalikut (Kozhikode)", tur:"liman", lat:11.2590, lon:75.7800, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1766-01-01", d:"kalikut"},
     {f:"1766-01-01", t:"1792-03-18", d:"meysur"},
     {f:"1792-03-18", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Koçin — Portekiz'in Hindistan'daki İLK kalesi (1503); Hollanda 7 Ocak
// 1663'te aldı, İngiliz 20 Ekim 1795'te. Koçin krallığı iç kesimde prens
// devleti olarak sürdü; bu nokta LİMANI temsil ettiği için Avrupa
// pencereleri yazıldı.
{ ad:"Koçin (Kochi)", tur:"liman", lat:9.9551, lon:76.2505, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1503-09-01", d:"kocin"},
     {f:"1503-09-01", t:"1663-01-07", d:"portekiz"},
     {f:"1663-01-07", t:"1795-10-20", d:"hollanda"},
     {f:"1795-10-20", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Kannûr — Kolathiri racasının limanı; Portekiz 1505'te Sant'Angelo
// kalesini kurdu, Hollanda 1663'te aldı, 1771'de Arakkal beylerine sattı,
// İngilizler 1790'da zaptetti.
{ ad:"Kannûr (Cannanore)", tur:"liman", lat:11.8680, lon:75.3550, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1505-01-01", d:"kalikut"},
     {f:"1505-01-01", t:"1663-02-15", d:"portekiz"},
     {f:"1663-02-15", t:"1771-01-01", d:"hollanda"},
     {f:"1771-01-01", t:"1790-12-15", d:"meysur"},
     {f:"1790-12-15", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Kolam (Quilon)", tur:"liman", lat:8.8930, lon:76.6140, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1502-01-01", d:"travankur"},
     {f:"1502-01-01", t:"1661-12-08", d:"portekiz"},
     {f:"1661-12-08", t:"1795-01-01", d:"hollanda"},
     {f:"1795-01-01", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Travankur — Marthanda Varma 1729'da Venâd'ı genişleterek kurdu; 1741
// Kolaçel'de Hollanda'yı yenen tek Hint devletidir. 1795'ten sonra İngiliz
// himayesinde prens devleti; dosya kuralı gereği kimlik korunur.
{ ad:"Trivandrum (Thiruvananthapuram)", tur:"sehir", lat:8.5240, lon:76.9360, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1923-10-29", d:"travankur"}] },

// ===== 2f. Kuzey Sirkarlar =====
// 1765'te Bâbürlü hükümdarından beratla alındı, fiilî devir 12 Kasım 1766.

{ ad:"Masulipatnam", tur:"liman", lat:16.1900, lon:81.1300, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1512-01-01", d:"behmeni"},
     {f:"1512-01-01", t:"1687-09-21", d:"golkonda"},
     {f:"1687-09-21", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1759-04-08", d:"haydarabad-nizam"},
     {f:"1759-04-08", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Râcahmundry", tur:"sehir", lat:17.0050, lon:81.7770, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1512-01-01", d:"behmeni"},
     {f:"1512-01-01", t:"1687-09-21", d:"golkonda"},
     {f:"1687-09-21", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1766-11-12", d:"haydarabad-nizam"},
     {f:"1766-11-12", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Vişâkapatnam", tur:"liman", lat:17.6870, lon:83.2190, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1512-01-01", d:"behmeni"},
     {f:"1512-01-01", t:"1687-09-21", d:"golkonda"},
     {f:"1687-09-21", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1766-11-12", d:"haydarabad-nizam"},
     {f:"1766-11-12", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// ===== 2g. Seylan (üç nokta) =====
// Görev tanımının tablosunda YOK. Üç nokta konuldu çünkü ada, kutu
// açıldığında en yakın Hint noktasına (Trivandrum, 480 km) emilir ve
// Portekiz-Hollanda-İngiliz zinciri Güney Hindistan'ın rengiyle yanlış
// boyanırdı — MIMARI.md §2'deki emilme davranışının kitabî örneği.
// "seylan-sinhala" Gampola/Kotte krallıklarını, "kandy" 1469'dan sonraki
// dağ krallığını, "yafna" Tamil Yafna krallığını karşılar.

{ ad:"Kolombo", tur:"liman", lat:6.9270, lon:79.8610, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1518-09-01", d:"seylan-sinhala"},
     {f:"1518-09-01", t:"1656-05-12", d:"portekiz"},
     {f:"1656-05-12", t:"1796-02-16", d:"hollanda"},
     {f:"1796-02-16", t:"1923-10-29", d:"ingiltere"}] },

// Kandy — adanın hiç sömürgeleşmeyen iç krallığı; 2 Mart 1815 Kandy
// Sözleşmesi'yle İngiliz tacına geçti.
{ ad:"Kandy", tur:"sehir", lat:7.2910, lon:80.6360, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1469-01-01", d:"seylan-sinhala"},
     {f:"1469-01-01", t:"1815-03-02", d:"kandy"},
     {f:"1815-03-02", t:"1923-10-29", d:"ingiltere"}] },

{ ad:"Yafna (Jaffna)", tur:"sehir", lat:9.6610, lon:80.0260, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1619-02-01", d:"yafna"},
     {f:"1619-02-01", t:"1658-06-21", d:"portekiz"},
     {f:"1658-06-21", t:"1796-02-16", d:"hollanda"},
     {f:"1796-02-16", t:"1923-10-29", d:"ingiltere"}] },

// ###########################################################################
// BÖLÜM 3 — ÇİN: KUZEY ve ORTA
// ###########################################################################
//
// ZEMİN 1281: Çin'in TAMAMI Yuan hanedanınındır. Güney Song 1279'da Yaishan
// deniz savaşında bitti; yani projenin başlangıç yılında Çin tek renktir.
// devletler.js'teki "song" ve "jin-hanedani" kayıtları 1281'den ÖNCE
// bittiği için bu dosyada HİÇ kullanılmadı.
//
// STANDART ZİNCİR:
//   1281 → 1368-09-14   yuan-hanedani     (Ming ordusunun Dadu'ya girişi)
//   1368-09-14 → 1644   ming-hanedani
//   1644 → 1912-02-12   qing-hanedani     (son imparatorun tahttan çekilmesi)
//   1912-02-12 → 1923   cin-cumhuriyeti
//
// ⚠️ İKİ TARİHLİ EŞİK — Ming'in kuruluşu bölgeye göre farklıdır:
//   • GÜNEY (Nanking, Yangtze havzası): 23 Ocak 1368, Zhu Yuanzhang'ın Ming'i
//     ilân ettiği gün. 1356-1368 arasında Nanking zaten onun elindeydi ama
//     bu hanedan öncesi "Wu prensliği" evresi AYRI KİMLİK ALMADI — bir
//     isyan devletini ayrı boyamak, Yuan'ın son on beş yılını Çin haritasında
//     onlarca parçaya böler ve bu dosyanın çözünürlüğünü aşar.
//   • KUZEY (Pekin, Şansi, Şantung): 14 Eylül 1368, Ming ordusunun başkente
//     girdiği gün.
//
// ⚠️ QING FETHİ DE BÖLGEYE GÖRE FARKLIDIR — Ming 1644'te bir günde bitmedi:
//     Pekin ......... 1644-06-06   Kuzey ......... 1644-1645
//     Nanking ....... 1645-06-08   Fucien ........ 1646-10-06
//     Kanton ........ 1650-11-24   Yünnan ........ 1659-01-01
//     Tayvan ........ 1683-10-05
// Aradaki dönemler "guney-ming" (1644-1662) kimliğiyle boyandı. Bu bir
// hanedan değil, Ming'in güneye kaçan dört ardıl sarayıdır; ayrı kimlik
// almasının sebebi Çin'in on beş yıl boyunca İKİYE BÖLÜNMÜŞ olmasıdır ve
// tek renkte gösterilirse bu görünmez.
//
// ⚠️ İŞGAL KURALI (bütün dosya için): bir yılın altında kalan ve yerel
// idareyi değiştirmeyen işgaller AYRI PENCERE ALMAZ. Bu yüzden Nâdir Şah'ın
// 1739 Delhi işgali, Younghusband'ın 1904 Lhasa işgali (3 Ağustos –
// 23 Eylül) ve Şivâcî'nin 1664/1670 Sûrat yağmaları zincirlerde yoktur;
// hepsi ilgili kaydın yorumunda anılmıştır. Kâbil'in 1839-1842 ve
// 1879-1880 işgalleri ise pencere aldı — yıllarca sürdüler ve idareyi
// değiştirdiler.

// ===== 3a. Pekin ve Hebei =====

// Pekin — Yuan'da Hanbalık (Dadu), Ming'de 1421'den itibaren başkent.
// 1644'ün üç sahibi: Ming (25 Nisan'da Chongzhen imparatorun intiharına
// kadar), Li Zicheng'in Şun devleti (6 hafta) ve Qing (6 Haziran'dan
// itibaren). Altı haftalık Şun penceresi kısadır ama gerçek bir hanedan
// değişimidir ve işgal kuralının istisnası değildir — Ming'i BİTİREN
// olaydır. 1860 (Anglo-Fransız) ve 1900 (Sekiz Devlet) işgalleri idareyi
// değiştirmediği için pencere almadı.
{ ad:"Pekin (Hanbalık)", tur:"sehir", lat:39.9040, lon:116.4070, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1644-06-06", d:"dashun"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Tiencin — Yongle imparatoru 1404'te kaleyi kurdu ve şehre bu adı verdi
// (kur:); Pekin'in deniz kapısıdır.
{ ad:"Tiencin (Tianjin)", tur:"liman", lat:39.0840, lon:117.2010, g:1, k:0, d:[],
  kur:"1404-01-01",
  s:[{f:"1404-01-01", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Baoding", tur:"sehir", lat:38.8740, lon:115.4640, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Zhengding", tur:"sehir", lat:38.1440, lon:114.5730, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Kalgan (Zhangjiakou) — Çin Seddi'nin kuzey kapısı ve Moğolistan
// kervan yolunun başlangıcı.
{ ad:"Kalgan (Zhangjiakou)", tur:"kale", lat:40.8120, lon:114.8790, g:0, k:0, d:[],
  kur:"1429-01-01",
  s:[{f:"1429-01-01", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Cehol (Chengde) — Kangxi 1703'te yazlık sarayı kurdurdu (kur:); Qing'in
// Moğol ve Tibet siyasetinin yürütüldüğü ikinci merkezdir.
{ ad:"Cehol (Chengde)", tur:"sehir", lat:40.9760, lon:117.9390, g:0, k:0, d:[],
  kur:"1703-01-01",
  s:[{f:"1703-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// ===== 3b. Şansi ve Şensi =====

// Datong — Seddi'n en çok saldırı alan kesimi; Altan Han'ın 1550'deki
// Pekin baskını buradan geçti.
{ ad:"Datong", tur:"kale", lat:40.0760, lon:113.3000, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-05-31", d:"ming-hanedani"},
     {f:"1644-05-31", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Taiyuan", tur:"sehir", lat:37.8700, lon:112.5480, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-03-16", d:"ming-hanedani"},
     {f:"1644-03-16", t:"1644-10-01", d:"dashun"},
     {f:"1644-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Pingyao", tur:"sehir", lat:37.2010, lon:112.1750, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-03-16", d:"ming-hanedani"},
     {f:"1644-03-16", t:"1644-10-01", d:"dashun"},
     {f:"1644-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Xi'an (Chang'an) — Li Zicheng 11 Ekim 1643'te aldı ve 8 Şubat 1644'te
// Şun hanedanını burada ilân etti; yani Şun devleti PEKİN'DEN ÖNCE
// buradadır. Qing, Tongguan geçidini aşarak 18 Ocak 1645'te girdi.
{ ad:"Xi'an (Chang'an)", tur:"sehir", lat:34.3420, lon:108.9400, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1643-10-11", d:"ming-hanedani"},
     {f:"1643-10-11", t:"1645-01-18", d:"dashun"},
     {f:"1645-01-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// ===== 3c. Orta ova (Henan, Şantung) =====

{ ad:"Luoyang", tur:"sehir", lat:34.6630, lon:112.4340, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1641-03-08", d:"ming-hanedani"},
     {f:"1641-03-08", t:"1645-01-18", d:"dashun"},
     {f:"1645-01-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Kaifeng — Song'un eski başkenti. 1642'de Sarı Irmak setlerinin
// yarılmasıyla sular altında kaldı ve nüfusunun büyük kısmını kaybetti;
// şehir yeniden kurulduğu için bit: YAZILMADI.
{ ad:"Kaifeng", tur:"sehir", lat:34.7970, lon:114.3070, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-01-18", d:"dashun"},
     {f:"1645-01-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Zhengzhou", tur:"sehir", lat:34.7460, lon:113.6250, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-01-18", d:"dashun"},
     {f:"1645-01-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Anyang", tur:"sehir", lat:36.0970, lon:114.3930, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Jinan", tur:"sehir", lat:36.6510, lon:117.1200, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Qufu", tur:"sehir", lat:35.5970, lon:116.9910, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Qingdao — Almanya 6 Mart 1898'de 99 yıllığına kiraladı ve şehri kurdu
// (kur:). Japonya 7 Kasım 1914'te aldı, 10 Aralık 1922'de Çin'e iade etti.
// Bu, dosyadaki tek ALMANYA penceresidir ve renkler.py'de tanımlıdır.
{ ad:"Qingdao (Tsingtau)", tur:"liman", lat:36.0670, lon:120.3830, g:1, k:0, d:[],
  kur:"1898-03-06",
  s:[{f:"1898-03-06", t:"1914-11-07", d:"almanya"},
     {f:"1914-11-07", t:"1922-12-10", d:"meiji-japonya"},
     {f:"1922-12-10", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Yantai (Chefoo)", tur:"liman", lat:37.4640, lon:121.4480, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Xuzhou", tur:"kale", lat:34.2050, lon:117.2840, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// ===== 3d. Yangtze havzası =====

// Nanking — Ming'in ilk başkenti (1368-1421) ve Güney Ming'in Hongguang
// sarayının merkezi. Qing 8 Haziran 1645'te girdi. Taiping İsyanı
// 19 Mart 1853 – 19 Temmuz 1864 arasında şehri "Göksel Başkent" yaptı;
// on bir yıllık ayrı bir devlettir ve pencere aldı.
{ ad:"Nanking (Nanjing)", tur:"sehir", lat:32.0600, lon:118.7970, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1853-03-19", d:"qing-hanedani"},
     {f:"1853-03-19", t:"1864-07-19", d:"taiping"},
     {f:"1864-07-19", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Yangzhou — Büyük Kanal ile Yangtze'nin kesiştiği tuz ticareti şehri;
// Qing ordusunun 1645 Mayıs'ındaki katliamı Çin tarihinin en ağır
// olaylarındandır.
{ ad:"Yangzhou", tur:"sehir", lat:32.3940, lon:119.4130, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-05-20", d:"guney-ming"},
     {f:"1645-05-20", t:"1853-03-19", d:"qing-hanedani"},
     {f:"1853-03-19", t:"1864-07-19", d:"taiping"},
     {f:"1864-07-19", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Suzhou", tur:"sehir", lat:31.2990, lon:120.5850, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1860-06-02", d:"qing-hanedani"},
     {f:"1860-06-02", t:"1863-12-04", d:"taiping"},
     {f:"1863-12-04", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Hangzhou — Song'un son başkenti Lin'an; Marco Polo'nun "Kinsay"ı.
{ ad:"Hangzhou", tur:"sehir", lat:30.2740, lon:120.1550, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-07-06", d:"guney-ming"},
     {f:"1645-07-06", t:"1861-12-29", d:"qing-hanedani"},
     {f:"1861-12-29", t:"1864-03-31", d:"taiping"},
     {f:"1864-03-31", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Shaoxing", tur:"sehir", lat:30.0300, lon:120.5800, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1646-07-06", d:"guney-ming"},
     {f:"1646-07-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Şanghay — 1842 Nanking Antlaşması'yla açılan beş limandan biri;
// imtiyaz bölgeleri (1845 İngiliz, 1849 Fransız, 1863 Ortak) EGEMENLİK
// devri değil KİRA ve yargı muafiyetidir, bu yüzden ayrı pencere ALMADI.
// Kiralanan ve idaresi tamamen devredilen yerler (Qingdao, Lüşun,
// Hong Kong, Makao) pencere aldı — ayrım kasıtlıdır.
{ ad:"Şanghay", tur:"liman", lat:31.2300, lon:121.4740, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Ningbo", tur:"liman", lat:29.8680, lon:121.5440, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1646-07-06", d:"guney-ming"},
     {f:"1646-07-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Wenzhou", tur:"liman", lat:27.9940, lon:120.6990, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1646-10-06", d:"guney-ming"},
     {f:"1646-10-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Hefei", tur:"sehir", lat:31.8210, lon:117.2270, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Anqing", tur:"kale", lat:30.5090, lon:117.0430, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1853-02-24", d:"qing-hanedani"},
     {f:"1853-02-24", t:"1861-09-05", d:"taiping"},
     {f:"1861-09-05", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Wuchang (Wuhan) — Yangtze'nin orta havzasının kilidi; Taiping isyanı
// burada başladı (1852) ve 10 Ekim 1911 Wuchang ayaklanması Qing'i yıktı.
{ ad:"Wuchang (Wuhan)", tur:"sehir", lat:30.5657, lon:114.3337, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1911-10-10", d:"qing-hanedani"},
     {f:"1911-10-10", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Jingzhou", tur:"kale", lat:30.3500, lon:112.1900, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Xiangyang — Moğolların 1268-1273 arasında beş yıl kuşattığı kale;
// düşüşü Güney Song'un sonunu getirdi. Bu dosyanın başlangıcında
// (1281) çoktan Yuan elindedir.
{ ad:"Xiangyang", tur:"kale", lat:32.0090, lon:112.1220, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1643-01-01", d:"ming-hanedani"},
     {f:"1643-01-01", t:"1645-06-08", d:"dashun"},
     {f:"1645-06-08", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Changsha", tur:"sehir", lat:28.2280, lon:112.9390, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1647-01-01", d:"guney-ming"},
     {f:"1647-01-01", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1679-01-01", d:"san-fan"},
     {f:"1679-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Nanchang", tur:"sehir", lat:28.6820, lon:115.8580, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Jiujiang", tur:"liman", lat:29.7050, lon:116.0010, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1853-02-18", d:"qing-hanedani"},
     {f:"1853-02-18", t:"1858-05-19", d:"taiping"},
     {f:"1858-05-19", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// ===== 3e. Sichuan ve güneybatı =====

// Çengdu — Zhang Xianzhong 1644'te "Büyük Batı" (Daxi) devletini burada
// kurdu; Şun'dan ayrı bir isyan devletidir ama aynı yıllarda ve aynı
// çözünürlükte olduğu için ayrı kimlik açılmadı, "dashun" ile boyandı ve
// gerekçesi buraya yazıldı. Qing 1646'da aldı; 1673-1681 arasında Üç
// Feodal isyanı sırasında yeniden kaybetti.
{ ad:"Çengdu (Chengdu)", tur:"sehir", lat:30.5720, lon:104.0660, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-09-09", d:"ming-hanedani"},
     {f:"1644-09-09", t:"1647-01-01", d:"dashun"},
     {f:"1647-01-01", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1680-02-01", d:"san-fan"},
     {f:"1680-02-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Çongqing (Chongqing)", tur:"liman", lat:29.5630, lon:106.5520, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-07-01", d:"ming-hanedani"},
     {f:"1644-07-01", t:"1647-01-01", d:"dashun"},
     {f:"1647-01-01", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1680-02-01", d:"san-fan"},
     {f:"1680-02-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Kunming — Güney Ming'in son sarayı (Yongli) 1656-1659 arasında
// buradaydı. Wu Sangui 1673'te isyanı burada başlattı; Kunming 7 Aralık
// 1681'de düştü ve Üç Feodal savaşı bitti.
{ ad:"Kunming", tur:"sehir", lat:25.0380, lon:102.7180, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1382-01-06", d:"yuan-hanedani"},
     {f:"1382-01-06", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1659-01-07", d:"guney-ming"},
     {f:"1659-01-07", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1681-12-07", d:"san-fan"},
     {f:"1681-12-07", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Dali — Nanzhao ve Dali krallıklarının başkenti; 1253'te Kubilay aldı,
// yani 1281'de Yuan'dır. Ming Yünnan'ı 6 Ocak 1382'de zaptetti.
{ ad:"Dali", tur:"sehir", lat:25.6060, lon:100.2670, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1382-01-06", d:"yuan-hanedani"},
     {f:"1382-01-06", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1659-01-07", d:"guney-ming"},
     {f:"1659-01-07", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1681-12-07", d:"san-fan"},
     {f:"1681-12-07", t:"1856-01-01", d:"qing-hanedani"},
     {f:"1856-01-01", t:"1873-01-15", d:"pingnan"},
     {f:"1873-01-15", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Guiyang", tur:"sehir", lat:26.6470, lon:106.6300, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1382-01-06", d:"yuan-hanedani"},
     {f:"1382-01-06", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1658-01-01", d:"guney-ming"},
     {f:"1658-01-01", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1681-12-07", d:"san-fan"},
     {f:"1681-12-07", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// ===== 3f. Gansu koridoru ve Qinghai =====

{ ad:"Lanzhou", tur:"sehir", lat:36.0610, lon:103.8340, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-10-01", d:"ming-hanedani"},
     {f:"1644-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Zhangye (Ganzhou)", tur:"kale", lat:38.9260, lon:100.4500, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-10-01", d:"ming-hanedani"},
     {f:"1644-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Ciyayuguan — Ming Seddi'nin BATI UCU; 1372'de kuruldu (kur:) ve
// 1759'a kadar Çin'in fiilî batı sınırıdır. Bu noktanın batısındaki
// coğrafyanın Çin'e bağlanması Qianlong'un 1755-1759 Cungar seferleriyledir.
{ ad:"Ciyayuguan (Jiayuguan)", tur:"kale", lat:39.7970, lon:98.2890, g:1, k:0, d:[],
  kur:"1372-01-01",
  s:[{f:"1372-01-01", t:"1644-10-01", d:"ming-hanedani"},
     {f:"1644-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Dunhuang — İpek Yolu'nun kavşağı; Ming 1524'te Ciyayuguan'ın batısını
// boşalttı ve şehir 1720'de Qing yeniden iskân edene kadar Moğol-Oyrat
// bozkırının parçası oldu. Bu iki yüz yıllık pencere "kuzey-yuan" ile
// boyandı çünkü bölgeyi Oyrat/Moğol beyleri tuttu.
{ ad:"Dunhuang", tur:"sehir", lat:40.1420, lon:94.6620, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1524-01-01", d:"ming-hanedani"},
     {f:"1524-01-01", t:"1720-01-01", d:"kuzey-yuan"},
     {f:"1720-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Xining — Tibet platosunun kuzey kapısı; Kokonor Moğolları (Khoshut)
// 1636-1724 arasında burayı denetledi, Qing 1724'te Lobzang Danjin
// isyanını bastırarak doğrudan idareye aldı.
{ ad:"Xining", tur:"sehir", lat:36.6170, lon:101.7780, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1636-01-01", d:"ming-hanedani"},
     {f:"1636-01-01", t:"1724-01-01", d:"hosut"},
     {f:"1724-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Yinchuan (Ningxia) — Tangut Xia'nın eski başkenti; 1227'de Moğollar
// yıktı, Ming yeniden kurdu.
{ ad:"Yinchuan (Ningxia)", tur:"kale", lat:38.4870, lon:106.2310, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-10-01", d:"ming-hanedani"},
     {f:"1644-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// ###########################################################################
// BÖLÜM 4 — ÇİN: GÜNEY, KIYI ve TAYVAN
// ###########################################################################
//
// Güneyde Ming'in kuruluşu 1368 Nisan-Aralık arasına yayılır; Qing fethi ise
// 1645-1683 arasında altı ayrı dalgadadır. Ayrıca iki yerel devlet vardır:
//   • guney-ming (1644-1662) — dört ardıl saray: Hongguang (Nanking),
//     Longwu (Fucien), Shaowu/Yongli (Guangdong-Yünnan)
//   • tungning (1662-1683) — Zheng Chenggong (Koxinga) ve oğullarının
//     Amoy-Tayvan devleti. 1650'den itibaren Amoy'u, 1662'den itibaren
//     Tayvan'ı tuttu; 5 Ekim 1683'te teslim oldu.
// Üçüncü bir pencere Üç Feodal isyanıdır (san-fan, 1673-1681).

// Kanton (Guangzhou) — güney Çin'in deniz kapısı ve 1757-1842 arasında
// Avrupa ticaretine açık TEK Çin limanı ("Canton system"). Qing 24 Kasım
// 1650'de aldı. 1857-1861 arasındaki İngiliz-Fransız işgali şehri bir
// müttefik komisyonuna bağladı ama Qing egemenliği kaldırılmadı;
// işgal kuralı gereği pencere AÇILMADI, burada anılıyor.
{ ad:"Kanton (Guangzhou)", tur:"liman", lat:23.1290, lon:113.2640, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1676-03-01", d:"qing-hanedani"},
     {f:"1676-03-01", t:"1677-01-01", d:"san-fan"},
     {f:"1677-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Makao — Portekiz 1557'de yerleşti; egemenlik 1887 Pekin Antlaşması'yla
// resmen tanındı ama fiilî idare 1557'den itibaren Portekiz'dedir, bu
// yüzden pencere o tarihten başlar. 1999'a kadar Portekiz toprağı kaldı.
{ ad:"Makao (Macau)", tur:"liman", lat:22.1990, lon:113.5440, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1557-01-01", d:"ming-hanedani"},
     {f:"1557-01-01", t:"1923-10-29", d:"portekiz"}] },

// Hong Kong — 26 Ocak 1841'de İngiliz çıkarması, 29 Ağustos 1842 Nanking
// Antlaşması'yla resmen devredildi. Makao'ya 39 km.
{ ad:"Hong Kong", tur:"liman", lat:22.3200, lon:114.1700, g:1, k:0, d:[],
  kur:"1841-01-26",
  s:[{f:"1841-01-26", t:"1923-10-29", d:"ingiltere"}] },

// Zeytun (Quanzhou) — İbn Battûta'nın ve Marco Polo'nun dünyanın en büyük
// limanı dediği şehir; Yuan döneminde zirvesindedir. Ming'in deniz yasağı
// (haijin) ve limanın dolmasıyla önemini Amoy'a kaptırdı.
{ ad:"Zeytun (Quanzhou)", tur:"liman", lat:24.8760, lon:118.6653, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1646-10-06", d:"guney-ming"},
     {f:"1646-10-06", t:"1674-03-15", d:"qing-hanedani"},
     {f:"1674-03-15", t:"1676-10-01", d:"san-fan"},
     {f:"1676-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Fuzhou — Longwu imparatoru 1645 Ağustos'unda burada tahta çıktı; Qing
// 6 Ekim 1646'da girdi. Geng Jingzhong'un feodal beyliğinin merkezi.
{ ad:"Fuzhou", tur:"liman", lat:26.0740, lon:119.2960, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1646-10-06", d:"guney-ming"},
     {f:"1646-10-06", t:"1674-03-15", d:"qing-hanedani"},
     {f:"1674-03-15", t:"1676-10-01", d:"san-fan"},
     {f:"1676-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Amoy (Xiamen) — Zheng Chenggong'un otuz yıllık üssü; Tayvan'ı almadan
// önce buradan direndi. Qing 1680'de aldı ve Zheng devleti Tayvan'a çekildi.
{ ad:"Amoy (Xiamen)", tur:"liman", lat:24.4899, lon:118.0841, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-01-01", d:"guney-ming"},
     {f:"1650-01-01", t:"1680-03-01", d:"tungning"},
     {f:"1680-03-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Zhangzhou", tur:"sehir", lat:24.5130, lon:117.6470, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1646-10-06", d:"guney-ming"},
     {f:"1646-10-06", t:"1674-03-15", d:"qing-hanedani"},
     {f:"1674-03-15", t:"1676-10-01", d:"san-fan"},
     {f:"1676-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Chaozhou", tur:"sehir", lat:23.6570, lon:116.6220, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1676-03-01", d:"qing-hanedani"},
     {f:"1676-03-01", t:"1677-01-01", d:"san-fan"},
     {f:"1677-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Swatow (Shantou) — 1860'ta açılan antlaşma limanı; Chaozhou'ya 34 km.
{ ad:"Swatow (Shantou)", tur:"liman", lat:23.3630, lon:116.6798, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Guilin", tur:"sehir", lat:25.2740, lon:110.2900, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1652-01-01", d:"guney-ming"},
     {f:"1652-01-01", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1680-01-01", d:"san-fan"},
     {f:"1680-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Nanning", tur:"sehir", lat:22.8170, lon:108.3670, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1652-01-01", d:"guney-ming"},
     {f:"1652-01-01", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1680-01-01", d:"san-fan"},
     {f:"1680-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Beihai (Pakhoi)", tur:"liman", lat:21.4810, lon:109.1200, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1652-01-01", d:"guney-ming"},
     {f:"1652-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Qiongzhou (Haikou) — Hainan adası. Ada, kutu açıldığında kendi noktası
// olmazsa Kanton ya da Kuzey Vietnam peteğine emilirdi.
{ ad:"Qiongzhou (Haikou)", tur:"liman", lat:20.0440, lon:110.1990, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Wuzhou", tur:"liman", lat:23.4770, lon:111.2790, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1652-01-01", d:"guney-ming"},
     {f:"1652-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// ===== 4b. Tayvan ve Penghu =====

// Tainan — Hollanda Doğu Hindistan Şirketi 26 Ağustos 1624'te Zeelandia
// kalesini kurdu (kur:); ada üzerindeki ilk devlet yapısıdır. Koxinga
// 1 Şubat 1662'de teslim aldı. Qing 5 Ekim 1683'te; Japonya 17 Nisan 1895
// Shimonoseki Antlaşması'yla.
{ ad:"Tainan", tur:"liman", lat:22.9930, lon:120.2030, g:1, k:0, d:[],
  kur:"1624-08-26",
  s:[{f:"1624-08-26", t:"1662-02-01", d:"hollanda-dogu-hint"},
     {f:"1662-02-01", t:"1683-10-05", d:"tungning"},
     {f:"1683-10-05", t:"1895-04-17", d:"qing-hanedani"},
     {f:"1895-04-17", t:"1923-10-29", d:"meiji-japonya"}] },

// Taipei — Danshui havzasının Han iskânı 1709 arazi beratıyla başladı
// (kur:); şehir 1875'te vilâyet merkezi oldu.
{ ad:"Taipei", tur:"sehir", lat:25.0330, lon:121.5650, g:1, k:0, d:[],
  kur:"1709-01-01",
  s:[{f:"1709-01-01", t:"1895-04-17", d:"qing-hanedani"},
     {f:"1895-04-17", t:"1923-10-29", d:"meiji-japonya"}] },

// Penghu (Pescadores) — Yuan 1281'de burada bir teftiş dairesi kurdu,
// yani bu dosyanın başlangıç yılında adalar zaten Çin idaresindedir.
// Ming 1388'de boşalttı ve yeniden iskân etti; Hollanda 1622-1624
// arasında tuttu, Ming'in baskısıyla Tayvan'a geçti. 16 Temmuz 1683
// Penghu deniz savaşı Zheng devletini bitirdi.
{ ad:"Penghu (Pescadores)", tur:"liman", lat:23.5710, lon:119.5790, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1622-07-11", d:"ming-hanedani"},
     {f:"1622-07-11", t:"1624-08-26", d:"hollanda-dogu-hint"},
     {f:"1624-08-26", t:"1661-04-30", d:"ming-hanedani"},
     {f:"1661-04-30", t:"1683-07-16", d:"tungning"},
     {f:"1683-07-16", t:"1895-04-17", d:"qing-hanedani"},
     {f:"1895-04-17", t:"1923-10-29", d:"meiji-japonya"}] },

// ###########################################################################
// BÖLÜM 5 — MANÇURYA, MOĞOLİSTAN, DOĞU TÜRKİSTAN ve TİBET
// ###########################################################################

// ===== 5a. Mançurya =====

// Mukden (Şenyang) — Nurhaci 1621'de aldı ve 1625'te başkent yaptı;
// Qing hanedanının doğduğu şehirdir. ⚠️ Şenyang ve Liaoyang'ın düşüş
// GÜNLERİ kaynaklarda ay takvimiyle verildiği ve mîlâdî karşılığı
// tartışmalı olduğu için UYDURMA GÜN YAZILMADI: 1621-01-01.
// Nurhaci'nin devleti 1616-1636 arasında "Sonraki Jin" adını taşıyordu;
// devletler.js'teki "jin-hanedani" (1115-1234 Jurchen Jin) BAŞKA bir
// devlettir ve karıştırılmamalıdır. Qing kendi kuruluşunu 1616'ya
// dayandırdığı için ayrı kimlik açılmadı, "qing-hanedani" kullanıldı.
{ ad:"Mukden (Şenyang)", tur:"sehir", lat:41.8050, lon:123.4310, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1621-01-01", d:"ming-hanedani"},
     {f:"1621-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Liaoyang", tur:"kale", lat:41.2670, lon:123.1740, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1621-01-01", d:"ming-hanedani"},
     {f:"1621-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Cilin (Jilin) — Qing 1673'te Sungari kıyısında tersane şehri olarak
// kurdu (kur:).
{ ad:"Cilin (Jilin)", tur:"sehir", lat:43.8370, lon:126.5500, g:0, k:0, d:[],
  kur:"1673-01-01",
  s:[{f:"1673-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Ningguta — Qing'in Mançurya'daki askerî valiliği ve sürgün yeri.
{ ad:"Ningguta", tur:"kale", lat:44.3500, lon:129.4700, g:0, k:0, d:[],
  kur:"1653-01-01",
  s:[{f:"1653-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Aigun — 1689 Nerçinsk ve 28 Mayıs 1858 Aigun antlaşmalarının imzalandığı
// yer. 1858'de Amur'un KUZEY yakası Rusya'ya geçti; şehrin kendisi güney
// yakada olduğu için Çin'de kaldı, bu yüzden pencere açılmadı.
{ ad:"Aigun", tur:"kale", lat:50.2430, lon:127.4630, g:0, k:0, d:[],
  kur:"1683-01-01",
  s:[{f:"1683-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Harbin — 1898'de Çin Doğu Demiryolu'nun merkezi olarak kuruldu (kur:).
// Demiryolu bölgesi 1898-1920 arasında fiilen Rus idaresindeydi ama
// EGEMENLİK Çin'de kaldı; Şanghay imtiyazlarıyla aynı gerekçeyle pencere
// AÇILMADI. Kiralanıp idaresi tamamen devredilen Lüşun ise pencere aldı.
{ ad:"Harbin", tur:"sehir", lat:45.8030, lon:126.5340, g:1, k:0, d:[],
  kur:"1898-01-01",
  s:[{f:"1898-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Lüşun (Port Arthur) — Japonya 1894'te aldı ama Üçlü Müdahale ile geri
// verdi (pencere açılmadı, bir yıldan kısa). 27 Mart 1898'de Rusya
// 25 yıllığına kiraladı; 5 Eylül 1905 Portsmouth Antlaşması'yla kira
// Japonya'ya devredildi.
{ ad:"Lüşun (Port Arthur)", tur:"liman", lat:38.8130, lon:121.2160, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1621-01-01", d:"ming-hanedani"},
     {f:"1621-01-01", t:"1898-03-27", d:"qing-hanedani"},
     {f:"1898-03-27", t:"1905-09-05", d:"rusya"},
     {f:"1905-09-05", t:"1923-10-29", d:"meiji-japonya"}] },

// ===== 5b. Moğolistan =====
//
// "kuzey-yuan" (1368-1635), Yuan sarayının bozkıra çekildikten sonraki
// devamıdır; Ligden Han'ın 1634'te ölümü ve mührün 1635'te Qing'e teslimi
// ile bitti. Halha (dış) Moğolları 1691 Dolonnor kurultayında Qing'e
// bağlandı. 29 Aralık 1911'de Bogd Han Moğolistan'ın bağımsızlığını ilân
// etti; Xu Shuzheng'in Çin ordusu 22 Kasım 1919 – 11 Temmuz 1921 arasında
// ülkeyi işgal etti (bir yıldan uzun, idareyi değiştirdi → pencere aldı).

// Karakurum — Moğol İmparatorluğu'nun başkenti; Kubilay başkenti Dadu'ya
// taşıdıktan sonra önemini yitirdi, Ming ordusu 1380'de yaktı (bit:).
// 1585'te aynı yerde Erdene Zuu manastırı kuruldu. Sahiplik zinciri
// 1923'e kadar TAM bırakıldı (Köhne Ürgenç deseni).
{ ad:"Karakurum", tur:"sehir", lat:47.1980, lon:102.8330, g:1, k:0, d:[],
  bit:"1380-01-01",
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1635-01-01", d:"kuzey-yuan"},
     {f:"1635-01-01", t:"1911-12-29", d:"qing-hanedani"},
     {f:"1911-12-29", t:"1919-11-22", d:"mogolistan"},
     {f:"1919-11-22", t:"1921-07-11", d:"cin-cumhuriyeti"},
     {f:"1921-07-11", t:"1923-10-29", d:"mogolistan"}] },

// Urga (Ulan Batur) — 1639'da gezici manastır olarak kuruldu (kur:),
// bugünkü yerine 1778'de yerleşti; Halha Moğollarının dinî ve siyasî
// merkezi.
{ ad:"Urga (Ulan Batur)", tur:"sehir", lat:47.8860, lon:106.9060, g:1, k:0, d:[],
  kur:"1639-01-01",
  s:[{f:"1639-01-01", t:"1691-05-30", d:"kuzey-yuan"},
     {f:"1691-05-30", t:"1911-12-29", d:"qing-hanedani"},
     {f:"1911-12-29", t:"1919-11-22", d:"mogolistan"},
     {f:"1919-11-22", t:"1921-07-11", d:"cin-cumhuriyeti"},
     {f:"1921-07-11", t:"1923-10-29", d:"mogolistan"}] },

// Uliastay — Qing 1733'te askerî valilik merkezi olarak kurdu (kur:).
{ ad:"Uliastay", tur:"kale", lat:47.7420, lon:96.8440, g:0, k:0, d:[],
  kur:"1733-01-01",
  s:[{f:"1733-01-01", t:"1911-12-29", d:"qing-hanedani"},
     {f:"1911-12-29", t:"1919-11-22", d:"mogolistan"},
     {f:"1919-11-22", t:"1921-07-11", d:"cin-cumhuriyeti"},
     {f:"1921-07-11", t:"1923-10-29", d:"mogolistan"}] },

// Kobdo (Hovd) — batı Moğolistan'ın Qing garnizonu; Moğol kuvvetleri
// 20 Ağustos 1912'de aldı ve bu, bağımsızlığın fiilen tamamlandığı andır.
{ ad:"Kobdo (Hovd)", tur:"kale", lat:48.0060, lon:91.6410, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1635-01-01", d:"kuzey-yuan"},
     {f:"1635-01-01", t:"1755-01-01", d:"cungar"},
     {f:"1755-01-01", t:"1912-08-20", d:"qing-hanedani"},
     {f:"1912-08-20", t:"1923-10-29", d:"mogolistan"}] },

// Hohhot (Kuku-hoto) — Altan Han 1581'de kurdu (kur:); Tümed Moğollarının
// merkezi, 1636'da Qing'e bağlandı. İç Moğolistan 1911'den sonra Çin'de
// kaldı, bu yüzden Urga'dan farklı bir zincir taşır.
{ ad:"Hohhot (Kuku-hoto)", tur:"sehir", lat:40.8420, lon:111.7500, g:0, k:0, d:[],
  kur:"1581-01-01",
  s:[{f:"1581-01-01", t:"1636-01-01", d:"kuzey-yuan"},
     {f:"1636-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// ===== 5c. Doğu Türkistan =====
//
// ZİNCİR: cagatay (1281-1347) → mogulistan (Doğu Çağatay, 1347-1514) →
// yarkent-hanligi (1514-1705) → cungar (1705-1759) → qing (1759-1864) →
// yakub-beg (1864-1877) → qing (1877-1912) → cin-cumhuriyeti.
// "cagatay", "cungar" ve "yakub-beg" devletler.js'te ZATEN VAR (yakub-beg
// aralığı orada 1865-1878); "mogulistan" ve "yarkent-hanligi" bu oturumun
// önerisidir. Kaşgar 17 Aralık 1877'de Qing'e düştü.
// ⚠️ 1864-1865 arası Kuça-Dungan ayaklanması evresidir; Yâkub Bey Kaşgar'a
// 1865 başında geldi. Ayrı kimlik açılmadı, pencere 1864'te başlatıldı ve
// gerekçesi budur.

{ ad:"Kaşgar", tur:"sehir", lat:39.4700, lon:75.9900, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1347-01-01", d:"cagatay"},
     {f:"1347-01-01", t:"1514-01-01", d:"mogulistan"},
     {f:"1514-01-01", t:"1705-01-01", d:"yarkent-hanligi"},
     {f:"1705-01-01", t:"1759-01-01", d:"cungar"},
     {f:"1759-01-01", t:"1864-06-04", d:"qing-hanedani"},
     {f:"1864-06-04", t:"1877-12-17", d:"yakub-beg"},
     {f:"1877-12-17", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Yarkent (Şaçe)", tur:"sehir", lat:38.4160, lon:77.2430, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1347-01-01", d:"cagatay"},
     {f:"1347-01-01", t:"1514-01-01", d:"mogulistan"},
     {f:"1514-01-01", t:"1705-01-01", d:"yarkent-hanligi"},
     {f:"1705-01-01", t:"1759-01-01", d:"cungar"},
     {f:"1759-01-01", t:"1864-06-04", d:"qing-hanedani"},
     {f:"1864-06-04", t:"1877-12-17", d:"yakub-beg"},
     {f:"1877-12-17", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Hotan", tur:"sehir", lat:37.1170, lon:79.9280, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1347-01-01", d:"cagatay"},
     {f:"1347-01-01", t:"1514-01-01", d:"mogulistan"},
     {f:"1514-01-01", t:"1705-01-01", d:"yarkent-hanligi"},
     {f:"1705-01-01", t:"1759-01-01", d:"cungar"},
     {f:"1759-01-01", t:"1864-06-04", d:"qing-hanedani"},
     {f:"1864-06-04", t:"1877-12-17", d:"yakub-beg"},
     {f:"1877-12-17", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Kuça — 4 Haziran 1864'teki ayaklanma bütün Doğu Türkistan'ı ateşe verdi.
{ ad:"Kuça (Kuqa)", tur:"sehir", lat:41.7170, lon:82.9620, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1347-01-01", d:"cagatay"},
     {f:"1347-01-01", t:"1514-01-01", d:"mogulistan"},
     {f:"1514-01-01", t:"1705-01-01", d:"yarkent-hanligi"},
     {f:"1705-01-01", t:"1759-01-01", d:"cungar"},
     {f:"1759-01-01", t:"1864-06-04", d:"qing-hanedani"},
     {f:"1864-06-04", t:"1877-10-18", d:"yakub-beg"},
     {f:"1877-10-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Turfan — Moğulistan'ın doğu ucu; Qing 1755-1759 seferleriyle bağladı.
{ ad:"Turfan", tur:"sehir", lat:42.9510, lon:89.1900, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1347-01-01", d:"cagatay"},
     {f:"1347-01-01", t:"1680-01-01", d:"mogulistan"},
     {f:"1680-01-01", t:"1755-01-01", d:"cungar"},
     {f:"1755-01-01", t:"1864-06-04", d:"qing-hanedani"},
     {f:"1864-06-04", t:"1876-08-18", d:"yakub-beg"},
     {f:"1876-08-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Hâmi (Kumul) — Ming 1404-1513 arasında burada garnizon tuttu; Doğu
// Türkistan'ın Qing'e İLK bağlanan noktasıdır (1697).
{ ad:"Hâmi (Kumul)", tur:"sehir", lat:42.8280, lon:93.5150, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1404-01-01", d:"kuzey-yuan"},
     {f:"1404-01-01", t:"1513-01-01", d:"ming-hanedani"},
     {f:"1513-01-01", t:"1680-01-01", d:"mogulistan"},
     {f:"1680-01-01", t:"1697-01-01", d:"cungar"},
     {f:"1697-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Ürümçi (Dihua) — Qing 1763'te garnizon şehri olarak kurdu (kur:).
// 1864-1876 arası Dungan isyancılarının ve ardından Yâkub Bey'in elinde
// kaldı; Zuo Zongtang 18 Ağustos 1876'da geri aldı.
{ ad:"Ürümçi (Dihua)", tur:"sehir", lat:43.8260, lon:87.6160, g:1, k:0, d:[],
  kur:"1763-01-01",
  s:[{f:"1763-01-01", t:"1864-06-04", d:"qing-hanedani"},
     {f:"1864-06-04", t:"1876-08-18", d:"yakub-beg"},
     {f:"1876-08-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Gulca (Yining) — Cungar Hanlığı'nın merkezi. Rusya 4 Temmuz 1871'de
// İli vadisini işgal etti ve 24 Şubat 1881 Petersburg Antlaşması'yla
// 1882'de geri verdi — on bir yıllık gerçek bir Rus idaresidir.
{ ad:"Gulca (Yining)", tur:"sehir", lat:43.9130, lon:81.3240, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1347-01-01", d:"cagatay"},
     {f:"1347-01-01", t:"1634-01-01", d:"mogulistan"},
     {f:"1634-01-01", t:"1755-01-01", d:"cungar"},
     {f:"1755-01-01", t:"1871-07-04", d:"qing-hanedani"},
     {f:"1871-07-04", t:"1882-03-22", d:"rusya"},
     {f:"1882-03-22", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// ===== 5d. Tibet =====
//
// "tibet" kimliği 1354-1642 arasını kapsar: Phagmodrupa (1354-1618),
// Rinpungpa ve Tsangpa hânedanları. Üçü de Lhasa-Şigatse ekseninin aynı
// devlet geleneğidir; ayrı ayrı boyanmaları haritaya bilgi katmaz.
// 1642'de V. Dalai Lama, Hoşut Moğollarının desteğiyle Ganden Phodrang
// hükûmetini kurdu (devletler.js'te "tibet-ganden-phodrang").
// ⚠️ Qing 1720'den itibaren Lhasa'ya amban gönderdi ve himâye kurdu;
// hükûmet Tibetli kaldığı için kimlik DEĞİŞMEDİ — Racputâne ve
// Haydarâbâd'la aynı kural. Younghusband'ın 3 Ağustos – 23 Eylül 1904
// Lhasa işgali yedi hafta sürdüğü için pencere almadı (işgal kuralı).

{ ad:"Lhasa", tur:"sehir", lat:29.6520, lon:91.1720, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1354-01-01", d:"yuan-hanedani"},
     {f:"1354-01-01", t:"1642-01-01", d:"tibet"},
     {f:"1642-01-01", t:"1923-10-29", d:"tibet-ganden-phodrang"}] },

// Şigatse — Tsangpa hânedanının başkenti (1565-1642) ve Pançen Lama'nın
// makamı Taşilhunpo'nun şehri.
{ ad:"Şigatse", tur:"sehir", lat:29.2680, lon:88.8810, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1354-01-01", d:"yuan-hanedani"},
     {f:"1354-01-01", t:"1642-01-01", d:"tibet"},
     {f:"1642-01-01", t:"1923-10-29", d:"tibet-ganden-phodrang"}] },

// Gyantse — 1904 İngiliz seferinin en kanlı çarpışmasının yeri; Şigatse'ye
// 70 km.
{ ad:"Gyantse", tur:"kale", lat:28.9500, lon:89.6020, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1354-01-01", d:"yuan-hanedani"},
     {f:"1354-01-01", t:"1642-01-01", d:"tibet"},
     {f:"1642-01-01", t:"1923-10-29", d:"tibet-ganden-phodrang"}] },

// Çamdo — doğu Tibet (Kham); 1910'da Qing ordusu Zhao Erfeng ile bölgeyi
// doğrudan idareye almaya çalıştı, 1912'den sonra Tibet geri aldı.
{ ad:"Çamdo (Chamdo)", tur:"sehir", lat:31.1400, lon:97.1780, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1354-01-01", d:"yuan-hanedani"},
     {f:"1354-01-01", t:"1642-01-01", d:"tibet"},
     {f:"1642-01-01", t:"1910-02-12", d:"tibet-ganden-phodrang"},
     {f:"1910-02-12", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1918-08-19", d:"cin-cumhuriyeti"},
     {f:"1918-08-19", t:"1923-10-29", d:"tibet-ganden-phodrang"}] },

// ===== 5e. Çin: yoğunluk noktaları =====
// Bölüm 3-5'teki nokta ağı MIMARI.md §5'in "seyrek bölge 300 km" ölçütünü
// Çin'in iç kesimlerinde ve Mançurya'da tutmuyordu; aşağıdaki sekiz nokta
// o boşlukları kapatmak için eklendi. Zincirleri bölgelerinin standardıdır.

// Şanhayguan — Çin Seddi'nin denize indiği geçit. Ming generali Wu Sangui
// 27 Mayıs 1644'te kapıyı Qing ordusuna burada açtı; Ming'in sonunu getiren
// tek karar budur.
{ ad:"Şanhayguan", tur:"kale", lat:40.0100, lon:119.7530, g:1, k:0, d:[],
  kur:"1381-01-01",
  s:[{f:"1381-01-01", t:"1644-05-27", d:"ming-hanedani"},
     {f:"1644-05-27", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Tongguan — Sarı Irmak ile Wei'nin kavşağındaki geçit; Xi'an ovasının
// kilidi. Qing 1645 Ocak'ında burayı aşarak Şun devletini bitirdi.
{ ad:"Tongguan", tur:"kale", lat:34.5160, lon:110.2630, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1643-10-11", d:"ming-hanedani"},
     {f:"1643-10-11", t:"1645-01-18", d:"dashun"},
     {f:"1645-01-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Yan'an", tur:"sehir", lat:36.5850, lon:109.4900, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1643-10-11", d:"ming-hanedani"},
     {f:"1643-10-11", t:"1645-01-18", d:"dashun"},
     {f:"1645-01-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Wuhu", tur:"liman", lat:31.3260, lon:118.3760, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1853-03-19", d:"qing-hanedani"},
     {f:"1853-03-19", t:"1864-07-19", d:"taiping"},
     {f:"1864-07-19", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Şaoguan", tur:"sehir", lat:24.8010, lon:113.5910, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

{ ad:"Leizhou", tur:"liman", lat:20.9140, lon:110.0960, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Baotou — Sarı Irmak'ın kuzey dirseği; İç Moğolistan'ın batı ucu.
{ ad:"Baotou", tur:"sehir", lat:40.6570, lon:109.8400, g:0, k:0, d:[],
  kur:"1809-01-01",
  s:[{f:"1809-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// Qiqihar — kuzey Mançurya'nın Qing askerî valiliği (1691'den itibaren);
// bu nokta olmadan Harbin ile Aigun arası 400 km açık kalıyordu.
{ ad:"Qiqihar", tur:"kale", lat:47.3540, lon:123.9180, g:0, k:0, d:[],
  kur:"1691-01-01",
  s:[{f:"1691-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1923-10-29", d:"cin-cumhuriyeti"}] },

// ###########################################################################
// BÖLÜM 6 — JAPONYA
// ###########################################################################
//
// ZEMİN 1281: Kamakura şogunluğu. Bu projenin başlangıç yılı, Japon
// tarihinin en bilinen olayına denk gelir — ikinci Moğol donanması
// 15 Ağustos 1281'de Hakata körfezinde tayfunla (kamikaze) yok oldu.
//
// STANDART ZİNCİR:
//   1281 → 1333-07-04        kamakura        (Kamakura'nın düşüşü)
//   1333-07-04 → 1336-11-07  kenmu           (Go-Daigo'nun restorasyonu)
//   1336-11-07 → 1573-01-01  muromachi       (Ashikaga şogunluğu)
//   1573-01-01 → 1603-03-24  azuchi-momoyama (Oda Nobunaga - Toyotomi Hideyoshi)
//   1603-03-24 → 1868-01-03  edo-bakufu      (Tokugawa)
//   1868-01-03 → 1923        meiji-japonya
//
// ⚠️ ÜÇ SADELEŞTİRME, üçü de bilinçli:
//   1. NANBOKU-CHŌ (1336-1392) — Japonya elli altı yıl boyunca İKİ saraya
//      bölündü: Kyoto'daki Kuzey (Ashikaga) ve Yoshino'daki Güney (Go-Daigo
//      soyu). Bu dosya bütün ülkeyi "muromachi" boyuyor çünkü toprak
//      denetimi bölge bölge ve yıl yıl değişti; sabit bir sınır çizilemez.
//      Güney sarayının merkezi Yoshino AYRI NOKTA OLARAK EKLENMEDİ.
//   2. SENGOKU (1467-1600) — ülke yüzlerce daimyō arasında bölündü.
//      Bu dosya, şogunluğun hukukî sürekliliğini esas alıyor. Daimyō
//      hânedanlarını ayrı ayrı boyamak 250-350 noktalık bir katmanın
//      çözünürlüğünün çok üstündedir ve YOL-HARITASI'nın ilerideki
//      fazlarının işidir.
//   3. NOBUNAGA'nın Yoshiaki'yi Kyoto'dan sürdüğü GÜN kaynaklarda ay
//      takvimiyle veriliyor; uydurma kesinlikten kaçınmak için 1573-01-01
//      yazıldı (CLAUDE.md §4).

// ===== 6a. Kinai — Kyoto, Osaka, Nara =====

// Kyoto — imparatorluk başkenti 794'ten 1869'a kadar; Ashikaga şogunluğunun
// da merkezi. Ōnin savaşı (1467-1477) şehrin büyük kısmını yaktı ama
// sahiplik değişmedi.
{ ad:"Kyoto", tur:"sehir", lat:35.0110, lon:135.7680, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Edo (Tokyo) — Tokugawa Ieyasu 1590'da Kantō'ya nakledildiğinde küçük bir
// kaleydi; 1603'te şogunluk merkezi oldu ve dünyanın en büyük şehirlerinden
// birine dönüştü. Görev tanımının "sahneye çıkan yerleşim" örneğidir:
// kur:"1457-01-01" — Ōta Dōkan'ın kaleyi kurduğu yıl.
{ ad:"Edo (Tokyo)", tur:"sehir", lat:35.6900, lon:139.6920, g:2, k:0, d:[],
  kur:"1457-01-01",
  s:[{f:"1457-01-01", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Osaka — Toyotomi Hideyoshi 1583'te kaleyi kurdu; Tokugawa 4 Haziran
// 1615'te Osaka kuşatmasıyla Toyotomi soyunu bitirdi. Bu yüzden Osaka'nın
// "azuchi-momoyama" penceresi genel zincirden 12 yıl UZUNDUR.
{ ad:"Osaka", tur:"liman", lat:34.6940, lon:135.5020, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1615-06-04", d:"azuchi-momoyama"},
     {f:"1615-06-04", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Nara", tur:"sehir", lat:34.6850, lon:135.8050, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Sakai — Muromachi ve Sengoku çağının en zengin liman şehri; tüccar
// meclisiyle yönetilen fiilî bir serbest şehirdi, Nobunaga 1569'da
// vergiye bağladı. Osaka'ya 15 km.
{ ad:"Sakai", tur:"liman", lat:34.5730, lon:135.4830, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// ===== 6b. Kantō ve Tōkai =====

// Kamakura — şogunluğun 1185-1333 arası merkezi; Nitta Yoshisada
// 4 Temmuz 1333'te aldı ve Hōjō naipliği sona erdi.
{ ad:"Kamakura", tur:"sehir", lat:35.3190, lon:139.5500, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Odawara — Sengoku çağının en güçlü kalelerinden; Hideyoshi'nin 1590
// kuşatması Japonya'nın birleşmesini tamamladı.
{ ad:"Odawara", tur:"kale", lat:35.2640, lon:139.1520, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Sunpu (Şizuoka) — Ieyasu'nun çocukluğunun ve emekliliğinin şehri;
// 1605-1616 arasında fiilî iktidar merkezi (ōgosho).
{ ad:"Sunpu (Şizuoka)", tur:"sehir", lat:34.9760, lon:138.3830, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Nagoya — Tokugawa Ieyasu 1610'da kaleyi kurdurdu (kur:); üç Tokugawa
// yan hânedanından Owari kolunun merkezi.
{ ad:"Nagoya", tur:"sehir", lat:35.1810, lon:136.9070, g:1, k:0, d:[],
  kur:"1610-01-01",
  s:[{f:"1610-01-01", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Gifu — Nobunaga'nın 1567'de aldığı ve "tenka fubu" mührünü kullanmaya
// başladığı şehir; birleşme hareketinin çıkış noktasıdır. Nagoya'ya 30 km.
{ ad:"Gifu", tur:"kale", lat:35.4230, lon:136.7600, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1567-09-01", d:"muromachi"},
     {f:"1567-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// ===== 6c. Japon Denizi kıyısı ve Hokuriku =====

{ ad:"Kanazawa", tur:"sehir", lat:36.5620, lon:136.6490, g:1, k:0, d:[],
  kur:"1546-01-01",
  s:[{f:"1546-01-01", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Fukui", tur:"sehir", lat:36.0640, lon:136.2200, g:0, k:0, d:[],
  kur:"1575-01-01",
  s:[{f:"1575-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Niigata", tur:"liman", lat:37.9160, lon:139.0360, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Matsue", tur:"sehir", lat:35.4680, lon:133.0490, g:0, k:0, d:[],
  kur:"1607-01-01",
  s:[{f:"1607-01-01", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// ===== 6d. Batı Honshu ve Şikoku =====

{ ad:"Himeji", tur:"kale", lat:34.8150, lon:134.6860, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Okayama", tur:"sehir", lat:34.6550, lon:133.9190, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Hiroşima — Mōri Terumoto 1589'da kaleyi kurdu (kur:).
{ ad:"Hiroşima", tur:"liman", lat:34.3850, lon:132.4550, g:1, k:0, d:[],
  kur:"1589-01-01",
  s:[{f:"1589-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Yamaguchi — Ōuchi hânedanının merkezi; XV-XVI. yüzyılda Çin ve Kore
// ticaretini elinde tutan "batının Kyoto"su. Francis Xavier 1551'de
// buradaydı.
{ ad:"Yamaguchi", tur:"sehir", lat:34.1860, lon:131.4710, g:0, k:0, d:[],
  kur:"1360-01-01",
  s:[{f:"1360-01-01", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Matsuyama", tur:"sehir", lat:33.8390, lon:132.7660, g:0, k:0, d:[],
  kur:"1602-01-01",
  s:[{f:"1602-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Kōchi", tur:"liman", lat:33.5600, lon:133.5310, g:0, k:0, d:[],
  kur:"1601-01-01",
  s:[{f:"1601-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// ===== 6e. Kyūşū =====

// Hakata (Fukuoka) — 1274 ve 1281 Moğol istilâlarının çıkarma noktası;
// 15 Ağustos 1281'de ikinci donanma burada tayfunla yok oldu. Ortaçağ
// Japonya'sının Çin ve Kore'ye açılan kapısıdır.
{ ad:"Hakata (Fukuoka)", tur:"liman", lat:33.5900, lon:130.4020, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Nagazaki — 1571'de Portekiz ticareti için liman olarak açıldı (kur:);
// 1580-1587 arasında fiilen Cizvitlere devredildi, Hideyoshi 1587'de geri
// aldı. 1641-1854 arasında Dejima adacığı, Japonya'nın dünyaya açılan TEK
// kapısıydı — ama Dejima kira ve gözetim altındaki bir ticaret adasıdır,
// egemenlik devri değildir; işgal/imtiyaz kuralı gereği HOLLANDA PENCERESİ
// AÇILMADI. Cizvit dönemi ise fiilî idare devri olduğu için pencere aldı.
{ ad:"Nagazaki", tur:"liman", lat:32.7500, lon:129.8780, g:2, k:0, d:[],
  kur:"1571-01-01",
  s:[{f:"1571-01-01", t:"1580-06-09", d:"azuchi-momoyama"},
     {f:"1580-06-09", t:"1587-07-24", d:"portekiz", enklav:true},
     {f:"1587-07-24", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Kumamoto", tur:"kale", lat:32.8030, lon:130.7080, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Funai (Ōita) — Ōtomo Sōrin'in Hristiyan daimyō merkezi; Portekiz
// ticaretinin Kyūşū'daki ilk büyük limanı.
{ ad:"Funai (Ōita)", tur:"liman", lat:33.2380, lon:131.6130, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Kagoşima — Satsuma'nın Shimazu hânedanı; 1609'da Ryukyu'yu tâbi kıldı,
// 1868 Meiji restorasyonunun iki motorundan biridir.
{ ad:"Kagoşima", tur:"liman", lat:31.5960, lon:130.5570, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Tsuşima (İzuhara) — Japonya ile Kore arasındaki tek geçit; Sō hânedanı
// iki devletin de tanıdığı aracıydı ve Kore ticareti tekelini elinde
// tuttu. 1274 Moğol istilâsının ilk hedefidir.
{ ad:"Tsuşima (İzuhara)", tur:"liman", lat:34.2030, lon:129.2890, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// ===== 6f. Kuzey Honshu ve Ezo (Hokkaido) =====

// Sendai — Date Masamune 1600'de kurdu (kur:).
{ ad:"Sendai", tur:"sehir", lat:38.2680, lon:140.8700, g:1, k:0, d:[],
  kur:"1600-01-01",
  s:[{f:"1600-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Aizu-Wakamatsu", tur:"kale", lat:37.4950, lon:139.9300, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-11-07", d:"kenmu"},
     {f:"1336-11-07", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Morioka", tur:"sehir", lat:39.7020, lon:141.1550, g:0, k:0, d:[],
  kur:"1597-01-01",
  s:[{f:"1597-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Hirosaki", tur:"kale", lat:40.6030, lon:140.4640, g:0, k:0, d:[],
  kur:"1611-01-01",
  s:[{f:"1611-01-01", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// ⚠️ EZO (HOKKAİDO) — bu dosyanın en dikkatli yerlerinden biri.
// Hokkaido 1869'a kadar Japonya'nın parçası DEĞİLDİR; Ainu halkının
// ülkesidir. Japon iskânı yalnız güneybatı ucundadır (Oshima yarımadası):
// Kakizaki/Matsumae hânedanı XVI. yüzyıl ortasından itibaren burayı tuttu.
// Adanın geri kalanı 1869'da Kaitakushi (İskân Dairesi) ile ilhak edildi.
// Bu yüzden "ainu" AYRI KİMLİKTİR ve Sapporo'nun kur: tarihi 1869'dur.
// Ainu'yu "boş" bırakmak, MIMARI.md §6'nın "devletsiz ile veri-yok
// karıştırılmaz" kuralının tersi bir hata olurdu: burada halk da, siyasî
// düzen de vardı, merkezî devlet yoktu.

// Matsumae (Fukuyama) — Japon iskânının kuzey ucu; Kakizaki hânedanı
// 1550 civarında Ainu reisleriyle antlaşma yaparak yerleşti, 1604'te
// Tokugawa beratını aldı.
{ ad:"Matsumae", tur:"kale", lat:41.4280, lon:140.1120, g:0, k:0, d:[],
  kasitli_bosluk:true, neden:"Hokkaido/Ezo 1281-1550 arasinda hicbir devletin idari topragi degildi; anakara sogunluklari (Kamakura-Kenmu-Muromachi) Honsu'yla sinirliydi ve Matsumae klaninin buradaki varligi ancak 1590'larda basliyor. `ainu` diye boyamak var olmayan bir DEVLET uydurmakti (VERI DEVLET olcumu)",
  s:[{f:"1550-01-01", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Hakodate — 1854 Kanagawa Antlaşması'yla yabancı gemilere açılan iki
// limandan biri; Matsumae'ye 55 km.
{ ad:"Hakodate", tur:"liman", lat:41.7690, lon:140.7290, g:1, k:0, d:[],
  kasitli_bosluk:true, neden:"Hokkaido/Ezo 1281-1550 arasinda hicbir devletin idari topragi degildi; anakara sogunluklari (Kamakura-Kenmu-Muromachi) Honsu'yla sinirliydi ve Matsumae klaninin buradaki varligi ancak 1590'larda basliyor. `ainu` diye boyamak var olmayan bir DEVLET uydurmakti (VERI DEVLET olcumu)",
  s:[{f:"1550-01-01", t:"1573-01-01", d:"muromachi"},
     {f:"1573-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1923-10-29", d:"meiji-japonya"}] },

// Sapporo — Kaitakushi 1869'da kurdu (kur:); Hokkaido'nun iç kesiminin
// ilk Japon şehridir. 1869 öncesi boşluk KASITLIDIR ve komşu Ainu
// coğrafyasını Matsumae noktası taşır.
{ ad:"Sapporo", tur:"sehir", lat:43.0620, lon:141.3540, g:1, k:0, d:[],
  kur:"1869-01-01",
  s:[{f:"1869-01-01", t:"1923-10-29", d:"meiji-japonya"}] },

// ===== 6g. Ryukyu =====
//
// Shō Hashi 1429'da üç prensliği birleştirdi. Satsuma 1609'da işgal etti
// ama KRAL TAHTTA KALDI ve krallık hem Edo'ya hem Pekin'e vergi ödemeye
// devam etti; dosya kuralı gereği kimlik değişmedi. Japonya 4 Nisan
// 1879'da krallığı kaldırıp Okinawa vilâyetini kurdu.
{ ad:"Şuri (Naha)", tur:"sehir", lat:26.2170, lon:127.7190, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1879-04-04", d:"ryukyu"},
     {f:"1879-04-04", t:"1923-10-29", d:"meiji-japonya"}] },

// ###########################################################################
// BÖLÜM 7 — KORE
// ###########################################################################
//
// STANDART ZİNCİR:
//   1281 → 1392-07-17   goryeo   (Yi Seonggye'nin tahta çıkışı)
//   1392-07-17 → 1910-08-29  joseon
//   1910-08-29 → 1923   meiji-japonya
// ⚠️ Kore 1897'de "Kore İmparatorluğu" adını aldı; aynı hânedan ve aynı
// devlet olduğu için ayrı kimlik AÇILMADI (devletler.js de joseon'u
// 1910'a kadar tek kayıt tutuyor).
//
// ⚠️ İKİ GERÇEK TOPRAK İSTİSNASI — 1281'de Kore'nin tamamı Goryeo DEĞİLDİR:
//   • Ssangseong komutanlığı (Hamhung çevresi) 1258-1356 arasında Yuan'ın
//     DOĞRUDAN idaresindeydi.
//   • Tamna (Ceccu adası) 1273-1356 arasında Yuan'ın at yetiştirme
//     bölgesiydi ve doğrudan yönetiliyordu.
//   İkisi de 1356'da Kral Gongmin tarafından geri alındı. Bu iki nokta,
//   1281 karesinde Kore'nin haritada TEK RENK OLMADIĞINI gösterir.
//
// ⚠️ İMCİN SAVAŞI (1592-1598): Japon ordusu Seul'ü 11 ay (12 Haziran 1592 –
// 19 Mayıs 1593), Pyongyang'ı 6 ay (23 Temmuz 1592 – 8 Şubat 1593) tuttu;
// ikisi de bir yılın altında olduğu için işgal kuralı gereği pencere
// ALMADI. PUSAN ise 23 Mayıs 1592'den 24 Kasım 1598'e kadar altı buçuk yıl
// Japon garnizonundaydı — pencere aldı.

{ ad:"Kaesong", tur:"sehir", lat:37.9720, lon:126.5540, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

// Seul (Hanyang) — 1394'te Joseon'un başkenti oldu; şehir daha eskidir
// (Goryeo'nun "güney başkenti"), bu yüzden kur: YAZILMADI.
{ ad:"Seul (Hanyang)", tur:"sehir", lat:37.5660, lon:126.9780, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Pyongyang", tur:"sehir", lat:39.0190, lon:125.7380, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

// Pusan — İmcin Savaşı'nın çıkarma noktası ve savaş boyunca Japon
// ordusunun ana üssü; 1876 Ganghwa Antlaşması'yla açılan ilk limandır.
{ ad:"Pusan", tur:"liman", lat:35.1800, lon:129.0760, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1592-05-23", d:"joseon"},
     {f:"1592-05-23", t:"1598-11-24", d:"azuchi-momoyama"},
     {f:"1598-11-24", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"İnçon (Incheon)", tur:"liman", lat:37.4560, lon:126.7050, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

// Ganghwa — Moğol istilâları sırasında Goryeo sarayının 1232-1270 arası
// sığınağı; 1866 Fransız, 1871 Amerikan ve 1875 Japon çıkarmalarının
// sahnesi. Üçü de birkaç haftalıktır, pencere almadı.
{ ad:"Ganghwa", tur:"kale", lat:37.7470, lon:126.4880, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Kyongcu (Gyeongju)", tur:"sehir", lat:35.8560, lon:129.2250, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Taegu (Daegu)", tur:"sehir", lat:35.8720, lon:128.6010, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Concu (Jeonju)", tur:"sehir", lat:35.8240, lon:127.1480, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Kongcu (Gongju)", tur:"sehir", lat:36.4550, lon:127.1190, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Çungcu (Chungju)", tur:"sehir", lat:36.9910, lon:127.9260, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

// Ûicu (Uiju) — Yalu üzerindeki Çin kapısı; Kore elçilerinin Pekin yolu
// buradan geçerdi. 1592'de kral Seonjo buraya kaçtı.
{ ad:"Ûicu (Uiju)", tur:"kale", lat:40.1520, lon:124.5230, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

// Hamhung — Ssangseong komutanlığı: 1258-1356 arasında YUAN'IN DOĞRUDAN
// idaresindeydi, yani 1281'de Goryeo değildir. Kral Gongmin 1356'da geri
// aldı ve Yi hânedanının yükselişi buradan başladı.
{ ad:"Hamhung", tur:"sehir", lat:39.9180, lon:127.5360, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1356-01-01", d:"yuan-hanedani"},
     {f:"1356-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

{ ad:"Wonsan", tur:"liman", lat:39.1470, lon:127.4440, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1356-01-01", d:"yuan-hanedani"},
     {f:"1356-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

// Kyongsong — Joseon'un XV. yüzyılda Tumen'e kadar genişlettiği kuzeydoğu
// sınırının kalesi ("altı garnizon", 1434-1449).
{ ad:"Kyongsong (Gyeongseong)", tur:"kale", lat:41.5750, lon:129.5980, g:0, k:0, d:[],
  kur:"1434-01-01",
  s:[{f:"1434-01-01", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

// Ceccu (Jeju) — Tamna: 1273-1356 arasında Yuan'ın doğrudan idaresinde bir
// at yetiştirme bölgesiydi. Ada, kendi noktası olmazsa kutu açıldığında
// anakaranın peteğine emilirdi.
{ ad:"Ceccu (Jeju)", tur:"liman", lat:33.5000, lon:126.5310, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1356-01-01", d:"yuan-hanedani"},
     {f:"1356-01-01", t:"1392-07-17", d:"goryeo"},
     {f:"1392-07-17", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"meiji-japonya"}] },

// ###########################################################################
// BÖLÜM 8 — GÜNEYDOĞU ASYA
// ###########################################################################
//
// ZEMİN 1281: Pagan (Birmanya), Angkor Kmer, Champa, Trần (Đại Việt),
// Singhasari (Cava), Srivijaya kalıntısı (Palembang). Bunların dördü
// (Pagan, Angkor, Singhasari, Champa) on yıl içinde Moğol seferleriyle
// sarsıldı: 1287 Pagan düştü, 1292-93 Cava seferi Singhasari'yi yıktı ve
// Majapahit'in doğmasına yol açtı, 1285 ve 1288 Đại Việt seferleri
// püskürtüldü.
//
// AVRUPA KATMANI — bu bölgede dört Avrupa devleti aynı anda sahnede:
//   portekiz (Malaka 1511, Timor 1769) · ispanya (Filipinler 1565,
//   Ternate 1606) · hollanda-dogu-hint (VOC 1602'den) · ingiliz-malaya
//   ve ingiltere. Dördü de renkler.py'de ya tanımlı ya da devletler.js'te
//   kayıtlı.
//
// ⚠️ İNGİLİZ CAVA ARA DÖNEMİ (18 Ağustos 1811 – 19 Ağustos 1816) — Napolyon
// savaşları sırasında Hollanda'nın Doğu Hint adaları İngiltere'ye geçti;
// Raffles beş yıl Cava'yı yönetti. Bir yıldan uzun ve idareyi değiştirdiği
// için Cava noktalarının hepsinde pencere ALDI.

// ===== 8a. Birmanya =====
//
// "ava" kimliği Yukarı Birmanya'nın 1313-1555 arası krallıklarını
// (Pinya, Sagaing, Ava) tek gövde sayar; üçü de aynı Irrawaddy ovasının
// birbirini izleyen merkezleridir. "hanthawaddy" Aşağı Birmanya'nın Mon
// krallığıdır (Pegu). "san-devletleri" Şan platosunun beylikleridir ve
// İngiliz döneminde de kendi sawbwa'larıyla yönetildikleri için dosya
// kuralı gereği 1923'e kadar kimliklerini korur.
// İngiliz ilhakı üç adımdadır: 24 Şubat 1826 (Arakan ve Tenasserim),
// 20 Aralık 1852 (Aşağı Birmanya), 28 Kasım 1885 (Yukarı Birmanya).

// Pagan — 1281'de hâlâ ayakta ama Moğol baskısı altında; 1287'de krallık
// çöktü, 1297'de Myinsaing üçlüsü yönetimi aldı ve merkez kuzeye kaydı.
{ ad:"Pagan", tur:"sehir", lat:21.1710, lon:94.8600, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1313-01-01", d:"pagan"},
     {f:"1313-01-01", t:"1555-01-01", d:"ava"},
     {f:"1555-01-01", t:"1752-04-23", d:"toungoo"},
     {f:"1752-04-23", t:"1885-11-28", d:"konbaung"},
     {f:"1885-11-28", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Ava (İnwa) — 1364'te kuruldu (kur:) ve dört yüzyıl boyunca Yukarı
// Birmanya'nın başkenti oldu.
{ ad:"Ava (İnwa)", tur:"sehir", lat:21.8550, lon:95.9810, g:1, k:0, d:[],
  kur:"1364-01-01",
  s:[{f:"1364-01-01", t:"1555-01-01", d:"ava"},
     {f:"1555-01-01", t:"1752-04-23", d:"toungoo"},
     {f:"1752-04-23", t:"1885-11-28", d:"konbaung"},
     {f:"1885-11-28", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Mandalay — Kral Mindon 1857'de kurdu (kur:); Birmanya'nın son başkenti.
// 28 Kasım 1885'te İngilizler girdi ve krallık sona erdi. Ava'ya 15.6 km.
{ ad:"Mandalay", tur:"sehir", lat:21.9750, lon:96.0840, g:1, k:0, d:[],
  kur:"1857-01-01",
  s:[{f:"1857-01-01", t:"1885-11-28", d:"konbaung"},
     {f:"1885-11-28", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Pegu (Bago) — Mon Hanthawaddy krallığının başkenti; 1539'da Toungoo
// aldı, 1740'ta Monlar yeniden bağımsızlaştı, 6 Mayıs 1757'de Alaungpaya
// şehri yıktı ve Mon devleti bir daha kurulmadı.
{ ad:"Pegu (Bago)", tur:"sehir", lat:17.3350, lon:96.4790, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1287-01-01", d:"pagan"},
     {f:"1287-01-01", t:"1539-01-01", d:"hanthawaddy"},
     {f:"1539-01-01", t:"1740-01-01", d:"toungoo"},
     {f:"1740-01-01", t:"1757-05-06", d:"hanthawaddy"},
     {f:"1757-05-06", t:"1852-12-20", d:"konbaung"},
     {f:"1852-12-20", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Rangun (Yangon) — Alaungpaya 1755'te Dagon köyünü şehir yapıp "Yangon"
// adını verdi; yerleşim daha eski (Shwedagon pagodası) olduğu için kur:
// YAZILMADI. İngiliz donanması 14 Nisan 1852'de aldı ve şehir Britanya
// Birmanyası'nın başkenti oldu.
{ ad:"Rangun (Yangon)", tur:"liman", lat:16.8710, lon:96.1990, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1287-01-01", d:"pagan"},
     {f:"1287-01-01", t:"1539-01-01", d:"hanthawaddy"},
     {f:"1539-01-01", t:"1740-01-01", d:"toungoo"},
     {f:"1740-01-01", t:"1755-05-03", d:"hanthawaddy"},
     {f:"1755-05-03", t:"1852-04-14", d:"konbaung"},
     {f:"1852-04-14", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Toungoo — 1510'da bağımsızlığını ilân eden ve yüz yıl içinde Güneydoğu
// Asya'nın en büyük imparatorluğunu kuran hânedanın çıkış şehri.
{ ad:"Toungoo", tur:"kale", lat:18.9430, lon:96.4350, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1313-01-01", d:"pagan"},
     {f:"1313-01-01", t:"1510-10-16", d:"ava"},
     {f:"1510-10-16", t:"1752-04-23", d:"toungoo"},
     {f:"1752-04-23", t:"1852-12-20", d:"konbaung"},
     {f:"1852-12-20", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Prome (Pyay)", tur:"kale", lat:18.8170, lon:95.2130, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1313-01-01", d:"pagan"},
     {f:"1313-01-01", t:"1542-05-19", d:"ava"},
     {f:"1542-05-19", t:"1752-04-23", d:"toungoo"},
     {f:"1752-04-23", t:"1852-12-20", d:"konbaung"},
     {f:"1852-12-20", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Mrauk U — Arakan krallığının başkenti (1430'dan itibaren); Bengal
// körfezinin en güçlü deniz devletlerinden ve 1459-1666 arasında
// Çatgam'ın sahibi. Bodawpaya 2 Ocak 1785'te ilhak etti.
{ ad:"Mrauk U (Arakan)", tur:"sehir", lat:20.5880, lon:93.1910, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1785-01-02", d:"arakan"},
     {f:"1785-01-02", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Moulmein (Mawlamyine)", tur:"liman", lat:16.4821, lon:97.6462, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1287-01-01", d:"pagan"},
     {f:"1287-01-01", t:"1539-01-01", d:"hanthawaddy"},
     {f:"1539-01-01", t:"1740-01-01", d:"toungoo"},
     {f:"1740-01-01", t:"1757-05-06", d:"hanthawaddy"},
     {f:"1757-05-06", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Tavoy ve Mergui — Tenasserim kıyısı. XIV. yüzyıldan XVIII. yüzyıla
// kadar Siyam'ın Hint Okyanusu kapısıydı: Mergui, Ayutthaya'nın batı
// limanıdır ve 1687'de burada İngiliz-Siyam çatışması yaşandı. Alaungpaya
// 1760'ta ikisini de aldı.
{ ad:"Tavoy (Dawei)", tur:"liman", lat:14.0840, lon:98.1990, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1287-01-01", d:"pagan"},
     {f:"1287-01-01", t:"1373-01-01", d:"hanthawaddy"},
     {f:"1373-01-01", t:"1760-01-01", d:"ayutthaya"},
     {f:"1760-01-01", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1923-10-29", d:"ingiliz-hindistani"}] },

{ ad:"Mergui (Myeik)", tur:"liman", lat:12.4361, lon:98.6130, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1287-01-01", d:"pagan"},
     {f:"1287-01-01", t:"1373-01-01", d:"hanthawaddy"},
     {f:"1373-01-01", t:"1760-01-01", d:"ayutthaya"},
     {f:"1760-01-01", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1923-10-29", d:"ingiliz-hindistani"}] },

// Kengtung — Şan platosunun doğu ucu; sawbwa'ları hem Birmanya'ya hem
// Çin'e vergi öderdi. İngiliz döneminde de kendi beyleri yönetti.
{ ad:"Kengtung", tur:"sehir", lat:21.2900, lon:99.6050, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1923-10-29", d:"san-devletleri"}] },

// ===== 8b. Siyam =====
//
// sukhothai (1238-1438) → ayutthaya (1351-1767) → tonburi (1767-1782) →
// siyam-chakri (1782-1923). Ayutthaya 1569-1584 arasında Toungoo'nun
// tâbii oldu; Naresuan 3 Mayıs 1584'te bağımsızlığı ilân etti. 7 Nisan
// 1767'de Birmanya şehri yaktı ve Ayutthaya bir daha başkent olmadı.

{ ad:"Sukhothai", tur:"sehir", lat:17.0200, lon:99.7030, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1438-01-01", d:"sukhothai"},
     {f:"1438-01-01", t:"1767-04-07", d:"ayutthaya"},
     {f:"1767-04-07", t:"1782-04-06", d:"tonburi"},
     {f:"1782-04-06", t:"1923-10-29", d:"siyam-chakri"}] },

// Ayutthaya — 4 Mart 1351'de kuruldu (kur:), 7 Nisan 1767'de yakıldı ve
// terk edildi (bit:). Sahiplik zinciri 1923'e kadar TAM bırakıldı.
{ ad:"Ayutthaya", tur:"sehir", lat:14.3530, lon:100.5780, g:2, k:0, d:[],
  kur:"1351-03-04", bit:"1767-04-07",
  s:[{f:"1351-03-04", t:"1569-08-08", d:"ayutthaya"},
     {f:"1569-08-08", t:"1584-05-03", d:"toungoo"},
     {f:"1584-05-03", t:"1767-04-07", d:"ayutthaya"},
     {f:"1767-04-07", t:"1782-04-06", d:"tonburi"},
     {f:"1782-04-06", t:"1923-10-29", d:"siyam-chakri"}] },

// Bangkok — Taksin 1767 sonunda Tonburi'yi (nehrin batı yakası) başkent
// yaptı, I. Rama 6 Nisan 1782'de doğu yakaya geçip Bangkok'u kurdu (kur:).
// İki merkez 5 km arayla aynı şehirdir; tek nokta olarak yazıldı.
{ ad:"Bangkok (Tonburi)", tur:"sehir", lat:13.7540, lon:100.5010, g:2, k:0, d:[],
  kur:"1767-12-28",
  s:[{f:"1767-12-28", t:"1782-04-06", d:"tonburi"},
     {f:"1782-04-06", t:"1923-10-29", d:"siyam-chakri"}] },

// Chiang Mai — Lan Na krallığının başkenti, 12 Nisan 1296'da kuruldu
// (kur:). Bayinnaung 2 Nisan 1558'de aldı ve Lan Na iki yüz yıl Birmanya
// idaresinde kaldı; 15 Ocak 1774'te Siyam'a geçti.
{ ad:"Chiang Mai", tur:"sehir", lat:18.7880, lon:98.9850, g:1, k:0, d:[],
  kur:"1296-04-12",
  s:[{f:"1296-04-12", t:"1558-04-02", d:"lan-na"},
     {f:"1558-04-02", t:"1752-04-23", d:"toungoo"},
     {f:"1752-04-23", t:"1774-01-15", d:"konbaung"},
     {f:"1774-01-15", t:"1923-10-29", d:"siyam-chakri"}] },

// Nakhon Si Thammarat — Malay yarımadasının Siyam tarafındaki kilit
// şehri; Kedah, Patani ve Trengganu üzerindeki Siyam nüfuzu buradan
// yürütülürdü.
{ ad:"Nakhon Si Thammarat", tur:"sehir", lat:8.4320, lon:99.9640, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1438-01-01", d:"sukhothai"},
     {f:"1438-01-01", t:"1767-04-07", d:"ayutthaya"},
     {f:"1767-04-07", t:"1782-04-06", d:"tonburi"},
     {f:"1782-04-06", t:"1923-10-29", d:"siyam-chakri"}] },

// ===== 8c. Laos ve Kamboçya =====
//
// "lan-xang" (1353-1707) Fa Ngum'un kurduğu birleşik Laos krallığıdır;
// 1707'de Luang Prabang, Vientiane ve (1713) Champasak olarak üçe
// bölündü — "laos-kralliklari" bu üçünü kapsar. 3 Ekim 1893 Fransız-Siyam
// antlaşmasıyla Mekong'un doğusu Fransız Çinhindi'ne geçti.
// ⚠️ 1281-1353 arası Muang Sua prensliğidir; ayrı kimlik açılmak yerine
// "lan-xang" başlangıcı 1281'e çekildi ve gerekçesi burada yazıldı —
// bölgeyi Angkor ya da Sukhothai ile boyamak daha büyük bir hata olurdu.

{ ad:"Luang Prabang", tur:"sehir", lat:19.8850, lon:102.1350, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1707-01-01", d:"lan-xang"},
     {f:"1707-01-01", t:"1893-10-03", d:"laos-kralliklari"},
     {f:"1893-10-03", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// Vientiane — 1560'ta Lan Xang'ın başkenti oldu; Siyam 1828'de şehri
// yıktı ve krallığı kaldırdı, 1893'te Fransa aldı.
{ ad:"Vientiane", tur:"sehir", lat:17.9750, lon:102.6300, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1707-01-01", d:"lan-xang"},
     {f:"1707-01-01", t:"1828-11-01", d:"laos-kralliklari"},
     {f:"1828-11-01", t:"1893-10-03", d:"siyam-chakri"},
     {f:"1893-10-03", t:"1923-10-29", d:"fransiz-cinhindi"}] },

{ ad:"Champasak", tur:"sehir", lat:14.8920, lon:105.8760, g:0, k:0, d:[],
  kur:"1713-01-01",
  s:[{f:"1713-01-01", t:"1778-01-01", d:"laos-kralliklari"},
     {f:"1778-01-01", t:"1893-10-03", d:"siyam-chakri"},
     {f:"1893-10-03", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// Angkor — Kmer imparatorluğunun başkenti; 1431'de Ayutthaya aldı ve
// merkez güneye, Phnom Penh'e taşındı. Şehir tamamen boşalmadığı (Angkor
// Wat işleyen bir mâbet olarak kaldığı) için bit: YAZILMADI.
// Battambang ile birlikte 1795-1907 arasında Siyam idaresindeydi;
// 23 Mart 1907 antlaşmasıyla Kamboçya'ya iade edildi.
{ ad:"Angkor (Siem Reap)", tur:"sehir", lat:13.4120, lon:103.8670, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1431-01-01", d:"angkor-kmer"},
     {f:"1431-01-01", t:"1795-01-01", d:"kamboc-kralligi"},
     {f:"1795-01-01", t:"1907-03-23", d:"siyam-chakri"},
     {f:"1907-03-23", t:"1923-10-29", d:"fransiz-cinhindi"}] },

{ ad:"Battambang", tur:"sehir", lat:13.0960, lon:103.2030, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1431-01-01", d:"angkor-kmer"},
     {f:"1431-01-01", t:"1795-01-01", d:"kamboc-kralligi"},
     {f:"1795-01-01", t:"1907-03-23", d:"siyam-chakri"},
     {f:"1907-03-23", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// Phnom Penh — 1434'te Kmer başkenti oldu (kur:). Kral Norodom 11 Ağustos
// 1863'te Fransız himayesini kabul etti.
{ ad:"Phnom Penh", tur:"sehir", lat:11.5620, lon:104.8880, g:1, k:0, d:[],
  kur:"1434-01-01",
  s:[{f:"1434-01-01", t:"1863-08-11", d:"kamboc-kralligi"},
     {f:"1863-08-11", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// Oudong — 1618-1866 arası Kamboçya'nın başkenti; Phnom Penh'e 31 km.
{ ad:"Oudong", tur:"sehir", lat:11.8080, lon:104.7440, g:0, k:0, d:[],
  kur:"1618-01-01",
  s:[{f:"1618-01-01", t:"1863-08-11", d:"kamboc-kralligi"},
     {f:"1863-08-11", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// ===== 8d. Vietnam ve Champa =====
//
// ZİNCİR (kuzey): tran-hanedani (1225-1400) → ho-hanedani (1400-1407) →
// ming-hanedani (1407-1427, yirmi yıllık Çin ilhakı) → le-hanedani
// (1428-) → mac-hanedani (1527-1592, Thăng Long'da) → le (Trịnh
// naipliğinde) → tay-son (1778-1802) → nguyen-hanedani (1802-) →
// fransiz-cinhindi.
// ZİNCİR (güney): campa 1832'ye kadar güneyde tutundu; ortası Nguyễn
// beylerinin (Đàng Trong, 1558-1777) ülkesidir.
// ⚠️ Trịnh-Nguyễn bölünmesi (1600-1774) haritada GÖRÜNÜR: kuzey noktaları
// "le-hanedani", Huế ve güneyi "nguyen-beyligi" taşır. İki devlet Gianh
// ırmağında sınırdaştı.

// Hanoi (Thăng Long) — Đại Việt'in bin yıllık başkenti. Ming 1407-1427
// arasında doğrudan ilhak etti; Lê Lợi'nin direnişi 1428'de bağımsızlığı
// geri getirdi.
{ ad:"Hanoi (Thăng Long)", tur:"sehir", lat:21.0280, lon:105.8340, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1400-03-01", d:"tran-hanedani"},
     {f:"1400-03-01", t:"1407-06-17", d:"ho-hanedani"},
     {f:"1407-06-17", t:"1428-01-03", d:"ming-hanedani"},
     {f:"1428-01-03", t:"1527-06-15", d:"le-hanedani"},
     {f:"1527-06-15", t:"1592-01-01", d:"mac-hanedani"},
     {f:"1592-01-01", t:"1786-07-21", d:"le-hanedani"},
     {f:"1786-07-21", t:"1802-06-20", d:"tay-son"},
     {f:"1802-06-20", t:"1883-08-25", d:"nguyen-hanedani"},
     {f:"1883-08-25", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// Cao Bằng — Mạc hânedanı Thăng Long'u kaybettikten sonra 1592-1677
// arasında burada, Çin sınırında tutundu. Vietnam'ın seksen beş yıl
// boyunca ikiye bölünmüş olduğunu haritada gösteren tek noktadır.
{ ad:"Cao Bằng", tur:"kale", lat:22.6660, lon:106.2580, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1400-03-01", d:"tran-hanedani"},
     {f:"1400-03-01", t:"1407-06-17", d:"ho-hanedani"},
     {f:"1407-06-17", t:"1428-01-03", d:"ming-hanedani"},
     {f:"1428-01-03", t:"1527-06-15", d:"le-hanedani"},
     {f:"1527-06-15", t:"1677-01-01", d:"mac-hanedani"},
     {f:"1677-01-01", t:"1786-07-21", d:"le-hanedani"},
     {f:"1786-07-21", t:"1802-06-20", d:"tay-son"},
     {f:"1802-06-20", t:"1883-08-25", d:"nguyen-hanedani"},
     {f:"1883-08-25", t:"1923-10-29", d:"fransiz-cinhindi"}] },

{ ad:"Lạng Sơn", tur:"kale", lat:21.8530, lon:106.7610, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1400-03-01", d:"tran-hanedani"},
     {f:"1400-03-01", t:"1407-06-17", d:"ho-hanedani"},
     {f:"1407-06-17", t:"1428-01-03", d:"ming-hanedani"},
     {f:"1428-01-03", t:"1527-06-15", d:"le-hanedani"},
     {f:"1527-06-15", t:"1592-01-01", d:"mac-hanedani"},
     {f:"1592-01-01", t:"1786-07-21", d:"le-hanedani"},
     {f:"1786-07-21", t:"1802-06-20", d:"tay-son"},
     {f:"1802-06-20", t:"1883-08-25", d:"nguyen-hanedani"},
     {f:"1883-08-25", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// Huế (Phú Xuân) — 1306'da Champa'dan Đại Việt'e çeyiz olarak geçen iki
// vilâyetin içindedir. Nguyễn beyleri 1687'de burayı merkez yaptı;
// Gia Long 1802'de birleşik Vietnam'ın başkenti ilân etti. 6 Haziran
// 1884 Patenôtre Antlaşması himayeyi kesinleştirdi.
{ ad:"Huế (Phú Xuân)", tur:"sehir", lat:16.4630, lon:107.5850, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1306-01-01", d:"campa"},
     {f:"1306-01-01", t:"1400-03-01", d:"tran-hanedani"},
     {f:"1400-03-01", t:"1407-06-17", d:"ho-hanedani"},
     {f:"1407-06-17", t:"1428-01-03", d:"ming-hanedani"},
     {f:"1428-01-03", t:"1558-01-01", d:"le-hanedani"},
     {f:"1558-01-01", t:"1775-02-01", d:"nguyen-beyligi"},
     {f:"1775-02-01", t:"1786-06-01", d:"le-hanedani"},
     {f:"1786-06-01", t:"1801-06-15", d:"tay-son"},
     {f:"1801-06-15", t:"1884-06-06", d:"nguyen-hanedani"},
     {f:"1884-06-06", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// Hội An (Faifo) — XVI-XVIII. yüzyılın en canlı uluslararası limanı;
// Japon, Çinli, Portekizli ve Hollandalı tüccarların mahalleleri vardı.
{ ad:"Hội An (Faifo)", tur:"liman", lat:15.8800, lon:108.3350, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1471-03-02", d:"campa"},
     {f:"1471-03-02", t:"1558-01-01", d:"le-hanedani"},
     {f:"1558-01-01", t:"1775-02-01", d:"nguyen-beyligi"},
     {f:"1775-02-01", t:"1786-06-01", d:"le-hanedani"},
     {f:"1786-06-01", t:"1802-06-01", d:"tay-son"},
     {f:"1802-06-01", t:"1884-06-06", d:"nguyen-hanedani"},
     {f:"1884-06-06", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// Đà Nẵng (Tourane) — Fransız müdahalesi 1 Eylül 1858'de burada başladı;
// 1888'de doğrudan Fransız toprağı (concession) oldu. Hội An'a 22 km.
{ ad:"Đà Nẵng (Tourane)", tur:"liman", lat:16.0540, lon:108.2020, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1471-03-02", d:"campa"},
     {f:"1471-03-02", t:"1558-01-01", d:"le-hanedani"},
     {f:"1558-01-01", t:"1775-02-01", d:"nguyen-beyligi"},
     {f:"1775-02-01", t:"1786-06-01", d:"le-hanedani"},
     {f:"1786-06-01", t:"1802-06-01", d:"tay-son"},
     {f:"1802-06-01", t:"1884-06-06", d:"nguyen-hanedani"},
     {f:"1884-06-06", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// Vijaya (Chà Bàn / Quy Nhơn) — Champa'nın başkenti; Lê Thánh Tông
// 2 Mart 1471'de aldı ve Champa bir daha toparlanamadı. Üç yüz yıl sonra
// Tây Sơn ayaklanması yine buradan çıktı (1771).
{ ad:"Vijaya (Quy Nhơn)", tur:"kale", lat:13.9000, lon:109.1000, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1471-03-02", d:"campa"},
     {f:"1471-03-02", t:"1558-01-01", d:"le-hanedani"},
     {f:"1558-01-01", t:"1773-01-01", d:"nguyen-beyligi"},
     {f:"1773-01-01", t:"1802-06-01", d:"tay-son"},
     {f:"1802-06-01", t:"1884-06-06", d:"nguyen-hanedani"},
     {f:"1884-06-06", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// Phan Rang (Panduranga) — Champa'nın son kalıntısı; Minh Mạng 1832'de
// kaldırdı. Bu, 1500 yıllık Çam devletinin haritadan silindiği tarihtir.
{ ad:"Phan Rang (Panduranga)", tur:"sehir", lat:11.5640, lon:108.9880, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1832-01-01", d:"campa"},
     {f:"1832-01-01", t:"1884-06-06", d:"nguyen-hanedani"},
     {f:"1884-06-06", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// Saygon (Gia Định) — Mekong deltası 1698'e kadar Kmer toprağıdır;
// Nguyễn beyleri o yıl Gia Định'i kurdu. Fransız donanması 17 Şubat
// 1859'da aldı ve Cochinchine sömürgesinin merkezi oldu.
{ ad:"Saygon (Gia Định)", tur:"liman", lat:10.8230, lon:106.6300, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1431-01-01", d:"angkor-kmer"},{f:"1431-01-01", t:"1698-01-01", d:"kamboc-kralligi"},
     {f:"1698-01-01", t:"1777-01-01", d:"nguyen-beyligi"},
     {f:"1777-01-01", t:"1788-09-07", d:"tay-son"},
     {f:"1788-09-07", t:"1802-06-01", d:"nguyen-beyligi"},
     {f:"1802-06-01", t:"1859-02-17", d:"nguyen-hanedani"},
     {f:"1859-02-17", t:"1923-10-29", d:"fransiz-cinhindi"}] },

// ===== 8e. Malay yarımadası =====
//
// "malay-sultanliklari" Kedah, Patani, Perak, Selangor, Trengganu ve
// Pahang'ı tek kimlikte toplar; altısı da aynı siyasî düzenin (Malaka
// sonrası yarımada sultanlıkları) parçasıdır ve hiçbiri diğerini
// haritada anlamlı biçimde ayırmaz. Johor ise AYRI kimliktir çünkü
// Malaka hânedanının doğrudan devamıdır ve 1923'e kadar taht sürdü.

// Malaka — 1400 civarında kuruldu (kur:); Albuquerque 24 Ağustos 1511'de
// aldı, Hollanda 14 Ocak 1641'de, İngiltere 1824 antlaşmasıyla (fiilî
// devir 1825).
{ ad:"Malaka", tur:"liman", lat:2.1960, lon:102.2500, g:2, k:0, d:[],
  kur:"1400-01-01",
  s:[{f:"1400-01-01", t:"1511-08-24", d:"malaka-sultanligi"},
     {f:"1511-08-24", t:"1641-01-14", d:"portekiz"},
     {f:"1641-01-14", t:"1825-03-01", d:"hollanda-dogu-hint"},
     {f:"1825-03-01", t:"1923-10-29", d:"ingiliz-malaya"}] },

// Singapur — Raffles 29 Ocak 1819'da karaya çıktı ve Johor'dan aldığı
// izinle ticaret istasyonunu kurdu (kur:). 1819 öncesi boşluk KASITLIDIR:
// XIV. yüzyıl Temasek'i çoktan terk edilmişti ve ada Johor'un balıkçı
// köyüydü; o dönemin sahibini komşu Johor noktası taşıyor.
{ ad:"Singapur", tur:"liman", lat:1.2900, lon:103.8520, g:2, k:0, d:[],
  kur:"1819-01-29",
  s:[{f:"1819-01-29", t:"1826-11-27", d:"ingiltere"},
     {f:"1826-11-27", t:"1923-10-29", d:"ingiliz-malaya"}] },

// Johor — Malaka'nın son sultanının oğlu 1528'de kurdu; Portekiz, Açe ve
// Hollanda arasındaki üçlü mücadelenin dördüncü tarafıdır. 1914'te
// İngiliz danışman kabul etti ama hânedan sürdü.
{ ad:"Johor", tur:"sehir", lat:1.4930, lon:103.7410, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1400-01-01", d:"malay-sultanliklari"},
     {f:"1400-01-01", t:"1528-01-01", d:"malaka-sultanligi"},
     {f:"1528-01-01", t:"1923-10-29", d:"cohor-sultanligi"}] },

// Penang — Francis Light 11 Ağustos 1786'da Kedah sultanından aldı (kur:);
// İngiltere'nin yarımadadaki ilk toprağıdır.
{ ad:"Penang (George Town)", tur:"liman", lat:5.4140, lon:100.3290, g:1, k:0, d:[],
  kur:"1786-08-11",
  s:[{f:"1786-08-11", t:"1826-11-27", d:"ingiltere"},
     {f:"1826-11-27", t:"1923-10-29", d:"ingiliz-malaya"}] },

// Kedah — 1821'de Siyam işgal etti, 1842'de sultan tahta iade edildi;
// 10 Temmuz 1909 İngiliz-Siyam antlaşmasıyla İngiliz nüfuz alanına geçti.
{ ad:"Kedah (Alor Setar)", tur:"sehir", lat:6.1210, lon:100.3600, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1821-11-12", d:"malay-sultanliklari"},
     {f:"1821-11-12", t:"1842-01-01", d:"siyam-chakri"},
     {f:"1842-01-01", t:"1909-07-10", d:"malay-sultanliklari"},
     {f:"1909-07-10", t:"1923-10-29", d:"ingiliz-malaya"}] },

// Patani — Malay sultanlıklarının kuzeydeki ucu; Siyam 1786'da ilhak etti
// ve Bangkok'ta kaldı (1909 antlaşmasında da Siyam'da bırakıldı).
{ ad:"Patani", tur:"liman", lat:6.8690, lon:101.2500, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1786-01-01", d:"malay-sultanliklari"},
     {f:"1786-01-01", t:"1923-10-29", d:"siyam-chakri"}] },

// Perak — 20 Ocak 1874 Pangkor Antlaşması, İngiltere'nin yarımadadaki
// "danışman" düzeninin başlangıcıdır.
{ ad:"Perak (Kuala Kangsar)", tur:"sehir", lat:4.7670, lon:100.9370, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1874-01-20", d:"malay-sultanliklari"},
     {f:"1874-01-20", t:"1923-10-29", d:"ingiliz-malaya"}] },

// Kuala Lumpur — 1857'de kalay madencilerinin kurduğu kasaba (kur:);
// 1896'da Federe Malay Devletleri'nin başkenti oldu.
{ ad:"Kuala Lumpur", tur:"sehir", lat:3.1390, lon:101.6870, g:1, k:0, d:[],
  kur:"1857-01-01",
  s:[{f:"1857-01-01", t:"1874-01-20", d:"malay-sultanliklari"},
     {f:"1874-01-20", t:"1923-10-29", d:"ingiliz-malaya"}] },

// ===== 8f. Sumatra =====

// Samudra Pasai — Güneydoğu Asya'nın İLK Müslüman devleti (1267); İbn
// Battûta 1345-46'da buraya uğradı ve sultanı anlattı. 1521'de Portekiz
// aldı, Açe kısa sürede ilhak etti.
{ ad:"Samudra Pasai", tur:"liman", lat:5.1800, lon:97.0700, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1521-01-01", d:"samudra-pasai"},
     {f:"1521-01-01", t:"1524-01-01", d:"portekiz"},
     {f:"1524-01-01", t:"1903-01-10", d:"ace-sultanligi"},
     {f:"1903-01-10", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Banda Açe — Açe Sultanlığı 1496'da kuruldu (kur:) ve XVI. yüzyılda
// Osmanlı Devleti'nden top ve topçu yardımı istedi (1566 elçiliği);
// bu dosyanın Osmanlı ile doğrudan teması olan tek noktasıdır.
// Hollanda savaşı 1873'te başladı, sultan 10 Ocak 1903'te teslim oldu.
{ ad:"Banda Açe", tur:"liman", lat:5.5480, lon:95.3240, g:2, k:0, d:[],
  kur:"1496-01-01",
  s:[{f:"1496-01-01", t:"1903-01-10", d:"ace-sultanligi"},
     {f:"1903-01-10", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Padang — Minangkabau'nun (Pagaruyung) limanı; VOC 1663'te yerleşti,
// İngiltere Napolyon savaşlarında iki kez aldı (1781-1784 ve 1795-1819).
{ ad:"Padang", tur:"liman", lat:-0.9470, lon:100.4170, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1663-01-01", d:"pagaruyung"},
     {f:"1663-01-01", t:"1795-08-18", d:"hollanda-dogu-hint"},
     {f:"1795-08-18", t:"1819-05-01", d:"ingiltere"},
     {f:"1819-05-01", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Palembang — Srivijaya'nın merkeziydi; 1281'de imparatorluk çökmüş,
// şehir Cava'nın (önce Singhasari, sonra Majapahit) nüfuzundaydı.
// 1659'da sultanlık kuruldu, Hollanda 1825'te kaldırdı. Bu üç evre tek
// "palembang-sultanligi" kimliğinde toplandı: hepsi aynı Musi ırmağı
// ağzının devletidir ve ayrı ayrı boyanmaları haritaya bilgi katmaz.
{ ad:"Palembang", tur:"liman", lat:-2.9760, lon:104.7750, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1825-01-01", d:"palembang-sultanligi"},
     {f:"1825-01-01", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Bengkulu (Bencoolen) — İngiltere'nin Sumatra'daki 139 yıllık üssü
// (1685-1824); 1824 Londra Antlaşması'yla Singapur karşılığında
// Hollanda'ya verildi.
{ ad:"Bengkulu (Bencoolen)", tur:"liman", lat:-3.7961, lon:102.2722, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1685-01-01", d:"pagaruyung"},
     {f:"1685-01-01", t:"1824-03-17", d:"ingiltere"},
     {f:"1824-03-17", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// ===== 8g. Cava ve Bali =====

// Trowulan — Majapahit'in başkenti. Singhasari 1292'de Kediri isyanıyla
// yıkıldı; Moğol donanmasının 1293'teki Cava seferini Raden Wijaya kendi
// lehine çevirdi ve Majapahit'i kurdu (kur: 10 Kasım 1293).
{ ad:"Trowulan (Majapahit)", tur:"sehir", lat:-7.5450, lon:112.3830, g:2, k:0, d:[],
  kur:"1293-11-10",
  s:[{f:"1293-11-10", t:"1527-01-01", d:"majapahit"},
     {f:"1527-01-01", t:"1587-01-01", d:"demak"},
     {f:"1587-01-01", t:"1743-11-11", d:"mataram-sultanligi"},
     {f:"1743-11-11", t:"1811-08-18", d:"hollanda-dogu-hint"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Demak — Cava'nın ilk İslâm sultanlığı; Majapahit'i 1527'de yıktı.
{ ad:"Demak", tur:"sehir", lat:-6.8900, lon:110.6390, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1292-01-01", d:"singhasari"},
     {f:"1292-01-01", t:"1478-01-01", d:"majapahit"},
     {f:"1478-01-01", t:"1587-01-01", d:"demak"},
     {f:"1587-01-01", t:"1743-11-11", d:"mataram-sultanligi"},
     {f:"1743-11-11", t:"1811-08-18", d:"hollanda-dogu-hint"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

{ ad:"Semarang", tur:"liman", lat:-6.9660, lon:110.4170, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1292-01-01", d:"singhasari"},
     {f:"1292-01-01", t:"1478-01-01", d:"majapahit"},
     {f:"1478-01-01", t:"1587-01-01", d:"demak"},
     {f:"1587-01-01", t:"1705-01-01", d:"mataram-sultanligi"},
     {f:"1705-01-01", t:"1811-08-18", d:"hollanda-dogu-hint"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

{ ad:"Surabaya", tur:"liman", lat:-7.2570, lon:112.7520, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1292-01-01", d:"singhasari"},
     {f:"1292-01-01", t:"1527-01-01", d:"majapahit"},
     {f:"1527-01-01", t:"1587-01-01", d:"demak"},{f:"1587-01-01", t:"1625-01-01", d:"mataram-sultanligi"},
     {f:"1625-01-01", t:"1743-11-11", d:"mataram-sultanligi"},
     {f:"1743-11-11", t:"1811-08-18", d:"hollanda-dogu-hint"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Batavia — Jan Pieterszoon Coen, Cayakarta'yı 30 Mayıs 1619'da yıkıp
// yerine Batavia'yı kurdu (kur:) ve VOC'un Asya merkezi yaptı.
{ ad:"Batavia (Cakarta)", tur:"liman", lat:-6.1750, lon:106.8270, g:2, k:0, d:[],
  kur:"1619-05-30",
  s:[{f:"1619-05-30", t:"1811-08-18", d:"hollanda-dogu-hint"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Banten — Sunda Kalapa'yı 1527'de alarak Cava'nın batısında sultanlık
// kurdu; XVII. yüzyılda dünyanın en büyük biber limanıydı. Hollanda
// 1813'te sultanlığı kaldırdı.
{ ad:"Banten", tur:"liman", lat:-6.0360, lon:106.1500, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1527-06-22", d:"sunda-pajajaran"},
     {f:"1527-06-22", t:"1811-08-18", d:"banten-sultanligi"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// ⚠️ 13 Şubat 1755 Giyanti Antlaşması Mataram'ı İKİYE böldü: Yogyakarta
// sultanlığı ve Surakarta susuhunanlığı. İkisi de 1945'e kadar kendi
// hânedanlarıyla yönetildi (Hollanda himayesinde ama tahtları yerinde),
// bu yüzden dosya kuralı gereği AYRI kimlik taşırlar ve 1923'e kadar
// "hollanda-dogu-hint" ile boyanmazlar.

{ ad:"Yogyakarta", tur:"sehir", lat:-7.7970, lon:110.3710, g:1, k:0, d:[],
  kur:"1755-10-07",
  s:[{f:"1755-10-07", t:"1811-08-18", d:"yogyakarta"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1923-10-29", d:"yogyakarta"}] },

{ ad:"Surakarta (Solo)", tur:"sehir", lat:-7.5750, lon:110.8240, g:1, k:0, d:[],
  kur:"1745-02-17",
  s:[{f:"1745-02-17", t:"1811-08-18", d:"mataram-sultanligi"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1923-10-29", d:"surakarta"}] },

// Bali — Majapahit 1343'te aldı; Cava İslâmlaşınca ada Hindu kaldı ve
// Gelgel/Klungkung krallıkları sürdü. Hollanda 28 Nisan 1908'deki
// Klungkung puputan'ıyla adayı tamamen aldı.
{ ad:"Bali (Klungkung)", tur:"sehir", lat:-8.6500, lon:115.2160, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1343-01-01", d:"singhasari"},
     {f:"1343-01-01", t:"1478-01-01", d:"majapahit"},
     {f:"1478-01-01", t:"1908-04-28", d:"bali-kralliklari"},
     {f:"1908-04-28", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Mataram (Lombok) — XVIII. yüzyıldan itibaren Balili Karangasem
// hânedanı yönetti; Hollanda 22 Kasım 1894'te aldı. Cava'daki Mataram
// Sultanlığı ile karışmasın diye ad parantezlidir.
{ ad:"Mataram (Lombok)", tur:"sehir", lat:-8.5830, lon:116.1170, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1343-01-01", d:"singhasari"},
     {f:"1343-01-01", t:"1478-01-01", d:"majapahit"},
     {f:"1478-01-01", t:"1894-11-22", d:"bali-kralliklari"},
     {f:"1894-11-22", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// ===== 8h. Borneo, Sulawesi, Maluku ve Küçük Sunda =====

// Brunei — Borneo'nun kuzeyini yüzyıllarca elinde tuttu; 1888'de İngiliz
// himayesine girdi ama sultanlık sürdü (bugün de sürüyor).
{ ad:"Brunei", tur:"liman", lat:4.9030, lon:114.9390, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1923-10-29", d:"brunei-sultanligi"}] },

// Kuching — James Brooke 24 Eylül 1841'de Brunei sultanından Sarawak'ı
// aldı ve "beyaz racalar" hânedanını kurdu; 1946'ya kadar sürdü.
{ ad:"Kuching (Sarawak)", tur:"liman", lat:1.5530, lon:110.3590, g:1, k:0, d:[],
  kur:"1827-01-01",
  s:[{f:"1827-01-01", t:"1841-09-24", d:"brunei-sultanligi"},
     {f:"1841-09-24", t:"1923-10-29", d:"sarawak-brooke"}] },

// Bancarmasin — 1526'da kurulan sultanlık; Hollanda 11 Haziran 1860'ta
// kaldırdı ve Banjar savaşı başladı.
{ ad:"Bancarmasin", tur:"liman", lat:-3.3200, lon:114.5910, g:0, k:0, d:[],
  kur:"1526-01-01",
  s:[{f:"1526-01-01", t:"1860-06-11", d:"banjar-sultanligi"},
     {f:"1860-06-11", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Makassar — Gowa sultanlığı; Doğu Endonezya'nın en güçlü devletiydi ve
// baharat ticaretini VOC tekelinin dışında tutmaya çalıştı. 18 Kasım
// 1667 Bongaya Antlaşması'yla teslim oldu.
{ ad:"Makassar", tur:"liman", lat:-5.1470, lon:119.4320, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1667-11-18", d:"gova-makassar"},
     {f:"1667-11-18", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

{ ad:"Manado", tur:"liman", lat:1.4740, lon:124.8420, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1657-01-01", d:"ternate-sultanligi"},
     {f:"1657-01-01", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Ternate — karanfilin dünyadaki iki kaynağından biri; bu yüzden
// Portekiz (1522), İspanya (1606) ve Hollanda (1663) sırayla adaya
// yerleşti. Sultan Baabullah 28 Aralık 1575'te Portekiz kalesini
// düşürdü — Avrupa'nın Asya'da uğradığı ilk büyük yenilgilerden biridir.
{ ad:"Ternate", tur:"liman", lat:0.7940, lon:127.3673, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1522-01-01", d:"ternate-sultanligi"},
     {f:"1522-01-01", t:"1575-12-28", d:"portekiz"},
     {f:"1575-12-28", t:"1606-04-01", d:"ternate-sultanligi"},
     {f:"1606-04-01", t:"1663-05-01", d:"ispanya"},
     {f:"1663-05-01", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Tidore — Ternate'nin rakibi ve İspanya'nın müttefiki; sultanlık
// Hollanda himayesinde 1900'lere kadar sürdüğü için kimlik korundu.
// Ternate'ye 11.2 km — bu dosyadaki EN YAKIN İKİ NOKTA, 3 km kuralının
// üstünde ve iki ayrı devletin başkenti olduğu için ikisi de tutuldu.
{ ad:"Tidore", tur:"liman", lat:0.6880, lon:127.4000, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1923-10-29", d:"tidore-sultanligi"}] },

// Ambon — Portekiz 1512'de geldi, VOC 23 Şubat 1605'te aldı ve burası
// şirketin İLK doğu merkezi oldu. İngiltere 1810-1817 arasında tuttu.
{ ad:"Ambon", tur:"liman", lat:-3.6950, lon:128.1810, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1512-01-01", d:"ternate-sultanligi"},
     {f:"1512-01-01", t:"1605-02-23", d:"portekiz"},
     {f:"1605-02-23", t:"1810-02-19", d:"hollanda-dogu-hint"},
     {f:"1810-02-19", t:"1817-03-25", d:"ingiltere"},
     {f:"1817-03-25", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Banda Neira — dünyada küçük hindistancevizinin (muskat) yetiştiği TEK
// yer; Coen 1621'de ada halkını katlederek VOC tekelini kurdu. Run adası
// 1667 Breda Antlaşması'yla İngiltere'den alınıp karşılığında Yeni
// Amsterdam (New York) verildi.
{ ad:"Banda Neira", tur:"liman", lat:-4.5466, lon:129.9012, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1621-03-08", d:"banda-adalari"},
     {f:"1621-03-08", t:"1810-08-09", d:"hollanda-dogu-hint"},
     {f:"1810-08-09", t:"1817-03-25", d:"ingiltere"},
     {f:"1817-03-25", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Kupang — Hollanda 1653'te kaleyi kurdu; Timor adası 1859 ve 1904
// antlaşmalarıyla Hollanda ile Portekiz arasında bölündü ve bu bölünme
// bugünkü Doğu Timor'un sebebidir.
{ ad:"Kupang", tur:"liman", lat:-10.1780, lon:123.5970, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1653-01-01", d:"timor-beylikleri"},
     {f:"1653-01-01", t:"1923-10-29", d:"hollanda-dogu-hint"}] },

// Dili — Portekiz 1769'da idare merkezini buraya taşıdı; Doğu Timor
// 1975'e kadar Portekiz toprağı kaldı.
{ ad:"Dili", tur:"liman", lat:-8.5560, lon:125.5600, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1769-10-10", d:"timor-beylikleri"},
     {f:"1769-10-10", t:"1923-10-29", d:"portekiz"}] },

// ===== 8i. Filipinler =====
//
// "filipin-racaliklari" 1571 öncesi Tondo, Maynila, Cebu ve Butuan
// racalıklarını tek kimlikte toplar; hiçbiri diğerinden ayrı bir toprak
// gövdesi oluşturmuyor. Güneyde Sulu ve Magindanao sultanlıkları AYRIDIR
// çünkü İspanyol idaresine hiç girmediler ve İspanya'nın ilhak edemediği
// tek Filipin toprağıdır.
// 13 Ağustos 1898 Manila'nın Amerika'ya teslimi, 10 Aralık 1898 Paris
// Antlaşması. "abd" bu dosyanın önerdiği yeni kimliktir.

// Manila — Legazpi 24 Haziran 1571'de Maynila racalığını alıp İspanyol
// başkentini kurdu. İngiltere 6 Ekim 1762 – 31 Mayıs 1764 arasında
// (Yedi Yıl Savaşları) şehri işgal etti; on dokuz ay sürdüğü ve idareyi
// devraldığı için pencere ALDI.
{ ad:"Manila", tur:"liman", lat:14.5990, lon:120.9840, g:2, k:0, d:[],
  s:[{f:"1281-01-01", t:"1571-06-24", d:"filipin-racaliklari"},
     {f:"1571-06-24", t:"1762-10-06", d:"ispanya"},
     {f:"1762-10-06", t:"1764-05-31", d:"ingiltere"},
     {f:"1764-05-31", t:"1898-08-13", d:"ispanya"},
     {f:"1898-08-13", t:"1923-10-29", d:"abd"}] },

// Cebu — Magellan 1521'de burada öldürüldü; Legazpi 27 Nisan 1565'te
// ilk kalıcı İspanyol yerleşimini kurdu.
{ ad:"Cebu", tur:"liman", lat:10.3170, lon:123.8910, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1565-04-27", d:"filipin-racaliklari"},
     {f:"1565-04-27", t:"1898-08-13", d:"ispanya"},
     {f:"1898-08-13", t:"1923-10-29", d:"abd"}] },

// Colo (Jolo) — Sulu Sultanlığı; İspanya üç yüz yıl boyunca ilhak
// edemedi, sultan 22 Mart 1915 Carpenter Antlaşması'yla dünyevî
// egemenliğini Amerika'ya devretti.
{ ad:"Colo (Jolo)", tur:"liman", lat:6.0530, lon:121.0020, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1915-03-22", d:"sulu-sultanligi"},
     {f:"1915-03-22", t:"1923-10-29", d:"abd"}] },

// Kotabato — Magindanao Sultanlığı; Sultan Kudarat XVII. yüzyılda
// İspanyol seferlerini püskürttü. İspanya 1888'de nihayet bağladı,
// Amerika 1899'da devraldı.
{ ad:"Kotabato (Magindanao)", tur:"sehir", lat:7.2230, lon:124.2460, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1888-01-01", d:"magindanao-sultanligi"},
     {f:"1888-01-01", t:"1898-08-13", d:"ispanya"},
     {f:"1898-08-13", t:"1923-10-29", d:"abd"}] },

];
