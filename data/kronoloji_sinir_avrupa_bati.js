// =====================================================================
// SINIR KRONOLOJİSİ — D3-AVRUPA-BATI (Batı Avrupa kara sınırları)
// =====================================================================
// window.KRONOLOJI_SINIR_AVRUPA_BATI — oturumlar/GERIYE-SARMA-0916.md ADIM 3.
// Her madde data/d_sinirlar_avrupa_bati.js'teki bir E/F/D hat değişikliğine bağlıdır
// (`sinir_id`). Biçim data/kronoloji_almanya.js ile aynı; EK alanlar:
//   devletler : ilgili İKİ devletin kimliği
//   sinir_id  : d_sinirlar_avrupa_bati.js kayıt kimliği (önek eşleşmesi: -1/-2 parçaları dahil)
// index.html'e BAĞLANMADI (koordinatör yapacak).
//
// KAPSAM: GERİYE SARMA G1 (1918-11-11 → 1923-10-29), G2 (1914-07-28 → 1918-11-11) ve
// G3 (1878-07-13 → 1914-07-28; bölgede hat geometrisini değiştiren olay yok, antlaşma/düzeltme maddeleri).
// G2'de hat değişikliği yalnız Finlandiya'nın ayrılmasıdır; 1914-18 cephe ve işgal hatları
// (Belçika, Lüksemburg, Kuzey Fransa, İtalya cephesi) koordinatı kesin olmadığı için ne
// kayıt ne madde aldı. Rusya'daki 1917 Şubat/Ekim hükûmet değişiklikleri hattı değiştirmedi,
// yalnız kayıtların taraf kimliğini böldü — madde almadı.
// G1 ayrıca: pencereyi AÇAN
// Villa Giusti ateşkesi (1918-11-03; G1 kaydının başlangıcı). C değişiklikleri madde
// ALMADI. İSTİSNA: Rapallo (hukukî sınıfı E/C, haritada koordinatı yok — YOK kaydı)
// başlıca bir antlaşma olduğu için madde aldı; `sinir_id` YOK kaydını gösterir.
//
// KAYNAK (§4): FRUS = ABD Dışişleri Foreign Relations of the United States
// (history.state.gov, metin okundu) · IBS = International Boundary Study
// (library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibsNNN.pdf, metin okundu) ·
// LNTS c.3 (Tartu) · irishstatutebook.ie (1922 Anayasası md. 83).
// Saint-Germain'in yürürlük GÜNÜ okunabilir bir kaynakta BULUNAMADI ⇒ madde YIL düzeyinde.
// TDV bu coğrafyayı bu taneciklikte kapsamıyor (CLAUDE.md §4 TANECİKLİK boşluğu).

window.KRONOLOJI_SINIR_AVRUPA_BATI = [

// ── G8-G10 (1281-01-01 → 1606-11-11) ────────────────────────────────
// Bu dönemde bölgede koordinatı bilinen hat YOK ⇒ hat kaydı yazılmadı (harita A/B). Maddeler
// GERIYE-SARMA §0 KAPSAM notu gereği antlaşma/fetih/katılma maddeleridir; bağlanacak hat kaydı
// olmayanlarda `sinir_id` BOŞTUR. Başka dosyada ZATEN bulunanlar yazılmadı: Cambrai 1529 · Calais
// 1558 · Cateau-Cambrésis 1559 · Feragat 1581 · Castillon 1453 · Nancy 1477 · Kastilya-Aragon 1479 ·
// Gırnata 1492 · Navarra 1512 · Marignano 1515 · İsveç 1523 · Edinburgh-Northampton 1328 ·
// Brétigny 1360 · Sebte 1415 · Troyes 1420 · Arras 1435 · Kalmar 1397.

{ odak_yer:["Berlin"], t:"1291-08-01", devlet:"isvicre", devletler:["isvicre","almanya"], sinir_id:"",
  b:"Federal Belge — Uri, Schwyz ve Nidwalden'in birliği", tur:"kurulus", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["konu-siyasi","isvicre","almanya"],
  d:"Uri, Schwyz ve Nidwalden birbirlerine yardım etmeyi ve anlaşmazlıklarını hakem yoluyla çözmeyi belgeyle taahhüt etti; İsviçre Konfederasyonu'nun başlangıcı sayılan bu birlik bir toprak değişikliği içermiyordu. Kaynak yalnız ayı veriyor (Ağustos 1291).", ic_not_d:"Uri, Schwyz ve Nidwalden birbirlerine yardım etmeyi ve anlaşmazlıklarını hakem yoluyla çözmeyi belgeyle taahhüt etti; İsviçre Konfederasyonu'nun başlangıcı sayılan bu birlik bir toprak değişikliği içermiyordu. Kaynak yalnız ayı veriyor (Ağustos 1291); gün isvicre künyesinden devralındı.",
  kaynak:"Historisches Lexikon der Schweiz 'Eidgenossenschaft'" },

{ odak_yer:["Lizbon"], t:"1297-09-12", devlet:"portekiz", devletler:["portekiz","kastilya"], sinir_id:"",
  b:"Alcañices Antlaşması — Portekiz–Kastilya sınırının temeli", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","portekiz","kastilya","ispanya"],
  d:"Kastilya ile Portekiz Alcañices'te imzaladıkları antlaşmayla Riba-Côa topraklarını ve kalelerini, Olivença, Campo Maior ve San Felices de los Gallegos'u Portekiz'e bıraktı. Antlaşma Portekiz'in askerî olarak zaten tuttuğu durumu tescil etti. Olivença 1801'de yeniden el değiştirdi; bu dönemin sınır hattının koordinatı haritada yoktur.",
  kaynak:"M. V. Magro, Porto Üniversitesi yüksek lisans tezi (2011)" },

{ odak_yer:["Berlin"], t:"1415-01-01", devlet:"isvicre", devletler:["isvicre","almanya"], sinir_id:"",
  b:"İsviçrelilerin Aargau'yu fethi", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["konu-siyasi","isvicre","almanya"],
  d:"İmparatorluktan sürgün edilen Habsburg Dükü IV. Friedrich'in Aargau'daki topraklarını İsviçreliler (Uri hariç) Nisan 1415'te ele geçirdi. Bern iki haftada Aarburg, Aarau, Zofingen, Lenzburg ve Brugg'u aldı; Luzern ve Zürih de birer pay aldı. Tarih YIL düzeyindedir: kaynak ayı veriyor, günü vermiyor.",
  kaynak:"Historisches Lexikon der Schweiz 'Aargau'" },

{ odak_yer:["Arras"], t:"1482-12-23", devlet:"fransa", devletler:["fransa","almanya"], sinir_id:"",
  b:"Arras Antlaşması — Burgonya mirasının paylaşılması", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","fransa","almanya","burgonya"],
  d:"Burgonya Düşesi Marie'nin 27 Mart 1482'deki ölümünün ardından Fransa ile Maximilian arasında imzalanan Arras Antlaşması, Franş-Konte, Artois, Mâconnais ve Auxerrois'yı Marguerite'in çeyizi olarak Fransa'ya bağladı; Pikardiya ile Burgonya dükalığı zımnen XI. Louis'ye bırakıldı. Bir katalog kaydı antlaşmayı 24 Aralık diye tarihliyor. Maximilian'ın tarafı atlasta 'almanya' künyesiyle gösterildi.",
  kaynak:"Larousse, Dictionnaire de l'Histoire de France · Britannica 'Mary, duchess of Burgundy' · Biblissima kaydı (24 Aralık — ÇELİŞKİ)" },

{ odak_yer:["Melîle"], t:"1497-09-17", devlet:"ispanya", devletler:["ispanya","merini"], sinir_id:"dg5-es-ma-melilla",
  b:"Melilla'nın alınması", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["konu-siyasi","ispanya","merini","fas"],
  d:"Terk edilmiş ve yıkılmış Melilla, Medina Sidonia Dükü adına Pedro de Estopiñán tarafından çatışmasız alındı. Resmî gün 17 Eylül'dür, ancak bir akademik çalışma bu günün 18. yüzyıl yazarlarından gelen bir yaklaşım olduğunu, çağdaş kronikçinin yalnız 'eylül' dediğini belirtir. TDV'de Melilla'nın müstakil maddesi yoktur.",
  kaynak:"İspanya Kara Kuvvetleri Müzesi (resmî) · E. Gozalbes Cravioto, 'La conquista cristiana de Melilla', Estudios de Frontera VI" },

{ odak_yer:["Basel"], t:"1499-09-22", devlet:"isvicre", devletler:["isvicre","almanya"], sinir_id:"",
  b:"Basel Barışı — Svabya Savaşı'nın sonu", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","isvicre","almanya"],
  d:"Kral Maximilian ile İsviçre Konfederasyonu arasında Basel'de imzalanan barış savaş öncesi durumu geri getirdi. İki istisna vardı: Prättigau'daki sekiz mahkeme Maximilian'da kaldı, Konstanz'a ait Thurgau bölge mahkemesi Ekim 1499'da İsviçrelilere verildi.",
  kaynak:"Historisches Lexikon der Schweiz 'Basel, Frieden von (1499)'" },

{ odak_yer:["Paris"], t:"1516-11-29", devlet:"isvicre", devletler:["isvicre","fransa"], sinir_id:"dg5-it-ch-1",
  b:"Fribourg Ebedî Barışı — Ticino vogtlukları İsviçre'de kaldı", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","isvicre","fransa","milano-dukaligi"],
  d:"Marignano yenilgisinden sonra İsviçre Konfederasyonu ile Fransa Fribourg'da ebedî barış imzaladı. İsviçreliler Milano üzerindeki himaye iddiasından vazgeçti; Alpler ötesindeki vogtlukları satın almak için yapılan Fransız teklifini reddedip bu toprakları ellerinde tuttu. Sonraki Ticino böylece kesin olarak İsviçre'de kaldı; Mendrisio 1521'den itibaren.",
  kaynak:"Historisches Lexikon der Schweiz 'Ewiger Frieden'" },

{ odak_yer:["Bretanya"], t:"1532-01-01", devlet:"fransa", devletler:["fransa","bretanya"], sinir_id:"",
  b:"Bretanya'nın Fransa tacına bağlanması (Birleşme Fermanı)", tur:"bolunme", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["konu-siyasi","fransa","bretanya"],
  d:"Nantes'ta çıkarılan Birleşme Fermanı Bretanya dükalığını Fransa tacına ebediyen bağladı; Bretanya'nın vergi rızası ve adalet düzeni gibi hakları korundu. Kaynak ayı veriyor (Ağustos 1532), günü vermiyor; tarih YIL düzeyindedir.",
  kaynak:"Loire-Atlantique Departman Arşivleri 'Édit d'union 1532' (asıl belge: Archives nationales AE/II/587)" },

{ odak_yer:["Bern"], t:"1536-01-22", devlet:"isvicre", devletler:["isvicre","savoya"], sinir_id:"dg5-sa-ch-1",
  b:"Bern'in Savoy'a ait Vaud'yu fethi", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["konu-siyasi","isvicre","savoya"],
  d:"Bern 22 Ocak 1536'da Savoy'a ait Vaud'ya sefer başlattı; 26 Şubat'a kadar Moudon, Nyon, Gex, Morges, Orbe ve Yverdon alındı, Cenevre kuşatması kaldırıldı. 20 Mart – 21 Nisan arasındaki ikinci seferde Chillon ve Lausanne düştü. Vaud Bern'e geçti; bazı bölgeler Bern ile Fribourg arasında paylaşıldı.",
  kaynak:"Historisches Lexikon der Schweiz 'Nägeli, Hans Franz' ve 'Waadt'" },

{ odak_yer:["Chambéry"], t:"1564-10-30", devlet:"isvicre", devletler:["isvicre","savoya"], sinir_id:"dg5-sa-ch-1",
  b:"Lausanne Antlaşması — Savoy Vaud'dan vazgeçti, Gex ve Chablais geri verildi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","isvicre","savoya"],
  d:"Bern ile Savoy Dükü arasında Lausanne'da imzalanan antlaşmayla dük Vaud'dan kesin olarak vazgeçti. Karşılığında Gex, Chablais, Ternier ve Gaillard'ın 1 Mart 1565'te Savoy'a geri verilmesi kararlaştırıldı; Bern bu toprakları fiilen ancak Ağustos 1567'de boşalttı.",
  kaynak:"Historisches Lexikon der Schweiz 'Lausanner Vertrag'" },

{ t:"1570-12-13", devlet:"danimarka", devletler:["danimarka","isvec"], sinir_id:"dg6-dk-se-1751-oncesi",
  b:"Stettin Barışı — Kuzey Yedi Yıl Savaşı'nın sonu", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Östersund (Jämtland)",
  etiket:["antlasma","konu-siyasi","danimarka","isvec","norvec-kralligi"],
  d:"Danimarka-Norveç ile İsveç Stettin'de barış imzaladı. İsveç işgal ettiği Jämtland ve Härjedalen'i geri verdi ve Gotland'dan resmen vazgeçti; Älvsborg için 150.000 taler fidye ödemeyi üstlendi. Aynı kaynak barışı savaş öncesi sınıra dönüş olarak da nitelendiriyor.",
  kaynak:"Store norske leksikon 'Den nordiske sjuårskrigen'" },

{ odak_yer:["İspanya"], t:"1598-05-02", devlet:"fransa", devletler:["fransa","ispanya"], sinir_id:"dg5-guneyhol-fr-1",
  b:"Vervins Barışı — İspanya Pikardiya'daki kaleleri Fransa'ya geri verdi", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","fransa","ispanya"],
  d:"Fransa ile İspanya Vervins'te barış imzaladı. II. Felipe Pikardiya'daki bir dizi kaleyi Fransa'ya geri verdi ve antlaşma Cateau-Cambrésis düzenini teyit etti. Geri verilen kalelerin adları okunabilir bir kaynakta bulunamadı.",
  kaynak:"BnF katalog kaydı cb11978828t · Larousse Encyclopédie 'traité de Vervins'" },

{ odak_yer:["Lyon"], t:"1601-01-17", devlet:"fransa", devletler:["fransa","savoya"], sinir_id:"dg5-fr-ch-jura-1",
  b:"Lyon Antlaşması — Bresse, Bugey ve Gex Fransa'ya geçti", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","fransa","savoya","isvicre"],
  d:"Savoy, Lyon Antlaşması'yla Bresse, Bugey ve Gex'i Fransa'ya bıraktı. Böylece Gex bölgesi Fransa'nın oldu; bugünkü Fransa–İsviçre sınırının Cenevre'nin kuzeybatısındaki kesimi bu bölgenin sınırıdır. Savoy'un karşılığında ne aldığı okunabilir bir kaynakta doğrulanamadı.",
  kaynak:"BnF katalog kaydı cb13750190w" },

