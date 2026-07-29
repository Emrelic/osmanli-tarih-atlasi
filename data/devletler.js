// ============================================================================
// DEVLETLER DİZİNİ — 1200-1924 arası dünyada var olmuş devletlerin indeksi
// ============================================================================
// Kapsam: coğrafî sınır yok — Osmanlı'nın komşuları TAM AYRINTI, dünyanın geri
// kalanı ORTA/ASGARİ AYRINTI kademesinde (bkz. oturumlar/OTURUM-3-DEVLETLER.md).
// İlk parti (77 kayıt) yalnız Osmanlı komşularını kapsıyordu; Oturum 3'ten
// itibaren dünya geneline genişletiliyor. Sıralama: etki/büyüklük tierları
// (bkz. altta) + coğrafî partiler, her tier kendi içinde kronolojik.
//
// Alanlar:
//   id        : benzersiz anahtar (küçük harf, tire ile). DEĞİŞTİRİLMEZ.
//   ad        : görünen ad
//   tur       : imparatorluk | krallik | prenslik | dukalik | cumhuriyet |
//               hanlik | beylik | devlet | sultanlik | ocaklik | hanedanlik |
//               isyan | gecici-isgal | sehzadelik
//               (yetmezse yeni tür eklenebilir, bu listeye de yazılmalı)
//   bolge     : KAPALI SÖZLÜK — anadolu | balkanlar | orta-avrupa | bati-avrupa |
//               kuzey-avrupa | dogu-avrupa | italya | iberya | kafkasya | iran |
//               mezopotamya | suriye-filistin | arabistan | kuzey-afrika |
//               misir-sudan | dogu-afrika | bati-afrika | orta-afrika |
//               guney-afrika | orta-asya | guney-asya | dogu-asya |
//               guneydogu-asya | sibirya-bozkir | kuzey-amerika | orta-amerika |
//               guney-amerika | okyanusya
//               (yetmezse yeni bölge eklenebilir, bu listeye de yazılmalı)
//   f / t     : varlık aralığı (YYYY-AA-GG ya da belirsizse YYYY-01-01).
//               Site ufku 1923-10-29'da bittiği için bu tarihten sonra da süren
//               devletlerde t = "1923-10-29" ve ozet'te not düşülür.
//   baskent   : başkent(ler), değiştiyse " → " ile
//   harita    : arac/uret_petek.py'deki BOYALAR sözlüğündeki karşılığı (harita
//               boyaması için). Karşılığı yoksa alan hiç yazılmaz.
//   ozet      : 1-2 cümlelik tanım
//   kronoloji : [{ t, tur, b }] — tur: kurulus | hukumdar | toprak-kazanc |
//               toprak-kayip | savas | antlasma | bolunme | birlesme |
//               ittifak | isyan | isgal | son
//               b: kısa başlık (SAVASLAR/ANTLASMALAR dizini kadar yoğun,
//               ayrıntılı anlatım değil — bu bir dizin, olaylar*.js değil)
// Not: Osmanlı'nın kendi olay/savaş/antlaşma kronolojisiyle çakışan maddeler
// (ör. Çaldıran, Karlofça) burada da kısaca tekrar edilir çünkü bu dizin
// HER DEVLETİN kendi tarihini tek yerden okunabilir kılmak için var.
// Eksen 3 (YOL-HARITASI.md) — sınır+isim gösterimi ve hükümdar kronolojileri bu
// indeksten beslenecek; bu ilk partide veri katmanı kuruluyor, harita
// entegrasyonu (petek üretimi) ayrı bir sonraki adım.
// ============================================================================
window.DEVLETLER = [

// =========================== TIER 1 — BÜYÜK GÜÇLER ===========================

{ id:"bizans", ad:"Bizans (Doğu Roma) İmparatorluğu", tur:"imparatorluk", bolge:"balkanlar",
  f:"330-05-11", t:"1461-08-15", baskent:"Konstantinopolis", harita:"bizans",
  ozet:"Osmanlı'nın doğduğu coğrafyanın asıl sahibi; 1204 sonrası küçülerek 1453'e kadar Osmanlı'nın ana rakibi oldu.",
  kronoloji:[
    { t:"1204-04-13", tur:"bolunme", b:"IV. Haçlı Seferi İstanbul'u yağmaladı; Latin İmparatorluğu kuruldu, Bizans İznik/Trabzon/Epir'e bölündü" },
    { t:"1261-07-25", tur:"birlesme", b:"VIII. Mihail Palaiologos İstanbul'u geri aldı; Palaiologos hanedanı başladı" },
    { t:"1302-07-27", tur:"savas", b:"Koyunhisar'da Osmanlı'ya ilk yenilgi" },
    { t:"1326-04-06", tur:"toprak-kayip", b:"Bursa Osmanlı'ya düştü" },
    { t:"1331-03-02", tur:"toprak-kayip", b:"İznik Osmanlı'ya düştü" },
    { t:"1347-01-01", tur:"isyan", b:"VI. İoannis Kantakuzenos - V. İoannis Palaiologos iç savaşı, Kara Ölüm salgınıyla üst üste" },
    { t:"1354-03-02", tur:"toprak-kayip", b:"Gelibolu depreminden yararlanan Osmanlılar Rumeli'ye ilk kez yerleşti" },
    { t:"1373-01-01", tur:"antlasma", b:"V. İoannis, I. Murad'a vasal oldu, haraç ödemeye başladı" },
    { t:"1391-01-01", tur:"savas", b:"Yıldırım Bayezid İstanbul'u kuşattı (1402'ye dek aralıklı)" },
    { t:"1422-06-10", tur:"savas", b:"II. Murad İstanbul'u kuşattı, kaldırdı" },
    { t:"1439-07-06", tur:"ittifak", b:"Floransa Konsili'nde Katolik-Ortodoks birliği ilan edildi (Batı yardımı arayışı)" },
    { t:"1449-01-06", tur:"hukumdar", b:"XI. Konstantinos Palaiologos son imparator oldu" },
    { t:"1453-05-29", tur:"son", b:"İstanbul'un fethi; Bizans İmparatorluğu sona erdi" },
    { t:"1460-05-31", tur:"toprak-kayip", b:"Mora Despotluğu (son Bizans artığı) Osmanlı'ya katıldı" },
    { t:"1461-08-15", tur:"son", b:"Trabzon Rum İmparatorluğu düştü — Bizans mirasının son parçası" }
  ]
},

{ id:"memluk", ad:"Memlûk Sultanlığı (Mısır-Suriye)", tur:"sultanlik", bolge:"misir-sudan",
  f:"1250-01-01", t:"1517-01-22", baskent:"Kahire", harita:"memluk",
  ozet:"Mısır ve Suriye'yi 267 yıl yöneten köle-asker (memlûk) kökenli sultanlık; Yavuz Sultan Selim tarafından ilhak edildi.",
  kronoloji:[
    { t:"1250-05-02", tur:"kurulus", b:"Memlûk emirleri Eyyûbî hanedanına son verdi" },
    { t:"1260-09-03", tur:"savas", b:"Ayn Câlût'ta Moğolları durdurdular" },
    { t:"1291-05-18", tur:"toprak-kazanc", b:"Akkâ'nın fethiyle Haçlıların Levant'tan tasfiyesi" },
    { t:"1382-01-01", tur:"bolunme", b:"Burci (Çerkes) Memlûkleri, Bahrî Memlûklerinin yerini aldı" },
    { t:"1400-01-01", tur:"isgal", b:"Timur, Halep ve Şam'ı yağmaladı" },
    { t:"1485-01-01", tur:"savas", b:"Osmanlı-Memlûk Çukurova savaşları başladı (1491'e dek, kesin sonuçsuz)" },
    { t:"1516-08-24", tur:"toprak-kayip", b:"Mercidabık'ta Kansu Gavri öldü; Suriye Osmanlı'ya geçti" },
    { t:"1517-01-22", tur:"son", b:"Ridaniye'de Tomanbay yenildi ve asıldı; Mısır Osmanlı'ya katıldı" }
  ]
},

{ id:"safevi", ad:"Safevî Devleti (İran)", tur:"devlet", bolge:"iran",
  f:"1501-07-01", t:"1736-03-08", baskent:"Tebriz → Kazvin → İsfahan", harita:"safevi",
  ozet:"Şiî-Safevî hanedanının kurduğu İran devleti; üç asır boyunca Osmanlı'nın doğu cephesindeki ana rakibi.",
  kronoloji:[
    { t:"1501-07-01", tur:"kurulus", b:"Şah İsmâil Tebriz'i aldı, On İki İmam Şiîliğini resmî mezhep ilan etti" },
    { t:"1503-01-01", tur:"toprak-kazanc", b:"Diyarbekir, Bağdat ve Musul ele geçirildi" },
    { t:"1514-08-23", tur:"toprak-kayip", b:"Çaldıran'da Yavuz'a yenildi; doğu Anadolu kaybedildi" },
    { t:"1524-05-23", tur:"hukumdar", b:"Şah İsmâil öldü, I. Tahmasb tahta çıktı" },
    { t:"1555-05-29", tur:"antlasma", b:"Amasya Barışı — Irak-ı Arab Osmanlı'da kaldı" },
    { t:"1587-01-01", tur:"hukumdar", b:"Şah I. Abbas tahta çıktı, devleti reformlarla güçlendirdi" },
    { t:"1590-03-21", tur:"toprak-kayip", b:"Ferhad Paşa Antlaşması — Tebriz, Şirvan ve Gürcistan Osmanlı'da" },
    { t:"1603-01-01", tur:"toprak-kazanc", b:"Şah Abbas, Osmanlı'dan Tebriz ve Revan'ı geri aldı" },
    { t:"1639-05-17", tur:"antlasma", b:"Kasr-ı Şirin Antlaşması — bugünkü İran sınırının temeli" },
    { t:"1722-10-23", tur:"isgal", b:"Afgan (Gilzai) istilası, İsfahan düştü, Şah Hüseyin tahttan indirildi" },
    { t:"1736-03-08", tur:"son", b:"Nadir Şah, Safevî hanedanına resmen son verdi" }
  ]
},

{ id:"afsar", ad:"Afşar Devleti (Nadir Şah)", tur:"devlet", bolge:"iran",
  f:"1736-03-08", t:"1796-01-01", baskent:"Meşhed", harita:"iran",
  ozet:"Nadir Şah'ın kısa ama fetihçi hanedanı; ölümüyle fiilen parçalandı, Horasan'da bir kolu 1796'ya dek sürdü.",
  kronoloji:[
    { t:"1736-03-08", tur:"kurulus", b:"Nadir Şah tahta çıktı" },
    { t:"1730-01-01", tur:"savas", b:"Osmanlı ile Bağdat-Kirkük çevresinde savaşlar (1746'ya dek aralıklı)" },
    { t:"1746-09-04", tur:"antlasma", b:"Kerden Antlaşması — 1639 Kasr-ı Şirin sınırına dönüş" },
    { t:"1747-06-19", tur:"son", b:"Nadir Şah suikaste kurban gitti, devlet parçalandı" }
  ]
},

{ id:"kacar", ad:"Kaçar Hanedanı (İran)", tur:"devlet", bolge:"iran",
  f:"1789-03-21", t:"1923-10-29", baskent:"Tahran", harita:"iran",
  ozet:"Ağa Muhammed Han'ın kurduğu, 1925'e dek (site ufkunun dışında) süren son İran hanedanı; Osmanlı ile son sınır anlaşmazlıkları bu dönemde çözüldü.",
  kronoloji:[
    { t:"1789-03-21", tur:"kurulus", b:"Ağa Muhammed Han Kaçar tahta çıktı, Tahran'ı başkent yaptı" },
    { t:"1794-01-01", tur:"birlesme", b:"Zend hanedanına son verildi, İran yeniden birleşti" },
    { t:"1821-01-01", tur:"savas", b:"Osmanlı-İran son savaşı (1823'e dek)" },
    { t:"1823-07-28", tur:"antlasma", b:"Erzurum Antlaşması — sınır düzenlemesi" },
    { t:"1847-05-31", tur:"antlasma", b:"II. Erzurum Antlaşması — Şattülarap sınır anlaşmazlığı çözüldü" }
  ]
},

{ id:"altinorda", ad:"Altın Orda (Deşt-i Kıpçak Hanlığı)", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1242-01-01", t:"1502-01-01", baskent:"Saray", harita:"altinorda",
  ozet:"Moğol kökenli bozkır imparatorluğu; parçalanmasından Kırım, Kazan, Astrahan ve Sibir hanlıkları doğdu.",
  kronoloji:[
    { t:"1242-01-01", tur:"kurulus", b:"Batu Han, Altın Orda'yı kurdu" },
    { t:"1380-09-08", tur:"toprak-kayip", b:"Kulikovo'da Moskova Knezliği'ne yenildi — Rus bağımsızlığının başlangıcı" },
    { t:"1395-01-01", tur:"isgal", b:"Timur'un istilası, Saray tahrip edildi" },
    { t:"1441-01-01", tur:"bolunme", b:"Kırım, Kazan, Astrahan ve Sibir hanlıkları ayrıştı" },
    { t:"1502-01-01", tur:"son", b:"Büyük Orda, Kırım Hanlığı tarafından dağıtıldı" }
  ]
},

{ id:"kirim", ad:"Kırım Hanlığı", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1441-01-01", t:"1783-04-08", baskent:"Bahçesaray", harita:"kirim",
  ozet:"Osmanlı'nın en uzun süreli ve en yakın vasalı; 1475'ten itibaren Osmanlı himayesinde, 1783'te Rusya tarafından ilhak edildi.",
  kronoloji:[
    { t:"1441-01-01", tur:"kurulus", b:"Hacı Giray, Altın Orda'dan bağımsızlığını ilan etti" },
    { t:"1475-06-01", tur:"antlasma", b:"Osmanlı Kefe'yi fethetti; Kırım Hanlığı Osmanlı'ya tâbi oldu" },
    { t:"1502-01-01", tur:"toprak-kazanc", b:"Büyük Orda'yı ortadan kaldırdı" },
    { t:"1571-05-24", tur:"savas", b:"Devlet Giray, Moskova'yı yaktı" },
    { t:"1687-01-01", tur:"savas", b:"Rus Kırım seferleri püskürtüldü (1689'a dek)" },
    { t:"1736-01-01", tur:"isgal", b:"Rus orduları Bahçesaray'ı yaktı" },
    { t:"1774-07-21", tur:"antlasma", b:"Küçük Kaynarca — Kırım siyaseten bağımsız ilan edildi, dinî bağ Osmanlı'da kaldı" },
    { t:"1783-04-08", tur:"son", b:"Rusya, Kırım'ı ilhak etti" }
  ]
},

{ id:"habsburg", ad:"Habsburg Avusturya", tur:"imparatorluk", bolge:"orta-avrupa",
  f:"1526-08-29", t:"1918-11-11", baskent:"Viyana", harita:"avusturya",
  ozet:"Mohaç sonrası Macar tacını alan Habsburg hanedanı; üç asır boyunca Osmanlı'nın Orta Avrupa'daki ana rakibi, sonunda Avusturya-Macaristan olarak I. Dünya Savaşı'nda dağıldı.",
  kronoloji:[
    { t:"1526-08-29", tur:"kurulus", b:"I. Ferdinand, Mohaç sonrası Bohemya-Macaristan tacını aldı" },
    { t:"1529-09-27", tur:"savas", b:"I. Viyana Kuşatması" },
    { t:"1541-08-29", tur:"bolunme", b:"Budin'in fethiyle Macaristan üçe bölündü (Osmanlı, Habsburg, Erdel)" },
    { t:"1606-11-11", tur:"antlasma", b:"Zitvatorok Antlaşması — protokolde eşitlik tanındı" },
    { t:"1683-09-12", tur:"savas", b:"II. Viyana Kuşatması'nın bozgunu, dönüm noktası" },
    { t:"1699-01-26", tur:"toprak-kazanc", b:"Karlofça ile Macaristan Habsburg'a geçti" },
    { t:"1718-07-21", tur:"toprak-kazanc", b:"Pasarofça — Belgrad ve Sırbistan Habsburg'a geçti" },
    { t:"1739-09-18", tur:"toprak-kayip", b:"Belgrad Antlaşması — Belgrad Osmanlı'ya geri döndü" },
    { t:"1804-08-11", tur:"kurulus", b:"II. Franz, Kutsal Roma'dan ayrı Avusturya İmparatorluğu'nu ilan etti" },
    { t:"1867-03-30", tur:"bolunme", b:"Ausgleich (Uzlaşma) — Avusturya-Macaristan ikili monarşisi kuruldu" },
    { t:"1878-07-13", tur:"toprak-kazanc", b:"Berlin Kongresi — Bosna-Hersek'i işgal/idare etti" },
    { t:"1908-10-06", tur:"toprak-kazanc", b:"Bosna-Hersek'i ilhak etti" },
    { t:"1914-07-28", tur:"savas", b:"Sırbistan'a savaş ilanı — I. Dünya Savaşı başladı" },
    { t:"1918-11-11", tur:"son", b:"Avusturya-Macaristan İmparatorluğu dağıldı" }
  ]
},

{ id:"rusya", ad:"Rusya Çarlığı / İmparatorluğu", tur:"imparatorluk", bolge:"dogu-avrupa",
  f:"1547-01-16", t:"1917-03-15", baskent:"Moskova → Sankt-Peterburg", harita:"rusya",
  ozet:"IV. İvan'la çarlığa, I. Petro'yla imparatorluğa dönüşen, 350 yılda Karadeniz kuzeyi ve Kafkasya'da Osmanlı'yı geriletti.",
  kronoloji:[
    { t:"1547-01-16", tur:"kurulus", b:"IV. İvan (Korkunç) \"Çar\" unvanını aldı" },
    { t:"1556-01-01", tur:"toprak-kazanc", b:"Astrahan Hanlığı ilhak edildi" },
    { t:"1568-01-01", tur:"savas", b:"Osmanlı ile ilk çatışma — Astrahan seferi" },
    { t:"1613-02-21", tur:"hukumdar", b:"Romanov hanedanı tahta çıktı" },
    { t:"1696-07-18", tur:"toprak-kazanc", b:"I. Petro Azak'ı aldı" },
    { t:"1700-01-01", tur:"savas", b:"Büyük Kuzey Savaşı — İsveç'i yenip Baltık'a açıldı (1721'e dek)" },
    { t:"1711-07-21", tur:"toprak-kayip", b:"Prut'ta Osmanlı'ya yenildi, Azak geri verildi" },
    { t:"1721-10-22", tur:"kurulus", b:"Rusya İmparatorluğu ilan edildi" },
    { t:"1774-07-21", tur:"toprak-kazanc", b:"Küçük Kaynarca — Kırım bağımsız, Karadeniz'de donanma hakkı kazanıldı" },
    { t:"1783-04-08", tur:"toprak-kazanc", b:"Kırım'ı ilhak etti" },
    { t:"1812-05-28", tur:"toprak-kazanc", b:"Bükreş Antlaşması ile Besarabya alındı" },
    { t:"1829-09-14", tur:"antlasma", b:"Edirne Antlaşması — Osmanlı-Rus savaşı sonu" },
    { t:"1853-10-04", tur:"savas", b:"Kırım Savaşı'nda yenildi (1856'ya dek)" },
    { t:"1877-04-24", tur:"savas", b:"93 Harbi — Ayastefanos ve Berlin antlaşmalarına giden savaş" },
    { t:"1917-03-15", tur:"son", b:"II. Nikolay tahttan çekildi, Romanov hanedanı sona erdi" }
  ]
},

{ id:"venedik", ad:"Venedik Cumhuriyeti", tur:"cumhuriyet", bolge:"italya",
  f:"697-01-01", t:"1797-05-12", baskent:"Venedik", harita:"venedik",
  ozet:"Ege ve Doğu Akdeniz'de deniz imparatorluğu kuran ticaret cumhuriyeti; Osmanlı ile yedi büyük savaş yaptı, Napolyon tarafından ilga edildi.",
  kronoloji:[
    { t:"1204-04-13", tur:"toprak-kazanc", b:"IV. Haçlı Seferi'nde Bizans'ı yağmalayarak Ege'de geniş koloni imparatorluğu kurdu" },
    { t:"1463-01-01", tur:"savas", b:"Osmanlı ile ilk büyük savaş — Arnavutluk ve Mora çekişmesi (1479'a dek)" },
    { t:"1479-01-25", tur:"toprak-kayip", b:"İstanbul Antlaşması — Arnavutluk/İşkodra Osmanlı'da kaldı" },
    { t:"1489-02-26", tur:"toprak-kazanc", b:"Kıbrıs Krallığı'nı devraldı (Lüzinyan hanedanının sonu)" },
    { t:"1571-08-01", tur:"toprak-kayip", b:"Kıbrıs Osmanlı'ya düştü (İnebahtı zaferine rağmen)" },
    { t:"1645-01-01", tur:"savas", b:"Girit (Kandiye) Savaşı başladı — 24 yıllık kuşatma" },
    { t:"1669-09-27", tur:"toprak-kayip", b:"Kandiye'nin düşüşüyle Girit kaybedildi" },
    { t:"1684-01-01", tur:"toprak-kazanc", b:"Kutsal İttifak Savaşı'nda Mora'yı fethetti (1699'a dek)" },
    { t:"1699-01-26", tur:"antlasma", b:"Karlofça ile Mora resmen Venedik'e bağlandı" },
    { t:"1715-06-25", tur:"toprak-kayip", b:"Osmanlı, Mora'yı geri aldı" },
    { t:"1797-05-12", tur:"son", b:"Napolyon Cumhuriyet'e son verdi, Campo Formio ile Avusturya'ya bırakıldı" }
  ]
},

// ==================== TIER 2 — ANADOLU BEYLİKLERİ (kuruluş coğrafyası) ====================

{ id:"karaman", ad:"Karamanoğulları", tur:"beylik", bolge:"anadolu",
  f:"1250-01-01", t:"1487-01-01", baskent:"Konya / Larende", harita:"karaman",
  ozet:"Selçuklu sonrası en güçlü Anadolu beyliği; Osmanlı'nın Anadolu birliğini kurmasının önündeki en inatçı engel.",
  kronoloji:[
    { t:"1250-01-01", tur:"kurulus", b:"Nûre Sûfî Bey tarafından kuruldu" },
    { t:"1387-01-01", tur:"ittifak", b:"I. Murad'ın kızıyla evlilik ittifakı (sık sık bozuldu)" },
    { t:"1397-01-01", tur:"toprak-kayip", b:"Yıldırım Bayezid beyliği ilk kez ilhak etti" },
    { t:"1402-07-28", tur:"kurulus", b:"Ankara Savaşı sonrası Timur'un desteğiyle yeniden kuruldu" },
    { t:"1468-01-01", tur:"toprak-kayip", b:"Fatih, Konya'yı aldı" },
    { t:"1487-01-01", tur:"son", b:"Son Karamanoğlu direnişleri bastırıldı" }
  ]
},
{ id:"germiyan", ad:"Germiyanoğulları", tur:"beylik", bolge:"anadolu",
  f:"1300-01-01", t:"1429-01-01", baskent:"Kütahya", harita:"germiyan",
  ozet:"Dönemin en güçlü Anadolu beyliklerinden; toprakları savaşsız, vasiyet yoluyla Osmanlı'ya katıldı.",
  kronoloji:[
    { t:"1300-01-01", tur:"kurulus", b:"Beylik kuruldu" },
    { t:"1381-01-01", tur:"toprak-kayip", b:"II. Yakub Bey, Kütahya'yı çeyiz olarak I. Murad'ın oğluna verdi" },
    { t:"1429-01-01", tur:"son", b:"II. Yakub Bey'in vasiyetiyle beylik Osmanlı'ya katıldı" }
  ]
},
{ id:"aydin", ad:"Aydınoğulları", tur:"beylik", bolge:"anadolu",
  f:"1308-01-01", t:"1425-01-01", baskent:"Birgi / Ayasuluk", harita:"aydin",
  ozet:"Güçlü bir donanmaya sahip Ege beyliği; İzmir limanından deniz akınları düzenlerdi.",
  kronoloji:[
    { t:"1308-01-01", tur:"kurulus", b:"Aydınoğlu Mehmed Bey tarafından kuruldu" },
    { t:"1344-10-28", tur:"toprak-kayip", b:"Latin Haçlı donanması İzmir'i aldı" },
    { t:"1390-01-01", tur:"toprak-kayip", b:"Yıldırım Bayezid ilk kez ilhak etti" },
    { t:"1402-07-28", tur:"kurulus", b:"Timur sonrası kısa süreli yeniden kuruldu" },
    { t:"1425-01-01", tur:"son", b:"II. Murad tarafından kesin ilhak edildi" }
  ]
},
{ id:"saruhan", ad:"Saruhanoğulları", tur:"beylik", bolge:"anadolu",
  f:"1313-01-01", t:"1410-01-01", baskent:"Manisa", harita:"saruhan",
  ozet:"Manisa merkezli Ege beyliği.",
  kronoloji:[
    { t:"1313-01-01", tur:"kurulus", b:"Saruhan Bey tarafından kuruldu" },
    { t:"1390-01-01", tur:"toprak-kayip", b:"Yıldırım Bayezid tarafından ilhak edildi" },
    { t:"1410-01-01", tur:"son", b:"Timur sonrası kısa dirilişten sonra kesin ilhak" }
  ]
},
{ id:"mentese", ad:"Menteşeoğulları", tur:"beylik", bolge:"anadolu",
  f:"1280-01-01", t:"1424-01-01", baskent:"Milas / Beçin", harita:"mentese",
  ozet:"Güney Ege'de güçlü bir deniz beyliği.",
  kronoloji:[
    { t:"1280-01-01", tur:"kurulus", b:"Menteşe Bey tarafından kuruldu" },
    { t:"1390-01-01", tur:"toprak-kayip", b:"Yıldırım Bayezid tarafından ilhak edildi" },
    { t:"1402-07-28", tur:"kurulus", b:"Timur sonrası yeniden kuruldu" },
    { t:"1424-01-01", tur:"son", b:"II. Murad tarafından kesin ilhak edildi" }
  ]
},
{ id:"hamid", ad:"Hamîdoğulları", tur:"beylik", bolge:"anadolu",
  f:"1300-01-01", t:"1391-01-01", baskent:"Eğirdir / Isparta", harita:"hamid",
  ozet:"Göller bölgesinde kurulmuş beylik; bir bölümü satış yoluyla, kalanı ilhakla Osmanlı'ya geçti.",
  kronoloji:[
    { t:"1300-01-01", tur:"kurulus", b:"Feleküddin Dündar Bey tarafından kuruldu" },
    { t:"1381-01-01", tur:"toprak-kayip", b:"Akşehir-Beyşehir kesimi I. Murad'a satıldı" },
    { t:"1391-01-01", tur:"son", b:"Yıldırım Bayezid geri kalanını ilhak etti" }
  ]
},
{ id:"candar", ad:"Candaroğulları (İsfendiyaroğulları)", tur:"beylik", bolge:"anadolu",
  f:"1291-01-01", t:"1461-01-01", baskent:"Kastamonu / Sinop", harita:"candar",
  ozet:"Karadeniz kıyısında en son ayakta kalan Anadolu beyliği.",
  kronoloji:[
    { t:"1291-01-01", tur:"kurulus", b:"Şemseddin Yaman Candar tarafından kuruldu" },
    { t:"1461-01-01", tur:"son", b:"Fatih, Sinop ve Kastamonu'yu ilhak etti" }
  ]
},
{ id:"dulkadir", ad:"Dulkadiroğulları", tur:"beylik", bolge:"anadolu",
  f:"1337-01-01", t:"1522-01-01", baskent:"Elbistan / Maraş", harita:"dulkadir",
  ozet:"Osmanlı-Memlûk arasında tampon beylik; Yavuz döneminde kesin ilhak edildi.",
  kronoloji:[
    { t:"1337-01-01", tur:"kurulus", b:"Zeyneddin Karaca Bey tarafından kuruldu" },
    { t:"1515-06-12", tur:"savas", b:"Turnadağ Savaşı'nda Yavuz'a yenildi" },
    { t:"1522-01-01", tur:"son", b:"Kanunî tarafından kesin ilhak edildi" }
  ]
},
{ id:"ramazanoglu", ad:"Ramazanoğulları", tur:"beylik", bolge:"anadolu",
  f:"1352-01-01", t:"1608-01-01", baskent:"Adana", harita:"ramazanoglu",
  ozet:"Çukurova'da Memlûk tâbiliğinde kurulan, sonra Osmanlı vasalı olan beylik.",
  kronoloji:[
    { t:"1352-01-01", tur:"kurulus", b:"Ramazan Bey tarafından Memlûk tâbiliğinde kuruldu" },
    { t:"1517-01-22", tur:"antlasma", b:"Yavuz'un Mısır seferi sonrası Osmanlı tâbiliğine geçti" },
    { t:"1608-01-01", tur:"son", b:"Doğrudan Osmanlı eyaletine dönüştürüldü" }
  ]
},
{ id:"karesi", ad:"Karesioğulları", tur:"beylik", bolge:"anadolu",
  f:"1297-01-01", t:"1345-01-01", baskent:"Balıkesir", harita:"karesi",
  ozet:"İlk Türk deniz beyliklerinden; Osmanlı'nın ilhak ettiği ilk beylik.",
  kronoloji:[
    { t:"1297-01-01", tur:"kurulus", b:"Karesi Bey tarafından kuruldu" },
    { t:"1345-01-01", tur:"son", b:"Orhan Bey tarafından ilhak edildi — Osmanlı'nın ilk beylik ilhakı" }
  ]
},

// ================= TIER 2b — DOĞU ANADOLU / İRAN SINIRI DEVLETLERİ =================

{ id:"akkoyunlu", ad:"Akkoyunlu Devleti", tur:"devlet", bolge:"iran",
  f:"1378-01-01", t:"1501-01-01", baskent:"Diyarbekir → Tebriz", harita:"akkoyunlu",
  ozet:"Uzun Hasan döneminde Fatih'e meydan okuyan Türkmen devleti; Safevîler tarafından yıkıldı.",
  kronoloji:[
    { t:"1378-01-01", tur:"kurulus", b:"Kara Yülük Osman Bey tarafından kuruldu" },
    { t:"1467-01-01", tur:"toprak-kazanc", b:"Karakoyunlu Devleti'ni yıktı" },
    { t:"1473-08-11", tur:"savas", b:"Otlukbeli'de Fatih'e yenildi" },
    { t:"1478-01-06", tur:"hukumdar", b:"Uzun Hasan öldü" },
    { t:"1501-01-01", tur:"son", b:"Şah İsmâil (Safevî) tarafından yıkıldı" }
  ]
},
{ id:"karakoyunlu", ad:"Karakoyunlu Devleti", tur:"devlet", bolge:"iran",
  f:"1375-01-01", t:"1467-01-01", baskent:"Tebriz", harita:"karakoyunlu",
  ozet:"Timur'a tâbi olan, sonra Akkoyunlu'ya yenilen Türkmen devleti.",
  kronoloji:[
    { t:"1375-01-01", tur:"kurulus", b:"Kara Mehmed tarafından kuruldu" },
    { t:"1400-01-01", tur:"antlasma", b:"Timur'a yenilip tâbi oldu" },
    { t:"1467-01-01", tur:"son", b:"Akkoyunlu'ya yenilerek yıkıldı" }
  ]
},

// ===================== TIER 3 — AVRUPA'NIN ORTA ÖLÇEK DEVLETLERİ =====================

{ id:"macaristan", ad:"Macaristan Krallığı (bağımsız dönem)", tur:"krallik", bolge:"orta-avrupa",
  f:"1000-01-01", t:"1526-08-29", baskent:"Buda", harita:"macaristan",
  ozet:"Mohaç bozgunuyla bağımsızlığını kaybetti; toprakları Osmanlı, Habsburg ve Erdel arasında bölündü.",
  kronoloji:[
    { t:"1396-09-25", tur:"savas", b:"Niğbolu Haçlı Seferi'ne öncülük etti" },
    { t:"1443-11-01", tur:"savas", b:"Hunyadi'nin Osmanlı'ya yenilgisi — İzladi" },
    { t:"1456-07-22", tur:"savas", b:"Belgrad'ı savunarak II. Mehmed'i geri püskürttü" },
    { t:"1526-08-29", tur:"son", b:"Mohaç'ta II. Layoş öldü, krallık bağımsızlığını kaybetti" }
  ]
},
{ id:"lehistan", ad:"Lehistan-Litvanya Birliği", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1569-07-01", t:"1795-10-24", baskent:"Varşova", harita:"lehistan",
  ozet:"Seçimli krallıkla yönetilen \"Asilzade Cumhuriyeti\"; Osmanlı ile Podolya çevresinde savaştı, üç paylaşımla ortadan kalktı.",
  kronoloji:[
    { t:"1569-07-01", tur:"kurulus", b:"Lublin Birliği ile Polonya-Litvanya birleşti" },
    { t:"1620-09-01", tur:"savas", b:"Osmanlı ile Hotin/Ţuţora savaşları başladı" },
    { t:"1672-10-18", tur:"toprak-kayip", b:"Bucaş Antlaşması — Podolya Osmanlı'ya geçti" },
    { t:"1683-09-12", tur:"ittifak", b:"Jan Sobieski, II. Viyana kuşatmasını kırdı" },
    { t:"1699-01-26", tur:"antlasma", b:"Karlofça — Podolya geri alındı" },
    { t:"1795-10-24", tur:"son", b:"Üçüncü Paylaşım ile devlet ortadan kalktı" }
  ]
},
{ id:"cenova", ad:"Cenova Cumhuriyeti", tur:"cumhuriyet", bolge:"italya",
  f:"1005-01-01", t:"1797-06-14", baskent:"Cenova", harita:"ceneviz",
  ozet:"Kefe, Sakız ve Sinop'ta kolonileri olan İtalyan deniz cumhuriyeti; kolonilerini sırayla Osmanlı'ya kaptırdı.",
  kronoloji:[
    { t:"1346-01-01", tur:"toprak-kazanc", b:"Kefe kolonisi kuruldu (Kırım kıyısı)" },
    { t:"1455-01-01", tur:"toprak-kazanc", b:"Sakız Adası Maona şirketi idaresine geçti" },
    { t:"1461-08-15", tur:"toprak-kayip", b:"Amasra kolonisi Osmanlı'ya düştü" },
    { t:"1475-06-01", tur:"toprak-kayip", b:"Kefe, Osmanlı'ya düştü" },
    { t:"1566-04-14", tur:"toprak-kayip", b:"Sakız Adası Osmanlı'ya ilhak edildi — son Ege kolonisi kayboldu" },
    { t:"1797-06-14", tur:"son", b:"Napolyon tarafından ilga edildi" }
  ]
},
{ id:"napoli", ad:"Napoli Krallığı / İki Sicilya", tur:"krallik", bolge:"italya",
  f:"1282-01-01", t:"1861-02-13", baskent:"Napoli", harita:"napoli",
  ozet:"Otranto çıkarmasıyla kısa süreli Osmanlı temasına sahne oldu; İtalyan birliğiyle ortadan kalktı.",
  kronoloji:[
    { t:"1480-08-11", tur:"isgal", b:"Otranto, Osmanlı çıkarmasıyla kısa süreliğine işgal edildi (1481'de geri alındı)" },
    { t:"1861-02-13", tur:"son", b:"İtalya Krallığı'na katıldı" }
  ]
},
{ id:"papalik", ad:"Papalık Devleti", tur:"devlet", bolge:"italya",
  f:"756-01-01", t:"1870-09-20", baskent:"Roma", harita:"papalik",
  ozet:"Haçlı seferlerinin ve Kutsal İttifak'ların dinî-siyasi örgütleyicisi.",
  kronoloji:[
    { t:"1571-05-25", tur:"ittifak", b:"Kutsal İttifak'ı kurup İnebahtı zaferini örgütledi" },
    { t:"1870-09-20", tur:"son", b:"İtalya Krallığı Roma'yı ilhak etti, dünyevi iktidarı sona erdi" }
  ]
},
{ id:"fransa", ad:"Fransa Krallığı", tur:"krallik", bolge:"bati-avrupa",
  f:"987-01-01", t:"1792-09-21", baskent:"Paris", harita:"fransa",
  ozet:"Habsburg'a karşı dengeleme amacıyla Osmanlı ile 1536'da ittifaka yakın kapitülasyon ilişkisi kurdu.",
  kronoloji:[
    { t:"1536-01-01", tur:"ittifak", b:"I. François ile Kanunî arasında Kapitülasyonlar imzalandı" },
    { t:"1798-07-01", tur:"savas", b:"(Devrim sonrası) Napolyon'un Mısır Seferi ile Osmanlı'ya savaş açıldı" },
    { t:"1792-09-21", tur:"son", b:"Krallık ilga edildi, Cumhuriyet ilan edildi" }
  ]
},
{ id:"ingiltere", ad:"İngiltere / Büyük Britanya", tur:"krallik", bolge:"bati-avrupa",
  f:"1066-01-01", t:"1923-10-29", baskent:"Londra", harita:"ingiltere",
  ozet:"1581 Levant Company ile başlayan ticari ilişki, 19. yüzyılda Boğazlar ve Mısır siyasetinde belirleyici güce dönüştü (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1581-09-11", tur:"antlasma", b:"Levant Company kuruldu, ticarî kapitülasyonlar genişledi" },
    { t:"1799-01-01", tur:"ittifak", b:"Napolyon'un Mısır Seferi'ne karşı Osmanlı ile ittifak" },
    { t:"1827-10-20", tur:"savas", b:"Navarin'de Osmanlı-Mısır donanmasını batırdı" },
    { t:"1840-07-15", tur:"ittifak", b:"Londra Konvansiyonu ile Kavalalı'ya karşı Osmanlı'yı destekledi" },
    { t:"1878-06-04", tur:"toprak-kazanc", b:"Kıbrıs'ın idaresini devraldı" },
    { t:"1914-11-05", tur:"savas", b:"I. Dünya Savaşı'nda Osmanlı'ya karşı cephe açtı" }
  ]
},
{ id:"isvec", ad:"İsveç Krallığı", tur:"krallik", bolge:"kuzey-avrupa",
  f:"1523-06-06", t:"1923-10-29", baskent:"Stockholm", harita:"isvec",
  ozet:"XII. Karl'ın (Demirbaş Şarl) Poltava bozgunu sonrası 1709-1714 Osmanlı topraklarında (Bender) sığınmacılığı ile hatırlanır (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1709-07-08", tur:"savas", b:"Poltava'da Rusya'ya yenilen XII. Karl, Osmanlı'ya sığındı" },
    { t:"1709-08-01", tur:"ittifak", b:"Bender'de Osmanlı himayesinde kalarak Rusya'ya karşı savaş kışkırttı (Prut Seferi'ni tetikledi)" },
    { t:"1714-02-01", tur:"antlasma", b:"Osmanlı topraklarını terk etti" }
  ]
},

