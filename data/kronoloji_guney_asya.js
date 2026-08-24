// GÜNEY ASYA KRONOLOJİSİ — Racput · Sind · Ladakh · Travankur · Nepal · Manipur
// (+ Delhi Sultanlığı ve Bâbürlü'nün YALNIZ bu devletlerle kesişen kolları)
//
// Sahibi: GÜNEY ASYA KRONOLOJİ oturumu.  Şartname: oturumlar/KRONOLOJI-SARTNAME.md
// AD ALANI: window.KRONOLOJI_GUNEY_ASYA   (dosya adındaki ayırt edici parça
//           değişken adında da var — CLAUDE.md §7 son maddesi)
//
// 🔴 ÇAKIŞMA NOTU: data/kronoloji_hindistan.js (131 madde) ÜLKE ölçeğindedir ve
//    Bâbürlü (57) + Delhi Sultanlığı (22) maddelerinin ağırlığını taşır. Bu dosya
//    ONA DOKUNMAZ; burada Bâbürlü/Delhi ancak yukarıdaki altı devletle KESİŞTİĞİ
//    yerde geçer (M-1064 ile HİNDİSTAN KRONOLOJİ oturumuna bildirildi).
//
// ⚠️ KAYNAK DURUMU — ölçüldü, uydurulmadı (CLAUDE.md §4):
//    TDV'de MADDE VAR : nepal · sind · multan · ecmir · kesmir · gucerat ·
//                       delhi-sultanligi · babur · ekber-sah · cihangir ·
//                       sah-cihan · evrengzib · suriler · seylan · tibet
//    TDV'de MADDE YOK : ladakh/ladak · travankur · manipur · racput/rajput/
//                       mevar/marvar/citor/udeypur/caypur/bikaner/codhpur ·
//                       tetta/sehvan/bakkar/argun/kalhoralar/talpurlar (302)
//    ⇒ Bunlar §4'ün "TANECİKLİK boşluğu"dur: TDV bölgeyi görüyor ama o incelikte
//      konuşmuyor. Standart akademik kaynak MEŞRU ve `kaynak:` alanında AÇIKÇA
//      yazılı. Gizlenmedi.
//    🔴 ÖLÇÜLMÜŞ TUZAK: `ekber` slug'ı HTTP 200 döner, <title> "EKBER" yazar,
//      ama GÖVDESİ BOİLERPLATE — doğru madde `ekber-sah`. Aynı şekilde `amber`
//      200 döner ve Racput şehri Amber'i DEĞİL, kokulu madde amberi anlatır.
//      (§4 tuzak ② ve ④, bu dosyada iki kez daha ölçüldü.)

window.KRONOLOJI_GUNEY_ASYA = [

// ═══════════════════════════════════════════════════════════════════════════
// SİND — Sûmrâ → Semmâ → Ergunlu/Tarhan → Bâbürlü → Kalhora → Talpur
// künye: sind  ·  1281-01-01 → 1843-02-17  ·  562 yıl
// ═══════════════════════════════════════════════════════════════════════════

{ t:"1281-01-01", b:"Sind'de Sûmrâ hânedanının hâkimiyeti sürüyordu", tur:"kurulus", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","siyaset"], yer_id:"Tatta (Thatta)",
  d:"[Sind — Sûmrâ] Aşağı İndus vadisi, XI. yüzyıldan beri yerli Sûmrâ hânedanının elindeydi; merkezleri Muhammed Tûr ve çevresiydi. Atlasın açıldığı tarihte Sind, Delhi Sultanlığı'nın kuzeybatı ucunda yarı bağımsız bir bölge görünümündeydi.",
  kaynak:"sind (TDV) — bölgenin İslâm öncesi ve Sûmrâ dönemi anlatımı" },

{ t:"1298-01-01", b:"Sind üzerinden gelen Moğol akınları Delhi Sultanlığı'nı zorladı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","akin"], yer_id:"Multan",
  d:"[Sind] Çağatay ulusundan gelen akıncı kolları İndus'u geçerek Multan ve Sind üzerinden Delhi'ye yöneldi. Alâeddin Halacî'nin sınır kaleleri güçlendirmesi ve Multan'ı ileri karakol saymasının sebebi bu baskıdır; Sind, iki büyük güç arasında bir tampon hâline geldi.",
  kaynak:"multan (TDV); Peter Jackson, The Delhi Sultanate: A Political and Military History (Cambridge 1999)" },

{ t:"1333-09-12", b:"İbn Battûta İndus'u geçerek Sind'e girdi", tur:"sosyal", onem:3, dunya:2, kapsam:"dis",
  etiket:["seyahat","kultur"], yer_id:"Multan",
  d:"[Sind] Faslı seyyah 1 Muharrem 734'te İndus nehrini geçtiğini yazar; oradan Multan'a ulaşarak Delhi'ye giden yolu tuttu. Seyahatnâmesi Sind'in şehirleri, tarikat çevreleri ve Tuğluk idaresi hakkında dönemin en ayrıntılı gözlemini bırakmıştır.",
  kaynak:"ibn-battuta (TDV); er-Riḥle, Sind ve Multan bölümleri" },

{ t:"1351-03-20", b:"Sultan Muhammed b. Tuğluk, Semmâ isyanını bastırmak için çıktığı Sind seferinde öldü", tur:"olum", onem:4, dunya:3, kapsam:"dis",
  etiket:["hukumdar","olum","askeri"], yer_id:"Tatta (Thatta)",
  d:"[Sind / Delhi Sultanlığı] Tuğluk sultanı, Tatta yakınlarında Semmâ kabilesi üzerine yürürken ordugâhında hastalanarak öldü. Ölümü Delhi'nin Sind üzerindeki baskısını bir anda kaldırdı ve bölgede yerli hânedanın önünü açtı — bir seferin ortasında ölen hükümdar, kazanılmış toprağı da beraberinde götürdü.",
  kaynak:"sind (TDV); tugluklular (TDV)" },

{ t:"1351-01-01", b:"Semmâ hânedanı Sind'de hâkimiyeti ele geçirdi", tur:"kurulus", onem:5, dunya:2, kapsam:"ic",
  etiket:["kurulus","hanedan"], yer_id:"Tatta (Thatta)",
  d:"[Sind — Semmâ] Yerli Semmâ kabilesi Sûmrâ idaresine son vererek Sind'e hâkim oldu; hânedan reisleri 'Câm' unvanını taşıdı. Semmâ dönemi XVI. yüzyıla kadar sürecek ve Tatta'yı bölgenin ilim ve mimarî merkezine dönüştürecekti.",
  kaynak:"sind (TDV): \"Hindu Semmâ kabilesi tarafından zaptedildi (1351) ve XVI. yüzyıla kadar onların hâkimiyeti altında kaldı\"" },

{ t:"1362-01-01", b:"Fîrûz Şah Tuğluk'un birinci Sind seferi başarısızlıkla sonuçlandı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","sefer"], yer_id:"Tatta (Thatta)",
  d:"[Sind] Delhi sultanı Semmâ Câmı'nı itaate zorlamak için büyük bir orduyla Tatta önlerine geldi; kıtlık, salgın ve İndus'un taşması ordunun çözülmesine yol açtı ve sultan Gucerât'a çekilmek zorunda kaldı. Sefer, Delhi'nin Sind üzerindeki idarî iddiasının artık askerî güçle desteklenemediğini gösterdi.",
  kaynak:"firuz-sah (TDV); sind (TDV)" },

{ t:"1367-01-01", b:"İkinci sefer sonunda Semmâ Câmı Delhi'nin üstünlüğünü kabul etti", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["antlasma","tabiiyet"], yer_id:"Tatta (Thatta)",
  d:"[Sind — Semmâ] Fîrûz Şah'ın ikinci seferi Câm'ın teslim olması ve Delhi'ye götürülmesiyle bitti. Bağlılık biçimseldi: Semmâ idaresi yerinde kaldı, vergi ve hutbe dışında Sind fiilen kendi hânedanınca yönetilmeye devam etti.",
  kaynak:"firuz-sah (TDV); sind (TDV)" },

{ t:"1398-01-01", b:"Timur'un Hindistan seferi Sind'i Delhi'nin denetiminden büsbütün kopardı", tur:"savas", onem:4, dunya:4, kapsam:"dis",
  etiket:["askeri","cozulme"], yer_id:"Multan",
  d:"[Sind] Timur'un Multan'ı ve Delhi'yi çiğneyen seferi Tuğluk devletini parçaladı. Sind'de Semmâ Câmları bundan sonra hiçbir merkezî otoriteye vergi ödemedi; bölge tam bağımsız bir sultanlık gibi davranmaya başladı.",
  kaynak:"timur (TDV); sind (TDV)" },

{ t:"1461-01-01", b:"Câm Nizâmeddin (Câm Nindo) Semmâ tahtına çıktı", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukumdar","kultur"], yer_id:"Tatta (Thatta)",
  d:"[Sind — Semmâ] Yaklaşık yarım asır süren saltanatı Sind'in altın çağı sayılır: Tatta bir ilim merkezine dönüştü, Makli tepesindeki büyük nekropolün en görkemli yapıları bu dönemde yükseldi ve bölge, Gucerât ile Horasan arasındaki ticaretin kavşağı oldu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok (Semmâ hânedanı `sind` maddesi içinde geçer). Dayanak: M. H. Panhwar, Six Hundred Years of Soomra and Samma Rule; Cambridge History of India, III" },

{ t:"1508-01-01", b:"Câm Nizâmeddin öldü, Semmâ hânedanı çözülmeye başladı", tur:"olum", onem:4, dunya:1, kapsam:"ic",
  etiket:["olum","kriz"], yer_id:"Tatta (Thatta)",
  d:"[Sind — Semmâ] Uzun ve istikrarlı saltanatın ardından taht kavgaları başladı; Câm Fîrûz'un çocuk yaşta tahta çıkması, kuzeyden gelen Ergun baskısına karşı direnci kırdı. Bir hânedanın en parlak hükümdarını kaybetmesi, çoğu zaman toprak kaybından önce gelir.",
  kaynak:"bulunamadı — dayanak: M. H. Panhwar, a.g.e.; Cambridge History of India, III" },

{ t:"1520-01-01", b:"Şah Beg Ergun Tatta'yı ele geçirdi; Sind Türk asıllı Ergun hânedanına geçti", tur:"toprak-kazanc", onem:5, dunya:2, kapsam:"dis",
  etiket:["fetih","hanedan"], yer_id:"Tatta (Thatta)",
  d:"[Sind — Ergunlu] Kandehar'dan Bâbür'ün baskısıyla güneye inen Şah Beg, Câm Fîrûz'u yenerek Tatta'ya girdi ve şehri yağmaladı. Semmâ hâkimiyeti sona erdi; Sind, Orta Asya kökenli bir askerî hânedanın eline geçti. (Kaynaklarda 1520 ve 1521 tarihleri birlikte geçer.)",
  kaynak:"sind (TDV): \"XVI. yüzyılda Türk asıllı Argun hânedanının eline geçti\"; tarih için Cambridge History of India, III" },

{ t:"1522-01-01", b:"Şah Beg Ergun öldü, yerine oğlu Şah Hasan geçti", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar"], yer_id:"Tatta (Thatta)",
  d:"[Sind — Ergunlu] Şah Hasan Ergun, babasının kurduğu idareyi Bakkar ve Tatta arasında iki merkezli biçimde sürdürdü. Onun döneminde Sind, Bâbürlü ile Safevî arasındaki güç boşluğunda dengede durmayı becerdi.",
  kaynak:"bulunamadı — dayanak: Cambridge History of India, III; Ma'sumi, Ta'rikh-i Sind" },

{ t:"1541-01-01", b:"Hümâyun, Şîr Şah'a yenildikten sonra Sind'e sığındı", tur:"kriz", onem:4, dunya:3, kapsam:"dis",
  etiket:["surgun","siyaset"], yer_id:"Tatta (Thatta)",
  d:"[Sind / Bâbürlü] Kannauc bozgunundan sonra Hindistan'ı kaybeden Hümâyun, Şah Hasan Ergun'dan yardım umarak Sind'e geçti; umduğunu bulamayınca Racputana çöllerine ve oradan İran'a yöneldi. Bâbürlü hânedanının en kırılgan yılları Sind'de geçti.",
  kaynak:"humayun-sah bulunamadı (302); dayanak: ekber-sah (TDV) ve suriler (TDV) maddeleri" },

{ t:"1542-10-14", b:"Ekber Şah, Sind'deki Ömerkût Kalesi'nde doğdu", tur:"dogum", onem:4, dunya:4, kapsam:"dis",
  etiket:["dogum","hukumdar"], yer_id:"",
  d:"[Sind / Bâbürlü] Bâbürlü hânedanının en büyük hükümdarı, babası Hümâyun sürgündeyken bir Racput kalesinde dünyaya geldi. Doğum yeri Ömerkût, Sind çölünün doğu ucunda Sodha Racputlarının elindeydi — imparatorluğun kaderini belirleyecek hükümdar, kaçak bir kafilenin konakladığı sınır kalesinde doğdu. (yer_id boş: Ömerkût atlasın yerleşim kayıtlarında yok.)",
  kaynak:"ekber-sah (TDV): \"4 Receb 949'da (14 Ekim 1542) Sind'deki Ömerkût Kalesi'nde doğdu\"" },

{ t:"1554-01-01", b:"Mirza Îsâ Han Tarhan Sind'de idareyi ele aldı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","darbe","taht-kavgasi"], yer_id:"Tatta (Thatta)",
  d:"[Sind — Tarhan] Ergun hânedanının son temsilcisinin ölümüyle idare, aynı Orta Asya geleneğinden gelen Tarhan ailesine geçti. Îsâ Han'ın Tatta'daki türbesi, Sind'in taş işçiliğinde ulaştığı düzeyin bugün ayakta duran örneğidir.",
  kaynak:"sind (TDV) — Tatta türbeleri arasında \"Îsâ Han\" adıyla anılır; hânedan geçişi için Cambridge History of India, III" },

{ t:"1555-01-01", b:"Portekiz filosu Tatta'yı yağmalayıp yaktı", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","deniz","yagma"], yer_id:"Tatta (Thatta)",
  d:"[Sind] Îsâ Han Tarhan'ın müttefik olarak çağırdığı Portekiz gemileri, beklediği ödemeyi alamayınca şehri basıp ateşe verdi. Sind'in en zengin liman-şehri bir günde harabeye döndü; olay, Hint Okyanusu'ndaki Portekiz üstünlüğünün iç sulara kadar uzandığını gösterdi.",
  kaynak:"sind (TDV): \"Bölge bu dönemde Portekizliler'in saldırılarına uğradı\"; ayrıntı: Cambridge History of India, III" },

{ t:"1558-01-01", b:"Tatta'da Dabgîr Camii inşa edildi", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["mimari","cami"], yer_id:"Tatta (Thatta)",
  d:"[Sind] 966 tarihli kitâbesiyle bilinen cami, Sind mimarîsinin Lûdî ve Bâbürlü etkilerini nasıl kendi tuğla-çini geleneğiyle birleştirdiğini gösterir. Portekiz yağmasından hemen sonra yükselmesi, şehrin kendini toparlama hızının işaretidir.",
  kaynak:"sind (TDV): \"Tatta'daki 966 (1558-59) tarihli Dabgîr Camii\"" },

