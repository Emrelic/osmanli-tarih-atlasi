// =====================================================================
// YER YAMA -- FRANSA (M-1142, SONNET HAZIR KITA 64, 23 Agustos 2026)
// =====================================================================
// Kaynak dosya: data/kronoloji_fransa.js (184 madde, 70'i olay mahalli
// damgasi tasimiyordu -- bu dosya o 70'in tamamini kapatiyor).
// UYARI: BU DOSYA KRONOLOJIYE YAZMAZ. Koordinator par.7 sahipligiyle
//    data/kronoloji_fransa.js'e uygular (dosya+t+b uclusuyle eslesir).
//
// Uc kova (M-1126/M-1142 sartnamesi):
//   yer_id        -- nokta yerlesim havuzunda (arac/girdi.py, 2605 kayit) VAR
//   eksik_nokta   -- yer belli, havuzda YOK, koordinat arastirilip verildi
//   kapsam_genis  -- olay tek noktaya sigmiyor (sefer/surec/cok yerli madde)
//
// SAYIM: 70/70 -- yer_id 22 -- eksik_nokta 38 -- kapsam_genis 10
// Her yer_id degeri arac/girdi.py girdi.yukle() havuzunda DOGRULANDI.
// TDV KAPSAMI UYARISI (M-1142): Bati Avrupa'nin ic tarihi TDV'de %0
//   kapsaniyor -- bu yuzden yer tespiti buyuk olcude standart tarihi
//   olgulara (yaygin bilinen yerlesim adlari) ve WebSearch ile ayrica
//   dogrulanan birkac biyografik/diplomatik detaya dayaniyor; her kayitta
//   kaynak: alaninda ACIKCA isaretli (madde basliginda adi geciyor mu,
//   yoksa ek arastirma mi gerekti).
// =====================================================================

