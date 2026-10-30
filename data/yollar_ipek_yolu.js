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
// 🟢 İKİNCİ TEYİT (30 Ekim 2026): Le Strange, The Lands of the Eastern Caliphate (Cambridge 1905, bölüm
// numarası; basılı sayfa çıkarılamadı) ile ip-horasan, ip-sogd, ip-t-herat, ip-t-termez; Alkan 2006 (U.Ü. SBD
// 11, s.141-143) ile ip-t-tebriz-halep durak SIRASI olarak teyitlidir. İbn Hurdâzbih/İstahrî vb. birincil metinler,
// UNESCO WHC 1442, Hansen, Shiji, Li Rongxi OKUNAMADI. TDV'de "Hît" maddesi yoktur. Sıra dışı ek not: f/t
// YILLARI hiçbir kayıtta kaynaklı değildir (editoryal; her ic_not'ta beyanlıdır).
// `dogrulandi:true` ⇒ durak SIRASI kaynakta; açık koordinatlar modern yer eşleşmesidir, kaynaksızdır.
// Kalan `false`: kaynakta durak sırası bulunamayan ya da kısmî olanlar (ic_not'ta neden yazılı).
// (1. dalga notu:) TDV maddesi hiçbir kaydın tam durak dizisini vermez;
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
    ic_not: "TDV'de bulunan geçit: TEREK BOĞAZI (Kâşgar–Fergana geçişi; koordinatı doğrulanmadığı için eklenmedi). 30 Ekim 2026 düzeltme: Oş ve Hocend TDV \"Fergana\" (Yazıcı, c.12) maddesinde VAR (Ûş'ta surlu garnizon; Kuteybe Hucend önünde); TDV \"Kâşgar\" (Hitchins, c.25): Kuteybe 96/715'te Kâşgar'ı alıp Fergana'ya ilerledi. Kâşgar–Oş–Fergana–Hocend–Semerkant sırası tek yol olarak okunmadı. f editoryal: TDV Zhang Qian'ı MÖ 140'a bağlar, kayıttaki MÖ 126 (dönüş yılı) Shiji/Hansen'den okunmadı." },
  { id: "ip-pamir", ad: "Kaşgar – Pamir – Badahşan – Belh", sinif: "ana",
    gecit: ["Kaşgar", "Taşkurgan (Sarıkol)", [70.57, 37.12, "Feyzabad (Badahşan)"], "Belh"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"İpek Yolu\" (Bozkurt, 2000): güney yol Pamir yaylaları → Bedahşan, Tohâristan; Kâşgar–Taş Kurgan Hûncerâb Geçidi; Hansen 2012 (okunamadı)",
    ic_not: "30 Ekim 2026 düzeltme: Feyzabad (Bedahşân maddesi: 'eski ipek yolunun getirdiği ticaretle bölgenin ekonomik merkezi', Saray, c.5) ve Belh (Yazıcı, c.5) TDV'de VAR; Kâşgar–Taşkurgan–Feyzabad–Belh SIRASI ve Vâhan koridoru kaynakta yok, f/t kaynaksız. TDV'de bulunan: Hûncerâb Geçidi/Taş Kurgan, Bedahşan, Tohâristan (Belh bölgesi). TDV'de bu yol Hoten/Yârkend'den başlar; Kâşgar'dan başlatan bağlantı editoryal. 'Pamir UNESCO WHC 1442 listesinde yok' beyanı liste okunamadığı için teyitsiz. Ana/tali ayrımı editoryal ama TDV ile çelişmez (TDV bunu üç ana yoldan biri sayar)." },
  { id: "ip-tianshan", ad: "Tianshan Kuzey Hattı (Aksu – Suyab – Taraz – Taşkent)", sinif: "ana",
    gecit: ["Aksu (Tarım)", "Suyab", [71.37, 42.90, "Taraz (Talas)"], "Taşkent"],
    f: "0600-01-01", t: "1300-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"İpek Yolu\" (Bozkurt, 2000): kuzey kol Hami–Balkaş çevresi–Talas, Süyab ve Talas ticaret merkezleri; UNESCO WHC 1442 (okunamadı, ikincil özet: Suyab/Talas bileşen)",
    ic_not: "30 Ekim 2026: Samuel Beal, Si-Yu-Ki (1884) önsöz (Xuanzang): Karashar → Kuçe → Baluka (Aksu çevresi) → Buzlu Dağlar (Muzart) → Işık Göl → Su-ye (Çu) vadisi → Taras → Tashkand — sıra destekleniyor ama ikincil 19. yy çevirisi, Bedel mi Muzart mı ihtilaflı, Li Rongxi okunamadı ⇒ dogrulandi:false. TDV Talas Savaşı (Taşağıl, c.39): Atlah mevkii, Temmuz 751; TDV Taşkent (c.40): VI-VIII. yy İpek Yolu merkezi. Aksu→Süyab doğrudan bağlantısı TDV'de yok; f=600 kaynaksız. TDV'de bulunan: Süyab, Talas (Suyab–Taraz sırası). TDV'de BULUNMAYAN: Aksu ve Taşkent bağlantısı. f/t editoryal: TDV'deki 751 Talas Savaşı f=600 ile ilişkilendirilemedi. Aksu–Suyab arası Tianshan geçişi (Bedel yönü) ara noktasız ⇒ eğri tahmindir." },

  // ---------------- MÂVERÂÜNNEHİR → İRAN → AKDENİZ — ana ----------------
  { id: "ip-sogd", ad: "Soğd Hattı (Taşkent – Semerkant – Buhara – Amul – Merv)", sinif: "ana",
    gecit: ["Taşkent", "Semerkant", "Buhara", [63.58, 39.07, "Amul (Çarcuy)"], "Merv (Mari)"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: true,
    kaynak: "Guy Le Strange, The Lands of the Eastern Caliphate, Cambridge 1905, bl. XXVIII, XXXI, XXXIII, XXXIV (Semerkant–Zamin–Benâkat–Şaş/Taşkent; Buhara–Semerkant sol yaka yolu; Amul/Çahâr Cûy 'büyük Horasan yolunun Mâverâünnehir'e geçtiği yer', Merv'in ≈120 mil KD'sı); TDV İslâm Ansiklopedisi \"İpek Yolu\" (Bozkurt, 2000): Semerkant → Buhara → Merv; TDV \"Merv\" (Merv–Âmül yolu, Akçakale Kervansarayı)",
    ic_not: "30 Ekim 2026 teyit: Taşkent–Semerkant–Buhara–Amul–Merv sırası LS'de ve TDV İpek Yolu'nda ayrı ayrı tutuyor; Amul = Çahâr Cûy/Çarcuy (LS XXVIII). LS'de Semerkant–Taşkent arası Zamin ve Benâkat'tan geçer (Hocend değil) — atlas durak listesine eklenmedi (koordinat kaynaksız). Birincil metinler okunamadı; LS sayfa numarası yok. f/t editoryal (kaynaklı yıl bulunamadı; Moğol yıkımları 1220 yolun bitişi değildir)." },
  { id: "ip-horasan", ad: "Büyük Horasan Yolu (Merv – Nişabur – Rey – Hemedan – Bağdat)", sinif: "ana",
    gecit: ["Merv (Mari)", [61.15, 36.54, "Serahs"], [59.62, 36.33, "Tûs"], [58.80, 36.21, "Nişabur"], [54.35, 36.17, "Dâmgân"], [53.39, 35.57, "Semnân"], "Rey", [50.35, 35.02, "Savah"], "Hemedan", [47.06, 34.31, "Kirmanşah"], [45.86, 34.46, "Hulvân"], "Bağdat"],
    f: "0750-01-01", t: "1500-01-01", dogrulandi: true,
    kaynak: "Guy Le Strange, The Lands of the Eastern Caliphate, Cambridge 1905 (archive.org in.ernet.dli.2015.153590), bl. I, XV, XXVI, XXVII: Bağdat–Hulvân–Kirmanşah–Hemedan–Savah–Rey (bl. XV), Rey–Semnân–Dâmgân–Nişabur (bl. XXVI), Nişabur–Tûs–Serahs–Merv (bl. I, XXVII); LS İbn Hurdâzbih, İbn Rustah, İstahrî, İbn Havkal, Kudâme, Mukaddesî'ye dayanan akademik derlemedir; TDV Rey, Hemedan, Nîşâbur (yol üstünde şehir olarak)",
    ic_not: "30 Ekim 2026 teyit: durak SIRASI Le Strange'de (1905) tarif edilir; ilk sürümdeki 5 durak LS'nin bütün ara duraklarını atlıyordu, eklendi. Birincil metinler (de Goeje BGA) DOĞRUDAN OKUNAMADI, LS basılı sayfa numarası çıkarılamadı (bölüm numarası verildi); İbn Rustah'ın Hulvân–Rey durak dökümü okunamadı. Serahs, Tûs, Dâmgân, Semnân, Savah, Kirmanşah, Hulvân açık koordinat = modern yer eşleşmesi (kaynakta koordinat yok). TDV bu dizgeyi yol olarak tarif etmez. f=750 ve t=1500 için kaynaklı yıl BULUNAMADI (TDV: X. yy'da Rey'in Horasan kapısı, 1220-1224 Moğol yıkımları yolun bitişi değildir) ⇒ f/t editoryal." },
  { id: "ip-furat", ad: "Fırat Hattı (Bağdat – Hit – Rakka – Halep – Antakya)", sinif: "ana",
    gecit: ["Bağdat", [42.83, 33.64, "Hit"], [39.01, 35.95, "Rakka"], "Halep", "Antakya"],
    f: "-0300-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"İpek Yolu\" (Bozkurt, 2000): ana kara yolu Mezopotamya → Akdeniz'de Antakya ve Sûr",
    ic_not: "30 Ekim 2026: TDV Rakka (Fırat'ta Suriye–Mezopotamya–Anadolu bağlantı noktası; 639 barış, 772 Râfika, 1258 Moğol, 1517 Osmanlı), TDV Halep ('Anadolu–Mezopotamya ve Akdeniz–İran ana yollarının kavşağı'; 1593 İskenderun gümrüğü; 1639 Acem ipeği kervanları) ve LS (1905) Hit/Anbar'ı Fırat'ta anar; Hît–Rakka arası (Anat, Rahbe, Habur) için hakemli kaynak okunamadı (Idrîsî listesi yalnız aktarmadan görüldü). TDV'de Hît maddesi YOK. Dizi ve f=-0300/t=1700 teyitsiz. Önceki not: TDV yalnız Mezopotamya→Antakya/Sûr çıkışını verir; Fırat boyu Hit–Rakka–Halep ayrıntısı TDV'de YOK (coğrafî ara duraklar) ⇒ gecit dizisi teyitsiz. f=-0300 ('Seleukos çağı') için kaynaklı yıl bulunamadı. Önceki Kur'an Ansiklopedisi atfı kaldırıldı (hakemli değil)." },

  // ---------------- HİNDİSTAN BAĞLANTISI — ana ----------------
  { id: "ip-hindistan", ad: "Belh – Kabil – Hayber – Peşaver – Lahor – Multan", sinif: "ana",
    gecit: ["Belh", [67.82, 34.82, "Bâmyân"], [69.18, 34.53, "Kabil"], [71.09, 34.09, "Hayber Geçidi"], [71.58, 34.01, "Peşaver"], "Lahor", "Multan"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"İpek Yolu\" (Bozkurt, 2000): güney yol Bedahşan/Tohâristan → Bâmyân ve Gazne boğazları → Hindistan",
    ic_not: "30 Ekim 2026 teyit: her durak TDV'de AYRI maddede var (Kâbil c.24, Peşâver c.34 'İpek yolunun önemli kavşağı', Lahor c.27, Multan c.31 'Orta Asya'ya açılan güzergâh', Belh c.5, Bedahşân c.5), TDV Kâbil Hayber Geçidi'ni Kâbil'in ≈160 km doğusunda ve Hindistan yolunun kontrol noktası olarak verir (Hayber eklendi; koordinatı TDV'de yok, Peşâver'in ≈16 km batısı (TDV Peşâver) dayanağıyla yaklaşık). Belh→Bâmyân→Kâbil→Peşaver→Lahor→Multan SIRASI hiçbir TDV maddesinde TEK YOL olarak yok ⇒ dogrulandi:false. Gazne (Kâbil'in ≈145 km GB'sı, Kâbil–Kandahar yolu) güney alternatifidir, eklenmedi. Xuanzang'ın Gandhara/Peşaver güzergâhı akademik neşirden okunmadı. f=-0125 ve t=1700 kaynaksız (TDV tarihleri: IX-X. yy Kâbil'de Hint malı alımı, 1504 Bâbür, XIII. yy ikinci yarısı Multan'ın ticarî gerilemesi)." },

  // ---------------- TALİ YOLLAR ----------------
  { id: "ip-t-herat", ad: "Merv – Herat", sinif: "tali",
    gecit: ["Merv (Mari)", "Herat"],
    f: "0700-01-01", t: "1700-01-01", dogrulandi: true,
    kaynak: "Guy Le Strange, The Lands of the Eastern Caliphate, Cambridge 1905, bl. I ('Merv'den güneydoğuya doğrudan Herat yolu', Herat'tan Sicistan'a devam eder), bl. XXVIII-XXIX (Merv–Merv-er-Rûd–Herat, Müstevfî yedi durak); TDV İslâm Ansiklopedisi \"Herat\" (XI. yy'da Akdeniz–Hindistan–Çin ana yolu üstünde merkez; Moğol sonrası ticaretin Herat'a kayışı)",
    ic_not: "30 Ekim 2026: ilk sürümdeki 'Merv–Herat–Belh' dizisi LS'de DOĞRUSAL BİR YOL DEĞİL — Belh'e ana yol Merv-er-Rûd–Talikan–Belh'ten gider, Herat yan koldur (bl. XXVIII-XXX). Belh ayağı bu yüzden çıkarıldı; Merv–Herat kolu LS'de var ⇒ dogrulandi:true. Merv-er-Rûd atlasta kayıtsız, eklenmedi. TDV Herat'a göre Herat XI. yy'da ana yol üstünde, Moğol sonrası öne geçer: 'tali' sınıfı tartışmalı. f/t kaynaksız editoryal (TDV: Herat 31/652'de barışla alındı, yolun doğuşu değil)." },
  { id: "ip-t-termez", ad: "Semerkant – Termez – Belh (Demir Kapı)", sinif: "tali",
    gecit: ["Semerkant", "Termez", "Belh"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: true,
    kaynak: "Guy Le Strange, The Lands of the Eastern Caliphate, Cambridge 1905, bl. I, XXX, XXXI (Belh'ten Ceyhun kıyısına iki merhale; Tirmiz Belh yolunun Ceyhun geçidi; Tirmiz'den ≈2 merhale kuzeyde Demir Kapı boğazı Semerkant'a yaklaşımı korur; Clavijo 1405 'Gates of Iron'); TDV İslâm Ansiklopedisi \"Tirmiz\" (ortaçağda Hindistan'a giden eski kervan yolu Tirmiz'den geçer; 1220'de Moğollarca tahrip, 1407'de Halil Sultan tahkim)",
    ic_not: "30 Ekim 2026 teyit: Belh–Tirmiz ve Tirmiz–Demir Kapı–Semerkant yaklaşımı LS'de var ⇒ sıra dogrulandi:true. Demir Kapı boğazı Belh'in yedi kapısından Bâb-ı Hadîd'den FARKLI yerdir (karıştırma). Boğaz atlasta kayıtsız ve koordinatı doğrulanmadığı için eklenmedi; Naviden (Ceyhun geçidi), Haşimcird, Kiş/Nahşeb LS'de ara duraktır, eklenmedi. LS basılı sayfa numarası yok. f/t editoryal (kaynaklı olay: 1220 yıkım, 1405 Clavijo geçişi)." },
  { id: "ip-t-bozkir", ad: "Moğol Bozkır Kolu (Urgenç – Otrar – Almalık – Ganzhou)", sinif: "tali",
    gecit: [[59.15, 42.32, "Urgenç (Kunya-Urgenç)"], [68.30, 42.85, "Otrar"], [80.90, 44.20, "Almalık"], "Zhangye (Ganzhou)"],
    f: "1227-01-01", t: "1368-12-31", dogrulandi: false,
    kaynak: "Pegolotti, Pratica della mercatura (≈1340), Yule neşri web aynası (depts.washington.edu/silkroad/texts/pegol.html, özet okundu): Tana–Gintarchan–Sara–Saracanco–Organci–Oltrarre–Armalec–Camexu–Cassai–Cambalec; TDV \"Almalığ\" (Emel Esin), \"Gürgenç\"",
    ic_not: "30 Ekim 2026: DURAK SIRASI Pegolotti'de (Yule–Cordier, Cathay and the Way Thither III, 1916, s.143-171) tam tutuyor: Organci–Oltrarre–Armalec–Camexu (Yule köşeli parantezi: Armalec '?Kulja', Camexu 'Ganchau'; Armalec=Almalık kesin değil); mesafeler 35-40 / 45 / 70 gün. Tek tanıklık ≈1340; f=1227/t=1368 kaynaksız ⇒ dogrulandi:false (dönem ve Almalık koordinatı). Pegolotti'de HAMİ YOK ⇒ son durak Hami'den Camexu=Ganzhou'ya (Zhangye) düzeltildi. Tana–Saraçık kısmı bilinçli kısaltma. Almalık koordinatı YAKLAŞIK: TDV şehri Kulca'nın kuzeybatısında 'Mezâr harabeleri'nde gösterir ama koordinat vermez; kayıttaki 80.90 yaklaşık 30 km doğuya kayık olabilir (aday 80.53/44.24, yalnız Vikipedi'den, akademik teyit YOK). Otrar koordinatı teyitsiz; Urgenç TDV'ye göre Amuderya sol yakasında Köhne Ürgenç. f=1227: TDV Almalığ'a göre şehir Cengiz'in ölümü (1227) sonrası Çağatay soyuna verildi (yıl hassasiyeti); t=1368 Yuan sonu kaynaktan okunmadı, Pegolotti tanıklığı ≈1340." },
  { id: "ip-t-palmira", ad: "Medâin (Ktesifon) – Palmira – Şam (çöl yolu)", sinif: "tali",
    gecit: [[44.58, 33.09, "Medâin (Ktesifon)"], [38.27, 34.55, "Palmira"], "Şam"],
    f: "0130-01-01", t: "0272-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Tedmür\": Mezopotamya'yı Suriye'ye bağlayan ticaret yolu durağı; en parlak dönem 130-270, Aurelianus 272'de tahrip etti, Hâlid b. Velîd 634'te fethetti",
    ic_not: "30 Ekim 2026: Aruz (Getty, 'Return to Palmyra') Pliny'ye dayanarak Palmira'yı Dicle'deki Seleukeia'dan 337 Roma mili uzakta verir (1. yy); kervanlar Fırat'a (Hit çevresi) çıkıp Körfez'e (Charax) iniyordu; Gawlikowski (Iraq 56, 1994) ticaretin ağırlıkla Charax'a gittiğini savunur (yalnız özet okundu) ⇒ Medâin ucu şüpheli, Palmira–Şam ayağı kaynaksız. Önceki sürümde başlangıç 'Bağdat' idi (Bağdat 762'de kuruldu ⇒ anakronizm); Medâin (Ktesifon) ile değiştirildi. f/t TDV Tedmür'ün parlak dönemi ve Aurelianus'un tahribidir (yıl hassasiyeti, editoryal; 634 fethine kadar uzatılabilir). TDV Tedmür'de Medâin ve Fırat geçer ama Palmira–Medâin hattı bir yol olarak tarif edilmez. Ktesifon ve Palmira koordinatları kaynakla teyit edilmedi." },
  { id: "ip-t-musul", ad: "Musul – Mardin – Urfa – Halep", sinif: "tali",
    gecit: ["Musul", "Mardin", "Urfa", "Halep"],
    f: "1500-01-01", t: "1800-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Musul\" (Osmanlı döneminde Musul–Mardin–Urfa–Halep kolu; Niebuhr 1766'da büyük kervan gördü; XVI-XVIII. yy)",
    ic_not: "30 Ekim 2026: ilk sürümdeki 'Tebriz–Musul–Nusaybin–Halep' dizisi kaynakta TEK ROTA olarak yok (Alkan 2006'ya göre Tebriz→Halep Musul'dan değil Van–Bitlis–Diyarbakır–Urfa'dan gider ⇒ ip-t-tebriz-halep). Burada yalnız TDV Musul'un Musul–Mardin–Urfa–Halep kolu kaldı; Mardin'in TDV Musul metninde geçip geçmediği özet aracıyla okunduğu için paragraf atfı yok ⇒ dogrulandi:false. Dönem TDV'nin 'XVI-XVIII. yy' ifadesinin yıla yuvarlanmasıdır (editoryal); İlhanlı dönemi için kaynak bulunamadı." },
  { id: "ip-t-tebriz-halep", ad: "Tebriz – Van – Bitlis – Diyarbakır – Urfa – Birecik – Halep", sinif: "tali",
    gecit: ["Tebriz", "Van", "Bitlis", "Diyarbakır", "Urfa", "Birecik", "Halep"],
    f: "1400-01-01", t: "1600-12-31", dogrulandi: true,
    kaynak: "Nilüfer Alkan, \"15. ve 16. Yüzyıllarda İran İpek Yolu'nda Kervanlar\", U.Ü. Fen-Edebiyat Fakültesi Sosyal Bilimler Dergisi, yıl 7, sayı 11 (2006/2), s.141-143 (https://dergipark.org.tr/en/download/article-file/214597): Tebriz→Halep yolu Van–Bitlis–Diyarbakır–Urfa–Birecik üzerinden",
    ic_not: "30 Ekim 2026: tam metin okundu; durak sırası makalede ⇒ dogrulandi:true. Dönem makalenin başlığındaki 15.–16. yüzyıldır (yıl hassasiyeti, 1400–1600 yuvarlaması editoryal). Alkan Tebriz'den Van'a ara durak vermez; Tebriz–Van arası ara noktasız ⇒ eğri tahmindir." },
  { id: "ip-t-tebriz-erzurum", ad: "Tebriz – Erzurum", sinif: "tali",
    gecit: ["Tebriz", "Erzurum"],
    f: "1295-01-01", t: "1898-12-31", dogrulandi: true,
    kaynak: "TDV İslâm Ansiklopedisi, \"Tebriz\" (XIII. yy sonlarında Tebriz–Anadolu–Avrupa hattı öne çıktı, Van/Erzurum/Erdebil yollarına açıldı; Gazan 1295-1304; Cenevizlilerin 1304'te Tebriz konsolosluğu) ve \"Erzurum\" (Trabzon–İran transit ticareti; 1898'de yaklaşık 5.000 ton transit mal)",
    ic_not: "Güzergâh (Tebriz–Erzurum) iki TDV maddesince doğrulandı. f=1295: TDV'nin 'XIII. yy sonu'na yaslanan Gazan'ın başlangıcı (yıl hassasiyeti, editoryal); önceki f=1200 kaynaksızdı. t=1898: TDV Erzurum'daki SON TARİHLİ transit verisi, yolun bittiği yıl DEĞİL (önceki 1923 kaynaksızdı). Karadeniz çıkışı için an-trabzon ile birleşir; Hoy/Doğubayazıt ara noktaları eklenmedi." },
  { id: "ip-t-kazvin", ad: "Rey – Kazvin – Tebriz", sinif: "tali",
    gecit: ["Rey", "Kazvin", "Tebriz"],
    f: "1200-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Kazvin\" (Sâsânî Şâpûr I garnizonu ≈250, 644 sulh, 1220 Moğol katliamı, 1555 Safevî başkenti; Kaçarlar zamanı önemli yollar üstünde) — Rey–Kazvin–Tebriz SIRASI okunmadı",
    ic_not: "30 Ekim 2026: Iranica 'Commerce vi' (Safevî-Kaçar): ipek Kazvin'den Tebriz'e, oradan Erzurum'a; Iranica 'Il-Khanids ii': Sultaniye Kazvin'in ≈120 km KB'sında, Tebriz yolu üstünde (araya girer, eklenmedi). Kazvin–Tebriz parçası Safevî dönemi için destekli, Rey–Kazvin halkası kaynaksız. DOĞRULANAMADI (sıra): TDV Kazvin Rey ve Tebriz bağlantısı vermez. f=1200'ü açıklayan olay bulunamadı (1555 Safevî başkenti daha güçlü bir kırılmadır)." },
  { id: "ip-t-kafkas", ad: "Tebriz – Şamahı – Derbent (Hazar kıyısı)", sinif: "tali",
    gecit: ["Tebriz", "Şamahı", [48.30, 42.06, "Derbent"]],
    f: "0600-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Derbend (Dağıstan)\" (Hazar'ın kuzeybatı kıyısında liman; Sâsânîler V-VI. yy surlu şehir; Araplar ≈652-653; Safevîler 1509; Osmanlı 1578-1607; Rus işgali 1722) ve \"Şirvanşahlar\" (Şamahı ilk merkez, XV. yy başında Bakü başkent, İpek Yolu ticareti)",
    ic_not: "30 Ekim 2026: Iranica 'Commerce vi': Erdebil–Şamahı–Erivan alternatif ipek yolu (Safevî-Kaçar); TDV Şirvanşahlar/Derbend: Bakü–Şamahı yolu 1255-56'da hanikâh ve camiyle donatıldı, Derbend–Şamahı 1554'te alındı ⇒ Şamahı–Derbent arası Bakü'den geçer (eklenmedi, koordinat kaynaksız). Tebriz–Şamahı–Derbent tek yol olarak okunmadı. DOĞRULANAMADI (sıra): Tebriz–Şamahı–Derbent dizisi okunmadı; TDV Şamahı maddesinin adresi bulunamadı. Şamahı–Derbent arası Bakü/Kuba'dan geçer, araya eklenebilir. t=1700 kaynaksız; 1722 Rus işgali olası bir kırılma. f=0600 için kaynaklı yıl bulunamadı." }
];
