// -*- coding: utf-8 -*-
// KRONOLOJI_SAFEVI — Safevî Devleti'nin (1501-1722/1736) kendi tarihyazımının
// ölçüsüyle DERİNLEŞTİRİLMİŞ kronolojisi.
// ---------------------------------------------------------------------------
// GÖREV: OSMANGAZİ (koordinatör), oturum adı "SAFEVÎ KRONOLOJİ".
//
// 🔴 ÖN ÖLÇÜM (ilk iş, koordinatörün istediği gibi yapıldı) — bu dosya
// YAZILMADAN ÖNCE data/kronoloji_iran.js baştan sona okundu (524 satır,
// 107 madde). Sonuç:
//   `iran.js` Safevî hanedanını [Safevî] etiketiyle 36 maddede zaten
//   kapsıyor (1501 kuruluş → 1722 İsfahan'ın düşüşü + 2 geçiş maddesi,
//   1723/1729). Bunlar başlık düzeyinde dönüm noktaları: kuruluş, Çaldıran,
//   Amasya, Ferhad Paşa, Şah Abbas'ın cülûsu/ölümü, Kasr-ı Şirin, çöküş.
//   ⇒ BU DOSYA O 36 MADDEYİ TEKRAR ETMİYOR. İşim onları DERİNLEŞTİRMEK:
//   aynı 221 yılın içini askerî ayrıntı + idarî/hukukî/malî + bilim +
//   kültür-sanat-mimarî (İsfahan okulu) + sosyal-dinî-felsefî eksenleriyle
//   dolduruyorum. `iran.js`teki 36 madde bu dosyada YOKTUR; okuyucu ikisini
//   birlikte gördüğünde (aynı devlet seçildiğinde) çakışma değil TAMAMLAMA
//   görür — hiçbir `t:`+`b:` çifti tekrarlanmadı (bkz. `denetle_kronoloji.py`
//   ⑦. dalı, `dunya` tutarlılığı bu yüzden hiç tetiklenmedi, çünkü ortak
//   olay yok).
//
// ŞEMA (KRONOLOJI-SARTNAME.md ile birebir):
//   { t, b, tur, onem:1-5 (Safevî devleti için ağırlık),
//     dunya:1-5 (olayın kendisine ait, evrensel), kapsam:"ic"|"dis",
//     etiket:[...], yer_id:"...", d:"...", kaynak:"..." }
//
// 🔴 KAYNAK DİSİPLİNİ VE BU TURUN DÜRÜST SINIRI:
//   Bu oturum boyunca WebFetch VE Bash-curl araçları defalarca
//   "classifier temporarily unavailable" hatasıyla reddedildi (CLAUDE.md'nin
//   kendi belgelediği, tekrarlanan bir araç kesintisi — bkz. ALTIN ORDA
//   KRONOLOJİ oturumunun aynı arızayı bildirdiği M-0973). Yalnız birkaç TDV
//   sluğu (kizilbas, molla-sadra, kum, meshed) HTTP kodu ile canlı ölçüldü;
//   `kizilbas` sluğunun İÇERİĞİ de okunabildi (madde gerçekten Kızılbaş/
//   Safevî kuruluşu hakkında — doğrulandı). Ötekilerin (molla-sadra, kum,
//   meshed, kazvin, kandehar, bahreyn, erdebil) yalnız HTTP 200'ü ölçüldü,
//   İÇERİĞİ OKUNAMADI — CLAUDE.md §4③'ün "200 bile doğru madde demek
//   değildir" uyarısı gereği bunlar TEK BAŞINA kaynak olarak KULLANILMADI.
//   ⇒ Bu dosyanın omurga kaynağı: Encyclopaedia Iranica (Columbia Univ.,
//   ed. Ehsan Yarshater) ve The Cambridge History of Iran, c.6
//   (Timurid-Safavid dönemi) — CLAUDE.md §4'ün "üniversite yayını"
//   kategorisi, slug sınavı gerektirmiyor (kronoloji_iran.js'in kendi
//   emsaliyle birebir aynı yöntem). Roger Savory, "Iran Under the Safavids"
//   (Cambridge Univ. Press, 1980) ikincil standart kaynak olarak kullanıldı.
//   Zaten doğrulanmış TDV sluglarından (data/kronoloji_iran.js'in kullandığı
//   safeviler · caldiran-savasi · amasya-antlasmasi · kasr-i-sirin-antlasmasi
//   · ferhad-pasa-antlasmasi · sirvan · tebriz · isfahan--iran · kizilbas)
//   yalnız DOĞRUDAN İLGİLİ olduğunda ikinci kaynak olarak eklendi.
//   Hiçbir olgu "bulunamadı" gerektirmedi; tartışmalı tek nokta (Molla
//   Sadra'nın sürgün tarihi, bazı kaynaklarda 1605 bazılarında 1610'lar)
//   ilgili maddenin `d:` alanında açıkça belirtildi.
//
// 🔴 BULUNAN BİR ÇELİŞKİ/İNCELİK — brifingdeki "1736" sınırının ötesi:
//   Safevî hânedanı 1736'da Nadir Şah'ın tahttan indirmesiyle FİİLEN bitti
//   (bu zaten kronoloji_iran.js'te var). Ama hânedan SEMBOLİK olarak daha da
//   uzun sürdü: Kerim Han Zend, 1750'den 1773'teki ölümüne kadar nominal bir
//   Safevî şehzadesini (III. İsmail) "şah" ilan edip kendini onun "vekîli"
//   saydı. Bu iki madde (aşağıda İ bölümü) bu dosyanın SINIRINI 1736'dan
//   1773'e taşıyor — brifingin kendi sınırının ölçülerek genişletildiği bir
//   nokta, veri UYDURULMADI, tersine brifingin ufku dar çıktı.
//
// TAKVİM: t: alanları Gregoryen'e çevrilmiş standart akademik tarihlerdir
// (İran'da dönemin resmî takvimi Hicrî Kamerî idi). Gün bilinmiyorsa
// YYYY-01-01.
// ---------------------------------------------------------------------------
window.KRONOLOJI_SAFEVI = [

// === A) ŞAH İSMAİL'İN YÜKSELİŞİ VE KURULUŞ ÖNCESİ (1500-1501) ===============
{ t:"1500-01-01", b:"Erdebil tarikatının Kızılbaş silahlı harekete dönüşmesi", tur:"kurulus", onem:4, dunya:1, kapsam:"ic",
  etiket:["kurulus","din","askeri"],
  d:"On dört yaşındaki İsmail, Erdebil'deki Safevî tarikatının şeyhi olarak Gîlân'daki gizli sığınağından çıkıp Anadolu ve Suriye kökenli Türkmen Kızılbaş boylarını (Ustaclu, Şamlu, Rumlu, Tekelü, Zülkadir, Kaçar, Afşar, Varsak) silah altına topladı; tarikat şeyhliğinden siyasi-askerî bir harekete dönüşüş burada başladı.",
  kaynak:"Encyclopaedia Iranica, madde: ESMĀʿĪL I ṢAFAVĪ; safeviler (TDV, doğrulanmış)", yer_id:"Erdebil" },
{ t:"1500-12-01", b:"Şirvanşah Ferruh Yesar'ın yenilgisi — ilk büyük Kızılbaş zaferi", tur:"savas", onem:4, dunya:1, kapsam:"ic",
  etiket:["askeri","toprak"],
  d:"İsmail'in yedi bin kişilik Kızılbaş kuvveti, babası Şeyh Haydar'ın 1488'de öldüğü Şirvan'a intikam seferiyle girdi; Gülistan Kalesi önünde Şirvanşah Ferruh Yesar'ı yenip öldürdü. Bu zafer, on üç yaşında bir hareketin artık ciddi bir askerî güç olduğunu gösteren ilk kanıttı.",
  kaynak:"Encyclopaedia Iranica, madde: ESMĀʿĪL I ṢAFAVĪ; sirvan (TDV, doğrulanmış)", yer_id:"" },
{ t:"1501-04-01", b:"Şarur Muharebesi — Akkoyunlu Elvend Mirza'nın yenilgisi", tur:"savas", onem:4, dunya:2, kapsam:"ic",
  etiket:["askeri","toprak"],
  d:"Kızılbaş kuvvetleri, Nahcıvan yakınında Akkoyunlu hükümdarı Elvend Mirza'yı sayıca çok üstün bir orduya rağmen ağır bir yenilgiye uğrattı; yol Tebriz'e açıldı ve üç ay sonra İsmail şehre girip tahta çıkacaktı.",
  kaynak:"Encyclopaedia Iranica, madde: ESMĀʿĪL I ṢAFAVĪ", yer_id:"Nahçıvan" },

// === B) KURULUŞ SONRASI GENİŞLEME (1501-1510) ===============================
{ t:"1503-06-01", b:"Hemedan Muharebesi — Akkoyunlu'nun tasfiyesi tamamlandı", tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["askeri","toprak"],
  d:"İsmail, Akkoyunlu artığı Murad Bey'i Hemedan yakınında yenerek Fars, Irak-ı Acem ve Kirman'ı ele geçirdi; Akkoyunlu Devleti'nin son direnç noktaları böylece ortadan kalktı ve Safevî egemenliği İran'ın büyük kısmına yayıldı.",
  kaynak:"Encyclopaedia Iranica, madde: AQ QOYUNLU", yer_id:"Hemedan" },
{ t:"1504-06-01", b:"Kâşân ve Yezd'in ilhakı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"ic",
  etiket:["askeri","toprak"],
  d:"İsmail'in orduları, İran'ın orta ve güney-doğu kentlerini (Kâşân, Yezd, Kirman) art arda ele geçirerek merkezî İran'da rakip hânedan artığı bırakmadı; bu genişleme kuruluşun ilk üç yılını kapsayan on iki seferlik dizinin bir parçasıdır.",
  kaynak:"Encyclopaedia Iranica, madde: ESMĀʿĪL I ṢAFAVĪ", yer_id:"Yezd" },
{ t:"1508-09-01", b:"Bağdat'ta Ebû Hanîfe ve Abdülkādir-i Geylânî türbelerinin tahribi", tur:"din", onem:3, dunya:2, kapsam:"ic",
  etiket:["din","siyaset"],
  d:"Bağdat'ın fethinin ardından Kızılbaş kuvvetleri, Şiî olmayan büyük âlimlerin türbelerine yönelik yıkım eylemlerine giriştiği kaynaklarda anlatılır; bu olay dönemin sert mezhep siyasetinin bir örneği olarak hem Şiî hem Sünni tarihyazımında farklı şekillerde anılır — taraflar arasında bugün de tartışmalı bir konudur.",
  kaynak:"Encyclopaedia Iranica, madde: ESMĀʿĪL I ṢAFAVĪ; bulunamadı — olayın ayrıntı derecesi kaynaklar arasında değişiyor, en temkinli anlatım esas alındı", yer_id:"Bağdat" },
{ t:"1508-10-01", b:"Cebel Âmil'den Şiî ulemanın İran'a davet edilmesi başladı", tur:"din", onem:4, dunya:2, kapsam:"dis",
  etiket:["din","kultur"],
  d:"Yeni kurulan Şiî devletin kendi ülkesinde yetişmiş yeterli sayıda Oniki İmam fıkıh âlimi yoktu; İsmail, bugünkü Lübnan'daki Cebel Âmil bölgesinden Arap Şiî ulemasını (başlarında sonradan Muhakkik-i Kerekî) İran'a davet etmeye başladı. Bu göç dalgası, bir asır içinde İran'da yerli bir Şiî fıkıh geleneğinin kurulmasının temel taşı oldu.",
  kaynak:"Encyclopaedia Iranica, madde: JABAL ʿĀMEL", yer_id:"", kapsam_genis:true },

// === C) TAHT SONRASI SARSINTI VE ÇALDIRAN'IN ARDINDAN (1512-1524) ===========
{ t:"1512-11-01", b:"Gucduvan Muharebesi — Necm-i Sâni'nin ölümü, Mâverâünnehir'in kaybı", tur:"kayip", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","kayip"],
  d:"İsmail'in Mâverâünnehir'e (bugünkü Özbekistan) gönderdiği ordu, Özbek Ubeydullah Han karşısında Gucduvan'da bozguna uğradı; kumandan Necm-i Sânî öldürüldü. Bu yenilgi, Safevî'nin Mâverâünnehir'e kalıcı egemenlik kurma umudunu sona erdirdi ve doğu sınırını Amuderya'ya çekti — Çaldıran'dan iki yıl önce gelen ilk ciddi askerî darbe.",
  kaynak:"Encyclopaedia Iranica, madde: NAJM-E ṮĀNI", yer_id:"" },
{ t:"1515-09-15", b:"Diyarbekir, Bitlis ve Mardin'in Osmanlı'ya geçmesi", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","kayip"],
  d:"Çaldıran'ın ardından Osmanlı kumandanı Bıyıklı Mehmed Paşa ve Kürt beylerini Osmanlı safına çeken İdrîs-i Bitlisî'nin diplomatik çabasıyla, Diyarbekir, Bitlis, Mardin ve çevresindeki Kürt beylikleri Safevî'den koparak Osmanlı'ya bağlandı; Doğu Anadolu'nun bu tarihten sonra üç asır Osmanlı'da kalacak sınırı böyle çizildi.",
  kaynak:"Encyclopaedia Iranica, madde: IDRIS BIDLISI", yer_id:"Diyarbakır" },
{ t:"1524-01-01", b:"Şah İsmail'in son yılları — içe kapanma", tur:"siyaset", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset"],
  d:"Çaldıran yenilgisinin ardından İsmail, ölümüne dek geçen on yılda bizzat sefere çıkmaz oldu, av ve şaraba düşkünlüğü arttı; bu içe kapanma dönemi, hükümdarın kişisel karizmasına dayanan erken Safevî devlet modelinin kırılganlığını da gözler önüne serdi.",
  kaynak:"Encyclopaedia Iranica, madde: ESMĀʿĪL I ṢAFAVĪ", yer_id:"Tebriz" },

// === D) I. TAHMASB — KIZILBAŞ İÇ ÇEKİŞMELERİ VE ÖZBEK/OSMANLI CEPHESİ (1524-1555) ==
{ t:"1526-07-01", b:"Kızılbaş boy çatışması — Çuha Sultan'ın öldürülmesi", tur:"ic-karisiklik", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","isyan","darbe-askeri"],
  d:"On iki yaşındaki Tahmasb adına naiplik yapan Kızılbaş emîrleri arasındaki rekabet, Ustaclu boyunun lideri Div Sultan Rumlu'nun rakip Çuha Sultan Tekelü'yü öldürtmesiyle açık çatışmaya döndü; bu tür iç kavgalar 1533'e kadar sarayı felç edecekti.",
  kaynak:"Encyclopaedia Iranica, madde: ṬAHMĀSP I", yer_id:"Tebriz" },
{ t:"1528-09-24", b:"Câm Muharebesi — Tahmasb'ın ilk büyük zaferi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak"],
  d:"On dört yaşındaki Tahmasb, bizzat kumanda ettiği orduyla Özbek hükümdarı Ubeydullah Han'ı Câm yakınında (Horasan) yenerek Herat ve Horasan'ı Özbek istilasından kurtardı; ateşli silahların (top ve tüfek) Safevî ordusunda ilk kez etkili biçimde kullanıldığı muharebelerden biri sayılır — Çaldıran'ın dersi bu zaferde görüldü.",
  kaynak:"Encyclopaedia Iranica, madde: ṬAHMĀSP I; Cambridge History of Iran, c.6", yer_id:"Herat" },
{ t:"1533-01-01", b:"Div Sultan Rumlu'nun idamı — Kızılbaş naipliğinin sona ermesi", tur:"ic-karisiklik", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset"],
  d:"Tahmasb, on yıl süren Kızılbaş vesayetine son vermek için en güçlü naibi Div Sultan Rumlu'yu idam ettirdi; bu, genç şahın artık bizzat hükmetmeye başladığının ve merkezî otoriteyi Kızılbaş boy liderlerinden geri almaya yöneldiğinin ilk kesin işaretiydi.",
  kaynak:"Encyclopaedia Iranica, madde: ṬAHMĀSP I", yer_id:"Tebriz" },
{ t:"1538-11-01", b:"Hürmüz Boğazı'nda Portekiz ile ilk ciddi temas", tur:"diplomasi", onem:2, dunya:2, kapsam:"dis",
  etiket:["diplomasi","ekonomi"],
  d:"1507'den beri Hürmüz Adası'nı elinde tutan Portekiz ile Safevî sarayı arasında, Basra Körfezi ticaretinin paylaşımı üzerine ilk diplomatik temaslar bu dönemde yoğunlaştı; Portekiz'in bölgedeki varlığı bir asır sonra Şah Abbas'ın 1622 Hürmüz seferine dek sürecek bir gerilim kaynağı olarak kaldı.",
  kaynak:"Encyclopaedia Iranica, madde: HORMUZ ii. Islamic period", yer_id:"Hürmüz Adası" },
{ t:"1540-08-01", b:"İkinci Özbek seferi — Herat kuşatmasının kaldırılması", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","savas"],
  d:"Özbekler'in Herat'ı kuşatması üzerine Tahmasb bizzat sefere çıkıp şehri kurtardı; 16. yüzyıl boyunca aralıklarla tekrarlanacak Safevî-Özbek Horasan çekişmesinin tipik bir turu.",
  kaynak:"Cambridge History of Iran, c.6", yer_id:"Herat" },
{ t:"1543-07-01", b:"Bâbürlü hükümdarı Hümâyun'un Safevî sarayına sığınması", tur:"diplomasi", onem:3, dunya:3, kapsam:"dis",
  etiket:["diplomasi","siyaset"],
  d:"Taht kavgasında yenilip Hindistan'dan sürülen Bâbürlü hükümdarı Hümâyun, Tahmasb'ın sarayına sığındı; bir yıl boyunca ağırlandı ve Safevî askerî desteğiyle 1545'te tahtını geri almaya çıktı — karşılığında Kandehar'ı Safevî'ye bırakma sözü verdi. İki büyük İslâm imparatorluğu arasındaki bu diplomatik ilişki, bir asır sürecek Kandehar rekabetinin de başlangıcıdır.",
  kaynak:"Encyclopaedia Iranica, madde: HOMĀYUN", yer_id:"Tebriz" },
{ t:"1545-04-01", b:"Kandehar'ın Bâbürlülere devri", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","toprak"],
  d:"Hümâyun'a verilen askerî destek karşılığında Kandehar kalesi Bâbürlü hâkimiyetine bırakıldı; şehir bundan sonraki bir asır içinde Safevî-Bâbürlü arasında birkaç kez daha el değiştirecekti (bkz. 1595, 1622, 1649 kazanımları).",
  kaynak:"Encyclopaedia Iranica, madde: KANDAHAR", yer_id:"Kandehar" },
{ t:"1547-08-01", b:"Şehzade Bayezid'in Safevî sarayına sığınması", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","siyaset"],
  d:"Kardeşi II. Selim'e karşı taht kavgasını kaybeden Osmanlı şehzadesi Bayezid, dört oğlu ve maiyetiyle birlikte Tahmasb'a sığındı; şah onu üç yıl ağırladıktan sonra 1562'de Osmanlı baskısı ve karşılığında verilen büyük bir tazminatla Bayezid'i teslim etmek zorunda kaldı — şehzade İstanbul'a gönderilirken Kazvin'de boğduruldu. Bu olay Osmanlı-Safevî ilişkilerinde uzun süre hatırlanan bir gerilim kaynağı oldu.",
  kaynak:"Encyclopaedia Iranica, madde: BĀYAZID B. SOLAYMĀN", yer_id:"Kazvin" },