{ t:"1573-01-01", b:"Ekber Şah, merkezi Bakkar olan Yukarı Sind'i Bâbürlü topraklarına kattı", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["fetih","tabiiyet"], yer_id:"Şikârpûr",
  d:"[Sind / Bâbürlü] Ergun-Tarhan hânedanının ikiye bölünmesinden yararlanan Ekber, önce kuzeyi aldı. Bakkar sancağı böylece Bâbürlü sûbe düzenine bağlandı ve İndus'un yukarı akışı Agra'nın denetimine girdi. (yer_id: Bakkar atlasın kayıtlarında yok; en yakın kayıtlı yerleşim Şikârpûr'dur.)",
  kaynak:"sind (TDV): \"Ekber Şah tarafından önce 981'de (1573) merkezi Bakkar olan Yukarı Sind\"" },

{ t:"1591-01-01", b:"Aşağı Sind (Tatta) Bâbürlü topraklarına katıldı", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis",
  etiket:["fetih","son"], yer_id:"Tatta (Thatta)",
  d:"[Sind / Bâbürlü] Abdürrahim Hân-ı Hânân kumandasındaki ordu Mirza Cânî Beg Tarhan'ı yenerek Tatta'yı aldı; iki yüz yetmiş yıl süren yerli hânedanlar dönemi kapandı ve Sind bir Bâbürlü sûbesine dönüştü. İndus deltası, Agra'nın Hint Okyanusu'na açılan kapısı oldu.",
  kaynak:"sind (TDV): \"1591'de merkezi Tatta (Thatta) olan Aşağı Sind zaptedilmek suretiyle Bâbürlü topraklarına katıldı\"" },

{ t:"1643-01-01", b:"Tatta'da Cami-i Mescid'in inşasına başlandı", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["mimari","cami"], yer_id:"Tatta (Thatta)",
  d:"[Sind / Bâbürlü] Şah Cihan'ın emriyle yükselen büyük cami, doksan üç kubbesi ve akustiğiyle Bâbürlü tuğla mimarîsinin Sind'deki zirvesidir; 1648'e kadar süren inşaat, imparatorluğun taşra şehirlerine de başkent ölçeğinde eser bırakma iddiasının kanıtıdır.",
  kaynak:"sind (TDV): \"1053-1058 (1643-1648) arasında inşa edilen Cami-i Mescid\"" },

{ t:"1701-01-01", b:"Kalhora hânedanı Sind'de fiilî iktidara yükseldi", tur:"kurulus", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","kurulus"], yer_id:"Haydarâbâd (Sind)",
  d:"[Sind — Kalhora] Bir sûfî-toprak ağası ailesi olarak yükselen Kalhoralar, Bâbürlü merkezinin zayıflamasıyla İndus vadisinde vergi ve asker toplama yetkisini eline aldı. Dinî önderlikle toprak sahipliğini birleştiren bu model, Sind'de bir asır sürecek yeni bir siyasî düzenin temeli oldu.",
  kaynak:"bulunamadı — TDV'de Kalhora maddesi yok (`kalhoralar` 302). Dayanak: Cambridge History of India, IV; Ansar Zahid Khan, History and Culture of Sind" },

{ t:"1740-01-01", b:"Nâdir Şah Sind'i hâkimiyeti altına aldı", tur:"isgal", onem:4, dunya:3, kapsam:"dis",
  etiket:["isgal","askeri"], yer_id:"Tatta (Thatta)",
  d:"[Sind] Delhi'yi yağmalayan Avşarlı hükümdarı, dönüş yolunda İndus vadisini de itaat altına aldı ve Kalhora idaresinden ağır bir yıllık vergi bağladı. Sind'in yönü bir kez daha batıya, İran ve Afganistan'a çevrildi.",
  kaynak:"sind (TDV): \"1153'te (1740) Avşarlı hânedanının kurucusu Nâdir Şah'ın ... ele geçirdiği Sind\"" },

{ t:"1752-01-01", b:"Sindî şairi Şah Abdüllatîf Bhitâî öldü", tur:"kultur", onem:5, dunya:2, kapsam:"ic",
  etiket:["edebiyat","tasavvuf"], yer_id:"",
  d:"[Sind] Şah Cû Risâlo adlı divanıyla Sindî'yi bir edebiyat dili hâline getiren mutasavvıf şair, halk destanlarını tasavvufî bir dille yeniden yazdı. Sind kimliğinin bugün de en güçlü ortak zemini onun şiiridir — bir dilin klasiği, çoğu zaman bir devletten uzun yaşar. (yer_id boş: Bhit Şah atlasın yerleşim kayıtlarında yok.)",
  kaynak:"bulunamadı — TDV'de müstakil madde bulunamadı; dayanak: Annemarie Schimmel, Pearls from the Indus: Studies in Sindhi Culture" },

{ t:"1754-01-01", b:"Ahmed Şah Dürrânî Sind'i ele geçirdi", tur:"isgal", onem:4, dunya:3, kapsam:"dis",
  etiket:["isgal","tabiiyet"], yer_id:"Şikârpûr",
  d:"[Sind] Afgan hükümdarı, Nâdir Şah'ın mirasını devralarak Kalhora idaresini kendine bağladı; Sind bundan sonra Kâbil'e vergi ödeyen bir tâbi bölge sayıldı. Şikârpûr, Afgan-Hint ticaretinin ve Sindî sarraflarının merkezi olarak yükseldi.",
  kaynak:"sind (TDV); ahmed-sah-durrani (TDV)" },

{ t:"1772-01-01", b:"İngiliz Doğu Hindistan Şirketi Sind'de ilk fabrikasını kurdu", tur:"ekonomi", onem:4, dunya:3, kapsam:"dis",
  etiket:["ticaret","somurge"], yer_id:"Tatta (Thatta)",
  d:"[Sind] Şirketin ticaret acentesi, İndus deltasında kalıcı bir ayak izi bıraktı. Askerî fetihten yetmiş yıl önce gelen bu ticarî yerleşme, İngiliz nüfuzunun Sind'e önce tüccar kılığında girdiğini gösterir.",
  kaynak:"sind (TDV): \"İngiliz Doğu Hindistan Şirketi 1772'de ilk fabrikasını kurdu\"" },

{ t:"1783-01-01", b:"Talpur sülâlesinden Mîr Feth Ali Han Sind'e hâkim oldu", tur:"kurulus", onem:5, dunya:2, kapsam:"ic",
  etiket:["hanedan","kurulus"], yer_id:"Haydarâbâd (Sind)",
  d:"[Sind — Talpur] Belûç asıllı Talpurlar, Halani'de Kalhora ordusunu yenerek idareyi devraldı ve merkezi Haydarâbâd'a taşıdı. 'Mîr'ler ülkeyi aile kolları arasında paylaşarak yönettiler — bu paylaşımlı yapı altmış yıl sonra İngilizler karşısındaki en büyük zaafları olacaktı.",
  kaynak:"sind (TDV): \"1783'te Tâlpûr sülâlesinden Mîr Feth Ali Han Sind'e hâkim olduysa da\"" },

{ t:"1827-01-01", b:"Sindî şairi Sachal Sarmast öldü", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["edebiyat","tasavvuf"], yer_id:"",
  d:"[Sind — Talpur] Yedi dilde şiir söylediği rivayet edilen mutasavvıf şair, vahdet-i vücûd düşüncesini halk diline taşıdı. Şah Abdüllatîf'ten sonra Sindî edebiyatının ikinci büyük adıdır. (yer_id boş: Daraza atlasın yerleşim kayıtlarında yok.)",
  kaynak:"bulunamadı — TDV'de müstakil madde bulunamadı; dayanak: Annemarie Schimmel, Pearls from the Indus" },

{ t:"1839-02-01", b:"İngiliz kuvvetleri Karaçi'yi işgal etti", tur:"isgal", onem:4, dunya:3, kapsam:"dis",
  etiket:["isgal","liman"], yer_id:"Karaçi",
  d:"[Sind — Talpur] Birinci Afgan Savaşı'na giden ordunun ikmal hattını güvenceye almak için donanma Karaçi'yi topa tuttu ve şehri aldı. Talpur mîrleri, İndus'un serbest seyrüseferini ve İngiliz garnizonunu kabul eden bir antlaşmaya zorlandı.",
  kaynak:"bulunamadı — TDV `sind` maddesi bu ayrıntıyı vermiyor. Dayanak: Cambridge History of India, V; J. Y. Wong, Deadly Dreams (İndus siyaseti bölümü)" },

{ t:"1843-02-17", b:"Miyânî Muharebesi: Talpur ordusu Napier karşısında bozguna uğradı", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","yenilgi","son"], yer_id:"Haydarâbâd (Sind)",
  d:"[Sind — Talpur] Sir Charles Napier'in çok daha küçük fakat topçu bakımından üstün kuvveti, Haydarâbâd'ın kuzeyindeki Miyânî'de Belûç ordusunu dağıttı. Mîrler teslim oldu; altı asırlık yerli hânedanlar çizgisi bu muharebeyle kapandı.",
  kaynak:"sind (TDV): \"nihayet 1843'te imparatorluğun Bombay eyaletine bağlandı\"; muharebe için Cambridge History of India, V" },

{ t:"1843-03-24", b:"Dubba Muharebesi Sind'in fethini tamamladı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","son"], yer_id:"Haydarâbâd (Sind)",
  d:"[Sind] Mîrpûr mîri Şîr Muhammed'in son direnişi Haydarâbâd yakınlarında kırıldı. Sind İngiliz Hindistanı'na katılarak Bombay eyaletine bağlandı; bölge bundan sonra ayrı bir siyasî varlık olarak haritada görünmeyecekti.",
  kaynak:"sind (TDV); Cambridge History of India, V" },

// ═══════════════════════════════════════════════════════════════════════════
// NEPAL — Malla krallıkları → Gorkha/Şah hânedanı → Rana idaresi
// künye: nepal  ·  1281-01-01 → 1923-10-29  ·  642 yıl
// ═══════════════════════════════════════════════════════════════════════════

{ t:"1300-01-01", b:"Nepal, Alâeddin Halacî döneminde Delhi Sultanlığı'nın himayesine girdi", tur:"tabiiyet", onem:4, dunya:2, kapsam:"dis",
  etiket:["tabiiyet","siyaset"], yer_id:"Katmandu",
  d:"[Nepal — Malla] Kuzey Hindistan'ı birleştiren Halacî baskısı Himalaya eteklerine kadar ulaştı ve Katmandu vadisinin krallıkları Delhi'nin üstünlüğünü tanıdı. (TDV himayeyi Alâeddin'in saltanatına — 1296-1316 — bağlar, gün vermez; madde saltanatın ortasına yerleştirildi.)",
  kaynak:"nepal (TDV): \"Nepal, Alâeddin Halacî zamanında (1296-1316) Delhi Sultanlığı'nın himayesine girdi\"" },

{ t:"1351-01-01", b:"Bengal Sultanı Şemseddin İlyas Şah Katmandu'yu ele geçirdi", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","yagma"], yer_id:"Katmandu",
  d:"[Nepal — Malla] Bengal ordusu Himalaya vadisine girip başşehri aldı ve zengin ganimetle döndü; Paşupatinâth başta olmak üzere vadinin tapınakları büyük zarar gördü. Nepal tarihinde 'İlyas Şah istilâsı' bir dönüm noktası sayılır — vadi ilk defa dışarıdan gelen bir orduyla yüzleşti. (TDV bu tarihi 752/1351 verir; Batı literatüründe 1349 da geçer.)",
  kaynak:"nepal (TDV): \"752 (1351) yılında Bengal Sultanı Şemseddin İlyas Şah, Nepal'e bir sefer düzenleyip Katmandu'yu ele geçirdi\"" },

{ t:"1360-01-01", b:"Nepal, III. Fîrûz Şah Tuğluk'un hâkimiyetini kabul etti", tur:"tabiiyet", onem:3, dunya:2, kapsam:"dis",
  etiket:["tabiiyet"], yer_id:"Katmandu",
  d:"[Nepal — Malla] Bengal istilâsının açtığı boşlukta vadi krallıkları Delhi'nin üstünlüğünü yeniden tanımak zorunda kaldı. Bağlılık uzaktan ve biçimseldi; Himalaya coğrafyası, hiçbir Hint imparatorluğunun burada kalıcı garnizon tutmasına izin vermedi. (TDV yıl vermiyor; madde Fîrûz Şah'ın saltanatının erken yıllarına yerleştirildi.)",
  kaynak:"nepal (TDV): \"ancak bir süre sonra Delhi Sultanı III. Fîrûz Şah Tuğluk'un hâkimiyetini kabul etmek zorunda kaldı\"" },

{ t:"1382-01-01", b:"Cayasthiti Malla vadinin tek hükümdarı oldu", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukumdar","birlesme"], yer_id:"Katmandu",
  d:"[Nepal — Malla] İstilâ sonrası dağılan Katmandu vadisini yeniden tek elde toplayan hükümdar, Nepal'in klasik idarî ve toplumsal düzeninin kurucusu sayılır. Saltanatı, yıkımdan sonra gelen bir toparlanma devrinin ders kitabı örneğidir.",
  kaynak:"bulunamadı — TDV `nepal` maddesi bu hükümdarı anmıyor. Dayanak: Cambridge History of India ilgili bölümleri; D. R. Regmi, Medieval Nepal" },

{ t:"1390-01-01", b:"Cayasthiti Malla kast ve hukuk düzenini kanunlaştırdı", tur:"idari", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukuk","sosyal","reform"], yer_id:"Katmandu",
  d:"[Nepal — Malla] Newar toplumunu altmış dört meslek grubuna ayıran, evlilik, miras ve ceza kurallarını yazıya geçiren düzenleme, Nepal toplumsal yapısını yüzyıllarca belirledi. Bir hükümdarın en kalıcı eseri çoğu zaman kazandığı savaş değil, yazdırdığı kanundur.",
  kaynak:"bulunamadı — dayanak: D. R. Regmi, Medieval Nepal; Cambridge History of India" },

{ t:"1428-01-01", b:"Yakşa Malla tahta çıktı; Nepal en geniş sınırlarına ulaştı", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["hukumdar","toprak-kazanc"], yer_id:"Katmandu",
  d:"[Nepal — Malla] Yakşa Malla döneminde krallık doğuda Sikkim'e, güneyde Terai ovalarına, kuzeyde Tibet sınırına dayandı. Bhaktapur'un surları ve saray yapıları bu dönemde bugünkü hâlini almaya başladı.",
  kaynak:"bulunamadı — dayanak: D. R. Regmi, Medieval Nepal" },

