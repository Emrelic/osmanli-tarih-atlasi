// =====================================================================
// İTALYA — DEVLET DEVLET KRONOLOJİ (İTALYA KRONOLOJİ oturumu, 21 Ağustos 2026)
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `index.html`e ve `arac/girdi.py`ye bağlanmadı;
//    bağlamayı OSMANGAZİ (koordinatör) yapar.
//
// ── NİÇİN TEK DOSYA AMA YEDİ DEVLET ──────────────────────────────────
// Emre'nin talimatı birebir: *"Venedik'i yaptık. İtalya deyince diğer
// İtalyan devletlerini de gerekirse İtalya başlığı altında TEKER TEKER
// geçeceksin."* Venedik'in kendi dosyası (`kronoloji_venedik.js`, 86
// madde) zaten var — burada MÜKERRER YAZILMADI. Venedik yalnız başka
// bir İtalyan devletiyle ilişkisi üzerinden (Ceneviz-Venedik savaşları,
// Floransa'yla mukayese) geçti, odak hep öteki devlette.
//
// Her maddede HANGİ siyasî yapının olayı olduğu hem `b:` başlığında hem
// `etiket:` içinde açıkça yazılı — devlet adı etiketin bir parçası
// (`papalik` · `napoli` · `ceneviz` · `milano` · `floransa`/`toskana` ·
// `piyemonte` · `italya-birlik` · `siena` · `ferrara`).
//
// ── ŞEMA — KRONOLOJI-SARTNAME.md §3 ──────────────────────────────────
//   `onem`  1-5  BU MADDENİN DEVLETİ için ağırlık (dosyadan dosyaya değişir)
//   `dunya` 1-5  OLAYIN kendisine ait — HER DOSYADA AYNI olmak zorunda
// 🔴 HİZALAMA — projede zaten var olan değerlerle birebir alındı:
//    1453-05-29 → 5 (CLAUDE.md / Venedik dosyası) · 1571-10-07 → 4 (Venedik) ·
//    1298-09-08 → 2 (Venedik, Curzola) — bu dosyada AYNI değerler kullanıldı.
// ⚠️ İkisi de İYİLİK/KÖTÜLÜK skalası DEĞİL. 1525 Pavia bir Fransız
//    bozgunudur; Milano açısından `onem:5`tir çünkü dükalığın kaderini
//    belirler.
//
// ── NİÇİN BU DEVLETLER BÖYLE SEÇİLDİ ──────────────────────────────────
// Koordinatörün listesi: Papalık · Napoli/İki Sicilya · Ceneviz · Milano
// (Visconti-Sforza) · Floransa→Toskana (Medici) · Savoya→Sardinya→İtalya
// Krallığı · Ferrara/Modena (Este) · Mantova (Gonzaga) · Siena · Lucca ·
// Pisa. ⚠️ ÖLÇÜLDÜ: `data/devletler.js`de Mantova, Lucca, Pisa için AYRI
// bir `id:` YOK (Mantova `mantua` harita-kimliği olarak bir yerde geçiyor
// olabilir ama bu dosyanın ilk turunda ELE ALINMADI — bkz. rapor §⑦).
// Bu turda yazılan yedi devlet: Papalık · Napoli/İki Sicilya · Ceneviz ·
// Milano · Floransa/Toskana · Siena · Ferrara(Este) · Savoya→Piyemonte→
// İtalya Krallığı.
//
// ── `data/devletler.js`teki EMBEDDED KRONOLOJİ İLE İLİŞKİ ────────────
// `devletler.js` her İtalyan devleti için zaten kısa (4-6 maddelik) bir
// `kronoloji:` dizisi taşıyordu ve TARİHLERİ BU DOSYADA DOĞRULAMA TABANI
// olarak kullanıldı (1395-05-11 Milano dükalığı · 1282-03-30 Sicilya
// Akşamı · 1861-03-17 İtalya Krallığı gibi tarihlerin hepsi oradan
// birebir alındı, ayrı ayrı yeniden araştırılmadı). Bu dosya onları
// MÜKERRER ETMEDİ — genişletti, kaynakladı, yer_id ekledi, konu
// dağılımını (§2) zenginleştirdi.
//
// ── KAYNAK (§4) ────────────────────────────────────────────────────
// TDV GÖVDESİ OKUNAN: `napoli` (Otranto/1861 bacağı) · `trablusgarp`.
// TDV CANLI ama GÖVDESİ BU TURDA OKUNMADI: `inebahti` · `sicilya`.
// TDV ÖLÜ (302, doğrulandı bu turda): `otranto` · `roma--sehir` ·
//   `milano` · `floransa`.
// AKADEMİK (İngilizce Wikipedia + bilinen akademik konsensüs — Cambridge
//   History of Italy / Encyclopaedia Britannica tipi eserlerin ANLATTIĞI,
//   bu oturumda TEK TEK o ciltler OKUNMADI): Sicilya Akşamı · Avignon
//   Papalığı · Batı Skizması · Roma'nın Yağmalanması · Cateau-Cambrésis ·
//   Trent Konsili · Marignano · Pavia · Kongre-i Viyana'nın İtalya
//   maddeleri · Bin Seferi'nin tarihleri · İtalya Krallığı'nın ilanı ·
//   Roma'nın alınması · Floransa Katedrali kubbesi · Galileo davası ·
//   Cosimo de' Medici'nin dönüşü · Charles VIII'in Napoli seferi ·
//   III. Bağımsızlık Savaşı · Londra Antlaşması · Roma Yürüyüşü.
// 🟡 Vikipedi bu turda TARİH DOĞRULAMA ARACI olarak kullanıldı (İngilizce
//   Wikipedia, dipnotlu ve akademik konsensüsü yansıtan maddeler) — TEK
//   DAYANAK olarak değil; her fetch'te alıntı gösterildi.
// 🔴 Britannica.com bu oturumda 403 döndürdü (beş ayrı deneme), Treccani
//   sayfaları navigasyon gövdesi döndürdü — ikisi de erişilemedi.
// OKUMADIĞIM ESERE ATIF YAZILMADI. Doğrulanmamış her maddede kaynak
// alanı bunu açıkça söylüyor.
//
// ── ÖLÇÜLEN DURUM (elle yazılmadı, sayılacak — bkz. teslim raporu) ────
//   (rapor mesajında sayıyla verildi)
// =====================================================================