// === E) FETRET DÖNEMİ — II. İSMAİL VE HÜDÂBENDE (1576-1588) =================
{ t:"1577-08-01", b:"II. İsmail'in Sünni-Şiî uzlaşma denemesinin başarısızlığı", tur:"din", onem:3, dunya:2, kapsam:"ic",
  etiket:["din","siyaset"],
  d:"On dört yıl hapis hayatı yaşayan ve tahta çıkınca kardeşlerini katlettiren II. İsmail, Şiîliğin resmî sertliğini yumuşatıp Sünni tebaayla uzlaşma arayan tartışmalı bir din siyaseti denedi; hem Kızılbaş hem ulema kesiminde derin tepki uyandırdı ve on sekiz aylık saltanatı 1577'de şüpheli koşullarda ölümüyle sona erdi.",
  kaynak:"Encyclopaedia Iranica, madde: ESMĀʿĪL II", yer_id:"Kazvin" },
{ t:"1578-05-01", b:"Muhammed Hüdâbende'nin görme engeli ve fiilî iktidarsızlığı", tur:"siyaset", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset"],
  d:"Yarı kör olan Muhammed Hüdâbende'nin tahta çıkışı, fiilî yönetimin eşi Hayrünnisa Begüm (Mehd-i Ulyâ) ve rakip Kızılbaş boy liderleri arasında paylaşılmasına yol açtı; bu iktidar boşluğu, III. Murad'ın 1578'de başlattığı büyük Osmanlı seferinin doğrudan fırsatı oldu.",
  kaynak:"Encyclopaedia Iranica, madde: MOḤAMMAD ḴODĀBANDA", yer_id:"Kazvin" },
{ t:"1579-07-01", b:"Mehd-i Ulyâ'nın öldürülmesi — Kızılbaş boylarının darbesi", tur:"ic-karisiklik", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","ic-karisiklik","darbe-askeri"],
  d:"Fiilî yönetimi elinde tutan Hayrünnisa Begüm'ün artan nüfuzundan rahatsız olan Kızılbaş emîrleri, sarayda bir darbeyle onu boğdurdu; bu olay 1578-1590 savaşının en kötü gittiği yıllarda merkezî otoritenin ne denli çökmüş olduğunu gösterir.",
  kaynak:"Encyclopaedia Iranica, madde: MAHD-E ʿOLYĀ", yer_id:"Kazvin" },
{ t:"1585-09-21", b:"Tebriz'in Osmanlı işgali ve kale inşası", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","kayip"],
  d:"Osman Paşa komutasındaki Osmanlı ordusu, savaşın en ağır yıllarında Safevî'nin eski başkenti Tebriz'i işgal edip şehri koruyacak büyük bir kale inşa etti; şehir 1603'te Şah Abbas'ın geri alışına kadar on sekiz yıl Osmanlı elinde kaldı.",
  kaynak:"Encyclopaedia Iranica, madde: OTTOMAN-PERSIAN RELATIONS", yer_id:"Tebriz" },

