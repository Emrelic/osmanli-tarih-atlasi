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
//   tabi      : [{f,t,ust}] — ALT-ARALIK, kaydın kendi f/t'sinin dışına
//               taşamaz: f <= tabi.f < tabi.t <= t. Devletin ömrü ile bir
//               üst güce (ör. Osmanlı) tâbi olduğu dönem AYNI ŞEY DEĞİLDİR
//               (ör. sirbistan-prensligi 1882'ye kadar yaşıyor ama tâbiiyeti
//               1878 Berlin'de bitiyor — kalan 4 yıl bağımsız prenslik).
//               savaslar.js'in ic-savas/dis-savas ölçütü bunu okur. Karşılığı
//               yoksa alan hiç yazılmaz. Kaynak: oturumlar/ARABISTAN-
//               DUZELTMELER.md §AJ/§AK (ARAŞTIRMA ARABİSTAN'ın tablosu).
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
  kaynak:"bizans",
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
  f:"1250-01-01", t:"1517-04-13", baskent:"Kahire", harita:"memluk",
  ozet:"Mısır ve Suriye'yi 267 yıl yöneten köle-asker (memlûk) kökenli sultanlık; Yavuz Sultan Selim tarafından ilhak edildi.",
  kaynak:"memluk",
  kronoloji:[
    { t:"1250-05-02", tur:"kurulus", b:"Memlûk emirleri Eyyûbî hanedanına son verdi" },
    { t:"1260-09-03", tur:"savas", b:"Ayn Câlût'ta Moğolları durdurdular" },
    { t:"1277-07-01", tur:"hukumdar", b:"I. Baybars öldü; kısa süre sonra Kalavun hanedanı iktidara geldi" },
    { t:"1291-05-18", tur:"toprak-kazanc", b:"Akkâ'nın fethiyle Haçlıların Levant'tan tasfiyesi" },
    { t:"1382-01-01", tur:"bolunme", b:"Burci (Çerkes) Memlûkleri, Bahrî Memlûklerinin yerini aldı" },
    { t:"1400-01-01", tur:"isgal", b:"Timur, Halep ve Şam'ı yağmaladı" },
    { t:"1485-01-01", tur:"savas", b:"Osmanlı-Memlûk Çukurova savaşları başladı (1491'e dek, kesin sonuçsuz)" },
    { t:"1516-08-24", tur:"toprak-kayip", b:"Mercidabık'ta Kansu Gavri öldü; Suriye Osmanlı'ya geçti" },
    { t:"1517-01-22", tur:"savas", b:"Ridaniye'de Tomanbay'ın ordusu dağıtıldı, Kahire düştü" },
    { t:"1517-04-13", tur:"son", b:"Kahire'de Tomanbay idam edildi; Mısır Osmanlı'ya katıldı" }
  ]
},

{ id:"safevi", ad:"Safevî Devleti (İran)", tur:"devlet", bolge:"iran",
  f:"1501-07-01", t:"1736-03-08", baskent:"Tebriz → Kazvin → İsfahan", harita:"safevi",
  ozet:"Şiî-Safevî hanedanının kurduğu İran devleti (hanedan ömrü); Şah İsmail'in 1501'de Akkoyunlu Elvend'i yenmesiyle doğdu, TDV'ye göre 1722'den beri fiilen sona ermişti, Nadir Şah 1736'da tamamen ortadan kaldırdı — Osmanlı'nın doğu cephesindeki üç asırlık ana rakibi.",
  kaynak:"safeviler",
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
  f:"1736-03-08", t:"1796-01-01", baskent:"Meşhed", harita:"afsar",
  ozet:"Nadir Şah'ın kısa ama fetihçi hanedanı; ölümüyle fiilen parçalandı, Horasan'da bir kolu 1796'ya dek sürdü. ⚠️ VERİ DEVLET (7 Ağustos 2026) DÜZELTTİ: `harita:` alanı `\"iran\"`den `\"afsar\"`a çekildi — `afsar` ve `kacar` aylardır AYNI `\"iran\"` anahtarına bakıyordu (`renk_olc` her koşuda ΔE 0 aynı-anahtar örtüşmesi bildiriyordu), bu yüzden 257 pencere yanlış künyeye bağlanıyordu.",
  kaynak:"avsarlilar",
  kronoloji:[
    { t:"1736-03-08", tur:"kurulus", b:"Nadir Şah tahta çıktı" },
    { t:"1730-01-01", tur:"savas", b:"Osmanlı ile Bağdat-Kirkük çevresinde savaşlar (1746'ya dek aralıklı)" },
    { t:"1746-09-04", tur:"antlasma", b:"Kerden Antlaşması — 1639 Kasr-ı Şirin sınırına dönüş" },
    { t:"1747-06-19", tur:"son", b:"Nadir Şah suikaste kurban gitti, devlet parçalandı" }
  ]
},

{ id:"kacar", ad:"Kaçar Hanedanı (İran)", tur:"devlet", bolge:"iran",
  f:"1789-03-21", t:"1923-10-29", baskent:"Tahran", harita:"kacar",
  ozet:"Ağa Muhammed Han'ın kurduğu son İran hanedanı; Osmanlı ile son sınır anlaşmazlıkları bu dönemde çözüldü. ⚠️ VERİ DEVLET (7 Ağustos 2026) DÜZELTTİ: TDV `riza-sah-pehlevi` maddesi hanedanın resmî sonunu \"31 Ocak 1924 tarihinde meclis, Avrupa'da bulunan Ahmed Şah'ı gıyabında tahttan indirerek Kaçar hânedanına son verdi\" diye tarihliyor — 1925 değil 1924 (site ufkunun dışında). Ardılı için bkz. [[iran]]. `harita:` alanı ayrıca aynı gün `\"iran\"`den `\"kacar\"`a çekildi (bkz. `afsar` kaydındaki not — aylardır `afsar` ile aynı anahtarı paylaşıyordu).",
  kaynak:"kacarlar",
  kronoloji:[
    { t:"1789-03-21", tur:"kurulus", b:"Ağa Muhammed Han Kaçar tahta çıktı, Tahran'ı başkent yaptı" },
    { t:"1794-01-01", tur:"birlesme", b:"Zend hanedanına son verildi, İran yeniden birleşti" },
    { t:"1821-01-01", tur:"savas", b:"Osmanlı-İran son savaşı (1823'e dek)" },
    { t:"1823-07-28", tur:"antlasma", b:"Erzurum Antlaşması — sınır düzenlemesi" },
    { t:"1847-05-31", tur:"antlasma", b:"II. Erzurum Antlaşması — Şattülarap sınır anlaşmazlığı çözüldü" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — Emre'nin 7 Ağustos kararı: "iran bir devlet
// adı da oldu bir coğrafya adı da oldu... diğer iranları hanedanı ile anmak
// olabilir, kaçarlar zend safeviler afşarlar gibi." Yani bu kayıt MODERN
// ULUS-DEVLETİ temsil eder (Pehlevi + İran İslam Cumhuriyeti); Safevî/Afşar/
// Zend/Kaçar dönemleri kendi hanedan künyeleriyle ayrı kalır (yukarı bak).
// ⚠️ AÇIK SORU — KOORDİNATÖRE: bu kaydın f'si (1925-12-12) atlasın ufkunun
// (1923-10-29) SONRASINDA. Dosyanın kendi kuralı ("t = 1923-10-29, ufuk
// sonrası da süren devletlerde") yalnız f<ufuk olan kayıtları düşünüyor;
// f>ufuk olan bir kaydın t'si için EMSAL YOK. t alanına, hâlâ var olan bir
// devlet olduğu için keyfî/güncel bir tarih (bu satırın yazıldığı gün)
// yazıldı — harita hiçbir zaman bu kaydı boyamayacak (ufuk 1923'te bittiği
// için), kayıt yalnız dizin/isim netliği amaçlı. Şema uygun değilse
// (ör. t alanı boş/"—" bırakılmalı) KARAR KOORDİNATÖRÜN.
{ id:"iran", ad:"İran (Pehlevi Hanedanı → İran İslam Cumhuriyeti)", tur:"devlet", bolge:"iran",
  f:"1925-12-12", t:"2026-08-07", baskent:"Tahran",
  ozet:"Kaçar hânedanının mecliste gıyaben tahttan indirilmesinin (31 Ocak 1924) ardından Rızâ Han'ın 12 Aralık 1925'te şehinşah ilan edilmesiyle kurulan Pehlevi hânedanı ve 1979 İslam Devrimi sonrası kurulan İran İslam Cumhuriyeti'nin ortak kaydı — modern ulus-devlet olarak \"İran\" adı burada, hanedan adları (Safevî/Afşar/Zend/Kaçar) ayrı künyelerde tutulur (Emre'nin 7 Ağustos 2026 kararı). ⚠️ Tamamı atlasın ufkunun (1923-10-29) DIŞINDA; haritada hiç boyanmaz, yalnız dizin amaçlı. (kaynak: TDV, madde: riza-sah-pehlevi, humeyni)",
  kaynak:"iran",
  kronoloji:[
    { t:"1925-12-12", tur:"kurulus", b:"Rızâ Han meclis tarafından şehinşah ilan edildi, Pehlevi hânedanı kuruldu" },
    { t:"1926-04-25", tur:"hukumdar", b:"Gülistan Sarayı'nda taç giydi" },
    { t:"1941-09-16", tur:"hukumdar", b:"Rızâ Şah tahttan çekilmek zorunda bırakıldı, oğlu Muhammed Rızâ Şah tahta çıktı" },
    { t:"1979-01-16", tur:"isyan", b:"Muhammed Rızâ Şah ülkeyi terk etti, bir daha dönemedi" },
    { t:"1979-02-01", tur:"isyan", b:"Ayetullah Humeyni sürgünden Tahran'a döndü" },
    { t:"1979-03-31", tur:"bolunme", b:"Referandumla İran İslam Cumhuriyeti ilan edildi, monarşi resmen sona erdi" }
  ]
},

{ id:"altinorda", ad:"Altın Orda (Deşt-i Kıpçak Hanlığı)", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1242-01-01", t:"1502-01-01", baskent:"Saray", harita:"altinorda",
  ozet:"Moğol kökenli bozkır imparatorluğu (hanedan ömrü, Cuci ulusu); Batu Han'ın 1241'de İdil'de kurduğu merkezden doğdu, Şeyh Ahmed Han döneminde parçalanarak Kırım, Kazan, Nogay, Astarhan ve Sibir hanlıklarına bölündü, 1502'de fiilen sona erdi.",
  kaynak:"altin-orda-hanligi",
  kronoloji:[
    { t:"1242-01-01", tur:"kurulus", b:"Batu Han, Altın Orda'yı kurdu" },
    { t:"1380-09-08", tur:"toprak-kayip", b:"Kulikovo'da Moskova Knezliği'ne yenildi — Rus bağımsızlığının başlangıcı" },
    { t:"1395-01-01", tur:"isgal", b:"Timur'un istilası, Saray tahrip edildi" },
    { t:"1441-01-01", tur:"bolunme", b:"Kırım, Kazan, Astrahan ve Sibir hanlıkları ayrıştı" },
    { t:"1502-01-01", tur:"son", b:"Büyük Orda, Kırım Hanlığı tarafından dağıtıldı" }
  ]
},

{ id:"kirim", ad:"Kırım Hanlığı", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1441-01-01", t:"1783-04-19", baskent:"Bahçesaray", harita:"kirim",
  tabi:[{f:"1475-06-06", t:"1774-07-21", ust:"osmanli"}],
  ozet:"Osmanlı'nın en uzun süreli ve en yakın vasalı; 1475'ten itibaren Osmanlı himayesinde, 1783'te Rusya tarafından ilhak edildi.",
  kaynak:"kirim",
  kronoloji:[
    { t:"1441-01-01", tur:"kurulus", b:"Hacı Giray, Altın Orda'dan bağımsızlığını ilan etti" },
    { t:"1475-06-01", tur:"antlasma", b:"Osmanlı Kefe'yi fethetti; Kırım Hanlığı Osmanlı'ya tâbi oldu" },
    { t:"1502-01-01", tur:"toprak-kazanc", b:"Büyük Orda'yı ortadan kaldırdı" },
    { t:"1571-05-24", tur:"savas", b:"Devlet Giray, Moskova'yı yaktı" },
    { t:"1648-05-01", tur:"ittifak", b:"Tugay Bey kuvvetleri Hetman Hmelnitski'nin Kazak ayaklanmasına destek verdi" },
    { t:"1687-01-01", tur:"savas", b:"Rus Kırım seferleri püskürtüldü (1689'a dek)" },
    { t:"1711-07-08", tur:"ittifak", b:"Devlet II Giray, Prut Seferi'nde Osmanlı ordusuna katıldı" },
    { t:"1736-01-01", tur:"isgal", b:"Rus orduları Bahçesaray'ı yaktı" },
    { t:"1774-07-21", tur:"antlasma", b:"Küçük Kaynarca — Kırım siyaseten bağımsız ilan edildi, dinî bağ Osmanlı'da kaldı" },
    { t:"1783-04-19", tur:"son", b:"Rusya, Kırım'ı ilhak etti (II. Katerina'nın ilhak manifestosu; kaynaklarda 8 Nisan 1783 olarak da geçer — o ESKİ TAKVİM/Julian karşılığıdır, XVIII. yy'da fark 11 gün. Bu dizin YENİ TAKVİM/Gregoryen kullanır; aynı konvansiyon Küçük Kaynarca'da da geçerli: 1774-07-21 Yeni, Eski'de 10 Temmuz)" }
  ]
},

{ id:"habsburg", ad:"Habsburg Avusturya", tur:"imparatorluk", bolge:"orta-avrupa",
  f:"1526-08-29", t:"1918-11-11", baskent:"Viyana", harita:"avusturya",
  ozet:"Mohaç sonrası Macar tacını alan Habsburg hanedanı; üç asır boyunca Osmanlı'nın Orta Avrupa'daki ana rakibi, sonunda Avusturya-Macaristan olarak I. Dünya Savaşı'nda dağıldı.",
  kaynak:"avusturya",
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

// VERİ DEVLET (7 Ağustos 2026) — DALGA 1 "battaniye ad" işi: `rusya` harita
// kimliği künyenin ömrünün (1547-1917) DIŞINDAKİ pencerelerde de kullanılıyordu.
// Ön boşluk (1281-1547, Moskova Büyük Knezliği) ve arka boşluk (1917-1923,
// Sovyet Rusya/SSCB — 242 kayıtla bu partinin EN BÜYÜK tek kalemi) için iki
// künye eklendi. Kaynak ikisinde de TDV `rusya` (canlı, genel madde).
// VERİ DEVLET (7 Ağustos 2026) — NOKTA HALKA-2 oturumunun bulduğu 266 yıllık
// hayalet: Avrupa Rusyası'nda (Moskova, Novgorod, Ryazan, Tula, Vologda,
// Pustozersk…) noktalar 1281-1547 arası `rusya`nın (f:1547-01-16) rengiyle
// boyanıyordu — o tarihte `rusya` henüz yoktu. `moskova` zaten yazılmıştı;
// bu üç kardeş knezlik/cumhuriyet (Novgorod, Pskov, Tver) aynı boşluğun
// geri kalanını kapatıyor. ⚠️ TDV bu coğrafyayı ZAYIF kapsıyor —
// `novgorod`/`pskov`/`tver` ve denenen bütün alternatif sluglar (`-knezligi`,
// `-cumhuriyeti`, `-buyuk-knezligi`, `novogrod`, `pskof`, `tferi`, `kiev`,
// `kiev-knezligi`, `rus-knezlikleri`) HEPSİ 302 (ölü) — TDV'DE MADDE YOK.
// §4 istisnası: standart akademik kaynak, `ermenistan` emsaliyle AÇIKÇA
// işaretlendi.
{ id:"novgorod", ad:"Novgorod Cumhuriyeti", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1136-01-01", t:"1478-01-15", baskent:"Novgorod",
  ozet:"Novgorodluların prensleri (knez) veçe meclisiyle seçip azledebildiği, Kuzey Rusya'dan Ural'a uzanan geniş ticaret ağını (Hansa ile bağlantılı) denetleyen şehir cumhuriyeti; III. İvan'ın Moskova kuvvetleri veçe çanını indirip özerkliğine son verdi. ⚠️ BULUNAMADI (TDV'de): `novgorod` ve denenen tüm alternatif sluglar 302 (ölü), TDV'de madde yok. Tarihler standart akademik kaynağa göredir (§4).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1136-01-01", tur:"kurulus", b:"Novgorodlular Prens Vsevolod Mstislaviç'i kovup veçe (halk meclisi) yönetimini kurumsallaştırdı" },
    { t:"1240-07-15", tur:"savas", b:"Prens Aleksandr Yaroslaviç, Neva Nehri kıyısında İsveç kuvvetlerini bozguna uğrattı; bu zaferle 'Nevski' unvanını aldı ve Novgorod'un Baltık'a çıkışı korundu (standart akademik kaynak)" },
    { t:"1242-04-05", tur:"savas", b:"Aleksandr Nevski komutasındaki Novgorod kuvvetleri Çudskoye (Peipus) Gölü'nün buzları üzerinde Teuton Şövalyeleri'ni yendi; Katolik haçlı seferinin kuzey Rusya'ya ilerleyişi durduruldu (standart akademik kaynak)" },
    { t:"1471-07-14", tur:"savas", b:"Moskova Büyük Knezliği kuvvetleri Şelon Nehri kıyısında sayıca üstün Novgorod ordusunu ağır yenilgiye uğrattı; Novgorod fiilen Moskova'ya boyun eğdi, 1478'deki kesin ilhakın yolu açıldı (standart akademik kaynak)" },
    { t:"1478-01-15", tur:"son", b:"III. İvan'ın Moskova kuvvetleri şehri ele geçirdi, veçe çanı indirilip cumhuriyet ilga edildi" }
  ]
},
{ id:"pskov", ad:"Pskov Cumhuriyeti", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1348-01-01", t:"1510-01-13", baskent:"Pskov",
  ozet:"Novgorod'un bir uzantısı olarak başlayıp Bolotovo Antlaşması ile ayrı bir şehir cumhuriyetine dönüşen, Livonya Tarikatı'na karşı sınır savunmasıyla tanınan devlet; III. Vasili'nin Moskova kuvvetlerine veçe çanının indirilmesiyle son buldu. ⚠️ BULUNAMADI (TDV'de): `pskov` ve alternatif sluglar 302 (ölü), TDV'de madde yok. Tarihler standart akademik kaynağa göredir (§4).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1348-01-01", tur:"kurulus", b:"Bolotovo Antlaşması ile Novgorod'dan ayrı, bağımsız bir cumhuriyet oldu" },
    { t:"1501-08-27", tur:"savas", b:"Livonya Tarikatı, Büyük Üstat Wolter von Plettenberg komutasında Siritsa Nehri'nde Moskova-Pskov ordusunu bozguna uğrattı; Pskov kuşatmaya rağmen düşmedi (orta güven — akademik bağlam sağlam, tekil muharebe ayrıntısı ansiklopedik kaynaktan)" },
    { t:"1510-01-13", tur:"son", b:"III. Vasili'nin kuvvetleri veçe çanını indirdi, cumhuriyet Moskova'ya ilhak edildi" }
  ]
},
{ id:"tver", ad:"Tver Büyük Knezliği", tur:"prenslik", bolge:"dogu-avrupa",
  f:"1246-01-01", t:"1485-09-12", baskent:"Tver",
  ozet:"İskender Nevski'nin kardeşi Yaroslav Yaroslaviç'in kurduğu, uzun süre Moskova'nın büyük knezlik unvanı için başlıca rakibi olan hanedanlık; III. İvan'ın kuşatmasıyla son büyük knez Litvanya'ya kaçtı, knezlik Moskova'ya katıldı. ⚠️ BULUNAMADI (TDV'de): `tver` ve alternatif sluglar 302 (ölü), TDV'de madde yok. Tarihler standart akademik kaynağa göredir (§4).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1246-01-01", tur:"kurulus", b:"Yaroslav Yaroslaviç, Tver'de ayrı bir knezlik kurdu" },
    { t:"1327-01-01", tur:"isyan", b:"Altın Orda'ya karşı büyük bir isyan başlattı, Moskova'nın da katıldığı Moğol misillemesiyle bastırıldı" },
    { t:"1485-09-12", tur:"son", b:"III. İvan'ın kuşatması üzerine son büyük knez Mihail Borisoviç Litvanya'ya kaçtı, knezlik Moskova'ya katıldı" }
  ]
},
{ id:"moskova", ad:"Moskova Büyük Knezliği", tur:"prenslik", bolge:"dogu-avrupa",
  f:"1325-01-01", t:"1547-01-16", baskent:"Moskova",
  ozet:"I. İvan Kalita'nın 'büyük knez' unvanını almasıyla Rus topraklarının siyasî merkezi hâline gelen knezlik; 1480'de Altın Orda hâkimiyetinden fiilen çıktı, IV. İvan'ın çar ilan edilmesiyle Rusya Çarlığı'na dönüştü (bkz. [[rusya]]). (kaynak: TDV, madde: rusya)",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1325-01-01", tur:"kurulus", b:"I. İvan Daniloviç (Kalita) 'büyük knez' unvanını aldı, Moskova Rus topraklarının siyasî merkezi oldu" },
    { t:"1480-01-01", tur:"toprak-kazanc", b:"Altın Orda hâkimiyetinden fiilen çıktı (Ugra Nehri karşılaşması)" },
    { t:"1547-01-16", tur:"son", b:"IV. İvan çar ilan edildi, Moskova Knezliği'nin yerini Rusya Çarlığı aldı" }
  ]
},

{ id:"rusya", ad:"Rusya Çarlığı / İmparatorluğu", tur:"imparatorluk", bolge:"dogu-avrupa",
  f:"1547-01-16", t:"1917-03-15", baskent:"Moskova → Sankt-Peterburg", harita:"rusya",
  ozet:"IV. İvan'la çarlığa, I. Petro'yla imparatorluğa dönüşen, 350 yılda Karadeniz kuzeyi ve Kafkasya'da Osmanlı'yı geriletti.",
  kaynak:"rusya",
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
    { t:"1783-04-19", tur:"toprak-kazanc", b:"Kırım'ı ilhak etti" },
    { t:"1812-05-28", tur:"toprak-kazanc", b:"Bükreş Antlaşması ile Besarabya alındı" },
    { t:"1829-09-14", tur:"antlasma", b:"Edirne Antlaşması — Osmanlı-Rus savaşı sonu" },
    { t:"1853-10-04", tur:"savas", b:"Kırım Savaşı'nda yenildi (1856'ya dek)" },
    { t:"1877-04-24", tur:"savas", b:"93 Harbi — Ayastefanos ve Berlin antlaşmalarına giden savaş" },
    { t:"1917-03-15", tur:"son", b:"II. Nikolay tahttan çekildi, Romanov hanedanı sona erdi" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — `rusya` ile `sovyet-rusya` arasında 8 aylık
// bir boşluk vardı (233 dönem bu pencereyi kesiyordu); koordinatör (b)
// seçeneğini (sovyet-rusya'nın f'ini geriye çekmek) REDDETTİ çünkü bu,
// `sovyet-rusya`yı kendi kuruluşundan (7 Kasım) 8 ay önceye — henüz Sovyet
// olmayan bir döneme — boyayacaktı; tam §3.5'in "hayalet devlet" sınıfı.
// (a) seçildi: AYRI künye. TDV kapsamıyor (4 slug denendi, hepsi 302),
// `ermenistan`/üç knezlik emsaliyle AÇIKÇA işaretlendi.
{ id:"rusya-gecici-hukumet", ad:"Rusya Geçici Hükûmeti", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1917-03-15", t:"1917-11-07", baskent:"Petrograd",
  ozet:"II. Nikolay'ın tahttan çekilmesiyle kurulan, İşçi-Asker Sovyetleri ile ikili iktidar (dvoyevlastiye) hâlinde yönetimi paylaşan geçiş hükûmeti; Prens Lvov ve ardından Kerenski önderliğinde, 1 Eylül 1917'de Rus Cumhuriyeti'ni ilan etti, Ekim İhtilâli ile Bolşeviklerce devrildi (bkz. [[rusya]], [[sovyet-rusya]]). ⚠️ BULUNAMADI (TDV'de): `gecici-hukumet`, `kerenski`, `subat-devrimi`, `rus-inkilabi` — dördü de 302 (ölü), TDV'de madde yok. Tarihler standart akademik kaynağa göredir (§4).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1917-03-15", tur:"kurulus", b:"II. Nikolay'ın tahttan çekilmesiyle Prens Lvov önderliğinde kuruldu" },
    { t:"1917-07-21", tur:"hukumdar", b:"Aleksandr Kerenski başbakan oldu" },
    { t:"1917-09-01", tur:"kurulus", b:"Rus Cumhuriyeti resmen ilan edildi" },
    { t:"1917-11-07", tur:"son", b:"Ekim İhtilâli ile Bolşevikler tarafından devrildi (bkz. [[sovyet-rusya]])" }
  ]
},
{ id:"sovyet-rusya", ad:"Sovyet Rusya / SSCB", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1917-11-07", t:"1923-10-29", baskent:"Petrograd → Moskova",
  ozet:"Ekim İhtilâli ile Bolşeviklerin iktidara gelmesiyle kurulan Rusya Sovyet Federatif Sosyalist Cumhuriyeti; Ukrayna, Beyaz Rusya ve Transkafkasya ile birleşerek SSCB'yi oluşturdu (1923 sonrasında da sürdü). ⚠️ Ekim İhtilâli'nin günü (7 Kasım, Gregoryen — dönemin Rusya'sında hâlâ kullanılan Jülyen takvimiyle 25 Ekim) TDV maddesinde birebir geçmiyor, standart tarihtir. (kaynak: TDV, madde: rusya — SSCB kuruluş tarihi '30 Aralık 1922' birebir)",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1917-11-07", tur:"kurulus", b:"Ekim İhtilâli — Bolşevikler Petrograd'da iktidarı ele geçirdi (Jülyen takvimle 25 Ekim)" },
    { t:"1918-03-03", tur:"antlasma", b:"Brest-Litovsk Antlaşması ile Osmanlı dahil Merkezi Güçler'le savaştan çekildi" },
    { t:"1922-12-30", tur:"birlesme", b:"Rusya, Ukrayna, Beyaz Rusya ve Transkafkasya birleşerek SSCB'yi kurdu" }
  ]
},

{ id:"venedik", ad:"Venedik Cumhuriyeti", tur:"cumhuriyet", bolge:"italya",
  f:"697-01-01", t:"1797-05-12", baskent:"Venedik", harita:"venedik",
  ozet:"Ege ve Doğu Akdeniz'de deniz imparatorluğu kuran ticaret cumhuriyeti; Osmanlı ile yedi büyük savaş yaptı, Napolyon tarafından ilga edildi.",
  kaynak:"venedik",
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
  f:"1256-01-01", t:"1487-01-01", baskent:"Ermenek → Konya (1366-67) / Larende", harita:"karaman",
  ozet:"Selçuklu sonrası en güçlü Anadolu beyliği; Osmanlı'nın Anadolu birliğini kurmasının önündeki en inatçı engel. İlk yurdu Ermenek-Mut yöresiydi, Konya'yı ancak 1366-67'de aldı.",
  kaynak:"karamanogullari",
  kronoloji:[
    { t:"1256-01-01", tur:"kurulus", b:"Karaman Bey, Ermenek-Mut yöresinde faaliyete başladı (kardeşi Nûre Sûfî ile)" },
    { t:"1277-05-13", tur:"toprak-kazanc", b:"Mehmed Bey Konya'yı kısa süreliğine ele geçirip Türkçeyi resmî dil ilan etti" },
    { t:"1366-01-01", tur:"toprak-kazanc", b:"Konya'yı kalıcı olarak ele geçirip başkent yaptı (İlhanlı/Selçuklu mirası sonrası)" },
    { t:"1387-01-01", tur:"ittifak", b:"I. Murad'ın kızıyla evlilik ittifakı (sık sık bozuldu)" },
    { t:"1397-01-01", tur:"toprak-kayip", b:"Yıldırım Bayezid beyliği ilk kez ilhak etti" },
    { t:"1402-07-28", tur:"kurulus", b:"Ankara Savaşı sonrası Timur'un desteğiyle yeniden kuruldu" },
    { t:"1424-01-01", tur:"hukumdar", b:"İkinci İbrâhim Bey tahta çıktı, 40 yıllık istikrarlı ama Osmanlı'yla çatışmalı dönem başladı" },
    { t:"1468-01-01", tur:"toprak-kayip", b:"Fatih, Konya'yı aldı" },
    { t:"1471-01-01", tur:"isyan", b:"Kasım Bey, Akkoyunlu desteğiyle Konya'yı kısa süre geri aldı" },
    { t:"1487-01-01", tur:"son", b:"Son Karamanoğlu direnişleri bastırıldı" }
  ]
},
{ id:"germiyan", ad:"Germiyanoğulları", tur:"beylik", bolge:"anadolu",
  f:"1300-01-01", t:"1429-01-01", baskent:"Kütahya", harita:"germiyan",
  ozet:"Dönemin en güçlü Anadolu beyliklerinden (hanedan ömrü, iki dönem); Yâkub Bey ~1300'de bağımsızlığını kazandı, 1402'de kısa bir Osmanlı arasından sonra Timur tarafından diriltildi, 1428'de topraklarını II. Murad'a vasiyet etti, 1429'daki ölümüyle savaşsız Osmanlı'ya katıldı — künye dış zarfı verir.",
  kaynak:"germiyanogullari",
  kronoloji:[
    { t:"1300-01-01", tur:"kurulus", b:"Beylik kuruldu" },
    { t:"1381-01-01", tur:"toprak-kayip", b:"II. Yakub Bey, Kütahya-Simav-Eğrigöz-Tavşanlı'yı çeyiz olarak I. Murad'ın oğluna verdi" },
    { t:"1390-01-01", tur:"toprak-kayip", b:"Yıldırım Bayezid, geri kalan Germiyan topraklarını (Uşak, Alaşehir dahil) ilhak etti" },
    { t:"1402-07-28", tur:"kurulus", b:"Ankara Savaşı sonrası Timur'un desteğiyle yeniden kuruldu" },
    { t:"1429-01-01", tur:"son", b:"II. Yakub Bey'in vasiyetiyle beylik kesin olarak Osmanlı sancağına katıldı" }
  ]
},
{ id:"aydin", ad:"Aydınoğulları", tur:"beylik", bolge:"anadolu",
  f:"1308-01-01", t:"1425-06-01", baskent:"Birgi → İzmir (1329) / Tire, Ayasuluk", harita:"aydin",
  ozet:"Ege'de güçlü donanmaya sahip beylik (hanedan ömrü, iki dönem); Mehmed Bey'in 1308'de bölgeyi ele geçirmesiyle doğdu, 1415'te Çelebi Mehmed ilhak etti, Cüneyd Bey 1421'de İzmir'i ikinci kez ele geçirdi, 1425-26'da yakalanıp idam edilmesiyle Osmanlı'ya tam bağlandı — künye dış zarfı verir, kesinti Timur restorasyonu değil Cüneyd'in ikinci eliyle ilgilidir.",
  kaynak:"aydinogullari",
  kronoloji:[
    { t:"1308-01-01", tur:"kurulus", b:"Aydınoğlu Mehmed Bey tarafından Birgi merkezli kuruldu" },
    { t:"1329-01-01", tur:"toprak-kazanc", b:"Umur Bey İzmir'i ele geçirdi, beyliğin donanma üssü oldu" },
    { t:"1344-10-28", tur:"toprak-kayip", b:"Latin Haçlı donanması İzmir'i aldı" },
    { t:"1390-01-01", tur:"toprak-kayip", b:"Yıldırım Bayezid ilk kez ilhak etti" },
    { t:"1402-07-28", tur:"kurulus", b:"Timur sonrası kısa süreli yeniden kuruldu" },
    { t:"1425-01-01", tur:"son", b:"II. Murad tarafından kesin ilhak edildi" }
  ]
},
{ id:"saruhan", ad:"Saruhanoğulları", tur:"beylik", bolge:"anadolu",
  f:"1313-01-01", t:"1416-09-01", baskent:"Manisa", harita:"saruhan",
  ozet:"Manisa merkezli Ege beyliği (hanedan ömrü, iki dönem); 1390'da Yıldırım Bayezid ilhak etti, beylik 1402'de Timur tarafından diriltildi ve 1416'da Torlak Kemal'in idamıyla kesin olarak sona erdi. Künye dış zarfı verir — arada 12 yıllık Osmanlı dönemi vardır.",
  kaynak:"saruhanogullari",
  kronoloji:[
    { t:"1313-01-01", tur:"kurulus", b:"Saruhan Bey tarafından kuruldu" },
    { t:"1385-01-01", tur:"hukumdar", b:"İshak Bey tahta çıktı, Manisa'da imar faaliyetleriyle beyliğin altın çağını yaşattı" },
    { t:"1390-01-01", tur:"toprak-kayip", b:"Yıldırım Bayezid tarafından ilhak edildi" },
    { t:"1402-07-28", tur:"kurulus", b:"Timur sonrası kısa süreli yeniden kuruldu" },
    { t:"1410-01-01", tur:"son", b:"Timur sonrası kısa dirilişten sonra kesin ilhak" }
  ]
},
{ id:"mentese", ad:"Menteşeoğulları", tur:"beylik", bolge:"anadolu",
  f:"1280-01-01", t:"1424-01-01", baskent:"Milas / Beçin", harita:"mentese",
  ozet:"Güney Ege'de kurulan deniz beyliği (hanedan ömrü); 1389-91'de Yıldırım Bayezid'e katıldı, Ankara Savaşı sonrası kısa süre geri alındı, 1424'te kesin zaptedildi.",
  kaynak:"mentese",
  kronoloji:[
    { t:"1280-01-01", tur:"kurulus", b:"Menteşe Bey tarafından kuruldu" },
    { t:"1390-01-01", tur:"toprak-kayip", b:"Yıldırım Bayezid tarafından ilhak edildi" },
    { t:"1402-07-28", tur:"kurulus", b:"Timur sonrası yeniden kuruldu" },
    { t:"1424-01-01", tur:"son", b:"II. Murad tarafından kesin ilhak edildi" }
  ]
},
{ id:"hamid", ad:"Hamîdoğulları", tur:"beylik", bolge:"anadolu",
  f:"1297-01-01", t:"1391-01-01", baskent:"Uluborlu (ilk merkez) → Eğirdir / Isparta", harita:"hamid",
  ozet:"Göller bölgesinde kurulmuş beylik (hanedan ömrü); 1297'de Hamîd Bey'in Uluborlu'yu merkez yapmasıyla doğdu; 1381-82'de bazı şehirler 80.000 altına satıldı, kalanı 1391'de ilhak edildi.",
  kaynak:"hamidogullari",
  kronoloji:[
    { t:"1297-01-01", tur:"kurulus", b:"Feleküddin Dündar Bey tarafından Uluborlu merkezli kuruldu" },
    { t:"1321-01-01", tur:"bolunme", b:"Antalya kolu ayrılıp Tekeoğulları beyliğini kurdu (bkz. [[teke]])" },
    { t:"1381-01-01", tur:"toprak-kayip", b:"Akşehir-Beyşehir kesimi I. Murad'a satıldı" },
    { t:"1391-01-01", tur:"son", b:"Yıldırım Bayezid geri kalanını ilhak etti" }
  ]
},
{ id:"candar", ad:"Candaroğulları (İsfendiyaroğulları)", tur:"beylik", bolge:"anadolu",
  f:"1309-01-01", t:"1461-01-01", baskent:"Eflani (ilk merkez) → Kastamonu / Sinop", harita:"candar",
  ozet:"Karadeniz kıyısında en son ayakta kalan Anadolu beyliği (hanedan ömrü); TDV'ye göre erken XIV. yüzyılda (1309) Şemseddin Yaman Candar tarafından kuruldu, 1461'de Fâtih'in Mora karşılığı teklifiyle fiilen sona erdi.",
  kaynak:"candarogullari",
  kronoloji:[
    { t:"1291-01-01", tur:"kurulus", b:"Şemseddin Yaman Candar'a İlhanlı hükümdarı Geyhatu tarafından Eflani iktâ edildi" },
    { t:"1309-01-01", tur:"toprak-kazanc", b:"Süleyman Bey, Çobanoğulları'nı yenerek Kastamonu-Çankırı'ya hâkim oldu" },
    { t:"1385-01-01", tur:"hukumdar", b:"İsfendiyar Bey tahta çıktı (hanedan bundan sonra İsfendiyaroğulları olarak da anılır)" },
    { t:"1440-01-01", tur:"bolunme", b:"İsfendiyar Bey'in ölümüyle beylik Kastamonu ve Sinop kolları arasında bölündü" },
    { t:"1461-01-01", tur:"son", b:"Fatih, Sinop ve Kastamonu'yu ilhak etti" }
  ]
},
{ id:"dulkadir", ad:"Dulkadiroğulları", tur:"beylik", bolge:"anadolu",
  f:"1337-01-01", t:"1522-01-01", baskent:"Elbistan / Maraş", harita:"dulkadir",
  tabi:[{f:"1515-06-13", t:"1522-01-01", ust:"osmanli"}],
  ozet:"Osmanlı-Memlûk arasında tampon beylik; Yavuz döneminde kesin ilhak edildi. tabi: başlangıcı Turnadağ Zaferi'nin (Osmanlı'ya tâbi oluşun) kendi günü — A5'in kendi işaretlediği gibi keyfî bir sınır, bitiş de yer tutucu (bkz. ARABISTAN-DUZELTMELER.md §AJ.2/§AJ.4, en zayıf satır).",
  kaynak:"dulkadirogullari",
  kronoloji:[
    { t:"1337-01-01", tur:"kurulus", b:"Zeyneddin Karaca Bey tarafından kuruldu" },
    { t:"1479-01-01", tur:"hukumdar", b:"Alâüddevle Bozkurt Bey tahta çıktı, Memlûk-Osmanlı arasında dengeleyici siyaset izledi" },
    { t:"1507-01-01", tur:"savas", b:"Şah İsmâil'in Safevî ordusu Elbistan'ı yağmaladı" },
    { t:"1515-06-12", tur:"savas", b:"Turnadağ Savaşı'nda Yavuz'a yenildi" },
    { t:"1522-01-01", tur:"son", b:"Kanunî tarafından kesin ilhak edildi" }
  ]
},
{ id:"ramazanoglu", ad:"Ramazanoğulları", tur:"beylik", bolge:"anadolu",
  f:"1352-01-01", t:"1608-01-01", baskent:"Adana", harita:"ramazanoglu",
  ozet:"Çukurova'da Memlûk tâbiliğinde kurulan beylik (hanedan ömrü); 1352'de Ramazan Bey'in atanmasıyla doğdu, Osmanlı vasalı olarak sürdü, TDV'nin aktardığı bir rivayete göre 1608'de Pîr Mansûr'un beyliği bırakmasıyla sona erdi.",
  kaynak:"ramazanogullari",
  kronoloji:[
    { t:"1352-01-01", tur:"kurulus", b:"Ramazan Bey tarafından Memlûk tâbiliğinde kuruldu" },
    { t:"1517-01-22", tur:"antlasma", b:"Yavuz'un Mısır seferi sonrası Osmanlı tâbiliğine geçti" },
    { t:"1608-01-01", tur:"son", b:"Doğrudan Osmanlı eyaletine dönüştürüldü" }
  ]
},
{ id:"karesi", ad:"Karesioğulları", tur:"beylik", bolge:"anadolu",
  f:"1297-01-01", t:"1345-01-01", baskent:"Balıkesir (Erdek, Biga, Edremit, Bergama'ya kadar hâkim)", harita:"karesi",
  ozet:"İlk Türk deniz beyliklerinden (hanedan ömrü); muhtemelen 1296-97'de kuruldu, 1345 civarında Orhan Bey'in eline geçerek Osmanlı'nın ilhak ettiği ilk beylik oldu.",
  kaynak:"karesiogullari",
  kronoloji:[
    { t:"1297-01-01", tur:"kurulus", b:"Karesi Bey tarafından kuruldu" },
    { t:"1330-01-01", tur:"hukumdar", b:"Demirhan Bey tahta çıktı" },
    { t:"1336-01-01", tur:"toprak-kayip", b:"Yahşi Bey, Orhan Gazi'nin safına geçerek beyliğin doğu kesimini Osmanlı'ya bıraktı" },
    { t:"1345-01-01", tur:"son", b:"Orhan Bey tarafından ilhak edildi — Osmanlı'nın ilk beylik ilhakı" }
  ]
},

// ================= TIER 2b — DOĞU ANADOLU / İRAN SINIRI DEVLETLERİ =================

{ id:"akkoyunlu", ad:"Akkoyunlu Devleti", tur:"devlet", bolge:"iran",
  f:"1340-01-01", t:"1514-01-01", baskent:"Diyarbekir → Tebriz", harita:"akkoyunlu",
  ozet:"Uzun Hasan döneminde Fatih'e meydan okuyan Türkmen devleti; Tebriz'i Safevîlere kaybettikten sonra Diyarbekir'de bir hanedan kalıntısı olarak sürdü, 1514'te Murad'ın ölümüyle tükendi.",
  kaynak:"akkoyunlular",
  kronoloji:[
    { t:"1340-01-01", tur:"kurulus", b:"Tur Ali Bey tarafından Diyarbekir bölgesinde kuruldu" },
    { t:"1378-01-01", tur:"hukumdar", b:"Kara Yülük Osman Bey (Tur Ali Bey'in soyundan) tahta çıktı, devleti bölgesel güç hâline getirdi" },
    { t:"1453-01-01", tur:"hukumdar", b:"Uzun Hasan Akkoyunlu tahtına çıktı" },
    { t:"1458-01-01", tur:"ittifak", b:"Trabzon Rum İmparatoru'nun kızıyla evlenerek Trabzon ile ittifak kurdu" },
    { t:"1464-01-01", tur:"ittifak", b:"Venedik ile Osmanlı'ya karşı ittifak kurdu" },
    { t:"1467-01-01", tur:"toprak-kazanc", b:"Karakoyunlu Devleti'ni yıktı" },
    { t:"1473-08-11", tur:"savas", b:"Otlukbeli'de Fatih'e yenildi" },
    { t:"1478-01-06", tur:"hukumdar", b:"Uzun Hasan öldü" },
    { t:"1481-01-01", tur:"antlasma", b:"Yakub Bey, Hasan Padişah Kanunnâmesi ile idareyi yeniden düzenledi" },
    { t:"1501-01-01", tur:"toprak-kayip", b:"Şah İsmâil (Safevî) Tebriz'i alarak hânedanın merkezî iktidarına son verdi; Elvend Diyarbekir'de hüküm sürmeyi sürdürdü" },
    { t:"1505-01-01", tur:"hukumdar", b:"Elvend Âmid'de (Diyarbekir) öldü" },
    { t:"1514-01-01", tur:"son", b:"Murad'ın ölümüyle hânedan tamamen sona erdi" }
  ]
},
{ id:"celayirli", ad:"Celâyirliler", tur:"devlet", bolge:"iran",
  f:"1340-01-01", t:"1431-01-01", baskent:"Bağdat → Tebriz", harita:"celayirli",
  ozet:"İlhanlı çöküşünün ardından Irak ve batı İran'da kurulan Moğol asıllı hânedan; Bağdat'ı 1410'da Karakoyunlu Kara Yûsuf'a kaptırdıktan sonra Basra-Hille hattında sürünerek 1431'de tasfiye edildi. (kaynak: TDV, madde: celayirliler)",
  kaynak:"celayirliler",
  kronoloji:[
    { t:"1340-01-01", tur:"kurulus", b:"Hasan-ı Büzürg, İlhanlı otoritesinin dağılması üzerine Bağdat'ta bağımsızlığını ilan etti" },
    { t:"1382-01-01", tur:"hukumdar", b:"Sultan Ahmed tahta çıktı; saltanatı Timur baskısı altında geçti" },
    { t:"1393-01-01", tur:"toprak-kayip", b:"Timur Bağdat'ı aldı, Sultan Ahmed Memlûk topraklarına kaçtı" },
    { t:"1405-01-01", tur:"toprak-kazanc", b:"Timur'un ölümünden sonra Sultan Ahmed Bağdat'ı geri aldı" },
    { t:"1410-01-01", tur:"toprak-kayip", b:"Karakoyunlu Kara Yûsuf, Sultan Ahmed'i yenip Bağdat'ı ele geçirdi" },
    { t:"1431-01-01", tur:"son", b:"Karakoyunlu Şah Muhammed son Celâyirli hükümdarını ortadan kaldırdı" }
  ]
},

{ id:"karakoyunlu", ad:"Karakoyunlu Devleti", tur:"devlet", bolge:"iran",
  f:"1351-01-01", t:"1469-01-01", baskent:"Van-Erciş → Tebriz", harita:"karakoyunlu",
  ozet:"Türkmen devleti (hanedan ömrü); Bayram Hoca'nın 1351'de Sutaylar hükümdarını öldürüp bağımsızlığını kazanmasıyla doğdu, tarihî düşmanı Akkoyunlu'ya (Uzun Hasan) yenilerek 1469'da son hükümdar Hasan Ali'nin öldürülmesiyle sona erdi.",
  kaynak:"karakoyunlular",
  kronoloji:[
    { t:"1351-01-01", tur:"kurulus", b:"Bayram Hoca tarafından Van-Erciş bölgesinde kuruldu" },
    { t:"1380-01-01", tur:"hukumdar", b:"Kara Mehmed tahta çıktı, Tebriz'i alarak devleti güçlendirdi" },
    { t:"1400-01-01", tur:"antlasma", b:"Timur'a yenilip tâbi oldu" },
    { t:"1406-01-01", tur:"toprak-kazanc", b:"Kara Yûsuf, Celâyirlileri yenip Tebriz'i ele geçirdi" },
    { t:"1410-01-01", tur:"savas", b:"Celâyirli Devleti'ni yıkıp Bağdat'ı aldı" },
    { t:"1420-01-01", tur:"hukumdar", b:"Kara Yûsuf'un ölümüyle oğulları arasında taht kavgaları başladı" },
    { t:"1438-01-01", tur:"hukumdar", b:"Cihanşah tahta çıktı, devletin en geniş sınırlarına ulaştığı dönem başladı" },
    { t:"1447-01-01", tur:"antlasma", b:"Şâhruh'un ölümüyle Timurlu tâbiliğinden fiilen kurtuldu" },
    { t:"1458-01-01", tur:"toprak-kazanc", b:"Timurlu iç kargaşasından yararlanıp Herat'ı kısa süreliğine aldı" },
    { t:"1469-01-01", tur:"son", b:"Akkoyunlu'ya yenilerek yıkıldı" }
  ]
},

// --- VERİ DEVLET (7 Ağustos 2026) — İlhanlı sonrası İran'ın küçük atabeglik/
// hanedan kalemleri. Beşi de Değişmez 1'in "iran" genel etiketi altında
// ezilen 1335-1501 penceresinin adaylarıdır; hangi noktanın hangisine
// verileceğine BU OTURUM KARAR VERMEDİ (koordinatörün işi) — yalnız künye
// hazırlandı. Lür-i Büzürg/Küçek tarihleri TDV `luristan` maddesinde birebir
// yazılı (1155-1424 / 1184-1597); Muzafferî ve Kutluğhanlı TDV'de tarihli
// (`muzafferiler`, `kutlughanlilar`); İncû'nun TDV maddesi (`incu`) tarihsiz,
// tarihler standart akademik kaynağa (Spuler, Encyclopaedia Iranica) göredir.
{ id:"lur-i-buzurg", ad:"Lür-i Büzürg Atabegliği (Hazaraspîler)", tur:"devlet", bolge:"iran",
  f:"1155-01-01", t:"1424-01-01", baskent:"İzeh (Mâlemîr)",
  ozet:"Güneydoğu Lüristan'da, Hûzistan sınırında hüküm süren Hazarasp hanedanı atabegliği; TDV `luristan` maddesi yalnız tek parantez cümlesiyle geçiyor (hükümdar adı yok) — bu TANECİKLİK boşluğu için Encyclopaedia Iranica (Bertold Spuler, 'ATĀBAKĀN-E LORESTĀN') kullanıldı. ⚠️ Hûzistan'ın 1335-1393 arası bu atabegliğe mi yoksa Lür-i Küçek'e mi bağlı olduğu TDV `huzistan` maddesinde KESİN değil — bkz. VERI-DEVLET-GOREV.md ilerleme notu. TDV'nin 'Safevîler dönemine kadar sürdüler' cümlesi Lür-i Büzürg VE Lür-i Küçek'i BİRLİKTE kastediyor (yalnız Lür-i Küçek 1597'ye kadar sürdü); Iranica bu ayrımı doğruluyor, çelişki YOK.",
  kaynak:"luristan (TDV) + Encyclopaedia Iranica, madde: ATĀBAKĀN-E LORESTĀN (Spuler)",
  kronoloji:[
    { t:"1155-01-01", tur:"kurulus", b:"Hazarasp hanedanı atabegliği kurdu (TDV tarihi; kurucunun adı ve kuruluş koşulları maddede ayrıntılı değil)" },
    { t:"1203-01-01", tur:"hukumdar", b:"Ebû Tâhir'in oğlu Melik Hazarasp tahta geçti (600 AH); hanedan bundan böyle onun adıyla 'Hazaraspîler' diye anıldı (Encyclopaedia Iranica)" },
    { t:"1296-10-26", tur:"hukumdar", b:"Afrasiyab I, İlhanlı zayıflığından yararlanıp genişlemeye çalıştı; İlhanlı kuvvetleri onu Kâşân yakınında yendi, önce affedildi ama sonra Gazan Han'ın emriyle idam edildi (28 Zilhicce 695, Encyclopaedia Iranica)" },
    { t:"1393-01-01", tur:"vassal", b:"Muzafferîlerce tahttan indirilen Melik Pîr Ahmed, Timur'un yardımıyla tahtına geri döndü (795 AH, Encyclopaedia Iranica)" },
    { t:"1395-01-01", tur:"bolunme", b:"Pîr Ahmed ve iki kardeşi Timur tarafından zorla Semerkand'a götürüldü, Timur toprağı Pîr Ahmed ile kardeşi Afrasiyab III arasında böldü (798 AH, Encyclopaedia Iranica)" },
    { t:"1424-01-01", tur:"son", b:"Atabeglik sona erdi (TDV tarihi; sonun koşulları maddede ayrıntılı değil)" }
  ]
},
{ id:"lur-i-kucek", ad:"Lür-i Küçek Atabegliği", tur:"devlet", bolge:"iran",
  f:"1184-01-01", t:"1597-01-01", baskent:"— (TDV'de belirtilmemiş)",
  ozet:"Lüristan'ın kuzey ve batısında, Lür-i Büzürg'den ayrı bir hanedanca yönetilen atabeglik; TDV `luristan` maddesinde yalnız kuruluş/bitiş tarihleriyle geçer, hanedan adı ve iç kronoloji maddede ayrıntılı değil. Safevî döneminin ortasına (1597) kadar sürmesi, iki atabegliğin ömürlerinin BİRBİRİNDEN 173 YIL FARKLI olduğunu gösterir — karıştırılmamalı. (kaynak: TDV, madde: luristan)",
  kaynak:"luristan",
  kronoloji:[
    { t:"1184-01-01", tur:"kurulus", b:"Atabeglik kuruldu (TDV tarihi; kurucunun adı maddede ayrıntılı değil)" },
    { t:"1597-01-01", tur:"son", b:"Atabeglik sona erdi (TDV tarihi; sonun koşulları maddede ayrıntılı değil — I. Abbas'ın merkezîleştirme dönemine denk gelir)" }
  ]
},
{ id:"serbedariler", ad:"Serbedârîler", tur:"hanedanlik", bolge:"iran",
  f:"1337-09-09", t:"1386-01-01", baskent:"Sebzevâr",
  ozet:"İlhanlı çözülüşünün ardından Horasan'ın Beyhak bölgesinde kurulan Şiî hânedan; Sebzevâr merkezli, dervişî-mehdici bir hareketten doğdu ve Timur'un Horasan seferiyle son buldu.",
  kaynak:"serbedariler",
  kronoloji:[
    { t:"1337-01-01", tur:"kurulus", b:"Beyhak'ta Serbedârî hareketi iktidara geldi; Sebzevâr merkez oldu" },
    { t:"1381-01-01", tur:"kayip", b:"Timur Horasan'a girdi, Serbedârî toprakları elden çıkmaya başladı" },
    { t:"1386-01-01", tur:"son", b:"Hânedan tamamen ortadan kalktı" }
  ]
},
{ id:"kert", ad:"Kertler (Herat)", tur:"hanedanlik", bolge:"iran",
  f:"1245-01-01", t:"1389-01-01", baskent:"Herat",
  ozet:"İlhanlı tâbiiyetinde Herat merkezli hüküm süren, Gûr kökenli hânedan; Horasan'ın doğusu ile Sîstan'ı elinde tuttu ve Timur tarafından ortadan kaldırıldı. TDV maddesi hânedanı 'XIII ve XIV. yüzyıllarda Herat'ta hüküm süren bir hânedan' diye tanımlıyor; yıl SINIRLARI maddede açıkça verilmediği için standart akademik kaynaktan alındı.",
  kaynak:"kert",
  kronoloji:[
    { t:"1245-01-01", tur:"kurulus", b:"Şemseddin Muhammed Kert Herat'ta hâkimiyet kurdu" },
    { t:"1381-01-01", tur:"kayip", b:"Timur Herat'ı aldı, Kert hâkimiyeti fiilen sona erdi" },
    { t:"1389-01-01", tur:"son", b:"Hânedan mensupları ortadan kaldırıldı" }
  ]
},
{ id:"muzafferi", ad:"Muzafferî Hanedanı", tur:"devlet", bolge:"iran",
  f:"1318-01-01", t:"1393-01-01", baskent:"Şiraz",
  ozet:"İlhanlı Sultanı Ebû Saîd'in 718'de (1318) Mübârizüddin Muhammed'e Yezd emirliğini vermesiyle doğan, Yezd-Kirman-Fars-İsfahan'a (zaman zaman Azerbaycan'a) hâkim olan hanedan; Timur'un ordusuyla yapılan çatışmada Şah Mansûr'un öldürülmesiyle 795'te (1393) bütün hanedan tasfiye edildi. (kaynak: TDV, madde: muzafferiler)",
  kaynak:"muzafferiler",
  kronoloji:[
    { t:"1318-01-01", tur:"kurulus", b:"Sultan Ebû Saîd, Yezd emirliğini Mübârizüddin Muhammed'e verdi (718)" },
    { t:"1357-01-01", tur:"toprak-kazanc", b:"Mübârizüddin, İncûlu Ebû İshak'ı İsfahan'da öldürterek bu hânedanı ortadan kaldırdı, Fars ve Irâk-ı Acem'in büyük kısmına hâkim oldu (758)" },
    { t:"1358-01-01", tur:"isyan", b:"Mübârizüddin, kendi oğlu Şah Şücâ‘ tarafından tahttan indirilip gözlerine mil çektirildi (759)" },
    { t:"1387-01-01", tur:"isgal", b:"Timur İsfahan'ı ele geçirip yaklaşık 200.000 kişiyi kılıçtan geçirdi; hanedan onun tâbiiyetine girdi (789)" },
    { t:"1393-01-01", tur:"son", b:"Timur'un kuvvetleri Şah Mansûr'u yenip öldürdü; hânedanın tamamı tasfiye edildi (795)" }
  ]
},
{ id:"incu", ad:"İncû Hanedanı", tur:"devlet", bolge:"iran",
  f:"1325-01-01", t:"1357-01-01", baskent:"Şiraz",
  ozet:"İlhanlı çöküşü sonrası Fars bölgesini yöneten, adını kurucusunun bir 'incû' (hükümdar hassa arazileri memuru) olmasından alan hanedan; Muzafferî Mübârizüddin Muhammed'in Şiraz'ı almasıyla sona erdi. TDV `incu` maddesi hanedanı tanımlar ama tarih vermez; f/t standart akademik kaynağa (Spuler, Encyclopaedia Iranica) göredir, kesinlik TDV'li kalemlerden düşüktür. (kaynak: TDV madde: incu — tarihsiz; tarihler standart akademik kaynak)",
  kaynak:"incu",
  kronoloji:[
    { t:"1325-01-01", tur:"kurulus", b:"Şerefeddin Mahmud Şah İncû, Fars'ta fiilî hâkimiyetini kurdu" },
    { t:"1357-01-01", tur:"son", b:"Muzafferî Mübârizüddin Muhammed Şiraz'ı alıp son İncû hükümdarı Ebû İshak'ı ortadan kaldırdı (bkz. [[muzafferi]])" }
  ]
},
{ id:"kutlughanli", ad:"Kutluğhanlılar", tur:"devlet", bolge:"iran",
  f:"1222-01-01", t:"1306-01-01", baskent:"Kirman",
  ozet:"Barak Hâcib'in 1222'de Kirman'da kurduğu, Kirman-Nermeşîr-Sîstan'a hâkim olan hanedan; II. Kutbüddin b. Soyurgatmış'ın görevden alınmasıyla 1306'da Kirman tahtı hanedanın elinden çıktı. Hanedanın bir kızı Muzafferî hanedanının kurucusuyla evlenmiştir (bkz. [[muzafferi]]). (kaynak: TDV, madde: kutlughanlilar)",
  kaynak:"kirman",
  kronoloji:[
    { t:"1222-01-01", tur:"kurulus", b:"Barak Hâcib, Kutluğ Han unvanıyla Kirman'a hâkim oldu" },
    { t:"1306-01-01", tur:"son", b:"II. Kutbüddin b. Soyurgatmış görevden alındı; hanedan bir daha Kirman tahtına geçemedi" }
  ]
},

// --- VERİ DEVLET 2 (10 Ağustos 2026) — Hazar kıyısı yerel hanedanları.
// `iran` hayaletinin künye-tarafı ölçümünde (66 dönem, f:1335-12-01) bu ikisi
// için GERÇEKTEN künye yoktu (kalanı zaten var olan künyelere bağlanmamış
// veriydi — bkz. VERI-DEVLET-2-ILERLEME.md). İkisi de Safevî'nin bölgeyi
// FİİLEN alışıyla biter (Gilân 1592, Mâzenderan 1596) — `safevi` künyesi
// buraya UYMAZ, çünkü Safevî 1501'den beri var ama bu bölgeler yerel
// hanedanların elindeydi. ⚠️ İKİSİ DE 1335-12-01'den SONRA kuruldu ⇒
// veri tarafında `ilhanli` KÖPRÜSÜ gerekiyor (koordinatörle kararlaştırıldı,
// Horasan/toga-timur ile aynı mantık): Gilân için 1335-12-01→1371-01-01,
// Mâzenderan için 1335-12-01→1359-01-01 arası `d:"ilhanli"` kalacak.
{ id:"gilan-kiya", ad:"Kârkiyâ Hânedanı (Gilân)", tur:"hanedanlik", bolge:"iran",
  f:"1371-01-01", t:"1592-01-01", baskent:"Lâhîcân",
  ozet:"Doğu Gilân'da (Biyepîş) Zeydî bir seyyid ailesinin kurduğu yerel hanedan; TDV `gilan` maddesi kuruluşu 'İlhanlı Hükümdarı Olcaytu'nun 1306-07'deki başarısız ilhak girişiminden sonra' diye tarihsiz anlatıyor, kesin yıl (773/1371-72, Emîr Kiyâ'nın oğlu Ali Kiyâ'nın bölgeye dönüp hâkimiyeti tesis etmesi) Encyclopaedia Iranica'nın `KĀR KIĀ` maddesinden alındı. Safevî Şahı I. Abbas'ın 1592'de bölgeyi doğrudan hâkimiyetine almasıyla sona erdi (TDV `gilan` maddesiyle BİREBİR tarihli). ⚠️ f:1371, İlhanlı'nın çöküşünden (1335) 36 yıl SONRAdır — bu aralıkta veride `ilhanli` köprüsü kullanılacak (künye tarafında ek işlem gerekmiyor).",
  kaynak:"gilan (TDV, bitiş tarihi) + Encyclopaedia Iranica, madde: KĀR KIĀ (kuruluş tarihi, 773/1371-72)",
  kronoloji:[
    { t:"1371-01-01", tur:"kurulus", b:"Ali Kiyâ, babası Emîr Kiyâ'nın ailesiyle Doğu Gilân'a dönüp hâkimiyeti tesis etti (773 AH, tam gün yok)" },
    { t:"1501-01-01", tur:"vassal", b:"Safevî hâkimiyeti kuruldu, Kârkiyâ'lar yerel/nominal beylik olarak sürdü" },
    { t:"1592-01-01", tur:"son", b:"Şah I. Abbas bölgeyi doğrudan hâkimiyeti altına aldı, hanedan sona erdi" }
  ]
},
{ id:"mazenderan-marasi", ad:"Mar'aşî Seyyidleri (Mâzenderan)", tur:"hanedanlik", bolge:"iran",
  f:"1359-01-01", t:"1596-01-01", baskent:"Âmül → Sârî",
  ozet:"Aslen Maraşlı bir seyyid ailesinin Mâzenderan'da kurduğu Şiî hanedan; kurucusu Seyyid Kıvâmüddin ('Mîr-i Büzürg'), yerel hâkim Kiyâ Efrâsiyâb'ı yenip 760'ta (1359) Âmül'ü ele geçirerek hâkimiyetini tesis etti (TDV `marasiler` maddesi, NET tarih). Timur'a 1392'de teslim oldu, sonra Şâhruh izniyle geri döndüyse de eski gücüne ulaşamadı; XVI. yüzyıl başında Safevî'ye bağlı yerel hâkimler olarak sürdü. ⚠️ TDV bitişi YIL VERMEDEN 'Şah I. Abbas zamanında (1587-1629) çeşitli yerlere dağıtıldılar' diyor — kesin son yıl TDV'de BULUNAMADI. Veride kullanılan 1596, TDV dışı ikincil kaynaklarca (Encyclopaedia Iranica'ya atıfla) doğrulanıyor ama doğrudan Iranica madde metnine erişilemedi (403); bu satır o ölçüde emin.",
  kaynak:"marasiler (TDV, kuruluş NET) + bitiş tarihi (1596) TDV'de yok, dolaylı doğrulama: Encyclopaedia Iranica'ya atıf yapan ikincil kaynaklar (Iranica madde metnine erişilemedi)",
  kronoloji:[
    { t:"1359-01-01", tur:"kurulus", b:"Seyyid Kıvâmüddin, Kiyâ Efrâsiyâb'ı yenip Âmül'ü ele geçirdi (760 AH, tam gün yok)" },
    { t:"1392-10-26", tur:"vassal", b:"Timur'a Mâhâneser Kalesi'nde teslim oldu (8 Zilhicce 794)" },
    { t:"1596-01-01", tur:"son", b:"Şah I. Abbas döneminde hanedan mensupları dağıtıldı, siyasî varlığı sona erdi (TDV yıl vermiyor, tarih ikincil kaynaktan)" }
  ]
},

// ===================== TIER 3 — AVRUPA'NIN ORTA ÖLÇEK DEVLETLERİ =====================

{ id:"macaristan", ad:"Macaristan Krallığı (bağımsız dönem)", tur:"krallik", bolge:"orta-avrupa",
  f:"1000-01-01", t:"1526-08-29", baskent:"Buda", harita:"macaristan",
  ozet:"Bağımsız Macar krallığı (hanedan ömrü, Árpádlardan başlayıp çeşitli hanedanlarla sürdü); Mohaç bozgunuyla (29 Ağustos 1526) bağımsızlığını kaybetti, toprakları Osmanlı, Habsburg ve Erdel arasında bölündü.",
  kaynak:"macaristan",
  kronoloji:[
    { t:"1000-01-01", tur:"kurulus", b:"I. István (İstván), Roma'dan taç giyerek Hıristiyan krallığı kurdu" },
    { t:"1301-01-14", tur:"bolunme", b:"III. András'ın ölümüyle Árpád hanedanı sona erdi, seçimli krallık dönemi başladı" },
    { t:"1308-06-15", tur:"hukumdar", b:"Anjou Károly (Charles Robert) tahta çıktı" },
    { t:"1387-03-31", tur:"hukumdar", b:"Luxemburglu Zsigmond (Sigismund) tahta çıktı" },
    { t:"1396-09-25", tur:"savas", b:"Niğbolu Haçlı Seferi'ne öncülük etti" },
    { t:"1443-11-01", tur:"savas", b:"Hunyadi'nin Osmanlı'ya yenilgisi — İzladi" },
    { t:"1456-07-22", tur:"savas", b:"Belgrad'ı savunarak II. Mehmed'i geri püskürttü" },
    { t:"1458-01-24", tur:"hukumdar", b:"Hunyadi Mátyás (Corvinus) tahta çıktı, altın çağ başladı" },
    { t:"1490-04-06", tur:"hukumdar", b:"Mátyás'ın ölümüyle Jagiellon hanedanı tahta geçti, merkezi otorite zayıfladı" },
    { t:"1514-07-15", tur:"isyan", b:"Dózsa György köylü isyanı bastırıldı, feodal baskı ve askerî zaaf arttı" },
    { t:"1521-08-29", tur:"toprak-kayip", b:"Kanunî, Belgrad'ı fethetti — güney savunma hattı çöktü" },
    { t:"1526-08-29", tur:"son", b:"Mohaç'ta II. Layoş öldü, krallık bağımsızlığını kaybetti" }
  ]
},
{ id:"macaristan-habsburg", ad:"Macaristan Krallığı (Habsburg Tacı)", tur:"krallik", bolge:"orta-avrupa",
  f:"1526-08-29", t:"1918-11-16", baskent:"Pozsony (Bratislava) → Buda",
  ozet:"Mohaç sonrası Habsburg hanedanının seçilmiş/kalıtsal kralı olarak sürdürdüğü, üç parçaya bölünmüş dönemin (bkz. [[erdel]]) Kraliyet Macaristanı; Osmanlı'nın 1699'da kesin çekilişinden sonra tüm ülkeyi kapsayacak şekilde genişledi, 1867'de Avusturya-Macaristan ikili monarşisinin eşit ortağı oldu. Devam: bkz. [[macaristan-naiplik]].",
  harita:"macaristan",
  kaynak:"macaristan",
  kronoloji:[
    { t:"1526-12-17", tur:"hukumdar", b:"I. Ferdinand, Habsburg hanedanından ilk Macar kralı olarak seçildi (rakip kral Szapolyai János ile çekişme sürdü)" },
    { t:"1541-08-29", tur:"bolunme", b:"Budin'in Osmanlı'ya düşmesiyle ülke üçe bölündü: Kraliyet Macaristanı, Osmanlı Budin Eyaleti, Erdel Prensliği" },
    { t:"1686-09-02", tur:"toprak-kazanc", b:"Kutsal İttifak ordusu Budin'i geri aldı" },
    { t:"1699-01-26", tur:"antlasma", b:"Karlofça Antlaşması ile Osmanlı, Macaristan'dan (Temeşvar hariç) kesin olarak çekildi" },
    { t:"1848-03-15", tur:"isyan", b:"1848 Macar Devrimi başladı (1849'da Rus yardımıyla bastırıldı)" },
    { t:"1867-02-08", tur:"antlasma", b:"Ausgleich (Uzlaşma) ile Avusturya-Macaristan ikili monarşisi kuruldu, Macaristan eşit ortak oldu" },
    { t:"1918-11-16", tur:"son", b:"I. Dünya Savaşı sonrası cumhuriyet ilan edildi (bkz. [[macaristan-naiplik]])" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — DALGA 1: `lehistan` harita kimliği künyenin
// ömrünün (1569-1795) ÖNCESİNDE de (1281-1569, 30 kayıt) kullanılıyordu.
// Birlik-öncesi iki devlet AYRI künyeyle temsil edildi (Polonya Krallığı,
// Litvanya Büyük Dükalığı) — hangi noktanın hangisine ait olduğu (coğrafi
// ayrım) KOORDİNATÖRÜN işi, bu oturum yalnız künyeleri hazırladı.
{ id:"polonya-erken", ad:"Polonya Krallığı (Birlik Öncesi)", tur:"krallik", bolge:"dogu-avrupa",
  f:"1320-01-20", t:"1569-07-01", baskent:"Krakov",
  ozet:"IV. Ladislav Lokietek'in taç giymesiyle fetret döneminin sona erip krallığın yeniden birleştiği dönem; devletleşme kökleri X. yüzyıla (963) uzanır. Litvanya Büyük Dükalığı ile 1386'da kişisel birlik, 1569'da Lublin Birliği ile tam birleşme (bkz. [[litvanya-buyuk-dukalik]], [[lehistan]]). (kaynak: TDV, madde: polonya)",
  kaynak:"polonya",
  kronoloji:[
    { t:"1320-01-20", tur:"kurulus", b:"IV. Ladislav Lokietek Krakov'da taç giyerek fetret dönemini sona erdirdi" },
    { t:"1386-01-01", tur:"ittifak", b:"Litvanya Büyük Dükü Jogaila ile Kraliçe Jadwiga'nın evliliğiyle kişisel birlik kuruldu" },
    { t:"1569-07-01", tur:"son", b:"Lublin Birliği ile Litvanya'yla tam birleşerek Lehistan-Litvanya Birliği'ni oluşturdu" }
  ]
},
{ id:"litvanya-buyuk-dukalik", ad:"Litvanya Büyük Dükalığı", tur:"dukalik", bolge:"dogu-avrupa",
  f:"1253-07-06", t:"1569-07-01", baskent:"Vilnius",
  ozet:"Mindaugas'ın taç giyerek Litvanya'yı Katolik bir krallık ilan ettiği (tek örnek — sonraki hükümdarlar dük unvanını kullandı) devlet; Gediminas hanedanı döneminde büyük güce dönüştü, Polonya ile 1386 kişisel birliği 1569'da tam birleşmeye evrildi (bkz. [[polonya-erken]], [[lehistan]]). TDV'de Litvanya Büyük Dükalığı'nın kendi maddesi yok (yalnız `LİPKALAR` — Litvanya Tatarları — maddesi var); tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1253-07-06", tur:"kurulus", b:"Mindaugas taç giyerek Litvanya'yı Katolik krallık ilan etti" },
    { t:"1316-01-01", tur:"hukumdar", b:"Gediminas tahta çıktı, hanedanı ve devleti büyük bir güce dönüştürdü" },
    { t:"1386-01-01", tur:"ittifak", b:"Büyük Dük Jogaila, Polonya Kraliçesi Jadwiga ile evlenip Polonya kralı oldu — kişisel birlik başladı" },
    { t:"1569-07-01", tur:"son", b:"Lublin Birliği ile Polonya'yla tam birleşerek Lehistan-Litvanya Birliği'ni oluşturdu" }
  ]
},
{ id:"lehistan", ad:"Lehistan-Litvanya Birliği", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1569-07-01", t:"1795-10-24", baskent:"Varşova", harita:"lehistan",
  ozet:"Seçimli krallıkla yönetilen \"Asilzade Cumhuriyeti\"; Osmanlı ile Podolya çevresinde savaştı, üç paylaşımla ortadan kalktı.",
  kaynak:"polonya",
  kronoloji:[
    { t:"1569-07-01", tur:"kurulus", b:"Lublin Birliği ile Polonya-Litvanya birleşti" },
    { t:"1573-05-16", tur:"hukumdar", b:"Henrician Articles kabul edildi, ilk seçimli kral Valois Henri tahta çıktı" },
    { t:"1620-09-01", tur:"savas", b:"Osmanlı ile Hotin/Ţuţora savaşları başladı" },
    { t:"1655-07-01", tur:"isgal", b:"İsveç istilası (\"Tûfan\"/Potop) ülkeyi harabeye çevirdi" },
    { t:"1672-10-18", tur:"toprak-kayip", b:"Bucaş Antlaşması — Podolya Osmanlı'ya geçti" },
    { t:"1683-09-12", tur:"ittifak", b:"Jan Sobieski, II. Viyana kuşatmasını kırdı" },
    { t:"1699-01-26", tur:"antlasma", b:"Karlofça — Podolya geri alındı" },
    { t:"1764-09-07", tur:"hukumdar", b:"Stanisław August Poniatowski son kral seçildi" },
    { t:"1772-08-05", tur:"toprak-kayip", b:"Birinci Paylaşım — Rusya, Prusya ve Avusturya toprak aldı" },
    { t:"1791-05-03", tur:"antlasma", b:"3 Mayıs Anayasası ilan edildi — Avrupa'nın ilk yazılı anayasası" },
    { t:"1793-01-23", tur:"toprak-kayip", b:"İkinci Paylaşım ile ülke küçüldü" },
    { t:"1795-10-24", tur:"son", b:"Üçüncü Paylaşım ile devlet ortadan kalktı" }
  ]
},
{ id:"cenova", ad:"Cenova Cumhuriyeti", tur:"cumhuriyet", bolge:"italya",
  f:"1005-01-01", t:"1797-06-14", baskent:"Cenova", harita:"ceneviz",
  ozet:"Kefe, Sakız ve Sinop'ta kolonileri olan İtalyan deniz cumhuriyeti; kolonilerini sırayla Osmanlı'ya kaptırdı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1099-01-01", tur:"kurulus", b:"Konsüllük yönetimiyle özerk deniz cumhuriyeti hâline geldi" },
    { t:"1261-03-13", tur:"antlasma", b:"Nymphaeum Antlaşması ile Bizans'tan Karadeniz'de ticaret ayrıcalığı aldı — Kırım kolonizasyonunun önünü açtı" },
    { t:"1346-01-01", tur:"toprak-kazanc", b:"Kefe kolonisi kuruldu (Kırım kıyısı)" },
    { t:"1380-06-24", tur:"savas", b:"Chioggia Savaşı'nda Venedik'e yenildi, deniz üstünlüğü Venedik'e geçti" },
    { t:"1455-01-01", tur:"toprak-kazanc", b:"Sakız Adası Maona şirketi idaresine geçti" },
    { t:"1461-08-15", tur:"toprak-kayip", b:"Amasra kolonisi Osmanlı'ya düştü" },
    { t:"1475-06-01", tur:"toprak-kayip", b:"Kefe, Osmanlı'ya düştü" },
    { t:"1528-09-12", tur:"antlasma", b:"Andrea Doria, Fransız nüfuzunu kırıp aristokratik cumhuriyet anayasasını kurdu" },
    { t:"1566-04-14", tur:"toprak-kayip", b:"Sakız Adası Osmanlı'ya ilhak edildi — son Ege kolonisi kayboldu" },
    { t:"1797-06-14", tur:"son", b:"Napolyon tarafından ilga edildi" }
  ]
},
{ id:"napoli", ad:"Napoli Krallığı / İki Sicilya", tur:"krallik", bolge:"italya",
  f:"1282-03-30", t:"1861-02-13", baskent:"Napoli", harita:"napoli",
  ozet:"Güney İtalya krallığı (ülke sürekliliği, birçok hanedan el değiştirdi: Anjou→Aragon→İspanya→Bourbon→Napolyon→Bourbon); Osmanlı'yla teması 1480 Otranto çıkarmasıyla sınırlı kaldı, 1861'de İtalyan birliğiyle ortadan kalktı. ⚠️ TDV `napoli` maddesi Osmanlı-Napoli diplomatik/ticarî temasına odaklanıyor; 1282 bölünmesi, 1734 Bourbon restorasyonu ve 1806-1815 Napolyon dönemi TDV'de YOK, standart akademik kaynaktan (Encyclopaedia Britannica) alındı.",
  kaynak:"napoli (TDV, 1480/1861) + standart akademik kaynak (1282/1734/1806/1815, TDV'de yok)",
  kronoloji:[
    { t:"1282-03-30", tur:"kurulus", b:"Palermo'da patlak veren Sicilya Akşam Duası isyanı eski Sicilya Krallığı'nı ikiye böldü: ada Aragon hanedanına geçti, anakaradaki Napoli merkezli topraklar Anjou hanedanında kaldı" },
    { t:"1480-08-11", tur:"isgal", b:"Otranto, Osmanlı çıkarmasıyla kısa süreliğine işgal edildi (1481'de geri alındı)" },
    { t:"1734-05-25", tur:"kurulus", b:"İspanyol Bourbon prensi Carlos, Bitonto Muharebesi'nde Avusturya kuvvetlerini yenip Napoli'yi ele geçirdi; bağımsız Bourbon krallığı olarak yeniden kuruldu (ertesi yıl resmen taç giydi)" },
    { t:"1806-03-30", tur:"isgal", b:"Napolyon'un ordusu krallığı işgal etti, Bourbon hanedanını Sicilya'ya sürüp ağabeyi Joseph Bonaparte'ı (sonra Joachim Murat'ı) tahta oturttu; krallık Fransız vasal devletine dönüştü" },
    { t:"1815-05-20", tur:"son", b:"Napolyoncu kral Joachim Murat, Avusturya'ya karşı savaşı kaybetti; Napolyoncu Napoli Krallığı sona erdi, Bourbon hanedanı tahta döndü" },
    { t:"1861-02-13", tur:"son", b:"İtalya Krallığı'na katıldı" }
  ]
},
{ id:"papalik", ad:"Papalık Devleti", tur:"devlet", bolge:"italya",
  f:"756-01-01", t:"1870-09-20", baskent:"Roma", harita:"papalik",
  ozet:"Katolik kilisesinin dünyevi devleti (kurumsal süreklilik, tek hanedan yok — art arda seçilen papalar); 756'da Pepin'in bağışıyla doğdu, Haçlı seferleri ve Kutsal İttifak'ların dinî-siyasi örgütleyicisiydi, 1870'te İtalyan birliğiyle Roma'nın ilhakıyla sona erdi.",
  kaynak:"papalik",
  kronoloji:[
    { t:"1396-09-25", tur:"savas", b:"Niğbolu Savaşı — TDV'ye göre dönemin papalarınca teşvik edilen Haçlı seferlerinden biri, I. Bayezid'e karşı düzenlendi (TDV papalik maddesi)" },
    { t:"1463-10-25", tur:"ittifak", b:"Papa II. Pius, İstanbul'un fethi sonrası alevlenen Haçlı çağrısına katılmayan Fransa'yı tehdit eden bir bildiri yayımladı (TDV fransa maddesi, gün birebir verilmiş)" },
    { t:"1571-05-25", tur:"ittifak", b:"Kutsal İttifak'ı kurup İnebahtı zaferini örgütledi" },
    { t:"1571-10-07", tur:"savas", b:"İnebahtı Deniz Savaşı — TDV'ye göre papalarca teşvik edilen savaşlardan biri; Kutsal İttifak donanması Osmanlı donanmasını yendi (TDV papalik maddesi)" },
    { t:"1809-05-17", tur:"isgal", b:"Napolyon, Papalık topraklarını Fransız İmparatorluğu'na ilhak etti; Papa VII. Pius'u aforoz etmesi üzerine Fransız kuvvetleri Papa'yı tutuklayıp 1814'e kadar hapsetti (TDV kapsamıyor — akademik kaynak: Ambrogio Caiani, 'To Kidnap a Pope', Yale UP 2021)" },
    { t:"1870-09-20", tur:"son", b:"İtalya Krallığı Roma'yı ilhak etti, dünyevi iktidarı sona erdi" }
  ]
},
{ id:"fransa", ad:"Fransa Krallığı", tur:"krallik", bolge:"bati-avrupa",
  f:"987-01-01", t:"1792-09-22", baskent:"Paris", harita:"fransa",
  ozet:"Habsburg'a karşı dengeleme amacıyla Osmanlı ile 1536'da ittifaka yakın kapitülasyon ilişkisi kurdu. ⚠️ VERİ DEVLET (7 Ağustos 2026) DÜZELTTİ: `t:` 21'den 22'ye çekildi — TDV `fransa` maddesi \"22 Eylül'de de cumhuriyet ilân edildi\" diyor, önceki 21 bir gün erkendi. Ardılı için bkz. [[fransa-cumhuriyet]].",
  kaynak:"fransa",
  kronoloji:[
    { t:"1536-01-01", tur:"ittifak", b:"I. François ile Kanunî arasında Kapitülasyonlar imzalandı" },
    { t:"1798-07-01", tur:"savas", b:"(Devrim sonrası) Napolyon'un Mısır Seferi ile Osmanlı'ya savaş açıldı" },
    { t:"1792-09-22", tur:"son", b:"Krallık ilga edildi, Cumhuriyet ilan edildi" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — DALGA 1: `fransa` harita kimliği künyenin
// ömrünün (987-1792) SONRASINDA da (1792-1923, 93 kayıt — bu partinin ikinci
// büyük kalemi) kullanılıyordu; `yerlesimler_afrika.js`teki Cezayir/Tunus'un
// 1830/1881 sonrası payı da bu boşluğun içinde. TEK künyede birleştirildi
// (Napolyon→Restorasyon→Cumhuriyetler), `almanya` kaydının HRE→Alman
// İmparatorluğu emsali gibi. Kaynak: TDV `fransa` (canlı, genel madde).
{ id:"fransa-cumhuriyet", ad:"Fransa (1792 Sonrası — Cumhuriyet/İmparatorluk/Restorasyon)", tur:"cumhuriyet", bolge:"bati-avrupa",
  f:"1792-09-22", t:"1923-10-29", baskent:"Paris",
  ozet:"I. Cumhuriyet'in ilanından III. Cumhuriyet'e uzanan, rejim rejim değişen ama devlet kimliği süren dönem (bkz. [[fransa]] Krallık dönemi için) — Napolyon'un İmparatorluğu, Restorasyon, Temmuz Monarşisi, II. Cumhuriyet ve II. İmparatorluk hepsi TEK kayıtta (1923 sonrasında da sürdü). Cezayir (bkz. [[cezayir-fransiz]]) ve Tunus'un 1881 sonrası fiilî Fransız idaresi de bu kaydın harita kimliğine dahil. (kaynak: TDV, madde: fransa)",
  kaynak:"fransa",
  kronoloji:[
    { t:"1792-09-22", tur:"kurulus", b:"I. Fransız Cumhuriyeti ilan edildi" },
    { t:"1804-01-01", tur:"hukumdar", b:"Napolyon Bonapart kendini imparator ilan etti (1814'e dek)" },
    { t:"1815-06-09", tur:"hukumdar", b:"Restorasyon — Bourbon hanedanı geri döndü (1830'a dek)" },
    { t:"1830-08-09", tur:"bolunme", b:"Temmuz Monarşisi — Louis Philippe tahta çıktı" },
    { t:"1848-02-24", tur:"kurulus", b:"II. Cumhuriyet ilan edildi" },
    { t:"1852-12-02", tur:"hukumdar", b:"III. Napolyon kendini imparator ilan etti (II. İmparatorluk)" },
    { t:"1870-09-04", tur:"kurulus", b:"III. Cumhuriyet ilan edildi" },
    { t:"1881-05-12", tur:"toprak-kazanc", b:"Bardo Antlaşması ile Tunus fiilen Fransız protektorası oldu (bkz. [[tunus-ocagi]])" }
  ]
},
{ id:"ingiltere", ad:"İngiltere / Büyük Britanya", tur:"krallik", bolge:"bati-avrupa",
  f:"1066-01-01", t:"1923-10-29", baskent:"Londra", harita:"ingiltere",
  ozet:"1581 Levant Company ile başlayan ticari ilişki, 19. yüzyılda Boğazlar ve Mısır siyasetinde belirleyici güce dönüştü (1923 sonrasında da sürdü).",
  kaynak:"ingiltere",
  kronoloji:[
    { t:"1581-09-11", tur:"antlasma", b:"Levant Company kuruldu, ticarî kapitülasyonlar genişledi" },
    { t:"1799-01-01", tur:"ittifak", b:"Napolyon'un Mısır Seferi'ne karşı Osmanlı ile ittifak" },
    { t:"1827-10-20", tur:"savas", b:"Navarin'de Osmanlı-Mısır donanmasını batırdı" },
    { t:"1840-07-15", tur:"ittifak", b:"Londra Konvansiyonu ile Kavalalı'ya karşı Osmanlı'yı destekledi" },
    { t:"1878-06-04", tur:"toprak-kazanc", b:"Kıbrıs'ın idaresini devraldı" },
    { t:"1914-11-05", tur:"savas", b:"I. Dünya Savaşı'nda Osmanlı'ya karşı cephe açtı" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — DALGA 1: `isvec` harita kimliği künyenin
// ömrünün (1523-1923) ÖNCESİNDE de (1281-1523, çoğu Finlandiya — tek pencerede
// 17 kayıt "1281→1809") kullanılıyordu. Kalmar-öncesi kesin kuruluş tarihi
// TDV özetinde net değil; atlasın pencere-başlangıcı konvansiyonuyla
// f:"1281-01-01" kullanıldı (emsal: `kirim` ve çeşitli beylikler).
{ id:"isvec-birlik-oncesi", ad:"İsveç Krallığı (Kalmar Birliği Öncesi ve Dönemi)", tur:"krallik", bolge:"kuzey-avrupa",
  f:"1281-01-01", t:"1523-06-06", baskent:"Stockholm",
  ozet:"Kalmar Birliği (1397-1523) öncesi bağımsız İsveç Krallığı ve birlik dönemi (Danimarka-Norveç-İsveç birleşik krallığı); Gustav Vasa'nın Danimarkalıları yenip bağımsızlığı yeniden kurmasıyla sona erdi (bkz. [[isvec]]). ⚠️ 1281 tarihi hânedanın kuruluşu değil atlasın pencere başlangıcıdır. (kaynak: TDV, madde: isvec)",
  kaynak:"isvec",
  kronoloji:[
    { t:"1397-01-01", tur:"birlesme", b:"Kalmar Birliği kuruldu — Danimarka, Norveç ve İsveç Margrete I altında birleşti" },
    { t:"1434-01-01", tur:"isyan", b:"İsveçliler Kral XIII. Erich'e karşı ayaklandı (Engelbrekt isyanı)" },
    { t:"1523-06-06", tur:"son", b:"Gustav Vasa, Danimarkalıları yenip İsveç'i birlikten çıkardı, kral seçildi" }
  ]
},
{ id:"isvec", ad:"İsveç Krallığı", tur:"krallik", bolge:"kuzey-avrupa",
  f:"1523-06-06", t:"1923-10-29", baskent:"Stockholm", harita:"isvec",
  ozet:"XII. Karl'ın (Demirbaş Şarl) Poltava bozgunu sonrası 1709-1714 Osmanlı topraklarında (Bender) sığınmacılığı ile hatırlanır (1923 sonrasında da sürdü).",
  kaynak:"isvec",
  kronoloji:[
    { t:"1709-07-08", tur:"savas", b:"Poltava'da Rusya'ya yenilen XII. Karl, Osmanlı'ya sığındı" },
    { t:"1709-08-01", tur:"ittifak", b:"Bender'de Osmanlı himayesinde kalarak Rusya'ya karşı savaş kışkırttı (Prut Seferi'ni tetikledi)" },
    { t:"1714-02-01", tur:"antlasma", b:"Osmanlı topraklarını terk etti" }
  ]
},

// ===================== TIER 4 — BALKAN DEVLET/PRENSLİKLERİ =====================

{ id:"sirbistan-nemanjic", ad:"Sırbistan Krallığı (Nemanjić Hanedanı)", tur:"krallik", bolge:"balkanlar",
  f:"1217-01-01", t:"1402-01-01", baskent:"Ras → Skopje → Serez (Duşan döneminde)", harita:"sirbistan",
  ozet:"Stefan Nemanja'nın kurduğu hanedanın krallığa, Stefan Duşan döneminde kısa süreliğine imparatorluğa dönüştüğü ortaçağ Sırp devleti; Duşan'ın ölümüyle parçalandı, Osmanlı karşısındaki yenilgilerle (Çirmen, Kosova) vasallığa düştü. Devam: bkz. [[sirp-despotlugu]]. (kaynak: TDV, madde: sirbistan)",
  kaynak:"sirbistan",
  kronoloji:[
    { t:"1217-01-01", tur:"kurulus", b:"Stefan Prvovenčani (İlk Taçlı) Sırbistan Krallığı'nı ilan etti" },
    { t:"1331-01-01", tur:"hukumdar", b:"Stefan Duşan tahta çıktı" },
    { t:"1345-01-01", tur:"hukumdar", b:"Duşan kendini Sırpların ve Rumların çarı ilan etti" },
    { t:"1346-04-16", tur:"hukumdar", b:"Üsküp'te resmî imparatorluk tacı giydi, başkenti Serez'e taşıdı" },
    { t:"1355-12-20", tur:"bolunme", b:"Duşan'ın ani ölümüyle imparatorluk parçalanmaya başladı" },
    { t:"1371-09-26", tur:"savas", b:"Çirmen (Meriç) Savaşı'nda ağır yenilgi" },
    { t:"1389-06-15", tur:"savas", b:"I. Kosova Savaşı sonrası Osmanlı'ya haraca bağlandı" },
    { t:"1402-01-01", tur:"son", b:"Stefan Lazarević'in despot unvanını almasıyla Sırp Despotluğu'na dönüştü" }
  ]
},
{ id:"sirp-despotlugu", ad:"Sırp Despotluğu", tur:"prenslik", bolge:"balkanlar",
  f:"1402-01-01", t:"1459-06-20", baskent:"Belgrad → Smederevo", harita:"sirbistan",
  ozet:"Bizans-sonrası son bağımsız Sırp devleti (hanedan/dönem ömrü); Osmanlı vasalı olarak kuruldu, 1459'da Smederevo'nun düşüşüyle ortadan kalktı — modern Sırbistan'la 4 asırlık kopukluk var.",
  kaynak:"sirbistan",
  kronoloji:[
    { t:"1402-01-01", tur:"kurulus", b:"Stefan Lazarević tarafından kuruldu, Osmanlı vasalı" },
    { t:"1427-01-01", tur:"hukumdar", b:"Đurađ Branković despot oldu, başkenti Belgrad'dan Smederevo'ya taşıdı" },
    { t:"1439-08-18", tur:"toprak-kayip", b:"Semendire ilk kez Osmanlı'ya düştü" },
    { t:"1444-08-15", tur:"toprak-kazanc", b:"Segedin Antlaşması ile Semendire ve despotluk toprakları geri verildi" },
    { t:"1459-06-20", tur:"son", b:"Smederevo'nun düşüşüyle despotluk sona erdi" }
  ]
},
{ id:"bulgar-carligi", ad:"İkinci Bulgar İmparatorluğu", tur:"imparatorluk", bolge:"balkanlar",
  f:"1185-01-01", t:"1396-01-01", baskent:"Tırnova → Vidin", harita:"bulgaristan",
  ozet:"Asen hanedanının imparatorluğu (hanedan ömrü); 1185'te Asen kardeşlerin isyanıyla doğdu. TDV Tırnova'nın düşüşünü 1393 verir; 1396 Vidin'in düşüşüdür — devletin son parçası, Niğbolu Haçlı Seferi sonrası ortadan kalktı.",
  kaynak:"bulgaristan",
  kronoloji:[
    { t:"1185-01-01", tur:"kurulus", b:"Asen kardeşler (İvan Asen ve Petâr) Bizans'a isyan ederek imparatorluğu yeniden kurdu" },
    { t:"1230-03-09", tur:"toprak-kazanc", b:"Klokotnitsa zaferiyle II. İvan Asen döneminde imparatorluk en geniş sınırlarına ulaştı" },
    { t:"1371-01-01", tur:"bolunme", b:"İvan Aleksandır'ın ölümüyle devlet Tırnova ve Vidin çarlıklarına bölündü" },
    { t:"1393-07-17", tur:"toprak-kayip", b:"Tırnova düştü" },
    { t:"1396-09-25", tur:"savas", b:"Niğbolu'da Haçlı ordusuna galip gelindi" },
    { t:"1396-01-01", tur:"son", b:"Vidin'in düşüşüyle Bulgar Çarlığı sona erdi" }
  ]
},
{ id:"bosna-kralligi", ad:"Bosna Krallığı", tur:"krallik", bolge:"balkanlar",
  f:"1377-01-01", t:"1463-05-01", baskent:"Jajce", harita:"bosna",
  ozet:"Kotromanić hanedanının krallığı (hanedan ömrü); Tvrtko I'in 1377 taç giymesiyle doğdu, son kral Tomašević'in haraç reddiyle Fâtih'in seferini davet etti, 1463'te hızla ilhak edildi.",
  kaynak:"bosna-hersek",
  kronoloji:[
    { t:"1377-01-01", tur:"kurulus", b:"Tvrtko I tarafından krallık ilan edildi" },
    { t:"1391-01-01", tur:"bolunme", b:"Tvrtko I'in ölümüyle taht kavgaları ve derebeylik parçalanması başladı" },
    { t:"1414-01-01", tur:"antlasma", b:"Osmanlı'ya ilk kez haraç ödemeyi kabul etti" },
    { t:"1448-01-01", tur:"bolunme", b:"Stjepan Vukčić Kosača güney topraklarında ayrı Hersek Dukalığı'nı kurdu (bkz. [[hersek]])" },
    { t:"1461-11-01", tur:"hukumdar", b:"Son kral Stjepan Tomašević, Osmanlı'ya bağlılığı reddederek Papalık'tan yardım istedi" },
    { t:"1463-05-01", tur:"son", b:"Fatih'in seferiyle ilhak edildi" }
  ]
},
{ id:"arnavutluk-iskenderbey", ad:"Arnavutluk (Kastriota Direnişi)", tur:"prenslik", bolge:"balkanlar",
  f:"1443-01-01", t:"1479-01-25", baskent:"Krujë", harita:"arnavutluk",
  ozet:"Arnavut direniş birliğinin ömrü (ülke sürekliliği, tek hanedan değil); İskender Bey (Skanderbeg) 1443'te isyan başlattı, 17 Ocak 1468'de öldü — direniş Kruja (1478) ve İşkodra'nın (1479) düşmesine kadar sürdü.",
  kaynak:"iskender-bey",
  kronoloji:[
    { t:"1443-11-28", tur:"isyan", b:"İskender Bey Osmanlı'ya isyan etti" },
    { t:"1468-01-17", tur:"hukumdar", b:"İskender Bey öldü" },
    { t:"1479-01-25", tur:"son", b:"İşkodra'nın düşüşüyle direniş sona erdi" }
  ]
},
{ id:"eflak", ad:"Eflak Voyvodalığı (Wallachia)", tur:"prenslik", bolge:"balkanlar",
  f:"1330-01-01", t:"1859-01-24", baskent:"Bükreş", harita:"eflak",
  tabi:[{f:"1462-06-01", t:"1859-01-24", ust:"osmanli"}],
  ozet:"Tuna'nın kuzeyinde Osmanlı'ya vasal kalan voyvodalık; Boğdan ile birleşerek Romanya'nın çekirdeğini oluşturdu.",
  kaynak:"eflak",
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
  tabi:[{f:"1456-06-01", t:"1859-01-24", ust:"osmanli"}],
  ozet:"Kuzey Tuna voyvodalığı (ülke sürekliliği, Romanya'nın çekirdeği); Osmanlı'ya 1455'te haraca, 1484'te kesin bağlandı; 1859'da Cuza'nın çifte seçimiyle Eflak'la birleşti.",
  kaynak:"bogdan",
  kronoloji:[
    { t:"1359-01-01", tur:"kurulus", b:"Bogdan I tarafından kuruldu" },
    { t:"1420-01-01", tur:"savas", b:"İlk Osmanlı akını Akkerman çevresine ulaştı" },
    { t:"1476-01-10", tur:"savas", b:"Ştefan cel Mare, Vaslui'de Osmanlı'yı yendi (Valea Albă'da kısa süre sonra yenildi)" },
    { t:"1512-01-01", tur:"antlasma", b:"Osmanlı vasalı statüsü kesinleşti" },
    { t:"1538-09-14", tur:"savas", b:"Kanunî'nin seferiyle Petru Rareş tahttan indirildi, vasallık sıkılaştırıldı" },
    { t:"1859-01-24", tur:"birlesme", b:"Eflak ile birleşerek Romanya'nın temelini attı" }
  ]
},
{ id:"erdel", ad:"Erdel Prensliği (Transilvanya)", tur:"prenslik", bolge:"orta-avrupa",
  f:"1570-01-01", t:"1711-04-30", baskent:"Gyulafehérvár",
  tabi:[{f:"1570-01-01", t:"1711-04-30", ust:"osmanli"}],
  ozet:"Mohaç sonrası Macaristan'ın üçe bölünmesiyle doğan, Osmanlı vasalı özerk prenslik. Tâbiiyeti kaydın kendi ömrünü aynalıyor (kayıt zaten Speyer Antlaşması'yla başlayıp Habsburg'a bağlanmayla bitiyor, arada özerk vasallık dışında bir dönem yok — bkz. oturumlar/ARABISTAN-DUZELTMELER.md §AJ/§AK, A5'in önerdiği 1541 başlangıcı kaydın kendi f:'sinden 29 yıl önceye düştüğü için burada kullanılmadı).",
  kaynak:"erdel",
  kronoloji:[
    { t:"1570-08-16", tur:"kurulus", b:"Speyer Antlaşması ile bağımsız prenslik statüsü kazandı" },
    { t:"1571-05-25", tur:"hukumdar", b:"Báthory István voyvoda oldu (1576'da Polonya kralı da seçildi)" },
    { t:"1613-10-23", tur:"hukumdar", b:"Bethlen Gábor tahta çıktı, prensliğin altın çağı başladı" },
    { t:"1660-08-27", tur:"toprak-kayip", b:"II. Rákóczi György'nin izinsiz Polonya seferi üzerine Osmanlı Várad'ı (Oradea) aldı" },
    { t:"1683-09-12", tur:"toprak-kayip", b:"II. Viyana bozgunu sonrası Habsburg baskısı arttı" },
    { t:"1690-12-04", tur:"antlasma", b:"Diploma Leopoldinum ile Habsburg üstünlüğü altında özerklik tanındı" },
    { t:"1711-04-30", tur:"son", b:"Szatmár Antlaşması ile kesin olarak Habsburg'a bağlandı" }
  ]
},
{ id:"mora-despotlugu", ad:"Mora Despotluğu", tur:"prenslik", bolge:"balkanlar",
  f:"1349-01-01", t:"1460-05-31", baskent:"Mystras",
  ozet:"Bizans'ın son eyaleti (hanedan ömrü, Palaiologos kolu); 1349'da İmparator Kantakuzenos'un oğluna ayırdığı bölgeden doğdu, 1460'ta Despot Dimitrios'un teslimiyle Osmanlı'ya katıldı.",
  kaynak:"mora",
  kronoloji:[
    { t:"1349-01-01", tur:"kurulus", b:"Palaiologos hanedanı tarafından kuruldu" },
    { t:"1460-05-31", tur:"son", b:"Fatih tarafından ilhak edildi" }
  ]
},
{ id:"atina-dukaligi", ad:"Atina Dukalığı", tur:"dukalik", bolge:"balkanlar",
  f:"1205-01-01", t:"1458-06-04", baskent:"Atina", harita:"atinadukaligi",
  ozet:"IV. Haçlı Seferi sonrası kurulan Latin dukalığı; aradaki Katalan dönemi ayrı kayıt (bkz. [[katalan]]), Floransalı Acciaiuoli hanedanı devraldıktan sonra Fatih döneminde ilhak edildi.",
  kaynak:"atina",
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
  kaynak:"atina",
  kronoloji:[
    { t:"1303-01-01", tur:"kurulus", b:"Roger de Flor'un Katalan Kumpanyası, Bizans hizmetine Anadolu'da Türklere karşı savaşmak üzere girdi" },
    { t:"1305-04-30", tur:"savas", b:"Roger de Flor öldürüldü; Katalanlar Bizans'a döndü, Trakya ve Makedonya'yı yağmaladı (\"Katalan İntikamı\")" },
    { t:"1311-03-15", tur:"kurulus", b:"Halmyros (Kifisos) Savaşı'nda Atina Dukası Brienneli Gautier'yi öldürüp dukalığı ele geçirdi" },
    { t:"1388-01-01", tur:"son", b:"Floransalı Nerio Acciaiuoli Atina'yı aldı; Neopatras kolu birkaç yıl daha sürdü" }
  ]
},
{ id:"naksa-dukaligi", ad:"Naxos (Nakşa) Dukalığı", tur:"dukalik", bolge:"balkanlar",
  f:"1207-01-01", t:"1579-01-01", baskent:"Naxos",
  ozet:"Ege adalarında son Latin egemenliği (hanedan ömrü); 1207'de Marco Sanudo tarafından kuruldu, 1537-40'ta Osmanlı tâbiliğine girdi (Barbaros haracı), Yasef Nasi'nin dukalığından sonra 1579'da doğrudan ilhak edildi — iki ayrı kademe.",
  kaynak:"naksa",
  kronoloji:[
    { t:"1207-01-01", tur:"kurulus", b:"Venedikli Marco Sanudo tarafından kuruldu" },
    { t:"1537-01-01", tur:"antlasma", b:"Barbaros Hayreddin Paşa haraca bağladı" },
    { t:"1579-01-01", tur:"son", b:"Osmanlı tarafından tamamen ilhak edildi" }
  ]
},
{ id:"rodos-sovalyeleri", ad:"Rodos (Saint Jean/Malta Şövalyeleri)", tur:"devlet", bolge:"balkanlar",
  f:"1310-01-01", t:"1798-06-12", baskent:"Rodos → (1522-1530 topraksız) → Birgu/Valletta (Malta)", harita:"sovalye",
  ozet:"Haçlı şövalye tarikatının Ege üssü; Kanunî'nin kuşatmasıyla adayı terk edip 1530'da Malta'ya yerleşti, Napolyon'un 1798'de adayı işgaliyle tarikat topraksız kaldı. 1522-1530 arası tarikat topraksızdı, haritada karşılığı yok.",
  kaynak:"rodos",
  kronoloji:[
    { t:"1310-08-15", tur:"kurulus", b:"St. Jean Şövalyeleri Rodos'u ele geçirdi" },
    { t:"1480-05-23", tur:"savas", b:"Fatih'in kuşatması püskürtüldü" },
    { t:"1522-12-25", tur:"toprak-kayip", b:"Kanunî'nin kuşatması sonrası ada teslim edildi; tarikat 1530'a dek topraksız kaldı" },
    { t:"1530-03-24", tur:"bolunme", b:"V. Karl'ın bağışıyla Malta'ya yerleşti (Malta Şövalyeleri olarak devam)" },
    { t:"1565-05-18", tur:"savas", b:"Büyük Malta Kuşatması'nda Osmanlı ordusunu püskürttü" },
    { t:"1571-10-07", tur:"savas", b:"İnebahtı Deniz Savaşı'na Kutsal İttifak donanmasında katıldı" },
    { t:"1798-06-12", tur:"son", b:"Napolyon'un Mısır seferi yolunda adayı işgaliyle tarikat topraksız kaldı, egemen devlet olarak sona erdi" }
  ]
},
{ id:"kibris-krallik", ad:"Kıbrıs Krallığı (Lüzinyan)", tur:"krallik", bolge:"anadolu",
  f:"1192-01-01", t:"1489-02-26", baskent:"Lefkoşa", harita:"lusignan",
  ozet:"Haçlı kökenli Lüzinyan hanedanının krallığı (hanedan ömrü); 1192'de kuruldu, son kraliçe Katerina Cornaro'nun 26 Şubat 1489'da feragatiyle Venedik'e devredildi — Osmanlı fethi (1571) bundan 82 yıl sonradır.",
  kaynak:"kibris",
  kronoloji:[
    { t:"1192-01-01", tur:"kurulus", b:"Guy de Lusignan tarafından kuruldu" },
    { t:"1489-02-26", tur:"son", b:"Kraliçe Caterina Cornaro tacı Venedik'e devretti" }
  ]
},

// ========================= TIER 5 — KAFKASYA DEVLETLERİ =========================

{ id:"gurcistan", ad:"Gürcistan Krallığı/Krallıkları", tur:"krallik", bolge:"kafkasya",
  f:"1008-01-01", t:"1801-09-12", baskent:"Tiflis", harita:"gurcistan",
  ozet:"Bagratlı hanedanının birleştirdiği, Kraliçe Tamar döneminde altın çağını yaşayan, 1490'da Kartli/Kaheti/İmereti'ye bölünen Kafkas krallığı; Osmanlı-Safevî çekişmesinde parçalandı, sonunda Rusya'ya ilhak edildi. (kaynak: TDV, madde: gurcistan)",
  kaynak:"gurcistan",
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
// VERİ DEVLET (7 Ağustos 2026) — DALGA 2: `gurcistan` harita kimliği
// künyenin ömrünün (1008-1801) SONRASINDA da kullanılıyordu, iki AYRI
// boşluk: (a) 1490'da bölünen İmereti Krallığı `gurcistan`ın kendi t:'siyle
// (1801) bitmeden çok sonraya, 1810'a dek ayrı sürdü; (b) 1918-1921
// Gürcistan Demokratik Cumhuriyeti. TDV `gurcistan` maddesinde İmereti'nin
// KENDİ tarihleri yok (yalnız 1804 birleşme notu var), §4 gereği standart
// akademik kaynak; Demokratik Cumhuriyet için TDV'nin kendi tarihleri
// kullanıldı.
{ id:"imereti", ad:"İmereti Krallığı", tur:"krallik", bolge:"kafkasya",
  f:"1490-01-01", t:"1810-02-20", baskent:"Kutaisi",
  ozet:"Gürcistan Krallığı'nın 1490'da Kartli, Kaheti ve İmereti'ye bölünmesiyle doğan batı Gürcistan krallığı (bkz. [[gurcistan]]); Kartli-Kaheti'nin (1801) aksine 1810'a dek ayrı sürdü, Kral II. Solomon'un tahttan indirilmesiyle Rusya'ya ilhak edildi. ⚠️ TDV `gurcistan` maddesi yalnız \"1804 yılında İmeretiya ve Guriya (Rusya ile) birleşti\" diyor — bu muhtemelen kesin ilhaktan önceki bir himaye/vasallık anlaşması; kesin ilhak tarihi (1810-02-20) standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1490-01-01", tur:"kurulus", b:"Gürcistan Krallığı'nın bölünmesiyle ayrı krallık olarak ortaya çıktı" },
    { t:"1804-01-01", tur:"antlasma", b:"Rusya ile bir birlik/himaye anlaşması imzalandı (TDV: \"birleşti\", ayrıntı yok)" },
    { t:"1810-02-20", tur:"son", b:"Kral II. Solomon tahttan indirildi, Rusya krallığı kesin olarak ilhak etti" }
  ]
},
{ id:"gurcistan-demokratik-cumhuriyeti", ad:"Gürcistan Demokratik Cumhuriyeti", tur:"cumhuriyet", bolge:"kafkasya",
  f:"1918-05-26", t:"1921-03-16", baskent:"Tiflis",
  ozet:"Rusya İmparatorluğu'nun dağılmasıyla Transkafkasya Sejmi'nden ayrılarak bağımsızlığını ilan eden kısa ömürlü cumhuriyet; Kızıl Ordu'nun işgaliyle sona erdi, Gürcistan Sovyet Sosyalist Cumhuriyeti'ne dönüştü. (kaynak: TDV, madde: gurcistan — kuruluş 26 Mayıs 1918 birebir; işgal \"Şubat 1921\" olarak veriliyor, gün yok; bitiş günü 16 Mart 1921 atlasın kendi verisiyle — Batum'un düşüşü — uyumlu tutuldu)",
  kaynak:"gurcistan",
  kronoloji:[
    { t:"1918-05-26", tur:"kurulus", b:"Seym'den ayrılıp bağımsızlığını ilan etti" },
    { t:"1921-02-25", tur:"isgal", b:"Sovyet Rusya orduları Tiflis'i işgal etti" },
    { t:"1921-03-16", tur:"son", b:"Direnişin son kalesi Batum'un düşüşüyle cumhuriyet sona erdi, Sovyet rejimi kesinleşti" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — RENK 2'nin uyarısı: Transkafkasya Seymi'nden
// 1918'de AYNI ANDA doğan üç cumhuriyet (Gürcistan, Ermenistan, Azerbaycan)
// AYNI GÜNDE BİTMEDİ — Sovyet işgali her birine farklı ay/yılda ulaştı.
// Komşuluk hâlâ `rusya` (1917-1923 boşluğunda `sovyet-rusya`) gösterilirse
// 1918-1921 Kafkasyası yanlış boyanır; üçü AYRI künye olarak yazıldı.
{ id:"ermenistan-demokratik-cumhuriyeti", ad:"Ermenistan Demokratik Cumhuriyeti", tur:"cumhuriyet", bolge:"kafkasya",
  f:"1918-05-28", t:"1920-12-02", baskent:"Erivan",
  ozet:"Transkafkasya Sejmi'nin dağılmasıyla Taşnaktsutyun önderliğinde bağımsızlığını ilan eden kısa ömürlü cumhuriyet; Türk-Ermeni Savaşı'nın ardından Sovyet Rusya'nın işgaliyle sona erdi, Ermenistan Sovyet Sosyalist Cumhuriyeti'ne dönüştü. ⚠️ TDV'de müstakil `ermenistan` maddesi YOK (302); `kafkasya` maddesi yalnız genel çerçeveyi (\"Azerbaycan, Gürcistan, Ermenistan... millî cumhuriyetleri kuruldu\", işgal \"1920-1921\"de) doğruluyor, gün vermiyor. Tarihler standart akademik kaynağa göredir (§4).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1918-05-28", tur:"kurulus", b:"Taşnaktsutyun önderliğinde Erivan'da bağımsızlık ilan edildi" },
    { t:"1920-09-24", tur:"savas", b:"Türk-Ermeni Savaşı başladı" },
    { t:"1920-12-02", tur:"son", b:"Aleksandropol Antlaşması ve Sovyet işgaliyle hükûmet çöktü, Ermenistan SSC'ye dönüştü" }
  ]
},
{ id:"azerbaycan-demokratik-cumhuriyeti", ad:"Azerbaycan Demokratik Cumhuriyeti", tur:"cumhuriyet", bolge:"kafkasya",
  f:"1918-05-28", t:"1920-04-27", baskent:"Bakü",
  ozet:"Transkafkasya Sejmi'nin dağılmasıyla bağımsızlığını ilan eden, Müslüman dünyasının ilk parlamenter cumhuriyeti sayılan devlet; Kızıl Ordu'nun işgaliyle sona erdi, Azerbaycan SSC'ye dönüştü. (kaynak: TDV, madde: azerbaycan — \"28 Mayıs 1918'de Azerbaycan Demokratik Cumhuriyeti ilân edildi\", \"27 Nisan 1920'de... Kızıl Ordu... Azerbaycan Demokratik Cumhuriyeti'ne son verdi\" birebir). ⚠️ Ardıl SSC'nin kuruluşu bir gün SONRA, 28 Nisan 1920'dir — bu künyenin `t:`si cumhuriyetin KENDİ sonu (27 Nisan), SSC'nin kuruluşu değil.",
  kaynak:"azerbaycan",
  kronoloji:[
    { t:"1918-05-28", tur:"kurulus", b:"Azerbaycan Demokratik Cumhuriyeti ilan edildi" },
    { t:"1920-04-27", tur:"son", b:"Kızıl Ordu Bakü'yü işgal edip parlamento ve hükûmeti feshetti" }
  ]
},
{ id:"kilikya-ermeni", ad:"Kilikya Ermeni Krallığı", tur:"krallik", bolge:"anadolu",
  f:"1198-01-01", t:"1375-04-14", baskent:"Sis", harita:"kilikya-ermeni",
  ozet:"Osmanlı kuruluşundan önce Memlûklere yenilerek tarihe karıştı; Osmanlı ile doğrudan teması yok, coğrafi bağlam için anıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok (kili, sis alakasız konular), dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1375-04-14", tur:"son", b:"Memlûk fethiyle krallık sona erdi" }
  ]
},
{ id:"sirvansah", ad:"Şirvanşahlar", tur:"devlet", bolge:"kafkasya",
  f:"861-01-01", t:"1538-01-01", baskent:"Şamahı",
  ozet:"Doğu Kafkasya'da uzun ömürlü yerel hanedan (hanedan ömrü); Arap fethi sonrası valilerden teşekkül etti, Şah Tahmasb'ın 1538'de hâkimiyetine son vermesiyle Safevî vilayeti oldu.",
  kaynak:"sirvan",
  kronoloji:[
    { t:"861-01-01", tur:"kurulus", b:"Yezîdî hanedanı tarafından Şamahı merkezli kuruldu" },
    { t:"1027-01-01", tur:"hukumdar", b:"Kesrânî hanedanı Yezîdîlerin yerine geçti" },
    { t:"1382-01-01", tur:"antlasma", b:"I. İbrâhim, Timur'a bağlılığını bildirerek bağımsızlığını korudu" },
    { t:"1395-01-01", tur:"ittifak", b:"Timur'un Toktamış'a karşı Altın Orda seferine destek verdi" },
    { t:"1500-01-01", tur:"savas", b:"Gülistan'da Şah İsmâil'e yenilip Ferruh Yesar öldürüldü, fiilî bağımsızlık bitti" },
    { t:"1538-01-01", tur:"son", b:"I. Tahmasb tarafından Safevî Devleti'ne ilhak edildi" }
  ]
},

// ============== TIER 6 — ARAP YARIMADASI / KUZEY AFRİKA ==============

{ id:"suud-birinci", ad:"I. Suûdî Devleti (Vehhâbî Emirliği)", tur:"devlet", bolge:"arabistan",
  f:"1744-01-01", t:"1818-09-09", baskent:"Dir'iye", harita:"suud",
  ozet:"Vehhâbî hareketiyle Necid'de kurulan, Haremeyn'i ele geçiren emirlik; Kavalalı Mehmed Ali'nin ordusuyla ortadan kaldırıldı (bkz. [[misir-kavalali]]).",
  kaynak:"suudiler",
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
  kaynak:"cezayir",
  kronoloji:[
    { t:"1516-01-01", tur:"kurulus", b:"Oruç Reis (Barbaros) tarafından kuruldu" },
    { t:"1519-01-01", tur:"antlasma", b:"Hızır Hayreddin, Osmanlı'ya bağlılığını bildirdi, beylerbeyilik statüsü aldı" },
    { t:"1830-07-05", tur:"son", b:"Fransa tarafından işgal edildi" }
  ]
},
{ id:"tunus-ocagi", ad:"Tunus Ocağı (Hüseynî Hanedanı)", tur:"ocaklik", bolge:"kuzey-afrika",
  f:"1574-01-01", t:"1881-05-12", baskent:"Tunus",
  ozet:"Osmanlı beylerbeyiliğinden özerk hanedanlığa evrilen Kuzey Afrika ocağı; Fransız protektorasıyla fiilen sona erdi.",
  kaynak:"tunus",
  kronoloji:[
    { t:"1574-01-01", tur:"kurulus", b:"Osmanlı, İspanya'dan Tunus'u kesin olarak aldı" },
    { t:"1705-01-01", tur:"hukumdar", b:"Hüseyin bin Ali, kalıcı bey hanedanını kurdu (Osmanlı'ya bağlı özerklik)" },
    { t:"1881-05-12", tur:"son", b:"Bardo Antlaşması ile Fransız protektorası kuruldu" }
  ]
},
{ id:"trablusgarp-ocagi", ad:"Trablusgarp Ocağı (Karamanlı Hanedanı)", tur:"ocaklik", bolge:"kuzey-afrika",
  f:"1551-01-01", t:"1911-10-09", baskent:"Trablus",
  ozet:"Kuzey Afrika'nın en doğu ocağı (hanedan ömrü, Karamanlılar); 29 Eylül 1911 savaş ilânı, 9 Ekim Trablus'un düşüşü, 18 Ekim 1912 Uşi Antlaşması — künye fiilî kaybı (Trablus'un düşüşü) esas alır. harita: alanı yok çünkü 1551-1911 boyunca Trablus haritada hep Osmanlı'nın kendi rengiyle (doğrudan ya da tâbi) boyanıyor, ayrı bir renk kimliği yok.",
  kaynak:"trablusgarp-savasi",
  kronoloji:[
    { t:"1551-08-15", tur:"kurulus", b:"Turgut Reis, Malta Şövalyelerinden Trablus'u aldı" },
    { t:"1711-01-01", tur:"hukumdar", b:"Ahmed Karamanlı özerk hanedanlığını kurdu" },
    { t:"1835-01-01", tur:"toprak-kazanc", b:"Osmanlı doğrudan idareyi yeniden tesis etti (Karamanlı hanedanına son)" },
    { t:"1911-10-09", tur:"son", b:"İtalya işgal etti (Trablusgarp Savaşı)" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — 🔴 ÇİFT KİLİT: `sadi` harita kimliğinin ne
// rengi ne künyesi vardı, RENK 2 bu yüzden bekliyordu. Fas'ın 1549-1659
// katmanını (Sâdî hanedanı — `fas` künyesinin kendi ilk döneminde zaten
// anlatılan hanedan, ama harita kimliği AYRI) temsil ediyor.
{ id:"sadi", ad:"Sâdî Hanedanı (Fas)", tur:"hanedanlik", bolge:"kuzey-afrika",
  f:"1549-01-01", t:"1659-01-01", baskent:"Fas / Marakeş",
  ozet:"Sûs bölgesinde cihad emirliğiyle başlayıp (1511) Vattâsîleri yenerek Fas'a hâkim olan (1549), Ahmed el-Mansûr döneminde Tondibi zaferiyle Songhay'ı yıkan şerif hanedanı; iç taht kavgalarıyla 1659'da sona erdi, yerini Alevî (Filalî) hanedanı aldı (bkz. [[fas]] — aynı ülke kimliğinin devamı). HANEDAN ÖMRÜ kimliğidir; `fas` künyesi 1549'dan 1923'e ÜLKE SÜREKLİLİĞİ olarak aynı toprağı kapsıyor, bu ikisi ÇELİŞMEZ — `fas` şemsiye kimlik, `sadi` onun ilk 110 yılının hanedan katmanıdır. ⚠️ `fas`ın kendi kronolojisi Alevî geçişini \"1666\" diye veriyor, TDV `sadiler` maddesi \"1069/1659\" diyor — bu 7 yıllık fark ayrıca not düşülüyor, `fas`a dokunulmadı.",
  kaynak:"sadiler",
  kronoloji:[
    { t:"1511-01-01", tur:"kurulus", b:"Muhammed, elli kadar kabile reisinden Sûs bölgesinin cihad emîri olarak biat aldı (916)" },
    { t:"1549-01-01", tur:"toprak-kazanc", b:"Fas şehrine girip Vattâsî hâkimiyetine son verdi (956)" },
    { t:"1591-04-13", tur:"toprak-kazanc", b:"Ahmed el-Mansûr'un ordusu Tondibi zaferiyle Songhay İmparatorluğu'nu yıktı" },
    { t:"1659-01-01", tur:"son", b:"İç çekişmeler sonucu son Sâdî sultanı öldürüldü, hanedan sona erdi (1069)" }
  ]
},
{ id:"fas", ad:"Fas (Sâdî / Alevî Şerifleri)", tur:"krallik", bolge:"kuzey-afrika",
  f:"1549-01-01", t:"1923-10-29", baskent:"Fas / Marakeş", harita:"fas",
  ozet:"Osmanlı'ya hiçbir dönemde bağlanmayan tek Kuzey Afrika devleti; komşu ama daima bağımsız (1923 sonrasında da sürdü). ⚠️ VERİ DEVLET (7 Ağustos 2026) DÜZELTTİ: kronolojideki \"1666 bölünme\" satırı 1664'e çekildi ve olay adı değiştirildi — TDV'de üç AYRI tarih var, karıştırılmasın: **1659** = Sâdî hanedanının kendi içten çöküşü (bkz. [[sadi]], harita sınırı bu tarihte kalıyor, dokunulmadı), **1664** = TDV `fas` maddesinin verdiği \"başa geçen Mevlây Reşîd\" tarihi (BU satır), **1666** TDV'nin hiçbir maddesinde geçmiyordu, kaynağı belirsizdi.",
  kaynak:"fas",
  kronoloji:[
    { t:"1549-01-01", tur:"kurulus", b:"Sâdî hanedanı, Vattâsîleri yenerek Fas ve Marakeş'i aldı" },
    { t:"1578-08-04", tur:"savas", b:"Üç Kral Savaşı'nda Osmanlı destekli aday tahta çıktı, bağımsızlık korundu" },
    { t:"1591-04-13", tur:"toprak-kazanc", b:"Tondibi zaferiyle Songhay İmparatorluğu'nu yıkıp Timbuktu'yu ele geçirdi" },
    { t:"1664-01-01", tur:"hukumdar", b:"Mevlây Reşîd başa geçti; Alevî (Filalî) hanedanı fiilen iktidara geldi (şehirlerin tam ele geçirilişi onun döneminde, sonraki 20 yıl içinde tamamlandı)" },
    { t:"1672-01-01", tur:"hukumdar", b:"Mevlây İsmâil tahta çıktı, merkezi otoriteyi güçlendirdi (1727'ye dek)" },
    { t:"1844-08-14", tur:"savas", b:"Isly Savaşı'nda Fransa'ya yenildi" },
    { t:"1912-03-30", tur:"antlasma", b:"Fes Antlaşması ile Fransız himayesine girdi" }
  ]
},
{ id:"yemen-zeydi", ad:"Yemen Zeydî İmamlığı", tur:"devlet", bolge:"arabistan",
  f:"897-01-01", t:"1923-10-29", baskent:"Sa'da → San'a", harita:"yemen",
  ozet:"Osmanlı hâkimiyeti iki kesik dönemde yaşandı (1517-1636, 1849-1918); aradaki 200 yıl fiilen bağımsız imamlık.",
  kaynak:"yemen",
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
  f:"1805-07-03", t:"1914-12-18", baskent:"Kahire", harita:"kavalali",
  tabi:[{f:"1805-07-03", t:"1914-12-18", ust:"osmanli"}],
  ozet:"Hukuken Osmanlı toprağı sayılan ama Kavalalı hanedanınca özerk yönetilen vilayet; ayrıntılı savaş/antlaşma kronolojisi data/olaylar_ek4.js ve data/savaslar.js (seri: misir, vehhabi) dosyalarında. ÜLKE SÜREKLİLİĞİ kimliğidir — `f:`/`t:` (1805-1914) hanedanın TAMAMINI kapsıyor, yalnız 1805-1841 genişleme/Suriye dönemini değil (TDV'nin kendi verdiği \"3 Temmuz 1805\" valilik ve \"24 Mayıs 1841\" irsî ferman tarihleri arada bir ALT-DÖNEM ayrımı olarak kullanılabilir, künyenin kendi f/t'si buna dokunulmadı). VERİ DEVLET (7 Ağustos 2026) EKLEDİ: `harita:\"kavalali\"` — künye zaten vardı (`tabi:` alanı zaten Osmanlı'ya bağlılığı işaretliyordu, `kirim`/`eflak`/`bogdan` emsali gibi kendi rengi + tâbi kaydı bir arada), yalnız harita bağlantısı eksikti. (kaynak: TDV, madde: kavalali-mehmed-ali-pasa)",
  kaynak:"kavalali-mehmed-ali-pasa",
  kronoloji:[
    { t:"1805-07-03", tur:"kurulus", b:"Kavalalı Mehmed Ali, Bâbıâli tarafından Mısır valiliğine getirildi (oldubittinin tanınması)" },
    { t:"1811-01-01", tur:"savas", b:"Vehhâbî seferleri başladı (bkz. [[suud-birinci]])" },
    { t:"1831-10-31", tur:"savas", b:"Birinci Mısır Krizi — Suriye'nin işgali (bkz. seri: misir)" },
    { t:"1841-06-01", tur:"antlasma", b:"Londra çözümü — Mısır'da irsî valilik tanındı, Suriye/Hicaz iade edildi" },
    { t:"1914-11-05", tur:"savas", b:"İngiltere Osmanlı'ya savaş ilan etti, Kıbrıs'ı ilhak etti (Mısır'daki nominal Osmanlı bağı henüz bitmedi)" },
    { t:"1914-12-18", tur:"son", b:"İngiltere Mısır'ı resmen himayesine aldı, Hidivlik yerine sultanlık ilan edildi — nominal Osmanlı bağı sona erdi" }
  ]
},

// ===================== TIER 8 — İSYANLAR / BAĞIMSIZLIKLAR / GEÇİCİ İŞGALLER =====================

{ id:"sirbistan-prensligi", ad:"Sırbistan Prensliği", tur:"prenslik", bolge:"balkanlar",
  f:"1804-02-14", t:"1882-03-06", baskent:"Belgrad", harita:"sirbistan",
  tabi:[{f:"1817-01-01", t:"1878-07-13", ust:"osmanli"}],
  ozet:"Sırp devlet sürekliliğinin bir evresi (ülke sürekliliği): 1804 Karacorce isyanı, 1830 özerklik fermanı ve 1878 Berlin Kongresi bağımsızlığıyla ilerledi; 1882'de krallığa dönüştü.",
  kaynak:"sirbistan",
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
  kaynak:"yunanistan",
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
  f:"1516-01-01", t:"1918-11-26", baskent:"Cetinje", harita:"karadag",
  ozet:"Dağlık coğrafyası sayesinde fiilen hiç tam boyun eğmeyen küçük prenslik; 1878'de bağımsızlığı tanındı, 1910'da krallığa dönüştü, I. Dünya Savaşı sonunda Sırbistan'la birleşerek ortadan kalktı.",
  kaynak:"karadag",
  kronoloji:[
    { t:"1516-01-01", tur:"kurulus", b:"Piskopos-prenslik (vladika) olarak örgütlendi, dağlık özerkliğini kurumsallaştırdı" },
    { t:"1696-01-01", tur:"hukumdar", b:"Petrović-Njegoš hanedanı piskopos-prensliği kalıtsal hâle getirdi" },
    { t:"1852-01-01", tur:"bolunme", b:"II. Danilo dinî unvanı bırakıp laik kalıtsal prensliğe dönüştürdü" },
    { t:"1858-05-13", tur:"savas", b:"Grahovo'da Osmanlı ordusunu yenerek fiilî sınırlarını genişletti" },
    { t:"1878-07-13", tur:"toprak-kazanc", b:"Berlin Kongresi'nde bağımsızlığı resmen tanındı, toprakları genişledi" },
    { t:"1910-08-28", tur:"hukumdar", b:"I. Nikola kral ilan edildi, prenslik krallığa dönüştü" },
    { t:"1912-10-08", tur:"savas", b:"Osmanlı'ya savaş ilan eden ilk Balkan devleti oldu — I. Balkan Savaşı başladı" },
    { t:"1918-11-26", tur:"son", b:"Podgorica Meclisi Sırbistan'la birleşmeyi oyladı; Karadağ Krallığı sona erdi" }
  ]
},
{ id:"bulgaristan-prensligi", ad:"Bulgaristan Prensliği", tur:"prenslik", bolge:"balkanlar",
  f:"1878-07-13", t:"1908-10-05", baskent:"Sofya", harita:"bulgaristan",
  tabi:[{f:"1878-07-13", t:"1908-10-05", ust:"osmanli"}],
  ozet:"Bulgar devlet sürekliliğinin bir evresi (ülke sürekliliği): 93 Harbi sonrası Berlin Antlaşması'yla özerk prenslik doğdu, 5 Ekim 1908'de bağımsızlığını ilan etti.",
  kaynak:"bulgaristan",
  kronoloji:[
    { t:"1878-07-13", tur:"kurulus", b:"Berlin Kongresi ile özerk prenslik statüsü kazandı" },
    { t:"1885-09-18", tur:"toprak-kazanc", b:"Doğu Rumeli'yi ilhak etti" },
    { t:"1908-10-05", tur:"son", b:"Bağımsızlığını ilan etti" }
  ]
},
{ id:"romanya", ad:"Romanya", tur:"prenslik", bolge:"balkanlar",
  f:"1859-01-24", t:"1881-03-26", baskent:"Bükreş", harita:"romanya",
  ozet:"Romen devlet sürekliliğinin bir evresi (ülke sürekliliği): Eflak-Boğdan'ın 1859 kişisel birliğiyle doğdu, 1877 bağımsızlık ilanı ve 1878 Berlin Kongresi tanımasıyla pekişti, 1881'de krallığa dönüştü.",
  kaynak:"romanya",
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
  kaynak:"bosna-hersek",
  kronoloji:[
    { t:"1878-07-13", tur:"isgal", b:"Berlin Kongresi ile Avusturya-Macaristan idareyi devraldı" },
    { t:"1908-10-06", tur:"son", b:"Avusturya-Macaristan resmen ilhak etti" }
  ]
},
{ id:"girit-devleti", ad:"Girit Devleti (Özerk)", tur:"gecici-isgal", bolge:"balkanlar",
  f:"1898-12-22", t:"1913-05-30", baskent:"Kandiye → Hanya",
  ozet:"Büyük güçlerin garantörlüğünde kurulan özerk devlet (geçici ara dönem, hanedansız); TDV'nin verdiği karar tarihi 1897-12-18'dir, fiilî yönetim 22 Aralık 1898'de Prens George'un görevine başlamasıyla kuruldu; Balkan Savaşları sonunda Yunanistan'a katıldı.",
  kaynak:"girit",
  kronoloji:[
    { t:"1898-12-09", tur:"kurulus", b:"Büyük güçler garantisinde özerk Girit Devleti kuruldu, Osmanlı bayrağı sembolik kaldı" },
    { t:"1908-10-12", tur:"isyan", b:"Yunanistan'a katılım tek taraflı ilan edildi (tanınmadı)" },
    { t:"1913-05-30", tur:"son", b:"Londra Antlaşması ile Yunanistan'a resmen katıldı" }
  ]
},
{ id:"fransiz-misir-seferi", ad:"Napolyon'un Mısır Seferi", tur:"gecici-isgal", bolge:"misir-sudan",
  f:"1798-07-01", t:"1801-10-02", baskent:"Kahire",
  ozet:"Fransız Devrim ordusunun kısa süreli Mısır işgali (geçici, hanedansız dönem); TDV'nin misir maddesinde yalnız başlık düzeyinde geçiyor (detay yok), standart akademik kaynağa göre 1798 Temmuz'unda başladı, İngiliz-Osmanlı ortak harekâtıyla 1801'de sona erdi.",
  kaynak:"yetersiz — misir maddesi okundu, \"Fransız İşgali ve Sonrası\" başlığı var ama sefer detaylarını (tarih, olaylar) karşılamıyor; dayanak: standart akademik kaynak",
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
  kaynak:"kibris",
  kronoloji:[
    { t:"1878-06-04", tur:"isgal", b:"Kıbrıs Sözleşmesi ile idare İngiltere'ye devredildi (egemenlik Osmanlı'da kaldı)" },
    { t:"1914-11-05", tur:"son", b:"Osmanlı'nın Almanya yanında savaşa girmesiyle İngiltere adayı ilhak etti" }
  ]
},
{ id:"oniki-ada-italyan", ad:"İtalya'nın Oniki Ada İşgali", tur:"gecici-isgal", bolge:"balkanlar",
  f:"1912-05-04", t:"1923-10-29", baskent:"Rodos",
  ozet:"Trablusgarp Savaşı sırasında baskı unsuru olarak işgal edilen adalar; Lozan'a dek resmen tartışmalı statüde kaldı (1923 sonrasında da sürdü).",
  kaynak:"oniki-ada",
  kronoloji:[
    { t:"1912-05-04", tur:"isgal", b:"İtalya, Rodos ve Oniki Ada'yı işgal etti" },
    { t:"1912-10-18", tur:"antlasma", b:"Uşi Antlaşması — adaların geçici olduğu belirtildi (fiilen kalıcılaştı)" }
  ]
},
{ id:"cezayir-fransiz", ad:"Fransız Cezayir İşgali", tur:"gecici-isgal", bolge:"kuzey-afrika",
  f:"1830-07-05", t:"1923-10-29", baskent:"Cezayir",
  ozet:"Cezayir Ocağı'nın (bkz. [[cezayir-ocagi]]) sonunu getiren Fransız işgali; 1962'ye dek (site ufkunun dışında) sürdü. Batı'da Emîr Abdülkādir'in direniş devletiyle (bkz. [[abdulkadir]]) 1847'ye dek fiilen paylaşıldı.",
  kaynak:"cezayir",
  kronoloji:[
    { t:"1830-07-05", tur:"isgal", b:"Fransız ordusu Cezayir'i işgal etti, ocaklık sona erdi" }
  ]
},
{ id:"abdulkadir", ad:"Emîr Abdülkādir Devleti", tur:"devlet", bolge:"kuzey-afrika",
  f:"1832-11-22", t:"1847-12-23", baskent:"Muaskar (Mascara) → gezici karargâh",
  ozet:"Fransız işgaline karşı batı Cezayir kabilelerini birleştiren direniş devleti; Fas Sultanı'nın (Abdurrahman) mânevî metbûiyetini tanıyıp onun adına hutbe okutan, Osmanlı'ya değil Fas'a tâbi bir yapı olduğu için burada 's:' (yabancı sahiplik) değil bu bağımsız kayıtla temsil ediliyor. Fas'ın 1844'te Fransa'ya yenilmesiyle desteği kesilince direniş çöktü. (kaynak: TDV, madde: abdulkadir-el-cezairi)",
  harita:"abdulkadir",
  kaynak:"abdulkadir-el-cezairi",
  kronoloji:[
    { t:"1832-11-22", tur:"kurulus", b:"Batı Cezayir kabileleri tarafından emîrü'l-mü'minîn ilan edildi" },
    { t:"1837-05-30", tur:"antlasma", b:"Tafna Antlaşması ile Fransa iç bölgedeki hâkimiyetini tanıdı" },
    { t:"1839-11-01", tur:"savas", b:"Antlaşma bozuldu, tam ölçekli Fransız-Cezayir savaşı yeniden başladı" },
    { t:"1843-05-16", tur:"toprak-kayip", b:"Smala'nın (gezici başkent) baskınla ele geçirilmesi üzerine Fas'a sığınmak zorunda kaldı" },
    { t:"1844-08-14", tur:"savas", b:"Fas, Isly Savaşı'nda Fransa'ya yenildi; Sultan Abdurrahman desteğini kesti" },
    { t:"1847-12-23", tur:"son", b:"Fransızlara teslim oldu; sonradan Şam'a sürgün edildi" }
  ]
},
{ id:"sarki-rumeli", ad:"Şarkî Rumeli Vilayeti (Özerk)", tur:"gecici-isgal", bolge:"balkanlar",
  f:"1878-07-13", t:"1885-09-18", baskent:"Filibe (Plovdiv)",
  ozet:"Berlin Kongresi'nin Bulgaristan'ı ikiye böldüğü düzenlemede Osmanlı'ya bağlı kalan, Hıristiyan genel valilikle yönetilen özerk vilayet; Filibe darbesiyle fiilen Bulgaristan'a katıldı (bkz. [[bulgaristan-prensligi]]).",
  kaynak:"yetersiz — rumeli maddesi okundu, 1878-85 Şarkî Rumeli özerk vilayet dönemini karşılamıyor (madde Tanzimat/1864 vilayet reformuyla bitiyor); dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1878-07-13", tur:"kurulus", b:"Berlin Kongresi ile Bulgaristan'dan ayrı, Osmanlı'ya bağlı özerk vilayet olarak kuruldu" },
    { t:"1885-09-18", tur:"son", b:"Filibe darbesiyle Bulgaristan Prensliği'ne katıldığını ilan etti (Osmanlı fiilen müdahale etmedi)" }
  ]
},
{ id:"bulgaristan-kralligi", ad:"Bulgaristan Krallığı (Çarlık)", tur:"krallik", bolge:"balkanlar",
  f:"1908-10-05", t:"1923-10-29", baskent:"Sofya", harita:"bulgaristan",
  ozet:"Bulgaristan Prensliği'nin (bkz. [[bulgaristan-prensligi]]) bağımsızlığını ilan edip Çar unvanı almasıyla doğan krallık (1923 sonrasında da sürdü).",
  kaynak:"bulgaristan",
  kronoloji:[
    { t:"1908-10-05", tur:"kurulus", b:"Ferdinand, Bulgaristan'ın tam bağımsızlığını ve kendi Çarlığını ilan etti" },
    { t:"1912-10-08", tur:"savas", b:"Balkan Savaşları'na girdi" },
    { t:"1913-06-29", tur:"savas", b:"II. Balkan Savaşı'nda eski müttefiklerine yenilip toprak kaybetti" }
  ]
},
{ id:"sirbistan-kralligi", ad:"Sırbistan Krallığı", tur:"krallik", bolge:"balkanlar",
  f:"1882-03-06", t:"1918-12-01", baskent:"Belgrad", harita:"sirbistan",
  ozet:"Sırbistan Prensliği'nin (bkz. [[sirbistan-prensligi]]) krallığa dönüşmüş hâli; I. Dünya Savaşı sonunda Sırp-Hırvat-Sloven Krallığı'nda (bkz. [[yugoslavya]]) eridi.",
  kaynak:"sirbistan",
  kronoloji:[
    { t:"1882-03-06", tur:"kurulus", b:"I. Milan kendini kral ilan etti" },
    { t:"1912-10-08", tur:"savas", b:"Balkan Savaşları'na girdi, Kosova ve Makedonya'yı aldı" },
    { t:"1918-12-01", tur:"son", b:"Sırp-Hırvat-Sloven Krallığı'nın kuruluşuyla birleşti" }
  ]
},
{ id:"romanya-kralligi", ad:"Romanya Krallığı", tur:"krallik", bolge:"balkanlar",
  f:"1881-03-26", t:"1923-10-29", baskent:"Bükreş", harita:"romanya",
  ozet:"Romanya Prensliği'nin 1881'de krallığa dönüşmüş hâli (ülke sürekliliği, bkz. [[romanya]]); harita 1923'te proje kapsam sınırından kesiliyor, krallık kendisi 1947'ye kadar sürdü.",
  kaynak:"romanya",
  kronoloji:[
    { t:"1881-03-26", tur:"kurulus", b:"I. Carol kral ilan edildi" },
    { t:"1913-07-10", tur:"savas", b:"II. Balkan Savaşı'na girip Bulgaristan'dan Güney Dobruca'yı aldı" },
    { t:"1916-08-27", tur:"savas", b:"İtilaf yanında I. Dünya Savaşı'na girdi" },
    { t:"1918-12-01", tur:"birlesme", b:"Erdel'in (bkz. [[erdel]]) katılımıyla Büyük Romanya oluştu" }
  ]
},
{ id:"arnavutluk-bagimsiz", ad:"Arnavutluk Prensliği (Bağımsız)", tur:"devlet", bolge:"balkanlar",
  f:"1912-11-28", t:"1923-10-29", baskent:"Vlorë (Avlonya) → Tiran", harita:"arnavutluk",
  ozet:"Balkan Savaşları sırasında ilan edilen bağımsızlık; büyük güçlerin Londra Konferansı'yla sınırları çizildi (1923 sonrasında da sürdü). Ortaçağ İskender Bey direnişinden (bkz. [[arnavutluk-iskenderbey]]) ayrı, modern ulus-devlet kaydı.",
  kaynak:"arnavutluk",
  kronoloji:[
    { t:"1912-11-28", tur:"kurulus", b:"İsmail Kemal Vlorë'de bağımsızlığı ilan etti" },
    { t:"1913-07-29", tur:"antlasma", b:"Londra Konferansı sınırları uluslararası tanıdı" },
    { t:"1914-03-07", tur:"hukumdar", b:"Prens Wilhelm zu Wied tahta çıktı (Ekim'de I. Dünya Savaşı kargaşasında ülkeyi terk etti)" },
    { t:"1920-01-21", tur:"kurulus", b:"Lushnjë Kongresi ile fiilî hükûmet yeniden kuruldu" }
  ]
},
// ============ TIER 9 — HARİTA BOYA KİMLİKLERİNİN DİZİN KARŞILIKLARI ============
// (data/devletler_harita.js'te boyanan, dizinde henüz olmayan devletler)

{ id:"ispanya", ad:"İspanya (Kastilya-Aragon)", tur:"krallik", bolge:"iberya",
  f:"1479-01-20", t:"1923-10-29", baskent:"Madrid", harita:"ispanya",
  ozet:"Kastilya-Aragon birliğiyle doğan krallık; Akdeniz'de Osmanlı'nın 16. yüzyıldaki ana deniz rakibi (1923 sonrasında da sürdü).",
  kaynak:"ispanya",
  kronoloji:[
    { t:"1479-01-20", tur:"birlesme", b:"Kastilya ile Aragon tacları birleşti" },
    { t:"1492-01-02", tur:"toprak-kazanc", b:"Gırnata'nın düşüşüyle Reconquista tamamlandı" },
    { t:"1535-07-21", tur:"savas", b:"Şarlken Tunus'u aldı (1574'te kesin olarak Osmanlı'ya geçti)" },
    { t:"1571-10-07", tur:"savas", b:"İnebahtı'da Kutsal İttifak donanmasının belkemiğini oluşturdu" },
    { t:"1580-06-01", tur:"antlasma", b:"Osmanlı ile fiilî ateşkes — Akdeniz cephesi duruldu" }
  ]
},
{ id:"granada", ad:"Gırnata (Nasrî) Emirliği", tur:"devlet", bolge:"iberya",
  f:"1238-05-12", t:"1492-01-02", baskent:"Gırnata", harita:"granada",
  ozet:"İber yarımadasındaki son Müslüman devlet (hanedan ömrü, Nasrîler); 1238'de Gırnata'yı merkez yaparak kuruldu, yardım çağrıları Osmanlı'ya ulaştıysa da 2 Ocak 1492'de düştü. ⚠️ 10 Ağustos 2026: f: 1238-01-01 → 1238-05-12 (TDV `girnata`/`nasriler`: 26 Ramazan 635 / 12 Mayıs 1238, tam gün).",
  kaynak:"girnata + nasriler (TDV, hükümdar kronolojisi daha ayrıntılı)",
  kronoloji:[
    { t:"1238-05-12", tur:"kurulus", b:"İbnü'l-Ahmer (Muhammed b. Yûsuf b. Nasr), İbn Hûd'un öldürülmesi üzerine bağımsızlığını ilan edip Gırnata'yı ele geçirdi, Nasrî Devleti'ni kurdu (26 Ramazan 635, TDV nasriler maddesi)" },
    { t:"1340-10-30", tur:"savas", b:"Nasrî-Merînî müttefik kuvvetleri Río Salado'da Kastilya-Aragon-Portekiz ittifakına ağır yenildi; Cezîretülhadrâ ve Tarîf kaybedildi, 1344'te barış yapıldı (TDV nasriler, olayı isimsiz anlatıyor; tam gün Britannica 'Battle of Río Salado' — taneciklik boşluğu)" },
    { t:"1482-01-01", tur:"isyan", b:"Ebû Abdullah (Boabdil), babası Ebü'l-Hasan Ali'ye karşı isyan başlattı; ülke fiilen üçe bölündü (Gırnata-Ebü'l-Hasan, Mâleka-Zagal, Vâdîâş-Boabdil) (887 AH, TDV nasriler maddesi)" },
    { t:"1483-01-01", tur:"savas", b:"Boabdil, Kastilya'ya ait Lûsinâ'ya (Lucena) saldırdı ama Kurtuba yakınında yenilip esir düştü (TDV nasriler maddesi)" },
    { t:"1492-01-02", tur:"son", b:"Ebû Abdullah (Boabdil) şehri Katolik krallara teslim etti" }
  ]
},
{ id:"portekiz", ad:"Portekiz Krallığı", tur:"krallik", bolge:"iberya",
  f:"1139-07-25", t:"1923-10-29", baskent:"Lizbon", harita:"portekiz",
  ozet:"Hint Okyanusu'nda Osmanlı'nın 16. yüzyıl rakibi: Kızıldeniz, Basra Körfezi ve Umman kıyılarında donanmalar çarpıştı (1923 sonrasında da sürdü).",
  kaynak:"portekiz",
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
  kaynak:"almanya",
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
  kaynak:"hollanda",
  kronoloji:[
    { t:"1579-01-23", tur:"antlasma", b:"Kuzey eyaletleri Utrecht Birliği'ni imzalayıp İspanya'ya karşı askerî-siyasî birlik kurdu; 1581'deki bağımsızlık ilanının hukukî temeli oldu (TDV hollanda maddesi)" },
    { t:"1581-07-26", tur:"kurulus", b:"Bağımsızlık ilanı (İspanya'dan ayrılış)" },
    { t:"1602-03-20", tur:"kurulus", b:"Dağınık ticaret şirketleri birleştirilip Hollanda Doğu Hindistan Şirketi (VOC) kuruldu, Asya'daki ticarî-siyasî gücün temelini attı (TDV hollanda maddesi)" },
    { t:"1612-07-06", tur:"antlasma", b:"Osmanlı kapitülasyonları verildi, elçilik açıldı" },
    { t:"1648-01-30", tur:"antlasma", b:"Vestfalya barışının parçası olan Münster Antlaşması ile İspanya, Felemenk Cumhuriyeti'nin bağımsızlığını resmen tanıdı (TDV hollanda maddesi, doğrudan)" },
    { t:"1780-12-20", tur:"savas", b:"İngiltere, Amerikan Bağımsızlık Savaşı sırasındaki düşman devletlerle ticaretini gerekçe göstererek Hollanda'ya savaş ilan etti; dört yıllık savaş Hollanda'nın deniz gücünü ağır sarstı (TDV hollanda maddesi)" }
  ]
},
{ id:"danimarka", ad:"Danimarka Krallığı (1814'e kadar Danimarka-Norveç)", tur:"krallik", bolge:"kuzey-avrupa",
  f:"1281-01-01", t:"1923-10-29", baskent:"Kopenhag", harita:"danimarka",
  ozet:"Krallık VI. yüzyıla uzanır (TDV); 1380 Norveç ile kişisel birliğin başlangıcıdır, devletin kendi kuruluşu değil (bkz. [[norvec-kralligi]]). Kiel Antlaşması'yla Norveç'i kaybettikten sonra da Danimarka tek başına sürdü. Osmanlı ile 1756'da dostluk ve ticaret antlaşması imzaladı (1923 sonrasında da sürdü). Bkz. [[norvec]] (1814-1905 arası İsveç'le birlik, sonra bağımsız). ⚠️ VERİ DEVLET (7 Ağustos 2026) DÜZELTTİ: `f:` 1380'den 1281'e çekildi — TDV `danimarka` maddesi sürekliliği VI. yüzyıla dayandırıyor, 1281-1380 arasında bir kopuş yok; 1380 yalnız Norveç birliğinin başlangıcıydı, devletin kendi kuruluşu değildi.",
  kaynak:"danimarka",
  kronoloji:[
    { t:"1380-01-01", tur:"ittifak", b:"IV. Olav'ın tahta çıkışıyla Norveç ile kişisel birlik başladı (bkz. [[norvec-kralligi]])" },
    { t:"1756-10-14", tur:"antlasma", b:"Osmanlı-Danimarka dostluk ve ticaret antlaşması" },
    { t:"1814-01-14", tur:"bolunme", b:"Kiel Antlaşması ile Norveç, İsveç'e bırakıldı; Danimarka-Norveç birliği sona erdi" }
  ]
},
{ id:"umman", ad:"Umman (Ya'rubî / Bû Saîd) Sultanlığı", tur:"sultanlik", bolge:"arabistan",
  f:"1624-01-01", t:"1923-10-29", baskent:"Nizva → Maskat", harita:"umman",
  ozet:"Doğu Afrika kıyısına uzanan denizci sultanlık (hanedan ömrü, önce Ya'rubîler sonra Bû Saîdler); Portekizlileri Maskat'tan attı (1923 sonrasında da sürdü, harita kapsamı burada kesiliyor).",
  kaynak:"uman",
  kronoloji:[
    { t:"1624-01-01", tur:"kurulus", b:"Nâsır b. Mürşid, iç karışıklıklar sürecinde bölge ileri gelenlerinin biatıyla imam seçilip Ya'rubî hânedanını kurdu (TDV yarubiler maddesi; kuruluş için 1615/1624 iki tarih veriyor, atlasın f: alanıyla uyumlu 1624 kullanıldı)" },
    { t:"1650-01-26", tur:"toprak-kazanc", b:"Maskat, Portekiz'den alındı" },
    { t:"1749-06-10", tur:"hukumdar", b:"Bû Saîd hanedanı kuruldu" },
    { t:"1798-01-18", tur:"ittifak", b:"İngiltere ile 'kavilnâme' adlı anlaşma imzalandı, İngilizler Maskat'ta temsilcilik açtı; Uman-İngiliz ilişkileri başladı (TDV uman maddesi)" },
    { t:"1856-01-01", tur:"bolunme", b:"Seyyid Saîd b. Sultân'ın ölümüyle ülke, Zengibar'da kalan oğlu Mâcid ile Maskat'ta kalan oğlu Süveynî arasında paylaştırıldı (TDV uman maddesi)" },
    { t:"1862-01-01", tur:"antlasma", b:"İngiltere, Fransa ve Almanya'nın kararıyla Zengibar ve Umman birbirinden bağımsız iki ayrı devlet olarak tanındı (TDV uman maddesi)" }
  ]
},
{ id:"suud-ikinci", ad:"II. Suûdî Devleti (Necid Emirliği)", tur:"devlet", bolge:"arabistan",
  f:"1824-06-01", t:"1891-01-24", baskent:"Riyad", harita:"suud",
  ozet:"Dir'iye'nin yıkımından sonra Riyad merkezli yeniden kurulan emirlik; Şammar (Reşîdî) emirliğine yenilerek dağıldı. Bkz. [[suud-birinci]], [[suud-ucuncu]].",
  kaynak:"necid",
  kronoloji:[
    { t:"1824-06-01", tur:"kurulus", b:"Türkî bin Abdullah Riyad'ı geri aldı" },
    { t:"1891-01-24", tur:"son", b:"Müleyde yenilgisiyle Şammar (Hâil) emirliği Necid'e hâkim oldu" }
  ]
},
{ id:"suud-ucuncu", ad:"III. Suûdî Devleti (Necid ve Hicaz Sultanlığı)", tur:"devlet", bolge:"arabistan",
  f:"1902-01-15", t:"1923-10-29", baskent:"Riyad", harita:"suud",
  ozet:"Abdülazîz bin Suûd'un Riyad'ı Reşîdîlerden geri almasıyla kurulan, sonradan Suûdî Arabistan Krallığı'na dönüşen devlet; site ufkunun (1923) ötesinde de sürdü. Bkz. [[suud-ikinci]], [[sammar]].",
  kaynak:"abdulaziz-b-suud",
  kronoloji:[
    { t:"1902-01-15", tur:"kurulus", b:"Abdülazîz bin Suûd Riyad'ı geri alarak üçüncü Suûdî devletini kurdu" },
    { t:"1921-11-02", tur:"toprak-kazanc", b:"Şammar (Hâil) emirliğinin teslimiyle Kuzey Necid'e hâkim oldu" }
  ]
},
{ id:"sammar", ad:"Şammar (Reşîdî) Emirliği", tur:"devlet", bolge:"arabistan",
  f:"1835-01-01", t:"1921-11-02", baskent:"Hâil", harita:"sammar",
  ozet:"Hâil merkezli Arap emirliği (hanedan ömrü, Reşîdîler); 1835'te Cebel Şammar'da kuruldu, Osmanlı'ya yakın durup Suûdîlerin tarihî rakibi oldu, 1921'de yıkıldı. ⚠️ 10 Ağustos 2026: f: 1836 → 1835 düzeltildi — TDV `residiler` maddesi kuruluşu net biçimde 1835 veriyor.",
  kaynak:"residiler",
  kronoloji:[
    { t:"1835-01-01", tur:"kurulus", b:"Abdullah b. Reşîd, kardeşi Ubeyd ile İbn Ali ailesine karşı mücadeleyi kazanıp Hâil emirliğini ele geçirdi, Reşîdî hânedanının hâkimiyetini kurdu (TDV residiler maddesi)" },
    { t:"1891-01-24", tur:"toprak-kazanc", b:"Müleyde zaferiyle Necid'i ele geçirdi" },
    { t:"1902-01-15", tur:"toprak-kayip", b:"İbn Suûd, Reşîdîler'in elindeki Riyad'ı geri aldı; Suûdî-Reşîdî mücadelesinde dönüm noktası oldu (TDV residiler maddesi)" },
    { t:"1906-01-01", tur:"savas", b:"Reşîdî Emîri Abdülazîz b. Mut'ab, İbn Suûd'la savaşta öldü; Kasîm bölgesi de Suûdîler'e geçip emirlik zayıflamaya başladı (TDV residiler maddesi)" },
    { t:"1921-11-02", tur:"son", b:"Hâil, İbn Suûd'a teslim oldu" }
  ]
},
{ id:"hicaz-kralligi", ad:"Hicaz Krallığı (Şerif Hüseyin)", tur:"krallik", bolge:"arabistan",
  f:"1916-06-10", t:"1923-10-29", baskent:"Mekke", harita:"hicaz",
  ozet:"Şerîf Hüseyin 10 Haziran 1916'da isyanı başlattı ve Hicaz'da fiilî hâkimiyet o gün el değiştirdi; \"Hicaz Kralı\" unvanı Kasım 1916'da ilân edildi. Künye fiilî hâkimiyeti ölçer, unvanı değil. 1925'te (site ufkunun dışında) Suûdîlerce yıkıldı.",
  kaynak:"serif-huseyin",
  kronoloji:[
    { t:"1916-06-10", tur:"isyan", b:"Şerif Hüseyin Mekke'de isyan bayrağını açtı" },
    { t:"1919-01-10", tur:"toprak-kazanc", b:"Medine'deki son Osmanlı garnizonu (Fahreddin Paşa sonrası) teslim oldu" }
  ]
},
{ id:"funj", ad:"Func (Sennâr) Sultanlığı", tur:"sultanlik", bolge:"misir-sudan",
  f:"1504-01-01", t:"1821-06-14", baskent:"Sennâr", harita:"funj",
  ozet:"Nil boyunda üç asır hüküm süren Müslüman sultanlık; Kavalalı'nın Sudan seferiyle yıkıldı. Bkz. [[misir-kavalali]].",
  kaynak:"func",
  kronoloji:[
    { t:"1504-01-01", tur:"kurulus", b:"Amara Dunkas tarafından kuruldu" },
    { t:"1523-01-01", tur:"hukumdar", b:"Animist/hıristiyan olan kurucu sultan Amâre, Müslüman lider Abdullah Cemmâ'nın baskısıyla İslâmiyet'i kabul etti (TDV func maddesi: 'tahminen 1523'ten sonra', gün/ay TDV'de yok)" },
    { t:"1649-01-01", tur:"hukumdar", b:"II. Bâdî tahta çıktı; sultanlık Üçüncü Şelâle'den Mavi Nil'e, Kızıldeniz'den Kordofan'a uzanan en geniş sınırlarına bu dönemde ulaştı (TDV func maddesi)" },
    { t:"1770-01-01", tur:"isyan", b:"Şâyikıyye kabilesi bağımsızlığını ilan edip Benî Abdellâb'a vergi ödemeyi reddetti; merkezî otorite bu tarihten itibaren zayıflamaya başladı (TDV func maddesi)" },
    { t:"1820-01-01", tur:"isgal", b:"Kavalalı Mehmed Ali Paşa'nın Mısır ordusu Sudan'ı fethetmeye başladı; Func nüfuzu fiilen sona erdi (TDV func maddesi)" },
    { t:"1821-06-14", tur:"son", b:"İsmâil Kâmil Paşa'nın ordusuna direnmeden teslim oldu" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — ARAŞTIRMA KÜNYE 3 teslimi (denetim/DALGA2-
// ARASTIRMA.md): `darfur` harita kimliği künyenin ömrünün (1603-1916)
// ÖNCESİNDE de (1281-1603) kullanılıyordu; orada Keira'dan önce SIRAYLA iki
// ayrı hanedan hüküm sürdü. Kaynak: TDV `darfur` (canlı) — kendi maddesinin
// içinde, `dacu`/`tunciler` sluglarının ikisi de 302 ölü.
{ id:"dacu", ad:"Dâcû (Daju) Hanedanlığı", tur:"hanedanlik", bolge:"misir-sudan",
  f:"1200-01-01", t:"1400-01-01", baskent:"— (TDV'de belirtilmemiş)",
  ozet:"Darfur'a ilk yerleşip ilk devleti kuran kabile olarak kabul edilen Dâcû'ların XIII-XIV. yüzyıllar boyunca sürdürdüğü hâkimiyet; yerini Tunciler'e bıraktı (bkz. [[tunciler]]). ⚠️ TDV yalnız yüzyıl veriyor, kesin yıl yok — f/t yüzyıl ortası/başı konvansiyonuyla yazıldı, kesinlik düşük. 🔴 10 Ağustos 2026: TDV `darfur` maddesinin TAM METNİ (ham HTML) satır satır tarandı — Dâcû hanedanı için isimsiz TEK bir cümle dışında hükümdar adı, olay ya da komşu ilişkisi YOK. Zenginleştirme aranmadı değil, ARANDI VE BULUNAMADI; bu hanedan gerçekten bu kadar kısa geçiyor, uydurulmadı. (kaynak: TDV, madde: darfur)",
  kaynak:"darfur",
  kronoloji:[
    { t:"1200-01-01", tur:"kurulus", b:"Dâcû kabilesi Darfur'a yerleşip bölgenin ilk devletini kurdu (TDV: XIII-XIV. yüzyıl)" },
    { t:"1400-01-01", tur:"son", b:"Hâkimiyet Tunciler'e (Tunjur) geçti" }
  ]
},
{ id:"tunciler", ad:"Tunciler (Tunjur) Hanedanlığı", tur:"hanedanlik", bolge:"misir-sudan",
  f:"1400-01-01", t:"1695-01-01", baskent:"— (TDV'de belirtilmemiş)",
  ozet:"Dâcû'lardan ticarî ve siyasî hâkimiyeti devralan hanedan; TDV \"XV. yüzyılda özellikle orta bölgedeki durum tamamen Tuncûrlar'ın lehine dönmüştür\" diyor. Keira/Fur hanedanının konsolidasyonuyla (Süleyman Solonc, 1695-1715) sona erdi. ⚠️ Bitiş tarihi (1695) TDV'nin kendi verdiği Süleyman Solonc saltanat başlangıcından alındı — bu, mevcut `darfur` künyesindeki 1603 tarihiyle İLİŞKİLİ ama ondan BAĞIMSIZ yazıldı; o tartışma ayrıca raporlandı (bkz. VERI-DEVLET-GOREV.md), bu künye kendi başına değiştirilmedi. (kaynak: TDV, madde: darfur)",
  kaynak:"darfur",
  kronoloji:[
    { t:"1400-01-01", tur:"kurulus", b:"Tunciler, orta Darfur'da ticarî ve siyasî hâkimiyeti Dâcû'lardan devraldı" },
    { t:"1690-01-01", tur:"isyan", b:"Bûmû el-Kasîr'in istilâsıyla gelen karışıklığın ardından Tunciler'in hâkimiyeti Süleyman Solonc önderliğindeki Kîrâ (Fûr) sülâlesince ele geçirildi (TDV darfur maddesi: 'XVII. yüzyılın sonları', gün/yıl yok, mevcut t:1695 ile tutarlı olsun diye yaklaşık yerleştirildi)" },
    { t:"1695-01-01", tur:"son", b:"Süleyman Solonc'un saltanatıyla Keira/Fur hanedanı hâkimiyeti konsolide etti (bkz. [[darfur]])" }
  ]
},
{ id:"darfur", ad:"Dârfûr Sultanlığı (Keira Hanedanı)", tur:"sultanlik", bolge:"misir-sudan",
  f:"1695-01-01", t:"1916-11-06", baskent:"El-Faşir", harita:"darfur",
  ozet:"Sudan'ın batısında Fur halkının Keira hanedanınca kurduğu Müslüman sultanlık; Mısır'a bağlanıp Mehdî döneminde arada kesintiye uğradı, Ali Dinar'ın restorasyonuyla 1916'da İngiliz-Mısır ordusuna yenilene dek sürdü. ⚠️ VERİ DEVLET (7 Ağustos 2026) DÜZELTTİ: `f:` 1603'ten 1695'e çekildi — önceki 1603 tarihi kaynaksızdı (\"standart akademik kaynak\" deniyordu ama hangisi belirtilmemişti); TDV `darfur` maddesi Süleyman Solonc'un hükümdarlığını ve sultanlığın asıl konsolidasyonunu birebir \"1695-1715\" diye tarihliyor, TDV birincil kaynak kuralı (§4) gereği o esas alındı. Selefi için bkz. [[tunciler]] (1400-1695, zincir kesintisiz). (kaynak: TDV, madde: darfur)",
  kaynak:"darfur",
  kronoloji:[
    { t:"1695-01-01", tur:"kurulus", b:"Süleyman Solon (Solong) tarafından Keira hanedanı hâkimiyeti konsolide edildi (TDV: saltanatı 1695-1715)" },
    { t:"1874-11-02", tur:"toprak-kayip", b:"Mısır valisi İsmâil Paşa'nın seferiyle sultanlık ilhak edildi" },
    { t:"1898-09-02", tur:"kurulus", b:"Mehdî Devleti'nin yıkılmasıyla Ali Dinar sultanlığı yeniden kurdu (bkz. [[mehdi]])" },
    { t:"1916-11-06", tur:"son", b:"Ali Dinar, İngiliz-Mısır seferi karşısında öldürüldü; sultanlık kesin olarak sona erdi" }
  ]
},
{ id:"habesistan", ad:"Habeşistan İmparatorluğu", tur:"imparatorluk", bolge:"dogu-afrika",
  f:"1270-01-01", t:"1923-10-29", baskent:"Gondar → Addis Ababa", harita:"habesistan",
  ozet:"Afrika'nın en eski Hristiyan devleti; 16. yüzyılda Osmanlı destekli Adal ordularıyla ölüm kalım savaşı yaptı (1923 sonrasında da sürdü).",
  kaynak:"habesistan",
  kronoloji:[
    { t:"1270-01-01", tur:"kurulus", b:"Yekuno Amlak, Zagwe hanedanına son verip Süleymanî hanedanını yeniden kurdu" },
    { t:"1529-03-09", tur:"savas", b:"Ahmed Gran'ın Şimbra Kure zaferi — Adal istilası başladı" },
    { t:"1543-02-21", tur:"savas", b:"Wayna Daga'da Portekiz destekli ordu Adal'ı kırdı" },
    { t:"1636-01-01", tur:"hukumdar", b:"Fasilidas, Gondar'ı başkent yaptı" },
    { t:"1769-01-01", tur:"bolunme", b:"Zemene Mesafint (Prensler Çağı) başladı, merkezi otorite fiilen çöktü" },
    { t:"1855-02-11", tur:"birlesme", b:"II. Tewodros taç giyerek ülkeyi yeniden birleştirdi" },
    { t:"1887-01-06", tur:"toprak-kazanc", b:"Harar ilhak edildi" },
    { t:"1889-03-02", tur:"antlasma", b:"Uccialli (Wuchale) Antlaşması imzalandı, II. Menelik tahta çıktı" },
    { t:"1896-03-01", tur:"savas", b:"Adva'da İtalya'yı yenerek bağımsızlığını korudu" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — ARAŞTIRMA KÜNYE 3: `adal` harita kimliği
// künyenin ömrünün (1415-1887) ÖNCESİNDE de (1281-1415) kullanılıyordu;
// orada Adal'ın doğrudan selefi Evfât hüküm sürüyordu. ⚠️ `evfat` slug'ı
// (TDV, 200) İfat'a dair kendi maddesi; `harar` maddesi (200) de aynı
// tarihleri çapraz doğruladı ("burada kurulan ilk müslüman devlet Evfât
// Emirliği'dir, 1285-1415").
{ id:"evfat", ad:"Evfât (İfat) Emirliği", tur:"devlet", bolge:"dogu-afrika",
  f:"1285-01-01", t:"1415-01-01", baskent:"— (TDV'de şehir adı belirtilmemiş)",
  ozet:"Ömer Veleşma'ın oğlu Ali'nin Şüve'yi de topraklarına katarak kurduğu, Habeşistan'ın Müslüman uçlarındaki ilk emirlik; 1332'de Habeş İmparatoru Amda Sion'un saldırısıyla büyük toprak kaybına uğradı, 1415'te son sultanı Sâdeddin Zeyla adasında kıstırılıp öldürülünce sona erdi — yerini güneyde Adal (Zeyla) Emirliği aldı (bkz. [[adal]]). (kaynak: TDV, madde: evfat, harar)",
  kaynak:"evfat",
  kronoloji:[
    { t:"1285-01-01", tur:"kurulus", b:"Ömer Veleşma'ın oğlu Ali, Şüve'yi topraklarına katarak Evfât Emirliği'ni kurdu (684)" },
    { t:"1332-01-01", tur:"toprak-kayip", b:"Habeş İmparatoru Amda Sion, Zeyla' ve Evfât topraklarının büyük kısmını ele geçirdi" },
    { t:"1415-01-01", tur:"son", b:"Son sultan Sâdeddin, Zeyla adasına sığındıysa da kıstırılıp öldürüldü; emirlik sona erdi" }
  ]
},
{ id:"adal", ad:"Adal Sultanlığı / Harar Emirliği", tur:"sultanlik", bolge:"dogu-afrika",
  f:"1415-01-01", t:"1887-01-06", baskent:"Zeyla → Harar", harita:"adal",
  ozet:"Osmanlı'dan top ve tüfek desteği alarak Habeşistan'ı istila eden sultanlık; ardılı Harar emirliği 1887'de Habeş'e katıldı.",
  kaynak:"harar",
  kronoloji:[
    { t:"1529-03-09", tur:"savas", b:"Ahmed Gran önderliğinde Habeş istilası başladı" },
    { t:"1543-02-21", tur:"savas", b:"Ahmed Gran öldü, istila çöktü" },
    { t:"1577-01-01", tur:"bolunme", b:"Devlet dağıldı, Harar emirliği ardıl kaldı" },
    { t:"1887-01-06", tur:"son", b:"Harar, Habeşistan'a katıldı" }
  ]
},
{ id:"kaffa-kralligi", ad:"Kaffa Krallığı", tur:"krallik", bolge:"dogu-afrika",
  f:"1390-01-01", t:"1897-09-10", baskent:"Bonga", harita:"kaffa",
  ozet:"Güneybatı Habeşistan'da Gomara/Minjo hanedanınca kurulan, kahve bitkisinin adını aldığı söylenen krallık; Habeş İmparatoru II. Menelik'in seferiyle ilhak edildi. TDV'de ayrı maddesi yok, tarihler standart akademik kaynaklara göredir, kesinlik düşük.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1390-01-01", tur:"kurulus", b:"Minjo hanedanı tarafından kuruldu (gelenek)" },
    { t:"1897-09-10", tur:"son", b:"Ras Wolde Giyorgis komutasındaki Habeş ordusu son kral Gaki Şeroço'yu esir aldı" }
  ]
},
{ id:"cimma-sultanligi", ad:"Cimma (Jimma) Sultanlığı", tur:"sultanlik", bolge:"dogu-afrika",
  f:"1830-01-01", t:"1923-10-29", baskent:"Cirén (Jiren)", harita:"cimma",
  ozet:"Gibe bölgesindeki Oromo krallıklarından, Kaffa'ya bağlılıktan koparak İslâm'a geçen hanedanınca kurulan sultanlık; Habeşistan'a haraca bağlandıktan sonra da iç özerkliğini uzun süre korudu (1923 sonrasında da sürdü). TDV'de ayrı maddesi yok, tarihler standart akademik kaynaklara göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1830-01-01", tur:"kurulus", b:"Abba Cifar I, İslâm'ı kabul ederek Kaffa vasallığından koptu ve sultanlığı kurdu" },
    { t:"1882-01-01", tur:"antlasma", b:"Abba Cifar II, Habeşistan'a haraç ödemeyi kabul etti (iç özerklik korundu)" }
  ]
},
{ id:"sidamo-kralliklari", ad:"Sidamo Krallıkları", tur:"devlet", bolge:"dogu-afrika",
  f:"1281-01-01", t:"1897-01-01", baskent:"çeşitli merkezler", harita:"sidamo",
  ozet:"Güney Habeşistan'da birden fazla küçük Sidama krallığından oluşan gevşek topluluk; tek bir kuruluş tarihi yok, II. Menelik'in seferleriyle 1890'ların ortasında Habeşistan'a katıldı. TDV'de ayrı maddesi yok, tarihler standart akademik kaynaklara göredir, kesinlik düşük.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1897-01-01", tur:"son", b:"II. Menelik'in seferleriyle Habeşistan'a katıldı" }
  ]
},
{ id:"vollayta-kralligi", ad:"Vollayta (Wolaita) Krallığı", tur:"krallik", bolge:"dogu-afrika",
  f:"1281-01-01", t:"1894-01-17", baskent:"Dalgaç (Damot Sore)", harita:"vollayta",
  ozet:"Güney Habeşistan'da eski ve köklü bir krallık (Kawo hanedanı); kuruluşu efsanevi Motolomi dönemine dayanır, II. Menelik'in fetih seferiyle 1894'te sona erdi. TDV'de ayrı maddesi yok, tarihler standart akademik kaynaklara göredir, kesinlik düşük.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1894-01-17", tur:"son", b:"Ras Wolde Giyorgis komutasındaki Habeş ordusu Kral Tona'yı yenip krallığı ilhak etti" }
  ]
},

{ id:"zaporojye", ad:"Zaporojye Kazak Hetmanlığı", tur:"cumhuriyet", bolge:"sibirya-bozkir",
  f:"1552-01-01", t:"1775-06-16", baskent:"Zaporojye Seçi", harita:"zaporojye",
  ozet:"Dinyeper aşağısında yarı-askerî kazak topluluğu; zaman zaman Osmanlı/Kırım'a karşı Rusya'yla, zaman zaman onlara karşı Osmanlı'yla ittifak kurdu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
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
  f:"1075-01-01", t:"1308-01-01", baskent:"İznik → Konya", harita:"selcuklu",
  ozet:"Malazgirt sonrası Anadolu'yu Türkleştiren ilk büyük devlet; Moğol baskısıyla beyliklere parçalandı, Osmanlı'nın da doğduğu siyasi zemini bıraktı. (kaynak: TDV, madde: selcuklular)",
  kaynak:"selcuklular",
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
  kaynak:"ilhanlilar",
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
  kaynak:"timur",
  kronoloji:[
    { t:"1370-04-09", tur:"kurulus", b:"Timur, Semerkant'ta hükümdarlığını ilan etti" },
    { t:"1387-01-01", tur:"savas", b:"İsfahan isyanı bastırılırken şehir yağmalandı" },
    { t:"1398-12-17", tur:"savas", b:"Delhi Sultanlığı'nı yenip şehri yağmaladı" },
    { t:"1400-01-01", tur:"toprak-kazanc", b:"Halep ve Şam'ı ele geçirdi (bkz. [[memluk]])" },
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
  kaynak:"eretnaogullari",
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
  kaynak:"kadi-burhaneddin",
  kronoloji:[
    { t:"1381-01-01", tur:"kurulus", b:"Kadı Burhâneddin Ahmed, Eretna beyliğine son verip sultanlığını ilan etti" },
    { t:"1393-01-01", tur:"antlasma", b:"Timur'un tâbiiyet talebini reddetti" },
    { t:"1398-01-01", tur:"son", b:"Akkoyunlu Kara Yülük Osman Bey'le savaşta yenilip öldürüldü; oğlunun kısa direnişinden sonra Sivas Osmanlı'ya katıldı" }
  ]
},
{ id:"artuklu", ad:"Artukoğulları (Artuklu Beyliği)", tur:"beylik", bolge:"anadolu",
  f:"1102-01-01", t:"1409-01-01", baskent:"Hasankeyf / Mardin / Harput", harita:"artuklu",
  ozet:"Malazgirt sonrası Diyarbekir-Mardin bölgesinde üç kola (Hasankeyf, Mardin, Harput) ayrılarak üç asır hüküm süren Türkmen beyliği; en uzun ömürlü Mardin kolu Karakoyunlu baskısıyla sona erdi. (kaynak: TDV, madde: artuklular)",
  kaynak:"artuklular",
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
  kaynak:"yetersiz — ahilik maddesi okundu, Ahi teşkilatının varlığını doğruluyor ama Ankara'yı 14. yüzyılda fiilen yönettiği iddiasını karşılamıyor (yalnız İbn Battûta'nın genel gözlemi var); dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1290-01-01", tur:"kurulus", b:"Selçuklu otoritesinin çökmesiyle Ahi teşkilatı Ankara'yı fiilen yönetmeye başladı" },
    { t:"1354-01-01", tur:"son", b:"Süleyman Paşa, Ankara'yı Osmanlı topraklarına kattı" }
  ]
},
{ id:"cobanogullari", ad:"Çobanoğulları", tur:"beylik", bolge:"anadolu",
  f:"1211-01-01", t:"1309-01-01", baskent:"Kastamonu", harita:"cobanogullari",
  ozet:"Selçuklu uç beyi Hüsâmeddin Çoban'ın Kastamonu'da kurduğu beylik; Candaroğulları tarafından ilhak edildi. (kaynak: TDV, madde: cobanogullari)",
  kaynak:"cobanogullari",
  kronoloji:[
    { t:"1211-01-01", tur:"kurulus", b:"Hüsâmeddin Çoban, Kastamonu uç beyi olarak beyliğini kurdu" },
    { t:"1224-01-01", tur:"toprak-kazanc", b:"Kırım'da Suğdak limanını Moğollardan geri aldı" },
    { t:"1309-01-01", tur:"son", b:"Candaroğlu Süleyman Bey, son emir Mahmud'u yenerek beyliğe son verdi" }
  ]
},
{ id:"pervane", ad:"Pervâneoğulları (Sinop)", tur:"beylik", bolge:"anadolu",
  f:"1277-01-01", t:"1322-01-01", baskent:"Sinop", harita:"pervane",
  ozet:"Selçuklu veziri Pervâne'nin oğlunun Sinop'ta kurduğu deniz beyliği; Candaroğulları tarafından ilhak edildi. (kaynak: TDV, madde: pervaneogullari)",
  kaynak:"sinop",
  kronoloji:[
    { t:"1277-01-01", tur:"kurulus", b:"Muînüddin Mehmed, Sinop'ta beyliğini kurdu" },
    { t:"1300-01-01", tur:"hukumdar", b:"Gazi Çelebi tahta çıktı, deniz gücüne yöneldi" },
    { t:"1322-01-01", tur:"son", b:"Candaroğlu Süleyman Bey, Sinop'u ilhak etti" }
  ]
},
{ id:"esrefogullari", ad:"Eşrefoğulları", tur:"beylik", bolge:"anadolu",
  f:"1277-01-01", t:"1326-01-01", baskent:"Beyşehir", harita:"esrefogullari",
  ozet:"Göller bölgesinde kurulan kısa ömürlü beylik; toprakları Hamîdoğulları, Sâhib Ataoğulları ve Karamanoğulları arasında paylaşıldı. (kaynak: TDV, madde: esrefogullari)",
  kaynak:"esrefogullari",
  kronoloji:[
    { t:"1277-01-01", tur:"kurulus", b:"Seyfeddin Süleyman Bey tarafından kuruldu" },
    { t:"1326-01-01", tur:"son", b:"İlhanlı memuru Demirtaş'ın müdahalesiyle dağıldı, toprakları komşu beyliklere kaldı" }
  ]
},
{ id:"inancogullari", ad:"İnançoğulları (Denizli/Lâdik Beyliği)", tur:"beylik", bolge:"anadolu",
  f:"1261-01-01", t:"1368-01-01", baskent:"Isparta-Alâiye → Denizli", harita:"inancogullari",
  ozet:"Önce Isparta-Alâiye ve Elmalı'da, sonra yalnız Denizli çevresinde hüküm süren Türkmen beyliği; Germiyanoğulları'na bağlanarak sona erdi. (kaynak: TDV, madde: inancogullari)",
  kaynak:"inancogullari",
  kronoloji:[
    { t:"1261-01-01", tur:"kurulus", b:"Mehmed Bey tarafından kuruldu" },
    { t:"1292-01-01", tur:"hukumdar", b:"İnanç Bey tahta çıktı, beyliğin gerçek kurucusu sayılır" },
    { t:"1368-01-01", tur:"son", b:"Germiyanoğulları'nın üstünlüğünü kabul etti" }
  ]
},
{ id:"sahibata", ad:"Sâhib Ataoğulları", tur:"beylik", bolge:"anadolu",
  f:"1275-01-01", t:"1341-01-01", baskent:"Afyonkarahisar", harita:"sahibata",
  ozet:"Selçuklu veziri Sâhib Ata'nın oğullarının Afyonkarahisar'da kurduğu beylik; son hükümdarın ölümüyle Germiyanoğulları'na katıldı. (kaynak: TDV, madde: sahib-ataogullari)",
  kaynak:"sahib-ataogullari",
  kronoloji:[
    { t:"1275-01-01", tur:"kurulus", b:"Vezir Sâhib Ata Fahreddin Ali'nin oğulları tarafından kuruldu" },
    { t:"1287-01-01", tur:"hukumdar", b:"Nusretüddevle Ahmed tahta çıktı" },
    { t:"1341-01-01", tur:"son", b:"Nusretüddevle Ahmed'in ölümüyle topraklar Germiyanoğulları'na katıldı" }
  ]
},
{ id:"taceddin", ad:"Tâceddinoğulları (Canik)", tur:"beylik", bolge:"anadolu",
  f:"1348-01-01", t:"1427-01-01", baskent:"Niksar", harita:"taceddin",
  ozet:"Niksar merkezli, Karadeniz kıyısına (Samsun-Ordu-Giresun) uzanan Canik beyliği; Ankara Savaşı sonrası Osmanlı tâbiliğinde varlığını 1427'ye dek sürdürdü. (kaynak: TDV, madde: taceddinogullari)",
  kaynak:"taceddinogullari",
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
  kaynak:"alaiye-beyligi",
  kronoloji:[
    { t:"1293-01-01", tur:"kurulus", b:"Karamanoğlu Mecdüddin Mahmud Bey, Alâiye'yi Selçuklulardan aldı" },
    { t:"1427-01-01", tur:"antlasma", b:"Karamanoğulları, Alâiye'yi 5000 altına Memlûk sultanına sattı" },
    { t:"1471-01-01", tur:"son", b:"Gedik Ahmed Paşa'nın kuşatmasıyla Osmanlı'ya katıldı" }
  ]
},
{ id:"teke", ad:"Tekeoğulları", tur:"beylik", bolge:"anadolu",
  f:"1321-01-01", t:"1423-01-01", baskent:"Antalya", harita:"teke",
  ozet:"Hamîdoğulları'ndan ayrılarak Antalya'da kurulan denizci beylik (hanedan ömrü, iki dönem); 1402'de kısa süreliğine Timur tarafından diriltildi, 1423'te Hamza Bey'in fethiyle kesin olarak Osmanlı'ya katıldı — künye dış zarfı verir, arada kısa bir Osmanlı kesintisi vardır.",
  kaynak:"tekeogullari",
  kronoloji:[
    { t:"1321-01-01", tur:"kurulus", b:"Yûnus Bey, Antalya'da Hamîd'den ayrı beyliğini kurdu" },
    { t:"1373-01-01", tur:"toprak-kazanc", b:"Mübârizüddin Mehmed Bey (Zincirkıran), Kıbrıs'tan Antalya'yı geri aldı" },
    { t:"1423-01-01", tur:"son", b:"II. Murad döneminde Osmanlı'ya kesin olarak ilhak edildi" }
  ]
},
{ id:"haciemir", ad:"Hacıemîroğulları (Bayramlı/Ordu)", tur:"beylik", bolge:"anadolu",
  f:"1350-01-01", t:"1427-06-01", baskent:"Eskipazar (Bayram Bey'in ilk yurdu) → Ordu (Bayramlı)", harita:"haciemir",
  ozet:"Bayram Bey'in Eskipazar'da kurduğu beyliği oğlu Hacı Emîr'in Karadeniz kıyısına (Ordu-Ünye) genişletmesiyle asıl kimliğini kazandı; Yıldırım'a tâbi olduktan sonra II. Murad tarafından ilhak edildi. (kaynak: TDV, madde: ordu--sehir)",
  kaynak:"ordu--sehir",
  kronoloji:[
    { t:"1350-01-01", tur:"kurulus", b:"Hacı Emîr, babası Bayram Bey'in Eskipazar merkezli beyliğini Ordu-Ünye kıyısına genişletti" },
    { t:"1398-01-01", tur:"antlasma", b:"Yıldırım Bayezid'e tâbi oldu" },
    { t:"1427-06-01", tur:"son", b:"II. Murad tarafından ilhak edildi" }
  ]
},
{ id:"mutahharten", ad:"Erzincan-Kemah Beyliği (Mutahharten)", tur:"beylik", bolge:"anadolu",
  f:"1379-01-01", t:"1410-01-01", baskent:"Erzincan", harita:"mutahharten",
  ozet:"Emîr Mutahharten'in Erzincan-Kemah'ta kurduğu küçük uç beyliği (hanedan ömrü, iki dönem); 1401'de Yıldırım Bayezid'e kaybetti, 1402'de Timur'un restorasyonuyla geri aldı, 1410'da öldü — künye dış zarfı verir, arada ~17 aylık Osmanlı kesintisi vardır. TDV'de ayrı maddesi yoktur; tarihler standart akademik kaynaklara göredir.",
  kaynak:"kemah",
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
  kaynak:"emir-suleyman",
  kronoloji:[
    { t:"1402-07-28", tur:"kurulus", b:"Ankara Savaşı sonrası Edirne'de Rumeli'nin fiilî hükümdarı oldu" },
    { t:"1403-02-01", tur:"antlasma", b:"Bizans İmparatoru Manuel ile Gelibolu Antlaşması'nı imzaladı" },
    { t:"1411-02-17", tur:"son", b:"Musa Çelebi'nin baskınıyla Edirne'yi kaybetti, kaçarken yakalanıp öldürüldü" }
  ]
},
{ id:"fetret-isa", ad:"İsa Çelebi Saltanatı (Bursa)", tur:"sehzadelik", bolge:"anadolu",
  f:"1403-01-01", t:"1403-09-01", baskent:"Bursa", harita:"isa-celebi",
  ozet:"Ankara Savaşı sonrası Anadolu'da hükümdarlığını ilan eden şehzade; kardeşi Çelebi Mehmed'e yenilip Eskişehir'de öldürüldü.",
  kaynak:"isa-celebi",
  kronoloji:[
    { t:"1403-01-01", tur:"kurulus", b:"Bursa'da hükümdarlığını ilan etti" },
    { t:"1403-09-01", tur:"son", b:"Çelebi Mehmed'e yenilip Eskişehir'de yakalanarak öldürüldü" }
  ]
},
{ id:"fetret-musa", ad:"Musa Çelebi Saltanatı (Rumeli)", tur:"sehzadelik", bolge:"balkanlar",
  f:"1411-02-17", t:"1413-07-05", baskent:"Edirne", harita:"musa-celebi",
  ozet:"Ağabeyi Süleyman'ı yenerek Rumeli'ye hâkim olan şehzade; İstanbul kuşatması başarısız kaldı, kardeşi Çelebi Mehmed'e Çamurlu'da yenilip öldürüldü.",
  kaynak:"musa-celebi",
  kronoloji:[
    { t:"1411-02-17", tur:"kurulus", b:"Süleyman Çelebi'yi yenerek Edirne'de saltanatını ilan etti" },
    { t:"1411-11-01", tur:"savas", b:"İstanbul'u kuşattı, başarısız oldu" },
    { t:"1413-07-05", tur:"son", b:"Çamurlu Savaşı'nda Çelebi Mehmed'e yenilip öldürüldü" }
  ]
},
{ id:"fetret-mehmed", ad:"Çelebi Mehmed Saltanatı (Amasya/Anadolu)", tur:"sehzadelik", bolge:"anadolu",
  f:"1402-07-28", t:"1413-07-05", baskent:"Amasya → Bursa", harita:"mehmed-celebi",
  ozet:"Ankara Savaşı sonrası Anadolu'da tutunan, sırayla kardeşleri İsa ve Musa'yı saf dışı bırakarak Fetret Devri'ni kapatan şehzade; 1413'te I. Mehmed olarak tek padişah oldu.",
  kaynak:"mehmed-i",
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
  kaynak:"dubrovnik",
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
  kaynak:"bosna-hersek",
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
  kaynak:"karadag",
  kronoloji:[
    { t:"1356-01-01", tur:"kurulus", b:"Balšić ailesi Sırp Krallığı'nın çözülüşünde Zeta'da bağımsızlaştı" },
    { t:"1385-01-01", tur:"savas", b:"Osmanlı ile ilk çatışma yaşandı" },
    { t:"1421-01-01", tur:"bolunme", b:"Son Balšić hükümdarı Zeta'yı Sırp despotuna miras bıraktı" },
    { t:"1451-01-01", tur:"hukumdar", b:"Crnojević ailesi Zeta'nın başına geçti" },
    { t:"1482-01-01", tur:"hukumdar", b:"Merkez Cetine'ye (Cetinje) taşındı — bu tarih TDV'nin karadag maddesinde doğrulanamadı, yerlesimler.js'teki Cetinje kuruluş tarihiyle (kur:1482) hizalandı" },
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
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
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
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1395-05-11", tur:"kurulus", b:"Gian Galeazzo Visconti, İmparator Wenceslaus'tan dük unvanını satın aldı" },
    { t:"1450-03-25", tur:"hukumdar", b:"Francesco Sforza, Ambrosian Cumhuriyeti'ne son verip dük oldu" },
    { t:"1535-11-01", tur:"bolunme", b:"Son Sforza dükü öldü, V. Karl dükalığı İspanyol tacına kattı" },
    { t:"1714-01-01", tur:"toprak-kayip", b:"İspanya Veraset Savaşı sonrası Avusturya Habsburglarına geçti" },
    { t:"1859-11-10", tur:"son", b:"Zürih Antlaşması ile Lombardiya Sardinya-Piyemonte'ye bırakıldı" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — DALGA 2: `toskana` harita kimliği künyenin
// ömrünün (1532-1860) ÖNCESİNDE de kullanılıyordu; Floransa Cumhuriyeti
// dönemi. `toskana`nın kendi ozeti zaten "Floransa Cumhuriyeti'nden Medici
// hanedanı eliyle doğan dükalık" diyordu — buradan doğrulandı. TDV'de
// `floransa` maddesi yok (302), §4 gereği standart akademik kaynak.
{ id:"floransa", ad:"Floransa Cumhuriyeti", tur:"cumhuriyet", bolge:"italya",
  f:"1115-01-01", t:"1532-01-01", baskent:"Floransa",
  ozet:"Kontes Matilda'nın ölümüyle özerk bir komün/cumhuriyet olarak örgütlenen, yün ve bankacılık zenginliğiyle Rönesans'ın merkezlerinden biri olan şehir cumhuriyeti; Medici hanedanının fiilî iktidara gelmesiyle 1532'de dükalığa dönüştü (bkz. [[toskana]]). TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1115-01-01", tur:"kurulus", b:"Kontes Matilda'nın ölümüyle Floransa özerk bir cumhuriyet olarak örgütlendi" },
    { t:"1293-01-01", tur:"antlasma", b:"Adalet Kararnâmeleri (Ordinances of Justice) ile popolo yönetimi pekişti" },
    { t:"1434-09-26", tur:"hukumdar", b:"Cosimo de' Medici sürgünden dönüp şehrin fiilî hâkimi oldu" },
    { t:"1532-01-01", tur:"son", b:"Alessandro de' Medici dük ilan edildi, Cumhuriyet resmen dükalığa dönüştü" }
  ]
},
{ id:"toskana", ad:"Floransa / Toskana Büyük Dükalığı", tur:"dukalik", bolge:"italya",
  f:"1532-01-01", t:"1860-03-22", baskent:"Floransa", harita:"toskana",
  ozet:"Floransa Cumhuriyeti'nden Medici hanedanı eliyle doğan dükalık; 1569'da Büyük Dükalık'a yükseldi, İtalya birliğinde halkoylamasıyla Sardinya-Piyemonte'ye katıldı.",
  kaynak:"toskana",
  kronoloji:[
    { t:"1532-01-01", tur:"kurulus", b:"Floransa Cumhuriyeti, Medici hanedanı altında dükalığa dönüştü" },
    { t:"1569-08-27", tur:"hukumdar", b:"I. Cosimo, Papa V. Pius tarafından Toskana Büyük Dükü ilan edildi" },
    { t:"1737-07-09", tur:"bolunme", b:"Medici hanedanı sönünce taç Habsburg-Lorraine hanedanına geçti" },
    { t:"1860-03-22", tur:"son", b:"Halkoylamasıyla Sardinya-Piyemonte'ye (yakında İtalya Krallığı'na) katıldı" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — DALGA 2 araştırma teslimi (Akdeniz-İtalya-
// İberya kalemi): `sardinya` harita kimliği künyenin ömrünün (1720-1861)
// ÖNCESİNDE de kullanılıyordu; Savoya hanedanının kontluk/dükalık dönemi.
// TDV'de `savoya` maddesi yok (302), §4 gereği standart akademik kaynak.
{ id:"savoya", ad:"Savoya Kontluğu / Dükalığı", tur:"dukalik", bolge:"italya",
  f:"1032-01-01", t:"1720-08-02", baskent:"Chambéry → Torino",
  ozet:"Umberto I Biancamano'nun kurduğu, önce kontluk (1032-1416) sonra dükalık (1416-1720) unvanıyla Alp geçitlerini denetleyen hanedanlık; Sicilya'yı Avusturya'ya devredip Sardinya Krallığı unvanını almasıyla Sardinya-Piyemonte'ye dönüştü (bkz. [[sardinya-piyemonte]]). TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1032-01-01", tur:"kurulus", b:"Umberto I (Biancamano) Savoya kontluğunu kurdu" },
    { t:"1416-02-19", tur:"hukumdar", b:"İmparator Sigismund, VIII. Amedeo'yu Savoya Dükü ilan etti" },
    { t:"1720-08-02", tur:"son", b:"II. Vittorio Amedeo, Sicilya'yı Avusturya'ya devredip Sardinya Krallığı unvanını aldı" }
  ]
},
{ id:"sardinya-piyemonte", ad:"Sardinya-Piyemonte Krallığı (Savoya)", tur:"krallik", bolge:"italya",
  f:"1720-08-02", t:"1861-03-17", baskent:"Torino", harita:"sardinya",
  ozet:"Savoya hanedanının Sicilya'yı Sardinya ile takas ederek kazandığı kraliyet unvanı; İtalya birleşme hareketinin öncüsü oldu, 1861'de İtalya Krallığı'na dönüştü.",
  kaynak:"sardinya",
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
  kaynak:"italya",
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
  f:"1204-01-01", t:"1461-08-15", baskent:"Trabzon", harita:"trabzon-rum",
  ozet:"IV. Haçlı Seferi'nin İstanbul'u düşürmesinden az önce Gürcü desteğiyle kurulan Komnenos hanedanlığı; Bizans'ın son parçası olarak Fatih'e teslim oldu. (kaynak: TDV, madde: trabzon)",
  kaynak:"trabzon",
  kronoloji:[
    { t:"1204-01-01", tur:"kurulus", b:"Aleksios Komnenos, Gürcü Kraliçesi Tamar'ın desteğiyle Trabzon'da bağımsız Rum devletini kurdu" },
    { t:"1461-01-01", tur:"antlasma", b:"Akkoyunlu Uzun Hasan ile evlilik ittifakı (Despina Hatun) üzerinden Osmanlı'ya karşı destek arandı" },
    { t:"1461-08-15", tur:"son", b:"Fatih'in kuşatmasıyla teslim oldu; İmparator David Komnenos ailesiyle İstanbul'a sürüldü — Bizans mirasının son parçası (bkz. [[bizans]])" }
  ]
},
{ id:"zend", ad:"Zend Hanedanı (İran)", tur:"devlet", bolge:"iran", harita:"zend",
  f:"1751-01-01", t:"1794-01-01", baskent:"Şiraz",
  ozet:"Nadir Şah'ın ölümü sonrası kargaşada Kerim Han'ın kurduğu, şah unvanı yerine \"Vekilü'r-Reâyâ\" sanını kullandığı İran hanedanı; Kaçarlar tarafından ortadan kaldırıldı (bkz. [[kacar]]). TDV'de ayrı maddesi yok; tarihler standart akademik kaynaklara göredir. ⚠️ VERİ DEVLET (7 Ağustos 2026): `harita:\"zend\"` eklendi (RENK 2 oturumu rengini hazırlıyor). Haritada bu künyeye bağlanması beklenen pencere 1747-06-20→1796-01-01 (123 nokta, koordinatör ölçtü) — künyenin kendi f/t'siyle (1751-1794) ~4 yıl baş, ~2 yıl son farkı var; 1747-1751 arası Nadir Şah sonrası çok taraflı kargaşa (Âzâd Han Afgan, Muhammed Hasan Han Kaçar ile rekabet) olduğu için TDV/standart kaynak Zend'in konsolidasyonunu 1751'e koyuyor. Fark künyenin kusuru değil, iki farklı sorunun (\"devlet ne zaman kuruldu\" vs \"harita hangi güne kadar iran'ı taşıyor\") cevabı — bkz. CLAUDE.md kimlikler.js §74 emsali.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1751-01-01", tur:"kurulus", b:"Kerim Han Zend, Nadir Şah sonrası kargaşada İran'ın büyük bölümünü ele geçirdi" },
    { t:"1765-01-01", tur:"hukumdar", b:"Şiraz'ı başkent yaparak imar etti, Basra ile ticareti geliştirdi" },
    { t:"1779-01-01", tur:"hukumdar", b:"Kerim Han öldü, halefleri arasında taht kavgaları başladı" },
    { t:"1794-01-01", tur:"son", b:"Ağa Muhammed Han Kaçar, son hükümdar Lütfali Han'ı Kirman'da yenip idam etti" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — koordinatörün Kandehar kalemi. TDV `kandehar`
// maddesi (HTTP 200, içerik doğrulandı) yalnız iki uç tarihi veriyor: 1709
// ayaklanması ve 1738 (1150) düşüşü; gün bilgisi yok. `hotaki`/`gilzai`/
// `nadir-sah` slugları ÖLÜ (302) — bu yüzden madde adı `kandehar`dan alındı.
// ⚠️ Bölünme (Kandehar noktasının 1709-1738 `galzay` / 1738-1747 `afsar`
// olarak ikiye ayrılması) KOORDİNATÖRÜN işi, bu oturum yerlesimler*.js'e
// dokunmadı.
{ id:"galzay", ad:"Galzaylar (Hotakî Afgan Devleti)", tur:"devlet", bolge:"iran",
  f:"1709-04-21", t:"1738-01-01", baskent:"Kandehar",
  ozet:"Afgan kökenli Galzay (Hotakî) aşiretinin Safevî valisine karşı ayaklanıp Kandehar'ı almasıyla kurulan kısa ömürlü devlet; Nadir Şah'ın 1150'de (1738) şehri geri almasıyla sona erdi. Kuruluş günü (21 Nisan 1709, Mîrveys Hotek ayaklanması) TDV `kandehar` maddesinde yok — standart akademik kaynağa göredir; bitiş yılı TDV'de birebir geçer. (kaynak: TDV, madde: kandehar; kuruluş günü standart akademik kaynak)",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1709-04-21", tur:"isyan", b:"Galzaylar Safevî valisine karşı ayaklanıp Kandehar'ı ele geçirdi" },
    { t:"1738-01-01", tur:"son", b:"Afşarlı Nadir Şah, Kandehar'ı geri alarak Galzay hâkimiyetine son verdi (1150)" }
  ]
},

// ================================================================================
// Parti 5: Kuzey ve bozkır — Altın Orda, Kırım Hanlığı, Zaporojye, Rusya
// Çarlığı/İmparatorluğu Parti 0'da zaten vardı (rusya kaydı zaten Astarhan'ın
// 1556 ilhakını içeriyordu). Bu partide Altın Orda'nın dört bozkır ardılından
// eksik kalan dördü eklendi: Kazan (`kazan` BOYALAR'da vardı), Astarhan, Sibir,
// Nogay — dördü de TDV'de doğrulanmış maddeye sahip.
// ================================================================================

// VERİ DEVLET (7 Ağustos 2026) — `kasim` harita kimliği hiç künyesizdi, o
// pencere şu an `rusya` boyanıyordu. TDV maddesi var, tarihler birebir.
{ id:"kasim", ad:"Kasım Hanlığı (Kasimov)", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1452-01-01", t:"1681-01-01", baskent:"Kasimov",
  ozet:"Moskova Büyük Knezliği'nin Altın Orda'dan kaçan Tatar prensi Kâsım'a (Uluğ Muhammed'in oğlu) verdiği, biçimsel olarak hanlık ama fiilen Moskova'ya bağımlı tampon devlet; son hükümdar Fâtıma Sultan Bike'nin ölümüyle sona erdi (bkz. [[moskova]], [[rusya]]). HANEDAN/VASAL DEVLET kimliğidir. ⚠️ Kuruluş yılı TDV'nin kendi maddesinde tartışmalı (\"1445\" ya da \"1452-1456\" — kaynaklar farklı), 1452 orta bir tarih olarak seçildi. (kaynak: TDV, madde: kasim-hanligi — bitiş \"1681 yılında... Kāsım Hanlığı tarihe karıştı\" birebir)",
  kaynak:"kasim-hanligi",
  kronoloji:[
    { t:"1452-01-01", tur:"kurulus", b:"Moskova, Tatar prensi Kâsım'a Oka nehri kıyısında bir toprak/hanlık verdi (TDV: kesin yıl tartışmalı, 1445-1456 arası)" },
    { t:"1681-01-01", tur:"son", b:"Son hükümdar Fâtıma Sultan Bike'nin ölümüyle hanlık tarihe karıştı" }
  ]
},
{ id:"kazan", ad:"Kazan Hanlığı", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1437-01-01", t:"1552-10-02", baskent:"Kazan", harita:"kazan",
  ozet:"Altın Orda'nın dağılmasıyla Uluğ Muhammed'in kurduğu, İdil-Ural bölgesinin önemli bir İslâm ve ticaret merkezi olan hanlık; IV. İvan tarafından ilhak edildi. (kaynak: TDV, madde: kazan)",
  kaynak:"kazan-hanligi",
  kronoloji:[
    { t:"1437-01-01", tur:"kurulus", b:"Altın Orda hanı Uluğ Muhammed, Kazan'da hanlığını kurdu (bazı kaynaklara göre 1445)" },
    { t:"1487-01-01", tur:"antlasma", b:"III. İvan'ın seferi sonucu Moskova yanlısı bir han tahta çıkarıldı, hanlık fiilen vasal oldu" },
    { t:"1552-10-02", tur:"son", b:"IV. İvan'ın kuşatması sonucu Kazan düştü, hanlık Rusya'ya ilhak edildi (bkz. [[rusya]])" }
  ]
},
{ id:"astarhan", ad:"Astarhan (Ejderhan) Hanlığı", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1466-01-01", t:"1556-01-01", baskent:"Ejderhan (Astarhan)", harita:"astarhan",
  ozet:"Altın Orda'nın dağılmasıyla Kasım Han'ın kurduğu, Hazar'ın kuzey kıyısındaki hanlık; Kırım-Osmanlı nüfuz mücadelesinin ardından IV. İvan tarafından ilhak edildi. ⚠️ VERİ DEVLET (7 Ağustos 2026): `yerlesimler_ek22.js`de bu künye \"astrahan-hanligi kimliği (1466-1556) yok\" diye işaretlenmiş — YANLIŞ, künye zaten burada f/t BİREBİR aynı, TDV'nin kendi yazımı `astarhan` (Rusça değil Türkçe transkripsiyon). Harita alanı da eklendi; eksik olan yalnız renk (BOYALAR'da yok) ve yerlesimler noktalarının `d:` değeri. (kaynak: TDV, madde: astarhan-hanligi)",
  kaynak:"ejderhan-hanligi",
  kronoloji:[
    { t:"1466-01-01", tur:"kurulus", b:"Küçük Muhammed Han'ın torunu Kasım Han, Ejderhan'da hanlığını kurdu" },
    { t:"1502-01-01", tur:"savas", b:"Kırım Hanı Mengli Giray, Osmanlı desteğiyle Saray şehrini yıktı; hanlık ~20 yıl Kırım nüfuzuna girdi" },
    { t:"1552-01-01", tur:"hukumdar", b:"IV. İvan, Kazan'ı aldıktan sonra Derviş Han'ı Ejderhan tahtına çıkarıp fiilen vasal yaptı" },
    { t:"1556-01-01", tur:"son", b:"Rusya hanlığı doğrudan işgal etti, hanedan Buhara'ya sığındı" },
    { t:"1569-01-01", tur:"savas", b:"Osmanlı, Don-Volga kanal projesiyle bölgeyi geri almaya çalıştı; Kefe Beyi Kasım Bey'in seferi başarısız oldu (bkz. [[rusya]])" }
  ]
},
{ id:"nogay", ad:"Nogay Ordası", tur:"devlet", bolge:"sibirya-bozkir",
  f:"1440-01-01", t:"1783-01-01", baskent:"(bozkırda göçebe, sabit başkent yok)", harita:"nogay",
  ozet:"Altın Orda'nın dağılma sürecinde Mangıt beyi Edigü'nün mirasından doğan Türk-Tatar konfederasyonu; 1557-58'de Osmanlı yanlısı Büyük Nogay ile Moskova/Kırım yanlısı Küçük Nogay olarak ikiye bölündü, Rus/Kalmuk baskısıyla bağımsızlığını yitirdi. (kaynak: TDV, madde: nogaylar)",
  kaynak:"nogaylar",
  kronoloji:[
    { t:"1420-01-01", tur:"hukumdar", b:"Mangıt beyi Edigü öldü; ardından oğulları konfederasyonun çekirdeğini oluşturdu" },
    { t:"1557-01-01", tur:"bolunme", b:"Osmanlı yanlısı Yûsuf Mirza ile Moskova yanlısı İsmâil Mirza arasındaki çekişme konfederasyonu ikiye böldü" },
    { t:"1558-01-01", tur:"bolunme", b:"Kadı Mirza'nın grubu Volga'yı geçip Küçük Nogay Ordası'nı kurdu, Büyük Nogay bozkırda kaldı" },
    { t:"1569-01-01", tur:"savas", b:"Osmanlı'nın Astarhan seferine etki etti ama askerî destek vermedi (bkz. [[astarhan]], [[rusya]])" },
    { t:"1586-01-01", tur:"toprak-kayip", b:"Moskova'nın Samara, Tsaritsın ve Saratov kalelerini kurmasıyla akınları sınırlandı" },
    { t:"1783-01-01", tur:"son", b:"Suvorov'un Kuban'daki yenilgisiyle Büyük Nogay'ın bağımsızlığı fiilen sona erdi" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — `yerlesimler_ek17.js`nin işaretlediği kalem
// ("ryazan diye bir kimlik ne dizinde ne renkte VAR ve UYDURMADIM"). Rus iç
// tarihi TDV'nin kapsam dışı bıraktığı coğrafyalardan (CLAUDE.md §4); TDV'de
// `riyazan-knezligi`/`ryazan` slugları YOK (ikisi de 302). Tarihler standart
// akademik kaynağa göredir (Moskova Büyük Knezliği'ne katılış yılı — 1521 —
// yaygın kabul görür, gün bilinmiyor).
{ id:"ryazan", ad:"Ryazan Knezliği", tur:"prenslik", bolge:"dogu-avrupa",
  f:"1129-01-01", t:"1521-01-01", baskent:"Ryazan (Stara Ryazan → Pereyaslavl-Ryazanski)",
  ozet:"Çernigov'dan ayrılarak kurulan, Moskova'dan önce Altın Orda'nın ilk hedeflerinden olan (1237'de Batu Han'ın yaktığı ilk büyük Rus şehri) eski knezlik; uzun süre Moskova'ya rakip kaldı, III. Vasili döneminde son knez Ivan İvanoviç tahttan indirilerek ilhak edildi. TDV'de madde yok (Rus iç tarihi, TDV kapsamı dışı); tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1129-01-01", tur:"kurulus", b:"Çernigov Knezliği'nden ayrı bağımsız bir knezlik olarak öne çıktı" },
    { t:"1237-12-21", tur:"isgal", b:"Batu Han'ın Moğol ordusu Ryazan'ı kuşatıp yaktı — Rus topraklarında yıkılan ilk büyük şehir" },
    { t:"1521-01-01", tur:"son", b:"III. Vasili, son knez Ivan İvanoviç'i tahttan indirip Moskova Büyük Knezliği'ne kesin olarak kattı" }
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

{ id:"usfuri", ad:"Usfûrîler (Benî Usfûr)", tur:"devlet", bolge:"arabistan",
  f:"1281-01-01", t:"1417-01-01", baskent:"Katîf / Lahsâ", harita:"usfuri",
  ozet:"Uyûnîler'in ardından doğu Arabistan'a (Lahsâ, Katîf, Bahreyn) hâkim olan Benî Ukayl kolu; Cebrîler bu hânedanın içinden çıktı. ⚠️ Atlasta kullanılan 1281 tarihi hânedanın kuruluşu değil, atlasın kendi pencere başlangıcıdır; aradaki Cervânî safhası henüz ayrılmamıştır. (kaynak: TDV, madde: cebriler ve arabistan içinde geçer) 🔴 10 Ağustos 2026 KİMLİK ÇELİŞKİSİ (KOORDİNATÖRE BİLDİRİLDİ, DEĞİŞTİRİLMEDİ): `usfuri`/`usfuriler` sluglarının ikisi de TDV'de ÖLÜ (302); TDV'nin `cebriler`/`bahreyn`/`lahsa`/`katif`/`karmatiler`/`necid`/`ahsa` maddelerinin TAMAMI tek tek tarandı, 'Usfûrîler' adı HİÇBİRİNDE geçmiyor. TDV bu dönemi 'Cervânîler' (Karmatî kalıntısı, son emîri İbrâhim b. Nâsır) diye adlandırıyor — bizim 'Usfûrî' isimlendirmemiz TDV'de karşılıksız. Zayıf ikincil kaynaklar (Wikipedia/Alchetron/Grokipedia) 'Usfûrîler 1253-1392, kurucu Usfûr bin Râşid' diyor ama forum/içerik-çiftliği sınıfında, KULLANILAMAZ. Künye adı/tarihi DEĞİŞTİRİLMEDİ — nebhani/toga-timur emsali: yerine geçecek isim netleşmeden künye taşınmaz.",
  kaynak:"bulunamadı — TDV'de 'Usfûrî' adı hiç geçmiyor (TDV 'Cervânîler' diyor), dayanak: standart akademik kaynak (zayıf, isim çelişkisi çözülmedi)",
  kronoloji:[
    { t:"1417-01-01", tur:"son", b:"Seyf b. Zâmil, son Cervânî emîri İbrâhim b. Nâsır'ı bertaraf ederek yerine Cebrîler'i kurdu" }
  ]
},

{ id:"cebri", ad:"Cebrîler (Benî Cebr)", tur:"devlet", bolge:"arabistan",
  f:"1417-01-01", t:"1524-01-01", baskent:"Hufuf (Lahsâ)", harita:"cebri",
  ozet:"XV-XVI. yüzyıllarda Lahsâ merkez olmak üzere doğu Arabistan'da hüküm süren hânedan; Basra körfezinin Arap kıyısını ve Bahreyn'i denetledi, Osmanlı'ya bağlı Müntefik reisi Râşid b. Megāmis tarafından tasfiye edildi. Mescidü'l-Cebrî ile Hufuf'taki Kasr-ı Ecved bugüne kalan eserleridir. (kaynak: TDV, madde: cebriler) ⚠️ 10 Ağustos 2026: `kaynak:` alanı 'bahreyn' → 'cebriler' düzeltildi — `cebriler` maddesi (Abdülkerim Özaydın) zengin, tek yazarlı ve asıl kaynak; `bahreyn` yalnız bir cümlede geçiyordu.",
  kaynak:"cebriler",
  kronoloji:[
    { t:"1417-01-01", tur:"kurulus", b:"Seyf b. Zâmil, Cervânî hâkimiyetine son vererek hânedanı kurdu (820)" },
    { t:"1507-01-01", tur:"hukumdar", b:"Seyf'in kardeşi ve halefi Ecved b. Zâmil döneminde hanedan Basra körfezi kıyılarına genişledi; Bahreyn/Hürmüz'e saldıran Portekizliler'e şiddetle karşı koydu, aynı yıl ölünce yerine oğlu Mukrin geçti (TDV cebriler maddesi)" },
    { t:"1521-01-01", tur:"toprak-kayip", b:"Emîr Mukrin'in ölümünün ardından Portekizliler, Cebrîler'in hâkimiyetindeki Basra körfezi sahillerini işgal etti (TDV cebriler maddesi)" },
    { t:"1521-07-27", tur:"savas", b:"Emîr Mukrin, Bahreyn'i ele geçirmiş Portekizliler'e karşı Mekke emîrinin desteğiyle kurduğu donanmayla savaştı; aldığı yaradan üç gün sonra öldü (TDV cebriler maddesi, tam gün)" },
    { t:"1524-01-01", tur:"son", b:"Müntefik reisi Râşid b. Megāmis Cebrî hâkimiyetine son verdi (931)" }
  ]
},

{ id:"nebhani", ad:"Nebhânîler (Uman)", tur:"devlet", bolge:"arabistan",
  f:"1281-01-01", t:"1515-04-01", baskent:"Bahlâ", harita:"nebhani",
  ozet:"Portekiz işgalinden önce Uman'da ve körfezin güney kıyısında (Cülfâr, Şârika) hüküm süren hânedan. ⚠️ Atlastaki 1281 tarihi hânedanın kuruluşu değil atlasın pencere başlangıcıdır; Cülfâr limanının Hürmüz Krallığı'na tâbiiyeti literatürde geçer ama TDV'de ayrı madde bulunmadığı için henüz ayrılmamıştır. (kaynak: TDV, madde: uman) 🔴 10 Ağustos 2026 — KARAR: (a) TARİHE DOKUNMA (koordinatörle mutabık). Çelişki KARAR VERİLEBİLİR hâle getirildi, üç unsur: ① bizim aralık 1281-1515 (veride 21 nokta) ② TDV `uman` maddesi 1230'dan (627 AH, Benî Kayser'in yıkılışı) Portekiz işgaline kadar 'SALGURLULAR' yönetti diyor ③ Brill/standart akademik kaynak Nebhânî hâkimiyetini ~1154-1624 olarak veriyor — bu bizim aralığımızla UYUMLU, TDV'nin 'Salgurlu' iddiasıyla değil. ⇒ AÇIK SORU (künye ancak bu ayrılınca değiştirilir): TDV'deki 'Salgurlular' standart Fars hânedanı mı (1148-1282, Şîraz — aynı adı taşıyan AYRI ve İYİ BİLİNEN bir hânedan) yoksa Uman'a özgü yerel bir kol/nominal metbûluk mu? Ayrılmadan 21 nokta taşınmaz — bir hayaleti kapatıp daha büyüğünü açma riski var (bkz. celayirli/toga-timur emsali).",
  kaynak:"uman",
  kronoloji:[
    { t:"1507-01-01", tur:"isgal", b:"Portekizliler Uman sahil şehirlerini ele geçirmeye başladı; Memlük Sultanı Kansu Gavri'nin gönderdiği donanma bu ilerleyişi durduramadı (TDV uman maddesi)" },
    { t:"1515-04-01", tur:"son", b:"Portekiz, 1507'den itibaren aldığı Uman sahilinde hâkimiyeti tamamladı" }
  ]
},

{ id:"benihalid", ad:"Benî Hâlid Emirliği (Lahsa)", tur:"devlet", bolge:"arabistan",
  f:"1670-01-01", t:"1830-01-01", baskent:"Hufuf", harita:"benihalid",
  ozet:"Osmanlı'yı Lahsa'dan (el-Hasa) çıkarıp doğu Arabistan'a egemen olan bedevi emirliği; yükselen Suûdî-Vehhâbî devletine yenilerek 1795'te ilk kez tasfiye edildi, İbrâhim Paşa'nın Vehhâbîleri yenmesi üzerine 1818'de Mâcid el-Ureyyir tarafından kısa süreliğine geri kuruldu, 1830'da Aklâ savaşında Mâcid'in ölümüyle kesin olarak sona erdi. ⚠️ VERİ DEVLET (7 Ağustos 2026) DÜZELTTİ: `t:` 1795'ten 1830'a çekildi, ikinci dönem (1818-1830) kronolojiye eklendi — harita 1841'e kadar boyuyordu (11 yıl fazlalık), o düzeltme koordinatörün işi. (kaynak: TDV, madde: halid-beni-halid)",
  kaynak:"lahsa",
  kronoloji:[
    { t:"1670-01-01", tur:"kurulus", b:"Berrâk b. Guraybir, Lahsa'nın merkezi Hufuf'u ele geçirip Osmanlı idaresine son verdi" },
    { t:"1691-01-01", tur:"toprak-kazanc", b:"Berrâk'ın oğlu Muhammed, Necid'e akınlarını sürdürdü" },
    { t:"1744-01-01", tur:"savas", b:"Muhammed b. Abdülvehhâb'ın Dir'iye'ye sığınmasıyla Suûdîlerle husumet başladı (bkz. [[suud-birinci]])" },
    { t:"1752-01-01", tur:"bolunme", b:"Süleyman el-Hamîdî tahttan indirildi, iç çekişmeler başladı" },
    { t:"1795-01-01", tur:"toprak-kayip", b:"Abdülazîz b. Suûd, Lahsa'yı ele geçirip emirliği ilk kez tasfiye etti" },
    { t:"1818-01-01", tur:"toprak-kazanc", b:"İbrâhim Paşa'nın Vehhâbîleri yenmesi üzerine Mâcid ve Muhammed kardeşler Lahsa'ya girip Osmanlı padişahı adına hutbe okuttu, emirlik geri kuruldu" },
    { t:"1830-01-01", tur:"son", b:"Mâcid el-Ureyyir Aklâ savaşında öldü; Lahsa Suûd ailesinin denetimine geçti, emirlik kesin olarak sona erdi" }
  ]
},
{ id:"aiz", ad:"Âiz Emirliği (Ebhâ / Asîr)", tur:"devlet", bolge:"arabistan",
  f:"1918-10-30", t:"1920-01-01", baskent:"Ebhâ", harita:"aiz",
  ozet:"Mondros Mütarekesi'yle Osmanlı'nın Asîr'den çekilmesinin ardından Ebhâ yaylasında Hasan b. Muhammed Âiz'in kurduğu kısa ömürlü emirlik; ailenin bölgedeki nüfuzu 1840'lardan beri sürüyordu, Abdülazîz b. Suûd'un fethiyle sona erdi. (kaynak: TDV, madde: asir--suudi-arabistan)",
  kaynak:"ebha",
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
  kaynak:"tunus",
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
  kaynak:"tilimsan",
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
  kaynak:"sudan",
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
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"543-01-01", tur:"kurulus", b:"Makurya Krallığı Hristiyanlığı kabul etti (Dongola merkezli)" },
    { t:"651-01-01", tur:"antlasma", b:"Araplarla Bakt Antlaşması imzalandı, uzun bir barış dönemi başladı" },
    { t:"1276-01-01", tur:"isgal", b:"Memlük Sultanı Baybars'ın seferleriyle Dongola art arda yağmalandı" },
    { t:"1365-01-01", tur:"bolunme", b:"Dongola tahliye edildi, Makurya güneye çekilip küçük bir krallığa (Dotawo) dönüştü" },
    { t:"1504-01-01", tur:"son", b:"Func Sultanlığı, Soba'yı alarak Alve Krallığı'na son verdi (bkz. [[funj]])" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — ARAŞTIRMA KÜNYE 3: `somali` harita kimliği
// künyenin ömrünün (1500-1923) ÖNCESİNDE de (1281-1500, Mogadişu noktası)
// kullanılıyordu. ⚠️ `mogadisu` slug'ı TDV'de CANLI ama İÇERİĞİ BOŞ/yönlendirme
// — asıl madde `makdisu` slug'ındadır, oradan alındı.
{ id:"makdisu-sultanligi", ad:"Makdişu (Mogadişu) Sultanlığı (Ebû Bekir b. Fahreddin Hanedanı)", tur:"sultanlik", bolge:"dogu-afrika",
  f:"1281-01-01", t:"1500-01-01", baskent:"Makdişu (Mogadişu)",
  ozet:"Ebû Bekir b. Fahreddin'in VII. (XIII.) yüzyılda Makdişu'da kurduğu küçük sultanlık; İbn Battûta 1331'de (Sultan Ebû Bekir b. Ömer döneminde) şehri ziyaret etti. XVI. yüzyılda yönetim Muzaffer sülâlesinin eline geçti (bkz. [[somali]] — Ecuran/Ajuran'ın yükselişiyle örtüşür). ⚠️ 1281 tarihi hânedanın kuruluşu değil atlasın pencere başlangıcıdır — TDV yalnız \"XIII. yüzyıl\" diyor, kesin yıl yok. (kaynak: TDV, madde: makdisu)",
  kaynak:"makdisu",
  kronoloji:[
    { t:"1281-01-01", tur:"kurulus", b:"Ebû Bekir b. Fahreddin Makdişu'da küçük bir sultanlık kurdu (TDV: VII./XIII. yüzyıl, kesin yıl yok)" },
    { t:"1331-01-01", tur:"hukumdar", b:"İbn Battûta, Sultan Ebû Bekir b. Ömer döneminde Makdişu'yu ziyaret etti" },
    { t:"1500-01-01", tur:"son", b:"Yönetim Muzaffer sülâlesinin eline geçti (geçiş sürecinin ayrıntısı TDV'de yok)" }
  ]
},
{ id:"somali", ad:"Somali Sultanlıkları", tur:"sultanlik", bolge:"dogu-afrika",
  f:"1500-01-01", t:"1923-10-29", baskent:"Mogadişu ve çeşitli merkezler", harita:"somali",
  ozet:"Adal'ın çöküşünden sonra Somali kıyısında ardı ardına ortaya çıkan sultanlıklar (Ecuran/Ajuran, sonra Migiurtinia ve Hobyo); 20. yüzyıl başında İtalyan sömürgeciliğiyle sona erdi. TDV'de ayrı maddesi yok; tarihler standart akademik kaynaklara göredir, kesinlik düşük.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
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
  kaynak:"cekoslovakya",
  kronoloji:[
    { t:"1918-10-28", tur:"kurulus", b:"Prag'da bağımsızlık ilan edildi, Tomáš Masaryk cumhurbaşkanı seçildi" },
    { t:"1919-09-10", tur:"antlasma", b:"Saint-Germain Antlaşması Avusturya'nın Çekoslovakya'yı tanımasını sağladı" },
    { t:"1920-06-04", tur:"antlasma", b:"Trianon Antlaşması Macaristan'ın Slovakya'yı bırakmasını sağladı" }
  ]
},
{ id:"polonya", ad:"Polonya Cumhuriyeti (II. Cumhuriyet)", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1918-11-11", t:"1923-10-29", baskent:"Varşova", harita:"polonya",
  ozet:"123 yıllık paylaşılmışlığın ardından Almanya, Avusturya-Macaristan ve Rusya topraklarından yeniden kurulan devlet; Piłsudski önderliğinde bağımsızlığını Sovyetler'e karşı da savundu (1923 sonrasında da sürdü). Bkz. [[lehistan]] (eski Lehistan-Litvanya Birliği ile doğrudan devamlılığı yok).",
  kaynak:"polonya",
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
  kaynak:"yugoslavya",
  kronoloji:[
    { t:"1918-12-01", tur:"kurulus", b:"Prens Naib Aleksandar, Belgrad'da SHS Krallığı'nı ilan etti" },
    { t:"1919-09-10", tur:"antlasma", b:"Saint-Germain Antlaşması ile eski Habsburg toprakları (Hırvatistan, Slovenya) resmileşti" },
    { t:"1921-06-28", tur:"hukumdar", b:"Kralın yetkilerini belirleyen merkeziyetçi Vidovdan Anayasası kabul edildi; Hırvat temsilcilerin şiddetli muhalefeti krallığın iç gerginliğinin köklerinden biri oldu (TDV yugoslavya maddesi)" },
    { t:"1921-08-16", tur:"hukumdar", b:"Kral I. Petar'ın ölümü üzerine 1914'ten beri naip olan oğlu Aleksandar tahta geçti (standart akademik kaynak, TDV'de yok)" },
    { t:"1929-10-03", tur:"kurulus", b:"Kral Aleksandar'ın kişisel yönetimi ilanının ardından devletin resmî adı 'Yugoslavya Krallığı' oldu (TDV yugoslavya maddesi; ⚠️ atlasın 1923-10-29 ufkunun DIŞINDA, dizin amaçlı bırakıldı)" }
  ]
},
{ id:"letonya", ad:"Letonya Cumhuriyeti", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1918-11-18", t:"1923-10-29", baskent:"Riga", harita:"letonya",
  ozet:"Rusya İmparatorluğu'nun dağılmasıyla bağımsızlığını ilan eden Baltık devleti; Bağımsızlık Savaşı'nda hem Sovyet hem Alman kuvvetlerine karşı direndi (1923 sonrasında da sürdü).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1918-11-18", tur:"kurulus", b:"Kārlis Ulmanis önderliğinde Riga'da bağımsızlık ilan edildi" },
    { t:"1919-01-01", tur:"savas", b:"Sovyet Letonya'sı ve Alman Baltık birlikleriyle Bağımsızlık Savaşı başladı" },
    { t:"1920-08-11", tur:"antlasma", b:"Riga Barışı ile Sovyet Rusya bağımsızlığı tanıdı" }
  ]
},
{ id:"litvanya", ad:"Litvanya Cumhuriyeti", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1918-02-16", t:"1923-10-29", baskent:"Kaunas (geçici) / Vilnius (iddia)", harita:"litvanya",
  ozet:"Rusya İmparatorluğu'nun dağılmasıyla bağımsızlığını ilan eden Baltık devleti; Vilnius'u Polonya'ya kaptırınca geçici başkent Kaunas oldu (1923 sonrasında da sürdü).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok (arama yalnız Lipkalar maddesine düşüyor), dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1918-02-16", tur:"kurulus", b:"Vilnius'ta \"16 Şubat Bildirgesi\" ile bağımsızlık ilan edildi" },
    { t:"1919-04-19", tur:"savas", b:"Polonya kuvvetleri Wilno'yu (Vilnius) Sovyet Rusya'dan alıp doğrudan Litvanya ordusuyla temasa geçti; 1920 sonuna kadar sürecek Polonya-Litvanya sınır çatışmalarının fiilî başlangıcı oldu (Senn 1966)" },
    { t:"1920-07-12", tur:"antlasma", b:"Moskova Barış Antlaşması ile Sovyet Rusya, Litvanya'nın egemenliğini koşulsuz tanıyıp doğu sınırını belirledi — uluslararası tanınmanın ilk büyük diplomatik kazanımı (Eidintas/Žalys/Senn 1997)" },
    { t:"1920-10-09", tur:"toprak-kayip", b:"General Żeligowski'nin Polonya birlikleri Vilnius'u ele geçirdi, başkent Kaunas'a taşındı" }
  ]
},
{ id:"estonya", ad:"Estonya Cumhuriyeti", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1918-02-24", t:"1923-10-29", baskent:"Tallinn", harita:"estonya",
  // 🔴 KÖPRÜ YAZILDI (VERİ KİMLİK 3, 3 Ağustos) — renk RENK'ten bekleniyor.
  // Eski ozet şöyle diyordu: "BOYALAR'da ayrı id'si yok (haritada
  // Letonya/Litvanya ile aynı bölgeye dahil), yine de tam bir devlet olarak
  // kaydedildi." O cümle bir ÇÖZÜM DEĞİL, bir ÖDÜNÇ tarifiydi ve artık
  // geçersiz: PETEK/NOKTA dört Estonya noktasıyla bekliyor (Tallinn · Tartu ·
  // Narva · Pärnu) ve Tallinn Helsinki'ye 82 km — nokta gelince Estonya kıyısı
  // `finlandiya` boyanır. Ayrıntı: oturumlar/KIMLIK-ESTONYA.md
  ozet:"Rusya İmparatorluğu'nun dağılmasıyla bağımsızlığını ilan eden Baltık devleti; Bağımsızlık Savaşı'nda Sovyetler'e karşı direndi ve Tartu Barışı'yla tanındı (1923 sonrasında da sürdü).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1918-02-24", tur:"kurulus", b:"Tallinn'de bağımsızlık ilan edildi" },
    { t:"1918-11-28", tur:"savas", b:"Sovyet Rusya saldırısıyla Bağımsızlık Savaşı başladı" },
    { t:"1920-02-02", tur:"antlasma", b:"Tartu Barışı ile Sovyet Rusya bağımsızlığı tanıdı" }
  ]
},
{ id:"finlandiya", ad:"Finlandiya Cumhuriyeti", tur:"cumhuriyet", bolge:"kuzey-avrupa",
  f:"1917-12-06", t:"1923-10-29", baskent:"Helsinki", harita:"finlandiya",
  ozet:"Rusya İmparatorluğu'nun dağılmasıyla bağımsızlığını ilan eden Kuzey devleti; kısa bir iç savaşın ardından cumhuriyet olarak pekişti (1923 sonrasında da sürdü).",
  kaynak:"finlandiya",
  kronoloji:[
    { t:"1917-12-06", tur:"kurulus", b:"Finlandiya Senatosu bağımsızlığı ilan etti" },
    { t:"1918-01-27", tur:"savas", b:"Kızıllar ve Beyazlar arasında iç savaş başladı (Mannerheim'ın zaferiyle Mayıs 1918'de bitti)" },
    { t:"1919-07-17", tur:"antlasma", b:"Cumhuriyet anayasası kabul edildi" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — DALGA 1: `norvec` harita kimliği künyenin
// ömrünün (1905-1923) ÖNCESİNDE de (1281-1537, 17 kayıt, dosya `ek7+ek8+ek12`)
// kullanılıyordu. Koordinatörün kararı: TEK künye, `danimarka`ya BAĞLANMADI.
// TDV'de `norvec` maddesi YOK (302); §4 gereği standart akademik kaynak.
{ id:"norvec-kralligi", ad:"Norveç Krallığı (Birlik Öncesi ve Kalmar Dönemi)", tur:"krallik", bolge:"kuzey-avrupa",
  f:"1281-01-01", t:"1537-01-01", baskent:"Bergen → Oslo",
  ozet:"Bağımsız ortaçağ Norveç Krallığı; 1319'da İsveç ile, 1380'de Danimarka ile kişisel birliğe girdi, 1397'de Kalmar Birliği'nin parçası oldu; 1523'te İsveç birlikten ayrılınca Danimarka ile kaldı, 1536-37 Reform hareketiyle Norveç Krallık Meclisi kaldırılıp fiilen Danimarka eyaletine dönüştü (bkz. [[danimarka]] — AYRI künye, birleştirilmedi). ⚠️ 1281 tarihi hânedanın kuruluşu değil atlasın pencere başlangıcıdır; TDV'de `norvec` maddesi YOK (302), tarihler standart akademik kaynağa göredir (§4).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1319-01-01", tur:"ittifak", b:"VII. Magnus (Magnus Eriksson) hem Norveç hem İsveç kralı oldu — ilk kişisel birlik" },
    { t:"1380-01-01", tur:"ittifak", b:"IV. Olav'ın tahta çıkışıyla Danimarka ile kişisel birlik başladı" },
    { t:"1397-06-17", tur:"birlesme", b:"Kalmar Birliği resmen kuruldu — Danimarka, Norveç, İsveç Margrete I altında birleşti" },
    { t:"1523-06-06", tur:"bolunme", b:"İsveç Kalmar Birliği'nden ayrıldı; Norveç Danimarka ile birlikte kaldı" },
    { t:"1537-01-01", tur:"son", b:"Reform hareketiyle Norveç Krallık Meclisi kaldırıldı, ülke fiilen Danimarka'nın bir eyaletine dönüştü" }
  ]
},
{ id:"norvec", ad:"Norveç Krallığı (bağımsız)", tur:"krallik", bolge:"kuzey-avrupa",
  f:"1905-06-07", t:"1923-10-29", baskent:"Kristiania (Oslo)", harita:"norvec",
  ozet:"İsveç ile 91 yıllık kişisel birliğin barışçıl feshiyle doğan krallık; Danimarkalı Prens Carl, halkoylamasıyla kral seçilip Haakon VII adını aldı (1923 sonrasında da sürdü).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1905-06-07", tur:"kurulus", b:"Norveç Storting'i İsveç ile birliği tek taraflı feshetti" },
    { t:"1905-08-13", tur:"antlasma", b:"Halkoylamasıyla fesih onaylandı, Karlstad Antlaşması ile İsveç kabul etti" },
    { t:"1905-11-18", tur:"hukumdar", b:"Danimarka Prensi Carl, VII. Haakon unvanıyla kral oldu" }
  ]
},

// ================================================================================
// TAMAMLAYICI EKLER — Parti 6/7/8'in orijinal görev tanımındaki (OTURUM-3-
// DEVLETLER.md) maddelerinden ilk geçişte atlanan üçü: "körfez şeyhlikleri"
// (Parti 6), "Merînî/Fas" (Parti 7), "Avusturya ve Macaristan cumhuriyetleri,
// TBMM/Türkiye" (Parti 8). Görev dosyasını yeniden okurken fark edildi, geri
// dönüp tamamlandı. Ayrıca mevcut `bosna-kralligi` kaydına (Parti 0'dan kalma)
// eksik olan `harita:"bosna"` eklendi — orijinal 53'lük listedeki son boşluktu.
// ================================================================================

{ id:"merini", ad:"Merînî ve Vattâsî Fas Krallığı", tur:"krallik", bolge:"kuzey-afrika",
  f:"1196-01-01", t:"1549-01-01", baskent:"Fas (Fez)", harita:"merini",
  ozet:"Muvahhidler'in Zenâte kökenli vezirliğinden bağımsızlaşan, Fas'ı başkent yapan Berberî hanedan; Endülüs Nasrî Krallığı'na destek verdi, Portekiz'in kıyı şehirlerini almasıyla zayıflayıp Vattâsî vezirlerine, sonra Sâdîlere devretti (bkz. [[fas]]). (kaynak: TDV, madde: meriniler)",
  kaynak:"meriniler",
  kronoloji:[
    { t:"1196-01-01", tur:"kurulus", b:"Abdülhak b. Mahyû, Zenâte Merînî boyunun beyliğini kurdu (henüz Muvahhid hizmetinde)" },
    { t:"1269-01-01", tur:"toprak-kazanc", b:"Ebû Yûsuf Ya'kūb, Marakeş'i alarak Muvahhid devletine son verdi" },
    { t:"1340-01-01", tur:"savas", b:"Rio Salado'da Kastilya-Portekiz ittifakına yenilip Endülüs'e müdahalesi zayıfladı" },
    { t:"1415-01-01", tur:"toprak-kayip", b:"Portekiz Septe'yi (Ceuta) aldı, kıyı şehirleri kaybı başladı" },
    { t:"1471-01-01", tur:"bolunme", b:"Vattâsî ailesi (eski Merînî vezirleri) fiilî iktidarı ele geçirdi" },
    { t:"1549-01-01", tur:"son", b:"Sâdîler Fas'ı alarak hanedana son verdi (bkz. [[fas]])" }
  ]
},
{ id:"kuveyt", ad:"Kuveyt (Sabah Şeyhliği)", tur:"devlet", bolge:"arabistan",
  f:"1752-01-01", t:"1923-10-29", baskent:"Kuveyt şehri",
  ozet:"Uneyze'den gelen Utûb kabilesinin kurduğu, Basra vilayetine bağlı kaza statüsünde yönetilen şeyhlik; Şeyh Mübarek'in 1899'da gizlice İngiltere ile imzaladığı antlaşmayla fiilen Osmanlı'dan koptu (1923 sonrasında da sürdü). (kaynak: TDV, madde: kuveyt)",
  kaynak:"kuveyt",
  kronoloji:[
    { t:"1752-01-01", tur:"kurulus", b:"Utûb kabilesinden Sabah I, Kuveyt şeyhi seçildi" },
    { t:"1871-01-01", tur:"antlasma", b:"Osmanlı, Basra vilayetine bağlı bir kaza olarak Kuveyt'i idareye dahil etti" },
    { t:"1899-01-23", tur:"antlasma", b:"Şeyh Mübarek, İngiltere ile gizli himaye antlaşması imzaladı" },
    { t:"1913-07-29", tur:"antlasma", b:"Osmanlı-İngiliz sözleşmesiyle Kuveyt'in özerkliği tanındı (I. Dünya Savaşı nedeniyle yürürlüğe girmedi)" }
  ]
},
{ id:"bahreyn", ad:"Bahreyn (Âl Halîfe Şeyhliği)", tur:"devlet", bolge:"arabistan",
  f:"1783-01-01", t:"1923-10-29", baskent:"Manama",
  ozet:"Utûb kabilesinden Âl Halîfe ailesinin 1783'te ele geçirdiği ada şeyhliği; statüsü Osmanlı ile İngiltere arasında uzun süre tartışmalı kaldı, 1913'te Osmanlı iddiasından vazgeçti (1923 sonrasında da sürdü). (kaynak: TDV, madde: bahreyn)",
  kaynak:"bahreyn",
  kronoloji:[
    { t:"1783-01-01", tur:"kurulus", b:"Utûb kabilesinden Âl Halîfe ailesi Bahreyn'e egemen oldu" },
    { t:"1861-05-21", tur:"antlasma", b:"İngiltere ile köle ticaretinin yasaklanması antlaşması imzalandı" },
    { t:"1870-01-01", tur:"antlasma", b:"Bağdat valisi Bahreyn'i Osmanlı toprağı ilan etti, iddia tartışmalı kaldı" },
    { t:"1913-07-29", tur:"antlasma", b:"Osmanlı, Hakkı Paşa-Grey antlaşmasıyla Bahreyn iddiasından vazgeçti" }
  ]
},
{ id:"katar", ad:"Katar (Âl Sânî Şeyhliği)", tur:"devlet", bolge:"arabistan",
  f:"1868-01-01", t:"1923-10-29", baskent:"Devha (Doha)", harita:"katar",
  ozet:"Benî Temîm'in bir kolu olan Âl Sânî ailesinin 1868'den itibaren öne çıktığı şeyhlik; Osmanlı 1871'de Necid vilayetine bağlı bir kaza olarak idareye dahil etti, 1916'da İngiliz himayesine geçti (1923 sonrasında da sürdü). (kaynak: TDV, madde: katar)",
  kaynak:"katar",
  kronoloji:[
    { t:"1868-01-01", tur:"kurulus", b:"Âl Sânî ailesi (Muhammed b. Sânî) İngiltere tarafından yerel yönetici tanındı" },
    { t:"1871-01-01", tur:"antlasma", b:"Osmanlı askerî seferle Katar'ı Necid vilayetine bağlı kazaya dönüştürdü, Kāsım b. Muhammed fahri kaymakam oldu" },
    { t:"1893-01-01", tur:"savas", b:"Osmanlı'nın seferi başarısız oldu, Kāsım fiilî özerklik kazandı" },
    { t:"1916-11-03", tur:"antlasma", b:"İngiltere ile himaye antlaşması imzalandı" }
  ]
},
{ id:"avusturya-cumhuriyet", ad:"Avusturya Cumhuriyeti (I. Cumhuriyet)", tur:"cumhuriyet", bolge:"orta-avrupa",
  f:"1918-11-12", t:"1923-10-29", baskent:"Viyana",
  ozet:"Habsburg İmparatorluğu'nun dağılmasıyla kurulan küçük Alp cumhuriyeti; Almanya ile birleşme talebi Saint-Germain Antlaşması'yla yasaklandı (1923 sonrasında da sürdü, 1938'de Almanya'ya ilhak edildi).",
  kaynak:"avusturya",
  kronoloji:[
    { t:"1918-11-12", tur:"kurulus", b:"Alman-Avusturya Cumhuriyeti ilan edildi (Almanya ile birleşme hedefiyle)" },
    { t:"1919-09-10", tur:"antlasma", b:"Saint-Germain Antlaşması Almanya ile birleşmeyi yasakladı, ülke adı \"Avusturya\" oldu" }
  ]
},
{ id:"macaristan-naiplik", ad:"Macaristan (1918 Sonrası: Cumhuriyet → Naiplik)", tur:"devlet", bolge:"orta-avrupa",
  f:"1918-11-16", t:"1923-10-29", baskent:"Budapeşte", harita:"macaristan",
  ozet:"Avusturya-Macaristan'ın dağılmasıyla önce demokratik cumhuriyet, ardından kısa ömürlü bir Sovyet cumhuriyeti olarak kurulan, Romanya işgali sonrası kralsız bir krallığa (Horthy naipliği) dönüşen devlet (1923 sonrasında da sürdü, 1944'e dek).",
  kaynak:"macaristan",
  kronoloji:[
    { t:"1918-11-16", tur:"kurulus", b:"Károlyi önderliğinde Macaristan Halk Cumhuriyeti ilan edildi" },
    { t:"1919-03-21", tur:"bolunme", b:"Béla Kun, Macaristan Sovyet Cumhuriyeti'ni ilan etti" },
    { t:"1919-08-01", tur:"isgal", b:"Romanya orduları Budapeşte'yi işgal etti, Sovyet cumhuriyeti yıkıldı" },
    { t:"1920-03-01", tur:"hukumdar", b:"Miklós Horthy, kralsız krallığın naibi seçildi" },
    { t:"1920-06-04", tur:"antlasma", b:"Trianon Antlaşması ile toprakların üçte ikisini kaybetti" }
  ]
},
{ id:"tbmm-turkiye", ad:"Türkiye Büyük Millet Meclisi Hükûmeti", tur:"devlet", bolge:"anadolu",
  f:"1920-04-23", t:"1923-10-29", baskent:"Ankara",
  ozet:"Mondros sonrası işgallere karşı Anadolu'da toplanan direniş hareketinin kurduğu meclis hükûmeti; Kurtuluş Savaşı'nı kazanıp saltanatı kaldırdı, 29 Ekim 1923'te Cumhuriyet'i ilan ederek Osmanlı Devleti'nin yerini aldı.",
  kaynak:"turkiye-buyuk-millet-meclisi",
  kronoloji:[
    { t:"1919-05-19", tur:"kurulus", b:"Mustafa Kemal Samsun'a çıkarak Millî Mücadele'yi örgütlemeye başladı" },
    { t:"1919-07-23", tur:"kurulus", b:"Erzurum Kongresi toplandı" },
    { t:"1919-09-04", tur:"kurulus", b:"Sivas Kongresi toplandı, Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti kuruldu" },
    { t:"1920-01-28", tur:"antlasma", b:"Son Osmanlı Mebusan Meclisi Misâk-ı Millî'yi kabul etti" },
    { t:"1920-04-23", tur:"kurulus", b:"Türkiye Büyük Millet Meclisi Ankara'da açıldı" },
    { t:"1920-08-10", tur:"antlasma", b:"Sevr Antlaşması imzalandı, TBMM tanımadı" },
    { t:"1921-08-23", tur:"savas", b:"Sakarya Meydan Muharebesi başladı (13 Eylül'e dek)" },
    { t:"1922-08-26", tur:"savas", b:"Büyük Taarruz başladı, Yunan ordusu Dumlupınar'da bozguna uğratıldı" },
    { t:"1922-09-09", tur:"toprak-kazanc", b:"İzmir kurtarıldı" },
    { t:"1922-10-11", tur:"antlasma", b:"Mudanya Mütarekesi imzalandı" },
    { t:"1922-11-01", tur:"bolunme", b:"Saltanat kaldırıldı, Osmanlı Devleti fiilen sona erdi" },
    { t:"1923-07-24", tur:"antlasma", b:"Lozan Antlaşması ile bağımsızlık uluslararası tanındı" },
    { t:"1923-10-29", tur:"son", b:"Cumhuriyet ilan edildi, TBMM Hükûmeti yerini Türkiye Cumhuriyeti'ne bıraktı" }
  ]
},

// ================================================================================
// Parti 9: Orta Asya ve bozkırın doğusu — "tam ayrıntı" katmanı bitti, buradan
// itibaren "orta ayrıntı" (dünya kapsamı) başlıyor. Harita bu bölgeyi hiç
// kapsamıyor (pencere Fas-Ural/Norveç-Afrika Boynuzu ile sınırlı), BOYALAR'da
// bu 7 kayıttan hiçbirinin id'si yok — hepsi haritasız, salt dizin kaydı.
// Orta Asya hanlıkları İslâm dünyasına ait olduğu için TDV birincil kaynak
// (Cungar hariç — Budist Oyrat-Moğol, TDV'de ayrı maddesi yok, Kalmuklar
// maddesi içinde işleniyor).
// ================================================================================

{ id:"cagatay", ad:"Çağatay Hanlığı", tur:"hanlik", bolge:"orta-asya",
  f:"1227-01-01", t:"1370-01-01", baskent:"Almalık / Karşi", harita:"cagatay",
  ozet:"Cengiz Han'ın oğlu Çağatay'a düşen mirastan doğan, zamanla İslâmlaşan ve Mâverâünnehir/Moğolistan olarak ikiye bölünen hanlık; Timur'un yükselişiyle fiilen sona erdi (kukla hanlar 1448'e dek sürdü). (kaynak: TDV, madde: cagatay-hanligi)",
  kaynak:"cagatay-hanligi",
  kronoloji:[
    { t:"1227-01-01", tur:"kurulus", b:"Cengiz Han'ın oğlu Çağatay'a Mâverâünnehir ve çevresi pay edildi" },
    { t:"1260-01-01", tur:"kurulus", b:"Algu Han, hanlığı fiilen bağımsız hâle getiren gerçek kurucu oldu" },
    { t:"1326-01-01", tur:"hukumdar", b:"Tarmaşirin Han İslâmiyet'i kabul edip Alâeddin adını aldı" },
    { t:"1334-01-01", tur:"bolunme", b:"Tarmaşirin'in öldürülmesiyle hanlık Mâverâünnehir ve Moğolistan olarak ikiye bölündü" },
    { t:"1370-01-01", tur:"son", b:"Timur, Mâverâünnehir'de fiilî iktidarı ele geçirdi (bkz. [[timurlu]])" }
  ]
},
{ id:"buhara", ad:"Buhara Hanlığı / Emirliği", tur:"hanlik", bolge:"orta-asya",
  f:"1500-01-01", t:"1920-09-02", baskent:"Buhara", harita:"buhara",
  ozet:"16. yüzyıldan Sovyet işgaline dek Buhara merkezli hüküm süren dört ardışık hanedanın (Şeybânî, Canoğulları/Astrahanlı, Mangıt) ortak adı; Rus himayesine girdikten sonra Kızıl Ordu tarafından yıkıldı. (kaynak: TDV, madde: buhara-hanligi)",
  kaynak:"buhara",
  kronoloji:[
    { t:"1500-01-01", tur:"kurulus", b:"Şeybânî Han, Mâverâünnehir'i alarak hanlığı kurdu" },
    { t:"1599-01-01", tur:"bolunme", b:"Şeybânî hanedanı sona erdi, yerine Canoğulları (Astrahanlılar) geçti" },
    { t:"1785-01-01", tur:"bolunme", b:"Mangıt hanedanı iktidarı ele geçirip emirlik unvanını kullandı" },
    { t:"1868-01-01", tur:"antlasma", b:"Rusya'ya yenilip himaye altına girdi, toprak kaybetti" },
    { t:"1920-09-02", tur:"son", b:"Kızıl Ordu Buhara'yı ele geçirdi, Buhara Halk Sovyet Cumhuriyeti ilan edildi" }
  ]
},
{ id:"hive", ad:"Hive Hanlığı", tur:"hanlik", bolge:"orta-asya",
  f:"1512-01-01", t:"1920-04-26", baskent:"Ürgenç → Hive", harita:"hive",
  ozet:"Yadigâroğulları'nın Harzem'i ele geçirmesiyle kurulan, 17. yüzyılda başkenti Hive'ye taşıyan hanlık; Rus istilası sonrası himayeye girip Sovyet döneminde son buldu. (kaynak: TDV, madde: hive-hanligi)",
  kaynak:"hive-hanligi",
  kronoloji:[
    { t:"1512-01-01", tur:"kurulus", b:"Yadigâroğulları İlbars ve Bilbars, Özbek-Türkmen güçleriyle Harzem'i ele geçirdi" },
    { t:"1600-01-01", tur:"hukumdar", b:"Başkent Ürgenç'ten Hive'ye taşındı" },
    { t:"1873-03-01", tur:"savas", b:"General Kaufmann'ın seferi başladı" },
    { t:"1873-05-29", tur:"antlasma", b:"Hive düştü, Rus himayesine girdi" },
    { t:"1920-04-26", tur:"son", b:"Harzem Halk Cumhuriyeti ilan edilerek hanlığa son verildi" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — koordinatörün ölçtüğü ÇEKİRDEK'teki TEK
// gerçek dizinsiz kimlik (id ∪ harita taraması, `turkmen` hiçbir kayıtta yok).
// ⚠️ Bu bir "devlet" değil, gevşek aşiret konfederasyonu — TDV `turkmenler`
// maddesi de böyle anlatıyor (Yomut/Teke/Salur/Göklen/Eymir boyları, tek
// hükümdar yok). Hazar kıyısı ve İran sınırındaki boylar Safevî/Kaçar'a,
// doğudaki Ahal-Merv boyları zaman zaman Hîve'ye gevşek bağlıydı; Rus
// fethi de TEK GÜN değil, boy boy: Mangışlak/Hazar kıyısı ~1869-1874
// (Krasnovodsk kalesi), Ahal-Tekin (Göktepe) 1881, Merv 1884. Künyenin f/t'si
// bu yüzden bir "devletin ömrü" değil, atlasın veri penceresiyle (1600) Rus
// ilhakının tamamlandığı tarih (1884) arasını kapsayan bir SÖZLEŞMEDİR.
// (kaynak: TDV, madde: turkmenler — Göktepe 1881 TDV'de birebir geçiyor;
// Merv 1884 maddede yok, standart akademik kaynağa göre)
{ id:"turkmen", ad:"Türkmen Aşiret Konfederasyonları (Yomut, Teke, Salur, Göklen, Eymir)", tur:"devlet", bolge:"orta-asya",
  f:"1600-01-01", t:"1884-01-01", baskent:"(göçebe/yarı-göçebe, sabit başkent yok)",
  ozet:"Hazar'ın doğusu ile Ahal-Merv vahalarında yaşayan, tek bir hükümdarı olmayan Türkmen boy konfederasyonları; Hazar kıyısındakiler zaman zaman Hîve, Etrek-Gürgen boyları (\"Yaka Türkmen'i\") Safevî/Kaçar İran'ına gevşek bağlıydı. Rus fethi boy boy tamamlandı: Hazar kıyısı ~1869-74, Ahal-Tekin (Göktepe) 1881, Merv 1884. (kaynak: TDV, madde: turkmenler)",
  kaynak:"turkmenler",
  kronoloji:[
    { t:"1855-01-01", tur:"savas", b:"Teke başbuğu Kuşid Han, 1855 ve 1860'ta önemli zaferler kazanarak Tekeler'in gücünü pekiştirdi" },
    { t:"1873-05-29", tur:"toprak-kayip", b:"Hîve'nin Rus himayesine girmesiyle Hazar kıyısı Türkmenleri de Rus nüfuzuna girdi (bkz. [[hive]])" },
    { t:"1879-09-01", tur:"savas", b:"Ruslar Göktepe'de ilk seferde ağır bir yenilgiye uğradı" },
    { t:"1881-01-24", tur:"toprak-kayip", b:"General Skobelev'in ikinci Göktepe seferiyle Ahal-Tekin Türkmenleri Rus İmparatorluğu'na katıldı" },
    { t:"1884-01-01", tur:"son", b:"Merv Türkmenleri Rusya'ya bağlılığını ilan etti; bölgedeki bağımsız Türkmen varlığı sona erdi" }
  ]
},
{ id:"hokand", ad:"Hokand Hanlığı", tur:"hanlik", bolge:"orta-asya",
  f:"1710-01-01", t:"1876-02-19", baskent:"Hokand",
  ozet:"Fergana'da Ming boyundan Şahruh'un kurduğu hanlık; Âlim Han ve Muhammed Ali Han dönemlerinde genişledi, Rus istilasıyla Fergana vilayetine dönüştürüldü. (kaynak: TDV, madde: hokand-hanligi)",
  kaynak:"hokand-hanligi",
  kronoloji:[
    { t:"1710-01-01", tur:"kurulus", b:"Ming boyundan Şahruh, Hokand'ı başkent yaparak hanlığını kurdu" },
    { t:"1808-01-01", tur:"toprak-kazanc", b:"Âlim Han, Taşkent'i alarak hanlığı genişletti" },
    { t:"1868-01-01", tur:"antlasma", b:"Hudayâr Han, Rusya ile antlaşma imzalayıp toprak kaybetti" },
    { t:"1876-02-19", tur:"son", b:"Rusya hanlığı tamamen ilhak edip Fergana vilayeti yaptı" }
  ]
},
{ id:"kazak-hanligi", ad:"Kazak Hanlığı", tur:"hanlik", bolge:"orta-asya",
  f:"1465-01-01", t:"1847-01-01", baskent:"(göçebe, sabit başkent yok)", harita:"kazak-hanligi",
  ozet:"Ebü'l-Hayr Özbek konfederasyonundan ayrılan Kerey ve Canibek'in kurduğu, Büyük/Orta/Küçük Cüz olarak örgütlenen bozkır hanlığı; 19. yüzyılda kademeli Rus ilhakıyla son buldu. (kaynak: TDV, madde: kazaklar)",
  kaynak:"yetersiz — kazaklar maddesi okundu, hanlığın (1465-1847) kendi siyasi tarihini (kuruluş, üç cüz, Rus ilhakı aşamaları) ayrıntılı karşılamıyor; madde ağırlıklı olarak Kazakların etnik/kültürel tarihine ve 1991 sonrası bağımsızlığa odaklanıyor, yalnız \"ilk birleşik Kazak Hanlığı'nın XVI. yüzyıl başında Kasım Han tarafından kurulması\" gibi tek bir cümleyle değiniyor; dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1465-01-01", tur:"kurulus", b:"Kerey ve Canibek hanlar, Ebü'l-Hayr Han'a bağlı olmayan bir topluluk kurdu (Çu-Talas arası)" },
    { t:"1511-01-01", tur:"birlesme", b:"Kasım Han döneminde hanlık ilk kez güçlü bir birlik hâline geldi" },
    { t:"1731-01-01", tur:"antlasma", b:"Küçük Cüz, Rusya'nın himayesini kabul etti" },
    { t:"1822-01-01", tur:"toprak-kayip", b:"Rus reformlarıyla Orta Cüz'de hanlık unvanı kaldırıldı" },
    { t:"1847-01-01", tur:"son", b:"Son bağımsız han Kenesarı'nın ölümüyle hanlık fiilen sona erdi" }
  ]
},
{ id:"cungar", ad:"Cungar Hanlığı (Kalmuk)", tur:"hanlik", bolge:"orta-asya",
  f:"1634-01-01", t:"1758-01-01", baskent:"Gulca (Kulca) çevresi", harita:"cungar",
  ozet:"Budist Oyrat-Moğol boylarının Cungarya'da kurduğu, Kazaklara ve Çin'e karşı büyük bir bozkır gücü hâline gelen hanlık; Mançu Qing hanedanının 1755-58 seferleriyle nüfusu kırılarak yok edildi. TDV'de ayrı madde yok (Kalmuklar maddesi içinde işleniyor); tarihler standart akademik kaynaklara göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1634-01-01", tur:"kurulus", b:"Erdeni Batur, Oyrat boylarını birleştirip Cungar Hanlığı'nı kurdu" },
    { t:"1697-01-01", tur:"hukumdar", b:"Tsevang Rabtan döneminde hanlık Taşkent'e kadar genişleyip zirveye ulaştı" },
    { t:"1755-01-01", tur:"savas", b:"Qing İmparatoru Qianlong'un seferleri başladı" },
    { t:"1758-01-01", tur:"son", b:"Qing orduları Cungar nüfusunu büyük ölçüde kırıp hanlığı ortadan kaldırdı" }
  ]
},
{ id:"yakub-beg", ad:"Doğu Türkistan (Yâkub Bey Kâşgar Emirliği)", tur:"devlet", bolge:"orta-asya",
  f:"1865-01-01", t:"1878-03-16", baskent:"Kaşgar", harita:"yakub-beg",
  ozet:"Hokand kökenli Yâkub Bey'in Doğu Türkistan'da kurduğu, Osmanlı Sultanı Abdülaziz'in \"Emir\" unvanı ve yardım gönderdiği kısa ömürlü bağımsız devlet; Yâkub Bey'in ölümünün ardından Çin (Qing) yeniden fethetti. (kaynak: TDV, madde: yakub-beg)",
  kaynak:"kasgar",
  kronoloji:[
    { t:"1865-01-01", tur:"kurulus", b:"Yâkub Bey, Hokand'dan gelen kuvvetlerle Kaşgar'a hâkim oldu" },
    { t:"1867-01-01", tur:"kurulus", b:"Nominal hükümdar Bûzürg Han Töre'yi bertaraf edip \"Atalık Gazi\" unvanıyla bağımsızlığını ilan etti" },
    { t:"1872-01-01", tur:"antlasma", b:"Sultan Abdülaziz'e elçi gönderip \"Emir\" unvanını ve askerî yardım aldı, hutbe onun adına okundu" },
    { t:"1877-05-29", tur:"hukumdar", b:"Yâkub Bey öldü (muhtemelen suikast)" },
    { t:"1878-03-16", tur:"son", b:"Çin orduları Doğu Türkistan'ı tamamen yeniden fethetti" }
  ]
},

// ================================================================================
// Parti 10: Hindistan — "orta ayrıntı" tier, harita kapsamı dışı (hiçbiri
// BOYALAR'da yok). TDV'nin bu coğrafyadaki kapsamı çok sınırlı (Delhi
// Sultanlığı'nın kendi maddesi bile yok, Bâbür maddesi yalnız kurucusunu
// işliyor) — kaynak kuralının "TDV kapsamadığı coğrafyalar" istisnasına
// giriyor, standart akademik kaynağa (yaygın kabul görmüş tarihler) göre
// yazıldı. Görev talimatına uyarak yüzlerce prenslik/beylik tek tek
// yazılmadı, çatı devletler altında toplandı (ör. Behmenî'nin 5 ardılı ozet'te
// sayılıyor, ayrı kayıt açılmadı).
// ================================================================================

{ id:"delhi-sultanligi", ad:"Delhi Sultanlığı", tur:"devlet", bolge:"guney-asya",
  f:"1206-01-01", t:"1526-04-21", baskent:"Delhi", harita:"delhi-sultanligi",
  ozet:"Kuzey Hindistan'da beş ardışık hanedanın (Memlûk/Köle, Halacî, Tuğluk, Seyyid, Lûdî) yönettiği İslâm devleti; Bâbür'ün Birinci Panipat zaferiyle sona erdi (bkz. [[babur-imparatorlugu]]). TDV'de bu adla ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1206-01-01", tur:"kurulus", b:"Kutbüddin Aybek, Delhi'de bağımsızlığını ilan etti (Memlûk/Köle hanedanı)" },
    { t:"1290-01-01", tur:"bolunme", b:"Halacî hanedanı iktidara geçti" },
    { t:"1320-01-01", tur:"bolunme", b:"Tuğluk hanedanı iktidara geçti, sultanlık en geniş sınırlarına ulaştı" },
    { t:"1398-01-01", tur:"isgal", b:"Timur'un Delhi'yi yağmalamasıyla sultanlık ağır darbe aldı" },
    { t:"1414-01-01", tur:"bolunme", b:"Seyyid hanedanı iktidara geçti" },
    { t:"1451-01-01", tur:"bolunme", b:"Lûdî (Afgan kökenli) hanedanı iktidara geçti" },
    { t:"1526-04-21", tur:"son", b:"Birinci Panipat Savaşı'nda Bâbür, son sultan İbrâhim Lûdî'yi yenerek sultanlığa son verdi" }
  ]
},
{ id:"babur-imparatorlugu", ad:"Bâbürlü (Timurlu-Hint) İmparatorluğu", tur:"imparatorluk", bolge:"guney-asya",
  f:"1526-04-21", t:"1857-09-21", baskent:"Delhi / Agra", harita:"babur-imparatorlugu",
  ozet:"Bâbür'ün Birinci Panipat zaferiyle kurduğu, Ekber, Cihangir, Şah Cihan ve Evrengzîb dönemlerinde Hindistan'ın büyük bölümüne hâkim olan İslâm imparatorluğu; 1857 Büyük Ayaklanması sonrası İngilizler tarafından resmen kaldırıldı. (kaynak: TDV, madde: babur — yalnız kurucusu için; imparatorluğun devamı standart akademik kaynağa göre)",
  kaynak:"baburluler",
  kronoloji:[
    { t:"1526-04-21", tur:"kurulus", b:"Bâbür, Birinci Panipat Savaşı'nda Lûdî sultanlığını yenerek imparatorluğu kurdu" },
    { t:"1556-01-01", tur:"hukumdar", b:"Ekber tahta çıktı, imparatorluğu Hindistan'ın büyük bölümüne yaydı" },
    { t:"1658-01-01", tur:"hukumdar", b:"Evrengzîb tahta çıktı, imparatorluk en geniş sınırlarına ulaştı" },
    { t:"1739-01-01", tur:"savas", b:"İran'dan Nadir Şah Delhi'yi yağmaladı, imparatorluk fiilen zayıfladı" },
    { t:"1803-01-01", tur:"toprak-kayip", b:"İngiliz Doğu Hindistan Şirketi Delhi'yi ele geçirdi, imparator adı bir sembole indirgendi" },
    { t:"1857-09-21", tur:"son", b:"1857 Büyük Ayaklanması bastırıldıktan sonra son imparator II. Bahadır Şah tahttan indirilip sürgüne gönderildi" }
  ]
},
{ id:"behmeni", ad:"Behmenî Sultanlığı (Dekken)", tur:"sultanlik", bolge:"guney-asya",
  f:"1347-01-01", t:"1527-01-01", baskent:"Gulbarga → Bidar", harita:"behmeni",
  ozet:"Delhi Sultanlığı'na isyanla Dekken'de kurulan, güney Hindistan'ın ilk büyük İslâm devleti olan sultanlık; iç çekişmelerle beşe bölündü (Bicapur, Ahmednagar, Golkonda, Berar, Bidar — her biri ayrı kayıt açılmadı, burada özetlendi). (kaynak: TDV, madde: behmeniler)",
  kaynak:"behmeniler",
  kronoloji:[
    { t:"1347-01-01", tur:"kurulus", b:"Alâeddin Hasan Behmen Şah, Delhi'ye isyan edip Dekken'de sultanlığını kurdu" },
    { t:"1425-01-01", tur:"hukumdar", b:"Başkent Gulbarga'dan Bidar'a taşındı" },
    { t:"1481-01-01", tur:"hukumdar", b:"Vezir Mahmud Gâvân idam edildi, merkezi otorite çözülmeye başladı" },
    { t:"1527-01-01", tur:"bolunme", b:"Sultanlık Bicapur, Ahmednagar, Golkonda, Berar ve Bidar olmak üzere beş devlete bölündü" }
  ]
},
{ id:"vijayanagara", ad:"Vijayanagara İmparatorluğu", tur:"imparatorluk", bolge:"guney-asya",
  f:"1336-01-01", t:"1646-01-01", baskent:"Vijayanagara (Hampi)", harita:"vijayanagara",
  ozet:"Dekken sultanlıklarına karşı Hindu direnişini örgütleyen, güney Hindistan'a hâkim olan büyük Hindu imparatorluğu; Talikota Savaşı'nda Dekken sultanlıkları ittifakına yenilip başkenti yağmalandı, küçülmüş hâliyle bir asır daha sürdü. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1336-01-01", tur:"kurulus", b:"Harihara ve Bukka kardeşler, Vijayanagara'yı kurdu" },
    { t:"1509-01-01", tur:"hukumdar", b:"Krişnadevaraya döneminde imparatorluk zirvesine ulaştı" },
    { t:"1565-01-25", tur:"savas", b:"Talikota (Rakshasi-Tangadi) Savaşı'nda Dekken sultanlıkları ittifakına yenildi, başkent yağmalandı" },
    { t:"1646-01-01", tur:"son", b:"Küçülmüş hanedan son kalıntılarını da kaybedip tarihe karıştı" }
  ]
},
{ id:"maratha", ad:"Maratha Konfederasyonu", tur:"devlet", bolge:"guney-asya",
  f:"1674-06-06", t:"1818-06-03", baskent:"Pune (Peşvalar dönemi)", harita:"maratha",
  ozet:"Şivâcî'nin Bicapur ve Bâbürlülere karşı kurduğu Hindu krallığından doğan, sonradan Peşvalar önderliğinde gevşek bir konfederasyona dönüşen güç; üç Anglo-Maratha Savaşı sonunda İngiliz Doğu Hindistan Şirketi'ne yenildi. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1674-06-06", tur:"kurulus", b:"Şivâcî, Reygad'da kral olarak taç giydi" },
    { t:"1707-01-01", tur:"birlesme", b:"Evrengzîb'in ölümünden sonra Maratha gücü Peşvalar önderliğinde bir konfederasyona dönüştü" },
    { t:"1761-01-14", tur:"savas", b:"Üçüncü Panipat Savaşı'nda Afgan Ahmed Şah Dürrânî'ye ağır yenilgi aldı" },
    { t:"1803-01-01", tur:"savas", b:"İkinci Anglo-Maratha Savaşı'nda toprak kaybetti" },
    { t:"1818-06-03", tur:"son", b:"Üçüncü Anglo-Maratha Savaşı'nda Peşva II. Baci Rao teslim oldu, konfederasyon dağıldı" }
  ]
},
{ id:"sih-imparatorlugu", ad:"Sih İmparatorluğu (Pencap)", tur:"imparatorluk", bolge:"guney-asya",
  f:"1801-04-12", t:"1849-03-29", baskent:"Lahor", harita:"sih-imparatorlugu",
  ozet:"Rançit Singh'in Pencap'ta birleştirdiği Sih hanedanlığı; iki Anglo-Sih Savaşı sonunda İngiliz Doğu Hindistan Şirketi'ne ilhak edildi. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1801-04-12", tur:"kurulus", b:"Rançit Singh, Lahor'da Maharaca olarak taç giydi" },
    { t:"1839-06-27", tur:"hukumdar", b:"Rançit Singh öldü, ardından taht kavgaları başladı" },
    { t:"1846-03-09", tur:"savas", b:"Birinci Anglo-Sih Savaşı sonunda Lahor Antlaşması ile toprak kaybetti" },
    { t:"1849-03-29", tur:"son", b:"İkinci Anglo-Sih Savaşı sonunda İngilizler Pencap'ı ilhak etti" }
  ]
},
{ id:"meysur", ad:"Meysûr Sultanlığı (Haydar Ali / Tipu Sultan)", tur:"sultanlik", bolge:"guney-asya",
  f:"1761-01-01", t:"1799-05-04", baskent:"Seringapatam (Şrirangapatnam)", harita:"meysur",
  ozet:"Haydar Ali'nin Vodeyar hanedanından fiilen devraldığı, oğlu Tipu Sultan döneminde Osmanlı ve Fransa ile ittifak arayan, İngiliz Doğu Hindistan Şirketi'ne karşı dört savaş veren güney Hindistan devleti; Tipu'nun ölümüyle sona erdi. TDV'de ayrıntılı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1761-01-01", tur:"kurulus", b:"Haydar Ali, Vodeyar racasından fiilî iktidarı ele geçirdi" },
    { t:"1782-12-07", tur:"hukumdar", b:"Haydar Ali öldü, yerine oğlu Tipu Sultan geçti" },
    { t:"1787-01-01", tur:"antlasma", b:"Tipu Sultan, Osmanlı Sultanı I. Abdülhamid'e elçi göndererek ittifak aradı" },
    { t:"1792-01-01", tur:"savas", b:"Üçüncü Anglo-Mysore Savaşı'nda topraklarının yarısını kaybetti" },
    { t:"1799-05-04", tur:"son", b:"Dördüncü Anglo-Mysore Savaşı'nda Seringapatam düştü, Tipu Sultan savaşarak öldü" }
  ]
},
{ id:"ingiliz-hindistani", ad:"İngiliz Hindistanı (Şirket ve Taç Dönemi)", tur:"gecici-isgal", bolge:"guney-asya",
  f:"1757-06-23", t:"1923-10-29", baskent:"Kalküta → Yeni Delhi", harita:"ingiliz-hindistani",
  ozet:"Plasi Savaşı'yla Bengal'de başlayan, 1858'de Şirket'ten Taç'a geçen, alt kıtanın büyük bölümünü doğrudan veya prenslikler aracılığıyla yöneten sömürge idaresi (1923 sonrasında da sürdü, 1947'de bağımsızlığa dek).",
  kaynak:"hindistan",
  kronoloji:[
    { t:"1757-06-23", tur:"kurulus", b:"Plasi Savaşı'nda İngiliz Doğu Hindistan Şirketi Bengal Nevvâbı'nı yenip bölgeye hâkim oldu" },
    { t:"1858-08-02", tur:"bolunme", b:"1857 Ayaklanması sonrası Şirket idaresi kaldırıldı, Hindistan doğrudan İngiliz Tacı'na bağlandı" },
    { t:"1877-01-01", tur:"hukumdar", b:"Kraliçe Victoria \"Hindistan İmparatoriçesi\" unvanını aldı" },
    { t:"1885-01-01", tur:"kurulus", b:"Hindistan Ulusal Kongresi kuruldu" },
    { t:"1919-04-13", tur:"savas", b:"Amritsar (Cliyanvala Bağı) katliamı bağımsızlık hareketini hızlandırdı" }
  ]
},

// ================================================================================
// Parti 11: Doğu Asya — Çin, Moğol İmparatorluğu, Kore, Japonya, Ryukyu, Tibet.
// TDV kapsamı dışı (kaynak kuralının açık istisnası), standart akademik
// kaynağa göre. Harita kapsamı dışı, hiçbiri BOYALAR'da yok. Görev talimatına
// uyarak Azuchi-Momoyama ayrı kayıt açılmadı, Edo kaydının açılış
// kronolojisine (Nobunaga/Hideyoshi/Sekigahara) gömüldü.
// ================================================================================

{ id:"song", ad:"Song Hanedanı (Çin)", tur:"hanedanlik", bolge:"dogu-asya",
  f:"960-01-01", t:"1279-03-19", baskent:"Bianjing (Kaifeng) → Lin'an (Hangzhou)",
  ozet:"Çin'i beş hanedan kargaşasından sonra yeniden birleştiren, matbaa ve barutun geliştiği hanedan; kuzeyi Jin'e kaptırıp güneye çekildi (Güney Song), sonunda Moğollara yenildi.",
  kaynak:"cin--ulke",
  kronoloji:[
    { t:"960-01-01", tur:"kurulus", b:"General Zhao Kuangyin (Taizu), Çin'i yeniden birleştirdi" },
    { t:"1127-01-01", tur:"toprak-kayip", b:"Jin (Jurchen) istilasıyla kuzey Çin kaybedildi, saray Hangzhou'ya çekildi (Güney Song)" },
    { t:"1234-01-01", tur:"ittifak", b:"Moğollarla ittifak kurup Jin'i ortadan kaldırdı" },
    { t:"1279-03-19", tur:"son", b:"Yamen deniz savaşında Moğollara yenilip son çocuk imparator boğuldu" }
  ]
},
{ id:"jin-hanedani", ad:"Jin Hanedanı (Jurchen, Kuzey Çin)", tur:"hanedanlik", bolge:"dogu-asya",
  f:"1115-01-01", t:"1234-02-09", baskent:"Zhongdu (Pekin)",
  ozet:"Mançurya kökenli Jurchenlerin Liao'ya son verip kurduğu, kuzey Çin'e hâkim olan hanedan; Moğol-Song ittifakıyla ortadan kaldırıldı.",
  kaynak:"cin--ulke",
  kronoloji:[
    { t:"1115-01-01", tur:"kurulus", b:"Wanyan Aguda, Jurchen boylarını birleştirip Jin hanedanını kurdu" },
    { t:"1127-01-01", tur:"toprak-kazanc", b:"Kaifeng'i alarak Song sarayını güneye sürdü" },
    { t:"1234-02-09", tur:"son", b:"Moğol-Song ittifakı Caizhou'yu düşürdü, hanedan sona erdi" }
  ]
},
{ id:"mogol-imparatorlugu", ad:"Moğol İmparatorluğu (bölünmemiş)", tur:"imparatorluk", bolge:"dogu-asya",
  f:"1206-01-01", t:"1260-01-01", baskent:"Karakurum",
  ozet:"Cengiz Han'ın kurultayda ilan edilmesiyle doğan, tarihin en geniş kara imparatorluğu; Möngke'nin ölümü sonrası taht kavgasıyla dört hanlığa (Yuan, Altın Orda, Çağatay, İlhanlı — hepsi ayrı kayıtlı) bölündü.",
  kaynak:"mogollar",
  kronoloji:[
    { t:"1206-01-01", tur:"kurulus", b:"Timuçin, kurultayda Cengiz Han unvanıyla büyük han ilan edildi" },
    { t:"1219-01-01", tur:"savas", b:"Harzemşahlar'a sefer başlattı, İran ve Mâverâünnehir'i harap etti" },
    { t:"1234-01-01", tur:"toprak-kazanc", b:"Ögedey Han döneminde Jin hanedanı yıkıldı, kuzey Çin alındı" },
    { t:"1260-01-01", tur:"bolunme", b:"Möngke'nin ölümü sonrası Kubilay-Arık Böke taht kavgasıyla imparatorluk fiilen dört hanlığa ayrıldı" }
  ]
},
{ id:"yuan-hanedani", ad:"Yuan Hanedanı (Moğol Çin)", tur:"hanedanlik", bolge:"dogu-asya",
  f:"1271-01-01", t:"1368-09-14", baskent:"Hanbalık (Pekin)", harita:"yuan-hanedani",
  ozet:"Kubilay Han'ın Çin'de kurduğu, bütün Çin'i birleştiren Moğol hanedanı (bkz. [[mogol-imparatorlugu]]); veba, ekonomik çöküş ve Kızıl Sarıklı isyanlarıyla yıkılıp Moğollar bozkıra çekildi.",
  kaynak:"cin--ulke",
  kronoloji:[
    { t:"1271-01-01", tur:"kurulus", b:"Kubilay Han, Çince \"Yuan\" hanedan adını ilan etti" },
    { t:"1279-03-19", tur:"toprak-kazanc", b:"Güney Song'u tamamen ilhak ederek Çin'i birleştirdi" },
    { t:"1351-01-01", tur:"isyan", b:"Kızıl Sarıklı isyanı başladı" },
    { t:"1368-09-14", tur:"son", b:"Zhu Yuanzhang Pekin'i aldı, Ming'i ilan etti; Moğollar kuzeye çekildi (Kuzey Yuan)" }
  ]
},
{ id:"ming-hanedani", ad:"Ming Hanedanı", tur:"hanedanlik", bolge:"dogu-asya",
  f:"1368-01-23", t:"1644-04-25", baskent:"Nanjing → Pekin", harita:"ming-hanedani",
  ozet:"Moğol Yuan'ı devirip Çin'i yeniden Çin hanedanının eline veren, Zheng He'nin deniz seferleriyle tanınan hanedan; köylü isyanı ve ardından Mançu istilasıyla yıkıldı.",
  kaynak:"cin--ulke",
  kronoloji:[
    { t:"1368-01-23", tur:"kurulus", b:"Zhu Yuanzhang, Hongwu unvanıyla imparator ilan edildi" },
    { t:"1405-01-01", tur:"antlasma", b:"Amiral Zheng He'nin büyük deniz seferleri başladı (1433'e dek)" },
    { t:"1421-01-01", tur:"hukumdar", b:"Başkent Nanjing'den Pekin'e taşındı" },
    { t:"1644-04-25", tur:"son", b:"Li Zicheng'in köylü ordusu Pekin'i aldı, son imparator intihar etti (Güney Ming 1662'ye dek direndi)" }
  ]
},
{ id:"qing-hanedani", ad:"Qing Hanedanı (Mançu)", tur:"hanedanlik", bolge:"dogu-asya",
  f:"1636-05-15", t:"1912-02-12", baskent:"Mukden (Şenyang) → Pekin", harita:"qing-hanedani",
  ozet:"Mançu Nurhaci'nin oğlu Hong Taiji'nin kurduğu, Ming'in yıkılışından yararlanıp Çin'e hâkim olan son imparatorluk hanedanı; Afyon Savaşları ve Batı baskısıyla zayıflayıp 1911 Devrimi'yle sona erdi.",
  kaynak:"cin--ulke",
  kronoloji:[
    { t:"1636-05-15", tur:"kurulus", b:"Hong Taiji, hanedan adını \"Qing\" olarak ilan etti" },
    { t:"1644-06-06", tur:"toprak-kazanc", b:"Pekin'i alarak Çin'e hâkim oldu" },
    { t:"1839-01-01", tur:"savas", b:"Birinci Afyon Savaşı başladı, Batı'ya kapılar zorla açıldı" },
    { t:"1900-01-01", tur:"isyan", b:"Boksör Ayaklanması sekiz ülkenin müdahalesiyle bastırıldı" },
    { t:"1912-02-12", tur:"son", b:"Son imparator Puyi tahttan feragat etti, Çin Cumhuriyeti ilan edildi" }
  ]
},
{ id:"goryeo", ad:"Goryeo Hanedanı (Kore)", tur:"hanedanlik", bolge:"dogu-asya",
  f:"918-01-01", t:"1392-07-17", baskent:"Kaesong", harita:"goryeo",
  ozet:"Kore'yi yeniden birleştiren, adından \"Korea\" adının türediği hanedan; Moğol istilası sonrası vasallık dönemi yaşadı, General Yi Seong-gye'nin darbesiyle sona erdi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"918-01-01", tur:"kurulus", b:"Wang Geon, Goryeo hanedanını kurdu" },
    { t:"1231-01-01", tur:"isgal", b:"Moğol istilaları başladı, uzun direnişin ardından vasallık kabul edildi (1270)" },
    { t:"1392-07-17", tur:"son", b:"General Yi Seong-gye darbeyle tahtı ele geçirip Joseon'u kurdu" }
  ]
},
{ id:"joseon", ad:"Joseon Hanedanı (Kore)", tur:"hanedanlik", bolge:"dogu-asya",
  f:"1392-07-17", t:"1910-08-29", baskent:"Hanseong (Seul)", harita:"joseon",
  ozet:"Yi Seong-gye'nin kurduğu, Konfüçyüsçülüğü devlet ilkesi yapan, Kral Sejong'un Han alfabesini (hangıl) icat ettirdiği uzun ömürlü hanedan; 1897'de kısa süreliğine \"Kore İmparatorluğu\" adını aldı, Japonya'nın ilhakıyla sona erdi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1392-07-17", tur:"kurulus", b:"Yi Seong-gye, Joseon hanedanını kurdu" },
    { t:"1443-01-01", tur:"hukumdar", b:"Kral Sejong, Kore alfabesi hangıl'ı icat ettirdi" },
    { t:"1592-01-01", tur:"savas", b:"Japon Hideyoshi'nin istilası (Imjin Savaşı) başladı (1598'e dek)" },
    { t:"1897-10-12", tur:"hukumdar", b:"Kral Gojong kendini imparator ilan edip \"Kore İmparatorluğu\"nu kurdu" },
    { t:"1910-08-29", tur:"son", b:"Japonya Kore'yi resmen ilhak etti" }
  ]
},
{ id:"kamakura", ad:"Kamakura Şogunluğu (Japonya)", tur:"devlet", bolge:"dogu-asya",
  f:"1185-01-01", t:"1333-07-04", baskent:"Kamakura", harita:"kamakura",
  ozet:"Minamoto no Yoritomo'nun kurduğu, Japonya'da askerî şogun idaresinin ilk örneği olan yönetim; iki Moğol istilasını (Kubilay Han) püskürttü ama mâlî çöküşle iç isyanlara yenildi.",
  kaynak:"japonya",
  kronoloji:[
    { t:"1185-01-01", tur:"kurulus", b:"Minamoto no Yoritomo, Genpei Savaşı'nı kazanıp fiilî iktidarı ele geçirdi" },
    { t:"1192-01-01", tur:"hukumdar", b:"İmparatordan resmî \"seii taishogun\" unvanını aldı" },
    { t:"1274-01-01", tur:"savas", b:"Birinci Moğol istilası \"kamikaze\" fırtınasıyla püskürtüldü (İkincisi 1281'de)" },
    { t:"1333-07-04", tur:"son", b:"Kenmu Restorasyonu ile şogunluk yıkıldı, imparator kısa süreliğine doğrudan iktidara döndü" }
  ]
},
{ id:"muromachi", ad:"Muromachi (Ashikaga) Şogunluğu", tur:"devlet", bolge:"dogu-asya",
  f:"1336-01-01", t:"1573-09-01", baskent:"Kyoto", harita:"muromachi",
  ozet:"Ashikaga Takauji'nin kurduğu, sonraki yüzyılında \"Sengoku\" (Savaşan Beylikler) kaosuna sürüklenen zayıf şogunluk; Oda Nobunaga'nın son şogunu devirmesiyle fiilen sona erdi.",
  kaynak:"japonya",
  kronoloji:[
    { t:"1336-01-01", tur:"kurulus", b:"Ashikaga Takauji, Kyoto'da yeni şogunluğu kurdu" },
    { t:"1467-01-01", tur:"isyan", b:"Ōnin Savaşı ile merkezi otorite çöktü, Sengoku (Savaşan Beylikler) dönemi başladı" },
    { t:"1573-09-01", tur:"son", b:"Oda Nobunaga, son şogun Ashikaga Yoshiaki'yi Kyoto'dan kovdu" }
  ]
},
{ id:"edo-bakufu", ad:"Edo (Tokugawa) Şogunluğu", tur:"devlet", bolge:"dogu-asya",
  f:"1603-03-24", t:"1868-01-03", baskent:"Edo (Tokyo)", harita:"edo-bakufu",
  ozet:"Nobunaga ve Hideyoshi'nin başlattığı birleşme sürecini Sekigahara zaferiyle tamamlayan Tokugawa Ieyasu'nun kurduğu, 250 yıl süren \"sakoku\" (dışa kapalılık) politikasıyla tanınan şogunluk; Meiji Restorasyonu'yla yıkıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1600-10-21", tur:"savas", b:"Sekigahara Savaşı'nda Tokugawa Ieyasu rakiplerini kesin yendi" },
    { t:"1603-03-24", tur:"kurulus", b:"İmparatordan şogun unvanını alarak Edo'da şogunluğunu kurdu" },
    { t:"1639-01-01", tur:"antlasma", b:"\"Sakoku\" politikasıyla ülke neredeyse tamamen dışa kapatıldı" },
    { t:"1853-07-08", tur:"antlasma", b:"Komodor Perry'nin ABD filosu Japonya'yı dışa açılmaya zorladı" },
    { t:"1868-01-03", tur:"son", b:"Meiji Restorasyonu ilan edildi, şogunluk kaldırıldı (Boshin Savaşı 1869'a dek sürdü)" }
  ]
},
{ id:"meiji-japonya", ad:"Meiji ve Sonrası Japonya İmparatorluğu", tur:"imparatorluk", bolge:"dogu-asya",
  f:"1868-01-03", t:"1923-10-29", baskent:"Tokyo", harita:"meiji-japonya",
  ozet:"Şogunluğun yıkılıp imparatorluk otoritesinin \"restore\" edilmesiyle hızla sanayileşen, Çin ve Rusya'yı yenip büyük güç hâline gelen imparatorluk (1923 sonrasında da sürdü).",
  kaynak:"japonya",
  kronoloji:[
    { t:"1868-01-03", tur:"kurulus", b:"Meiji Restorasyonu ilan edildi, imparator fiilî iktidara döndü" },
    { t:"1889-02-11", tur:"antlasma", b:"Meiji Anayasası kabul edildi" },
    { t:"1895-04-17", tur:"savas", b:"Birinci Çin-Japon Savaşı'nı kazanıp Tayvan'ı aldı" },
    { t:"1905-09-05", tur:"savas", b:"Rus-Japon Savaşı'nı kazanarak büyük güç statüsü kazandı" },
    { t:"1910-08-29", tur:"toprak-kazanc", b:"Kore'yi ilhak etti (bkz. [[joseon]])" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — DALGA 2: `ryukyu` harita kimliği künyenin
// ömrünün (1429-1879) ÖNCESİNDE de (1281-1429) kullanılıyordu. ⚠️ Bilerek
// YALNIZ 1322-1429 kapatıldı — 1281-1322 arası (Gusuku çağının erken safhası)
// tanımlı bir devlet YOK, uydurulmadı; o pencere kasıtlı olarak boş kaldı.
// TDV'de yok, standart akademik (Doğu Asya, §4 kapsam dışı).
{ id:"sanzan", ad:"Sanzan Dönemi (Üç Krallık, Okinawa)", tur:"devlet", bolge:"dogu-asya",
  f:"1322-01-01", t:"1429-01-01", baskent:"— (üç ayrı merkez: Nakijin, Urasoe/Shuri, Ozato)",
  ozet:"Okinawa adasının Hokuzan, Chuzan ve Nanzan olmak üzere üç yerel krallığa bölündüğü dönem; Chuzan hanedanının Shō Hashi önderliğinde diğer ikisini de fethetmesiyle birleşik Ryukyu Krallığı doğdu (bkz. [[ryukyu]]). TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1322-01-01", tur:"kurulus", b:"Okinawa'nın üç bölgesi (Hokuzan, Chuzan, Nanzan) ayrı ayrı krallık ilan etti — Sanzan dönemi başladı" },
    { t:"1416-01-01", tur:"toprak-kazanc", b:"Chuzan, kuzeydeki Hokuzan'ı fethetti" },
    { t:"1429-01-01", tur:"son", b:"Chuzan, güneydeki Nanzan'ı da fethedip Shō Hashi önderliğinde Ryukyu Krallığı'nı kurdu" }
  ]
},
{ id:"ryukyu", ad:"Ryukyu Krallığı", tur:"krallik", bolge:"dogu-asya",
  f:"1429-01-01", t:"1879-03-27", baskent:"Şuri (Okinawa)", harita:"ryukyu",
  ozet:"Okinawa adalarını birleştiren, Çin ve Japonya arasında çift bağlılıkla (hem Ming/Qing'e hem Satsuma'ya haraç) ayakta kalan ada krallığı; Meiji Japonyası tarafından ilhak edilip Okinawa vilayeti yapıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1429-01-01", tur:"kurulus", b:"Shō Hashi, üç Okinawa krallığını birleştirdi" },
    { t:"1609-01-01", tur:"isgal", b:"Japon Satsuma Hanı adayı işgal edip haraca bağladı (Çin'e bağlılık da sürdü)" },
    { t:"1879-03-27", tur:"son", b:"Japonya krallığı resmen ilga edip Okinawa vilayetini kurdu" }
  ]
},
{ id:"tibet-ganden-phodrang", ad:"Tibet (Dalai Lama Hükûmeti, Ganden Phodrang)", tur:"devlet", bolge:"dogu-asya",
  f:"1642-01-01", t:"1923-10-29", baskent:"Lhasa", harita:"tibet-ganden-phodrang",
  ozet:"5. Dalai Lama'nın Moğol Güşi Han'ın desteğiyle kurduğu, Budist teokratik yönetim; 18. yüzyıldan itibaren Qing himayesine girdi, Qing'in 1912 yıkılışıyla fiilen bağımsızlaştı (1923 sonrasında da sürdü, 1950'de Çin ilhakına dek).",
  kaynak:"tibet",
  kronoloji:[
    { t:"1642-01-01", tur:"kurulus", b:"5. Dalai Lama, Güşi Han'ın askerî desteğiyle Tibet'in tek hâkimi oldu" },
    { t:"1720-01-01", tur:"antlasma", b:"Qing orduları Cungarları kovup Tibet'i himayesine aldı" },
    { t:"1904-01-01", tur:"isgal", b:"İngiliz Younghusband seferi Lhasa'ya girdi" },
    { t:"1912-01-01", tur:"bolunme", b:"Qing'in yıkılışıyla 13. Dalai Lama bağımsızlığını ilan etti" }
  ]
},

// ================================================================================
// Parti 12: Güneydoğu Asya — TDV kapsamı dışı (Açe kısmen İslâm dünyası
// sayılabilir ama TDV'de ayrıntılı madde bulunamadı), standart akademik
// kaynağa göre. Harita kapsamı dışı. Pagan Krallığı'nın 1287 sonu ayrı kayıt
// açılmadı, Toungoo'nun açılış kronolojisine gömüldü.
// ================================================================================

{ id:"majapahit", ad:"Majapahit İmparatorluğu (Cava)", tur:"imparatorluk", bolge:"guneydogu-asya",
  f:"1293-01-01", t:"1527-01-01", baskent:"Trowulan", harita:"majapahit",
  ozet:"Moğol istilasını püskürtüp kurulan, Nusantara'nın büyük bölümüne nüfuz eden Hindu-Budist imparatorluk; iç kavgalar ve yükselen İslâm sultanlıklarının baskısıyla zayıflayıp Demak Sultanlığı'nca tasfiye edildi.",
  kaynak:"endonezya",
  kronoloji:[
    { t:"1293-01-01", tur:"kurulus", b:"Raden Wijaya, Moğol istila kuvvetini püskürtüp imparatorluğu kurdu" },
    { t:"1350-01-01", tur:"hukumdar", b:"Hayam Wuruk ve vezir Gajah Mada döneminde imparatorluk zirvesine ulaştı" },
    { t:"1478-01-01", tur:"bolunme", b:"İç taht kavgalarıyla merkezi otorite zayıfladı" },
    { t:"1527-01-01", tur:"son", b:"Demak Sultanlığı son kalıntılarını da ortadan kaldırdı" }
  ]
},
{ id:"malaka-sultanligi", ad:"Malaka Sultanlığı", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1400-01-01", t:"1511-08-24", baskent:"Malaka", harita:"malaka-sultanligi",
  ozet:"Parameswara'nın kurduğu, Malakka Boğazı ticaretini denetleyen, İslâm'ın Nusantara'ya yayılmasında merkez rol oynayan sultanlık; Portekizli Afonso de Albuquerque'nin fethiyle sona erdi.",
  kaynak:"malaka",
  kronoloji:[
    { t:"1400-01-01", tur:"kurulus", b:"Parameswara, Malaka'yı kurup ticaret limanı hâline getirdi" },
    { t:"1414-01-01", tur:"hukumdar", b:"Hânedan İslâmiyet'i kabul etti" },
    { t:"1511-08-24", tur:"son", b:"Portekizli Afonso de Albuquerque şehri fethetti" }
  ]
},
{ id:"ayutthaya", ad:"Ayutthaya Krallığı (Siyam)", tur:"krallik", bolge:"guneydogu-asya",
  f:"1351-01-01", t:"1767-04-07", baskent:"Ayutthaya", harita:"ayutthaya",
  ozet:"Chao Phraya vadisinde kurulan, Güneydoğu Asya'nın en güçlü krallıklarından biri olan Siyam devleti; Birmanya Konbaung ordularınca başkenti yakılıp yıkıldı (bkz. [[siyam-chakri]]).",
  kaynak:"tayland",
  kronoloji:[
    { t:"1351-01-01", tur:"kurulus", b:"U Thong (I. Ramathibodi), Ayutthaya'yı kurdu" },
    { t:"1569-01-01", tur:"toprak-kayip", b:"Birmanya Toungoo hanedanına yenilip geçici olarak vasal oldu" },
    { t:"1767-04-07", tur:"son", b:"Konbaung orduları başkenti yakıp yıktı" }
  ]
},
{ id:"siyam-chakri", ad:"Siyam Krallığı (Rattanakosin / Chakri Hanedanı)", tur:"krallik", bolge:"guneydogu-asya",
  f:"1782-04-06", t:"1923-10-29", baskent:"Bangkok", harita:"siyam-chakri",
  ozet:"Ayutthaya'nın yıkılışından sonra Taksin'in kısa Thonburi döneminin ardından I. Rama'nın kurduğu, Güneydoğu Asya'da sömürgeleşmeyen tek krallık (1923 sonrasında da sürdü).",
  kaynak:"tayland",
  kronoloji:[
    { t:"1782-04-06", tur:"kurulus", b:"General Chakri (I. Rama), Bangkok'u başkent yaparak hanedanı kurdu" },
    { t:"1855-01-01", tur:"antlasma", b:"Bowring Antlaşması ile İngiltere'ye ticarî ayrıcalıklar verildi" },
    { t:"1868-01-01", tur:"hukumdar", b:"V. Rama (Chulalongkorn) tahta çıkıp modernleşme reformlarını başlattı" }
  ]
},
{ id:"le-hanedani", ad:"Lê Hanedanı (Đại Việt)", tur:"hanedanlik", bolge:"guneydogu-asya",
  f:"1428-01-01", t:"1789-01-01", baskent:"Thăng Long (Hanoi)", harita:"le-hanedani",
  ozet:"Lê Lợi'nin Çin (Ming) işgaline karşı zaferiyle kurduğu Vietnam hanedanı; sonraki yüzyıllarda Trịnh ve Nguyễn beyliklerinin gölgesinde fiilen bölünmüş yaşadı, Tây Sơn isyanıyla sona erdi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1428-01-01", tur:"kurulus", b:"Lê Lợi, Ming işgaline son verip hanedanı kurdu" },
    { t:"1600-01-01", tur:"bolunme", b:"Trịnh (kuzey) ve Nguyễn (güney) beylikleri arasında fiilî bölünme yerleşti" },
    { t:"1789-01-01", tur:"son", b:"Tây Sơn kardeşlerin isyanı hanedana fiilen son verdi" }
  ]
},
{ id:"nguyen-hanedani", ad:"Nguyễn Hanedanı (Vietnam)", tur:"hanedanlik", bolge:"guneydogu-asya",
  f:"1802-06-01", t:"1923-10-29", baskent:"Huế", harita:"nguyen-hanedani",
  ozet:"Gia Long'un Tây Sơn'a son verip Vietnam'ı yeniden birleştirdiği son hanedan; Fransız baskısıyla 1880'lerde protektora hâline geldi (1923 sonrasında da sürdü, 1945'e dek).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1802-06-01", tur:"kurulus", b:"Nguyễn Ánh (Gia Long), Tây Sơn'ı yenip Vietnam'ı birleştirdi" },
    { t:"1858-01-01", tur:"savas", b:"Fransız donanması Da Nang'ı bombalayıp müdahaleye başladı" },
    { t:"1884-06-06", tur:"antlasma", b:"Huế Antlaşması ile ülke Fransız protektorasına dönüştü" }
  ]
},
{ id:"kamboc-kralligi", ad:"Kamboçya Krallığı (Post-Angkor)", tur:"krallik", bolge:"guneydogu-asya",
  f:"1431-01-01", t:"1923-10-29", baskent:"Phnom Penh", harita:"kamboc-kralligi",
  ozet:"Angkor'un Siyam baskısıyla terk edilmesinden sonra küçülerek varlığını sürdüren Khmer krallığı; Fransız protektorasına girerek yıkılmaktan kurtuldu (1923 sonrasında da sürdü).",
  kaynak:"kamboc",
  kronoloji:[
    { t:"1431-01-01", tur:"toprak-kayip", b:"Ayutthaya kuşatması sonrası Angkor terk edildi, saray güneye taşındı" },
    { t:"1813-01-01", tur:"vassal", b:"Vietnam generali Lê Văn Duyệt, Oudong'u ele geçirip Kral Ang Chan II'yi tahtına iade etti; Kamboçya bundan sonra hem Bangkok'a hem Huế'ye haraç ödeyerek Siyam-Vietnam çifte tâbiiyetine girdi (standart akademik kaynak: Britannica 'Chan II')" },
    { t:"1848-03-07", tur:"hukumdar", b:"Siyam ve Vietnam'ın ortak egemenlik uzlaşması ardından Ang Duong, yeni başkent Udong'da taç giyip hukuk kodunu yenileyerek modern Kamboçya kimliğinin temelini attı (standart akademik kaynak: Britannica 'Duong')" },
    { t:"1863-08-11", tur:"antlasma", b:"Kral Norodom, Fransız protektorasını kabul etti" }
  ]
},
{ id:"toungoo", ad:"Toungoo Hanedanı (Birmanya)", tur:"hanedanlik", bolge:"guneydogu-asya",
  f:"1510-01-01", t:"1752-01-01", baskent:"Toungoo → Pegu → Ava", harita:"toungoo",
  ozet:"Pagan Krallığı'nın 1287 Moğol istilası sonrası parçalanmasından doğan küçük beyliklerden birinin (Toungoo) Birmanya'yı yeniden birleştirmesiyle kurulan hanedan; iç isyanlarla yıkıldı.",
  kaynak:"myanmar",
  kronoloji:[
    { t:"1287-01-01", tur:"bolunme", b:"Moğol istilası Pagan Krallığı'nı parçaladı, küçük beylikler dönemi başladı" },
    { t:"1510-01-01", tur:"kurulus", b:"Tabinshwehti, Toungoo hanedanını kurdu" },
    { t:"1599-01-01", tur:"bolunme", b:"İç kavgalarla imparatorluk geçici olarak parçalandı" },
    { t:"1752-01-01", tur:"son", b:"Mon isyanı başkenti düşürdü, hanedan sona erdi" }
  ]
},
{ id:"konbaung", ad:"Konbaung Hanedanı (Birmanya)", tur:"hanedanlik", bolge:"guneydogu-asya",
  f:"1752-01-01", t:"1885-11-29", baskent:"Ava → Mandalay", harita:"konbaung",
  ozet:"Alaungpaya'nın kurduğu, Birmanya'nın son bağımsız hanedanı; üç Anglo-Birman Savaşı sonunda İngiliz Hindistanı'na ilhak edildi.",
  kaynak:"myanmar",
  kronoloji:[
    { t:"1752-01-01", tur:"kurulus", b:"Alaungpaya, Mon isyanını bastırıp hanedanı kurdu" },
    { t:"1767-04-07", tur:"savas", b:"Siyam'ın başkenti Ayutthaya'yı yıktı" },
    { t:"1824-01-01", tur:"savas", b:"Birinci Anglo-Birman Savaşı'nda toprak kaybetti" },
    { t:"1885-11-29", tur:"son", b:"Üçüncü Anglo-Birman Savaşı sonunda Mandalay düştü, Kral Thibaw sürgüne gönderildi" }
  ]
},
{ id:"ace-sultanligi", ad:"Açe Sultanlığı (Sumatra)", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1496-01-01", t:"1903-01-01", baskent:"Banda Aceh", harita:"ace-sultanligi",
  ozet:"Sumatra'nın kuzeyinde kurulan, Osmanlı ile 16. yüzyılda elçilik ve top-mühimmat yardımı düzeyinde ilişki kuran güçlü İslâm sultanlığı; uzun Açe Savaşı sonunda Hollanda'ya boyun eğdi.",
  kaynak:"ace",
  kronoloji:[
    { t:"1496-01-01", tur:"kurulus", b:"Ali Mughayat Syah, sultanlığı kurdu" },
    { t:"1565-01-01", tur:"ittifak", b:"Osmanlı Sultanı Kanuni'den top ve mühimmat yardımı istedi, sınırlı destek geldi" },
    { t:"1873-01-01", tur:"savas", b:"Hollanda'nın uzun Açe Savaşı başladı" },
    { t:"1903-01-01", tur:"son", b:"Son sultan Muhammed Davud Şah Hollanda'ya resmen teslim oldu" }
  ]
},
{ id:"mataram-sultanligi", ad:"Mataram Sultanlığı (Cava)", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1587-01-01", t:"1755-02-13", baskent:"Kartasura → Surakarta", harita:"mataram-sultanligi",
  ozet:"Orta Cava'da kurulan, ada üzerinde son büyük yerli birleşik gücü temsil eden İslâm sultanlığı; Hollanda Doğu Hindistan Şirketi'nin araya girmesiyle Giyanti Antlaşması'nda ikiye bölündü.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1587-01-01", tur:"kurulus", b:"Panembahan Senopati, Mataram Sultanlığı'nı kurdu" },
    { t:"1613-01-01", tur:"hukumdar", b:"Sultan Agung döneminde Cava'nın büyük bölümüne hâkim oldu" },
    { t:"1755-02-13", tur:"son", b:"Giyanti Antlaşması ile Yogyakarta ve Surakarta olarak ikiye bölündü" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — DALGA 2: `brunei-sultanligi` harita kimliği
// künyenin ömrünün (1368-1923) ÖNCESİNDE de kullanılıyordu; İslâm-öncesi
// Po-ni Krallığı dönemi. TDV `bruney` maddesi Po-ni'den HİÇ bahsetmiyor (§4
// gereği standart akademik/Çin tarihi kaynaklarına dayanıldı) AMA aynı
// maddenin kendi verdiği Brunei kuruluş tarihi (1405-1415) `brunei-
// sultanligi`nin f:'iyle (1368) ÇELİŞİYOR — bu ayrıca raporlandı (§②),
// künye kendi başına değiştirilmedi; `poni`nin t:'si TDV'nin 1405-1415
// aralığının başına (1405) bağlandı, hangi tarafta düzeltme yapılırsa
// yapılsın zincir en az bir uçtan tutarlı kalsın diye.
{ id:"poni", ad:"Po-ni (Poni) Krallığı", tur:"krallik", bolge:"guneydogu-asya",
  f:"977-01-01", t:"1405-01-01", baskent:"— (Brunei bölgesi, kesin merkez standart kaynakta belirtilmemiş)",
  ozet:"Çin Song hanedanına haraç heyetleri göndermesiyle kayıtlara geçen erken Borneo krallığı; İslâmlaşıp Brunei Sultanlığı'na dönüştü (bkz. [[brunei-sultanligi]]). TDV `bruney` maddesi Po-ni'den hiç bahsetmiyor; tarihler standart akademik (Çin tarihî kayıtları) kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"977-01-01", tur:"kurulus", b:"Çin Song hanedanına ilk haraç/elçilik heyeti gönderildi, \"Po-ni\" adıyla kayda geçti" },
    { t:"1405-01-01", tur:"son", b:"İslâmlaşma ve Brunei Sultanlığı'nın kuruluşuyla (TDV: 1405-1415) örtüşür" }
  ]
},
{ id:"brunei-sultanligi", ad:"Brunei Sultanlığı", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1368-01-01", t:"1923-10-29", baskent:"Bandar Seri Begawan", harita:"brunei-sultanligi",
  ozet:"Borneo kıyısında kurulan, 16. yüzyılda Borneo ve Filipinler'in büyük bölümüne uzanan, sonradan küçülerek İngiliz himayesine giren (1888) sultanlık (1923 sonrasında da sürdü).",
  kaynak:"bruney",
  kronoloji:[
    { t:"1368-01-01", tur:"kurulus", b:"Muhammed Şah, ilk Müslüman sultan olarak tahta çıktı" },
    { t:"1473-01-01", tur:"hukumdar", b:"Sultan Bolkiah tahta çıktı; döneminde (1473-1521) Bruney küçük bir sultanlıktan Borneo'nun büyük kısmını, Luzon'u ve Sulu takımadalarını içine alan devlete dönüşüp altın çağını yaşadı (TDV bruney maddesi)" },
    { t:"1580-01-01", tur:"savas", b:"1565'te Maynila'yı ele geçiren İspanyollar Bruney şehrini kuşattı ama sonuç alamadan çekildi (TDV bruney maddesi)" },
    { t:"1841-01-01", tur:"toprak-kayip", b:"İngilizler Labuan adasını aldı; aynı yıl James Brooke 'Saravak racası' unvanıyla başa getirildi — yüzyıl sürecek toprak erimesinin başlangıcı (TDV bruney maddesi)" },
    { t:"1888-09-17", tur:"antlasma", b:"İngiltere ile himaye antlaşması imzalandı" }
  ]
},
{ id:"sulu-sultanligi", ad:"Sulu Sultanlığı", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1457-01-01", t:"1915-03-22", baskent:"Jolo", harita:"sulu-sultanligi",
  ozet:"Güney Filipinler ve kuzey Borneo'da kurulan, İspanyol ve ABD sömürgeciliğine uzun süre direnen İslâm sultanlığı; ABD ile imzalanan Carpenter Antlaşması siyasi egemenliğine son verdi (dinî otorite olarak sürdü).",
  kaynak:"sulu",
  kronoloji:[
    { t:"1457-01-01", tur:"kurulus", b:"Şerif ül-Hâşim sultanlığı kurdu" },
    { t:"1578-01-01", tur:"savas", b:"İspanya'ya karşı uzun direniş dönemi başladı" },
    { t:"1915-03-22", tur:"son", b:"Carpenter Antlaşması ile ABD'ye siyasi egemenlik devredildi" }
  ]
},
{ id:"hollanda-dogu-hint", ad:"Hollanda Doğu Hint Adaları", tur:"gecici-isgal", bolge:"guneydogu-asya",
  f:"1602-03-20", t:"1923-10-29", baskent:"Batavia (Cakarta)", harita:"hollanda-dogu-hint",
  ozet:"Hollanda Doğu Hindistan Şirketi'nin (VOC) ticaret üsleri olarak başlayan, 1800'de şirketin iflasıyla doğrudan Hollanda devlet sömürgesine dönüşen Endonezya idaresi (1923 sonrasında da sürdü, 1945'e dek).",
  kaynak:"hollanda",
  kronoloji:[
    { t:"1602-03-20", tur:"kurulus", b:"Hollanda Doğu Hindistan Şirketi (VOC) kuruldu" },
    { t:"1619-01-01", tur:"kurulus", b:"Batavia (Cakarta) VOC'nin Asya merkezi yapıldı" },
    { t:"1800-01-01", tur:"bolunme", b:"İflas eden VOC feshedildi, topraklar doğrudan Hollanda devletine geçti" }
  ]
},
{ id:"ingiliz-malaya", ad:"İngiliz Malaya", tur:"gecici-isgal", bolge:"guneydogu-asya",
  f:"1826-01-01", t:"1923-10-29", baskent:"Singapur", harita:"ingiliz-malaya",
  ozet:"Penang, Malaka ve Singapur'un (Boğaz Yerleşimleri) birleştirilmesiyle kurulan, sonradan Malay sultanlıklarını da himayeye alan İngiliz sömürge idaresi (1923 sonrasında da sürdü).",
  kaynak:"malezya",
  kronoloji:[
    { t:"1819-01-01", tur:"kurulus", b:"Stamford Raffles Singapur'da İngiliz ticaret üssü kurdu" },
    { t:"1826-01-01", tur:"kurulus", b:"Penang, Malaka ve Singapur \"Boğaz Yerleşimleri\" olarak birleştirildi" },
    { t:"1895-01-01", tur:"birlesme", b:"Dört Malay sultanlığı \"Federe Malay Devletleri\" olarak himayeye alındı" }
  ]
},

// ================================================================================
// Parti 13: Sahra altı Afrika — Habeşistan (Parti 0'da `habesistan` olarak
// zaten var, tekrar edilmedi). Mali/Songhay TDV'de ayrıntılı madde yok
// (standart akademik kaynak), Kanem-Bornu ve Sokoto TDV'de var. Kongo,
// Ndongo, Lunda, Buganda, Zulu, Merina, Svahili şehirleri, Umman-Zengibar
// TDV kapsamı dışı (Hıristiyan/animist Afrika, kaynak kuralının açık
// istisnası) — standart akademik kaynağa göre. Harita kapsamı dışı.
// ================================================================================

{ id:"mali-imparatorlugu", ad:"Mali İmparatorluğu", tur:"imparatorluk", bolge:"bati-afrika",
  f:"1235-01-01", t:"1670-01-01", baskent:"Niani",
  ozet:"Sundiata Keita'nın Gana İmparatorluğu'nun mirasını devralarak kurduğu, Mansa Musa'nın efsanevi hac yolculuğuyla tanınan Batı Afrika İslâm imparatorluğu; Songhay ve komşu baskılarıyla kademeli çözüldü. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1235-01-01", tur:"kurulus", b:"Sundiata Keita, Kirina Savaşı'nda zafer kazanıp imparatorluğu kurdu" },
    { t:"1324-01-01", tur:"antlasma", b:"Mansa Musa, Kahire ve Mekke'ye görkemli hac yolculuğuna çıktı" },
    { t:"1468-01-01", tur:"toprak-kayip", b:"Songhay, Timbuktu'yu alarak Mali'nin gerilemesini hızlandırdı" },
    { t:"1670-01-01", tur:"son", b:"Küçülen imparatorluk komşu güçler arasında dağılıp tarihe karıştı" }
  ]
},
{ id:"songhay-imparatorlugu", ad:"Songhay İmparatorluğu", tur:"imparatorluk", bolge:"bati-afrika",
  f:"1464-01-01", t:"1591-04-13", baskent:"Gao",
  ozet:"Sünnî Ali'nin Mali'nin mirasını devralıp genişlettiği, Askiya Muhammed döneminde Timbuktu'yu bir İslâm ilim merkezine dönüştüren Batı Afrika imparatorluğu; Fas Sâdî ordusunun ateşli silahlarla kazandığı Tondibi zaferiyle yıkıldı. TDV'de ayrıntılı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1464-01-01", tur:"kurulus", b:"Sünnî Ali, Songhay'ı büyük bir imparatorluğa dönüştürmeye başladı" },
    { t:"1493-01-01", tur:"hukumdar", b:"Askiya Muhammed tahta çıkıp Timbuktu'yu ilim merkezi yaptı" },
    { t:"1591-04-13", tur:"son", b:"Tondibi Savaşı'nda Fas (Sâdî) ordusuna yenilip yıkıldı (bkz. [[fas]])" }
  ]
},
{ id:"kanem-bornu", ad:"Kanem-Bornu İmparatorluğu", tur:"imparatorluk", bolge:"orta-afrika",
  f:"800-01-01", t:"1905-01-01", baskent:"Njimi → Ngazargamu",
  ozet:"Çad Gölü çevresinde kurulan, Bilâdüssûdan'ın en uzun ömürlü İslâm devleti olan imparatorluk; İdris Alooma döneminde zirveye ulaştı, 19. yüzyıl sonunda sömürgeciliğe teslim oldu. (kaynak: TDV, madde: kanem-bornu)",
  kaynak:"kanim",
  kronoloji:[
    { t:"800-01-01", tur:"kurulus", b:"Kanem Krallığı, Çad Gölü'nün kuzeydoğusunda kuruldu" },
    { t:"1075-01-01", tur:"hukumdar", b:"Hanedan İslâmiyet'i kabul etti" },
    { t:"1571-01-01", tur:"hukumdar", b:"İdris Alooma döneminde imparatorluk zirvesine ulaştı, başkent Ngazargamu'ya taşındı" },
    { t:"1905-01-01", tur:"son", b:"Sömürge güçleri arasında bölünerek tarihî devlet tamamen sona erdi" }
  ]
},
{ id:"hausa-sehir-devletleri", ad:"Hausa Şehir Devletleri", tur:"devlet", bolge:"bati-afrika",
  f:"1000-01-01", t:"1808-01-01", baskent:"Kano, Katsina, Zaria, Gobir (çeşitli merkezler)",
  ozet:"Bugünkü kuzey Nijerya'da yedi kardeş şehir (Hausa Bakwai) etrafında örgütlenen bağımsız ticaret devletleri topluluğu; Osman dan Fodio'nun cihad hareketiyle Sokoto Halifeliği'ne katıldı. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1000-01-01", tur:"kurulus", b:"Hausa şehir devletleri (Kano, Katsina, Zaria, Gobir vd.) bağımsız birimler olarak şekillendi" },
    { t:"1350-01-01", tur:"hukumdar", b:"İslâmiyet ticaret yollarıyla şehirlere yayılmaya başladı" },
    { t:"1808-01-01", tur:"son", b:"Osman dan Fodio'nun cihad hareketi şehirleri fethedip Sokoto Halifeliği'ne kattı (bkz. [[sokoto]])" }
  ]
},
{ id:"sokoto", ad:"Sokoto Halifeliği", tur:"devlet", bolge:"bati-afrika",
  f:"1804-01-01", t:"1903-07-27", baskent:"Sokoto",
  ozet:"Fulani âlimi Osman dan Fodio'nun Hausa beyliklerine karşı başlattığı cihad hareketiyle kurulan, Batı Afrika'nın en büyük İslâm halifeliği; İngiliz fethiyle siyasi egemenliği sona erdi (dinî halifelik unvanı sembolik olarak sürdü). (kaynak: TDV, madde: sokoto)",
  kaynak:"sokoto",
  kronoloji:[
    { t:"1804-01-01", tur:"isyan", b:"Osman dan Fodio, Hausa beyliklerine karşı cihad ilan etti" },
    { t:"1809-01-01", tur:"kurulus", b:"Sokoto başkent yapılıp halifelik resmen kuruldu" },
    { t:"1817-01-01", tur:"hukumdar", b:"Muhammed Bello döneminde halifelik zirvesine ulaştı" },
    { t:"1903-07-27", tur:"son", b:"Son sultan Muhammed Tahir İngilizlere karşı savaşırken öldürüldü, siyasi egemenlik sona erdi" }
  ]
},
{ id:"asanti", ad:"Aşanti İmparatorluğu", tur:"imparatorluk", bolge:"bati-afrika",
  f:"1701-01-01", t:"1902-01-01", baskent:"Kumasi",
  ozet:"Osei Tutu'nun Denkyira'ya karşı zafer kazanarak kurduğu, altın ve köle ticaretiyle zenginleşen Batı Afrika krallığı; dört Anglo-Aşanti Savaşı sonunda İngiliz Altın Kıyı kolonisine katıldı. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1701-01-01", tur:"kurulus", b:"Osei Tutu, Denkyira'yı yenerek Aşanti Birliği'ni kurdu" },
    { t:"1824-01-01", tur:"savas", b:"Birinci Anglo-Aşanti Savaşı'nda İngiliz valisini yendi" },
    { t:"1874-02-04", tur:"savas", b:"İngilizler Kumasi'yi yakıp yıktı" },
    { t:"1902-01-01", tur:"son", b:"Dördüncü Anglo-Aşanti Savaşı sonunda krallık resmen ilhak edildi" }
  ]
},
{ id:"dahomey", ad:"Dahomey Krallığı", tur:"krallik", bolge:"bati-afrika",
  f:"1625-01-01", t:"1894-01-01", baskent:"Abomey",
  ozet:"Fon halkının kurduğu, köle ticaretinde merkezî rol oynayan, kadın savaşçılarıyla (Amazonlar) tanınan Batı Afrika krallığı; Kral Béhanzin'in yenilgisiyle Fransız sömürgesi oldu. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1625-01-01", tur:"kurulus", b:"Wegbaja, Abomey merkezli krallığı kurdu" },
    { t:"1727-01-01", tur:"toprak-kazanc", b:"Kıyıdaki Whydah krallığını ele geçirip Atlantik ticaretine doğrudan eriştim kazandı" },
    { t:"1894-01-01", tur:"son", b:"Fransa, Kral Béhanzin'i yenip krallığı sömürgeye dönüştürdü" }
  ]
},
{ id:"benin-kralligi", ad:"Benin Krallığı (Nijerya)", tur:"krallik", bolge:"bati-afrika",
  f:"1180-01-01", t:"1897-02-18", baskent:"Benin Şehri",
  ozet:"Edo halkının Oba hanedanı altında kurduğu, tunç heykelleriyle ünlü Batı Afrika krallığı (bugünkü Benin ülkesiyle karıştırılmamalı); İngiliz \"Cezalandırma Seferi\" ile yağmalanıp sömürgeye katıldı. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1180-01-01", tur:"kurulus", b:"Oba hanedanı Benin Şehri'nde krallığı kurdu" },
    { t:"1440-01-01", tur:"hukumdar", b:"Oba Ewuare döneminde krallık genişleyip merkezîleşti" },
    { t:"1897-02-18", tur:"son", b:"İngiliz \"Cezalandırma Seferi\" Benin Şehri'ni yakıp yağmaladı, krallık sömürgeye katıldı" }
  ]
},
{ id:"oyo-imparatorlugu", ad:"Oyo İmparatorluğu (Yoruba)", tur:"imparatorluk", bolge:"bati-afrika",
  f:"1400-01-01", t:"1836-01-01", baskent:"Oyo-Ile (Eski Oyo)",
  ozet:"Yoruba halkının süvari gücüyle kurduğu, komşu Dahomey'i bile haraca bağlayan güçlü imparatorluk; iç taht kavgaları ve Fulani cihad baskısıyla çöktü. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1400-01-01", tur:"kurulus", b:"Oyo-Ile'de Yoruba krallığı kuruldu" },
    { t:"1730-01-01", tur:"toprak-kazanc", b:"Dahomey Krallığı'nı yenip haraca bağladı" },
    { t:"1817-01-01", tur:"isyan", b:"İç isyanlar ve Fulani baskısı imparatorluğu zayıflattı" },
    { t:"1836-01-01", tur:"son", b:"Eski Oyo terk edildi, imparatorluk fiilen dağıldı" }
  ]
},
{ id:"kongo-kralligi", ad:"Kongo Krallığı", tur:"krallik", bolge:"orta-afrika",
  f:"1390-01-01", t:"1914-01-01", baskent:"Mbanza Kongo (São Salvador)",
  ozet:"Kongo Nehri ağzında kurulan, Portekizlilerle erken temasla Hristiyanlığı devlet dini yapan Orta Afrika krallığı; Mbwila Savaşı'nda ağır darbe aldıktan sonra küçülerek Portekiz nüfuzu altında varlığını uzun süre sürdürdü. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1390-01-01", tur:"kurulus", b:"Lukeni lua Nimi, Kongo Krallığı'nı kurdu" },
    { t:"1491-01-01", tur:"hukumdar", b:"Kral I. João, Portekizlilerin etkisiyle Hristiyanlığı kabul etti" },
    { t:"1665-10-29", tur:"savas", b:"Mbwila Savaşı'nda Portekiz'e yenilip Kral I. Antônio öldürüldü, krallık parçalandı" },
    { t:"1914-01-01", tur:"son", b:"Son kalıntıları Portekiz Angola'sına idari olarak tamamen katıldı" }
  ]
},
{ id:"ndongo", ad:"Ndongo Krallığı (Angola)", tur:"krallik", bolge:"orta-afrika",
  f:"1500-01-01", t:"1671-01-01", baskent:"Kabasa",
  ozet:"Kongo'nun güneyinde kurulan, Kraliçe Nzinga'nın Portekiz sömürgeciliğine karşı onlarca yıl direnişiyle tanınan krallık; Portekiz'in Pungo Andongo'yu almasıyla fiilen sona erdi. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1500-01-01", tur:"kurulus", b:"Ngola hanedanı Ndongo Krallığı'nı kurdu" },
    { t:"1624-01-01", tur:"hukumdar", b:"Kraliçe Nzinga tahta çıkıp Portekiz'e karşı uzun direnişi başlattı" },
    { t:"1671-01-01", tur:"son", b:"Portekiz, Pungo Andongo kalesini alarak krallığı fiilen sona erdirdi" }
  ]
},
{ id:"loango", ad:"Loango Krallığı", tur:"krallik", bolge:"orta-afrika",
  f:"1550-01-01", t:"1883-01-01", baskent:"Buali (Loango)",
  ozet:"Kongo Krallığı'nın kuzeyinde, Atlantik kıyısında kurulan Vili krallığı; bakır, fildişi ve dokuma ticaretiyle yükseldi, Kongo'dan bağımsız kaldı ve XIX. yüzyılda Fransız himayesine girdi. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok (`loango` slug'ı 302 döndürdü), dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1550-01-01", tur:"kurulus", b:"Vili hanedanı Loango Krallığı'nı kurdu; Buali başkent oldu" },
    { t:"1670-01-01", tur:"antlasma", b:"Hollanda Batı Hindistan Şirketi (WIC) Loango kıyısının en etkin Avrupalı ticaret ortağı oldu; Maloango, Portekiz ve Hollanda'yı birbirine karşı oynatarak ticaret şartlarını kendi belirledi (Phyllis Martin, 'The External Trade of the Loango Coast', Oxford 1972)" },
    { t:"1787-01-01", tur:"bolunme", b:"Kral Buatu'nun ölümüyle merkezi krallık otoritesi fiilen çöktü; yüzyılı aşkın süre yeni kral seçilmedi, güç konsey üyelerine dağıldı (Phyllis Martin 1972)" },
    { t:"1883-01-01", tur:"son", b:"Fransız himayesi ilan edildi, krallık bağımsızlığını yitirdi" }
  ]
},
{ id:"luba", ad:"Luba İmparatorluğu", tur:"imparatorluk", bolge:"orta-afrika",
  f:"1585-01-01", t:"1889-01-01", baskent:"Mwibele",
  ozet:"Yukarı Kongo havzasında (bugünkü Katanga) kurulan, kutsal krallık (bulopwe) anlayışıyla geniş bir bölgeyi bağlayan imparatorluk; Lunda'nın siyasî modelini de besledi, sömürge baskısı ve köle akınlarıyla parçalandı. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak (Thomas Q. Reefe, 'The Rainbow and the Kings', Univ. of California Press 1981)",
  kronoloji:[
    { t:"1585-01-01", tur:"kurulus", b:"Kongolo Mukulu, Luba devletini kurdu" },
    { t:"1800-01-01", tur:"toprak-kazanc", b:"Kral Ilunga Sungu ve ardılı Kumwimba Ngombe döneminde imparatorluk doğuya Tanganyika Gölü'ne ve Lualaba havzasına genişleyip toprak bakımından zirvesine ulaştı (Reefe 1981)" },
    { t:"1870-01-01", tur:"toprak-kayip", b:"Kumwimba Ngombe'nin ölümünün ardından Swahili-Arap köle/fildişi tüccarları (Tippu Tip) ve Msiri'nin rakip Katanga devleti Luba topraklarını parçalamaya başladı (Reefe 1981)" },
    { t:"1889-01-01", tur:"son", b:"İç bölünme ve sömürge baskısıyla imparatorluk dağıldı" }
  ]
},
{ id:"kuba", ad:"Kuba Krallığı", tur:"krallik", bolge:"orta-afrika",
  f:"1625-01-01", t:"1900-01-01", baskent:"Nsheng (Mushenge)",
  ozet:"Kasai ırmakları arasında Bushoong hanedanının kurduğu, gelişmiş bir vergi ve mahkeme düzeni ile dokuma-heykel sanatıyla tanınan krallık; Kongo Hür Devleti'ne bağlanana kadar iç işlerinde özerk kaldı. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1625-01-01", tur:"kurulus", b:"Shyaam a-Mbul a Ngoong Kuba Krallığı'nı kurdu" },
    { t:"1900-01-01", tur:"son", b:"Kongo Hür Devleti'ne resmen bağlandı" }
  ]
},
{ id:"lunda-imparatorlugu", ad:"Lunda İmparatorluğu", tur:"imparatorluk", bolge:"orta-afrika",
  f:"1665-01-01", t:"1887-01-01", baskent:"Musumba",
  ozet:"Orta Afrika'da (bugünkü Kongo-Zambiya-Angola sınır bölgesi) fildişi ve köle ticaretiyle zenginleşen, gevşek bağlı geniş bir konfederasyon kuran imparatorluk; Avrupa sömürge paylaşımıyla parçalandı. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1665-01-01", tur:"kurulus", b:"Mwata Yamvo hanedanı Lunda İmparatorluğu'nu kurdu" },
    { t:"1750-01-01", tur:"toprak-kazanc", b:"Fildişi ve köle ticaret ağları Atlantik ve Hint Okyanusu kıyılarına uzandı" },
    { t:"1887-01-01", tur:"son", b:"Avrupa güçlerinin (Portekiz, Belçika) sömürge paylaşımıyla imparatorluk parçalandı" }
  ]
},
{ id:"buganda", ad:"Buganda Krallığı", tur:"krallik", bolge:"dogu-afrika",
  f:"1300-01-01", t:"1923-10-29", baskent:"Mengo (Kampala)",
  ozet:"Victoria Gölü kıyısında kurulan, İngiliz himayesi altında da kurumlarını koruyarak varlığını sürdüren Doğu Afrika krallığı (1923 sonrasında da sürdü). TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1300-01-01", tur:"kurulus", b:"Kintu hanedanı Buganda Krallığı'nı kurdu" },
    { t:"1894-06-18", tur:"antlasma", b:"İngiltere ile himaye antlaşması imzalandı" }
  ]
},
{ id:"zulu-kralligi", ad:"Zulu Krallığı", tur:"krallik", bolge:"guney-afrika",
  f:"1816-01-01", t:"1879-07-04", baskent:"Ulundi",
  ozet:"Shaka'nın askerî reformlarıyla küçük bir beylikten büyük bir savaşçı krallığa dönüştürdüğü Güney Afrika devleti (\"Mfecane\" kargaşasını başlattı); Anglo-Zulu Savaşı'nda İngiliz'e yenilip ilhak edildi. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1816-01-01", tur:"kurulus", b:"Shaka, Zulu klanını askerî reformlarla büyük bir krallığa dönüştürdü" },
    { t:"1838-12-16", tur:"savas", b:"Kan Nehri Savaşı'nda Boer göçmenlerine yenildi" },
    { t:"1879-01-22", tur:"savas", b:"Isandlwana'da İngilizlere ağır darbe vurdu" },
    { t:"1879-07-04", tur:"son", b:"Ulundi Savaşı'nda kesin yenilgi aldı, krallık İngilizlerce ilhak edildi" }
  ]
},
{ id:"merina", ad:"Merina Krallığı (Madagaskar)", tur:"krallik", bolge:"dogu-afrika",
  f:"1787-01-01", t:"1897-02-28", baskent:"Antananarivo",
  ozet:"Andrianampoinimerina'nın Imerina platosunu birleştirip kurduğu, kısa sürede Madagaskar adasının büyük bölümüne hâkim olan krallık; Fransız istilasıyla sona erdi, Kraliçe III. Ranavalona sürgüne gönderildi. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1787-01-01", tur:"kurulus", b:"Andrianampoinimerina, İmerina platosunu birleştirdi" },
    { t:"1817-01-01", tur:"antlasma", b:"İngiltere ile antlaşma imzalayıp modernleşme sürecine girdi" },
    { t:"1895-01-01", tur:"isgal", b:"Fransız istila kuvvetleri başkenti ele geçirdi" },
    { t:"1897-02-28", tur:"son", b:"Krallık ilga edildi, Kraliçe III. Ranavalona sürgüne gönderildi" }
  ]
},
{ id:"svahili-sehirleri", ad:"Svahili Şehir Devletleri (Kıyı)", tur:"devlet", bolge:"dogu-afrika",
  f:"1000-01-01", t:"1698-12-13", baskent:"Kilwa, Mombasa, Zengibar (çeşitli merkezler)",
  ozet:"Doğu Afrika kıyısında Arap-Bantu ticaret kültürünün doğurduğu, altın ve fildişi ticaretiyle zenginleşen bağımsız İslâm liman şehirleri ağı; Portekiz istilası ve ardından Umman'ın kıyıyı ele geçirmesiyle bağımsızlıklarını kaybettiler. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1000-01-01", tur:"kurulus", b:"Kilwa, Mombasa, Malindi gibi bağımsız Svahili liman şehirleri gelişmeye başladı" },
    { t:"1498-01-01", tur:"isgal", b:"Vasco da Gama'nın gelişiyle Portekiz baskısı başladı" },
    { t:"1698-12-13", tur:"son", b:"Umman kuvvetleri Mombasa'daki Fort Jesus'u alarak Portekiz'i kovdu, kıyı Umman nüfuzuna girdi" }
  ]
},
{ id:"umman-zengibar", ad:"Umman-Zengibar Sultanlığı", tur:"sultanlik", bolge:"dogu-afrika",
  f:"1698-01-01", t:"1923-10-29", baskent:"Maskat → Zengibar (Stone Town)",
  ozet:"Umman'ın Doğu Afrika kıyısını Portekiz'den alıp kurduğu deniz-ticaret imparatorluğu; Said bin Sultan'ın ölümüyle Umman ve Zengibar iki ayrı sultanlığa bölündü, Zengibar İngiliz himayesine girdi (1923 sonrasında da sürdü). TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1698-01-01", tur:"kurulus", b:"Umman kuvvetleri Doğu Afrika kıyısını Portekiz'den aldı (bkz. [[svahili-sehirleri]])" },
    { t:"1832-01-01", tur:"hukumdar", b:"Said bin Sultan başkentini Zengibar'a taşıdı" },
    { t:"1856-10-19", tur:"bolunme", b:"Said bin Sultan'ın ölümüyle Umman ve Zengibar iki ayrı sultanlığa bölündü" },
    { t:"1890-11-04", tur:"antlasma", b:"Zengibar, İngiliz himaye antlaşmasını imzaladı" }
  ]
},

// ================================================================================
// Parti 14: Amerika — TDV kapsamı tamamen dışı (kaynak kuralının açık
// istisnası), standart akademik kaynağa göre. Harita kapsamı dışı. Gran
// Colombia'nın ardılları (Venezuela/Kolombiya/Ekvador/Panama) görev
// talimatına uyarak ayrı kayıt açılmadı, ozet'te özetlendi.
// ================================================================================

{ id:"aztek-imparatorlugu", ad:"Aztek (Mexica) İmparatorluğu", tur:"imparatorluk", bolge:"orta-amerika",
  f:"1428-01-01", t:"1521-08-13", baskent:"Tenochtitlan",
  ozet:"Tenochtitlan, Texcoco ve Tlacopan'ın \"Üçlü İttifak\"ıyla kurulan, orta Meksika'ya hâkim olan imparatorluk; Hernán Cortés'in İspanyol kuvvetleri ve yerli müttefiklerince kuşatılıp yıkıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1428-01-01", tur:"kurulus", b:"Tenochtitlan, Texcoco ve Tlacopan Üçlü İttifak'ı kurdu" },
    { t:"1502-01-01", tur:"hukumdar", b:"II. Moctezuma tahta çıkıp imparatorluğu en geniş sınırlarına ulaştırdı" },
    { t:"1519-11-08", tur:"isgal", b:"Hernán Cortés, Tenochtitlan'a girdi" },
    { t:"1521-08-13", tur:"son", b:"Uzun kuşatma sonunda Tenochtitlan düştü, son imparator Cuauhtémoc esir alındı" }
  ]
},
{ id:"inka-imparatorlugu", ad:"İnka İmparatorluğu (Tahuantinsuyu)", tur:"imparatorluk", bolge:"guney-amerika",
  f:"1438-01-01", t:"1572-09-24", baskent:"Cusco",
  ozet:"And Dağları boyunca uzanan Kolomb öncesi Amerika'nın en büyük imparatorluğu; Pizarro'nun İmparator Atahualpa'yı esir alıp idam etmesiyle çöktü, Vilcabamba'daki son direniş devleti de tasfiye edildi.",
  kaynak:"amerika",
  kronoloji:[
    { t:"1438-01-01", tur:"kurulus", b:"Pachacuti, Cusco krallığını büyük bir imparatorluğa dönüştürmeye başladı" },
    { t:"1532-11-16", tur:"savas", b:"Cajamarca'da Francisco Pizarro, İmparator Atahualpa'yı tuzağa düşürüp esir aldı" },
    { t:"1533-08-29", tur:"son", b:"Atahualpa idam edildi, İspanyollar Cusco'yu ele geçirdi" },
    { t:"1572-09-24", tur:"son", b:"Vilcabamba'daki son direniş devleti düştü, Tupac Amaru idam edildi" }
  ]
},
{ id:"maya-sehir-devletleri", ad:"Maya Şehir Devletleri (Post-Klasik)", tur:"devlet", bolge:"orta-amerika",
  f:"1200-01-01", t:"1697-03-13", baskent:"Mayapán, Nojpetén (çeşitli merkezler)",
  ozet:"Klasik Maya çöküşünden sonra Yucatán ve Petén'de küçük bağımsız şehir devletleri hâlinde varlığını sürdüren Maya siyasi kültürü; son bağımsız Maya krallığı Nojpetén'in düşüşüyle İspanyol fethi tamamlandı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1200-01-01", tur:"kurulus", b:"Mayapán Birliği Yucatán'da hâkimiyet kurdu" },
    { t:"1441-01-01", tur:"bolunme", b:"Mayapán terk edildi, bölge küçük rakip şehir devletlerine bölündü" },
    { t:"1697-03-13", tur:"son", b:"İspanyollar Nojpetén'i (Tayasal) alarak son bağımsız Maya krallığını ortadan kaldırdı" }
  ]
},
{ id:"yeni-ispanya", ad:"Yeni İspanya Genel Valiliği", tur:"gecici-isgal", bolge:"orta-amerika",
  f:"1535-04-17", t:"1821-09-27", baskent:"Mexico City",
  ozet:"Aztek İmparatorluğu'nun yıkıntıları üzerine kurulan, Orta Amerika, Karayipler ve Filipinler'i kapsayan devasa İspanyol sömürge idaresi; bağımsızlık savaşının ardından Meksika İmparatorluğu'na dönüştü.",
  kaynak:"amerika",
  kronoloji:[
    { t:"1535-04-17", tur:"kurulus", b:"İlk genel vali Antonio de Mendoza atanıp Yeni İspanya resmen kuruldu" },
    { t:"1810-09-16", tur:"isyan", b:"Rahip Hidalgo'nun \"Grito de Dolores\" çağrısıyla bağımsızlık savaşı başladı" },
    { t:"1821-09-27", tur:"son", b:"Trigarante Ordusu Mexico City'ye girdi, bağımsızlık kesinleşti (bkz. [[meksika]])" }
  ]
},
{ id:"ispanyol-peru", ad:"Peru Genel Valiliği", tur:"gecici-isgal", bolge:"guney-amerika",
  f:"1542-11-20", t:"1824-12-09", baskent:"Lima",
  ozet:"İnka İmparatorluğu'nun yıkıntıları üzerine kurulan, Güney Amerika'daki İspanyol sömürge idaresinin merkezi genel valilik; Ayacucho zaferiyle bağımsızlık savaşları sonuçlandı.",
  kaynak:"amerika",
  kronoloji:[
    { t:"1542-11-20", tur:"kurulus", b:"Peru Genel Valiliği resmen kuruldu" },
    { t:"1780-01-01", tur:"isyan", b:"Tupac Amaru II'nin büyük yerli isyanı bastırıldı" },
    { t:"1824-12-09", tur:"son", b:"Ayacucho Savaşı'nda İspanyol ordusu kesin yenilgiye uğradı" }
  ]
},
{ id:"portekiz-brezilyasi", ad:"Portekiz Brezilyası", tur:"gecici-isgal", bolge:"guney-amerika",
  f:"1549-01-01", t:"1822-09-07", baskent:"Salvador → Rio de Janeiro",
  ozet:"Pedro Álvares Cabral'ın 1500'deki keşfinin ardından şeker ve altınla zenginleşen Portekiz sömürgesi; Napolyon istilası sırasında kraliyet ailesinin sürgüne gelişiyle fiilen başkent oldu, Dom Pedro'nun bağımsızlık ilanıyla sona erdi.",
  kaynak:"amerika",
  kronoloji:[
    { t:"1549-01-01", tur:"kurulus", b:"İlk genel vali Tomé de Sousa ile merkezi sömürge idaresi kuruldu" },
    { t:"1808-01-01", tur:"hukumdar", b:"Napolyon'un Portekiz'i işgali üzerine kraliyet ailesi Rio de Janeiro'ya sürgüne geldi" },
    { t:"1822-09-07", tur:"son", b:"Dom Pedro \"Ipiranga Çığlığı\" ile bağımsızlığı ilan etti (bkz. [[brezilya-imparatorlugu]])" }
  ]
},
{ id:"brezilya-imparatorlugu", ad:"Brezilya İmparatorluğu", tur:"imparatorluk", bolge:"guney-amerika",
  f:"1822-09-07", t:"1889-11-15", baskent:"Rio de Janeiro",
  ozet:"Dom Pedro'nun bağımsızlık ilanıyla kurduğu, Güney Amerika'daki tek monarşi; askerî darbeyle cumhuriyete dönüştürüldü.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1822-09-07", tur:"kurulus", b:"I. Dom Pedro kendini imparator ilan etti" },
    { t:"1888-05-13", tur:"antlasma", b:"\"Altın Kanun\" ile köleliğin kaldırılması ilan edildi" },
    { t:"1889-11-15", tur:"son", b:"Askerî darbeyle II. Dom Pedro tahttan indirildi, cumhuriyet ilan edildi" }
  ]
},
{ id:"abd", ad:"Amerika Birleşik Devletleri", tur:"cumhuriyet", bolge:"kuzey-amerika",
  f:"1776-07-04", t:"1923-10-29", baskent:"Philadelphia → Washington", harita:"abd",
  ozet:"On üç İngiliz kolonisinin bağımsızlık ilanıyla kurulan, iç savaş ve hızlı sanayileşme sonrası dünya gücü hâline gelen federal cumhuriyet (1923 sonrasında da sürdü).",
  kaynak:"amerika-birlesik-devletleri",
  kronoloji:[
    { t:"1776-07-04", tur:"kurulus", b:"Bağımsızlık Bildirgesi kabul edildi" },
    { t:"1783-09-03", tur:"antlasma", b:"Paris Antlaşması ile İngiltere bağımsızlığı tanıdı" },
    { t:"1861-04-12", tur:"savas", b:"İç Savaş başladı (1865'e dek)" },
    { t:"1898-04-25", tur:"savas", b:"İspanya-Amerika Savaşı ile Küba, Porto Riko, Filipinler nüfuz alanına girdi" },
    { t:"1917-04-06", tur:"savas", b:"I. Dünya Savaşı'na İtilaf yanında girdi" }
  ]
},
{ id:"meksika", ad:"Meksika (Bağımsız Dönem)", tur:"cumhuriyet", bolge:"orta-amerika",
  f:"1821-09-27", t:"1923-10-29", baskent:"Mexico City",
  ozet:"Yeni İspanya'nın bağımsızlığıyla kurulan, kısa bir imparatorluk denemesinden sonra cumhuriyete dönüşen, ABD ile savaşta topraklarının yarısını kaybeden, 1910 Devrimi'yle sarsılan devlet (1923 sonrasında da sürdü).",
  kaynak:"amerika",
  kronoloji:[
    { t:"1821-09-27", tur:"kurulus", b:"Bağımsızlık kazanıldı, kısa ömürlü I. Meksika İmparatorluğu (Iturbide) kuruldu" },
    { t:"1824-10-04", tur:"kurulus", b:"Federal cumhuriyet anayasası kabul edildi" },
    { t:"1846-04-25", tur:"savas", b:"ABD ile savaş başladı, 1848'de kuzey topraklarının yarısı kaybedildi" },
    { t:"1876-01-01", tur:"hukumdar", b:"Porfirio Díaz'ın uzun otoriter dönemi (Porfiriato) başladı" },
    { t:"1910-11-20", tur:"isyan", b:"Meksika Devrimi başladı" }
  ]
},
{ id:"gran-kolombiya", ad:"Büyük Kolombiya (Gran Colombia)", tur:"cumhuriyet", bolge:"guney-amerika",
  f:"1819-12-17", t:"1831-01-01", baskent:"Bogotá",
  ozet:"Simón Bolívar'ın İspanya'ya karşı zaferinin ardından kurduğu, bugünkü Venezuela, Kolombiya, Ekvador ve Panama'yı kapsayan büyük cumhuriyet; iç bölgesel çekişmelerle üçe (dört) ayrı devlete bölündü (Venezuela, Kolombiya, Ekvador — her biri ayrı kayıt açılmadı).",
  kaynak:"kolombiya",
  kronoloji:[
    { t:"1819-12-17", tur:"kurulus", b:"Angostura Kongresi'nde Bolívar cumhuriyeti ilan etti" },
    { t:"1824-12-09", tur:"savas", b:"Ayacucho zaferiyle İspanyol Güney Amerika'sının bağımsızlığı kesinleşti" },
    { t:"1830-01-01", tur:"bolunme", b:"Venezuela ve Ekvador ayrılmaya başladı" },
    { t:"1831-01-01", tur:"son", b:"Cumhuriyet resmen dağılıp Venezuela, Kolombiya (Yeni Granada) ve Ekvador'a bölündü" }
  ]
},
{ id:"haiti", ad:"Haiti Cumhuriyeti", tur:"cumhuriyet", bolge:"orta-amerika",
  f:"1804-01-01", t:"1923-10-29", baskent:"Port-au-Prince",
  ozet:"Toussaint Louverture'ün başlattığı köle isyanının Jean-Jacques Dessalines önderliğinde bağımsızlığa ulaşması ile kurulan, dünyanın ilk bağımsız kara devleti ve ilk köle isyanıyla kurulan cumhuriyet (1923 sonrasında da sürdü).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1791-08-22", tur:"isyan", b:"Toussaint Louverture önderliğinde büyük köle isyanı başladı" },
    { t:"1804-01-01", tur:"kurulus", b:"Jean-Jacques Dessalines bağımsızlığı ilan etti" },
    { t:"1825-04-17", tur:"antlasma", b:"Fransa, ağır bir tazminat karşılığında bağımsızlığı resmen tanıdı" }
  ]
},
{ id:"ingiliz-kuzey-amerika", ad:"İngiliz Kuzey Amerika (Kanada)", tur:"gecici-isgal", bolge:"kuzey-amerika",
  f:"1763-02-10", t:"1923-10-29", baskent:"Quebec → Ottawa",
  ozet:"Yedi Yıl Savaşları'nda Fransız Kanadası'nın İngiltere'ye geçmesiyle başlayan, 1867'de kendi kendini yöneten \"Dominion\" statüsüne kavuşan sömürge/dominyon (1923 sonrasında da sürdü).",
  kaynak:"kanada",
  kronoloji:[
    { t:"1763-02-10", tur:"kurulus", b:"Paris Antlaşması ile Fransa, Yeni Fransa'yı (Kanada) İngiltere'ye devretti" },
    { t:"1867-07-01", tur:"birlesme", b:"Kanada Dominyonu, dört koloninin birleşmesiyle kendi kendini yönetmeye başladı" }
  ]
},

// ================================================================================
// Parti 15: Kalanlar — Okyanusya ve ada devletleri. Sibirya hanlıkları zaten
// Parti 5'te (kazan/astarhan/sibir/nogay) eklendi, burada tekrar edilmedi.
// TDV kapsamı dışı, standart akademik kaynağa göre. Harita kapsamı dışı.
// ================================================================================

{ id:"hawaii-kralligi", ad:"Hawaii Krallığı", tur:"krallik", bolge:"okyanusya",
  f:"1795-01-01", t:"1898-08-12", baskent:"Honolulu",
  ozet:"Kamehameha I'in adaları savaşla birleştirmesiyle kurulan Pasifik krallığı; ABD'li yerleşimcilerin darbesiyle devrilip kısa bir cumhuriyet döneminden sonra ABD'ye ilhak edildi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1795-01-01", tur:"kurulus", b:"Kamehameha I, Hawaii adalarını savaşla birleştirdi" },
    { t:"1893-01-17", tur:"bolunme", b:"ABD'li yerleşimciler Kraliçe Liliuokalani'yi devirdi" },
    { t:"1898-08-12", tur:"son", b:"ABD, Hawaii'yi resmen ilhak etti" }
  ]
},
{ id:"tonga-kralligi", ad:"Tonga Krallığı", tur:"krallik", bolge:"okyanusya",
  f:"1845-12-04", t:"1923-10-29", baskent:"Nuku'alofa",
  ozet:"Kral I. George Tupou'nun adaları birleştirip kurduğu, Pasifik'te hiç sömürgeleştirilmeyen tek krallık; 1900'de İngiliz himayesine girdi ama iç egemenliğini korudu (1923 sonrasında da sürdü).",
  kaynak:"bulunamadı — arandı, yok (canonik \"tonga\" ve alternatif \"tonga-adalari\" ikisi de yalnız alakasız kişi adları -Alp Er Tonga, G. Tongas- döndürüyor); dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1845-12-04", tur:"kurulus", b:"I. George Tupou, Tonga adalarını birleştirdi" },
    { t:"1875-11-04", tur:"antlasma", b:"İlk anayasa ilan edildi" },
    { t:"1900-05-18", tur:"antlasma", b:"İngiltere ile himaye antlaşması imzalandı (iç egemenlik korundu)" }
  ]
},
{ id:"yeni-zelanda", ad:"Yeni Zelanda (İngiliz Kolonisi/Dominyonu)", tur:"gecici-isgal", bolge:"okyanusya",
  f:"1840-02-06", t:"1923-10-29", baskent:"Auckland → Wellington",
  ozet:"Waitangi Antlaşması ile Maori şefleriyle İngiliz Tacı arasında kurulan, 1907'de Dominyon statüsü kazanan sömürge (1923 sonrasında da sürdü).",
  kaynak:"yeni-zelanda",
  kronoloji:[
    { t:"1840-02-06", tur:"antlasma", b:"Waitangi Antlaşması, Maori şefleri ile İngiltere arasında imzalandı" },
    { t:"1858-01-01", tur:"kurulus", b:"Maori Kral Hareketi (Kingitanga) toprak kayıplarına karşı birlik kurdu" },
    { t:"1907-09-26", tur:"kurulus", b:"Dominyon statüsü kazanıldı" }
  ]
},
{ id:"avustralya", ad:"Avustralya Milletler Topluluğu", tur:"cumhuriyet", bolge:"okyanusya",
  f:"1901-01-01", t:"1923-10-29", baskent:"Melbourne → Canberra",
  ozet:"Altı ayrı İngiliz kolonisinin federasyonuyla kurulan, İngiliz Milletler Topluluğu içinde özerk dominyon (1923 sonrasında da sürdü).",
  kaynak:"avustralya",
  kronoloji:[
    { t:"1901-01-01", tur:"birlesme", b:"Altı koloni federasyonla \"Avustralya Milletler Topluluğu\"nu kurdu" },
    { t:"1901-03-29", tur:"hukumdar", b:"İlk federal genel seçim yapıldı; Edmund Barton'ın Koruyucu partisi İşçi Partisi desteğiyle hükümeti kurdu (Stuart Macintyre, 'A Concise History of Australia')" },
    { t:"1901-12-23", tur:"kurulus", b:"Immigration Restriction Act kabul edildi; 'dikte testi' yoluyla Avrupa-dışı göçü engelleyen bu yasa 'Beyaz Avustralya Politikası'nın temelini oluşturdu (Macintyre; National Archives of Australia)" },
    { t:"1911-07-10", tur:"kurulus", b:"1901'de birleşen sömürge donanmaları Kral V. George'un onayıyla 'Royal Australian Navy' adını aldı, İmparatorluk donanmasından ayrı özerk statü kazandı (Macintyre; Australian War Memorial)" },
    { t:"1915-04-25", tur:"savas", b:"Gelibolu Çıkarması'na katıldı (Anzac)" }
  ]
},

// ================================================================================
// EK: Batı Avrupa/İberya/İtalya'nın 15 eksik kimliği — girdi Oturum 12'nin
// oturumlar/OTURUM-12-KIMLIK.md ölçümünden geldi ("Oturum 3'e de girdi" diye
// işaretlenmişti): `arac/renkler.py`'de tanımsız, `data/yerlesimler_avrupa.js`
// kullanıyor, `devletler.js` kaydı hiç yoktu (Oturum 12 ölçtü). f/t, tur, bolge
// değerleri o dosyadaki ölçüme birebir uyar. TDV kapsamı dışı (Avrupa'nın iç
// tarihi), standart akademik kaynağa göre. `harita:` eklenmedi — bu kimlikler
// `arac/renkler.py`'ye henüz işlenmedi (Oturum 16'nın işi, dokunulmadı).
// ================================================================================

{ id:"iskocya", ad:"İskoçya Krallığı", tur:"krallik", bolge:"bati-avrupa",
  f:"843-01-01", t:"1707-05-01", baskent:"Scone → Edinburgh", harita:"iskocya",
  ozet:"Kenneth MacAlpin'in Pikte ve İskoç krallıklarını birleştirmesiyle doğan krallık; 1603'te İngiltere ile kişisel taç birliğine girdi, 1707 Birlik Yasası ile Büyük Britanya Krallığı'nda eridi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"843-01-01", tur:"kurulus", b:"Kenneth MacAlpin, Pikte ve İskoç krallıklarını birleştirdi" },
    { t:"1314-06-24", tur:"savas", b:"Bannockburn Savaşı'nda İngiltere'ye karşı bağımsızlığını pekiştirdi" },
    { t:"1603-03-24", tur:"birlesme", b:"VI. James, İngiltere tahtına da geçip iki krallık kişisel birlik kurdu" },
    { t:"1707-05-01", tur:"son", b:"Birlik Yasası ile İngiltere'yle birleşip Büyük Britanya Krallığı'nı oluşturdu" }
  ]
},
{ id:"irlanda", ad:"İrlanda (Gal Beylikleri ve Krallığı)", tur:"krallik", bolge:"bati-avrupa",
  f:"1200-01-01", t:"1603-03-30", baskent:"(çok merkezli Gal beylikleri) → Dublin", harita:"irlanda",
  ozet:"Norman istilası sonrası İngiliz nüfuzuyla iç içe yaşayan Gal beylikleri ve krallığı; Dokuz Yıl Savaşları'nın Mellifont Antlaşması'yla bitmesiyle İngiliz fethi tamamlandı (1922'deki bağımsızlık dönüşü için bkz. [[irlanda-serbest-devlet]]).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1171-01-01", tur:"isgal", b:"II. Henry'nin Norman-İngiliz seferi adaya ayak bastı" },
    { t:"1541-01-01", tur:"bolunme", b:"VIII. Henry kendini \"İrlanda Kralı\" ilan etti" },
    { t:"1594-01-01", tur:"isyan", b:"Dokuz Yıl Savaşları (Tyrone İsyanı) başladı" },
    { t:"1603-03-30", tur:"son", b:"Mellifont Antlaşması ile son Gal direnişi bitti, İngiliz fethi tamamlandı" }
  ]
},
{ id:"irlanda-serbest-devlet", ad:"İrlanda Serbest Devleti", tur:"devlet", bolge:"bati-avrupa",
  f:"1922-12-06", t:"1923-10-29", baskent:"Dublin",
  ozet:"İngiliz-İrlanda Antlaşması ile kurulan, İngiliz Milletler Topluluğu içinde özerk dominyon (1923 sonrasında da sürdü, 1937'de tam bağımsız Éire'ye dönüştü).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1919-01-21", tur:"isyan", b:"Bağımsızlık Savaşı başladı" },
    { t:"1921-12-06", tur:"antlasma", b:"İngiliz-İrlanda Antlaşması imzalandı" },
    { t:"1922-12-06", tur:"kurulus", b:"İrlanda Serbest Devleti resmen kuruldu" }
  ]
},
{ id:"bretanya", ad:"Bretanya Dükalığı", tur:"dukalik", bolge:"bati-avrupa",
  f:"939-01-01", t:"1532-08-13", baskent:"Rennes / Nantes", harita:"bretanya",
  ozet:"Norman ve Frank baskısı arasında özerkliğini uzun süre koruyan Fransa'nın kuzeybatısındaki dükalık; Fransa Kraliyeti ile Birleşme Fermanı'yla krallığa katıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"939-01-01", tur:"kurulus", b:"Alan II, Normanları kovup dükalığı yeniden kurdu" },
    { t:"1488-01-01", tur:"savas", b:"Çılgın Savaş'ta Fransa'ya yenilip vasal duruma düştü" },
    { t:"1532-08-13", tur:"son", b:"Birleşme Fermanı ile Fransa Krallığı'na daimi olarak katıldı" }
  ]
},
{ id:"burgonya", ad:"Burgonya Dükalığı (Valois)", tur:"dukalik", bolge:"bati-avrupa",
  f:"1032-01-01", t:"1482-03-27", baskent:"Dijon", harita:"burgonya",
  ozet:"Valois kolunun 14. yüzyıldan itibaren Flandre ve Hollanda'yı da katarak Fransa ile Almanya arasında neredeyse bağımsız bir güç hâline getirdiği dükalık; Nancy'de Cesur Charles'ın ölümüyle mirası Habsburg ve Fransa arasında paylaşıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1032-01-01", tur:"kurulus", b:"Burgonya Dükalığı, Fransa Krallığı'nın bir hâs toprağı olarak şekillendi" },
    { t:"1363-01-01", tur:"hukumdar", b:"Valois kolu (Cesur Philippe) dükalığı devraldı" },
    { t:"1477-01-05", tur:"savas", b:"Nancy Savaşı'nda Cesur Charles öldürüldü, veraset krizi başladı" },
    { t:"1482-03-27", tur:"son", b:"Arras Antlaşması ile miras Habsburg (Hollanda/Flandre) ve Fransa (asıl Burgonya) arasında bölündü" }
  ]
},
{ id:"kastilya", ad:"Kastilya Tacı", tur:"krallik", bolge:"iberya",
  f:"1230-09-23", t:"1479-01-20", baskent:"Toledo → Valladolid", harita:"kastilya",
  ozet:"III. Fernando'nun León ile birleştirdiği, Reconquista'nın öncüsü olan İber krallığı; Katolik Kralların evliliğiyle Aragon ile birleşerek İspanya'nın çekirdeğini oluşturdu (bkz. [[ispanya]]).",
  kaynak:"kastilya--ispanya",
  kronoloji:[
    { t:"1230-09-23", tur:"birlesme", b:"III. Fernando, Kastilya ve León taçlarını kalıcı olarak birleştirdi" },
    { t:"1340-10-30", tur:"savas", b:"Río Salado Savaşı'nda Merînî-Gırnata ittifakını yendi" },
    { t:"1469-10-19", tur:"birlesme", b:"İsabel, Aragon veliaht prensi Fernando ile evlendi" },
    { t:"1479-01-20", tur:"son", b:"Fernando Aragon tahtına çıkınca iki taç fiilen birleşti (bkz. [[aragon]], [[ispanya]])" }
  ]
},
{ id:"aragon", ad:"Aragon Tacı", tur:"krallik", bolge:"iberya",
  f:"1164-01-01", t:"1479-01-20", baskent:"Zaragoza → Barselona", harita:"aragon",
  ozet:"Aragon Krallığı ile Barselona Kontluğu'nun birleşmesinden doğan, Akdeniz'de (Sicilya, Napoli, Sardinya) geniş bir deniz imparatorluğu kuran taç; Katolik Kralların evliliğiyle Kastilya ile birleşti (bkz. [[ispanya]]).",
  kaynak:"aragon",
  kronoloji:[
    { t:"1164-01-01", tur:"birlesme", b:"II. Alfonso, Aragon Krallığı ile Barselona Kontluğu'nu birleştirdi" },
    { t:"1282-01-01", tur:"toprak-kazanc", b:"Sicilya Akşamı sonrası Sicilya'yı ele geçirdi" },
    { t:"1479-01-20", tur:"son", b:"II. Fernando'nun Kastilya ile evliliği tacı fiilen birleştirdi" }
  ]
},
{ id:"navarra", ad:"Navarra Krallığı", tur:"krallik", bolge:"iberya",
  f:"824-01-01", t:"1620-10-19", baskent:"Pamplona", harita:"navarra",
  ozet:"Bask kökenli, Pireneler'in iki yakasına da uzanan küçük ama uzun ömürlü İber krallığı; İspanya'nın (Kastilya-Aragon) fethiyle güney kısmı ilhak edildi, kuzeydeki Béarn kolu 1620'ye dek ayrı sürdü. ⚠️ VERİ DEVLET (7 Ağustos 2026) DÜZELTTİ: `t:` 1512'den 1620-10-19'a çekildi — künyenin KENDİ kronolojisi zaten \"Béarn/Fransız kolu Fransa'ya katıldı\" diye 1620'yi taşıyordu ama `t:` alanı hâlâ 1512 yazıyordu (108 yıllık düz künye hatası, yeni araştırma gerektirmedi).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"824-01-01", tur:"kurulus", b:"İñigo Arista, Pamplona Krallığı'nı kurdu" },
    { t:"1234-01-01", tur:"hukumdar", b:"Şampanya hanedanı evlilik yoluyla tahta geçti" },
    { t:"1512-07-25", tur:"toprak-kayip", b:"Kastilya-Aragon (İspanya) güney Navarra'yı ilhak etti" },
    { t:"1620-10-19", tur:"son", b:"Kuzeydeki Béarn/Fransız kolu da Fransa Krallığı'na katılarak krallığın son parçası da sona erdi" }
  ]
},
{ id:"isvicre", ad:"İsviçre Konfederasyonu", tur:"cumhuriyet", bolge:"orta-avrupa",
  f:"1291-08-01", t:"1923-10-29", baskent:"(sabit başkent yok, Bern federal merkez)", harita:"isvicre",
  ozet:"Habsburg'a karşı üç dağ kantonunun ittifakıyla doğan, zamanla genişleyip Avrupa'nın en eski cumhuriyeti hâline gelen konfederasyon (1923 sonrasında da sürdü).",
  kaynak:"isvicre",
  kronoloji:[
    { t:"1291-08-01", tur:"kurulus", b:"Uri, Schwyz ve Unterwalden kantonları \"Ebedî İttifak\"ı (Rütli Yemini) imzaladı" },
    { t:"1315-11-15", tur:"savas", b:"Morgarten Savaşı'nda Habsburg ordusunu yendi" },
    { t:"1499-09-22", tur:"antlasma", b:"Basel Antlaşması ile Kutsal Roma İmparatorluğu'ndan fiilen bağımsızlaştı" },
    { t:"1815-09-07", tur:"antlasma", b:"Viyana Kongresi daimi tarafsızlığını uluslararası garanti altına aldı" }
  ]
},
{ id:"belcika", ad:"Belçika Krallığı", tur:"krallik", bolge:"bati-avrupa",
  f:"1830-10-04", t:"1923-10-29", baskent:"Brüksel", harita:"belcika",
  ozet:"Hollanda Birleşik Krallığı'ndan ayrılan devrimle kurulan, tarafsızlığı büyük güçlerce garanti edilen krallık; I. Dünya Savaşı'nda Alman istilasına uğradı (1923 sonrasında da sürdü).",
  kaynak:"belcika",
  kronoloji:[
    { t:"1830-10-04", tur:"kurulus", b:"Brüksel'deki devrimle Hollanda'dan bağımsızlık ilan edildi" },
    { t:"1831-07-21", tur:"hukumdar", b:"I. Léopold ilk kral olarak tahta çıktı" },
    { t:"1914-08-04", tur:"isgal", b:"Almanya, tarafsızlığını çiğneyip ülkeyi işgal etti" }
  ]
},
{ id:"siena", ad:"Siena Cumhuriyeti", tur:"cumhuriyet", bolge:"italya",
  f:"1125-01-01", t:"1555-04-17", baskent:"Siena", harita:"siena",
  ozet:"Toskana'da Floransa'nın baş rakibi olan bankacılık ve sanat cumhuriyeti; uzun bir kuşatmanın ardından İspanyol destekli Floransa kuvvetlerine teslim oldu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1125-01-01", tur:"kurulus", b:"Siena özerk bir komün (cumhuriyet) olarak örgütlendi" },
    { t:"1260-09-04", tur:"savas", b:"Montaperti Savaşı'nda Floransa'yı ağır yenilgiye uğrattı" },
    { t:"1555-04-17", tur:"son", b:"Uzun kuşatma sonunda Floransa-İspanya kuvvetlerine teslim oldu" }
  ]
},
{ id:"ferrara", ad:"Este Devleti (Ferrara / Modena)", tur:"dukalik", bolge:"italya",
  f:"1240-01-01", t:"1859-01-01", baskent:"Ferrara → Modena (1598 sonrası)", harita:"ferrara",
  ozet:"Este hanedanının Po vadisinde kurduğu, sanat ve edebiyatın (Ariosto) himaye gördüğü dükalık; Ferrara kolu Papalık tarafından ilhak edilince hanedan Modena'ya çekildi, İtalya birliğinde son buldu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1240-01-01", tur:"kurulus", b:"Este ailesi Ferrara'da beyliğini kurdu" },
    { t:"1471-01-01", tur:"hukumdar", b:"Papa tarafından \"Ferrara Dükü\" unvanı tanındı" },
    { t:"1598-01-01", tur:"toprak-kayip", b:"Ferrara, meşru varis yokluğuyla Papalık Devleti'ne ilhak edildi, hanedan Modena'ya çekildi" },
    { t:"1859-01-01", tur:"son", b:"İtalyan birleşme hareketiyle Modena da Sardinya-Piyemonte'ye katıldı" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — DALGA 2: `mantua` harita kimliği künyenin
// ömrünün (1328-1708) ÖNCESİNDE de kullanılıyordu; Bonacolsi senyörlüğü
// dönemi. Bitiş günü (16 Ağustos 1328, Gonzaga darbesi) iyi belgeli bir
// tarih — `mantua`nın kendi f'si ("1328-01-01") aynı yılın daha kaba bir
// yuvarlaması, çelişki değil hassasiyet farkı. TDV'de `bonacolsi` maddesi
// yok, §4 gereği standart akademik kaynak.
{ id:"bonacolsi", ad:"Bonacolsi Senyörlüğü (Mantova)", tur:"devlet", bolge:"italya",
  f:"1273-01-01", t:"1328-08-16", baskent:"Mantova",
  ozet:"Pinamonte Bonacolsi'nin Mantova'da fiilî senyörlüğünü kurmasıyla başlayan, kentin ilk kalıcı tek-aile yönetimi; son senyör Rinaldo (Passerino) Bonacolsi, Gonzaga ailesinin darbesiyle devrildi ve öldürüldü (bkz. [[mantua]]). TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1273-01-01", tur:"kurulus", b:"Pinamonte Bonacolsi, Mantova'da fiilî senyörlüğü ele geçirdi" },
    { t:"1328-08-16", tur:"son", b:"Ludovico Gonzaga önderliğindeki darbeyle Rinaldo (Passerino) Bonacolsi devrilip öldürüldü" }
  ]
},
{ id:"mantua", ad:"Mantua Dukalığı (Gonzaga)", tur:"dukalik", bolge:"italya",
  f:"1328-01-01", t:"1708-01-01", baskent:"Mantua", harita:"mantua",
  ozet:"Gonzaga hanedanının kurduğu, Rönesans sanatına (Mantegna) büyük destek veren küçük ama zengin dükalık; hanedanın soyu tükenince İspanya Veraset Savaşı sırasında Avusturya Habsburglarına geçti.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1328-01-01", tur:"kurulus", b:"Gonzaga ailesi Mantua'da iktidarı ele geçirdi" },
    { t:"1530-01-01", tur:"hukumdar", b:"İmparator V. Karl, Gonzaga'ya dükalık unvanı verdi" },
    { t:"1708-01-01", tur:"son", b:"Son Gonzaga dükü sürgüne gönderildi, Avusturya Habsburgları dükalığı ilhak etti" }
  ]
},
{ id:"parma", ad:"Parma Dukalığı (Farnese / Bourbon)", tur:"dukalik", bolge:"italya",
  f:"1545-08-16", t:"1860-03-18", baskent:"Parma", harita:"parma",
  ozet:"Papa III. Paul'ün oğluna verdiği Farnese dükalığı; hanedanın sönmesiyle İspanyol Bourbon koluna geçti, İtalya birliğinde halkoylamasıyla Sardinya-Piyemonte'ye katıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1545-08-16", tur:"kurulus", b:"Papa III. Paul, oğlu Pier Luigi Farnese'ye dükalığı verdi" },
    { t:"1731-01-01", tur:"bolunme", b:"Farnese hanedanı sönünce dükalık İspanyol Bourbon koluna geçti" },
    { t:"1860-03-18", tur:"son", b:"Halkoylamasıyla Sardinya-Piyemonte'ye katıldı" }
  ]
},
{ id:"piza", ad:"Pisa Cumhuriyeti", tur:"cumhuriyet", bolge:"italya",
  f:"1000-01-01", t:"1406-10-09", baskent:"Pisa", harita:"piza",
  ozet:"Akdeniz'de Cenova ve Venedik'le rekabet eden deniz cumhuriyeti; Meloria deniz savaşında Cenova'ya yenilip zayıfladı, sonunda Floransa'ya ilhak edildi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1000-01-01", tur:"kurulus", b:"Pisa bağımsız bir deniz cumhuriyeti olarak örgütlendi" },
    { t:"1284-08-06", tur:"savas", b:"Meloria Deniz Savaşı'nda Cenova'ya ağır yenilgi aldı, deniz gücü kırıldı" },
    { t:"1406-10-09", tur:"son", b:"Floransa şehri kuşatıp ilhak etti" }
  ]
},
{ id:"luksemburg", ad:"Lüksemburg Büyük Dükalığı", tur:"dukalik", bolge:"bati-avrupa",
  f:"1890-11-23", t:"1923-10-29", baskent:"Lüksemburg Şehri", harita:"luksemburg",
  ozet:"Hollanda kraliyet hanedanının erkek varisi kalmayınca Nassau-Weilburg koluna geçen, Hollanda'dan ayrı bağımsız büyük dükalık (1923 sonrasında da sürdü, I. Dünya Savaşı'nda Alman işgaline uğradı).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1890-11-23", tur:"kurulus", b:"III. Willem'in ölümüyle Hollanda tacından ayrılıp Nassau-Weilburg koluna geçti" },
    { t:"1914-08-02", tur:"isgal", b:"Almanya, tarafsızlığını çiğneyip ülkeyi işgal etti" }
  ]
},

// ================================================================================
// EK: ASYA PARTİ 1 — 1550 kesitinin adsız 12 kimliği (VERİ KİMLİK 3, 3 Ağustos)
// Girdi: kosu_47aa386.log'un "bilinmeyen devlet kimliği" uyarıları (631 uyarı /
// 98 ayrı kimlik). Sıra uyarı sayısına göre DEĞİL sahneye göre kuruldu:
// 1550-06-15 kesitinde toprak tutan 12 kimlik önce alındı (oturumlar/
// VERI-KIMLIK-3-ASYA.md). Onikisinin de `harita:` karşılığı bu partide
// arac/renkler.py'ye YAZILDI — künye tek başına boyamaz, motor BOYALAR[d]'a
// bakar (uret_petek.py:272).
// Kaynak: Dekken ve Hint sultanlıkları TDV'den (suriler · gucerat · adilsahiler ·
// nizamsahiler · kutubsahiler · demak — altısının da <title>'ı sınandı, canlı).
// Hindu/Budist gövdeler (racput · orissa · nayak · tibet · kuzey-yuan) TDV
// kapsamı dışı, standart akademik kaynağa göre.
// ⚠️ ÖLÇÜLDÜ, TDV'de madde YOK: `yarkent` · `mogulistan` · `dogu turkistan`
//    (arama 0 sonuç). Oturum 13'ün "TDV YARKENT / TDV MOĞULİSTAN" atıfları ölü;
//    yarkent-hanligi'nin TDV dayanağı `kasgar` maddesidir ve KISMÎDİR
//    (1514-1606 arası boş, 1678 Âfâk Hoca'yı veriyor).
// ================================================================================

{ id:"sur-hanedani", ad:"Sûrîler (Sûr Hânedanı)", tur:"hanedanlik", bolge:"guney-asya",
  f:"1540-05-17", t:"1564-01-01", baskent:"Delhi (Sasaram ocağı) → Gaur", harita:"sur-hanedani",
  ozet:"Şîr Şah Sûr'un Hümâyun'u yenip Bâbürlü iktidarını on beş yıl kesintiye uğrattığı Afgan hânedanı; Delhi 1555'te geri alındı, Bengal kolu 1564'e kadar sürdü (kaynak: TDV, madde: suriler).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1540-05-17", tur:"kurulus", b:"Kannauc (Bilgram) Savaşı'nda Hümâyun'u yenen Şîr Şah Sûr Delhi'ye hâkim oldu" },
    { t:"1545-05-22", tur:"hukumdar", b:"Şîr Şah Kalincar kuşatmasında öldü, yerine oğlu İslâm Şah geçti" },
    { t:"1555-07-23", tur:"toprak-kayip", b:"Hümâyun Delhi'yi geri aldı, hânedanın başkentteki hâkimiyeti bitti" },
    { t:"1564-01-01", tur:"son", b:"Bengal'deki son Sûrî hükümdarın düşmesiyle hânedan tarihe karıştı" }
  ]
},
{ id:"gucerat-sultanligi", ad:"Gucerât Sultanlığı", tur:"sultanlik", bolge:"guney-asya",
  f:"1407-01-01", t:"1573-01-01", baskent:"Ahmedâbâd", harita:"gucerat-sultanligi",
  ozet:"Delhi'den kopan Zafer Han'ın (Muzaffer Şah) kurduğu, Hint Okyanusu ticaretiyle zenginleşen ve Portekiz'e karşı Osmanlı'dan yardım isteyen batı Hindistan sultanlığı (kaynak: TDV, madde: gucerat).",
  kaynak:"gucerat",
  kronoloji:[
    { t:"1407-01-01", tur:"kurulus", b:"Zafer Han, Muzaffer Şah unvanıyla bağımsızlığını ilân etti" },
    { t:"1411-01-01", tur:"hukumdar", b:"Ahmed Şah devleti pekiştirdi, Ahmedâbâd başkent oldu" },
    { t:"1537-01-01", tur:"son", b:"Bahadır Şah'ın Portekizlilerce öldürülmesiyle devlet en güçlü dönemini kapattı" },
    { t:"1573-01-01", tur:"son", b:"Ekber'in seferi sonunda Gucerât, Bâbürlü Devleti'nin bir eyaleti hâline getirildi" }
  ]
},
{ id:"racput", ad:"Racput Devletleri (Mevar, Mârvâr, Amber, Bikaner)", tur:"devlet", bolge:"guney-asya",
  f:"1281-01-01", t:"1923-10-29", baskent:"Çitor/Udeypûr · Codhpûr · Caypûr (çok merkezli)", harita:"racput",
  ozet:"Racputâne'nin birbirinden bağımsız Hindu hânedanları; Delhi ve Bâbürlü baskısına yüzyıllarca direnip sonunda İngiliz himâyesinde prens devleti olarak 1923'ün ötesine geçtiler. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1303-01-01", tur:"toprak-kayip", b:"Alâeddin Halacî Çitor'u aldı, Mevar uzun bir sürgün dönemine girdi" },
    { t:"1568-01-01", tur:"toprak-kayip", b:"Ekber Çitor'u kuşatıp aldı, Racput direnişinin merkezi kırıldı" },
    { t:"1615-01-01", tur:"antlasma", b:"Mevar, Bâbürlülerle uzlaşarak özerkliğini koruyan bir düzene geçti" },
    { t:"1818-01-01", tur:"antlasma", b:"Racput devletleri İngiliz Doğu Hindistan Şirketi'nin himâyesine girdi" }
  ]
},
{ id:"bicapur", ad:"Âdilşâhî Sultanlığı (Bîcâpûr)", tur:"sultanlik", bolge:"guney-asya",
  f:"1489-01-01", t:"1686-09-22", baskent:"Bîcâpûr", harita:"bicapur",
  ozet:"Behmenî'nin dağılmasıyla Yûsuf Âdil Han'ın Bîcâpûr'da kurduğu, Dekken'in en uzun ömürlü sultanlığı; Evrengzîb'in bir yılı aşan kuşatmasıyla düştü (kaynak: TDV, madde: adilsahiler).",
  kaynak:"bicapur",
  kronoloji:[
    { t:"1489-01-01", tur:"kurulus", b:"Yûsuf Âdil Han hutbeyi kendi adına okutup Bîcâpûr'da bağımsızlığını ilân etti" },
    { t:"1565-01-25", tur:"savas", b:"Talikota'da öteki Dekken sultanlıklarıyla ittifak kurup Vijayanagara'yı yendi" },
    { t:"1579-01-01", tur:"hukumdar", b:"II. İbrâhim'in tahta çıkışıyla sultanlığın kültür bakımından en parlak dönemi başladı" },
    { t:"1686-09-22", tur:"son", b:"Bîcâpûr Bâbürlülere teslim oldu, hükümdar İskender esir alındı" }
  ]
},
{ id:"ahmednagar", ad:"Nizamşâhî Sultanlığı (Ahmednagar)", tur:"sultanlik", bolge:"guney-asya",
  f:"1490-01-01", t:"1636-01-01", baskent:"Ahmednagar → Devletâbâd", harita:"ahmednagar",
  ozet:"Melik Ahmed'in Behmenî'den ayrılarak kurduğu Dekken sultanlığı; Malik Anber'in direnişiyle bir kuşak daha yaşadı, Şah Cihan'ın kuvvetleri son sultanı 1636 Şubatında teslim aldı (kaynak: TDV, madde: nizamsahiler).",
  kaynak:"nizamsahiler",
  kronoloji:[
    { t:"1490-01-01", tur:"kurulus", b:"Melik Ahmed Nizamşah bağımsızlığını ilân etti" },
    { t:"1495-01-01", tur:"kurulus", b:"Ahmednagar şehri kurulup başkent yapıldı" },
    { t:"1565-01-25", tur:"savas", b:"Talikota'da Dekken ittifakının içinde Vijayanagara'ya karşı savaştı" },
    { t:"1636-01-01", tur:"son", b:"Son sultan III. Murtaza Nizamşah Bâbürlülere teslim edildi, devlet ilhak olundu" }
  ]
},
{ id:"golkonda", ad:"Kutubşâhî Sultanlığı (Golkonda)", tur:"sultanlik", bolge:"guney-asya",
  f:"1512-01-01", t:"1687-09-21", baskent:"Golkonda → Haydarâbâd", harita:"golkonda",
  ozet:"Sultan Kulı'nın doğu Dekken'de kurduğu, elmas ticareti ve Haydarâbâd'ın imarıyla anılan Türk hânedanı; Evrengzîb'in sekiz aylık kuşatmasından sonra son buldu (kaynak: TDV, madde: kutubsahiler).",
  kaynak:"gulkunde",
  kronoloji:[
    { t:"1512-01-01", tur:"kurulus", b:"Sultan Kulı Kutbülmülk, Telingana'da bağımsızlığını ilân etti" },
    { t:"1565-01-25", tur:"savas", b:"Talikota'da Dekken ittifakının içinde Vijayanagara'ya karşı savaştı" },
    { t:"1591-01-01", tur:"kurulus", b:"Muhammed Kulı, Haydarâbâd'ı kurup başkenti Golkonda'dan oraya taşıdı" },
    { t:"1687-09-21", tur:"son", b:"Ebü'l-Hasan sekiz aylık kuşatmadan sonra Evrengzîb'e teslim oldu" }
  ]
},
{ id:"nayak-devletleri", ad:"Nâyak Beylikleri (Madurai, Tancûr, Cinci, Keladi)", tur:"beylik", bolge:"guney-asya",
  f:"1336-01-01", t:"1763-01-01", baskent:"Madurai · Tancûr · Cinci · Keladi (çok merkezli)", harita:"nayak-devletleri",
  ozet:"Vijayanagara'nın valilerinden doğup imparatorluk çökünce fiilen bağımsızlaşan güney Hindistan beylikleri; sonuncuları Meysûr ve Karnâtik güçleri arasında eridi. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1336-01-01", tur:"kurulus", b:"Musunuri nâyakları Ma'ber Sultanlığı'na karşı Telingana'yı geri aldı" },
    { t:"1565-01-25", tur:"bolunme", b:"Talikota yenilgisinden sonra nâyaklar fiilen bağımsız beylikler hâline geldi" },
    { t:"1736-01-01", tur:"son", b:"Madurai Nâyaklığı Karnâtik kuvvetlerince ortadan kaldırıldı" },
    { t:"1763-01-01", tur:"son", b:"Keladi (Bednur) Nâyaklığı Meysûr'a katılınca son nâyak beyliği de bitti" }
  ]
},
{ id:"orissa", ad:"Orissa (Doğu Ganga ve Gacapati Krallığı)", tur:"krallik", bolge:"guney-asya",
  f:"1281-01-01", t:"1568-01-01", baskent:"Kattak", harita:"orissa",
  ozet:"Bengal körfezi kıyısında Doğu Ganga'dan Gacapatilere geçen, Puri tapınak kültürünün merkezi olan Hindu krallığı; Bengal'in Kerrânî sultanlarınca fethedilerek son buldu. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1435-01-01", tur:"hukumdar", b:"Doğu Ganga hânedanının yerini Gacapati (Sûryavamşa) hânedanı aldı" },
    { t:"1512-01-01", tur:"savas", b:"Krişnadevaraya'nın seferleriyle güney toprakları Vijayanagara'ya kaptırıldı" },
    { t:"1568-01-01", tur:"son", b:"Bengal'in Kerrânî sultanı Orissa'yı fethetti, bağımsız krallık sona erdi" }
  ]
},
{ id:"tibet", ad:"Tibet (Phagmodrupa · Rinpungpa · Tsangpa)", tur:"devlet", bolge:"dogu-asya",
  f:"1354-01-01", t:"1642-01-01", baskent:"Nêdong → Şigatse", harita:"tibet",
  ozet:"Yuan vesâyetinin çözülmesinden sonra Tibet'i sırayla yöneten üç yerli hânedanın dönemi; Gûşi Han'ın müdahalesiyle iktidar Dalai Lama hükûmetine geçti (bkz. [[tibet-ganden-phodrang]]). TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1354-01-01", tur:"kurulus", b:"Cangçub Gyaltsen, Sakya-Yuan düzenini devirip Phagmodrupa yönetimini kurdu" },
    { t:"1435-01-01", tur:"hukumdar", b:"Rinpungpa beyleri Phagmodrupa'yı gölgede bırakıp Tsang'a hâkim oldu" },
    { t:"1565-01-01", tur:"hukumdar", b:"Tsangpa hânedanı Rinpungpa'nın yerini aldı, Şigatse merkez oldu" },
    { t:"1642-01-01", tur:"son", b:"Hoşut lideri Gûşi Han Tsangpa'yı devirip iktidarı V. Dalai Lama'ya verdi" }
  ]
},
{ id:"yarkent-hanligi", ad:"Yarkent (Sa'îdiyye) Hanlığı", tur:"hanlik", bolge:"orta-asya",
  f:"1514-01-01", t:"1705-01-01", baskent:"Yarkent", harita:"yarkent-hanligi",
  ozet:"Sultan Said Han'ın Moğulistan mirası üzerinde Tarım havzasında kurduğu Çağatay hanlığı; Hocaların nüfuzu altında bölünüp Cungar Kalmuklarının eline geçti (kaynak: TDV, madde: kasgar — kısmî).",
  kaynak:"yetersiz — kaşgar maddesi okundu, Yarkent'i ayrı bir siyasi varlık olarak ele almıyor, yalnız geçerken anıyor (\"Timur'un torunu 1399'da Kâşgar ile birlikte Yarkent ve Aksu'yu fethetti\" gibi tek bir cümle); hanlığın kendi kuruluş/bölünme/son tarihini (1514-1705) karşılamıyor; dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1514-01-01", tur:"kurulus", b:"Sultan Said Han, Kâşgar ve Yarkent'i alıp hanlığı kurdu" },
    { t:"1606-01-01", tur:"hukumdar", b:"Çağatay hânedanından Emîr İsmâil Kâşgar'ın idaresini eline aldı" },
    { t:"1678-01-01", tur:"isgal", b:"Âfâk Hoca, Kalmuk desteğiyle şehrin emîri oldu; Hocalar dönemi başladı" },
    { t:"1705-01-01", tur:"son", b:"Cungar hâkimiyetinin pekişmesiyle hanlık fiilen sona erdi" }
  ]
},
{ id:"kuzey-yuan", ad:"Kuzey Yuan (Moğol Hanlığı)", tur:"hanlik", bolge:"dogu-asya",
  f:"1368-09-14", t:"1691-05-30", baskent:"Karakurum → değişken ordugâh", harita:"kuzey-yuan",
  ozet:"Ming'in Çin'den kovduğu Yuan sarayının bozkırda sürdürdüğü hanlık; Dayan Han'la bir süre toparlandı, Ligdan Han'ın ölümünden sonra mührü Mançulara geçti. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı. ⚠️ BİTİŞ 1635 DEĞİL 1691: 1635 ÇAHAR'ın (İç Moğolistan) teslimidir; HALHA 30 Mayıs 1691'de Dolonnor'da tâbi oldu ve o güne kadar Cengizli hanların elindeydi. Atlas zaten öyle kullanıyor (canlı `Urga`: kuzey-yuan 1639→1691-05-30). PETEK/NOKTA parti 24 ölçtü.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1368-09-14", tur:"kurulus", b:"Toghon Temür Dadu'yu (Pekin) bırakıp bozkıra çekildi, Yuan sarayı kuzeyde sürdü" },
    { t:"1449-09-01", tur:"savas", b:"Tumu'da Oyratlar Ming imparatorunu esir aldı" },
    { t:"1487-01-01", tur:"hukumdar", b:"Dayan Han dağılmış Moğol kanatlarını yeniden birleştirdi" },
    { t:"1635-01-01", tur:"son", b:"Ligdan Han'ın ölümünden sonra oğlu Ejei, Yuan mührüyle Mançulara teslim oldu" }
  ]
},
{ id:"demak", ad:"Demak Sultanlığı (Cava)", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1478-01-01", t:"1587-01-01", baskent:"Demak", harita:"demak",
  ozet:"Cava'nın ilk bağımsız müslüman devleti; Majapahit'in çöküşü üzerine kurulup İslâm'ı adanın içlerine taşıdı, Trenggana'nın 1546'daki ölümünden sonra dağıldı (kaynak: TDV, madde: demak).",
  kaynak:"demak",
  kronoloji:[
    { t:"1478-01-01", tur:"kurulus", b:"Raden Patah, Majapahit'in çözülmesi üzerine Demak'ta sultanlığını kurdu" },
    { t:"1527-01-01", tur:"toprak-kazanc", b:"Majapahit'in kalıntısı ortadan kaldırıldı, Cava'nın kuzey kıyısı Demak'a bağlandı" },
    { t:"1546-01-01", tur:"savas", b:"Trenggana, Panarukan seferinde yenilip öldürüldü; devlet gerilemeye başladı" },
    { t:"1587-01-01", tur:"son", b:"Pajang ve ardından Mataram'ın yükselişiyle Demak'ın bağımsızlığı bitti" }
  ]
},
// VERİ DEVLET (7 Ağustos 2026) — DALGA 2: Demak'ın ardılı Mataram Sultanlığı,
// 13 Şubat 1755'te Giyanti Antlaşması ile ikiye bölündü. TDV `mataram`
// slug'ı ölü (302), `cava` maddesi de antlaşmadan hiç bahsetmiyor; §4
// gereği standart akademik kaynak (Güneydoğu Asya tarihi) kullanıldı.
{ id:"surakarta", ad:"Surakarta Sunanlığı", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1755-02-13", t:"1923-10-29", baskent:"Surakarta (Solo)",
  ozet:"Giyanti Antlaşması ile Mataram Sultanlığı'nın ikiye bölünmesiyle doğan, Pakubuwono hanedanının yönettiği sunanlık; Yogyakarta ile aynı gün doğdu (bkz. [[yogyakarta]]), Hollanda himayesinde 20. yüzyıla dek sürdü (1923 sonrasında da sürdü). TDV'de `mataram` maddesi ölü (302); tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1755-02-13", tur:"kurulus", b:"Giyanti Antlaşması ile Mataram bölündü, Pakubuwono III Surakarta sunanı ilan edildi" }
  ]
},
{ id:"yogyakarta", ad:"Yogyakarta Sultanlığı", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1755-02-13", t:"1923-10-29", baskent:"Yogyakarta",
  ozet:"Giyanti Antlaşması ile Mataram Sultanlığı'nın ikiye bölünmesiyle doğan, Hamengkubuwono hanedanının yönettiği sultanlık; Surakarta ile aynı gün doğdu (bkz. [[surakarta]]), Hollanda himayesinde 20. yüzyıla dek sürdü (1923 sonrasında da sürdü). TDV'de `mataram` maddesi ölü (302); tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1755-02-13", tur:"kurulus", b:"Giyanti Antlaşması ile Mataram bölündü, I. Hamengkubuwono Yogyakarta sultanı ilan edildi" }
  ]
},

// ================================================================================
// EK: ASYA PARTİ 1b — 1550 kesitinin KALAN 37 kimliği (VERİ KİMLİK 3, 3 Ağustos)
// Görev dosyası PARTİ 1'i 12 kimlik sayıyordu ama bitiş ölçütü "1550 kesitinde
// adsız kimlik kalmadı" diyordu. ÖLÇÜLDÜ: ikisi aynı şey değil — 12'si
// yazıldıktan sonra 1550-06-15 sahnesinde 37 kimlik / 55 nokta hâlâ adsızdı ve
// bunlar PARTİ 2·3·4 listelerine dağılmıştı. Ölçüt sahneyi istiyor, liste
// sahnenin yalnız kalın ucuydu; bu blok kuyruğu kapatır.
// ⚠️ TDV KAPSAMI — ölçüldü, varsayılmadı: `sind` · `kesmir` · `malva` ·
//   `arakan` · `filipinler` · `morolar` · `sulu` · `behmeniler` · `endonezya` ·
//   `cava` CANLI. Buna karşılık Oturum 13'ün atıfları `kalikut` ve
//   `moluk-adalari` için ÖLÜ (arama 0 sonuç); o kayıtlar akademik kaynağa
//   yazıldı. Kalanlar (Hindu/Budist krallıklar, Vietnam, Angkor, Bali, Timor)
//   kaynak kuralının açık istisnasıdır.
// ================================================================================

{ id:"mogulistan", ad:"Moğulistan (Doğu Çağatay Hanlığı)", tur:"hanlik", bolge:"orta-asya",
  f:"1347-01-01", t:"1680-01-01", baskent:"Almalık → Turfan", harita:"mogulistan",
  ozet:"Çağatay Hanlığı'nın doğuya çekilen kolu; batı ucu 1514'te Yarkent Hanlığı'na dönüşürken Turfan kolu Cungar fethine kadar sürdü. ⚠️ [[mogolistan]] ile karıştırılmamalı, aralarında 231 yıl var. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1347-01-01", tur:"bolunme", b:"Tuğluk Timur, Çağatay ulusunun doğu kanadında han ilân edildi" },
    { t:"1514-01-01", tur:"bolunme", b:"Sultan Said Han batı ucunda Yarkent Hanlığı'nı kurdu (bkz. [[yarkent-hanligi]])" },
    { t:"1680-01-01", tur:"son", b:"Cungar Hanlığı Turfan kolunu da yutunca Moğul hânedanı sona erdi" }
  ]
},
{ id:"sind", ad:"Sind (Sûmra, Samma, Ergunlu, Kalhora, Talpur)", tur:"devlet", bolge:"guney-asya",
  f:"1281-01-01", t:"1843-02-17", baskent:"Tatta → Haydarâbâd", harita:"sind",
  ozet:"İndus deltasında birbirini izleyen yerli ve Türk hânedanların yönettiği bölge; Miyânî'de İngilizlere yenilerek Hindistan'a ilhak edildi (kaynak: TDV, madde: sind, argun--sind).",
  kaynak:"sind",
  kronoloji:[
    { t:"1351-01-01", tur:"hukumdar", b:"Samma hânedanı Sûmraların yerini aldı, merkez Tatta oldu" },
    { t:"1520-01-01", tur:"hukumdar", b:"Şah Beg Ergun Sind'i alıp Ergunlu (Argun) idaresini kurdu" },
    { t:"1783-01-01", tur:"hukumdar", b:"Talpur emîrleri Kalhoraları devirip Sind'e hâkim oldu" },
    { t:"1843-02-17", tur:"son", b:"Miyânî Savaşı'nda İngilizlere yenilen Talpurlar Sind'i kaybetti" }
  ]
},
{ id:"kesmir", ad:"Keşmir Sultanlığı (Şah Mîr Hânedanı)", tur:"sultanlik", bolge:"guney-asya",
  f:"1281-01-01", t:"1586-10-01", baskent:"Srinagar", harita:"kesmir",
  ozet:"Lohara krallığının yerini alan Şah Mîr hânedanının yönettiği, Himalaya vadisinde uzun süre bağımsız kalan sultanlık; Ekber'in seferiyle Bâbürlü eyaleti oldu (kaynak: TDV, madde: kesmir).",
  kaynak:"kesmir",
  kronoloji:[
    { t:"1339-01-01", tur:"kurulus", b:"Şah Mîr, Lohara hânedanının yerine geçip müslüman sultanlığı kurdu" },
    { t:"1420-01-01", tur:"hukumdar", b:"Zeynelâbidîn dönemi Keşmir'in kültür bakımından en parlak çağı oldu" },
    { t:"1586-10-01", tur:"son", b:"Ekber'in kuvvetleri vadiyi alıp Keşmir'i Bâbürlü eyaletine dönüştürdü" }
  ]
},
{ id:"malva-sultanligi", ad:"Mâlvâ Sultanlığı", tur:"sultanlik", bolge:"guney-asya",
  f:"1392-01-01", t:"1562-01-01", baskent:"Dhâr → Mândû", harita:"malva-sultanligi",
  ozet:"Delhi'nin zayıflamasıyla Dilâver Han'ın orta Hindistan'da kurduğu, Mândû'nun mimarisiyle anılan sultanlık; Ekber'in seferiyle Bâbürlü eyaleti oldu (kaynak: TDV, madde: malva, halaciler).",
  kaynak:"malva",
  kronoloji:[
    { t:"1392-01-01", tur:"kurulus", b:"Dilâver Han Gūrî, Mâlvâ'da fiilî bağımsızlığını kurdu" },
    { t:"1436-01-01", tur:"hukumdar", b:"I. Mahmud ile Halacî kolu tahta geçti, Mândû başkent olarak imar edildi" },
    { t:"1562-01-01", tur:"son", b:"Ekber'in kuvvetleri Mâlvâ'yı alıp Bâbürlü eyaletine kattı" }
  ]
},
{ id:"bidar", ad:"Barîdşâhî Sultanlığı (Bîdar)", tur:"sultanlik", bolge:"guney-asya",
  f:"1489-01-01", t:"1619-01-01", baskent:"Bîdar", harita:"bidar",
  ozet:"Behmenî'nin başkentinde vezirlikten hükümdarlığa geçen Barîdşâhîlerin sultanlığı; Dekken beşlisinin en küçüğüydü, Âdilşâhîlerce ilhak edildi (kaynak: TDV, madde: behmeniler).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1489-01-01", tur:"kurulus", b:"Kāsım Berîd, Behmenî sultanı adına Bîdar'da fiilî iktidarı ele geçirdi" },
    { t:"1565-01-25", tur:"savas", b:"Talikota'da Dekken ittifakının içinde Vijayanagara'ya karşı savaştı" },
    { t:"1619-01-01", tur:"son", b:"Bîcâpûr Âdilşâhîleri Bîdar'ı ilhak etti" }
  ]
},
{ id:"berar", ad:"İmâdşâhî Sultanlığı (Berâr)", tur:"sultanlik", bolge:"guney-asya",
  f:"1490-01-01", t:"1574-01-01", baskent:"Elicpûr", harita:"berar",
  ozet:"Behmenî'nin dağılmasıyla Berâr'da kurulan, Dekken beşlisinin en kısa ömürlü sultanlığı; Ahmednagar Nizamşâhîlerince ortadan kaldırıldı (kaynak: TDV, madde: behmeniler).",
  kaynak:"imadsahiler",
  kronoloji:[
    { t:"1490-01-01", tur:"kurulus", b:"Fethullah İmâdülmülk Berâr'da bağımsızlığını ilân etti" },
    { t:"1574-01-01", tur:"son", b:"Nizamşâhîler Berâr'ı ilhak etti, İmâdşâhî hânedanı sona erdi" }
  ]
},
{ id:"gond-kralliklari", ad:"Gond Krallıkları (Garha-Mandla, Deogarh)", tur:"krallik", bolge:"guney-asya",
  f:"1281-01-01", t:"1781-01-01", baskent:"Mandla", harita:"gond-kralliklari",
  ozet:"Orta Hindistan ormanlarında Gond kabile hânedanlarının kurduğu krallıklar; Râni Durgâvatî'nin direnişiyle anılır, Maratha yayılmasıyla son buldu. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1550-01-01", tur:"hukumdar", b:"Kocası Dalpat Şah'ın ölümü üzerine Rani Durgâvatî, küçük oğlu Vir Narayan adına naibe oldu, krallığı siyasi olarak birleştirip güçlendirdi (Encyclopedia.com, 'Durgawati', Gale)" },
    { t:"1564-01-01", tur:"savas", b:"Râni Durgâvatî, Ekber'in kuvvetlerine karşı savaşırken hayatını kaybetti" },
    { t:"1567-01-01", tur:"vassal", b:"Ekber, Durgâvatî'nin kayınbiraderi Chandra Shah'ı on kaleyi Babür idaresine bırakması karşılığında Garha-Mandla'nın başına tanıdı; krallık 17. yy'a kadar Babür'e tâbi bir vasal hanedan olarak sürdü (Akbarnâme'ye dayanan akademik derleme)" },
    { t:"1781-01-01", tur:"son", b:"Garha-Mandla Maratha idaresine geçti, bağımsız Gond krallığı bitti" }
  ]
},
{ id:"ahom", ad:"Ahom Krallığı (Assam)", tur:"krallik", bolge:"guney-asya",
  f:"1281-01-01", t:"1826-01-01", baskent:"Çaraideo → Rangpûr", harita:"ahom",
  ozet:"Brahmaputra vadisinde altı yüzyıl süren, Bâbürlü seferlerini Saraighat'ta durdurmasıyla anılan Tai kökenli krallık; Birmanya istilâsından sonra İngiliz idaresine geçti. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1671-01-01", tur:"savas", b:"Saraighat'ta Lachit Barphukan Bâbürlü donanmasını bozguna uğrattı" },
    { t:"1817-01-01", tur:"isgal", b:"Birmanya kuvvetleri Assam'ı işgal etti" },
    { t:"1826-01-01", tur:"son", b:"Yandabo Antlaşması Assam'ı İngiliz Doğu Hindistan Şirketi'ne bıraktı" }
  ]
},
{ id:"manipur", ad:"Manipûr Krallığı", tur:"krallik", bolge:"guney-asya",
  f:"1281-01-01", t:"1923-10-29", baskent:"İmphâl", harita:"manipur",
  ozet:"Assam ile Birmanya arasındaki vadide Meitei hânedanının yönettiği krallık; 1891'de İngiliz himâyesine girdi ama tahtı 1923'ün ötesine taşıdı. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1819-01-01", tur:"isgal", b:"Birmanya işgali 'Yedi Yıllık Yıkım' diye anılan dönemi başlattı" },
    { t:"1891-01-01", tur:"son", b:"Anglo-Manipûr Savaşı'ndan sonra krallık İngiliz himâyesine alındı" }
  ]
},
{ id:"nepal", ad:"Nepal (Malla Krallıkları → Gorkha/Şah Hânedanı)", tur:"krallik", bolge:"guney-asya",
  f:"1281-01-01", t:"1923-10-29", baskent:"Katmandu", harita:"nepal",
  ozet:"Katmandu vadisinin üç Malla krallığından Gorkha fethiyle tek krallığa dönüşen Himalaya devleti; hiç sömürgeleşmedi, 1923'ün ötesine geçti. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1768-09-25", tur:"birlesme", b:"Prithvi Narayan Şah Katmandu'yu alıp vadiyi Gorkha yönetiminde birleştirdi" },
    { t:"1816-03-04", tur:"antlasma", b:"Sugauli Antlaşması ile İngilizlere toprak verildi, sınırlar bugünkü hâline yaklaştı" },
    { t:"1846-09-15", tur:"hukumdar", b:"Kot katliamıyla Rana ailesi fiilî iktidarı ele geçirdi, krallar sembolik kaldı" }
  ]
},
{ id:"ladak", ad:"Ladakh Krallığı (Namgyal Hânedanı)", tur:"krallik", bolge:"guney-asya",
  f:"1281-01-01", t:"1834-01-01", baskent:"Leh", harita:"ladak",
  ozet:"Batı Himalaya'da Tibet Budizmi'ne bağlı, İpek yolu kollarını denetleyen krallık; Dogra istilâsıyla Cammû-Keşmir'e katıldı. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1681-01-01", tur:"savas", b:"Tibet-Ladakh-Moğol savaşı başladı, krallık Bâbürlü yardımıyla ayakta kaldı" },
    { t:"1834-01-01", tur:"son", b:"Zorâver Singh'in Dogra seferi krallığı sona erdirdi" }
  ]
},
{ id:"kalikut", ad:"Kalikut Zamorinliği", tur:"krallik", bolge:"guney-asya",
  f:"1281-01-01", t:"1766-01-01", baskent:"Kalikut", harita:"kalikut",
  ozet:"Malabar kıyısının baharat ticaretini elinde tutan, Portekiz'e karşı Osmanlı donanmasından yardım isteyen Hindu krallığı; Meysûr'un seferiyle son buldu. ⚠️ TDV'de `kalikut` maddesi YOK (ölçüldü); standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1498-05-20", tur:"savas", b:"Vasco da Gama Kalikut'a ulaştı, Portekiz rekabeti başladı" },
    { t:"1509-02-03", tur:"savas", b:"Diu'da Memlûk-Gucerât-Kalikut donanması Portekizlilere yenildi" },
    { t:"1766-01-01", tur:"son", b:"Haydar Ali'nin Malabar seferi Zamorinliğe son verdi" }
  ]
},
{ id:"travankur", ad:"Travankur Krallığı (Venâd)", tur:"krallik", bolge:"guney-asya",
  f:"1281-01-01", t:"1923-10-29", baskent:"Padmanabhapuram → Trivandrum", harita:"travankur",
  ozet:"Malabar'ın güney ucunda Venâd'dan doğan, Kolaçel'de Hollanda donanmasını yenmesiyle anılan krallık; İngiliz himâyesinde 1923'ün ötesine geçti. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1729-01-01", tur:"hukumdar", b:"Marthanda Varma tahta geçip küçük beylikleri birleştirdi" },
    { t:"1741-08-10", tur:"savas", b:"Kolaçel'de Hollanda Doğu Hindistan Şirketi kuvvetleri yenildi" },
    { t:"1805-01-01", tur:"antlasma", b:"Krallık İngiliz himâyesine girdi, tahtı korundu" }
  ]
},
{ id:"kandy", ad:"Kandy Krallığı (Seylan)", tur:"krallik", bolge:"guney-asya",
  f:"1469-01-01", t:"1815-03-02", baskent:"Kandy", harita:"kandy",
  ozet:"Seylan'ın dağlık içinde Portekiz ve Hollanda'ya üç yüzyıl direnen, adanın son bağımsız Sinhala krallığı; İngilizlere Kandy Sözleşmesi'yle teslim oldu. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1594-10-08", tur:"savas", b:"Danture'de Portekiz seferi bozguna uğradı, krallık bağımsızlığını korudu" },
    { t:"1638-05-23", tur:"ittifak", b:"Hollanda ile Portekiz'e karşı ittifak kuruldu" },
    { t:"1815-03-02", tur:"son", b:"Kandy Sözleşmesi ile krallık İngiliz tacına geçti" }
  ]
},
{ id:"yafna", ad:"Yafna (Jaffna) Krallığı", tur:"krallik", bolge:"guney-asya",
  f:"1281-01-01", t:"1619-02-01", baskent:"Nallur", harita:"yafna",
  ozet:"Seylan'ın kuzeyinde Tamil hânedanının kurduğu, inci ve fil ticaretiyle yaşayan krallık; Portekiz seferiyle ortadan kaldırıldı. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1450-01-01", tur:"isgal", b:"Kotte kuvvetleri krallığı geçici olarak işgal etti" },
    { t:"1619-02-01", tur:"son", b:"Portekiz kuvvetleri son kral Cankili II'yi devirdi, krallık sona erdi" }
  ]
},
{ id:"arakan", ad:"Arakan (Mrauk U) Krallığı", tur:"krallik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1785-01-02", baskent:"Mrauk U", harita:"arakan",
  ozet:"Bengal körfezinin doğu kıyısında Budist krallar altında müslüman unvan ve sikkelerin kullanıldığı melez devlet; Konbaung fethiyle Birmanya'ya katıldı (kaynak: TDV, madde: arakan).",
  kaynak:"arakan",
  kronoloji:[
    { t:"1430-01-01", tur:"kurulus", b:"Bengal desteğiyle dönen Narameikhla, Mrauk U'yu kurdu" },
    { t:"1666-01-01", tur:"toprak-kayip", b:"Bâbürlüler Çittagong'u alıp krallığın kuzey kanadını kesti" },
    { t:"1785-01-02", tur:"son", b:"Konbaung kuvvetleri Mrauk U'yu alıp krallığı Birmanya'ya kattı" }
  ]
},
{ id:"ava", ad:"Yukarı Birmanya (Pinya, Sagaing, Ava Krallığı)", tur:"krallik", bolge:"guneydogu-asya",
  f:"1313-01-01", t:"1555-01-01", baskent:"Pinya · Sagaing → Ava", harita:"ava",
  ozet:"Pagan'ın çöküşünden sonra Irrawaddy'nin yukarı havzasını yöneten Burman krallıkları; güneydeki Mon devletiyle Kırk Yıl Savaşı'nı sürdürdü, Toungoo'ya yenildi. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1364-01-01", tur:"birlesme", b:"Thado Minbya, Pinya ve Sagaing'i birleştirip Ava'yı kurdu" },
    { t:"1385-01-01", tur:"savas", b:"Hanthawaddy ile Kırk Yıl Savaşı başladı" },
    { t:"1555-01-01", tur:"son", b:"Toungoo hükümdarı Bayinnaung Ava'yı alıp krallığa son verdi" }
  ]
},
{ id:"lan-na", ad:"Lan Na Krallığı", tur:"krallik", bolge:"guneydogu-asya",
  f:"1262-01-01", t:"1558-04-02", baskent:"Chiang Mai", harita:"lan-na",
  ozet:"Kuzey Tayland dağlarında Mangrai'nin kurduğu Tai krallığı; Ayutthaya ve Ava arasında denge kurdu, Toungoo fethiyle Birmanya'ya bağlandı. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  // 🔴 `f` 1296-04-12 DEĞİL 1262: 1296 Chiang Mai'nin kuruluşudur, yani
  // BAŞKENTİN tarihi — hanedanın değil. Mangrai 1262'de Chiang Rai'yi kurdu
  // ve Lan Na'nın ilk hükümdarı sayılır. 8 Ağustos 2026'da düzeltildi:
  // Chiang Rai ve Nan'ın ilk dönemi 1281-01-01'den başlıyordu ve künye
  // 1296 diyordu ⇒ `§3.5` hayaleti, 15 yıl. Kaynak NOKTA GDASYA'da doğrulandı.
  kronoloji:[
    { t:"1262-01-01", tur:"kurulus", b:"Mangrai, Chiang Rai'yi kurup Lan Na hanedanını başlattı" },
    { t:"1296-04-12", tur:"baskent", b:"Kral Mangrai, Chiang Mai'yi kurup krallığın merkezi yaptı" },
    { t:"1558-04-02", tur:"son", b:"Bayinnaung Chiang Mai'yi aldı, krallık Toungoo'ya tâbi oldu" }
  ]
},
{ id:"san-devletleri", ad:"Şan Beylikleri (Sawbwa'lıklar)", tur:"beylik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1923-10-29", baskent:"Kengtung · Hsipaw · Yawnghwe (çok merkezli)", harita:"san-devletleri",
  ozet:"Birmanya'nın doğu yaylasında sawbwa denen kalıtsal beylerin yönettiği Tai devletçikleri; Birmanya, Çin ve Siyam arasında tâbiiyet değiştirerek 1923'ün ötesine geçtiler. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1297-12-17", tur:"kurulus", b:"Pagan'ın 1287 çöküşünün ardından Kyaukse'yi ele geçiren üç kardeş (geleneksel olarak Şan kökenli sayılır, akademik çevrede tartışmalı), Moğol tâbii Kral Kyawswa'yı devirip Myinsaing Krallığı'nı kurdu; Yukarı Birmanya'da Şan-Birman ortak hâkimiyetinin ilk örneği (Aung-Thwin & Aung-Thwin, 'A History of Myanmar Since Ancient Times')" },
    { t:"1557-01-01", tur:"isgal", b:"Bayinnaung Şan beyliklerini Toungoo hâkimiyetine bağladı" },
    { t:"1753-01-01", tur:"vassal", b:"Alaungpaya, Ava'yı Mon işgalinden kurtardıktan sonra Hsenwi ve Mongmit Şan beylerini yenip Konbaung üstünlüğünü yeniden sıkılaştırdı (Aung-Thwin & Aung-Thwin; Britannica 'Alaungpaya Dynasty')" },
    { t:"1883-01-01", tur:"ittifak", b:"Kral Thibaw'ın ağır vergisine karşı bir grup sawbwa Limbin Konfederasyonu'nu kurdu; 1885 Üçüncü Anglo-Birman Savaşı'yla anlamını yitirse de 1887'ye kadar İngilizlere direnişi sürdürdü (Aung-Thwin & Aung-Thwin)" },
    { t:"1887-01-01", tur:"son", b:"Üçüncü Anglo-Birman Savaşı'ndan sonra beylikler İngiliz himâyesine girdi" }
  ]
},
{ id:"lan-xang", ad:"Lan Xang Krallığı (Laos)", tur:"krallik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1707-01-01", baskent:"Luang Prabang → Vientiane", harita:"lan-xang",
  ozet:"Mekong boyunca kurulan, 'bir milyon fil' adıyla anılan Lao krallığı; veraset çekişmesiyle üçe bölünüp Laos krallıklarına dönüştü. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1353-01-01", tur:"kurulus", b:"Fa Ngum, Kmer desteğiyle Lan Xang'ı kurdu" },
    { t:"1560-01-01", tur:"kurulus", b:"Setthathirath başkenti Vientiane'ye taşıdı" },
    { t:"1707-01-01", tur:"bolunme", b:"Krallık Luang Prabang, Vientiane ve Champasak arasında bölündü" }
  ]
},
{ id:"angkor-kmer", ad:"Kmer (Angkor) İmparatorluğu", tur:"imparatorluk", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1431-01-01", baskent:"Angkor (Yasodharapura)", harita:"angkor-kmer",
  ozet:"Anıtsal tapınakları ve su mühendisliğiyle Güneydoğu Asya'nın en büyük klasik devleti; Ayutthaya baskısıyla Angkor terk edilince ardılı Kamboçya Krallığı'na dönüştü (bkz. [[kamboc-kralligi]]). TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1283-01-01", tur:"vassal", b:"Kral Jayavarman VIII, Kubilay Han'ın baskısı karşısında savaşmak yerine haraç ödemeyi kabul etti; Angkor bir Moğol istilasından bu şekilde kurtuldu (standart akademik kaynak: Cœdès, 'The Indianized States of Southeast Asia')" },
    { t:"1296-01-01", tur:"hukumdar", b:"Çinli elçi Zhou Daguan'ın Angkor'u anlattığı ziyaret gerçekleşti" },
    { t:"1431-01-01", tur:"son", b:"Ayutthaya kuşatmasının ardından Angkor terk edildi, merkez güneye taşındı" }
  ]
},
{ id:"campa", ad:"Champa Krallığı", tur:"krallik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1832-01-01", baskent:"Vijaya → Panduranga", harita:"campa",
  ozet:"Bugünkü orta Vietnam kıyısında Cham halkının kurduğu, sonradan İslâm'ın da yayıldığı krallık; Đại Việt'in güneye yürüyüşüyle yüzyıllar içinde eridi. ⚠️ TDV'de `campa` maddesi YOK (ölçüldü); standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1471-03-01", tur:"toprak-kayip", b:"Lê hükümdarı Thánh Tông başkent Vijaya'yı aldı, krallık güneye sıkıştı" },
    { t:"1697-01-01", tur:"toprak-kayip", b:"Nguyễn beyleri Panduranga'yı tâbi bir beyliğe indirdi" },
    { t:"1832-01-01", tur:"son", b:"Minh Mạng kalan Cham beyliğini ilhak etti" }
  ]
},
{ id:"mac-hanedani", ad:"Mạc Hanedanı (Đại Việt)", tur:"hanedanlik", bolge:"guneydogu-asya",
  f:"1527-06-15", t:"1677-01-01", baskent:"Thăng Long → Cao Bằng", harita:"mac-hanedani",
  ozet:"Lê tahtını gasbedip Kuzey Vietnam'ı elli yıl yöneten, sonra Cao Bằng'a çekilip Ming himâyesinde bir asır daha süren hânedan (bkz. [[le-hanedani]]). TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1527-06-15", tur:"kurulus", b:"Mạc Đăng Dung, Lê hükümdarını devirip tahta çıktı" },
    { t:"1592-01-01", tur:"toprak-kayip", b:"Trịnh kuvvetleri Thăng Long'u geri aldı, hânedan Cao Bằng'a çekildi" },
    { t:"1677-01-01", tur:"son", b:"Cao Bằng da düşünce Mạc hânedanı tarihe karıştı" }
  ]
},
{ id:"malay-sultanliklari", ad:"Malay Sultanlıkları (Kedah, Patani, Perak, Selangor, Trengganu, Pahang)", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1909-07-10", baskent:"(çok merkezli)", harita:"malay-sultanliklari",
  ozet:"Malaka'nın mirasını taşıyan, Siyam ile Cohor arasında tâbiiyet değiştiren yarımada sultanlıkları; Anglo-Siyam Antlaşması'yla İngiliz himâyesine geçtiler. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1511-08-24", tur:"bolunme", b:"Malaka'nın Portekiz'e düşmesiyle yarımada sultanlıkları kendi yollarına ayrıldı" },
    { t:"1874-01-20", tur:"antlasma", b:"Pangkor Antlaşması ile Perak'a İngiliz mukimi atandı, himâye başladı" },
    { t:"1909-07-10", tur:"son", b:"Anglo-Siyam Antlaşması kuzey sultanlıklarını da İngiliz himâyesine bıraktı" }
  ]
},
{ id:"cohor-sultanligi", ad:"Cohor (Johor) Sultanlığı", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1528-01-01", t:"1923-10-29", baskent:"Johor Lama → Johor Bahru", harita:"cohor-sultanligi",
  ozet:"Malaka hânedanının sürgündeki kolunun kurduğu, Portekiz ve Açe ile üçlü mücadeleyi yürüten sultanlık; İngiliz himâyesinde 1923'ün ötesine geçti. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1528-01-01", tur:"kurulus", b:"Alâeddin Riayat Şah II, Malaka hânedanını Cohor'da sürdürdü" },
    { t:"1641-01-01", tur:"ittifak", b:"Hollanda ile ittifak kurup Portekiz Malakası'nın düşüşüne katıldı" },
    { t:"1885-01-01", tur:"antlasma", b:"İngiltere ile antlaşma sultanlığı himâye statüsüne bağladı" }
  ]
},
{ id:"palembang-sultanligi", ad:"Palembang Sultanlığı", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1825-01-01", baskent:"Palembang", harita:"palembang-sultanligi",
  ozet:"Srivicaya mirası üzerinde kurulan, Musi ırmağının biber ve kalay ticaretini denetleyen Sumatra sultanlığı; Hollanda idaresine katılarak son buldu. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı. ⚠️ 10 Ağustos 2026 BULGU (değiştirilmedi, bilgi amaçlı): akademik araştırma, 'sultanlık' unvanının ve ilk Sultan Abdurrahman'ın tahta çıkışının da 1659'da (Hollanda'nın eski sarayı Kuto Gawang'ı yakmasının HEMEN ardından) ilan edildiğini gösteriyor — yani 1659 hem işgal hem sultanlığın ilanı olabilir, atlastaki f:1281 (pencere başlangıcı) ile gerçek kuruluş arasındaki fark sanıldığından küçük olabilir. 16. yy'daki öncül beylik (Ki Gede ing Suro) için akademik kalite kaynak bulunamadı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1642-01-01", tur:"antlasma", b:"Palembang ile VOC arasındaki biber ticareti sözleşmesi yenilenip VOC'a tekel tanındı — 17. yy ticarî zirvesinin başlangıç noktalarından biri (hakemli Endonezce dergi makalesi, orta güven)" },
    { t:"1659-01-01", tur:"isgal", b:"Hollanda Doğu Hindistan Şirketi eski sarayı (Kuto Gawang) yakıp ticaret tekelini dayattı; aynı yıl Susuhunan Abdurrahman sarayını taşıyıp ilk Sultan olarak sultanlığı ilan etti" },
    { t:"1825-01-01", tur:"son", b:"Hollanda sultanlığı kaldırıp bölgeyi doğrudan idareye bağladı" }
  ]
},
{ id:"banten-sultanligi", ad:"Banten Sultanlığı", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1527-06-22", t:"1813-01-01", baskent:"Banten", harita:"banten-sultanligi",
  ozet:"Batı Cava'da Sunda Kelapa'nın fethiyle kurulan, biber ticaretiyle zenginleşen ve Osmanlı'dan top ustası getirten sultanlık; Hollanda-İngiliz idaresinde kaldırıldı. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1527-06-22", tur:"kurulus", b:"Fetahillah Sunda Kelapa'yı alıp Cayakarta adını verdi, Banten kuruldu" },
    { t:"1651-01-01", tur:"hukumdar", b:"Sultan Ageng Tirtayasa döneminde Banten zirveye ulaştı" },
    { t:"1813-01-01", tur:"son", b:"İngiliz idaresi sultanlığı resmen kaldırdı" }
  ]
},
{ id:"banjar-sultanligi", ad:"Bancar (Banjar) Sultanlığı", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1526-01-01", t:"1860-06-11", baskent:"Bancarmasin", harita:"banjar-sultanligi",
  ozet:"Güney Borneo'da Demak desteğiyle kurulan, biber ve elmas ticaretiyle yaşayan sultanlık; Hollanda tarafından kaldırılınca Bancar Savaşı patlak verdi. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1526-01-01", tur:"kurulus", b:"Pangeran Samudera, Demak yardımıyla sultanlığı kurup İslâm'ı kabul etti" },
    { t:"1860-06-11", tur:"son", b:"Hollanda sultanlığı ilga etti; direniş Bancar Savaşı'na dönüştü" }
  ]
},
{ id:"gova-makassar", ad:"Gova (Makassar) Sultanlığı", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1667-11-18", baskent:"Makassar (Sombaopu)", harita:"gova-makassar",
  ozet:"Güney Sulavesi'de serbest liman siyasetiyle Hollanda tekeline karşı duran sultanlık; Bongaya Antlaşması'yla bağımsızlığını yitirdi. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1605-01-01", tur:"kurulus", b:"Gova hükümdarı İslâm'ı kabul etti, sultanlık müslüman devlet oldu" },
    { t:"1667-11-18", tur:"son", b:"Bongaya Antlaşması ile Hollanda'ya teslim olundu, liman tekele bağlandı" }
  ]
},
{ id:"ternate-sultanligi", ad:"Ternate Sultanlığı (Moluk)", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1663-01-01", baskent:"Ternate", harita:"ternate-sultanligi",
  ozet:"Karanfil ticaretini elinde tutan, Portekiz'i adadan kovmasıyla anılan Moluk sultanlığı; Hollanda tekeli altında tâbi hâle geldi. ⚠️ TDV'de `moluk-adalari` maddesi YOK (ölçüldü, ternate/molukka/maluku sluglarının hepsi de ölü); standart akademik kaynağa (Leonard Andaya, 'The World of Maluku', Univ. of Hawai'i Press 1993 + Britannica 'Ternate Island') göre yazıldı. ⚠️ KÜÇÜK TARİH FARKI (çözülmedi, bilgi amaçlı): Britannica Portekiz'in kovulmasını 1574 verirken künye 1575 kullanıyor; kaynaklar arasında gün/yıl değişkenliği var, mevcut tarih DEĞİŞTİRİLMEDİ.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak (Andaya 1993, Britannica)",
  kronoloji:[
    { t:"1486-01-01", tur:"hukumdar", b:"Zeynelâbidîn, babası Marhum'un İslâm'ı kabulünden sonra tahta çıkıp İslâm hukukunu uyguladı ve ilk kez 'Kolano' yerine 'Sultan' unvanını kullandı — resmen İslâm sultanlığına dönüşüm (standart akademik kaynak)" },
    { t:"1522-01-01", tur:"ittifak", b:"Portekizliler, Tidore'ye karşı destek karşılığında sultanın onayıyla São João Baptista Kalesi'ni inşa etti — kalıcı Portekiz varlığının başlangıcı (Britannica 'Ternate Island')" },
    { t:"1570-01-01", tur:"hukumdar", b:"Sultan Hayrun, bir barış görüşmesi sırasında Portekiz kale kumandanınca hançerlenerek öldürüldü; suikast, oğlu Babullah'ın önderliğinde Portekizlilere karşı savaşı başlattı (standart akademik kaynak, gün kaynaklar arası değişken)" },
    { t:"1575-01-01", tur:"toprak-kazanc", b:"Sultan Babullah Portekiz kalesini alıp adayı kurtardı" },
    { t:"1663-01-01", tur:"son", b:"Hollanda Doğu Hindistan Şirketi sultanlığı tâbi statüye indirdi" }
  ]
},
{ id:"tidore-sultanligi", ad:"Tidore Sultanlığı (Moluk)", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1923-10-29", baskent:"Tidore", harita:"tidore-sultanligi",
  ozet:"Ternate'nin 11 km ötesindeki rakip karanfil sultanlığı; İspanya'ya yaslanarak Hollanda'ya direndi, Nuku'nun isyanından sonra himâye altında 1923'ün ötesine geçti. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1521-01-01", tur:"ittifak", b:"Magellan seferinin kalan gemileri Tidore'ye uğradı, İspanya ile bağ kuruldu" },
    { t:"1797-01-01", tur:"isyan", b:"Prens Nuku'nun isyanı Hollanda hâkimiyetini bir süre kırdı" }
  ]
},
{ id:"banda-adalari", ad:"Banda Adaları (Orang Kaya Meclisleri)", tur:"devlet", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1621-03-08", baskent:"Banda Neira", harita:"banda-adalari",
  ozet:"Dünyanın tek muskat kaynağını elinde tutan, kralsız orang kaya meclisleriyle yönetilen ada topluluğu; Hollanda'nın 1621 kıyımıyla siyasî varlığı sona erdi. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1609-01-01", tur:"savas", b:"Hollanda kale kurma girişimi orang kaya direnişiyle karşılaştı" },
    { t:"1621-03-08", tur:"son", b:"Jan Pieterszoon Coen'in seferi ada halkını yok etti, meclisler dağıldı" }
  ]
},
{ id:"bali-kralliklari", ad:"Bali Krallıkları (Gelgel, Klungkung, Karangasem)", tur:"krallik", bolge:"guneydogu-asya",
  f:"1478-01-01", t:"1908-04-28", baskent:"Gelgel → Klungkung", harita:"bali-kralliklari",
  ozet:"Majapahit'in çöküşünden sonra Hindu geleneğini sürdüren Bali hânedanları; Hollanda seferlerine puputan denen toplu direnişle karşılık verdiler. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1686-01-01", tur:"bolunme", b:"Gelgel dağıldı, ada dokuz küçük krallığa bölündü" },
    { t:"1906-09-20", tur:"savas", b:"Badung puputanı: Hollanda seferine toplu direnişle karşılık verildi" },
    { t:"1908-04-28", tur:"son", b:"Klungkung puputanı ile son bağımsız Bali krallığı düştü" }
  ]
},
{ id:"pagaruyung", ad:"Pagaruyung (Minangkabau) Krallığı", tur:"krallik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1833-01-01", baskent:"Pagaruyung", harita:"pagaruyung",
  ozet:"Sumatra'nın iç yaylasında anaerkil Minangkabau geleneğini taşıyan krallık; 1685'te fiilî bağımsızlığını yitirdi, hânedan Padri Savaşı'nda son buldu. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1685-01-01", tur:"antlasma", b:"Hollanda ile yapılan antlaşma krallığın dış bağımsızlığını sona erdirdi" },
    { t:"1803-01-01", tur:"isyan", b:"Padri hareketi başladı, kraliyet ailesi ile çatışmaya girdi" },
    { t:"1833-01-01", tur:"son", b:"Padri Savaşı sonunda hânedan tükendi, bölge Hollanda idaresine geçti" }
  ]
},
{ id:"timor-beylikleri", ad:"Timor Beylikleri (Liurai'lar)", tur:"beylik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1769-10-10", baskent:"(çok merkezli liurai'lıklar)", harita:"timor-beylikleri",
  ozet:"Sandal ağacı ticaretiyle yaşayan, liurai denen yerli beylerin yönettiği Timor devletçikleri; Portekiz merkezinin Dili'ye taşınmasıyla sömürge düzenine bağlandılar. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak (Hans Hägerdal, 'Lords of the Land, Lords of the Sea', KITLV 2012)",
  kronoloji:[
    { t:"1641-05-01", tur:"isgal", b:"Portekizli-Dominiken kuvvetleri Wehali Krallığı'na sefer düzenledi, sarayı ateşe verdi; Batumean ve Servião beylikleri Portekiz safında savaştı (Hägerdal 2012, s.88-89; tarih daha önceki '1642' yerine kaynağa göre düzeltildi)" },
    { t:"1650-01-01", tur:"kurulus", b:"Lifau merkezli kalıcı Portekiz-Topasse (mestizo) yerleşimi gelişti; bölge 1769'a kadar Portekiz'in Timor'daki siyasi-ticari merkezi oldu (Hägerdal 2012, Bölüm 5)" },
    { t:"1749-11-09", tur:"toprak-kayip", b:"Penfui Savaşı'nda VOC (Hollanda), Topasse lideri Gaspar da Costa'nın ordusunu Kupang yakınında yendi; büyük Atoni krallıkları VOC'a bağlandı, Portekiz kuzeydeki dar bir şeride sıkıştı — modern Doğu-Batı Timor sınırının fiilî başlangıcı (Hägerdal 2012, s.365-369)" },
    { t:"1769-10-10", tur:"son", b:"Portekiz idaresi Dili'ye taşındı, beylikler sömürge düzenine bağlandı" }
  ]
},
{ id:"filipin-racaliklari", ad:"Filipin Racalıkları (Tondo, Maynila, Cebu, Butuan)", tur:"beylik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1571-06-24", baskent:"(çok merkezli barangay ve racalıklar)", harita:"filipin-racaliklari",
  ozet:"İspanyol fethinden önce takımadada ticaret yapan barangay ve racalıklar; Maynila'nın alınmasıyla İspanyol idaresine geçtiler (kaynak: TDV, madde: filipinler).",
  kaynak:"yetersiz — filipinler maddesi okundu, datu/barangay siyasi topluluklarından bahsediyor ama racalıkları ayrı bir konu olarak işlemiyor; dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1521-04-01", tur:"ittifak", b:"Maynila-Tondo bölgesinin genç Müslüman hükümdarı Ache (sonradan Rajah Matanda), Brunei Sultanı'nın bir prensesiyle evlenip Brunei hanedanıyla akrabalık kurdu; bu bağ Maynila'nın İslâmlaşmasının ve siyasi meşruiyetinin parçasıydı (Pigafetta'nın 1521 tanıklığı + Majul/Scott akademik kaynağı; gün bilinmiyor)" },
    { t:"1521-04-27", tur:"savas", b:"Mactan'da Lapulapu, Magellan'ın kuvvetlerini yendi" },
    { t:"1565-04-27", tur:"toprak-kazanc", b:"Miguel López de Legazpi, Cebu'ya çıkarıp Filipinler'deki ilk kalıcı İspanyol yerleşimini kurdu — Maynila'dan 6 yıl önceki ilk adım (standart akademik kaynak: Britannica)" },
    { t:"1571-06-24", tur:"son", b:"Legazpi Maynila'yı alıp İspanyol başkentini kurdu, racalıklar son buldu" }
  ]
},
{ id:"magindanao-sultanligi", ad:"Magindanao Sultanlığı", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1888-01-01", baskent:"Kotabato", harita:"magindanao-sultanligi",
  ozet:"Mindanao'da İspanyol yayılmasına üç yüzyıl direnen müslüman sultanlık; Moro savaşlarının ardından İspanyol hâkimiyetini kabul etti (kaynak: TDV, madde: morolar, filipinler).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1619-01-01", tur:"hukumdar", b:"Sultan Kudarat döneminde sultanlık Mindanao'nun büyük kısmına hâkim oldu" },
    { t:"1888-01-01", tur:"son", b:"Uzun Moro savaşlarının sonunda İspanyol hâkimiyeti kabul edildi" }
  ]
},

// ================================================================================
// EK: ASYA PARTİ 2 — 17. YÜZYIL (VERİ KİMLİK 3, 3 Ağustos)
// ================================================================================
// Sıra yine LİSTEDEN değil SAHNEDEN kuruldu (PARTİ 1'in dersi). On dört kesit
// ölçüldü; 1600 · 1650 · 1700'ün üçü birden yalnız BEŞ kimlik istiyor:
//   1600  adsız 2 (31 nokta)   azuchi-momoyama · nguyen-beyligi
//   1650  adsız 4 (19 nokta)   guney-ming · nguyen-beyligi · hosut · tungning
//   1700  adsız 2 ( 6 nokta)   nguyen-beyligi · hosut
// Beşi yazılınca 17. yüzyılın üç kesiti birden kapanır — kimlik başına en yüksek
// getirili parti bu.
// ⚠️ Beşi de TDV kapsamı dışı (Japonya · Çin · Vietnam · Budist Oyrat-Moğol);
//   standart akademik kaynağa göre. Tek istisna `hosut`: Oyrat/Kalmuk kolu
//   olduğu için TDV'nin `kalmuklar` (ve ona yönlendiren `oyratlar`) maddesi
//   canlıdır ve ÖLÇÜLDÜ — ama Kokonor Hanlığı'nı müstakil işlemiyor.
// ================================================================================

{ id:"azuchi-momoyama", ad:"Azuchi-Momoyama Dönemi (Oda-Toyotomi Japonyası)", tur:"devlet", bolge:"dogu-asya",
  f:"1568-01-01", t:"1615-06-04", baskent:"Azuchi → Osaka", harita:"azuchi-momoyama",
  ozet:"Oda Nobunaga ve Toyotomi Hideyoshi'nin Sengoku parçalanmışlığını bitirip Japonya'yı birleştirdiği dönem; Tokugawa şogunluğu 1603'te kurulsa da Toyotomi evi Osaka'da 1615'e kadar direndi (bkz. [[edo-bakufu]]). TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1568-01-01", tur:"kurulus", b:"Nobunaga Kyoto'ya girip Ashikaga Yoshiaki'yi şogun yaptı, birleştirme başladı" },
    { t:"1582-06-21", tur:"son", b:"Honnō-ji olayında Nobunaga öldürüldü, mirası Hideyoshi'ye geçti" },
    { t:"1590-01-01", tur:"birlesme", b:"Odawara kuşatmasıyla Hideyoshi ülkenin birleşmesini tamamladı" },
    { t:"1600-10-21", tur:"savas", b:"Sekigahara Savaşı'nda Tokugawa Ieyasu üstünlüğü ele geçirdi" },
    { t:"1615-06-04", tur:"son", b:"Osaka Kalesi düştü, Toyotomi evi tükendi; dönem kapandı" }
  ]
},
{ id:"guney-ming", ad:"Güney Ming (Hongguang, Longwu, Yongli Sarayları)", tur:"hanedanlik", bolge:"dogu-asya",
  f:"1644-04-25", t:"1662-01-01", baskent:"Nanking → Fuzhou → Kunming", harita:"guney-ming",
  ozet:"Pekin düştükten sonra Ming hânedanının güneyde birbirini izleyen saraylarla sürdürdüğü direniş; Qing ilerledikçe başkent güneybatıya kaydı ve son imparator Birmanya'ya sığındı. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1644-04-25", tur:"kurulus", b:"Pekin düşüp Chongzhen canına kıyınca Nanking'de Hongguang sarayı kuruldu" },
    { t:"1645-06-08", tur:"toprak-kayip", b:"Qing kuvvetleri Nanking'i aldı, direniş güneye çekildi" },
    { t:"1659-01-07", tur:"toprak-kayip", b:"Yongli imparatoru Yunnan'ı bırakıp Birmanya'ya sığındı" },
    { t:"1662-01-01", tur:"son", b:"Yongli teslim alınıp idam edildi, Ming direnişi anakarada bitti" }
  ]
},
{ id:"nguyen-beyligi", ad:"Nguyễn Beyleri (Đàng Trong)", tur:"beylik", bolge:"guneydogu-asya",
  f:"1558-01-01", t:"1802-06-01", baskent:"Phú Xuân (Huế)", harita:"nguyen-beyligi",
  ozet:"Lê tahtı adına güneyi yöneten, Trịnh'lerle ülkeyi Gianh ırmağından ikiye bölen bey ailesi; Tây Sơn'a yıkıldı, Nguyễn Ánh'ın geri dönüşüyle hânedana dönüştü (bkz. [[nguyen-hanedani]]). TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1558-01-01", tur:"kurulus", b:"Nguyễn Hoàng, Thuận Hóa valiliğine gidip güneyde kendi düzenini kurdu" },
    { t:"1627-01-01", tur:"savas", b:"Trịnh-Nguyễn savaşları başladı, ülke Gianh ırmağında fiilen ikiye bölündü" },
    { t:"1777-01-01", tur:"son", b:"Tây Sơn kardeşler bey ailesini ortadan kaldırdı" },
    { t:"1788-09-07", tur:"toprak-kazanc", b:"Nguyễn Ánh Saygon'u geri alıp güneyde yeniden tutundu" },
    { t:"1802-06-01", tur:"son", b:"Nguyễn Ánh, Gia Long adıyla imparator oldu; beylik hânedana dönüştü" }
  ]
},
{ id:"hosut", ad:"Hoşut (Kokonor) Hanlığı", tur:"hanlik", bolge:"dogu-asya",
  f:"1636-01-01", t:"1724-01-01", baskent:"Kokonor (Kuku Nor)", harita:"hosut",
  ozet:"Gûşi Han'ın Kokonor'a taşıdığı Oyrat kolu; Tibet'te Tsangpa'yı devirip iktidarı Dalai Lama hükûmetine verdi, Qing ilhakıyla son buldu (kaynak: TDV, madde: kalmuklar — Kokonor Hanlığı müstakil işlenmiyor).",
  kaynak:"kalmuklar",
  kronoloji:[
    { t:"1636-01-01", tur:"kurulus", b:"Gûşi Han, Hoşut kanadını Kokonor'a taşıyıp hanlığı kurdu" },
    { t:"1642-01-01", tur:"toprak-kazanc", b:"Tsangpa devrilip Tibet'in yönetimi V. Dalai Lama'ya verildi (bkz. [[tibet]])" },
    { t:"1717-01-01", tur:"toprak-kayip", b:"Cungarlar Lhasa'yı basıp hanlığın Tibet'teki nüfuzunu kırdı" },
    { t:"1724-01-01", tur:"son", b:"Lobzang Danjin isyanı bastırıldı, Qing Kokonor'u doğrudan idareye bağladı" }
  ]
},
{ id:"tungning", ad:"Tungning Krallığı (Zheng / Koxinga)", tur:"krallik", bolge:"dogu-asya",
  f:"1650-01-01", t:"1683-10-05", baskent:"Amoy (Xiamen) → Tainan", harita:"tungning",
  ozet:"Zheng Chenggong'un Ming adına kurduğu, Hollandalıları Formosa'dan çıkarıp Tayvan'ı üs yapan deniz devleti; Qing donanmasına yenilerek teslim oldu. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1650-01-01", tur:"kurulus", b:"Zheng Chenggong (Koxinga) Amoy'u üs edinip Ming direnişini denizde sürdürdü" },
    { t:"1661-04-30", tur:"savas", b:"Tayvan seferi başladı, Hollanda Formosası kuşatıldı" },
    { t:"1662-02-01", tur:"toprak-kazanc", b:"Hollandalılar Zeelandia Kalesi'ni teslim etti, ada krallığın merkezi oldu" },
    { t:"1683-10-05", tur:"son", b:"Penghu yenilgisinin ardından krallık Qing'e teslim oldu" }
  ]
},

// ================================================================================
// EK: THEODORO — Kırım'ın güneybatısındaki Rum prensliği (VERİ KİMLİK 3)
// ================================================================================
// Girdi koordinatörden: PETEK/NOKTA oturumu Mankup ve İnkirman'ı EKLEYEMEDİ,
// çünkü `renkler.py`de `teodoro` anahtarı yoktu ve renksiz dönem motor kuralınca
// BOŞLUK üretiyordu (data/yerlesimler_kirim.js:87). O oturumun `bizans` yazmayı
// reddetmesi DOĞRUYDU: Bizans 1453'te biter, Theodoro 1475'e kadar sürer —
// `bizans` yazmak CLAUDE.md §3.5'in Batnoz vakasını birebir tekrarlardı.
// ⚠️ TDV'de `mankup` maddesi YOK (arama 0 sonuç, ölçüldü); Theodoro/Gotya için
//   müstakil madde de yok. Kayıt CLAUDE.md §4'ün "TDV'nin kapsamadığı"
//   istisnasına giriyor ve standart akademik kaynağa yazıldı — bu, dosyadaki
//   17 kaydın zaten taşıdığı kalıptır. 1475 fethinin çerçevesi TDV `kefe` ve
//   `kirim` maddelerinden alındı.
// ================================================================================

{ id:"teodoro", ad:"Theodoro (Gotya) Prensliği", tur:"prenslik", bolge:"dogu-avrupa",
  f:"1349-01-01", t:"1475-12-01", baskent:"Mankup (Doros)", harita:"teodoro",
  ozet:"Kırım'ın güneybatı dağlarında Bizans mirasını sürdüren küçük Ortodoks prensliği; Ceneviz limanlarıyla kıyı için çekişti, Mankup kalesi aylarca direndikten sonra Gedik Ahmed Paşa'ya düştü. TDV'de ayrı madde yok; standart akademik kaynağa göre yazıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1349-01-01", tur:"kurulus", b:"Altın Orda'nın gerilemesiyle Doros/Mankup çevresinde ayrı bir prenslik belirdi (tarih yaklaşık)" },
    { t:"1425-01-01", tur:"hukumdar", b:"Aleksios döneminde Kalamita limanı yenilenip Ceneviz'in kıyı tekeline rakip oldu" },
    { t:"1475-06-06", tur:"toprak-kayip", b:"Gedik Ahmed Paşa Ceneviz sahilini aldı, prenslik denizden koptu (bkz. [[ceneviz]], [[kirim]])" },
    { t:"1475-12-01", tur:"son", b:"Mankup uzun kuşatmanın ardından düştü; Kırım'daki son Rum devleti sona erdi (GÜN kaynakla saptanamadı)" }
  ]
},

// ================================================================================
// EK: DON KAZAK ORDASI (VERİ KİMLİK 3, 3 Ağustos — koordinatörün ①. kalemi)
// ================================================================================
// PETEK/NOKTA Karadeniz-Hazar bozkırında 13 hücreyi `kirim` boyalı buldu ve bir
// kısmının Kırım OLMADIĞINI ölçtü. Ayrım coğrafî: Dinyeper/Harkov → `zaporojye`
// (kimlik zaten vardı), Rostov/aşağı Don → BU KAYIT.
// ⚠️ RENGİ HENÜZ YOK — `arac/renkler.py`ye RENK oturumu yazacak. Koordinatör
//   kararı: palet bugün üç partide baştan değiştiği için hex'i RENK ölçecek.
//   `harita:` alanı buna rağmen ŞİMDİ yazıldı; gerekçe oturumlar/
//   OLCUM-GOVDESIZ-KIMLIK.md: bugün 52 kayıt rengi geldiği hâlde köprüsü
//   yazılmadığı için anakronizm denetiminin DIŞINDA. Köprüyü sonraya bırakmak
//   o borcun 53.'sünü açmak olurdu. Renk gelince kayıt eksiksiz çalışır.
// Kaynak: TDV `azak` (1559 · 1637 · 1641 · 1642 · 1696 · 1711 — hepsi sayfadan).
// ⚠️ TDV bu olaylarda yalnız "Kazaklar" diyor, Don/Zaporog ayırmıyor; 1637-1642
//   Azak vakasının Don Ordası'na atfı LİTERATÜRÜN ayrımıdır, TDV'nin değil.
// Ayrıntı, üç modelleme seçeneği ve zaman zinciri: oturumlar/KIMLIK-DON-KAZAK.md
// ================================================================================

{ id:"don-kazak", ad:"Don Kazak Ordası", tur:"devlet", bolge:"sibirya-bozkir",
  f:"1570-01-01", t:"1721-01-01", baskent:"Razdory → Çerkassk", harita:"don-kazak",
  tabi:[{f:"1671-01-01", t:"1721-01-01", ust:"rusya"}],
  ozet:"Don aşağısında seçilmiş atamanlarca yönetilen kazak ordası; Azak'ı 1637'de alıp beş yıl tuttu, Razin ayaklanmasından sonra çara biat etti ve I. Petro döneminde Rus askerî yapısına bağlandı (kaynak: TDV, madde: azak).",
  kaynak:"azak",
  kronoloji:[
    { t:"1570-01-01", tur:"kurulus", b:"IV. İvan'ın fermanıyla Don kazakları ordu olarak tanındı" },
    { t:"1637-01-01", tur:"toprak-kazanc", b:"Kazaklar Azak Kalesi'ni ele geçirdi" },
    { t:"1641-09-01", tur:"savas", b:"Deli Hüseyin Paşa'nın üç aylık kuşatması sonuç vermeden kaldırıldı" },
    { t:"1642-01-01", tur:"toprak-kayip", b:"Yeni Osmanlı seferi üzerine kazaklar kaleyi yakıp çekildi" },
    { t:"1671-01-01", tur:"antlasma", b:"Razin ayaklanmasının bastırılmasından sonra orda çara biat etti" },
    { t:"1721-01-01", tur:"son", b:"I. Petro ordayı Askerî Kollegium'a bağladı, siyasî varlığı sona erdi" }
  ]
}
,
{ id:"cin-cumhuriyeti", ad:"Çin Cumhuriyeti", tur:"cumhuriyet", bolge:"dogu-asya",
  f:"1911-10-10", t:"1923-10-29", baskent:"Nanking → Pekin", harita:"cin-cumhuriyeti",
  ozet:"Wuchang ayaklanmasıyla Qing hanedanı devrildi ve Çin Cumhuriyeti kuruldu; atlasın ufkunda (1923) ülke merkezî otoritesi zayıf, savaş ağalarının bölüştüğü bir dönemdedir. TDV kapsamı dışında (Doğu Asya), standart akademik kaynağa göre yazıldı. ⚠️ `cin` slug'ı TDV'de CİNLER maddesidir, Çin ülkesi değil.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1911-10-10", tur:"kurulus", b:"Wuchang ayaklanması: Qing hanedanına karşı devrim başladı" },
    { t:"1912-02-12", tur:"siyaset", b:"Son imparator Puyi tahttan çekildi, Qing hanedanı sona erdi" },
    { t:"1912-11-01", tur:"toprak", b:"Dış Moğolistan ve Tibet fiilî bağımsızlıklarını ilân etti" },
    { t:"1916-06-06", tur:"siyaset", b:"Yuan Shikai'nin ölümü: savaş ağaları dönemi başladı" }
  ]
},
{ id:"mogolistan", ad:"Moğolistan (Bogd Hanlık)", tur:"hanlik", bolge:"dogu-asya",
  f:"1911-12-29", t:"1923-10-29", baskent:"Urga (Ulan Batur)", harita:"mogolistan",
  ozet:"Qing'in çöküşüyle Dış Moğolistan Bogd Han önderliğinde muhtariyetini ilân etti; 1919-1921 arasında Çin işgali ve iç savaşın ardından 1921'de bağımsızlığını kazandı. TDV kapsamı dışında (Doğu Asya), standart akademik kaynağa göre yazıldı. ⚠️ TDV'nin `mogolistan` maddesi Çağatay sonrası MOĞULİSTAN'ı anlatır, modern Moğolistan'ı değil.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1911-12-29", tur:"kurulus", b:"Bogd Han tahta çıktı: Dış Moğolistan muhtariyetini ilân etti" },
    { t:"1919-11-22", tur:"kayip", b:"Çin kuvvetleri Urga'ya girdi, muhtariyet kaldırıldı" },
    { t:"1921-07-11", tur:"kurulus", b:"Halk hükümeti kuruldu: Moğolistan bağımsızlığını ilân etti" }
  ]
},
{ id:"afgan-durrani", ad:"Dürrânî (Afgan) Devleti", tur:"devlet", bolge:"orta-asya",
  f:"1747-10-01", t:"1823-01-01", baskent:"Kandehar → Kâbil", harita:"afgan-durrani",
  ozet:"Nâdir Şah'ın öldürülmesinden sonra Ahmed Şah Dürrânî Kandehar'da hükümdar ilân edildi; Horasan'dan Pencap'a uzanan devlet modern Afganistan'ın çekirdeğidir. Hânedan içi taht kavgalarıyla parçalandı ve yerini Bârekzâyîler aldı.",
  kaynak:"ahmed-sah-durrani",
  kronoloji:[
    { t:"1747-10-01", tur:"kurulus", b:"Ahmed Şah Dürrânî Kandehar'da hükümdar ilân edildi" },
    { t:"1761-01-14", tur:"savas", b:"Pânîpat: Merathalar'a karşı kazanılan zafer" },
    { t:"1773-01-01", tur:"hukumdar", b:"Ahmed Şah'ın ölümü, Timur Şah tahta çıktı" }
  ]
},
{ id:"afganistan", ad:"Afganistan (Bârekzâyî Emirliği)", tur:"emirlik", bolge:"orta-asya",
  f:"1823-01-01", t:"1923-10-29", baskent:"Kâbil", harita:"afganistan",
  ozet:"Dürrânî Devleti'nin dağılmasından sonra Bârekzâyî hânedanı Kâbil'de emirliği kurdu; yüzyıl boyunca İngiltere ile Rusya arasında tampon devlet oldu ve 1919'da tam bağımsızlığını kazandı.",
  kaynak:"afganistan",
  kronoloji:[
    { t:"1823-01-01", tur:"kurulus", b:"Bârekzâyî hânedanı Kâbil'de emirliği kurdu" },
    { t:"1839-08-07", tur:"kayip", b:"Birinci İngiliz-Afgan Savaşı: İngilizler Kâbil'i aldı" },
    { t:"1880-07-22", tur:"siyaset", b:"Abdurrahman Han emir oldu, ülke İngiliz himayesine girdi" },
    { t:"1919-08-08", tur:"antlasma", b:"Ravalpindi Antlaşması: Afganistan tam bağımsızlığını kazandı" }
  ]
}
,
{ id:"sibir-hanligi", ad:"Sibir Hanlığı", tur:"hanlik", bolge:"orta-asya",
  f:"1430-01-01", t:"1598-08-20", baskent:"Çimgi-Tura → Sibir (İsker)", harita:"sibir-hanligi",
  ozet:"Altın Orda'nın dağılmasından sonra Tura, Tobul ve İşim nehirleri arasında kurulan Şeybânî hanlığı; başşehrin Sibir (İsker) şehrine taşınmasıyla bu adı aldı. Tayboğa ve Şeybânî hânedanları arasındaki çekişme 1563'te Küçüm Han'ın tahtı ele geçirmesiyle sonuçlandı. Stroganovlar'ın 1581'de gönderdiği Yermak önderliğindeki Kazak birliği hanlığın sonunu getiren süreci başlattı; Rusya'nın Sibirya'ya açılan kapısı burasıydı. ⚠️ VERİ DEVLET (7 Ağustos 2026) BİRLEŞTİRDİ: aynı devleti temsil eden mükerrer kayıt `sibir` (f:1420-01-01, t:1598-01-01, harita:'siz, renk YOK, veride 0 kullanım) kaldırıldı — bu kayıt zaten `harita:`/`kaynak:` ile bağlıydı ve TDV'nin verdiği \"1593-1604\" tamamlanma aralığıyla tutarlı, o yüzden bu kayıt tutuldu.",
  kaynak:"sibir-hanligi",
  kronoloji:[
    { t:"1430-01-01", tur:"kurulus", b:"Şeybânî Hacı Muhammed'in oğlu Mahmutek döneminde hanlık şekillendi" },
    { t:"1563-01-01", tur:"hukumdar", b:"Şeybânî Küçüm Han Tayboğa soyunu yenip tahtı ele geçirdi" },
    { t:"1581-01-01", tur:"savas", b:"Stroganovlar'ın gönderdiği Yermak'ın Kazak birliği Küçüm Han üzerine yürüdü" },
    { t:"1598-08-20", tur:"son", b:"Küçüm Han'ın son yenilgisi — hanlık sona erdi, Batı Sibirya Rusya'ya geçti" }
  ]
},
{ id:"izlanda", ad:"İzlanda", tur:"ulke", bolge:"kuzey-avrupa",
  f:"1918-12-01", t:"1923-10-29", baskent:"Reykjavík", harita:"izlanda",
  ozet:"1262'den beri Norveç, 1537'den itibaren Danimarka idaresinde kalan ada, 1 Aralık 1918'de Danimarka kralıyla şahsî birlik altında egemen bir krallık oldu. Atlasın ufkunda (1923) bu statüdedir; tam bağımsızlık 1944'tedir. ⚠️ TDV'de müstakil madde YOK (`izlanda` slug'ı 302 döndürüyor); CLAUDE.md §4 gereği Avrupa iç tarihi için standart akademik referansa dayanıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1262-01-01", tur:"vassal", b:"İzlanda'nın önde gelen şefleri Eski Antlaşma (Gamli sáttmáli) ile Norveç Kralı IV. Haakon'a bağlılık yemini etti; katılım süreci hukuken 1281'de Jónsbók'la tamamlandı (Sverrir Jakobsson, Scandinavian Journal of History 46:5, 2021 — hakemli)" },
    { t:"1537-01-01", tur:"toprak", b:"Reformla birlikte ada Danimarka'nın doğrudan idaresine girdi" },
    { t:"1602-04-20", tur:"antlasma", b:"Danimarka Kralı IV. Christian, İzlanda'nın dış ticaretini Danimarkalı tüccarlara tahsis eden fermanla tekel kurdu; ada 1787'ye kadar izole bir tekel rejiminde kaldı (Gísli Gunnarsson, 'Monopoly Trade and Economic Stagnation', Lund 1983; gün düşük güvenle)" },
    { t:"1918-12-01", tur:"kurulus", b:"İzlanda Krallığı: Danimarka ile şahsî birlik, egemen devlet statüsü" }
  ]
},

// ================================================================================
// VERİ DEVLET (7 Ağustos 2026) — RENK 2'nin `renk_fark.py` zincir() 4. dalının
// bulduğu "künye hiç yok" kümesi (denetim/kunye-bekleyen-40.txt), büyükten
// küçüğe yazıldı. Hepsi `yerlesimler_asya.js`de zaten boyanıyordu, dizin
// karşılığı yoktu. ⚠️ Kaynak dosyadaki "veride görünen aralık" YERLEŞİM
// verisinden ölçülmüştü, künyeden değil — her kalemde KAYNAKTAN doğrulanan
// gerçek tarih kullanıldı, gözlemlenen pencereyle küçük farklar olabilir.
// 🔴 Ö1 HAZIRLIĞI: her kayıtta künyenin HANEDAN ÖMRÜ mü yoksa ÜLKE-
// SÜREKLİLİĞİ kimliği mi olduğu ozet'te açıkça not düşüldü.
// `ainu` YAZILMADI — Hokkaido'daki Ainu halkı biçimsel bir "devlet"
// kurmadı (Matsumae ticaret tekeli bir hanedan/devlet değil, bir Japon
// klanının dışarıdan kurduğu ticaret ilişkisi); BULUNAMADI, uydurulmadı.
// ================================================================================

{ id:"bengal-sultanligi", ad:"Bengal Sultanlığı", tur:"sultanlik", bolge:"guney-asya",
  f:"1340-01-01", t:"1576-01-01", baskent:"Pandua → Gaur",
  ozet:"Delhi Sultanlığı'ndan ayrılarak bağımsızlaşan, üç asır süren müstakil Müslüman sultanlık; Ekber Şah'ın fethiyle Babür İmparatorluğu'na katıldı (bkz. [[bengal-nevabligi]] — ardılı, hanedan değil ÖZERKLİK dönemi). HANEDAN ÖMRÜ kimliğidir (bağımsız sultanlık dönemiyle sınırlı, ülke sürekliliği değil). (kaynak: TDV, madde: bengal — \"Bengal'in Bâbürlü İmparatorluğu'na dahil olması 1576'da Ekber Şah zamanında\")",
  kaynak:"bengal",
  kronoloji:[
    { t:"1340-01-01", tur:"kurulus", b:"Delhi Sultanlığı'ndan ayrılarak bağımsız Bengal Sultanlığı kuruldu" },
    { t:"1494-01-01", tur:"hukumdar", b:"Alâeddin Hüseyin Şah, soylularca sultan seçilip Hüseyin Şahi hânedanını kurdu; onun ve oğlu Nusret Şah'ın dönemi Bengal'in 'altın çağı' sayılır, Kâmrup-Kâmta ilhak edildi (TDV'de yok — Banglapedia 'Husain Shah')" },
    { t:"1538-04-06", tur:"toprak-kayip", b:"Afgan komutan Şir Şah Sûrî, Gaur'u ele geçirdi; son Hüseyin Şahi hükümdarı Gıyâseddin Mahmud Şah yenilip kısa süre sonra öldü, hânedan sona erdi (TDV'de yok — Banglapedia 'Ghiyasuddin Mahmud Shah')" },
    { t:"1576-01-01", tur:"son", b:"Ekber Şah'ın fethiyle Bengal, Babür İmparatorluğu'na katıldı" }
  ]
},
{ id:"kenmu", ad:"Kenmu Restorasyonu (Japonya)", tur:"devlet", bolge:"dogu-asya",
  f:"1333-07-04", t:"1336-11-07", baskent:"Kyoto",
  ozet:"İmparator Go-Daigo'nun Kamakura Şogunluğu'nu devirip doğrudan imparatorluk yönetimini kısa süreliğine geri getirdiği dönem; Ashikaga Takauji'nin isyanıyla sona erdi, Muromachi Şogunluğu'na yol açtı. KISA ÖMÜRLÜ GEÇİŞ DÖNEMİ kimliğidir, ülke sürekliliği değil. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"japonya",
  kronoloji:[
    { t:"1333-07-04", tur:"kurulus", b:"Kamakura Şogunluğu devrildi, İmparator Go-Daigo doğrudan yönetimi geri aldı" },
    { t:"1334-01-01", tur:"hukumdar", b:"Go-Daigo, toprak yeniden dağıtımı ve idari merkezîleşme reformları uyguladı; reformlar tahtı geri kazandıran samuray sınıfı yerine saray soylularını kayırıp derin hoşnutsuzluk yarattı (Cambridge History of Japan c.3; gün yok)" },
    { t:"1335-11-01", tur:"isyan", b:"Ashikaga Takauji, Nakasendai isyanını bastırdıktan sonra Kyoto'ya dönmeyip kendi adına ödül dağıtmaya başladı; Go-Daigo bunu isyan sayıp Kasım 1335'te ona karşı ordu gönderdi (Britannica 'Ashikaga Takauji'/'Nitta Yoshisada'; gün yok)" },
    { t:"1336-07-04", tur:"savas", b:"Minatogawa Muharebesi'nde Takauji, Nitta Yoshisada'yı yenip Kusunoki Masashige'yi öldürdü ve Kyoto'yu ele geçirdi (Cambridge History of Japan temelli literatür; takvim dönüşümü nedeniyle bazı kaynaklar 25 Mayıs 1336 da verir)" },
    { t:"1336-11-07", tur:"son", b:"Ashikaga Takauji Kenmu Kanunnâmesi'ni ilan etti, Muromachi Şogunluğu'nu kurdu" }
  ]
},
{ id:"fransiz-cinhindi", ad:"Fransız Çinhindi (Indochine française)", tur:"gecici-isgal", bolge:"guneydogu-asya",
  f:"1859-02-17", t:"1923-10-29", baskent:"Saygon → Hanoi",
  ozet:"Fransa'nın Vietnam-Kamboçya-Laos'u tek sömürge idaresinde birleştirdiği yapı; Saygon'un düşüşüyle başladı (1923 sonrasında da sürdü, 1954'e dek). ÜLKE/COĞRAFYA SÜREKLİLİĞİ kimliğidir — hanedan değil, sömürge idaresinin coğrafi kapsamını temsil eder. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1859-02-17", tur:"isgal", b:"Fransız donanması Saygon'u ele geçirdi" },
    { t:"1863-08-11", tur:"vassal", b:"Kral Norodom, Fransa ile antlaşma imzalayıp Kamboçya'yı Fransız himayesine soktu; rakip Siyam'a karşı Fransız korumasını tercih etti (bkz. [[kamboc-kralligi]]) (standart akademik kaynak)" },
    { t:"1884-06-06", tur:"antlasma", b:"Fransa-Annam (Patenôtre) Hué Antlaşması, 1883 Harmand Antlaşması'nı yumuşatarak Annam ve Tonkin üzerinde Fransız himayesini kalıcı biçimde tesis etti (standart akademik kaynak)" },
    { t:"1887-10-17", tur:"kurulus", b:"Fransız Çinhindi Birliği resmen kuruldu (Vietnam + Kamboçya, sonra Laos)" },
    { t:"1893-10-03", tur:"toprak-kazanc", b:"Fransız donanma baskısıyla Siyam, Mekong'un doğusundaki toprakları bıraktı; Laos, Fransız Çinhindi'ne katılan beşinci bölge oldu (standart akademik kaynak)" }
  ]
},
{ id:"haydarabad-nizam", ad:"Haydarabad Nizamlığı (Âsafcâh Hanedanı)", tur:"devlet", bolge:"guney-asya",
  f:"1724-10-11", t:"1923-10-29", baskent:"Haydarabad",
  ozet:"Nizâmülmülk Âsafcâh'ın Babür'ün Dekken valiliğinden fiilen bağımsızlaşmasıyla kurulan, Hindistan'ın en büyük prens devleti; 1766'dan itibaren İngiliz himayesine girdi (1923 sonrasında da sürdü, gerçek sonu 13 Eylül 1948 Hindistan işgali). ÜLKE SÜREKLİLİĞİ kimliğidir — Âsafcâh hanedanı atlas ufkunun ötesine (1948) taşıyor, künye ufukta kesiliyor. (kaynak: TDV, madde: haydarabad-nizamligi — \"Bağımsızlığını 11 Ekim 1724'te ilan etmiştir\")",
  kaynak:"haydarabad-nizamligi",
  kronoloji:[
    { t:"1724-10-11", tur:"kurulus", b:"Nizâmülmülk Âsafcâh bağımsızlığını ilan etti" },
    { t:"1731-01-01", tur:"vassal", b:"Nizamülmülk, Marathalar'la antlaşma imzalayıp bölgedeki varlıklarını ve Haydarâbâd dışında vergi toplama haklarını tanımak zorunda kaldı (TDV haydarabad-nizamligi maddesi)" },
    { t:"1766-01-01", tur:"antlasma", b:"İngiliz Doğu Hindistan Şirketi ile himaye antlaşması imzalandı; 1768'de bu antlaşma Karnataka nevvâbını da kapsayacak biçimde yenilendi (TDV haydarabad-nizamligi maddesi)" },
    { t:"1799-01-01", tur:"savas", b:"İngiltere'nin 1798'de verdiği askerî destekle Nizam Ali, Tîpû Sultan'a karşı yeniden savaşa girdi; Tîpû öldürülüp ordusu dağıtıldı (TDV haydarabad-nizamligi maddesi)" },
    { t:"1802-01-01", tur:"antlasma", b:"İngilizlerle yeni bir antlaşma imzalanıp ticarî imtiyazlar tanındı, askerî bağımlılık pekişti (TDV haydarabad-nizamligi maddesi)" }
  ]
},
{ id:"bengal-nevabligi", ad:"Bengal Nevablığı", tur:"devlet", bolge:"guney-asya",
  f:"1717-01-01", t:"1757-06-23", baskent:"Murshidabad",
  ozet:"Murşid Kulı Han'ın Babür'den fiilen özerkleşmesiyle doğan, Bengal-Bihar-Orissa'yı yöneten valilik; Plassey Savaşı'nda İngiliz Doğu Hindistan Şirketi'ne yenilip fiilî egemenliğini yitirdi (nominal nevablar 1772'ye dek sürdü). HANEDAN/ÖZERKLİK DÖNEMİ kimliğidir, `bengal-sultanligi`nin ardılı ama ayrı bir kimlik. ⚠️ TDV `bengal` maddesi yalnız 1757 Plassey'i (\"Sirâceddevle'nin İngilizlere yenilmesi\") birebir veriyor; 1717 özerkleşme tarihi TDV'de yok, standart akademik kaynağa göredir.",
  kaynak:"bengal",
  kronoloji:[
    { t:"1717-01-01", tur:"kurulus", b:"Murşid Kulı Han, Babür'den fiilen özerk valiliğini kurdu" },
    { t:"1756-04-01", tur:"hukumdar", b:"Sirâceddevle, dedesi Alîverdi Han'ın yerine 23 yaşında nevab oldu; deneyimsiz yönetimi İngiliz Doğu Hindistan Şirketi ile gerilime yol açtı (TDV'de yok — World History Encyclopedia 'Battle of Plassey')" },
    { t:"1757-06-23", tur:"son", b:"Plassey Savaşı'nda İngilizlere yenilip fiilî egemenlik sona erdi" },
    { t:"1757-06-29", tur:"vassal", b:"Yenilginin ardından Robert Clive, Murşidâbâd'a girip İngilizlerin desteklediği Mir Cafer'i nevab ilan etti; Bengal fiilen Şirket vesayetine girdi (TDV'de yok, standart akademik kaynak)" }
  ]
},
{ id:"san-fan", ad:"Üç Vasal İsyanı (San Fan)", tur:"isyan", bolge:"dogu-asya",
  f:"1673-12-28", t:"1681-12-07", baskent:"Changsha (Wu Sangui'nin merkezi)",
  ozet:"Wu Sangui önderliğindeki üç eski Ming generalinin (güneybatı Çin'de Qing'e vasal) ayaklanması; sekiz yıllık savaştan sonra Qing tarafından bastırıldı. İSYAN/GEÇİCİ İSYAN DEVLETİ kimliğidir, kalıcı bir ülke sürekliliği değil. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — arandı, yok (canonik \"uc-feodal-beylik-isyani\" boş, \"cin--ulke\" genel maddesi Qing kuruluş döneminden bahsediyor ama San Fan/Wu Sangui isimlerini içermiyor); dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1673-12-28", tur:"isyan", b:"Wu Sangui, Qing'e karşı ayaklanmasını ilan etti" },
    { t:"1678-03-01", tur:"isyan", b:"Wu Sangui, Hengzhou'da kendini 'Büyük Zhou' (Wu Zhou) hanedanının imparatoru ilan edip kendi sarayını kurdu (Britannica 'Wu Sangui' + Berkshire Encyclopedia of China; gün yok)" },
    { t:"1678-10-02", tur:"hukumdar", b:"Wu Sangui Hengzhou'da hastalıktan öldü; imparatorluk unvanı torunu Wu Shifan'a geçti, isyanın liderliği zayıfladı (Britannica 'Wu Sangui')" },
    { t:"1681-12-07", tur:"son", b:"Qing orduları son direnişi kırdı, isyan tamamen bastırıldı" }
  ]
},
{ id:"dashun", ad:"Dashun (Li Zicheng)", tur:"isyan", bolge:"dogu-asya",
  f:"1644-01-01", t:"1647-01-01", baskent:"Xi'an → Pekin (kısa süreli)",
  ozet:"Köylü isyancısı Li Zicheng'in Ming'i devirip kurduğu, Pekin'i kısa süreliğine ele geçiren ama Qing-Wu Sangui ittifakına yenilen kısa ömürlü hanedan. İSYAN/KISA ÖMÜRLÜ DEVLET kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — arandı, yok (canonik \"li-zicheng-dashun\" boş, \"cin--ulke\" genel maddesi 1644 Ming yıkılışını anıyor ama Li Zicheng/Dashun'u içermiyor); dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1644-01-01", tur:"kurulus", b:"Li Zicheng, Xi'an'da Dashun hanedanını ilan etti" },
    { t:"1644-04-25", tur:"toprak-kazanc", b:"Pekin'i ele geçirdi, Ming hanedanı sona erdi" },
    { t:"1645-01-01", tur:"savas", b:"Wu Sangui-Qing ittifakına yenilip Pekin'i terk etti" },
    { t:"1647-01-01", tur:"son", b:"Li Zicheng öldü, hareket dağıldı" }
  ]
},
{ id:"yadava", ad:"Yadava Hanedanı (Devagiri)", tur:"hanedanlik", bolge:"guney-asya",
  f:"1187-01-01", t:"1318-01-01", baskent:"Devagiri",
  ozet:"Deccan'da hüküm süren Hindu hanedanı; Alâeddin Halacî'nin 1296 seferiyle Delhi'ye haraca bağlandı, 1318'de son direniş de bastırılarak doğrudan ilhak edildi. HANEDAN ÖMRÜ kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1210-01-01", tur:"hukumdar", b:"Singhana II, Hoysala fethini kutlayıp ikinci kez taç giydi; krallığı Narmada'dan Tungabhadra'ya genişletip Hoysala/Kakatiya/Paramara/Chalukya hükümdarlarına üstünlüğünü kabul ettirdi, hanedanın zirvesiydi (Kandagal yazıtları, Altekar 'The Early History of the Deccan'; gün yok)" },
    { t:"1296-01-01", tur:"toprak-kayip", b:"Alâeddin Halacî'nin seferiyle Delhi Sultanlığı'na haraca bağlandı" },
    { t:"1308-01-01", tur:"vassal", b:"Alâeddin Halacî'nin Malik Kâfûr komutasında gönderdiği ordu Devagiri'yi kuşattı; Ramachandra teslim olup Delhi'ye götürüldü, sonra Delhi'nin vasalı olarak geri gönderildi (Peter Jackson 1999, K.S. Lal 1950)" },
    { t:"1313-01-01", tur:"toprak-kayip", b:"Ramachandra'nın halefi Simhana III (Şankaradeva) Delhi'ye karşı ayaklanınca Malik Kâfûr ikinci kez gönderildi; Simhana III yenilip öldürüldü, Devagiri fiilen Delhi'nin doğrudan kontrolüne girdi (Peter Jackson 1999, K.S. Lal 1950)" },
    { t:"1318-01-01", tur:"son", b:"Son direniş bastırıldı, Devagiri Delhi'ye doğrudan ilhak edildi" }
  ]
},
{ id:"avad", ad:"Avad Nevablığı (Oudh)", tur:"devlet", bolge:"guney-asya",
  f:"1722-01-01", t:"1856-02-07", baskent:"Faizabad → Lucknow",
  ozet:"Sâdet Han'ın Babür'den özerkleşmesiyle kurulan, Şii nevabların yönettiği Kuzey Hindistan devleti; İngiliz Doğu Hindistan Şirketi'nin doğrudan ilhakıyla sona erdi (1857 Sepoy İsyanı'nın en güçlü merkezlerinden biri oldu). HANEDAN/ÜLKE SÜREKLİLİĞİ karışık kimliktir — nevablık kalıcı bir bölgesel özerklik kimliğiydi. ⚠️ BULUNAMADI (TDV'de): `avad` maddesi doğrudan yok, yalnız başka maddelerde geçiyor (`ahmed-i-rumi`, `cirag-i-dehli`); tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1722-01-01", tur:"kurulus", b:"Sâdet Han, Babür'den fiilen özerk nevablığını kurdu" },
    { t:"1764-10-23", tur:"savas", b:"Nevab Şücâüddevle, eski Bengal Nevabı Mir Kâsım ve Babür İmparatoru II. Şah Âlem ile kurduğu ittifakla Buxar'da İngilizlere karşı savaştı ve ağır yenildi; Avad'ın Şirket üstünlüğünü kabulünün başlangıcı oldu (TDV'de yok, World History Encyclopedia 'Battle of Buxar')" },
    { t:"1765-08-16", tur:"antlasma", b:"Allahabad Antlaşması ile Şücâüddevle tahtına iade edildi ama Şirket'e bağımlı müttefik konumuna düştü, tazminat ödeyip Allahabad-Kara topraklarını bıraktı (TDV'de yok, standart akademik kaynak — tekil hakemli makaleyle doğrulanamadı, birden fazla ikincil kaynakta tutarlı)" },
    { t:"1856-02-07", tur:"son", b:"İngiliz Doğu Hindistan Şirketi Avad'ı doğrudan ilhak etti" }
  ]
},
{ id:"cavnpur-sultanligi", ad:"Cavnpur (Jaunpur) Sultanlığı — Şarkî Hanedanı", tur:"sultanlik", bolge:"guney-asya",
  f:"1394-01-01", t:"1483-01-01", baskent:"Jaunpur",
  ozet:"Delhi Sultanlığı'nın zayıflamasıyla bağımsızlaşan, Kuzey Hindistan'ın önemli bir kültür merkezi ('Şîraz-ı Hind') olan Şarkî sultanlığı; Lodi hanedanınca ilhak edildi (1495'te Sultan İskender-i Lûdî, kalan Şarkî eserlerini de yıktırdı). HANEDAN ÖMRÜ kimliğidir. ⚠️ 10 Ağustos 2026: `kaynak:` alanı DÜZELTİLDİ — eskiden 'bulunamadı' diyordu ama `ozet:`teki alıntı zaten TDV'ye işaret ediyordu (çelişkiliydi); `jaunpur` CANLI (şehir/mimari maddesi) ve daha da zengin bir ikinci madde `sarki-sultanligi` (hanedanın siyasî tarihi, gün gün) bulundu, ikisi de kullanıldı.",
  kaynak:"jaunpur + sarki-sultanligi (TDV, ikincisi asıl siyasî kaynak)",
  kronoloji:[
    { t:"1394-01-01", tur:"kurulus", b:"Şarkî hanedanı Delhi'den bağımsızlaşıp Jaunpur Sultanlığı'nı kurdu" },
    { t:"1399-11-01", tur:"hukumdar", b:"Kurucu Melik Server (Hâce-i Cihân) öldü, yerine azatlı kölesi Mübârek Şah Karanfil geçti (Rebîülevvel 802, TDV sarki-sultanligi maddesi)" },
    { t:"1452-01-01", tur:"savas", b:"Sultan Mahmûd Şah, Narela Savaşı'nda Delhi hâkimi kayınbiraderi Behlûl-i Lûdî'ye yenildi (856 AH, TDV sarki-sultanligi maddesi)" },
    { t:"1478-01-01", tur:"savas", b:"Hüseyin Şah Şarkî, Delhi'yi almak için Yamuna'ya kadar ilerledi ama Behlûl-i Lûdî onu yenilgiye uğrattı (TDV sarki-sultanligi maddesi)" },
    { t:"1481-01-01", tur:"toprak-kayip", b:"Hüseyin Şah, Sirsa Savaşı'nı kaybedip topraklarının önemli kısmını Lûdîler'e bıraktı; ertesi yıl Behlûl başkent Jaunpûr'u da ele geçirdi (886 AH, TDV sarki-sultanligi maddesi)" },
    { t:"1483-01-01", tur:"son", b:"Lodi hanedanı Jaunpur'u ilhak etti" }
  ]
},
{ id:"hanthawaddy", ad:"Hanthawaddy Krallığı (Mon, Peygu)", tur:"krallik", bolge:"guneydogu-asya",
  f:"1287-01-01", t:"1757-05-06", baskent:"Martaban → Peygu (Bago)",
  ozet:"Pagan'ın Moğol istilasıyla çöküşü sonrası Mon halkının kurduğu, uzun süre Alt Burma'yı yöneten krallık; Alaungpaya'nın Konbaung seferiyle ortadan kaldırıldı. HANEDAN/ÜLKE karışık kimliktir — dört buçuk asır süren bölgesel süreklilik. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir. 🔴 10 Ağustos 2026 YAPISAL ÇELİŞKİ (KOORDİNATÖRE BİLDİRİLDİ, KÜNYE BÖLÜNMEDİ): İki bağımsız Britannica maddesi ('The unification of Myanmar', 'Pegu') açıkça gösteriyor ki bu KESİNTİSİZ 470 yıllık bir krallık DEĞİL — orijinal Hanthawaddy 1539'da Toungoo'ya yenilip son buldu; Peygu 1539-1740 arası (~200 yıl) Toungoo/Ava'ya bağlı bir BAŞKENTTİ, bağımsız krallık değildi. Bağımsızlık ancak 1740 Mon isyanıyla kısa süreliğine (1740-1757) geri geldi. Gerçekte İKİ ayrı dönem var: (a) 1287-1539 orijinal Hanthawaddy (252 yıl) (b) 1740-1757 restore edilmiş Hanthawaddy (17 yıl); aradaki 1539-1740 boşluğu bu kimliğe ait DEĞİL. Künyenin kendi notu zaten 'karışık kimlik' diyor — bilinçli bir basitleştirme olabilir, ama künyenin BÖLÜNÜP bölünmeyeceğine (iki ayrı künye: 'hanthawaddy' ve 'hanthawaddy-restorasyon') karar koordinatörün/veri sahibinin işi, ben değiştirmedim.",
  kaynak:"myanmar + standart akademik kaynak (Britannica 'The unification of Myanmar' — Maung Htin Aung; 'Pegu')",
  kronoloji:[
    { t:"1287-01-01", tur:"kurulus", b:"Pagan'ın çöküşü üzerine Mon halkı Martaban merkezli krallığını kurdu" },
    { t:"1472-01-01", tur:"hukumdar", b:"Dhammazedi tahta çıktı (1472-92); Peygu bu dönemde Güneydoğu Asya'nın önemli bir Theravada Budist ilim/ticaret merkezi olup krallığın altın çağını yaşadı (Britannica, Maung Htin Aung)" },
    { t:"1539-01-01", tur:"isgal", b:"Toungoo Hanedanı (Tabinshwehti) Mon Krallığı'nı ilhak etti; Peygu 1599'a (ve 1613-1634 arası tekrar) birleşik Toungoo krallığının başkenti oldu — bkz. yukarıdaki YAPISAL ÇELİŞKİ notu (Britannica 'Pegu')" },
    { t:"1740-01-01", tur:"isyan", b:"Ava/Toungoo yönetimine karşı Mon isyanı Peygu'yu yeniden bağımsız, kısa ömürlü bir krallığın başkenti yaptı; bu 'restore edilmiş' Hanthawaddy 1757'de Alaungpaya'ca ortadan kaldırıldı (Britannica 'Pegu'/'The unification of Myanmar')" },
    { t:"1757-05-06", tur:"son", b:"Alaungpaya'nın Konbaung ordusu Peygu'yu alıp krallığa son verdi" }
  ]
},
{ id:"kakatiya", ad:"Kakatiya Hanedanı (Warangal)", tur:"hanedanlik", bolge:"guney-asya",
  f:"1163-01-01", t:"1323-01-01", baskent:"Warangal",
  ozet:"Doğu Deccan'da (Telangana) hüküm süren Hindu hanedanı; Delhi Sultanı Gıyâseddin Tuğluk'un oğlu Ulug Han'ın seferiyle son bulup doğrudan Delhi'ye bağlandı. HANEDAN ÖMRÜ kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1163-01-01", tur:"kurulus", b:"Kakatiya hanedanı Warangal'da bağımsızlığını kurdu" },
    { t:"1263-01-01", tur:"hukumdar", b:"Kraliçe Rudrama Devi, babası Ganapati'nin ardından tek hükümdar olarak tahta çıktı — nadir kadın hükümdarlardan biri; Yadava/Gajapati istilalarını püskürtüp kaybedilen toprakları geri aldı (Cynthia Talbot, 'Precolonial India in Practice', Oxford UP)" },
    { t:"1310-01-01", tur:"vassal", b:"Delhi'nin komutanı Melik Kâfûr, Warangal'ı kuşattı; Kral Prataparudra teslim olup 100 fil ve 7000 at dahil servet verdi, yıllık haraç kabul etti — 1323'teki kesin çöküşten önceki tâbilik aşaması (Peter Jackson, 'The Delhi Sultanate', Cambridge UP; çağdaş kaynak Baranî)" },
    { t:"1323-01-01", tur:"son", b:"Delhi Sultanlığı'nın seferiyle son hükümdar Prataparudra esir alındı" }
  ]
},
{ id:"pagan", ad:"Pagan Krallığı (Burma) — Son Dönem", tur:"krallik", bolge:"guneydogu-asya",
  f:"849-01-01", t:"1297-01-01", baskent:"Pagan (Bagan)",
  ozet:"Burma'yı ilk kez birleştiren, anıtsal tapınaklarıyla tanınan krallık; Moğol istilasıyla (1287) fiilen çöktü, Myinsaing kardeşlerin iktidarı devralmasıyla hanedan sona erdi. HANEDAN ÖMRÜ kimliğidir — çöküş süreci 1287-1297 arasında kademeli oldu. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"myanmar",
  kronoloji:[
    { t:"1057-01-01", tur:"toprak-kazanc", b:"Kral Anavrahta, Mon başkenti Thaton'u fethetti; ele geçirdiği Pali Tripitaka metinleri sayesinde Theravada Budizmi devlet dini oldu, İrravadi deltası ilk kez Birmanya egemenliğine girdi (standart akademik kaynak: Britannica 'Anawrahta')" },
    { t:"1277-04-01", tur:"savas", b:"Narathihapate'nin Yunnan'a saldırmasıyla başlayan Ngasaunggyan Savaşı'nda büyük Pagan ordusu Kubilay Han'a bağlı Moğol atlı okçularına yenildi; bu, 1287'deki çöküşe giden ilk büyük savaştı (standart akademik kaynak: Britannica 'Battle of Ngasaunggyan')" },
    { t:"1287-01-01", tur:"isgal", b:"Moğol istilası krallığı fiilen çökertti" },
    { t:"1297-01-01", tur:"son", b:"Myinsaing kardeşler iktidarı ele geçirdi, Pagan hanedanı sona erdi" }
  ]
},
{ id:"pandya", ad:"Pandya Hanedanı (İkinci İmparatorluk)", tur:"hanedanlik", bolge:"guney-asya",
  f:"1190-01-01", t:"1323-01-01", baskent:"Madurai",
  ozet:"Güney Hindistan'da (Tamil Nadu) hüküm süren, İbn Battûta'nın da ziyaret ettiği eski Hindu hanedanı; Delhi Sultanlığı'nın Malik Kâfûr seferi (1311) ile zayıflayıp 1323'te Madurai Sultanlığı'na (bkz. [[madurai-sultanligi]]) yerini bıraktı. HANEDAN ÖMRÜ kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir. ⚠️ 10 Ağustos 2026 NOT (çözülmedi, bilgi amaçlı): akademik kaynak (Peter Jackson, Nilakanta Sastri) 1311 seferinin büyük ganimet topladığını ama Kakatiya'daki gibi DÜZENLİ/RESMÎ bir haraç ilişkisi kurduğuna dair net kanıt olmadığını, Pandya kralının aslında tâbi kılınamadığını gösteriyor — mevcut 'toprak-kayip' etiketi tam örtüşmeyebilir, değiştirilmedi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1258-01-01", tur:"toprak-kazanc", b:"Jatavarman Sundara Pandyan I, eski Chola ülkesini fethedip Chola kralını haraca bağladı, Hoysala etkisini geriletti — İkinci Pandya İmparatorluğu'nun zirvesi (K.A. Nilakanta Sastri, 'The Pandyan Kingdom')" },
    { t:"1292-01-01", tur:"hukumdar", b:"Marco Polo, Çin dönüşünde Pandya ülkesine ('Maabar') uğrayıp sarayın zenginliğini ve inci ticaretini tasvir etti (Yule-Cordier çevirisi, 'The Book of Ser Marco Polo'; Nilakanta Sastri ile doğrulandı)" },
    { t:"1308-01-01", tur:"bolunme", b:"Maravarman Kulasekara Pandyan I'in ölümüyle oğulları Vira Pandya ve Sundara Pandya arasında taht kavgası başladı; bu bölünme Alâeddin Halacî'nin 1311 seferinin bahanesi oldu (Peter Jackson, 'The Delhi Sultanate'; Nilakanta Sastri)" },
    { t:"1311-01-01", tur:"toprak-kayip", b:"Malik Kâfûr'un seferiyle Delhi'ye haraca bağlandı" },
    { t:"1323-01-01", tur:"son", b:"Delhi valiliğine dönüştürülüp yerini Madurai Sultanlığı aldı" }
  ]
},
{ id:"tay-son", ad:"Tay Sơn Hanedanı", tur:"hanedanlik", bolge:"guneydogu-asya",
  f:"1778-01-01", t:"1802-06-20", baskent:"Phú Xuân (Huế)",
  ozet:"Tay Sơn kardeşlerin köylü isyanından doğan, Vietnam'ı kısa süreliğine yeniden birleştiren hanedan; Nguyễn Ánh'ın (Gia Long) zaferiyle sona erdi, Nguyễn hanedanına yerini bıraktı. HANEDAN ÖMRÜ kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1773-01-01", tur:"isyan", b:"Tay Sơn kardeşlerin isyanı başladı" },
    { t:"1778-01-01", tur:"kurulus", b:"Nguyễn Huệ (İmparator Quang Trung) hanedanı resmen ilan etti" },
    { t:"1802-06-20", tur:"son", b:"Nguyễn Ánh (Gia Long) son Tay Sơn direnişini kırıp Vietnam'ı birleştirdi" }
  ]
},
{ id:"taiping", ad:"Taiping Cennetsel Krallığı", tur:"isyan", bolge:"dogu-asya",
  f:"1851-01-11", t:"1864-07-19", baskent:"Nanjing (Tianjing)",
  ozet:"Hong Xiuquan önderliğindeki dinî-siyasî isyan hareketinin kurduğu, Qing'e karşı on üç yıl süren en kanlı iç savaşlardan birini yürüten \"krallık\"; Nanjing'in düşüşüyle tamamen bastırıldı. İSYAN/GEÇİCİ DEVLET kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1851-01-11", tur:"isyan", b:"Jintian Ayaklanması ile Taiping hareketi resmen başladı" },
    { t:"1853-03-19", tur:"toprak-kazanc", b:"Nanjing ele geçirilip \"Tianjing\" adıyla başkent yapıldı" },
    { t:"1864-07-19", tur:"son", b:"Qing orduları Nanjing'i geri aldı, hareket çöktü" }
  ]
},
{ id:"madurai-sultanligi", ad:"Madurai Sultanlığı (Ma'bar)", tur:"sultanlik", bolge:"guney-asya",
  f:"1335-01-01", t:"1378-01-01", baskent:"Madurai",
  ozet:"Delhi Sultanlığı'ndan ayrılan en güneydeki bağımsız Müslüman sultanlık; Vijayanagara İmparatorluğu'nun fethiyle ortadan kaldırıldı. HANEDAN ÖMRÜ kimliğidir, kısa (43 yıl) ama Delhi'nin en uzak eyaleti. TDV'de doğrudan maddesi yok (`delhi-sultanligi` maddesinde geçiyor); tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1335-01-01", tur:"kurulus", b:"Celâleddin Ahsan Han, Delhi'den bağımsızlığını ilan etti" },
    { t:"1340-01-01", tur:"hukumdar", b:"Kurucu Sultan Ahsan Şah bir savaşta öldürüldü; damadı Kutbüddin kırk gün hüküm sürüp o da öldürüldü, yerine Ahsan Şah'ın diğer damadı Gıyâseddin Demgânî geçti (S.K. Aiyangar, 'South India and Her Muhammadan Invaders', Oxford UP 1921)" },
    { t:"1342-01-01", tur:"hukumdar", b:"Çin'e giden İbn Battûta, kayınbiraderi Sultan Gıyâseddin Demgânî'nin Arcot yakınındaki ordugâhında ağırlanıp onun sert yöntemlerine bizzat tanık oldu (Aiyangar 1921, İbn Battûta seyahatnamesine dayanarak)" },
    { t:"1343-01-01", tur:"hukumdar", b:"Gıyâseddin Demgânî, oğlunu ve ailesini kolera salgınında kaybettikten iki hafta sonra öldü; yerine yeğeni Nâsırüddin geçti (Aiyangar 1921)" },
    { t:"1378-01-01", tur:"son", b:"Vijayanagara İmparatorluğu sultanlığı fethetti" }
  ]
},
{ id:"singhasari", ad:"Singhasari Krallığı (Cava)", tur:"krallik", bolge:"guneydogu-asya",
  f:"1222-01-01", t:"1292-01-01", baskent:"Singhasari",
  ozet:"Doğu Cava'da hüküm süren, Kubilay Han'a meydan okuyup Moğol seferini davet eden Hindu-Budist krallık; Kediri'nin isyanıyla yıkıldı, mirasını Majapahit devraldı. HANEDAN ÖMRÜ kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"endonezya",
  kronoloji:[
    { t:"1222-01-01", tur:"kurulus", b:"Ken Arok, Singhasari Krallığı'nı kurdu" },
    { t:"1275-01-01", tur:"toprak-kazanc", b:"Kral Kertanagara, takımadaları tek egemenlik altında birleştirme vizyonuyla Sumatra'daki Melayu Krallığı'na Pamalayu Seferi'ni başlattı (standart akademik kaynak: Britannica 'Indonesia — Kertanagara, Empire, Java')" },
    { t:"1289-01-01", tur:"savas", b:"Kertanagara, Kubilay Han'ın haraç/rehine talebiyle gelen elçisi Meng Qi'nin yüzünü dağlatıp Moğol egemenliğini reddetti; bu hakaret 1293'teki büyük Moğol donanma seferinin gerekçesi oldu (standart akademik kaynak: Britannica 'Indonesia — The Majapahit era')" },
    { t:"1292-01-01", tur:"son", b:"Jayakatwang'ın (Kediri) isyanıyla son kral Kertanagara öldürüldü" }
  ]
},
{ id:"ho-hanedani", ad:"Hồ Hanedanı (Vietnam)", tur:"hanedanlik", bolge:"guneydogu-asya",
  f:"1400-03-01", t:"1407-06-17", baskent:"Tây Đô (Thanh Hóa)",
  ozet:"Hồ Quý Ly'nin Trần hanedanını devirip kurduğu, çok kısa ömürlü hanedan; Ming Çin'inin istilasıyla sona erdi. HANEDAN ÖMRÜ kimliğidir — yedi yıllık en kısa ömürlü Vietnam hanedanlarından. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1400-03-01", tur:"kurulus", b:"Hồ Quý Ly, Trần hanedanını devirip tahta çıktı" },
    { t:"1401-01-01", tur:"hukumdar", b:"Hồ Quý Ly, tahtı kısa süre sonra oğlu Hồ Hán Thương'a devredip Vietnam geleneğine uyarak 'Thái Thượng Hoàng' (üst imparator) unvanıyla perde arkasında fiilî iktidarı elinde tuttu (Whitmore 1985, Taylor 2013; gün yok)" },
    { t:"1406-01-01", tur:"isgal", b:"Ming sarayı, devrilen Trần hanedanının restorasyonunu bahane ederek müdahale kararı aldı ve bir Trần vârisi iddiasındaki kişiyi askerî refakatle geri gönderdi (Whitmore 1985, Taylor 2013; gün yok, 'ilkbahar 1406')" },
    { t:"1406-01-01", tur:"savas", b:"Hồ kuvvetleri, Ming'in gönderdiği sözde Trần vârisini ve refakatindeki birliği pusuya düşürüp yok etti; bu olay Ming'in tam ölçekli istila kararını tetikledi (Whitmore 1985; gün yok)" },
    { t:"1407-06-17", tur:"son", b:"Ming ordusu Hồ Quý Ly'yi esir aldı, hanedan sona erdi" }
  ]
},
{ id:"karnatik", ad:"Karnatik Nevablığı (Arcot)", tur:"devlet", bolge:"guney-asya",
  f:"1690-01-01", t:"1801-07-31", baskent:"Arcot",
  ozet:"Haydarabad Nizamlığı'ndan (bkz. [[haydarabad-nizam]]) ayrılan, İngiliz-Fransız Karnatik Savaşları'nın (Yedi Yıl Savaşları'nın Hindistan cephesi) sahnesi olan nevablık; İngiliz Doğu Hindistan Şirketi'nce doğrudan ilhak edildi. HANEDAN/ÜLKE karışık kimliktir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1690-01-01", tur:"kurulus", b:"Zülfikar Han, Haydarabad'dan ayrı Karnatik valiliğini fiilen özerkleştirdi" },
    { t:"1751-08-31", tur:"savas", b:"Fransız destekli Chanda Sahib, İngiliz destekli Muhammed Ali'yi Trichinopoly'de kuşatınca Robert Clive Arcot'u ele geçirip 53 günlük kuşatmaya karşı savundu — Karnatik Savaşları'nın dönüm noktası (Britannica, 'Robert Clive')" },
    { t:"1761-01-01", tur:"vassal", b:"Fransızlar Wandiwash'ta (1760) yenilip Pondicherry İngilizlerce alınınca (1761), İngilizler Karnatik'i nevabı (Muhammed Ali Han Vallajah) aracılığıyla yönetti; nevab giderek Şirket'e borçlanıp 1801'deki doğrudan ilhaka giden süreç başladı (Britannica, 'Carnatic Wars')" },
    { t:"1801-07-31", tur:"son", b:"İngiliz Doğu Hindistan Şirketi nevablığı doğrudan ilhak etti" }
  ]
},
{ id:"tonburi", ad:"Thonburi Krallığı (Siyam)", tur:"krallik", bolge:"guneydogu-asya",
  f:"1767-12-28", t:"1782-04-06", baskent:"Thonburi",
  ozet:"Ayutthaya'nın Birmanya'ya düşüşünden (1767) sonra General Taksin'in Siyam'ı yeniden birleştirdiği kısa ömürlü krallık; bir saray darbesiyle Taksin devrilip idam edildi, Chakri hanedanı (bugünkü Tayland hanedanı) kuruldu. HANEDAN ÖMRÜ kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"tayland",
  kronoloji:[
    { t:"1767-12-28", tur:"kurulus", b:"General Taksin kendini kral ilan etti, Thonburi'yi başkent yaptı" },
    { t:"1770-08-19", tur:"toprak-kazanc", b:"Taksin, Phitsanulok'u ele geçirip Sawangburi'yi düşürerek Ayutthaya'nın çöküşünden sonra beşe bölünmüş Siyam topraklarını yeniden birleştirme kampanyasını tamamladı (standart akademik kaynak: Britannica 'Taksin')" },
    { t:"1781-01-01", tur:"isyan", b:"Taksin'in kendini bir 'sotapanna' (nirvanaya ermiş kişi) ilan edip keşişlerden ibadet istemesi dinî bir buhran doğurdu; 1782'deki ayaklanma ve tahttan indirilişinin zeminini hazırladı (standart akademik kaynak: Britannica 'Taksin')" },
    { t:"1782-04-06", tur:"son", b:"Chao Phraya Chakri'nin darbesiyle Taksin devrilip idam edildi" }
  ]
},
{ id:"tran-hanedani", ad:"Trần Hanedanı (Vietnam)", tur:"hanedanlik", bolge:"guneydogu-asya",
  f:"1225-01-01", t:"1400-03-01", baskent:"Thăng Long (Hanoi)",
  ozet:"Lý hanedanının yerini alan, üç Moğol istilasını (1258, 1285, 1288) püskürten güçlü Vietnam hanedanı; Hồ Quý Ly'nin (bkz. [[ho-hanedani]]) tahtı gaspetmesiyle sona erdi. HANEDAN ÖMRÜ kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1225-01-01", tur:"kurulus", b:"Trần Cảnh, Lý hanedanının yerini aldı" },
    { t:"1288-04-09", tur:"savas", b:"Bạch Đằng'da üçüncü Moğol istilası kesin olarak püskürtüldü" },
    { t:"1400-03-01", tur:"son", b:"Hồ Quý Ly tahtı gaspetti, Trần hanedanı sona erdi" }
  ]
},
{ id:"cammu-kesmir", ad:"Cammû-Keşmir (Dogra Hanedanı)", tur:"devlet", bolge:"guney-asya",
  f:"1846-03-16", t:"1923-10-29", baskent:"Srinagar (yaz) / Jammu (kış)",
  ozet:"Gulâb Singh'in Amritsar Antlaşması ile İngilizlerden satın aldığı, Müslüman çoğunluklu ama Hindu Dogra hanedanınca yönetilen prens devleti; 1947 bölünmesinde tartışmalı ilhakla Hindistan-Pakistan çatışmasının merkezi oldu (1923 sonrasında da sürdü). ÜLKE SÜREKLİLİĞİ kimliğidir — Dogra hanedanı atlas ufkunun ötesine taşıyor. (kaynak: TDV, madde: kesmir — \"7,5 milyon rupi karşılığında... hâkimiyetini tamamen ele geçirdi (1846)\") 🔴 10 Ağustos 2026: zenginleştirme ARANDI VE BULUNAMADI. TDV `kesmir` maddesi 1846'dan sonra doğrudan 1891/1921 nüfus sayımlarına atlıyor; Ranbir Singh'in tahta çıkışı, Gulâb Singh'in ölümü, 1857 Sepoy İsyanı, Ladakh/Baltistan fetihleri TDV'de HİÇ geçmiyor. `gulab-singh`/`ranbir-singh`/`sihler` slugları ÖLÜ; `pencap` canlı ama bu ayrıntıları içermiyor. TANECİKLİK boşluğu — uydurulmadı.",
  kaynak:"kesmir",
  kronoloji:[
    { t:"1846-03-16", tur:"kurulus", b:"Amritsar Antlaşması ile Gulâb Singh bölgeyi İngilizlerden satın aldı" }
  ]
},
{ id:"hoysala", ad:"Hoysala Hanedanı", tur:"hanedanlik", bolge:"guney-asya",
  f:"1026-01-01", t:"1343-01-01", baskent:"Belur → Halebidu",
  ozet:"Güney Deccan'da (bugünkü Karnataka) hüküm süren, tapınak mimarisiyle tanınan Hindu hanedanı; son hükümdar III. Ballala'nın Madurai Sultanlığı'nca öldürülmesiyle sona erdi, toprakları kısa süre sonra doğan Vijayanagara'ya (bkz. [[vijayanagara]]) katıldı. HANEDAN ÖMRÜ kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1117-01-01", tur:"hukumdar", b:"Kral Vishnuvardhana, Cholalar'a karşı Talakad zaferini anmak için Belur'da Chennakeshava Tapınağı'nın inşasını başlattı; hanedanın mimari-siyasi zirvesinin başlangıcı (Britannica 'Visnuvardhana'; Nilakanta Sastri, 'A History of South India')" },
    { t:"1311-01-01", tur:"toprak-kayip", b:"Malik Kâfûr'un seferiyle Delhi'ye haraca bağlandı" },
    { t:"1327-01-01", tur:"savas", b:"Muhammed bin Tuğluk'un ikinci seferinde Halebidu yeniden yağmalandı; III. Ballala tâbiliği reddedip Tiruvannamalai'ye çekilerek direnişini sürdürdü (Britannica 'Ballala III'; Nilakanta Sastri)" },
    { t:"1343-01-01", tur:"son", b:"III. Ballala, Madurai Sultanlığı güçlerince öldürüldü, hanedan sona erdi" }
  ]
},
{ id:"laos-kralliklari", ad:"Laos Krallıkları (Luang Prabang, Vientiane, Champasak)", tur:"krallik", bolge:"guneydogu-asya",
  f:"1707-01-01", t:"1893-10-03", baskent:"Luang Prabang / Vientiane / Champasak (üç ayrı merkez)",
  ozet:"Lan Xang Krallığı'nın veraset çekişmesiyle üçe bölünmesiyle doğan, birbiriyle rekabet eden ve zamanla Siyam'a haraca bağlanan üç Lao krallığı; Fransız-Siyam Antlaşması ile Fransız Çinhindi'ne (bkz. [[fransiz-cinhindi]]) katıldı. HANEDAN/ÜLKE karışık kimliktir, üç ayrı hanedan TEK kayıtta. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1707-01-01", tur:"bolunme", b:"Lan Xang, Luang Prabang ve Vientiane krallıklarına bölündü" },
    { t:"1713-01-01", tur:"bolunme", b:"Champasak üçüncü ayrı krallık olarak ortaya çıktı" },
    { t:"1893-10-03", tur:"son", b:"Fransız-Siyam Antlaşması ile bölge Fransız himayesine girdi" }
  ]
},
{ id:"seylan-sinhala", ad:"Seylan Sinhala Krallıkları (Portekiz Öncesi)", tur:"krallik", bolge:"guney-asya",
  f:"1281-01-01", t:"1518-01-01", baskent:"Dambadeniya → Gampola → Kotte (ardışık merkezler)",
  ozet:"Polonnaruwa'nın çöküşünden Portekiz'in gelişine kadar birbirini izleyen Sinhala krallıkları (Dambadeniya, Gampola, Kotte); Portekizlilerin Kolombo'ya yerleşmesiyle dış nüfuza açıldı. HANEDAN/ÜLKE karışık, BİRDEN FAZLA ardışık krallığı TEK kayıtta temsil eden bir kolektif kimliktir — `irlanda`/`somali` emsali gibi. ⚠️ 1281 tarihi bir hanedanın kuruluşu değil atlasın pencere başlangıcıdır. ⚠️ BULUNAMADI (TDV'de): `seylan` maddesi yalnız `sri-lanka`ya yönlendiriyor, dönem ayrıntısı yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"sri-lanka",
  kronoloji:[
    { t:"1518-01-01", tur:"toprak-kayip", b:"Portekizliler Kolombo'da kale kurup Kotte Krallığı'nı nüfuzu altına aldı" }
  ]
},
{ id:"sukhothai", ad:"Sukhothai Krallığı (Siyam)", tur:"krallik", bolge:"guneydogu-asya",
  f:"1238-01-01", t:"1438-01-01", baskent:"Sukhothai",
  ozet:"Khmer İmparatorluğu'ndan bağımsızlaşan, Tay yazısının ve Theravada Budizmi'nin yayıldığı ilk Tay krallığı; giderek güçlenen Ayutthaya'ya bağımlı hale gelip sonunda doğrudan ilhak edildi. HANEDAN ÖMRÜ kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"tayland",
  kronoloji:[
    { t:"1238-01-01", tur:"kurulus", b:"Sri Indraditya, Khmer'den bağımsızlığını ilan etti" },
    { t:"1283-01-01", tur:"hukumdar", b:"Kral Ramkhamhaeng döneminde Tay alfabesi icat edildi; olay ünlü Ram Khamhaeng Taş Yazıtı'na kaydedildi (yazıtın özgünlüğü akademik çevrede tartışılmıştır, elektron mikroskobu incelemeleri kısmen özgün olduğunu güçlendirmiştir; kaynak: Vickery'nin özgünlük tartışmasını ele alan akademik makalesi)" },
    { t:"1378-01-01", tur:"vassal", b:"Ayutthaya kralı Borommarachathirat I'in Sukhothai isyanını bastırıp kuzey merkezlerini boyunduruğa alması sonunda Sukhothai, Ayutthaya'nın vassalı hâline geldi (standart akademik kaynak: David K. Wyatt, 'Thailand: A Short History')" },
    { t:"1438-01-01", tur:"son", b:"Ayutthaya Krallığı Sukhothai'yi doğrudan ilhak etti" }
  ]
},
{ id:"bahavelpur", ad:"Bahavelpur Emirliği (Dâvudpotralar)", tur:"devlet", bolge:"guney-asya",
  f:"1748-01-01", t:"1923-10-29", baskent:"Bahawalpur",
  ozet:"Bahâvel Han'ın Sutlej kıyısında kurduğu, Abbasi hilafetine soy iddia eden Dâvudpotra hanedanının emirliği; 1802'de Afgan şahından sikke basma hakkı alarak egemen devlet statüsü kazandı, 1838'de İngiliz himayesine girdi (1923 sonrasında da sürdü, 1955'te idari birleşmeyle sona erdi). ÜLKE SÜREKLİLİĞİ kimliğidir — hanedan atlas ufkunun ötesine taşıyor. (kaynak: TDV, madde: bahavelpur — \"1748'de Emir Muhammed Bahâvel tarafından... kuruldu\")",
  kaynak:"bahavelpur",
  kronoloji:[
    { t:"1748-01-01", tur:"kurulus", b:"Bahâvel Han, Sutlej kıyısında emirliğini kurdu" },
    { t:"1802-01-01", tur:"hukumdar", b:"Afgan Şahı Mahmud'dan sikke basma izni alarak egemen statü kazandı" }
  ]
},
{ id:"bharatpur-cat", ad:"Bharatpur Krallığı (Jat)", tur:"krallik", bolge:"guney-asya",
  f:"1733-01-01", t:"1923-10-29", baskent:"Bharatpur",
  ozet:"Bedan Singh'in kurduğu, Jat kabile konfederasyonundan doğan Hindu krallığı; Babür ve sonra İngiliz baskısına rağmen prens devleti olarak varlığını sürdürdü (1923 sonrasında da sürdü, 1947'ye dek). ÜLKE SÜREKLİLİĞİ kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1733-01-01", tur:"kurulus", b:"Bedan Singh, Bharatpur Krallığı'nı kurdu" },
    { t:"1826-01-18", tur:"savas", b:"İngilizlerin kuşatmasıyla fiilî bağımsızlığını kaybedip prens devletine dönüştü" }
  ]
},
{ id:"bhopal", ad:"Bopal (Bhopal) Devleti", tur:"devlet", bolge:"guney-asya",
  f:"1708-01-01", t:"1923-10-29", baskent:"Bhopal",
  ozet:"Dost Muhammed Han'ın Babür hizmetinden ayrılıp kurduğu, dört kadın hükümdarıyla (Begüm) tanınan Müslüman prens devleti; İngiliz himayesinde varlığını sürdürdü (1923 sonrasında da sürdü, TDV'ye göre 1952'ye dek). ÜLKE SÜREKLİLİĞİ kimliğidir. (kaynak: TDV, madde: bopal--devlet — \"Dost Muhammed Han... nevvâblığını ve istiklâlini ilân etmiştir\")",
  kaynak:"bopal--devlet",
  kronoloji:[
    { t:"1708-01-01", tur:"kurulus", b:"Dost Muhammed Han, Berâsiye bölgesinin idaresini alıp nevablığını ilan etti" }
  ]
},
{ id:"cunagadh", ad:"Cunagadh (Junagadh) Nevablığı", tur:"devlet", bolge:"guney-asya",
  f:"1748-01-01", t:"1923-10-29", baskent:"Junagadh",
  ozet:"Babür valiliğinden ayrılan Babi hanedanının Gucerat'taki Müslüman nevablığı; İngiliz himayesinde 1947'ye dek sürdü, o yıl Pakistan'a katılma kararı Hindistan'ın işgaliyle geçersiz kılındı (1923 sonrasında da sürdü). ÜLKE SÜREKLİLİĞİ kimliğidir. ⚠️ BULUNAMADI (TDV'de): `cunagadh`/`junagadh` aramasında \"madde başlıklarında sonuç bulunamadı\" — tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1748-01-01", tur:"kurulus", b:"Babi hanedanı Babür valiliğinden fiilen bağımsızlaştı" }
  ]
},
{ id:"kocin", ad:"Kochi (Cochin) Krallığı — Portekiz Öncesi", tur:"krallik", bolge:"guney-asya",
  f:"1102-01-01", t:"1503-01-01", baskent:"Kochi",
  ozet:"Malabar kıyısında baharat ticaretiyle zenginleşen, Kalikat (Zamorin) ile rekabet eden Hindu krallığı; Portekizlilerle 1503'te ittifak/himaye anlaşması imzalayarak ilk Avrupa vasalı Hint devleti oldu (krallık kendisi 1949'a dek sürdü, bu künye yalnız Avrupa-öncesi bağımsız dönemi kapsıyor). HANEDAN/ÜLKE karışık kimliktir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1503-01-01", tur:"antlasma", b:"Portekiz ile himaye/ittifak anlaşması imzalandı, Avrupa vasallığı başladı" }
  ]
},
{ id:"multan-langah", ad:"Multan Langah Sultanlığı", tur:"sultanlik", bolge:"guney-asya",
  f:"1451-01-01", t:"1527-01-01", baskent:"Multan",
  ozet:"Belûcî Lengâh kabilesinden Rai Sahra'nın kurduğu, seksen yıl süren bağımsız sultanlık; Sind hâkimi Hüseyin Şah Argun tarafından ortadan kaldırıldı, sonra Babür eyaleti oldu. HANEDAN ÖMRÜ kimliğidir. (kaynak: TDV, madde: multan — \"muhtemelen 855'te (1451)... Rai Sahra... hâkim oldu\", son \"Rebîülâhir 933 / Ocak 1527\")",
  kaynak:"multan",
  kronoloji:[
    { t:"1451-01-01", tur:"kurulus", b:"Rai Sahra, Belûcî Lengâh kabilesinden Multan'a hâkim oldu (muhtemelen tarih, TDV)" },
    { t:"1527-01-01", tur:"son", b:"Sind hâkimi Hüseyin Şah Argun sultanlığa son verdi" }
  ]
},
{ id:"pingnan", ad:"Pingnan Devleti (Panthay, Du Wenxiu)", tur:"devlet", bolge:"dogu-asya",
  f:"1855-01-01", t:"1873-01-15", baskent:"Dali",
  ozet:"Yunnan'daki Hui Müslümanlarının Du Wenxiu (Sultan Süleyman) önderliğinde Qing'e karşı ayaklanmasıyla kurduğu kısa ömürlü İslâm devleti; on sekiz yıllık mücadeleden sonra Mançu-Han ordularınca Dali'nin düşüşüyle yıkıldı. İSYAN/KISA ÖMÜRLÜ DEVLET kimliğidir. (kaynak: TDV, madde: panthay — \"1855'te Du Wenxiu, Dali'yi zaptederek... sultanlığın merkezi yaptı\", \"1855-1873\")",
  kaynak:"panthay",
  kronoloji:[
    { t:"1855-01-01", tur:"kurulus", b:"Du Wenxiu (Sultan Süleyman) Dali'yi ele geçirip sultanlığın merkezi yaptı" },
    { t:"1873-01-15", tur:"son", b:"Mançu-Han orduları on sekiz yıllık kuşatmanın ardından Dali'yi aldı" }
  ]
},
{ id:"samudra-pasai", ad:"Samudra Pasai Sultanlığı", tur:"sultanlik", bolge:"guneydogu-asya",
  f:"1281-01-01", t:"1521-01-01", baskent:"Pasai",
  ozet:"Güneydoğu Asya'nın ilk İslâm sultanlığı; kuzey Sumatra'da İslâmiyet'i kabul eden yerel hanedanca kuruldu, Marco Polo ve İbn Battûta'nın uğrak yeri oldu, sonunda Portekiz ve Açe arasında sıkışıp bağımsızlığını yitirdi. HANEDAN ÖMRÜ kimliğidir. ⚠️ 1281 tarihi TDV'nin verdiği \"1280'lerde İslâm'ı kabul\" ile atlasın pencere başlangıcının ÇAKIŞTIĞI ender bir durum. (kaynak: TDV, madde: endonezya — \"1280'lerde... İslâm'ı kabul\", \"ilk Pasai sultanı Melikü's-Sâlih 696'da (1296-97) öldü\"; bitiş tarihi standart akademik kaynağa göredir)",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1281-01-01", tur:"kurulus", b:"Yerel hanedan İslâm'ı kabul edip Samudra Pasai Sultanlığı'nı kurdu (TDV: 1280'ler)" },
    { t:"1521-01-01", tur:"son", b:"Portekiz-Açe çekişmesinde bağımsızlığını yitirdi" }
  ]
},
{ id:"sarawak-brooke", ad:"Sarawak (Brooke Hanedanı)", tur:"devlet", bolge:"guneydogu-asya",
  f:"1841-09-24", t:"1923-10-29", baskent:"Kuching",
  ozet:"İngiliz maceracı James Brooke'un Brunei Sultanı'ndan aldığı toprakla kurduğu, \"Beyaz Racalar\" (White Rajahs) diye anılan özel/kişisel sömürge devleti; Brunei'den bağımsız bir hanedanlık olarak üç kuşak sürdü (1923 sonrasında da sürdü, 1946'da İngiliz tacına devredildi). ÜLKE SÜREKLİLİĞİ kimliğidir — Brooke hanedanı atlas ufkunun ötesine taşıyor. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1841-09-24", tur:"kurulus", b:"Brunei Sultanı, James Brooke'a Sarawak topraklarını devretti, \"Racasını\" ilan etti" }
  ]
},
{ id:"sunda-pajajaran", ad:"Sunda Krallığı (Pajajaran)", tur:"krallik", bolge:"guneydogu-asya",
  f:"669-01-01", t:"1527-06-22", baskent:"Pakuan Pajajaran",
  ozet:"Batı Cava'da hüküm süren, İslâmlaşmayı reddeden son büyük Hindu-Budist krallıklardan biri; Demak-Cirebon ittifakının Sunda Kelapa limanını almasıyla (bugün \"Jakarta Günü\" olarak kutlanan olay) fiilen çöktü. HANEDAN ÖMRÜ kimliğidir. TDV'de ayrı maddesi yok; tarihler standart akademik kaynağa göredir.",
  kaynak:"yetersiz — endonezya maddesi okundu, Batı Cava'nın İslamlaşma bağlamını anlatıyor ama Sunda-Pajajaran Krallığı'nı (kuruluş, hükümdarlar, yıkılış) doğrudan işlemiyor; dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1527-06-22", tur:"son", b:"Fetahillah'ın Demak-Cirebon kuvvetleri Sunda Kelapa'yı aldı, liman \"Jayakarta\" adını aldı" }
  ]
},
{ id:"dogu-sumatra-sultanliklari", ad:"Doğu Sumatra Sultanlıkları (Jambi, Siyak, Deli, Indragiri)", tur:"devlet", bolge:"guneydogu-asya",
  f:"1615-01-01", t:"1858-01-01", baskent:"—",
  ozet:"Sumatra'nın doğu kıyısındaki dört küçük Malay-Müslüman sultanlığın toplu künyesi (HANEDAN ÖMRÜ değil, TOPLU/BATTANİYE kimlik — malay-sultanliklari'nin emsalini izler): Jambi (İslam sultanlığı ~1615), Siyak (1723, Cohor'dan ayrıldı), Deli (~1632, Açe vasalı olarak), Indragiri (Malaka/Cohor çevresine bağlı, erken İslamlaşma). Dördünün de TDV'de müstakil maddesi yok; f/t YIL BEYANIdır — tam kuruluş/bağlanma günleri belirsiz. t=1858, Hollanda'nın 'Korte Verklaring' (Kısa Beyanname) antlaşmalarıyla bölgeyi sistematik olarak doğrudan denetime almaya başladığı döneme işaret eder; sultanlıklar sonrasında Hollanda'ya BAĞLI ADLI VARLIKLAR olarak (bazıları 1946'ya kadar) sürdü — bu künye yalnız 'fiilî bağımsız/yerel egemenlik' döneminin sonunu (1858) esas alır, tam ilhakı değil.",
  kaynak:"bulunamadı — arandı, yok. Dört slug tek tek denendi (cambi, siyak, deli, indragiri) — hepsi ölü/alakasız. Genel 'sumatra' ve 'endonezya' maddeleri de okundu: yalnız TOPLU bir cümleyle geçiyorlar (\"1900'lere kadar... irili ufaklı İslâm devletlerinin tamamını egemenlikleri altına aldılar\"), dört sultanlığı ayrı ayrı işlemiyor. Dayanak: standart akademik kaynak.",
  kronoloji:[
    { t:"1615-01-01", tur:"kurulus", b:"Jambi'de İslam sultanlığının kuruluşu (yıl beyanı)" },
    { t:"1723-01-01", tur:"kurulus", b:"Siyak, Cohor (Johor) tahtı ihtilafından ayrılarak kuruldu (Raja Kecil)" },
    { t:"1858-01-01", tur:"vassal", b:"Hollanda'nın 'Korte Verklaring' antlaşmalarıyla Doğu Sumatra sultanlıklarını sistematik denetime alması (yıl beyanı, kademeli süreç)" }
  ]
},
{ id:"pontianak", ad:"Pontianak Sultanlığı (Borneo)", tur:"devlet", bolge:"guneydogu-asya",
  f:"1772-01-01", t:"1855-01-01", baskent:"Pontianak",
  ozet:"Batı Borneo'da Hadramutlu bir Arap seyyahın kurduğu sultanlık (HANEDAN ÖMRÜ). TDV'nin genel 'borneo' maddesi somut olarak veriyor: '1772'de Şerif Abdurrahman adındaki Hadramutlu bir Arap seyyah Pontianak Sultanlığı'nı kurdu.' t=1855 (Hollanda 'Lange Contract'larla doğrudan denetimi sistematikleştirmesi) YIL BEYANIdır; sultanlık sonrasında Hollanda'ya bağlı adlı bir varlık olarak sürdü.",
  kaynak:"borneo",
  kronoloji:[
    { t:"1772-01-01", tur:"kurulus", b:"Şerif Abdurrahman, Pontianak Sultanlığı'nı kurdu (TDV borneo maddesi)" }
  ]
},
{ id:"kutai", ad:"Kutai Sultanlığı (Doğu Borneo)", tur:"devlet", bolge:"guneydogu-asya",
  f:"1575-01-01", t:"1908-01-01", baskent:"Tenggarong",
  ozet:"Doğu Borneo'da eski bir Hindu krallığından İslâmlaşarak dönüşmüş sultanlık (HANEDAN ÖMRÜ). TDV'nin 'borneo' maddesi yalnız isim düzeyinde geçiyor: 'Borneo'da Bancermasin, Kutei, Sukadana ve Sambas gibi bazı küçük İslâm sultanlıkları ortaya çıktı' — somut tarih/olay vermiyor. f/t YIL BEYANIdır, standart akademik kaynağa göre.",
  kaynak:"yetersiz — borneo maddesi okundu, Kutai'yi Bancermasin/Sukadana/Sambas'la birlikte İSİM düzeyinde anıyor ama somut tarih/olay vermiyor; dayanak: standart akademik kaynak",
  kronoloji:[
    { t:"1908-01-01", tur:"son", b:"Hollanda'nın Kutai üzerinde tam doğrudan denetimi (yıl beyanı)" }
  ]
},
{ id:"bugis-kralliklari", ad:"Bugis Krallıkları (Bone, Wajo, Soppeng — Tellumpoccoe)", tur:"devlet", bolge:"guneydogu-asya",
  f:"1330-01-01", t:"1905-08-06", baskent:"—",
  ozet:"Güney Sulawesi'nin Bugis krallıkları için TOPLU/BATTANİYE künye (HANEDAN ÖMRÜ değil) — Gova-Makassar'ın TARİHÎ RAKİBİ, ayrı kimlik (bkz. gova-makassar; 1666-69 Makassar Savaşı'nda Hollanda'yla ittifak kurup Gova'ya karşı savaştılar, aynı kimlik kullanılamaz). TDV'de dördünün de (Bone, Wajo, Soppeng) müstakil maddesi yok; 'sulawesi'/'bugi' aramaları yalnız Bugis halkının varlığından bahsediyor, krallıklardan somut tarihle değil. f YIL BEYANIdır (Bone'un geleneksel kuruluşu ~1330), t=1905-08-06 Bone Savaşı'nın sonu (Hollanda'nın son bağımsız Bugis direnişini kırdığı tarih, standart akademik kaynak).",
  kaynak:"bulunamadı — arandı, yok. 'bone' slug'ı Cezayir'deki Bûne limanına yönleniyor (alakasız); 'sulawesi' ve 'bugi' genel maddeleri okundu, Bugis halkından bahsediyorlar ama Bone/Wajo/Soppeng krallıklarını ayrı ayrı işlemiyorlar. Dayanak: standart akademik kaynak.",
  kronoloji:[
    { t:"1905-08-06", tur:"son", b:"Bone Savaşı'nın sonu — Hollanda'nın Güney Sulawesi'deki son büyük Bugis direnişini kırması (standart akademik kaynak, yıl+ay beyanı)" }
  ]
}

];
