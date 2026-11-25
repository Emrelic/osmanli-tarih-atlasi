// ============================================================================
// EK OKUMA — LEHİSTAN (LEHİSTAN-LİTVANYA BİRLİĞİ VE ÖNCESİ) · seri üretim parti 02
// ============================================================================
// Dal ekokuma-lehistan-1125 · LAB · 25 Kasım 2026
// Şartname: denetim/EKOKUMA-DEVLETLER-SARTNAME-1125.md (origin/ekokuma-sartname-1125)
// Konu listesi: denetim/EKOKUMA-LEHISTAN-KONU.md (§5 parti 02 tablosu)
//
// AD ALANI: yalnız window.EKOKUMA_DEVLEHISTAN02 (bitişik; js/app.js _ekHavuz deseni
//   ^EKOKUMA(_[A-Z0-9]+)?$ tek alt çizgi kabul eder). Yükleyiciye eklenmedi (altyapı işi).
// TEYİT İŞARETİ (Venedik 02 ile aynı biçim):
//   teyit:"teyitli"  + yayin_adayi:true  → karttaki olgular, bu oturumda TAM METNİ (ham HTML
//     indirilip düz metne çevrilerek baştan sona) okunan akademik kaynağın kendi anlatısı.
//   teyit:"teyitsiz" + yayin_adayi:false → en az bir olgu tam okunmamış ya da akademik olmayan
//     (dipnotsuz, popüler) metne dayanıyor; yayın adayı DEĞİL, süzülmeli.
//   Gerekçe her kartta ic_not_teyit alanında.
// KAYNAK: TDV İslâm Ansiklopedisi maddeleri (ham HTML'den gövde okundu) ve Wilanów Sarayı
//   Müzesi "Pasaż wiedzy" yazıları (imzalı). Cümle kopyalanmadı; alıntı yok.
// ALINMA YOLU (denetim 25.11, EMRELİC kuralı): her kaynak curl ile ham HTML olarak indirildi ve
//   düz metne çevrilip okundu (WebFetch özeti değil). İlk indirmede curl'e tarayıcı User-Agent
//   başlığı verilmişti; hiçbir sayfa engel (403/Cloudflare/bot koruması/ücret duvarı) vermedi.
//   Denetimde 14 kaynağın hepsi VARSAYILAN curl başlığıyla yeniden çekildi: hepsi 200, düz metin
//   ilk indirmeyle karakteri karakterine aynı. Engel aşılan kaynak: 0.
// BAĞ: olay[] her zaman "gün|ayırt edici parça"; js/app.js ekKartBagliMi'nin kendi metni
//   scratchpad bag_sina.js ile 30.312 maddelik evrende koşturularak sınandı (KONU.md §6).
// ============================================================================
window.EKOKUMA_DEVLEHISTAN02 = [

{ id:"devlehistan-viyana-1683-kurtarici", tur:"tartisma", devlet:"lehistan",
  baslik:"Viyana 1683: şehri Sobieski mi kurtardı, Osmanlı ordusu mu kendini kaybetti?",
  kisa:"Polonya'da 12 Eylül 1683 bir kralın zaferi olarak anlatılır. Türkçe akademik kaynaklar ise aynı günü bir koalisyonun, uzun bir savunmanın ve Osmanlı ordugâhındaki çatlakların birlikte ürettiği bir sonuç olarak okur.",
  metin:"Temmuz 1683'te Osmanlı ordusu Viyana önüne geldiğinde imparator I. Leopold şehri terk etmiş, savunmayı Kont Starhemberg'e bırakmıştı. Kuşatma iki aya yaklaştı; büyük kuşatma topları getirilmediği için surlar hızla yıkılamadı.\n\nKurtarma ordusu bir gecede doğmadı. Kemal Beydilli'nin TDV'deki 'Polonya' maddesine göre Jan Sobieski, papalığın yönlendirmesiyle 1 Nisan 1683'te imparatorla bir savunma ve saldırı ittifakı yapmıştı. Aynı yazarın 'Viyana' maddesi de Papa XI. Innocent'in önderliğinde Alman dünyasını ve Lehistan'ı bir araya getiren geniş bir ittifaktan söz eder.\n\nOsmanlı tarafında ise işler karışıktı. Abdülkadir Özcan'ın 'Merzifonlu Kara Mustafa Paşa' maddesi, Leh ordusunu durdurma görevinin Kırım hanı Murad Giray'a verildiğini, hanın sadrazamla arasındaki kırgınlık yüzünden ciddi bir harekette bulunmadığını anlatır. 12 Eylül'de önce Budin valisi İbrâhim Paşa'nın kolu dağıldı, ardından öteki kanat da çözüldü; Sobieski ancak bundan sonra doğrudan merkeze yüklendi.\n\nTarihçiler bugün ne diyor? Beydilli, Sobieski'yi muhasaranın kaldırılmasında 'başlıca etken' sayar ve hanın hareketsizliğinin kral ile han arasında gizli bir anlaşma şüphesi doğurduğunu da not eder. Yani kahramanlık anlatısı boş değildir; ama tek başına yetmez: iki ay dayanan bir şehir, papanın kurduğu ittifak ve dağılan bir Osmanlı ordugâhı da hikâyenin parçasıdır.",
  bag:"Viyana bozgunu, Lehistan'ın Kutsal İttifak'a girdiği ve Karlofça'ya kadar süren on altı yıllık savaşı başlattı.",
  kesinlik:"tartismali",
  olay:["1683-09-12|Kahlenberg"],
  kaynak:"Kemal Beydilli, \"Polonya\" (II. Tarih), TDV İslâm Ansiklopedisi 34 (2007), s. 309-317, https://islamansiklopedisi.org.tr/polonya · Kemal Beydilli, \"Viyana\", TDV İslâm Ansiklopedisi 43 (2013), s. 113-119, https://islamansiklopedisi.org.tr/viyana · Abdülkadir Özcan, \"Merzifonlu Kara Mustafa Paşa\", TDV İslâm Ansiklopedisi 29 (2004), s. 246-249, https://islamansiklopedisi.org.tr/merzifonlu-kara-mustafa-pasa",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"Üç TDV maddesinin gövdesi ham HTML'den tam okundu. Gizli anlaşma şüphesi Beydilli'nin Jansky'ye dayanarak aktardığı şüphedir, kartta 'şüphe' olarak kaldı.",
  ic_not:"Asker sayıları bilerek yazılmadı: Özcan Sobieski kumandasındaki 'Leh kuvveti'ni 100.000 verir; bu sayı müttefik ordunun tamamı mı yalnız Leh birlikleri mi, okunan metinde belirsiz. Bağ yalnız Lehistan ve Habsburg 'Kahlenberg' maddelerine düşer (Osmanlı 'II. Viyana Kuşatması bozgunu' maddesinde görünmez; orada Osmanlı kartları var)." },

{ id:"devlehistan-varna-1444-leh-krali", tur:"karsi-anlati", devlet:"polonya-erken",
  baslik:"Varna 1444: Lehistan'ın savaşmadığı savaşta ölen Leh kralı",
  kisa:"Polonya'da 'Varnalı' diye anılan genç kral Osmanlı ordugâhına hücum ederken öldü. Ama TDV'ye göre Polonya bu Haçlı seferine resmen katılmamıştı. Kral ölüme hangi tacı taşırken gitti?",
  metin:"III. Władysław, Jagiełło'nun oğluydu ve on yaşında Lehistan tahtına çıkmıştı. 1440'ta Macar tahtı da ona teklif edildi; Türkçe kaynaklarda I. Ulászló adıyla geçmesi bu yüzdendir.\n\nKemal Beydilli'nin TDV'deki 'Polonya' maddesi kritik bir ayrımı vurgular: Varna'da Türklerle karşılaşan Macar-Leh kralıydı, ama Polonya bu savaşta resmen taraf olmadı ve Leh soyluları Haçlı seferine ilgi göstermedi. Ordunun ağırlığı Macarlardı; Sırp, Eflak, Hırvat ve Bosna birlikleri ile papanın temsilcisi Kardinal Cesarini'nin askerleri onlara katılmıştı.\n\nFeridun Emecen'in 'Varna Muharebesi' maddesi 10 Kasım 1444 gününü anlatır. Kral ikinci safta, beş yüz kişilik Macar ve Leh kıtalarıyla duruyordu. Osmanlı kanatları zorlanırken o, beş yüz atlısıyla padişahın yeniçerilerle korunan merkezine saldırdı; hendeği göremeyen atı düştü ve çevresini saran yeniçeriler onu öldürdü. Kralın ölümü Haçlı ordusunda paniğe dönüştü.\n\nTarihçiler bugün ne diyor? Emecen, ölüm anına dair kaynakların çeliştiğini de gösterir: II. Murad adına yazılan fetihnâme, kralın kolu kırık ve yaralı olarak yakalandığını, ordugâha getirilip başının vurulduğunu söyler; bu bilgi dönemin öteki kaynaklarıyla uyuşmaz. Beydilli'ye göre kralın ölümüyle Macar-Leh birliği kendiliğinden sona erdi ve Polonya yoluna Litvanya ile devam etti. Varna bir Polonya savaşı değildi, ama bir Polonya kralının sonu oldu.",
  bag:"Varna'dan sonra Polonya'nın Osmanlı ile ilişkisi savaş yerine ahidnâmelerle yürüdü; ilk barış 1489'da geldi.",
  not:"Aynı kral Lehçe III. Władysław, Macarca I. Ulászló, Türkçe kaynaklarda Vladislav olarak geçer.",
  kesinlik:"tartismali",
  olay:["1444-11-10|Varna Muharebesi"],
  kaynak:"Feridun Emecen, \"Varna Muharebesi\", TDV İslâm Ansiklopedisi 42 (2012), s. 527-530, https://islamansiklopedisi.org.tr/varna-muharebesi · Kemal Beydilli, \"Polonya\" (II. Tarih), TDV İslâm Ansiklopedisi 34 (2007), s. 309-317, https://islamansiklopedisi.org.tr/polonya",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"İki TDV maddesinin gövdesi ham HTML'den tam okundu; karttaki olgular onların kendi anlatısı.",
  ic_not:"devlet:'polonya-erken' (1444, birlik öncesi künye). Kralın cesedinin bulunamadığı ve 'yaşıyor' efsaneleri okunan kaynaklarda yok; yazılmadı (kronoloji maddesi d: metninde geçiyor, kaynağı ayrıca okunmadı). Bağ yalnız KRONOLOJI_COK_LEHISTAN maddesine düşer; Osmanlı 'Varna Zaferi' maddesinde görünmez." },

{ id:"devlehistan-batory-osmanli-adayi", tur:"tartisma", devlet:"lehistan",
  baslik:"Stefan Batory: Osmanlı'nın tahta oturttuğu Leh kralı mı?",
  kisa:"Lehistan'ın en başarılı krallarından biri sayılan Báthory, seçildiğinde Osmanlı'ya bağlı Erdel'in voyvodasıydı ve İstanbul'un adayıydı. Bu onu 'Osmanlı kralı' yapar mı?",
  metin:"1572'de Jagiellon hanedanı sona erince Lehistan'da kralı on binlerce soylunun tek tek oy verdiği seçimler belirlemeye başladı. Kemal Beydilli'nin TDV'deki 'Polonya' maddesine göre bu seçimler bütün Avrupa'nın müdahale ettiği bir yarışa döndü: varlıksız soyluların oyu, bol para harcayan yabancı güçlerin aracı oluyordu.\n\nOsmanlı bu yarışın dışında değildi. İlk seçimde İstanbul önce bir Leh soylusunu destekledi, İnebahtı'dan sonra değişen şartlarda bundan vazgeçip Fransız adayı Henri de Valois'nın arkasında durdu. Henri birkaç ay sonra kaçınca Osmanlı'nın bu kez kendi adayı vardı: Erdel voyvodası István Báthory. Beydilli'ye göre o da siyasi ve askerî baskıyla desteklenerek seçildi; Lehçe adıyla Stefan Batory 1576'da taç giydi.\n\nPeki Batory İstanbul'un kuklası mı oldu? Beydilli'nin anlattığı saltanat buna benzemez. Kral Danimarka'ya karşı istediğini alamadığı bir savaşla başladı, ardından Moskova'ya karşı üç seferle Livonya'daki durumunu sağlamlaştırdı. Osmanlı'nın şikâyet ettiği Kazakları denetim altına almaya çalışması ise iki tarafın da işine gelen bir adımdı.\n\nTarihçiler bugün ne diyor? Beydilli, Batory'den sonra İsveç Vasa hanedanından III. Zygmunt'un seçilmesiyle 'Osmanlı adaylarının seçtirilmesi dönemi'nin kapandığını yazar. Yani Osmanlı desteği gerçekti ve belirleyiciydi; ama seçilen kral, Lehistan'ın kendi çıkarlarını kovalayan güçlü bir hükümdar oldu.",
  bag:"Batory'nin seçimi, Lehistan tahtının Avrupa güçleri arasında pazarlık konusu olduğu seçimli krallık döneminin bir örneğidir.",
  kesinlik:"kesin",
  olay:["1576-05-01|Stefan Batory"],
  kaynak:"Kemal Beydilli, \"Polonya\" (II. Tarih), TDV İslâm Ansiklopedisi 34 (2007), s. 309-317, https://islamansiklopedisi.org.tr/polonya",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"TDV 'Polonya' II. Tarih bölümünün gövdesi ham HTML'den tam okundu; karttaki olgular onun anlatısı (Beydilli kendi Die polnischen Königswahlen çalışmasına gönderir; o eser okunmadı, kartta ondan ayrıca bir şey yok).",
  ic_not:"İlk seçimde Osmanlı'nın önce desteklediği Leh soylusunun adı TDV'de 'Jerzy Jaslowieski' diye geçer (Jazłowiecki); görünen alana adı yazılmadı. Seçim günü (Aralık 1575) okunan kaynakta yok; bağ taç giyme maddesine (1576-05-01)." },

{ id:"devlehistan-henri-valois-kacis", tur:"magazin", devlet:"lehistan",
  baslik:"Tahtını gizlice terk eden kral: Henri de Valois'nın kısa Leh saltanatı",
  kisa:"Osmanlı desteğiyle Lehistan tahtına seçilen Fransız prensi, taç giydikten dört ay sonra ülkeyi gizlice terk etti. Neden?",
  metin:"Lehistan'ın ilk seçimli kralı bir Fransızdı. Kemal Beydilli'nin TDV'deki 'Polonya' maddesine göre Fransa Kralı IX. Charles'ın kardeşi Henri de Valois, 11 Mayıs 1573'te kral seçildi ve bu seçimin başlıca etkenlerinden biri Osmanlı'nın verdiği destekti. İstanbul, İnebahtı'dan sonra değişen dengeleri hesaba katarak Habsburg adayına karşı Fransa'nın yanında durmuştu.\n\nHenri 21 Şubat 1574'te Krakov'da taç giydi. Ama saltanatı birkaç ay sürdü. 30 Mayıs 1574'te ağabeyi IX. Charles ölünce Fransa tahtı ona kaldı. Henri, yeni seçimli krallığından izin istemeye uğraşmadı: Lehistan'ı gizlice terk etti ve III. Henri adıyla Fransa tahtına oturdu.\n\nBu kaçış, Lehistan'ın yeni seçim düzeninin ilk sınavıydı. Tahtı boşalan ülke ikinci bir seçime gitmek zorunda kaldı; bu kez Osmanlı'nın kendi adayı, Erdel voyvodası István Báthory kazandı.\n\nTarihçiler bugün ne diyor? Beydilli bu ilk seçimlerin bütün Avrupa'nın ilgiyle izlediği ve müdahil olmak istediği bir olay olduğunu vurgular. Henri'nin kısa macerası bunun en çarpıcı örneğidir: Lehistan tacı, bir Fransız prensi için ağabeyinin tahtı açılana kadar beklenecek bir yedek koltuk olmuştu.",
  not:"Kaçışın günü okunan kaynakta yok; kronoloji maddesi 18 Haziran 1574'tedir.",
  t:"1574-06-18",
  olay:["1574-06-18|Henri de Valois"],
  kaynak:"Kemal Beydilli, \"Polonya\" (II. Tarih), TDV İslâm Ansiklopedisi 34 (2007), s. 309-317, https://islamansiklopedisi.org.tr/polonya",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"TDV 'Polonya' II. Tarih bölümü tam okundu; karttaki olgular onun anlatısı. 'Yedek koltuk' cümlesi yorumdur.",
  ic_not:"Beydilli yalnız 'gizlice' der; kaçışın saati, yolu ve günü okunan kaynakta yok, yazılmadı." },

{ id:"devlehistan-ilk-baris-1489", baslik:"İlk Osmanlı-Leh barışı (1489): iki yıllık bir ahidnâme neden tarihîdir?", tur:"antlasma", devlet:"polonya-erken",
  olay:["1489-03-22|Osmanlı-Lehistan barış"],
  kisa:"Yalnız iki yıl geçerliydi ve sınır baskınlarını durdurmaktan başka iddiası yoktu. Ama iki devlet arasında yapılan ilk barıştı ve sonraki üç yüz yıllık ahidnâme düzeninin kapısını açtı.",
  metin:"Kemal Beydilli'nin TDV'deki 'Polonya' maddesine göre iki devletin ilk teması 1414'e uzanır: Polonya kralı II. Władysław Jagiełło, Macar kralının isteğiyle Osmanlı'ya elçi göndermiş, I. Mehmed ile Macaristan arasında altı yıllık bir barışa aracı olmuştu. 1439'da ve 1478'de Osmanlı tarafı Macarlara karşı ittifak yoklaması yaptı; Polonya iki seferinde de teklifi kibarca geri çevirdi ve Hristiyan dayanışmasının dışında kalmayı göze alamadı.\n\nBu arada Karadeniz kıyısındaki dengeler değişti. Boğdan 1456'da Osmanlı hâkimiyetini tanıdı, Kefe ve Kırım 1475'te bağlandı, Kili ve Akkirman 1484'te alındı. Polonya'nın Boğdan voyvodası Stefan'a verdiği askerî destek bunu önleyemedi.\n\nBu ortamda Polonya kralı IV. Kazimierz'in elçisi Mikołaj Firlej, 22 Mart 1489'da bir ahidnâme akdetti. Belge yalnız iki yıl için geçerliydi; amacı sınır tecavüzlerini önlemekti. Beydilli onu tarihî kılan şeyin içeriği değil, iki devlet arasındaki ilk barış antlaşması olması olduğunu vurgular. Beş yıl sonra, Jan Olbracht döneminde, 6 Nisan 1494'te ilk kez ticari düzenlemeler de içeren yeni bir ahidnâme üzerinde uzlaşıldı.\n\nTarihçiler bugün ne diyor? İlişkinin özü baştan belliydi: Macaristan konusundaki ortak kaygı iki devleti yakınlaştırıyor, Boğdan üzerindeki karşılıklı iddialar ise uzaklaştırıyordu. 1489 barışı bu gerilimi çözmedi, yalnız onu yazılı bir düzene bağlamanın ilk denemesi oldu.",
  kesinlik:"kesin",
  kaynak:"Kemal Beydilli, \"Polonya\" (II. Tarih / III. Polonya-Osmanlı İlişkileri), TDV İslâm Ansiklopedisi 34 (2007), s. 309-317, https://islamansiklopedisi.org.tr/polonya",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"TDV 'Polonya' II. Tarih bölümü tam okundu; Beydilli bu kısımda Kołodziejczyk'in Ottoman-Polish Diplomatic Relations'ına (s. 100-109) dayanır; o eser okunmadı, kartta ondan ayrıca bir şey yok.",
  ic_not:"devlet:'polonya-erken' (1489, birlik öncesi). Elçinin adı TDV'de 'Mikolay Firley'; Lehçe yazımı Mikołaj Firlej (yazım düzeltmesi, olgu değil). 'IV. Kazimierz' TDV'de 'IV. Kasimir'." },

{ id:"devlehistan-ebedi-baris-1533", baslik:"'Ebedî barış' (1533): sonsuzluk iki hükümdarın ömrü kadardı", tur:"antlasma", devlet:"polonya-erken",
  olay:["1533-01-01|ebedî barış"],
  kisa:"Kanunî'nin bütün Avrupa ile savaştığı yıllarda Lehistan, Osmanlı'nın en ayrıcalıklı dostu oldu. Antlaşmanın adı 'ebedî'ydi; ama ebediyetin süresi belliydi.",
  metin:"Kanunî Sultan Süleyman'ın saltanatı Belgrad'ın ve Macaristan'ın fethiyle, Habsburglara karşı aralıksız savaşlarla geçti. Kemal Beydilli'nin TDV'deki 'Polonya' maddesine göre bu fırtınanın ortasında Polonya ile hiçbir silahlı çatışma yaşanmadı. İlişki Yavuz Sultan Selim döneminde de dostçaydı: Çaldıran zaferi özel bir elçiyle kutlanmış, barış 1514'te ve 1519'da uzatılmıştı.\n\nI. Zygmunt ile yapılan ateşkes 1525'te ve 1528'de yenilendi. Ocak 1533'te ise bambaşka bir biçim aldı: artık belli bir yıl sayısına değil, her iki hükümdarın ölümüne kadar geçerli olacak bir barıştı. 'Ebedî' adı buradan gelir; yani sonsuzluk, Süleyman ile Zygmunt hayatta kaldıkça sürecekti.\n\nBeydilli bu düzenin bir sonucunu özellikle vurgular: Polonya, Fransa'dan çok önce, Osmanlı'nın siyasi ve ekonomik bakımdan en çok kayırdığı devlet hâline geldi. Antlaşma Zygmunt'un oğlu II. Zygmunt August döneminde Ağustos 1553'te Kanunî tarafından, Ekim 1564'te veliaht Selim tarafından onaylandı; Selim tahta çıktıktan sonra Temmuz 1568'de yeniden tasdik edildi.\n\nTarihçiler bugün ne diyor? 1553 ahidnâmesi de karşı taraf bozmadıkça Kanunî'nin ömrü boyunca geçerli olduğu için literatürde yine 'ebedî barış' diye anılır. Adın yanıltıcılığı bir yana, bu barış Osmanlı-Leh ilişkisinin en sakin yarım yüzyılını açtı.",
  kesinlik:"kesin",
  kaynak:"Kemal Beydilli, \"Polonya\" (II. Tarih / III. Polonya-Osmanlı İlişkileri), TDV İslâm Ansiklopedisi 34 (2007), s. 309-317, https://islamansiklopedisi.org.tr/polonya",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"TDV 'Polonya' II. Tarih bölümü tam okundu; Beydilli 1553 kısmında Kołodziejczyk'e (s. 118-119) dayanır, o eser okunmadı, kartta ondan ayrıca bir şey yok.",
  ic_not:"devlet:'polonya-erken' (1533, birlik öncesi). TDV yalnız 'Ocak 1533' der; kronoloji maddesi 1533-01-01 (yıl/ay düzeyi). Mevcut Osmanlı kartları (antlasma2, antlasma4, statu) 'ebedî barış'ı Osmanlı tarafından anar; bu kart Leh tarafının kayırılmış devlet konumuna odaklanır." },

{ id:"devlehistan-kozmin-1497", tur:"sebep-sonuc", devlet:"polonya-erken",
  kisa:"Bir Leh kralının Boğdan'a yürüyüşü, Polonya'nın Karadeniz hayallerini nasıl bitirdi?",
  sebep:{ b:"Kral Jan Olbracht, İstanbul'dan barış isterken ertesi yıl Osmanlı'ya bağlı Boğdan'a saldırdı; voyvoda Stefan metbuu II. Bayezid'den yardım istedi", t:"1497-01-01" },
  sonuc:{ b:"Leh ordusu Kozmin'de ağır bir yenilgiye uğradı (26 Ekim 1497); Polonya, Osmanlı'nın Karadeniz çıkışını elinde tutmasına razı olmak zorunda kaldı", t:"1497-01-01" },
  bag:"Kozmin'den sonra Polonya Osmanlı aleyhtarı ittifaklardan uzak durdu ve önce ateşkese (1500), sonra barışa (1501) razı oldu.",
  metin:"Kili ve Akkirman 1484'te Osmanlı'ya geçince Karadeniz'e açılan yollar Polonya'nın elinden çıkmıştı. Kemal Beydilli'nin TDV'deki 'Polonya' maddesine göre bölge sınırları hiç kalıcı olarak çizilememiş, buğday, hayvan ve kereste gibi iaşe maddeleri bakımından değerli bir havzaydı; Polonya'nın büyük şehirlerini Karadeniz limanlarına bağlayan ticaret yolları da buradan geçiyordu.\n\nKral Jan Olbracht 1496'da 'hakkaniyetli bir barış' için İstanbul'a yeniden başvurdu. Ertesi yıl ise Boğdan'a saldırdı. Voyvoda Stefan, metbuu olan II. Bayezid'den yardım istedi ve savaş Polonya'nın ağır bozgunuyla bitti: Beydilli bu yenilgiyi 26 Ekim 1497 tarihiyle Kozmin yenilgisi olarak kaydeder.\n\nSonuç yalnız bir muharebe kaybı olmadı. Polonya, Osmanlı'nın Karadeniz çıkışını ve bölgedeki hâkimiyetini kabullenmek zorunda kaldı; ertesi yıl papanın öncülük ettiği Osmanlı aleyhtarı ittifaka katılmaktan kaçındı. Osmanlı ve Tatar akınları Leh Rutenyası'na ağır zarar verince kral 1 Mart 1500'de kısa bir ateşkesi, 19 Temmuz 1501'de de barışı kabul etti.\n\nTarihçiler bugün ne diyor? Beydilli'nin çizdiği tabloda Kozmin bir dönüm noktasıdır: Boğdan üzerindeki Leh iddiası sürse de Karadeniz kıyısının kime ait olduğu sorusu, Polonya açısından bu yenilgiyle kapanmıştır.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1497-01-01|Kozmin"],
  kaynak:"Kemal Beydilli, \"Polonya\" (II. Tarih / III. Polonya-Osmanlı İlişkileri), TDV İslâm Ansiklopedisi 34 (2007), s. 309-317, https://islamansiklopedisi.org.tr/polonya",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"TDV 'Polonya' II. Tarih bölümü tam okundu; karttaki olgular onun anlatısı.",
  ic_not:"KRONOLOJİ UYUŞMAZLIĞI: atlas maddesi 1497-01-01 (yıl düzeyi) 'Bukovina seferi ve Kozmin bozgunu'; TDV 'Polonya' 26 Ekim 1497 verir. Gün eklenmesi kronoloji işidir, bu dalda yapılmadı (KONU.md §3). sebep/sonuc t alanları bu yüzden maddenin gününe (1497-01-01) yazıldı. 'Bukovina' adı okunan kaynakta yok. Bağ yalnız KRONOLOJI_COK_LEHISTAN maddesine düşer; aynı gündeki Romanya maddesinde ('Büyük İstefan Leh Kralı Jan Olbracht'ı yendi') görünmez." },