// ── G5-G7 (1606-11-11 → 1815-06-09) ─────────────────────────────────
// Başka dosyada ZATEN bulunan maddeler yazılmadı: 1609 On İki Yıl Ateşkesi · Vestfalya 1648 ·
// Roskilde 1658 · Pireneler 1659 · Kopenhag 1660 · Lizbon 1668 · Utrecht 1713 · Rastatt 1714 ·
// Campo Formio 1797 · Fredrikshamn 1809 · Kiel 1814. Bu dönemin hatlarının çoğu haritada YOK kutusudur.

{ odak_yer:["Östersund"], t:"1645-08-13", devlet:"isvec", devletler:["isvec","danimarka"], sinir_id:"dg6-dk-se-1751-oncesi",
  b:"Brömsebro Barışı — Jämtland ve Härjedalen İsveç'e geçti", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","isvec","danimarka"],
  d:"Uzun müzakerelerin ardından Brömsebro'da imzalanan barışla Danimarka-Norveç, Norveç'in Jämtland ve Härjedalen illerini İsveç'e bıraktı. İki krallık arasındaki kuzey sınırı böylece batıya kaydı; ancak hat 1751'e kadar ayrıntılı olarak çizilmedi.",
  kaynak:"Den Store Danske (lex.dk) 'Brömsebro' · Store norske leksikon 'riksgrensen'" },

{ odak_yer:["Paris"], t:"1660-11-12", devlet:"fransa", devletler:["fransa","ispanya"], sinir_id:"d1923-fr-es-llivia",
  b:"Llívia sözleşmesi — Llívia'nın Cerdanya'da İspanyol anklavı olarak kalması", tur:"antlasma", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa","ispanya"],
  d:"Pireneler Antlaşması Cerdanya'nın köylerini Fransa'ya bırakmıştı. Llívia'da imzalanan sözleşme Llívia'yı bu devrin dışında tuttu; Llívia o günden beri Fransız toprağıyla çevrili bir İspanyol anklavıdır. Çevresi 1866 Bayonne Antlaşması'yla ayrıntılı olarak tarif edildi.",
  kaynak:"Pireneler Antlaşması ve Llívia sözleşmesi metni (Digithèque MJP, Perpignan Üniversitesi) · UNTS c.1288 No. 907 (Bayonne 1866 md. XVI)" },

{ t:"1668-05-02", devlet:"fransa", devletler:["fransa","ispanya"], sinir_id:"dg5-guneyhol-fr-1",
  b:"Aachen Barışı — Fransa ile İspanya arasında İspanyol Hollandası sınırının değişmesi", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"Lille",
  etiket:["sinir","antlasma","konu-siyasi","fransa","ispanya"],
  d:"Fransa ile İspanya arasında imzalanan Aachen Barışı İspanyol Hollandası ile Fransa arasındaki sınırı değiştirdi. Güney Hollanda–Fransa sınırı 1659, 1668, 1678 ve 1697 barışlarıyla defalarca değişti; bu hatların koordinatı haritada yoktur.",
  kaynak:"Aachen Antlaşması metni (Digithèque MJP, 1668aix)" },

{ t:"1678-09-17", devlet:"fransa", devletler:["fransa","ispanya"], sinir_id:"dg5-fr-ch-jura-1",
  b:"Nijmegen Barışı (Fransa–İspanya) — Franş-Konte Fransa'ya geçti", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"Besançon",
  etiket:["sinir","antlasma","konu-siyasi","fransa","ispanya","isvicre"],
  d:"Fransa ile İspanya arasındaki Nijmegen Barışı'nın XI. maddesiyle Franş-Konte Fransa'ya bırakıldı. Böylece bugünkü Fransa–İsviçre sınırının Jura kesimine komşu olan bölge Fransız oldu; İspanyol Hollandası sınırında da yeni değişiklikler yapıldı.",
  kaynak:"Nijmegen Antlaşması (Fransa–İspanya) metni, md. XI (Digithèque MJP, 1678nimegue)" },

{ odak_yer:["Norveç"], t:"1751-10-02", devlet:"danimarka", devletler:["danimarka","isvec"], sinir_id:"dg6-dk-se-stromstad",
  b:"Strömstad Sınır Antlaşması — Norveç–İsveç sınırı çizildi", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","danimarka","isvec","norvec"],
  d:"Danimarka-Norveç ile İsveç, Norveç ile İsveç arasındaki sınırı Strömstad'da imzalanan antlaşmayla güneyden kuzeye ayrıntılı olarak belirledi; Sami halkının haklarını düzenleyen Lapp ek maddesi de antlaşmanın parçasıdır. Hat 1752-1766 arasında yerinde işaretlendi. Antlaşma bugün de yürürlüktedir ve bugünkü Norveç–İsveç sınırının dayanağıdır. İsveç takvimine göre imza günü 21 Eylül'dür.",
  kaynak:"Store norske leksikon 'grensetraktaten av 1751' ve 'riksgrensen'" },

{ odak_yer:["Milano"], t:"1752-08-02", devlet:"isvicre", devletler:["isvicre","milano-dukaligi"], sinir_id:"dg5-it-ch-1",
  b:"Varese Antlaşması — Ticino ile Milano Dükalığı arasındaki sınırın sistemli delimitasyonu", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","isvicre","milano-dukaligi","habsburg"],
  d:"Milano Düşesi, Avusturya İmparatoriçesi ve İsviçre Konfederasyonu, Lugano, Locarno ve Mendrisio vilayetleri ile Lombardiya arasındaki sınırı Varese'de düzenledi. Antlaşma sınırın yöntemli biçimde çizilmesinin ilk ciddi girişimi sayılır; 1754-1755'te karma komisyonlar hattı ayrıntılı olarak belgeledi. 1861 Lugano Sözleşmesi de Ticino sınırındaki anlaşmazlıkları bu antlaşmaya dayanarak çözdü.",
  kaynak:"IBS No. 12 Italy–Switzerland (Treaty of Varese)" },

{ t:"1760-03-24", devlet:"sardinya-piyemonte", devletler:["sardinya-piyemonte","fransa"], sinir_id:"dg5-sa-fr-2",
  b:"Torino Antlaşması — Fransa ile Sardinya arasındaki sınırın düzenlenmesi", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"Torino",
  etiket:["sinir","antlasma","konu-siyasi","sardinya-piyemonte","fransa"],
  d:"Fransa ile Sardinya Krallığı, Savoy ve Nice kontluğu boyunca uzanan ortak sınırlarını Torino'da imzalanan antlaşmayla düzenledi. Bu hat 1792'de Savoy'un Fransa'ya katılmasına kadar sürdü; koordinatı haritada yoktur.",
  kaynak:"Torino Antlaşması 1760 metni (Digithèque MJP, 1760turin; Wenck derlemesi) · BnF katalog kaydı" },

{ odak_yer:["Paris"], t:"1766-02-23", devlet:"fransa", devletler:["fransa","almanya"], sinir_id:"dg5-fr-de-1",
  b:"Lorraine Fransa'ya katıldı — Stanislas'ın ölümü", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","fransa","almanya"],
  d:"Lorraine Dükü Stanislas Lunéville'de öldü ve düklük ertesi gün Fransız kralı adına ele geçirildi. Lorraine'in katılmasıyla Fransa'nın Alman devletleriyle olan kuzeydoğu sınırı değişti; bu hattın koordinatı haritada yoktur.",
  kaynak:"Musée Lorrain (Nancy)" },

{ odak_yer:["Cenevre"], t:"1792-11-27", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","sardinya-piyemonte"], sinir_id:"dg5-sa-ch-3",
  b:"Savoy'un Fransa'ya katılması — Cenevre ve Valais ile sınırlar Fransız oldu", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","fransa-cumhuriyet","sardinya-piyemonte","isvicre"],
  d:"Ulusal Konvansiyon Savoy'un Fransa'ya katılması kararını kabul etti; Nice'in katılması 31 Ocak 1793'te onaylandı. Savoy'un Cenevre ve Valais ile sınırları böylece Fransa'nın sınırı oldu. Cenevre 26 Nisan 1798'de, Valais 12 Kasım 1810'da Fransa'ya katıldı; 1815 Viyana düzenlemesi Savoy'u Sardinya'ya geri verdi.",
  kaynak:"Digithèque MJP (d1792savoie, d1793nice — Archives parlementaires) · HLS 'Genf (Kanton)', 'Wallis'" },

{ odak_yer:["Viyana"], t:"1795-10-01", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","habsburg"], sinir_id:"dg5-guneyhol-fr-3",
  b:"Avusturya Hollandası'nın Fransa'ya ilhakı", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","fransa-cumhuriyet","habsburg","belcika"],
  d:"Ulusal Konvansiyon, 9 vendémiaire IV. yıl kararıyla Avusturya Hollandası'nı Fransa'ya kattı. Güney Hollanda–Fransa sınırı böylece ortadan kalktı; bölge 1815'e kadar Fransız kaldı ve ardından Birleşik Hollanda Krallığı'na verildi.",
  kaynak:"Digithèque MJP (d1795belgique) · Wallonie portalı (Institut Destrée)" },

{ odak_yer:["Chiavenna","Bormio"], t:"1797-10-10", devlet:"isvicre", devletler:["isvicre","milano-dukaligi"], sinir_id:"dg5-it-ch-1",
  b:"Valtellina, Chiavenna ve Bormio'nun Cisalpin Cumhuriyeti'ne katılması", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","isvicre","milano-dukaligi"],
  d:"Napolyon, Graubünden'e tâbi Valtellina, Chiavenna ve Bormio'yu Cisalpin Cumhuriyeti'ne kattı; Graubünden bu toprakları kaybetti. Bu dönemin sınır hattının koordinatı haritada yoktur.",
  kaynak:"HLS 'Veltlin'" },

{ odak_yer:["Paris"], t:"1801-02-09", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","almanya"], sinir_id:"dg5-fr-de-2",
  b:"Lunéville Antlaşması — Ren'in sol yakası Fransa'ya", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","almanya","habsburg"],
  d:"Fransa ile Kutsal Roma İmparatorluğu arasındaki Lunéville Antlaşması, Ren'in sol yakasını Fransa'ya bıraktı ve Fransa–Almanya sınırını Ren nehrine taşıdı. Bu hat 1814'e kadar sürdü; bugünkü sınırın yalnız Alsas kesimindeki Ren parçası onunla çakışır, geri kalanının koordinatı haritada yoktur.",
  kaynak:"Lunéville Antlaşması metni (Digithèque MJP, 1801luneville)" },

{ odak_yer:["Badajoz","İspanya"], t:"1801-06-06", devlet:"ispanya", devletler:["ispanya","portekiz"], sinir_id:"d1923-es-pt-olivenza",
  b:"Badajoz Antlaşması — Olivenza İspanya'ya geçti, Guadiana fiilî sınır oldu", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","ispanya","portekiz"],
  d:"Badajoz Antlaşması'yla Olivenza İspanya'ya bırakıldı. Guadiana nehri bu kesimde iki ülke arasındaki sınır oldu. Portekiz bu hattı hiçbir zaman antlaşmayla kabul etmedi; Caia ile Cuncos arasındaki kesim bugün de sınırlandırılmamış, Olivenza anlaşmazlığı sürüyor.",
  kaynak:"Diputación de Badajoz, Olivenza tarihçesi · Santos Sánchez, BAGE 104 (2025)" },

{ odak_yer:["Paris"], t:"1802-09-11", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","sardinya-piyemonte"], sinir_id:"dg5-it-ch-3",
  b:"Piyemonte'nin Fransa'ya ilhakı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","fransa-cumhuriyet","sardinya-piyemonte","isvicre"],
  d:"Piyemonte kesin olarak Fransa'ya katıldı. Piyemonte'nin İsviçre ile olan sınırı böylece Fransa'nın sınırı oldu.",
  kaynak:"S. Cavicchioli, Italies 6 (2002)" },

{ odak_yer:["Paris"], t:"1810-07-09", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","hollanda"], sinir_id:"dg5-nl-de",
  b:"Holland Krallığı'nın Fransa'ya ilhakı (Rambouillet Kararnamesi)", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","fransa-cumhuriyet","hollanda","almanya"],
  d:"Rambouillet Kararnamesi'yle Holland Krallığı Fransa'ya katıldı. Hollanda'nın Alman devletleriyle olan sınırı böylece Fransa'nın sınırı oldu.",
  kaynak:"parlement.com 'Koninkrijk Holland (1806-1810)' (Montesquieu Instituut)" },

{ odak_yer:["Paris"], t:"1810-11-12", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","isvicre"], sinir_id:"dg5-sa-ch-3",
  b:"Valais'nin Simplon departmanı olarak Fransa'ya katılması", tur:"toprak-kazanc", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","fransa-cumhuriyet","isvicre"],
  d:"Valais, Simplon departmanı adıyla Fransa'ya katıldı ve Aralık 1813'e kadar Fransız kaldı. Savoy ile Valais arasındaki sınır bu dönemde bir Fransız iç sınırıydı; Valais 1815'te İsviçre Konfederasyonu'na katıldı.",
  kaynak:"HLS 'Wallis'" },

{ t:"1814-05-30", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","isvicre"], sinir_id:"d1923-fr-ch",
  b:"Birinci Paris Antlaşması — Fransa–İsviçre sınırının bugünkü hattı", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"Paris",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","isvicre","sardinya-piyemonte"],
  d:"Napolyon'un yenilgisinden sonra imzalanan Birinci Paris Antlaşması Fransa'nın sınırlarını yeniden çizdi ve İsviçre Konfederasyonu'nun bağımsızlığını bugünküne büyük ölçüde benzeyen sınırlarla tanıdı. 1815 bildirisi, 1818 Bern sözleşmesi ve 1824 Neuchâtel tutanağı hattı tamamladı; 1862 Dappes takası dışında bu hat yaklaşık 140 yıl değişmedi. ABD Dışişleri çalışması antlaşmanın gününü bir yerde 20 Mayıs olarak veriyor; İsviçre Tarih Sözlüğü 30 Mayıs diyor.",
  kaynak:"IBS No. 11 France–Switzerland · HLS 'Pariser Frieden' · Digithèque MJP (1814paris)" },

// ── G4 (1815-06-09 → 1878-07-13) ────────────────────────────────────
// Başka dosyada ZATEN bulunan G4 maddeleri yazılmadı: Viyana 1815 · Londra 1839 · Villafranca ve Zürih 1859 ·
// Torino 1860 · İtalya Krallığı 1861 · Prag 1866 · Viyana 1866 · Frankfurt 1871 (kronoloji_fransa/habsburg/
// hollanda/italya/almanya.js).

