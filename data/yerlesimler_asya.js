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
{ ad:"Delhi", tur:"sehir", lat:28.6440, lon:77.2160, g:2, k:1,kd:[{f:"1281-01-01",t:"1857-09-21",k:1,m:"Delhi"}], d:[],
  s:[{f:"0736-01-01",t:"1153-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: sahip tomara (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"tomara\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «The Tomaras»: \"founded Delhi in A.D. 736\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «The Tomaras»: \"The Tomaras continued to rule the Hariyana country till the middle of the twelfth century\" | f=0736 GELENEK tarihi (yüzyıl hassasiyeti), 0500 UFUK işareti değil: Delhi'nin 736 öncesi sahibi yazılmadı (kaynak yok). 1011'de Delhi Racası: R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Punjab under the Yamini Dynasty / Ghaznavid Invasion»: \"the Raja of Delhi, in whose kingdom Thaneswar was situat\" | t=1153 üst/alt sınır (IV. Vigraharaja'nın bilinen tarihleri 1153-1163; BEYANLI YAKLAŞIKLIK). · DOGU-500-1281"},{f:"1153-01-01",t:"1192-01-01",d:"cahamana",kesinlik:"onyil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Chahamanas of Sakambhari»: \"He conquered Dhillika (Delhi) from the Tomaras\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Foreword»: \"lost the second Battle of Tarain in 1192\" | f=1153 belirsiz (1153-1163 arası); t=1192 II. Tarain. · DOGU-500-1281"},{f:"1192-01-01",d:"gurlu",kaynak:"TDV delhi: 'Buna rağmen Kutbüddin Aybeg şehri ele geçirmeye muvaffak oldu ve 1192’de burada Kuvvetü’l-İslâm Mescidi’ni yaptırdı.' · Aybeg 1192'de Gurlu Muizzüddin'in kumandanıdır · ZAMAN-Z6-1008",t:"1206-01-01",kesinlik:"yil"},{f:"1206-01-01",t:"1398-12-17",d:"delhi-sultanligi",kaynak:"f 1281-01-01'den geri çekildi — TDV delhi: 'Buna rağmen Kutbüddin Aybeg şehri ele geçirmeye muvaffak oldu ve 1192’de burada Kuvvetü’l-İslâm Mescidi’ni yaptırdı.' · Gurlu → Delhi Sultanlığı ARDIL YAPI (Aybeg'in bağımsızlığı); geçiş günü kaynakta yok, delhi-sultanligi künye günü devralındı — kaynaksız gün · ZAMAN-Z6-1008"},{f:"1398-12-17",t:"1399-01-01",d:"timurlu",enklav:true},{f:"1399-01-01",t:"1526-04-21",d:"delhi-sultanligi"},{f:"1526-04-21",t:"1540-05-17",d:"babur-imparatorlugu"},{f:"1540-05-17",t:"1555-07-23",d:"sur-hanedani"},{f:"1555-07-23",t:"1788-01-01",d:"babur-imparatorlugu"},{f:"1788-01-01",t:"1803-09-11",d:"maratha"},{f:"1803-09-11",t:"1947-08-15",d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Agra — Sikender Lodî 1504'te kurdu ve başkent yaptı; Bâbürlü başkenti
// 1526-1648. kur: bu yüzden yazıldı, 1504 öncesi boşluk KASITLIDIR.
// 1761 III. Pânipat'tan sonra Câtlar (Bharatpur) 1761-1774 Agra kalesini
// tuttu; sonra Maratha (Şinde), 1803'te İngiliz.
{ ad:"Agra", tur:"sehir", lat:27.1770, lon:78.0080, g:2, k:1,kd:[{f:"1526-04-21",t:"1857-09-21",k:1,m:"Agra"}], d:[],
  kur:"1504-01-01",
  s:[{f:"1504-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1761-01-14", d:"babur-imparatorlugu"},
     {f:"1761-01-14", t:"1803-10-17", d:"maratha"},
     {f:"1803-10-17", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Mathura — Yamuna'nın kutsal şehri; siyasî olarak hep Delhi/Agra ile aynı
// eldedir. 1670 Evrengzîb'in mâbed yıkımı sahiplik değiştirmedi.
{ ad:"Mathura", tur:"sehir", lat:27.4920, lon:77.6730, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1770-01-01", d:"babur-imparatorlugu"},
     {f:"1770-01-01", t:"1803-10-17", d:"maratha"},
     {f:"1803-10-17", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Mîrat (Meerut) — Delhi'nin kuzeydoğu kapısı. 1857 ayaklanması burada
// başladı (10 Mayıs); sahiplik değişmediği için pencere açılmadı.
{ ad:"Mîrat (Meerut)", tur:"sehir", lat:28.9840, lon:77.7060, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1788-01-01", d:"babur-imparatorlugu"},
     {f:"1788-01-01", t:"1803-09-11", d:"maratha"},
     {f:"1803-09-11", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Pânipat — Hint tarihinin üç dönüm noktasının sahnesi: 21 Nisan 1526
// (Bâbür–İbrâhîm Lodî), 5 Kasım 1556 (Ekber–Hemû), 14 Ocak 1761
// (Dürrânî–Maratha). Üçü de bu noktanın zincirinde görünür.
{ ad:"Pânipat", tur:"sehir", lat:29.3900, lon:76.9770, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1556-11-05", d:"sur-hanedani"},
     {f:"1556-11-05", t:"1788-01-01", d:"babur-imparatorlugu"},
     {f:"1788-01-01", t:"1803-09-11", d:"maratha"},
     {f:"1803-09-11", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Hisâr-ı Fîrûze — Fîrûz Şah Tuğluk'un 1354'te kurduğu şehir; kur: yazıldı.
{ ad:"Hisâr-ı Fîrûze", tur:"kale", lat:29.1530, lon:75.7220, g:0, k:4, d:[],
  kur:"1354-01-01",
  s:[{f:"1354-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1803-09-11", d:"babur-imparatorlugu"},
     {f:"1803-09-11", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Koil (Aligarh) — Doâb'ın ortası. 1757-1803 arası Rohilla, Câtlar ve
// Maratha arasında elden ele geçti; 4 Eylül 1803'te İngiliz'e düştü.
{ ad:"Koil (Aligarh)", tur:"kale", lat:27.8970, lon:78.0880, g:0, k:4, d:[],
  s:[{f:"1194-01-01",d:"gurlu",kaynak:"TDV aligarh: 'yüzyılın sonlarına doğru Hind-İslâm Devleti’nin ilk hükümdarı Kutbüddin Aybeg tarafından fethedilmiştir (1194).' · 'Hind-İslâm Devleti’nin ilk hükümdarı' sıfatı sonradandır; 1194'te Aybeg Gurlu kumandanı · ZAMAN-Z6-1008",t:"1206-01-01",kesinlik:"yil"},{f:"1206-01-01",t:"1526-04-21",d:"delhi-sultanligi",kaynak:"f 1281-01-01'den geri çekildi — TDV aligarh: 'yüzyılın sonlarına doğru Hind-İslâm Devleti’nin ilk hükümdarı Kutbüddin Aybeg tarafından fethedilmiştir (1194).' · ardıl yapı; künye günü devralındı — kaynaksız gün · ZAMAN-Z6-1008"},{f:"1526-04-21",t:"1540-05-17",d:"babur-imparatorlugu"},{f:"1540-05-17",t:"1555-07-23",d:"sur-hanedani"},{f:"1555-07-23",t:"1784-01-01",d:"babur-imparatorlugu"},{f:"1784-01-01",t:"1803-09-04",d:"maratha"},{f:"1803-09-04",t:"1947-08-15",d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Etâve (Etawah) — Yamuna-Ganj arası. 1801'de Avad nevâbı tarafından
// İngilizlere devredilen "Ceded Districts" içindedir.
{ ad:"Etâve (Etawah)", tur:"sehir", lat:26.7760, lon:79.0150, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1801-11-10", d:"avad"},
     {f:"1801-11-10", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Kannauc — 17 Mayıs 1540'ta Şîr Şah Sûr'un Hümâyûn'u yendiği yer; Sûr
// hanedanının kuruluş sahnesi. Cavnpur Sultanlığı 1394-1479 arasında
// buraya kadar uzandı.
{ ad:"Kannauc", tur:"sehir", lat:27.0550, lon:79.9160, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"0550-01-01",d:"__BOSLUK__",kesinlik:"onyil",kaynak:"BOŞLUK BEYANI: sahip gupta (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"gupta\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Northern India after the Gupta Empire»: \"were feudatories of the Gupta empire and flourished during the first half of the sixth century\" | BEYANLI YAKLAŞIKLIK: Maukhari ataları U.P.'de Gupta vasalıydı; Kannauj kenti için doğrudan tanık yok. | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı) · DOGU-500-1281"},{f:"0550-01-01",t:"0606-01-01",d:"maukhari",kesinlik:"onyil",kaynak:"SAHİP maukhari: DOGU-500-1281 BOŞLUK BEYANI geri yazıldı (ZINCIR-ORTA, 24 Ekim 2026; boya durumu denetim/ILERLEME-BOYA-BEKLEYEN-ORTA.tsv) — dayanak aşağıdadır · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Foreword»: \"himself at Kanauj which, thereafter, was the imperial capital of north India for close upon five centuries\" | t=0606: Grahavarman'ın ölümü ve Kannauj'un alınışı (yil). · DOGU-500-1281"},{f:"0606-01-01",t:"0612-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip gauda-shashanka (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"gauda-shashanka\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Northern India after the Gupta Empire»: \"They advanced against Kanauj, killed king Graha-varman, captured the city, and imprisoned queen Rajyasri.\" | BEYANLI YAKLAŞIKLIK: Majumdar sahipliği Sasanka/Devagupta ittifakına verir ama Nalanda mührü (Maukhari \"Su...\" adlı kral) ve Harşa'nın Sasanka çekildikten sonra aldığı varsayımı belirsizdir. · DOGU-500-1281"},{f:"0612-01-01",t:"0647-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip harsha (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"harsha\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Harsha-vardhana and his Time»: \"As will be shown later, this probably took place c. A.D. 612.\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Harsha-vardhana and his Time»: \"it seems to have been his first acquisition of territory\" | t=0647: harsha künyesi t (Harşa'nın ölümü). · DOGU-500-1281"},{f:"0647-01-01",t:"0700-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Kannauj'un 647-700 arası sahibi. | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Foreword»: «For more than half a century thereafter, the history of Kanauj is wrapt in obscurity. At the end of it, Yasovarman, a great conqueror and the patron of Bhavabhuti and Vakpati, is found ruling Kanauj.» | f=647 harsha künye t. Arjuna/Arunasva ve Çin elçisi Wang Xuance olayları bu oturumda okunmadı (atıf; açılmadı). · DOGU-500-1281"},{f:"0700-01-01",t:"0740-01-01",d:"__BOSLUK__",kesinlik:"onyil",kaynak:"BOŞLUK BEYANI: sahip yashovarman-kannauj (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"yashovarman-kannauj\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Northern India during A.D. 650-750»: «The date of Yasovarman is not definitely known, but his reign may be placed between A.D. 700 and 740.» | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Northern India during A.D. 650-750»: «Whether he was killed or not, his power was utterly broken by Lalitaditya, and he fades out of history.» | Yaşovarman atlasta künyesiz → kunye_yeni.js `yashovarman-kannauj` önerisi (boya gerekli). Kaynak «accession c.690» ihtimalini de anar (M3); 700-740 kaynağın kendi aralığı (onyil). · DOGU-500-1281"},{f:"0740-01-01",t:"0783-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Kannauj'un 740-783 arası sahibi. | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Northern India during A.D. 650-750»: «By that victory, Lalitaditya not only made himself master of Kanauj» … «but also acquired the theoretical right of suzerainty over the vast conquests of his late enemy.» (… «It is difficult to say how far this conventional account may be regarded as historically true.» — Karkota'nın Kannauj fiilî hâkimiyeti ve süresi kaynakta kurulamadı, bu yüzden Karkota'ya BAĞLANMADI.) | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Rise and fall of the Pratihara empire»: Jinasena (783): «The first two lines of the verse tell us that in that year Indrayudha was ruling in the north» — 783 sonrası tanık. · DOGU-500-1281"},{f:"0783-01-01",t:"0815-01-01",d:"__BOSLUK__",kesinlik:"onyil",kaynak:"BOŞLUK BEYANI: sahip ayudha-kannauj (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"ayudha-kannauj\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Rise and fall of the Pratihara empire»: «The first two lines of the verse tell us that in that year Indrayudha was ruling in the north» (Jinasena, Harivamsa, Şaka 705 = 783) | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Rise and fall of the Pratihara empire»: «Dharmapala placed on the throne a new ruler Chakrayudha, whose name-ending shows that he was probably connected with the ruling family.» · «Nagabhata defeated Chakrayudha and conquered his kingdom.» | Ayudha hanedanı atlasta künyesiz → kunye_yeni.js `ayudha-kannauj` önerisi (boya gerekli). BEYAN: f=783 İNDRAYUDHA'NIN İLK TARİHLİ TANIĞI (cülus yılı değil); Vatsaraja'nın (Pratihara) ve Dharmapala'nın (Pala) vasal/tâbi kılma girişimleri M4'te anlatılır, Kannauj tahtı Ayudha elinde kaldı (puppet). t=815 Nagabhata II. · DOGU-500-1281"},{f:"0815-01-01",t:"1019-01-01",d:"gurjara-pratihara",kesinlik:"yil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Foreword»: «Ultimately Kanauj passed into the hands of the Pratiharas. About A.D. 815 it became the capital» | TDV İslâm Ansiklopedisi, «Hindistan», https://islamansiklopedisi.org.tr/hindistan (22.10.2026'da okundu): «Pratiharalar (Batı Hindistan ve Yukarı Ganj vadisi, 773-1019)» | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Kanauj»: «the Imperial Pratiharas ruled Kanauj up to A.D. 1019, and Rajyapala was the last king of this dynasty to be associated with that city» | BEYAN: Rashtrakuta III. Indra'nın 916 civarı Kannauj baskını geçici sayıldı (Pratihara dönüşü); atlas künyesi gurjara-pratihara t=1027 (Bari kolu), Kannauj'dan çıkış 1019. f=815 «About» (yıl). · DOGU-500-1281"},{f:"1019-01-01",t:"1090-01-01",d:"__BOSLUK__",kesinlik:"onyil",kaynak:"BOŞLUK BEYANI: sahip rashtrakuta-kannauj (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"rashtrakuta-kannauj\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Northern India during 11th and 12th centuries — Kanauj»: «The first known king of this family is Chandra, who seems to have established his supremacy over Kanauj during the period of disorder that followed the invasion of Mahmud of Ghazni.» | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Kanauj — the Gahadavalas»: «seized the throne of Kanauj from the Rashtrakuta ruler Gopala» (Chandradeva) | Kannauj Raştrakûtaları (Gopala'ya dek 4 kral: Chandra, Vigrahapala, Bhuvanapala, Gopala) atlasta künyesiz → kunye_yeni.js `rashtrakuta-kannauj` önerisi (boya gerekli). BEYAN: f=1019 Pratihara'nın Kannauj'dan çıkışı (Chandra'nın cülus yılı kaynakta YOK); Ghaznavî Mahmûd b. İbrâhîm'in 1086-1090 arası Kannauj'u yağmalaması (M5) tahtı değiştirmedi. t=1090 Chandradeva yazıtlarının ilk yılı. · DOGU-500-1281"},{f:"1090-01-01",t:"1193-01-01",d:"gahadavala",kesinlik:"yil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Kanauj — the Gahadavalas»: «The inscriptions of Chandradeva, the dates of which range from A.D. 1090 to 1100, prove that he was in possession of Kanauj, Banaras, and Ayodhya.» | TDV İslâm Ansiklopedisi, «Hindistan», https://islamansiklopedisi.org.tr/hindistan (22.10.2026'da okundu): «Gahadavalalar (Kannevc, 1090-1193)» | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Kanauj — the Gahadavalas»: «after conquering Delhi and Ajmer from the Chahamanas, advanced with a large army against Jayachandra in A.D. 1193» | ÇELİŞKİ (ic_not): TDV Gahadavala Kannevc 1090-1193 (esas alındı); M5 Chandawar savaşını 1193'te verir ama Harishchandra'nın 1197'de Kanauj'u elinde tuttuğunu söyler (kuyruk için bkz. sonraki dilim); Kuzey Hindistan yayınlarında 1194 de geçer, bu oturumda açılmadı. · DOGU-500-1281"},{f:"1193-01-01",t:"1206-01-01",d:"gurlu",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Hindistan», https://islamansiklopedisi.org.tr/hindistan (22.10.2026'da okundu): «Daha sonra kumandanlarından Kutbüddin Aybeg birkaç yıl içerisinde Kuhram, Sâmâne, Bedâûn, Kannevc, Gevâliyâr ve Kālincâr gibi yerleri» | BEYANLI YAKLAŞIKLIK + ÇELİŞKİ: M5 «As Harischandra, son of Jayachandra … was in possession of Kanauj, Jaunpur, and Mirzapur Districts in A.D. 1197, it is obvious that he succeeded in wresting his paternal kingdom from the hands of the Muslims» → 1193-1197 arası ve sonrası Kannauj'un fiilî sahibi iki kaynak arasında kesin değil; TDV (esas) Aybeg'in birkaç yıl içinde Kannevc'i aldığını söyler ve Gahadavala künyesi 1193'te biter. Gurlu (Muizzeddin/Aybeg) 1193'ten 1206 Delhi Sultanlığı'na dek yazıldı; Harishchandra'nın 1197 kaydı ic_not'ta kalır. · DOGU-500-1281"},{f:"1206-01-01",t:"1281-01-01",d:"delhi-sultanligi",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Hindistan», https://islamansiklopedisi.org.tr/hindistan (22.10.2026'da okundu): «DELHİ SULTANLIĞI (Kuzey ve Orta Hindistan, 1206-1526)» | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Mamluk Sultans of Delhi»: «the inclusion by his chronicler of Budaun, Kanauj and even Banaras among his conquest, can be understood only in this context, for these places had figured in Aibak’s initial conquests also» | BEYANLI YAKLAŞIKLIK: Kannauj'a özgü 1206-1281 ayrı tanık yok; Gahadavala kalıntısı (Adakkamalla) ve Budaun Raştrakûtaları Doab'da direnmeye devam eder (M5); Delhi künyesi f=1206 ve mevcut zincir başı delhi-sultanligi 1281 ile süreklilik. · DOGU-500-1281"},{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1801-11-10", d:"avad"},
     {f:"1801-11-10", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Kanpûr — 1778'de İngiliz karargâhı kurulana kadar Ganj kıyısında bir
// köydür; şehir sonradan büyümüştür. Görev tanımının örnek merkezlerinden
// olduğu için konuldu ama UYDURMA kuruluş tarihi yazılmadı: kur: YOK,
// nokta bütün dönem boyunca bölgesinin sahibini taşıyor.
{ ad:"Kanpûr", tur:"sehir", lat:26.4500, lon:80.3320, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1801-11-10", d:"avad"},
     {f:"1801-11-10", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// ===== 1b. Avad ve doğu Ganj =====
//
// Avad (Oudh) nevâblığı 1722'de Sa'âdet Han ile fiilen bağımsızlaştı;
// Bâbürlü hükümdarı adına hutbe okunmaya devam etti. 1764 Bakser'den
// sonra İngiliz himayesine girdi, 1801'de topraklarının yarısını devretti,
// 7 Şubat 1856'da tamamen ilhak edildi. Bu dosyada nevâblık, fiilî
// bağımsızlığın başladığı 1722'den ilhak tarihine kadar ayrı kimliktir.

// Leknev (Lucknow) — 1775'te Avad başkenti oldu; 1856'da ilhak.
{ ad:"Leknev (Lucknow)", tur:"sehir", lat:26.8470, lon:80.9470, g:1, k:2,kd:[{f:"1722-01-01",t:"1856-02-07",k:1,m:"Leknev (Lucknow)"}], d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1856-02-07", d:"avad"},
     {f:"1856-02-07", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Feyzâbâd — Avad'ın 1722-1775 arası ilk başkenti; Ayodhya'nın yanı başında.
{ ad:"Feyzâbâd (Ayodhya)", tur:"sehir", lat:26.7750, lon:82.1450, g:0, k:2,kd:[{f:"1722-01-01",t:"1856-02-07",k:1,m:"Feyzâbâd (Ayodhya)"}], d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1856-02-07", d:"avad"},
     {f:"1856-02-07", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Cavnpur — 1359'da Fîrûz Şah Tuğluk kurdu (kur:); 1394-1479 arasında Şarkî
// hanedanının başkenti olarak Delhi'den bağımsız bir sultanlıktır. Bu
// dosyanın "cavnpur-sultanligi" kimliği bu 85 yıl içindir.
{ ad:"Cavnpur (Jaunpur)", tur:"sehir", lat:25.7500, lon:82.6840, g:1, k:2,kd:[{f:"1394-01-01",t:"1483-01-01",k:1,m:"Cavnpur (Jaunpur)"}], d:[],
  kur:"1359-01-01",
  s:[{f:"1359-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1775-01-01", d:"avad"},
     {f:"1775-01-01", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Benâres (Vârânasî) — 1775'te Avad'dan İngilizlere devredildi.
{ ad:"Benâres (Vârânasî)", tur:"sehir", lat:25.3170, lon:83.0060, g:1, k:2,kd:[{f:"1911-01-01",t:"1923-10-29",k:1,m:"Benâres (Vârânasî)"}], d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1775-01-01", d:"avad"},
     {f:"1775-01-01", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Ilâhâbâd (Prayag) — Ekber 1583'te kaleyi kurdu ve şehre bu adı verdi;
// yerleşim daha eskidir, bu yüzden kur: YAZILMADI.
{ ad:"Ilâhâbâd (Allahabad)", tur:"sehir", lat:25.4360, lon:81.8470, g:1, k:2,kd:[{f:"1901-01-01",t:"1923-10-29",k:1,m:"Ilâhâbâd (Allahabad)"}], d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1765-08-12", d:"babur-imparatorlugu"},
     {f:"1765-08-12", t:"1801-11-10", d:"avad"},
     {f:"1801-11-10", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Gorakhpûr — Ganj ovasının Nepal eteğindeki kuzey ucu.
{ ad:"Gorakhpûr", tur:"sehir", lat:26.7600, lon:83.3730, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1394-01-01", d:"delhi-sultanligi"},
     {f:"1394-01-01", t:"1479-01-01", d:"cavnpur-sultanligi"},
     {f:"1479-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1722-01-01", d:"babur-imparatorlugu"},
     {f:"1722-01-01", t:"1801-11-10", d:"avad"},
     {f:"1801-11-10", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Katmandu — Nepal. Görev tanımının tablosunda yok; Himalaya'nın güney
// yamacında 500 km'lik bir boşluk kalmasın diye TEK nokta olarak konuldu
// (kutu açıldığında Patna ya da Lhasa'nın peteğine emilirdi). Malla
// krallıkları 1482'de üçe bölündü, 25 Eylül 1768'de Gorkha'lı Prithvi
// Narayan Şah Katmandu'yu aldı ve bugünkü Nepal kuruldu.
{ ad:"Katmandu", tur:"sehir", lat:27.7170, lon:85.3240, g:1, k:1,kd:[{f:"1281-01-01",t:"1923-10-29",k:1,m:"Katmandu"}], d:[],
  s:[{f:"0500-01-01",t:"0750-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: sahip licchavi-nepal (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"licchavi-nepal\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Nepal»: \"the royal palace Mana-griha, from which his successors issued royal charters, was also probably built by him\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Nepal»: \"the Lichchhavi power was not confined to the Nepal valley proper, i.e. the region around Katmandu in the Bagmati valley\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Nepal»: \"The only known date of Jayadeva, the son and successor of Sivadeva, is 159 (A.D. 737).\" | BEYANLI YAKLAŞIKLIK: Licchavi sarayı Kathmandu vadisindedir (Mana-griha, Kailasakuta), Katmandu kentine özgü tanık değil. t=0750 YÜZYIL: son tarihli kral 737; sonraki iki yüzyıl belirsiz. | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı) · DOGU-500-1281"},{f:"0750-01-01",t:"0879-10-20",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Majumdar IV «Eastern India during the Pala Period: Nepal» 750-879 arasını \"siyasî karışıklık\" diye geçer; Tibet üstünlüğü (Namoyati/Aramudi, \"we may regard the Tibetans as having exercised a general supremacy over Nepal\") ve Pala üstünlüğü yalnızca olasılıktır, yerel kral listeleri çelişkilidir; TDV «Nepal» (Azmi Özcan) sayfasının Tarih bölümü içerik olarak çekilemedi (≠ yok). Yaklaşık/tek sahip yazmak beyansız yaklaşıklık olurdu. f=0750 hint1 devam_gerekli. · DOGU-500-1281"},{f:"0879-10-20",t:"1201-01-01",d:"__BOSLUK__",kesinlik:"gun",kaynak:"BOŞLUK BEYANI: sahip nepal-thakuri (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"nepal-thakuri\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Eastern India during the Pala Period: Nepal»: \"dating from October 20, A.D. 879\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Nepal»: \"Bhaskaradeva is known to have been ruling in A.D. 1046\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Nepal»: \"Arimalladeva (A.D. 1201, 1216)\" | BEYANLI YAKLAŞIKLIK: 879 Newar takvimi başlangıcı hanedan başlangıcı sayıldı; sürekli kral zinciri 999'dan itibaren (colophon) denetlenebilir. · DOGU-500-1281"},{f:"1201-01-01",t:"1281-01-01",d:"nepal",kesinlik:"yil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Nepal»: \"It is probable that Arimalla referred to above, was the founder of the Malla dynasty in Nepal\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Nepal»: \"Abhayamalla (A.D. 1223-1252)\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Nepal»: \"Jayadevamalla (A.D. 1255, 1257)\" | `nepal` künyesi 1000-.. genel Nepal devleti; Malla hanedanı. · DOGU-500-1281"},{f:"1281-01-01", t:"2000-12-31", d:"nepal"}] },

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

{ ad:"Lahor", tur:"sehir", lat:31.5490, lon:74.3430, g:2, k:2,kd:[{f:"1801-04-12",t:"1849-03-29",k:1,m:"Lahor"}], d:[],
  s:[{f:"0982-06-26",t:"0991-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip multan-emirligi (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"multan-emirligi\" geri yazılır) · «Lahor», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/lahor (22.10.2026'da okundu), «Lahor»: \"372’de (982) yazılan Ḥudûdü’l-ʿâlem ’de de Lahor’un Mültan emîrinin hâkimiyetinde bulunduğu kaydedilir.\" | BEYANLI YAKLAŞIKLIK: f=0982-06-26: hicrî 372 (982-06-26 … 983-06-14 Jülyen, aritmetik sivil takvim, ±2 gün) ∩ milâdî 982 kesişiminin ilk günü; Ḥudûdü'l-ʿâlem tarihlemesinin (982) başladığı gün değil tanıklık yılı — alt sınırdır. 'Hâkimiyet' vasallık düzeyinde olabilir. t=0991: TDV 'Şehir 991’den sonra Hindûşâhîler’in … eline geçti' (alt sınır). · DOGU-500-1281"},{f:"0991-01-01",t:"1013-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip hindu-sahiler (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"hindu-sahiler\" geri yazılır) · «Lahor», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/lahor (22.10.2026'da okundu), «Lahor»: \"Şehir 991’den sonra Hindûşâhîler’in, 1013-1014’te Gazneli Mahmud’un eline geçti.\" | BEYANLI YAKLAŞIKLIK: '991’den sonra' alt sınırdır (tam yıl yok); t=1013-01-01 atlas Lahor zincirinin mevcut başı (TDV 1013-1014 aralığı). Majumdar V Hindu Şâhîlerin Lahor'u ne zaman aldığını yıl yıl vermez. · DOGU-500-1281"},{f:"1013-01-01",d:"gazneli",kaynak:"TDV lahor: 'Şehir 991’den sonra Hindûşâhîler’in, 1013-1014’te Gazneli Mahmud’un eline geçti.' · kaynak '1013-1014' ARALIĞI; başı yazıldı · ZAMAN-Z6-1008",t:"1186-01-01",kesinlik:"yil"},{f:"1186-01-01",d:"gurlu",kaynak:"TDV lahor: '582’de (1186) Gur Sultanı Muizzüddin Muhammed Lahor’a hâkim oldu.' · ZAMAN-Z6-1008",t:"1206-01-01",kesinlik:"yil"},{f:"1206-01-01",t:"1526-04-21",d:"delhi-sultanligi",kaynak:"f 1281-01-01'den geri çekildi — TDV lahor: '582’de (1186) Gur Sultanı Muizzüddin Muhammed Lahor’a hâkim oldu.' · ardıl yapı; künye günü devralındı — kaynaksız gün. 1241 Moğol yağması bu maddede yok · ZAMAN-Z6-1008"},{f:"1526-04-21",t:"1540-05-17",d:"babur-imparatorlugu"},{f:"1540-05-17",t:"1555-07-23",d:"sur-hanedani"},{f:"1555-07-23",t:"1752-04-01",d:"babur-imparatorlugu"},{f:"1752-04-01",t:"1765-04-16",d:"afgan-durrani"},{f:"1765-04-16",t:"1849-03-29",d:"sih-imparatorlugu"},{f:"1849-03-29",t:"1947-08-15",d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"}] },

// Multan — 1445-1528 arası Langah hânedanının bağımsız sultanlığıdır
// (TDV MULTAN). 1528'de Şah Hüseyin Erguni aldı, 1557'de Bâbürlü'ye geçti.
// Ranjit Singh 2 Haziran 1818'de kaleyi düşürdü.
{ ad:"Multan", tur:"sehir", lat:30.1980, lon:71.4750, g:1, k:2,kd:[{f:"1451-01-01",t:"1527-01-01",k:1,m:"Multan"}], d:[],
  s:[{f:"0903-01-01",t:"1006-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip multan-emirligi (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"multan-emirligi\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. VI: The Delhi Sultanate, Bharatiya Vidya Bhavan, Bombay 1960 (archive.org: delhisultanate00bhar, tam metin okundu), «Sind: The Sumras»: \"domination of the Saffarids (A.D. 872-903) in Sind and the rise of two separate States, namely, Multan and Mansurah, after the fall of that dynasty\" | TDV İslâm Ansiklopedisi, «Mültan» maddesi, https://islamansiklopedisi.org.tr/multan (22.10.2026'da okundu), «Mültan»: \"375 (985) yılında şehri gören Muhammed b. Ahmed el-Makdisî, buraya İsmâilîler’in hâkim bulunduğunu\" | TDV İslâm Ansiklopedisi, «Mültan» maddesi, https://islamansiklopedisi.org.tr/multan (22.10.2026'da okundu), «Mültan»: \"Gazneli Mahmud Mültan’ı yedi günlük bir muhasaradan sonra zaptetti (396/1006)\" | f=903 Saffârî sonu (yıl); t: 396/1006 hicrî∩milâdî ilk gün = 1006-01-01. ÇELİŞKİ: Majumdar VI 1010, TDV 396/1006 + yeniden zaptlar 1008/1010: TDV esas. · DOGU-500-1281"},{f:"1006-01-01",t:"1175-01-01",d:"gazneli",kesinlik:{f:"yil",t:"yil"},kaynak:"TDV multan: 'Gazneli Mahmud Mültan’ı yedi günlük bir muhasaradan sonra zaptetti (396/1006)' · 'Bunun üzerine Gazneli Mahmud, 398’de (1008) ve arkasından Ebü’l-Fütûh’un tekrar ele geçirmesi sebebiyle 400’de (1010) şehri zaptetti.' · bitiş: 'Nihayet 571’de (1175-76) Gurlular’dan Muizzüddin Muhammed b. Sâm bölgede kesin Sünnî hâkimiyetini tesis etti.' · ÖNCESİ 1000-1006 Karmatî (künye BOYALAR’da yok) YAZILMADI · ONCE1281-GERIYE"},{f:"1175-01-01",t:"1206-01-01",d:"gurlu",kesinlik:{f:"yil",t:"yil"},kaynak:"TDV multan: 'Nihayet 571’de (1175-76) Gurlular’dan Muizzüddin Muhammed b. Sâm bölgede kesin Sünnî hâkimiyetini tesis etti.' · bitiş: 'Delhi Sultanlığı döneminin başlarında Mültan bölgesi, zamanla bağımsız bir idare kuran ve yirmi iki yıl hüküm süren Nâsırüddin Kabâce’nin idaresinde kaldı' (22 yıl, 1228’de biter → başlangıç 1206 TÜRETİLMİŞ, BEYANLI) · ONCE1281-GERIYE"},{f:"1206-01-01",t:"1228-01-01",d:"kabace",kesinlik:{f:"yil",t:"yil"},kaynak:"TDV multan: 'Delhi Sultanlığı döneminin başlarında Mültan bölgesi, zamanla bağımsız bir idare kuran ve yirmi iki yıl hüküm süren Nâsırüddin Kabâce’nin idaresinde kaldı' · 'Sultan İltutmış burayı eyalet merkezi yaptı (626/1228)' · başlangıç yılı 22 yıllık süreden TÜRETİLMİŞTİR (1228−22) — BEYANLI · ONCE1281-GERIYE"},{f:"1228-01-01", t:"1445-01-01", d:"delhi-sultanligi",kaynak:"[ONCE1281-GERIYE f 1281-01-01 → 1228-01-01] TDV multan: '626 (1228) yılında Sultan İltutmış burayı eyalet merkezi yaptı.' · ONCE1281-GERIYE"},
     {f:"1445-01-01", t:"1528-01-01", d:"multan-langah"},
     {f:"1528-01-01", t:"1557-01-01", d:"sind"},
     {f:"1557-01-01", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1818-06-02", d:"afgan-durrani"},
     {f:"1818-06-02", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"}] },

// Amritsar — Sih dininin merkezi; Ram Das 1577'de havuzu kazdırdı, şehir o
// tarihten itibaren vardır (kur:). 1802'de Ranjit Singh'in eline geçti.
{ ad:"Amritsar", tur:"sehir", lat:31.6340, lon:74.8730, g:1, k:3, d:[],
  kur:"1577-01-01",
  s:[{f:"1577-01-01", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1765-04-16", d:"afgan-durrani"},
     {f:"1765-04-16", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Sirhind — Delhi ile Lahor arasındaki menzil şehri; 14 Ocak 1764'te Sih
// misllerince yıkıldı, o tarihten sonra bir daha toparlanamadı.
{ ad:"Sirhind", tur:"kale", lat:30.6410, lon:76.3830, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1764-01-14", d:"afgan-durrani"},
     {f:"1764-01-14", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

{ ad:"Câlandhar (Jalandhar)", tur:"sehir", lat:31.3260, lon:75.5760, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1765-04-16", d:"afgan-durrani"},
     {f:"1765-04-16", t:"1846-03-09", d:"sih-imparatorlugu"},
     {f:"1846-03-09", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

{ ad:"Ludhiyana", tur:"sehir", lat:30.9010, lon:75.8570, g:0, k:3, d:[],
  kur:"1480-01-01",
  s:[{f:"1480-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1765-04-16", d:"afgan-durrani"},
     {f:"1765-04-16", t:"1809-04-25", d:"sih-imparatorlugu"},
     {f:"1809-04-25", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

{ ad:"Siyâlkot", tur:"sehir", lat:32.4940, lon:74.5310, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"0540-01-01",d:"alkhon",kesinlik:"onyil",kaynak:"SAHİP alkhon: DOGU-500-1281 BOŞLUK BEYANI geri yazıldı (ZINCIR-ORTA, 24 Ekim 2026; boya durumu denetim/ILERLEME-BOYA-BEKLEYEN-ORTA.tsv) — dayanak aşağıdadır · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «The Disintegration of the Empire»: \"According to Hiuen Tsang his capital was Sakala or Sialkot\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «The Disintegration of the Empire»: \"The defeat of Mihirakula appears to have finally crushed the Huna political supremacy in India.\" | BEYANLI YAKLAŞIKLIK: Sakala = Mihirakula'nın başkenti (Hiuen Tsang; Majumdar güvenilirliğini sorgular); Toramana 500-515 Pencap'tan geldi (Chenab'da Pavvaiya). t=0540 ONYIL (Mihirakula yenilgisi, yıl yok). | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı) · DOGU-500-1281"},{f:"0540-01-01",t:"0883-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Siyâlkot'un 540-883 arası sahibi (polity/hanedan) kaynaklarda adlandırılmıyor. | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), Önsöz (K. M. Munshi): «Mihirakula then fell back on Kashmir which he captured, and died soon after.» (Alkhon'un Pencap'tan çekilişi; gün yok) | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Harsha and his time»: «The most important kingdom in the Punjab is called Cheh-ka, which probably stands for Takka. Its capital was near Sialkot and it extended from the Beas in the east to the Sindhu on the west.» (Xuanzang, 630-644 yolculuğu: Takka devleti VAR ama hanedanı/öncesi-sonrası adlandırılmıyor) | TDV İslâm Ansiklopedisi, «Hindistan», https://islamansiklopedisi.org.tr/hindistan (22.10.2026'da okundu): «başşehri Pencap’taki Siyâlkût’un birkaç mil kuzeyinde bulunan Takkadesa (Tâka)» (Arap coğrafyacıları; IX-X. yy) | Takka'nın 633→883 arası hanedan sürekliliği kaynakta kurulamadı ve atlasta Takka künyesi YOK (künye önerisi RAPOR.md). Komşu devletlerin sahipliği (Karkota, Gürcara-Pratihâra, Hindu Şâhî) Siyâlkot için kanıtlanamadı; M3 Lalitaditya'nın seferlerini «conventional» sayar. Ufuk: f=0540 = alkhon künyesi t (onyil). · DOGU-500-1281"},{f:"0883-01-01",t:"0902-01-01",d:"__BOSLUK__",kesinlik:"onyil",kaynak:"BOŞLUK BEYANI: sahip utpala-kesmir (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"utpala-kesmir\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Central and Western India», IX. Shahis: «King Sahkaravarman (A.D. 883- 902) of the Utpala dynasty of Kashmir invaded the kingdom of Alakhana and wrested from him Takka-land, which was the country adjoining the lower hills east of the Chenab.» | BEYANLI YAKLAŞIKLIK: Siyâlkot Chenab'in doğusunda, Takkadesa içinde (TDV Hindistan: Takkadesa Siyâlkût'un kuzeyinde; M3: Cheh-ka başkenti Siyâlkot yakını). Fetih yılı kaynakta yok: f=883 Şankaravarman'ın hükümdarlık başı, t=902 sonu (onyil; M4 başka yerde fetih için «early years of the tenth century» der). · DOGU-500-1281"},{f:"0902-01-01",t:"0991-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: 902-991 arası Siyâlkot sahibi. | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), IX. Shahis: «Sankaravarman, king of Kashmir, deprived the Pratihara Mahendrapala of his territories in the Punjab and handed them over to one of his officers, who belonged to the Thakkiya family.» (Thakkiya idaresinin süresi ve Keşmir'e bağlılığı yazılı değil; Hindu Şâhî yayılmasının Siyâlkot'u kapsayıp kapsamadığı kaynakta yok.) | Lahor (abi merkez adayı) için de 902-982 sahibi TDV'de yok (TDV Lahor: 982'de Mültan emîri); bu yüzden abi merkez zinciri kurulamadı. · DOGU-500-1281"},{f:"0991-01-01",t:"1013-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip hindu-sahiler (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"hindu-sahiler\" geri yazılır) · TDV İslâm Ansiklopedisi, «Lahor», https://islamansiklopedisi.org.tr/lahor (22.10.2026'da okundu): «Şehir 991’den sonra Hindûşâhîler’in, 1013-1014’te Gazneli Mahmud’un eline geçti.» | BEYANLI YAKLAŞIKLIK — ABİ MERKEZ: Lahor (Pencap'ın siyasî-askerî merkezi; Siyâlkot Lahor'un bağlı toprağı, her iki şehir de 1185-86'da Hüsrev Melik'in elinden Gurlulara geçti: M5 + TDV Hindistan). Siyâlkot'a özgü Hindu Şâhî tanığı YOK. f=991 TDV'nin «991'den sonra»sı (en erken sınır). · DOGU-500-1281"},{f:"1013-01-01",t:"1185-01-01",d:"gazneli",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Lahor», https://islamansiklopedisi.org.tr/lahor (22.10.2026'da okundu): «Şehir 991’den sonra Hindûşâhîler’in, 1013-1014’te Gazneli Mahmud’un eline geçti.» | TDV İslâm Ansiklopedisi, «Gazneliler», https://islamansiklopedisi.org.tr/gazneliler (22.10.2026'da okundu) (Erdoğan Merçil): «Sonuçta Hüsrev Şah Gazne’yi terkederek Lahor şehrine yerleşti. Gazneliler bundan sonra Hindistan’daki topraklar üzerinde hüküm sürdüler.» | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Ghaznavid invasion»: «In 1184 Muhzz-ud-din Muhammad again invaded Lahore but, having failed to capture it, ravaged the neighbouring districts. On his way back he captured the fort of Sialkot» (Siyâlkot kalesi Hüsrev Melik'in elinde idi) | BEYANLI YAKLAŞIKLIK — ABİ MERKEZ: Lahor (1013-14 → Gazneli; TDV). Siyâlkot'a özgü ilk Gazneli tanığı 1184-85 (kale fethi); 1013-1184 arası Siyâlkot'a özgü tanık yok. · DOGU-500-1281"},{f:"1185-01-01",t:"1206-01-01",d:"gurlu",kesinlik:"yil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Muhammad of Ghur»: «Peshawar was taken in A.D. 1178, Sialkot fell in A.D. 1185, and the following year Lahore was captured by treachery from Khusrav Malik, the last of the Ghaznavids» | TDV İslâm Ansiklopedisi, «Hindistan», https://islamansiklopedisi.org.tr/hindistan (22.10.2026'da okundu): «Muizzüddin Muhammed 1186’da Lahor’u zaptederek Hindistan’daki Gazneli hâkimiyetine son verdi» | ÇELİŞKİ (ic_not): M5 Siyâlkot kalesinin alınışını bir yerde 1184'te («In 1184 … captured the fort of Sialkot, and posted there Husain»), başka yerde 1185'te («Sialkot fell in A.D. 1185») verir; gün yok. 1185 alındı (açık «fell in» cümlesi). Kale muhafızı Husayn b. Harmîl (M5); Hüsrev Melik'in karşı hamlesi başarısız. · DOGU-500-1281"},{f:"1206-01-01",t:"1281-01-01",d:"delhi-sultanligi",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Hindistan», https://islamansiklopedisi.org.tr/hindistan (22.10.2026'da okundu): «DELHİ SULTANLIĞI (Kuzey ve Orta Hindistan, 1206-1526)» | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Mamluk Sultans of Delhi»: «Before his death he managed to extend his rule up to Sialkot and Hajner in the north» (İltutmış, ö. 1236) | BEYANLI YAKLAŞIKLIK: (a) 1206-c.1230 arası Siyâlkot'a özgü tanık yok; M5: «Qaba- cha pushed to Multan and extended his hold over Lahore, Bhatinda» (Aram Şah dönemi), Delhi'nin Pencap'taki fiilî hâkimiyeti İltutmış'ın Sialkot'a uzanmasına dek tartışmalı; (b) M5: «tacitly acquiesced in the loss of Sindh and the Punjab west of the Beas line» (1257 sonrası Moğol vasalları) — Siyâlkot adı geçmez, Delhi'de bırakıldı; 1281 mevcut zincir başı delhi-sultanligi ile süreklilik için. · DOGU-500-1281"},{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1752-04-01", d:"babur-imparatorlugu"},
     {f:"1752-04-01", t:"1765-04-16", d:"afgan-durrani"},
     {f:"1765-04-16", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"}] },

// Attock — Ekber 1581'de İndus geçidini tutmak için kurdu (kur:).
{ ad:"Attock", tur:"kale", lat:33.7660, lon:72.3600, g:0, k:4, d:[],
  kur:"1581-01-01",
  s:[{f:"1581-01-01", t:"1738-01-01", d:"babur-imparatorlugu"},
     {f:"1738-01-01", t:"1747-06-20", d:"afsar"},
     {f:"1747-06-20", t:"1813-07-13", d:"afgan-durrani"},
     {f:"1813-07-13", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"}] },

{ ad:"Râvalpindi", tur:"sehir", lat:33.5980, lon:73.0480, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1738-01-01", d:"babur-imparatorlugu"},
     {f:"1738-01-01", t:"1747-06-20", d:"afsar"},
     {f:"1747-06-20", t:"1765-04-16", d:"afgan-durrani"},
     {f:"1765-04-16", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"}] },

// Peşâver — Hayber geçidinin doğu ağzı. Nâdir Şah 1738'de, Dürrânî 1747'de,
// Sihler 6 Mayıs 1834'te, İngilizler 1849'da aldı.
{ ad:"Peşâver", tur:"sehir", lat:34.0080, lon:71.5780, g:1, k:3, d:[],
  s:[
     {f:"0078-01-01",t:"0250-01-01",d:"kusan",kesinlik:{f:"onyil",t:"onyil"},kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. II: The Age of Imperial Unity, Bharatiya Vidya Bhavan, Bombay (archive.org: ageofimperialuni07bhar, tam metin okundu), s. 142: Hiuen Tsang «speaks ... of this king's [Kanishka's] hold over Gandhara with Purushapura (Peshawar) as the capital»; s. 144: «Kanishka ruled from A.D. 78 to A.D. 101 or 102» (Kanishka çağı «a good deal of controversy»); s. 152: Vasudeva (145-176) sonrası Hindistan'da Kuşan gücü geriledi, ancak halefleri «complete control over the Punjab, N.W.F.P. and Afghanistan up to about the middle of third century A.D.» sürdürdü | BEYANLI YAKLAŞIKLIK: dönem başı Kanishka'nın kabul edilen çıkışıdır (MS 78, tartışmalı; Kuşan egemenliğinin Gandhara'da daha eski olması mümkün, künye f=50 bu yüzden korundu); Purushapura'nın başkent oluşu Hiuen Tsang geleneğine (7. yy) dayanır, çağdaş tanık değildir. Bitiş 'yaklaşık 3. yy ortası' ifadesidir (250); 250-350 arası Kuşano-Sasani dönemi bu pakette Peşâver için yazılmadı. · ASYA-ZINCIR-1024 (W2c)"},
     {f:"0250-01-01",t:"1000-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: 0250-01-01–1000-01-01 arası sahip YAZILMADI: önceki dilim (kusan) kaynaklı olarak 0250-01-01'te biter, sonraki dilim (__BOSLUK__) 1000-01-01'te başlar; aradaki dilim için bu pakette (ASYA-ZINCIR-1024) kaynak okunmadı/bulunamadı. Boşluk komşuya İTİLMEDİ (VERI-YAPISI __BOSLUK__ kuralı); BORÇ: bu dilim için TDV ve ardıl kaynak taraması. · ASYA-ZINCIR-1024"},
     {f:"1000-01-01",t:"1001-11-27",d:"__BOSLUK__",kesinlik:{f:"yil",t:"gun"},kaynak:"BEYANLI BOŞLUK (arandı, bulunamadı): Peşâver'in 1000–1001 sahibi: TDV hindusahiler Hindûşâhîler'i Peşâver'i hâkimiyetleri altında sayar ama hindu-sahiler künyesi BOYALAR'da yok (boya=YOK). f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},
     {f:"1001-11-27",t:"1178-01-01",d:"gazneli",kesinlik:{f:"gun",t:"yil"},kaynak:"TDV hindusahiler: «Peşâver vadisinde yapılan bir savaşta» TDV hindusahiler: «8 Muharrem 392 / 27 Kasım 1001» TDV gurlular: «1178-1180’de Peşâver’i zaptetti». Başlangıç 27 Kasım 1001 (kaynak miladî günü verir, Jülyen) = Peşâver vadisi savaşı, Hindûşâhî yenilgisi; BEYANLI YAKLAŞIKLIK: şehrin fiilen Gazneli idaresine geçişi savaşın çıkarımıdır. Bitiş 1178: kaynak 1178-1180 aralığı verir, aralığın ilk yılı (alt sınır) alındı. · VERI-MS1-1281"},
     {f:"1178-01-01",t:"1206-01-01",d:"gurlu",kesinlik:"yil",kaynak:"TDV gurlular: «1178-1180’de Peşâver’i zaptetti» TDV gurlular: «Sultan Muizzüddin’in ölümünün ardından on yıl içinde Gurlu İmparatorluğu’nun İndus nehrine kadar varan bölgeleri Hârizmşahlar’ın» TDV gurlular: «bir İsmâilî fedaisi tarafından öldürüldü (602/1206)». Bitiş 1206: 602 hicrî ∩ 1206 kesişiminin ilk günü 1206-01-01 (hicrî 602 yaklaşık 1205-08..1206-08 Jülyen). · VERI-MS1-1281"},
     {f:"1206-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BEYANLI BOŞLUK (arandı, bulunamadı): Peşâver'in 1206–1281 sahibi; TDV Gurlu İndus-batısı topraklarının on yıl içinde Hârizmşahlar'a geçtiğini (tarihsiz, bölge) verir; 1221 Moğol ve sonrası için Peşâver adıyla tanıklık yok. · VERI-MS1-1281"},
     {f:"1281-01-01", t:"1504-10-01", d:"delhi-sultanligi"},
     {f:"1504-10-01", t:"1738-01-01", d:"babur-imparatorlugu"},
     {f:"1738-01-01", t:"1747-06-20", d:"afsar"},
     {f:"1747-06-20", t:"1834-05-06", d:"afgan-durrani"},
     {f:"1834-05-06", t:"1849-03-29", d:"sih-imparatorlugu"},
     {f:"1849-03-29", t:"1947-08-15", d:"ingiliz-hindistani"},
     {f:"1947-08-15",t:"2000-12-31",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"}] },

// ⚠️ KÖPRÜ NOKTALARI — Kâbil, Gazne, Kandehar görev tanımının tablosunda
// (68-97°D) yok; üçü de 65-69°D arasındadır. Yine de konuldular çünkü Delhi
// Sultanlığı → Bâbürlü → Dürrânî zincirinin bu ucu olmadan Hint kuzeybatısı
// ile Oturum 4'ün İran verisi arasında 600 km'lik boşluk kalıyor. Herat
// (62.20°D) EKLENMEDİ: Oturum 4 onu kasten dışarıda bıraktı, o oturumun işidir.

// Kâbil — Bâbür 1504 Ekim'inde aldı ve 1526'ya kadar burada hüküm sürdü;
// Bâbürlü hânedanının çıkış noktasıdır. İki İngiliz işgali gerçek el
// değiştirmedir ve ayrı pencere aldı: 7 Ağustos 1839 – 6 Ocak 1842 ve
// 12 Ekim 1879 – 11 Ağustos 1880.
{ ad:"Kâbil", tur:"sehir", lat:34.5280, lon:69.1720, g:2, k:2, d:[],
  s:[{f:"0500-01-01",t:"0665-01-01",d:"__BOSLUK__",kesinlik:"onyil",kaynak:"BOŞLUK BEYANI: Kâbil bu dilimde TDV Kâbil maddesine göre \"Kuşan Devleti ve arkasından hüküm süren Kâbilşâhîler hânedanı\" elindeydi (\"Kâbil’de Kuşan Devleti’nin ve arkasından hüküm süren Kâbilşâhîler hânedanının yıkılmasından sonra Türkşâhîler dönemi başladı\"); Kâbilşâhîler ve Eftalit/Alkhon'un Kâbil'e egemenliği için bu kümede atlas kimliği ve kaynak yok. Arandı, bulunamadı: TDV Kâbil (okundu), Majumdar III-IV (okundu). | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı) · DOGU-500-1281"},{f:"0665-01-01",t:"0850-01-01",d:"__BOSLUK__",kesinlik:"onyil",kaynak:"BOŞLUK BEYANI: sahip turk-sahi (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"turk-sahi\" geri yazılır) · Ahmet Kavas, «Kâbil», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/kabil--afganistan (22.10.2026'da okundu), «Kâbil»: \"Kâbil’de Kuşan Devleti’nin ve arkasından hüküm süren Kâbilşâhîler hânedanının yıkılmasından sonra Türkşâhîler dönemi başladı.\" | Ahmet Kavas, «Kâbil», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/kabil--afganistan (22.10.2026'da okundu), «Kâbil»: \"Fazl b. Yahyâ tarafından gönderilen İbrâhim b. Cibrâîl 179’da (795) Zâbülistan’ı aldı ve Kâbil’e girdi; bunun üzerine Kâbil’de oturan Türkşâhî hükümdarı müslüman oldu ve 1,5 milyon dirhem haraç vermeyi kabul etti.\" | f=0665 künye f (TDV: 664'te zaten Türkşâhî). t=0850: Kallar (yuzyil). · DOGU-500-1281"},{f:"0850-01-01",t:"0869-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: sahip hindu-sahiler (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"hindu-sahiler\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Central and Western India»: \"Kallar, a Brahmana minister of king Lagaturman of this dynasty, overthrew his master and occupied the throne.\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Central and Western India»: \"Lalliya could not keep Kabul under his control for a long time.\" | «Saffâr, Ya‘kūb b. Leys», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/saffar-yakub-b-leys (22.10.2026'da okundu), «Saffâr, Ya‘kūb b. Leys»: \"Ya‘kūb bu sırada Gazne’yi aldı, Zâbülistan’ı ele geçirip Gerdiz’i haraca bağladı ve Kâbil’e kadar ilerledi (255/869).\" | f=0850 YÜZYIL (ikinci yarının alt sınırı); t=0869: TDV 255/869 (Majumdar 870). · DOGU-500-1281"},{f:"0869-01-01",t:"0900-04-19",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip saffari (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"saffari\" geri yazılır) · TDV İslâm Ansiklopedisi, «Kâbil» md., https://islamansiklopedisi.org.tr/kabil--afganistan (22.10.2026'da okundu): «Müslümanların Kâbil ve civarında tam hâkimiyet kurmaları Sicistan’daki Saffârîler dönemine rastlar.» | TDV İslâm Ansiklopedisi, «Saffâr, Ya‘kūb b. Leys» md., https://islamansiklopedisi.org.tr/saffar-yakub-b-leys (22.10.2026'da okundu): «Ya‘kūb bu sırada Gazne’yi aldı, Zâbülistan’ı ele geçirip Gerdiz’i haraca bağladı ve Kâbil’e kadar ilerledi (255/869).» | TDV İslâm Ansiklopedisi, «Saffârîler» md., https://islamansiklopedisi.org.tr/saffariler (22.10.2026'da okundu): «İsmâil b. Ahmed, Amr’ı Belh yakınında mağlûp ve esir etti (15 Rebîülâhir 287 / 19 Nisan 900).» | BEYAN: hint1’deki 0850-0869 Hindu Şâhî dilimi 869’da biter (Majumdar 870); Saffârî egemenliğinin Kâbil’de ne kadar sürdüğü TDV’de yok; t=900-04-19 Saffârîlerin Horasan’ı yitirdiği gün (yaklaşıklık). · DOGU-500-1281"},{f:"0900-04-19",t:"0986-05-13",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip hindu-sahiler (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"hindu-sahiler\" geri yazılır) · BEYANLI YAKLAŞIKLIK: Kâbil’in Saffârî’den çıkışı ve Hindu Şâhî’ye dönüşü TDV’de yok; R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Central and Western India»: \"Kallar, a Brahmana minister of king Lagaturman of this dynasty, overthrew his master and occupied the throne.\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Central and Western India»: \"Lalliya could not keep Kabul under his control for a long time.\" | «Saffâr, Ya‘kūb b. Leys», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/saffar-yakub-b-leys (22.10.2026'da okundu), «Saffâr, Ya‘kūb b. Leys»: \"Ya‘kūb bu sırada Gazne’yi aldı, Zâbülistan’ı ele geçirip Gerdiz’i haraca bağladı ve Kâbil’e kadar ilerledi (255/869).\" | f=0850 YÜZYIL (ikinci yarının alt sınırı); t=0869: TDV 255/869 (Majumdar 870). | TDV İslâm Ansiklopedisi, «Kâbil» md., https://islamansiklopedisi.org.tr/kabil--afganistan (22.10.2026'da okundu): «Kâbil’in İslâmlaşması ise Sâmânîler’in Horasan valileri Alp Tegin (ö. 963) ve Sebük Tegin (ö. 997) dönemlerinde başlayıp Gazneli Mahmud zamanında tamamlanmıştır.» | Sebük Tegin’in 986’da Hindu Şâhî racasını yenip Kâbil’e hâkim olduğu bozkir2 sınır maddesi/TDV Gazneliler (dilim sonu). · DOGU-500-1281"},{f:"0986-05-13",t:"1157-01-01",d:"gazneli",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, Erdoğan Merçil, \"Gazneliler\" md., 1996, https://islamansiklopedisi.org.tr/gazneliler («Neticede çetin savaşlardan sonra Hindûşâhî racası mağlûp edildi ve Sebük Tegin Kâbil nehri boyunca Peşâver’e kadar ilerlemeye ve orada İslâmiyet’in tohumlarını atmaya muvaffak oldu (376/986-87).») (bu oturumda okundu) | TDV İslâm Ansiklopedisi, Iqtidar Husain Siddiqui, \"Gurlular\" md., 1996, https://islamansiklopedisi.org.tr/gurlular («Gur ve Garcistan, Bâmiyân, Belh, Büst, Horasan, Gazne, Kâbil, Kirman, Lahor») (bu oturumda okundu) · DOGU-500-1281"},{f:"1157-01-01",t:"1173-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip horasan-oguz-hakimiyeti (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"horasan-oguz-hakimiyeti\" geri yazılır) · ABİ MERKEZ: Gazne — TDV İslâm Ansiklopedisi, «Gazne» md., https://islamansiklopedisi.org.tr/gazne (22.10.2026'da okundu): «Şehir bir ara Oğuzlar’ın eline geçti. Daha sonra Gurlular’dan Muizzüddin Gazne’yi 1173’te ele geçirdi ve başşehir yaptı.» | TDV İslâm Ansiklopedisi, Iqtidar Husain Siddiqui, \"Gurlular\" md., 1996, https://islamansiklopedisi.org.tr/gurlular («Gazne bölgesindeki Oğuz Türkleri’ne saldırıp şehri yağmalamaları için yetki verdi. Daha sonra Gur’un ve Horasan’ın çeşitli bölgelerinden gelen orduları topladı ve 1173’te Gazne’yi aldıktan sonra buranın idaresini sultan unvanını verdiği kardeşi Muizzüddin Muhammed’e bıraktı.») (bu oturumda okundu) | TDV İslâm Ansiklopedisi, Erdoğan Merçil, \"Gazneliler\" md., 1996, https://islamansiklopedisi.org.tr/gazneliler («Sonuçta Hüsrev Şah Gazne’yi terkederek Lahor şehrine yerleşti.») (bu oturumda okundu) | bozkir2’de bu dilim __BOSLUK__ idi; Oğuz künyesi bu kümede önerildi. BEYANLI YAKLAŞIKLIK: Kâbil adıyla Oğuz tanıklığı yok; Gazne’nin kaderi izlendi. · DOGU-500-1281"},{f:"1173-01-01",t:"1215-01-01",d:"gurlu",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, Iqtidar Husain Siddiqui, \"Gurlular\" md., 1996, https://islamansiklopedisi.org.tr/gurlular («Daha sonra Gur’un ve Horasan’ın çeşitli bölgelerinden gelen orduları topladı ve 1173’te Gazne’yi aldıktan sonra buranın idaresini sultan unvanını verdiği kardeşi Muizzüddin Muhammed’e bıraktı.») (bu oturumda okundu) | TDV İslâm Ansiklopedisi, Iqtidar Husain Siddiqui, \"Gurlular\" md., 1996, https://islamansiklopedisi.org.tr/gurlular («Sultan Muizzüddin’in öldürülmesi Şensebânî hânedanının tarihinde bir dönüm noktası teşkil etti. Şensebânî prensleri arasındaki birlik bozuldu. Hârizmşah Alâeddin Muhammed iç çekişmelerden faydalanarak bütün Horasan’ı kontrolü altına aldığı gibi Gazne ve çevresindeki bölgelerde bulunan Gurlu idarecileri de tesirsiz hale getirmeye çalıştı.») (bu oturumda okundu) · DOGU-500-1281"},{f:"1215-01-01",t:"1221-11-26",d:"harizmsah",kesinlik:"gun",kaynak:"TDV İslâm Ansiklopedisi, Aydın Taneri, \"Hârizmşahlar\" md., 1997, https://islamansiklopedisi.org.tr/harizmsahlar («Aynı yıl Gazne’yi aldı ve oğlu Celâleddin’e verdi; ayrıca Fars Atabegi Sa‘d b. Zengî ile Azerbaycan Atabegi Özbek’i yenerek itaatlerini sağladı.») (bu oturumda okundu) | TDV İslâm Ansiklopedisi, Aydın Taneri, \"Hârizmşahlar\" md., 1997, https://islamansiklopedisi.org.tr/harizmsahlar («Celâleddin, daha sonra Moğollar’ı üst üste mağlûp etmesine rağmen 9 Şevval 618’de (26 Kasım 1221) Hindistan’a sığınmak zorunda kaldı.») (bu oturumda okundu) · DOGU-500-1281"},{f:"1221-11-26",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Kâbil» md., https://islamansiklopedisi.org.tr/kabil--afganistan (22.10.2026'da okundu): «Cengiz Han’ın saldırısı ile de harabeye döndü.» | TDV İslâm Ansiklopedisi, «Gazne» md., https://islamansiklopedisi.org.tr/gazne (22.10.2026'da okundu): «Gazne, Cihansûz hadisesinden sonra en büyük tahribata 1221’de mâruz kalmış ve eski canlılığını kaybetmiştir.» | BEYANLI YAKLAŞIKLIK: ABİ MERKEZ Gazne (zincir devralındı); t=1260-01-01 mogol künye t. · DOGU-500-1281"},{f:"1260-01-01",t:"1281-01-01",d:"cagatay",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Çağatay Hanlığı» md., https://islamansiklopedisi.org.tr/cagatay-hanligi (22.10.2026'da okundu): «Çağatay Hanlığı toprakları yanında Hârizm ve Afganistan’ı da ele geçiren Algu» · «Çağatay hanı oldu (1260-1266)» | ABİ MERKEZ: Gazne (TDV Gazne “Ardından Çağataylılar yöreye hâkim oldular.”). Mevcut zincir cagatay 1281-01-01 ile sürekli. · DOGU-500-1281"},{f:"1281-01-01", t:"1370-01-01", d:"cagatay"},
     {f:"1370-01-01", t:"1504-10-01", d:"timurlu"},
     {f:"1504-10-01", t:"1738-01-01", d:"babur-imparatorlugu"},
     {f:"1738-01-01", t:"1747-06-20", d:"afsar"},
     {f:"1747-06-20", t:"1826-01-01", d:"afgan-durrani"},
     {f:"1826-01-01", t:"1839-08-07", d:"afganistan"},
     {f:"1839-08-07", t:"1842-01-06", d:"ingiltere"},
     {f:"1842-01-06", t:"1879-10-12", d:"afganistan"},
     {f:"1879-10-12", t:"1880-08-11", d:"ingiltere"},
     {f:"1880-08-11", t:"2000-12-31", d:"afganistan"}] },

{ ad:"Gazne", tur:"sehir", lat:33.5510, lon:68.4230, g:1, k:2, d:[],
  s:[{f:"0500-01-01",t:"0557-01-01",d:"eftalit",kesinlik:"yil",kaynak:"SAHİP eftalit: DOGU-500-1281 BOŞLUK BEYANI geri yazıldı (ZINCIR-ORTA, 24 Ekim 2026; boya durumu denetim/ILERLEME-BOYA-BEKLEYEN-ORTA.tsv) — dayanak aşağıdadır · TDV İslâm Ansiklopedisi, «Gazne» md., https://islamansiklopedisi.org.tr/gazne (22.10.2026'da okundu): «Kuşanlar’ın mirasçısı Akhunlar da (Eftalitler) Gazne’yi iki yüzyıl kadar idareleri altında bulundurdular. Sâsânî-Göktürk iş birliği sonunda Akhun Devleti yıkılınca Gazne mahallî siyasî teşekküllerce idare edildi.» | f=0500-01-01 UFUK SINIR İŞARETİDİR. t=0557-01-01: Belh zincirindeki Eftalit sonu (eftalit künyesi t=0560-01-01); TDV Gazne yıl vermez, “Sâsânî-Göktürk iş birliği” sonrası (BEYANLI YAKLAŞIKLIK). · DOGU-500-1281"},{f:"0557-01-01",t:"0869-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Gazne 557-869 sahibi: TDV İslâm Ansiklopedisi, «Gazne» md., https://islamansiklopedisi.org.tr/gazne (22.10.2026'da okundu): «Gazne mahallî siyasî teşekküllerce idare edildi.» · «VIII. yüzyıl başında Gazne’yi ziyaret eden Huei-ch’ao burada birçok ibadethânenin bulunduğunu, şehrin Sha-Tarkan adlı bir Türk tarafından yönetildiğini söyler.» | TDV İslâm Ansiklopedisi, «Saffâr, Ya‘kūb b. Leys» md., https://islamansiklopedisi.org.tr/saffar-yakub-b-leys (22.10.2026'da okundu): «Zemindâver ve Zâbülistan hâkimi Zunbil’in yanına kaçtı.» | Yerel teşekküller (Sha-Tarkan, Zunbiller/Zâbülistan hâkimleri) için atlas kimliği ve künyesi yok; Kâbil’in Türkşâhî kimliğini bu dilime taşımak kaynaksız yaklaşıklık olur → boşluk. t=0869-01-01: Ya‘kūb’un Gazne’yi alışı (255/869). · DOGU-500-1281"},{f:"0869-01-01",t:"0900-04-19",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip saffari (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"saffari\" geri yazılır) · TDV İslâm Ansiklopedisi, «Saffâr, Ya‘kūb b. Leys» md., https://islamansiklopedisi.org.tr/saffar-yakub-b-leys (22.10.2026'da okundu): «Ya‘kūb bu sırada Gazne’yi aldı, Zâbülistan’ı ele geçirip Gerdiz’i haraca bağladı ve Kâbil’e kadar ilerledi (255/869).» | TDV İslâm Ansiklopedisi, «Gazne» md., https://islamansiklopedisi.org.tr/gazne (22.10.2026'da okundu): «IX. yüzyılda ise Saffârî nüfuzu Gazne kapılarına kadar yayıldı.» | TDV İslâm Ansiklopedisi, «Saffârîler» md., https://islamansiklopedisi.org.tr/saffariler (22.10.2026'da okundu): «İsmâil b. Ahmed, Amr’ı Belh yakınında mağlûp ve esir etti (15 Rebîülâhir 287 / 19 Nisan 900).» | 255 H ∩ 869 → 869-01-01 (255 H 868-12-20→869-12-09). t: Amr’ın esir düştüğü gün. · DOGU-500-1281"},{f:"0900-04-19",t:"0963-01-12",d:"samani",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Gazne» md., https://islamansiklopedisi.org.tr/gazne (22.10.2026'da okundu): «Şehrin X. yüzyılda Sâmânîler’in hâkimiyetinde bulunduğu anlaşılmaktadır.» · «Alp Tegin’in yerine geçen oğlu Ebû İshak İbrâhim zamanında (963-966) Levik hânedanından Ebû Ali Gazne’yi işgal etti.» | BEYANLI YAKLAŞIKLIK: Saffârî→Sâmânî geçiş günü ve Levik (Lavik) hânedanının (Sâmânî vasalı) idaresi okunmadı; f=900-04-19 Horasan’ın Sâmânî’ye geçtiği gün (TDV Saffârîler) alt sınırdır. · DOGU-500-1281"},{f:"0963-01-12",t:"1000-01-01",d:"gazneli",kesinlik:"gun",kaynak:"TDV İslâm Ansiklopedisi, «Gazne» md., https://islamansiklopedisi.org.tr/gazne (22.10.2026'da okundu): «Sâmânîler’in hizmetinde bir Türk kumandanı olan Alp Tegin 13 Zilhicce 351’de (12 Ocak 963) Gazne’yi ele geçirdi.» | TDV İslâm Ansiklopedisi, Erdoğan Merçil, \"Gazneliler\" md., 1996, https://islamansiklopedisi.org.tr/gazneliler («burayı ele geçirdi (Zilhicce 351 / Ocak 963).») (bu oturumda okundu) | TDV İslâm Ansiklopedisi, Erdoğan Merçil, \"Gazneliler\" md., 1996, https://islamansiklopedisi.org.tr/gazneliler («Behram Şah yeniden Gazne’ye hâkim olduysa da (547/1152) Gazneliler artık çöküş sürecine girmişti.») (bu oturumda okundu) | f: bozkir2’de 0963-01-01 (ay hassasiyeti); TDV Gazne günü verdiği için 963-01-12. gazneli künyesi f=0963-01-01 → sorun yok (f künyeden sonra). · DOGU-500-1281"},{f:"1000-01-01",t:"1173-01-01",d:"gazneli",kesinlik:"yil",kaynak:"TDV gazne: «1186 yılına kadar Afganistan ve çevresine sahip olan Gazneli hükümdarlarının çoğu Gazne’de oturdu» TDV gazne: «Daha sonra Gurlular’dan Muizzüddin Gazne’yi 1173’te ele geçirdi ve başşehir yaptı». BEYANLI YAKLAŞIKLIK: kaynak Gazneli şehrini 963'ten 1173'e kadar sürekli kuşatmıştır, ancak Sencer'in istilâları (1117, 1135), Alâeddin Hüseyin'in yakıp yıkması (1150-51) ve tarihsiz Oğuz işgali bu dilimin içinde kalır. 1173 = yıl hassasiyeti. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1173-01-01",t:"1215-01-01",d:"gurlu",kesinlik:"yil",kaynak:"TDV gazne: «Daha sonra Gurlular’dan Muizzüddin Gazne’yi 1173’te ele geçirdi ve başşehir yaptı» TDV gazne: «Muizzüddin’in ardından Türk Memlük Emîri Tâceddin Yıldız Gazne’ye hâkim oldu» TDV celaleddin-harizmsah: «Hârizmşah Alâeddin Muhammed 1215’te Gûr ve Gazne bölgesini hâkimiyeti altına aldığı zaman». Bitiş 1215 = Hârizmşah fethi (yıl). Yıldız dönemi (1206-1215) Gurlu idaresi sayıldı (TDV Yıldız'ı Muizzüddin'in memlüğü olarak verir). · VERI-MS1-1281"},{f:"1215-01-01",t:"1221-01-01",d:"harizmsah",kesinlik:"yil",kaynak:"TDV celaleddin-harizmsah: «Gazne merkez olmak üzere Gûr, Herat, Garcistan ve Sicistan ülkelerine» TDV gazne: «XIII. yüzyıl başlarında Hârizmşahlar’a intikal eden Gazne’de». Bitiş 1221 yıl hassasiyeti (Celâleddin Mart 1221'de Gazne'ye geldi, Kasım 1221'de Hindistan'a geçti; Moğol yıkımı 1221). · VERI-MS1-1281"},{f:"1221-01-01",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:"yil",kaynak:"TDV gazne: «Gazne, Cihansûz hadisesinden sonra en büyük tahribata 1221’de mâruz kalmış» TDV gazne: «Moğollar Ögedey Han kumandasında Gazne önlerine geldiler». BEYANLI YAKLAŞIKLIK: Moğol idaresinin şehirde kurulma günü/biçimi kaynakta yok; 1260 = Moğol İmparatorluğu künye sonu. · VERI-MS1-1281"},{f:"1260-01-01",t:"1281-01-01",d:"cagatay",kesinlik:"yil",kaynak:"TDV gazne: «Ardından Çağataylılar yöreye hâkim oldular» TDV cagatay-hanligi: «Çağatay Hanlığı toprakları yanında Hârizm ve Afganistan’ı da ele geçiren Algu» TDV cagatay-hanligi: «Çağatay hanı oldu (1260-1266)». BEYANLI YAKLAŞIKLIK: Gazne maddesi Çağatay hâkimiyetini tarihsiz verir; 1260 Algu'nun hanlığı yılı alt sınır alındı; bitiş 1281 = mevcut ilk s (cagatay) f'si. · VERI-MS1-1281"},{f:"1281-01-01", t:"1370-01-01", d:"cagatay"},
     {f:"1370-01-01", t:"1504-10-01", d:"timurlu"},
     {f:"1504-10-01", t:"1738-01-01", d:"babur-imparatorlugu"},
     {f:"1738-01-01", t:"1747-06-20", d:"afsar"},
     {f:"1747-06-20", t:"1826-01-01", d:"afgan-durrani"},
     {f:"1826-01-01", t:"1839-07-23", d:"afganistan"},
     {f:"1839-07-23", t:"1842-09-06", d:"ingiltere"},
     {f:"1842-09-06", t:"2000-12-31", d:"afganistan"}] },

// Bâmiyan — KUTU-A-1014 (0082/H-0056 · 0086/H-0004): Hazârecât kutusunda
// (33.2-36.2K / 62.5-68D) HİÇ nokta yoktu; toprak Kâbil/Kandehar/Herat
// peteklerine emilip Bâbürlü/Safevî/Dürrânî boyanıyordu. Kaynak bunun TERSİNİ
// söylüyor: Iranica HAZĀRA i 'Until the late 19th century, the Hazārajāt
// remained independent and only the authority of local leaders, ḵāns or mirs,
// was obeyed' · HAZĀRA ii 'For most of the period since the 16th century, the
// Hazāras have evaded the control of the powerful regional empires (Safavids
// in Iran, Uzbeks in Central Asia, Mughals in India)'. Timur'un seferleri
// yalnız 'expeditions'. ⇒ 1893'e dek __BOSLUK__ (kimsenin değil), en yakın
// kimliğe İTİLMEDİ. 🟡 Dost Muhammed'in ikinci saltanatında (1259-79/1842-63)
// 'collected taxes in Bāmiān and certain peripheral areas' — vergi tahsili,
// idare değil; dönem olarak YAZILMADI (beyan). Fetih: 'only in the summer of
// 1893 … Hazāra forces suffered a resounding defeat' ⇒ afganistan 1893 (YIL;
// YYYY-01-01 kuralı ucu yazdan önceye düşürür, beyanlı). Koordinat OSM
// (Bâmiyan çarşısı). Mükerrer: en yakın nokta Kâbil ~130 km.
{ ad:"Bâmiyan", tur:"sehir", lat:34.8215, lon:67.8300, g:0, k:0, d:[], kaynak:"Encyclopaedia Iranica HAZĀRA i-ii · koordinat OSM",
  s:[{f:"0500-01-01",t:"0869-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Bâmiyân’ın 500-869 sahibi: TDV İslâm Ansiklopedisi, «Saffârîler» md., https://islamansiklopedisi.org.tr/saffariler (22.10.2026'da okundu): «hâkimiyet sahasını Gazne, Gerdiz ve Kabûl-Bâmiyân bölgesine kadar genişletti» | TDV İslâm Ansiklopedisi, «Kâbil» md., https://islamansiklopedisi.org.tr/kabil--afganistan (22.10.2026'da okundu): «Kâbil’de Kuşan Devleti’nin ve arkasından hüküm süren Kâbilşâhîler hânedanının yıkılmasından sonra Türkşâhîler dönemi başladı.» | Bâmiyân’ı adıyla bir devlete bağlayan 869 öncesi TDV tanıklığı bulunamadı (Eftalit/Türk Şâhî/Toharistan Yabguluğu çıkarımı yazılmadı); f=0500-01-01 UFUK SINIR İŞARETİDİR. · DOGU-500-1281"},{f:"0869-01-01",t:"0900-04-19",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip saffari (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"saffari\" geri yazılır) · TDV İslâm Ansiklopedisi, «Saffârîler» md., https://islamansiklopedisi.org.tr/saffariler (22.10.2026'da okundu): «hâkimiyet sahasını Gazne, Gerdiz ve Kabûl-Bâmiyân bölgesine kadar genişletti» | TDV İslâm Ansiklopedisi, «Saffâr, Ya‘kūb b. Leys» md., https://islamansiklopedisi.org.tr/saffar-yakub-b-leys (22.10.2026'da okundu): «Ya‘kūb bu sırada Gazne’yi aldı, Zâbülistan’ı ele geçirip Gerdiz’i haraca bağladı ve Kâbil’e kadar ilerledi (255/869).» | TDV İslâm Ansiklopedisi, «Saffârîler» md., https://islamansiklopedisi.org.tr/saffariler (22.10.2026'da okundu): «İsmâil b. Ahmed, Amr’ı Belh yakınında mağlûp ve esir etti (15 Rebîülâhir 287 / 19 Nisan 900).» | BEYANLI YAKLAŞIKLIK: Bâmiyân’ın Saffârî’ye geçiş yılı doğrudan okunmadı; 255/869 seferi (Gazne, Kâbil) sonrası bölge Saffârî genişlemesinde sayıldı; 255 H ∩ 869 → 869-01-01. t = Amr’ın Belh yakınında esir düştüğü gün (TDV Saffârîler). · DOGU-500-1281"},{f:"0900-04-19",t:"0963-01-12",d:"samani",kesinlik:"yil",kaynak:"ABİ MERKEZ: Gazne — Bâmiyân Gazne’nin kuzeybatısındadır ve kaderini Gazne ile paylaşmıştır: TDV İslâm Ansiklopedisi, «Gazne» md., https://islamansiklopedisi.org.tr/gazne (22.10.2026'da okundu): «Şehrin X. yüzyılda Sâmânîler’in hâkimiyetinde bulunduğu anlaşılmaktadır.» | BEYANLI YAKLAŞIKLIK: Bâmiyân’ın Sâmânî/Lavik idaresindeki durumu doğrudan okunmadı; Gazne zinciri devralındı. t=963-01-12: Alp Tegin’in Gazne’yi alış günü (TDV Gazne). · DOGU-500-1281"},{f:"0963-01-12",t:"1145-06-24",d:"gazneli",kesinlik:"gun",kaynak:"ABİ MERKEZ: Gazne — Bâmiyân Gazne’nin kuzeybatısındadır ve kaderini Gazne ile paylaşmıştır: TDV İslâm Ansiklopedisi, «Gazne» md., https://islamansiklopedisi.org.tr/gazne (22.10.2026'da okundu): «Sâmânîler’in hizmetinde bir Türk kumandanı olan Alp Tegin 13 Zilhicce 351’de (12 Ocak 963) Gazne’yi ele geçirdi.» | TDV İslâm Ansiklopedisi, «Behram Şah» md., https://islamansiklopedisi.org.tr/behram-sah (22.10.2026'da okundu): «Behram Şah Gazne’nin kuzeybatısındaki Bâmiyân Kalesi’ne sığındı, Arslanşah da Gazne’ye hâkim oldu.» | BEYANLI YAKLAŞIKLIK: Bâmiyân’ın Gazneli idaresine giriş günü ve Selçuklu vasallığı (Sencer 1117, 1135 Gazne) okunmadı; Behram Şah’ın (1117-1157) Bâmiyân Kalesi’ne sığınması bölgenin Gazneli ülkesinde olduğunu gösterir. t = Gurlu Bâmiyân kolunun kuruluşu (TDV Gurlular 540/1145). · DOGU-500-1281"},{f:"1145-06-24",t:"1215-01-01",d:"gurlu",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, Iqtidar Husain Siddiqui, \"Gurlular\" md., 1996, https://islamansiklopedisi.org.tr/gurlular («Bâmiyân ve Tohâristan Kolu Fahreddin Mesud 540 (1145) Şemseddin Muhammed 558 (1163) Bahâeddin Sâm 588 (1192) Celâleddin Ali 602-612 (1206-1215)») (bu oturumda okundu) | TDV İslâm Ansiklopedisi, Iqtidar Husain Siddiqui, \"Gurlular\" md., 1996, https://islamansiklopedisi.org.tr/gurlular («Bunun üzerine onların aleyhine amcaları Bâmiyân hâkimi Fahreddin Mesud ile iş birliğine girdi.») (bu oturumda okundu) · DOGU-500-1281"},{f:"1215-01-01",t:"1221-11-26",d:"harizmsah",kesinlik:"yil",kaynak:"ABİ MERKEZ: Gazne — Bâmiyân Gazne’nin kuzeybatısındadır ve kaderini Gazne ile paylaşmıştır: TDV İslâm Ansiklopedisi, «Hârizmşahlar» md., https://islamansiklopedisi.org.tr/harizmsahlar (22.10.2026'da okundu): «Aynı yıl Gazne’yi aldı ve oğlu Celâleddin’e verdi» | TDV İslâm Ansiklopedisi, «Gurlular» md., https://islamansiklopedisi.org.tr/gurlular (22.10.2026'da okundu): «Bâmiyân ve Tohâristan Kolu Fahreddin Mesud 540 (1145) Şemseddin Muhammed 558 (1163) Bahâeddin Sâm 588 (1192) Celâleddin Ali 602-612 (1206-1215)» | BEYANLI YAKLAŞIKLIK: Bâmiyân kolunun 1215’te Hârizmşah’a geçişi doğrudan okunmadı; kolun son hükümdarı 612/1215’te biter. t = Celâleddin’in Gazne’den kaçışı (Gazne zinciriyle aynı gün). · DOGU-500-1281"},{f:"1221-11-26",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:"yil",kaynak:"ABİ MERKEZ: Gazne — Bâmiyân Gazne’nin kuzeybatısındadır ve kaderini Gazne ile paylaşmıştır: TDV İslâm Ansiklopedisi, «Gazne» md., https://islamansiklopedisi.org.tr/gazne (22.10.2026'da okundu): «Gazne, Cihansûz hadisesinden sonra en büyük tahribata 1221’de mâruz kalmış ve eski canlılığını kaybetmiştir.» | TDV İslâm Ansiklopedisi, «Kâbil» md., https://islamansiklopedisi.org.tr/kabil--afganistan (22.10.2026'da okundu): «Cengiz Han’ın saldırısı ile de harabeye döndü.» | BEYANLI YAKLAŞIKLIK: Bâmiyân adı geçmiyor. t=1260-01-01: mogol-imparatorlugu künye t; TDV Çağatay’a göre Algu Afganistan’ı 1260’ta aldı (sonraki dilim). · DOGU-500-1281"},{f:"1260-01-01",t:"1281-01-01",d:"cagatay",kesinlik:"yil",kaynak:"ABİ MERKEZ: Gazne — Bâmiyân Gazne’nin kuzeybatısındadır ve kaderini Gazne ile paylaşmıştır: TDV İslâm Ansiklopedisi, «Çağatay Hanlığı» md., https://islamansiklopedisi.org.tr/cagatay-hanligi (22.10.2026'da okundu): «Çağatay Hanlığı toprakları yanında Hârizm ve Afganistan’ı da ele geçiren Algu» · «Çağatay hanı oldu (1260-1266)» | TDV İslâm Ansiklopedisi, «Gazne» md., https://islamansiklopedisi.org.tr/gazne (22.10.2026'da okundu): «Ardından Çağataylılar yöreye hâkim oldular.» | BEYANLI YAKLAŞIKLIK: Bâmiyân adı geçmiyor; Afganistan’ın Çağatay’a geçişi 1260-1266 (Algu) alınmıştır. Mevcut zincir 1281’de __BOSLUK__ (1281→1893) ile başlıyor: mevcut kayıttaki delik ayrı bir borçtur. · DOGU-500-1281"},{f:"1281-01-01", t:"1893-01-01", d:"__BOSLUK__", kaynak:"Iranica HAZĀRA i-ii (yukarıdaki yorum): Hazârecât 19. yy sonuna dek bağımsız, yerel han/mir idaresi; künyesi olan bir yapı yok"},
     {f:"1893-01-01", t:"2000-12-31", d:"afganistan", kesinlik:{f:"yil",t:"gun"}, kaynak:"Iranica HAZĀRA ii: Abdurrahman Han'ın Hazâra seferi, 'summer of 1893 … resounding defeat' (YIL)"}] },

// Kandehar — Bâbürlü ile Safevî arasında altı kez el değiştirdi: 1522 Bâbür,
// 1537 Safevî, 1595 Bâbürlü, 1622 Safevî, 1638 Bâbürlü, 1649 Safevî.
// 1709'da Mîr Veys ile Hotakî Afgan idaresi başladı; bu dosya Oturum 4'ün
// geleneğine uyarak Hotakî ve Afşar dönemlerini genel "iran" ile boyuyor.
// 1747'de Ahmed Şah Dürrânî burada taç giydi ve ilk başkenti oldu.
{ ad:"Kandehar", kur:"1773-01-01", kesinlik:"belirsiz", neden:"SEHIR-TARIHCE-OSM-1014 C grubu · Emre kararları 13-14 Ekim 2026 (antik/eski yer > 3 km ⇒ AYRI nokta; Şırnak kalıbı): bu nokta BUGÜNKÜ şehrin yeridir; atlasın bu noktadaki önceki başlangıcı ve dönemleri ESKİ şehre aitti ve 'Eski Kandehar (Şehr-i Köhne)' kaydına taşındı. kur: KURULUŞ DEĞİL, bugünkü sahanın İLK YAZILI TANIĞI (görünme alt sınırı): TDV KANDEHAR (A. Özcan): 'Ahmed Şah Dürrânî de eski şehrin doğusunda Ahmedşâhî adını verdiği surlarla çevrili bir şehir kurdu'; EIr KANDAHAR i. (X. de Planhol): Ahmed Şah'ın saltanatı 1747-73 — kuruluş bu aralıkta, yılı bulunamadı ('1761' doğrulanamadı); güvenli uç 1773. Kesinlik belirsiz. Öncesindeki dönemler kırpıldı. Tarihçe: data/sehir_tarihce_osm.js 'kandahar'.",  tur:"sehir", lat:31.6100, lon:65.7100, g:1, k:2, d:[],
  s:[{f:"1773-01-01", t:"1826-01-01", d:"afgan-durrani"},{f:"1826-01-01", t:"2000-12-31", d:"afganistan"}] },
{ ad:"Eski Kandehar (Şehr-i Köhne)", tur:"sehir", lat:31.601, lon:65.6597, g:0, k:2, kaynak:"TDV `kandehar` (A. Özcan), ham metin 14 Ekim 2026: 'Şehir 1150’de (1738) Afşarlı Nâdir Şah tarafından ele geçirildikten sonra tahrip edilerek' · gün: Encyclopaedia Iranica 'NADIR SHAH AFSHAR' (data/kronoloji_iran.js 1738-03-24) · koordinat Pleiades 59669", neden:"SEHIR-TARIHCE-OSM-1014 C grubu · Emre kararları 13-14 Ekim 2026 (antik/eski yer > 3 km ⇒ AYRI nokta; Şırnak kalıbı): 'Kandehar' kaydının taşıdığı ESKİ şehrin yeri — dönem zinciri o kayıttan 1738-03-24'e kadar ham metinle TAŞINDI (kaynakları dönemlerinde). Koordinat: Pleiades 59669 (Alexandria in Arachosia / Qandahār, CIGS). bit: 1738-03-24 — TDV KANDEHAR: 'Şehir 1150’de (1738) Afşarlı Nâdir Şah tarafından ele geçirildikten sonra tahrip edilerek eski yerinin güneydoğusunda Nâdirâbâd ismiyle yeniden kuruldu'; gün: data/kronoloji_iran.js 1738-03-24 maddesinin kendi kaynağı EIr NADIR SHAH AFSHAR (gün komşudan: o madde). Nâdirâbâd (1738-1747) ayrı yer, bu işte açılmadı. Erken tarih: Ahameniş/İskender dönemi kenti (Pleiades 59669) — zincir atlasın 1281 başlangıcıyla açılır. TDV 1281 sahibini Kert (Şemseddin Kert, 680/1281) verir — KUTU-VERI-1015'te Emre kararıyla (KARARLAR-EMRE-1015 #7) 'cagatay' yerine 'kert' yazıldı, Timur zaptı 1383.", s:[
     {f:"1281-01-01", t:"1383-01-01", d:"kert", kesinlik:{f:"yil",t:"yil"}, kaynak:"TDV `kandehar` (A. Özcan): '680’de (1281) İlhanlılar’ın vasalı Herat hâkimi Şemseddin Kert’in eline geçti' · bitiş: aynı madde '785’te (1383) Timur tarafından zaptedilerek torunu Pîr Muhammed’e verilen şehir' — ikisi de YIL (gün yok ⇒ YYYY-01-01). 1281-1383 arasında başka el değiştirme TDV'de anılmaz. Eski d:'cagatay' 1281-1370 kaynaksızdı · Emre kararı 15 Ekim 2026 (KARARLAR-EMRE-1015 #7: TDV'ye uy, KERT) · KUTU-VERI-1015"},
     {f:"1383-01-01", t:"1507-05-01", d:"timurlu", kaynak:"TDV `kandehar`: '785’te (1383) Timur tarafından zaptedilerek' (YIL) · eski f 1370-01-01 kaynaksızdı · KUTU-VERI-1015"},
     {f:"1507-05-01",t:"1522-09-06",d:"argun",kesinlik:{f:"ay",t:"yil"},kaynak:"SAHİP argun: önceki BOŞLUK BEYANI (KUTU-A-1014 «ARGUN İDARESİ — künye YOK») gerçek sahibe çevrildi; argun künyesi ve BOYALAR rengi artık mevcut. Dayanak (bu oturumda TDV tam metinleri okundu): TDV İslâm Ansiklopedisi, «Argunlular» md. (Abdülkerim Özaydın; islamansiklopedisi.org.tr/argun--sind): «Zünnûn’un ... bir savaşta ölümü üzerine (1507) yerine geçen oğlu Şah Şücâ‘, Kandehar’da tutunabilmek için Şeybânîler’in hâkimiyetini tanımak zorunda kaldı»; «Bâbürlüler 1522’de Kandehar’ı zaptedince Şah Şücâ‘ İndus kıyısındaki Bakkar’ı başşehir yaptı» · TDV, «Kandehar» md. (A. Özcan; islamansiklopedisi.org.tr/kandehar): «Kandehar valisi Zünnûn Argun bölgede bağımsızlığını ilân etmek için harekete geçti ve Kandehar’ı kendisine merkez yaptı ... Bâbür, Argunlular’ın üzerine yürüyerek uzun bir mücadeleden sonra 928’de (1522) şehri zaptetti» · TDV, «Zünnûn Argun» md. (H. Alan; islamansiklopedisi.org.tr/zunnun-argun): Zünnûn’un Özbekler tarafından Kararibat’ta öldürülüşü «7 Muharrem 913/19 Mayıs 1507»; Hüseyin Baykara ona Kandehar’ı vermişti, «Kandehar’ı merkez edindi» | BEYANLI YAKLAŞIKLIK: dönem uçları önceki kaydın günleridir (1507-05-01 = ay hassasiyeti, Zünnûn’un ölümünden — 19 Mayıs 1507 — kısa süre önceki künye günü; 1522-09-06 = Encyclopaedia Iranica «Kandahar iv» günü, önceki kayıttan), TDV bitişi yalnız YIL (1522) verir. Argun egemenliğinin 1507 ÖNCESİ (Zünnûn’un Timurlu valisi olarak Kandehar’ı 'merkez edinişi', TDV yıl vermez: Argunlular md. 1479’dan beri Kandehar’da, Zünnûn md. Kandehar’ın 3-4 yıl sonra verildiğini yazar — TDV iç çelişkisi) timurlu dönemi (1383-1507) olarak KORUNDU. 1507 sonrası Şeybânî üstünlüğü (tâbilik) sahipliği değiştirmedi sayıldı. Kandehar bu pakette ŞEHR-İ KÖHNE noktasıyla temsil edilir. · ASYA-ZINCIR-1024 (W3a)"},
     {f:"1522-09-06", t:"1556-01-01", d:"babur-imparatorlugu", kaynak:"KARAR-UYG-1015 (G3, 0033/H-0010): EIr KANDAHAR iv. From the Mongol Invasion through the Safavid Era (R. Matthee & H. Mashita, 2010): 1522 'finally brought under Bāborʼs control' · 1530 sonrası Kâmrân'ın payı · 1537 Tahmasb aldı (Hâce Kelân teslim etti), 'Kāmrān again marched to Kandahar and expelled the Safavid army' · 1543 Askerî valisi · 1545 Hümâyun Safevî yardımıyla aldı, ardından 'expelled the Safavid reinforcement', vali Bayram Han. ⚠️ İKİ KISA SAFEVÎ DÖNEMİ (1537 · 1545) YAZILMADI: ikisinin de bitiş yılı/günü kaynakta YOK, dönem açmak tarih uydurmak olurdu — beyanlı. Eski safevi 1537-1595 dilimi bu metinle çelişiyordu (~19 yıl yanlış sahip)"},
     {f:"1556-01-01", t:"1595-01-01", d:"safevi", kesinlik:"yil", kaynak:"KARAR-UYG-1015: EIr KANDAHAR iv. From the Mongol Invasion through the Safavid Era (R. Matthee & H. Mashita, 2010): 'When Homāyun died in Delhi in 1556, the Safavid Shah Ṭahmāsb took advantage of conflict among the Mughal governors of Kandahar and Zamindāvar. A Safavid contingent … made an incursion into Kandahar' — başlangıç 1556 ALT SINIR (Safevî zaptının kendi yılı metinde yok) · bitiş 'In 1595, at the advance of a Mughal army, Moẓaffar-Ḥosayn Mirzā surrendered Kandahar' (YIL)"},
     {f:"1595-01-01", t:"1622-06-22", d:"babur-imparatorlugu"},
     {f:"1622-06-22", t:"1638-01-01", d:"safevi"},
     {f:"1638-01-01", t:"1649-02-22", d:"babur-imparatorlugu"},
     {f:"1649-02-22", t:"1709-04-21", d:"safevi"},
     {f:"1709-04-21",t:"1738-03-24",d:"galzay"}], d:[], bit:"1738-03-24" },

// Keşmir — "kesmir" kimliği 1281-1586 arasının TAMAMINI kapsar: 1320'ye
// kadar Lohara hânedanı, 1339'dan itibaren Şah Mîr sultanlığı (TDV KEŞMİR).
// İkisi ayrı kimlik yapılmadı çünkü ikisi de aynı vadinin tek devletidir.
// Ekber 1586 Ekim'inde ilhak etti; Dürrânî 1752'de aldı; Sihler 5 Temmuz
// 1819'da Srinagar'a girdi; 16 Mart 1846 Amritsar Antlaşması ile Gulâb
// Singh'e satıldı ve Cammû-Keşmir prens devleti doğdu.
{ ad:"Srinagar (Keşmir)", tur:"sehir", lat:34.0840, lon:74.7970, g:1, k:1,kd:[{f:"1281-01-01",t:"1586-10-01",k:1,m:"Srinagar (Keşmir)"},{f:"1846-03-16",t:"1923-10-29",k:1,m:"Srinagar (Keşmir)"}], d:[],
  s:[
     {f:"0627-01-01",t:"0855-01-01",d:"karkota",kesinlik:{f:"onyil",t:"yil"},kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay (archive.org: classicalage03bhar, tam metin okundu), s. 132: «The new dynasty, known as the Karkota or Naga dynasty, was founded by Durlabha-vardhana ... succeeded to the throne (c. A.D. 627)»; «we may thus hold that Durlabha-vardhana ruled over not only Kashmir proper, but a part of the western and north-western Punjab» · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay (archive.org: ageofimperialkan04bhar, tam metin okundu), s. 117: bakan Sura «declared Avanti-varman, son of Sukhavarman, as king in A.D. 855-56. Thus the rule of the Karkota dynasty came to an end.» | BEYANLI YAKLAŞIKLIK: Majumdar başkent adı vermez; Srinagar (Keşmir) yerleşimi Keşmir vadisinin merkezi olarak yazıldı (Karkota «ruled Kashmir proper»). Bitiş 855-56 aralığının ilk yılıdır (855-01-01); sonraki Utpala dönemi (utpala-kesmir künyesi) bu pakette yazılmadı. · ASYA-ZINCIR-1024"},
     {f:"0855-01-01",t:"1000-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: 0855-01-01–1000-01-01 arası sahip YAZILMADI: önceki dilim (karkota) kaynaklı olarak 0855-01-01'te biter, sonraki dilim (kesmir) 1000-01-01'te başlar; aradaki dilim için bu pakette (ASYA-ZINCIR-1024) kaynak okunmadı/bulunamadı. Boşluk komşuya İTİLMEDİ (VERI-YAPISI __BOSLUK__ kuralı); BORÇ: bu dilim için TDV ve ardıl kaynak taraması. · ASYA-ZINCIR-1024"},
     {f:"1000-01-01",t:"1281-01-01",d:"kesmir",kesinlik:"yil",kaynak:"TDV kesmir: «Gazneli Mahmud 1015 ve 1021’de iki defa burayı zaptetme girişiminde bulunduysa da» TDV kesmir: «Keşmir’deki Hindu idaresine ilk öldürücü müslüman darbesi 1320’de Moğol-Çağatay kumandanı Zulcu tarafından vuruldu». BEYANLI YAKLAŞIKLIK: kaynak şehir adı (Srinagar) değil VADİ/BÖLGE (Keşmir) için konuşur; Srinagar vadinin merkezidir. Vadi 1000-1320 arası Hindu (Utpala-Lahora) idaresinde bağımsız kaldı; atlas künyesi kesmir (Şah Mîr, 1000 başlangıçlı) Hindu dönemi için ad/açıklama genişletmesi gerektirir. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},
     {f:"1281-01-01", t:"1586-10-01", d:"kesmir"},
     {f:"1586-10-01", t:"1752-01-01", d:"babur-imparatorlugu"},
     {f:"1752-01-01", t:"1819-07-05", d:"afgan-durrani"},
     {f:"1819-07-05", t:"1846-03-16", d:"sih-imparatorlugu"},
     {f:"1846-03-16", t:"1947-10-26", d:"cammu-kesmir"},
     {f:"1947-10-26",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Instrument of Accession, Hari Singh 1947-10-26 (SATP metni; Britannica); Hindistan-idaresindeki kesim"}] },

{ ad:"Cammû (Jammu)", tur:"sehir", lat:32.7340, lon:74.8690, g:0, k:2,kd:[{f:"1846-03-16",t:"1923-10-29",k:1,m:"Cammû (Jammu)"}], d:[],
  s:[{f:"1281-01-01", t:"1586-10-01", d:"kesmir"},
     {f:"1586-10-01", t:"1752-01-01", d:"babur-imparatorlugu"},
     {f:"1752-01-01", t:"1808-01-01", d:"afgan-durrani"},
     {f:"1808-01-01", t:"1846-03-16", d:"sih-imparatorlugu"},
     {f:"1846-03-16", t:"1947-10-26", d:"cammu-kesmir"},{f:"1947-10-26",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Instrument of Accession, Hari Singh 1947-10-26 (SATP metni; Britannica); Hindistan-idaresindeki kesim"}] },

// Leh (Ladakh) — Namgyal hânedanı; Tibet-Bhutan savaşı sonrası 1684 Tingmosgang
// antlaşmasıyla Tibet'e vergi verir hâle geldi ama krallık sürdü. 1834-1842
// Zorâver Singh'in seferleriyle Cammû'ya bağlandı; 1846'da Cammû-Keşmir'in
// parçası oldu. "ladak" ayrı kimliktir: Tibet kültür alanında ama Lhasa'nın
// devleti değildir.
{ ad:"Leh (Ladakh)", tur:"sehir", lat:34.1640, lon:77.5850, g:0, k:1,kd:[{f:"1281-01-01",t:"1834-01-01",k:1,m:"Leh (Ladakh)"}], d:[],
  s:[{f:"1281-01-01", t:"1834-01-01", d:"ladak"},
     {f:"1834-01-01", t:"1846-03-16", d:"sih-imparatorlugu"},
     {f:"1846-03-16", t:"1947-10-26", d:"cammu-kesmir"},{f:"1947-10-26",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Instrument of Accession, Hari Singh 1947-10-26 (SATP metni; Britannica); Hindistan-idaresindeki kesim"}] },

// SİND — "sind" kimliği Sûmra, Samma (1351-1524), Erguni-Tarhan (1524-1591),
// Kalhora (1701-1783) ve Talpur (1783-1843) hânedanlarının tamamını kapsar
// (TDV SİND). Beşi de aynı deltanın tek devletidir; ayrı ayrı boyanmaları
// haritaya bilgi katmaz. Bâbürlü aradaki 1592-1701 penceresidir. 17 Şubat
// 1843 Miyânî Muharebesi'nden sonra İngiliz ilhakı.
{ ad:"Tatta (Thatta)", tur:"sehir", lat:24.7470, lon:67.9240, g:1, k:1,kd:[{f:"1281-01-01",t:"1843-02-17",k:1,m:"Tatta (Thatta)"}], d:[],
  s:[{f:"1281-01-01", t:"1592-01-01", d:"sind"},
     {f:"1592-01-01", t:"1701-01-01", d:"babur-imparatorlugu"},
     {f:"1701-01-01", t:"1843-02-17", d:"sind"},
     {f:"1843-02-17", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"}] },

// Haydarâbâd (Sind) — Gulâm Şah Kalhora 1768'de kurdu (kur:). Dekken'deki
// Haydarâbâd ile karışmasın diye ad parantezlidir.
{ ad:"Haydarâbâd (Sind)", tur:"sehir", lat:25.3960, lon:68.3770, g:0, k:1,kd:[{f:"1768-01-01",t:"1843-02-17",k:1,m:"Haydarâbâd (Sind)"}], d:[],
  kur:"1768-01-01",
  s:[{f:"1768-01-01", t:"1843-02-17", d:"sind"},
     {f:"1843-02-17", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"}] },

// Karaçi — Kalhora idaresinde 1729'da balıkçı limanı olarak kuruldu (kur:);
// İngilizler 3 Şubat 1839'da işgal etti, Sind'in ilhakından dört yıl önce.
{ ad:"Karaçi", tur:"liman", lat:24.8610, lon:67.0100, g:1, k:3, d:[],
  kur:"1729-01-01",
  s:[{f:"1729-01-01", t:"1839-02-03", d:"sind"},
     {f:"1839-02-03", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"}] },

{ ad:"Şikârpûr", tur:"sehir", lat:27.9550, lon:68.6380, g:0, k:3, d:[],
  kur:"1617-01-01",
  s:[{f:"1617-01-01", t:"1701-01-01", d:"babur-imparatorlugu"},
     {f:"1701-01-01", t:"1843-02-17", d:"sind"},
     {f:"1843-02-17", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"}] },

// Bahâvelpûr — 1748'de Abbâsî nevâblarının kurduğu prens devleti (kur:);
// 1833'ten itibaren İngiliz himayesinde ama tahtı 1955'e kadar sürdü, bu
// yüzden "sind" değil kendi kimliğiyle bırakıldı.
{ ad:"Bahâvelpûr", tur:"sehir", lat:29.3950, lon:71.6840, g:0, k:2,kd:[{f:"1748-01-01",t:"1923-10-29",k:1,m:"Bahâvelpûr"}], d:[],
  kur:"1748-01-01",
  s:[{f:"1748-01-01", t:"1955-10-14", d:"bahavelpur"},{f:"1955-10-14",t:"2000-12-31",d:"pakistan",kaynak:"Britannica Pakistan"}] },

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
{ ad:"Ecmîr (Ajmer)", tur:"sehir", lat:26.4500, lon:74.6390, g:1, k:3, d:[],
  s:[{f:"0682-01-01",t:"1192-01-01",d:"cahamana",kesinlik:"yil",kaynak:"«Ecmîr», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/ecmir (22.10.2026'da okundu), «Ecmîr»: \"yönetici prensin 682 yılında Lahor racasıyla akrabalık tesis ettiğini\" | «Ecmîr», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/ecmir (22.10.2026'da okundu), «Ecmîr»: \"Racpûtlar’ın Cauhan kabilesinin dinî ve siyasî merkezi olarak kurulmuştur (II. yüzyıl)\" | «Ecmîr», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/ecmir (22.10.2026'da okundu), «Ecmîr»: \"Şehir 1192’de Muhammed Gūrî tarafından fethedilerek İslâm hâkimiyeti altına alındı.\" | BEYANLI YAKLAŞIKLIK: f=0682 TDV'nin şehir için verdiği ilk TARİHLİ bilgidir (Târîḫ-i Firişte kaydı), kuruluş değil; TDV 987 ve 1008'de prensin Hindu birliklerine yardımını ve Gazneli Mahmud'un 1024'te şehri yağmalamasını da anar. ÇELİŞKİ: Majumdar V Ajayameru'yu Ajayaraja'nın kurduğunu söyler (Arnoraja 1133'ten önce tahtta, yani 12. yy başı); TDV (esas) şehrin II. yüzyılda kurulduğunu söyler. `cahamana` künyesi f=1000 'kuşak ucu' → f≤0682 genişletme önerisi. · DOGU-500-1281"},{f:"1192-01-01",d:"gurlu",kaynak:"TDV ecmir: 'Şehir 1192’de Muhammed Gūrî tarafından fethedilerek İslâm hâkimiyeti altına alındı.' · fetihten sonra yönetime sultana bağlı Hindu raca getirildi (tâbi, `v:` önerilmedi) · ZAMAN-Z6-1008",t:"1206-01-01",kesinlik:"yil"},{f:"1206-01-01",t:"1365-01-01",d:"delhi-sultanligi",kaynak:"f 1281-01-01'den geri çekildi — TDV ecmir: 'Önceleri yöneticiliğe sultana bağlı kalmak şartıyla son racanın oğlu getirildiyse de bu Hindu hânedanın sık sık isyana kalkışması yüzünden Delhi Sultanlığı’nın kurucusu Kutbüddin Aybeg (1206-1210) tarafından yönetim onlardan alınarak kumandan Seyyid Hüseyin’e (ö.' · Aybeg'in saltanatı 1206'da başlar; künye günü ile aynı — saltanat aralığının başı, kesin gün değil · ZAMAN-Z6-1008"},{f:"1365-01-01",t:"1559-01-01",d:"racput"},{f:"1559-01-01",t:"1756-01-01",d:"babur-imparatorlugu"},{f:"1756-01-01",t:"1818-06-25",d:"maratha"},{f:"1818-06-25",t:"1947-08-15",d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Çitor (Chittorgarh) — Mevar'ın kalesi ve Hint tarihinin üç büyük
// kuşatmasının sahnesi: Alâeddin Halacî 26 Ağustos 1303, Gucerât sultanı
// Bahadır Şah 8 Mart 1535, Ekber 23 Şubat 1568. 1615 Şubat'ında Cihângîr
// ile Rana Amar Singh anlaştı ve Mevar toprakları iade edildi.
{ ad:"Çitor (Chittorgarh)", tur:"kale", lat:24.8790, lon:74.6290, g:1, k:1,kd:[{f:"1281-01-01",t:"1923-10-29",k:1,m:"Çitor (Chittorgarh)"}], d:[],
  s:[{f:"1281-01-01", t:"1303-08-26", d:"racput"},{f:"1303-08-26", t:"1311-01-01", d:"delhi-sultanligi"},{f:"1311-01-01", t:"1535-03-08", d:"racput"},{f:"1535-03-08", t:"1537-01-01", d:"gucerat-sultanligi"},{f:"1537-01-01", t:"1568-02-23", d:"racput"},{f:"1568-02-23", t:"1615-02-05", d:"babur-imparatorlugu"},{f:"1615-02-05", t:"1948-04-18", d:"racput"},{f:"1948-04-18",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica 'Indian Independence Act 1947' ve 'Rajasthan' (Rajput devletleri 1947-48'de Hindistan'a katıldı, 1949 Rajasthan); Library of Congress Country Studies: India"}] },

// Udeypûr — Rana Udai Singh 1559'da Çitor'un yerine kurdu (kur:). Mevar
// Bâbürlü'ye 1615'te bağlandı ama başkent hiç Bâbürlü eline geçmedi.
{ ad:"Udeypûr (Udaipur)", tur:"sehir", lat:24.5850, lon:73.7120, g:1, k:1,kd:[{f:"1559-01-01",t:"1923-10-29",k:1,m:"Udeypûr (Udaipur)"}], d:[],
  kur:"1559-01-01",
  s:[{f:"1559-01-01", t:"1948-04-18", d:"racput"},{f:"1948-04-18",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica 'Indian Independence Act 1947' ve 'Rajasthan' (Rajput devletleri 1947-48'de Hindistan'a katıldı, 1949 Rajasthan); Library of Congress Country Studies: India"}] },

// Codhpûr — Rao Codha 1459'da kurdu (kur:). 1679-1707 arası Evrengzîb'in
// doğrudan idaresi altında kaldı (Mârvâr veraset savaşı).
{ ad:"Codhpûr (Jodhpur)", tur:"sehir", lat:26.2880, lon:73.0190, g:1, k:1,kd:[{f:"1459-01-01",t:"1923-10-29",k:1,m:"Codhpûr (Jodhpur)"}], d:[],
  kur:"1459-01-01",
  s:[{f:"1459-01-01", t:"1679-01-01", d:"racput"},
     {f:"1679-01-01", t:"1707-03-03", d:"babur-imparatorlugu"},
     {f:"1707-03-03", t:"1947-08-15", d:"racput"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica 'Indian Independence Act 1947' ve 'Rajasthan' (Rajput devletleri 1947-48'de Hindistan'a katıldı, 1949 Rajasthan); Library of Congress Country Studies: India"}] },

// Caypûr — Sevâî Cay Singh 1727'de kurdu (kur:). Öncesinde hânedanın
// merkezi 9 km kuzeydoğudaki Amber'dir; Amber ayrı nokta olarak EKLENMEDİ
// (3 km kuralını geçiyor ama aynı peteği paylaşıyorlar).
{ ad:"Caypûr (Jaipur)", tur:"sehir", lat:26.9120, lon:75.7870, g:1, k:1,kd:[{f:"1727-01-01",t:"1923-10-29",k:1,m:"Caypûr (Jaipur)"}], d:[],
  kur:"1727-01-01",
  s:[{f:"1727-01-01", t:"1947-08-15", d:"racput"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica 'Indian Independence Act 1947' ve 'Rajasthan' (Rajput devletleri 1947-48'de Hindistan'a katıldı, 1949 Rajasthan); Library of Congress Country Studies: India"}] },

{ ad:"Caysalmer", tur:"kale", lat:26.9150, lon:70.9120, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1947-08-15", d:"racput"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica 'Indian Independence Act 1947' ve 'Rajasthan' (Rajput devletleri 1947-48'de Hindistan'a katıldı, 1949 Rajasthan); Library of Congress Country Studies: India"}] },

// Bikaner — Rao Bika 1488'de kurdu (kur:).
{ ad:"Bikaner", tur:"sehir", lat:28.0220, lon:73.3120, g:0, k:3, d:[],
  kur:"1488-01-01",
  s:[{f:"1488-01-01", t:"1947-08-15", d:"racput"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica 'Indian Independence Act 1947' ve 'Rajasthan' (Rajput devletleri 1947-48'de Hindistan'a katıldı, 1949 Rajasthan); Library of Congress Country Studies: India"}] },

// Bharatpûr — Câtların devleti; Sûrac Mal 1733'te kaleyi kurdu (kur:).
// Racput değildir, ayrı kimlik: 1761-1774 arasında Agra kalesini de tuttu.
{ ad:"Bharatpûr", tur:"kale", lat:27.2170, lon:77.4900, g:0, k:2,kd:[{f:"1733-01-01",t:"1923-10-29",k:1,m:"Bharatpûr"}], d:[],
  kur:"1733-01-01",
  s:[{f:"1733-01-01", t:"1948-03-18", d:"bharatpur-cat"},{f:"1948-03-18",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica India"}] },

// ===== 1e. Gucerât, Mâlvâ ve Orta Hindistan =====
//
// GUCERÂT: Vâghela racput hânedanı 1304'e kadar; Delhi Sultanlığı 1304-1407;
// Muzaffer Şah'ın 1407'de bağımsızlık ilânıyla Gucerât Sultanlığı; Ekber
// 1572 Kasım'ında Ahmedâbâd'ı, 1573 Şubat'ında Sûrat'ı aldı (TDV GUCERÂT).
// Maratha 1753'te Ahmedâbâd'a girdi; 1818'de İngiliz.

// Ahmedâbâd — Ahmed Şah 26 Şubat 1411'de kurdu (kur:); Gucerât
// Sultanlığı'nın başkenti.
{ ad:"Ahmedâbâd", tur:"sehir", lat:23.0230, lon:72.5710, g:1, k:2,kd:[{f:"1411-02-26",t:"1573-01-01",k:1,m:"Ahmedâbâd"}], d:[],
  kur:"1411-02-26",
  s:[{f:"1411-02-26", t:"1572-11-18", d:"gucerat-sultanligi"},
     {f:"1572-11-18", t:"1753-04-01", d:"babur-imparatorlugu"},
     {f:"1753-04-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Sûrat — Hint Okyanusu'nun en büyük Müslüman limanı ve Mekke yolunun
// çıkış kapısı; Osmanlı ile temasın olduğu tek Hint şehridir (1538 Diu
// kuşatmasında Süleyman Paşa donanması buradaydı). Şivâcî 1664 ve 1670'te
// iki kez yağmaladı ama şehri elde tutmadı — pencere AÇILMADI. İngiliz
// fabrikası 1612'de kuruldu, şehir idaresi 1759'da İngiliz'e geçti.
{ ad:"Sûrat", tur:"liman", lat:21.1700, lon:72.8310, g:2, k:3, d:[],
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1573-02-26", d:"gucerat-sultanligi"},
     {f:"1573-02-26", t:"1759-03-04", d:"babur-imparatorlugu"},
     {f:"1759-03-04", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Kanbâyet (Cambay/Khambhat) — Gucerât'ın ortaçağdaki asıl limanı; körfezin
// dolmasıyla yerini Sûrat'a bıraktı. 1780'den sonra Bâbürlü nevâbının
// prens devleti olarak kaldı.
{ ad:"Kanbâyet (Khambhat)", tur:"liman", lat:22.3170, lon:72.6200, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1573-02-26", d:"gucerat-sultanligi"},
     {f:"1573-02-26", t:"1753-04-01", d:"babur-imparatorlugu"},
     {f:"1753-04-01", t:"1803-12-30", d:"maratha"},
     {f:"1803-12-30", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Diu — 1509 Diu deniz savaşı ve 1538 Osmanlı-Gucerât kuşatmasının sahnesi.
// Portekiz 1535'te kaleyi kurdu ve 1961'e kadar elinde tuttu; bu dosyadaki
// en uzun kesintisiz Avrupa penceresidir.
{ ad:"Diu", tur:"liman", lat:20.7140, lon:70.9850, g:1, k:2,kd:[{f:"1510-01-01",t:"1537-02-13",k:1,m:"Diu"}], d:[],
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1535-10-25", d:"gucerat-sultanligi"},
     {f:"1535-10-25", t:"1923-10-29", d:"portekiz"},{f:"1923-10-29",t:"1961-12-19",d:"portekiz-hindistani-goa",kaynak:"Hindistan'in Goa/Daman/Diu ilhaki 19 Aralik 1961 (Britannica Goa)"},{f:"1961-12-19",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica Goa"}] },

// Cûnâgadh — Girnar eteğindeki racput kalesi; 1472'de Gucerât sultanı
// Mahmud Begada aldı, 1748'de Bâbürlü nevâbı bağımsızlaşarak prens devleti
// kurdu ve hânedan 1948'e kadar sürdü.
{ ad:"Cûnâgadh", tur:"kale", lat:21.5220, lon:70.4570, g:0, k:2,kd:[{f:"1748-01-01",t:"1923-10-29",k:1,m:"Cûnâgadh"}], d:[],
  s:[{f:"1281-01-01", t:"1472-01-01", d:"racput"},
     {f:"1472-01-01", t:"1573-02-26", d:"gucerat-sultanligi"},
     {f:"1573-02-26", t:"1748-01-01", d:"babur-imparatorlugu"},
     {f:"1748-01-01", t:"1947-11-09", d:"cunagadh"},{f:"1947-11-09",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica Junagadh"}] },

// Bhuc (Kutch) — Câdeja racput hânedanı; 1549'da kuruldu, 1819'da İngiliz
// himayesine girdi ama taht sürdü.
{ ad:"Bhuc (Kutch)", tur:"sehir", lat:23.2420, lon:69.6670, g:0, k:3, d:[],
  kur:"1510-01-01",
  s:[{f:"1510-01-01", t:"1947-08-15", d:"racput"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica 'Indian Independence Act 1947' ve 'Rajasthan' (Rajput devletleri 1947-48'de Hindistan'a katıldı, 1949 Rajasthan); Library of Congress Country Studies: India"}] },

// Patan (Anhilvâda) — Vâghela başkenti; 1304'te Delhi'ye, 1411'de
// Ahmedâbâd'ın kurulmasıyla ikinci sıraya düştü.
{ ad:"Patan (Anhilvâda)", tur:"sehir", lat:23.8500, lon:72.1260, g:0, k:3, d:[],
  s:[{f:"0942-01-01",t:"1243-01-01",d:"caulukya",kesinlik:"yil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Central and Western India: The Chapas»: \"Mularaja served his maternal uncle as a general for some time and then usurped his throne after putting him to death in A.D. 942\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «The Chaulukyas of Gujarat»: \"was ruling in Anahillapataka in A.D 1242\" | BEYANLI YAKLAŞIKLIK: f=942 Mularaja'nın Çapa kralını devirdiği yıl (Gucerat kronikçilerinin hikâyesi 'kuşkulu' olsa da Çapa hanedanına son verdiği 'kuşkusuz'); t=1243 Cain geleneğine göre Visala'nın kral oluşu (aşağıdaki Vaghela dilimi). `caulukya` künyesi f=1000 'kuşak ucu' → f≤0942 genişletme önerisi. · DOGU-500-1281"},{f:"1243-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip vaghela (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"vaghela\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «The Chaulukyas of Gujarat»: \"testimony of the Jain literature, according to which Virama never occupied the throne and his brother Visala became king in A.D. 1243\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «The Chaulukyas of Gujarat»: \"was succeeded by the latter in AD. 1274\" | BEYANLI YAKLAŞIKLIK: Tribhuvanapala 1242'de Anahilapataka'da hüküm sürdü, Visala'nın tahtı alışı '1251'den önce' — devir günü yok; Sarangadeva yazıtları Anahilapataka'nın krallığında olduğunu gösterir (1274). Mevcut zincir 1281'de `racput` der (atlas); Majumdar'a göre Vaghela 1299'a dek Gucerat'ın sahibidir → atlas Patan 1281-1304 düzeltmesi önerilir: vaghela 1281→1299, delhi-sultanligi 1299→. · DOGU-500-1281"},{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1572-11-18", d:"gucerat-sultanligi"},
     {f:"1572-11-18", t:"1753-04-01", d:"babur-imparatorlugu"},
     {f:"1753-04-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Çampâner — Gucerât sultanı Mahmud Begada 1484'te aldı ve 1535'e kadar
// başkent yaptı; Hümâyûn'un 1535 seferinden sonra terk edildi ve bir daha
// toparlanamadı. bit: YAZILMADI çünkü şehir bütünüyle yok olmadı, küçüldü.
{ ad:"Çampâner", tur:"kale", lat:22.4860, lon:73.5370, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1484-01-01", d:"delhi-sultanligi"},
     {f:"1484-01-01", t:"1573-02-26", d:"gucerat-sultanligi"},
     {f:"1573-02-26", t:"1753-04-01", d:"babur-imparatorlugu"},
     {f:"1753-04-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

{ ad:"Broaç (Bharuch)", tur:"liman", lat:21.7153, lon:72.9950, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1304-01-01", d:"racput"},
     {f:"1304-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1573-02-26", d:"gucerat-sultanligi"},
     {f:"1573-02-26", t:"1772-11-18", d:"babur-imparatorlugu"},
     {f:"1772-11-18", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// MÂLVÂ: Delhi 1305'te aldı; Dilâver Han 1392'de bağımsızlığını ilân etti
// (TDV MÂLVÂ). Gucerât 1531-1535 arasında işgal etti. Bâz Bahadır'ın
// yenilgisiyle 29 Mart 1561'de Bâbürlü'ye geçti. 1732'den sonra Maratha.

// Mandu (Mândû) — Mâlvâ Sultanlığı'nın başkenti.
{ ad:"Mandu (Mândû)", tur:"kale", lat:22.3360, lon:75.4030, g:1, k:2,kd:[{f:"1392-01-01",t:"1562-01-01",k:1,m:"Mandu (Mândû)"}], d:[],
  s:[{f:"1281-01-01", t:"1305-01-01", d:"racput"},
     {f:"1305-01-01", t:"1392-01-01", d:"delhi-sultanligi"},
     {f:"1392-01-01", t:"1531-01-01", d:"malva-sultanligi"},
     {f:"1531-01-01", t:"1535-01-01", d:"gucerat-sultanligi"},
     {f:"1535-01-01", t:"1561-03-29", d:"malva-sultanligi"},
     {f:"1561-03-29", t:"1732-01-01", d:"babur-imparatorlugu"},
     {f:"1732-01-01", t:"1818-06-03", d:"maratha"},{f:"1818-06-03",t:"1947-08-15",d:"ingiliz-hindistani",kaynak:"Britannica Dhar (Puar hânedanı Maratha konfederasyonu içinde; konfederasyon 1818-06-03'te bitti, Dhar İngiliz himayesinde yerli devlet). GUNEY-ASYA-DENETIM-1027: eski 'maratha → 1923-10-29' bitişi veri ufku yer tutucusuydu, künye (maratha t=1818-06-03) dışına taşıyordu"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica India"}] },

{ ad:"Uccayn (Ujjain)", tur:"sehir", lat:23.1790, lon:75.7850, g:0, k:3, d:[],
  s:[
     {f:"0140-01-01",t:"0398-01-01",d:"sakalar-bati-satraplar",kesinlik:{f:"onyil",t:"yil"},kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. II: The Age of Imperial Unity, Bharatiya Vidya Bhavan, Bombay (archive.org: ageofimperialuni07bhar, tam metin okundu), s. 183: Ptolemy (c. A.D. 140): «Ozene, i.e. Ujjayini, capital of Avanti (west Malwa), is mentioned as the headquarters of Tiastenes, undoubtedly a Greek corruption of the name Chashtana» · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay (archive.org: classicalage03bhar, tam metin okundu), s. 46: Batı Satraplar (Malwa, Gucerat, Kathiawar) Chashtana ailesince «for nearly two hundred years» yönetildi; s. 49: Rudrasimha III'ün son sikkesi «31X» yılı (MS 388-398 arası), Chandragupta II son «Saka» hükümdarını ortadan kaldırdı («the last of a long line of Saka chiefs») | BEYANLI YAKLAŞIKLIK: dönem başı Ptolemy'nin tanığıdır (c. 140), Ujjain'in Batı Satrapların başkenti oluşunun başlangıcı değil (künye f=35 korundu); dönem sonu Rudrasimha III'ün SON TANIKLI sikke yılıdır (398), Chandragupta II fethinin kesin günü kaynakta yoktur. Ujjain'in Saka elinde sürekli kalıp kalmadığı (Kardamaka ailesi, kesintiler s. 46-49) yıl yıl izlenmedi. · ASYA-ZINCIR-1024 (W2c)"},
     {f:"0398-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: 0398-01-01–1281-01-01 arası sahip YAZILMADI: önceki dilim (sakalar-bati-satraplar) kaynaklı olarak 0398-01-01'te biter, sonraki dilim (racput) 1281-01-01'te başlar; aradaki dilim için bu pakette (ASYA-ZINCIR-1024) kaynak okunmadı/bulunamadı. Boşluk komşuya İTİLMEDİ (VERI-YAPISI __BOSLUK__ kuralı); BORÇ: bu dilim için TDV ve ardıl kaynak taraması. · ASYA-ZINCIR-1024"},
     {f:"1281-01-01", t:"1305-01-01", d:"racput"},
     {f:"1305-01-01", t:"1392-01-01", d:"delhi-sultanligi"},
     {f:"1392-01-01", t:"1561-03-29", d:"malva-sultanligi"},
     {f:"1561-03-29", t:"1732-01-01", d:"babur-imparatorlugu"},
     {f:"1732-01-01", t:"1818-06-03", d:"maratha"},
     {f:"1818-06-03", t:"1948-05-28", d:"gvalyar"},
     {f:"1948-05-28",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Gvalyar 1948 Madhya Bharat'a katildi (Britannica Gwalior)"}] },

// İndor — Holkar hânedanının merkezi; Malhar Rao Holkar 1733'ten itibaren
// buradan yönetti, şehir 1715 civarında pazar yeri olarak kuruldu.
// Kesin gün bilinmediği için kur: YYYY-01-01 yazıldı.
{ ad:"İndor (Indore)", tur:"sehir", lat:22.7200, lon:75.8580, g:0, k:3, d:[],
  kur:"1715-01-01",
  s:[{f:"1715-01-01", t:"1732-07-29", d:"babur-imparatorlugu"},
     {f:"1732-07-29", t:"1948-05-28", d:"indor"},{f:"1948-05-28",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica India"}] },
  // 🔴 KITA 5 (12 Eylül) — "maratha" → "indor" (Holkar Hanedanı). Künyenin
  // KENDİ f:'i (1732-07-29) zaten İNDOR'un kendisiyle ilgili: 1720'de pargana
  // merkezi Kampel'den Indore'ye taşındı, 29 Temmuz 1732'de Malhar Rao Holkar
  // Bacırav Peşva tarafından "İndor'un ilk hükümdarı" ilan edildi (standart
  // akademik kaynak, iki bağımsız kaynak — Britannica 'Holkar dynasty' +
  // Wikipedia 'Indore State'/'Malhar Rao Holkar' birbirini doğruladı). Bu
  // yüzden "maratha" (genel konfederasyon) ARA DÖNEMİ hiç yoktu — Holkar
  // hânedanı İndor'u DOĞRUDAN Babürlü'den aldı. Önceki f: (1732-01-01) yıl
  // doğru ama gün YOKTU; 07-29 ile hem hassasiyet hem kimlik düzeltildi.

// Gvalyar — Hindistan'ın en güçlü kalelerinden; Tomar racputları 1398-1518,
// Delhi 1518-1526, Bâbürlü, 1784'ten sonra Şinde (Maratha) hânedanının
// merkezi ve 1948'e kadar prens devleti.
{ ad:"Gvalyar (Gwalior)", tur:"kale", lat:26.2180, lon:78.1830, g:1, k:4, d:[],
  s:[{f:"0500-01-01",t:"0540-01-01",d:"alkhon",kesinlik:"onyil",kaynak:"SAHİP alkhon: DOGU-500-1281 BOŞLUK BEYANI geri yazıldı (ZINCIR-ORTA, 24 Ekim 2026; boya durumu denetim/ILERLEME-BOYA-BEKLEYEN-ORTA.tsv) — dayanak aşağıdadır · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «The Hunas»: «An inscription dated in the fifteenth year of his reign (c. A.D. 530) shows that his sovereignty extended at least up to Gwalior» | BEYANLI YAKLAŞIKLIK: f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı); Gwalior'a özgü c.530 öncesi tanık yok, Alkhon künyesi (0500-0540) Mihirakula'nın bu yazıtına dayanır; t=540 Alkhon künye t (onyil). · DOGU-500-1281"},{f:"0540-01-01",t:"0815-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Gwalior'un 540-815 arası sahibi. | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu), «Harsha and his time»: «In Central India there were three states in Bundelkhand, Gwalior, and Ujjain (E. Malava) ruled over by Brahmana kings.» (Xuanzang, 630-644: devlet adı/hanedanı/hükümdarı verilmiyor; Harşa'ya bağlılığı M3'e göre yalnız «assume» düzeyinde) | Komşu devlet sahipliği (Harşa, Yaşovarman, Karkota) Gwalior için kanıtlanamadı; atlasta bu Brahmana devleti için künye yok. · DOGU-500-1281"},{f:"0815-01-01",t:"0977-01-01",d:"gurjara-pratihara",kesinlik:"onyil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu), «Rise and fall of the Pratihara empire»: «In the east his sway extended up to Gwalior» (Nagabhata II, Kanauj'un ~815'te başkent oluşu çağı) · «Gwalior, which was a stronghold of the Pratiharas ever since the time of Ramabhadra, if not earlier still, fell into the hands of the Chandellas. A few years later the Kachchhapaghata chief Vajradaman conquered it after defeating the Pratihara Emperor.» | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Kachchhapaghatas»: «Gwalior was under the sway of the Chandella Dhanga, a feudatory of the Pratihara Vinayakapala of Kanauj, in the third quarter of the tenth century A.D.» | BEYANLI YAKLAŞIKLIK: f=815 Nagabhata II dönemi (onyil; M4 başka yerde yalnız «his sway extended up to Gwalior» der, yıl vermez; Ramabhadra'dan beri «stronghold»). Çelişki: M4 Chandella Dhanga'yı Gwalior'u «ele geçiren», M5 Pratihara'nın vasalı sayar; Gwalior'a özgü ayrı Chandella künyesi/tarihi yok, Pratihara üstünlüğü altında bırakıldı. t=977 Vajradaman'ın en geç tarihi (aşağıdaki dilim). · DOGU-500-1281"},{f:"0977-01-01",t:"1196-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip kachchhapaghata-gwalior (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"kachchhapaghata-gwalior\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Kachchhapaghatas»: \"In or before A.D. 977 Maharajadhiraja Vajradaman, son of Lakshmana, established his supremacy over Gwalior\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Kachchhapaghatas»: \"In A.D. 1196 the Muslims conquered Gwalior after repeated assaults extending over a year\" | f=977 \"in or before\" (üst sınır); 1021 Gazneli Mahmud saldırısı sahibi değiştirmedi. · DOGU-500-1281"},{f:"1196-01-01",t:"1206-01-01",d:"gurlu",kesinlik:"yil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Kachchhapaghatas»: \"In A.D. 1196 the Muslims conquered Gwalior after repeated assaults extending over a year\" · DOGU-500-1281"},{f:"1206-01-01",t:"1210-01-01",d:"delhi-sultanligi",kesinlik:"yil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Foreword»: \"established the Turkish Sultanate of India at Lahore. It was transferred later to Delhi\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Kachchhapaghatas»: \"During the weak rule of Aram Shah (A.D. 1210-11), son of Qutb-ud-din, the Pratihara chief Vigraha established the supremacy of his family in Gwalior by defeating the Muslims\" | t=1210: Aram Şah devrinde (1210-11) Pratihara reisi Vigraha Gwalior'u aldı. · DOGU-500-1281"},{f:"1210-01-01",t:"1231-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip parihara-gwalior (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"parihara-gwalior\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Kachchhapaghatas»: «During the weak rule of Aram Shah (A.D. 1210-11), son of Qutb-ud-din, the Pratihara chief Vigraha established the supremacy of his family in Gwalior by defeating the Muslims. His son and successor Malayavarman, who is known to have been ruling in A.D. 1220» | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Mamluk Sultans of Delhi»: «the Pratlharas, commonly known as Pariharas, reoccupied Gwalior» | TDV İslâm Ansiklopedisi, «İltutmış», https://islamansiklopedisi.org.tr/iltutmis (22.10.2026'da okundu): «Kutbüddin Aybeg’in ölümüyle Hindular’ın tekrar ele geçirdiği Gevâliyâr’ı geri aldı (629/1231)» (Aybeg'in ölümü 1210: TDV) | Parihara (Pratihâra) Gwalior kolu atlasta künyesiz → kunye_yeni.js `parihara-gwalior` önerisi (boya gerekli). f=1210-01-01 yıl hassasiyeti (Aram Şah 1210-11; gün yok). · DOGU-500-1281"},{f:"1231-01-01",t:"1236-01-01",d:"delhi-sultanligi",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «İltutmış», https://islamansiklopedisi.org.tr/iltutmis (22.10.2026'da okundu): «Kutbüddin Aybeg’in ölümüyle Hindular’ın tekrar ele geçirdiği Gevâliyâr’ı geri aldı (629/1231), arkasından da Mâlvâ’yı ve Bhilsa (Bilsan) Kalesi’ni zaptetti (632/1234).» | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «Northern India during 11th and 12th centuries»: «Iltutmish conquered Gwalior by defeating Dewbul (Devavarma?), probably the successor of Malayavarman.» | ÇELİŞKİ/HASSASİYET (ic_not): TDV 629 H = 1231; 629 H Ekim 1231-Ekim 1232'dir, gün yok → yıl hassasiyetiyle 1231-01-01; M5 fetih yılı vermez. t=1236 aşağıda. · DOGU-500-1281"},{f:"1236-01-01",t:"1258-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip parihara-gwalior (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"parihara-gwalior\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Kachchhapaghatas» (Rukn-ud-din, İltutmış'ın oğlu, döneminde olasılıkla): «that Gwalior was reconquered by Nrivarman (Naravarman), brother of Malayavarman, who is known to have been ruling in A.D. 1247» | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Struggle for Empire — Delhi and the Hindu states»: «Raziyya was obliged to abandon the fortress» | ÇELİŞKİ (ic_not): kaynak geri alış için Rükneddin (1236) ve Radiyye (1236-40) dönemlerini birlikte verir; yıl 1236 alındı (iki ihtimalin ilkinin yılı). Tek tanıklı yıl: «ruling in A.D. 1247». M5 Gwalior üzerindeki Chandella/Jajapella üstünlük iddialarını (1263 yazıtı) ayrıca anar; Gwalior'a özgü sahiplik değişimi yazılmadı. · DOGU-500-1281"},{f:"1258-01-01",t:"1281-01-01",d:"delhi-sultanligi",kesinlik:"yil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Kachchhapaghatas»: «Balban conquered Gwalior in A.D. 1258 and placed Malik Nusrat-ud-din in charge of it.» | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu), «The Mamluk Sultans of Delhi»: «in A.D. 1258, Balban transferred Sher Khan to the interior provinces of Kol and Gwalior from the frontier area of Bhatinda» | ÇELİŞKİ (ic_not): M5 başka yerde Balban'ın 1251 seferinin «temporary capture of Narwar and Gwalior» ile sonuçlandığını ve Jajapella kayıtlarında bu yerlerin 1298'e dek «uninterruptedly» anıldığını söyler; 1258 Delhi valiliği (Sher Khan'ın Gwalior'a atanması) iki ayrı yerde teyitli olduğu için alındı. 1281 mevcut zincir başı delhi-sultanligi. · DOGU-500-1281"},{f:"1281-01-01", t:"1398-01-01", d:"delhi-sultanligi"},
     {f:"1398-01-01", t:"1518-01-01", d:"racput"},
     {f:"1518-01-01", t:"1526-04-21", d:"delhi-sultanligi"},
     {f:"1526-04-21", t:"1540-05-17", d:"babur-imparatorlugu"},
     {f:"1540-05-17", t:"1555-07-23", d:"sur-hanedani"},
     {f:"1555-07-23", t:"1783-07-21", d:"babur-imparatorlugu"},
     {f:"1783-07-21", t:"1948-05-28", d:"gvalyar"},{f:"1948-05-28",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Gvalyar 1948 Madhya Bharat'a katildi (Britannica Gwalior)"}] },
  // 🔴 KITA 5 (12 Eylül) — "maratha" → "gvalyar" (Sindiya Hanedanı), ve
  // KITA 8'in ÜÇ ADAY (künye 1731 · veri 1784 · TDV 1761) sorusuna CEVAP:
  // ÜÇÜ DE FARKLI SORUYU cevaplıyordu. 1731 Ranoji Sindiya'nın hânedanı
  // KURDUĞU gün — ama başkenti UJJAIN'di, GWALIOR DEĞİL (D093: "adıyla
  // anıyor" ≠ "tarihliyor"). Gwalior KALESİNİN KENDİSİ ancak Ranoji'nin oğlu
  // Mahadji Scindia tarafından, 18 Şubat 1783'te başlayan ~5 aylık kuşatma
  // sonunda, 21 Temmuz 1783'te Rana Chatra Singh'ten alındı (iki bağımsız
  // kaynak — Wikipedia "Maratha Conquest of Gwalior and Gohad" + "Battle of
  // Gwalior" birbirini doğruladı). Bu, TAM OLARAK BU YERLEŞİM NOKTASININ
  // sorduğu soru. Eski f: (1784-01-01) bu olayın YIL-YUVARLAK hâliydi;
  // 1783-07-21 ile hem gün hem doğru kimlik (gvalyar, "maratha" değil)
  // kazandı — Babürlü'den DOĞRUDAN Sindiya'ya geçti, ara "maratha" dönemi
  // hiç yaşanmadı.

// Bhopâl — Afgan asıllı Dost Muhammed Han 1707'den sonra kurdu; 1818'de
// İngiliz himayesine giren prens devleti, hânedan 1949'a kadar sürdü.
{ ad:"Bhopâl", tur:"sehir", lat:23.2590, lon:77.4130, g:0, k:1,kd:[{f:"1708-01-01",t:"1923-10-29",k:1,m:"Bhopâl"}], d:[],
  kur:"1707-01-01",
  s:[{f:"1707-01-01", t:"1949-06-01", d:"bhopal"},{f:"1949-06-01",t:"1956-11-01",d:"bhopal-eyaleti-1949",kaynak:"tsv künye bhopal-eyaleti-1949"},{f:"1956-11-01",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica (ilgili devlet/ülke maddesi)"}] },

// Nagpûr — Bhonsle Maratha hânedanının merkezi; Gond krallığından 1743'te
// alındı, 1853'te "lapse" doktriniyle ilhak edildi.
{ ad:"Nagpûr", tur:"sehir", lat:21.1460, lon:79.0880, g:1, k:3, d:[],
  kur:"1702-01-01",
  s:[{f:"1702-01-01", t:"1743-01-01", d:"gond-kralliklari"},
     {f:"1743-01-01", t:"1818-06-03", d:"maratha"},
     {f:"1818-06-03", t:"1853-12-11", d:"nagpur-bhonsle", kaynak:"IGI c.21 s.51: 1818-1830 İngiliz Resident idaresi, 1830-1853 Maratha subahları; Britannica 'Nagpur (Indian dynasty)': British clients 1818-1853. maratha künyesi 1818-06-03'te biter, nagpur-bhonsle künyesi 1853-12-11'e dek (GUNEY-ASYA-DENETIM-1027)"},
     {f:"1853-12-11", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Cabalpûr — Gond Garha-Mandla krallığı; Ekber 1564'te vergiye bağladı ama
// hânedan sürdü. 1781'de Maratha, 1818'de İngiliz.
// HAYALET-KUNYE-1008-K · `gond-kralliklari` künyesi 1301-01-01'de başlıyor (kesinlik yuzyil); 1281→1301-01-01 dilimi → `__BOSLUK__`.
//   __BOSLUK__ = künyesi olmayan yerel yapı (Raipur emsali), 'kimsenin değil' DEĞİL; komşuya İTİLMEDİ.
{ ad:"Cabalpûr (Jabalpur)", tur:"sehir", lat:23.1810, lon:79.9870, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1301-01-01", d:"__BOSLUK__"},
     {f:"1301-01-01", t:"1781-01-01", d:"gond-kralliklari"},
     {f:"1781-01-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

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
{ ad:"Patna (Azîmâbâd)", tur:"sehir", lat:25.5940, lon:85.1380, g:1, k:1,kd:[{f:"1541-01-01",t:"1923-10-29",k:1,m:"Patna (Azîmâbâd)"}], d:[],
  s:[
     {f:"-0363-01-01",t:"-0323-01-01",d:"nanda",kesinlik:{f:"onyil",t:"onyil"},kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. II: The Age of Imperial Unity, Bharatiya Vidya Bhavan, Bombay (archive.org: ageofimperialuni07bhar, tam metin okundu), s. 37: «We may thus put the Nanda kings as ruling from 364 to 324 B.C.»; s. 33: son Nanda kralı için Yunan yazarlar «with his capital at Pataliputra» der (Patna = Pataliputra). BEYANLI YAKLAŞIKLIK: Puranalar ve Seylan vakayinameleri Nanda süresini 22-100 yıl arasında verir; Majumdar 40 yılı benimser. · ASYA-ZINCIR-1024"},
     {f:"-0323-01-01",t:"-0186-01-01",d:"maurya",kesinlik:{f:"onyil",t:"onyil"},kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. II: The Age of Imperial Unity, Bharatiya Vidya Bhavan, Bombay (archive.org: ageofimperialuni07bhar, tam metin okundu), ss. 59-60: Chandragupta'nın tahta çıkışı «may be provisionally fixed at 324 B.C.»; s. 67: «The capital of the empire was at Pataliputra at the confluence of the two rivers, the Ganga and the Son»; s. 90: «With Brihadratha ended the famous Maurya dynasty, about 187 B.C., after reigning for 137 years». BEYANLI YAKLAŞIKLIK: Majumdar'ın 324 MÖ geçici tarihtir (Yunan sinkronizmi; 321/317 MÖ gibi alternatifleri s. 60 dn. 2'de anılır). · ASYA-ZINCIR-1024"},
     {f:"-0186-01-01",t:"-0074-01-01",d:"sunga",kesinlik:{f:"onyil",t:"onyil"},kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. II: The Age of Imperial Unity, Bharatiya Vidya Bhavan, Bombay (archive.org: ageofimperialuni07bhar, tam metin okundu), s. 95: bölüm başlığı «The Sungas (187-75 B.C.)»; «Pushyamitra's empire included the cities of Pataliputra, Ayodhya, Vidisa ... Pataliputra continued as the capital.»; s. 97: Pushyamitra «ruled for about 36 years (c. 187-151 B.C.)». BEYANLI YAKLAŞIKLIK: Puranik süre 112 yıl; Bhandarkar'a göre Kanvalar son 45 yılda fiilî hükümdardı (s. 99), Majumdar bu görüşü kabul etmez. · ASYA-ZINCIR-1024"},
     {f:"-0074-01-01",t:"-0029-01-01",d:"kanva",kesinlik:{f:"onyil",t:"onyil"},kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. II: The Age of Imperial Unity, Bharatiya Vidya Bhavan, Bombay (archive.org: ageofimperialuni07bhar, tam metin okundu), ss. 99-100: «The minister Vasudeva ... usurped the throne and founded a new royal dynasty in Magadha»; dört Kanva kralı «ruled for 45 years, i.e. from 75 B.C. to 30 B.C.»; Kanva kralı Susarman'ı Andhra (Satavahana) Simuka devirdi (s. 195, «about 30 B.C.»). BEYANLI: Kanva başkenti kaynakta adlandırılmaz; Magadha kralı oldukları için Pataliputra'ya (Sunga başkenti) bağlandı — BEYANLI YAKLAŞIKLIK. · ASYA-ZINCIR-1024"},
     {f:"-0029-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BEYAN (VERI-MO-ARKEO): antik zincir ile ilk mevcut dönem arasında sahip kaynakta yok → boşluk, bos:'veri-yok' (kimsenin değil DEĞİL, araştırılmadı da DEĞİL: kaynak sessiz)"},
     {f:"1281-01-01", t:"1497-01-01", d:"delhi-sultanligi"},
     {f:"1497-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1574-08-03", d:"bengal-sultanligi"},
     {f:"1574-08-03", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1764-10-22", d:"bengal-nevabligi"},
     {f:"1764-10-22", t:"1947-08-15", d:"ingiliz-hindistani"},
     {f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

{ ad:"Gayâ", tur:"sehir", lat:24.7960, lon:85.0010, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1497-01-01", d:"delhi-sultanligi"},
     {f:"1497-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1574-08-03", d:"bengal-sultanligi"},
     {f:"1574-08-03", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1764-10-22", d:"bengal-nevabligi"},
     {f:"1764-10-22", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

{ ad:"Mungîr (Monghyr)", tur:"kale", lat:25.3750, lon:86.4740, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1764-10-22", d:"bengal-nevabligi"},
     {f:"1764-10-22", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

{ ad:"Bhâgalpûr", tur:"sehir", lat:25.2440, lon:86.9820, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Gaur (Lakhnautî) — Bengal Sultanlığı'nın başkenti. 1575 vebasından sonra
// terk edildi; bit: bu yüzden yazıldı. Sahiplik zinciri Oturum 4'ün Köhne
// Ürgenç deseni gereği 1923'e kadar TAM bırakıldı — nokta yok olsa da
// peteğin sahibi bilinmeye devam ediyor.
{ ad:"Gaur (Lakhnautî)", tur:"sehir", lat:24.8680, lon:88.1330, g:1, k:1,kd:[{f:"1340-01-01",t:"1576-01-01",k:1,m:"Gaur (Lakhnautî)"}], d:[],
  bit:"1575-01-01",
  s:[{f:"1150-01-01",t:"1203-01-01",d:"sena",kesinlik:"onyil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «Bengal after the Palas: The Senas of Bengal»: \"prove his supremacy over Gauda, Vanga and\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «Bengal after the Palas: The Senas of Bengal»: \"About the middle of the twelfth century he overthrew Bhojavarman of Vikramapura and conquered East Bengal.\" | BEYANLI YAKLAŞIKLIK: Vijayasena'nın Gauda üzerindeki üstünlüğü Deopara/Barrackpore/Paikore yazıtlarıyla belgelidir ama tarihsizdir; f=1150 'yüzyıl ortası' temsilî yıl (ONYIL), Gaur'a özgü fetih günü yok; Pala'dan alınış 'eventually' (Majumdar V). · DOGU-500-1281"},{f:"1203-01-01",t:"1206-01-01",d:"gurlu",kesinlik:"yil",kaynak:"Azmi Özcan, «Bengal», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/bengal (22.10.2026'da okundu), «Bengal»: \"Bengal’in müslümanlar tarafından fethi, 1203-1204 yıllarında Türk kumandanı Muhammed Bahtiyâr Halacî tarafından gerçekleştirilmiştir\" | Iqtidar Husain Siddiqui, «Gurlular», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/gurlular (22.10.2026'da okundu), «Gurlular»: \"Kuzey Hindistan ise Kutbüddin Aybeg’in hâkimiyeti altına girdi\" | BEYANLI YAKLAŞIKLIK: TDV fetih aralığı 1203-1204 (aralığın başı); Bahtiyâr Halacî Gurlu komutanıdır; t=1206-01-01 Muizzüddin'in ölümü (602/1206). · DOGU-500-1281"},{f:"1206-01-01",t:"1281-01-01",d:"delhi-sultanligi",kesinlik:"yil",kaynak:"Azmi Özcan, «Bengal», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/bengal (22.10.2026'da okundu), «Bengal»: \"Bu tarihten itibaren Bengal, bağımsız bir devlet olduğu 1340 yılına kadar Delhi Sultanlığı’nın bir eyaleti olarak kaldı.\" | Iqtidar Husain Siddiqui, «Gurlular», TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/gurlular (22.10.2026'da okundu), «Gurlular»: \"Kuzey Hindistan ise Kutbüddin Aybeg’in hâkimiyeti altına girdi\" | BEYANLI YAKLAŞIKLIK: Majumdar VI Lakhnawati'de Iwaz (1212-27) gibi fiilen bağımsız valilerden ve Tuğrul isyanından söz eder (V: Balban 1280'lerde Tuğrul'u öldürdü); TDV (esas) Bengal'i 1340'a dek Delhi Sultanlığı'nın eyaleti sayar → delhi-sultanligi kimliği alındı. · DOGU-500-1281"},{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Pandua (Hazret Pandua) — Bengal'in 1342-1453 arası başkenti; Gaur'a
// 30 km, 3 km kuralını rahatça geçiyor.
{ ad:"Pandua (Hazret Pandua)", tur:"sehir", lat:25.1350, lon:88.1500, g:0, k:1,kd:[{f:"1340-01-01",t:"1576-01-01",k:1,m:"Pandua (Hazret Pandua)"}], d:[],
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Râcmahal — Man Singh 1592'de Bâbürlü Bengal'inin başkenti yaptı (kur:).
// 12 Temmuz 1576'daki Râcmahal Muharebesi Bengal Sultanlığı'nı bitirdi.
{ ad:"Râcmahal", tur:"sehir", lat:25.0520, lon:87.8360, g:0, k:3, d:[],
  kur:"1592-01-01",
  s:[{f:"1592-01-01", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Murşidâbâd — Murşid Kulı Han 1704'te kurdu ve nevâblığın başkenti yaptı
// (kur:). Palaşi'den sonra da nevâb sarayı burada kaldı ama toprak
// denetimi İngiliz'e geçtiği için kimlik 1757'de değişir.
{ ad:"Murşidâbâd", tur:"sehir", lat:24.1800, lon:88.2700, g:1, k:2,kd:[{f:"1717-01-01",t:"1757-06-23",k:1,m:"Murşidâbâd"}], d:[],
  kur:"1704-01-01",
  s:[{f:"1704-01-01", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Dakka (Cihângîrnagar) — İslâm Han 1610'da Bâbürlü Bengal'inin başkenti
// yaptı; şehir daha eskidir, bu yüzden kur: YAZILMADI.
{ ad:"Dakka (Dhaka)", tur:"sehir", lat:23.8110, lon:90.4130, g:1, k:1,kd:[{f:"1608-01-01",t:"1706-01-01",k:1,m:"Dakka (Dhaka)"}], d:[],
  s:[{f:"1026-01-01",t:"1150-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: sahip varman-vanga (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"varman-vanga\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «Bengal after the Palas: The Yadavas of Vanga»: \"came to power in East Ben- gal, in the second quarter of the eleventh century\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «Bengal after the Palas: The Yadavas of Vanga»: \"Jatavarman issued an inscription from Vikramapura which appears to have been the capital of the Varmans\" | BEYANLI YAKLAŞIKLIK: Dakka'ya özgü Varman tanığı yok; Vikramapura'nın (Munshiganj) ≈30 km kuzeyindeki Doğu Bengal toprağı. f=1026 'ikinci çeyrek' çeyrek başı (YÜZYIL). · DOGU-500-1281"},{f:"1150-01-01",t:"1260-01-01",d:"sena",kesinlik:"onyil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «Bengal after the Palas: The Senas of Bengal»: \"About the middle of the twelfth century he overthrew Bhojavarman of Vikramapura and conquered East Bengal.\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «Bengal after the Palas: The Senas of Bengal»: \"the Senas occupied the throne of Vanga at least up to A.D. 1245, if not up to A.D. 1260\" | BEYANLI YAKLAŞIKLIK: Dakka'ya özgü tanık yok; Vanga'nın Sena sahipliği (Minhaj: en az 1245, belki 1260). · DOGU-500-1281"},{f:"1260-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"onyil",kaynak:"BOŞLUK BEYANI: sahip deva-samatata (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"deva-samatata\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «Bengal after the Palas: The Senas of Bengal»: \"They were supplanted in Vanga by Danujamadhava DaSarathadeva of the Deva family not long after the middle of the thirteenth century\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «The Mamluk Sultans of Delhi: Balban»: \"the local ruler Danujamadhava of the Deva dynasty was persuaded to co-operate in preventing the rebel’s flight by the water-routes of his kingdom, which, it appears, extended to the Feni river\" | BEYANLI YAKLAŞIKLIK: Dakka'ya özgü tanık yok; Danujamadhava'nın krallığı Sonargaon'dan Feni'ye uzanıyordu (1283). Atlas 1281'den `delhi-sultanligi` yazar (bkz. Sonârgâon yaması). · DOGU-500-1281"},{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"1971-12-16",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"},{f:"1971-12-16",t:"2000-12-31",d:"banglades",kaynak:"https://history.state.gov/countries/bangladesh (tanima 1972-04-04); 1971-12-16 fiili teslim gunu: bulunamadi, ikincil bilgi"}] },

// Sonârgâon — 1338'de Fahreddin Mübârek Şah'ın bağımsızlık ilân ettiği yer,
// yani Bengal Sultanlığı'nın doğduğu şehir. Dakka'ya 34 km.
{ ad:"Sonârgâon", tur:"sehir", lat:23.6460, lon:90.5990, g:0, k:3, d:[],
  s:[{f:"1026-01-01",t:"1150-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: sahip varman-vanga (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"varman-vanga\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «Bengal after the Palas: The Yadavas of Vanga»: \"came to power in East Ben- gal, in the second quarter of the eleventh century\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «Bengal after the Palas: The Yadavas of Vanga»: \"Jatavarman issued an inscription from Vikramapura which appears to have been the capital of the Varmans\" | BEYANLI YAKLAŞIKLIK: Sonârgâon'a özgü Varman tanığı yok; Varmanlar 'Doğu Bengal'e egemen' ve başkentleri Vikramapura — Majumdar V Sonargaon'u Narayanganj bölgesinde bir pargana olarak anar. f=1026 'ikinci çeyrek' için çeyrek başı (YÜZYIL). · DOGU-500-1281"},{f:"1150-01-01",t:"1260-01-01",d:"sena",kesinlik:"onyil",kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «Bengal after the Palas: The Senas of Bengal»: \"About the middle of the twelfth century he overthrew Bhojavarman of Vikramapura and conquered East Bengal.\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «Bengal after the Palas: The Senas of Bengal»: \"the Senas occupied the throne of Vanga at least up to A.D. 1245, if not up to A.D. 1260\" | BEYANLI YAKLAŞIKLIK: Vijayasena Doğu Bengal'i 12. yy ortasında aldı; Minhaj'a göre Senalar Vanga'yı en az 1245'e, belki 1260'a kadar tuttu (Lakhnawati'nin Vanga'ya 1231-33 ve 1245 civarı akınları sonuçsuz kaldı). t=1260 Minhaj'ın verdiği en geç yıl. · DOGU-500-1281"},{f:"1260-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"onyil",kaynak:"BOŞLUK BEYANI: sahip deva-samatata (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"deva-samatata\" geri yazılır) · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «Bengal after the Palas: The Senas of Bengal»: \"They were supplanted in Vanga by Danujamadhava DaSarathadeva of the Deva family not long after the middle of the thirteenth century\" | R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: hcip-5-struggle-for-empire-ed.-r.-c.-majumdar_202512, tam metin okundu), «The Mamluk Sultans of Delhi: Balban»: \"the local ruler Danujamadhava of the Deva dynasty was persuaded to co-operate in preventing the rebel’s flight by the water-routes of his kingdom, which, it appears, extended to the Feni river\" | BEYANLI YAKLAŞIKLIK: Danujamadhava'nın Vanga'yı Sena'dan alışı 'orta 13. yy'dan kısa süre sonra' (yıl yok); 1283'te Sonargaon'da 'yerel hükümdar' olarak anılır. Atlas 1281'den `delhi-sultanligi` yazar: Majumdar'a göre Balban 1283'te Deva Danujamadhava ile anlaşma yaptı → atlas zincirinin 1281-1283+ Deva egemenliğiyle uzlaştırılması önerilir. · DOGU-500-1281"},{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"1971-12-16",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"},{f:"1971-12-16",t:"2000-12-31",d:"banglades",kaynak:"https://history.state.gov/countries/bangladesh (tanima 1972-04-04); 1971-12-16 fiili teslim gunu: bulunamadi, ikincil bilgi"}] },

// Çatgam (Chittagong) — Bengal ile Arakan arasında yüzyıllarca el değiştirdi.
// Mrauk U 1459'da aldı; Bâbürlü vali Şâyeste Han 27 Ocak 1666'da geri aldı
// ve şehre İslâmâbâd adını verdi.
{ ad:"Çatgam (Chittagong)", tur:"liman", lat:22.3350, lon:91.8340, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1459-01-01", d:"bengal-sultanligi"},
     {f:"1459-01-01", t:"1666-01-27", d:"arakan"},
     {f:"1666-01-27", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1760-10-11", d:"bengal-nevabligi"},
     {f:"1760-10-11", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"1971-12-16",d:"pakistan",kaynak:"https://history.state.gov/countries/pakistan"},{f:"1971-12-16",t:"2000-12-31",d:"banglades",kaynak:"https://history.state.gov/countries/bangladesh (tanima 1972-04-04); 1971-12-16 fiili teslim gunu: bulunamadi, ikincil bilgi"}] },

// Kalküta — Job Charnock'un 24 Ağustos 1690'da kurduğu ticaret merkezi
// (kur:). 1690 öncesi boşluk KASITLIDIR. 1756 Haziran'ında Sirâceddevle
// şehri aldı ve altı ay elinde tuttu; 2 Ocak 1757'de Clive geri aldı —
// gerçek bir el değiştirme olduğu için ayrı pencere açıldı.
{ ad:"Kalküta", tur:"liman", lat:22.5720, lon:88.3640, g:2, k:2,kd:[{f:"1757-06-23",t:"1923-10-29",k:1,m:"Kalküta"}], d:[],
  kur:"1690-08-24",
  s:[{f:"1690-08-24", t:"1756-06-20", d:"ingiltere"},
     {f:"1756-06-20", t:"1757-01-02", d:"bengal-nevabligi"},
     {f:"1757-01-02", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Hûglî — Portekiz 1580'de kurdu, Şah Cihan 1632'de zaptetti; Bengal'in
// ilk Avrupa yerleşimidir.
{ ad:"Hûglî (Hooghly)", tur:"liman", lat:22.8970, lon:88.3900, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1338-01-01", d:"delhi-sultanligi"},
     {f:"1338-01-01", t:"1538-01-01", d:"bengal-sultanligi"},
     {f:"1538-01-01", t:"1564-01-01", d:"sur-hanedani"},
     {f:"1564-01-01", t:"1576-07-12", d:"bengal-sultanligi"},
     {f:"1576-07-12", t:"1580-01-01", d:"babur-imparatorlugu"},
     {f:"1580-01-01", t:"1632-06-24", d:"portekiz",enklav:true},
     {f:"1632-06-24", t:"1717-01-01", d:"babur-imparatorlugu"},
     {f:"1717-01-01", t:"1757-06-23", d:"bengal-nevabligi"},
     {f:"1757-06-23", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Çandernagor — Fransız Bengal'i, 1688'de kuruldu (kur:). Hûglî'ye 5.1 km;
// 3 km kuralını geçiyor ve iki ayrı devletin toprağı olduğu için ikisi de
// tutuldu. 23 Mart 1757'de Clive aldı, 1763'te iade edildi, 1793-1815 arası
// tekrar İngiliz işgalinde kaldı, sonra 1950'ye kadar Fransız.
{ ad:"Çandernagor", tur:"liman", lat:22.8620, lon:88.3570, g:0, k:3, d:[],
  kur:"1688-01-01",
  s:[{f:"1688-01-01", t:"1757-03-23", d:"fransa",enklav:true},{f:"1757-03-23", t:"1763-02-10", d:"ingiltere",enklav:true},{f:"1763-02-10", t:"1793-06-10", d:"fransa",enklav:true},{f:"1793-06-10", t:"1816-12-04", d:"ingiltere",enklav:true},{f:"1816-12-04",t:"1950-05-02",d:"fransa-cumhuriyet", enklav: true },{f:"1950-05-02",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },

// ORISSA: Doğu Ganga (1281-1434) ve Gacapati (1434-1568) hânedanları tek
// "orissa" kimliğinde; ikisi de aynı krallığın hânedanlarıdır. 1568'de
// Bengal'in Karrânî hânedanı aldı, 1592'de Bâbürlü, 1751'de Nagpûr
// Bhonsle'si (Maratha), 1803'te İngiliz.

{ ad:"Kattak (Cuttack)", tur:"sehir", lat:20.4630, lon:85.8830, g:1, k:1,kd:[{f:"1281-01-01",t:"1568-01-01",k:1,m:"Kattak (Cuttack)"}], d:[],
  s:[{f:"1281-01-01", t:"1568-01-01", d:"orissa"},
     {f:"1568-01-01", t:"1592-01-01", d:"bengal-sultanligi"},
     {f:"1592-01-01", t:"1751-05-17", d:"babur-imparatorlugu"},
     {f:"1751-05-17", t:"1803-10-14", d:"maratha"},
     {f:"1803-10-14", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

{ ad:"Puri", tur:"sehir", lat:19.8130, lon:85.8310, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1568-01-01", d:"orissa"},
     {f:"1568-01-01", t:"1592-01-01", d:"bengal-sultanligi"},
     {f:"1592-01-01", t:"1751-05-17", d:"babur-imparatorlugu"},
     {f:"1751-05-17", t:"1803-10-14", d:"maratha"},
     {f:"1803-10-14", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Bâlâsor — İngiliz Doğu Hindistan Şirketi'nin Bengal'deki İLK fabrikası
// (1633); Kalküta'dan 57 yıl önce.
{ ad:"Bâlâsor (Balasore)", tur:"liman", lat:21.4940, lon:86.9330, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1568-01-01", d:"orissa"},
     {f:"1568-01-01", t:"1592-01-01", d:"bengal-sultanligi"},
     {f:"1592-01-01", t:"1751-05-17", d:"babur-imparatorlugu"},
     {f:"1751-05-17", t:"1803-10-14", d:"maratha"},
     {f:"1803-10-14", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// ASSAM — Ahom krallığı 1228'de kuruldu ve altı yüzyıl boyunca hem
// Bâbürlü hem Bengal saldırılarını püskürttü (1671 Saraighat). Birmanya
// 1817-1826 arasında işgal etti; 24 Şubat 1826 Yandabo Antlaşması ile
// Assam İngilizlere geçti.
{ ad:"Gauhâtî (Guwahati)", tur:"sehir", lat:26.1450, lon:91.7360, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1817-01-01", d:"ahom"},
     {f:"1817-01-01", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Rangpûr (Sibsâgar) — Ahom krallığının 1699'dan sonraki başkenti.
{ ad:"Sibsâgar (Rangpûr)", tur:"sehir", lat:26.9850, lon:94.6380, g:0, k:1,kd:[{f:"1281-01-01",t:"1826-01-01",k:1,m:"Sibsâgar (Rangpûr)"}], d:[],
  s:[{f:"1281-01-01", t:"1817-01-01", d:"ahom"},
     {f:"1817-01-01", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Manipûr — Ahom ile Birmanya arasındaki dağ krallığı; 1819-1826 Birman
// işgali, 1826'dan sonra İngiliz himayesinde prens devleti, 1891'de
// doğrudan idareye alındı.
{ ad:"İmphâl (Manipûr)", tur:"sehir", lat:24.8170, lon:93.9370, g:0, k:1,kd:[{f:"1281-01-01",t:"1923-10-29",k:1,m:"İmphâl (Manipûr)"}], d:[],
  s:[{f:"1281-01-01", t:"1819-01-01", d:"manipur"},
     {f:"1819-01-01", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1949-10-15", d:"manipur"},{f:"1949-10-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica (ilgili devlet/ülke maddesi)"}] },

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
{ ad:"Devagiri (Devletâbâd)", tur:"kale", lat:19.9430, lon:75.2200, g:1, k:2,kd:[{f:"1281-01-01",t:"1318-01-01",k:1,m:"Devagiri (Devletâbâd)"},{f:"1490-01-01",t:"1636-01-01",k:1,m:"Devagiri (Devletâbâd)"}], d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1499-01-01", d:"behmeni"},
     {f:"1499-01-01", t:"1633-06-28", d:"ahmednagar"},
     {f:"1633-06-28", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1948-09-17", d:"haydarabad-nizam"},{f:"1948-09-17",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica Hyderabad: Hindistan Polo Harekati, 17 Eylul 1948"}] },

// Evrengâbâd — Melik Anber 1610'da Hadkî adıyla kurdu (kur:); Evrengzîb
// 1681-1707 arasında Dekken seferlerinin karargâhı yaptı. Devagiri'ye
// 14.7 km, 3 km kuralının çok üstünde.
{ ad:"Evrengâbâd", tur:"sehir", lat:19.8770, lon:75.3430, g:1, k:3, d:[],
  kur:"1610-01-01",
  s:[{f:"1610-01-01", t:"1633-06-28", d:"ahmednagar"},
     {f:"1633-06-28", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1948-09-17", d:"haydarabad-nizam"},{f:"1948-09-17",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica Hyderabad: Hindistan Polo Harekati, 17 Eylul 1948"}] },

// Ahmednagar — Ahmed Nizâm Şah 1490'da kurdu (kur:) ve Nizâmşâhî
// hânedanına adını verdi. Ekber'in ordusu 1600'de aldı ama devlet Melik
// Anber ile 1636'ya kadar direndi; başkent düştüğü için nokta 1600'de
// Bâbürlü olur. Wellesley 12 Ağustos 1803'te zaptetti.
{ ad:"Ahmednagar", tur:"sehir", lat:19.0950, lon:74.7480, g:1, k:2,kd:[{f:"1490-01-01",t:"1636-01-01",k:1,m:"Ahmednagar"}], d:[],
  kur:"1490-01-01",
  s:[{f:"1490-01-01", t:"1600-08-28", d:"ahmednagar"},
     {f:"1600-08-28", t:"1759-01-01", d:"babur-imparatorlugu"},
     {f:"1759-01-01", t:"1803-08-12", d:"maratha"},
     {f:"1803-08-12", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Elicpûr (Achalpur) — Berâr'ın İmâdşâhî başkenti; 1574'te Ahmednagar
// ilhak etti. 1853'te Berâr, Nizam'ın borcuna karşılık İngiliz idaresine
// "devredilen bölgeler" (assigned districts) oldu — taht Nizam'da kaldı
// ama toprağı İngiliz yönetti, bu yüzden kimlik değişir.
{ ad:"Elicpûr (Achalpur)", tur:"sehir", lat:21.2570, lon:77.5120, g:0, k:2,kd:[{f:"1490-01-01",t:"1574-01-01",k:1,m:"Elicpûr (Achalpur)"}], d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1574-01-01", d:"berar"},
     {f:"1574-01-01", t:"1596-01-01", d:"ahmednagar"},
     {f:"1596-01-01", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1853-05-21", d:"haydarabad-nizam"},
     {f:"1853-05-21", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Bîdar — Behmenî başkenti 1432'den itibaren; 1489'da Barîdşâhî hânedanı
// bağımsızlaştı, 1619'da Bîcâpur ilhak etti, 1657'de Evrengzîb aldı.
{ ad:"Bîdar", tur:"kale", lat:17.9130, lon:77.5200, g:1, k:1,kd:[{f:"1347-01-01",t:"1619-01-01",k:1,m:"Bîdar"}], d:[],
  s:[{f:"1281-01-01", t:"1322-01-01", d:"kakatiya"},
     {f:"1322-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1489-01-01", d:"behmeni"},
     {f:"1489-01-01", t:"1619-01-01", d:"bidar"},
     {f:"1619-01-01", t:"1657-03-29", d:"bicapur"},
     {f:"1657-03-29", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1948-09-17", d:"haydarabad-nizam"},{f:"1948-09-17",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica Hyderabad: Hindistan Polo Harekati, 17 Eylul 1948"}] },

// Gülberge (Gulbarga) — Behmenî'nin İLK başkenti (1347-1432); devletin
// kurulduğu şehirdir.
{ ad:"Gülberge (Gulbarga)", tur:"sehir", lat:17.3300, lon:76.8340, g:1, k:2,kd:[{f:"1347-01-01",t:"1527-01-01",k:1,m:"Gülberge (Gulbarga)"}], d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1489-01-01", d:"behmeni"},
     {f:"1489-01-01", t:"1619-01-01", d:"bidar"},
     {f:"1619-01-01", t:"1686-09-12", d:"bicapur"},
     {f:"1686-09-12", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1948-09-17", d:"haydarabad-nizam"},{f:"1948-09-17",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica Hyderabad: Hindistan Polo Harekati, 17 Eylul 1948"}] },

// Bîcâpur — Âdilşâhî hânedanının başkenti; Evrengzîb 12 Eylül 1686'da
// on beş aylık kuşatmadan sonra aldı.
{ ad:"Bîcâpur (Bijapur)", tur:"sehir", lat:16.8270, lon:75.7100, g:1, k:2,kd:[{f:"1489-01-01",t:"1686-09-22",k:1,m:"Bîcâpur (Bijapur)"}], d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1686-09-12", d:"bicapur"},
     {f:"1686-09-12", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1760-01-01", d:"haydarabad-nizam"},
     {f:"1760-01-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Golkonda — Kutubşâhî kalesi; Evrengzîb 21 Eylül 1687'de sekiz aylık
// kuşatmadan sonra aldı ve Dekken'in son bağımsız sultanlığı bitti.
// Haydarâbâd'a 9.1 km — 3 km kuralının üstünde, ikisi de tutuldu çünkü
// biri kale biri şehirdir ve 1591-1687 arasında ikisi de ayakta.
{ ad:"Golkonda", tur:"kale", lat:17.3830, lon:78.4010, g:1, k:2,kd:[{f:"1512-01-01",t:"1687-09-21",k:1,m:"Golkonda"}], d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1512-01-01", d:"behmeni"},
     {f:"1512-01-01", t:"1687-09-21", d:"golkonda"},
     {f:"1687-09-21", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1948-09-17", d:"haydarabad-nizam"},{f:"1948-09-17",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica Hyderabad: Hindistan Polo Harekati, 17 Eylul 1948"}] },

// Haydarâbâd (Dekken) — Muhammed Kulı Kutub Şah 1591'de kurdu (kur:);
// 1724'ten sonra Nizamlığın başkenti ve Hindistan'ın en büyük prens
// devleti. 1798 yardımcı ittifakı ve 1857 sonrası himâye taht'ı
// değiştirmediği için kimlik 1923'e kadar sabittir.
{ ad:"Haydarâbâd (Dekken)", tur:"sehir", lat:17.3850, lon:78.4870, g:2, k:1,kd:[{f:"1591-01-01",t:"1687-09-21",k:1,m:"Haydarâbâd (Dekken)"},{f:"1724-10-11",t:"1923-10-29",k:1,m:"Haydarâbâd (Dekken)"}], d:[],
  kur:"1591-01-01",
  s:[{f:"1591-01-01", t:"1687-09-21", d:"golkonda"},
     {f:"1687-09-21", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1948-09-17", d:"haydarabad-nizam"},{f:"1948-09-17",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica Hyderabad: Hindistan Polo Harekati, 17 Eylul 1948"}] },

// Varangal — Kâkatiya başkenti; Uluğ Han (sonradan Muhammed b. Tuğluk)
// 1323'te aldı. 1336-1361 arasında Musunuri nâyakları Delhi idaresini
// kovup bölgeyi yönetti; bu pencere "nayak-devletleri" kimliğiyle
// yazıldı — aynı kimlik güneyde Vijayanagara sonrası nâyaklıklarını da
// kapsıyor ve ikisi de "yerel Telugu/Tamil beyliği" anlamındadır.
{ ad:"Varangal (Warangal)", tur:"kale", lat:17.9780, lon:79.5940, g:1, k:2,kd:[{f:"1281-01-01",t:"1323-01-01",k:1,m:"Varangal (Warangal)"}], d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1336-01-01", d:"delhi-sultanligi"},
     {f:"1336-01-01", t:"1361-01-01", d:"nayak-devletleri"},
     {f:"1361-01-01", t:"1512-01-01", d:"behmeni"},
     {f:"1512-01-01", t:"1687-09-21", d:"golkonda"},
     {f:"1687-09-21", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1948-09-17", d:"haydarabad-nizam"},{f:"1948-09-17",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica Hyderabad: Hindistan Polo Harekati, 17 Eylul 1948"}] },

// ===== 2b. Maratha yurdu ve batı kıyısı =====
//
// Şivâcî 6 Haziran 1674'te Raygad'da taç giydi — Maratha devletinin resmî
// kuruluş tarihidir. 1818'de Peşvâlık sona erdi ama Şinde (Gvalyar),
// Holkar (İndor), Gaikvad (Baroda), Bhonsle (Nagpûr, Kolhapûr) hânedanları
// prens devleti olarak sürdü; dosya kuralı gereği onlar "maratha" kalır.

{ ad:"Pûne (Poona)", tur:"sehir", lat:18.5200, lon:73.8560, g:2, k:2,kd:[{f:"1674-06-06",t:"1818-06-03",k:1,m:"Pûne (Poona)"}], d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1636-01-01", d:"ahmednagar"},
     {f:"1636-01-01", t:"1674-06-06", d:"bicapur"},
     {f:"1674-06-06", t:"1817-11-17", d:"maratha"},
     {f:"1817-11-17", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Raygad — Şivâcî'nin başkenti. Evrengzîb 3 Kasım 1689'da aldı, Marathalar
// 1733'te geri aldı, İngilizler 9 Mayıs 1818'de.
{ ad:"Raygad", tur:"kale", lat:18.2340, lon:73.4410, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1636-01-01", d:"ahmednagar"},
     {f:"1636-01-01", t:"1674-06-06", d:"bicapur"},
     {f:"1674-06-06", t:"1689-11-03", d:"maratha"},
     {f:"1689-11-03", t:"1733-01-01", d:"babur-imparatorlugu"},
     {f:"1733-01-01", t:"1818-05-09", d:"maratha"},
     {f:"1818-05-09", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Satâra — 1708-1818 arası Maratha çhatrapatilerinin makamı; 1818'de
// prens devleti oldu, 1848'de "lapse" doktriniyle ilhak edildi.
{ ad:"Satâra", tur:"sehir", lat:17.6860, lon:74.0070, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1674-06-06", d:"bicapur"},
     {f:"1674-06-06", t:"1818-06-03", d:"maratha"},
     {f:"1818-06-03", t:"1947-08-15", d:"ingiliz-hindistani", kaynak:"Satara 1818'de Peşvâ'nın düşüşüyle İngilizlere geçti; Pratap Singh Bhonsle İngiliz himayesinde yerli racalık olarak 1848-04-05 lapse'ına dek (Doctrine of Lapse) sürdü, sonra doğrudan İngiliz idaresi. maratha künyesi 1818-06-03'te biter (eski 'maratha → 1848' künye dışıydı). GUNEY-ASYA-DENETIM-1027"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Kolhapûr — Şivâcî soyunun ikinci kolu; 1949'a kadar prens devleti kaldı,
// bu yüzden 1923'e kadar "maratha".
{ ad:"Kolhapûr", tur:"sehir", lat:16.7050, lon:74.2430, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1659-01-01", d:"bicapur"},
     {f:"1659-01-01", t:"1710-01-01", d:"maratha"},
     {f:"1710-01-01", t:"1949-03-01", d:"kolhapur"},{f:"1949-03-01",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica (ilgili devlet/ülke maddesi)"}] },
  // 🔴 KITA 5 (12 Eylül) — Gvalyar/İndor'dan FARKLI: burada GERÇEK bir
  // "maratha" ara dönemi VAR (1659-1710), çünkü Kolhapur BAŞTA (I. Şivâcî
  // döneminde) genel Maratha devletinin bir parçasıydı; "kolhapur" kimliği
  // ancak Tarabai'nin rakip saray kurup II. Şivâcî'yi 1710'da AYRI racası
  // ilan etmesiyle DOĞDU (künyenin kendi f:'i, devletler.js). Bu YENİ bir
  // KIRILMA üretiyor (1710-01-01) — ±30 gün içinde kronoloji maddesi
  // gerektiriyor (Değişmez 2), olaylar*.js bu gece KITA 4'te, YAZMA
  // YETKİM YOK — koordinatöre SAYIYLA bildiriliyor (1 kırılma).

{ ad:"Nâsik", tur:"sehir", lat:19.9980, lon:73.7900, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1636-01-01", d:"ahmednagar"},
     {f:"1636-01-01", t:"1760-01-01", d:"babur-imparatorlugu"},
     {f:"1760-01-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Bombay — yedi adanın Portekiz'e geçişi 23 Aralık 1534 Bassein
// Antlaşması'yladır. 1661 evlilik antlaşmasıyla İngiltere'ye verildi,
// fiilî devir 18 Şubat 1665'te oldu; 27 Mart 1668'de Şirket'e kiralandı.
{ ad:"Bombay", tur:"liman", lat:18.9418, lon:72.8265, g:2, k:1,kd:[{f:"1686-01-01",t:"1923-10-29",k:1,m:"Bombay"}], d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1407-01-01", d:"delhi-sultanligi"},
     {f:"1407-01-01", t:"1534-12-23", d:"gucerat-sultanligi"},
     {f:"1534-12-23", t:"1665-02-18", d:"portekiz"},
     {f:"1665-02-18", t:"1757-06-23", d:"ingiltere",enklav:true},
     {f:"1757-06-23", t:"1947-08-15", d:"ingiliz-hindistani",enklav:true},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Çaul — Portekiz'in Bombay'dan eski limanı (1521); Marathalar 1740'ta
// aldı. Bombay'a 43 km.
{ ad:"Çaul (Chaul)", tur:"liman", lat:18.5600, lon:72.9200, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1521-01-01", d:"ahmednagar"},
     {f:"1521-01-01", t:"1740-01-01", d:"portekiz"},
     {f:"1740-01-01", t:"1818-01-01", d:"maratha"},
     {f:"1818-01-01", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Goa — Albuquerque 25 Kasım 1510'da Bîcâpur'dan aldı; Portekiz Hindistanı'nın
// başkenti ve 1961'e kadar Portekiz toprağı. Bu dosyadaki en uzun ikinci
// Avrupa penceresi.
{ ad:"Goa", tur:"liman", lat:15.5030, lon:73.9120, g:2, k:3, d:[],
  s:[{f:"1281-01-01", t:"1318-01-01", d:"yadava"},
     {f:"1318-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1510-11-25", d:"bicapur"},
     {f:"1510-11-25", t:"1923-10-29", d:"portekiz"},{f:"1923-10-29",t:"1961-12-19",d:"portekiz-hindistani-goa",kaynak:"Hindistan'in Goa/Daman/Diu ilhaki 19 Aralik 1961 (Britannica Goa)"},{f:"1961-12-19",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica Goa"}] },

{ ad:"Mangalor", tur:"liman", lat:12.9140, lon:74.8560, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1343-01-01", d:"hoysala"},
     {f:"1343-01-01", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1763-01-01", d:"nayak-devletleri"},
     {f:"1763-01-01", t:"1799-05-04", d:"meysur"},
     {f:"1799-05-04", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// ===== 2c. Vijayanagara ve Karnataka =====

// Vijayanagara (Hampi) — 1336'da kuruldu (kur:), 26 Ocak 1565 Talikota
// Muharebesi'nden sonra yağmalandı ve terk edildi (bit:). Sahiplik zinciri
// 1923'e kadar TAM bırakıldı; bölgenin sahibi Bîcâpur → Bâbürlü → Nizam →
// 1800 "devredilen bölgeler" ile İngiliz.
{ ad:"Vijayanagara (Hampi)", tur:"sehir", lat:15.3350, lon:76.4620, g:2, k:1,kd:[{f:"1336-01-01",t:"1646-01-01",k:1,m:"Vijayanagara (Hampi)"}], d:[],
  kur:"1336-01-01", bit:"1565-01-26",
  s:[{f:"1336-01-01", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1686-09-12", d:"bicapur"},
     {f:"1686-09-12", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1800-10-12", d:"haydarabad-nizam"},
     {f:"1800-10-12", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Raycur (Raichur) — Krişna ile Tungabhadra arasındaki "Raycur doâbı",
// Vijayanagara ile Bîcâpur'un yüz yıllık kavga konusu. Krişnadevarâya
// 19 Mayıs 1520'de aldı.
{ ad:"Raycur (Raichur)", tur:"kale", lat:16.2070, lon:77.3550, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1520-05-19", d:"bicapur"},
     {f:"1520-05-19", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1686-09-12", d:"bicapur"},
     {f:"1686-09-12", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1948-09-17", d:"haydarabad-nizam"},{f:"1948-09-17",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica Hyderabad: Hindistan Polo Harekati, 17 Eylul 1948"}] },

// Kurnûl — 1751-1839 arası Kurnûl nevâblığı; Nizam'ın tâbii sayıldığı için
// ayrı kimlik açılmadı. 12 Ekim 1800'de "devredilen bölgeler" ile İngiliz.
{ ad:"Kurnûl (Kurnool)", tur:"sehir", lat:15.8280, lon:78.0370, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1490-01-01", d:"behmeni"},
     {f:"1490-01-01", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1686-09-12", d:"bicapur"},
     {f:"1686-09-12", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1800-10-12", d:"haydarabad-nizam"},
     {f:"1800-10-12", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Bangalor — Kempe Gowda 1537'de kurdu (kur:); 1687'de Bîcâpur'dan
// Meysûr'a satıldı. Cornwallis 21 Mart 1791'de aldı ama 1792 Seringapatam
// Antlaşması'yla Tipu'ya iade edildi — bu yüzden ayrı pencere AÇILMADI.
{ ad:"Bangalor", tur:"sehir", lat:12.9720, lon:77.5940, g:1, k:3, d:[],
  kur:"1537-01-01",
  s:[{f:"1537-01-01", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1687-01-01", d:"bicapur"},
     {f:"1687-01-01", t:"1799-05-04", d:"meysur"},
     // HAYALET-KUNYE-1008 · TDV `meysur` «eski racalığı tekrar ihdas ettiler» (Mayıs 1799) → ardıl künye.
     {f:"1799-05-04", t:"1947-08-15", d:"meysur-racaligi"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica (Indian Independence Act 1947; Constitution of India 1950); LoC Country Studies India"}] },

// MEYSÛR — Vodeyar hânedanı 1399'dan beri Vijayanagara'nın tâbiidir;
// Talikota'dan sonra bağımsızlaştı. Haydar Ali 1761'de, Tipu Sultan
// 1782'de yönetimi aldı; Tipu 4 Mayıs 1799'da Seringapatam'da öldü ve
// Vodeyar hânedanı İngiliz himayesinde tahta iade edildi. Devletler.js
// aralığı (1761-1799) Haydar Ali-Tipu evresini esas alır; bu dosyada
// kimlik krallığın TAMAMINI kapsar, çünkü haritada boyanan toprak aynıdır.
{ ad:"Seringapatam (Şrirangapatnam)", tur:"kale", lat:12.4120, lon:76.6940, g:1, k:2,kd:[{f:"1761-01-01",t:"1799-05-04",k:1,m:"Seringapatam (Şrirangapatnam)"}], d:[],
  s:[{f:"1281-01-01", t:"1343-01-01", d:"hoysala"},
     {f:"1343-01-01", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1799-05-04", d:"meysur"},
     // HAYALET-KUNYE-1008 · TDV `meysur` «eski racalığı tekrar ihdas ettiler» (Mayıs 1799) → ardıl künye.
     {f:"1799-05-04", t:"1947-08-15", d:"meysur-racaligi"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica (Indian Independence Act 1947; Constitution of India 1950); LoC Country Studies India"}] },

// Meysûr — Seringapatam'a 13 km; 1799'dan sonra krallığın başkenti oldu.
{ ad:"Meysûr (Mysore)", tur:"sehir", lat:12.2950, lon:76.6390, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1343-01-01", d:"hoysala"},
     {f:"1343-01-01", t:"1565-01-26", d:"vijayanagara"},
     {f:"1565-01-26", t:"1799-05-04", d:"meysur"},
     // HAYALET-KUNYE-1008 · TDV `meysur` «eski racalığı tekrar ihdas ettiler» (Mayıs 1799) → ardıl künye.
     {f:"1799-05-04", t:"1947-08-15", d:"meysur-racaligi"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica (Indian Independence Act 1947; Constitution of India 1950); LoC Country Studies India"}] },

// ===== 2d. Koromandel ve Tamil ülkesi =====

// Madras — Francis Day 22 Ağustos 1639'da Vijayanagara nâyabından aldığı
// beratla Fort St. George'u kurdu (kur:). La Bourdonnais 21 Eylül 1746'da
// Fransızlara aldı, 1748 Aachen Antlaşması ile 1749'da iade edildi.
{ ad:"Madras (Chennai)", tur:"liman", lat:13.0830, lon:80.2700, g:2, k:1,kd:[{f:"1708-01-01",t:"1923-10-29",k:1,m:"Madras (Chennai)"}], d:[],
  kur:"1639-08-22",
  s:[{f:"1639-08-22", t:"1746-09-21", d:"ingiltere",enklav:true},
     {f:"1746-09-21", t:"1749-08-21", d:"fransa",enklav:true},
     {f:"1749-08-21", t:"1757-06-23", d:"ingiltere",enklav:true},
     {f:"1757-06-23", t:"1947-08-15", d:"ingiliz-hindistani",enklav:true},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Pondişeri — Fransız Hindistanı'nın başkenti, 1674'te kuruldu (kur:).
// Beş kez el değiştirdi: 1693 Hollanda, 1699 iade; 1761 İngiliz, 1765
// iade; 1778 İngiliz, 1785 iade; 1793 İngiliz, 1816 iade. Bu dosyadaki
// en çok kırılan noktadır ve hepsi belgelidir.
{ ad:"Pondişeri", tur:"liman", lat:11.9340, lon:79.8300, g:1, k:3, d:[],
  kur:"1674-01-01",
  s:[{f:"1674-01-01", t:"1693-09-06", d:"fransa",enklav:true},
     {f:"1693-09-06", t:"1699-09-01", d:"hollanda"},
     {f:"1699-09-01", t:"1761-01-16", d:"fransa",enklav:true},
     {f:"1761-01-16", t:"1765-01-01", d:"ingiltere",enklav:true},
     {f:"1765-01-01", t:"1778-10-18", d:"fransa",enklav:true},
     {f:"1778-10-18", t:"1785-01-01", d:"ingiltere",enklav:true},
     {f:"1785-01-01", t:"1793-08-23", d:"fransa",enklav:true},
     {f:"1793-08-23", t:"1816-12-04", d:"ingiltere",enklav:true},
     {f:"1816-12-04",t:"1954-11-01",d:"fransa-cumhuriyet", enklav: true },{f:"1954-11-01",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },

// Nagapatnam — Portekiz 1554, Hollanda 1658 (Hollanda Koromandel'inin
// başkenti), İngiliz 12 Kasım 1781.
{ ad:"Nagapatnam", tur:"liman", lat:10.7660, lon:79.8430, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1335-01-01", d:"delhi-sultanligi"},
     {f:"1335-01-01", t:"1378-01-01", d:"madurai-sultanligi"},
     {f:"1378-01-01", t:"1554-01-01", d:"vijayanagara"},
     {f:"1554-01-01", t:"1658-01-01", d:"portekiz"},
     {f:"1658-01-01", t:"1781-11-12", d:"hollanda"},
     {f:"1781-11-12", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Tranquebar — Danimarka Doğu Hindistan Şirketi 19 Kasım 1620'de Tanjur
// nâyabından kiraladı; 1845'te İngiltere'ye satıldı. Bu coğrafyadaki tek
// Danimarka noktasıdır. Nagapatnam'a 30 km.
{ ad:"Tranquebar (Tharangambadi)", tur:"liman", lat:11.0290, lon:79.8510, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1335-01-01", d:"delhi-sultanligi"},
     {f:"1335-01-01", t:"1378-01-01", d:"madurai-sultanligi"},
     {f:"1378-01-01", t:"1532-01-01", d:"vijayanagara"},
     {f:"1532-01-01", t:"1620-11-19", d:"nayak-devletleri"},
     {f:"1620-11-19", t:"1845-02-22", d:"danimarka",enklav:true},
     {f:"1845-02-22", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Tancûr (Thanjavur) — 1674'te Şivâcî'nin üvey kardeşi Venkocî burada
// Maratha hânedanı kurdu ve 1855'e kadar sürdü; 1799'da toprak idaresi
// İngiliz'e devredildi.
{ ad:"Tancûr (Thanjavur)", tur:"sehir", lat:10.7870, lon:79.1380, g:1, k:1,kd:[{f:"1336-01-01",t:"1763-01-01",k:1,m:"Tancûr (Thanjavur)"}], d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1335-01-01", d:"delhi-sultanligi"},
     {f:"1335-01-01", t:"1378-01-01", d:"madurai-sultanligi"},
     {f:"1378-01-01", t:"1532-01-01", d:"vijayanagara"},
     {f:"1532-01-01", t:"1674-01-01", d:"nayak-devletleri"},
     {f:"1674-01-01", t:"1799-10-25", d:"maratha"},
     {f:"1799-10-25", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Madurai — Pândya başkenti; Malik Kâfûr 1311'de yağmaladı, 1335'te
// Ma'ber (Madurai) Sultanlığı kuruldu ve 1378'de Vijayanagara yıktı.
{ ad:"Madurai", tur:"sehir", lat:9.9250, lon:78.1190, g:1, k:1,kd:[{f:"1281-01-01",t:"1323-01-01",k:1,m:"Madurai"},{f:"1335-01-01",t:"1763-01-01",k:1,m:"Madurai"}], d:[],
  s:[
     {f:"0600-01-01",t:"0920-01-01",d:"pandya-1",kesinlik:{f:"onyil",t:"onyil"},kaynak:"R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay (archive.org: classicalage03bhar, tam metin okundu), s. 267: «the beginning of the dynasty may be roughly placed at about A.D. 600» (Kadungon 590-620); s. 269: Velvikudi belgesi Rajasimha'nın «palaces and fortifications of Kudal (Madura)» onarımını anar; Arikesari'nin Çola prensesi Sambandar'ı «Madura»ya davet etti · R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay (archive.org: ageofimperialkan04bhar, tam metin okundu), s. 154: Çola Parantaka Madura'yı ele geçirdi; Pandya kralı Rajasimha II «A.D. 920» dolayında sürüldü, Parantaka «Maduraiyum Ilamum Konda» unvanını aldı, ancak fetih «by no means easy» (ülkeyi düzene sokmak yarı ömrünü aldı) | BEYANLI YAKLAŞIKLIK: Pandya kronolojisi «by no means settled» (s. 267); Madurai'nin tüm süre başkent olduğu kaynakta yıl yıl tarihlenmez (Kudal = Madurai). Bitiş 920 Rajasimha II'nin sürülüşüdür; sonrası Çola idaresi ve Pandya direnişi bu pakette ayrı yazılmadı (aralık beyanlı boşluk). Künye f=601 korundu. · ASYA-ZINCIR-1024 (W2c)"},
     {f:"0920-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: 0920-01-01–1281-01-01 arası sahip YAZILMADI: önceki dilim (pandya-1) kaynaklı olarak 0920-01-01'te biter, sonraki dilim (pandya) 1281-01-01'te başlar; aradaki dilim için bu pakette (ASYA-ZINCIR-1024) kaynak okunmadı/bulunamadı. Boşluk komşuya İTİLMEDİ (VERI-YAPISI __BOSLUK__ kuralı); BORÇ: bu dilim için TDV ve ardıl kaynak taraması. · ASYA-ZINCIR-1024"},
     {f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1335-01-01", d:"delhi-sultanligi"},
     {f:"1335-01-01", t:"1378-01-01", d:"madurai-sultanligi"},
     {f:"1378-01-01", t:"1529-01-01", d:"vijayanagara"},
     {f:"1529-01-01", t:"1736-01-01", d:"nayak-devletleri"},
     {f:"1736-01-01", t:"1801-07-31", d:"karnatik"},
     {f:"1801-07-31", t:"1947-08-15", d:"ingiliz-hindistani"},
     {f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

{ ad:"Trichinopoly (Tiruchirappalli)", tur:"kale", lat:10.7900, lon:78.7040, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1335-01-01", d:"delhi-sultanligi"},
     {f:"1335-01-01", t:"1378-01-01", d:"madurai-sultanligi"},
     {f:"1378-01-01", t:"1529-01-01", d:"vijayanagara"},
     {f:"1529-01-01", t:"1736-01-01", d:"nayak-devletleri"},
     {f:"1736-01-01", t:"1801-07-31", d:"karnatik"},
     {f:"1801-07-31", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Cinci (Gingee) — Hindistan'ın en sarp kalelerinden; Bîcâpur 1649,
// Maratha 1677, Bâbürlü 1698 (sekiz yıllık kuşatma), Fransız 1750,
// İngiliz 1761.
{ ad:"Cinci (Gingee)", tur:"kale", lat:12.2520, lon:79.3970, g:0, k:1,kd:[{f:"1336-01-01",t:"1763-01-01",k:1,m:"Cinci (Gingee)"}], d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1378-01-01", d:"delhi-sultanligi"},
     {f:"1378-01-01", t:"1509-01-01", d:"vijayanagara"},
     {f:"1509-01-01", t:"1649-01-01", d:"nayak-devletleri"},
     {f:"1649-01-01", t:"1677-05-01", d:"bicapur"},
     {f:"1677-05-01", t:"1698-01-08", d:"maratha"},
     {f:"1698-01-08", t:"1750-09-11", d:"babur-imparatorlugu"},
     {f:"1750-09-11", t:"1761-04-05", d:"fransa",enklav:true},
     {f:"1761-04-05", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Vellor — Vijayanagara'nın Talikota sonrası başkenti (1606-1646).
{ ad:"Vellor (Vellore)", tur:"kale", lat:12.9160, lon:79.1320, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1378-01-01", d:"delhi-sultanligi"},
     {f:"1378-01-01", t:"1656-01-01", d:"vijayanagara"},
     {f:"1656-01-01", t:"1687-09-21", d:"bicapur"},
     {f:"1687-09-21", t:"1714-01-01", d:"babur-imparatorlugu"},
     {f:"1714-01-01", t:"1760-01-01", d:"karnatik"},
     {f:"1760-01-01", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// KARNÂTİK (Arkot) nevâblığı 1690'da Haydarâbâd Nizamlığı'na bağlı olarak
// kuruldu, 1710'lardan sonra fiilen bağımsızlaştı; 31 Temmuz 1801'de
// toprakları İngiliz idaresine devredildi.
{ ad:"Arkot (Arcot)", tur:"sehir", lat:12.9060, lon:79.3200, g:0, k:2,kd:[{f:"1690-01-01",t:"1801-07-31",k:1,m:"Arkot (Arcot)"}], d:[],
  s:[{f:"1281-01-01", t:"1311-01-01", d:"pandya"},
     {f:"1311-01-01", t:"1378-01-01", d:"delhi-sultanligi"},
     {f:"1378-01-01", t:"1656-01-01", d:"vijayanagara"},
     {f:"1656-01-01", t:"1687-09-21", d:"bicapur"},
     {f:"1687-09-21", t:"1714-01-01", d:"babur-imparatorlugu"},
     {f:"1714-01-01", t:"1801-07-31", d:"karnatik"},
     {f:"1801-07-31", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// ===== 2e. Malabar ve güneybatı kıyısı =====

// Kalikut — Zamorin'in şehri; Vasco da Gama 20 Mayıs 1498'de buraya geldi
// ve Avrupa'nın Hindistan'a deniz yolu açıldı. Haydar Ali 1766'da Malabar'ı
// aldı, 1792 Seringapatam Antlaşması'yla İngiliz'e geçti.
{ ad:"Kalikut (Kozhikode)", tur:"liman", lat:11.2590, lon:75.7800, g:1, k:1,kd:[{f:"1281-01-01",t:"1766-01-01",k:1,m:"Kalikut (Kozhikode)"}], d:[],
  s:[{f:"1281-01-01", t:"1766-01-01", d:"kalikut"},
     {f:"1766-01-01", t:"1792-03-18", d:"meysur"},
     {f:"1792-03-18", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Koçin — Portekiz'in Hindistan'daki İLK kalesi (1503); Hollanda 7 Ocak
// 1663'te aldı, İngiliz 20 Ekim 1795'te. Koçin krallığı iç kesimde prens
// devleti olarak sürdü; bu nokta LİMANI temsil ettiği için Avrupa
// pencereleri yazıldı.
{ ad:"Koçin (Kochi)", tur:"liman", lat:9.9551, lon:76.2505, g:1, k:1,kd:[{f:"1281-01-01",t:"1503-01-01",k:1,m:"Koçin (Kochi)"}], d:[],
  s:[{f:"1281-01-01", t:"1503-09-01", d:"kocin"},
     {f:"1503-09-01", t:"1663-01-07", d:"portekiz"},
     {f:"1663-01-07", t:"1795-10-20", d:"hollanda"},
     {f:"1795-10-20", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Kannûr — Kolathiri racasının limanı; Portekiz 1505'te Sant'Angelo
// kalesini kurdu, Hollanda 1663'te aldı, 1771'de Arakkal beylerine sattı,
// İngilizler 1790'da zaptetti.
{ ad:"Kannûr (Cannanore)", tur:"liman", lat:11.8680, lon:75.3550, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1505-01-01", d:"kalikut"},
     {f:"1505-01-01", t:"1663-02-15", d:"portekiz"},
     {f:"1663-02-15", t:"1771-01-01", d:"hollanda"},
     {f:"1771-01-01", t:"1790-12-15", d:"meysur"},
     {f:"1790-12-15", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

{ ad:"Kolam (Quilon)", tur:"liman", lat:8.8930, lon:76.6140, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1502-01-01", d:"travankur"},
     {f:"1502-01-01", t:"1661-12-08", d:"portekiz"},
     {f:"1661-12-08", t:"1795-01-01", d:"hollanda"},
     {f:"1795-01-01", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// Travankur — Marthanda Varma 1729'da Venâd'ı genişleterek kurdu; 1741
// Kolaçel'de Hollanda'yı yenen tek Hint devletidir. 1795'ten sonra İngiliz
// himayesinde prens devleti; dosya kuralı gereği kimlik korunur.
{ ad:"Trivandrum (Thiruvananthapuram)", tur:"sehir", lat:8.5240, lon:76.9360, g:1, k:1,kd:[{f:"1281-01-01",t:"1923-10-29",k:1,m:"Trivandrum (Thiruvananthapuram)"}], d:[],
  s:[{f:"1281-01-01", t:"1949-07-01", d:"travankur"},{f:"1949-07-01",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Britannica (ilgili devlet/ülke maddesi)"}] },

// ===== 2f. Kuzey Sirkarlar =====
// 1765'te Bâbürlü hükümdarından beratla alındı, fiilî devir 12 Kasım 1766.

{ ad:"Masulipatnam", tur:"liman", lat:16.1900, lon:81.1300, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1512-01-01", d:"behmeni"},
     {f:"1512-01-01", t:"1687-09-21", d:"golkonda"},
     {f:"1687-09-21", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1759-04-08", d:"haydarabad-nizam"},
     {f:"1759-04-08", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

{ ad:"Râcahmundry", tur:"sehir", lat:17.0050, lon:81.7770, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1512-01-01", d:"behmeni"},
     {f:"1512-01-01", t:"1687-09-21", d:"golkonda"},
     {f:"1687-09-21", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1766-11-12", d:"haydarabad-nizam"},
     {f:"1766-11-12", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

{ ad:"Vişâkapatnam", tur:"liman", lat:17.6870, lon:83.2190, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1323-01-01", d:"kakatiya"},
     {f:"1323-01-01", t:"1347-08-03", d:"delhi-sultanligi"},
     {f:"1347-08-03", t:"1512-01-01", d:"behmeni"},
     {f:"1512-01-01", t:"1687-09-21", d:"golkonda"},
     {f:"1687-09-21", t:"1724-10-11", d:"babur-imparatorlugu"},
     {f:"1724-10-11", t:"1766-11-12", d:"haydarabad-nizam"},
     {f:"1766-11-12", t:"1947-08-15", d:"ingiliz-hindistani"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },

// ===== 2g. Seylan (üç nokta) =====
// Görev tanımının tablosunda YOK. Üç nokta konuldu çünkü ada, kutu
// açıldığında en yakın Hint noktasına (Trivandrum, 480 km) emilir ve
// Portekiz-Hollanda-İngiliz zinciri Güney Hindistan'ın rengiyle yanlış
// boyanırdı — MIMARI.md §2'deki emilme davranışının kitabî örneği.
// "seylan-sinhala" Gampola/Kotte krallıklarını, "kandy" 1469'dan sonraki
// dağ krallığını, "yafna" Tamil Yafna krallığını karşılar.

{ ad:"Kolombo", tur:"liman", lat:6.9270, lon:79.8610, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1518-09-01", d:"seylan-sinhala"},
     {f:"1518-09-01", t:"1656-05-12", d:"portekiz"},
     {f:"1656-05-12", t:"1796-02-16", d:"hollanda"},
     {f:"1796-02-16", t:"1948-02-04", d:"ingiltere"},{f:"1948-02-04",t:"2000-12-31",d:"sri-lanka",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },

// Kandy — adanın hiç sömürgeleşmeyen iç krallığı; 2 Mart 1815 Kandy
// Sözleşmesi'yle İngiliz tacına geçti.
{ ad:"Kandy", tur:"sehir", lat:7.2910, lon:80.6360, g:1, k:1,kd:[{f:"1469-01-01",t:"1815-03-02",k:1,m:"Kandy"}], d:[],
  s:[{f:"1281-01-01", t:"1469-01-01", d:"seylan-sinhala"},
     {f:"1469-01-01", t:"1815-03-02", d:"kandy"},
     {f:"1815-03-02", t:"1948-02-04", d:"ingiltere"},{f:"1948-02-04",t:"2000-12-31",d:"sri-lanka",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },

{ ad:"Yafna (Jaffna)", tur:"sehir", lat:9.6610, lon:80.0260, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1619-02-01", d:"yafna"},
     {f:"1619-02-01", t:"1658-06-21", d:"portekiz"},
     {f:"1658-06-21", t:"1796-02-16", d:"hollanda"},
     {f:"1796-02-16", t:"1948-02-04", d:"ingiltere"},{f:"1948-02-04",t:"2000-12-31",d:"sri-lanka",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },

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
{ ad:"Pekin (Hanbalık)", tur:"sehir", lat:39.9040, lon:116.4070, g:2, k:1,kd:[{f:"1281-01-01",t:"1923-10-29",k:1,m:"Pekin (Hanbalık)"}], d:[],
  s:[
     {f:"-0205-01-01",t:"-0201-01-01",d:"yan-krallik-chuhan",kesinlik:{f:"yil",t:"yil"},kaynak:"Sima Qian, Shiji juan 16 «Qin Chu zhi ji yuebiao» (zh.wikisource.org/wiki/史記/卷016, okundu; tablo MÖ yıl bloklarına ayrılmıştır, ay adları Qin-Han takvimidir): MÖ 206 bloğu — «分燕為二國» ; «王臧荼始，故燕將» ; «二。都薊» (Zang Tu Yan krallığı; Liaodong'a Han Guang atanmıştı, 205 MÖ'de Zang Tu onu yok etti: «臧荼擊廣無終，滅之», «屬燕») ; son: MÖ 202 bloğu «九。反漢，虜荼。» ; «燕王盧綰始，漢太尉。» (Ji, Han'a bağlı Yan krallığına geçti; sahibi bati-han olarak yazıldı — vasal krallık, BEYANLI) | ic_not_takvim: Shiji 16 aylık tablosu Qin-Han takvimiyle (yıl 10. ayda başlar) ay verir; ay adlarının Julian karşılığı bu pakette tabloyla çevrilmedi (CLAUDE.md Takvim kuralı: çevrilemezse yıl/ay hassasiyeti) — yalnız MÖ yıl bloğu alındı (206 → -0205), kesinlik yıl. BEYANLI YAKLAŞIKLIK: Hegemon Xiang Ji'nin 18 krallığı kuruluşu (MÖ 206) tabloda «分為…», «王…始», «都…» hücreleriyle verilir; Başkent Ji (Pekin noktası Ji'yi temsil eder). · ASYA-ZINCIR-1024 (W2b)"},
     {f:"-0201-01-01",t:"0907-06-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: -0201-01-01–0907-06-01 arası sahip YAZILMADI: önceki dilim (yan-krallik-chuhan) kaynaklı olarak -0201-01-01'te biter, sonraki dilim (__BOSLUK__) 0907-06-01'te başlar; aradaki dilim için bu pakette (ASYA-ZINCIR-1024) kaynak okunmadı/bulunamadı. Boşluk komşuya İTİLMEDİ (VERI-YAPISI __BOSLUK__ kuralı); BORÇ: bu dilim için TDV ve ardıl kaynak taraması. · ASYA-ZINCIR-1024"},
     {f:"0907-06-01",t:"0911-09-08",d:"sonraki-liang-5hanedan",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 39 «Liu Shouguang» (zh.wikisource.org/wiki/新五代史/卷39; açıldı, okundu): «梁開平元年，遣李思安攻仁恭，仁恭在大安，守光自外將兵以入，擊走思安，乃自稱盧龍節度使…»; «梁遣閤門使王瞳拜守光河北採訪使。» ‖ bitiş: Zizhi tongjian, juan 268 (zh.wikisource.org/wiki/資治通鑑/卷268; açıldı, okundu): «甲子，守光即皇帝位。國號大燕，改元應天。»; Xin Wudai shi, juan 39: «守光遂以梁乾化元年八月，自號大燕皇帝，改元曰應天» · DOGU-500-1281"},
     {f:"0911-09-08",t:"0913-11-01",d:"yan-liu-shouguang",kesinlik:"gun",kaynak:"Zizhi tongjian, juan 268 (zh.wikisource.org/wiki/資治通鑑/卷268; açıldı, okundu): «甲子，守光即皇帝位。國號大燕，改元應天。»; Xin Wudai shi, juan 39: «守光遂以梁乾化元年八月，自號大燕皇帝，改元曰應天» ‖ bitiş: Xin Wudai shi, juan 5 (zh.wikisource.org/wiki/新五代史/卷05; okundu): «十年十月，劉守光請降，王如幽州，守光背約不降，攻破之。十一年，殺燕王劉守光于太原»; Zizhi tongjian, juan 269 (zh.wikisource.org/wiki/資治通鑑/卷269; okundu): «庚午，晉王以周德威為盧龍節度使，兼侍中。» · DOGU-500-1281"},
     {f:"0913-11-01",t:"0923-05-13",d:"tang-jin-shatuo-prensligi",kesinlik:"ay",kaynak:"Xin Wudai shi, juan 5 (zh.wikisource.org/wiki/新五代史/卷05; okundu): «十年十月，劉守光請降，王如幽州，守光背約不降，攻破之。十一年，殺燕王劉守光于太原»; Zizhi tongjian, juan 269 (zh.wikisource.org/wiki/資治通鑑/卷269; okundu): «庚午，晉王以周德威為盧龍節度使，兼侍中。» ‖ bitiş: Xin Wudai shi, juan 5 «Tang benji» (zh.wikisource.org/wiki/新五代史/卷05; okundu): «同光元年…夏四月己巳，皇帝即位，大赦，改元，國號唐。…以魏州為東京，太原為西京，鎮州為北都。» · DOGU-500-1281"},
     {f:"0923-05-13",t:"0936-11-28",d:"sonraki-tang-5hanedan",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 5 «Tang benji» (zh.wikisource.org/wiki/新五代史/卷05; okundu): «同光元年…夏四月己巳，皇帝即位，大赦，改元，國號唐。…以魏州為東京，太原為西京，鎮州為北都。» ‖ bitiş: Xin Wudai shi, juan 8 «Jin benji» (zh.wikisource.org/wiki/新五代史/卷08; okundu): «十一月丁酉，皇帝即位，…國號晉。以幽、涿、薊、檀、順、瀛、莫、蔚、朔、雲、應、新、媯、儒、武、寰州入于契丹。» · DOGU-500-1281"},
     {f:"0936-11-28",t:"1000-01-01",d:"liao-hanedani",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 8 «Jin benji» (zh.wikisource.org/wiki/新五代史/卷08; okundu): «十一月丁酉，皇帝即位，…國號晉。以幽、涿、薊、檀、順、瀛、莫、蔚、朔、雲、應、新、媯、儒、武、寰州入于契丹。» ‖ bitiş: Tuotuo vd., Jin shi, juan 2 «Taizu ben ji» (zh.wikisource.org/wiki/金史/卷2; açıldı, okundu): «十二月，上伐燕京。…庚寅，遼統軍都監高六等來送款。上至燕京，入自南門，…遼知樞密院左企弓、虞仲文，…奉表降。辛卯，遼百官詣軍門叩頭請罪» · DOGU-500-1281"},
     {f:"1000-01-01",t:"1123-01-04",d:"liao-hanedani",kesinlik:{f:"belirsiz",t:"gun"},kaynak:"«太宗以皇都為上京，升幽州為南京，改南京為東京，聖宗城中京，興宗升雲州為西京» «中都路，遼會同元年為南京，開泰元年號燕京。海陵貞元元年定都，以燕乃列國之名，不當為京師號，遂改為中都» Liaoshi 37 (遼史/卷37 地理志一) ve Jinshi 24 (金史/卷24 地理上): Youzhou/Yanjing 會同元年 (938) Liao Güney Başkenti (Nanjing, bugünkü Pekin); Kuzey Liao (耶律淳, 1122) liao-hanedani sürekliliği içinde sayıldı (BEYAN). f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},
     {f:"1123-01-04",t:"1123-05-07",d:"jin-hanedani",kesinlik:"gun",kaynak:"«上至燕京，入自南門，使銀朮哥、婁室陣于城上，乃次于城南» Jinshi 2 (金史/卷2 太祖本紀) 天輔六年十二月: Liao yetkilileri teslim oldu, Aguda şehre girdi. f: Gün çevirimi: Jinshi 2 天輔六年十二月庚寅 (「上至燕京」) → Jülyen 1123-01-04 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 12/5; 金太祖天輔6年(歲次壬寅)12月5日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1123-05-07",t:"1126-01-04",d:"song",kesinlik:"gun",kaynak:"«夏四月癸巳，金人遣楊璞以誓書及燕京、涿、易、檀、順、景、薊州來歸。庚子，童貫、蔡攸入燕» Songshi 22 (宋史/卷022 徽宗四): Jin, Yanjing ve altı eyaleti haraç karşılığı Song’a devretti; Song şehre 宣和四年冬十月庚寅 「改燕京為燕山府」 adını vermişti («冬十月庚寅，改燕京為燕山府，涿、易八州並賜名。癸巳，劉延慶與郭藥師等統兵出雄州») — fiilî devir 宣和五年. Jin yağmalamış, nüfusu götürmüştü (庚子: 「燕之職官、富民、金帛、子女先為金人盡掠而去」). f: Gün çevirimi: Songshi 22 宣和五年夏四月癸巳 → Jülyen 1123-05-07 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 4/10; 宋徽宗宣和5年(歲次癸卯)4月10日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1126-01-04",t:"1215-05-31",d:"jin-hanedani",kesinlik:"gun",kaynak:"«中都路，遼會同元年為南京，開泰元年號燕京。海陵貞元元年定都，以燕乃列國之名，不當為京師號，遂改為中都» «甲辰，宗望諸軍及宋郭藥師、張企徽、劉舜仁戰于白河。大破之。蒲莧敗宋兵于古北口。丙午，郭藥師降，燕山州縣悉平» Jinshi 3 (金史/卷3 太宗本紀) 天會三年十二月丙午: Guo Yaoshi teslim oldu, Yanshan (Yanjing) bölgesi Jin’e döndü; Songshi 22 宣和七年十二月己酉 aynı olayı 「郭藥師以燕山叛」 diye kaydeder («己酉，中山奏金人斡離不、粘罕分兩道入攻。郭藥師以燕山叛，北邊諸郡皆陷»). Jin, 海陵貞元元年 (1153) Zhongdu adıyla başkent yaptı. f: Gün çevirimi: Jinshi 3 天會三年十二月丙午 → Jülyen 1126-01-04 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 12/9; 金太宗天會3年(歲次乙巳)12月9日; gan-zhi JDN hesabıyla eşleşti). · VERI-MS1-1281"},
     {f:"1215-05-31",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:{f:"gun",t:"yil"},kaynak:"«五月庚申，金中都留守完顏福興仰藥死，抹撚盡忠棄城走，明安入守之» «元太祖十年，克燕，初為燕京路，總管大興府。太宗七年，置版籍» Yuanshi 1 (元史/卷001 太祖本紀) 十年乙亥; Yuanshi 58 (卷058 地理一 大都路). f: Gün çevirimi: Yuanshi 1 太祖十年乙亥五月庚申 → Jülyen 1215-05-31 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 5/2; 元太祖10年(歲次乙亥)5月2日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"«Kubilay Han 1264 yılında idare merkezini, kendilerinin Hanbalık (han şehri) dedikleri Çin hükümdarlarının oturduğu Chungtu’ya» «遂改中都，其大興府仍舊。四年，始於中都之東北置今城而遷都焉» TDV hanbalik (TDV İslâm Ansiklopedisi, HANBALIK): Kubilay 1264’te idare merkezini Chungtu’ya (Pekin) nakletti; Yuanshi 58: 至元元年 Zhongdu, 至元四年 yeni şehir (Dadu). f: Yıl hassasiyeti, KÜNYE ÖMRÜ SINIRI: devletler.js mogol-imparatorlugu t=1260-01-01 = yuan-hanedani f=1260-01-01 (atlas künyesi, DAYANAK DEĞİL; dilim ucu künye ömrü içinde kalsın diye bu güne konuldu). Kubilay tahta çıkışı: Yuanshi 4 «辛卯，帝即皇帝位，以禡禡、趙璧、董文炳為燕京路宣慰使» ; Çin tarihi 中統元年春三月辛卯 → Jülyen 1260-05-05 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen) tablo etiketi 3/24; 宋理宗景定元年(歲次庚申)3月24日) — künye ömrü f=1260-01-01 olduğundan sınır bu güne çekilemedi, künye düzeltme önerisi celiskiler alanında. · VERI-MS1-1281"},
     {f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1644-06-06", d:"dashun"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Tiencin — Yongle imparatoru 1404'te kaleyi kurdu ve şehre bu adı verdi
// (kur:); Pekin'in deniz kapısıdır.
{ ad:"Tiencin (Tianjin)", tur:"liman", lat:39.0840, lon:117.2010, g:1, k:3, d:[],
  kur:"1404-01-01",
  s:[{f:"1404-01-01", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Baoding", tur:"sehir", lat:38.8740, lon:115.4640, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Zhengding", tur:"sehir", lat:38.1440, lon:114.5730, g:0, k:3, d:[],
  s:[{f:"0907-06-01",t:"0921-02-11",d:"zhao-wang-rong",kesinlik:"gun",kaynak:"Xue Juzheng vd., Jiu Wudai shi, juan 54 «Wang Rong» (zh.wikisource.org/wiki/舊五代史/卷54; açıldı, okundu): «鎔於昭宗朝賜號敦睦保定久大功臣，位至成德軍節度使、守太師、中書令、趙王，梁祖加尚書令。» ‖ bitiş: Ouyang Xiu, Xin Wudai shi, juan 5 (zh.wikisource.org/wiki/新五代史/卷05; okundu): «十八年正月，…趙將張文禮弒其君鎔，文禮來請命。二月，以文禮為鎮州兵馬留後。»; Zizhi tongjian, juan 271 (zh.wikisource.org/wiki/資治通鑑/卷271; okundu): «張文禮遣使告亂於晉王，且奉箋勸進，因求節鉞。…遣節度判官盧質承製授文禮成德留後。» · DOGU-500-1281"},{f:"0921-02-11",t:"0923-05-13",d:"tang-jin-shatuo-prensligi",kesinlik:"ay",kaynak:"Ouyang Xiu, Xin Wudai shi, juan 5 (zh.wikisource.org/wiki/新五代史/卷05; okundu): «十八年正月，…趙將張文禮弒其君鎔，文禮來請命。二月，以文禮為鎮州兵馬留後。»; Zizhi tongjian, juan 271 (zh.wikisource.org/wiki/資治通鑑/卷271; okundu): «張文禮遣使告亂於晉王，且奉箋勸進，因求節鉞。…遣節度判官盧質承製授文禮成德留後。» ‖ bitiş: Xin Wudai shi, juan 5 «Tang benji» (zh.wikisource.org/wiki/新五代史/卷05; okundu): «同光元年…夏四月己巳，皇帝即位，大赦，改元，國號唐。…以魏州為東京，太原為西京，鎮州為北都。» · DOGU-500-1281"},{f:"0923-05-13",t:"0937-01-11",d:"sonraki-tang-5hanedan",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 5 «Tang benji» (zh.wikisource.org/wiki/新五代史/卷05; okundu): «同光元年…夏四月己巳，皇帝即位，大赦，改元，國號唐。…以魏州為東京，太原為西京，鎮州為北都。» ‖ bitiş: Xin Wudai shi, juan 7 «Tang Fei Di benji» (zh.wikisource.org/wiki/新五代史/卷07; okundu): «甲戌，契丹及晉人至于潞州。丁丑，至自河陽。辛巳，皇帝崩。〈年五十一，帝自焚死，晉高祖命葬其燼骨於徽陵域中。〉» · DOGU-500-1281"},{f:"0937-01-11",t:"0947-01-10",d:"sonraki-jin-5hanedan",kesinlik:{"f": "gun", "t": "gun"},kaynak:"Ouyang Xiu, Xin Wudai shi, juan 7 «Tang Fei-di ben ji» (zh.wikisource.org/wiki/新五代史/卷07, okundu): 「丁酉，契丹立晉。閏月甲子，楊光遠殺張敬達，……辛巳，皇帝崩。〈年五十一，帝自焚死，晉高祖命葬其燼骨於徽陵域中。〉」 · Ouyang Xiu, Xin Wudai shi, juan 8 «Jin ben ji» (zh.wikisource.org/wiki/新五代史/卷08, okundu): 「己卯，次河陽，……辛巳，至自太原。盧文紀、姚顗罷。甲申，大赦，殺張延朗、劉延朗」 | ABİ MERKEZ: Luoyang (hanedan başkenti zinciri; cin2/cin3 yamasındaki aynı devir günleri) — Zhengding'ın bu hanedanların valiliğine bağlı olduğu varsayımı; şehir adıyla devir kaynağı okunmadı, yerel isyan/özerklik dönemleri ayrıca okunmadı (BEYANLI YAKLAŞIKLIK). · DOGU-500-1281"},{f:"0947-01-10",t:"0951-02-13",d:"sonraki-han-5hanedan",kesinlik:"gun",kaynak:"Sima Guang, Zizhi tongjian, juan 287 (Hu Sanxing notlu; zh.wikisource.org/wiki/資治通鑒_(胡三省音注)/卷287, okundu): 「丙辰，帝至洛陽，入居宮中；汴州百官奉表來迎。」 · BEYAN: ZZ 287: 「是日，劉晞棄洛陽，奔大梁」 (6. ay, Liu Xi'nin ayrılış günü ayrıca belirtilmedi). | ABİ MERKEZ: Luoyang (hanedan başkenti zinciri; cin2/cin3 yamasındaki aynı devir günleri) — Zhengding'ın bu hanedanların valiliğine bağlı olduğu varsayımı; şehir adıyla devir kaynağı okunmadı, yerel isyan/özerklik dönemleri ayrıca okunmadı (BEYANLI YAKLAŞIKLIK). | BEYAN: 947-01-10→947-06-23 Liao işgal aralığı Zhengding için okunmadı; Han'a bağlandı (Han ilanı: Xin Wudai shi 10 «辛未，皇帝即位，稱天福十二年»; Han'ın başkente girişi 947-06-23). · DOGU-500-1281"},{f:"0951-02-13",t:"0960-02-04",d:"sonraki-zhou-5hanedan",kesinlik:{"f": "gun", "t": "gun"},kaynak:"Ouyang Xiu, Xin Wudai shi, juan 11 «Zhou ben ji» (zh.wikisource.org/wiki/新五代史/卷11, okundu): 「廣順元年春正月丁卯，皇帝即位，大赦，改元，國號周。……戊寅，漢劉崇自立于太原。」 · BEYAN: BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Kaifeng): Luoyang'ın kendi teslim günü kaynakta ayrı değil. | ABİ MERKEZ: Luoyang (hanedan başkenti zinciri; cin2/cin3 yamasındaki aynı devir günleri) — Zhengding'ın bu hanedanların valiliğine bağlı olduğu varsayımı; şehir adıyla devir kaynağı okunmadı, yerel isyan/özerklik dönemleri ayrıca okunmadı (BEYANLI YAKLAŞIKLIK). · DOGU-500-1281"},{f:"0960-02-04",t:"1126-09-26",d:"song",kesinlik:"gun",kaynak:"Tuotuo vd., Song shi, juan 1 «Taizu ben ji 1» (zh.wikisource.org/wiki/宋史/卷001): 「建隆元年春正月乙巳，大赦，改元，定有天下之號曰宋。」 · Xin Wudai shi, juan 12: 「七年春正月甲辰，遜于位。宋興。」 (Song'un kuruluşu 960-02-04; Zhou çocuk imparatorunun feragati 960-02-03 BEYANI: Kaifeng yamasıyla aynı) ‖ BİTİŞ: Jin shi, juan 3 (zh.wikisource.org/wiki/金史/卷3): 「辛未，宗望破…克真定，殺其守李邈。」 (天會四年 9. ay 辛未 = 1126-09-26 Jülyen; 『克真定』; metindeki 井陘 sentence'ı «辛未，宗望破宋…師閔于井陘，取天威軍»). Song egemenliği (Zhending fu / Hebei) bu kümede Song shi coğrafyasından okunmadı. · DOGU-500-1281"},{f:"1126-09-26",t:"1225-05-09",d:"jin-hanedani",kesinlik:"gun",kaynak:"Jin shi, juan 3 «克真定» (1126-09-26) ‖ BİTİŞ: Jin shi, juan 17 «Aizong ji shang» (zh.wikisource.org/wiki/金史/卷17): 「夏四月辛卯朔，恆山公武仙自真定府來奔。」 (正大二年 4. ay 辛卯朔 = 1225-05-09 Jülyen) · BEYAN: Yuan shi 1: 「木華黎徇地至真定，武仙出降。以史天倪為河北西路兵馬都元帥」 (1218) ; 「武仙以真定叛，殺史天倪。」; Jin shi 15: 「甲辰，威州刺史武仙…尋進仙權知真定府事」, 「真定招撫使武仙」 — 1218-1225 arası Wu Xian (Jin 'Hengshan gong') yönetiminde Jin-Moğol arası gidiş gelişler tek bir kalıcı gün vermiyor; Wu Xian'ın şehri terk ettiği gün (1225-05-09) Moğol devri alındı (BEYANLI YAKLAŞIKLIK). · DOGU-500-1281"},{f:"1225-05-09",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:"gun",kaynak:"Jin shi, juan 17 «恆山公武仙自真定府來奔» (1225-05-09) ‖ BİTİŞ: Moğol künye t=1260-01-01 · Song Lian vd., Yuan shi, juan 4 «Shizu ji 1» (zh.wikisource.org/wiki/元史/卷004): 「中統元年春三月戊辰朔，車駕至開平。…辛卯，帝即皇帝位」 ; «丙戌，建元中統，詔曰…可自庚申年五月十九日，建元為中統元年» · devir günü künye f=1260-01-01 (YIL DÜZEYİ; gerçek ilan 1260 3. ay 辛卯, ad 'Da Yuan' 1271: Yuan shi 7 «可建國號曰大元») · BEYAN: Şehre Moğol (Shi Tianze) yönetiminin giriş günü kaynakta okunmadı; Wu Xian'ın ayrılışı devir sayıldı. · DOGU-500-1281"},{f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"Song Lian vd., Yuan shi, juan 4 «Shizu ji 1» (zh.wikisource.org/wiki/元史/卷004): 「中統元年春三月戊辰朔，車駕至開平。…辛卯，帝即皇帝位」 ; «丙戌，建元中統，詔曰…可自庚申年五月十九日，建元為中統元年» · devir günü künye f=1260-01-01 (YIL DÜZEYİ; gerçek ilan 1260 3. ay 辛卯, ad 'Da Yuan' 1271: Yuan shi 7 «可建國號曰大元») · DOGU-500-1281"},{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Kalgan (Zhangjiakou) — Çin Seddi'nin kuzey kapısı ve Moğolistan
// kervan yolunun başlangıcı.
{ ad:"Kalgan (Zhangjiakou)", tur:"kale", lat:40.8120, lon:114.8790, g:0, k:4, d:[],
  kur:"1429-01-01",
  s:[{f:"1429-01-01", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Cehol (Chengde) — Kangxi 1703'te yazlık sarayı kurdurdu (kur:); Qing'in
// Moğol ve Tibet siyasetinin yürütüldüğü ikinci merkezdir.
{ ad:"Cehol (Chengde)", tur:"sehir", lat:40.9760, lon:117.9390, g:0, k:3, d:[],
  kur:"1703-01-01",
  s:[{f:"1703-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// ===== 3b. Şansi ve Şensi =====

// Datong — Seddi'n en çok saldırı alan kesimi; Altan Han'ın 1550'deki
// Pekin baskını buradan geçti.
{ ad:"Datong", tur:"kale", lat:40.0760, lon:113.3000, g:0, k:4, d:[],
  s:[{f:"1000-01-01",t:"1122-05-10",d:"liao-hanedani",kesinlik:{f:"belirsiz",t:"gun"},kaynak:"«晉雲州大同軍節度，遼重熙十三年，升為西京，府名大同，金因之» «太宗以皇都為上京，升幽州為南京，改南京為東京，聖宗城中京，興宗升雲州為西京» Jinshi 24 (西京路 大同府): Yunzhou/Datong Liao 重熙十三年 (1044) Batı Başkenti; Liaoshi 37. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1122-05-10",t:"1218-08-23",d:"jin-hanedani",kesinlik:{f:"gun",t:"ay"},kaynak:"«四月辛卯，復取西京。壬辰，遣徒單吳甲、高慶裔如宋。戊戌，都統杲自西京趨白水濼» «晉雲州大同軍節度，遼重熙十三年，升為西京，府名大同，金因之» Jinshi 2: 天輔六年三月壬申 「西京降」, 乙亥 「西京復叛」, 四月辛卯 「復取西京」 → kalıcı Jin sahipliği 四月辛卯’den (ilk teslim 3 gün sürdü; BEYAN). f: Gün çevirimi: Jinshi 2 天輔六年四月辛卯 (「復取西京」) → Jülyen 1122-05-10 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 4/3; 金太祖天輔6年(歲次壬寅)4月3日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},{f:"1218-08-23",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:{f:"ay",t:"yil"},kaynak:"«十三年戊寅秋八月，兵出紫荊口，獲金行元帥事張柔，命還其舊職。木華黎自西京入河東，克太原、平陽及忻、代、澤、潞、汾、霍等州» «進攻西京，錄功，賜金虎符，以本職充西京留守，兼兵馬副元帥» BEYAN, tarih yaklaşıklığı (devir günü): Yuanshi 1 太祖十三年戊寅 (1218) Mukali’nin Xijing’den hareket ettiğini (Moğol üssü) gösterir. Moğol hâkimiyeti daha erken olabilir: Yuanshi 149 劉伯林傳 (Liu Bolin, 1212 sonrası 西京留守), Yuanshi 1 癸酉 (1213) 秋七月 Jin Xijing komutanı Hushahu kaçtı; ancak Jinshi 14 貞祐二年 (1214) 三月 「西京軍民變，遣官撫諭之」 ve Jinshi 24 「貞祐二年五月升為雲州」 Jin idaresinin 1214’te sürdüğünü gösterir → kaynaklar çelişkili; ilk GÜVENLİ Moğol üssü kaydı (1218-08) alındı. f: Ay hassasiyeti: Yuanshi 1 太祖十三年戊寅秋八月 (gün kaynakta yok) → ayın 1. günü Jülyen 1218-08-23 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 8/1; 元太祖13年(歲次戊寅)8月1日). · VERI-MS1-1281"},{f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"«金改總管府。元初置警巡院。至元二十五年，改西京為大同路» Yuanshi 58 (地理一 大同路). f: Yıl hassasiyeti, KÜNYE ÖMRÜ SINIRI: devletler.js mogol-imparatorlugu t=1260-01-01 = yuan-hanedani f=1260-01-01 (atlas künyesi, DAYANAK DEĞİL; dilim ucu künye ömrü içinde kalsın diye bu güne konuldu). Kubilay tahta çıkışı: Yuanshi 4 «辛卯，帝即皇帝位，以禡禡、趙璧、董文炳為燕京路宣慰使» ; Çin tarihi 中統元年春三月辛卯 → Jülyen 1260-05-05 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen) tablo etiketi 3/24; 宋理宗景定元年(歲次庚申)3月24日) — künye ömrü f=1260-01-01 olduğundan sınır bu güne çekilemedi, künye düzeltme önerisi celiskiler alanında. · VERI-MS1-1281"},{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-05-31", d:"ming-hanedani"},
     {f:"1644-05-31", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Taiyuan", tur:"sehir", lat:37.8700, lon:112.5480, g:1, k:3, d:[],
  s:[{f:"0895-01-01",t:"0923-05-13",d:"tang-jin-shatuo-prensligi",kesinlik:"yil",kaynak:"Sima Guang, Zizhi tongjian, juan 260 (zh.wikisource.org/wiki/資治通鑑/卷260; açıldı, okundu; Qianning 2 / 895 bölümü): «乙未，進李克用爵晉王，加李罕之兼侍中。»; Xin Wudai shi, juan 4 (zh.wikisource.org/wiki/新五代史/卷04; okundu): «拜克用「忠正平難功臣」，封晉王。» ‖ bitiş: Xin Wudai shi, juan 5 «Tang benji» (zh.wikisource.org/wiki/新五代史/卷05; okundu): «同光元年…夏四月己巳，皇帝即位，大赦，改元，國號唐。…以魏州為東京，太原為西京，鎮州為北都。» · DOGU-500-1281"},{f:"0923-05-13",t:"0936-11-28",d:"sonraki-tang-5hanedan",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 5 «Tang benji» (zh.wikisource.org/wiki/新五代史/卷05; okundu): «同光元年…夏四月己巳，皇帝即位，大赦，改元，國號唐。…以魏州為東京，太原為西京，鎮州為北都。» ‖ bitiş: Xin Wudai shi, juan 8 «Jin benji» (zh.wikisource.org/wiki/新五代史/卷08; okundu): «十一月丁酉，皇帝即位，…國號晉。以幽、涿、薊、檀、順、瀛、莫、蔚、朔、雲、應、新、媯、儒、武、寰州入于契丹。» · DOGU-500-1281"},{f:"0936-11-28",t:"0947-03-10",d:"sonraki-jin-5hanedan",kesinlik:{"f": "gun", "t": "gun"},kaynak:"Ouyang Xiu, Xin Wudai shi, juan 8 «Jin ben ji» (zh.wikisource.org/wiki/新五代史/卷08, okundu): 「十一月丁酉，皇帝即位，……國號晉。以幽、涿、薊、檀、順、瀛、莫、蔚、朔、雲、應、新、媯、儒、武、寰州入于契丹。」 · Ouyang Xiu, Xin Wudai shi, juan 7 «Tang Fei-di ben ji» (zh.wikisource.org/wiki/新五代史/卷07, okundu): 「丁酉，契丹立晉。閏月甲子，楊光遠殺張敬達，……辛巳，皇帝崩。〈年五十一，帝自焚死，晉高祖命葬其燼骨於徽陵域中。〉」 · BEYAN: BEYANLI YAKLAŞIKLIK: Taiyuan Shi Jingtang'ın valilik merkeziydi; Tang'dan kopuş günü olarak imparator ilan günü alındı. · DOGU-500-1281"},{f:"0947-03-10",t:"0951-02-24",d:"sonraki-han-5hanedan",kesinlik:{"f": "gun", "t": "gun"},kaynak:"Ouyang Xiu, Xin Wudai shi, juan 10 «Han ben ji» (zh.wikisource.org/wiki/新五代史/卷10, okundu): 「二月戊辰，河東行軍司馬張彥威等上牋勸進。辛未，皇帝即位，稱天福十二年。」 · BEYAN: Taiyuan Liu Zhiyuan'ın valilik merkeziydi (Jin'e bağlı vali). · DOGU-500-1281"},{f:"0951-02-24",t:"0979-06-03",d:"kuzey-han-10krallik",kesinlik:{"f": "gun", "t": "gun"},kaynak:"Ouyang Xiu, Xin Wudai shi, juan 11 «Zhou ben ji» (zh.wikisource.org/wiki/新五代史/卷11, okundu): 「廣順元年春正月丁卯，皇帝即位，大赦，改元，國號周。……戊寅，漢劉崇自立于太原。」 · BEYAN: Künye f=0951-02-24 ile örtüşür. · DOGU-500-1281"},{f:"0979-06-03",t:"1000-01-01",d:"song",kesinlik:{"f": "gun", "t": "gun"},kaynak:"Tuotuo vd., Song shi, juan 4 «Taizong ben ji 1» (zh.wikisource.org/wiki/宋史/卷004, okundu): 「五月己卯朔……癸未，進攻，……是夜，繼元遣使納款。甲申，繼元降，北漢平，凡得州十、縣四十、戶三萬五千二百二十。」; 「戊子，以榆次縣為新并州。」; 「丙申，幸城北，御沙河門樓。盡徙餘民于新城，遣使督之，既出，即命縱火。」 · BEYAN: Eski şehir 979-06-15'te yakıldı; atlas noktası bugünkü Taiyuan (Yangqu yakını). · DOGU-500-1281"},{f:"1000-01-01",t:"1126-09-21",d:"song",kesinlik:{f:"belirsiz",t:"gun"},kaynak:"«太原府，太原郡，河東節度。太平興國四年，平劉繼元，降爲緊州，軍事，毀其城» Songshi 86 (地理二 河東路 太原府): 979’da Song Kuzey Han’ı (劉繼元) yıkıp şehri aldı (1000 öncesi). f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1126-09-21",t:"1218-08-23",d:"jin-hanedani",kesinlik:{f:"gun",t:"ay"},kaynak:"«九月丙寅，宗翰克太原，執經略使張孝純。鶻沙虎取平遙、靈石、孝義、介休諸縣» Jinshi 3 (太宗本紀) 天會四年: Taiyuan 9 aylık kuşatmadan sonra düştü. f: Gün çevirimi: Jinshi 3 天會四年九月丙寅 → Jülyen 1126-09-21 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 9/3; 金太宗天會4年(歲次丙午)9月3日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},{f:"1218-08-23",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:{f:"ay",t:"yil"},kaynak:"«十三年戊寅秋八月，兵出紫荊口，獲金行元帥事張柔，命還其舊職。木華黎自西京入河東，克太原、平陽及忻、代、澤、潞、汾、霍等州» Yuanshi 1 太祖十三年戊寅 (1218) 秋八月 (ay hassasiyeti). Yuanshi 58 太原路 (校勘記’daki orijinal metin) kuruluşu 「戊寅歲九月」 verir → bir ay farkı; benzer tarih, bkz. celiskiler. f: Ay hassasiyeti: Yuanshi 1 太祖十三年戊寅秋八月 (gün kaynakta yok) → ayın 1. günü Jülyen 1218-08-23 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 8/1; 元太祖13年(歲次戊寅)8月1日). · VERI-MS1-1281"},{f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"«大德九年，以地震改冀寧路。戶七萬五千四百四，口一十五萬五千三百二十一» Yuanshi 58 (地理一 太原路 → 冀寧路, 1305). f: Yıl hassasiyeti, KÜNYE ÖMRÜ SINIRI: devletler.js mogol-imparatorlugu t=1260-01-01 = yuan-hanedani f=1260-01-01 (atlas künyesi, DAYANAK DEĞİL; dilim ucu künye ömrü içinde kalsın diye bu güne konuldu). Kubilay tahta çıkışı: Yuanshi 4 «辛卯，帝即皇帝位，以禡禡、趙璧、董文炳為燕京路宣慰使» ; Çin tarihi 中統元年春三月辛卯 → Jülyen 1260-05-05 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen) tablo etiketi 3/24; 宋理宗景定元年(歲次庚申)3月24日) — künye ömrü f=1260-01-01 olduğundan sınır bu güne çekilemedi, künye düzeltme önerisi celiskiler alanında. · VERI-MS1-1281"},{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-03-16", d:"ming-hanedani"},
     {f:"1644-03-16", t:"1644-10-01", d:"dashun"},
     {f:"1644-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Pingyao", tur:"sehir", lat:37.2010, lon:112.1750, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-03-16", d:"ming-hanedani"},
     {f:"1644-03-16", t:"1644-10-01", d:"dashun"},
     {f:"1644-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Xi'an (Chang'an) — Li Zicheng 11 Ekim 1643'te aldı ve 8 Şubat 1644'te
// Şun hanedanını burada ilân etti; yani Şun devleti PEKİN'DEN ÖNCE
// buradadır. Qing, Tongguan geçidini aşarak 18 Ocak 1645'te girdi.
{ ad:"Xi'an (Chang'an)", tur:"sehir", lat:34.3420, lon:108.9400, g:2, k:2,kd:[{f:"1644-01-01",t:"1647-01-01",k:1,m:"Xi'an (Chang'an)"}], d:[],
  s:[
     {f:"-0349-01-01",t:"-0220-01-01",d:"qin-devleti",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye qin-devleti (Qin Devleti) · Shiji 5 (Qin benji), Xiaogong 12. yıl: başkent Xianyang'a taşındı (Xianyang atlas noktasından ~21 km; aynı Wei ovası). Qin'in Guanzhong'daki sahipliği bundan eskidir — o ilk gün kaynakta yok."},
     {f:"-0220-01-01",t:"-0206-01-01",d:"qin-hanedani",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye qin-hanedani (Qin Hanedanı (birleşik İmparatorluk)) · Shiji 6, Qin Shi Huang 26. yıl: 'ilk kez bütün ülkeyi birleştirdi' (devlet Qin kimliği değişimi; Chang'an/Xianyang Qin çekirdeğidir)"},
     {f:"-0206-01-01",t:"-0201-01-01",d:"__BOSLUK__",kesinlik:{f:"onyil",t:"onyil"},kaynak:"BEYAN (VERI-MO-ARKEO): kaynak \"qin-hanedani\" sahibini -0201-01-01'a dek veriyor ama künye t=-0206-01-01 → künye sonrası boşluk"},
     {f:"-0201-01-01",t:"0008-01-01",d:"bati-han",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye bati-han (Bati Han Hanedani) · Hanshu 1 (Gaodi ji) 5. yıl: 'o gün arabayla batıya, Chang'an'a başkent geldi'; 7. yıl: Yueyang'dan Chang'an'a başkent taşındı. Han'ın Guanzhong'a hükmü MÖ 206'dan eskidir (Xiang Yu'nun üçe bölmesi) — bu turda okunmadı."},
     {f:"0008-01-01",t:"0009-01-10",d:"__BOSLUK__",kesinlik:{f:"onyil",t:"onyil"},kaynak:"BEYAN (VERI-MO-ARKEO): kaynak \"bati-han\" sahibini 0023-01-01'a dek veriyor ama künye t=0008-01-01 → künye sonrası boşluk"},
     {f:"0009-01-10",t:"0023-10-06",d:"xin-hanedani",kesinlik:{f:"gun",t:"gun"},kaynak:"Ban Gu, Hanshu juan 99 «Wang Mang zhuan» (zh.wikisource.org/wiki/漢書/卷099上, 099中, 099下, bu oturumda okundu): «戊辰，莽至高廟拜受金匱神嬗。御王冠…以戊辰直定，御王冠，即真天子位，定有天下之號曰新…以十二月朔癸酉為建國元年正月之朔» ; «始建國元年正月朔，莽帥公侯卿士奉皇太后璽韍…去漢號焉。» ; son: «十月戊申朔，兵從宣平城門入…三日庚戌，晨旦明…商人杜吳殺莽，取其綬。» | ic_not_takvim: ganzhi gün adı 戊辰 → Jülyen 0009-01-10 (JDN hesabı; sınama 乙卯 = 220-11-25, 丁酉 = 311-07-13; 癸酉 朔 = 0009-01-15 → 戊辰, ilk ayın başından 5 gün önce, metinle tutarlı) = Gregoryen 0009-01-10 (1582 öncesi gün Jülyen kalır); 戊申 朔 = 0023-10-04, 三日 庚戌 = 0023-10-06 (Jülyen). BEYANLI YAKLAŞIKLIK: iktidar devri Wang Mang'ın «即真天子位» günü (戊辰) alındı; yeni takvimin ilk günü 癸酉 (0009-01-15) sonradır. Dönem sonu Wang Mang'ın Jiantai'de öldürüldüğü gündür (Chang'an'ın fiilî düşüşü); Gengshi dönemi bu günden başlatıldı (önceki 0023-01-01 başı okunan kaynakla desteklenmiyordu: Hanshu 99 xia'ya göre Gengshi 3. ayda taht ilan etti, Chang'an Ekim'de alındı). Künyenin f/t günleri kendi kaynağıyla aynı çıktı (çift teyit). · ASYA-ZINCIR-1024 (F5)"},
     {f:"0023-10-06",t:"0025-01-01",d:"gengshi",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye gengshi (Gengshi Rejimi (Xuan Han / Lulin)) · Hou Han shu 11 (Liu Xuan): Chang'an'da Mang'a karşı ayaklanma; 9. ay Gongbin Jiu Mang'ı Jiantai'de öldürdü; Gengshi Luoyang'a gitti, Shentu Jian/Li Song Chang'an'dan ulaklık yolladı, 2. yıl (24) 2. ay Gengshi Luoyang'dan batıya (Chang'an) yürüdü. Son uç: Hou Han shu 1a, Jianwu 1 9. ay Chimei Chang'an'a girdi, Gengshi Gaoling'e kaçtı."},
     {f:"0025-01-01",t:"0027-01-01",d:"chimei-jianshi",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye chimei-jianshi (Kızıl Kaşlılar Rejimi (Jianshi)) · Hou Han shu 1a, Jianwu 1: Chimei Chang'an'a girdi, saray yaktı; aynı ay Deng Yu Chang'an'a girip 11 imparatorun tabletlerini Gao Miao'ya götürdü (kısa süreli Han girişi). Chimei'nin Chang'an'dan çıkışı (künye t=0027) bu turda okunmadı."},
     {f:"0027-01-01",t:"0030-05-28",d:"__BOSLUK__",kesinlik:{f:"onyil",t:"gun"},kaynak:"BEYAN: chimei-jianshi dönemi atlasta 0027-01-01'de bitiyor (önceki dilim); tarihçe 0026-12-28 verir, 4 gün farkla atlas sınırı korundu ‖ Hou Hanshu 17 (後漢書/卷17, 馮異傳) — https://zh.wikisource.org/wiki/後漢書/卷17 ‖ Hou Hanshu 17: Chiimei teslim olduktan sonra '張邯據長安' (diğer warlord'larla) ve 'Feng Yi Guanzhong'u temizledi; 惟呂鮪、張邯、蔣震遣使降蜀'. Chang'an'ın bu aralıkta tek bir sahipte (Zhang Han / Shu / Dong Han) kaç gün kaldığı kaynakta gün gün okunmadı; uydurma sahip yazılmadı. Aranan: Hou Hanshu 1上/1下/11/16/17. Kaynakta okunan en geç Dong Han tanığı: Hou Hanshu 1下 '夏四月丙子，幸長安，始謁高廟' (建武六年 = 0030-05-28). · CIN-SANGUO"},
     {f:"0030-05-28",t:"0220-12-10",d:"dogu-han",kesinlik:{f:"gun",t:"gun"},kaynak:"Hou Hanshu 1下 · Hou Hanshu 9 (獻帝紀) — https://zh.wikisource.org/wiki/後漢書/卷9 ‖ f 'en geç tanıktan': Hou Hanshu 1下 建武六年 '夏四月丙子，幸長安' (0030-05-28, Sinica). Hou Hanshu 9: '丁亥，遷都長安' (0190-04-09), '車駕入長安' (0190-04-27): 190'dan itibaren başkent Chang'an (Dong Zhuo, Li Jue–Guo Si; Xian Di'nin ayrılış günü bu oturumda okunmadı); sahip yine Dong Han. Künye f=0025-01-01. t: Sanguozhi Wei 2 Wendi ji '王升壇即阼'. · CIN-SANGUO"},
     {f:"0220-12-10",t:"0266-02-08",d:"cao-wei",kesinlik:{f:"gun",t:"gun"},kaynak:"Sanguozhi Wei 2 (三國志/卷02) · Jin shu 3 — https://zh.wikisource.org/wiki/三國志/卷02 ‖ Sanguozhi Wei 2 (Pei Songzhi notu, Weilüe): '改長安、譙、許昌、鄴、洛陽爲五都' — Chang'an Wei'nin 5 başkentinden biri. f: ana metin '庚午，王升壇即阼' (220 10. ay 庚午 = 0220-12-10); Xiandi zhuan alıntısı '辛未' (= 0220-12-11) der — ana metin esas alındı. t: Jin shu 3 '泰始元年冬十二月丙寅，設壇于南郊' (0266-02-08). · CIN-SANGUO"},
     {f:"0266-02-08",t:"0316-12-11",d:"bati-jin",kesinlik:{f:"gun",t:"gun"},kaynak:"Jin shu 3 · Jin shu 5 · Jin shu 14 (晉書/卷014) — https://zh.wikisource.org/wiki/晉書/卷014 ‖ Jin shu 14 (Dili): '京兆郡…長安'; Jin shu 5: '南陽王模爲征西大將軍、都督秦雍梁益四州諸軍事，鎮長安'. Han (Han-Zhao) 311'de Chang'an'ı aldı (Jin shu 5 '劉聰使子粲攻陷長安') ve 312'de Jia Pi tarafından çıkarıldı — ≈8–14 ay: dönem açılmadı, olay yazıldı. t: Jin shu 5 '帝乘羊車，肉袒銜壁，輿櫬出降' (建興四年 11. ay 乙未 = 0316-12-11, Sinica). · CIN-SANGUO"},
     {f:"0316-12-11",t:"0329-04-14",d:"han-zhao",kesinlik:{f:"gun",t:"ay"},kaynak:"Jin shu 5 · Jin shu 103 (劉曜載記) · Jin shu 7 · Jin shu 105 — https://zh.wikisource.org/wiki/晉書/卷103 ‖ Jin shu 103: '徙都長安，起光世殿於前' (Liu Yao 318, 太興元年 '光初'). t: Jin shu 7 咸和四年 2. ay 壬寅 '劉曜太子毗…奔於上邽，關中大亂' (0329-04-14, Jin sarayı kayıt günü) ve Jin shu 105 '劉曜子熙等去長安，奔於上邽' — olayın kendi günü kaynakta yok → ay hassasiyeti. Künye han-zhao t=0329-01-01 (aşım ≈3,5 ay; GENİŞLET önerisi). · CIN-SANGUO"},
     {f:"0329-04-14",t:"0351-02-17",d:"hou-zhao",kesinlik:{f:"ay",t:"gun"},kaynak:"Jin shu 105 · Jin shu 106 · Jin shu 107 · Jin shu 112 — https://zh.wikisource.org/wiki/晉書/卷106 ‖ Sonraki Zhao (Shi Le/Shi Hu): Jin shu 106 '以石苞代鎮長安', '發雍、洛、秦、并州十六萬人城長安未央宮' (Shi Hu); Jin shu 107 '石苞時鎮長安'. 334'te Shi Sheng'in isyanı Shi Hu'since bastırıldı ('進攻長安，旬餘拔之', Jin shu 105): sahip değişmez. Jin shu 112: 349/350 sonrası '京兆杜洪竊據長安，自稱晉征北將軍、雍州刺史' — Du Hong dönemi tarihsiz ve kısa, dönem açılmadı. t: Jin shu 8 永和七年正月辛丑 '苻健僭稱王，國號秦' (0351-02-17 Jin sarayı kayıt günü); Jin shu 112 '健入而都之'. Künyesi yok: 'sonraki-zhao' önerilir. · CIN2-MS317"},
     {f:"0351-02-17",t:"0385-07-24",d:"onceki-qin",kesinlik:{f:"gun",t:"ay"},kaynak:"Jin shu 112 (苻健載記) · Jin shu 8 · Jin shu 9 — https://zh.wikisource.org/wiki/晉書/卷112 ‖ Önceki Qin (Fu Jian'ın Qin'i): Jin shu 112 '健引兵至長安，洪奔司竹。健入而都之', '置百官于長安'. 354'te Huan Wen (Doğu Jin) Bashang'a kadar geldi, şehri almadı (Jin shu 8). t: Jin shu 9 太元十年 '苻堅留太子宏守長安，奔于五將山', '六月，宏來降，慕容沖入長安' (6. ay başı = 0385-07-24, Sinica). Künyesi yok: 'onceki-qin' önerilir. · CIN2-MS317"},
     {f:"0385-07-24",t:"0386-05-15",d:"bati-yan",kesinlik:{f:"ay",t:"ay"},kaynak:"Jin shu 9 · Jin shu 116 (姚萇載記) · Zizhi tongjian 106 (資治通鑑/卷106) ‖ Batı Yan (Murong Chong, Xianbei): Jin shu 9 '慕容沖入長安', 386 baharında '慕容沖將許木末殺慕容沖于長安'; ZZTJ 106 '帥鮮卑男女四十餘萬口去長安而東' (Xianbei doğuya gitti), ardından Hao Nu kısa süre Chang'an'a girdi ('鮮卑既東，長安空虛。…郝奴…入於長安'; süre/gün yok → dönem açılmadı). t: ZZTJ 106 '夏，四月，後秦王萇自安定伐之' (4. ay başı = 0386-05-15, Sinica) — ay hassasiyeti. Künyesi yok: 'bati-yan' önerilir. · CIN2-MS317"},
     {f:"0386-05-15",t:"0417-08-28",d:"sonraki-qin",kesinlik:{f:"ay",t:"ay"},kaynak:"Jin shu 116 · Zizhi tongjian 106 · Song shu 2 (宋書/卷2) · Jin shu 10 ‖ Sonraki Qin (Yao Chang … Yao Hong): Jin shu 116 '以太元十一年萇僭即皇帝位於長安'; ZZTJ 106 '後秦王萇即皇帝位於長安，大赦，改元建初'. t: Song shu 2 (Wudi ji) '八月…王鎮惡剋長安，生擒泓' (8. ay başı = 0417-08-28) — ama Jin shu 10 '秋七月，劉裕克長安，執姚泓' der (7. ay başı = 0417-07-30): iki kaynak arasında 1 ay fark; Song shu (Liu Yu'nun kendi biyografisi, '九月，公至長安' ile süreklilik) esas alındı. Künyesi yok: 'sonraki-qin' önerilir. · CIN2-MS317"},
     {f:"0417-08-28",t:"0418-12-14",d:"dogu-jin",kesinlik:{f:"ay",t:"ay"},kaynak:"Song shu 2 · Jin shu 10 (晉書/卷010) ‖ Liu Yu'nun fethi: Song shu 2 '王鎮惡剋長安'; sonra Wang Zhen'e'nin öldürülmesi (Jin shu 10 義熙十四年春 '沈田子害龍驤將軍王鎮惡于長安'). t: Jin shu 10 義熙十四年 '十一月，赫連勃勃大敗王師于青泥北。雍州刺史朱齡石焚長安宮殿，奔于潼關' (11. ay başı = 0418-12-14, Sinica). · CIN2-MS317"},
     {f:"0418-12-14",t:"0427-01-14",d:"hu-xia",kesinlik:{f:"ay",t:"ay"},kaynak:"Jin shu 130 (赫連勃勃載記) · Wei shu 4上 (魏書/卷4上) ‖ Hu Xia (Helian Bobo): Jin shu 130 '勃勃大饗將士于長安'; Wei shu 4上 '昌弟助興守長安' (Helian Chang). t: Wei shu 4上 始光三年 '十有二月，詔斤西據長安' (12. ay başı = 0427-01-14, Sinica); Xia garnizonu 11. ayda ('乙升復與助興自長安西走安定') ayrılmıştı — aradaki ≤1 ay Wei lehine katlandı. Künyesi yok: 'hu-xia' önerilir (ömür: Jin shu 130). · CIN2-MS317"},
     {f:"0427-01-14",t:"0535-01-20",d:"kuzey-wei",kesinlik:{f:"ay",t:"ay"},kaynak:"Wei shu 4上 · Zhou shu 1 (周書/卷01) — https://zh.wikisource.org/wiki/周書/卷01 ‖ Kuzey Wei: Wei shu 4上 '詔斤西據長安'; '遣高涼王禮鎮長安' (427-03). 534'te Xiaowu Di Chang'an'a sığındı (Zhou shu 1 '七月丁未，帝遂從洛陽率輕騎入關…乃奉帝都長安' = 0534-08-21): sahip hâlâ Kuzey Wei. t: Zhou shu 1 '閏十二月，魏孝武帝崩…尊立魏南陽王寶炬為嗣，是為文皇帝' (534 閏12. ay başı = 0535-01-20, Sinica). · CIN2-MS317"},
     {f:"0535-01-20",t:"0557-02-15",d:"bati-wei",kesinlik:{f:"ay",t:"gun"},kaynak:"Zhou shu 1 · Zhou shu 3 (周書/卷03) ‖ Batı Wei (başkent Chang'an): Zhou shu 1 '乃奉帝都長安'. t: Zhou shu 3 '元年春正月辛丑，即天王位' (0557-02-15, Sinica). · CIN2-MS317"},
     {f:"0557-02-15",t:"0581-03-04",d:"kuzey-zhou",kesinlik:{f:"gun",t:"gun"},kaynak:"Zhou shu 3 · Sui shu 1 (隋書/卷01) ‖ Kuzey Zhou (başkent Chang'an). t: Sui shu 1 '開皇元年二月甲子，上自相府常服入宮，備禮即皇帝位於臨光殿' (0581-03-04, Sinica). · CIN2-MS317"},
     {f:"0581-03-04",t:"0617-12-12",d:"sui",kesinlik:{f:"gun",t:"gun"},kaynak:"Sui shu 1 · Jiu Tang shu 1 (舊唐書/卷1) — https://zh.wikisource.org/wiki/隋書/卷01 ‖ Sui: Sui shu 1 開皇二年六月丙申 (0582-07-29) '創造新都' (Daxing); '丙子，名新都曰大興城' (0583-01-05); '三年…丙辰，雨，常服入新都' (0583-04-15). Şehir Han Chang'an'ın GD'sinde yeni yerleşime taşındı — atlas tek zincir tutuyor, mesafe ic_not'ta. t: Jiu Tang shu 1 義寧元年 '十一月丙辰，攻拔京城' (0617-12-12, Sinica); Li Yuan Yang You'yu kukla imparator yaptı ('癸亥…立代王侑為天子') — fiilî sahip Tang. · CIN2-MS317"},
     {f:"0617-12-12",t:"0690-10-16",d:"tang",kesinlik:{f:"gun",t:"gun"},kaynak:"Jiu Tang shu 1 · Jiu Tang shu 6 (舊唐書/卷6) ‖ Tang: Jiu Tang shu 1 '甲子，高祖即皇帝位於太極殿' (0618-06-18). Künye f=0618-01-01 (f 20 gün önce, pencere içinde). t: Jiu Tang shu 6 '九月九日壬午，革唐命，改國號為周' (Wu Zetian'ın Zhou takvimi: Sinica etiketleri 2 ay kaydırılmıştır; 壬午 = 0690-10-16 Jülyen, '9. ay 9. gün' Sinica'da 11/9). · CIN2-MS317"},
     {f:"0690-10-16",t:"0705-03-03",d:"wu-zhou",kesinlik:{f:"gun",t:"gun"},kaynak:"Jiu Tang shu 6 · Jiu Tang shu 7 (舊唐書/卷7) ‖ Wu Zhou (Wu Zetian): sahip künyesi VAR. t:Jiu Tang shu 7 '二月甲寅，復國號，依舊為唐' (0705-03-03, Sinica). · CIN2-MS317"},
     {f:"0705-03-03",t:"0756-07-14",d:"tang",kesinlik:{f:"gun",t:"gun"},kaynak:"Jiu Tang shu 7 · Jiu Tang shu 9 (舊唐書/卷9) ‖ Tang. t: Jiu Tang shu 9 '乙未，凌晨自延秋門出' (Xuanzong kaçışı, 756 6. ay 乙未 = 0756-07-14). Şehri isyancılar ≈10 gün sonra aldı (ZZTJ 218 '凡十日，乃遣孫孝哲將兵入長安'): ara ≈10 gün Tang lehine katlandı (beyan). · CIN2-MS317"},
     {f:"0756-07-14",t:"0757-11-14",d:"an-lushan-yan",kesinlik:{f:"gun",t:"gun"},kaynak:"ZZTJ 218 (資治通鑑/卷218) · Jiu Tang shu 10 (舊唐書/卷10) ‖ Yan (An Lushan): ZZTJ 218 '乃遣孫孝哲將兵入長安，以張通儒為西京留守，崔光遠為京兆尹'. ≈16 ay → ≥1 yıl eşiği: dönem açıldı. t: Jiu Tang shu 10 至德二載 '癸卯，廣平王收西京' (9. ay 癸卯 = 0757-11-14, Sinica). Künyesi yok: 'yan-an-lushan' önerilir. · CIN2-MS317"},
     {f:"0757-11-14",t:"0881-01-08",d:"tang",kesinlik:{f:"gun",t:"gun"},kaynak:"Jiu Tang shu 10 · Jiu Tang shu 200下 ‖ Tang. 763'te Tibet Chang'an'a girdi (Jiu Tang shu 11 '戊寅，吐蕃入京師' 0763-11-18 → '庚寅，子儀收京城' 0763-11-30: 12 gün) ve 783'te Zhu Ci (Jiu Tang shu 12/200下, ≈8 ay): <1 yıl → olay. t: Jiu Tang shu 200下 (Huang Chao) '五日，賊陷京師' (廣明元年 12. ay 5. gün = 0881-01-08, Sinica). · CIN2-MS317"},
     {f:"0881-01-08",t:"0883-05-20",d:"tai-qi-huang-chao",kesinlik:{f:"gun",t:"gun"},kaynak:"Jiu Tang shu 200下 · Xin Tang shu 9 (新唐書/卷009) ‖ Qi (Huang Chao, 大齊): '十三日，賊巢僭位，國號大齊，年稱金統'. ≈28 ay → dönem. t: Xin Tang shu 9 中和三年 '四月…丙午，復京師' (4. ay 丙午 = 0883-05-20, Sinica). Künyesi yok: 'tai-qi-huang-chao' önerilir. · CIN2-MS317"},
     {f:"0883-05-20",t:"0907-06-01",d:"tang",kesinlik:{f:"gun",t:"gun"},kaynak:"Xin Tang shu 10 (新唐書/卷010) · Xin Wudai shi 2 (新五代史/卷02) ‖ Tang (nominal). 904'te Zhu Wen sarayı Luoyang'a taşıdı ('天祐元年正月…戊午，全忠遷唐都于洛陽', 0904-02-11) ve Chang'an 'Youguo jun' oldu; ZZTJ 265 (905): '朱全忠以長安鄰於邠、岐，數有戰爭，奏徙佑國節度使韓建於淄青' — Chang'an Zhu Wen'in atadığı Youguo jun valilerince yönetiliyordu; Tang hanedanı adına yönetim 907'ye kadar sürdü (künye Tang t=0907-01-01'e yakın), sahip Tang olarak 907'ye taşındı. t: Xin Wudai shi 2 '開平元年…夏四月壬戌，更名晃。甲子，皇帝即位' (0907-06-01, Sinica). · CIN2-MS317"},
     {f:"0907-06-01",t:"0923-12-31",d:"sonraki-liang-5hanedan",kesinlik:{f:"gun",t:"gun"},kaynak:"Xin Wudai shi 2 · Xin Wudai shi 60 (新五代史/卷60) · ZZTJ 266/267/272 ‖ Xin Wudai shi 60 (Zhifang kao): '梁初改京兆府曰大安，佑國軍曰永平'; ZZTJ 266 '以京兆府為大安府，置佑國軍於大安府' (0907-06-05). 909'da Liu Zhijun Tongzhou'yu Qi'ye bağladı; Chang'an'ı Qi birlikleri kısa süre tuttu, Yang Shihou geri aldı (ZZTJ 267): ≤1 ay → olay. t 'en geç tanıktan': ZZTJ 272 '辛酉，復以永平軍大安府為西京京兆府' (11. ay 辛酉 = 0923-12-31; Liang'ın düşüşü 己卯 = 0923-11-19, 'Chang'an teslim günü' kaynakta yok). · CIN2-MS317"},
     {f:"0923-12-31",t:"0937-01-11",d:"sonraki-tang-5hanedan",kesinlik:{f:"gun",t:"gun"},kaynak:"ZZTJ 272 · Xin Wudai shi 60 · Xin Wudai shi 7 (新五代史/卷7) ‖ Xin Wudai shi 60 '唐滅梁，復為西京'. t: Xin Wudai shi 7 (Feidi) '閏月…辛巳，皇帝崩' (閏11. ay 辛巳 = 0937-01-11, Sinica); Shi Jingtang 936-11-28'de taht ilan etmişti (Xin Wudai shi 8 '十一月丁酉，皇帝即位') — Chang'an'ın tabiiyet geçiş günü kaynakta yok, Tang'ın son günü esas alındı. · CIN2-MS317"},
     {f:"0937-01-11",t:"0947-03-10",d:"sonraki-jin-5hanedan",kesinlik:{f:"gun",t:"gun"},kaynak:"Xin Wudai shi 60 · Xin Wudai shi 8 (新五代史/卷08) · Jiu Wudai shi 99 ‖ Xin Wudai shi 60 '晉廢為晉昌軍'; Xin Wudai shi 8 (天福三年) '庚辰，升汴州為東京，以洛陽為西京，雍州為晉昌軍' (0938-11-01). t: Jiu Wudai shi 99 '辛未，帝於太原宮受冊，即皇帝位，制改晉開運四年為天福十二年' (947 2. ay 辛未 = 0947-03-10, Sinica). Liao Kaifeng'i 947 başında aldı (Chang'an'ın bu süredeki durumu bu oturumda okunmadı) — Han'ın tahta çıkış günü 'en geç tanık'. · CIN2-MS317"},
     {f:"0947-03-10",t:"0951-02-13",d:"sonraki-han-5hanedan",kesinlik:{f:"gun",t:"gun"},kaynak:"Xin Wudai shi 60 · Xin Wudai shi 10 (新五代史/卷10) · Jiu Wudai shi 100 ‖ Xin Wudai shi 60 '漢改曰永興'; Jiu Wudai shi 100 '趙贊為晉昌軍節度使'. 948: Zhao Siwan Yongxing'de isyan etti ('永興軍將趙思綰叛附于李守貞' 0948-05-14; '郭威殺華州留後趙思綰于京兆' 0948-08-17) — sahip değişmedi. t: Xin Wudai shi 11 '廣順元年春正月丁卯，皇帝即位，大赦，改元，國號周' (0951-02-13, Sinica). · CIN2-MS317"},
     {f:"0951-02-13",t:"0960-02-04",d:"sonraki-zhou-5hanedan",kesinlik:{f:"gun",t:"gun"},kaynak:"Xin Wudai shi 60 · Xin Wudai shi 11 · Song shi 1 (宋史/卷1) ‖ Xin Wudai shi 60 '漢改曰永興，周因之'. t: Song shi 1 '建隆元年春正月乙巳，大赦，改元，定有天下之號曰宋' (0960-02-04, Sinica). · CIN2-MS317"},
     {f:"0960-02-04",t:"1000-01-01",d:"song",kesinlik:"gun",kaynak:"Tuotuo vd., Song shi, juan 1 «Taizu ben ji 1» (zh.wikisource.org/wiki/宋史/卷001): 「建隆元年春正月乙巳，大赦，改元，定有天下之號曰宋。」 · Xin Wudai shi, juan 12: 「七年春正月甲辰，遜于位。宋興。」 (Song'un kuruluşu 960-02-04; Zhou çocuk imparatorunun feragati 960-02-03 BEYANI: Kaifeng yamasıyla aynı) ‖ BİTİŞ: Tuotuo vd., Jin shi, juan 3 «Taizong ji» (zh.wikisource.org/wiki/金史/卷3): 「十月丙子朔，京兆府降。」 (天會七年 10. ay 丙子朔 = 1129-11-14 Jülyen); önceki giriş: 「宗翰復遣婁室攻下同、華、京兆、鳳翔，擒宋經制使傅亮。」 (天會六年 2. ay) — BEYAN: 1128'deki ilk fetih ile 1129-10 'teslim' arasındaki Song geri alımı kaynakta ayrıca okunmadı; kalıcı Jin devri 1129-11-14. Song'un Chang'an (Yongxing jun lu / Jingzhao fu) egemenliği Song shi coğrafya bölümünden okunmadı (Song shi 87; açılmadı) — Jin shi'nin 'Song valisi Fu Liang esir' ifadesi Song egemenliğini dolaylı teyit eder. · DOGU-500-1281"},
     {f:"1000-01-01",t:"1129-11-14",d:"song",kesinlik:{f:"belirsiz",t:"gun"},kaynak:"«永興軍節度。本次府，大觀元年升大都督府。舊領永興軍路安撫使。宣和二年，詔永興軍守臣等銜不用軍額，稱京兆府» Songshi 87 (地理三 永興軍路 京兆府): Song’da Yongxingjun/Jingzhao Fu; Chang’an Song sınırlarında. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},
     {f:"1129-11-14",t:"1139-04-16",d:"jin-hanedani",kesinlik:"gun",kaynak:"«宗翰復遣婁室攻下同、華、京兆、鳳翔，擒宋經制使傅亮。阿鄰破河中。斡魯入馮翊» «金併陝西為四路。元中統三年，立陝西四川行省，治京兆。至元初，併雲陽縣入涇陽，櫟陽縣入臨潼» Jinshi 3: 天會五年 (1127) Jin ilk kez Jingzhao’yu aldı, Song geri aldı; kalıcı Jin sahipliği 天會七年十月丙子朔 「京兆府降」 (Jülyen 1129-11-14). Liu Yu’nun Qi vassalliği (1130-1137, Jin himayesi) ayrı künye olmadığından Jin yazıldı (BEYAN). f: Gün çevirimi: Jinshi 3 天會七年十月丙子朔 (「十月丙子朔，京兆府降」; 朔 = ayın 1. günü) → Jülyen 1129-11-14 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 10/1; 金太宗天會7年(歲次己酉)10月1日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1139-04-16",t:"1140-06-06",d:"song",kesinlik:"gun",kaynak:"«丙申，王倫受地于金，得東西南三京、壽春、宿、亳、曹、單州及陝西、京西之地» Songshi 29 (高宗六): Jin, Henan ve Shaanxi’yi Song’a iade etti (Jinshi 4 天眷元年 八月己卯 「以河南地與宋」); Zhang Zhongfu Yongxing Jun’un valisi atandı. f: Gün çevirimi: Songshi 29 紹興九年三月丙申 → Jülyen 1139-04-16 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 3/16; 宋高宗紹興9年(歲次己未)3月16日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1140-06-06",t:"1231-09-28",d:"jin-hanedani",kesinlik:{f:"gun",t:"ay"},kaynak:"«癸巳，知亳州王彥先叛降于金。金人陷永興軍，趨鳳翔。丁酉，命胡世將移陝西之右護軍還屯蜀口» «五月丙子，詔元帥府復取河南、陝西地。己卯，詔冊李仁孝爲夏國王。命都元帥宗弼以兵自黎陽趨汴，右監軍撒離合出河中趨陝西。是月，河南平。六月，陝西平» Songshi 29 紹興十年五月癸巳: Jin Yongxingjun’u (Jingzhao) aldı; Jinshi 4 天眷三年: 「六月，陝西平」. f: Gün çevirimi: Songshi 29 紹興十年五月癸巳 → Jülyen 1140-06-06 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 5/20; 宋高宗紹興10年(歲次庚申)5月20日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1231-09-28",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:{f:"ay",t:"yil"},kaynak:"«大元兵駐河中府。慶山奴棄京兆東還。召合達、蒲阿赴汴» «是春，帝與拖雷獵于斡兒寒河，遂遣兵圍京兆。金主率師來援，敗之，尋拔其城» BEYAN, tarih yaklaşıklığı: Jinshi 17 正大八年 (1231) 四月 「兩行省棄京兆，遷居民于河南，留慶山奴守之」, 九月 Qingshannu da şehri terk etti; Moğol ilk yönetimi için gün/ay kaydı bulunamadı — boşalma ayı (1231-09) devir olarak alındı. Yuanshi 2 太宗二年庚寅 (1230) bahar 「尋拔其城」 der (Moğol tarafı) — Jin kaydıyla çelişir (bkz. celiskiler). Sonraki kesin Moğol yönetimi: Yuanshi 3 (明安答兒 守京兆). f: Ay hassasiyeti: Jinshi 17 正大八年九月 (gün kaynakta yok) → ayın 1. günü Jülyen 1231-09-28 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 9/1; 金哀宗正大8年(歲次辛卯)9月1日). · VERI-MS1-1281"},
     {f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"«金併陝西為四路。元中統三年，立陝西四川行省，治京兆。至元初，併雲陽縣入涇陽，櫟陽縣入臨潼» Yuanshi 60 (地理三 奉元路): 中統三年 (1262) Shaanxi-Sichuan eyaleti Jingzhao’da; 至元十六年 安西路. f: Yıl hassasiyeti, KÜNYE ÖMRÜ SINIRI: devletler.js mogol-imparatorlugu t=1260-01-01 = yuan-hanedani f=1260-01-01 (atlas künyesi, DAYANAK DEĞİL; dilim ucu künye ömrü içinde kalsın diye bu güne konuldu). Kubilay tahta çıkışı: Yuanshi 4 «辛卯，帝即皇帝位，以禡禡、趙璧、董文炳為燕京路宣慰使» ; Çin tarihi 中統元年春三月辛卯 → Jülyen 1260-05-05 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen) tablo etiketi 3/24; 宋理宗景定元年(歲次庚申)3月24日) — künye ömrü f=1260-01-01 olduğundan sınır bu güne çekilemedi, künye düzeltme önerisi celiskiler alanında. · VERI-MS1-1281"},
     {f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1643-10-11", d:"ming-hanedani"},
     {f:"1643-10-11", t:"1645-01-18", d:"dashun"},
     {f:"1645-01-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// ===== 3c. Orta ova (Henan, Şantung) =====

{ ad:"Luoyang", tur:"sehir", lat:34.6630, lon:112.4340, g:1, k:3, d:[],
  s:[
     {f:"-0769-01-01",t:"-0254-01-01",d:"dogu-zhou",kesinlik:{f:"yil",t:"yil"},kaynak:"Sima Qian, Shiji juan 14 «Shi'er zhuhou nianbiao» (zh.wikisource.org/wiki/史記/卷014, okundu; satır başlığı MÖ yıl): MÖ 770 satırı «平王元年東徙雒邑。» (Zhou sütunu) · Sima Qian, Shiji juan 15 «Liuguo nianbiao» (zh.wikisource.org/wiki/史記/卷015, bu oturumda okundu; tablo satırları MÖ yıl başlığı taşır): MÖ 256 satırı «五十九。赧王卒。» ; MÖ 255 satırı «取西周。王稽棄市。» (Qin sütunu); MÖ 249 satırı «取東周。» | BEYANLI YAKLAŞIKLIK: Luoyang bölgesi Wangcheng/Chengzhou olarak Zhou kralının oturduğu Batı Zhou topraklarıdır; Qin'in «Batı Zhou'yu alması» (MÖ 255) Luoyang penceresinin sonu olarak alındı. Doğu Zhou beyi Gong'da MÖ 249'a kadar sürdü; künye t buna göre MÖ 249'a genişletildi (aynı polity).  · ASYA-ZINCIR-1024 (F5)"},
     {f:"-0254-01-01",t:"-0220-01-01",d:"qin-devleti",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye qin-devleti (Qin Devleti) · Shiji 6: 'iki Zhou'yu yok edip Sanchuan komutanlığını kurdu' (Zhuangxiang 1 = MÖ 249'da Doğu Zhou'nun tamamı Qin'e katıldı; 256 Batı Zhou)."},
     {f:"-0220-01-01",t:"0023-01-01",d:"__BOSLUK__",kesinlik:{f:"onyil",t:"onyil"},kaynak:"BEYAN (VERI-MO-ARKEO): kaynak \"qin-devleti\" sahibini 0023-01-01'a dek veriyor ama künye t=-0220-01-01 → künye sonrası boşluk"},
     {f:"0023-01-01",t:"0025-01-01",d:"gengshi",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye gengshi (Gengshi Rejimi (Xuan Han / Lulin)) · Hou Han shu 11: Gengshi Luoyang'ı aldı ('ay içinde Luoyang alındı'), sonra 'kuzey başkent Luoyang' ilan etti. Son: Hou Han shu 1a Jianwu 1 10. ay Zhu Wei teslim, imparator Luoyang'a girdi."},
     {f:"0025-01-01",t:"0220-12-10",d:"dogu-han",kesinlik:{f:"onyil",t:"gun"},kaynak:"künye dogu-han (Dogu Han Hanedani) · Hou Han shu 1a, Jianwu 1: Guangwu Luoyang'a girdi, Gao Miao ve toprak-tahıl tapınaklarını Luoyang'da kurdu — Doğu Han başkenti. (Künye dogu-han f=0025 baskent Luoyang.) · t: 0220-12-10 (CIN-SANGUO: Han imparatoru Xian feragat etti, Cao Pi 庚午 günü tahta çıktı; Sanguozhi Wei zhi 2, Hou Han shu 9; künye dogu-han t bu paketle 0220-01-01 → 0220-12-10 çekildi)"},
     {f:"0220-12-10",t:"0266-02-08",d:"cao-wei",kesinlik:{f:"gun",t:"gun"},kaynak:"ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 庚午 (10. ay) → Jülyen 0220-12-10 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13) = Gregoryen 0220-12-10; 1582 öncesi gün Jülyen kalır ‖ Chen Shou, Sanguozhi (Wei zhi 2, «Wendi ji», zh.wikisource.org/wiki/三國志/卷02; açıldı, okundu): 「惟延康元年十月乙卯，皇帝曰：咨爾魏王」 (feragat fermanı, 乙卯 = 220-11-25) ; Han'ın sonu/Wei'nin başı: 10. ay 庚午 Cao Pi tahta çıktı = 0220-12-10 (ana metin; Xiandi zhuan alıntısı 辛未 = 0220-12-11 der, ana metin esas alındı; Chang'an ve Fuzhou tarihçe kayıtlarıyla aynı gün) ‖ Wei zhi 2: 「十二月，初營洛陽宮，戊午幸洛陽」 (Cao Pi Luoyang'a girdi; Luoyang Wei başkenti) ; Wei zhi 3 (zh.wikisource.org/wiki/三國志/卷03; okundu): 「夏四月丁酉，還洛陽宮」 (太和二年) ‖ bitiş: ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 丙寅 (泰始元年 12. ay) → Jülyen 0266-02-08 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13) = Gregoryen 0266-02-08; 1582 öncesi gün Jülyen kalır ‖ Chen Shou, Sanguozhi (Wei zhi 4, zh.wikisource.org/wiki/三國志/卷04; açıldı, okundu): 「十二月壬戌，天祿永終，歷數在晉」 (Wei imparatorunun feragat fermanı, 壬戌 = 0266-02-04) ‖ Fang Xuanling vd., Jin shu 3 (zh.wikisource.org/wiki/晉書/卷003; açıldı, okundu): 「泰始元年…冬十二月丙寅，設壇于南郊」 (Sima Yan'ın taç günü 丙寅 = 0266-02-08; geçiş günü olarak taç günü alındı, feragat fermanı 4 gün önce) · BEYAN: Britannica 'Jin 265' der — Çin yıl adı (咸熙二年), 12. ay Jülyen 266 Şubat'ına düşer · künye cao-wei (f/t bu paketle 0220-12-10 / 0266-02-08'e çekildi) · CIN-SANGUO"},
     {f:"0266-02-08",t:"0311-07-13",d:"bati-jin",kesinlik:{f:"gun",t:"gun"},kaynak:"ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 丙寅 (泰始元年 12. ay) → Jülyen 0266-02-08 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13) = Gregoryen 0266-02-08; 1582 öncesi gün Jülyen kalır ‖ Chen Shou, Sanguozhi (Wei zhi 4, zh.wikisource.org/wiki/三國志/卷04; açıldı, okundu): 「十二月壬戌，天祿永終，歷數在晉」 (Wei imparatorunun feragat fermanı, 壬戌 = 0266-02-04) ‖ Fang Xuanling vd., Jin shu 3 (zh.wikisource.org/wiki/晉書/卷003; açıldı, okundu): 「泰始元年…冬十二月丙寅，設壇于南郊」 (Sima Yan'ın taç günü 丙寅 = 0266-02-08; geçiş günü olarak taç günü alındı, feragat fermanı 4 gün önce) · BEYAN: Britannica 'Jin 265' der — Çin yıl adı (咸熙二年), 12. ay Jülyen 266 Şubat'ına düşer ‖ Jin shu 14 (晉書/卷014; okundu, Dili zhi): 「河南郡〈漢置。統縣十二，戶一十一萬四千四百。置尹。〉」 ; 「洛陽〈置尉。五部、三市。東西七里，南北九里。」 ‖ bitiş: ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 丁酉 (永嘉五年 6. ay) → Jülyen 0311-07-13 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13) = Gregoryen 0311-07-14; 1582 öncesi gün Jülyen kalır ‖ Jin shu 5 (晉書/卷005; okundu): 「六月癸未，劉曜、王彌、石勒同寇洛川…丁酉、劉曜、王彌入京師」; Sima Guang, Zizhi tongjian 87 (zh.wikisource.org/wiki/資治通鑑/卷087; okundu): 「丁酉，王彌、呼延晏克宣陽門，入南宮，升太極前殿，縱兵大掠」 ; 「帝出華林園門，欲奔長安，漢兵追執之」 (Jin shu 5 dipnotu: Tongjian癸未'yi 5. aya alır; 丁酉 iki kaynakta aynı, 6. ay) · BEYAN: Han-Zhao şehri yağmaladı, kalıcı garnizon okunmadı → sahip yazılmadı · CIN-SANGUO"},
     {f:"0311-07-13",t:"0500-01-01",d:"__BOSLUK__",kesinlik:"gun",kaynak:"CIN2-MS317 ARAŞTIRMA NOTU (YAZILMADI, kaynak taraması eksik): standart tarih metinleri (zh.wikisource) taramasında şu ipuçları bulundu — 311 Yongjia 5 6. ay 丁酉 Han-Zhao girişi/yağma (Jin shu 5); 325 Hou-Zhao Shi Sheng Luoyang'da (ZZTJ 93); 356 8. ay Huan Wen girişi (ZZTJ 100 己丑 / Jin shu 8 己亥 çelişkili); 365 3. ay 丙子 Murong Ke Luoyang'ı aldı (Jin shu 8); 416 10. ay 丙寅 Yao Guang teslim, Jin (Jin shu 10); 423 1. ay 癸卯 'Henan komutanlığı kaybedildi' (Song shu 4) sonrası Kuzey Wei. Doğrulanamayan: 312-324, 349-353, 362-364, 400-416, 430-431 sahipleri ve geçiş günleri; iki kaynak çelişkisi 328-12 ve 356-08. Uydurma yok, dilim açılmadı. BEYAN (CIN-SANGUO): 311 yağmasından sonra Luoyang'ın kalıcı sahibi okunan kaynaklarda (Jin shu 5; Zizhi tongjian 87-89) bulunmadı — Han-Zhao 'ele geçirip yağmaladı', imparator Pingyang'a götürüldü, şehirde garnizon kaydı yok; MS 311-500 arası Luoyang zinciri (Han-Zhao/Sonraki Zhao/Sonraki Yan/Kuzey Wei) bu paketin dışındadır → boşluk (kaynak sessiz); uydurma sahip yazılmadı"},
     {f:"0500-01-01",t:"0534-11-08",d:"kuzey-wei",kesinlik:"yil",kaynak:"SAHİP BEYANLI: kuzey-wei (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Wei shu juan 10-11: Luoyang Kuzey Wei başkenti (528 Heyin, 530, 534 «己酉，齊獻武王入洛»). f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı: sahiplik öncesinden sürüyor) · DOGU-500-1281"},
     {f:"0534-11-08",t:"0550-06-09",d:"dogu-wei",kesinlik:"gun",kaynak:"SAHİP BEYANLI: dogu-wei (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Wei shu juan 12: «改司州為洛州 … 鎮洛陽». BEYAN: 538 ve 543 (Mangshan) kısa Batı Wei işgalleri yazılmadı · DOGU-500-1281"},
     {f:"0550-06-09",t:"0577-02-23",d:"kuzey-qi",kesinlik:"gun",kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip kuzey-qi) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"kuzey-qi\" geri yazılır) · Bei Qi shu juan 4 (550-06-09); Bei Qi shu juan 8: «周師入洛川，屯芒山，攻逼洛城 … 周師夜遁» (575 Luoyang Qi'de kaldı). Bitiş 577-02-23 ÜST SINIR: Zhou shu juan 6 «封齊開府、洛州刺史獨孤永業為應國公» · DOGU-500-1281"},
     {f:"0577-02-23",t:"0581-03-04",d:"kuzey-zhou",kesinlik:"gun",kaynak:"SAHİP BEYANLI: kuzey-zhou (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Zhou shu juan 6 (577-02-23 üst sınır); Sui shu juan 1 (581-03-04) · DOGU-500-1281"},
     {f:"0581-03-04",t:"0619-05-25",d:"sui",kesinlik:"gun",kaynak:"SAHİP BEYANLI: sui (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Sui shu juan 1 (581-03-04); Jiu Tang shu juan 1: «夏四月乙巳，王世充篡越王侗位» (619-05-25; Luoyang Yue Wang Tong'un Sui yönetiminde). BEYAN: Li Mi (Wei) Luoyang çevresini kuşattı, şehre giremedi (Jiu Tang shu juan 53) · DOGU-500-1281"},
     {f:"0619-05-25",t:"0621-06-04",d:"sui-zheng-wang-shichong",kesinlik:"gun",kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip sui-zheng-wang-shichong) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"sui-zheng-wang-shichong\" geri yazılır) · Jiu Tang shu juan 1/54 (619-05-25); «丙寅，王世充舉東都降，河南平» (621-06-04) · DOGU-500-1281"},
     {f:"0621-06-04",t:"0690-10-16",d:"tang",kesinlik:"gun",kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip tang) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"tang\" geri yazılır) · Jiu Tang shu juan 1 (621-06-04); Jiu Tang shu juan 6 (690-10-16) · DOGU-500-1281"},
     {f:"0690-10-16",t:"0705-03-03",d:"wu-zhou",kesinlik:"gun",kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip wu-zhou) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"wu-zhou\" geri yazılır) · Jiu Tang shu juan 6/7 (Luoyang = Shendu, Wu Zhou başkenti) · DOGU-500-1281"},
     {f:"0705-03-03",t:"0756-01-18",d:"tang",kesinlik:"gun",kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip tang) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"tang\" geri yazılır) · Jiu Tang shu juan 7 «神都依舊為東都»; bitiş Tang t=907-06-01 | BÖLÜNDÜ (kuyrukcin): cin1'in tek parça 'tang 705→907' dilimi, cin2'nin an-lushan-yan dilimleriyle ÇAKIŞIYORDU; Tang dilimi 756-01-18'de kesildi (Jiu Tang shu 9: 「丁酉，祿山陷東京」). · DOGU-500-1281"},
     {f:"0756-01-18",t:"0757-12-03",d:"an-lushan-yan",kesinlik:{f:"gun",t:"gun"},kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip an-lushan-yan) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"an-lushan-yan\" geri yazılır) · Liu Xu vd., Jiu Tang shu, juan 9 «Xuanzong ji xia» (zh.wikisource.org/wiki/舊唐書/卷9; açıldı, okundu): «丁酉，祿山陷東京，殺留守李憕、中丞盧奕、判官蔣清。» ‖ bitiş: Jiu Tang shu, juan 10 «Suzong ji» (zh.wikisource.org/wiki/舊唐書/卷10; okundu): «庚申，安慶緒與其黨奔河北。壬戌，廣平王入東京，…» · DOGU-500-1281"},
     {f:"0757-12-03",t:"0759-09-26",d:"tang",kesinlik:{f:"gun",t:"yil"},kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip tang) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"tang\" geri yazılır) · Jiu Tang shu, juan 10 «Suzong ji» (zh.wikisource.org/wiki/舊唐書/卷10): 「庚申，安慶緒與其黨奔河北。壬戌，廣平王入東京，…」 (Luoyang Tang'a döndü; gün/ay yok: YYYY-01-01 kuralı) ‖ BİTİŞ: Jiu Tang shu, juan 200 shang «Shi Siming»: 「九月，寇汴州，…又陷洛陽，與太尉光弼相拒。」 (759-09-26). BÖLÜNEN Tang dilimi (cin2 an-lushan-yan 756-01-18→757-01-01 ve 759-09-26→762-11-20 arasındaki aralık). · DOGU-500-1281 · SINIR-GUN-1023: f 0757-01-01 → 0757-12-03 (Emre onayı 23.10.2026) — Liu Xu vd., Jiu Tang shu, juan 10 «Suzong ji» (zh.wikisource.org/wiki/舊唐書/卷10, 23.10.2026 okundu): 至德二載「冬十月乙巳朔」…「壬戌，廣平王入東京」 Takvim: ayın 乙巳 başı ve 壬戌 (18. gün) Jülyen 757-11-16 / 757-12-03 (JDN gün-ganzhi; 10. ayın 小雪 orta-terimini taşıması 757-09-17 seçeneğini dışlar; tabloyla çapraz kontrol yapılamadı)"},
     {f:"0759-09-26",t:"0762-11-20",d:"an-lushan-yan",kesinlik:"ay",kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip an-lushan-yan) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"an-lushan-yan\" geri yazılır) · Jiu Tang shu, juan 200 shang «Shi Siming» (zh.wikisource.org/wiki/舊唐書/卷200上; okundu): «四月，僭稱大號，以周贄為相，以范陽為燕京。九月，寇汴州，節度使許叔冀合于思明，思明益振。又陷洛陽，與太尉光弼相拒。» ‖ bitiş: Jiu Tang shu, juan 11 «Daizong ji» (zh.wikisource.org/wiki/舊唐書/卷11; açıldı, okundu): «壬申，王師次洛陽北郊。甲戌，戰於橫水，賊大敗，俘斬六萬計。史朝義奔冀州。乙亥，雍王奏收東京、河陽、汴、鄭、滑、相、魏等州。» · DOGU-500-1281"},
     {f:"0762-11-20",t:"0907-06-01",d:"tang",kesinlik:"gun",kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip tang) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"tang\" geri yazılır) · Jiu Tang shu juan 7 «神都依舊為東都»; bitiş Tang t=907-06-01 | BÖLÜNDÜ (kuyrukcin): Tang dilimi 762-11-20'de (Jiu Tang shu 11: 「壬申，王師次洛陽北郊。…乙亥，雍王奏收東京…」) yeniden başlar; bitiş 907-06-01 değişmedi. · DOGU-500-1281"},
     {f:"0907-06-01",t:"0923-11-19",d:"sonraki-liang-5hanedan",kesinlik:"gun",kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip sonraki-liang-5hanedan) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"sonraki-liang-5hanedan\" geri yazılır) · Ouyang Xiu vd., Xin Wudai shi, juan 2 «Liang benji er» (zh.wikisource.org/wiki/新五代史/卷02; açıldı, okundu): «夏四月壬戌，更名晃。甲子，皇帝即位。…改元，國號梁。封唐主為濟陰王。升汴州為開封府，建為東都，以唐東都為西都。» ‖ bitiş: Xin Wudai shi, juan 3 «Liang benji san» (zh.wikisource.org/wiki/新五代史/卷03; okundu): «戊寅，皇帝崩。梁亡。»; juan 5 «Tang benji» (zh.wikisource.org/wiki/新五代史/卷05; okundu): «冬十月壬申，如鄆州以襲梁。甲戌，取中都。丁丑，取曹州。己卯，滅梁。» · DOGU-500-1281"},
     {f:"0923-11-19",t:"0937-01-11",d:"sonraki-tang-5hanedan",kesinlik:"gun",kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip sonraki-tang-5hanedan) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"sonraki-tang-5hanedan\" geri yazılır) · Xin Wudai shi, juan 3 «Liang benji san» (zh.wikisource.org/wiki/新五代史/卷03; okundu): «戊寅，皇帝崩。梁亡。»; juan 5 «Tang benji» (zh.wikisource.org/wiki/新五代史/卷05; okundu): «冬十月壬申，如鄆州以襲梁。甲戌，取中都。丁丑，取曹州。己卯，滅梁。» ‖ bitiş: Xin Wudai shi, juan 7 «Tang Fei Di benji» (zh.wikisource.org/wiki/新五代史/卷07; okundu): «甲戌，契丹及晉人至于潞州。丁丑，至自河陽。辛巳，皇帝崩。〈年五十一，帝自焚死，晉高祖命葬其燼骨於徽陵域中。〉» · DOGU-500-1281"},
     {f:"0937-01-11",t:"0947-01-10",d:"sonraki-jin-5hanedan",kesinlik:{"f": "gun", "t": "gun"},kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip sonraki-jin-5hanedan) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"sonraki-jin-5hanedan\" geri yazılır) · Ouyang Xiu, Xin Wudai shi, juan 7 «Tang Fei-di ben ji» (zh.wikisource.org/wiki/新五代史/卷07, okundu): 「丁酉，契丹立晉。閏月甲子，楊光遠殺張敬達，……辛巳，皇帝崩。〈年五十一，帝自焚死，晉高祖命葬其燼骨於徽陵域中。〉」 · Ouyang Xiu, Xin Wudai shi, juan 8 «Jin ben ji» (zh.wikisource.org/wiki/新五代史/卷08, okundu): 「己卯，次河陽，……辛巳，至自太原。盧文紀、姚顗罷。甲申，大赦，殺張延朗、劉延朗」 · DOGU-500-1281"},
     {f:"0947-01-10",t:"0947-06-23",d:"liao-hanedani",kesinlik:{"f": "gun", "t": "gun"},kaynak:"Sima Guang, Zizhi tongjian, juan 286 (Hu Sanxing notlu; zh.wikisource.org/wiki/資治通鑒_(胡三省音注)/卷286, okundu): 「契丹主以前燕京留守劉晞爲西京留守」; 「契丹遣契丹將述軋、……奚王拽剌、……勃海將高謨翰戍洛陽」 · Ouyang Xiu, Xin Wudai shi, juan 9 «Jin Chu-di ben ji» (zh.wikisource.org/wiki/新五代史/卷09, okundu): 「十二月己未，……壬戌，奉國都指揮使王清及契丹戰于滹沱，敗績，死之。杜威、李守貞、張彥澤以其軍叛降于契丹。……壬申，張彥澤犯京師，殺開封尹桑維翰。契丹滅晉。」 · BEYAN: BEYANLI YAKLAŞIKLIK + ABİ MERKEZ: Kaifeng — ZZ 286 Luoyang'a Kitan garnizonunun geliş gününü vermez; Kaifeng'in düştüğü gün alındı. · DOGU-500-1281"},
     {f:"0947-06-23",t:"0951-02-13",d:"sonraki-han-5hanedan",kesinlik:{"f": "gun", "t": "gun"},kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip sonraki-han-5hanedan) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"sonraki-han-5hanedan\" geri yazılır) · Sima Guang, Zizhi tongjian, juan 287 (Hu Sanxing notlu; zh.wikisource.org/wiki/資治通鑒_(胡三省音注)/卷287, okundu): 「丙辰，帝至洛陽，入居宮中；汴州百官奉表來迎。」 · BEYAN: ZZ 287: 「是日，劉晞棄洛陽，奔大梁」 (6. ay, Liu Xi'nin ayrılış günü ayrıca belirtilmedi). · DOGU-500-1281"},
     {f:"0951-02-13",t:"0960-02-04",d:"sonraki-zhou-5hanedan",kesinlik:{"f": "gun", "t": "gun"},kaynak:"SAHİP YAZILDI (boya BOYALAR'da mevcut; önceki BOŞLUK BEYANI: sahip sonraki-zhou-5hanedan) (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"sonraki-zhou-5hanedan\" geri yazılır) · Ouyang Xiu, Xin Wudai shi, juan 11 «Zhou ben ji» (zh.wikisource.org/wiki/新五代史/卷11, okundu): 「廣順元年春正月丁卯，皇帝即位，大赦，改元，國號周。……戊寅，漢劉崇自立于太原。」 · BEYAN: BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Kaifeng): Luoyang'ın kendi teslim günü kaynakta ayrı değil. · DOGU-500-1281"},
     {f:"0960-02-04",t:"1000-01-01",d:"song",kesinlik:"gun",kaynak:"Tuotuo vd., Song shi, juan 1 «Taizu ben ji 1» (zh.wikisource.org/wiki/宋史/卷001): 「建隆元年春正月乙巳，大赦，改元，定有天下之號曰宋。」 · Xin Wudai shi, juan 12: 「七年春正月甲辰，遜于位。宋興。」 (Song'un kuruluşu 960-02-04; Zhou çocuk imparatorunun feragati 960-02-03 BEYANI: Kaifeng yamasıyla aynı) ‖ BİTİŞ: Tuotuo vd., Jin shi, juan 3 «Taizong ji» (zh.wikisource.org/wiki/金史/卷3): 「十一月甲子，宗翰自太原趨汴。…乙亥，宗翰克隆德府。活女渡盟津。西京、永安軍、鄭州皆降。」 (天會四年 11. ay 乙亥 = 1126-11-29 Jülyen; 『西京』 = Song Xijing/Henan fu = Luoyang; 乙亥–庚辰 arası 1126-11-29..12-04 ±5 gün belirsizlik) · BEYAN: Jin shi 3 (天會六年 2. ay) 「遷洛陽、襄陽、穎昌、汝、鄭、均、房、唐、鄧、陳、蔡之民于河北」 — 1127-1128 Song/Jin aralığı ve Qi (Liu Yu, 1130-1137) dönemi Jin'e yazıldı; da-qi-liu-yu kimliği atlas'ta yok (cin3 künyesinde) — BEYANLI YAKLAŞIKLIK. · DOGU-500-1281"},
     {f:"1000-01-01",t:"1126-11-16",d:"song",kesinlik:{f:"belirsiz",t:"ay"},kaynak:"«河南府路，唐初為洛州，後改河南府，又改東京。宋為西京。金為中京金昌府。元初為河南府，府治即周之王城» Yuanshi 59 (地理二 河南府路) ve Songshi 85 (河南府 「因梁、晉之舊爲西京」): Song Batı Başkenti (Xijing). f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},
     {f:"1126-11-16",t:"1139-04-16",d:"jin-hanedani",kesinlik:{f:"ay",t:"gun"},kaynak:"«乙亥，宗翰克隆德府。活女渡盟津。西京、永安軍、鄭州皆降。庚辰，宗翰克澤州» «河南府路，唐初為洛州，後改河南府，又改東京。宋為西京。金為中京金昌府。元初為河南府，府治即周之王城» Jinshi 3 天會四年 (1126) : Xijing (Luoyang) Jin’e teslim oldu; Yuanshi 59: Jin döneminde 「中京金昌府」. Song’un 1127-1139 arasındaki kısa denetim ve Qi vassalliği (1130-1137) dilim olarak ayrılmadı (BEYAN). f: Ay hassasiyeti: Jinshi 3 天會四年十一月 (乙亥…庚辰 arası, 「西京、永安軍、鄭州皆降」) (gün kaynakta yok) → ayın 1. günü Jülyen 1126-11-16 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 11/1; 金太宗天會4年(歲次丙午)11月1日). · VERI-MS1-1281"},
     {f:"1139-04-16",t:"1140-06-02",d:"song",kesinlik:"gun",kaynak:"«丙申，王倫受地于金，得東西南三京、壽春、宿、亳、曹、單州及陝西、京西之地» «以孟庾知開封府，爲東京留守；仇悆知河南府、西京留守» Songshi 29 紹興九年-十年: Song Xijing’i teslim aldı, Qiu Chong 西京留守 atandı (紹興十年二月). f: Gün çevirimi: Songshi 29 紹興九年三月丙申 → Jülyen 1139-04-16 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 3/16; 宋高宗紹興9年(歲次己未)3月16日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1140-06-02",t:"1233-07-17",d:"jin-hanedani",kesinlik:"gun",kaynak:"«金人陷西京，留守李利用、副總管孫暉皆棄城走，鈐轄李興率兵拒戰，不克» «河南府路，唐初為洛州，後改河南府，又改東京。宋為西京。金為中京金昌府。元初為河南府，府治即周之王城» Songshi 29 紹興十年五月己丑; Yue Fei’nin generalleri 七月癸卯 Xijing’e girdi, 九月戊申 Jin geri aldı (kısa karşı-saldırı; ayrı dilim yazılmadı, BEYAN). Jin kaydı: Jinshi 17 開興元年三月丁亥 「大元軍平中京」 (1232) da vardır — bkz. celiskiler. f: Gün çevirimi: Songshi 29 紹興十年五月己丑 → Jülyen 1140-06-02 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 5/16; 宋高宗紹興10年(歲次庚申)5月16日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1233-07-17",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:{f:"gun",t:"yil"},kaynak:"«中京留守、權參政烏林答胡土棄城奔蔡。壬午，中京破，留守兼便宜總帥強伸死之» «河南府路，唐初為洛州，後改河南府，又改東京。宋為西京。金為中京金昌府。元初為河南府，府治即周之王城» Jinshi 18 天興二年六月壬午: Zhongjing (Luoyang) düştü; Yuanshi 59 「元初為河南府」. Song’un 1234 geçici işgali (kısa) yazılmadı. f: Gün çevirimi: Jinshi 18 天興二年六月壬午 → Jülyen 1233-07-17 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 6/9; 金哀宗正大10年(歲次癸巳)6月9日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"«舊領洛陽、宜陽、永寧、登封、鞏、偃師、孟津、新安、澠池九縣，後割澠池隸陝州» Yuanshi 59 (河南府路, Yuan). f: Yıl hassasiyeti, KÜNYE ÖMRÜ SINIRI: devletler.js mogol-imparatorlugu t=1260-01-01 = yuan-hanedani f=1260-01-01 (atlas künyesi, DAYANAK DEĞİL; dilim ucu künye ömrü içinde kalsın diye bu güne konuldu). Kubilay tahta çıkışı: Yuanshi 4 «辛卯，帝即皇帝位，以禡禡、趙璧、董文炳為燕京路宣慰使» ; Çin tarihi 中統元年春三月辛卯 → Jülyen 1260-05-05 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen) tablo etiketi 3/24; 宋理宗景定元年(歲次庚申)3月24日) — künye ömrü f=1260-01-01 olduğundan sınır bu güne çekilemedi, künye düzeltme önerisi celiskiler alanında. · VERI-MS1-1281"},
     {f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1641-03-08", d:"ming-hanedani"},
     {f:"1641-03-08", t:"1645-01-18", d:"dashun"},
     {f:"1645-01-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Kaifeng — Song'un eski başkenti. 1642'de Sarı Irmak setlerinin
// yarılmasıyla sular altında kaldı ve nüfusunun büyük kısmını kaybetti;
// şehir yeniden kurulduğu için bit: YAZILMADI.
{ ad:"Kaifeng", tur:"sehir", lat:34.7970, lon:114.3070, g:1, k:3, d:[],
  s:[
     {f:"0907-06-01",t:"0923-11-19",d:"sonraki-liang-5hanedan",kesinlik:"gun",kaynak:"Ouyang Xiu vd., Xin Wudai shi, juan 2 «Liang benji er» (zh.wikisource.org/wiki/新五代史/卷02; açıldı, okundu): «夏四月壬戌，更名晃。甲子，皇帝即位。…改元，國號梁。封唐主為濟陰王。升汴州為開封府，建為東都，以唐東都為西都。» ‖ bitiş: Xin Wudai shi, juan 3 «Liang benji san» (zh.wikisource.org/wiki/新五代史/卷03; okundu): «戊寅，皇帝崩。梁亡。»; juan 5 «Tang benji» (zh.wikisource.org/wiki/新五代史/卷05; okundu): «冬十月壬申，如鄆州以襲梁。甲戌，取中都。丁丑，取曹州。己卯，滅梁。» · DOGU-500-1281"},
     {f:"0923-11-19",t:"0937-01-11",d:"sonraki-tang-5hanedan",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 3 «Liang benji san» (zh.wikisource.org/wiki/新五代史/卷03; okundu): «戊寅，皇帝崩。梁亡。»; juan 5 «Tang benji» (zh.wikisource.org/wiki/新五代史/卷05; okundu): «冬十月壬申，如鄆州以襲梁。甲戌，取中都。丁丑，取曹州。己卯，滅梁。» ‖ bitiş: Xin Wudai shi, juan 7 «Tang Fei Di benji» (zh.wikisource.org/wiki/新五代史/卷07; okundu): «甲戌，契丹及晉人至于潞州。丁丑，至自河陽。辛巳，皇帝崩。〈年五十一，帝自焚死，晉高祖命葬其燼骨於徽陵域中。〉» · DOGU-500-1281"},
     {f:"0937-01-11",t:"0947-01-10",d:"sonraki-jin-5hanedan",kesinlik:{"f": "gun", "t": "gun"},kaynak:"Ouyang Xiu, Xin Wudai shi, juan 7 «Tang Fei-di ben ji» (zh.wikisource.org/wiki/新五代史/卷07, okundu): 「丁酉，契丹立晉。閏月甲子，楊光遠殺張敬達，……辛巳，皇帝崩。〈年五十一，帝自焚死，晉高祖命葬其燼骨於徽陵域中。〉」 · Ouyang Xiu, Xin Wudai shi, juan 8 «Jin ben ji» (zh.wikisource.org/wiki/新五代史/卷08, okundu): 「己卯，次河陽，……辛巳，至自太原。盧文紀、姚顗罷。甲申，大赦，殺張延朗、劉延朗」 · BEYAN: BEYANLI YAKLAŞIKLIK: Kaifeng'in kendi teslim günü kaynakta ayrı verilmedi; Tang imparatorunun ölüm günü (hükümdarın çökmesi) devir günü sayıldı (ABİ MERKEZ: Luoyang — aynı gün). · DOGU-500-1281"},
     {f:"0947-01-10",t:"0947-07-01",d:"liao-hanedani",kesinlik:{"f": "gun", "t": "gun"},kaynak:"Ouyang Xiu, Xin Wudai shi, juan 9 «Jin Chu-di ben ji» (zh.wikisource.org/wiki/新五代史/卷09, okundu): 「十二月己未，……壬戌，奉國都指揮使王清及契丹戰于滹沱，敗績，死之。杜威、李守貞、張彥澤以其軍叛降于契丹。……壬申，張彥澤犯京師，殺開封尹桑維翰。契丹滅晉。」 · Sima Guang, Zizhi tongjian, juan 286 (Hu Sanxing notlu; zh.wikisource.org/wiki/資治通鑒_(胡三省音注)/卷286, okundu): 「春，正月，丁亥朔，百官遙辭晉主於城北，……迎契丹主，伏路側請罪。」 · BEYAN: İKİ GÜN beyan: Xin Wudai 9 壬申 = 947-01-10 (devir günü olarak seçildi); Zizhi tongjian 286: 開運四年 正月丁亥朔 = 947-01-25 (Liao imparatorunun şehre girişi). Kitan Kaifeng'i Song-dışı «Xuanwu jiedu»ya çevirdi ve Dongjing unvanını kaldırdı (ZZ 287). · DOGU-500-1281"},
     {f:"0947-07-01",t:"0951-02-13",d:"sonraki-han-5hanedan",kesinlik:{"f": "gun", "t": "gun"},kaynak:"Sima Guang, Zizhi tongjian, juan 287 (Hu Sanxing notlu; zh.wikisource.org/wiki/資治通鑒_(胡三省音注)/卷287, okundu): 「甲子，帝至大梁，晉之藩鎭相繼來降。」 · Ouyang Xiu, Xin Wudai shi, juan 10 «Han ben ji» (zh.wikisource.org/wiki/新五代史/卷10, okundu): 「二月戊辰，河東行軍司馬張彥威等上牋勸進。辛未，皇帝即位，稱天福十二年。」 · BEYAN: Kitan'ın atadığı vali Xiao Han, kukla Li Congyi'yi bırakıp çekildi (ZZ 287); Xin Wudai 10: 「六月丙辰，次河陽，殺李從益及其母于京師」. Şehrin Han'a geçişi Han imparatorunun şehre girdiği gün (甲子) sayıldı; Xiao Han'ın ayrılış günü ayrıca verilmedi. · DOGU-500-1281"},
     {f:"0951-02-13",t:"0960-02-04",d:"sonraki-zhou-5hanedan",kesinlik:{"f": "gun", "t": "gun"},kaynak:"Ouyang Xiu, Xin Wudai shi, juan 11 «Zhou ben ji» (zh.wikisource.org/wiki/新五代史/卷11, okundu): 「廣順元年春正月丁卯，皇帝即位，大赦，改元，國號周。……戊寅，漢劉崇自立于太原。」 · DOGU-500-1281"},
     {f:"0960-02-04",t:"1000-01-01",d:"song",kesinlik:{"f": "gun", "t": "yil"},kaynak:"Tuotuo vd., Song shi, juan 1 «Taizu ben ji 1» (zh.wikisource.org/wiki/宋史/卷001, okundu): 「建隆元年春正月乙巳，大赦，改元，定有天下之號曰宋。」 · Ouyang Xiu, Xin Wudai shi, juan 12 «Zhou Gong-di ben ji» (zh.wikisource.org/wiki/新五代史/卷12, okundu): 「七年春正月甲辰，遜于位。宋興。」 · BEYAN: Zhou çocuk imparatorunun feragati 960-02-03 (甲辰). · DOGU-500-1281"},
     {f:"1000-01-01",t:"1127-01-09",d:"song",kesinlik:{t:"gun"},kaynak:"Britannica, «Kaifeng» (britannica.com/place/Kaifeng; tarayıcıda açıldı ve okundu 18.10.2026): 'When the Song (960–1126) reestablished a unified empire, they too made it their capital.' · 'During the Song dynasty (960–1126), a unified empire was reestablished, and Kaifeng was designated as its capital.' · f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor; edinim günü değil, D210) · ONCE1281-GERIYE"},
     {f:"1127-01-09",t:"1132-04-22",d:"jin-hanedani",kesinlik:{f:"gun",t:"yil"},kaynak:"Britannica, «Kaifeng» (britannica.com/place/Kaifeng; tarayıcıda açıldı ve okundu 18.10.2026): 'The city suffered a severe blow when the Juchen (Jin) overran North China, captured Kaifeng in 1127, and sacked it. Under Jin rule after 1127, Kaifeng was first known as Bianjing and later as the dynasty’s southern capital.' · bitiş: 'the Mongol occupation, which lasted from 1234 until 1368' (Kaifeng’in 1233’te kuşatılıp 1234’te Moğol işgaline girişi; Britannica yılı 1234) · ONCE1281-GERIYE · SINIR-GUN-1023: f 1127-01-01 → 1127-01-09 (Emre onayı 23.10.2026) — Tuotuo vd., Song shi, juan 23 «Qinzong ben ji» (zh.wikisource.org/wiki/宋史/卷023, 23.10.2026 okundu): 靖康元年「閏月壬辰朔」…「丙辰，…金兵登城，眾皆披靡。…京城陷。」 Takvim: 丙辰 günü Jülyen 1127-01-09 (JDN gün-ganzhi hesabı; ay başı 壬辰 = 1126-12-16 ile tutarlı; NAOJ/Academia Sinica tablosuyla çapraz kontrol yapılamadı)"},
     {f:"1132-04-22",t:"1138-01-01",d:"da-qi-liu-yu",kesinlik:{f:"gun",t:"gun"},kaynak:"ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 丙寅 (宋紹興二年四月) → Jülyen 1132-04-22 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13); 1582 öncesi gün Jülyen kalır. ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 丙午 (宋紹興七年十一月) → Jülyen 1138-01-01 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13); 1582 öncesi gün Jülyen kalır. Song shi, juan 475 (zh.wikisource.org/wiki/宋史/卷475, okundu): «四月丙寅，豫遷都汴» (紹興二年) ; «十一月丙午，廢豫爲蜀王» (紹興七年) · Jin shi juan 77: «阜昌二年，豫遷都於汴»; «天會十五年，詔廢齊國，降封豫為蜀王» | BEYANLI YAKLAŞIKLIK: Kaifeng dönem başı Qi'nin başkentini buraya taşıma kaydıdır; Qi kuruluşu (1130-10-12) ile 1132-04-22 arasında Kaifeng'in sahibi kaynakta ayrıca okunmadı (mevcut jin-hanedani dönemi korundu). · ASYA-ZINCIR-1024 (F2)"},
     {f:"1138-01-01",t:"1234-01-01",d:"jin-hanedani",kesinlik:{f:"gun",t:"yil"},kaynak:"Britannica, «Kaifeng» (britannica.com/place/Kaifeng; tarayıcıda açıldı ve okundu 18.10.2026): 'The city suffered a severe blow when the Juchen (Jin) overran North China, captured Kaifeng in 1127, and sacked it. Under Jin rule after 1127, Kaifeng was first known as Bianjing and later as the dynasty’s southern capital.' · bitiş: 'the Mongol occupation, which lasted from 1234 until 1368' (Kaifeng’in 1233’te kuşatılıp 1234’te Moğol işgaline girişi; Britannica yılı 1234) · ONCE1281-GERIYE · SINIR-GUN-1023: f 1127-01-01 → 1127-01-09 (Emre onayı 23.10.2026) — Tuotuo vd., Song shi, juan 23 «Qinzong ben ji» (zh.wikisource.org/wiki/宋史/卷023, 23.10.2026 okundu): 靖康元年「閏月壬辰朔」…「丙辰，…金兵登城，眾皆披靡。…京城陷。」 Takvim: 丙辰 günü Jülyen 1127-01-09 (JDN gün-ganzhi hesabı; ay başı 壬辰 = 1126-12-16 ile tutarlı; NAOJ/Academia Sinica tablosuyla çapraz kontrol yapılamadı)"},
     {f:"1234-01-01",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:{f:"yil",t:"yil"},kaynak:"Britannica, «Kaifeng» (britannica.com/place/Kaifeng; tarayıcıda açıldı ve okundu 18.10.2026): 'It remained an important administrative center, as it also was under the Mongol occupation, which lasted from 1234 until 1368, during which period it was the seat of the provincial administration of Henan.' · bitiş: Moğol İmparatorluğu künye sonu 1260 (TDV mogollar: ‘Kubilay Kağan (1260-1294)’) · ONCE1281-GERIYE"},
     {f:"1260-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:{f:"yil"},kaynak:"BEYANLI BOŞLUK: Moğol İmparatorluğu künyesi 1260’ta biter (TDV mogollar: ‘Kubilay Kağan (1260-1294) çetin savaşların ardından nihayet bütün Çin’i ele geçirdi’), Yuan Hanedanı künyesi 1271’de başlar (devletler.js) — 1260-1271 arası Kubilay’ın Moğol Çin kolunu karşılayan künye YOK, komşu devlete itilmedi; mevcut kaydın Yuan dönemi ise 1281’de başlıyordu (1271-1281 de bu kaydın eski borcu). Çare: künye düzeyinde (Yuan f 1260’a çekilmesi ya da Moğol t 1271) — bu görevin kapsamı dışı · ONCE1281-GERIYE"},
     {f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-01-18", d:"dashun"},
     {f:"1645-01-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Zhengzhou", tur:"sehir", lat:34.7460, lon:113.6250, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-01-18", d:"dashun"},
     {f:"1645-01-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Anyang", tur:"sehir", lat:36.0970, lon:114.3930, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Jinan", tur:"sehir", lat:36.6510, lon:117.1200, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Qufu", tur:"sehir", lat:35.5970, lon:116.9910, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Qingdao — Almanya 6 Mart 1898'de 99 yıllığına kiraladı ve şehri kurdu
// (kur:). Japonya 7 Kasım 1914'te aldı, 10 Aralık 1922'de Çin'e iade etti.
// Bu, dosyadaki tek ALMANYA penceresidir ve renkler.py'de tanımlıdır.
{ ad:"Qingdao (Tsingtau)", tur:"liman", lat:36.0670, lon:120.3830, g:1, k:3, d:[],
  kur:"1898-03-06",
  s:[{f:"1898-03-06", t:"1914-11-07", d:"almanya"},
     {f:"1914-11-07", t:"1922-12-10", d:"meiji-japonya"},
     {f:"1922-12-10", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Yantai (Chefoo)", tur:"liman", lat:37.4640, lon:121.4480, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1644-06-06", d:"ming-hanedani"},
     {f:"1644-06-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Xuzhou", tur:"kale", lat:34.2050, lon:117.2840, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// ===== 3d. Yangtze havzası =====

// Nanking — Ming'in ilk başkenti (1368-1421) ve Güney Ming'in Hongguang
// sarayının merkezi. Qing 8 Haziran 1645'te girdi. Taiping İsyanı
// 19 Mart 1853 – 19 Temmuz 1864 arasında şehri "Göksel Başkent" yaptı;
// on bir yıllık ayrı bir devlettir ve pencere aldı.
{ ad:"Nanking (Nanjing)", tur:"sehir", lat:32.0600, lon:118.7970, g:2, k:1,kd:[{f:"1368-01-23",t:"1662-01-01",k:1,m:"Nanking (Nanjing)"},{f:"1851-01-11",t:"1864-07-19",k:1,m:"Nanking (Nanjing)"},{f:"1911-10-10",t:"1923-10-29",k:1,m:"Nanking (Nanjing)"}], d:[],
  s:[
     {f:"0212-01-01",t:"0280-05-01",d:"sun-wu",kesinlik:{f:"yil",t:"gun"},kaynak:"三國志 卷47 吳書二 吳主傳 (Chen Shou), https://zh.wikisource.org/wiki/三國志/卷47; 晉書 卷3 武帝紀, https://zh.wikisource.org/wiki/晉書/卷003 ‖ f: Wu Zhi — Sun Quan 建安16 (211) Moling'e taşınır, 建安17 (212) Shitou'yu surlar ve Moling'i Jianye yapar; Han yıl adı kullanılır (nominal Han başkomutanı), fiilî hâkim Sun Quan. Künye sun-wu f 0222-01-01: dönem künyeden 10 yıl önce başlar (hayalet uyarısı beklenir). Sınıflandırma: aynı polity (Sun Quan'ın Jiangdong yönetimi) sürüyor ⇒ künyeyi GENİŞLET önerisi (f ≈ 0212); Han nominal üstlüğü künyede ayrı bir dönem açmaya değmez. t: Jin Shu 3 — 太康元年 3. ay 壬寅 (Sun Hao Shitou'da teslim); Çin takvimi 280 3/15 壬寅 → Sinica sinocal 0280-05-01 (Jülyen). 229'da Sun Quan imparator ilan edip başkenti Jianye'ye taşır (olay). · CIN-SANGUO"},
     {f:"0280-05-01",t:"0317-04-06",d:"bati-jin",kesinlik:{f:"gun",t:"gun"},kaynak:"[T UZATILDI 0316-12-11 -> 0317-04-06: Min Di'nin Chang'an'daki teslimi (316-12-11) bu şehirdeki Jin idaresini kesmedi; Sima Rui 0317-04-06'da Jin Prensi oldu (Jin shu 6, 建武元年 3. ay 辛卯); künye bati-jin t genişletildi] SINIR BEYANI: dönem Batı Jin künyesinin bitişi 0316-12-11'e kırpıldı (tarihçe 0317-04-06: Sima Rui'nin Jin Prensi olması, Jin shu 6; Doğu Jin dilimi bu paketin dışında) ‖ 晉書 卷3 武帝紀, https://zh.wikisource.org/wiki/晉書/卷003; 晉書 卷6 元帝紀, https://zh.wikisource.org/wiki/晉書/卷006; 晉書 卷5 孝愍帝紀, https://zh.wikisource.org/wiki/晉書/卷005 ‖ f: Jin Shu 3, Wu'nun teslimi (olay 280-05-01). t: Jin Shu 6 — 建武元年 3. ay 辛卯 Sima Rui (Jiankang'da) Jin Prensi tahtına oturur; Çin takvimi 317 3/9 辛卯 → 0317-04-06 (Sinica, Jülyen). Künye geçişi Batı Jin → Doğu Jin; Min Di'nin Chang'an'da teslimi (316) Jiankang'ı değiştirmez. Künye bati-jin t 0316-01-01 → dönem künyeyi 1 yıldan fazla aşar (hayalet uyarısı beklenir); aynı polity ⇒ künyeyi GENİŞLET (t ≈ 0317-04) önerisi. Jin Shu 15: 太康元年 Wu fethinden sonra ad Moling'e döner, 太康3 (282) Qinhuai'nin kuzeyi Jianye (建鄴) ilçesi olarak ayrılır (olay). · CIN-SANGUO"},
     {f:"0317-04-06",t:"0420-07-10",d:"dogu-jin",kesinlik:{f:"gun",t:"gun"},kaynak:"晉書 卷6 元帝紀, https://zh.wikisource.org/wiki/晉書/卷006; 宋書 卷3 武帝紀下, https://zh.wikisource.org/wiki/宋書/卷3 ‖ t: Song Shu 3 — 永初元年 夏6. ay 丁卯 Liu Yu tahta çıkar; Çin takvimi 420 6/14 丁卯 → 0420-07-10 (Sinica, Jülyen). Kısa geçici ele geçirmeler dönem AÇMAZ, olay: Su Jun (328-03-04 → 329-03-29) ve Huan Xuan (404-01-01 → 404-03-28) — ayrıntılar olay listesinde; süreler kaynakta okunan günlerden hesaplandı, ama yönetim künyesi yazılmadı (isyancı iktidarlar). · CIN2-MS317"},
     {f:"0420-07-10",t:"0479-05-29",d:"liu-song",kesinlik:{f:"gun",t:"gun"},kaynak:"宋書 卷3 武帝紀下, https://zh.wikisource.org/wiki/宋書/卷3; 南齊書 卷2 高帝紀下, https://zh.wikisource.org/wiki/南齊書/卷2 ‖ t: Nan Qi Shu 2 — 建元元年 夏4. ay 甲午 Xiao Daocheng tahta çıkar; Çin takvimi 479 4/23 甲午 → 0479-05-29 (Sinica, Jülyen). Not: Nan Qi Shu 1'e göre Song imparatoru 辛卯 (479-05-26) tahttan çekilir, 3 gün önce. · CIN2-MS317"},
     {f:"0479-05-29",t:"0502-04-30",d:"guney-qi",kesinlik:{f:"gun",t:"gun"},kaynak:"南齊書 卷2 高帝紀下, https://zh.wikisource.org/wiki/南齊書/卷2; 梁書 卷2 武帝紀中, https://zh.wikisource.org/wiki/梁書/卷02 ‖ t: Liang Shu 2 — 天監元年 夏4. ay 丙寅 Xiao Yan tahta çıkar; Çin takvimi 502 4/8 丙寅 → 0502-04-30 (Sinica, Jülyen). Künye guney-qi t 0502-01-01 → dönem künyeyi 4 ay aşar (hayalet uyarısı beklenir; künye gün hassasiyetine çekilmeli). Liang Shu 2 aynı kayıtta 'Qi 中興二年 yılını 天監元年 yaptı' der. · CIN2-MS317"},
     {f:"0502-04-30",t:"0557-11-16",d:"liang-guney",kesinlik:{f:"gun",t:"gun"},kaynak:"梁書 卷2 武帝紀中, https://zh.wikisource.org/wiki/梁書/卷02; 陳書 卷2 高祖紀下, https://zh.wikisource.org/wiki/陳書/卷2 ‖ t: Chen Shu 2 — 永定元年 冬10. ay 乙亥 Chen Baxian tahta çıkar; Çin takvimi 557 10/10 乙亥 → 0557-11-16 (Sinica, Jülyen). Künye liang-guney t 0557-01-01 → dönem 10.5 ay aşar (hayalet uyarısı beklenir). Hou Jing (548-552) Jiankang'ı 549-04-24'te alır, 552-04-29'da Wang Sengbian geri alır — 3 yıl, Liang imparatorları (Wudi 549-05'te ölür, Jianwen Di Hou Jing'in elinde) sürdüğü için ve Hou Jing'in 'Han' künyesi atlasta olmadığı için dönem AÇILMADI, olay yazıldı; yönetim kontrolü Hou Jing'de olduğu ic_not'ta beyan. · CIN2-MS317"},
     {f:"0557-11-16",t:"0589-02-02",d:"chen",kesinlik:{f:"gun",t:"gun"},kaynak:"陳書 卷2 高祖紀下, https://zh.wikisource.org/wiki/陳書/卷2; 隋書 卷2 高祖紀下, https://zh.wikisource.org/wiki/隋書/卷02 ‖ t: Sui Shu 2 — 開皇九年 春正月 丙子 Han Qinhu Jianye'ye girer, Chen hükümdarı Shubao yakalanır; Çin takvimi 589 1/12 丙子 → 0589-02-02 (Sinica, Jülyen). Künye chen t 0589-01-01 → dönem 1 ay aşar (hayalet uyarısı beklenir). · CIN2-MS317"},
     {f:"0589-02-02",t:"0618-01-01",d:"sui",kesinlik:{f:"gun",t:"yil"},kaynak:"隋書 卷2 高祖紀下, https://zh.wikisource.org/wiki/隋書/卷02; 隋書 卷31 地理志下, https://zh.wikisource.org/wiki/隋書/卷31; 資治通鑑 卷177 (Sima Guang, 1084), https://zh.wikisource.org/wiki/資治通鑑/卷177 ‖ f: 0589-02-02 (Sui Shu 2). YER DEĞİŞİMİ BEYANI: Sui Shu 31 'Chen'i yenince fermanla (Jiankang şehrini/sarayları) düzleştirip tarla yapın, Shitou'da Jiang Zhou kurun' der; ZZTJ 177 aynı ferman: 'ilgili şehir ve saraylar düzlenip ekilsin'. Yani atlas noktasına en yakın Taicheng/Jiankang sarayı yeri 589'da yıkılmış, yerleşim Shitou'ya (Taicheng'den '9 li', Zhida Jinling xinzhi 5 üst, Yu di zhi'den; li→km çevrilmedi) taşınmıştır. Burada zincir ŞEHİR SOYUNU taşır; fiilî yerin atlas noktasından >3 km sapmış olabileceği (Shitou/Jiangzhou, Tang Jiangning, Güney Tang şehri) bu oturumda ölçülmedi — BEYANLI YAKLAŞIKLIK. __YOK__ yazılmadı: ferman uygulanmasının kapsamı ve süresi kaynaklarla gösterilmedi; kesinti kaynakla gösterilemeyince dönem açılmaz (VERI-YAPISI). t: künye sui t 0618-01-01 (yıl); Sui çöküşü Jiangnan'da günlü kaynak bulunmadı. · CIN2-MS317"},
     {f:"0618-01-01",t:"0620-01-01",d:"__BOSLUK__",kesinlik:{f:"yil",t:"yil"},kaynak:"舊唐書 卷56 (杜伏威·輔公祏·沈法興·李子通傳), https://zh.wikisource.org/wiki/舊唐書/卷56; 舊唐書 卷40 地理志三, https://zh.wikisource.org/wiki/舊唐書/卷40 ‖ Sui hâkimiyeti sonrası, Tang kuruluşuna kadar Danyang (Jiangning) birbirini izleyen iddiacılar arasında: JTS 56 — Yuwen Huaji adına Qi Jun'dan Le Botong Danyang'ı tutar; Shen Faxing 義寧二年 (618) kalkışıp 'Danyang'ı alır'; Du Fuwei (Lixing) ve Fu Gongzhi Danyang'a girer ('攻陷丹陽, 進屯溧水'); hiçbirinin günü yok, hiçbiri atlasta künyeli değil. Hangisinin hangi aralıkta şehri elinde tuttuğu kaynakta sıralanamadı ⇒ __BOSLUK__ (aranan: JTS 56 Du Fuwei/Fu Gongzhi/Shen Faxing/Li Zitong; JTS 40; sıralı gün bulunamadı). Sui künyesi 618-01-01'de biter; t 620: JTS 40 武德三年 (620). · CIN2-MS317"},
     {f:"0620-01-01",t:"0902-01-01",d:"tang",kesinlik:{f:"yil",t:"yil"},kaynak:"舊唐書 卷40 地理志三, https://zh.wikisource.org/wiki/舊唐書/卷40; 舊唐書 卷1 高祖紀, https://zh.wikisource.org/wiki/舊唐書/卷1; 新五代史 卷61 吳世家, https://zh.wikisource.org/wiki/新五代史/卷61 ‖ f: JTS 40 — 武德三年 (620) Du Fuwei Tang'a katılır, Jiangning ilçesinde Yangzhou kurulur (Lixing 'Shengzhou' öncesi). 623-09-08 → 624-04-21 Fu Gongzhi Danyang'ı tutup 'Song Wang' unvanı alır (JTS 1) — ~7 ay, geçici isyan ⇒ dönem AÇILMADI, olay. 758 (乾元元年) Shengzhou (昇州) kurulur (JTS 40; 761'de kaldırılıp 上元縣 olarak Runzhou'ya bağlanır). 895-897 arası Shengzhou prefect Feng Hongduo Yang Xingmi'ye 'bağlanır' (XWDS 61; Tang unvanı altında). Tang dönemi bu oturumda yalnız ilçe/vilayet adlarıyla okundu; 761-895 arasında Jiangning'de Tang valileri ve Zhou Bao/Sun Ru/Feng Hongduo gibi yerel güçlerin sıralaması OKUNMADI — Tang nominal sahibi olarak yazıldı, beyan. t: künye wu (Yang Wu) f = 0902-01-01 ve ZZTJ 263 / XWDS 61: 天復二年 (902) Yang Xingmi 吳王. · CIN2-MS317"},
     {f:"0902-01-01",t:"0937-11-10",d:"yang-wu",kesinlik:{f:"yil",t:"gun"},kaynak:"資治通鑑 卷263 (Sima Guang, 1084), https://zh.wikisource.org/wiki/資治通鑑/卷263; 新五代史 卷61 吳世家, https://zh.wikisource.org/wiki/新五代史/卷61; 資治通鑑 卷281 (Sima Guang, 1084), https://zh.wikisource.org/wiki/資治通鑑/卷281 ‖ f: ZZTJ 263 — 天復二年 (902) Tang sarayı Yang Xingmi'yi 吳王 yapar (künye geçişi, toprak aynı). Wu devleti Guangling (Yangzhou) merkezli; Xu Wen 昇州 刺史 (8. yıl) ve 14. yılda Jinling'e taşınır (XWDS 61; 'Jinling Fu' adı — günleri çıkarılmadı). t: ZZTJ 281 — 天福二年 冬10. ay 甲申 Xu Zhigao (Li Bian) Jinling'de 'Tang' imparatoru olur; Çin takvimi 937 10/5 甲申 → Sinica sinocal 0937-11-10 (Jülyen). Künye yang-wu t 0937-01-01 → dönem künyeyi 10 ay aşar (hayalet uyarısı beklenir). · CIN2-MS317"},
     {f:"0937-11-10",t:"0976-01-01",d:"guney-tang",kesinlik:{f:"gun",t:"gun"},kaynak:"資治通鑑 卷281 (Sima Guang, 1084), https://zh.wikisource.org/wiki/資治通鑑/卷281; 宋史 卷3 太祖紀三, https://zh.wikisource.org/wiki/宋史/卷003 ‖ t: Song Shi 3 — 開寶八年 11. ay 乙未 Cao Bin 昇州'yi alır, Li Yu esir; Çin takvimi 975 11/27 乙未 → Sinica: iki eşleşmeden SONRAKİ seçildi: 0976-01-01 (Jülyen; önceki 0975-01-06 lunar 11/21 başka Çin yılının eşleşmesidir). Künye guney-tang t 0975-01-01 → dönem 1 yıl aşar (hayalet uyarısı beklenir): künye yanlış yılda görünüyor (Song Shi'ye göre fetih 開寶八年 11. ay = Jülyen 976-01-01; künye t düzeltilmeli). · CIN2-MS317"},
     {f:"0976-01-01",t:"1000-01-01",d:"song",kesinlik:"yil",kaynak:"cin3 guney-tang bitişi 976-01-01 (yıl düzeyi; Song, Jinling'i 975-976 kışında aldı) ‖ BİTİŞ: Song Lian vd., Yuan shi, juan 8 «Shizu ji 5» (zh.wikisource.org/wiki/元史/卷008): 「庚午，大軍次建康府，宋沿江制置使趙溍南走，都統、權兵馬司事徐王榮、翁福、茅世雄等及鎮軍曹旺以城降」 (至元十二年 2. ay 庚午 = 1275-03-27 Jülyen) · Song shi, juan 47: 「癸酉，都統徐旺榮迎大元兵入建康府」 (德祐元年 3. ay 癸酉 ≈ 1275-03-30; iki kaynak 3 gün farkı: Yuan shi esas alındı). · DOGU-500-1281"},
     {f:"1000-01-01",t:"1275-03-27",d:"song",kesinlik:{f:"belirsiz",t:"gun"},kaynak:"«宋平南唐，復為昇州。仁宗以昇王建國，升建康軍。高宗改建康府，建行都，又為沿江制置司治所。元至元十二年歸附» Yuanshi 62 (地理五 集慶路): Song 975’te Güney Tang’ı yıkıp Shengzhou/Jiangning’i aldı; Gaozong Jiankang Fu’yu geçici başkent yaptı. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},
     {f:"1275-03-27",t:"1281-01-01",d:"yuan-hanedani",kesinlik:{f:"gun",t:"yil"},kaynak:"«庚午，大軍次建康府，宋沿江制置使趙溍南走，都統、權兵馬司事徐王榮、翁福、茅世雄等及鎮軍曹旺以城降» «元至元十二年歸附。十四年，升建康路。初立行御史臺于揚州，既而徙杭州，又徙江州，又還杭州» Yuanshi 8 (世祖五) 至元十二年二月庚午 → Jülyen 1275-03-27. f: Gün çevirimi: Yuanshi 8 至元十二年二月庚午 → Jülyen 1275-03-27 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 2/29; 元世祖至元12年(歲次乙亥)2月29日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1853-03-19", d:"qing-hanedani"},
     {f:"1853-03-19", t:"1864-07-19", d:"taiping"},
     {f:"1864-07-19", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Yangzhou — Büyük Kanal ile Yangtze'nin kesiştiği tuz ticareti şehri;
// Qing ordusunun 1645 Mayıs'ındaki katliamı Çin tarihinin en ağır
// olaylarındandır.
{ ad:"Yangzhou", tur:"sehir", lat:32.3940, lon:119.4130, g:1, k:3, d:[],
  s:[{f:"0902-01-01",t:"0937-11-10",d:"yang-wu",kesinlik:"yil",kaynak:"Xin Wudai shi, juan 61 «Wu shijia» (zh.wikisource.org/wiki/新五代史/卷61; açıldı, okundu): «是歲，唐昭宗在岐，遣江淮宣諭使李儼拜行密東面諸道行營都統、檢校太師、中書令，封吳王。» ‖ bitiş: Xin Wudai shi, juan 61 (zh.wikisource.org/wiki/新五代史/卷61; okundu): «三年，知誥建齊國，立宗廟、社稷，置左、右丞相已下，以金陵為西都，廣陵為東都。冬十月，溥遣江夏王璘奉冊禪位於齊王。» | DÜZELTME (kuyrukcin): cin2 diliminin t'si 937-10-01 idi; Güney Tang'ın başlangıcı cin3'te 937-11-10 (Nanking zinciri). Wu→Tang devri iki şehirde aynı günde yazıldı: t=937-11-10 (cin2 RAPOR önerisi 937-11-06; Xin Wudai 62: 「十月，溥遣攝太尉楊璘傳位於昪，國號齊，改元昇元」). · DOGU-500-1281"},{f:"0937-11-10",t:"0958-04-09",d:"guney-tang",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 62 (zh.wikisource.org/wiki/新五代史/卷62): 「十月，溥遣攝太尉楊璘傳位於昪，國號齊，改元昇元」 (937-11-10; cin3) ‖ BİTİŞ: Xin Wudai shi, juan 12 «Zhou Shizong ji» (zh.wikisource.org/wiki/新五代史/卷12): 「五年…三月壬午朔，如泰州。丁亥，復如揚州。…己亥，克淮南十有四州，以江為界。」 (顯德五年 3. ay 己亥 = 958-04-09 Jülyen; 3. ay 壬午朔 = 958-03-23) · BEYAN: 顯德三年(956) 「丙戌，取揚州」 (Zhou aldı) ve aynı yıl 「揚、光、舒、滁州復入于唐」 (Tang geri aldı) — kalıcı devir 958-04-09'a alındı. · DOGU-500-1281"},{f:"0958-04-09",t:"0960-02-04",d:"sonraki-zhou-5hanedan",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 12 「己亥，克淮南十有四州，以江為界」 (958-04-09) ‖ BİTİŞ: Zhou'nun sonu 960-02-04 (cin3 Kaifeng zinciri; Tuotuo vd., Song shi, juan 1 «Taizu ben ji 1» (zh.wikisource…). · DOGU-500-1281"},{f:"0960-02-04",t:"1276-08-23",d:"song",kesinlik:"gun",kaynak:"Tuotuo vd., Song shi, juan 1 «Taizu ben ji 1» (zh.wikisource.org/wiki/宋史/卷001): 「建隆元年春正月乙巳，大赦，改元，定有天下之號曰宋。」 · Xin Wudai shi, juan 12: 「七年春正月甲辰，遜于位。宋興。」 (Song'un kuruluşu 960-02-04; Zhou çocuk imparatorunun feragati 960-02-03 BEYANI: Kaifeng yamasıyla aynı) ‖ BİTİŞ: Yuan shi, juan 9 «Shizu ji 6» (zh.wikisource.org/wiki/元史/卷009): 「秋七月乙未，行中書省…乙巳，朱煥以揚州降」 (至元十三年 7. ay 乙巳 = 1276-08-23 Jülyen) ; 「乙亥，斬宋淮東制置使李庭芝、都統姜才于揚州市」. Song egemenliği (Yangzhou, Huainan) Song shi 47'de 「庚午，大元兵至揚子橋，揚州都撥發官雷大震出戰死」 (德祐元年 4. ay) gibi ifadelerden dolaylı görülür; Song shi coğrafya bölümü açılmadı. · DOGU-500-1281"},{f:"1276-08-23",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"gun",kaynak:"Yuan shi, juan 9 「乙巳，朱煥以揚州降」 (1276-08-23) · 「置行御史臺于揚州」 (至元十四年) Yuan idaresinin sürdüğünü gösterir. · DOGU-500-1281"},{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-05-20", d:"guney-ming"},
     {f:"1645-05-20", t:"1853-03-19", d:"qing-hanedani"},
     {f:"1853-03-19", t:"1864-07-19", d:"taiping"},
     {f:"1864-07-19", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Suzhou", tur:"sehir", lat:31.2990, lon:120.5850, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1860-06-02", d:"qing-hanedani"},
     {f:"1860-06-02", t:"1863-12-04", d:"taiping"},
     {f:"1863-12-04", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Hangzhou — Song'un son başkenti Lin'an; Marco Polo'nun "Kinsay"ı.
{ ad:"Hangzhou", tur:"sehir", lat:30.2740, lon:120.1550, g:2, k:3, d:[],
  s:[{f:"0907-06-01",t:"0978-06-09",d:"wuyue",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 67 «Wuyue shijia» (zh.wikisource.org/wiki/新五代史/卷67; açıldı, okundu): «梁太祖即位，封鏐吳越王兼淮南節度使。客有勸鏐拒梁命者，鏐笑曰：「吾豈失為孫仲謀邪！」遂受之。» ‖ bitiş: Xin Wudai shi, juan 67 (zh.wikisource.org/wiki/新五代史/卷67; okundu): «太平興國三年，詔俶來朝，俶舉族歸于京師，國除。» | DÜZELTME (kuyrukcin): cin2 diliminin t'si 978-01-01 (yıl düzeyi) idi ve cin3 song diliminin f=978-06-09'u ile arasında 159 günlük boşluk bırakıyordu; Wuyue t=978-06-09 yapıldı (Song shi 4 «五月乙酉…錢俶獻其兩浙諸州», cin3). · DOGU-500-1281"},{f:"0978-06-09",t:"1000-01-01",d:"song",kesinlik:{"f": "gun", "t": "yil"},kaynak:"Tuotuo vd., Song shi, juan 4 «Taizong ben ji 1» (zh.wikisource.org/wiki/宋史/卷004, okundu): 「夏四月乙卯朔……五月乙酉，赦漳、泉，仍給復一年。錢俶獻其兩浙諸州，凡得州十三、軍一、縣八十六、戶五十五萬六百八十、兵一十一萬五千三十六。」 · BEYAN: wuyue künyesinin t değeri (978?) bu kümenin dışındadır. · DOGU-500-1281"},{f:"1000-01-01",t:"1276-02-04",d:"song",kesinlik:{t:"gun"},kaynak:"Britannica, «Hangzhou» (britannica.com/place/Hangzhou; tarayıcıda açıldı ve okundu 18.10.2026): 'During the Ten Kingdoms (Shiguo) period (907–960), Hangzhou was the capital of the state of Wu-Yue. In the later Song period (960–1279), northern China fell to the Jin (Juchen) dynasty (1115–1234); from 1127 the Song rulers were confined to southern China, and they made Hangzhou (then known as Lin’an) their capital.' · 'capital … of the state of Wu-Yue (907–978)' · Columbia Electronic Encyclopedia «Hangzhou» (encyclopedia.com): 'It was the capital of the Southern Sung dynasty from 1132 to 1276, when it was sacked by Kublai Khan.' · BEYAN: Wu-Yue 978’de biter (Britannica), sonrası Song (960-1279) — Britannica ‘978’de Song aldı’ cümlesini vermez, çıkarım · f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor; edinim günü değil, D210) · ONCE1281-GERIYE"},{f:"1276-02-04", t:"1368-01-23", d:"yuan-hanedani",kaynak:"[ONCE1281-GERIYE f 1281-01-01 → 1276-01-01] Columbia Electronic Encyclopedia «Hangzhou» (encyclopedia.com): 'It was the capital of the Southern Sung dynasty from 1132 to 1276, when it was sacked by Kublai Khan.' · yıl düzeyi; gün kaynaktan alınmadı · ONCE1281-GERIYE · SINIR-GUN-1023: f 1276-01-01 → 1276-02-04 (Emre onayı 23.10.2026) — Tuotuo vd., Song shi, juan 47 «Yingguogong ben ji» (zh.wikisource.org/wiki/宋史/卷047, 23.10.2026 okundu): 德祐二年「春正月丁卯朔」…「甲申，大元兵至皋亭山，遣監察御史楊應奎上傳國璽降」 Takvim: 甲申 günü Jülyen 1276-02-04 (JDN gün-ganzhi hesabı; ay başı 丁卯 = 1276-01-18 ile tutarlı; tabloyla çapraz kontrol yapılamadı). Gün Song sarayının teslim (devlet mührü) günüdür; Shaoxing ve Chenzhou kırılmalarına dokunulmadı"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-07-06", d:"guney-ming"},
     {f:"1645-07-06", t:"1861-12-29", d:"qing-hanedani"},
     {f:"1861-12-29", t:"1864-03-31", d:"taiping"},
     {f:"1864-03-31", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Shaoxing", tur:"sehir", lat:30.0300, lon:120.5800, g:0, k:3, d:[],
  s:[{f:"1000-01-01",t:"1276-01-01",d:"song",kesinlik:{f:"belirsiz",t:"yil"},kaynak:"«紹興府，本越州，大都督府，會稽郡，鎭東軍節度。大觀元年，» «唐初為越州，又改會稽郡，又仍為越州。宋為紹興府。元至元十三年，改紹興路» Songshi 88 (地理四 兩浙路 紹興府: 越州, 紹興元年 (1131)府) ve Yuanshi 62. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1276-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"«唐初為越州，又改會稽郡，又仍為越州。宋為紹興府。元至元十三年，改紹興路» Yuanshi 62 (地理五 紹興路): 至元十三年 (1276) Yuan’a geçti; şehir özelinde gün/ay yok. f: Yıl hassasiyeti: Yuanshi 62 「元至元十三年，改紹興路」 (ay-gün kaynakta yok) → YYYY-01-01. Hangzhou’nun teslimi (Lin’an) aynı yıl başı: mevcut madde 1276-01-01. · VERI-MS1-1281"},{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1646-07-06", d:"guney-ming"},
     {f:"1646-07-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Şanghay — 1842 Nanking Antlaşması'yla açılan beş limandan biri;
// imtiyaz bölgeleri (1845 İngiliz, 1849 Fransız, 1863 Ortak) EGEMENLİK
// devri değil KİRA ve yargı muafiyetidir, bu yüzden ayrı pencere ALMADI.
// Kiralanan ve idaresi tamamen devredilen yerler (Qingdao, Lüşun,
// Hong Kong, Makao) pencere aldı — ayrım kasıtlıdır.
{ ad:"Şanghay", tur:"liman", lat:31.2300, lon:121.4740, g:2, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Ningbo", tur:"liman", lat:29.8680, lon:121.5440, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1646-07-06", d:"guney-ming"},
     {f:"1646-07-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Wenzhou", tur:"liman", lat:27.9940, lon:120.6990, g:0, k:3, d:[],
  s:[
     {f:"-0191-01-01",t:"-0137-01-01",d:"dongou",kesinlik:{f:"yil",t:"yil"},kaynak:"Shiji juan 114 «Dongyue liezhuan» (zh.wikisource.org/wiki/史記/卷114, okundu): «孝惠三年…乃立搖為東海王，都東甌，世俗號為東甌王。» ; «建元三年，閩越發兵圍東甌…東甌請舉國徙中國，乃悉舉眾來，處江淮之閒。» · Sima Qian, Shiji juan 22 «Han xing yilai jiangxiang mingchen nianbiao» (zh.wikisource.org/wiki/史記/卷022, okundu; satır başlığı MÖ yıl): MÖ 192 satırı «孝惠…三» (Huidi 3. yıl; MÖ 194 = 1. yıl); MÖ 138 satırı «三。東甌王廣武侯望率其眾四萬餘人來降，處廬江郡。» (Jianyuan 3. yıl) | BEYANLI YAKLAŞIKLIK: Başkent 'Dongou' = atlas noktası Wenzhou (modern şehir yaklaşık yeri); başkentin kesin yeri kaynakta bu ad dışında verilmez. 138'de halk Jiang-Huai'ye göç ettirildi; bölgenin sonraki sahibi bu pakette yazılmadı. · ASYA-ZINCIR-1024 (W2b)"},
     {f:"-0137-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: -0137-01-01–1281-01-01 arası sahip YAZILMADI: önceki dilim (dongou) kaynaklı olarak -0137-01-01'te biter, sonraki dilim (yuan-hanedani) 1281-01-01'te başlar; aradaki dilim için bu pakette (ASYA-ZINCIR-1024) kaynak okunmadı/bulunamadı. Boşluk komşuya İTİLMEDİ (VERI-YAPISI __BOSLUK__ kuralı); BORÇ: bu dilim için TDV ve ardıl kaynak taraması. · ASYA-ZINCIR-1024"},
     {f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1646-10-06", d:"guney-ming"},
     {f:"1646-10-06", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Hefei", tur:"sehir", lat:31.8210, lon:117.2270, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Anqing", tur:"kale", lat:30.5090, lon:117.0430, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1853-02-24", d:"qing-hanedani"},
     {f:"1853-02-24", t:"1861-09-05", d:"taiping"},
     {f:"1861-09-05", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Wuchang (Wuhan) — Yangtze'nin orta havzasının kilidi; Taiping isyanı
// burada başladı (1852) ve 10 Ekim 1911 Wuchang ayaklanması Qing'i yıktı.
{ ad:"Wuchang (Wuhan)", tur:"sehir", lat:30.5657, lon:114.3337, g:1, k:3, d:[],
  s:[{f:"1000-01-01",t:"1275-01-15",d:"song",kesinlik:{f:"belirsiz",t:"gun"},kaynak:"«鄂州，緊，江夏郡，武昌軍節度。初爲武淸軍，至道二年，始改» «宋為荊湖北路。元憲宗末年，世祖南伐，自黃州陽羅洑，橫橋梁，貫鐵鎖» Songshi 88 (荊湖北路 鄂州 = Wuchang) ve Yuanshi 63 (武昌路). 1259 Kubilay’ın Ezhou kuşatması (Yuanshi 63) kalıcı devir değil, kuşatma kaldırıldı. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1275-01-15",t:"1281-01-01",d:"yuan-hanedani",kesinlik:{f:"gun",t:"yil"},kaynak:"«己未，師次鄂州，宋直祕閣湖北提舉張晏然、權知漢陽軍王儀、知德安府來興國並以城降» «至元十一年，丞相伯顏從陽羅洑南渡，權州事張晏然以城降，自是湖北州郡悉下» Yuanshi 8 至元十一年十二月己未. f: Gün çevirimi: Yuanshi 8 至元十一年十二月己未 → Jülyen 1275-01-15 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 12/17; 元世祖至元11年(歲次甲戌)12月17日; gan-zhi JDN hesabıyla eşleşti). · VERI-MS1-1281"},{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1911-10-10", d:"qing-hanedani"},
     {f:"1911-10-10", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Jingzhou", tur:"kale", lat:30.3500, lon:112.1900, g:0, k:4, d:[],
  s:[{f:"0500-01-01",t:"0502-04-30",d:"guney-qi",kesinlik:"yil",kaynak:"Nan Qi shu juan 8: «中興元年春三月乙巳，即皇帝位» (501-04-14 He Di Jiangling'de) | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı: sahiplik öncesinden sürüyor) · DOGU-500-1281"},{f:"0502-04-30",t:"0555-01-07",d:"liang-guney",kesinlik:"gun",kaynak:"SAHİP BEYANLI: liang-guney (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Liang shu juan 2 (502-04-30); Zhou shu juan 2: «辛亥，進攻城，其日克之» (555-01-07; Xiao Yi 552-554 Jiangling'de imparator) · DOGU-500-1281"},{f:"0555-01-07",t:"0587-10-26",d:"hou-liang-xi-liang",kesinlik:"gun",kaynak:"SAHİP BEYANLI: hou-liang-xi-liang (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Zhou shu juan 2/48: «立蕭詧為梁主，居江陵 … 年號大定»; Sui shu juan 1 «辛卯，廢梁國，曲赦江陵» (587-10-26) · DOGU-500-1281"},{f:"0587-10-26",t:"0618-01-01",d:"sui",kesinlik:"yil",kaynak:"SAHİP BEYANLI: sui (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Sui shu juan 1 (587-10-26); bitiş 0618-01-01 yıl yaklaşımı: Jiu Tang shu juan 56 «武德元年，遷都江陵» (BEYANLI) · DOGU-500-1281"},{f:"0618-01-01",t:"0621-11-10",d:"sui-liang-xiao-xian",kesinlik:"yil",kaynak:"Jiu Tang shu juan 56 «義寧二年，僭稱皇帝 … 武德元年，遷都江陵»; «乙巳，趙郡王孝恭平荊州，獲蕭銑» (621-11-10) · DOGU-500-1281"},{f:"0621-11-10",t:"0907-06-01",d:"tang",kesinlik:"gun",kaynak:"Jiu Tang shu juan 1 (621-11-10); bitiş Tang t=907-06-01 (okunmadı: 7.-9. yy. Jingnan askerî valiliği / Nanping) · DOGU-500-1281"},{f:"0907-06-01",t:"0923-11-19",d:"sonraki-liang-5hanedan",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 69 «Jingnan shijia» (zh.wikisource.org/wiki/新五代史/卷69; açıldı, okundu): «梁兵攻破襄州，匡凝奔于吳，匡明奔于蜀，乃以季興為荊南節度觀察留後。開平元年，拜季興節度使。荊南節度十州，當唐之末，為諸道所侵，季興始至，江陵一城而已。» ‖ bitiş: Xin Wudai shi, juan 3 «Liang benji san» (zh.wikisource.org/wiki/新五代史/卷03; okundu): «戊寅，皇帝崩。梁亡。»; juan 5 «Tang benji» (zh.wikisource.org/wiki/新五代史/卷05; okundu): «冬十月壬申，如鄆州以襲梁。甲戌，取中都。丁丑，取曹州。己卯，滅梁。» · DOGU-500-1281"},{f:"0923-11-19",t:"0924-01-01",d:"sonraki-tang-5hanedan",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 3 «Liang benji san» (zh.wikisource.org/wiki/新五代史/卷03; okundu): «戊寅，皇帝崩。梁亡。»; juan 5 «Tang benji» (zh.wikisource.org/wiki/新五代史/卷05; okundu): «冬十月壬申，如鄆州以襲梁。甲戌，取中都。丁丑，取曹州。己卯，滅梁。» ‖ bitiş: Xin Wudai shi, juan 69 (zh.wikisource.org/wiki/新五代史/卷69; okundu): «梁亡，唐莊宗入洛，下詔慰諭季興，…季興…朝于洛陽。…同光三年，封南平王。» · DOGU-500-1281"},{f:"0924-01-01",t:"0963-01-01",d:"nan-ping-jingnan",kesinlik:"yil",kaynak:"Xin Wudai shi, juan 69 (zh.wikisource.org/wiki/新五代史/卷69; okundu): «梁亡，唐莊宗入洛，下詔慰諭季興，…季興…朝于洛陽。…同光三年，封南平王。» ‖ bitiş: Xin Wudai shi, juan 69 (zh.wikisource.org/wiki/新五代史/卷69; okundu): «建隆四年，太袓命慕容延釗等討之。延釗假道荊南，約以兵過城外。…前鋒遽入其城。繼冲…即詣延釗納牌印，…乾德元年，…九月，…率其將吏、宗族五百餘人朝于京師» · DOGU-500-1281"},{f:"0963-01-01",t:"1275-05-03",d:"song",kesinlik:"yil",kaynak:"cin2 nan-ping-jingnan bitişi 963-01-01 (Xin Wudai shi 69: Gao Jichong 963 teslim; yıl düzeyi) · Song'un Jingzhou (Jiangling fu) egemenliği Song shi 47'de «京湖宣撫…知江陵府» ifadeleriyle görülür ‖ BİTİŞ: Yuan shi, juan 8 (zh.wikisource.org/wiki/元史/卷008): 「丁未，阿里海牙遣郎中張鼎齎詔入江陵，宋…湖制置朱禩孫，湖北制置副使高達，京西湖北提刑青陽夢炎、李湜始出降」 ; 「阿里海牙入江陵，分道遣使招諭未下州郡」 (至元十二年 4. ay 丁未 = 1275-05-03 Jülyen) · Song shi, juan 47: 「戊申，京湖宣撫朱禩孫、湖北制置副使高達以江陵降，京湖北路相繼皆下」 (德祐元年 4. ay 戊申 = 1275-05-04; iki kaynak 1 gün farklı: Yuan shi esas). · DOGU-500-1281"},{f:"1275-05-03",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"gun",kaynak:"Yuan shi, juan 8 「阿里海牙入江陵」 (1275-05-03). · DOGU-500-1281"},{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Xiangyang — Moğolların 1268-1273 arasında beş yıl kuşattığı kale;
// düşüşü Güney Song'un sonunu getirdi. Bu dosyanın başlangıcında
// (1281) çoktan Yuan elindedir.
{ ad:"Xiangyang", tur:"kale", lat:32.0090, lon:112.1220, g:0, k:4, d:[],
  s:[{f:"1000-01-01",t:"1273-03-14",d:"song",kesinlik:{f:"belirsiz",t:"gun"},kaynak:"«襄陽府，望，襄陽郡，山南東道節度。本襄州。宣和元年，升爲府» Songshi 85 (地理一 京西南路 襄陽府). f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1273-03-14",t:"1281-01-01",d:"yuan-hanedani",kesinlik:{f:"gun",t:"yil"},kaynak:"«聽自製兵仗，從之。丁未，宋京西安撫使、知襄陽府呂文煥以城降» «元至元十年，兵破樊城，襄陽守臣呂文煥降，罷宋京西安撫司，立河南等路行中書省，更襄陽府為散府，未幾罷省» Yuanshi 8 (世祖五) 至元十年二月丁未. f: Gün çevirimi: Yuanshi 8 至元十年二月丁未 → Jülyen 1273-03-14 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 2/24; 元世祖至元10年(歲次癸酉)2月24日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1643-01-01", d:"ming-hanedani"},
     {f:"1643-01-01", t:"1645-06-08", d:"dashun"},
     {f:"1645-06-08", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Changsha", tur:"sehir", lat:28.2280, lon:112.9390, g:0, k:2,kd:[{f:"1673-12-28",t:"1681-12-07",k:1,m:"Changsha"}], d:[],
  s:[
     {f:"0025-08-05",t:"0215-01-01",d:"dogu-han",kesinlik:{f:"gun",t:"yil"},kaynak:"Chen Shou, Sanguozhi 32 (Xianzhu zhuan), zh.wikisource.org/wiki/三國志/卷32 ; Fan Ye, Hou Han Shu 1上 (Guangwu ji), zh.wikisource.org/wiki/後漢書/卷1上 ‖ f: Guangwu 建武 1 'zhi 6. ay 己未' (Hou Han Shu 1上), Çin takvimi: 25/6 己未 = 0025-08-05; Changsha'nın bu günde Han'a girdiği tanıksız (en geç tanık). 208-215: Changsha valisi Han Xuan, Liu Bei'ye teslim oldu (Sanguozhi 32: '長沙太守韓玄…皆降'); Liu Bei Han'ın Jingzhou muhtarı olarak tutar, ayrı devlet değil (Shu Han künyesi 221). t: Jian'an 20 (=215) Sun Quan/Lü Meng (Sanguozhi 32). · CIN-SANGUO"},
     {f:"0215-01-01",t:"0280-05-01",d:"sun-wu",kesinlik:{f:"yil",t:"gun"},kaynak:"Chen Shou, Sanguozhi 32 (Xianzhu zhuan), zh.wikisource.org/wiki/三國志/卷32 ; Jin Shu 3 (Wudi ji), zh.wikisource.org/wiki/晉書/卷003 ‖ f: Sanguozhi 32 'Jian'an 20, Sun Quan Lü Meng'i yollayıp Changsha, Lingling, Guiyang'ı aldı', sonra Xiang nehri sınırıyla Changsha Sun Quan'a bırakıldı. Wu künyesi 222'de başlıyor (7 yıl hayalet UYARISI; aynı polity: Sun Quan'ın Jiangdong rejimi ⇒ künye GENİŞLET). t: Jin Shu 3 'Taikang 1, 3. ay 壬寅' Sun Hao teslim; Çin takvimi çevirisi 280/3 壬寅 = 0280-05-01. · CIN-SANGUO"},
     {f:"0280-05-01",t:"0317-04-06",d:"bati-jin",kesinlik:{f:"gun",t:"gun"},kaynak:"[T UZATILDI 0316-12-11 -> 0317-04-06: Min Di'nin Chang'an'daki teslimi (316-12-11) bu şehirdeki Jin idaresini kesmedi; Sima Rui 0317-04-06'da Jin Prensi oldu (Jin shu 6, 建武元年 3. ay 辛卯); künye bati-jin t genişletildi] Jin Shu 3 (Wudi ji), zh.wikisource.org/wiki/晉書/卷003 ; Jin Shu 5 (Mindi ji), zh.wikisource.org/wiki/晉書/卷005 ‖ Wu'nun teslimi (Jin Shu 3). Changsha Jin'in Jingzhou/Xiangzhou bölgesinde kalır. 4. yy başı kısa isyanlar (Zhang Chang vb.) bu oturumda okunmadı, dönem açılmadı. t: Jin Shu 5 'Jianxing 4, 11. ay 乙未' (metinde 乙末 yazım hatası), Çin takvimi 316/11 乙未 = 0316-12-11 (Mindi'nin Han-Zhao'ya teslimi; Changsha'nın kendisi el değiştirmez, künye geçişi). · CIN-SANGUO"},
     {f:"0317-04-06",t:"0420-07-10",d:"dogu-jin",kesinlik:{f:"gun",t:"gun"},kaynak:"Jin Shu 5 (Mindi ji), zh.wikisource.org/wiki/晉書/卷005 ; Song Shu 3 (Wudi ji xia), zh.wikisource.org/wiki/宋書/卷3 ‖ Künye geçişi (Batı Jin → Doğu Jin) — Changsha toprak olarak el değiştirmez; künye Doğu Jin 317-01-01'de başlıyor (21 gün fark, pencere içi). t: Song Shu 3 'Yongchu 1, 6. ay 丁卯' Liu Yu'nun taç giymesi, 420/6 丁卯 = 0420-07-10. · CIN2-MS317 ‖ f ARTIRILDI: k12 0316-12-11'de başlatıyordu; Batı Jin t 0317-04-06'ya uzatıldığı için (Sima Rui Jin Prensi, Jin shu 6) Doğu Jin burada başlar."},
     {f:"0420-07-10",t:"0479-05-29",d:"liu-song",kesinlik:{f:"gun",t:"gun"},kaynak:"Song Shu 3 (Wudi ji xia), zh.wikisource.org/wiki/宋書/卷3 ; Nan Qi Shu 2 (Gaodi ji xia), zh.wikisource.org/wiki/南齊書/卷2 ‖ Liu Song dönemi. t: Nan Qi Shu 2 'Jianyuan 1, 4. ay 甲午' Xiao Daocheng taç giyer, 479/4 甲午 = 0479-05-29. · CIN2-MS317"},
     {f:"0479-05-29",t:"0502-04-30",d:"guney-qi",kesinlik:{f:"gun",t:"gun"},kaynak:"Nan Qi Shu 2 (Gaodi ji xia), zh.wikisource.org/wiki/南齊書/卷2 ; Liang Shu 2 (Wudi ji zhong), zh.wikisource.org/wiki/梁書/卷02 ‖ Nan Qi dönemi. t: Liang Shu 2 'Tianjian 1, 4. ay 丙寅' Xiao Yan taç giyer, 502/4 丙寅 = 0502-04-30. · CIN2-MS317"},
     {f:"0502-04-30",t:"0557-11-16",d:"liang-guney",kesinlik:{f:"gun",t:"gun"},kaynak:"Liang Shu 2 (Wudi ji zhong), zh.wikisource.org/wiki/梁書/卷02 ; Chen Shu 2 (Gaozu ji xia), zh.wikisource.org/wiki/陳書/卷2 ‖ Liang dönemi (Xiangzhou). 549-557 karışıklığında (Hou Jing, Wang Lin'in Xiangzhou'daki valiliği) yerel sahiplik değişimlerinin gün kaydı bulunamadı; Wang Lin 557 sonbaharında 'Xiangchuan'a dönmek' ister (Chen Shu 2) ⇒ Liang zincirinde sayıldı. t: Chen Shu 2 'Yongding 1, 10. ay 乙亥' Chen Baxian taç giyer, 557/10 乙亥 = 0557-11-16. · CIN2-MS317"},
     {f:"0557-11-16",t:"0561-02-24",d:"__BOSLUK__",kesinlik:{f:"gun",t:"gun"},kaynak:"Chen Shu 2 (Gaozu ji xia), zh.wikisource.org/wiki/陳書/卷2 ; Chen Shu 3 (Shizu ji), zh.wikisource.org/wiki/陳書/卷3 ‖ Chen Shu 2: Wang Lin 'Xiangchuan'a (Changsha) dönmek ister'; Chen Shu 3 (Tianjia 2): 'Zhou Xiangzhou şehir komutanı Yin Liang teslim oldu, Xiangzhou pasifize edildi' — yani şehir 557-561 arasında bir süre Wang Lin'in/Kuzey Zhou'nun elindeydi; Chen'e geçmediği gün-gün belirlenemedi (Wang Lin'in Şubat 560 yenilgisi ile Zhou'nun rolü bu oturumda okunamadı). Sahibi kaynakta tek devlet olarak bulunamadı ⇒ __BOSLUK__ (beyanlı); kuzey-zhou künyesi (557-581) yaklaşıklık olarak YAZILMADI. · CIN2-MS317"},
     {f:"0561-02-24",t:"0589-02-02",d:"chen",kesinlik:{f:"gun",t:"gun"},kaynak:"Chen Shu 3 (Shizu ji), zh.wikisource.org/wiki/陳書/卷3 ; Chen Shu 28 (Gaozong zhu zi zhuan, Yueyang wang Shushen), zh.wikisource.org/wiki/陳書/卷28 ‖ f: Chen Shu 3 'Tianjia 2, 1. ay 辛未': 561/1 辛未 = 0561-02-24. 560'ta Chen Wang Lin'i yenip Xiangzhou valisi atadı (Sun Yang), şehir ancak 561'de alındı. t: Sui Shu 2 'Kaihuang 9, 1. ay 丙子' Jianye düştü, Chen Houzhu esir; 589/1 丙子 = 0589-02-02 (merkezî olay; Changsha'nın yerel teslim günü: Chen Shu 28 yalnız 'Zhenming 3' der; f/t en geç tanıktan). · CIN2-MS317"},
     {f:"0589-02-02",t:"0617-01-01",d:"sui",kesinlik:{f:"gun",t:"yil"},kaynak:"Sui Shu 2 (Gaozu ji xia; kaynak sayfası wikisource 隋書/卷02), zh.wikisource.org/wiki/隋書/卷02 ; Sui Shu 48 (Yang Su zhuan), zh.wikisource.org/wiki/隋書/卷48 ; Chen Shu 28 (Gaozong zhu zi zhuan, Yueyang wang Shushen), zh.wikisource.org/wiki/陳書/卷28 ‖ Chen'in Xiangzhou valisi Chen Shushen önce teslim ister (Sui Shu 48) sonra Sui generali Pang Hui'yi öldürüp isyan eder, Xue Zhou tarafından ezilir (Chen Shu 28; gün yok, olay yazıldı, dönem açılmadı). Sui Shu 31: Xiangzhou → 'Tanzhou zongguanfu'; Changsha ilçesi adı. t: Jiu Tang 56 'Daye 13' (=617) Xiao Xian ayaklanması (yıl; Changsha'nın Liang'a katıldığı yıl bulunamadı, f en geç tanıktan). · CIN2-MS317"},
     {f:"0617-01-01",t:"0621-11-10",d:"xiao-xian-liang",kesinlik:{f:"yil",t:"gun"},kaynak:"Jiu Tang Shu 56 (Xiao Xian zhuan), zh.wikisource.org/wiki/舊唐書/卷56 ; Jiu Tang Shu 1 (Gaozu ji), zh.wikisource.org/wiki/舊唐書/卷1 ‖ Xiao Xian'ın Liang'ı (617-621, Jiangling merkezli). Künye YOK: önerilen id 'xiao-xian-liang', ömür 617 (Jiu Tang 56 'Daye 13') – 621-11-10 (Jiu Tang 1: Wude 4, 10. ay 乙巳, Çin takvimi çevirisi 621/10 乙巳 = 0621-11-10); Changsha'da Xiao Xian adına komutan Dong Jingzhen (Jiu Tang 56 '時景珍出鎮長沙'). Sui'den kopuş günü bulunamadı. ‖ tanık: 時景珍出鎮長沙，銑下書赦之 · CIN2-MS317"},
     {f:"0621-11-10",t:"0690-10-16",d:"tang",kesinlik:{f:"gun",t:"gun"},kaynak:"Jiu Tang Shu 1 (Gaozu ji), zh.wikisource.org/wiki/舊唐書/卷1 ; Jiu Tang Shu 6 (Wu Zetian ji), zh.wikisource.org/wiki/舊唐書/卷6 ‖ Tang (Tanzhou). t: Jiu Tang 6 '九月九日壬午，革唐命，改國號為周'. ÇEVİRİ UYARISI: Sinica ay tablosu 690/9 壬午'yu 0690-08-17 (9/8), 690/11 壬午'yu 0690-10-16 (11/9) verir; iki tarih de 壬午 (60 gün); metindeki 'ayın 9'u' (Çong-yang günü) ve 載初 takviminin ay kayması nedeniyle 0690-10-16 seçildi — seçim belirsizdir, gerçek Ağustos tarihi olabilir (kesinlik yine 'gun' ama ±60 gün riski beyan). · CIN2-MS317"},
     {f:"0690-10-16",t:"0705-03-03",d:"wu-zhou",kesinlik:{f:"gun",t:"gun"},kaynak:"Jiu Tang Shu 6 (Wu Zetian ji), zh.wikisource.org/wiki/舊唐書/卷6 ; Jiu Tang Shu 7 (Zhongzong ji), zh.wikisource.org/wiki/舊唐書/卷7 ‖ Wu Zetian'ın Zhou'su (künye wu-zhou 690-705). Changsha'ya özgü tanık yok; künye geçişi. t: Jiu Tang 7 '二月甲寅，復國號，依舊為唐' (Shenlong 1), Çin takvimi çevirisi 705/2 甲寅 = 0705-03-03 (Sinica, Julyen). · CIN2-MS317"},
     {f:"0705-03-03",t:"0894-01-01",d:"tang",kesinlik:{f:"gun",t:"yil"},kaynak:"Jiu Tang Shu 7 (Zhongzong ji), zh.wikisource.org/wiki/舊唐書/卷7 ; Ouyang Xiu, Xin Wudai Shi 66 (Chu shijia), zh.wikisource.org/wiki/新五代史/卷66 ‖ Tang. t: Xin Wudai Shi 66 'Qianning 1 (894) Liu Jianfeng Hunan'a girip Tanzhou'yu aldı' (ZZTJ 259 başlığı: Qianning 1 = 894). Tang Changsha'ya nominal egemenlik sürdürür (Liu Jianfeng, Ma Yin Tang atamalı jiedushi); fiilî polity Ma rejimi, künye GENİŞLET. · CIN2-MS317"},
     {f:"0894-01-01",t:"0951-11-17",d:"chu-ma",kesinlik:{f:"yil",t:"gun"},kaynak:"Ouyang Xiu, Xin Wudai Shi 66 (Chu shijia), zh.wikisource.org/wiki/新五代史/卷66 ; Sima Guang, Zizhi Tongjian 259, zh.wikisource.org/wiki/資治通鑑/卷259 ; Sima Guang, Zizhi Tongjian 276, zh.wikisource.org/wiki/資治通鑑/卷276 ‖ Liu Jianfeng (894) ve Ma Yin (Qianning 3 = 896, 'Tang Tanzhou刺史 atadı'; 4. yıl Wu'an jun jiedushi); 927'de Ma Yin Chu Kralı (Z276 'Tiancheng 2') — Chu-Ma künyesi 927-951 (33 yıl hayalet UYARISI: aynı polity ⇒ künye GENİŞLET; 'Changsha' = Chu başkenti 'Changsha fu'). t: ZZTJ 290 '甲辰，希崇等從鎬入城' (Guangshun 1, 10. ay), çevrildi 951/10 甲辰 = 0951-11-17. ‖ tanık: 唐拜殷潭州刺史 · CIN2-MS317"},
     {f:"0951-11-17",t:"0952-11-04",d:"guney-tang",kesinlik:{f:"gun",t:"gun"},kaynak:"Sima Guang, Zizhi Tongjian 290, zh.wikisource.org/wiki/資治通鑑/卷290 ; Ouyang Xiu, Xin Wudai Shi 66 (Chu shijia), zh.wikisource.org/wiki/新五代史/卷66 ; Sima Guang, Zizhi Tongjian 291, zh.wikisource.org/wiki/資治通鑑/卷291 ‖ Nan Tang (Li Jing) Bian Hao ile Tanzhou'da; kısa ama ZZTJ'de iki ucu gün gün (951-11-17 → 952-11-04); Xin Wudai Shi 66 yalnız 'Zhou Guangshun 1' der (yıl çift teyit). Dönem olarak açıldı çünkü bir yıldan uzun ve iki ucu kaynaklı. t: ZZTJ 291 '丁酉旦，王逵入城', 952/10 丁酉 = 0952-11-04. ‖ tanık: 丙申夜，鎬棄城走 · CIN2-MS317"},
     {f:"0952-11-04",t:"0963-03-10",d:"hunan-wuping-rejimi",kesinlik:{f:"gun",t:"gun"},kaynak:"Sima Guang, Zizhi Tongjian 291, zh.wikisource.org/wiki/資治通鑑/卷291 ; Ouyang Xiu, Xin Wudai Shi 66 (Chu shijia), zh.wikisource.org/wiki/新五代史/卷66 ; Song Shi 1 (Taizu ji 1), zh.wikisource.org/wiki/宋史/卷001 ‖ Wang Kui/Liu Yan, sonra Zhou Xingfeng'in Hunan rejimi (Wu'ping jun jiedushi) — Sonraki Zhou/Song'a nominal bağlı. Künye YOK: önerilen id 'hunan-wuping-rejimi', ömür 952-11-04 (ZZTJ 291) – 963-03-10 (Song Shi 1 'Qiande 1, 2. ay 乙未, Tanzhou alındı'; çevrildi 963/2 乙未 = 0963-03-10). 956-962 arası içsel iktidar el değiştirmeleri (Liu Yan → Wang Kui → Zhou Xingfeng) Changsha'nın bağlı olduğu devleti değiştirmez, dönem açılmadı. ‖ tanık: 丁酉旦，王逵入城，自稱武平節度副使 · CIN2-MS317"},
     {f:"0963-03-10",t:"1276-01-18",d:"song",kesinlik:"gun",kaynak:"[f 0960-02-04 -> 0963-03-10: 952-11-04 sonrası Changsha dilimi hunan-wuping-rejimi (Song'a nominal tâbi) 963-03-10'a dek sürer, Song orayı 963-03-10'da alır (ZZTJ 291, Song shi); Song f atlasta önceden 960-02-04 idi] Tuotuo vd., Song shi, juan 1 «Taizu ben ji 1» (zh.wikisource.org/wiki/宋史/卷001): 「建隆元年春正月乙巳，大赦，改元，定有天下之號曰宋。」 · Xin Wudai shi, juan 12: 「七年春正月甲辰，遜于位。宋興。」 (Song'un kuruluşu 960-02-04; Zhou çocuk imparatorunun feragati 960-02-03 BEYANI: Kaifeng yamasıyla aynı) · Xin Wudai shi 66: 「建隆三年，行逢病，…行逢卒，子保權立。」 (Zhou Xingfeng 962 ölümü; Song idaresi 963'te tamamlanır — Song shi 483; açılmadı) ‖ BİTİŞ: Song shi, juan 47 (zh.wikisource.org/wiki/宋史/卷047): 「德祐二年春正月丁卯朔，大元兵自元年十月圍潭州，湖南安撫兼知州李芾拒守三月，大小戰數十合，力盡將破，芾闔門死」 · Yuan shi, juan 9: 「十三年春正月丁卯朔，克潭州，宋安撫使李芾盡室自焚死」 (至元十三年 1. ay 丁卯 = 1276-01-18 Jülyen; iki kaynak aynı gün). · DOGU-500-1281"},
     {f:"1276-01-18",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"gun",kaynak:"Yuan shi 9 「克潭州」 (1276-01-18) · Yuan shi 9 (至元十四年): 「潭州行省遣使上言：「廣南西路慶遠、欝林…皆降」」 (Tanzhou'da Yuan eyalet idaresi). · DOGU-500-1281"},
     {f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1647-01-01", d:"guney-ming"},
     {f:"1647-01-01", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1679-01-01", d:"san-fan"},
     {f:"1679-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Nanchang", tur:"sehir", lat:28.6820, lon:115.8580, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Jiujiang", tur:"liman", lat:29.7050, lon:116.0010, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1853-02-18", d:"qing-hanedani"},
     {f:"1853-02-18", t:"1858-05-19", d:"taiping"},
     {f:"1858-05-19", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// ===== 3e. Sichuan ve güneybatı =====

// Çengdu — Zhang Xianzhong 1644'te "Büyük Batı" (Daxi) devletini burada
// kurdu; Şun'dan ayrı bir isyan devletidir ama aynı yıllarda ve aynı
// çözünürlükte olduğu için ayrı kimlik açılmadı, "dashun" ile boyandı ve
// gerekçesi buraya yazıldı. Qing 1646'da aldı; 1673-1681 arasında Üç
// Feodal isyanı sırasında yeniden kaybetti.
{ ad:"Çengdu (Chengdu)", tur:"sehir", lat:30.5720, lon:104.0660, g:1, k:3, d:[],
  s:[
     {f:"-0315-01-01",t:"-0220-01-01",d:"qin-devleti",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye qin-devleti (Qin Devleti) · Shiji 5 (Qin benji), Huiwen 'gengyuan' 9. yıl: Sima Cuo Shu'yu fethetti ve yok etti; Huiwen'den sonra 'Shu hou Hui isyan etti, Sima Cuo Shu'yu yatıştırdı' (Zhaoxiang dönemi)."},
     {f:"-0220-01-01",t:"0025-01-01",d:"__BOSLUK__",kesinlik:{f:"onyil",t:"onyil"},kaynak:"BEYAN (VERI-MO-ARKEO): kaynak \"qin-devleti\" sahibini 0214-01-01'a dek veriyor ama künye t=-0220-01-01 → künye sonrası boşluk"},
     {f:"0025-01-01",t:"0036-01-01",d:"chengjia-gongsun-shu",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye chengjia-gongsun-shu (Chengjia (成家, Gongsun Shu)) · Hou Han shu 13 (Gongsun Shu): Gengshi döneminde 'Shu Wang' olup Chengdu'yu başkent yaptı; Jianwu 1 (MS 25) 4. ay imparator ilan etti; Jianwu 12'de sonu (Wu Han seferi, Chengdu kuşatması)."},
     {f:"0036-01-01",t:"0221-01-01",d:"__BOSLUK__",kesinlik:{f:"onyil",t:"onyil"},kaynak:"BEYAN (VERI-MO-ARKEO): iki kaynaklı dönem arasında sahip kaynakta yok (0036-01-01 … 0214-01-01) → boşluk, bos:'veri-yok' (kimsenin değil DEĞİL, araştırılmadı da DEĞİL: kaynak sessiz) || BEYAN (VERI-MO-ARKEO): kaynak \"shu-han\" sahibini 0214-01-01'dan itibaren veriyor ama künye f=0221-01-01 → o aralık künye ömrü DIŞI: boşluk (künye aşımı: devlet yoksa dönem kısaltılır)"},
     {f:"0221-01-01",t:"0263-01-01",d:"shu-han",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye shu-han (Shu Han) · Sanguozhi 32 (Xianzhu zhuan): Liu Bei Chengdu'yu onlarca gün kuşattı, Liu Zhang teslim oldu (Jian'an 19 = 214 başlığı); Zhangwu 1'de (221) imparator oldu. Son: Sanguozhi 28 (Deng Ai): Liu Shan imparatorluk mührünü gönderip teslim oldu, Ai Chengdu'ya girdi, Liu Shan prens ve ileri gelenlerle çıktı."},
     {f:"0263-01-01",t:"0266-02-08",d:"cao-wei",kesinlik:{f:"onyil",t:"gun"},kaynak:"künye cao-wei (Cao Wei) · Sanguozhi 28: Deng Ai Chengdu'ya girdi, Liu Shan teslim — Chengdu fiilen Wei komutasında. Sanguozhi 4 (Wei zhi 4, zh.wikisource.org/wiki/三國志/卷04; okundu): 景元四年 11. ay 「是月，蜀主劉禪詣艾降，巴蜀皆平」 (gün yok → onyil); 咸熙元年 「三月丁亥」 Liu Shan 安樂公 oldu. ‖ bitiş: ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 丙寅 (泰始元年 12. ay) → Jülyen 0266-02-08 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13) = Gregoryen 0266-02-08; 1582 öncesi gün Jülyen kalır ‖ Chen Shou, Sanguozhi (Wei zhi 4, zh.wikisource.org/wiki/三國志/卷04; açıldı, okundu): 「十二月壬戌，天祿永終，歷數在晉」 (Wei imparatorunun feragat fermanı, 壬戌 = 0266-02-04) ‖ Fang Xuanling vd., Jin shu 3 (zh.wikisource.org/wiki/晉書/卷003; açıldı, okundu): 「泰始元年…冬十二月丙寅，設壇于南郊」 (Sima Yan'ın taç günü 丙寅 = 0266-02-08; geçiş günü olarak taç günü alındı, feragat fermanı 4 gün önce) · BEYAN: Britannica 'Jin 265' der — Çin yıl adı (咸熙二年), 12. ay Jülyen 266 Şubat'ına düşer · CIN-SANGUO"},
     {f:"0266-02-08",t:"0304-01-01",d:"bati-jin",kesinlik:{f:"gun",t:"onyil"},kaynak:"ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 丙寅 (泰始元年 12. ay) → Jülyen 0266-02-08 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13) = Gregoryen 0266-02-08; 1582 öncesi gün Jülyen kalır ‖ Chen Shou, Sanguozhi (Wei zhi 4, zh.wikisource.org/wiki/三國志/卷04; açıldı, okundu): 「十二月壬戌，天祿永終，歷數在晉」 (Wei imparatorunun feragat fermanı, 壬戌 = 0266-02-04) ‖ Fang Xuanling vd., Jin shu 3 (zh.wikisource.org/wiki/晉書/卷003; açıldı, okundu): 「泰始元年…冬十二月丙寅，設壇于南郊」 (Sima Yan'ın taç günü 丙寅 = 0266-02-08; geçiş günü olarak taç günü alındı, feragat fermanı 4 gün önce) · BEYAN: Britannica 'Jin 265' der — Çin yıl adı (咸熙二年), 12. ay Jülyen 266 Şubat'ına düşer ‖ Jin shu 14 (晉書/卷014; okundu, Dili zhi, Yizhou): 「蜀郡〈秦置。統縣六，戶五萬。〉」 ; 「成都　廣都　繁　江原　臨邛　郫」 ‖ bitiş: sonraki dönemin başlangıcı (cheng-han, Jin shu 121: Li Xiong Chengdu'yu aldı, 永興元年 = 304; onyil düzeyi, mevcut dilim) · CIN-SANGUO"},
     {f:"0304-01-01",t:"0347-01-01",d:"cheng-han",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye cheng-han (Cheng-Han (成漢)) · Jin shu 121 (Li Xiong): Luo Te kapıyı açıp Li Xiong'u içeri aldı, 'Chengdu'yu aldı'; Yongxing 1'de (304) 'Chengdu Wang' ilan etti. Son: Li Shi (Jiaming 2, 3. ay 17. gün) Huan Wen'e teslim mektubu."},
     {f:"0347-01-01",t:"0907-06-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BEYAN (VERI-MO-ARKEO): antik zincir ile ilk mevcut dönem arasında sahip kaynakta yok → boşluk, bos:'veri-yok' (kimsenin değil DEĞİL, araştırılmadı da DEĞİL: kaynak sessiz)"},
     {f:"0907-06-01",t:"0925-12-08",d:"onceki-shu",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 63 «Qian Shu shijia» (zh.wikisource.org/wiki/新五代史/卷63; açıldı, okundu): «七年，梁滅唐，遣使者諭建，建拒而不納。…秋九月己亥，建乃即皇帝位。» ‖ bitiş: Xin Wudai shi, juan 5 (zh.wikisource.org/wiki/新五代史/卷05; okundu): «十一月丁未，高麗遣使者來。己酉，王衍降。»; juan 63: «魏王繼岌至成都，衍君臣面縛輿櫬，出降于七里亭。» · DOGU-500-1281"},
     {f:"0925-12-08",t:"0934-03-16",d:"sonraki-tang-5hanedan",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 5 (zh.wikisource.org/wiki/新五代史/卷05; okundu): «十一月丁未，高麗遣使者來。己酉，王衍降。»; juan 63: «魏王繼岌至成都，衍君臣面縛輿櫬，出降于七里亭。» ‖ bitiş: Sonraki Shu künyesi f=0934-01-01 (cin3): Meng Zhixiang’ın Sonraki Shu’su; devir maddesi cin3’e ait (bu kümede kaynak okunmadı) — BEYANLI sınır. | DÜZELTME (kuyrukcin): cin2 diliminin t'si 934-01-01 (yıl düzeyi) idi, cin3 sonraki-shu diliminin f=934-03-16'sı ile arasında 74 günlük boşluk kalıyordu; t=934-03-16 yapıldı (Sima Guang ZZTJ 278: 「己巳，知祥卽皇帝位于成都」; cin3). · DOGU-500-1281"},
     {f:"0934-03-16",t:"0965-02-17",d:"sonraki-shu",kesinlik:{"f": "gun", "t": "gun"},kaynak:"Sima Guang, Zizhi tongjian, juan 278 (Hu Sanxing notlu; zh.wikisource.org/wiki/資治通鑒_(胡三省音注)/卷278, okundu): 「蜀將吏勸蜀王知祥稱帝；己巳，知祥卽皇帝位于成都。」 · Ouyang Xiu, Xin Wudai shi, juan 64 «Hou Shu shi jia» (zh.wikisource.org/wiki/新五代史/卷64, okundu): 「明年閏正月，知祥乃即皇帝位，國號蜀。」 · BEYAN: BEYANLI YAKLAŞIKLIK: Meng Zhixiang Chengdu'a 926-02 (同光四年正月戊辰) vali olarak girdi (Xin Wudai 64) ve 933'te «Shu Kralı» olarak atandı (四年二月癸亥); imparatorluk ilanı resmi bağımsızlık günü sayıldı. · DOGU-500-1281"},
     {f:"0965-02-17",t:"1236-10-31",d:"song",kesinlik:"yil",kaynak:"cin3 sonraki-shu bitişi 965-02-17 (Song Chengdu'yu aldı; Song shi 2) ‖ BİTİŞ (AY DÜZEYİ): Song Lian vd., Yuan shi, juan 2 «Taizong ji» (zh.wikisource.org/wiki/元史/卷002): 「冬十月，闊端入成都。」 (太宗八年丙申 = 1236; 10. ay ilk günü 1236-10-31 Jülyen) · BEYAN: Song shi 42: 「戊寅，復成都府」 (端平三年 11. ay = 1236-12-24 Jülyen civarı: Song geri aldı) ve sonraki yeniden düşüş (Song shi 43: 「大元兵入蜀，權成都府馮有碩…死於官守」) tek bir kalıcı gün olarak okunamadı; Yuan shi 3 (憲宗八年 = 1258): 「宋四川制置使蒲澤之攻成都」 ve 「都元帥紐隣留密里火者、劉黑馬等守成都」, Song shi 44 (寶祐六年): 「蜀中將帥雖未克復成都」 — 1258'de Chengdu'nun Moğol elinde olduğu kesin; devir günü olarak 1236 giriş ayı alındı (BEYANLI YAKLAŞIKLIK; 1236-12 Song geri alımı ve 1239 civarı yeniden Moğol fethi atlandı). · DOGU-500-1281"},
     {f:"1236-10-31",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:"ay",kaynak:"Yuan shi, juan 2 「冬十月，闊端入成都。」 (1236, 10. ay) ‖ BİTİŞ: Moğol künye t=1260-01-01 · Song Lian vd., Yuan shi, juan 4 «Shizu ji 1» (zh.wikisource.org/wiki/元史/卷004): 「中統元年春三月戊辰朔，車駕至開平。…辛卯，帝即皇帝位」 ; «丙戌，建元中統，詔曰…可自庚申年五月十九日，建元為中統元年» · devir günü künye f=1260-01-01 (YIL DÜZEYİ; gerçek ilan 1260 3. ay 辛卯, ad 'Da Yuan' 1271: Yuan shi 7 «可建國號曰大元») · ic_not: Yuan shi 3 «宋四川制置使蒲澤之攻成都» (1258). · DOGU-500-1281"},
     {f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"Song Lian vd., Yuan shi, juan 4 «Shizu ji 1» (zh.wikisource.org/wiki/元史/卷004): 「中統元年春三月戊辰朔，車駕至開平。…辛卯，帝即皇帝位」 ; «丙戌，建元中統，詔曰…可自庚申年五月十九日，建元為中統元年» · devir günü künye f=1260-01-01 (YIL DÜZEYİ; gerçek ilan 1260 3. ay 辛卯, ad 'Da Yuan' 1271: Yuan shi 7 «可建國號曰大元») · Yuan shi 4: 「詔諭成都路侍郎張威安撫元、忠、綿、資、卭、彭等州」 (中統元年: Chengdu lu Yuan'da). · DOGU-500-1281"},
     {f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-09-09", d:"ming-hanedani"},
     {f:"1644-09-09", t:"1644-12-04", d:"dashun"},
     {f:"1644-12-04",t:"1647-01-02",d:"daxi-zhang",kesinlik:{f:"gun",t:"gun"},kaynak:"ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 庚寅 (崇禎十七年冬十一月) → Gregoryen 1644-12-04 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13); 1582 öncesi gün Jülyen kalır. ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 己巳 (順治三年十一月) → Gregoryen 1647-01-02 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13); 1582 öncesi gün Jülyen kalır. Zhang Xianzhong Daxi dönemi Chengdu: Mingshi (張廷玉 vd.), juan 309 «Liezhuan 197, Liuzei: Zhang Xianzhong» (zh.wikisource.org/wiki/明史/卷309, okundu): «遂進陷成都，蜀王至澍率妃、夫人以下投于井，巡撫龍文光被殺。冬十一月庚寅，即偽位，以蜀王府為宮，名成都曰西京» ; «順治三年…獻忠盡焚成都宮殿廬舍，夷其城，率眾出川北» · Qing shi gao, juan 4 «Shizu ji 1» (zh.wikisource.org/wiki/清史稿/卷4, okundu): «十一月己巳：豪格師至南部，時張獻忠列寨西充，鰲拜等兼程進擊，大破之，斬獻忠於陣» (Daxi'nin fiilî sonu; 1647-01-02) | BEYANLI YAKLAŞIKLIK: (a) dönem başı Mingshi'nin Chengdu'daki ilk TARİHLİ kaydıdır (Xijing ilanı 1644-12-04); şehrin ele geçiriliş günü kaynakta yok (mevcut dashun 1644-09-09 dönemi dokunulmadan kaldı, sahibi dashun YANLIŞ görünüyor). (b) Zhang 1646'da (ay kaynakta yok) Chengdu'yu yakıp kuzeye çekildi; şehir bu çekilişten sonra da Daxi'nin son günü 1647-01-02'ye dek Daxi bölgesi gösterildi. (c) Qing shi gao bu giriş tarihini rapor/kayıt günü verir. · ASYA-ZINCIR-1024 (F2)"},
     {f:"1647-01-02", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1680-02-01", d:"san-fan"},
     {f:"1680-02-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Çongqing (Chongqing)", tur:"liman", lat:29.5630, lon:106.5520, g:1, k:3, d:[],
  s:[{f:"1000-01-01",t:"1278-02-23",d:"song",kesinlik:{f:"belirsiz",t:"ay"},kaynak:"«唐渝州。宋更名恭州，又升重慶府。元至元十六年，立重慶路總管府» «至元十五年春，珏遣總管李義將兵由廣陽，一軍皆沒。二月，大兵破紹慶府» Yuanshi 60 (四川行省 重慶路) ve Songshi 451 (張珏傳: Chongqing 1278’e dek Song’da; Zhang Jue). f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1278-02-23",t:"1281-01-01",d:"yuan-hanedani",kesinlik:{f:"ay",t:"yil"},kaynak:"«城中糧盡，趙安以書說珏降，不聽。安乃與帳下韓忠顯夜開鎮西門降» «唐渝州。宋更名恭州，又升重慶府。元至元十六年，立重慶路總管府» Songshi 451: 至元十五年二月 Zhao An kapıyı açtı; Zhang Jue yakalandı. f: Ay hassasiyeti: Songshi 451 張珏傳 至元十五年二月 (gün kaynakta yok) → ayın 1. günü Jülyen 1278-02-23 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 2/1; 元世祖至元15年(歲次戊寅)2月1日). · VERI-MS1-1281"},{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-07-01", d:"ming-hanedani"},
     {f:"1644-07-01", t:"1647-01-01", d:"dashun"},
     {f:"1647-01-01", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1680-02-01", d:"san-fan"},
     {f:"1680-02-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Kunming — Güney Ming'in son sarayı (Yongli) 1656-1659 arasında
// buradaydı. Wu Sangui 1673'te isyanı burada başlattı; Kunming 7 Aralık
// 1681'de düştü ve Üç Feodal savaşı bitti.
{ ad:"Kunming", tur:"sehir", lat:25.0380, lon:102.7180, g:1, k:2,kd:[{f:"1644-04-25",t:"1662-01-01",k:1,m:"Kunming"}], d:[],
  s:[{f:"1281-01-01", t:"1382-01-06", d:"yuan-hanedani"},
     {f:"1382-01-06", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1659-01-07", d:"guney-ming"},
     {f:"1659-01-07", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1681-12-07", d:"san-fan"},
     {f:"1681-12-07", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Dali — Nanzhao ve Dali krallıklarının başkenti; 1253'te Kubilay aldı,
// yani 1281'de Yuan'dır. Ming Yünnan'ı 6 Ocak 1382'de zaptetti.
{ ad:"Dali", tur:"sehir", lat:25.6060, lon:100.2670, g:0, k:2,kd:[{f:"1855-01-01",t:"1873-01-15",k:1,m:"Dali"}], d:[],
  s:[{f:"0738-01-01",t:"0902-01-01",d:"nanzhao",kesinlik:"yil",kaynak:"Theobald, chinaknowledge.de «Nanzhao» (okundu): «In 738 Piluoge was officially given the title of prince or king (wang) of Yunnan 雲南 by the Tang court…»; Xin Tang shu, juan 222 zhong «Nanzhao» (zh.wikisource.org/wiki/新唐書/卷222中; okundu): «子舜化立，建元中興。遣使款黎州修好，昭宗不答。後中國亂，不復通。» ‖ BAŞLANGIÇ 738 = Tang tanıması (Yangjumie/Taihe, Dali yöresi başkenti); yerin ilk Nanzhao sahipliği tarihi kaynakta açık değil (BEYANLI); devir maddesi yazılamadı. · DOGU-500-1281"},{f:"0902-01-01",t:"0928-01-01",d:"da-changhe",kesinlik:"yil",kaynak:"Ulrich Theobald, «Nanzhao 南詔» (chinaknowledge.de/History/Altera/nanzhao.html; açıldı, okundu; kaynakça: Bryson 2015, Cahiers d’Extrême-Asie 24): «In 902 Zheng Maisi 鄭買嗣, a descendant of Zheng Hui, usurped the throne and ended the rule of the Meng family of Nanzhao. … changed the name of the country to Da Changhe 大長和.» ‖ bitiş: Theobald, chinaknowledge.de «Nanzhao» (okundu): «The Zheng family ruled until 927 and was then replaced by 趙善政 (r. 928-929), ruler of Da Tianxing 大天興, who was again followed by Yang Ganzhen 楊干真 (r. 930-937)…» · DOGU-500-1281"},{f:"0928-01-01",t:"0929-01-01",d:"da-tianxing",kesinlik:{"f": "yil", "t": "yil"},kaynak:"Anonim (Ming), Dian zai ji (zh.wikisource.org/wiki/滇載記, okundu): 「趙氏名善政，為封氏清平。楊於真既殺滅鄭氏，遂拔善政而立之。後唐明宗之天成三年也。改國號曰大天興。立僅十月，於真又奪之，而為楊氏。」 · Gu Zuyu, Dushi fangyu jiyao, juan 113 (zh.wikisource.org/wiki/讀史方輿紀要/卷一百十三, okundu): 「後唐天成三年國號大天興，明年稱大義寧，〈楊干貞殺鄭隆亶而推其黨趙善政立之，國號大天興。僅十月，干貞自取之，國號大義寧，於是段思平起兵討平之。趙氏、楊氏得國共九年。〉石晉天福二年屬於大理。」 · BEYAN: Önceki sahip (da-changhe, 902-928) bu kümenin dışında; Dali'nin 902-928 dilimi başka kümede. · DOGU-500-1281"},{f:"0929-01-01",t:"0937-01-01",d:"da-yining",kesinlik:{"f": "yil", "t": "yil"},kaynak:"Anonim (Ming), Dian zai ji (zh.wikisource.org/wiki/滇載記, okundu): 「趙氏名善政，為封氏清平。楊於真既殺滅鄭氏，遂拔善政而立之。後唐明宗之天成三年也。改國號曰大天興。立僅十月，於真又奪之，而為楊氏。」 · Nanzhao yeshi (Hu Wei baskısı) (zh.wikisource.org/wiki/南詔野史_(胡蔚本), okundu): 「明宗己丑天成四年，善政待干貞，恩禮寖衰，……干貞恃功怨望，遂賂結諸臣，廢善政而自立。善政在位僅十月。」「楊干貞於後唐明宗己丑天成四年奪大天興國趙善政之位，改國號曰大義甯國」 · DOGU-500-1281"},{f:"0937-01-01",t:"1254-01-02",d:"dali-kralligi",kesinlik:{"f": "yil", "t": "gun"},kaynak:"Gu Zuyu, Dushi fangyu jiyao, juan 113 (zh.wikisource.org/wiki/讀史方輿紀要/卷一百十三, okundu): 「後唐天成三年國號大天興，明年稱大義寧，〈楊干貞殺鄭隆亶而推其黨趙善政立之，國號大天興。僅十月，干貞自取之，國號大義寧，於是段思平起兵討平之。趙氏、楊氏得國共九年。〉石晉天福二年屬於大理。」 · Dian lüe (Siku quanshu), juan 7 (zh.wikisource.org/wiki/滇畧_(四庫全書本)/卷07, okundu): 「三年趙善政僣號大天興國干貞尋廢之自立僣號大義寧國　後晉天福元年通海節度使段思平討楊干貞干貞走死　二年段思平自立僣號大理國居羊苴咩城」 · BEYAN: Üç ayrı kaynak yılı 937 verir (滇略, 讀史方輿紀要); süre çelişkisi künyede. · DOGU-500-1281"},{f:"1254-01-02",t:"1281-01-01",d:"mogol-imparatorlugu",kesinlik:{"f": "gun", "t": "yil"},kaynak:"Song Lian vd., Yuan shi, juan 4 «Shizu ben ji 1» (zh.wikisource.org/wiki/元史/卷004, okundu): 「九月壬寅，師次忒剌，……冬十月丙午，過大渡河，……十二月丙辰，軍薄大理城。初，大理主段氏微弱，國事皆決於高祥、高和兄弟。是夜，祥率眾遁去，……帝既入大理，……癸亥，獲高祥，斬于姚州。留大將兀良合帶戍守」 · Tuotuo vd., Song shi, juan 43 «Lizong ben ji 3» (zh.wikisource.org/wiki/宋史/卷043, okundu): 寶祐元年 takvim çapası: 「冬十月丙午朔」, 「十一月丙子朔」 (Song ay başları; Yuan shi 4'teki 冬十月丙午 ile örtüşür) · BEYAN: Duan hanedanı yerel yönetici olarak görevde kaldı (Yuan shi 4: 「與段氏同安輯大理」); sahiplik Moğol İmparatorluğu'na yazıldı. Dali Krallığı künyesi t=1253-01-01 → 1254-01-02 düzeltmesi önerilir. Zincir 1281-01-01'e kadar mogol-imparatorlugu olarak yazıldı (Yuan 1271'de ilan edildi; devir günü ±30 gün maddesi olmadığı için ayrı dilim açılmadı). · DOGU-500-1281"},{f:"1281-01-01", t:"1382-01-06", d:"yuan-hanedani"},
     {f:"1382-01-06", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1659-01-07", d:"guney-ming"},
     {f:"1659-01-07", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1681-12-07", d:"san-fan"},
     {f:"1681-12-07", t:"1856-01-01", d:"qing-hanedani"},
     {f:"1856-01-01", t:"1873-01-15", d:"pingnan"},
     {f:"1873-01-15", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Guiyang", tur:"sehir", lat:26.6470, lon:106.6300, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1382-01-06", d:"yuan-hanedani"},
     {f:"1382-01-06", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1658-01-01", d:"guney-ming"},
     {f:"1658-01-01", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1681-12-07", d:"san-fan"},
     {f:"1681-12-07", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// ===== 3f. Gansu koridoru ve Qinghai =====

{ ad:"Lanzhou", tur:"sehir", lat:36.0610, lon:103.8340, g:1, k:3, d:[],
  s:[
     {f:"0617-05-13",t:"0618-11-30",d:"sui-qin-xue-ju",kesinlik:{f:"gun",t:"gun"},kaynak:"ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 癸未 (義寧元年 夏四月) → Jülyen 0617-05-13 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13) = Gregoryen 0617-05-16; 1582 öncesi gün Jülyen kalır. ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 己酉 (武德元年 十一月) → Jülyen 0618-11-30 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13) = Gregoryen 0618-12-03; 1582 öncesi gün Jülyen kalır. Sima Guang, Zizhi tongjian (資治通鑑) 卷183 (okundu), 義寧元年 夏四月: «汾陰薛舉，僑居金城…為金城府校尉。夏，四月，癸未，方授甲，置酒饗士。舉與其子仁果及同黨十三人，於座劫瑗發兵，囚郡縣官，開倉賑施。自稱西秦霸王，改元秦興。» · Sima Guang, Zizhi tongjian (資治通鑑) 卷186 (okundu), 武德元年: 八月 «辛巳，舉卒。太子仁果立，居於折墌城»; 十一月 «仁果計窮，己酉，出降» | BEYANLI YAKLAŞIKLIK: Jincheng (金城 = Lanzhou) ayaklanmanın başladığı kenttir (künye başkenti Jincheng); Qin'in sonradan Tianshui/折墌 merkezine kayması ve Jincheng'in Tang'a geçiş günü kaynakta ayrıca yazılı değildir. Dönem sonu Xue Rengao'nun teslim olduğu gün (己酉 = 618-11-30) alındı; bu günden önce Jincheng'in elden çıkıp çıkmadığı okunamadı. · ASYA-ZINCIR-1024 (F6b)"},
     {f:"0618-11-30",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: 0618-11-30–1281-01-01 arası sahip YAZILMADI: önceki dilim (sui-qin-xue-ju) kaynaklı olarak 0618-11-30'te biter, sonraki dilim (yuan-hanedani) 1281-01-01'te başlar; aradaki dilim için bu pakette (ASYA-ZINCIR-1024) kaynak okunmadı/bulunamadı. Boşluk komşuya İTİLMEDİ (VERI-YAPISI __BOSLUK__ kuralı); BORÇ: bu dilim için TDV ve ardıl kaynak taraması. · ASYA-ZINCIR-1024"},
     {f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-10-01", d:"ming-hanedani"},
     {f:"1644-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Zhangye (Ganzhou)", tur:"kale", lat:38.9260, lon:100.4500, g:0, k:4, d:[],
  s:[
     {f:"-0120-01-01",t:"0008-01-01",d:"bati-han",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye bati-han (Bati Han Hanedani) · Hanshu 6: önce Wuwei/Jiuquan komutanlığı (MÖ 121); sonra 'Wuwei ve Jiuquan topraklarından Zhangye ve Dunhuang komutanlıkları ayrıldı' (Yuanding 6 = MÖ 111). Zhangye toprağı Wuwei/Jiuquan toprağı olduğundan MÖ 121'den Han'dır (metinsel çıkarım değil, 'bölündü' ifadesi)."},
     {f:"0008-01-01",t:"0397-01-01",d:"__BOSLUK__",kesinlik:{f:"onyil",t:"onyil"},kaynak:"BEYAN (VERI-MO-ARKEO): kaynak \"bati-han\" sahibini 0397-01-01'a dek veriyor ama künye t=0008-01-01 → künye sonrası boşluk"},
     {f:"0397-01-01",t:"0439-01-01",d:"kuzey-liang",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye kuzey-liang (Kuzey Liang (北涼)) · Jin shu 129 (Juqu Mengxun): Duan Ye Jiankang'da Liang Hakimi (Shenxi 1 = 397) olunca Mengxun'u Zhangye valisi yaptı; Longan 5'te (401) Mengxun Zhangye Gong ilan edildi; Yixi 8'de (412) Hexi Wang; Wei shu 4a Taiyan 5 (439) Taiwu Guzang'ı aldı, Muqian teslim."},
     {f:"0439-01-01",t:"0894-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BEYAN (VERI-MO-ARKEO): antik zincir ile ilk mevcut dönem arasında sahip kaynakta yok → boşluk, bos:'veri-yok' (kimsenin değil DEĞİL, araştırılmadı da DEĞİL: kaynak sessiz)"},
     {f:"0894-01-01",t:"0977-01-01",d:"ganzhou-uygur",kesinlik:"yil",kaynak:"Song shi, juan 490 «Huihu» (zh.wikisource.org/wiki/宋史/卷490; okundu): «太平興國二年冬，遣殿直張璨齎詔諭甘、沙州回鶻可汗外甥，…五年，甘、沙州回鶻可汗夜落紇密禮遏遣使裴溢的等四人，…來獻。» ‖ BAŞLANGIÇ 0894-01-01 künye f’sinden alındı: kaynakta okunmadı (BEYANLI); ilk kaynaklı tanık 977/980; atlas künyesi referans değildir. · DOGU-500-1281"},
     {f:"0977-01-01",t:"1028-01-01",d:"gansu-uygur",kesinlik:{f:"yil",t:"yil"},kaynak:"Song shi juan 490 «Waiguo 6: Huihu» (zh.wikisource.org/wiki/宋史/卷490, bu oturumda okundu): «太平興國二年冬，遣殿直張璨齎詔諭甘、沙州回鶻可汗外甥，賜以器幣…» (977: Song, Gan ve Sha vilayetlerinin Uygur kağanına elçi gönderdi; kağan 980 civarı karşılık verdi) · Song shi juan 485 «Waiguo 1: Xia» (zh.wikisource.org/wiki/宋史/卷485, okundu): «天聖六年，德明遣子元昊攻甘州，拔之。» (1028) | BEYANLI YAKLAŞIKLIK: Başlangıç 977 = Zhangye (Ganzhou) Uygur kağanı için İLK TARİHLİ tanıktır (kuruluş değil, görünme için alt sınır); 894-977 arası önceki beyanlı boşluk korundu. Mevcut atlas dilimi sahip olarak ganzhou-uygur künyesini anıyordu (BOYALAR kaydı yok notuyla); aynı polity için boyası bulunan gansu-uygur künyesi kullanıldı (ganzhou-uygur ile mükerrer künye, birleşme kararı Emre'nin). · ASYA-ZINCIR-1024 (W2b)"},
     {f:"1028-01-01",t:"1038-01-01",d:"xiazhou-dangxiang",kesinlik:"yil",kaynak:"Song shi, juan 485 (zh.wikisource.org/wiki/宋史/卷485; okundu): «天聖六年，德明遣子元昊攻甘州，拔之。» ‖ bitiş: Song shi, juan 485 (okundu): «宋寶元元年，…遂築壇受冊，即皇帝位，時年三十。»; «元昊既悉有夏、銀、綏、宥、靜、靈、鹽、會、勝、甘、涼、瓜、沙、肅» · DOGU-500-1281"},
     {f:"1038-01-01",t:"1226-01-01",d:"bati-xia",kesinlik:"yil",kaynak:"Song Lian vd., Yuan shi, juan 60 «Dili zhi 3» (zh.wikisource.org/wiki/元史/卷060): 「甘州路…」; Zhangye (Ganzhou) Xia tarafında: Yuan shi 60 «山丹州…宋初為夏國所有，置甘肅軍» · Song shi 485 (cin2 piece: Ganzhou 1028 alındı); Xia kuruluşu 1038 (cin2/cin3 xiazhou-dangxiang bitişi) ‖ BİTİŞ (YIL DÜZEYİ): Yuan shi, juan 1 (zh.wikisource.org/wiki/元史/卷001): 「二十一年〔丙戌〕春…夏，避暑於渾垂山。取甘、肅等州。」 (1226 yazı; gün/ay yok: YYYY-01-01 kuralı). · DOGU-500-1281"},
     {f:"1226-01-01",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:"yil",kaynak:"Yuan shi, juan 1 「取甘、肅等州」 (1226) ‖ BİTİŞ: Moğol künye t=1260-01-01 · Song Lian vd., Yuan shi, juan 4 «Shizu ji 1» (zh.wikisource.org/wiki/元史/卷004): 「中統元年春三月戊辰朔，車駕至開平。…辛卯，帝即皇帝位」 ; «丙戌，建元中統，詔曰…可自庚申年五月十九日，建元為中統元年» · devir günü künye f=1260-01-01 (YIL DÜZEYİ; gerçek ilan 1260 3. ay 辛卯, ad 'Da Yuan' 1271: Yuan shi 7 «可建國號曰大元») · ic_not: Batı Xia künye t=1227-01-01; Zhangye 1226'da önce düştü. · DOGU-500-1281"},
     {f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"Song Lian vd., Yuan shi, juan 4 «Shizu ji 1» (zh.wikisource.org/wiki/元史/卷004): 「中統元年春三月戊辰朔，車駕至開平。…辛卯，帝即皇帝位」 ; «丙戌，建元中統，詔曰…可自庚申年五月十九日，建元為中統元年» · devir günü künye f=1260-01-01 (YIL DÜZEYİ; gerçek ilan 1260 3. ay 辛卯, ad 'Da Yuan' 1271: Yuan shi 7 «可建國號曰大元») · Yuan shi 60: 「甘州路…八年，改甘州路總管府」. · DOGU-500-1281"},
     {f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-10-01", d:"ming-hanedani"},
     {f:"1644-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Ciyayuguan — Ming Seddi'nin BATI UCU; 1372'de kuruldu (kur:) ve
// 1759'a kadar Çin'in fiilî batı sınırıdır. Bu noktanın batısındaki
// coğrafyanın Çin'e bağlanması Qianlong'un 1755-1759 Cungar seferleriyledir.
{ ad:"Ciyayuguan (Jiayuguan)", tur:"kale", lat:39.7970, lon:98.2890, g:1, k:4, d:[],
  kur:"1372-01-01",
  s:[{f:"1372-01-01", t:"1644-10-01", d:"ming-hanedani"},
     {f:"1644-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Dunhuang — İpek Yolu'nun kavşağı; Ming 1524'te Ciyayuguan'ın batısını
// boşalttı ve şehir 1720'de Qing yeniden iskân edene kadar Moğol-Oyrat
// bozkırının parçası oldu. Bu iki yüz yıllık pencere "kuzey-yuan" ile
// boyandı çünkü bölgeyi Oyrat/Moğol beyleri tuttu.
{ ad:"Dunhuang", tur:"sehir", lat:40.1420, lon:94.6620, g:0, k:3, d:[],
  s:[{f:"-0110-01-01",t:"0008-01-01",d:"bati-han",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye bati-han (Bati Han Hanedani) · Hanshu 6 (Wudi ji): Wuwei/Jiuquan topraklarından Zhangye ve Dunhuang komutanlıkları ayrıldı (Yuanding 6); 'Dunhuang'a çekirgeler geldi' (Taichu 1, Han'ın Dunhuang'daki varlığı)."},{f:"0008-01-01",t:"0397-01-01",d:"__BOSLUK__",kesinlik:{f:"onyil",t:"onyil"},kaynak:"BEYAN (VERI-MO-ARKEO): kaynak \"bati-han\" sahibini 0397-01-01'a dek veriyor ama künye t=0008-01-01 → künye sonrası boşluk"},{f:"0397-01-01",t:"0400-01-01",d:"kuzey-liang",kesinlik:{f:"onyil",t:"onyil"},kaynak:"künye kuzey-liang (Kuzey Liang (北涼)) · Jin shu 129: Duan Ye 397'de (Shenxi 1) Jinchang Wang Dewu ile Dunhuang Meng Min Duan Ye'ye teslim oldu; Meng Min Dunhuang'ı idare etti (Duan Ye'nin Beiliang'ı)."},{f:"0400-01-01",t:"0423-01-01",d:"__BOSLUK__",kesinlik:{f:"onyil",t:"onyil"},kaynak:"BEYAN (VERI-MO-ARKEO): sahip kaynakta \"Batı Liang (Xiliang, Li Hao); devletler.js'te 'bati-liang' ID'si YOK — 'hou-liang-xi-liang' Hou Liang'ın künyesi olarak kayıtlı, Li Hao ile aynı olup olmadığı AYRICA doğrulanmalı\" ama künyesi yok → boşluk (kimsenin değil DEĞİL; künye açılınca doldurulur). Jin shu 87 (Liang Wuzhao wang Li Xuansheng/Hao zhuan): Longan 4'te Jinchang tarafı altı komutanlığı çağırıp Li Hao'yu seçti; 'Li Hao Longan 4'te kuruldu, Song Shaodi Jingping 1'e kadar' (metin sonu 423); Wei shu 99 aynı. Hou Han/ZZTJ bitişi 421 (Mengxun Jiuquan'ı alır) — metinde 'Jiuquan'ı aldı' (Ji"},{f:"0423-01-01",t:"0851-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BEYAN (VERI-MO-ARKEO): antik zincir ile ilk mevcut dönem arasında sahip kaynakta yok → boşluk, bos:'veri-yok' (kimsenin değil DEĞİL, araştırılmadı da DEĞİL: kaynak sessiz)"},{f:"0851-01-01",t:"1036-01-01",d:"guiyi-jun-dunhuang",kesinlik:"yil",kaynak:"Song shi, juan 490 «Waiguo 6: Shazhou» (zh.wikisource.org/wiki/宋史/卷490; açıldı, okundu): «沙州本漢燉煌故地，唐天寶末陷于西戎。大中五年，張義潮以州歸順，詔建沙州為歸義軍，以義潮為節度使，領河沙甘肅伊西等州觀察、營田處置使。» ‖ bitiş: Song shi, juan 485 (okundu; Jingyou 2 bölümü): «又攻青唐、安二、宗哥、帶星嶺諸城，…遂取瓜、沙、肅三州。» · DOGU-500-1281"},{f:"1036-01-01",t:"1038-01-01",d:"xiazhou-dangxiang",kesinlik:"yil",kaynak:"Song shi, juan 485 (okundu; Jingyou 2 bölümü): «又攻青唐、安二、宗哥、帶星嶺諸城，…遂取瓜、沙、肅三州。» ‖ bitiş: Song shi, juan 485 (okundu): «宋寶元元年，…遂築壇受冊，即皇帝位，時年三十。»; «元昊既悉有夏、銀、綏、宥、靜、靈、鹽、會、勝、甘、涼、瓜、沙、肅» · DOGU-500-1281"},{f:"1038-01-01",t:"1227-01-01",d:"bati-xia",kesinlik:"yil",kaynak:"Yuan shi, juan 60 «Dili zhi 3» (zh.wikisource.org/wiki/元史/卷060): 「沙州路，唐為沙州，又為燉煌郡。宋仍為沙州，景祐初，西夏陷瓜、沙、肅三州，盡得河西故地。金因之。元太祖二十二年，破其城以隸八都大王。」 (景祐初 = 1034-1038; cin2 xiazhou-dangxiang 1036-1038 ile Xia hâkimiyeti 1038 künyesine bağlanır; yıl düzeyi) ‖ BİTİŞ (YIL DÜZEYİ): 「元太祖二十二年，破其城以隸八都大王」 (1227; gün/ay yok: YYYY-01-01 kuralı; Batı Xia künye t=1227-01-01 ile aynı). · DOGU-500-1281"},{f:"1227-01-01",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:"yil",kaynak:"Yuan shi 60 「元太祖二十二年，破其城以隸八都大王」 (1227) ‖ BİTİŞ: Moğol künye t=1260-01-01 · Song Lian vd., Yuan shi, juan 4 «Shizu ji 1» (zh.wikisource.org/wiki/元史/卷004): 「中統元年春三月戊辰朔，車駕至開平。…辛卯，帝即皇帝位」 ; «丙戌，建元中統，詔曰…可自庚申年五月十九日，建元為中統元年» · devir günü künye f=1260-01-01 (YIL DÜZEYİ; gerçek ilan 1260 3. ay 辛卯, ad 'Da Yuan' 1271: Yuan shi 7 «可建國號曰大元») · ic_not: Shazhou'nun Çağatay/«Batu» vb. ulus paylaşımı ('八都大王') kaynakta atanan prens; Yuan merkezî yönetimi 1260 sonrası: Yuan shi 60 「十七年，升為沙州路總管府」. · DOGU-500-1281"},{f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"Song Lian vd., Yuan shi, juan 4 «Shizu ji 1» (zh.wikisource.org/wiki/元史/卷004): 「中統元年春三月戊辰朔，車駕至開平。…辛卯，帝即皇帝位」 ; «丙戌，建元中統，詔曰…可自庚申年五月十九日，建元為中統元年» · devir günü künye f=1260-01-01 (YIL DÜZEYİ; gerçek ilan 1260 3. ay 辛卯, ad 'Da Yuan' 1271: Yuan shi 7 «可建國號曰大元») · Yuan shi 60: 「十七年，升為沙州路總管府，瓜州隸焉」 (至元十七年 = 1280). · DOGU-500-1281"},{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1524-01-01", d:"ming-hanedani"},
     {f:"1524-01-01", t:"1720-01-01", d:"kuzey-yuan"},
     {f:"1720-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Xining — Tibet platosunun kuzey kapısı; Kokonor Moğolları (Khoshut)
// 1636-1724 arasında burayı denetledi, Qing 1724'te Lobzang Danjin
// isyanını bastırarak doğrudan idareye aldı.
{ ad:"Xining", tur:"sehir", lat:36.6170, lon:101.7780, g:0, k:3, d:[],
  s:[
     {f:"1000-01-01",t:"1032-01-01",d:"__BOSLUK__",kesinlik:{f:"belirsiz",t:"gun"},kaynak:"BEYANLI BOŞLUK (arandı, bulunamadı): Xining (Qingtang / Kuozhou) 1000–1104: Tsongkha (Qingtang) künyesi atlasta VAR (tsongkha, 1008-1104) fakat renkler.BOYALAR’da tanımlı DEĞİL → d olarak yazılamaz (boya girdisi eksikliği kunye_duzeltme alanında). 1000-1008 Qingtang öncesi Tibetli reisler (Liuguchi) için künye yok. Song’un kısa işgali: «丁未，立賢妃劉氏爲皇后。己未，青唐酋隴拶以城降。壬戌，雨，罷秋宴» ; «舊靑唐城。元符二年，隴拶降，建爲鄯州，仍爲隴右節度，三年棄之» ; Songshi 18 元符二年九月 (1099-1100) sahiplik kalıcı değil. Arandı, bulunamadı: tsongkha dışı sahip kaynağı. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},
     {f:"1032-01-01",t:"1104-05-08",d:"tsongkha",kesinlik:{f:"yil",t:"gun"},kaynak:"ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 乙卯 (崇寧三年夏四月) → Jülyen 1104-05-08 (JDN hesabı, cin2_lib; sınama 乙卯 = 220-11-25, 丁酉 = 311-07-13) = Gregoryen 1104-05-08; 1582 öncesi gün Jülyen kalır. Songshi (Tuotuo vd.) juan 492 «Waiguo 8: Tubo» (zh.wikisource.org/wiki/宋史/卷492, bu oturumda okundu), Gusiluo (唃廝囉) bölümü: «明道初，即授廝囉寧遠大將軍、愛州團練使 ... 廝囉集兵殺逋奇，徙居青唐» (Mingdao başı = 1032; Gusiluo Qingtang'a yerleşti); «景祐中 ... 廝囉知眾寡不敵，壁鄯州不出» ; «崇寧元年，卒» (1102) · Songshi juan 19 «Huizong 1» (zh.wikisource.org/wiki/宋史/卷019, okundu), 崇寧三年: «夏四月 ... 乙卯，復鄯州，建為隴右都護府» (Song Qingtang/Shanzhou'yu geri aldı = Xining) | BEYANLI YAKLAŞIKLIK: (a) dönem başı yalnız 'Mingdao başı' (1032, yıl hassasiyeti); 1008-1032 arası Gusiluo'nun Xining/Qingtang'daki konumu kaynakta yok, atlasın beyanlı boşluğu (1000-1032) korundu. (b) Song'un geçici işgali (1099-1100: «元符二年七月，贍取邈川 ... 九月，贍軍至青唐，隴拶出降»; «贍棄青唐歸» sonra Qiongluo/Xi Bawen'in yeniden tutuşu) gün düzeyinde bu zincirde ayrılmadı; atlasın mevcut beyanı ve tsongkha künyesi aynı dönemi tek dilim sayar. (c) Qingtang = Shanzhou = Xining (Songshi 19, 崇寧三年 5. ay 'Shanzhou'nun Xining adı alması'); atlas noktası Xining. · ASYA-ZINCIR-1024 (W3b)"},
     {f:"1104-05-08",t:"1131-02-11",d:"song",kesinlik:"gun",kaynak:"«夏四月乙巳，以火災降德音於四京：減囚罪一等，流以下原之。乙卯，復鄯州，建為隴右都護府» «舊靑唐城。元符二年，隴拶降，建爲鄯州，仍爲隴右節度，三年棄之» Songshi 19 崇寧三年: Song Shanzhou’yu (Qingtang) geri aldı, Longyou Duhufu; 五月甲申 「改鄯州為西寧州」 (Xining adı). f: Gün çevirimi: Songshi 19 崇寧三年夏四月乙卯 → Jülyen 1104-05-08 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 4/12; 宋徽宗崇寧3年(歲次甲申)4月12日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1131-02-11",t:"1227-03-19",d:"__BOSLUK__",kesinlik:{f:"gun",t:"ay"},kaynak:"BEYANLI BOŞLUK (arandı, bulunamadı): Xining 1131–1227: Songshi 26 紹興元年正月庚戌: «金人犯秦州，吳玠擊敗之。庚戌，又犯西寧州，守臣俱重迎降» → Jin saldırısı/teslim; ancak Jinshi 26 coğrafyası bu Xining’i (Qingtang) Jin illeri arasında saymaz, Jinshi 134 Jin–Xia sınır pazarlıklarını (陝西北鄙 Xia’ya) anlatır → Jin mi Xia mı belirsiz. Arandı, bulunamadı: 1131-1227 arası Xining sahibini açıkça veren kaynak. f: Gün çevirimi: Songshi 26 紹興元年春正月庚戌 → Jülyen 1131-02-11 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 1/12; 宋高宗紹興元年(歲次辛亥)1月12日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1227-03-19",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:{f:"ay",t:"yil"},kaynak:"«唐置鄯州，理湟水縣，上元間沒於土蕃，號青唐城。宋改為西寧州。元初為章吉駙馬分地» Yuanshi 1 太祖二十二年丁亥 (1227) 三月 「破洮、河、西寧二州」 (kısa alıntı olarak yazılamadı); Yuanshi 60 (甘肅行省 西寧州). f: Ay hassasiyeti: Yuanshi 1 太祖二十二年丁亥三月 (「三月，破洮、河、西寧二州」) (gün kaynakta yok) → ayın 1. günü Jülyen 1227-03-19 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 3/1; 元太祖22年(歲次丁亥)3月1日). · VERI-MS1-1281"},
     {f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"«至元二十三年，立西寧州等處拘搉課程所。二十四年，封章吉為寧濮郡王，以鎮其地» Yuanshi 60: Yuan döneminde Zhangji (章吉) apanajı. f: Yıl hassasiyeti, KÜNYE ÖMRÜ SINIRI: devletler.js mogol-imparatorlugu t=1260-01-01 = yuan-hanedani f=1260-01-01 (atlas künyesi, DAYANAK DEĞİL; dilim ucu künye ömrü içinde kalsın diye bu güne konuldu). Kubilay tahta çıkışı: Yuanshi 4 «辛卯，帝即皇帝位，以禡禡、趙璧、董文炳為燕京路宣慰使» ; Çin tarihi 中統元年春三月辛卯 → Jülyen 1260-05-05 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen) tablo etiketi 3/24; 宋理宗景定元年(歲次庚申)3月24日) — künye ömrü f=1260-01-01 olduğundan sınır bu güne çekilemedi, künye düzeltme önerisi celiskiler alanında. · VERI-MS1-1281"},
     {f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1636-01-01", d:"ming-hanedani"},
     {f:"1636-01-01", t:"1724-01-01", d:"hosut"},
     {f:"1724-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Yinchuan (Ningxia) — Tangut Xia'nın eski başkenti; 1227'de Moğollar
// yıktı, Ming yeniden kurdu.
{ ad:"Yinchuan (Ningxia)", tur:"kale", lat:38.4870, lon:106.2310, g:0, k:4, d:[],
  s:[{f:"1038-01-01",t:"1227-01-01",d:"bati-xia",kesinlik:{"f": "yil", "t": "yil"},kaynak:"Tuotuo vd., Song shi, juan 485 «Waiguo 1: Xia guo shang» (zh.wikisource.org/wiki/宋史/卷485, okundu): 「乾興元年……明年，攻慶州柔遠砦，……德明城懷遠鎮為興州以居。」 · BEYAN: Xia devleti 1038'de ilan edildi (künye f); Xingzhou 1023'te Li Deming tarafından kuruldu (kronoloji maddesi); 1023-1038 sahibi künye genişletilince (bati-xia f) eklenmeli. kur=1023-01-01 (Xingzhou) önerilir. · DOGU-500-1281"},{f:"1227-01-01",t:"1281-01-01",d:"mogol-imparatorlugu",kesinlik:{"f": "yil", "t": "yil"},kaynak:"Song Lian vd., Yuan shi, juan 1 «Taizu ben ji» (zh.wikisource.org/wiki/元史/卷001, okundu): 「六月，金遣完顏合周、奧屯阿虎來請和。……是月，夏主李晛降。」; 「秋七月壬午，不豫。己丑，崩于薩里川哈老徒之行宮。」 · BEYAN: Çin ay-güneş 6. ayının Jülyen karşılığı kaynakta yok → YYYY-01-01 + yıl (BEYANLI). Zincir 1281-01-01'e kadar mogol-imparatorlugu (Yuan 1271 devri için ayrı dilim açılmadı). · DOGU-500-1281"},{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-10-01", d:"ming-hanedani"},
     {f:"1644-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

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
{ ad:"Kanton (Guangzhou)", tur:"liman", lat:23.1290, lon:113.2640, g:2, k:3, d:[],
  s:[
     {f:"-0195-01-01",t:"-0110-01-01",d:"nanyue",kesinlik:{f:"yil",t:"yil"},kaynak:"Sima Qian, Shiji juan 22 «Han xing yilai jiangxiang mingchen nianbiao» (zh.wikisource.org/wiki/史記/卷022, okundu; satır başlığı MÖ yıl): MÖ 196 satırı «十一。誅淮陰、彭越。黥布反。» (Han 11. yıl); MÖ 111 satırı «六 … 十二月，東越反。» (Yuanding 6. yıl) · Shiji juan 113 «Nanyue liezhuan» (zh.wikisource.org/wiki/史記/卷113, okundu): «漢十一年，遣陸賈因立佗為南越王，與剖符通使» ; «元鼎六年冬，樓船將軍…至番禺。建德、嘉皆城守…犁旦，城中皆降伏波。» ; «自尉佗初王後，五世九十三歲而國亡焉。» | BEYANLI YAKLAŞIKLIK: (a) Zhao Tuo Qin çöküşünde kendini «南越武王» ilan etmişti ama Shiji yıl vermez; dönem başı Han'ın onu kral tanıdığı MÖ 196 (yalnız yıl) alındı. (b) Yuanding 6'nın kışı Han yılının (10. ay başlangıçlı) sonuna denk gelir; Nanyue'nin düşüşü MÖ 112 sonu / MÖ 111 başına yayılır, tablo yılı MÖ 111 alındı (kesinlik yil, ±1 yıl riski).  · ASYA-ZINCIR-1024 (F5)"},
     {f:"-0110-01-01",t:"0907-06-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: -0110-01-01–0907-06-01 arası sahip YAZILMADI: önceki dilim (nanyue) kaynaklı olarak -0110-01-01'te biter, sonraki dilim (__BOSLUK__) 0907-06-01'te başlar; aradaki dilim için bu pakette (ASYA-ZINCIR-1024) kaynak okunmadı/bulunamadı. Boşluk komşuya İTİLMEDİ (VERI-YAPISI __BOSLUK__ kuralı); BORÇ: bu dilim için TDV ve ardıl kaynak taraması. · ASYA-ZINCIR-1024"},
     {f:"0907-06-01",t:"0917-01-01",d:"sonraki-liang-5hanedan",kesinlik:"gun",kaynak:"Xin Wudai shi, juan 65 «Nan Han shijia» (zh.wikisource.org/wiki/新五代史/卷65; açıldı, okundu): «天祐二年，拜隱節度使。梁開平元年，加檢校太尉、兼侍中。二年，兼靜海軍節度、安南都護。三年，加檢校太師、兼中書令，封南平王。»; «隱、龑自梁初受封爵，禀正朔而已。» ‖ bitiş: Xin Wudai shi, juan 65 (zh.wikisource.org/wiki/新五代史/卷65; okundu): «貞明三年，龑即皇帝位，國號大越，改元曰乾亨。追尊安仁文皇帝，謙聖武皇帝，隱襄皇帝，立三廟。» · DOGU-500-1281"},
     {f:"0917-01-01",t:"0971-02-28",d:"guney-han-10krallik",kesinlik:"yil",kaynak:"Xin Wudai shi, juan 65 (zh.wikisource.org/wiki/新五代史/卷65; okundu): «貞明三年，龑即皇帝位，國號大越，改元曰乾亨。追尊安仁文皇帝，謙聖武皇帝，隱襄皇帝，立三廟。» ‖ bitiş: Xin Wudai shi, juan 65 (zh.wikisource.org/wiki/新五代史/卷65; okundu): «開寶四年正月，平英、雄二州，…二月，師度馬逕，鋹遣其右僕射蕭漼奉表降。…乃盡焚其府庫、宮殿。…師次白田，鋹素衣白馬以降。» · DOGU-500-1281"},
     {f:"0971-02-28",t:"1278-12-29",d:"song",kesinlik:"gun",kaynak:"cin2 guney-han bitişi 971-02-28 (Xin Wudai shi 65: 「開寶四年…二月，師度馬逕，鋹遣其右僕射蕭漼奉表降」; 「師次白田，鋹素衣白馬以降」) ‖ BİTİŞ: Song shi, juan 47 «Gong di ji» (zh.wikisource.org/wiki/宋史/卷047): 「閏月庚戌，王道夫棄廣州遁。壬戌，淩震遁。癸亥，大軍入廣州。」 (祥興元年 閏11. ay 癸亥: 閏11. ay ilk günü 庚戌 = 1278-12-16 Jülyen → 癸亥 = 1278-12-29) · BEYAN: 1276-1278 arasında Guangzhou birçok kez el değiştirdi (Song shi 47: 「六月丙子，雄飛入廣州」 景炎元年; 「壬子，趙溍入廣州」; 「十二月辛酉朔，趙溍棄廣州遁」; 景炎二年 「二月，大軍至廣州，縣人趙若岡以城降」; 「四月，…張鎮孫襲廣州取之」; 「十一月，塔出圍廣州。庚寅，張鎮孫以城降」; 祥興元年 「十五年正月，大軍夷廣州城」; 「三月…廣州都統淩震、轉運判官王道夫取廣州」) · Yuan shi 10: 「廣州張鎮孫叛，犯廣州」; son KALICI Yuan girişi 1278-12-29 alındı (BEYANLI YAKLAŞIKLIK; aradaki gidiş gelişler ayrı dilim yazılmadı). · DOGU-500-1281"},
     {f:"1278-12-29",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"gun",kaynak:"Song shi 47 「癸亥，大軍入廣州」 (1278-12-29). · DOGU-500-1281"},
     {f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1676-03-01", d:"qing-hanedani"},
     {f:"1676-03-01", t:"1677-01-01", d:"san-fan"},
     {f:"1677-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Makao — Portekiz 1557'de yerleşti; egemenlik 1887 Pekin Antlaşması'yla
// resmen tanındı ama fiilî idare 1557'den itibaren Portekiz'dedir, bu
// yüzden pencere o tarihten başlar. 1999'a kadar Portekiz toprağı kaldı.
{ ad:"Makao (Macau)", tur:"liman", lat:22.1990, lon:113.5440, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1557-01-01", d:"ming-hanedani"},
     {f:"1557-01-01", t:"1923-10-29", d:"portekiz"},{f:"1923-10-29",t:"1999-12-20",d:"makao-portekiz",kaynak:"Sino-Portuguese Joint Declaration 1987; devir 1999-12-20 (Britannica Macau)"},{f:"1999-12-20",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"Britannica Macau"}] },

// Hong Kong — 26 Ocak 1841'de İngiliz çıkarması, 29 Ağustos 1842 Nanking
// Antlaşması'yla resmen devredildi. Makao'ya 39 km.
{ ad:"Hong Kong", tur:"liman", lat:22.3200, lon:114.1700, g:1, k:3, d:[],
  kur:"1841-01-26",
  s:[
     {f:"1841-01-26", t:"1842-08-29", d:"ingiltere"},
     {f:"1842-08-29",t:"1997-07-01",d:"hong-kong-ingiliz",kesinlik:{f:"gun",t:"gun"},kaynak:"Nanking Antlaşması (Treaty of Nanking), imza 29 Ağustos 1842, Madde III (antlaşma metni neşri: en.wikisource.org/wiki/Treaty_of_Nanking, bu oturumda okundu): «cedes to Her Majesty the Queen of Great Britain, &c., the Island of Hong-Kong» — tasdik belgeleri 26 Haziran 1843'te Hong Kong'da teati edildi · Çin-İngiliz Ortak Bildirisi (Sino-British Joint Declaration, imza Pekin 19 Aralık 1984, yürürlük 27 Mayıs 1985), madde 1 (en.wikisource.org/wiki/Sino-British_Joint_Declaration, okundu): «it has decided to resume the exercise of sovereignty over Hong Kong with effect from 1 July 1997» | BEYANLI YAKLAŞIKLIK: devir günü olarak imza günü alındı (hukuki tasdik 1843-06-26); önceki ingiltere dönemi (fiilî işgal 1841-01-26) 1842-08-29'da kısaltıldı. Japon işgali (1941-12-25/1945-08-30) bu zincirde ayrı dönem yazılmadı. · ASYA-ZINCIR-1024"},
     {f:"1997-07-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },

// Zeytun (Quanzhou) — İbn Battûta'nın ve Marco Polo'nun dünyanın en büyük
// limanı dediği şehir; Yuan döneminde zirvesindedir. Ming'in deniz yasağı
// (haijin) ve limanın dolmasıyla önemini Amoy'a kaptırdı.
{ ad:"Zeytun (Quanzhou)", tur:"liman", lat:24.8760, lon:118.6653, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1646-10-06", d:"guney-ming"},
     {f:"1646-10-06", t:"1674-03-15", d:"qing-hanedani"},
     {f:"1674-03-15", t:"1676-10-01", d:"san-fan"},
     {f:"1676-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Fuzhou — Longwu imparatoru 1645 Ağustos'unda burada tahta çıktı; Qing
// 6 Ekim 1646'da girdi. Geng Jingzhong'un feodal beyliğinin merkezi.
{ ad:"Fuzhou", tur:"liman", lat:26.0740, lon:119.2960, g:1, k:2,kd:[{f:"1644-04-25",t:"1662-01-01",k:1,m:"Fuzhou"}], d:[],
  s:[
     {f:"0196-01-01",t:"0220-11-25",d:"dogu-han",kesinlik:{f:"yil",t:"gun"},kaynak:"Sanguo zhi 60 (He Qi zhuan) ve 46 (Sun Ce); Hou Han Shu 9 (Xian di ji) https://zh.wikisource.org/wiki/後漢書/卷9 ‖ 196'da Kuaiji valisi Wang Lang (Han memuru) ve Houguan'ın Han ilçe başı Shang Sheng; Sun Ce Han'ın atadığı Kuaiji yöneticisi olarak bölgeyi alır (He Qi 'Houguan'ı sakinleştirir; Jian'an 8 = 203'te Jian'an'da komutan ofisi kurulur, Sanguo zhi 60). Sun ailesinin Jiangdong rejimi fiilen özerk, ama Han unvanı ve atamasıyla: bu yüzden 'dogu-han'. t: Hou Han Shu 9 '冬十月乙卯，皇帝遜位' Yankang 1 (220) 10. ay 乙卯, Çin takviminden çevrildi: Sinica sinocal, Jülyen 220-11-25. Künye dogu-han t=0220-01-01 (hayalet uyarısı: künye ucu Han'ın gerçek sonundan önce — künye GENİŞLET önerisi t=220-11-25). · CIN-SANGUO"},
     {f:"0220-11-25",t:"0280-05-01",d:"sun-wu",kesinlik:{f:"gun",t:"gun"},kaynak:"Hou Han Shu 9; Jin Shu 3 (Wu di ji) https://zh.wikisource.org/wiki/晉書/卷003 ‖ Sun Quan'ın Jiangdong devleti: Han'ın düşüşünden sonra özerk; Wei onu 221'de Wu Wang olarak tanır, Wu 222'de künyeleşir (künye sun-wu f=0222-01-01 — 220-11-25'ten önce başlayan polity aynı Sun rejimi, künye GENİŞLET önerisi; hayalet uyarısı beklenen). Fuzhou'ya özgü Wu dönemi tanıkları: Sanguo zhi 60 (Jian'an 8 = 203 komutan ofisi), 'Dongye beş ilçe isyanı' Wu zhi (Sun Quan, Lü He/Qin Lang), Sanshan zhi: Wu Jingdi'nin 'Qulang yinjuan' (曲郍都尉, gemi yapım) ve Yong'an 3 (260) Jian'an komutanlığı (zh.wikisource 淳熙三山志/卷01; ikincil/yerel). t: Jin Shu 3 '三月壬寅 … 孫皓 … 降于軍門', Taikang 1 3. ay 壬寅 = 280-05-01 Jülyen (Sinica; Sun Hao Jianye'de teslim olur). Fuzhou'ya özgü teslim günü yok: merkezî gün 'en geç tanıktan'. · CIN-SANGUO"},
     {f:"0280-05-01",t:"0317-04-06",d:"bati-jin",kesinlik:{f:"gun",t:"gun"},kaynak:"[T UZATILDI 0316-12-11 -> 0317-04-06: Min Di'nin Chang'an'daki teslimi (316-12-11) bu şehirdeki Jin idaresini kesmedi; Sima Rui 0317-04-06'da Jin Prensi oldu (Jin shu 6, 建武元年 3. ay 辛卯); künye bati-jin t genişletildi] SINIR BEYANI: dönem Batı Jin künyesinin bitişi 0316-12-11'e çekildi (tarihçe 0317-01-01: dogu-jin künye f'ine hizalama; gerçek olay 316-12-11 Min Di teslimi, Fuzhou toprağı el değiştirmez) ‖ Jin Shu 15 (Dili zhi) https://zh.wikisource.org/wiki/晉書/卷015 ; Jin Shu 5 (Min di ji) https://zh.wikisource.org/wiki/晉書/卷005 ‖ Taikang 3 (282) Houguan'dan Jin'an komutanlığı kurulur (Jin Shu 15, Yangzhou: '晉安郡 太康三年置'), ilçeleri arasında 候官. t = künye dogu-jin f=0317-01-01'e hizalandı; gerçek olay 316-12-11: Jianxing 4 11. ay 乙未 (Jin Shu 5: '十一月乙末' — metinde 末/未 yazım hatası, ay-günü 乙未 olarak okundu; Sinica Jülyen 316-12-11), Min Di Chang'an'da Liu Yao'ya teslim olur. Doğu Jin'in kuruluşu: 317 3. ay Sima Rui Jin Wang (Jin Shu 6); Fuzhou yöresi Jiankang'daki Jin devletinin elinde kalır — toprak el değiştirmez, KÜNYE geçişi. · CIN-SANGUO"},
     {f:"0317-04-06",t:"0420-07-10",d:"dogu-jin",kesinlik:{f:"yil",t:"gun"},kaynak:"Song Shu 3 (Wu di ji xia) https://zh.wikisource.org/wiki/宋書/卷3 ‖ Sanshan zhi: Yuankang 1 (291) Jiangzhou'ya bağlanır; Song Taishi 4 (468) Jin'an 'Jinping'e çevrilir (zh.wikisource 淳熙三山志/卷01 — yerel ikincil kaynak, Song Shu'ya atıf yapar). t: Song Shu 3 '永初元年夏六月丁卯' = Liu Yu imparator olur: Yongchu 1 6. ay 丁卯, Sinica Jülyen 420-07-10 (künye dogu-jin t=0420-01-01: hayalet uyarısı; künye ucu gerçek sondan erken). ‖ tanık: 永初元年夏六月丁卯，設壇於南郊，即皇帝位 · CIN2-MS317 ‖ f 0317-01-01 -> 0317-04-06: Batı Jin t uzatıldı (bkz. Nanjing/Changsha)."},
     {f:"0420-07-10",t:"0479-05-29",d:"liu-song",kesinlik:{f:"gun",t:"gun"},kaynak:"Nan Qi Shu 2 (Gao di ji xia) https://zh.wikisource.org/wiki/南齊書/卷2 ‖ Fuzhou'ya özgü Liu Song olayı yok. t: Nan Qi Shu 2 '建元元年夏四月甲午' = Xiao Daocheng imparator olur: 4. ay 甲午, Sinica Jülyen 479-05-29. ‖ tanık: 建元元年夏四月甲午，上即皇帝位於南郊 · CIN2-MS317"},
     {f:"0479-05-29",t:"0502-04-30",d:"guney-qi",kesinlik:{f:"gun",t:"gun"},kaynak:"Liang Shu 2 (Wu di ji zhong) https://zh.wikisource.org/wiki/梁書/卷02 ‖ Fuzhou'ya özgü Güney Qi olayı yok. t: Liang Shu 2 '天監元年夏四月丙寅' = Xiao Yan imparator olur: 4. ay 丙寅, Sinica Jülyen 502-04-30. ‖ tanık: 天監元年夏四月丙寅，高祖卽皇帝位於南郊 · CIN2-MS317"},
     {f:"0502-04-30",t:"0557-11-16",d:"liang-guney",kesinlik:{f:"gun",t:"gun"},kaynak:"Chen Shu 2 (Gao zu xia) https://zh.wikisource.org/wiki/陳書/卷2 ; Chen Shu 35 (Chen Baoying zhuan) https://zh.wikisource.org/wiki/陳書/卷35 ‖ Houjing isyanı (548-552) boyunca Jin'an (Fuzhou yöresi) komutanlığı yerel güçlü aileye geçer: Chen Shu 35 '侯景之亂，晉安太守 … 蕭雲以郡讓羽 (Chen Yu); 寶應典兵' — Liang tâbiliği adı altında fiilî özerklik; Chen Baoying Shaotai 1'de (555) Liang'ın Jin'an valisi unvanı alır. Bu fiilî özerklik ayrı dönem YAZILMADI (egemenlik ilanı yok, Liang/Chen unvanı taşır); beyan: sahiplik 'Liang' olarak bırakıldı. t: Chen Shu 2 '永定元年冬十月乙亥' = Chen Baxian imparator olur: 10. ay 乙亥, Sinica Jülyen 557-11-16. ‖ tanık: 永定元年冬十月乙亥，高祖即皇帝位于南郊 · CIN2-MS317"},
     {f:"0557-11-16",t:"0589-02-02",d:"chen",kesinlik:{f:"gun",t:"gun"},kaynak:"Chen Shu 3 (Shi zu ji) https://zh.wikisource.org/wiki/陳書/卷3 ; Sui Shu 2 (Gao zu xia) https://zh.wikisource.org/wiki/隋書/卷02 ; Sui Shu 31 ‖ Chen Baoying (Houguan'lı, Minzhou/Jin'an valisi) Chen'e nominal tâbi, Zhou Di ve Liu Yi ile ittifak kurar; Tianjia 4-5'te (563-564) Zhang Zhaoda bastırır, 564-12-23'te (Tianjia 5 11. ay 己丑, Sinica Jülyen) Baoying yakalanır, 'Jin'an komutanlığı sakinleşir' (Chen Shu 3) — olay[]'a yazıldı, sahiplik değişimi sayılmadı (Chen'in kendi vassalı). t: Sui Shu 2 Kaihuang 9 1. ay: '丙子 … 韓擒虎進師入建鄴 … 獲陳主叔寶。陳國平' — 丙子 girdisi (Sinica Jülyen 589-02-02); Fuzhou'ya özgü teslim günü yok, Sui Shu 31 'Min (舊曰東侯官，置晉安郡。平陳，郡廢，縣改曰原豐)' ve 'Jianan jun … 平陳，改曰泉州' Chen'in düşüşünden sonra Sui idaresini gösterir (merkezî gün 'en geç tanıktan'). ‖ tanık: 獲陳主叔寶。陳國平 · CIN2-MS317"},
     {f:"0589-02-02",t:"0618-06-18",d:"sui",kesinlik:{f:"gun",t:"gun"},kaynak:"Sui Shu 31 (Dili zhi) https://zh.wikisource.org/wiki/隋書/卷31 ; Jiu Tang Shu 1 (Gao zu) https://zh.wikisource.org/wiki/舊唐書/卷1 ‖ Sui Shu 31: Kaihuang 9 sonrası Jin'an komutanlığı kaldırılır, Houguan 'Yuanfeng' (原豐) adını alır, Kaihuang 12'de 'Min' (閩) olur, Daye'de Jian'an komutanlığı merkezi. t: Jiu Tang Shu 1 '甲子，高祖即皇帝位於太極殿 … 改隋義寧二年為唐武德元年', Yining 2 5. ay 甲子 = 618-06-18 (Sinica Jülyen). Fuzhou'ya özgü 618 tanığı yok: Sanshan zhi Wude 1 'Jianzhou' adı (yerel ikincil). ‖ tanık: 甲子，高祖即皇帝位於太極殿 · CIN2-MS317"},
     {f:"0618-06-18",t:"0690-10-16",d:"tang",kesinlik:{f:"gun",t:"ay"},kaynak:"Jiu Tang Shu 40 (Dili zhi) https://zh.wikisource.org/wiki/舊唐書/卷40 ; Xin Tang Shu 41 https://zh.wikisource.org/wiki/新唐書/卷041 ; Jiu Tang Shu 6 (Wu hou) ‖ Fuzhou adı: Jiu Tang Shu 40 '景雲二年，改為閩州，置都督府 … 開元十三年，改為福州' (725; Xin Tang Shu 41 aynısı: 'Fuzhou Changle jun, Zhong dudu fu … 開元十三年更州名，天寶元年更郡名'). Jiu Tang Shu 40: '閩 漢冶縣' (Tang yazarları Min ilçesini Han Ye ilçesiyle eşler; Sanshan zhi bunu reddeder — bkz. ilk.ic_not). t: Jiu Tang Shu 6 '九月九日壬午，革唐命，改國號為周' — Sinica 690 9. ay 壬午 iki sonuç verir (Jülyen 690-08-17 ve 690-10-16); '九日' ve ay başı bakımından 16 Ekim seçildi, ±60 gün riski kesinlik 'ay' ile beyan edilir (Changsha için aynı seçim). ‖ tanık: 九月九日壬午，革唐命，改國號為周 · CIN2-MS317"},
     {f:"0690-10-16",t:"0705-03-03",d:"wu-zhou",kesinlik:{f:"ay",t:"gun"},kaynak:"Jiu Tang Shu 6 ; Jiu Tang Shu 7 (Zhong zong) https://zh.wikisource.org/wiki/舊唐書/卷7 ‖ Wu Zetian'ın Zhou rejimi: toprak el değiştirmez, KÜNYE geçişi. t: Jiu Tang Shu 7 '神龍元年 … 二月甲寅，復國號，依舊為唐' = Shenlong 1 2. ay 甲寅, Sinica Jülyen 705-03-03. ‖ tanık: 二月甲寅，復國號，依舊為唐 · CIN2-MS317"},
     {f:"0705-03-03",t:"0892-01-01",d:"tang",kesinlik:{f:"gun",t:"yil"},kaynak:"Xin Wudai Shi 68 (Min shijia) https://zh.wikisource.org/wiki/新五代史/卷68 ‖ Tang sonu: Fuzhou merkezli Fujian Gözlemci Valiliği (Chen Yan, ölünce damadı Fan Hui kendini 'liuhou' ilan eder). t: Xin Wudai Shi 68 (Ouyang Xiu notu) 'Wang Chao Jingfu 1'de (892) Fuzhou'ya girer, gözlemci vali olur' — ZZTJ'nin 893 okuması bu oturumda AÇILMADI; bu kaynak 892 verir. Tang gözetimindeki Wang ailesi vali olarak başlar; fiilî Min polity'nin başlangıcı 892 (Ouyang Xiu: 'üç kez Min'i elde tutmak 景福元年 başlar, 55 yıl'). ‖ tanık: 王潮實以唐景福元年入福州，拜觀察使 · CIN2-MS317"},
     {f:"0892-01-01",t:"0946-08-30",d:"min-krallik",kesinlik:{f:"yil",t:"ay"},kaynak:"Xin Wudai Shi 68 https://zh.wikisource.org/wiki/新五代史/卷68 ; Xin Wudai Shi 62 (Nan Tang shijia) https://zh.wikisource.org/wiki/新五代史/卷62 ‖ KÜNYE AŞIMI sınıflandırması: min-krallik künyesi f=0909-01-01 ama polity 892'den beri Fuzhou'da (Wang Chao/Shenzhi, Tang valisi, 907'den sonra Liang unvanlı, Xin Wudai Shi 68 'Liang Taizu … 封閩王' — yıl bu metinde yok, 909 künye değeri sayıldı) ⇒ aynı polity sürüyor: künye GENİŞLET önerisi f→0892-01-01 (Xin Wudai Shi 68 Ouyang Xiu notu 'belirlenen başlangıç 景福元年'). 944 (Kaiyun 1): Zhu Wenjin Wang Xi'yi öldürüp 'Min' tahtına oturur, Wang ailesini Fuzhou'da kıtır, Later Jin dönem adıyla tâbilik ('稱晉年號，時開運元年也'); Min polity'sinin içi darbe, Fuzhou sahibi değişmez (usurpasyon, olay[]'da). t: Li Rengda'nın Fuzhou'yu ele geçirmesi Xin Wudai Shi 62'de TARİHSİZ; en geç tanık 'Baoda 4 8. ay: 以李仁達為福州節度使' (Nan Tang atar) = 946'da lunar 8/1 (Sinica Jülyen 946-08-30) 'en geç tanıktan' f; önceki dönemin Min'e uzatılması beyanıdır (darbe 944-946 arası, kesin yıl yok). ‖ tanık: 景福元年巖卒，其壻范暉自稱留後。潮遣審知攻暉 · CIN2-MS317"},
     {f:"0946-08-30",t:"0947-01-01",d:"weiwu-li-rengda",kesinlik:{f:"ay",t:"yil"},kaynak:"Xin Wudai Shi 62 (Nan Tang shijia); Xin Wudai Shi 68 (Min shijia); Xin Wudai Shi 67 (Wuyue shijia) ‖ ÖNERİLEN KÜNYE: weiwu-li-rengda (Fuzhou Weiwu Ordusu, Li Rengda/Hongyi, 945/946-947, Nan Tang atamalı ama fiilen özerk, sonra Wuyue'ye tâbi). Kaynak: Xin Wudai Shi 68 '福州將李仁達 … 乃擒繼昌殺之 … 自立，送款于李景，景以仁達為威武軍節度使，更其名曰弘義 … 遂降于吳越'; Xin Wudai Shi 62 'Baoda 4: 李仁達為福州節度使'; 'Baoda 8' (950) Fuzhou'ya saldırı. Ömür: ~4 ay (kısa); ama ayrı polity ('kimsenin değil' DEĞİL, künye açılmamış) olarak yazıldı. t: Wuyue'ye geçiş yılı kaynakta yok (Xin Wudai Shi 67: Wuyue lideri Qian Hongzuo'nun hükümdarlığında 'FUZHOU'yu aldı', Hongzuo 開運四年 (947)'de ölür) ⇒ en geç tanık: 947. ‖ tanık: 景以仁達為威武軍節度使，更其名曰弘義 · CIN2-MS317"},
     {f:"0947-01-01",t:"0978-06-09",d:"wuyue",kesinlik:{f:"yil",t:"ay"},kaynak:"Xin Wudai Shi 67 (Wuyue shijia) https://zh.wikisource.org/wiki/新五代史/卷67 ; Song Shi 480 https://zh.wikisource.org/wiki/宋史/卷480 ; Song Shi 4 https://zh.wikisource.org/wiki/宋史/卷4 ‖ f 'en geç tanıktan': Xin Wudai Shi 67 Qian Hongzuo (947'de ölür) hükümdarlığında '遂取福州而還'; tarih verilmez, 947 yılı ucu alındı (önceki dönem 4 ay, 946-08-30 → 947-01-01). Wuyue, Nan Tang'ı yener (Zhang Yun/Zhao Chengtai), 'Baoda 8' (950) Nan Tang'ın Fuzhou saldırısını bozar (Xin Wudai Shi 62, 'Chadwick yakalanır'). Wuyue künyesi t=0978-01-01 (hayalet uyarısı: künye ucu Qian Chu'nun teslim gününden ~5 ay erken). t: Song Shi 4 Taiping Xingguo 3 5. ay: '錢俶獻其兩浙諸州 …' girdisi 乙酉 (978-06-09) ile 丁亥 (978-06-11, 'Qian Chu Huaihai Wang') arasındadır; teslim günü yazılmamış ⇒ en geç tanık 丁亥 (Sinica Jülyen 978-06-11), kesinlik 'ay'. Fuzhou'nun 13 Wuyue eyaletinden biri olduğu Song Shi 480'de 'Qian Yu (昱) Fuzhou’ya vali' (俶得福州，命昱守之) ile gösterilir. ‖ tanık: 錢俶獻其兩浙諸州 · CIN2-MS317 ‖ t k12'de 0978-06-11 (ay hassasiyeti); atlasın mevcut Song f=0978-06-09 değeriyle süreklilik için 0978-06-09."},
     {f:"0978-06-09",t:"1000-01-01",d:"song",kesinlik:"gun",kaynak:"Song shi, juan 4 (zh.wikisource.org/wiki/宋史/卷004): 「五月乙酉，…錢俶獻其兩浙諸州」 (978-06-09; Fuzhou Hangzhou'dan devralındı, BEYANLI YAKLAŞIKLIK) ‖ BİTİŞ: Song shi, juan 47 «Gong di ji» (zh.wikisource.org/wiki/宋史/卷047): 「十有一月…癸丑，大軍至福安府，知府王剛中以城降」 (景炎元年 11. ay 癸丑 = 1276-12-29 Jülyen) · BEYAN: 景炎元年 5. ay Duanzong'un Fuzhou'da tahta çıkışı (「宜中等乃立昰于福州，以爲宋主，改元景炎…改福州爲福安府」) Song hanedanı içinde; 景炎二年 (1277) 7-9. ay Song/Yuan gidiş gelişleri («九月…也的迷失將兵復取邵武，入福州») tek kalıcı gün vermiyor; 1276-12-29 devri esas. · DOGU-500-1281"},
     {f:"1000-01-01",t:"1276-12-29",d:"song",kesinlik:{f:"belirsiz",t:"gun"},kaynak:"«福州，大都督府，長樂郡，威武軍節度。舊領福建路鈐轄，建炎三年» «宋為福建路。元至元十五年，為福州路。十八年，遷泉州行省於本州» Songshi 89 (福建路 福州); Song 景炎元年五月 Fuzhou’da Duanzong’u tahta çıkardı (Songshi 47) ve şehri 福安府 yaptı — Song sahipliği sürdü. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},
     {f:"1276-12-29",t:"1281-01-01",d:"yuan-hanedani",kesinlik:{f:"gun",t:"yil"},kaynak:"«乙巳，昰入海。癸丑，大軍至福安府，知府王剛中以城降。昰欲入泉州，招撫蒲壽庚有異志» «宋為福建路。元至元十五年，為福州路。十八年，遷泉州行省於本州» Songshi 47 景炎元年十一月癸丑: Yuan ordusu Fu’an Fu’ya (Fuzhou) geldi, vali Wang Gangzhong teslim oldu. 景炎二年 (1277) 七月 Song’un Fuzhou’yu geri alma girişimi (Songshi 47) kalıcı olmadı; Yuanshi 62: 至元十五年 福州路. f: Gün çevirimi: Songshi 47 景炎元年十一月癸丑 → Jülyen 1276-12-29 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 11/23; 宋端宗景炎元年(歲次丙子)11月23日; kaynaktaki gan-zhi günü JDN formülüyle (gz.py) hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). · VERI-MS1-1281"},
     {f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1646-10-06", d:"guney-ming"},
     {f:"1646-10-06", t:"1674-03-15", d:"qing-hanedani"},
     {f:"1674-03-15", t:"1676-10-01", d:"san-fan"},
     {f:"1676-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Amoy (Xiamen) — Zheng Chenggong'un otuz yıllık üssü; Tayvan'ı almadan
// önce buradan direndi. Qing 1680'de aldı ve Zheng devleti Tayvan'a çekildi.
{ ad:"Amoy (Xiamen)", tur:"liman", lat:24.4899, lon:118.0841, g:1, k:2,kd:[{f:"1650-01-01",t:"1683-10-05",k:1,m:"Amoy (Xiamen)"}], d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-01-01", d:"guney-ming"},
     {f:"1650-01-01", t:"1680-03-01", d:"tungning"},
     {f:"1680-03-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Zhangzhou", tur:"sehir", lat:24.5130, lon:117.6470, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1646-10-06", d:"guney-ming"},
     {f:"1646-10-06", t:"1674-03-15", d:"qing-hanedani"},
     {f:"1674-03-15", t:"1676-10-01", d:"san-fan"},
     {f:"1676-10-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Chaozhou", tur:"sehir", lat:23.6570, lon:116.6220, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1676-03-01", d:"qing-hanedani"},
     {f:"1676-03-01", t:"1677-01-01", d:"san-fan"},
     {f:"1677-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Swatow (Shantou) — 1860'ta açılan antlaşma limanı; Chaozhou'ya 34 km.
{ ad:"Swatow (Shantou)", tur:"liman", lat:23.3630, lon:116.6798, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Guilin", tur:"sehir", lat:25.2740, lon:110.2900, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1652-01-01", d:"guney-ming"},
     {f:"1652-01-01", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1680-01-01", d:"san-fan"},
     {f:"1680-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Nanning", tur:"sehir", lat:22.8170, lon:108.3670, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1652-01-01", d:"guney-ming"},
     {f:"1652-01-01", t:"1673-12-28", d:"qing-hanedani"},
     {f:"1673-12-28", t:"1680-01-01", d:"san-fan"},
     {f:"1680-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Beihai (Pakhoi)", tur:"liman", lat:21.4810, lon:109.1200, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1652-01-01", d:"guney-ming"},
     {f:"1652-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Qiongzhou (Haikou) — Hainan adası. Ada, kutu açıldığında kendi noktası
// olmazsa Kanton ya da Kuzey Vietnam peteğine emilirdi.
{ ad:"Qiongzhou (Haikou)", tur:"liman", lat:20.0440, lon:110.1990, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },
// KUTU-F2-1014 (0052/H-0108): Hainan'da yalnız Qiongzhou (Haikou) vardı ⇒ bütün ada kuzey
// kıyıdaki tek peteğe bağlanıyor, renk kıyıya oturmuyordu. Üç tarihî idare merkezi
// eklendi (Ming/Qing dönemi Danzhou · Yazhou · Wanzhou; koordinat GeoNames, eski şehir
// merkezleri Zhonghe · Yacheng · Wancheng). Zincir Qiongzhou kaydıyla BİREBİR —
// ŞEHİR TANIKLIĞI DEĞİL, ankraj Qiongzhou. 🟡 Ming/Qing uçları Qiongzhou'nun kendi
// uçlarıdır (Qiongzhou kaydı kaynak alanı taşımıyor); Hainan'ın kendi teslim günleri
// kaynakla bağlanmadı — BEYANLI YAKLAŞIKLIK, ada bütünüyle aynı sahibe geçtiği için
// petek renginde fark doğurmaz.
{ ad:"Danzhou (Zhonghe)", tur:"sehir", lat:19.7428, lon:109.3449, g:0, k:3, d:[],
  kaynak:"koordinat GeoNames 'Zhonghe' (Danzhou Shi) — tarihî Danzhou merkezi · zincir ankraj Qiongzhou (Haikou) — BEYANLI YAKLAŞIKLIK (KUTU-F2-1014)",
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti"}] },
{ ad:"Yazhou (Yacheng)", tur:"sehir", lat:18.3759, lon:109.1647, g:0, k:3, d:[],
  kaynak:"koordinat GeoNames 'Yacheng' (Sanya Shi) — tarihî Yazhou merkezi · zincir ankraj Qiongzhou (Haikou) — BEYANLI YAKLAŞIKLIK (KUTU-F2-1014)",
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti"}] },
{ ad:"Wanzhou (Wancheng)", tur:"sehir", lat:18.7989, lon:110.3816, g:0, k:3, d:[],
  kaynak:"koordinat GeoNames 'Wancheng Zhen' (Wanning Shi) — tarihî Wanzhou merkezi · zincir ankraj Qiongzhou (Haikou) — BEYANLI YAKLAŞIKLIK (KUTU-F2-1014)",
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti"}] },

{ ad:"Wuzhou", tur:"liman", lat:23.4770, lon:111.2790, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1652-01-01", d:"guney-ming"},
     {f:"1652-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// ===== 4b. Tayvan ve Penghu =====

// Tainan — Hollanda Doğu Hindistan Şirketi 26 Ağustos 1624'te Zeelandia
// kalesini kurdu (kur:); ada üzerindeki ilk devlet yapısıdır. Koxinga
// 1 Şubat 1662'de teslim aldı. Qing 5 Ekim 1683'te; Japonya 17 Nisan 1895
// Shimonoseki Antlaşması'yla.
{ ad:"Tainan", tur:"liman", lat:22.9930, lon:120.2030, g:1, k:2,kd:[{f:"1650-01-01",t:"1683-10-05",k:1,m:"Tainan"}], d:[],
  kur:"1624-08-26",
  s:[
     {f:"1624-08-26", t:"1662-02-01", d:"hollanda-dogu-hint"},
     {f:"1662-02-01", t:"1683-10-05", d:"tungning"},
     {f:"1683-10-05", t:"1895-04-17", d:"qing-hanedani"},
     {f:"1895-04-17", t:"1895-05-23", d:"meiji-japonya"},
     {f:"1895-05-23",t:"1895-10-21",d:"formosa-cumhuriyeti",kesinlik:{f:"gun",t:"gun"},kaynak:"Yosaburo Takekoshi, Japanese Rule in Formosa, 1907, ss. 83-91 (archive.org: japaneseruleinf00takegoog, okundu): Cumhuriyet 23 Mayıs 1895 manifestosuyla örgütlendi (adanın bütünü adına); Tainan'a Japon girişi: «General Nogi entered the city on 21st October» · Japan Center for Asian Historical Records (JACAR, Japonya Millî Arşivleri), «21 Oct 1895 Fall of Tainan and collapse of Republic of Formosa» (jacar.go.jp/english/jacarbl-fsjwar-e/smart/main/18951021/index.html, okundu; belge kodları C11080842300, C08040626200, C11080848600): Japonlar Tainan'ı 21 Ekim 1895'te aldı | BEYANLI YAKLAŞIKLIK: Tainan'ın 23 Mayıs-Haziran arası fiilî bağı kaynakta ayrıca tarihlenmedi; Cumhuriyet ilanı ada genelini kapsıyordu ve Haziran sonrası merkez Tainan'dı. · ASYA-ZINCIR-1024"},
     {f:"1895-10-21", t:"1923-10-29", d:"meiji-japonya"},
     {f:"1923-10-29",t:"1945-10-25",d:"japon-tayvani",kaynak:"Tayvan'in Cin'e devri 1945-10-25 (Office of the Historian)"},
     {f:"1945-10-25",t:"2000-12-31",d:"cin-cumhuriyeti",kaynak:"Britannica Taiwan"}] },

// Taipei — Danshui havzasının Han iskânı 1709 arazi beratıyla başladı
// (kur:); şehir 1875'te vilâyet merkezi oldu.
{ ad:"Taipei", tur:"sehir", lat:25.0330, lon:121.5650, g:1, k:3, d:[],
  kur:"1709-01-01",
  s:[
     {f:"1709-01-01", t:"1895-04-17", d:"qing-hanedani"},
     {f:"1895-04-17", t:"1895-05-23", d:"meiji-japonya"},
     {f:"1895-05-23",t:"1895-06-07",d:"formosa-cumhuriyeti",kesinlik:{f:"gun",t:"gun"},kaynak:"Yosaburo Takekoshi, Japanese Rule in Formosa, London: Longmans, Green, 1907, ss. 83-87 (archive.org: japaneseruleinf00takegoog, tam metin okundu): «On the 23rd of May a manifesto ... announcing that the new Government had been organised, was issued»; Japon birlikleri Taihoku'ya girişi: «entered the city at daylight the following morning, 7th June» ve «By dawn on the 8th, they had driven out the last remains of the enemy»; «I believe the Republican army was only in existence from 23rd May to 11th June». · ASYA-ZINCIR-1024"},
     {f:"1895-06-07", t:"1923-10-29", d:"meiji-japonya"},
     {f:"1923-10-29",t:"1945-10-25",d:"japon-tayvani",kaynak:"Tayvan'in Cin'e devri 1945-10-25 (Office of the Historian)"},
     {f:"1945-10-25",t:"2000-12-31",d:"cin-cumhuriyeti",kaynak:"Britannica Taiwan"}] },

// Penghu (Pescadores) — Yuan 1281'de burada bir teftiş dairesi kurdu,
// yani bu dosyanın başlangıç yılında adalar zaten Çin idaresindedir.
// Ming 1388'de boşalttı ve yeniden iskân etti; Hollanda 1622-1624
// arasında tuttu, Ming'in baskısıyla Tayvan'a geçti. 16 Temmuz 1683
// Penghu deniz savaşı Zheng devletini bitirdi.
{ ad:"Penghu (Pescadores)", tur:"liman", lat:23.5710, lon:119.5790, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1622-07-11", d:"ming-hanedani"},
     {f:"1622-07-11", t:"1624-08-26", d:"hollanda-dogu-hint"},
     {f:"1624-08-26", t:"1661-04-30", d:"ming-hanedani"},
     {f:"1661-04-30", t:"1683-07-16", d:"tungning"},
     {f:"1683-07-16", t:"1895-04-17", d:"qing-hanedani"},
     {f:"1895-04-17", t:"1923-10-29", d:"meiji-japonya"},{f:"1923-10-29",t:"1945-10-25",d:"japon-tayvani",kaynak:"Tayvan'in Cin'e devri 1945-10-25 (Office of the Historian)"},{f:"1945-10-25",t:"2000-12-31",d:"cin-cumhuriyeti",kaynak:"Britannica Taiwan"}] },

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
{ ad:"Mukden (Şenyang)", tur:"sehir", lat:41.8050, lon:123.4310, g:1, k:1,kd:[{f:"1636-05-15",t:"1912-02-12",k:1,m:"Mukden (Şenyang)"}], d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1621-01-01", d:"ming-hanedani"},
     {f:"1621-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Liaoyang", tur:"kale", lat:41.2670, lon:123.1740, g:0, k:4, d:[],
  s:[
     {f:"0189-01-01",t:"0238-09-19",d:"gongsun-liaodong",kesinlik:{f:"yil",t:"gun"},kaynak:"ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 壬午 (景初二年秋, Pei Songzhi alıntısı «八月» der; ay adı aşağıda) → Jülyen 0238-09-19 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13); 1582 öncesi gün Jülyen kalır. Chen Shou, Sanguozhi, juan 8 «Wei shu 8: Er Gongsun Tao Si Zhang zhuan» (zh.wikisource.org/wiki/三國志/卷08, okundu): «始度以中平六年據遼東，至淵三世，凡五十年而滅» ; Pei Songzhi alıntısı: «八月丙寅夜，大流星長數十丈，從首山東北墜襄平城東南 ... 壬午，淵眾潰，與其子脩將數百騎突圍東南走，大兵急擊之，當流星所墜處，斬淵父子» · Sanguozhi, juan 3 «Mingdi ji»: «丙寅，司馬宣王圍公孫淵於襄平，大破之，傳淵首于京都，海東諸郡平» · Sima Guang, Zizhi tongjian, juan 74 (zh.wikisource.org/wiki/資治通鑑/卷074, okundu): «襄平潰，淵與子修將數百騎突圍東南走，大兵急擊之，斬淵父子於梁水之上» (metinde «壬午» basım hatasıyla «任午») | BEYANLI YAKLAŞIKLIK: (a) dönem başı yalnız yıl (中平六年 = 189), Gongsun Du'nun Liaodong'u ele geçirdiği tam gün kaynakta yok; (b) dönem sonu: 壬午 günü; 238'in Wei ay-adı sıraları (二月癸卯/癸丑, 四月庚子/庚戌, 五月乙亥, 十一月壬午, 閏月) Jülyen güne yerleştirilince 丙寅 = 0238-09-03 ve 壬午 = 0238-09-19 tek tutarlı eşleşmedir (öteki 丙寅-壬午 çiftleri 07-05/07-21 ve 11-02/11-18'dir; yaz ortası kuşatma ve «秋» ifadesiyle elenir); Pei alıntısı bu çifti «八月» adlandırır, Sanguozhi 3 ayın adını vermez — ay adı farkı kaynak çelişkisi olarak not edildi, gün ganzhi'den alındı. Liaoyang'ın Wei'ye geçişi (cao-wei) bu pakette ayrıca yazılmadı. · ASYA-ZINCIR-1024 (F6a)"},
     {f:"0238-09-19",t:"0919-04-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: 0238-09-19–0919-04-01 arası sahip YAZILMADI: önceki dilim (gongsun-liaodong) kaynaklı olarak 0238-09-19'te biter, sonraki dilim (liao-hanedani) 0919-04-01'te başlar; aradaki dilim için bu pakette (ASYA-ZINCIR-1024) kaynak okunmadı/bulunamadı. Boşluk komşuya İTİLMEDİ (VERI-YAPISI __BOSLUK__ kuralı); BORÇ: bu dilim için TDV ve ardıl kaynak taraması. · ASYA-ZINCIR-1024"},
     {f:"0919-04-01",t:"1029-09-13",d:"liao-hanedani",kesinlik:"gun",kaynak:"Tuotuo vd., Liao shi, juan 2 «Taizu xia» (zh.wikisource.org/wiki/遼史/卷2; açıldı, okundu): «二月丙寅，修遼陽故城，以漢民、渤海戶實之，改為東平郡，置防禦使。» ‖ bitiş: Jin shi, juan 2 «Taizu ben ji» (zh.wikisource.org/wiki/金史/卷2; açıldı, okundu): «閏月，高永昌據東京，使撻不野來求援。…五月，斡魯等敗永昌，撻不野擒永昌以獻，戮之于軍。東京州縣及南路系遼女直皆降。» · DOGU-500-1281"},
     {f:"1029-09-13",t:"1030-09-25",d:"heungyo-guk",kesinlik:{f:"gun",t:"gun"},kaynak:"ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 己丑 (遼太平九年八月) → Jülyen 1029-09-13 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13); 1582 öncesi gün Jülyen kalır. ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 丙午 (遼太平十年八月) → Jülyen 1030-09-25 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13); 1582 öncesi gün Jülyen kalır. Liao shi, juan 17 «Shengzong ji 8» (zh.wikisource.org/wiki/遼史/卷17, okundu): «八月己丑，東京舍利軍詳穩大延琳囚留守駙馬都尉蕭孝先及南陽公主…延琳遂僭位，號其國為興遼，年為天慶» (太平九年) ; «八月丙午，東京賊將楊詳世密送款，夜開南門納遼軍…擒延琳，渤海平» (太平十年) | BEYANLI YAKLAŞIKLIK: 東京 = Liaoyang (Liao Doğu Başkenti); tek kaynak Liao shi (Jin/Song tarafı bu isyanı günlemez). · ASYA-ZINCIR-1024 (F2)"},
     {f:"1030-09-25",t:"1116-06-12",d:"liao-hanedani",kesinlik:"gun",kaynak:"Tuotuo vd., Liao shi, juan 2 «Taizu xia» (zh.wikisource.org/wiki/遼史/卷2; açıldı, okundu): «二月丙寅，修遼陽故城，以漢民、渤海戶實之，改為東平郡，置防禦使。» ‖ bitiş: Jin shi, juan 2 «Taizu ben ji» (zh.wikisource.org/wiki/金史/卷2; açıldı, okundu): «閏月，高永昌據東京，使撻不野來求援。…五月，斡魯等敗永昌，撻不野擒永昌以獻，戮之于軍。東京州縣及南路系遼女直皆降。» · DOGU-500-1281"},
     {f:"1116-06-12",t:"1215-10-24",d:"jin-hanedani",kesinlik:"ay",kaynak:"Jin shi, juan 2 «Taizu ben ji» (zh.wikisource.org/wiki/金史/卷2): 「閏月，高永昌據東京，使撻不野來求援。…五月，斡魯等敗永昌，撻不野擒永昌以獻，戮之于軍。東京州縣及南路系遼女直皆降。」 (Shouguo 2 5. ay, ay ilk günü 1116-06-12 Jülyen) ‖ BİTİŞ: Jin shi, juan 14 «Xuanzong ji shang» (zh.wikisource.org/wiki/金史/卷14): 「冬十月丙戌朔，翰林侍…遼東賊蒲鮮萬奴僭號，改元天泰」 (貞祐三年 10. ay 丙戌朔 = 1215-10-24 Jülyen) · Yuan shi, juan 1: 「冬十月，金宣撫蒲鮮萬奴據遼東，僭稱天王，國號大真，改元天泰」. · DOGU-500-1281"},
     {f:"1215-10-24",t:"1216-11-11",d:"dongxia",kesinlik:"ay",kaynak:"Jin shi 14 「遼東賊蒲鮮萬奴僭號，改元天泰」 (1215-10-24) · Yuan shi 1 「據遼東，僭稱天王，國號大真」 ‖ BİTİŞ (AY DÜZEYİ): Yuan shi, juan 1: 「十一年丙子春，還廬…冬十月，蒲鮮萬奴降，以其子帖哥入侍」 (1216, 10. ay ilk günü 1216-11-11 Jülyen) · BEYANLI YAKLAŞIKLIK: kaynaklarda şehir adı 'Liaoyang/Dongjing' ile Wannu hâkimiyeti açıkça geçmez (yalnız 『遼東』); Yuan shi, juan 119 'Muqali: 「乙亥，裨將蕭也先以計平定東京」' (gün yıl vermez; 1214-1215) Moğol'un Dongjing'i aldığını gösterir — iki ifade çelişkili: Wannu rejimi 1215-10'dan itibaren 'Liaodong'u elinde tuttuğu varsayıldı; atlas 'dongxia' künyesi f=1215-01-01 ile hizalı. · DOGU-500-1281"},
     {f:"1216-11-11",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:"ay",kaynak:"Yuan shi 1 「冬十月，蒲鮮萬奴降，以其子帖哥入侍」 (1216-11-11) ; Yuan shi 2: 「五年癸巳…九月，擒萬奴」 (1233) ‖ BİTİŞ: Moğol künye t=1260-01-01 · Song Lian vd., Yuan shi, juan 4 «Shizu ji 1» (zh.wikisource.org/wiki/元史/卷004): 「中統元年春三月戊辰朔，車駕至開平。…辛卯，帝即皇帝位」 ; «丙戌，建元中統，詔曰…可自庚申年五月十九日，建元為中統元年» · devir günü künye f=1260-01-01 (YIL DÜZEYİ; gerçek ilan 1260 3. ay 辛卯, ad 'Da Yuan' 1271: Yuan shi 7 «可建國號曰大元») · BEYAN: Wannu 1217'de ayrılıp 'Doğu Xia' kurdu (künye 1215-1233); Liaoyang'ın bu dönemde Moğol mu Wannu mu elinde olduğu şehir adıyla okunmadı — BEYANLI YAKLAŞIKLIK. · DOGU-500-1281"},
     {f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"Song Lian vd., Yuan shi, juan 4 «Shizu ji 1» (zh.wikisource.org/wiki/元史/卷004): 「中統元年春三月戊辰朔，車駕至開平。…辛卯，帝即皇帝位」 ; «丙戌，建元中統，詔曰…可自庚申年五月十九日，建元為中統元年» · devir günü künye f=1260-01-01 (YIL DÜZEYİ; gerçek ilan 1260 3. ay 辛卯, ad 'Da Yuan' 1271: Yuan shi 7 «可建國號曰大元») · DOGU-500-1281"},
     {f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1621-01-01", d:"ming-hanedani"},
     {f:"1621-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Cilin (Jilin) — Qing 1673'te Sungari kıyısında tersane şehri olarak
// kurdu (kur:).
{ ad:"Cilin (Jilin)", tur:"sehir", lat:43.8370, lon:126.5500, g:0, k:3, d:[],
  kur:"1673-01-01",
  s:[{f:"1673-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Ningguta — Qing'in Mançurya'daki askerî valiliği ve sürgün yeri.
{ ad:"Ningguta", tur:"kale", lat:44.3500, lon:129.4700, g:0, k:4, d:[],
  kur:"1653-01-01",
  s:[{f:"1653-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Aigun — 1689 Nerçinsk ve 28 Mayıs 1858 Aigun antlaşmalarının imzalandığı
// yer. 1858'de Amur'un KUZEY yakası Rusya'ya geçti; şehrin kendisi güney
// yakada olduğu için Çin'de kaldı, bu yüzden pencere açılmadı.
{ ad:"Aigun", tur:"kale", lat:50.2430, lon:127.4630, g:0, k:4, d:[],
  kur:"1683-01-01",
  s:[{f:"1683-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Harbin — 1898'de Çin Doğu Demiryolu'nun merkezi olarak kuruldu (kur:).
// Demiryolu bölgesi 1898-1920 arasında fiilen Rus idaresindeydi ama
// EGEMENLİK Çin'de kaldı; Şanghay imtiyazlarıyla aynı gerekçeyle pencere
// AÇILMADI. Kiralanıp idaresi tamamen devredilen Lüşun ise pencere aldı.
{ ad:"Harbin", tur:"sehir", lat:45.8030, lon:126.5340, g:1, k:3, d:[],
  kur:"1898-01-01",
  s:[{f:"1898-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Lüşun (Port Arthur) — Japonya 1894'te aldı ama Üçlü Müdahale ile geri
// verdi (pencere açılmadı, bir yıldan kısa). 27 Mart 1898'de Rusya
// 25 yıllığına kiraladı; 5 Eylül 1905 Portsmouth Antlaşması'yla kira
// Japonya'ya devredildi.
{ ad:"Lüşun (Port Arthur)", tur:"liman", lat:38.8130, lon:121.2160, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1621-01-01", d:"ming-hanedani"},
     {f:"1621-01-01", t:"1898-03-27", d:"qing-hanedani"},
     {f:"1898-03-27", t:"1905-09-05", d:"rusya"},
     {f:"1905-09-05", t:"1945-09-02", d:"meiji-japonya"},{f:"1945-09-02",t:"1949-10-01",d:"cin-cumhuriyeti",kaynak:"Cin-Sovyet Dostluk Antlasmasi 1945-08-14; Port Arthur ortak deniz ussu 1955'e kadar"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"Britannica Lüshun"}] },

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
{ ad:"Karakurum", tur:"sehir", lat:47.1980, lon:102.8330, g:1, k:1,kd:[{f:"1368-09-14",t:"1691-05-30",k:1,m:"Karakurum"}], d:[],
  bit:"1380-01-01",
  s:[
     {f:"0500-01-01",t:"0552-02-10",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Orhun/Ötüken vadisinde 500-552 sahibi: Wei shu 103 Rouran’ın «常所會庭則敦煌、張掖之北» (Dunhuang-Zhangye kuzeyi) toplandığını söyler, Orhun vadisini adıyla vermez; Rouran merkezi «Mumo» okunmadı; abi merkez bulunamadı | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı 0500-01-01; önceki sahiplik bu kümenin işi değil) · DOGU-500-1281"},
     {f:"0552-02-10",t:"0582-01-01",d:"gokturk-1",kesinlik:"ay",kaynak:"SAHİP gokturk-1: DOGU-500-1281 BOŞLUK BEYANI geri yazıldı (ZINCIR-ORTA, 24 Ekim 2026; boya durumu denetim/ILERLEME-BOYA-BEKLEYEN-ORTA.tsv) — dayanak aşağıdadır · ABİ MERKEZ: Ötüken (Dujin Dağı, Göktürk ordugâhı) — Zhou shu (Linghu Defen vd., 636) juan 50 «Tujue» (Wikisource 周書/卷50, bu oturumda okundu): «可汗恆處於都斤山，牙帳東開» — https://zh.wikisource.org/wiki/周書/卷50 | Zhou shu (Linghu Defen vd., 636) juan 50 «Tujue» (Wikisource 周書/卷50, bu oturumda okundu): «魏廢帝元年正月，土門發兵擊茹茹，大破之於懷荒北。阿那瓌自殺 … 土門遂自號伊利可汗» — https://zh.wikisource.org/wiki/周書/卷50 | BEYANLI YAKLAŞIKLIK: atlasın Karakurum noktası (Orhun vadisi) Ötüken bölgesini temsil eder; Dujin=Ötüken özdeşliği standart kabul (Pelliot) — bu oturumda açılmadı. Çin ay-güneş takvimi → Jülyen: 魏廢帝元年(552) 正月 ayı başı = Jülyen 0552-02-10; astronomik ay/zhongqi hesabı (denetim/dogu/cin2/_cal.py işlevleri, 640-12-19 甲子朔 = kış gündönümü ve cin1 534-11-08 丙寅 örnekleriyle sınandı), ±1 gün; Jülyen kalır (1582 öncesi). · DOGU-500-1281"},
     {f:"0582-01-01",t:"0630-01-01",d:"dogu-gokturk",kesinlik:"yil",kaynak:"SAHİP dogu-gokturk: DOGU-500-1281 BOŞLUK BEYANI geri yazıldı (ZINCIR-ORTA, 24 Ekim 2026; boya durumu denetim/ILERLEME-BOYA-BEKLEYEN-ORTA.tsv) — dayanak aşağıdadır · Zhou shu (Linghu Defen vd., 636) juan 50 «Tujue» (Wikisource 周書/卷50, bu oturumda okundu): «可汗恆處於都斤山» — https://zh.wikisource.org/wiki/周書/卷50 | 582 bölünmesi: atlas kronolojisi (bu oturumda kaynak açılmadı; atıf). f=582 yıl hassasiyeti; t=gün (aşağıda). BEYANLI YAKLAŞIKLIK (Ötüken). · DOGU-500-1281"},
     {f:"0630-01-01",t:"0630-05-02",d:"__BOSLUK__",kesinlik:"ay",kaynak:"BOŞLUK BEYANI: arandı, sahip kesinleşmedi (ZINCIR-ORTA, 24 Ekim 2026). TDV İslâm Ansiklopedisi «Türk» (https://islamansiklopedisi.org.tr/turk, bu oturumda okundu): «630’da Doğu Göktürk Devleti Çinliler tarafından ortadan kaldırıldı» (yıl); dogu-gokturk penceresi künye t=0630-01-01’de kapatıldı. Sonraki pencerenin başı 0630-05-02 (Çin ay-güneş takviminden hesaplı gün, aşağıdaki pencerenin kaynağında) olduğundan arası BEYANLI BOŞLUKtur; yıl içi sıra kaynakta okunmadı · DOGU-500-1281 çerçevesi"},
     {f:"0630-05-02",t:"0646-10-29",d:"xueyantuo",kesinlik:"yil",kaynak:"Jiu Tang shu (Liu Xu vd., 945) juan 3 «Taizong ji xia» (Wikisource 舊唐書/卷3, bu oturumda okundu): «三月庚辰，大同道行軍副總管張寶相生擒頡利可汗，獻於京師» — https://zh.wikisource.org/wiki/舊唐書/卷3 | Jiu Tang shu juan 199 xia «Beidi» (Wikisource 舊唐書/卷199下, bu oturumda okundu): «四年，平突厥頡利之後，朔塞空虛，夷男率其部東返故國，建庭于都尉揵山北，獨邏河之南» — https://zh.wikisource.org/wiki/舊唐書/卷199下 | BEYANLI YAKLAŞIKLIK: «郁督軍山» ve «都尉揵山» = Ötüken özdeşliği (Pelliot) bu oturumda açılmadı; Jiu Tang 194 shang Tang’ın 650 dolayı Doğu Türk artıklarını «郁督軍山»ya yerleştirdiğini söyler. Çin ay-güneş takvimi → Jülyen: 貞觀四年三月庚辰 → Jülyen 0630-05-02 (Gregoryen 0630-05-05); astronomik ay/zhongqi hesabı (denetim/dogu/cin2/_cal.py işlevleri, 640-12-19 甲子朔 = kış gündönümü ve cin1 534-11-08 丙寅 örnekleriyle sınandı), ±1 gün; Jülyen kalır (1582 öncesi). · DOGU-500-1281"},
     {f:"0646-10-29",t:"0682-01-01",d:"tang",kesinlik:"yil",kaynak:"Jiu Tang shu juan 199 xia «Beidi» (Wikisource 舊唐書/卷199下, bu oturumda okundu): «二十一年，契苾、回紇等十余部落以薛延陀亡散殆盡，乃相繼歸國 … 又置燕然都護以統之» — https://zh.wikisource.org/wiki/舊唐書/卷199下 | BEYANLI YAKLAŞIKLIK: jimi (gevşek) vilayet sistemi; fiilî yönetim Tiele/Doğu Türk artıklarındaydı. t=0682: Kutluğ İlteriş’in Ötüken’de II. Göktürk’ü kurması (atlas kronolojisi 0682-01-01; atıf). · DOGU-500-1281"},
     {f:"0682-01-01",t:"0745-01-01",d:"dogu-gokturk-2",kesinlik:"yil",kaynak:"Atlas kronolojisi KRONOLOJI_COK_MS1_1000_ORTADOGU 0682-01-01 (kaynak atfı; bu oturumda açılmadı) | künye dogu-gokturk-2 f=0682 (BOZKIR_RAPOR2) | BEYANLI YAKLAŞIKLIK (Ötüken). · DOGU-500-1281"},
     {f:"0745-01-01",t:"0840-01-01",d:"uygur",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Uygurlar» md., https://islamansiklopedisi.org.tr/uygurlar (bu oturumda okundu): «745 yılında Uygur yabgusu Basmıl kağanını yenilgiye uğratıp kendini kağan ilân etti» | «Uygur Kağanlığı sırasında dikilmiş Türkçe runik yazılı Şine-Usu (Moyen-çor Kağan adına 759’da), Taryat ve Karabalasagun (826) yazıtları» | BEYANLI YAKLAŞIKLIK: Ordu-Balık (Karabalgasun) Orhun vadisinde, Karakurum’a ~30 km. · DOGU-500-1281"},
     {f:"0840-01-01",t:"0920-01-01",d:"yenisey-kirgiz",kesinlik:{f:"yil",t:"yil"},kaynak:"TDV İslâm Ansiklopedisi, «Kırgızlar» md. (islamansiklopedisi.org.tr/kirgizlar, bu oturumda okundu): «840’ta şiddetli bir hücumla Uygur Devleti’ni yıkarak Ötüken’de kendi hâkimiyetlerini kurdular, fakat burada fazla kalamadılar»; «920’de K’i-tanlar onları Ötüken bölgesinden çıkardı» (Kırgızlar'ı Ötüken'den çıkaran Kıtanlar) · TDV, «Karakorum» md. (islamansiklopedisi.org.tr/karakorum): şehir (Ordu-Balık) Uygur Devleti'nin yıkılmasıyla terk edildi | BEYANLI YAKLAŞIKLIK: Karakurum noktası Orhun/Ötüken vadisini temsil eder (şehir değil bölge); TDV Kırgız merkezini adıyla vermez ('fazla kalamadılar'), 840-920 aralığı yıl düzeyindedir (hâkimiyetin tüm vadiyi kapsadığı tek kaynakta ayrışmaz). Önceki beyanlı boşluk (kirgiz-yenisey künyesi) yenisey-kirgiz künyesine çevrildi. · ASYA-ZINCIR-1024 (F7)"},
     {f:"0920-01-01",t:"1125-01-01",d:"liao-hanedani",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Kırgızlar» md., https://islamansiklopedisi.org.tr/kirgizlar (22.10.2026'da okundu): «920’de bütün Moğolistan’ı ele geçiren K’i-tanlar, Kırgızlar’ı Ötüken bölgesinden çıkarıp eski yurtlarına sürdüler.» | BEYANLI YAKLAŞIKLIK: Kitan (Liao) hâkimiyetinin Orhun vadisindeki fiilî gücü (kabile vasalları, garnizonlar) TDV’de ayrıntılandırılmaz; liao künyesi f=0916-01-01, t=1125-01-01 (Liao’nun sonu). f=0920-01-01 TDV Kırgızlar yıl. · DOGU-500-1281"},
     {f:"1125-01-01",t:"1206-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Orhun/Karakurum bölgesi 1125-1206 sahibi: TDV İslâm Ansiklopedisi, «Cengiz Han» md., https://islamansiklopedisi.org.tr/cengiz-han (22.10.2026'da okundu): «Kerayit Hükümdarı Ong Han’a (Tuğrul) hediye olarak takdim edildi.» | TDV İslâm Ansiklopedisi, «Kırgızlar» md., https://islamansiklopedisi.org.tr/kirgizlar (22.10.2026'da okundu): «Cengiz Han, Merkit ve Naymanlar’la olan savaşları sırasında Kırgızlar’ı da itaat altına aldı (1207).» | Kerayit/Nayman/Tatar/Kamag Moğol konfederasyonları 1125-1206 arası bu vadiyi paylaşıyor; TDV (Cengiz Han, Karahıtaylar, Kırgızlar) Orhun vadisini adıyla tek bir konfederasyona bağlamıyor → boşluk. t=1206-01-01: TDV Cengiz Han 1206 kurultayı. · DOGU-500-1281"},
     {f:"1206-01-01",t:"1235-01-01",d:"mogol-imparatorlugu",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Cengiz Han» md., https://islamansiklopedisi.org.tr/cengiz-han (22.10.2026'da okundu): «Timuçin 1206 yılında, Nayman Tayang Han, Ong Han ve Kutuku-Beki başta olmak üzere bütün bozkır hükümdarlarını hâkimiyeti altında toplamıştı.» | TDV İslâm Ansiklopedisi, «Karakorum» md., https://islamansiklopedisi.org.tr/karakorum (22.10.2026'da okundu): «Karakorum adını taşıyan ikinci şehir ise Cengiz Han tarafından 1220’de Orhon nehrinin sağ kıyısında ilk şehrin güneyinde kurulmuştur.» · «Moğol İmparatorluğu’nun başşehri olan Karakorum devrin kaynaklarında zaman zaman Ordubalık resmî adıyla zikredilmiştir» | f=1206-01-01 yıl; t=1260-01-01 mogol künye t (Kubilay). · DOGU-500-1281"},
     {f:"1235-01-01",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:"yil",kaynak:"«七年乙未春，城和林，作萬安宮。遣諸王拔都及皇子貴由、皇姪蒙哥征西域» «太祖十五年，定河北諸郡，建都於此。初立元昌路，後改轉運和林使司，前後五朝都焉» Yuanshi 2 (太宗) 七年乙未 (1235) 「城和林」 = Karakorum surları ve Wan’an sarayı: ilk yazılı kuruluş kaydı; Yuanshi 58 (和林) 「太祖十五年 (1220)… 建都於此」 daha eski ama sonradan yazılmış coğrafya özeti — BEYAN. 1235 öncesi zincir YAZILMADI (şehir yok). · VERI-MS1-1281"},
     {f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"«遷都大興，和林置宣慰司都元帥府。後分都元帥府於金山之南，和林止設宣慰司» «是月，阿里不哥僭號于和林城西按坦河。召賈居貞、張儆、王煥、完顏愈乘傳赴闕» Yuanshi 58 (嶺北行省 和林), Yuanshi 4 (世祖一, 1260: Ariq Böke Karakorum’da karşı han ilan etti). f: Yıl hassasiyeti, KÜNYE ÖMRÜ SINIRI: devletler.js mogol-imparatorlugu t=1260-01-01 = yuan-hanedani f=1260-01-01 (atlas künyesi, DAYANAK DEĞİL; dilim ucu künye ömrü içinde kalsın diye bu güne konuldu). Kubilay tahta çıkışı: Yuanshi 4 «辛卯，帝即皇帝位，以禡禡、趙璧、董文炳為燕京路宣慰使» ; Çin tarihi 中統元年春三月辛卯 → Jülyen 1260-05-05 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen) tablo etiketi 3/24; 宋理宗景定元年(歲次庚申)3月24日) — künye ömrü f=1260-01-01 olduğundan sınır bu güne çekilemedi, künye düzeltme önerisi celiskiler alanında. Karakorum Ariq Böke’nin üssü olduğundan 1260–1264 iç savaşta fiilî sahiplik Ariq Böke / Yuan arasında tartışmalıdır (BEYAN; ayrı künye yok). · VERI-MS1-1281"},
     {f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1635-01-01", d:"kuzey-yuan"},
     {f:"1635-01-01", t:"1911-12-29", d:"qing-hanedani"},
     {f:"1911-12-29", t:"1919-11-22", d:"mogolistan"},
     {f:"1919-11-22", t:"1921-07-11", d:"cin-cumhuriyeti"},
     {f:"1921-07-11", t:"1924-11-26", d:"mogolistan"},
     {f:"1924-11-26",t:"2000-12-31",d:"mogolistan-halk-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}] },

// Urga (Ulan Batur) — 1639'da gezici manastır olarak kuruldu (kur:),
// bugünkü yerine 1778'de yerleşti; Halha Moğollarının dinî ve siyasî
// merkezi.
{ ad:"Urga (Ulan Batur)", tur:"sehir", lat:47.8860, lon:106.9060, g:1, k:2,kd:[{f:"1911-12-29",t:"1923-10-29",k:1,m:"Urga (Ulan Batur)"}], d:[],
  kur:"1639-01-01",
  s:[{f:"1639-01-01", t:"1691-05-30", d:"kuzey-yuan"},
     {f:"1691-05-30", t:"1911-12-29", d:"qing-hanedani"},
     {f:"1911-12-29", t:"1919-11-22", d:"mogolistan"},
     {f:"1919-11-22", t:"1921-07-11", d:"cin-cumhuriyeti"},
     {f:"1921-07-11", t:"1924-11-26", d:"mogolistan"},{f:"1924-11-26",t:"2000-12-31",d:"mogolistan-halk-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}] },

// Uliastay — Qing 1733'te askerî valilik merkezi olarak kurdu (kur:).
{ ad:"Uliastay", tur:"kale", lat:47.7420, lon:96.8440, g:0, k:4, d:[],
  kur:"1733-01-01",
  s:[{f:"1733-01-01", t:"1911-12-29", d:"qing-hanedani"},
     {f:"1911-12-29", t:"1919-11-22", d:"mogolistan"},
     {f:"1919-11-22", t:"1921-07-11", d:"cin-cumhuriyeti"},
     {f:"1921-07-11", t:"1924-11-26", d:"mogolistan"},{f:"1924-11-26",t:"2000-12-31",d:"mogolistan-halk-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}] },

// Kobdo (Hovd) — batı Moğolistan'ın Qing garnizonu; Moğol kuvvetleri
// 20 Ağustos 1912'de aldı ve bu, bağımsızlığın fiilen tamamlandığı andır.
{ ad:"Kobdo (Hovd)", tur:"kale", lat:48.0060, lon:91.6410, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1635-01-01", d:"kuzey-yuan"},
     {f:"1635-01-01", t:"1755-01-01", d:"cungar"},
     {f:"1755-01-01", t:"1912-08-20", d:"qing-hanedani"},
     {f:"1912-08-20", t:"1924-11-26", d:"mogolistan"},{f:"1924-11-26",t:"2000-12-31",d:"mogolistan-halk-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}] },

// Hohhot (Kuku-hoto) — Altan Han 1581'de kurdu (kur:); Tümed Moğollarının
// merkezi, 1636'da Qing'e bağlandı. İç Moğolistan 1911'den sonra Çin'de
// kaldı, bu yüzden Urga'dan farklı bir zincir taşır.
{ ad:"Hohhot (Kuku-hoto)", tur:"sehir", lat:40.8420, lon:111.7500, g:0, k:3, d:[],
  kur:"1581-01-01",
  s:[{f:"1581-01-01", t:"1636-01-01", d:"kuzey-yuan"},
     {f:"1636-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

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

{ ad:"Kaşgar", tur:"sehir", lat:39.4700, lon:75.9900, g:1, k:2,kd:[{f:"1865-01-01",t:"1878-03-16",k:1,m:"Kaşgar"}], d:[],
  s:[
     {f:"0500-01-01",t:"0649-01-19",d:"kasgar-shule",kesinlik:"yil",kaynak:"SAHİP kasgar-shule: DOGU-500-1281 BOŞLUK BEYANI geri yazıldı (ZINCIR-ORTA, 24 Ekim 2026; boya durumu denetim/ILERLEME-BOYA-BEKLEYEN-ORTA.tsv) — dayanak aşağıdadır · Jiu Tang shu (Liu Xu vd., 945) juan 198 «Xirong» (Wikisource 舊唐書/卷198, bu oturumda okundu): «疏勒國，即漢時舊地也。西帶蔥嶺 … 其王姓裴氏。貞觀中，突厥以女妻王。» · Wei shu (Wei Shou, 554) juan 102 «Xiyu» (Wikisource 魏書/卷102, bu oturumda okundu): «疏勒國，在姑默西，白山南百餘里，漢時舊國也。» · f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; gerçek kuruluş/ilk anılış MS 500 öncesi, bu kümenin penceresi dışında) | BEYAN: Eftalit (Wei shu 102 «沙勒 … 皆役屬之») ve Göktürk üstünlüğü bu dilimde yerel krallık sahip sayıldı. · DOGU-500-1281"},
     {f:"0649-01-19",t:"0670-04-25",d:"tang",kesinlik:"ay",kaynak:"Jiu Tang shu (Liu Xu vd., 945) juan 198 «Xirong» (Wikisource 舊唐書/卷198, bu oturumda okundu): «先是，太宗既破龜茲，移置安西都護府於其國城 … 兼統於闐、疏勒、碎葉，謂之「四鎮」。» | BEYAN: Dört Garnizon'un kuruluş günü kaynakta ayrı verilmez, Kuça fethinin ayı alındı; Pei hanedanı Tang vasalı kral olarak sürdü. ÇELİŞKİ: TDV Kâşgar «Kâşgar’ı 629’dan beri ellerinde tutan Çinliler» der; Jiu Tang 198'in 貞觀九年 (635) ilk elçiliği ve Dört Garnizon bilgisiyle uyuşmaz, Çin metni esas alındı. Çin ay-güneş takvimi → Jülyen: 貞觀二十二年閏十二月丁丑朔 → 0649-01-19; astronomik ay/zhongqi hesabı (denetim/dogu/cin2/_cal.py işlevleri, gün-sayacı gz() ile), ±1-2 gün; Jülyen kalır (1582 öncesi). · DOGU-500-1281"},
     {f:"0670-04-25",t:"0692-11-14",d:"tibet-imparatorlugu",kesinlik:"ay",kaynak:"Jiu Tang shu (Liu Xu vd., 945) juan 198 «Xirong» (Wikisource 舊唐書/卷198, bu oturumda okundu): «其後吐蕃大入，焉耆已西四鎮城堡，並為賊所陷。» · Jiu Tang shu juan 5 «Gaozong ji xia» (Wikisource 舊唐書/卷5, bu oturumda okundu) (咸亨元年): «罷安西四鎮。» | BEYAN: Kâşgar için ayrı gün yok; Dört Garnizon'un düşüşü (670-04). Jiu Tang 5 咸亨四年十二月丙午 «疏勒二國王入朝請降» (673) ve Xin Tang 221 shang «儀鳳時，吐蕃破其國» (676-679) ile çelişkili; Jiu Tang 5 (670) esas alındı. Çin ay-güneş takvimi → Jülyen: 咸亨元年夏四月 ayı başı → 0670-04-25; astronomik ay/zhongqi hesabı (denetim/dogu/cin2/_cal.py işlevleri, gün-sayacı gz() ile), ±1-2 gün; Jülyen kalır (1582 öncesi). · DOGU-500-1281"},
     {f:"0692-11-14",t:"0766-01-01",d:"tang",kesinlik:"ay",kaynak:"Jiu Tang shu juan 6 «Zetian ji» (Wikisource 舊唐書/卷6, bu oturumda okundu) (長壽元年): «冬十月，武威軍總管王孝傑大破吐蕃，復龜茲、于闐、疏勒、碎葉鎮。» · Xin Tang shu (Ouyang Xiu vd., 1060) juan 221 shang «Xiyu» (Wikisource 新唐書/卷221上, bu oturumda okundu): «開元十六年，始遣大理正喬夢松攝鴻臚少卿，冊其君安定為疏勒王。天寶十二載，首領裴國良來朝，授折沖都尉» | BEYAN: bitiş 0766-01-01 karluk künyesinin f'sidir (hayalet devlet önlemi). ÇELİŞKİ: TDV Kâşgar «Karluklar 750’de şehri tekrar ele geçirdiler» der (TDV Karluklar md. devleti 766'da kurulmuş sayar); Çin metni Pei Guoliang'ın 753'te Tang unvanı aldığını yazar — üç kaynak çelişkili, çözüm RAPOR.md künye düzeltme önerisi (karluk f 0750). TDV 715 Kuteybe akını (TDV Kâşgar) kalıcı hâkimiyet sayılmadı. Çin ay-güneş takvimi → Jülyen: 長壽元年冬十月 ayı başı → 0692-11-14; astronomik ay/zhongqi hesabı (denetim/dogu/cin2/_cal.py işlevleri, gün-sayacı gz() ile), ±1-2 gün; Jülyen kalır (1582 öncesi). · DOGU-500-1281"},
     {f:"0766-01-01",t:"0840-01-01",d:"karluk",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Kâşgar» md., https://islamansiklopedisi.org.tr/kasgar (bu oturumda okundu): «Daha önce buranın sahibi olan Karluklar 750’de şehri tekrar ele geçirdiler ve bölgede Türk idaresini yeniden kurdular. Ardından şehre Uygurlar hâkim oldu» · TDV İslâm Ansiklopedisi, «Karluklar» md., https://islamansiklopedisi.org.tr/karluklar (bu oturumda okundu): «766 yılında burada başşehri Balasagun yakınlarındaki Kara-ordu olan bir devlet kurdular … IX. yüzyılda ise büyük bir gelişme gösterdi ve Taşkent, Fergana ve Kâşgar’ı ilhak ederek sınırlarını Siriderya nehrine kadar genişletti.» | BEYAN: TDV Kâşgar 'Uygurlar hâkim oldu' der (tarih yok); Karluk dilimi 0766-0840 yaklaşıklık: TDV iki ifadesi (750 / IX. yüzyıl ilhak) çelişir; Uygur hâkimiyeti dilimi yazılamadı (tarih yok). · DOGU-500-1281"},
     {f:"0840-01-01",t:"1000-01-01",d:"karahanli",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, Abdülkerim Özaydın, \"Karahanlılar\" md., 2001, https://islamansiklopedisi.org.tr/karahanlilar («840’ta Ötüken’deki Uygur Devleti’nin yıkılmasının ardından Uygur hükümdar ailesinden başbuğların idaresinde bulunan Yağmalar Kâşgar’a gelmiş ve bazı yerleri Karluklar’dan alarak bölgeye hâkim olmuşlar») (bu oturumda okundu) | TDV İslâm Ansiklopedisi, Abdülkerim Özaydın, \"Karahanlılar\" md., 2001, https://islamansiklopedisi.org.tr/karahanlilar («Kadır Han Oğulçak bu gelişmeler üzerine başşehri Kâşgar’a nakletti.») (bu oturumda okundu) · DOGU-500-1281"},
     {f:"1000-01-01",t:"1041-01-01",d:"karahanli",kesinlik:{t:"yil"},kaynak:"TDV kasgar: 'V. (XI.) yüzyılın başında Karahanlı İlig Han Nasr’ın kardeşi Togan Han Kâşgar hâkimi idi. 405’te (1014) burada basılan bir sikkede ise Abbâsî Halifesi Kādir-Billâh ile Karahanlı Hükümdarı Yûsuf Kadır Han’ın adları bulunmaktadır.' · bitiş: TDV karahanlilar ‘devletin ikiye ayrıldığı 1041-1042’ · f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor; edinim günü değil, D210) · ONCE1281-GERIYE"},
     {f:"1041-01-01",t:"1130-01-01",d:"dogu-karahanli",kesinlik:{f:"yil",t:"yil"},kaynak:"TDV hucend: 'XI. yüzyılın ortalarında Karahanlılar ikiye ayrılınca … Doğu Karahanlı Hükümdarı Yûsuf Kadır Han’ın hâkimiyetindeki Balasagun ve Kâşgar Hanlığı’nın doğusu' · TDV kasgar: Melikşah Semerkant’ı alınca ‘Kâşgar hanı huzuruna gelip itaat arzetti … bu tâbiiyet Sencer zamanında da sürdü’ (tâbiiyet, yönetim Doğu Karahanlı’da kaldı) · bitiş: 'Karahıtaylar, 1128’deki ilk saldırılarında Kâşgar’ı alamadılarsa da iki yıl sonra Balasagun ve Hoten ile birlikte burayı da zaptettiler.' · ONCE1281-GERIYE"},
     {f:"1130-01-01",t:"1211-01-01",d:"karahitay",kesinlik:{f:"yil",t:"yil"},kaynak:"TDV kasgar: 'Karahıtaylar, 1128’deki ilk saldırılarında Kâşgar’ı alamadılarsa da iki yıl sonra Balasagun ve Hoten ile birlikte burayı da zaptettiler.' (1128+2 = 1130 TÜRETİLMİŞ yıl, BEYANLI) · bitiş: Karahıtay künye sonu 1211 (Nayman Güçlüg Gürhan’ı devirdi — TDV mogollar) · ONCE1281-GERIYE"},
     {f:"1211-01-01",t:"1218-01-01",d:"__BOSLUK__",kesinlik:{f:"yil",t:"yil"},kaynak:"BEYANLI BOŞLUK: TDV mogollar (repo maddesi 1218): 'Nayman Tayang Han’ın oğlu Güçlüg Karahıtay Gürhanını devirip ülkeye hâkim olmuştu. Cengiz Han’ın kumandanı Cebe Noyan 1218’de bu toprakları ele geçirdi.' — Güçlüg yönetimi için künye YOK (nayman künyesi 1204’te biter), komşu devlete itilmedi · ONCE1281-GERIYE"},
     {f:"1218-01-01",d:"mogol-imparatorlugu",kaynak:"TDV kasgar: 'Cengiz Han’ın Cebe Noyan kumandasında gönderdiği kuvvetlerin şehri ele geçirmesiyle (1218) birlikte ibadetler serbest bırakıldı.' · 1130 Karahıtay zaptı ('iki yıl sonra' — türetilmiş yıl) ile 1218 arası Küçlüg dönemi tarihsiz · ZAMAN-Z6-1008",t:"1227-01-01",kesinlik:"yil"},
     {f:"1227-01-01",t:"1347-01-01",d:"cagatay",kaynak:"f 1281-01-01'den geri çekildi — TDV kasgar: 'Cengiz Han’ın Cebe Noyan kumandasında gönderdiği kuvvetlerin şehri ele geçirmesiyle (1218) birlikte ibadetler serbest bırakıldı.' · ardıl yapı; cagatay künye günü devralındı — kaynaksız gün · ZAMAN-Z6-1008"},
     {f:"1347-01-01",t:"1514-01-01",d:"mogulistan"},
     {f:"1514-01-01",t:"1705-01-01",d:"yarkent-hanligi"},
     {f:"1705-01-01",t:"1759-01-01",d:"cungar"},
     {f:"1759-01-01",t:"1864-06-04",d:"qing-hanedani"},
     {f:"1864-06-04",t:"1877-12-17",d:"yakub-beg"},
     {f:"1877-12-17",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1933-11-12",d:"cin-cumhuriyeti"},
     {f:"1933-11-12",t:"1934-03-21",d:"dogu-turkistan-islam-cumhuriyeti",kesinlik:{f:"gun",t:"gun"},kaynak:"Andrew D. W. Forbes, Warlords and Muslims in Chinese Central Asia: A Political History of Republican Sinkiang 1911-1949, Cambridge University Press, 1986, ss. 113-114 (archive.org: dli.pahar.3598, tam metin okundu): Sabit Damullah «proclaimed a ‘Turkish-Islamic Republic of Eastern Turkestan’» 12 Kasım 1933'te; hükûmet merkezi «the secessionist capital at Kashgar Old City» · TDV İslâm Ansiklopedisi, «Türkistan» md. (islamansiklopedisi.org.tr/turkistan, bu oturumda okundu): «Kâşgar’da Şarkî Türkistan Cumhuriyeti ilân edildi (Kasım 1933)»; son: «21 Mart 1934'te Kâşgar'a girdi, Doğu Türkistan hükümeti Kâşgar'dan çekildi» | KAYNAK ÇELİŞKİSİ (CLAUDE.md: TDV esas): Forbes ss. 122-123 hükûmetin 5 Şubat 1934'te Kaşgar'dan Yangi-Hissar'a çekildiğini, Tungan öncü birliğinin ertesi gün (6 Şubat) Kaşgar vahasına girdiğini, Ma Chung-ying'in ise 6 Nisan 1934'te Kaşgar'a vardığını yazar; dönem sonu TDV'ye göre 1934-03-21 alındı, Forbes 1934-02-06'yı verir. · ASYA-ZINCIR-1024"},
     {f:"1934-03-21",t:"1949-10-01",d:"cin-cumhuriyeti"},
     {f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Yarkent (Şaçe)", tur:"sehir", lat:38.4160, lon:77.2430, g:1, k:2,kd:[{f:"1514-01-01",t:"1705-01-01",k:1,m:"Yarkent (Şaçe)"}], d:[],
  s:[{f:"1281-01-01", t:"1347-01-01", d:"cagatay"},
     {f:"1347-01-01", t:"1514-01-01", d:"mogulistan"},
     {f:"1514-01-01", t:"1705-01-01", d:"yarkent-hanligi"},
     {f:"1705-01-01", t:"1759-01-01", d:"cungar"},
     {f:"1759-01-01", t:"1864-06-04", d:"qing-hanedani"},
     {f:"1864-06-04", t:"1877-12-17", d:"yakub-beg"},
     {f:"1877-12-17", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Hotan", tur:"sehir", lat:37.1170, lon:79.9280, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"0649-01-19",d:"khotan",kesinlik:"yil",kaynak:"SAHİP khotan: DOGU-500-1281 BOŞLUK BEYANI geri yazıldı (ZINCIR-ORTA, 24 Ekim 2026; boya durumu denetim/ILERLEME-BOYA-BEKLEYEN-ORTA.tsv) — dayanak aşağıdadır · Jiu Tang shu (Liu Xu vd., 945) juan 198 «Xirong» (Wikisource 舊唐書/卷198, bu oturumda okundu): «于闐國，西南帶蔥嶺，與龜茲接，在京師西九千七百里 … 先臣於西突厥。其王姓尉遲氏» · Wei shu (Wei Shou, 554) juan 102 «Xiyu» (Wikisource 魏書/卷102, bu oturumda okundu): «于闐國，在且末西北，葱嶺之北二百餘里。» · f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; gerçek kuruluş/ilk anılış MS 500 öncesi, bu kümenin penceresi dışında) | BEYAN: Eftalit (Wei shu 102 嚈噠 «于闐 … 皆役屬之») ve Batı Göktürk üstünlüğü bu dilimde yerel krallık sahip sayıldı. · DOGU-500-1281"},{f:"0649-01-19",t:"0670-04-25",d:"tang",kesinlik:"ay",kaynak:"Jiu Tang shu juan 3 «Taizong ji xia» (Wikisource 舊唐書/卷3, bu oturumda okundu) (貞觀二十二年閏月): «副將薛萬徹脅於闐王伏闍信入朝。» · Jiu Tang shu (Liu Xu vd., 945) juan 198 «Xirong» (Wikisource 舊唐書/卷198, bu oturumda okundu): «太宗既破龜茲，移置安西都護府於其國城 … 兼統於闐、疏勒、碎葉，謂之「四鎮」。» | BEYAN: Hotan Tang'ın Dört Garnizon'unda yer aldı, Yuchi hanedanı kral olarak sürdü (egemenlik Tang'da alındı; Xin Tang 221 shang: «會高宗立，授右衛大將軍»). Çin ay-güneş takvimi → Jülyen: 貞觀二十二年閏十二月丁丑朔 → 0649-01-19; astronomik ay/zhongqi hesabı (denetim/dogu/cin2/_cal.py işlevleri, gün-sayacı gz() ile), ±1-2 gün; Jülyen kalır (1582 öncesi). · DOGU-500-1281"},{f:"0670-04-25",t:"0692-11-14",d:"tibet-imparatorlugu",kesinlik:"ay",kaynak:"舊唐書 juan 5 (zh.wikisource.org/wiki/舊唐書/卷5; bu oturumda okundu): «吐蕃寇陷白州等一十八州，又與於闐合眾襲龜茲撥換城，陷之。罷安西四鎮。» | 舊唐書 juan 198 (zh.wikisource.org/wiki/舊唐書/卷198; bu oturumda okundu): «其後吐蕃大入，焉耆已西四鎮城堡，並為賊所陷。» | BEYANLI YAKLAŞIKLIK: Hotan’ın Tibet idaresine giriş günü ayrı yok; Dört Garnizon’un kaldırılışı (670-04) ve Tibet-Hotan ittifakı. t=692-11-14: Jiu Tang 198 “長壽元年…克復龜茲、於闐等四鎮” (Kuça zinciriyle aynı gün). Ay-güneş → Jülyen: Kuça zinciri (bozkir3 _cal.py) ±1-2 gün. · DOGU-500-1281"},{f:"0692-11-14",t:"0791-01-01",d:"tang",kesinlik:"ay",kaynak:"舊唐書 juan 198 (zh.wikisource.org/wiki/舊唐書/卷198; bu oturumda okundu): «則天臨朝，長壽元年，武威軍總管王孝傑、阿史那忠節大破吐蕃，克復龜茲、於闐等四鎮» | 舊唐書 juan 6 (zh.wikisource.org/wiki/舊唐書/卷6; bu oturumda okundu): «冬十月，武威軍總管王孝傑大破吐蕃，復龜茲、于闐、疏勒、碎葉鎮。» | 舊唐書 juan 196下 (zh.wikisource.org/wiki/舊唐書/卷196下; bu oturumda okundu): «自是安西阻絕，莫知存否。» | BEYAN: t=0791-01-01 yıl (貞元七年 ≈ 791; yıl numarası sayfa bağlamından, ay/gün yok): Beiting 790’da düştü, Anxi (Dört Garnizon) ile bağ 791’de koptu; Hotan’ın fiilî düşüş yılı okunmadı. TDV Hoten 744’ten itibaren Hoten’i Uygur Kağanlığı sınırlarında sayar → bu yüzden ÇELİŞKİ: aşağıdaki dilim TDV’yi (esas) izler; 744-791 arası Çin kaynağında Tang garnizonu görünür. · DOGU-500-1281"},{f:"0791-01-01",t:"0840-01-01",d:"uygur-kaganligi",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Hoten» md., https://islamansiklopedisi.org.tr/hoten (22.10.2026'da okundu): «744 yılında kurulan Büyük Uygur Kağanlığı sınırlarına dahil olan Hoten, bu devirde ve özellikle bu devletin 840 yılında Kırgızlar tarafından yıkılması üzerine bölgenin yoğun biçimde Uygur göçmenlerince iskân edilmesinden sonra tamamen Türkleşti» | ÇELİŞKİ BEYANI: TDV Hoten 744-840 boyunca Hoten’i Uygur Kağanlığı içinde sayar; Çin kaynakları (Jiu Tang) 744-791 Tang Anxi garnizonunu, 791 sonrası Anxi kopukluğunu anlatır ve Tibet idaresini sayfalarda açmaz. TDV esas alındı: 791-840 Uygur Kağanlığı; 744-791 Tang yazıldı (Tang 198/6 Anxi garnizonu). Tibet’in 791-840 Hotan idaresi (Çin/Tibet kaynakları) okunmadı. · DOGU-500-1281"},{f:"0840-01-01",t:"1000-01-01",d:"khotan",kesinlik:"yil",kaynak:"SAHİP khotan: DOGU-500-1281 BOŞLUK BEYANI geri yazıldı (ZINCIR-ORTA, 24 Ekim 2026; boya durumu denetim/ILERLEME-BOYA-BEKLEYEN-ORTA.tsv) — dayanak aşağıdadır · TDV İslâm Ansiklopedisi, «Hoten» md., https://islamansiklopedisi.org.tr/hoten (22.10.2026'da okundu): «Hoten hükümdarlarının kendilerini Türkler’in ve Tibetliler’in beyi olarak tanıttıkları, Çin ve Tibet sınırında oturdukları, nahiyelerde sorumlu beylerin bulunduğu, bölgeden 70.000 muharip çıktığı ve ayrıca Hoten nehrinden yeşim taşı elde edildiği verilen bilgiler arasındadır» | TDV İslâm Ansiklopedisi, «Hoten» md., https://islamansiklopedisi.org.tr/hoten (22.10.2026'da okundu): «Hoten daha sonra Karahıtaylar’ın eline geçti.» | BEYANLI YAKLAŞIKLIK: Hudûdü’l-âlem’in (X. yy) anlattığı yerel Hoten hükümdarları khotan künyesine bağlandı (khotan künyesi f=0500, t=1006); 840 f: Uygur Kağanlığı’nın yıkılışı (TDV Hoten); t=1006: khotan künye t (TDV Karahanlılar 1006 olayları). · DOGU-500-1281"},{f:"1000-01-01",t:"1006-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BEYANLI BOŞLUK (arandı, bulunamadı): Hotan'ın 1000–1006 sahibi; TDV karahanlilar Hoten hâkimini ancak 1006 sonrası olaylarda anar. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1006-01-01",t:"1041-01-01",d:"karahanli",kesinlik:"yil",kaynak:"TDV karahanlilar: «Hoten’i elinde tutan Kadır Han Yûsuf b. Hasan’dan yardım istedi» (Gazneli Mahmud karşısında 1006 olayları sonrası, 398/1008 Belh yenilgisi öncesi). BEYANLI YAKLAŞIKLIK: 1006 alt sınır yıl; Yûsuf Kadır Han'ın Hotan hâkimliği daha önce başlamış olabilir. Bitiş 1041 = Karahanlı bölünmesi (433/1041-42). · VERI-MS1-1281"},{f:"1041-01-01",t:"1130-01-01",d:"dogu-karahanli",kesinlik:"yil",kaynak:"TDV karahitaylar: «1128 yılında Balasagun, Hoten ve Kâşgar bölgesine ilk girdiğinde Doğu Karahanlı Hükümdarı Arslan Han Ahmed b. Hasan tarafından mağlûp edildi» TDV karahanlilar: «Yûsuf Kadır Han’ın oğulları da doğuda hüküm sürmeye başladılar». BEYANLI YAKLAŞIKLIK: Hotan'ın bölünme sonrası Doğu kolunda olduğu 1128 tanıklığından ve Yûsuf Kadır Han'ın (Hotan hâkimi) oğullarının doğu kolu oluşundan çıkarıldı; 1041-1128 arası şehir adıyla tanıklık yok. · VERI-MS1-1281"},{f:"1130-01-01",t:"1211-01-01",d:"karahitay",kesinlik:"yil",kaynak:"TDV karahitaylar: «Kâşgar, Beşbalık ve Hoten’i de kendine tâbi kılıp» TDV karahitaylar: «bu devlete son verdi (1211)». Tâbi kılma = vassal/tâbiiyet (kaynak ifadesi). · VERI-MS1-1281"},{f:"1211-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BEYANLI BOŞLUK (arandı, bulunamadı): Hotan'ın 1211–1281 sahibi (Küçlüg/Moğol/Çağatay). TDV kasgar yalnız Kâşgar'ı (1218 Cebe Noyan, 1227 Çağatay payı) anar; Hotan adıyla tanıklık yok; nayman künyesi (1199-1204) 1211 sonrasını kapsamaz. · VERI-MS1-1281"},{f:"1281-01-01", t:"1347-01-01", d:"cagatay"},
     {f:"1347-01-01", t:"1514-01-01", d:"mogulistan"},
     {f:"1514-01-01", t:"1705-01-01", d:"yarkent-hanligi"},
     {f:"1705-01-01", t:"1759-01-01", d:"cungar"},
     {f:"1759-01-01", t:"1864-06-04", d:"qing-hanedani"},
     {f:"1864-06-04", t:"1877-12-17", d:"yakub-beg"},
     {f:"1877-12-17", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Kuça — 4 Haziran 1864'teki ayaklanma bütün Doğu Türkistan'ı ateşe verdi.
{ ad:"Kuça (Kuqa)", tur:"sehir", lat:41.7170, lon:82.9620, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"0649-01-19",d:"kuca",kesinlik:"yil",kaynak:"SAHİP kuca: DOGU-500-1281 BOŞLUK BEYANI geri yazıldı (ZINCIR-ORTA, 24 Ekim 2026; boya durumu denetim/ILERLEME-BOYA-BEKLEYEN-ORTA.tsv) — dayanak aşağıdadır · Jiu Tang shu (Liu Xu vd., 945) juan 198 «Xirong» (Wikisource 舊唐書/卷198, bu oturumda okundu): «龜茲國，即漢西域舊地也。在京師西七千五百里。其王姓白氏。» · «貞觀四年，又遣使獻馬 … 然臣於西突厥。» · f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; gerçek kuruluş/ilk anılış MS 500 öncesi, bu kümenin penceresi dışında) | BEYAN: Batı Göktürk üstünlüğü (Jiu Tang 198 «臣於西突厥») bu dilimde yerel krallık sahip sayıldı (egemen yerel hanedan). · DOGU-500-1281"},{f:"0649-01-19",t:"0670-04-25",d:"tang",kesinlik:"ay",kaynak:"Jiu Tang shu juan 3 «Taizong ji xia» (Wikisource 舊唐書/卷3, bu oturumda okundu) (貞觀二十二年): «閏月丁丑朔 … 破龜茲大撥等五十城 … 執龜茲王訶黎布失畢以歸，龜茲平» · Jiu Tang shu (Liu Xu vd., 945) juan 198 «Xirong» (Wikisource 舊唐書/卷198, bu oturumda okundu): «先是，太宗既破龜茲，移置安西都護府於其國城» | BEYAN: Bai hanedanı Tang vasalı kral olarak sürdü (Jiu Tang 198 «依舊為龜茲王»); egemenlik Tang'a ait alındı. Çin ay-güneş takvimi → Jülyen: 貞觀二十二年閏十二月丁丑朔 → 0649-01-19; astronomik ay/zhongqi hesabı (denetim/dogu/cin2/_cal.py işlevleri, gün-sayacı gz() ile), ±1-2 gün; Jülyen kalır (1582 öncesi). · DOGU-500-1281"},{f:"0670-04-25",t:"0692-11-14",d:"tibet-imparatorlugu",kesinlik:"ay",kaynak:"Jiu Tang shu juan 5 «Gaozong ji xia» (Wikisource 舊唐書/卷5, bu oturumda okundu) (咸亨元年): «夏四月，吐蕃寇陷白州等一十八州，又與於闐合眾襲龜茲撥換城，陷之。罷安西四鎮。» · Jiu Tang shu (Liu Xu vd., 945) juan 198 «Xirong» (Wikisource 舊唐書/卷198, bu oturumda okundu): «其後吐蕃大入，焉耆已西四鎮城堡，並為賊所陷。» | BEYAN: Kuça şehrinin kendisi için ayrı fetih günü yok; Dört Garnizon kaldırıldı (670-04). Xin Tang 221 shang Tibet fethini 儀鳳 (676-679) verir ve Jiu Tang 5 675-676'da Kuça kralı Bai Suji'nin Tang'a elçi gönderdiğini yazar — çelişki; Jiu Tang 5 esas alındı. Çin ay-güneş takvimi → Jülyen: 咸亨元年夏四月 ayı başı → 0670-04-25; astronomik ay/zhongqi hesabı (denetim/dogu/cin2/_cal.py işlevleri, gün-sayacı gz() ile), ±1-2 gün; Jülyen kalır (1582 öncesi). · DOGU-500-1281"},{f:"0692-11-14",t:"0791-01-01",d:"tang",kesinlik:"ay",kaynak:"舊唐書 juan 198 (zh.wikisource.org/wiki/舊唐書/卷198; bu oturumda okundu): «則天臨朝，長壽元年，武威軍總管王孝傑、阿史那忠節大破吐蕃，克復龜茲、於闐等四鎮，自此復於龜茲置安西都護府» | 舊唐書 juan 196下 (zh.wikisource.org/wiki/舊唐書/卷196下; bu oturumda okundu): «自是安西阻絕，莫知存否。» | f: Jiu Tang 6 «冬十月» 長壽元年 (692-11-14; bozkir3 hesabı); t=791-01-01 yıl (貞元七年): Anxi ile bağ koptu, Kuça’nın Tibet’e fiilî düşüş yılı okunmadı (BEYAN). · DOGU-500-1281"},{f:"0791-01-01",t:"0911-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Kuça 791-911 sahibi: 舊唐書 juan 196下 (zh.wikisource.org/wiki/舊唐書/卷196下; bu oturumda okundu): «自是安西阻絕，莫知存否。» | TDV İslâm Ansiklopedisi, «Uygurlar» md., https://islamansiklopedisi.org.tr/uygurlar (22.10.2026'da okundu): «Diğer kabileler Doğu Türkistan’a göç edip Turfan, Kuça, Karaşar şehirlerine ve civarına yerleştiler.» | Tibet (790’lardan) / Uygur dönemi için Kuça adıyla tek sahip okunmadı → boşluk (Karaşar zinciriyle aynı). t=911-01-01 koco-uygur künye f / TDV Uygurlar. · DOGU-500-1281"},{f:"0911-01-01",t:"1130-01-01",d:"koco-uygur",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Uygurlar» md., https://islamansiklopedisi.org.tr/uygurlar (22.10.2026'da okundu): «911’de bağımsız hale gelen Uygur Devleti güneyde Tibet, Batı Türkistan’da Karluk bölgesiyle sınırlıydı.» · «Diğer kabileler Doğu Türkistan’a göç edip Turfan, Kuça, Karaşar şehirlerine ve civarına yerleştiler.» | BEYANLI YAKLAŞIKLIK: Kuça’nın Koço Uygur Devleti’ne bağlı olduğu TDV’de doğrudan yok; Uygurların Kuça’ya yerleşmesinden çıkarım (Karaşar ile aynı). Karahanlı’nın doğuya ilerleyişi (Kâşgar/Hoten 1006) Kuça’ya ulaştı mı okunmadı. · DOGU-500-1281"},{f:"1130-01-01",t:"1209-01-01",d:"karahitay",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Karahıtaylar» md., https://islamansiklopedisi.org.tr/karahitaylar (22.10.2026'da okundu): «Doğuda Beşbalık’tan başlayarak Turfan, Karaşar ve Kuça’da oturan Uygur Türkleri, kuzeyde Aşağı İli’de oturan Karluklar, güneybatıda Mâverâünnehir ve Kuzey Afganistan halkları, Doğu İran’da da müslüman Türkler ve diğer bazı kavimler Karahıtaylar’a tâbi idiler.» | f=1130-01-01 Karahıtay kuruluşu; t=1209-01-01: İdikut Barçuk’un Cengiz’e bağlanışı (TDV Uygurlar). · DOGU-500-1281"},{f:"1209-01-01",t:"1227-01-01",d:"mogol-imparatorlugu",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Uygurlar» md., https://islamansiklopedisi.org.tr/uygurlar (22.10.2026'da okundu): «Turfan Uygur Devleti 1209’da Cengiz Han’a bağlanıp 1368 yılına kadar Moğol idaresinde varlığını sürdürdü.» | BEYANLI YAKLAŞIKLIK: Kuça adı geçmez (Karaşar ile aynı gerekçe). · DOGU-500-1281"},{f:"1227-01-01",t:"1281-01-01",d:"cagatay",kesinlik:"yil",kaynak:"TDV İslâm Ansiklopedisi, «Çağatay Hanlığı» md., https://islamansiklopedisi.org.tr/cagatay-hanligi (22.10.2026'da okundu): «1227-1370 yılları arasında Mâverâünnehir, Yedisu ve Doğu Türkistan’da hüküm süren bir hânedan.» | BEYANLI YAKLAŞIKLIK: Kuça adı geçmez. Mevcut zincir cagatay 1281-01-01. · DOGU-500-1281"},{f:"1281-01-01", t:"1347-01-01", d:"cagatay"},{f:"1347-01-01", t:"1514-01-01", d:"mogulistan"},{f:"1514-01-01", t:"1705-01-01", d:"yarkent-hanligi"},{f:"1705-01-01", t:"1759-01-01", d:"cungar"},{f:"1759-01-01", t:"1864-06-04", d:"qing-hanedani"},{f:"1864-06-04",t:"1867-01-01",d:"kuca-hocalari",kesinlik:{t:"yil"},kaynak:"TDV İslâm Ansiklopedisi, «Döngen» maddesi (https://islamansiklopedisi.org.tr/dongen): «… 1862’de Shensi’nin Weinan bölgesinde patlak veren Döngen ayaklanmaları, kısa zamanda Kansu ve Doğu Türkistan’a kadar yayılarak 1864’te Kuça’da Döngen-Uygur Birleşik Hükümeti’nin kurulmasına imkân vermiş …» ; TDV «Turfan» maddesi: «Yâkub Beg 1866’da Hoten’i, 1867’de Kuça’yı ele geçirdikten sonra 1868’de Turfan ve Kumul’u kendine bağladı.» · BAŞLANGIÇ: atlasın Qing bitişi 1864-06-04 olduğu gibi bırakıldı (TDV yalnız yıl: 1864); BİTİŞ: Yâkub Beg’in Kuça’yı alışı TDV’de YIL (1867) ⇒ 1867-01-01 (gün yok). Önceki kayıt (yakub-beg 1864-06-04→) Yâkub Beg künyesinin başlangıcından (1865-01-01) önceydi ve TDV’ye göre Kuça 1867’ye dek Döngen-Uygur hükümetindeydi. · ZİNCİR-1281SONRA-1024"},{f:"1867-01-01", t:"1877-10-18", d:"yakub-beg"},{f:"1877-10-18", t:"1912-02-12", d:"qing-hanedani"},{f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Turfan — Moğulistan'ın doğu ucu; Qing 1755-1759 seferleriyle bağladı.
{ ad:"Turfan", tur:"sehir", lat:42.9510, lon:89.1900, g:0, k:1,kd:[{f:"1347-01-01",t:"1680-01-01",k:1,m:"Turfan"}], d:[],
  s:[{f:"1000-01-01",t:"1209-01-01",d:"koco-uygur",kesinlik:"yil",kaynak:"TDV turfan: «982 yılına gelindiğinde Turfan Uygurları’nın başındaki Arslan Han’ın» TDV turfan: «Turfan civarındaki Uygur Devleti 1209 yılına kadar bağımsız kalmayı başardı» TDV turfan: «XII. yüzyılda Karahıtaylar’a bağlanan Turfan’daki İdikutlar 1209’da Cengiz Han’a». BEYANLI: XII. yy'da Karahıtay'a vassallık (tarihsiz) dilim içinde; sahip İdikut devleti olarak yazıldı. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1209-01-01",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:"yil",kaynak:"TDV turfan: «Ardından Moğol İmparatorluğu’na bağlanarak» TDV turfan: «Onun oğulları Kesmes ve Salındı Moğollar’ın müttefiki oldular». Bitiş 1260 = Moğol İmparatorluğu künye sonu. · VERI-MS1-1281"},{f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"TDV turfan: «Buradaki Uygurlar, Çin’deki Moğol hânedanına bağlı olarak buğra damgasını kullanıyorlardı» TDV turfan: «Koçkar Tegin adlı İdikut’u kendisine bağlamak için Beşbalık’ı kuşattı». BEYANLI YAKLAŞIKLIK: 1286 civarında Duva (Çağatay) İdikut'u bağlamak için kuşattı = 1281'de İdikutlar Yuan'a bağlıydı. · VERI-MS1-1281"},{f:"1281-01-01", t:"1347-01-01", d:"cagatay"},
     {f:"1347-01-01", t:"1680-01-01", d:"mogulistan"},
     {f:"1680-01-01", t:"1755-01-01", d:"cungar"},
     {f:"1755-01-01", t:"1864-06-04", d:"qing-hanedani"},
     {f:"1864-06-04", t:"1876-08-18", d:"yakub-beg"},
     {f:"1876-08-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Hâmi (Kumul) — Ming 1404-1513 arasında burada garnizon tuttu; Doğu
// Türkistan'ın Qing'e İLK bağlanan noktasıdır (1697).
{ ad:"Hâmi (Kumul)", tur:"sehir", lat:42.8280, lon:93.5150, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
     {f:"1368-09-14", t:"1404-01-01", d:"kuzey-yuan"},
     {f:"1404-01-01", t:"1513-01-01", d:"ming-hanedani"},
     {f:"1513-01-01", t:"1680-01-01", d:"mogulistan"},
     {f:"1680-01-01", t:"1697-01-01", d:"cungar"},
     {f:"1697-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Ürümçi (Dihua) — Qing 1763'te garnizon şehri olarak kurdu (kur:).
// 1864-1876 arası Dungan isyancılarının ve ardından Yâkub Bey'in elinde
// kaldı; Zuo Zongtang 18 Ağustos 1876'da geri aldı.
{ ad:"Ürümçi (Dihua)", tur:"sehir", lat:43.8260, lon:87.6160, g:1, k:3, d:[],
  kur:"1763-01-01",
  s:[{f:"1763-01-01", t:"1864-06-04", d:"qing-hanedani"},
     {f:"1864-06-04", t:"1876-08-18", d:"yakub-beg"},
     {f:"1876-08-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Gulca (Yining) — Cungar Hanlığı'nın merkezi. Rusya 4 Temmuz 1871'de
// İli vadisini işgal etti ve 24 Şubat 1881 Petersburg Antlaşması'yla
// 1882'de geri verdi — on bir yıllık gerçek bir Rus idaresidir.
{ ad:"Gulca (Yining)", tur:"sehir", lat:43.9130, lon:81.3240, g:1, k:2,kd:[{f:"1634-01-01",t:"1758-01-01",k:1,m:"Gulca (Yining)"}], d:[],
  s:[
     {f:"1281-01-01", t:"1347-01-01", d:"cagatay"},
     {f:"1347-01-01", t:"1634-01-01", d:"mogulistan"},
     {f:"1634-01-01", t:"1755-01-01", d:"cungar"},
     {f:"1755-01-01", t:"1871-07-04", d:"qing-hanedani"},
     {f:"1871-07-04", t:"1882-03-22", d:"rusya"},
     {f:"1882-03-22", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1944-11-12", d:"cin-cumhuriyeti"},
     {f:"1944-11-12",t:"1949-10-20",d:"dogu-turkistan-cumhuriyeti-gulca",kesinlik:{f:"gun",t:"gun"},kaynak:"TDV İslâm Ansiklopedisi, «Türkistan» md. (islamansiklopedisi.org.tr/turkistan, bu oturumda okundu): «Şarkî Türkistan Cumhuriyeti, Kulca’da (Yining) Çin’e karşı ayaklananlar tarafından yeniden kuruldu (12 Kasım 1944)»; son: «20 Ekim 1949'da bu devlet yıkıldı» (Aralık 1949'da Çin Kızılordusu tarafından son defa işgal edildi) | KAYNAK ÇELİŞKİSİ (TDV esas): A. D. W. Forbes, Warlords and Muslims in Chinese Central Asia, Cambridge UP 1986, s. 176 (archive.org dli.pahar.3598): Kulca'da ‘East Turkestan Republic’ hükûmeti «on 15 November 1944» kuruldu (ilk silahlı ayaklanma 7-13 Kasım 1944); dönem başı TDV'ye göre 1944-11-12. Üç Vilayet'in 1946-06-27 koalisyon hükûmeti dönemindeki hukuki konumu bu zincirde ayrıca yazılmadı (BEYANLI YAKLAŞIKLIK: Gulca ETR'nin başkenti olarak sürekli yazıldı). · ASYA-ZINCIR-1024"},
     {f:"1949-10-20",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

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

{ ad:"Lhasa", tur:"sehir", lat:29.6520, lon:91.1720, g:2, k:1,kd:[{f:"1642-01-01",t:"1923-10-29",k:1,m:"Lhasa"}], d:[],
  s:[{f:"1281-01-01", t:"1354-01-01", d:"yuan-hanedani"},
     {f:"1354-01-01", t:"1642-01-01", d:"tibet"},
     {f:"1642-01-01", t:"1720-09-24", d:"tibet-ganden-phodrang"},
     {f:"1720-09-24", t:"1912-02-12", d:"qing-hanedani",kaynak:"KUTU-VERI-1015 (0086/H-0006): L. Petech, China and Tibet in the Early XVIIIth Century (2. bs., Leiden: Brill 1972) — archive.org tam metin (https://archive.org/details/china-and-tibet-in-the-early-18th-century-history-of-the-establishment-of-chines), s. 68: 'Galbi's forces reached Lhasa, which they occupied on 23/VIII = September 24th' — eski uç 1720-01-01 yalnız yıldı"},
     {f:"1912-02-12", t:"1951-05-23", d:"tibet-ganden-phodrang"},{f:"1951-05-23",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"Onyedi Madde Antlaşması 1951-05-23 (Origins/Ohio State; Columbia Univ. Tibet-Potomac); PLA Lhasa'ya 1951-09-09"}],
  isg:[{f:"1717-11-30",t:"1720-09-24",d:"cungar",kaynak:"KUTU-VERI-1015 (0086/H-0006): L. Petech, China and Tibet in the Early XVIIIth Century (2. bs., Leiden: Brill 1972) — archive.org tam metin (https://archive.org/details/china-and-tibet-in-the-early-18th-century-history-of-the-establishment-of-chines) — giriş: 'after midnight on the 30th of November 1717 the Dsungars attacked Lhasa on all sides' (şehir aynı gece düştü, Lajang Khan öldürüldü, kukla hükûmet sTag-rtse-pa) · çıkış: s. 68 Qing ordusunun 24 Eylül 1720 girişi. Yalnız LHASA için yazıldı: Petech Şigatse'nin Pançen tarafından savunulduğunu, Cungar baskınının geri püskürtüldüğünü aktarır ⇒ işgal Şigatse/Gyantse'ye TAŞINMADI"}] },

// Şigatse — Tsangpa hânedanının başkenti (1565-1642) ve Pançen Lama'nın
// makamı Taşilhunpo'nun şehri.
{ ad:"Şigatse", tur:"sehir", lat:29.2680, lon:88.8810, g:1, k:1,kd:[{f:"1354-01-01",t:"1642-01-01",k:1,m:"Şigatse"}], d:[],
  s:[{f:"1281-01-01", t:"1354-01-01", d:"yuan-hanedani"},
     {f:"1354-01-01", t:"1642-01-01", d:"tibet"},
     {f:"1642-01-01", t:"1720-01-01", d:"tibet-ganden-phodrang"},
     {f:"1720-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1951-05-23", d:"tibet-ganden-phodrang"},{f:"1951-05-23",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"Onyedi Madde Antlaşması 1951-05-23 (Origins/Ohio State; Columbia Univ. Tibet-Potomac); PLA Lhasa'ya 1951-09-09"}] },

// Gyantse — 1904 İngiliz seferinin en kanlı çarpışmasının yeri; Şigatse'ye
// 70 km.
{ ad:"Gyantse", tur:"kale", lat:28.9500, lon:89.6020, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1354-01-01", d:"yuan-hanedani"},
     {f:"1354-01-01", t:"1642-01-01", d:"tibet"},
     {f:"1642-01-01", t:"1720-01-01", d:"tibet-ganden-phodrang"},
     {f:"1720-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1951-05-23", d:"tibet-ganden-phodrang"},{f:"1951-05-23",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"Onyedi Madde Antlaşması 1951-05-23 (Origins/Ohio State; Columbia Univ. Tibet-Potomac); PLA Lhasa'ya 1951-09-09"}] },

// Çamdo — doğu Tibet (Kham); 1910'da Qing ordusu Zhao Erfeng ile bölgeyi
// doğrudan idareye almaya çalıştı, 1912'den sonra Tibet geri aldı.
{ ad:"Çamdo (Chamdo)", tur:"sehir", lat:31.1400, lon:97.1780, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1354-01-01", d:"yuan-hanedani"},
     {f:"1354-01-01", t:"1642-01-01", d:"tibet"},
     {f:"1642-01-01", t:"1910-02-12", d:"tibet-ganden-phodrang"},
     {f:"1910-02-12", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1918-08-19", d:"cin-cumhuriyeti"},
     {f:"1918-08-19", t:"1951-05-23", d:"tibet-ganden-phodrang"},{f:"1951-05-23",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"Onyedi Madde Antlaşması 1951-05-23 (Origins/Ohio State; Columbia Univ. Tibet-Potomac); PLA Lhasa'ya 1951-09-09"}] },

// ===== 5e. Çin: yoğunluk noktaları =====
// Bölüm 3-5'teki nokta ağı MIMARI.md §5'in "seyrek bölge 300 km" ölçütünü
// Çin'in iç kesimlerinde ve Mançurya'da tutmuyordu; aşağıdaki sekiz nokta
// o boşlukları kapatmak için eklendi. Zincirleri bölgelerinin standardıdır.

// Şanhayguan — Çin Seddi'nin denize indiği geçit. Ming generali Wu Sangui
// 27 Mayıs 1644'te kapıyı Qing ordusuna burada açtı; Ming'in sonunu getiren
// tek karar budur.
{ ad:"Şanhayguan", tur:"kale", lat:40.0100, lon:119.7530, g:1, k:4, d:[],
  kur:"1381-01-01",
  s:[{f:"1381-01-01", t:"1644-05-27", d:"ming-hanedani"},
     {f:"1644-05-27", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Tongguan — Sarı Irmak ile Wei'nin kavşağındaki geçit; Xi'an ovasının
// kilidi. Qing 1645 Ocak'ında burayı aşarak Şun devletini bitirdi.
{ ad:"Tongguan", tur:"kale", lat:34.5160, lon:110.2630, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1643-10-11", d:"ming-hanedani"},
     {f:"1643-10-11", t:"1645-01-18", d:"dashun"},
     {f:"1645-01-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Yan'an", tur:"sehir", lat:36.5850, lon:109.4900, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1643-10-11", d:"ming-hanedani"},
     {f:"1643-10-11", t:"1645-01-18", d:"dashun"},
     {f:"1645-01-18", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Wuhu", tur:"liman", lat:31.3260, lon:118.3760, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-01-23", d:"yuan-hanedani"},
     {f:"1368-01-23", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1645-06-08", d:"guney-ming"},
     {f:"1645-06-08", t:"1853-03-19", d:"qing-hanedani"},
     {f:"1853-03-19", t:"1864-07-19", d:"taiping"},
     {f:"1864-07-19", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Şaoguan", tur:"sehir", lat:24.8010, lon:113.5910, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

{ ad:"Leizhou", tur:"liman", lat:20.9140, lon:110.0960, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"},
     {f:"1368-04-01", t:"1644-04-25", d:"ming-hanedani"},
     {f:"1644-04-25", t:"1650-11-24", d:"guney-ming"},
     {f:"1650-11-24", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Baotou — Sarı Irmak'ın kuzey dirseği; İç Moğolistan'ın batı ucu.
{ ad:"Baotou", tur:"sehir", lat:40.6570, lon:109.8400, g:0, k:3, d:[],
  kur:"1809-01-01",
  s:[{f:"1809-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

// Qiqihar — kuzey Mançurya'nın Qing askerî valiliği (1691'den itibaren);
// bu nokta olmadan Harbin ile Aigun arası 400 km açık kalıyordu.
{ ad:"Qiqihar", tur:"kale", lat:47.3540, lon:123.9180, g:0, k:4, d:[],
  kur:"1691-01-01",
  s:[{f:"1691-01-01", t:"1912-02-12", d:"qing-hanedani"},
     {f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"},{f:"1949-10-01",t:"2000-12-31",d:"cin-halk-cumhuriyeti",kaynak:"ilan 1949-10-01, tsv kunye"}] },

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
//   1333-07-04 → 1336-12-10  kenmu           (Go-Daigo'nun restorasyonu)
//   1336-12-10 → 1573-01-01  muromachi       (Ashikaga şogunluğu)
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
{ ad:"Kyoto", tur:"sehir", lat:35.0110, lon:135.7680, g:2, k:1,kd:[{f:"1333-07-04",t:"1573-09-01",k:1,m:"Kyoto"}], d:[],
  s:[{f:"0794-11-18",t:"1185-12-22",d:"heian-japonya",kesinlik:"gun",kaynak:"Nihon Kōki j.3, Enryaku 13 (794) (zh.wikisource.org/wiki/日本後紀/卷第三, okundu): 「十月…辛酉。車駕遷于新京。」 · 「丁丑。詔。…宜改山背国、為山城国。又子来之民、謳歌之輩、異口同辞、号曰平安京。」 · Heian-kyō şehri bu günle kuruldu (kur = 0794-11-18). · DOGU-500-1281"},{f:"1185-12-22",t:"1281-01-01",d:"kamakura",kesinlik:"gun",kaynak:"Azuma Kagami j.5, Bunji 1 (1185) (zh.wikisource.org/wiki/吾妻鏡/卷005, okundu): 「十一月大廿八日丁未。補任諸國平均守護地頭。不論權門勢家庄公。」 · 「十一月大廿九日戊申。北條殿所被申之諸國守護地頭兵粮米事。早任申請可有御沙汰之由。被仰下之間。師中納言被傳勅於北條殿云々。」 · BEYANLI YAKLAŞIKLIK: Heian sarayı 1868'e kadar sürer; atlas modeli 1185-12-22'den sonrasını «kamakura» polity'sine yazar (KOJA_REF.json, KOJA_RAPOR2 madde 2). Kyoto'nun fiilî şogunluk denetimine geçişi Jōkyū (1221) sonrasıdır; bu oturumda açılmadı. · DOGU-500-1281"},{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Edo (Tokyo) — Tokugawa Ieyasu 1590'da Kantō'ya nakledildiğinde küçük bir
// kaleydi; 1603'te şogunluk merkezi oldu ve dünyanın en büyük şehirlerinden
// birine dönüştü. Görev tanımının "sahneye çıkan yerleşim" örneğidir:
// kur:"1457-01-01" — Ōta Dōkan'ın kaleyi kurduğu yıl.
{ ad:"Edo (Tokyo)", tur:"sehir", lat:35.6900, lon:139.6920, g:2, k:1,kd:[{f:"1603-03-24",t:"1923-10-29",k:1,m:"Edo (Tokyo)"}], d:[],
  kur:"1457-01-01",
  s:[{f:"1457-01-01", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Osaka — Toyotomi Hideyoshi 1583'te kaleyi kurdu; Tokugawa 4 Haziran
// 1615'te Osaka kuşatmasıyla Toyotomi soyunu bitirdi. Bu yüzden Osaka'nın
// "azuchi-momoyama" penceresi genel zincirden 12 yıl UZUNDUR.
{ ad:"Osaka", tur:"liman", lat:34.6940, lon:135.5020, g:2, k:2,kd:[{f:"1568-01-01",t:"1615-06-04",k:1,m:"Osaka"}], d:[],
  s:[{f:"0646-01-01",t:"0710-04-13",d:"yamato",kesinlik:"gun",kaynak:"SAHİP BEYANLI: yamato (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Nihon Shoki j.25, Taika 1 (645) (zh.wikisource.org/wiki/日本書紀/卷第廿五, okundu): 「冬十二月乙未朔癸卯，天皇遷都難波長柄豐碕。」 · Naniwa Nagara Toyosaki Sarayı ilk tarihli saray tanığı; 646 öncesi Naniwa limanı (kuruluş efsanevî Nintoku dönemi) bu oturumda tarihli kaynakla bulunmadı → önce dilim yok. Özdeşleme: Naniwa = bugünkü Osaka (genel kabul; kazı koordinatı açılmadı). · DOGU-500-1281"},{f:"0710-04-13",t:"0794-11-18",d:"nara-japonya",kesinlik:"gun",kaynak:"SAHİP BEYANLI: nara-japonya (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Shoku Nihongi j.5, Wadō 3 (710) (zh.wikisource.org/wiki/續日本紀/卷第五, okundu): 「三月…辛酉。始遷都于平城。以左大臣正二位石上朝臣麻呂爲留守。」 · BEYAN: devir günü saray/hükümdar sürekliliği içindeki atlas dönem adı değişimidir (aynı hanedan/saray; yeni fetih değil). · DOGU-500-1281"},{f:"0794-11-18",t:"1185-12-22",d:"heian-japonya",kesinlik:"gun",kaynak:"Nihon Kōki j.3, Enryaku 13 (794) (zh.wikisource.org/wiki/日本後紀/卷第三, okundu): 「十月…辛酉。車駕遷于新京。」 · 「丁丑。詔。…宜改山背国、為山城国。又子来之民、謳歌之輩、異口同辞、号曰平安京。」 · ABİ MERKEZ: Kyoto — başkent taşınması sonrası aynı saray devleti · BEYAN: devir günü saray/hükümdar sürekliliği içindeki atlas dönem adı değişimidir (aynı hanedan/saray; yeni fetih değil). · DOGU-500-1281"},{f:"1185-12-22",t:"1281-01-01",d:"kamakura",kesinlik:"gun",kaynak:"Azuma Kagami j.5, Bunji 1 (1185) (zh.wikisource.org/wiki/吾妻鏡/卷005, okundu): 「十一月大廿八日丁未。補任諸國平均守護地頭。不論權門勢家庄公。」 · 「十一月大廿九日戊申。北條殿所被申之諸國守護地頭兵粮米事。早任申請可有御沙汰之由。被仰下之間。師中納言被傳勅於北條殿云々。」 · BEYANLI YAKLAŞIKLIK: Heian sarayı 1868'e kadar sürer; atlas modeli 1185-12-22'den sonrasını «kamakura» polity'sine yazar (KOJA_REF.json, KOJA_RAPOR2 madde 2). Kyoto'nun fiilî şogunluk denetimine geçişi Jōkyū (1221) sonrasıdır; bu oturumda açılmadı. · DOGU-500-1281"},{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1615-06-04", d:"azuchi-momoyama"},
     {f:"1615-06-04", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

{ ad:"Nara", tur:"sehir", lat:34.6850, lon:135.8050, g:1, k:3, d:[],
  s:[{f:"0710-04-13",t:"0794-11-18",d:"nara-japonya",kesinlik:"gun",kaynak:"SAHİP BEYANLI: nara-japonya (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Shoku Nihongi j.5, Wadō 3 (710) (zh.wikisource.org/wiki/續日本紀/卷第五, okundu): 「三月…辛酉。始遷都于平城。以左大臣正二位石上朝臣麻呂爲留守。」 · Heijō-kyō şehri bu günle kuruldu (kur = 0710-04-13 «kuruluş = saray taşınması»; öncesinde Nara havzasında Asuka bölgesi başka yerleşimdir). · DOGU-500-1281"},{f:"0794-11-18",t:"1185-12-22",d:"heian-japonya",kesinlik:"gun",kaynak:"Nihon Kōki j.3, Enryaku 13 (794) (zh.wikisource.org/wiki/日本後紀/卷第三, okundu): 「十月…辛酉。車駕遷于新京。」 · 「丁丑。詔。…宜改山背国、為山城国。又子来之民、謳歌之輩、異口同辞、号曰平安京。」 · ABİ MERKEZ: Kyoto — saray 794'te Heian-kyō'ya taşındı, Nara eski başkent olarak aynı saray devleti içinde kaldı (kaynak yalnız taşınmayı yazar; Nara'nın sonraki sahibi çıkarımdır) · BEYAN: devir günü saray/hükümdar sürekliliği içindeki atlas dönem adı değişimidir (aynı hanedan/saray; yeni fetih değil). · DOGU-500-1281"},{f:"1185-12-22",t:"1281-01-01",d:"kamakura",kesinlik:"gun",kaynak:"Azuma Kagami j.5, Bunji 1 (1185) (zh.wikisource.org/wiki/吾妻鏡/卷005, okundu): 「十一月大廿八日丁未。補任諸國平均守護地頭。不論權門勢家庄公。」 · 「十一月大廿九日戊申。北條殿所被申之諸國守護地頭兵粮米事。早任申請可有御沙汰之由。被仰下之間。師中納言被傳勅於北條殿云々。」 · BEYANLI YAKLAŞIKLIK: Heian sarayı 1868'e kadar sürer; atlas modeli 1185-12-22'den sonrasını «kamakura» polity'sine yazar (KOJA_REF.json, KOJA_RAPOR2 madde 2). Kyoto'nun fiilî şogunluk denetimine geçişi Jōkyū (1221) sonrasıdır; bu oturumda açılmadı. · DOGU-500-1281"},{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Sakai — Muromachi ve Sengoku çağının en zengin liman şehri; tüccar
// meclisiyle yönetilen fiilî bir serbest şehirdi, Nobunaga 1569'da
// vergiye bağladı. Osaka'ya 15 km.
{ ad:"Sakai", tur:"liman", lat:34.5730, lon:135.4830, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// ===== 6b. Kantō ve Tōkai =====

// Kamakura — şogunluğun 1185-1333 arası merkezi; Nitta Yoshisada
// 4 Temmuz 1333'te aldı ve Hōjō naipliği sona erdi.
{ ad:"Kamakura", tur:"sehir", lat:35.3190, lon:139.5500, g:1, k:2,kd:[{f:"1281-01-01",t:"1333-07-04",k:1,m:"Kamakura"}], d:[],
  s:[{f:"1000-01-01",t:"1185-12-22",d:"heian-japonya",kesinlik:{f:"belirsiz",t:"yil"},kaynak:"«794-1185 yılları arasında ise yeni başşehir yapılan Heian’dan (Kyoto) adını alan dönem başladı» «当時御居所非指要害地。又非御曩跡。速可令出相模国鎌倉給。» TDV japonya (JAPONYA maddesi): Heian dönemi 794-1185. Azuma Kagami 治承四年 (1180): Kamakura 「相模国」 (Sagami eyaleti, saray eyalet sistemi) içinde anılır; Minamoto no Yoritomo oraya 1180te girmeden önce şehir Heian devleti eyaleti sayıldı (ÇIKARIM, belirsiz; 1180-1185 arası fiilî Minamoto hâkimiyeti künye sınırı gereği bu dilime dahil edildi). f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1185-12-22",t:"1281-01-01",d:"kamakura",kesinlik:"yil",kaynak:"«1192’de Minamoto Yorimoto kendini şogun ilân ettirerek Kamakura’da askerî hükümetini kurdu» «治承四年「庚子」十月小十五日甲午。武衛始入御鎌倉御亭。» TDV japonya: şogunluk hükümeti Kamakura’da 1192’de kuruldu (TDV’deki 「Yorimoto」 yazımı Yoritomo’dur); Azuma Kagami 治承四年十月十五日 (Japon ay-güneş takvimi, 1180): Yoritomo Kamakura’daki konağına ilk girdi (Jülyen çevirisi yapılmadı). f: KÜNYE ÖMRÜ SINIRI: devletler.js heian-japonya t = kamakura f = 1185-01-01 (atlas künyesi, DAYANAK DEĞİL). Kaynaklarda Kamakura’da Minamoto hâkimiyeti 1180 (Azuma Kagami), kurumsal şogunluk 1192 (TDV japonya) — künye sınırı bu iki tarihin arasındadır; gün kaynaklı değil. t = 1281-01-01: atlastaki mevcut ilk s: döneminin f günüdür (ön ek bitişikliği; atlas kaydı DAYANAK DEĞİL, yalnız bitişiklik). · VERI-MS1-1281"},{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Odawara — Sengoku çağının en güçlü kalelerinden; Hideyoshi'nin 1590
// kuşatması Japonya'nın birleşmesini tamamladı.
{ ad:"Odawara", tur:"kale", lat:35.2640, lon:139.1520, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Sunpu (Şizuoka) — Ieyasu'nun çocukluğunun ve emekliliğinin şehri;
// 1605-1616 arasında fiilî iktidar merkezi (ōgosho).
{ ad:"Sunpu (Şizuoka)", tur:"sehir", lat:34.9760, lon:138.3830, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Nagoya — Tokugawa Ieyasu 1610'da kaleyi kurdurdu (kur:); üç Tokugawa
// yan hânedanından Owari kolunun merkezi.
{ ad:"Nagoya", tur:"sehir", lat:35.1810, lon:136.9070, g:1, k:3, d:[],
  kur:"1610-01-01",
  s:[{f:"1610-01-01", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Gifu — Nobunaga'nın 1567'de aldığı ve "tenka fubu" mührünü kullanmaya
// başladığı şehir; birleşme hareketinin çıkış noktasıdır. Nagoya'ya 30 km.
{ ad:"Gifu", tur:"kale", lat:35.4230, lon:136.7600, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1567-09-01", d:"muromachi"},
     {f:"1567-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// ===== 6c. Japon Denizi kıyısı ve Hokuriku =====

{ ad:"Kanazawa", tur:"sehir", lat:36.5620, lon:136.6490, g:1, k:3, d:[],
  kur:"1546-01-01",
  s:[{f:"1546-01-01", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

{ ad:"Fukui", tur:"sehir", lat:36.0640, lon:136.2200, g:0, k:3, d:[],
  kur:"1575-01-01",
  s:[{f:"1575-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

{ ad:"Niigata", tur:"liman", lat:37.9160, lon:139.0360, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

{ ad:"Matsue", tur:"sehir", lat:35.4680, lon:133.0490, g:0, k:3, d:[],
  kur:"1607-01-01",
  s:[{f:"1607-01-01", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// ===== 6d. Batı Honshu ve Şikoku =====

{ ad:"Himeji", tur:"kale", lat:34.8150, lon:134.6860, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

{ ad:"Okayama", tur:"sehir", lat:34.6550, lon:133.9190, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Hiroşima — Mōri Terumoto 1589'da kaleyi kurdu (kur:).
{ ad:"Hiroşima", tur:"liman", lat:34.3850, lon:132.4550, g:1, k:3, d:[],
  kur:"1589-01-01",
  s:[{f:"1589-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Yamaguchi — Ōuchi hânedanının merkezi; XV-XVI. yüzyılda Çin ve Kore
// ticaretini elinde tutan "batının Kyoto"su. Francis Xavier 1551'de
// buradaydı.
{ ad:"Yamaguchi", tur:"sehir", lat:34.1860, lon:131.4710, g:0, k:3, d:[],
  kur:"1360-01-01",
  s:[{f:"1360-01-01", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

{ ad:"Matsuyama", tur:"sehir", lat:33.8390, lon:132.7660, g:0, k:3, d:[],
  kur:"1602-01-01",
  s:[{f:"1602-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

{ ad:"Kōchi", tur:"liman", lat:33.5600, lon:133.5310, g:0, k:1, d:[],
  kur:"1601-01-01",
  s:[{f:"1601-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// ===== 6e. Kyūşū =====

// Hakata (Fukuoka) — 1274 ve 1281 Moğol istilâlarının çıkarma noktası;
// 15 Ağustos 1281'de ikinci donanma burada tayfunla yok oldu. Ortaçağ
// Japonya'sının Çin ve Kore'ye açılan kapısıdır.
{ ad:"Hakata (Fukuoka)", tur:"liman", lat:33.5900, lon:130.4020, g:1, k:3, d:[],
  s:[{f:"0536-06-05",t:"0710-04-13",d:"yamato",kesinlik:"gun",kaynak:"SAHİP BEYANLI: yamato (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Nihon Shoki j.18, Senka 1 (536) (zh.wikisource.org/wiki/日本書紀/卷第十八, okundu): 「夏五月辛丑朔。詔曰。…夫筑紫國者遐迩之所朝届。去來之所關門。…修造官家那津之口。」 …「是年也太歳丙辰。」 · Nanotsu = Hakata limanı özdeşleştirmesi yaygın kabuldür, akademik kaynak açılmadı. 528'de Iwai yenilgisiyle (Nihon Shoki j.17) Chikushi Yamato'ya bağlandı; 500-536 arası Hakata Körfezi sahibi bu oturumda tarihli tanıkla bulunmadı → önce dilim yok. · DOGU-500-1281"},{f:"0710-04-13",t:"0794-11-18",d:"nara-japonya",kesinlik:"gun",kaynak:"SAHİP BEYANLI: nara-japonya (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Shoku Nihongi j.5, Wadō 3 (710) (zh.wikisource.org/wiki/續日本紀/卷第五, okundu): 「三月…辛酉。始遷都于平城。以左大臣正二位石上朝臣麻呂爲留守。」 · BEYAN: devir günü saray/hükümdar sürekliliği içindeki atlas dönem adı değişimidir (aynı hanedan/saray; yeni fetih değil). · DOGU-500-1281"},{f:"0794-11-18",t:"1185-12-22",d:"heian-japonya",kesinlik:"gun",kaynak:"Nihon Kōki j.3, Enryaku 13 (794) (zh.wikisource.org/wiki/日本後紀/卷第三, okundu): 「十月…辛酉。車駕遷于新京。」 · 「丁丑。詔。…宜改山背国、為山城国。又子来之民、謳歌之輩、異口同辞、号曰平安京。」 · ABİ MERKEZ: Kyoto — başkent taşınması sonrası aynı saray devleti · BEYAN: devir günü saray/hükümdar sürekliliği içindeki atlas dönem adı değişimidir (aynı hanedan/saray; yeni fetih değil). · DOGU-500-1281"},{f:"1185-12-22",t:"1281-01-01",d:"kamakura",kesinlik:"gun",kaynak:"Azuma Kagami j.5, Bunji 1 (1185) (zh.wikisource.org/wiki/吾妻鏡/卷005, okundu): 「十一月大廿八日丁未。補任諸國平均守護地頭。不論權門勢家庄公。」 · 「十一月大廿九日戊申。北條殿所被申之諸國守護地頭兵粮米事。早任申請可有御沙汰之由。被仰下之間。師中納言被傳勅於北條殿云々。」 · BEYANLI YAKLAŞIKLIK: Heian sarayı 1868'e kadar sürer; atlas modeli 1185-12-22'den sonrasını «kamakura» polity'sine yazar (KOJA_REF.json, KOJA_RAPOR2 madde 2). Kyoto'nun fiilî şogunluk denetimine geçişi Jōkyū (1221) sonrasıdır; bu oturumda açılmadı. · DOGU-500-1281"},{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Nagazaki — 1571'de Portekiz ticareti için liman olarak açıldı (kur:);
// 1580-1587 arasında fiilen Cizvitlere devredildi, Hideyoshi 1587'de geri
// aldı. 1641-1854 arasında Dejima adacığı, Japonya'nın dünyaya açılan TEK
// kapısıydı — ama Dejima kira ve gözetim altındaki bir ticaret adasıdır,
// egemenlik devri değildir; işgal/imtiyaz kuralı gereği HOLLANDA PENCERESİ
// AÇILMADI. Cizvit dönemi ise fiilî idare devri olduğu için pencere aldı.
{ ad:"Nagazaki", tur:"liman", lat:32.7500, lon:129.8780, g:2, k:3, d:[],
  kur:"1571-01-01",
  s:[{f:"1571-01-01", t:"1580-06-09", d:"azuchi-momoyama"},
     {f:"1580-06-09", t:"1587-07-24", d:"portekiz", enklav:true},
     {f:"1587-07-24", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

{ ad:"Kumamoto", tur:"kale", lat:32.8030, lon:130.7080, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Funai (Ōita) — Ōtomo Sōrin'in Hristiyan daimyō merkezi; Portekiz
// ticaretinin Kyūşū'daki ilk büyük limanı.
{ ad:"Funai (Ōita)", tur:"liman", lat:33.2380, lon:131.6130, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Kagoşima — Satsuma'nın Shimazu hânedanı; 1609'da Ryukyu'yu tâbi kıldı,
// 1868 Meiji restorasyonunun iki motorundan biridir.
{ ad:"Kagoşima", tur:"liman", lat:31.5960, lon:130.5570, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Tsuşima (İzuhara) — Japonya ile Kore arasındaki tek geçit; Sō hânedanı
// iki devletin de tanıdığı aracıydı ve Kore ticareti tekelini elinde
// tuttu. 1274 Moğol istilâsının ilk hedefidir.
{ ad:"Tsuşima (İzuhara)", tur:"liman", lat:34.2030, lon:129.2890, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// ===== 6f. Kuzey Honshu ve Ezo (Hokkaido) =====

// Sendai — Date Masamune 1600'de kurdu (kur:).
{ ad:"Sendai", tur:"sehir", lat:38.2680, lon:140.8700, g:1, k:3, d:[],
  kur:"1600-01-01",
  s:[{f:"1600-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

{ ad:"Aizu-Wakamatsu", tur:"kale", lat:37.4950, lon:139.9300, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1333-07-04", d:"kamakura"},
     {f:"1333-07-04", t:"1336-12-10", d:"kenmu"},
     {f:"1336-12-10", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

{ ad:"Morioka", tur:"sehir", lat:39.7020, lon:141.1550, g:0, k:3, d:[],
  kur:"1597-01-01",
  s:[{f:"1597-01-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

{ ad:"Hirosaki", tur:"kale", lat:40.6030, lon:140.4640, g:0, k:4, d:[],
  kur:"1611-01-01",
  s:[{f:"1611-01-01", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

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
  kasitli_bosluk:true,bos:"devletsiz", neden:"Hokkaido/Ezo 1281-1550 arasinda hicbir devletin idari topragi degildi; anakara sogunluklari (Kamakura-Kenmu-Muromachi) Honsu'yla sinirliydi ve Matsumae klaninin buradaki varligi ancak 1590'larda basliyor. `ainu` diye boyamak var olmayan bir DEVLET uydurmakti (VERI DEVLET olcumu)",
  s:[{f:"1550-01-01", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1869-01-27", d:"meiji-japonya"},
     {f:"1869-01-27", t:"1869-06-27", d:"ezo-cumhuriyeti", kesinlik:"gun", kaynak:"Ezo Cumhuriyeti künyesi (devletler.js ezo-cumhuriyeti; kaynak: 山川 日本史小辞典 «箱館戦争», kotobank; Britannica Japan «五稜郭の戦い»): cumhuriyet 1869-01-27 ilan, 1869-06-27 Goryōkaku teslimi. KORE-JAPONYA 2. tur: dilim künye f/t'sine bağlandı."},
     {f:"1869-06-27", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Hakodate — 1854 Kanagawa Antlaşması'yla yabancı gemilere açılan iki
// limandan biri; Matsumae'ye 55 km.
{ ad:"Hakodate", tur:"liman", lat:41.7690, lon:140.7290, g:1, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"Hokkaido/Ezo 1281-1550 arasinda hicbir devletin idari topragi degildi; anakara sogunluklari (Kamakura-Kenmu-Muromachi) Honsu'yla sinirliydi ve Matsumae klaninin buradaki varligi ancak 1590'larda basliyor. `ainu` diye boyamak var olmayan bir DEVLET uydurmakti (VERI DEVLET olcumu)",
  s:[{f:"1550-01-01", t:"1573-09-01", d:"muromachi"},
     {f:"1573-09-01", t:"1603-03-24", d:"azuchi-momoyama"},
     {f:"1603-03-24", t:"1868-01-03", d:"edo-bakufu"},
     {f:"1868-01-03", t:"1869-01-27", d:"meiji-japonya"},
     {f:"1869-01-27", t:"1869-06-27", d:"ezo-cumhuriyeti", kesinlik:"gun", kaynak:"Ezo Cumhuriyeti künyesi (devletler.js ezo-cumhuriyeti; kaynak: 山川 日本史小辞典 «箱館戦争», kotobank; Britannica Japan «五稜郭の戦い»): cumhuriyet 1869-01-27 ilan, 1869-06-27 Goryōkaku teslimi. KORE-JAPONYA 2. tur: dilim künye f/t'sine bağlandı."},
     {f:"1869-06-27", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// Sapporo — Kaitakushi 1869'da kurdu (kur:); Hokkaido'nun iç kesiminin
// ilk Japon şehridir. 1869 öncesi boşluk KASITLIDIR ve komşu Ainu
// coğrafyasını Matsumae noktası taşır.
{ ad:"Sapporo", tur:"sehir", lat:43.0620, lon:141.3540, g:1, k:3, d:[],
  kur:"1869-01-01",
  s:[{f:"1869-01-01", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// ===== 6g. Ryukyu =====
//
// Shō Hashi 1429'da üç prensliği birleştirdi. Satsuma 1609'da işgal etti
// ama KRAL TAHTTA KALDI ve krallık hem Edo'ya hem Pekin'e vergi ödemeye
// devam etti; dosya kuralı gereği kimlik değişmedi. Japonya 4 Nisan
// 1879'da krallığı kaldırıp Okinawa vilâyetini kurdu.
{ ad:"Şuri (Naha)", tur:"sehir", lat:26.2170, lon:127.7190, g:1, k:1,kd:[{f:"1429-01-01",t:"1879-03-27",k:1,m:"Şuri (Naha)"}], d:[],
  s:[{f:"1281-01-01", t:"1322-01-01", d:"ryukyu-shunten-eiso", kesinlik:"yil", kaynak:"ABİ MERKEZ: Urasoe Gusuku (Chuzan merkezi) — zincir Urasoe'den devralındı (Chūzan Seikan 1650, ja.wikisource.org/wiki/琉球國中山世鑑/卷一-二, okundu). BEYANLI YAKLAŞIKLIK: Şuri'nin 1322 öncesi sahibi kaynakta yer-özgü verilmez."},
     {f:"1322-01-01", t:"1429-01-01", d:"sanzan", kesinlik:"yil", kaynak:"ABİ MERKEZ: Urasoe Gusuku (Chuzan merkezi) — zincir Urasoe'den devralındı (Chuzan Sanzan dönemi). BEYANLI YAKLAŞIKLIK: Şuri'nin Chuzan başkenti olması 1406 öncesi yer-özgü tanıkla gösterilmedi."},
     {f:"1429-01-01", t:"1879-03-27", d:"ryukyu"},
     {f:"1879-03-27", t:"1947-05-03", d:"meiji-japonya"},{f:"1947-05-03",t:"2000-12-31",d:"japonya-devleti",kaynak:"Britannica Japan"}] },

// ###########################################################################
// BÖLÜM 7 — KORE
// ###########################################################################
//
// STANDART ZİNCİR:
//   1281 → 1392-08-05   goryeo   (Yi Seonggye'nin tahta çıkışı)
//   1392-08-05 → 1910-08-29  joseon
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

{ ad:"Kaesong", tur:"sehir", lat:37.9720, lon:126.5540, g:1, k:2,kd:[{f:"1281-01-01",t:"1392-08-05",k:1,m:"Kaesong"}], d:[],
  s:[{f:"0500-01-01",t:"0668-10-22",d:"goguryeo",kesinlik:"yil",kaynak:"SAHİP BEYANLI: goguryeo (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Goryeosa (Jeong Inji vd.) 卷五十六 (zh.wikisource.org/wiki/高麗史/卷五十六, okundu): «王京開城府本高句麗扶蘇岬。新羅改松嶽郡。» | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; MS 500 öncesinden süren sahiplik): Kaesong (Bubuyeo-gap/Songak) Goguryeo kökenli; ufuk işareti 500. · DOGU-500-1281"},{f:"0668-10-22",t:"0676-02-24",d:"tang",kesinlik:"gun",kaynak:"SAHİP BEYANLI: tang (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Jiu Tangshu 卷5 (zh.wikisource.org/wiki/舊唐書/卷5, okundu): «九月癸巳，司空、英國公勣破高麗，拔平壤城，擒其王高藏及其大臣男建等以歸。境內盡降，其城一百七十，戶六十九萬七千，以其地為安東都護府，分置四十二州。» · Sima Guang, Zizhi tongjian 卷201 (zh.wikisource.org/wiki/資治通鑑/卷201, okundu): «九月，癸巳，李勣拔平壤。» · Sima Guang, Zizhi tongjian 卷201 (zh.wikisource.org/wiki/資治通鑑/卷201, okundu): «置安東都護府於平壤以統之。» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Pyongyang): Jiu Tangshu «以其地為安東都護府»: Goguryeo'nun bütün toprağı (170 kale) Andong Genel Valiliğine bağlandı; Songak'ın adı geçmez. · DOGU-500-1281"},{f:"0676-02-24",t:"0694-01-01",d:"__BOSLUK__",kesinlik:"gun",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Songak'ın 676-02-24 (Tang'ın Andong'dan çekilişi) ile 694 (Silla'nın Songak kalesini inşası) arası sahibi (Samguk sagi j.5-8 ve Goryeosa j.56'da bu aralık için Songak'a atıf yok). | geçiş kaydı: Jiu Tangshu 卷5 (zh.wikisource.org/wiki/舊唐書/卷5, okundu): «二月甲戌，移安東都護府於遼東。» · Sima Guang, Zizhi tongjian 卷202 (zh.wikisource.org/wiki/資治通鑑/卷202, okundu): «二月，甲戌，徙安東都護府於遼東故城» · Sima Guang, Zizhi tongjian 卷202 (zh.wikisource.org/wiki/資治通鑑/卷202, okundu): «徙熊津都督府於建安故城» · DOGU-500-1281"},{f:"0694-01-01",t:"0901-01-01",d:"silla",kesinlik:"yil",kaynak:"SAHİP BEYANLI: silla (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷08 (zh.wikisource.org/wiki/三國史記/卷08, okundu): «冬，築松岳、牛岑二城。» · Kim Busik, Samguk sagi 卷35 (zh.wikisource.org/wiki/三國史記/卷35, okundu): «松岳郡，本高句麗扶蘇岬，孝昭王三年築城» · DOGU-500-1281"},{f:"0901-01-01",t:"0918-07-25",d:"taebong",kesinlik:"yil",kaynak:"SAHİP BEYANLI: taebong (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «光化元年戊午春二月，葺松岳城。以我太祖為精騎大監，伐楊州、見州。» · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «天復元年辛酉，善宗自稱王，謂人曰：「徃者新羅請兵於唐，以破高勾麗，故平壤舊都，鞠為茂草。吾必報其讎。」» · Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «世祖時爲松嶽郡沙粲，乾寧三年丙辰，以郡歸于裔，裔大喜，以爲金城太守。» · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «善宗謂松岳郡，漢北名郡，山水竒秀，遂定以為都。» · BEYANLI YAKLAŞIKLIK: Songak 896'da Gung Ye'ye katıldı, 897/898'de başkent oldu (SS50, G1); Taebong künye f 901 olduğundan dilim 901'de başlatıldı. · DOGU-500-1281"},{f:"0918-07-25",t:"1000-01-01",d:"goryeo",kesinlik:"gun",kaynak:"Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «至六月乙卯，騎將洪儒、裴玄慶、申崇謙、卜智謙等密謀，夜詣太祖第，共言推戴之意。太祖固拒不許，夫人柳氏手提甲領被太祖，諸將扶擁而出。令人馳且呼曰：「王公已擧義旗矣！」於是，奔走來赴者，不可勝記，先至宮門，鼓譟以待者，亦萬餘人。裔聞之驚駭曰：「王公得之，吾事已矣！」乃不知所圖，以微服，出自北門亡去，內人淸宮以迎。裔遁于巖谷，信宿飢甚，偸截麥穗而食，尋爲斧壤民所害。» · Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «元年夏六月丙辰，卽位于布政殿，國號高麗，改元天授。» · DOGU-500-1281"},{f:"1000-01-01", t:"1392-08-05", d:"goryeo",kaynak:"[ONCE1281-GERIYE f 1281-01-01 → 1000-01-01] Britannica, «Kaesong» (britannica.com/place/Kaesong; tarayıcıda açıldı ve okundu 18.10.2026): 'One of the oldest cities of Korea, Kaesŏng was the capital of the Koryŏ dynasty (935–1392).' · BEYAN: Britannica başkentliği 935’ten sayar, atlas künyesi 918; 1000 için fark etmez · f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor; edinim günü değil, D210) · ONCE1281-GERIYE"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Britannica Korea"},{f:"1945-09-09",t:"1948-09-09",d:"kuzey-kore-sovyet-idaresi",kaynak:"Sovyet Sivil Idaresi (Library of Congress North Korea Country Study)"},{f:"1948-09-09",t:"2000-12-31",d:"kuzey-kore",kaynak:"KDHC ilani 1948-09-09 (Britannica North Korea)"}] },

// Seul (Hanyang) — 1394'te Joseon'un başkenti oldu; şehir daha eskidir
// (Goryeo'nun "güney başkenti"), bu yüzden kur: YAZILMADI.
{ ad:"Seul (Hanyang)", tur:"sehir", lat:37.5660, lon:126.9780, g:2, k:1,kd:[{f:"1392-08-05",t:"1910-08-29",k:1,m:"Seul (Hanyang)"}], d:[],
  s:[{f:"0500-01-01",t:"0551-01-01",d:"goguryeo",kesinlik:"yil",kaynak:"SAHİP BEYANLI: goguryeo (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷18 (zh.wikisource.org/wiki/三國史記/卷18, okundu): «九月，王帥兵三萬，侵百濟，陷王所都漢城，殺其王扶餘慶，虜男女八千而歸。» | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; MS 500 öncesinden süren sahiplik): Seul Goguryeo'da: Hanseong'un 475'te Goguryeo'ya düşüşü (SS18); ufuk işareti: 500 pencere başı. · DOGU-500-1281"},{f:"0551-01-01",t:"0553-01-01",d:"baekje",kesinlik:"yil",kaynak:"SAHİP BEYANLI: baekje (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Nihon Shoki 卷第十九 (zh.wikisource.org/wiki/日本書紀/卷第十九, okundu): «百濟聖明王親率衆及二國兵〈二國謂新羅。任那也。〉往伐高麗。獲漠城之地。又進軍討平壌。凡六郡之地。遂復故地。» · Goryeosa (Jeong Inji vd.) 卷五十六 (zh.wikisource.org/wiki/高麗史/卷五十六, okundu): «南京留守官楊州本高句麗北漢山郡，百濟近肖古王，取之。二十五年，自南漢山，徙都之。至蓋鹵王二十年，高句麗慈悲王，來圍漢城，蓋鹵出走，爲麗兵所害。» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Hanseong/Han havzası): bu yerin kendi adı kaynakta ayrı geçmez; Han Nehri havzası olayı (Hanseong) bölge sahibini belirler. · DOGU-500-1281"},{f:"0553-01-01",t:"0901-01-01",d:"silla",kesinlik:"yil",kaynak:"SAHİP BEYANLI: silla (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷04 (zh.wikisource.org/wiki/三國史記/卷04, okundu): «秋七月，取百濟東北鄙，置新州，以阿飡武力爲軍主。» · Kim Busik, Samguk sagi 卷26 (zh.wikisource.org/wiki/三國史記/卷26, okundu): «新羅取東北鄙，置新州。» · Nihon Shoki 卷第十九 (zh.wikisource.org/wiki/日本書紀/卷第十九, okundu): «百濟棄漢城與平壤。新羅因此入居漢城。» · Kim Busik, Samguk sagi 卷35 (zh.wikisource.org/wiki/三國史記/卷35, okundu): «漢陽郡，本高句麗北漢山郡（一云平壤），眞興王爲州，置軍主» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Hanseong/Han havzası): bu yerin kendi adı kaynakta ayrı geçmez; Han Nehri havzası olayı (Hanseong) bölge sahibini belirler. · DOGU-500-1281"},{f:"0901-01-01",t:"0918-07-25",d:"taebong",kesinlik:"yil",kaynak:"SAHİP BEYANLI: taebong (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «光化元年戊午春二月，葺松岳城。以我太祖為精騎大監，伐楊州、見州。» · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «天復元年辛酉，善宗自稱王，謂人曰：「徃者新羅請兵於唐，以破高勾麗，故平壤舊都，鞠為茂草。吾必報其讎。」» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Hanseong/Han havzası): bu yerin kendi adı kaynakta ayrı geçmez; Han Nehri havzası olayı (Hanseong) bölge sahibini belirler. · DOGU-500-1281"},{f:"0918-07-25",t:"1281-01-01",d:"goryeo",kesinlik:"gun",kaynak:"Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «至六月乙卯，騎將洪儒、裴玄慶、申崇謙、卜智謙等密謀，夜詣太祖第，共言推戴之意。太祖固拒不許，夫人柳氏手提甲領被太祖，諸將扶擁而出。令人馳且呼曰：「王公已擧義旗矣！」於是，奔走來赴者，不可勝記，先至宮門，鼓譟以待者，亦萬餘人。裔聞之驚駭曰：「王公得之，吾事已矣！」乃不知所圖，以微服，出自北門亡去，內人淸宮以迎。裔遁于巖谷，信宿飢甚，偸截麥穗而食，尋爲斧壤民所害。» · Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «元年夏六月丙辰，卽位于布政殿，國號高麗，改元天授。» · DOGU-500-1281"},{f:"1281-01-01", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Japon teslimi Seul 1945-09-09 (Britannica Korea)"},{f:"1945-09-09",t:"1948-08-15",d:"abd-ordu-askeri-hukumeti-kore",kaynak:"USAMGIK (Office of the Historian)"},{f:"1948-08-15",t:"2000-12-31",d:"guney-kore",kaynak:"Kore Cumhuriyeti ilani 1948-08-15 (Britannica South Korea)"}] },

{ ad:"Pyongyang", tur:"sehir", lat:39.0190, lon:125.7380, g:1, k:3, d:[],
  s:[
     {f:"0500-01-01",t:"0668-10-22",d:"goguryeo",kesinlik:"yil",kaynak:"SAHİP BEYANLI: goguryeo (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Goryeosa (Jeong Inji vd.) 卷五十八 (zh.wikisource.org/wiki/高麗史/卷五十八, okundu): «高句麗長壽王十五年，自國內城，徙都之。» · Kim Busik, Samguk sagi 卷18 (zh.wikisource.org/wiki/三國史記/卷18, okundu): «十五年，移都平壤。» | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; MS 500 öncesinden süren sahiplik): Pyongyang Goguryeo başkenti 427'den; ufuk işareti 500. · DOGU-500-1281"},
     {f:"0668-10-22",t:"0676-02-24",d:"tang",kesinlik:"gun",kaynak:"SAHİP BEYANLI: tang (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Jiu Tangshu 卷5 (zh.wikisource.org/wiki/舊唐書/卷5, okundu): «九月癸巳，司空、英國公勣破高麗，拔平壤城，擒其王高藏及其大臣男建等以歸。境內盡降，其城一百七十，戶六十九萬七千，以其地為安東都護府，分置四十二州。» · Sima Guang, Zizhi tongjian 卷201 (zh.wikisource.org/wiki/資治通鑑/卷201, okundu): «九月，癸巳，李勣拔平壤。» · Sima Guang, Zizhi tongjian 卷201 (zh.wikisource.org/wiki/資治通鑑/卷201, okundu): «置安東都護府於平壤以統之。» | Sima Guang, Zizhi tongjian 卷202 (zh.wikisource.org/wiki/資治通鑑/卷202, okundu), 儀鳳元年: «二月，甲戌，徙安東都護府於遼東故城» (Andong Koruyucu Genel Valiliği Pyongyang'dan Liaodong eski kentine taşındı) | Takvim (ic_not_takvim): 儀鳳元年二月甲戌 → Jülyen 0676-02-24 (Gregoryen 0676-02-27; astronomik ay-güneş takvimi, ±1 gün; cin2/_cal.py). Önceki koja1 dilimi bu şehre 668-918 arası «tang» yazmıştı ama kendi kaynağı (Samguk sagi 50, Goryeosa 58) şehrin terk edildiğini söyler; Tang dilimi 676-02-24'te KISALTILDI. · DOGU-500-1281"},
     {f:"0676-02-24",t:"0918-07-25",d:"__BOSLUK__",kesinlik:"gun",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Pyongyang'ın 676-918 arası sahibi YOK — şehir terk edilmişti: Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «徃者新羅請兵於唐，以破高勾麗，故平壤舊都，鞠為茂草。» (Gung Ye'nin 901 sözü) · Goryeosa 卷五十八 (zh.wikisource.org/wiki/高麗史/卷五十八, okundu): «太祖元年，以平壤荒廢，量徙鹽、白、黃、海、鳳諸州民，以實之，爲大都護府。» | KARAR NOTU: Yerleşim bu dönemde fiilen YOK sayılabilir (CLAUDE.md: yoksa dönemi kırp); ama yama aracı sürekli önek ister, bu yüzden `__BOSLUK__` + beyan olarak yazıldı — motor «delik» çizer, doğru görünüm budur. Emre'ye soru: 676-918 aralığı kırpılsın mı (yerleşim bu aralıkta sahneden çıksın), `__BOSLUK__` mu kalsın? (koja1 RAPOR da aynı soruyu sordu.) Silla'nın 735'te Tang'dan aldığı Paegang (Taedong) güneyi Pyongyang'ı kapsamaz: kaynak okunmadı (atıf; açılmadı). · DOGU-500-1281"},
     {f:"0918-07-25",t:"1000-01-01",d:"goryeo",kesinlik:"gun",kaynak:"Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «至六月乙卯，騎將洪儒、裴玄慶、申崇謙、卜智謙等密謀，夜詣太祖第，共言推戴之意。太祖固拒不許，夫人柳氏手提甲領被太祖，諸將扶擁而出。令人馳且呼曰：「王公已擧義旗矣！」於是，奔走來赴者，不可勝記，先至宮門，鼓譟以待者，亦萬餘人。裔聞之驚駭曰：「王公得之，吾事已矣！」乃不知所圖，以微服，出自北門亡去，內人淸宮以迎。裔遁于巖谷，信宿飢甚，偸截麥穗而食，尋爲斧壤民所害。» · Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «元年夏六月丙辰，卽位于布政殿，國號高麗，改元天授。» · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «徃者新羅請兵於唐，以破高勾麗，故平壤舊都，鞠為茂草。» · Goryeosa (Jeong Inji vd.) 卷五十八 (zh.wikisource.org/wiki/高麗史/卷五十八, okundu): «太祖元年，以平壤荒廢，量徙鹽、白、黃、海、鳳諸州民，以實之，爲大都護府。» · DOGU-500-1281"},
     {f:"1000-01-01",t:"1135-01-19",d:"goryeo",kesinlik:{f:"belirsiz",t:"gun"},kaynak:"«成宗十四年，稱西京留守。穆宗元年，又改鎬京。文宗十六年，復稱西京留守官，置京畿四道» «元宗十年，西北面兵馬使營記官崔坦、三和校尉李延齡等，作亂，殺留守，以西京及諸城，叛附于蒙古» Goryeosa 58 (高麗史/卷五十八 地理志三, 西京留守官平壤府): Pyongyang (西京/西都/鎬京) Goryeo idaresinde kesintisiz; Choe Tan isyanına (元宗十年, 1269) kadar 「西京留守官」 olarak sürer. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},
     {f:"1135-01-19",t:"1136-03-23",d:"daewi-myocheong",kesinlik:{f:"gun",t:"gun"},kaynak:"ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 戊申 (高麗仁宗十三年正月) → Jülyen 1135-01-19 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13); 1582 öncesi gün Jülyen kalır. ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 丁巳 (高麗仁宗十四年二月) → Jülyen 1136-03-23 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13); 1582 öncesi gün Jülyen kalır. Goryeosa (Jeong Inji vd.), juan 16 «Injong 2» (zh.wikisource.org/wiki/高麗史/卷十六, okundu): «正月戊申：妙淸、柳旵等以西京反» (仁宗十三年) ; «二月丁巳：金富軾會諸軍，攻西京，城陷，趙匡自焚死» (仁宗十四年) | BEYANLI YAKLAŞIKLIK: Goryeosa «西京» = Pyongyang; ay sınırı doğrulaması: aynı ayın 辛亥 (01-22), 乙丑 (02-05), 辛未 (02-11) günleri 1. aya sığar. Metin «國號大爲» ifadesini içermez (yalnız «天開» yıl adı,閏月壬戌 詔); Myocheong'un öldürülmesinden (正月) sonra Jo Gwang yönetimi künyede birlikte sayıldı. · ASYA-ZINCIR-1024 (F2)"},
     {f:"1136-03-23",t:"1269-11-26",d:"goryeo",kesinlik:{f:"belirsiz",t:"gun"},kaynak:"«成宗十四年，稱西京留守。穆宗元年，又改鎬京。文宗十六年，復稱西京留守官，置京畿四道» «元宗十年，西北面兵馬使營記官崔坦、三和校尉李延齡等，作亂，殺留守，以西京及諸城，叛附于蒙古» Goryeosa 58 (高麗史/卷五十八 地理志三, 西京留守官平壤府): Pyongyang (西京/西都/鎬京) Goryeo idaresinde kesintisiz; Choe Tan isyanına (元宗十年, 1269) kadar 「西京留守官」 olarak sürer. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},
     {f:"1269-11-26",t:"1281-01-01",d:"yuan-hanedani",kesinlik:{f:"gun",t:"yil"},kaynak:"«十一月癸卯，高麗都統領崔坦等，以林衍作亂，挈西京五十餘城來附» «詔令從四百人來，餘留之西京。詔高麗西京內屬，改東寧府，畫慈悲嶺為界» «蒙古以西京爲東寧府，置官吏，畫慈悲嶺爲界。忠烈王十六年，元歸我西京及諸城，遂復爲西京留守官» Yuanshi 6/7 ve Goryeosa 58: Moğol/Yuan Pyongyang’ı Dongnyeong Prefecture (東寧府) yaptı; Goryeo’ya iade 忠烈王十六年 (1290). f: Gün çevirimi: Yuanshi 6 至元六年十一月癸卯 → Jülyen 1269-11-26 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 元世祖至元6年11月2日; kaynaktaki gan-zhi günü JDN formülüyle hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). Goryeosa 58 aynı olayı 元宗十年 (1269) diye yılla kaydeder (ay-gün vermez); resmî Moğol iç kabulü Yuanshi 7 至元七年正月甲寅 = Jülyen 1270-02-05 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen), tablo etiketi 元世祖至元7年1月14日). t = 1281-01-01: atlastaki mevcut ilk s: döneminin f günüdür (ön ek bitişikliği; atlas kaydı DAYANAK DEĞİL, yalnız bitişiklik). · VERI-MS1-1281"},
     {f:"1281-01-01", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},
     {f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Britannica Korea"},
     {f:"1945-09-09",t:"1948-09-09",d:"kuzey-kore-sovyet-idaresi",kaynak:"Sovyet Sivil Idaresi (Library of Congress North Korea Country Study)"},
     {f:"1948-09-09",t:"2000-12-31",d:"kuzey-kore",kaynak:"KDHC ilani 1948-09-09 (Britannica North Korea)"}] },

// Pusan — İmcin Savaşı'nın çıkarma noktası ve savaş boyunca Japon
// ordusunun ana üssü; 1876 Ganghwa Antlaşması'yla açılan ilk limandır.
{ ad:"Pusan", tur:"liman", lat:35.1800, lon:129.0760, g:1, k:3, d:[],
  s:[{f:"0500-01-01",t:"0936-01-08",d:"silla",kesinlik:"yil",kaynak:"SAHİP BEYANLI: silla (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Goryeosa (Jeong Inji vd.) 卷五十七 (zh.wikisource.org/wiki/高麗史/卷五十七, okundu): «東萊縣本新羅居柒山郡，景德王，改爲東萊郡。» | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; MS 500 öncesinden süren sahiplik): Pusan (Geochilsan-gun/Dongnae) Silla kökenli; ufuk işareti 500. · DOGU-500-1281"},{f:"0936-01-08",t:"1281-01-01",d:"goryeo",kesinlik:"gun",kaynak:"Goryeosa (Jeong Inji vd.) 卷二 (zh.wikisource.org/wiki/高麗史/卷二, okundu): «十二月辛酉，群臣奏曰「天無二日，土無二王，一國二君，民何以堪？願聽羅王之請。」壬申，御天德殿，會百僚曰：「朕與新羅，歃血同盟，庶幾兩國永好，各保社稷。今羅王固請稱臣，卿等亦以爲可，朕心雖愧，衆意難違。」乃受羅王庭見之禮，群臣稱賀，聲動宮掖。於是，拜金傅爲政丞，位太子上，歲給祿千碩，創神鸞宮賜之。其從者並收錄，優賜田祿。除新羅國爲慶州，仍賜爲食邑。» · Goryeosa (Jeong Inji vd.) 卷五十七 (zh.wikisource.org/wiki/高麗史/卷五十七, okundu): «太祖十八年，敬順王金傅來降，國除爲慶州。» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Gyeongju): Silla'nın çöküşünde (936-01-08) Silla ülkesinin tamamı Goryeo'ya geçti (Goryeosa: «除新羅國爲慶州»); bu yerin kendi adı o günkü kayıtta geçmez. · DOGU-500-1281"},{f:"1281-01-01", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1592-05-23", d:"joseon"},
     {f:"1592-05-23", t:"1598-11-24", d:"azuchi-momoyama"},
     {f:"1598-11-24", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Japon teslimi Seul 1945-09-09 (Britannica Korea)"},{f:"1945-09-09",t:"1948-08-15",d:"abd-ordu-askeri-hukumeti-kore",kaynak:"USAMGIK (Office of the Historian)"},{f:"1948-08-15",t:"2000-12-31",d:"guney-kore",kaynak:"Kore Cumhuriyeti ilani 1948-08-15 (Britannica South Korea)"}] },

{ ad:"İnçon (Incheon)", tur:"liman", lat:37.4560, lon:126.7050, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"0551-01-01",d:"goguryeo",kesinlik:"yil",kaynak:"SAHİP BEYANLI: goguryeo (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Goryeosa (Jeong Inji vd.) 卷五十六 (zh.wikisource.org/wiki/高麗史/卷五十六, okundu): «仁州本高句麗買召忽縣» | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; MS 500 öncesinden süren sahiplik): İnçon (Michuhol) Goguryeo kökenli (Goryeosa); ufuk işareti 500. · DOGU-500-1281"},{f:"0551-01-01",t:"0553-01-01",d:"baekje",kesinlik:"yil",kaynak:"SAHİP BEYANLI: baekje (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Nihon Shoki 卷第十九 (zh.wikisource.org/wiki/日本書紀/卷第十九, okundu): «百濟聖明王親率衆及二國兵〈二國謂新羅。任那也。〉往伐高麗。獲漠城之地。又進軍討平壌。凡六郡之地。遂復故地。» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Hanseong/Han havzası): bu yerin kendi adı kaynakta ayrı geçmez; Han Nehri havzası olayı (Hanseong) bölge sahibini belirler. · DOGU-500-1281"},{f:"0553-01-01",t:"0901-01-01",d:"silla",kesinlik:"yil",kaynak:"SAHİP BEYANLI: silla (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷04 (zh.wikisource.org/wiki/三國史記/卷04, okundu): «秋七月，取百濟東北鄙，置新州，以阿飡武力爲軍主。» · Kim Busik, Samguk sagi 卷26 (zh.wikisource.org/wiki/三國史記/卷26, okundu): «新羅取東北鄙，置新州。» · Nihon Shoki 卷第十九 (zh.wikisource.org/wiki/日本書紀/卷第十九, okundu): «百濟棄漢城與平壤。新羅因此入居漢城。» · Kim Busik, Samguk sagi 卷35 (zh.wikisource.org/wiki/三國史記/卷35, okundu): «邵城縣，本高句麗買召忽縣，景德王改名» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Hanseong/Han havzası): bu yerin kendi adı kaynakta ayrı geçmez; Han Nehri havzası olayı (Hanseong) bölge sahibini belirler. · DOGU-500-1281"},{f:"0901-01-01",t:"0918-07-25",d:"taebong",kesinlik:"yil",kaynak:"SAHİP BEYANLI: taebong (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «光化元年戊午春二月，葺松岳城。以我太祖為精騎大監，伐楊州、見州。» · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «天復元年辛酉，善宗自稱王，謂人曰：「徃者新羅請兵於唐，以破高勾麗，故平壤舊都，鞠為茂草。吾必報其讎。」» · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «擊破孔巖、黔浦、穴口等城。» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Hanseong/Han havzası): bu yerin kendi adı kaynakta ayrı geçmez; Han Nehri havzası olayı (Hanseong) bölge sahibini belirler. · DOGU-500-1281"},{f:"0918-07-25",t:"1281-01-01",d:"goryeo",kesinlik:"gun",kaynak:"Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «至六月乙卯，騎將洪儒、裴玄慶、申崇謙、卜智謙等密謀，夜詣太祖第，共言推戴之意。太祖固拒不許，夫人柳氏手提甲領被太祖，諸將扶擁而出。令人馳且呼曰：「王公已擧義旗矣！」於是，奔走來赴者，不可勝記，先至宮門，鼓譟以待者，亦萬餘人。裔聞之驚駭曰：「王公得之，吾事已矣！」乃不知所圖，以微服，出自北門亡去，內人淸宮以迎。裔遁于巖谷，信宿飢甚，偸截麥穗而食，尋爲斧壤民所害。» · Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «元年夏六月丙辰，卽位于布政殿，國號高麗，改元天授。» · DOGU-500-1281"},{f:"1281-01-01", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Japon teslimi Seul 1945-09-09 (Britannica Korea)"},{f:"1945-09-09",t:"1948-08-15",d:"abd-ordu-askeri-hukumeti-kore",kaynak:"USAMGIK (Office of the Historian)"},{f:"1948-08-15",t:"2000-12-31",d:"guney-kore",kaynak:"Kore Cumhuriyeti ilani 1948-08-15 (Britannica South Korea)"}] },

// Ganghwa — Moğol istilâları sırasında Goryeo sarayının 1232-1270 arası
// sığınağı; 1866 Fransız, 1871 Amerikan ve 1875 Japon çıkarmalarının
// sahnesi. Üçü de birkaç haftalıktır, pencere almadı.
{ ad:"Ganghwa", tur:"kale", lat:37.7470, lon:126.4880, g:0, k:4, d:[],
  s:[{f:"0500-01-01",t:"0551-01-01",d:"goguryeo",kesinlik:"yil",kaynak:"SAHİP BEYANLI: goguryeo (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Goryeosa (Jeong Inji vd.) 卷五十六 (zh.wikisource.org/wiki/高麗史/卷五十六, okundu): «江華縣本高句麗穴口郡» | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; MS 500 öncesinden süren sahiplik): Ganghwa (Hyeolgu-gun) Goguryeo kökenli; ufuk işareti 500. · DOGU-500-1281"},{f:"0551-01-01",t:"0553-01-01",d:"baekje",kesinlik:"yil",kaynak:"SAHİP BEYANLI: baekje (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Nihon Shoki 卷第十九 (zh.wikisource.org/wiki/日本書紀/卷第十九, okundu): «百濟聖明王親率衆及二國兵〈二國謂新羅。任那也。〉往伐高麗。獲漠城之地。又進軍討平壌。凡六郡之地。遂復故地。» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Hanseong/Han havzası): bu yerin kendi adı kaynakta ayrı geçmez; Han Nehri havzası olayı (Hanseong) bölge sahibini belirler. · DOGU-500-1281"},{f:"0553-01-01",t:"0901-01-01",d:"silla",kesinlik:"yil",kaynak:"SAHİP BEYANLI: silla (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷04 (zh.wikisource.org/wiki/三國史記/卷04, okundu): «秋七月，取百濟東北鄙，置新州，以阿飡武力爲軍主。» · Kim Busik, Samguk sagi 卷26 (zh.wikisource.org/wiki/三國史記/卷26, okundu): «新羅取東北鄙，置新州。» · Nihon Shoki 卷第十九 (zh.wikisource.org/wiki/日本書紀/卷第十九, okundu): «百濟棄漢城與平壤。新羅因此入居漢城。» · Kim Busik, Samguk sagi 卷35 (zh.wikisource.org/wiki/三國史記/卷35, okundu): «海口郡，本高句麗穴口郡，在海中，景德王改名，今江華縣» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Hanseong/Han havzası): bu yerin kendi adı kaynakta ayrı geçmez; Han Nehri havzası olayı (Hanseong) bölge sahibini belirler. · DOGU-500-1281"},{f:"0901-01-01",t:"0918-07-25",d:"taebong",kesinlik:"yil",kaynak:"SAHİP BEYANLI: taebong (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «光化元年戊午春二月，葺松岳城。以我太祖為精騎大監，伐楊州、見州。» · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «天復元年辛酉，善宗自稱王，謂人曰：「徃者新羅請兵於唐，以破高勾麗，故平壤舊都，鞠為茂草。吾必報其讎。」» · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «擊破孔巖、黔浦、穴口等城。» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Hanseong/Han havzası): bu yerin kendi adı kaynakta ayrı geçmez; Han Nehri havzası olayı (Hanseong) bölge sahibini belirler. · DOGU-500-1281"},{f:"0918-07-25",t:"1000-01-01",d:"goryeo",kesinlik:"gun",kaynak:"Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «至六月乙卯，騎將洪儒、裴玄慶、申崇謙、卜智謙等密謀，夜詣太祖第，共言推戴之意。太祖固拒不許，夫人柳氏手提甲領被太祖，諸將扶擁而出。令人馳且呼曰：「王公已擧義旗矣！」於是，奔走來赴者，不可勝記，先至宮門，鼓譟以待者，亦萬餘人。裔聞之驚駭曰：「王公得之，吾事已矣！」乃不知所圖，以微服，出自北門亡去，內人淸宮以迎。裔遁于巖谷，信宿飢甚，偸截麥穗而食，尋爲斧壤民所害。» · Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «元年夏六月丙辰，卽位于布政殿，國號高麗，改元天授。» · DOGU-500-1281"},{f:"1000-01-01",t:"1281-01-01",d:"goryeo",kesinlik:{f:"belirsiz",t:"yil"},kaynak:"«顯宗九年，置縣令。高宗十九年，避蒙古兵入都，陞爲郡，號江都。三十七年，築中城，周回二千九百六十餘閒。元宗元年，復還松都» Goryeosa 56 (高麗史/卷五十六 地理志一, 江華縣): Goryeo’nun ilk yıllarından beri Goryeo ilçesi (「高麗初，更今名」); 高宗十九年 (1232) Moğol istilasından saray buraya çekilir (başkent 江都), 元宗元年 (1260) Songdo’ya dönülür. Not: Goryeosa 56’daki 高宗十九年 = 1232, 三十七年 = 1250, 元宗元年 = 1260 (yıl hesabı hükümdar yıllarından). f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). t = 1281-01-01: atlastaki mevcut ilk s: döneminin f günüdür (ön ek bitişikliği; atlas kaydı DAYANAK DEĞİL, yalnız bitişiklik). · VERI-MS1-1281"},{f:"1281-01-01", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Japon teslimi Seul 1945-09-09 (Britannica Korea)"},{f:"1945-09-09",t:"1948-08-15",d:"abd-ordu-askeri-hukumeti-kore",kaynak:"USAMGIK (Office of the Historian)"},{f:"1948-08-15",t:"2000-12-31",d:"guney-kore",kaynak:"Kore Cumhuriyeti ilani 1948-08-15 (Britannica South Korea)"}] },

{ ad:"Kyongcu (Gyeongju)", tur:"sehir", lat:35.8560, lon:129.2250, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"0936-01-08",d:"silla",kesinlik:"yil",kaynak:"SAHİP BEYANLI: silla (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷04 (zh.wikisource.org/wiki/三國史記/卷04, okundu): «'''智證麻立干'''立，姓金氏，諱智大路，奈勿王之曾孫» · Goryeosa (Jeong Inji vd.) 卷五十七 (zh.wikisource.org/wiki/高麗史/卷五十七, okundu): «東京留守官慶州本新羅古都。» | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; MS 500 öncesinden süren sahiplik): Gyeongju Silla başkenti; ufuk işareti 500 (Jijeung 500'de tahta çıktı). · DOGU-500-1281"},{f:"0936-01-08",t:"1281-01-01",d:"goryeo",kesinlik:"gun",kaynak:"Goryeosa (Jeong Inji vd.) 卷二 (zh.wikisource.org/wiki/高麗史/卷二, okundu): «十二月辛酉，群臣奏曰「天無二日，土無二王，一國二君，民何以堪？願聽羅王之請。」壬申，御天德殿，會百僚曰：「朕與新羅，歃血同盟，庶幾兩國永好，各保社稷。今羅王固請稱臣，卿等亦以爲可，朕心雖愧，衆意難違。」乃受羅王庭見之禮，群臣稱賀，聲動宮掖。於是，拜金傅爲政丞，位太子上，歲給祿千碩，創神鸞宮賜之。其從者並收錄，優賜田祿。除新羅國爲慶州，仍賜爲食邑。» · Goryeosa (Jeong Inji vd.) 卷五十七 (zh.wikisource.org/wiki/高麗史/卷五十七, okundu): «太祖十八年，敬順王金傅來降，國除爲慶州。» · DOGU-500-1281"},{f:"1281-01-01", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Japon teslimi Seul 1945-09-09 (Britannica Korea)"},{f:"1945-09-09",t:"1948-08-15",d:"abd-ordu-askeri-hukumeti-kore",kaynak:"USAMGIK (Office of the Historian)"},{f:"1948-08-15",t:"2000-12-31",d:"guney-kore",kaynak:"Kore Cumhuriyeti ilani 1948-08-15 (Britannica South Korea)"}] },

{ ad:"Taegu (Daegu)", tur:"sehir", lat:35.8720, lon:128.6010, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"0936-01-08",d:"silla",kesinlik:"yil",kaynak:"SAHİP BEYANLI: silla (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Goryeosa (Jeong Inji vd.) 卷五十七 (zh.wikisource.org/wiki/高麗史/卷五十七, okundu): «大丘縣本新羅達句火縣。景德王，改今名，爲壽昌郡領縣。» | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; MS 500 öncesinden süren sahiplik): Daegu (Dalgubeol) Silla kökenli; ufuk işareti 500. · DOGU-500-1281"},{f:"0936-01-08",t:"1281-01-01",d:"goryeo",kesinlik:"gun",kaynak:"Goryeosa (Jeong Inji vd.) 卷二 (zh.wikisource.org/wiki/高麗史/卷二, okundu): «十二月辛酉，群臣奏曰「天無二日，土無二王，一國二君，民何以堪？願聽羅王之請。」壬申，御天德殿，會百僚曰：「朕與新羅，歃血同盟，庶幾兩國永好，各保社稷。今羅王固請稱臣，卿等亦以爲可，朕心雖愧，衆意難違。」乃受羅王庭見之禮，群臣稱賀，聲動宮掖。於是，拜金傅爲政丞，位太子上，歲給祿千碩，創神鸞宮賜之。其從者並收錄，優賜田祿。除新羅國爲慶州，仍賜爲食邑。» · Goryeosa (Jeong Inji vd.) 卷五十七 (zh.wikisource.org/wiki/高麗史/卷五十七, okundu): «太祖十八年，敬順王金傅來降，國除爲慶州。» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Gyeongju): Silla'nın çöküşünde (936-01-08) Silla ülkesinin tamamı Goryeo'ya geçti (Goryeosa: «除新羅國爲慶州»); bu yerin kendi adı o günkü kayıtta geçmez. · DOGU-500-1281"},{f:"1281-01-01", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Japon teslimi Seul 1945-09-09 (Britannica Korea)"},{f:"1945-09-09",t:"1948-08-15",d:"abd-ordu-askeri-hukumeti-kore",kaynak:"USAMGIK (Office of the Historian)"},{f:"1948-08-15",t:"2000-12-31",d:"guney-kore",kaynak:"Kore Cumhuriyeti ilani 1948-08-15 (Britannica South Korea)"}] },

{ ad:"Concu (Jeonju)", tur:"sehir", lat:35.8240, lon:127.1480, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"0660-08-01",d:"baekje",kesinlik:"yil",kaynak:"SAHİP BEYANLI: baekje (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Goryeosa (Jeong Inji vd.) 卷五十七 (zh.wikisource.org/wiki/高麗史/卷五十七, okundu): «全州牧本百濟完山» | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; MS 500 öncesinden süren sahiplik): Jeonju (Wansan) Baekje kökenli; ufuk işareti 500. · DOGU-500-1281"},{f:"0660-08-01",t:"0676-02-24",d:"tang",kesinlik:"ay",kaynak:"SAHİP BEYANLI: tang (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷05 (zh.wikisource.org/wiki/三國史記/卷05, okundu): «十三日，義慈率左右，夜遁走，保熊津城，義慈子隆與大佐平千福等，出降。法敏跪隆於馬前，唾面罵曰：「向者，汝父枉殺我妹，埋之獄中，使我二十年間，痛心疾首，今日汝命在吾手中！」隆伏地無言。十八日，義慈率太子及熊津方領軍等，自熊津城來降。» · Jiu Tangshu 卷4 (zh.wikisource.org/wiki/舊唐書/卷4, okundu): «八月庚辰，蘇定方等討平百濟，面縛其王扶餘義慈。國分為五部，郡三十七，城二百，戶七十六萬，以其地分置熊津等五都督府。» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Ungjin/Sabi): Tang beş dudufu kurdu (Jiu Tangshu 4: «以其地分置熊津等五都督府»); Wansan'ın hangi dudufuya bağlandığı okunan kaynakta ayrı yazılı değil. · DOGU-500-1281"},{f:"0676-02-24",t:"0900-01-01",d:"silla",kesinlik:"gun",kaynak:"SAHİP BEYANLI: silla (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Jiu Tangshu 卷5 (zh.wikisource.org/wiki/舊唐書/卷5, okundu): «二月甲戌，移安東都護府於遼東。» · Sima Guang, Zizhi tongjian 卷202 (zh.wikisource.org/wiki/資治通鑑/卷202, okundu): «二月，甲戌，徙安東都護府於遼東故城» · Sima Guang, Zizhi tongjian 卷202 (zh.wikisource.org/wiki/資治通鑑/卷202, okundu): «徙熊津都督府於建安故城» · Kim Busik, Samguk sagi 卷36 (zh.wikisource.org/wiki/三國史記/卷36, okundu): «全州，本百濟完山，眞興王十六年爲州，二十六年州廢，神文王五年復置完山州，景德王十六年改名» · BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Ungjin): Wansan'ın Silla'ya geçiş günü kaynakta ayrı yok; Tang'ın Ungjin'den çekildiği gün (676-02-24) alındı; Wansan-ju 685'te (Sinmun 5) Silla eyaleti olarak yeniden kuruldu (SS36). · DOGU-500-1281"},{f:"0900-01-01",t:"0936-09-01",d:"hubaekje",kesinlik:"yil",kaynak:"SAHİP BEYANLI: hubaekje (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «遂自稱後百濟王，設官分職。是唐光化三年，新羅孝恭王四年也。» · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «今予敢不立都於完山，以雪義慈宿憤乎！» · Goryeosa (Jeong Inji vd.) 卷五十七 (zh.wikisource.org/wiki/高麗史/卷五十七, okundu): «後甄萱，立都於州，太祖滅之，改安南都護府。» · DOGU-500-1281"},{f:"0936-09-01",t:"1000-01-01",d:"goryeo",kesinlik:"ay",kaynak:"Goryeosa (Jeong Inji vd.) 卷二 (zh.wikisource.org/wiki/高麗史/卷二, okundu): «秋九月，王率三軍，至天安府合兵，進次一善郡，神劒以兵逆之。甲午，隔一利川而陣» · Goryeosa (Jeong Inji vd.) 卷五十七 (zh.wikisource.org/wiki/高麗史/卷五十七, okundu): «後甄萱，立都於州，太祖滅之，改安南都護府。» · DOGU-500-1281"},{f:"1000-01-01",t:"1281-01-01",d:"goryeo",kesinlik:{f:"belirsiz",t:"yil"},kaynak:"«後甄萱，立都於州，太祖滅之，改安南都護府。二十三年，還爲全州。成宗十二年，稱承化節度安撫使，十四年，置十二州節度使，號順義軍，屬江南道» Goryeosa 57 (高麗史/卷五十七 地理志二, 全州牧): Hubaekje (Gyeon Hwon) başkenti Jeonju’yu Goryeo Taejo 936’da aldı (Goryeosa 57 全羅道: 「太祖十九年，親征克之」); 1000’de Goryeo’nun (成宗 12-14 yıllarında düzenlenen) Jeonju’su. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). t = 1281-01-01: atlastaki mevcut ilk s: döneminin f günüdür (ön ek bitişikliği; atlas kaydı DAYANAK DEĞİL, yalnız bitişiklik). · VERI-MS1-1281"},{f:"1281-01-01", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Japon teslimi Seul 1945-09-09 (Britannica Korea)"},{f:"1945-09-09",t:"1948-08-15",d:"abd-ordu-askeri-hukumeti-kore",kaynak:"USAMGIK (Office of the Historian)"},{f:"1948-08-15",t:"2000-12-31",d:"guney-kore",kaynak:"Kore Cumhuriyeti ilani 1948-08-15 (Britannica South Korea)"}] },

{ ad:"Kongcu (Gongju)", tur:"sehir", lat:36.4550, lon:127.1190, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"0660-08-01",d:"baekje",kesinlik:"yil",kaynak:"SAHİP BEYANLI: baekje (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷26 (zh.wikisource.org/wiki/三國史記/卷26, okundu): «冬十月，移原本缺刻都於熊津。» | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; MS 500 öncesinden süren sahiplik): Gongju (Ungjin) Baekje başkenti 475-538; ufuk işareti 500. · DOGU-500-1281"},{f:"0660-08-01",t:"0676-02-24",d:"tang",kesinlik:"ay",kaynak:"SAHİP BEYANLI: tang (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷05 (zh.wikisource.org/wiki/三國史記/卷05, okundu): «十三日，義慈率左右，夜遁走，保熊津城，義慈子隆與大佐平千福等，出降。法敏跪隆於馬前，唾面罵曰：「向者，汝父枉殺我妹，埋之獄中，使我二十年間，痛心疾首，今日汝命在吾手中！」隆伏地無言。十八日，義慈率太子及熊津方領軍等，自熊津城來降。» · Jiu Tangshu 卷4 (zh.wikisource.org/wiki/舊唐書/卷4, okundu): «八月庚辰，蘇定方等討平百濟，面縛其王扶餘義慈。國分為五部，郡三十七，城二百，戶七十六萬，以其地分置熊津等五都督府。» · Kim Busik, Samguk sagi 卷36 (zh.wikisource.org/wiki/三國史記/卷36, okundu): «熊州，本百濟舊都，唐高宗遣蘇定方平之，置熊津都督府» · DOGU-500-1281"},{f:"0676-02-24",t:"0904-01-01",d:"silla",kesinlik:"gun",kaynak:"SAHİP BEYANLI: silla (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Jiu Tangshu 卷5 (zh.wikisource.org/wiki/舊唐書/卷5, okundu): «二月甲戌，移安東都護府於遼東。» · Sima Guang, Zizhi tongjian 卷202 (zh.wikisource.org/wiki/資治通鑑/卷202, okundu): «二月，甲戌，徙安東都護府於遼東故城» · Sima Guang, Zizhi tongjian 卷202 (zh.wikisource.org/wiki/資治通鑑/卷202, okundu): «徙熊津都督府於建安故城» · Kim Busik, Samguk sagi 卷36 (zh.wikisource.org/wiki/三國史記/卷36, okundu): «新羅文武王取其地有之，神文王改爲熊川州» · DOGU-500-1281"},{f:"0904-01-01",t:"0918-07-25",d:"taebong",kesinlik:"yil",kaynak:"SAHİP BEYANLI: taebong (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «天祐元年甲子，立國號為摩震，年號為武泰。始置廣評省，備員匡治奈、徐事、外書。又置兵部、大龍部、壽春部、奉賔部、義刑臺、納貨府、調位府、內奉省、禁書省、南廂壇、水壇、元鳳省、飛龍省、物藏省。又置史臺、植貨府、障繕府、珠淘省。又設正匡、元輔、大相、元尹、佐尹、正朝、甫尹、軍尹、中尹等品職。秋七月，移青州人戶一千入鐵圓城為京。伐取尙州等三十餘州縣，公州將軍弘竒來降。» · DOGU-500-1281"},{f:"0918-07-25",t:"0936-09-01",d:"__BOSLUK__",kesinlik:"gun",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Gongju'nun 918-07-25 ile 936-09 arasındaki sahibi (Goryeosa j.1-2 ve Samguk sagi j.50'de 'Gongju' yalnız 904 teslimi ve Goryeosa j.56 'Taejo 23 (940) yeniden adlandırdı' kayıtlarında geçer; Hubaekje/Goryeo hâkimiyeti dönemi okunmadı). | geçiş kaydı: Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «至六月乙卯，騎將洪儒、裴玄慶、申崇謙、卜智謙等密謀，夜詣太祖第，共言推戴之意。太祖固拒不許，夫人柳氏手提甲領被太祖，諸將扶擁而出。令人馳且呼曰：「王公已擧義旗矣！」於是，奔走來赴者，不可勝記，先至宮門，鼓譟以待者，亦萬餘人。裔聞之驚駭曰：「王公得之，吾事已矣！」乃不知所圖，以微服，出自北門亡去，內人淸宮以迎。裔遁于巖谷，信宿飢甚，偸截麥穗而食，尋爲斧壤民所害。» · Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «元年夏六月丙辰，卽位于布政殿，國號高麗，改元天授。» · DOGU-500-1281"},{f:"0936-09-01",t:"1000-01-01",d:"goryeo",kesinlik:"ay",kaynak:"Goryeosa (Jeong Inji vd.) 卷二 (zh.wikisource.org/wiki/高麗史/卷二, okundu): «秋九月，王率三軍，至天安府合兵，進次一善郡，神劒以兵逆之。甲午，隔一利川而陣» · Goryeosa (Jeong Inji vd.) 卷五十七 (zh.wikisource.org/wiki/高麗史/卷五十七, okundu): «後甄萱，立都於州，太祖滅之，改安南都護府。» · Goryeosa (Jeong Inji vd.) 卷五十六 (zh.wikisource.org/wiki/高麗史/卷五十六, okundu): «公州本百濟熊川，文周王，自漢城，徙都之，至聖王，又移都南扶餘。新羅與唐，夾攻滅之，唐置熊津都督府，留兵鎭之。唐師旣去，新羅盡有其地。» · BEYANLI YAKLAŞIKLIK: Hubaekje'nin 936'da Goryeo'ya geçişi ülke çapındaydı; Goryeosa j.56: Gongju Taejo 23'te (940) Goryeo adıyla yeniden adlandırıldı (kayıt 940 Goryeo hâkimiyetini gösterir). · DOGU-500-1281"},{f:"1000-01-01",t:"1281-01-01",d:"goryeo",kesinlik:{f:"belirsiz",t:"yil"},kaynak:"«太祖二十三年，更今名。成宗二年，初置十二牧，州其一也。十四年，置十二州節度使，稱安節軍，屬河南道。顯宗三年，廢節度使。九年，降知州事» Goryeosa 56 (高麗史/卷五十六 地理志一, 公州): Gongju Goryeo taşrası olarak kesintisiz (成宗二年 12 mok’tan biri, 成宗十四年 anjeol-gun, 顯宗九年 jisaju); 明宗六年 (1176) Mangi-Mangsoi ayaklanması şehri kısa süre ele geçirdi, devlet sahipliği değişimi saymadım (Goryeosa 56: 「攻陷本州… 尋削之」). f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). t = 1281-01-01: atlastaki mevcut ilk s: döneminin f günüdür (ön ek bitişikliği; atlas kaydı DAYANAK DEĞİL, yalnız bitişiklik). · VERI-MS1-1281"},{f:"1281-01-01", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Japon teslimi Seul 1945-09-09 (Britannica Korea)"},{f:"1945-09-09",t:"1948-08-15",d:"abd-ordu-askeri-hukumeti-kore",kaynak:"USAMGIK (Office of the Historian)"},{f:"1948-08-15",t:"2000-12-31",d:"guney-kore",kaynak:"Kore Cumhuriyeti ilani 1948-08-15 (Britannica South Korea)"}] },

{ ad:"Çungcu (Chungju)", tur:"sehir", lat:36.9910, lon:127.9260, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"0551-01-01",d:"goguryeo",kesinlik:"yil",kaynak:"SAHİP BEYANLI: goguryeo (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Goryeosa (Jeong Inji vd.) 卷五十六 (zh.wikisource.org/wiki/高麗史/卷五十六, okundu): «忠州牧本高句麗國原城» | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; MS 500 öncesinden süren sahiplik): Chungju (Gukwon-seong) Goguryeo kökenli; ufuk işareti 500. · DOGU-500-1281"},{f:"0551-01-01",t:"0901-01-01",d:"silla",kesinlik:"yil",kaynak:"SAHİP BEYANLI: silla (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷04 (zh.wikisource.org/wiki/三國史記/卷04, okundu): «王命居柒夫等，侵高句麗，乘勝取十郡。» · Goryeosa (Jeong Inji vd.) 卷五十六 (zh.wikisource.org/wiki/高麗史/卷五十六, okundu): «忠州牧本高句麗國原城» · Goryeosa (Jeong Inji vd.) 卷五十六 (zh.wikisource.org/wiki/高麗史/卷五十六, okundu): «新羅取之，眞興王，置小京，景德王，改爲中原京。» · Kim Busik, Samguk sagi 卷04 (zh.wikisource.org/wiki/三國史記/卷04, okundu): «十八年，以國原爲小京。» · DOGU-500-1281"},{f:"0901-01-01",t:"0918-07-25",d:"taebong",kesinlik:"yil",kaynak:"SAHİP BEYANLI: taebong (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «光化元年戊午春二月，葺松岳城。以我太祖為精騎大監，伐楊州、見州。» · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «天復元年辛酉，善宗自稱王，謂人曰：「徃者新羅請兵於唐，以破高勾麗，故平壤舊都，鞠為茂草。吾必報其讎。」» · Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «又命太祖伐廣州、忠州、唐城、青州、槐壤等，皆平之。» · BEYANLI YAKLAŞIKLIK: Chungju 900'de Wang Geon (Gung Ye adına) tarafından alındı; 892'den beri Yang Gil/Buk-won komutanlığı bölgede etkindi (SS50: «取國原等三十餘城有之»): 'taebong' künye f 901 olduğundan dilim 901'de başlatıldı. · DOGU-500-1281"},{f:"0918-07-25",t:"1281-01-01",d:"goryeo",kesinlik:"gun",kaynak:"Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «至六月乙卯，騎將洪儒、裴玄慶、申崇謙、卜智謙等密謀，夜詣太祖第，共言推戴之意。太祖固拒不許，夫人柳氏手提甲領被太祖，諸將扶擁而出。令人馳且呼曰：「王公已擧義旗矣！」於是，奔走來赴者，不可勝記，先至宮門，鼓譟以待者，亦萬餘人。裔聞之驚駭曰：「王公得之，吾事已矣！」乃不知所圖，以微服，出自北門亡去，內人淸宮以迎。裔遁于巖谷，信宿飢甚，偸截麥穗而食，尋爲斧壤民所害。» · Goryeosa (Jeong Inji vd.) 卷一 (zh.wikisource.org/wiki/高麗史/卷一, okundu): «元年夏六月丙辰，卽位于布政殿，國號高麗，改元天授。» · DOGU-500-1281"},{f:"1281-01-01", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Japon teslimi Seul 1945-09-09 (Britannica Korea)"},{f:"1945-09-09",t:"1948-08-15",d:"abd-ordu-askeri-hukumeti-kore",kaynak:"USAMGIK (Office of the Historian)"},{f:"1948-08-15",t:"2000-12-31",d:"guney-kore",kaynak:"Kore Cumhuriyeti ilani 1948-08-15 (Britannica South Korea)"}] },

// Ûicu (Uiju) — Yalu üzerindeki Çin kapısı; Kore elçilerinin Pekin yolu
// buradan geçerdi. 1592'de kral Seonjo buraya kaçtı.
{ ad:"Ûicu (Uiju)", tur:"kale", lat:40.1520, lon:124.5230, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Britannica Korea"},{f:"1945-09-09",t:"1948-09-09",d:"kuzey-kore-sovyet-idaresi",kaynak:"Sovyet Sivil Idaresi (Library of Congress North Korea Country Study)"},{f:"1948-09-09",t:"2000-12-31",d:"kuzey-kore",kaynak:"KDHC ilani 1948-09-09 (Britannica North Korea)"}] },

// Hamhung — Ssangseong komutanlığı: 1258-1356 arasında YUAN'IN DOĞRUDAN
// idaresindeydi, yani 1281'de Goryeo değildir. Kral Gongmin 1356'da geri
// aldı ve Yi hânedanının yükselişi buradan başladı.
{ ad:"Hamhung", tur:"sehir", lat:39.9180, lon:127.5360, g:0, k:3, d:[],
  s:[{f:"1107-01-01",t:"1109-01-01",d:"goryeo",kesinlik:"yil",kaynak:"«咸州大都督府久爲女眞所據。睿宗二年，命元帥尹瓘等，率兵擊逐。三年，置州，爲大都督府，號鎭東軍。築大城，徙南界丁戶一千九百四十八，以實之。四年，撤城，以其地，還女眞» Goryeosa 58 (高麗史/卷五十八 地理三, 咸州大都督府): 睿宗二年 (1107) Yun Gwan Jurchenleri sürdü, 三年 (1108) Hamju kuruldu, 四年 (1109) şehir tahliye edilip Jurchenlere iade edildi (yalnız yıl; ay-gün yok). · VERI-MS1-1281"},{f:"1109-01-01",t:"1259-01-09",d:"__BOSLUK__",kesinlik:{f:"yil",t:"gun"},kaynak:"BEYANLI BOŞLUK (arandı, bulunamadı): Hamju’nun 1109 sonrası Jurchen/Jin elinde olduğuna dair şehir adlı tanıklık yok (Goryeosa 58 yalnız 「還女眞」 der; Jinshi 24 曷賴路 yalnız uzaklık verir, Hamju anılmaz); Jin sonrası (1234) için Doğu Xia tanıklığı da yok. Arandı, bulunamadı: Hamju (咸州/哈蘭) için 1109-1259 arası şehir adlı sahiplik.  f: Goryeosa 58 睿宗四年 (1109) 「撤城，以其地，還女眞」: yalnız yıl. · VERI-MS1-1281"},{f:"1259-01-09",t:"1260-01-01",d:"mogol-imparatorlugu",kesinlik:{f:"gun",t:"yil"},kaynak:"«四年，撤城，以其地，還女眞，後又沒於元，稱哈蘭府。恭愍王五年，收復舊疆，爲知咸州事» «龍津縣人趙暉，定州人卓靑，以和州迆北，附蒙古。蒙古置雙城摠管府于和州» Dilim başlangıcının TARİHİ Goryeosa 24 (高宗四十五年十二月 己丑) bölge cümlesinden gelir (「和州迆北」 = Hwaju ve kuzeyi; Hamju bu bölgenin içindedir ama cümle şehir adı anmaz — BÖLGE CÜMLESİ, yalnız tarih alt sınırı); şehir adlı tanıklık 咸州 maddesi 「後又沒於元，稱哈蘭府」 (tarihsiz). f: Gün çevirimi: Goryeosa 24 高宗四十五年十二月丙子朔 (gan-zhi mutlak: Jülyen 1258-12-27) içindeki 己丑 günü = Jülyen 1259-01-09 (JDN/gan-zhi hesabı; Goryeo takvimi ay-gün tablosu kullanılmadı, yalnız gan-zhi). Olay Goryeosa’da 己丑 kaydının devamında anlatılır (Cho Hwi ve Tak Cheong 和州迆北 Moğollara bağlandı; Ssangseong Genel Valiliği kuruldu) — bölge cümlesi. · VERI-MS1-1281"},{f:"1260-01-01",t:"1281-01-01",d:"yuan-hanedani",kesinlik:"yil",kaynak:"«四年，撤城，以其地，還女眞，後又沒於元，稱哈蘭府。恭愍王五年，收復舊疆，爲知咸州事» Goryeosa 58: Hamju Yuan’a geçmiş (哈蘭府) ve恭愍王五年 (1356) Goryeo’ya geri alınmıştır; 1281 öncesi Yuan dönemi sürekli. f: KÜNYE ÖMRÜ SINIRI: mogol-imparatorlugu t=1260-01-01 = yuan-hanedani f=1260-01-01 (atlas künyesi, DAYANAK DEĞİL): dilim ucu künye ömrü içinde kalsın diye bu güne konuldu. Kubilay’ın tahta çıkışı 中統元年 (Yuanshi 4; Jülyen 1260-05-05) ile künye sınırı hizalanabilir. t = 1281-01-01: atlastaki mevcut ilk s: döneminin f günüdür (ön ek bitişikliği; atlas kaydı DAYANAK DEĞİL, yalnız bitişiklik). · VERI-MS1-1281"},{f:"1281-01-01", t:"1356-08-05", d:"yuan-hanedani"},
     {f:"1356-08-05", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Britannica Korea"},{f:"1945-09-09",t:"1948-09-09",d:"kuzey-kore-sovyet-idaresi",kaynak:"Sovyet Sivil Idaresi (Library of Congress North Korea Country Study)"},{f:"1948-09-09",t:"2000-12-31",d:"kuzey-kore",kaynak:"KDHC ilani 1948-09-09 (Britannica North Korea)"}] },

{ ad:"Wonsan", tur:"liman", lat:39.1470, lon:127.4440, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1356-08-05", d:"yuan-hanedani"},
     {f:"1356-08-05", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Britannica Korea"},{f:"1945-09-09",t:"1948-09-09",d:"kuzey-kore-sovyet-idaresi",kaynak:"Sovyet Sivil Idaresi (Library of Congress North Korea Country Study)"},{f:"1948-09-09",t:"2000-12-31",d:"kuzey-kore",kaynak:"KDHC ilani 1948-09-09 (Britannica North Korea)"}] },

// Kyongsong — Joseon'un XV. yüzyılda Tumen'e kadar genişlettiği kuzeydoğu
// sınırının kalesi ("altı garnizon", 1434-1449).
{ ad:"Kyongsong (Gyeongseong)", tur:"kale", lat:41.5750, lon:129.5980, g:0, k:4, d:[],
  kur:"1434-01-01",
  s:[{f:"1434-01-01", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Britannica Korea"},{f:"1945-09-09",t:"1948-09-09",d:"kuzey-kore-sovyet-idaresi",kaynak:"Sovyet Sivil Idaresi (Library of Congress North Korea Country Study)"},{f:"1948-09-09",t:"2000-12-31",d:"kuzey-kore",kaynak:"KDHC ilani 1948-09-09 (Britannica North Korea)"}] },

// Ceccu (Jeju) — Tamna: 1273-1356 arasında Yuan'ın doğrudan idaresinde bir
// at yetiştirme bölgesiydi. Ada, kendi noktası olmazsa kutu açıldığında
// anakaranın peteğine emilirdi.
{ ad:"Ceccu (Jeju)", tur:"liman", lat:33.5000, lon:126.5310, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"1000-01-01",d:"tamna",kesinlik:"yil",kaynak:"SAHİP BEYANLI: tamna (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Goryeosa j.57 Jiri-ji: «肅宗十年，改乇羅，爲耽羅郡»; Samguk sagi j.26: Tamna 476/498 haraç; f=0500-01-01 UFUK SINIR İŞARETİDİR (Tamna 476'dan beri tanıklı, pencere başı) · DOGU-500-1281"},{f:"1000-01-01",t:"1105-01-01",d:"__BOSLUK__",kesinlik:{f:"belirsiz",t:"yil"},kaynak:"BEYANLI BOŞLUK (arandı, bulunamadı): Tamna (耽羅/乇羅) Goryeo’nun haraçgüzar, kendi hükümdarı (星主) olan adası; devletler.js’te Tamna künyesi YOK (arandı: tamna, jeju, cheju). Goryeosa 57 (耽羅縣): 太祖二十一年 Tamna prensi Goryeo’ya geldi ve 星主 unvanı aldı; 肅宗十年 (1105) 郡 yapıldı. Yeni künye önerisi yeni_kunye_gerekli alanında. f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1105-01-01",t:"1273-07-13",d:"goryeo",kesinlik:{f:"yil",t:"gun"},kaynak:"«肅宗十年，改乇羅，爲耽羅郡。毅宗時，爲縣令官。熙宗七年，以縣之石淺村，爲歸德縣» «元宗十一年，逆賊金通精，領三別抄，入據作亂，越四年，王命金方慶，討平之» Goryeosa 57 (高麗史/卷五十七 地理志二, 耽羅縣): 肅宗十年 (1105) Tamna Goryeo’nun Tamna-gun’u; 元宗十一年 (1270) Sambyeolcho (Kim Tong-jeong) adayı ele geçirdi, 4 yıl sonra (1273) Goryeo ve Yuan birlikleri bastırdı — 1270-1273 isyancı işgali bu dilimde Goryeo’ya sayıldı (BEYAN: fiilen isyancı elinde). f: Goryeosa 57 耽羅縣 肅宗十年 (Goryeo 肅宗 hükümdar yılı; 肅宗元年 = 1096): yalnız yıl. · VERI-MS1-1281"},{f:"1273-07-13",t:"1281-01-01",d:"yuan-hanedani",kesinlik:{f:"gun",t:"yil"},kaynak:"«戊申，經略忻都等兵至躭羅，撫定其地，詔以失里伯為躭羅國招討使，尹邦寶副之» «十年正月，命經略使忻都、史樞及洪茶丘等率兵船大小百有八艘，討耽羅賊黨。六月，平之，於其地立耽羅國招討司» Yuanshi 8 (至元十年六月戊申) ve Yuanshi 208 (耽羅): Moğol/Yuan Tamna Zhaotaosi’yi (招討司) kurdu; Goryeosa 57: 忠烈王三年 (1277) Yuan’ın at otlağı (牧馬場); 1294’te (Yuanshi 208 三十一年) Goryeo’ya iade. f: Gün çevirimi: Yuanshi 8 至元十年六月戊申 → Jülyen 1273-07-13 (Academia Sinica 兩千年中西曆轉換 (sinocal.sinica.edu.tw, 西曆->中曆 tablosu, Jülyen); tablo etiketi 元世祖至元10年6月28日; kaynaktaki gan-zhi günü JDN formülüyle hesaplanıp ay-gün tablosuyla eşleşen TEK gün seçildi). t = 1281-01-01: atlastaki mevcut ilk s: döneminin f günüdür (ön ek bitişikliği; atlas kaydı DAYANAK DEĞİL, yalnız bitişiklik). · VERI-MS1-1281"},{f:"1281-01-01", t:"1356-01-01", d:"yuan-hanedani"},
     {f:"1356-01-01", t:"1392-08-05", d:"goryeo"},
     {f:"1392-08-05", t:"1910-08-29", d:"joseon"},
     {f:"1910-08-29", t:"1923-10-29", d:"japon-kore"},{f:"1923-10-29",t:"1945-09-09",d:"japon-kore",kaynak:"Japon teslimi Seul 1945-09-09 (Britannica Korea)"},{f:"1945-09-09",t:"1948-08-15",d:"abd-ordu-askeri-hukumeti-kore",kaynak:"USAMGIK (Office of the Historian)"},{f:"1948-08-15",t:"2000-12-31",d:"guney-kore",kaynak:"Kore Cumhuriyeti ilani 1948-08-15 (Britannica South Korea)"}] },

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
{ ad:"Pagan", tur:"sehir", lat:21.1710, lon:94.8600, g:1, k:2,kd:[{f:"1281-01-01",t:"1297-01-01",k:1,m:"Pagan"}], d:[],
  s:[{f:"0849-01-01",t:"1000-01-01",d:"pagan",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VII-3: «In 849, Pagan entered definitively into history, if not in epigraphy at least in the annals, with the construction of its city walls by the king Pyinbya.» | BEYANLI YAKLAŞIKLIK: f=0849 kronik tarihidir (surlar); Pagan'ın daha eski varlığı kroniklerde (2. yy) efsanevidir. Coedès 849-1000 arası Pagan krallarının kronik listelerini \"doğrulanamaz\" der (VIII-5). · DOGU-500-1281"},{f:"1000-01-01", t:"1297-01-01", d:"pagan",kaynak:"[ONCE1281-GERIYE f 1281-01-01 → 1000-01-01] Britannica, «Pagan» (britannica.com/place/Pagan-Myanmar; tarayıcıda açıldı ve okundu 18.10.2026): 'It was first built probably in 849 CE and, from the 11th century to the end of the 13th, was the capital of a region roughly the size of modern Myanmar. In 1287 it was overrun by the Mongols' · 'Under King Anawrahta (reigned 1044–77), the ethnic Burmans … making it the capital' · BEYAN: 1000 yılında Pagan şehrinin sahibi için Britannica ayrı cümle vermez (849’da kuruluş, 11. yy’dan başkent); Pagan Krallığı’nın kendi şehri sayıldı · f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor; edinim günü değil, D210) · ONCE1281-GERIYE"},
     {f:"1297-01-01", t:"1555-01-01", d:"ava"},
     {f:"1555-01-01", t:"1752-04-23", d:"toungoo"},
     {f:"1752-04-23", t:"1885-11-28", d:"konbaung"},
     {f:"1885-11-28", t:"1923-10-29", d:"ingiliz-hindistani"},{f:"1923-10-29",t:"1948-01-04",d:"ingiliz-burma",kaynak:"https://history.state.gov/countries/burma"},{f:"1948-01-04",t:"2000-12-31",d:"myanmar-birmanya",kaynak:"https://history.state.gov/countries/burma (1948-01-04)"}] },

// Ava (İnwa) — 1364'te kuruldu (kur:) ve dört yüzyıl boyunca Yukarı
// Birmanya'nın başkenti oldu.
{ ad:"Ava (İnwa)", tur:"sehir", lat:21.8550, lon:95.9810, g:1, k:1,kd:[{f:"1364-01-01",t:"1885-11-29",k:1,m:"Ava (İnwa)"}], d:[],
  kur:"1364-01-01",
  s:[{f:"1364-01-01", t:"1555-01-01", d:"ava"},
     {f:"1555-01-01", t:"1752-04-23", d:"toungoo"},
     {f:"1752-04-23", t:"1885-11-28", d:"konbaung"},
     {f:"1885-11-28", t:"1923-10-29", d:"ingiliz-hindistani"},{f:"1923-10-29",t:"1948-01-04",d:"ingiliz-burma",kaynak:"https://history.state.gov/countries/burma"},{f:"1948-01-04",t:"2000-12-31",d:"myanmar-birmanya",kaynak:"https://history.state.gov/countries/burma (1948-01-04)"}] },

// Mandalay — Kral Mindon 1857'de kurdu (kur:); Birmanya'nın son başkenti.
// 28 Kasım 1885'te İngilizler girdi ve krallık sona erdi. Ava'ya 15.6 km.
{ ad:"Mandalay", tur:"sehir", lat:21.9750, lon:96.0840, g:1, k:2,kd:[{f:"1857-01-01",t:"1885-11-29",k:1,m:"Mandalay"}], d:[],
  kur:"1857-01-01",
  s:[{f:"1857-01-01", t:"1885-11-28", d:"konbaung"},
     {f:"1885-11-28", t:"1923-10-29", d:"ingiliz-hindistani"},{f:"1923-10-29",t:"1948-01-04",d:"ingiliz-burma",kaynak:"https://history.state.gov/countries/burma"},{f:"1948-01-04",t:"2000-12-31",d:"myanmar-birmanya",kaynak:"https://history.state.gov/countries/burma (1948-01-04)"}] },

// Pegu (Bago) — Mon Hanthawaddy krallığının başkenti; 1539'da Toungoo
// aldı, 1740'ta Monlar yeniden bağımsızlaştı, 6 Mayıs 1757'de Alaungpaya
// şehri yıktı ve Mon devleti bir daha kurulmadı.
{ ad:"Pegu (Bago)", tur:"sehir", lat:17.3350, lon:96.4790, g:1, k:1,kd:[{f:"1287-01-01",t:"1757-05-06",k:1,m:"Pegu (Bago)"}], d:[],
  s:[{f:"0825-01-01",t:"1057-01-01",d:"hamsavati-pegu",kesinlik:"yil",kaynak:"SAHİP: hamsavati-pegu (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VII-3: «a chronicle gives 825 as the date for the foundation of Pegu» · «by Samala and Vimala, twin brothers from Thaton» | f=0825 KRONİK tarihidir (Coedès: kronikler \"impossible to verify\"); kuruluş yılı kesin değil, yerleşimin görünme alt sınırı.  · DOGU-500-1281"},{f:"1057-01-01",t:"1281-01-01",d:"pagan",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-6: «The political result of the conquest of Thaton was the submission of the whole delta» · «He first had to reconquer his kingdom from the Mons of Pegu.» | BEYANLI YAKLAŞIKLIK: Pegu'nun 1057-1281 sahipliği yerel yazıtla değil, deltanın Pagan'a teslimi ve 1084-86 Pegu Mon isyanının bastırılmasıyla dolaylı kanıtlıdır; Pegu'nun bu dönemde fiilen ne ölçüde bağımsız olduğu bilinmiyor (1281 Makatho/Martaban). · DOGU-500-1281"},{f:"1281-01-01", t:"1287-01-01", d:"pagan"},
     {f:"1287-01-01", t:"1539-01-01", d:"hanthawaddy"},
     {f:"1539-01-01", t:"1740-01-01", d:"toungoo"},
     {f:"1740-01-01", t:"1757-05-06", d:"hanthawaddy"},
     {f:"1757-05-06", t:"1852-12-20", d:"konbaung"},
     {f:"1852-12-20", t:"1923-10-29", d:"ingiliz-hindistani"},{f:"1923-10-29",t:"1948-01-04",d:"ingiliz-burma",kaynak:"https://history.state.gov/countries/burma"},{f:"1948-01-04",t:"2000-12-31",d:"myanmar-birmanya",kaynak:"https://history.state.gov/countries/burma (1948-01-04)"}] },

// Rangun (Yangon) — Alaungpaya 1755'te Dagon köyünü şehir yapıp "Yangon"
// adını verdi; yerleşim daha eski (Shwedagon pagodası) olduğu için kur:
// YAZILMADI. İngiliz donanması 14 Nisan 1852'de aldı ve şehir Britanya
// Birmanyası'nın başkenti oldu.
{ ad:"Rangun (Yangon)", tur:"liman", lat:16.8710, lon:96.1990, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1287-01-01", d:"pagan"},
     {f:"1287-01-01", t:"1539-01-01", d:"hanthawaddy"},
     {f:"1539-01-01", t:"1740-01-01", d:"toungoo"},
     {f:"1740-01-01", t:"1755-05-03", d:"hanthawaddy"},
     {f:"1755-05-03", t:"1852-04-14", d:"konbaung"},
     {f:"1852-04-14", t:"1923-10-29", d:"ingiliz-hindistani"},{f:"1923-10-29",t:"1948-01-04",d:"ingiliz-burma",kaynak:"https://history.state.gov/countries/burma"},{f:"1948-01-04",t:"2000-12-31",d:"myanmar-birmanya",kaynak:"https://history.state.gov/countries/burma (1948-01-04)"}] },

// Toungoo — 1510'da bağımsızlığını ilân eden ve yüz yıl içinde Güneydoğu
// Asya'nın en büyük imparatorluğunu kuran hânedanın çıkış şehri.
{ ad:"Toungoo", tur:"kale", lat:18.9430, lon:96.4350, g:0, k:1,kd:[{f:"1510-01-01",t:"1752-01-01",k:1,m:"Toungoo"}], d:[],
  s:[{f:"1281-01-01", t:"1297-01-01", d:"pagan"},
     {f:"1297-01-01", t:"1510-10-16", d:"ava"},
     {f:"1510-10-16", t:"1752-04-23", d:"toungoo"},
     {f:"1752-04-23", t:"1852-12-20", d:"konbaung"},
     {f:"1852-12-20", t:"1923-10-29", d:"ingiliz-hindistani"},{f:"1923-10-29",t:"1948-01-04",d:"ingiliz-burma",kaynak:"https://history.state.gov/countries/burma"},{f:"1948-01-04",t:"2000-12-31",d:"myanmar-birmanya",kaynak:"https://history.state.gov/countries/burma (1948-01-04)"}] },

{ ad:"Prome (Pyay)", tur:"kale", lat:18.8170, lon:95.2130, g:0, k:4, d:[],
  s:[{f:"0500-01-01",t:"0832-01-01",d:"sri-ksetra",kesinlik:"yil",kaynak:"SAHİP: sri-ksetra (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm V-5: «West of Dvaravati the Chinese pilgrims Hsuan-tsang and I-ching place the kingdom of She-li-ch'a-ta-lo, that is, Srikshetra, which is the ancient name of Prome» | Hall, D. G. E., A History of South-East Asia, 4. baskı (London: Macmillan, 1981); archive.org/details/a-history-of-south-east-asia-4th-ed (djvu tam metni bu oturumda okundu), Bölüm 6: «Srikshetra as the Pyu capital is mentioned by the Chinese Buddhist pilgrims Hsuan Tsang and I Tsing.» | BEYAN: Hmawza (Sri Ksetra) Prome'nin 8 km KD'sundadır; kale atlasta 'Prome (Pyay)' noktasıyla temsil edilir | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı: sahiplik öncesinden sürüyor) · DOGU-500-1281"},{f:"0832-01-01",t:"1077-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Prome'nin 832 sonrası sahibi — Hall (Bölüm 6): «Between 849 and the foundation of the Pagan kingship in 1044 by Anawrahta there is almost a complete blank so far as reliable historical sources are concerned.» · Coedès (Bölüm VII-3) 832 Halin yağmasından sonra Pyu çöküşünü anlatır ama Prome'nin sahibini söylemez · Abi merkez adayı Pagan 849'da kurulur ama Prome'yi içerdiğine dair kaynak yok · DOGU-500-1281"},{f:"1077-01-01",t:"1281-01-01",d:"pagan",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-6: Anawrahta (ö. 1077) «left a kingdom that extended from Bhamo to the Gulf of Martaban» · «brought all of the Irrawaddy Basin under his domination» | BEYANLI YAKLAŞIKLIK: Prome bu aralıkta kalır; yerleşim adıyla geçiş günü kaynakta yok; 1077 en geç sınırı (Anawrahta'nın ölümü) · DOGU-500-1281"},{f:"1281-01-01", t:"1297-01-01", d:"pagan"},
     {f:"1297-01-01", t:"1542-05-19", d:"ava"},
     {f:"1542-05-19", t:"1752-04-23", d:"toungoo"},
     {f:"1752-04-23", t:"1852-12-20", d:"konbaung"},
     {f:"1852-12-20", t:"1923-10-29", d:"ingiliz-hindistani"},{f:"1923-10-29",t:"1948-01-04",d:"ingiliz-burma",kaynak:"https://history.state.gov/countries/burma"},{f:"1948-01-04",t:"2000-12-31",d:"myanmar-birmanya",kaynak:"https://history.state.gov/countries/burma (1948-01-04)"}] },

// Mrauk U — Arakan krallığının başkenti (1430'dan itibaren); Bengal
// körfezinin en güçlü deniz devletlerinden ve 1459-1666 arasında
// Çatgam'ın sahibi. Bodawpaya 2 Ocak 1785'te ilhak etti.
{ ad:"Mrauk U (Arakan)", tur:"sehir", lat:20.5880, lon:93.1910, g:1, k:1,kd:[{f:"1281-01-01",t:"1785-01-02",k:1,m:"Mrauk U (Arakan)"}], d:[],
  s:[{f:"0500-01-01",t:"1237-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"UFUK SINIR İŞARETİ (0500-01-01): pencere başıdır, kuruluş değil.  | BOŞLUK BEYANI: arandı, bulunamadı: Arakan'ın 500-1237 arası sahibi atlas kimliği olarak yok: Hall Candra hanedanını (Vesali, 4. yy ortası + 230 yıl) ve 8. yy ikinci hanedanını yazıtlardan, kroniklerin Dinnyawadi/Vesali/Pyinsa/Parin/Krit listelerini efsanevî ya da doğrulanamaz bulur; hiçbiri atlasta devlet künyesi değil (vesali-chandra ve dhanyawadi künyesiz). · DOGU-500-1281"},{f:"1237-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip launggyet (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"launggyet\" geri yazılır) · Hall, D. G. E., A History of South-East Asia, 4. baskı (London: Macmillan, 1981); archive.org/details/a-history-of-south-east-asia-4th-ed (djvu tam metni bu oturumda okundu), Bölüm Ek I (Rulers of Arakan): «Launggyet dynasty, 17 kings, 1237-1433» | BEYANLI YAKLAŞIKLIK: Kronik listesidir (yazıtla doğrulanmadı). Mrauk U şehri 1430'da kurulur; Arakan merkez bölgesinin vekili olarak yazıldı. · DOGU-500-1281"},{f:"1281-01-01", t:"1785-01-02", d:"arakan"},
     {f:"1785-01-02", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1923-10-29", d:"ingiliz-hindistani"},{f:"1923-10-29",t:"1948-01-04",d:"ingiliz-burma",kaynak:"https://history.state.gov/countries/burma"},{f:"1948-01-04",t:"2000-12-31",d:"myanmar-birmanya",kaynak:"https://history.state.gov/countries/burma (1948-01-04)"}] },

{ ad:"Moulmein (Mawlamyine)", tur:"liman", lat:16.4821, lon:97.6462, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"1057-01-01",d:"thaton-mon",kesinlik:"yil",kaynak:"SAHİP: thaton-mon (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · UFUK SINIR İŞARETİ (0500-01-01): pencere başıdır, kuruluş değil.  | ABİ MERKEZ: Thaton — Hall: 'The Mons in Burma were mainly to the eastward of the Irrawaddy, and their settlements spread as far south as Tavoy' | Hall, D. G. E., A History of South-East Asia, 4. baskı (London: Macmillan, 1981); archive.org/details/a-history-of-south-east-asia-4th-ed (djvu tam metni bu oturumda okundu), Bölüm 6: «The Mons in Burma were mainly to the eastward of the Irrawaddy, and their settlements spread as far south as Tavoy» | Hall, D. G. E., A History of South-East Asia, 4. baskı (London: Macmillan, 1981); archive.org/details/a-history-of-south-east-asia-4th-ed (djvu tam metni bu oturumda okundu), Bölüm 7: «Their principal centre in the latter country was Sudhammavati (Thaton) at the mouth of the River Sittang» | BEYANLI YAKLAŞIKLIK: Moulmein/Martaban kıyısı Mon ülkesi içindedir, ama Moulmein adı kaynakta geçmez; zincir abi merkez Thaton'dan devralındı (kaynak: \"zincir Thaton'dan devralındı\"). · DOGU-500-1281"},{f:"1057-01-01",t:"1281-01-01",d:"pagan",kesinlik:"yil",kaynak:"ABİ MERKEZ: Thaton — Coedès: Thaton'un fethiyle bütün delta Pagan'a teslim oldu; Hall: Anawrahta ve Sawlu Thaton'un çok güneyine de ilerledi. | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-6: «The political result of the conquest of Thaton was the submission of the whole delta» | Hall, D. G. E., A History of South-East Asia, 4. baskı (London: Macmillan, 1981); archive.org/details/a-history-of-south-east-asia-4th-ed (djvu tam metni bu oturumda okundu), Bölüm 6: «Anawrahta and his son, Sawlu, went on to conquer territories far to the south of Thaton» | BEYANLI YAKLAŞIKLIK: zincir Thaton'dan devralındı. · DOGU-500-1281"},{f:"1281-01-01", t:"1287-01-01", d:"pagan"},
     {f:"1287-01-01", t:"1539-01-01", d:"hanthawaddy"},
     {f:"1539-01-01", t:"1740-01-01", d:"toungoo"},
     {f:"1740-01-01", t:"1757-05-06", d:"hanthawaddy"},
     {f:"1757-05-06", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1923-10-29", d:"ingiliz-hindistani"},{f:"1923-10-29",t:"1948-01-04",d:"ingiliz-burma",kaynak:"https://history.state.gov/countries/burma"},{f:"1948-01-04",t:"2000-12-31",d:"myanmar-birmanya",kaynak:"https://history.state.gov/countries/burma (1948-01-04)"}] },

// Tavoy ve Mergui — Tenasserim kıyısı. XIV. yüzyıldan XVIII. yüzyıla
// kadar Siyam'ın Hint Okyanusu kapısıydı: Mergui, Ayutthaya'nın batı
// limanıdır ve 1687'de burada İngiliz-Siyam çatışması yaşandı. Alaungpaya
// 1760'ta ikisini de aldı.
{ ad:"Tavoy (Dawei)", tur:"liman", lat:14.0840, lon:98.1990, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1287-01-01", d:"pagan"},
     {f:"1287-01-01", t:"1373-01-01", d:"hanthawaddy"},
     {f:"1373-01-01", t:"1760-01-01", d:"ayutthaya"},
     {f:"1760-01-01", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1923-10-29", d:"ingiliz-hindistani"},{f:"1923-10-29",t:"1948-01-04",d:"ingiliz-burma",kaynak:"https://history.state.gov/countries/burma"},{f:"1948-01-04",t:"2000-12-31",d:"myanmar-birmanya",kaynak:"https://history.state.gov/countries/burma (1948-01-04)"}] },

{ ad:"Mergui (Myeik)", tur:"liman", lat:12.4361, lon:98.6130, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1287-01-01", d:"pagan"},
     {f:"1287-01-01", t:"1373-01-01", d:"hanthawaddy"},
     {f:"1373-01-01", t:"1760-01-01", d:"ayutthaya"},
     {f:"1760-01-01", t:"1826-02-24", d:"konbaung"},
     {f:"1826-02-24", t:"1923-10-29", d:"ingiliz-hindistani"},{f:"1923-10-29",t:"1948-01-04",d:"ingiliz-burma",kaynak:"https://history.state.gov/countries/burma"},{f:"1948-01-04",t:"2000-12-31",d:"myanmar-birmanya",kaynak:"https://history.state.gov/countries/burma (1948-01-04)"}] },

// Kengtung — Şan platosunun doğu ucu; sawbwa'ları hem Birmanya'ya hem
// Çin'e vergi öderdi. İngiliz döneminde de kendi beyleri yönetti.
{ ad:"Kengtung", tur:"sehir", lat:21.2900, lon:99.6050, g:0, k:1,kd:[{f:"1281-01-01",t:"1923-10-29",k:1,m:"Kengtung"}], d:[],
  s:[{f:"1281-01-01", t:"1923-10-29", d:"san-devletleri"},{f:"1923-10-29",t:"1948-01-04",d:"ingiliz-burma",kaynak:"tsv: ingiliz-burma t=1948-01-04; Britannica 'Shan States' (Federated Shan States, Burma Frontier Areas)"},{f:"1948-01-04",t:"2000-12-31",d:"myanmar-birmanya",kaynak:"Britannica 'Myanmar' / Panglong Anlaşması 1947; Library of Congress Country Studies: Burma"}] },

// ===== 8b. Siyam =====
//
// sukhothai (1238-1438) → ayutthaya (1351-1767) → tonburi (1767-1782) →
// siyam-chakri (1782-1923). Ayutthaya 1569-1584 arasında Toungoo'nun
// tâbii oldu; Naresuan 3 Mayıs 1584'te bağımsızlığı ilân etti. 7 Nisan
// 1767'de Birmanya şehri yaktı ve Ayutthaya bir daha başkent olmadı.

{ ad:"Sukhothai", tur:"sehir", lat:17.0200, lon:99.7030, g:1, k:2,kd:[{f:"1281-01-01",t:"1438-01-01",k:1,m:"Sukhothai"}], d:[],
  s:[{f:"0500-01-01",t:"1000-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"UFUK SINIR İŞARETİ (0500-01-01): pencere başıdır, kuruluş değil.  | BOŞLUK BEYANI: arandı, bulunamadı: Sukhothai bölgesinin 500-1181 arası sahibi: Coedès Khmer kalıntılarının en geç Jayavarman VII'den (1181), 'belki' Suryavarman II'den (1113) beri baskınlığını söyler; daha eski tanık yok (Hall, Coedès, Majumdar arandı). Dvaravati/Lavo bağı kaynakta bu şehir için gösterilmedi. · DOGU-500-1281"},{f:"1000-01-01",t:"1238-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BEYANLI BOŞLUK (arandı, bulunamadı): Sukhothai 1000-1238 sahibi: TDV tayland Tay, Mon, Khmer ve Malay kökenli topluluklar yaşamaktaydı ve bunlar küçük krallık yönetimleri altında Khmer İmparatorluğu’na bağlıydı bölge cümlesidir (Sukhothai adı yok), angkor-kmer'e bağlanmadı f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor). · VERI-MS1-1281"},{f:"1238-01-01",t:"1281-01-01",d:"sukhothai",kesinlik:"yil",kaynak:"TDV tayland: «Budist Sukothai Krallığı diye bilinen bu ilk Tay devleti 1238’de Angkor’u alıp gücünü arttırdı» ; «Kral Rama Khamheng döneminde (1275-1317) Sukothai Krallığı idarî, hukukî ve içtimaî alanda önemli yapılanmalar gerçekleştirdi». BEYANLI YAKLAŞIKLIK: TDV 1238 yılının neyi tarihlediği (devletleşme/Angkor) belirsiz; başlangıç yıl hassasiyeti; 1238 künye f ile uyumlu. · VERI-MS1-1281"},{f:"1281-01-01", t:"1438-01-01", d:"sukhothai"},
     {f:"1438-01-01", t:"1767-04-07", d:"ayutthaya"},
     {f:"1767-04-07", t:"1782-04-06", d:"tonburi"},
     {f:"1782-04-06", t:"2000-12-31", d:"siyam-chakri"}] },

// Ayutthaya — 4 Mart 1351'de kuruldu (kur:), 7 Nisan 1767'de yakıldı ve
// terk edildi (bit:). Sahiplik zinciri 1923'e kadar TAM bırakıldı.
{ ad:"Ayutthaya", tur:"sehir", lat:14.3530, lon:100.5780, g:2, k:1,kd:[{f:"1351-03-04",t:"1767-04-07",k:1,m:"Ayutthaya"}], d:[],
  kur:"1351-03-04", bit:"1767-04-07",
  s:[{f:"1351-03-04", t:"1569-08-08", d:"ayutthaya"},
     {f:"1569-08-08", t:"1584-05-03", d:"toungoo"},
     {f:"1584-05-03", t:"1767-04-07", d:"ayutthaya"},
     {f:"1767-04-07", t:"1782-04-06", d:"tonburi"},
     {f:"1782-04-06", t:"2000-12-31", d:"siyam-chakri"}] },

// Bangkok — Taksin 1767 sonunda Tonburi'yi (nehrin batı yakası) başkent
// yaptı, I. Rama 6 Nisan 1782'de doğu yakaya geçip Bangkok'u kurdu (kur:).
// İki merkez 5 km arayla aynı şehirdir; tek nokta olarak yazıldı.
{ ad:"Bangkok (Tonburi)", tur:"sehir", lat:13.7540, lon:100.5010, g:2, k:2,kd:[{f:"1782-04-06",t:"1923-10-29",k:1,m:"Bangkok (Tonburi)"}], d:[],
  kur:"1767-12-28",
  s:[{f:"1767-12-28", t:"1782-04-06", d:"tonburi"},
     {f:"1782-04-06", t:"2000-12-31", d:"siyam-chakri"}] },

// Chiang Mai — Lan Na krallığının başkenti, 12 Nisan 1296'da kuruldu
// (kur:). Bayinnaung 2 Nisan 1558'de aldı ve Lan Na iki yüz yıl Birmanya
// idaresinde kaldı; 15 Ocak 1774'te Siyam'a geçti.
{ ad:"Chiang Mai", tur:"sehir", lat:18.7880, lon:98.9850, g:1, k:1,kd:[{f:"1296-04-12",t:"1558-04-02",k:1,m:"Chiang Mai"}], d:[],
  kur:"1296-04-12",
  s:[{f:"1296-04-12", t:"1558-04-02", d:"lan-na"},
     {f:"1558-04-02", t:"1752-04-23", d:"toungoo"},
     {f:"1752-04-23", t:"1774-01-15", d:"konbaung"},
     {f:"1774-01-15",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"2000-12-31",d:"siyam-chakri"}] },

// Nakhon Si Thammarat — Malay yarımadasının Siyam tarafındaki kilit
// şehri; Kedah, Patani ve Trengganu üzerindeki Siyam nüfuzu buradan
// yürütülürdü.
{ ad:"Nakhon Si Thammarat", tur:"sehir", lat:8.4320, lon:99.9640, g:0, k:3, d:[],
  s:[{f:"0775-01-01",t:"1230-01-01",d:"srivijaya",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VI-1: «reveals that the Sumatran kingdom had established a foothold on the Malay Peninsula at Ligor» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-7: «Tan-ma-ling (Tambralinga, in the region of Ligor)» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-3: «whose center was at Ligor» | BEYANLI YAKLAŞIKLIK: Ligor/Tambralinga 775 Srivijaya yazıtından 1230 Chandrabhanu bağımsızlığına dek Srivijaya'ya bağımlıdır (Chao Ju-kua 1225 Tan-ma-ling'i San-fo-ch'i bağımlısı sayar); 1025 Chola akını Madamalingam'ı da kapsar; dilim Srivijaya üst egemenliği olarak yazıldı, Tambralinga yerel krallığı bu dilimde adlı sahip değildir. · DOGU-500-1281"},{f:"1230-01-01",t:"1281-01-01",d:"tambralinga",kesinlik:"yil",kaynak:"SAHİP: tambralinga (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-7: «King of Tambralinga (Ligor), belonging to the \"family of the lotus\"» · «This inscription shows every sign of emanating from an independent sovereign.» | ic_not: 1281'de Tambralinga → Sukhothai (mevcut zincir) dikişi: Coedès Thai fethini ~1294 verir (XII-8); mevcut atlas zinciri 1281'de sukhothai ile başlıyor — çelişki RAPORda. · DOGU-500-1281"},{f:"1281-01-01", t:"1438-01-01", d:"sukhothai"},
     {f:"1438-01-01", t:"1767-04-07", d:"ayutthaya"},
     {f:"1767-04-07", t:"1782-04-06", d:"tonburi"},
     {f:"1782-04-06", t:"2000-12-31", d:"siyam-chakri"}] },

// ===== 8c. Laos ve Kamboçya =====
//
// "lan-xang" (1353-1707) Fa Ngum'un kurduğu birleşik Laos krallığıdır;
// 1707'de Luang Prabang, Vientiane ve (1713) Champasak olarak üçe
// bölündü — "laos-kralliklari" bu üçünü kapsar. 3 Ekim 1893 Fransız-Siyam
// antlaşmasıyla Mekong'un doğusu Fransız Çinhindi'ne geçti.
// ⚠️ 1281-1353 arası Muang Sua prensliğidir; ayrı kimlik açılmak yerine
// "lan-xang" başlangıcı 1281'e çekildi ve gerekçesi burada yazıldı —
// bölgeyi Angkor ya da Sukhothai ile boyamak daha büyük bir hata olurdu.

// HAYALET-KUNYE-1008-K · `lan-xang` künyesi 1353-01-01'de başlıyor (kesinlik yil); 1281→1353-01-01 dilimi → `__BOSLUK__`.
//   __BOSLUK__ = künyesi olmayan yerel yapı (Raipur emsali), 'kimsenin değil' DEĞİL; komşuya İTİLMEDİ.
{ ad:"Luang Prabang", tur:"sehir", lat:19.8850, lon:102.1350, g:1, k:1,kd:[{f:"1281-01-01",t:"1893-10-03",k:1,m:"Luang Prabang"}], d:[],
  s:[{f:"1281-01-01", t:"1353-01-01", d:"__BOSLUK__"},
     {f:"1353-01-01", t:"1707-01-01", d:"lan-xang"},
     {f:"1707-01-01", t:"1893-10-03", d:"laos-kralliklari"},
     {f:"1893-10-03", t:"1953-10-22", d:"fransiz-cinhindi"},{f:"1953-10-22",t:"1975-12-02",d:"laos-kralligi",kaynak:"Britannica 'Laos'"},{f:"1975-12-02",t:"2000-12-31",d:"laos-demokratik-halk-cumhuriyeti",kaynak:"Britannica 'Laos' 1975-12-02"}] },

// Vientiane — 1560'ta Lan Xang'ın başkenti oldu; Siyam 1828'de şehri
// yıktı ve krallığı kaldırdı, 1893'te Fransa aldı.
// HAYALET-KUNYE-1008-K · `lan-xang` künyesi 1353-01-01'de başlıyor (kesinlik yil); 1281→1353-01-01 dilimi → `__BOSLUK__`.
//   __BOSLUK__ = künyesi olmayan yerel yapı (Raipur emsali), 'kimsenin değil' DEĞİL; komşuya İTİLMEDİ.
{ ad:"Vientiane", tur:"sehir", lat:17.9750, lon:102.6300, g:1, k:1,kd:[{f:"1281-01-01",t:"1893-10-03",k:1,m:"Vientiane"}], d:[],
  s:[{f:"1281-01-01", t:"1353-01-01", d:"__BOSLUK__"},
     {f:"1353-01-01", t:"1707-01-01", d:"lan-xang"},
     {f:"1707-01-01", t:"1828-11-01", d:"laos-kralliklari"},
     {f:"1828-11-01", t:"1893-10-03", d:"siyam-chakri"},
     {f:"1893-10-03", t:"1953-10-22", d:"fransiz-cinhindi"},{f:"1953-10-22",t:"1975-12-02",d:"laos-kralligi",kaynak:"Britannica 'Laos'"},{f:"1975-12-02",t:"2000-12-31",d:"laos-demokratik-halk-cumhuriyeti",kaynak:"Britannica 'Laos' 1975-12-02"}] },

{ ad:"Champasak", tur:"sehir", lat:14.8920, lon:105.8760, g:0, k:2,kd:[{f:"1713-01-01",t:"1893-10-03",k:1,m:"Champasak"}], d:[],
  kur:"1713-01-01",
  s:[{f:"1713-01-01", t:"1778-01-01", d:"laos-kralliklari"},
     {f:"1778-01-01",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1893-10-03",d:"siyam-chakri"},
     {f:"1893-10-03", t:"1953-10-22", d:"fransiz-cinhindi"},{f:"1953-10-22",t:"1975-12-02",d:"laos-kralligi",kaynak:"Britannica 'Laos'"},{f:"1975-12-02",t:"2000-12-31",d:"laos-demokratik-halk-cumhuriyeti",kaynak:"Britannica 'Laos' 1975-12-02"}] },

// Angkor — Kmer imparatorluğunun başkenti; 1431'de Ayutthaya aldı ve
// merkez güneye, Phnom Penh'e taşındı. Şehir tamamen boşalmadığı (Angkor
// Wat işleyen bir mâbet olarak kaldığı) için bit: YAZILMADI.
// Battambang ile birlikte 1795-1907 arasında Siyam idaresindeydi;
// 23 Mart 1907 antlaşmasıyla Kamboçya'ya iade edildi.
{ ad:"Angkor (Siem Reap)", tur:"sehir", lat:13.4120, lon:103.8670, g:2, k:2,kd:[{f:"1281-01-01",t:"1431-01-01",k:1,m:"Angkor (Siem Reap)"}], d:[],
  s:[{f:"0500-01-01",t:"0550-01-01",d:"funan",kesinlik:"yil",kaynak:"SAHİP: funan (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm V-1: Sui tarihi: «It was originally a vassal kingdom of Funan.» | BEYANLI YAKLAŞIKLIK: Chenla künyesi f=0550'den önce bu çevre Funan'ın üst egemenliğindeydi (Sui tarihi: Chenla 'originally a vassal kingdom of Funan'); yerleşim düzeyinde kesin tanık yok | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı: sahiplik öncesinden sürüyor) · DOGU-500-1281"},{f:"0550-01-01",t:"0802-01-01",d:"chenla",kesinlik:"yil",kaynak:"SAHİP BEYANLI: chenla (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm V-1: Bhavapura «must have been located on the northern shore of the Great Lake»; Bölüm VII-1: «This region, where the first city of Angkor would be erected a century later, had constituted the fief of Bhavapura» | t=0802: Chenla künyesi sonu (devletler.js) ve Jayavarman II'nin efektif iktidarı (Coedès Bölüm VII-1: «we have abundant evidence that the effective beginning of the reign was 802»); Jayavarman II ülkeyi aşamalı fethetti ('had to conquer at least part of the kingdom'); bu yerleşimin tam geçiş günü Angkor-Kmer kümesinde (gdasya2) doğrulanmalı — devam_gerekli · DOGU-500-1281"},{f:"0802-01-01",t:"1000-01-01",d:"angkor-kmer",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VII-1: «we have abundant evidence that the effective beginning of the reign was 802» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VII-1: «Although his effective authority undoubtedly did not extend beyond the region of the Great Lake» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-1: «His authority extended from the region of Chaudoc, where he dedicated a vimana to Siva in the old sanctuary of Phnom Bayang» · «to the region northwest of Ubon» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VII-1: «the \"Roluos group,\" situated some fifteen kilometers southeast of Siem Reap» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VII-1: «which remained the capital of the Khmer empire for 600 years» | BEYANLI YAKLAŞIKLIK: Başkent Hariharalaya (Roluos) → Yasodharapura (889) → Koh Ker (921-~944) → Yasodharapura; Siem Reap/Angkor çevresi Khmer çekirdeğidir. Mevcut zincir 1000'den angkor-kmer ile başlar, dikiş yok. · DOGU-500-1281"},{f:"1000-01-01", t:"1431-01-01", d:"angkor-kmer",kaynak:"[ONCE1281-GERIYE f 1281-01-01 → 1000-01-01] Britannica, «Angkor» (britannica.com/place/Angkor; tarayıcıda açıldı ve okundu 18.10.2026): 'Angkor … served as the capital of the Khmer Empire from the 9th to the 15th centuries.' · 'From the last decade of the 9th century, when King Yashovarman I made Angkor his place of residence, until the early years of the 13th century, the kings of Angkor ruled over a territory that extended …' · 'After the Cham sacked Angkor in 1177' (Britannica yalnız YAĞMA der; sahiplik değişimi yazılmadı) · f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor; edinim günü değil, D210) · ONCE1281-GERIYE"},
     {f:"1431-01-01", t:"1795-01-01", d:"kamboc-kralligi"},
     {f:"1795-01-01", t:"1907-03-23", d:"siyam-chakri"},
     {f:"1907-03-23", t:"1953-11-09", d:"fransiz-cinhindi"},{f:"1953-11-09",t:"1970-10-09",d:"kamboc-kralligi",kaynak:"Britannica 'Cambodia'"},{f:"1970-10-09",t:"1975-04-17",d:"khmer-cumhuriyeti",kaynak:"Britannica 'Khmer Republic'"},{f:"1975-04-17",t:"1979-01-07",d:"demokratik-kampucya",kaynak:"Britannica 'Khmer Rouge'"},{f:"1979-01-07",t:"1993-09-24",d:"kampucya-halk-cumhuriyeti",kaynak:"Britannica 'Cambodia'; LoC Cambodia Country Study (UNTAC atlandi, bkz not)"},{f:"1993-09-24",t:"2000-12-31",d:"kamboc-kralligi",kaynak:"Britannica 'Cambodia' 1993-09-24"}] },

{ ad:"Battambang", tur:"sehir", lat:13.0960, lon:103.2030, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"0550-01-01",d:"funan",kesinlik:"yil",kaynak:"SAHİP: funan (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm V-1: Sui tarihi: «It was originally a vassal kingdom of Funan.» | BEYANLI YAKLAŞIKLIK: Chenla künyesi f=0550'den önce bu çevre Funan'ın üst egemenliğindeydi (Sui tarihi: Chenla 'originally a vassal kingdom of Funan'); yerleşim düzeyinde kesin tanık yok | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı: sahiplik öncesinden sürüyor) · DOGU-500-1281"},{f:"0550-01-01",t:"0802-01-01",d:"chenla",kesinlik:"yil",kaynak:"SAHİP BEYANLI: chenla (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm V-1: «to Mongkolborei west of the Great Lake» | t=0802: Chenla künyesi sonu (devletler.js) ve Jayavarman II'nin efektif iktidarı (Coedès Bölüm VII-1: «we have abundant evidence that the effective beginning of the reign was 802»); Jayavarman II ülkeyi aşamalı fethetti ('had to conquer at least part of the kingdom'); bu yerleşimin tam geçiş günü Angkor-Kmer kümesinde (gdasya2) doğrulanmalı — devam_gerekli · DOGU-500-1281"},{f:"0802-01-01",t:"1281-01-01",d:"angkor-kmer",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VII-1: «we have abundant evidence that the effective beginning of the reign was 802» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VII-1: «Although his effective authority undoubtedly did not extend beyond the region of the Great Lake» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-1: «His authority extended from the region of Chaudoc, where he dedicated a vimana to Siva in the old sanctuary of Phnom Bayang» · «to the region northwest of Ubon» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VII-1: «Prithivinarendra, \"burning like fire the troops of the enemies,\" to whom was entrusted the task of reconquering Malyang, i.e., the region south of Battambang» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-1: «the monuments of Vat Ek and of Baset near Battambang» | BEYANLI YAKLAŞIKLIK: Malyang (Battambang güneyi) II. Jayavarman döneminde yeniden fethedilir; 1182 civarı Malyang isyanı bastırılır. · DOGU-500-1281"},{f:"1281-01-01", t:"1431-01-01", d:"angkor-kmer"},
     {f:"1431-01-01", t:"1795-01-01", d:"kamboc-kralligi"},
     {f:"1795-01-01", t:"1907-03-23", d:"siyam-chakri"},
     {f:"1907-03-23", t:"1953-11-09", d:"fransiz-cinhindi"},{f:"1953-11-09",t:"1970-10-09",d:"kamboc-kralligi",kaynak:"Britannica 'Cambodia'"},{f:"1970-10-09",t:"1975-04-17",d:"khmer-cumhuriyeti",kaynak:"Britannica 'Khmer Republic'"},{f:"1975-04-17",t:"1979-01-07",d:"demokratik-kampucya",kaynak:"Britannica 'Khmer Rouge'"},{f:"1979-01-07",t:"1993-09-24",d:"kampucya-halk-cumhuriyeti",kaynak:"Britannica 'Cambodia'; LoC Cambodia Country Study (UNTAC atlandi, bkz not)"},{f:"1993-09-24",t:"2000-12-31",d:"kamboc-kralligi",kaynak:"Britannica 'Cambodia' 1993-09-24"}] },

// Phnom Penh — 1434'te Kmer başkenti oldu (kur:). Kral Norodom 11 Ağustos
// 1863'te Fransız himayesini kabul etti.
{ ad:"Phnom Penh", tur:"sehir", lat:11.5620, lon:104.8880, g:1, k:1,kd:[{f:"1434-01-01",t:"1923-10-29",k:1,m:"Phnom Penh"}], d:[],
  kur:"1434-01-01",
  s:[{f:"1434-01-01", t:"1863-08-11", d:"kamboc-kralligi"},
     {f:"1863-08-11", t:"1953-11-09", d:"fransiz-cinhindi"},{f:"1953-11-09",t:"1970-10-09",d:"kamboc-kralligi",kaynak:"Britannica 'Cambodia'"},{f:"1970-10-09",t:"1975-04-17",d:"khmer-cumhuriyeti",kaynak:"Britannica 'Khmer Republic'"},{f:"1975-04-17",t:"1979-01-07",d:"demokratik-kampucya",kaynak:"Britannica 'Khmer Rouge'"},{f:"1979-01-07",t:"1993-09-24",d:"kampucya-halk-cumhuriyeti",kaynak:"Britannica 'Cambodia'; LoC Cambodia Country Study (UNTAC atlandi, bkz not)"},{f:"1993-09-24",t:"2000-12-31",d:"kamboc-kralligi",kaynak:"Britannica 'Cambodia' 1993-09-24"}] },

// Oudong — 1618-1866 arası Kamboçya'nın başkenti; Phnom Penh'e 31 km.
{ ad:"Oudong", tur:"sehir", lat:11.8080, lon:104.7440, g:0, k:3, d:[],
  kur:"1618-01-01",
  s:[{f:"1618-01-01", t:"1863-08-11", d:"kamboc-kralligi"},
     {f:"1863-08-11", t:"1953-11-09", d:"fransiz-cinhindi"},{f:"1953-11-09",t:"1970-10-09",d:"kamboc-kralligi",kaynak:"Britannica 'Cambodia'"},{f:"1970-10-09",t:"1975-04-17",d:"khmer-cumhuriyeti",kaynak:"Britannica 'Khmer Republic'"},{f:"1975-04-17",t:"1979-01-07",d:"demokratik-kampucya",kaynak:"Britannica 'Khmer Rouge'"},{f:"1979-01-07",t:"1993-09-24",d:"kampucya-halk-cumhuriyeti",kaynak:"Britannica 'Cambodia'; LoC Cambodia Country Study (UNTAC atlandi, bkz not)"},{f:"1993-09-24",t:"2000-12-31",d:"kamboc-kralligi",kaynak:"Britannica 'Cambodia' 1993-09-24"}] },

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
{ ad:"Hanoi (Thăng Long)", tur:"sehir", lat:21.0280, lon:105.8340, g:2, k:1,kd:[{f:"1281-01-01",t:"1400-03-01",k:1,m:"Hanoi (Thăng Long)"},{f:"1428-01-01",t:"1789-01-01",k:1,m:"Hanoi (Thăng Long)"},{f:"1859-02-17",t:"1923-10-29",k:1,m:"Hanoi (Thăng Long)"}], d:[],
  s:[
     {f:"0502-01-01",t:"0544-01-01",d:"liang-guney",kesinlik:"yil",kaynak:"SAHİP BEYANLI: liang-guney (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Sima Guang, Zizhi tongjian, juan 158 (Hu Sanxing notlu; zh.wikisource.org/wiki/資治通鑒_(胡三省音注)/卷158, okundu), Datong 7 (541): Jiaozhou valisi Liang'dan Wulin Hou Xiao Zi: 「會交州刺史武林侯諮以刻暴失眾心」; ayaklanma sonrası Xiao Zi Guangzhou'ya kaçtı → Liang'ın fiilî hâkimiyeti 541-544 arasında Li Ben'e geçti ama 'Yue imparatoru' ilanı 544'tür (ZZ 158, Datong 10 ilk ay: 「春，正月，李賁自稱越帝」). BEYANLI YAKLAŞIKLIK: 541-544 arası isyanın fiilî kontrolü; resmî devlet kimliği (van-xuan f=0544) 544'te başlar. Liang 502'de kurulur (devletler.js) · DOGU-500-1281"},
     {f:"0544-01-01",t:"0546-01-01",d:"van-xuan",kesinlik:"yil",kaynak:"SAHİP BEYANLI: van-xuan (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Sima Guang, Zizhi tongjian, juan 158 (Hu Sanxing notlu; zh.wikisource.org/wiki/資治通鑒_(胡三省音注)/卷158, okundu), Datong 10 (544): 「春，正月，李賁……自稱越帝，置百官，改元大……德。」（Zhang Jiao/Kongben nüshalarında 「天」德; Toàn thư: «niên hiệu Thiên-Đức»） · Sima Guang, Zizhi tongjian, juan 158 (Hu Sanxing notlu; zh.wikisource.org/wiki/資治通鑒_(胡三省音注)/卷158, okundu) notu: Jiaozhou merkezi Long Biên (Hanoi KD / Bắc Ninh) · Ngô Sĩ Liên vd., Đại Việt sử ký toàn thư, Tập II, Cuốn 4, bölümler: Đời Tiền Lý, Đời Triệu Việt Vương, Đời Hậu Lý (Mạc Bảo Thần çevirisi; vi.wikisource.org Trang:DaiVietsukytoanthu2.pdf/55-68, okundu), sayfa 55 dipnot (4): «huyện Long biên có đền Vạn Xuân» (Vạn Xuân sarayı Long Biên'de) · DOGU-500-1281"},
     {f:"0546-01-01",t:"0550-01-01",d:"liang-guney",kesinlik:"yil",kaynak:"SAHİP BEYANLI: liang-guney (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Sima Guang, Zizhi tongjian, juan 159 (Hu Sanxing notlu; zh.wikisource.org/wiki/資治通鑒_(胡三省音注)/卷159, okundu), Zhongdatong 1 (546): 「春，正月，癸丑，楊㬓等克嘉寧城，李賁奔新昌獠中」 · 「賁衆大潰，竄入屈獠洞中」 · Sima Guang, Zizhi tongjian, juan 161 (Hu Sanxing notlu; zh.wikisource.org/wiki/資治通鑒_(胡三省音注)/卷161, okundu), Taiqing 2 (548): 「屈獠洞斬李賁……陳霸先帥衆討平之。詔以霸先爲西江督護、高要太守、督七郡軍事」. BEYANLI YAKLAŞIKLIK: Jianning'in alınışı (546) Long Biên'in elden gittiğine delil sayıldı; Long Biên'in düştüğü gün kaynakta yok · DOGU-500-1281"},
     {f:"0550-01-01",t:"0571-01-01",d:"triyu-viet-vuong",kesinlik:"yil",kaynak:"SAHİP: triyu-viet-vuong (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Ngô Sĩ Liên vd., Đại Việt sử ký toàn thư, Tập II, Cuốn 4, bölümler: Đời Tiền Lý, Đời Triệu Việt Vương, Đời Hậu Lý (Mạc Bảo Thần çevirisi; vi.wikisource.org Trang:DaiVietsukytoanthu2.pdf/55-68, okundu), sayfa 59: «Nhà vua vào thành Long-Biên, ở đó.» · sayfa 57: «Đóng đô ở Long-Biên sau dời sang Vũ-Ninh.» · sayfa 60-61: Lý Phật Tử ile sınır «bãi Quân-Thần» (Từ Liêm). BEYANLI YAKLAŞIKLIK: 557 sınırı Từ Liêm'de (Hanoi'nin batısı) çizildi; Hanoi merkezi sınırın doğusunda sayıldı · DOGU-500-1281"},
     {f:"0571-01-01",t:"0602-01-01",d:"van-xuan",kesinlik:"yil",kaynak:"SAHİP BEYANLI: van-xuan (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Ngô Sĩ Liên vd., Đại Việt sử ký toàn thư, Tập II, Cuốn 4, bölümler: Đời Tiền Lý, Đời Triệu Việt Vương, Đời Hậu Lý (Mạc Bảo Thần çevirisi; vi.wikisource.org Trang:DaiVietsukytoanthu2.pdf/55-68, okundu), sayfa 66: «Tân-Mão, năm đầu ... (571) ... Đóng đô ở Ô-Diên, sau dời sang Phong-Châu.» · sayfa 68: «Nhâm-Tuất, năm thứ ba mươi hai ... (602) nhà vua sai con anh là Đại-quyền giữ thành Long-Biên» · Sima Guang, Zizhi tongjian, juan 179 (Hu Sanxing notlu; zh.wikisource.org/wiki/資治通鑒_(胡三省音注)/卷179, okundu): 「遣其兄子大權據龍編城」 · DOGU-500-1281"},
     {f:"0602-01-01",t:"0618-01-01",d:"sui",kesinlik:"yil",kaynak:"SAHİP BEYANLI: sui (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Ngô Sĩ Liên (der.), Đại Việt sử ký toàn thư, Tập II (vi.wikisource.org, Trang:DaiVietsukytoanthu2.pdf/68, bu oturumda okundu), Cuốn V (Đời thuộc Tùy và Đường): «Dương-Tố bên Tùy tiến cử viên Thứ sử qua châu là Lưu-Phương người ở Trường an» | ic_not: sui künyesi t=0618; Sui valisi Khâu Hòa 622'de Tang'a bağlanana dek bölgede kaldı (aşağıdaki Tang dilimi 618'den; 618-622 beyanlı) · DOGU-500-1281"},
     {f:"0618-01-01",t:"0906-01-01",d:"tang",kesinlik:"yil",kaynak:"SAHİP: tang (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Ngô Sĩ Liên (der.), Đại Việt sử ký toàn thư, Tập II (vi.wikisource.org, Trang:DaiVietsukytoanthu2.pdf/75,77, bu oturumda okundu), Cuốn V: «Mậu Dần,— năm đầu hiệu Vũ-Đức, đời Cao-Tổ Lý-Uyên bên Đường (618)» · «Năm ấy vua Đường đổi Giao-châu, gọi là An-nam Đô-hộ-phủ» | BEYANLI YAKLAŞIKLIK: Toàn thư An Nam Đô-hộ-phủ'nu 622 yazar (K.Đ.V.S. 679); 618-622 arası Sui valisi Khâu Hòa Tang'a bağlanana dek bağımsız-nominal; yerleşim beyanlı olarak Tang'a yazıldı. Tang protektorası ortası (Nanzhao 863 baskını, Gao Pian 866 vd.) bu dilimde ayrıca ayrılmadı. · DOGU-500-1281"},
     {f:"0906-01-01",t:"0930-01-01",d:"khuc-tu-tri",kesinlik:"ay",kaynak:"SAHİP: khuc-tu-tri (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Sima Guang, Zizhi tongjian, juan 265 (Hu Sanxing notlu; zh.wikisource.org, bu oturumda okundu), Tianyou 3 (906) Ocak: «加靜海節度使曲承裕同平章事» | Ngô Sĩ Liên (der.), Đại Việt sử ký toàn thư, Tập II (vi.wikisource.org, Trang:DaiVietsukytoanthu2.pdf/127,128, bu oturumda okundu), Cuốn V (Nam Bắc phân tranh): «Người Giao-châu là Khúc-Hiệu, giữ châu trì, tự xưng là Tiết-độ sứ» · «Khúc-thừa-Mỹ sai sứ sang Lương, xin cờ tiết cùng lưỡi việt» | ic_not: künye f=0905 (ms1); ZZ 265'te yalnız 906 Ocak Tang tanıması okundu, 905 doğrulanamadı. Khúc Thừa Dụ'nun fiilen ne zaman iktidara geldiği kaynakta yok. · DOGU-500-1281"},
     {f:"0930-01-01",t:"0931-01-01",d:"guney-han-10krallik",kesinlik:"yil",kaynak:"SAHİP: guney-han-10krallik (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Sima Guang, Zizhi tongjian, juan 277 (Hu Sanxing notlu; zh.wikisource.org, bu oturumda okundu), Changxing 1 (930): «漢主遣其將梁克貞、李守鄘攻交州，拔之，執靜海節度使曲承美以歸» | Taylor, K. W., A History of the Vietnamese (Cambridge University Press, 2013); archive.org/details/cambridge-concise-histories-k.-w.-taylor-a-history-of-the-vietnamese-cambridge-university-press-2013 (djvu tam metni bu oturumda okundu), Bölüm 2 (The provincial era): «when Min fell apart into civil war in 930, Southern Han immediately took the opportunity to attack An Nam» · «Khuc Thua My was taken into custody and removed to the north» | ic_not: ÇELİŞKİ: Toàn thư aynı olayı Quý-Vị 923 yazar (\"bắt được Tiết-độ-sứ là Thừa-Mỹ đem về\"); ZZ ve Taylor 930. · DOGU-500-1281"},
     {f:"0931-01-01",t:"0939-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip duong-dinh-nghe (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"duong-dinh-nghe\" geri yazılır) · Taylor, K. W., A History of the Vietnamese (Cambridge University Press, 2013); archive.org/details/cambridge-concise-histories-k.-w.-taylor-a-history-of-the-vietnamese-cambridge-university-press-2013 (djvu tam metni bu oturumda okundu), Bölüm 2: «In 931, Duong Dinh Nghe marched his soldiers north to Dai La, expelled the Southern Han officials with their garrison» | Sima Guang, Zizhi tongjian, juan 281 (Hu Sanxing notlu; zh.wikisource.org, bu oturumda okundu), Tianfu 2 (937) / 938: «交州將皎公羨殺安南節度使楊廷藝而代之» | Taylor, K. W., A History of the Vietnamese (Cambridge University Press, 2013); archive.org/details/cambridge-concise-histories-k.-w.-taylor-a-history-of-the-vietnamese-cambridge-university-press-2013 (djvu tam metni bu oturumda okundu), Bölüm 2: «in 937, Kieu Cong Tien, a leader of Phong, killed him» | ic_not: dilim künye t=0937'yi 0939'a uzatır (Kiều Công Tiễn 937-938 iktidarı Dương'ın devamı sayıldı; Ngô Quyền Aralık 938'de onu öldürdü). Künye t: 0937→0939 önerisi. Güney Han gün yılı ZZ 930-sonu / Tang yıllıkları 931 (Hu Sanxing notu). · DOGU-500-1281"},
     {f:"0939-01-01",t:"0966-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip ngo-hanedani (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"ngo-hanedani\" geri yazılır) · Ngô Sĩ Liên (der.), Đại Việt sử ký toàn thư, Tập II (vi.wikisource.org, Trang:DaiVietsukytoanthu2.pdf/137,138, bu oturumda okundu), Cuốn V (Ngô): «mùa Xuân, Vương mới xưng vương, lập Dương thị làm vương hậu» · «Tam-Kha cướp ngôi» | Taylor, K. W., A History of the Vietnamese (Cambridge University Press, 2013); archive.org/details/cambridge-concise-histories-k.-w.-taylor-a-history-of-the-vietnamese-cambridge-university-press-2013 (djvu tam metni bu oturumda okundu), Bölüm 2: «took the step of entering the realm of jostling post-Tang states by claiming royal status» · «he set his capital north of the Red River at the ancient site of Co Loa» | ic_not: künye t=0965; Toàn thư Hậu Ngô Vương'un ölümünü 965 verir ama sứ quân yılını 966 sayar → dilim 966'ya uzatıldı; Dương Tam Kha 945-950 gasp dönemi aynı dilimde (Ngô soyundan kopuk). Künye t önerisi 0965→0966. · DOGU-500-1281"},
     {f:"0966-01-01",t:"0968-01-01",d:"12-su-quan",kesinlik:"yil",kaynak:"SAHİP: 12-su-quan (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Ngô Sĩ Liên (der.), Đại Việt sử ký toàn thư, Tập II (vi.wikisource.org, Trang:DaiVietsukytoanthu2.pdf/147,148, bu oturumda okundu), Cuốn V (Ngô sứ quân): «Nam Tấn vương mất, các anh hùng đua nhau nổi lên, ai nấy đều chiếm giữ quận ấp, tự làm chúa một miền» · «Lý-Khuê, xưng là Lý Lãng Công, giữ Siêu-Loại» · «Đỗ Cảnh Thạc, xưng là Đỗ Cảnh Công, giữ sông Đỗ-Động» · «mười hai sứ quân thi sức, không ai coi được ai» | BEYANLI YAKLAŞIKLIK: Hanoi (Đại La) özel olarak hiçbir sứ quân'a yazılmaz; çevresinde Đỗ Động (Cảnh Thạc) ve Siêu Loại (Lý Khuê) güçleri vardır, bölge 12 Sứ Quân kimliğine yazıldı. · DOGU-500-1281"},
     {f:"0968-01-01",t:"0980-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: sahip dinh (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"dinh\" geri yazılır) · Taylor, K. W., A History of the Vietnamese (Cambridge University Press, 2013); archive.org/details/cambridge-concise-histories-k.-w.-taylor-a-history-of-the-vietnamese-cambridge-university-press-2013 (djvu tam metni bu oturumda okundu), Bölüm 2: «Dinh Bo Linh built up his forces, allied with neighboring strongmen along the lower Red River, and attacked those in the upper plain who resisted him» | Ngô Sĩ Liên (der.), Đại Việt sử ký toàn thư, Tập II (vi.wikisource.org, Trang:DaiVietsukytoanthu2.pdf/148, bu oturumda okundu), Cuốn V (Ngô sứ quân): «mười hai sứ quân thi sức, không ai coi được ai» | ic_not: ÇELİŞKİ: künye f=0968/t=0979 (ms1); Taylor king list \"Dinh Bo Linh 965-979\"; Toàn thư 967 girişinde sứ quân'ların tek tek teslimini yazar. 968 künye değeri (atlas) — bu dilim 968'den (künye f). Dinh Bo Linh 979/980'de öldürüldü, Taylor haberi 980 verir; dilim sonu 980. · DOGU-500-1281"},
     {f:"0980-01-01",t:"1009-01-01",d:"tien-le-hanedani",kesinlik:"yil",kaynak:"Taylor, K. W., A History of the Vietnamese (Cambridge University Press, 2013); archive.org/details/cambridge-concise-histories-k.-w.-taylor-a-history-of-the-vietnamese-cambridge-university-press-2013 (djvu tam metni bu oturumda okundu), Bölüm 2: «A courtier who reportedly had visions of grandeur stabbed Dinh Bo Linh and his eldest son to death in their sleep.» · «A brief struggle for power was quickly resolved in favor of Le Hoan» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-2: «In the following year, a palace intrigue brought a high dignitary named Le Hoan to the throne of Dai Co Viet.» | ic_not: Coedès saray entrikasını 980, Taylor 980 haberi; Hanoi (Đại La) Hoa Lư başkentli Đinh-Lê devletinin ovasında. · DOGU-500-1281"},
     {f:"1009-01-01",t:"1010-01-01",d:"ly-hanedani",kesinlik:"yil",kaynak:"Taylor, K. W., A History of the Vietnamese (Cambridge University Press, 2013); archive.org/details/cambridge-concise-histories-k.-w.-taylor-a-history-of-the-vietnamese-cambridge-university-press-2013 (djvu tam metni bu oturumda okundu), Bölüm 2 (Ly Cong Uan): «Two days after Le Dinh died in late 1009, Ly Cong Uan became king, reportedly by general acclamation.» · «Within a year, Hoa Lu was abandoned.» · «The royal court relocated to the site of Dai La.» | ic_not: Le Dinh 1009 sonunda öldü; dilim künye f=1009-01-01 ile hizalandı (kesin gün Taylor'da yok). · DOGU-500-1281"},
     {f:"1010-01-01",t:"1225-01-01",d:"ly-hanedani",kesinlik:{f:"yil",t:"yil"},kaynak:"Britannica, «Hanoi» (britannica.com/place/Hanoi; tarayıcıda açıldı ve okundu 18.10.2026): 'In 1010 Ly Thai To, the first ruler of the Ly dynasty (1009–1225) of Vietnam, chose the site of Hanoi—then called Thang Long (“Rising Dragon”)—for his capital. Thang Long remained the main capital of Vietnam until 1802' · Britannica «Tran dynasty»: 'Later Ly dynasty (1009–1225)' · ÖNCESİ (1000-1010 Đại La/Hoa Lư dönemi) yazılmadı: şehrin başkent oluşu 1010 · ONCE1281-GERIYE"},
     {f:"1225-01-01", t:"1400-03-01", d:"tran-hanedani",kaynak:"[ONCE1281-GERIYE f 1281-01-01 → 1225-01-01] Britannica, «Tran dynasty» (britannica.com/topic/Tran-dynasty; tarayıcıda açıldı ve okundu 18.10.2026): 'It was succeeded, after a period of civil strife, by a new dynasty called the Tran, which reigned from 1225 to 1400.' · 'The Tran dynastic capital at Hanoi was sacked in 1257' · ONCE1281-GERIYE"},
     {f:"1400-03-01", t:"1407-06-16", d:"ho-hanedani"},
     {f:"1407-06-16",t:"1427-11-12",d:"ming-annam-idaresi",kesinlik:{f:"gun",t:"gun"},kaynak:"ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 甲子 (永樂五年五月) → Jülyen 1407-06-16 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13); 1582 öncesi gün Jülyen kalır. Mingshi, juan 6 «Chengzu ji 2» (zh.wikisource.org/wiki/明史/卷6, okundu): «五月甲子：張輔擒黎季犛、黎蒼獻京師，安南平» ; «六月癸未：以安南平，詔天下。置交阯布政司» (癸未 = Jülyen 1407-07-05, Jiaozhi eyalet idaresi ilanı) · Mingshi, juan 321 «Waiguo 2: Annam» (okundu): «五月獲季犛及偽太子於高望山，安南盡平…六月朔，詔告天下，改安南為交阯，設三司» | BEYANLI YAKLAŞIKLIK: dönem başı Hồ hanedanının sonu olan yakalanma kaydıdır (1407-06-16); Ming eyalet idaresinin ilanı 1407-07-05. Hồ'nin atlastaki eski bitişi 06-17'ydi, 06-16'ya çekildi. · ASYA-ZINCIR-1024 (F2)"},
     {f:"1427-11-12",t:"1428-01-03",d:"__BOSLUK__",kesinlik:{f:"gun",t:"yil"},kaynak:"BOŞLUK BEYANI: arandı (Mingshi juan 9 «Xuanzong ji» + juan 321), bulunamadı: ic_not_takvim: Çin ay-güneş takvimi ganzhi gün adı 戊寅 (宣德二年冬十月) → Jülyen 1427-11-12 (JDN hesabı; sınama: 乙卯 = 220-11-25, 丁酉 = 311-07-13); 1582 öncesi gün Jülyen kalır. Mingshi, juan 9 (zh.wikisource.org/wiki/明史/卷9, okundu): «冬十月戊寅：王通棄交阯，與黎利盟» ve juan 321: «通已棄交阯，由陸路還廣西» — Ming idaresi bu kayıt gününde sona erdi; Lê hanedanının Hanoi'deki başlangıcı (atlasta 1428-01-03) için bu pakette bağımsız kaynak okunmadı, aradaki dilimin sahibi yazılmadı (kimsenin değil DEĞİL, araştırılmadı da DEĞİL: kaynak Ming çekilişini kaydeder, ardılın günü okunmadı). · ASYA-ZINCIR-1024 (F2)"},
     {f:"1428-01-03", t:"1527-06-15", d:"le-hanedani"},
     {f:"1527-06-15", t:"1592-01-01", d:"mac-hanedani"},
     {f:"1592-01-01", t:"1786-07-21", d:"le-hanedani"},
     {f:"1786-07-21", t:"1802-06-20", d:"tay-son"},
     {f:"1802-06-20", t:"1883-08-25", d:"nguyen-hanedani"},
     {f:"1883-08-25", t:"1954-07-21", d:"fransiz-cinhindi"},
     {f:"1954-07-21",t:"1975-04-30",d:"guney-vietnam",kaynak:"Britannica 'South Vietnam'; Office of the Historian"},
     {f:"1975-04-30",t:"2000-12-31",d:"vietnam-dc",kaynak:"Britannica 'Fall of Saigon' 1975-04-30"}] },

// Cao Bằng — Mạc hânedanı Thăng Long'u kaybettikten sonra 1592-1677
// arasında burada, Çin sınırında tutundu. Vietnam'ın seksen beş yıl
// boyunca ikiye bölünmüş olduğunu haritada gösteren tek noktadır.
{ ad:"Cao Bằng", tur:"kale", lat:22.6660, lon:106.2580, g:0, k:2,kd:[{f:"1527-06-15",t:"1677-01-01",k:1,m:"Cao Bằng"}], d:[],
  s:[{f:"1281-01-01", t:"1400-03-01", d:"tran-hanedani"},
     {f:"1400-03-01", t:"1407-06-17", d:"ho-hanedani"},
     {f:"1407-06-17", t:"1428-01-03", d:"ming-hanedani"},
     {f:"1428-01-03", t:"1527-06-15", d:"le-hanedani"},
     {f:"1527-06-15", t:"1677-01-01", d:"mac-hanedani"},
     {f:"1677-01-01", t:"1786-07-21", d:"le-hanedani"},
     {f:"1786-07-21", t:"1802-06-20", d:"tay-son"},
     {f:"1802-06-20", t:"1883-08-25", d:"nguyen-hanedani"},
     {f:"1883-08-25", t:"1954-07-21", d:"fransiz-cinhindi"},{f:"1954-07-21",t:"1975-04-30",d:"guney-vietnam",kaynak:"Britannica 'South Vietnam'; Office of the Historian"},{f:"1975-04-30",t:"2000-12-31",d:"vietnam-dc",kaynak:"Britannica 'Fall of Saigon' 1975-04-30"}] },

{ ad:"Lạng Sơn", tur:"kale", lat:21.8530, lon:106.7610, g:0, k:4, d:[],
  s:[{f:"1281-01-01", t:"1400-03-01", d:"tran-hanedani"},
     {f:"1400-03-01", t:"1407-06-17", d:"ho-hanedani"},
     {f:"1407-06-17", t:"1428-01-03", d:"ming-hanedani"},
     {f:"1428-01-03", t:"1527-06-15", d:"le-hanedani"},
     {f:"1527-06-15", t:"1592-01-01", d:"mac-hanedani"},
     {f:"1592-01-01", t:"1786-07-21", d:"le-hanedani"},
     {f:"1786-07-21", t:"1802-06-20", d:"tay-son"},
     {f:"1802-06-20", t:"1883-08-25", d:"nguyen-hanedani"},
     {f:"1883-08-25", t:"1954-07-21", d:"fransiz-cinhindi"},{f:"1954-07-21",t:"1975-04-30",d:"guney-vietnam",kaynak:"Britannica 'South Vietnam'; Office of the Historian"},{f:"1975-04-30",t:"2000-12-31",d:"vietnam-dc",kaynak:"Britannica 'Fall of Saigon' 1975-04-30"}] },

// Huế (Phú Xuân) — 1306'da Champa'dan Đại Việt'e çeyiz olarak geçen iki
// vilâyetin içindedir. Nguyễn beyleri 1687'de burayı merkez yaptı;
// Gia Long 1802'de birleşik Vietnam'ın başkenti ilân etti. 6 Haziran
// 1884 Patenôtre Antlaşması himayeyi kesinleştirdi.
{ ad:"Huế (Phú Xuân)", tur:"sehir", lat:16.4630, lon:107.5850, g:2, k:1,kd:[{f:"1558-01-01",t:"1923-10-29",k:1,m:"Huế (Phú Xuân)"}], d:[],
  s:[{f:"0500-01-01",t:"1000-01-01",d:"linyi-champa",kesinlik:"yil",kaynak:"SAHİP BEYANLI: linyi-champa (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VI-6: «Until that time, the heart of the Cham kingdom had been located at Thua-thien and then at Quang-nam.» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm V-2: Çinliler 446'da Cham başkentini aldı: «Another battle delivered the capital, situated in the region of Hue, to the Chinese» | BEYAN: Champa/Lin-yi/Huan-wang/Chan-ch'eng adları aynı polity'nin Çince adlarıdır; yerleşim sahipliği polity çekirdeğine göre atanmıştır | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı: sahiplik öncesinden sürüyor) · DOGU-500-1281"},{f:"1000-01-01",t:"1145-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-2: «finally abandoned this extremely vulnerable capital in the year 1000 and established himself at Vijaya, in the region of Binh-dinh» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-2: «probably in modern Thifa-thien, the Chams were routed» | BEYANLI YAKLAŞIKLIK: Huế (Thừa Thiên) çevresinin 1000-1281 Cham sahipliği Coedès'te yalnız 1044 muharebesi ve 1069 sınır (Quang-binh/Quang-tri'ye kadar kayıp) üzerinden dolaylıdır; Huế'nin 1306'ya dek Champa'da kaldığı mevcut zincirle tutarlıdır. · DOGU-500-1281"},{f:"1145-01-01",t:"1149-01-01",d:"angkor-kmer",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-5: «The Khmer occupation of the northern part of Champa, with its capital at Vijaya (Binh-dinh), lasted until 1149.» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-6: «Since the capital and the greater part of the country were in the hands of the Khmers» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-5: «In 1145 he invaded Champa, seized Vijaya, and made himself master of the kingdom.» | ic_not: Coedès \"kuzey Champa\" der; yerleşim bu bölgede varsayıldı | BEYANLI YAKLAŞIKLIK: Huế (Thừa Thiên) çevresinin 1000-1281 Cham sahipliği Coedès'te yalnız 1044 muharebesi ve 1069 sınır (Quang-binh/Quang-tri'ye kadar kayıp) üzerinden dolaylıdır; Huế'nin 1306'ya dek Champa'da kaldığı mevcut zincirle tutarlıdır. · DOGU-500-1281"},{f:"1149-01-01",t:"1203-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-6: «Immediately after reconquering Vijaya, he had himself crowned there.» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-2: «probably in modern Thifa-thien, the Chams were routed» | BEYANLI YAKLAŞIKLIK: Huế (Thừa Thiên) çevresinin 1000-1281 Cham sahipliği Coedès'te yalnız 1044 muharebesi ve 1069 sınır (Quang-binh/Quang-tri'ye kadar kayıp) üzerinden dolaylıdır; Huế'nin 1306'ya dek Champa'da kaldığı mevcut zincirle tutarlıdır. · DOGU-500-1281"},{f:"1203-01-01",t:"1220-01-01",d:"angkor-kmer",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-1: «From 1203 to 1220, Champa was a Khmer province» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-5: «\"the Khmers went to the sacred country and the people of Champa» | BEYANLI YAKLAŞIKLIK: Huế (Thừa Thiên) çevresinin 1000-1281 Cham sahipliği Coedès'te yalnız 1044 muharebesi ve 1069 sınır (Quang-binh/Quang-tri'ye kadar kayıp) üzerinden dolaylıdır; Huế'nin 1306'ya dek Champa'da kaldığı mevcut zincirle tutarlıdır. · DOGU-500-1281"},{f:"1220-01-01",t:"1281-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-5: «by the coronation, under the name of Jaya Paramesvaravarman» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-2: «probably in modern Thifa-thien, the Chams were routed» | BEYANLI YAKLAŞIKLIK: Huế (Thừa Thiên) çevresinin 1000-1281 Cham sahipliği Coedès'te yalnız 1044 muharebesi ve 1069 sınır (Quang-binh/Quang-tri'ye kadar kayıp) üzerinden dolaylıdır; Huế'nin 1306'ya dek Champa'da kaldığı mevcut zincirle tutarlıdır. · DOGU-500-1281"},{f:"1281-01-01", t:"1306-01-01", d:"campa"},
     {f:"1306-01-01", t:"1400-03-01", d:"tran-hanedani"},
     {f:"1400-03-01", t:"1407-06-17", d:"ho-hanedani"},
     {f:"1407-06-17", t:"1428-01-03", d:"ming-hanedani"},
     {f:"1428-01-03", t:"1558-01-01", d:"le-hanedani"},
     {f:"1558-01-01", t:"1775-02-01", d:"nguyen-beyligi"},
     {f:"1775-02-01", t:"1786-06-01", d:"le-hanedani"},
     {f:"1786-06-01", t:"1801-06-15", d:"tay-son"},
     {f:"1801-06-15", t:"1884-06-06", d:"nguyen-hanedani"},
     {f:"1884-06-06", t:"1954-07-21", d:"fransiz-cinhindi"},{f:"1954-07-21",t:"1975-04-30",d:"guney-vietnam",kaynak:"Britannica 'South Vietnam'; Office of the Historian"},{f:"1975-04-30",t:"2000-12-31",d:"vietnam-dc",kaynak:"Britannica 'Fall of Saigon' 1975-04-30"}] },

// Hội An (Faifo) — XVI-XVIII. yüzyılın en canlı uluslararası limanı;
// Japon, Çinli, Portekizli ve Hollandalı tüccarların mahalleleri vardı.
{ ad:"Hội An (Faifo)", tur:"liman", lat:15.8800, lon:108.3350, g:1, k:3, d:[],
  s:[{f:"0500-01-01",t:"1000-01-01",d:"linyi-champa",kesinlik:"yil",kaynak:"SAHİP BEYANLI: linyi-champa (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm V-2: Champa'nın Tra-kieu/Mi-son/Quang-nam çekirdeği: «multiply the religious buildings in the cirque of Mi-son, at Tra-kieu, and in various other places in Quang-nam» | BEYAN: Champa/Lin-yi/Huan-wang/Chan-ch'eng adları aynı polity'nin Çince adlarıdır; yerleşim sahipliği polity çekirdeğine göre atanmıştır | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı: sahiplik öncesinden sürüyor) · DOGU-500-1281"},{f:"1000-01-01",t:"1145-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-2: «finally abandoned this extremely vulnerable capital in the year 1000 and established himself at Vijaya, in the region of Binh-dinh» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-2: «restoring Champapura and Simhapura (in Quang-nam)» | BEYANLI YAKLAŞIKLIK: Quang Nam (Amaravati); 1145-49 Khmer dilimi beyanlı yaklaşıklık (Amaravati 1151'de boyunduruk altına alındı). · DOGU-500-1281"},{f:"1145-01-01",t:"1149-01-01",d:"angkor-kmer",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-5: «The Khmer occupation of the northern part of Champa, with its capital at Vijaya (Binh-dinh), lasted until 1149.» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-6: «Since the capital and the greater part of the country were in the hands of the Khmers» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-5: «In 1145 he invaded Champa, seized Vijaya, and made himself master of the kingdom.» | ic_not: Coedès \"kuzey Champa\" der; yerleşim bu bölgede varsayıldı | BEYANLI YAKLAŞIKLIK: Quang Nam (Amaravati); 1145-49 Khmer dilimi beyanlı yaklaşıklık (Amaravati 1151'de boyunduruk altına alındı). · DOGU-500-1281"},{f:"1149-01-01",t:"1203-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-6: «Immediately after reconquering Vijaya, he had himself crowned there.» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-2: «restoring Champapura and Simhapura (in Quang-nam)» | BEYANLI YAKLAŞIKLIK: Quang Nam (Amaravati); 1145-49 Khmer dilimi beyanlı yaklaşıklık (Amaravati 1151'de boyunduruk altına alındı). · DOGU-500-1281"},{f:"1203-01-01",t:"1220-01-01",d:"angkor-kmer",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-1: «From 1203 to 1220, Champa was a Khmer province» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-5: «\"the Khmers went to the sacred country and the people of Champa» | BEYANLI YAKLAŞIKLIK: Quang Nam (Amaravati); 1145-49 Khmer dilimi beyanlı yaklaşıklık (Amaravati 1151'de boyunduruk altına alındı). · DOGU-500-1281"},{f:"1220-01-01",t:"1281-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-5: «by the coronation, under the name of Jaya Paramesvaravarman» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-2: «restoring Champapura and Simhapura (in Quang-nam)» | BEYANLI YAKLAŞIKLIK: Quang Nam (Amaravati); 1145-49 Khmer dilimi beyanlı yaklaşıklık (Amaravati 1151'de boyunduruk altına alındı). · DOGU-500-1281"},{f:"1281-01-01", t:"1471-03-02", d:"campa"},
     {f:"1471-03-02", t:"1558-01-01", d:"le-hanedani"},
     {f:"1558-01-01", t:"1775-02-01", d:"nguyen-beyligi"},
     {f:"1775-02-01", t:"1786-06-01", d:"le-hanedani"},
     {f:"1786-06-01", t:"1802-06-01", d:"tay-son"},
     {f:"1802-06-01", t:"1884-06-06", d:"nguyen-hanedani"},
     {f:"1884-06-06", t:"1954-07-21", d:"fransiz-cinhindi"},{f:"1954-07-21",t:"1975-04-30",d:"guney-vietnam",kaynak:"Britannica 'South Vietnam'; Office of the Historian"},{f:"1975-04-30",t:"2000-12-31",d:"vietnam-dc",kaynak:"Britannica 'Fall of Saigon' 1975-04-30"}] },

// Đà Nẵng (Tourane) — Fransız müdahalesi 1 Eylül 1858'de burada başladı;
// 1888'de doğrudan Fransız toprağı (concession) oldu. Hội An'a 22 km.
{ ad:"Đà Nẵng (Tourane)", tur:"liman", lat:16.0540, lon:108.2020, g:1, k:3, d:[],
  s:[{f:"0500-01-01",t:"1000-01-01",d:"linyi-champa",kesinlik:"yil",kaynak:"SAHİP BEYANLI: linyi-champa (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VII-2: «a new dynasty reigning in the north, at Indrapura in the modern province of Quang-nam»; Bölüm VI-6: Champa'nın merkezi Thua-thien ve sonra Quang-nam | BEYAN: Champa/Lin-yi/Huan-wang/Chan-ch'eng adları aynı polity'nin Çince adlarıdır; yerleşim sahipliği polity çekirdeğine göre atanmıştır | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı: sahiplik öncesinden sürüyor) · DOGU-500-1281"},{f:"1000-01-01",t:"1145-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-2: «finally abandoned this extremely vulnerable capital in the year 1000 and established himself at Vijaya, in the region of Binh-dinh» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-2: «at Indrapura in the modern province of Quang-nam» | BEYANLI YAKLAŞIKLIK: Quang Nam (Indrapura/Amaravati) çevresi; 1145-49 Khmer işgali \"kuzey Champa\" ve \"ülkenin büyük kısmı\" diye anılır, Amaravati ayrıca 1151'de Jaya Harivarman I tarafından boyunduruk altına alınır (Coedès X-6) — 1145-1149 Khmer dilimi beyanlı yaklaşıklıktır, Amaravati 1151'e dek karışık olabilir. · DOGU-500-1281"},{f:"1145-01-01",t:"1149-01-01",d:"angkor-kmer",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-5: «The Khmer occupation of the northern part of Champa, with its capital at Vijaya (Binh-dinh), lasted until 1149.» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-6: «Since the capital and the greater part of the country were in the hands of the Khmers» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-5: «In 1145 he invaded Champa, seized Vijaya, and made himself master of the kingdom.» | ic_not: Coedès \"kuzey Champa\" der; yerleşim bu bölgede varsayıldı | BEYANLI YAKLAŞIKLIK: Quang Nam (Indrapura/Amaravati) çevresi; 1145-49 Khmer işgali \"kuzey Champa\" ve \"ülkenin büyük kısmı\" diye anılır, Amaravati ayrıca 1151'de Jaya Harivarman I tarafından boyunduruk altına alınır (Coedès X-6) — 1145-1149 Khmer dilimi beyanlı yaklaşıklıktır, Amaravati 1151'e dek karışık olabilir. · DOGU-500-1281"},{f:"1149-01-01",t:"1203-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-6: «Immediately after reconquering Vijaya, he had himself crowned there.» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-2: «at Indrapura in the modern province of Quang-nam» | BEYANLI YAKLAŞIKLIK: Quang Nam (Indrapura/Amaravati) çevresi; 1145-49 Khmer işgali \"kuzey Champa\" ve \"ülkenin büyük kısmı\" diye anılır, Amaravati ayrıca 1151'de Jaya Harivarman I tarafından boyunduruk altına alınır (Coedès X-6) — 1145-1149 Khmer dilimi beyanlı yaklaşıklıktır, Amaravati 1151'e dek karışık olabilir. · DOGU-500-1281"},{f:"1203-01-01",t:"1220-01-01",d:"angkor-kmer",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-1: «From 1203 to 1220, Champa was a Khmer province» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-5: «\"the Khmers went to the sacred country and the people of Champa» | BEYANLI YAKLAŞIKLIK: Quang Nam (Indrapura/Amaravati) çevresi; 1145-49 Khmer işgali \"kuzey Champa\" ve \"ülkenin büyük kısmı\" diye anılır, Amaravati ayrıca 1151'de Jaya Harivarman I tarafından boyunduruk altına alınır (Coedès X-6) — 1145-1149 Khmer dilimi beyanlı yaklaşıklıktır, Amaravati 1151'e dek karışık olabilir. · DOGU-500-1281"},{f:"1220-01-01",t:"1281-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-5: «by the coronation, under the name of Jaya Paramesvaravarman» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-2: «at Indrapura in the modern province of Quang-nam» | BEYANLI YAKLAŞIKLIK: Quang Nam (Indrapura/Amaravati) çevresi; 1145-49 Khmer işgali \"kuzey Champa\" ve \"ülkenin büyük kısmı\" diye anılır, Amaravati ayrıca 1151'de Jaya Harivarman I tarafından boyunduruk altına alınır (Coedès X-6) — 1145-1149 Khmer dilimi beyanlı yaklaşıklıktır, Amaravati 1151'e dek karışık olabilir. · DOGU-500-1281"},{f:"1281-01-01", t:"1471-03-02", d:"campa"},
     {f:"1471-03-02", t:"1558-01-01", d:"le-hanedani"},
     {f:"1558-01-01", t:"1775-02-01", d:"nguyen-beyligi"},
     {f:"1775-02-01", t:"1786-06-01", d:"le-hanedani"},
     {f:"1786-06-01", t:"1802-06-01", d:"tay-son"},
     {f:"1802-06-01", t:"1884-06-06", d:"nguyen-hanedani"},
     {f:"1884-06-06", t:"1954-07-21", d:"fransiz-cinhindi"},{f:"1954-07-21",t:"1975-04-30",d:"guney-vietnam",kaynak:"Britannica 'South Vietnam'; Office of the Historian"},{f:"1975-04-30",t:"2000-12-31",d:"vietnam-dc",kaynak:"Britannica 'Fall of Saigon' 1975-04-30"}] },

// Vijaya (Chà Bàn / Quy Nhơn) — Champa'nın başkenti; Lê Thánh Tông
// 2 Mart 1471'de aldı ve Champa bir daha toparlanamadı. Üç yüz yıl sonra
// Tây Sơn ayaklanması yine buradan çıktı (1771).
{ ad:"Vijaya (Quy Nhơn)", tur:"kale", lat:13.9000, lon:109.1000, g:1, k:1,kd:[{f:"1281-01-01",t:"1832-01-01",k:1,m:"Vijaya (Quy Nhơn)"}], d:[],
  s:[{f:"0500-01-01",t:"1000-01-01",d:"linyi-champa",kesinlik:"yil",kaynak:"SAHİP BEYANLI: linyi-champa (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VII-2: «finally abandoned this extremely vulnerable capital in the year 1000 and established himself at Vijaya, in the region of Binh-dinh.» (988'de Chamlar bir Cham'ı Vijaya'da tahta çıkardı: «They placed him on the throne at Vijaya, in modern Binh-dinh») | BEYAN: Champa/Lin-yi/Huan-wang/Chan-ch'eng adları aynı polity'nin Çince adlarıdır; yerleşim sahipliği polity çekirdeğine göre atanmıştır | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı: sahiplik öncesinden sürüyor) · DOGU-500-1281"},{f:"1000-01-01",t:"1145-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-2: «finally abandoned this extremely vulnerable capital in the year 1000 and established himself at Vijaya, in the region of Binh-dinh» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-2: «The king Yang Pu Ku Vijaya, who came to the throne in the very last years of the tenth century, evacuated Indrapura (Quang-nam) in the year 1000 to establish himself at Vijaya (Binh-dinh).» |  · DOGU-500-1281"},{f:"1145-01-01",t:"1149-01-01",d:"angkor-kmer",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-5: «The Khmer occupation of the northern part of Champa, with its capital at Vijaya (Binh-dinh), lasted until 1149.» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-6: «Since the capital and the greater part of the country were in the hands of the Khmers» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-5: «In 1145 he invaded Champa, seized Vijaya, and made himself master of the kingdom.» | ic_not: Coedès \"kuzey Champa\" der; yerleşim bu bölgede varsayıldı |  · DOGU-500-1281"},{f:"1149-01-01",t:"1203-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm X-6: «Immediately after reconquering Vijaya, he had himself crowned there.» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-2: «The king Yang Pu Ku Vijaya, who came to the throne in the very last years of the tenth century, evacuated Indrapura (Quang-nam) in the year 1000 to establish himself at Vijaya (Binh-dinh).» |  · DOGU-500-1281"},{f:"1203-01-01",t:"1220-01-01",d:"angkor-kmer",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-1: «From 1203 to 1220, Champa was a Khmer province» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-5: «\"the Khmers went to the sacred country and the people of Champa» |  · DOGU-500-1281"},{f:"1220-01-01",t:"1281-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-5: «by the coronation, under the name of Jaya Paramesvaravarman» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-2: «The king Yang Pu Ku Vijaya, who came to the throne in the very last years of the tenth century, evacuated Indrapura (Quang-nam) in the year 1000 to establish himself at Vijaya (Binh-dinh).» |  · DOGU-500-1281"},{f:"1281-01-01", t:"1471-03-02", d:"campa"},
     {f:"1471-03-02", t:"1558-01-01", d:"le-hanedani"},
     {f:"1558-01-01", t:"1773-01-01", d:"nguyen-beyligi"},
     {f:"1773-01-01", t:"1802-06-01", d:"tay-son"},
     {f:"1802-06-01", t:"1884-06-06", d:"nguyen-hanedani"},
     {f:"1884-06-06", t:"1954-07-21", d:"fransiz-cinhindi"},{f:"1954-07-21",t:"1975-04-30",d:"guney-vietnam",kaynak:"Britannica 'South Vietnam'; Office of the Historian"},{f:"1975-04-30",t:"2000-12-31",d:"vietnam-dc",kaynak:"Britannica 'Fall of Saigon' 1975-04-30"}] },

// Phan Rang (Panduranga) — Champa'nın son kalıntısı; Minh Mạng 1832'de
// kaldırdı. Bu, 1500 yıllık Çam devletinin haritadan silindiği tarihtir.
{ ad:"Phan Rang (Panduranga)", tur:"sehir", lat:11.5640, lon:108.9880, g:1, k:1,kd:[{f:"1281-01-01",t:"1832-01-01",k:1,m:"Phan Rang (Panduranga)"}], d:[],
  s:[{f:"0500-01-01",t:"1000-01-01",d:"linyi-champa",kesinlik:"yil",kaynak:"SAHİP BEYANLI: linyi-champa (önceki BOŞLUK BEYANI; boya BOYALAR'a eklendi, d: yazıldı) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VI-6: «we see a movement of the center of gravity to the south, to Panduranga (Phan-rang) and to Kauthara (Nha-trang)» | BEYAN: Champa/Lin-yi/Huan-wang/Chan-ch'eng adları aynı polity'nin Çince adlarıdır; yerleşim sahipliği polity çekirdeğine göre atanmıştır | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı: sahiplik öncesinden sürüyor) · DOGU-500-1281"},{f:"1000-01-01",t:"1203-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-2: «finally abandoned this extremely vulnerable capital in the year 1000 and established himself at Vijaya, in the region of Binh-dinh» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-2: «the people of Panduranga, \"vicious, threatening, always in revolt against their sovereign,\" refused to recognize him» | BEYANLI YAKLAŞIKLIK: Panduranga 1050, 1080 civarı ve 1160'a dek özerklik/isyan eğilimlidir (Coedès IX-2, X-2, X-6) ama Cham krallığının parçası sayılır; 1145-49'da Khmer işgali dışında (Jaya Harivarman I burada kral ilan edildi). · DOGU-500-1281"},{f:"1203-01-01",t:"1220-01-01",d:"angkor-kmer",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-1: «From 1203 to 1220, Champa was a Khmer province» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-5: «\"the Khmers went to the sacred country and the people of Champa» | BEYANLI YAKLAŞIKLIK: Panduranga 1050, 1080 civarı ve 1160'a dek özerklik/isyan eğilimlidir (Coedès IX-2, X-2, X-6) ama Cham krallığının parçası sayılır; 1145-49'da Khmer işgali dışında (Jaya Harivarman I burada kral ilan edildi). · DOGU-500-1281"},{f:"1220-01-01",t:"1281-01-01",d:"campa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-5: «by the coronation, under the name of Jaya Paramesvaravarman» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-2: «the people of Panduranga, \"vicious, threatening, always in revolt against their sovereign,\" refused to recognize him» | BEYANLI YAKLAŞIKLIK: Panduranga 1050, 1080 civarı ve 1160'a dek özerklik/isyan eğilimlidir (Coedès IX-2, X-2, X-6) ama Cham krallığının parçası sayılır; 1145-49'da Khmer işgali dışında (Jaya Harivarman I burada kral ilan edildi). · DOGU-500-1281"},{f:"1281-01-01", t:"1832-01-01", d:"campa"},
     {f:"1832-01-01", t:"1884-06-06", d:"nguyen-hanedani"},
     {f:"1884-06-06", t:"1954-07-21", d:"fransiz-cinhindi"},{f:"1954-07-21",t:"1975-04-30",d:"guney-vietnam",kaynak:"Britannica 'South Vietnam'; Office of the Historian"},{f:"1975-04-30",t:"2000-12-31",d:"vietnam-dc",kaynak:"Britannica 'Fall of Saigon' 1975-04-30"}] },

// Saygon (Gia Định) — Mekong deltası 1698'e kadar Kmer toprağıdır;
// Nguyễn beyleri o yıl Gia Định'i kurdu. Fransız donanması 17 Şubat
// 1859'da aldı ve Cochinchine sömürgesinin merkezi oldu.
{ ad:"Saygon (Gia Định)", tur:"liman", lat:10.8230, lon:106.6300, g:2, k:2,kd:[{f:"1859-02-17",t:"1923-10-29",k:1,m:"Saygon (Gia Định)"}], d:[],
  s:[{f:"1281-01-01", t:"1431-01-01", d:"angkor-kmer"},{f:"1431-01-01", t:"1698-01-01", d:"kamboc-kralligi"},
     {f:"1698-01-01", t:"1777-01-01", d:"nguyen-beyligi"},
     {f:"1777-01-01", t:"1788-09-07", d:"tay-son"},
     {f:"1788-09-07", t:"1802-06-01", d:"nguyen-beyligi"},
     {f:"1802-06-01", t:"1859-02-17", d:"nguyen-hanedani"},
     {f:"1859-02-17", t:"1954-07-21", d:"fransiz-cinhindi"},{f:"1954-07-21",t:"1975-04-30",d:"guney-vietnam",kaynak:"Britannica 'South Vietnam'; Office of the Historian"},{f:"1975-04-30",t:"2000-12-31",d:"vietnam-dc",kaynak:"Britannica 'Fall of Saigon' 1975-04-30"}] },

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
{ ad:"Malaka", tur:"liman", lat:2.1960, lon:102.2500, g:2, k:2,kd:[{f:"1400-01-01",t:"1511-08-10",k:1,m:"Malaka"}], d:[],
  kur:"1400-01-01",
  s:[{f:"1400-01-01", t:"1511-08-10", d:"malaka-sultanligi"},
     {f:"1511-08-10", t:"1641-01-14", d:"portekiz",enklav:true},
     {f:"1641-01-14", t:"1825-03-01", d:"hollanda-dogu-hint",enklav:true},
     {f:"1825-03-01", t:"1946-04-01", d:"ingiliz-malaya"},{f:"1946-04-01",t:"1948-01-31",d:"malaya-birligi",kaynak:"Britannica Malayan Union 1946"},{f:"1948-01-31",t:"1957-08-31",d:"ingiliz-malaya",kaynak:"Britannica Federation of Malaya 1948"},{f:"1957-08-31",t:"2000-12-31",d:"malezya",kaynak:"Britannica Malaysia: bagimsizlik 31 Agustos 1957, Malezya 16 Eylul 1963"}] },

// Singapur — Raffles 29 Ocak 1819'da karaya çıktı ve Johor'dan aldığı
// izinle ticaret istasyonunu kurdu (kur:). 1819 öncesi boşluk KASITLIDIR:
// XIV. yüzyıl Temasek'i çoktan terk edilmişti ve ada Johor'un balıkçı
// köyüydü; o dönemin sahibini komşu Johor noktası taşıyor.
{ ad:"Singapur", tur:"liman", lat:1.2900, lon:103.8520, g:2, k:2,kd:[{f:"1826-01-01",t:"1923-10-29",k:1,m:"Singapur"}], d:[],
  kur:"1819-01-29",
  s:[{f:"1819-01-29", t:"1826-11-27", d:"ingiltere"},
     {f:"1826-11-27", t:"1946-04-01", d:"ingiliz-malaya"},{f:"1946-04-01",t:"1959-06-03",d:"singapur-kolonisi",kaynak:"Britannica Singapore"},{f:"1959-06-03",t:"2000-12-31",d:"singapur",kaynak:"Britannica Singapore: 1959 ozyonetim, 1963-65 Malezya ici, 1965 cumhuriyet"}] },

// Johor — Malaka'nın son sultanının oğlu 1528'de kurdu; Portekiz, Açe ve
// Hollanda arasındaki üçlü mücadelenin dördüncü tarafıdır. 1914'te
// İngiliz danışman kabul etti ama hânedan sürdü.
{ ad:"Johor", tur:"sehir", lat:1.4930, lon:103.7410, g:1, k:1, d:[],
  s:[{f:"1281-01-01", t:"1400-01-01", d:"malay-sultanliklari"},
     {f:"1400-01-01", t:"1528-01-01", d:"malaka-sultanligi"},
     {f:"1528-01-01", t:"1923-10-29", d:"cohor-sultanligi"},{f:"1923-10-29",t:"1946-04-01",d:"federe-olmayan-malay-devletleri",kaynak:"tsv: Johor Federe Olmayan Malay Devletleri uyesi; Britannica Malaya"},{f:"1946-04-01",t:"1948-01-31",d:"malaya-birligi",kaynak:"Malayan Union 1946-04-01..1948 (UK National Archives; Britannica Onn Jaafar)"},{f:"1948-01-31",t:"1957-08-31",d:"ingiliz-malaya",kaynak:"Federation of Malaya Agreement 1948-02-01, Britannica"},{f:"1957-08-31",t:"2000-12-31",d:"malezya",kaynak:"Malaya bagimsizligi 1957-08-31; Malezya 1963-09-16 ayni kimlik"}] },

// Penang — Francis Light 11 Ağustos 1786'da Kedah sultanından aldı (kur:);
// İngiltere'nin yarımadadaki ilk toprağıdır.
{ ad:"Penang (George Town)", tur:"liman", lat:5.4140, lon:100.3290, g:1, k:3, d:[],
  kur:"1786-08-11",
  s:[{f:"1786-08-11", t:"1826-11-27", d:"ingiltere"},
     {f:"1826-11-27", t:"1946-04-01", d:"ingiliz-malaya"},{f:"1946-04-01",t:"1948-01-31",d:"malaya-birligi",kaynak:"Britannica Malayan Union 1946"},{f:"1948-01-31",t:"1957-08-31",d:"ingiliz-malaya",kaynak:"Britannica Federation of Malaya 1948"},{f:"1957-08-31",t:"2000-12-31",d:"malezya",kaynak:"Britannica Malaysia: bagimsizlik 31 Agustos 1957, Malezya 16 Eylul 1963"}] },

// Kedah — 1821'de Siyam işgal etti, 1842'de sultan tahta iade edildi;
// 10 Temmuz 1909 İngiliz-Siyam antlaşmasıyla İngiliz nüfuz alanına geçti.
{ ad:"Kedah (Alor Setar)", tur:"sehir", lat:6.1210, lon:100.3600, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"1281-01-01",d:"kedah-kadaram",kesinlik:"yil",kaynak:"SAHİP: kedah-kadaram (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm III-2: Kedah «attest to the antiquity of this site, which we will hear of again later under its Sanskrit name Kataha and its Chinese name Chieh-ch'a» | Majumdar, R. C., Ancient Indian Colonies in the Far East, cilt II: Suvarnadvipa, Part I: Political History (Dacca, 1937); archive.org/details/Suvarnadvipa (djvu tam metni bu oturumda okundu): Rajendra Chola'nın 13. yıl (MS 1024-5) Malur yazıtı Kadaram'ın alınışını anar; Kadaram'ın '«never ceased to function as a separate state»' (11. yy boyunca Çin'e elçilikler) | BEYANLI YAKLAŞIKLIK: Alor Setar 17. yy kenti, Kedah (Kataha) limanı Bujang vadisindeydi — atlas 'Kedah' noktası bölgeyi temsil eder | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı: sahiplik öncesinden sürüyor) · DOGU-500-1281"},{f:"1281-01-01", t:"1821-11-12", d:"malay-sultanliklari"},
     {f:"1821-11-12", t:"1842-01-01", d:"siyam-chakri"},
     {f:"1842-01-01", t:"1909-07-10", d:"malay-sultanliklari"},
     {f:"1909-07-10", t:"1946-04-01", d:"ingiliz-malaya"},{f:"1946-04-01",t:"1948-01-31",d:"malaya-birligi",kaynak:"Britannica Malayan Union 1946"},{f:"1948-01-31",t:"1957-08-31",d:"ingiliz-malaya",kaynak:"Britannica Federation of Malaya 1948"},{f:"1957-08-31",t:"2000-12-31",d:"malezya",kaynak:"Britannica Malaysia: bagimsizlik 31 Agustos 1957, Malezya 16 Eylul 1963"}] },

// Patani — Malay sultanlıklarının kuzeydeki ucu; Siyam 1786'da ilhak etti
// ve Bangkok'ta kaldı (1909 antlaşmasında da Siyam'da bırakıldı).
{ ad:"Patani", tur:"liman", lat:6.8690, lon:101.2500, g:0, k:3, d:[],
  s:[{f:"0500-01-01",t:"1281-01-01",d:"langkasuka",kesinlik:"yil",kaynak:"SAHİP: langkasuka (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm III-2: Langkasuka «must have been situated astride the peninsula and have had access at the same time to the Gulf of Siam in the Pattani region»; Bölüm IV-3: «first established relations with China in 515» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XII-7: Marco Polo (≈1292): «the kingdom of Lochac, that is, Langkasuka on the Malay Peninsula» — «They pay tribute to no one» | BEYANLI YAKLAŞIKLIK: Langkasuka'nın merkezi tartışmalıdır (Pattani/Yarang), atlas 'Patani' noktası Pattani yöresini temsil eder | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı: sahiplik öncesinden sürüyor) · DOGU-500-1281"},{f:"1281-01-01", t:"1786-01-01", d:"malay-sultanliklari"},
     {f:"1786-01-01", t:"2000-12-31", d:"siyam-chakri"}] },

// Perak — 20 Ocak 1874 Pangkor Antlaşması, İngiltere'nin yarımadadaki
// "danışman" düzeninin başlangıcıdır.
{ ad:"Perak (Kuala Kangsar)", tur:"sehir", lat:4.7670, lon:100.9370, g:0, k:3, d:[],
  s:[
     {f:"1281-01-01", t:"1874-01-20", d:"malay-sultanliklari"},
     {f:"1874-01-20", t:"1896-07-01", d:"ingiliz-malaya"},
     {f:"1896-07-01",t:"1946-04-01",d:"fed-malay-devletleri",kesinlik:{f:"ay",t:"gun"},kaynak:"TDV İslâm Ansiklopedisi, «Malezya» md. (islamansiklopedisi.org.tr/malezya, bu oturumda okundu): «Temmuz 1896’da Kuala Lumpur başşehir olmak üzere dört Malay devleti “Federal Malay eyaletleri” adı altında birleştirilerek merkezî bir idarî sisteme bağlandı.» · Alleyne Ireland, The Far Eastern Tropics, Boston-New York 1905, ss. 113-114 (archive.org: fareasterntropic00ireluoft, tam metin okundu): «in the following year [1896] the four States — Perak, Selangor, the Negri Sembilan, and Pahang — were combined in a Federation»; Swettenham «Resident-General in 1896» · Malayan Union Order in Council 1946 — The Foreign Jurisdiction (Federation of Malaya) Orders in Council 1948, S.I. 1948/108, giriş (legislation.gov.uk/uksi/1948/108): Order in Council «as from the first day of April, 1946, there should be a Union» (Malaya Birliği 1 Nisan 1946; Federe Malay Devletleri bu Birliğe katıldı) | BEYANLI YAKLAŞIKLIK: TDV yalnız ay verir (Temmuz 1896) — dönem başı ayın 1'i, ay hassasiyeti; Ireland yalnız yıl (1896). Üyelik dört eyalet (Perak, Selangor, Negeri Sembilan, Pahang) düzeyinde kaynaklıdır; şehir düzeyinde ek tanık yok, eyalet merkezi/şehri eyaletin içinde sayıldı. Dönem sonu: Malaya Birliği ilanı (1 Nisan 1946) FMS'nin yerini aldı. · ASYA-ZINCIR-1024 (F3)"},
     {f:"1946-04-01",t:"1948-01-31",d:"malaya-birligi",kaynak:"Britannica Malayan Union 1946"},
     {f:"1948-01-31",t:"1957-08-31",d:"ingiliz-malaya",kaynak:"Britannica Federation of Malaya 1948"},
     {f:"1957-08-31",t:"2000-12-31",d:"malezya",kaynak:"Britannica Malaysia: bagimsizlik 31 Agustos 1957, Malezya 16 Eylul 1963"}] },

// Kuala Lumpur — 1857'de kalay madencilerinin kurduğu kasaba (kur:);
// 1896'da Federe Malay Devletleri'nin başkenti oldu.
{ ad:"Kuala Lumpur", tur:"sehir", lat:3.1390, lon:101.6870, g:1, k:3, d:[],
  kur:"1857-01-01",
  s:[
     {f:"1857-01-01", t:"1874-01-20", d:"malay-sultanliklari"},
     {f:"1874-01-20", t:"1896-07-01", d:"ingiliz-malaya"},
     {f:"1896-07-01",t:"1946-04-01",d:"fed-malay-devletleri",kesinlik:{f:"ay",t:"gun"},kaynak:"TDV İslâm Ansiklopedisi, «Malezya» md. (islamansiklopedisi.org.tr/malezya, bu oturumda okundu): «Temmuz 1896’da Kuala Lumpur başşehir olmak üzere dört Malay devleti “Federal Malay eyaletleri” adı altında birleştirilerek merkezî bir idarî sisteme bağlandı.» · Alleyne Ireland, The Far Eastern Tropics, Boston-New York 1905, ss. 113-114 (archive.org: fareasterntropic00ireluoft, tam metin okundu): «in the following year [1896] the four States — Perak, Selangor, the Negri Sembilan, and Pahang — were combined in a Federation»; Swettenham «Resident-General in 1896» · Malayan Union Order in Council 1946 — The Foreign Jurisdiction (Federation of Malaya) Orders in Council 1948, S.I. 1948/108, giriş (legislation.gov.uk/uksi/1948/108): Order in Council «as from the first day of April, 1946, there should be a Union» (Malaya Birliği 1 Nisan 1946; Federe Malay Devletleri bu Birliğe katıldı) | BEYANLI YAKLAŞIKLIK: TDV yalnız ay verir (Temmuz 1896) — dönem başı ayın 1'i, ay hassasiyeti; Ireland yalnız yıl (1896). Üyelik dört eyalet (Perak, Selangor, Negeri Sembilan, Pahang) düzeyinde kaynaklıdır; şehir düzeyinde ek tanık yok, eyalet merkezi/şehri eyaletin içinde sayıldı. Dönem sonu: Malaya Birliği ilanı (1 Nisan 1946) FMS'nin yerini aldı. · ASYA-ZINCIR-1024 (F3)"},
     {f:"1946-04-01",t:"1948-01-31",d:"malaya-birligi",kaynak:"Britannica Malayan Union 1946"},
     {f:"1948-01-31",t:"1957-08-31",d:"ingiliz-malaya",kaynak:"Britannica Federation of Malaya 1948"},
     {f:"1957-08-31",t:"2000-12-31",d:"malezya",kaynak:"Britannica Malaysia: bagimsizlik 31 Agustos 1957, Malezya 16 Eylul 1963"}] },

// ===== 8f. Sumatra =====

// Samudra Pasai — Güneydoğu Asya'nın İLK Müslüman devleti (1267); İbn
// Battûta 1345-46'da buraya uğradı ve sultanı anlattı. 1521'de Portekiz
// aldı, Açe kısa sürede ilhak etti.
{ ad:"Samudra Pasai", tur:"liman", lat:5.1800, lon:97.0700, g:1, k:1, d:[],
  s:[{f:"1281-01-01", t:"1521-01-01", d:"samudra-pasai"},
     {f:"1521-01-01", t:"1524-01-01", d:"portekiz"},
     {f:"1524-01-01", t:"1903-01-10", d:"ace-sultanligi"},
     {f:"1903-01-10", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Banda Açe — Açe Sultanlığı 1496'da kuruldu (kur:) ve XVI. yüzyılda
// Osmanlı Devleti'nden top ve topçu yardımı istedi (1566 elçiliği);
// bu dosyanın Osmanlı ile doğrudan teması olan tek noktasıdır.
// Hollanda savaşı 1873'te başladı, sultan 10 Ocak 1903'te teslim oldu.
{ ad:"Banda Açe", tur:"liman", lat:5.5480, lon:95.3240, g:2, k:1,kd:[{f:"1496-01-01",t:"1903-01-01",k:1,m:"Banda Açe"}], d:[],
  kur:"1496-01-01",
  s:[{f:"1496-01-01", t:"1903-01-10", d:"ace-sultanligi"},
     {f:"1903-01-10", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Padang — Minangkabau'nun (Pagaruyung) limanı; VOC 1663'te yerleşti,
// İngiltere Napolyon savaşlarında iki kez aldı (1781-1784 ve 1795-1819).
{ ad:"Padang", tur:"liman", lat:-0.9470, lon:100.4170, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1663-01-01", d:"pagaruyung"},
     {f:"1663-01-01", t:"1795-08-18", d:"hollanda-dogu-hint"},
     {f:"1795-08-18", t:"1819-05-01", d:"ingiltere"},
     {f:"1819-05-01", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Palembang — Srivijaya'nın merkeziydi; 1281'de imparatorluk çökmüş,
// şehir Cava'nın (önce Singhasari, sonra Majapahit) nüfuzundaydı.
// 1659'da sultanlık kuruldu, Hollanda 1825'te kaldırdı. Bu üç evre tek
// "palembang-sultanligi" kimliğinde toplandı: hepsi aynı Musi ırmağı
// ağzının devletidir ve ayrı ayrı boyanmaları haritaya bilgi katmaz.
{ ad:"Palembang", tur:"liman", lat:-2.9760, lon:104.7750, g:1, k:1,kd:[{f:"1281-01-01",t:"1825-01-01",k:1,m:"Palembang"}], d:[],
  s:[{f:"1281-01-01", t:"1825-01-01", d:"palembang-sultanligi"},
     {f:"1825-01-01", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Bengkulu (Bencoolen) — İngiltere'nin Sumatra'daki 139 yıllık üssü
// (1685-1824); 1824 Londra Antlaşması'yla Singapur karşılığında
// Hollanda'ya verildi.
{ ad:"Bengkulu (Bencoolen)", tur:"liman", lat:-3.7961, lon:102.2722, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1685-01-01", d:"pagaruyung"},
     {f:"1685-01-01", t:"1824-03-17", d:"ingiltere"},
     {f:"1824-03-17", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// ===== 8g. Cava ve Bali =====

// Trowulan — Majapahit'in başkenti. Singhasari 1292'de Kediri isyanıyla
// yıkıldı; Moğol donanmasının 1293'teki Cava seferini Raden Wijaya kendi
// lehine çevirdi ve Majapahit'i kurdu (kur: 10 Kasım 1293).
{ ad:"Trowulan (Majapahit)", tur:"sehir", lat:-7.5450, lon:112.3830, g:2, k:1,kd:[{f:"1293-11-10",t:"1527-01-01",k:1,m:"Trowulan (Majapahit)"}], d:[],
  kur:"1293-11-10",
  s:[{f:"1293-11-10", t:"1527-01-01", d:"majapahit"},
     {f:"1527-01-01", t:"1587-01-01", d:"demak"},
     {f:"1587-01-01", t:"1743-11-11", d:"mataram-sultanligi"},
     {f:"1743-11-11", t:"1811-08-18", d:"hollanda-dogu-hint"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Demak — Cava'nın ilk İslâm sultanlığı; Majapahit'i 1527'de yıktı.
{ ad:"Demak", tur:"sehir", lat:-6.8900, lon:110.6390, g:1, k:2,kd:[{f:"1478-01-01",t:"1587-01-01",k:1,m:"Demak"}], d:[],
  s:[{f:"1281-01-01", t:"1292-01-01", d:"singhasari"},
     {f:"1292-01-01", t:"1478-01-01", d:"majapahit"},
     {f:"1478-01-01", t:"1587-01-01", d:"demak"},
     {f:"1587-01-01", t:"1743-11-11", d:"mataram-sultanligi"},
     {f:"1743-11-11", t:"1811-08-18", d:"hollanda-dogu-hint"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

{ ad:"Semarang", tur:"liman", lat:-6.9660, lon:110.4170, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1292-01-01", d:"singhasari"},
     {f:"1292-01-01", t:"1478-01-01", d:"majapahit"},
     {f:"1478-01-01", t:"1587-01-01", d:"demak"},
     {f:"1587-01-01", t:"1705-01-01", d:"mataram-sultanligi"},
     {f:"1705-01-01", t:"1811-08-18", d:"hollanda-dogu-hint"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

{ ad:"Surabaya", tur:"liman", lat:-7.2570, lon:112.7520, g:2, k:3, d:[],
  s:[{f:"0929-01-01",t:"1016-01-01",d:"medang",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-3: «for the first act of his successor Sindok ... is dated 929» · «The accession of Sindok marks the definitive transfer of the capital to the east, between the mountains Smeru and Wilis» | BEYANLI YAKLAŞIKLIK: Sindok başkenti Smeru-Wilis dağları arasına taşıdı; Surabaya adı geçmez, Brantas havzası krallığı olarak alındı. · DOGU-500-1281"},{f:"1016-01-01",t:"1019-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: 1016 Pralaya'dan 1019 taç giymeye dek Surabaya kıyısının sahibi (Coedès: Airlangga dağlarda keşiş yanında, krallık dağınık). Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-4: «the young Airlanga, then sixteen years old, took refuge among hermits» · DOGU-500-1281"},{f:"1019-01-01",t:"1042-01-01",d:"kahuripan",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-4: «in 1019 he was officially crowned with the title Sri Maharaja Rakai Halu» · «he established his residence in the east, at Kahuripan, the site of which has still not been identified» · DOGU-500-1281"},{f:"1042-01-01",t:"1222-01-01",d:"kediri",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm IX-4: «Janggala lay to the east and must have included the region of Malang and the Brantas Delta with the ports of Surabaya, Rembang, and Pasuruhan» · «Janggala was soon absorbed by Panjalu» | Majumdar, R. C., Ancient Indian Colonies in the Far East, cilt II: Suvarnadvipa, Part I: Political History (Dacca, 1937); archive.org/details/Suvarnadvipa (djvu tam metni bu oturumda okundu), 'The Kingdom of Kadiri' bölümü, s. 278-280: «the available evidence leads to the conclusion that the kingdom of Janggala did not last long» | BEYANLI YAKLAŞIKLIK: Janggala payının Kadiri'ye emilme yılı kaynakta yok; Majumdar artakalanı 'yarı bağımsız şefler' sayar. Bölme yılı (1042) kesin değil (Coedès 'ölümünden önce', Hall ≈1045). · DOGU-500-1281"},{f:"1222-01-01",t:"1281-01-01",d:"singhasari",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-8: «Kadiri consequently became an integral part of the kingdom of Tumapel» · «brought the former Janggala under his power» · DOGU-500-1281"},{f:"1281-01-01", t:"1292-01-01", d:"singhasari"},
     {f:"1292-01-01", t:"1527-01-01", d:"majapahit"},
     {f:"1527-01-01", t:"1587-01-01", d:"demak"},{f:"1587-01-01", t:"1625-01-01", d:"mataram-sultanligi"},
     {f:"1625-01-01", t:"1743-11-11", d:"mataram-sultanligi"},
     {f:"1743-11-11", t:"1811-08-18", d:"hollanda-dogu-hint"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Batavia — Jan Pieterszoon Coen, Cayakarta'yı 30 Mayıs 1619'da yıkıp
// yerine Batavia'yı kurdu (kur:) ve VOC'un Asya merkezi yaptı.
{ ad:"Batavia (Cakarta)", tur:"liman", lat:-6.1750, lon:106.8270, g:2, k:1,kd:[{f:"1619-05-30",t:"1923-10-29",k:1,m:"Batavia (Cakarta)"}], d:[],
  kur:"1619-05-30",
  s:[{f:"1619-05-30", t:"1811-08-18", d:"hollanda-dogu-hint"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Banten — Sunda Kalapa'yı 1527'de alarak Cava'nın batısında sultanlık
// kurdu; XVII. yüzyılda dünyanın en büyük biber limanıydı. Hollanda
// 1813'te sultanlığı kaldırdı.
{ ad:"Banten", tur:"liman", lat:-6.0360, lon:106.1500, g:1, k:1,kd:[{f:"1527-06-22",t:"1813-01-01",k:1,m:"Banten"}], d:[],
  s:[{f:"1281-01-01", t:"1527-06-22", d:"sunda-pajajaran"},
     {f:"1527-06-22", t:"1811-08-18", d:"banten-sultanligi"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// ⚠️ 13 Şubat 1755 Giyanti Antlaşması Mataram'ı İKİYE böldü: Yogyakarta
// sultanlığı ve Surakarta susuhunanlığı. İkisi de 1945'e kadar kendi
// hânedanlarıyla yönetildi (Hollanda himayesinde ama tahtları yerinde),
// bu yüzden dosya kuralı gereği AYRI kimlik taşırlar ve 1923'e kadar
// "hollanda-dogu-hint" ile boyanmazlar.

{ ad:"Yogyakarta", tur:"sehir", lat:-7.7970, lon:110.3710, g:1, k:2,kd:[{f:"1755-10-07",t:"1923-10-29",k:1,m:"Yogyakarta"}], d:[],
  kur:"1755-10-07",
  s:[{f:"1755-10-07", t:"1811-08-18", d:"yogyakarta"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1923-10-29", d:"yogyakarta"},{f:"1923-10-29",t:"1945-09-05",d:"hollanda-dogu-hint",kaynak:"Britannica (ilgili devlet/ülke maddesi)"},{f:"1945-09-05",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Britannica (ilgili devlet/ülke maddesi)"}] },

{ ad:"Surakarta (Solo)", tur:"sehir", lat:-7.5750, lon:110.8240, g:1, k:1,kd:[{f:"1745-02-17",t:"1923-10-29",k:1,m:"Surakarta (Solo)"}], d:[],
  kur:"1745-02-17",
  s:[{f:"1745-02-17", t:"1811-08-18", d:"mataram-sultanligi"},
     {f:"1811-08-18", t:"1816-08-19", d:"ingiltere"},
     {f:"1816-08-19", t:"1946-06-16", d:"surakarta"},{f:"1946-06-16",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Britannica (ilgili devlet/ülke maddesi)"}] },

// Bali — Majapahit 1343'te aldı; Cava İslâmlaşınca ada Hindu kaldı ve
// Gelgel/Klungkung krallıkları sürdü. Hollanda 28 Nisan 1908'deki
// Klungkung puputan'ıyla adayı tamamen aldı.
{ ad:"Bali (Klungkung)", tur:"sehir", lat:-8.6500, lon:115.2160, g:1, k:1,kd:[{f:"1478-01-01",t:"1908-04-28",k:1,m:"Bali (Klungkung)"}], d:[],
  s:[{f:"0914-01-01",t:"1281-01-01",d:"bali-warmadewa",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm VIII-3: «that of 914 is in the name of the adhipati Sri Kesarivarma» · «These inscriptions reveal an Indo-Balinese society that was independent of Java» | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XII-6: «After establishing his authority in Sumatra, Kritanagara turned toward Bali, whose king he brought back as a prisoner in 1284.» | BEYANLI YAKLAŞIKLIK: Klungkung güneydoğu Bali'dir; Bali'nin tek siyasi merkezi olduğu varsayımı (Bedulu-Pejeng); yerel yazıt gösterilmedi. ÇELİŞKİ/ÖNERİ: Kritanagara fethi 1284 (Coedès) → mevcut zincirdeki 'singhasari 1281' başlangıcı 1284'e ertelenmeli, 1281-1284 arası bali-warmadewa (yama bu dilimi 1281'de bitiriyor: 1284'e uzatılması mevcut zincire dokunur). · DOGU-500-1281"},{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1343-01-01",d:"bali-kralliklari-pejeng",kesinlik:"yil",kaynak:"Künye bali-kralliklari-pejeng (1292-1343): Singasari'nin Bali kolu 1292'de bağımsızlaştı, Gajah Mada 1343'te aldı (künye ozet/kronoloji; tarihli ikinci kaynak sonraki oturumda aranacak). Eski kayıt Singhasari'yi 1343'e uzatıyordu. · GDA-OKYANUSYA denetimi 28 Ekim 2026"},
     {f:"1343-01-01", t:"1478-01-01", d:"majapahit"},
     {f:"1478-01-01", t:"1908-04-28", d:"bali-kralliklari"},
     {f:"1908-04-28", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Mataram (Lombok) — XVIII. yüzyıldan itibaren Balili Karangasem
// hânedanı yönetti; Hollanda 22 Kasım 1894'te aldı. Cava'daki Mataram
// Sultanlığı ile karışmasın diye ad parantezlidir.
{ ad:"Mataram (Lombok)", tur:"sehir", lat:-8.5830, lon:116.1170, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1343-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"BOŞLUK BEYANI: Singhasari 1292'de düştü (künye t=1292-01-01), Majapahit 1293'te kuruldu; bu noktanın 1292-1343 sahibi için tarihli tanık BU OTURUMDA aranmadı/bulunamadı — Nagarakretagama (1365) Sumbawa/Lombok'u Majapahit tâbileri sayar ama tarihlemez; 1343 Gajah Mada'nın Bali'yi alışıdır. Eski kayıt Singhasari'yi 1343'e uzatıyordu (künye ömrünü 51 yıl aşıyordu). Boşluk doldurma merdiveni (TDV→akademik→komşu kaynaklar) sonraki oturuma bırakıldı. · GDA-OKYANUSYA denetimi 28 Ekim 2026"},
     {f:"1343-01-01", t:"1478-01-01", d:"majapahit"},
     {f:"1478-01-01", t:"1894-11-22", d:"bali-kralliklari"},
     {f:"1894-11-22", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// ===== 8h. Borneo, Sulawesi, Maluku ve Küçük Sunda =====

// Brunei — Borneo'nun kuzeyini yüzyıllarca elinde tuttu; 1888'de İngiliz
// himayesine girdi ama sultanlık sürdü (bugün de sürüyor).
{ ad:"Brunei", tur:"liman", lat:4.9030, lon:114.9390, g:1, k:3, d:[],
  s:[
     {f:"0977-01-01",t:"1405-01-01",d:"poni",kesinlik:{f:"yil",t:"yil"},kaynak:"Friedrich Hirth & W. W. Rockhill (çev.), Chau Ju-kua: His Work on the Chinese and Arab Trade in the Twelfth and Thirteenth Centuries, entitled Chu-fan-chï, St. Petersburg 1911, ss. 155-158 (archive.org: chaujukuahiswork00chauuoft, tam metin okundu), bölüm 39 «Borneo (P'o-ni)», s. 157: «In the second year of the period t'ai-p'ing hsing-kuo (A.D. 977), this country sent as envoys P'u A-li (Abu Ali), and others, to present as tribute to our Court camphor, tortoise-shell, ivory, and sandal-wood. ... The King of P'o-ni bows his head to the ground»; «In the fifth year yüan-fêng (A.D. 1082) they sent a further mission with tribute»; s. 155: «In this country, the city walls are made of wooden boards and the city contains over ten thousand inhabitants. Under its control there are fourteen districts»; çevirmenlerin s. 158 dn. 1: P'o-ni = Borneo (Gerini'nin Sumatra'daki Pani önerisi reddedilir) · TDV İslâm Ansiklopedisi, «Bruney» md. (islamansiklopedisi.org.tr/bruney, bu oturumda okundu): «Bruney’in tarih öncesi durumu hakkında kesin bilgiler yoktur»; Brunei'in siyasî tarihi İslâmiyet’i kabul edip «Muhammed Şah (1405-1415)» adını alan hükümdarla (Brunei Sultanlığı) başlar | BEYANLI YAKLAŞIKLIK: Hirth-Rockhill P'o-ni'yi «Borneo» (ada/krallık) olarak tanımlar; Brunei kentine/bölgesine indirgeme ikincil yorumdur (Brunei Sultanlığı'nın öncülü olarak yazıldı, TDV'nin 1405 kuruluşuyla birleştirildi). 977 = Song'a ilk kayıtlı elçilik yılı (krallığın kuruluşu değil, ilk TANIK yılı; alt sınır); 1405 TDV'de sultanlığın ilk hükümdarının başlangıç yılıdır (yalnız yıl). Atlasın önceki brunei-sultanligi 1281-1405 dilimi bu kaynaklarla çelişir ve poni olarak değiştirildi. · ASYA-ZINCIR-1024 (F8)"},
     {f:"1405-01-01", t:"2000-12-31", d:"brunei-sultanligi"}] },

// Kuching — James Brooke 24 Eylül 1841'de Brunei sultanından Sarawak'ı
// aldı ve "beyaz racalar" hânedanını kurdu; 1946'ya kadar sürdü.
{ ad:"Kuching (Sarawak)", tur:"liman", lat:1.5530, lon:110.3590, g:1, k:2,kd:[{f:"1841-09-24",t:"1923-10-29",k:1,m:"Kuching (Sarawak)"}], d:[],
  kur:"1827-01-01",
  s:[{f:"1827-01-01", t:"1841-09-24", d:"brunei-sultanligi"},
     {f:"1841-09-24", t:"1946-07-01", d:"sarawak-brooke"},{f:"1946-07-01",t:"1963-09-16",d:"sarawak-tac-kolonisi",kaynak:"Britannica Sarawak"},{f:"1963-09-16",t:"2000-12-31",d:"malezya",kaynak:"Britannica Malaysia: 16 Eylul 1963"}] },

// Bancarmasin — 1526'da kurulan sultanlık; Hollanda 11 Haziran 1860'ta
// kaldırdı ve Banjar savaşı başladı.
{ ad:"Bancarmasin", tur:"liman", lat:-3.3200, lon:114.5910, g:0, k:1,kd:[{f:"1526-01-01",t:"1860-06-11",k:1,m:"Bancarmasin"}], d:[],
  kur:"1526-01-01",
  s:[{f:"1526-01-01", t:"1860-06-11", d:"banjar-sultanligi"},
     {f:"1860-06-11", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Makassar — Gowa sultanlığı; Doğu Endonezya'nın en güçlü devletiydi ve
// baharat ticaretini VOC tekelinin dışında tutmaya çalıştı. 18 Kasım
// 1667 Bongaya Antlaşması'yla teslim oldu.
{ ad:"Makassar", tur:"liman", lat:-5.1470, lon:119.4320, g:1, k:1,kd:[{f:"1281-01-01",t:"1667-11-18",k:1,m:"Makassar"}], d:[],
  s:[{f:"1281-01-01", t:"1667-11-18", d:"gova-makassar"},
     {f:"1667-11-18", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

{ ad:"Manado", tur:"liman", lat:1.4740, lon:124.8420, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1657-01-01", d:"ternate-sultanligi"},
     {f:"1657-01-01", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Ternate — karanfilin dünyadaki iki kaynağından biri; bu yüzden
// Portekiz (1522), İspanya (1606) ve Hollanda (1663) sırayla adaya
// yerleşti. Sultan Baabullah 28 Aralık 1575'te Portekiz kalesini
// düşürdü — Avrupa'nın Asya'da uğradığı ilk büyük yenilgilerden biridir.
{ ad:"Ternate", tur:"liman", lat:0.7940, lon:127.3673, g:1, k:1,kd:[{f:"1281-01-01",t:"1663-01-01",k:1,m:"Ternate"}], d:[],
  s:[{f:"0500-01-01",t:"1042-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"UFUK SINIR İŞARETİ (0500-01-01): pencere başıdır, kuruluş değil.  | BOŞLUK BEYANI: arandı, bulunamadı: Ternate için 1042 öncesi sahip tanığı: Hall Moluccas'ın Kadiri dönemiyle birlikte siyasi-ticari önem kazanmaya başladığını yazar; öncesi için Hall, Coedès, Majumdar'da tarihli tanık yok. · DOGU-500-1281"},{f:"1042-01-01",t:"1222-01-01",d:"kediri",kesinlik:"yil",kaynak:"Hall, D. G. E., A History of South-East Asia, 4. baskı (London: Macmillan, 1981); archive.org/details/a-history-of-south-east-asia-4th-ed (djvu tam metni bu oturumda okundu), Bölüm 4: «Ternate was a vassal state of Kediri» | BEYANLI YAKLAŞIKLIK: Vasallık yılı yok; Kadiri dönemi (1042-1222) sayıldı; Ternate künyesi (ms1) f=1257 bu oturumda kaynakta doğrulanamadı. · DOGU-500-1281"},{f:"1222-01-01",t:"1281-01-01",d:"singhasari",kesinlik:"yil",kaynak:"Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-8: «Wu-nu-ku (the Moluccas)» · «the most recent seems to come after the fall of Kadiri» | Majumdar: Wu-nu-ku = Ternate (bölüm 'Suvarnadvipa' liste notu). | BEYANLI YAKLAŞIKLIK: Ternate'nin Singhasari'ye bağlılığı doğrudan yazılmaz; Chu-fan-chih Wu-nu-ku'yu Cava krallığının bağlısı sayar. 1281 sonrası mevcut zincir ternate-sultanligi. · DOGU-500-1281"},{f:"1281-01-01", t:"1522-01-01", d:"ternate-sultanligi"},
     {f:"1522-01-01", t:"1575-12-28", d:"portekiz"},
     {f:"1575-12-28", t:"1606-04-01", d:"ternate-sultanligi"},
     {f:"1606-04-01", t:"1663-05-01", d:"ispanya"},
     {f:"1663-05-01", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Tidore — Ternate'nin rakibi ve İspanya'nın müttefiki; sultanlık
// Hollanda himayesinde 1900'lere kadar sürdüğü için kimlik korundu.
// Ternate'ye 11.2 km — bu dosyadaki EN YAKIN İKİ NOKTA, 3 km kuralının
// üstünde ve iki ayrı devletin başkenti olduğu için ikisi de tutuldu.
{ ad:"Tidore", tur:"liman", lat:0.6880, lon:127.4000, g:1, k:1,kd:[{f:"1281-01-01",t:"1923-10-29",k:1,m:"Tidore"}], d:[],
  s:[{f:"0500-01-01",t:"1042-01-01",d:"__BOSLUK__",kesinlik:"yil",kaynak:"UFUK SINIR İŞARETİ (0500-01-01): pencere başıdır, kuruluş değil.  | BOŞLUK BEYANI: arandı, bulunamadı: Tidore için 1042 öncesi sahip tanığı: Hall Moluccas'ın Kadiri dönemiyle birlikte siyasi-ticari önem kazanmaya başladığını yazar; öncesi için Hall, Coedès, Majumdar'da tarihli tanık yok. · DOGU-500-1281"},{f:"1042-01-01",t:"1222-01-01",d:"kediri",kesinlik:"yil",kaynak:"ABİ MERKEZ: Ternate/Moluccas grubu —  | Hall, D. G. E., A History of South-East Asia, 4. baskı (London: Macmillan, 1981); archive.org/details/a-history-of-south-east-asia-4th-ed (djvu tam metni bu oturumda okundu), Bölüm 4: «Ternate was a vassal state of Kediri» | BEYANLI YAKLAŞIKLIK: Tidore adı kaynakta yok; zincir Ternate'den devralındı. · DOGU-500-1281"},{f:"1222-01-01",t:"1281-01-01",d:"singhasari",kesinlik:"yil",kaynak:"ABİ MERKEZ: Ternate/Moluccas grubu —  | Coedès, G., The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing (Honolulu: East-West Center Press, 1968); archive.org/details/theindianizedstatesofsoutheastasia (djvu tam metni bu oturumda okundu), Bölüm XI-8: «Wu-nu-ku (the Moluccas)» · «the most recent seems to come after the fall of Kadiri» | BEYANLI YAKLAŞIKLIK: zincir Ternate'den devralındı; Tidore adı yok. · DOGU-500-1281"},{f:"1281-01-01", t:"1923-10-29", d:"tidore-sultanligi"},{f:"1923-10-29",t:"1949-12-27",d:"hollanda-dogu-hint",kaynak:"Britannica (ilgili devlet/ülke maddesi)"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Britannica (ilgili devlet/ülke maddesi)"}] },

// Ambon — Portekiz 1512'de geldi, VOC 23 Şubat 1605'te aldı ve burası
// şirketin İLK doğu merkezi oldu. İngiltere 1810-1817 arasında tuttu.
{ ad:"Ambon", tur:"liman", lat:-3.6950, lon:128.1810, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1512-01-01", d:"ternate-sultanligi"},
     {f:"1512-01-01", t:"1605-02-23", d:"portekiz"},
     {f:"1605-02-23", t:"1810-02-19", d:"hollanda-dogu-hint"},
     {f:"1810-02-19", t:"1817-03-25", d:"ingiltere"},
     {f:"1817-03-25", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Banda Neira — dünyada küçük hindistancevizinin (muskat) yetiştiği TEK
// yer; Coen 1621'de ada halkını katlederek VOC tekelini kurdu. Run adası
// 1667 Breda Antlaşması'yla İngiltere'den alınıp karşılığında Yeni
// Amsterdam (New York) verildi.
{ ad:"Banda Neira", tur:"liman", lat:-4.5466, lon:129.9012, g:1, k:1,kd:[{f:"1281-01-01",t:"1621-03-08",k:1,m:"Banda Neira"}], d:[],
  s:[{f:"1281-01-01", t:"1621-03-08", d:"banda-adalari"},
     {f:"1621-03-08", t:"1810-08-09", d:"hollanda-dogu-hint"},
     {f:"1810-08-09", t:"1817-03-25", d:"ingiltere"},
     {f:"1817-03-25", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Kupang — Hollanda 1653'te kaleyi kurdu; Timor adası 1859 ve 1904
// antlaşmalarıyla Hollanda ile Portekiz arasında bölündü ve bu bölünme
// bugünkü Doğu Timor'un sebebidir.
{ ad:"Kupang", tur:"liman", lat:-10.1780, lon:123.5970, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1653-01-01", d:"timor-beylikleri"},
     {f:"1653-01-01", t:"1949-12-27", d:"hollanda-dogu-hint"},{f:"1949-12-27",t:"2000-12-31",d:"endonezya-cumhuriyeti",kaynak:"Office of the Historian; Britannica Indonesia"}] },

// Dili — Portekiz 1769'da idare merkezini buraya taşıdı; Doğu Timor
// 1975'e kadar Portekiz toprağı kaldı.
{ ad:"Dili", tur:"liman", lat:-8.5560, lon:125.5600, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1769-10-10", d:"timor-beylikleri"},
     {f:"1769-10-10", t:"1923-10-29", d:"portekiz"},{f:"1923-10-29",t:"1975-12-07",d:"portekiz-timor",kaynak:"Endonezya istilasi 1975-12-07; Portekiz egemenligi birakmadi (BM SC Res 384)"},{f:"1975-12-07",t:"1999-10-25",d:"endonezya-dogu-timor",kaynak:"Endonezya ilhaki 1976-07-17 BM tarafindan taninmadi; SC Res 1272"},{f:"1999-10-25",t:"2000-12-31",d:"untaet",kaynak:"UNSC Resolution 1272 (25 Ekim 1999)"}] },

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
{ ad:"Manila", tur:"liman", lat:14.5990, lon:120.9840, g:2, k:3, d:[],
  s:[{f:"0900-01-01",t:"1281-01-01",d:"tondo",kesinlik:"yil",kaynak:"SAHİP: tondo (BOYALAR'da mevcut; BOŞLUK BEYANI karşılandı, 27 Ekim 2026 — beyanlı yaklaşıklık aşağıdaki kaynakla) · Postma, A., 'The Laguna Copper-Plate Inscription: Text and Commentary', Philippine Studies 40/2 (1992): 183-203 (philippinestudies.net pdf, bu oturumda okundu), Date and Provenance: «The LC1 bears the Saka date of 822, or 900 A.D.» | Postma, A., 'The Laguna Copper-Plate Inscription: Text and Commentary', Philippine Studies 40/2 (1992): 183-203 (philippinestudies.net pdf, bu oturumda okundu), Placenames: «a separate town in earlier times, situated at the mouth of the Pasig River, as the synonym of the name Tundun» | BEYANLI YAKLAŞIKLIK: Tundun=Tondo özdeşleştirmesi Postma'nın hipotezidir; yazıtın 900'de yazılması şehrin kuruluşu DEĞİL, ilk yazılı tanığıdır (f=0900 görünme alt sınırı). Tondo (14.615,120.972) atlas Manila noktasının 2 km yakınındadır. 1281 dikişi: tondo → filipin-racaliklari mevcut zincirde (Tondo künyesi t=1571 sürer) — RAPORda. · DOGU-500-1281"},{f:"1281-01-01", t:"1571-06-24", d:"filipin-racaliklari"},
     {f:"1571-06-24", t:"1762-10-06", d:"ispanya"},
     {f:"1762-10-06", t:"1764-05-31", d:"ingiltere"},
     {f:"1764-05-31", t:"1898-08-13", d:"ispanya"},
     {f:"1898-08-13", t:"1923-10-29", d:"abd"},{f:"1923-10-29",t:"1935-11-15",d:"amerikan-filipinleri",kaynak:"Office of the Historian, Philippine independence (Treaty of Manila 1946-07-04); Britannica 'Philippines'"},{f:"1935-11-15",t:"1946-07-04",d:"filipin-commonwealth",kaynak:"Office of the Historian, Philippine independence (Treaty of Manila 1946-07-04); Britannica 'Philippines'"},{f:"1946-07-04",t:"2000-12-31",d:"filipinler-cumhuriyeti",kaynak:"Office of the Historian, Philippine independence (Treaty of Manila 1946-07-04); Britannica 'Philippines'"}] },

// Cebu — Magellan 1521'de burada öldürüldü; Legazpi 27 Nisan 1565'te
// ilk kalıcı İspanyol yerleşimini kurdu.
{ ad:"Cebu", tur:"liman", lat:10.3170, lon:123.8910, g:1, k:3, d:[],
  s:[{f:"1281-01-01", t:"1565-04-27", d:"filipin-racaliklari"},
     {f:"1565-04-27", t:"1898-08-13", d:"ispanya"},
     {f:"1898-08-13", t:"1923-10-29", d:"abd"},{f:"1923-10-29",t:"1935-11-15",d:"amerikan-filipinleri",kaynak:"Office of the Historian, Philippine independence (Treaty of Manila 1946-07-04); Britannica 'Philippines'"},{f:"1935-11-15",t:"1946-07-04",d:"filipin-commonwealth",kaynak:"Office of the Historian, Philippine independence (Treaty of Manila 1946-07-04); Britannica 'Philippines'"},{f:"1946-07-04",t:"2000-12-31",d:"filipinler-cumhuriyeti",kaynak:"Office of the Historian, Philippine independence (Treaty of Manila 1946-07-04); Britannica 'Philippines'"}] },

// Colo (Jolo) — Sulu Sultanlığı; İspanya üç yüz yıl boyunca ilhak
// edemedi, sultan 22 Mart 1915 Carpenter Antlaşması'yla dünyevî
// egemenliğini Amerika'ya devretti.
{ ad:"Colo (Jolo)", tur:"liman", lat:6.0530, lon:121.0020, g:1, k:1,kd:[{f:"1457-01-01",t:"1915-03-22",k:1,m:"Colo (Jolo)"}], d:[],
  s:[{f:"1281-01-01", t:"1915-03-22", d:"sulu-sultanligi"},
     {f:"1915-03-22", t:"1923-10-29", d:"abd"},{f:"1923-10-29",t:"1935-11-15",d:"amerikan-filipinleri",kaynak:"Office of the Historian, Philippine independence (Treaty of Manila 1946-07-04); Britannica 'Philippines'"},{f:"1935-11-15",t:"1946-07-04",d:"filipin-commonwealth",kaynak:"Office of the Historian, Philippine independence (Treaty of Manila 1946-07-04); Britannica 'Philippines'"},{f:"1946-07-04",t:"2000-12-31",d:"filipinler-cumhuriyeti",kaynak:"Office of the Historian, Philippine independence (Treaty of Manila 1946-07-04); Britannica 'Philippines'"}] },

// Kotabato — Magindanao Sultanlığı; Sultan Kudarat XVII. yüzyılda
// İspanyol seferlerini püskürttü. İspanya 1888'de nihayet bağladı,
// Amerika 1899'da devraldı.
// HAYALET-KUNYE-1008-K · `magindanao-sultanligi` künyesi 1515-01-01'de başlıyor (kesinlik onyil); 1281→1515-01-01 dilimi → `filipin-racaliklari`.
//   öncül `filipin-racaliklari`: TDV `filipinler` «datularla (yerli kabile reisleri)».
{ ad:"Kotabato (Magindanao)", tur:"sehir", lat:7.2230, lon:124.2460, g:0, k:1,kd:[{f:"1281-01-01",t:"1888-01-01",k:1,m:"Kotabato (Magindanao)"}], d:[],
  s:[{f:"1281-01-01", t:"1515-01-01", d:"filipin-racaliklari"},
     {f:"1515-01-01", t:"1888-01-01", d:"magindanao-sultanligi"},
     {f:"1888-01-01", t:"1898-08-13", d:"ispanya"},
     {f:"1898-08-13", t:"1923-10-29", d:"abd"},{f:"1923-10-29",t:"1935-11-15",d:"amerikan-filipinleri",kaynak:"Office of the Historian, Philippine independence (Treaty of Manila 1946-07-04); Britannica 'Philippines'"},{f:"1935-11-15",t:"1946-07-04",d:"filipin-commonwealth",kaynak:"Office of the Historian, Philippine independence (Treaty of Manila 1946-07-04); Britannica 'Philippines'"},{f:"1946-07-04",t:"2000-12-31",d:"filipinler-cumhuriyeti",kaynak:"Office of the Historian, Philippine independence (Treaty of Manila 1946-07-04); Britannica 'Philippines'"}] },

];