{ id:"devlehistan-kamanice-eyaleti", baslik:"Kamaniçe'nin 27 yılı: katedralden camiye, Osmanlı'nın en büyük kaleleri arasına", tur:"mimari", devlet:"lehistan",
  olay:["1672-08-27|Kamaniçe düştü"],
  kisa:"Malta'yla kıyaslanan 'Hristiyanlığın doğu kalesi' 1672'de Osmanlı eyalet merkezi oldu. Bugün o çeyrek asırdan iki minare ve bir minber kaldı.",
  metin:"Kamaniçe (Lehçe Kamieniec Podolski) Dinyester'in bir kolu olan Smotryç suyunun kıyısında, korunaklı bir mevkide kuruludur. Dariusz Kołodziejczyk'in TDV'deki 'Kamaniçe' maddesine göre şehir 1430'da Polonya Krallığı'na katılmıştı; Polonyalı, Ermeni, Ukraynalı ve Yahudi nüfusuyla karışık bir ticaret merkeziydi ve XVI. yüzyılda Hristiyanlığın doğu savunma hattı sayılıp Malta'daki La Valletta ile karşılaştırılırdı.\n\n27 Ağustos 1672'de dokuz günlük kuşatmadan sonra düştü. IV. Mehmed 2 Eylül'de Katolik katedralini camiye çevirip ilk cuma namazını orada kıldı; yedi kilise daha camiye dönüştürüldü, Köprülü Ahmed Paşa, Merzifonlu Kara Mustafa Paşa, Musâhib Mustafa Paşa ve Vanî Efendi adına vakıflar kuruldu.\n\nKamaniçe dört sancaklı (Kamaniçe, Bar, Mejibuji, Yazlofça) yeni bir eyaletin merkezi oldu. Kołodziejczyk, kaleye 6000 kadar asker konduğunu, bunun yarısının yeniçeri olduğunu ve 200'ü aşkın topuyla Kamaniçe'nin Bağdat, Budin, Belgrad ve Kandiye ile birlikte imparatorluğun en önemli kaleleri arasına girdiğini yazar. Osmanlılar kaleyi ve onu şehre bağlayan köprüyü de onardı.\n\nŞaşırtıcı bir ayrıntı: 1681 tarihli tahrir defterine göre şehirde 568 hanede 3500 gayrimüslim yaşıyordu ve bu sayı Polonya dönemindekinden az değildi.\n\nTarihçiler bugün ne diyor? Lehliler kaleyi on yedi yıl uğraşıp savaşla geri alamadı; Kamaniçe ancak 1699'da Karlofça ile boşaltıldı. Şehrin Osmanlı geçmişinden bugüne iki minare ve bir minber kalmıştır.",
  kesinlik:"kesin",
  kaynak:"Dariusz Kołodziejczyk, \"Kamaniçe\", TDV İslâm Ansiklopedisi 24 (2001), s. 274-275, https://islamansiklopedisi.org.tr/kamanice",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"TDV 'Kamaniçe' maddesinin gövdesi ham HTML'den tam okundu; karttaki olgular onun anlatısı.",
  ic_not:"Kuşatma süresi: TDV 'Kamaniçe' dokuz gün, TDV 'Bucaş Antlaşması' on gün; Babnis (Wilanów) düşüş gününü 26 Ağustos verir — atlas 27 Ağustos (TDV). Mevcut Osmanlı kartı savas-kamanice-1672 fethi anlatır; bu kart eyalet dönemine odaklanır. Bağ yalnız Lehistan maddesine düşer; Kırım ve OLAYLAR_EK5 maddelerinde görünmez." },

