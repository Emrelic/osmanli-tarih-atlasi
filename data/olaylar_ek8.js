// data/olaylar_ek8.js — KRONOLOJI EK 8
// 🔴 27 Agustos 2026 ONARIM: bu dosya 15 Agustos'tan beri VAR ve
//    index.html onu YUKLUYOR. Koordinatorun sartnamesi onu yanlislikla
//    'yeni dosya' diye tarif etti; isci dosyayi YENIDEN YAZDI ve 8 madde
//    dustu. Sonuc: Degismez 2 · 521 kirilma 0 acik -> 3 ACIK.
//    Onarim: HEAD surumu ile yeni maddeler BIRLESTIRILDI, hicbiri silinmedi.
// ⚠️ BU DOSYAYA YAZAN: EKLE, YENIDEN YAZMA. Var olan maddeler baska
//    kirilmalarin Degismez 2 karsiligidir.
//
// 🔴🔴 12 EYLÜL 2026 — AYNI HATA İKİNCİ KEZ YAŞANDI VE BU SEFER DÜZELTİLDİ.
//    KITA 3 — DALGA 2 KRONOLOJİSİ oturumu, şartnamesinde bu dosya YİNE
//    "YENİ dosya" diye tarif edildiği için Write ile TAMAMEN ÜZERİNE
//    YAZDI (15 eski madde bir an için diskten SİLİNDİ — commit
//    EDİLMEDİ, git HEAD'de sağlam kaldığı için kurtarıldı). Oturumun
//    kendisi git status'ta "M" (yeni değil, DEĞİŞTİRİLMİŞ) görünce
//    şüphelendi, `git show HEAD:data/olaylar_ek8.js` ile eski hâli
//    geri getirdi ve BİRLEŞTİRDİ — hiçbir madde kalıcı olarak
//    kaybolmadı. Bu artık İKİNCİ VAKA: "YENİ dosya" iddiası bu isim
//    için güvenilmez hâle geldi — bir SONRAKİ oturum bu dosyaya
//    görev alırsa ÖNCE `git log -- data/olaylar_ek8.js` ile geçmişine
//    baksın, şartnameye körü körüne güvenmesin (D036/D178 sınıfı).
//    Aşağıdaki 15 madde 27 Ağustos'tan kalma (Osmanlı/dünya karışık,
//    "OLAYLAR EK 8" adının ilk kullanımı); ondan sonraki 19 madde
//    12 Eylül DALGA 2 KRONOLOJİSİ partisi (Okyanusya/Sibirya-Bozkır/
//    Orta Asya, kaynak zinciri: HAZIRLIK-DALGA2 → PAKET-DALGA2 →
//    bu dosya, D036 ile bağımsız doğrulandı).
//
// KAPSAM DIŞI BIRAKILAN 3 ADAY (bu dosyaya YAZILMADI, "bulunamadı"):
//   kazan (1521-01-01), mogulistan (1462-01-01),
//   buhara-halk-cumhuriyeti (1922-07-07) — üçü de PAKET-DALGA2'nin
//   "③ ÜÇ BULUNAMAYAN" bölümünde TEK dayanağın Wikipedia olduğu,
//   akademik kaynağın (varsa) erişilemediği açıkça yazılı; §4
//   "Vikipedi TEK DAYANAK DEĞİLDİR" kuralı KATI uygulandı.
//   tui-tonga-imparatorlugu: HAZIRLIK'ın kendi kararıyla zaten BOŞ
//   (sözlü-gelenek dönemi, gün/yıl çözünürlüğü akademik kaynakta yok).
window.OLAYLAR_EK8 = [
 {
  "t": "1460-01-01",
  "b": "İzvornik (Zvornik) kalesinin fethi",
  "tur": "fetih",
  "onem": 2,
  "dunya": 1,
  "kapsam": "dis",
  "etiket": [
   "toprak-kazanc",
   "savas"
  ],
  "yer_id": "İzvornik (Zvornik)",
  "d": "Drina kıyısındaki İzvornik kalesi 1460'ta Osmanlı tarafından fethedildi. TDV İslâm Ansiklopedisi'ne göre idarî ve askerî açıdan elverişli konumu sebebiyle önce bir kaza merkezi yapıldı, 1480'de aynı adı taşıyan sancağın merkezine dönüştürüldü ve 1491'de taş surlarla tahkim edilerek altı cami, sekiz tekke ve hamamlarıyla önemli bir idarî-ticarî merkeze dönüştü. ⚠️ TARİH HAKKINDA: TDV yalnız yıl veriyor, gün vermiyor.",
  "kaynak": "izvornik"
 },
 {
  "t": "1509-02-03",
  "b": "Diu Deniz Savaşı — Portekiz'in Hint Okyanusu'nda üstünlüğü",
  "tur": "savas",
  "onem": 4,
  "dunya": 2,
  "kapsam": "dis",
  "etiket": [
   "savas",
   "denizcilik"
  ],
  "yer_id": "Diu",
  "d": "Gücerat Sultanlığı adına bölgeyi yöneten Melik Ayaz'ın Memlük destekli donanması, bu kıyılarda ikmal üssü kurmaya çalışan Portekiz genel valisi Francisco de Almeida'nın filosu karşısında Diu açıklarında ağır bir yenilgiye uğradı. Bu yenilgi Portekiz'e Hint Okyanusu'nda kalıcı deniz üstünlüğü kazandırdı ve Memlük-Gücerat deniz gücünü kırdı; Osmanlı'nın 1517 sonrası devraldığı Kızıldeniz-Hint Okyanusu mücadelesinin (Cidde savunması, 1538 Diu kuşatması) arka planını oluşturan güç dengesizliğinin başlangıcı sayılır.",
  "kaynak": "diu"
 },
 {
  "t": "1515-01-01",
  "b": "Nusaybin ve Cizre-Mardin çevresinin İdrîs-i Bitlisî eliyle Osmanlı'ya katılması",
  "tur": "fetih",
  "onem": 2,
  "dunya": 2,
  "kapsam": "dis",
  "etiket": [
   "askeri",
   "toprak-kazanc"
  ],
  "yer_id": "Nusaybin",
  "d": "Çaldıran seferi (1514) sonrasında Doğu Anadolu'da yürütülen ilhak sürecinde İdrîs-i Bitlisî'nin bölgedeki Sünnî Kürt beyleriyle kurduğu ilişkiler sayesinde Nusaybin, 921 (1515) yılı sonlarında savaşsız biçimde Osmanlı topraklarına katıldı. TDV kesin ay/gün vermiyor, yalnız 'yılın sonlarında' diyor. ⚠️ Komşu kasabalar Derik (Malikiye) ve Silopi aynı bölgesel teslim dalgasının parçası olabilir ama TDV'de müstakil maddeleri yok — bulunamadı, tarihleri buraya dayandırılmadı.",
  "kaynak": "nusaybin"
 },
 {
  "t": "1526-01-01",
  "b": "Kalender Şah isyanı",
  "tur": "isyan",
  "onem": 3,
  "dunya": 1,
  "kapsam": "ic",
  "etiket": [
   "isyan",
   "savas"
  ],
  "yer_id": "Elbistan",
  "d": "Anadolu'daki malî sıkıntılar, yeni idarî düzenlemelerden duyulan hoşnutsuzluk ve Safevî propagandasının etkisiyle Çiçekli, Akça Koyunlu, Masadlı ve Bozoklu gibi büyük Türkmen aşiretleriyle daha önceki Baba Zünnûn isyanından kalan gruplar Kalender Şah'ın çevresinde toplanıp yaklaşık otuz bin kişilik bir güce ulaştı. İsyancılar önce Rum Beylerbeyi'ni yenilgiye uğrattı; Sadrazam Makbul İbrâhim Paşa'nın asker toplayıp haklarını vaad etmesiyle Kalender'in desteği eridi ve isyan Elbistan civarında bastırıldı, Kalender Şah ile Veli Dündar Haziran 1527'de öldürüldü.",
  "kaynak": "kalender-sah"
 },
 {
  "t": "1554-08-22",
  "k": "fetih",
  "etiket": [
   "toprak-kazanc",
   "savas"
  ],
  "b": "Şehrizor'un fethi — Zalm Kalesi'nin alınışı",
  "gun": "22 Ağustos 1554",
  "yer": "Şehrizor (Zalm Kalesi), Kürdistan",
  "yer_id": "Şehrizor",
  "kisiler": "Baltacı Mehmed Paşa, Kanûnî Sultan Süleyman",
  "d": "Kanûnî'nin Nahçıvan seferi sırasında Bağdat Beylerbeyi Osman Paşa, Şehrizor yöresini ele geçirmekle görevlendirilmişti; onun ölümü üzerine Bağdat beylerbeyi olan Baltacı Mehmed Paşa, bölgenin merkezî kalesi Zalm'ı kuşatarak 22 Ağustos 1554'te (23 Ramazan 961) aldı. Böylece Zağros'un batı yamacındaki Şehrizor havzası Osmanlı idaresine girdi ve Bağdat ile Kürdistan arasındaki bağlantı güvenceye alındı; bölge önce sancak hâline getirilerek Murad Bey'e verildi. 1563'te Beylerbeyi Muzaffer Paşa yeni eyalet merkezi olarak Gülanber Kalesi'ni inşa etti; kale 1623'te Şah Abbas'ın emriyle yıktırılacak, 1638'de Hüsrev Paşa döneminde yeniden kurulacaktı.",
  "kaynak": "sehrizor — TDV birebir: 'Kanûnî'nin Nahcıvan seferi esnasında Bağdat Beylerbeyi Osman Paşa, Şehrizor yöresini ele geçirmekle görevlendirildi.' · '…Osman Paşa'nın vefatı üzerine Bağdat beylerbeyi olan Baltacı Mehmed Paşa tarafından zaptedildi (23 Ramazan 961 / 22 Ağustos 1554).' · 'Bölge sancak haline getirilerek Murad Bey'e verildi.' · (H-0017, 13 Eylül 2026: aynı fethin 1554-01-01 tarihli ikinci maddesi olaylar_ek5.js'ten kaldırıldı; kaynaklı bağlamı buraya taşındı)",
  "duygu": [
   "🎉"
  ]
 },
 {
  "t": "1577-01-01",
  "k": "vassal",
  "etiket": [
   "toprak-kazanc",
   "diplomasi"
  ],
  "b": "Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sahra kervan kavşağı",
  "gun": "1577 — atlas verisindeki kırılma günü; TDV asıl olayı 1551'e bağlıyor",
  "yer": "Murzuk (Fizan), Gât, Sokna, Câlû, Sebha, Ubârî, Vaddân (Cufre), Zilla (Zella), Merâde, Tırgan (Traghan), Zevîle (Zawila), el-Katrûn",
  "kisiler": "Evlâd-ı Muhammed hanedanı, Trablusgarp beylerbeyi",
  "d": "Trablusgarp beylerbeyiliğinin baskısı sonucunda Sahra'nın kervan kavşağı Fizan, merkezi Murzuk olmak üzere Osmanlı tâbiiyetini kabul etti. TDV İslâm Ansiklopedisi'nin Fizan maddesine göre bölgeyi yöneten Evlâd-ı Muhammed hanedanı, düzenli vergi ödemek şartıyla iç işlerinde serbest bırakıldı; Fizan, 1551'de alınan Trablus eyaletine bağlı bir sancak olarak teşkilâtlandırıldı. Böylece Trablus-Murzuk-Bornu hattındaki köle, altın ve deve ticareti Osmanlı denetimine girdi. Bu dolaylı idare 1711'de Karamanlılar'ın, 1842'de ise doğrudan kaza teşkilâtının eline geçecekti. ⚠️ TDV BU SÜRECİ 1551'E BAĞLAR, 1577'YE DEĞİL. Atlas verisinde bu 12 yerleşimin `hafsi` (Tunus Hafsî Devleti) dönemi 1577-01-01'e kadar sürüyor ve bu tarihte Osmanlı tâbiiyetine geçiyor — ama Hafsî Devleti'nin kendisi 1574-09-13'te sona erdi (`oturumlar/NOKTA-HALKA2-3.md`'nin önceki tespiti: 2,3 yıllık bir 'hayalet', çözülmemiş bilinen borç). Bu madde o iç tarihe DOĞRU İÇERİĞİ bağlıyor; tarihin kendisinin 1551'e çekilip çekilmeyeceği ayrı bir karardır, VERİ SAHİPLİK'e devredilmiştir.",
  "kaynak": "fizan",
  "duygu": [
   "🎌"
  ],
  "yer_id": "Murzuk (Fizan)"
 },
 {
  "t": "1585-01-01",
  "k": "fetih",
  "etiket": [
   "toprak-kazanc"
  ],
  "b": "Nahçıvan ve Ordubad'ın Osmanlı idaresine girmesi",
  "gun": "1585",
  "yer": "Nahçıvan, Ordubad, Aras vadisi",
  "yer_id": "Nahçıvan",
  "kisiler": "Ferhad Paşa, Özdemiroğlu Osman Paşa",
  "d": "1583'te Revan'ın alınıp beylerbeyilik merkezi yapılmasının ardından Aras vadisi boyunca güneydoğuya inen kuvvetler Nahçıvan ile Ordubad'ı Osmanlı idaresine bağladı; iki şehir yeni kurulan Revan eyaletinin sancakları oldu. TDV İslâm Ansiklopedisi'nin Nahcıvan maddesine göre şehirde ilk defa kalıcı Osmanlı idaresi bu savaş sırasında kuruldu — 1553'teki Nahcıvan seferinde şehir alınmış ama yalnızca yağmalanıp terk edilmişti. Böylece Revan ile Tebriz arasındaki ordu yolu açıldı ve aynı yılın eylülünde Tebriz'e girilebildi. Şah Abbas 1603'te Nahçıvan'ı geri alacaktı.",
  "kaynak": "nahcivan",
  "duygu": [
   "🎉",
   "😔"
  ]
 },
 {
  "t": "1603-01-01",
  "b": "Deli Hasan Paşa isyanı ve Bosna beylerbeyiliğiyle yatıştırılması",
  "tur": "isyan",
  "onem": 3,
  "dunya": 1,
  "kapsam": "ic",
  "etiket": [
   "isyan",
   "siyaset"
  ],
  "yer_id": "Kütahya",
  "d": "Celâlî lideri Karayazıcı Abdülhalim'in 1602'de ölümünün ardından hareketin başına geçen kardeşi Deli Hasan, süregelen Avusturya savaşlarının Celâlî gruplarına tanıdığı hareket serbestîsinden yararlanarak Kütahya'yı istilâ edip Afyonkarahisar üzerine yürüdü. Devletin aynı anda Avusturya ve İran cepheleriyle uğraştığı bu dönemde mesele 'tatlılıkla' çözüldü: Deli Hasan'a paşalık rütbesi ve Bosna beylerbeyiliği verilerek isyan hareketi 1603'te resmen sona erdirildi. TDV yalnız yıl veriyor, ay/gün belirtmiyor.",
  "kaynak": "celali-isyanlari"
 },
 {
  "t": "1637-06-18",
  "k": "kayip",
  "etiket": [
   "toprak-kayip",
   "savas"
  ],
  "b": "Azak Kalesi'nin Don Kazaklarına kaybı",
  "gun": "18 Haziran 1637",
  "yer": "Azak (Azov), Don ağzı",
  "yer_id": "Azak",
  "kisiler": "Don Kazakları, IV. Murad",
  "d": "Don Kazakları 21 Nisan 1637'de kuşattıkları Azak Kalesi'ni iki ay sonra ele geçirdiler; Karadeniz'in kuzeydoğu kapısı ve Don ticaretinin kilidi olan kale ilk defa Osmanlı elinden çıktı. TDV İslâm Ansiklopedisi'nin Azak maddesine göre Kazaklar kaleyi 1637'de aldı, 1641'de Deli Hüseyin Paşa kumandasındaki üç ay süren büyük kuşatmaya dayandı ve ancak 1642'de Kırım Hanı Mehmed Giray'ın gelişiyle kaleyi boşalttı. Devlet o sırada Bağdat cephesiyle meşguldü; kalenin beş yıl elde tutulamaması Karadeniz'in 'Osmanlı gölü' olma vasfının ilk çatlağıdır.",
  "kaynak": "azak",
  "duygu": [
   "😔"
  ]
 },
 {
  "t": "1657-11-15",
  "k": "fetih",
  "etiket": [
   "toprak-kazanc",
   "savas"
  ],
  "b": "Limni ve Semadirek'in geri alınışı",
  "gun": "Kasım 1657",
  "yer": "Limni, Semadirek (kuzey Ege)",
  "yer_id": "Limni",
  "kisiler": "Köprülü Mehmed Paşa, IV. Mehmed",
  "d": "Bozcaada'nın 31 Ağustos 1657'de kurtarılmasından sonra Köprülü Mehmed Paşa donanmayı kuzeye yönlendirdi ve Venedik'in on altı aydır elinde tuttuğu Limni ile Semadirek'i geri aldı. TDV İslâm Ansiklopedisi'nin Limni maddesine göre ada Temmuz 1656'da Venedik'in eline geçmiş, Kasım 1657'de geri alınmıştı. Böylece Çanakkale Boğazı'nın ağzındaki Venedik ablukası tamamen kırıldı ve İstanbul'un tahıl yolu yeniden güvene alındı; sadrazamın olağanüstü yetkilerle geldiği ilk yılın en somut kazancı budur.",
  "kaynak": "limni",
  "duygu": [
   "🎉"
  ]
 },
 {
  "t": "1688-09-11",
  "b": "Knin'in Venedik'e kaybı — 166 yıllık Dalmaçya sınır kalesi düştü",
  "tur": "kayip",
  "onem": 3,
  "dunya": 2,
  "kapsam": "dis",
  "etiket": [
   "askeri",
   "toprak-kayip",
   "serhat",
   "venedik"
  ],
  "yer_id": "Knin",
  "d": "1683 Viyana bozgunundan sonra çok cepheli açılan savaşta Venedik kuvvetleri Dalmaçya içlerine ilerledi. Dalmaçya generali Girolamo Cornaro'nun kuşattığı Knin, on iki günlük bir muhasaradan sonra beylerbeyi Mehmed Paşa tarafından teslim edildi. TDV dönemin genel kayıp listesinde 'Bosna'daki Knin ve civarındaki kaleler ise Venedikliler'in eline geçmişti' diye anar ama gün vermez. Knin, 1522'de Gazi Hüsrev Bey'in fethettiği ve 166 yıl Osmanlı elinde kalan Dalmaçya sınır hattının kilit kalesiydi; kaybı bölgeyi büyük ölçüde Venedik'e açtı.",
  "kaynak": "suleyman-ii (TDV, genel bağlam — gün vermiyor) + Ive Mažuran, Hrvati i Osmansko Carstvo, Zagreb 1998, s.262-263 (kesin tarih; TDV bu taneciği kapsamıyor, CLAUDE.md §4)"
 },
 {
  "t": "1779-04-01",
  "k": "fetih",
  "etiket": [
   "toprak-kazanc"
  ],
  "b": "Basra'nın İran işgalinden geri alınışı",
  "gun": "1779",
  "yer": "Basra, Şattülarab",
  "kisiler": "Kerim Han Zend, Süleyman Ağa (Büyük Süleyman Paşa)",
  "d": "Kerim Han Zend'in 1776'da ele geçirdiği Basra, hanın 1779 başında ölümü üzerine İran'da başlayan taht kavgası yüzünden boşaltıldı. Üç yıllık işgal sırasında şehri savunan ve esir düşen Süleyman Ağa geri dönerek Basra mütesellimi, ardından Bağdat valisi oldu. Körfez ticareti Osmanlı denetimine döndü; işgal boyunca İngiliz Doğu Hindistan Şirketi acentesi Basra'dan Kuveyt'e taşınmış ve Kuveyt'in liman olarak yükselişi böyle başlamıştı.",
  "kaynak": "basra",
  "duygu": [
   "🎉"
  ],
  "yer_id": "Basra"
 },
 {
  "t": "1830-02-03",
  "k": "antlasma",
  "etiket": [
   "diplomasi",
   "toprak-kayip"
  ],
  "b": "Londra Protokolü — Yunanistan'ın bağımsızlığının tanınması",
  "gun": "3 Şubat 1830",
  "yer": "Londra",
  "yer_id": "Londra",
  "kisiler": "II. Mahmud, Reşid Mehmed Paşa",
  "d": "İngiltere, Fransa ve Rusya'nın Londra'da imzaladığı protokol, Edirne Antlaşması'nın öngördüğü özerkliği aşarak Yunanistan'ı BAĞIMSIZ bir devlet olarak tanıdı. Hükümler: Mora yarımadası, Attika ve Eğriboz ile Kiklad adaları yeni devlete bırakıldı; sınır Arta-Volos hattında çizildi; Osmanlı Devleti'ne tazminat ödenmesi kararlaştırıldı; devletin yönetim biçimi 'bağımsız monarşi' olarak belirlendi. Bu, imparatorluktan kopan İLK bağımsız devlettir ve sonraki Balkan bağımsızlıklarının hukukî örneğini kurmuştur.",
  "kaynak": "yunanistan",
  "duygu": [
   "🤝"
  ]
 },
 {
  "t": "1835-01-01",
  "b": "Abdullah b. Reşîd Hâil emirliğini ele geçirdi — Şammar (Reşîdî) hânedanının kuruluşu",
  "tur": "kurulus",
  "onem": 2,
  "dunya": 1,
  "kapsam": "dis",
  "etiket": [
   "siyaset",
   "kurulus"
  ],
  "yer_id": "Hâil",
  "d": "1818'de Mehmed Ali Paşa kuvvetlerinin Dir'iyye'yi düşürmesiyle Cebelişemmer bölgesi Suûdî hâkimiyetinden çıktı ve emirlik İbn Ali ailesinin elinde kaldı. Osmanlı hâkimiyetinin yeniden tesisini destekleyen Abdullah b. Reşîd, kardeşi Ubeyd ile birlikte İbn Ali ailesine karşı giriştiği mücadeleyi 1835'te kazanarak Hâil emirliğini ele geçirdi ve Reşîdî hânedanının hâkimiyetini kurdu. TDV kaynağı yalnız yılı veriyor, gün belirtmiyor. ⚠️ VERİ NOTU: data/yerlesimler.js'teki Hâil kaydı bu değişimi 1836-01-01 olarak taşıyor (1 yıl fark) — Değişmez 2 senkronu için yerleşim tarihinin 1835-01-01'e çekilmesi gerekir; bu düzeltme Yerleşim/Entegrasyon oturumuna aittir, benim yetkim dışında.",
  "kaynak": "residiler"
 },
 {
  "t": "1920-08-10",
  "k": "antlasma",
  "etiket": [
   "toprak-kayip",
   "diplomasi"
  ],
  "b": "Sevr Antlaşması — imparatorluğun paylaşım metni",
  "gun": "10 Ağustos 1920",
  "yer": "Sèvres, Paris",
  "kisiler": "Vahdettin, Damad Ferid Paşa, Rıza Tevfik, Hâdi Paşa",
  "d": "Osmanlı hükümetinin İtilâf devletleriyle imzaladığı ve imparatorluğu fiilen tasfiye eden metin. Hükümler: Doğu Trakya ve İzmir bölgesi Yunanistan'a; Doğu Anadolu'da bağımsız Ermenistan ve özerk Kürdistan öngörüldü; Suriye Fransa'ya, Irak ile Filistin İngiltere'ye manda olarak bırakıldı; Boğazlar uluslararası komisyona devredildi; ordu 50.700 kişiye indirildi, kapitülasyonlar geri geldi, maliye İtilâf denetimine verildi. Ankara'daki Büyük Millet Meclisi antlaşmayı HİÇ TANIMADI ve imzalayanları vatan haini ilân etti; metin yürürlüğe girmedi, yerine 1923'te Lozan geldi. Haritada karşılığı olmamasının sebebi budur — Sevr hukuken hiç uygulanmadı.",
  "kaynak": "sevr-antlasmasi",
  "duygu": [
   "🤝"
  ],
  "yer_id": "Paris"
 },

{ t:"1819-11-01", tur:"din", etiket:["din","toplum","hanedan-degisimi"], b:"ʻAi Noa — Hawaii'de geleneksel kapu sisteminin sona erdirilmesi", gun:"Kasım 1819 (gün kaynaklarda yok)", yer:"Kailua-Kona, Hawaii adası", kisiler:"II. Kamehameha (Liholiho), Kraliçe Kaʻahumanu", d:"Kamehameha I'in ölümünden altı ay sonra, yeni kral Liholiho annesi Kaʻahumanu'nun desteğiyle kadın-erkek ayrı yemek yeme yasağını (ʻaikapu) bilerek çiğnedi. 'ʻAi Noa' (serbest yemek) olarak anılan bu eylem geleneksel kapu din-hukuk sistemini resmen sona erdirdi; adalardaki eski tapınaklar (heiau) kısa sürede yıkıldı. Batı misyonerlerinin gelişinden (1820) önceki en büyük dinî-siyasî kırılmadır.", kaynak:"bulunamadı — TDV kapsamı dışı (Pasifik); Wikipedia + Punahou School/UH Hilo ders notu çapraz kontrol edildi, ay doğrulandı, gün hiçbir kaynakta yok" },

{ t:"1840-10-08", tur:"kurulus", etiket:["idari","anayasa"], b:"Hawaii'nin ilk yazılı anayasası ilan edildi", yer_kon:[21.3069,-157.8583], gun:"8 Ekim 1840", yer:"Honolulu", kisiler:"III. Kamehameha", d:"Krallığın ilk tam yazılı anayasası ilan edildi; kral yetkisini kısıtlayan, temsilî bir meclis kuran bu belge Hawaii'yi anayasal monarşiye dönüştürdü.", kaynak:"bulunamadı — akademik/kurumsal kaynak: UH Law School Archival Collections (birincil kaynak neşri)" },

{ t:"1887-07-06", tur:"siyaset", etiket:["anayasa","darbe-askeri"], b:"Süngü Anayasası — Kral Kalākaua'nın yetkileri budandı", yer_kon:[21.3069,-157.8583], gun:"6 Temmuz 1887 (imza); 7 Temmuz ilan", yer:"Honolulu", kisiler:"Kral Kalākaua, 'Hawaiian League' silahlı milisleri", d:"Silahlı bir milis grubu Kral Kalākaua'yı tehdit ederek krallığın yetkilerini büyük ölçüde budayan yeni bir anayasayı imzalamaya zorladı; belge 'Süngü Anayasası' (Bayonet Constitution) olarak anılır ve tahtı fiilen beyaz yerleşimci elitin denetimine soktu.", kaynak:"1887 Constitution of the Kingdom of Hawaii (Wikisource, belgenin kendi dateline'ı: 'SIGNED BY HIS MAJESTY KALAKAUA, JULY 6, AND PROMULGATED JULY 7, 1887') + Punawaiola/UH Mānoa 'Iulai 6' sayfası — BİRİNCİL KAYNAK" },

{ t:"1894-07-04", tur:"kurulus", etiket:["idari","hanedan-degisimi"], b:"Hawaii Cumhuriyeti ilan edildi", yer_kon:[21.3069,-157.8583], gun:"4 Temmuz 1894", yer:"Honolulu", kisiler:"Sanford B. Dole", d:"1893'te Kraliçe Liliuokalani'yi deviren komplocular geçici hükümeti resmî bir cumhuriyete dönüştürdü; Sanford Dole başkan ilan edildi. Bu ara-rejim 1898'deki ABD ilhakına kadar sürdü.", kaynak:"bulunamadı — akademik/kurumsal kaynak: US State Dept FRUS 1894 + Britannica" },

{ t:"1893-02-18", tur:"hukumdar", etiket:["hanedan-degisimi"], b:"I. George Tupou'nun ölümü, II. George Tupou'nun tahta çıkışı (Tonga)", gun:"18 Şubat 1893 (ölüm); taç giyme 17 Mart 1893", yer:"Nukuʻalofa", kisiler:"I. George Tupou (öldü), II. George Tupou (tahta çıktı)", d:"Kurucu kral I. George Tupou'nun ölümüyle torununun torunu II. George Tupou tahta geçti; taç giyme töreni 17 Mart 1893'te Nukuʻalofa'da yapıldı.", kaynak:"bulunamadı — akademik/kurumsal kaynak: Britannica + Find a Grave çapraz kontrol edildi" },

{ t:"1918-04-05", tur:"hukumdar", etiket:["hanedan-degisimi"], b:"II. George Tupou'nun ölümü, Sālote Tupou III'ün tahta çıkışı (Tonga)", gun:"5 Nisan 1918 (ölüm); 6 Nisan ilan; taç giyme 11 Ekim 1918", yer:"Nukuʻalofa", kisiler:"II. George Tupou (öldü, verem), Sālote Tupou III (tahta çıktı)", d:"II. George Tupou veremden öldü; 18 yaşındaki kızı Sālote ertesi gün kraliçe ilan edildi, taç giyme töreni 11 Ekim 1918'de yapıldı.", ic_not_d:"⚠️ KAYNAK ÇELİŞKİSİ ÖLÇÜLDÜ VE ÇÖZÜLDÜ: encyclopedia.com bir noktada '12 Nisan 1908' yazıyordu — bu tarih MANTIKEN İMKÂNSIZ (8 yaşında kraliçe olmak, üstelik o tarihte zaten evli/başbakan eşi olmak çelişir) ve dizgi hatası (1908→1918) sayılıp elendi; gün ikinci akademik kaynakla (Wood-Ellem) teyit edildi.", kaynak:"Wood-Ellem, 'Queen Sālote of Tonga' (Auckland University Press, 1999) — ikinci bağımsız akademik kaynakla teyit edildi" },

{ t:"1893-09-19", tur:"siyaset", etiket:["reform","toplum"], b:"Yeni Zelanda kadınlara oy hakkı tanıyan ilk kendi kendini yöneten ülke oldu", yer_kon:[-41.2865,174.7762], gun:"19 Eylül 1893", yer:"Wellington", kisiler:"Vali Lord Glasgow", d:"Vali Lord Glasgow'un imzaladığı yeni Seçim Yasası ile Yeni Zelanda, kadınlara parlamento seçimlerinde oy hakkı tanıyan dünyanın ilk kendi kendini yöneten ülkesi oldu.", kaynak:"nzhistory.govt.nz — Yeni Zelanda hükûmetinin resmî tarih kurumu, birincil/kurumsal kaynak" },

{ t:"1901-06-11", tur:"toprak-kazanc", etiket:["idari"], b:"Yeni Zelanda sınırları Cook Adaları ve Niue'yi kapsayacak şekilde genişledi", gun:"11 Haziran 1901", yer:"Rarotonga / Cook Adaları, Niue", kisiler:"-", d:"Yeni Zelanda'nın sınırları Cook Adaları (Rarotonga, Aitutaki ve güney adaları ile kuzey Cook Adaları) ve Niue'yi kapsayacak şekilde genişletildi; bu adalar Yeni Zelanda'ya bağlı bölge oldu.", kaynak:"teara.govt.nz — Te Ara, Yeni Zelanda Ansiklopedisi, resmî/akademik kaynak" },

{ t:"1468-01-01", tur:"hukumdar", etiket:["hanedan-degisimi"], b:"Kâsım Han'ın ölümü, Danyal Han'ın tahta çıkışı (Kasım Hanlığı)", yer_kon:[54.945,41.393], gun:"873 (1468)", ic_not_gun:"873 (1468) — TDV gün vermiyor", yer:"Kasimov", kisiler:"Kâsım Han (öldü), Danyal Han (tahta çıktı)", d:"Hanlığın kurucusu Kâsım Han'ın 873/1468'de ölümüyle yerine oğlu Danyal geçti; Danyal 1486'ya kadar hüküm sürdü.", kaynak:"kasim-hanligi (TDV — CANLI, madde gövdesinde birebir tarih)" },

{ t:"1573-01-01", tur:"siyaset", etiket:["din","hanedan-degisimi"], b:"Kasım Hanlığı hükümdarının Hıristiyanlığa geçişi ve hanlıktan alınması", gun:"1573", ic_not_gun:"1573 — TDV gün vermiyor", yer:"Kasimov / Moskova", kisiler:"Sain Bulat Han (Simeon Bekbulatoviç)", d:"Hanlığın başındaki hükümdar 'Semen (Simeon)' adını alıp Hıristiyan oldu; Ruslar müslüman tebaanın tepkisini hesaba katarak onu hanlıktan aldılar. Bu kişi kısa süre sonra Korkunç İvan tarafından 'çarın ve Rusya'nın büyük beyi' unvanıyla Moskova'da nominal hükümdar ilan edildi (1575) — Kasım Hanlığı ile Moskova tahtı arasındaki en çarpıcı kesişme.", kaynak:"kasim-hanligi (TDV — CANLI, madde gövdesinde birebir tarih ve bağlam)" },

{ t:"1609-01-01", tur:"kayip", etiket:["askeri","isyan"], b:"Rus kuvvetlerinin Kasım şehrini zaptı, Uraz Muhammed Han", yer_kon:[54.945,41.393], gun:"1609", ic_not_gun:"1609 — TDV gün vermiyor", yer:"Kasimov", kisiler:"Uraz Muhammed Han, II. Sahte Dimitri", d:"Rusya'daki İç Karışıklıklar Devri'nin (Smuta) yansıması olarak Rus kuvvetleri Kâsım şehrini kuşatıp zaptetti, halkının çoğunu kılıçtan geçirdi. Hanlığın başındaki Uraz Muhammed, II. Sahte Dimitri'yi desteklediği için hedef alınmıştı; ertesi yıl (1610) kendisi de bir komployla öldürüldü.", kaynak:"kasim-hanligi (TDV — CANLI, madde gövdesinde birebir tarih ve bağlam)" },

{ t:"1921-08-14", tur:"kurulus", etiket:["idari"], b:"Tannu Tuva Halk Cumhuriyeti bağımsızlığını ilan etti", gun:"14 Ağustos 1921", yer:"Tuva", kisiler:"-", d:"Tuvan Halk Devrimci Partisi önderliğinde bağımsızlık ilan edildi; ilk anayasanın ilk maddesi devletin 'uluslararası ilişkilerde Sovyet Rusya'nın himayesi altında' hareket ettiğini belirtiyordu.", kaynak:"nit.tuva.asia — \"Novye issledovaniya Tuvy\" (Tuva'nın Yeni Araştırmaları), Tuva tarih-kültürü üzerine hakemli açık erişim dergi, Scopus/WoS/DOAJ indeksli, ISSN 2079-8482" },

{ t:"1922-03-03", tur:"idari", etiket:["idari"], b:"Tannu Tuva hükûmeti fiilen göreve başladı", gun:"3 Mart 1922", yer:"Tuva", kisiler:"-", d:"Şubat 1922'deki ilk parti toplantısının ardından kurulan hükûmet fiilen göreve başladı.", kaynak:"nit.tuva.asia — \"Novye issledovaniya Tuvy\" (Tuva'nın Yeni Araştırmaları), Tuva tarih-kültürü üzerine hakemli açık erişim dergi, Scopus/WoS/DOAJ indeksli, ISSN 2079-8482" },

{ t:"1923-10-12", tur:"idari", etiket:["idari"], b:"Tannu Tuva'nın ilk Büyük Kurultayı toplandı", gun:"12 Ekim 1923", yer:"Tuva", kisiler:"-", d:"Ülkenin ilk Büyük Kurultayı (Halk Meclisi) toplandı; bu, devletin kurumsallaşma sürecinde ilk büyük temsilî toplantısıdır.", kaynak:"nit.tuva.asia — \"Novye issledovaniya Tuvy\" (Tuva'nın Yeni Araştırmaları), Tuva tarih-kültürü üzerine hakemli açık erişim dergi, Scopus/WoS/DOAJ indeksli, ISSN 2079-8482" },

{ t:"1793-05-20", tur:"hukumdar", etiket:["hanedan-degisimi"], b:"Timur Şah'ın ölümü, Zaman Şah'ın cülûsu (Dürrânî Devleti)", yer_kon:[34.528,69.172], gun:"20 Mayıs 1793", yer:"Kabil", kisiler:"Timur Şah (öldü), Zaman Şah (tahta çıktı)", d:"Yirmi yılı aşkın süre ülkeyi içeriden konsolide eden Timur Şah'ın ölümüyle, Kandehar-Herat-Kabil valisi üç kardeş taht için çekişti; başkenti elinde tutan Kabil valisi Zaman Şah 20 Mayıs 1793'te şah oldu. Bu veraset krizi, hânedanın parçalanma sürecinin fiilen başlangıcıdır. (Not: tarih önceki bir taslakta 18 Mayıs 1793 — Timur Şah'ın ölüm günü — olarak yanlış girilmişti; madde metni zaten Zaman Şah'ın CÜLÛSUNU anlatıyordu, tarih metinle 20 Mayıs'a hizalandı — bkz.", ic_not_d:"denetim/PAKET-DALGA2-0911.json ②.)", kaynak:"bulunamadı — TDV'nin 'ahmed-sah-durrani' maddesi Ahmed Şah'ın kuruluşunu (1747-1773) kapsıyor ama bu olayı KAPSAMIYOR (doğrulandı, gövde okundu — TANECİKLİK boşluğu, §4); Wikipedia 'Zaman Shah Durrani' (reign start 20 May 1793) + New World Encyclopedia çapraz" },

{ t:"1920-04-26", tur:"kurulus", etiket:["idari","hanedan-degisimi"], b:"Hârizm Halk Cumhuriyeti ilan edildi", yer_kon:[41.3783,60.3639], gun:"26 Nisan 1920", yer:"Hive", kisiler:"-", d:"1917 Ekim İhtilâli sonrası Hive Hanı'nın devrilmesinin ardından Hârizm Halk Cumhuriyeti ilân edildi.", kaynak:"harizm (TDV — CANLI, madde gövdesinde birebir tarih)" },

{ t:"1921-09-05", tur:"siyaset", etiket:["idari"], b:"Hârizm Sovyet Sosyalist Cumhuriyeti'ne dönüşüm", yer_kon:[41.3783,60.3639], gun:"5 Eylül 1921", yer:"Hive", kisiler:"-", d:"Ülke, adını ve statüsünü değiştirerek Hârizm Sovyet Sosyalist Cumhuriyeti oldu; idari-yasal yapı Sovyet sistemine göre yeniden düzenlendi.", kaynak:"harizm (TDV — CANLI, madde gövdesinde birebir tarih)" },

{ t:"1920-10-08", tur:"kurulus", etiket:["idari","hanedan-degisimi"], b:"Buhara Halk Sovyet Cumhuriyeti ilan edildi", yer_kon:[39.7681,64.421], gun:"8 Ekim 1920", yer:"Buhara", kisiler:"Feyzullah Hocayev", d:"Kızıl Ordu'nun 28-31 Ağustos 1920'de Buhara Emirliği'ni yıkıp Emir Alim Han'ı Doğu Buhara'ya kaçırmasının ardından, Feyzullah Hocayev başkanlığında Buhara Halk Sovyet Cumhuriyeti ilân edildi.", kaynak:"bulunamadı — akademik kaynak: soviethistory.msu.edu (Michigan State Üniversitesi) + Wikipedia çapraz" },

{ t:"1921-09-01", tur:"siyaset", etiket:["anayasa","reform"], b:"Buhara Halk Sovyet Cumhuriyeti yeni anayasası kabul edildi", yer_kon:[39.7681,64.421], gun:"Eylül 1921 (gün kaynaklarda yok)", yer:"Buhara", kisiler:"-", d:"Rus 1918 anayasasının aksine özel toprak/üretim mülkiyetine izin veren ve proleter-olmayanlara da oy hakkı tanıyan yeni bir anayasa kabul edildi (devrik emirin akrabaları ve büyük toprak sahipleri hariç).", kaynak:"bulunamadı — akademik kaynak: soviethistory.msu.edu (Buhara Halk Sovyet Cumhuriyeti Anayasası metni, MSU arşivi) + Wikipedia çapraz" },

{ t:"1924-01-01", tur:"kayip", etiket:["idari","toprak-kayip","hanedan-degisimi"], b:"Hârizm SSC ve Buhara Halk Sovyet Cumhuriyeti'nin millî sınırlandırmayla sona ermesi — Özbekistan/Türkmenistan SSC'lerinin kuruluşu", gun:"1924 (gün KAYNAKLAR ARASINDA ÇELİŞİYOR — künyenin kendi f:/t: günü DEVRALINDI, bkz. not)", yer:"Hive, Buhara, Taşkent", kisiler:"Feyzullah Hocayev", d:"Sovyet 'millî sınırlandırma' (natsionalno-territorialnoe razmezhevanie) kararıyla Hârizm Sovyet Sosyalist Cumhuriyeti ile Buhara Halk Sovyet Cumhuriyeti ilga edildi; toprakları yeni kurulan Özbekistan ve Türkmenistan Sovyet Sosyalist Cumhuriyetleri arasında paylaştırıldı (Hîve'nin doğusu Özbekistan'a, batısı Türkmenistan'a). TDV'nin `harizm` maddesi: '1924'te Hîve Hanlığı'nın doğu kesimleri Özbekistan SSC'ye, batı tarafı da Türkmenistan SSC'ye bırakıldı' — yalnız YIL veriyor.", ic_not_d:"⚠️ KAYNAK ÇELİŞKİSİ BİLDİRİLİYOR, ÇÖZÜLMEDİ: akademik kaynaklar sürecin BİRDEN FAZLA kararla ilerlediğini gösteriyor — Türkistan MİK'in 16 Eylül 1924 kararı, Buhara/Hârizm kurultaylarının Eylül-Ekim 1924 toplantıları, SSCB Merkezî Yürütme Kurulu'nun 14 Ekim 1924 kararı, ve cumhuriyetlerin fiilen SSCB'ye 27 Ekim 1924'te birer birlik cumhuriyeti olarak katılıp aynı anda ilga edilmesi — tek bir 'kesin gün' YOK, süreç ~6 haftaya yayılıyor. §4'ün kuralı gereği (künyenin f:/t: günü bir KAYNAK DEĞİLDİR ama BURADA TERSİ: benim kaynağım künyeden DAHA hassas görünüyor ama KENDİ İÇİNDE tutarsız) daha hassas ama çelişik bir gün UYDURMAK yerine künyenin kendi t: günü (1924-01-01, TDV'nin yalnız yıl vermesinin YYYY-01-01 karşılığı) DEVRALINDI — 5 Eylül 2026 `KRONOLOJİ BOŞ KÜNYE` emsaliyle aynı karar: 'kaba tarih yazılmaz, künyenin günü devralınır, künyenin gününün de kaynaksız olduğu bildirilir.'", kaynak:"harizm (TDV — CANLI, yalnız yıl) + soviethistory.msu.edu (Michigan State, süreç kararları ama TEK gün vermiyor) — KITA 3'ün DALGA2 görevi TAMAMLANDIKTAN SONRA, KITA 1'in PAKET-T künye penceresini 1924-01-01'e çekmesi (M-3544) üzerine EK olarak yazıldı" }

];
