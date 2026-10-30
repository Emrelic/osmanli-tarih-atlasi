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
//
// 🟢 KAYNAK TEYİDİ (30 Ekim 2026): üç kol sistemi Sak–Çetin (DergiPark 258113, s.182) tam
// metninden ve TDV DİA "Anadolu" maddesinin "Ulaşım ve Yol Sistemi" bölümünden (tali yollar)
// yeniden kuruldu. İlk sürüm (17 Ekim) kol adlarını ve güzergâhlarını kaynaksız yazmıştı;
// düzeltmeler: Anadolu orta kol Ankara'dan DEĞİL Bolu–Tosya–Merzifon–Tokat–Sivas'tan geçer;
// sol kol Merzifon'da ayrılıp Ladik–Niksar–Karahisar-ı Şarkî–Kelkit–Aşkale–Erzurum'a gider;
// Rumeli'de Via Egnatia SOL, Karadeniz–Kırım hattı SAĞ koldur (ilk sürümde ters yazılmıştı).
// `dogrulandi:true` ⇒ bütün duraklar Sak–Çetin s.182 / Açıkel (Tarih İncelemeleri XIX/2, 2004)
// dizisinden; `false` ⇒ kaynak dışı ara durak ya da kaynaksız tali yol (ic_not'ta söylenir).
// Menzil teşkilatı Lütfi Paşa sadaretinde (946/1539) kurulmuştur (TDV "Menzil", Sak–Çetin
// s.183-184); posta teşkilatıyla 1839'da kalkmıştır (TDV "Menzil") ⇒ kol kayıtları 1539–1839.
// Okunamayan kaynaklar: Halaçoğlu "Menziller" (2002), Zachariadou (ed.) Via Egnatia, Altunan OTAM 18
// (durak listesi). Rumeli tali yolları için kol listesi bulunamadı.
// =====================================================================
window.YOLLAR_ANADOLU_BALKAN = [

  // ---------------- ANADOLU — menzil kolları (ana) ----------------
  { id: "an-sag", ad: "Sağ Kol (Konya – Çukurova – Halep)", sinif: "ana",
    gecit: ["İstanbul", "Gebze", "İzmit", "Eskişehir", "Akşehir", "Ilgın", "Konya", "Ereğli", "Ulukışla", "Tarsus", "Adana", "Antakya", "Halep"],
    f: "1539-01-01", t: "1839-12-31", dogrulandi: false,
    kaynak: "Sak–Çetin, DergiPark 258113, s.182-184 (Üsküdar–Gebze–Eskişehir–Akşehir–Konya–Adana–Antakya–Halep); TDV \"Menzil\" (Osmanlı)",
    ic_not: "Kaynakta Gebze→Eskişehir arası ara durak verilmez; İzmit, Ulukışla ve Tarsus kaynak dışı COĞRAFÎ ara duraklardır (Gülek geçişi kaynakta yok) ⇒ dogrulandi:false. Ereğli: Sak–Çetin 'Akşehir–Ereğli yol hattı'. f = menzil teşkilatı (946/1539, yıl hassasiyeti); t = 1839 menzillerin kalkışı (TDV)." },
  { id: "an-orta", ad: "Orta Kol (Bolu – Tokat – Sivas – Diyarbakır – Musul)", sinif: "ana",
    gecit: ["İstanbul", "Gebze", "İznik", [30.27, 40.69, "Sapanca"], "Geyve", [30.74, 40.80, "Hendek"], [31.16, 40.84, "Düzce"], "Bolu", "Tosya", "Osmancık", "Merzifon", "Amasya", [36.08, 40.39, "Turhal"], "Tokat", "Sivas", "Malatya", "Harput", "Diyarbakır", [41.22, 37.07, "Nusaybin"], "Musul"],
    f: "1539-01-01", t: "1839-12-31", dogrulandi: true,
    kaynak: "Sak–Çetin, DergiPark 258113, s.182 (Üsküdar–Gebze–İznik–Bolu–Tosya–Merzifon–Tokat–Sivas–Hasan Çelebi–Malatya–Harput–Diyarbakır–Nusaybin–Musul); Açıkel, Tarih İncelemeleri Dergisi XIX/2 (2004), s.1-33 (Sapanca–Geyve–Hendek–Düzce arası; Hacıhamza–Osmancık–Merzifon–Amasya–Turhal)",
    ic_not: "Hasan Çelebi (Sivas–Malatya arası konak) atlasta kayıtsız, eklenmedi. İlk sürümdeki Ankara–Kırşehir–Kayseri hattı orta kol DEĞİLDİR (an-t-ankara'ya taşındı). Nusaybin açık koordinat." },
  { id: "an-sol", ad: "Sol Kol (Merzifon – Niksar – Erzurum)", sinif: "ana",
    gecit: ["Merzifon", "Ladik", "Niksar", [38.42, 40.29, "Şebinkarahisar"], "Kelkit", "Aşkale", "Erzurum", [41.69, 39.99, "Hasankale (Pasinler)"]],
    f: "1539-01-01", t: "1839-12-31", dogrulandi: true,
    kaynak: "Sak–Çetin, DergiPark 258113, s.182 (Merzifon'a kadar orta kolla aynı; sonra Ladik–Niksar–Karahisar-ı Şarkî–Kelkit–Aşkale–Erzurum–Hasankale; Kars/Tiflis ve Tebriz kolları); TDV DİA \"Anadolu\", Ulaşım ve Yol Sistemi",
    ic_not: "Bolu–Tosya–Merzifon parçası orta kolla ortaktır (an-orta). Erzurum'dan Kars/Tiflis ve Tebriz uzantıları komşu bölge dalgasında. Atlasta çözülmeyen duraklar için konsolu kontrol et (YOLLAR.eksik)." },

  // ---------------- ANADOLU — tali yollar ----------------
  { id: "an-trabzon", ad: "Trabzon – Gümüşhane – Bayburt – Erzurum", sinif: "tali",
    gecit: ["Trabzon", [39.481, 40.46, "Gümüşhane"], "Bayburt", "Erzurum"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: true,
    kaynak: "TDV DİA \"Anadolu\", Ulaşım ve Yol Sistemi (sol koldan ayrılan tali yollar); TDV \"Erzurum\" (Trabzon–İran transit ticareti)",
    ic_not: "Önceki sürümde 'ana' idi; kaynakta sol koldan ayrılan TALİ yoldur. f/t kaynaksız editoryal aralıktır (yıl bulunamadı)." },
  { id: "an-t-ankara", ad: "Geyve – Göynük – Nallıhan – Ankara – Kırşehir – Kayseri – Maraş", sinif: "tali",
    gecit: ["Geyve", [30.79, 40.40, "Göynük"], [31.35, 40.19, "Nallıhan"], "Ayaş", "Ankara", "Kırşehir", "Kayseri", "Maraş"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "TDV DİA \"Anadolu\", Ulaşım ve Yol Sistemi (orta koldan Sapanca–Geyve–Taraklı–Torbalı–Göynük–Nallıhan–Ayaş–Ankara–Yahşihan–Kırşehir–Kayseri–Maraş diye ayrılan tali yol)",
    ic_not: "Taraklı, Torbalı, Yahşihan atlasta aranmadı, atlandı. f/t kaynaksız editoryal aralık." },
  { id: "an-t-sivas-kayseri", ad: "Sivas – Zamantı – Kayseri – Nevşehir – Niğde – Ereğli", sinif: "tali",
    gecit: ["Sivas", "Kayseri", [34.71, 38.62, "Nevşehir"], "Niğde", "Ereğli"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "TDV DİA \"Anadolu\", Ulaşım ve Yol Sistemi (Sivas–Yeniil–Zamantı–Kayseri–Nevşehir–Niğde–Ereğli)",
    ic_not: "Yeniil ve Zamantı atlasta kayıtsız, atlandı ⇒ dogrulandi:false. f/t kaynaksız." },
  { id: "an-t-erzincan", ad: "Erzincan – Erzurum", sinif: "tali",
    gecit: ["Erzincan", "Erzurum"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "TDV DİA \"Anadolu\", Ulaşım ve Yol Sistemi (Eğin'den ayrılan Erzincan–Erzurum tali yolu)",
    ic_not: "İlk sürümde sol kolun parçası sayılmıştı; kaynakta tali yoldur. Eğin atlasta aranmadı." },
  { id: "an-t-sivas-maras", ad: "Sivas – Gürün – Elbistan – Maraş – Ayıntab – Birecik – Urfa", sinif: "tali",
    gecit: ["Sivas", "Gürün", "Elbistan", "Maraş", [37.38, 37.07, "Ayıntab (Gaziantep)"], "Birecik", "Urfa"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "TDV DİA \"Anadolu\", Ulaşım ve Yol Sistemi (Sivas–Ulaş–Mancılık–Gürün–Elbistan–Maraş–Ayıntab–Nizip–Birecik–Urfa)",
    ic_not: "Ulaş, Mancılık, Nizip atlasta aranmadı, atlandı. Önceki 'Kayseri–Maraş–Halep' kaydındaki Maraş–Halep ayağı kaynakta YOK, çıkarıldı." },
  { id: "an-t-bursa", ad: "İzmit – İznik – Bursa", sinif: "tali",
    gecit: ["İzmit", "İznik", "Bursa"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "İznik orta kol durağı (Sak–Çetin) ama İznik–Bursa hattı okunan kaynaklarda yok; genel coğrafya bilgisi. Kaynaklı teyit bekliyor." },
  { id: "an-t-ege", ad: "Bursa – Balıkesir – Manisa – İzmir", sinif: "tali",
    gecit: ["Bursa", "Balıkesir", "Manisa", "İzmir"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Kaynakta yalnız İzmir–Denizli–Antalya tali yolu geçer (TDV DİA Anadolu); bu hat okunmadı. Kaynaklı teyit bekliyor." },
  { id: "an-t-ankara-eskisehir", ad: "Ankara – Eskişehir", sinif: "tali",
    gecit: ["Ankara", "Eskişehir"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Polatlı hattı; okunan kaynaklarda doğrudan yok." },
  { id: "an-t-ankara-konya", ad: "Ankara – Konya", sinif: "tali",
    gecit: ["Ankara", "Konya"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Cihanbeyli hattı; okunan kaynaklarda yok." },
  { id: "an-t-samsun", ad: "Samsun – Amasya", sinif: "tali",
    gecit: ["Samsun", "Amasya"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "TDV DİA Anadolu'da Samsun yalnız Karadeniz sahil yolunda geçer; Samsun–Amasya okunmadı." },

  // ---------------- BALKANLAR — menzil kolları (ana) ----------------
  { id: "ba-orta", ad: "Orta Kol / Belgrad Yolu (Edirne – Filibe – Sofya – Niş – Belgrad)", sinif: "ana",
    gecit: ["İstanbul", "Silivri", "Edirne", "Filibe", "Sofya", "Niş", [21.35, 43.9, "Yagodina (Jagodina)"], "Belgrad"],
    f: "1539-01-01", t: "1839-12-31", dogrulandi: true,
    kaynak: "Sak–Çetin, DergiPark 258113, s.182 (Rumeli orta kol: İstanbul–Silivri–Edirne–Filibe–Sofya–Niş–Yagodina–Belgrad)",
    ic_not: "Çorlu ve Lüleburgaz kaynakta yok, çıkarıldı. Belgrad–Budin devamı okunan kaynaklarda YOK, çıkarıldı (önceki 'Budin çözülmüyor' borcu bu şekilde kapandı). Yagodina açık koordinat (Jagodina, Sırbistan; yaklaşık)." },
  { id: "ba-sag", ad: "Sağ Kol / Karadeniz–Kırım Yolu (Vize – Prevadi – Babadağ – Akkirman)", sinif: "ana",
    gecit: ["İstanbul", [28.0, 41.57, "Vize"], [27.22, 41.73, "Kırklareli"], [27.44, 43.18, "Prevadi (Provadia)"], [28.27, 44.25, "Karasu (Medgidia)"], [28.78, 44.89, "Babadağ"], [28.46, 45.27, "İshakçı (Isaccea)"], [30.34, 46.19, "Akkirman"]],
    f: "1539-01-01", t: "1839-12-31", dogrulandi: false,
    kaynak: "Sak–Çetin, DergiPark 258113, s.182 (Rumeli sağ kol: İstanbul–Vize–Kırklareli–Prevadi–Karasu–Babadağ–İshakçı–Akkirman, Özi ve Kırım'a); Altunan, OTAM 18 (2005) bu hattı 'Kırım–Karadeniz Ticaret Yolu' sayar (yalnız özet okundu)",
    ic_not: "İlk sürümde bu hat 'Sol Kol / Tuna Yolu (Edirne–Tırnova–Rusçuk–Bükreş)' diye yazılmıştı; kaynakta sağ kol Karadeniz–Kırım hattıdır. Açık koordinatlar yaklaşık ve sıradan bilgi (kayıtlı kaynak teyidi yok) ⇒ dogrulandi:false." },
  { id: "ba-sol", ad: "Sol Kol / Via Egnatia (Gümülcine – Pravişte – Lanzaka – Yenişehir – İzdin)", sinif: "ana",
    gecit: ["İstanbul", "Tekirdağ", "Malkara", [26.15, 40.9, "Firecik (Feres)"], [26.5, 41.35, "Dimetoka"], "Gümülcine", [24.27, 40.92, "Pravişte (Eleftheroupoli)"], [23.07, 40.76, "Lanzaka (Langadas)"], [22.42, 39.64, "Yenişehir (Larissa)"], [22.43, 38.9, "İzdin (Lamia)"], [23.32, 38.32, "İstefe (Teb)"]],
    f: "1539-01-01", t: "1839-12-31", dogrulandi: false,
    kaynak: "Sak–Çetin, DergiPark 258113, s.182 (Rumeli sol kol: İstanbul–Tekirdağ–Malkara–Firecik–Dimetoka–Gümülcine–Pravişte–Lanzaka–Yenişehir–İzdin, İstefe'ye); Zachariadou (ed.), Via Egnatia Under Ottoman Rule, 1380-1699 (yalnız başlık/dipnottan biliniyor, okunamadı)",
    ic_not: "İlk sürümde bu hat 'Sağ Kol' diye adlandırılmıştı; kaynakta Via Egnatia SOL koldur. Açık koordinatlar Osmanlı ad → modern yer eşleşmesine dayanır (Pravişte=Eleftheroupoli, Lanzaka=Langadas, Yenişehir=Larissa, İzdin=Lamia, İstefe=Teb) ve kaynakla ayrıca teyit EDİLMEMİŞTİR ⇒ dogrulandi:false. Çorlu ve Keşan kaynakta yok, çıkarıldı." },

  // ---------------- BALKANLAR — tali / kaynaksız ----------------
  { id: "ba-t-egnatia-bati", ad: "Selanik – Manastır – Ohri – Draç (Via Egnatia batı kolu)", sinif: "tali",
    gecit: ["Selanik", "Manastır", "Ohri", "Draç"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Roma Via Egnatia'nın batı ayağı; Osmanlı menzil kolu olarak okunan kaynaklarda YOK (Sak–Çetin sol kolu İstefe'ye götürür). İlk sürümde ba-sag içindeydi, ayrıldı." },
  { id: "ba-t-tirnova", ad: "Edirne – Tırnova – Rusçuk – Bükreş", sinif: "tali",
    gecit: ["Edirne", "Tırnova", "Rusçuk", "Bükreş"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "İlk sürümde 'Sol Kol / Tuna Yolu' idi; Rusçuk ve Bükreş okunan kaynaklarda yok. Tırnova yalnız İnalcık'a atfedilen Rumeli maddesinde (Küre Ansiklopedi, TDV değil) Pravadi'den Niğbolu'ya giden dal olarak geçer." },
  { id: "ba-t-vardar", ad: "Vardar Yolu (Niş – Üsküp – Selanik)", sinif: "tali",
    gecit: ["Niş", "Üsküp", "Selanik"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Morava–Vardar vadisi; Rumeli orta kolun Filibe→Niş/Köstendil→Üsküp dalı bir kaynakta (Küre Ansiklopedi) anılır, Niş–Üsküp–Selanik doğrudan okunmadı." },
  { id: "ba-t-struma", ad: "Struma Yolu (Sofya – Serez – Selanik)", sinif: "tali",
    gecit: ["Sofya", "Serez", "Selanik"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Struma vadisi hattı; Serez yalnız sol kol anlatımında (Gümülcine–Serez–Karaferye) geçer." },
  { id: "ba-t-balkan", ad: "Sofya – Lofça – Tırnova", sinif: "tali",
    gecit: ["Sofya", "Lofça", "Tırnova"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Lofça okunan hiçbir kaynakta yok." },
  { id: "ba-t-tuna", ad: "Tuna Kıyı Yolu (Vidin – Rusçuk – Silistre)", sinif: "tali",
    gecit: ["Vidin", "Rusçuk", "Silistre"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Tuna'nın güney kıyısı; Vidin/Rusçuk okunan kaynaklarda yol olarak geçmez." },
  { id: "ba-t-uskup-ohri", ad: "Üsküp – Ohri", sinif: "tali",
    gecit: ["Üsküp", "Ohri"],
    f: "1281-01-01", t: "1923-12-31", dogrulandi: false,
    kaynak: "bulunamadı", ic_not: "Okunan kaynaklarda yok." }
];