// ===================== TIER 4 — BALKAN DEVLET/PRENSLİKLERİ =====================

{ id:"sirp-despotlugu", ad:"Sırp Despotluğu", tur:"prenslik", bolge:"balkanlar",
  f:"1402-01-01", t:"1459-06-20", baskent:"Belgrad → Smederevo", harita:"sirbistan",
  ozet:"Osmanlı vasalı olarak kurulan, sonunda ilhak edilen son bağımsız Sırp devleti.",
  kronoloji:[
    { t:"1402-01-01", tur:"kurulus", b:"Stefan Lazarević tarafından kuruldu, Osmanlı vasalı" },
    { t:"1439-08-18", tur:"toprak-kayip", b:"Semendire ilk kez Osmanlı'ya düştü" },
    { t:"1459-06-20", tur:"son", b:"Smederevo'nun düşüşüyle despotluk sona erdi" }
  ]
},
{ id:"bulgar-carligi", ad:"İkinci Bulgar İmparatorluğu", tur:"imparatorluk", bolge:"balkanlar",
  f:"1185-01-01", t:"1396-01-01", baskent:"Tırnova → Vidin", harita:"bulgaristan",
  ozet:"Niğbolu Haçlı Seferi'nin ardından Vidin'in düşüşüyle ortadan kalktı.",
  kronoloji:[
    { t:"1393-07-17", tur:"toprak-kayip", b:"Tırnova düştü" },
    { t:"1396-09-25", tur:"savas", b:"Niğbolu'da Haçlı ordusuna galip gelindi" },
    { t:"1396-01-01", tur:"son", b:"Vidin'in düşüşüyle Bulgar Çarlığı sona erdi" }
  ]
},
{ id:"bosna-kralligi", ad:"Bosna Krallığı", tur:"krallik", bolge:"balkanlar",
  f:"1377-01-01", t:"1463-05-01", baskent:"Jajce", harita:"bosna",
  ozet:"Fatih'in seferiyle hızla ilhak edilen Balkan krallığı.",
  kronoloji:[
    { t:"1377-01-01", tur:"kurulus", b:"Tvrtko I tarafından krallık ilan edildi" },
    { t:"1463-05-01", tur:"son", b:"Fatih'in seferiyle ilhak edildi" }
  ]
},
{ id:"arnavutluk-iskenderbey", ad:"Arnavutluk (Kastriota Direnişi)", tur:"prenslik", bolge:"balkanlar",
  f:"1443-01-01", t:"1479-01-25", baskent:"Krujë", harita:"arnavutluk",
  ozet:"İskender Bey (Skanderbeg) önderliğinde 25 yıl Osmanlı'ya direnen dağlık bölge birliği.",
  kronoloji:[
    { t:"1443-11-28", tur:"isyan", b:"İskender Bey Osmanlı'ya isyan etti" },
    { t:"1468-01-17", tur:"hukumdar", b:"İskender Bey öldü" },
    { t:"1479-01-25", tur:"son", b:"İşkodra'nın düşüşüyle direniş sona erdi" }
  ]
},
{ id:"eflak", ad:"Eflak Voyvodalığı (Wallachia)", tur:"prenslik", bolge:"balkanlar",
  f:"1330-01-01", t:"1859-01-24", baskent:"Bükreş", harita:"eflak",
  ozet:"Tuna'nın kuzeyinde Osmanlı'ya vasal kalan voyvodalık; Boğdan ile birleşerek Romanya'nın çekirdeğini oluşturdu.",
  kronoloji:[
    { t:"1330-11-09", tur:"kurulus", b:"Basarab I bağımsızlığını kazandı" },
    { t:"1395-05-17", tur:"savas", b:"Rovine'de Osmanlı'ya karşı direndi" },
    { t:"1417-01-01", tur:"antlasma", b:"Osmanlı vasalı (haraçgüzar) statüsü kabul edildi" },
    { t:"1821-01-01", tur:"isyan", b:"Tudor Vladimirescu isyanı" },
    { t:"1859-01-24", tur:"birlesme", b:"Boğdan ile kişisel birlik kurarak Romanya'nın temelini attı" }
  ]
},
{ id:"bogdan", ad:"Boğdan Voyvodalığı (Moldavia)", tur:"prenslik", bolge:"balkanlar",
  f:"1359-01-01", t:"1859-01-24", baskent:"Suceava → Iaşi", harita:"bogdan",
  ozet:"Osmanlı'ya vasal kuzey Tuna voyvodalığı; Eflak'la birleşerek Romanya'nın çekirdeğini oluşturdu.",
  kronoloji:[
    { t:"1359-01-01", tur:"kurulus", b:"Bogdan I tarafından kuruldu" },
    { t:"1476-01-10", tur:"savas", b:"Ştefan cel Mare, Vaslui'de Osmanlı'yı yendi (Valea Albă'da kısa süre sonra yenildi)" },
    { t:"1512-01-01", tur:"antlasma", b:"Osmanlı vasalı statüsü kesinleşti" },
    { t:"1859-01-24", tur:"birlesme", b:"Eflak ile birleşerek Romanya'nın temelini attı" }
  ]
},
{ id:"erdel", ad:"Erdel Prensliği (Transilvanya)", tur:"prenslik", bolge:"orta-avrupa",
  f:"1570-01-01", t:"1711-04-30", baskent:"Gyulafehérvár",
  ozet:"Mohaç sonrası Macaristan'ın üçe bölünmesiyle doğan, Osmanlı vasalı özerk prenslik.",
  kronoloji:[
    { t:"1570-08-16", tur:"kurulus", b:"Speyer Antlaşması ile bağımsız prenslik statüsü kazandı" },
    { t:"1683-09-12", tur:"toprak-kayip", b:"II. Viyana bozgunu sonrası Habsburg baskısı arttı" },
    { t:"1711-04-30", tur:"son", b:"Szatmár Antlaşması ile kesin olarak Habsburg'a bağlandı" }
  ]
},
{ id:"mora-despotlugu", ad:"Mora Despotluğu", tur:"prenslik", bolge:"balkanlar",
  f:"1349-01-01", t:"1460-05-31", baskent:"Mystras",
  ozet:"Bizans'ın son eyaleti; İstanbul'un düşüşünden 7 yıl sonra Osmanlı'ya katıldı.",
  kronoloji:[
    { t:"1349-01-01", tur:"kurulus", b:"Palaiologos hanedanı tarafından kuruldu" },
    { t:"1460-05-31", tur:"son", b:"Fatih tarafından ilhak edildi" }
  ]
},
{ id:"atina-dukaligi", ad:"Atina Dukalığı", tur:"dukalik", bolge:"balkanlar",
  f:"1205-01-01", t:"1458-06-04", baskent:"Atina", harita:"atinadukaligi",
  ozet:"IV. Haçlı Seferi sonrası kurulan Latin dukalığı; aradaki Katalan dönemi ayrı kayıt (bkz. [[katalan]]), Floransalı Acciaiuoli hanedanı devraldıktan sonra Fatih döneminde ilhak edildi.",
  kronoloji:[
    { t:"1205-01-01", tur:"kurulus", b:"IV. Haçlı Seferi sonrası Burgonya kökenli şövalyelerce kuruldu" },
    { t:"1311-03-15", tur:"toprak-kayip", b:"Halmyros Savaşı'nda Katalan Kumpanyası dukayı öldürüp dukalığı ele geçirdi (bkz. [[katalan]])" },
    { t:"1388-01-01", tur:"toprak-kazanc", b:"Floransalı Nerio Acciaiuoli, Katalanlardan Atina'yı aldı" },
    { t:"1458-06-04", tur:"son", b:"Fatih tarafından ilhak edildi" }
  ]
},
{ id:"katalan", ad:"Katalan Dukalığı (Atina-Neopatras Kumpanyası)", tur:"dukalik", bolge:"balkanlar",
  f:"1311-03-15", t:"1388-01-01", baskent:"Thebai (Tebai) → Atina", harita:"katalan",
  ozet:"Bizans'ın Anadolu'da Türklere karşı kiraladığı, sonra kendisine düşman kesilen Katalan paralı asker kumpanyasının Frank Atina Dukalığı'nı ele geçirip Aragon/Sicilya tacı himayesinde kurduğu kısa ömürlü devlet.",
  kronoloji:[
    { t:"1303-01-01", tur:"kurulus", b:"Roger de Flor'un Katalan Kumpanyası, Bizans hizmetine Anadolu'da Türklere karşı savaşmak üzere girdi" },
    { t:"1305-04-30", tur:"savas", b:"Roger de Flor öldürüldü; Katalanlar Bizans'a döndü, Trakya ve Makedonya'yı yağmaladı (\"Katalan İntikamı\")" },
    { t:"1311-03-15", tur:"kurulus", b:"Halmyros (Kifisos) Savaşı'nda Atina Dukası Brienneli Gautier'yi öldürüp dukalığı ele geçirdi" },
    { t:"1388-01-01", tur:"son", b:"Floransalı Nerio Acciaiuoli Atina'yı aldı; Neopatras kolu birkaç yıl daha sürdü" }
  ]
},
{ id:"naksa-dukaligi", ad:"Naxos (Nakşa) Dukalığı", tur:"dukalik", bolge:"balkanlar",
  f:"1207-01-01", t:"1579-01-01", baskent:"Naxos",
  ozet:"Ege adalarında son Latin egemenliği; Barbaros sonrası haraca bağlandı, 1579'da tamamen ilhak edildi.",
  kronoloji:[
    { t:"1207-01-01", tur:"kurulus", b:"Venedikli Marco Sanudo tarafından kuruldu" },
    { t:"1537-01-01", tur:"antlasma", b:"Barbaros Hayreddin Paşa haraca bağladı" },
    { t:"1579-01-01", tur:"son", b:"Osmanlı tarafından tamamen ilhak edildi" }
  ]
},
{ id:"rodos-sovalyeleri", ad:"Rodos (Saint Jean/Malta Şövalyeleri)", tur:"devlet", bolge:"balkanlar",
  f:"1310-01-01", t:"1522-12-25", baskent:"Rodos", harita:"sovalye",
  ozet:"Haçlı şövalye tarikatının Ege üssü; Kanunî'nin kuşatmasıyla adayı terk edip Malta'ya yerleşti (1530).",
  kronoloji:[
    { t:"1310-08-15", tur:"kurulus", b:"St. Jean Şövalyeleri Rodos'u ele geçirdi" },
    { t:"1480-05-23", tur:"savas", b:"Fatih'in kuşatması püskürtüldü" },
    { t:"1522-12-25", tur:"toprak-kayip", b:"Kanunî'nin kuşatması sonrası ada teslim edildi" },
    { t:"1530-03-24", tur:"bolunme", b:"Şövalyeler Malta'ya yerleşti (Malta Şövalyeleri olarak devam)" }
  ]
},
{ id:"kibris-krallik", ad:"Kıbrıs Krallığı (Lüzinyan)", tur:"krallik", bolge:"anadolu",
  f:"1192-01-01", t:"1489-02-26", baskent:"Lefkoşa", harita:"lusignan",
  ozet:"Haçlı kökenli Fransız hanedanının krallığı; Venedik'e devrinden 82 yıl sonra Osmanlı'ya geçti.",
  kronoloji:[
    { t:"1192-01-01", tur:"kurulus", b:"Guy de Lusignan tarafından kuruldu" },
    { t:"1489-02-26", tur:"son", b:"Kraliçe Caterina Cornaro tacı Venedik'e devretti" }
  ]
},