{ odak_yer:["Paris"], t:"1815-11-20", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","almanya"], sinir_id:"dg4-fr-de-1815",
  b:"İkinci Paris Antlaşması — Fransa'nın doğu sınırı 1790 hattına yakın biçimde daraltıldı", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","almanya","sardinya-piyemonte"],
  d:"Waterloo'dan sonra imzalanan İkinci Paris Antlaşması, 1814 Birinci Paris Antlaşması'nın çizdiği Fransa sınırını yeniden düzenledi; 1814'te Fransa'ya bırakılan Savoy kısmı da bu düzenlemenin konusuydu. Bu hattın 1870'e kadar aynen sürüp sürmediğini açıkça söyleyen bir kaynak bulunamadı.", ic_not_d:"Waterloo'dan sonra imzalanan İkinci Paris Antlaşması, 1814 Birinci Paris Antlaşması'nın çizdiği Fransa sınırını yeniden düzenledi; 1814'te Fransa'ya bırakılan Savoy kısmı da bu düzenlemenin konusuydu. Bu hattın 1870'e kadar aynen sürüp sürmediğini açıkça söyleyen bir kaynak bulunamadı; haritada 1815-1871 Fransa–Almanya hattı bu yüzden çizilmiyor.",
  kaynak:"HLS 'Pariser Frieden' (30 Mayıs 1814 ve 20 Kasım 1815) · IBS No. 12 (1814'te Savoy'un bir kısmı Fransa'ya)" },

{ odak_yer:["Cenevre","Torino"], t:"1816-03-16", devlet:"isvicre", devletler:["isvicre","sardinya-piyemonte"], sinir_id:"dg4-sa-ch-cenevre",
  b:"Torino Antlaşması — Savoy'dan Cenevre'ye bırakılan komünler ve Cenevre–Savoy sınırı", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","isvicre","sardinya-piyemonte"],
  d:"Viyana Kongresi Nihaî Senedi'nin LXXX. maddesi Savoy'a ait bazı komünleri İsviçre'ye katılan Cenevre'ye bırakmıştı. Sardinya ile İsviçre Torino'da bu devri uygulayan antlaşmayı imzaladı ve Cenevre'nin güney sınırını çizdi. Bu hat 1860'ta Savoy'un Fransa'ya geçmesiyle Fransa–İsviçre sınırı oldu.",
  kaynak:"IBS No. 12 Italy–Switzerland (Viyana md. LXXX) · Historisches Lexikon der Schweiz 'Savoyen' (Torino 1816)" },

{ odak_yer:["Hollanda","Aachen"], t:"1816-06-26", devlet:"hollanda", devletler:["hollanda","almanya"], sinir_id:"dg4-nl-de-belcika-dogu",
  b:"Aachen Sınır Antlaşması — Birleşik Hollanda ile Prusya arasındaki sınır ve Tarafsız Moresnet", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","hollanda","almanya"],
  d:"Birleşik Hollanda Krallığı ile Prusya Aachen'de sınırlarını belirledi. Üzerinde anlaşılamayan Moresnet çevresi iki devletin ortak yönetimine bırakıldı (Tarafsız Moresnet). Bugünkü Hollanda–Almanya sınırının Prusya kesimi bu antlaşmaya dayanır; güneydeki kesim 1839'da Belçika'ya geçti.",
  kaynak:"IBS No. 31 Germany–Netherlands · IBS No. 7 Belgium–Germany" },

{ odak_yer:["Paris"], t:"1820-03-28", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","hollanda"], sinir_id:"dg4-nl-fr-kortrijk",
  b:"Kortrijk Sınır Antlaşması — bugünkü Belçika–Fransa sınırı çizildi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","hollanda","belcika","luksemburg"],
  d:"Fransa ile Birleşik Hollanda Krallığı, 1815 Paris Antlaşması'nın belirlediği sınırı Kortrijk'te ayrıntılı olarak çizdi. Belçika 1830'da ayrılınca bu hat Belçika–Fransa sınırı oldu ve küçük düzeltmeler dışında bugüne kadar değişmedi; Lüksemburg ile Fransa arasındaki sınır da aynı antlaşmaya dayanır.",
  kaynak:"L. Milis, De Lage Landen 'Een verdrag met sporen in het landschap' · ACT Lüksemburg 'Limites d'État'" },

{ odak_yer:["Hannover","Hollanda"], t:"1824-07-02", devlet:"hollanda", devletler:["hollanda","almanya"], sinir_id:"d1923-nl-de",
  b:"Meppen Sınır Antlaşması — Hollanda ile Hannover arasındaki sınır", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","hollanda","almanya"],
  d:"Hollanda ile Hannover Krallığı, ortak sınırlarını Meppen'de imzaladıkları antlaşmayla ayrıntılı olarak belirleyip işaretledi. Böylece bugünkü Hollanda–Almanya sınırının kuzey kesimi de delimite edilmiş oldu.",
  kaynak:"IBS No. 31 Germany–Netherlands" },

{ t:"1830-10-04", devlet:"belcika", devletler:["belcika","hollanda"], sinir_id:"dg4-be-fr-fiili",
  b:"Belçika'nın bağımsızlık ilanı — Fransa sınırı fiilen Belçika'nın oldu", tur:"kurulus", onem:4, dunya:4, kapsam:"dis", yer_id:"Brüksel",
  etiket:["sinir","konu-siyasi","belcika","hollanda","fransa-cumhuriyet"],
  d:"Brüksel'deki geçici hükûmet Belçika'nın Birleşik Hollanda Krallığı'ndan ayrıldığını ilan etti. Birleşik Hollanda'nın Fransa ile 1820'de çizilen sınırı fiilen yeni devletin sınırı oldu. Hukukî sınır ve uluslararası kabul 1839 Londra Antlaşması'yla geldi.",
  kaynak:"Belçika Devlet Arşivi (arch.be) ve Wallonie portalı (4 Ekim 1830) · Nationaal Archief ve parlement.com (Londra 19 Nisan 1839)" },

{ odak_yer:["Bayonne"], t:"1856-12-02", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","ispanya"], sinir_id:"d1923-fr-es-bati",
  b:"Bayonne Antlaşması — Pirenelerde Bidasoa'dan Navarra'ya sınırın ayrıntılı çizimi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","ispanya"],
  d:"Fransa ile İspanya, 1659 Pireneler Antlaşması'ndan beri ayrıntılı olarak çizilmemiş sınırlarının batı kesimini Bayonne'da imzalanan antlaşmayla belirledi. Antlaşma Bidasoa nehrinde talvegi sınır yaptı ve Sülün Adası'nı iki devletin ortak egemenliğine bıraktı. Sınır maddeleri 1859'da uygulanmaya başladı; doğu kesimleri 1862 ve 1866 antlaşmalarıyla tamamlandı.",
  kaynak:"UNTS c.1142 No. 838 (Bayonne 1856, md. 9 ve 27) · J. Capdevila i Subirana, Historia del deslinde de la frontera hispano-francesa (IGN)" },

{ odak_yer:["Fas"], t:"1860-04-26", devlet:"ispanya", devletler:["ispanya","fas"], sinir_id:"d1923-es-ma-ceuta",
  b:"Wad-Ras Antlaşması — Ceuta'nın sınırı genişletildi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","ispanya","fas"],
  d:"İspanya–Fas savaşını bitiren Wad-Ras Antlaşması Ceuta'nın kara sınırını genişletti ve bir tarafsız bölge öngördü. Yeni hat 17 Kasım 1860'ta imzalanan işaretleme belgesiyle yerinde çizildi; akademik bir rapora göre Ceuta bugün de bu sözleşmelerdeki sınırlara sahiptir.",
  kaynak:"Bermejo García vd., Ceuta y Melilla, frontera terrestre (Observatorio de Ceuta y Melilla, 2020)" },

{ odak_yer:["Torino","Nice"], t:"1861-03-07", devlet:"sardinya-piyemonte", devletler:["sardinya-piyemonte","fransa-cumhuriyet"], sinir_id:"dg4-sa-fr-1861",
  b:"Torino sınır sözleşmesi — Savoy ve Nice'in devrinden sonra Fransa–Sardinya sınırı çizildi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","sardinya-piyemonte","fransa-cumhuriyet","italya"],
  d:"1860 Torino Antlaşması'nın öngördüğü karma komisyon, Savoy ve Nice'in Fransa'ya geçmesinden sonraki sınırı Torino'da imzalanan sözleşmeyle belirledi. Hat birçok yerde antlaşmada tasarlanandan ayrıldı ve Fransa bazı vadi başlarını kaybetti. On gün sonra İtalya Krallığı ilan edilince bu hat Fransa–İtalya sınırı oldu; 1947'ye kadar yalnız küçük düzeltmeler gördü.",
  kaynak:"IBS No. 4 France–Italy (Torino 1860-61)" },

{ odak_yer:["Melîle (Melilla)","Tanca"], t:"1862-06-21", devlet:"ispanya", devletler:["ispanya","fas"], sinir_id:"dg3-es-ma-melilla-1894-oncesi",
  b:"Tanca demarkasyon akdi — Melilla sınırı işaretlendi", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","ispanya","fas"],
  d:"1859 Tetuan Sözleşmesi ve 1861 Madrid Antlaşması'nın genişlettiği Melilla sınırı Tanca'da imzalanan demarkasyon akdiyle yerinde işaretlendi. Akdin günü kaynaklar arasında çelişkilidir: İspanya hükümeti 21 Haziran, basın 26 Haziran 1862 veriyor.",
  kaynak:"İspanya hükümetinin Kongre'ye yazılı cevabı, 18 Kasım 2022" },

{ odak_yer:["Paris"], t:"1862-12-08", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","isvicre"], sinir_id:"d1923-fr-ch-dappes",
  b:"Dappes Antlaşması — Fransa ile İsviçre arasında toprak takası", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","isvicre"],
  d:"1815 bildirisiyle İsviçre'ye verilen Dappes vadisindeki stratejik yol, uzun süre iki devlet arasında sürtüşme konusu olmuştu. Bern'de imzalanan antlaşmayla vadi Fransa'ya geçti, karşılığında kuzeyindeki eşit bir alan İsviçre'ye verildi; takas 746,5 hektardı. Bu takas dışında Fransa–İsviçre sınırı 1814'ten 1953'e kadar değişmedi.",
  kaynak:"IBS No. 11 France–Switzerland" },

{ odak_yer:["İspanya","Lizbon"], t:"1864-09-29", devlet:"ispanya", devletler:["ispanya","portekiz"], sinir_id:"d1923-es-pt-kuzey",
  b:"Lizbon Sınır Antlaşması — Minho'dan Caia'ya İspanya–Portekiz sınırı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","ispanya","portekiz"],
  d:"İspanya ile Portekiz, Minho nehrinin ağzından Caia'nın Guadiana'ya karıştığı yere kadar sınırlarını Lizbon'da imzalanan antlaşmayla belirledi. Couto Misto adlı tarafsız bölge İspanya'ya bırakıldı. Portekiz, Olivenza meselesi yüzünden hattı yalnız Caia'ya kadar kabul etti; güneyi 1926'ya kadar çizilmedi. Antlaşmanın ekleri 4 Kasım 1866'da tamamlandı.",
  kaynak:"UNTS c.1288 No. 906 (Portekiz Deniz Kuvvetleri kopyası) · Santos Sánchez, BAGE 104 (2025) · Portekiz Dışişleri" },

{ odak_yer:["Danimarka","Viyana"], t:"1864-10-30", devlet:"danimarka", devletler:["danimarka","almanya"], sinir_id:"d1864-dk-de-kongea",
  b:"Viyana Antlaşması — Danimarka Schleswig, Holstein ve Lauenburg'u bıraktı, sınır Kongeå'ya çekildi", tur:"toprak-kayip", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","danimarka","almanya","habsburg"],
  d:"İkinci Schleswig Savaşı'nı bitiren Viyana Antlaşması'yla Danimarka üç düklük üzerindeki bütün haklarını Prusya ile Avusturya'ya bıraktı. Danimarka–Alman sınırı Elbe'den kuzeye, Ribe'nin kuzeyindeki Kongeå nehrine taşındı. Bu hat 1920'deki halk oylamalarına kadar sürdü.",
  kaynak:"IBS No. 81 Denmark–Germany (Viyana 30 Ekim 1864, BFSP c.54)" },

{ odak_yer:["Bayonne","İspanya"], t:"1868-07-11", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","ispanya"], sinir_id:"d1923-fr-es-dogu",
  b:"Bayonne Nihaî Akdi — Fransa–İspanya sınırının delimitasyonu tamamlandı", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","ispanya"],
  d:"Fransa ile İspanya, 1856, 1862 ve 1866 Bayonne antlaşmalarıyla parça parça çizilen Pireneler sınırını 11 Temmuz 1868 Nihaî Akdi'yle tamamladı. 1866 antlaşması Llívia'nın çevresini de tarif ediyordu. Bir İspanyol resmî yayınına göre sınır o günden beri çok az değişti.",
  kaynak:"UNTS c.1288 No. 907 (Bayonne 1866 ve Nihaî Akit 1868) · Capdevila (IGN)" },

// ── G3 (1878-07-13 → 1914-07-28) ────────────────────────────────────
{ odak_yer:["Konstanz","Almanya"], t:"1879-06-24", devlet:"isvicre", devletler:["isvicre","almanya"], sinir_id:"d1923-ch-de",
  b:"İsviçre–Almanya sınır antlaşması — Untersee ve Konstanz kesimi", ic_not_b:"KUTU-H4-1015 (DÜZELTİLMEDİ, beyan): başlıktaki 'Untersee ve' kaynağa uymuyor; 1879 anlaşması (fedlex SR 0.132.136.51) ve onayladığı 1878 İsviçre–Baden düzenlemesi (SR 0.132.136.5) yalnız Konstanz çevresini düzenler, Untersee'yi anmaz.", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","isvicre","almanya"],
  d:"İsviçre ile Alman İmparatorluğu, Baden ile daha önce 1854 ve 1878'de yapılan düzenlemeleri izleyerek Untersee ve Konstanz çevresindeki sınırı antlaşmayla belirledi. Bodensee'nin büyük gölü (Obersee) üzerinde ise hiçbir antlaşma sınır çizmedi; bu durum bugün de sürüyor. Antlaşmanın öncesiyle hat farkı ölçülmedi.",
  kaynak:"fedlex SR 0.132.136.3 (1964 antlaşmasının önceki antlaşmalara atfı) · Kramsch 2015 (Obersee) — tarih listesi envanter denetim/D3-AVRUPA-BATI-0916.md §1.11'de" },

