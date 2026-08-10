// Osmanlı padişahları — saltanat aralıkları (YYYY-AA hassasiyetinde, ay yaklaşık)
// Portre görseli: assets/portreler/<id>.jpg (yoksa baş harfli rozet gösterilir)
window.PADISAHLAR = [
  { id: "osman1",      ad: "Osman Gazi (I. Osman)",        from: "1299-01", to: "1326-04",
    dogum:"1257 (dolayı, kesin değil)",
    olum:"1324-08-01",
    olum_yer:"Bursa yakını",
    olum_sebep:"hastalık (nikris/gut, Osmanlı rivayetine göre)",
    baba:"Ertuğrul Gazi",
    tahta:"1299 (dolayı)",
    saltanat_yil:27,
    lakap:["Gazi"],
    esler:["Mal Hatun (Şeyh Edebâli'nin kızı)"],
    cocuk:{oglan:2},
    ovgu:"1302'de Bapheus zaferiyle bölgesel bir güç hâline geldi ve bu "
    + "zafer Osmanlı hanedanının 'kuruluş tarihi' sayılır; küçük bir "
    + "uc beyliğini, oğlu Orhan'ın devralacağı kalıcı bir devlete "
    + "dönüştürdü.",
    yergi:"Bulunamadı — kaynak azlığı yüzünden kişisel eleştiri/yergi bu "
    + "döneme dair neredeyse hiç aktarılmamış; TDV maddesi de bir "
    + "değerlendirme sunmuyor.",
    tartisma:"Kuruluş dönemi TDV'nin kendi ifadesiyle kaynak "
    + "sıkıntılıdır: kronikler arasında soy kütükleri bile "
    + "tutarsızdır, kesin tarihler tartışmalıdır. 'Osman'ın rüyası' "
    + "anlatısı TARİHSEL OLARAK ŞÜPHELİ görülür — çağdaş Bizanslı "
    + "tarihçi Pachymeres onu yalnız atılgan bir önder olarak tanıtır, "
    + "rüyadan söz etmez.",
    tarihciler:"Klasik Osmanlı kroniği kuruluşu efsanevi bir anlatıyla "
    + "(rüya, Edebâli'nin desteği) süsler; modern araştırmalar bu "
    + "anlatıları çağdaş kaynaklarla (Pachymeres) karşılaştırıp "
    + "güvenilirliklerini sorgular.",
    kaynak:"TDV: osman-i" },
  { id: "orhan",       ad: "Orhan Gazi",                   from: "1326-04", to: "1362-03",
    dogum:"1281 dolayı (TDV'de müstakil madde yok, tarih akademik icmâ)",
    dogum_yer:"Söğüt",
    olum:"1362-03-01",
    olum_yer:"Bursa",
    olum_sebep:"bulunamadı — kaynaklarda yaşlılıkla vefat dışında ayrıntı yok",
    baba:"Osman Gazi",
    anne:"Mal Hatun",
    tahta:"1326-04 (Bursa'nın fethiyle örtüşür)",
    saltanat_yil:36,
    lakap:["Gazi"],
    esler:["Nilüfer Hatun (Bizanslı, Murad I'in annesi)","Theodora (Bizans prensesi, siyasi evlilik)"],
    cocuk:{oglan:5},
    skandal:"bulunamadı — kaynaklar bu denli erken dönem için kişisel "
    + "skandal değil kurumsal genişleme kaydediyor.",
    ovgu:"Bursa'yı (1326) ve İznik'i (1331) fethederek beyliği devlete "
    + "dönüştürdü; ilk divan teşkilatını, ilk gümüş akçeyi ve ilk Osmanlı "
    + "külliyesini (Bursa) kurdu; Rumeli'ye ilk Osmanlı ayak basışı "
    + "(Çimpe Kalesi, 1352) onun döneminde oldu.",
    yergi:"bulunamadı — TDV'nin türbe/câmi maddelerinde eleştirel bir "
    + "değerlendirme yok, dönem kaynaklarının azlığı bunu zaten sınırlıyor.",
    tartisma:"Doğum tarihi kesin değil (TDV'de müstakil madde bulunmadığı "
    + "için akademik icmâya dayanıyor); saltanatının başlangıcı da "
    + "Bursa'nın fethiyle (1326) mi yoksa babasının 1324'teki vefatıyla mı "
    + "başladığı kaynaklarda net ayrışmıyor.",
    tarihciler:"Erken dönem kaynak kıtlığı yüzünden Orhan Gazi genelde "
    + "'kurumsallaşmanın mimarı' olarak özetlenir; modern araştırmalar "
    + "onu babasının fetih hamlesini DEVLETE çeviren isim sayar.",
    kaynak:"TDV: orhan-gazi-turbesi, orhan-gazi-camii-ve-imareti" },
  { id: "murad1",      ad: "I. Murad (Hüdavendigâr)",      from: "1362-03", to: "1389-06",
    dogum:"1326",
    dogum_yer:"Bursa",
    olum:"1389-06-15",
    olum_yer:"Kosova Ovası",
    olum_sebep:"suikast",
    baba:"Orhan Bey",
    anne:"Nilüfer Hatun",
    tahta:"1362-03-01",
    saltanat_yil:27,
    lakap:["Hüdavendigâr","Gazi Hünkâr"],
    esler:["Gülçiçek Hatun"],
    cocuk:{oglan:4},
    skandal:"Ölümünün hemen ardından, tahta çıkan oğlu Yıldırım Bayezid, "
    + "kardeşi Yâkub Çelebi'yi aynı savaş alanında idam ettirdi — "
    + "Osmanlı'da kardeş katlinin ilk örneği.",
    ovgu:"Osmanlı kaynakları onu âdil, hayır sever ve ömrünü gazâya adamış "
    + "bir hükümdar olarak anar; Rumeli'nin büyük bölümünü fethedip "
    + "devleti bir uc beyliğinden imparatorluğa taşıdı.",
    yergi:"Bulunamadı — TDV maddesinde olumsuz bir değerlendirmeye "
    + "rastlanmadı; çağdaş Bizans kaynakları bile onu övgüyle anar.",
    tartisma:"Kosova'da suikastin tam nasıl gerçekleştiği belirsiz: "
    + "Gazânâme'ye göre Murad cesetler arasında dolaşırken saklanan "
    + "Miloš Kobilović tarafından hançerlendi, ama olayın savaş "
    + "sırasında mı sonrasında mı olduğu ve Miloš'un gerçek kimliği "
    + "kaynaklara göre değişir.",
    tarihciler:"Klasik anlatı onu gazi hükümdar arketipi sayar; modern "
    + "araştırmalar Rumeli'deki idarî-askerî kurumsallaşmayı (yeniçeri "
    + "ocağı, ilk sistemli tımar düzeni) onun dönemine bağlar.",
    kaynak:"TDV: murad-i" },
  { id: "bayezid1",    ad: "I. Bayezid (Yıldırım)",        from: "1389-06", to: "1402-07",
    dogum:"1354",
    olum:"1403-03-08",
    olum_yer:"Akşehir",
    olum_sebep:"esarette, doğal",
    baba:"I. Murad",
    anne:"Gülçiçek Hatun",
    lakap:["Yıldırım"],
    esler:["Sultan Hatun (Germiyanoğlu)","Olivera Despina (Sırp prensesi)"],
    cocuk:{oglan:6},
    ovgu:"Batı Anadolu beyliklerini hızla Osmanlı'ya bağladı, Selanik'i "
    + "aldı (1394), Niğbolu'da (1396) Haçlı ordusunu ağır bir yenilgiye "
    + "uğrattı ve İstanbul'u yıllarca kuşatarak devleti Balkanlar'ın "
    + "hâkim gücü hâline getirdi.",
    yergi:"Sert mizacıyla anılır; kardeşi Yakub'u iç çatışmayı önlemek "
    + "için idam ettirdi. Aşırı hızlı ve saldırgan genişlemesi "
    + "çevresindeki beyleri Timur'a sığınmaya itti — bu da devletin "
    + "neredeyse sonunu getiren Ankara bozgununu hazırladı.",
    tartisma:"TDV maddesi Ankara yenilgisinin sebebini derinlemesine "
    + "açıklamıyor, yalnız bazı Anadolu beylerinin Timur'a sığındığını "
    + "belirtiyor. Ölümü de tartışmalı: TDV 'esarette doğal sebeple' "
    + "der, ama halk arasında yaygın zehirlenme/intihar rivayeti "
    + "maddede YOK — ikisi karıştırılmamalı.",
    tarihciler:"Klasik anlatı Ankara'yı Bayezid'in kendi aşırı "
    + "genişlemesine bağlar; bazı değerlendirmeler Timur'un "
    + "askerî-siyasi üstünlüğünü (beyleri kendi safına çekmesini) öne "
    + "çıkarır.",
    kaynak:"TDV: bayezid-i" },
  { id: "fetret",      ad: "Fetret Devri (taht mücadelesi)", from: "1402-07", to: "1413-07", ozel: true },
  { id: "mehmed1",     ad: "I. Mehmed (Çelebi)",           from: "1413-07", to: "1421-05",
    dogum:"788 (1386) veya 789 (1387) — TDV iki rivayeti de veriyor",
    dogum_yer:"bulunamadı — TDV maddesi doğum yeri belirtmiyor",
    olum:"1421-06-25",
    olum_yer:"Edirne",
    olum_sebep:"hastalık (son yılında hastalanmıştı, doğal ölüm)",
    baba:"I. Bayezid (Yıldırım)",
    anne:"Devlet Hatun (câriye)",
    tahta:"1413-07-05 (Mûsâ Çelebi'yi yenip Edirne'de tek hükümdar oldu; "
    + "1402'den beri Anadolu'da Tokat-Amasya-Bursa'ya hâkimdi)",
    saltanat_yil:8,
    lakap:["Çelebi","Kirişçi (Yunanca 'genç efendi'den)"],
    esler:"bulunamadı — TDV maddesinde eş adı geçmiyor, yalnız çocukları sayılıyor",
    cocuk:{oglan:6,kiz:7},
    skandal:"Kardeşi Mûsâ Çelebi'yi Fetret'in son safhasında bertaraf etti; "
    + "yeğeni Orhan'ı (rakip taht iddiacısı) kör ettirip zindana attırdı; "
    + "muhalif Şeyh Bedreddin'i yakalatıp Serez'de idam ettirdi.",
    ovgu:"Fetret Devri'ni bitirip Osmanlı Devleti'ni Anadolu ve Rumeli'de "
    + "yeniden birleştirdi (1413); Bizans ve Balkan vasallarıyla barışı "
    + "sağladı, tımar-tahrir sistemini yeniden kurumsallaştırdı; Bursa'da "
    + "Yeşil Cami külliyesini, Edirne'de Eski Cami'yi tamamlattı.",
    yergi:"Tahtı ele geçirme sürecinde kardeşi Îsâ Çelebi'yi yakalatıp "
    + "öldürttü; yeğeni Orhan'ı kör ettirdi; eski kazasker ve önemli bir "
    + "tasavvuf hareketinin öncüsü olan Şeyh Bedreddin'i idam ettirdi — "
    + "TDV bunu doğrudan kaydeder.",
    tartisma:"Şeyh Bedreddin isyanının niteliği tartışmalıdır: dinî-"
    + "toplumsal bir ihtilâl hareketi mi, yoksa taht rakipliği mi olduğu "
    + "tarihçiler arasında tartışılır. Ayrıca kardeşi Mustafa'nın gerçek "
    + "mi yoksa 'Düzmece' mi olduğu iddiası da (İA maddesinde 'Mustafa "
    + "Çelebi, Düzme' başlığıyla geçer) dönemin siyasi propagandasının "
    + "parçasıdır — TDV bu şüpheyi doğrudan aktarır.",
    tarihciler:"Madde müellifi Halil İnalcık onu Fetret'i bitirip devleti "
    + "yeniden birleştiren hükümdar olarak sunar; modern araştırmalar bu "
    + "dönemi basit bir toparlanma değil, Osmanlı merkezî kurumlarının "
    + "(tımar, tahrir) yeniden inşası olarak okur.",
    kaynak:"TDV: mehmed-i" },
  { id: "murad2",      ad: "II. Murad",                    from: "1421-06", to: "1444-08",
    dogum:"1404-06 dolayı",
    dogum_yer:"Amasya",
    olum:"1451-02-03",
    olum_yer:"Edirne",
    olum_sebep:"doğal (48 yaşında, oğlu II. Mehmed'in düğününden kısa süre sonra)",
    baba:"I. Mehmed (Çelebi)",
    anne:"cariye (bazı kaynaklarda Şehzade Hatun)",
    tahta:"1421-06-25 (ilk saltanat); 1446-05 (ikinci saltanat)",
    saltanat_yil:28,
    lakap:"bulunamadı — TDV maddesinde 'Hüdavendigâr' (dedesi I. Murad'ın "
    + "lakabı) dışında kendine özgü bir lakap zikredilmiyor",
    esler:["Hatice Halime Hatun (İsfendiyaroğlu)","Mara Branković (Sırp "
    + "prensesi, 1435 — siyasi evlilik, kaynaklara göre gerdek yapılmadı)",
    "Hüma Hatun (II. Mehmed'in annesi)"],
    cocuk:{oglan:"en az 4 (Mehmed, Alaeddin Ali, Ahmed, Hasan — sonuncu ikisi çocuk yaşta öldü)",kiz:3},
    skandal:"1444'te oğlu II. Mehmed lehine tahttan çekildi ama Varna "
    + "bunalımı ve yeniçeri ayaklanması üzerine 1446'da genç oğlunu "
    + "tahttan indirip yeniden tahta çıktı — Osmanlı tarihinde nadir "
    + "görülen bir çift-el-değiştirme.",
    ovgu:"Selanik'i (1430) fethetti, Varna'da (1444) haçlı ordusunu "
    + "bozguna uğratarak Balkanlar'daki Osmanlı hâkimiyetini kalıcı "
    + "kıldı, Üç Şerefeli Camii ve Muradiye külliyelerini yaptırdı.",
    yergi:"Eğlence ve şaraba düşkünlüğü, güç dönemlerde kararlılığını "
    + "zayıflattığı çağdaş kaynaklarca not edilir; 1444 çekilme kararı "
    + "devlete iki yıllık bir yönetim krizi açtı.",
    tartisma:"1444 tahttan çekilişinin gerçek sebebi — gönüllü bir "
    + "manevî yorgunluk mu, yoksa saray içi hesaplaşmanın sonucu mu — "
    + "kaynaklar arasında net değil.",
    tarihciler:"Klasik anlatı onu Varna zaferiyle 'Balkanlar'ı kurtaran' "
    + "hükümdar sayar; modern araştırmalar çift-saltanat düzenini erken "
    + "Osmanlı veraset sisteminin esnekliğine örnek gösterir.",
    kaynak:"TDV: murad-ii" },
  { id: "mehmed2",     ad: "II. Mehmed (1. saltanatı)",    from: "1444-08", to: "1446-09",
    dogum:"1432-03-30",
    dogum_yer:"Edirne",
    olum:"1481-05-03",
    olum_yer:"Hünkârçayırı, Gebze yakını",
    olum_sebep:"sefer yolunda ani ölüm (nikris/gut; zehirlenme iddiası TDV'de doğrulanmadı)",
    baba:"II. Murad",
    anne:"Hüma Hatun",
    tahta:"1444-08 (babası II. Murad tahttan çekilip onu 'kaymakam ederek' "
    + "12 yaşında tahta oturttu; henüz 'Fâtih' değil, resmî unvanı "
    + "'Mehmed Çelebi Sultan'dı)",
    saltanat_yil:2,
    lakap:"bulunamadı — 'Fâtih' lakabını 1453 fetihten SONRA kazandı, bu "
    + "dönemde henüz kullanılmıyordu",
    esler:"yok — bu dönemde henüz evli değildi (Sitti Hatun ile evliliği "
    + "Kasım-Aralık 1450'de, ikinci saltanatından hemen önce)",
    cocuk:"yok — bu dönemde çocuğu yoktu",
    skandal:"12 yaşındaki padişah devleti fiilen yönetemedi: Edirne'de "
    + "kanlı bir Hurûfî ayaklanması (Eylül 1444) ve ardından büyük bir "
    + "yeniçeri isyanı patlak verdi, gerçek iktidar vezîriâzam Çandarlı "
    + "Halil Paşa'nın elindeydi. Bu çöküş babası II. Murad'ı 1446'da "
    + "tahta geri dönmeye zorladı — Osmanlı veraset tarihinde ender "
    + "görülen bir 'geçici tahttan indirme'.",
    ovgu:"Kısa ve buhranlı geçse de bu iki yıl genç sultanın kişiliğinde "
    + "kalıcı iz bıraktı: Çandarlı Halil Paşa'nın nüfuzunu kırma, "
    + "yeniçerileri hizaya getirme ve İstanbul'u fethetme kararlılığı bu "
    + "dönemde zihninde yerleşti. Ege'de Venedik'e ait adalara karşı ilk "
    + "seferler (1446-1449) onun kontrolündeki bölgelerden yürütüldü.",
    yergi:"Tecrübesizliği yüzünden devlet büyük bir iç bunalıma sürüklendi: "
    + "Balkanlar'da babasının kazandığı topraklar (Sırp despotluğu, Eflak "
    + "bağları) bu dönemde geri verildi veya gevşetildi; Anadolu'da "
    + "Karamanoğlu'na kaleler terkedildi; Arnavutluk'ta İskender Bey "
    + "isyan etti.",
    tartisma:"Altı yaşında Amasya valiliğine atandığı iddiası TDV "
    + "maddesinde 'şüpheli' olarak nitelenir. Bu ilk saltanatın gerçek "
    + "bir hükümdarlık mı yoksa Çandarlı'nın fiilen yönettiği göstermelik "
    + "bir naiplik mi olduğu da aynı maddede tartışmaya açık bırakılır.",
    tarihciler:"Halil İnalcık (madde müellifi) bu iki yılı, sonraki 35 "
    + "yıllık Fâtih saltanatının psikolojik ve siyasi hazırlığı olarak "
    + "okur — İstanbul'u fethetme ve merkezî otoriteyi (Çandarlı'ya "
    + "karşı) güçlendirme kararı burada oluşmuştur.",
    kaynak:"TDV: mehmed-ii" },
  { id: "murad2",      ad: "II. Murad (2. saltanatı)",     from: "1446-09", to: "1451-02",
    dogum:"1404-06 dolayı",
    dogum_yer:"Amasya",
    olum:"1451-02-03",
    olum_yer:"Edirne",
    olum_sebep:"doğal (48 yaşında, oğlu II. Mehmed'in düğününden kısa süre sonra)",
    baba:"I. Mehmed (Çelebi)",
    anne:"cariye (bazı kaynaklarda Şehzade Hatun)",
    tahta:"1446-08 (Edirne'deki yeniçeri isyanı ve 12 yaşındaki oğlu II. "
    + "Mehmed'in devleti idare edemediği anlaşılınca, yeniçerilerin "
    + "desteğiyle ikinci kez tahta çıktı)",
    saltanat_yil:5,
    lakap:"bulunamadı — TDV maddesinde 'Hüdavendigâr' (dedesi I. Murad'ın "
    + "lakabı) dışında kendine özgü bir lakap zikredilmiyor",
    esler:["Hatice Halime Hatun (İsfendiyaroğlu)","Mara Branković (Sırp "
    + "prensesi, 1435 — siyasi evlilik, kaynaklara göre gerdek yapılmadı)",
    "Hüma Hatun (II. Mehmed'in annesi)"],
    cocuk:{oglan:"en az 4 (Mehmed, Alaeddin Ali, Ahmed, Hasan — sonuncu ikisi çocuk yaşta öldü)",kiz:3},
    skandal:"Oğlu II. Mehmed'i (henüz 14 yaşında) tahttan indirip yeniden "
    + "tahta çıkması, Osmanlı veraset düzeninde istikrarsız ve tekrarı "
    + "görülmemiş bir emsal oluşturdu.",
    ovgu:"1448'de II. Kosova Savaşı'nda János Hunyadi'nin büyük Haçlı "
    + "ordusunu kesin biçimde yenerek Osmanlı hâkimiyetini Balkanlar'da "
    + "sarsılmaz kıldı; 1449'da Eflak'ta Yergöğü'yü aldı; Sırp despotu ve "
    + "Bizans'la kurduğu barış, oğlunun 1453'teki İstanbul fethinin "
    + "zeminini hazırladı.",
    yergi:"İç huzuru sağlamak için sertlik gerekti: Edirne'deki yeniçeri "
    + "isyanını asker göndererek bastırdı; oğlunu tahttan indirip yeniden "
    + "tahta çıkması babasının kendi otoritesini de tartışmalı kıldı.",
    tartisma:"1446'daki dönüşün gerçek sebebi — devletin gerçekten "
    + "çökmekte olması mı, yoksa Çandarlı Halil Paşa'nın kendi nüfuzunu "
    + "korumak için krizi büyütmesi mi — kaynaklar arasında net değil.",
    tarihciler:"Modern tarihçilik 1448 Kosova zaferini Bizans'ın son "
    + "on yıllarını belirleyen dönüm noktası sayar: Osmanlı Balkan "
    + "hâkimiyeti burada 'sarsılmaz' hale geldi ve bu da 1453 fethinin "
    + "önünü açtı.",
    kaynak:"TDV: murad-ii" },
  { id: "mehmed2",     ad: "II. Mehmed (Fatih)",           from: "1451-02", to: "1481-05",
    dogum:"1432-03-30",
    dogum_yer:"Edirne",
    olum:"1481-05-03",
    olum_yer:"Hünkârçayırı, Gebze yakını",
    olum_sebep:"sefer yolunda ani ölüm (nikris/gut; zehirlenme iddiası TDV'de doğrulanmadı)",
    baba:"II. Murad",
    anne:"Hüma Hatun",
    tahta:"1451-02-18",
    saltanat_yil:30,
    lakap:["Fâtih"],
    esler:["Sitti Hatun","Gülbahar Hatun"],
    cocuk:{oglan:3},
    skandal:"Tahta çıkar çıkmaz beşikteki kardeşi Ahmed'i boğdurttu ve "
    + "'karındaşlarını nizâm-ı âlem için katletmek câizdir' hükmünü "
    + "kanunnâmesine yazdırdı — Osmanlı kardeş katlinin YASAL temeli.",
    ovgu:"İstanbul'u fethedip (1453) bin yıllık Bizans'ı sona erdirdi; "
    + "kapsamlı bir kanunnâme ile devleti kurumsallaştırdı, fethettiği "
    + "Rum, Ermeni ve Yahudi cemaatlerine kendi dinî liderlerini atayarak "
    + "yönetti; bilim ve sanatı himaye etti.",
    yergi:"Kardeş katlini YASAYA yazdıran kişi oydu — bu yalnız bir olay "
    + "değil, iki yüzyıl sürecek bir kurumun kurucusu olması demek. Ağır "
    + "vergi ve para ayarı düşürmeleriyle de eleştirildi; İtalya "
    + "(Otranto) seferi başarısız kaldı.",
    tartisma:"Ölüm sebebi TDV'de 'nikris hastalığı'na bağlanıyor; "
    + "zehirlenme iddiaları vardır ama birincil kaynaklarda "
    + "doğrulanmamıştır. Gayrimüslimlere yaklaşımı da tartışmalı: "
    + "patriklik atamaları hoşgörü mü, denetim aracı mı — tarihçiler "
    + "ayrışır.",
    tarihciler:"Klasik anlatı onu 'Cihan Padişahı' arketipi sayar; modern "
    + "araştırmalar kardeş katli kanununun sonraki iki yüzyıldaki "
    + "siyasi/insani bedelini (III. Mehmed'in 19 kardeşi gibi) onun "
    + "kararına bağlar.",
    kaynak:"TDV: mehmed-ii" },
  { id: "bayezid2",    ad: "II. Bayezid (Velî)",           from: "1481-05", to: "1512-04",
    dogum:"1448",
    dogum_yer:"Dimetoka",
    olum:"1512-05-26",
    olum_yer:"Dimetoka yolu",
    olum_sebep:"yolculuk sırasında öldü; zehirlenme ihtimali bazı "
    + "kaynaklarda tartışılır",
    baba:"II. Mehmed (Fatih)",
    anne:"Gülbahar Hatun",
    tahta:"1481-05-22",
    saltanat_yil:31,
    lakap:["Velî"],
    esler:["Ayşe Hatun (Dulkadıroğlu, I. Selim'in annesi)","Bülbül Hatun "
    + "(Şehzade Abdullah'ın annesi)","Şirin Hatun (Şehzade Alemşah'ın annesi)"],
    cocuk:{oglan:8,kiz:"en az 8"},
    skandal:"Kardeşi Cem Sultan'ın 14 yıl süren taht iddiası boyunca "
    + "Rodos şövalyelerine ve Papalığa Cem'i esaret altında tutmaları "
    + "için düzenli ödeme yaptı.",
    ovgu:"Âlim ve şairleri himaye etti, Kemal Reis'le birlikte donanmayı "
    + "Akdeniz'de ilk kez Venedik'e denk hâle getirdi, 1509 İstanbul "
    + "depreminin ('Küçük Kıyamet') ardından şehri imar ettirdi.",
    yergi:"Babası Fatih'in fetih temposunu sürdürmediği için "
    + "'duraklama' başlığı altında eleştirilir; Cem meselesinde Rodos "
    + "ve Papalığa yıllarca ödeme yapması pasiflikle suçlanmasına yol "
    + "açtı.",
    tartisma:"'Sakin ve sofu' bir hükümdar olarak tanınır ama bu "
    + "temkin, Şahkulu isyanı (1511) ve artan Safevî etkisiyle baş "
    + "edemeyip oğlu Selim'in yeniçeri desteğiyle iktidarı ele "
    + "geçirmesine zemin hazırladı — ihtiyat mı zaaf mı, tarihçiler "
    + "ayrışır.",
    tarihciler:"Klasik anlatı 'duraklama' çerçevesinde değerlendirir; "
    + "yeni araştırmalar mâlî ve denizcilik reformlarının Yavuz'un "
    + "seferlerini finanse ettiğini savunur.",
    kaynak:"TDV: bayezid-ii" },
  { id: "selim1",      ad: "I. Selim (Yavuz)",             from: "1512-04", to: "1520-09",
    dogum:"1470 (dolayı — TDV iki rivayet verir: 1467-68 ya da 1470)",
    dogum_yer:"Amasya",
    olum:"1520-09-21",
    olum_yer:"Çorlu",
    olum_sebep:"sırtında büyük ur (muhtemelen veba kaynaklı)",
    baba:"II. Bayezid",
    anne:"Ayşe Hatun (Dulkadıroğlu)",
    tahta:"1512-04-24",
    saltanat_yil:8,
    lakap:["Yavuz"],
    esler:["Hafsa Sultan"],
    cocuk:{oglan:1,kiz:4},
    skandal:"Babası II. Bayezid'i tahttan indirip kardeşleri Ahmed ve "
    + "Korkut'u, ardından yeğenlerini bertaraf ederek tahta tek başına "
    + "oturdu.",
    ovgu:"Sekiz yıllık kısa saltanatında Çaldıran'da (1514) Safevîleri "
    + "yenip Mısır-Suriye'yi (1516-17) fethetti, Mekke-Medine "
    + "hâdimliğini aldı; imparatorluğun sınırlarını ve kaynaklarını "
    + "büyük ölçüde genişletti.",
    yergi:"Tahta çıkışı babasına ve kardeşlerine karşı bir güç "
    + "mücadelesiyle oldu; sert mizacı yüzünden 'Yavuz' lakabını aldı, "
    + "devlet güvenliği için şiddeti tereddütsüz kullandığı anlatılır.",
    tartisma:"Kızılbaş kırımının '40.000' rakamı TDV'ye göre ABARTILI — "
    + "kovuşturulanlar çoğunlukla propagandacı ve tekke mensubuydu, "
    + "çoğu idam değil sürgün edildi. Halifeliği Memlük'ten devraldığı "
    + "iddiası da TDV'de güvenilir belgeye dayanmıyor, sonraki dönemin "
    + "bir anlatısı olabilir.",
    tarihciler:"Klasik anlatı onu kısa sürede en büyük toprak kazanan "
    + "padişah sayar; modern araştırmalar Kızılbaş politikasının "
    + "rakamlarını ve halifelik efsanesinin ne zaman/nasıl oluştuğunu "
    + "sorgulayarak popüler anlatıyı düzeltir.",
    kaynak:"TDV: selim-i" },
  { id: "suleyman1",   ad: "I. Süleyman (Kanunî)",         from: "1520-09", to: "1566-09",
    dogum:"1494-11-06",
    dogum_yer:"Trabzon",
    olum:"1566-09-07",
    olum_yer:"Zigetvar, Macaristan",
    olum_sebep:"kuşatma sırasında otağında, doğal",
    baba:"I. Selim (Yavuz)",
    anne:"Hafsa Sultan",
    tahta:"1520-09-30",
    saltanat_yil:46,
    lakap:["Kanunî","Muhteşem (Batı kaynaklarında)"],
    esler:["Mahidevran Hatun","Hürrem Sultan"],
    cocuk:{oglan:5,kiz:1},
    skandal:"Hürrem Sultan'ın nüfuzu ve Rüstem Paşa ile birlikte veraset "
    + "mücadelesini yönlendirdiği iddiası, oğlu Şehzade Mustafa'nın "
    + "1553'te idamıyla sonuçlanan krizin merkezinde anılır.",
    ovgu:"46 yıllık saltanatında 13 büyük sefer düzenledi, kapsamlı "
    + "kanunlarla adaleti kurumsallaştırdı ('Kanunî' lakabı buradan), "
    + "Süleymaniye Camii'ni yaptırdı; dönemi mimari ve sanatta bir altın "
    + "çağ sayılır.",
    yergi:"Oğulları Mustafa (1553) ve Bayezid'i (1562) idam ettirdi; "
    + "Hürrem Sultan ve Rüstem Paşa'nın sarayda aşırı nüfuz kazanması ve "
    + "bunun toplumsal gerilimi iktidarı zorlayacak dereceye taşıması "
    + "eleştirilir.",
    tartisma:"Mustafa'nın idamında Hürrem'in payı ne kadardı — çağdaş ve "
    + "sonraki kaynaklar arasında tartışma konusu; kimi doğrudan "
    + "komployla suçlar, kimi Mustafa'nın gerçek bir tehdit "
    + "oluşturduğunu savunur.",
    tarihciler:"Klasik anlatı onu imparatorluğun zirvesi sayar; modern "
    + "araştırmalar saltanatının son on yıllarındaki toplumsal gerilimi "
    + "(Mustafa krizi, taşra huzursuzluğu) 17. yüzyıl bunalımının erken "
    + "belirtisi olarak okur.",
    kaynak:"TDV: suleyman-i" },
  { id: "selim2",      ad: "II. Selim",                    from: "1566-09", to: "1574-12",
    dogum:"1524-05-30",
    dogum_yer:"Topkapı Sarayı, İstanbul",
    olum:"1574-12-13",
    olum_yer:"İstanbul",
    olum_sebep:"hamamda düşme sonrası inme, ardından ateş ve mide hastalığı",
    baba:"I. Süleyman (Kanunî)",
    anne:"Hürrem Sultan",
    tahta:"1566-09-24",
    saltanat_yil:8,
    esler:["Nurbanu Sultan"],
    ovgu:"İstanbul'da doğup büyüyen ilk tahta çıkan şehzadeydi; "
    + "döneminde Kıbrıs (1570-71) ve Tunus (1574) fethedildi, Sinan'a "
    + "Edirne'de Selimiye Camii'ni yaptırdı, su kemerleri ve köprülerle "
    + "imarı sürdürdü.",
    yergi:"Çağdaşları onu eğlenceye ve şaire/musikişinasa düşkün biri "
    + "olarak tasvir eder; babasından farklı olarak hiçbir sefere "
    + "bizzat katılmadı, devlet işlerini büyük ölçüde Sokullu Mehmed "
    + "Paşa'ya bıraktı.",
    tartisma:"Ölümü hamamda düşüp inme geçirmesi ve ardından gelen ateşli "
    + "hastalıkla açıklanıyor — TDV bu tıbbi seyri doğruluyor; ancak "
    + "düşüşün sarhoşlukla ilişkilendirilmesi (halk arasında yaygın "
    + "'Sarhoş Selim' anlatısı) TDV'nin kendi ifadesi değil, sonraki "
    + "yorumdur.",
    tarihciler:"Klasik anlatı onu 'zevke düşkün, zayıf' bir padişah "
    + "sayıp Sokullu'nun gölgesinde bırakır; bazı değerlendirmeler "
    + "devletin bu dönemde kurumsal istikrarını (Kıbrıs fethi, imar "
    + "faaliyeti) padişahın kişiliğinden bağımsız değerlendirir.",
    kaynak:"TDV: selim-ii" },
  { id: "murad3",      ad: "III. Murad",                   from: "1574-12", to: "1595-01",
    dogum:"1546-07-04",
    dogum_yer:"Bozdağ yaylağı (Manisa yakını)",
    olum:"1595-01-16",
    olum_yer:"İstanbul",
    olum_sebep:"soğuk algınlığı sonrası hastalık",
    baba:"II. Selim",
    anne:"Nurbânû Sultan (Venedikli, asıl adı Cecilia Baffo)",
    tahta:"1574-12-22",
    saltanat_yil:20,
    esler:["Safiye Sultan (hasekisi, III. Mehmed'in annesi)"],
    cocuk:{oglan:"en az 20 (kaynaklarda 49 çocuk rivayeti de var)"},
    skandal:"49 çocuğu ve yedi hamile cariyesi olduğu rivayet edilir — "
    + "haremde geçirdiği zamanın devlet işlerinden uzaklaşmasıyla "
    + "birlikte anılan bir ölçüsüzlük örneği olarak kaydedilir.",
    ovgu:"İngiltere ile ilk kapsamlı ticarî ve diplomatik ilişkiler onun "
    + "döneminde kuruldu; Koca Sinan Paşa gibi sadrazamlarla Habsburglara "
    + "karşı 'On Beş Yıl Savaşları'nı başlattı.",
    yergi:"Annesi Nurbânû ve eşi Safiye Sultan'ın devlet işlerindeki "
    + "nüfuzuna göz yumması, sık saray değişimi ve savaş yönetimindeki "
    + "ilgisizliği eleştirilir.",
    tartisma:"Çocuk sayısındaki rivayetler (20'den 49'a) kaynaklar "
    + "arasında tutarsız; tarihçiler kesin bir rakamda birleşmiyor.",
    tarihciler:"Klasik anlatı onu haremin devlet işlerine karıştığı "
    + "dönemin başlangıcı sayar ('kadınlar saltanatı'nın habercisi); "
    + "modern araştırmalar bunun tek başına onun kişisel zaafı değil, "
    + "büyüyen bürokrasinin yapısal bir sonucu olduğunu vurgular.",
    kaynak:"TDV: murad-iii" },
  { id: "mehmed3",     ad: "III. Mehmed",                  from: "1595-01", to: "1603-12",
    dogum:"1566-05-26",
    dogum_yer:"Manisa",
    olum:"1603-12-22",
    olum_yer:"İstanbul",
    olum_sebep:"mide rahatsızlığı / kalp krizi (kaynaklar netleşmiyor)",
    baba:"III. Murad",
    anne:"Safiye Sultan (Arnavut asıllı)",
    tahta:"1595-01-16",
    saltanat_yil:9,
    skandal:"Tahta çıkar çıkmaz on dokuz erkek kardeşini boğdurttu — "
    + "Osmanlı tarihinin en kalabalık kardeş katli; 1603'te de kendi "
    + "oğlu Şehzade Mahmud'u veraset korkusuyla idam ettirdi.",
    ovgu:"1596 Eğri seferini bizzat yönetti (Kanunî'den beri sefere "
    + "çıkan ilk padişah) ve Haçova Muharebesi'nde zor anda sahada kaldı.",
    yergi:"Annesi Safiye Sultan'ın devlet işlerindeki hâkimiyetine izin "
    + "verdi; kararsız ve kolay etki altına giren mizacı, Celâlî "
    + "isyanları ve ekonomik krizle boğuşan bir dönemde devleti "
    + "yönetmekte yetersiz kaldığı şeklinde eleştirildi.",
    tartisma:"On dokuz kardeşinin katli döneminde bile aşırı bulunup "
    + "halk arasında tepkiyle karşılandı — kardeş katlinin MEŞRULUĞUNUN "
    + "sorgulandığı ilk büyük kamuoyu tepkilerinden biri sayılır.",
    tarihciler:"Klasik anlatı onu 'zayıf ve kararsız' bir padişah sayar; "
    + "modern araştırmalar 19 kardeşin katlini kardeş-katli kurumunun "
    + "kendi mantığının vardığı uç nokta ve bu yüzden kurumun "
    + "sorgulanmaya başladığı dönüm noktası olarak okur.",
    kaynak:"TDV: mehmed-iii" },
  { id: "ahmed1",      ad: "I. Ahmed",                     from: "1603-12", to: "1617-11",
    dogum:"1590-04-28",
    dogum_yer:"Manisa",
    olum:"1617-11-22",
    olum_yer:"İstanbul",
    olum_sebep:"mide hastalığı, 28 yaşında",
    baba:"III. Mehmed",
    anne:"Handan Sultan",
    tahta:"1603-12-22",
    saltanat_yil:14,
    esler:["Kösem Sultan (Mahpeyker)","Mahfiruz Hatun"],
    ovgu:"Sultanahmet Camii ve külliyesini yaptırdı; kardeş katli "
    + "yerine 'ekberiyet' usulünü (hanedanın en yaşlı üyesinin tahta "
    + "geçmesi) ve kafes usulünü getirerek şehzadelerin idamını kalıcı "
    + "biçimde sona erdirdi.",
    yergi:"Saltanatı boyunca Celâlî isyanları Anadolu'yu harap etti, "
    + "köyler boşaldı, vergi geliri çöktü; Zsitvatorok Antlaşması "
    + "(1606) Habsburg'lardan alınan haracı kaldırıp padişahla "
    + "imparatoru eşit sayarak Osmanlı üstünlüğünü sona erdirdi.",
    tartisma:"Getirdiği kafes usulü kardeş katlini kaldırdı ama sonraki "
    + "padişahları tecrübesizlik ve tecritle zayıflattı — bir çözüm mü "
    + "yeni bir sorun mu, tarihçiler arasında tartışılır.",
    tarihciler:"Klasik anlatı onu ekberiyet/kafes reformuyla anar; "
    + "modern araştırmalar bu reformun kısa vadede kardeş katlini "
    + "bitirirken uzun vadede padişah otoritesini nasıl zayıflattığını "
    + "(I. Mustafa, İbrahim gibi tecrübesiz hükümdarlar) sorgular.",
    kaynak:"TDV: ahmed-i" },
  { id: "mustafa1",    ad: "I. Mustafa (1. saltanatı)",    from: "1617-11", to: "1618-02",
    dogum:"muhtemelen 1000 (1591-92), Manisa'da",
    dogum_yer:"Manisa",
    olum:"1639-01-20",
    olum_yer:"Topkapı Sarayı (kafeste, kapalı tutulduğu oda)",
    olum_sebep:"TDV'nin aktardığı çağdaş kayıt 'ecel-i tabîî' (doğal ölüm) "
    + "der; IV. Murad'ın (yeğeni) rolü olduğuna dair bir rivayet de vardır "
    + "ama TDV bunu doğrulamaz, yalnız aktarır.",
    baba:"III. Mehmed",
    anne:"Abaza asıllı bir câriye; adı TDV'de bilinmiyor",
    tahta:"1617-11-22",
    saltanat_yil:0.3,
    lakap:"bulunamadı — halk ve tekke çevreleri döneminde onu 'pâdişâh-ı "
    + "velî' diye anıyordu, ama bu resmî bir lakap değil, aklî durumuna "
    + "yüklenen dinî-mânevî bir yakıştırmaydı.",
    esler:"bulunamadı — TDV'de eş adı geçmiyor; bazı Batı kaynaklarına "
    + "göre kadınları yatağına hiç yaklaştırmadı.",
    cocuk:"yok — TDV: 'çocuğu olmamıştır'.",
    skandal:"Şeyhülislâm Hocazâde Esad Efendi ve kaymakam Sofu Mehmed "
    + "Paşa, geçerli veraset usulünün (baba-oğul) dışına çıkarak I. "
    + "Ahmed'in oğlu Osman dururken amcası Mustafa'yı tahta çıkardı — TDV "
    + "bunu 'mevcut saltanat sisteminde bir değişme' olarak niteler ve "
    + "şiddetle eleştirildiğini kaydeder. Kızlar Ağası'nın kendi çıkarı "
    + "için, Kösem Sultan'ın da kendi oğullarına yol açmak için bu kararı "
    + "desteklediği rivayet edilir.",
    ovgu:"Askerî teçhizatla yakından ilgilendi: Tophane'yi ve Tersane'yi "
    + "denetledi, 100 kadırga ve 100 firkateynin Karadeniz'e açılmasını "
    + "emretti; ulemâya, tekke şeyhlerine ve fakirlere ihsanlarda "
    + "bulundu.",
    yergi:"Aklî zafiyeti (TDV'nin ifadesiyle giderek artan 'cünun hali') "
    + "sebebiyle devleti yönetemedi; yanındaki altınları balıklara yem "
    + "diye atması, vezirlerin sarıklarını çekip başlarını açması gibi "
    + "tutarsız davranışları çağdaş tarihçilerce (Peçuylu, Kâtib Çelebi) "
    + "kaydedildi.",
    tartisma:"Tahttan indirilişinin gerekçesi kaynağa göre değişir: "
    + "Topçular Kâtibi 'kendi isteğiyle çekildi' derken Hasanbeyzâde ve "
    + "Peçuylu aklî zafiyetin arttığını açıkça yazar. Tahta çıkarılma "
    + "kararının 'ileride iyileşir' umuduna mı, yoksa Kızlar Ağası'nın "
    + "kişisel çıkarına mı dayandığı da net değildir.",
    tarihciler:"Madde müellifi Feridun Emecen bu kısa saltanatı veraset "
    + "usulünün ilk kez kardeşe kaydığı dönüm noktası olarak sunar; "
    + "modern araştırmalar bunu hanedanın soyunun tükenme kaygısını "
    + "(hânedan bekası) önceleyen yapısal bir dönüşüm olarak okur.",
    kaynak:"TDV: mustafa-i" },
  { id: "osman2",      ad: "II. Osman (Genç)",             from: "1618-02", to: "1622-05",
    dogum:"1604-11-03",
    dogum_yer:"İstanbul",
    olum:"1622-05-20",
    olum_yer:"Yedikule, İstanbul",
    olum_sebep:"isyancı yeniçeriler tarafından boğularak katledildi",
    baba:"I. Ahmed",
    anne:"Mahfiruz Hatun",
    tahta:"1618-02-26",
    saltanat_yil:4,
    ovgu:"14 yaşında tahta çıkıp yeniçeri ocağını ıslah etmeye ve "
    + "devlet yönetimini yeniden düzenlemeye girişti; ata biniciliği "
    + "ve silah kullanımında becerikliydi.",
    yergi:"Çağdaş kaynaklar tecrübesizliğini, sert mizacını ve "
    + "'hükümdarlara yakışan vakarı taşımadığını' vurgular — sıradan "
    + "kılıkla meyhanelere gittiği, bu yüzden otoritesini zedelediği "
    + "anlatılır.",
    tartisma:"Hac niyetiyle çıkmak istediği sefer isyanı tetikledi ve "
    + "isyancılar onu at üstünde ağır hakaretlerle dolaştırıp "
    + "Yedikule'de boğdu. Modern tarihçilik onu ROMANTİZE EDİLMİŞ bir "
    + "'reformcu şehit' anlatısından ayırıp, kontrolü yeniden ele "
    + "geçirmeye çalışan genç ve yalnız bir hükümdar olarak yeniden "
    + "değerlendiriyor.",
    tarihciler:"Klasik anlatı onu yeniçeri zulmüne kurban giden bir "
    + "reformcu sayar; modern araştırmalar bu romantize edilmiş imajı "
    + "sorgulayıp tecrübesizliğinin isyanı nasıl beslediğini vurgular.",
    kaynak:"TDV: osman-ii" },
  { id: "mustafa1",    ad: "I. Mustafa (2. saltanatı)",    from: "1622-05", to: "1623-09",
    dogum:"muhtemelen 1000 (1591-92), Manisa'da",
    dogum_yer:"Manisa",
    olum:"1639-01-20",
    olum_yer:"Topkapı Sarayı (kafeste, kapalı tutulduğu oda)",
    olum_sebep:"TDV'nin aktardığı çağdaş kayıt 'ecel-i tabîî' (doğal ölüm) "
    + "der; IV. Murad'ın (yeğeni) rolü olduğuna dair bir rivayet de vardır "
    + "ama TDV bunu doğrulamaz, yalnız aktarır.",
    baba:"III. Mehmed",
    anne:"Abaza asıllı bir câriye; adı TDV'de bilinmiyor",
    tahta:"1622-05-20 (yeniçeri ve sipahilerin, yeğeni II. Osman'ı "
    + "katlettiği isyanın ardından onu tekrar tahta çıkarmasıyla)",
    saltanat_yil:1.3,
    lakap:"bulunamadı — bkz. 1. saltanatı satırındaki not",
    esler:"bulunamadı — TDV'de eş adı geçmiyor",
    cocuk:"yok — TDV: 'çocuğu olmamıştır'.",
    skandal:"Yeğeni II. Osman'ın yeniçeriler tarafından katledilmesinin "
    + "('Genç Osman'ın Şehadeti') hemen ardından tahta çıkarıldı. Annesi "
    + "ve sadrazam Kara Dâvud Paşa, I. Ahmed'in oğulları Murad ve "
    + "İbrahim'i (rakip şehzadeler) öldürtüp Mustafa'yı rakipsiz bırakma "
    + "planı yaptı; plan sarayda engellendi ve Dâvud Paşa sonunda Osman "
    + "cinayetinin suçlusu ilân edilip idam edildi.",
    ovgu:"Somut bir icraatı yoktur; yalnız hanedanın itibarını göstermek "
    + "için gösterişli kıyafetlerle halka çıkarılması ve dinî törenlerde "
    + "(bayramlaşmada tahtında oturmayıp ayakta durması, 'Hulefâ-yi "
    + "Râşidîn âdetini ihya' diye yorumlandı) sembolik jestleri devrin "
    + "kaynaklarınca övgüyle anıldı.",
    yergi:"Saltanatı boyunca sadrazam tayinlerinde bile hiçbir tasarrufu "
    + "olmadı — devleti fiilen annesi (valide sultan, dönemin "
    + "kaynaklarında 'pâdişâh-ı ma'nevî' diye anılır) ve art arda değişen "
    + "sadrazamlar yönetti; bu dönemde ardı ardına isyanlar çıktı ve bir "
    + "camiye düzenlenen baskında (çoğu talebe) on dokuz kişi katledildi.",
    tartisma:"Padişah adına çıkan pek çok hatt-ı hümâyunun aslında kendisi "
    + "tarafından değil, hizmetindeki bir câriye (Senûber) tarafından "
    + "yazıldığı iddia edilir — 'padişahın iradesi' ile 'sarayın "
    + "yazdırdığı irade' arasındaki sınır bu dönemde tamamen "
    + "belirsizleşmiştir.",
    tarihciler:"Modern tarihçilik bu ikinci saltanatı doğrudan Mustafa'nın "
    + "değil, valide sultanın ve rakip sadrazamların iktidar "
    + "mücadelesinin bir sahnesi olarak okur; Gabriel Piterberg gibi "
    + "araştırmacılar dönemi Osmanlı tarih yazımının kendi meşruiyet "
    + "krizini nasıl işlediği bağlamında irdeler.",
    kaynak:"TDV: mustafa-i" },
  { id: "murad4",      ad: "IV. Murad",                    from: "1623-09", to: "1640-02",
    dogum:"1612-07-27",
    dogum_yer:"İstanbul",
    olum:"1640-02-08",
    olum_yer:"İstanbul",
    olum_sebep:"nikris (gut) ve sefer yorgunluğu komplikasyonları, 27 yaşında",
    baba:"I. Ahmed",
    anne:"Kösem Sultan",
    tahta:"1623-09-10",
    saltanat_yil:17,
    skandal:"Tütün, kahve ve içkiyi halka yasaklarken kendisi 'aşırı "
    + "içki düşkünü' olarak anılır — TDV bu çelişkiyi doğrudan kaydeder.",
    ovgu:"11 yaşında tahta çıktığı yılların otorite boşluğunu 20'li "
    + "yaşlarında sert bir disiplinle kapattı; Revan (1635) ve "
    + "Bağdat'ı (1638) fethetti, yeniçeri ocağını ıslah etti, devlette "
    + "merkezî otoriteyi yeniden tesis etti.",
    yergi:"Kardeşleri Bayezid, Süleyman ve Kasım'ı tahdit bahanesiyle "
    + "idam ettirdi; bir şeyhülislamı idam ettiren ilk padişahtı. "
    + "Tütün-kahve-içki yasağını, kendisi içki düşkünüyken, ölümle "
    + "cezalandıracak sertlikte uyguladı.",
    tartisma:"Sertliği tarihçiler arasında ikiye ayrılan bir konu: "
    + "kimileri keyfî şiddet sayar, kimileri o dönemin kaosunu bitiren "
    + "TEK etkili yöntem olduğunu, düzeni ve güvenliği getirdiğini "
    + "savunur — TDV ikisini de kaydeder, taraf tutmaz.",
    tarihciler:"Klasik anlatı onu güçlü iradeli, zeki ama aşırı sert bir "
    + "hükümdar sayar; modern değerlendirmeler yasaklarının kendi "
    + "alışkanlıklarıyla çelişkisini ve idamların ölçeğini eleştirel "
    + "biçimde ele alır.",
    kaynak:"TDV: murad-iv" },
  { id: "ibrahim",     ad: "Sultan İbrahim",               from: "1640-02", to: "1648-08",
    dogum:"1615-11-04",
    olum:"1648-08-08",
    olum_yer:"İstanbul",
    olum_sebep:"hal' sonrası idam",
    baba:"I. Ahmed",
    anne:"Kösem Sultan",
    tahta:"1640-02-09",
    saltanat_yil:8,
    esler:["Turhan Hatice Sultan"],
    ovgu:"Erken saltanat yılları Kemankeş Mustafa Paşa'nın "
    + "sadrazamlığında görece istikrarlıydı; kişisel mektupları devlet "
    + "işleriyle ilgilendiğini gösterir — sonradan yerleşen 'Deli "
    + "İbrahim' imajının aksine.",
    yergi:"Girit seferi (1645 sonrası) devlet kaynaklarını ağır "
    + "biçimde tüketti; 1645'ten sonra yönetimi Kösem Sultan, saray "
    + "görevlileri ve hocası Cinci Hüseyin Efendi'nin etkisine büyük "
    + "ölçüde bıraktı.",
    tartisma:"Akıl sağlığı tarihçiler arasında TARTIŞMALI: bazıları "
    + "gerçek bir ruhsal hastalık, bazıları geçici bir bunalım "
    + "olduğunu savunur. TDV, sonradan yaygınlaşan 'Deli İbrahim' "
    + "nitelemesinin kişisel yazışmalarıyla birebir örtüşmediğini "
    + "vurgular.",
    tarihciler:"Popüler anlatı onu akıl sağlığı bozuk, sarayın oyuncağı "
    + "bir padişah sayar; TDV'nin aktardığı belgeler devlet işleriyle "
    + "ilgilenen ama giderek yalnızlaşan bir hükümdar tablosu çiziyor.",
    kaynak:"TDV: ibrahim--padisah" },
  { id: "mehmed4",     ad: "IV. Mehmed (Avcı)",            from: "1648-08", to: "1687-11",
    dogum:"1642-01-02",
    dogum_yer:"İstanbul",
    olum:"1693-01-06",
    olum_yer:"Edirne (sürgün/gözaltı hayatı sırasında)",
    olum_sebep:"doğal",
    baba:"Sultan İbrahim",
    anne:"Hatice Turhan Sultan",
    tahta:"1648-08-08 (7 yaşında; babası İbrahim'in devlet ricâli ve "
    + "yeniçerilerin ittifakıyla öldürülmesinin hemen ardından)",
    saltanat_yil:39,
    lakap:["Avcı (av tutkusundan)"],
    esler:["Haseki Gülnûş Emetullah Sultan (II. Mustafa ve III. Ahmed'in annesi)"],
    cocuk:{oglan:"en az 2 (II. Mustafa, III. Ahmed sonradan padişah oldu)",kiz:"en az 1"},
    skandal:"Oğulları Mustafa ve Ahmed doğduktan sonra kardeşlerini "
    + "'nizâm-ı âlem için' öldürtmek istediği, fakat annesi Turhan "
    + "Sultan'ın buna engel olduğu rivayet edilir (Evliya Çelebi).",
    ovgu:"Sadrazamları Köprülü Mehmed Paşa ve oğlu Fâzıl Ahmed Paşa "
    + "döneminde (1656-1676) devlet toparlandı: 25 yıldır süren Girit "
    + "meselesi Kandiye'nin fethiyle (1669) kapandı, Uyvar alındı, "
    + "Avusturya ile Vasvár Antlaşması imzalandı. 1672 Kamaniçe "
    + "seferine bizzat katıldı, kılık değiştirip muhasaraya girdiği bile "
    + "rivayet edilir; tarihe meraklıydı, Hezarfen Hüseyin Efendi'den "
    + "ders aldı ve döneminin olaylarını sürekli kayda geçirtti.",
    yergi:"Av tutkusu yüzünden devlet işlerini ihmal etti, saltanatının "
    + "büyük bölümünü İstanbul'a uğramadan Edirne'de avlanarak geçirdi; "
    + "1683 Viyana bozgunundan sonraki dört yıl (annesinin ölümünün "
    + "ardından) Mora, Dalmaçya ve Atina'nın kaybedildiği bir 'felâket "
    + "dönemi' oldu, halkın ve din adamlarının eleştirilerine kulak "
    + "asmadı.",
    tartisma:"TDV maddesi av düşkünlüğünü ve ilgisizliğini yalnız "
    + "kişisel bir zaaf değil, 7 yaşında tahta çıkıp iyi eğitim "
    + "alamamasının ve çevresindeki saray ağalarının onu kasıtlı olarak "
    + "dar bir çevrede tutmasının sonucu olarak da okur — sorumluluk "
    + "tek başına padişaha mı, yoksa onu izole eden sisteme mi ait, "
    + "tartışmalıdır.",
    tarihciler:"Klasik anlatı onu 'Avcı' lakabıyla sorumsuz, devlet "
    + "işlerine ilgisiz bir padişah olarak anar; madde müellifi "
    + "Abdülkadir Özcan saltanatının ilk 30 yılının aslında Köprülüler'in "
    + "başarılı yönetimiyle geçtiğini, gerçek çöküşün yalnız annesinin "
    + "ölümünden sonraki son dört yılda yaşandığını vurgular.",
    kaynak:"TDV: mehmed-iv" },
  { id: "suleyman2",   ad: "II. Süleyman",                 from: "1687-11", to: "1691-06",
    dogum:"1642-04-15",
    dogum_yer:"İstanbul",
    olum:"1691-06-22",
    olum_yer:"Edirne",
    olum_sebep:"istiskā hastalığı (ödem/vücut şişmesi), uzun süredir muzdaripti",
    baba:"Sultan İbrahim",
    anne:"Sâliha Dilâşûb Sultan",
    tahta:"1687-11-08 (45 yaşında; ağabeyi IV. Mehmed tahttan indirilince, "
    + "yaklaşık 40 yıl kapalı tutulduğu Şimşirlik'ten çıkarılarak — "
    + "önce öldürüleceğini sanıp direnmişti)",
    saltanat_yil:3.7,
    lakap:"bulunamadı",
    esler:"altı kadını olduğu belirtilir, TDV isim vermiyor",
    cocuk:"yok — TDV: 'çocuğu olmayan veya yaşamayan'",
    skandal:"Tahta çıkarılacağı bildirildiğinde öldürüleceğini sanıp "
    + "'kırk yıldır her gün ölmektense bir gün evvel ölmek yeğdir' diyerek "
    + "yerinden ayrılmak istemedi, güçlükle ikna edildi. Sadrazamı "
    + "Köprülüzâde Mustafa Paşa'nın uyarısına rağmen annesinin vefatından "
    + "sonra Harem'in başına bir 'Kethüdâ Kadın' tayin etti — emsali "
    + "görülmemiş bir uygulama.",
    ovgu:"Sadârete getirdiği Köprülüzâde Fâzıl Mustafa Paşa'nın "
    + "icraatlarıyla devlet toparlandı: haksız vergiler geri iade edildi, "
    + "olağan üstü vergiler kaldırıldı; 1690'da sekiz gün gibi kısa bir "
    + "sürede Niş, Vidin ve Belgrad geri alındı. Sadrazamını cepheye "
    + "uğurlarken kendi kürkünü ve mücevher hançerini ona verecek kadar "
    + "iltifat gösterdi.",
    yergi:"Yaklaşık kırk yıllık hapis hayatı yüzünden iyi bir eğitim "
    + "alamadı, kırılgan bir tabiatı vardı ve çoğu zaman saraydaki güç "
    + "odaklarının etkisinde kaldı; tahta çıkışının ilk dört ayı Sancak "
    + "Vak'ası dahil art arda asker isyanlarıyla geçti, devlet işlerine "
    + "doğrudan tasarrufu sınırlıydı.",
    tartisma:"Harem'in başına Kethüdâ Kadın tayin etmesi gibi geleneğin "
    + "dışına çıkan kararlarının kendi iradesiyle mi, yoksa çevresindeki "
    + "etkilerle mi alındığı net değildir — TDV onu 'iyi niyetli ama "
    + "kolay etkilenen' bir padişah olarak tasvir eder.",
    tarihciler:"Modern tarihçilik bu dönemin asıl belirleyicisi olarak "
    + "padişahın kendisini değil sadrazamı Köprülüzâde Fâzıl Mustafa "
    + "Paşa'nın icraatlarını görür; kırk yıllık kafes hayatı da Osmanlı "
    + "veraset sisteminin (şehzadelerin sancağa çıkarılmaması) yönetim "
    + "kapasitesi üzerindeki bedelinin çarpıcı bir örneği olarak okunur.",
    kaynak:"TDV: suleyman-ii" },
  { id: "ahmed2",      ad: "II. Ahmed",                    from: "1691-06", to: "1695-02",
    dogum:"1643-02-25",
    dogum_yer:"bulunamadı — TDV maddesi doğum yeri belirtmiyor",
    olum:"1695-02-06",
    olum_yer:"Edirne",
    olum_sebep:"istiskā (ödem), 52 yaşında",
    baba:"Sultan İbrahim",
    anne:"Muazzez Sultan",
    tahta:"1691-06-23 (49 yaşında, Edirne'de, kardeşi II. Süleyman'ın "
    + "ölümü üzerine)",
    saltanat_yil:3.7,
    lakap:"bulunamadı",
    esler:"bulunamadı — TDV maddesinde eş adı geçmiyor",
    cocuk:"bulunamadı — TDV maddesinde çocuk bilgisi geçmiyor",
    skandal:"Reâyâyı sık değişen mültezimlerin keyfî davranışlarından "
    + "korumak için 1695'te ihdas ettiği 'mâlikâne' (ömür boyu iltizam) "
    + "usulü, TDV'nin kendi ifadesiyle 'daha sonra devletin başına büyük "
    + "dertler açan âyânlığın ortaya çıkmasına zemin hazırladı' — iyi "
    + "niyetli bir reformun istenmeyen uzun vadeli sonucu.",
    ovgu:"Dîvân-ı Hümâyun toplantılarını haftada ikiden dörde çıkardı ve "
    + "hastalığı sırasında bile müzakerelere bizzat katılmayı sürdürdü; "
    + "reâyânın haklarını gözeten mâlikâne usulünü getirdi; şiir ve "
    + "mûsikiye meraklı, aynı zamanda hattat bir padişahtı.",
    yergi:"Çevresindekilerin (özellikle kızlar ağasının) telkinlerine "
    + "çabuk kapılıp sadrazam değiştirdi; saltanatı sırasında Varad "
    + "Kalesi Avusturya'ya, Sakız adası Malta ve papalık kuvvetlerine "
    + "kaptırıldı; İstanbul'da Cibali, Ayazma Kapısı ve Bedesten "
    + "yangınları şehrin büyük bölümünü kül etti.",
    tartisma:"Mâlikâne usulünün niyeti reâyâyı korumaktı, ama bu "
    + "iyileştirmenin devletin taşra idaresini yapısal olarak nasıl "
    + "zayıflattığı (âyânlığın kökeni) tarihçiler arasında hâlâ "
    + "tartışılan bir konudur.",
    tarihciler:"Klasik anlatı onu hassas, dindar ve reâyâ dostu bir "
    + "padişah olarak över; modern mâliye tarihi (Mehmet Genç gibi "
    + "araştırmacılar) mâlikâne sistemini Osmanlı taşra idaresinde kalıcı "
    + "bir dönüşümün (âyânlığın yapısal kökeni) başlangıcı olarak "
    + "inceler.",
    kaynak:"TDV: ahmed-ii" },
  { id: "mustafa2",    ad: "II. Mustafa",                  from: "1695-02", to: "1703-08",
    dogum:"1664-06-02",
    dogum_yer:"Edirne",
    olum:"1703-12-29 (muhtemelen — TDV kesin tarihte 'muhtemelen' der)",
    olum_yer:"Edirne",
    olum_sebep:"istiskā ve mesane hastalıkları, tahttan indirilmenin "
    + "verdiği üzüntüyle ağırlaşarak",
    baba:"IV. Mehmed",
    anne:"Gülnûş Emetullah Sultan",
    tahta:"1695-02-06 (31 yaşında, Edirne'de; vezîriâzam ve şeyhülislâmı "
    + "beklemeden kendi kendini padişah ilân ederek)",
    saltanat_yil:8.5,
    lakap:["Gazi (1695'teki Lippa fethi ve Buldur zaferinin ardından "
    + "verildi)"],
    esler:"bulunamadı — TDV maddesinde eş adı geçmiyor",
    cocuk:"bulunamadı — TDV maddesinde çocuk bilgisi geçmiyor",
    skandal:"Hocası Şeyhülislâm Feyzullah Efendi'nin devlet işlerine "
    + "aşırı karışması ve sadrazam atamalarını yönlendirmesi, 1703 "
    + "Edirne Vak'ası'nın görünürdeki hedefi oldu; isyan büyüyünce II. "
    + "Mustafa kendi rızasıyla tahtı kardeşi III. Ahmed'e bıraktı — "
    + "'Birader, kul seni padişah istemişler' diyerek.",
    ovgu:"Ordularının başında bizzat sefere çıkan SON Osmanlı padişahıdır "
    + "(1695-97 Avusturya seferleri); 1695'te Lippa'yı fethedip Buldur "
    + "savaşını kazanarak 'Gazi' unvanını aldı; saltanatının ilk beş "
    + "yılında Dîvân-ı Hümâyun'u haftada dört güne çıkarıp devlet "
    + "işlerine bizzat eğildi; Osmanlı tarihinde ilk tuğralı altın para "
    + "onun döneminde basıldı.",
    yergi:"1697 Zenta bozgununda ordunun sekizde biri, sadrazam dahil "
    + "yirmi kumandan kayboldu; Karlofça Antlaşması'yla (1699) Tımışvar "
    + "hariç bütün Macaristan, Mora (Venedik'e), Ukrayna-Podolya "
    + "(Lehistan'a) kaybedildi. Barış sonrası son beş yılda Edirne'ye "
    + "çekilip 'babası gibi davranmaya başladığı' yönünde dedikodular "
    + "yayıldı.",
    tartisma:"Zenta'ya giden yol seçimi tartışmalıdır: Amcazâde Hüseyin "
    + "Paşa'nın önerdiği daha yakın Varadin güzergâhı reddedilip daha "
    + "uzak, nehir ve bataklık dolu Tımışvar güzergâhı seçildi — bu karar "
    + "orduyu felakete sürükledi. Edirne Vak'ası'nın gerçek hedefinin "
    + "şeyhülislâm mı yoksa doğrudan padişahın kendisi mi olduğu da "
    + "tarihçiler arasında tartışılır.",
    tarihciler:"Kantemir gibi çağdaş kaynaklar saltanatının ilk beş "
    + "yılı ile son beş yılı arasındaki tezadı vurgular: önce devlet "
    + "işlerine tam eğilen bir padişah, sonra köşesine çekilen bir "
    + "padişah. Modern tarihçilik onu, bizzat sefere çıkan son padişah "
    + "olması ve saltanatının Osmanlı'nın Avrupa'daki büyük toprak "
    + "kayıplarının (Karlofça) başlangıcına denk gelmesi bakımından bir "
    + "dönüm noktası sayar.",
    kaynak:"TDV: mustafa-ii" },
  { id: "ahmed3",      ad: "III. Ahmed",                   from: "1703-08", to: "1730-10" },
  { id: "mahmud1",     ad: "I. Mahmud",                    from: "1730-10", to: "1754-12",
    dogum:"1696-08-02",
    dogum_yer:"Edirne",
    olum:"1754-12-13",
    olum_yer:"Topkapı Sarayı, Demirkapı",
    olum_sebep:"doğal (Cuma selamlığı dönüşü, ansızın)",
    baba:"II. Mustafa",
    anne:"Sâliha Sultan",
    tahta:"1730-10-02 (Patrona Halil İsyanı sonrası)",
    saltanat_yil:24,
    skandal:"27 yıl kafeste (şehzade hapsinde) geçirdikten sonra tahta "
    + "çıktı; ilk icraatı isyancı Patrona Halil ve adamlarını birkaç ay "
    + "içinde tuzağa düşürüp bertaraf etmek oldu.",
    ovgu:"1739 Belgrad Antlaşması'yla 27 yıllık savaş döngüsünü "
    + "avantajlı bitirdi, Tebriz'i alarak 'Gazi' unvanını kazandı, "
    + "İstanbul'a Taksim su sistemini kurdurdu ve İbrahim "
    + "Müteferrika'nın matbaa çalışmalarını destekledi.",
    yergi:"İran seferlerindeki kazanımlar kalıcı olmadı; devlet "
    + "yönetiminde amcası III. Ahmed'in 'kimseye güvenme' öğüdüne aşırı "
    + "bağlı kalarak sık sadrazam değişikliğine gitti.",
    tartisma:"Dönemi 'Lâle Devri sonrası sükûnet' mi yoksa 'ıslahatların "
    + "yüzeysel kaldığı bir ara dönem' mi olduğu tarihçiler arasında "
    + "tartışmalıdır.",
    tarihciler:"Klasik anlatı 24 yıllık saltanatını imparatorluğun "
    + "'son parlak dönemi' sayar; modern araştırmalar askerî "
    + "modernleşme girişimlerinin (Humbaracı Ahmed Paşa) sınırlı "
    + "kalışını, yapısal reform eksikliğine bağlar.",
    kaynak:"TDV: mahmud-i--osmanli" },
  { id: "osman3",      ad: "III. Osman",                   from: "1754-12", to: "1757-10",
    dogum:"1699-01-03",
    dogum_yer:"Edirne Sarayı",
    olum:"1757-10-30",
    olum_yer:"İstanbul",
    olum_sebep:"mide rahatsızlığı (Cuma selamlığına çıkamadı)",
    baba:"II. Mustafa",
    anne:"Şehsuvar Vâlide Sultan",
    tahta:"1754-12-13",
    saltanat_yil:3,
    skandal:"Tahta çıkmadan önce kafeste geçirdiği 53 yıl, Osmanlı "
    + "tarihinde bir şehzadenin tahta çıkmadan beklediği EN UZUN süre — "
    + "58 yaşında tahta çıktı.",
    ovgu:"Nuruosmaniye Camii külliyesini tamamlatıp açtırdı (1755), "
    + "Üsküdar'da İhsaniye mahallesini kurdurdu, ilk Osmanlı-Danimarka "
    + "antlaşmasını imzaladı (1756).",
    yergi:"Üç yıllık saltanatında altı sadrazam ve dört şeyhülislâm "
    + "değiştirdi — kafeste geçen onca yılın ardından ani ve tutarsız "
    + "kararlar aldığı çağdaşlarınca not edildi.",
    tartisma:"Rüşvet ve yalandan nefret ettiği ama aldığı kararların "
    + "çoğuna sonradan pişman olduğu aktarılır — mizacındaki bu "
    + "çelişki kaynaklarda tekrar eder.",
    tarihciler:"Kısa ve olaysız saltanatı yüzünden tarihyazımında "
    + "sınırlı yer tutar; modern araştırmalar onu 'kafes sisteminin' "
    + "hükümdarlık yeteneği üzerindeki yıpratıcı etkisinin açık bir "
    + "örneği olarak ele alır.",
    kaynak:"TDV: osman-iii" },
  { id: "mustafa3",    ad: "III. Mustafa",                 from: "1757-10", to: "1774-01",
    dogum:"1717-01-28",
    dogum_yer:"Edirne",
    olum:"1774-01-21",
    olum_yer:"İstanbul",
    olum_sebep:"doğal",
    baba:"III. Ahmed",
    anne:"Mihrişah Emine Sultan",
    tahta:"1757-10-30",
    saltanat_yil:16,
    skandal:"1768'de sadrazamının yetersiz hazırlık uyarılarına rağmen "
    + "Rusya'ya savaş açtı — sonucu Çeşme'de donanmanın yakılması ve "
    + "imparatorluğun en ağır yenilgilerinden biri oldu.",
    ovgu:"İlk yıllarında vergi kolaylıkları ve bürokratik tasarruflarla "
    + "hazineyi güçlendirdi; 1766 depreminden sonra Fâtih Camii'ni "
    + "yeniden yaptırdı, Laleli Külliyesi'ni (1760-64) inşa ettirdi.",
    yergi:"1768-1774 Osmanlı-Rus Savaşı'nda Boğdan ve Eflak'ın Rus "
    + "işgaline uğraması, Tuna'nın aşılması ve devletin öz oğlundan "
    + "borç almaya varan mali çöküşü onun döneminde yaşandı.",
    tartisma:"Savaşı başlatma kararında astrolojiye aşırı güvendiği "
    + "aktarılır — bu ayrıntının rivayet mi yoksa belgeli bir olgu mu "
    + "olduğu net değil.",
    tarihciler:"Klasik anlatı ilk yıllarındaki tasarruf reformlarını "
    + "över, 1768 savaşını hazırlıksız bir hata sayar; modern "
    + "araştırmalar savaşı Osmanlı-Rus güç dengesinin geri "
    + "dönüşsüz biçimde değiştiği dönüm noktası olarak okur.",
    kaynak:"TDV: mustafa-iii" },
  { id: "abdulhamid1", ad: "I. Abdülhamid",                from: "1774-01", to: "1789-04" },
  { id: "selim3",      ad: "III. Selim",                   from: "1789-04", to: "1807-05",
    dogum:"1761-12-24",
    dogum_yer:"İstanbul",
    olum:"1808-07-28",
    olum_yer:"Topkapı Sarayı, İstanbul",
    olum_sebep:"suikast (Alemdar Mustafa Paşa'nın yeniden tahta çıkarma "
    + "girişimi sırasında, IV. Mustafa'nın emriyle)",
    baba:"III. Mustafa",
    anne:"Mihrişah Sultan",
    tahta:"1789-04-07",
    saltanat_yil:18,
    ovgu:"Nizâm-ı Cedîd reform programını başlattı: yeni askerî okullar "
    + "kurdu, modern bir ordu ve donanma oluşturdu, Avrupa "
    + "başkentlerinde ilk kalıcı Osmanlı elçiliklerini açtı; müzik ve "
    + "şiirle de tanınan bir hükümdardı.",
    yergi:"Radikal reformları uygulayacak 'kararlı bir karaktere' sahip "
    + "olmadığı, 'su gibi' bir mizaç sergilediği aktarılır; "
    + "yeniçerilerin direnişini kıramadı, 1806 Edirne Vakası'nda "
    + "askere alım girişimi başarısız oldu.",
    tartisma:"⚠️ SIK KARIŞTIRILAN İKİ TARİH: tahttan indirilmesi (Mayıs "
    + "1807, Kabakçı Mustafa isyanı) ile ÖLDÜRÜLMESİ (Temmuz 1808, "
    + "Alemdar Mustafa Paşa'nın onu yeniden tahta çıkarma girişimi "
    + "sırasında) İKİ AYRI OLAYDIR, aralarında bir yıldan fazla var.",
    tarihciler:"Klasik anlatı onu reformların 'öncü şehidi' sayar; "
    + "modern değerlendirmeler reform vizyonunun gücünü kabul edip "
    + "uygulama zaafını (yeniçeri direnişini yönetememe) ayrı bir "
    + "eksende eleştirir.",
    kaynak:"TDV: selim-iii" },
  { id: "mustafa4",    ad: "IV. Mustafa",                  from: "1807-05", to: "1808-07" },
  { id: "mahmud2",     ad: "II. Mahmud",                   from: "1808-07", to: "1839-07",
    dogum:"1785-07-20",
    olum:"1839-07-01",
    olum_yer:"İstanbul",
    olum_sebep:"bulunamadı — TDV özeti sebep belirtmiyor (yaygın "
    + "anlatı verem der, doğrulanmamış)",
    baba:"I. Abdülhamid",
    anne:"Nakşidil Sultan",
    tahta:"1808-07-28",
    saltanat_yil:31,
    skandal:"Kayıtlara göre 17 eşi ve 36 çocuğu vardı; çocukların çoğu "
    + "küçük yaşta öldü — dönemin yüksek çocuk ölüm oranının hanedan "
    + "içindeki en çarpıcı örneklerinden biri.",
    ovgu:"1826'da Yeniçeri Ocağı'nı kaldırdı ('Vak'a-i Hayriye'), "
    + "merkezî otoriteyi yeniden tesis etti, orduyu modernize etti, "
    + "Hariciye Nezareti gibi yeni kurumlar ve eğitim reformları "
    + "başlattı.",
    yergi:"Yunan isyanı (1821) uluslararası bir krize dönüştü ve "
    + "bağımsızlıkla sonuçlandı; Kavalalı Mehmed Ali'nin Mısır "
    + "kuvvetlerine karşı ağır yenilgiler aldı, toprak kaybetti. "
    + "Kuruşun gümüş oranı on devalüasyonla yüzde 80 düştü.",
    tartisma:"Reformlarının hızı ve sertliği (Yeniçeri Ocağı'nın topa "
    + "tutularak dağıtılması) tarihçiler arasında hâlâ tartışılır: "
    + "bazıları zorunlu bir modernleşme adımı, bazıları aşırı kanlı "
    + "bir yöntem sayar.",
    tarihciler:"Klasik anlatı onu Tanzimat'ın habercisi bir "
    + "modernleşme mimarı sayar; modern değerlendirmeler aynı dönemde "
    + "yaşanan toprak ve prestij kayıplarını (Yunanistan, Mısır) "
    + "reform başarısının karşı ağırlığı olarak okur.",
    kaynak:"TDV: mahmud-ii--osmanli" },
  { id: "abdulmecid",  ad: "Sultan Abdülmecid",            from: "1839-07", to: "1861-06",
    dogum:"1823-04-25",
    dogum_yer:"İstanbul",
    olum:"1861-06-25",
    olum_yer:"Ihlamur Kasrı",
    olum_sebep:"verem",
    baba:"II. Mahmud",
    anne:"Bezmiâlem Vâlide Sultan",
    tahta:"1839-07-01",
    saltanat_yil:22,
    skandal:"22 yıllık saltanatında 22 kez sadrazam değiştirdi — bu "
    + "sıklık dönemin sarayında dengeleri gözeten ama kararsız bir "
    + "yönetim tarzına yorulur.",
    ovgu:"3 Kasım 1839'da Tanzimat Fermanı'nı (Gülhane Hatt-ı Hümâyunu) "
    + "ilan ederek modernleşme çağını açtı; Kırım Savaşı'nda (1853-56) "
    + "İngiltere ve Fransa ile ittifak kurup Rusya'yı durdurdu; 1856 "
    + "Islahat Fermanı'yla gayrimüslim tebaaya yeni haklar tanıdı.",
    yergi:"Yabancı devletlerin iç işlere müdahalesine kapı araladığı, "
    + "dış borçlanmayla mali krize zemin hazırladığı ve reformlara "
    + "rağmen azınlık milliyetçi hareketlerini durduramadığı eleştirilir.",
    tartisma:"Tanzimat'ın kendi kişisel vizyonu mu yoksa bürokrasinin "
    + "(Mustafa Reşid Paşa gibi devlet adamlarının) onu yönlendirmesiyle "
    + "mi ilan edildiği tarihçiler arasında tartışmalıdır.",
    tarihciler:"Klasik anlatı onu 'modernleşmenin mimarı' sayar; modern "
    + "araştırmalar Tanzimat'ı tek bir hükümdarın kararından çok, "
    + "bürokratik bir reform hareketinin ürünü olarak okur.",
    kaynak:"TDV: abdulmecid" },
  { id: "abdulaziz",   ad: "Sultan Abdülaziz",             from: "1861-06", to: "1876-05" },
  { id: "murad5",      ad: "V. Murad",                     from: "1876-05", to: "1876-08" },
  { id: "abdulhamid2", ad: "II. Abdülhamid",               from: "1876-08", to: "1909-04",
    dogum:"1842-09-21",
    dogum_yer:"İstanbul",
    olum:"1918-02-10",
    olum_yer:"Beylerbeyi Sarayı, İstanbul",
    olum_sebep:"bulunamadı — TDV maddesi sebep belirtmiyor",
    baba:"Sultan Abdülmecid",
    anne:"Tîrimüjgân Kadınefendi",
    tahta:"1876-08-31",
    saltanat_yil:33,
    lakap:["Ulu Hakan (taraftarlarınca)"],
    ovgu:"Hicaz Demiryolu başta olmak üzere demiryolu ağını genişletti, "
    + "eğitimi kapsamlı biçimde reforme edip yeni okullar/üniversiteler "
    + "kurdu; büyük güçler arasında denge kurarak imparatorluğun "
    + "bağımsızlığını 33 yıl korudu.",
    yergi:"Yönetimi Yıldız Sarayı'nda tek elde topladı; sıkı bir sansür ve "
    + "jurnalcilik ağı kurdu, 1876 Anayasası'nı 1878'de askıya aldı. "
    + "1890'larda Ermeni meselesinde reform taleplerine sert direnç "
    + "gösterdi.",
    tartisma:"Batılı ve muhalif çevrelerde 'Kızıl Sultan' olarak anılması "
    + "TDV maddesinde YER ALMIYOR — bu, dönemin Ermeni ve Jön Türk "
    + "muhalefetinin kullandığı siyasi bir nitelemedir, TDV'nin kendi "
    + "değerlendirmesi değil; ikisi karıştırılmamalı.",
    tarihciler:"Klasik anlatı istibdadını öne çıkarır; modern "
    + "araştırmalar demiryolu/eğitim modernizasyonunu ve dış "
    + "politikadaki denge ustalığını da öne çıkararak dönemi yalnız "
    + "baskıyla değil, kırılgan bir hayatta kalma stratejisiyle okur.",
    kaynak:"TDV: abdulhamid-ii" },
  { id: "mehmed5",     ad: "V. Mehmed (Reşad)",            from: "1909-04", to: "1918-07",
    dogum:"1844-11-02",
    dogum_yer:"Çırağan Sarayı",
    olum:"1918-07-03",
    olum_yer:"İstanbul",
    olum_sebep:"doğal",
    baba:"Sultan Abdülmecid",
    anne:"Gülcemal Kadınefendi",
    tahta:"1909-04-27 (31 Mart Vak'ası'nda II. Abdülhamid'in hal'i sonrası)",
    saltanat_yil:9,
    skandal:"bulunamadı — meşrutiyet sisteminde yürütme yetkisi büyük "
    + "ölçüde İttihat ve Terakki'deydi, kendisi kişisel iktidar "
    + "iddiasında bulunmadı.",
    ovgu:"'Meşrutiyetle idare edeceksem her işe karışırsam kardeşimin "
    + "suçu neydi' diyerek anayasal sınırlara bilerek uydu; sembolik "
    + "rolüyle geçiş dönemini istikrarsızlığa sürüklemeden atlattı.",
    yergi:"I. Dünya Savaşı'na giriş kararına (1914) fiilen etkisi "
    + "olmadan padişah sıfatıyla ortak sorumlu tutuldu; Trablusgarp "
    + "(1911-12), Balkan Savaşları (1912-13) ve I. Dünya Savaşı'nın "
    + "ağır toprak kayıpları onun saltanatına denk düştü.",
    tartisma:"Yetkisiz bir figüran mı yoksa bilinçli biçimde anayasal "
    + "sınırı koruyan bir hükümdar mı olduğu tarihçiler arasında "
    + "farklı okunur.",
    tarihciler:"Klasik anlatı onu İttihat ve Terakki'nin gölgesinde "
    + "'törensel padişah' sayar; modern araştırmalar meşruti "
    + "monarşiye sadakatini, sonraki cumhuriyet geçişinin sarsıntısız "
    + "olmasına katkısı olarak değerlendirir.",
    kaynak:"TDV: mehmed-v" },
  { id: "mehmed6",     ad: "VI. Mehmed (Vahideddin)",      from: "1918-07", to: "1922-11",
    dogum:"1861-01-04",
    dogum_yer:"Dolmabahçe Sarayı",
    olum:"1926-05-16",
    olum_yer:"San Remo, İtalya (sürgünde)",
    olum_sebep:"doğal",
    baba:"Sultan Abdülmecid",
    anne:"Gülüstü Kadınefendi",
    tahta:"1918-07-03",
    saltanat_yil:4,
    skandal:"30 Ekim 1918 Mondros Mütarekesi'ni onayladı ve işgal "
    + "kuvvetleriyle iş birliği arayışı, Millî Mücadele'yi yürüten "
    + "Ankara hükümetince 'vatana ihanet' sayıldı.",
    ovgu:"Son padişah olarak 623 yıllık hanedanın çöküşünü savaşsız "
    + "atlatmaya çalıştı; hilâfet hakkından saltanat kaldırıldıktan "
    + "sonra bile (Kasım 1922) vazgeçmedi.",
    yergi:"İtilaf devletleriyle uzlaşma arayışı ve Millî Mücadele'ye "
    + "karşı Anadolu'ya gönderdiği fetva/kuvvetler (Kuvâ-yı İnzibâtiye) "
    + "yüzünden 'işgalcilerle iş birlikçi' olarak anıldı.",
    tartisma:"Gerçekten teslimiyetçi mi, yoksa çöküş sürecinde devleti "
    + "içeriden yıkımdan korumaya çalışan gerçekçi bir hükümdar mı "
    + "olduğu tarihçiler arasında en çok tartışılan konulardan biridir.",
    tarihciler:"Klasik cumhuriyet tarihyazımı onu 'işbirlikçi son "
    + "padişah' sayar; modern araştırmalar sınırlı seçenekleri olan bir "
    + "hükümdarın çöküş yönetimi olarak daha nüanslı okur.",
    kaynak:"TDV: mehmed-vi" },
  { id: "hilafet",     ad: "Saltanat kaldırıldı — Halife Abdülmecid Efendi", from: "1922-11", to: "1923-11", ozel: true }
];