// ========================= TIER 5 — KAFKASYA DEVLETLERİ =========================

{ id:"gurcistan", ad:"Gürcistan Krallığı/Krallıkları", tur:"krallik", bolge:"kafkasya",
  f:"1008-01-01", t:"1801-09-12", baskent:"Tiflis", harita:"gurcistan",
  ozet:"Bagratlı hanedanının birleştirdiği, Kraliçe Tamar döneminde altın çağını yaşayan, 1490'da Kartli/Kaheti/İmereti'ye bölünen Kafkas krallığı; Osmanlı-Safevî çekişmesinde parçalandı, sonunda Rusya'ya ilhak edildi. (kaynak: TDV, madde: gurcistan)",
  kronoloji:[
    { t:"1008-01-01", tur:"kurulus", b:"III. Bagrat, Kartli ve Abhazya'yı birleştirip Gürcistan Krallığı'nı kurdu" },
    { t:"1121-08-12", tur:"savas", b:"IV. David (Kurucu), Didgori Savaşı'nda büyük Selçuklu-Türkmen ordusunu yendi" },
    { t:"1122-01-01", tur:"toprak-kazanc", b:"Tiflis'i alıp başkent yaptı" },
    { t:"1184-01-01", tur:"hukumdar", b:"Kraliçe Tamar döneminde krallık en geniş sınırlarına ulaştı (altın çağ)" },
    { t:"1220-01-01", tur:"isgal", b:"Moğol istilaları başladı, krallık zayıfladı" },
    { t:"1386-01-01", tur:"isgal", b:"Timur'un art arda seferleri ülkeyi harap etti" },
    { t:"1490-01-01", tur:"bolunme", b:"Krallık Kartli, Kaheti ve İmereti'ye bölündü, Samçhe (Meskheti) atabekliği de ayrıca bağımsızlaştı" },
    { t:"1555-05-29", tur:"bolunme", b:"Amasya Barışı ile Osmanlı-Safevî nüfuz bölgelerine bölündü" },
    { t:"1578-01-01", tur:"savas", b:"Osmanlı, Kafkasya seferleriyle Tiflis'i ele geçirdi" },
    { t:"1590-03-21", tur:"toprak-kazanc", b:"Ferhad Paşa Antlaşması ile Gürcistan Osmanlı nüfuzuna girdi" },
    { t:"1762-01-01", tur:"birlesme", b:"II. Herakli, Kartli ve Kaheti'yi kişisel birlikte topladı" },
    { t:"1783-07-24", tur:"antlasma", b:"Georgievsk Antlaşması ile Kartli-Kaheti Rusya himayesine girdi" },
    { t:"1801-09-12", tur:"son", b:"Kartli-Kaheti Krallığı Rusya tarafından ilhak edildi" }
  ]
},
{ id:"kilikya-ermeni", ad:"Kilikya Ermeni Krallığı", tur:"krallik", bolge:"anadolu",
  f:"1198-01-01", t:"1375-04-14", baskent:"Sis",
  ozet:"Osmanlı kuruluşundan önce Memlûklere yenilerek tarihe karıştı; Osmanlı ile doğrudan teması yok, coğrafi bağlam için anıldı.",
  kronoloji:[
    { t:"1375-04-14", tur:"son", b:"Memlûk fethiyle krallık sona erdi" }
  ]
},
{ id:"sirvansah", ad:"Şirvanşahlar", tur:"devlet", bolge:"kafkasya",
  f:"861-01-01", t:"1538-01-01", baskent:"Şamahı",
  ozet:"Doğu Kafkasya'da uzun ömürlü yerel hanedan; Safevî ilhakıyla ortadan kalktı.",
  kronoloji:[
    { t:"1538-01-01", tur:"son", b:"I. Tahmasb tarafından Safevî Devleti'ne ilhak edildi" }
  ]
},

// ============== TIER 6 — ARAP YARIMADASI / KUZEY AFRİKA ==============

