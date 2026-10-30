// =====================================================================
// TARİHÎ YOLLAR — AVRASYA İPEK YOLU (Çang'an → Akdeniz) · ikinci dalga
// Ad alanı: data/yollar_ipek_yolu.js → window.YOLLAR_IPEK_YOLU
// Şema: data/yollar_anadolu_balkan.js başlığındaki ile aynıdır (app.js `YOLLAR_*` okur).
//   Atlasta kaydı olmayan geçit AÇIK koordinatla yazılır: [lon, lat, "ad"] — bu koordinatlar
//   yerin coğrafî konumudur (sahiplik/yerleşim tanıklığı DEĞİL); üretilmiş petek verisine girmez.
//
// 🟡 KAYNAK TEYİDİ (30 Ekim 2026, kısmî): ilk sürümdeki "TDV İpek Yolu bulunamadı" beyanı
// YANLIŞTI — madde vardır: Nebi Bozkurt, "İPEK YOLU", TDV İslâm Ansiklopedisi c.22 (2000),
// s.369-373, https://islamansiklopedisi.org.tr/ipek-yolu (özet aracıyla okundu, paragraf atfı yok).
// Madde şunları verir: ana kara yolu Çin–Orta Asya–İran–Mezopotamya–Antakya/Sûr; orta yol
// (Turfan–Karaşar–Kuça–Kâşgar–Terek Boğazı–Fergana–Semerkant–Buhara–Merv); güney yol (Hoten–Kargalık–
// Yârkend–Pamir–Bedahşan–Tohâristan–Bâmyân/Gazne–Hindistan); kuzey kol (Hami–Balkaş–Talas, ikincil);
// Hexi koridoru şehirleri Chang-an–Lanzhou–Linxia–Zhangye–Jiuquan–Jiayuguan–Anxi–Dunhuang; Zhang Qian'ın
// görevlendirilişi MÖ 140. OKUNAMADI: UNESCO WHC 1442 (403), Hansen, Shiji, İbn Hurdâzbih, Frankopan.
// Hâlâ hiçbir kayıt `dogrulandi:true` DEĞİLDİR (TDV maddesi hiçbir kaydın tam durak dizisini vermez);
// her ic_not hangi durağın TDV'de bulunduğunu, hangisinin bulunmadığını söyler.
// `f`/`t` YIL hassasiyetindedir (YYYY-01-01) ve editoryaldır: okunan kaynaklarda kayıtlara özgü
// bir "şu olay, şu yıl" dayanağı BULUNAMADI (yalnız TDV'deki MÖ 140, 629, 751, XVI. yy genel).
//
// DALGA SINIRI: kara ana hatlar + ana bağlantılar. Henüz YOK: Çang'an–Çengdu güneybatı yolu,
// Hint Okyanusu/Çin Denizi deniz yolları, Kırım–Volga bozkır yolu, Kuzey Hindistan iç ağı.
// =====================================================================
window.YOLLAR_IPEK_YOLU = [

  // ---------------- ÇİN → TARİM HAVZASI — ana ----------------
  { id: "ip-hexi", ad: "Çang'an – Hexi Koridoru – Dunhuang", sinif: "ana",
    gecit: ["Xi'an (Chang'an)", [105.72, 34.58, "Tianshui"], "Lanzhou", [102.64, 37.93, "Wuwei"], "Zhangye (Ganzhou)", [98.49, 39.73, "Jiuquan"], [98.29, 39.80, "Jiayuguan"], "Dunhuang"],
    f: "-0110-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, Nebi Bozkurt, \"İpek Yolu\", c.22 (2000), s.369-373 (Hexi şehirleri: Chang-an, Lanzhou, Linxia, Zhangye, Jiuquan, Jiayuguan, Anxi, Dunhuang); UNESCO WHC 1442 (okunamadı); Hansen 2012, Shiji 123 (okunamadı)",
    ic_not: "TDV'de bulunan duraklar: Chang-an, Lanzhou, Zhangye, Jiuquan, Jiayuguan, Dunhuang. TDV'de BULUNMAYAN: Tianshui, Wuwei (coğrafî ara durak). f ≈ MÖ 111 Hexi komutanlıkları kaynakla okunmadı; TDV Zhang Qian'ı MÖ 140'a bağlar (çelişki beyanı: Hansen/Shiji ile karşılaştırılmadı). t editoryal (TDV: XVI. yy'da kara yolunun güvenlik kaybı; 1700 için kaynak yok). Jiuquan/Jiayuguan/Wuwei/Tianshui açık koordinat." },
  { id: "ip-tarim-kuzey", ad: "Tarim Kuzey Kolu (Dunhuang – Hami – Turfan – Kuça – Aksu – Kaşgar)", sinif: "ana",
    gecit: ["Dunhuang", [93.51, 42.83, "Hami (Kumul)"], "Turfan", [86.57, 42.06, "Karaşar (Yanqi)"], "Kuça (Kuqa)", "Aksu (Tarım)", "Kaşgar"],
    f: "-0110-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"İpek Yolu\" (Bozkurt, 2000): orta yol Turfan–Karaşar–Kuça–Kâşgar, Hami kuzey yolunun ilk yeri; UNESCO WHC 1442 (okunamadı)",
    ic_not: "TDV'de bulunan: Turfan, Karaşar (eklendi), Kuça, Kâşgar, Hami. TDV'de BULUNMAYAN: Aksu (Kuça–Kâşgar arasında coğrafî ara durak). Dunhuang–Hami arası çöl geçişi ara noktasız ⇒ eğri tahmindir. f/t editoryal." },
  { id: "ip-tarim-guney", ad: "Tarim Güney Kolu (Dunhuang – Çarkılık – Hotan – Yarkent – Kaşgar)", sinif: "ana",
    gecit: ["Dunhuang", [88.17, 39.02, "Çarkılık (Ruoqiang)"], "Hotan", [77.42, 37.88, "Kargalık (Yecheng)"], "Yarkent (Şaçe)", "Kaşgar"],
    f: "-0110-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"İpek Yolu\" (Bozkurt, 2000): güney yol Hoten–Kargalık–Yârkend–Kâşgar; Hansen 2012 (okunamadı)",
    ic_not: "TDV'de bulunan: Hoten, Kargalık (eklendi), Yârkend, Kâşgar. TDV'de BULUNMAYAN: Çarkılık (Dunhuang–Hotan arası coğrafî ara durak). Niya/Keriya vahaları atlasta kayıtsız. f/t editoryal." },

  // ---------------- TARİM → MÂVERÂÜNNEHİR — ana ----------------
  { id: "ip-fergana", ad: "Kaşgar – Fergana Vadisi – Hocend – Semerkant", sinif: "ana",
    gecit: ["Kaşgar", [72.79, 40.53, "Oş"], "Fergana", [69.62, 40.28, "Hocend"], "Semerkant"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"İpek Yolu\" (Bozkurt, 2000): Kâşgar batısında Terek Boğazı → Fergana → Üsrûşene → Semerkant; Shiji 123, Hansen 2012 (okunamadı)",
    ic_not: "TDV'de bulunan geçit: TEREK BOĞAZI (Kâşgar–Fergana geçişi; koordinatı doğrulanmadığı için eklenmedi). Oş ve Hocend TDV'de BULUNMAYAN coğrafî ara duraklardır. f editoryal: TDV Zhang Qian'ı MÖ 140'a bağlar, kayıttaki MÖ 126 (dönüş yılı) Shiji/Hansen'den okunmadı." },
  { id: "ip-pamir", ad: "Kaşgar – Pamir – Badahşan – Belh", sinif: "ana",
    gecit: ["Kaşgar", "Taşkurgan (Sarıkol)", [70.57, 37.12, "Feyzabad (Badahşan)"], "Belh"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"İpek Yolu\" (Bozkurt, 2000): güney yol Pamir yaylaları → Bedahşan, Tohâristan; Kâşgar–Taş Kurgan Hûncerâb Geçidi; Hansen 2012 (okunamadı)",
    ic_not: "TDV'de bulunan: Hûncerâb Geçidi/Taş Kurgan, Bedahşan, Tohâristan (Belh bölgesi). TDV'de BULUNMAYAN: Feyzabad, Belh adı. TDV'de bu yol Hoten/Yârkend'den başlar; Kâşgar'dan başlatan bağlantı editoryal. 'Pamir UNESCO WHC 1442 listesinde yok' beyanı liste okunamadığı için teyitsiz. Ana/tali ayrımı editoryal ama TDV ile çelişmez (TDV bunu üç ana yoldan biri sayar)." },
  { id: "ip-tianshan", ad: "Tianshan Kuzey Hattı (Aksu – Suyab – Taraz – Taşkent)", sinif: "ana",
    gecit: ["Aksu (Tarım)", "Suyab", [71.37, 42.90, "Taraz (Talas)"], "Taşkent"],
    f: "0600-01-01", t: "1300-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"İpek Yolu\" (Bozkurt, 2000): kuzey kol Hami–Balkaş çevresi–Talas, Süyab ve Talas ticaret merkezleri; UNESCO WHC 1442 (okunamadı, ikincil özet: Suyab/Talas bileşen)",
    ic_not: "TDV'de bulunan: Süyab, Talas (Suyab–Taraz sırası). TDV'de BULUNMAYAN: Aksu ve Taşkent bağlantısı. f/t editoryal: TDV'deki 751 Talas Savaşı f=600 ile ilişkilendirilemedi. Aksu–Suyab arası Tianshan geçişi (Bedel yönü) ara noktasız ⇒ eğri tahmindir." },

  // ---------------- MÂVERÂÜNNEHİR → İRAN → AKDENİZ — ana ----------------
  { id: "ip-sogd", ad: "Soğd Hattı (Taşkent – Semerkant – Buhara – Amul – Merv)", sinif: "ana",
    gecit: ["Taşkent", "Semerkant", "Buhara", [63.58, 39.07, "Amul (Çarcuy)"], "Merv (Mari)"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"İpek Yolu\" (Bozkurt, 2000): Semerkant → Buhara → Merv sırası; TDV \"Semerkant\" (Mâverâünnehir/Soğd merkezi)",
    ic_not: "TDV'de bulunan: Semerkant–Buhara–Merv sırası. TDV'de BULUNMAYAN: Taşkent ve Amul (Çarcuy) bu hat içinde. Taşkent–Semerkant arası Hocend/Zerefşan vadisi ip-fergana ile örtüşür. f/t editoryal." },
  { id: "ip-horasan", ad: "Büyük Horasan Yolu (Merv – Nişabur – Rey – Hemedan – Bağdat)", sinif: "ana",
    gecit: ["Merv (Mari)", [58.80, 36.21, "Nişabur"], "Rey", "Hemedan", "Bağdat"],
    f: "0750-01-01", t: "1500-01-01", dogrulandi: false,
    kaynak: "bulunamadı — İbn Hurdâzbih (Mesâlik) okunamadı; TDV \"Horasan\" (Çetin, 1998) ve TDV \"İpek Yolu\" bu dizgeyi bir yol olarak TARİF ETMEZ (yalnız Merv, Nişabur, Rey, Belh, Herat şehir/bölge olarak ve Merv–Hemedan–Antakya geçer)",
    ic_not: "DOĞRULANAMADI: Merv–Nişabur–Rey–Hemedan–Bağdat sırası TDV'de bir yol olarak yok; Bağdat TDV İpek Yolu'nda yalnız Abbâsî tüccar bağlamında geçer. f=750 için kaynaklı olay bulunamadı (TDV Horasan: 128/746 Ebû Müslim Merv'de). 'Ahamenî Kral Yolu' iddiası okunmadı. Hemedan–Bağdat arası Hulvân/Kirmanşah geçidi ara noktasız." },
  { id: "ip-furat", ad: "Fırat Hattı (Bağdat – Hit – Rakka – Halep – Antakya)", sinif: "ana",
    gecit: ["Bağdat", [42.83, 33.64, "Hit"], [39.01, 35.95, "Rakka"], "Halep", "Antakya"],
    f: "-0300-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"İpek Yolu\" (Bozkurt, 2000): ana kara yolu Mezopotamya → Akdeniz'de Antakya ve Sûr",
    ic_not: "TDV yalnız Mezopotamya→Antakya/Sûr çıkışını verir; Fırat boyu Hit–Rakka–Halep ayrıntısı TDV'de YOK (coğrafî ara duraklar) ⇒ gecit dizisi teyitsiz. f=-0300 ('Seleukos çağı') için kaynaklı yıl bulunamadı. Önceki Kur'an Ansiklopedisi atfı kaldırıldı (hakemli değil)." },

  // ---------------- HİNDİSTAN BAĞLANTISI — ana ----------------
  { id: "ip-hindistan", ad: "Belh – Kabil – Hayber – Peşaver – Lahor – Multan", sinif: "ana",
    gecit: ["Belh", [67.82, 34.82, "Bâmyân"], [69.18, 34.53, "Kabil"], [71.58, 34.01, "Peşaver"], "Lahor", "Multan"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"İpek Yolu\" (Bozkurt, 2000): güney yol Bedahşan/Tohâristan → Bâmyân ve Gazne boğazları → Hindistan",
    ic_not: "TDV'de bulunan: Bâmyân (eklendi) ve Gazne boğazları. TDV'de BULUNMAYAN: Kabil–Peşaver–Hayber hattı (Hayber Geçidi TDV İpek Yolu'nda geçmez), Lahor, Multan ⇒ bu dilim ek kaynak bekliyor. Gazne Kabil'in güneyindedir; kayıt Bâmyân→Kabil→Peşaver hattını izler. f editoryal." },

  // ---------------- TALİ YOLLAR ----------------
  { id: "ip-t-herat", ad: "Merv – Herat – Belh", sinif: "tali",
    gecit: ["Merv (Mari)", "Herat", "Belh"],
    f: "0700-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Herat\" (XI. yy'da Akdeniz–Hindistan–Çin ana yolu üstünde merkez; Moğol sonrası ticaretin Herat'a kayışı) — Merv→Herat→Belh SIRASI hiçbir okunan kaynakta yok",
    ic_not: "DOĞRULANAMADI (sıra). TDV Herat'a göre Herat XI. yy'da ana yol üstünde, Moğol sonrası öne geçer; 'tali' sınıfı bu yüzden tartışmalı. f=0700 için kaynaklı yıl bulunamadı (TDV: Herat 31/652'de barışla alındı, yolun doğuşu değil)." },
  { id: "ip-t-termez", ad: "Semerkant – Termez – Belh (Demir Kapı)", sinif: "tali",
    gecit: ["Semerkant", "Termez", "Belh"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Tirmiz\" (ortaçağda Hindistan'a giden eski kervan yolu Tirmiz'den geçer; 1220'de Moğollarca tahrip, 1407'de Halil Sultan tahkim)", ic_not: "TDV Tirmiz, Semerkant ve Belh bağlantısını ve Demir Kapı (Buzgala) boğazını anmaz ⇒ sıra teyitsiz; boğazın koordinatı doğrulanmadığı için eklenmedi. f=-0125 Termez'e özgü bir olaya bağlı değil." },
  { id: "ip-t-bozkir", ad: "Moğol Bozkır Kolu (Urgenç – Otrar – Almalık – Ganzhou)", sinif: "tali",
    gecit: [[59.15, 42.32, "Urgenç (Kunya-Urgenç)"], [68.30, 42.85, "Otrar"], [80.90, 44.20, "Almalık"], "Zhangye (Ganzhou)"],
    f: "1227-01-01", t: "1368-12-31", dogrulandi: false,
    kaynak: "Pegolotti, Pratica della mercatura (≈1340), Yule neşri web aynası (depts.washington.edu/silkroad/texts/pegol.html, özet okundu): Tana–Gintarchan–Sara–Saracanco–Organci–Oltrarre–Armalec–Camexu–Cassai–Cambalec; TDV \"Almalığ\" (Emel Esin), \"Gürgenç\"",
    ic_not: "Pegolotti'de HAMİ YOK ⇒ son durak Hami'den Camexu=Ganzhou'ya (Zhangye) düzeltildi. Tana–Saraçık kısmı bilinçli kısaltma. Almalık koordinatı YAKLAŞIK: TDV şehri Kulca'nın kuzeybatısında 'Mezâr harabeleri'nde gösterir ama koordinat vermez; kayıttaki 80.90 yaklaşık 30 km doğuya kayık olabilir (aday 80.53/44.24, yalnız Vikipedi'den, akademik teyit YOK). Otrar koordinatı teyitsiz; Urgenç TDV'ye göre Amuderya sol yakasında Köhne Ürgenç. f=1227: TDV Almalığ'a göre şehir Cengiz'in ölümü (1227) sonrası Çağatay soyuna verildi (yıl hassasiyeti); t=1368 Yuan sonu kaynaktan okunmadı, Pegolotti tanıklığı ≈1340." },
  { id: "ip-t-palmira", ad: "Medâin (Ktesifon) – Palmira – Şam (çöl yolu)", sinif: "tali",
    gecit: [[44.58, 33.09, "Medâin (Ktesifon)"], [38.27, 34.55, "Palmira"], "Şam"],
    f: "0130-01-01", t: "0272-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Tedmür\": Mezopotamya'yı Suriye'ye bağlayan ticaret yolu durağı; en parlak dönem 130-270, Aurelianus 272'de tahrip etti, Hâlid b. Velîd 634'te fethetti",
    ic_not: "Önceki sürümde başlangıç 'Bağdat' idi (Bağdat 762'de kuruldu ⇒ anakronizm); Medâin (Ktesifon) ile değiştirildi. f/t TDV Tedmür'ün parlak dönemi ve Aurelianus'un tahribidir (yıl hassasiyeti, editoryal; 634 fethine kadar uzatılabilir). TDV Tedmür'de Medâin ve Fırat geçer ama Palmira–Medâin hattı bir yol olarak tarif edilmez. Ktesifon ve Palmira koordinatları kaynakla teyit edilmedi." },
  { id: "ip-t-musul", ad: "Tebriz – Musul – Nusaybin – Halep", sinif: "tali",
    gecit: ["Tebriz", "Musul", [41.22, 37.07, "Nusaybin"], "Halep"],
    f: "1200-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Nusaybin\": Basra Körfezi yolları buradan Anadolu ve Suriye limanlarına ayrılır, Ninova'dan Anadolu merkezlerine giden yolda konak; Tebriz–Musul–Nusaybin–Halep DİZİSİ hiçbir kaynakta okunmadı",
    ic_not: "DOĞRULANAMADI (dizi): TDV Tebriz Musul'a bağlamaz; Musul ve Halep TDV Nusaybin'de geçmez. Nusaybin–Halep arasında Rakka/Harran/Urfa duraklarının atlanmış olması muhtemel. f/t editoryal (TDV Tebriz: İlhanlı yükselişi, Abaka'nın başkent yapması dolaylı)." },
  { id: "ip-t-tebriz-erzurum", ad: "Tebriz – Erzurum", sinif: "tali",
    gecit: ["Tebriz", "Erzurum"],
    f: "1295-01-01", t: "1898-12-31", dogrulandi: true,
    kaynak: "TDV İslâm Ansiklopedisi, \"Tebriz\" (XIII. yy sonlarında Tebriz–Anadolu–Avrupa hattı öne çıktı, Van/Erzurum/Erdebil yollarına açıldı; Gazan 1295-1304; Cenevizlilerin 1304'te Tebriz konsolosluğu) ve \"Erzurum\" (Trabzon–İran transit ticareti; 1898'de yaklaşık 5.000 ton transit mal)",
    ic_not: "Güzergâh (Tebriz–Erzurum) iki TDV maddesince doğrulandı. f=1295: TDV'nin 'XIII. yy sonu'na yaslanan Gazan'ın başlangıcı (yıl hassasiyeti, editoryal); önceki f=1200 kaynaksızdı. t=1898: TDV Erzurum'daki SON TARİHLİ transit verisi, yolun bittiği yıl DEĞİL (önceki 1923 kaynaksızdı). Karadeniz çıkışı için an-trabzon ile birleşir; Hoy/Doğubayazıt ara noktaları eklenmedi." },
  { id: "ip-t-kazvin", ad: "Rey – Kazvin – Tebriz", sinif: "tali",
    gecit: ["Rey", "Kazvin", "Tebriz"],
    f: "1200-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Kazvin\" (Sâsânî Şâpûr I garnizonu ≈250, 644 sulh, 1220 Moğol katliamı, 1555 Safevî başkenti; Kaçarlar zamanı önemli yollar üstünde) — Rey–Kazvin–Tebriz SIRASI okunmadı",
    ic_not: "DOĞRULANAMADI (sıra): TDV Kazvin Rey ve Tebriz bağlantısı vermez. f=1200'ü açıklayan olay bulunamadı (1555 Safevî başkenti daha güçlü bir kırılmadır)." },
  { id: "ip-t-kafkas", ad: "Tebriz – Şamahı – Derbent (Hazar kıyısı)", sinif: "tali",
    gecit: ["Tebriz", "Şamahı", [48.30, 42.06, "Derbent"]],
    f: "0600-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Derbend (Dağıstan)\" (Hazar'ın kuzeybatı kıyısında liman; Sâsânîler V-VI. yy surlu şehir; Araplar ≈652-653; Safevîler 1509; Osmanlı 1578-1607; Rus işgali 1722) ve \"Şirvanşahlar\" (Şamahı ilk merkez, XV. yy başında Bakü başkent, İpek Yolu ticareti)",
    ic_not: "DOĞRULANAMADI (sıra): Tebriz–Şamahı–Derbent dizisi okunmadı; TDV Şamahı maddesinin adresi bulunamadı. Şamahı–Derbent arası Bakü/Kuba'dan geçer, araya eklenebilir. t=1700 kaynaksız; 1722 Rus işgali olası bir kırılma. f=0600 için kaynaklı yıl bulunamadı." }
];