{ id:"devlehistan-karlofca-podolya", tur:"sebep-sonuc", devlet:"lehistan",
  kisa:"Lehistan Karlofça'da Podolya'yı geri aldı. Peki kazandığı bu toprak, onu daha mı güvende bıraktı?",
  sebep:{ b:"On altı yıllık savaşta Kamaniçe'yi geri alamayan Lehistan, imparatorun Leh çıkarlarını gözeteceği güvencesiyle barışa razı oldu; Lehistan heyetiyle görüşmeler 22 Kasım 1698'de başladı", t:"1698-11-22" },
  sonuc:{ b:"Karlofça'daki on bir maddelik Osmanlı-Leh barışıyla Osmanlı Podolya'yı ve Kamaniçe'yi boşalttı, Ukrayna'daki Kazak hatmanlığını kaldırdı", t:"1699-01-26" },
  bag:"Podolya'nın dönüşü, Lehistan'ı Osmanlı ile Rusya-Avusturya arasındaki tampon konumundan çıkaran sürecin parçası oldu.",
  metin:"Viyana'dan sonra Kutsal İttifak'a giren Lehistan, savaşın en çok hayal kırıklığı yaşayan ortaklarından biriydi. Kemal Beydilli'nin TDV'deki 'Polonya' maddesine göre Erdel, Eflak ve Boğdan'ı alıp Karadeniz'e uzanma planları kısa sürede çöktü; Podolya'daki Türk kalelerine saldırılar başarısız oldu ve Kamaniçe uzun kuşatmalara rağmen geri alınamadı.\n\nAbdülkadir Özcan'ın 'Karlofça' maddesi, 1698'de barış masası kurulurken Lehistan ve Rusya'nın aslında savaşın sürmesini istediğini yazar; Lehlerin tek hedefi Kamaniçe'ydi. İmparator Leopold görüşmelerde Leh çıkarlarının korunacağına söz verince Lehistan da barışa razı oldu. Leh heyetiyle görüşmeler 22 Kasım 1698'de başladı ve on bir maddelik bir barışla bitti.\n\nSonuç Lehistan için kâğıt üzerinde parlaktı: Osmanlı Podolya'yı ve Kamaniçe'yi boşaltıyor, Ukrayna'da kurduğu Kazak hatmanlığını kaldırıyor, Kırım akınlarının durdurulacağına güvence veriyordu. Karşılığında Boğdan'da Leh işgalindeki Suçava, Roman, Nemçe, Soroka ve Kampulek kalelerini geri alıyordu.\n\nTarihçiler bugün ne diyor? Beydilli'nin değerlendirmesi kazancın ötesine bakar: Osmanlı, Lehistan'ın Alman ve Rus dünyası arasında kimsenin yanında olmayan bir tampon devlet olarak ayakta kalmasını gözeten güçtü. Bu gücün bölgeden geri itilmesi Avusturya'nın ve Rusya'nın yükselişini hızlandırdı ve Lehistan'ın kaderi için felaketli sonuçlar doğurdu.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1699-01-26|Podolya, Kamaniçe"],
  kaynak:"Abdülkadir Özcan, \"Karlofça\" (Karlofça Antlaşması), TDV İslâm Ansiklopedisi 24 (2001), s. 504-507, https://islamansiklopedisi.org.tr/karlofca · Kemal Beydilli, \"Polonya\" (II. Tarih), TDV İslâm Ansiklopedisi 34 (2007), s. 309-317, https://islamansiklopedisi.org.tr/polonya",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"İki TDV maddesinin ilgili bölümleri (Karlofça Antlaşması bölümü ve Polonya II. Tarih) tam okundu.",
  ic_not:"Kale adları TDV yazımıyla (Suçeva/Suczawa, Roman, Nemçe/Njamtzo, Soroka, Kampulek); 'Kampulek'in bugünkü karşılığı yorumlanmadı. Mevcut karsi-karlofca-1699 kartı Habsburg/Venedik/Lehistan memnuniyetsizliğini anlatır; bu kart Leh kazancı ve 'tampon' tezine odaklanır. Lehistan barışının imza günü okunan kaynakta ayrıca verilmiyor; bağ 1699-01-26 Lehistan maddesine. Bağ 16 maddelik günde yalnız KRONOLOJI_LEHISTAN maddesine düşer." },