{ id:"suud-birinci", ad:"I. Suûdî Devleti (Vehhâbî Emirliği)", tur:"devlet", bolge:"arabistan",
  f:"1744-01-01", t:"1818-09-09", baskent:"Dir'iye", harita:"suud",
  ozet:"Vehhâbî hareketiyle Necid'de kurulan, Haremeyn'i ele geçiren emirlik; Kavalalı Mehmed Ali'nin ordusuyla ortadan kaldırıldı (bkz. [[misir-kavalali]]).",
  kronoloji:[
    { t:"1744-01-01", tur:"kurulus", b:"Muhammed bin Suûd ile Muhammed bin Abdülvehhâb ittifakı" },
    { t:"1802-04-20", tur:"toprak-kazanc", b:"Kerbelâ baskını" },
    { t:"1803-04-27", tur:"toprak-kazanc", b:"Mekke ele geçirildi" },
    { t:"1806-02-01", tur:"toprak-kazanc", b:"Medine de ele geçirilerek Haremeyn tamamen kontrol altına alındı" },
    { t:"1818-09-09", tur:"son", b:"İbrâhim Paşa'nın kuşatmasıyla Dir'iye düştü, devlet sona erdi" }
  ]
},
{ id:"cezayir-ocagi", ad:"Cezayir Ocağı", tur:"ocaklik", bolge:"kuzey-afrika",
  f:"1516-01-01", t:"1830-07-05", baskent:"Cezayir",
  ozet:"Barbaros kardeşlerin kurduğu, Osmanlı'ya bağlı ama fiilen özerk deniz gücü ocağı; Fransız işgaliyle sona erdi.",
  kronoloji:[
    { t:"1516-01-01", tur:"kurulus", b:"Oruç Reis (Barbaros) tarafından kuruldu" },
    { t:"1519-01-01", tur:"antlasma", b:"Hızır Hayreddin, Osmanlı'ya bağlılığını bildirdi, beylerbeyilik statüsü aldı" },
    { t:"1830-07-05", tur:"son", b:"Fransa tarafından işgal edildi" }
  ]
},
{ id:"tunus-ocagi", ad:"Tunus Ocağı (Hüseynî Hanedanı)", tur:"ocaklik", bolge:"kuzey-afrika",
  f:"1574-01-01", t:"1881-05-12", baskent:"Tunus",
  ozet:"Osmanlı beylerbeyiliğinden özerk hanedanlığa evrilen Kuzey Afrika ocağı; Fransız protektorasıyla fiilen sona erdi.",
  kronoloji:[
    { t:"1574-01-01", tur:"kurulus", b:"Osmanlı, İspanya'dan Tunus'u kesin olarak aldı" },
    { t:"1705-01-01", tur:"hukumdar", b:"Hüseyin bin Ali, kalıcı bey hanedanını kurdu (Osmanlı'ya bağlı özerklik)" },
    { t:"1881-05-12", tur:"son", b:"Bardo Antlaşması ile Fransız protektorası kuruldu" }
  ]
},
{ id:"trablusgarp-ocagi", ad:"Trablusgarp Ocağı (Karamanlı Hanedanı)", tur:"ocaklik", bolge:"kuzey-afrika",
  f:"1551-01-01", t:"1911-10-05", baskent:"Trablus",
  ozet:"Kuzey Afrika'nın en doğu ocağı; İtalyan işgaliyle Osmanlı hâkimiyeti fiilen sona erdi.",
  kronoloji:[
    { t:"1551-08-15", tur:"kurulus", b:"Turgut Reis, Malta Şövalyelerinden Trablus'u aldı" },
    { t:"1711-01-01", tur:"hukumdar", b:"Ahmed Karamanlı özerk hanedanlığını kurdu" },
    { t:"1835-01-01", tur:"toprak-kazanc", b:"Osmanlı doğrudan idareyi yeniden tesis etti (Karamanlı hanedanına son)" },
    { t:"1911-10-05", tur:"son", b:"İtalya işgal etti (Trablusgarp Savaşı)" }
  ]
},
{ id:"fas", ad:"Fas (Sâdî / Alevî Şerifleri)", tur:"krallik", bolge:"kuzey-afrika",
  f:"1549-01-01", t:"1923-10-29", baskent:"Fas / Marakeş", harita:"fas",
  ozet:"Osmanlı'ya hiçbir dönemde bağlanmayan tek Kuzey Afrika devleti; komşu ama daima bağımsız (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1578-08-04", tur:"savas", b:"Üç Kral Savaşı'nda Osmanlı destekli aday tahta çıktı, bağımsızlık korundu" }
  ]
},
{ id:"yemen-zeydi", ad:"Yemen Zeydî İmamlığı", tur:"devlet", bolge:"arabistan",
  f:"897-01-01", t:"1923-10-29", baskent:"Sa'da → San'a", harita:"yemen",
  ozet:"Osmanlı hâkimiyeti iki kesik dönemde yaşandı (1517-1636, 1849-1918); aradaki 200 yıl fiilen bağımsız imamlık.",
  kronoloji:[
    { t:"1517-01-01", tur:"antlasma", b:"Mısır'ın fethi sonrası Osmanlı nüfuzuna girdi" },
    { t:"1636-01-01", tur:"toprak-kayip", b:"Zeydî imamları Osmanlı garnizonlarını çıkardı, fiilî bağımsızlık" },
    { t:"1849-01-01", tur:"toprak-kazanc", b:"Osmanlı, Tihâme kıyısını yeniden ele geçirdi" },
    { t:"1911-10-09", tur:"antlasma", b:"Da'an Antlaşması — imamlığa geniş özerklik tanındı" },
    { t:"1918-11-01", tur:"son", b:"Mondros sonrası Osmanlı garnizonları çekildi, fiilî bağımsızlık" }
  ]
},

// ===================== TIER 7 — MISIR MESELESİ (çapraz referans) =====================

{ id:"misir-kavalali", ad:"Mısır Kavalalı Hanedanı", tur:"hanedanlik", bolge:"misir-sudan",
  f:"1805-07-09", t:"1914-11-05", baskent:"Kahire",
  ozet:"Hukuken Osmanlı toprağı sayılan ama Kavalalı hanedanınca özerk yönetilen vilayet; ayrıntılı savaş/antlaşma kronolojisi data/olaylar_ek4.js ve data/savaslar.js (seri: misir, vehhabi) dosyalarında.",
  kronoloji:[
    { t:"1805-07-09", tur:"kurulus", b:"Kavalalı Mehmed Ali, Mısır valisi ilan edildi" },
    { t:"1811-01-01", tur:"savas", b:"Vehhâbî seferleri başladı (bkz. [[suud-birinci]])" },
    { t:"1831-10-31", tur:"savas", b:"Birinci Mısır Krizi — Suriye'nin işgali (bkz. seri: misir)" },
    { t:"1841-06-01", tur:"antlasma", b:"Londra çözümü — Mısır'da irsî valilik tanındı, Suriye/Hicaz iade edildi" },
    { t:"1914-11-05", tur:"son", b:"İngiltere, Mısır'ı resmen protektora ilan etti — nominal Osmanlı bağı sona erdi" }
  ]
},

// ===================== TIER 8 — İSYANLAR / BAĞIMSIZLIKLAR / GEÇİCİ İŞGALLER =====================

{ id:"sirbistan-prensligi", ad:"Sırbistan Prensliği", tur:"prenslik", bolge:"balkanlar",
  f:"1804-02-14", t:"1882-03-06", baskent:"Belgrad", harita:"sirbistan",
  ozet:"İki büyük isyanla özerkliğe, sonra bağımsızlığa ulaşan Balkan devleti.",
  kronoloji:[
    { t:"1804-02-14", tur:"isyan", b:"Birinci Sırp İsyanı (Kara Yorgi)" },
    { t:"1815-04-23", tur:"isyan", b:"İkinci Sırp İsyanı (Miloš Obrenović)" },
    { t:"1830-08-30", tur:"antlasma", b:"Özerklik fermanla tanındı" },
    { t:"1878-07-13", tur:"son", b:"Berlin Kongresi'nde tam bağımsızlık tanındı" },
    { t:"1882-03-06", tur:"hukumdar", b:"Krallık ilan edildi" }
  ]
},
{ id:"yunanistan", ad:"Yunanistan Krallığı", tur:"krallik", bolge:"balkanlar",
  f:"1821-03-25", t:"1923-10-29", baskent:"Nafplion → Atina", harita:"yunanistan",
  ozet:"Mora isyanıyla başlayıp Londra Protokolü'yle bağımsızlığa ulaşan, sonraki yüzyılda Osmanlı'dan toprak almaya devam eden devlet.",
  kronoloji:[
    { t:"1821-03-25", tur:"isyan", b:"Mora İsyanı başladı" },
    { t:"1827-10-20", tur:"savas", b:"Navarin'de müttefik donanma Osmanlı-Mısır filosunu yendi" },
    { t:"1830-02-03", tur:"kurulus", b:"Londra Protokolü ile bağımsızlık tanındı" },
    { t:"1897-04-18", tur:"savas", b:"1897 Osmanlı-Yunan Savaşı (Dömeke)" },
    { t:"1912-10-08", tur:"savas", b:"Balkan Savaşları'nda Selanik ve Girit'i aldı" },
    { t:"1919-05-15", tur:"isgal", b:"İzmir'i işgal etti (Millî Mücadele'nin başlangıç noktalarından)" }
  ]
},
{ id:"karadag", ad:"Karadağ (Montenegro)", tur:"prenslik", bolge:"balkanlar",
  f:"1516-01-01", t:"1923-10-29", baskent:"Cetinje", harita:"karadag",
  ozet:"Dağlık coğrafyası sayesinde fiilen hiç tam boyun eğmeyen, 1878'de resmen bağımsızlığı tanınan küçük prenslik (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1878-07-13", tur:"son", b:"Berlin Kongresi'nde bağımsızlığı resmen tanındı" }
  ]
},
{ id:"bulgaristan-prensligi", ad:"Bulgaristan Prensliği", tur:"prenslik", bolge:"balkanlar",
  f:"1878-07-13", t:"1908-10-05", baskent:"Sofya", harita:"bulgaristan",
  ozet:"93 Harbi sonrası Berlin Kongresi'yle özerk prenslik olarak doğdu, 1908'de bağımsızlığını ilan etti.",
  kronoloji:[
    { t:"1878-07-13", tur:"kurulus", b:"Berlin Kongresi ile özerk prenslik statüsü kazandı" },
    { t:"1885-09-18", tur:"toprak-kazanc", b:"Doğu Rumeli'yi ilhak etti" },
    { t:"1908-10-05", tur:"son", b:"Bağımsızlığını ilan etti" }
  ]
},
{ id:"romanya", ad:"Romanya", tur:"prenslik", bolge:"balkanlar",
  f:"1859-01-24", t:"1881-03-26", baskent:"Bükreş", harita:"romanya",
  ozet:"Eflak ve Boğdan'ın kişisel birliğiyle doğdu, 93 Harbi sonrası bağımsızlığını kazandı.",
  kronoloji:[
    { t:"1859-01-24", tur:"birlesme", b:"Eflak ve Boğdan, Alexandru Ioan Cuza önderliğinde birleşti" },
    { t:"1877-05-21", tur:"isyan", b:"Bağımsızlığını ilan etti (93 Harbi'nde Rusya'nın yanında savaştı)" },
    { t:"1878-07-13", tur:"antlasma", b:"Berlin Kongresi'nde bağımsızlığı tanındı" },
    { t:"1881-03-26", tur:"son", b:"Krallık ilan edildi" }
  ]
},
{ id:"bosna-isgal", ad:"Bosna-Hersek (Avusturya İşgali)", tur:"gecici-isgal", bolge:"balkanlar",
  f:"1878-07-13", t:"1908-10-06", baskent:"Saraybosna",
  ozet:"Berlin Kongresi'nin Osmanlı'ya nominal egemenlik bırakıp Avusturya'ya idareyi verdiği geçiş dönemi; 1908'de kesin ilhakla sona erdi.",
  kronoloji:[
    { t:"1878-07-13", tur:"isgal", b:"Berlin Kongresi ile Avusturya-Macaristan idareyi devraldı" },
    { t:"1908-10-06", tur:"son", b:"Avusturya-Macaristan resmen ilhak etti" }
  ]
},
{ id:"girit-devleti", ad:"Girit Devleti (Özerk)", tur:"gecici-isgal", bolge:"balkanlar",
  f:"1898-12-09", t:"1913-05-30", baskent:"Kandiye → Hanya",
  ozet:"Büyük güçlerin garantörlüğünde kurulan özerk devlet; Balkan Savaşları sonunda Yunanistan'a katıldı.",
  kronoloji:[
    { t:"1898-12-09", tur:"kurulus", b:"Büyük güçler garantisinde özerk Girit Devleti kuruldu, Osmanlı bayrağı sembolik kaldı" },
    { t:"1908-10-12", tur:"isyan", b:"Yunanistan'a katılım tek taraflı ilan edildi (tanınmadı)" },
    { t:"1913-05-30", tur:"son", b:"Londra Antlaşması ile Yunanistan'a resmen katıldı" }
  ]
},
{ id:"fransiz-misir-seferi", ad:"Napolyon'un Mısır Seferi", tur:"gecici-isgal", bolge:"misir-sudan",
  f:"1798-07-01", t:"1801-10-02", baskent:"Kahire",
  ozet:"Fransız Devrim ordusunun kısa süreli Mısır işgali; İngiliz-Osmanlı ortak harekâtıyla sona erdi.",
  kronoloji:[
    { t:"1798-07-21", tur:"isgal", b:"Ehram Savaşı'yla Kahire ele geçirildi" },
    { t:"1798-08-01", tur:"savas", b:"Ebûkir deniz savaşında Nelson filoyu imha etti, Fransız ordusu kuşatıldı" },
    { t:"1799-07-25", tur:"savas", b:"Ebûkir kara savaşında Osmanlı çıkarması geri püskürtüldü" },
    { t:"1801-10-02", tur:"son", b:"Fransızlar tahliye oldu, Amiens Antlaşması ile sefer resmen sona erdi" }
  ]
},
{ id:"kibris-ingiliz", ad:"Kıbrıs'ın İngiliz İdaresi", tur:"gecici-isgal", bolge:"anadolu",
  f:"1878-06-04", t:"1914-11-05", baskent:"Lefkoşa",
  ozet:"Berlin Kongresi öncesi gizli anlaşmayla İngiltere'ye devredilen ada; I. Dünya Savaşı'nda resmen ilhak edildi.",
  kronoloji:[
    { t:"1878-06-04", tur:"isgal", b:"Kıbrıs Sözleşmesi ile idare İngiltere'ye devredildi (egemenlik Osmanlı'da kaldı)" },
    { t:"1914-11-05", tur:"son", b:"Osmanlı'nın Almanya yanında savaşa girmesiyle İngiltere adayı ilhak etti" }
  ]
},
{ id:"oniki-ada-italyan", ad:"İtalya'nın Oniki Ada İşgali", tur:"gecici-isgal", bolge:"balkanlar",
  f:"1912-05-04", t:"1923-10-29", baskent:"Rodos",
  ozet:"Trablusgarp Savaşı sırasında baskı unsuru olarak işgal edilen adalar; Lozan'a dek resmen tartışmalı statüde kaldı (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1912-05-04", tur:"isgal", b:"İtalya, Rodos ve Oniki Ada'yı işgal etti" },
    { t:"1912-10-18", tur:"antlasma", b:"Uşi Antlaşması — adaların geçici olduğu belirtildi (fiilen kalıcılaştı)" }
  ]
},
{ id:"cezayir-fransiz", ad:"Fransız Cezayir İşgali", tur:"gecici-isgal", bolge:"kuzey-afrika",
  f:"1830-07-05", t:"1923-10-29", baskent:"Cezayir",
  ozet:"Cezayir Ocağı'nın (bkz. [[cezayir-ocagi]]) sonunu getiren Fransız işgali; 1962'ye dek (site ufkunun dışında) sürdü.",
  kronoloji:[
    { t:"1830-07-05", tur:"isgal", b:"Fransız ordusu Cezayir'i işgal etti, ocaklık sona erdi" }
  ]
},
// ============ TIER 9 — HARİTA BOYA KİMLİKLERİNİN DİZİN KARŞILIKLARI ============
// (data/devletler_harita.js'te boyanan, dizinde henüz olmayan devletler)

