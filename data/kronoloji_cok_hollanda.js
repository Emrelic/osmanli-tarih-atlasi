// =====================================================================
// HOLLANDA — ÇOK KÜNYELİ KRONOLOJİ (KRONO-ATLANTIK-B-0929, 29 Eylül 2026)
// Oturum: KRONO-ATLANTIK-B-0929 · koordinatör: YILDIRIM BAYEZIT
// =====================================================================
// ⚠️ index.html'e ve arac/paketle.py'ye BAĞLANMADI — bağlamak koordinatörün işi.
//    Bağlanana kadar sitede görünmez (normal).
//
// ── BAĞLAMA YOLU (ORTAK §4.1) ─────────────────────────────────────
// window.KRONOLOJI_COK_HOLLANDA → app.js cokTarafliKronolojiEkle: her madde
// `devlet:` / `devletler:[...]` künyelerine EKLENİR (ezmez; t+b tekrarı atlanır).
// Mevcut kronoloji_hollanda.js'e (42 madde) madde EKLENMEDİ; bu dosya onun
// BOŞLUKLARINI doldurur, aynı olayı tekrarlamaz.
//
// ── KÜNYE (M-5416: olayın GÜNÜNDE var olan yapı; ardıla geriye bağlama YOK) ──
//   hollanda              1581-07-26 → 1923-10-29  (devletler.js)
//   ingiltere             1066-01-01 → 1923-10-29  (devletler.js)
//   ispanya               1479-01-19 → 1923-10-29  (devletler.js)
//   prusya                1701-01-18 → 1871-01-18  (devletler.js)
//   fransa-cumhuriyet     1792-09-22 → 1923-10-29  (devletler.js)
//   🟡 habsburg-hollandasi  KÜNYE YOK — ÖNERİ (1581 öncesi Habsburg Felemengi);
//      bkz. denetim/KRONO-ATLANTIK-B-0929-KUNYE.md
//   🟡 batav-cumhuriyeti    KÜNYE YOK — ÖNERİ, KUNYE-DUNYA-0929 listesinde zaten
//      aday (1795-1810, Batav Cumhuriyeti + Holland Krallığı)
//   Künyesi olmayan id'ye bağlı madde KAYBOLMAZ: bağlayıcı onu sayıp konsola
//   basar, künye açılınca kendiliğinden bağlanır.
//
// ── KAYNAK ────────────────────────────────────────────────────────
// TDV İslâm Ansiklopedisi (gövdeleri okundu, önbellek
//   denetim/KRONO-ATLANTIK-B-0929-tdv-onbellek/): hollanda · karlofca ·
//   pasarofca-antlasmasi
// TDV Hollanda'nın iç tarihini çoğunlukla YIL düzeyinde verir. Gün, yalnız
// aşağıdaki kurumsal/akademik kaynak GÜNÜ açıkça yazdıysa yazıldı:
//   Canon van Nederland (canonvannederland.nl — Hollanda hükümetinin
//     görevlendirdiği tarihçi komisyonunun kanonu, kalender sayfaları)
//   Parlement.com (Parlementair Documentatie Centrum, Universiteit Leiden)
// 🔴 OKUMADIĞIM ESERE ATIF YAZMADIM. Wikipedia kullanılmadı.
//
// ── TAKVİM ────────────────────────────────────────────────────────
// Holland ve Zeeland 1582-83'ten itibaren GREGORYEN takvimdeydi; bu dosyadaki
// 1583 sonrası Hollanda günleri Gregoryen'dir ve `gun:` bunu söyler. Çevrilmedi.
//
// ── TARİH KURALI ──────────────────────────────────────────────────
// Gün bilinmiyorsa t:"YYYY-01-01" ve `gun:` hassasiyeti açıklar (ay biliniyorsa
// ay orada yazar). `ic_not_d:` editoryal not — gösterilmez.
// =====================================================================

