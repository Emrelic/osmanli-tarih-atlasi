// =====================================================================
// TUNUS — ÇOK KÜNYELİ KRONOLOJİ (KRONO-MAGRIB-0929, 29 Eylül 2026)
// Oturum: KRONO-MAGRIB-0929 · koordinatör: YILDIRIM BAYEZIT
// =====================================================================
// ⚠️ index.html'e ve arac/paketle.py'ye BAĞLANMADI — bağlamak koordinatörün işi.
//    Bağlanana kadar sitede görünmez (normal).
//
// ── BAĞLAMA YOLU (ORTAK §4.1) ─────────────────────────────────────
// window.KRONOLOJI_COK_TUNUS → app.js cokTarafliKronolojiEkle: her madde
// `taraflar:[...]` listesindeki künyelere EKLENİR (ezmez; t+b tekrarı atlanır).
// Künyeler (data/devletler.js'ten okundu, madde tarihi pencere içinde):
//   hafsi                  1229-01-01 → 1574-09-13
//   tunus-ocagi            1574-01-01 → 1881-05-12  (dayılar · Murâdîler · Hüseynîler)
//   tunus-beyligi-fransiz  1881-05-12 → 1956-03-20  (atlas 1923-10-29'da biter)
//   cezayir-ocagi          Tunus-Cezayir savaşlarında ikinci taraf
//
// ── MÜKERRER DİSİPLİNİ ─────────────────────────────────────────────
// kronoloji_kuzeyafrika.js'in Hafsî maddeleri (1229·1249·1270·1287·1334·
// 1370·1437·1488·1534·1535·1574), olaylar*.js (1534·1535·1569·1573·1574·
// 1705·1741·1881·1883) ve künyelerin kendi maddeleri TEKRARLANMADI.
// Tarama: bütün olaylar*/kronoloji*/savaslar* + devletler.js kronolojileri,
// ±400 gün + başlık kök örtüşmesi, aynı künyede ±60 gün.
//
// ── KAYNAK ────────────────────────────────────────────────────────
// Yalnız TDV İslâm Ansiklopedisi. `kaynak:` alanındaki tırnaklı metin TDV
// gövdesinden BİREBİR alıntıdır (her biri makine ile gövdede arandı).
// TDV'nin kendi içindeki tarih farkları `celiski:` alanında iki alıntıyla.
// Kullanılan maddeler: tunus · hafsiler · huseyniler · muradiler · garp-ocaklari ·
// halkulvadi · kilic-ali-pasa · koca-sinan-pasa · hayreddin-pasa-tunuslu ·
// cerbe · kayrevan · sus · huseyin-pasa-tunus-beyi · ahmed-bey · hammude-pasa ·
// mehmed-sadik-pasa · sefakus · benzert · munestir
//
// ── TARİH KURALI ──────────────────────────────────────────────────
// Gün bilinmiyorsa t:"YYYY-01-01" ve `gun:` alanı hassasiyeti açıklar
// (ör. "Nisan 1881 (TDV gün vermez)"). Ay bilinen ama gün bilinmeyen madde
// de yıl başına yazıldı — sıralamada yılın başına düşer, `gun:` doğrusunu söyler.
// `ic_not_d:` editoryal not (harita ile çelişki, TDV iç çelişkisi) — gösterilmez.
// =====================================================================