{ id:"ispanya", ad:"İspanya (Kastilya-Aragon)", tur:"krallik", bolge:"iberya",
  f:"1479-01-20", t:"1923-10-29", baskent:"Madrid", harita:"ispanya",
  ozet:"Kastilya-Aragon birliğiyle doğan krallık; Akdeniz'de Osmanlı'nın 16. yüzyıldaki ana deniz rakibi (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1479-01-20", tur:"birlesme", b:"Kastilya ile Aragon tacları birleşti" },
    { t:"1492-01-02", tur:"toprak-kazanc", b:"Gırnata'nın düşüşüyle Reconquista tamamlandı" },
    { t:"1535-07-21", tur:"savas", b:"Şarlken Tunus'u aldı (1574'te kesin olarak Osmanlı'ya geçti)" },
    { t:"1571-10-07", tur:"savas", b:"İnebahtı'da Kutsal İttifak donanmasının belkemiğini oluşturdu" },
    { t:"1580-06-01", tur:"antlasma", b:"Osmanlı ile fiilî ateşkes — Akdeniz cephesi duruldu" }
  ]
},
{ id:"granada", ad:"Gırnata (Nasrî) Emirliği", tur:"devlet", bolge:"iberya",
  f:"1238-01-01", t:"1492-01-02", baskent:"Gırnata", harita:"granada",
  ozet:"İber yarımadasındaki son Müslüman devlet; yardım çağrıları Osmanlı'ya ulaştıysa da 1492'de düştü.",
  kronoloji:[
    { t:"1492-01-02", tur:"son", b:"Ebû Abdullah (Boabdil) şehri Katolik krallara teslim etti" }
  ]
},
{ id:"portekiz", ad:"Portekiz Krallığı", tur:"krallik", bolge:"iberya",
  f:"1139-07-25", t:"1923-10-29", baskent:"Lizbon", harita:"portekiz",
  ozet:"Hint Okyanusu'nda Osmanlı'nın 16. yüzyıl rakibi: Kızıldeniz, Basra Körfezi ve Umman kıyılarında donanmalar çarpıştı (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1507-01-01", tur:"toprak-kazanc", b:"Hürmüz ve Umman kıyılarını aldı" },
    { t:"1538-08-04", tur:"savas", b:"Hadım Süleyman Paşa'nın Diu kuşatması — Osmanlı-Portekiz savaşlarının zirvesi" },
    { t:"1552-01-01", tur:"savas", b:"Pîrî Reis'in Hürmüz seferi" },
    { t:"1650-01-26", tur:"toprak-kayip", b:"Umman, Maskat'ı geri aldı" }
  ]
},
{ id:"almanya", ad:"Kutsal Roma / Almanya", tur:"imparatorluk", bolge:"orta-avrupa",
  f:"962-02-02", t:"1923-10-29", baskent:"— (seçimli) → Berlin", harita:"almanya",
  ozet:"Alman dünyasının çatı yapısı: 1806'ya dek Kutsal Roma İmparatorluğu, 1871'den sonra Prusya önderliğinde Alman İmparatorluğu; I. Dünya Savaşı'nda Osmanlı'nın müttefiki.",
  kronoloji:[
    { t:"1806-08-06", tur:"bolunme", b:"Kutsal Roma İmparatorluğu ilga edildi" },
    { t:"1871-01-18", tur:"birlesme", b:"Alman İmparatorluğu ilan edildi" },
    { t:"1889-01-01", tur:"ittifak", b:"II. Wilhelm'in İstanbul ziyaretiyle yakınlaşma başladı" },
    { t:"1914-08-02", tur:"ittifak", b:"Osmanlı-Alman ittifak antlaşması imzalandı" },
    { t:"1918-11-11", tur:"son", b:"İmparatorluk yıkıldı, cumhuriyet ilan edildi" }
  ]
},
{ id:"hollanda", ad:"Hollanda Cumhuriyeti", tur:"cumhuriyet", bolge:"bati-avrupa",
  f:"1581-07-26", t:"1923-10-29", baskent:"Amsterdam / Lahey", harita:"hollanda",
  ozet:"İspanya'dan bağımsızlığını ilan eden ticaret cumhuriyeti; 1612'de Osmanlı'dan kapitülasyon aldı (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1581-07-26", tur:"kurulus", b:"Bağımsızlık ilanı (İspanya'dan ayrılış)" },
    { t:"1612-07-06", tur:"antlasma", b:"Osmanlı kapitülasyonları verildi, elçilik açıldı" }
  ]
},
{ id:"danimarka", ad:"Danimarka-Norveç", tur:"krallik", bolge:"kuzey-avrupa",
  f:"1380-01-01", t:"1923-10-29", baskent:"Kopenhag", harita:"danimarka",
  ozet:"Kuzey Avrupa'nın çifte krallığı; Osmanlı ile 1756'da dostluk ve ticaret antlaşması imzaladı (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1756-10-14", tur:"antlasma", b:"Osmanlı-Danimarka dostluk ve ticaret antlaşması" },
    { t:"1814-01-14", tur:"bolunme", b:"Kiel Antlaşması ile Norveç, İsveç'e bırakıldı" }
  ]
},
{ id:"umman", ad:"Umman (Ya'rubî / Bû Saîd) Sultanlığı", tur:"sultanlik", bolge:"arabistan",
  f:"1624-01-01", t:"1923-10-29", baskent:"Nizva → Maskat", harita:"umman",
  ozet:"Portekizlileri Maskat'tan atan, Doğu Afrika kıyısına uzanan denizci sultanlık (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1650-01-26", tur:"toprak-kazanc", b:"Maskat, Portekiz'den alındı" },
    { t:"1749-06-10", tur:"hukumdar", b:"Bû Saîd hanedanı kuruldu" }
  ]
},
{ id:"suud-ikinci", ad:"II. Suûdî Devleti (Necid Emirliği)", tur:"devlet", bolge:"arabistan",
  f:"1824-06-01", t:"1891-01-01", baskent:"Riyad", harita:"suud",
  ozet:"Dir'iye'nin yıkımından sonra Riyad merkezli yeniden kurulan emirlik; Şammar (Reşîdî) emirliğine yenilerek dağıldı, 1902'de üçüncü kez dirildi. Bkz. [[suud-birinci]].",
  kronoloji:[
    { t:"1824-06-01", tur:"kurulus", b:"Türkî bin Abdullah Riyad'ı geri aldı" },
    { t:"1891-01-24", tur:"son", b:"Müleyde yenilgisiyle Şammar (Hâil) emirliği Necid'e hâkim oldu" },
    { t:"1902-01-15", tur:"kurulus", b:"Abdülazîz bin Suûd Riyad'ı geri alarak üçüncü devleti kurdu" }
  ]
},
{ id:"sammar", ad:"Şammar (Reşîdî) Emirliği", tur:"devlet", bolge:"arabistan",
  f:"1836-01-01", t:"1921-11-02", baskent:"Hâil", harita:"sammar",
  ozet:"Hâil merkezli, Osmanlı'ya yakın duran Arap emirliği; Suûdîlerin tarihî rakibi.",
  kronoloji:[
    { t:"1891-01-24", tur:"toprak-kazanc", b:"Müleyde zaferiyle Necid'i ele geçirdi" },
    { t:"1921-11-02", tur:"son", b:"Hâil, İbn Suûd'a teslim oldu" }
  ]
},
{ id:"hicaz-kralligi", ad:"Hicaz Krallığı (Şerif Hüseyin)", tur:"krallik", bolge:"arabistan",
  f:"1916-06-10", t:"1923-10-29", baskent:"Mekke", harita:"hicaz",
  ozet:"1916 isyanıyla Osmanlı'dan kopan Haremeyn devleti; 1925'te (site ufkunun dışında) Suûdîlerce yıkıldı.",
  kronoloji:[
    { t:"1916-06-10", tur:"isyan", b:"Şerif Hüseyin Mekke'de isyan bayrağını açtı" },
    { t:"1919-01-10", tur:"toprak-kazanc", b:"Medine'deki son Osmanlı garnizonu (Fahreddin Paşa sonrası) teslim oldu" }
  ]
},
{ id:"funj", ad:"Func (Sennâr) Sultanlığı", tur:"sultanlik", bolge:"misir-sudan",
  f:"1504-01-01", t:"1821-06-14", baskent:"Sennâr", harita:"funj",
  ozet:"Nil boyunda üç asır hüküm süren Müslüman sultanlık; Kavalalı'nın Sudan seferiyle yıkıldı. Bkz. [[misir-kavalali]].",
  kronoloji:[
    { t:"1504-01-01", tur:"kurulus", b:"Amara Dunkas tarafından kuruldu" },
    { t:"1821-06-14", tur:"son", b:"İsmâil Kâmil Paşa'nın ordusuna direnmeden teslim oldu" }
  ]
},
{ id:"habesistan", ad:"Habeşistan İmparatorluğu", tur:"imparatorluk", bolge:"dogu-afrika",
  f:"1270-01-01", t:"1923-10-29", baskent:"Gondar → Addis Ababa", harita:"habesistan",
  ozet:"Afrika'nın en eski Hristiyan devleti; 16. yüzyılda Osmanlı destekli Adal ordularıyla ölüm kalım savaşı yaptı (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1529-03-09", tur:"savas", b:"Ahmed Gran'ın Şimbra Kure zaferi — Adal istilası başladı" },
    { t:"1543-02-21", tur:"savas", b:"Wayna Daga'da Portekiz destekli ordu Adal'ı kırdı" },
    { t:"1887-01-06", tur:"toprak-kazanc", b:"Harar ilhak edildi" },
    { t:"1896-03-01", tur:"savas", b:"Adva'da İtalya'yı yenerek bağımsızlığını korudu" }
  ]
},
{ id:"adal", ad:"Adal Sultanlığı / Harar Emirliği", tur:"sultanlik", bolge:"dogu-afrika",
  f:"1415-01-01", t:"1887-01-06", baskent:"Zeyla → Harar", harita:"adal",
  ozet:"Osmanlı'dan top ve tüfek desteği alarak Habeşistan'ı istila eden sultanlık; ardılı Harar emirliği 1887'de Habeş'e katıldı.",
  kronoloji:[
    { t:"1529-03-09", tur:"savas", b:"Ahmed Gran önderliğinde Habeş istilası başladı" },
    { t:"1543-02-21", tur:"savas", b:"Ahmed Gran öldü, istila çöktü" },
    { t:"1577-01-01", tur:"bolunme", b:"Devlet dağıldı, Harar emirliği ardıl kaldı" },
    { t:"1887-01-06", tur:"son", b:"Harar, Habeşistan'a katıldı" }
  ]
},

{ id:"zaporojye", ad:"Zaporojye Kazak Hetmanlığı", tur:"cumhuriyet", bolge:"sibirya-bozkir",
  f:"1552-01-01", t:"1775-06-16", baskent:"Zaporojye Seçi",
  ozet:"Dinyeper aşağısında yarı-askerî kazak topluluğu; zaman zaman Osmanlı/Kırım'a karşı Rusya'yla, zaman zaman onlara karşı Osmanlı'yla ittifak kurdu.",
  kronoloji:[
    { t:"1552-01-01", tur:"kurulus", b:"Dmytro Vyshnevetsky tarafından örgütlendi" },
    { t:"1621-09-02", tur:"ittifak", b:"Hotin Savaşı'nda Lehistan'ın yanında Osmanlı'ya karşı savaştı" },
    { t:"1711-01-01", tur:"antlasma", b:"Bir kesimi Osmanlı himayesine sığındı (Aleşki Seçi)" },
    { t:"1775-06-16", tur:"son", b:"II. Katerina tarafından dağıtıldı" }
  ]
},

// ================================================================================
// OTURUM 3 — DÜNYA KAPSAMI GENİŞLEMESİ (bkz. oturumlar/OTURUM-3-DEVLETLER.md)
// ================================================================================
// Parti 1: Anadolu ve Osmanlı öncesi — Selçuklu, İlhanlı, Timurlu, Eretna, Kadı
// Burhâneddin, Artuklu, Ahi Birliği, Anadolu beylikleri (Çobanoğulları,
// Pervâneoğulları, Eşrefoğulları, İnançoğulları, Sâhib Ataoğulları,
// Tâceddinoğulları, Alâiye, Teke, Hacıemîroğulları, Mutahharten/Erzincan) ve
// Fetret Devri (1402-1413) şehzade saltanatları. Kaynak: TDV İslâm
// Ansiklopedisi (her slug <title> ile doğrulandı) + arac/uret_petek.py BOYALAR
// yorumları (zaten doğrulanmış tarihler). Mutahharten'in TDV'de ayrı maddesi
// yok; standart akademik kaynaklara göre yazıldı, ozet'te belirtildi.

