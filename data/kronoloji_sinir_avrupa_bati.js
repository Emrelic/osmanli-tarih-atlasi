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

{ t:"1291-08-01", devlet:"isvicre", devletler:["isvicre","almanya"], sinir_id:"",
  b:"Federal Belge — Uri, Schwyz ve Nidwalden'in birliği", tur:"kurulus", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["konu-siyasi","isvicre","almanya"],
  d:"Uri, Schwyz ve Nidwalden birbirlerine yardım etmeyi ve anlaşmazlıklarını hakem yoluyla çözmeyi belgeyle taahhüt etti; İsviçre Konfederasyonu'nun başlangıcı sayılan bu birlik bir toprak değişikliği içermiyordu. Kaynak yalnız ayı veriyor (Ağustos 1291); gün isvicre künyesinden devralındı.",
  kaynak:"Historisches Lexikon der Schweiz 'Eidgenossenschaft'" },

{ t:"1297-09-12", devlet:"portekiz", devletler:["portekiz","kastilya"], sinir_id:"",
  b:"Alcañices Antlaşması — Portekiz–Kastilya sınırının temeli", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","portekiz","kastilya","ispanya"],
  d:"Kastilya ile Portekiz Alcañices'te imzaladıkları antlaşmayla Riba-Côa topraklarını ve kalelerini, Olivença, Campo Maior ve San Felices de los Gallegos'u Portekiz'e bıraktı. Antlaşma Portekiz'in askerî olarak zaten tuttuğu durumu tescil etti. Olivença 1801'de yeniden el değiştirdi; bu dönemin sınır hattının koordinatı haritada yoktur.",
  kaynak:"M. V. Magro, Porto Üniversitesi yüksek lisans tezi (2011)" },

{ t:"1415-01-01", devlet:"isvicre", devletler:["isvicre","almanya"], sinir_id:"",
  b:"İsviçrelilerin Aargau'yu fethi", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["konu-siyasi","isvicre","almanya"],
  d:"İmparatorluktan sürgün edilen Habsburg Dükü IV. Friedrich'in Aargau'daki topraklarını İsviçreliler (Uri hariç) Nisan 1415'te ele geçirdi. Bern iki haftada Aarburg, Aarau, Zofingen, Lenzburg ve Brugg'u aldı; Luzern ve Zürih de birer pay aldı. Tarih YIL düzeyindedir: kaynak ayı veriyor, günü vermiyor.",
  kaynak:"Historisches Lexikon der Schweiz 'Aargau'" },

{ t:"1482-12-23", devlet:"fransa", devletler:["fransa","almanya"], sinir_id:"",
  b:"Arras Antlaşması — Burgonya mirasının paylaşılması", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","fransa","almanya","burgonya"],
  d:"Burgonya Düşesi Marie'nin 27 Mart 1482'deki ölümünün ardından Fransa ile Maximilian arasında imzalanan Arras Antlaşması, Franş-Konte, Artois, Mâconnais ve Auxerrois'yı Marguerite'in çeyizi olarak Fransa'ya bağladı; Pikardiya ile Burgonya dükalığı zımnen XI. Louis'ye bırakıldı. Bir katalog kaydı antlaşmayı 24 Aralık diye tarihliyor. Maximilian'ın tarafı atlasta 'almanya' künyesiyle gösterildi.",
  kaynak:"Larousse, Dictionnaire de l'Histoire de France · Britannica 'Mary, duchess of Burgundy' · Biblissima kaydı (24 Aralık — ÇELİŞKİ)" },

{ t:"1497-09-17", devlet:"ispanya", devletler:["ispanya","merini"], sinir_id:"dg5-es-ma-melilla",
  b:"Melilla'nın alınması", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["konu-siyasi","ispanya","merini","fas"],
  d:"Terk edilmiş ve yıkılmış Melilla, Medina Sidonia Dükü adına Pedro de Estopiñán tarafından çatışmasız alındı. Resmî gün 17 Eylül'dür, ancak bir akademik çalışma bu günün 18. yüzyıl yazarlarından gelen bir yaklaşım olduğunu, çağdaş kronikçinin yalnız 'eylül' dediğini belirtir. TDV'de Melilla'nın müstakil maddesi yoktur.",
  kaynak:"İspanya Kara Kuvvetleri Müzesi (resmî) · E. Gozalbes Cravioto, 'La conquista cristiana de Melilla', Estudios de Frontera VI" },

{ t:"1499-09-22", devlet:"isvicre", devletler:["isvicre","almanya"], sinir_id:"",
  b:"Basel Barışı — Svabya Savaşı'nın sonu", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","isvicre","almanya"],
  d:"Kral Maximilian ile İsviçre Konfederasyonu arasında Basel'de imzalanan barış savaş öncesi durumu geri getirdi. İki istisna vardı: Prättigau'daki sekiz mahkeme Maximilian'da kaldı, Konstanz'a ait Thurgau bölge mahkemesi Ekim 1499'da İsviçrelilere verildi.",
  kaynak:"Historisches Lexikon der Schweiz 'Basel, Frieden von (1499)'" },

{ t:"1516-11-29", devlet:"isvicre", devletler:["isvicre","fransa"], sinir_id:"dg5-it-ch-1",
  b:"Fribourg Ebedî Barışı — Ticino vogtlukları İsviçre'de kaldı", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","isvicre","fransa","milano-dukaligi"],
  d:"Marignano yenilgisinden sonra İsviçre Konfederasyonu ile Fransa Fribourg'da ebedî barış imzaladı. İsviçreliler Milano üzerindeki himaye iddiasından vazgeçti; Alpler ötesindeki vogtlukları satın almak için yapılan Fransız teklifini reddedip bu toprakları ellerinde tuttu. Sonraki Ticino böylece kesin olarak İsviçre'de kaldı; Mendrisio 1521'den itibaren.",
  kaynak:"Historisches Lexikon der Schweiz 'Ewiger Frieden'" },

{ t:"1532-01-01", devlet:"fransa", devletler:["fransa","bretanya"], sinir_id:"",
  b:"Bretanya'nın Fransa tacına bağlanması (Birleşme Fermanı)", tur:"bolunme", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["konu-siyasi","fransa","bretanya"],
  d:"Nantes'ta çıkarılan Birleşme Fermanı Bretanya dükalığını Fransa tacına ebediyen bağladı; Bretanya'nın vergi rızası ve adalet düzeni gibi hakları korundu. Kaynak ayı veriyor (Ağustos 1532), günü vermiyor; tarih YIL düzeyindedir.",
  kaynak:"Loire-Atlantique Departman Arşivleri 'Édit d'union 1532' (asıl belge: Archives nationales AE/II/587)" },