{ id:"devlehistan-edirne-1713-ukrayna", tur:"sebep-sonuc", devlet:"lehistan",
  kisa:"Prut'ta çarı kıstıran Osmanlı, iki yıl sonra Edirne'de Lehistan'ın kapısını Rus askerine niçin araladı?",
  sebep:{ b:"Prut'ta yenilen Çar Petro, Lehistan'daki Rus kuvvetlerini çekme sözünü tutmadı; Osmanlı 1713 ve 1714'te savaş hazırlığına girişti", t:"1711-07-21" },
  sonuc:{ b:"Edirne antlaşmaları (13 Haziran 1713, 20 Ağustos 1714): Rusya taahhüdünü yerine getirdi, Osmanlı ise Leh Ukraynası üzerindeki haklarından vazgeçip Rus askerinin davet hâlinde Lehistan'a girebileceğini kabul etti", t:"1713-06-24" },
  bag:"Bu madde 1720'de Rusya'ya, kral seçimi tehlikeye girerse Lehistan'a asker sokma hakkı verecek biçimde genişletildi; Lehistan'daki Rus vesayetinin hukuki zemini böyle kuruldu.",
  metin:"1709'da Poltava'da yenilen İsveç kralı XII. Karl Osmanlı topraklarına sığındı; bir süre sonra onun Lehistan tahtına oturttuğu Stanisław Leszczyński de aynı yolu tuttu. Kemal Beydilli'nin TDV'deki 'Polonya' maddesine göre Çar Petro'nun desteğiyle tahta dönen II. August sayesinde Lehistan artık bütünüyle Rus nüfuzuna girmişti ve İstanbul bunu dikkatle izliyordu.\n\nTemmuz 1711'de Prut'ta Rus ordusu Osmanlı karşısında yenildi. Yapılan antlaşma, Lehistan'daki Rus kuvvetlerinin geri çekilmesini de gündeme getirdi. Çar sözünü tutmayınca Osmanlı 1713'te ve 1714'te savaş hazırlıklarına girişti ve sonunda Rusya taahhüdünü yerine getirmek zorunda kaldı.\n\nAma bedel beklenmedik yerden ödendi. Beydilli'ye göre 13 Haziran 1713 ve 20 Ağustos 1714'te Edirne'de yapılan antlaşmalarla Osmanlı, Leh Ukraynası üzerindeki haklarından tamamen vazgeçti ve Rus askerinin davet edildiği takdirde Lehistan'a girebileceğini kabul etti. 1720'de bu madde daha da genişledi: yabancı bir devlet Leh kral seçimini tehlikeye sokarsa Rusya Lehistan'a asker sokup orada konuşlandırabilecekti.\n\nTarihçiler bugün ne diyor? Beydilli bu yılları Lehistan'ın tahribat dönemi olarak anlatır: nüfus 1702'de 8 milyondan 1714'te 6 milyona düştü, Ukrayna Kiev'le birlikte Rusların eline geçti ve bölgedeki Kazaklar da Rus hâkimiyetini tercih etmeye başladı. Prut'taki zafer, Lehistan meselesinde Osmanlı'ya kalıcı bir üstünlük getirmedi.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1713-06-24|Edirne Antlaşması"],
  kaynak:"Kemal Beydilli, \"Polonya\" (II. Tarih), TDV İslâm Ansiklopedisi 34 (2007), s. 309-317, https://islamansiklopedisi.org.tr/polonya",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"TDV 'Polonya' II. Tarih bölümü tam okundu; karttaki olgular onun anlatısı.",
  ic_not:"KRONOLOJİ UYUŞMAZLIĞI: Beydilli Edirne antlaşmasını 13 Haziran 1713 verir; atlas OLAYLAR_EK5 'Rusya ile Edirne Antlaşması' 1713-06-24. Fark okunan kaynakta çözülmedi (KONU.md §3); sonuc.t atlas gününe yazıldı, metinde TDV günü. 1714 antlaşması için atlas maddesi yok. Bağ Osmanlı maddesine (OLAYLAR_EK5) düşer — Lehistan evreninde 1713 maddesi yok; aynı gündeki 'Hotin'in Boğdan'dan koparılması' maddesinde görünmez." },