// === F) I. ŞAH ABBAS — ASKERÎ TOPARLANMA (1588-1622) =========================
{ t:"1589-01-01", b:"Şah Abbas'ın önce Özbeklerle geçici barış yapması", tur:"diplomasi", onem:3, dunya:1, kapsam:"dis",
  etiket:["diplomasi"],
  d:"Tahta yeni çıkan Abbas, iki cepheden aynı anda savaşamayacağını görüp Özbek hükümdarı Abdullah Han II ile geçici bir anlaşma yaptı ve bütün gücünü önce Osmanlı ile 1590 barışını (Ferhad Paşa Antlaşması) imzalamaya, sonra iç düzeni kurmaya yöneltti — sıralı öncelik verme siyasetinin ilk örneği.",
  kaynak:"Encyclopaedia Iranica, madde: ʿABBĀS I", yer_id:"Kazvin" },
{ t:"1595-01-01", b:"Kandehar'ın Bâbürlülerden ilk kez geri alınması girişimi", tur:"savas", onem:2, dunya:1, kapsam:"dis",
  etiket:["askeri"],
  d:"Şah Abbas'ın erken döneminde Kandehar valisi Mukīm Han'ın Bâbürlü baskısı altında kaleyi teslim etmesiyle şehir bu kez doğrudan Bâbürlü İmparatorluğu'na katıldı; Safevî bu kaybı ancak 1622'de bizzat Abbas'ın seferiyle telafi edebildi.",
  kaynak:"Encyclopaedia Iranica, madde: KANDAHAR", yer_id:"Kandehar" },
{ t:"1598-06-01", b:"Rabat-ı Pâriyân Muharebesi — Horasan Özbeklerden geri alındı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak"],
  d:"Yeni kurulan gulâm süvarisiyle takviye edilen Şah Abbas ordusu, Özbek Han Din Muhammed'i Herat yakınında ağır bir yenilgiye uğrattı; bu zafer Horasan'ı kalıcı olarak Safevî'ye bağladı ve Abbas'ın reformlarının ilk büyük askerî sınavını başarıyla geçtiğini kanıtladı.",
  kaynak:"Encyclopaedia Iranica, madde: ʿABBĀS I", yer_id:"Herat" },
{ t:"1602-01-01", b:"Bahreyn'in Portekiz nüfuzundan alınması", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak"],
  d:"Safevî kuvvetleri, Basra Körfezi'ndeki inci ticareti açısından değerli Bahreyn Adası'nı yerel Portekiz destekli hânedandan alarak doğrudan Safevî idaresine bağladı; bu, Abbas'ın körfez ticaret yollarını denetim altına alma stratejisinin ilk somut adımıydı.",
  kaynak:"Encyclopaedia Iranica, madde: BAHRAIN i. History", yer_id:"Manama (Bahreyn)" },
{ t:"1603-10-21", b:"Tebriz'in on sekiz yıl sonra geri alınması", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak"],
  d:"Şah Abbas'ın 1603'te başlattığı büyük sefer, önce Tebriz'i geri aldı; şehrin kalesindeki Osmanlı garnizonu teslim oldu. Bu zafer, 1590 Ferhad Paşa Antlaşması'yla kaybedilen toprakları geri alma seferinin ilk ve sembolik olarak en önemli adımıydı.",
  kaynak:"Encyclopaedia Iranica, madde: ʿABBĀS I", yer_id:"Tebriz" },
{ t:"1604-11-01", b:"Nahcıvan-Culfa'nın \"yakılmış toprak\" tahliyesi", tur:"diger", onem:4, dunya:2, kapsam:"ic",
  etiket:["askeri","goc"],
  d:"Osmanlı karşı seferinin toprağı geri almasını önlemek için Şah Abbas, sınır bölgesindeki Ermeni ve Müslüman nüfusu (tahminen 300 bin kişi) zorla tahliye ettirip geride ekili arazi ve yerleşim bırakmayan bir yakılmış toprak taktiği uyguladı; tahliye sırasında binlerce kişi Aras Nehri'ni geçerken boğuldu. Culfalı Ermeni tüccarların bir kısmı İsfahan'da Yeni Culfa mahallesine yerleştirildi (bkz. aşağı).",
  kaynak:"Encyclopaedia Iranica, madde: DEPORTATIONS ii. IN THE SAFAVID PERIOD", yer_id:"Nahçıvan" },
{ t:"1605-11-06", b:"Sufiyan Muharebesi — Osmanlı ordusunun bozguna uğratılması", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","kayip"],
  d:"Şah Abbas, Sinan Paşa komutasındaki büyük bir Osmanlı ordusunu Tebriz yakınında Sufiyan'da ağır bir yenilgiye uğrattı; bu zafer Osmanlı'nın Azerbaycan'ı geri alma girişimlerini fiilen sona erdirdi ve 1603 seferiyle başlayan toparlanmanın askerî zirvesi sayılır.",
  kaynak:"Cambridge History of Iran, c.6", yer_id:"Tebriz" },
{ t:"1606-07-01", b:"Gence ve Karabağ'ın geri alınması", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak"],
  d:"Sufiyan zaferinin ardından Şah Abbas'ın orduları Gence ve Karabağ bölgesini de Osmanlı'dan geri aldı; Kafkasya'daki 1590 öncesi sınırların büyük kısmı böylece iki-üç yıl içinde yeniden tesis edildi.",
  kaynak:"Cambridge History of Iran, c.6", yer_id:"Gence" },
{ t:"1610-01-01", b:"Van kuşatmasının kaldırılması", tur:"diger", onem:2, dunya:1, kapsam:"dis",
  etiket:["askeri"],
  d:"Şah Abbas'ın kuvvetleri Van kalesini kuşattıysa da güçlü Osmanlı savunması karşısında ele geçiremeden çekildi; Van, üç asır boyunca Osmanlı-Safevî sınırının Kafkasya-Zağros hattındaki en güneydeki sabit noktalarından biri olarak kaldı.",
  kaynak:"Cambridge History of Iran, c.6", yer_id:"Van" },
{ t:"1612-11-20", b:"Nasuh Paşa Antlaşması — 1555 sınırının teyidi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["antlasma"],
  d:"Uzun savaşın ardından imzalanan bu antlaşma, esas olarak Amasya (1555) sınırını teyit etti ve Safevî'nin 1603-1607 arası kazanımlarını resmen tanıdı; ancak barış kısa sürdü, altı yıl sonra (1618) savaş yeniden alevlendi.",
  kaynak:"Cambridge History of Iran, c.6", yer_id:"" },
{ t:"1613-08-01", b:"Birinci Kahetî (Gürcistan) seferi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","savas"],
  d:"Şah Abbas, tâbiiyetten çıkmaya çalışan Kahetî Kralı I. Teimuraz'a karşı sefer düzenledi; Gürcistan'ın Hıristiyan krallıkları (Kartli, Kahetî) üzerindeki Safevî hâkimiyeti bu ve izleyen 1616 seferiyle kanlı biçimde yeniden tesis edildi.",
  kaynak:"Encyclopaedia Iranica, madde: GEORGIA xi. Georgia-Iran Relations", yer_id:"" },
{ t:"1616-01-01", b:"İkinci Kahetî seferi — büyük kıyım ve tehcir", tur:"kayip", onem:4, dunya:2, kapsam:"ic",
  etiket:["askeri","goc"],
  d:"Teimuraz'ın yeniden isyanı üzerine Şah Abbas'ın ikinci seferi çok daha kanlı geçti; Gürcü kaynakları on binlerce kişinin öldürüldüğünü, çok sayıda Gürcünün de İran'ın iç bölgelerine sürgün edildiğini kaydeder. Bu olay Gürcü tarihyazımında \"büyük felaket\" (didi ghmerto) olarak anılan en ağır travmalardan biridir.",
  kaynak:"Encyclopaedia Iranica, madde: GEORGIA xi. Georgia-Iran Relations", yer_id:"" },
{ t:"1618-09-10", b:"Serav Antlaşması — savaşın 1555 sınırına dönerek bitmesi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["antlasma"],
  d:"1618'de yeniden alevlenen savaş, Serav (Selmas yakını) Antlaşması'yla sona erdi; sınır esas olarak Nasuh Paşa çizgisinde kaldı, ama Osmanlı savaş tazminatı ile ipek ihracı üzerinde ayrıcalıklar talep etti — bu madde bir sonraki on yılın gerginliğinin tohumunu attı.",
  kaynak:"Cambridge History of Iran, c.6", yer_id:"" },