{ t:"1536-01-22", devlet:"isvicre", devletler:["isvicre","savoya"], sinir_id:"dg5-sa-ch-1",
  b:"Bern'in Savoy'a ait Vaud'yu fethi", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["konu-siyasi","isvicre","savoya"],
  d:"Bern 22 Ocak 1536'da Savoy'a ait Vaud'ya sefer başlattı; 26 Şubat'a kadar Moudon, Nyon, Gex, Morges, Orbe ve Yverdon alındı, Cenevre kuşatması kaldırıldı. 20 Mart – 21 Nisan arasındaki ikinci seferde Chillon ve Lausanne düştü. Vaud Bern'e geçti; bazı bölgeler Bern ile Fribourg arasında paylaşıldı.",
  kaynak:"Historisches Lexikon der Schweiz 'Nägeli, Hans Franz' ve 'Waadt'" },

{ t:"1564-10-30", devlet:"isvicre", devletler:["isvicre","savoya"], sinir_id:"dg5-sa-ch-1",
  b:"Lausanne Antlaşması — Savoy Vaud'dan vazgeçti, Gex ve Chablais geri verildi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","isvicre","savoya"],
  d:"Bern ile Savoy Dükü arasında Lausanne'da imzalanan antlaşmayla dük Vaud'dan kesin olarak vazgeçti. Karşılığında Gex, Chablais, Ternier ve Gaillard'ın 1 Mart 1565'te Savoy'a geri verilmesi kararlaştırıldı; Bern bu toprakları fiilen ancak Ağustos 1567'de boşalttı.",
  kaynak:"Historisches Lexikon der Schweiz 'Lausanner Vertrag'" },

{ t:"1570-12-13", devlet:"danimarka", devletler:["danimarka","isvec"], sinir_id:"dg6-dk-se-1751-oncesi",
  b:"Stettin Barışı — Kuzey Yedi Yıl Savaşı'nın sonu", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","danimarka","isvec","norvec-kralligi"],
  d:"Danimarka-Norveç ile İsveç Stettin'de barış imzaladı. İsveç işgal ettiği Jämtland ve Härjedalen'i geri verdi ve Gotland'dan resmen vazgeçti; Älvsborg için 150.000 taler fidye ödemeyi üstlendi. Aynı kaynak barışı savaş öncesi sınıra dönüş olarak da nitelendiriyor.",
  kaynak:"Store norske leksikon 'Den nordiske sjuårskrigen'" },

{ t:"1598-05-02", devlet:"fransa", devletler:["fransa","ispanya"], sinir_id:"dg5-guneyhol-fr-1",
  b:"Vervins Barışı — İspanya Pikardiya'daki kaleleri Fransa'ya geri verdi", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","fransa","ispanya"],
  d:"Fransa ile İspanya Vervins'te barış imzaladı. II. Felipe Pikardiya'daki bir dizi kaleyi Fransa'ya geri verdi ve antlaşma Cateau-Cambrésis düzenini teyit etti. Geri verilen kalelerin adları okunabilir bir kaynakta bulunamadı.",
  kaynak:"BnF katalog kaydı cb11978828t · Larousse Encyclopédie 'traité de Vervins'" },

{ t:"1601-01-17", devlet:"fransa", devletler:["fransa","savoya"], sinir_id:"dg5-fr-ch-jura-1",
  b:"Lyon Antlaşması — Bresse, Bugey ve Gex Fransa'ya geçti", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["antlasma","konu-siyasi","fransa","savoya","isvicre"],
  d:"Savoy, Lyon Antlaşması'yla Bresse, Bugey ve Gex'i Fransa'ya bıraktı. Böylece Gex bölgesi Fransa'nın oldu; bugünkü Fransa–İsviçre sınırının Cenevre'nin kuzeybatısındaki kesimi bu bölgenin sınırıdır. Savoy'un karşılığında ne aldığı okunabilir bir kaynakta doğrulanamadı.",
  kaynak:"BnF katalog kaydı cb13750190w" },

// ── G5-G7 (1606-11-11 → 1815-06-09) ─────────────────────────────────
// Başka dosyada ZATEN bulunan maddeler yazılmadı: 1609 On İki Yıl Ateşkesi · Vestfalya 1648 ·
// Roskilde 1658 · Pireneler 1659 · Kopenhag 1660 · Lizbon 1668 · Utrecht 1713 · Rastatt 1714 ·
// Campo Formio 1797 · Fredrikshamn 1809 · Kiel 1814. Bu dönemin hatlarının çoğu haritada YOK kutusudur.

{ t:"1645-08-13", devlet:"isvec", devletler:["isvec","danimarka"], sinir_id:"dg6-dk-se-1751-oncesi",
  b:"Brömsebro Barışı — Jämtland ve Härjedalen İsveç'e geçti", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","isvec","danimarka"],
  d:"Uzun müzakerelerin ardından Brömsebro'da imzalanan barışla Danimarka-Norveç, Norveç'in Jämtland ve Härjedalen illerini İsveç'e bıraktı. İki krallık arasındaki kuzey sınırı böylece batıya kaydı; ancak hat 1751'e kadar ayrıntılı olarak çizilmedi.",
  kaynak:"Den Store Danske (lex.dk) 'Brömsebro' · Store norske leksikon 'riksgrensen'" },

{ t:"1660-11-12", devlet:"fransa", devletler:["fransa","ispanya"], sinir_id:"d1923-fr-es-llivia",
  b:"Llívia sözleşmesi — Llívia'nın Cerdanya'da İspanyol anklavı olarak kalması", tur:"antlasma", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa","ispanya"],
  d:"Pireneler Antlaşması Cerdanya'nın köylerini Fransa'ya bırakmıştı. Llívia'da imzalanan sözleşme Llívia'yı bu devrin dışında tuttu; Llívia o günden beri Fransız toprağıyla çevrili bir İspanyol anklavıdır. Çevresi 1866 Bayonne Antlaşması'yla ayrıntılı olarak tarif edildi.",
  kaynak:"Pireneler Antlaşması ve Llívia sözleşmesi metni (Digithèque MJP, Perpignan Üniversitesi) · UNTS c.1288 No. 907 (Bayonne 1866 md. XVI)" },

