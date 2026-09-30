// =====================================================================
// HABSBURG AVUSTURYA — ÇOK KÜNYELİ KRONOLOJİ EKİ (KRONO-ORTA-AVRUPA-0929, 29 Eylül 2026)
// =====================================================================
// Yol: `window.KRONOLOJI_COK_HABSBURG` → app.js `cokTarafliKronolojiEkle`
// her maddeyi `devlet:` / `devletler:` künyesine EKLER (ezmez; t+b mükerreri
// atar). ORTAK §4.1.
//
// KAPSAM: `data/kronoloji_habsburg.js`in (117 madde, 1526'dan başlıyor)
// YAZMADIĞI olaylar. Dosya 1526 Mohaç'tan başlıyordu, oysa `habsburg`
// künyesi 1282'den başlıyor. ⇒ 1282-1526 omurgası (Avusturya ve Tirol'ün
// kazanılması, 1515 veraset düzeni, 1521 paylaşımı, 1526 Bohemya seçimi)
// + Erdel'in Habsburg'a geçişinin üç basamağı + 1921 Burgenland.
// O dosyadaki, künye `kronoloji` alanındaki ve çekirdekteki (`olaylar*.js`)
// maddeler TEKRARLANMADI (ör. Cetin 1527 olaylar_p0050.js'te,
// Orsova 1790 olaylar_p0068b.js'te "Eski Hırsova" adıyla var).
//
// KÜNYELER (devletler.js'ten okundu): habsburg 1282-01-01→1918-11-11 ·
//   erdel 1570-01-01→1711-04-30 · avusturya-cumhuriyet 1918-11-12→ ·
//   macaristan-naiplik 1918-11-16→
// Erdel iş bölümü KRONO-TUNA-0929 ile yapıldı (M-5432/M-5434): Erdel'in
// iç kronolojisi onda; Habsburg'a geçiş basamakları burada.
//
// KAYNAK: Her maddenin `kaynak:` alanındaki sayfa bu oturumda OKUNDU
// (WebFetch, 29 Eylül 2026). Kurumsal: Österreichisches Staatsarchiv,
// Wien Geschichte Wiki, Magyar Katolikus Lexikon, TRUPPENDIENST (BMLV).
// Gün bilinmiyorsa YYYY-01-01 + `gun:` (CLAUDE.md §4).
// =====================================================================