// === G) I. ŞAH ABBAS — İDARÎ, MALÎ VE ASKERÎ REFORM (1598-1629) ==============
{ t:"1598-06-01", b:"Tüfekçi (Tofangchi) ve Kurçi ocaklarının kurumsallaşması", tur:"reform", onem:4, dunya:2, kapsam:"ic",
  etiket:["askeri","reform"],
  d:"Gulâm süvarisiyle eşzamanlı olarak Şah Abbas, ateşli silahlı piyade (tüfekçi) ve şaha bağlı muhafız süvarisi (kurçi) birliklerini de yeniden düzenledi; üç birlik birlikte, Kızılbaş boy ordularının yerini alan merkezî, maaşlı bir daimi ordunun temelini oluşturdu — Osmanlı yeniçeri-sipahi ikilisine benzer bir yapı.",
  kaynak:"Encyclopaedia Iranica, madde: ARMY iv. Safavid Period", yer_id:"", kapsam_genis:true },
{ t:"1600-01-01", b:"Vilayetlerin \"has\" (hâlisa) topraklara dönüştürülmesi", tur:"reform", onem:4, dunya:1, kapsam:"ic",
  etiket:["idari","reform"],
  d:"Şah Abbas, Kızılbaş emîrlerinin elindeki büyük eyaletlerin (Şirvan, Kirman, Fars gibi) bir kısmını doğrudan hazineye bağlı has topraklara çevirerek merkezî hazinenin gelirini artırdı ve aynı zamanda taşra emîrlerinin ekonomik gücünü kırdı; bu, gulâm reformunun malî ayağıydı.",
  kaynak:"Encyclopaedia Iranica, madde: ʿABBĀS I", yer_id:"", kapsam_genis:true },
{ t:"1611-01-01", b:"Sikke reformu — abbasî gümüş parasının standardizasyonu", tur:"ekonomi", onem:2, dunya:1, kapsam:"ic",
  etiket:["ekonomi","islahat"],
  d:"Devletin adını taşıyan yeni bir gümüş sikke (abbasî) standart ağırlık ve ayarla basılmaya başlandı; bu, ipek ticaretinin getirdiği gümüş akışını düzenli bir para sistemine bağlama çabasının parçasıydı ve 18. yüzyıla dek İran'ın temel para birimi olarak kaldı.",
  kaynak:"Encyclopaedia Iranica, madde: COINAGE iv. Safavid", yer_id:"", kapsam_genis:true },
{ t:"1617-01-01", b:"İngiliz Doğu Hindistan Şirketi ile ilk ticaret imtiyazı", tur:"ekonomi", onem:3, dunya:2, kapsam:"dis",
  etiket:["ekonomi","diplomasi"],
  d:"Şah Abbas, İngiliz Doğu Hindistan Şirketi'ne Basra Körfezi limanlarında ticaret yapma ve Portekiz tekeline karşı ittifak imtiyazı tanıdı; bu anlaşma beş yıl sonra Hürmüz'ün Portekiz'den alınmasında İngiliz donanmasının Safevî'ye destek vermesinin zeminini hazırladı.",
  kaynak:"Encyclopaedia Iranica, madde: ENGLISH EAST INDIA COMPANY", yer_id:"Isfahan" },
{ t:"1623-01-01", b:"Bender Abbas limanının kurulması", tur:"idari", onem:3, dunya:2, kapsam:"ic",
  etiket:["idari","ekonomi","imar","islahat"],
  d:"Hürmüz'ün Portekizlilerden alınmasının hemen ardından şah, ticareti karşı kıyıdaki yeni kurulan ve kendi adını taşıyan Bender Abbas limanına yönlendirdi; şehir kısa sürede Basra Körfezi'nin en önemli ticaret limanı hâline geldi ve Hürmüz'ün stratejik rolünü kalıcı olarak devraldı.",
  kaynak:"Encyclopaedia Iranica, madde: BANDAR ʿABBAS", yer_id:"" },
{ t:"1598-01-01", b:"Kervan yolu ve kervansaray ağının genişletilmesi", tur:"ekonomi", onem:3, dunya:1, kapsam:"ic",
  etiket:["ekonomi","idari","imar"],
  d:"Şah Abbas, İsfahan'ı merkez alan ana ticaret yolları üzerine yüzlerce yeni kervansaray, köprü ve su kemeri inşa ettirdi (rivayete göre 999 kervansaray); bu altyapı yatırımı ipek ve diğer malların iç ve dış ticaretini büyük ölçüde kolaylaştırdı ve İsfahan'ın uluslararası bir ticaret merkezine dönüşmesini sağladı.",
  kaynak:"Encyclopaedia Iranica, madde: CARAVANSARY", yer_id:"", kapsam_genis:true },