{ t:"1668-05-02", devlet:"fransa", devletler:["fransa","ispanya"], sinir_id:"dg5-guneyhol-fr-1",
  b:"Aachen Barışı — Fransa ile İspanya arasında İspanyol Hollandası sınırının değişmesi", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa","ispanya"],
  d:"Fransa ile İspanya arasında imzalanan Aachen Barışı İspanyol Hollandası ile Fransa arasındaki sınırı değiştirdi. Güney Hollanda–Fransa sınırı 1659, 1668, 1678 ve 1697 barışlarıyla defalarca değişti; bu hatların koordinatı haritada yoktur.",
  kaynak:"Aachen Antlaşması metni (Digithèque MJP, 1668aix)" },

{ t:"1678-09-17", devlet:"fransa", devletler:["fransa","ispanya"], sinir_id:"dg5-fr-ch-jura-1",
  b:"Nijmegen Barışı (Fransa–İspanya) — Franş-Konte Fransa'ya geçti", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa","ispanya","isvicre"],
  d:"Fransa ile İspanya arasındaki Nijmegen Barışı'nın XI. maddesiyle Franş-Konte Fransa'ya bırakıldı. Böylece bugünkü Fransa–İsviçre sınırının Jura kesimine komşu olan bölge Fransız oldu; İspanyol Hollandası sınırında da yeni değişiklikler yapıldı.",
  kaynak:"Nijmegen Antlaşması (Fransa–İspanya) metni, md. XI (Digithèque MJP, 1678nimegue)" },

{ t:"1751-10-02", devlet:"danimarka", devletler:["danimarka","isvec"], sinir_id:"dg6-dk-se-stromstad",
  b:"Strömstad Sınır Antlaşması — Norveç–İsveç sınırı çizildi", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","danimarka","isvec","norvec"],
  d:"Danimarka-Norveç ile İsveç, Norveç ile İsveç arasındaki sınırı Strömstad'da imzalanan antlaşmayla güneyden kuzeye ayrıntılı olarak belirledi; Sami halkının haklarını düzenleyen Lapp ek maddesi de antlaşmanın parçasıdır. Hat 1752-1766 arasında yerinde işaretlendi. Antlaşma bugün de yürürlüktedir ve bugünkü Norveç–İsveç sınırının dayanağıdır. İsveç takvimine göre imza günü 21 Eylül'dür.",
  kaynak:"Store norske leksikon 'grensetraktaten av 1751' ve 'riksgrensen'" },

{ t:"1752-08-02", devlet:"isvicre", devletler:["isvicre","milano-dukaligi"], sinir_id:"dg5-it-ch-1",
  b:"Varese Antlaşması — Ticino ile Milano Dükalığı arasındaki sınırın sistemli delimitasyonu", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","isvicre","milano-dukaligi","habsburg"],
  d:"Milano Düşesi, Avusturya İmparatoriçesi ve İsviçre Konfederasyonu, Lugano, Locarno ve Mendrisio vilayetleri ile Lombardiya arasındaki sınırı Varese'de düzenledi. Antlaşma sınırın yöntemli biçimde çizilmesinin ilk ciddi girişimi sayılır; 1754-1755'te karma komisyonlar hattı ayrıntılı olarak belgeledi. 1861 Lugano Sözleşmesi de Ticino sınırındaki anlaşmazlıkları bu antlaşmaya dayanarak çözdü.",
  kaynak:"IBS No. 12 Italy–Switzerland (Treaty of Varese)" },

{ t:"1760-03-24", devlet:"sardinya-piyemonte", devletler:["sardinya-piyemonte","fransa"], sinir_id:"dg5-sa-fr-2",
  b:"Torino Antlaşması — Fransa ile Sardinya arasındaki sınırın düzenlenmesi", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","sardinya-piyemonte","fransa"],
  d:"Fransa ile Sardinya Krallığı, Savoy ve Nice kontluğu boyunca uzanan ortak sınırlarını Torino'da imzalanan antlaşmayla düzenledi. Bu hat 1792'de Savoy'un Fransa'ya katılmasına kadar sürdü; koordinatı haritada yoktur.",
  kaynak:"Torino Antlaşması 1760 metni (Digithèque MJP, 1760turin; Wenck derlemesi) · BnF katalog kaydı" },

{ t:"1766-02-23", devlet:"fransa", devletler:["fransa","almanya"], sinir_id:"dg5-fr-de-1",
  b:"Lorraine Fransa'ya katıldı — Stanislas'ın ölümü", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","fransa","almanya"],
  d:"Lorraine Dükü Stanislas Lunéville'de öldü ve düklük ertesi gün Fransız kralı adına ele geçirildi. Lorraine'in katılmasıyla Fransa'nın Alman devletleriyle olan kuzeydoğu sınırı değişti; bu hattın koordinatı haritada yoktur.",
  kaynak:"Musée Lorrain (Nancy)" },

{ t:"1792-11-27", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","sardinya-piyemonte"], sinir_id:"dg5-sa-ch-3",
  b:"Savoy'un Fransa'ya katılması — Cenevre ve Valais ile sınırlar Fransız oldu", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","fransa-cumhuriyet","sardinya-piyemonte","isvicre"],
  d:"Ulusal Konvansiyon Savoy'un Fransa'ya katılması kararını kabul etti; Nice'in katılması 31 Ocak 1793'te onaylandı. Savoy'un Cenevre ve Valais ile sınırları böylece Fransa'nın sınırı oldu. Cenevre 26 Nisan 1798'de, Valais 12 Kasım 1810'da Fransa'ya katıldı; 1815 Viyana düzenlemesi Savoy'u Sardinya'ya geri verdi.",
  kaynak:"Digithèque MJP (d1792savoie, d1793nice — Archives parlementaires) · HLS 'Genf (Kanton)', 'Wallis'" },

{ t:"1795-10-01", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","habsburg"], sinir_id:"dg5-guneyhol-fr-3",
  b:"Avusturya Hollandası'nın Fransa'ya ilhakı", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","fransa-cumhuriyet","habsburg","belcika"],
  d:"Ulusal Konvansiyon, 9 vendémiaire IV. yıl kararıyla Avusturya Hollandası'nı Fransa'ya kattı. Güney Hollanda–Fransa sınırı böylece ortadan kalktı; bölge 1815'e kadar Fransız kaldı ve ardından Birleşik Hollanda Krallığı'na verildi.",
  kaynak:"Digithèque MJP (d1795belgique) · Wallonie portalı (Institut Destrée)" },