{ odak_yer:["Macaristan"], t:"1893-07-21", devlet:"isvicre", devletler:["isvicre","habsburg"], sinir_id:"d1893-hab-ch",
  b:"Ren düzenlemesi antlaşması yürürlüğe girdi — Avusturya-Macaristan–İsviçre sınırı Eski Ren'in ortası", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","isvicre","habsburg"],
  d:"30 Aralık 1892'de imzalanan Ren düzenlemesi antlaşması, Avusturya-Macaristan ile İsviçre arasındaki sınırı Eski Ren'in ortasına bağladı. Nehrin yeni yataklara alınması sınırı taşımadı; Diepoldsau kesiminde sınırın yeni kanala uyarlanması Birinci Dünya Savaşı'ndan sonraya kaldı.",
  kaynak:"Avusturya Dışişleri Bakanlığı (BMEIA) Bern Büyükelçiliği antlaşma listesi" },

{ odak_yer:["Fas"], t:"1894-03-05", devlet:"ispanya", devletler:["ispanya","fas"], sinir_id:"d1923-es-ma-melilla",
  b:"Merakeş Sözleşmesi — Melilla sınırı ve tarafsız bölge", tur:"antlasma", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","ispanya","fas"],
  d:"İspanya ile Fas, Melilla çevresindeki sınır ve tarafsız bölge düzenini Merakeş'te imzalanan sözleşmeyle bağladı. Hattın dayanağı 1859 Tetuan Sözleşmesi, 1862 Tanca demarkasyon akdi ve 1891 yeniden işaretleme akdidir; İspanya hükümeti bugünkü sınırı bu belgelerin tamamına dayandırıyor. 1894 sözleşmesinin hattı değiştirip değiştirmediği ölçülmedi.",
  kaynak:"İspanya hükümetinin Kongre'ye yazılı cevabı, 18 Kasım 2022 (congreso.es)" },

{ odak_yer:["Kopenhag"], t:"1900-02-12", devlet:"danimarka", devletler:["danimarka","almanya"], sinir_id:"d1864-dk-de-kongea",
  b:"Kopenhag Sınır Sözleşmesi — Kongeå hattında iki küçük düzeltme", tur:"antlasma", onem:1, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","danimarka","almanya"],
  d:"Danimarka ile Almanya, 1864 Viyana Antlaşması'nın çizdiği Kongeå sınırında sınır dereleri düzenlemesi için iki küçük düzeltme yaptı; takas edilen toprak akrlarla ölçülecek kadar küçüktü. Sözleşme, Viyana hattının yerinde işaretlenmiş olduğunu da gösteriyor. Bu hattın koordinatı haritada yoktur.",
  kaynak:"IBS No. 81 Denmark–Germany (Copenhagen Frontier Convention, BFSP c.92)" },

{ odak_yer:["Karlstad","Norveç"], t:"1905-10-26", devlet:"norvec", devletler:["norvec","isvec"], sinir_id:"d1923-no-se",
  b:"Karlstad sözleşmeleri — İsveç-Norveç birliğinin sonu, Norveç–İsveç sınırı iki bağımsız devletin sınırı oldu", tur:"bolunme", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","norvec","isvec"],
  d:"İsveç ile Norveç, birliğin çözülmesini Karlstad'da imzalanan sözleşmelerle düzenledi ve sınırın iki yanında bir tarafsız bölge kurdu. 1751 Strömstad Antlaşması'nın çizdiği hat değişmedi ve bağımsız iki devletin sınırı oldu; antlaşma bugün de yürürlüktedir. Atlasta Norveç künyesi Haziran 1905'ten başlar; birliğin bittiği o günün tarihi bu kaynaklarda geçmiyor.",
  kaynak:"Store norske leksikon 'riksgrensen' · Karlstad sözleşmesi 26.10.1905 (UNISPAL kopyası, yalnız başlık okundu)" },

{ odak_yer:["Norveç"], t:"1917-12-06", devlet:"finlandiya", devletler:["finlandiya","isvec"], sinir_id:"d1923-fi-se",
  b:"Finlandiya bağımsızlığını ilan etti — İsveç ve Norveç ile sınırlar Finlandiya'nın oldu", tur:"kurulus", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","finlandiya","isvec","norvec","sovyet-rusya"],
  d:"Rusya'ya bağlı Finlandiya Büyük Dükalığı bağımsızlığını ilan etti. 1809 Fredrikshamn Barışı ve 1810 sınır sözleşmesiyle Torne–Muonio ırmakları boyunca çizilen İsveç sınırı ile 1751 Strömstad hattına dayanan Norveç sınırının batı kesimi değişmeden yeni devletin sınırı oldu; Finlandiya resmî kayıtları 1809-1917 ve 1918 sonrası dönemleri aynı belgelerle anlatır. Petsamo kesimi ise 1920'ye kadar Rusya'da kaldı.", ic_not_d:"Rusya'ya bağlı Finlandiya Büyük Dükalığı bağımsızlığını ilan etti. 1809 Fredrikshamn Barışı ve 1810 sınır sözleşmesiyle Torne–Muonio ırmakları boyunca çizilen İsveç sınırı ile 1751 Strömstad hattına dayanan Norveç sınırının batı kesimi değişmeden yeni devletin sınırı oldu; Finlandiya resmî kayıtları 1809-1917 ve 1918 sonrası dönemleri aynı belgelerle anlatır. Petsamo kesimi ise 1920'ye kadar Rusya'da kaldı. Bağımsızlık ilanının günü okunabilir bir kaynakta doğrulanamadı; gün finlandiya künyesinden devralındı.",
  kaynak:"MML, Suomen–Ruotsin rajankäynti 2006, §2.1-2.2 (1809-1917 / 1918 sonrası) · Store norske leksikon 'riksgrensen' · Tartu Barışı md. 4 (LNTS c.3)" },

{ odak_yer:["Viyana"], t:"1918-11-03", devlet:"italya", devletler:["italya","habsburg"], sinir_id:"d1918-it-ch-isgal",
  b:"Villa Giusti Ateşkesi — Güney Tirol'ün Brenner'e kadar İtalyan işgaline bırakılması", tur:"ateskes", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","ateskes","konu-siyasi","italya","habsburg","isvicre"],
  d:"Avusturya-Macaristan ile imzalanan ateşkes, tahliye edilecek toprağın sınırını Stelvio'nun kuzeyinden Adige ve Eisach kaynaklarına, Reschen ve Brenner'e uzanan su bölümü olarak çizdi. Bu hattın gerisi Müttefik (fiilen İtalyan) işgaline bırakıldı; böylece Vinschgau'nun İsviçre ile komşu kesimi İtalya'nın fiilî sınırı oldu. Toblach ve Tarvis çevresinde ateşkes hattı sonraki antlaşma hattından ayrılır. Ateşkesin yürürlük saati kaynakta geçmiyor.",
  kaynak:"FRUS 1918 Supp. 1 c.1 d362 (ateşkes şartları, I.3) · d373 (imza bildirimi)" },

{ t:"1918-11-11", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","almanya"], sinir_id:"d1918-fr-de-isgal",
  b:"Compiègne Ateşkesi — Alsas-Loren'in tahliyesi ve Fransız işgali", tur:"ateskes", onem:5, dunya:4, kapsam:"dis", yer_id:"Strazburg",
  etiket:["sinir","ateskes","konu-siyasi","fransa-cumhuriyet","almanya"],
  d:"Almanya ile imzalanan ateşkesin ikinci maddesi Belçika, Fransa, Lüksemburg ve Alsas-Loren'in kısa bir süre içinde tahliyesini ve Müttefik birliklerince işgalini öngördü. Alsas-Loren böylece 1870 sınırına kadar fiilen Fransız idaresine geçti; Alsas'ın İsviçre ile, Lorraine'in Lüksemburg ile olan sınırları da yeniden Fransa'nın fiilî sınırı oldu. Hukukî devir Versay Antlaşması'nın yürürlüğünü bekledi; antlaşmanın 51. maddesi egemenliği geriye yürür biçimde ateşkes gününden başlattı. İşgalin fiilen tamamlandığı gün kaynakta yok.",
  kaynak:"FRUS 1918 Supp. 1 c.1 d384 (şartlar, A.2) · d420 (11 Kasım 1918 imzası) · Versay md. 51 (Avalon)" },

{ t:"1920-01-10", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","almanya"], sinir_id:"d1923-fr-de",
  b:"Versay Antlaşması yürürlüğe girdi — Alsas-Loren hukuken Fransa'ya döndü", tur:"toprak-kazanc", onem:5, dunya:5, kapsam:"dis", yer_id:"Strazburg",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","almanya"],
  d:"İlk onay tutanağının imzalanmasıyla Versay Antlaşması yürürlüğe girdi. Antlaşmanın 27. maddesi Fransa–Almanya sınırını 18 Temmuz 1870 sınırı olarak belirledi; 51. madde 1871 öncesi sınır antlaşmalarını yeniden yürürlüğe koydu. Saar Havzası aynı antlaşmanın 45-50. maddeleriyle Milletler Cemiyeti idaresine bırakıldığından, sınırın Saar kesimi Fransa ile Saar Bölgesi arasında kaldı. Ayrıntılı delimitasyon antlaşması 14 Ağustos 1925'te imzalandı.",
  kaynak:"FRUS 1919 Paris Peace Conference c. XIII ch1 (yürürlük) · Versay md. 27, 45-50, 51 (Avalon) · Fransız Senatosu raporu l01-276" },

{ odak_yer:["Berlin"], t:"1920-01-10", devlet:"belcika", devletler:["belcika","almanya"], sinir_id:"d1923-be-de",
  b:"Versay Antlaşması ile Eupen-Malmedy ve Tarafsız Moresnet Belçika'ya geçti", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","belcika","almanya"],
  d:"Versay Antlaşması'nın 32-34. maddeleri 1816'dan beri ortak yönetilen Tarafsız Moresnet'i ve Eupen ile Malmedy bölgelerini Belçika'ya bıraktı. 35. madde yedi üyeli bir komisyonu yeni hattı yerinde belirlemekle görevlendirdi. Komisyon raporunu 6 Kasım 1922'de Aachen'de tamamladı; Raeren–Kalterherberg demiryolu hattı Belçika'ya bırakıldı. Eupen-Malmedy'nin kesin devrine ilişkin Milletler Cemiyeti kararının günü okunabilir bir kaynakta bulunamadı.",
  kaynak:"Versay md. 32-35 (Avalon) · IBS No. 7 Belgium–Germany" },

{ odak_yer:["Tarvis","İtalya"], t:"1920-01-01", devlet:"italya", devletler:["italya","avusturya-cumhuriyet"], sinir_id:"d1923-it-at",
  b:"Saint-Germain Antlaşması yürürlüğe girdi — Güney Tirol ve Tarvis İtalya'ya", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","italya","avusturya-cumhuriyet"],
  d:"10 Eylül 1919'da imzalanan Saint-Germain Antlaşması'nın 27(2). maddesi Avusturya–İtalya sınırını Reschen, Brenner ve Karn Alpleri boyunca çizdi; Güney Tirol ile Tarvis İtalya'ya geçti. Büyükelçiler Konferansı 22 Temmuz 1920'de demarkasyon talimatını verdi, işaretleme 1924'te bitti. Metnin 'yerinde belirlenecek' dediği üç alt kesim (Reschen, Drava geçişi, Thörl) 1923'te henüz kesinleşmemişti. Tarih yalnız YIL düzeyindedir: antlaşmanın yürürlük günü okunabilir bir kaynakta bulunamadı.",
  kaynak:"IBS No. 58 (Revised) Austria–Italy (md. 27 alıntısı, 1920 talimatı, 1924 demarkasyonu)" },

{ odak_yer:["İtalya"], t:"1920-01-01", devlet:"italya", devletler:["italya","isvicre"], sinir_id:"d1923-it-ch-saintgermain",
  b:"Güney Tirol'le birlikte eski Avusturya–İsviçre sınırının bir kesimi İtalya–İsviçre sınırı oldu", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","italya","isvicre"],
  d:"Saint-Germain Antlaşması'yla Güney Tirol'ün İtalya'ya geçmesi, İtalya–İsviçre sınırını Cima Garibaldi'den Piz Lad'a kadar 53,5 km uzattı. Hat eski Avusturya–İsviçre sınırıydı ve değişmeden devralındı. İki ülke bu kesimi 1920-1927 arasında yeniden işaretledi ve çalışmayı 1927-1928 nota teatisiyle kabul etti. Tarih yalnız YIL düzeyindedir: antlaşmanın yürürlük günü okunabilir bir kaynakta bulunamadı.",
  kaynak:"IBS No. 12 Italy–Switzerland" },

{ odak_yer:["Danimarka","Almanya"], t:"1920-07-05", devlet:"danimarka", devletler:["danimarka","almanya"], sinir_id:"d1923-dk-de",
  b:"Kuzey Schleswig Danimarka'ya geçti — yeni Danimarka–Almanya sınırı", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","plebisit","konu-siyasi","danimarka","almanya"],
  d:"Versay Antlaşması'nın 109-114. maddeleri Schleswig'de halk oylaması öngördü. Birinci bölge 10 Şubat 1920'de Danimarka'yı seçti. Başlıca Müttefik Devletler ile Danimarka arasında 5 Temmuz 1920'de Paris'te imzalanan antlaşmayla Kuzey Schleswig Danimarka'ya geçti ve 1864 Viyana Antlaşması'nın Kongeå hattı yerini yeni sınıra bıraktı. Versay'ın 111. maddesiyle kurulan komisyon hattı Temmuz 1920 – Mayıs 1921 arasında 1:5.000 ölçekli 18 paftada işaretledi. Hat o günden beri değişmedi.",
  kaynak:"IBS No. 81 Denmark–Germany (Viyana 1864, halk oylaması, Paris 5 Temmuz 1920, komisyon haritaları)" },

{ odak_yer:["İtalya","Fiume"], t:"1920-11-12", devlet:"italya", devletler:["italya","yugoslavya"], sinir_id:"d1923-it-shs",
  b:"Rapallo Antlaşması — İtalya ile SHS Krallığı arasında Julian Alpleri sınırı ve Fiume Serbest Devleti", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","italya","yugoslavya"],
  d:"İtalya ile Sırp-Hırvat-Sloven Krallığı Rapallo'da doğu sınırlarını belirledi. Hat Peč'ten Julian Alplerinin su bölümüyle Castua'ya indi. Zara (Zadar) md. 2 ile İtalya'ya bırakılarak bir anklav oldu; md. 3 Cherso (Cres) ve Lussin adalarını, Lagosta ve Pelagosa'yı İtalya'ya, eski Avusturya-Macaristan'ın öteki bütün adalarını SHS Krallığı'na bıraktı; Fiume serbest devlet ilan edildi; hattı yerinde çizmek için karma bir komisyon kuruldu. Bu hattın koordinatı haritada yoktur: 1947 Paris Antlaşması'yla neredeyse tamamı ortadan kalktı. Antlaşmanın yürürlük günü okunabilir bir kaynakta bulunamadı.",
  kaynak:"Rapallo Antlaşması md. 1-5 (LNTS c.18 s.397-403, forost.ungarisches-institut.de kopyası) · İtalya ile Barış Antlaşması 1947 md. 3 (UK TS 1948/50)" },

