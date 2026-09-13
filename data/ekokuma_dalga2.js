// ============================================================================
// EK OKUMA — DALGA 2 (kartsız öncelikli Osmanlı çekirdek maddeleri, 12 kart)
// ============================================================================
// 13 Eylül 2026 · kaynak liste: denetim/EKOKUMA-DAGITIM-0913.md §⑦ (ilk 12 satır)
// Rapor: denetim/EKOKUMA-DALGA2-0913.md
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_DALGA2 tanımlar.
//    _ekHavuz() regex'i (/^EKOKUMA(_[A-Z0-9]+)?$/) onu kendiliğinden toplar;
//    yükleyici listesine "ekokuma_dalga2" satırını app.js sahibi ekler.
//
// ── ŞEMA — mevcut dosyalardan birebir kopya ────────────────────────────────
//   sebep-sonuc     id·tur·kisa·sebep{b,t}·sonuc{b,t}·bag·metin·kesinlik·zincir·olay·kaynak
//   savas-hikayesi  id·tur·baslik·kisa·tarih_metin·yer·taraflar[{ad,komutan,kuvvet}]·
//                   oncesi·akis·sonuc·tartisma·kesinlik·olay·kaynak·gorsel·gorsel_kaynak
//   kimdir          id·tur·ad·kisa·metin·not·kesinlik·olay·kaynak
//   tartisma        id·tur·baslik·kisa·metin·bag·not·kesinlik·olay·kaynak
//                   (ekKartHtml son çare dalı: baslik + metin/kisa/not/bag string alanları)
//
// ── BAĞ — olay:[...] ───────────────────────────────────────────────────────
// Her değer, index.html'in yüklediği data/olaylar*.js + data/kronoloji*.js
// içinde BİREBİR var olan bir `t`dir (node ile sınandı). Aynı güne İLGİSİZ
// ikinci bir madde düşüyorsa "YYYY-MM-DD|başlık-parçası" ayırıcısı kullanıldı
// (1461-08-15: Trabzon ‖ Amasra · 1475-07-01: Mengli Giray ‖ Üveys'in idamı).
// ⚠️ Bu ayırıcı bugünkü ekKartBagliMi'de
// HENÜZ YOK — o satır ayırıcı inene kadar buton üretmez (rapor §③).
//
// ── KAYNAK ────────────────────────────────────────────────────────────────
// Her kart TDV İslâm Ansiklopedisi gövdeleri OKUNARAK yazıldı (HTTP 200 +
// <title> + gövde). Metinler kopyalanmadı; tırnak içindeki birkaç kısa ifade
// dışında cümleler kendi cümlelerimdir. Okunan gövdelerde OLMAYAN ayrıntı
// karta konmadı; madde ile TDV ayrıştığında `tartisma`/`not`/`metin`e yazıldı.
// Görsel aranmadı (gorsel:null).
// ============================================================================