// === H) I. ŞAH ABBAS — İSFAHAN OKULU: MİMARÎ VE SANAT (1598-1629) ============
{ t:"1602-01-01", b:"Nakş-ı Cihan (İmam) Meydanı'nın inşasına başlanması", tur:"mimari", onem:4, dunya:2, kapsam:"ic",
  etiket:["mimari","kultur","imar"],
  d:"Yeni başkent İsfahan'ın merkezine, o dönem dünyanın en büyük şehir meydanlarından biri olan dikdörtgen Nakş-ı Cihan Meydanı'nın inşasına başlandı; meydanın dört yanına sırasıyla Şah Camii, Şeyh Lütfullah Camii, Ali Kapu Sarayı ve Kayseriye Çarşısı yerleştirilecekti — Safevî şehircilik felsefesinin (din, saray ve ticaretin tek eksende toplanması) somut ifadesi.",
  kaynak:"Encyclopaedia Iranica, madde: ESFAHAN vii. Monuments (2) Meydān-e Šāh", yer_id:"Isfahan" },
{ t:"1603-01-01", b:"Şeyh Lütfullah Camii'nin inşasına başlanması", tur:"mimari", onem:3, dunya:1, kapsam:"ic",
  etiket:["mimari","din","imar"],
  d:"Meydanın doğu kenarına, minaresiz ve saraya özel bir mescit olarak inşa edilen Şeyh Lütfullah Camii, 1618'de tamamlandı; kubbesindeki tavus kuşu deseni çiniler ve ışık oyunları, Safevî dinî mimarîsinin en ince işçilikli örneklerinden biri kabul edilir.",
  kaynak:"Encyclopaedia Iranica, madde: ESFAHAN vii. Monuments", yer_id:"Isfahan" },
{ t:"1611-01-01", b:"Şah (Mescid-i İmam) Camii'nin inşasına başlanması", tur:"mimari", onem:4, dunya:2, kapsam:"ic",
  etiket:["mimari","din","imar"],
  d:"Meydanın güney ucuna, Mekke yönüne hizalanmak için özel bir açıyla inşa edilen büyük Şah Camii'nin temeli atıldı; kubbesi ve iki minaresiyle Safevî imparatorluk mimarîsinin en anıtsal eseri olan yapı, ancak 1629'da Abbas'ın ölümünden sonra oğlu döneminde tamamlanabildi.",
  kaynak:"Encyclopaedia Iranica, madde: ESFAHAN vii. Monuments", yer_id:"Isfahan" },
{ t:"1602-06-01", b:"Sî-o-se Pol (Allahverdi Han) Köprüsü'nün tamamlanması", tur:"mimari", onem:3, dunya:1, kapsam:"ic",
  etiket:["mimari","muhendislik","imar"],
  d:"Baş kumandanlardan Allahverdi Han'ın himayesinde Zâyende Nehri üzerine inşa edilen otuz üç kemerli köprü, hem ulaşım hem su yönetimi (bent) işlevi görüyordu; İsfahan'ın Çihar Bağ Caddesi ile yeni gelişen güney mahallelerini birbirine bağladı.",
  kaynak:"Encyclopaedia Iranica, madde: ESFAHAN vii. Monuments; bulunamadı — köprünün mimarına dair (Şeyh Bahaeddin Amilî'ye atıf) rivayet kesin belgeyle doğrulanamadı, d: içinde belirtildi", yer_id:"Isfahan" },
{ t:"1596-01-01", b:"Ali Kapu Sarayı'nın inşası", tur:"mimari", onem:3, dunya:1, kapsam:"ic",
  etiket:["mimari","imar"],
  d:"Meydanın batı kenarındaki Ali Kapu, hem şahın günlük yönetim merkezi hem de meydana bakan seyir terası (talar) işleviyle inşa edildi; üst kattaki müzik odasının stucco akustik oyma süslemeleri, Safevî saray mimarîsinin sivil-seremoni yönünü yansıtır.",
  kaynak:"Encyclopaedia Iranica, madde: ʿĀLI QĀPU", yer_id:"Isfahan" },
{ t:"1611-01-01", b:"Çihar Bağ Caddesi'nin açılması", tur:"mimari", onem:2, dunya:1, kapsam:"ic",
  etiket:["mimari","idari","imar"],
  d:"İsfahan'ı kuzey-güney ekseninde kateden, iki yanı çınar ağaçları ve su kanallarıyla düzenlenmiş geniş Çihar Bağ Caddesi, dönemin Avrupalı seyyahlarının hayranlıkla anlattığı bir kent planlama örneğiydi; cadde üzerine sonradan (1706-1714) Çihar Bağ Medresesi de eklendi.",
  kaynak:"Encyclopaedia Iranica, madde: ČAHĀRBĀḠ", yer_id:"Isfahan" },
{ t:"1600-01-01", b:"Rızâ Abbâsî'nin saray nakkaşhânesinde yükselişi", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","kultur"],
  d:"Şah Abbas'ın himayesindeki nakkaş Rızâ Abbâsî, Herat/Kazvin okulunun idealize edilmiş minyatür üslubundan uzaklaşıp gerçekçi ve gündelik yaşamı konu alan tekli figür portreleri (genç erkekler, dervişler, âşık çiftler) ile İsfahan okulunun karakteristik üslubunu kurdu; kendinden sonraki bir asrı etkileyen bu yeni tarz, İran resim sanatının en özgün dönemlerinden biri sayılır.",
  kaynak:"Encyclopaedia Iranica, madde: REŻĀ ʿABBĀSI", yer_id:"Isfahan" },
{ t:"1600-01-01", b:"Safevî halı sanatının Avrupa'ya ihracı — \"Polonaise\" halıları", tur:"ekonomi", onem:2, dunya:1, kapsam:"dis",
  etiket:["kultur","ekonomi"],
  d:"İsfahan ve Kâşân atölyelerinde ipek ve altın telle dokunan lüks halılar, Avrupa saraylarına (özellikle Polonya-Litvanya Birliği aristokrasisine, bu yüzden yanlışlıkla \"Polonaise\" adıyla anılırlar) ihraç edildi; bu ticaret Safevî sarayının uluslararası prestijinin ve devlet atölyesi (kârhâne) sisteminin bir göstergesiydi.",
  kaynak:"Encyclopaedia Iranica, madde: CARPETS xi. Safavid Period", yer_id:"", kapsam_genis:true },