{ t:"1482-01-01", b:"Yakşa Malla'nın ölümüyle vadi üç bağımsız krallığa bölündü", tur:"bolunme", onem:5, dunya:2, kapsam:"ic",
  etiket:["bolunme","kriz"], yer_id:"Katmandu",
  d:"[Nepal — Malla] Miras, oğullar arasında Katmandu, Patan ve Bhaktapur olarak paylaşıldı. Üç krallık üç asır boyunca birbiriyle çekişti; bu bölünme hem sanatta olağanüstü bir rekabet doğurdu hem de XVIII. yüzyılda Gorkha fethini mümkün kıldı.",
  kaynak:"nepal (TDV): \"Nepal XV. yüzyılda Katmandu, Bhaktapur ve Patan adlı üç bağımsız krallığa bölündü\"" },

{ t:"1500-01-01", b:"Müslüman tüccarlar Katmandu'ya yerleşmeye başladı", tur:"sosyal", onem:3, dunya:1, kapsam:"ic",
  etiket:["ticaret","din","goc"], yer_id:"Katmandu",
  d:"[Nepal — Malla] Keşmir ve Kuzey Hindistan'dan gelen tüccarların ardından sûfîler de vadiye yerleşti; Nepal'in bugünkü küçük müslüman cemaatinin kökeni bu döneme iner. (TDV 'XV. yüzyıl sonları' der, yıl vermez; madde yüzyıl dönümüne yerleştirildi.)",
  kaynak:"nepal (TDV): \"XV. yüzyıl sonlarında ilk olarak müslüman tüccarlar Katmandu'ya geldi, onların ardından sûfîler gelip bölgeye yerleşti\"" },

{ t:"1600-01-01", b:"Bâbürlü etkisi Nepal sarayının kılık kıyafet ve âdetlerine girdi", tur:"kultur", onem:3, dunya:1, kapsam:"dis",
  etiket:["kultur","etkilesim"], yer_id:"Katmandu",
  d:"[Nepal — Malla] Güneydeki büyük imparatorlukla artan temas, Malla saraylarında Bâbürlü giyim tarzını, saray protokolünü ve minyatür zevkini yaygınlaştırdı. Nepal, hiç fethedilmeden bir imparatorluğun kültür yörüngesine girdi. (TDV 'XVI. yüzyıldan itibaren' der, yıl vermez.)",
  kaynak:"nepal (TDV): \"Nepal idarecileri günlük hayat tarzı ve kılık kıyafetlerinde Bâbürlüler'in etkisine girdi\"" },

{ t:"1641-01-01", b:"Pratap Malla Katmandu tahtına çıktı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar","kultur"], yer_id:"Katmandu",
  d:"[Nepal — Malla] Şair-kral olarak anılan Pratap Malla döneminde Hanuman Dhoka sarayı genişletildi, Katmandu meydanları bugünkü görünümünü kazandı ve vadi sanatı zirveye çıktı. Üç krallık arasındaki rekabet, üç ayrı saray meydanı bırakmıştır.",
  kaynak:"bulunamadı — dayanak: D. R. Regmi, Medieval Nepal; Cambridge History of India" },

{ t:"1650-01-01", b:"Nepal-Tibet ticaret ve darphane antlaşması", tur:"ekonomi", onem:4, dunya:2, kapsam:"dis",
  etiket:["ticaret","antlasma","para"], yer_id:"Katmandu",
  d:"[Nepal — Malla] Katmandu, Tibet için gümüş sikke basma imtiyazını ve Lhasa ticaretinin aracılığını elde etti. Himalaya geçitleri üzerindeki bu tekel, üç Malla krallığının zenginliğinin kaynağıydı — ve bir asır sonra Gorkha ile Tibet'i karşı karşıya getirecek asıl sebep de buydu.",
  kaynak:"bulunamadı — TDV `nepal` maddesi bu ayrıntıyı vermiyor. Dayanak: L. Petech, Nepal ve Tibet ilişkileri üzerine çalışmaları; Cambridge History of India" },

{ t:"1743-01-01", b:"Pritvi Narayan Şah Gorkha tahtına çıktı", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukumdar","kurulus"], yer_id:"Katmandu",
  d:"[Nepal — Gorkha] Batıdaki küçük Gorkha beyliğinin başına geçen hükümdar, ömrünü Katmandu vadisini ele geçirmeye adadı. Bugünkü Nepal Krallığı'nın kurucusu sayılır. (TDV birleşmeyi 1742'ye bağlar; akademik literatür cülûsu 1743, vadinin fethini 1768-1769 olarak verir — bu dosya iki tarihi ayrı maddelerde tutar.)",
  kaynak:"nepal (TDV): \"Gurka hânedanından Pritvi Narayan 1742'de ... Nepal Krallığı'nın temelini attı\"; tarih ayrımı için Cambridge History of India" },

{ t:"1767-01-01", b:"Kinloch kumandasındaki İngiliz seferi Gorkha kuvvetleri karşısında geri püskürtüldü", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","zafer"], yer_id:"Katmandu",
  d:"[Nepal — Gorkha] Katmandu kralının yardım çağrısı üzerine gönderilen Doğu Hindistan Şirketi birliği, sıtma ve dağ savaşı karşısında dağıldı. Şirketin Himalaya'da aldığı bu ilk yenilgi, Nepal'in kırk yedi yıl daha dışarıdan müdahalesiz kalmasını sağladı.",
  kaynak:"bulunamadı — dayanak: Cambridge History of India, V; John Pemble, The Invasion of Nepal" },

{ t:"1768-09-25", b:"Pritvi Narayan Şah Katmandu'yu ele geçirdi", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"ic",
  etiket:["fetih","birlesme"], yer_id:"Katmandu",
  d:"[Nepal — Gorkha] Yıllarca süren kuşatma ve abluka, İndra Câtrâ bayramının kalabalığından yararlanılan bir baskınla sonuçlandı; Cayaprakâş Malla kaçtı. Modern Nepal devletinin kuruluş günü sayılan bu tarih, üç asırlık Malla bölünmüşlüğünün sonudur.",
  kaynak:"bulunamadı — TDV günü vermiyor. Dayanak: Cambridge History of India, V; L. Stiller, The Rise of the House of Gorkha" },

{ t:"1769-01-01", b:"Patan ve Bhaktapur da alındı; vadi tek yönetimde birleşti", tur:"birlesme", onem:5, dunya:2, kapsam:"ic",
  etiket:["fetih","birlesme","son"], yer_id:"Katmandu",
  d:"[Nepal — Gorkha] Katmandu'nun düşmesinden birkaç ay sonra öteki iki Malla başşehri de teslim oldu. Başşehir Katmandu'ya taşındı ve Gorkha hânedanı, doğuya ve batıya doğru genişlemesini buradan yürüttü.",
  kaynak:"nepal (TDV): \"Katmandu bu dönemde ülkenin başşehri oldu\"; ayrıntı: L. Stiller, a.g.e." },

{ t:"1788-01-01", b:"Nepal-Tibet savaşı başladı", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","ticaret"], yer_id:"Şigatse",
  d:"[Nepal — Gorkha] Sikke ayarı ve tuz-ticaret imtiyazları yüzünden çıkan anlaşmazlık savaşa dönüştü; Gorkha kuvvetleri Tibet'in güney vadilerine girdi ve 1791'de Taşilhunpo Manastırı'nı yağmaladı. Himalaya'nın iki yakası arasındaki ticaret dengesi bir daha eskisi gibi olmadı.",
  kaynak:"bulunamadı — dayanak: L. Petech, Nepal-Tibet ilişkileri; Cambridge History of India" },

{ t:"1792-10-02", b:"Betravati Antlaşması: Çin ordusu Nepal'i barışa zorladı", tur:"antlasma", onem:5, dunya:4, kapsam:"dis",
  etiket:["antlasma","yenilgi"], yer_id:"Katmandu",
  d:"[Nepal — Gorkha] Fukanggan kumandasındaki Çin-Mançu ordusu Katmandu'ya birkaç günlük mesafeye kadar ilerledi; Nepal yağmayı iade etmeyi ve Pekin'e beş yılda bir elçi göndermeyi kabul etti. Bir Himalaya krallığının Çin İmparatorluğu ile doğrudan çarpıştığı bu savaş, bölgedeki üç büyük gücün — Nepal, Tibet-Çin ve İngiliz Hindistanı — sınırlarını fiilen çizdi.",
  kaynak:"bulunamadı — TDV `nepal` maddesi savaşı anmıyor. Dayanak: L. Petech; Cambridge History of India, V" },

{ t:"1806-04-01", b:"Bhimsen Thapa muhtâr (başvezir) olarak iktidarı ele aldı", tur:"darbe", onem:4, dunya:1, kapsam:"ic",
  etiket:["darbe","siyaset","darbe-siyasi"], yer_id:"Katmandu",
  d:"[Nepal — Gorkha] Saray kırımının ardından yönetimi eline alan Thapa, otuz yıl boyunca ülkeyi kralın adına yönetti ve orduyu Avrupa usulünde düzenlemeye çalıştı. Nepal'de gerçek iktidarın kraldan başvezire kayması ilk defa bu dönemde kalıcılaştı.",
  kaynak:"bulunamadı — dayanak: John Pemble, The Invasion of Nepal; Cambridge History of India, V" },

{ t:"1814-11-01", b:"İngiliz-Nepal (Gorkha) Savaşı başladı", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","savas"], yer_id:"Katmandu",
  d:"[Nepal — Gorkha] Terai sınırındaki karakol anlaşmazlıkları Doğu Hindistan Şirketi'nin savaş ilânıyla sonuçlandı. Dört koldan yürüyen İngiliz ordusu, dağ savaşında beklemediği bir direnişle karşılaştı; Gorkha askerinin ünü — ve sonraki 'Gurkha' alaylarının kökeni — bu savaştan doğdu.",
  kaynak:"nepal (TDV): \"1814-1816 yıllarındaki İngiliz-Nepal savaşı\"; ayrıntı: John Pemble, The Invasion of Nepal" },

{ t:"1816-03-04", b:"Sugauli Antlaşması onaylandı; Terai'nin büyük kısmı İngilizler'e geçti", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","toprak-kayip"], yer_id:"Katmandu",
  d:"[Nepal — Gorkha] Nepal, Sikkim ve Kumaon-Garhwal üzerindeki iddialarından vazgeçti, verimli Terai topraklarının büyük kısmını bıraktı ve Katmandu'da bir İngiliz mukimi kabul etti. Krallık bağımsız kaldı ama dış siyaseti bundan sonra Kalküta'nın gölgesinde yürüdü.",
  kaynak:"nepal (TDV): \"Suguali Antlaşması ile nüfusun yoğunlaştığı Terai topraklarının büyük kısmı İngilizler'e geçti\"" },

{ t:"1846-09-14", b:"Kot Katliamı: Jung Bahadur Rana iktidarı ele geçirdi", tur:"darbe", onem:5, dunya:2, kapsam:"ic",
  etiket:["darbe","siyaset","darbe-siyasi"], yer_id:"Katmandu",
  d:"[Nepal — Rana] Saray avlusunda toplanan devlet adamlarının kılıçtan geçirilmesiyle Jung Bahadur tek hâkim güç hâline geldi. Kral saltanatta kaldı, iktidar ise babadan oğula geçen Rana başvezirlerine devredildi; bu düzen 1951'e kadar sürecekti.",
  kaynak:"nepal (TDV): \"1846 yılında Jung Bahadur Rana adlı kumandan, bir ayaklanma ile bütün devlet adamı ve yöneticileri öldürerek ... idaresini ele geçirdi\"" },

{ t:"1854-01-01", b:"Muluki Ain: Nepal'in ilk genel kanunnâmesi yürürlüğe girdi", tur:"idari", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukuk","reform","sosyal"], yer_id:"Katmandu",
  d:"[Nepal — Rana] Jung Bahadur'un çıkarttığı kanunnâme ceza, miras, evlilik ve kast ilişkilerini tek metinde topladı ve ülkenin bütün halklarını tek bir hiyerarşik düzene bağladı. Nepal'in modern devlet olma yolundaki en kapsamlı hukuk metnidir — ve toplumsal eşitsizliği de aynı ölçüde kalıcılaştırmıştır.",
  kaynak:"bulunamadı — TDV `nepal` maddesi kanunnâmeyi anmıyor. Dayanak: A. Höfer, The Caste Hierarchy and the State in Nepal: A Study of the Muluki Ain of 1854" },

{ t:"1856-03-24", b:"Thapathali Antlaşması Nepal-Tibet savaşını bitirdi", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","ticaret"], yer_id:"Katmandu",
  d:"[Nepal — Rana] İki yıl süren savaşın ardından Tibet, Nepal'e yıllık ödeme yapmayı ve Lhasa'da Nepalli tüccarlara imtiyaz tanımayı kabul etti; Nepal de Tibet'i dış saldırıya karşı korumayı üstlendi. Krallık, Çin ile İngiliz Hindistanı arasında kendi ayrı diplomatik alanını korudu.",
  kaynak:"bulunamadı — dayanak: L. Petech; Cambridge History of India, V" },

{ t:"1857-12-01", b:"Nepal birlikleri Hindistan ayaklanmasında İngilizler'in yanında savaştı", tur:"askeri", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","ittifak"], yer_id:"Leknev (Lucknow)",
  d:"[Nepal — Rana] Jung Bahadur Rana bizzat kumanda ettiği kuvvetle Leknev kuşatmasına katıldı. Bu destek karşılığında Nepal, Sugauli'de kaybettiği Terai topraklarının bir bölümünü geri aldı ve Rana idaresi İngiliz güvencesine kavuştu — bir iç savaşa dışarıdan katılmak, kaybedilmiş toprağı geri getirdi.",
  kaynak:"nepal (TDV): \"Bahadur Rana, İngilizler'e karşı 1857'de Hindistan'da gerçekleşen ayaklanmada Nepal askerlerinin İngiliz ordusunda savaşmasına izin verdi\"" },

{ t:"1901-06-26", b:"Dev Şemşer'in devrilmesiyle Rana idaresinde reform denemesi sona erdi", tur:"kriz", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","reform"], yer_id:"Katmandu",
  d:"[Nepal — Rana] Okul açmak, gazete çıkarmak ve kölelik reformuna girişmek isteyen başvezir, birkaç ay içinde aile içi bir darbeyle uzaklaştırıldı. Rana düzeninin kendi içinden gelen değişimi bile kaldıramadığı bu vaka, XX. yüzyıl başındaki durgunluğun sebebini açıklar.",
  kaynak:"bulunamadı — dayanak: Cambridge History of India, VI; John Whelpton, A History of Nepal" },

{ t:"1923-10-29", b:"Nepal, İngiltere ile tam bağımsızlığını tanıyan antlaşmayı müzakere ediyordu", tur:"diplomasi", onem:5, dunya:3, kapsam:"dis",
  etiket:["diplomasi","bagimsizlik"], yer_id:"Katmandu",
  d:"[Nepal — Rana] I. Dünya Savaşı'nda İngiltere'ye verilen asker desteğinin karşılığı olarak Nepal'in bağımsızlığını açıkça tanıyan antlaşma bu yıl içinde imzalandı (21 Aralık 1923). Krallık, Hint alt kıtasında hiç sömürgeleşmeden kalan tek büyük devlet olarak kaldı. (Atlasın ufku 29 Ekim 1923'te bittiği için madde bu güne yerleştirildi; antlaşmanın gerçek tarihi metinde açıkça yazılıdır.)",
  kaynak:"nepal (TDV): \"Nepal I. Dünya Savaşı'nın ardından tam bağımsızlığını ilân etti (1923)\"" },

