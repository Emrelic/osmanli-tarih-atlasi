// =====================================================================
// TARİHÎ YOLLAR — ANADOLU ve BALKANLAR (ilk dalga; sırada Osmanlı'nın komşuları)
// Ad alanı: data/yollar_anadolu_balkan.js → window.YOLLAR_ANADOLU_BALKAN
// Yeni bölge = yeni dosya `data/yollar_<bolge>.js` → `window.YOLLAR_<BOLGE>`
// (app.js `YOLLAR_*` önekli bütün globalleri okur).
//
// ŞEMA (bir kayıt = bir yol):
//   id      kısa kimlik
//   ad      ekranda görünen ad
//   sinif   "ana" | "tali"
//   gecit   ŞEHİR ADLARI, yolun SIRASIYLA geçtiği yerler. Koordinat YAZILMAZ:
//           ad, atlasın yerleşim verisinden (window.YERLESIMLER) çözülür —
//           şehir kaydı düzelirse yol da kendiliğinden düzelir. Ad çözülemezse
//           konsola uyarı basılır ve o durak atlanır (sessizce düşmez).
//           Atlasta kaydı olmayan geçit AÇIK koordinatla yazılır: [lon, lat, "ad"].
//   f / t   yolun kullanıldığı aralık (gün hassasiyeti; bilinmiyorsa YYYY-01-01)
//   kaynak  neye dayandığı  ·  ic_not  neyin kesin, neyin editoryal olduğu
//
// ÇİZİM: yol, geçit şehirlerinin ARASINDAN geçen yumuşak bir eğridir (Catmull-Rom).
// Eğri araziyi (dağ, nehir vadisi) İZLEMEZ; yalnız şehirleri sırayla bağlar.
// Şehirler arası gerçek kıvrım için ara geçit (kasaba, geçit, köprü) eklenir —
// ne kadar çok ara şehir yazılırsa çizim gerçek güzergâha o kadar yaklaşır.
//
// 🔴 DOĞRULAMA BORCU: kol adlandırması TDV "Menzil" (Osmanlı) maddesine ve
// Sak–Çetin (DergiPark 258113) kol tarifine dayanır; her kaydın ŞEHİR DİZİSİ
// ve ana/tali ayrımı henüz kaynak başına doğrulanmadı → `dogrulandi:false`.
// Doğrulanınca true yapılır ve kaynağına kaynak satırı eklenir.
// =====================================================================
window.YOLLAR_ANADOLU_BALKAN = [

  // ---------------- ANADOLU — ana kollar ----------------
  { id: "an-govde", ad: "İstanbul – Geyve (üç kolun ortak gövdesi)", sinif: "ana",
    gecit: ["İstanbul", "Gebze", "İzmit", "Geyve"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Menzil\" (Osmanlı) — Anadolu kolları; Sak–Çetin, DergiPark 258113",
    ic_not: "Sağ, orta ve sol kolların İstanbul'dan çıkış gövdesi. Şehir dizisi editoryal." },
  { id: "an-sag", ad: "Sağ Kol (Konya – Çukurova – Halep)", sinif: "ana",
    gecit: ["Geyve", "Eskişehir", "Akşehir", "Ilgın", "Konya", "Ereğli", "Ulukışla", "Tarsus", "Adana", "Antakya", "Halep"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Menzil\" (Osmanlı); Sak–Çetin, DergiPark 258113",
    ic_not: "Akşehir–Ilgın–Konya ayakları arşivden ölçülmüş (koridor.js). Ulukışla–Tarsus arası Gülek Boğazı (Kilikya Kapıları) geçişidir." },
  { id: "an-orta", ad: "Orta Kol (Ankara – Kayseri – Diyarbakır)", sinif: "ana",
    gecit: ["Geyve", "Mudurnu", "Bolu", "Ankara", "Kırşehir", "Kayseri", "Malatya", "Harput", "Diyarbakır"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Menzil\" (Osmanlı); Sak–Çetin, DergiPark 258113",
    ic_not: "Bolu–Ankara arası Gerede üzerinden geçer (ara şehir verisi yok; eğri tahmindir)." },
  { id: "an-sol", ad: "Sol Kol (Amasya – Sivas – Erzurum – İran)", sinif: "ana",
    gecit: ["Bolu", "Tosya", "Amasya", "Tokat", "Sivas", "Erzincan", "Erzurum"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Menzil\" (Osmanlı); Sak–Çetin, DergiPark 258113",
    ic_not: "Erzurum'dan sonrası (Tebriz) komşu bölgeler dalgasında." },
  { id: "an-trabzon", ad: "Trabzon – Erzurum Yolu (Zigana – Kop)", sinif: "ana",
    gecit: ["Trabzon", [39.481, 40.46, "Gümüşhane"], "Bayburt", "Erzurum"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "Karadeniz–İran transit ticaret yolu; TDV İslâm Ansiklopedisi \"Trabzon\" ve \"Erzurum\" maddeleri",
    ic_not: "Ana/tali ayrımı editoryal: İran ticaretinin Karadeniz kapısı olduğu için ana sayıldı." },

  // ---------------- ANADOLU — tali yollar ----------------
  { id: "an-t-bursa", ad: "İzmit – İznik – Bursa", sinif: "tali",
    gecit: ["İzmit", "İznik", "Bursa"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Güzergâh genel coğrafya bilgisine dayanır; kaynaklı teyit bekliyor." },
  { id: "an-t-ege", ad: "Bursa – Balıkesir – Manisa – İzmir", sinif: "tali",
    gecit: ["Bursa", "Balıkesir", "Manisa", "İzmir"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Güzergâh genel coğrafya bilgisine dayanır; kaynaklı teyit bekliyor." },
  { id: "an-t-ankara-eskisehir", ad: "Ankara – Eskişehir", sinif: "tali",
    gecit: ["Ankara", "Eskişehir"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Polatlı hattı; ara şehir yok, eğri neredeyse düz." },
  { id: "an-t-ankara-konya", ad: "Ankara – Konya", sinif: "tali",
    gecit: ["Ankara", "Konya"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Cihanbeyli hattı; ara şehir yok, eğri neredeyse düz." },
  { id: "an-t-kayseri-sivas", ad: "Kayseri – Sivas", sinif: "tali",
    gecit: ["Kayseri", "Sivas"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Ara şehir yok." },
  { id: "an-t-sivas-malatya", ad: "Sivas – Malatya", sinif: "tali",
    gecit: ["Sivas", "Malatya"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Darende hattı; ara şehir yok." },
  { id: "an-t-maras", ad: "Kayseri – Maraş – Halep", sinif: "tali",
    gecit: ["Kayseri", "Maraş", "Halep"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Elbistan üzerinden; ara şehir yok." },
  { id: "an-t-samsun", ad: "Samsun – Amasya", sinif: "tali",
    gecit: ["Samsun", "Amasya"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Karadeniz'in iç kesimlere açılan kapısı." },

  // ---------------- BALKANLAR — ana kollar ----------------
  { id: "ba-orta", ad: "Orta Kol / Belgrad Yolu (Edirne – Sofya – Niş – Belgrad – Budin)", sinif: "ana",
    gecit: ["İstanbul", "Çorlu", "Lüleburgaz", "Edirne", "Filibe", "Sofya", "Niş", "Belgrad", "Budin"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Menzil\" (Osmanlı) — Rumeli kolları; Roma Via Militaris güzergâhı",
    ic_not: "Osmanlı'nın Orta Avrupa seferlerinin ana ordu yolu. Şehir dizisi editoryal." },
  { id: "ba-sag", ad: "Sağ Kol / Via Egnatia (Selanik – Manastır – Draç)", sinif: "ana",
    gecit: ["İstanbul", "Çorlu", "Keşan", "Ferecik", "Gümülcine", "Kavala", "Selanik", "Manastır", "Ohri", "Draç"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Menzil\" (Osmanlı) — Rumeli kolları; Roma Via Egnatia güzergâhı",
    ic_not: "Edirne'yi değil Trakya kıyı hattını izler (Ferecik–Gümülcine). Şehir dizisi editoryal." },
  { id: "ba-sol", ad: "Sol Kol / Tuna Yolu (Edirne – Tırnova – Rusçuk – Bükreş)", sinif: "ana",
    gecit: ["Edirne", "Tırnova", "Rusçuk", "Bükreş"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "TDV İslâm Ansiklopedisi, \"Menzil\" (Osmanlı) — Rumeli kolları",
    ic_not: "Edirne–Tırnova arası Balkan Dağları geçişidir; ara şehir yok, eğri tahmindir." },

  // ---------------- BALKANLAR — tali yollar ----------------
  { id: "ba-t-vardar", ad: "Vardar Yolu (Niş – Üsküp – Selanik)", sinif: "tali",
    gecit: ["Niş", "Üsküp", "Selanik"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Morava–Vardar vadisi hattı; ara şehir yok." },
  { id: "ba-t-struma", ad: "Struma Yolu (Sofya – Serez – Selanik)", sinif: "tali",
    gecit: ["Sofya", "Serez", "Selanik"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Struma vadisi hattı; ara şehir yok." },
  { id: "ba-t-balkan", ad: "Sofya – Lofça – Tırnova", sinif: "tali",
    gecit: ["Sofya", "Lofça", "Tırnova"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Balkan Dağları'nın kuzeyine geçiş." },
  { id: "ba-t-tuna", ad: "Tuna Kıyı Yolu (Vidin – Rusçuk – Silistre)", sinif: "tali",
    gecit: ["Vidin", "Rusçuk", "Silistre"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Tuna'nın güney kıyısı; ara şehir yok." },
  { id: "ba-t-uskup-ohri", ad: "Üsküp – Ohri", sinif: "tali",
    gecit: ["Üsküp", "Ohri"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Ara şehir yok." }
];