{ id:"devlehistan-sobieski-kamanice-alamadi", tur:"tartisma", devlet:"lehistan",
  baslik:"Viyana'nın kurtarıcısı Kamaniçe'yi neden geri alamadı?",
  kisa:"1683'te Avrupa'nın en ünlü komutanı olan Sobieski, öldüğünde kendi ülkesinin elinden alınmış kalesini hâlâ geri alamamıştı. Zafer ile hayal kırıklığı aynı saltanata nasıl sığdı?",
  metin:"Viyana'dan sonra Lehistan savaşı bırakmadı. Kemal Beydilli'nin TDV'deki 'Polonya' maddesine göre Lehistan Mart 1684'te Avusturya, Venedik ve papalığın kurduğu Kutsal İttifak'a katıldı; 1686'da Rusya da ittifaka girdi. Sobieski'nin hedefi büyüktü: Erdel, Eflak ve Boğdan'ı ele geçirip Karadeniz kıyısına inmek.\n\nBeydilli bu hayallerin kısa sürede yıkıldığını yazar. Türk direnişi kırılamadı, Podolya'daki Osmanlı kalelerine yapılan saldırılar başarısız oldu. 1691 yazında kralın bizzat yönettiği harekât da beklenen sonucu vermedi ve bu, Lehistan'ın son saldırı harekâtı oldu. Bundan sonra inisiyatif Osmanlı'ya geçti: Osmanlı kuvvetleri Ukrayna içlerine indi ve 1695'te Lviv'i ciddi biçimde tehdit etti.\n\nAsıl yara Kamaniçe'ydi. Dariusz Kołodziejczyk'in TDV'deki 'Kamaniçe' maddesine göre Lehliler 1683'ten sonra on yedi yıl kaleyi geri almak için uğraştı. Kale 200'ü aşkın topuyla imparatorluğun en güçlü kaleleri arasındaydı. Beydilli de uzun kuşatmalara rağmen kalenin bir türlü alınamamasının cesaret kırdığını vurgular.\n\nTarihçiler bugün ne diyor? Beydilli'ye göre Sobieski iç siyasette de zorlandı, oğlu Jakub'u halef yapma planı başarısız oldu ve kral, Viyana'nın kurtarıcısı olarak kazandığı ünü kaybetmiş, Türk tehdidini ortadan kaldıramamış olarak 17 Haziran 1696'da öldü. Kamaniçe ancak 1699'da, savaşla değil Karlofça masasında Lehistan'a döndü.",
  bag:"Kamaniçe'nin savaşla değil barışla dönmesi, Lehistan'ın Kutsal İttifak içindeki zayıf konumunu gösterir.",
  kesinlik:"kesin",
  olay:["1684-01-01|Linz","1696-06-17|Sobieski"],
  kaynak:"Kemal Beydilli, \"Polonya\" (II. Tarih), TDV İslâm Ansiklopedisi 34 (2007), s. 309-317, https://islamansiklopedisi.org.tr/polonya · Dariusz Kołodziejczyk, \"Kamaniçe\", TDV İslâm Ansiklopedisi 24 (2001), s. 274-275, https://islamansiklopedisi.org.tr/kamanice",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"İki TDV maddesinin gövdesi tam okundu; karttaki olgular onların anlatısı.",
  ic_not:"Kutsal İttifak'a katılım: Beydilli 'Mart 1684' der; atlas maddesi 1684-01-01 '(Linz)'. Parti 01'de PSB atölyesi metninden 5 Mart 1684 not edilmişti (KONU.md §3/2). Lviv adı TDV'de 'Lemberg'. 1686 ve 1691 Boğdan seferlerinin ayrıntısı (Bukovina ormanları vb.) bu kartta yok; HUKUMDAR_LEHISTAN Sobieski kaydında PSB'ye dayanarak var." },