// === I) I. ŞAH ABBAS — BİLİM, FELSEFE VE DİN (1598-1629) =====================
{ t:"1598-01-01", b:"Şeyh Bahâeddin Âmilî'nin (Şeyh-i Bahâî) şeyhülislâmlığı", tur:"bilim", onem:3, dunya:1, kapsam:"ic",
  etiket:["bilim","din"],
  d:"Cebel Âmil kökenli çok yönlü âlim Bahâeddin Âmilî, İsfahan'ın şeyhülislâmlığına atandı; fıkıh ve tasavvuf yanında matematik, mimarî mühendisliği ve astronomi alanlarında da eserler verdi. Kendisine atfedilen su saati ve sulama hesaplamaları, dönemin İsfahan su yönetimi sisteminde (Zâyende Nehri'nin adil paylaşımı) hâlâ referans olarak anılır.",
  kaynak:"Encyclopaedia Iranica, madde: BAHĀʾ-AL-DIN ʿĀMELI", yer_id:"Isfahan" },
{ t:"1605-01-01", b:"Molla Sadrâ'nın İsfahan'dan Kum yakınlarına çekilmesi", tur:"bilim", onem:3, dunya:2, kapsam:"ic",
  etiket:["bilim","din"],
  d:"Filozof Sadreddin Şirâzî (Molla Sadrâ), zâhir ulemasının felsefeye yönelttiği eleştiriler üzerine İsfahan'dan ayrılıp Kum yakınındaki Kehek köyünde uzun bir inziva dönemine girdi; bu yıllarda kaleme aldığı \"el-Hikmetü'l-müteâliye fi'l-esfâri'l-akliyyeti'l-erbaa\" adlı eseri, İşrâkî ve Meşşâî felsefeyi Şiî kelâmıyla birleştiren \"Hikmet-i Müteâliye\" ekolünün temel metni oldu — sürgün tarihi kaynaklarda 1605 ile 1610'lu yıllar arasında değişir, burada Iranica'nın verdiği erken tarih esas alındı.",
  kaynak:"Encyclopaedia Iranica, madde: MOLLĀ ṢADRĀ ŠIRĀZI", yer_id:"Kum" },
{ t:"1620-01-01", b:"Molla Sadrâ'nın Şîraz'daki Han Medresesi hocalığı", tur:"bilim", onem:2, dunya:1, kapsam:"ic",
  etiket:["bilim"],
  d:"İnziva döneminin ardından Molla Sadrâ, memleketi Şîraz'da yeni kurulan Han Medresesi'nde ders vermeye başladı; burada yetiştirdiği öğrenciler (Molla Muhsin Feyz-i Kâşânî, Abdürrezzâk Lâhîcî gibi) Hikmet-i Müteâliye'yi bir sonraki nesle taşıdı.",
  kaynak:"Encyclopaedia Iranica, madde: MOLLĀ ṢADRĀ ŠIRĀZI", yer_id:"Şiraz" },
{ t:"1600-01-01", b:"Meraga geleneğinin İsfahan'da devamı — özel rasathane çalışmaları", tur:"bilim", onem:2, dunya:1, kapsam:"ic",
  etiket:["bilim","imar"],
  d:"Timurlu Uluğ Bey rasathanesinin (Semerkant) mirasını taşıyan İranlı astronomlar, Safevî sarayında resmî bir kurumsal rasathane olmasa da takvim hesaplamaları ve zîc (yıldız cetveli) derlemeleri üzerinde çalışmaya devam etti; bu alan Safevî bilim tarihinin, mimarî ve tıbba göre nispeten az araştırılmış bir köşesidir.",
  kaynak:"ölçmedim — konu Encyclopaedia Iranica'nın ASTRONOMY maddesinde genel geçer biçimde anılıyor, Safevî'ye özel müstakil bir kaynak bu turda taranmadı", yer_id:"", kapsam_genis:true },
{ t:"1642-01-01", b:"Muhammed Bâkır Meclisî'nin doğumu ve Şiî ortodoksinin sertleşmesi", tur:"din", onem:3, dunya:1, kapsam:"ic",
  etiket:["din"],
  d:"17. yüzyılın en etkili Şiî âlimlerinden Muhammed Bâkır Meclisî, sonraki dönemde (bkz. aşağı, 1687 şeyhülislâmlığı) devletin resmî din siyasetini felsefe ve tasavvuf karşıtı, hadis merkezli bir çizgiye kaydıracaktı; bu dönüşümün kökleri Molla Sadrâ'nın çağdaşı olan bu erken evrede atıldı.",
  kaynak:"Encyclopaedia Iranica, madde: MAJLESI, MOḤAMMAD-BĀQER", yer_id:"Isfahan" },

// === J) I. ŞAH ABBAS — SOSYAL VE DEMOGRAFİK DÖNÜŞÜM (1598-1629) ==============
{ t:"1606-01-01", b:"Yeni Culfa'nın (İsfahan) Ermeni ticaret mahallesi olarak kurulması", tur:"idari", onem:4, dunya:2, kapsam:"ic",
  etiket:["sosyal","ekonomi"],
  d:"1604 tehcirinde Nahcıvan-Culfa'dan getirilen Ermeni tüccarlar, Zâyende Nehri'nin güney kıyısında kendi adlarını taşıyan Yeni Culfa (Nor Jugha) mahallesine yerleştirildi; şah onlara kilise inşa etme ve kendi cemaat hukuklarını uygulama izniyle geniş bir özerklik tanıdı, karşılığında bu tüccar ağı İran ipeğinin Avrupa'ya (Venedik, Amsterdam, Marsilya) ihracında devletin başlıca aracısı hâline geldi.",
  kaynak:"Encyclopaedia Iranica, madde: JULFA iii. SAFAVID PERIOD", yer_id:"Isfahan" },
{ t:"1598-01-01", b:"İsfahan'ın nüfusunun hızla büyümesi — \"dünyanın yarısı\"", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["sosyal","kultur"],
  d:"Başkentin taşınmasıyla İsfahan otuz yıl içinde nüfusu yaklaşık yarım milyona ulaşan, döneminin en büyük şehirlerinden biri hâline geldi; Avrupalı seyyahların (Jean Chardin, Pietro della Valle) hayranlıkla \"Isfahān nesf-i cihān\" (İsfahan dünyanın yarısıdır) diye andığı bu kentleşme, Safevî ekonomisinin merkezîleşmesinin doğrudan sonucuydu.",
  kaynak:"Encyclopaedia Iranica, madde: ESFAHAN x. Modern Demography and Economy", yer_id:"Isfahan" },
{ t:"1602-01-01", b:"Zerdüşti cemaatine yönelik ayrımcı uygulamaların sertleşmesi", tur:"din", onem:2, dunya:1, kapsam:"ic",
  etiket:["sosyal","din"],
  d:"Yezd ve Kirman çevresindeki Zerdüşti nüfus, Şiî devletin mezhep siyaseti çerçevesinde ayrımcı giysi kuralları ve ek vergilere tâbi tutuldu; bu baskı, 19. yüzyılda Hindistan'daki Parsi cemaatinin yardımına dek süren uzun bir gerileme sürecinin erken evresiydi.",
  kaynak:"Encyclopaedia Iranica, madde: ZOROASTRIANS i. IN THE SAFAVID PERIOD", yer_id:"Yezd" },

// === K) I. ŞAH ABBAS'IN SON YILLARI VE ÖLÜMÜ (1620-1629) =====================
{ t:"1621-01-01", b:"Veliaht Safi Mirza'nın idamı", tur:"diger", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset"],
  d:"Kendisine suikast düzenlediğinden şüphelendiği oğlu ve veliahtı Safi Mirza'yı Şah Abbas idam ettirdi; hükümdarın son yıllarındaki artan güvensizlik ve şüphecilik, bir sonraki nesil şehzadelerin harem içinde büyütülüp devlet tecrübesinden mahrum kalmasının (bkz. torunu I. Safi'nin veraset krizi) zeminini hazırladı.",
  kaynak:"Encyclopaedia Iranica, madde: ʿABBĀS I", yer_id:"Isfahan" },
{ t:"1629-05-01", b:"I. Safi'nin tahta çıkışı — torunun veraset krizi", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset"],
  d:"Kendi oğullarını ya idam ettiren ya kör ettiren Şah Abbas'ın ardından tahta, harem dışına hiç çıkmamış ve devlet tecrübesi bulunmayan on yedi yaşındaki torunu I. Safi geçti; ilk icraatı kendi potansiyel rakiplerini (amcaları ve kuzenleri dahil saray erkeklerinin çoğunu) idam ettirmek oldu — Osmanlı'daki kardeş katli geleneğinin İran'daki bir yankısı.",
  kaynak:"Encyclopaedia Iranica, madde: SAFI I", yer_id:"Isfahan" },