{ id:"selcuklu", ad:"Anadolu (Türkiye) Selçuklu Devleti", tur:"devlet", bolge:"anadolu",
  f:"1075-01-01", t:"1308-01-01", baskent:"İznik → Konya",
  ozet:"Malazgirt sonrası Anadolu'yu Türkleştiren ilk büyük devlet; Moğol baskısıyla beyliklere parçalandı, Osmanlı'nın da doğduğu siyasi zemini bıraktı. (kaynak: TDV, madde: selcuklular)",
  kronoloji:[
    { t:"1071-08-26", tur:"savas", b:"Malazgirt zaferi Anadolu'nun kapısını açtı" },
    { t:"1075-01-01", tur:"kurulus", b:"I. Süleyman Şah tarafından kuruldu, İznik başkent oldu" },
    { t:"1097-06-19", tur:"toprak-kayip", b:"I. Haçlı Seferi İznik'i aldı, başkent Konya'ya taşındı" },
    { t:"1176-09-17", tur:"savas", b:"II. Kılıçarslan, Myriokephalon'da Bizans'ı yendi" },
    { t:"1243-01-01", tur:"savas", b:"Kösedağ'da Moğollara yenildi, İlhanlı tâbiliği başladı" },
    { t:"1308-01-01", tur:"son", b:"Son Selçuklu sultanının ölümüyle devlet fiilen sona erdi, toprakları beyliklere kaldı" }
  ]
},
{ id:"ilhanli", ad:"İlhanlı Devleti", tur:"devlet", bolge:"iran",
  f:"1256-01-01", t:"1353-01-01", baskent:"Meraga → Tebriz → Sultaniye", harita:"ilhanli",
  ozet:"Hülâgû'nun kurduğu Moğol devleti; Anadolu Selçuklularını ve Kilikya Ermeni Krallığı'nı vasal aldı, Abbasî hilafetine son verdi. (kaynak: TDV, madde: ilhanlilar)",
  kronoloji:[
    { t:"1256-01-01", tur:"kurulus", b:"Hülâgû Han tarafından kuruldu" },
    { t:"1258-02-13", tur:"toprak-kazanc", b:"Bağdat'ın fethiyle Abbasî hilafetine son verildi" },
    { t:"1295-01-01", tur:"hukumdar", b:"Gazan Han tahta çıktı, İslam'ı resmî din ilan etti" },
    { t:"1304-01-01", tur:"hukumdar", b:"Olcaytu tahta çıktı, Sultaniye'yi başkent yaptı" },
    { t:"1317-01-01", tur:"hukumdar", b:"Ebû Saîd Bahadır Han tahta çıktı" },
    { t:"1335-01-01", tur:"bolunme", b:"Ebû Saîd'in vârissiz ölümüyle devlet parçalanmaya başladı" },
    { t:"1353-01-01", tur:"son", b:"Merkezi otorite tamamen dağıldı; Celâyirli, Karakoyunlu gibi ardıl beylikler doğdu" }
  ]
},
{ id:"timurlu", ad:"Timurlu Devleti", tur:"devlet", bolge:"orta-asya",
  f:"1370-04-09", t:"1507-05-01", baskent:"Semerkant → Herat", harita:"timurlu",
  ozet:"Timur'un kurduğu bozkır imparatorluğu; 1402'de Ankara Savaşı'nda Yıldırım Bayezid'i esir alarak Osmanlı'yı Fetret Devri'ne soktu. (kaynak: TDV, madde: timurlular)",
  kronoloji:[
    { t:"1370-04-09", tur:"kurulus", b:"Timur, Semerkant'ta hükümdarlığını ilan etti" },
    { t:"1402-07-28", tur:"savas", b:"Ankara Savaşı'nda Yıldırım Bayezid'i yendi ve esir aldı" },
    { t:"1405-02-18", tur:"hukumdar", b:"Timur öldü, imparatorluk oğulları arasında paylaşıldı" },
    { t:"1409-01-01", tur:"hukumdar", b:"Şâhruh, Herat merkezli olarak devletin başına geçti" },
    { t:"1449-01-01", tur:"hukumdar", b:"Uluğ Bey (Semerkant kolu) tahta çıktı" },
    { t:"1470-01-01", tur:"hukumdar", b:"Hüseyin Baykara, Herat'ta tahta çıktı" },
    { t:"1507-05-01", tur:"son", b:"Özbek Şeybânî Han Herat'ı aldı; Timurlu hâkimiyeti Orta Asya'da sona erdi (Hindistan'da Bâbür hanedanı olarak sürdü)" }
  ]
},
{ id:"eretna", ad:"Eretna Beyliği", tur:"beylik", bolge:"anadolu",
  f:"1335-01-01", t:"1381-01-01", baskent:"Sivas → Kayseri", harita:"eretna",
  ozet:"İlhanlı valiliğinden doğan, Orta Anadolu'yu Sivas-Kayseri ekseninde yöneten beylik; Kadı Burhâneddin'in iktidarı ele geçirmesiyle sona erdi. (kaynak: TDV, madde: eretnaogullari)",
  kronoloji:[
    { t:"1335-01-01", tur:"kurulus", b:"Alâeddin Eretna, İlhanlı valiliğinden bağımsızlaştı" },
    { t:"1352-01-01", tur:"hukumdar", b:"Gıyâseddin Mehmed Bey tahta çıktı" },
    { t:"1365-01-01", tur:"hukumdar", b:"Alâeddin Ali Bey tahta çıktı" },
    { t:"1381-01-01", tur:"son", b:"Vezir Kadı Burhâneddin iktidarı ele geçirdi, beylik sona erdi" }
  ]
},
{ id:"burhaneddin", ad:"Kadı Burhâneddin Devleti (Sivas)", tur:"devlet", bolge:"anadolu",
  f:"1381-01-01", t:"1398-01-01", baskent:"Sivas", harita:"burhaneddin",
  ozet:"Eretna beyliğinin vezirinin kurduğu, Karamanoğulları-Akkoyunlu-Osmanlı arasında sıkışan kısa ömürlü devlet; kurucusunun savaş meydanında ölümüyle çöktü. (kaynak: TDV, madde: kadi-burhaneddin)",
  kronoloji:[
    { t:"1381-01-01", tur:"kurulus", b:"Kadı Burhâneddin Ahmed, Eretna beyliğine son verip sultanlığını ilan etti" },
    { t:"1393-01-01", tur:"antlasma", b:"Timur'un tâbiiyet talebini reddetti" },
    { t:"1398-01-01", tur:"son", b:"Akkoyunlu Kara Yülük Osman Bey'le savaşta yenilip öldürüldü; oğlunun kısa direnişinden sonra Sivas Osmanlı'ya katıldı" }
  ]
},
{ id:"artuklu", ad:"Artukoğulları (Artuklu Beyliği)", tur:"beylik", bolge:"anadolu",
  f:"1102-01-01", t:"1409-01-01", baskent:"Hasankeyf / Mardin / Harput", harita:"artuklu",
  ozet:"Malazgirt sonrası Diyarbekir-Mardin bölgesinde üç kola (Hasankeyf, Mardin, Harput) ayrılarak üç asır hüküm süren Türkmen beyliği; en uzun ömürlü Mardin kolu Karakoyunlu baskısıyla sona erdi. (kaynak: TDV, madde: artuklular)",
  kronoloji:[
    { t:"1102-01-01", tur:"kurulus", b:"Artuk Bey'in oğulları Hasankeyf ve Mardin kollarını kurdu" },
    { t:"1232-01-01", tur:"toprak-kayip", b:"Hasankeyf kolu Eyyûbîler tarafından ilhak edildi" },
    { t:"1234-01-01", tur:"toprak-kayip", b:"Harput kolu Anadolu Selçuklularına geçti" },
    { t:"1409-01-01", tur:"son", b:"Mardin kolu, Karakoyunlu Kara Yûsuf'a teslim oldu" }
  ]
},
{ id:"ahiler", ad:"Ahi Birliği (Ankara)", tur:"devlet", bolge:"anadolu",
  f:"1290-01-01", t:"1354-01-01", baskent:"Ankara", harita:"ahiler",
  ozet:"Selçuklu iktidar boşluğunda esnaf-dinî teşkilat Ahilik'in Ankara'da kurduğu fiilî özerk yönetim; Orhan Gazi'nin oğlu Süleyman Paşa tarafından Osmanlı'ya katıldı. (kaynak: TDV, madde: ahilik, ankara)",
  kronoloji:[
    { t:"1290-01-01", tur:"kurulus", b:"Selçuklu otoritesinin çökmesiyle Ahi teşkilatı Ankara'yı fiilen yönetmeye başladı" },
    { t:"1354-01-01", tur:"son", b:"Süleyman Paşa, Ankara'yı Osmanlı topraklarına kattı" }
  ]
},
{ id:"cobanogullari", ad:"Çobanoğulları", tur:"beylik", bolge:"anadolu",
  f:"1211-01-01", t:"1309-01-01", baskent:"Kastamonu", harita:"cobanogullari",
  ozet:"Selçuklu uç beyi Hüsâmeddin Çoban'ın Kastamonu'da kurduğu beylik; Candaroğulları tarafından ilhak edildi. (kaynak: TDV, madde: cobanogullari)",
  kronoloji:[
    { t:"1211-01-01", tur:"kurulus", b:"Hüsâmeddin Çoban, Kastamonu uç beyi olarak beyliğini kurdu" },
    { t:"1224-01-01", tur:"toprak-kazanc", b:"Kırım'da Suğdak limanını Moğollardan geri aldı" },
    { t:"1309-01-01", tur:"son", b:"Candaroğlu Süleyman Bey, son emir Mahmud'u yenerek beyliğe son verdi" }
  ]
},
{ id:"pervane", ad:"Pervâneoğulları (Sinop)", tur:"beylik", bolge:"anadolu",
  f:"1277-01-01", t:"1322-01-01", baskent:"Sinop", harita:"pervane",
  ozet:"Selçuklu veziri Pervâne'nin oğlunun Sinop'ta kurduğu deniz beyliği; Candaroğulları tarafından ilhak edildi. (kaynak: TDV, madde: pervaneogullari)",
  kronoloji:[
    { t:"1277-01-01", tur:"kurulus", b:"Muînüddin Mehmed, Sinop'ta beyliğini kurdu" },
    { t:"1300-01-01", tur:"hukumdar", b:"Gazi Çelebi tahta çıktı, deniz gücüne yöneldi" },
    { t:"1322-01-01", tur:"son", b:"Candaroğlu Süleyman Bey, Sinop'u ilhak etti" }
  ]
},
{ id:"esrefogullari", ad:"Eşrefoğulları", tur:"beylik", bolge:"anadolu",
  f:"1277-01-01", t:"1326-01-01", baskent:"Beyşehir", harita:"esrefogullari",
  ozet:"Göller bölgesinde kurulan kısa ömürlü beylik; toprakları Hamîdoğulları, Sâhib Ataoğulları ve Karamanoğulları arasında paylaşıldı. (kaynak: TDV, madde: esrefogullari)",
  kronoloji:[
    { t:"1277-01-01", tur:"kurulus", b:"Seyfeddin Süleyman Bey tarafından kuruldu" },
    { t:"1326-01-01", tur:"son", b:"İlhanlı memuru Demirtaş'ın müdahalesiyle dağıldı, toprakları komşu beyliklere kaldı" }
  ]
},
{ id:"inancogullari", ad:"İnançoğulları (Denizli/Lâdik Beyliği)", tur:"beylik", bolge:"anadolu",
  f:"1261-01-01", t:"1368-01-01", baskent:"Isparta-Alâiye → Denizli", harita:"inancogullari",
  ozet:"Önce Isparta-Alâiye ve Elmalı'da, sonra yalnız Denizli çevresinde hüküm süren Türkmen beyliği; Germiyanoğulları'na bağlanarak sona erdi. (kaynak: TDV, madde: inancogullari)",
  kronoloji:[
    { t:"1261-01-01", tur:"kurulus", b:"Mehmed Bey tarafından kuruldu" },
    { t:"1292-01-01", tur:"hukumdar", b:"İnanç Bey tahta çıktı, beyliğin gerçek kurucusu sayılır" },
    { t:"1368-01-01", tur:"son", b:"Germiyanoğulları'nın üstünlüğünü kabul etti" }
  ]
},
{ id:"sahibata", ad:"Sâhib Ataoğulları", tur:"beylik", bolge:"anadolu",
  f:"1275-01-01", t:"1341-01-01", baskent:"Afyonkarahisar", harita:"sahibata",
  ozet:"Selçuklu veziri Sâhib Ata'nın oğullarının Afyonkarahisar'da kurduğu beylik; son hükümdarın ölümüyle Germiyanoğulları'na katıldı. (kaynak: TDV, madde: sahib-ataogullari)",
  kronoloji:[
    { t:"1275-01-01", tur:"kurulus", b:"Vezir Sâhib Ata Fahreddin Ali'nin oğulları tarafından kuruldu" },
    { t:"1287-01-01", tur:"hukumdar", b:"Nusretüddevle Ahmed tahta çıktı" },
    { t:"1341-01-01", tur:"son", b:"Nusretüddevle Ahmed'in ölümüyle topraklar Germiyanoğulları'na katıldı" }
  ]
},
{ id:"taceddin", ad:"Tâceddinoğulları (Canik)", tur:"beylik", bolge:"anadolu",
  f:"1348-01-01", t:"1427-01-01", baskent:"Niksar", harita:"taceddin",
  ozet:"Niksar merkezli, Karadeniz kıyısına (Samsun-Ordu-Giresun) uzanan Canik beyliği; Ankara Savaşı sonrası Osmanlı tâbiliğinde varlığını 1427'ye dek sürdürdü. (kaynak: TDV, madde: taceddinogullari)",
  kronoloji:[
    { t:"1348-01-01", tur:"kurulus", b:"Tâceddin Bey (Canikli) tarafından kuruldu" },
    { t:"1386-10-24", tur:"savas", b:"Tâceddin Bey, Hacıemîroğulları kuvvetlerine yenilip öldürüldü" },
    { t:"1402-07-28", tur:"antlasma", b:"Ankara Savaşı sonrası Osmanlı tâbiliğine geçti" },
    { t:"1427-01-01", tur:"son", b:"Son hükümdar Hasan Bey, Rumeli'de dirlik karşılığında bağımsız yönetime son verdi" }
  ]
},
{ id:"alaiye", ad:"Alâiye Beyliği (Alanya)", tur:"beylik", bolge:"anadolu",
  f:"1293-01-01", t:"1471-01-01", baskent:"Alâiye (Alanya)", harita:"alaiye",
  ozet:"Karamanoğulları'nın bir kolunun yönetiminde kurulan, 1427'den itibaren Memlûk hâkimiyetine giren liman beyliği; Gedik Ahmed Paşa'nın kuşatmasıyla ilhak edildi. (kaynak: TDV, madde: alaiye-beyligi)",
  kronoloji:[
    { t:"1293-01-01", tur:"kurulus", b:"Karamanoğlu Mecdüddin Mahmud Bey, Alâiye'yi Selçuklulardan aldı" },
    { t:"1427-01-01", tur:"antlasma", b:"Karamanoğulları, Alâiye'yi 5000 altına Memlûk sultanına sattı" },
    { t:"1471-01-01", tur:"son", b:"Gedik Ahmed Paşa'nın kuşatmasıyla Osmanlı'ya katıldı" }
  ]
},
{ id:"teke", ad:"Tekeoğulları", tur:"beylik", bolge:"anadolu",
  f:"1321-01-01", t:"1423-01-01", baskent:"Antalya", harita:"teke",
  ozet:"Hamîdoğulları'ndan ayrılarak Antalya'da kurulan denizci beylik; Osmanlı tarafından ilhak edildi. (kaynak: TDV, madde: tekeogullari)",
  kronoloji:[
    { t:"1321-01-01", tur:"kurulus", b:"Yûnus Bey, Antalya'da Hamîd'den ayrı beyliğini kurdu" },
    { t:"1373-01-01", tur:"toprak-kazanc", b:"Mübârizüddin Mehmed Bey (Zincirkıran), Kıbrıs'tan Antalya'yı geri aldı" },
    { t:"1423-01-01", tur:"son", b:"II. Murad döneminde Osmanlı'ya kesin olarak ilhak edildi" }
  ]
},
{ id:"haciemir", ad:"Hacıemîroğulları (Bayramlı/Ordu)", tur:"beylik", bolge:"anadolu",
  f:"1330-01-01", t:"1427-06-01", baskent:"Eskipazar", harita:"haciemir",
  ozet:"Bayram Bey'in kurduğu, oğlu Hacı Emîr'in genişlettiği Karadeniz kıyı beyliği (Ordu-Ünye); Yıldırım'a tâbi olduktan sonra II. Murad tarafından ilhak edildi. (kaynak: TDV, madde: ordu--sehir)",
  kronoloji:[
    { t:"1330-01-01", tur:"kurulus", b:"Bayram Bey tarafından Eskipazar merkezli kuruldu" },
    { t:"1350-01-01", tur:"toprak-kazanc", b:"Hacı Emîr, beyliği Ordu-Ünye kıyısına doğru genişletti" },
    { t:"1398-01-01", tur:"antlasma", b:"Yıldırım Bayezid'e tâbi oldu" },
    { t:"1427-06-01", tur:"son", b:"II. Murad tarafından ilhak edildi" }
  ]
},
{ id:"mutahharten", ad:"Erzincan-Kemah Beyliği (Mutahharten)", tur:"beylik", bolge:"anadolu",
  f:"1379-01-01", t:"1403-01-01", baskent:"Erzincan", harita:"mutahharten",
  ozet:"Emîr Mutahharten'in Erzincan-Kemah'ta kurduğu küçük uç beyliği; Ankara Savaşı öncesi Timur'a boyun eğerek şehrini yıkımdan kurtardı. TDV'de ayrı maddesi yoktur; tarihler standart akademik kaynaklara (Uzunçarşılı, Cambridge History of Turkey) göredir.",
  kronoloji:[
    { t:"1379-01-01", tur:"kurulus", b:"Mutahharten, Erzincan-Kemah beyliğini kurdu" },
    { t:"1401-01-01", tur:"antlasma", b:"Timur'a itaat ederek şehrini tahripten korudu" },
    { t:"1403-01-01", tur:"son", b:"Mutahharten'in ölümüyle beylik Akkoyunlu nüfuzuna girdi" }
  ]
},

// --- Fetret Devri (1402-1413) — Ankara Savaşı sonrası Osmanlı şehzade saltanatları ---
// (kaynak: TDV, madde: fetret-devri, suleyman-celebi-emir, isa-celebi, musa-celebi;
//  Mehmed Çelebi için TDV'de ayrı madde yok, fetret-devri ve ankara-savasi maddeleri esas alındı)

{ id:"fetret-suleyman", ad:"Emîr Süleyman Çelebi Saltanatı (Rumeli)", tur:"sehzadelik", bolge:"balkanlar",
  f:"1402-07-28", t:"1411-02-17", baskent:"Edirne", harita:"suleyman-celebi",
  ozet:"Yıldırım Bayezid'in Ankara'da esir düşmesinin ardından Rumeli'de saltanatını ilan eden en büyük şehzade; kardeşi Musa Çelebi'ye yenilip öldürüldü.",
  kronoloji:[
    { t:"1402-07-28", tur:"kurulus", b:"Ankara Savaşı sonrası Edirne'de Rumeli'nin fiilî hükümdarı oldu" },
    { t:"1403-02-01", tur:"antlasma", b:"Bizans İmparatoru Manuel ile Gelibolu Antlaşması'nı imzaladı" },
    { t:"1411-02-17", tur:"son", b:"Musa Çelebi'nin baskınıyla Edirne'yi kaybetti, kaçarken yakalanıp öldürüldü" }
  ]
},
{ id:"fetret-isa", ad:"İsa Çelebi Saltanatı (Bursa)", tur:"sehzadelik", bolge:"anadolu",
  f:"1403-01-01", t:"1403-09-01", baskent:"Bursa", harita:"isa-celebi",
  ozet:"Ankara Savaşı sonrası Anadolu'da hükümdarlığını ilan eden şehzade; kardeşi Çelebi Mehmed'e yenilip Eskişehir'de öldürüldü.",
  kronoloji:[
    { t:"1403-01-01", tur:"kurulus", b:"Bursa'da hükümdarlığını ilan etti" },
    { t:"1403-09-01", tur:"son", b:"Çelebi Mehmed'e yenilip Eskişehir'de yakalanarak öldürüldü" }
  ]
},
{ id:"fetret-musa", ad:"Musa Çelebi Saltanatı (Rumeli)", tur:"sehzadelik", bolge:"balkanlar",
  f:"1411-02-17", t:"1413-07-05", baskent:"Edirne", harita:"musa-celebi",
  ozet:"Ağabeyi Süleyman'ı yenerek Rumeli'ye hâkim olan şehzade; İstanbul kuşatması başarısız kaldı, kardeşi Çelebi Mehmed'e Çamurlu'da yenilip öldürüldü.",
  kronoloji:[
    { t:"1411-02-17", tur:"kurulus", b:"Süleyman Çelebi'yi yenerek Edirne'de saltanatını ilan etti" },
    { t:"1411-11-01", tur:"savas", b:"İstanbul'u kuşattı, başarısız oldu" },
    { t:"1413-07-05", tur:"son", b:"Çamurlu Savaşı'nda Çelebi Mehmed'e yenilip öldürüldü" }
  ]
},
{ id:"fetret-mehmed", ad:"Çelebi Mehmed Saltanatı (Amasya/Anadolu)", tur:"sehzadelik", bolge:"anadolu",
  f:"1402-07-28", t:"1413-07-05", baskent:"Amasya → Bursa", harita:"mehmed-celebi",
  ozet:"Ankara Savaşı sonrası Anadolu'da tutunan, sırayla kardeşleri İsa ve Musa'yı saf dışı bırakarak Fetret Devri'ni kapatan şehzade; 1413'te I. Mehmed olarak tek padişah oldu.",
  kronoloji:[
    { t:"1402-07-28", tur:"kurulus", b:"Ankara Savaşı sonrası Amasya-Sivas çevresinde hâkimiyetini kurdu" },
    { t:"1403-01-01", tur:"savas", b:"Ulubat'ta İsa Çelebi'yi yenip Bursa'ya hâkim oldu" },
    { t:"1413-07-05", tur:"son", b:"Çamurlu'da Musa Çelebi'yi yenerek tek padişah (I. Mehmed) oldu, Fetret Devri kapandı" }
  ]
},

// ================================================================================
// Parti 2: Balkanlar — mevcut Sırp/Bulgar/Bosna/Arnavut/Eflak/Boğdan/Erdel/Karadağ/
// Mora/Atina/Nakşa kayıtları Parti 0'da zaten vardı (bkz. yukarıda "katalan" ile
// zenginleştirildi). Bu partide eksik kalanlar eklendi: Dubrovnik, Hersek, Zeta.
// Kaynak: TDV İslâm Ansiklopedisi (doğrulanmış slug'lar ozet'te not edildi).
// "hersek" TDV'de ayrı madde değil (yalnız Hersekzâde şahıs maddeleri var);
// standart akademik kaynağa göre yazıldı, ozet'te belirtildi.
// ================================================================================

{ id:"dubrovnik", ad:"Dubrovnik (Ragusa) Cumhuriyeti", tur:"cumhuriyet", bolge:"balkanlar",
  f:"700-01-01", t:"1808-01-31", baskent:"Dubrovnik",
  ozet:"Adriyatik kıyısında ticaretle zenginleşen özerk şehir cumhuriyeti; 1365'ten itibaren Osmanlı'ya haraç ödeyerek korumasını kazandı, Napolyon tarafından ilga edildi. (kaynak: TDV, madde: dubrovnik)",
  kronoloji:[
    { t:"1365-01-01", tur:"antlasma", b:"I. Murad'a elçi gönderip haraç karşılığı Osmanlı himayesine girdi" },
    { t:"1458-01-01", tur:"antlasma", b:"Yıllık haracı Fatih döneminde 12.500 flori düzeyine çıktı" },
    { t:"1699-01-26", tur:"toprak-kayip", b:"Karlofça ile Avusturya Dalmaçya'yı aldı, Osmanlı bağı zayıfladı" },
    { t:"1806-05-27", tur:"isgal", b:"Fransız kuvvetleri şehri işgal etti" },
    { t:"1808-01-31", tur:"son", b:"Mareşal Marmont cumhuriyeti resmen ilga etti" }
  ]
},
{ id:"hersek", ad:"Hersek (Kosača Dukalığı)", tur:"dukalik", bolge:"balkanlar",
  f:"1435-01-01", t:"1482-01-01", baskent:"Blagaj",
  ozet:"Bosna Krallığı'ndan fiilen bağımsız Kosača beyliği; 1448'de aldığı \"Herceg\" (dük) unvanından bölgeye \"Hersek\" adı kaldı. TDV'de ayrı maddesi yok; tarihler standart akademik kaynaklara göredir.",
  kronoloji:[
    { t:"1435-01-01", tur:"kurulus", b:"Stjepan Vukčić Kosača, doğu Bosna'da fiilî özerk beyliğini kurdu" },
    { t:"1448-01-01", tur:"hukumdar", b:"İmparator III. Friedrich'ten \"Herceg\" (dük) unvanını aldı" },
    { t:"1466-01-01", tur:"hukumdar", b:"Stjepan Vukčić öldü, oğulları arasında bölünme başladı" },
    { t:"1482-01-01", tur:"son", b:"Osmanlı, son Kosača kalelerini (Herceg Novi çevresi dahil) ele geçirdi" }
  ]
},
{ id:"zeta", ad:"Zeta Prensliği (Balšić / Crnojević)", tur:"prenslik", bolge:"balkanlar",
  f:"1356-01-01", t:"1514-01-01", baskent:"Skadar → Cetine (Cetinje)",
  ozet:"Sırp Krallığı'nın dağılmasıyla Balšić, sonra Crnojević hanedanlarının yönettiği dağlık prenslik; sonraki Karadağ'ın (bkz. [[karadag]]) çekirdeğini oluşturdu. (kaynak: TDV, madde: karadag)",
  kronoloji:[
    { t:"1356-01-01", tur:"kurulus", b:"Balšić ailesi Sırp Krallığı'nın çözülüşünde Zeta'da bağımsızlaştı" },
    { t:"1385-01-01", tur:"savas", b:"Osmanlı ile ilk çatışma yaşandı" },
    { t:"1421-01-01", tur:"bolunme", b:"Son Balšić hükümdarı Zeta'yı Sırp despotuna miras bıraktı" },
    { t:"1451-01-01", tur:"hukumdar", b:"Crnojević ailesi Zeta'nın başına geçti, merkezi Cetine'ye taşıdı" },
    { t:"1514-01-01", tur:"son", b:"İskender Bey (Crnojevićlerden) döneminde Zeta doğrudan Osmanlı sancağına dönüştürüldü" }
  ]
},