{ t:"1797-10-10", devlet:"isvicre", devletler:["isvicre","milano-dukaligi"], sinir_id:"dg5-it-ch-1",
  b:"Valtellina, Chiavenna ve Bormio'nun Cisalpin Cumhuriyeti'ne katılması", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","isvicre","milano-dukaligi"],
  d:"Napolyon, Graubünden'e tâbi Valtellina, Chiavenna ve Bormio'yu Cisalpin Cumhuriyeti'ne kattı; Graubünden bu toprakları kaybetti. Bu dönemin sınır hattının koordinatı haritada yoktur.",
  kaynak:"HLS 'Veltlin'" },

{ t:"1801-02-09", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","almanya"], sinir_id:"dg5-fr-de-2",
  b:"Lunéville Antlaşması — Ren'in sol yakası Fransa'ya", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","almanya","habsburg"],
  d:"Fransa ile Kutsal Roma İmparatorluğu arasındaki Lunéville Antlaşması, Ren'in sol yakasını Fransa'ya bıraktı ve Fransa–Almanya sınırını Ren nehrine taşıdı. Bu hat 1814'e kadar sürdü; bugünkü sınırın yalnız Alsas kesimindeki Ren parçası onunla çakışır, geri kalanının koordinatı haritada yoktur.",
  kaynak:"Lunéville Antlaşması metni (Digithèque MJP, 1801luneville)" },

{ t:"1801-06-06", devlet:"ispanya", devletler:["ispanya","portekiz"], sinir_id:"d1923-es-pt-olivenza",
  b:"Badajoz Antlaşması — Olivenza İspanya'ya geçti, Guadiana fiilî sınır oldu", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","ispanya","portekiz"],
  d:"Badajoz Antlaşması'yla Olivenza İspanya'ya bırakıldı. Guadiana nehri bu kesimde iki ülke arasındaki sınır oldu. Portekiz bu hattı hiçbir zaman antlaşmayla kabul etmedi; Caia ile Cuncos arasındaki kesim bugün de sınırlandırılmamış, Olivenza anlaşmazlığı sürüyor.",
  kaynak:"Diputación de Badajoz, Olivenza tarihçesi · Santos Sánchez, BAGE 104 (2025)" },

{ t:"1802-09-11", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","sardinya-piyemonte"], sinir_id:"dg5-it-ch-3",
  b:"Piyemonte'nin Fransa'ya ilhakı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","fransa-cumhuriyet","sardinya-piyemonte","isvicre"],
  d:"Piyemonte kesin olarak Fransa'ya katıldı. Piyemonte'nin İsviçre ile olan sınırı böylece Fransa'nın sınırı oldu.",
  kaynak:"S. Cavicchioli, Italies 6 (2002)" },

{ t:"1810-07-09", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","hollanda"], sinir_id:"dg5-nl-de",
  b:"Holland Krallığı'nın Fransa'ya ilhakı (Rambouillet Kararnamesi)", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","fransa-cumhuriyet","hollanda","almanya"],
  d:"Rambouillet Kararnamesi'yle Holland Krallığı Fransa'ya katıldı. Hollanda'nın Alman devletleriyle olan sınırı böylece Fransa'nın sınırı oldu.",
  kaynak:"parlement.com 'Koninkrijk Holland (1806-1810)' (Montesquieu Instituut)" },

{ t:"1810-11-12", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","isvicre"], sinir_id:"dg5-sa-ch-3",
  b:"Valais'nin Simplon departmanı olarak Fransa'ya katılması", tur:"toprak-kazanc", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","fransa-cumhuriyet","isvicre"],
  d:"Valais, Simplon departmanı adıyla Fransa'ya katıldı ve Aralık 1813'e kadar Fransız kaldı. Savoy ile Valais arasındaki sınır bu dönemde bir Fransız iç sınırıydı; Valais 1815'te İsviçre Konfederasyonu'na katıldı.",
  kaynak:"HLS 'Wallis'" },

{ t:"1814-05-30", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","isvicre"], sinir_id:"d1923-fr-ch",
  b:"Birinci Paris Antlaşması — Fransa–İsviçre sınırının bugünkü hattı", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","isvicre","sardinya-piyemonte"],
  d:"Napolyon'un yenilgisinden sonra imzalanan Birinci Paris Antlaşması Fransa'nın sınırlarını yeniden çizdi ve İsviçre Konfederasyonu'nun bağımsızlığını bugünküne büyük ölçüde benzeyen sınırlarla tanıdı. 1815 bildirisi, 1818 Bern sözleşmesi ve 1824 Neuchâtel tutanağı hattı tamamladı; 1862 Dappes takası dışında bu hat yaklaşık 140 yıl değişmedi. ABD Dışişleri çalışması antlaşmanın gününü bir yerde 20 Mayıs olarak veriyor; İsviçre Tarih Sözlüğü 30 Mayıs diyor.",
  kaynak:"IBS No. 11 France–Switzerland · HLS 'Pariser Frieden' · Digithèque MJP (1814paris)" },

// ── G4 (1815-06-09 → 1878-07-13) ────────────────────────────────────
// Başka dosyada ZATEN bulunan G4 maddeleri yazılmadı: Viyana 1815 · Londra 1839 · Villafranca ve Zürih 1859 ·
// Torino 1860 · İtalya Krallığı 1861 · Prag 1866 · Viyana 1866 · Frankfurt 1871 (kronoloji_fransa/habsburg/
// hollanda/italya/almanya.js).

{ t:"1815-11-20", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","almanya"], sinir_id:"dg4-fr-de-1815",
  b:"İkinci Paris Antlaşması — Fransa'nın doğu sınırı 1790 hattına yakın biçimde daraltıldı", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","almanya","sardinya-piyemonte"],
  d:"Waterloo'dan sonra imzalanan İkinci Paris Antlaşması, 1814 Birinci Paris Antlaşması'nın çizdiği Fransa sınırını yeniden düzenledi; 1814'te Fransa'ya bırakılan Savoy kısmı da bu düzenlemenin konusuydu. Bu hattın 1870'e kadar aynen sürüp sürmediğini açıkça söyleyen bir kaynak bulunamadı; haritada 1815-1871 Fransa–Almanya hattı bu yüzden çizilmiyor.",
  kaynak:"HLS 'Pariser Frieden' (30 Mayıs 1814 ve 20 Kasım 1815) · IBS No. 12 (1814'te Savoy'un bir kısmı Fransa'ya)" },