// ═══════════════════════════════════════════════════════════════════════════
// RACPUT DEVLETLERİ — Mevâr (Sisodiya) · Mârvâr (Rathor) · Amber/Caypûr
// (Kachvâhâ) · Bîkâner · Caysalmer
// künye: racput  ·  1281-01-01 → 1923-10-29  ·  642 yıl
// ═══════════════════════════════════════════════════════════════════════════

{ t:"1301-07-11", b:"Alâeddin Halacî Ranthambor'u aldı; Hammîradeva öldürüldü", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","kusatma","toprak-kayip"], yer_id:"",
  d:"[Racput — Çevhân] Bir yıl süren kuşatmanın ardından düşen Ranthambor, Delhi Sultanlığı'nın Racputana'ya ilk büyük darbesidir. Kale düşerken kadınların toplu olarak ateşe atlaması (cevher), Racput destan geleneğinin kurucu sahnelerinden biri oldu. (yer_id boş: Ranthambor atlasın yerleşim kayıtlarında yok.)",
  kaynak:"bulunamadı — TDV'de Ranthambor maddesi yok. Dayanak: Peter Jackson, The Delhi Sultanate (Cambridge 1999); Cambridge History of India, III" },

{ t:"1303-08-26", b:"Çitor Kalesi Alâeddin Halacî'nin eline geçti", tur:"savas", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","kusatma","toprak-kayip"], yer_id:"Çitor (Chittorgarh)",
  d:"[Racput — Guhila/Mevâr] Racputana'nın en güçlü kalesi, aylarca süren kuşatmanın sonunda düştü ve sultan kaleyi oğlu Hızır Han'a verdi. Çitor'un ilk düşüşü, Mevâr'ın siyasî merkezini kaybettiği ve yeniden kuruluşunu dağlarda arayacağı uzun bir dönemi başlattı.",
  kaynak:"bulunamadı — TDV'de Çitor maddesi yok (`citor` 302). Dayanak: Peter Jackson, a.g.e.; Cambridge History of India, III" },

{ t:"1311-01-01", b:"Calor'un düşmesiyle Racputana'nın batı direnişi kırıldı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kayip"], yer_id:"",
  d:"[Racput — Songara Çevhân] Kânhadadeva'nın Calor'daki direnişinin kırılmasıyla Delhi, Gucerât yolunu tamamen açtı. Racput beylikleri bundan sonra yaklaşık bir nesil boyunca doğrudan sultanlık idaresi altında kaldı. (yer_id boş: Calor atlasın kayıtlarında yok.)",
  kaynak:"bulunamadı — dayanak: Peter Jackson, a.g.e.; Cambridge History of India, III" },

{ t:"1326-01-01", b:"Hammîr Singh Çitor'u geri alarak Sisodiya hânedanını kurdu", tur:"kurulus", onem:5, dunya:2, kapsam:"ic",
  etiket:["kurulus","hanedan","toprak-kazanc"], yer_id:"Çitor (Chittorgarh)",
  d:"[Racput — Mevâr] Tuğluk merkezinin dikkati Dekken'e kayınca Guhila soyunun bir yan kolundan gelen Hammîr, kaleyi geri aldı ve Mevâr'ı yeniden bağımsız bir devlet hâline getirdi. Bugün 'Mevâr Rânâları' denince anlaşılan Sisodiya çizgisi buradan başlar.",
  kaynak:"bulunamadı — dayanak: R. C. Majumdar (ed.), The Delhi Sultanate; Cambridge History of India, III" },

{ t:"1437-01-01", b:"Rânâ Kumbha, Mâlvâ sultanını Sârangpûr'da yendi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","zafer"], yer_id:"Mandu (Mândû)",
  d:"[Racput — Mevâr] Mevâr'ın en güçlü hükümdarı, Mâlvâ Sultanı Mahmûd Halacî'yi yenerek Racputana'nın önde gelen devleti hâline geldi. Zaferin anısına Çitor'da yükseltilen Vijaya Stambha (Zafer Kulesi), Racput mimarîsinin sembolü olacaktı. (yer_id: Sârangpûr kayıtlarda yok; Mâlvâ'nın merkezi Mandu alındı.)",
  kaynak:"bulunamadı — dayanak: Cambridge History of India, III; R. C. Majumdar (ed.), The Delhi Sultanate" },

{ t:"1448-01-01", b:"Çitor'da Vijaya Stambha (Zafer Kulesi) tamamlandı", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["mimari","kultur"], yer_id:"Çitor (Chittorgarh)",
  d:"[Racput — Mevâr] Dokuz katlı, otuz yedi metrelik kule Rânâ Kumbha'nın Mâlvâ zaferi için yaptırıldı ve yüzeyi Hindu tanrı kabartmalarıyla kaplandı. Bir askerî zaferin taşa çevrilmiş hâli olarak Racput kimliğinin görsel merkezi oldu.",
  kaynak:"bulunamadı — dayanak: Cambridge History of India, III; Percy Brown, Indian Architecture (Hindu dönemi)" },

{ t:"1509-01-01", b:"Rânâ Sangâ Mevâr tahtına çıktı", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukumdar"], yer_id:"Çitor (Chittorgarh)",
  d:"[Racput — Mevâr] Sangrâm Singh (Rânâ Sangâ) döneminde Mevâr, Mâlvâ ve Gucerât sultanlıklarını yenerek Kuzey Hindistan'ın en güçlü Hindu devleti hâline geldi. Delhi tahtı boşaldığında Racput birliğinin başına geçme ihtimali ilk defa gerçekçi göründü.",
  kaynak:"babur (TDV): \"Çitor Racası Rânâ Sangâ\"; ayrıntı: Cambridge History of India, IV" },

{ t:"1527-03-16", b:"Hânüvâ Meydan Savaşı: Bâbür, Rânâ Sangâ'yı bozguna uğrattı", tur:"savas", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","yenilgi","donum"], yer_id:"Bharatpûr",
  d:"[Racput — Mevâr / Bâbürlü] Biyâne yakınlarındaki Hânüvâ'da toplanan Racput konfederasyonu, Bâbür'ün ateşli silah ve araba istihkâmına dayalı düzeni karşısında dağıldı. Pânîpet Delhi'yi verdi, Hânüvâ Hindistan'ı verdi: bu yenilgiden sonra Racput devletleri bir daha ortak bir imparatorluk iddiası taşıyamadı. (yer_id: Hânüvâ kayıtlarda yok; savaş alanı bugünkü Bharatpûr çevresindedir.)",
  kaynak:"babur (TDV): \"taraflar Biyâne yakınlarındaki Hânüvâ'da karşılaştılar\" ve \"Çitor Racası Rânâ Sangâ'ya karşı kazanılan zafer\"" },

{ t:"1535-01-01", b:"Gucerât Sultanı Bahadır Şah Çitor'u aldı; kalede ikinci cevher yaşandı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","kusatma"], yer_id:"Çitor (Chittorgarh)",
  d:"[Racput — Mevâr] Rânâ Sangâ'nın ölümünden sonra zayıflayan Mevâr, Gucerât ordusunun kuşatmasına dayanamadı. Kale kısa süre sonra geri alındıysa da Mevâr'ın Racputana'daki önderliği bir daha eski gücüne kavuşmadı.",
  kaynak:"gucerat (TDV) — Bahadır Şah'ın kuzey seferleri; ayrıntı: Cambridge History of India, IV" },

{ t:"1562-01-01", b:"Amber Racası Bhâra Mel kızını Ekber Şah'a vererek Bâbürlü ittifakını kurdu", tur:"evlilik", onem:5, dunya:3, kapsam:"dis",
  etiket:["ittifak","evlilik","siyaset"], yer_id:"Caypûr (Jaipur)",
  d:"[Racput — Amber / Bâbürlü] Kachvâhâ hânedanının itaat arzı ve akrabalık bağı, Bâbürlü idaresinde Hindulara üst düzey görev yolunu açtı. Bu tek evlilik, imparatorluğun sonraki yüz elli yılını taşıyacak Racput subay sınıfını doğurdu — Ekber'in en kalıcı siyasî buluşu bir savaş değil bir akrabalıktı. (yer_id: Amber, Caypûr'un hemen kuzeyindedir; şehir 1727'de buraya taşındı.)",
  kaynak:"ekber-sah (TDV): \"Câypûr Racası Bhar Mel 1562'de Ekber Şah'a itaat arzederek kızını ona verdi. Böylece Racpût tesiri Bâbürlü sarayında nüfuz kazandı\"" },

{ t:"1568-02-23", b:"Ekber Şah Çitor'u fethetti", tur:"savas", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","kusatma","toprak-kayip"], yer_id:"Çitor (Chittorgarh)",
  d:"[Racput — Mevâr / Bâbürlü] Dört ay süren kuşatmanın ardından kale düştü; Ekber, direnişin sürmesini engellemek için kalenin savunucularını ve halkını kılıçtan geçirtti. Mevâr merkezini bir daha geri alamadı ve başşehrini batıdaki dağlık Udeypûr'a taşıdı.",
  kaynak:"ekber-sah (TDV): fethedilen yerler arasında \"Çitor\" sayılır; tarih ve ayrıntı: Cambridge History of India, IV" },

{ t:"1559-01-01", b:"Rânâ Udey Singh Udeypûr'u kurdu", tur:"kurulus", onem:4, dunya:1, kapsam:"ic",
  etiket:["sehircilik","baskent"], yer_id:"Udeypûr (Udaipur)",
  d:"[Racput — Mevâr] Çitor'un savunulamayacağını gören rânâ, Aravalli dağlarının içinde göl kenarında yeni bir başşehir kurdu. Coğrafyayı savunma stratejisine çeviren bu tercih, Mevâr'ın Bâbürlü baskısı altında varlığını sürdürmesini sağladı.",
  kaynak:"bulunamadı — dayanak: Cambridge History of India, IV; Percy Brown, Indian Architecture" },

{ t:"1576-06-18", b:"Haldigâtî Muharebesi: Mahârânâ Pratap ile Bâbürlü ordusu çarpıştı", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","direnis"], yer_id:"Udeypûr (Udaipur)",
  d:"[Racput — Mevâr / Bâbürlü] Ekber'in Racput kumandanı Man Singh'in yönettiği ordu ile Mahârânâ Pratap'ın kuvvetleri dar bir dağ geçidinde karşılaştı. Muharebe Bâbürlü lehine bitse de Pratap ele geçirilemedi ve dağlarda yirmi yıl süren bir gerilla direnişi başlattı — Racputların Racputlarla savaştığı bu meydan, imparatorluğun hem gücünün hem çelişkisinin resmidir. (yer_id: Haldigâtî geçidi Udeypûr'un kuzeyindedir.)",
  kaynak:"bulunamadı — TDV `ekber-sah` maddesi muharebeyi anmıyor. Dayanak: Cambridge History of India, IV; Satish Chandra, Medieval India" },

{ t:"1597-01-19", b:"Mahârânâ Pratap öldü", tur:"olum", onem:5, dunya:2, kapsam:"ic",
  etiket:["olum","hukumdar"], yer_id:"Udeypûr (Udaipur)",
  d:"[Racput — Mevâr] Ömrünü Bâbürlü tâbiiyetini reddederek geçiren rânâ, ölümünden önce Çitor dışındaki toprakların çoğunu geri almıştı. Boyun eğmeyi reddeden hükümdar imgesi, Racput hâfızasında bir ölçüt hâline geldi.",
  kaynak:"bulunamadı — dayanak: Cambridge History of India, IV; Satish Chandra, Medieval India" },

{ t:"1605-01-01", b:"Çâvend'de Râgamâlâ dizisi resmedildi; Mevâr minyatür ekolü doğdu", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["kultur","minyatur"], yer_id:"Udeypûr (Udaipur)",
  d:"[Racput — Mevâr] Ressam Nisârüddin'in Çâvend'de tamamladığı Râgamâlâ albümü, tarihi kesin olarak bilinen ilk Racput minyatür dizisidir. Bâbürlü sarayının İran etkisindeki üslûbundan ayrı, parlak renkli ve halk anlatısına yakın bir resim dili burada kuruldu. (yer_id: Çâvend, Udeypûr yakınlarındaki geçici başşehirdir.)",
  kaynak:"bulunamadı — dayanak: Cambridge History of India, IV; B. N. Goswamy, Indian painting üzerine standart çalışmaları" },

{ t:"1615-02-05", b:"Mevâr, Cihangir'le antlaşma yaparak Bâbürlü üstünlüğünü kabul etti", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","tabiiyet"], yer_id:"Udeypûr (Udaipur)",
  d:"[Racput — Mevâr / Bâbürlü] Şehzade Hurrem'in (Şah Cihan) yürüttüğü sefer sonunda Rânâ Amar Singh anlaşmaya oturdu. Mevâr, Racput devletleri arasında en son boyun eğen oldu; buna karşılık rânâ'nın bizzat saraya gitmemesi ve kız vermemesi kabul edildi — teslimiyet, şartları pazarlık edilmiş bir teslimiyetti.",
  kaynak:"sah-cihan (TDV): \"Bâbürlü ordusunda ilk önemli faaliyeti 1024'te (1615) Racpûtlar'a karşı başarıyla tamamladığı Mevar seferidir\"" },

{ t:"1659-03-23", b:"Dârâ Şükûh, Ecmîr yakınlarındaki Deorâî'de bozguna uğradı", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","taht-kavgasi"], yer_id:"Ecmîr (Ajmer)",
  d:"[Racput / Bâbürlü] Racput desteğine güvenen şehzade, Evrengzîb karşısında üç gün süren savaşı kaybetti. Racput devletlerinin taht kavgasında seçtiği taraf, sonraki yirmi yılın Bâbürlü-Racput ilişkisini belirledi.",
  kaynak:"evrengzib (TDV): \"Dârâ Şükûh'u da Ecmîr yakınlarında üç gün süren savaşta bozguna uğrattı (23 Mart 1659)\"" },

{ t:"1679-04-02", b:"Evrengzîb cizyeyi yeniden koydu", tur:"idari", onem:5, dunya:2, kapsam:"dis",
  etiket:["vergi","din","kriz"], yer_id:"", kapsam_genis:true,
  d:"[Bâbürlü / Racput] Ekber'in kaldırdığı gayri müslim vergisinin yüz yıl sonra yeniden konması, Racput devletleriyle imparatorluk arasındaki uzlaşmanın temelini sarstı. Vergi bir maliye kararıydı; sonucu ise imparatorluğun en sadık askerî ortağını kaybetmesi oldu.",
  kaynak:"evrengzib (TDV) — Racpûtlar'ın destek çekmesi ve isyanlar bölümü; tarih için Cambridge History of India, IV" },