{ id:"devlehistan-otuz-bin-kafa", tur:"magazin", devlet:"lehistan",
  baslik:"'Otuz bin kafa, bir şapka': bir Osmanlı sadrazamının Lehistan teşhisi",
  kisa:"1743'te bir Osmanlı sadrazamı, komşu Lehistan'ın en küçük kararı bile alamayışını tek bir alaycı benzetmeyle anlattı. Benzetmenin arkasında bir meclis kuralı vardı.",
  metin:"XVIII. yüzyıl ortasında Lehistan, Osmanlı devlet adamlarının gözünde garip bir komşuydu. Kemal Beydilli'nin TDV'deki 'Polonya' maddesi, Sadrazam Hekimoğlu Ali Paşa'nın 1743'te Lehistan'ı, en küçük bir karar için 'otuz bin kafayı aynı şapka içine sokmak zorunda kalan bir devlet' diye nitelediğini Hammer'den aktarır. Beydilli bu sözü, anayasal düzenin ülkeyi felakete sürüklediğinin Osmanlı tarafından da görüldüğünün bir işareti olarak verir.\n\nBenzetme bir kurala dokunuyordu. Lehistan meclisinde karar, tek bir üyenin itirazıyla düşebiliyordu. Beydilli'ye göre XVII. yüzyıl ortasındaki felaketlerden sonra Kral II. Jan Kazimierz'in başını çektiği reformcular, tek kişinin olumsuz oyuyla karar alınmasını engelleyen bu oybirliği usulünün kaldırılmasını, çoğunluk sistemini ve güçlü bir merkezî idareyi istedi; soyluların direnişi yüzünden hiçbiri gerçekleşmedi.\n\nSadrazamın sözü bir de dönemin manzarasına düşer. Beydilli'nin anlattığına göre 1713-1763 arasında görece barış içindeki Lehistan'da nüfus artıyor, Sakson tarzı saraylar ve büyük bahçeler yapılıyor; ama siyasi gelecekten emin olmayan soylular kişisel çıkarı her şeyin üstünde tutuyordu.\n\nTarihçiler bugün ne diyor? Beydilli, 'altın hürriyet'lerine sıkı sıkıya sarılan soyluların imtiyazlarını ülkenin bütünlüğünden üstün tuttuğunu yazar. Hekimoğlu'nun şapkası, bu çıkmazın komşu başkentten görünen hâliydi. Lehistan bu kuralı ancak 3 Mayıs 1791 Anayasası'yla, çoğunluk oyuna geçerek bırakabildi.",
  not:"Söz 1743'e aittir; kart, meclisi tek oyla dağıtan ilk 'liberum veto' maddesine (1652) bağlıdır.",
  t:"1652-03-09",
  olay:["1652-03-09|Liberum veto"],
  kaynak:"Kemal Beydilli, \"Polonya\" (II. Tarih), TDV İslâm Ansiklopedisi 34 (2007), s. 309-317, https://islamansiklopedisi.org.tr/polonya (söz Hammer, GOR IV, 397'den aktarılır)",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"TDV 'Polonya' II. Tarih bölümü tam okundu. Sadrazamın sözü Beydilli'nin Hammer'den aktardığı biçimiyle verildi; Hammer'in kendisi okunmadı, kartta Hammer'den başka bir şey yok.",
  ic_not:"Beydilli 'liberum veto' terimini kullanmaz, kuralı tarif eder; 1652 ilk vakası (Siciński) okunan kaynakta yok, kartta yalnız bağ olarak var. Bağ yorumdur (söz 1743, madde 1652): Lehistan evreninde 1743 maddesi yok. 'Sakson tarzı saraylar' Beydilli'den. 1791 anayasasının çoğunluk oyuna geçtiği Beydilli'den ('Oylamalarda oy çoğunluğu esas alındı')." },