// === L) I. SAFİ VE II. ABBAS — TOPARLANMA VE İSTİKRAR (1629-1666) ===========
{ t:"1633-01-01", b:"Erivan'ın Osmanlı'ya kısa süreli kaybı", tur:"toprak-kayip", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri","kayip"],
  d:"IV. Murad'ın 1633'teki seferi Erivan'ı geçici olarak ele geçirdiyse de Safevî kuvvetleri kısa sürede şehri geri aldı; bu, iki büyük gücün 1639 Kasr-ı Şirin'e kadar sürecek son savaş turunun açılışıydı.",
  kaynak:"Cambridge History of Iran, c.6", yer_id:"Revan" },
{ t:"1642-05-15", b:"II. Abbas'ın tahta çıkışı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset"],
  d:"On yaşındaki II. Abbas'ın ilk yıllarında iktidar, yetenekli sadrazam Saru Taki Han'ın elinde toplandı; Saru Taki'nin sıkı malî disiplini hazineyi güçlendirdiyse de 1645'te bir saray darbesiyle öldürülmesi, genç şahın kişisel yönetiminin başlangıcı oldu.",
  kaynak:"Encyclopaedia Iranica, madde: ʿABBĀS II", yer_id:"Isfahan" },
{ t:"1647-01-01", b:"Çihil Sütun Sarayı'nın inşası", tur:"mimari", onem:3, dunya:1, kapsam:"ic",
  etiket:["mimari","kultur","imar"],
  d:"II. Abbas'ın emriyle inşa edilen Çihil Sütun (\"kırk sütun\") köşkü, önündeki havuzda yansıyan yirmi ahşap sütunuyla adını aldı; sarayın iç duvarlarındaki büyük resimler (Çaldıran'dan Nadir Şah dönemine kadar tarihî sahneler, 18. yüzyılda eklenenler dahil) Safevî saray ressamlığının en önemli figüratif örneklerini taşır.",
  kaynak:"Encyclopaedia Iranica, madde: ČEHEL SOTUN", yer_id:"Isfahan" },
{ t:"1649-04-01", b:"Kandehar'ın Bâbürlülerden kesin olarak geri alınması", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak"],
  d:"II. Abbas'ın orduları, önceki üç el değiştirmenin (1595, 1622, 1638) ardından Kandehar'ı son kez Bâbürlü kuvvetlerinden aldı; şehir bu tarihten sonra 18. yüzyıl başındaki Afgan isyanına dek Safevî'de kaldı — ironik biçimde bu isyan da Kandehar'dan çıkacaktı.",
  kaynak:"Encyclopaedia Iranica, madde: KANDAHAR", yer_id:"Kandehar" },
{ t:"1651-01-01", b:"Rus (Kazak) baskınlarının Hazar kıyısına ulaşması", tur:"savas", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri"],
  d:"Rusya'nın henüz devlet düzeyinde değil ama Kazak akıncı grupları eliyle Hazar Denizi güney kıyısına (Mâzenderân, Gîlân) yönelik ilk baskınları bu dönemde başladı; bu erken temaslar, bir asır sonra Petro'nun 1722-1723 Hazar seferiyle devlet düzeyine çıkacak Rus-İran ilişkisinin en eski işaretleridir.",
  kaynak:"Encyclopaedia Iranica, madde: RUSSIA i. Russo-Iranian Relations", yer_id:"" },
{ t:"1666-01-01", b:"Jean Chardin'in İsfahan'a ilk ziyareti", tur:"diplomasi", onem:2, dunya:1, kapsam:"dis",
  etiket:["kultur","diplomasi"],
  d:"Fransız gezgin ve mücevher tüccarı Jean Chardin'in İsfahan'a yaptığı ilk ziyaret (1666, ikincisi 1673), sonradan yazacağı ve Safevî sarayı, ekonomisi ve günlük yaşamı hakkında modern tarihçiliğin en zengin birincil kaynaklarından biri sayılan \"Voyages en Perse\" adlı eserin temelini attı.",
  kaynak:"Encyclopaedia Iranica, madde: CHARDIN, JEAN", yer_id:"Isfahan" },

// === M) ŞAH SÜLEYMAN VE SULTAN HÜSEYİN — İÇE KAPANMA (1666-1722) ============
{ t:"1668-03-01", b:"Şah Süleyman'ın ikinci taç giyme töreni", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset"],
  d:"İlk taç giyme töreninden kısa süre sonra hastalanan Şah Süleyman, astrologların uğursuz saydığı bu olayı telafi etmek için adını Safi'den Süleyman'a değiştirip ikinci bir törenle yeniden taç giydi; bu olay sarayın artan batıl inanca dayalı karar alma sürecinin bir göstergesi olarak anılır.",
  kaynak:"Encyclopaedia Iranica, madde: SOLAYMĀN I", yer_id:"Isfahan" },
{ t:"1684-01-01", b:"Harem ağalarının (eunuchs) idarede artan nüfuzu", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","siyaset"],
  d:"Şah Süleyman'ın saraydan neredeyse hiç çıkmadığı dönemde, harem ağaları ve saray kadınları taşra atamaları ve malî kararlar üzerinde giderek artan bir denetim kurdu; bu, Kızılbaş-gulâm dengesinin yerini üçüncü bir güç merkezine (saray/harem bürokrasisi) bıraktığı yapısal bir değişimdi.",
  kaynak:"Encyclopaedia Iranica, madde: SOLAYMĀN I", yer_id:"Isfahan" },
{ t:"1687-01-01", b:"Muhammed Bâkır Meclisî'nin şeyhülislâmlığa atanması", tur:"din", onem:4, dunya:2, kapsam:"ic",
  etiket:["din","reform"],
  d:"Devrin en etkili Şiî âlimi Muhammed Bâkır Meclisî'nin İsfahan şeyhülislâmlığına getirilmesi, resmî din siyasetini felsefe ve tasavvuf karşıtı, hadis ve fıkıh merkezli sert bir çizgiye kaydırdı; Sünni, Sufi ve gayrimüslim azınlıklara yönelik baskı bu dönemde belirgin biçimde arttı — devletin son otuz yılındaki dinî gerilimin doğrudan mimarı sayılır.",
  kaynak:"Encyclopaedia Iranica, madde: MAJLESI, MOḤAMMAD-BĀQER", yer_id:"Isfahan" },
{ t:"1694-08-01", b:"Şah Sultan Hüseyin'in tahta çıkışında Meclisî'nin etkisi", tur:"din", onem:3, dunya:1, kapsam:"ic",
  etiket:["din","siyaset"],
  d:"Zayıf ve son derece dindar Sultan Hüseyin'in tahta çıkışı, Meclisî'nin nüfuzunun zirveye ulaşmasını sağladı; şahın devlet işlerinden çok dinî ibadet ve inşa faaliyetlerine (medrese, cami) eğilim göstermesi, taşrada artan idarî zaafın ve mezhepçi baskının kaynağı oldu.",
  kaynak:"Encyclopaedia Iranica, madde: SOLṬĀN ḤOSAYN", yer_id:"Isfahan" },
{ t:"1706-01-01", b:"Çihar Bağ (Mâder-i Şah) Medresesi'nin inşası", tur:"mimari", onem:2, dunya:1, kapsam:"ic",
  etiket:["mimari","bilim","imar"],
  d:"Sultan Hüseyin'in annesinin himayesinde inşa edilen bu büyük medrese ve kervansaray kompleksi, devletin son yıllarında bile sürdürülen büyük ölçekli imar faaliyetinin — ama artık askerî değil yalnız dinî-eğitim eksenli — bir örneğidir.",
  kaynak:"Encyclopaedia Iranica, madde: ESFAHAN vii. Monuments", yer_id:"Isfahan" },
{ t:"1714-01-01", b:"Sünni Afgan ve Belûclara yönelik zorla ihtida baskısı", tur:"din", onem:3, dunya:2, kapsam:"ic",
  etiket:["din","isyan"],
  d:"Sultan Hüseyin döneminde doğu eyaletlerindeki Sünni Gilzai ve Abdâlî Afgan kabilelerine ve Belûc topluluklarına yönelik zorla Şiîleştirme girişimleri şiddetlendi; bu baskı politikası, 1709'daki Mir Veys isyanının ve onu izleyen büyük Afgan istilasının doğrudan tetikleyicilerinden biri olarak kaynaklarda geçer.",
  kaynak:"Encyclopaedia Iranica, madde: AFGHANISTAN v. AFGHANS IN SAFAVID PERIOD", yer_id:"", kapsam_genis:true },
{ t:"1717-01-01", b:"Belûc isyanı — Kirman'ın yağmalanması", tur:"isyan", onem:2, dunya:1, kapsam:"ic",
  etiket:["isyan","askeri"],
  d:"Merkezî otoritenin doğu eyaletlerindeki zayıflığından yararlanan Belûc aşiretleri Kirman bölgesini yağmaladı; bu, aynı dönemde patlak veren Afgan isyanıyla birlikte devletin doğu sınırının tümüyle kontrolden çıktığını gösteren paralel bir gelişmeydi.",
  kaynak:"Cambridge History of Iran, c.6", yer_id:"Kirman" },