{ t:"1679-01-01", b:"Mârvâr'ın ilhakı üzerine Bâbürlü-Racput Savaşı başladı", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","isyan"], yer_id:"Codhpûr (Jodhpur)",
  d:"[Racput — Mârvâr / Bâbürlü] Mahârâca Cesvent Singh'in 1678'de ölümünün ardından Evrengzîb Codhpûr'u doğrudan idareye bağlamak isteyince Rathorlar ayaklandı; Mevâr da onlara katıldı. Bir asırlık ittifak, tek bir veraset müdahalesiyle savaşa döndü.",
  kaynak:"evrengzib (TDV): \"1678 yılında Mârvârlı Maharaca Cesvent Singh'in ölümünden sonra Bâbürlü-Racpût ilişkileri bozuldu ve taraflar arasında savaş başladı\"" },

{ t:"1681-01-01", b:"Evrengzîb, Rânâ Râc Singh'le barış antlaşması imzaladı", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","baris"], yer_id:"Ecmîr (Ajmer)",
  d:"[Racput — Mevâr / Bâbürlü] Oğlu Ekber'in isyanı üzerine cepheyi kapatmak zorunda kalan padişah Mevâr'la anlaştı; Mârvâr'ın direnişi ise yıllarca sürdü. İmparatorluk aynı anda Dekken'de, Racputana'da ve kendi hânedanı içinde savaşıyordu.",
  kaynak:"evrengzib (TDV): \"Evrengzîb Ecmîr'de ordugâh kurup savaşı yakından takip ettiği sırada oğlu Ekber Şah'ın isyan etmesi üzerine Rânâ Rac Singh'le barış antlaşması yaptı (1681)\"" },

{ t:"1707-01-01", b:"Acît Singh Codhpûr'u geri aldı", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"ic",
  etiket:["toprak-kazanc","bagimsizlik"], yer_id:"Codhpûr (Jodhpur)",
  d:"[Racput — Mârvâr] Evrengzîb'in ölümüyle Mârvâr, otuz yıl süren Bâbürlü işgalinden kurtuldu. Racput devletleri bundan sonra imparatorluğun tâbisi değil, taht kavgalarında taraf tutan bağımsız güçler gibi davrandı.",
  kaynak:"bulunamadı — dayanak: Satish Chandra, Parties and Politics at the Mughal Court; Cambridge History of India, IV" },

{ t:"1708-01-01", b:"Mevâr, Mârvâr ve Amber üçlü Racput ittifakını kurdu", tur:"ittifak", onem:4, dunya:2, kapsam:"ic",
  etiket:["ittifak","siyaset"], yer_id:"Udeypûr (Udaipur)",
  d:"[Racput] Debâri'de bir araya gelen üç hânedan, Bâbürlü müdahalesine karşı ortak hareket etmeye ve birbirlerine kız vermeye karar verdi. İttifak kısa ömürlü oldu — ortak düşman kalkınca aralarındaki veraset çekişmeleri geri döndü.",
  kaynak:"bulunamadı — dayanak: Satish Chandra, Parties and Politics at the Mughal Court" },

{ t:"1724-01-01", b:"Savâî Cey Singh II Delhi'de ilk rasathanesini kurdu", tur:"bilim", onem:4, dunya:2, kapsam:"dis",
  etiket:["astronomi","bilim"], yer_id:"Delhi",
  d:"[Racput — Amber] Amber racası, Bâbürlü padişahı Muhammed Şah'ın izniyle taş ve kireçten dev astronomi aletleri kurdurdu. Yantra Mantra adı verilen bu yapılar, teleskop çağının eşiğinde çıplak gözle ulaşılabilecek en yüksek hassasiyeti hedefliyordu.",
  kaynak:"bulunamadı — TDV'de müstakil madde bulunamadı. Dayanak: Cambridge History of India, IV; G. R. Kaye, The Astronomical Observatories of Jai Singh" },

{ t:"1727-11-18", b:"Caypûr şehri kuruldu", tur:"sehircilik", onem:5, dunya:3, kapsam:"ic",
  etiket:["sehircilik","baskent","mimari"], yer_id:"Caypûr (Jaipur)",
  d:"[Racput — Amber] Cey Singh II, dar bir dağ vadisindeki Amber'i bırakıp ovada ızgara planlı, dokuz bloklu yeni bir başşehir kurdurdu. Hint mimarî geleneğiyle geometrik şehir planlamasını birleştiren Caypûr, çağının en bilinçli tasarlanmış şehirlerinden biridir.",
  kaynak:"bulunamadı — dayanak: Cambridge History of India, IV; Percy Brown, Indian Architecture" },

{ t:"1732-01-01", b:"Zîc-i Muhammed Şâhî tamamlandı", tur:"bilim", onem:4, dunya:3, kapsam:"ic",
  etiket:["astronomi","bilim","kitap"], yer_id:"Caypûr (Jaipur)",
  d:"[Racput — Amber] Cey Singh'in rasathanelerinde yapılan ölçümlerle hazırlanan yıldız cetveli, Uluğ Bey'in zîcinin Hindistan'daki devamı sayılır. Cizvit misyonerler aracılığıyla Avrupa astronomi eserlerini de inceleyen raca, Hint, İslâm ve Avrupa geleneklerini tek bir çalışmada buluşturdu.",
  kaynak:"bulunamadı — dayanak: G. R. Kaye, a.g.e.; Cambridge History of India, IV" },

{ t:"1734-07-17", b:"Hurda Konferansı: Racput devletleri Maratha baskısına karşı birleşme kararı aldı", tur:"diplomasi", onem:4, dunya:2, kapsam:"ic",
  etiket:["ittifak","diplomasi"], yer_id:"Ecmîr (Ajmer)",
  d:"[Racput] Maratha akınlarının Racputana'ya yayılması üzerine bütün racalar bir araya geldi ve ortak savunma sözü verdi. Karar kâğıt üstünde kaldı; birkaç yıl içinde devletler ayrı ayrı Marathalarla anlaşmayı tercih etti. (yer_id: Hurda, Ecmîr'in güneyindedir.)",
  kaynak:"bulunamadı — dayanak: Satish Chandra, Parties and Politics at the Mughal Court; Cambridge History of India, IV" },

{ t:"1818-01-06", b:"Mevâr İngilizler'le tâbilik antlaşması imzaladı", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","tabiiyet","somurge"], yer_id:"Udeypûr (Udaipur)",
  d:"[Racput — Mevâr] Maratha ve Pindârî yağmalarından bunalan Mevâr, dış siyasetini Doğu Hindistan Şirketi'ne devretti ve koruma karşılığında vergi ödemeyi kabul etti. Aynı yıl içinde Mârvâr, Bîkâner, Caypûr ve Caysalmer de benzer antlaşmalar imzaladı; Racputana bir bütün olarak İngiliz himayesine girdi.",
  kaynak:"bulunamadı — TDV'de Racput maddesi yok. Dayanak: Cambridge History of India, V; C. U. Aitchison, Treaties, Engagements and Sanads (Racputana cildi)" },

{ t:"1857-06-01", b:"Racput devletleri Hindistan ayaklanmasında İngiliz idaresine bağlı kaldı", tur:"siyaset", onem:4, dunya:3, kapsam:"dis",
  etiket:["siyaset","isyan"], yer_id:"Ecmîr (Ajmer)",
  d:"[Racput] Ayaklanma Racputana'daki İngiliz garnizonlarına da sıçradı, fakat racaların hiçbiri isyana katılmadı. Bu tercih, 1858 sonrası kurulan Taç idaresinde Racput devletlerinin iç muhtariyetini korumasını sağladı — ve prensliklerin İngiliz Hindistanı'nda 1947'ye kadar sürecek yerini belirledi.",
  kaynak:"bulunamadı — dayanak: Cambridge History of India, V-VI; Barbara Ramusack, The Indian Princes and their States" },

// ═══════════════════════════════════════════════════════════════════════════
// LADAKH — Namgyal hânedanı
// künye: ladak  ·  1281-01-01 → 1834-01-01  ·  553 yıl
// ═══════════════════════════════════════════════════════════════════════════

{ t:"1281-01-01", b:"Ladakh, Maryul krallığı olarak Batı Tibet hânedanının elindeydi", tur:"kurulus", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","siyaset"], yer_id:"Leh (Ladakh)",
  d:"[Ladakh — Maryul] İndus'un yukarı vadisindeki krallık, Tibet İmparatorluğu'nun dağılmasından sonra kurulan Batı Tibet hânedanlarının bir koluydu. Budist manastır düzeni ve Tibet dili, bölgeyi Hindistan'dan çok Lhasa'ya bağlıyordu.",
  kaynak:"bulunamadı — TDV'de Ladakh maddesi yok (`ladakh` ve `ladak` 302). Dayanak: L. Petech, The Kingdom of Ladakh c. 950-1842 (Roma 1977)" },

{ t:"1460-01-01", b:"Lhaçen Bhagan Namgyal hânedanını kurdu", tur:"kurulus", onem:5, dunya:1, kapsam:"ic",
  etiket:["kurulus","hanedan"], yer_id:"Leh (Ladakh)",
  d:"[Ladakh — Namgyal] Basgo ve Şey beylikleri arasında bölünmüş ülkeyi birleştiren Bhagan, 'zafer' anlamına gelen Namgyal adını hânedan adı yaptı. Bu hânedan, dört asır boyunca Ladakh'ı yönetecek ve Orta Asya'nın en yüksek irtifadaki devletini ayakta tutacaktı.",
  kaynak:"bulunamadı — dayanak: L. Petech, The Kingdom of Ladakh c. 950-1842" },

{ t:"1532-01-01", b:"Mirza Haydar Duglat'ın seferi Ladakh'ı yağmaladı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","akin"], yer_id:"Leh (Ladakh)",
  d:"[Ladakh — Namgyal] Kâşgar'dan gelen Duglat kuvvetleri İndus vadisine girip manastırları yağmaladı ve Tibet'e doğru ilerlemeye çalıştı; seferi durduran şey direnişten çok irtifa ve kış oldu. Târîh-i Reşîdî'nin bu bölümü, Ladakh hakkındaki en erken müslüman gözlemidir.",
  kaynak:"bulunamadı — dayanak: Mirza Haydar Duglat, Târîh-i Reşîdî (neşir ve çevirisi); L. Petech, a.g.e." },

{ t:"1600-01-01", b:"Skardu emîri Ali Mîr Şîr Han Ladakh'ı yendi; Camyang Namgyal esir düştü", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","yenilgi","evlilik"], yer_id:"",
  d:"[Ladakh — Namgyal] Baltistan'ın müslüman emîri Ladakh'ı istilâ etti; barış, kralın emîrin kızı Gyal Hatun ile evlenmesiyle kuruldu. Bu evlilikten doğan Senge Namgyal, hem Budist bir kralın oğlu hem müslüman bir emîrin torunuydu — ve Ladakh'ın en büyük hükümdarı olacaktı. (yer_id boş: Skardu atlasın kayıtlarında yok.)",
  kaynak:"bulunamadı — dayanak: L. Petech, The Kingdom of Ladakh; A. H. Francke, Antiquities of Indian Tibet" },

{ t:"1616-01-01", b:"Senge Namgyal tahta çıktı", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukumdar","mimari"], yer_id:"Leh (Ladakh)",
  d:"[Ladakh — Namgyal] 'Aslan Kral' lakabıyla anılan hükümdar, Leh'i başşehir yapıp dokuz katlı sarayını inşa ettirdi, Hemis ve Hanle manastırlarını kurdu ve krallığı Batı Tibet'e kadar genişletti. Ladakh'ın siyasî ve mimarî zirvesi onun saltanatıdır.",
  kaynak:"bulunamadı — dayanak: L. Petech, a.g.e.; Cambridge History of India ilgili bölümleri" },

{ t:"1630-01-01", b:"Hemis Manastırı kuruldu", tur:"din", onem:4, dunya:1, kapsam:"ic",
  etiket:["din","mimari","manastir"], yer_id:"Leh (Ladakh)",
  d:"[Ladakh — Namgyal] Senge Namgyal'in Drukpa Kagyü tarikatına vakfettiği manastır, Ladakh'ın en büyük ve en zengin dinî kurumu oldu. Manastırlara toprak bağışlamak Ladakh'ta hem bir ibadet hem de bir devlet idaresi biçimiydi: vadi vadi örgütlenen manastırlar, kralın taşradaki gözüydü.",
  kaynak:"bulunamadı — dayanak: L. Petech, a.g.e.; D. Snellgrove – T. Skorupski, The Cultural Heritage of Ladakh" },

{ t:"1639-01-01", b:"Keşmir valisi Zafer Han'ın seferi Ladakh'ı Bâbürlü tâbiiyetine soktu", tur:"tabiiyet", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","tabiiyet"], yer_id:"Leh (Ladakh)",
  d:"[Ladakh — Namgyal / Bâbürlü] Şah Cihan'ın Keşmir valisi dağ geçitlerini aşarak Ladakh'ı vergiye bağladı; kral, Leh'te bir cami yaptırmayı ve Bâbürlü adına sikke bastırmayı kabul etti. Himalaya'nın kuzey yüzü ilk defa bir Hint imparatorluğunun nüfuz alanına girdi.",
  kaynak:"kesmir (TDV) — Bâbürlü Keşmir idaresi; ayrıntı: L. Petech, The Kingdom of Ladakh" },

{ t:"1679-01-01", b:"Tibet-Ladakh-Bâbürlü Savaşı başladı", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","din","ittifak"], yer_id:"Leh (Ladakh)",
  d:"[Ladakh — Namgyal] Ladakh'ın Bhutan yanlısı Drukpa tarikatını desteklemesi, Lhasa'daki Gelugpa hükûmetini harekete geçirdi ve Tibet-Moğol ordusu Ladakh'a girdi. Bir mezhep çekişmesinden doğan savaş, üç devleti — Ladakh, Tibet ve Bâbürlü Keşmir'ini — aynı cepheye taşıdı.",
  kaynak:"bulunamadı — dayanak: L. Petech, The Kingdom of Ladakh; Z. Ahmad, Sino-Tibetan Relations in the Seventeenth Century" },

{ t:"1683-01-01", b:"Bâbürlü yardımı Basgo kuşatmasını kaldırdı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","ittifak"], yer_id:"Leh (Ladakh)",
  d:"[Ladakh — Namgyal / Bâbürlü] Üç yıl kuşatılan Basgo Kalesi, Keşmir'den gelen Bâbürlü kuvvetleriyle kurtarıldı. Yardımın bedeli ağırdı: Ladakh, Leh'te cuma camii yaptırmayı, Bâbürlü sikkesi kullanmayı ve Keşmir'e yıllık vergi ödemeyi kabul etti. (yer_id: Basgo, Leh'in batısındadır.)",
  kaynak:"bulunamadı — dayanak: L. Petech, a.g.e.; Cambridge History of India, IV" },