{ odak_yer:["Helsinki"], t:"1920-12-31", devlet:"finlandiya", devletler:["finlandiya","norvec"], sinir_id:"d1923-fi-no-petsamo",
  b:"Tartu Barışı yürürlüğe girdi — Petsamo Finlandiya'ya geçti, Norveç'le yeni sınır", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","finlandiya","norvec","sovyet-rusya"],
  d:"14 Ekim 1920'de imzalanan Tartu Barışı'nın 4. maddesi Petsamo'yu Finlandiya'ya bıraktı; bölgenin kuzeybatı sınırı eski Rusya–Norveç sınırı olarak kaldı. Böylece 1826 sözleşmesiyle çizilip 1896'da işaretlenen hat Norveç–Finlandiya sınırı oldu ve Norveç'in Rusya ile ortak kara sınırı sona erdi. Onayların değişim günü kaynaklar arasında çelişkili: League of Nations Treaty Series 31 Aralık 1920 (Moskova), ABD Dışişleri çalışması 14 Şubat 1921 (Helsinki) veriyor.",
  kaynak:"Tartu Barışı md. 4 ve onay tutanağı (LNTS c.3 No. 91) · IBS No. 24 Norway–USSR · IBS No. 74 Finland–USSR (çelişen tarih)" },

{ t:"1922-12-06", devlet:"irlanda-serbest-devlet", devletler:["irlanda-serbest-devlet","ingiltere"], sinir_id:"d1923-ie-gb",
  b:"İrlanda Serbest Devleti kuruldu — Kuzey İrlanda ile sınır uluslararası sınır oldu", tur:"kurulus", onem:5, dunya:4, kapsam:"dis", yer_id:"Dublin",
  etiket:["sinir","antlasma","konu-siyasi","irlanda-serbest-devlet","ingiltere"],
  d:"İngiliz-İrlanda Antlaşması'nı uygulayan 1922 Anayasası, ilanın en geç 6 Aralık 1922'de yapılmasını şart koştu. Sınır, 1920 İrlanda Hükûmeti Yasası'nın Kuzey İrlanda'ya ayırdığı altı kontluğun sınırıydı. Antlaşmanın 12. maddesi sınırın bir komisyonca düzeltilebileceğini öngörüyordu. 1923'te bu komisyon henüz kurulmamıştı; 1925 anlaşması onun yetkisini kaldırıp hattı olduğu gibi sabitledi. İlanın kesin günü kaynakta geçmiyor.",
  kaynak:"Constitution of the Irish Free State Act 1922, md. 83 ve Antlaşma md. 11-12 (irishstatutebook.ie) · Government of Ireland Act 1920 s.1(2) (legislation.gov.uk) · Treaty (Confirmation of Amending Agreement) Act 1925" },

// ── KUTU-F1-1014 — İtalya / Alpler / Ren / Comtat (Emre kutu 0078 H-0004 · 0082 H-0048/49/52/53/79 · 0083 H-0007 · 0088 H-0003)
// Her madde bir yerleşim kırılmasına bağlıdır (yer_id). Gün vermeyen kaynakta YYYY-01-01 + kesinlik:"yil".
{ t:"1311-07-13", devlet:"visconti", devletler:["visconti","milano-dukaligi"], sinir_id:"",
  b:"Matteo Visconti Milano'nun imparatorluk vikarı oldu — Visconti senyörlüğü", tur:"kurulus", onem:3, dunya:2, kapsam:"dis", yer_id:"Milano",
  etiket:["konu-siyasi","visconti","milano-dukaligi"],
  d:"İmparator VII. Henri, 13 Temmuz 1311'de Matteo Visconti'yi Milano'nun imparatorluk vikarı yaptı. Visconti ailesi bundan sonra şehrin fiilî efendisi oldu ve dükalık unvanına kadar (1395) Milano'yu senyörlük olarak yönetti. Haritada Milano bu tarihten itibaren Visconti rengindedir.",
  kaynak:"Treccani, Dizionario Biografico «Visconti, Matteo»" },

{ t:"1332-06-01", kesinlik:"ay", devlet:"della-scala", devletler:["della-scala","brescia-komunu"], sinir_id:"",
  b:"Mastino II della Scala Brescia'yı fethetti", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Brescia",
  etiket:["konu-siyasi","della-scala","brescia-komunu"],
  d:"Verona senyörü Mastino II della Scala, 1332 yazında (Haziran-Temmuz) Brescia'yı fethetti ve şehrin komün dönemi sona erdi. Brescia 1337 sonbaharında Visconti'lere geçti. Kaynak yalnız ay aralığını veriyor; haritada aralığın ilk günü kullanıldı.",
  kaynak:"Treccani, Dizionario Biografico «Della Scala, Mastino»" },

{ t:"1333-09-20", devlet:"visconti", devletler:["visconti","bergamo-komunu"], sinir_id:"",
  b:"Azzone Visconti Bergamo'yu aldı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Bergamo",
  etiket:["konu-siyasi","visconti"],
  d:"Azzone Visconti'nin birlikleri 20 Eylül 1333'te Bergamo'yu ele geçirdi. Şehir 1428'de Venedik'e geçene dek Visconti senyörlüğünün, 1395'ten sonra Milano Dükalığı'nın parçası kaldı.",
  kaynak:"Treccani, Dizionario Biografico «Visconti, Azzone»" },

{ t:"1335-01-01", kesinlik:"yil", devlet:"visconti", devletler:["visconti","como-komunu"], sinir_id:"",
  b:"Azzone Visconti Como'yu, Valtellina, Chiavenna, Lugano ve Piacenza'yı senyörlüğüne kattı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Sondrio",
  etiket:["konu-siyasi","visconti"],
  d:"Milano senyörü Azzone Visconti 1335'te Como komününü ve piskoposluğunun hâkimiyetini ele geçirerek Como'ya bağlı Valtellina'yı (Sondrio), Chiavenna'yı ve Lugano'yu aldı; aynı yıl Piacenza'da da doğrudan Visconti senyörlüğü kuruldu. Bormio ise 15 yıl daha Chur piskoposunda kaldı. Kaynaklar yalnız yılı veriyor.",
  kaynak:"HLS «Veltlin» (hls-dhs-dss.ch/de/articles/007135) · Treccani «Piacenza»" },

{ t:"1337-10-10", devlet:"visconti", devletler:["visconti","della-scala"], sinir_id:"",
  b:"Brescia Della Scala'lardan Visconti'ye geçti", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Brescia",
  etiket:["konu-siyasi","visconti","della-scala"],
  d:"Brescia şehri 10 Ekim 1337'de Della Scala (Scaligeri) idaresinden Azzone Visconti'ye teslim oldu; kale bir ay sonra düştü. Şehir 1426'da Venedik'e geçti.",
  kaynak:"Treccani, Dizionario Biografico «Visconti, Azzone»" },

{ t:"1346-01-01", kesinlik:"yil", devlet:"visconti", devletler:["visconti","ferrara"], sinir_id:"",
  b:"Luchino Visconti Parma'yı Este'lerden satın aldı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Parma",
  etiket:["konu-siyasi","visconti","ferrara"],
  d:"Luchino Visconti 1346'da Parma'yı Obizzo d'Este'den 70.000 florine satın aldı. Kaynak günü vermiyor.",
  kaynak:"Treccani, Dizionario Biografico «Visconti, Luchino»" },

{ t:"1471-01-01", kesinlik:"yil", devlet:"graubunden", devletler:["graubunden","almanya"], sinir_id:"",
  b:"Chur ve çevresi Üç Lig (Graubünden) ittifakının toprağı olarak gösterilmeye başlandı", tur:"kurulus", onem:1, dunya:1, kapsam:"dis", yer_id:"Chur (Coira)",
  etiket:["konu-siyasi","graubunden","almanya"],
  d:"Chur prens-piskoposluğu Kutsal Roma İmparatorluğu'nun bir parçasıydı (Treccani «Coira»: piskopos 1170-1805 imparatorluk prensi). Tanrı Evi Ligi 1367'de kuruldu; 1471'de iki ligin ittifakıyla Üç Lig yapısı belirdi. Haritada Chur bu yıldan itibaren Üç Lig renginde gösterilir; öncesi Kutsal Roma rengindedir. Kaynaklar yalnız yılı veriyor.",
  kaynak:"HLS «Drei Bünde» (devletler.js graubunden künyesi) · Enciclopedia Italiana (Treccani) «Coira»" },

{ t:"1350-01-01", kesinlik:"yil", devlet:"visconti", devletler:["visconti","almanya"], sinir_id:"",
  b:"Bormio Chur piskoposluğundan Visconti'ye geçti", tur:"toprak-kazanc", onem:1, dunya:1, kapsam:"dis", yer_id:"Bormio",
  etiket:["konu-siyasi","visconti"],
  d:"Valtellina 1335'te Visconti'ye geçtiğinde Bormio Chur piskoposunda kalmıştı; HLS'ye göre bu durum 15 yıl daha sürdü. Yıl bu hesaptan türetildi, gün bilinmiyor.",
  kaynak:"HLS «Veltlin» (hls-dhs-dss.ch/de/articles/007135)" },

{ t:"1345-01-01", kesinlik:"yil", devlet:"carrara", devletler:["carrara"], sinir_id:"",
  b:"Giacomo (II) da Carrara Padova senyörü oldu", tur:"kurulus", onem:2, dunya:1, kapsam:"dis", yer_id:"Padova",
  etiket:["konu-siyasi","carrara"],
  d:"Giacomo (II) di Nicolò da Carrara 1345'te Padova senyörlüğüne geçti; oğlu Francesco il Vecchio 1350'de onun yerini aldı. Kaynak yalnız yılı veriyor.",
  kaynak:"Treccani, Dizionario Biografico «Carrara, Francesco da, il Vecchio» · KUTU-HATALI-1015 (0083/H-0007)" },

{ t:"1387-10-18", devlet:"visconti", devletler:["visconti","della-scala"], sinir_id:"",
  b:"Verona Gian Galeazzo Visconti'ye teslim oldu — Della Scala senyörlüğünün sonu", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"Verona",
  etiket:["konu-siyasi","visconti","della-scala"],
  d:"Antonio Della Scala 18 Ekim 1387'ye kadar direnebildi ve o gün teslim olmak zorunda kaldı; Verona Gian Galeazzo Visconti'nin eline geçti. Şehir 1405'te Venedik'e bağlandı.",
  kaynak:"Treccani, Dizionario Biografico «Gian Galeazzo Visconti»" },

{ t:"1388-11-21", devlet:"visconti", devletler:["visconti","carrara"], sinir_id:"",
  b:"Francesco Novello da Carrara Padova'yı Gian Galeazzo Visconti'ye bıraktı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Padova",
  etiket:["konu-siyasi","visconti","carrara"],
  d:"Kuşatılan, ordusu ayaklanan ve halkı huzursuz Padova'da Francesco Novello 21 Kasım 1388'de Visconti'nin başkumandanı Giacomo Dal Verme ile anlaşmak zorunda kaldı ve devletini geçici olarak Gian Galeazzo Visconti'ye bıraktı.",
  kaynak:"Treccani, Dizionario Biografico «Carrara, Francesco da, il Novello» · KUTU-HATALI-1015 (0083/H-0007)" },

{ t:"1390-06-21", devlet:"carrara", devletler:["carrara","visconti"], sinir_id:"",
  b:"Francesco Novello da Carrara Padova'yı Visconti'den geri aldı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Padova",
  etiket:["konu-siyasi","carrara","visconti"],
  d:"Floransa'nın yardımıyla Treviso topraklarından geçen Francesco Novello, 21 Haziran 1390'da Padova'ya baskınla girip şehri aldı; kaleye kapanan Visconti garnizonu 27 Ağustos'ta teslim oldu ve Anziani 8 Eylül'de senyörlüğü ona yeniden verdi.",
  kaynak:"Treccani, Dizionario Biografico «Carrara, Francesco da, il Novello» · KUTU-HATALI-1015 (0083/H-0007)" },

{ t:"1395-05-11", devlet:"milano-dukaligi", devletler:["milano-dukaligi","visconti"], sinir_id:"",
  b:"Gian Galeazzo Visconti Milano dükü oldu — Milano Dükalığı'nın kuruluşu", tur:"kurulus", onem:4, dunya:3, kapsam:"dis", yer_id:"Milano",
  etiket:["konu-siyasi","milano-dukaligi","visconti"],
  d:"Kral Wenzel'in beklenen tanıması 11 Mayıs 1395'te geldi; Gian Galeazzo 5 Eylül 1395'te Sant'Ambrogio'da düklük tacını giydi. Milano ile Bergamo, Brescia, Verona, Parma, Piacenza ve Valtellina'yı kapsayan Visconti senyörlüğü böylece Milano Dükalığı oldu.",
  kaynak:"Treccani, Dizionario Biografico «Gian Galeazzo Visconti»" },

{ t:"1404-01-01", kesinlik:"yil", devlet:"venedik", devletler:["venedik"], sinir_id:"",
  b:"Belluno ve Feltre Venedik'e geçti", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Belluno",
  etiket:["konu-siyasi","venedik"],
  d:"Gian Galeazzo Visconti'nin 1402'deki ölümünden sonra dağılan topraklarından Belluno ve Feltre 1404'te Venedik'e bağlandı; iki şehir 1797'ye kadar Venedik'te kaldı. Kaynaklar yalnız yılı veriyor.",
  kaynak:"Treccani «Belluno» · Treccani «Feltre»" },

{ t:"1404-04-08", devlet:"della-scala", devletler:["della-scala","carrara","milano-dukaligi"], sinir_id:"",
  b:"Verona Milano'dan alındı — Della Scala'lar kısa süreliğine geri döndü", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Verona",
  etiket:["konu-siyasi","della-scala","carrara","milano-dukaligi"],
  d:"Carrara'lar ile Della Scala ailesinin 27 Mart 1404 anlaşması üzerine Verona 7-8 Nisan gecesi Milano Dükalığı'ndan alındı; 10 Nisan'da Guglielmo Della Scala senyör ilan edildi, 15 Nisan'da oğulları Brunoro ve Antonio babalarına halef oldu.",
  kaynak:"Treccani, Dizionario Biografico «Carrara, Francesco da, il Novello» · KUTU-HATALI-1015 (0083/H-0007)" },