window.KRONOLOJI_COK_HABSBURG = [

// ───────────────────────── 1282-1526 · AVUSTURYA'NIN KAZANILMASI

{ t:"1282-12-27", b:"Augsburg'da Rudolf oğullarını Avusturya ve Steiermark dükü yaptı — Habsburg'un Avusturya'daki başlangıcı", tur:"kurulus",
  onem:5, dunya:3, kapsam:"ic", etiket:["kurulus","hanedan","konu-hanedan","konu-siyasi"],
  yer_id:"Augsburg", devlet:"habsburg", gun:"27 Aralık 1282",
  d:"Kral I. Rudolf, Augsburg'daki saray toplantısında oğulları Albrecht ile Rudolf'u Avusturya ve Steiermark dükalıklarıyla, Krain ve Windische Mark ile birlikte ortaklaşa (zu gesamter Hand) len olarak verdi. Habsburgların Avusturya dükleri olarak yaklaşık 650 yıl sürecek hâkimiyeti bu tevcihle başlar; hanedanın adı bundan sonra Avusturya ile özdeşleşti.",
  ic_not_d:"`habsburg` künyesinin f: alanı 1282-01-01 (yıl başı). Kaynak günü 27 Aralık; künyeye öneri: denetim/KRONO-ORTA-AVRUPA-0929-KUNYE.md.",
  kaynak:"Österreichisches Staatsarchiv, HHStA AUR 1792 (sayfa okundu): \"König Rudolf I. belehnt seine Söhne Albrecht und Rudolf zu gesamter Hand mit den Herzogtümern Österreich und Steiermark sowie mit Krain und der Windischen Mark\", 27.12.1282" },

{ t:"1363-01-26", b:"Margarete Maultasch Tirol'ü Habsburglara devretti", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"ic", etiket:["toprak-kazanc","hanedan","konu-hanedan","konu-siyasi"],
  yer_id:"", odak_yer:"Innsbruck", devlet:"habsburg", gun:"26 Ocak 1363 (Bozen)",
  d:"Tirol kontesi Margarete 'Maultasch', ülke üzerindeki haklarını Habsburg dükleri IV. Rudolf, III. Albrecht ve III. Leopold'e devretti. Tirol, hanedanın İsviçre'deki eski toprakları ile Avusturya dükalıkları arasında kara köprüsü oldu; madenleri de sonraki yüzyıllarda Habsburg gücünün gelir kaynaklarından biri olacaktı.",
  ic_not_d:"Haritada Innsbruck, Landeck, Lienz 1526-08-29'a kadar `almanya` boyanıyor; öneri denetim/KRONO-ORTA-AVRUPA-0929-YERLESIM-ONERI.md.",
  kaynak:"Österreichisches Staatsarchiv, 'Archivale des Monats: Die Anfänge habsburgischer Großmachtpolitik – die Erwerbung Tirols' (sayfa okundu): \"Am 26. Jänner 1363 übertrug Margarete 'Maultasch' ihre Rechte auf das Land Tirol an die habsburgischen Herzöge Rudolf IV., Albrecht III. und Leopold III.\" · AT-OeStA/HHStA UR AUR 1363 I 26" },

{ t:"1515-07-17", b:"Viyana Prensler Toplantısı — Habsburg-Jagiello çifte nişanı ve karşılıklı veraset", tur:"diplomasi",
  onem:5, dunya:3, kapsam:"dis", etiket:["diplomasi","hanedan","evlilik","konu-hanedan","konu-diplomasi"],
  yer_id:"Viyana", devlet:"habsburg", gun:"17 Temmuz 1515 (hükümdarların Viyana'ya girişi; Stephansdom'daki nişanın günü kaynakta yok)",
  d:"İmparator I. Maximilian, Macaristan ve Bohemya kralı II. Ulászló ve Lehistan kralı I. Zygmunt, Viyana'da bir araya geldi. Stephansdom'da Ulászló'nun oğlu Lajos ile Maximilian'ın torunu Maria, Ulászló'nun kızı Anna ile de bir Habsburg torunu nişanlandı ve iki hanedan arasında karşılıklı veraset kararlaştırıldı. On bir yıl sonra Lajos'un Mohaç'ta ölmesi, Bohemya ve Macaristan taçlarının Habsburglara geçmesinin hukukî zeminini bu anlaşma sağladı.",
  kaynak:"Wien Geschichte Wiki, 'Wiener Fürstentag' (sayfa okundu): \"Am 17. Juli 1515 erfolgte der Einzug der Monarchen in Wien\"; nişanlar \"im Stephansdom\", düğünler 1521 ve 1522'de · Die Welt der Habsburger, 'Böhmen und Ungarn erheiraten: Eine Wiener Doppelhochzeit' (sayfa okundu): 1515 çifte düğün ve 1526 veraset" },

{ t:"1521-04-21", b:"Worms Paylaşım Antlaşması — Avusturya ülkeleri Ferdinand'a geçti", tur:"bolunme",
  onem:4, dunya:2, kapsam:"ic", etiket:["hanedan","bolunme","konu-hanedan","konu-siyasi"],
  yer_id:"", odak_yer:"Mainz", devlet:"habsburg", gun:"21 Nisan 1521 (Worms)",
  d:"V. Karl ile kardeşi Ferdinand arasında Worms'ta yapılan paylaşım antlaşması, Avusturya'daki Habsburg ülkelerini Ferdinand'a bıraktı. Hanedanın İspanyol ve Avusturya kolları böylece ayrılmaya başladı. Ferdinand bir yıl sonra Wiener Neustadt'a gelerek yönetimi fiilen üstlendi; 1526'da Bohemya ve Macaristan taçlarına aday olan da Avusturya kolunun bu yeni başıydı.",
  kaynak:"Wien Geschichte Wiki, 'Ferdinand I. (Heiliges Römisches Reich)' (sayfa okundu): \"aufgrund des am 21. April 1521 zu Worms abgeschlossenen Teilungsvertrags\" · \"im Juni 1522 nach Wiener Neustadt\"" },

{ t:"1526-10-22", b:"I. Ferdinand Bohemya kralı seçildi — Bohemya tacı Habsburg'a geçti", tur:"hukumdar",
  onem:5, dunya:3, kapsam:"ic", etiket:["hukumdar","hanedan","konu-hanedan","konu-siyasi"],
  yer_id:"Prag", devlet:"habsburg", gun:"22 Ekim 1526 seçim; taç giyme 24 Şubat 1527, Prag",
  d:"Mohaç'ta II. Lajos'un ölümünden sonra Bohemya zümreleri, ciddi bir rakip aday olmadığından Habsburglu Ferdinand'ı kral seçtiler. Bohemya tacına Moravya, Silezya ve Lusatia da bağlıydı. Böylece Bohemya taç ülkeleri 1918'e kadar sürecek Habsburg hâkimiyetine girdi; Ferdinand 24 Şubat 1527'de Prag'da taç giydi.",
  ic_not_d:"Haritada Bohemya taç ülkeleri (Prag, Brno, Olomouc, Breslau, Glatz…) 1526-08-29'da almanya→avusturya kırılıyor; gerçek devir bu seçimdir (55 gün sonra). Öneri: denetim/KRONO-ORTA-AVRUPA-0929-YERLESIM-ONERI.md.",
  kaynak:"Wien Geschichte Wiki, 'Ferdinand I. (Heiliges Römisches Reich)' (sayfa okundu): \"König von Böhmen (Wahl 22. Oktober 1526, Krönung 24. Februar 1527 in Prag)\" · Die Welt der Habsburger, 'Ferdinand I.: Neue Kronen für Habsburg' (sayfa okundu): \"Die Stände wählten ihn in Ermangelung anderer ernstzunehmender Kandidaten\"" },

// ───────────────────────── 1687-1691 · ERDEL'İN HABSBURG'A GEÇİŞİ

{ t:"1687-10-27", b:"Balázsfalva Antlaşması — Erdel'e Habsburg kışlakları ve garnizonları", tur:"antlasma",
  onem:4, dunya:2, kapsam:"dis", etiket:["antlasma","toprak-kazanc","konu-diplomasi","konu-askeri"],
  yer_id:"", odak_yer:"Erdel Belgradı (Gyulafehérvár)", devletler:["habsburg","erdel"], gun:"27 Ekim 1687 (Balázsfalva / Blaj)",
  d:"Harsány zaferinin ardından Erdel'e giren Lotaringiyalı Karl ile Prens I. Apafi Mihály'nin temsilcileri Balázsfalva'da anlaştı. Erdel, imparatorluk ordusuna kışlak ve ağır bir savaş vergisi vermeyi kabul etti; karşılığında prensliğin siyasi özerkliği güvenceye alındı. Osmanlı'ya tâbi prenslik bu anlaşmayla fiilen Habsburg askerî denetimine girdi.",
  ic_not_d:"Haritada Brassó, Erdel Belgradı ve Segesvár 1687-08-12'de (Harsány günü) tâbi→avusturya kırılıyor; o gün Erdel el değiştirmedi. Öneri: denetim/KRONO-ORTA-AVRUPA-0929-YERLESIM-ONERI.md. Erdel iş bölümü: KRONO-TUNA-0929 M-5434.",
  kaynak:"Magyar Katolikus Lexikon, 'Apafi' (sayfa okundu): \"Buda visszavétele után 1687. X. 27: a balázsfalvi szerződésben ~ pol. önállósága\"" },

{ t:"1688-05-09", b:"Erdel zümreleri Caraffa ile anlaşarak I. Leopold'ün egemenliğini tanıdı", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"dis", etiket:["toprak-kazanc","antlasma","konu-diplomasi","konu-siyasi"],
  yer_id:"", odak_yer:"Erdel Belgradı (Gyulafehérvár)", devletler:["habsburg","erdel"], gun:"9 Mayıs 1688",
  d:"Erdel'in elçileri, imparatorluk generali Antonio Caraffa ile yaptıkları anlaşmada I. Leopold'ü hükümdar olarak tanıdı ve Osmanlı himayesinden ayrılmayı kabul etti. Balázsfalva'nın askerî denetimi böylece siyasi bir bağlılığa dönüştü; prenslik unvanı yaşasa da Erdel artık Macar tacının Habsburg hükümdarına bağlanmıştı.",
  kaynak:"Magyar Katolikus Lexikon, 'Apafi' (sayfa okundu): \"1688. V. 9: a Caraffával kötött megállapodásban ~ követei elismerték I. Lipótot\"" },

{ t:"1691-12-04", b:"Diploma Leopoldinum — Erdel'in Habsburg monarşisi içindeki statüsü", tur:"kanun",
  onem:4, dunya:2, kapsam:"ic", etiket:["kanun","anayasa","idari","konu-hukuk","konu-idari"],
  yer_id:"Viyana", devlet:"habsburg", gun:"4 Aralık 1691 (metnin çıkışı); hükümdar onayı 16 Ekim 1690",
  d:"I. Leopold, Erdel zümrelerinin tekliflerine dayanan bir hükümdar beratıyla Erdel'in kamu hukuku statüsünü belirledi. Üç zümrenin eski ayrıcalıkları ve 'kabul edilmiş dört din'in serbestliği tanındı; ülke kendi idaresini korumakla birlikte Habsburg monarşisinin bir parçası oldu. Belge 1848'e kadar Erdel'in temel hukuku sayıldı.",
  ic_not_d:"`erdel` künyesinin kendi kronolojisinde aynı olay 1690-12-04 günüyle duruyor; kaynaklar 16 Ekim 1690 (onay) ile 4 Aralık 1691 (metin) veriyor, 4 Aralık 1690 hiçbirinde yok. Bkz. denetim/KRONO-ORTA-AVRUPA-0929-DUZELTME.md. `erdel` künyesine bağlanmadı ki panelde çift görünmesin (KRONO-TUNA-0929 M-5434).",
  kaynak:"Magyar Katolikus Lexikon, 'Diploma Leopoldinum' (sayfa okundu): \"I. 1691. XII. 4: az erdélyi m., székely és szász rendek állásfoglalását fogadja el\" · aynı sözlük, 'Apafi': \"az X. 16: kiadott, Erdély közjogi helyzetét szabályozó Diploma Leopoldinum\" (1690)" },

// ───────────────────────── 1921 · BURGENLAND

{ t:"1921-11-13", b:"Avusturya ordusu Burgenland'a girdi — bölge Avusturya Cumhuriyeti'ne katıldı", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"dis", etiket:["toprak-kazanc","askeri","konu-askeri","konu-siyasi"],
  yer_id:"Eisenstadt (Kismarton)", devletler:["avusturya-cumhuriyet","macaristan-naiplik"], gun:"13 Kasım 1921 (girişin başlangıcı)",
  d:"Saint-Germain ve Trianon antlaşmalarıyla Avusturya'ya bırakılan Batı Macaristan'ı (Burgenland) Macar gönüllü birlikleri aylarca elinde tutmuştu. 13 Ekim 1921 Venedik Protokolü'yle Ödenburg (Sopron) için halk oylaması kararlaştırıldı. Macar birlikleri çekildikten sonra Avusturya ordusu 13 Kasım'dan itibaren bölgeye girdi; Eisenstadt Avusturya'nın oldu, Sopron ise Aralık oylamasıyla Macaristan'da kaldı.",
  kaynak:"TRUPPENDIENST (BMLV), 'Ungarns Kampf um das Burgenland 1921' (sayfa okundu): \"Damit stand dem Einmarsch des Bundesheeres ab dem 13. November sowie der Ödenburger Volksabstimmung Mitte Dezember keine organisierte Freischar mehr im Wege\" · Venedik: \"am 13. Oktober 1921 in Venedig\"" },

];