{ t:"1684-01-01", b:"Tingmosgang Antlaşması Ladakh-Tibet sınırını çizdi", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","sinir","ticaret"], yer_id:"Leh (Ladakh)",
  d:"[Ladakh — Namgyal] Antlaşma Ladakh'ın batı sınırını Lhari akarsuyunda sabitledi, Batı Tibet'i Lhasa'ya bıraktı ve Ladakh'ın Lhasa'ya üç yılda bir hediye göndermesini şart koştu. Yün ticareti tekeli de düzenlendi; bu metin, XX. yüzyıla kadar bölgedeki sınır tartışmalarının dayanağı oldu.",
  kaynak:"bulunamadı — dayanak: L. Petech, The Kingdom of Ladakh; A. H. Francke, Antiquities of Indian Tibet" },

{ t:"1834-01-01", b:"Zorâver Singh'in Dogra ordusu Ladakh'ı fethetti", tur:"isgal", onem:5, dunya:3, kapsam:"dis",
  etiket:["isgal","son","toprak-kayip"], yer_id:"Leh (Ladakh)",
  d:"[Ladakh — Namgyal] Cammû racası Gulâb Singh'in kumandanı, kış şartlarında dağ geçitlerini aşarak Ladakh'a girdi ve Namgyal hânedanının bağımsızlığına son verdi. Krallık Cammû'ya bağlandı; 1846'da kurulacak Cammû-Keşmir prensliğinin en büyük parçası bu fetihle elde edildi.",
  kaynak:"bulunamadı — TDV'de Ladakh maddesi yok. Dayanak: L. Petech, The Kingdom of Ladakh c. 950-1842; Cambridge History of India, V" },

// ═══════════════════════════════════════════════════════════════════════════
// TRAVANKUR — Venâd → Travankur Krallığı
// künye: travankur  ·  1281-01-01 → 1923-10-29  ·  642 yıl
// ═══════════════════════════════════════════════════════════════════════════

{ t:"1299-01-01", b:"Ravi Varma Kulaşekhara Venâd tahtına çıktı", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukumdar","toprak-kazanc"], yer_id:"Kolam (Quilon)",
  d:"[Travankur — Venâd] Malabar sahilinin güney ucundaki küçük krallığın başına geçen hükümdar, Pândya ve Çola topraklarına yürüyerek Venâd'ı Güney Hindistan'ın belirleyici gücü hâline getirdi. Travankur'un hânedan çizgisi bu saltanattan başlatılır.",
  kaynak:"bulunamadı — TDV'de Travankur maddesi yok (`travankur` 302). Dayanak: A. Sreedhara Menon, A Survey of Kerala History; K. A. Nilakanta Sastri, A History of South India" },

{ t:"1312-01-01", b:"Ravi Varma Kulaşekhara Kançi'de imparatorluk tacını giydi", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis",
  etiket:["fetih","toren"], yer_id:"",
  d:"[Travankur — Venâd] Pândya taht kavgasından yararlanan Venâd kralı Madurai'yi ve ardından Kançipuram'ı aldı; kendini bütün Güney Hindistan'ın hükümdarı ilân etti. Zafer kalıcı olmadı — birkaç yıl içinde Delhi Sultanlığı'nın Dekken seferleri bölgenin bütün dengelerini alt üst etti. (yer_id boş: Kançipuram atlasın yerleşim kayıtlarında yok.)",
  kaynak:"bulunamadı — dayanak: K. A. Nilakanta Sastri, A History of South India; A. Sreedhara Menon, a.g.e." },

{ t:"1503-01-01", b:"Portekizliler Kolam'da ticaret merkezi kurdu", tur:"ekonomi", onem:4, dunya:3, kapsam:"dis",
  etiket:["ticaret","somurge","baharat"], yer_id:"Kolam (Quilon)",
  d:"[Travankur — Venâd] Karabiber ticaretinin merkezlerinden Kolam'da açılan Portekiz acentesi, Avrupa'nın Malabar sahiline ilk kalıcı yerleşmesidir. Venâd, komşu Koçin ve Kalikut arasındaki Portekiz rekabetinde denge siyaseti yürütmeyi tercih etti.",
  kaynak:"bulunamadı — dayanak: A. Sreedhara Menon, A Survey of Kerala History; M. N. Pearson, The Portuguese in India (Cambridge)" },

{ t:"1661-01-01", b:"Hollandalılar Kolam'ı Portekizliler'den aldı", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["deniz","somurge","ticaret"], yer_id:"Kolam (Quilon)",
  d:"[Travankur — Venâd] Hollanda Doğu Hindistan Şirketi'nin Malabar seferi, Portekiz'in bir buçuk asırlık baharat tekelini sona erdirdi. Venâd bundan sonra Hollanda ile hem ticaret ortağı hem rakip olarak yaşamak zorunda kaldı.",
  kaynak:"bulunamadı — dayanak: A. Sreedhara Menon, a.g.e.; Cambridge History of India, V" },

{ t:"1729-01-01", b:"Marthanda Varma tahta çıktı; Travankur Krallığı kuruldu", tur:"kurulus", onem:5, dunya:2, kapsam:"ic",
  etiket:["kurulus","hukumdar","reform"], yer_id:"Trivandrum (Thiruvananthapuram)",
  d:"[Travankur] Feodal beylerin (Ettuveettil Pillamar) vesayetini kanlı biçimde kıran genç hükümdar, dağınık Venâd'ı merkezî bir krallığa dönüştürdü ve modern Travankur'un kurucusu sayıldı. Düzenli ordu, düzenli vergi ve tek merkez — üçü de onun eseridir.",
  kaynak:"bulunamadı — dayanak: A. Sreedhara Menon, A Survey of Kerala History; Cambridge History of India, V" },

{ t:"1741-08-10", b:"Kolaçel Muharebesi: Travankur, Hollanda Doğu Hindistan Şirketi'ni yendi", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","zafer","somurge"], yer_id:"",
  d:"[Travankur] Marthanda Varma'nın ordusu, Hollanda çıkarma kuvvetini sahilde bozguna uğrattı ve kumandan De Lannoy dahil çok sayıda esir aldı. Bir Asya devletinin bir Avrupa sömürge şirketini açık muharebede yenmesi nâdirdi; Hollanda'nın Malabar'daki yayılması bu günden sonra durdu. (yer_id boş: Kolaçel atlasın kayıtlarında yok.)",
  kaynak:"bulunamadı — dayanak: A. Sreedhara Menon, a.g.e.; Cambridge History of India, V" },

{ t:"1745-01-01", b:"De Lannoy Travankur ordusunu Avrupa usulünde yeniden düzenledi", tur:"askeri", onem:4, dunya:2, kapsam:"ic",
  etiket:["askeri","reform","teknoloji"], yer_id:"Trivandrum (Thiruvananthapuram)",
  d:"[Travankur] Esir düşen Hollandalı kumandan, kralın hizmetine girerek piyade talimini, topçuyu ve istihkâm yapımını Travankur ordusuna taşıdı. Yenilen tarafın subayını orduyu kurmakla görevlendirmek, XVIII. yüzyıl Hindistan'ında askerî modernleşmenin tipik yoluydu.",
  kaynak:"bulunamadı — dayanak: A. Sreedhara Menon, a.g.e.; Cambridge History of India, V" },

{ t:"1750-01-03", b:"Trippadidânam: kral ülkeyi Padmanâbha tapınağına bağışladı", tur:"din", onem:5, dunya:2, kapsam:"ic",
  etiket:["din","hukuk","mesruiyet"], yer_id:"Trivandrum (Thiruvananthapuram)",
  d:"[Travankur] Marthanda Varma krallığı resmen Padmanâbhasvâmî tapınağının tanrısına devretti ve kendisini onun 'kulu' (dâsa) sayarak yönetmeye devam etti. Egemenliği bir tanrıya bağlamak, hânedan içi taht kavgalarını meşruiyet zemininde bitiren olağan dışı bir hukukî çözümdü.",
  kaynak:"bulunamadı — dayanak: A. Sreedhara Menon, A Survey of Kerala History" },

{ t:"1789-12-29", b:"Tipu Sultan'ın ordusu Nedumkotta hattına saldırdı", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","savunma"], yer_id:"Koçin (Kochi)",
  d:"[Travankur / Meysûr] Travankur'un kuzey sınırındaki uzun toprak-sur hattına yapılan gece saldırısı püskürtüldü ve Tipu'nun kendisi yaralanarak geri çekildi. Saldırı, İngilizler'in müttefiki sayılan Travankur'a yapıldığı için Üçüncü Meysûr Savaşı'nın doğrudan sebebi oldu. (yer_id: Nedumkotta hattı Koçin sınırı boyunca uzanıyordu.)",
  kaynak:"meysur ilgili TDV maddesi bulunamadı; dayanak: A. Sreedhara Menon, a.g.e.; Cambridge History of India, V" },

{ t:"1805-01-01", b:"Travankur İngilizler'le tâbilik antlaşması imzaladı", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","tabiiyet","somurge"], yer_id:"Trivandrum (Thiruvananthapuram)",
  d:"[Travankur] Yardımcı kuvvet (subsidiary alliance) düzenine bağlanan krallık, ağır bir yıllık ödeme karşılığında iç işlerinde serbest kaldı. Bağımsız dış siyaset sona erdi; Travankur, İngiliz Hindistanı'nın en büyük prensliklerinden biri olarak XX. yüzyıla girdi.",
  kaynak:"bulunamadı — dayanak: C. U. Aitchison, Treaties, Engagements and Sanads; Cambridge History of India, V" },

{ t:"1809-01-11", b:"Velu Thampi Dalavâ Kundara Bildirisi'ni okuyarak İngilizler'e karşı ayaklandı", tur:"isyan", onem:5, dunya:2, kapsam:"dis",
  etiket:["isyan","direnis"], yer_id:"Kolam (Quilon)",
  d:"[Travankur] Başbakan Velu Thampi, halkı İngiliz mukiminin idaresine karşı silâhlanmaya çağıran bildiriyi ilân etti. Ayaklanma birkaç ay içinde bastırıldı ve Velu Thampi hayatına son verdi; Travankur'un iç muhtariyeti daha da daraldı. (yer_id: Kundara, Kolam yakınlarındadır.)",
  kaynak:"bulunamadı — dayanak: A. Sreedhara Menon, A Survey of Kerala History; Cambridge History of India, V" },

{ t:"1817-06-01", b:"Rani Gouri Parvati Bai eğitim fermanını ilân etti", tur:"idari", onem:5, dunya:3, kapsam:"ic",
  etiket:["egitim","reform","sosyal"], yer_id:"Trivandrum (Thiruvananthapuram)",
  d:"[Travankur] Devletin bütün tebaasının eğitim masrafını üstlendiğini bildiren ferman, Hindistan'da bir hükümdarın halk eğitimini devlet görevi saydığı en erken metinlerdendir. Kerala'nın bugünkü yüksek okuryazarlık düzeyinin kökleri bu karara bağlanır.",
  kaynak:"bulunamadı — dayanak: A. Sreedhara Menon, a.g.e.; Robin Jeffrey, The Decline of Nayar Dominance" },

{ t:"1859-07-26", b:"Çannâr Bildirisi: alt kastlı kadınlara üst beden örtünme hakkı tanındı", tur:"sosyal", onem:5, dunya:3, kapsam:"ic",
  etiket:["sosyal","kast","hukuk"], yer_id:"Trivandrum (Thiruvananthapuram)",
  d:"[Travankur] Otuz yılı aşkın süren direnişin ardından çıkarılan ferman, Nâdâr kadınlarının üst bedenlerini örtmesini serbest bıraktı. Bir giyim kuralı gibi görünen mesele, kast düzeninin bedende görünür kılınmasına karşı ilk büyük toplumsal zaferdi.",
  kaynak:"bulunamadı — dayanak: Robin Jeffrey, The Decline of Nayar Dominance: Society and Politics in Travancore; A. Sreedhara Menon, a.g.e." },

{ t:"1888-01-01", b:"Travankur Kanun Meclisi kuruldu", tur:"idari", onem:4, dunya:3, kapsam:"ic",
  etiket:["idari","reform","meclis"], yer_id:"Trivandrum (Thiruvananthapuram)",
  d:"[Travankur] Hint prenslikleri arasında ilk defa bir yasama meclisi burada toplandı. Danışma yetkisi sınırlıydı, fakat prenslik idaresinin temsilî kurumlara açılabileceğini gösteren örnek oldu ve 1904'te halk meclisiyle genişletildi.",
  kaynak:"bulunamadı — dayanak: Robin Jeffrey, a.g.e.; Barbara Ramusack, The Indian Princes and their States (Cambridge)" },

{ t:"1891-01-01", b:"Malayâlî Muhtırası devlet görevlerinde yerli halka pay istedi", tur:"sosyal", onem:4, dunya:2, kapsam:"ic",
  etiket:["sosyal","siyaset","dilekce"], yer_id:"Trivandrum (Thiruvananthapuram)",
  d:"[Travankur] On binden fazla imzayla krala sunulan dilekçe, üst düzey memurlukların Tamil brahmanlarının elinde toplanmasına itiraz etti. Hindistan'da kitlesel imza toplayan ilk siyasî dilekçelerden biridir ve bölge siyasetinin temsil eksenini belirlemiştir.",
  kaynak:"bulunamadı — dayanak: Robin Jeffrey, The Decline of Nayar Dominance" },

// ═══════════════════════════════════════════════════════════════════════════
// MANİPUR — Ningthouca hânedanı
// künye: manipur  ·  1281-01-01 → 1923-10-29  ·  642 yıl
// ═══════════════════════════════════════════════════════════════════════════

{ t:"1281-01-01", b:"Manipûr vadisi Ningthouca hânedanının idaresindeydi", tur:"kurulus", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","siyaset"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Assam ile Burma arasındaki dağların ortasındaki vadi, Meitei halkının Ningthouca hânedanı tarafından yönetiliyordu. Saray vakayinâmesi Çeitharol Kumbaba, hükümdarların yıllarını kesintisiz kaydeden ender Güneydoğu Asya kaynaklarındandır.",
  kaynak:"bulunamadı — TDV'de Manipûr maddesi yok (`manipur` 302). Dayanak: Gangmumei Kamei, A History of Manipur; Çeitharol Kumbaba (saray vakayinâmesi neşri)" },