window.KRONOLOJI_COK_TUNUS = [

{ t:"1252-01-01", b:"Hafsî hükümdarı Muhammed el-Müstansır \"emîrü'l-mü'minîn\" unvanını aldı", tur:"siyaset", onem:4, dunya:2, kapsam:"dis",
  etiket:["hanedan","konu-siyasi","konu-din"], yer_id:"Tunus", taraflar:["hafsi"],
  d:"Ebû Zekeriyyâ'nın oğlu Muhammed, Müstansır-Billâh lakabıyla birlikte halifelere mahsus emîrü'l-mü'minîn unvanını kullanmaya başladı. Bağdat'ın Moğollarca istilâsından sonra Mekke şerifinden Abbâsî halifesinin vârisi olduğunu bildiren bir berat aldı; Hafsîler böylece Muvahhid mirasının ötesinde halifelik iddiasına yükseldi.",
  kaynak:"TDV `hafsiler`: \"650 (1252) yılından itibaren Müstansır-Billâh lakabını ve “emîrü’l-mü’minîn” unvanını kullanan Muhammed\"",
  gun:"1252 (TDV gün vermez)" },

{ t:"1282-01-01", b:"İbn Ebû Umâre Güney Tunus'u ele geçirip halifeliğini ilân etti", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["isyan","konu-siyasi"], yer_id:"", odak_yer:["Gabes","Kafsa","Tozer"], taraflar:["hafsi"],
  d:"Hal'edilip öldürülen Vâsik'ın oğlu Fazl olduğunu ileri süren İbn Ebû Umâre, Ebû İshak'a muhalif Arap kabilelerinin desteğiyle bütün Güney Tunus'a hâkim oldu ve halife ilân edildi. Ebû İshak ile oğlu Ebû Fâris öldürüldü; hânedan ancak Ebû Hafs Ömer'in 1284'te tahtı almasıyla toparlanabildi.",
  kaynak:"TDV `hafsiler`: \"Araplar’ın yardımıyla bütün Güney Tunus’u ele geçirdi ve halife ilân edildi (681/1282)\"",
  gun:"681/1282 (TDV gün vermez)",
  ic_not_d:"ODAK: Güney Tunus — odak bölge temsilidir (TDV olay yerini şehir adıyla vermez)" },

{ t:"1329-01-01", b:"Abdülvâdî hükümdarı Ebû Tâşfîn Tunus şehrini işgal etti", tur:"isgal", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Tunus", taraflar:["hafsi"],
  d:"Tilimsân'daki Abdülvâdî hükümdarı I. Ebû Tâşfîn Hafsî başşehri Tunus'u işgal etti. Hafsî sultanı II. Ebû Yahyâ Ebû Bekir buna karşı Merînî sultanıyla ittifak kurdu; bu ittifak ileride Merînîler'in Tunus'a girişinin de zeminini hazırladı.",
  kaynak:"TDV `hafsiler`: \"729’da (1329) Tunus şehrini işgal eden Abdülvâdî Hükümdarı I. Ebû Tâşfîn’e karşı Merînî sultanıyla ittifak yaptı\"",
  gun:"729/1329 (TDV gün vermez)",
  ic_not_d:"Haritada 1329'da Tunus şehri için Abdülvâdî kırılması YOK; işgalin süresini TDV vermez. Kısa bir işgal olduğu için kırılma önerilmiyor, yalnız bilgi." },

{ t:"1357-01-01", b:"Merînî Sultanı Ebû İnân Hafsî topraklarını yeniden hâkimiyeti altına aldı", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Tunus", taraflar:["hafsi"],
  d:"1347'deki ilk Merînî işgalinin ardından toparlanan Hafsî toprakları, Ebû İnân'ın seferiyle ikinci kez Merînî hâkimiyetine girdi. Bu karışıklıklar sırasında Hafsî ülkesi Bicâye, Tunus ve Kosantîne olmak üzere üç ayrı emirliğe bölündü.",
  kaynak:"TDV `hafsiler`: \"Fakat Merînî Sultanı Ebû İnân 1357’de Hafsî topraklarını tekrar Merînî hâkimiyeti altına aldı.\"",
  gun:"1357 (TDV gün vermez)",
  ic_not_d:"Haritada 1357 Merînî kırılması var mı ölçülmedi; korpus 1347 ve 1352 (Tilimsan) maddelerini taşıyor, 1357 yok." },

{ t:"1394-01-01", b:"Ebû Fâris Abdülazîz Hafsî tahtına geçti — ikinci yükseliş", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["hafsi"],
  d:"Hânedanı 1370'te yeniden birleştiren I. Ebü'l-Abbas'ın ölümüyle oğlu Ebû Fâris Abdülazîz el-Mütevekkil tahta geçti. Kırk yıllık saltanatında babasının siyasetini sürdürdü, bahriyeyi Malta'ya filo gönderecek kadar güçlendirdi ve Sünnîliği yaymaya çalıştı.",
  kaynak:"TDV `hafsiler`: \"Yerine geçen oğlu Ebû Fâris Abdülazîz el-Mütevekkil (1394-1434) babasının planlarını başarıyla gerçekleştirdi.\"",
  gun:"1394 (TDV gün vermez; saltanat yılları 1394-1434)" },

{ t:"1435-01-01", b:"Ebû Amr Osman Hafsî tahtına geçti", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["hafsi"],
  d:"Kısa süren IV. Muhammed Müntasır'ın ardından Ebû Amr Osman tahta çıktı. Elli üç yıllık saltanatında Avrupalılar'la iyi ilişkiler kurdu, tarımı geliştirdi ve 1441'de Bicâye'yi, 1452'de Kosantîne'yi yeniden hânedan topraklarına kattı.",
  kaynak:"TDV `hafsiler`: \"Dindar ve âdil bir hükümdar olan halefi Ebû Amr Osman (1435-1488), dışta Tunuslu korsanların faaliyetine rağmen Avrupalılar’la iyi ilişkiler kurdu.\"",
  gun:"1435 (TDV gün vermez; saltanat yılları 1435-1488)",
  ic_not_d:"Korpusta 1488 'Ebû Amr Osman'ın ölümü' var; bu madde onun başlangıcıdır, mükerrer değil." },

{ t:"1494-01-01", b:"V. Muhammed el-Mütevekkil tahta çıktı — Hafsî çöküşü derinleşti", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["hafsi"],
  d:"Genç yaşta ölen Ebû Yahyâ Zekeriyyâ'nın yerine V. Muhammed Ebû Abdullah el-Mütevekkil geçti. Onun otuz iki yıllık saltanatında hânedanın çöküşü sürdü; İspanyollar Bicâye ile Trablus'u aldı ve sultan Türk denizcilerinden yardım istemek zorunda kaldı.",
  kaynak:"TDV `hafsiler`: \"Halefi V. Muhammed Ebû Abdullah el-Mütevekkil devrinde (1494-1526) hânedanın çöküşü devam etti.\"",
  gun:"1494 (TDV gün vermez)" },

{ t:"1510-01-01", b:"Oruç ve Hızır reisler Hafsî sultanından Halkulvâdî'yi üs olarak aldı", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi","konu-askeri"], yer_id:"Halkulvâdî", taraflar:["hafsi"],
  d:"Oruç ve Hızır kardeşler, ele geçirecekleri ganimetin beşte birini vermek şartıyla Hafsî Sultanı Muhammed'in himayesine girip Tunus'un iskelesi Halkulvâdî'yi üs olarak kullanma hakkı aldılar. Bu anlaşma Türk denizcilerinin Mağrib'deki varlığının ve Tunus'a Osmanlı ilgisinin başlangıcıdır.",
  kaynak:"TDV `halkulvadi`: \"1510 yılında Tunus’ta hüküm süren Benî Hafs hânedanından Sultan Muhammed’in himayesine giren Oruç ve Hızır (Barbaros Hayreddin Paşa) kardeşler\"",
  gun:"1510 (TDV gün vermez)",
  ic_not_d:"TDV `hafsiler` aynı olayı yılsız anlatır; yıl yalnız `halkulvadi`de." },

{ t:"1543-01-01", b:"Mevlây Hasan tahttan uzaklaştırıldı, yerine oğlu Ahmed geçti", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["hafsi"],
  d:"İspanyol himayesinde tahta dönen Mevlây Hasan 1540'ta bir kez indirilip yeniden iktidara geçtiyse de 1543'te kesin olarak uzaklaştırıldı. Yerine geçen oğlu Ahmed, babasının Avrupalılar'dan yardım isteyerek tahtı geri almaya çalışması üzerine onun gözlerine mil çektirdi.",
  kaynak:"TDV `tunus`: \"Mevlây Hasan 1540’ta tahttan indirildiyse de kısa zamanda yeniden iktidarı ele geçirdi, fakat 1543’te tamamen uzaklaştırıldı; yerine oğlu Ahmed geçti.\"",
  gun:"1543 (TDV gün vermez)" },

{ t:"1549-01-01", b:"Sefâkus Turgut Reis'e tâbi oldu", tur:"toprak-kayip", onem:2, dunya:2, kapsam:"dis",
  etiket:["toprak","konu-askeri"], yer_id:"Sfaks", taraflar:["hafsi"],
  d:"Hafsî otoritesinin çöktüğü yıllarda Sefâkus Turgut Reis'in hâkimiyetini tanıdı. İki yıl sonra İspanyol işgaline uğradıysa da şehir yeniden Osmanlılar'ın eline geçti.",
  kaynak:"TDV `sefakus`: \"956’da (1549) Turgut Reis’e tâbi olan Sefâkus iki yıl sonra İspanyol işgaline mâruz kaldıysa da tekrar Osmanlılar’ın eline geçti.\"",
  gun:"956/1549 (TDV gün vermez)",
  ic_not_d:"HARİTA: Sfaks 1574-08-25'e kadar hafsi, sonra OSMANLI gösteriliyor. TDV'ye göre 1549'dan itibaren Turgut Reis'e (Osmanlı) tâbi. Kırılma yok → bu madde kırılmasız madde (2t) sayılabilir; haritanın erkenleştirilmesi koordinatör kararı (CAKISMA'ya da yazıldı)." },

{ t:"1550-01-01", b:"Andrea Doria Mehdiye'yi kuşatıp aldı, Cerbe'yi de işgal etti", tur:"kusatma", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Mehdiye", taraflar:["hafsi"],
  d:"Turgut Reis'in Tunus ile Trablusgarp arasındaki önemli üssü Mehdiye, Andrea Doria kumandasındaki Habsburg donanmasınca kuşatılıp alındı; savunan Osmanlı askerleri katledildi, halk esir edildi ve Cerbe de işgal edildi. Mehdiye'yi tutamayacaklarını anlayan İspanyollar 1554'te çekildi; Osmanlılar surları onarıp buraya Anadolu ve Rumeli'den aileler yerleştirdi.",
  kaynak:"TDV `tunus`: \"Ancak Andrea Doria kumandasındaki Habsburg donanması Mehdiye’yi 1550’de kuşattı, burayı savunan az sayıdaki Osmanlı askerini katletti\"",
  gun:"1550 (TDV gün vermez)",
  ic_not_d:"HARİTA: Mehdiye için 1544-1574 arası hiçbir kırılma yok (Turgut'un alışı, 1550 Habsburg işgali, 1554 çekilme). Cerbe 1550 işgali de haritada yok (yalnız 1560). Değişiklik kararı koordinatörde." },

{ t:"1551-01-01", b:"Sûs, Manastır ve Kayrevan Trablusgarp eyaletine bağlandı", tur:"idari", onem:3, dunya:2, kapsam:"dis",
  etiket:["idari","konu-idari"], yer_id:"Kayrevan", taraflar:["hafsi"],
  d:"Trablusgarp'ın 1551'de fethinden sonra Tunus şehrinin güneyindeki Sûs, Manastır ve Kayrevan Osmanlı Trablusgarp eyaletinin parçası oldu. Tunus şehri ise 1569'a kadar İspanyol himayesindeki Hafsîler'de kaldı; 1574'teki kesin fetihten sonra bu güney şehirlerinin hangi eyalete ait olduğu iki eyalet arasında anlaşmazlık konusu oldu.",
  kaynak:"TDV `tunus`: \"Tunus şehrinin güneyinde kalan Sûs, Manastır ve Kayrevan 1551’den sonra Trablusgarp’ın bir parçası haline geldi.\" · TDV `garp-ocaklari`: \"Manastır, Kayrevan, Sûs, Kafsa, Mehdiye gibi Tunus’un güney şehirleri o tarihte Trablusgarp eyaletinin sınırları içindeydi.\"",
  gun:"1551 (TDV gün vermez; 'sonra' der)",
  ic_not_d:"HARİTA: Kayrevan 1574-08-25'te hafsi→OSMANLI; TDV'ye göre 1551'den sonra zaten Osmanlı Trablusgarp eyaletinde. Ayrıca TDV `tunus` Kayrevan'ın ancak 1586'da Tunus beylerbeyiliğine alındığını yazar. Harita ile çelişki CAKISMA'da." },

{ t:"1557-01-01", b:"Piyâle Paşa Benzert'i yeniden Osmanlı hâkimiyetine kattı", tur:"fetih", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Benzert (Bizerte)", taraflar:["hafsi"],
  d:"1534'te Barbaros tarafından alınıp sonra İspanyollar'ın eline geçen Benzert, Kaptanıderyâ Piyâle Paşa'nın seferiyle yeniden Osmanlı hâkimiyetine girdi. Liman, Tunus kıyısında Hafsî-İspanyol düzenine karşı bir Osmanlı dayanağı oldu.",
  kaynak:"TDV `benzert`: \"bir ara İspanyollar’ın eline geçmişse de 1557’de Kaptanıderyâ Piyâle Paşa tarafından tekrar Osmanlı hâkimiyetine dahil edilmiştir\"",
  gun:"1557 (TDV gün vermez)",
  ic_not_d:"HARİTA: Benzert 1574-08-25'e kadar hafsi. TDV 1557'de Osmanlı diyor. Kırılma yok → CAKISMA." },

{ t:"1581-01-01", b:"Hafsî ailesinin Tunus'u geri alma teşebbüsü önlendi", tur:"isyan", onem:2, dunya:1, kapsam:"dis",
  etiket:["isyan","konu-askeri"], yer_id:"", odak_yer:["Tunus","Kayrevan"], taraflar:["tunus-ocagi"],
  d:"Son Hafsî sultanının İstanbul'a götürülmesinden sonra Palermo'da toparlanan hânedan mensupları eyaletin iç kısımlarına geçip Tunus'u yeniden ele geçirmeye çalıştı. Bazı kısmî başarılara rağmen teşebbüs alınan tedbirlerle önlendi; bu, Hafsî restorasyonunun son denemesidir.",
  kaynak:"TDV `tunus`: \"1581’de eyaletin iç kısımlarına geçtiler ve Tunus’u tekrar ele geçirme teşebbüsünde bulundular\"",
  gun:"1581 (TDV gün vermez)",
  ic_not_d:"ODAK: eyaletin iç kısımları — odak bölge temsilidir (TDV olay yerini şehir adıyla vermez)" },

{ t:"1586-01-01", b:"Kayrevan Şeyh Abdüssamed'in bağlılığıyla Tunus beylerbeyiliğine katıldı", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","konu-idari"], yer_id:"Kayrevan", taraflar:["tunus-ocagi"],
  d:"Ülkenin ikinci önemli şehri Kayrevan, Şeyh Abdüssamed'in Osmanlı Devleti'ne bağlılığını bildirmesi üzerine Tunus beylerbeyiliği sınırlarına alındı. Böylece Trablusgarp ile Tunus arasında tartışmalı kalan güney şehirlerinden biri Tunus eyaletine bağlandı.",
  kaynak:"TDV `tunus`: \"Kayrevan, Şeyh Abdüssamed’in 994’te (1586) Osmanlı Devleti’ne bağlılık arzetmesi üzerine Tunus beylerbeyiliği içine alındı.\"",
  gun:"994/1586 (TDV gün vermez)",
  ic_not_d:"HARİTA: Kayrevan 1574-08-25'ten beri OSMANLI; bu madde sahip değiştirmez (Osmanlı içi eyalet değişimi), kırılma gerekmez." },

{ t:"1591-01-01", b:"Tunus'ta dayılık makamı ortaya çıktı — ilk dayı İbrâhim", tur:"idari", onem:4, dunya:2, kapsam:"ic",
  etiket:["idari","konu-idari","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Yeniçeri bölükbaşıları arasından seçilen ve askerlik işlerinden sorumlu 'dayı' makamı Garp ocakları içinde ilk kez Tunus'ta kuruldu; ilk dayı bölükbaşı İbrâhim'di. Beylerbeyi, dayı ve vatan beyinden oluşan üç başlı idare, İstanbul'un atadığı beylerbeyinin yetkisini giderek daralttı ve fiilî özerkliğin ilk basamağı oldu.",
  kaynak:"TDV `tunus`: \"Denizcilerden dayı seçilerek kendisine belli yetkiler verilmesi âdeti ilk defa 1591’de Tunus’ta başlatıldı\"",
  gun:"1591 (TDV gün vermez)",
  ic_not_d:"Korpusta 1671 'Cezayir'de dayı idaresinin başlaması' var; Tunus dayılığı (1591) yok. TDV aynı paragrafta Trablusgarp 1609, Cezayir 1681 der — Cezayir için korpustaki 1671 ile TDV `tunus`un 1681'i arasında fark var (Cezayir işçisine bildirilmeli)." },

{ t:"1609-01-01", b:"Endülüslü müslümanlar Osman Dayı zamanında Tunus'a yerleşti", tur:"sosyal", onem:3, dunya:2, kapsam:"dis",
  etiket:["goc","konu-kultur"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"İspanya'dan sürülen Endülüslü müslümanlar (Moriskolar) Osman Dayı'nın daveti ve himayesiyle Tunus'un sahil şehirlerine ve kuzeydoğusuna yerleştirildi; önderleri Muhammed Cardenas emrinde 3000 kişilik mahallî bir güç kurdular. Endülüslüler Teburba, Süleyman ve Testûre gibi şehirleri ziraat ve el sanatlarıyla kalkındırdı.",
  kaynak:"TDV `tunus`: \"1609’da Osman Dayı zamanında Tunus’a gelen Endülüslü müslümanlar Muhammed Cardenas adlı önderlerinin emrinde 3000 kişilik mahallî bir güç oluşturdular.\"",
  gun:"1609 (TDV gün vermez)",
  ic_not_d:"Korpustaki 1609-04-04 maddesi İspanya'nın sürgün fermanıdır (kronoloji_ispanya); bu madde Tunus tarafındaki iskândır, mükerrer değil." },

{ t:"1610-01-01", b:"Osman Dayı öldü, yerine damadı Yûsuf Dayı geçti", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"On üç yıl dayılık yapan ve yerli 'zuav' birliğiyle yeniçerilerin gücünü kıran Osman Dayı öldü; yerine damadı Yûsuf Dayı geçti. Yûsuf Dayı Tunus'taki asker sayısını 4000'e çıkardı, ilk Hanefî medresesini açtı ve kādılkudâtın Hanefîler'den seçilmesini başlattı.",
  kaynak:"TDV `tunus`: \"1610’da vefat edince yerine damadı Yûsuf Dayı geçti.\"",
  gun:"1610 (TDV gün vermez)" },

{ t:"1613-01-01", b:"Korsikalı mühtedi Murad Bey Tunus mirlivâsı oldu", tur:"hanedan", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Tunus mirlivâsı (vatan beyi) Ramazan Bey'in ölümünden sonra önce kardeşi Receb, ardından küçükken müslüman olmuş kölesi Korsikalı Murad Bey bu makama getirildi. Murad Bey Yûsuf Dayı ile iş birliği yaparak vergi toplama seferleriyle eyalette gücünü artırdı; Murâdî hânedanının atası odur.",
  kaynak:"TDV `muradiler`: \"Tunus mirlivâsı Ramazan Bey’in 1022’de (1613) vefatıyla yerine önce kardeşi Receb, ardından küçükken müslüman olan kölesi Korsikalı Murad Bey tayin edildi.\"",
  gun:"1022/1613 (TDV gün vermez)" },

{ t:"1631-01-01", b:"Murad Bey paşalıkla beylerbeyi oldu — Murâdîler dönemi başladı", tur:"hanedan", onem:5, dunya:2, kapsam:"dis",
  etiket:["hanedan","konu-hanedan","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Kayrevan'ı elinde tutan Şuâbiye Araplarını çıkarıp dayı üzerinde kesin üstünlük kuran Murad Bey, İstanbul'a gönderdiği hediyeler üzerine paşa rütbesiyle Tunus beylerbeyi yapıldı; vatan beyliği oğlu Hammûde'ye geçti. Beylik makamı böylece babadan oğula geçmeye başladı ve eyalette seksen yıla yakın sürecek Murâdî hânedanı dönemi açıldı; İstanbul bundan sonra çoğunlukla ailenin fiilî tayinlerini onaylamakla yetindi.",
  kaynak:"TDV `muradiler`: \"Murad Bey paşa rütbesiyle Tunus beylerbeyi oldu (1041/1631); yerine oğlu Hammûde Bey Tunus mirlivâlığına getirildi.\"",
  gun:"1041/1631 (TDV gün vermez)",
  celiski:"TDV `muradiler`: \"Böylece Tunus yönetiminde Murâdîler dönemi başlamış oldu.\" (1631 bağlamı) ↔ TDV `tunus`: \"1637 yılında önce Murad Paşa, ardından Yûsuf Dayı vefat etti.\" ve aynı paragrafın sonunda \"Böylece Tunus’ta Murâdîler dönemi başladı.\" — `tunus` başlangıcı 1637 sonrasına koyar; aynı maddede ayrıca \"Tunus’ta 1631’de Murâdî, 1705’te Hüseynî ailesi eyalet yönetiminde yetki sahibi olunca\" der (1631).",
  ic_not_d:"HARİTA: 1574-1705 Tunus Osmanlı DOĞRUDAN çiziliyor. TDV'ye göre fiilî özerklik 1591 (dayılar) ve 1631 (irsî Murâdî beyliği) ile başlıyor — OCAK_NOTU'na bakınız." },

{ t:"1637-01-01", b:"Murad Paşa ve Yûsuf Dayı öldü; Usta Murad dayı, Hammûde Bey vatan beyi", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Murad Paşa ile Tunus dayısı Yûsuf'un peş peşe ölümü üzerine dayılığa Cenevizli mühtedi Usta Murad getirildi; beylikte Murad Paşa'nın oğlu Hammûde Bey'in nüfuzu hızla arttı. Usta Murad döneminde Tunus limanı düzenlendi, kaleler onarıldı ve deniz ganimetleri için kanun hazırlandı.",
  kaynak:"TDV `muradiler`: \"Murad Paşa ile Tunus dayısının 1047’de (1637) peş peşe ölmesi üzerine Cenevizli Usta Murad dayılık makamına getirildi.\"",
  gun:"1047/1637 (TDV gün vermez)" },

{ t:"1665-01-01", b:"Murad Bey Fransa, Hollanda ve İngiltere ile ticaret sözleşmeleri imzaladı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["antlasma","konu-diplomasi","konu-ekonomi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Tunus mirlivâsı II. Murad Bey üç Avrupa devletiyle esir değişimi, Akdeniz'de gemi güvenliği ve limanlarda karşılıklı ticareti düzenleyen sözleşmeler yaptı. Tunus'un Osmanlı'dan bağımsız olarak yabancı devletlerle antlaşma yapabilmesinin erken örneklerindendir.",
  kaynak:"TDV `muradiler`: \"Tunus Mirlivâsı Murad Bey 1076’da (1665) Fransa, Hollanda ve İngiltere ile ticaret sözleşmeleri imzaladı.\"",
  gun:"1076/1665 (TDV gün vermez)" },

{ t:"1673-01-01", b:"Murad Bey dayıları yenip eyaletin tek hâkimi oldu", tur:"siyaset", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Hammûde Paşa'nın ölümünden sonra beylerle dayılar arasında çıkan çatışmada Murad Bey, Nisan 1672'de Dayı Şâban Hoca'yı halk desteğiyle görevden uzaklaştırdı; ardından yeni dayı Hacı Laz Ali'yi de yenerek bütün muhaliflerini tasfiye etti. Beylik, dayılığın üstüne kesin olarak çıktı.",
  kaynak:"TDV `muradiler`: \"bütün muhaliflerini ortadan kaldırdı ve eyaletin tek hâkimi oldu (1084/1673)\"",
  gun:"1084/1673 (TDV gün vermez)" },

{ t:"1675-01-01", b:"Murad Bey öldü — Murâdî ailesinde taht kavgası ve veba", tur:"kriz", onem:3, dunya:1, kapsam:"ic",
  etiket:["kriz","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Murad Bey'in ölümüyle oğulları Mehmed ve Ali ile kardeşi Mehmed el-Hafsî beylerbeyiliği ele geçirmek için birbirine girdi. İç savaş üç yıl süren bir veba salgınıyla birleşince çok sayıda insan öldü.",
  kaynak:"TDV `muradiler`: \"Murad Bey 1086’da (1675) vefat edince oğulları Mehmed ve Ali ile kardeşi Mehmed el-Hafsî, Tunus beylerbeyiliğini ele geçirmek için mücadeleye giriştiler.\"",
  gun:"1086/1675 (TDV gün vermez)" },

{ t:"1677-01-01", b:"İstanbul'un atadığı bey Mehmed el-Hafsî Tunus'a kabul edilmedi", tur:"siyaset", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","konu-siyasi","konu-idari"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"IV. Mehmed, Tunus'taki hâkimiyeti güçlendirmek için Mehmed el-Hafsî'yi bey tayin edip donanmayla gönderdi; ancak halk ve eyalet ileri gelenlerinin uyarısıyla donanma geri döndü. Merkezin tayini yerel güçlerce reddedilmiş, Tunus'un fiilî özerkliği açıkça görülmüştür.",
  kaynak:"TDV `muradiler`: \"bunlar halkın ve eyalet ileri gelenlerinin uyarısıyla geri döndüler (Zilkade 1087 / Ocak 1677)\"",
  gun:"Ocak 1677 (TDV gün vermez)",
  ic_not_d:"TDV `tunus` aynı olayı '1087’de (1676) Tunus’a beylerbeyi sıfatıyla ... Mehmed Paşa Hafsî yollandı' diye 1676'ya koyar (Hicrî 1087 iki Miladî yıla düşer). OCAK_NOTU'nda da kullanılabilir." },

{ t:"1684-01-01", b:"Cezayir ordusu Tunus'u kuşattı", tur:"kusatma", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Tunus", taraflar:["tunus-ocagi","cezayir-ocagi"],
  d:"Tunus dayısı Ahmed Çelebi ile baş edemeyen Murâdî kardeşler Ali ve Mehmed, Cezayir Beylerbeyi Mezemorta Hüseyin Paşa'dan yardım istedi. İbrâhim Hoca kumandasındaki Cezayir ordusu Tunus'u kuşattı; iki yıl süren kuşatmanın ardından dayı yakalanıp kardeşlere teslim edildi.",
  kaynak:"TDV `muradiler`: \"İbrâhim Hoca kumandasında Tunus’a gelen Cezayir ordusu şehri kuşattı (1095/1684).\"",
  gun:"1095/1684 (TDV gün vermez)" },

{ t:"1691-01-01", b:"Cezayir ordusu Kâf'ta Murâdî Mehmed Bey'i yendi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Kef", taraflar:["tunus-ocagi","cezayir-ocagi"],
  d:"Trablusgarp ile iş birliği yapan bir Cezayir ordusu Tunus'a girip Mehmed Bey'i Kâf'ta bozguna uğrattı. Tunus dayısı bu fırsatla Murad Bey'in küçük oğlu Ramazan'ı vatan beyi yaptıysa da Mehmed Bey bir süre sonra geri dönüp duruma yeniden hâkim oldu.",
  kaynak:"TDV `muradiler`: \"1102’de (1691) bir Cezayir ordusu Trablusgarp ile iş birliği halinde Tunus’a girdi ve Mehmed Bey’i Kâf’ta yenilgiye uğrattı.\"",
  gun:"1102/1691 (TDV gün vermez)" },

{ t:"1700-01-01", b:"III. Murad Bey Kostantîne'yi beş ay kuşattı", tur:"kusatma", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Konstantin", taraflar:["tunus-ocagi","cezayir-ocagi"],
  d:"Cezayir'den intikam almak için Fas Sultanı Mevlây İsmâil ve Trablusgarp ile anlaşan III. Murad Bey, Kostantîne beyinin birliklerini iki kez yendi ve şehri beş ay kuşattı. Cezayir Dayısı Hacı Mustafa karşısında ağır kayıp verip geri çekildi.",
  kaynak:"TDV `muradiler`: \"1700’de Kostantîne (Kosantîne) beyinin birliklerini iki defa yendi ve şehri beş ay kuşatma altında tuttu.\"",
  gun:"1700 (TDV gün vermez)",
  ic_not_d:"Kuşatma başarısız; Konstantin'de sahip değişimi yok, kırılma gerekmez." },

{ t:"1702-06-09", b:"III. Murad Bey öldürüldü — Murâdî hânedanı sona erdi", tur:"son", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Halka zulmüyle tanınan III. Murad Bey, Cezayir'e karşı yeni bir savaşa hazırlanırken çıkan bir iç isyanda öldürüldü; ailenin öteki erkek çocukları da katledildi. Seksen üç yıl vatan beyliğini elinde tutan Murâdîler'in yerini dayı, bey ve paşa unvanlarını kendinde toplayan İbrâhim Şerif aldı.",
  kaynak:"TDV `muradiler`: \"13 Muharrem 1114’te (9 Haziran 1702) bir iç isyan sırasında öldürüldü.\"",
  gun:"9 Haziran 1702 (13 Muharrem 1114)",
  ic_not_d:"İbrâhim Şerif'in unvanları topladığı bilgisi TDV `huseyin-pasa-tunus-beyi`: 'Murâdîler sülâlesine son verip (1702) dayı, bey ve paşa unvanlarını şahsında toplayan İbrâhim Şerif'." },

{ t:"1704-01-01", b:"Tunus-Cezayir savaşı — İbrâhim Şerif esir düştü", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Tunus", taraflar:["tunus-ocagi","cezayir-ocagi"],
  d:"İbrâhim Şerif'in yönetimindeki Tunus ile Cezayir arasında savaş çıktı; Hüseyin b. Ali bu savaşta sipahi ağası olarak görev yaptı. Cezayir beylerbeyinin Tunus'u istilâsı ve İbrâhim Şerif'in esir düşmesi, 1705'te Hüseyin'in bey seçilmesinin yolunu açtı.",
  kaynak:"TDV `huseyin-pasa-tunus-beyi`: \"1116 (1704) Tunus-Cezayir savaşı esnasında sipahi ağalığı görevini yürüttü\"",
  gun:"1116/1704 (TDV gün vermez; Hicrî 1116 = 1704-05)",
  ic_not_d:"İbrâhim Şerif'in esaretine TDV ayrıca yıl vermez; 12 Temmuz 1705 seçiminden önce olduğu anlaşılıyor. Cezayir istilâsı haritada kırılma değil." },

{ t:"1708-01-01", b:"Hüseyin Bey'e paşalık ve Tunus beylerbeyiliği verildi", tur:"idari", onem:3, dunya:1, kapsam:"dis",
  etiket:["idari","konu-idari","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"İstanbul'la iyi ilişkiler kuran Hüseyin Bey'e paşalık unvanıyla birlikte beylerbeyiliğin de verilmesi, beylik ile merkezin temsil makamını tek elde birleştirdi. Böylece Tunus beyi hem dayının hem de İstanbul'un gönderdiği beylerbeyinin görevlerini tek başına üstlenir oldu.",
  kaynak:"TDV `huseyin-pasa-tunus-beyi`: \"kendisine paşalık unvanıyla birlikte Tunus beylerbeyiliğinin verilmesi (1708) nüfuzunu daha da arttırdı\"",
  gun:"1708 (TDV gün vermez)" },

{ t:"1710-01-01", b:"Hüseyin Paşa beyliğin kendi oğullarına geçmesini karara bağlattı", tur:"hanedan", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Çocuğu olmadığı için yeğeni Ali Bey'i halef gösteren Hüseyin Paşa, bir oğlu doğunca emâret meclisini toplayıp iktidarın kendi çocuklarına geçmesi kararını aldırdı. Hüseynî hânedanının irsî temeli bu kararla atıldı; ancak dışlanan yeğen Ali'nin küskünlüğü 1729'da iç savaşa dönüştü.",
  kaynak:"TDV `huseyin-pasa-tunus-beyi`: \"meclisi toplayarak iktidarın kendi çocuklarına intikali için karar aldırdı (1710)\"",
  gun:"1710 (TDV gün vermez)" },

{ t:"1735-09-04", b:"Hüseyin Paşa Simence'de yenildi — Ali Paşa iktidarı ele geçirdi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri","konu-hanedan"], yer_id:"", odak_yer:["Tunus","Kayrevan"], taraflar:["tunus-ocagi","cezayir-ocagi"],
  d:"Yeğeni Ali Paşa Cezayir'in desteğiyle Tunus topraklarına girdi; Arap birliklerinin bir kısmı tarafından terk edilen Hüseyin Paşa Simence'de yenilip Kayrevan'a çekildi. Ali Paşa hem beylerbeyiliği hem vatan beyliğini aldı, karşılığında Cezayir dayısına yıllık haraç ödemeyi taahhüt etti; ülke Hüseyniyye ve Bahşiyye diye iki kampa bölündü.",
  kaynak:"TDV `huseyin-pasa-tunus-beyi`: \"Hüseyin Paşa, 4 Eylül 1735’te Simence’de mağlûp oldu ve Kayrevan’a çekilmek zorunda kaldı.\"",
  gun:"4 Eylül 1735",
  ic_not_d:"Cezayir'e haraç taahhüdü: Tunus'un Cezayir'e bir tür tâbiliği. Haritada Cezayir bağımlılığı çizilmiyor; bilgi. · ODAK: Simence yerleşim olarak yok; Hüseyin Paşa Kayrevan'a çekildi" },

{ t:"1739-05-25", b:"Kayrevan düştü, Hüseyin Paşa öldürüldü", tur:"kusatma", onem:3, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri","konu-hanedan"], yer_id:"Kayrevan", taraflar:["tunus-ocagi"],
  d:"Beş yıl Kayrevan'da kuşatma altında direnen Hüseyin Paşa, şehrin düşmesi üzerine Cezayir'e kaçarken yakalandı ve Ali Paşa'nın oğlu Yûnus tarafından öldürüldü. Bâbıâli, fiilen bir şey yapamayarak Ali Paşa'nın beylerbeyiliğini ve vatan beyliğini tasdik etmek zorunda kaldı.",
  kaynak:"TDV `huseyin-pasa-tunus-beyi`: \"16 Safer 1152’de (25 Mayıs 1739) şehrin düşmesi üzerine Cezayir’e kaçarken yakalandı ve Yûnus tarafından öldürüldü.\"",
  gun:"25 Mayıs 1739 (16 Safer 1152)" },

{ t:"1756-08-31", b:"Hüseyin Paşa'nın oğulları Cezayir desteğiyle Tunus'u aldı — Hüseynîler geri döndü", tur:"hanedan", onem:4, dunya:2, kapsam:"dis",
  etiket:["hanedan","konu-hanedan","konu-askeri"], yer_id:"Tunus", taraflar:["tunus-ocagi","cezayir-ocagi"],
  d:"Cezayir dayısının yardımını alan Mehmed ve Ali beyler Tunus'u zaptetti; Ali Paşa oğlu ve torunlarıyla birlikte öldürüldü. Hüseyin Paşa'nın oğlu Mehmed Bey dayılığa, kardeşi Ali Bey vatan beyliğine seçildi ve idare yeniden Hüseynî koluna geçti; Osmanlı Devleti Mehmed Paşa'nın beylerbeyiliğini Eylül 1758'de tasdik etti.",
  kaynak:"TDV `huseyniler`: \"31 Ağustos 1756’da Hüseyin Paşa’nın oğlu Mehmed Bey Tunus dayılığına seçildi; Ali Bey de vatan beyi oldu.\"",
  gun:"31 Ağustos 1756",
  ic_not_d:"TDV `tunus` bu olayı 'Cezayir Dayısı Ali Paşa ... 1756’da Tunus’a girdi' diye anlatır. HARİTA: 1756'da Tunus'ta Cezayir işgali kırılması yok (süre belirsiz, TDV vermez)." },

{ t:"1759-02-11", b:"Mehmed Paşa öldü; beylerbeyilik ve dayılık Ali Bey'e geçti", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Mehmed Paşa'nın ölümünde oğulları Mahmud ve İsmâil küçük olduğundan beylerbeyilik ve dayılık paşa unvanıyla kardeşi Ali Bey'e verildi. Ali Paşa yeğenlerini korumayı vasiyet gereği üstlendiyse de ileride beyliği kendi oğlu Hammûde'ye geçirdi.",
  kaynak:"TDV `huseyniler`: \"Mehmed Paşa’nın 11 Şubat 1759’da ölümünden sonra beylerbeyilik ve dayılık paşa unvanıyla birlikte Ali Bey’e verildi.\"",
  gun:"11 Şubat 1759" },

{ t:"1768-01-01", b:"Benzert'te Fransızlara mercan avı ve ticaret merkezi izni verildi", tur:"ekonomi", onem:2, dunya:2, kapsam:"dis",
  etiket:["ekonomi","konu-ekonomi","konu-diplomasi"], yer_id:"Benzert (Bizerte)", taraflar:["tunus-ocagi"],
  d:"Tunus Beyi Ali Bey, Fransızlara kuzey sahillerinde mercan avlama ve ticaret merkezi açma izni verdi. Bu imtiyaz Fransa'nın Benzert limanına yönelik emellerinin başlangıcı sayılır; 1881'de işgal edilen ilk merkezlerden biri Benzert oldu.",
  kaynak:"TDV `benzert`: \"1768 yılında Tunus Beyi Ali Bey zamanında kendilerine sahillerde mercan avlama ve ticaret merkezi açma izninin verilmesiyle ortaya çıktı\"",
  gun:"1768 (TDV gün vermez)" },

{ t:"1770-09-02", b:"Fransız bombardımanı ve ablukasının ardından Tunus-Fransa barışı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["antlasma","konu-diplomasi","konu-askeri"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Tunus korsanlarının Korsika'ya yönelik faaliyetleri yüzünden bir Fransız donanması Tunus'u bombaladı ve kıyıları üç ay abluka altında tuttu. Rus savaşı sırasında Osmanlı Devleti Tunus'tan donanma ve asker isteyince Ali Paşa Fransa ile barış yaptı.",
  kaynak:"TDV `huseyniler`: \"Osmanlı Devleti, Rus savaşı sebebiyle Tunus’tan donanma ve asker yardımı isteyince Fransa ile 2 Eylül 1770’te barış yapıldı.\"",
  gun:"2 Eylül 1770" },

{ t:"1782-05-26", b:"Ali Paşa öldü — Hammûde Paşa dönemi başladı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Oğlu Hammûde için 1781'de İstanbul'dan beylerbeyilik fermanı almış olan Ali Paşa öldü ve yönetim tamamen yirmi üç yaşındaki Hammûde'ye kaldı. Otuz iki yıl süren Hammûde Paşa dönemi, ziraat ve ticaretin geliştiği, Tunus'un en parlak devri olarak anılır.",
  kaynak:"TDV `huseyniler`: \"Ali Paşa 26 Mayıs 1782’de ölünceye kadar yeğenlerini korudu\"",
  gun:"26 Mayıs 1782 (TDV `hammude-pasa` 31 Mayıs der)",
  celiski:"TDV `huseyniler`: \"Ali Paşa 26 Mayıs 1782’de ölünceye kadar yeğenlerini korudu\" ↔ TDV `hammude-pasa`: \"Babası Ali Bey de kendi rızasıyla yönetimden çekildi ve 31 Mayıs 1782’de öldü.\"" },

{ t:"1802-03-04", b:"Tunus, Mısır seferi sonrası Fransa ile yeniden barış yaptı", tur:"antlasma", onem:2, dunya:2, kapsam:"dis",
  etiket:["antlasma","konu-diplomasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Fransızların Mısır'ı işgali üzerine Osmanlı'nın çağrısıyla öteki Garp ocakları gibi Fransa'ya savaş ilân eden Tunus, Fransa Mısır'dan çekilince barışı yeniledi. Hammûde Paşa döneminde Tunus Fransa, ABD, Napoli ve İspanya ile ayrı ayrı antlaşmalar yapan bir Akdeniz gücüydü.",
  kaynak:"TDV `hammude-pasa`: \"Fransa Mısır’dan çıkınca onunla 4 Mart 1802’de yeniden barış yaptı.\"",
  gun:"4 Mart 1802",
  ic_not_d:"Savaş ilânının tarihi belirsiz: `huseyniler` '1798’de Fransa’nın Mısır’ı istilâsı üzerine ... Fransa’ya savaş ilân etti' der; `hammude-pasa` ise savaş ilânıyla 'daha önce 25 Aralık 1798’de yaptığı barışı bozdu' der (yani ilân 1798 sonu/1799). Ayrı madde yazılmadı." },

{ t:"1811-09-30", b:"Tunus yeniçerileri Hüseynîlere karşı ayaklandı", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["isyan","konu-askeri"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Sayıları 3-4000'i bulan yeniçeriler, yönetimin tek ailede kalmasını çıkarlarına aykırı görerek Hammûde Paşa'yı öldürüp aralarından bey seçmek için ayaklandı ve doğrudan Osmanlı hükümetine tâbi olduklarını bildirdi. İsyan kanlı biçimde bastırıldı, ocağa büyük darbe vuruldu.",
  kaynak:"TDV `huseyniler`: \"30 Eylül 1811’de isyan ettiler ve Hüseynîler’i tanımadıklarını, doğrudan Osmanlı hükümetine tâbi olduklarını bildirdiler\"",
  gun:"30 Eylül 1811" },

{ t:"1814-12-22", b:"Mahmud Bey paşalıkla Tunus valisi oldu", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Hammûde Paşa'nın 6 Eylül 1814'te ölümüyle yerine geçen kardeşi Osman Bey, Bâbıâli'nin tasdiki gelmeden 9 Aralık'ta öldürüldü. Elli yıldır sırasını bekleyen Mehmed Paşa'nın oğlu Mahmud Bey paşalıkla vali tayin edildi; beylik böylece Hüseynîlerin öbür koluna döndü.",
  kaynak:"TDV `huseyniler`: \"Mahmud Bey, 22 Aralık 1814’te paşalık unvanı verilerek Tunus’a vali tayin edildi.\"",
  gun:"22 Aralık 1814" },

{ t:"1816-01-01", b:"Lord Exmouth'un İngiliz filosu Tunus'u bombalayıp korsanlığı kısıtladı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri","konu-diplomasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Viyana Kongresi'nden sonra Avrupa devletleri Garp ocaklarının korsanlığına yöneldi. Lord Exmouth kumandasındaki İngiliz filosu 1816'da ve 1819'da Tunus şehirlerini bombalayarak beyliği korsanlıkla ilgili şartları kabule zorladı.",
  kaynak:"TDV `huseyniler`: \"Lord Exmouth kumandasında bir İngiliz filosu 1816 ve 1819’da Tunus şehirlerini bombaladı ve onları korsanlık konusundaki şartları kabule zorladı.\"",
  gun:"1816 (TDV gün vermez; ikinci bombardıman 1819)" },

{ t:"1824-03-29", b:"Mahmud Paşa öldü, oğlu Hüseyin Paşa bey oldu", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Mahmud Paşa'nın ölümüyle oğlu Hüseyin Paşa Tunus beyi oldu. Onun döneminde Mora'ya gönderilen Tunus donanması Navarin'de yakıldı; Fransa'nın Cezayir'i işgalinde Tunus komşusuna yardım etmedi.",
  kaynak:"TDV `huseyniler`: \"Mahmud Paşa’nın 29 Mart 1824’te vefatından sonra yerine oğlu Hüseyin Paşa geçti.\"",
  gun:"29 Mart 1824 (TDV `tunus` 30 Mart der)",
  celiski:"TDV `huseyniler`: \"Mahmud Paşa’nın 29 Mart 1824’te vefatından sonra\" ↔ TDV `tunus`: \"Bu da 30 Mart 1824’te ölünce oğlu Seydi Hüseyin Bey Tunus dayısı oldu.\"" },

{ t:"1830-08-17", b:"Tunus Fransa ile antlaşma yapıp korsanlığı ve köleliği kaldırmayı taahhüt etti", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","konu-diplomasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Cezayir'in Fransızlarca işgali sırasında Hüseyin Paşa komşusuna yardım etmediği gibi Kaptanıderyâ Tâhir Paşa'nın Tunus üzerinden geçişine de izin vermedi. Durumunu güçlendirmek için Fransa ile antlaşma imzaladı; bu tarihten sonra Tunus paşaları Fransa'nın teşvikiyle Bâbıâli'ye karşı daha bağımsız davrandı.",
  kaynak:"TDV `huseyniler`: \"Fransa ile bir antlaşma imzalayıp korsanlık ve köleliği kaldırmayı taahhüt etti (17 Ağustos 1830)\"",
  gun:"17 Ağustos 1830" },

{ t:"1835-05-21", b:"Hüseyin Paşa öldü; Mustafa Bey ferik rütbesiyle vali oldu", tur:"hukumdar", onem:3, dunya:1, kapsam:"dis",
  etiket:["hanedan","konu-hanedan","konu-idari"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Hüseyin Paşa'nın ölümüyle kardeşi Mustafa Bey, yeni Osmanlı teşkilâtına göre asâkir-i mansûre ferikliği rütbesiyle vali tayin edildi. Aynı yıl Osmanlı'nın Trablusgarp'ta Karamanlı hâkimiyetine son vermesi Tunus'ta aynı âkıbet korkusu doğurdu ve Mustafa Paşa Fransa'ya yaklaştı; Bâbıâli'nin yıllık vergi talebi de kabul edilmedi.",
  kaynak:"TDV `huseyniler`: \"Hüseyin Paşa’nın 21 Mayıs 1835’te ölümü üzerine kardeşi Mustafa Bey, yeni teşkilâta göre asâkir-i mansûre ferikliği rütbesiyle vali tayin edilerek\"",
  gun:"21 Mayıs 1835" },

{ t:"1837-10-11", b:"Ahmed Bey Tunus beyi oldu", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Mustafa Paşa'nın ölümüyle oğlu Ahmed Bey başa geçti. Hüseynîlerin onuncu beyi olan Ahmed, Batılılaşma hareketini başlatan ve Osmanlı hâkimiyetine karşı Fransa'ya dayanarak bağımsızlık arayan ilk bey oldu.",
  kaynak:"TDV `huseyniler`: \"Mustafa Paşa’nın 11 Ekim 1837’de ölümünden sonra yerine oğlu Ahmed Bey geçti.\"",
  gun:"11 Ekim 1837" },

{ t:"1838-01-01", b:"Tunus'u merkeze doğrudan bağlama tasarısından Fransa yüzünden vazgeçildi", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi","konu-idari"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Ahmed Paşa yıllık verginin affı için Şeyh İbrâhim er-Riyâhî'yi İstanbul'a gönderince Bâbıâli Tunus'u Trablusgarp gibi doğrudan merkeze bağlamayı düşündü. Fransa'nın itirazı ve tehditleri üzerine bundan vazgeçildi; aynı yıl Tunus İstanbul'la yazışmalarda Türkçe yerine Arapça kullanmaya başladı.",
  kaynak:"TDV `huseyniler`: \"Fransa’nın karşı çıkması ve tehditkâr davranması üzerine bundan vazgeçilip (1838)\" · TDV `garp-ocaklari`: \"Tunus’ta Ahmed Paşa’dan itibaren İstanbul ile yazışmalarda Arapça kullanılmaya başlandı (1838).\"",
  gun:"1838 (TDV gün vermez)" },

{ t:"1839-01-01", b:"Tâhir Paşa'nın donanması Fransa'nın müdahalesiyle Tunus'tan çekildi", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-askeri","konu-diplomasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"İstanbul, Osmanlı hâkimiyetini güçlendirmek için Kaptan Tâhir Paşa kumandasında Tunus'a bir donanma gönderdi; Fransa'nın Ahmed Bey'e donanmayla destek vermesi üzerine Osmanlı donanması geri çekildi. Ardından Ahmed Bey'e paşalık ve Tunus beyliği verildi.",
  kaynak:"TDV `ahmed-bey`: \"Fransa’nın Ahmed Bey’e bir donanma ile yardım göndermesi üzerine geri çekilmek zorunda kaldı (1839)\"",
  gun:"1839 (TDV gün vermez)",
  ic_not_d:"TDV `tunus` aynı olayı farklı anlatır: 'Çengeloğlu Tâhir Bey’in Trablusgarp’tan buraya gelen donanması Tunus’ta Osmanlı idaresini kuvvetlendirdi ve Ahmed Bey’i görevden aldı' (yılsız). Anlatı çelişkisi var, yıl yalnız `ahmed-bey`de." },

{ t:"1840-01-01", b:"Bardo'da Avrupa tarzı harp okulu açıldı", tur:"reform", onem:3, dunya:1, kapsam:"ic",
  etiket:["reform","konu-askeri","konu-kultur"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Ahmed Bey Fransız subaylar getirterek Bardo Sarayı yanında Avrupa tarzı bir yüksek harp okulu açtı; ordu 5000'den 20.000 askere çıkarıldı ve Avrupa usulü giydirildi. Okulun mezunları, Hayreddin Paşa dahil, XIX. yüzyılın ikinci yarısında Tunus'un yönetici kadrosunu oluşturdu.",
  kaynak:"TDV `tunus`: \"1840’ta Bardo’da Avrupa tarzında ilk yüksek harp okulu açıldı.\"",
  gun:"1840 (TDV gün vermez)" },

{ t:"1846-01-01", b:"Ahmed Bey Tunus'ta köleliği kaldırdı", tur:"reform", onem:4, dunya:2, kapsam:"ic",
  etiket:["reform","konu-idari"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Köle ticaretini 1841'de yasaklayan Ahmed Bey, 1846'da köleliği tamamen kaldırdı ve köle pazarlarını kapattırdı. Aynı yıl Fransa kralının davetlisi olarak Paris'e gitti ve orada bağımsız bir hükümdar gibi karşılandı.",
  kaynak:"TDV `ahmed-bey`: \"köle ticaretini yasakladı ve bir müddet sonra da köleliği tamamen kaldırdı (1846)\"",
  gun:"1846 (TDV gün vermez; Paris ziyareti 5 Ekim 1846)",
  ic_not_d:"TDV `tunus`: 'Köle ticareti 1841’de yasaklandı, ticaretin yapıldığı pazarlar 1846’da kapatıldı.'" },

{ t:"1848-01-01", b:"Ahmed Bey'e yalnız kendi şahsı için bağımsızlık tanıyan ferman gönderildi", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Osmanlı-Tunus gerginliği, Fransa'nın Tunus'a yerleşmesinden çekinen İngiltere'nin aracılığıyla uzlaşmaya bağlandı. Hatt-ı hümâyunlu bir fermanla, haleflerine geçmemek şartıyla yalnız Ahmed Bey'e bağımsızlık tanındı; Ahmed Bey karşılığında padişaha hediyeler gönderdi.",
  kaynak:"TDV `ahmed-bey`: \"halefleri için geçerli olmamak üzere yalnız kendisine bağımsızlık tanındı (1848)\"",
  gun:"1848 (TDV gün vermez)",
  ic_not_d:"Haritada 1848-1855 arası için tâbi→bağımsız kırılması YOK ve önerilmiyor: TDV `huseyniler` aynı dönemde ibkā fermanı ve 1852 iftihar nişanı gönderildiğini, Tunus'un Kırım'a asker yolladığını yazar. Kişiye bağlı statü; OCAK_NOTU'na eklendi." },

{ t:"1854-01-01", b:"Tunus Kırım Savaşı'na 14.000 kişilik kuvvet gönderdi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Ahmed Paşa, Kırım Savaşı'nda Ruslara karşı Osmanlı ordusunda savaşmak üzere 14.000 kişilik yardımcı bir kuvvet gönderdi. Sultan Abdülmecid onu iftihar nişanı ve hediyelerle ödüllendirdi; Tunus'un bağımsızlık arayışına rağmen Osmanlı'ya askerî bağlılığını gösterdi.",
  kaynak:"TDV `huseyniler`: \"Kırım Savaşı’nda Osmanlı Devleti’ne 14.000 kişilik yardımcı bir kuvvet gönderdi (1854)\"",
  gun:"1854 (TDV gün vermez)" },

{ t:"1857-09-10", b:"Ahdü'l-emân ilân edildi", tur:"kanun", onem:4, dunya:2, kapsam:"ic",
  etiket:["reform","konu-idari","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Mehmed Paşa, Fransız ve İngiliz konsoloslarının baskısıyla Tanzimat ve Islahat fermanlarının esaslarını içeren Ahdü'l-emân'ı yayımladı. Belge halka can ve mal güvenliği, vergi ve ticaret eşitliği, din hürriyeti, yabancılara mülk edinme hakkı vaat ediyordu; Tunus'un anayasal reform sürecinin başlangıcıdır.",
  kaynak:"TDV `huseyniler`: \"Tanzimat ve Islahat fermanlarının esaslarını içeren “Ahdü’l-emân”ı yayımladı (10 Eylül 1857)\"",
  gun:"10 Eylül 1857" },

{ t:"1861-01-29", b:"İlk Tunus anayasası Kānûnü'd-devle ilân edildi, Meclis-i Ekber açıldı", tur:"anayasa", onem:5, dunya:2, kapsam:"ic",
  etiket:["anayasa","konu-siyasi","konu-idari"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Mehmed Sâdık Paşa, III. Napolyon'la Cezayir'de görüştükten sonra ilk Tunus anayasasını ilân etti. Yürütme beye, yasama beyin seçtiği nâzırlarla altmış üyeli Meclis-i Ekber'e verildi, yargı bağımsız sayıldı; TDV'ye göre anayasa Tunus'un Osmanlı'ya bağlılığını azaltıp Avrupa etkisini artıran bir dönemi başlattı.",
  kaynak:"TDV `huseyniler`: \"29 Ocak 1861’de ilk Tunus anayasası “Kānûnü’d-devle” adıyla ilân edildi ve Meclis-i Ekber açıldı.\"",
  gun:"29 Ocak 1861" },

{ t:"1863-01-01", b:"Tunus Paris'teki Erlanger bankasından ilk dış borcu aldı", tur:"ekonomi", onem:3, dunya:2, kapsam:"dis",
  etiket:["ekonomi","konu-ekonomi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Artan israf ve iç borçlanmanın yetmemesi üzerine Paris'teki Erlanger şirketinden borç alındı. 1863 ve 1865 dış borçlanmaları Tunus maliyesini iflâsa sürükledi ve Avrupa'nın malî denetiminin, sonunda da işgalin yolunu açtı.",
  kaynak:"TDV `huseyniler`: \"İç borçlanma fayda sağlamadığından 1863’te Paris’teki Banker Erlanger şirketinden borç para alındı.\"",
  gun:"1863 (TDV gün vermez)" },

{ t:"1864-01-01", b:"İbn Gızâhum isyanı — anayasa askıya alındı", tur:"isyan", onem:4, dunya:1, kapsam:"ic",
  etiket:["isyan","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Şahsî verginin (mecbâ) artırılması üzerine önce güneydeki ve batıdaki yarı göçebe kabileler, yazın da kuzey sahilleri ayaklandı; isyan bütün ülkeye yayıldı. Meclis-i Ekber'in çalışmaları durduruldu ve anayasa askıya alındı. İsyan sırasında bazı şehirler Osmanlı bayrağı çekti; Bâbıâli Ali Haydar Efendi'yi fevkalâde komiser olarak gönderdi.",
  kaynak:"TDV `huseyniler`: \"Aşırı vergilerin Tunus halkı için tahammül edilmez bir noktaya gelmesi halkın İbn Gızâhum’un liderliğinde ayaklanmasına sebep oldu (1864)\"",
  gun:"1864 (TDV gün vermez; `mehmed-sadik-pasa`: '1864 başında' başladı)" },

{ t:"1869-01-01", b:"Milletlerarası Maliye Komisyonu kuruldu, başına Hayreddin Paşa getirildi", tur:"ekonomi", onem:4, dunya:2, kapsam:"dis",
  etiket:["ekonomi","konu-ekonomi","konu-diplomasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Borç faizlerinin bile ödenemez hale gelmesi üzerine Fransa'nın zorlamasıyla Fransız, İngiliz ve İtalyan üyelerden oluşan uluslararası bir maliye komisyonu kuruldu. Başkanlığa Mehmed Sâdık Paşa'nın ısrarıyla Hayreddin Paşa getirildi; Tunus maliyesi fiilen yabancı denetimine girdi.",
  kaynak:"TDV `hayreddin-pasa-tunuslu`: \"1869’da borçları düzenlemek ve birleştirmek için kurulan Milletlerarası Maliye Komisyonu başkanlığına tayin edildi\"",
  gun:"1869 (gün kullanılmadı — bkz. ic_not_d)",
  ic_not_d:"TDV `mehmed-sadik-pasa` 'Fransa’nın zorlamasıyla 5 Temmuz 1969 tarihinde bir milletlerarası maliye komisyonu kuruldu' der — yıl açıkça dizgi hatası (1869). Gün (5 Temmuz) bu kusurlu cümleden devralınmadı; koordinatör kabul ederse t:'1869-07-05' yapılabilir." },

{ t:"1871-10-24", b:"Ferman ile Tunus valiliği Mehmed Sâdık Paşa ailesine irsî olarak verildi", tur:"diplomasi", onem:5, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Fransa'nın Prusya'ya yenilmesini fırsat bilen Mehmed Sâdık Paşa, Hayreddin Paşa'yı ikinci kez İstanbul'a gönderdi. Çıkan fermanla Tunus'un Osmanlı'ya bağlılığı teyit edildi, valilik veraseten Hüseynî ailesine verildi; hutbe ve para padişah adına olacak, iç işler serbest, yabancı devletlerle siyasî antlaşma yasak olacaktı. Fransa fermanı tanımadı.",
  kaynak:"TDV `huseyniler`: \"9 Şâban 1288 (24 Ekim 1871) tarihli fermanla Tunus’un Osmanlı Devleti’ne bağlılığı ve valiliğin veraseten Mehmed Sâdık Paşa ailesine verildiği teyit edildi.\"",
  gun:"24 Ekim 1871 (9 Şâban 1288); TDV `tunus` 23 Ekim der",
  celiski:"TDV `huseyniler`: \"9 Şâban 1288 (24 Ekim 1871) tarihli fermanla\" ↔ TDV `tunus`: \"23 Ekim 1871 tarihli fermanla Tunus Emirliği, doğrudan İstanbul’a bağlı kalmak üzere Mehmed Sâdık Paşa ve evlâdına veraset usulüyle verildi.\"",
  ic_not_d:"Harita 1705-1881 tâbi çiziyor; bu ferman tâbiliği hukuken teyit eder, kırılma gerektirmez." },

{ t:"1873-10-21", b:"Hayreddin Paşa reîs-i müdîrân (başvezir) oldu", tur:"reform", onem:4, dunya:1, kapsam:"ic",
  etiket:["reform","konu-idari"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Otuz altı yıldır başvezirlik yapan Hazinedar Mustafa Paşa'nın azliyle Hayreddin Paşa Tunus'un en yüksek idarî makamına getirildi. Dört yıllık görevinde idare, maliye, tarım, mahkemeler, vakıflar ve eğitimde kapsamlı reformlar yaptı, dış borçların düzenli ödenmesine ve Osmanlı ile yakınlaşmaya önem verdi.",
  kaynak:"TDV `hayreddin-pasa-tunuslu`: \"Hazinedar Mustafa Paşa’nın azli üzerine bu göreve 21 Ekim 1873’te Hayreddin Paşa tayin edildi.\"",
  gun:"21 Ekim 1873" },

{ t:"1875-01-01", b:"Sâdıkıyye Medresesi (Sâdıkī Koleji) açıldı", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","konu-kultur"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Hayreddin Paşa, Hazinedar Mustafa Paşa'nın müsadere edilen mallarıyla lise düzeyinde modern öğretim yapan el-Medresetü's-Sâdıkıyye'yi açtırdı. Geleneksel dinî eğitimle Batı tarzı eğitimi birleştiren okul, bağımsızlık mücadelesine öncülük eden Tunuslu kadroları yetiştirdi.",
  kaynak:"TDV `hayreddin-pasa-tunuslu`: \"el-Medresetü’s-Sâdıkıyye’nin açılmasını sağladı (1875)\"",
  gun:"1875 (TDV gün vermez); TDV `tunus` 1876 der",
  celiski:"TDV `hayreddin-pasa-tunuslu`: \"el-Medresetü’s-Sâdıkıyye’nin açılmasını sağladı (1875)\" ↔ TDV `tunus`: \"1876’da Sâdıkī Koleji açıldı.\"" },

{ t:"1877-07-21", b:"Hayreddin Paşa başvezirlikten istifa etti", tur:"siyaset", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Kötü hasat, boşalan hazine, konsolosların entrikaları ve 93 Harbi'nde Osmanlı'ya verdiği desteğin tepki çekmesi üzerine Hayreddin Paşa istifa etti. Yerine gelen idareciler döneminde yönetim yeniden eski sıkıntılara düştü; Tunus'un Osmanlı ile yakınlaşma siyaseti de sona erdi.",
  kaynak:"TDV `hayreddin-pasa-tunuslu`: \"Hayreddin Paşa, iç ve dış baskılar sonucu 21 Temmuz 1877’de reîs-i müdîrânlıktan istifa etti.\"",
  gun:"21 Temmuz 1877" },

{ t:"1881-01-01", b:"Fransa 30.000 kişilik kuvvetle Tunus'u istilâya başladı", tur:"isgal", onem:4, dunya:3, kapsam:"dis",
  etiket:["isgal","konu-askeri"], yer_id:"Tunus", taraflar:["tunus-ocagi"],
  d:"Fransa, Cezayir sınırındaki kabile karışıklıklarını bahane ederek Tunus'u istilâya başladı. Mehmed Sâdık Paşa Osmanlı Devleti'nden yardım istediyse de yeterli yardım gönderilemedi; Fransız ilerleyişi Bardo Antlaşması'yla sonuçlandı.",
  kaynak:"TDV `huseyniler`: \"Fransa, Nisan 1881’de 30.000 kişilik bir kuvvetle ülkeyi istilâya başladı.\"",
  gun:"Nisan 1881 (TDV gün vermez)",
  ic_not_d:"t:'1881-01-01' kural gereği (ay var, gün yok); sıralamada Ocak'a düşer. Haritada işgal 1881-05-12'de başlıyor; istilânın Nisan başlangıcı için kırılma önerilmiyor (Bardo maddesi korpusta var)." },

{ t:"1881-07-15", b:"Fransız donanması direnen Sefâkus'u bombalayıp ele geçirdi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Sfaks", taraflar:["tunus-beyligi-fransiz"],
  d:"Bardo Antlaşması'nı tanımayan Sefâkus halkı Fransızlara karşı direndi. Fransız donanması şehri yeniden bombaladı ve şiddetli direnişe rağmen kontrol altına aldı; güneydeki kabile direnişinin önderi Ali b. Halîfe sonunda Trablusgarp'a geçerek Osmanlı'ya sığındı.",
  kaynak:"TDV `sefakus`: \"halkının şiddetli direnişine rağmen şehri kontrol altına aldı (15 Temmuz 1881)\"",
  gun:"15 Temmuz 1881",
  ic_not_d:"TDV `sefakus` antlaşmayı 'Bordeaux Antlaşması' diye yazıyor (dizgi hatası, Bardo). Harita: Sfaks 1881-05-12'den beri isg; 15 Temmuz için ayrı kırılma yok — direniş dönemi haritada görünmüyor." },

{ t:"1882-10-27", b:"Mehmed Sâdık Paşa öldü, yerine kardeşi Ali Bey geçti", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-beyligi-fransiz"],
  d:"Bardo Antlaşması'nı imzalamak zorunda kalan Mehmed Sâdık Paşa öldü; Fransa kardeşi Seydi Ali Bey'i Tunus beyi tayin etti. Ali Bey ile imzalanan 1883 Mersâ Sözleşmesi himayeyi fiilî Fransız idaresine dönüştürdü.",
  kaynak:"TDV `mehmed-sadik-pasa`: \"Mehmed Sâdık Paşa bu olaylardan kısa bir süre sonra 27 Ekim 1882 tarihinde vefat etti, yerine kardeşi Seydi Ali Bey geçti.\"",
  gun:"27 Ekim 1882" },

{ t:"1896-01-01", b:"Modernist Tunuslular el-Cem'iyyetü'l-Haldûniyye'yi kurdu", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","konu-kultur","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-beyligi-fransiz"],
  d:"Bardo Harp Okulu ile Sâdıkī Koleji mezunları, geleneksel İslâmî eğitimle yabancı dil ve modern ilimleri birleştirmek amacıyla Haldûniyye cemiyetini kurdu. Aynı yıl çıkan ez-Zehrâ gazetesiyle birlikte cemiyet, bağımsızlığa giden sürecin temellerinden sayılır.",
  kaynak:"TDV `tunus`: \"1896’da el-Cem‘iyyetü’l-Haldûniyye’yi kurdular\"",
  gun:"1896 (TDV gün vermez)" },

{ t:"1902-01-01", b:"Muhammed el-Hâdî Tunus beyi oldu", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-beyligi-fransiz"],
  d:"Seydi Ali Bey'in ardından Muhammed el-Hâdî Hüseynî tahtına geçti. Himaye düzeninde bey nazarî hükümdardı; vekiller heyetinin başkanı Fransız'dı ve asıl yetki genel valideydi.",
  kaynak:"TDV `huseyniler`: \"Seydi Ali Bey’den sonra sırasıyla Muhammed el-Hâdî (1902-1906), Muhammed en-Nâsır (1906-1922)\"",
  gun:"1902 (TDV gün vermez)" },

{ t:"1906-01-01", b:"Muhammed en-Nâsır Tunus beyi oldu", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-beyligi-fransiz"],
  d:"Muhammed el-Hâdî'nin ardından Muhammed en-Nâsır Hüseynî beyi oldu. On altı yıllık beyliği Genç Tunuslular hareketi, Trablusgarp Savaşı ve I. Dünya Savaşı yıllarına denk geldi.",
  kaynak:"TDV `huseyniler`: \"Muhammed el-Hâdî (1902-1906), Muhammed en-Nâsır (1906-1922), Muhammed el-Habîb (1922-1929)\"",
  gun:"1906 (TDV gün vermez)" },

{ t:"1908-01-01", b:"Genç Tunuslular Cemâatü'ş-şebâb et-Tûnisiyye'yi kurdu", tur:"siyaset", onem:3, dunya:2, kapsam:"ic",
  etiket:["siyaset","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-beyligi-fransiz"],
  d:"Jön Türkler'den ilham alan Ali Bâş Hanbe, Zemerî, Abdülazîz es-Seâlibî ve Abdülcelîl Zavuş, Genç Tunuslular teşkilâtını kurarak siyasî faaliyete başladı. Hareket, Fransız himayesine karşı örgütlü millî siyasetin ilk adımlarındandır.",
  kaynak:"TDV `tunus`: \"1908 yılında Jön Türkler’den ilham alarak kurdukları Cemâatü’ş-şebâb et-Tûnisiyye adlı teşkilâtla\"",
  gun:"1908 (TDV gün vermez)" },

{ t:"1911-01-01", b:"Trablusgarp Savaşı Tunusluları Osmanlı'ya yaklaştırdı", tur:"siyaset", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","konu-siyasi","konu-diplomasi"], yer_id:"Tunus", taraflar:["tunus-beyligi-fransiz"],
  d:"İtalya'nın Trablusgarp'a saldırısı Tunus kamuoyunu Osmanlı Devleti'ne yaklaştırdı; Tunuslular savaşa açıkça destek verdi. Ali Bâş Hanbe bu desteği artırmak için bir dernek kurdu.",
  kaynak:"TDV `tunus`: \"İtalyanlar’ın 1911’de Trablusgarp’a saldırıları Tunuslular’ı Osmanlı Devleti’ne daha fazla yaklaştırdı\"",
  gun:"1911 (TDV gün vermez)" },

{ t:"1912-01-01", b:"Cellaz olayı sonrası Ali Bâş Hanbe Tunus'tan sürüldü", tur:"siyaset", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-beyligi-fransiz"],
  d:"Cellaz Mezarlığı olayından sonra Genç Tunuslular'ın önderi Ali Bâş Hanbe yargılanıp Fransa'ya sürgün edildi. I. Dünya Savaşı yıllarında İstanbul'a gelerek mücadelesini oradan sürdürdü.",
  kaynak:"TDV `tunus`: \"Cellaz Mezarlığı olayı diye bilinen olaydan sonra 1912’de yargılanıp Fransa’ya sürgüne gönderildi.\"",
  gun:"1912 (TDV gün vermez)" },

{ t:"1920-01-01", b:"Seâlibî el-Hizbü'd-düstûrî'yi kurdu", tur:"kurulus", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","konu-siyasi"], yer_id:"Tunus", taraflar:["tunus-beyligi-fransiz"],
  d:"Abdülazîz es-Seâlibî'nin kurduğu Düstûr Partisi, Fransız sömürgeciliğine karşı ilk düzenli siyasî hareket oldu. Aynı yıl Paris'te yayımlanan La Tunisie martyre adlı kitabı gençliği derinden etkiledi; parti 1934'te Yeni Düstûr'un ayrılmasına kadar millî hareketin ana gövdesiydi.",
  kaynak:"TDV `tunus`: \"Tunus’ta Fransız sömürgeciliğine karşı ilk düzenli siyasî hareket Abdülazîz b. İbrâhim es-Seâlibî’nin 1920’de kurduğu el-Hizbü’d-düstûrî ile başladı.\"",
  gun:"1920 (TDV gün vermez)" },

{ t:"1922-01-01", b:"Muhammed el-Habîb Tunus beyi oldu", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Tunus", taraflar:["tunus-beyligi-fransiz"],
  d:"Muhammed en-Nâsır'ın ardından Muhammed el-Habîb Hüseynî beyi oldu. Beylik Fransız himayesi altında şeklî bir makam olarak sürüyordu.",
  kaynak:"TDV `huseyniler`: \"Muhammed en-Nâsır (1906-1922), Muhammed el-Habîb (1922-1929)\"",
  gun:"1922 (TDV gün vermez)" }

];