window.EKOKUMA_DALGA2 = [

// ── 1 · 1324-08-01 Osman Gazi'nin vefatı (+ 1326-04-06 Bursa) ─────────────
{ id:"tartisma-osman-gazi-olum-yili", tur:"tartisma",
  baslik:"Osman Gazi Bursa'nın fethini gördü mü? — ölüm yılı tartışması",
  kisa:"Kronikler onu oğlu Bursa önündeyken öldürür; iki vakfiye ise şehir düşmeden iki yıl önce öldüğünü gösteriyor.",
  metin:"TDV'nin Osman I maddesi ölüm yılını kroniklerin anlatısından değil, iki belgenin karşılaştırılmasından çıkarır. Eylül 1323 başında düzenlenen Asporça Hatun vakfiyesinde Osman hayattadır; 1324 tarihli Mekece vakfiyesinde ise artık ölmüş görünür. Bu yüzden ölüm 724 (1324) yılına yerleştirilir. Aynı madde Osmanlı rivayetini de aktarır: bu anlatıda Osman öldüğünde Orhan Bursa kuşatmasıyla uğraşmaktadır — ve Bursa ancak 6 Nisan 1326'da teslim olmuştur. Kroniklerde Osman'ın ayağındaki nikris yüzünden işleri Orhan'a bırakıp çekildiği, 1305'ten sonra da seferlerde adının geçmediği yazılır. TDV'nin Orhan maddesi bir adım öteye gider: İbn Battûta'nın tanıklığından Osman'ın fiilen beylik yapmasının 1322 dolayında bittiği sonucunun çıkarılabileceğini söyler. Osman vasiyeti üzerine Bursa hisarındaki Gümüşlükubbe denilen eski manastırın kubbesi altına gömüldü; bu yapı 1855 depreminde yıkılınca bugünkü sade türbe 1863'te Sultan Abdülaziz tarafından yaptırıldı.",
  bag:"İki anlatı aynı şeyi ölçmüyor. Vakfiyeler bir belge tarihidir ve 1324'ü destekler; ölümün Bursa kuşatmasına bağlanması kronik geleneğinden gelir. Hastalanıp işleri çoktan oğluna bırakmış bir bey için \"Bursa'yı gördü\" demek de \"görmeden öldü\" demek de ayrı iddialardır. Kronolojideki iki kayıt bu ayrımı yan yana taşır: vefat kaydı 1324'ü, Bursa'nın fethi kaydı ise rivayeti verir.", ic_not_bag:"eski: Atlastaki iki madde bu ayrımı yan yana taşıyor: vefat maddesi 1324'ü, Bursa maddesi ise rivayeti veriyor.",
  not:"Fetih haberinin ölüm döşeğindeki Osman'a ulaştırıldığı ayrıntısı TDV'nin Osman I, Orhan ve Bursa maddelerinde geçmez; bu maddeler yalnız \"öldüğünde Orhan Bursa'yı kuşatıyordu\" rivayetini aktarır.", ic_not_not:"eski not: Bursa maddesindeki \"fetih haberi ölüm döşeğindeki Osman'a ulaştırıldı\" ayrıntısı okunan TDV gövdelerinde (osman-i · orhan · bursa) geçmiyor; TDV yalnız \"öldüğünde Orhan Bursa'yı kuşatıyordu\" rivayetini aktarıyor.",
  kesinlik:"tartismali",
  olay:["1324-08-01", "1326-04-06"],
  kaynak:"TDV: osman-i (Halil İnalcık; Asporça ve Mekece vakfiyeleri, defin) · orhan (Halil İnalcık; İbn Battûta çıkarımı)" },

// ── 2 · 1326-04-06 Bursa'nın fethi ─────────────────────────────────────────
{ id:"savas-bursa-1326", tur:"savas-hikayesi",
  baslik:"Bursa'nın teslimi (6 Nisan 1326)",
  kisa:"Şehir bir hücumla düşmedi: yıllarca süren açlık ablukasının sonunda bir pazarlıkla ve 30.000 altın karşılığında el değiştirdi.",
  tarih_metin:"2 Cemâziyelevvel 726 · 6 Nisan 1326",
  yer:"Bursa (Prusa), Uludağ'ın kuzey eteği",
  taraflar:[
    { ad:"Osmanlı Beyliği", komutan:"Orhan Bey", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Bizans'a bağlı Bursa kalesi", komutan:"Bursa tekfuru (adı kaynaklarda geçmez)", ic_not_komutan:"eski: (adı okunan kaynaklarda geçmiyor)", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Bursa ovasındaki tekfurların ittifakı Dimbos (Dinboz) geçidinde yenilince şehir yalnız kaldı. Osman Gazi surlara saldırmak yerine şehri çevresinden koparmayı seçti: Bursa'yı gözetleyen Aktimur ve Balabancık adlı iki havale kulesi yaptırdı, bunlardan birini yeğeni Aktimur'a verdi ve kuvvetlerini çekti. Uludağ eteğindeki Türkmen ve Kızık köylerinin bu uzun abluka yıllarında kurulduğu düşünülür. Dışarıdan yardım alamayan şehir halkı giderek açlık ve yoksulluğa sürüklendi.",
  akis:"Kesin sonucu bir meydan savaşı değil bir teslim pazarlığı getirdi. 1326 baharında beyliğin başına geçmiş olan Orhan bütün kuvvetleriyle surların önüne gelip teslim çağrısında bulundu. TDV'nin Orhan maddesine göre tekfurla varılan ahidnâmenin üç şartı vardı: şehre giren askerler yağma yapmayacak ve esir almayacak; ayrılmak isteyenler mallarını alıp Osmanlı askerlerinin korumasında çıkabilecek; Orhan'a 30.000 altın ödenecek. Âşıkpaşazâde'nin aktarımına göre tekfur şehri bırakınca surların burcuna önce Ahî Hasan çıktı, ardından Müslümanlar şehre yerleşti.",
  sonuc:"Bizanslı kumandanın İstanbul'a gitmesine izin verildi; teslimi sağlayan başdanışmanı ise şehirde kalıp Osmanlı hizmetine girdi, Bursa metropoliti de görevini sürdürdü. Rum halk kaleden aşağıdaki kesimlere taşındı, kale içine yalnız Türkler yerleştirildi. Orhan kale içindeki manastırı camiye çevirdi, Tophane sırtında Bey Sarayı'nı yaptırdı ve 1327'de beyliğin ilk gümüş akçesini burada bastırdı. Kalenin doğusunda 1339-1340'ta kurduğu cami, imaret, medrese, hamam ve handan oluşan külliye şehrin yeni çarşı merkezinin çekirdeği oldu. Bursa beyliğin merkezi yapıldı; Osman Gazi'den Fâtih'e kadar ilk hükümdarların türbeleri de burada yükseldi.",
  tartisma:"Ablukanın başlangıcı TDV'nin iki maddesinde farklı verilir: Osman I maddesi Dimbos savaşını 1303'e koyar ve şehrin yirmi üç yıl kuşatma altında kaldığını söyler; Bursa maddesi ise tekfurun Dinboz geçidindeki yenilgisini ve kuşatmanın başlangıcını 1308'e yerleştirip \"on yıldan fazla\" süren bir ablukadan söz eder. Teslim günü (6 Nisan 1326) iki maddede de aynıdır.",
  kesinlik:"kesin",
  olay:["1326-04-06"],
  kaynak:"TDV: orhan (teslim ahidnâmesinin şartları) · bursa (abluka, teslim sonrası düzen, ilk akçe) · osman-i (havale kuleleri, Dimbos)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 3 · 1362-03-01 Orhan Gazi'nin vefatı ───────────────────────────────────
{ id:"kimdir-orhan-gazi", tur:"kimdir",
  ad:"Orhan Gazi",
  kisa:"Babasından bir uç beyliği devraldı, oğluna Rumeli'de köprübaşı kurmuş bir devlet bıraktı; ömrünü Bursa'da bir veba salgını bitirdi.",
  metin:"Osman Gazi'nin oğludur; doğum yılı kesin değildir. TDV, 1299'da Nilüfer Hatun'la evlendiğinde \"yiğit\" diye anılmasından o sırada on sekiz yaş dolayında olduğunu çıkarır. Rivayete göre Yarhisar tekfurunun kızı Nilüfer'le evlendirildi; Süleyman ve Murad bu evlilikten doğdu. Babasının sağlığında Akça Koca, Konuralp ve Köse Mihal gibi deneyimli komutanların yanında seferlere gönderildi; 1305'ten beri ordunun başında olduğu için beyliğe hiçbir taht kavgası yaşanmadan geçti. Bursa (1326), İznik (1331) ve İzmit (1337) onun döneminde alındı, Karesi Beyliği ülkeye katıldı. Onu gören İbn Battûta, Türkmen sultanlarının servet, toprak ve asker bakımından en güçlüsü olduğunu, yüz kadar kalesini sürekli dolaşıp hiçbir şehirde bir aydan fazla kalmadığını yazar. 1337 tarihli bir kitâbede \"sultânü'l-guzât\" unvanıyla anılır. Rumeli fetihlerini yürüten büyük oğlu Süleyman Paşa ondan önce öldü; Edirne'yi 1361'de Şehzade Murad ile lalası Şâhin aldı. Edirne'nin alınmasından kısa süre sonra, yaşı hayli ilerlemişken, Mart 1362'de (Cemâziyelevvel 763) Bursa'daki veba salgınında hayatını kaybetti; daha 1354'te karaciğer rahatsızlığı çektiği ve onu Taronites adında Rum bir hekimin tedavi ettiği bilinir. Türbesi babasının yanındadır. Öldüğünde altı oğlundan yalnız Murad, İbrâhim ve Halil hayattaydı; yerine I. Murad geçti.",
  not:"Ölüm sebebinin veba olduğu bilgisini TDV Bizans kısa kroniklerinin neşrine (Schreiner) dayandırır.", ic_not_not:"çıkarılan: Atlastaki 1362 vefat maddesi \"TDV'de Orhan Gazi'nin müstakil maddesi yok\" notunu taşıyor; oysa `orhan` slugu HTTP 200 veriyor ve gövdesi Orhan Gazi'yi anlatıyor.",
  kesinlik:"kesin",
  olay:["1362-03-01"],
  kaynak:"TDV: orhan (doğum çıkarımı, İbn Battûta, ölüm ve türbe) · osman-i (1305'ten beri komutanlık, İznik 1331)" },

// ── 4 · 1413-07 Çelebi Mehmed birliği yeniden kurdu ────────────────────────
{ id:"fetret-sonu-mehmed-birlik-1413", tur:"sebep-sonuc",
  kisa:"On bir yıllık kardeş savaşını en sert şehzade değil, düşmanına bile \"baba\" diyecek kadar uzlaşmacı olanı kazandı.",
  sebep:{ b:"Ankara yenilgisinden sonra Bayezid'in oğulları Süleyman, Îsâ, Mûsâ ve Mehmed'in \"dârüssaltana\" Bursa ile Rumeli merkezi Edirne için birbirleriyle savaşması", t:"1402-07-28" },
  sonuc:{ b:"Mehmed Çelebi'nin 5 Temmuz 1413'te Mûsâ'yı saf dışı bırakıp Edirne'de ülkenin tek hükümdarı olarak tahta çıkması", t:"1413-07" },
  bag:"TDV'nin I. Mehmed maddesi (Halil İnalcık) kazananı belirleyen iki etkeni öne çıkarır. Birincisi veraset boşluğudur: Türk geleneğinde tahtı kimin alacağını düzenleyen bir kanun yoktu, her şehzadenin hakkı eşitti ve halk meşruiyeti savaşı kazanmaya, yani Tanrı'nın yardımına bağlıyordu; yaşça büyük olmak bağlayıcı değildi. İkincisi üsluptur: Mûsâ'nın sert kişiliği ve merkeziyetçi, otokratik tavrı uç beylerini ve vasal hükümdarları ondan soğuttu; onlar da Mehmed'in yanına geçti. Mehmed ise Bizans imparatoruna \"baba\" diyecek kadar yatıştırıcı bir çizgi izledi.",
  metin:"Fetret boyunca komşular bir şehzadeyi öbürüne karşı kullandı. Bizans, 1403 antlaşmasından sonra Anadolu ile Rumeli arasındaki geçişleri denetlediği için merkezî bir rol oynadı; Eflak voyvodası Mircea ve Timur'un geri verdiği topraklara dönen Anadolu beyleri de hangi şehzade Bursa'yı tutarsa ona yanaştı. Mehmed önce Îsâ'yı yenip Bursa'yı aldı; Süleyman karşısında Bursa'yı kaybedince Tokat-Amasya'ya çekildi ve Mûsâ'yı Rumeli'ye geçmeye yönlendirdi. Mûsâ 1411'de Edirne'ye ani bir baskınla girip Süleyman'ı öldürdü, ancak Mehmed'le anlaşmasına uymadı. Son hesaplaşmada Mehmed'in yanında uç beyleri, vasal devletler ve Tatar-Türkmen tümenleri vardı. Birlik kalıcı bir huzur getirmedi: Mehmed Rumeli'deyken Karamanoğlu Bursa'yı otuz bir gün kuşattı; ardından Timurluların serbest bıraktığı kardeşi Mustafa ile Şeyh Bedreddin'in hareketi yeni bir iç çatışma dalgası başlattı. Neşrî'deki menâkıbnâme saltanat sürelerini ayrı ayrı sayar: Süleyman sekiz yıl on ay, Mûsâ iki yıl yedi ay, Mehmed yedi yıl on bir ay.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1413-07"],
  kaynak:"TDV: mehmed-i (Halil İnalcık)" },

// ── 5 · 1456-07-22 Belgrad kuşatmasının başarısızlığı (+ 1521-08-29) ──────
{ id:"belgrad-1456-1521-yarim-kalan-hedef", tur:"sebep-sonuc",
  kisa:"Fâtih'in alnından yaralanıp önünden çekildiği kaleyi altmış beş yıl sonra Kanûnî ilk seferinde aldı — ve halkının bir kısmı İstanbul'a bir orman adı bıraktı.",
  sebep:{ b:"II. Mehmed'in 1456'da bizzat yönettiği Belgrad kuşatmasının sonuçsuz kalması; bozgunu önlemek için savaşa atılan padişahın alnından yaralanması", t:"1456-07-22" },
  sonuc:{ b:"Kanûnî Sultan Süleyman'ın ilk sefer-i hümâyununu Belgrad'a yöneltip kaleyi 1521'de alması", t:"1521-08-29" },
  bag:"TDV'nin II. Mehmed maddesine göre başarısızlık Batı'da Haçlı umutlarını canlandırdı: Papa III. Calixtus 1457'de Ege'ye bir donanma yolladı ve Uzun Hasan ile Gürcülerle Osmanlı'ya karşı temas aradı, halefi II. Pius Mantua'da bir kongre topladı. Fâtih ise Sırbistan'ı sıkı bir bağlılıkta tutmanın Belgrad'ın Macarlardan alınmasına bağlı olduğunu biliyordu. TDV'nin I. Süleyman maddesi 1521'i bu yarım kalmışlığa bağlar: Belgrad yalnız askerî değil sembolik bir hedefti, çünkü büyük atasının başaramadığı yerdi; Kanûnî'nin ardından ikinci hedef olarak yine Fâtih'in düşüremediği Rodos'u seçmesi de bu yüzden dikkat çeker.",
  metin:"Belgrad Osmanlılarca üç kez hedef alındı. 1440'ta II. Murad şehri karadan ve Tuna'dan altı ay kuşattı; direniş ve orduda baş gösteren salgın yüzünden çekildi. 1456'da Fâtih geldi ve yaralanarak döndü. 1521'de Kanûnî, yolda aldığı Böğürdelen'in ardından kaleyi düşürdü ve fethin ertesi günü şehre girip her yanını dolaştı. Fetihten sonra ahalinin bir kısmı İstanbul'a götürüldü ve bugün Belgrad Ormanları ile Belgrad Kapısı diye bilinen yerlere yerleştirildi; yani İstanbul'daki bu iki ad, Tuna kıyısındaki bu kuşatmaların uzak bir hatırasıdır. Belgrad bundan sonra 1541'e kadar Osmanlı'nın Orta Avrupa seferlerinin ana askerî üssü oldu; Kanûnî'nin Sigetvar'da ölümünden sonra cenaze namazı da burada kılındı ve II. Selim'e burada biat edildi.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1456-07-22", "1521-08-29"],
  kaynak:"TDV: mehmed-ii (Halil İnalcık; yaralanma, Haçlı tepkisi) · belgrad (1440 ve 1521 kuşatmaları, İstanbul'a iskân) · suleyman-i (Feridun Emecen; Belgrad'ın sembolik hedef oluşu)" },

// ── 6 · 1460-05-29 Mora'nın fethi ──────────────────────────────────────────
{ id:"mora-despot-kardesler-1460", tur:"sebep-sonuc",
  kisa:"Mora'yı Osmanlı'ya iki kardeş despotun birbirine duyduğu kin teslim etti; biri Edirne'de keşiş olarak, öteki Roma'da papanın maaşıyla öldü.",
  sebep:{ b:"1449'dan sonra Mora'yı paylaşan despot kardeşler Thomas ve Dimitrios Palaiologos'un birbirleriyle sürekli savaşması ve Thomas'ın 1458'de vergiyi açıkça reddetmesi", t:"1458-01-01" },
  sonuc:{ b:"Fâtih'in 1460 seferinde Venedik'in kıyı kaleleri dışında bütün yarımadayı alarak Mora Despotluğu'na son vermesi", t:"1460-05-29" },
  bag:"TDV'nin Mora maddesine göre vergi reddi üzerine Fâtih 1458'de büyük bir orduyla gelip yarımadanın kuzeyini (Patras, Vostitsa, Kalavrita, Korint) aldı ve orada Osmanlı idaresini kurdu. Kardeş kavgası sürdü; II. Mehmed maddesine göre Batılıların desteklediği Thomas yarımadaya hâkim oldu. 1460 baharında Papa II. Pius bir Haçlı seferi hazırlarken, ordu toplanamadan padişah yeniden Mora'ya yürüdü.",
  metin:"İki kardeşin yolu burada ayrıldı. Teslim olmayı seçen Dimitrios'a Ege'de Limni, İmroz ve Semadirek ile Trakya kıyısında Enez bırakıldı; hayatının sonunu manastıra çekilerek geçirdi ve 1470'te Edirne'de öldü. Batı'ya güvenen Thomas ise İtalya'ya sığındı, papanın bağladığı cömert bir maaşla yaşadı ve 1465'te orada öldü. Oğlu Manuel ve Palaiologos ailesinin başka üyeleri Osmanlı hizmetine girip Müslüman oldu; aile II. Bayezid zamanında bile görev başındaydı. Ama \"bütün Mora\" ifadesi eksiktir: Koron, Modon, Navarin, Anabolu (Nauplia) ve Menekşe (Monemvasia) Venedik'te kaldı. Bunlar 1499-1502 savaşında ve 1540'a kadar süren sonraki savaşlarda alındı; yarımada ancak o zaman bütünüyle Osmanlı'ya geçti. TDV'ye göre bunu iki yüzyılı aşan bir barış dönemi izledi; tahrir defterleri XVI. yüzyılın ilk çeyreğine kadar nüfusun iki katından fazla arttığını gösterir ve Rumların Türk baskısından dağlara kaçtığı söylemini madde \"tarihî bir yanılgı\" diye niteler. TDV fethi yalnız \"1460 baharı\" diye tarihler.", ic_not_metin:"çıkarılan: atlastaki 29 Mayıs günü okunan gövdelerde geçmiyor",
  kesinlik:"kesin",
  zincir:[],
  olay:["1460-05-29"],
  kaynak:"TDV: mora (Machiel Kiel – John Alexander) · mehmed-ii (Halil İnalcık)" },

// ── 7 · 1461-08-15 Trabzon'un fethi ────────────────────────────────────────
{ id:"savas-trabzon-1461", tur:"savas-hikayesi",
  baslik:"Trabzon'un teslimi (1461)",
  kisa:"Bizans dünyasının son kalıntısını surlardan çok dağlar koruyordu; Fâtih o dağları aşınca imparator ailesiyle gemiye bindirilip İstanbul'a gönderildi.",
  tarih_metin:"1461 yazı · TDV: \"Ağustos veya Eylül 1461\"",
  yer:"Trabzon, Doğu Karadeniz kıyısı",
  taraflar:[
    { ad:"Osmanlı ordusu ve donanması", komutan:"Fâtih Sultan Mehmed · keşif donanmasında Hızır Bey · Gelibolu sancak beyi Kasım Bey", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Trabzon Rum İmparatorluğu (Komnenos hânedanı)", komutan:"İmparator David Komnenos", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"1204'ten beri ayakta duran bu küçük imparatorluğun uzun ömrünü TDV birkaç etkene bağlar: kıyıyı iç bölgelerden ayıran ve geçit vermeyen Doğu Karadeniz dağları, sağlam surlar, Venedik ve Ceneviz kolonileriyle canlı ticaret ve güçlü komşulara (Selçuklular, Moğollar, Timur) vasal olmayı göze alan bir evlilik diplomasisi. İstanbul'un fethinden sonra İmparator Kalo Ioannes padişaha vergi ödemeye başladı. 1456'da Canik Türkmenlerini yanına alan Şeyh Cüneyd şehri alıp kendi devletini kurmaya kalkıştı, surların önüne kadar geldi ama başaramadı. II. Mehmed maddesine göre Trabzon Akkoyunlu Uzun Hasan'ın himayesinde sayılıyordu; bu yüzden sefer aynı zamanda Uzun Hasan'a karşı bir hamle olarak görüldü. Fâtih sefere çıkmadan önce Rodos şövalyeleriyle ateşkes imzaladı.",
  akis:"Önce Hızır Bey donanmayla bir keşif harekâtı yaptı. Ardından padişah ordunun başında karadan çetin dağ yollarını aşarak şehre ulaştı ve kuşatmaya başladı; Gelibolu sancak beyi Kasım Bey'in donanması denizden destek verdi. Kuşatma kaynaklara göre dört ya da altı hafta sürdü ve şehir bir antlaşmayla teslim oldu. Fâtih birkaç gün Trabzon'da kaldı, şehrin idaresini Kasım Bey'e bıraktı.",
  sonuc:"Antlaşma gereği David Komnenos ve bütün ailesi taşınabilir eşyalarıyla gemilere bindirilip İstanbul'a gönderildi; saray görevlileri ve varlıklı aileler de onları izledi. İmparatora Serez yöresinde geniş topraklar verildi, soyluların çoğuna timar tahsis edildi. Şehir ve çevresinden seçilen 1500 kadar gencin 800'ü yeniçeri olarak yetiştirilmek üzere İstanbul'a yollandı. Şehirde kalanların mülkü tanındı; 400 kişilik bir yeniçeri birliği ve azebler yerleşti, boşalan evlere Türkler kondu. 1486 tahririne göre Anadolu şehirlerinden sürgünle ya da kendi isteğiyle gelen Müslümanlar nüfusun beşte biri kadardı. İmparatorların taç giydiği Chrysokephalos katedrali fethin hatırasına Câmi-i Atîk'e çevrildi. Mesele Uzun Hasan için kapanmadı: barış şartı olarak Trabzon'un kendisine verilmesini istedi ve 1472'de eski imparatorun bir yeğenini şehrin üzerine gönderdi — iki yıl sonra Otlukbeli'ne varacak çatışmanın düğümlerinden biri buydu.",
  tartisma:"TDV'nin Trabzon maddesi teslimi \"Ağustos veya Eylül 1461\" diye iki ihtimalle verir; kuşatmanın süresi de kaynaklara göre dört ile altı hafta arasında değişir. Amasra'nın düşüşünü ise TDV'nin II. Mehmed maddesi 1459 yazına, Semendire seferinin hemen ardına koyar.", ic_not_tartisma:"çıkarılan: Atlastaki 15 Ağustos günü okunan TDV gövdelerinde geçmiyor. Ayrıca kuyruk kronolojide aynı güne yazılmış …",
  kesinlik:"tartismali",
  olay:["1461-08-15|Trabzon"],
  kaynak:"TDV: trabzon (kuşatma, teslim şartları, 1486 tahriri) · mehmed-ii (Halil İnalcık; Uzun Hasan bağlamı, Rodos ateşkesi, 1472) · otlukbeli-savasi (Uzun Hasan'ın barış şartı)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 8 · 1473-08-11 Otlukbeli Savaşı ────────────────────────────────────────
{ id:"savas-otlukbeli-1473", tur:"savas-hikayesi",
  baslik:"Otlukbeli Savaşı (11 Ağustos 1473)",
  kisa:"Bir hafta önce ağır bir bozgun yaşayan ordu sekiz saatte kazandı; Uzun Hasan ise kendisine çok benzeyen bir beyi geride bırakıp kaçtı.",
  tarih_metin:"16 Rebîülevvel 878 · 11 Ağustos 1473 (Çarşamba)",
  yer:"Otlukbeli (Başkent) tepeleri, Tercan yakınında Üçağızlı mevkii",
  taraflar:[
    { ad:"Osmanlı ordusu", komutan:"Fâtih Sultan Mehmed (merkez) · sağ kolda Şehzade Bayezid · sol kolda Şehzade Mustafa ile Anadolu beylerbeyi Koca Dâvud Paşa · Vezîriâzam Mahmud Paşa", kuvvet:"70.000 ile 100.000 arası" },
    { ad:"Akkoyunlu ordusu", komutan:"Uzun Hasan (merkez) · sağ kolda oğlu Zeynel Mirza · sol kolda oğlu Uğurlu Mehmed · öncüde Gâvur İshak", kuvvet:"yaklaşık 70.000 süvari (40.000'i zırhlı ve mızraklı)" }
  ],
  oncesi:"Trabzon'u alıp Karamanoğulları üzerinde hâkimiyet kuran Fâtih'in doğudaki en güçlü rakibi, İran ve Doğu Anadolu'nun büyük kısmına sahip Diyarbekir-Tebriz merkezli Akkoyunlu Devleti'ydi. Uzun Hasan Osmanlı ile savaşan Venedik'le, ayrıca Macaristan, Rodos şövalyeleri ve Kıbrıs'la ittifak aradı; ordusunun en büyük eksiği olan top ve tüfeği ısrarla Venedik'ten istedi, ama gönderilen silahlar Osmanlı tedbirleri yüzünden ona hiç ulaşmadı. 1472'de bir Akkoyunlu ordusu Tokat'ı yağmalayıp yaktı; TDV bunu Fâtih'in ipek yolu üzerindeki Tokat'ta koydurduğu yeni gümrüğe verilmiş bir cevap olarak yorumlar. Uzun Hasan barış için Kapadokya ile Trabzon'un kendisine bırakılmasını istedi; Fâtih sert bir mektupla onu baharda savaşa çağırdı. Batıda Venedik ve Macaristan'la barış arayıp Memlüklerle anlaştıktan sonra Mart 1473'te Üsküdar'dan yola çıktı ve İstanbul'u küçük oğlu Cem'e emanet etti.",
  akis:"Ordu savaş düzeninde kırk gün yürüdüğü halde Uzun Hasan'la karşılaşmadı; haberleşme kopunca İstanbul'a Akkoyunluların kazandığı söylentisi ulaştı ve Şehzade Cem kendi otoritesini kurmaya girişti. 4 Ağustos'ta Fırat kıyısında Uğurlu Mehmed sahte bir çekilmeyle Has Murad Paşa'yı dar bir geçide çekti; Mahmud Paşa'nın uyarısını dinlemeyen paşa nehri geçmeye çalışırken boğuldu, 4000 kadar asker öldü, birçok ileri gelen esir düştü. Morali bozulan ordu yedi gün sonra Üçağızlı'da konakladığında Otlukbeli tepelerini önceden tutmuş bir düşmanla, elverişsiz bir arazide savaşmak zorunda kaldı. Dâvud Paşa'nın şiddetli hücumu Gâvur İshak'ın aşağı inip yolları kesmesini önledi ve Osmanlı birliklerinin tepede tutunmasını sağladı. Şehzade Mustafa düzlüğe çıkıp Zeynel Mirza'nın kanadına yüklendi; Zeynel azeblerce öldürülünce Akkoyunlu sağ kanadı çöktü. Öbür kanatta Uğurlu Mehmed bir dereyi tutarak Şehzade Bayezid'i durdurdu. Dağılmanın başladığını gören Fâtih yeniçerilerden bir kısmını daha savaşa sürdü. Direnmenin imkânsız olduğunu anlayan Uzun Hasan, kendisine çok benzeyen Alpagot Pîr Mehmed Bey'i yerinde bırakıp kaçtı; Osmanlılar onu Uzun Hasan sanıp esir aldılar ve yanıldıklarını ancak sonra anladılar.",
  sonuc:"Angiolello'ya göre sekiz saat süren savaşta Akkoyunlular 10.000, Osmanlılar yalnız 1000 kişi kaybetti; TDV zaferde top ve tüfek üstünlüğünün büyük pay sahibi olduğunu vurgular. Esirler arasında Timur soyundan mirzalar, Uzun Hasan'ın nişancısı ve imamı vardı; esir Türkmen askerlerinin çoğu öldürüldü, ancak kaçan ordu izlenmedi. Fâtih Bayburt'u aldı, dönüşte Şarkîkarahisar kalesini de ele geçirdi. Zafer, Timur'un verdiği yenilgiden beri doğudan gelecek bir tehlikeden çekinen Osmanlılara büyük bir moral kazandırdı ve klasik Türkmen ordularının ateşli silahlı düzenli birliklerle artık baş edemeyeceğini gösterdi. Akkoyunlular bir daha toparlanamadı; bıraktıkları boşluğu, Osmanlılar için çok daha ciddi bir rakip olacak Safevîler doldurdu.",
  tartisma:"Has Murad Paşa'nın emre uymayışı kaynaklarda iki farklı sebebe bağlanır: bir kısmına göre maiyetindekiler zafer şerefini Mahmud Paşa'ya bırakmaması için onu kışkırttı, bir kısmına göre tecrübesizliğine yenik düştü. Osmanlı ordusunun mevcudu 70.000 ile 100.000 arasında geniş bir aralıkla verilir; TDV'deki kayıp rakamları ise tek bir kaynağa (Angiolello) dayanır.",
  kesinlik:"kesin",
  olay:["1473-08-11"],
  kaynak:"TDV: otlukbeli-savasi (Erhan Afyoncu; DİA 34, 2007, s. 4-6)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 9 · 1475-06-06 Kırım'ın Osmanlı himayesine girişi ──────────────────────
{ id:"kirim-eminek-kefe-1475", tur:"sebep-sonuc",
  kisa:"Kırım'ı Osmanlı'ya bir meydan savaşı değil, Cenevizlilerin görevden aldırdığı bir kabile beyinin öfkesi getirdi.",
  sebep:{ b:"Hacı Giray'ın ölümünden (1466) sonra oğulları Nur Devlet ile Mengli Giray'ın taht kavgası; Kefe Cenevizlilerinin bu kavgayı körükleyip Şirin beyi Eminek'i görevden aldırması", t:"1466-01-01" },
  sonuc:{ b:"Gedik Ahmed Paşa'nın donanmasıyla Kefe ve bütün Ceneviz limanlarının alınması, Mengli Giray'ın Osmanlı hâmiliğini kabul etmesi", t:"1475-06-06" },
  bag:"TDV'nin Kırım maddesine göre hanlığın en büyük zaafı, devletin gerçek sahiplerinin irsî kabile beyleri olmasıydı; han ailesindeki her rekabet kolayca bir iç savaşa dönüşüyordu. 1475'e doğru Kefe tudunu ve Şirin beyi Eminek, Osmanlılarla anlaştığı suçlamasıyla Cenevizlilerin ısrarı üzerine görevinden uzaklaştırıldı. Eminek kabileleri toplayıp ayaklandı ve Mengli Giray'ı kaçmak zorunda bıraktı. Cenevizlilere sığınan Mengli'yi bu kez Cenevizliler, Nur Devlet'le anlaşıp hapsetti. Nur Devlet'le de arası bozulan Eminek Cenevizlilere karşı padişaha başvurdu. Kefe maddesine göre Fâtih ile Eminek arasındaki görüşmelerde, harekât başarılırsa Kefe'nin Osmanlı'ya bırakılacağı kararlaştırılmıştı.",
  metin:"Fâtih bu fırsatı değerlendirip 100 parçalık bir donanmayı Gedik Ahmed Paşa komutasında Kırım'a gönderdi; Kefe ile birlikte bütün sahil şeridi Safer 880 / Haziran 1475'te alındı. Paşa hapisteki Mengli Giray'ı serbest bıraktı; Mengli, Ceneviz dostu Nur Devlet'in elinden hanlığı geri aldı ve padişahın dostuna dost, düşmanına düşman olmayı kabul etti. Bir buçuk ay sonra padişaha yazdığı mektupla bu durumu teyit etti. TDV burada yaygın bir kanıyı da düzeltir: sanıldığı gibi ayrı bir tâbiiyet belgesi yoktur; bağ, Gedik Ahmed Paşa ile yapılan antlaşmaya ve hanın mektubuna dayanır. Batıdan doğuya Sarıkirman'dan Sarıgöl'e uzanan kıyı şeridinde Kefe sancağı kuruldu, iç kesimler hanlığa kaldı. Kefe bundan sonra Osmanlı'nın kuzey siyasetinin ana üssü oldu ve şehzade sancağı olarak da kullanıldı: II. Bayezid'in oğlu Mehmed ve Yavuz'un oğlu Süleyman — geleceğin Kanûnî'si — burada sancak beyliği yaptı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1475-06-06", "1475-07-01|Mengli Giray"],
  kaynak:"TDV: kirim (taht kavgası, Eminek, tâbiiyet belgesi) · kefe (Yücel Öztürk; 100 gemi, Eminek görüşmeleri, Kefe sancağı)" },

// ── 10 · 1519-09-01 Cezayir'in Osmanlı'ya bağlanması ───────────────────────
{ id:"cezayir-oruc-reis-olumu-1519", tur:"sebep-sonuc",
  kisa:"Ağabeyini bir ağılda kaybeden korsan, Cezayir'i ayakta tutabilmek için şehri İstanbul'a bağladı — ve padişahtan yeni bir ad aldı.",
  sebep:{ b:"Oruç Reis'in 1518 yazında Tilimsân'ı savunduktan sonra bir İspanyol müfrezesince sıkıştırılıp öldürülmesi; kardeşi Hızır'ın İspanya karşısında yalnız kalması", t:"1518-01-01" },
  sonuc:{ b:"Cezayir halkının Ekim 1519 tarihli arîzasıyla şehrin Yavuz Sultan Selim'e bağlanması ve hutbenin padişah adına okunması", t:"1519-09-01" },
  bag:"TDV'nin Oruç Reis maddesine göre Oruç Tilimsân'ı altı ay savundu; cephane ve yiyecek bitince otuz-kırk arkadaşıyla kaleden çıkmaya çalıştı, şehirden 100 km kadar ötede Araplardan yardım alan kırk beş kişilik bir İspanyol müfrezesince bir ağılda sıkıştırıldı ve yaralandıktan sonra öldürüldü. Tek başına kalan Hızır, Osmanlı desteğini güçlendirmek için adamı Hacı Hüseyin'i Cezayir halkının arîzası ve kırk esirle İstanbul'a yolladı. Selim memnuniyetini onun yeni lakabına dönüşecek sözlerle dile getirdi (\"Hızır Reis nasrüddîndir, hayrüddîndir\") ve onu Cezayir hâkimi olarak tanıyan bir hatt-ı şerif gönderdi.",
  metin:"Selim ayrıca yeniçeri ve topçulardan oluşan 2000 kişilik bir birlik yolladı; Cezayir'e gönüllü gideceklere yeniçerilik imtiyazı ve Anadolu'dan asker yazma izni verdi. Hızır bundan sonra Hayreddin Paşa diye anıldı. \"Barbaros\" adı da bu yıllardan kalır: Avrupalılar önce Oruç'a kızıl sakalı yüzünden \"Barbarossa\" demişti; Hızır'ın hatıratına göre 1519 Ağustosunda Sicilya naibi Hugo de Moncada'nın seksen gemilik çıkarmasını püskürttüğünde bu ad ona da verildi. Oruç Reis ise bu adı taşıyan ilk kardeşti ve daha önce Bicâye önünde bir top güllesiyle kolunu kaybetmişti. Bağlanma Hayreddin'in gücünü hemen sağlamlaştırmadı: 1524'te yerli emîr Ahmed b. Kādî'nin isyanıyla Cezayir'i bırakmak zorunda kaldı, üç yıl sonra döndü ve 1530'da limana hâkim Penon adasını alıp buraya bir dalgakıran yaptırdı. TDV başvuru belgesini Ekim 1519 tarihli olarak verir.", ic_not_metin:"çıkarılan: atlastaki maddenin eylül başı tarihi bu belgeden önceye düşüyor",
  kesinlik:"kesin",
  zincir:[],
  olay:["1519-09-01"],
  kaynak:"TDV: barbaros-hayreddin-pasa (Şerafettin Turan; arîza, hatt-ı şerif, Barbarossa adı) · oruc-reis (İdris Bostan; Tilimsân ve ölümü) · cezayir (2000 kişilik birlik, yeniçerilik imtiyazı)" },

// ── 11 · 1520-09-30 Kanunî Sultan Süleyman tahta çıktı ─────────────────────
{ id:"kimdir-kanuni-tahta-cikis", tur:"kimdir",
  ad:"I. Süleyman (Kanûnî) — tahta çıkışı",
  kisa:"Rakipsiz tahta çıkan şehzade: babası taht için amcalarını ortadan kaldırmıştı, o ise ilk iş olarak babasının sürgünlerini evlerine gönderdi.",
  metin:"6 Kasım 1494'te, babası Şehzade Selim'in sancak beyi olduğu Trabzon'da doğdu; annesi Hafsa Sultan'dır. Çocukluğu Trabzon sarayında geçti; Evliya Çelebi'ye göre burada sütkardeşi Yahyâ ile birlikte bir Rum ustadan kuyumculuk öğrendi. II. Bayezid'in tereddütleri yüzünden sancağa geç çıktı ve 1509'da Kefe'ye gönderildi; babasının taht mücadelesini oradan izleyip destekledi. Selim tahta geçip taht iddiasındaki kardeşlerini bertaraf edince Süleyman tek vâris olarak 1513'te Manisa'ya gönderildi ve yaklaşık yedi yıl orada kaldı. Babasının 21-22 Eylül 1520'deki ölüm haberi Vezîriâzam Pîrî Mehmed Paşa'nın habercisiyle geldi; kara yoluyla 30 Eylül'de Üsküdar'a ulaşıp saraya geçti ve tahta oturdu, ertesi gün babasının naaşını Edirnekapı'da karşıladı. İlk işleri yeni saltanatın üslubunu ilan eden işaretler gibi okundu: Selim'in Tebriz ve Kahire'den sürdüğü 600-800 kadar sanatkâr ve ileri gelenin memleketlerine dönmesine izin verdi, İran'la ipek ticaretine konan yasağı kaldırıp malına el konan tüccarın zararını ödedi, halka eziyet eden yönetici ve askerleri cezalandırdı, İstanbul'a getirilmiş son Abbâsî halifesinin Mısır'a dönmesine razı oldu. Saltanatının ikinci ayı dolmadan Şam beylerbeyi Canbirdi Gazâlî ayaklandı; isyan Ocak 1521'de bastırıldı ve yeni padişahı büyük bir sefere, yani Belgrad'a yöneltti. 1520'de onu gören Venedik elçisi uzun boylu, ince ama dayanıklı, sakalı ve bıyığı zor seçilen, cana yakın bir genç olarak tarif etti.",
  not:"\"Kanûnî\" unvanı çağdaşı değildir: TDV'ye göre ilk kez XVIII. yüzyılda Dimitrie Cantemir'in Osmanlı tarihinde geçer ve XIX. yüzyılda yaygınlaşır; çağdaş Batılılar onu \"Muhteşem\" ya da \"Büyük Türk\" diye anıyordu. Doğum tarihi kaynaklarda farklı verilir (Mecdî Nisan-Mayıs 1496 der).",
  kesinlik:"kesin",
  olay:["1520-09-30"],
  kaynak:"TDV: suleyman-i (Feridun Emecen; doğum, Kefe ve Manisa sancakları, cülûs ve ilk icraat)" },

// ── 12 · 1522-12-21 Rodos'un fethi ─────────────────────────────────────────
{ id:"savas-rodos-1522", tur:"savas-hikayesi",
  baslik:"Rodos Kuşatması (28 Temmuz – 20 Aralık 1522)",
  kisa:"Fâtih'in 1480'de alamadığı kale o günden beri Avrupa'nın en sağlam istihkâmına dönüşmüştü; Kanûnî beş ay sonra şövalyelerin adadan çıkıp gitmesine izin verdi.",
  tarih_metin:"Donanma 4 Haziran 1522'de denize açıldı · padişah 28 Temmuz'da adaya geçti · teslim 1 Safer 929 / 20 Aralık 1522",
  yer:"Rodos şehri ve adası",
  taraflar:[
    { ad:"Osmanlı ordusu ve donanması", komutan:"Kanûnî Sultan Süleyman · Vezîriâzam Pîrî Mehmed Paşa", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Saint Jean (Hospitalier) şövalyeleri", komutan:"Büyük üstat Philippe Villiers de l'Isle-Adam", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Şövalyeler 1309'da Rodos'a yerleşmiş, 81 hektarlık surlarıyla şehri Ortaçağ Avrupası'nın en sağlam kalesine çevirmiş ve buradan Türk gemilerine, kıyılarına korsan saldırıları düzenlemişti. 1480'de Mesih Paşa'nın 160 gemilik filosu adayı üç ay kuşattı; 28 Temmuz'daki son büyük hücum sonuç vermeyince çekildi ve ardından surlar baştan başa yenilendi. Yavuz Sultan Selim'in 1516-1517'de Suriye ve Mısır'ı almasıyla ada, İstanbul ile Kahire arasındaki işlek deniz yolunun ortasında bir Hıristiyan ileri karakolu hâline geldi. Belgrad'ı alan Kanûnî ikinci hedef olarak yine büyük atasının düşüremediği Rodos'u seçti; Yavuz'un yaptırdığı tersane ve son yıllarında hazırlattığı büyük donanma bu sefer için ek bir hazırlığa neredeyse gerek bırakmıyordu.",
  akis:"Donanma 4 Haziran'da açıldı; padişah 18 Haziran'da ordusunun başında Üsküdar'dan kara yoluyla çıkıp İznik, Kütahya, Denizli, Çine ve Muğla üzerinden 26 Temmuz'da Marmaris'e ulaştı, 28 Temmuz'da adaya geçti. Kuşatma boyunca çarpışmaları izledi, sık sık adanın çevresini dolaştı ve Pîrî Mehmed Paşa ile sürekli divan kurdu. Ordugâh hayatı savaşla sınırlı kalmadı: Anadolu'da yolsuzluk yaptığı saptanan yirmi beş kadı azledildi, Hürrem Sultan'dan oğlu Mehmed'in doğum haberi de bu sırada geldi. Kaynaklar çarpışmaları \"zorlu ve kanlı\" diye niteler; hücumların ayrıntısı bilinmez. Şövalyeler 20 Aralık'ta teslim oldu.", ic_not_akis:"eski: TDV çarpışmaları \"zorlu ve kanlı\" diye niteler ama hücumların ayrıntısını vermez.",
  sonuc:"Toplanan divanda kabul edilen l'Isle-Adam'a adayı terk izni verildi; rivayete göre padişah yaşlı şövalyeyi teselli etti, hatta İslâm'a davet edip ona uygun bir görev vermeyi önerdi. Şövalyeler anlaşma şartlarıyla gemilerine binip ayrıldı; büyük üstat 1 Ocak 1523'te adadan çıktı. Aynı günlerde Cem Sultan'ın Rodos'ta yaşayan oğlu bulunup öldürüldü, kızları ve hanımı İstanbul'a gönderildi. Padişah 29 Aralık'ta ve 2 Ocak'ta şehre girdi, adına hutbe okuttu. Yıkılan surlar onarıldı ve güçlü bir garnizon yerleştirildi; şehrin yukarı kesiminde bir cami, medrese, imaret ve hamam yaptırıldı, çevredeki küçük adaların vergi gelirleri bu vakfa bağlandı. Şövalyelerin gotik Saint Jean katedrali 1523'te camiye çevrildi. Ada 1912'deki İtalyan işgaline kadar Osmanlı'da kaldı.",
  tartisma:"Sefer takvimi TDV'nin iki maddesinde ayrışır: I. Süleyman maddesi padişahın Üsküdar'dan 23 Receb'de (18 Haziran) çıktığını, Rodos maddesi ise 21 Receb 928'de (16 Haziran) sefere çıktığını yazar. Rodos maddesi 1524 garnizonunu bir yerde 1343, başka bir yerde 1378 kişi olarak verir. Teslim günü TDV'nin iki maddesinde de 20 Aralık 1522'dir.", ic_not_tartisma:"çıkarılan: atlastaki madde 21 Aralık'ı taşıyor",
  kesinlik:"kesin",
  olay:["1522-12-21"],
  kaynak:"TDV: suleyman-i (Feridun Emecen; sefer takvimi, teslim ve sonrası) · rodos (Machiel Kiel; 1480 kuşatması, surlar, garnizon, vakıf)",
  gorsel:null, gorsel_kaynak:"aranmadı" }

];