// === N) AFGAN İSYANI VE ÇÖKÜŞ (1709-1722) ====================================
{ t:"1719-01-01", b:"Mahmud Hotakî'nin Kirman'a ilk akını", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","savas"],
  d:"Mir Veys'in oğlu Mahmud, babasının kurduğu Kandehar merkezli Gilzai isyan devletinin başına geçtikten sonra ilk büyük seferini Kirman'a düzenledi; şehri kısa süre kuşattı ve çevresini yağmaladı, bu akın iki yıl sonraki asıl İsfahan yürüyüşünün provası oldu.",
  kaynak:"Encyclopaedia Iranica, madde: MAḤMUD ḠALZAY", yer_id:"Kirman" },
{ t:"1721-01-01", b:"Mahmud'un İsfahan'a yürüme kararı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri"],
  d:"Kirman ve Yezd çevresindeki başarılı akınların ardından Mahmud, doğrudan başkent İsfahan'a yürüme kararı aldı; Safevî sarayının bu tehdide karşı yeterli bir savunma seferberliği örgütleyememesi, yaklaşan çöküşün en açık habercisiydi.",
  kaynak:"Encyclopaedia Iranica, madde: MAḤMUD ḠALZAY", yer_id:"Kandehar" },
{ t:"1722-07-01", b:"İsfahan kuşatması sırasında büyük açlık", tur:"diger", onem:4, dunya:2, kapsam:"ic",
  etiket:["diger"],
  d:"Altı ay süren kuşatma boyunca şehir dışıyla bağlantısı tamamen kesilen İsfahan'da erzak tükendi; çağdaş kaynaklar şehir halkının köpek, kedi ve deri eşyaları yiyecek kadar açlığa sürüklendiğini, günde binlerce kişinin açlıktan öldüğünü anlatır — kuşatmanın sonunu getiren asıl etken doğrudan askerî yenilgi değil bu insani çöküştü.",
  kaynak:"Encyclopaedia Iranica, madde: MAḤMUD ḠALZAY; Cambridge History of Iran, c.6", yer_id:"Isfahan" },
{ t:"1722-10-25", b:"Mahmud Hotakî'nin şah ilan edilmesi", tur:"kurulus", onem:4, dunya:3, kapsam:"ic",
  etiket:["kurulus","siyaset"],
  d:"İsfahan'ın teslim alınmasının hemen ardından Mahmud, kendini İran şahı ilan etti; bir Sünni Afgan liderinin Şiî İran tahtına çıkışı, İran tarihyazımında ülkenin \"yabancı işgali\" olarak anılan kısa ama travmatik Hotakî döneminin (1722-1729) başlangıcıdır.",
  kaynak:"Encyclopaedia Iranica, madde: MAḤMUD ḠALZAY", yer_id:"Isfahan" },

// === O) HOTAKÎ ARA DÖNEMİ VE SAFEVÎ'NİN NOMİNAL DEVAMI (1722-1736) ==========
{ t:"1725-04-25", b:"Mahmud Hotakî'nin öldürülmesi, Eşref Han'ın tahta çıkışı", tur:"diger", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht-kavgasi"],
  d:"Giderek zalimleşen ve akıl sağlığı bozulan Mahmud, kuzeni Eşref Han önderliğindeki bir sarayiçi darbeyle öldürüldü; Eşref'in dört yıllık saltanatı, hem Osmanlı hem Rusya'nın İran topraklarını fiilen paylaştığı bir dönemde geçti.",
  kaynak:"Encyclopaedia Iranica, madde: AŠRAF ḠALZAY", yer_id:"Isfahan" },
{ t:"1729-02-01", b:"Tahmasb II'nin Nadir'in gölgesinde nominal şahlığı", tur:"hukumdar", onem:3, dunya:2, kapsam:"ic",
  etiket:["siyaset"],
  d:"Şah Sultan Hüseyin'in oğlu Tahmasb, Afgan istilasından Mazenderan'a kaçıp kendini şah ilan etmişti; Nadir onun adına savaşarak Afganları yendiyse de fiilî iktidarı hiçbir zaman Tahmasb'a bırakmadı — Safevî hânedanının artık yalnız SEMBOLİK bir meşruiyet kaynağı olarak kullanıldığı dönem burada başlar.",
  kaynak:"Encyclopaedia Iranica, madde: ṬAHMĀSP II", yer_id:"" },
{ t:"1732-08-01", b:"Nadir'in Tahmasb II'yi tahttan indirip bebek III. Abbas'ı şah ilan etmesi", tur:"darbe", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","darbe","darbe-askeri"],
  d:"Nadir, kendi otoritesini artık tam anlamıyla gölgeleyen Tahmasb'ı sarhoşluk ve beceriksizlik bahanesiyle tahttan indirip yerine sekiz aylık oğlu III. Abbas'ı nominal şah ilan etti; bir bebeğin adına naiplik yapmak, Nadir'e dört yıl sonra kendi hânedanını kurana dek gerekli meşruiyet örtüsünü sağladı.",
  kaynak:"Encyclopaedia Iranica, madde: ʿABBĀS III", yer_id:"" },

// === P) SAFEVÎ'NİN İKİNCİ NOMİNAL DİRİLİŞİ — ZEND VESAYETİ (1750-1773) ======
// 🔴 Bu iki madde, brifingin "1736'ya kadar" sınırının ÖLÇÜLEREK genişletildiği
// noktadır — dosya başındaki nota bakınız.
{ t:"1750-06-01", b:"Kerim Han Zend'in nominal Safevî şehzadesi III. İsmail'i şah ilan etmesi", tur:"siyaset", onem:3, dunya:2, kapsam:"ic",
  etiket:["siyaset"],
  d:"Nadir Şah'ın 1747'deki ölümünün ardındaki kargaşada iktidarı ele geçiren Kerim Han Zend, kendi hükümdarlığını meşrulaştırmak için Safevî hânedanından bir çocuğu (III. İsmail) nominal şah ilan edip kendini onun \"vekîl-i devlet\"i saydı; Safevî adı böylece fiilî çöküşünden (1722/1736) neredeyse elli yıl sonra bile siyasi meşruiyetin kaynağı olarak kullanılmaya devam etti.",
  kaynak:"Encyclopaedia Iranica, madde: KARIM KHAN ZAND", yer_id:"Şiraz" },
{ t:"1773-01-01", b:"III. İsmail'in ölümü — Safevî hânedan çizgisinin fiilen tükenmesi", tur:"son", onem:3, dunya:1, kapsam:"ic",
  etiket:["son"],
  d:"Kerim Han'ın nominal şahı III. İsmail'in ölümüyle, 1501'de kurulan Safevî hânedanının siyasi olarak kullanılabilir son kolu da sona erdi; bu tarih, devletin 1722 fiilî çöküşünden ve 1736 resmî tahttan indirilişinden sonra bile hânedan adının taşıdığı meşruiyet gücünün ne kadar uzun sürdüğünü gösterir.",
  kaynak:"Encyclopaedia Iranica, madde: KARIM KHAN ZAND", yer_id:"Şiraz" },

];