{ t:"1816-03-16", devlet:"isvicre", devletler:["isvicre","sardinya-piyemonte"], sinir_id:"dg4-sa-ch-cenevre",
  b:"Torino Antlaşması — Savoy'dan Cenevre'ye bırakılan komünler ve Cenevre–Savoy sınırı", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","isvicre","sardinya-piyemonte"],
  d:"Viyana Kongresi Nihaî Senedi'nin LXXX. maddesi Savoy'a ait bazı komünleri İsviçre'ye katılan Cenevre'ye bırakmıştı. Sardinya ile İsviçre Torino'da bu devri uygulayan antlaşmayı imzaladı ve Cenevre'nin güney sınırını çizdi. Bu hat 1860'ta Savoy'un Fransa'ya geçmesiyle Fransa–İsviçre sınırı oldu.",
  kaynak:"IBS No. 12 Italy–Switzerland (Viyana md. LXXX) · Historisches Lexikon der Schweiz 'Savoyen' (Torino 1816)" },

{ t:"1816-06-26", devlet:"hollanda", devletler:["hollanda","almanya"], sinir_id:"dg4-nl-de-belcika-dogu",
  b:"Aachen Sınır Antlaşması — Birleşik Hollanda ile Prusya arasındaki sınır ve Tarafsız Moresnet", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","hollanda","almanya"],
  d:"Birleşik Hollanda Krallığı ile Prusya Aachen'de sınırlarını belirledi. Üzerinde anlaşılamayan Moresnet çevresi iki devletin ortak yönetimine bırakıldı (Tarafsız Moresnet). Bugünkü Hollanda–Almanya sınırının Prusya kesimi bu antlaşmaya dayanır; güneydeki kesim 1839'da Belçika'ya geçti.",
  kaynak:"IBS No. 31 Germany–Netherlands · IBS No. 7 Belgium–Germany" },

{ t:"1820-03-28", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","hollanda"], sinir_id:"dg4-nl-fr-kortrijk",
  b:"Kortrijk Sınır Antlaşması — bugünkü Belçika–Fransa sınırı çizildi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","hollanda","belcika","luksemburg"],
  d:"Fransa ile Birleşik Hollanda Krallığı, 1815 Paris Antlaşması'nın belirlediği sınırı Kortrijk'te ayrıntılı olarak çizdi. Belçika 1830'da ayrılınca bu hat Belçika–Fransa sınırı oldu ve küçük düzeltmeler dışında bugüne kadar değişmedi; Lüksemburg ile Fransa arasındaki sınır da aynı antlaşmaya dayanır.",
  kaynak:"L. Milis, De Lage Landen 'Een verdrag met sporen in het landschap' · ACT Lüksemburg 'Limites d'État'" },

{ t:"1824-07-02", devlet:"hollanda", devletler:["hollanda","almanya"], sinir_id:"d1923-nl-de",
  b:"Meppen Sınır Antlaşması — Hollanda ile Hannover arasındaki sınır", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","hollanda","almanya"],
  d:"Hollanda ile Hannover Krallığı, ortak sınırlarını Meppen'de imzaladıkları antlaşmayla ayrıntılı olarak belirleyip işaretledi. Böylece bugünkü Hollanda–Almanya sınırının kuzey kesimi de delimite edilmiş oldu.",
  kaynak:"IBS No. 31 Germany–Netherlands" },

{ t:"1830-10-04", devlet:"belcika", devletler:["belcika","hollanda"], sinir_id:"dg4-be-fr-fiili",
  b:"Belçika'nın bağımsızlık ilanı — Fransa sınırı fiilen Belçika'nın oldu", tur:"kurulus", onem:4, dunya:4, kapsam:"dis", yer_id:"Brüksel",
  etiket:["sinir","konu-siyasi","belcika","hollanda","fransa-cumhuriyet"],
  d:"Brüksel'deki geçici hükûmet Belçika'nın Birleşik Hollanda Krallığı'ndan ayrıldığını ilan etti. Birleşik Hollanda'nın Fransa ile 1820'de çizilen sınırı fiilen yeni devletin sınırı oldu. Hukukî sınır ve uluslararası kabul 1839 Londra Antlaşması'yla geldi.",
  kaynak:"Belçika Devlet Arşivi (arch.be) ve Wallonie portalı (4 Ekim 1830) · Nationaal Archief ve parlement.com (Londra 19 Nisan 1839)" },

{ t:"1856-12-02", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","ispanya"], sinir_id:"d1923-fr-es-bati",
  b:"Bayonne Antlaşması — Pirenelerde Bidasoa'dan Navarra'ya sınırın ayrıntılı çizimi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","ispanya"],
  d:"Fransa ile İspanya, 1659 Pireneler Antlaşması'ndan beri ayrıntılı olarak çizilmemiş sınırlarının batı kesimini Bayonne'da imzalanan antlaşmayla belirledi. Antlaşma Bidasoa nehrinde talvegi sınır yaptı ve Sülün Adası'nı iki devletin ortak egemenliğine bıraktı. Sınır maddeleri 1859'da uygulanmaya başladı; doğu kesimleri 1862 ve 1866 antlaşmalarıyla tamamlandı.",
  kaynak:"UNTS c.1142 No. 838 (Bayonne 1856, md. 9 ve 27) · J. Capdevila i Subirana, Historia del deslinde de la frontera hispano-francesa (IGN)" },

{ t:"1860-04-26", devlet:"ispanya", devletler:["ispanya","fas"], sinir_id:"d1923-es-ma-ceuta",
  b:"Wad-Ras Antlaşması — Ceuta'nın sınırı genişletildi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","ispanya","fas"],
  d:"İspanya–Fas savaşını bitiren Wad-Ras Antlaşması Ceuta'nın kara sınırını genişletti ve bir tarafsız bölge öngördü. Yeni hat 17 Kasım 1860'ta imzalanan işaretleme belgesiyle yerinde çizildi; akademik bir rapora göre Ceuta bugün de bu sözleşmelerdeki sınırlara sahiptir.",
  kaynak:"Bermejo García vd., Ceuta y Melilla, frontera terrestre (Observatorio de Ceuta y Melilla, 2020)" },