{ t:"1404-05-25", devlet:"carrara", devletler:["carrara","della-scala"], sinir_id:"",
  b:"Francesco Novello da Carrara Verona'yı ele geçirdi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Verona",
  etiket:["konu-siyasi","carrara","della-scala"],
  d:"Vicenza'nın 25 Nisan'da Venedik'e bağlanmasının ardından Francesco Novello, Brunoro ve Antonio Della Scala'yı tutuklatıp 25 Mayıs 1404'te Verona'yı işgal etti. Bu, Venedik'in kesinlikle engellemek istediği bir adımdı.",
  kaynak:"Treccani, Dizionario Biografico «Carrara, Francesco da, il Novello» · KUTU-HATALI-1015 (0083/H-0007)" },

{ t:"1405-11-17", devlet:"venedik", devletler:["venedik","carrara"], sinir_id:"",
  b:"Venedik Padova'yı aldı — Carrara senyörlüğünün sonu", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Padova",
  etiket:["konu-siyasi","venedik","carrara"],
  d:"Kuşatılan Padova'da Francesco Novello 16 Kasım 1405'te şehri on gün içinde teslim etmeye söz verdi; ertesi gece Venedik birlikleri Santa Croce kapısından şehre girdi. Venedik Senatosu Padova'nın teslimini (dedizione) 22 Kasım'da kabul etti.",
  kaynak:"Treccani, Dizionario Biografico «Carrara, Francesco da, il Novello» · KUTU-HATALI-1015 (0083/H-0007)" },

{ t:"1500-01-01", kesinlik:"yil", devlet:"avusturya", devletler:["avusturya","almanya"], sinir_id:"",
  b:"Görz kontları hanedanı söndü — Görz Habsburglara geçti", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Görz (Gorizia)",
  etiket:["konu-siyasi","avusturya"],
  d:"Görz (Gorizia) kontları hanedanı 1500'de söndü ve kontluk Habsburglara geçti. Şehir 1918'e kadar (1809-1813 İlirya Eyaletleri dışında) Habsburg idaresinde kaldı.",
  kaynak:"Treccani «Gorizia»" },

{ t:"1512-06-24", devlet:"graubunden", devletler:["graubunden","milano-dukaligi"], sinir_id:"",
  b:"Üç Lig Valtellina'yı, Chiavenna'yı ve Bormio'yu aldı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"Sondrio",
  etiket:["konu-siyasi","graubunden","milano-dukaligi"],
  d:"Üç Lig (Graubünden) 24 Haziran 1512'de Valtellina'ya ve Chiavenna ile Bormio kontluklarına girdi; bu topraklar 1797'ye dek Liglerin tâbi toprağı oldu. Aynı günlerde Parma ve Piacenza da Fransızlardan Papalığa geçti. 1620-1639 arasındaki Valtellina karışıklıkları (İspanyol, Papalık ve Fransız birlikleri) haritada ayrıca gösterilmiyor; 1639 Milano Kapitülasyonu bölgeyi Liglere geri verdi.",
  kaynak:"HLS «Veltlin» (hls-dhs-dss.ch/de/articles/007135) · Treccani «Piacenza»" },

{ t:"1545-08-16", devlet:"parma", devletler:["parma","papalik"], sinir_id:"",
  b:"Parma ve Piacenza Dükalığı kuruldu — Pier Luigi Farnese", tur:"kurulus", onem:3, dunya:2, kapsam:"dis", yer_id:"Piacenza",
  etiket:["konu-siyasi","parma","papalik"],
  d:"Papa III. Paulus, Papalık toprağı olan Parma ve Piacenza'yı birleştirip oğlu Pier Luigi Farnese'ye dükalık olarak verdi. Piacenza'nın tarihi bundan sonra Parma devletininkiyle birleşti; 1547'de Pier Luigi'nin öldürülmesinin ardından gelen imparatorluk işgali haritada gösterilmiyor.",
  kaynak:"Treccani «Piacenza» · künye parma (1545-08-16)" },

{ t:"1759-01-01", kesinlik:"yil", devlet:"avusturya", devletler:["avusturya","almanya"], sinir_id:"",
  b:"Maria Theresia Bamberg'in Karintiya'daki topraklarını satın aldı — Villach ve Tarvis Avusturya'ya", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Villach",
  etiket:["konu-siyasi","avusturya"],
  d:"1007'den beri Bamberg Piskoposluğu'nun eksklavı olan Villach, Kanal vadisi (Tarvis) ve öteki Karintiya mülkleri 1759'da İmparatoriçe Maria Theresia'ya satıldı ve Habsburg Karintiyası'na katıldı. Kaynak yalnız yılı veriyor.",
  kaynak:"villach.at «Stadtgeschichte» (Villach belediyesi)" },

{ t:"1791-09-14", devlet:"fransa", devletler:["fransa","papalik"], sinir_id:"",
  b:"Avignon ve Comtat Venaissin Fransa'ya katıldı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"Carpentras",
  etiket:["konu-siyasi","fransa","papalik"],
  d:"1274'ten beri Papalık toprağı olan Comtat Venaissin (başkenti 1320'den Carpentras) ile 1348'de satın alınan Avignon, 14 Eylül 1791 kararıyla Fransa'ya katıldı. Komünlerin temsilcileri birleşmeye Ağustos 1791'de karar vermişti.",
  kaynak:"Encyclopedia.com «Comtat Venaissin» (New Catholic Encyclopedia) · APRA «L'annexion du Comtat et d'Avignon»" },

{ t:"1809-10-14", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","avusturya"], sinir_id:"",
  b:"Görz, Trieste ve Villach dairesi Fransız İlirya Eyaletleri'ne katıldı", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"Görz (Gorizia)",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","avusturya"],
  d:"14 Ekim 1809 Schönbrunn Barışı'nın 3. maddesiyle Avusturya, Görz Kontluğu'nu, Trieste'yi, Karniyola'yı ve Karintiya'nın Villach dairesini (Tarvis dahil) Napolyon'a bıraktı; bu topraklar İlirya Eyaletleri olarak 1813'e dek Fransız idaresinde kaldı.",
  kaynak:"Schönbrunn Antlaşması (14 Ekim 1809) md. 3" },

{ t:"1815-06-09", devlet:"prusya", devletler:["prusya","almanya"], sinir_id:"",
  b:"Ren Eyaleti ve Vestfalya Prusya'ya, Valtellina Avusturya'ya, Lucca Bourbon-Parma'ya geçti", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"Köln",
  etiket:["sinir","antlasma","konu-siyasi","prusya","avusturya","lucca-dukaligi"],
  d:"Viyana Kongresi'nin 9 Haziran 1815 Nihai Senedi Ren'in iki yakasındaki toprakları (Köln, Aachen, Trier, Koblenz, Düsseldorf) ve Vestfalya'yı (Münster, Dortmund) Prusya'ya verdi; Prusya Ren topraklarını fiilen 5 Nisan 1815'te devralmış, Vestfalya zilyetlik patentini 21 Haziran'da yayımlamıştı. Erfurt da Prusya'ya döndü. Aynı senetle Valtellina, Chiavenna ve Bormio Avusturya'nın Lombardiya-Venedik Krallığı'na, Lucca ise dükalık olarak Bourbon-Parma hanedanına bırakıldı.",
  kaynak:"Viyana Kongresi Nihai Senedi (9 Haziran 1815) · dilibri RLB (Ren, 5 Nisan 1815) · Preußische Gesetzsammlung 1815 No. 303 (his-data.de) · HLS «Veltlin» · künye lucca-dukaligi" },

{ t:"1328-01-01", kesinlik:"yil", devlet:"lucca-cumhuriyeti", devletler:["lucca-cumhuriyeti"], sinir_id:"",
  b:"Castruccio Castracani öldü — Lucca yabancı senyörlerin eline geçti", tur:"toprak-kayip", onem:2, dunya:1, kapsam:"dis", yer_id:"Lucca",
  etiket:["konu-siyasi","lucca-cumhuriyeti"],
  d:"Lucca'nın senyörü Castruccio Castracani 1328'de Floransa'ya karşı savaşırken öldü. Ardından şehir 1342'ye kadar el değiştiren yabancı senyörlerin (Bavyeralı Ludwig, Gherardino Spinola, Bohemyalı Johann, Rossi, Della Scala, Floransa) eline geçti; bu dönemin sahiplerinin künyesi olmadığından haritada Lucca boş görünür.",
  kaynak:"Treccani «Lucca»" },

{ t:"1342-01-01", kesinlik:"yil", devlet:"piza", devletler:["piza","lucca-cumhuriyeti"], sinir_id:"",
  b:"Lucca Pisa hâkimiyetine girdi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Lucca",
  etiket:["konu-siyasi","piza","lucca-cumhuriyeti"],
  d:"Lucca 1342'de Pisa'nın hâkimiyetine girdi ve 1369'a kadar Pisa'ya bağlı kaldı.",
  kaynak:"C. Meek, The Commune of Lucca under Pisan Rule, 1342-1369 (Medieval Academy of America, 1980)" },

{ t:"1369-01-01", kesinlik:"yil", devlet:"lucca-cumhuriyeti", devletler:["lucca-cumhuriyeti","piza"], sinir_id:"",
  b:"İmparator IV. Karl Lucca'yı Pisa'dan kurtardı — cumhuriyet yeniden kuruldu", tur:"kurulus", onem:2, dunya:1, kapsam:"dis", yer_id:"Lucca",
  etiket:["konu-siyasi","lucca-cumhuriyeti","piza"],
  d:"Lucca 1369'da özerkliğini İmparator IV. Karl'dan satın aldı ve Pisa hâkimiyetinden çıktı. Bağımsızlığı bir imparatorluk imtiyazına dayanan aristokratik cumhuriyet 1799'a kadar sürdü.",
  kaynak:"Treccani «Lucca»" },

{ t:"1799-01-01", kesinlik:"yil", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","lucca-cumhuriyeti"], sinir_id:"",
  b:"Fransız işgali — Lucca Cumhuriyeti'nin sonu", tur:"toprak-kayip", onem:2, dunya:1, kapsam:"dis", yer_id:"Lucca",
  etiket:["konu-siyasi","fransa-cumhuriyet","lucca-cumhuriyeti"],
  d:"Lucca'nın aristokratik cumhuriyeti 1799'daki Fransız işgaliyle sona erdi. Ardından gelen Lucca Demokratik Cumhuriyeti ve 1805'ten itibaren Napolyon'un kız kardeşi Elisa ile kocası Felice Baciocchi'nin Lucca ve Piombino Prensliği Fransız uydusu oldukları ve ayrı künyeleri bulunmadığı için haritada 1815'e kadar Fransa rengiyle gösterilir; 1799-1800 Avusturya işgali de ayrıca gösterilmez.",
  kaynak:"Treccani «Lucca»" },

{ t:"1847-12-17", devlet:"toskana", devletler:["toskana","lucca-dukaligi"], sinir_id:"",
  b:"Lucca Dükalığı Toskana Büyük Dükalığı'na katıldı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Lucca",
  etiket:["konu-siyasi","toskana","lucca-dukaligi"],
  d:"Carlo Ludovico'nun erken devir antlaşmasıyla Lucca'nın devlet olarak özerkliği sona erdi. Düzenlemeler Maria Luisa'nın Aralık 1847'deki ölümüyle yürürlüğe girdi: Carlo Ludovico Parma'ya geçti, Lucca Toskana'ya katıldı.",
  kaynak:"Treccani «Lucca» · A. J. Reinerman, Encyclopedia of 1848 Revolutions «Parma» (sites.ohio.edu/chastain)" },

{ t:"1859-06-04", devlet:"sardinya-piyemonte", devletler:["sardinya-piyemonte","avusturya"], sinir_id:"",
  b:"Magenta Muharebesi — Lombardiya Avusturya'dan Sardinya'ya geçti", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"Milano",
  etiket:["savas","konu-siyasi","sardinya-piyemonte","avusturya"],
  d:"İkinci İtalyan Bağımsızlık Savaşı'nda Fransız-Sardinya ordusu 4 Haziran 1859'da Magenta'da Avusturyalıları yendi; Avusturya Lombardiya'yı boşalttı ve Milano, Bergamo, Brescia ile Valtellina Sardinya Krallığı'na geçti. Atlas Lombardiya'nın el değiştirmesini bu günle gösteriyor; hukukî devir Kasım 1859 Zürih Barışı'yladır.",
  kaynak:"HLS «Veltlin» (1859 Garibaldi Bormio'ya kadar ilerledi) · Lombardiya kayıtlarının 1859-06-04 günü" },

{ t:"1860-03-22", devlet:"sardinya-piyemonte", devletler:["sardinya-piyemonte","toskana"], sinir_id:"",
  b:"Toskana ve Emilia halkoylamalarla Sardinya Krallığı'na katıldı", tur:"birlesme", onem:4, dunya:3, kapsam:"dis", yer_id:"Floransa",
  etiket:["konu-siyasi","sardinya-piyemonte","toskana","parma"],
  d:"11-12 Mart 1860 halkoylamalarının ardından Emilia'nın (Parma, Piacenza, Modena, Bologna, Ferrara) sonuçları 18 Mart'ta Kral Vittorio Emanuele II'ye sunuldu; Toskana'nın (Floransa, Pisa, Siena, Lucca, Elba) Sardinya Krallığı'na birleşme kararnamesi 22 Mart 1860 tarihlidir. Toskana Büyük Dükalığı ile Parma ve Modena dükalıkları böylece sona erdi.",
  kaynak:"iris.unito.it — Genta, «Plebisciti» (Torino Üniversitesi) · Treccani «Piacenza»" },

{ t:"1866-10-03", devlet:"italya", devletler:["italya","avusturya"], sinir_id:"",
  b:"Viyana Barışı — Venedik ve Veneto İtalya'ya geçti", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"Belluno",
  etiket:["sinir","antlasma","konu-siyasi","italya","avusturya"],
  d:"3 Ekim 1866 Viyana Barışı'yla Avusturya, Venedik, Padova, Verona, Mantova, Udine, Belluno ve Feltre'yi kapsayan Veneto'yu İtalya Krallığı'na bıraktı.",
  kaynak:"Treccani «Belluno» («unita al Regno d'Italia nel 1866») · Viyana Barışı (3 Ekim 1866)" },

{ t:"1871-01-18", devlet:"almanya", devletler:["almanya","prusya"], sinir_id:"",
  b:"Alman İmparatorluğu ilan edildi — Prusya eyaletleri imparatorluğun parçası oldu", tur:"kurulus", onem:5, dunya:4, kapsam:"dis", yer_id:"Köln",
  etiket:["konu-siyasi","almanya","prusya"],
  d:"18 Ocak 1871'de Versay'da Prusya Kralı I. Wilhelm Alman İmparatoru ilan edildi. Prusya'nın Ren, Vestfalya ve Saksonya eyaletleri (Köln, Aachen, Trier, Koblenz, Düsseldorf, Münster, Dortmund, Erfurt) Alman İmparatorluğu'nun parçası oldu; atlas bu tarihten itibaren onları Almanya rengiyle gösterir.",
  kaynak:"Alman İmparatorluğu ilanı (18 Ocak 1871, Versay)" },