{ id:"devlehistan-tutora-1620", tur:"savas-hikayesi", devlet:"lehistan",
  baslik:"Ţuţora 1620: kazanılan bir bozgun, sonra paniğe dönen bir geri çekiliş",
  kisa:"Yetmiş üç yaşındaki hatman Boğdan'a bir gövde gösterisi için girdi, savaş beklemiyordu. Altı gece süren kusursuz bir geri çekilişin son saatinde ordusu kendi kendini dağıttı.",
  tarih_metin:"19 Eylül 1620 (Ţuţora muharebesi) · 29 Eylül–6 Ekim 1620 (geri çekiliş ve bozgun)",
  yer:"Ţuţora (Lehçe Cecora), Prut kıyısı, Boğdan; bozgun Mohyliv yakınında",
  taraflar:[
    { ad:"Lehistan-Litvanya Birliği", komutan:"Büyük hatman Stanisław Żółkiewski, sahra hatmanı Stanisław Koniecpolski", kuvvet:"10.000'den biraz fazla (Gawron)" },
    { ad:"Osmanlı Devleti ve Kırım", komutan:"İskender Paşa; Kırım kalgayı Devlet Giray; Kantemir Mirza", kuvvet:"yaklaşık 13.000 (Gawron: 8000 kadar Kırım Tatarı, 3000 kadar Kantemir Mirza'nın Akkirman Nogayları)" }
  ],
  oncesi:"Kazak akınları ve Tatar baskınları yüzünden ilişkiler gerilmişti. Boğdan voyvodası Gaspar Graziani Osmanlı'dan kopup Lehistan'a geçmek istiyordu. Rakiplerinin baskısı altındaki Żółkiewski, Graziani'yi Yaş'ta tutup Osmanlı'yı pazarlığa zorlayacak bir gösteri harekâtı planladı; ciddi bir direniş beklemediği için az askerle yola çıktı.",
  akis:"12 Eylül'de ordu Prut kıvrımında Ţuţora yakınında, çeyrek yüzyıl önce Jan Zamoyski'nin ordugâh kurduğu yerde durdu. İskender Paşa pazarlığa yanaşmadı. 19 Eylül sabahı başlayan muharebede Leh süvarisi önce merkezi geri itti; ama sağ kanattaki seyyar araba tabyası (tabor) fazla ilerleyip araya boşluk bıraktı, Devlet Giray'ın Tatarları bu boşluğa daldı, yanlarındaki Boğdanlılar taraf değiştirdi ve sağ kanat düştü. 20-21 Eylül gecesi hatmanların kaçtığı söylentisi panik yarattı, pek çok asker Prut'u geçerken yakalandı ya da boğuldu. Żółkiewski düzeni yeniden kurdu ve 29 Eylül'de ordu araba tabyası içinde geri çekilmeye başladı: gündüz konaklayıp gece yürüyerek altı günde yaklaşık 165 kilometre aştı, saldırıları püskürttü.",
  sonuc:"6 Ekim'de Mohyliv'e yaklaşık 10 kilometre kala ordugâhta yeniden kargaşa çıktı; bazı askerler atlarını alıp kaçmaya kalkınca tabya bozuldu, Tatarlar içeri girdi. Żółkiewski kaçmayı reddedip çarpışarak öldü; başı İstanbul'a gönderildi. Yalnız 2000 kadar kişi kurtuldu. Sahra hatmanı Koniecpolski, Samuel Korecki ve hatmanın oğlu esir düştü.",
  tartisma:"Przemysław Gawron, Ryszard Majewski'nin monografisine dayanarak sorumluluğu hem hatmanın yanlış varsayımlarına hem de ordunun düşük moraline ve disiplinsizliğine yükler; ama altı gecelik geri çekilişi ve hatmanın son anlardaki soğukkanlılığını takdirle anar. Asıl açık soru şudur: Osmanlı 1621'de Lehistan'a zaten savaş açacak mıydı? Öyleyse Żółkiewski'nin harekâtı bir ön alma darbesiydi; Majewski'nin düşündüğü gibi Osmanlı savaş niyetinde değilse hatman çok daha ağır yargılanmalıdır. Gawron bu sorunun tarih yazımında hâlâ kesin cevabı olmadığını vurgular.",
  kesinlik:"tartismali",
  olay:["1620-09-01|Ţuţora","1620-10-07|Cecora"],
  kaynak:"Przemysław Gawron, \"Wyprawa cecorska (wrzesień–październik 1620)\", Muzeum Pałacu Króla Jana III w Wilanowie, Pasaż wiedzy (27.12.2019), https://wilanow-palac.pl/pasaz-wiedzy/wyprawa-cecorska-wrzesien-pazdziernik-1620",
  teyit:"teyitli", yayin_adayi:true,
  ic_not_teyit:"Gawron yazısının tamamı ham HTML'den okundu (yaklaşık 20.000 karakterlik analitik metin; yazar akademisyen tarihçi, Majewski'nin Cecora 1620 monografisine dayanır). Dipnotsuz web yayını olduğu için Emre isterse 'teyitsiz'e çekilebilir; olgular yazının kendi anlatısı. Majewski'nin monografisi okunmadı.",
  ic_not:"KRONOLOJİ UYUŞMAZLIĞI: atlas 1620-10-07 'Cecora bozgunu — Hatman Żółkiewski öldürüldü'; Gawron bozgunu ve ölümü 6 Ekim'e koyar (PSB atölyesi de 6 Ekim; KONU.md §3/1). Asıl muharebe 19 Eylül'dür; atlasta bu gün için madde yok. Kayıp: Gawron Majewski'ye dayanarak 19 Eylül'de 2500-3000 kayıp verir; kartta yazılmadı. 'Akkirman Nogayları' = Gawron'un 'orda białogrodzka'sı. Parti 01'deki Żółkiewski'nin başı kartıyla aynı güne bağlı; bu kart muharebeyi anlatır." },