// ================================================================================
// Parti 3: Orta ve Batı Avrupa — Habsburg/Macaristan/Lehistan/Venedik/Cenova/
// Napoli/Papalık/Fransa/İspanya/Portekiz/İngiltere/Hollanda/İsveç/Danimarka
// Parti 0'da zaten vardı. Bu partide eksik kalanlar: Bohemya (Habsburg öncesi
// bağımsız krallık), İtalyan birliği öncesi üç devlet (Milano, Floransa/Toskana,
// Sardinya-Piyemonte — üçü de arac/uret_petek.py BOYALAR'da vardı, dizinde
// yoktu) ve birleşik İtalya Krallığı (1861-1923, "italya" BOYALAR id'si).
// Bu kayıtların hiçbiri TDV'nin kapsamı içinde değil (Avrupa'nın iç tarihi);
// kaynak kuralı gereği standart akademik referansa (Cambridge Medieval/Modern
// History, Setton) dayanıyor. Tarihler yaygın/tartışmasız kabul görmüş olanlar;
// gün hassasiyeti yalnız kesin bilinen olaylarda kullanıldı.
// ================================================================================

{ id:"bohemya", ad:"Bohemya Krallığı", tur:"krallik", bolge:"orta-avrupa",
  f:"1198-01-01", t:"1526-08-29", baskent:"Prag",
  ozet:"Kutsal Roma İmparatorluğu içinde özerk krallık; Hussit savaşları ve Jagellon hanedanı döneminden sonra Mohaç'ta kralın ölümüyle tacı Habsburg'a geçti (bkz. [[habsburg]]).",
  kronoloji:[
    { t:"1198-01-01", tur:"kurulus", b:"Ottokar I, kalıtsal kral unvanını kazandı" },
    { t:"1419-07-30", tur:"isyan", b:"Prag'da ilk pencereden atma (defenestrasyon) ile Hussit Savaşları başladı" },
    { t:"1436-01-01", tur:"antlasma", b:"Basel Uzlaşmalarıyla Hussit savaşları sona erdi" },
    { t:"1471-01-01", tur:"hukumdar", b:"Jagellon hanedanı (Vladislav II) tahta çıktı" },
    { t:"1526-08-29", tur:"son", b:"II. Layoş Mohaç'ta öldü, taç Habsburg I. Ferdinand'a geçti" }
  ]
},
{ id:"milano-dukaligi", ad:"Milano Dükalığı", tur:"dukalik", bolge:"italya",
  f:"1395-05-11", t:"1859-11-10", baskent:"Milano", harita:"milanoduka",
  ozet:"Visconti ve Sforza hanedanlarının İtalya'nın en zengin dükalığı; Sforza hattının sönmesiyle önce İspanyol, sonra Avusturya Habsburglarının eline geçti, İtalya birliğinde Sardinya-Piyemonte'ye katıldı.",
  kronoloji:[
    { t:"1395-05-11", tur:"kurulus", b:"Gian Galeazzo Visconti, İmparator Wenceslaus'tan dük unvanını satın aldı" },
    { t:"1450-03-25", tur:"hukumdar", b:"Francesco Sforza, Ambrosian Cumhuriyeti'ne son verip dük oldu" },
    { t:"1535-11-01", tur:"bolunme", b:"Son Sforza dükü öldü, V. Karl dükalığı İspanyol tacına kattı" },
    { t:"1714-01-01", tur:"toprak-kayip", b:"İspanya Veraset Savaşı sonrası Avusturya Habsburglarına geçti" },
    { t:"1859-11-10", tur:"son", b:"Zürih Antlaşması ile Lombardiya Sardinya-Piyemonte'ye bırakıldı" }
  ]
},
{ id:"toskana", ad:"Floransa / Toskana Büyük Dükalığı", tur:"dukalik", bolge:"italya",
  f:"1532-01-01", t:"1860-03-22", baskent:"Floransa", harita:"toskana",
  ozet:"Floransa Cumhuriyeti'nden Medici hanedanı eliyle doğan dükalık; 1569'da Büyük Dükalık'a yükseldi, İtalya birliğinde halkoylamasıyla Sardinya-Piyemonte'ye katıldı.",
  kronoloji:[
    { t:"1532-01-01", tur:"kurulus", b:"Floransa Cumhuriyeti, Medici hanedanı altında dükalığa dönüştü" },
    { t:"1569-08-27", tur:"hukumdar", b:"I. Cosimo, Papa V. Pius tarafından Toskana Büyük Dükü ilan edildi" },
    { t:"1737-07-09", tur:"bolunme", b:"Medici hanedanı sönünce taç Habsburg-Lorraine hanedanına geçti" },
    { t:"1860-03-22", tur:"son", b:"Halkoylamasıyla Sardinya-Piyemonte'ye (yakında İtalya Krallığı'na) katıldı" }
  ]
},
{ id:"sardinya-piyemonte", ad:"Sardinya-Piyemonte Krallığı (Savoya)", tur:"krallik", bolge:"italya",
  f:"1720-08-02", t:"1861-03-17", baskent:"Torino", harita:"sardinya",
  ozet:"Savoya hanedanının Sicilya'yı Sardinya ile takas ederek kazandığı kraliyet unvanı; İtalya birleşme hareketinin öncüsü oldu, 1861'de İtalya Krallığı'na dönüştü.",
  kronoloji:[
    { t:"1720-08-02", tur:"kurulus", b:"Savoya Dükü Amedeo, Sicilya'yı Avusturya'ya devredip Sardinya Krallığı unvanını aldı" },
    { t:"1848-03-23", tur:"savas", b:"I. Bağımsızlık Savaşı'nda Avusturya'ya karşı savaştı" },
    { t:"1859-07-11", tur:"savas", b:"II. Bağımsızlık Savaşı'nda Fransa ile birlikte Avusturya'yı yenip Lombardiya'yı kazandı" },
    { t:"1861-03-17", tur:"son", b:"II. Vittorio Emanuele, birleşik İtalya Krallığı'nı ilan etti" }
  ]
},
{ id:"italya", ad:"İtalya Krallığı", tur:"krallik", bolge:"italya",
  f:"1861-03-17", t:"1923-10-29", baskent:"Torino → Floransa → Roma", harita:"italya",
  ozet:"Sardinya-Piyemonte öncülüğünde birleşen İtalya; Trablusgarp Savaşı'yla Osmanlı'dan Libya ve Oniki Ada'yı aldı, I. Dünya Savaşı'nda İtilaf saflarında yer aldı (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1861-03-17", tur:"kurulus", b:"II. Vittorio Emanuele, birleşik krallığı ilan etti" },
    { t:"1866-01-01", tur:"toprak-kazanc", b:"III. Bağımsızlık Savaşı ile Venedik'i kazandı" },
    { t:"1870-09-20", tur:"toprak-kazanc", b:"Roma'yı alarak birleşmeyi tamamladı (bkz. [[papalik]])" },
    { t:"1911-09-29", tur:"savas", b:"Trablusgarp Savaşı'nı başlattı, Libya'yı ve Oniki Ada'yı aldı (bkz. [[trablusgarp-ocagi]], [[oniki-ada-italyan]])" },
    { t:"1915-05-23", tur:"savas", b:"İtilaf Devletleri safında I. Dünya Savaşı'na girdi" },
    { t:"1919-04-28", tur:"isgal", b:"Antalya ve çevresini işgal etti (Millî Mücadele cephelerinden biri)" }
  ]
},

// ================================================================================
// Parti 4: Doğu ve Kafkasya — Bizans, Kilikya Ermeni, Şirvanşahlar, Karakoyunlu,
// Akkoyunlu, Timurlu, Safevî, Afşar, Kaçar Parti 0-1'de zaten vardı; `gurcistan`
// kaydı yukarıda (Kartli/Kaheti/İmereti bölünmesi, Didgori, Kraliçe Tamar altın
// çağı eklenerek) zenginleştirildi. Eksik kalan iki kayıt: Trabzon Rum
// İmparatorluğu (TDV'de madde var) ve Zend Hanedanı (TDV'de madde yok — Afşar
// ile Kaçar arasındaki İran'ı dolduruyor, standart akademik kaynağa göre).
// ================================================================================

{ id:"trabzon-rum", ad:"Trabzon Rum İmparatorluğu", tur:"imparatorluk", bolge:"anadolu",
  f:"1204-01-01", t:"1461-08-15", baskent:"Trabzon",
  ozet:"IV. Haçlı Seferi'nin İstanbul'u düşürmesinden az önce Gürcü desteğiyle kurulan Komnenos hanedanlığı; Bizans'ın son parçası olarak Fatih'e teslim oldu. (kaynak: TDV, madde: trabzon)",
  kronoloji:[
    { t:"1204-01-01", tur:"kurulus", b:"Aleksios Komnenos, Gürcü Kraliçesi Tamar'ın desteğiyle Trabzon'da bağımsız Rum devletini kurdu" },
    { t:"1461-01-01", tur:"antlasma", b:"Akkoyunlu Uzun Hasan ile evlilik ittifakı (Despina Hatun) üzerinden Osmanlı'ya karşı destek arandı" },
    { t:"1461-08-15", tur:"son", b:"Fatih'in kuşatmasıyla teslim oldu; İmparator David Komnenos ailesiyle İstanbul'a sürüldü — Bizans mirasının son parçası (bkz. [[bizans]])" }
  ]
},
{ id:"zend", ad:"Zend Hanedanı (İran)", tur:"devlet", bolge:"iran",
  f:"1751-01-01", t:"1794-01-01", baskent:"Şiraz",
  ozet:"Nadir Şah'ın ölümü sonrası kargaşada Kerim Han'ın kurduğu, şah unvanı yerine \"Vekilü'r-Reâyâ\" sanını kullandığı İran hanedanı; Kaçarlar tarafından ortadan kaldırıldı (bkz. [[kacar]]). TDV'de ayrı maddesi yok; tarihler standart akademik kaynaklara göredir.",
  kronoloji:[
    { t:"1751-01-01", tur:"kurulus", b:"Kerim Han Zend, Nadir Şah sonrası kargaşada İran'ın büyük bölümünü ele geçirdi" },
    { t:"1765-01-01", tur:"hukumdar", b:"Şiraz'ı başkent yaparak imar etti, Basra ile ticareti geliştirdi" },
    { t:"1779-01-01", tur:"hukumdar", b:"Kerim Han öldü, halefleri arasında taht kavgaları başladı" },
    { t:"1794-01-01", tur:"son", b:"Ağa Muhammed Han Kaçar, son hükümdar Lütfali Han'ı Kirman'da yenip idam etti" }
  ]
},

// ================================================================================
// Parti 5: Kuzey ve bozkır — Altın Orda, Kırım Hanlığı, Zaporojye, Rusya
// Çarlığı/İmparatorluğu Parti 0'da zaten vardı (rusya kaydı zaten Astarhan'ın
// 1556 ilhakını içeriyordu). Bu partide Altın Orda'nın dört bozkır ardılından
// eksik kalan dördü eklendi: Kazan (`kazan` BOYALAR'da vardı), Astarhan, Sibir,
// Nogay — dördü de TDV'de doğrulanmış maddeye sahip.
// ================================================================================

{ id:"kazan", ad:"Kazan Hanlığı", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1437-01-01", t:"1552-10-02", baskent:"Kazan", harita:"kazan",
  ozet:"Altın Orda'nın dağılmasıyla Uluğ Muhammed'in kurduğu, İdil-Ural bölgesinin önemli bir İslâm ve ticaret merkezi olan hanlık; IV. İvan tarafından ilhak edildi. (kaynak: TDV, madde: kazan)",
  kronoloji:[
    { t:"1437-01-01", tur:"kurulus", b:"Altın Orda hanı Uluğ Muhammed, Kazan'da hanlığını kurdu (bazı kaynaklara göre 1445)" },
    { t:"1487-01-01", tur:"antlasma", b:"III. İvan'ın seferi sonucu Moskova yanlısı bir han tahta çıkarıldı, hanlık fiilen vasal oldu" },
    { t:"1552-10-02", tur:"son", b:"IV. İvan'ın kuşatması sonucu Kazan düştü, hanlık Rusya'ya ilhak edildi (bkz. [[rusya]])" }
  ]
},
{ id:"astarhan", ad:"Astarhan (Ejderhan) Hanlığı", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1466-01-01", t:"1556-01-01", baskent:"Ejderhan (Astarhan)",
  ozet:"Altın Orda'nın dağılmasıyla Kasım Han'ın kurduğu, Hazar'ın kuzey kıyısındaki hanlık; Kırım-Osmanlı nüfuz mücadelesinin ardından IV. İvan tarafından ilhak edildi. (kaynak: TDV, madde: astarhan-hanligi)",
  kronoloji:[
    { t:"1466-01-01", tur:"kurulus", b:"Küçük Muhammed Han'ın torunu Kasım Han, Ejderhan'da hanlığını kurdu" },
    { t:"1502-01-01", tur:"savas", b:"Kırım Hanı Mengli Giray, Osmanlı desteğiyle Saray şehrini yıktı; hanlık ~20 yıl Kırım nüfuzuna girdi" },
    { t:"1552-01-01", tur:"hukumdar", b:"IV. İvan, Kazan'ı aldıktan sonra Derviş Han'ı Ejderhan tahtına çıkarıp fiilen vasal yaptı" },
    { t:"1556-01-01", tur:"son", b:"Rusya hanlığı doğrudan işgal etti, hanedan Buhara'ya sığındı" },
    { t:"1569-01-01", tur:"savas", b:"Osmanlı, Don-Volga kanal projesiyle bölgeyi geri almaya çalıştı; Kefe Beyi Kasım Bey'in seferi başarısız oldu (bkz. [[rusya]])" }
  ]
},
{ id:"sibir", ad:"Sibir Hanlığı", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1420-01-01", t:"1598-01-01", baskent:"İsker (Sibir)",
  ozet:"Altın Orda'nın dağılmasıyla Batı Sibirya'da kurulan Türk-Tatar hanlığı; Küçüm Han'ın direnişine rağmen Yermak'ın kazaklarıyla başlayan Rus istilası hanlığı ortadan kaldırdı. (kaynak: TDV, madde: sibir-hanligi)",
  kronoloji:[
    { t:"1420-01-01", tur:"kurulus", b:"Hacı Muhammed, Sibir bölgesinde hanlığın temelini attı" },
    { t:"1493-01-01", tur:"bolunme", b:"Muhammed Tayboğa, hanedanı değiştirip başkenti Sibir şehrine taşıdı" },
    { t:"1563-01-01", tur:"hukumdar", b:"Şeybânî soyundan Küçüm Han tahta çıktı, Ruslara karşı direnişi örgütledi" },
    { t:"1582-01-01", tur:"savas", b:"Stroganov ailesinin desteklediği Yermak'ın kazakları başkent İsker'i ele geçirdi" },
    { t:"1598-01-01", tur:"son", b:"Küçüm Han kesin yenilgiye uğradı, hanlık fiilen sona erdi" }
  ]
},
{ id:"nogay", ad:"Nogay Ordası", tur:"devlet", bolge:"sibirya-bozkir",
  f:"1440-01-01", t:"1783-01-01", baskent:"(bozkırda göçebe, sabit başkent yok)",
  ozet:"Altın Orda'nın dağılma sürecinde Mangıt beyi Edigü'nün mirasından doğan Türk-Tatar konfederasyonu; 1557-58'de Osmanlı yanlısı Büyük Nogay ile Moskova/Kırım yanlısı Küçük Nogay olarak ikiye bölündü, Rus/Kalmuk baskısıyla bağımsızlığını yitirdi. (kaynak: TDV, madde: nogaylar)",
  kronoloji:[
    { t:"1420-01-01", tur:"hukumdar", b:"Mangıt beyi Edigü öldü; ardından oğulları konfederasyonun çekirdeğini oluşturdu" },
    { t:"1557-01-01", tur:"bolunme", b:"Osmanlı yanlısı Yûsuf Mirza ile Moskova yanlısı İsmâil Mirza arasındaki çekişme konfederasyonu ikiye böldü" },
    { t:"1558-01-01", tur:"bolunme", b:"Kadı Mirza'nın grubu Volga'yı geçip Küçük Nogay Ordası'nı kurdu, Büyük Nogay bozkırda kaldı" },
    { t:"1569-01-01", tur:"savas", b:"Osmanlı'nın Astarhan seferine etki etti ama askerî destek vermedi (bkz. [[astarhan]], [[rusya]])" },
    { t:"1586-01-01", tur:"toprak-kayip", b:"Moskova'nın Samara, Tsaritsın ve Saratov kalelerini kurmasıyla akınları sınırlandı" },
    { t:"1783-01-01", tur:"son", b:"Suvorov'un Kuban'daki yenilgisiyle Büyük Nogay'ın bağımsızlığı fiilen sona erdi" }
  ]
},

// ================================================================================
// Parti 6: Arabistan ve körfez — I/II. Suûdî Devleti, Şammar, Yemen Zeydî,
// Umman, Hicaz Krallığı Parti 0'da zaten vardı. Bu partide `arac/uret_petek.py`
// BOYALAR'da tanımlı olup dizinde karşılığı olmayan iki kayıt eklendi: Benî
// Hâlid (Lahsa) ve Âiz (Ebhâ/Asîr) — ikisi de BOYALAR'da harita üzerindeki
// "sahipsiz" boşlukları doldurmak için özellikle eklenmiş id'lerdi (kod
// içindeki yorumlar bunu açıkça belirtiyor), TDV'de ikisi de madde var.
// ================================================================================

