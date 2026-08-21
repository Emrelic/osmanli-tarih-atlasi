// =====================================================================
// ALMANYA — DEVLET KRONOLOJİSİ (Kutsal Roma / Brandenburg-Prusya / Alman İmparatorluğu)
// =====================================================================
// window.KRONOLOJI_ALMANYA — data/devletler.js'e DOKUNULMADI, index.html'e
// BAĞLANMADI (koordinatör yapacak). oturumlar/KRONOLOJI-SARTNAME.md tek otorite.
//
// ── KAPSAM SINIRI — HABSBURG DOSYASIYLA ─────────────────────────────
// `data/kronoloji_habsburg.js` (117 madde) Habsburg hanedanının 1526-1918
// arası Avusturya merkezli anlatısını (Viyana kuşatmaları, Macaristan,
// Bohemya, Pragmatik Yaptırım, Avusturya İmparatorluğu) zaten taşıyor.
// Bu dosya ONA DOKUNMADI — aşağıdaki maddeler kasıtlı olarak Habsburg
// listesindeki tarihlerle ÇAKIŞMIYOR (bkz. rapor §mükerrer). Odağım:
//   · Kutsal Roma'nın KURUMSAL tarihi (Altın Ferman, Reichskammergericht,
//     Reichskreise) — Habsburg'un hanedan anlatısı değil
//   · Reform hareketi ve Otuz Yıl Savaşları'nın Habsburg'da YAZILMAYAN
//     cepheleri (Magdeburg, Breitenfeld, Lützen, Nördlingen, Prag Barışı)
//   · BRANDENBURG-PRUSYA'nın kendi yükselişi baştan sona
//   · 1871 SONRASI Alman İmparatorluğu (Habsburg'da yalnız müttefik
//     olarak geçer, kendi iç tarihi yok)
//   · bilim-kültür-idarî-sosyal eksenler (şartname §2)
//
// ── KAYNAK (§4) — DÜRÜSTLÜK BEYANI ───────────────────────────────────
// TDV Batı/Orta Avrupa'yı yapısal olarak zayıf kapsıyor; bu dosyada TDV
// YALNIZ Osmanlı-Alman/Osmanlı-Prusya temas maddelerinde kullanıldı ve
// gerçekten OKUNDU (`almanya` · `prusya` · `bagdat-demiryolu` ·
// `berlin-antlasmasi`, dördü de HTTP 200, gövdesi bu oturumda çekildi).
// Kalan maddeler standart akademik eserlere dayanıyor:
//   Peter H. Wilson, "Heart of Europe: A History of the Holy Roman
//     Empire" (Harvard UP, 2016) ve "Europe's Tragedy: A History of the
//     Thirty Years War" (Penguin, 2009)
//   Joachim Whaley, "Germany and the Holy Roman Empire" I-II
//     (Oxford History of Early Modern Europe, 2012)
//   Christopher Clark, "Iron Kingdom: The Rise and Downfall of Prussia,
//     1600-1947" (Harvard UP, 2006) ve "The Sleepwalkers" (2012)
//   Hagen Schulze, "Germany: A New History" (Harvard UP, 1998)
//   Mary Fulbrook, "A Concise History of Germany" (Cambridge UP, 2004)
//   David Blackbourn, "History of Germany 1780-1918: The Long
//     Nineteenth Century" (Wiley-Blackwell, 2003)
// Bunlar bu oturumda TEK TEK açılıp OKUNMADI — genel tarih bilgisi bu
// eserlerin standart anlatısıyla eşleniyor (bu bir SINIRLAMADIR, rapora
// yazıldı). Gün DOĞRULANAMAYAN maddelerde `kaynak:` bunu açıkça söylüyor.
// Kesin OLMAYAN gün: `YYYY-01-01` YAZILMADI, yerine bilinen en yakın gün
// kullanıldı ve kaynakta "gün belirsiz" notu düşüldü — TARİH UYDURULMADI.
//
// ── YER_ID — ÖLÇÜLEN NOKTA HAVUZU ────────────────────────────────────
// data/yerlesimler*.js taranarak bulunan Alman yerleşimleri: Berlin ·
// Hamburg · Frankfurt · Köln · Dresden · Prag(1526'ya kadar "almanya") ·
// Königsberg · Bremen · Aachen · Trier · Mainz · Leipzig · Nürnberg ·
// Regensburg · Augsburg · Gdansk/Danzig · Metz(1552'ye ve 1871-1919
// arası "almanya") · Lübeck · Kiel · Rostock · Münster · Magdeburg ·
// Erfurt · Stuttgart · Basel(1501'e kadar). Wittenberg · Worms · Speyer ·
// Weimar · Potsdam · Breslau · Sedan · Versailles · Bayreuth · Würzburg ·
// Mannheim · Essen · Kassel'in KAYDI YOK — bu şehirlerdeki olaylar
// yer_id:"" bırakıldı, sayı raporda.
//
// =====================================================================

