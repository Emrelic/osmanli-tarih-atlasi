// =====================================================================
// TARİHÎ YOLLAR — AVRASYA İPEK YOLU (Çang'an → Akdeniz) · ikinci dalga
// Ad alanı: data/yollar_ipek_yolu.js → window.YOLLAR_IPEK_YOLU
// Şema: data/yollar_anadolu_balkan.js başlığındaki ile aynıdır (app.js `YOLLAR_*` okur).
//   Atlasta kaydı olmayan geçit AÇIK koordinatla yazılır: [lon, lat, "ad"] — bu koordinatlar
//   yerin coğrafî konumudur (sahiplik/yerleşim tanıklığı DEĞİL); üretilmiş petek verisine girmez.
//
// 🔴 DOĞRULAMA BORCU (beyan): bu dalgada her kaydın şehir dizisi ve ana/tali ayrımı genel
// kaynak literatürüne dayanır, kayıt başına sayfa/satır doğrulaması YAPILMADI ⇒ hepsi
// `dogrulandi:false`. TDV "İpek Yolu" maddesi bu turda aranıp bulunamadı (arama başka madde
// döndürdü). `f`/`t` YIL hassasiyetindedir (YYYY-01-01) ve editoryaldır: yol bir günde
// doğmaz; ic_not'ta hangi olayın yılına yaslandığı yazılır.
//
// DALGA SINIRI: kara ana hatlar + ana bağlantılar. Henüz YOK: Çang'an–Çengdu güneybatı yolu,
// Hint Okyanusu/Çin Denizi deniz yolları, Kırım–Volga bozkır yolu, Kuzey Hindistan iç ağı.
// =====================================================================
window.YOLLAR_IPEK_YOLU = [

  // ---------------- ÇİN → TARİM HAVZASI — ana ----------------
  { id: "ip-hexi", ad: "Çang'an – Hexi Koridoru – Dunhuang", sinif: "ana",
    gecit: ["Xi'an (Chang'an)", [105.72, 34.58, "Tianshui"], "Lanzhou", [102.64, 37.93, "Wuwei"], "Zhangye (Ganzhou)", [98.49, 39.73, "Jiuquan"], "Dunhuang"],
    f: "-0110-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "UNESCO WHC 1442 \"Silk Roads: the Routes Network of Chang'an-Tianshan Corridor\" (2014); Sima Qian, Shiji 123 (Zhang Qian); Hansen, The Silk Road: A New History (Oxford UP, 2012)",
    ic_not: "f ≈ MÖ 111 Han'ın Hexi komutanlıklarını kurması (editoryal, yıl hassasiyeti); t editoryal (karavan trafiğinin Ming/Qing'de fiilen azalışı; kesin gün YOK). Wuwei/Jiuquan/Tianshui atlasta kayıtsız ⇒ açık koordinat." },
  { id: "ip-tarim-kuzey", ad: "Tarim Kuzey Kolu (Dunhuang – Hami – Turfan – Kuça – Aksu – Kaşgar)", sinif: "ana",
    gecit: ["Dunhuang", [93.51, 42.83, "Hami (Kumul)"], "Turfan", "Kuça (Kuqa)", "Aksu (Tarım)", "Kaşgar"],
    f: "-0110-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "UNESCO WHC 1442 (Turfan/Kuça bileşenleri); Hansen 2012; Shiji 123",
    ic_not: "Tianshan'ın güney eteğinden geçen kol. Dunhuang–Hami arası çöl geçişidir (Yumen/Yang kapıları yönü), ara nokta yok ⇒ eğri tahmindir." },
  { id: "ip-tarim-guney", ad: "Tarim Güney Kolu (Dunhuang – Çarkılık – Hotan – Yarkent – Kaşgar)", sinif: "ana",
    gecit: ["Dunhuang", [88.17, 39.02, "Çarkılık (Ruoqiang)"], "Hotan", "Yarkent (Şaçe)", "Kaşgar"],
    f: "-0110-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "Hansen 2012; Shiji 123",
    ic_not: "Kunlun'un kuzey eteği vaha zinciri. Çarkılık–Hotan arası Niya/Keriya vahaları atlasta kayıtsız, eklenmedi." },

  // ---------------- TARİM → MÂVERÂÜNNEHİR — ana ----------------
  { id: "ip-fergana", ad: "Kaşgar – Fergana Vadisi – Hocend – Semerkant", sinif: "ana",
    gecit: ["Kaşgar", [72.79, 40.53, "Oş"], "Fergana", [69.62, 40.28, "Hocend"], "Semerkant"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "Shiji 123 (Dayuan = Fergana); Hansen 2012",
    ic_not: "f ≈ MÖ 126 Zhang Qian'ın dönüşü (yıl hassasiyeti, editoryal). Kaşgar–Oş arası Tianshan/Alay geçişi (İrkeştam yönü) — ara geçit koordinatı eklenmedi." },
  { id: "ip-pamir", ad: "Kaşgar – Pamir – Badahşan – Belh", sinif: "ana",
    gecit: ["Kaşgar", "Taşkurgan (Sarıkol)", [70.57, 37.12, "Feyzabad (Badahşan)"], "Belh"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "Hansen 2012; UNESCO WHC 1442 bağlamı (yalnız Çin-Kazakistan-Kırgızistan bileşenleri listelidir; Pamir dilimi listede DEĞİL)",
    ic_not: "Ana/tali ayrımı editoryal: Hindistan ve Baktria'ya açılan kapı olduğu için ana. Wahan koridoru arada; ara koordinat yok ⇒ eğri tahmindir." },
  { id: "ip-tianshan", ad: "Tianshan Kuzey Hattı (Aksu – Suyab – Taraz – Taşkent)", sinif: "ana",
    gecit: ["Aksu (Tarım)", "Suyab", [71.37, 42.90, "Taraz (Talas)"], "Taşkent"],
    f: "0600-01-01", t: "1300-01-01", dogrulandi: false,
    kaynak: "UNESCO WHC 1442 (Suyab/Ak-Beşim, Balasagun, Talas vadisi bileşenleri); Hansen 2012",
    ic_not: "f/t editoryal (Göktürk/Soğd dönemi → Moğol sonrası). Aksu–Suyab arası Tianshan geçişi (Bedel yönü) ara noktasız ⇒ eğri tahmindir." },

  // ---------------- MÂVERÂÜNNEHİR → İRAN → AKDENİZ — ana ----------------
  { id: "ip-sogd", ad: "Soğd Hattı (Taşkent – Semerkant – Buhara – Amul – Merv)", sinif: "ana",
    gecit: ["Taşkent", "Semerkant", "Buhara", [63.58, 39.07, "Amul (Çarcuy)"], "Merv (Mari)"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi \"Semerkant\" (Mâverâünnehir/Soğd merkezi); Hansen 2012",
    ic_not: "Ayak sırası editoryal. Taşkent–Semerkant arası Hocend/Zerefşan vadisi tali ayağı ip-fergana ile örtüşür." },
  { id: "ip-horasan", ad: "Büyük Horasan Yolu (Merv – Nişabur – Rey – Hemedan – Bağdat)", sinif: "ana",
    gecit: ["Merv (Mari)", [58.80, 36.21, "Nişabur"], "Rey", "Hemedan", "Bağdat"],
    f: "0750-01-01", t: "1500-01-01", dogrulandi: false,
    kaynak: "İbn Hurdâzbih, Kitâbü'l-Mesâlik ve'l-Memâlik (Abbâsî berîd/menzil hatları); Hansen 2012",
    ic_not: "f Abbâsî başkentinin Bağdat'a taşınması sonrası yoğunlaşma (editoryal, yıl hassasiyeti); yol Ahamenî Kral Yolu'ndan beri kullanılır, f onu yansıtmaz. Hemedan–Bağdat arası Hulvân/Kirmanşah geçidi ara noktasız." },
  { id: "ip-furat", ad: "Fırat Hattı (Bağdat – Hit – Rakka – Halep – Antakya)", sinif: "ana",
    gecit: ["Bağdat", [42.83, 33.64, "Hit"], [39.01, 35.95, "Rakka"], "Halep", "Antakya"],
    f: "-0300-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "Kur'an Ansiklopedisi \"İpek Yolu\" (genel kaynak, TDV değil) — Antakya ve Sûr'u Akdeniz çıkışı sayar; Hansen 2012",
    ic_not: "Ana/tali editoryal. f Seleukos çağı için yuvarlaktır. TDV İpek Yolu maddesi bulunamadığı için akademik teyit bekliyor." },

  // ---------------- HİNDİSTAN BAĞLANTISI — ana ----------------
  { id: "ip-hindistan", ad: "Belh – Kabil – Hayber – Peşaver – Lahor – Multan", sinif: "ana",
    gecit: ["Belh", [69.18, 34.53, "Kabil"], [71.58, 34.01, "Peşaver"], "Lahor", "Multan"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "Hansen 2012 (Baktria–Gandhara bağlantısı)",
    ic_not: "Belh–Kabil arası Hindukuş geçişi (Bamiyan yönü) ve Kabil–Peşaver arası Hayber geçidi ara noktasız ⇒ eğri tahmindir." },

  // ---------------- TALİ YOLLAR ----------------
  { id: "ip-t-herat", ad: "Merv – Herat – Belh", sinif: "tali",
    gecit: ["Merv (Mari)", "Herat", "Belh"],
    f: "0700-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Horasan'ın güney ayağı; genel coğrafya bilgisine dayanır, kaynaklı teyit bekliyor." },
  { id: "ip-t-termez", ad: "Semerkant – Termez – Belh (Demir Kapı)", sinif: "tali",
    gecit: ["Semerkant", "Termez", "Belh"],
    f: "-0125-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Buzgala (Demir Kapı) boğazı arada; koordinatı doğrulanmadığı için eklenmedi. Oxus (Ceyhun) geçişi Termez'dedir." },
  { id: "ip-t-bozkir", ad: "Moğol Bozkır Kolu (Urgenç – Otrar – Almalık – Hami)", sinif: "tali",
    gecit: [[59.15, 42.32, "Urgenç (Kunya-Urgenç)"], [68.30, 42.85, "Otrar"], [80.90, 44.20, "Almalık"], [93.51, 42.83, "Hami (Kumul)"]],
    f: "1206-01-01", t: "1368-12-31", dogrulandi: false,
    kaynak: "Pegolotti, Pratica della mercatura (≈1340) — Tana'dan Çin'e bozkır güzergâhı; Hansen 2012",
    ic_not: "Almalık koordinatı yaklaşıktır (Huocheng/Yining yöresi, kalıntı yeri teyitsiz). f Cengiz Han'ın birliği, t Yuan'ın sonu (yıl hassasiyeti, editoryal)." },
  { id: "ip-t-palmira", ad: "Bağdat – Palmira – Şam (çöl yolu)", sinif: "tali",
    gecit: ["Bağdat", [38.27, 34.55, "Palmira"], "Şam"],
    f: "-0100-01-01", t: "0700-01-01", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Palmira kervan şehri çağı (editoryal, yaklaşık); Fırat hattına alternatiftir." },
  { id: "ip-t-musul", ad: "Tebriz – Musul – Nusaybin – Halep", sinif: "tali",
    gecit: ["Tebriz", "Musul", [41.22, 37.07, "Nusaybin"], "Halep"],
    f: "1200-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "İlhanlı/Akkoyunlu dönemi Tebriz–Akdeniz bağlantısı; f/t editoryal." },
  { id: "ip-t-tebriz-erzurum", ad: "Tebriz – Erzurum", sinif: "tali",
    gecit: ["Tebriz", "Erzurum"],
    f: "1200-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Karadeniz çıkışı için an-trabzon ile birleşir; Hoy/Doğubayazıt ara noktaları eklenmedi." },
  { id: "ip-t-kazvin", ad: "Rey – Kazvin – Tebriz", sinif: "tali",
    gecit: ["Rey", "Kazvin", "Tebriz"],
    f: "1200-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Horasan yolundan Azerbaycan'a ayrılan kol; genel coğrafya bilgisine dayanır." },
  { id: "ip-t-kafkas", ad: "Tebriz – Şamahı – Derbent (Hazar kıyısı)", sinif: "tali",
    gecit: ["Tebriz", "Şamahı", [48.30, 42.06, "Derbent"]],
    f: "0600-01-01", t: "1700-01-01", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Derbent Kafkas Kapısı; Hazar-Volga bağlantısı. Kaynaklı teyit bekliyor." }
];