{ t:"1861-03-07", devlet:"sardinya-piyemonte", devletler:["sardinya-piyemonte","fransa-cumhuriyet"], sinir_id:"dg4-sa-fr-1861",
  b:"Torino sınır sözleşmesi — Savoy ve Nice'in devrinden sonra Fransa–Sardinya sınırı çizildi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","sardinya-piyemonte","fransa-cumhuriyet","italya"],
  d:"1860 Torino Antlaşması'nın öngördüğü karma komisyon, Savoy ve Nice'in Fransa'ya geçmesinden sonraki sınırı Torino'da imzalanan sözleşmeyle belirledi. Hat birçok yerde antlaşmada tasarlanandan ayrıldı ve Fransa bazı vadi başlarını kaybetti. On gün sonra İtalya Krallığı ilan edilince bu hat Fransa–İtalya sınırı oldu; 1947'ye kadar yalnız küçük düzeltmeler gördü.",
  kaynak:"IBS No. 4 France–Italy (Torino 1860-61)" },

{ t:"1862-06-21", devlet:"ispanya", devletler:["ispanya","fas"], sinir_id:"dg3-es-ma-melilla-1894-oncesi",
  b:"Tanca demarkasyon akdi — Melilla sınırı işaretlendi", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","ispanya","fas"],
  d:"1859 Tetuan Sözleşmesi ve 1861 Madrid Antlaşması'nın genişlettiği Melilla sınırı Tanca'da imzalanan demarkasyon akdiyle yerinde işaretlendi. Akdin günü kaynaklar arasında çelişkilidir: İspanya hükümeti 21 Haziran, basın 26 Haziran 1862 veriyor.",
  kaynak:"İspanya hükümetinin Kongre'ye yazılı cevabı, 18 Kasım 2022" },

{ t:"1862-12-08", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","isvicre"], sinir_id:"d1923-fr-ch-dappes",
  b:"Dappes Antlaşması — Fransa ile İsviçre arasında toprak takası", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","isvicre"],
  d:"1815 bildirisiyle İsviçre'ye verilen Dappes vadisindeki stratejik yol, uzun süre iki devlet arasında sürtüşme konusu olmuştu. Bern'de imzalanan antlaşmayla vadi Fransa'ya geçti, karşılığında kuzeyindeki eşit bir alan İsviçre'ye verildi; takas 746,5 hektardı. Bu takas dışında Fransa–İsviçre sınırı 1814'ten 1953'e kadar değişmedi.",
  kaynak:"IBS No. 11 France–Switzerland" },

{ t:"1864-09-29", devlet:"ispanya", devletler:["ispanya","portekiz"], sinir_id:"d1923-es-pt-kuzey",
  b:"Lizbon Sınır Antlaşması — Minho'dan Caia'ya İspanya–Portekiz sınırı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","ispanya","portekiz"],
  d:"İspanya ile Portekiz, Minho nehrinin ağzından Caia'nın Guadiana'ya karıştığı yere kadar sınırlarını Lizbon'da imzalanan antlaşmayla belirledi. Couto Misto adlı tarafsız bölge İspanya'ya bırakıldı. Portekiz, Olivenza meselesi yüzünden hattı yalnız Caia'ya kadar kabul etti; güneyi 1926'ya kadar çizilmedi. Antlaşmanın ekleri 4 Kasım 1866'da tamamlandı.",
  kaynak:"UNTS c.1288 No. 906 (Portekiz Deniz Kuvvetleri kopyası) · Santos Sánchez, BAGE 104 (2025) · Portekiz Dışişleri" },

{ t:"1864-10-30", devlet:"danimarka", devletler:["danimarka","almanya"], sinir_id:"d1864-dk-de-kongea",
  b:"Viyana Antlaşması — Danimarka Schleswig, Holstein ve Lauenburg'u bıraktı, sınır Kongeå'ya çekildi", tur:"toprak-kayip", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","danimarka","almanya","habsburg"],
  d:"İkinci Schleswig Savaşı'nı bitiren Viyana Antlaşması'yla Danimarka üç düklük üzerindeki bütün haklarını Prusya ile Avusturya'ya bıraktı. Danimarka–Alman sınırı Elbe'den kuzeye, Ribe'nin kuzeyindeki Kongeå nehrine taşındı. Bu hat 1920'deki halk oylamalarına kadar sürdü.",
  kaynak:"IBS No. 81 Denmark–Germany (Viyana 30 Ekim 1864, BFSP c.54)" },

{ t:"1868-07-11", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","ispanya"], sinir_id:"d1923-fr-es-dogu",
  b:"Bayonne Nihaî Akdi — Fransa–İspanya sınırının delimitasyonu tamamlandı", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","ispanya"],
  d:"Fransa ile İspanya, 1856, 1862 ve 1866 Bayonne antlaşmalarıyla parça parça çizilen Pireneler sınırını 11 Temmuz 1868 Nihaî Akdi'yle tamamladı. 1866 antlaşması Llívia'nın çevresini de tarif ediyordu. Bir İspanyol resmî yayınına göre sınır o günden beri çok az değişti.",
  kaynak:"UNTS c.1288 No. 907 (Bayonne 1866 ve Nihaî Akit 1868) · Capdevila (IGN)" },

// ── G3 (1878-07-13 → 1914-07-28) ────────────────────────────────────
{ t:"1879-06-24", devlet:"isvicre", devletler:["isvicre","almanya"], sinir_id:"d1923-ch-de",
  b:"İsviçre–Almanya sınır antlaşması — Untersee ve Konstanz kesimi", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","isvicre","almanya"],
  d:"İsviçre ile Alman İmparatorluğu, Baden ile daha önce 1854 ve 1878'de yapılan düzenlemeleri izleyerek Untersee ve Konstanz çevresindeki sınırı antlaşmayla belirledi. Bodensee'nin büyük gölü (Obersee) üzerinde ise hiçbir antlaşma sınır çizmedi; bu durum bugün de sürüyor. Antlaşmanın öncesiyle hat farkı ölçülmedi.",
  kaynak:"fedlex SR 0.132.136.3 (1964 antlaşmasının önceki antlaşmalara atfı) · Kramsch 2015 (Obersee) — tarih listesi envanter denetim/D3-AVRUPA-BATI-0916.md §1.11'de" },

{ t:"1893-07-21", devlet:"isvicre", devletler:["isvicre","habsburg"], sinir_id:"d1893-hab-ch",
  b:"Ren düzenlemesi antlaşması yürürlüğe girdi — Avusturya-Macaristan–İsviçre sınırı Eski Ren'in ortası", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","isvicre","habsburg"],
  d:"30 Aralık 1892'de imzalanan Ren düzenlemesi antlaşması, Avusturya-Macaristan ile İsviçre arasındaki sınırı Eski Ren'in ortasına bağladı. Nehrin yeni yataklara alınması sınırı taşımadı; Diepoldsau kesiminde sınırın yeni kanala uyarlanması Birinci Dünya Savaşı'ndan sonraya kaldı.",
  kaynak:"Avusturya Dışişleri Bakanlığı (BMEIA) Bern Büyükelçiliği antlaşma listesi" },