window.YER_YAMA_FRANSA = [
{ dosya:"kronoloji_fransa.js", t:"1303-09-07", b:"Anagni Baskını — Papa VIII. Bonifacius'un tutuklanması",
  eksik_nokta:{ ad:"Anagni", enlem:41.746, boylam:13.152, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Lazio, İtalya)" } },

{ dosya:"kronoloji_fransa.js", t:"1337-05-24", b:"Yüzyıl Savaşları'nın başlaması", kapsam_genis:true,
  not:"III. Edward'ın hak iddiası resmî bir tören/ilan yeri olmadan, karşılıklı diplomatik notlarla ileri sürüldü; savaşın 'başlaması' tek bir olaya/yere bağlanamaz", kaynak:"akademik: Colin Jones, Cambridge Illustrated History of France (1999)" },

{ dosya:"kronoloji_fransa.js", t:"1340-06-24", b:"Sluys Deniz Savaşı — Fransız donanmasının imhası",
  eksik_nokta:{ ad:"Sluys", enlem:51.308, boylam:3.383, kaynak:"yer adı madde başlığında; koordinat: bilinen kıyı yerleşimi (Flandre/Hollanda)" } },

{ dosya:"kronoloji_fransa.js", t:"1346-08-26", b:"Crécy Savaşı — Fransız şövalye ordusunun bozgunu",
  eksik_nokta:{ ad:"Crécy-en-Ponthieu", enlem:50.258, boylam:1.886, kaynak:"yer adı madde başlığında ('Crécy Savaşı'); koordinat: bilinen yerleşim konumu" } },

{ dosya:"kronoloji_fransa.js", t:"1358-05-28", b:"Jacquerie köylü ayaklanması", kapsam_genis:true,
  not:"Kuzey Fransa'nın (Beauvaisis ve çevresi) birçok köyüne yayılan bir köylü isyanı; tek noktaya sığmaz", kaynak:"akademik: R.J. Knecht üzerinden standart ders kitabı bilgisi" },

{ dosya:"kronoloji_fransa.js", t:"1360-05-08", b:"Brétigny Antlaşması",
  eksik_nokta:{ ad:"Brétigny", enlem:48.47, boylam:1.47, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Chartres yakını)" } },

{ dosya:"kronoloji_fransa.js", t:"1415-10-25", b:"Azincourt Savaşı",
  eksik_nokta:{ ad:"Azincourt", enlem:50.467, boylam:2.133, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Pas-de-Calais)" } },

{ dosya:"kronoloji_fransa.js", t:"1420-05-21", b:"Troyes Antlaşması — İngiliz veraset iddiasının tescili", yer_id:"Troyes",
  kaynak:"yer adı madde başlığında; havuzda birebir nokta var" },

{ dosya:"kronoloji_fransa.js", t:"1435-09-21", b:"Arras Antlaşması — Burgonya'nın Fransa'ya dönüşü", yer_id:"Arras",
  kaynak:"yer adı madde başlığında; havuzda birebir nokta var" },

{ dosya:"kronoloji_fransa.js", t:"1445-01-01", b:"Compagnies d'ordonnance — daimî kraliyet ordusunun kurulması", kapsam_genis:true,
  not:"Kraliyet ordusunun kurulması bir tek yere bağlı bir tören değil, geniş kapsamlı bir idari-askerî reform; kesin ilan yeri kaynaklarda net değil", kaynak:"akademik: standart ders kitabı bilgisi — yer belirsiz, tarih de YYYY-01-01" },

{ dosya:"kronoloji_fransa.js", t:"1453-07-17", b:"Castillon Savaşı — Yüzyıl Savaşları'nın fiilen sona ermesi",
  eksik_nokta:{ ad:"Castillon-la-Bataille", enlem:44.85, boylam:-0.033, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Gironde)" } },

{ dosya:"kronoloji_fransa.js", t:"1494-09-02", b:"İtalyan Savaşları'nın başlaması — VIII. Charles'ın Napoli seferi", kapsam_genis:true,
  not:"VIII. Charles'ın Napoli'ye uzanan seferi Fransa'dan Alp geçitleri üzerinden İtalya'ya uzanan çok duraklı bir yürüyüş; tek noktaya sığmaz", kaynak:"akademik: standart ders kitabı bilgisi" },

{ dosya:"kronoloji_fransa.js", t:"1515-09-14", b:"Marignano Savaşı",
  eksik_nokta:{ ad:"Marignano (Melegnano)", enlem:45.356, boylam:9.328, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Lombardiya)" } },

{ dosya:"kronoloji_fransa.js", t:"1516-08-18", b:"Bologna Konkordatosu",
  eksik_nokta:{ ad:"Bologna", enlem:44.495, boylam:11.343, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (İtalya)" } },

{ dosya:"kronoloji_fransa.js", t:"1525-02-24", b:"Pavia Savaşı — I. François'nın esir düşmesi",
  eksik_nokta:{ ad:"Pavia", enlem:45.185, boylam:9.158, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Lombardiya)" } },

{ dosya:"kronoloji_fransa.js", t:"1539-08-10", b:"Villers-Cotterêts Fermanı — Fransızcanın resmî idare dili olması",
  eksik_nokta:{ ad:"Villers-Cotterêts", enlem:49.25, boylam:3.086, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Aisne)" } },

{ dosya:"kronoloji_fransa.js", t:"1559-04-03", b:"Cateau-Cambrésis Antlaşması — İtalyan Savaşları'nın sona ermesi",
  eksik_nokta:{ ad:"Le Cateau-Cambrésis", enlem:50.097, boylam:3.539, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Nord)" } },

{ dosya:"kronoloji_fransa.js", t:"1562-03-01", b:"Wassy Katliamı — Din Savaşları'nın başlaması",
  eksik_nokta:{ ad:"Wassy", enlem:48.5, boylam:4.683, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Haute-Marne)" } },

{ dosya:"kronoloji_fransa.js", t:"1608-07-03", b:"Samuel de Champlain'in Québec'i kurması", yer_id:"Quebec",
  kaynak:"yer adı madde başlığında ('Québec'i kurması'); havuzda birebir nokta var" },

{ dosya:"kronoloji_fransa.js", t:"1635-05-19", b:"Fransa'nın Otuz Yıl Savaşları'na resmen girmesi", yer_id:"Paris",
  kaynak:"savaş ilanı kraliyet hükümetinin merkezi Paris'ten yapıldı — madde metninde şehir adı yok, TDV/akademik ile ayrıca doğrulanmadı" },

{ dosya:"kronoloji_fransa.js", t:"1637-06-08", b:"Descartes'ın 'Yöntem Üzerine Söylev'inin yayımlanması",
  eksik_nokta:{ ad:"Leiden", enlem:52.16, boylam:4.497, kaynak:"madde metninde 'Hollanda'da basılan' geçiyor ama şehir adı yok; basım yeri WebSearch ile doğrulandı (Jean Maire matbaası, Leiden) — TDV/akademik ile ayrıca doğrulanmadı" } },

{ dosya:"kronoloji_fransa.js", t:"1643-05-19", b:"Rocroi Savaşı — İspanyol piyade üstünlüğünün kırılması",
  eksik_nokta:{ ad:"Rocroi", enlem:49.933, boylam:4.517, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Ardennes)" } },

{ dosya:"kronoloji_fransa.js", t:"1648-10-24", b:"Vestfalya Barışı'nın imzalanması", yer_id:"Münster",
  kaynak:"Vestfalya barış antlaşmaları iki şehirde imzalandı (Osnabrück, Münster); Fransa'nın imzaladığı antlaşma Münster'de yapıldı — havuzda birebir nokta var" },

{ dosya:"kronoloji_fransa.js", t:"1659-11-07", b:"Pireneler Antlaşması",
  eksik_nokta:{ ad:"Faisan Adası (Île des Faisans)", enlem:43.347, boylam:-1.79, kaynak:"Pireneler Antlaşması Bidasoa Nehri'ndeki Faisan Adası'nda imzalandı — koordinat: bilinen konum (Fransa-İspanya sınırı)" } },

{ dosya:"kronoloji_fransa.js", t:"1661-09-05", b:"Maliye Nazırı Fouquet'nin tutuklanması", yer_id:"Nantes",
  kaynak:"madde metninde tarih ('5 Eylül 1661') Fouquet'nin Nantes'ta tutuklanmasıyla birebir örtüşüyor (kralın Nantes ziyareti sırasında) — havuzda birebir nokta var" },

{ dosya:"kronoloji_fransa.js", t:"1667-05-24", b:"Devrolma Savaşı'nın başlaması", kapsam_genis:true,
  not:"Devrolma Savaşı, İspanyol Hollandası'nın birçok şehrine yönelen bir işgal seferiydi; tek bir başlangıç noktası yok", kaynak:"akademik: John A. Lynn, The Wars of Louis XIV (1999)" },

{ dosya:"kronoloji_fransa.js", t:"1682-05-06", b:"Sarayın Versay'a taşınması",
  eksik_nokta:{ ad:"Versay (Versailles)", enlem:48.805, boylam:2.12, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu" } },

{ dosya:"kronoloji_fransa.js", t:"1685-10-18", b:"Nantes Fermanı'nın İlgası (Fontainebleau Fermanı)",
  eksik_nokta:{ ad:"Fontainebleau", enlem:48.408, boylam:2.701, kaynak:"yer adı madde başlığında parantezle geçiyor ('Fontainebleau Fermanı'); koordinat: bilinen yerleşim konumu" } },

{ dosya:"kronoloji_fransa.js", t:"1701-09-07", b:"İspanya Veraset Savaşı'nın başlaması", kapsam_genis:true,
  not:"İspanya Veraset Savaşı'nın başlaması tek bir ilan törenine değil, Avrupa çapında bir ittifaklar zincirinin (Büyük İttifak) oluşumuna bağlı; tek noktaya sığmaz", kaynak:"akademik: standart ders kitabı bilgisi" },

{ dosya:"kronoloji_fransa.js", t:"1756-01-01", b:"Diplomatik Devrim ve Yedi Yıl Savaşları'na giriş", kapsam_genis:true,
  not:"Diplomatik Devrim, Viyana-Versay arasında aylar süren müzakerelerle oluştu; tek bir yere ya da güne bağlanamaz (tarih de YYYY-01-01)", kaynak:"akademik: standart ders kitabı bilgisi" },

{ dosya:"kronoloji_fransa.js", t:"1763-02-10", b:"Paris Antlaşması — Yeni Fransa'nın kaybı", yer_id:"Paris",
  kaynak:"yer adı madde başlığında; havuzda birebir nokta var" },

{ dosya:"kronoloji_fransa.js", t:"1778-02-06", b:"Fransa'nın Amerikan bağımsızlık savaşçılarıyla ittifakı", yer_id:"Paris",
  kaynak:"Fransa-Amerika İttifak Antlaşması Paris'te imzalandı — madde metninde şehir adı yok, TDV/akademik ile ayrıca doğrulanmadı" },

{ dosya:"kronoloji_fransa.js", t:"1790-07-12", b:"Ruhban Sınıfının Medenî Anayasası", yer_id:"Paris",
  kaynak:"Kurucu Meclis'in kararı Paris'te alındı — madde metninde şehir adı yok, TDV/akademik ile ayrıca doğrulanmadı" },

{ dosya:"kronoloji_fransa.js", t:"1791-06-20", b:"Kraliyet ailesinin Varennes Kaçışı",
  eksik_nokta:{ ad:"Varennes-en-Argonne", enlem:49.2, boylam:5.033, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Meuse)" } },

{ dosya:"kronoloji_fransa.js", t:"1792-04-20", b:"Fransa'nın Avusturya'ya savaş açması", yer_id:"Paris",
  kaynak:"savaş ilanı Yasama Meclisi'nce Paris'te (Tuileries) yapıldı — madde metninde şehir adı yok, TDV/akademik ile ayrıca doğrulanmadı" },

{ dosya:"kronoloji_fransa.js", t:"1792-09-20", b:"Valmy Muharebesi — Fransız ordusunun ilk zaferi",
  eksik_nokta:{ ad:"Valmy", enlem:49.05, boylam:4.767, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Marne)" } },

{ dosya:"kronoloji_fransa.js", t:"1796-04-12", b:"Napolyon Bonapart'ın İtalya Seferi'nin başlaması", kapsam_genis:true,
  not:"Napolyon'un İtalya Seferi, Nice'teki ordu karargâhından başlayıp Alpler üzerinden Kuzey İtalya'ya uzanan çok duraklı bir yürüyüş; tek noktaya sığmaz", kaynak:"akademik: standart ders kitabı bilgisi" },

{ dosya:"kronoloji_fransa.js", t:"1797-10-17", b:"Campo Formio Antlaşması",
  eksik_nokta:{ ad:"Campoformido", enlem:46.017, boylam:13.167, kaynak:"yer adı madde başlığında ('Campo Formio'); koordinat: bilinen yerleşim konumu (Udine yakını, İtalya) — aynı olay kronoloji_venedik.js'te de var" } },

{ dosya:"kronoloji_fransa.js", t:"1801-07-15", b:"Napolyon-Papalık Konkordatosu", yer_id:"Paris",
  kaynak:"Konkordato Paris'te imzalandı — madde metninde şehir adı yok, TDV/akademik ile ayrıca doğrulanmadı" },

{ dosya:"kronoloji_fransa.js", t:"1802-05-01", b:"Lise (Lycée) sisteminin kurulması", yer_id:"Paris",
  kaynak:"lise sistemi merkezi hükümetçe Paris'ten kuruldu — madde metninde şehir adı yok, TDV/akademik ile ayrıca doğrulanmadı" },

{ dosya:"kronoloji_fransa.js", t:"1805-12-02", b:"Austerlitz Savaşı — 'Üç İmparator Muharebesi'",
  eksik_nokta:{ ad:"Austerlitz (Slavkov u Brna)", enlem:49.152, boylam:16.882, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Moravya)" } },

{ dosya:"kronoloji_fransa.js", t:"1806-08-06", b:"Kutsal Roma-Germen İmparatorluğu'nun sona ermesi", yer_id:"Viyana",
  kaynak:"II. Franz'ın feragati Viyana'da ilan edildi — havuzda birebir nokta var" },

{ dosya:"kronoloji_fransa.js", t:"1807-07-07", b:"Tilsit Antlaşması",
  eksik_nokta:{ ad:"Tilsit (Sovetsk)", enlem:55.082, boylam:21.879, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (bugünkü Kaliningrad Oblastı, Rusya)" } },

{ dosya:"kronoloji_fransa.js", t:"1809-05-17", b:"Papalık topraklarının Fransa'ya ilhakı", yer_id:"Viyana",
  kaynak:"ilhak fermanı Napolyon'un o sıra karargâhı olan Schönbrunn Sarayı'ndan (Viyana) çıkarıldı — WebSearch ile doğrulandı, TDV/akademik ile ayrıca doğrulanmadı" },

{ dosya:"kronoloji_fransa.js", t:"1815-06-18", b:"Waterloo Savaşı — Napolyon'un kesin yenilgisi",
  eksik_nokta:{ ad:"Waterloo", enlem:50.717, boylam:4.4, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Belçika)" } },

{ dosya:"kronoloji_fransa.js", t:"1827-10-20", b:"Navarin Deniz Savaşı",
  eksik_nokta:{ ad:"Navarin", enlem:36.91, boylam:21.68, kaynak:"yer adı madde başlığında; koordinat data/savaslar.js'teki aynı olayla (satır 257: 'Navarin (deniz)') BİREBİR alındı" } },

{ dosya:"kronoloji_fransa.js", t:"1833-07-08", b:"Hünkâr İskelesi Antlaşması'nın imzalanması",
  eksik_nokta:{ ad:"Hünkâr İskelesi", enlem:41.05, boylam:29.05, kaynak:"yer adı madde başlığında; WebSearch ile yer tarifi doğrulandı (Boğaz'ın Anadolu yakası, İstanbul yakını) — TAM koordinat düşük güvenle, modern karşılığı kaynaklarda net verilmiyor" } },

{ dosya:"kronoloji_fransa.js", t:"1848-04-27", b:"Fransız sömürgelerinde köleliğin kaldırılması", yer_id:"Paris",
  kaynak:"kararname Geçici Hükümet'çe Paris'te çıkarıldı — madde metninde şehir adı yok, TDV/akademik ile ayrıca doğrulanmadı" },

{ dosya:"kronoloji_fransa.js", t:"1853-10-04", b:"Kırım Savaşı'nın başlaması — Fransa'nın Osmanlı yanında savaşa girişi", yer_id:"Paris",
  kaynak:"savaşa giriş kararı Fransız hükümetince Paris'te alındı — madde metninde şehir adı yok, TDV/akademik ile ayrıca doğrulanmadı" },

{ dosya:"kronoloji_fransa.js", t:"1859-06-24", b:"Solferino Savaşı — İtalyan birliği için Fransız desteği",
  eksik_nokta:{ ad:"Solferino", enlem:45.383, boylam:10.583, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Lombardiya) — data/kronoloji_macaristan.js'teki aynı olayla (M-1126) BİREBİR" } },

{ dosya:"kronoloji_fransa.js", t:"1863-06-10", b:"Meksika Seferi — Maximilian'ın imparator ilanı hazırlığı", kapsam_genis:true,
  not:"Meksika Seferi, Vera Cruz çıkarmasından Mexico City'ye uzanan çok yıllık bir işgal seferi; tek noktaya sığmaz", kaynak:"akademik: standart ders kitabı bilgisi" },

{ dosya:"kronoloji_fransa.js", t:"1869-11-17", b:"Süveyş Kanalı'nın açılışı",
  eksik_nokta:{ ad:"Port Said", enlem:31.265, boylam:32.302, kaynak:"Süveyş Kanalı'nın açılış töreni Port Said'de yapıldı — koordinat: bilinen yerleşim konumu (Mısır)" } },

{ dosya:"kronoloji_fransa.js", t:"1870-07-19", b:"Fransa-Prusya Savaşı'nın başlaması", yer_id:"Paris",
  kaynak:"savaş ilanı Fransız hükümetince Paris'te yapıldı — madde metninde şehir adı yok, TDV/akademik ile ayrıca doğrulanmadı" },

{ dosya:"kronoloji_fransa.js", t:"1870-09-02", b:"Sedan Savaşı — III. Napolyon'un esir düşmesi",
  eksik_nokta:{ ad:"Sedan", enlem:49.7, boylam:4.95, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Ardennes)" } },

{ dosya:"kronoloji_fransa.js", t:"1871-01-18", b:"Alman İmparatorluğu'nun Versay'da ilanı",
  eksik_nokta:{ ad:"Versay (Versailles)", enlem:48.805, boylam:2.12, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu" } },

{ dosya:"kronoloji_fransa.js", t:"1881-03-28", b:"Jules Ferry Yasaları — laik, zorunlu ve parasız ilköğretim", yer_id:"Paris",
  kaynak:"yasalar Fransız Meclisi'nce Paris'te kabul edildi — madde metninde şehir adı yok, TDV/akademik ile ayrıca doğrulanmadı" },

{ dosya:"kronoloji_fransa.js", t:"1911-11-04", b:"İkinci Fas Krizi — Agadir Krizi'nin çözümü", yer_id:"Berlin",
  kaynak:"krizi çözen Fas-Kongo Antlaşması 4 Kasım 1911'de Berlin'de imzalandı — WebSearch ile doğrulandı; havuzda birebir nokta var" },

{ dosya:"kronoloji_fransa.js", t:"1912-03-30", b:"Fas Antlaşması — Fransız himayesinin resmîleşmesi",
  eksik_nokta:{ ad:"Fes (Fez)", enlem:34.033, boylam:-5.0, kaynak:"madde metninde 'Fes Antlaşması' açıkça geçiyor; koordinat: bilinen yerleşim konumu (Fas)" } },

{ dosya:"kronoloji_fransa.js", t:"1916-02-21", b:"Verdun Savaşı'nın başlaması",
  eksik_nokta:{ ad:"Verdun", enlem:49.159, boylam:5.382, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Meuse)" } },

{ dosya:"kronoloji_fransa.js", t:"1916-05-16", b:"Sykes-Picot Antlaşması'nın imzalanması", yer_id:"Londra",
  kaynak:"antlaşma Downing Street'te (Londra) imzalandı — WebSearch ile doğrulandı; havuzda birebir nokta var" },

{ dosya:"kronoloji_fransa.js", t:"1916-09-15", b:"İlk tank saldırısı — Somme Muharebesi'nde",
  eksik_nokta:{ ad:"Somme (Albert)", enlem:50.0, boylam:2.65, kaynak:"yer adı madde başlığında ('Somme Muharebesi'); koordinat Somme cephesinin merkezi kasabası Albert'e göre verildi" } },

{ dosya:"kronoloji_fransa.js", t:"1917-04-16", b:"Nivelle Taarruzu ve Fransız ordusu isyanları", kapsam_genis:true,
  not:"İsyanlar tek bir birlikte değil, cephe boyunca birçok Fransız tümeninde yayıldı; tek noktaya sığmaz", kaynak:"akademik: standart ders kitabı bilgisi" },

{ dosya:"kronoloji_fransa.js", t:"1917-04-17", b:"Saint-Jean-de-Maurienne Antlaşması",
  eksik_nokta:{ ad:"Saint-Jean-de-Maurienne", enlem:45.276, boylam:6.349, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Savoie)" } },

{ dosya:"kronoloji_fransa.js", t:"1918-11-11", b:"Compiègne Ateşkesi — I. Dünya Savaşı'nın Batı Cephesi'nde sona ermesi",
  eksik_nokta:{ ad:"Compiègne", enlem:49.417, boylam:2.826, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Oise) — imza yeri Compiègne ormanındaki bir tren vagonu, kasaba koordinatıyla temsil edildi" } },

{ dosya:"kronoloji_fransa.js", t:"1919-06-28", b:"Versay Antlaşması'nın imzalanması",
  eksik_nokta:{ ad:"Versay (Versailles)", enlem:48.805, boylam:2.12, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu" } },

{ dosya:"kronoloji_fransa.js", t:"1920-04-25", b:"San Remo Konferansı — manda paylaşımının kesinleşmesi",
  eksik_nokta:{ ad:"San Remo", enlem:43.817, boylam:7.776, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (İtalya)" } },

{ dosya:"kronoloji_fransa.js", t:"1920-07-24", b:"Meysalun Savaşı — Fransa'nın Şam'ı işgali",
  eksik_nokta:{ ad:"Meysalun (Maysalun)", enlem:33.53, boylam:36.06, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Şam yakını, Suriye)" } },

{ dosya:"kronoloji_fransa.js", t:"1920-08-10", b:"Sevr Antlaşması'nın imzalanması",
  eksik_nokta:{ ad:"Sevr (Sèvres)", enlem:48.824, boylam:2.214, kaynak:"yer adı madde başlığında; koordinat: bilinen yerleşim konumu (Paris yakını)" } },

{ dosya:"kronoloji_fransa.js", t:"1921-10-20", b:"Ankara Antlaşması — Fransa'nın Anadolu'daki savaşı sona erdirmesi", yer_id:"Ankara",
  kaynak:"yer adı madde başlığında; havuzda birebir nokta var" },

{ dosya:"kronoloji_fransa.js", t:"1923-07-24", b:"Lozan Antlaşması'nın imzalanması", yer_id:"Lozan",
  kaynak:"yer adı madde başlığında; havuzda birebir nokta var" },

];