// ── KUTU-H5-1015 — Alçak Ülkeler, Çek Silezyası, Pula, Subotica, Ticino, Toskana kıyısı, Guastalla, Cortina/Gradisca
// (Emre kutu 0077 H-0049/H-0077/H-0088 · 0082 H-0048/H-0049/H-0052/H-0053). Her madde bir yerleşim kırılmasına bağlıdır.
{ t:"1583-11-06", devlet:"hollanda", devletler:["hollanda","ispanya"], sinir_id:"",
  b:"Hohenlohe Terneuzen'i aldı — kasaba Birleşik Eyaletler'e geçti", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Terneuzen",
  etiket:["konu-siyasi","hollanda","ispanya"],
  d:"Philips van Hohenlohe'nin birlikleri 6 Kasım 1583'te Terneuzen'e çıkarma yaptı; kasaba İspanyol Flandre'ından koparak Birleşik Eyaletler'in eline geçti ve 1596-1598'de tahkim edildi. Zeeuws-Vlaanderen'in Hollanda'ya ait kıyı şeridi (Staats-Vlaanderen) bu fetihlerle oluştu.",
  kaynak:"Encyclopedie van Zeeland «Terneuzen» (encyclopedievanzeeland.nl/Terneuzen)" },

{ t:"1591-01-01", kesinlik:"yil", devlet:"hollanda", devletler:["hollanda","ispanya"], sinir_id:"",
  b:"Maurits Hulst'u İspanyollardan aldı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Hulst",
  etiket:["konu-siyasi","hollanda","ispanya"],
  d:"Nassau'lu Maurits 1591 seferinde Flandre'ın kuzey ucundaki Hulst kalesini aldı. Kaynak yalnız yılı veriyor; şehir beş yıl sonra yeniden İspanyolların eline geçti.",
  kaynak:"Encyclopedie van Zeeland «Hulst»" },

{ t:"1596-08-18", devlet:"ispanya", devletler:["ispanya","hollanda"], sinir_id:"",
  b:"Arşidük Albert Hulst'u geri aldı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Hulst",
  etiket:["konu-siyasi","ispanya","hollanda"],
  d:"İspanyol Hollandası valisi Arşidük Albert'in ordusu 18 Ağustos 1596'da Hulst'u teslim aldı. Şehir 1645'e dek İspanyol Flandre'ının kuzey kalesi olarak kaldı.",
  kaynak:"Rijksmuseum «Inname van Hulst door de Spanjaarden, 1596» · Encyclopedie van Zeeland «Hulst»" },

{ t:"1645-11-05", devlet:"hollanda", devletler:["hollanda","ispanya"], sinir_id:"",
  b:"Frederik Hendrik Hulst'u aldı — Dört Ambacht Hollanda'ya geçti", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Hulst",
  etiket:["konu-siyasi","hollanda","ispanya"],
  d:"Stadhouder Frederik Hendrik 5 Kasım 1645'te Hulst'u kuşatmayla aldı. Hulst ve çevresi 1648 Münster Barışı'yla Birleşik Eyaletler'de kaldı; bugünkü Hollanda-Belçika sınırının bu kesimi buradan gelir.",
  kaynak:"Rijksmuseum SK-A-251 «The Siege and Capture of the City of Hulst from the Spaniards, November 5, 1645»" },

{ t:"1747-05-16", devlet:"fransa", devletler:["fransa","hollanda"], sinir_id:"",
  b:"Fransızlar Hulst'u ve Axel adasını (Terneuzen) işgal etti", tur:"isgal", onem:2, dunya:1, kapsam:"dis", yer_id:"Terneuzen",
  etiket:["konu-siyasi","fransa","hollanda"],
  d:"Avusturya Veraset Savaşı'nda Fransız ordusu Zeeuws-Vlaanderen'e girdi: Hulst 11 Mayıs 1747'de teslim oldu, Terneuzen'in bağlı olduğu Axel adası 16 Mayıs'ta işgal edildi. İşgal Aachen Barışı'ndan sonra 28 Ocak 1749'da sona erdi.",
  kaynak:"Encyclopedie van Zeeland «Terneuzen» · DBNL Van der Aa, Biographisch Woordenboek «De la Roque»" },

{ t:"1749-01-28", devlet:"hollanda", devletler:["hollanda","fransa"], sinir_id:"",
  b:"Fransızlar Zeeuws-Vlaanderen'i boşalttı", tur:"diplomasi", onem:1, dunya:1, kapsam:"dis", yer_id:"Terneuzen",
  etiket:["konu-siyasi","hollanda","fransa"],
  d:"Aachen Barışı'nın (1748) ardından Terneuzen ve Hulst'taki Fransız işgali 28 Ocak 1749'da bitti; bölge yeniden Birleşik Eyaletler'in idaresine döndü.",
  kaynak:"Encyclopedie van Zeeland «Terneuzen»" },

{ t:"1794-10-23", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","hollanda"], sinir_id:"",
  b:"Fransız Cumhuriyeti ordusu Terneuzen ve Hulst'u işgal etti", tur:"isgal", onem:2, dunya:1, kapsam:"dis", yer_id:"Terneuzen",
  etiket:["konu-siyasi","fransa-cumhuriyet","hollanda"],
  d:"Devrim savaşlarında Fransız birlikleri 23 Ekim 1794'te Terneuzen ve Hulst'a girdi. 1795 Lahey Antlaşması Staats-Vlaanderen'i Fransa'ya bıraktı; işgal 2 Şubat 1814'e kadar sürdü.",
  kaynak:"Encyclopedie van Zeeland «Terneuzen» ve «Hulst»" },

{ t:"1814-02-02", devlet:"hollanda", devletler:["hollanda","fransa-cumhuriyet"], sinir_id:"",
  b:"Terneuzen'de Fransız idaresi sona erdi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Terneuzen",
  etiket:["konu-siyasi","hollanda","fransa-cumhuriyet"],
  d:"1794'ten beri süren Fransız işgali ve ilhakı 2 Şubat 1814'te bitti; Terneuzen yeniden kurulan Hollanda devletine katıldı. Komşu Hulst'un Hollanda'ya dönüşü atlasta 30 Mayıs 1814 Paris Barışı ile gösterilir.",
  kaynak:"Encyclopedie van Zeeland «Terneuzen»" },

{ t:"1543-09-12", devlet:"ispanya", devletler:["ispanya","almanya"], sinir_id:"",
  b:"Venlo Antlaşması — Gelre Dükalığı ve Roermond V. Karl'a geçti", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Roermond",
  etiket:["konu-siyasi","ispanya","almanya"],
  d:"Kleve Dükü Wilhelm 12 Eylül 1543'te Venlo'da imzalanan antlaşmayla Gelre Dükalığı'nı İmparator V. Karl'a bıraktı. Yukarı Gelre'nin merkezi Roermond böylece Habsburg Hollandası'nın (Habsburg İspanyası'nın) parçası oldu.",
  kaynak:"Maastricht Üniversitesi «Tractaat van Venlo» (bazı kaynaklar 7 Eylül der)" },

{ t:"1702-10-06", devlet:"hollanda", devletler:["hollanda","ispanya"], sinir_id:"",
  b:"Müttefik ordusu Roermond'u aldı", tur:"isgal", onem:2, dunya:1, kapsam:"dis", yer_id:"Roermond",
  etiket:["konu-siyasi","hollanda","ispanya"],
  d:"İspanyol Veraset Savaşı'nda Marlborough'nun Müttefik ordusu 6 Ekim 1702'de Roermond'u kuşatmayla aldı. Şehir 1716'ya kadar Hollanda (Staats) işgalinde kaldı, ardından Avusturya Gelre'si olarak Avusturya'ya bırakıldı.",
  kaynak:"Royal Collection Trust, Roermond kuşatma haritası · Van der Bruggen 2021, Leiden doktora tezi (hdl.handle.net/1887/3225483)" },

{ t:"1839-04-19", devlet:"hollanda", devletler:["hollanda","belcika"], sinir_id:"",
  b:"Londra Antlaşması — Maas'ın doğusundaki Limburg ve Roermond Hollanda'ya", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"Roermond",
  etiket:["konu-siyasi","hollanda","belcika"],
  d:"19 Nisan 1839 Londra Antlaşması Belçika'nın bağımsızlığını kesinleştirirken 1830'dan beri Belçika idaresindeki Limburg'u böldü: Maas'ın doğu yakası (Roermond, Venlo) Hollanda'ya, batısı Belçika'ya kaldı. Lüksemburg'un batı yarısı da aynı antlaşmayla Belçika'ya geçti.",
  kaynak:"Londra Antlaşması 19 Nisan 1839" },

{ t:"1528-01-01", kesinlik:"yil", devlet:"ispanya", devletler:["ispanya","almanya"], sinir_id:"",
  b:"Utrecht piskoposu Overijssel'i (Twente, Enschede) V. Karl'a devretti", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Enschede",
  etiket:["konu-siyasi","ispanya","almanya"],
  d:"Utrecht Prens-Piskoposu Bavyeralı Heinrich, 1528'de Overijssel (Oversticht) üzerindeki dünyevî yetkisini V. Karl'a devretti; Twente ve Enschede Habsburg Hollandası'na katıldı. Devrin günü kaynaklarda çelişkili olduğundan yalnız yıl yazıldı.",
  kaynak:"DBNL Van der Aa «Johan van Breda» (25 Şubat; başka kaynaklar 20 Ekim)" },

{ t:"1597-01-01", kesinlik:"yil", devlet:"hollanda", devletler:["hollanda","ispanya"], sinir_id:"",
  b:"Maurits'in seferi Twente'yi (Enschede) Birleşik Eyaletler'e kattı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Enschede",
  etiket:["konu-siyasi","hollanda","ispanya"],
  d:"Nassau'lu Maurits 1597 sonbahar seferinde Twente'deki İspanyol kalelerini birer birer aldı; Enschede ve çevresi Birleşik Eyaletler'e geçti. Kaynak yılı veriyor.",
  kaynak:"Rijksmuseum «Bevrijding van Twente, 1597»" },

{ t:"1938-10-08", devlet:"almanya", devletler:["almanya","cekoslovakya","polonya"], sinir_id:"",
  b:"Alman birlikleri Opava'ya, Polonya birlikleri Karviná (Fryštát) kesimine girdi", tur:"isgal", onem:3, dunya:2, kapsam:"dis", yer_id:"Opava (Troppau)",
  etiket:["konu-siyasi","almanya","cekoslovakya","polonya"],
  d:"Münih Antlaşması uyarınca Alman birlikleri 8 Ekim 1938'de Opava bölgesine girdi; Opava Südetenland Reichsgau'nun merkezi oldu. Aynı gün Polonya'nın Zaolzie (Tešín Silezyası) işgalinin dördüncü kesimi Fryštát (Karviná) çevresini kapsadı, Karviná madenleri 10 Ekim'de devralındı.",
  kaynak:"O. Kolář, Historica Olomucensia 50 (2016), DOI 10.5507/ho.2016.039 · M. Borák, «Zábor Těšínska v říjnu 1938», Časopis Slezského zemského muzea B 46 (1997)" },

{ t:"1939-03-14", devlet:"almanya", devletler:["almanya","cekoslovakya","bohemya-moravya-protektorasi"], sinir_id:"",
  b:"Alman birlikleri Berlin görüşmesinden önce Ostrava'yı işgal etti", tur:"isgal", onem:3, dunya:2, kapsam:"dis", yer_id:"Ostrava (Mährisch Ostrau)",
  etiket:["konu-siyasi","almanya","cekoslovakya","bohemya-moravya-protektorasi"],
  d:"Alman birlikleri 14 Mart 1939 akşamı, Hácha'nın Berlin'deki görüşmesinden önce Ostrava'ya girdi; böylece Polonya'nın sanayi havzasına uzanması önlendi. Ertesi gün Çek toprakları işgal edildi ve 16 Mart'ta Bohemya ve Moravya Protektorası ilan edildi.",
  kaynak:"M. Borák, «České Slezsko v letech 1938-1945», Dějiny Českého Slezska 1740-2000 II (Slezská univerzita, Opava 2003) s. 369-404" },

{ t:"1945-04-30", devlet:"cekoslovakya", devletler:["cekoslovakya","almanya","bohemya-moravya-protektorasi"], sinir_id:"",
  b:"Kızıl Ordu Ostrava'yı aldı — Çek Silezyası'nın kurtuluşu", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"Ostrava (Mährisch Ostrau)",
  etiket:["konu-siyasi","cekoslovakya","almanya"],
  d:"Moravya-Ostrava harekâtında Kızıl Ordu 22 Nisan 1945'te ağır hasarlı Opava'yı, 30 Nisan'da Ostrava'yı, 3 Mayıs'ta Karviná'yı aldı. Çek Silezyası yeniden Çekoslovakya'ya bağlandı; Zaolzie 1920 sınırına döndü.",
  kaynak:"opava-city.cz «Town history» (22 Nisan) · ČT24 «Ostrava si připomíná 73. výročí osvobození» (30 Nisan) · Karviná belediyesi 2017 (3 Mayıs)" },



{ t:"1331-01-01", kesinlik:"yil", devlet:"venedik", devletler:["venedik"], sinir_id:"",
  b:"Pula Venedik idaresine girdi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Pula (Pola)",
  etiket:["konu-siyasi","venedik"],
  d:"1331'de Pula'yı fiilen yöneten Castropola ailesi devrilip İstria'dan sürüldü ve şehir yönetimi Venedik'e bırakıldı. Pula 1797 Campo Formio'ya dek Venedik İstriası'nın parçası kaldı. Kaynak yılı veriyor.",
  kaynak:"Hrvatska enciklopedija «Pula» (enciklopedija.hr/clanak/pula)" },

{ t:"1918-11-05", devlet:"italya", devletler:["italya","avusturya"], sinir_id:"",
  b:"Pula İtalyan işgaline geçti — Avusturya-Macaristan donanma üssünün sonu", tur:"isgal", onem:3, dunya:2, kapsam:"dis", yer_id:"Pula (Pola)",
  etiket:["konu-siyasi","italya","avusturya"],
  d:"Avusturya-Macaristan donanmasının devrinden sonra İtalyan birlikleri 5 Kasım 1918'de Pula'ya girdi. Şehir Rapallo Antlaşması'yla (12 Kasım 1920) hukuken İtalya Krallığı'na geçti.",
  kaynak:"Istrapedia «Pula» · Hrvatska enciklopedija «Pula» (dört gün sonra der)" },