{ t:"1894-03-05", devlet:"ispanya", devletler:["ispanya","fas"], sinir_id:"d1923-es-ma-melilla",
  b:"Merakeş Sözleşmesi — Melilla sınırı ve tarafsız bölge", tur:"antlasma", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","ispanya","fas"],
  d:"İspanya ile Fas, Melilla çevresindeki sınır ve tarafsız bölge düzenini Merakeş'te imzalanan sözleşmeyle bağladı. Hattın dayanağı 1859 Tetuan Sözleşmesi, 1862 Tanca demarkasyon akdi ve 1891 yeniden işaretleme akdidir; İspanya hükümeti bugünkü sınırı bu belgelerin tamamına dayandırıyor. 1894 sözleşmesinin hattı değiştirip değiştirmediği ölçülmedi.",
  kaynak:"İspanya hükümetinin Kongre'ye yazılı cevabı, 18 Kasım 2022 (congreso.es)" },

{ t:"1900-02-12", devlet:"danimarka", devletler:["danimarka","almanya"], sinir_id:"d1864-dk-de-kongea",
  b:"Kopenhag Sınır Sözleşmesi — Kongeå hattında iki küçük düzeltme", tur:"antlasma", onem:1, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","danimarka","almanya"],
  d:"Danimarka ile Almanya, 1864 Viyana Antlaşması'nın çizdiği Kongeå sınırında sınır dereleri düzenlemesi için iki küçük düzeltme yaptı; takas edilen toprak akrlarla ölçülecek kadar küçüktü. Sözleşme, Viyana hattının yerinde işaretlenmiş olduğunu da gösteriyor. Bu hattın koordinatı haritada yoktur.",
  kaynak:"IBS No. 81 Denmark–Germany (Copenhagen Frontier Convention, BFSP c.92)" },

{ t:"1905-10-26", devlet:"norvec", devletler:["norvec","isvec"], sinir_id:"d1923-no-se",
  b:"Karlstad sözleşmeleri — İsveç-Norveç birliğinin sonu, Norveç–İsveç sınırı iki bağımsız devletin sınırı oldu", tur:"bolunme", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","norvec","isvec"],
  d:"İsveç ile Norveç, birliğin çözülmesini Karlstad'da imzalanan sözleşmelerle düzenledi ve sınırın iki yanında bir tarafsız bölge kurdu. 1751 Strömstad Antlaşması'nın çizdiği hat değişmedi ve bağımsız iki devletin sınırı oldu; antlaşma bugün de yürürlüktedir. Atlasta Norveç künyesi Haziran 1905'ten başlar; birliğin bittiği o günün tarihi bu kaynaklarda geçmiyor.",
  kaynak:"Store norske leksikon 'riksgrensen' · Karlstad sözleşmesi 26.10.1905 (UNISPAL kopyası, yalnız başlık okundu)" },

{ t:"1917-12-06", devlet:"finlandiya", devletler:["finlandiya","isvec"], sinir_id:"d1923-fi-se",
  b:"Finlandiya bağımsızlığını ilan etti — İsveç ve Norveç ile sınırlar Finlandiya'nın oldu", tur:"kurulus", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","finlandiya","isvec","norvec","sovyet-rusya"],
  d:"Rusya'ya bağlı Finlandiya Büyük Dükalığı bağımsızlığını ilan etti. 1809 Fredrikshamn Barışı ve 1810 sınır sözleşmesiyle Torne–Muonio ırmakları boyunca çizilen İsveç sınırı ile 1751 Strömstad hattına dayanan Norveç sınırının batı kesimi değişmeden yeni devletin sınırı oldu; Finlandiya resmî kayıtları 1809-1917 ve 1918 sonrası dönemleri aynı belgelerle anlatır. Petsamo kesimi ise 1920'ye kadar Rusya'da kaldı. Bağımsızlık ilanının günü okunabilir bir kaynakta doğrulanamadı; gün finlandiya künyesinden devralındı.",
  kaynak:"MML, Suomen–Ruotsin rajankäynti 2006, §2.1-2.2 (1809-1917 / 1918 sonrası) · Store norske leksikon 'riksgrensen' · Tartu Barışı md. 4 (LNTS c.3)" },