{ id:"devlehistan-michal-kamanice-1672", tur:"tartisma", devlet:"lehistan",
  baslik:"Kamaniçe'yi kral ile hatmanın kavgası mı kaybettirdi?",
  kisa:"1672'de Osmanlı ordusu Dinyester'e yürürken Varşova'da meclisler dağıtılıyor, kral ile başkomutan birbirine güvenmiyordu. Bir kalenin düşüşünde iç siyasetin payı ne kadardı?",
  metin:"Haziran 1669'da Lehistan soyluları yabancı adayları reddedip 'yerli' bir kral seçti: Michał Korybut Wiśniowiecki. Kemal Beydilli'nin TDV'deki 'Polonya' maddesine göre bu, yabancı adaylara iltifat edilmeden yerli biri üzerinde uzlaşılan ilk seçimdi. Yeni kral imparator I. Leopold'ün kız kardeşiyle evlenip Habsburglara yaklaştı; devletin en üst askerî makamındaki Jan Sobieski'nin de içinde olduğu Fransız taraftarları kendilerini dışlanmış hissetti.\n\nWilanów Sarayı Müzesi'nden Jarosław Dumanowski, muhalefetin krala yönelik sert alaylarını anlatır: primas Prażmowski, hatman Sobieski ve Jan Wielopolski kralın peruğu ve Batı tarzı giyimiyle açıkça dalga geçiyordu. Maria Babnis ise savaş yılının tablosunu çizer: Osmanlı Ocak 1672'de savaş ilan etmişti, ama kral yanlıları iki meclisi dağıttı; Sobieski ancak 16 Temmuz'da güneye yürüyebildi ve Babnis'e göre kral, siyasi rakibine güvenmediği için tehdit altındaki bölgeden bazı birlikleri geri çağırdı.\n\nKamaniçe Ağustos sonunda düştü, Lviv fidyeyle kurtuldu ve Ekim'de Bucaş'ta ağır bir barış imzalandı.\n\nTarihçiler bugün ne diyor? Beydilli asıl sebebi dışarıda görür: Kandiye'yi alıp elini serbest bırakan Osmanlı, Kazak bölgesini denetlemek için Podolya'yı hedeflemişti. Babnis'in anlatısı ise içerideki felci öne çıkarır. Okunan kaynaklar iki açıklamayı yan yana koymaya izin verir, ama iç çekişmenin sonuca ne kadar etki ettiğini ölçmez.",
  bag:"Bucaş'ın ağır şartları, ertesi yıl meclisin antlaşmayı reddetmesine ve 1673 Hotin seferine yol açtı.",
  kesinlik:"tartismali",
  olay:["1672-08-27|Kamaniçe düştü","1672-10-18|haraç"],
  kaynak:"Kemal Beydilli, \"Polonya\" (II. Tarih), TDV İslâm Ansiklopedisi 34 (2007), s. 309-317, https://islamansiklopedisi.org.tr/polonya · Jarosław Dumanowski, \"Król narodowy i francuski hetman\", Muzeum Pałacu Króla Jana III w Wilanowie, Pasaż wiedzy (07.02.2009), https://wilanow-palac.pl/pasaz-wiedzy/krol-narodowy-i-francuski-hetman · Maria Babnis, \"Niefortunny wybór\", aynı yer (21.07.2010), https://wilanow-palac.pl/pasaz-wiedzy/niefortunny-wybor",
  teyit:"teyitsiz", yayin_adayi:false,
  ic_not_teyit:"TEYİTSİZ: kartın tezini taşıyan iki olgu (meclislerin kral yanlılarınca dağıtılması, kralın birlikleri geri çağırması) yalnız Babnis'in kısa, dipnotsuz popüler müze yazısına dayanıyor; Babnis bir yerde popüler tarihçi Jasienica'dan alıntı yapıyor. Üç metin de tam okundu, ama akademik dayanak yalnız TDV ve o bu iki olguyu yazmıyor. Akademik bir Leh kaynağı (ör. PSB Michał Korybut maddesi) okunmadan yayın adayı değil.",
  ic_not:"Kamaniçe düşüş günü: Babnis 26 Ağustos, TDV (Kamaniçe, Bucaş) 27 Ağustos; kartta 'Ağustos sonu'. Seçim günü (19 Haziran 1669) Babnis'ten; atlasta madde yok (KONU.md §3)." }

];