{ id:"benihalid", ad:"Benî Hâlid Emirliği (Lahsa)", tur:"devlet", bolge:"arabistan",
  f:"1670-01-01", t:"1795-01-01", baskent:"Hufuf", harita:"benihalid",
  ozet:"Osmanlı'yı Lahsa'dan (el-Hasa) çıkarıp doğu Arabistan'a egemen olan bedevi emirliği; yükselen Suûdî-Vehhâbî devletine yenilerek 1795'te tasfiye edildi (1818-1830 arası kısa bir dönem geri döndüyse de 1874-75'te tarihe karıştı). (kaynak: TDV, madde: halid-beni-halid)",
  kronoloji:[
    { t:"1670-01-01", tur:"kurulus", b:"Berrâk b. Guraybir, Lahsa'nın merkezi Hufuf'u ele geçirip Osmanlı idaresine son verdi" },
    { t:"1691-01-01", tur:"toprak-kazanc", b:"Berrâk'ın oğlu Muhammed, Necid'e akınlarını sürdürdü" },
    { t:"1744-01-01", tur:"savas", b:"Muhammed b. Abdülvehhâb'ın Dir'iye'ye sığınmasıyla Suûdîlerle husumet başladı (bkz. [[suud-birinci]])" },
    { t:"1752-01-01", tur:"bolunme", b:"Süleyman el-Hamîdî tahttan indirildi, iç çekişmeler başladı" },
    { t:"1795-01-01", tur:"son", b:"Abdülazîz b. Suûd, Lahsa'yı ele geçirip emirliğe fiilen son verdi" }
  ]
},
{ id:"aiz", ad:"Âiz Emirliği (Ebhâ / Asîr)", tur:"devlet", bolge:"arabistan",
  f:"1918-10-30", t:"1920-01-01", baskent:"Ebhâ", harita:"aiz",
  ozet:"Mondros Mütarekesi'yle Osmanlı'nın Asîr'den çekilmesinin ardından Ebhâ yaylasında Hasan b. Muhammed Âiz'in kurduğu kısa ömürlü emirlik; ailenin bölgedeki nüfuzu 1840'lardan beri sürüyordu, Abdülazîz b. Suûd'un fethiyle sona erdi. (kaynak: TDV, madde: asir--suudi-arabistan)",
  kronoloji:[
    { t:"1866-01-01", tur:"hukumdar", b:"Muhammed b. Âiz, Osmanlı tarafından \"ümerâ emiri\" tanınarak ailenin Asîr'deki nüfuzu perçinlendi" },
    { t:"1871-01-01", tur:"savas", b:"Redif Paşa'nın seferiyle Osmanlı doğrudan idareyi yeniden kurdu, emirlik bir mutasarrıflığa dönüştü" },
    { t:"1918-10-30", tur:"kurulus", b:"Mondros Mütarekesi'yle Osmanlı çekildi, Hasan b. Muhammed Âiz Ebhâ'da fiilî bağımsız emirliğini kurdu" },
    { t:"1920-01-01", tur:"son", b:"Abdülazîz b. Suûd, Ebhâ'yı zaptederek Asîr yaylasını Suûdî topraklarına kattı" }
  ]
},

// ================================================================================
// Parti 7: Afrika — Memlûk, Fas (Sâdî/Alevî), Func (Sennâr), Habeşistan, Adal
// Parti 0'da zaten vardı. Bu partide `uret_petek.py` BOYALAR'da tanımlı olup
// dizinde karşılığı olmayan beş kayıt eklendi: Hafsîler, Zeyyânîler, Mehdî
// Devleti (TDV'de üçü de madde var), Nûbe krallıkları ve Somali sultanlıkları
// (ikisi de TDV'de yok — standart akademik kaynağa göre, düşük kesinlik
// ozet'te açıkça belirtildi).
// ================================================================================

{ id:"hafsi", ad:"Hafsîler (Tunus)", tur:"sultanlik", bolge:"kuzey-afrika",
  f:"1229-01-01", t:"1574-09-13", baskent:"Tunus", harita:"hafsi",
  ozet:"Muvahhidler'den bağımsızlaşan, Tunus'u Akdeniz'in önemli bir ticaret merkezine dönüştüren Berberî hanedan; iç çekişmeler ve İspanya müdahalesi sonrası Sinan Paşa'nın fethiyle Osmanlı eyaleti oldu. (kaynak: TDV, madde: hafsiler)",
  kronoloji:[
    { t:"1229-01-01", tur:"kurulus", b:"Ebû Zekeriyyâ Yahyâ, Muvahhidler'den ayrılıp İfrîkıye'de bağımsızlığını ilan etti" },
    { t:"1270-01-01", tur:"savas", b:"IX. Louis'nin (Fransa) Tunus'a yönelik Sekizinci Haçlı Seferi'ni püskürttü" },
    { t:"1534-01-01", tur:"toprak-kayip", b:"Barbaros Hayreddin Paşa Tunus'u aldı, ertesi yıl V. Karl geri verdi" },
    { t:"1574-09-13", tur:"son", b:"Sinan Paşa Tunus'u kesin olarak fethetti, son Hafsî Mevlây Muhammed İstanbul'a gönderildi" }
  ]
},
{ id:"zeyyani", ad:"Zeyyânîler (Tilimsan)", tur:"sultanlik", bolge:"kuzey-afrika",
  f:"1236-01-01", t:"1554-01-01", baskent:"Tilimsan (Tlemcen)", harita:"zeyyani",
  ozet:"Merinî ve Hafsî baskısı arasında sıkışan Tilimsan merkezli Berberî (Abdülvâdî) hanedanı; İspanya-Osmanlı çekişmesinin ardından Osmanlı'ya katıldı. (kaynak: TDV, madde: zeyyaniler)",
  kronoloji:[
    { t:"1236-01-01", tur:"kurulus", b:"Yağmurasen b. Zeyyân, Tilimsan'da hanedanını kurdu" },
    { t:"1337-01-01", tur:"toprak-kayip", b:"Merinîler Tilimsan'ı kısa süreliğine ele geçirdi" },
    { t:"1509-01-01", tur:"antlasma", b:"İspanya'nın baskısıyla haraca bağlandı" },
    { t:"1554-01-01", tur:"son", b:"Osmanlı beylerbeyi Salih Reis Tilimsan'ı alarak hanedana son verdi" }
  ]
},
{ id:"mehdi", ad:"Mehdî Devleti (Sudan)", tur:"devlet", bolge:"misir-sudan",
  f:"1881-03-01", t:"1898-09-02", baskent:"Ubeyyid (Kordofan) → Ömdürman", harita:"mehdi",
  ozet:"Muhammed Ahmed el-Mehdî'nin Sudan'da başlattığı dinî-siyasî hareketin kurduğu devlet; Hartum'u alıp General Gordon'u öldürdü, halefi Halife Abdullah döneminde Kitchener'in Ömdürman zaferiyle yıkıldı. (kaynak: TDV, madde: mehdiler--sudan)",
  kronoloji:[
    { t:"1881-03-01", tur:"kurulus", b:"Muhammed Ahmed, kendini Mehdî ilan etti" },
    { t:"1882-09-07", tur:"toprak-kazanc", b:"Kordofan'ın merkezi Ubeyyid'i ele geçirdi" },
    { t:"1885-01-26", tur:"toprak-kazanc", b:"Hartum'u aldı, General Gordon öldürüldü" },
    { t:"1885-06-22", tur:"hukumdar", b:"Muhammed Ahmed öldü, yerine Halife Abdullah et-Teâyişî geçti" },
    { t:"1898-09-02", tur:"son", b:"Kitchener'in Ömdürman zaferiyle devlet yıkıldı" }
  ]
},
{ id:"nube", ad:"Nûbe Krallıkları (Makurya-Alve)", tur:"krallik", bolge:"misir-sudan",
  f:"543-01-01", t:"1504-01-01", harita:"nube",
  ozet:"Nil vadisinde Hristiyan Nûbe krallıkları Makurya (Dongola merkezli) ve güneyindeki Alve (Soba merkezli); 651'de Araplarla imzalanan Bakt Antlaşması'yla asırlarca barış içinde yaşadılar, Memlük baskınları ve Arap göçleriyle önce Makurya sonra Alve yıkıldı. TDV'de ayrı maddesi yok; tarihler standart akademik kaynaklara göredir, kesinlik düşük.",
  kronoloji:[
    { t:"543-01-01", tur:"kurulus", b:"Makurya Krallığı Hristiyanlığı kabul etti (Dongola merkezli)" },
    { t:"651-01-01", tur:"antlasma", b:"Araplarla Bakt Antlaşması imzalandı, uzun bir barış dönemi başladı" },
    { t:"1276-01-01", tur:"isgal", b:"Memlük Sultanı Baybars'ın seferleriyle Dongola art arda yağmalandı" },
    { t:"1365-01-01", tur:"bolunme", b:"Dongola tahliye edildi, Makurya güneye çekilip küçük bir krallığa (Dotawo) dönüştü" },
    { t:"1504-01-01", tur:"son", b:"Func Sultanlığı, Soba'yı alarak Alve Krallığı'na son verdi (bkz. [[funj]])" }
  ]
},
{ id:"somali", ad:"Somali Sultanlıkları", tur:"sultanlik", bolge:"dogu-afrika",
  f:"1500-01-01", t:"1923-10-29", baskent:"Mogadişu ve çeşitli merkezler", harita:"somali",
  ozet:"Adal'ın çöküşünden sonra Somali kıyısında ardı ardına ortaya çıkan sultanlıklar (Ecuran/Ajuran, sonra Migiurtinia ve Hobyo); 20. yüzyıl başında İtalyan sömürgeciliğiyle sona erdi. TDV'de ayrı maddesi yok; tarihler standart akademik kaynaklara göredir, kesinlik düşük.",
  kronoloji:[
    { t:"1500-01-01", tur:"kurulus", b:"Ecuran (Ajuran) Sultanlığı, güney Somali kıyısında ve Şebelle vadisinde hâkimiyet kurdu" },
    { t:"1700-01-01", tur:"bolunme", b:"Ecuran Sultanlığı dağıldı, yerine Geledi ve diğer yerel sultanlıklar kuruldu" },
    { t:"1750-01-01", tur:"kurulus", b:"Migiurtinia (Meyd) Sultanlığı kuzeydoğu Somali'de kuruldu" },
    { t:"1878-01-01", tur:"kurulus", b:"Hobyo Sultanlığı, Yûsuf Ali Kenadid tarafından kuruldu" }
  ]
},

// ================================================================================
// Parti 8: 1918-1924 ardılları — Habsburg ve Romanov gövdelerinin dağılmasıyla
// ortaya çıkan devletler. `uret_petek.py`'deki BOYALAR yorumu bu boşluğu
// açıkça belirtiyordu ("1918 sonrası ardıl devletler... yerine hiçbir sahip
// yazılmamıştı"). Bunlar Avrupa'nın iç/modern tarihi olduğu için TDV kapsamı
// dışında; standart akademik kaynağa (genel kabul görmüş, tartışmasız
// tarihler) göre yazıldı. Norveç aslında 1905'te (Habsburg/Romanov'la
// ilgisiz) bağımsızlaştı ama BOYALAR aynı yorum bloğunda tanımlı olduğu için
// buraya eklendi; mevcut `danimarka` kaydı (Danimarka-Norveç, 1380-1923) 1814
// sonrası birliğin gerçekte dağıldığını yansıtmıyor — bu Parti 0'dan kalma bir
// basitleştirme, dokunmadım, ayrı `norvec` kaydı çakışmadan eklendi.
// ================================================================================

{ id:"cekoslovakya", ad:"Çekoslovakya Cumhuriyeti", tur:"cumhuriyet", bolge:"orta-avrupa",
  f:"1918-10-28", t:"1923-10-29", baskent:"Prag", harita:"cekoslovakya",
  ozet:"Avusturya-Macaristan'ın dağılmasıyla Çek ve Slovak topraklarının birleşmesinden doğan cumhuriyet; Masaryk ilk cumhurbaşkanı oldu (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1918-10-28", tur:"kurulus", b:"Prag'da bağımsızlık ilan edildi, Tomáš Masaryk cumhurbaşkanı seçildi" },
    { t:"1919-09-10", tur:"antlasma", b:"Saint-Germain Antlaşması Avusturya'nın Çekoslovakya'yı tanımasını sağladı" },
    { t:"1920-06-04", tur:"antlasma", b:"Trianon Antlaşması Macaristan'ın Slovakya'yı bırakmasını sağladı" }
  ]
},
{ id:"polonya", ad:"Polonya Cumhuriyeti (II. Cumhuriyet)", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1918-11-11", t:"1923-10-29", baskent:"Varşova", harita:"polonya",
  ozet:"123 yıllık paylaşılmışlığın ardından Almanya, Avusturya-Macaristan ve Rusya topraklarından yeniden kurulan devlet; Piłsudski önderliğinde bağımsızlığını Sovyetler'e karşı da savundu (1923 sonrasında da sürdü). Bkz. [[lehistan]] (eski Lehistan-Litvanya Birliği ile doğrudan devamlılığı yok).",
  kronoloji:[
    { t:"1918-11-11", tur:"kurulus", b:"Piłsudski Varşova'ya dönüp bağımsızlığı ilan etti" },
    { t:"1919-06-28", tur:"antlasma", b:"Versay Antlaşması ile bağımsızlığı uluslararası tanındı" },
    { t:"1920-08-15", tur:"savas", b:"Varşova Savaşı'nda Kızıl Ordu'yu durdurdu" },
    { t:"1921-03-18", tur:"antlasma", b:"Riga Antlaşması ile Sovyetler'le sınırlar netleşti" }
  ]
},
{ id:"yugoslavya", ad:"Sırp-Hırvat-Sloven Krallığı (SHS)", tur:"krallik", bolge:"balkanlar",
  f:"1918-12-01", t:"1923-10-29", baskent:"Belgrad", harita:"yugoslavya",
  ozet:"Sırbistan Krallığı ile Avusturya-Macaristan'ın güney Slav topraklarının birleşmesinden doğan krallık; 1929'da \"Yugoslavya\" adını aldı (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1918-12-01", tur:"kurulus", b:"Prens Naib Aleksandar, Belgrad'da SHS Krallığı'nı ilan etti" },
    { t:"1919-09-10", tur:"antlasma", b:"Saint-Germain Antlaşması ile eski Habsburg toprakları (Hırvatistan, Slovenya) resmileşti" }
  ]
},
{ id:"letonya", ad:"Letonya Cumhuriyeti", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1918-11-18", t:"1923-10-29", baskent:"Riga", harita:"letonya",
  ozet:"Rusya İmparatorluğu'nun dağılmasıyla bağımsızlığını ilan eden Baltık devleti; Bağımsızlık Savaşı'nda hem Sovyet hem Alman kuvvetlerine karşı direndi (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1918-11-18", tur:"kurulus", b:"Kārlis Ulmanis önderliğinde Riga'da bağımsızlık ilan edildi" },
    { t:"1919-01-01", tur:"savas", b:"Sovyet Letonya'sı ve Alman Baltık birlikleriyle Bağımsızlık Savaşı başladı" },
    { t:"1920-08-11", tur:"antlasma", b:"Riga Barışı ile Sovyet Rusya bağımsızlığı tanıdı" }
  ]
},
{ id:"litvanya", ad:"Litvanya Cumhuriyeti", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1918-02-16", t:"1923-10-29", baskent:"Kaunas (geçici) / Vilnius (iddia)", harita:"litvanya",
  ozet:"Rusya İmparatorluğu'nun dağılmasıyla bağımsızlığını ilan eden Baltık devleti; Vilnius'u Polonya'ya kaptırınca geçici başkent Kaunas oldu (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1918-02-16", tur:"kurulus", b:"Vilnius'ta \"16 Şubat Bildirgesi\" ile bağımsızlık ilan edildi" },
    { t:"1920-10-09", tur:"toprak-kayip", b:"General Żeligowski'nin Polonya birlikleri Vilnius'u ele geçirdi, başkent Kaunas'a taşındı" }
  ]
},
{ id:"estonya", ad:"Estonya Cumhuriyeti", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1918-02-24", t:"1923-10-29", baskent:"Tallinn",
  ozet:"Rusya İmparatorluğu'nun dağılmasıyla bağımsızlığını ilan eden Baltık devleti; Bağımsızlık Savaşı'nda Sovyetler'e karşı direndi (1923 sonrasında da sürdü). BOYALAR'da ayrı id'si yok (haritada Letonya/Litvanya ile aynı bölgeye dahil), yine de tam bir devlet olarak kaydedildi.",
  kronoloji:[
    { t:"1918-02-24", tur:"kurulus", b:"Tallinn'de bağımsızlık ilan edildi" },
    { t:"1918-11-28", tur:"savas", b:"Sovyet Rusya saldırısıyla Bağımsızlık Savaşı başladı" },
    { t:"1920-02-02", tur:"antlasma", b:"Tartu Barışı ile Sovyet Rusya bağımsızlığı tanıdı" }
  ]
},
{ id:"finlandiya", ad:"Finlandiya Cumhuriyeti", tur:"cumhuriyet", bolge:"kuzey-avrupa",
  f:"1917-12-06", t:"1923-10-29", baskent:"Helsinki", harita:"finlandiya",
  ozet:"Rusya İmparatorluğu'nun dağılmasıyla bağımsızlığını ilan eden Kuzey devleti; kısa bir iç savaşın ardından cumhuriyet olarak pekişti (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1917-12-06", tur:"kurulus", b:"Finlandiya Senatosu bağımsızlığı ilan etti" },
    { t:"1918-01-27", tur:"savas", b:"Kızıllar ve Beyazlar arasında iç savaş başladı (Mannerheim'ın zaferiyle Mayıs 1918'de bitti)" },
    { t:"1919-07-17", tur:"antlasma", b:"Cumhuriyet anayasası kabul edildi" }
  ]
},
{ id:"norvec", ad:"Norveç Krallığı (bağımsız)", tur:"krallik", bolge:"kuzey-avrupa",
  f:"1905-06-07", t:"1923-10-29", baskent:"Kristiania (Oslo)", harita:"norvec",
  ozet:"İsveç ile 91 yıllık kişisel birliğin barışçıl feshiyle doğan krallık; Danimarkalı Prens Carl, halkoylamasıyla kral seçilip Haakon VII adını aldı (1923 sonrasında da sürdü).",
  kronoloji:[
    { t:"1905-06-07", tur:"kurulus", b:"Norveç Storting'i İsveç ile birliği tek taraflı feshetti" },
    { t:"1905-08-13", tur:"antlasma", b:"Halkoylamasıyla fesih onaylandı, Karlstad Antlaşması ile İsveç kabul etti" },
    { t:"1905-11-18", tur:"hukumdar", b:"Danimarka Prensi Carl, VII. Haakon unvanıyla kral oldu" }
  ]
}

];
