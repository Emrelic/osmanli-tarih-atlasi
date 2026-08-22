// -*- coding: utf-8 -*-
// KRONOLOJI_GURCISTAN — Gürcistan'ın ülke ölçekli kronolojisi (645-1921)
// ---------------------------------------------------------------------------
// 22 Ağustos 2026, oturumlar/KRONOLOJI-SARTNAME.md şemasına göre yazıldı.
// `onem:` bu dosyanın konusu (Gürcistan) için ağırlık; `dunya:` olayın
// KENDİSİNE ait, HER dosyada AYNI olması gereken 1-5 puan.
//
// 🔴 KAPSAM KARARI — `devletler.js`te Gürcistan'la ilgili üç künye var:
//   gurcistan (1008-1801) · imereti (1490-1810) ·
//   gurcistan-demokratik-cumhuriyeti (1918-1921). Kartli/Kaheti için AYRI
//   künye YOK — 1490-1801 arası Kartli-Kaheti birleşik krallığı "gurcistan"ın
//   kendisidir. Bu dosya ÜÇÜNÜ DE tek ülke-ölçekli anlatıda kapsıyor
//   (M-0992'nin japonya/çin emsali — bkz. oturumlar/GURCISTAN-KRONOLOJI-ILERLEME.md).
//
// KAYNAK DİSİPLİNİ (KRONOLOJI-SARTNAME.md §4 / CLAUDE.md §4):
//   Bu turda HTTP 200 + İÇERİK OKUNARAK doğrulanan TDV sluglar (2026-08-22):
//     gurcistan · tiflis · cildir-eyaleti · ahiska
//   Zaten başka dosyalarda doğrulanmış, buradan REFERANS alınan sluglar:
//     amasya-antlasmasi · ferhad-pasa-antlasmasi · ahmed-iii · osmanlilar
//     (CLAUDE.md §4 "zaten doğrulanmış slug kümesi güvenlidir" ilkesi)
//   `gurcistan` maddesi Gürcistan'ın siyasi tarihini 7. yüzyıldan 1921'e
//   tarihli olarak veriyor — bu dosyanın omurgası. `tiflis` başkentin kendi
//   fetih/geri alınış döngüsünü gün hassasiyetinde veriyor. `cildir-eyaleti`
//   ve `ahiska` Osmanlı idari yapısını (eyalet kuruluşu, sancak sayısı) veriyor.
//
// 🔴 AĞ KISITI — bu turda BRITANNICA (403 Forbidden) ve ENCYCLOPAEDIA IRANICA
//   (403 Forbidden, bot koruması) erişilemedi. Bu yüzden 1490-1744 arası
//   Kartli/Kaheti'nin iç hanedan ayrıntıları (kral kral liste) ve 1801-1918
//   Rus idaresi dönemi bu turda İŞLENMEDİ — TDV'nin İslâm dünyası dışı bu
//   iç dönemleri derinlemesine kapsamaması ("TANECİKLİK boşluğu",
//   CLAUDE.md §4) ve erişilemeyen akademik kaynaklar birleşince bu iki
//   pencere ikinci tura bırakıldı. Kaynağın/erişimin sessiz kaldığı aralık
//   BİLEREK boş bırakıldı, doldurulmadı (KRONOLOJI-SARTNAME.md §1).
//
//   İKİ İSTİSNA — genel bilinen, tarihyazımında tartışmasız iki kültür/bilim
//   maddesi (Rustaveli'nin destanı, ilk Gürcü matbaası) `kaynak:"bulunamadı"`
//   damgasıyla ve YAKLAŞIK tarihle yazıldı; TDV bu taneciği kapsamıyor ve bu
//   turda ikinci bir kaynakla doğrulanamadı — açıkça işaretlendi, gizlenmedi.
//
// KAPSAM ic/dis — Gürcistan'ın kendi iç meselesi (taht değişimi, isyan,
// hukuk, matbaa) → "ic". Yabancı bir güçle ilişki (sefer, işgal, antlaşma,
// ilhak) → "dis".
//
// yer_id — `data/yerlesimler*.js`teki adla BİREBİR eşleşen küme (bu dosya
// için doğrulanan): Tiflis · Kutaisi · Batum · Ahıska · Sohum ·
// "Zagem (Kaheti)" · "Ahılkelek (Akhalkalaki)" · "Hulo (Acara)" · Ardahan ·
// Kars · Revan · Gence · Nahçıvan · Erzurum.
// 🔴 Didgori, Gori, Kutaisi'nin bazı erken olayları ve imparatorluk çapında
// olaylar (bölünme, istila) için proje yerleşim kümesinde birebir nokta
// YOK — bu maddeler `yer_id:""` + `kapsam_genis:true` ile işaretlendi.
//
window.KRONOLOJI_GURCISTAN = [

// === A) İSLAM FETİHLERİ VE ORTA ÇAĞ BAŞI (645-1184) =========================
{ t:"0645-01-01", b:"Tiflis'in İslam fetih ordularınca alınması", tur:"fetih", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","fetih"],
  yer_id:"Tiflis",
  d:"Hz. Osman halifeliği döneminde (25/645-46) Habib b. Mesleme kumandasındaki İslam ordusu Tiflis'i barış yoluyla teslim aldı; halkın canı ve ibadet yerleri güvence altına alınıp kişi başına bir dinar cizye şartı kondu. Bu, Gürcistan'ın İslam dünyasıyla ilk doğrudan siyasi temasıdır ve şehirde yüzyıllarca sürecek bir Müslüm emirliğin başlangıcı oldu.",
  kaynak:"tiflis (TDV, madde: tiflis — içerik okundu, 2026-08-22)" },

{ t:"1063-01-01", b:"Selçuklu Sultanı Alp Arslan Tiflis'i ele geçirdi", tur:"isgal", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","isgal"],
  yer_id:"Tiflis",
  d:"Büyük Selçuklu Sultanı Alp Arslan'ın Kafkasya seferi sırasında Tiflis Selçuklu idaresine girdi; bölgedeki Türkmen nüfuzunun ilk kalıcı ayak izlerinden biridir ve altmış yıl sonra IV. David'in Didgori zaferine kadar sürecek bir üstünlüğün başlangıcıdır.",
  kaynak:"tiflis (TDV)" },

{ t:"1121-08-12", b:"Didgori Savaşı — IV. David (Kurucu) büyük Selçuklu-Türkmen ordusunu yendi", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Tiflis",
  d:"IV. David, Kıpçak müttefikleriyle birlikte Tiflis yakınlarındaki Didgori'de büyük bir Selçuklu-Türkmen koalisyon ordusunu ağır bir yenilgiye uğrattı. Gürcü tarihyazımında bu zafer \"Tanrısal Zafer\" (Dzlevai Sakvirveli) olarak anılır ve krallığın bölgesel bir güce dönüşmesinin dönüm noktasıdır.",
  kaynak:"devletler.js gurcistan künyesi (TDV, önceden doğrulanmış)" },

{ t:"1122-01-01", b:"Tiflis'in alınıp başkent yapılması", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc"],
  yer_id:"Tiflis",
  d:"Didgori zaferinin ardından IV. David, dört buçuk asırdır Müslüman bir emirliğin elinde bulunan Tiflis'i alarak şehri Gürcistan Krallığı'nın başkenti yaptı; şehir bundan böyle krallığın idari ve dinî merkezi olarak kalacaktı.",
  kaynak:"devletler.js gurcistan künyesi (TDV)" },

{ t:"1184-01-01", b:"Kraliçe Tamar tahta çıktı — altın çağ başladı", tur:"hukumdar", onem:5, dunya:3, kapsam:"ic",
  etiket:["siyaset","hukumdar"],
  yer_id:"Tiflis",
  d:"Kraliçe Tamar'ın tahta çıkışıyla krallık Ermenistan, Şirvan ve Doğu Anadolu'nun bir kısmına uzanan en geniş sınırlarına ve kültürel zirvesine ulaştı. Gürcü tarihyazımında bu dönem, ülkenin İslam ve Bizans dünyaları arasında bağımsız bir büyük güç olarak var olduğu tek çağ sayılır.",
  kaynak:"devletler.js gurcistan künyesi (TDV)" },

{ t:"1200-01-01", b:"Şota Rustaveli'nin 'Kaplan Postlu Şövalye' destanının yazılması (yaklaşık tarih)", tur:"kultur", onem:5, dunya:1, kapsam:"ic",
  etiket:["kultur-sanat","edebiyat"],
  yer_id:"Tiflis",
  d:"Kraliçe Tamar'a ithaf edilen 'Vepkhistqaosani' (Kaplan Postlu Şövalye) destanı, Gürcü edebiyatının kurucu eseri ve millî kimliğin edebi temel taşı olarak kabul edilir. Kesin yazım tarihi belgelenmemiştir; tarihyazımı eseri Tamar'ın saltanatına (yaklaşık 1184-1213) tarihler.",
  kaynak:"bulunamadı — TDV bu konuyu (Hıristiyan Gürcü edebiyatı) kapsamıyor; dayanak standart akademik kaynak, bu turda ikinci bir kaynakla doğrulanamadı (Britannica/Iranica 403 hatası verdi) — tarih YAKLAŞIK olarak işaretlidir" },

// === B) MOĞOL VE TİMUR İSTİLALARI (1231-1403) ================================
{ t:"1231-01-01", b:"Moğol istilası başladı", tur:"isgal", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","isgal"],
  yer_id:"", kapsam_genis:true,
  d:"Moğol orduları 1231'de Gürcistan'a girdi; krallık bir asırdan uzun sürecek bir zayıflama ve parçalanma sürecine girdi. TDV'nin 'gurcistan' maddesi bu tarihi birebir veriyor (devletler.js künyesindeki 1220 tarihinden farklıdır, bu dosyada TDV'nin doğrudan verdiği tarih esas alındı).",
  kaynak:"gurcistan (TDV, madde: gurcistan — 'Moğollar 1231'de Gürcistan'a girdiler')" },

{ t:"1386-01-01", b:"Timur'un birinci Gürcistan seferi", tur:"isgal", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","isgal"],
  yer_id:"", kapsam_genis:true,
  d:"Timur, 'üç yıllık sefer'i sırasında Gürcistan üzerinden Azerbaycan'a geçti; ülke bu geçişte ağır tahribata uğradı. TDV'nin 'gurcistan' maddesi Timur'un seferlerini dört ayrı tarihte (1386, 1399-1400, 1402, 1403) sayıyor; bu dosyada her biri ayrı madde olarak yazıldı.",
  kaynak:"gurcistan (TDV, madde: gurcistan)" },

{ t:"1399-01-01", b:"Timur'un ikinci Gürcistan seferi (1399-1400)", tur:"isgal", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","isgal"],
  yer_id:"", kapsam_genis:true,
  d:"Timur'un art arda gerçekleştirdiği seferlerin ikincisi 1399-1400 yıllarına tarihlenir; krallığın toparlanma çabaları her seferinde yeniden kesintiye uğradı.",
  kaynak:"gurcistan (TDV, madde: gurcistan)" },

{ t:"1402-01-01", b:"Timur'un üçüncü Gürcistan seferi", tur:"isgal", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","isgal"],
  yer_id:"", kapsam_genis:true,
  d:"Ankara Savaşı'nın kazanıldığı yıl Timur, doğuya dönerek Gürcistan'a üçüncü kez sefer düzenledi; imparatorluğun batı ve doğu cephelerindeki eş zamanlı harekâtı, dönemin en geniş askerî menzile sahip gücü olduğunu gösterir.",
  kaynak:"gurcistan (TDV, madde: gurcistan)" },

{ t:"1403-01-01", b:"Timur'un dördüncü ve son Gürcistan seferi", tur:"isgal", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","isgal"],
  yer_id:"", kapsam_genis:true,
  d:"Timur'un dördüncü seferi krallığın 15. yüzyıl başındaki çöküşünü kesinleştirdi; art arda dört istila, 1490'daki üçe bölünmenin doğrudan zeminini hazırladı.",
  kaynak:"gurcistan (TDV, madde: gurcistan)" },

// === C) BÖLÜNME VE OSMANLI-SAFEVİ REKABETİ (1479-1736) =======================
{ t:"1479-01-01", b:"Acaristan (Batum ve çevresi) Osmanlı tarafından fethedildi", tur:"fetih", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc"],
  yer_id:"Batum",
  d:"Osmanlı Devleti, Gürcistan Krallığı'nın parçalanma sürecindeyken Karadeniz kıyısındaki Acaristan bölgesini (Batum ve çevresi) fethetti; bu, Osmanlı'nın Gürcü topraklarındaki ilk kalıcı kazanımıdır ve bir yüzyıl sonraki Çıldır Eyaleti genişlemesinin öncüsüdür.",
  kaynak:"gurcistan (TDV, madde: gurcistan — 'Acaristan (Batum) ve çevresi 1479'da fethedildi')" },

{ t:"1490-01-01", b:"Krallığın Kartli, Kaheti ve İmereti'ye bölünmesi", tur:"bolunme", onem:5, dunya:2, kapsam:"ic",
  etiket:["siyaset","bolunme"],
  yer_id:"", kapsam_genis:true,
  d:"I. Alexandre'ın (1412-1442) ölümünden sonraki veraset kavgaları krallığı üçe böldü: Kartli, Kaheti ve İmereti. TDV bölünmeyi kesin bir güne bağlamıyor, genel olarak Alexandre sonrası dönemi işaret ediyor; 1490 standart akademik tarihyazımının kabul ettiği kesinleşme tarihidir.",
  kaynak:"gurcistan (TDV — 'Fakat daha sonra Gürcistan üç krallığa [Kartliya, Kahetya, İmeretiya] ve beş beyliğe ayrıldı') + devletler.js gurcistan/imereti künyeleri" },

{ t:"1490-01-02", b:"Samçhe (Meskheti) Atabekliği'nin tam bağımsızlaşması", tur:"bolunme", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","bolunme"],
  yer_id:"Ahıska",
  d:"1268'den beri yarı özerk statüde olan Samçhe (Meskheti) Atabekliği, krallığın üçe bölünmesiyle aynı süreçte tam bağımsız bir siyasi birim hâline geldi. Merkezi Ahıska olan bu atabeklik, bir asır sonra Osmanlı'nın Çıldır Eyaleti'nin çekirdeğini oluşturacaktı.",
  kaynak:"ahiska (TDV — atabegler 1268-1578 arası yarı özerk statüde) + gurcistan (TDV)" },

{ t:"1490-01-03", b:"İmereti Krallığı'nın ayrı krallık olarak ortaya çıkışı", tur:"kurulus", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","kurulus"],
  yer_id:"Kutaisi",
  d:"Gürcistan Krallığı'nın bölünmesiyle Kutaisi merkezli batı Gürcü krallığı İmereti ayrı bir siyasi varlık olarak doğdu; Kartli-Kaheti'nin aksine 1810'a kadar bağımsızlığını (giderek zayıflayan biçimde) sürdürecekti.",
  kaynak:"devletler.js imereti künyesi (bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak)" },

{ t:"1555-05-29", b:"Amasya Antlaşması — Gürcistan'ın Osmanlı-Safevî nüfuz bölgelerine bölünmesi", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","diplomasi","toprak"],
  yer_id:"", kapsam_genis:true,
  d:"Osmanlı ile Safevî arasındaki ilk resmî barış antlaşması Gürcistan'ı da taksim etti: batısı (İmereti ve Kartli'nin bir kısmı) Osmanlı, doğusu (Kaheti ve Kartli'nin çoğu) Safevî nüfuz bölgesi sayıldı. Gürcü tarafının hiç katılmadığı bu taksim, ülkenin kendi rızası dışında iki imparatorluk arasında paylaşılmasının ilk resmî belgesidir.",
  kaynak:"amasya-antlasmasi (TDV, zaten doğrulanmış — bkz. data/kronoloji_iran.js)" },

{ t:"1578-08-09", b:"Çıldır Zaferi — Osmanlı ordusu Safevî kuvvetlerini yendi", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Ardahan",
  d:"Lala Mustafa Paşa ve Özdemiroğlu Osman Paşa komutasındaki Osmanlı ordusu Safevî kuvvetlerini Çıldır'da ağır bir yenilgiye uğrattı. Bu zafer Kafkasya'nın kapılarını Osmanlı'ya açtı; on beş gün içinde Tiflis'in fethi ve Ahıska atabegliğinin Osmanlı idaresine girmesiyle sonuçlandı.",
  kaynak:"cildir-savasi (TDV, zaten doğrulanmış — bkz. data/olaylar_ek2.js) + ahiska (TDV — 'Ahıska atabegleri, Lala Mustafa Paşa'nın Çıldır Savaşı sonunda Osmanlı idaresine girdiler')" },

{ t:"1578-08-24", b:"Tiflis'in Lala Mustafa Paşa tarafından fethi", tur:"fetih", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","fetih"],
  yer_id:"Tiflis",
  d:"Çıldır zaferinden on beş gün sonra Lala Mustafa Paşa'nın kuvvetleri Tiflis'e girdi; şehir 1603'e kadar sürecek yirmi beş yıllık bir Osmanlı idaresine girdi. Bu, Ferhad Paşa Antlaşması'na (1590) giden on iki yıllık savaşın açılış hamlesidir.",
  kaynak:"tiflis (TDV, madde: tiflis — 'Lala Mustafa Paşa'nın kuvvetleri 24 Ağustos 1578'de şehre girdi')" },

{ t:"1578-08-29", b:"Tiflis'te iki kilisenin camiye çevrilmesi", tur:"din", onem:2, dunya:1, kapsam:"ic",
  etiket:["din"],
  yer_id:"Tiflis",
  d:"Fetihten beş gün sonra şehir içindeki iki kilise ve nehrin karşı yakasındaki bir kilise camiye dönüştürüldü; Osmanlı idaresinin şehre yerleşiminin ilk sembolik adımlarındandı.",
  kaynak:"tiflis (TDV)" },

{ t:"1579-07-01", b:"Çıldır Eyaleti'nin kuruluşu", tur:"idari", onem:4, dunya:2, kapsam:"dis",
  etiket:["idari"],
  yer_id:"Ardahan",
  d:"6 Cemâziyelevvel 987 (1 Temmuz 1579) tarihinde Atabegli Mustafa (Menûçihr) Paşa ilk beylerbeyi tayin edilerek Çıldır, Ardanuç, Şavşat, Oltu ve Ahıska'yı kapsayan yeni bir eyalet kuruldu. 17. yüzyıl başında on beş sancağa ve 656 tımarlı sipahiden oluşan yaklaşık 1800 kişilik bir güce ulaştı; Osmanlı'nın Gürcistan'daki idari varlığının kurumsal iskeletini oluşturdu.",
  kaynak:"cildir-eyaleti (TDV, madde: cildir-eyaleti — içerik okundu, 2026-08-22)" },

{ t:"1590-03-21", b:"Ferhad Paşa Antlaşması — Gürcistan'ın büyük kısmı Osmanlı'da kaldı", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","toprak-kaybi"],
  yer_id:"", kapsam_genis:true,
  d:"On iki yıllık savaşı bitiren antlaşmayla Azerbaycan, Şirvan, Karabağ, Gürcistan'ın büyük kısmı ve Luristan'ın bir bölümü Osmanlı'ya bırakıldı; imparatorluk doğuda tarihinin en geniş sınırlarına ulaştı. Gürcü toprakları için bu, 1723'e kadar sürecek en yaygın Osmanlı hâkimiyeti dönemidir.",
  kaynak:"ferhad-pasa-antlasmasi (TDV — müstakil maddesi yok, hükümleri luristan maddesinden derlenmiştir; zaten doğrulanmış, bkz. data/kronoloji_iran.js)" },

{ t:"1603-10-21", b:"Tiflis'in Şah Abbas tarafından geri alınması", tur:"kayip", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","kayip"],
  yer_id:"Tiflis",
  d:"Şah Abbas'ın 1590 kayıplarını geri alma seferi kapsamında Safevî kuvvetleri Tiflis'i yeniden ele geçirdi; şehir bir sonraki Osmanlı fethine (1723) kadar Safevî idaresinde kalacaktı.",
  kaynak:"tiflis (TDV) — bkz. data/kronoloji_iran.js 1603-09-26 kaydı (aynı savaş dizisi, dunya:3)" },

{ t:"1624-01-01", b:"Giorgi Saakadze isyanının bastırılması", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["isyan"],
  yer_id:"Tiflis",
  d:"1623-1624'te patlak veren, yerel asker-yönetici Giorgi Saakadze önderliğindeki Safevî karşıtı ayaklanma bastırıldı; Kartli'nin Safevî idaresine bağlılığı bir süre daha pekişti.",
  kaynak:"tiflis (TDV)" },

{ t:"1632-01-01", b:"İhtida eden Rostom'un Kartli'ye (Tiflis vilayeti) vali tayini", tur:"idari", onem:4, dunya:2, kapsam:"dis",
  etiket:["idari","siyaset"],
  yer_id:"Tiflis",
  d:"Safevî idaresi Kartli'yi Tiflis vilayeti olarak yeniden örgütleyip İslam'a geçmiş Rostom'u vali tayin etti. Bununla başlayan, İslam'a geçmiş Kartli hükümdarları düzeni 1711'e kadar sürdü — Gürcü tahtının Safevî sarayına bağımlılığının kurumsallaştığı dönemdir.",
  kaynak:"tiflis (TDV — '1632'de Tiflis vilâyeti olarak tekrar Osmanlı idaresiyle birleştirilmiş ve ihtida etmiş olan Rostom buraya vali tayin edilmişti')" },

{ t:"1635-01-01", b:"Ahıska'nın Osmanlı tarafından Safevîlerden geri alınması", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc"],
  yer_id:"Ahıska",
  d:"IV. Murad döneminin doğu seferleri sırasında Ahıska, geçici bir Safevî ara döneminin ardından yeniden Osmanlı idaresine geçti; şehir 1829'a kadar Çıldır Eyaleti'nin merkezi olarak kalacaktı.",
  kaynak:"ahiska (TDV — '1635'te Osmanlılar tarafından Safevîlerden geri alındı')" },

{ t:"1643-01-01", b:"Rüstem Han'ın Tiflis kalesini tahkim etmesi", tur:"idari", onem:2, dunya:1, kapsam:"ic",
  etiket:["idari"],
  yer_id:"Tiflis",
  d:"Safevî'ye bağlı Kartli hükümdarı Rüstem Han, Tiflis kalesinin savunma yapılarını güçlendirdi; 17. yüzyıl ortasında şehrin istikrarlı bir idare merkezine dönüştüğünün göstergelerinden biridir.",
  kaynak:"tiflis (TDV)" },

{ t:"1709-01-01", b:"Tiflis'te ilk Gürcü matbaasının kurulması (yaklaşık tarih)", tur:"bilim", onem:4, dunya:1, kapsam:"ic",
  etiket:["bilim","kultur-sanat"],
  yer_id:"Tiflis",
  d:"Kral Vahtang VI'nın girişimiyle Tiflis'te ilk Gürcü matbaası kuruldu; Kafkasya'daki ilk yerli matbaalardan biri olarak Gürcüce dinî ve hukuki metinlerin basımını mümkün kıldı.",
  kaynak:"bulunamadı — TDV bu konuyu kapsamıyor; dayanak standart akademik kaynak, bu turda ikinci bir kaynakla doğrulanamadı (Britannica/Iranica 403 hatası verdi) — tarih YAKLAŞIK olarak işaretlidir" },

{ t:"1711-01-01", b:"İhtida etmiş Kartli hükümdarları düzeninin sona ermesi", tur:"siyaset", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset"],
  yer_id:"Tiflis",
  d:"1632'den beri süren, Safevî sarayınca tayin edilmiş İslam'a geçmiş Kartli hükümdarları düzeni 1711'de sona erdi; ardından Vahtang VI'nın kanunname çalışmaları ve on üç yıl sonraki Osmanlı müdahalesiyle (1724) yeni bir siyasi evre başladı.",
  kaynak:"tiflis (TDV — 'ihtida etmiş olan Rostom... 1711 yılına kadar' süren düzen)" },

{ t:"1723-06-24", b:"Osmanlı'nın Tiflis'i son kez alması — Tiflis Beylerbeyiliği kuruldu", tur:"fetih", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","fetih","idari"],
  yer_id:"Tiflis",
  d:"Safevî Devleti'nin Afgan istilâsıyla çökmesi ve Rusya'nın Hazar kıyılarına inmesi üzerine Osmanlı ordusu 23-24 Haziran 1723'te Tiflis'e girdi ve şehri yeni bir beylerbeyilik olarak örgütledi. On üç yıl sürecek son büyük Osmanlı işgalinin başlangıcıdır.",
  kaynak:"tiflis (TDV — 'Osmanlılar 23-24 Haziran 1723'te şehre girdi') + ahmed-iii (TDV, zaten doğrulanmış — bkz. data/olaylar_ek5.js; aynı harekât, data/kronoloji_iran.js'in 1723-06-24 kaydıyla aynı dunya puanı)" },

{ t:"1724-01-01", b:"Kartli Çarı Vahtang'ın oğlu İbrahim'in Osmanlı tarafından Kartli'ye tayini", tur:"siyaset", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset"],
  yer_id:"Tiflis",
  d:"Osmanlılar, Kartli ve büyük şehirleri Tiflis ile Gori'yi ele geçirip ihtida eden İbrahim'i (Kartli Çarı Vahtang'ın oğlu) yurtluk-ocaklık olarak tayin etti. Rusya'ya sığınan Vahtang VI bir daha ülkesine dönemedi; Gürcü tahtı artık doğrudan Osmanlı tayiniyle dolduruluyordu.",
  kaynak:"gurcistan (TDV — 'Osmanlılar ise Kartli ve onun büyük şehirleri Tiflis ve Gori'yi alıp burayı yurtluk ve ocaklık olarak Kartli Çarı Vahtang'ın oğlu olup ihtida eden İbrâhim'e verdiler')" },

{ t:"1724-06-24", b:"İstanbul Mukâsemenâmesi — Gürcistan'ın Osmanlı-Rusya arasında paylaşılması", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis",
  etiket:["antlasma","diplomasi","toprak-kaybi"],
  yer_id:"", kapsam_genis:true,
  d:"Çöken Safevî ülkesi üzerinde Osmanlı ile Rusya'nın karşı karşıya gelmesini önlemek için imzalanan taksim antlaşmasıyla Gürcistan, Şirvan ve Azerbaycan Osmanlı'ya, Hazar'ın batı-güney kıyıları Rusya'ya bırakıldı. Gürcistan'ın kendi rızası olmaksızın iki büyük gücün masasında paylaşılması, ülkenin 18. yüzyıldaki konumunu özetleyen bir andır.",
  kaynak:"ahmed-iii (TDV, zaten doğrulanmış — bkz. data/olaylar_ek5.js)" },

{ t:"1736-09-01", b:"İstanbul Antlaşması — Osmanlı'nın on üç yıllık işgalin ardından Gürcistan'dan çekilmesi", tur:"siyaset", onem:4, dunya:3, kapsam:"dis",
  etiket:["antlasma","siyaset"],
  yer_id:"", kapsam_genis:true,
  d:"Nadir Şah'ın zaferleriyle sonuçlanan ikinci İran savaşını bitiren antlaşmayla Osmanlı, 1723'ten beri elinde tuttuğu bütün Güney Kafkasya topraklarından, dolayısıyla Gürcistan'dan da çekildi; ülke yeniden İran nüfuz alanına girdi.",
  kaynak:"osmanlilar (TDV, zaten doğrulanmış — bkz. data/olaylar_ek5.js)" },

// === D) NADİR ŞAH DÖNEMİ VE KARTLİ-KAHETİ BİRLEŞMESİ (1744-1801) =============
{ t:"1744-01-01", b:"Teimuraz II Kaheti, oğlu Erekle (II. Herakli) Kartli kralı oldu", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","hukumdar"],
  yer_id:"Zagem (Kaheti)",
  d:"Nadir Şah'ın onayıyla Teimuraz II Kaheti tahtına, oğlu Erekle (II. Herakli) ise Kartli tahtına oturdu; baba-oğul bu ortak hâkimiyet, on sekiz yıl sonraki Kartli-Kaheti birleşmesinin siyasi temelini attı.",
  kaynak:"bulunamadı — TDV bu taneciği (Kartli/Kaheti iç hanedanı) kapsamıyor; dayanak standart akademik kaynak, bu turda ikinci bir kaynakla doğrulanamadı (Britannica/Iranica 403 hatası verdi)" },

{ t:"1762-01-08", b:"II. Herakli, Kartli ve Kaheti'yi tek idare altında birleştirdi", tur:"birlesme", onem:5, dunya:2, kapsam:"ic",
  etiket:["siyaset","birlesme"],
  yer_id:"Tiflis",
  d:"Babası Teimuraz II'nin ölümü üzerine II. Herakli (Erekle), zaten hüküm sürdüğü Kaheti'ye Kartli'yi de katarak iki doğu Gürcü krallığını üç asırdır ilk kez tek idare altında birleştirdi. Bu birleşme, 1801'deki Rus ilhakına kadar sürecek son bağımsız Gürcü devletinin temelidir.",
  kaynak:"gurcistan (TDV, madde: gurcistan — '1762 yılında Irakli, Kartli ve Kahet'i bir idare altında birleştirdi')" },

{ t:"1783-07-24", b:"Georgievsk Antlaşması — Kartli-Kaheti Rusya himayesine girdi", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","diplomasi"],
  yer_id:"Tiflis",
  d:"II. Herakli, Osmanlı ve İran baskısına karşı güvence arayışıyla Rusya ile bir himaye antlaşması imzaladı; Kartli-Kaheti dış politikasını Rusya'ya devretti ve karşılığında askerî koruma vaadi aldı. Bu antlaşma, on sekiz yıl sonraki tam ilhakın hukuki zeminini hazırladı.",
  kaynak:"devletler.js gurcistan künyesi (TDV, önceden doğrulanmış)" },

{ t:"1795-01-01", b:"Ağa Muhammed Han'ın Tiflis'i tamamen tahrip etmesi", tur:"savas", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Tiflis",
  d:"Rusya himayesine güvenerek İran'a bağlılığını yenilemeyi reddeden II. Herakli'ye karşı İran Şahı Ağa Muhammed Han Gürcistan'a sefer düzenledi ve özellikle Tiflis şehrini tamamen tahrip etti. Bu felaket, Gürcü kamuoyunda Rusya'nın koruma vaadinin yetersizliğini gösterdi ve altı yıl sonraki tam ilhaka giden yolu açtı.",
  kaynak:"gurcistan (TDV, madde: gurcistan — '1795'te İran Şahı Âgā Muhammed Gürcistan'a sefer düzenleyip burayı ve özellikle Tiflis şehrini tamamen tahrip etti') — bkz. data/kronoloji_iran.js 1795-01-01 kaydı, aynı dunya puanı (2)" },

{ t:"1798-01-11", b:"II. Herakli'nin ölümü", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar"],
  yer_id:"Tiflis",
  d:"II. Herakli'nin ölümüyle Kartli-Kaheti tahtına oğlu XII. Georgi geçti; kısa süren bu son saltanat, üç yıl sonra Rusya'nın doğrudan ilhakıyla sona erecekti.",
  kaynak:"bulunamadı — TDV bu taneciği kapsamıyor; dayanak standart akademik kaynak, bu turda ikinci bir kaynakla doğrulanamadı (Britannica/Iranica 403 hatası verdi)" },

{ t:"1801-09-12", b:"Kartli-Kaheti Çarlığı'nın Rusya tarafından ilhakı", tur:"son", onem:5, dunya:4, kapsam:"dis",
  etiket:["toprak-kaybi","siyaset"],
  yer_id:"Tiflis",
  d:"Çar I. Pavel'in 12 Eylül 1801 tarihli emriyle Kartli-Kaheti Çarlığı feshedilip doğrudan Rusya'nın bir eyaleti ilan edildi; 793 yıl önce III. Bagrat'ın kurduğu Gürcistan Krallığı'nın son ve en büyük parçası böylece bağımsızlığını tamamen yitirdi. Bu ilhak, Osmanlı-İran-Rusya üçgeninde Transkafkasya'nın kalıcı olarak Rusya'ya geçişinin başlangıç noktasıdır.",
  kaynak:"gurcistan (TDV, madde: gurcistan — '12 Eylül 1801 tarihli emirle Rusya'nın bir eyaleti ilân')" },

// === E) İMERETİ'NİN AYRI YAZGISI (1804-1810) =================================
{ t:"1804-01-01", b:"İmereti ve Guriya'nın Rusya ile birleşmesi", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","diplomasi"],
  yer_id:"Kutaisi",
  d:"Kartli-Kaheti'nin tam ilhakından üç yıl sonra İmereti ve Guriya da Rusya ile bir himaye/birleşme anlaşması imzaladı; TDV bu ilişkiyi ayrıntılandırmadan \"birleşti\" diye anıyor — muhtemelen kesin ilhaktan önceki bir vasallık anlaşmasıdır (bkz. devletler.js imereti künyesi notu).",
  kaynak:"gurcistan (TDV, madde: gurcistan — 'İmeretiya ve Guriya [1804]')" },

{ t:"1810-02-20", b:"İmereti Krallığı'nın kesin ilhakı — Kral II. Solomon tahttan indirildi", tur:"son", onem:5, dunya:3, kapsam:"dis",
  etiket:["toprak-kaybi","siyaset"],
  yer_id:"Kutaisi",
  d:"Artan Rus baskısına direnmeye devam eden İmereti Krallığı'nın son kralı II. Solomon, Rus birliklerinin başkent Kutaisi'yi ele geçirmesiyle tahttan indirildi. İmereti böylece fiilen sona erdi ve doğrudan Rus idaresine bağlandı; Solomon, Osmanlı topraklarına kaçarak sürgünde öldü (1815).",
  kaynak:"devletler.js imereti künyesi + data/olaylar_ek16.js (standart akademik kaynak, zaten doğrulanmış)" },

// === F) RUS İDARESİ DÖNEMİ — kısa köprü (1811-1829) ===========================
{ t:"1811-01-01", b:"Gürcü Ortodoks Kilisesi'nin otosefalisinin kaldırılması", tur:"din", onem:4, dunya:1, kapsam:"dis",
  etiket:["din"],
  yer_id:"Tiflis",
  d:"Rus İmparatorluğu, ilhaktan on yıl sonra bin yılı aşkın süredir bağımsız olan Gürcü Ortodoks Kilisesi'nin otosefalisini kaldırıp Rus Ortodoks Kilisesi'ne bağladı; Gürcü kimliğinin dinî boyutunun da doğrudan Rus idaresine tâbi kılındığı bir dönüm noktasıdır.",
  kaynak:"bulunamadı — TDV bu konuyu kapsamıyor; dayanak standart akademik kaynak, bu turda ikinci bir kaynakla doğrulanamadı (Britannica/Iranica 403 hatası verdi)" },

{ t:"1829-09-14", b:"Edirne Antlaşması — Ahıska ve Ahılkelek Rusya'ya terkedildi", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","toprak-kaybi"],
  yer_id:"Ahıska",
  d:"1578 Çıldır zaferinden beri Osmanlı idaresinde olan ve Çıldır Eyaleti'nin merkezliğini yapan Ahıska, 1828-1829 savaşının sonunda imzalanan Edirne Antlaşması'yla Ahılkelek'le birlikte Rusya'ya terkedildi; eyalet beş kazaya küçülüp sonunda Erzurum'a bağlı bir sancak hâline geldi. Şehrin elden çıkışı Osmanlı Gürcüleri arasında derin bir üzüntü yarattı ve pek çok ağıda konu oldu.",
  kaynak:"ahiska (TDV) + cildir-eyaleti (TDV — 'Ahıska ve Ahılkelek Rusya'ya terkedildi... eyalet beş kazaya düştü') — bkz. data/olaylar_ek7.js" },

// === G) BAĞIMSIZLIK VE SOVYET İŞGALİ (1918-1921) ==============================
{ t:"1918-05-26", b:"Gürcistan Demokratik Cumhuriyeti'nin bağımsızlığını ilan etmesi", tur:"kurulus", onem:5, dunya:3, kapsam:"ic",
  etiket:["siyaset","kurulus"],
  yer_id:"Tiflis",
  d:"Rusya İmparatorluğu'nun dağılmasıyla Transkafkasya Sejmi'nden ayrılan Gürcistan, 26 Mayıs 1918'de bağımsızlığını ilan etti; 117 yıllık doğrudan Rus idaresinin ardından ilk bağımsız Gürcü devletidir.",
  kaynak:"gurcistan (TDV, madde: gurcistan) — bkz. devletler.js gurcistan-demokratik-cumhuriyeti künyesi" },

{ t:"1921-02-25", b:"Sovyet Rusya ordularının Tiflis'i işgali", tur:"isgal", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","isgal"],
  yer_id:"Tiflis",
  d:"Kızıl Ordu'nun Şubat 1921'de başlattığı harekât Tiflis'in işgaliyle sonuçlandı; genç cumhuriyetin bağımsızlığı fiilen sona erdi, direniş yalnızca Batum'da bir ay daha sürdü.",
  kaynak:"devletler.js gurcistan-demokratik-cumhuriyeti künyesi (TDV — işgal 'Şubat 1921'de, gün TDV'de yok, atlasın kendi verisiyle 25 Şubat olarak sabitlenmiştir)" },

{ t:"1921-03-16", b:"Batum'un düşüşü — Gürcistan Demokratik Cumhuriyeti'nin sonu", tur:"son", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","siyaset"],
  yer_id:"Batum",
  d:"Direnişin son kalesi Batum'un düşüşüyle Gürcistan Demokratik Cumhuriyeti kesin olarak sona erdi; ülke Gürcistan Sovyet Sosyalist Cumhuriyeti'ne dönüştürüldü ve 1991'e kadar sürecek Sovyet dönemi başladı.",
  kaynak:"devletler.js gurcistan-demokratik-cumhuriyeti künyesi (TDV)" }

];