{ t:"1918-11-03", devlet:"italya", devletler:["italya","habsburg"], sinir_id:"d1918-it-ch-isgal",
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

{ t:"1920-01-10", devlet:"belcika", devletler:["belcika","almanya"], sinir_id:"d1923-be-de",
  b:"Versay Antlaşması ile Eupen-Malmedy ve Tarafsız Moresnet Belçika'ya geçti", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","belcika","almanya"],
  d:"Versay Antlaşması'nın 32-34. maddeleri 1816'dan beri ortak yönetilen Tarafsız Moresnet'i ve Eupen ile Malmedy bölgelerini Belçika'ya bıraktı. 35. madde yedi üyeli bir komisyonu yeni hattı yerinde belirlemekle görevlendirdi. Komisyon raporunu 6 Kasım 1922'de Aachen'de tamamladı; Raeren–Kalterherberg demiryolu hattı Belçika'ya bırakıldı. Eupen-Malmedy'nin kesin devrine ilişkin Milletler Cemiyeti kararının günü okunabilir bir kaynakta bulunamadı.",
  kaynak:"Versay md. 32-35 (Avalon) · IBS No. 7 Belgium–Germany" },

{ t:"1920-01-01", devlet:"italya", devletler:["italya","avusturya-cumhuriyet"], sinir_id:"d1923-it-at",
  b:"Saint-Germain Antlaşması yürürlüğe girdi — Güney Tirol ve Tarvis İtalya'ya", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","italya","avusturya-cumhuriyet"],
  d:"10 Eylül 1919'da imzalanan Saint-Germain Antlaşması'nın 27(2). maddesi Avusturya–İtalya sınırını Reschen, Brenner ve Karn Alpleri boyunca çizdi; Güney Tirol ile Tarvis İtalya'ya geçti. Büyükelçiler Konferansı 22 Temmuz 1920'de demarkasyon talimatını verdi, işaretleme 1924'te bitti. Metnin 'yerinde belirlenecek' dediği üç alt kesim (Reschen, Drava geçişi, Thörl) 1923'te henüz kesinleşmemişti. Tarih yalnız YIL düzeyindedir: antlaşmanın yürürlük günü okunabilir bir kaynakta bulunamadı.",
  kaynak:"IBS No. 58 (Revised) Austria–Italy (md. 27 alıntısı, 1920 talimatı, 1924 demarkasyonu)" },

{ t:"1920-01-01", devlet:"italya", devletler:["italya","isvicre"], sinir_id:"d1923-it-ch-saintgermain",
  b:"Güney Tirol'le birlikte eski Avusturya–İsviçre sınırının bir kesimi İtalya–İsviçre sınırı oldu", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","italya","isvicre"],
  d:"Saint-Germain Antlaşması'yla Güney Tirol'ün İtalya'ya geçmesi, İtalya–İsviçre sınırını Cima Garibaldi'den Piz Lad'a kadar 53,5 km uzattı. Hat eski Avusturya–İsviçre sınırıydı ve değişmeden devralındı. İki ülke bu kesimi 1920-1927 arasında yeniden işaretledi ve çalışmayı 1927-1928 nota teatisiyle kabul etti. Tarih yalnız YIL düzeyindedir: antlaşmanın yürürlük günü okunabilir bir kaynakta bulunamadı.",
  kaynak:"IBS No. 12 Italy–Switzerland" },

{ t:"1920-07-05", devlet:"danimarka", devletler:["danimarka","almanya"], sinir_id:"d1923-dk-de",
  b:"Kuzey Schleswig Danimarka'ya geçti — yeni Danimarka–Almanya sınırı", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","plebisit","konu-siyasi","danimarka","almanya"],
  d:"Versay Antlaşması'nın 109-114. maddeleri Schleswig'de halk oylaması öngördü. Birinci bölge 10 Şubat 1920'de Danimarka'yı seçti. Başlıca Müttefik Devletler ile Danimarka arasında 5 Temmuz 1920'de Paris'te imzalanan antlaşmayla Kuzey Schleswig Danimarka'ya geçti ve 1864 Viyana Antlaşması'nın Kongeå hattı yerini yeni sınıra bıraktı. Versay'ın 111. maddesiyle kurulan komisyon hattı Temmuz 1920 – Mayıs 1921 arasında 1:5.000 ölçekli 18 paftada işaretledi. Hat o günden beri değişmedi.",
  kaynak:"IBS No. 81 Denmark–Germany (Viyana 1864, halk oylaması, Paris 5 Temmuz 1920, komisyon haritaları)" },

{ t:"1920-11-12", devlet:"italya", devletler:["italya","yugoslavya"], sinir_id:"d1923-it-shs",
  b:"Rapallo Antlaşması — İtalya ile SHS Krallığı arasında Julian Alpleri sınırı ve Fiume Serbest Devleti", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","italya","yugoslavya"],
  d:"İtalya ile Sırp-Hırvat-Sloven Krallığı Rapallo'da doğu sınırlarını belirledi. Hat Peč'ten Julian Alplerinin su bölümüyle Castua'ya indi. Zara İtalya'ya bırakılarak bir anklav oldu; Fiume serbest devlet ilan edildi; hattı yerinde çizmek için karma bir komisyon kuruldu. Bu hattın koordinatı haritada yoktur: 1947 Paris Antlaşması'yla neredeyse tamamı ortadan kalktı. Antlaşmanın yürürlük günü okunabilir bir kaynakta bulunamadı.",
  kaynak:"Rapallo Antlaşması md. 1-5 (LNTS c.18 s.397-403, forost.ungarisches-institut.de kopyası) · İtalya ile Barış Antlaşması 1947 md. 3 (UK TS 1948/50)" },

{ t:"1920-12-31", devlet:"finlandiya", devletler:["finlandiya","norvec"], sinir_id:"d1923-fi-no-petsamo",
  b:"Tartu Barışı yürürlüğe girdi — Petsamo Finlandiya'ya geçti, Norveç'le yeni sınır", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","finlandiya","norvec","sovyet-rusya"],
  d:"14 Ekim 1920'de imzalanan Tartu Barışı'nın 4. maddesi Petsamo'yu Finlandiya'ya bıraktı; bölgenin kuzeybatı sınırı eski Rusya–Norveç sınırı olarak kaldı. Böylece 1826 sözleşmesiyle çizilip 1896'da işaretlenen hat Norveç–Finlandiya sınırı oldu ve Norveç'in Rusya ile ortak kara sınırı sona erdi. Onayların değişim günü kaynaklar arasında çelişkili: League of Nations Treaty Series 31 Aralık 1920 (Moskova), ABD Dışişleri çalışması 14 Şubat 1921 (Helsinki) veriyor.",
  kaynak:"Tartu Barışı md. 4 ve onay tutanağı (LNTS c.3 No. 91) · IBS No. 24 Norway–USSR · IBS No. 74 Finland–USSR (çelişen tarih)" },

{ t:"1922-12-06", devlet:"irlanda-serbest-devlet", devletler:["irlanda-serbest-devlet","ingiltere"], sinir_id:"d1923-ie-gb",
  b:"İrlanda Serbest Devleti kuruldu — Kuzey İrlanda ile sınır uluslararası sınır oldu", tur:"kurulus", onem:5, dunya:4, kapsam:"dis", yer_id:"Dublin",
  etiket:["sinir","antlasma","konu-siyasi","irlanda-serbest-devlet","ingiltere"],
  d:"İngiliz-İrlanda Antlaşması'nı uygulayan 1922 Anayasası, ilanın en geç 6 Aralık 1922'de yapılmasını şart koştu. Sınır, 1920 İrlanda Hükûmeti Yasası'nın Kuzey İrlanda'ya ayırdığı altı kontluğun sınırıydı. Antlaşmanın 12. maddesi sınırın bir komisyonca düzeltilebileceğini öngörüyordu. 1923'te bu komisyon henüz kurulmamıştı; 1925 anlaşması onun yetkisini kaldırıp hattı olduğu gibi sabitledi. İlanın kesin günü kaynakta geçmiyor.",
  kaynak:"Constitution of the Irish Free State Act 1922, md. 83 ve Antlaşma md. 11-12 (irishstatutebook.ie) · Government of Ireland Act 1920 s.1(2) (legislation.gov.uk) · Treaty (Confirmation of Amending Agreement) Act 1925" },

];