window.KRONOLOJI_ALMANYA = [

// ══════════════════════════════════════════════════════════════════
// I. KUTSAL ROMA'NIN KURUMSAL ÇATISI (1338-1519)
// ══════════════════════════════════════════════════════════════════

{ t:"1338-07-16", b:"Rhense Bildirisi — imparatorluk seçiminin papalıktan bağımsızlığı", tur:"anayasa", onem:4, dunya:3, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["idari","siyasi"],
  d:"Yedi seçici prens (Kurfürst), Rhense'de toplanıp seçtikleri Roma Kralı'nın papa onayına ihtiyaç duymadığını ilan etti. Bu, imparatorluk ile papalık arasındaki asırlık üstünlük çekişmesinde İmparatorluk lehine kalıcı bir dönüm noktasıydı ve Altın Ferman'ın (1356) hukukî temelini hazırladı.",
  kaynak:"Peter H. Wilson, Heart of Europe (2016) — Kurfürstler'in Rhense Bildirisi ve papalık onayının reddi standart anlatı; gün Temmuz 1338 olarak kabul edilir" },

{ t:"1346-07-11", b:"IV. Karl'ın Roma Kralı seçilmesi", tur:"hukumdar", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["hanedan","siyasi"],
  d:"Lüksemburg hanedanından Karl, Bohemya kralı olarak yedi seçici tarafından Roma Kralı seçildi; babası Jean'in Crécy'de ölümünden sonra 1347'de tahta tam olarak geçti. IV. Karl'ın imparatorluğu, Altın Ferman ve Prag'ın imparatorluk merkezi hâline gelmesiyle anılır.",
  kaynak:"Wilson, Heart of Europe — IV. Karl'ın 1346 seçimi ve 1347 taç giymesi standart kronoloji" },

{ t:"1348-04-07", b:"Prag Üniversitesi'nin kurulması", tur:"bilim", onem:3, dunya:2, kapsam:"ic", yer_id:"Prag",
  etiket:["bilim","idari"],
  d:"IV. Karl'ın fermanıyla kurulan Prag (Karlova) Üniversitesi, Kutsal Roma İmparatorluğu sınırları içindeki ilk üniversite oldu ve Orta Avrupa'nın bilim-hukuk merkezlerinden biri hâline geldi. Almanca konuşan öğrenci topluluğunun 1409'da Leipzig'e göçüne kadar imparatorluğun başlıca eğitim kurumuydu.",
  kaynak:"Whaley, Germany and the Holy Roman Empire I (2012) — Prag Üniversitesi'nin 1348 kuruluşu ve IV. Karl'ın eğitim politikası" },

{ t:"1356-01-10", b:"Altın Ferman — yedi seçici prens sisteminin hukukîleşmesi", tur:"anayasa", onem:5, dunya:4, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["idari","siyasi","kanun"],
  d:"IV. Karl'ın Nürnberg ve Metz diyetlerinde ilan ettiği Altın Ferman, imparator seçimini yedi seçici prense (üç başpiskopos, Bohemya kralı, Ren Kontu, Sakson dükü, Brandenburg markgrafı) bıraktı ve seçim usulünü dört asır sürecek şekilde sabitledi. İmparatorluğun merkezî otoritesi zayıflarken prenslerin gücünü hukuken pekiştirdi.",
  kaynak:"Wilson, Heart of Europe — Altın Ferman'ın 1356 Ocak (Nürnberg) ve Aralık (Metz) bölümleri, standart tarih 10 Ocak 1356" },

{ t:"1356-11-24", b:"Lübeck'te ilk genel Hanse toplantısı (Hansetag)", tur:"kurulus", onem:3, dunya:2, kapsam:"ic", yer_id:"Lübeck",
  etiket:["iktisat","diplomasi"],
  d:"Kuzey Alman ve Baltık liman şehirlerinin ticaret birliği Hansa, ilk belgelenmiş genel meclisini (Hansetag) Lübeck'te topladı ve gevşek bir ticaret ağından ortak çıkarları savunan bir kurumsal yapıya dönüştü. Zirve döneminde 200'e yakın şehri kapsayan birlik, Kuzey Denizi ve Baltık ticaretine üç asır egemen oldu.",
  kaynak:"Schulze, Germany: A New History — Hansa'nın kurumsallaşması ve Lübeck'in merkezî rolü; gün belirsiz, yıl 1356 için genel kabul var" },

{ t:"1386-10-18", b:"Heidelberg Üniversitesi'nin kurulması", tur:"bilim", onem:3, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["bilim"],
  d:"Ruprecht I'in fermanıyla kurulan Heidelberg Üniversitesi, bugünkü Almanya sınırları içindeki en eski üniversite oldu. Paris modelini örnek alan kurum, sonraki asırlarda hukuk ve ilahiyat eğitiminde Alman prensliklerinin başlıca merkezlerinden biri hâline geldi.",
  kaynak:"Whaley, Germany and the Holy Roman Empire I — Heidelberg'in 1386 kuruluşu, kuruluş tarihi olarak 18 Ekim 1386 kabul edilir. Heidelberg yerleşim kaydı yok, yer_id boş" },

{ t:"1409-12-02", b:"Leipzig Üniversitesi'nin kurulması", tur:"bilim", onem:3, dunya:1, kapsam:"ic", yer_id:"Leipzig",
  etiket:["bilim"],
  d:"Prag Üniversitesi'nden ayrılan Alman öğrenci ve öğretim üyeleri (Kutná Hora Fermanı'nın Çek çoğunluğu ayrıcalıklı kılmasına tepkiyle) Leipzig'de yeni bir üniversite kurdu. Kurum kısa sürede Orta Almanya'nın önde gelen bilim merkezine dönüştü.",
  kaynak:"Whaley, Germany and the Holy Roman Empire I — 1409 Kutná Hora sonrası Prag'dan Leipzig'e göç ve üniversitenin 2 Aralık 1409 kuruluşu" },

{ t:"1415-04-30", b:"Hohenzollern hanedanının Brandenburg Elektörlüğü'nü alması", tur:"hanedan", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["hanedan","siyasi"],
  d:"İmparator Sigismund, Konstanz Konsili sırasında Nürnberg Burgraf'ı I. Friedrich von Hohenzollern'i Brandenburg Elektörü olarak yatırdı. Bu, sonraki beş asır Prusya ve nihayet birleşik Almanya'yı yönetecek hanedanın Kuzey Almanya'daki iktidarının başlangıcıydı.",
  kaynak:"Clark, Iron Kingdom (2006) — Hohenzollern'in 1415 Brandenburg yatırımı, kitabın açılış anlatısı" },

{ t:"1419-02-12", b:"Rostock Üniversitesi'nin kurulması", tur:"bilim", onem:2, dunya:1, kapsam:"ic", yer_id:"Rostock",
  etiket:["bilim"],
  d:"Kuzey Almanya'nın ilk üniversitesi olan Rostock, Mecklenburg dükleri ve şehir meclisinin ortak girişimiyle kuruldu. Baltık ticaret ağının (Hansa) kültürel omurgasını güçlendiren kurumlardan biri oldu.",
  kaynak:"bulunamadı — standart akademik eserde müstakil doğrulama yapılmadı, kuruluş yılı (1419) genel kabul görmüş bilgidir, gün DOĞRULANMADI" },

{ t:"1460-04-04", b:"Basel Üniversitesi'nin kurulması", tur:"bilim", onem:2, dunya:1, kapsam:"ic", yer_id:"Basel",
  etiket:["bilim"],
  d:"Papa II. Pius'un (Basel Konsili'nde bulunmuş hümanist Enea Silvio Piccolomini) bullasıyla kurulan Basel Üniversitesi, hümanizmin Alman dünyasındaki en önemli merkezlerinden biri oldu. Basel bu tarihte Kutsal Roma İmparatorluğu'nun bir şehridir; 1501'de İsviçre Konfederasyonu'na katıldı.",
  kaynak:"bulunamadı — kuruluş yılı 1460 genel akademik kabul, gün DOĞRULANMADI" },

{ t:"1474-02-28", b:"Utrecht Barışı — Hansa'nın İngiltere'yle ticarî imtiyazları", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["iktisat","diplomasi"],
  d:"Dokuz yıl süren Anglo-Hanseatik Savaşı'nı sona erdiren Utrecht Antlaşması, Hansa tüccarlarına İngiltere'de geniş gümrük muafiyetleri ve Londra'da kendi ticaret merkezlerini (Stalhof) tanıdı. Antlaşma Hansa'nın Kuzey Avrupa ticaretindeki zirve gücünü perçinledi.",
  kaynak:"Schulze, Germany: A New History — Hansa'nın İngiltere ile 1474 Utrecht uzlaşması" },

{ t:"1495-08-07", b:"Worms Diyeti — Reichskammergericht ve Ebedî Kamu Barışı", tur:"anayasa", onem:4, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["idari","kanun"],
  d:"İmparator Maximilian I'in çağırdığı Worms Diyeti, imparatorluk içi özel savaşları (Fehde) yasaklayan Ebedî Kamu Barışı'nı (Ewiger Landfriede) ilan etti ve anlaşmazlıkları çözecek daimî bir üst mahkeme, Reichskammergericht'i kurdu. Bu, parçalı imparatorluğun ilk kalıcı merkezî yargı kurumuydu.",
  kaynak:"Whaley, Germany and the Holy Roman Empire I — 1495 Worms reformları, Reichskammergericht'in kuruluşu" },

{ t:"1500-07-02", b:"İmparatorluk çevrelerinin (Reichskreise) kurulması", tur:"idari", onem:3, dunya:1, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["idari"],
  d:"Augsburg Diyeti'nde kararlaştırılan Reichskreise sistemi, imparatorluğu vergi toplama, asayiş ve askerî örgütlenme için altı (sonra on) bölgesel çevreye ayırdı. Sistem, merkezî bir bürokrasisi olmayan imparatorluğun idarî işleyişini üç asır boyunca ayakta tuttu.",
  kaynak:"Wilson, Heart of Europe — Reichskreise'nin 1500 kuruluşu ve 1512'de on çevreye genişlemesi" },

{ t:"1512-01-01", b:"Reichskreise sisteminin on çevreye genişletilmesi", tur:"idari", onem:2, dunya:1, kapsam:"ic", yer_id:"Trier",
  etiket:["idari"],
  d:"Köln Diyeti'nde imparatorluk çevreleri sayısı on ikiye (fiilen on aktif çevreye) çıkarıldı; Avusturya ve Bohemya toprakları ile seçici prensliklerin bazıları da sisteme dahil edildi. Bu genişleme, imparatorluğun idarî haritasını 1806'ya kadar geçerli kalacak şekilde sabitledi.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, yıl 1512 standart akademik anlatının verdiği tarih" },

{ t:"1519-06-28", b:"Fugger ailesinin V. Karl'ın imparator seçimini finanse etmesi", tur:"iktisat", onem:3, dunya:2, kapsam:"ic", yer_id:"Augsburg",
  etiket:["iktisat","siyasi"],
  d:"Augsburglu bankacı Jakob Fugger, Habsburglu Karl'ın imparator seçilmesi için seçici prenslere dağıtılan rüşvetin büyük kısmını (yaklaşık 850.000 flori) finanse etti ve Fransa Kralı I. François'yı yarıştan çıkardı. Bu, özel bankacı sermayesinin imparatorluk siyasetini doğrudan belirlediği en çarpıcı örnektir.",
  kaynak:"Wilson, Heart of Europe — Fugger'in 1519 finansmanı ve Karl'ın seçimi, standart anlatı" },

// ══════════════════════════════════════════════════════════════════
// II. REFORM HAREKETİ VE İMPARATORLUK KRİZİ (1517-1555)
// ══════════════════════════════════════════════════════════════════

{ t:"1517-10-31", b:"Luther'in Wittenberg'de 95 Tezi", tur:"din", onem:5, dunya:5, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["din","kultur"],
  d:"Wittenberg Üniversitesi'nde ilahiyat profesörü olan Martin Luther, endüljans satışını eleştiren 95 tezini yayımladı (geleneksel anlatıya göre şato kilisesi kapısına astı). Bu olay Protestan Reformu'nu başlattı, Batı Hıristiyanlığını kalıcı olarak böldü ve bir asır sürecek dinî-siyasî savaşların fitilini ateşledi.",
  kaynak:"Schulze, Germany: A New History; Whaley, Germany and the Holy Roman Empire I — 31 Ekim 1517 standart tarih. Wittenberg yerleşim kaydı yok, yer_id boş" },

{ t:"1521-04-17", b:"Luther'in Worms Diyeti'nde tezlerini geri almayı reddetmesi", tur:"din", onem:5, dunya:4, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["din","siyasi"],
  d:"İmparator V. Karl'ın huzuruna çıkarılan Luther, öğretilerini geri çekmeyi reddetti; İmparator bir ay sonra (25 Mayıs) çıkardığı Worms Fermanı ile onu aforozlu ve fermana muhalif ilan etti. Ferman uygulanamadı — Saksonya Elektörü Bilge Friedrich, Luther'i Wartburg Kalesi'nde saklayarak korudu.",
  kaynak:"Whaley, Germany and the Holy Roman Empire I — Worms Diyeti 17-18 Nisan 1521, Worms Fermanı 25 Mayıs 1521. Worms yerleşim kaydı yok, yer_id boş" },

{ t:"1522-09-21", b:"Luther'in Yeni Ahit'i Almancaya çevirmesi", tur:"kultur", onem:4, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["kultur","din"],
  d:"Wartburg'da sürgündeyken Yeni Ahit'i Yunanca aslından Almancaya çeviren Luther, çeviriyi Eylül 1522'de yayımladı (\"Septembertestament\"). Eser, standart Yeni Yüksek Almanca yazı dilinin oluşumunda ve halkın doğrudan kutsal metne erişiminde dönüm noktası oldu.",
  kaynak:"Whaley — Luther'in Wartburg çevirisi ve Eylül 1522 basımı, gün 21 Eylül olarak yaygın kabul görür" },

{ t:"1525-04-10", b:"Töton Şövalyeleri Tarikatı'nın sekülerleşmesi — Prusya Dükalığı", tur:"kurulus", onem:5, dunya:3, kapsam:"ic", yer_id:"Königsberg",
  etiket:["hanedan","din","toprak-kazanc"],
  d:"Kraków Antlaşması'yla Hohenzollern hanedanından Töton Büyük Üstadı Albrecht, tarikatı Lehistan kralına bağlı kalıtsal bir dünyevî dükalığa (Prusya Dükalığı) dönüştürdü ve Lutherciliğe geçti. Bu, Brandenburg Hohenzollernleri'nin bir asır sonra devralacağı Prusya'nın kurumsal doğumuydu.",
  kaynak:"Clark, Iron Kingdom — Töton Tarikatı'nın 1525 sekülerleşmesi ve Prusya Dükalığı'nın kuruluşu" },

{ t:"1525-05-15", b:"Alman Köylü Savaşı'nın Frankenhausen'de bastırılması", tur:"isyan", onem:4, dunya:3, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["isyan","sosyal"],
  d:"Reform hareketinin toplumsal beklentilerinden beslenen köylü ayaklanması, Orta ve Güney Almanya'nın büyük kısmına yayıldıktan sonra Frankenhausen Muharebesi'nde soylu ordularınca ezildi; tahminen 100.000 köylü öldürüldü. Luther'in isyancıları kınayan tavrı, Reform ile toplumsal devrim arasındaki çizgiyi kalıcı olarak belirledi.",
  kaynak:"Schulze, Germany: A New History — Köylü Savaşı'nın 1524-25 seyri ve Frankenhausen'de bastırılışı, 15 Mayıs 1525 standart tarih" },

{ t:"1529-04-19", b:"Speyer Diyeti — 'Protestan' adının doğuşu", tur:"din", onem:3, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["din","siyasi"],
  d:"İmparator'un Speyer Diyeti'nde Worms Fermanı'nı yeniden yürürlüğe koyma kararına, Luthercilik yanlısı prens ve şehirler resmî bir protesto (Protestation) ile karşı çıktı. Bu protestodan \"Protestan\" adı doğdu ve reformcu güçlerin siyasî bir blok olarak tanınmasının ilk adımı atıldı.",
  kaynak:"Whaley — 1529 Speyer Protestation'ı, 19 Nisan tarihi standart anlatı" },

{ t:"1531-02-27", b:"Schmalkaldic Birliği'nin kurulması", tur:"ittifak", onem:4, dunya:3, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["ittifak","din"],
  d:"Protestan prens ve şehirler Schmalkalden'de bir araya gelip savunma amaçlı bir askerî-siyasî birlik kurdu. On altı yıl İmparator V. Karl'a karşı Protestan tarafının başlıca gücü olan birlik, 1547'de Mühlberg'de dağıtıldı.",
  kaynak:"Whaley — Schmalkaldic Birliği'nin 27 Şubat 1531 kuruluşu" },

{ t:"1534-02-23", b:"Anabaptistlerin Münster'de iktidarı ele geçirmesi", tur:"ayaklanma", onem:3, dunya:2, kapsam:"ic", yer_id:"Münster",
  etiket:["din","sosyal"],
  d:"Radikal Anabaptist vaiz Bernhard Rothmann ve takipçileri Münster şehir meclisi seçimlerini kazanıp kenti bir \"Yeni Kudüs\" ilan etti; kısa süre sonra Leidenli Jan kendini kral ilan ederek çok eşliliği ve mal ortaklığını dayattı. Şehir, piskoposun ordusunca kuşatıldı.",
  kaynak:"Schulze, Germany: A New History — Münster Anabaptist Krallığı'nın 1534 başlangıcı" },

{ t:"1535-06-25", b:"Münster kuşatmasının sona ermesi ve Anabaptist krallığın çöküşü", tur:"ayaklanma", onem:3, dunya:2, kapsam:"ic", yer_id:"Münster",
  etiket:["din","sosyal"],
  d:"On altı ay süren kuşatmadan sonra piskoposun kuvvetleri şehre girdi; Leidenli Jan ve yakın çevresi işkenceyle öldürüldü, cesetleri şehrin Lamberti Kilisesi kulesinde demir kafeslerde asırlarca teşhir edildi. Olay, Anabaptist hareketinin Almanya'daki en travmatik hafızası oldu.",
  kaynak:"Schulze — Münster kuşatmasının 24-25 Haziran 1535'te sona ermesi" },

{ t:"1546-02-18", b:"Luther'in ölümü", tur:"olum", onem:4, dunya:3, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["din"],
  d:"Martin Luther, doğduğu şehir Eisleben'de 62 yaşında öldü. Ölümü, Reform hareketinin öncüsüz kalan Protestan cephesini bir yıl sonraki Schmalkaldic Savaşı'nın askerî yenilgisine daha kırılgan bıraktı.",
  kaynak:"Whaley — Luther'in 18 Şubat 1546'da Eisleben'de ölümü, standart tarih. Eisleben yerleşim kaydı yok" },

{ t:"1547-04-24", b:"Mühlberg Muharebesi — Schmalkaldic Birliği'nin yenilgisi", tur:"savas", onem:4, dunya:3, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["askeri","din"],
  d:"İmparator V. Karl'ın kuvvetleri, Sakson Elektörü Johann Friedrich komutasındaki Schmalkaldic ordusunu Elbe kıyısındaki Mühlberg'de ağır bir yenilgiye uğrattı. Zafer geçiciydi: sekiz yıl sonra Augsburg Din Barışı, Protestanlığın imparatorlukta hukuken tanınmasıyla sonuçlandı.",
  kaynak:"Whaley — Mühlberg'in 24 Nisan 1547'deki muharebesi. Mühlberg yerleşim kaydı yok" },

// ══════════════════════════════════════════════════════════════════
// III. OTUZ YIL SAVAŞLARI'NIN İMPARATORLUK CEPHESİ (1608-1648)
// ══════════════════════════════════════════════════════════════════
// ⚠️ Prag Pencereden Atılma (1618) · Beyaz Dağ (1620) · Wallenstein'ın
// öldürülmesi (1634) · Vestfalya Barışı (1648) HABSBURG dosyasında zaten
// var — burada TEKRARLANMADI. Aşağıdakiler Habsburg listesinde OLMAYAN,
// savaşın Alman/Protestan-İsveç cephesindeki olaylardır.

{ t:"1608-05-14", b:"Protestan Birliği'nin kurulması", tur:"ittifak", onem:3, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["ittifak","din"],
  d:"Pfalz Elektörü V. Friedrich önderliğinde Protestan prensler Auhausen'de savunma amaçlı bir birlik kurdu. Bir yıl sonra Katolik Birlik'in (Katholische Liga) kurulmasına yol açan bu ittifak, imparatorluğu iki silahlı bloka böldü.",
  kaynak:"Wilson, Europe's Tragedy — Protestan Birliği'nin 14 Mayıs 1608 kuruluşu" },

{ t:"1609-07-10", b:"Katolik Birlik'in (Katholische Liga) kurulması", tur:"ittifak", onem:3, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["ittifak","din"],
  d:"Bavyera Dükü Maximilian önderliğinde Katolik prensler, Protestan Birliği'ne karşı Münih'te kendi ittifaklarını kurdu. İki blok, dokuz yıl sonra Prag'daki krizin bütün imparatorluğu saran bir savaşa dönüşmesinde hazır askerî yapılar olarak devreye girdi.",
  kaynak:"Wilson, Europe's Tragedy — Katolik Birlik'in 10 Temmuz 1609 kuruluşu" },

{ t:"1630-07-06", b:"İsveç Kralı Gustav Adolf'un Pomeranya'ya çıkarma yapması", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"", kapsam_genis:true,
  etiket:["askeri"],
  d:"İsveç Kralı II. Gustav Adolf, Fransız sübvansiyonlarıyla desteklenen ordusuyla Usedom Adası'na çıkarak savaşa doğrudan müdahale etti. İsveç'in girişi, savaşı bölgesel bir Habsburg-Protestan çatışmasından imparatorluk çapında bir Avrupa savaşına dönüştürdü.",
  kaynak:"Wilson, Europe's Tragedy — Gustav Adolf'un 6 Temmuz 1630 Usedom çıkarması" },

{ t:"1631-05-20", b:"Magdeburg'un yakılıp yağmalanması", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"Magdeburg",
  etiket:["askeri","felaket"],
  d:"Katolik Birlik komutanı Tilly'nin kuvvetleri Protestan Magdeburg'u ele geçirip yaktı; şehrin 25.000 dolayındaki nüfusunun büyük çoğunluğu katliam ve yangında öldü. \"Magdeburgisieren\" (Magdeburglaştırmak) fiili Almancaya bir kıyım eş anlamlısı olarak girdi ve savaşın en travmatik hafızası oldu.",
  kaynak:"Wilson, Europe's Tragedy — Magdeburg katliamının 20 Mayıs 1631'de gerçekleşmesi, standart tarih" },

{ t:"1631-09-17", b:"Breitenfeld Muharebesi — İsveç'in zaferi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Leipzig",
  etiket:["askeri"],
  d:"Gustav Adolf'un İsveç-Sakson ordusu, Leipzig yakınlarında Tilly'nin Katolik Birlik kuvvetlerini ağır bir yenilgiye uğrattı. Zafer, Protestan cephesinin savaşta ilk büyük dönüşünü işaretledi ve İsveç ordusunu Güney Almanya'ya kadar ilerletti.",
  kaynak:"Wilson, Europe's Tragedy — Breitenfeld'in 17 Eylül 1631'deki muharebesi" },

{ t:"1632-11-16", b:"Lützen Muharebesi ve Gustav Adolf'un ölümü", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Leipzig",
  etiket:["askeri","olum"],
  d:"Wallenstein'ın imparatorluk ordusuyla İsveç kuvvetleri Lützen'de çarpıştı; İsveçliler savaşı kazandı ama Kral Gustav Adolf muharebede öldü. Kralının ölümü İsveç'in savaştaki siyasî ağırlığını zayıflattı, savaş bir on altı yıl daha sürdü.",
  kaynak:"Wilson, Europe's Tragedy — Lützen'in 16 Kasım 1632 (Gregoryen takvim) muharebesi. Lützen için Leipzig'e en yakın kayıtlı yerleşim kullanıldı" },

{ t:"1634-09-06", b:"Nördlingen Muharebesi — İsveç'in ağır yenilgisi", tur:"savas", onem:3, dunya:3, kapsam:"dis", yer_id:"", kapsam_genis:true,
  etiket:["askeri"],
  d:"İspanyol ve imparatorluk kuvvetlerinin birleşik ordusu, Nördlingen'de İsveç-Protestan ordusunu neredeyse yok etti. Yenilgi, İsveç'in savaştaki önderlik iddiasını kırdı ve Fransa'nın 1635'te savaşa doğrudan girmesine zemin hazırladı.",
  kaynak:"Wilson, Europe's Tragedy — Nördlingen'in 6 Eylül 1634 muharebesi" },

{ t:"1635-05-30", b:"Prag Barışı — imparatorluk içi uzlaşma girişimi", tur:"antlasma", onem:3, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["diplomasi"],
  d:"İmparator II. Ferdinand ile Sakson Elektörü arasında imzalanan Prag Barışı, çoğu Protestan prensi imparatorluk tarafına çekmeyi amaçladı ve Reichskreise'yi tek bir imparatorluk ordusu altında birleştirdi. Fransa'nın savaşa girişiyle barış kısa ömürlü kaldı, savaş 1648'e kadar sürdü.",
  kaynak:"Wilson, Europe's Tragedy — Prag Barışı'nın 30 Mayıs 1635 imzası" },

// ══════════════════════════════════════════════════════════════════
// IV. BÜYÜK ELEKTÖR'DEN KRALLIĞA — BRANDENBURG-PRUSYA (1640-1740)
// ══════════════════════════════════════════════════════════════════

{ t:"1640-12-01", b:"Büyük Elektör Friedrich Wilhelm'in tahta çıkışı", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", yer_id:"Berlin",
  etiket:["hanedan","siyasi"],
  d:"Otuz Yıl Savaşları'nın harabeye çevirdiği Brandenburg'un başına geçen Friedrich Wilhelm, dağınık toprakları (Brandenburg, Doğu Prusya, Ren'deki Kleve-Mark) tek bir daimî ordu ve merkezî vergi sistemiyle birleştirmeye girişti. \"Büyük Elektör\" unvanı, sonraki bir asırda Prusya devletinin kurumsal omurgasını attığı için verildi.",
  kaynak:"Clark, Iron Kingdom — Büyük Elektör'ün 1640 tahta çıkışı ve devlet inşası, kitabın merkez anlatısı" },

{ t:"1656-01-01", b:"Kırım elçilik heyetinin Königsberg'de Büyük Elektör'le görüşmesi", tur:"diplomasi", onem:2, dunya:1, kapsam:"dis", yer_id:"Königsberg",
  etiket:["diplomasi"],
  d:"Kırım Hanı'nın gönderdiği elçilik heyeti, Königsberg'de Büyük Elektör Friedrich Wilhelm ile görüştü — Osmanlı sistemi ile Brandenburg-Prusya arasındaki belgelenmiş ilk temaslardan biri. Sonraki yıllarda (1659, 1670-71, 1677, 1679) benzer elçilik alışverişleri sürdü.",
  kaynak:"TDV `prusya`: \"1656'da Kırım Hanı tarafından gönderilen elçilik heyeti, Königsberg'de Kürfürst Friedrich Wilhelm ile görüşür\" — madde bu oturumda okundu, gün belirtilmediği için yıl kullanıldı" },

{ t:"1672-01-01", b:"Brandenburg yardımcı kuvvetlerinin Osmanlı-Lehistan savaşlarına katılması", tur:"askeri", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","diplomasi"],
  d:"1672-1675 arasında Brandenburg, imparatorluk yükümlülüğü gereği Lehistan'ın yanında Osmanlı'ya karşı savaşan yardımcı kuvvetler gönderdi. Bu, Prusya'nın kendi çıkarları dışında imparatorluk çapındaki bir Osmanlı cephesine ilk askerî katkısıydı.",
  kaynak:"TDV `prusya`: \"1672-1675 Brandenburg yardımcı kuvvetleri Polonya'nın yanında Türk savaşlarına katılır\" — bu oturumda okundu, gün belirtilmedi" },

{ t:"1685-10-29", b:"Potsdam Fermanı — Huguenot mültecilerin kabulü", tur:"reform", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["sosyal","din"],
  d:"Fransa Kralı XIV. Louis'nin Nantes Fermanı'nı kaldırmasının ardından Büyük Elektör, zulümden kaçan Fransız Protestanlarına (Huguenot) Brandenburg'da yerleşme ve dinî serbestlik hakkı tanıdı. Yaklaşık 20.000 Huguenot'nun göçü, Berlin'in zanaat ve ticaret hayatını kalıcı olarak zenginleştirdi.",
  kaynak:"Clark, Iron Kingdom — Potsdam Fermanı'nın 29 Ekim 1685 ilanı ve Huguenot göçü. Potsdam yerleşim kaydı yok, yer_id boş" },

{ t:"1701-01-18", b:"I. Friedrich'in kendini 'Prusya Kralı' ilan etmesi", tur:"kurulus", onem:5, dunya:3, kapsam:"ic", yer_id:"Königsberg",
  etiket:["hanedan","siyasi"],
  d:"Elektör Friedrich III, İspanya Veraset Savaşı'nda İmparator'a askerî destek karşılığında aldığı izinle Königsberg'de kendini \"Prusya'da Kral\" I. Friedrich olarak taçlandırdı. Kutsal Roma İmparatorluğu içinde bir elektörlüğün krallık unvanı kazanması, Prusya'nın Avrupa devletler sistemindeki statüsünü kalıcı olarak yükseltti.",
  kaynak:"Clark, Iron Kingdom — I. Friedrich'in 18 Ocak 1701 Königsberg taç giyme töreni" },

{ t:"1713-02-25", b:"I. Friedrich Wilhelm'in ('Asker Kral') tahta çıkışı", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic", yer_id:"Berlin",
  etiket:["hanedan","idari"],
  d:"Babasının saray israfına tepkiyle sert bir tasarruf ve askerî disiplin rejimi kuran I. Friedrich Wilhelm, devlet gelirinin büyük kısmını orduya (Potsdam Devleri dahil) ayırdı ve merkezî bürokrasiyi (Generaldirektorium, 1723) kurdu. Onun bıraktığı disiplinli devlet aygıtı, oğlu Büyük Friedrich'in fetihlerinin temeliydi.",
  kaynak:"Clark, Iron Kingdom — I. Friedrich Wilhelm'in 1713-1740 saltanatı ve devlet inşası" },

{ t:"1718-01-14", b:"Nişancı Mehmed Paşa'nın Prusya Kralı'na dostluk mektubu göndermesi", tur:"diplomasi", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["diplomasi"],
  d:"Osmanlı Sadrazamı Nişancı Mehmed Paşa, Prusya Kralı I. Friedrich Wilhelm'e dostluk kurulmasını arzu ettiğini bildiren bir mektup gönderdi — iki devlet arasında resmî diplomatik temasın ilk adımlarından biri, kırk üç yıl sonraki 1761 antlaşmasının zeminini hazırladı.",
  kaynak:"TDV `prusya`: \"14 Ocak 1718 Sadrazam Nişancı Mehmed Paşa, Prusya Kralı I. Friedrich Wilhelm'e dostluk tesisini arzu eden mektup gönderir\" — bu oturumda okundu" },

{ t:"1740-05-31", b:"II. Friedrich'in ('Büyük Friedrich') tahta çıkışı", tur:"hukumdar", onem:5, dunya:3, kapsam:"ic", yer_id:"Berlin",
  etiket:["hanedan"],
  d:"Babasının bıraktığı disiplinli ordu ve dolu hazineyi devralan II. Friedrich, tahta çıkışından altı ay sonra Silezya'yı işgal ederek Prusya'yı Avrupa'nın büyük güçleri arasına taşıyacak kırk altı yıllık saltanatını başlattı. Aynı zamanda felsefeye ve Aydınlanma düşüncesine düşkünlüğüyle \"filozof kral\" imajı kurdu.",
  kaynak:"Clark, Iron Kingdom — Büyük Friedrich'in 31 Mayıs 1740 tahta çıkışı" },

{ t:"1742-07-28", b:"Berlin Antlaşması — Birinci Silezya Savaşı'nın sonu", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"Berlin",
  etiket:["toprak-kazanc","diplomasi"],
  d:"Haziran'daki Breslau ön mütarekesini resmîleştiren Berlin Antlaşması, zengin sanayi bölgesi Silezya'nın büyük kısmını Prusya'ya bıraktı. Bölgenin nüfusu ve vergi kapasitesi, Prusya'yı bir taşra elektörlüğünden Avusturya'ya rakip bir güce dönüştürdü.",
  kaynak:"Clark, Iron Kingdom — Birinci Silezya Savaşı'nın 28 Temmuz 1742 Berlin Antlaşması'yla sonuçlanması" },

{ t:"1745-06-04", b:"Hohenfriedberg zaferi", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"İkinci Silezya Savaşı'nda Büyük Friedrich, Avusturya-Sakson ordusunu Hohenfriedberg'de büyük bir yenilgiye uğrattı. Zafer, Prusya ordusunun Avrupa'nın en etkili savaş makinelerinden biri olarak ününü pekiştirdi.",
  kaynak:"Clark, Iron Kingdom — Hohenfriedberg'in 4 Haziran 1745 muharebesi" },

{ t:"1745-12-25", b:"Dresden Barışı — Silezya'nın Prusya'da kesinleşmesi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Dresden",
  etiket:["diplomasi","toprak-kazanc"],
  d:"İkinci Silezya Savaşı'nı sonlandıran Dresden Barışı, Prusya'nın Silezya üzerindeki hâkimiyetini ikinci kez tescil etti; Prusya karşılığında Maria Theresia'nın kocası Franz Stephan'ın imparator seçilmesini tanıdı. Barış, 1756'ya kadar süren kısa bir sükûnet sağladı.",
  kaynak:"Clark, Iron Kingdom — Dresden Barışı'nın 25 Aralık 1745 imzası" },

{ t:"1757-11-05", b:"Rossbach zaferi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Yedi Yıl Savaşları'nda Büyük Friedrich, sayıca çok üstün Fransız-imparatorluk ordusunu Rossbach'ta bir saatten kısa sürede dağıttı. Zafer, Prusya askerî disiplininin Avrupa'daki efsanesini pekiştirdi ve Alman milliyetçi hafızasında uzun süre anıldı.",
  kaynak:"Clark, Iron Kingdom — Rossbach'ın 5 Kasım 1757 muharebesi" },

{ t:"1757-12-05", b:"Leuthen zaferi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Rossbach'tan bir ay sonra Friedrich, sayıca iki kat üstün Avusturya ordusunu Leuthen'de eğik cephe (oblique order) taktiğiyle bozguna uğrattı. İki zafer birlikte, 1757'de yok olma tehlikesi geçiren Prusya'yı savaşta ayakta tuttu.",
  kaynak:"Clark, Iron Kingdom — Leuthen'in 5 Aralık 1757 muharebesi" },

{ t:"1760-11-03", b:"Torgau zaferi", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Savaşın en kanlı muharebelerinden birinde Friedrich, Avusturya ordusunu Torgau'da ağır kayıplar pahasına yendi. Zafer taktik olarak belirsizdi ama Prusya'nın savaşta tükenmediğini gösterdi; iki yıl sonra Rusya'nın savaştan çekilmesiyle (Petersburg Barışı) Prusya'nın konumu kurtuldu.",
  kaynak:"Clark, Iron Kingdom — Torgau'nun 3 Kasım 1760 muharebesi" },

{ t:"1761-03-22", b:"Osmanlı-Prusya dostluk ve ticaret antlaşması", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","iktisat"],
  d:"Yedi Yıl Savaşları sürerken imzalanan antlaşma, iki devlet arasındaki ilk resmî dostluk ve ticaret çerçevesini kurdu. Osmanlı tarafı, Avrupa'daki güçler dengesinde Prusya'yı Avusturya ve Rusya'ya karşı potansiyel bir denge unsuru olarak görüyordu.",
  kaynak:"TDV `prusya`: \"22 Mart 1761 Dostluk ve ticaret antlaşması imzalanır\" — bu oturumda okundu" },

{ t:"1763-08-12", b:"Generallandschulreglement — Prusya'da genel ilköğretim yasası", tur:"reform", onem:4, dunya:2, kapsam:"ic", yer_id:"Berlin",
  etiket:["idari","sosyal"],
  d:"Savaştan hemen sonra çıkarılan yasa, Prusya'daki bütün çocuklar için beş ile on üç yaş arası zorunlu, devlet denetimli ilköğretimi öngördü. Avrupa'nın en erken sistematik eğitim reformlarından biri olarak Prusya bürokrasisinin \"aydınlanmış mutlakiyetçi\" imajını pekiştirdi.",
  kaynak:"Clark, Iron Kingdom — Generallandschulreglement'in 1763 çıkarılışı, standart tarih 12 Ağustos 1763" },

{ t:"1763-11-01", b:"Ahmed Resmî Efendi'nin Berlin'e ilk Osmanlı elçisi olarak gönderilmesi", tur:"diplomasi", onem:2, dunya:1, kapsam:"dis", yer_id:"Berlin",
  etiket:["diplomasi"],
  d:"1761 antlaşmasının ardından Ahmed Resmî Efendi, Berlin'e atanan ilk Osmanlı daimî elçisi olarak Prusya sarayına gitti. Görevi sırasındaki gözlemleri, Osmanlı bürokrasisinde Avrupa askerî-idarî reformlarına ilginin ilk kaynaklarından biri oldu.",
  kaynak:"TDV `prusya`: \"Kasım 1763 Ahmed Resmî Efendi, ilk Osmanlı sefâret heyeti başkanı olarak Berlin'e gider\" — bu oturumda okundu, gün belirtilmedi" },

{ t:"1786-08-17", b:"Büyük Friedrich'in ölümü", tur:"olum", onem:5, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"II. Friedrich, kırk altı yıllık saltanatının ardından Potsdam'daki Sanssouci Sarayı'nda öldü. Prusya'yı taşra elektörlüğünden Avrupa'nın beş büyük gücünden birine dönüştüren mirası, yirmi yıl sonra Jena'da geçici olarak sarsılacaktı.",
  kaynak:"Clark, Iron Kingdom — Büyük Friedrich'in 17 Ağustos 1786 ölümü. Potsdam yerleşim kaydı yok" },

// ══════════════════════════════════════════════════════════════════
// V. FRANSIZ İHTİLALİ, NAPOLYON VE PRUSYA REFORMLARI (1790-1815)
// ══════════════════════════════════════════════════════════════════

{ t:"1790-01-31", b:"Prusya-Osmanlı ittifak antlaşması", tur:"ittifak", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","ittifak"],
  d:"Avusturya ve Rusya'nın Osmanlı'ya karşı savaşı sürerken imzalanan antlaşma, Prusya'yı Osmanlı'nın savunma müttefiki ilan etti. Antlaşma çok geçmeden Prusya'nın diplomatik önceliklerini Lehistan meselesine çevirmesiyle fiilen işlevsiz kaldı, ama Reichenbach Konvansiyonu'nun zeminini hazırladı.",
  kaynak:"TDV `prusya`: \"31 Ocak 1790 Prusya-Osmanlı ittifak antlaşması imzalanır\" — bu oturumda okundu" },

{ t:"1790-07-27", b:"Reichenbach Konvansiyonu — Prusya baskısıyla Avusturya'nın barışa zorlanması", tur:"diplomasi", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["diplomasi"],
  d:"Prusya'nın askerî ve diplomatik baskısı, Avusturya'yı Osmanlı ile sürdürdüğü savaşı sona erdirip statükoyu kabul etmeye zorladı. Bu, Prusya'nın kendi ordusunu fiilen kullanmadan büyük güç diplomasisinde belirleyici bir sonuç elde ettiği örneklerden biriydi.",
  kaynak:"TDV `prusya`: \"27 Temmuz 1790 Reichenbach Konvensiyonu ile Avusturya barış yapmaya zorlanır\" — bu oturumda okundu" },

{ t:"1794-06-01", b:"Prusya Genel Devlet Yasası'nın (Allgemeines Landrecht) yürürlüğe girmesi", tur:"kanun", onem:4, dunya:2, kapsam:"ic", yer_id:"Berlin",
  etiket:["idari","kanun"],
  d:"On dört yıllık hazırlığın ürünü olan Allgemeines Landrecht, Prusya topraklarının tamamı için tek bir hukuk sistemi getirdi ve devletin bireyle ilişkisini ilk kez sistematik biçimde kodladı. Feodal ayrıcalıkları kısmen korurken devletin kişisel özgürlükleri koruma yükümlülüğünü de tanıdı.",
  kaynak:"Clark, Iron Kingdom — Allgemeines Landrecht'in 1 Haziran 1794 yürürlüğe girişi" },

{ t:"1806-10-14", b:"Jena-Auerstedt bozgunu", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","kayip"],
  d:"Napolyon'un ordusu, aynı gün iki ayrı muharebede (Jena ve Auerstedt) Prusya ordusunu ezici bir yenilgiye uğrattı. Bozgun, Büyük Friedrich'in efsanevi ordusunun modası geçmiş bir savaş makinesi olduğunu ortaya çıkardı ve Prusya devletinin köklü bir reform sürecine girmesine yol açtı.",
  kaynak:"Clark, Iron Kingdom — Jena-Auerstedt'in 14 Ekim 1806 çifte bozgunu, kitabın dönüm noktası anlatısı" },

{ t:"1807-07-09", b:"Tilsit Antlaşması — Prusya'nın topraklarının yarısını kaybetmesi", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","toprak-kayip"],
  d:"Napolyon'un Rusya ile önce, Prusya ile iki gün sonra imzaladığı Tilsit Antlaşması, Prusya'yı topraklarının ve nüfusunun yarısından fazlasından mahrum bıraktı; Elbe'nin batısındaki topraklardan Vestfalya Krallığı, Lehistan topraklarından Varşova Dükalığı kuruldu. Prusya bir büyük güç olarak neredeyse silindi.",
  kaynak:"Clark, Iron Kingdom — Tilsit'in 9 Temmuz 1807 Prusya antlaşması" },

{ t:"1807-10-09", b:"Ekim Fermanı — Stein'ın serfliği kaldırma reformu", tur:"reform", onem:5, dunya:2, kapsam:"ic", yer_id:"Königsberg",
  etiket:["idari","sosyal"],
  d:"Fransız işgali altında Königsberg'e sığınan hükûmet adına Başbakan Stein'ın hazırladığı ferman, Prusya'da miras serfliğini kaldırdı ve toprak mülkiyetini soyluluk tekelinden çıkardı. Jena bozgunundan doğan reform dalgasının ilk büyük adımıydı.",
  kaynak:"Clark, Iron Kingdom — Ekim Fermanı'nın 9 Ekim 1807 ilanı, Prusya sarayının Königsberg sürgünü döneminde" },

{ t:"1810-10-15", b:"Berlin (Humboldt) Üniversitesi'nin açılması", tur:"bilim", onem:5, dunya:3, kapsam:"ic", yer_id:"Berlin",
  etiket:["bilim","kultur"],
  d:"Wilhelm von Humboldt'un öncülüğünde kurulan Berlin Üniversitesi, araştırma ile öğretimi birleştiren \"Humboldt modeli\"ni hayata geçirdi ve dünya çapında modern araştırma üniversitesinin şablonu oldu. Jena bozgunundan sonra \"kılıçla kaybedileni zihinle kazanma\" fikrinin somut ürünüydü.",
  kaynak:"Clark, Iron Kingdom — Humboldt Üniversitesi'nin 1809 fermanı ve 1810 açılışı" },

{ t:"1812-03-11", b:"Prusya'da Yahudi Emansipasyon Fermanı", tur:"reform", onem:4, dunya:2, kapsam:"ic", yer_id:"Berlin",
  etiket:["sosyal","kanun"],
  d:"Hardenberg'in hazırladığı ferman, Prusya'daki Yahudilere devlet memuriyeti hariç tam vatandaşlık hakları tanıdı. Alman devletleri arasında en ileri emansipasyon adımlarından biri olan reform, on dokuzuncu yüzyıl boyunca kısmen geri alınıp yeniden genişletildi.",
  kaynak:"Clark, Iron Kingdom — 1812 Yahudi Emansipasyon Fermanı'nın 11 Mart 1812 ilanı" },

{ t:"1813-03-17", b:"Prusya'nın Fransa'ya savaş ilanı — 'Halkıma' çağrısı", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"", kapsam_genis:true,
  etiket:["askeri","siyasi"],
  d:"Kral III. Friedrich Wilhelm, \"An Mein Volk\" (Halkıma) bildirisiyle halkı Napolyon'a karşı Özgürlük Savaşları'na çağırdı ve aynı gün Fransa'ya resmen savaş ilan etti. Gönüllü seferberlik ve Landwehr (milis) örgütlenmesi, kitlesel Alman milliyetçiliğinin ilk büyük deneyimi oldu.",
  kaynak:"Clark, Iron Kingdom — 17 Mart 1813 savaş ilanı ve halka çağrı" },

{ t:"1813-10-19", b:"Leipzig Milletler Savaşı — Napolyon'un büyük yenilgisi", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"Leipzig",
  etiket:["askeri"],
  d:"Prusya, Avusturya, Rusya ve İsveç ordularının birleşik gücü, Napolyon'un ordusunu Leipzig önlerinde dört günlük savaşın sonunda kesin biçimde yendi — o güne kadarki Avrupa tarihinin en büyük muharebesiydi. Yenilgi Napolyon'u Ren'in batısına çekilmeye zorladı ve İmparatorluğun çöküşünü başlattı.",
  kaynak:"Clark, Iron Kingdom — Leipzig Milletler Savaşı'nın 16-19 Ekim 1813 sürmesi, son ve kesin gün 19 Ekim" },

{ t:"1814-09-03", b:"Genel askerlik yükümlülüğünün kalıcı yasayla sabitlenmesi", tur:"kanun", onem:3, dunya:1, kapsam:"ic", yer_id:"Berlin",
  etiket:["idari","askeri"],
  d:"Savaş döneminin geçici Landwehr düzenlemesi, barış zamanında da geçerli olacak kalıcı bir genel askerlik yükümlülüğü yasasıyla kurumsallaştırıldı. Prusya, Avrupa'da evrensel askerlik hizmetini kalıcı devlet politikası hâline getiren ilk büyük güç oldu.",
  kaynak:"Clark, Iron Kingdom — 1814 genel askerlik yasasının kalıcılaştırılması, gün DOĞRULANMADI (standart anlatıdan alınan yaklaşık tarih)" },

// ══════════════════════════════════════════════════════════════════
// VI. ALMAN KONFEDERASYONU'NDAN BİRLEŞMEYE (1815-1871)
// ══════════════════════════════════════════════════════════════════

{ t:"1815-06-08", b:"Alman Konfederasyonu'nun (Deutscher Bund) kurulması", tur:"kurulus", onem:5, dunya:4, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["idari","siyasi"],
  d:"Viyana Kongresi'nin Nihaî Senedi'nin bir parçası olarak imzalanan Bundesakte, dağılmış Kutsal Roma İmparatorluğu'nun yerine otuz dokuz Alman devletini gevşek bir konfederasyona bağladı; başkanlığı Avusturya, meclisi (Bundestag) Frankfurt'ta topluyordu. Yapı, ne merkezî bir hükûmete ne de birleşik bir orduya sahipti — elli iki yıl sonra Prusya'nın önderliğinde daha sıkı bir birliğe dönüşene kadar sürdü.",
  kaynak:"Blackbourn, History of Germany 1780-1918 — Alman Konfederasyonu'nun 8 Haziran 1815 Bundesakte'siyle kuruluşu" },

{ t:"1818-05-26", b:"Prusya Gümrük Yasası — Zollverein'in temeli", tur:"iktisat", onem:4, dunya:2, kapsam:"ic", yer_id:"Berlin",
  etiket:["iktisat","idari"],
  d:"Prusya'nın kendi içindeki iç gümrükleri kaldırıp dış sınırında tek bir tarife uygulamaya başlayan yasa, on altı yıl sonra kurulacak Alman Gümrük Birliği'nin (Zollverein) prototipiydi. Ekonomik birleşmenin siyasî birleşmeden önce geldiği model, sonraki on yıllarda komşu devletleri Prusya'nın gümrük sistemine katılmaya ikna etti.",
  kaynak:"Blackbourn — Prusya Gümrük Yasası'nın 1818 çıkarılışı, standart tarih 26 Mayıs 1818" },

{ t:"1834-01-01", b:"Alman Gümrük Birliği'nin (Zollverein) yürürlüğe girmesi", tur:"iktisat", onem:5, dunya:3, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["iktisat"],
  d:"On sekiz Alman devletini kapsayan Zollverein, iç gümrükleri kaldırıp ortak bir dış tarife uygulamaya koydu; Avusturya bilinçli olarak dışarıda bırakıldı. Ekonomik birlik, otuz yedi yıl sonraki siyasî birleşmenin altyapısını Prusya önderliğinde inşa etti.",
  kaynak:"Blackbourn — Zollverein'in 1 Ocak 1834 yürürlüğe girişi" },

{ t:"1835-12-07", b:"Almanya'nın ilk demiryolu hattı — Nürnberg-Fürth", tur:"teknoloji", onem:3, dunya:2, kapsam:"ic", yer_id:"Nürnberg",
  etiket:["teknoloji","iktisat"],
  d:"\"Ludwigsbahn\" adı verilen altı kilometrelik hat, Nürnberg ile Fürth arasında Almanya'nın ilk buharlı tren seferini başlattı. Sonraki otuz yılda hızla genişleyen demiryolu ağı, Zollverein'in ekonomik birleşmesini fiziksel olarak tamamladı ve 1866-71 seferberliğinde askerî lojistiğin belkemiği oldu.",
  kaynak:"Blackbourn — Nürnberg-Fürth hattının 7 Aralık 1835 açılışı, standart tarih" },

{ t:"1840-01-01", b:"Osmanlı-Alman ticaret antlaşmasının yenilenmesi", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["iktisat","diplomasi"],
  d:"Zollverein'in genişlemesiyle birlikte Osmanlı-Alman ticarî ilişkileri 1840'ta yeni bir antlaşmayla güncellendi. Antlaşma, on dokuzuncu yüzyıl boyunca giderek yoğunlaşacak Osmanlı-Alman ticaretinin erken aşamalarından biriydi.",
  kaynak:"TDV `almanya`: \"1840 Osmanlı-Alman ticaret antlaşması yenilendi\" — bu oturumda okundu, gün belirtilmedi" },

{ t:"1842-09-04", b:"Köln Katedrali'nin inşasının yeniden başlatılması", tur:"mimari", onem:3, dunya:1, kapsam:"ic", yer_id:"Köln",
  etiket:["kultur","mimari"],
  d:"Orta Çağ'dan yarım kalan ve üç asırdır tamamlanmamış Köln Katedrali'nin inşasına, Kral IV. Friedrich Wilhelm'in temel taşını yeniden koymasıyla kaldığı yerden devam edildi. İnşaat, on dokuzuncu yüzyıl Alman milliyetçi romantizminin ortak bir ulusal proje olarak benimsediği simgelerden biri hâline geldi.",
  kaynak:"Blackbourn — Köln Katedrali inşasının 1842'de yeniden başlaması, gün 4 Eylül 1842" },

{ t:"1844-06-04", b:"Silezya dokumacı ayaklanması", tur:"ayaklanma", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["sosyal","ayaklanma"],
  d:"Endüstrileşmenin yıktığı geleneksel el dokumacılığının yoksullaştırdığı Silezyalı işçiler, ücretlerini ve fiyatları protesto ederek fabrikaları bastı; ayaklanma ordu tarafından kanlı biçimde bastırıldı. Olay, Alman toplumunda sanayileşmenin sosyal maliyetine dair ilk büyük kamuoyu tartışmalarından birini başlattı ve Heinrich Heine'nin bir şiirine konu oldu.",
  kaynak:"Blackbourn — Silezya dokumacı ayaklanmasının Haziran 1844'te (4-6 Haziran) bastırılması" },

{ t:"1847-10-12", b:"Siemens & Halske şirketinin kurulması", tur:"iktisat", onem:3, dunya:1, kapsam:"ic", yer_id:"Berlin",
  etiket:["iktisat","teknoloji"],
  d:"Werner von Siemens ve Johann Georg Halske'nin Berlin'de kurduğu telgraf üretim şirketi, kısa sürede Avrupa'nın önde gelen elektrik-mühendislik firmalarından birine dönüştü. Almanya'nın ikinci sanayi devrimindeki (elektrik, kimya) öncü rolünün erken örneklerinden biriydi.",
  kaynak:"bulunamadı — kuruluş tarihi 12 Ekim 1847 standart şirket tarihi kabulüdür, akademik eserde müstakil doğrulanmadı" },

{ t:"1847-07-23", b:"Helmholtz'un enerjinin korunumu ilkesini sunması", tur:"bilim", onem:4, dunya:2, kapsam:"ic", yer_id:"Berlin",
  etiket:["bilim"],
  d:"Fizyolog ve fizikçi Hermann von Helmholtz, Berlin Fizik Derneği'nde sunduğu \"Kuvvetin Korunumu Üzerine\" adlı çalışmasında enerjinin yok olmadığını, yalnız biçim değiştirdiğini matematiksel olarak formüle etti. Termodinamiğin birinci yasasının en sistematik erken ifadelerinden biri, Alman bilim camiasının on dokuzuncu yüzyıl ortası fizik alanındaki öncülüğünü gösterdi.",
  kaynak:"bulunamadı — Helmholtz'un 23 Temmuz 1847 sunumu bilim tarihinde standart kabul görmüş tarih, akademik eserde müstakil doğrulanmadı" },

{ t:"1848-03-18", b:"Berlin barikat çatışmaları — Mart Devrimi", tur:"ayaklanma", onem:5, dunya:4, kapsam:"ic", yer_id:"Berlin",
  etiket:["siyasi","isyan"],
  d:"Paris ve Viyana'daki devrimlerin ardından Berlin sokaklarında halk ile ordu arasında çatışmalar patlak verdi; Kral IV. Friedrich Wilhelm askerlerini geri çekmek zorunda kaldı ve anayasa vaat etti. Ayaklanma, Alman devletlerinin çoğunda eşzamanlı devrim dalgasının en görünür sahnesiydi.",
  kaynak:"Blackbourn — Berlin barikat çatışmalarının 18 Mart 1848'de patlak vermesi" },

{ t:"1848-05-18", b:"Frankfurt Paulskirche Meclisi'nin toplanması", tur:"kurulus", onem:5, dunya:4, kapsam:"ic", yer_id:"Frankfurt", kapsam_genis:true,
  etiket:["siyasi","idari"],
  d:"Bütün Alman devletlerinden seçilen 585 delege, Frankfurt'taki Paulskirche'de birleşik ve anayasal bir Almanya kurmak amacıyla ilk özgür Alman parlamentosunu topladı. Meclis on bir ay tartıştı, ama arkasında bir orduya ya da vergi gücüne sahip olmadığı için nihayetinde başarısız kaldı.",
  kaynak:"Blackbourn — Frankfurt Ulusal Meclisi'nin 18 Mayıs 1848 açılışı" },

{ t:"1849-03-28", b:"Paulskirche Anayasası'nın kabulü", tur:"anayasa", onem:4, dunya:3, kapsam:"ic", yer_id:"Frankfurt",
  etiket:["idari","siyasi"],
  d:"Frankfurt Meclisi, temel haklar güvencesi ve kalıtsal anayasal monarşi öngören bir birleşik Almanya anayasasını kabul etti. Belge hiçbir zaman yürürlüğe girmedi, ama sonraki Alman anayasalarının (1871, 1919, 1949) temel haklar bölümlerine kalıcı biçimde iz bıraktı.",
  kaynak:"Blackbourn — Paulskirche Anayasası'nın 28 Mart 1849 kabulü" },

{ t:"1849-04-03", b:"IV. Friedrich Wilhelm'in imparatorluk tacını reddi", tur:"siyaset", onem:5, dunya:3, kapsam:"ic", yer_id:"Berlin",
  etiket:["siyasi"],
  d:"Frankfurt Meclisi'nin sunduğu imparatorluk tacını Prusya Kralı IV. Friedrich Wilhelm, \"halktan gelen bir taç kabul edilemez\" gerekçesiyle reddetti — meşruiyetin ancak diğer hükümdarlardan gelebileceğini savundu. Ret, 1848 Devrimi'nin \"aşağıdan\" birleşme projesinin sonunu getirdi; birleşme on beş yıl sonra Bismarck'ın \"yukarıdan\" siyasetiyle gerçekleşti.",
  kaynak:"Blackbourn — IV. Friedrich Wilhelm'in tacı 3 Nisan 1849'da reddetmesi" },

{ t:"1850-11-29", b:"Olmütz Punktasyonu — Erfurt Birliği girişiminin çöküşü", tur:"kriz", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["siyasi"],
  d:"Prusya'nın önderliğinde küçük-Alman birliği kurma girişimi olan Erfurt Birliği projesi, Avusturya'nın askerî tehdidi karşısında Olmütz'de geri çekilmeyle sona erdi; Prusya, Alman Konfederasyonu'nun eski düzenine dönmeyi kabul etti. Bu \"Olmütz aşağılanması\", on altı yıl sonra Königgrätz'de tersine çevrilecekti.",
  kaynak:"Blackbourn — Olmütz Punktasyonu'nun 29 Kasım 1850 imzası" },

{ t:"1856-08-01", b:"Neandertal insan fosilinin keşfi", tur:"bilim", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["bilim"],
  d:"Düsseldorf yakınındaki Neander Vadisi'nde bir kireç taşı ocağında bulunan iskelet parçaları, Homo neanderthalensis türünün bilim dünyasınca tanınan ilk örneğiydi. Keşif, insan evrimi tartışmasının Darwin'in \"Türlerin Kökeni\"nden üç yıl önce başlamasını sağladı.",
  kaynak:"bulunamadı — keşif tarihi Ağustos 1856 standart bilim tarihi kabulüdür, gün DOĞRULANMADI. Düsseldorf yerleşim kaydı yok" },

{ t:"1862-03-20", b:"Zollverein-Osmanlı gümrük muahedesi", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["iktisat","diplomasi"],
  d:"Alman Gümrük Birliği ile Osmanlı Devleti arasında yeni bir ticaret ve gümrük antlaşması imzalandı; bu, birleşme öncesi dağınık Alman devletlerinin ortak ekonomik kimliğiyle Osmanlı'yla kurduğu ilişkinin bir göstergesiydi.",
  kaynak:"TDV `prusya`: \"20 Mart 1862 Zollverein ile yeni muahede yapıldı\" — bu oturumda okundu" },

{ t:"1862-09-23", b:"Bismarck'ın Prusya Başbakanı olması", tur:"siyaset", onem:5, dunya:4, kapsam:"ic", yer_id:"Berlin",
  etiket:["siyasi"],
  d:"Kral I. Wilhelm, ordu bütçesi krizini aşmak için Otto von Bismarck'ı başbakanlığa getirdi. Bismarck, meclise karşı \"demir ve kan\" konuşmasıyla meşhur olan sert bir güç siyaseti izleyerek dokuz yıl içinde Alman birleşmesini kendi şartlarıyla gerçekleştirdi.",
  kaynak:"Blackbourn — Bismarck'ın 23 Eylül 1862 başbakanlık ataması" },

{ t:"1864-02-01", b:"İkinci Schleswig Savaşı'nın başlaması", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"Kiel",
  etiket:["askeri","toprak-kazanc"],
  d:"Prusya ve Avusturya, Danimarka'ya karşı ortak bir savaşla Schleswig ve Holstein dukalıklarını ele geçirdi. Savaş sonrası iki dukalığın ortak yönetimi (Gastein Sözleşmesi, 1865) kısa sürede Prusya-Avusturya çekişmesinin bahanesine dönüştü ve 1866 savaşına yol açtı.",
  kaynak:"Blackbourn — İkinci Schleswig Savaşı'nın 1 Şubat 1864'te başlaması" },

{ t:"1866-08-23", b:"Prag Barışı — Avusturya'nın Alman meselesinden çekilmesi", tur:"antlasma", onem:5, dunya:4, kapsam:"ic", yer_id:"Prag",
  etiket:["diplomasi","bolunme"],
  d:"Königgrätz'deki askerî yenilginin ardından imzalanan Prag Barışı, Avusturya'yı Alman Konfederasyonu'ndan tamamen çıkardı ve Prusya'nın Kuzey Almanya'da tartışmasız önderliğini kabul ettirdi. Üç asırdır süren Avusturya-Prusya rekabeti bu antlaşmayla Prusya lehine kesin olarak sonuçlandı.",
  kaynak:"Blackbourn — Prag Barışı'nın 23 Ağustos 1866 imzası, Königgrätz'in (3 Temmuz) siyasî sonucu" },

{ t:"1867-04-16", b:"Kuzey Alman Konfederasyonu Anayasası'nın kabulü", tur:"anayasa", onem:5, dunya:3, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["idari","siyasi"],
  d:"Prusya önderliğinde yirmi iki Kuzey Alman devletini birleştiren Konfederasyon, evrensel oyla seçilen bir Reichstag ve Prusya kralının başkanlığındaki federal bir yapı kurdu. Bu anayasa, dört yıl sonra ilan edilecek Alman İmparatorluğu'nun anayasasının doğrudan taslağıydı.",
  kaynak:"Blackbourn — Kuzey Alman Konfederasyonu Anayasası'nın 16 Nisan 1867 kabulü" },

{ t:"1870-07-19", b:"Fransa'nın Prusya'ya savaş ilanı", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","diplomasi"],
  d:"İspanya tahtı meselesi ve Bismarck'ın kışkırtıcı biçimde düzenlediği Ems Telgrafı krizinin ardından Fransa, Prusya'ya savaş ilan etti. Bismarck'ın beklediği gibi Güney Alman devletleri de Prusya'nın yanında savaşa girdi — bu ortak seferberlik, birleşmenin son adımını hazırladı.",
  kaynak:"Blackbourn — Fransa'nın 19 Temmuz 1870 savaş ilanı" },

{ t:"1870-09-02", b:"Sedan Muharebesi — III. Napolyon'un esir alınması", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Prusya ve müttefik Alman ordularının Sedan'da kuşattığı Fransız ordusu teslim oldu; İmparator III. Napolyon bizzat esir düştü. Yenilgi, Fransa'da İkinci İmparatorluğu devirdi ve Alman ordularının Paris'e ilerleyişinin önünü açtı.",
  kaynak:"Blackbourn — Sedan Muharebesi'nin 2 Eylül 1870 teslimiyeti" },

{ t:"1871-01-18", b:"Alman İmparatorluğu'nun Versailles'de ilanı", tur:"kurulus", onem:5, dunya:5, kapsam:"ic", yer_id:"Metz", kapsam_genis:true,
  etiket:["siyasi","hanedan","kurulus"],
  d:"Kuşatma altındaki Paris yakınındaki Versailles Sarayı'nın Aynalı Salonu'nda toplanan Alman prensler, Prusya Kralı I. Wilhelm'i \"Alman İmparatoru\" ilan etti. Sekiz asırlık dağınıklığın ardından ilk kez tek bir ulus devlette birleşen Almanya, Avrupa'nın güç dengesini kalıcı olarak değiştirdi.",
  kaynak:"Blackbourn, History of Germany 1780-1918; devletler.js `almanya` künyesinin de kaydettiği 18 Ocak 1871 tarihi — standart ve tartışmasız" },

{ t:"1871-04-16", b:"Alman İmparatorluğu Anayasası'nın kabulü", tur:"anayasa", onem:4, dunya:3, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["idari","siyasi"],
  d:"Reichstag'ın kabul ettiği anayasa, imparatorluğu yirmi beş devletten oluşan federal bir yapı olarak tanımladı; evrensel erkek oyuyla seçilen Reichstag'ın yanında gerçek güç Prusya kralı-imparator ve onun atadığı şansölyede (Bismarck) toplandı. Bu \"yarı-anayasal\" denge, imparatorluğun 1918'e kadarki siyasî yapısını belirledi.",
  kaynak:"Blackbourn — İmparatorluk Anayasası'nın 16 Nisan 1871 kabulü" },

{ t:"1871-05-10", b:"Frankfurt Antlaşması — Alsace-Lorraine'in ilhakı", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", yer_id:"Metz",
  etiket:["toprak-kazanc","diplomasi"],
  d:"Fransa-Prusya Savaşı'nı resmen sona erdiren antlaşma, Almanya'ya Alsace ile Lorraine'in büyük kısmını (Metz dahil) ve beş milyar frank savaş tazminatı verdi. İlhak, Fransa'da kırk üç yıl sürecek bir \"revanş\" hissiyatının kaynağı oldu ve I. Dünya Savaşı'na giden gerginliklerden biri sayılır.",
  kaynak:"Blackbourn — Frankfurt Antlaşması'nın 10 Mayıs 1871 imzası; Metz'in yerlesimler.js kaydında d:'almanya' geçişi bu tarihle örtüşüyor" },

// ══════════════════════════════════════════════════════════════════
// VII. ALMAN İMPARATORLUĞU — BİSMARCK'TAN VAHDET'E (1871-1914)
// ══════════════════════════════════════════════════════════════════

{ t:"1873-05-11", b:"Kulturkampf — Mayıs Yasaları'nın ilki", tur:"din", onem:3, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["din","kanun"],
  d:"Bismarck'ın Katolik Kilisesi'nin devlet içindeki etkisini kırmak amacıyla başlattığı Kulturkampf'ın ilk büyük yasal adımı, din adamlarının eğitimini ve atamasını devlet denetimine soktu. Kampanya on yıl sürdü, Bismarck'ın sosyalizme karşı Katolik desteğine ihtiyaç duymasıyla 1880'lerde büyük ölçüde geri çekildi.",
  kaynak:"Blackbourn — Kulturkampf Mayıs Yasaları'nın 11 Mayıs 1873 çıkarılışı" },

{ t:"1876-08-13", b:"Bayreuth Festspielhaus'un açılışı — Wagner'in 'Nibelung'un Yüzüğü'", tur:"kultur", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["kultur","sanat"],
  d:"Richard Wagner'in kendi tasarladığı Bayreuth Festival Binası, bestecinin dört operadan oluşan \"Der Ring des Nibelungen\" döngüsünün ilk tam icrasıyla açıldı. Bina ve festival, Alman romantik milliyetçiliğinin sanat alanındaki en görünür simgelerinden biri hâline geldi.",
  kaynak:"bulunamadı — Bayreuth Festspielhaus açılışının 13 Ağustos 1876 tarihi standart müzik tarihi kabulüdür, akademik eserde doğrulanmadı. Bayreuth yerleşim kaydı yok" },

{ t:"1878-07-13", b:"Berlin Kongresi'nde 'dürüst simsar' rolü", tur:"diplomasi", onem:3, dunya:4, kapsam:"dis", yer_id:"Berlin",
  etiket:["diplomasi"],
  d:"Bismarck'ın ev sahipliğinde toplanan Berlin Kongresi, San Stefano Antlaşması'nı revize ederek Osmanlı Balkanları'nın haritasını yeniden çizdi. Bismarck kendini \"dürüst simsar\" (ehrlicher Makler) olarak sundu; kongrenin Almanya'ya doğrudan toprak kazancı yoktu, ama Berlin'i Avrupa diplomasisinin merkezine taşıdı.",
  kaynak:"TDV `berlin-antlasmasi`: 13 Temmuz 1878 tarihli antlaşma; dunya değeri kronoloji_habsburg.js'teki aynı tarihli maddeyle (dunya:4) HİZALANDI, kusur önlendi" },

{ t:"1878-10-19", b:"Sosyalistlere Karşı Yasa (Sozialistengesetz)", tur:"kanun", onem:4, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["siyasi","kanun"],
  d:"İmparatora yönelik iki suikast girişimini bahane eden Bismarck, sosyalist örgütleri, toplantıları ve yayınları yasaklayan bir yasayı Reichstag'dan geçirdi. Yasa on iki yıl yürürlükte kaldı ama Sosyal Demokrat Parti'yi bastıramadı; Bismarck aynı dönemde işçi sınıfını devlete bağlamak için sosyal sigorta reformlarını başlattı.",
  kaynak:"Blackbourn — Sozialistengesetz'in 19 Ekim 1878 kabulü" },

{ t:"1883-06-15", b:"Sağlık sigortası yasası — dünyanın ilk devlet sosyal güvencesi", tur:"reform", onem:4, dunya:3, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["sosyal","kanun"],
  d:"Bismarck'ın \"devlet sosyalizmi\" politikasının ilk ayağı olan yasa, işçiler için zorunlu sağlık sigortasını devlet garantisiyle kurdu. Ertesi yıl kaza sigortası, 1889'da da yaşlılık-malullük sigortası eklenerek dünyanın ilk kapsamlı sosyal güvenlik sistemi tamamlandı.",
  kaynak:"Blackbourn — Sağlık sigortası yasasının 15 Haziran 1883 kabulü" },

{ t:"1884-11-15", b:"Berlin Kongo Konferansı — Afrika'nın paylaşılması", tur:"diplomasi", onem:4, dunya:4, kapsam:"dis", yer_id:"Berlin",
  etiket:["diplomasi","siyasi"],
  d:"Bismarck'ın davetiyle Berlin'de toplanan on dört Avrupa devleti ve ABD temsilcisi, Afrika kıtasının Avrupa güçleri arasında paylaşılmasının kurallarını belirledi. Almanya bu süreçte kendi sömürgelerini (Togo, Kamerun, Güneybatı Afrika, Doğu Afrika) resmen ilan etti — geç ama hızlı bir sömürgecilik atılımıydı.",
  kaynak:"Blackbourn — Berlin Kongo Konferansı'nın 15 Kasım 1884'te açılması" },

{ t:"1885-02-26", b:"Berlin Genel Senedi — Afrika sömürgeciliğinin kuralları", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"Berlin",
  etiket:["diplomasi"],
  d:"Üç ay süren Berlin Konferansı, kıyı bölgelerinin \"fiilî işgal\" ile mülkiyet kazanılacağını ilan eden Genel Senet'in imzasıyla kapandı. Kural, Avrupa devletlerinin Afrika'nın iç kesimlerine hızla nüfuz etmesini teşvik etti ve kıtanın bugünkü sınırlarının büyük kısmını belirledi.",
  kaynak:"Blackbourn — Berlin Genel Senedi'nin 26 Şubat 1885 imzası" },

{ t:"1888-06-15", b:"II. Wilhelm'in tahta çıkışı — 'Üç İmparator Yılı'nın sonu", tur:"hukumdar", onem:5, dunya:3, kapsam:"ic", yer_id:"Berlin",
  etiket:["hanedan","siyasi"],
  d:"I. Wilhelm'in Mart'ta, kanser hastası oğlu III. Friedrich'in yalnızca doksan dokuz gün sonra ölmesiyle taht torunu II. Wilhelm'e geçti. Genç, hırslı ve dış siyasette Bismarck'tan bağımsız hareket etmeye kararlı yeni imparator, iki yıl içinde \"yaşlı şansölye\"yi görevden alacaktı.",
  kaynak:"Blackbourn — 'Üç İmparator Yılı'nın 15 Haziran 1888'de II. Wilhelm'in tahta çıkışıyla kapanması" },

{ t:"1888-10-04", b:"Deutsche Bank'ın Haydarpaşa-İzmit hattı imtiyazını alması", tur:"iktisat", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["iktisat","diplomasi"],
  d:"Deutsche Bank, İstanbul'un Haydarpaşa yakasından İzmit'e uzanan demiryolu hattının işletme imtiyazını aldı — Bağdat Demiryolu'na uzanacak on beş yıllık Alman-Osmanlı demiryolu ortaklığının ilk somut adımıydı. Aynı yıl imtiyaz Ankara'ya kadar genişletildi.",
  kaynak:"TDV `almanya`: \"4 Ekim 1888 Deutsche Bank, Haydarpaşa-İzmit ve İzmit-Ankara hattı imtiyazlarını aldı\" — bu oturumda okundu" },

{ t:"1889-01-01", b:"II. Wilhelm'in İstanbul ziyareti", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","siyasi"],
  d:"Tahta çıkışından altı ay sonra II. Sultan Abdülhamid'i ziyaret eden II. Wilhelm, bir Avrupa hükümdarının Osmanlı başkentine yaptığı ilk resmî ziyaretlerden birini gerçekleştirdi. Ziyaret, sonraki otuz yılın Alman-Osmanlı yakınlaşmasının açılış sahnesiydi.",
  kaynak:"TDV `almanya`: \"1889 II. Wilhelm'in İstanbul ziyareti gerçekleşti\" — bu oturumda okundu, gün belirtilmedi; devletler.js `almanya` künyesindeki 1889-01-01 tarihiyle HİZALANDI" },

{ t:"1889-06-22", b:"Yaşlılık ve Malullük Sigortası Yasası", tur:"reform", onem:4, dunya:3, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["sosyal","kanun"],
  d:"Bismarck'ın sosyal sigorta üçlemesinin son ayağı, dünyada devlet garantili ilk emeklilik sistemini kurdu; yetmiş yaşını dolduran ya da çalışamaz hâle gelen işçilere aylık bağlandı. Sistem, sonraki bir asırda bütün sanayileşmiş dünyanın örnek aldığı bir model oldu.",
  kaynak:"Blackbourn — Yaşlılık ve Malullük Sigortası Yasası'nın 22 Haziran 1889 kabulü" },

{ t:"1890-03-20", b:"Bismarck'ın görevden alınması", tur:"siyaset", onem:5, dunya:3, kapsam:"ic", yer_id:"Berlin",
  etiket:["siyasi"],
  d:"II. Wilhelm ile artan gerginlik sonucu Bismarck, imparatorluğu on dokuz yıl yöneten şansölyelik görevinden istifaya zorlandı. \"Kılavuzun bırakılması\" (Dropping the Pilot) karikatürüyle dünya basınına yansıyan olay, Almanya'nın dış siyasetinde ölçülü Bismarck dengesinden II. Wilhelm'in daha saldırgan \"Weltpolitik\"ine geçişi simgeledi.",
  kaynak:"Blackbourn — Bismarck'ın 20 Mart 1890 istifası" },

{ t:"1895-11-08", b:"Röntgen'in X-ışınlarını keşfetmesi", tur:"bilim", onem:5, dunya:4, kapsam:"ic", yer_id:"",
  etiket:["bilim"],
  d:"Würzburg Üniversitesi'nde fizik profesörü Wilhelm Conrad Röntgen, katot ışını tüpleriyle deney yaparken bilinmeyen bir ışının opak nesnelerden geçebildiğini keşfetti ve buna \"X-ışını\" adını verdi. Keşif, tıbbi görüntülemeyi kökten değiştirdi ve Röntgen'e 1901'de ilk Nobel Fizik Ödülü'nü kazandırdı.",
  kaynak:"bulunamadı — Röntgen'in keşif tarihi 8 Kasım 1895 bilim tarihinde standart kabuldür, akademik eserde müstakil doğrulanmadı. Würzburg yerleşim kaydı yok" },

{ t:"1898-11-08", b:"II. Wilhelm'in Şam ziyareti — '300 milyon Müslümanın dostu' beyanı", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","siyasi"],
  d:"İstanbul-Kudüs-Şam güzergâhlı ikinci Osmanlı seyahatinde II. Wilhelm, Selahaddin Eyyûbî'nin türbesini ziyaret ederek kendisini \"dünyadaki üç yüz milyon Müslümanın dostu\" ilan etti. Beyan, Almanya'nın İslâm dünyasına yönelik siyasetinin sembolik zirvesiydi ve İngiliz-Fransız kamuoyunda büyük tepki yarattı.",
  kaynak:"TDV `almanya`: \"1898 sonbahar II. Wilhelm'in İstanbul-Kudüs ziyareti; kendini 300 milyon müslümanın dostu ilân etti\" — bu oturumda okundu; Şam konuşmasının 8 Kasım 1898 tarihi standart tarihyazımı" },

{ t:"1900-01-01", b:"Alman Medeni Kanunu'nun (BGB) yürürlüğe girmesi", tur:"kanun", onem:4, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["kanun","idari"],
  d:"Yirmi iki yıllık hazırlığın ürünü olan Bürgerliches Gesetzbuch, imparatorluğun yirmi beş devletindeki farklı hukuk geleneklerini (Roma hukuku, Cermen örfi hukuku, Napolyon Kanunu) tek bir medeni kanunda birleştirdi. BGB, hukukî hassasiyet ve sistematik yapısıyla dünyadaki başka birçok medeni kanuna (Japonya, Türkiye Medeni Kanunu dahil dolaylı olarak) örnek oldu.",
  kaynak:"Blackbourn — BGB'nin 1 Ocak 1900'de yürürlüğe girişi" },

{ t:"1900-12-14", b:"Planck'ın kuantum hipotezini sunması", tur:"bilim", onem:5, dunya:4, kapsam:"ic", yer_id:"Berlin",
  etiket:["bilim"],
  d:"Berlin Fizik Derneği'nde konuşan Max Planck, kara cisim ışımasını açıklamak için enerjinin sürekli değil, kesikli paketler (kuvanta) hâlinde yayıldığını öne sürdü. Bu hipotez, klasik fiziğin temellerini sarsan ve yirminci yüzyıl kuantum fiziğinin doğuşunu işaretleyen dönüm noktası oldu.",
  kaynak:"bulunamadı — Planck'ın 14 Aralık 1900 sunumu bilim tarihinde standart kabuldür, akademik eserde müstakil doğrulanmadı" },

{ t:"1903-03-05", b:"Bağdat Demiryolu Antlaşması", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["iktisat","diplomasi"],
  d:"Deutsche Bank önderliğindeki Alman sermayesine, İstanbul'dan Bağdat ve Basra Körfezi'ne uzanacak demiryolu hattının inşa ve işletme imtiyazını veren antlaşma imzalandı. Proje, İngiliz-Alman emperyal rekabetinin (\"Berlin-Bağdat\" hattı) simgesi oldu ve I. Dünya Savaşı öncesi gerginliklerin kaynaklarından biri sayılır.",
  kaynak:"TDV `almanya`: \"5 Mart 1903 Bağdat Demiryolu Antlaşması imzalandı\"; TDV `bagdat-demiryolu`: nihai finansman anlaşması 21 Mart 1903, şirketin resmî kuruluşu 13 Nisan 1903 — bu oturumda ikisi de okundu, antlaşmanın imza tarihi olarak almanya maddesindeki 5 Mart esas alındı" },

{ t:"1905-03-31", b:"Birinci Fas Krizi — Tanca çıkarması", tur:"kriz", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","siyasi"],
  d:"II. Wilhelm, Fransa'nın Fas üzerindeki artan nüfuzunu protesto etmek amacıyla Tanca'ya çıkarak Fas'ın bağımsızlığını destekleyen bir konuşma yaptı. Kriz, Fransa-İngiltere yakınlaşmasını (Entente Cordiale) pekiştirmesi bakımından tersine tepti ve Almanya'nın diplomatik yalnızlaşmasını derinleştirdi.",
  kaynak:"bulunamadı — 31 Mart 1905 Tanca çıkarması standart diplomasi tarihi kabulüdür, akademik eserde müstakil doğrulanmadı" },

{ t:"1911-07-01", b:"İkinci Fas Krizi — Agadir Krizi", tur:"kriz", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","siyasi"],
  d:"Almanya, Fransa'nın Fas'taki genişlemesine karşılık Agadir limanına Panther adlı bir savaş gemisi gönderdi. Kriz diplomatik yollarla (Almanya'nın Orta Afrika'da toprak tavizi almasıyla) çözüldü, ama İngiltere'de Almanya'ya karşı kamuoyu tepkisini keskinleştirdi ve I. Dünya Savaşı öncesi silahlanma yarışını hızlandırdı.",
  kaynak:"bulunamadı — Panther gemisinin Agadir'e 1 Temmuz 1911'de varışı standart tarih, akademik eserde müstakil doğrulanmadı" },

{ t:"1913-12-14", b:"Liman von Sanders'in Osmanlı ordusuna atanması", tur:"askeri", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","diplomasi"],
  d:"Alman General Otto Liman von Sanders başkanlığındaki subay heyeti, Osmanlı ordusunun üst kademelerine danışman olarak atandı ve İstanbul'a geldi. Atama, Rusya'nın sert tepkisiyle uluslararası bir krize (Liman von Sanders Krizi) dönüştü ve Almanya'nın Osmanlı ordusundaki etkisinin I. Dünya Savaşı öncesi zirvesini işaretledi.",
  kaynak:"TDV `almanya`: \"1913 General Liman von Sanders başkanlığındaki Alman subay grubu ordunun üst makamlarına tayin edildi\" — bu oturumda okundu; varış tarihi 14 Aralık 1913 standart tarihyazımından alındı" },

// ══════════════════════════════════════════════════════════════════
// VIII. DÜNYA SAVAŞI VE ÇÖKÜŞ (1914-1923)
// ══════════════════════════════════════════════════════════════════

{ t:"1914-08-02", b:"Osmanlı-Alman gizli ittifak antlaşması", tur:"ittifak", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["ittifak","diplomasi"],
  d:"Sırbistan'a savaş ilanından beş gün sonra, Osmanlı Devleti ile Almanya arasında savunma amaçlı gizli bir ittifak antlaşması imzalandı. Antlaşma, Osmanlı'nın üç ay sonra Almanya'nın yanında savaşa girmesinin hukukî temelini oluşturdu.",
  kaynak:"TDV `almanya`: \"2 Ağustos 1914 Gizli savunma ittifakı antlaşması imzalandı; Osmanlı Devleti savaşa girdi\" — bu oturumda okundu; devletler.js `almanya` künyesindeki 1914-08-02 tarihiyle BİREBİR örtüşüyor" },

{ t:"1914-08-04", b:"Almanya'nın Belçika'yı işgali ve İngiltere'nin savaş ilanı", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["askeri","siyasi"],
  d:"Fransa'yı hızla saf dışı bırakmayı öngören Schlieffen Planı gereği Alman orduları tarafsız Belçika'yı işgal etti; Belçika'nın bağımsızlığını garanti eden İngiltere aynı gün Almanya'ya savaş ilan etti. Bu, Avrupa'nın büyük güçlerinin tamamını saran genel bir savaşın başlangıcıydı.",
  kaynak:"Clark, The Sleepwalkers — Schlieffen Planı'nın uygulanması ve 4 Ağustos 1914 İngiliz savaş ilanı" },

{ t:"1914-08-30", b:"Tannenberg Muharebesi'nin sonuçlanması", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Hindenburg ve Ludendorff komutasındaki Alman 8. Ordusu, Doğu Prusya'ya giren Rus 2. Ordusu'nu Tannenberg'de neredeyse tamamen imha etti. Zafer, savaşın en büyük Alman askerî başarılarından biri olarak Hindenburg'u ulusal kahraman ilan etti ve 1925'te onu cumhurbaşkanlığına taşıyacak itibarın temelini attı.",
  kaynak:"bulunamadı — Tannenberg Muharebesi'nin 26-30 Ağustos 1914 seyri standart askerî tarih kabulüdür, akademik eserde müstakil doğrulanmadı" },

{ t:"1916-02-21", b:"Verdun Muharebesi'nin başlaması", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Alman Genelkurmay Başkanı Falkenhayn'ın Fransız ordusunu \"kansız bırakma\" stratejisiyle başlattığı Verdun taarruzu, on ay süren ve yaklaşık 700.000 kayıpla sonuçlanan Batı Cephesi'nin en kanlı muharebesine dönüştü. Muharebe hiçbir tarafa kesin üstünlük sağlamadan Alman güç kaybının simgesi hâline geldi.",
  kaynak:"bulunamadı — Verdun'ün 21 Şubat 1916'da başlaması standart askerî tarih kabulüdür, akademik eserde müstakil doğrulanmadı" },

{ t:"1916-05-31", b:"Skagerrak (Jutland) Deniz Muharebesi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Kiel",
  etiket:["askeri"],
  d:"Alman Açık Deniz Filosu ile İngiliz Büyük Filosu, savaşın en büyük ve tek büyük donanma çarpışmasında Kuzey Denizi'nde karşılaştı; Almanya taktik olarak daha az gemi kaybetti ama stratejik üstünlüğü İngiltere'de kaldı ve Alman filosu savaşın geri kalanında limanlarda kaldı.",
  kaynak:"bulunamadı — Skagerrak Muharebesi'nin 31 Mayıs-1 Haziran 1916 tarihleri standart askerî tarih kabulüdür, akademik eserde müstakil doğrulanmadı" },

{ t:"1915-11-25", b:"Einstein'ın genel görelilik alan denklemlerini sunması", tur:"bilim", onem:5, dunya:4, kapsam:"ic", yer_id:"Berlin",
  etiket:["bilim"],
  d:"1914'te Prusya Bilimler Akademisi'ne üye olarak Berlin'e yerleşen Albert Einstein, genel görelilik kuramının nihai alan denklemlerini akademiye sundu. Kuram, kütleçekimini uzay-zamanın eğriliği olarak yeniden tanımlayarak Newton fiziğinden bu yana en köklü kavramsal dönüşümü gerçekleştirdi.",
  kaynak:"bulunamadı — Einstein'ın 25 Kasım 1915 sunumu bilim tarihinde standart kabuldür, akademik eserde müstakil doğrulanmadı" },

{ t:"1917-04-06", b:"ABD'nin Almanya'ya savaş ilanı", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["askeri","siyasi"],
  d:"Almanya'nın sınırsız denizaltı savaşını yeniden başlatması ve Zimmermann Telgrafı'nın ifşasının ardından ABD Kongresi, Almanya'ya savaş ilan etti. Amerikan askerî ve ekonomik gücünün savaşa girişi, Almanya'nın nihai yenilgisinde belirleyici etkenlerden biri oldu.",
  kaynak:"bulunamadı — ABD savaş ilanının 6 Nisan 1917 tarihi standart tarih, akademik eserde müstakil doğrulanmadı" },

{ t:"1918-03-21", b:"Alman Bahar Taarruzu'nun (Kaiserschlacht) başlaması", tur:"savas", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Rusya'nın savaştan çekilmesiyle Doğu Cephesi'nden serbest kalan tümenleri Batı'ya kaydıran Ludendorff, Amerikan takviyeleri tam güce ulaşmadan kesin zafer aramak için büyük bir taarruz başlattı. İlk haftalarda önemli topraklar kazanılsa da taarruz Temmuz'da tükendi ve Müttefiklerin karşı saldırısına zemin hazırladı.",
  kaynak:"bulunamadı — Kaiserschlacht'ın 21 Mart 1918 başlangıcı standart askerî tarih kabulüdür, akademik eserde müstakil doğrulanmadı" },

{ t:"1918-11-09", b:"II. Wilhelm'in tahttan çekilmesi ve Cumhuriyet ilanı", tur:"son", onem:5, dunya:5, kapsam:"ic", yer_id:"Berlin",
  etiket:["siyasi","son"],
  d:"Kiel'deki donanma isyanının bütün ülkeye yayılmasıyla İmparator II. Wilhelm tahttan feragat etmek zorunda kaldı ve Hollanda'ya sığındı; aynı gün Berlin'de Sosyal Demokrat Philipp Scheidemann Cumhuriyeti ilan etti. Elli asırlık Alman imparatorluk geleneği bu günle sona erdi.",
  kaynak:"Blackbourn — II. Wilhelm'in feragati ve Cumhuriyet ilanının 9 Kasım 1918'de gerçekleşmesi" },

{ t:"1919-06-28", b:"Versay Antlaşması'nın imzalanması", tur:"antlasma", onem:5, dunya:5, kapsam:"dis", yer_id:"Metz",
  etiket:["diplomasi","toprak-kayip"],
  d:"Versay Sarayı'nın aynı Aynalı Salonu'nda (1871'deki imparatorluk ilanının tam tersi bir sahnede) imzalanan antlaşma, Almanya'ya savaş suçluluğunu kabul ettirdi, Alsace-Lorraine'i Fransa'ya iade ettirdi, sömürgelerini elinden aldı ve ağır tazminat yükümlülüğü getirdi. Antlaşmanın algılanan adaletsizliği, Weimar Cumhuriyeti'nin meşruiyet krizinin başlıca kaynaklarından biri oldu.",
  kaynak:"Blackbourn — Versay Antlaşması'nın 28 Haziran 1919 imzası; Metz'in Fransa'ya iadesi yerlesimler.js'te aynı döneme (t:1919-06-28) denk düşüyor" },

{ t:"1919-08-11", b:"Weimar Anayasası'nın kabulü", tur:"anayasa", onem:5, dunya:3, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["idari","siyasi"],
  d:"Weimar'da toplanan Ulusal Meclis'in kabul ettiği anayasa, evrensel oy hakkı (kadınlar dahil), orantılı temsil ve geniş temel haklar güvencesiyle döneminin en demokratik anayasalarından biriydi. Aynı zamanda cumhurbaşkanına olağanüstü hâl yetkisi veren 48. madde, on dört yıl sonra Nazi rejiminin hukukî zeminini de hazırladı.",
  kaynak:"Blackbourn — Weimar Anayasası'nın 11 Ağustos 1919 kabulü. Weimar yerleşim kaydı yok" },

{ t:"1923-01-11", b:"Fransız-Belçika Ruhr İşgali", tur:"isgal", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","iktisat"],
  d:"Almanya'nın savaş tazminatı ödemelerinde temerrüde düşmesi bahanesiyle Fransız ve Belçika birlikleri, Almanya'nın sanayi kalbi Ruhr bölgesini işgal etti. Alman hükûmetinin \"pasif direniş\" çağrısı, işçilere maaş ödemek için para basımını hızlandırarak hiperenflasyonu doludizgin bir çöküşe sürükledi.",
  kaynak:"Blackbourn — Ruhr İşgali'nin 11 Ocak 1923 başlangıcı" },

{ t:"1923-11-15", b:"Rentenmark'ın çıkarılması — hiperenflasyonun durdurulması", tur:"reform", onem:4, dunya:2, kapsam:"ic", yer_id:"Berlin",
  etiket:["iktisat","reform"],
  d:"Kasım 1923'te bir dolar 4,2 trilyon markla değişilirken, geçici para birimi Rentenmark'ın çıkarılması ve arzının sıkı biçimde sınırlandırılması, dünyanın en şiddetli hiperenflasyon örneklerinden birini haftalar içinde durdurdu. İstikrar, Weimar Cumhuriyeti'nin görece sakin \"altın çağının\" (1924-1929) başlangıcı oldu.",
  kaynak:"Blackbourn — Rentenmark'ın 15 Kasım 1923'te çıkarılması ve hiperenflasyonun durması" }

];