window.KRONOLOJI_COK_HOLLANDA = [

{ t:"1566-01-01", b:"Geuzen İspanyol idaresine karşı silâhlı mücadeleye başladı", tur:"isyan",
  onem:4, dunya:2, kapsam:"ic", etiket:["isyan","din","konu-siyasi","konu-din"],
  devlet:"habsburg-hollandasi", devletler:["habsburg-hollandasi","ispanya"], yer_id:"",
  gun:"1566 (TDV yıl verir, gün yok)",
  odak_yer:["Amsterdam","Anvers (Antwerpen)","Gent","Utrecht"],
  d:"Ekim 1555'ten beri II. Felipe'nin idaresindeki Felemenk'te \"Geuzen\" diye anılan Kalvinist bir grup silâha sarıldı. Seksen Yıl Savaşları'na giden sürecin ilk silâhlı evresidir.",
  kaynak:"TDV `hollanda` (Tarih bölümü, Cevdet Küçük): Geuzen'in İspanyol idaresine karşı silâhlı mücadeleyi başlatması \"(1566)\"" },

{ t:"1572-04-01", b:"Deniz Geuzen'i Den Briel'i ele geçirdi — Holland'da isyanın dayanağı kuruldu", tur:"isyan",
  onem:5, dunya:2, kapsam:"ic", etiket:["isyan","askeri","konu-askeri","konu-siyasi"],
  devlet:"habsburg-hollandasi", devletler:["habsburg-hollandasi","ispanya"], yer_id:"",
  gun:"1 Nisan 1572 (Canon van Nederland; Gregoryen takvimden önce, Jülyen)",
  yer_kon:[51.902,4.162],
  d:"Deniz Geuzen'i (watergeuzen) Maas ağzındaki küçük Den Briel kasabasını beklenmedik bir baskınla aldı; II. Felipe'ye açıkça karşı çıkan ilk şehir oldu. Ardından Holland ve Zeeland şehirleri isyana katıldı ve Kalvinist birlikler Holland'da denetimi ele geçirdi.",
  kaynak:"Canon van Nederland, kalender 1572-04-01 \"Watergeuzen veroveren het stadje Den Briel\" · TDV `hollanda`: Geuzen birliklerinin Holland'da denetimi ele geçirmesi \"(1572)\"",
  ic_not_d:"Den Briel (Brielle) yerleşim listesinde YOK (ölçüldü) — yer_id boş." },

{ t:"1576-11-08", b:"Gent Uzlaşması — Felemenk eyaletleri İspanyol askerine karşı birleşti", tur:"antlasma",
  onem:4, dunya:2, kapsam:"ic", etiket:["antlasma","din","konu-siyasi","konu-diplomasi"],
  devlet:"habsburg-hollandasi", devletler:["habsburg-hollandasi","ispanya"], yer_id:"Gent",
  gun:"8 Kasım 1576", ic_not_gun:"TDV yalnız yıl verir (1576); gün 8 Kasım 1576 — Britannica «Pacification of Ghent» ve Eighty Years' War 1576–1579 yazıları (Antwerp'teki İspanyol Fury'sinden 4 gün sonra imza)",
  d:"Katolik ve Protestan eyaletler, İspanyol birliklerinin yağmasına karşı ortak davranmak ve din çatışmasını yatıştırmak için Gent'te uzlaştı. Birlik kalıcı olmadı: üç yıl içinde güney Arras, kuzey Utrecht birlikleriyle ikiye ayrıldı.",
  kaynak:"TDV `hollanda`: Katolik-Protestan çatışmalarının \"1576’da yapılan Gent uzlaşmasıyla\" giderilmeye çalışıldığı ve bölünmenin önlenemediği" },

{ t:"1584-07-10", b:"Willem van Oranje Delft'te öldürüldü", tur:"olum",
  onem:5, dunya:2, kapsam:"ic", etiket:["olum","siyaset","konu-siyasi","konu-kisiler"],
  devlet:"hollanda", yer_id:"",
  gun:"10 Temmuz 1584 (Gregoryen; Canon van Nederland)",
  yer_kon:[52.0126,4.3571],
  d:"Felemenk ayaklanmasının lideri Willem van Oranje, II. Felipe'nin başına ödül koyduğu Katolik Balthasar Gerards tarafından Delft'teki Prinsenhof'ta vurularak öldürüldü. Ölümü, bütün Felemenk'i tek çatı altında toplama ümidini sona erdirdi; ayaklanmanın önderliği Holland eyaletine ve oğlu Maurits'e geçti.",
  kaynak:"Canon van Nederland, kalender 1584-07-10 \"Willem van Oranje wordt vermoord door Balthasar Gerards\" ve 'Moord op Willem van Oranje' · TDV `hollanda`: \"Willem’in ölümü (1584)\"",
  ic_not_d:"Delft yerleşim listesinde YOK (ölçüldü) — yer_id boş." },

{ t:"1586-01-01", b:"Genel Meclis Leicester Dükü'nü genel vali yaptı — İngiliz desteği", tur:"diplomasi",
  onem:3, dunya:2, kapsam:"dis", etiket:["diplomasi","ittifak","konu-diplomasi","konu-siyasi"],
  devlet:"hollanda", devletler:["hollanda","ingiltere"], yer_id:"",
  gun:"1586 (TDV yıl verir)",
  odak_yer:["Amsterdam","Utrecht","Rotterdam","Middelburg"],
  d:"İspanya'ya karşı İngiltere'nin askerî desteğini sağlamak isteyen Genel Meclis, I. Elizabeth'in gözdesi Leicester Dükü Robert Dudley'yi genel valiliğe getirdi. Dükün mutlak bir otorite kurma teşebbüsü ertesi yıl Holland eyaletince engellendi ve dük adadan ayrıldı.",
  kaynak:"TDV `hollanda`: Leicester dükünün genel valiliğe tayini \"(1586)\" ve teşebbüsünün Holland tarafından engellenmesi \"(1587)\"" },

{ t:"1618-01-01", b:"Remonstrant-Kontra-Remonstrant mezhep çatışması iç krize dönüştü", tur:"din",
  onem:3, dunya:1, kapsam:"ic", etiket:["din","siyaset","konu-din","konu-siyasi"],
  devlet:"hollanda", yer_id:"",
  gun:"1618 (TDV yıl verir)",
  odak_yer:["Amsterdam","Utrecht","Rotterdam"],
  d:"Kalvinist kilise içindeki kader tartışması, Holland'ın vekili Oldenbarnevelt ile stathouder Maurits arasındaki iktidar kavgasına karıştı. TDV, bu çatışmaların İspanya ile ateşkesin 1621'de bozulup savaşın yeniden başlamasında da etkili olduğunu belirtir.",
  kaynak:"TDV `hollanda`: \"1618’de başlayan mezhep çatışmaları yüzünden 1621’de iki ülke arasındaki savaş yeniden başladı\"" },

{ t:"1619-05-13", b:"Johan van Oldenbarnevelt Lahey'de idam edildi", tur:"olum",
  onem:4, dunya:1, kapsam:"ic", etiket:["olum","siyaset","konu-siyasi","konu-kisiler"],
  devlet:"hollanda", yer_id:"",
  gun:"13 Mayıs 1619 (Gregoryen; Canon van Nederland)",
  yer_kon:[52.0799,4.3133],
  d:"Cumhuriyetin kuruluş yıllarının en güçlü devlet adamı, Holland vekili (raadpensionaris) Oldenbarnevelt, stathouder Maurits ile giriştiği iktidar ve mezhep mücadelesini kaybederek vatan hainliği suçlamasıyla Lahey'de başı kesilerek idam edildi. Bununla eyaletçi-cumhuriyetçi kanat bir kuşak boyunca geriledi.",
  kaynak:"Canon van Nederland, kalender 1619-05-13 \"Johan van Oldenbarnevelt wordt onthoofd in Den Haag\"",
  ic_not_d:"Lahey (Den Haag) yerleşim listesinde YOK (ölçüldü; mevcut hollanda dosyası da bunu bildirmişti) — yer_id boş." },

{ t:"1651-01-01", b:"Büyük Meclis — eyaletler Holland'ın önderliğini kabul etti", tur:"idari",
  onem:3, dunya:1, kapsam:"ic", etiket:["idari","siyaset","konu-idari","konu-siyasi"],
  devlet:"hollanda", yer_id:"",
  gun:"1651 (TDV yıl verir)",
  yer_kon:[52.0799,4.3133],
  d:"1651'de toplanan genel mecliste eyaletler Holland'ın önderliğini kabul etti. Cumhuriyetin idaresi bundan sonra 1672'ye kadar Holland'ın vekilleri, özellikle Johan de Witt eliyle yürüdü; 1672 maddesindeki çöküş bu düzenin sonudur.",
  kaynak:"TDV `hollanda`: \"1651’de toplanan genel mecliste eyaletler Holland’ın liderliğini kabul ettiler\"" },

{ t:"1672-08-20", b:"De Witt kardeşler Lahey'de linç edildi — Felaket Yılı'nın doruğu", tur:"kriz",
  onem:4, dunya:2, kapsam:"ic", etiket:["kriz","siyaset","konu-siyasi","konu-kisiler"],
  devlet:"hollanda", yer_id:"",
  gun:"20 Ağustos 1672 (Gregoryen; Canon van Nederland)",
  yer_kon:[52.0799,4.3133],
  d:"Fransa ve İngiltere'nin saldırısına uğrayan cumhuriyet 1672'de, Felaket Yılı'nda (Rampjaar) çöküşün eşiğine geldi; 9 Temmuz'da III. Willem stathouder yapıldı. Görevden çekilen raadpensionaris Johan de Witt ile kardeşi Cornelis, Lahey'de öfkeli bir kalabalık tarafından öldürüldü. Stathoudersiz dönem kanlı biçimde kapandı.",
  kaynak:"Canon van Nederland, 'De gebroeders De Witt' ve 'De moord op de gebroeders De Witt' (20 Ağustos; III. Willem'in 9 Temmuz 1672'de stathouder tayini) · Rijksmuseum koleksiyon kayıtları 'Moord op de gebroeders De Witt, 1672'",
  ic_not_d:"Mevcut kronoloji_hollanda.js'te 1672-01-01 'Rampjaar' maddesi var; bu madde onun İÇ SİYASÎ sonucudur, tekrarı değil." },

{ t:"1680-01-01", b:"IV. Mehmed Hollanda'ya yeni ahidnâme verdi — Colyer büyükelçi oldu", tur:"antlasma",
  onem:4, dunya:2, kapsam:"dis", etiket:["antlasma","diplomasi","ekonomi","konu-diplomasi","konu-ekonomi"],
  devlet:"hollanda", yer_id:"İstanbul",
  gun:"1680 (TDV yıl verir)",
  d:"Elçi Justinus Colyer'in yıllarca süren çabası sonunda IV. Mehmed, 1612 ahidnâmesini esas alan yeni bir ahidnâme verdi ve Colyer'e büyükelçi pâyesi tanındı. TDV'ye göre bu metin, kapitülasyonların kaldırıldığı 1923 Lozan'a kadar Akdeniz'deki Hollanda varlığını şekillendirdi.",
  kaynak:"TDV `hollanda` (Osmanlı-Hollanda münasebetleri): Colyer'e büyükelçi pâyesi \"(1680)\"; IV. Mehmed'in yeni ahidnâmesi \"(1680)\"; metnin 1923 Lozan'a kadar belirleyici kalması" },

{ t:"1699-01-26", b:"Karlofça Antlaşması — Hollanda elçisi Colyer arabuluculuk yaptı", tur:"diplomasi",
  onem:3, dunya:4, kapsam:"dis", etiket:["diplomasi","antlasma","konu-diplomasi"],
  devlet:"hollanda", yer_id:"",
  gun:"26 Ocak 1699 = 24 Receb 1110 (TDV `karlofca`)",
  yer_kon:[45.203,19.934],
  d:"Hollanda elçisi Jacobus Colyer, İngiliz elçisi William Paget ile birlikte Osmanlı Devleti ile Kutsal İttifak arasında barış için aracılık yaptı. Hollanda'nın arabuluculuğu, Akdeniz ticaretinin savaşla kesilmemesi çıkarına dayanıyordu.",
  kaynak:"TDV `karlofca`: Paget ile Colyer'in Amcazâde Hüseyin Paşa'ya aracılık teklif etmesi; imza \"24 Receb 1110 (26 Ocak 1699)\" · TDV `hollanda`: Colyer'in \"İngiliz elçisiyle birlikte\" aracılığı",
  ic_not_d:"dunya:4 — Karlofça'nın öteki dosyalardaki değeriyle AYNI (kronoloji_ingiltere · _habsburg · _venedik). İngiliz tarafı kronoloji_ingiltere.js'te ayrı madde olarak duruyor; bu madde Hollanda tarafıdır." },

{ t:"1787-01-01", b:"Prusya müdahalesi — Patriot hareketi bastırıldı, V. Willem geri döndü", tur:"isgal",
  onem:4, dunya:2, kapsam:"dis", etiket:["isgal","siyaset","konu-askeri","konu-siyasi"],
  devlet:"hollanda", devletler:["hollanda","prusya"], yer_id:"",
  gun:"1787 (Parlement.com yıl verir; TDV 1786 der — çelişki beyanlı)",
  odak_yer:["Amsterdam","Utrecht","Rotterdam","Nijmegen"],
  d:"Stathouder V. Willem'e karşı yükselen Patriot (vatansever) hareketi, eşi Prusya prensesi Wilhelmina'nın durdurulması üzerine Prusya ordusunun Felemenk'e girmesiyle bastırıldı. V. Willem Lahey'e döndü; Patriotlar'ın önemli bir kısmı Fransa'ya kaçtı ve 1795'te Fransız ordusuyla geri geldi.",
  kaynak:"Parlement.com (Universiteit Leiden, PDC), 'Hoofdstuk I Proloog: het einde van de oude Republiek': \"de Pruisische interventie van 1787\"; Willem V'in \"in 1787\" Lahey'e dönüşü",
  celiski:"TDV `hollanda`: \"Prusya, Felemenk Cumhuriyeti’ni işgal etti (1786)\" ↔ Parlement.com: \"Pruisische interventie van 1787\". Tarih alanında akademik Hollanda kaynağının yılı kullanıldı; TDV'nin yılı burada beyan edildi, silinmedi." },

{ t:"1795-05-16", b:"Lahey Antlaşması — Batav Cumhuriyeti Fransa'nın nüfuzuna girdi", tur:"antlasma",
  onem:4, dunya:2, kapsam:"dis", etiket:["antlasma","ittifak","konu-diplomasi"],
  devlet:"batav-cumhuriyeti", devletler:["batav-cumhuriyeti","fransa-cumhuriyet"], yer_id:"",
  gun:"16 Mayıs 1795 (Parlement.com)",
  yer_kon:[52.0799,4.3133],
  d:"Aralık 1794 - Ocak 1795 kışında donmuş nehirleri geçen Fransız ordusu ülkeyi işgal etmiş, V. Willem 18 Ocak'ta İngiltere'ye kaçmıştı. Lahey Antlaşması'yla yeni Batav Cumhuriyeti Fransa'ya bağlandı ve ülke fiilen Fransız nüfuzuna girdi.",
  kaynak:"Parlement.com, 'Bestuur in de Bataafs-Franse tijd (1795-1813)': \"Door het Haags Verdrag van 16 mei 1795 kwamen de Nederlanden onder Franse invloed\"; Fransız işgali \"december 1794\"; V. Willem'in \"18 januari 1795\" kaçışı" },

{ t:"1798-01-01", b:"Batav Cumhuriyeti'nin Mısır seferini desteklemesi — Osmanlı ilişkileri kesildi", tur:"diplomasi",
  onem:3, dunya:1, kapsam:"dis", etiket:["diplomasi","konu-diplomasi"],
  devlet:"batav-cumhuriyeti", yer_id:"İstanbul",
  gun:"1798 (TDV yıl verir)",
  d:"Fransız himayesindeki Batav Cumhuriyeti, Napolyon'un Mısır'a saldırısını desteklediği için Bâbıâli ile Hollanda arasındaki ilişkiler kesildi; Hollanda konsolos ve tercümanlarının beratları geri alındı. İlişkiler 1804'te yeniden kuruldu.",
  kaynak:"TDV `hollanda`: Batav Cumhuriyeti'nin \"Napolyon’un Mısır’a yaptığı saldırıyı (1798) desteklemesi\" ilişkilerin kesilmesine sebep oldu; yeniden kuruluş \"(1804)\"" },

{ t:"1804-01-01", b:"Osmanlı-Hollanda ilişkileri yeniden kuruldu", tur:"diplomasi",
  onem:2, dunya:1, kapsam:"dis", etiket:["diplomasi","konu-diplomasi"],
  devlet:"batav-cumhuriyeti", yer_id:"İstanbul",
  gun:"1804 (TDV yıl verir)",
  d:"Mısır seferi yüzünden kopan ilişkiler yeniden kuruldu; Hollandalı konsolos ve tercümanlara beratları iade edildi. Hollanda'nın 1810'da Fransa'ya bağlanmasıyla ilişkiler bir kez daha kesilecekti.",
  kaynak:"TDV `hollanda`: \"Osmanlı-Hollanda ilişkileri yeniden kuruldu (1804) ve Hollandalı konsolos ve tercümanların beratları iade edildi\"" },

{ t:"1806-03-11", b:"Napolyon kardeşi Louis'yi Holland kralı yapmaya karar verdi — Holland Krallığı", tur:"hukumdar",
  onem:4, dunya:2, kapsam:"dis", etiket:["hukumdar","siyaset","konu-siyasi"],
  devlet:"batav-cumhuriyeti", devletler:["batav-cumhuriyeti","fransa-cumhuriyet"], yer_id:"Amsterdam",
  gun:"11 Mart 1806 — Napolyon'un kararı (Parlement.com); krallığın ilânı ve Louis'nin tahta çıkışı sonraki aylardadır",
  d:"İmparatorluğunu ilân eden Napolyon, Batav Cumhuriyeti'ni kaldırıp yerine Holland Krallığı'nı kurdu ve başına kardeşi Louis Bonaparte'ı (Lodewijk Napoleon) getirdi. Louis'nin Holland çıkarlarını gözeten tutumu kısa sürede Napolyon'la çatışmaya yol açtı.",
  kaynak:"Parlement.com, 'De eerste koning: Koning Lodewijk Napoleon 1806-1810': \"Op 11 maart 1806 nam keizer Napoleon het besluit dat zijn broer, Louis, koning zou worden van Holland\" · TDV `hollanda`: Holland Krallığı'nın kuruluşu \"(1806)\"",
  ic_not_d:"Künye önerisi batav-cumhuriyeti 1795-1810'u (Holland Krallığı dahil) tek künye sayar (KUNYE-DUNYA-0929 önerisi). Ayrı künye açılırsa bu madde ona taşınmalı." },

{ t:"1810-07-09", b:"Holland Krallığı Fransız İmparatorluğu'na ilhak edildi", tur:"son",
  onem:5, dunya:2, kapsam:"dis", etiket:["son","toprak-kayip","konu-siyasi"],
  devlet:"batav-cumhuriyeti", devletler:["batav-cumhuriyeti","fransa-cumhuriyet"], yer_id:"Amsterdam",
  gun:"9 Temmuz 1810 — imparatorluk kararnamesi (Parlement.com); Louis 2 Temmuz'da ülkeyi terk etmişti",
  d:"Kıta Ablukası'nı uygulamaktaki gevşekliği yüzünden kardeşiyle çatışan Louis 2 Temmuz 1810'da tahtı bırakıp ülkeden ayrıldı; bir hafta sonra Napolyon'un kararnamesiyle Holland doğrudan Fransız İmparatorluğu'na bağlandı. İlhak Osmanlı-Hollanda ilişkilerini de yeniden kesti.",
  kaynak:"Parlement.com, 'Bestuur in de Bataafs-Franse tijd': \"Op 9 juli 1810 werd Holland ingelijfd bij het Franse keizerrijk\" ve 'De eerste koning': \"Op 2 juli 1810 vertrok Lodewijk Napoleon voorgoed uit Holland\" · TDV `hollanda`: ilhak \"(1810)\" ve ilişkilerin \"tekrar kesil\"mesi",
  ic_not_d:"Haritada ölçüldü: senkron defterinde Avrupa'da hollanda→fransa 1810 kırılması YOK — Hollanda 1795-1813 boyunca haritada kesintisiz 'hollanda' boyalı. ⇒ (b) sınıfı: tarihte değişim var, haritada yok. Öneri denetim/KRONO-ATLANTIK-B-0929-YERLESIM-ONERI.md'de." },

{ t:"1813-11-30", b:"Willem Frederik Scheveningen'e çıktı — Fransız idaresinin sonu", tur:"hukumdar",
  onem:5, dunya:2, kapsam:"ic", etiket:["hukumdar","kurulus","konu-siyasi"],
  devlet:"hollanda", yer_id:"",
  gun:"30 Kasım 1813 (Gregoryen; Canon van Nederland)",
  yer_kon:[52.108,4.273],
  d:"Fransız birliklerinin çekilmesi üzerine son stathouderin oğlu Willem Frederik on sekiz yıllık sürgünden İngiltere üzerinden dönerek Scheveningen'e çıktı ve Birleşik Felemenk'in egemenliğini üstlendi. Viyana Kongresi'nden sonra güney Felemenk'i de kapsayan krallığın başında I. Willem adıyla kral oldu.",
  kaynak:"Canon van Nederland, kalender 1813-11-30 \"Willem Frederik van Oranje-Nassau komt aan in Scheveningen\" ve 'Neerlands verlossing van vreemde heerschappij' · TDV `hollanda`: Willem'in dönerek \"meşrutî Hollanda Krallığı’nı ilân etti (1814)\"",
  ic_not_d:"Scheveningen yerleşim listesinde YOK — yer_id boş. Mevcut kronoloji_hollanda.js'teki 1815-03-16 krallık maddesi bunun devamıdır, tekrarı değil." },

{ t:"1825-01-01", b:"Zuylen van Nijevelt İstanbul'a büyükelçi — Mora meselesinde Hollanda diplomasisi", tur:"diplomasi",
  onem:2, dunya:1, kapsam:"dis", etiket:["diplomasi","konu-diplomasi"],
  devlet:"hollanda", yer_id:"İstanbul",
  gun:"1825 (TDV yıl verir)",
  d:"Mora isyanı milletlerarası bir meseleye dönüşünce Hollanda, en iyi diplomatlarından Hugo van Zuylen van Nijevelt'i İstanbul'a büyükelçi olarak gönderdi. İsyan, Hollandalı tüccarlar için önemli olan İzmir keten pazarını da sarsmıştı; elçinin 1829'da ayrılmasından sonra malî sıkıntı yüzünden yerine uzun süre tayin yapılamadı.",
  kaynak:"TDV `hollanda`: Zuylen van Nijenveld'in büyükelçi tayini \"(1825)\", ayrılışı \"(1829)\"; Mora isyanının (1821) İzmir ticaretine etkisi" },

{ t:"1848-11-03", b:"Thorbecke anayasası ilân edildi — parlamenter sisteme geçiş", tur:"anayasa",
  onem:5, dunya:2, kapsam:"ic", etiket:["anayasa","reform","konu-siyasi","konu-hukuk"],
  devlet:"hollanda", yer_id:"",
  gun:"3 Kasım 1848 (Canon van Nederland; Parlement.com)",
  odak_yer:["Amsterdam","Utrecht","Rotterdam","Groningen"],
  d:"1848 devrimleri karşısında II. Willem'in kurduğu Thorbecke komisyonunun hazırladığı anayasa ilân edildi. Bakanlar krala değil meclise karşı sorumlu oldu, İkinci Meclis doğrudan seçimle oluşmaya başladı; bugünkü Hollanda parlamenter demokrasisinin temeli budur.",
  kaynak:"Canon van Nederland, kalender 1848-11-03 \"De grondwet van Thorbecke wordt geproclameerd\" · Parlement.com, 'Grondwetsherziening 1848' (17 Mart 1848 komisyon, bakan sorumluluğu)" },

{ t:"1863-07-01", b:"Hollanda Surinam ve Antiller'de köleliği kaldırdı", tur:"reform",
  onem:4, dunya:2, kapsam:"ic", etiket:["reform","sosyal","konu-sosyal","konu-hukuk"],
  devlet:"hollanda", yer_id:"",
  gun:"1 Temmuz 1863 (Canon van Nederland)",
  odak_yer:["Amsterdam","Rotterdam"],
  d:"Hollanda, Batı Hint sömürgelerinde (Surinam ve Hollanda Antilleri) köleliği resmen kaldırdı. Karar metropolde alınmış bir yasadır; sömürgelerdeki uygulaması ayrı bir süreçtir.",
  kaynak:"Canon van Nederland, kalender 1863-07-01 \"Nederland schaft de slavernij officieel af\" (\"op 1 juli 1863, schaft Nederland de slavernij af in Suriname en de Nederlandse Antillen\")",
  ic_not_d:"Madde metropol yasamasıdır (kapsam:ic). Sömürgedeki kırılmalar (Surinam) PAKETSİZ tier'ındır." },

{ t:"1872-01-01", b:"Cidde'de Hollanda konsolosluğu açıldı — Endonezyalı hacılar için", tur:"diplomasi",
  onem:2, dunya:1, kapsam:"dis", etiket:["diplomasi","din","konu-diplomasi","konu-din"],
  devlet:"hollanda", yer_id:"Cidde",
  gun:"1872 (TDV yıl verir)",
  d:"Doğu Hint Adaları'ndan her yıl binlerce müslüman hacı Hicaz'a gidiyordu; Hollanda, onların meseleleriyle ilgilenmek ve hac yolunu denetlemek üzere Osmanlı Hicaz'ında, Cidde'de bir konsolosluk açtı.",
  kaynak:"TDV `hollanda`: \"Endonezyalı müslüman hacıların meseleleriyle uğraşmak üzere Cidde’de 1872’de açılan Hollanda konsolosluğu\"" },

{ t:"1477-02-11", b:"Büyük İmtiyaz — Burgonyalı Marie Gent'te Genel Meclis'e hak tanıdı", tur:"antlasma",
  onem:3, dunya:2, kapsam:"dis", etiket:["antlasma","konu-siyasi","benelux"],
  devlet:"burgonya", devletler:["burgonya"], yer_id:"Gent",
  gun:"11 Şubat 1477",
  d:"Nancy'de Cesur Charles'ın ölümünün (5 Ocak 1477) ardından kızı Marie, Gent'te Büyük İmtiyaz'ı (Groot Privilege) verdi: Genel Meclis kendi kendini toplayabilecek, vergi ve savaş kararı onun onayına bağlanacaktı. Alçak Ülkeler'de merkezî Burgonya yönetiminin sınırlanması ve eyaletlerin siyasî ağırlığının doğuşudur.",
  kaynak:"Britannica «Mary of Burgundy»; Israel, The Dutch Republic 1477–1806 (Oxford 1995), giriş bölümü · ikincil kaynak, TDV bu günü vermez" },

{ t:"1555-10-25", b:"V. Karl Brüksel'de Alçak Ülkeler'i oğlu II. Felipe'ye bıraktı", tur:"hukumdar",
  onem:4, dunya:2, kapsam:"dis", etiket:["hukumdar","konu-siyasi","benelux"],
  devlet:"habsburg-hollandasi", devletler:["habsburg-hollandasi","ispanya"], yer_id:"Brüksel",
  gun:"25 Ekim 1555",
  d:"25 Ekim 1555'te Brüksel'deki törende V. Karl Alçak Ülkeler'in hükümdarlığını oğlu Felipe'ye devretti (Ocak 1556'da İspanya tacını da bıraktı). Böylece on yedi eyalet İspanyol Habsburg hanedanının mülkü oldu; Seksen Yıl Savaşları'na giden merkezîleşme siyaseti bu devirle başlar.",
  kaynak:"Britannica «Charles V (Holy Roman emperor)»; Wikipedia «Abdication of Charles V» · ikincil kaynak" },

{ t:"1566-08-10", b:"İkon kırma (Beeldenstorm) Steenvoorde'de başladı", tur:"isyan",
  onem:3, dunya:2, kapsam:"dis", etiket:["isyan","konu-siyasi","benelux"],
  devlet:"habsburg-hollandasi", devletler:["habsburg-hollandasi","ispanya"], yer_id:"",
  gun:"10 Ağustos 1566",
  d:"10 Ağustos 1566'da Steenvoorde yakınlarında Kalvinist kalabalıklar kilise ve manastırları basıp heykel ve resimleri kırdı; hareket birkaç haftada Flandre, Brabant ve Hollanda eyaletlerine yayıldı. İspanyol hükûmetinin sert tepkisi (Alba'nın gönderilmesi) isyanı doğurdu.",
  kaynak:"Britannica «Dutch Revolt»; Parker, The Dutch Revolt (1977), 2. bölüm · ikincil kaynak; Steenvoorde yerleşim listesinde YOK — yer_id boş" },

{ t:"1568-06-05", b:"Egmont ve Hoorn Kontları Brüksel'de idam edildi", tur:"olum",
  onem:3, dunya:2, kapsam:"dis", etiket:["olum","konu-siyasi","benelux"],
  devlet:"habsburg-hollandasi", devletler:["habsburg-hollandasi","ispanya"], yer_id:"Brüksel",
  gun:"5 Haziran 1568",
  d:"Alba Dükü'nün Kanlı Divan'ı (Raad van Beroerten) Egmont ve Hoorn kontlarını 5 Haziran 1568'de Brüksel Grand-Place'ta idam ettirdi. Soylu muhalefetin liderlerinin ölümü Willem van Oranje'nin silâhlı isyanını (Heiligerlee, 23 Mayıs 1568'den sonra) geri dönülmez kıldı.",
  kaynak:"Britannica «Lamoral, count of Egmond»; Parker, The Dutch Revolt (1977) · ikincil kaynak" },

{ t:"1574-10-03", b:"Leiden kuşatması kaldırıldı", tur:"savas",
  onem:3, dunya:2, kapsam:"dis", etiket:["savas","konu-siyasi","benelux"],
  devlet:"hollanda", devletler:["hollanda","ispanya"], yer_id:"",
  gun:"3 Ekim 1574",
  d:"Dikleri yarıp araziyi sular altında bırakan Su Dilencileri 3 Ekim 1574'te Leiden'e ulaştı ve aylardır süren İspanyol kuşatmasını kaldırttı. Şehir ödül olarak Leiden Üniversitesi'ni aldı (8 Şubat 1575 maddesine bkz.).",
  kaynak:"Britannica «Siege of Leiden»; Wikipedia «Siege of Leiden» · ikincil kaynak; Leiden yerleşim listesinde YOK — yer_id boş" },

{ t:"1579-01-06", b:"Arras Birliği — Katolik güney eyaletleri İspanya'ya sadık kaldı", tur:"antlasma",
  onem:3, dunya:2, kapsam:"dis", etiket:["antlasma","konu-siyasi","benelux"],
  devlet:"habsburg-hollandasi", devletler:["habsburg-hollandasi","ispanya"], yer_id:"",
  gun:"6 Ocak 1579",
  d:"Artois, Hainaut ve Douai (Walloon eyaletleri) 6 Ocak 1579'da Arras Birliği'ni kurup Katolik inanç ve Kral Felipe'ye bağlılığı yeniden onayladı. Bu, kuzey eyaletlerinin 23 Ocak 1579'da Utrecht Birliği'ni kurmasına yol açan bölünmenin ilk adımıdır.",
  kaynak:"Britannica «Union of Arras»; Parker, The Dutch Revolt (1977) · ikincil kaynak" },

{ t:"1600-07-02", b:"Nieuwpoort Muharebesi", tur:"savas",
  onem:2, dunya:1, kapsam:"dis", etiket:["savas","konu-siyasi","benelux"],
  devlet:"hollanda", devletler:["hollanda","habsburg-hollandasi"], yer_id:"",
  gun:"2 Temmuz 1600",
  d:"Maurits van Nassau'nun Flandre kıyısında Nieuwpoort'ta Arşidük Albert'in İspanyol-Güney Hollanda ordusunu yenmesi; Hollanda ordusunun Maurits reformlarının ilk büyük açık meydan zaferi ama güney Flandre'ın fethine yol açmadı.",
  kaynak:"Britannica «Maurice of Nassau, prince of Orange»; Wikipedia «Battle of Nieuwpoort (1600)» · ikincil kaynak" },

{ t:"1678-08-10", b:"Nijmegen Barışı — Fransa–Hollanda Savaşı sona erdi", tur:"antlasma",
  onem:3, dunya:2, kapsam:"dis", etiket:["antlasma","konu-siyasi","benelux"],
  devlet:"hollanda", devletler:["hollanda","fransa"], yer_id:"Nijmegen",
  gun:"10 Ağustos 1678",
  d:"10 Ağustos 1678'de Nijmegen'de Fransa ile Hollanda Cumhuriyeti arasında barış imzalandı; Fransa, işgal ettiği Maastricht dâhil Hollanda topraklarını boşalttı. İspanya ile antlaşma Eylül 1678'de ayrıca imzalandı.",
  kaynak:"Britannica «Treaties of Nijmegen»; Wikipedia «Treaties of Nijmegen» · ikincil kaynak" },

{ t:"1715-11-15", b:"Bariyer Antlaşması — Hollanda güney Alçak Ülkeler'de kale garnizonları kazandı", tur:"antlasma",
  onem:3, dunya:2, kapsam:"dis", etiket:["antlasma","konu-siyasi","benelux"],
  devlet:"avusturya-hollandasi", devletler:["avusturya-hollandasi","hollanda"], yer_id:"Anvers (Antwerpen)",
  gun:"15 Kasım 1715",
  d:"15 Kasım 1715'te Anvers'te imzalanan Üçüncü Bariyer Antlaşması, Avusturya Hollandası'ndaki Namur, Tournai, Ypres, Menen, Veurne, Warneton ve Dendermonde'de Hollanda garnizonlarını güvenceye aldı ve masrafını Avusturya Hollandası'na yükledi.",
  kaynak:"Britannica «Barrier Treaty»; Wikipedia «Barrier Treaties» · ikincil kaynak" },

{ t:"1789-10-24", b:"Brabant Devrimi başladı — Avusturya Hollandası'nda ayaklanma", tur:"isyan",
  onem:3, dunya:2, kapsam:"dis", etiket:["isyan","konu-siyasi","benelux"],
  devlet:"avusturya-hollandasi", devletler:["avusturya-hollandasi","avusturya"], yer_id:"",
  gun:"24 Ekim 1789",
  d:"II. Joseph'in merkezîleştirici ve kilise karşıtı reformlarına karşı Van der Noot ve Vonck önderliğinde Brabant halkı Breda'dan 24 Ekim 1789 manifestosuyla ayaklandı; Aralık'a dek Avusturya garnizonları şehirlerden atıldı ve Ocak 1790'da Belçika Birleşik Eyaletleri kuruldu.",
  kaynak:"Britannica «Brabant Revolution»; Wikipedia «Brabant Revolution» · ikincil kaynak; günü doğrulanması için akademik kaynak aranmalı" },

{ t:"1790-01-11", b:"Belçika Birleşik Eyaletleri kuruldu", tur:"kurulus",
  onem:3, dunya:2, kapsam:"dis", etiket:["kurulus","konu-siyasi","benelux"],
  devlet:"avusturya-hollandasi", devletler:["avusturya-hollandasi"], yer_id:"Brüksel",
  gun:"11 Ocak 1790",
  d:"11 Ocak 1790'da Brabant, Flandre, Hainaut, Namur ve öteki eyaletlerin delegeleri Brüksel'de Belçika Birleşik Eyaletleri (États-Belgiques-Unis) konfederasyonunu ilan etti. Devlet Aralık 1790'da Avusturya'nın yeniden fethiyle sona erdi; atlasta ayrı künyesi yoktur.",
  kaynak:"Britannica «Brabant Revolution»; Wikipedia «United Belgian States» · ikincil kaynak" },

{ t:"1794-06-26", b:"Fleurus Muharebesi — Fransa Belçika'yı Avusturya'dan aldı", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas","konu-siyasi","benelux"],
  devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","avusturya-hollandasi"], yer_id:"",
  gun:"26 Haziran 1794",
  d:"Jourdan'ın Sambre-et-Meuse Ordusu 26 Haziran 1794'te Fleurus'ta Koburg Prensi'nin Avusturya-Hollanda ordusunu yendi; Avusturya Hollandası ve Liège Prens-Piskoposluğu Fransız eline geçti (resmî ilhak 1 Ekim 1795).",
  kaynak:"Britannica «Battle of Fleurus (1794)»; Wikipedia «Battle of Fleurus (1794)» · ikincil kaynak" },

{ t:"1831-07-21", b:"I. Leopold Brüksel'de Belçikalıların Kralı olarak yemin etti", tur:"hukumdar",
  onem:3, dunya:2, kapsam:"dis", etiket:["hukumdar","konu-siyasi","benelux"],
  devlet:"belcika", devletler:["belcika"], yer_id:"Brüksel",
  gun:"21 Temmuz 1831",
  d:"Ulusal Kongre'nin seçtiği Saxe-Coburg'lu Leopold 21 Temmuz 1831'de Brüksel'de anayasaya yemin edip taç giydi (bugünkü Belçika ulusal bayramı). Hollanda'nın 2-12 Ağustos 1831 'On Gün Seferi' ancak Fransız-İngiliz müdahalesiyle durdu.",
  kaynak:"Britannica «Leopold I (king of Belgium)»; Wikipedia «Leopold I of Belgium» · ikincil kaynak" },

{ t:"1940-05-14", b:"Rotterdam bombalandı", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas","konu-siyasi","benelux"],
  devlet:"hollanda", devletler:["hollanda","almanya"], yer_id:"Rotterdam",
  gun:"14 Mayıs 1940",
  d:"14 Mayıs 1940'ta Alman bombardıman uçakları Rotterdam şehir merkezini yıktı (yaklaşık 800-900 ölü); Hollanda yüksek komutanlığı ertesi gün teslim oldu.",
  kaynak:"Britannica «Netherlands — World War II»; Wikipedia «Rotterdam Blitz» · ikincil kaynak" },

{ t:"1940-05-15", b:"Hollanda ordusu teslim oldu — Alman işgali başladı", tur:"isgal",
  onem:4, dunya:2, kapsam:"dis", etiket:["isgal","konu-siyasi","benelux"],
  devlet:"hollanda", devletler:["hollanda","almanya"], yer_id:"",
  gun:"15 Mayıs 1940",
  d:"15 Mayıs 1940'ta General Winkelman Hollanda kara kuvvetlerinin teslimini bildirdi (Zeeland'daki birlikler 17 Mayıs'a dek direndi); Kraliçe Wilhelmina 13 Mayıs'ta Londra'ya gitmişti. 10 Mayıs'ta başlayan Alman saldırısının Hollanda ayağı beş günde bitti.",
  kaynak:"Britannica «Netherlands — World War II»; Wikipedia «Battle of the Netherlands» · ikincil kaynak" },

{ t:"1940-05-28", b:"Belçika ordusu teslim oldu", tur:"isgal",
  onem:4, dunya:2, kapsam:"dis", etiket:["isgal","konu-siyasi","benelux"],
  devlet:"belcika", devletler:["belcika","almanya"], yer_id:"",
  gun:"28 Mayıs 1940",
  d:"III. Leopold 28 Mayıs 1940'ta Belçika ordusunun kayıtsız şartsız teslim olduğunu bildirdi; hükûmet sürgüne gitmeyi seçti. Belçika 1944 sonbaharına dek Alman askerî yönetimi altında kaldı.",
  kaynak:"Britannica «Belgium — World War II»; Wikipedia «Belgian Campaign» · ikincil kaynak" },

{ t:"1944-09-03", b:"Brüksel kurtarıldı", tur:"savas",
  onem:3, dunya:2, kapsam:"dis", etiket:["savas","konu-siyasi","benelux"],
  devlet:"belcika", devletler:["belcika","almanya"], yer_id:"Brüksel",
  gun:"3 Eylül 1944",
  d:"3 Eylül 1944'te İngiliz Muhafız Zırhlı Tümeni Brüksel'e girdi; ertesi gün Anvers limanı (4 Eylül) ele geçti.",
  kaynak:"Britannica «Belgium — World War II»; Wikipedia «Liberation of Brussels» · ikincil kaynak" },

{ t:"1944-09-17", b:"Market Garden Harekâtı başladı", tur:"savas",
  onem:3, dunya:2, kapsam:"dis", etiket:["savas","konu-siyasi","benelux"],
  devlet:"hollanda", devletler:["hollanda","almanya"], yer_id:"",
  gun:"17 Eylül 1944",
  d:"17 Eylül 1944'te Müttefik hava indirme birlikleri Eindhoven, Nijmegen ve Arnhem köprülerini almak için indi; Arnhem köprüsü ele geçirilemedi, Hollanda'nın kuzeyi 1945 Mayısı'na dek işgal altında kaldı.",
  kaynak:"Britannica «Operation Market-Garden»; Wikipedia «Operation Market Garden» · ikincil kaynak; Arnhem yerleşim listesinde YOK — yer_id boş" },

{ t:"1944-12-16", b:"Ardenler Taarruzu başladı", tur:"savas",
  onem:3, dunya:2, kapsam:"dis", etiket:["savas","konu-siyasi","benelux"],
  devlet:"belcika", devletler:["belcika","almanya"], yer_id:"",
  gun:"16 Aralık 1944",
  d:"16 Aralık 1944'te Almanya Belçika ve Lüksemburg'daki Ardenler'de karşı saldırıya geçti (Bulge Muharebesi); Bastogne kuşatıldı. Ocak 1945 ortasında taarruz geri püskürtüldü.",
  kaynak:"Britannica «Battle of the Bulge»; Wikipedia «Battle of the Bulge» · ikincil kaynak" },

{ t:"1945-05-05", b:"Hollanda'daki Alman kuvvetleri Wageningen'de teslim oldu", tur:"isgal",
  onem:4, dunya:2, kapsam:"dis", etiket:["isgal","konu-siyasi","benelux"],
  devlet:"hollanda", devletler:["hollanda","almanya"], yer_id:"",
  gun:"5 Mayıs 1945",
  d:"5 Mayıs 1945'te Wageningen'de Alman komutan Blaskowitz Kanadalı General Foulkes'a Hollanda'daki Alman birliklerinin teslimini kabul ettirdi (yazılı teslim 6 Mayıs); Hollanda'nın beş yıllık işgali sona erdi.",
  kaynak:"Britannica «Netherlands — World War II»; Wikipedia «German surrender in the Netherlands» · ikincil kaynak" },

{ t:"1948-01-01", b:"Benelüks Gümrük Birliği yürürlüğe girdi", tur:"antlasma",
  onem:3, dunya:2, kapsam:"dis", etiket:["antlasma","konu-siyasi","benelux"],
  devlet:"belcika", devletler:["belcika","hollanda","luksemburg"], yer_id:"Brüksel",
  gun:"1 Ocak 1948",
  d:"Londra'da 5 Eylül 1944'te sürgündeki üç hükûmetin imzaladığı gümrük sözleşmesi 1 Ocak 1948'de yürürlüğe girdi; Belçika, Hollanda ve Lüksemburg arasında ortak dış tarife kuruldu — sonraki Avrupa bütünleşmesinin öncülü.",
  kaynak:"Britannica «Benelux»; Wikipedia «Benelux» · ikincil kaynak" },

];