{ t:"1467-01-01", b:"Kyamba tahta çıktı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar","toprak-kazanc"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Uzun saltanatı boyunca Kyamba vadinin çevresindeki tepe kabilelerini bağladı ve doğudaki Şan devletiyle ilişki kurdu. Manipûr'un bir vadi beyliğinden bölgesel bir krallığa dönüşmesi onun dönemine tarihlenir.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, A History of Manipur" },

{ t:"1470-01-01", b:"Manipûr ile Pong (Şan) krallığı Kyang Khampat'ı birlikte aldı", tur:"ittifak", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","ittifak"], yer_id:"",
  d:"[Manipûr — Ningthouca] Meitei ordusu Şan müttefikiyle Kabav vadisine yürüdü; ganimet olarak getirilen Vişnu heykeli, Manipûr'da Hindu tapınmasının ilk resmî izi sayılır. Askerî bir sefer, bölgenin din tarihini de değiştirdi. (yer_id boş: Kyang Khampat atlasın kayıtlarında yok.)",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, A History of Manipur; Çeitharol Kumbaba" },

{ t:"1606-01-01", b:"Khagemba doğudan gelen istilâyı püskürttü; müslüman esirler vadiye yerleştirildi", tur:"savas", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","goc","din"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Kaçâr üzerinden gelen kuvvetleri yenen kral, esir aldığı müslüman askerleri vadiye yerleştirdi ve onlara toprak verdi. Manipûr'un bugünkü Pangal (Meitei müslüman) cemaati buradan doğdu; tuğla yapımı ve yeni zanaatlar da onlarla birlikte geldi.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, A History of Manipur; Çeitharol Kumbaba" },

{ t:"1709-01-01", b:"Pamheiba (Garîb Nevâz) tahta çıktı", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukumdar","reform"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Kırk yıla yakın süren saltanatı Manipûr'un en güçlü dönemidir: ordu yeniden düzenlendi, Burma'ya arka arkaya seferler yapıldı ve devletin adı bu dönemde 'Manipûr' olarak yerleşti.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, A History of Manipur" },

{ t:"1717-01-01", b:"Garîb Nevâz Vaişnava Hinduizmini devlet dini yaptı", tur:"din", onem:5, dunya:2, kapsam:"ic",
  etiket:["din","reform","kultur"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Bengal'den gelen Ramanandî öğretisini benimseyen kral, Meitei geleneksel inancının (Sanamahi) yerine Vaişnava tapınmasını geçirdi; eski kutsal metinler yakıldı ve Bengal alfabesi resmî yazı oldu. Manipûr kültüründe bugün de tartışılan bu kopuş, bir kralın kararıyla gerçekleşti.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, A History of Manipur; Saroj N. Arambam Parratt, The Court Chronicle of the Kings of Manipur" },

{ t:"1738-01-01", b:"Manipûr ordusu Burma başşehri Ava'nın önlerine kadar ilerledi", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","akin"], yer_id:"Ava (İnwa)",
  d:"[Manipûr — Ningthouca] Garîb Nevâz'ın süvari akınları Çindvin'i geçip Burma başşehrinin eteklerine ulaştı. Küçük bir vadi krallığının Toungoo hânedanını bu ölçüde sarsması, Burma'da hânedan değişimine giden çözülmenin sebeplerinden sayılır.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, a.g.e.; Cambridge History of Southeast Asia" },

{ t:"1758-01-01", b:"Konbaung hânedanının karşı seferleri Manipûr'u yıprattı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","yagma"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Burma'da yeni kurulan Konbaung hânedanı, önceki akınların hesabını sormak üzere vadiye girdi. Bu tarihten sonra Manipûr, Burma'nın tekrarlanan seferleri ve iç taht kavgaları arasında sıkışıp kaldı.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, a.g.e.; Cambridge History of Southeast Asia" },

{ t:"1762-09-14", b:"Manipûr, İngilizler'le ilk antlaşmasını imzaladı", tur:"antlasma", onem:4, dunya:3, kapsam:"dis",
  etiket:["antlasma","diplomasi"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Burma baskısı karşısında yardım arayan Raca Cey Singh, Doğu Hindistan Şirketi ile bir ittifak metni imzaladı. Vaad edilen kuvvet gelmedi, ama antlaşma Manipûr'u İngiliz Hindistanı'nın siyasî ufkuna soktu.",
  kaynak:"bulunamadı — dayanak: C. U. Aitchison, Treaties, Engagements and Sanads; Gangmumei Kamei, a.g.e." },

{ t:"1819-01-01", b:"Yedi Yıllık Yıkım (Çahi Taret Khuntakpa) başladı: Burma işgali", tur:"isgal", onem:5, dunya:3, kapsam:"dis",
  etiket:["isgal","yikim","goc"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Burma kralının cülûs törenine katılmayı reddeden Manipûr'a yürüyen ordu vadiyi işgal etti; yedi yıl süren yağma ve sürgün, nüfusun büyük bölümünün Kaçâr ve Assam'a kaçmasına yol açtı. Manipûr tarihinin en ağır yıkımı bu dönemdir.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, A History of Manipur; Cambridge History of Southeast Asia" },

{ t:"1826-02-24", b:"Yandabo Antlaşması Manipûr'un bağımsızlığını tanıdı", tur:"antlasma", onem:5, dunya:4, kapsam:"dis",
  etiket:["antlasma","bagimsizlik"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Birinci İngiliz-Burma Savaşı'nı bitiren antlaşmayla Burma, Manipûr ve Assam üzerindeki iddialarından vazgeçti; Gambhîr Singh tahta döndü. Bir Himalaya-Burma sınır krallığının kaderi, iki büyük gücün masasında belirlendi.",
  kaynak:"bulunamadı — TDV'de müstakil madde bulunamadı. Dayanak: C. U. Aitchison, Treaties, Engagements and Sanads; Cambridge History of Southeast Asia" },

{ t:"1834-01-01", b:"Kabav vadisi İngiliz hakemliğiyle Burma'ya bırakıldı", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis",
  etiket:["sinir","toprak-kayip"], yer_id:"",
  d:"[Manipûr — Ningthouca] Manipûr'un doğusundaki verimli vadi, İngiliz hakemliğiyle Burma'ya devredildi ve karşılığında krallığa yıllık ödeme bağlandı. Sınır çizen tarafın kendisi olmadığı bir kararla toprak kaybetmek, tâbi devlet olmanın bedeliydi. (yer_id boş: Kabav vadisi atlasın kayıtlarında yok.)",
  kaynak:"bulunamadı — dayanak: C. U. Aitchison, a.g.e.; Gangmumei Kamei, A History of Manipur" },

{ t:"1891-03-24", b:"Saray darbesi İngiliz müdahalesini tetikledi", tur:"kriz", onem:4, dunya:2, kapsam:"ic",
  etiket:["darbe","kriz","darbe-siyasi"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Tikendracît Singh'in kardeşi Surçandra'yı tahttan indirmesi üzerine İngiliz mukimi duruma el koymak istedi; görüşme çatışmaya döndü ve baş komiser dahil beş İngiliz görevlisi öldürüldü. Küçük bir saray meselesi, bir savaşa dönüştü.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, A History of Manipur; Cambridge History of India, VI" },

{ t:"1891-04-23", b:"Khongcom Muharebesi: Manipûr direnişi kırıldı", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","yenilgi","son"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Paona Bricabâşî kumandasındaki Meitei kuvvetleri, üç koldan gelen İngiliz ordusuna Khongcom tepesinde karşı koydu ve son askere kadar direndi. Yenilgiyle krallığın bağımsızlığı sona erdi; Manipûr, İngiliz himayesinde bir prensliğe dönüştürüldü. (yer_id: Khongcom, İmphâl'in güneydoğusundadır.)",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, a.g.e.; Cambridge History of India, VI" },

{ t:"1891-08-13", b:"Tikendracît Singh ve Thangal General idam edildi", tur:"olum", onem:4, dunya:2, kapsam:"dis",
  etiket:["idam","direnis"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Direnişin iki önderi İmphâl'de halka açık biçimde asıldı. İdam günü Manipûr'da bugün de anılır; Meitei siyasî hâfızasının en güçlü sembollerinden biridir.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, A History of Manipur; Cambridge History of India, VI" },

{ t:"1904-10-01", b:"Birinci Nupi Lan: kadınların angarya isyanı", tur:"sosyal", onem:4, dunya:2, kapsam:"ic",
  etiket:["isyan","sosyal","kadin"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr] İngiliz idaresinin erkeklere yüklediği zorunlu inşaat angaryasına karşı İmphâl çarşısındaki kadınlar ayaklandı ve emri geri çektirdi. 'Kadınlar savaşı' adıyla anılan bu hareket, Manipûr'da kadınların siyasî öznelik geleneğinin başlangıcı sayılır.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, A History of Manipur; Manjusri Chaki-Sircar, Feminism in a Traditional Society" },

{ t:"1917-01-01", b:"Kuki ayaklanması başladı", tur:"isyan", onem:4, dunya:2, kapsam:"ic",
  etiket:["isyan","kabile"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr] I. Dünya Savaşı için Fransa'ya işçi taburu toplanmasına direnen tepe kabileleri iki yıl süren bir ayaklanma başlattı. İsyanın bastırılmasından sonra tepe bölgeleri vadiden ayrı bir idarî düzene bağlandı — Manipûr'un XX. yüzyıl boyunca sürecek vadi-tepe ayrımı buradan doğdu.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, A History of Manipur; Cambridge History of India, VI" },

// ═══════════════════════════════════════════════════════════════════════════
// KÜLTÜR · BİLİM · SOSYAL · İKTİSAT DENGELEMESİ
// Şartname §2: her 100 maddede kabaca 40 askerî-siyasî · 15 idarî · 15 bilim ·
// 15 kültür · 10 sosyal-dinî · 5 iktisadî. Birinci turda oran 101/127 çıktı
// (askerî-siyasî %79). Aşağıdaki maddeler DOLGU DEĞİLDİR: her biri kaynağı
// gösterilebilen ve silindiğinde kronolojiden bir şey eksilten olaylardır.
// ═══════════════════════════════════════════════════════════════════════════

// ── SİND ───────────────────────────────────────────────────────────────────

{ t:"1509-01-01", b:"Makli nekropolü Semmâ döneminde büyük anıt mezarlarla genişledi", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["mimari","mezar","kultur"], yer_id:"Tatta (Thatta)",
  d:"[Sind — Semmâ] Tatta'nın batısındaki tepede kurulan mezarlık, altı yüzyıl boyunca sultanların, âlimlerin ve şeyhlerin gömüldüğü devasa bir taş işçiliği müzesine dönüştü. Hindu tapınak süslemesiyle İran kubbe geleneğini aynı yapıda buluşturan üslûbu, Sind'in iki dünya arasındaki yerini taşa çevirir.",
  kaynak:"sind (TDV) — Tatta türbeleri (Câm Nizâmeddin, Îsâ Han, Mirza Canbeg) ve taş işçiliği bölümü" },

{ t:"1592-01-01", b:"Tatta, Bâbürlü döneminde bir ilim ve tercüme merkezi hâline geldi", tur:"kultur", onem:3, dunya:2, kapsam:"ic",
  etiket:["ilim","medrese","kitap"], yer_id:"Tatta (Thatta)",
  d:"[Sind / Bâbürlü] Fetihten sonra şehirde çok sayıda medrese ve kütüphane kuruldu; Sindli hekimler, matematikçiler ve hadis âlimleri bütün Hint dünyasında tanındı. Sind'in İslâm ilimlerine katkısı, siyasî ağırlığının çok üstündedir.",
  kaynak:"sind (TDV): \"Sind'de yetişen ünlü sûfî, âlim, şair ve edipler\" listesi ve Abbâsî dönemi tercüme faaliyeti" },

{ t:"1620-01-01", b:"Deniz İpek yolu Sind limanlarını Basra körfezine bağladı", tur:"ekonomi", onem:3, dunya:2, kapsam:"dis",
  etiket:["ticaret","liman","yol"], yer_id:"Tatta (Thatta)",
  d:"[Sind / Bâbürlü] Kuzeyden sahile inen ipek ve pamuklu kumaş, Sind ve Gucerât limanlarından Basra ve Aden'e, oradan İskenderiye üzerinden Avrupa'ya taşınıyordu. Tatta'nın zenginliği tarımdan değil, bu geçiş trafiğinden geliyordu — ve delta kapandığında şehir de söndü.",
  kaynak:"sind (TDV): \"Deniz İpek yolu da kuzeyden sahile gelerek Sind ve Gucerât limanlarından Basra körfezine ... varıyordu\"" },

{ t:"1853-01-01", b:"Sindî için Arap alfabesine dayalı resmî yazı düzeni kabul edildi", tur:"kultur", onem:4, dunya:2, kapsam:"dis",
  etiket:["dil","yazi","egitim"], yer_id:"Karaçi",
  d:"[Sind] Fetihten on yıl sonra idare, o güne kadar birkaç farklı alfabeyle yazılan Sindî için tek bir Arap harfli imlâ belirledi. Karar dilin matbaaya girmesini ve okul kitabı basılmasını mümkün kıldı; Sindî bugün de bu alfabeyle yazılır.",
  kaynak:"sind (TDV): \"Bölge genelinde Ârî dillerden Sindî konuşulur ve müslümanlar tarafından Arap alfabesiyle ... yazılır\"; kararın tarihi için Cambridge History of India, V" },

// ── RACPUT ─────────────────────────────────────────────────────────────────

{ t:"1488-01-01", b:"Rao Bîka Bîkâner'i kurdu", tur:"sehircilik", onem:4, dunya:1, kapsam:"ic",
  etiket:["sehircilik","kurulus"], yer_id:"Bikaner",
  d:"[Racput — Bîkâner] Mârvâr hânedanından ayrılan Rao Bîka, Thar çölünün kuzeyinde kendi devletini kurdu. Çöl ortasında bir başşehir kurmak, su ve kervan yolu denetimini elinde tutmakla mümkündü; Bîkâner iki asır boyunca Multan-Delhi kervan hattının anahtarı oldu.",
  kaynak:"bulunamadı — TDV'de Bîkâner maddesi yok (`bikaner` 302). Dayanak: Cambridge History of India, IV; R. C. Majumdar (ed.), The Delhi Sultanate" },

{ t:"1547-01-01", b:"Mîrâ Bâî'nin bhakti şiiri Racputana'da yayıldı", tur:"din", onem:4, dunya:2, kapsam:"ic",
  etiket:["edebiyat","din","kadin"], yer_id:"Çitor (Chittorgarh)",
  d:"[Racput — Mevâr] Mevâr sarayına gelin gelen prenses, saray hayatını bırakıp Krişna'ya adanmış şiirler söyledi. Kast ve cinsiyet sınırlarını aşan bhakti hareketinin en tanınmış sesi oldu; şiirleri bugün de Kuzey Hindistan'ın ortak repertuvarındadır. (Ölüm yılı kaynaklarda 1546-1548 arasında verilir.)",
  kaynak:"bulunamadı — TDV'de müstakil madde bulunamadı. Dayanak: J. S. Hawley – M. Juergensmeyer, Songs of the Saints of India; Cambridge History of India, IV" },

{ t:"1592-01-01", b:"Man Singh Amber Sarayı'nı inşa ettirdi", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["mimari","saray"], yer_id:"Caypûr (Jaipur)",
  d:"[Racput — Amber] Ekber'in Racput kumandanı, Bâbürlü sarayında gördüğü bahçe ve avlu düzenini kendi kalesine taşıdı. Amber Sarayı, Racput savunma mimarîsiyle Bâbürlü zarafetinin birleştiği ilk büyük örnektir — ittifakın taştan karşılığı.",
  kaynak:"bulunamadı — dayanak: Percy Brown, Indian Architecture (İslâm dönemi); Cambridge History of India, IV" },

{ t:"1760-01-01", b:"Kişangarh ekolünde Bani Thani üslûbu doğdu", tur:"kultur", onem:3, dunya:2, kapsam:"ic",
  etiket:["kultur","minyatur"], yer_id:"Ecmîr (Ajmer)",
  d:"[Racput — Kişangarh] Uzun boyun, keskin burun ve badem gözle tanınan üslûp, Racput minyatürünün en özgün dalını oluşturdu. Bâbürlü sarayının çöküşüyle başkentten dağılan ressamların taşra saraylarında bulduğu himaye, Hint resminde bir merkezsizleşme ve çeşitlenme dönemi başlattı. (yer_id: Kişangarh, Ecmîr'in kuzeyindedir.)",
  kaynak:"bulunamadı — dayanak: B. N. Goswamy, Indian painting üzerine çalışmaları; Cambridge History of India, IV" },

{ t:"1868-01-01", b:"Racputana'da büyük kıtlık yaşandı", tur:"sosyal", onem:4, dunya:2, kapsam:"ic",
  etiket:["kitlik","salgin","demografi"], yer_id:"Codhpûr (Jodhpur)",
  d:"[Racput] Musonun iki yıl üst üste gelmemesi çöl kuşağında ağır bir kıtlığa yol açtı; Mârvâr ve Bîkâner'de nüfusun önemli bir bölümü öldü ya da göç etti. Kıtlık, prensliklerin sınırlı maliyesinin böyle bir felâketi tek başına karşılayamadığını gösterdi ve İngiliz idaresinin iç işlere müdahalesini artırdı.",
  kaynak:"bulunamadı — dayanak: Cambridge History of India, VI; B. M. Bhatia, Famines in India" },

// ── LADAKH ─────────────────────────────────────────────────────────────────

{ t:"1650-01-01", b:"Ladakh, Tibet yünü ile Keşmir şal sanayii arasındaki tekeli elinde tuttu", tur:"ekonomi", onem:4, dunya:2, kapsam:"dis",
  etiket:["ticaret","tekel","yol"], yer_id:"Leh (Ladakh)",
  d:"[Ladakh — Namgyal] Batı Tibet'in ince keçi yünü (paşmina) yalnız Ladakh üzerinden Keşmir'e geçebiliyordu. Dünyanın en pahalı şallarının ham maddesi bu dar geçitten akıyordu; Leh'in bir dağ kasabası olmaktan çıkıp uluslararası bir kervan merkezi hâline gelmesinin sebebi budur.",
  kaynak:"bulunamadı — dayanak: L. Petech, The Kingdom of Ladakh; J. Rizvi, Trans-Himalayan Caravans" },

{ t:"1666-01-01", b:"Leh'te Cuma Camii yapıldı", tur:"din", onem:3, dunya:1, kapsam:"ic",
  etiket:["mimari","cami","din"], yer_id:"Leh (Ladakh)",
  d:"[Ladakh — Namgyal] Bâbürlü tâbiiyetinin şartlarından biri olarak başşehrin meydanında yükselen cami, Budist bir krallığın merkezine yerleşen müslüman cemaatin de ibadet yeri oldu. Leh çarşısı bundan sonra Keşmirli, Baltî ve Orta Asyalı tüccarların ortak mekânıydı.",
  kaynak:"bulunamadı — dayanak: L. Petech, The Kingdom of Ladakh; J. Rizvi, Ladakh: Crossroads of High Asia" },

// ── NEPAL ──────────────────────────────────────────────────────────────────

{ t:"1702-01-01", b:"Bhaktapur'da Nyatapola Tapınağı tamamlandı", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["mimari","tapinak","kultur"], yer_id:"Katmandu",
  d:"[Nepal — Malla] Bhupatindra Malla'nın yaptırdığı beş katlı pagoda, vadinin en yüksek yapısıdır ve yüzyıllar boyunca depremlerde ayakta kaldı. Malla krallıklarının birbiriyle yarıştığı alan savaş kadar mimarîydi; her başşehir ötekinden daha görkemli bir meydan kurmaya çalıştı. (yer_id: Bhaktapur, Katmandu vadisindedir.)",
  kaynak:"bulunamadı — dayanak: M. Slusser, Nepal Mandala: A Cultural Study of the Kathmandu Valley; D. R. Regmi, Medieval Nepal" },

{ t:"1854-06-01", b:"Durbar Okulu açıldı: Nepal'de modern eğitimin başlangıcı", tur:"idari", onem:4, dunya:2, kapsam:"ic",
  etiket:["egitim","reform"], yer_id:"Katmandu",
  d:"[Nepal — Rana] İngiltere seyahatinden dönen Jung Bahadur, saray çevresinin çocukları için İngilizce eğitim veren bir okul kurdurdu. Eğitim uzun süre yalnız yönetici sınıfa açık kaldı; Nepal'in XX. yüzyıla çok düşük okuryazarlıkla girmesinin sebebi bu sınırlamadır.",
  kaynak:"bulunamadı — dayanak: John Whelpton, A History of Nepal; Cambridge History of India, VI" },

{ t:"1889-01-01", b:"Bîr Hastahanesi kuruldu: Nepal'in ilk modern hastahanesi", tur:"bilim", onem:4, dunya:2, kapsam:"ic",
  etiket:["tip","saglik","kurum","islahat"], yer_id:"Katmandu",
  d:"[Nepal — Rana] Başvezir Bîr Şemşer'in kurdurduğu hastahane, ülkeye modern cerrahi ve aşı uygulamasını getirdi. Rana idaresinin dışa kapalı siyasetine rağmen tıp ve mühendislik alanında Hindistan'dan bilgi aktarımı sürdü.",
  kaynak:"bulunamadı — dayanak: John Whelpton, A History of Nepal" },

{ t:"1901-05-06", b:"Gorkhapatra gazetesi çıkmaya başladı", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["basin","dil","kultur"], yer_id:"Katmandu",
  d:"[Nepal — Rana] Nepalce yayımlanan ilk gazete, aynı zamanda ülkenin ilk süreli yayınıydı. Sıkı denetim altında çıkmasına rağmen Nepalce'nin standart yazı dili hâline gelmesinde belirleyici rol oynadı.",
  kaynak:"bulunamadı — dayanak: John Whelpton, A History of Nepal; Pratyoush Onta, Nepali basın tarihi üzerine çalışmaları" },

{ t:"1918-01-01", b:"Tri-Chandra Koleji açıldı: Nepal'in ilk yüksek öğretim kurumu", tur:"bilim", onem:4, dunya:2, kapsam:"ic",
  etiket:["egitim","kurum"], yer_id:"Katmandu",
  d:"[Nepal — Rana] Başvezir Çandra Şemşer'in kurdurduğu kolej, o güne kadar yüksek öğrenim için Hindistan'a gitmek zorunda kalan Nepallilere ülke içinde imkân sağladı. Rivayete göre Çandra Şemşer koleji açarken 'kendi tabutuma çivi çakıyorum' demiştir — ve haklı çıktı: Rana karşıtı hareketin kadroları buradan yetişti.",
  kaynak:"bulunamadı — dayanak: John Whelpton, A History of Nepal" },

{ t:"1920-07-01", b:"Nepal'de sati (dul yakma) yasaklandı", tur:"sosyal", onem:5, dunya:3, kapsam:"ic",
  etiket:["sosyal","hukuk","kadin"], yer_id:"Katmandu",
  d:"[Nepal — Rana] Çandra Şemşer'in ilânıyla, kocası ölen kadınların yakılması suç sayıldı. Hindistan'da 1829'da yasaklanan uygulamanın Nepal'de doksan yıl daha sürmesi, ülkenin dışa kapalılığının toplumsal bedelidir.",
  kaynak:"bulunamadı — dayanak: John Whelpton, A History of Nepal; A. Höfer, The Caste Hierarchy and the State in Nepal" },

// ── TRAVANKUR ──────────────────────────────────────────────────────────────

{ t:"1601-01-01", b:"Padmanâbhapuram Sarayı'nın ahşap yapıları yükseldi", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["mimari","saray","kultur"], yer_id:"Trivandrum (Thiruvananthapuram)",
  d:"[Travankur — Venâd] Muson yağmurlarına göre tasarlanmış, taş temel üzerine tamamen ahşaptan kurulan saray, Kerala mimarîsinin en büyük örneğidir. Eğimli çatılar, oyma tavanlar ve doğal havalandırma, iklimin mimarîyi nasıl belirlediğinin ders kitabı örneğidir. (yer_id: Padmanâbhapuram, Trivandrum'un güneyindedir.)",
  kaynak:"bulunamadı — dayanak: A. Sreedhara Menon, A Survey of Kerala History; Percy Brown, Indian Architecture (Hindu dönemi)" },

{ t:"1650-01-01", b:"Kottârakkara'da Râmanâttam doğdu: Kathakali'nin başlangıcı", tur:"kultur", onem:5, dunya:3, kapsam:"ic",
  etiket:["kultur","tiyatro","dans"], yer_id:"Kolam (Quilon)",
  d:"[Travankur — Venâd] Kottârakkara racasının Râmâyana'yı sahnelemek için geliştirdiği oyun biçimi, yüz boyama, el işaretleri (mudra) ve davul eşliğiyle Kathakali'ye dönüştü. Hindistan'ın en tanınan klasik tiyatro geleneklerinden biri, bir taşra sarayının kültürel rekabetinden doğdu. (yer_id: Kottârakkara, Kolam'ın doğusundadır.)",
  kaynak:"bulunamadı — dayanak: A. Sreedhara Menon, A Survey of Kerala History; Farley Richmond v.dğr., Indian Theatre: Traditions of Performance" },

{ t:"1813-01-01", b:"Travankur'da çiçek aşısı uygulaması başladı", tur:"bilim", onem:4, dunya:3, kapsam:"ic",
  etiket:["tip","saglik","reform"], yer_id:"Trivandrum (Thiruvananthapuram)",
  d:"[Travankur] Krallık, hânedan üyelerinden başlayarak yaygın aşılama programı yürüttü. Jenner'in yönteminin bulunuşundan sadece on beş yıl sonra bir Hint prensliğinde devlet eliyle uygulanması, Travankur'un XIX. yüzyıl boyunca sağlık ve eğitimde öne çıkmasının ilk işaretidir.",
  kaynak:"bulunamadı — dayanak: Robin Jeffrey, The Decline of Nayar Dominance; David Arnold, Colonizing the Body (Hindistan'da aşı politikaları)" },

{ t:"1821-10-01", b:"Kottayam'da matbaa kuruldu; Malayalam basılı kitapla tanıştı", tur:"kultur", onem:5, dunya:3, kapsam:"ic",
  etiket:["matbaa","dil","egitim"], yer_id:"Koçin (Kochi)",
  d:"[Travankur] Misyoner Benjamin Bailey'nin döktüğü Malayalam harfleriyle çalışan matbaa, dilin ilk sözlüğünü ve okul kitaplarını bastı. Basılı Malayalam, Kerala'nın yüksek okuryazarlık geleneğinin teknik temeli oldu. (yer_id: Kottayam, Koçin'in güneydoğusundadır.)",
  kaynak:"bulunamadı — dayanak: Robin Jeffrey, a.g.e.; A. Sreedhara Menon, A Survey of Kerala History" },

{ t:"1837-01-01", b:"Trivandrum Rasathanesi kuruldu", tur:"bilim", onem:4, dunya:3, kapsam:"ic",
  etiket:["astronomi","bilim","kurum"], yer_id:"Trivandrum (Thiruvananthapuram)",
  d:"[Travankur] Svâti Tirunal'in himayesinde John Caldecott tarafından kurulan rasathane, yer manyetizması ve meteoroloji ölçümleriyle uluslararası ağlara veri sağladı. Bir Hint prensliğinin kendi parasıyla kurduğu ilk modern bilim kurumlarındandır.",
  kaynak:"bulunamadı — dayanak: Robin Jeffrey, The Decline of Nayar Dominance; S. N. Sen, Hindistan'da bilim tarihi çalışmaları" },

{ t:"1846-01-01", b:"Svâti Tirunal'in ölümüyle Karnatik müziğinde bir dönem kapandı", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["muzik","kultur","olum"], yer_id:"Trivandrum (Thiruvananthapuram)",
  d:"[Travankur] Kendisi de dört yüzü aşkın eser besteleyen kral, Tanjavur'dan gelen müzisyenleri sarayında toplayarak Travankur'u Güney Hindistan müziğinin merkezlerinden biri yaptı. Hükümdarın bizzat besteci olması, prenslik saraylarının sanat hâmiliğinde ne kadar ileri gidebildiğini gösterir.",
  kaynak:"bulunamadı — dayanak: A. Sreedhara Menon, A Survey of Kerala History; Robin Jeffrey, a.g.e." },

// ── MANİPUR ────────────────────────────────────────────────────────────────

{ t:"1779-01-01", b:"Bhâgyaçandra Ras Lîlâ dansını oluşturdu: Manipûrî klasik dansı doğdu", tur:"kultur", onem:5, dunya:3, kapsam:"ic",
  etiket:["dans","kultur","din"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr — Ningthouca] Burma sürgününden dönen kral, Krişna tapınmasını Meitei dans geleneğiyle birleştirerek yeni bir sahne biçimi kurdu. Yumuşak hareketleri ve işlemeli kostümüyle Manipûrî, Hindistan'ın sekiz klasik dansından biri olarak kabul edilir — Vaişnava dönüşümünün en kalıcı ürünü bir savaş değil bir danstır.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, A History of Manipur; Saryu Doshi, Manipuri dansı üzerine çalışmaları" },

{ t:"1859-01-01", b:"Manipûr'un Sagol Kangcei oyunu modern poloya kaynaklık etti", tur:"sosyal", onem:3, dunya:3, kapsam:"dis",
  etiket:["spor","kultur","etkilesim"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr] Vadide yüzyıllardır oynanan atlı sopa oyunu, Silçar'daki İngiliz çay plantasyonu görevlilerinin dikkatini çekti ve kurulan ilk kulüp oyunu 'polo' adıyla dünyaya yaydı. Küçük bir dağ krallığının gündelik eğlencesi, bir asır içinde küresel bir spora dönüştü.",
  kaynak:"bulunamadı — dayanak: Gangmumei Kamei, A History of Manipur; H. Chatterjee, polo tarihi üzerine derlemeler" },

{ t:"1891-01-01", b:"Çeitharol Kumbaba vakayinâmesi kesintisiz kaydını sürdürdü", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["tarih","kitap","kultur"], yer_id:"İmphâl (Manipûr)",
  d:"[Manipûr] Saray müverrihlerinin yüzyıllardır tuttuğu vakayinâme, bağımsızlığın kaybedildiği yılı da kaydetti. Güneydoğu Asya'da bu kadar uzun ve düzenli tutulmuş yerli kayıt azdır; Manipûr tarihinin yazılabilmesi doğrudan bu deftere bağlıdır.",
  kaynak:"bulunamadı — dayanak: Saroj N. Arambam Parratt, The Court Chronicle of the Kings of Manipur: Cheitharon Kumpapa (Routledge)" }

];