{ t:"1947-09-15", devlet:"yugoslavya-federal", devletler:["yugoslavya-federal","italya-cumhuriyeti"], sinir_id:"",
  b:"Pula Yugoslavya'ya devredildi", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"Pula (Pola)",
  etiket:["konu-siyasi","yugoslavya-federal","italya-cumhuriyeti"],
  d:"10 Şubat 1947 Paris Barışı İstria'yı Yugoslavya'ya bıraktı; 1945'ten beri Müttefik askerî idaresindeki Pula'yı 15 Eylül 1947'de Yugoslav (Hırvat) makamları devraldı. Şehrin İtalyan nüfusunun büyük kısmı devirden önce göç etti.",
  kaynak:"Istrapedia «Pula» · Hrvatska enciklopedija «Pula»" },

{ t:"1918-11-13", devlet:"sirbistan-kralligi", devletler:["sirbistan-kralligi","macaristan-naiplik","yugoslavya"], sinir_id:"",
  b:"Sırp birlikleri Subotica'ya (Szabadka) girdi", tur:"isgal", onem:2, dunya:1, kapsam:"dis", yer_id:"Subotica (Szabadka)",
  etiket:["konu-siyasi","sirbistan-kralligi","macaristan-naiplik"],
  d:"Belgrad mütarekesinden sonra Sırp birlikleri 13 Kasım 1918 akşamı Szabadka'ya girdi; şehir 1 Aralık'tan itibaren Sırp-Hırvat-Sloven Krallığı'nın askerî idaresinde kaldı ve Trianon Antlaşması (4 Haziran 1920) ile hukuken bu devlete geçti.",
  kaynak:"Domonkos L., Trianoni Szemle 2018/3-4 · Hrvatska enciklopedija «Subotica»" },

{ t:"1941-04-11", devlet:"macaristan-naiplik", devletler:["macaristan-naiplik","yugoslavya"], sinir_id:"",
  b:"Macar birlikleri Subotica'ya girdi — Bačka işgali", tur:"isgal", onem:3, dunya:2, kapsam:"dis", yer_id:"Subotica (Szabadka)",
  etiket:["konu-siyasi","macaristan-naiplik","yugoslavya"],
  d:"Yugoslavya'nın işgalinde Macar ordusu 11 Nisan 1941'de Subotica'ya girdi; Bačka 1944'e dek Macar işgalinde kaldı. Şehir 10 Ekim 1944'te Kızıl Ordu ve partizanlarca alındı.",
  kaynak:"Encyclopaedia Judaica «Subotica» (encyclopedia.com) · Hrvatska enciklopedija «Subotica» · Sırbistan Savunma Bakanlığı (mod.gov.rs/eng/3280)" },

{ t:"1340-01-01", kesinlik:"yil", devlet:"visconti", devletler:["visconti"], sinir_id:"",
  b:"Milano (Visconti) Bellinzona'yı Rusca'lardan aldı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Bellinzona",
  etiket:["konu-siyasi","visconti"],
  d:"1335'te Como'dan sürülüp Bellinzona'ya çekilen Rusca ailesine karşı Milano 1340'ta şehri uzun bir kuşatmayla geri aldı. Bellinzona bundan sonra Alpler'e açılan yolun Milano kalesi oldu. Kaynak yılı veriyor.",
  kaynak:"HLS «Bellinzona» (Gemeinde, hls-dhs-dss.ch/de/articles/002031)" },

{ t:"1342-01-01", kesinlik:"yil", devlet:"visconti", devletler:["visconti"], sinir_id:"",
  b:"Luchino ve Giovanni Visconti Locarno'yu aldı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Locarno",
  etiket:["konu-siyasi","visconti"],
  d:"Luchino ve Giovanni Visconti 1342'de Locarno ve çevresini (Locarnese) ele geçirdi; bölge bir podestà eliyle Milano'ya bağlandı, 1439'dan itibaren Rusca kontlarına fief verildi. Kaynak yılı veriyor.",
  kaynak:"HLS «Locarno» (Gemeinde, hls-dhs-dss.ch/de/articles/002108)" },

{ t:"1500-04-14", devlet:"isvicre", devletler:["isvicre","milano-dukaligi"], sinir_id:"",
  b:"Bellinzona İsviçre Konfederasyonu'na teslim oldu", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"Bellinzona",
  etiket:["konu-siyasi","isvicre","milano-dukaligi"],
  d:"Fransa'nın Milano'yu ikinci kez almasının ardından Bellinzona 14 Nisan 1500'de Konfederasyona teslim oldu. Fransa Kralı XII. Louis 1503 Arona Antlaşması'yla şehri ve kontluğu Uri, Schwyz ve Nidwalden kantonlarına bıraktı; Bellinzona 1798'e kadar bu kantonların ortak vogtluğu olarak yönetildi.",
  kaynak:"HLS «Bellinzona» (Gemeinde, 002031; Vogtei, 008540)" },

{ t:"1503-01-01", kesinlik:"yil", devlet:"isvicre", devletler:["isvicre","milano-dukaligi"], sinir_id:"",
  b:"İsviçreliler Locarnese'yi işgal etti — Rusca senyörlüğü bitti", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Locarno",
  etiket:["konu-siyasi","isvicre","milano-dukaligi"],
  d:"Konfederasyon birlikleri 1503'te Locarno çevresini işgal etti ve Rusca kontlarının yönetimi sona erdi; Visconti kalesi ise Fransız elinde kaldı, ancak 1513 Novara Savaşı'ndan sonra XII. Louis'nin emriyle teslim edildi. 1516 Fribourg Barışı Locarno'yu on iki kantonun ortak vogtluğu olarak tanıdı.",
  kaynak:"HLS «Locarno» (Gemeinde, 002108; Pieve/Vogtei, 008544)" },

{ t:"1512-01-01", kesinlik:"yil", devlet:"isvicre", devletler:["isvicre","milano-dukaligi"], sinir_id:"",
  b:"İsviçreliler Lugano'yu kalıcı olarak işgal etti", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Lugano",
  etiket:["konu-siyasi","isvicre","milano-dukaligi"],
  d:"İsviçreliler Fransızları Lombardiya'dan sürdükleri 1512 seferinde Lugano'yu kalıcı olarak işgal etti; son Fransız birlikleri 1513 başında ayrıldı. Lugano 1798'e kadar on iki kantonun ortak vogtluğu olarak yönetildi. Kaynak yılı veriyor.",
  kaynak:"HLS «Lugano» (hls-dhs-dss.ch/de/articles/002177)" },

{ t:"1798-04-12", devlet:"helvetik-cumhuriyeti", devletler:["helvetik-cumhuriyeti","isvicre"], sinir_id:"",
  b:"Helvetik anayasası yürürlüğe girdi — Lugano ve Bellinzona kantonları kuruldu", tur:"kurulus", onem:3, dunya:2, kapsam:"dis", yer_id:"Lugano",
  etiket:["konu-siyasi","helvetik-cumhuriyeti","isvicre"],
  d:"Fransız işgalinin ardından 12 Nisan 1798'de Helvetik Cumhuriyeti'nin anayasası yürürlüğe girdi. Eski ortak vogtluklar tâbi toprak olmaktan çıktı: Lugano ve Locarno Lugano kantonunu, Bellinzona ve Leventina Bellinzona kantonunu oluşturdu. 1803 Arabuluculuk Senedi ikisini Tessin kantonunda birleştirdi.",
  kaynak:"HLS «Lugano» · HLS «Bellinzona» (Gemeinde) · HLS «Locarno»" },



{ t:"1804-01-01", kesinlik:"yil", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","piombino"], sinir_id:"",
  b:"Piombino Napolyon İmparatorluğu'na ilhak edildi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Piombino",
  etiket:["konu-siyasi","fransa-cumhuriyet","piombino"],
  d:"1796'dan beri sırasıyla İngiliz, Fransız ve Napoli birliklerince işgal edilen Piombino 1804'te Napolyon'un imparatorluğuna ilhak edildi. 1815 Viyana Kongresi Piombino'yu ve topraklarını Toskana Büyük Dükalığı'na kattı. Kaynak yılı veriyor.",
  kaynak:"Treccani «Piombino»" },

{ t:"1555-01-01", kesinlik:"yil", devlet:"ispanya", devletler:["ispanya","siena"], sinir_id:"",
  b:"İspanyollar Orbetello'yu aldı — Presidi Devleti'nin başkenti", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Orbetello",
  etiket:["konu-siyasi","ispanya","siena"],
  d:"Siena Savaşı'nda İspanyollar 1555'te Orbetello'yu fethetti. II. Felipe 1557'de Siena'yı Floransa Dükü I. Cosimo'ya verirken Orbetello, Porto Ercole, Porto Santo Stefano, Talamone ve Elba'daki Porto Longone'yi İspanyol donanmasının üssü olarak kendine ayırdı: Presidi Devleti. Kaynak yılı veriyor.",
  kaynak:"Treccani «Orbetello» · Treccani «Stato dei Presidi»" },

{ t:"1707-01-01", kesinlik:"yil", devlet:"avusturya", devletler:["avusturya","ispanya"], sinir_id:"",
  b:"Presidi Devleti Napoli genel valiliğiyle Avusturya'ya geçti", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Orbetello",
  etiket:["konu-siyasi","avusturya","ispanya"],
  d:"İspanyol Veraset Savaşı'nda Avusturya 1707'de Napoli Krallığı'nı ele geçirdi; ona bağlı Presidi Devleti (Orbetello) de Avusturya mülkü oldu. Kaynak yılı veriyor.",
  kaynak:"Treccani «Stato dei Presidi»" },

{ t:"1736-01-01", kesinlik:"yil", devlet:"napoli", devletler:["napoli","avusturya"], sinir_id:"",
  b:"Presidi Devleti Napoli Bourbonlarına geçti", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Orbetello",
  etiket:["konu-siyasi","napoli","avusturya"],
  d:"Lehistan Veraset Savaşı'nın sonunda Orbetello ve öteki Presidi limanları 1736'da Bourbon Carlo'ya geçti ve 1800'e kadar Napoli Krallığı'na bağlı kaldı. Kaynak yılı veriyor.",
  kaynak:"Treccani «Orbetello» · Treccani «Stato dei Presidi»" },

{ t:"1801-01-01", kesinlik:"yil", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","napoli","toskana"], sinir_id:"",
  b:"Floransa Barışı — Presidi Devleti Etrurya Krallığı'na katıldı", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"Orbetello",
  etiket:["konu-siyasi","fransa-cumhuriyet","napoli"],
  d:"1800'de Fransızlarca işgal edilen Presidi Devleti, Fransa ile Napoli arasındaki Floransa Barışı (1801) ile Fransa'nın kurduğu Etrurya Krallığı'na katıldı. Etrurya'nın atlasta ayrı künyesi olmadığından bu dönem Fransız rengiyle gösterilir; 1815'te bölge Toskana Büyük Dükalığı'na verildi.",
  kaynak:"Treccani «Stato dei Presidi» · Treccani «Orbetello»" },

{ t:"1746-01-01", kesinlik:"yil", devlet:"avusturya", devletler:["avusturya","mantua"], sinir_id:"",
  b:"Gonzaga'ların sönmesiyle Guastalla Dükalığı Avusturya'ya geçti", tur:"toprak-kazanc", onem:1, dunya:1, kapsam:"dis", yer_id:"Guastalla",
  etiket:["konu-siyasi","avusturya"],
  d:"1406'da Torelli'lere verilen, 1539'dan beri Gonzaga'ların bir kolunun elindeki Guastalla, 1746'da hanedanın sönmesiyle dükalığıyla birlikte Avusturyalılara geçti. 1748 Aachen Antlaşması onu Parma ve Piacenza Dükalığı'na kattı. Kaynak yılları veriyor.",
  kaynak:"Treccani «Guastalla»" },

{ t:"1748-01-01", kesinlik:"yil", devlet:"parma", devletler:["parma","avusturya"], sinir_id:"",
  b:"Aachen Antlaşması — Guastalla Parma ve Piacenza Dükalığı'na katıldı", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"Guastalla",
  etiket:["konu-siyasi","parma","avusturya"],
  d:"Avusturya Veraset Savaşı'nı bitiren 1748 Aachen Antlaşması Guastalla'yı Bourbon Felipe'ye verilen Parma ve Piacenza Dükalığı'na kattı. Guastalla 8 Ocak 1848'de Modena Dükü'ne devredilene kadar Parma'da kaldı. Kaynak yılı veriyor.",
  kaynak:"Treccani «Guastalla»" },

{ t:"1848-01-08", devlet:"ferrara", devletler:["ferrara","parma"], sinir_id:"",
  b:"Guastalla Modena Dükalığı'na devredildi", tur:"toprak-kazanc", onem:1, dunya:1, kapsam:"dis", yer_id:"Guastalla",
  etiket:["konu-siyasi","ferrara","parma"],
  d:"Parma Dükalığı'na bağlı Guastalla 8 Ocak 1848'de Modena Dükü'ne (Este) devredildi ve 1859'a kadar Modena Dükalığı'nda kaldı.",
  kaynak:"Treccani «Guastalla»" },

{ t:"1473-01-01", kesinlik:"yil", devlet:"venedik", devletler:["venedik"], sinir_id:"",
  b:"Venedik Gradisca'yı Osmanlı akınlarına karşı kale yaptı", tur:"siyaset", onem:1, dunya:1, kapsam:"dis", yer_id:"Gradisca d'Isonzo",
  etiket:["konu-siyasi","venedik"],
  d:"Osmanlı akıncılarının Friuli'ye inmesi üzerine Venedikliler 1473'te Isonzo üzerindeki Gradisca'yı tahkimli bir üsse çevirdi. Kale 1511'de I. Maximilian'ın eline geçti. Kaynak yılı veriyor.",
  kaynak:"Treccani «Gradisca d'Isonzo»" },

{ t:"1511-01-01", kesinlik:"yil", devlet:"avusturya", devletler:["avusturya","venedik"], sinir_id:"",
  b:"I. Maximilian Gradisca'yı ve Ampezzo vadisini (Cortina) Venedik'ten aldı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Gradisca d'Isonzo",
  etiket:["konu-siyasi","avusturya","venedik"],
  d:"Cambrai Birliği Savaşı'nda İmparator I. Maximilian 1511'de Venedik'ten Gradisca'yı fethetti; Gradisca o tarihten itibaren Habsburg mülkü kaldı. Aynı yıl Ampezzo vadisi (Cortina d'Ampezzo) de Avusturya idaresine girdi; vadi Tirol hukukuyla değil Kadore Statüsü'yle kendini yönetmeye devam etti. İki yer de 1918'e kadar Avusturya'da kaldı. Kaynaklar yılı veriyor.",
  kaynak:"Treccani «Gradisca d'Isonzo» · P. Giacomel, Ladinia XXXIX (2015) s. 63" },

];