window.KRONOLOJI_ITALYA = [

// ══════════════════════════════════════════════════════════════════
// I. PAPALIK DEVLETİ (Roma) — 756-1870
// ══════════════════════════════════════════════════════════════════

{ t:"1281-01-01", b:"Papalık — atlas açılışında Orta İtalya'daki durum", tur:"kurulus", onem:3, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["papalik","kurulus"],
  d:"Atlas penceresi açıldığında Papalık Devleti, Ravenna'dan Roma çevresine uzanan bir toprak şeridine sahip dünyevi bir hükümdarlıktır (756'da Frank kralı Pepin'in bağışıyla doğmuştu). Ama papaların çoğu bu dönemde Roma soylularının çekişmeleriyle boğuşur ve sık sık Orvieto, Viterbo ya da Perugia'da ikamet eder — kurumun kendi başkentinde güvende olmadığı bir çağdır.",
  kaynak:"bulunamadı — standart akademik konsensüs (13. yy sonu papalığının Roma-dışı ikametleri); bu oturumda birincil metin OKUNMADI" },

{ t:"1294-12-13", b:"Celestine V'in istifası — tarihte ilk gönüllü papalık istifası", tur:"olum", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["papalik","kriz"],
  d:"Sekiz aylık bir papalıktan sonra keşiş Pietro da Morrone (Celestine V), makamın idarî yükünü taşıyamayacağını söyleyip istifa etti — Benedict XVI'nın 2013'teki istifasına kadar tek örnek olarak kaldı. Yerine seçilen VIII. Boniface, halefinin dönüşünü engellemek için onu hapse attırdı; Celestine hapiste öldü.",
  kaynak:"bulunamadı — standart akademik konsensüs; bu oturumda birincil metin OKUNMADI, yıl kesin" },

{ t:"1302-11-18", b:"Unam Sanctam fermanı — papalık üstünlüğünün en sert ifadesi", tur:"din", onem:4, dunya:3, kapsam:"dis", yer_id:"Roma",
  etiket:["papalik","din"],
  d:"VIII. Boniface, Fransa Kralı IV. Philip ile vergi ve yargı yetkisi çekişmesinin ortasında, ruhanî iktidarın dünyevî iktidarın üstünde olduğunu ilan eden fermanı yayımladı. Bu, papalığın siyasî krallara karşı en iddialı beyanıydı — ve bir yıl içinde tam tersi bir tokat yiyecekti.",
  kaynak:"bulunamadı — standart akademik konsensüs; bu oturumda birincil metin OKUNMADI, gün YAYGIN KABUL" },

{ t:"1303-09-07", b:"Anagni Olayı — Fransız ajanlarının papayı tutuklaması", tur:"kriz", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["papalik","kriz","diplomasi"],
  d:"IV. Philip'in adamları Guillaume de Nogaret önderliğinde Anagni'deki papalık sarayını bastı, VIII. Boniface'i üç gün tutsak tuttu. Papa kısa süre sonra öldü; olay, ortaçağ papalığının Fransa krallığı karşısındaki gücünün sonunu simgeler ve altı yıl içinde papalığın Avignon'a taşınmasının zeminini hazırlar.",
  kaynak:"bulunamadı — standart akademik konsensüs; bu oturumda birincil metin OKUNMADI, gün YAYGIN KABUL" },

{ t:"1309-03-09", b:"Avignon Papalığı'nın başlaması", tur:"kurulus", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["papalik","kriz"],
  d:"V. Clement, papalık dairesini Roma'dan Fransa'nın güneyindeki Avignon'a taşıdı; papalar burada yaklaşık yetmiş yıl (\"Babil sürgünü\" olarak anılan dönem) Fransız krallarının etkisi altında yaşadı. Roma'nın dinî ve siyasî ağırlığı bu süre boyunca ciddi biçimde zayıfladı.",
  kaynak:"İngilizce Wikipedia, 'Avignon Papacy': \"Clement refused to move to Rome, and in 1309 he moved his court to the papal enclave at Avignon\" · \"curia moved to Avignon, 9 March 1309\" — bu oturumda WebFetch ile doğrulandı; TEK DAYANAK Wikipedia değil, olgu standart akademik konsensüsün parçası" },

{ t:"1348-01-01", b:"Kara Ölüm Avignon'u vurur", tur:"salgin", onem:3, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["papalik","kriz"],
  d:"Veba Avignon'daki papalık sarayına ulaştı; Papa VI. Clement, salgının Yahudilere atfedilmesini kınayan ve onları koruyan bir ferman yayımladı — dönemin yaygın komplo teorisine karşı nadir bir resmî tavırdır. Şehir nüfusunun büyük bölümü öldü.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1377-01-17", b:"Papalığın Roma'ya dönüşü", tur:"kurulus", onem:4, dunya:3, kapsam:"dis", yer_id:"Roma",
  etiket:["papalik","diplomasi"],
  d:"XI. Gregory, büyük ölçüde Sienalı mistik Catherine'in ısrarlı çağrılarıyla papalık dairesini Avignon'dan Roma'ya geri taşıdı. Dönüş, papalığın Fransız vesayetinden çıkma girişimiydi — ama bir yıl sonra Batı Skizması patlak verecek ve papalık bu kez ikiye bölünecekti.",
  kaynak:"bulunamadı — gün YAYGIN KABUL, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1378-04-08", b:"VI. Urban'ın seçilmesi — Batı Skizması'nın fitili", tur:"kriz", onem:5, dunya:4, kapsam:"dis", yer_id:"Roma",
  etiket:["papalik","kriz"],
  d:"Roma halkının baskısı altında toplanan konklav, İtalyan Bartolomeo Prignano'yu VI. Urban adıyla papa seçti. Fransız kardinaller seçimin baskı altında yapıldığını ileri sürüp beş ay sonra Cenevreli Robert'i rakip papa (VII. Clement) ilan edecek, Katolik dünyası kırk yıl sürecek bir bölünmeye girecekti.",
  kaynak:"İngilizce Wikipedia, 'Western Schism': \"On 8 April 1378, the cardinals elected Bartolomeo Prignano, the Archbishop of Bari, as Pope Urban VI\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1378-09-20", b:"Rakip papa VII. Clement'in seçilmesi — skizma resmileşir", tur:"bolunme", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["papalik","kriz"],
  d:"Fondi'de toplanan on üç kardinal, VI. Urban'ın seçimini geçersiz ilan edip Cenevreli Robert'i VII. Clement adıyla papa seçti; Clement kısa süre sonra Avignon'a yerleşti. Katolik Avrupa artık iki papaya bölünmüştü — İngiltere ve Kutsal Roma-Cermen İmparatorluğu Roma'yı, Fransa ve müttefikleri Avignon'u tanıyordu.",
  kaynak:"İngilizce Wikipedia, 'Western Schism': \"Meeting at Fondi, thirteen cardinals elected Count Robert of Geneva as Pope Clement VII on 20 September 1378\"; skizmanın süresi \"from 20 September 1378 to 11 November 1417\" olarak veriliyor — bu oturumda WebFetch ile doğrulandı" },

{ t:"1417-11-11", b:"Martin V'in seçilmesi — Batı Skizması'nın sona ermesi", tur:"kurulus", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["papalik","diplomasi"],
  d:"Konstanz Konsili, üç rakip papa iddiasını da geçersiz kılıp Oddone Colonna'yı Martin V adıyla tek papa seçti. Otuz dokuz yıllık bölünme sona erdi; Martin V birkaç yıl içinde papalık dairesini kesin olarak Roma'ya taşıyacaktı.",
  kaynak:"İngilizce Wikipedia, 'Western Schism': skizmanın bitiş tarihi \"11 November 1417\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1447-03-06", b:"V. Nicholas'ın seçilmesi — Rönesans papalığının başlangıcı", tur:"kultur", onem:4, dunya:3, kapsam:"ic", yer_id:"Roma",
  etiket:["papalik","kultur","bilim"],
  d:"Hümanist bir akademisyen olan Tommaso Parentucelli, papa seçilince Vatikan Kütüphanesi'nin çekirdeğini oluşturacak elyazması koleksiyonunu toplamaya başladı ve Roma'yı yeniden bir sanat-bilim merkezi olarak imar etti. Bu tarihten sonraki papalar, kilisenin siyasî otoritesi kadar Rönesans kültürünün de hamileri olacaktı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1492-08-11", b:"VI. Alexander'ın (Borgia) papa seçilmesi", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic", yer_id:"Roma",
  etiket:["papalik","hanedan"],
  d:"İspanyol kökenli Rodrigo Borgia'nın papalığı, kilisenin dünyevî iktidar kaygılarının hanedan çıkarlarıyla ne kadar iç içe geçebildiğinin en tartışmalı örneği oldu; oğlu Cesare Borgia'nın İtalya'da yürüttüğü fetih siyaseti, Machiavelli'nin \"Prens\"ine doğrudan ilham verecekti.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1503-11-01", b:"II. Julius'un papa seçilmesi — 'Savaşçı Papa'", tur:"hukumdar", onem:4, dunya:2, kapsam:"dis", yer_id:"Roma",
  etiket:["papalik","askeri"],
  d:"Giuliano della Rovere, bizzat zırh kuşanıp ordu sevk ederek Papalık Devleti'nin topraklarını genişletti; aynı zamanda Michelangelo ve Bramante'yi Vatikan'a çağırıp Rönesans sanatının en büyük himaye dönemini başlattı.",
  kaynak:"bulunamadı — gün YAKLAŞIK (1 Kasım geleneksel tarih), standart akademik konsensüs" },

{ t:"1506-04-18", b:"Yeni Aziz Petrus Bazilikası'nın temelinin atılması", tur:"mimari", onem:3, dunya:3, kapsam:"ic", yer_id:"Roma",
  etiket:["papalik","mimari","sanat"],
  d:"II. Julius, Konstantin döneminden kalma eski bazilikayı yıktırıp yerine Bramante'nin tasarladığı devasa yeni yapının temelini attı. İnşaat yüz yirmi yıl sürecek, Michelangelo'nun kubbesiyle Hristiyanlığın en büyük mimari simgelerinden biri olacaktı — ve endülüjans satışlarıyla finansmanı, birkaç yıl sonra Luther'in tepkisini tetikleyen unsurlardan biri olacaktı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1512-10-31", b:"Sistine Şapeli tavan freskinin açılışı", tur:"sanat", onem:4, dunya:3, kapsam:"ic", yer_id:"Roma",
  etiket:["papalik","sanat","kultur"],
  d:"Michelangelo dört yıllık çalışmanın ardından şapel tavanındaki fresk döngüsünü tamamladı; Yaratılış sahneleri, Batı sanat tarihinin en çok tanınan imgeleri arasına girdi. Papa II. Julius eseri Azizler Yortusu arifesinde açtırdı.",
  kaynak:"bulunamadı — gün YAYGIN KABUL, standart akademik konsensüs" },

{ t:"1521-01-03", b:"Luther'in aforoz edilmesi (Decet Romanum Pontificem)", tur:"din", onem:4, dunya:5, kapsam:"dis", yer_id:"Roma",
  etiket:["papalik","din","reform"],
  d:"X. Leo, tezlerinden vazgeçmeyen Martin Luther'i kilise topluluğundan resmen dışladı. Kararın pratik sonucu sınırlıydı — Luther Almanya'da güçlü prenslerin korumasındaydı — ama sembolik olarak Katolik Avrupa'nın dinî birliğinin artık geri döndürülemez biçimde çatladığının ilanıydı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs (ferman tarihi olarak yaygın kabul)" },

{ t:"1527-05-06", b:"Roma'nın Yağmalanması", tur:"kriz", onem:5, dunya:4, kapsam:"dis", yer_id:"Roma",
  etiket:["papalik","askeri","kriz"],
  d:"İmparator V. Karl'ın maaşı ödenmemiş İspanyol-Alman paralı askerleri Roma'ya girip şehri günlerce yağmaladı, binlerce kişiyi öldürdü; Papa VII. Clement Castel Sant'Angelo'ya sığınmak zorunda kaldı. Olay, Rönesans Roma'sının ihtişamının fiilen sona erdiği tarih olarak anılır ve papalığın İtalyan Savaşları'ndaki bağımsız siyasetinin sonunu getirdi.",
  kaynak:"İngilizce Wikipedia, 'Sack of Rome (1527)': \"the capture of Rome on 6 May 1527 by the mutinous troops of Charles V, Holy Roman Emperor\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1545-12-13", b:"Trent Konsili'nin açılması", tur:"din", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["papalik","din","reform"],
  d:"Katolik kilisesi, Reform karşısındaki doktriner ve kurumsal cevabını on sekiz yıl sürecek bu konsille şekillendirmeye başladı — Kutsal Kitap'ın yorum tekeli, ayin biçimi, ruhban eğitimi ve endülüjans uygulamaları burada yeniden tanımlandı. Konsil, Katolik Avrupa'nın sonraki üç yüzyıllık dinî çerçevesini kurdu.",
  kaynak:"İngilizce Wikipedia, 'Council of Trent': \"The Council met for twenty-five sessions between 13 December 1545 and 4 December 1563\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1563-12-04", b:"Trent Konsili'nin kapanması", tur:"din", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["papalik","din","reform"],
  d:"Konsilin son oturumu Papa IV. Pius döneminde tamamlandı; kararları sonraki papalarca resmî kilise doktrini olarak onaylandı ve Karşı-Reform'un temel metni hâline geldi.",
  kaynak:"İngilizce Wikipedia, 'Council of Trent': \"continued until its final adjournment on 4 December 1563\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1600-02-17", b:"Giordano Bruno'nun yakılması", tur:"din", onem:3, dunya:3, kapsam:"ic", yer_id:"Roma",
  etiket:["papalik","din","bilim"],
  d:"Filozof ve eski Dominiken keşişi Bruno, evrenin sonsuz ve çok sayıda güneş sistemi barındırdığı görüşü dâhil bir dizi sapkınlık suçlamasıyla Roma Engizisyonu'nca Campo de' Fiori'de diri diri yakıldı. Vaka, kilisenin bilimsel-kozmolojik spekülasyona tahammülünün sınırlarının en sert örneği olarak anılır.",
  kaynak:"bulunamadı — gün YAYGIN KABUL, bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1633-06-22", b:"Galileo Galilei'nin Roma Engizisyonu'nca mahkûm edilmesi", tur:"bilim", onem:4, dunya:4, kapsam:"ic", yer_id:"Roma",
  etiket:["papalik","bilim","din"],
  d:"Galileo, Güneş merkezli evren modelini savunduğu için \"şiddetle sapkınlıktan şüpheli\" bulundu, görüşlerinden vazgeçmeye ve ev hapsinde yaşamaya mahkûm edildi. Dava, kilisenin bilimsel otoriteyle ilişkisinin en çok anılan kırılma noktası oldu ve üç yüz elli yıl sonra (1992) Vatikan resmen özür diledi.",
  kaynak:"İngilizce Wikipedia, 'Galileo affair': \"the sentence of the Inquisition, issued on 22 June 1633\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1798-02-15", b:"Roma Cumhuriyeti'nin ilanı — Papa VI. Pius'un sürgünü", tur:"isgal", onem:5, dunya:3, kapsam:"dis", yer_id:"Roma",
  etiket:["papalik","kriz","isgal"],
  d:"Fransız Devrim orduları Roma'ya girip Papalık Devleti'ni ilga edip Roma Cumhuriyeti'ni ilan etti; Papa VI. Pius Fransa'ya sürgüne gönderildi ve orada öldü. Papalığın dünyevî iktidarı ilk kez bu kadar doğrudan bir işgalle askıya alındı.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1809-05-17", b:"Napolyon'un Papalık topraklarını ilhak etmesi", tur:"isgal", onem:5, dunya:3, kapsam:"dis", yer_id:"Roma",
  etiket:["papalik","isgal","kriz"],
  d:"Napolyon, Papa VII. Pius'u aforoz etmesi üzerine Fransız kuvvetlerine papayı tutuklatıp 1814'e kadar hapsetti; Papalık toprakları doğrudan Fransız İmparatorluğu'na katıldı. Bu, papalığın kurumsal tarihindeki en uzun süreli tutsaklık dönemidir.",
  kaynak:"data/devletler.js `papalik` embedded kronoloji: \"TDV kapsamıyor — akademik kaynak: Ambrogio Caiani, 'To Kidnap a Pope', Yale UP 2021\" (bu dosyanın tarihi oradan alındı, ayrıca doğrulanmadı)" },

{ t:"1814-05-24", b:"Papalık Devleti'nin restorasyonu", tur:"kurulus", onem:4, dunya:2, kapsam:"dis", yer_id:"Roma",
  etiket:["papalik","diplomasi"],
  d:"Napolyon'un düşüşünün ardından Papa VII. Pius Roma'ya döndü ve Viyana Kongresi Papalık Devleti'ni büyük ölçüde eski sınırlarıyla yeniden kurdu.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1848-11-24", b:"Papa IX. Pius'un Roma'dan Gaeta'ya kaçışı", tur:"kriz", onem:4, dunya:3, kapsam:"ic", yer_id:"Roma",
  etiket:["papalik","kriz","isyan"],
  d:"1848 devrimleri Roma'ya sıçrayınca ve başbakanı Pellegrino Rossi suikaste kurban gidince Papa, kılık değiştirip Napoli Krallığı topraklarındaki Gaeta'ya kaçtı. Kısa süre sonra Roma'da cumhuriyet ilan edilecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1849-02-09", b:"Roma Cumhuriyeti'nin ilanı (Mazzini)", tur:"kurulus", onem:4, dunya:3, kapsam:"ic", yer_id:"Roma",
  etiket:["papalik","milliyetcilik","isyan"],
  d:"Giuseppe Mazzini önderliğinde, Papa'nın yokluğunda demokratik bir cumhuriyet ilan edildi; Giuseppe Garibaldi şehrin savunmasını üstlendi. Kısa ömürlü cumhuriyet, İtalyan milliyetçi hareketinin ilk somut devlet deneyimlerinden biri oldu.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1849-07-03", b:"Fransız müdahalesiyle Roma Cumhuriyeti'nin sonu", tur:"son", onem:4, dunya:3, kapsam:"dis", yer_id:"Roma",
  etiket:["papalik","askeri"],
  d:"Fransa Cumhurbaşkanı Louis-Napolyon Bonapart'ın gönderdiği kuvvetler, Katolik oy tabanını gözeterek Roma Cumhuriyeti'ni bastırdı ve Papa'nın dönüşünü sağladı; Fransız garnizonu 1870'e kadar Roma'da kalıp Papalık Devleti'nin fiilî güvencesi oldu.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1870-07-18", b:"Papalık Yanılmazlığı dogmasının ilanı", tur:"din", onem:4, dunya:3, kapsam:"ic", yer_id:"Roma",
  etiket:["papalik","din"],
  d:"I. Vatikan Konsili, papanın resmî sıfatla (ex cathedra) inanç ve ahlâk konularında yanılmaz olduğunu dogma hâline getirdi — tam da İtalyan birlik kuvvetlerinin Roma kapılarına dayandığı haftalarda. Konsil, Fransız-Prusya Savaşı'nın patlak vermesiyle yarıda kesildi.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1870-09-20", b:"Roma'nın işgali — Papalık Devleti'nin dünyevî iktidarının sonu", tur:"son", onem:5, dunya:5, kapsam:"dis", yer_id:"Roma",
  etiket:["papalik","isgal","milliyetcilik"],
  d:"Fransa'nın Sedan'da yenilip Roma garnizonunu çekmesinden bir ay sonra İtalyan Krallığı orduları Porta Pia'dan gedik açıp şehre girdi; Papa IX. Pius direnmeyip kendini \"Vatikan mahpusu\" ilan etti. On bir yüzyıllık Papalık Devleti'nin dünyevî hükümranlığı sona erdi ve İtalyan birleşmesi fiilen tamamlandı — Roma sorunu ancak 1929 Laterano Antlaşmaları'yla çözülecekti.",
  kaynak:"İngilizce Wikipedia, 'Capture of Rome': \"At 5 a.m. on 20 September, Italian artillery began firing at the city walls\" — bu oturumda WebFetch ile doğrulandı; tarih data/devletler.js `papalik` (t:) ve `italya` embedded kronolojisiyle birebir uyumlu" },

{ t:"1871-05-13", b:"Garanti Kanunu — Papa'nın statüsünün tek taraflı düzenlenmesi", tur:"kanun", onem:3, dunya:2, kapsam:"ic", yer_id:"Roma",
  etiket:["papalik","idari"],
  d:"İtalyan parlamentosu, Papa'ya kişisel dokunulmazlık ve Vatikan'ı yönetme hakkı tanıyan ama egemenlik iddiasını tanımayan bir kanun çıkardı. Papalık kanunu tek taraflı ve dayatma sayıp reddetti; anlaşmazlık altmış yıl sürecekti.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

// ══════════════════════════════════════════════════════════════════
// II. NAPOLİ KRALLIĞI / İKİ SİCİLYA (Napoli · Palermo · Messina · Otranto)
// ══════════════════════════════════════════════════════════════════

{ t:"1282-03-30", b:"Sicilya Akşamı — eski Sicilya Krallığı'nın ikiye bölünmesi", tur:"isyan", onem:5, dunya:5, kapsam:"dis", yer_id:"Palermo",
  etiket:["napoli","isyan","toprak-kayip"],
  d:"Palermo'da akşam ayini çanları çalarken patlak veren halk ayaklanması, adadaki Fransız Anjou garnizonunu birkaç hafta içinde katletti; Sicilyalılar tacı Aragon Kralı III. Peter'e teklif etti. İsyan, eski Sicilya Krallığı'nı kalıcı biçimde ikiye böldü: ada Aragon hanedanına geçti, Napoli merkezli anakara Anjou hanedanında kaldı — Akdeniz güç dengesini Aragon lehine değiştiren epokal bir kırılmadır.",
  kaynak:"İngilizce Wikipedia, 'Sicilian Vespers': \"an insurrection which began at the start of Vespers... on Easter Monday, 30 March 1282, at the Church of the Holy Spirit just outside Palermo\" — bu oturumda WebFetch ile doğrulandı; tarih data/devletler.js `napoli` embedded kronolojisiyle birebir uyumlu" },

{ t:"1282-08-30", b:"III. Peter'ın Sicilya'ya çıkıp taç giymesi", tur:"hukumdar", onem:4, dunya:3, kapsam:"dis", yer_id:"Palermo",
  etiket:["napoli","hanedan"],
  d:"Aragon Kralı III. Peter, Sicilyalıların çağrısı üzerine adaya çıkıp Palermo'da kral ilan edildi; bu, İber yarımadasındaki bir hanedanın İtalya'da kalıcı bir taç kazandığı ilk büyük örnektir ve iki yüzyıl sürecek Aragon-İspanyol İtalya siyasetinin başlangıcıdır.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1302-08-31", b:"Caltabellotta Antlaşması — bölünmenin resmileşmesi", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["napoli","antlasma","toprak-kayip"],
  d:"Yirmi yıllık savaşın ardından imzalanan antlaşma, Sicilya Akşamı'nın fiilî bölünmesini hukuken tescil etti: ada (\"Trinacria Krallığı\") Aragon hanedanına, anakaradaki Napoli Krallığı Anjou hanedanına bırakıldı. İki ayrı Sicilya tacı fikri buradan doğdu ve bir buçuk asır sonra Alfonso V'in birleştirmesine kadar sürdü.",
  kaynak:"bulunamadı — gün YAYGIN KABUL, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1442-06-02", b:"Alfonso V'in Napoli'yi fethedip iki tacı birleştirmesi", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis", yer_id:"Napoli",
  etiket:["napoli","hanedan","toprak-kazanc"],
  d:"Aragon Kralı Alfonso V, uzun bir kuşatmanın ardından Napoli'yi ele geçirip Anjou hanedanına son verdi; Sicilya Akşamı'ndan bir buçuk asır sonra ada ve anakara ilk kez tek bir hükümdarın elinde birleşti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1458-06-27", b:"Alfonso'nun ölümü — Napoli ile Aragon'un yeniden ayrılması", tur:"bolunme", onem:4, dunya:2, kapsam:"ic", yer_id:"Napoli",
  etiket:["napoli","hanedan"],
  d:"Alfonso'nun ölümüyle Aragon tacı kardeşine, Napoli ise gayrimeşru oğlu Ferrante'ye kaldı; birleşme kısa ömürlü oldu ve iki taç tekrar ayrıldı — ancak 1504'te İspanyol tacı altında kalıcı olarak birleşecekti.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1480-08-11", b:"Otranto'nun Osmanlı çıkarmasıyla işgali", tur:"isgal", onem:5, dunya:4, kapsam:"dis", yer_id:"Otranto",
  etiket:["napoli","isgal","askeri"],
  d:"Gedik Ahmed Paşa komutasındaki Osmanlı donanması Otranto'ya çıkarma yaptı, şehri kısa süreli bir katliamın ardından ele geçirdi — Osmanlı kuvvetlerinin İtalyan anakarasına ayak bastığı tek örnektir. İşgal, Napoli Krallığı'nı ve Papalık'ı derin bir paniğe sürükledi; II. Mehmed'in ölümü (1481) üzerine Osmanlı garnizonu geri çekildi.",
  kaynak:"data/devletler.js `napoli` embedded kronoloji (TDV `napoli` maddesinden alınmış): \"Otranto, Osmanlı çıkarmasıyla kısa süreliğine işgal edildi (1481'de geri alındı)\"" },

{ t:"1481-09-10", b:"Otranto'nun geri alınması", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"Otranto",
  etiket:["napoli","askeri","toprak-kazanc"],
  d:"II. Mehmed'in ölümünün ardından Osmanlı garnizonu tahliye olunca, Napoli Kralı I. Ferrante'nin oğlu Calabria Dükü Alfonso komutasındaki kuvvetler şehri geri aldı; bir yıllık işgal İtalya'nın hafızasında derin iz bıraktı.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; data/devletler.js embedded notundaki \"1481'de geri alındı\" ile uyumlu, gün ayrıca doğrulanmadı" },

{ t:"1495-02-22", b:"Charles VIII'in Napoli'ye girmesi — İtalyan Savaşları'nın açılışı", tur:"isgal", onem:5, dunya:5, kapsam:"dis", yer_id:"Napoli",
  etiket:["napoli","isgal","askeri"],
  d:"Fransa Kralı VIII. Charles, Napoli tahtı üzerindeki Anjou iddiasını öne sürerek İtalya'yı boydan boya geçip Napoli'ye girdi ve kendini kral ilan etti. Girişi kısa sürdü — bir İtalyan Ligi bir yıl içinde onu geri çekilmeye zorladı — ama olay, altmış beş yıl sürecek İtalyan Savaşları'nı başlattı ve İtalya'yı Fransız-İspanyol-Habsburg rekabetinin savaş alanına çevirdi.",
  kaynak:"İngilizce Wikipedia, 'Italian Wars': \"In September Charles invaded the peninsula\"; \"In February 1495, the French reached Monte San Giovanni Campano in the Kingdom of Naples\" — bu oturumda WebFetch ile doğrulandı, giriş günü (22 Şubat) YAYGIN KABUL edilen tarih olup bu oturumda ikinci kaynakla teyit edilmedi" },

{ t:"1495-07-06", b:"Fornovo Savaşı — İtalyan Ligi'nin Fransızları geri püskürtmesi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["napoli","askeri"],
  d:"Venedik, Milano, Papalık, İspanya ve İmparator'un oluşturduğu İtalyan Ligi, Napoli'den çekilen Fransız ordusunu Fornovo'da karşıladı; savaş taktik olarak berabere bitse de Fransızların İtalya'dan çıkışını hızlandırdı.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1503-12-29", b:"Garigliano Savaşı — İspanya'nın Napoli'yi kesin ele geçirmesi", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["napoli","askeri","toprak-kayip"],
  d:"İspanyol komutan Gonzalo Fernández de Córdoba, Fransız kuvvetlerini Garigliano nehri kıyısında kesin biçimde yenerek Napoli üzerindeki Fransız iddiasına son verdi. Krallık bundan sonra iki yüzyıl boyunca İspanyol tacına bağlı bir vicekrallık olarak yönetilecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1504-01-01", b:"Napoli'nin İspanyol vicekrallığına dönüşmesi", tur:"idari", onem:4, dunya:3, kapsam:"ic", yer_id:"Napoli",
  etiket:["napoli","idari"],
  d:"Aragon Kralı II. Ferdinand, Napoli'yi doğrudan İspanyol tacına bağlı bir vicekrallık statüsüne aldı; kendi kralı olan bağımsız Napoli dönemi burada sona erdi ve iki asır sürecek İspanyol valilikleri dönemi başladı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1647-07-07", b:"Masaniello İsyanı — Napoli'de halk ayaklanması", tur:"isyan", onem:4, dunya:2, kapsam:"ic", yer_id:"Napoli",
  etiket:["napoli","isyan","sosyal"],
  d:"Balık satıcısı Tommaso Aniello (Masaniello), ağırlaşan meyve vergisine karşı Napoli halkını ayaklandırıp birkaç gün için şehrin fiilî yöneticisi oldu. İsyan bastırıldı ama İspanyol yönetiminin vergi siyasetine karşı biriken öfkenin gücünü gösterdi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1656-01-01", b:"Napoli vebası", tur:"salgin", onem:3, dunya:2, kapsam:"ic", yer_id:"Napoli",
  etiket:["napoli","kriz"],
  d:"Avrupa'nın en kalabalık şehirlerinden biri olan Napoli'de patlak veren veba salgını, nüfusun önemli bir bölümünü yok etti; şehrin demografik ve iktisadî ağırlığı yüzyıl sonuna kadar toparlanamadı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1713-04-11", b:"Utrecht Antlaşması — Napoli'nin Avusturya'ya geçmesi", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["napoli","antlasma","toprak-kayip"],
  d:"İspanyol Veraset Savaşı'nı sonlandıran antlaşmalar zinciri, Napoli Krallığı'nı İspanyol Habsburglarından Avusturya Habsburglarına devretti; İspanyol vicekrallığı dönemi burada sona erdi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1734-05-25", b:"Bitonto Muharebesi — Bourbon Napoli Krallığı'nın kuruluşu", tur:"kurulus", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["napoli","askeri","hanedan"],
  d:"İspanyol Bourbon prensi Carlos, Bitonto'da Avusturya kuvvetlerini yenip Napoli'yi ele geçirdi; krallık böylece bir asır aradan sonra yeniden bağımsız bir taç olarak kuruldu ve Bourbon hanedanının Güney İtalya'daki iki asırlık hâkimiyeti başladı.",
  kaynak:"data/devletler.js `napoli` embedded kronoloji: \"İspanyol Bourbon prensi Carlos, Bitonto Muharebesi'nde Avusturya kuvvetlerini yenip Napoli'yi ele geçirdi; bağımsız Bourbon krallığı olarak yeniden kuruldu\"" },

{ t:"1735-07-03", b:"Carlos'un Napoli ve Sicilya kralı olarak taç giymesi", tur:"hukumdar", onem:3, dunya:2, kapsam:"ic", yer_id:"Palermo",
  etiket:["napoli","hanedan"],
  d:"Carlos, Bitonto zaferinin ardından Palermo Katedrali'nde resmen Napoli ve Sicilya kralı ilan edildi; bu, Bourbon hanedanının İtalya'daki uzun saltanatının başlangıç töreniydi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1799-01-23", b:"Parthenopean Cumhuriyeti'nin ilanı", tur:"kurulus", onem:4, dunya:2, kapsam:"ic", yer_id:"Napoli",
  etiket:["napoli","milliyetcilik","kriz"],
  d:"Fransız Devrim orduları Napoli'ye girince Bourbon kralı Sicilya'ya kaçtı, yerel cumhuriyetçiler Fransız desteğiyle kısa ömürlü Parthenopean Cumhuriyeti'ni ilan etti. Cumhuriyet beş ay bile sürmedi ama İtalyan siyasî tarihinde ilk cumhuriyetçi deneylerden biri olarak anıldı.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1799-06-13", b:"Kardinal Ruffo'nun Napoli'yi geri alması", tur:"son", onem:4, dunya:2, kapsam:"ic", yer_id:"Napoli",
  etiket:["napoli","askeri","din"],
  d:"Kardinal Fabrizio Ruffo'nun topladığı köylü milisi (Sanfedisti — \"kutsal iman ordusu\"), Parthenopean Cumhuriyeti'ni bastırıp Bourbon hanedanının dönüşünü sağladı; cumhuriyetçilere yönelik kanlı bir infaz dalgası izledi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1806-03-30", b:"Napolyon'un Napoli'yi işgal etmesi", tur:"isgal", onem:4, dunya:3, kapsam:"dis", yer_id:"Napoli",
  etiket:["napoli","isgal","hanedan"],
  d:"Napolyon'un ordusu krallığı işgal edince Bourbon hanedanı Sicilya'ya sürüldü; Napolyon önce ağabeyi Joseph Bonaparte'ı, sonra kız kardeşinin kocası Joachim Murat'ı Napoli tahtına oturttu. Krallık böylece bir Fransız vasal devletine dönüştü.",
  kaynak:"data/devletler.js `napoli` embedded kronoloji: \"Napolyon'un ordusu krallığı işgal etti, Bourbon hanedanını Sicilya'ya sürüp ağabeyi Joseph Bonaparte'ı (sonra Joachim Murat'ı) tahta oturttu\"" },

{ t:"1815-05-20", b:"Joachim Murat'ın yenilgisi — Napolyoncu Napoli'nin sonu", tur:"son", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["napoli","askeri"],
  d:"Napolyon'un Elba'dan dönüşüyle cesaretlenen Murat, İtalya'yı birleştirme umuduyla Avusturya'ya savaş açtı ama yenildi; Napolyoncu Napoli Krallığı sona erdi ve Bourbon hanedanı tahta döndü. Murat birkaç ay sonra geri dönüş girişiminde yakalanıp idam edildi.",
  kaynak:"data/devletler.js `napoli` embedded kronoloji: \"Napolyoncu kral Joachim Murat, Avusturya'ya karşı savaşı kaybetti; Napolyoncu Napoli Krallığı sona erdi, Bourbon hanedanı tahta döndü\"" },

{ t:"1816-12-08", b:"İki Sicilya Krallığı'nın resmen kurulması", tur:"kurulus", onem:4, dunya:2, kapsam:"ic", yer_id:"Napoli",
  etiket:["napoli","idari"],
  d:"Bourbon Kralı I. Ferdinand, Napoli ve Sicilya taçlarını tek bir hukukî varlık olan \"İki Sicilya Krallığı\"nda birleştirdi; iki ayrı kurumsal miras (biri anakara, biri ada) böylece resmen tek devlete dönüştü.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1820-07-02", b:"Carbonari İsyanı — anayasa talebiyle ayaklanma", tur:"isyan", onem:4, dunya:2, kapsam:"ic", yer_id:"Napoli",
  etiket:["napoli","isyan","anayasa"],
  d:"Gizli Carbonari örgütünün öncülüğünde subaylar ayaklanıp Kral I. Ferdinand'a İspanyol tipi bir anayasa kabul ettirdi; İtalyan milliyetçi-anayasacı hareketinin ilk büyük gövde gösterisiydi ve kısa sürecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1821-03-07", b:"Avusturya müdahalesiyle anayasanın iptali", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["napoli","askeri","anayasa"],
  d:"Kutsal İttifak adına harekete geçen Avusturya orduları, Rieti-Antrodoco'da anayasacı kuvvetleri yenip anayasayı iptal ettirdi; Metternich sisteminin İtalya'daki liberal hareketleri bastırma kararlılığının ilk somut örneğiydi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1860-05-11", b:"Garibaldi'nin Bin'i Marsala'ya çıkar", tur:"isgal", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["napoli","milliyetcilik","askeri"],
  d:"Giuseppe Garibaldi, Cenova'dan yola çıkan yaklaşık bin gönüllü kızıl gömlekliyle Sicilya'nın batı kıyısındaki Marsala'ya çıkarma yaptı; bu küçük sefer, İki Sicilya Krallığı'nı birkaç ay içinde çökertip İtalyan birleşmesini geri döndürülemez hâle getirecekti — Risorgimento'nun en simgesel askeri harekâtıdır. (Marsala yerleşim veri tabanında kayıtlı değil.)",
  kaynak:"İngilizce Wikipedia, 'Expedition of the Thousand': \"the Thousand steamers arrived in the early hours of the afternoon of 11 May 1860\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1860-05-15", b:"Calatafimi Savaşı — Bin'in ilk zaferi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["napoli","askeri","milliyetcilik"],
  d:"Sayıca çok üstün Bourbon kuvvetlerine karşı Garibaldi'nin gönüllüleri Calatafimi'de ilk zaferini kazandı; \"Burada ya İtalya'yı yaratırız ya ölürüz\" sözü bu savaşa atfedilir ve sefer boyunca moral kaynağı oldu.",
  kaynak:"İngilizce Wikipedia, 'Expedition of the Thousand': \"The Thousand... had their first clash on 15 May 1860 in the battle of Calatafimi\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1860-05-27", b:"Palermo ayaklanması ve Garibaldi'nin şehre girmesi", tur:"isgal", onem:4, dunya:4, kapsam:"dis", yer_id:"Palermo",
  etiket:["napoli","askeri","milliyetcilik"],
  d:"Garibaldi'nin kuvvetleri, şehir içindeki halk ayaklanmasıyla eşzamanlı olarak Palermo'ya girdi; birkaç günlük sokak çatışmasının ardından Bourbon garnizonu şehri terk etmek zorunda kaldı — Sicilya'nın fiilî ele geçirilişiydi.",
  kaynak:"bulunamadı — gün YAYGIN KABUL (isyanın başlangıcı), standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1860-07-20", b:"Milazzo Savaşı — Sicilya'nın son Bourbon direnişinin kırılması", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["napoli","askeri"],
  d:"Messina yakınındaki Milazzo'da Garibaldi'nin kuvvetleri son büyük Bourbon direnişini de kırdı; Sicilya'nın tamamı birkaç hafta içinde Garibaldi'nin kontrolüne geçti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1860-09-07", b:"Garibaldi'nin Napoli'ye girmesi", tur:"isgal", onem:4, dunya:5, kapsam:"dis", yer_id:"Napoli",
  etiket:["napoli","milliyetcilik","askeri"],
  d:"Bourbon Kralı II. Francesco şehri savunmadan terk edince Garibaldi trenle Napoli'ye girdi; halk onu kurtarıcı olarak karşıladı. Krallığın başkenti bir tek kurşun atılmadan düşmüştü — Risorgimento'nun en simgesel anlarından biri.",
  kaynak:"bulunamadı — gün YAYGIN KABUL (7 Eylül), standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1860-10-01", b:"Volturno Savaşı — Bourbon karşı taarruzunun kırılması", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["napoli","askeri"],
  d:"II. Francesco'nun Gaeta'ya çekilen ordusu, kaybettiği toprakları geri almak için Volturno nehri hattında büyük bir karşı taarruz başlattı; Garibaldi'nin gönüllüleri saldırıyı püskürttü. Bu, İki Sicilya'nın bağımsızlığını askerî olarak geri kazanma umudunun fiilen sona erdiği savaştır.",
  kaynak:"bulunamadı — gün YAYGIN KABUL, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1860-10-21", b:"Halkoylaması — İki Sicilya'nın İtalya Krallığı'na katılımı", tur:"birlesme", onem:4, dunya:4, kapsam:"ic", yer_id:"Napoli",
  etiket:["napoli","milliyetcilik","anayasa"],
  d:"Napoli ve Sicilya'da yapılan halkoylamasında ezici çoğunluk Sardinya-Piyemonte Krallığı'na (yakında İtalya Krallığı'na) katılım yönünde oy kullandı; Garibaldi fethettiği toprakları resmen Kral II. Vittorio Emanuele'ye devretti.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1861-02-13", b:"Gaeta'nın düşüşü — Bourbon direnişinin sonu", tur:"son", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["napoli","askeri","son"],
  d:"II. Francesco'nun sığındığı son kale Gaeta, üç aylık kuşatmanın ardından İtalyan-Piyemonte kuvvetlerine teslim oldu; kral sürgüne çıktı. İki Sicilya Krallığı'nın altı yüzyıllık kesintisiz siyasî varlığı böylece fiilen sona erdi.",
  kaynak:"data/devletler.js `napoli` (t:\"1861-02-13\") — dosyanın kendi kapanış tarihiyle birebir uyumlu" },

// ══════════════════════════════════════════════════════════════════
// III. CENOVA (CENEVİZ) CUMHURİYETİ (Cenova)
// ══════════════════════════════════════════════════════════════════

{ t:"1261-03-13", b:"Nymphaeum Antlaşması — Karadeniz kapısının açılması", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["ceneviz","antlasma","ekonomi"],
  d:"Bizans İmparatoru VIII. Mihail, Latin İmparatorluğu'nu devirme mücadelesinde desteğine karşılık Cenova'ya Karadeniz'de geniş ticaret ayrıcalıkları tanıdı. Antlaşma, cumhuriyetin Kırım kıyısında (Kefe başta olmak üzere) bir asır sürecek koloni ağının hukukî temelini attı.",
  kaynak:"data/devletler.js `cenova` embedded kronoloji: \"Nymphaeum Antlaşması ile Bizans'tan Karadeniz'de ticaret ayrıcalığı aldı — Kırım kolonizasyonunun önünü açtı\"" },

{ t:"1284-08-06", b:"Meloria Deniz Savaşı — Pisa'nın deniz gücü olarak sonu", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["ceneviz","askeri"],
  d:"Cenova donanması, rakip deniz cumhuriyeti Pisa'yı Meloria açıklarında ağır bir yenilgiye uğrattı; binlerce Pisalı esir alındı. Savaş, Pisa'nın Akdeniz'deki deniz gücü olma iddiasını fiilen bitirdi ve Cenova'yı Batı Akdeniz'in tartışmasız hâkimi yaptı.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1298-09-08", b:"Curzola deniz zaferi — Venedik rekabetinin zirvesi", tur:"savas", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["ceneviz","askeri"],
  d:"Dalmaçya açıklarında Venedik donanmasını ağır yenilgiye uğratan Cenova, esirler arasında yakaladığı Marco Polo'yu Cenova zindanına attı — Polo seyahatnâmesini burada bir hücre arkadaşına dikte ettirdi. İki cumhuriyetin bir asrı aşan deniz rekabeti bu zaferle zirveye çıktı.",
  kaynak:"data/kronoloji_venedik.js aynı olayı `dunya:2` ile kaydediyor — bu dosyada AYNI değer kullanıldı (§3.2 hizalama); gün ayrıca DOĞRULANMADI" },

{ t:"1346-01-01", b:"Kefe kolonisinin kurulması", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["ceneviz","ekonomi","toprak-kazanc"],
  d:"Cenova, Kırım'ın güney kıyısında Kefe (Caffa) kolonisini kurdu; koloni bir buçuk asır boyunca cumhuriyetin Karadeniz-İpek Yolu ticaretindeki en kârlı üssü ve Doğu Avrupa köle ticaretinin ana limanı olacaktı.",
  kaynak:"data/devletler.js `cenova` embedded kronoloji: \"Kefe kolonisi kuruldu (Kırım kıyısı)\"" },

{ t:"1347-01-01", b:"Kefe kuşatması ve Kara Ölüm'ün Avrupa'ya taşınması", tur:"salgin", onem:3, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["ceneviz","kriz","salgin"],
  d:"Altın Orda kuvvetlerinin Kefe'yi kuşatması sırasında, kuşatmacıların vebadan ölen cesetleri mancınıkla surların içine atmasıyla salgının kente sıçradığı anlatılır; kaçan Cenevizli tüccar gemileri hastalığı 1347 sonunda Sicilya'ya, oradan bütün Avrupa'ya taşıdı. Kara Ölüm'ün Avrupa'ya girişinin en çok anılan öyküsü, tek bir Ceneviz kolonisinden başlar ve kıtanın nüfusunun üçte birini silecek bir felakete dönüşür.",
  kaynak:"bulunamadı — bu anlatı (Gabriele de' Mussi'nin çağdaş tanıklığına dayanır) standart akademik salgın tarihi literatüründe yaygın kabul görür; bu oturumda birincil metin OKUNMADI, kesin mekanizma tarihçiler arasında hâlâ tartışmalıdır" },

{ t:"1379-08-16", b:"Chioggia'nın ele geçirilmesi — Venedik lagününe girilmesi", tur:"savas", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["ceneviz","askeri"],
  d:"Macaristan ve Padova ile ittifak hâlindeki Cenova donanması Chioggia'yı ele geçirip Venedik lagününün içine kadar girdi — cumhuriyet tarihinin Venedik'e en yaklaştığı andır. Ama Venedik'in çaresizlik içinde topladığı yeni donanma bir yıl içinde dengeyi tersine çevirecekti.",
  kaynak:"data/kronoloji_venedik.js aynı kuşatmayı anlatıyor (Venedik perspektifinden); gün DOĞRULANMADI, dunya değeri Venedik dosyasıyla uyumlu tutuldu (dunya:2)" },

{ t:"1381-08-08", b:"Torino Barışı — Chioggia Savaşı'nın sona ermesi", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["ceneviz","antlasma"],
  d:"Savoya Kontu'nun arabuluculuğuyla imzalanan barış, Cenova'nın lagüne girmesine rağmen savaşı kesin bir zaferle bitiremediğini tescil etti; iki cumhuriyet arasındaki üstünlük mücadelesi bundan sonra giderek Venedik lehine dönecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1453-05-29", b:"İstanbul'un fethi — Galata'nın (Pera) Osmanlı'ya bağlanması", tur:"toprak-kayip", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["ceneviz","toprak-kayip","kriz"],
  d:"II. Mehmed'in İstanbul'u fethiyle, Haliç karşısındaki Ceneviz kolonisi Galata (Pera) tarafsızlığını koruyamayıp teslim oldu; Osmanlı yönetimi kolonizasyon ayrıcalıklarının çoğunu tanısa da, cumhuriyetin Boğaz'daki bağımsız siyasî varlığı fiilen sona erdi. Bu, Cenova'nın Doğu Akdeniz koloni ağının çözülüşünün ilk büyük halkasıdır.",
  kaynak:"CLAUDE.md'de projede zaten ilan edilmiş `dunya` hizalaması: 1453-05-29 → 5 — bu dosyada AYNI değer kullanıldı; gün İstanbul'un fetih tarihiyle (proje çapında sabit) birebir" },

{ t:"1455-01-01", b:"Sakız Adası'nın Maona şirketi idaresine geçmesi", tur:"idari", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["ceneviz","ekonomi"],
  d:"Cenova'nın Ege'deki en değerli kolonisi Sakız (Chios), doğrudan devlet yönetimi yerine Giustiniani ailesinin başını çektiği bir hissedarlar şirketi olan Maona'nın idaresine bırakıldı — ortaçağ Avrupa'sının erken bir özel-sermaye sömürgecilik modelidir.",
  kaynak:"data/devletler.js `cenova` embedded kronoloji: \"Sakız Adası Maona şirketi idaresine geçti\"" },

{ t:"1461-08-15", b:"Amasra kolonisinin Osmanlı'ya düşmesi", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["ceneviz","toprak-kayip"],
  d:"Fatih Sultan Mehmed'in Karadeniz seferi sırasında Cenova'nın Anadolu kıyısındaki kolonisi Amasra, direnmeden Osmanlı'ya teslim oldu; Karadeniz kıyısındaki Ceneviz varlığının tasfiyesinin ilk adımlarından biriydi.",
  kaynak:"data/devletler.js `cenova` embedded kronoloji: \"Amasra kolonisi Osmanlı'ya düştü\"" },

{ t:"1475-06-01", b:"Kefe'nin Osmanlı'ya düşmesi", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["ceneviz","toprak-kayip","askeri"],
  d:"Gedik Ahmed Paşa komutasındaki Osmanlı donanması Kefe'yi kuşatıp birkaç gün içinde teslim aldı; cumhuriyetin bir buçuk asırlık Kırım koloni ağının kalbi kayboldu. Kefe'nin düşüşü, Cenova'nın Karadeniz'deki ekonomik varlığının fiilen sonu anlamına geliyordu.",
  kaynak:"data/devletler.js `cenova` embedded kronoloji: \"Kefe, Osmanlı'ya düştü\"" },

{ t:"1528-09-12", b:"Andrea Doria'nın anayasa reformu", tur:"anayasa", onem:5, dunya:2, kapsam:"ic", yer_id:"Cenova",
  etiket:["ceneviz","anayasa","reform"],
  d:"Amiral Andrea Doria, Fransız nüfuzundan koparıp İmparator V. Karl'la ittifaka giren cumhuriyette aristokratik bir anayasa reformu yaptı; iki yılda bir seçilen doge sistemiyle iç hizip çatışmalarını dizginleyen bu düzen, cumhuriyetin 1797'ye kadar sürecek son siyasî çerçevesi oldu.",
  kaynak:"data/devletler.js `cenova` embedded kronoloji: \"Andrea Doria, Fransız nüfuzunu kırıp aristokratik cumhuriyet anayasasını kurdu\"" },

{ t:"1566-04-14", b:"Sakız Adası'nın Osmanlı'ya ilhakı — son Ege kolonisinin kaybı", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["ceneviz","toprak-kayip"],
  d:"Kaptan-ı Derya Piyale Paşa'nın donanması Sakız'ı işgal edip Giustiniani ailesinin iki asırlık Maona idaresine son verdi; Cenova'nın Doğu Akdeniz'deki son kolonisi de böylece kayboldu ve cumhuriyet artık yalnızca Ligurya kıyısı ve Korsika'ya sıkışmış bir güç hâline geldi.",
  kaynak:"data/devletler.js `cenova` embedded kronoloji: \"Sakız Adası Osmanlı'ya ilhak edildi — son Ege kolonisi kayboldu\"; İngilizce Wikipedia 'Republic of Genoa': \"the loss of Chios to the Ottoman Empire (1566), struck a severe blow\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1684-05-17", b:"Fransız donanmasının Cenova'yı bombalaması", tur:"kriz", onem:3, dunya:2, kapsam:"dis", yer_id:"Cenova",
  etiket:["ceneviz","askeri","kriz"],
  d:"XIV. Louis, cumhuriyetin İspanya'ya kadırga satmasını bahane ederek donanmasını Cenova'ya gönderdi; şehir günlerce bombalandı, doge bizzat Versailles'a gidip özür dilemek zorunda kaldı — küçük bir cumhuriyetin büyük güçler karşısındaki kırılganlığının açık göstergesi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1746-12-05", b:"Balilla İsyanı — Avusturya işgaline karşı halk ayaklanması", tur:"isyan", onem:3, dunya:1, kapsam:"ic", yer_id:"Cenova",
  etiket:["ceneviz","isyan"],
  d:"Avusturya Veraset Savaşı sırasında şehri işgal eden Avusturya kuvvetlerine karşı, Balilla lakaplı bir çocuğun attığı taşla başladığı söylenen halk ayaklanması, işgalcileri birkaç gün içinde kovdu — Cenova yurtseverlik anlatısının en çok tekrarlanan efsanesidir.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1768-05-15", b:"Korsika'nın Fransa'ya satılması", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["ceneviz","toprak-kayip","antlasma"],
  d:"Korsikalı isyancılara (Pasquale Paoli önderliğinde) karşı adayı bir türlü tam denetim altına alamayan Cenova, Versailles Antlaşması'yla adanın egemenlik haklarını Fransa'ya devretti. Bir yıl sonra adada doğacak Napolyon Bonapart, bu yüzden Fransız vatandaşı olarak dünyaya gelecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1797-06-14", b:"Napolyon'un cumhuriyeti ilga etmesi — Ligurya Cumhuriyeti'nin kuruluşu", tur:"son", onem:5, dunya:3, kapsam:"dis", yer_id:"Cenova",
  etiket:["ceneviz","isgal","son"],
  d:"Napolyon'un İtalya Seferi sırasında Cenova, aristokratik anayasası feshedilip Fransız modelinde bir Ligurya Cumhuriyeti'ne dönüştürüldü; yedi yüzyıllık bağımsız Ceneviz Cumhuriyeti böylece resmen sona erdi.",
  kaynak:"data/devletler.js `cenova` (t:\"1797-06-14\"): \"Napolyon tarafından ilga edildi\"" },

{ t:"1815-01-01", b:"Viyana Kongresi — Cenova'nın Sardinya-Piyemonte'ye katılması", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis", yer_id:"Cenova",
  etiket:["ceneviz","diplomasi"],
  d:"Viyana Kongresi, kısa ömürlü bağımsız cumhuriyet ilanını (1814) tanımayıp Cenova'yı doğrudan Savoya hanedanının Sardinya-Piyemonte Krallığı'na kattı; şehir bir asrı aşkın süre bu krallığın en önemli liman kenti olarak kalacaktı.",
  kaynak:"İngilizce Wikipedia, 'Congress of Vienna': \"The King of Sardinia... gained control of Genoa (putting an end to the brief proclamation of a restored Republic of Genoa)\" — bu oturumda WebFetch ile doğrulandı; gün YAKLAŞIK" },

// ══════════════════════════════════════════════════════════════════
// IV. MİLANO DÜKALIĞI (Milano) — Visconti-Sforza
// ══════════════════════════════════════════════════════════════════

{ t:"1395-05-11", b:"Gian Galeazzo Visconti'nin dük unvanını alması", tur:"kurulus", onem:5, dunya:3, kapsam:"ic", yer_id:"Milano",
  etiket:["milano","hanedan","kurulus"],
  d:"Visconti hanedanının başındaki Gian Galeazzo, İmparator Wenceslaus'tan büyük bir meblağ karşılığında \"Milano Dükü\" unvanını satın aldı; şehir devletinden hanedanlığa geçiş resmileşti. Gian Galeazzo, ölümüne kadar (1402) dükalığı Kuzey ve Orta İtalya'nın en güçlü devletine dönüştürecekti.",
  kaynak:"data/devletler.js `milano-dukaligi` embedded kronoloji: \"Gian Galeazzo Visconti, İmparator Wenceslaus'tan dük unvanını satın aldı\"" },

{ t:"1402-09-03", b:"Gian Galeazzo'nun ölümü — genişlemenin durması", tur:"olum", onem:4, dunya:2, kapsam:"ic", yer_id:"Milano",
  etiket:["milano","hanedan"],
  d:"Floransa'yı bile kuşatma tehdidine sokacak kadar genişleyen dükalığın kurucusu, vebadan öldü; genç varisleri döneminde toprakların büyük bölümü elden çıktı ve dükalık iç çekişmelerle sarsıldı.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1447-08-13", b:"Son Visconti dükünün ölümü — Ambrosian Cumhuriyeti'nin ilanı", tur:"bolunme", onem:4, dunya:2, kapsam:"ic", yer_id:"Milano",
  etiket:["milano","hanedan","kriz"],
  d:"Filippo Maria Visconti'nin varissiz ölümüyle hanedan sona erdi; Milanolular kısa ömürlü bir cumhuriyet (Ambrosian Cumhuriyeti) ilan etti. Ama iç çekişmeler ve dış tehditler karşısında cumhuriyet üç yıl bile dayanamayacaktı.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1450-03-25", b:"Francesco Sforza'nın dük olması", tur:"hukumdar", onem:5, dunya:3, kapsam:"ic", yer_id:"Milano",
  etiket:["milano","hanedan","kurulus"],
  d:"Ünlü paralı asker kumandanı Francesco Sforza, Visconti'nin kızıyla evliliğinden gelen iddiasını orduyla destekleyip Ambrosian Cumhuriyeti'ne son verdi ve dükalığı yeni bir hanedanla yeniden kurdu. Sforza hattı, bir asır boyunca dükalığı Rönesans'ın en zengin saraylarından birine dönüştürecekti.",
  kaynak:"data/devletler.js `milano-dukaligi` embedded kronoloji: \"Francesco Sforza, Ambrosian Cumhuriyeti'ne son verip dük oldu\"" },

{ t:"1454-04-09", b:"Lodi Barışı — İtalyan Ligi'nin kurulması", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["milano","antlasma","diplomasi"],
  d:"Milano, Venedik, Floransa, Napoli ve Papalık arasında imzalanan barış, beş büyük İtalyan devletini karşılıklı güvenlik garantisi veren bir dengeye (İtalyan Ligi) bağladı. Kırk yıl sürecek bu göreli barış dönemi, Rönesans kültürünün en parlak on yıllarına zemin hazırladı — 1494'te Fransız işgaliyle çökecekti.",
  kaynak:"bulunamadı — gün YAYGIN KABUL, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1476-12-26", b:"Galeazzo Maria Sforza'nın suikastı", tur:"kriz", onem:3, dunya:1, kapsam:"ic", yer_id:"Milano",
  etiket:["milano","kriz"],
  d:"Zalim yönetimiyle tanınan dük, Aziz İstefanos Kilisesi'nde üç genç soylu tarafından bıçaklanarak öldürüldü; suikastçılar kısa sürede yakalanıp idam edildi ama olay, tahta genç bir çocuğun (Gian Galeazzo Sforza) geçmesine ve amcası Ludovico'nun fiilî iktidarı ele geçirmesine yol açtı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1494-10-22", b:"Ludovico 'il Moro'nun fiilen dük olması — Fransızları davet etmesi", tur:"hukumdar", onem:5, dunya:5, kapsam:"dis", yer_id:"Milano",
  etiket:["milano","hanedan","diplomasi"],
  d:"Yeğeni Gian Galeazzo'nun şüpheli ölümüyle Ludovico Sforza fiilen dük oldu; Napoli krallığının kendisine düşman olmasından çekinerek Fransa Kralı VIII. Charles'ı İtalya'ya davet etti. Bu davet, altmış beş yıl sürecek İtalyan Savaşları'nın doğrudan fitili oldu — Ludovico'nun kendisi de bu savaşların kurbanı olacaktı.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1495-04-02", b:"Leonardo da Vinci'nin 'Son Akşam Yemeği'ne başlaması", tur:"sanat", onem:4, dunya:3, kapsam:"ic", yer_id:"Milano",
  etiket:["milano","sanat","kultur"],
  d:"Ludovico Sforza'nın himayesinde Milano'da çalışan Leonardo, Santa Maria delle Grazie manastırının yemekhane duvarına \"Son Akşam Yemeği\" freskini yapmaya başladı; üç yıl sürecek eser, Batı resim sanatının en çok incelenen ve kopyalanan yapıtlarından biri olacaktı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs (çalışmanın 1495-1498 arasında yapıldığı yaygın kabul)" },

{ t:"1499-10-06", b:"Fransız Kralı XII. Louis'nin Milano'yu işgal etmesi", tur:"isgal", onem:4, dunya:4, kapsam:"dis", yer_id:"Milano",
  etiket:["milano","isgal","askeri"],
  d:"Kendi Visconti soyundan gelen iddiayı öne süren XII. Louis, dükalığı işgal edip Ludovico Sforza'yı kovdu; Ludovico bir yıl sonra İsviçreli paralı askerlerle geri dönmeye çalışsa da yenilip Fransa'da esir düştü ve orada öldü.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1512-06-01", b:"Massimiliano Sforza'nın dükalığa dönüşü", tur:"hukumdar", onem:3, dunya:2, kapsam:"dis", yer_id:"Milano",
  etiket:["milano","hanedan"],
  d:"İsviçre ve Kutsal İttifak kuvvetleri Fransızları geçici olarak Milano'dan çıkarınca, Ludovico'nun oğlu Massimiliano Sforza dük ilan edildi; ama bu geri dönüş kısa ömürlü olacak, üç yıl sonra Marignano'da Fransızlar şehri yeniden alacaktı.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1515-09-13", b:"Marignano Savaşı — Fransa'nın Milano'yu geri alması", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["milano","askeri","toprak-kayip"],
  d:"Yeni Fransa Kralı I. François, iki gün süren kanlı bir savaşta İsviçreli paralı askerleri yenip Milano Kalesi'ni ele geçirdi; dükalık yeniden Fransız kontrolüne girdi. Savaş, dönemin en ağır kayıplı çarpışmalarından biri olarak \"devlerin savaşı\" diye anıldı.",
  kaynak:"İngilizce Wikipedia, 'Battle of Marignano': \"which took place on 13-14 September 1515\"; \"Francis gained the city of Milan, and more importantly, the Castello Sforzesco\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1521-11-19", b:"İmparator-Papa ittifakının Fransızları Milano'dan çıkarması", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"Milano",
  etiket:["milano","askeri"],
  d:"V. Karl ve Papa X. Leo'nun kurduğu ittifak, Milano'yu Fransızlardan geri alıp Francesco II Sforza'yı yeniden dük ilan etti; ama dükalık artık fiilen İmparator'un vesayeti altında bir taşra yönetimine dönüşmüştü.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1525-02-24", b:"Pavia Savaşı — Fransa Kralı'nın esir düşmesi", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["milano","askeri","toprak-kayip"],
  d:"İmparator V. Karl'ın kuvvetleri, Milano'yu geri almaya çalışan I. François'in ordusunu Pavia'da imha etti; kralın kendisi esir düştü. Savaş, Habsburg üstünlüğünün İtalya'da kesin biçimde tesis edildiği dönüm noktasıdır ve Avrupa güç dengesini bir nesil boyunca V. Karl lehine değiştirdi.",
  kaynak:"İngilizce Wikipedia, 'Battle of Pavia': \"fought on the morning of 24 February 1525\"; Francis I esir düştü, \"French abandoning their control of Lombardy\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1535-11-01", b:"Son Sforza dükünün ölümü — Milano'nun İspanyol tacına katılması", tur:"bolunme", onem:5, dunya:4, kapsam:"dis", yer_id:"Milano",
  etiket:["milano","hanedan","toprak-kayip"],
  d:"Francesco II Sforza'nın varissiz ölümüyle hanedan sona erdi; İmparator V. Karl dükalığı doğrudan kendi tacına (sonradan oğlu İspanya Kralı II. Felipe'ye) kattı. Milano bundan sonra bağımsız bir hanedanlık değil, İspanyol-Habsburg imparatorluğunun bir eyaleti olarak yönetilecekti.",
  kaynak:"data/devletler.js `milano-dukaligi` embedded kronoloji: \"Son Sforza dükü öldü, V. Karl dükalığı İspanyol tacına kattı\"" },

{ t:"1559-04-03", b:"Cateau-Cambrésis Antlaşması — İspanyol Milano'sunun teyidi", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["milano","antlasma","diplomasi"],
  d:"Fransa'yı İtalyan Savaşları'ndan kesin olarak çekilmeye zorlayan antlaşma, İspanya'nın Milano ve Napoli üzerindeki hâkimiyetini uluslararası hukukta tescil etti; altmış beş yıl süren savaşlar dönemi böylece kapandı ve İtalya'da bir buçuk asır sürecek İspanyol üstünlüğü dönemi başladı.",
  kaynak:"İngilizce Wikipedia, 'Peace of Cateau-Cambrésis': antlaşma \"3 April 1559\" imzalandı, \"Henry II of France renounced his hereditary claims to the Duchy of Milan\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1630-01-01", b:"Milano vebası", tur:"salgin", onem:3, dunya:2, kapsam:"ic", yer_id:"Milano",
  etiket:["milano","kriz"],
  d:"Otuz Yıl Savaşları sırasında Alp geçitlerinden bulaşan veba, Lombardiya'yı vurdu; şehir nüfusunun önemli bir bölümü öldü. Salgın, on yedinci yüzyıl İtalyan edebiyatının en tanınmış romanı Alessandro Manzoni'nin \"Nişanlılar\"ında (I Promessi Sposi) ölümsüzleştirilecekti.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1706-09-07", b:"Torino Savaşı — Fransızların Milano'dan çıkarılması", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["milano","askeri"],
  d:"İspanyol Veraset Savaşı sırasında Savoya-Avusturya ittifakı Fransız kuşatma ordusunu Torino'da yenilgiye uğrattı; bu zafer, Fransa'nın Kuzey İtalya'daki nüfuzunu kırıp Milano'nun Avusturya Habsburglarına geçmesinin yolunu açtı.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1714-01-01", b:"Milano'nun resmen Avusturya Habsburglarına geçmesi", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis", yer_id:"Milano",
  etiket:["milano","antlasma","toprak-kayip"],
  d:"İspanyol Veraset Savaşı'nı bitiren Utrecht ve Rastatt antlaşmaları zinciri, Milano Dükalığı'nı İspanyol tacından Avusturya Habsburglarına devretti; dükalık bu tarihten Napolyon'a kadar Viyana'dan yönetilen bir eyalet olacaktı.",
  kaynak:"data/devletler.js `milano-dukaligi` embedded kronoloji: \"İspanya Veraset Savaşı sonrası Avusturya Habsburglarına geçti\"" },

{ t:"1796-05-15", b:"Napolyon'un Milano'ya girmesi", tur:"isgal", onem:4, dunya:4, kapsam:"dis", yer_id:"Milano",
  etiket:["milano","isgal","askeri"],
  d:"Genç general Napolyon Bonapart, İtalya Seferi'nin açılış zaferlerinin ardından Milano'ya muzaffer biçimde girdi; iki asırlık Avusturya yönetimi burada fiilen sona erdi ve şehir kısa süre içinde Fransız güdümündeki bir cumhuriyetin başkenti olacaktı.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1797-07-09", b:"Cisalpine Cumhuriyeti'nin ilanı", tur:"kurulus", onem:4, dunya:3, kapsam:"dis", yer_id:"Milano",
  etiket:["milano","kurulus","siyaset"],
  d:"Napolyon, Milano merkezli fethettiği toprakları birleştirip Fransız modelinde bir Cisalpine Cumhuriyeti kurdu; bu, İtalyan topraklarının modern anlamda tek bir devlet çatısı altında birleştirilmesinin ilk (ve kısa ömürlü) denemesiydi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1815-01-01", b:"Lombardiya-Venedik Krallığı'nın Avusturya'ya bağlanması", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", yer_id:"Milano",
  etiket:["milano","diplomasi","toprak-kayip"],
  d:"Viyana Kongresi, Milano ve Venedik'i birleştirip Avusturya İmparatorluğu'na bağlı özerk bir Lombardiya-Venedik Krallığı olarak yeniden düzenledi; bu düzenleme, otuz beş yıl sonra İtalyan milliyetçi hareketinin en büyük hedef tahtası hâline gelecekti.",
  kaynak:"İngilizce Wikipedia, 'Congress of Vienna': \"Austria gained much of northern Italy... received Lombardy-Venetia in Italy\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1848-03-18", b:"Milano'nun Beş Günü — Avusturya garnizonuna karşı ayaklanma", tur:"isyan", onem:4, dunya:3, kapsam:"ic", yer_id:"Milano",
  etiket:["milano","isyan","milliyetcilik"],
  d:"Milano halkı beş gün süren sokak çatışmalarıyla Avusturya garnizonunu şehirden kovdu; ayaklanma, 1848 Avrupa devrimler dalgasının İtalya'daki en etkili patlamalarından biriydi ve Sardinya-Piyemonte'yi I. Bağımsızlık Savaşı'nı açmaya sürükledi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1859-06-08", b:"Piyemonte-Fransız kuvvetlerinin Milano'ya girmesi", tur:"isgal", onem:5, dunya:4, kapsam:"dis", yer_id:"Milano",
  etiket:["milano","milliyetcilik","askeri"],
  d:"Magenta zaferinin ardından II. Vittorio Emanuele ve III. Napolyon, coşkuyla karşılandıkları Milano'ya birlikte girdi; Avusturya'nın kırk dört yıllık Lombardiya yönetimi burada fiilen sona erdi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1859-11-10", b:"Zürih Antlaşması — Lombardiya'nın Sardinya-Piyemonte'ye bırakılması", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["milano","antlasma","son"],
  d:"II. Bağımsızlık Savaşı'nı resmen sonlandıran antlaşma, Avusturya'nın Lombardiya'dan (Venedik hariç) çekilmesini ve bölgenin Sardinya-Piyemonte'ye katılmasını tescil etti; Milano Dükalığı'nın bağımsız-taşra tarihi burada son buldu, şehir birleşecek İtalya'nın en büyük sanayi merkezi olacaktı.",
  kaynak:"data/devletler.js `milano-dukaligi` (t:\"1859-11-10\"): \"Zürih Antlaşması ile Lombardiya Sardinya-Piyemonte'ye bırakıldı\"" },

// ══════════════════════════════════════════════════════════════════
// V. FLORANSA CUMHURİYETİ / TOSKANA BÜYÜK DÜKALIĞI (Floransa) — Medici
// ══════════════════════════════════════════════════════════════════

{ t:"1293-01-01", b:"Adalet Kararnâmeleri — lonca yönetiminin pekişmesi", tur:"anayasa", onem:4, dunya:2, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","anayasa","reform"],
  d:"Floransa, soylu (magnat) ailelerin siyasî haklarını kısıtlayıp yönetimi tüccar ve zanaatkâr loncalarının (popolo) eline veren kararnâmeleri kabul etti; cumhuriyetin sonraki iki asırlık lonca-temelli siyasî yapısının hukukî temelini attı.",
  kaynak:"data/devletler.js `floransa` embedded kronoloji: \"Adalet Kararnâmeleri (Ordinances of Justice) ile popolo yönetimi pekişti\"" },

{ t:"1302-03-10", b:"Dante Alighieri'nin sürgün edilmesi", tur:"siyaset", onem:4, dunya:2, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","kultur","siyaset"],
  d:"Beyaz Guelph hizbinin bir üyesi olan Dante, Kara Guelph'lerin şehri ele geçirmesiyle rüşvet suçlamasıyla gıyaben mahkûm edildi ve bir daha Floransa'ya dönemedi. Sürgün, İtalyan edebiyatının kurucu eseri sayılan \"İlahi Komedya\"nın yazılmasının dolaylı sebebi oldu.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1348-01-01", b:"Kara Ölüm'ün Floransa'yı vurması", tur:"salgin", onem:4, dunya:3, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","kriz","kultur"],
  d:"Veba, Floransa nüfusunun belki de yarısını birkaç ay içinde silip süpürdü. Şehirdeki yıkımın tanıklığı, Giovanni Boccaccio'nun on genç Floransalının vebadan kaçıp anlattığı yüz hikâyeyi topladığı \"Decameron\"a doğrudan ilham verecekti — İtalyan düzyazısının kurucu eserlerinden biri.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs; Venedik dosyasındaki aynı yıl kaydıyla (1348-01-25) tutarlı, iki dosya ayrı şehirleri anlattığı için gün eşitlenmedi" },

{ t:"1378-07-20", b:"Ciompi İsyanı — yün işçilerinin ayaklanması", tur:"isyan", onem:4, dunya:2, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","isyan","sosyal"],
  d:"Loncalara bile kabul edilmeyen alt tabaka yün işçileri (ciompi) ayaklanıp kısa süreliğine kendi temsilcilerini yönetime soktu; Avrupa tarihinin en erken belgelenmiş işçi ayaklanmalarından biri sayılır. Hareket birkaç yıl içinde bastırıldı ama loncasız emekçilerin siyasî talebini ilk kez gündeme getirdi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1397-01-01", b:"Medici Bankası'nın kurulması", tur:"iktisat", onem:5, dunya:3, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","ekonomi","hanedan"],
  d:"Giovanni di Bicci de' Medici, ailenin bankacılık işini Floransa'da kurumsallaştırdı; şube ağı kısa sürede Roma'dan Londra'ya, Bruges'e kadar uzanacak ve Medici hanedanının servetinin (dolayısıyla siyasî iktidarının) temeli olacaktı. Banka, papalık maliyesinin de fiilen kasadarı hâline geldi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1401-01-01", b:"Vaftizhane kapı yarışması — Rönesans'ın simgesel açılışı", tur:"sanat", onem:3, dunya:3, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","sanat","kultur"],
  d:"Floransa Katedrali Vaftizhanesi'nin bronz kapılarını yapacak sanatçıyı belirlemek için düzenlenen yarışmayı Lorenzo Ghiberti, rakibi Filippo Brunelleschi'ye karşı kazandı; yarışma, sanat tarihçilerince Rönesans'ın Floransa'daki simgesel başlangıç noktalarından biri sayılır. Yenilen Brunelleschi enerjisini mimarîye yöneltip otuz beş yıl sonra kubbeyi inşa edecekti.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1434-09-26", b:"Cosimo de' Medici'nin sürgünden dönüp fiilî iktidarı ele geçirmesi", tur:"hukumdar", onem:5, dunya:3, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","hanedan","kurulus"],
  d:"Rakip Albizzi ailesince bir yıl önce sürgüne gönderilen Cosimo, müttefiklerinin şehirdeki yeni seçim sonuçlarıyla geri çağrılıp Floransa'ya döndü ve resmî bir unvan taşımadan, cumhuriyetin kurumlarını arkadan yöneterek fiilî hükümdar hâline geldi. Medici hanedanının altmış yıl sürecek (aralıklı) hâkimiyeti burada başlar.",
  kaynak:"data/devletler.js `floransa` embedded kronoloji: \"Cosimo de' Medici sürgünden dönüp şehrin fiilî hâkimi oldu\" (t:\"1434-09-26\")" },

{ t:"1436-03-25", b:"Floransa Katedrali kubbesinin açılışı", tur:"mimari", onem:4, dunya:4, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","mimari","kultur"],
  d:"Filippo Brunelleschi'nin, Roma'dan beri hiçbir mimarın çözemediği kadar geniş bir açıklığı iskelesiz kubbeyle örtme problemini yeni bir çifte-kabuk tekniğiyle çözmesiyle inşa edilen kubbe, Papa IV. Eugenius tarafından resmen açılıp katedral kutsandı. Yapı, mühendislik tarihinde bir dönüm noktası ve Floransa Rönesansı'nın en görünür simgesi oldu.",
  kaynak:"İngilizce Wikipedia, 'Florence Cathedral': \"The cathedral was consecrated by Pope Eugene IV on 25 March 1436\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1439-07-06", b:"Floransa Konsili — Doğu-Batı kilise birliği bildirisi", tur:"din", onem:4, dunya:4, kapsam:"dis", yer_id:"Floransa",
  etiket:["floransa","din","diplomasi"],
  d:"Bizans İmparatoru VIII. İoannis ve Ortodoks kilisesi temsilcilerinin katıldığı konsil, Katolik ve Ortodoks kiliselerini birleştiren Laetentur Caeli bildirisini imzaladı; birlik Bizans'ta halk tarafından reddedilip fiilen uygulanamasa da, konsilin Floransa'da toplanması şehri kısa süreliğine Hristiyan dünyasının diplomatik merkezine dönüştürdü ve Bizanslı bilginlerin getirdiği Yunan elyazmaları Floransa hümanizmini besledi.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1469-12-02", b:"Lorenzo de' Medici'nin ('Muhteşem') iktidara gelmesi", tur:"hukumdar", onem:4, dunya:3, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","hanedan","kultur"],
  d:"Babası Piero'nun ölümüyle yirmi yaşındaki Lorenzo, Medici hanedanının başına geçti; yirmi üç yıl sürecek yönetimi boyunca hem İtalya'nın diplomatik dengesinin kilit ismi hem de Botticelli, genç Michelangelo gibi sanatçıların en cömert hamisi olacaktı — Floransa Rönesansı'nın zirve dönemi onun adıyla anılır.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1478-04-26", b:"Pazzi Komplosu", tur:"kriz", onem:4, dunya:3, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","kriz","din"],
  d:"Rakip Pazzi ailesinin, papalığın da örtülü desteğiyle düzenlediği suikast girişiminde Lorenzo'nun kardeşi Giuliano katedralde bıçaklanarak öldürüldü, Lorenzo yaralı kurtuldu. Komplocuların acımasızca cezalandırılması ve Papa'nın Floransa'yı aforoz etmesiyle patlak veren kriz, iki yıl süren bir savaşa dönüştü.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1494-11-09", b:"Medicilerin sürgün edilmesi", tur:"bolunme", onem:5, dunya:2, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","kriz","hanedan"],
  d:"Charles VIII'in İtalya'yı işgali sırasında Fransızlara karşı zayıf duruşuyla halkın güvenini kaybeden Piero de' Medici, şehirden kovuldu; Medici bankasının malları yağmalandı. Cumhuriyet, keşiş Girolamo Savonarola'nın giderek artan dinî-siyasî etkisi altına girecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1497-02-07", b:"'Kibirler Ateşi' — Savonarola'nın gösterişe karşı ayini", tur:"din", onem:3, dunya:2, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","din","kultur"],
  d:"Savonarola'nın çağrısıyla toplanan Floransalılar, kozmetik, kumar aletleri, \"ahlâksız\" kitaplar ve resimleri (kimi Botticelli tuvalleri dâhil olduğu iddia edilir) meydanda topluca yaktı; ünlü vaizin şehir üzerindeki dinî-otoriter etkisinin zirvesiydi — bir yıldan az sürede kendisi de aforoz edilip idam edilecekti.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1498-05-23", b:"Savonarola'nın idamı", tur:"olum", onem:4, dunya:2, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","din","kriz"],
  d:"Papa VI. Alexander'ı sapkınlıkla suçlayan ve aforoz edilen Savonarola, Floransa halkının da desteğini yitirince yargılanıp asılarak ve cesedi yakılarak idam edildi. Cumhuriyet bir süre daha (Medicisiz) yönetime devam etti.",
  kaynak:"bulunamadı — gün YAYGIN KABUL, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1512-09-01", b:"Medicilerin İspanyol desteğiyle dönüşü", tur:"hukumdar", onem:4, dunya:2, kapsam:"dis", yer_id:"Floransa",
  etiket:["floransa","hanedan","askeri"],
  d:"Kutsal İttifak'ın parçası olarak İspanyol kuvvetleri yakındaki Prato'yu acımasızca yağmalayınca Floransa direnmeden teslim oldu; Medici hanedanı on sekiz yıllık aradan sonra İspanyol süngüsünün gölgesinde şehre geri döndü.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1513-01-01", b:"Machiavelli'nin 'Prens'i yazması", tur:"felsefe", onem:4, dunya:3, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","felsefe","kultur"],
  d:"Medicilerin dönüşüyle görevinden atılan diplomat Niccolò Machiavelli, kırsaldaki sürgününde İtalyan Savaşları'nın kaotik siyasetini gözlemleyerek \"Il Principe\"yi kaleme aldı; eser (1532'de ölümünden sonra basılacak) siyaset felsefesinde ahlâkı iktidarın gerçekliğinden ayıran modern yaklaşımın kurucu metinlerinden biri sayılır.",
  kaynak:"bulunamadı — yazım yılı standart akademik konsensüs, yayın 1532; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1527-05-16", b:"Medicilerin ikinci kez kovulması — cumhuriyetin geri gelişi", tur:"bolunme", onem:4, dunya:2, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","kriz","hanedan"],
  d:"Roma'nın Yağmalanması haberi Floransa'ya ulaşınca (Medici Papa VII. Clement'in başına gelen felaket, ailenin şehirdeki itibarını da sarstı) halk yeniden ayaklanıp Medicileri kovdu ve cumhuriyeti yeniden ilan etti; bu son cumhuriyet deneyi üç yıl sürecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1530-08-12", b:"İmparator kuşatmasıyla cumhuriyetin düşmesi", tur:"kusatma", onem:5, dunya:2, kapsam:"dis", yer_id:"Floransa",
  etiket:["floransa","askeri","kriz"],
  d:"İmparator V. Karl ile barışan Papa VII. Clement'in isteğiyle İmparatorluk kuvvetleri Floransa'yı on ay kuşattı; açlıktan tükenen şehir teslim oldu. Cumhuriyet böylece kesin olarak sona erdi; İmparator, genç Alessandro de' Medici'yi şehrin ilk kalıtsal dükü ilan edecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1537-01-06", b:"Cosimo I'in dük olması", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","hanedan"],
  d:"Alessandro'nun bir akrabası tarafından suikastle öldürülmesinin ardından on yedi yaşındaki Cosimo dük ilan edildi; kısa sürede rakip cumhuriyetçileri Montemurlo'da yenip iktidarını pekiştirdi ve Toskana'yı otuz yedi yıl boyunca merkezî bir bürokratik devlete dönüştürecekti.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1569-08-27", b:"Toskana Büyük Dükalığı unvanının kabulü", tur:"kurulus", onem:5, dunya:3, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","toskana","hanedan"],
  d:"Papa V. Pius, Cosimo I'i \"Toskana Büyük Dükü\" unvanıyla taçlandırdı; Floransa merkezli devlet böylece bölgesel bir dükalıktan resmî bir büyük dükalığa yükseldi — Avrupa hanedan hiyerarşisinde krallığın hemen altındaki en yüksek unvanlardan biriydi.",
  kaynak:"data/devletler.js `toskana` embedded kronoloji: \"I. Cosimo, Papa V. Pius tarafından Toskana Büyük Dükü ilan edildi\" (t:\"1569-08-27\")" },

{ t:"1610-03-13", b:"Galileo'nun 'Sidereus Nuncius'unun yayımlanması", tur:"bilim", onem:4, dunya:4, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","bilim","kultur"],
  d:"Padova'da teleskopla yaptığı gözlemleri (Jüpiter'in dört uydusu, Ay'ın engebeli yüzeyi) yayımlayan Galileo, kısa süre sonra Toskana Büyük Dükü'nün baş matematikçisi ve filozofu unvanıyla Floransa'ya döndü. Medici sarayının himayesi, gözlemsel astronominin kilise doktrinine meydan okumasının kurumsal zeminini oluşturdu.",
  kaynak:"bulunamadı — gün DOĞRULANMADI (yayın tarihi standart akademik konsensüs, Mart 1610); bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1737-07-09", b:"Medici hanedanının sona ermesi", tur:"bolunme", onem:5, dunya:2, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","toskana","hanedan"],
  d:"Son Medici büyük dükü Gian Gastone'nin varissiz ölümüyle, iki buçuk asırlık Medici hâkimiyeti sona erdi; taç önceden yapılan Avrupa diplomatik anlaşmaları uyarınca Habsburg-Lorraine hanedanına geçti — dükalık artık Viyana'dan atanan bir naip tarafından yönetilecekti.",
  kaynak:"data/devletler.js `toskana` embedded kronoloji: \"Medici hanedanı sönünce taç Habsburg-Lorraine hanedanına geçti\" (t:\"1737-07-09\")" },

{ t:"1786-11-30", b:"Toskana'nın ölüm cezasını kaldıran ilk Avrupa devleti olması", tur:"kanun", onem:4, dunya:4, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","toskana","hukuk","reform"],
  d:"Büyük Dük Pietro Leopoldo (sonradan İmparator II. Leopold), Cesare Beccaria'nın \"Suçlar ve Cezalar Hakkında\" eserinden etkilenerek yeni ceza kanununda idam cezasını ve işkenceyi kaldırdı; Toskana böylece modern tarihte ölüm cezasını resmen ilga eden ilk devlet oldu — Avrupa hukuk tarihinde bir dönüm noktasıdır.",
  kaynak:"bulunamadı — standart akademik konsensüs (Beccaria etkisi ve Toskana reformu yaygın kabul görür); bu oturumda birincil metin OKUNMADI" },

{ t:"1799-03-25", b:"Fransız işgali — Etruria Krallığı'nın kurulması", tur:"isgal", onem:3, dunya:2, kapsam:"dis", yer_id:"Floransa",
  etiket:["floransa","toskana","isgal"],
  d:"Fransız Devrim kuvvetleri Toskana'yı işgal edip Habsburg-Lorraine büyük dükünü kovdu, yerine kısa ömürlü bir kukla Etruria Krallığı kurdu; düzen birkaç yıl içinde doğrudan Fransız ilhakına dönüşecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1814-09-01", b:"Habsburg-Lorraine restorasyonu", tur:"kurulus", onem:3, dunya:1, kapsam:"dis", yer_id:"Floransa",
  etiket:["floransa","toskana","diplomasi"],
  d:"Napolyon'un düşüşüyle Viyana Kongresi, Toskana Büyük Dükalığı'nı Habsburg-Lorraine hanedanına iade etti; büyük dükalık, İtalyan yarımadasının en istikrarlı ve göreceli olarak reformcu yönetimlerinden biri olarak bir kez daha kırk beş yıl sürecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1859-04-27", b:"Büyük Dük II. Leopold'un devrilmesi", tur:"isyan", onem:5, dunya:3, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","toskana","milliyetcilik"],
  d:"II. Bağımsızlık Savaşı'nın patlak vermesiyle Floransa'da milliyetçi bir hareket, Büyük Dük II. Leopold'u kansız biçimde tahttan indirip geçici bir hükümet kurdu; Toskana böylece kendi isteğiyle Piyemonte önderliğindeki birleşme sürecine katılan ilk devletlerden biri oldu.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1860-03-22", b:"Halkoylamasıyla Sardinya-Piyemonte'ye katılım", tur:"birlesme", onem:5, dunya:4, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","toskana","milliyetcilik","anayasa"],
  d:"Toskana'da yapılan halkoylamasında ezici çoğunluk Sardinya-Piyemonte Krallığı'na katılım yönünde oy kullandı; üç asırlık ayrı Toskana devleti tarihi burada resmen son buldu.",
  kaynak:"data/devletler.js `toskana` (t:\"1860-03-22\"): \"Halkoylamasıyla Sardinya-Piyemonte'ye (yakında İtalya Krallığı'na) katıldı\"" },

{ t:"1865-02-03", b:"Floransa'nın İtalya Krallığı'nın geçici başkenti olması", tur:"idari", onem:3, dunya:2, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","idari"],
  d:"Napolyon III'ün Roma'daki Fransız garnizonunu koruma şartıyla imzalattığı Eylül Sözleşmesi uyarınca, yeni İtalya Krallığı'nın başkenti Torino'dan Floransa'ya taşındı; Floransa 1871'de Roma'nın alınmasına kadar altı yıl boyunca ülkenin başkenti oldu.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

// ══════════════════════════════════════════════════════════════════
// VI. SIENA CUMHURİYETİ VE ESTE DEVLETİ (FERRARA/MODENA) — küçük devletler
// ══════════════════════════════════════════════════════════════════

{ t:"1260-09-04", b:"Montaperti Savaşı — Siena'nın Floransa'yı ağır yenilgiye uğratması", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["siena","askeri"],
  d:"Ghibelline (İmparator yanlısı) Siena, sürgündeki Floransalı Ghibellinelerin ve Napoli Kralı Manfred'in desteğiyle Guelph (Papa yanlısı) Floransa ordusunu Montaperti'de ağır bir yenilgiye uğrattı — Dante bu savaşın kanla kızaran Arbia nehrini \"İlahi Komedya\"da anacaktı. Zafer kısa sürdü: dokuz yıl sonra Floransa aynı ittifak dengesiyle intikamını alacaktı. (Bu olay `data/devletler.js`de zaten kayıtlı; pencere öncesi (1260) olduğu için açılış madde olarak, sonraki dönemin arka planını vermek üzere alındı.)",
  kaynak:"data/devletler.js `siena` embedded kronoloji: \"Montaperti Savaşı'nda Floransa'yı ağır yenilgiye uğrattı\"" },

{ t:"1348-01-01", b:"Kara Ölüm'ün Siena'yı vurması — katedral genişletme projesinin terki", tur:"salgin", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["siena","kriz","mimari"],
  d:"Veba, Siena nüfusunun büyük bir bölümünü öldürdü; şehrin o dönemde Hristiyanlığın en büyük katedrali olmayı hedefleyen devasa genişletme projesi (bugün yalnız yarım kalan duvarlarıyla görülür) işçi ve kaynak kıtlığı yüzünden terk edildi. Salgın öncesi zenginliğinin zirvesindeki cumhuriyet, bu tarihten sonra bir daha eski gücüne kavuşamadı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1555-04-17", b:"Siena'nın Floransa-İspanyol kuvvetlerine teslimi", tur:"son", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["siena","askeri","son"],
  d:"Cosimo I'in Floransa'sı ile İspanya'nın müttefik kuvvetleri, on dört ay süren açlık kuşatmasının ardından cumhuriyeti teslim aldı; birkaç yıl sonra Cateau-Cambrésis Antlaşması Siena'yı resmen Toskana Büyük Dükalığı'na kattı. Üç yüz elli yıllık bağımsız cumhuriyet tarihi böylece sona erdi.",
  kaynak:"data/devletler.js `siena` (t:\"1555-04-17\"): \"Uzun kuşatma sonunda Floransa-İspanya kuvvetlerine teslim oldu\"" },

{ t:"1240-01-01", b:"Este ailesinin Ferrara'da beyliğini kurması", tur:"kurulus", onem:4, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["ferrara","este","kurulus"],
  d:"Kuzey İtalya'nın en eski hanedanlarından biri olan Este ailesi, Po nehri deltasındaki Ferrara'da kalıcı bir senyörlük kurdu; hanedan sonraki altı asır boyunca Rönesans İtalya'sının en uzun ömürlü küçük saraylarından birini yönetecekti.",
  kaynak:"data/devletler.js `ferrara` embedded kronoloji: \"Este ailesi Ferrara'da beyliğini kurdu\"" },

{ t:"1471-01-01", b:"Papalık'ın 'Ferrara Dükü' unvanını tanıması", tur:"kurulus", onem:3, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["ferrara","este","hanedan"],
  d:"Papa, Este hanedanının beyliğini resmen dükalık statüsüne yükseltti; Ferrara sarayı bu dönemde İtalya'nın en zengin edebiyat ve müzik merkezlerinden birine dönüşecekti.",
  kaynak:"data/devletler.js `ferrara` embedded kronoloji: \"Papa tarafından 'Ferrara Dükü' unvanı tanındı\"" },

{ t:"1516-01-01", b:"Ariosto'nun 'Çılgın Orlando'yu yayımlaması", tur:"kultur", onem:4, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["ferrara","este","kultur","sanat"],
  d:"Este sarayının şairi Ludovico Ariosto, şövalyelik destanı geleneğini ironiyle harmanlayan \"Orlando Furioso\"nun ilk baskısını Ferrara'da yayımladı; eser, İtalyan edebiyatının en etkili şiir yapıtlarından biri olarak sonraki yüzyılların Avrupa edebiyatını (Spenser, Cervantes) doğrudan etkileyecekti.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs (ilk baskı 1516)" },

{ t:"1598-01-01", b:"Ferrara'nın Papalık Devleti'ne ilhakı", tur:"toprak-kayip", onem:5, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["ferrara","este","toprak-kayip"],
  d:"Meşru (evlilik-içi) bir varis bırakmadan ölen dük Alfonso II'nin ardından Papa VIII. Clement, feodal hukuku gerekçe göstererek Ferrara'yı doğrudan Papalık Devleti'ne kattı; Este hanedanı payitahtını kuzeydeki Modena'ya taşımak zorunda kaldı.",
  kaynak:"data/devletler.js `ferrara` embedded kronoloji: \"Ferrara, meşru varis yokluğuyla Papalık Devleti'ne ilhak edildi, hanedan Modena'ya çekildi\"" },

{ t:"1859-01-01", b:"Modena'nın Sardinya-Piyemonte'ye katılması", tur:"birlesme", onem:5, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["ferrara","este","milliyetcilik","son"],
  d:"II. Bağımsızlık Savaşı'nın yarattığı devrimci dalgada Modena'daki Este dükü tahtından indirildi ve bölge halkoylamasıyla Sardinya-Piyemonte'ye katıldı; altı asırlık Este hanedanlığı böylece son buldu.",
  kaynak:"data/devletler.js `ferrara` (t:\"1859-01-01\"): \"İtalyan birleşme hareketiyle Modena da Sardinya-Piyemonte'ye katıldı\"" },

// ══════════════════════════════════════════════════════════════════
// VII. SAVOYA → SARDİNYA-PİYEMONTE KRALLIĞI → İTALYA KRALLIĞI (Torino → Roma)
// ══════════════════════════════════════════════════════════════════

{ t:"1416-02-19", b:"Savoya'nın dükalığa yükseltilmesi", tur:"kurulus", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["piyemonte","savoya","hanedan"],
  d:"İmparator Sigismund, VIII. Amedeo'yu Alp geçitlerini denetleyen kadim Savoya kontluğunun dükü ilan etti; hanedan bu unvanla üç asır boyunca Fransa ile İtalya arasındaki jeopolitik menteşe konumunu koruyacaktı.",
  kaynak:"data/devletler.js `savoya` embedded kronoloji: \"İmparator Sigismund, VIII. Amedeo'yu Savoya Dükü ilan etti\"" },

{ t:"1563-01-01", b:"Başkentin Chambéry'den Torino'ya taşınması", tur:"idari", onem:3, dunya:1, kapsam:"ic", yer_id:"Torino",
  etiket:["piyemonte","savoya","idari"],
  d:"II. Emanuele Filiberto, hanedanın Alp'in Fransa tarafındaki geleneksel başkenti Chambéry'den, İtalyan tarafındaki Torino'ya taşınmasına karar verdi; bu, Savoya hanedanının ağırlık merkezinin giderek İtalya'ya kaymasının simgesel başlangıcıydı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1720-08-02", b:"Sardinya Krallığı unvanının alınması", tur:"kurulus", onem:5, dunya:3, kapsam:"dis", yer_id:"Torino",
  etiket:["piyemonte","savoya","hanedan","kurulus"],
  d:"II. Vittorio Amedeo, kısa süre önce elde ettiği Sicilya tacını Avusturya ile takas ederek Sardinya Krallığı unvanını aldı; Savoya hanedanı böylece \"dük\"lükten \"kral\"lığa yükseldi — bu unvan bir buçuk asır sonra birleşik İtalya'nın kraliyet çatısı olacaktı.",
  kaynak:"data/devletler.js `sardinya-piyemonte` embedded kronoloji: \"Savoya Dükü Amedeo, Sicilya'yı Avusturya'ya devredip Sardinya Krallığı unvanını aldı\" (t:\"1720-08-02\")" },

{ t:"1798-12-09", b:"Piyemonte'nin Fransa'ya ilhakı", tur:"isgal", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["piyemonte","isgal"],
  d:"Fransız Devrim orduları önceki yıllarda Savoy ve Nice'i ilhak etmişti; şimdi de anakara Piyemonte doğrudan Fransız idaresine alındı, kraliyet hanedanı ada olan Sardinya'ya sığınmak zorunda kaldı — krallığın en küçüldüğü dönemdir.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1814-05-20", b:"Viyana sonrası restorasyon — Cenova'nın eklenmesi", tur:"kurulus", onem:4, dunya:2, kapsam:"dis", yer_id:"Torino",
  etiket:["piyemonte","diplomasi"],
  d:"Napolyon'un düşüşüyle Savoya hanedanı Torino'ya döndü; Viyana Kongresi krallığı yalnız eski sınırlarına iade etmekle kalmayıp eski Ceneviz Cumhuriyeti topraklarını da katarak genişletti — krallık böylece Kuzeybatı İtalya'nın en güçlü devleti hâline geldi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1821-03-10", b:"Piyemonte İsyanı — anayasa talebi", tur:"isyan", onem:4, dunya:2, kapsam:"ic", yer_id:"Torino",
  etiket:["piyemonte","isyan","anayasa"],
  d:"Napoli'deki Carbonari isyanından ilhamla subaylar anayasa talebiyle ayaklandı; Kral I. Vittorio Emanuele tahttan çekildi, kardeşi Carlo Felice ise Avusturya yardımıyla isyanı bastırdı. Hareket bastırılsa da, Piyemonte'de liberal-milliyetçi fikirlerin köklerini derinleştirdi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1848-03-04", b:"Statuto Albertino'nun ilanı", tur:"anayasa", onem:5, dunya:3, kapsam:"ic", yer_id:"Torino",
  etiket:["piyemonte","anayasa","reform"],
  d:"Kral Carlo Alberto, 1848 devrim dalgasının baskısıyla anayasal bir monarşi kuran Statuto Albertino'yu ilan etti; belge yalnız Piyemonte'de değil, 1861'de bütün birleşik İtalya Krallığı'nın (ve 1946'ya kadar) temel anayasası olarak kalacaktı — İtalya siyasî tarihinin en uzun ömürlü anayasal metnidir.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1848-03-23", b:"I. Bağımsızlık Savaşı'nın başlaması", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["piyemonte","askeri","milliyetcilik"],
  d:"Milano'nun Avusturya'ya karşı ayaklanmasından cesaret alan Carlo Alberto, Lombardiya'yı \"kurtarma\" gerekçesiyle Avusturya'ya savaş açtı; savaş bir yıl sonra Piyemonte'nin Novara'da ağır yenilgisiyle sonuçlanacak olsa da, İtalyan milliyetçi hareketinin ilk düzenli ordu-devlet girişimiydi.",
  kaynak:"data/devletler.js `sardinya-piyemonte` embedded kronoloji: \"I. Bağımsızlık Savaşı'nda Avusturya'ya karşı savaştı\" (t:\"1848-03-23\")" },

{ t:"1849-03-23", b:"Novara Savaşı yenilgisi — Carlo Alberto'nun tahttan çekilmesi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["piyemonte","askeri"],
  d:"Avusturya Mareşali Radetzky, Piyemonte ordusunu Novara'da kesin bir yenilgiye uğrattı; Carlo Alberto aynı gün tahttan çekilip sürgüne gitti, yerine oğlu II. Vittorio Emanuele geçti. Yenilgiye rağmen yeni kral, Statuto Albertino'yu yürürlükte tutarak Piyemonte'yi İtalya'da anayasal düzenin tek kalesi hâline getirdi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1852-11-04", b:"Cavour'un başbakan olması", tur:"siyaset", onem:5, dunya:2, kapsam:"ic", yer_id:"Torino",
  etiket:["piyemonte","siyaset","diplomasi"],
  d:"Camillo Benso di Cavour, Piyemonte hükümetinin başına geçti; ekonomik modernleşme ve büyük güçlerle dikkatli ittifaklar kurma stratejisiyle, İtalyan birleşmesini askerî değil diplomatik bir proje hâline getirecek adamdı. Sonraki dokuz yıl, esasen onun siyasetinin tarihidir.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1855-01-10", b:"Kırım Savaşı'na katılım kararı", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis", yer_id:"Torino",
  etiket:["piyemonte","diplomasi","askeri"],
  d:"Cavour, doğrudan bir çıkarı olmamasına rağmen küçük bir kolordu göndererek Osmanlı-İngiliz-Fransız ittifakı yanında Kırım Savaşı'na katıldı; hesap, savaş sonrası Paris Barış Kongresi'nde Piyemonte'ye \"İtalyan meselesi\"ni büyük güçlerin önüne getirme fırsatı vermekti — ve tam da öyle oldu.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1858-07-21", b:"Plombières görüşmesi — Cavour-Napolyon III gizli anlaşması", tur:"diplomasi", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["piyemonte","diplomasi"],
  d:"Cavour, Fransa İmparatoru III. Napolyon ile gizlice buluşup Avusturya'ya karşı ortak bir savaş ve savaş sonrası toprak paylaşımı (Piyemonte Lombardiya-Venedik'i alacak, Fransa karşılığında Savoy ve Nice'i alacak) üzerinde anlaştı; bu gizli pazarlık, bir yıl sonraki II. Bağımsızlık Savaşı'nın diplomatik zeminini kurdu.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1859-04-29", b:"II. Bağımsızlık Savaşı'nın başlaması", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["piyemonte","askeri","milliyetcilik"],
  d:"Avusturya, Piyemonte'nin seferberliğini durdurmasını isteyen bir ültimatom verip reddedilince savaş ilan etti — tam olarak Cavour'un Plombières'te tasarladığı senaryoydu. Fransız-Piyemonte ordusu birkaç ay içinde Lombardiya'yı ele geçirecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1859-06-04", b:"Magenta Savaşı", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["piyemonte","askeri"],
  d:"Fransız-Piyemonte kuvvetleri Avusturya ordusunu Magenta'da yenip Milano yolunu açtı; savaş sırasında kullanılan koyu mor-kırmızı boya rengine bu zaferin adı verildi (magenta rengi).",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1859-06-24", b:"Solferino Savaşı", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["piyemonte","askeri"],
  d:"On dokuzuncu yüzyılın en büyük çaplı savaşlarından biri olan Solferino'da Fransız-Piyemonte ordusu Avusturya'yı kesin biçimde yendi. Savaş alanındaki korkunç manzarayı gören İsviçreli işadamı Henry Dunant'ın tanıklığı, birkaç yıl sonra Uluslararası Kızılhaç Komitesi'nin kurulmasına doğrudan yol açacaktı — savaşın İtalyan birleşmesi dışındaki en kalıcı mirası budur.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1859-07-11", b:"Villafranca Ateşkesi", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["piyemonte","antlasma","diplomasi"],
  d:"III. Napolyon, Prusya'nın müdahale tehdidinden ve savaşın beklenenden kanlı gitmesinden ürkerek Cavour'a danışmadan Avusturya ile ateşkes imzaladı; Piyemonte yalnız Lombardiya'yı aldı, Venedik Avusturya'da kaldı. Cavour öfkeyle istifa etti ama Lombardiya kazanımı kalıcı oldu.",
  kaynak:"data/devletler.js `sardinya-piyemonte` embedded kronoloji: \"II. Bağımsızlık Savaşı'nda Fransa ile birlikte Avusturya'yı yenip Lombardiya'yı kazandı\" (t:\"1859-07-11\")" },

{ t:"1860-03-24", b:"Torino Antlaşması — Nice ve Savoy'un Fransa'ya devri", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", yer_id:"Torino",
  etiket:["piyemonte","toprak-kayip","antlasma"],
  d:"Plombières'teki gizli sözün gereği yerine getirildi: Piyemonte, Fransız desteğinin karşılığı olarak hanedanın kadim beşiği Savoy'u ve Nice'i (Garibaldi'nin doğum yeri) Fransa'ya devretti — birleşme sürecinin İtalya'nın kendi eski topraklarından ödediği tek büyük bedeldi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1860-11-04", b:"Orta İtalya plebisitlerinin sonuçlanması", tur:"birlesme", onem:4, dunya:4, kapsam:"ic", yer_id:"Torino",
  etiket:["piyemonte","milliyetcilik","anayasa"],
  d:"Toskana, Parma, Modena ve Papalık'ın kuzey eyaletleri (Romagna, Marche, Umbria) halkoylamalarıyla art arda Piyemonte'ye katıldı; birleşme, Garibaldi'nin güneydeki askerî fetihleriyle eşzamanlı olarak kuzeyde diplomatik-anayasal yoldan tamamlanıyordu.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1861-03-17", b:"İtalya Krallığı'nın ilanı", tur:"kurulus", onem:5, dunya:5, kapsam:"ic", yer_id:"Torino",
  etiket:["italya-birlik","milliyetcilik","kurulus"],
  d:"Torino'da toplanan yeni parlamento, II. Vittorio Emanuele'yi birleşik İtalya Krallığı'nın kralı ilan etti — unvanını \"II. Vittorio Emanuele\" olarak koruyarak (Sardinya kralı sayısını sürdürerek) Piyemonte'nin öncü rolünü simgeledi. On üç asır sonra İtalyan yarımadası (Venedik ve Roma hariç) ilk kez tek bir devlet çatısı altında birleşti.",
  kaynak:"İngilizce Wikipedia, 'Kingdom of Italy (1861-1946)': \"This allowed the Sardinian government to declare a united Italian kingdom on 17 March 1861\" — bu oturumda WebFetch ile doğrulandı; tarih data/devletler.js `italya` (f:) ile birebir uyumlu" },

{ t:"1861-06-06", b:"Cavour'un ölümü", tur:"olum", onem:4, dunya:2, kapsam:"ic", yer_id:"Torino",
  etiket:["italya-birlik","siyaset"],
  d:"Birleşmenin mimarı Cavour, krallığın ilanından yalnızca üç ay sonra ateşli bir hastalıktan öldü; Roma ve Venedik'in henüz krallığa katılmadığı, \"işin bittiği\" bir anda liderini kaybeden genç devlet, birleşmeyi tamamlama görevini onsuz üstlenecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1862-08-29", b:"Aspromonte — Garibaldi'nin Roma seferinin durdurulması", tur:"kriz", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["italya-birlik","askeri","kriz"],
  d:"Garibaldi, hükümetin onayı olmadan Roma'yı Papalık'tan almak için gönüllü topladı; kral II. Vittorio Emanuele, Fransa'yı kızdırmaktan çekinerek düzenli orduyu Garibaldi'nin üstüne gönderdi ve Aspromonte'de kısa bir çatışmada Garibaldi yaralanıp esir alındı — birleşme hareketinin kendi içindeki devlet-gönüllü gerilimini açığa çıkaran olaydır.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1866-06-20", b:"III. Bağımsızlık Savaşı'nın ilanı", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","askeri","milliyetcilik"],
  d:"İtalya, Prusya ile ittifak kurup Avusturya'ya savaş açtı; amaç, Avusturya Prusya'ya karşı savaşırken Venedik'i almaktı. İtalyan ordusu Custoza'da karada, donanması Lissa'da denizde yenilse de, Prusya'nın Königgrätz'de kazandığı zafer İtalya'yı savaşın galip tarafına taşıdı.",
  kaynak:"data/devletler.js `italya` embedded kronoloji: \"III. Bağımsızlık Savaşı ile Venedik'i kazandı\" (yıl 1866 olarak veriliyor, gün bu oturumda ayrıca doğrulanmadı)" },

{ t:"1866-10-21", b:"Venedik plebisiti", tur:"birlesme", onem:5, dunya:4, kapsam:"ic", yer_id:"Venedik",
  etiket:["italya-birlik","milliyetcilik","venedik"],
  d:"Savaş alanında yenilmiş olmasına rağmen, Prusya'nın zaferinden yararlanan İtalya, Avusturya'nın Venedik'i önce Fransa'ya devretmesi (Fransa'nın ardından İtalya'ya bırakması) yoluyla bölgeyi devraldı; halkoylamasında Venedik ve çevresi ezici çoğunlukla İtalya Krallığı'na katılmayı onayladı. Beş asırlık bağımsız (sonra Avusturya idaresindeki) Venedik tarihi burada İtalya'nın bir vilayeti olarak devam etti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı; olay data/kronoloji_venedik.js'te de (farklı açıdan) geçiyor olabilir, bu dosyada MÜKERRER yazılmadı, yalnız İtalya Krallığı perspektifinden bir kez" },

{ t:"1867-11-03", b:"Mentana Savaşı — Garibaldi'nin ikinci Roma girişiminin durdurulması", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","askeri"],
  d:"Garibaldi'nin gönüllüleri yine hükümetin onayı olmadan Roma'ya yürüdü; ama Roma'yı koruyan Fransız garnizonu (yeni icat edilen Chassepot tüfekleriyle) gönüllüleri Mentana'da kesin biçimde durdurdu. Roma sorunu ancak üç yıl sonra, Fransa'nın kendi savaşıyla meşgul olmasıyla çözülecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1871-07-02", b:"Roma'nın resmen başkent olması", tur:"idari", onem:4, dunya:3, kapsam:"ic", yer_id:"Roma",
  etiket:["italya-birlik","idari"],
  d:"Roma'nın önceki yıl alınmasının ardından kral II. Vittorio Emanuele şehre resmî girişini yaptı ve başkent Floransa'dan Roma'ya taşındı; İtalya Krallığı'nın toprak ve idari birleşmesi böylece fiilen tamamlandı.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1882-05-20", b:"Üçlü İttifak'ın imzalanması", tur:"ittifak", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","ittifak","diplomasi"],
  d:"İtalya, Fransa ile Tunus üzerine yaşadığı sömürge rekabetinin ardından Almanya ve Avusturya-Macaristan ile savunma amaçlı bir ittifak imzaladı — ironik biçimde, Avusturya'ya karşı üç bağımsızlık savaşı vermiş bir devlet, şimdi o devletle aynı ittifak masasındaydı. Bu ittifak sistemi, otuz iki yıl sonra I. Dünya Savaşı'nın patlak vermesindeki blok yapısının kurucu taşlarından biri olacaktı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1896-03-01", b:"Adwa Savaşı yenilgisi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","askeri","kolonyalizm"],
  d:"İtalya'nın Habeşistan'ı sömürgeleştirme girişimi, İmparator II. Menelik'in ordusuna Adwa'da ağır bir yenilgiyle sonuçlandı — bir Afrika devletinin bir Avrupa sömürgeci gücünü açık savaşta yenip bağımsızlığını koruduğu, dönemin nadir örneklerinden biri. Yenilgi İtalya'da hükümetin düşmesine yol açtı ve sömürge hırslarını on beş yıl geciktirdi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1900-07-29", b:"I. Umberto'nun suikastı", tur:"olum", onem:3, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["italya-birlik","kriz"],
  d:"Kral I. Umberto, anarşist Gaetano Bresci tarafından Monza'da tabancayla öldürüldü; suikast, Bresci'nin bir yıl önce hükümetin işçi gösterilerine ateş açtırmasının (Bava-Beccaris Katliamı) intikamıydı. Tahta oğlu III. Vittorio Emanuele geçti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1908-12-28", b:"Messina Depremi", tur:"felaket", onem:4, dunya:2, kapsam:"ic", yer_id:"Messina",
  etiket:["italya-birlik","kriz"],
  d:"Sicilya-Kalabriya boğazını vuran 7,1 büyüklüğündeki deprem ve ardından gelen tsunami, Messina şehrinin neredeyse tamamını yıktı; tahmini yüz binin üzerinde can kaybıyla Avrupa tarihinin en yıkıcı doğal afetlerinden biri oldu.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1911-09-29", b:"Trablusgarp Savaşı'nın ilanı", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","askeri","kolonyalizm"],
  d:"İtalya, Osmanlı Devleti'ne son Kuzey Afrika vilayeti Trablusgarp'ı devretmesi için ültimatom verip reddedilince savaş ilan etti; bu, İtalya'nın birleşmesinden sonraki ilk büyük sömürgeci savaşıydı ve tarihte uçağın askerî amaçla ilk kez kullanıldığı çatışma olarak da anılır.",
  kaynak:"data/devletler.js `italya` embedded kronoloji: \"Trablusgarp Savaşı'nı başlattı\" (t:\"1911-09-29\"); TDV `trablusgarp` (gövdesi okundu) farklı bir tarih (\"1 Eylül 1911\") veriyor — bu oturumda İKİ KAYNAK ÇELİŞTİ, data/devletler.js'in tarihi (uluslararası akademik konsensüsle de örtüşen 29 Eylül) esas alındı, çelişki KOORDİNATÖRE bildirilecek" },

{ t:"1911-10-05", b:"Trablus'un işgali", tur:"isgal", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","askeri","kolonyalizm"],
  d:"İtalyan donanmasının bombardımanının ardından deniz piyadeleri Trablus şehrine çıkarma yaptı; kısa sürede kıyı şeridi ele geçirilse de iç bölgelerdeki (Osmanlı destekli, Mustafa Kemal'in de gönüllü katıldığı) direniş yıllarca sürecekti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1912-05-04", b:"Rodos ve Oniki Ada'nın işgali", tur:"isgal", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","askeri","kolonyalizm"],
  d:"İtalya, Osmanlı'yı barışa zorlamak için Trablusgarp cephesinin dışında Ege'de bir ikinci cephe açıp Rodos ve çevresindeki on iki adayı işgal etti; adaların \"geçici\" olduğu antlaşmayla belirtilse de fiiliyatta otuz yıldan uzun süre İtalyan idaresinde kalacaktı.",
  kaynak:"data/devletler.js `oniki-ada-italyan` embedded kronoloji: \"İtalya, Rodos ve Oniki Ada'yı işgal etti\" (t:\"1912-05-04\")" },

{ t:"1912-10-18", b:"Uşi (Ouchy/Lozan) Antlaşması", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","antlasma","kolonyalizm"],
  d:"Osmanlı Devleti, Balkan Savaşı'nın patlak vermesiyle iki cepheli savaşı sürdüremeyeceğini görüp İsviçre'nin Uşi şehrinde imzalanan antlaşmayla Trablusgarp ve Bingazi'yi İtalya'ya bıraktı; Kuzey Afrika'daki son Osmanlı toprağı böylece kaybedildi.",
  kaynak:"TDV `trablusgarp` (gövdesi okundu): \"1912'de İsviçre'nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika'daki bu son vilâyetini İtalya'ya terkettiğini kabul etti\" — bu oturumda WebFetch ile doğrulandı; tarih data/devletler.js `italya` ve `oniki-ada-italyan` embedded kronolojisiyle birebir uyumlu" },

{ t:"1914-08-03", b:"Tarafsızlık ilanı", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis", yer_id:"Roma",
  etiket:["italya-birlik","diplomasi"],
  d:"I. Dünya Savaşı patlak verince İtalya, Üçlü İttifak'ın yalnız savunma savaşlarında geçerli olduğunu ileri sürerek (Avusturya-Macaristan'ın Sırbistan'a saldırısı saldırgan bir hareketti) tarafsızlığını ilan etti; hükümet aslında hangi tarafa katılırsa daha çok toprak kazanacağını hesaplayan gizli pazarlıklara girmişti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1915-04-26", b:"Londra Gizli Antlaşması", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","antlasma","diplomasi"],
  d:"İtalya, İtilaf Devletleri ile gizlice imzaladığı antlaşmada Trentino, Güney Tirol, Trieste, İstria ve Dalmaçya'nın büyük kısmını vaat edilmesi karşılığında bir ay içinde İtilaf saflarında savaşa girmeyi kabul etti; bu vaatlerin savaş sonunda ancak kısmen tutulması, faşizmin yükselişini besleyecek \"sakatlanmış zafer\" söyleminin temelini atacaktı.",
  kaynak:"İngilizce Wikipedia, 'Italian entry into World War I': \"The Treaty of London was signed on 26 April 1915\" — bu oturumda WebFetch ile doğrulandı" },

{ t:"1915-05-23", b:"Avusturya-Macaristan'a savaş ilanı", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"Roma",
  etiket:["italya-birlik","askeri","ittifak"],
  d:"İtalya, Londra Antlaşması'ndaki taahhüdünü yerine getirip eski müttefiki Avusturya-Macaristan'a savaş ilan etti; Almanya'ya karşı savaş ilanı ise ancak 1916'da gelecekti. İtalya böylece I. Dünya Savaşı'na fiilen girdi ve Alp cephesinde üç yıl sürecek yıpratıcı bir mevzi savaşı başladı.",
  kaynak:"İngilizce Wikipedia, 'Italian entry into World War I': \"Italy declared war against Austria-Hungary on 23 May 1915\" — bu oturumda WebFetch ile doğrulandı; tarih data/devletler.js `italya` embedded kronolojisiyle birebir uyumlu" },

{ t:"1917-10-24", b:"Caporetto Bozgunu", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","askeri"],
  d:"Alman takviyeli Avusturya-Macaristan kuvvetleri, yeni sızma taktikleriyle İtalyan cephesini Caporetto'da yardı; İtalyan ordusu yüz kilometreden fazla geri çekilmek zorunda kaldı, yüz binlerce asker esir düştü. Bozgun, İtalyan siyasî hafızasında ulusal utancın simgesi olarak kaldı (\"Caporetto\" kelimesi İtalyancada hâlâ \"büyük felaket\" anlamında kullanılır).",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1918-10-24", b:"Vittorio Veneto Zaferi'nin başlaması", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","askeri"],
  d:"Caporetto'nun tam bir yıl dönümünde başlatılan büyük İtalyan taarruzu, çökmekte olan Avusturya-Macaristan ordusunu kesin biçimde dağıttı; zafer, İtalya'nın savaştan galip çıkmasını sağladı ve Caporetto'nun utancını simgesel olarak sildi.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1918-11-03", b:"Villa Giusti Mütarekesi — Avusturya-Macaristan'ın teslimi", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","antlasma","son"],
  d:"Vittorio Veneto zaferinin ardından Avusturya-Macaristan, İtalya ile ateşkes imzalayıp savaştan çekildi; mütareke, çok uluslu imparatorluğun dağılma sürecini de hızlandırdı. Trentino ve Trieste böylece fiilen İtalyan kontrolüne geçti.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1919-04-28", b:"Antalya ve çevresinin işgali", tur:"isgal", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["italya-birlik","isgal","kolonyalizm"],
  d:"Londra Antlaşması'nda vaat edilen ama Paris Barış Konferansı'nda tam karşılığını bulamayan İtalya, Yunan çıkarmasından önce davranıp Antalya ve Güneybatı Anadolu'yu tek taraflı işgal etti; işgal, Millî Mücadele'nin güney-batı cephelerinden birini oluşturdu ve 1921'de İtalyan-Türk anlaşmasıyla sona erecekti.",
  kaynak:"data/devletler.js `italya` embedded kronoloji: \"Antalya ve çevresini işgal etti (Millî Mücadele cephelerinden biri)\" (t:\"1919-04-28\")" },

{ t:"1919-09-12", b:"D'Annunzio'nun Fiume'yi işgali", tur:"isgal", onem:4, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["italya-birlik","milliyetcilik","kriz"],
  d:"Şair-asker Gabriele D'Annunzio, Paris Barış Konferansı'nın İtalya'ya vermediği Fiume limanını birkaç bin gönüllüyle işgal edip \"Kaptanlık\" ilan etti; on beş ay süren bu işgal, resmî hükümetin yetkisini tanımayan bir paramiliter hareketin ilk büyük örneği olarak faşizmin estetiğine ve yöntemlerine doğrudan model oldu.",
  kaynak:"bulunamadı — gün YAKLAŞIK, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1922-10-28", b:"Roma Yürüyüşü — Mussolini'nin iktidara gelişi", tur:"darbe", onem:5, dunya:5, kapsam:"ic", yer_id:"Roma",
  etiket:["italya-birlik","kriz","siyaset"],
  d:"Binlerce Kara Gömlekli faşist milis, Benito Mussolini önderliğinde Roma'ya doğru yürüyüşe geçti; Kral III. Vittorio Emanuele, sıkıyönetim ilan edip orduyla müdahale etmek yerine iki gün sonra Mussolini'yi hükümeti kurmaya davet etti. Tek bir silah patlamadan gerçekleşen bu iktidar devri, İtalya'da yirmi bir yıl sürecek faşist rejimin başlangıcı ve 20. yüzyıl Avrupa siyasetinin en dönüştürücü olaylarından biri oldu.",
  kaynak:"İngilizce Wikipedia, 'March on Rome': \"On 28 October, the fascist demonstrators and Blackshirt paramilitaries approached the capital\"; \"On 30 October 1922, the King appointed Mussolini as Prime Minister\" — bu oturumda WebFetch ile doğrulandı" },

// ══════════════════════════════════════════════════════════════════
// VIII. RÖNESANS, BİLİM VE SANAT — kova dengesini düzeltmek için eklenen kesit
// ══════════════════════════════════════════════════════════════════
// 🔴 İlk 181 maddenin ölçümü kova dağılımını %72 askerî-siyasî / %1 bilim /
// %4 kültür-sanat gösterdi — şartname §2'nin "en sık yapılan hata" dediği
// tam örüntü. Bu on bir madde onu düzeltmek için SONRADAN eklendi; her biri
// yine kendi devletine (etiket) bağlı, ayrı bir "genel İtalya kültürü"
// başlığı DEĞİL.

{ t:"1494-01-01", b:"Luca Pacioli'nin çift girişli muhasebeyi kodifiye etmesi (Milano bağlantısı)", tur:"iktisat", onem:4, dunya:4, kapsam:"ic", yer_id:"Milano",
  etiket:["milano","bilim","iktisat"],
  d:"Toskanalı keşiş-matematikçi Luca Pacioli, 'Summa de Arithmetica, Geometria, Proportioni et Proportionalita' adlı eserinde Venedikli tüccarların pratikte kullandığı çift girişli muhasebe yöntemini ilk kez sistemli biçimde yazıya döktü (kitap Venedik'te basıldı). Pacioli birkaç yıl sonra Ludovico Sforza'nın Milano sarayına yerleşip Leonardo da Vinci ile aynı çatı altında çalışacak, ona geometri dersleri verecekti — modern muhasebenin kurucu metni Milano-Venedik-Floransa üçgeninin ortak ürünüdür.",
  kaynak:"bulunamadı — standart akademik konsensüs (Pacioli literatüründe yaygın kabul); bu oturumda birincil metin OKUNMADI. ⚠️ Kitabın basım yeri Venedik'tir, bu madde Pacioli'nin sonraki Milano bağlantısı üzerinden bu dosyaya alındı — koordinatöre bildirilecek bir sınır vakası" },

{ t:"1508-01-01", b:"Raphael'in Vatikan Odaları'nı (Stanze) çalışmaya başlaması", tur:"sanat", onem:4, dunya:3, kapsam:"ic", yer_id:"Roma",
  etiket:["papalik","sanat","kultur"],
  d:"Papa II. Julius, genç Raphael'i Vatikan sarayının özel dairelerini freskle donatmakla görevlendirdi; buradaki 'Atina Okulu' (Antik filozofları Rönesans sanatçılarının yüzleriyle betimleyen kompozisyon), Batı sanatının klasik-Hristiyan sentezinin en çok yeniden üretilen imgelerinden biri oldu.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1582-10-04", b:"Gregoryen takviminin ilanı", tur:"bilim", onem:5, dunya:5, kapsam:"dis", yer_id:"Roma",
  etiket:["papalik","bilim","reform"],
  d:"Papa XIII. Gregory, Jülyen takviminin astronomik yılla biriken sapmasını düzeltmek için hazırlanan yeni takvimi bir fermanla yürürlüğe koydu; 4 Ekim'i izleyen gün doğrudan 15 Ekim ilan edildi. Katolik Avrupa'nın çoğu birkaç yıl içinde, Protestan ve Ortodoks dünyası ise yüzyıllar sonra benimseyecekti — bugün dünyanın neredeyse tamamının kullandığı sivil takvimin kaynağı, papalığın bilimsel-idarî otoritesinin en kalıcı mirasıdır.",
  kaynak:"bulunamadı — gün YAYGIN KABUL, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1550-01-01", b:"Vasari'nin 'Sanatçıların Hayatları'nı yayımlaması", tur:"kultur", onem:4, dunya:3, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","kultur","sanat"],
  d:"Ressam-mimar Giorgio Vasari, Floransa merkezli İtalyan Rönesans sanatçılarının (Giotto'dan Michelangelo'ya) biyografilerini topladığı 'Le Vite' adlı eserini yayımladı; kitap yalnız bir kaynak değil, sanat tarihi disiplininin kendisinin kurucu metni sayılır ve 'Rönesans' kavramının kendisini büyük ölçüde bu anlatı biçimlendirmiştir.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1581-01-01", b:"Uffizi Galerisi'nin kurulması", tur:"kultur", onem:3, dunya:2, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","toskana","kultur","sanat"],
  d:"Büyük Dük I. Francesco, babası Cosimo I'in idarî büro binası (uffizi — 'ofisler') olarak yaptırdığı yapının üst katını Medici koleksiyonunun sergilendiği bir galeriye dönüştürdü; dünyanın ilk modern sanat müzelerinden biri sayılan Uffizi, bugün hâlâ Rönesans resminin en zengin koleksiyonlarından birini barındırıyor.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1600-10-06", b:"İlk opera 'Euridice'nin Floransa'da sahnelenmesi", tur:"sanat", onem:4, dunya:4, kapsam:"ic", yer_id:"Floransa",
  etiket:["floransa","sanat","kultur"],
  d:"Bestecı Jacopo Peri'nin, Floransalı hümanist bir çevrenin (Camerata) antik Yunan tragedyasını müzikle canlandırma deneylerinden doğan 'Euridice'si, Fransa Kralı IV. Henri ile Maria de' Medici'nin düğün kutlamaları vesilesiyle sahnelendi; günümüze tam metniyle ulaşan ilk opera olarak kabul edilir ve Floransa'yı bu yeni sanat formunun doğum yeri yapar — opera birkaç on yıl içinde Venedik ve sonra bütün Avrupa'ya yayılacaktı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs (temsilin 1600 Ekim'inde olduğu yaygın kabul)" },

{ t:"1451-01-01", b:"Kristof Kolomb'un Cenova'da doğması", tur:"kultur", onem:4, dunya:4, kapsam:"ic", yer_id:"Cenova",
  etiket:["ceneviz","kultur","kesif"],
  d:"Dünya tarihini değiştirecek 1492 seferinin kaptanı, bir Cenevizli dokumacı ailesinin oğlu olarak dünyaya geldi (kesin doğum günü belgelenmemiştir, yıl tarihçilerce yaygın kabul görür). Kolomb'un Cenova'da denizcilik ve haritacılık öğrenmesi, cumhuriyetin uzun deniz ticareti geleneğinin dolaylı ama en kalıcı mirası sayılır — kendisi İspanya adına sefer yapacak, doğduğu cumhuriyetin bu keşiften doğrudan payı olmayacaktı.",
  kaynak:"bulunamadı — doğum yılı standart akademik konsensüs, kesin gün tarihçiler arasında TARTIŞMALI (belgelenmemiş); bu oturumda birincil metin OKUNMADI" },

{ t:"1737-05-04", b:"San Carlo Operası'nın açılışı", tur:"sanat", onem:3, dunya:2, kapsam:"ic", yer_id:"Napoli",
  etiket:["napoli","sanat","kultur"],
  d:"Bourbon Kralı Carlos'un emriyle inşa edilen Teatro di San Carlo, dönemin Avrupa'sının en büyük opera binası olarak açıldı; Napoli bu tarihten itibaren, kendi bestecileriyle (Neapolitan opera okulu — Alessandro Scarlatti, Pergolesi, Cimarosa) 18. yüzyıl Avrupa müziğinin en etkili merkezlerinden birine dönüştü.",
  kaynak:"bulunamadı — gün YAYGIN KABUL, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1748-01-01", b:"Pompeii kazılarının başlaması", tur:"bilim", onem:4, dunya:4, kapsam:"ic", yer_id:"Napoli",
  etiket:["napoli","bilim","kultur"],
  d:"Bourbon Kralı Carlos'un emriyle, MS 79'da Vezüv'ün küllerinin altında kalan Roma şehri Pompeii'de sistemli kazılara başlandı (Herculaneum'da birkaç yıl önce başlamıştı); buluntular Avrupa'da neoklasik sanat akımını doğrudan besledi ve modern arkeoloji disiplininin doğuşuna zemin hazırladı — Napoli Krallığı'nın bilim tarihine en kalıcı katkısı budur.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs" },

{ t:"1778-08-03", b:"La Scala Operası'nın açılışı", tur:"sanat", onem:4, dunya:3, kapsam:"ic", yer_id:"Milano",
  etiket:["milano","sanat","kultur"],
  d:"Avusturya idaresindeki Milano'da, önceki tiyatronun yanmasının ardından inşa edilen Teatro alla Scala açıldı; bina kısa sürede dünyanın en prestijli opera sahnelerinden biri hâline geldi ve on dokuzuncu yüzyılda Verdi'nin çoğu eserinin prömiyerine ev sahipliği yapacaktı.",
  kaynak:"bulunamadı — gün YAYGIN KABUL, standart akademik konsensüs; bu oturumda ikincil doğrulama yapılmadı" },

{ t:"1764-01-01", b:"Beccaria'nın 'Suçlar ve Cezalar Hakkında'yı Milano'da yayımlaması", tur:"felsefe", onem:5, dunya:4, kapsam:"ic", yer_id:"Milano",
  etiket:["milano","felsefe","hukuk","reform"],
  d:"Milanolu hukukçu Cesare Beccaria, işkenceyi ve ölüm cezasını sistemli biçimde eleştiren 'Dei Delitti e delle Pene'yi anonim yayımladı; eser hızla bütün Avrupa'ya çevrildi ve modern ceza hukukunun (suçun cezayla orantılılığı, işkencenin reddi) kurucu metni sayıldı. Yirmi iki yıl sonra komşu Toskana'nın ölüm cezasını kaldıran ilk Avrupa devleti olmasının (bkz. Floransa bölümü) doğrudan fikrî kaynağıdır.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, standart akademik konsensüs (yayın yılı 1764 kesin, ay-gün belirsiz)" },

];
