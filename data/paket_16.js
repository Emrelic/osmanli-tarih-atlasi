/* PAKET 16 — arac/paketle.py ile ÜRETİLDİ, ELLE DÜZENLENMEZ.
   3 kaynak dosya, sırası index.html'deki sıradır.
   Kaynağı değiştirdiysen: py arac/paketle.py yenile
   Tazelik kapıda sınanır: py arac/paketle.py sina */
/* ==== data/hukuki_sinirlar.js ==== */
// ============================================================================
// data/hukuki_sinirlar.js — "C GÖSTERİMİ" (KITA 30, 13 Eylül 2026)
// Kaynak taslak: denetim/TASLAK-hukuki_sinirlar.js (10 kayıt).
// Şema: denetim/SEMA-C-0911.md §8.1/§8.2/§9.
// window.HUKUKI_SINIRLAR — §7 ad alanı kuralı (dosya "hukuki_sinirlar",
// değişken "HUKUKI_SINIRLAR").
//
// 🔴 SINAMA SONUCU — 10 kayıttan 5'i GEÇTİ, 5'i GEÇMEDİ. Sessizce atılan
// YOK; geçmeyenlerin nedeni burada VE denetim/BULGU-KITA30-SINAMA.md'de.
//
// ✅ GEÇTİ (taraf id'leri devletler.js'te doğrulandı · tarih penceresi
//    tarafların f:/t: aralığına oturuyor · koordinatlar TAM ya da kısmen
//    tamamlanabilir durumda):
//   ① midye-enez-1913            — taslakta zaten TAM
//   ② misir-sudan-22-paralel-1899 — taslakta zaten TAM
//   ③ ii-erzurum-sattularap-1847  — taslakta zaten TAM (Abadan noktası
//      hariç — o nokta hattın kendisi için ZORUNLU değil, ayrıca not edildi)
//   ④ karlofca-lehistan-1699      — KISMEN TAMAMLANDI: Suçava ve Bar
//      (Podolya) data/yerlesimler.js'te MEVCUT nokta olarak bulundu,
//      gerçek lat/lon buradan alındı (uydurulmadı). Kamaniçe ve Roman
//      hâlâ "taranmadı" — kayıtta AÇIKÇA işaretli, noktaları ÇİZİLMEZ.
//   ⑤ karlofca-venedik-1699       — KISMEN TAMAMLANDI: Ayamavra (Lefkada)
//      ve Trebinye data/yerlesimler.js'te MEVCUT, gerçek lat/lon alındı.
//      Kataro (Kotor) taranmadı, "Korent kıyısı" bir NOKTA değil BÖLGE
//      tarifi — ikisi de çizilmez, kayıtta işaretli.
//
// 🆕 İKİNCİ TUR (13 Eylül, aynı gün) — ③ görevi: koordinatsız kayıtlar
// için araştırma. İKİ BULUŞ:
//   (a) data/yerlesimler_ek29.js'te BAŞKA BİR OTURUM (NOKTA MENZİL/
//       HAZIRLIK-BOSNA-NOKTA-0911) Kostayniça(Kostajnica)·Bosna Dubiçası·
//       Bosna Novi'si·Jasenovaç·Bosna Brod'u'nu GERÇEK koordinatla ZATEN
//       eklemiş — birincil antlaşma metnini (Novi/Dubizza/Sessenovizza/
//       Doboy/Bred) esas alarak. Bu, TDV'nin gevşek "Bihke, Novi, Krupa
//       vb." listesinden FARKLI ve DAHA GÜVENİLİR (M-3329 kuralı: antlaşma
//       metni birincil) — o oturum Bihaç'ın (evakue edilenler listesinde
//       YOK, Osmanlı kalıyor) ve Krupa'nın (aynı, listede YOK) bu pakete
//       GİRMEMESİ gerektiğini bulmuş.
//   (b) Bosut ağzı (Bosut'un Sava'ya döküldüğü yer) Wikipedia'dan
//       doğrulandı: 44.9411K, 19.3706D (Bosut köyü, Sırbistan).
// ⑥ ve ⑧ bu yüzden ARTIK GEÇİYOR (aşağıda), Kostayniça/Bihke/Novi/Krupa
// listesi TDV'nin gevşek haliyle DEĞİL birincil metinle DÜZELTİLEREK.
//
// 🔴 HÂLÂ GEÇMEDİ:
//   ⑦ karlofca-banat-maros-tisza-tuna-1699 — Maros/Mureş kavşak noktaları
//      hâlâ araştırılmadı (farklı coğrafya, bu turun kapsamı dışı kaldı).
//   ⑨ karlofca-bosna-una-1699 (karma)    — NOKTA kısmı artık aynı ek29
//      kaynağından çözülebilir (Novi/Dubica/Jasenovac/Kostajnica/Brod) AMA
//      Una nehrinin KENDİ geometrisi hâlâ hiçbir kaynakta yok (Natural
//      Earth'teki "Una" Brezilya'da) — hat.tur:"karma" zaten hiçbir
//      render kodunda desteklenmiyor, bu kayıt BEKLEMEDE bırakıldı.
//   ⑩ bahcesaray-ozu-1681 — Özü (Dinyeper) nehri uçları araştırılmadı.
//   ⑩ bahcesaray-ozu-1681                — hat uçları lat/lon YOK,
//      kapsama.kutu YOK; taslak kendi ONEMLI_EKSIK notuyla zaten
//      işaretlemişti.
//
// Tam sınama dökümü (taraf/tarih/koordinat üç testi tek tek): bkz.
// denetim/BULGU-KITA30-SINAMA.md
// ============================================================================
window.HUKUKI_SINIRLAR = [

{
  id: "midye-enez-1913",
  taraflar: ["osmanli", "bulgaristan-kralligi"],
  hassasiyet: "cizgi",
  f: "1913-05-30",
  t: "1913-06-29",
  f_kaynak: "Londra Antlaşması imza günü (Wikisource neşri)",
  t_kaynak: "II. Balkan Savaşı başlangıcı, Osmanlı ordusunun hattı aşıp Edirne'yi fiilen geri aldığı gün — data/olaylar_ek5.js:403",

  hat: {
    tur: "cetvel",
    nokta_dizisi: [
      { lon: 26.075, lat: 40.724, ad: "Enez",
        kaynak: "data/yerlesimler.js:126 (MEVCUT nokta)", dogrulanmadi: false },
      { lon: 28.09611, lat: 41.63528, ad: "Midye (bugünkü Kıyıköy, Kırklareli/Vize)",
        kaynak: "Wikipedia 'Kıyıköy' maddesi, 41°38'07\"N 28°05'46\"E; ikinci bağımsız kaynak (latitude.to) ~1 km fark ile teyit",
        dogrulanmadi: false }
    ]
  },

  gereken_cografya: [
    { ad: "Enez", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js:126" },
    { ad: "Midye (Kıyıköy)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null,
      not: "Belgenin adlandırdığı iki yerden biri, atlasta nokta olarak YOK — C kaydının kendi iş kalemi, hattın çalışması için nokta eklenmesi gerekmiyor." }
  ],

  kapsama: {
    tur: "bbox",
    // 🆕 13 Eylül 2026 — KITA 30/M-3758 + KITA 15/M-3770: render kodu artık
    // taraflar[]'ın SIRASINA değil bu alana bakıyor. Değer bugün ZATEN
    // ÇİZİLDİĞİ hâliyle yazıldı (taraflar[0]) — görünüm DEĞİŞMEDİ, yalnız
    // nokta_dizisi sırasına bağımlılık kalktı. Bkz. SEMA-C-0911.md.
    negatif_taraf: "osmanli",
    // 🔴 23 Eylül 2026 — DOLGU KAPATILDI (H-0139), aynı sınıf. Ama bu kayıtta
    // hüküm TEREDDÜTLÜ ve gerekçesi yazılmalı: buradaki dolgu GERÇEK BİLGİ
    // taşıyordu — Midye-Enez, Londra Antlaşması'nın sınırıdır ve motor bu
    // hattı bilmez. Kapatmak antlaşmanın toprak sonucunu haritadan düşürür.
    // Tartı: kutunun kenarları Bulgaristan'ın İÇİNDEN ve denizden geçiyor,
    // pencere ise yalnız 30 gün (1913-05-30 → 1913-06-29). Otuz günlük
    // "eksik bilgi" bedeli, otuz günlük "yanlış görünüm" bedelinden küçük.
    // ⚠️ KALICI ÇARE BU DEĞİL: tur:"poligon" + kıyı izleyen nokta_dizisi.
    // Poligon dalı js/app.js:7346'da ZATEN ÇALIŞIYOR; eksik olan veri.
    dolgu: false,
    kutu: { lat_min: 40.0, lat_max: 42.5, lon_min: 25.5, lon_max: 29.5 },
    dogal_sinir_gerekcesi: "Güney/batı: Ege kıyısı. Kuzey/doğu: Karadeniz kıyısı. M-3480 kuralına uygun.",
    sezgi_kapali: true,
    yon_kurali: "cross_yerel > 0 -> taraflar[1] (bulgaristan-kralligi) ; cross_yerel < 0 -> taraflar[0] (osmanli)",
    formul: "cross_yerel = dx*(P.lat-A.lat) - dy*(P.lon-A.lon), dx=(B.lon-A.lon), dy=(B.lat-A.lat)"
  },

  sinav_kaydi: {
    "istanbul": { P: [28.97, 41.0], cross_yerel: -2.0813, beklenen: "osmanli", sonuc: "DOĞRU" },
    "kirklareli": { P: [27.225, 41.735], cross_yerel: 0.9954, beklenen: "bulgaristan-kralligi", sonuc: "DOĞRU" }
  },

  kaynak: {
    tur: "antlaşma metni (neşir)",
    ad: "Treaty of London — Peace Treaty between Greece, Bulgaria, Serbia, Montenegro and the Ottoman Empire",
    madde: "Madde II",
    alinti: "His Majesty the Emperor of the Ottomans cedes to their Majesties the Allied Sovereigns all the territories of his Empire on the continent of Europe to the west of a line drawn from Enos on the Aegean Sea to Midia on the Black Sea, with the exception of Albania.",
    url: "https://en.wikisource.org/wiki/Treaty_of_London_-_Peace_Treaty_between_Greece,_Bulgaria,_Serbia,_Montenegro_and_the_Ottoman_Empire"
  },
  kaynak_ikincil: { tur: "TDV İslâm Ansiklopedisi", not: "Bu antlaşma için TDV maddesi aranmadı — Wikisource birincil metin yeterli görüldü." }
},

{
  id: "misir-sudan-22-paralel-1899",
  taraflar: ["misir-kavalali", "ingiliz-sudani"],
  hassasiyet: "cizgi",
  f: "1899-01-19",
  t: "1914-12-18",
  f_kaynak: "Sudan Convention (1899), imza günü — Wikisource neşri, Madde I",
  t_kaynak: "misir-kavalali künyesinin kendi t: alanı (devletler.js, 1914-12-18)",

  hat: {
    tur: "paralel",
    enlem: 22.0,
    kaynak: "Wikisource 'Sudan Convention (1899)', Madde I: \"The word 'Sudan' in this Agreement means all the territories South of the 22nd parallel of latitude...\""
  },

  kapsama: {
    tur: "paralel-esigi",
    kutu: { lat_min: 20.0, lat_max: 24.0, lon_min: 25.0, lon_max: 36.887 },
    kutu_kaynagi: "14 Ekim 2026 (KARARLAR-1014 m.32, 0076/H-0148): kutu kıyıya oturtuldu — doğu ucu 22°K paralelinin Kızıldeniz kıyısını kestiği boylam 36.8865°D (veri-kaynak/ne_10m_land.geojson, Natural Earth 10m, bu oturum ölçtü; eski 37.0 denize taşıyordu). Batı ucu 25°D: Mısır-Libya-Sudan üçlü noktası (veri-kaynak/ne_10m_admin_0_countries.geojson, BUGÜNKÜ sınır) — 1899'da batı ucu antlaşmada TANIMSIZ, 25°D yalnız çizim alanını Libya çölüne taşırmamak için; YAKLAŞIKLIK BEYANI (eski 24.0).",
    yon_kurali: "P.lat >= 22.0 -> taraflar[0] (misir-kavalali, KUZEY) ; P.lat < 22.0 -> taraflar[1] (ingiliz-sudani, GÜNEY)"
  },

  sinav_kaydi: {
    "kahire": { P: [31.24, 30.04], beklenen: "misir-kavalali", sonuc: "DOĞRU (30.04 >= 22)" },
    "hartum": { P: [32.53, 15.5], beklenen: "ingiliz-sudani", sonuc: "DOĞRU (15.5 < 22)" }
  },

  kaynak: {
    tur: "antlaşma metni (neşir)",
    ad: "Sudan Convention (1899)",
    madde: "Madde I",
    alinti: "The word 'Sudan' in this Agreement means all the territories South of the 22nd parallel of latitude...",
    url: "https://en.wikisource.org/wiki/Sudan_Convention_(1899)"
  },
  kaynak_ikincil: { tur: null, not: "Aranmadı — birincil metin net ve tam." }
},

{
  id: "ii-erzurum-sattularap-1847",
  taraflar: ["osmanli", "kacar"],
  hassasiyet: "cizgi",
  f: "1847-05-31",
  // 🔴 SEMA-C-0911.md §8.1 "t: null = açık" diyor ama app.js:5141
  // gunIdx(k.t) null'da TypeError atıyor (KITA 30 M-3701'de bildirdi,
  // henüz düzeltilmedi) — geçici/güvenli çare: atlasın pencere sonu.
  t: "1923-10-29",
  f_kaynak: "TDV 'sattularap' maddesi + envanterin kendi kaydı (olaylar_ok106.js), imza günü",

  hat: {
    tur: "dogal-tanimsiz",
    nokta_dizisi: [
      { lon: 47.783, lat: 30.508, ad: "Basra (nehrin başlangıç ucu civarı)",
        kaynak: "data/yerlesimler.js (Basra kaydı) — MEVCUT nokta", dogrulanmadi: false },
      { lon: 48.53183, lat: 29.961208, ad: "Şattülarap'ın Basra Körfezi'ne döküldüğü yer",
        kaynak: "veri-kaynak/ne_10m_rivers.geojson 'Shatt al Arab' geometrisinin son noktası", dogrulanmadi: false }
    ]
  },

  nokta_atamalari: [
    { ad: "Muhammere", lat: 30.4392, lon: 48.1664, taraf: "kacar", kaynak: "data/yerlesimler.js — MEVCUT nokta" },
    { ad: "Abadan (ada)", lat: null, lon: null, taraf: "kacar",
      kaynak: "TDV/envanter: 'Muhammere limanı ve karşısındaki Abadan adası dâhil' Kaçarlar'a — koordinat bu turda da ARANMADI, çizilmez" },
    { ad: "Basra", lat: 30.508, lon: 47.783, taraf: "osmanli", kaynak: "data/yerlesimler.js — MEVCUT nokta" }
  ],

  onemli_not_motor_zaten_taniyor: "Şattülarap nehri veri-kaynak/ne_10m_rivers.geojson'da scalerank=3.0 (eşik 5.0'ın altında) — motor bu nehri BUYUK ad listesinde olmasa bile zaten yaslama havuzuna alıyor. C kaydı yine de belge+coğrafya olarak tam ve doğrulanabilir.",

  gereken_cografya: [
    { ad: "Şattülarap (nehir)", tur: "nehir", atlasta_var: true, atlasta_kaynak: "veri-kaynak/ne_10m_rivers.geojson 'Shatt al Arab', scalerank=3.0" },
    { ad: "Muhammere", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js" },
    { ad: "Basra", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js" },
    { ad: "Abadan", tur: "yerlesim", atlasta_var: "taranmadı", atlasta_kaynak: null }
  ],

  kapsama: {
    tur: "bbox",
    // 🆕 13 Eylül 2026 — KITA 30/M-3758 + KITA 15/M-3770 (bkz. midye-enez
    // kaydındaki aynı not). Değer bugünkü çizimle (taraflar[0]) AYNI.
    negatif_taraf: "osmanli",
    // 🔴 23 Eylül 2026 — DOLGU KAPATILDI. 15 Eylül'de karlofca-bosna-sava'ya
    // uygulanan çarenin AYNISI; o gün sınıfa değil TEK KAYDA uygulanmıştı ve
    // sekiz gün sonra aynı şikâyet üç kayıtla geri geldi (C12: değişikliğin
    // sınırı dosyası değil BAĞLILARIDIR).
    // Ölçüm (HARITA-0076, canlı motorda birebir üretildi): bu kutu Basra'nın
    // üstüne kenarları coğrafyayla ilgisiz, eksen hizalı, TAM OPAK bir
    // dikdörtgen basıyordu — pencere 1847-05-31 → 1923-10-29, yani 27.910 gün
    // ≈ 76 YIL boyunca her gün. Emre kusuru İKİ AYRI fotoğrafta, 13 yıl
    // arayla bildirdi (H-0096 1900 · H-0147 1913) ve "hâlâ devam ediyor,
    // uzun süre bozuk gösteriliyor" dedi; pencere onu birebir doğruluyor.
    // Hat (kesik çizgi) KALIYOR — kaldırılan yalnız dolgu.
    dolgu: false,
    kutu: { lat_min: 28.5, lat_max: 31.5, lon_min: 46.5, lon_max: 49.0 },
    dogal_sinir_gerekcesi: "Güneydoğu: Basra Körfezi (doğal deniz sınırı). Kuzeybatı: Basra'nın kuzeyine yeterli pay.",
    sezgi_kapali: true,
    yon_kurali: "cross_yerel ile nehrin YEREL segmentine göre: nehrin batısı/güneybatısı -> osmanli, doğusu/kuzeydoğusu -> kacar"
  },

  kaynak: {
    tur: "TDV İslâm Ansiklopedisi",
    ad: "sattularap",
    madde: "bulunamadı — düzyazı anlatım, madde numarası yok",
    alinti: "Şattülarap'ın en kapsamlı biçimde ele alındığı antlaşma 1847 Mayısında Erzurum'da imzalanandır.",
    url: "https://islamansiklopedisi.org.tr/sattularap"
  },
  kaynak_ikincil: {
    tur: "proje envanteri (data/olaylar_ok106.js)",
    alinti: "Şattülarap suyolunun tamamı Osmanlı'da kaldı; buna karşılık nehrin doğu yakasındaki yerleşimler -Muhammere limanı ve karşısındaki Abadan adası dâhil- Kaçarlar'a bırakıldı."
  }
},

{
  id: "karlofca-lehistan-1699",
  taraflar: ["osmanli", "lehistan"],
  hassasiyet: "yer",
  f: "1699-01-26",
  // aynı çare, aynı gerekçe (bkz. ii-erzurum-sattularap-1847'deki not)
  t: "1795-10-24", // lehistan'ın kendi sonu (devletler.js) — bu tarihten
                    // sonra 'lehistan' zaten künye olarak kapanıyor
  hat: {
    tur: "nokta-kumesi",
    nokta_atamalari: [
      { ad: "Suçava (Suceava)", lat: 47.633, lon: 26.250, taraf: "osmanli",
        kaynak: "TDV karlofca: Suçeva ... Osmanlılar geri aldı; koordinat data/yerlesimler.js:444'ten (KITA 30 bu turda tamamladı, uydurulmadı)" },
      { ad: "Bar (Podolya)", lat: 49.078, lon: 28.260, taraf: "lehistan",
        kaynak: "TDV karlofca: \"Podolya boşaltıldı\"; koordinat data/yerlesimler.js:1341'den (KITA 30 bu turda tamamladı)" },
      { ad: "Kamaniçe", lat: null, lon: null, taraf: "belirsiz",
        kaynak: "TDV karlofca: \"Kamaniçe Kalesi yıkıldı\" — atlasta var mı bu turda da TARANMADI, çizilmez" },
      { ad: "Roman", lat: null, lon: null, taraf: "osmanli",
        kaynak: "TDV karlofca — atlasta var mı bu turda da TARANMADI, çizilmez" }
    ]
  },
  gereken_cografya: [
    { ad: "Suçava (Suceava)", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js:444" },
    { ad: "Bar (Podolya)", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js:1341" },
    { ad: "Kamaniçe", tur: "yerlesim", atlasta_var: "taranmadı", atlasta_kaynak: null },
    { ad: "Roman", tur: "yerlesim", atlasta_var: "taranmadı", atlasta_kaynak: null }
  ],
  kapsama: { tur: "nokta-listesi", sezgi_kapali: true,
    not: "Kapsama BBOX değil — noktalar zaten ismen/koordinatla biliniyor (Kamaniçe/Roman hariç, onlar ÇİZİLMEZ)." },
  kaynak: { tur: "TDV İslâm Ansiklopedisi", ad: "karlofca",
    alinti: "Podolya boşaltıldı, Kamaniçe Kalesi yıkıldı, Suçeva, Roman ve diğer kaleleri Osmanlılar geri aldı.",
    url: "https://islamansiklopedisi.org.tr/karlofca" },
  kaynak_ikincil: { tur: null, not: null },
  onemli_uyari: "Suçava ve Bar zaten NOKTA — 'nokta eklemek' gerekmiyor, yalnız d:/s: dönemi eklenmesi (mevcut A/B alanları) yeterli. Bu C kaydı yalnız GÖSTERİM/belge referansı içindir."
},

{
  id: "karlofca-venedik-1699",
  taraflar: ["osmanli", "venedik"],
  hassasiyet: "yer",
  f: "1699-01-26",
  // aynı çare (bkz. ii-erzurum-sattularap-1847'deki not) — venedik'in
  // kendi sonu (devletler.js) kullanıldı, pencere sonu değil
  t: "1797-05-12",
  hat: {
    tur: "nokta-kumesi",
    nokta_atamalari: [
      { ad: "Ayamavra (Lefkada)", lat: 38.716, lon: 20.643, taraf: "venedik",
        kaynak: "TDV karlofca; koordinat data/yerlesimler.js:1357'den (KITA 30 bu turda tamamladı)" },
      { ad: "Trebinye", lat: 42.711, lon: 18.344, taraf: "venedik",
        kaynak: "TDV karlofca; koordinat data/yerlesimler_seyrek.js:263'ten (KITA 30 bu turda tamamladı)" },
      { ad: "Kataro (Kotor)", lat: null, lon: null, taraf: "venedik",
        kaynak: "TDV karlofca — atlasta var mı bu turda da TARANMADI, çizilmez" },
      { ad: "Korent kıyısı", lat: null, lon: null, taraf: "venedik",
        kaynak: "TDV karlofca — bu bir NOKTA değil BÖLGE tarifi, tek yerleşimle temsil edilemez, çizilmez" }
    ]
  },
  gereken_cografya: [
    { ad: "Ayamavra (Lefkada)", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js:1357" },
    { ad: "Trebinye", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler_seyrek.js:263" },
    { ad: "Kataro (Kotor)", tur: "yerlesim", atlasta_var: "taranmadı", atlasta_kaynak: null },
    { ad: "Korent kıyısı", tur: "bolge", atlasta_var: "ölçülemez (bölge tarifi)", atlasta_kaynak: null }
  ],
  kapsama: { tur: "nokta-listesi", sezgi_kapali: true, not: null },
  kaynak: { tur: "TDV İslâm Ansiklopedisi", ad: "karlofca",
    alinti: "Ayamavra adaları, Korent denizi kuzey kıyıları ve bazı kalelerin (Kataro, Trebinye) iadesi",
    url: "https://islamansiklopedisi.org.tr/karlofca" },
  kaynak_ikincil: { tur: null, not: null }
},

{
  // 🆕 İKİNCİ TUR — artık GEÇİYOR. Hat uçlarının ikisi de gerçek koordinatla
  // çözüldü: Brod Kalesi = data/yerlesimler_ek29.js'teki "Bosna Brod'u
  // (Bosanski Brod)" (o dosyanın kendi notu: "SEMA-C-0911.md §3.1'deki Sava
  // HAT segmentinin bitiş noktasıyla aynı yer olabilir" — KITA 30 bunu
  // teyit KABUL etti, iki bağımsız tanım aynı yeri işaret ediyor). Bosut
  // ağzı Wikipedia'dan doğrulandı.
  id: "karlofca-bosna-sava-1699",
  taraflar: ["osmanli", "habsburg"],
  hassasiyet: "cizgi",
  f: "1699-01-26",
  t: "1718-07-21", // 14 Ekim 2026 (KARARLAR-1014 m.23): Pasarofça (21 Temmuz 1718) Sava'nın güneyinde bir şeridi Habsburg'a verdi — Karlofça'nın Sava hattı o gün geçersiz; eski t 1918-11-11 (habsburg künye sonu) idi
  lejant: "Karlofça (1699) Bosna-Sava hukukî sınırı — Pasarofça'ya (1718) kadar",
  // 🔴 NOKTA SIRASI ÖNEMLİ — kıyas ölçümü sırasında bulundu ve DÜZELTİLDİ:
  // app.js/_cKayitGeometrisi SABİT bir kural kullanıyor (negatif cross ->
  // taraflar[0], pozitif -> taraflar[1], STRING yon_kurali OKUNMUYOR —
  // bkz. app.js:5120-5123 yorumu). Bu kural nokta_dizisi'nin A→B YÖNÜNE
  // bağlı; ilk yazımda (Bosut→Brod sırası) güney/Bosna tarafı YANLIŞLIKLA
  // taraflar[1] (habsburg) çıkıyordu — kıyas ölçümünde 180 örnekten 170'i
  // (%94) "uyuşmuyor" görünmüştü, ki bu gerçek bir sapma DEĞİL, bir İŞARET
  // hatasıydı (Brod→Bosut olarak SIRA DEĞİŞTİRİLİNCE doğrulandı, bkz.
  // denetim/BULGU-KITA30-KIYAS-OLCUMU.md'nin güncellenen notu).
  hat: {
    tur: "dogal-tanimsiz",
    nokta_dizisi: [
      { lon: 17.988, lat: 45.138, ad: "Brod Kalesi (Bosanski Brod)",
        kaynak: "data/yerlesimler_ek29.js 'Bosna Brod'u (Bosanski Brod)' kaydı — aynı yer olduğu o kaydın kendi notunda belirtilmiş", dogrulanmadi: false },
      // 🆕 14 Ekim 2026 (KARARLAR-1014 m.23, 0076/H-0116 · 0082/H-0004): ara noktalar Sava'nın gerçek akışı —
      // veri-kaynak/ne_10m_rivers.geojson 'Sava' (Natural Earth 10m), Brod→Bosut sırası korunarak ~2 km inceltildi.
      // Eski çizim iki uç arasında DÜZ KİRİŞTİ. Uçlar değişmedi.
      { lon: 18.0186, lat: 45.1497 },
      { lon: 18.0898, lat: 45.1082 },
      { lon: 18.1313, lat: 45.0981 },
      { lon: 18.1745, lat: 45.1010 },
      { lon: 18.1987, lat: 45.1192 },
      { lon: 18.2018, lat: 45.1444 },
      { lon: 18.2373, lat: 45.1577 },
      { lon: 18.2615, lat: 45.1510 },
      { lon: 18.3068, lat: 45.1278 },
      { lon: 18.3923, lat: 45.1188 },
      { lon: 18.4287, lat: 45.1025 },
      { lon: 18.4655, lat: 45.0743 },
      { lon: 18.4902, lat: 45.0631 },
      { lon: 18.5165, lat: 45.0561 },
      { lon: 18.5387, lat: 45.0696 },
      { lon: 18.5344, lat: 45.0907 },
      { lon: 18.5733, lat: 45.0917 },
      { lon: 18.6021, lat: 45.0996 },
      { lon: 18.6276, lat: 45.0803 },
      { lon: 18.6482, lat: 45.0629 },
      { lon: 18.6628, lat: 45.0775 },
      { lon: 18.6886, lat: 45.0805 },
      { lon: 18.7258, lat: 45.0264 },
      { lon: 18.7495, lat: 45.0125 },
      { lon: 18.7775, lat: 45.0106 },
      { lon: 18.7941, lat: 44.9957 },
      { lon: 18.8025, lat: 44.9776 },
      { lon: 18.7793, lat: 44.9525 },
      { lon: 18.7829, lat: 44.9140 },
      { lon: 18.8171, lat: 44.8878 },
      { lon: 18.8582, lat: 44.8688 },
      { lon: 18.8892, lat: 44.8614 },
      { lon: 19.0044, lat: 44.8636 },
      { lon: 19.0473, lat: 44.8729 },
      { lon: 19.0840, lat: 44.8792 },
      { lon: 19.1738, lat: 44.9256 },
      { lon: 19.1965, lat: 44.9134 },
      { lon: 19.2290, lat: 44.9140 },
      { lon: 19.2834, lat: 44.9086 },
      { lon: 19.3097, lat: 44.9126 },
      { lon: 19.3296, lat: 44.8990 },
      { lon: 19.3589, lat: 44.9012 },
      { lon: 19.3249, lat: 44.9223 },
      { lon: 19.3716, lat: 44.9139 },
      { lon: 19.3975, lat: 44.9235 },
      { lon: 19.3706, lat: 44.9411, ad: "Bosut'un Sava'ya döküldüğü yer (Bosut köyü, Sırbistan)",
        kaynak: "Wikipedia 'Bosut' (nehir maddesi), 44°56′28″N 19°22′14″E — KITA 30 bu turda doğruladı", dogrulanmadi: false }
    ]
  },
  gereken_cografya: [
    { ad: "Sava (nehir)", tur: "nehir", atlasta_var: true, atlasta_kaynak: "arac/uret_petek.py:552 BUYUK kümesi" },
    { ad: "Brod Kalesi", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler_ek29.js (Bosanski Brod)" }
  ],
  kapsama: {
    tur: "bbox",
    // 🆕 13 Eylül 2026 — KITA 30/M-3758 + KITA 15/M-3770 (bkz. midye-enez
    // kaydındaki aynı not). Değer bugünkü (Brod→Bosut sıralı, DOĞRULANMIŞ)
    // çizimle AYNI — bu alan tam bu kaydın nokta-sırası kırılganlığını
    // (yukarıdaki "NOKTA SIRASI ÖNEMLİ" notu) ortadan kaldırmak için var.
    negatif_taraf: "osmanli",
    // 🔴 15 Eylül 2026 — DOLGU KAPATILDI (Emre bildirdi: Srebrenik–Bosna Brod'u
    // üstünde yarısı kırmızı yarısı yeşil DİKDÖRTGEN). Bu kutu opak boyanıyor ve
    // Brod→Bosut DÜZ KİRİŞİYLE bölünüyordu — Sava değil. Sava motorun BUYUK
    // nehir kümesinde, petek sınırı zaten ona yaslanıyor; dolgunun gizleyeceği
    // yanlış sınır yok. Ayrıca kayıt 1918'e kadar açık: Pasarofça (1718) ve
    // 1878 işgali üstüne de Osmanlı kırmızısı basıyordu. Hat (kesik çizgi) kalıyor.
    dolgu: false,
    kutu: { lat_min: 44.6, lat_max: 45.5, lon_min: 17.7, lon_max: 19.7 },
    dogal_sinir_gerekcesi: "Sava'nın Bosut ağzından Brod'a kadar olan gerçek akışını kaba biçimde kapsıyor; M-3480 kuralına uygun, hattın dar çevresine kırpılmadı.",
    sezgi_kapali: true,
    yon_kurali: "cross_yerel'e göre: Sava'nın güneyi (Bosna) -> osmanli, kuzeyi (Slavonya/Habsburg) -> habsburg"
  },
  kaynak: { tur: "TDV İslâm Ansiklopedisi", ad: "karlofca",
    alinti: "Sava nehrinin Bossut'un Sava'ya döküldüğü yerden Brot Kalesi'ne kadar sınır olması kabul edildi.",
    url: "https://islamansiklopedisi.org.tr/karlofca" },
  kaynak_ikincil: { tur: "Wikipedia", ad: "Bosut (river)", not: "Bosut ağzının koordinatı için — antlaşmanın kendi metni koordinat vermiyor, bu ikincil coğrafi teyit" }
},

{
  // 🆕 İKİNCİ TUR — DÜZELTİLEREK geçiyor: TDV'nin gevşek "Bihke, Novi,
  // Krupa vb." listesi DEĞİL, data/yerlesimler_ek29.js'in birincil-metin
  // temelli listesi kullanıldı (M-3329: antlaşma metni birincil). Bihaç
  // evakue edilenler arasında YOK (Osmanlı kalıyor, dokunulmadı) — bu C
  // kaydına GİRMİYOR. Krupa da birincil metinde YOK — GİRMİYOR.
  id: "karlofca-bosna-kaleler-1699",
  taraflar: ["osmanli", "habsburg"],
  hassasiyet: "yer",
  f: "1699-01-26",
  // 14 Ekim 2026 — KARARLAR-1014 #48 (0072/H-0003 B): belgenin hükmü bir sonraki
  // belgeyle düşer. Eski t:"1918-11-11" Habsburg'un kendi sonuydu — Karlofça'nın
  // Bosna kale hükmü 219 yıl "belgeli" görünüyordu. Pasarofça kuzey Bosna'yı
  // yeniden düzenledi ⇒ bu iki noktanın belge penceresi orada kapanır (iki
  // nokta aynı belgeye dayandığı için pencere kayıt düzeyinde; nokta başına
  // `f`/`t` alanı app.js'te artık okunuyor — farklı belgeli nokta kendi
  // penceresini taşır).
  t: "1718-07-21",
  t_kaynak: "TDV pasarofca-antlasmasi (https://islamansiklopedisi.org.tr/pasarofca-antlasmasi): Avusturya ve Venedik antlaşmalarının imzası 22 Şâban 1130 / 21 Temmuz 1718 · 'Kuzey Bosna tamamen Avusturya’ya bırakılmıştır.'",
  hat: {
    tur: "nokta-kumesi",
    nokta_atamalari: [
      { ad: "Kostayniça (Kostajnica)", lat: 45.183, lon: 16.683, taraf: "habsburg",
        kaynak: "Karlofça birincil metni: \"Castanoviz...remain in the Power of the Emperor of the Romans\" — data/yerlesimler_ek29.js'te GERÇEK nokta" },
      { ad: "Bosna Novi'si (Bosanski Novi)", lat: 45.048, lon: 16.377, taraf: "osmanli",
        kaynak: "Karlofça birincil metni: \"...Novi...shall be drawn out...left entirely free\" — data/yerlesimler_ek29.js'te GERÇEK nokta (d: OSMANLI)",
        taraf_notu: "DÜZELTME 14 Ekim 2026 (KARARLAR-1014 m.48, 0072/H-0003): eski taraf 'habsburg' kendi alıntısıyla çelişiyordu — metin Novi'deki imparatorluk garnizonunun ÇEKİLDİĞİNİ söyler, yer Osmanlı'da kalır" }
    ]
  },
  duzeltme_notu: "TASLAK-hukuki_sinirlar.js'in ilk hâli TDV'nin gevşek listesini (Bihke, Novi, Krupa) kullanıyordu; data/yerlesimler_ek29.js'i üreten oturum birincil metni okuyup Bihaç'ın VE Krupa'nın evakue edilenler arasında OLMADIĞINI bulmuştu (M-3329 kuralı). KITA 30 bu düzeltmeyi burada da uyguladı — Bihaç zaten Osmanlı kalan bir yer, bu C kaydına girmemeli.",
  gereken_cografya: [
    { ad: "Kostayniça (Kostajnica)", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler_ek29.js" },
    { ad: "Bosna Novi'si (Bosanski Novi)", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler_ek29.js" }
  ],
  kapsama: { tur: "nokta-listesi", sezgi_kapali: true, not: "Noktalar zaten koordinatla biliniyor, bbox gerekmiyor." },
  kaynak: { tur: "antlaşma metni (neşir/derleme)", ad: "Treaty of Karlowitz — 'Karlovački Mir' derlemesi",
    alinti: "...all the Imperial Garrisons that are in Novi, Dubizza, Sessenovizza, Doboy and Bred on the part of Bosnia...shall be drawn out from thence...But whereas Castanoviz...are and remain in the Power of the Emperor of the Romans...",
    url: "https://www.scribd.com/document/248934439/Karlova%C4%8Dki-Mir",
    guvenilirlik_notu: "Aynı barındırma-platformu uyarısı karlofca-bosna-una-1699'da da var — DAHA SAĞLAM bir akademik kaynakla teyit edilmeli." },
  kaynak_ikincil: { tur: "TDV İslâm Ansiklopedisi", ad: "karlofca",
    not: "TDV'nin kendi listesi (Bihke, Novi, Krupa vb.) burada KULLANILMADI — birincil metinle çelişiyordu, M-3329 kuralı birincili esas aldı." }
},

{
  // 🆕 SEKİZİNCİ KAYIT — KITA 29'un ürettiği (denetim/TASLAK-C-KITA29-
  // 1590-0913.js), KITA 30 tarafından SINANARAK taşındı (13 Eylül 2026).
  // 1.MURAT kararı: t (fiilî) 1603-10-21, t_hukuki (ayrı alan) 1612-11-20
  // — kayıt zaten bu değerlerle geliyordu, değişiklik gerekmedi. Taraf
  // id'leri (osmanli özel durum, safevi f:1501-07-01/t:1736-03-08)
  // KITA 30 tarafından BAĞIMSIZ doğrulandı.
  id: "ferhad-pasa-istanbul-1590",
  taraflar: ["osmanli", "safevi"],

  hassasiyet: "bolge",
  hassasiyet_notu: "ANTLAŞMA bir ÇİZGİ çizmiyor ve bir YER LİSTESİ vermiyor: ilke STATÜKO ('fethedilen ülkeler Osmanlı'da kalır') + BÖLGE adları. Aşağıdaki nokta_atamalari'nın bir kısmı antlaşmadan DEĞİL, antlaşmanın UYGULAMA belgesinden (Kasım 1590 Revan tahriri, BOA TD 633) gelir — o atamalar 'yer' düzeyindedir. İkisi karışmasın diye her atamada kaynak_turu alanı var.",

  f: "1590-03-21",
  f_kaynak: "Adlığ 2026 [298]: '21 Mart 1590 tarihinde Osmanlı ve Safevî Devletleri arasında İstanbul Antlaşması veya Ferhad Paşa Antlaşması olarak adlandırılan antlaşma imzalanmıştır.' · atlas maddesi olaylar_ek2.js t:1590-03-21",

  t: "1603-10-21",
  t_kaynak: "TDV tebriz [58]: 'Osmanlılar 21 Ekim 1603 tarihine kadar Tebriz'i kontrolleri altında tuttular.' — antlaşmanın tarif ettiği TASARRUFUN ilk fiilî kırılması.",
  t_hukuki: "1612-11-20",
  t_hukuki_kaynak: "TDV nasuh-pasa [73]: '26 Ramazan 1021'de (20 Kasım 1612) 962 (1555) sulhu esas alınmak suretiyle barış yapıldı.'",
  t_secim_gerekcesi: "Kayıt t_hukuki'ye kadar açık kalırsa 1603-1607'de Şah Abbas'ın geri aldığı HER yerde (Tebriz 1603-10-21 · Revan 1604-06-08 · Gence 1606 · Şirvan 1607) belgeli Osmanlı işareti kalır — belgenin eliyle üretilmiş bir Batnoz hayaleti (CLAUDE.md §3.5). Atlas tasarruf boyar (D076). ⇒ Varsayılan t fiilî kırılma.",

  ilke: {
    tur: "statuko",
    alinti_1: "TDV murad-iii [115]: 'Şah Abbas, Haydar Mirza'yı kalabalık bir elçilik heyetiyle İstanbul'a gönderdi (11 Rebîülevvel 998 / 18 Ocak 1590) ve fethedilen ülkelerin Osmanlılar'ın tasarrufunda kalması şartıyla anlaşma yapıldı.'",
    alinti_2: "Adlığ 2026 [299]: 'Antlaşmaya göre, her iki devletin ele geçirdiği yerler kendilerinde kalacaktır.'",
    sonuc: "İki bağımsız kaynak aynı ilkeyi veriyor. ⇒ Belgenin sınırı, 1590-03-21'deki FİİLÎ fetih hattıdır; o hattı belge değil fetih kayıtları tarif eder."
  },

  hat: {
    tur: "bolge",
    taraf_atanan: "osmanli",
    bolgeler: [
      "Azerbaycan", "Gürcistan", "Dağıstan", "Şirvan", "Karabağ", "Gence",
      "Bağdat", "Luristan", "Kürdistan", "Tebriz", "Karacadağ", "Nihâvend", "Şehrizor"
    ],
    bolgeler_kaynak: "TDV safeviler [211]: '998'de (1590) İstanbul'da imzalanan Ferhad Paşa antlaşmasıyla Azerbaycan, Gürcistan, Dağıstan, Şirvan, Karabağ, Gence, Bağdat, Luristan, Kürdistan, Tebriz, Karacadağ, Nihâvend, Şehrizor bölgeleri Osmanlı hâkimiyetine girdi.'",
    bolgeler_uyari: "🔴 Bölge adları sınır DEĞİLDİR — bir kutu/poligon ÜRETİLMEZ (D089). 'bolge' türü DOLGU ÜRETMEZ (bkz. denetim/ARAC-KITA30-CKATMAN-KOPRU-0913.js düzeltmesi, M-3742), yalnız nokta_atamalari çizilir.",
    // 🔴 DÜZELTME (KITA 30, aynı gün) — KITA 29'un taslağı nokta_atamalari'nı
    // `hat`in DIŞINA (kayıt kök seviyesine) koymuştu; render kodu
    // (`_cNoktaKumesiOzellikleri`) `kayit.hat.nokta_atamalari`ya bakıyor —
    // burada TAŞINARAK düzeltildi (KITA 15'in doğrulama aracı 0 nokta
    // gösterip bunu YAKALADI, bkz. denetim/OLCUM-KITA30-FERHATPASA-TASI-0913.md).
    nokta_atamalari: [
    { ad: "Tebriz", lat: 38.0800, lon: 46.2920, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV tebriz [53-54]: 'Özdemiroğlu Osman Paşa 30 Ramazan 993'te (25 Eylül 1585) şehri ele geçirdi'" },
    { ad: "Revan", lat: 40.1830, lon: 44.5150, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 (Kasım 1590) — Bilgili 2016 [52] · Adlığ 2026 [306] · TDV revan [42]" },
    { ad: "Nahçıvan", lat: 39.2090, lon: 45.4120, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 — Bilge (Vakanüvis, Kafkasya özel sayısı) [55]" },
    { ad: "Ordubad", lat: 38.9053, lon: 46.0242, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 — Bilgili 2016 [52] · İslamoğlu 2015, CAHIJ 4, s.132-166" },
    { ad: "Şerur (Sharur)", lat: 39.5500, lon: 44.9500, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 — Bilgili 2016 [52] liste · [85] 'Şerur Kazası'", not: "atlas bugün safevi — YAMA-KITA29 A2" },
    { ad: "Karbi (Karpi) nahiyesi", lat: null, lon: null, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 — Bilgili 2016 [52]", not: "atlasta nokta YOK, koordinat null (uydurulmadı) — çizilmez" },
    { ad: "Eçmiyadzin (Üçkilise)", lat: 40.1620, lon: 44.2930, taraf: "osmanli", guven: "cikarim-guclu", kaynak_turu: "tahrir-defteri+idari-uyelik",
      kaynak: "Karbi nahiyesi 1590 Osmanlı tahririnde (TD 633) · köyün Karbi'ye bağlılığı 1724/1727 belgelerinden (Köse 2024)",
      not: "atlas bugün safevi — YAMA-KITA29 B1 (karar)" },
    { ad: "Talin", lat: null, lon: null, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 — Bilgili 2016 [52][173]", not: "atlasta nokta YOK, koordinat null — çizilmez" },
    { ad: "Aralık", lat: null, lon: null, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 — Bilgili 2016 [52][164]", not: "atlasta nokta YOK, koordinat null — çizilmez" },
    { ad: "Gence", lat: 40.6830, lon: 46.3600, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV murad-iii [114] · TDV safeviler [210]: '(1 Eylül 1588)'" },
    { ad: "Hoy", lat: 38.5503, lon: 44.9521, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV hoy [24-25]" },
    { ad: "Merâga", lat: 37.3894, lon: 46.2381, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV tebriz [184]" },
    { ad: "Mîyandoab", lat: 36.9694, lon: 46.1028, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV tebriz [184] — Merâga livâsı altında 'Miyandûvab' nahiyesi (1593)" },
    { ad: "Şamahı", lat: 40.6320, lon: 48.6410, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV sirvan [33-35]", not: "Şirvan bölgesinin merkezi olarak — bölge→nokta eşlemesi ÇIKARIMDIR" },
    { ad: "Tiflis", lat: 41.7160, lon: 44.7830, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV gurcistan [417-418]: '1603'te Şah I. Abbas Tiflis şehrini Osmanlılar'dan geri alıp …'" },
    { ad: "Luristan", lat: 33.4870, lon: 48.3560, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV luristan [35]",
      not: "🟢 EMRE KARARI (13 Eylül 2026, ikinci tur, madde 3 — oturumlar/FERHATPASA-SINIR-0913.md): Luristan 1590'da OSMANLI-TÂBİ (Bağdat beylerbeyine bağlı — Kütükoğlu 1962 s.183 · Monshi/Savory s.642-643) gösterilir; haritada renk değişimi TDV luristan '(1603)'. ⇒ Bu işaret kaydın 1603 kapanışına kadar KALIR. İki gelenek kronolojide açıkça yazıldı: data/olaylar_p0048.js — 1592-01-01 isyan (Şâhverdi'nin Safevî'ye bağlılık beyanı, Monshi 1000/1591-92) · 1603-01-01 kayıp (TDV). ⚠️ Kayıt t:1603-10-21 Tebriz günüdür; Luristan'ın yerleşim yaması t:1603-01-01 önerir (denetim/YAMA-FERHATPASA-BIRLESIK-0913.json). Ayrışma (Monshi 1593-94 Hürremâbâd işgali) not olarak durur, taraf seçimi Emre'nin." },
    { ad: "Mâku", lat: 39.2942, lon: 44.5142, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV maku [17]", not: "1590 KAZANCI DEĞİL, 1574'ten beri Osmanlı ocaklığı; statükoyla tescillendi — atlas bugün safevi, YAMA-KITA29 A1" },
    // 🆕 C-FERHATPASA-HAT (13 Eylül 2026) — GUNEY kolunun Osmanlı ADASI.
    // Koordinat ATLASTAN DEĞİL, GeoNames'ten (Emre ilkesi).
    { ad: "Nihâvend (kale)", lat: 34.1908, lon: 48.3744, taraf: "osmanli", guven: "kesin", kaynak_turu: "kronik+ansiklopedi",
      kaynak: "TDV nihavend--iran [94-100]: 996 (1588) sonları kale + beylerbeyilik · Monshi/Savory s.583, 618 (barıştan sonra şah kaleye dokunmadı), s.824 (1593-1603 Safevî toprağıyla çevrili: 'come and go freely to the fort') · Iranica NEHĀVAND 998/1589 → 1011/1602-03",
      konum_kaynagi: "GeoNames Nahavand 34°11′27″N 48°22′28″E (şehir merkezi; kalenin kendi konumu ARANMADI)",
      not: "🟢 EMRE KARARI (13 Eylül 2026, ikinci tur, madde 4): Nihâvend batısı ve güneyindeki topraklarla Osmanlı ana karasına BAĞLI — Luristan 1603'e kadar Osmanlı(-tâbi) gösterildiği için bağlantı sürer ⇒ ENKLAV DEĞİL; sınır Nihâvend ile Hemedan arasından geçer (ferhad-pasa-1590-sinir-hatti köşe 10-11). Kaydın t:1603-10-21'i Nihâvend için KAYNAKLI DEĞİL: TDV nihavend--iran 'Şah I. Abbas 1603'te şehri ele geçirdi' (yıl) · Iranica 1011/1602-03 — gün yok. ⚠️ AYRIŞMA NOTU (taraf seçilmedi): Monshi/Savory s.824 kaleye 'Safevî aşiret topraklarından geçerek' gidildiğini yazar (1593-1603 enklav tarifi) · Kütükoğlu 1962 s.198 1591/92 sınır görüşmesinde nahiyelerin Osmanlı'da kaldığını yazar — ikisi rapor notu olarak durur (denetim/OLCUM-NIHAVEND-BAGLANTI-0913.md)." }
    ] // nokta_atamalari sonu
  }, // hat sonu

  acik_sorular: [
    { ad: "Gümrü (Aleksandropol)", durum: "bulunamadi", not: "1590 Revan tahririnin listesinde Şüregel YOK (1727'de var) — iki yönlü işaret, hüküm yok." },
    { ad: "Merend", durum: "bulunamadi", not: "Hiçbir okunan kaynak adıyla anmıyor." },
    { ad: "Selmâs (Dilman)", durum: "cikarim-zayif", not: "Bir ÖNERİ belgesi var (kale inşası), sahiplik beyanı değil." },
    { ad: "Erdebil · Kürdistan altılısı", durum: "olculmedi", not: "Bölge adlarının bu yerleri kapsayıp kapsamadığı hiçbir kaynakta yok." }
  ],

  gereken_cografya: [
    { ad: "Karbi (Karpi)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null },
    { ad: "Talin", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null },
    { ad: "Aralık (Ahuri)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null },
    { ad: "Revan", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js" },
    { ad: "Nahçıvan", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js" },
    { ad: "Ordubad", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js" },
    { ad: "Şerur (Sharur)", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler_kalite4.js" },
    { ad: "Eçmiyadzin", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler_ek26.js" },
    { ad: "Mâku", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js" }
  ],

  kapsama: {
    tur: "nokta-listesi",
    sezgi_kapali: true,
    not: "BBOX DOLGU YOK — KITA 29'un ölçümü (33-43K/41.5-50.5D kutusunda 123 noktanın 23'ü Osmanlı/tâbi DEĞİL) tek renk dolgunun yanlış boyayacağını gösterdi. Emsal: karlofca-lehistan-1699.",
    odak_kutu: { lat_min: 33.0, lat_max: 43.0, lon_min: 41.5, lon_max: 50.5 },
    odak_kutu_not: "YALNIZ kamera odağı için — boyama/dolgu için KULLANILMAZ."
  },

  kaynak: {
    tur: "antlaşma özeti (ansiklopedi + hakemli makale)",
    madde: "bulunamadı — antlaşmanın kendi metni/neşri OKUNMADI (TDV'de müstakil madde yok)",
    alinti: "fethedilen ülkelerin Osmanlılar'ın tasarrufunda kalması şartıyla anlaşma yapıldı",
    url: "https://islamansiklopedisi.org.tr/murad-iii"
  },
  kaynak_ikincil: {
    tur: "hakemli makale + uygulama belgesi (tahrir) atıfları",
    kaynaklar: [
      "Davut Adlığ, 'Osmanlı-Safevî İlişkilerinde Revan Şehri...', Dicle Üniv. SBED 42 (2026), doi:10.15182/diclesosbed.1696513",
      "Ali Sinan Bilgili, 'Osmanlı Tahrir Defterlerine Göre İran-Azerbaycan Şehirlerinde Ermeniler', Ermeni Araştırmaları 53 (2016)",
      "Sadık Müfit Bilge, '16. ve 18. Yüzyıllarda Osmanlı Yönetiminde Nahçıvan Sancağı', Vakanüvis 2",
      "Ensar Köse, 'Şah, Çar ve Sultan Arasında: Ermeni Kutsal Makamı Eçmiyadzin'in Çalkantılı Yılları (1700-1725)', Türkiyat Mecmuası 34/1 (2024), doi:10.26650/iuturkiyat.1351237",
      "Mehmet Alauddin İslamoğlu, '1590 Tarihli Mufassal Tapu Tahrir Defterine Göre Revan Eyaletinde Alınan Vergiler', CAHIJ 4 (2015), doi:10.18299/cahij.50",
      "Volkan Çeribaş, '1603-1618 Osmanlı-Safevi Savaşı Sırasında Serhadde Teyakkuz: Erzurum', Hazine-i Evrak 7/8 (2025)"
    ],
    not: "BOA TD 633'ün KENDİSİ okunmadı — atıflar makaleler üzerinden (D104)."
  }
},

{
  // 🆕 DOKUZUNCU KAYIT — C-FERHATPASA-HAT (13 Eylül 2026). Üç araştırma
  // kolunun (kuzey SEHIR-MATRISI · GUNEY · 0047 BATI) YER HÜKÜMLERİNDEN
  // tek çizgi. Rapor + sınav dökümü: denetim/C-FERHATPASA-HAT-0913.md
  //
  // 🔴 EMRE İLKESİ (13 Eylül, bağlayıcı): "Atlası referans alamazsın." ⇒
  // KÖŞE KOORDİNATLARI ATLAS NOKTALARINDAN ALINMADI. Araştırma kolları
  // köşeleri atlas noktalarının orta noktasından kurmuştu; burada AYNI YER
  // ÇİFTLERİ korunup her yerin konumu GeoNames gazetteer'ından (geonames.org,
  // ilçe/il merkezi kaydı) okundu. Sahiplik hükümleri raporların KAYNAK
  // hükümleridir, atlasın gösterdiği değil. Orta nokta bir KAYNAK DEĞİLDİR:
  // hiçbir kaynak sınırın o iki yerin tam ortasından geçtiğini söylemiyor ⇒
  // orta nokta köşelerinin HEPSİ `dogrulanmadi:true`. Kaynakta ADIYLA geçen
  // tek sınır ögesi Hudâferin (Arakel) — `dogrulanmadi:false` yalnız o.
  //
  // 🔴 DOLGU YOK — BİLEREK. app.js `_cKayitGeometrisi` N noktalı hatta
  // kapsama poligonunu YALNIZ ilk↔son nokta KİRİŞİNE göre bölüyor (kendi
  // yorumu: "dolgu-bölme yalnız İLK ve SON nokta arasındaki DÜZ ÇİZGİYE göre").
  // `kapsama.kutu` boyansaydı kaynak hükmü olan 30 yerin 10'u YANLIŞ renk
  // alırdı (Erdebil · Hemedan · Zencan · Sultâniye · Lenkeran · Astara ·
  // Burûcird · Dizfûl · Havîza → osmanli; Bakü → safevi). Hattın kendisine
  // göre 30/30 doğru taraf. ⇒ `kapsama.tur:"poligon"` + BOŞ `nokta_dizisi`:
  // render poligon dalına girer, dolgu 0 parça, yalnız kesik ÇİZGİ çizilir.
  // 🔴 `tur:"poligon"` SATIRINI SİLME — silinirse `kutu` dalı devreye girer
  // ve yukarıdaki 10 yanlış boyama DOĞAR. Dolgu gerekiyorsa çare app.js'te
  // N segmentli bölme (Oturum 1), bu dosyada değil.
  id: "ferhad-pasa-1590-sinir-hatti",
  // 🔴 EMRE KARARI (post-it #98, 18 Ekim 2026): "ya çizgiyi akademik olarak teyit
  // edip renkleri ona dayayalım ya da çizgiyi kullanmayıp A tipi sınır bırakalım —
  // ikili sistem olmamalı." TEYİT EDİLEMEDİ: antlaşma çizgi çizmiyor (statüko),
  // 19 köşenin 17'si orta nokta (`dogrulanmadi:true`), kaynakta adıyla geçen yalnız
  // Hudâferin ve Areštanāb; köşe 1 Mahmudâbâd'ı Safevî yanına düşürüyor oysa TDV
  // sirvan Osmanlı diyor ("Şemâhî, Kabala, Bakü, Şâburân, Mahmûdâbâd, Salyan ve
  // Demirkapı/Derbend Osmanlı kontrolüne girdi"). ⇒ hat ÇİZİLMEZ; sınırı yerleşim
  // verisi (kaynaklı tanık) çizer. KARARLAR-1014 m.1'deki "hat hukukî, renk tanığı
  // izler" beyanı bununla kalktı.
  cizim_kapali: true,
  taraflar: ["osmanli", "safevi"],
  hassasiyet: "yer",
  hassasiyet_notu: "Antlaşma çizgi ÇİZMİYOR (statüko: 'her iki devletin ele geçirdiği yerler kendilerinde kalacaktır'). Bu çizgi kaynakta hükmü verilmiş YERLERİN arasından TÜRETİLDİ. Iranica BOUNDARIES i: sınır bir çizgi değil KUŞAK — hat kuşağın ortası olarak okunmalı.",

  f: "1590-03-21",
  f_kaynak: "Adlığ 2026 [298], Dicle Üniv. SBED 42: '21 Mart 1590 tarihinde ... İstanbul Antlaşması veya Ferhad Paşa Antlaşması ... imzalanmıştır.' ⚠️ Kütükoğlu 1962 s.195-196 (aktaran Efe & Kızıl 2017) statüko maddesini '22 Mart 1590'a kadar tarafların hâkimiyetine giren yerler' diye veriyor — bir günlük fark, kaynaklar arası, ÇÖZÜLMEDİ.",
  t: "1603-10-21",
  t_kaynak: "TDV tebriz [58]: 'Osmanlılar 21 Ekim 1603 tarihine kadar Tebriz'i kontrolleri altında tuttular.' — statükonun ilk fiilî kırılması",
  t_hukuki: "1612-11-20",
  t_hukuki_kaynak: "TDV nasuh-pasa [73]: '26 Ramazan 1021'de (20 Kasım 1612) ... barış yapıldı.'",
  t_uyari: "🟢 EMRE KARARI (13 Eylül 2026, ikinci tur — oturumlar/FERHATPASA-SINIR-0913.md madde 3-4): harita TDV luristan'ın 1603'ünü izler ⇒ güney kesimi (köşe 10-13) kaydın sonuna kadar TEK hat; 1592/93 bölme planı ve `guney_1593_varyant` KALDIRILDI. Luristan 1603'e kadar Osmanlı-tâbi, Nihâvend onun üzerinden bağlı (enklav değil). Monshi/Savory s.642-644 geleneği (1000/1591-92 bağlılık beyanı · 1002/1593-94 Hürremâbâd işgali) kronolojide AÇIKÇA yazıldı: data/olaylar_p0048.js (1592-01-01 isyan · 1603-01-01 kayıp). ⚠️ Kaydın t:1603-10-21'i Tebriz günüdür; Luristan ve Nihâvend için kaynak YIL veriyor (TDV luristan '(1603)' · TDV nihavend--iran '1603'te' · Iranica NEHĀVAND 1011/1602-03) — güney kesiminin fiilen 1603-10-21'den ÖNCE kapandığı bilinir, gün kaynaksız, kayıt bölünmedi.",

  hat: {
    tur: "dogal-tanimsiz",
    yon: "kuzey → güney (Hazar → Basra Körfezi). Osmanlı tarafı hattın BATISI; Hazar–Aras kesiminde KUZEYİ.",
    konum_kaynagi: "GeoNames gazetteer (geonames.org tam metin araması, 13 Eylül 2026; il/ilçe MERKEZİ kaydı). Köşe = iki yerin gazetteer konumunun geometrik orta noktası.",
    birlesme_notu: "36°K birleşmesi: kuzey köşe 7 (Sakkız↔Bîcâr) güney kolunun 3. düğümüne (Kirmanşah↔Bîcâr) DOĞRUDAN bağlandı. Güney kolunun düğüm 1 (Şehrizor|Bâne) ve 2 (Halepçe|Merîvan) ATILDI: ikisi Bâne ve Merîvan'ı Safevî ucu sayıyordu (atlasın bugünkü hâli), oysa 0047 ikisini KAYNAKLI Osmanlı-tâbi buldu (BOA 1582/1585 hükümleri, Özcoşar & Açar 2024). Güney kolu bunu kendisi yazmıştı: 'Düğüm 1-3'ün Safevî tarafı 0047'ye BAĞLI.' Kuzey köşe 1'in Mahmudâbâd ucu (kaynak hükmü BELİRSİZ, GeoNames'te kaydı YOK) yerine kuzey kolunun kendi bant notundaki kaynaklı çift konuldu: Bakü (Osmanlı) ↔ Lenkeran (Safevî).",
    nokta_dizisi: [
      { ad: "1 · Hazar kıyısı, Şirvan/Talış arası (Bakü ↔ Lenkeran)", lat: 39.5659, lon: 49.3713, dogrulanmadi: true,
        hukum_dayanagi: "Bakü OSMANLI — TDV baku [22] · Iranica BAKU i [48] · AMEA sənəd toplusu s.25 ║ Lenkeran SAFEVÎ — Narkvevebi IV (1974) s.82 'Erdebil ve Talış hariç' ← Pigulevskaya 1958 s.272 · Petrushevsky 1949 s.131-132",
        konum_kaynagi: "GeoNames: Baku 40°22′39″N 49°53′31″E · Lankaran 38°45′15″N 48°51′02″E — orta nokta",
        bant: "Salyan · Mahmudâbâd kaynaksız (BELİRSİZ) ⇒ gerçek hat Bakü ile Lenkeran arasında herhangi bir yerde; bu uç kıyıyı temsilen" },
      { ad: "2 · Aras üzerinde Hudâferin köprüleri", lat: 39.15, lon: 46.9416, dogrulanmadi: false,
        hukum_dayanagi: "HY Arakʻel of Tabriz, tr. Bournoutian 2010, s.31: Osmanlı paşaları 'controlled all the land up to Khudafrin' — kaynakta ADIYLA geçen sınır ögesi",
        konum_kaynagi: "Wikipedia 'Khudafarin Bridges' 39°09′00″N 46°56′30″E; bağımsız teyit: veri-kaynak/ne_10m_rivers.geojson 'Aras' geometrisi bu noktadan 1,0 km geçiyor (bu oturum ölçtü)" },
      { ad: "3 · Karadağ/Ahar ↔ Meşkin", lat: 38.4381, lon: 47.3758, dogrulanmadi: true,
        not: "🟢 EMRE KARARI (13 Eylül 2026, üçüncü tur — koordinatör iletisi): AHAR şık B — Osmanlı TÂBİSİ 1588 → 1603 (TR Kütükoğlu 1962 s.195 ahidname listesinde 'Karacadağ' · RU Petrushevsky 1949 s.93-94, 168-169 'türk hâkimiyeti 1588-1603'). Ahar 1590-1603 penceresinin TAMAMINDA Osmanlı tarafında ⇒ `gecici` KALDIRILDI. ⚠️ AYRIŞMA NOTU (taraf seçilmedi): IR Eskandar Beg, tr. Savory II s.615 (1000/1591-92 Azerbaycan sınır tahdidi) ve s.619-620 (1001/1592-93): 'Qaraja-dag was allotted to Iran', Şâhverdi Osmanlı topraklarına kaçtı, şah yeni vali atadı (denetim/OLCUM-AHAR-SARAB-MIYANE-0913.md, D104).",
        hukum_dayanagi: "Ahar OSMANLI-tâbi 1588-1603 (Emre kararı, şık B) — Eskandar Beg, tr. Savory II s.582-583 (997/1588-89 itaat) · Kütükoğlu 1962 s.195 'Karacadağ' · Petrushevsky 1949 '1588-1603' ║ Meşkinşehr BELİRSİZ (kaynak yok)",
        konum_kaynagi: "GeoNames: Ahar 38°28′38″N 47°04′11″E · Meshgin Shahr 38°23′56″N 47°40′55″E — orta nokta",
        bant: "Meşkin belirsiz ⇒ hat Meşkin ile Erdebil arasına kayabilir" },
      { ad: "4 · Areštanāb sınır köyü (Tebriz'in 12 fersah GD'su)", lat: 37.9323, lon: 46.7506, dogrulanmadi: true,
        hukum_dayanagi: "SINIRIN KENDİSİ kaynakta adıyla — Iranica AZARBAIJAN iv (C. E. Bosworth, Vol. III Fasc. 2-3, s.224-231, 1987): 'According to the Ottoman-Persian agreement of the Year of the Hare 1000/1591-92, Shah ʿAbbās I had to cede … western Azarbaijan, the frontier being fixed at the village of Areštanāb twelve farsakhs to the southeast of Tabrīz' ← Röhrborn 1966 s.6-9 (OKUNMADI) · Razmārā, Farhang IV s.15 (OKUNMADI) ║ batısı Tebriz OSMANLI (TDV tebriz [58]) · doğusu Sarâb SAFEVÎ (Emre dördüncü tur; Eskandar Beg, tr. Savory II s.582 · Kütükoğlu 1962 s.168 'Serâb'dan daha ileri gitmeyip Tebriz'e döndü')",
        konum_kaynagi: "GeoNames id 22871 'Arshatnāb' (East Azerbaijan) 37.9323 / 46.7506 — atlas noktası DEĞİL, orta nokta DEĞİL",
        not: "⚠️ AÇIK ŞARTLAR (FERHATPASA-KOSE, denetim/OLCUM-KOSE-SARAB-MIYANE-0913.md): (1) Areštanāb ↔ Arshatnāb ad eşlemesi ÇIKARIM. (2) Tebriz→Arshatnāb kuş uçuşu ≈43 km, kaynak 'twelve farsakhs' ≈65-75 km — uyuşmazlık ölçüldü, sebebi ölçülemedi. (3) Kaynağın tarihi 1000/1591-92 tahdidi — kaydın 1590-03-21 başlangıcından ~1-2 yıl sonra; antlaşmayı uygulayan sınır çizimi olarak alındı. AYRIŞMA: TDV erdebil '1590'da … sınır Erdebil yakınlarından geçiyordu' (Arshatnāb→Erdebil ≈140 km) — taraf seçilmedi. Bostānābād/Ūcân hatta 1,7 km, Türkmençay 11 km — ikisinin de tarafı BULUNAMADI.",
        bant: "köşe konumu ±~30 km (mesafe uyuşmazlığı); Iranica BOUNDARIES i: sınır çizgi değil kuşak" },
      { ad: "5 · Heşrûd ↔ Miyâne", lat: 37.4494, lon: 47.3829, dogrulanmadi: true,
        hukum_dayanagi: "Heşrûd OSMANLI — TDV tebriz (A. S. Bilgili) 1593 idarî taksimi: Tebriz livâsı nahiyeleri '… Dihharkân, Dizecrûd, Adangı, Heşrûd, Rudgât, Mevâzi'cân' (listede Sarâb ve Miyâne YOK) ║ Miyâne SAFEVÎ — Emre dördüncü tur (koordinatör hükmü) · Eskandar Beg, tr. Savory II s.828 (Eylül 1603: Erdebil valisine 'join the Shah at Mīāna')",
        konum_kaynagi: "GeoNames: Hashtrūd id 142554 37.4779 / 47.0508 · Mīāneh id 124082 37.421 / 47.715 — orta nokta (iki uç da kaynakta adıyla anılan yer; atlas noktası değil)",
        not: "⚠️ Heşrûd = Hashtrūd eşlemesi ÇIKARIM (Farsça Hašt-rūd). Açık kalem: Germrüd (Kütükoğlu dn.186: 20 Zilhicce 996 Osmanlı sancak beyi; 1591 tahdit sonucu Kütükoğlu cilt II, OKUNMADI) bu hatta Safevî yanda kalıyor. Eski köşe 6 (Miyâne ↔ Zencan) ATILDI: iki ucu Safevî, Hashtrūd güneyi için kaynaklı Osmanlı ucu bulunamadı; 5 → 7 segmenti taraf sınamasından geçti (Zencan · Miyâne Safevî, Leylân · Merâga Osmanlı).",
        bant: "Hashtrūd ile Miyâne arası ≈58 km kuşak; Torkamān hattın 11 km Safevî yanında, tarafı BULUNAMADI" },
      { ad: "7 · 36°K devir: Sakkız ↔ Bîcâr", lat: 36.0582, lon: 46.9392, dogrulanmadi: true,
        hukum_dayanagi: "Sakkız OSMANLI ÖRTÜLÜ (Emre'nin enklav kuralı, kaynak yok — 0047 C0047-1) ║ Bîcâr 1590'da ŞEHİR DEĞİL — KAYNAKLI UÇ YOK",
        konum_kaynagi: "GeoNames: Saqqez 36°14′59″N 46°16′24″E · Bījār 35°52′00″N 47°36′18″E — orta nokta",
        not: "🟢 EMRE KARARI (13 Eylül 2026, ikinci tur madde 2): Bîcâr 'o dönemde yokmuş gibi' — Iranica BĪJĀR (E. Ehlers, Vol. IV Fasc. 3 s.254, 1989): 'Mentioned in the 9th/15th century as a village … Bījār developed to the size of a town only in the 13th/19th century.' Kasabalaşma YILI kaynakta YOK ⇒ yerleşim yaması kur:1801-01-01 (yüzyıl hassasiyeti) ÖNERİR (denetim/YAMA-FERHATPASA-BIRLESIK-0913.json). Bu köşe artık bir yerleşim ÇİFTİNİN değil, KAYNAKSIZ bir kuşak ortasının işaretidir; o topraklar petek/bölgeleme kurallarıyla bölünür. Aday doğal sınır: Iranica BĪJĀR 'traversed by the rivers Safīdrūd and Talvār' (Garrūs ilçesi) — Talvār'ın gazetteer konumu ÖLÇÜLEMEDİ (GeoNames 'talvar' aramasında İran'da bu adla akarsu kaydı yok; en yakın benzer ad 'Rūdkhāneh-ye Tālūrā' 35.9986/48.0571 — eşdeğerliği DOĞRULANMADI). veri-kaynak/ne_10m_rivers.geojson'da Bîcâr'a 150 km içinde TEK adlı akarsu: 'Qezel Owzan' (scalerank 9), en yakın noktası 36.01/47.558, Bîcâr'a 15,8 km (bu oturum ölçtü) — Qezel Owzan'ın Iranica'nın 'Safīdrūd'u olduğu (yukarı çığır) kaynakla EŞLENMEDİ ⇒ köşe TAŞINMADI." },
      { ad: "8 · Kirmanşah ↔ Bîcâr", lat: 35.0904, lon: 47.335, dogrulanmadi: true,
        hukum_dayanagi: "Kirmanşah DOĞRUDAN OSMANLI — 🟢 EMRE KARARI (13 Eylül 2026, dördüncü tur). KIRMANSAH-DOGRULA (denetim/OLCUM-KIRMANSAH-0913.md): şehri adıyla anan kaynak YOK; batısındaki Kalhor kuşağı (Derteng · Zencir · Derne · Kerind) OSMANLI, yüksek güven — Monshi/Savory s.840, 851, 1168 · Şerefnâme 1597 (Charmoy II/1 s.180-182) · Kütükoğlu 1962 s.164, 181 ║ Bîcâr 1590'da ŞEHİR DEĞİL (Emre kararı 2, köşe 7 notu) — KAYNAKLI UÇ YOK. ⚠️ Ardalan/Pelengân (Küpeli 2010: Osmanlı beylerbeyiliği) bu kesimde, gazetteer konumu ARANMADI.",
        konum_kaynagi: "GeoNames: Kermanshah 34.31416N 47.06500E · Bījār — orta nokta",
        not: "Emre kararı 5 (13 Eylül 2026): Kürt beylikleri ayrı beylik gösterilmez, Osmanlı tâbisi. Ölçüldü (bu oturum, en yakın segment çapraz çarpımı): Bâne · Merîvan · Mahabad · Sakkız · Serdeşt · Senendec hattın OSMANLI tarafında; Bîcâr SAFEVÎ tarafında (~55 km). Köşe değişmedi." },
      { ad: "9 · Kirmanşah ↔ Hemedan", lat: 34.5567, lon: 47.7897, dogrulanmadi: true,
        hukum_dayanagi: "Kirmanşah ÖRTÜLÜ ║ Hemedan SAFEVÎ — Monshi/Savory s.587·690·825 (Safevî valileri) · Iranica NEHĀVAND · Kütükoğlu madde listesinde Hemedan YOK",
        konum_kaynagi: "GeoNames: Kermanshah · Hamadan 34°47′57″N 48°30′52″E — orta nokta",
        not: "🟢 EMRE KARARI (13 Eylül 2026, ikinci tur madde 1): Hemedan SAFEVÎ." },
      { ad: "10 · Nihâvend ↔ Hemedan", lat: 34.495, lon: 48.4444, dogrulanmadi: true,
        hukum_dayanagi: "Nihâvend kalesi OSMANLI — TDV nihavend--iran [94-100] · Monshi s.583 · Iranica NEHĀVAND ║ Hemedan SAFEVÎ (köşe 9)",
        konum_kaynagi: "GeoNames: Nahavand 34°11′27″N 48°22′28″E · Hamadan — orta nokta",
        not: "🟢 EMRE KARARI (13 Eylül 2026, ikinci tur madde 4): Nihâvend batısı ve güneyindeki topraklarla Osmanlı ana karasına BAĞLI (Luristan 1603'e kadar Osmanlı) ⇒ ENKLAV DEĞİL; sınır Nihâvend ile Hemedan arasından geçer — bu köşe O çizgidir, kaydın sonuna kadar geçerli. ⚠️ AYRIŞMA NOTU: Monshi/Savory s.824 (1602-03: kaleye 'Safevî aşiret topraklarından geçerek' gidiliyor — enklav tarifi) · Kütükoğlu 1962 s.198 (1591/92 sınır görüşmesi: Safevî'nin 'yalnız kaleye yol' talebi reddedildi, nahiyeler Osmanlı'da kaldı) — ikisi denetim/OLCUM-NIHAVEND-BAGLANTI-0913.md'de, taraf seçilmedi. `gecici` alanı bu köşede YOKTU (ölçüldü) — temizlenecek bir şey çıkmadı." },
      { ad: "11 · Nihâvend ↔ Burûcird", lat: 34.044, lon: 48.5629, dogrulanmadi: true,
        hukum_dayanagi: "Nihâvend OSMANLI ║ Burûcird SAFEVÎ — Monshi s.643-644 (1002/1593-94 Safevî seferberliği Burûcird'de); Osmanlı olduğuna dair kaynak BULUNAMADI (GUNEY A2 · NIHAVEND-BAGLANTI Y2)",
        konum_kaynagi: "GeoNames: Nahavand · Borūjerd 33°53′50″N 48°45′05″E — orta nokta",
        not: "🟢 EMRE KARARI (13 Eylül 2026, ikinci tur madde 1): Burûcird SAFEVÎ. Madde 4: sınır Nihâvend ile Burûcird arasından geçer. `gecici` YOKTU (ölçüldü)." },
      { ad: "12 · Luristan (Hürremâbâd) ↔ Burûcird", lat: 33.6925, lon: 48.5536, dogrulanmadi: true,
        hukum_dayanagi: "Luristan OSMANLI-tâbi 1590 — Kütükoğlu 1962 s.183 · Monshi s.642-643 · TDV luristan · Iranica CHRONOLOGY ║ Burûcird SAFEVÎ (köşe 11)",
        konum_kaynagi: "GeoNames: Khorramabad 33.48777N 48.35583E (bölge merkezi olarak — bölge→nokta eşlemesi ÇIKARIM) · Borūjerd — orta nokta",
        not: "🟢 EMRE KARARI (13 Eylül 2026, ikinci tur madde 3): Luristan 1590'da Osmanlı ⇒ Osmanlı(-tâbi) gösterilir, haritada renk değişimi TDV luristan '(1603)'. Luristan ile Burûcird arasındaki çizgi kaydın sonuna kadar geçerli (1592/93 bölme planı KALDIRILDI). Monshi geleneği (1000/1591-92 bağlılık · 1002/1593-94 Hürremâbâd) data/olaylar_p0048.js'te." },
      { ad: "13 · Luristan ↔ Dizfûl", lat: 32.9344, lon: 48.3807, dogrulanmadi: true,
        hukum_dayanagi: "Luristan OSMANLI-tâbi (Emre kararı 3, 1603'e kadar) ║ Dizfûl SAFEVÎ — Monshi s.593, 675 · TDV huzistan [74-75]",
        konum_kaynagi: "GeoNames: Khorramabad · Dezful 32°22′52″N 48°24′20″E — orta nokta" },
      { ad: "14 · Kût ↔ Dizfûl", lat: 32.4469, lon: 47.1119, dogrulanmadi: true,
        hukum_dayanagi: "Kût OSMANLI ÖRTÜLÜ ║ Dizfûl SAFEVÎ (köşe 13)",
        konum_kaynagi: "GeoNames: Kut 32.51279N 45.818171E · Dezful — orta nokta",
        bant: "Iranica IRAQ iv [120]: Hûzistan'da sınır TANIMSIZ kaldı — köşe 14-19 kuşak ortası" },
      { ad: "15 · Ammâre ↔ Havîza", lat: 31.6487, lon: 47.6093, dogrulanmadi: true,
        hukum_dayanagi: "Ammâre OSMANLI ÖRTÜLÜ ║ Havîza Müşa'şa', Safevî tâbisi — Monshi s.675-677 · Iranica IRAQ iv [64] (TR Küpeli s.232 aksini ima ediyor: GUNEY §⑦②)",
        konum_kaynagi: "GeoNames: Amarah 31°50′08″N 47°08′41″E · Hoveyzeh 31°27′42″N 48°04′26″E — orta nokta" },
      { ad: "16 · Kürne ↔ Havîza", lat: 31.2385, lon: 47.7538, dogrulanmadi: true,
        hukum_dayanagi: "Kürne OSMANLI ÖRTÜLÜ ║ Havîza (köşe 15)",
        konum_kaynagi: "GeoNames: Al Qurnah 31°00′55″N 47°26′01″E · Hoveyzeh — orta nokta" },
      { ad: "17 · Basra ↔ Ahvaz", lat: 30.9136, lon: 48.2323, dogrulanmadi: true,
        hukum_dayanagi: "Basra OSMANLI — TDV basra [381] ║ Ahvaz SAFEVÎ ÖRTÜLÜ (Safevî iç bölge)",
        konum_kaynagi: "GeoNames: Basra 30°30′30″N 47°46′49″E · Ahvāz 31°19′08″N 48°41′03″E — orta nokta" },
      { ad: "18 · Fâv ↔ Abâdân", lat: 30.1567, lon: 48.3887, dogrulanmadi: true,
        hukum_dayanagi: "Fâv OSMANLI ÖRTÜLÜ ║ Abâdân 1590 sahibi BULUNAMADI (GUNEY C4) — KAYNAKLI UÇ YOK",
        konum_kaynagi: "GeoNames: Al Fāw 29°58′27″N 48°28′23″E · Ābādān 30°20′21″N 48°18′15″E — orta nokta" },
      { ad: "19 · Şattülarap'ın Basra Körfezi'ne döküldüğü yer", lat: 29.961208, lon: 48.53183, dogrulanmadi: true,
        hukum_dayanagi: "1590 için Şattülarap'ı SINIR diye anan kaynak OKUNMADI — körfez ucu olarak konuldu (köşe 18 karada bitiyor, son segmentin uzantısı Fâv'ı yanlış tarafa düşürüyordu; bu uçla Fâv doğru tarafta, ölçüldü)",
        konum_kaynagi: "veri-kaynak/ne_10m_rivers.geojson 'Shatt al Arab' geometrisinin son noktası (Natural Earth) — coğrafî koordinat kaynaklı, SINIR ROLÜ kaynaksız" }
    ],
    atilan_koseler: [
      { ad: "Şehrizor | Bâne (GUNEY düğüm 1)", lat: 35.775, lon: 45.655, neden: "Bâne 0047'de KAYNAKLI Osmanlı-tâbi — düğüm Bâne'yi Safevî ucu sayıyordu. Koordinat atlas orta noktasıydı." },
      { ad: "Halepçe | Merîvan (GUNEY düğüm 2)", lat: 35.350, lon: 46.082, neden: "Merîvan 0047'de KAYNAKLI Osmanlı-tâbi — aynı sebep. Koordinat atlas orta noktasıydı." },
      { ad: "Mahmudâbâd | Lenkeran (KUZEY köşe 1)", lat: 39.067, lon: 49.046, neden: "Mahmudâbâd hükmü BELİRSİZ ve GeoNames'te kaydı YOK; kaynaklı Bakü↔Lenkeran çiftiyle değiştirildi. Koordinat atlas orta noktasıydı." },
      { ad: "Sarâb ↔ Erdebil (KUZEY köşe 4, geçici)", lat: 38.0952, lon: 47.9149, neden: "Sarâb'ı Osmanlı ucu sayıyordu (çıkarım); Emre dördüncü tur: Sarâb SAFEVÎ. Taraf sınaması bu köşeyle Sarâb'ı OSMANLI tarafına düşürüyordu (denetim/ARAC-KSM-TARAF-0913.py). Yerine kaynakta adıyla sınır olan Areštanāb." },
      { ad: "Miyâne ↔ Halhâl (KUZEY köşe 5, geçici)", lat: 37.5196, lon: 48.1221, neden: "Emre dördüncü tur: Miyâne SAFEVÎ ⇒ iki uç da Safevî. Taraf sınaması Miyâne'yi OSMANLI tarafına düşürüyordu. Yerine Heşrûd ↔ Miyâne." },
      { ad: "Miyâne ↔ Zencan (KUZEY köşe 6, geçici)", lat: 37.0486, lon: 48.1056, neden: "İki uç da Safevî ⇒ köşe tanımsız; Hashtrūd güneyi / Sakkız doğusu için kaynaklı, konumu ölçülebilir Osmanlı ucu BULUNAMADI (Sarukurgân · Egertû · Kavdûl GeoNames'te eşlenemedi)." }
    ],
    // 🟢 `guney_1593_varyant` KALDIRILDI (FERHATPASA-KARAR, 13 Eylül 2026) —
    // Emre kararı ikinci tur madde 3-4: harita Luristan'da TDV'nin 1603'ünü
    // izler, Nihâvend enklav DEĞİL. Varyantın kaynak dayanakları not olarak:
    emre_kararlari_notu: {
      kaynak: "oturumlar/FERHATPASA-SINIR-0913.md — 'Emre'nin kararları (13 Eylül, ikinci tur)' madde 1-5",
      kaldirilan: "guney_1593_varyant (Luristan'ın 1592/93 Safevî'ye dönüşünden sonra köşe 10-13 yerine 'Kirmanşah|Luristan' · 'Kût|Luristan' köşeleri ve 'Nihâvend kalesi' Osmanlı adası). İki köşenin koordinatı zaten null'dı (atlas orta noktası alınmamıştı); bölme günü kaynaksızdı.",
      ayrisma_notu: "Taraf seçilmedi, not olarak durur: (1) Monshi/Savory s.824 (1602-03): 'about every ten days the Ottomans would march through their tribal territory and come and go freely to the fort' — kaynak Nihâvend'i Safevî toprağıyla çevrili tarif ediyor. (2) Kütükoğlu 1962 s.198 dn.190-192 (1591/92 sınır görüşmesi): Safevî'nin 'yalnız kaleye yol' talebi reddedildi, Nihâvend nahiyeleri Osmanlı'da kaldı. (3) Monshi/Savory s.642-645: 1000/1591-92 Şâhverdi'nin Safevî'ye bağlılığı, 1002/1593-94 Hürremâbâd işgali, Kür-kûh 'on the border between Lorestan and Baghdad province'. Kronolojide: data/olaylar_p0048.js.",
      kurt_beylikleri: "Karar 5: Kürt beylikleri ayrı beylik GÖSTERİLMEZ, Osmanlı tâbisi. Hat tarafı ölçüldü (bu oturum): Bâne · Merîvan · Mahabad · Sakkız · Serdeşt hattın OSMANLI tarafında — değişiklik gerekmedi. 🔴 BEYAN (EMRE KARARI 14 Ekim 2026, KARARLAR-1014 m.1): hat HUKUKÎ çizgidir, yerleşim verisi kaynaklı tanığı izler — Bâne v:osmanlı 1585-04-19 (BOA, Özcoşar-Açar 2024) → 1603-10-21 (gün komşudan: Tebriz) yazıldı; Sakkız ve Serdeşt'i 1590-1603 için ADIYLA TANIKLAYAN KAYNAK YOK, Merîvan için yalnız 1582-03-11 tâbiliği (Teymur Han 1585'ten önce döndü) — bu üçü veride Safevî kalır, hat ile renk arasındaki fark bu beyandır.",
      ahar: "Üçüncü tur kararı (koordinatör iletisi, 13 Eylül 2026): Ahar şık B — Osmanlı tâbisi 1588→1603 (TR Kütükoğlu s.195 'Karacadağ' · RU Petrushevsky '1588-1603'); köşe 3 `gecici` KALDIRILDI. IR Eskandar Beg s.615 / 619-620 'Qaraja-dag was allotted to Iran' (1592) ayrışma notu olarak köşe 3'te.",
      kirmansah: "Dördüncü tur kararı: Kirmanşah DOĞRUDAN OSMANLI (köşe 8-9 korunur). KIRMANSAH-DOGRULA: şehir adıyla kaynaksız, Kalhor kuşağı Osmanlı (yüksek güven).",
      sarab_miyane: "Dördüncü tur: Emre teraziyi koordinatöre bıraktı — Sarâb ve Miyâne SAFEVÎ (iki yer için Osmanlı tasarruf kaydı 0). Köşe 4 → Areštanāb (Iranica AZARBAIJAN iv, 1591-92 tahdidinde adıyla sınır köyü) · köşe 5 → Heşrûd ↔ Miyâne (TDV tebriz 1593 taksimi) · köşe 6 ATILDI; `gecici` KALDIRILDI (FERHATPASA-KOSE, taraf sınaması eski hat 2 yanlış → yeni hat 0/10).",
      gumru_ecmiyazin: "Dördüncü tur: Gümrü ve Eçmiyazin ÖRTÜLÜ OSMANLI (bu hattın kuzey kesiminin dışında — yerleşim yaması denetim/YAMA-FERHATPASA-BIRLESIK-0913.json G-GUMRU · G-ECMIYADZIN).",
      acik: "Areštanāb ad/mesafe eşlemesi (Röhrborn 1966 okunmadı) · Heşrûd=Hashtrūd eşlemesi · Germrüd'ün 1591 tahdit sonucu (Kütükoğlu cilt II) · TDV erdebil 'sınır Erdebil yakınlarından' ayrışması."
    }
  },

  gereken_cografya: [
    { ad: "Hudâferin köprüleri (Aras)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "köşe coğrafî koordinatla kuruldu; nokta eklemek hattın çizimi için gerekmiyor" },
    { ad: "Aras (nehir)", tur: "nehir", atlasta_var: true, atlasta_kaynak: "veri-kaynak/ne_10m_rivers.geojson 'Aras' (scalerank 8)" },
    { ad: "Pelengân (Ardalan)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "Küpeli 2010: Osmanlı beylerbeyiliği; konumu ARANMADI" },
    { ad: "Kür-kûh (Luristan–Bağdat sınırı)", tur: "dag", atlasta_var: false, atlasta_kaynak: null, not: "Monshi s.645 — 1593 varyantının kaynaklı sınır ögesi; konumu ARANMADI" },
    { ad: "Şattülarap ağzı", tur: "nehir", atlasta_var: true, atlasta_kaynak: "veri-kaynak/ne_10m_rivers.geojson 'Shatt al Arab', scalerank 3" }
  ],

  kapsama: {
    // 🔴 `tur:"poligon"` + BOŞ `nokta_dizisi` = DOLGU YOK (başlık notu).
    tur: "poligon",
    nokta_dizisi: [],
    negatif_taraf: "osmanli",
    kutu: { lat_min: 29.5, lat_max: 43.0, lon_min: 41.5, lon_max: 50.5 },
    kutu_notu: "Sınır kuşağının BELGELİK kutusu (Kafkas sırtı → Körfez). Render bu kayıtta onu KULLANMIYOR (poligon dalı önce gelir). Kutu boyansaydı 10 yanlış boyama — sinav_kaydi.app_kutu_dolgusu.",
    odak_kutu: { lat_min: 29.5, lat_max: 41.5, lon_min: 43.0, lon_max: 50.5 },
    odak_kutu_not: "YALNIZ kamera odağı için.",
    sezgi_kapali: false,
    sezgi_kapali_gerekcesi: "Hat kaynaklı bir antlaşma çizgisi DEĞİL, türetilmiş kuşak ortası; 19 köşenin 18'i dogrulanmadi:true, 5 yer kaynaksız (belirsiz). Motor sezgisini bu kutuda kapatacak kesinlikte değil (D089).",
    yon_kurali: "Hat kuzey→güney sıralı: batısı (Hazar–Aras kesiminde kuzeyi) cross<0 → osmanli; doğusu cross>0 → safevi."
  },

  sinav_kaydi: {
    yontem: "denetim/C-FERHATPASA-HAT-0913.md §3. KONUM GeoNames, HÜKÜM raporların KAYNAK hükmü (atlasın gösterdiği SINAV DEĞİL). (a) hattın Osmanlı tarafı poligonuyla nokta-poligon testi; (b) app.js _cKayitGeometrisi'nin GERÇEK kodu node'da eval edilip kutu dolgusuyla renk testi.",
    bilinen_noktalar: {
      "Tebriz":  { P: [46.2917, 38.08], beklenen: "osmanli", hukum: "TDV tebriz [53-58] · Eskandar II s.832 · Arakel s.31", hat_tarafi: "osmanli", sonuc: "DOĞRU", koseye_katildi: false },
      "Bağdat":  { P: [44.400876, 33.34058], beklenen: "osmanli", hukum: "Monshi · TDV bagdat", hat_tarafi: "osmanli", sonuc: "DOĞRU", koseye_katildi: false },
      "Erdebil": { P: [48.2931, 38.2497], beklenen: "safevi", hukum: "TDV erdebil · Narkvevebi IV ← Pigulevskaya · Eskandar", hat_tarafi: "safevi", sonuc: "DOĞRU", koseye_katildi: true, app_kutu_dolgusu: "osmanli — YANLIŞ" },
      "Hemedan": { P: [48.5144, 34.7992], beklenen: "safevi", hukum: "Monshi s.587·690·825 · Iranica NEHĀVAND", hat_tarafi: "safevi", sonuc: "DOĞRU", koseye_katildi: true, app_kutu_dolgusu: "osmanli — YANLIŞ" },
      "Sultâniye": { P: [48.7947, 36.4331], beklenen: "safevi", hukum: "Eskandar s.644", hat_tarafi: "safevi", sonuc: "DOĞRU", koseye_katildi: false, app_kutu_dolgusu: "osmanli — YANLIŞ" },
      "Astara":  { P: [48.8747, 38.4558], beklenen: "safevi", hukum: "Narkvevebi IV ← Pigulevskaya · Petrushevsky", hat_tarafi: "safevi", sonuc: "DOĞRU", koseye_katildi: false, app_kutu_dolgusu: "osmanli — YANLIŞ" }
    },
    hat_tarafi_toplam: "hükümlü 35 yer (GeoNames konumu): kaynaklı BAĞIMSIZ 10/10 · kaynaklı köşeye katılan 12/12 (DÖNGÜSEL — köşe onların ortasından kurulduğu için kanıt DEĞİL) · çıkarım 1/1 · örtülü 7/7 · belirsiz 5 (Miyâne · Abâdân → Osmanlı yanı; Meşkin · Halhâl · Bîcâr → Safevî yanı)",
    app_kutu_dolgusu: "30 hükümlü yerde uyumlu 20 · YANLIŞ 10 — DOLGU BU YÜZDEN KAPALI",
    eski_kayit_noktalari: "ferhad-pasa-istanbul-1590'ın koordinatlı noktalarının hepsi hattın Osmanlı tarafında (rapor §3)"
  },

  kaynak: {
    tur: "türetilmiş hat (üç ölçüm raporunun KAYNAK hükümleri + GeoNames konumları)",
    madde: "bulunamadı — antlaşma metni çizgi vermiyor; Feridun Bey, Münşeât 249-252 OKUNMADI",
    alinti: "Eskandar Beg (Savory II s.585): 'acceptance of annexation by the Ottomans of areas already occupied by their troops'",
    raporlar: [
      "denetim/OLCUM-FERHATPASA-SEHIR-MATRISI-0913.md",
      "denetim/OLCUM-FERHATPASA-GUNEY-0913.md",
      "denetim/OLCUM-0047-FERHATPASA-BATI-0913.md"
    ]
  },
  kaynak_ikincil: {
    tur: "raporların ana kaynakları + konum kaynakları",
    kaynaklar: [
      "IR · Eskandar Beg Monshi, History of Shah ʿAbbas the Great, tr. R. M. Savory (1978), II s.582-587, 643-645, 675-677, 824-826, 831-832, 840",
      "TR · TDV İslâm Ansiklopedisi: murad-iii · safeviler · erdebil · tebriz · baku · nihavend--iran · hemedan · luristan · huzistan · basra · zencan · bagdat · nasuh-pasa",
      "TR · Kütükoğlu 1962 s.195-196, aktaran Efe & Kızıl, Erzincan Üniv. SBE Dergisi X-I (2017)",
      "TR · Adlığ 2026, Dicle Üniv. SBED 42, doi:10.15182/diclesosbed.1696513",
      "TR · Küpeli 2010, History Studies Ortadoğu özel sayısı s.227-244",
      "TR · Özcoşar & Açar 2024, Bingöl Üniv. SBE Dergisi 28, doi:10.29029/busbed.1518775",
      "EN · Encyclopaedia Iranica: NEHĀVAND · IRAQ iv · BOUNDARIES i · BAKU i · MOKRI",
      "GE · Sakartvelos istoriis narkvevebi IV (1974) s.82 (← RU Pigulevskaya et al. 1958 s.272)",
      "RU · Petrushevsky 1949 s.131-132",
      "HY · Arakʻel of Tabriz, Book of History, tr. Bournoutian (2010) s.31",
      "KONUM · GeoNames (geonames.org) — 24 yer; Wikipedia 'Khudafarin Bridges' + Natural Earth ne_10m_rivers (Aras · Shatt al Arab)"
    ],
    not: "Tarih kaynakları bu kayıtta YENİDEN OKUNMADI — raporlar üzerinden (D104). Konumlar bu oturumda okundu."
  }
}

];

;
/* ==== data/bos_alanlar.js ==== */
// BOŞ ALANLAR — boşluğun CİNSİ · ÜRETİLMİŞ DOSYA
//
// ⚙️ ELLE DÜZENLEME YOK. Üreteci: arac/uret_bosluk.py
// Kaynak: yerlesimler*.js içindeki `bos:` ve `neden:` alanları.
//
// 🔴 NİÇİN VAR: 192 noktada boşluğun cinsi YAZILI ama harita
// hepsini AYNI beyaza boyuyordu. Tuareg konfederasyonunun
// denetlediği Hoggar ile insansız Rub'ul Hâlî ekranda ayırt
// edilemiyordu.
//
// ⚠️ `yaricap_km: null` — KAYNAKSIZ YARIÇAP UYDURULMADI.
// Yarıçapsız kayıt ALAN değil İŞARET olarak çizilir.
//
//   kabile        151
//   devletsiz-yerlesim  103
//   veri-yok       46
//   devletsiz      38
//   insansiz       10
//   hata            6
//   col             1

window.BOS_CINSLER = {
  "kabile": {ad:"aşiret / konfederasyon denetimi", aciklama:"devlet değil ama SAHİPSİZ DE DEĞİL — sınırı yoktur, mevsimlik ve geçirgendir", gosterim:"benek"},
  "devletsiz": {ad:"devletsiz — boş arazi", aciklama:"kaynak AÇIKÇA söylüyor: burada devlet yoktu, ve yerleşim de yok. Emre'nin 4/2/1 puanlaması bu toprağı komşusuna katabilir", gosterim:"bos"},
  "devletsiz-yerlesim": {ad:"devletsiz şehir / yerel idare", aciklama:"yerleşim VAR ama merkezî bir devlete bağlı değil — körfez şeyhliği, Necid kasabası, yerli topluluk. Toprağı komşu devlete KATILMAZ; hakkı saklıdır", gosterim:"halka"},
  "insansiz": {ad:"insansız", aciklama:"yerleşim yoktu — coğrafî boşluk", gosterim:"bos"},
  "veri-yok": {ad:"veri yok", aciklama:"kaynak SUSUYOR — bilmiyoruz, boş olduğunu değil BİLMEDİĞİMİZİ gösterir", gosterim:"soru"},
  "hata": {ad:"hata kaydı", aciklama:"düzeltme bekliyor", gosterim:"bos"}
};

window.BOS_ALANLAR = [
{ad:"Hamâde-i Hamrâ (Hamada al-Hamra)", lat:30.0000, lon:12.0000, cins:"col", yaricap_km:null, neden:"BEYANLI ÇÖL BOŞLUĞU (EMRE KARARI 14 Ekim 2026, KARARLAR-1014 m.13, 0045/H-0012): Trablusgarp'ın iç kesimindeki Hamâde taşlık platosu noktasız, yerleşimsiz çöl; Osmanlı idaresi kıyı ve vaha düzenindeydi (Gadamis · Sokna · Vaddân · Fizan), çölde yerleşim yok. Fizan alındıktan sonra Osmanlı toprakları ", p:[["1281-01-01","1924-01-01"]]},
{ad:"Atbay çölü", lat:19.8000, lon:34.8000, cins:"devletsiz", yaricap_km:null, neden:"Nil ile Kızıldeniz arası Beca çölü — fiilî idare yok", p:[["1281-01-01","1924-01-01"]]},
{ad:"Bayûda çölü", lat:17.9000, lon:32.0000, cins:"devletsiz", yaricap_km:null, neden:"Nil kavisleri arası iç çöl — fiilî idare yok", p:[["1281-01-01","1924-01-01"]]},
{ad:"Bîr Natrûn", lat:18.2000, lon:26.0000, cins:"devletsiz", yaricap_km:null, neden:"Libya çölü — hiçbir devletin fiilî idaresi yoktu; kervan kuyusu", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Ovalar (orta kesim)", lat:43.0000, lon:-100.0000, cins:"devletsiz", yaricap_km:null, neden:"Standart akademik Büyük Ovalar tarihyazımı XIX. yüzyıla kadar bölgede birleşik, toprak iddiası taşıyan bir siyasi otorite tanımlamıyor — göçebe atlı kabile konfederasyonları var ama sabit sınırlı 'devlet' kategorisine girmiyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Camagüey bölgesi (Taino)", lat:21.3808, lon:-77.9169, cins:"devletsiz", yaricap_km:null, neden:"Küba'nın orta kesimindeki Taino/Ciboney toprağı; Diego Velázquez'in 1513-1515 fetih seferleri bölgeyi İspanyol idaresine soktu.", p:[["1281-01-01","1514-01-01"],["2000-12-31",null]]},
{ad:"Cebel Ûveynât", lat:21.8700, lon:25.0200, cins:"devletsiz", yaricap_km:null, neden:"Mısır-Libya-Sudan üçgeni; fiilî idare yok", p:[["1281-01-01","1924-01-01"]]},
{ad:"Essey", lat:68.4800, lon:102.1800, cins:"devletsiz", yaricap_km:null, neden:"1630 öncesi Evenk/Saha toprağı, devletsiz. Aşağı Tunguska platosu ile aynı sınıf: yasak zimovyesi, kasaba değil.", p:[["1628-01-01","1630-01-01"],["2000-12-31",null]]},
{ad:"Gilf el-Kebîr", lat:23.5000, lon:26.0000, cins:"devletsiz", yaricap_km:null, neden:"Gilf el-Kebîr platosu, Sahra'nın en izole ve susuz kesimlerinden biri; tarihte hiçbir yerleşim ya da devlet denetimi kaydı yok.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Higüey (Taino cacicazgosu)", lat:18.6144, lon:-68.7047, cins:"devletsiz", yaricap_km:null, neden:"Beş büyük Taino cacicazgosundan biri (Cayacoa, sonra Cotubanamá); Higüey Savaşı (1503-1504) ile yıkıldı.", p:[["1281-01-01","1504-01-01"],["2000-12-31",null]]},
{ad:"Jaragua (Taino cacicazgosu)", lat:18.5108, lon:-72.6338, cins:"devletsiz", yaricap_km:null, neden:"Beş büyük Taino cacicazgosundan biri (Behechio, sonra Anacaona); kaynak siyasi birleşik otoriteyi AÇIKÇA tanımlıyor. 1503'te Vali Ovando'nun Yaguana katliamıyla fiilen yıkıldı.", p:[["1281-01-01","1503-01-01"],["2000-12-31",null]]},
{ad:"Katar Yarımadası (iç, dolgu)", lat:25.4000, lon:50.9500, cins:"devletsiz", yaricap_km:null, neden:"Katar yarımadasının bu iç kesiminde nokta yoktu ve komşu Ukayr (Uceyr) peteğine emiliyordu (H-0021, py arac/nicin_bos.py --lat 25.3 --lon 51.2 --gun 1602-01-01: 106.6 km, OSMANLI, tavan YETİŞİR). Bu nokta peteğin nerede biteceğini belirleyen bir DOLGUDUR. 1559-1670 arası Osmanlı'ya tâbi: TDV katar —", p:[["1281-01-01","1559-01-01"],["1795-04-01","1868-01-01"],["2000-12-31",null]]},
{ad:"Kordofan kuzeybatı çölü", lat:16.5000, lon:26.5000, cins:"devletsiz", yaricap_km:null, neden:"Dârfûr ile Kordofan arası kum kuşağı — fiilî idare yok", p:[["1281-01-01","1924-01-01"]]},
{ad:"Lakiye Arbaîn", lat:20.0500, lon:28.0500, cins:"devletsiz", yaricap_km:null, neden:"Darb el-Erbaîn kuyusu — fiilî idare yok", p:[["1281-01-01","1924-01-01"]]},
{ad:"Ma'tan es-Sarra", lat:21.7000, lon:21.8500, cins:"devletsiz", yaricap_km:null, neden:"Ma'tan es-Sarra, Libya'nın en güney ucunda ıssız bir kuyu/vaha noktası; devlet denetimi kaydı yok.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Merga vahası", lat:19.3500, lon:26.3000, cins:"devletsiz", yaricap_km:null, neden:"Libya çölü — fiilî idare yok", p:[["1281-01-01","1924-01-01"]]},
{ad:"Necid içi", lat:25.5000, lon:44.5000, cins:"devletsiz", yaricap_km:null, neden:"1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje kararı — 'Sahra ve Rub'ul Hâlî çölleri, 1744 öncesi Necid, körfez şeyhlikleri'.", p:[["1281-01-01","1744-01-01"],["2000-12-31",null]]},
{ad:"Nefud çölü", lat:28.3000, lon:41.0000, cins:"devletsiz", yaricap_km:null, neden:"1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje kararı — 'Sahra ve Rub'ul Hâlî çölleri, 1744 öncesi Necid, körfez şeyhlikleri'.", p:[["1281-01-01","1779-01-01"],["2000-12-31",null]]},
{ad:"Nûbe çölü", lat:20.5000, lon:33.5000, cins:"devletsiz", yaricap_km:null, neden:"Nûbe Çölü'nün iç kesimi; Nil vadisi dışındaki bu alan tarih boyunca yerleşik nüfustan ve devlet denetiminden yoksundur.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Ramletü Murzuk", lat:24.6000, lon:12.1000, cins:"devletsiz", yaricap_km:null, neden:"Ramletü Murzuk, Murzuk vahası çevresindeki ıssız kumul alanı; kervan durağı dışında devlet denetimi kaydı yok.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Ramletü Zellâf", lat:25.6000, lon:15.6000, cins:"devletsiz", yaricap_km:null, neden:"Ramletü Zellâf kumulları, Fizan iç çölünde yerleşimsiz bir alan; devlet denetimi dışında.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Rebyâne", lat:24.2000, lon:21.5000, cins:"devletsiz", yaricap_km:null, neden:"Rebyâne kum deryası, Libya'nın en izole kesimlerinden biri; tarih boyunca yerleşimsiz ve devlet denetimi dışında.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Rub'ul Hâlî doğusu", lat:20.0000, lon:52.0000, cins:"devletsiz", yaricap_km:null, neden:"Aynı Boş Çeyrek çölünün doğu ucu; kaynaklar bu iç kesimde tarih boyunca yerleşik siyasi denetim olmadığını belirtiyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Rub'ul Hâlî güneybatısı", lat:18.8000, lon:52.3000, cins:"devletsiz", yaricap_km:null, neden:"Rub'ul Hâlî — hiçbir devletin fiilî idaresi yoktu; mevcut çöl dolgularıyla aynı sınıf", p:[["1281-01-01","1924-01-01"]]},
{ad:"Selîme (Nûbe çölü batısı)", lat:21.5000, lon:29.3000, cins:"devletsiz", yaricap_km:null, neden:"Selîme kum yaylası, Nûbe Çölü'nün batısında insansız bir kesim; kervan yolu üzerinde olsa da yerleşik/siyasi denetim kaydı yok.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Serîr", lat:27.5000, lon:22.0000, cins:"devletsiz", yaricap_km:null, neden:"Serîr çölü, Libya'nın güneydoğusunda insansız çakıllı çöl kesimi; tarih boyunca yerleşim ve devlet denetimi kaydı yok.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Serîr Kalanşû", lat:28.2000, lon:21.7000, cins:"devletsiz", yaricap_km:null, neden:"Serîr Kalanşû, Libya'nın en ıssız çakıllı çöl kesimlerinden biri; devlet denetimi kaydı yok.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Tâsîlî n'Accer", lat:25.3000, lon:9.2000, cins:"devletsiz", yaricap_km:null, neden:"Tâsîlî n'Accer platosu, Cezayir-Libya sınırında ıssız bir kayalık yayla; devlet denetimi kaydı yok.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Tâzirbû", lat:25.7120, lon:21.0610, cins:"devletsiz", yaricap_km:null, neden:"Tâzirbû vaha grubu çevresindeki geniş çöl, Kufra-Fizan güzergahı üzerinde olsa da fiilen devlet denetimi dışındaydı.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Umman iç çölü", lat:20.1000, lon:55.3000, cins:"devletsiz", yaricap_km:null, neden:"Rub'ul Hâlî'nin Umman yakası — hiçbir devletin fiilî idaresi yoktu", p:[["1281-01-01","1924-01-01"]]},
{ad:"Vâdî Hovâr", lat:17.4000, lon:24.8000, cins:"devletsiz", yaricap_km:null, neden:"kurumuş vadi — fiilî idare yok", p:[["1281-01-01","1924-01-01"]]},
{ad:"Vâdî Tanezzûft", lat:22.4000, lon:11.3000, cins:"devletsiz", yaricap_km:null, neden:"Vâdî Tanezzûft, Fizan'ın güneybatı ucunda ıssız bir vadi; tarih boyunca yerleşik devlet denetimi kaydı yok.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Vâdî el-Milk", lat:17.5000, lon:28.0000, cins:"devletsiz", yaricap_km:null, neden:"Dongola-Kordofan arası kurumuş vadi yolu — fiilî idare yok", p:[["1281-01-01","1924-01-01"]]},
{ad:"Vâv el-Kebîr", lat:25.3630, lon:17.2210, cins:"devletsiz", yaricap_km:null, neden:"Vâv el-Kebîr, Fizan'ın derin güneyinde ıssız bir çöl kesimi; Osmanlı Trablusgarp idaresinin ulaşamadığı bir alan.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yamal ucu", lat:70.1667, lon:72.5167, cins:"devletsiz", yaricap_km:null, neden:"Obdorsk ile aynı gerekçe; yarımadanın kuzey ucu için dolgu noktası — noktasız kalırsa Perm'in peteği 2.100 km uzaktan buraya uzanır.", p:[["1281-01-01","1595-01-01"],["2000-12-31",null]]},
{ad:"Zolat el-Hammâd", lat:20.6000, lon:27.1000, cins:"devletsiz", yaricap_km:null, neden:"Bayûda-Libya çölü geçişi — fiilî idare yok", p:[["1281-01-01","1924-01-01"]]},
{ad:"Çukotka merkezi", lat:66.0000, lon:172.0000, cins:"devletsiz", yaricap_km:null, neden:"devletsiz — Anadır'la aynı gerekçe (Çukçiler hiç fethedilmedi, haraç hiç ödenmedi); yarımadanın doğu ucunu Anadır'ın peteğinin taşmasına karşı kapatıyor", p:[["1281-01-01","1924-01-01"]]},
{ad:"İdehân Murzuk", lat:26.2000, lon:12.4000, cins:"devletsiz", yaricap_km:null, neden:"İdehân Murzuk kum denizi, Fizan'ın güneyinde yerleşimsiz bir alan; vaha kasabaları dışında devlet denetimi yok.", p:[["1281-01-01","1924-01-01"]]},
{ad:"İdehân Ubârî", lat:25.9000, lon:11.3000, cins:"devletsiz", yaricap_km:null, neden:"İdehân Ubârî kum denizi, Fizan'ın vaha zincirinin kenarında yerleşimsiz bir çöl kesimi, devlet denetimi dışında.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Acoma Pueblo (Sky City)", lat:34.9903, lon:-107.5814, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1281-1610 arasi Pueblo koyleri siyaseten OZERKTI: Ispanyol somurgeciliginden once var olan 70ten fazla koyun her biri, dini topluluklarin baskanlarindan olusan bir konseyle yonetiliyordu; ustlerinde merkezi bir devlet YOKTU. Ispanyol yerlesimi 1598te Onate ile basladi. kaynak: NPS (ABD Milli Park Se", p:[["1281-01-01","1610-01-01"],["2000-12-31",null]]},
{ad:"Akobo", lat:7.7880, lon:33.0330, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Anuak/Nuer ülkesi — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Albazin", lat:53.3800, lon:124.0930, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1651 öncesi Daur toprağı, devletsiz.", p:[["1281-01-01","1651-01-01"],["2000-12-31",null]]},
{ad:"Anadır (Anadyrsk)", lat:64.7500, lon:177.4800, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"devletsiz — kale 1649'da kuruldu ama Çukçiler hiç boyun eğmedi, haraç hiç ödenmedi (kaynağın kendi ifadesiyle \"salt biçimsel bile değil\"), 1764'te kale TERK edildi; resmî ilhak ancak Sovyet döneminde (1923 ufkunun dışında)", p:[["1649-01-01","1924-01-01"]]},
{ad:"Asella", lat:7.9500, lon:39.1330, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Arsi Oromo — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Aveyl", lat:8.7670, lon:27.4000, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Dinka ülkesi — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Ayan", lat:56.4500, lon:138.1700, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1679 öncesi Even/Lamut kıyısı, devletsiz. Liman 1844'te kuruldu ama kıyı Uda (1679) ve Ohotsk (1647) ostroglarının yasak çevresindeydi; 1844 yazılsaydı Ohotsk'un doğru boyadığı kıyıda 165 yıllık delik açılırdı.", p:[["1281-01-01","1679-01-01"],["2000-12-31",null]]},
{ad:"Ağere Maryam", lat:5.6330, lon:38.2330, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Guci/Sidamo kuşağı — kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Barnaul", lat:53.3480, lon:83.7780, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1635 öncesi Teleüt toprağı, devletsiz.", p:[["1281-01-01","1635-01-01"],["2000-12-31",null]]},
{ad:"Bentiu", lat:9.2420, lon:29.8030, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Nuer ülkesi — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Berezov", lat:63.9364, lon:65.0489, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1592 öncesi Hantı (Yugra) toprağı; TDV sibir-hanligi hanlığın sınırını Tura-Tobol-İşim ve İrtiş civarı diye veriyor, aşağı Ob' bu sınırın dışında.", p:[["1281-01-01","1592-01-01"],["2000-12-31",null]]},
{ad:"Beyzâ (Kirene)", lat:32.8270, lon:21.8580, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1281-1551 arası TDV `berka` hiçbir egemen adı vermiyor; kaynak susuyor.", p:[["1281-01-01","1551-08-15"],["2000-12-31",null]]},
{ad:"Bingazi", lat:32.1170, lon:20.0680, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1281-1551 arası TDV `berka` hiçbir egemen adı vermiyor — kaynak SUSUYOR (D020). Osmanlı günü 1551-08-15 (Trablusgarp seferi); TDV Bingazi'nin KESİN katılımını ayrıca 1578 diye veriyor, seçim yorumda gerekçeli.", p:[["1281-01-01","1551-08-15"],["2000-12-31",null]]},
{ad:"Biysk", lat:52.5390, lon:85.2140, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1635 öncesi Teleüt toprağı, devletsiz.", p:[["1281-01-01","1635-01-01"],["2000-12-31",null]]},
{ad:"Blagoveşçensk", lat:50.2800, lon:127.5350, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1651 öncesi Daur toprağı, devletsiz. Zincir Albazin'den birebir: aynı Amur voyvodalığı, aynı üç gün.", p:[["1281-01-01","1651-01-01"],["2000-12-31",null]]},
{ad:"Boma", lat:-5.8500, lon:13.0500, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"kolonyal dönem öncesi bu spesifik nehir ağzı noktasında merkezi bir devlet kaydı yok", p:[["1281-01-01","1885-01-01"],["2000-12-31",null]]},
{ad:"Bor", lat:6.2080, lon:31.5580, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Dinka ülkesi — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Bulun", lat:70.6667, lon:127.4000, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Lena deltası; 1632 öncesi devletsiz. Tarih Jigansk'la aynı çünkü ikisi de Lena havzasının aynı yılki Rus ilerlemesiyle bağlandı.", p:[["1281-01-01","1632-01-01"],["2000-12-31",null]]},
{ad:"Buraydâ (Kasîm)", lat:26.3594, lon:43.9814, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje kararı — 'Sahra ve Rub'ul Hâlî çölleri, 1744 öncesi Necid, körfez şeyhlikleri'.", p:[["1281-01-01","1744-01-01"],["2000-12-31",null]]},
{ad:"Dilem (Harc)", lat:23.9910, lon:47.1620, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1281-1792 ve 1819-08-13→1824-06-01 boş: Harc'ta merkezî devlet yok (TDV necid); 1819'da Mısır garnizonu Harc'tan çekildi, bölge kabile temsilcilerine bırakıldı (Lorimer I/1091-92). 1792-01-01 EN GEÇ sınır: Suûdîler 1792'ye kadar Harc'a hâkim oldu (yıl; fethin kendi günü bulunamadı). 1818-09-09 Dir'i", p:[["1281-01-01","1792-01-01"],["2000-12-31",null]]},
{ad:"Dilla", lat:6.4100, lon:38.3100, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Guci/Sidamo kuşağı — kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Dir'iye (Necid)", lat:24.7330, lon:46.5750, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje kararı — 'Sahra ve Rub'ul Hâlî çölleri, 1744 öncesi Necid, körfez şeyhlikleri'.", p:[["1281-01-01","1744-01-01"],["2000-12-31",null]]},
{ad:"Doha (Katar)", lat:25.2850, lon:51.5310, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"", p:[["1825-01-01","1868-01-01"],["2000-12-31",null]]},
{ad:"Dudinka", lat:69.4058, lon:86.1778, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1667 öncesi Nganasan/Enets toprağı, devletsiz.", p:[["1281-01-01","1667-01-01"],["2000-12-31",null]]},
{ad:"Dûmetülcendel (Cevf)", lat:29.8120, lon:39.8680, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"TDV `necid`: bölgede merkezî devlet yok, aşiret idaresi; 1836 öncesi sahipsizlik KASITLI", p:[["1281-01-01","1836-01-01"],["2000-12-31",null]]},
{ad:"Ecdâbiye", lat:30.7550, lon:20.2250, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1281-1551 arası TDV `berka` hiçbir egemen adı vermiyor; kaynak susuyor.", p:[["1281-01-01","1551-08-15"],["2000-12-31",null]]},
{ad:"Fangak", lat:9.0700, lon:30.8830, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Nuer ülkesi — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Finschhafen", lat:-6.6013, lon:147.8406, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1884 Alman ilhakından önce bu kıyı şeridinde yerli köyler dışında merkezi bir devlet yoktu — boşluk veri eksikliği değil, gerçek siyasi boşluk", p:[["1281-01-01","1884-11-03"],["2000-12-31",null]]},
{ad:"Ginir", lat:7.1400, lon:40.7080, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Bâle — Adal sonrası devletsiz kuşak, kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Goba", lat:7.0100, lon:39.9830, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Bâle — Adal sonrası devletsiz kuşak, kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Habarovka", lat:48.4800, lon:135.0800, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1653 öncesi Nanay/Daur toprağı; 1653 Ningguta kaydının Qing başlangıcı, aynı idarî çevre.", p:[["1281-01-01","1653-01-01"],["2000-12-31",null]]},
{ad:"Hakodate", lat:41.7690, lon:140.7290, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Hokkaido/Ezo 1281-1550 arasinda hicbir devletin idari topragi degildi; anakara sogunluklari (Kamakura-Kenmu-Muromachi) Honsu'yla sinirliydi ve Matsumae klaninin buradaki varligi ancak 1590'larda basliyor. `ainu` diye boyamak var olmayan bir DEVLET uydurmakti (VERI DEVLET olcumu)", p:[["1281-01-01","1550-01-01"],["2000-12-31",null]]},
{ad:"Hatanga", lat:71.9769, lon:102.4675, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1626 öncesi Nganasan toprağı, devletsiz.", p:[["1281-01-01","1626-01-01"],["2000-12-31",null]]},
{ad:"Havta (Havtat Benî Temîm)", lat:23.4960, lon:46.8780, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1281-1795 ve 1819-08-13→1824-06-01 boş (TDV necid; Lorimer I/1091). 1795-01-01 EN GEÇ, GEREKÇELİ: orta Arabistan seferleri Ahsâ seferinden (TDV vehhabilik: 1795) önce tamamlanmıştı (Al-Rasheed); Havta'nın kendi fetih yılı bulunamadı. 1819-08-13 gün komşudan: Dilem (Harc) · Lorimer I/1091-92 (aynı ta", p:[["1281-01-01","1795-01-01"],["2000-12-31",null]]},
{ad:"Hurma (Tâif doğusu)", lat:21.9110, lon:42.0310, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"🟡 1801→1815 zinciri Türabe'den (82 km, aynı Vehhâbî-Mısır savaşı; gün komşudan: Türabe · Lorimer I/1055, 1080-86). Lorimer'in garnizon listesinde (Bîşe, Rânye, Türabe) Hurma YOK; 1815-01-13→1818-09-09 BOŞ bırakıldı. 1919-05-26: TDV'ye göre Şerif'e verilen 'Tâif'in doğusundaki hurma vahası' izni Abdü", p:[["2000-12-31",null]]},
{ad:"Hâil", lat:27.5210, lon:41.6910, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje kararı — 'Sahra ve Rub'ul Hâlî çölleri, 1744 öncesi Necid, körfez şeyhlikleri'.", p:[["1281-01-01","1779-01-01"],["2000-12-31",null]]},
{ad:"Jigansk", lat:66.7697, lon:123.3708, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1632 öncesi Evenk/Yakut toprağı, devletsiz.", p:[["1281-01-01","1632-01-01"],["2000-12-31",null]]},
{ad:"Kainsk (Baraba)", lat:55.3600, lon:78.3600, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1722 öncesi Baraba bozkırı. ⚠️ `cungar` YAZILMADI: Baraba Cungar'ın değil Sibir Hanlığı'nın çevresiydi (`_ek9` gerekçesi) ve Cungar'ı buraya yazmak onu 600 km kuzeye taşırdı.", p:[["1281-01-01","1722-01-01"],["2000-12-31",null]]},
{ad:"Kapoeta", lat:4.7670, lon:33.5910, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Toposa ülkesi — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Kirensk", lat:57.7800, lon:108.1100, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1630 öncesi Evenk toprağı, devletsiz.", p:[["1281-01-01","1630-01-01"],["2000-12-31",null]]},
{ad:"Kisangani (Stanleyville)", lat:0.5150, lon:25.1910, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"kolonyal dönem öncesi bu spesifik iç-nehir noktasında merkezi bir devlet kaydı yok", p:[["1281-01-01","1885-01-01"],["2000-12-31",null]]},
{ad:"Kuznetsk", lat:53.7570, lon:87.1360, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1618 öncesi Şor/Teleüt toprağı, devletsiz.", p:[["1281-01-01","1618-01-01"],["2000-12-31",null]]},
{ad:"Ler", lat:8.3000, lon:30.1400, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Nuer ülkesi — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Leylâ (Eflâc)", lat:22.2920, lon:46.7240, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Zincir ve gerekçe Havta ile aynı (TDV necid: Eflâc Necd-i Ârızî'nin bölgesi; Turki Eflâc'a hâkim oldu — Al-Rasheed). 1795 EN GEÇ, GEREKÇELİ. 1819-08-13 gün komşudan: Dilem · Lorimer I/1091-92. 🟡 1838-1840 Mısır dilimi Eflâc için ayrıca belgelenmedi; Lorimer'in 'bütün Necid' beyanına dayanıyor. 🟢 181", p:[["1281-01-01","1795-01-01"],["2000-12-31",null]]},
{ad:"Madang", lat:-5.2200, lon:145.7900, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1884 Alman ilhakından önce bu kıyı şeridinde yerli köyler dışında merkezi bir devlet yoktu — boşluk veri eksikliği değil, gerçek siyasi boşluk", p:[["1281-01-01","1884-11-03"],["2000-12-31",null]]},
{ad:"Manama (Bahreyn)", lat:26.2280, lon:50.5860, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Körfez şeyhliklerinde 19. yy'daki İngiliz himaye antlaşmalarına kadar merkezî devlet denetimi kaydı yok; yerleşim VARDI. Kaynak: CLAUDE.md §3'te belgelenmiş proje kararı.", p:[["1281-01-01","1417-01-01"],["2000-12-31",null]]},
{ad:"Mangazeya", lat:66.6900, lon:82.3300, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1601 öncesi Nenets/Selkup toprağı, devletsiz.", p:[["1281-01-01","1601-01-01"],["2000-12-31",null]]},
{ad:"Matadi", lat:-5.8180, lon:13.4600, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"kongo-kralligi künyesi 1390'da başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok", p:[["1281-01-01","1390-01-01"],["2000-12-31",null]]},
{ad:"Matsumae", lat:41.4280, lon:140.1120, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Hokkaido/Ezo 1281-1550 arasinda hicbir devletin idari topragi degildi; anakara sogunluklari (Kamakura-Kenmu-Muromachi) Honsu'yla sinirliydi ve Matsumae klaninin buradaki varligi ancak 1590'larda basliyor. `ainu` diye boyamak var olmayan bir DEVLET uydurmakti (VERI DEVLET olcumu)", p:[["1281-01-01","1550-01-01"],["2000-12-31",null]]},
{ad:"Mbanza-Kongo (São Salvador)", lat:-6.2700, lon:14.2400, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"kongo-kralligi künyesi 1390'da başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok", p:[["1281-01-01","1390-01-01"],["2000-12-31",null]]},
{ad:"Mega", lat:4.0500, lon:38.3000, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Borana Oromo — kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Merc", lat:32.4920, lon:20.8330, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1281-1551 arası TDV `berka` hiçbir egemen adı vermiyor; kaynak susuyor.", p:[["1281-01-01","1551-08-15"],["2000-12-31",null]]},
{ad:"Mizan Teferi", lat:6.9900, lon:35.5800, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Bench/Kaffa güneybatısı — kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Moyale", lat:3.5330, lon:39.0500, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Borana Oromo — kimlik yok; güneyi HALKA 6-7 (Kenya), kasten noktasız", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Mukalla", lat:14.5329, lon:49.1248, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Körfez şeyhliklerinde 19. yy'daki İngiliz himaye antlaşmalarına kadar merkezî devlet denetimi kaydı yok; yerleşim VARDI. Kaynak: CLAUDE.md §3'te belgelenmiş proje kararı.", p:[["1281-01-01","1888-05-01"],["2000-12-31",null]]},
{ad:"Musumba", lat:-8.3000, lon:22.4200, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"lunda-imparatorlugu künyesi 1665'te başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok", p:[["1281-01-01","1665-01-01"],["2000-12-31",null]]},
{ad:"Negele Borana", lat:5.3300, lon:39.5800, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Borana Oromo — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Nerçinsk", lat:51.9494, lon:116.5772, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1653 öncesi Evenk/Daur toprağı.", p:[["1281-01-01","1653-01-01"],["2000-12-31",null]]},
{ad:"Nikolayevsk (Amur ağzı)", lat:53.1400, lon:140.7300, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1689-09-06 öncesi Nivh (Gilyak) toprağı; Qing idaresi Amur ağzına inmedi, Rusya da Nerçinsk'e kadar iddia etmedi.", p:[["1281-01-01","1689-09-06"],["2000-12-31",null]]},
{ad:"Nimule", lat:3.6000, lon:32.0580, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Ekvatorya güney ucu — kimlik yok; güneyi HALKA 6-7 (Uganda), kasten noktasız", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Nâsir", lat:8.6080, lon:33.0670, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Nuer ülkesi — devlet teşkilâtı yok; Mısır ve Mehdî idaresi buraya ulaşmadı", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Obdorsk (Salehard)", lat:66.5300, lon:66.6019, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1595 öncesi Yugra/Nenets toprağı — TDV sibir-hanligi hanlığın sınırını Tura-Tobol-İşim ve İrtiş civarı diye veriyor, Ob' ağzı bu sınırın DIŞINDA. Devletsiz dönem uydurma devletle doldurulmadı.", p:[["1281-01-01","1595-01-01"],["2000-12-31",null]]},
{ad:"Ohotsk", lat:59.3631, lon:143.2431, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1647 öncesi Even/Lamut toprağı, devletsiz.", p:[["1281-01-01","1647-01-01"],["2000-12-31",null]]},
{ad:"Olyokminsk", lat:60.3742, lon:120.4064, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1635 öncesi Evenk toprağı, devletsiz.", p:[["1281-01-01","1635-01-01"],["2000-12-31",null]]},
{ad:"Omsk", lat:54.9885, lon:73.3242, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1716 öncesi Baraba/İrtiş bozkırı, devletsiz.", p:[["1281-01-01","1716-01-01"],["2000-12-31",null]]},
{ad:"Oraibi (Hopi, Üçüncü Mesa)", lat:35.8908, lon:-110.6289, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Hopi, 1680 Pueblo İsyanı'ndan sonra İspanyol misyonerleri kalıcı olarak GERİ ALMADI (1700'de Awatovi'yi bu yüzden kendi elleriyle yıktılar). Weber (1992) Hopi'nin 1821'e kadar fiilen bağımsız kaldığını açıkça yazıyor.", p:[["1281-01-01","1821-01-01"]]},
{ad:"Paquimé (Casas Grandes)", lat:30.3730, lon:-107.9510, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Paquime 14.-15. yy'da bolgesel bir merkezdi ve ~1450'de sonumlendi; ardindan bolgede merkezi bir siyasi yapi kurulmadi. Ispanyol Nueva Vizcaya idaresi 1560'lardan sonra ulasti. kaynak: HNAI c.10 Southwest (Smithsonian).", p:[["1281-01-01","1560-01-01"]]},
{ad:"Pavlodar (Koryakov)", lat:52.2850, lon:76.9670, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1635 öncesi yukarı İrtiş bozkırı.", p:[["1281-01-01","1635-01-01"],["2000-12-31",null]]},
{ad:"Pecos Pueblo (Cicuye)", lat:35.5500, lon:-105.6870, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1281-1598 arasi Pueblo koyleri siyaseten OZERKTI: her koy kendi konseyiyle yonetiliyor, ustlerinde merkezi bir devlet YOKTU. Ispanyol yerlesimi 1598'de Onate ile basladi. Atlasin kendi Taos Pueblo ve Acoma Pueblo kayitlari AYNI beyani tasiyor — emsal onlardir. kaynak: HNAI c.9 Southwest (Smithsonian", p:[["1281-01-01","1598-01-01"]]},
{ad:"Pibor", lat:6.8000, lon:33.1330, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Murle ülkesi — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Port Moresby", lat:-9.4400, lon:147.1800, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"yerli Motu köyleri çok daha önce vardı (balıkçı/çömlekçi köyleri, Hiri ticaret ağının bir ucu) ama merkezi/kayıtlı bir DEVLET hiç olmadı; 1884'te İngiliz himayesi ilan edilene kadar bu nokta hiçbir egemenliğe bağlanmıyor — boşluk veri eksikliği değil, gerçek siyasi boşluk", p:[["1281-01-01","1884-11-06"],["2000-12-31",null]]},
{ad:"Rağa", lat:8.4600, lon:25.6800, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Feroge/Kresh kuşağı — kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Riyad", lat:24.7130, lon:46.6750, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje kararı — 'Sahra ve Rub'ul Hâlî çölleri, 1744 öncesi Necid, körfez şeyhlikleri'.", p:[["1281-01-01","1744-01-01"],["2000-12-31",null]]},
{ad:"Rumbek", lat:6.8000, lon:29.6780, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Dinka ülkesi — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Semipalatinsk", lat:50.4110, lon:80.2270, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1635 öncesi yukarı İrtiş bozkırı.", p:[["1281-01-01","1635-01-01"],["2000-12-31",null]]},
{ad:"Soyo", lat:-6.1350, lon:12.3690, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"kongo-kralligi künyesi 1390'da başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok", p:[["1281-01-01","1390-01-01"],["2000-12-31",null]]},
{ad:"Surgut", lat:61.2540, lon:73.3962, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1592 öncesi Hantı (Yugra) toprağı, Berezov ile aynı gerekçe (TDV kucum-han). 🟡 kur:1594-01-01 (BRE 'Сургут', old.bigenc.ru/geography/text/4174172 — AYNEN: «Заложен летом 1594 под рук. жильца В. В. Аничкова») ÖNERİLDİ ama UYGULANMADI (M-4443 döngüsü, 17 Eylül 2026): dönemin 1592 başlangıcı KAYNAKSIZ ", p:[["1281-01-01","1592-01-01"],["2000-12-31",null]]},
{ad:"Taos Pueblo", lat:36.4361, lon:-105.5411, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1281-1610 arasi Pueblo koyleri siyaseten OZERKTI: Ispanyol somurgeciliginden once var olan 70ten fazla koyun her biri, dini topluluklarin baskanlarindan olusan bir konseyle yonetiliyordu; ustlerinde merkezi bir devlet YOKTU. Ispanyol yerlesimi 1598te Onate ile basladi. kaynak: NPS (ABD Milli Park Se", p:[["1281-01-01","1610-01-01"],["2000-12-31",null]]},
{ad:"Tara", lat:56.9021, lon:74.3714, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1594 öncesi Sibir Hanlığı'nın çevresi; hanlığın çekirdeği Tura-Tobol-İşim'di ve Tara İrtiş'in aşağısında, sınırın dışında.", p:[["1281-01-01","1594-01-01"],["2000-12-31",null]]},
{ad:"Tobruk", lat:32.0770, lon:23.9710, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1281-1556 arası TDV `derne`/`berka` Tobruk için ayrı bir egemen adı vermiyor; kaynak susuyor.", p:[["1281-01-01","1556-01-01"],["2000-12-31",null]]},
{ad:"Tomsk", lat:56.4884, lon:84.9480, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1604 öncesi Teleüt/Selkup toprağı, devletsiz.", p:[["1281-01-01","1604-01-01"],["2000-12-31",null]]},
{ad:"Tonc", lat:6.9500, lon:28.6830, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Dinka ülkesi — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Torit", lat:4.4120, lon:32.5700, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Latuka ülkesi — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Turuhansk", lat:65.7972, lon:87.9553, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1607 öncesi Evenk/Ket toprağı, devletsiz.", p:[["1281-01-01","1607-01-01"],["2000-12-31",null]]},
{ad:"Türabe", lat:21.2140, lon:41.6330, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Boş dilim 1816-01-01→1818-09-09: Mısır garnizonları Türabe'den çekildi (Lorimer I/1086), yerine kimin geçtiği bulunamadı. Lorimer Türabe'yi güney Hicaz sayar; Tâif gibi Memlûk→Mekke Şerifliği zinciri (🟡 GEREKÇELİ). 1517-07-06 Mekke heyetinin kabulü (TDV mekke). 1801 yıl: Tâif çevresi kabileleri Vehh", p:[["2000-12-31",null]]},
{ad:"Udskoy ostrogu", lat:54.5500, lon:134.4500, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1679 öncesi Evenk/Negidal toprağı, devletsiz.", p:[["1281-01-01","1679-01-01"],["2000-12-31",null]]},
{ad:"Uneyze", lat:26.0878, lon:43.9939, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje kararı — 'Sahra ve Rub'ul Hâlî çölleri, 1744 öncesi Necid, körfez şeyhlikleri'.", p:[["1281-01-01","1744-01-01"],["2000-12-31",null]]},
{ad:"Ust-Kamenogorsk", lat:49.9480, lon:82.6280, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1635 öncesi Altay eteği, devletsiz.", p:[["1281-01-01","1635-01-01"],["2000-12-31",null]]},
{ad:"Ust-Yansk", lat:70.9000, lon:136.5500, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Yana ağzı; Verhoyansk ile aynı 1638 ilerlemesi.", p:[["1281-01-01","1638-01-01"],["2000-12-31",null]]},
{ad:"Vav", lat:7.7020, lon:27.9900, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Bahrülgazâl merkezi — Dinka/Cur ülkesi, kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Verhoyansk", lat:67.5500, lon:133.3833, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1638 öncesi Yakut/Even toprağı, devletsiz.", p:[["1281-01-01","1638-01-01"],["2000-12-31",null]]},
{ad:"Vilyuysk", lat:63.7500, lon:121.6300, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1634 öncesi Yakut (Saha) toprağı, devletsiz.", p:[["1281-01-01","1634-01-01"],["2000-12-31",null]]},
{ad:"Vladivostok", lat:43.1150, lon:131.8850, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1653 öncesi Udege/Jurchen toprağı; Ningguta ile aynı idarî çevre ve aynı başlangıç günü.", p:[["1281-01-01","1653-01-01"],["2000-12-31",null]]},
{ad:"Yabelo", lat:4.8830, lon:38.2080, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Borana Oromo — devlet teşkilâtı ve kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Yakutsk", lat:62.0281, lon:129.7325, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1632 öncesi Yakut (Saha) toprağı, devletsiz.", p:[["1281-01-01","1632-01-01"],["2000-12-31",null]]},
{ad:"Yei", lat:4.0900, lon:30.6790, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Ekvatorya batı ucu — kimlik yok; batısı Lado kordonu", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Yeniseysk", lat:58.4494, lon:92.1683, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1619 öncesi Ket/Evenk toprağı, devletsiz.", p:[["1281-01-01","1619-01-01"],["2000-12-31",null]]},
{ad:"Yerbogaçen", lat:61.2800, lon:108.0100, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1786 öncesi Evenk toprağı, devletsiz.", p:[["1281-01-01","1786-01-01"],["2000-12-31",null]]},
{ad:"Zaşiversk", lat:67.2500, lon:142.8500, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"İndigirka; 1639 öncesi Yukagir/Even toprağı, devletsiz.", p:[["1281-01-01","1639-01-01"],["2000-12-31",null]]},
{ad:"Zmeinogorsk", lat:51.1580, lon:82.1880, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1635 öncesi Altay eteği, devletsiz.", p:[["1281-01-01","1635-01-01"],["2000-12-31",null]]},
{ad:"İmperator limanı", lat:49.0300, lon:140.2300, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1653 öncesi Orok/Udege kıyısı, devletsiz. ⚠️ Kasaba noktası maskede 0,5 km denizde kaldığı için 8,4 km kuzeybatıya kaydırıldı.", p:[["1281-01-01","1653-01-01"],["2000-12-31",null]]},
{ad:"Şakrâ", lat:25.2394, lon:45.2531, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi. Kaynak: CLAUDE.md §3'te belgelenmiş proje kararı — 'Sahra ve Rub'ul Hâlî çölleri, 1744 öncesi Necid, körfez şeyhlikleri'.", p:[["1281-01-01","1744-01-01"],["2000-12-31",null]]},
{ad:"Şembe", lat:7.1560, lon:30.5530, cins:"devletsiz-yerlesim", yaricap_km:null, neden:"Nil iskelesi — Dinka ülkesi, kimlik yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Aleksandrovsk (Kuzey Sahalin)", lat:50.9000, lon:142.1600, cins:"hata", yaricap_km:null, neden:"1875-05-07 öncesi Nivh/Ainu toprağı. Shimoda antlaşması (1855-02-07) adayı BÖLMEDİ, 'ortak mülkiyet, sınır yok' dedi ve `s:` bir dönemde iki sahip yazamıyor — boşluk ŞEMA sınırından, bilgisizlikten değil.", p:[["1862-01-01","1875-05-07"],["2000-12-31",null]]},
{ad:"Cetinje", lat:42.3910, lon:18.9140, cins:"hata", yaricap_km:null, neden:"", p:[["1281-01-01","1482-01-01"],["2000-12-31",null]]},
{ad:"Deym Zübeyr", lat:7.7000, lon:26.2170, cins:"hata", yaricap_km:null, neden:"Zübeyr Paşa'nın Bahrülgazâl karargâhı — Mısır dönemi yazılamadı (bkz. bölüm notu)", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Gondokoro", lat:4.9000, lon:31.6500, cins:"hata", yaricap_km:null, neden:"Ekvatorya karargâhı — Mısır dönemi (1870-1885) Değişmez 2 borcu doğuracağı için yazılamadı", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Korsakov (Güney Sahalin)", lat:46.6330, lon:142.7860, cins:"hata", yaricap_km:null, neden:"Aleksandrovsk ile aynı gerekçe ve aynı Shimoda sınırı. 1905-09-05 Portsmouth 50. paraleli sınır yaptı.", p:[["1281-01-01","1875-05-07"],["2000-12-31",null]]},
{ad:"Kuveyt", lat:29.3760, lon:47.9770, cins:"hata", yaricap_km:null, neden:"", p:[["1281-01-01","1716-01-01"],["2000-12-31",null]]},
{ad:"Doğu Grönland", lat:70.4833, lon:-21.9667, cins:"insansiz", yaricap_km:null, neden:"Norse yerleşimleri güneybatı kıyısındaydı ve XV. yy'da söndü; Danimarka-Norveç'in yeniden sömürgeleştirmesi 1721'de BATI kıyısında başladı, doğu kıyısında ilk yerleşim 1894 (Ammassalik, −37°D, kutu dışı). 1281-1923 penceresinde kutuya giren şerit hiçbir devletin idaresinde değil.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Franz Josef Toprağı", lat:80.3300, lon:52.8000, cins:"insansiz", yaricap_km:null, neden:"1873'te keşfedildi; 1281-1923 penceresinde hiçbir devletin idaresi altında değil.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Güney Georgia (Grytviken)", lat:-54.2800, lon:-36.5100, cins:"insansiz", yaricap_km:null, neden:"1281-1904 arasi YERLESIM YOK. Ada kesif oncesi hic iskan edilmemis; HSAI c.1'de 'Falkland' gibi 'South Georgia' da HIC GECMIYOR (olculdu: 0 gecis) — ve HSAI band duzeyindeki en kucuk halklari bile ayri bolumlerle isliyor. ⚠️ BU BIR SESSIZLIK ARGUMANIDIR, POZITIF KAYNAK DEGIL: `insansiz` damgasi bu t", p:[["1281-01-01","1904-11-16"],["2000-12-31",null]]},
{ad:"Kuzeydoğu Grönland", lat:76.7700, lon:-18.6600, cins:"insansiz", yaricap_km:null, neden:"Doğu Grönland ile aynı hüküm; 700 km'lik kıyı tek noktayla temsil edilemezdi.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Novaya Zemlya güneyi", lat:71.5000, lon:53.0000, cins:"insansiz", yaricap_km:null, neden:"Novaya Zemlya kuzeyi ile aynı hüküm; 900 km'lik ada tek noktayla temsil edilemezdi.", p:[["1281-01-01","1877-01-01"],["2000-12-31",null]]},
{ad:"Novaya Zemlya kuzeyi", lat:74.5000, lon:57.0000, cins:"insansiz", yaricap_km:null, neden:"1877 öncesi kalıcı yerleşim ve fiilî idare yok (Pomor avcılığı idare değildir).", p:[["1281-01-01","1877-01-01"],["2000-12-31",null]]},
{ad:"Severnaya Zemlya", lat:79.5000, lon:96.0000, cins:"insansiz", yaricap_km:null, neden:"1913'te keşfedildi, 1926'da adlandırıldı. Pencerenin tamamında varlığı BİLİNMİYORDU — dosyadaki en sağlam kasıtlı boşluk.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Svalbard", lat:78.2300, lon:15.7348, cins:"insansiz", yaricap_km:null, neden:"Terra nullius. Svalbard antlaşması 1920-02-09'da imzalandı ama 1925-08-14'te yürürlüğe girdi — Norveç hükümranlığı atlasın penceresi bittikten SONRA başlıyor. Pencerenin tamamında sahipsiz olması DOĞRUDUR.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Vaygaç", lat:69.9000, lon:59.3000, cins:"insansiz", yaricap_km:null, neden:"Novaya Zemlya ile aynı hüküm. ⚠️ maske: ada merkezi 10m maskesinde deniz görünüyordu, 11 km kuzeye çekildi — dosyadaki EN BÜYÜK kaydırma.", p:[["1281-01-01","1877-01-01"],["2000-12-31",null]]},
{ad:"Yeni Sibirya Adaları", lat:75.2000, lon:140.5000, cins:"insansiz", yaricap_km:null, neden:"XVIII. yy'da keşfedildi, mamut dişi için Rus ruhsatıyla işletildi ama idarî kademesi olmadı. ⚠️ Bu dosyadaki dört boşluğun EN ZAYIFI — kaynak çıkarsa rusya dönemi açılmalı.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Aotearoa Māori Yerleşimi (Kuzey Adası içi)", lat:-38.1000, lon:176.2000, cins:"kabile", yaricap_km:null, neden:"Te Ara Encyclopedia of New Zealand, 'Māori arrival and settlement' (teara.govt.nz/en/history/page-1) ve 'When was New Zealand first settled?' (teara.govt.nz/en/when-was-new-zealand-first-settled) — Doğu Polinezya'dan gelen yerleşimciler ~1300 CE civarında kalıcı yerleşim kurdu; toplum iwi/hapū (soy/", p:[["1300-01-01","1840-02-06"]]},
{ad:"Arnhem Land", lat:-13.5000, lon:135.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Aru-Tanimbar adaları", lat:-7.5000, lon:131.5000, cins:"kabile", yaricap_km:null, neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Aru-Tanimbar adaları 2", lat:-5.5000, lon:134.5000, cins:"kabile", yaricap_km:null, neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Asosa", lat:10.0700, lon:34.5300, cins:"kabile", yaricap_km:null, neden:"Beni Şengûl şeyhlikleri — kimlik yok; sınır 1902'de çizildi, 1897 YER TUTUCU", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Avustralya İç Kesimi (Güney — Nullarbor/Güneybatı)", lat:-31.5000, lon:129.0000, cins:"kabile", yaricap_km:null, neden:"AIATSIS, 'Map of Indigenous Australia' — Nullarbor Düzlüğü ve güneybatı kıyısı (Mirning, Nyoongar vb.), merkezî devlet yapısı olmayan, klan temelli topluluklardır.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Avustralya İç Kesimi (Kuzey — Arnhem Land)", lat:-13.0000, lon:133.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS, 'Map of Indigenous Australia' — Arnhem Land (Yolŋu halkları ve komşuları), klan/soy temelli örgütlenmiş, sömürge dönemine kadar dışarıyla sınırlı temas kurmuş bir bölgedir; merkezî devlet yok.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Avustralya İç Kesimi (Kuzeybatı — Kimberley)", lat:-16.5000, lon:126.0000, cins:"kabile", yaricap_km:null, neden:"AIATSIS, 'Map of Indigenous Australia' — Kimberley bölgesi, çok sayıda ayrı dil/klan grubunun (Worrorra, Ngarinyin, Bardi vb.) yaşadığı, merkezî devlet yapısı hiç oluşmamış bir bölgedir.", p:[["1281-01-01","1881-01-01"]]},
{ad:"Avustralya İç Kesimi (Kuzeydoğu — Cape York)", lat:-14.5000, lon:143.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS, 'Map of Indigenous Australia' — Cape York Yarımadası, çok sayıda ayrı dil grubunun yaşadığı, merkezî devlet yapısı olmayan bir bölgedir.", p:[["1281-01-01","1873-01-01"]]},
{ad:"Avustralya İç Kesimi (Orta — Arrernte bölgesi)", lat:-23.7000, lon:133.8800, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), Aborijin toplumlarını tanımlarken merkezî bir devlet değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı dil/topluluk grubu tarif ediyor (aiatsis.gov.au, 'Map of Indigenous Australia'; 'Our", p:[["1281-01-01","1872-01-01"]]},
{ad:"Bau (Fiji Konfederasyonları)", lat:-18.0070, lon:178.5670, cins:"kabile", yaricap_km:null, neden:"University of the South Pacific (Suva) kaynaklı akademik çalışmalar (D. Routledge ve ötekiler), Museum of Archaeology and Anthropology (Cambridge) 'Fiji Chiefdoms' — Fiji, 1874 İngiliz ilhakına kadar üç rakip konfederasyona (Kubuna/Bau, Burebasaga/Rewa, Tovata) bölünmüştü; yavusa/mataqali (soy/klan)", p:[["1281-01-01","1874-10-10"]]},
{ad:"Bedele", lat:8.4500, lon:36.3500, cins:"kabile", yaricap_km:null, neden:"İllûbâbor Oromo krallıkları — kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Beyan G10.5 B52.5", lat:-10.5000, lon:-52.5000, cins:"kabile", yaricap_km:null, neden:"YUKARI XINGU. HSAI c.3'ün 'TRIBES OF UPPER XINGU' bölümü (Lévi-Strauss) bölgeyi ADIYLA ve SAYIYLA anlatıyor: 'Villages visited by Von den Steinen had from 2 to 20 huts and from 30 to 200 inhabitants' · 'the Suyá (in 1884) and the Trumai (in 1887) villages, both built on a river bank' · Bacairí · Nah", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan G10.5 B58.5", lat:-10.5000, lon:-58.5000, cins:"kabile", yaricap_km:null, neden:"ARIPUANÃ-JURUENA arası, kuzey Mato Grosso. HSAI c.3: 'In 1915, an expedition of the Commission of Strategic Telegraph Lines from Mato Grosso to the Amazon, led by Lieutenant F. P. Vasconcellos, was attacked by Indians on the lower Sangue River. These Indians were strong and well built. They used bar", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan G10.5 B61.5", lat:-10.5000, lon:-61.5000, cins:"kabile", yaricap_km:null, neden:"RONDÔNIA — Machado/Ji-Paraná havzası. HSAI c.3: Rondon'un Telgraf Hattı Komisyonu bölgeyi 20. yy başında tanıdı; 'brought by General Rondon to the Rio Machado, where they lived until 1925, when the last six members of the group joined the Telegraphic Post of Pimenta Bueno'. ⚠️ Pimenta Bueno telgraf ", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan G10.5 B68.5", lat:-10.5000, lon:-68.5000, cins:"kabile", yaricap_km:null, neden:"ACRE-YUKARI PURUS. HSAI c.3: 'The linguistic relationships of the various tribes and subtribes of the Juruá-Purús Basin were the most confused in South America until Rivet and Tastevin (1921) established their classification'; bölge 1921'de bile etnik haritası YENİ çıkarılan bir alandır. ⇒ Kaynak ha", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan G31.5 B56.5", lat:-31.5000, lon:-56.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 (Serrano, The Charrua; Metraux). Charrua · Minuan · Guenoa — Rio de la Plata'nin DOGU kiyisi. c.1: 'the Querandi and Charrua, primarily nomadic hunters and fishermen, ignorant of agriculture, tall, and warlike'.", p:[["1281-01-01","1828-08-27"],["2000-12-31",null]]},
{ad:"Beyan G34.5 B65.5", lat:-34.5000, lon:-65.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians), Smithsonian BAE Bulletin 143. 1281-1725 Tehuelche/Puelche/Querandi band duzeyi — kaynak SUSMUYOR (yuzlerce sayfa etnografya) ama merkezi devlet TARIF ETMIYOR. c.2: 'we can establish 1725 as the approximate date in which t", p:[["1281-01-01","1725-01-01"],["2000-12-31",null]]},
{ad:"Beyan G35.5 B69.5", lat:-35.5000, lon:-69.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians). 1281-1725 Tehuelche/Puelche/Querandi band duzeyi. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains ... rapidly became the dominant one.' 1725 son", p:[["1281-01-01","1725-01-01"],["2000-12-31",null]]},
{ad:"Beyan G36.5 B61.5", lat:-36.5000, lon:-61.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians), Smithsonian BAE Bulletin 143. 1281-1725 Tehuelche/Puelche/Querandi band duzeyi — kaynak SUSMUYOR (yuzlerce sayfa etnografya) ama merkezi devlet TARIF ETMIYOR. c.2: 'we can establish 1725 as the approximate date in which t", p:[["1281-01-01","1725-01-01"],["2000-12-31",null]]},
{ad:"Beyan G36.5 B64.5", lat:-36.5000, lon:-64.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians), Smithsonian BAE Bulletin 143. 1281-1725 Tehuelche/Puelche/Querandi band duzeyi — kaynak SUSMUYOR (yuzlerce sayfa etnografya) ama merkezi devlet TARIF ETMIYOR. c.2: 'we can establish 1725 as the approximate date in which t", p:[["1281-01-01","1725-01-01"],["2000-12-31",null]]},
{ad:"Beyan G37.5 B68.5", lat:-37.5000, lon:-68.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians), Smithsonian BAE Bulletin 143. 1281-1725 Tehuelche/Puelche/Querandi band duzeyi — kaynak SUSMUYOR (yuzlerce sayfa etnografya) ama merkezi devlet TARIF ETMIYOR. c.2: 'we can establish 1725 as the approximate date in which t", p:[["1281-01-01","1725-01-01"],["2000-12-31",null]]},
{ad:"Beyan G38.5 B62.5", lat:-38.5000, lon:-62.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians). 1281-1725 Tehuelche/Puelche/Querandi band duzeyi. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains ... rapidly became the dominant one.' 1725 son", p:[["1281-01-01","1725-01-01"],["2000-12-31",null]]},
{ad:"Beyan G38.5 B66.5", lat:-38.5000, lon:-66.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians). 1281-1725 Tehuelche/Puelche/Querandi band duzeyi. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains ... rapidly became the dominant one.' 1725 son", p:[["1281-01-01","1725-01-01"],["2000-12-31",null]]},
{ad:"Beyan G39.5 B64.5", lat:-39.5000, lon:-64.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians), Smithsonian BAE Bulletin 143. 1281-1725 Tehuelche/Puelche/Querandi band duzeyi — kaynak SUSMUYOR (yuzlerce sayfa etnografya) ama merkezi devlet TARIF ETMIYOR. c.2: 'we can establish 1725 as the approximate date in which t", p:[["1281-01-01","1725-01-01"],["2000-12-31",null]]},
{ad:"Beyan G39.5 B70.5", lat:-39.5000, lon:-70.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Coop", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G4.5 B52.5", lat:-4.5000, lon:-52.5000, cins:"kabile", yaricap_km:null, neden:"ORTA XINGU — Altamira üstü. HSAI c.3: 'In the 18th century, the Jesuits succeeded in settling Yuruna and Tacunyapé in the Tacuana (Tauaquéra) mission, a little above present-day Altamira, and in 1762 and 1784 the Tacunyapé are mentioned as among the Indians settled at Portel.' ⚠️ Misyon VARDI ama kü", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan G40.5 B62.5", lat:-40.5000, lon:-62.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians). 1281-1725 Tehuelche/Puelche/Querandi band duzeyi. c.2: 'we can establish 1725 as the approximate date in which the Araucanians were definitely established in the great plains ... rapidly became the dominant one.' 1725 son", p:[["1281-01-01","1725-01-01"],["2000-12-31",null]]},
{ad:"Beyan G40.5 B68.5", lat:-40.5000, lon:-68.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 (Cooper, Patagonian and Pampean Hunters) + c.2 (Cooper, Araucanians), Smithsonian BAE Bulletin 143. 1281-1725 Tehuelche/Puelche/Querandi band duzeyi — kaynak SUSMUYOR (yuzlerce sayfa etnografya) ama merkezi devlet TARIF ETMIYOR. c.2: 'we can establish 1725 as the approximate date in which t", p:[["1281-01-01","1725-01-01"],["2000-12-31",null]]},
{ad:"Beyan G41.5 B71.5", lat:-41.5000, lon:-71.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Coop", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G42.5 B65.5", lat:-42.5000, lon:-65.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Coop", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G43.5 B68.5", lat:-43.5000, lon:-68.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143. Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR (cilt onlara yuzlerce sayfa ayiriyor) ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri ", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G44.5 B65.5", lat:-44.5000, lon:-65.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Coop", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G44.5 B72.5", lat:-44.5000, lon:-72.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Coop", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G46.5 B68.5", lat:-46.5000, lon:-68.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Coop", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G46.5 B71.5", lat:-46.5761, lon:-71.4933, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143. Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR (cilt onlara yuzlerce sayfa ayiriyor) ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri ", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G46.5 B74.5", lat:-46.5000, lon:-74.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Coop", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G48.5 B75.5", lat:-48.5000, lon:-75.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Coop", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G49.5 B72.5", lat:-49.5000, lon:-72.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143. Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR (cilt onlara yuzlerce sayfa ayiriyor) ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Cooper: Roca-Villegas seferleri ", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G51.5 B69.5", lat:-51.5000, lon:-69.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Coop", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G52.5 B74.5", lat:-52.5000, lon:-74.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Coop", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G54.5 B67.5", lat:-54.5000, lon:-67.5000, cins:"kabile", yaricap_km:null, neden:"HSAI c.1 'The Marginal Tribes', Smithsonian BAE Bulletin 143 (Cooper · Lothrop · Bird). Yahgan · Alacaluf · Chono · Ona · Tehuelche band duzeyi avci-toplayici ve kano halklari. Kaynak SUSMUYOR — cilt onlara yuzlerce sayfa ayiriyor — ama merkezi devlet TARIF ETMIYOR ⇒ `devletsiz` degil `kabile`. Coop", p:[["1281-01-01","1883-01-01"],["2000-12-31",null]]},
{ad:"Beyan G7.5 B47.5", lat:-7.5000, lon:-47.5000, cins:"kabile", yaricap_km:null, neden:"TOCANTINS-PARNAÍBA arası, Maranhão/Tocantins içi. HSAI c.3: 'In 1840 the provincial government of Maranhão established the Colony of São Pedro do Pindaré for the Indians of the region, with but little success' ve Guajajara için 'settled on the Gurupi River near Cerzedello in 1818'. ⇒ Devlet 19. yy'd", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan G7.5 B50.5", lat:-7.5000, lon:-50.5000, cins:"kabile", yaricap_km:null, neden:"ARAGUAIA-TOCANTINS arası, Kayapó/Gê bölgesi. HSAI c.3 ve c.1'in 'NORTHWESTERN AND CENTRAL GE' bölümü (Lowie) bu halkları köy düzeyinde tarif ediyor; c.3: Arara için 'Another band of Arara, which numbered about 30 in 1917, settled on the right bank of the Pacajá do Xingú River'. ⇒ Band/köy düzeyi, me", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan G7.5 B56.5", lat:-7.5000, lon:-56.5000, cins:"kabile", yaricap_km:null, neden:"TAPAJÓS-XINGU arası, Mundurucú bölgesi. HSAI c.3: 'the Tapajoz River Mundurucú have a patrilineal sib and moiety system' ve Maué ile Mundurucú için ayrı bölümler. Kaynak halkı ayrıntısıyla anlatıyor, merkezî devlet tarif etmiyor ⇒ `kabile`. ⚠️ Tapajós ANA KANALI ayrı: Itaituba (1823) NOKTA olarak ya", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan G7.5 B62.5", lat:-7.5000, lon:-62.5000, cins:"kabile", yaricap_km:null, neden:"MADEIRA-PURUS arası. HSAI c.3 Mura'yı bu kuşakta konumluyor: 'In 1749 ... the Mura were established on a lake on the right bank of the Madeira River, opposite the mouth of the Autaz (a little above Borba)'. Mura tarımı BIRAKMIŞ bir halktır (c.3: 'the Guayakí and the Mura have abandoned cultivation s", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan G9.5 B65.5", lat:-9.5000, lon:-65.5000, cins:"kabile", yaricap_km:null, neden:"MADEIRA-MAMORÉ kavşağı ardı, Rondônia batısı. HSAI c.3 bölgenin halklarını (Mura · Pacaás Novos · Karipuna) anlatıyor. ⚠️ Forte Príncipe da Beira (1776-06-20) atlasta ZATEN VAR ve bu merkezden ~290 km güneybatıda — yani Portekiz kalesi Guaporé'de, bu iç kuşakta DEĞİL.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan K1.5 B54.5", lat:1.5000, lon:-54.5000, cins:"kabile", yaricap_km:null, neden:"Tumucumaque / Brezilya-Surinam sınırı. HSAI c.3 Oyana'yı (Wayana · Ojana · Rucuyen · Urucuiana) 'in the southern border region' diye konumluyor. Kütük halkı anlatıyor, devlet tarif etmiyor ⇒ `kabile`.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan K1.5 B57.5", lat:1.5000, lon:-57.5000, cins:"kabile", yaricap_km:null, neden:"Serra Acaraí / Mapuera havzası. HSAI c.3 Waiwai'yi (Ouayeoué) Mapuera nehrinde konumluyor (O. Coudreau 1903). Kütük halkı anlatıyor, merkezî devlet tarif etmiyor ⇒ `kabile`.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan K1.5 B60.5", lat:1.5000, lon:-60.5000, cins:"kabile", yaricap_km:null, neden:"Yukarı Rio Branco / Tacutu havzası. HSAI c.3: Wapishana 'formerly, they occupied the basin of the Tacutu River (lat. 3° N., long. 60° W.)'; Macushi aynı kuşakta. ⚠️ AYRICA: Portekiz Forte São Joaquim (~3,0K/-60,5B) bu merkezin 165 km kuzeyinde — AYRI bir nokta adayı olarak kuyrukta, kaynağı BULUNAMA", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan K1.5 B63.5", lat:1.5000, lon:-63.5000, cins:"kabile", yaricap_km:null, neden:"Yukarı Rio Branco / Parima — Guaharibo · Waica · Shiriana (Yanomami) bölgesi. HSAI c.3: 'A few tribes of the area, such as the Shiriana, Waica, and Guaharibo and the Macu of the Rio Negro formerly had no farming'. Tarımı bile olmayan band düzeyi ⇒ `kabile`; merkezî devlet söz konusu değil.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan K2.5 B52.5", lat:2.5000, lon:-52.5000, cins:"kabile", yaricap_km:null, neden:"Amapá / Oyapock-Tumucumaque içi. HSAI c.3 Oyapock bölgesi halklarını (Macuani 1729 · Palicur · Ouanari misyonu) anıyor; iç yayla band düzeyi. ⚠️ Fransız Guyanası kıyısı AYRI — Cayenne 1643 atlasta ZATEN var ve bu merkezden ~250 km uzakta.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan K3.5 B54.5", lat:3.5000, lon:-54.5000, cins:"kabile", yaricap_km:null, neden:"Surinam-Brezilya sınırı, Tumucumaque batısı. Wayana/Tiriyó bölgesi. Tek hücre.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan K3.5 B56.5", lat:3.5000, lon:-56.5000, cins:"kabile", yaricap_km:null, neden:"Surinam içi (yukarı Surinam · Tapanahoni). Trio ve Wayana bölgesi; HSAI c.3 Cariban Trio'yu adıyla anıyor. Hollanda sömürgesi KIYIDAYDI — Paramaribo 1630 atlasta var ve bu merkezden ~300 km uzakta.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan K4.5 B59.5", lat:4.5000, lon:-59.5000, cins:"kabile", yaricap_km:null, neden:"Rupununi savanları. HSAI c.3 iki halkı KOORDİNATIYLA buraya yerleştiriyor: Macushi (Makusi) 'on the savannas of southern British Guiana and adjacent regions (lat. 3°-4° N., long. 58°-61° W.)' ve Wapishana 'the basin of the Tacutu River (lat. 3° N., long. 60° W.)'. Kaynak SUSMUYOR — bu halkları adıyl", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan K4.5 B62.5", lat:4.5000, lon:-62.5000, cins:"kabile", yaricap_km:null, neden:"Gran Sabana / Roraima yaylası (Pemón · Arekuna · Kamarakoto). HSAI c.4 Guyana Kalkanı Karib halklarını kapsıyor. ⚠️ Bu merkez için kütükte AÇIK bir koordinat İFADESİ BULAMADIM — kova komşu merkezlerin desenine dayanıyor. `kabile` damgası bu merkezde ötekilerden ZAYIF; bir sonraki tur doğrulasın.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan K7.5 B60.5", lat:7.5000, lon:-60.5000, cins:"kabile", yaricap_km:null, neden:"Cuyuní / yukarı Mazaruni (Akawaio · Pemón). Kyk-over-al 1616 Essequibo'nun AŞAĞISINDA (6,4K/-58,7B) ve bu merkezden ~270 km uzakta — yani kıyı sömürgesi buraya ULAŞMIYOR. ⚠️ Kütükte bu koordinat için doğrudan ifade BULAMADIM; kova komşu desenden.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Beyan K7.5 B62.5", lat:7.5000, lon:-62.5000, cins:"kabile", yaricap_km:null, neden:"Caura-Aro havzası, aşağı Orinoco'nun GÜNEYİ (Ye'kuana · Panare). ⚠️ Angostura/Ciudad Bolívar (~8,1K/-63,6B) bu merkezin 135 km kuzeybatısında ve 1764'te kuruldu — AMA kütükte BULUNAMADI (HSAI c.4'te 'Angostura' geçişi: 0) ve AYRI bir nokta adayı olarak kuyrukta.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Kum Çölü", lat:-23.5000, lon:126.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Kum Çölü 2", lat:-22.5000, lon:123.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Kum Çölü 3", lat:-21.5000, lon:127.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Kum Çölü 4", lat:-20.5000, lon:124.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Kum Çölü 5", lat:-24.5000, lon:120.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Kum Çölü 6", lat:-24.5000, lon:127.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Kum Çölü 7", lat:-21.5000, lon:122.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Victoria Çölü", lat:-28.5000, lon:126.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Victoria Çölü 2", lat:-28.5000, lon:131.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Victoria Çölü 3", lat:-31.5000, lon:124.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Victoria Çölü 4", lat:-30.5000, lon:132.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Victoria Çölü 5", lat:-29.5000, lon:126.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Victoria Çölü 6", lat:-26.5000, lon:133.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Victoria Çölü 7", lat:-29.5000, lon:127.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Cape York Yarımadası", lat:-12.5000, lon:142.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1873-01-01"]]},
{ad:"Cape York Yarımadası 2", lat:-15.5000, lon:141.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1873-01-01"]]},
{ad:"Cayuga", lat:42.7326, lon:-76.7466, cins:"kabile", yaricap_km:null, neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core),", p:[["1281-01-01","1450-01-01"],["2000-12-31",null]]},
{ad:"Dembîdollo", lat:8.5330, lon:34.8000, cins:"kabile", yaricap_km:null, neden:"Sayo/Vollega Oromo krallığı — kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Er-Renk", lat:11.7500, lon:32.7830, cins:"kabile", yaricap_km:null, neden:"Şilluk Krallığı — `silluk` kimliği yok; Mısır Ekvatorya dönemi Değişmez 2 borcu doğuracağı için yazılamadı", p:[["1281-01-01","1885-01-26"],["2000-12-31",null]]},
{ad:"Eyre Yarımadası kuzeyi / Gawler", lat:-30.5000, lon:135.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Fâşoda", lat:9.8920, lon:32.1170, cins:"kabile", yaricap_km:null, neden:"Şilluk Krallığı'nın başkenti — `silluk` kimliği yok", p:[["1281-01-01","1885-01-26"],["2000-12-31",null]]},
{ad:"Gibson Çölü", lat:-23.5000, lon:130.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Gibson Çölü 2", lat:-26.5000, lon:128.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Gibson Çölü 3", lat:-26.5000, lon:131.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Gibson Çölü 4", lat:-26.5000, lon:125.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Gimbî", lat:9.1700, lon:35.8330, cins:"kabile", yaricap_km:null, neden:"Vollega Oromo krallıkları — kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Gore", lat:8.1500, lon:35.5330, cins:"kabile", yaricap_km:null, neden:"İllûbâbor Oromo krallıkları — kimlik yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Hamâd (Bâdiyetü'ş-Şâm içi)", lat:33.0500, lon:40.2800, cins:"kabile", yaricap_km:null, neden:"Hamâd, Suriye Çölü'nün iç kesimidir ve bedevi aşiretlerin (Rüvele, Anize) göçer denetimindeydi, yerleşik devlet idaresi yoktu.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Hawaii Adaları (Birleşme Öncesi — moku/aliʻi sistemi)", lat:19.6000, lon:-155.5000, cins:"kabile", yaricap_km:null, neden:"EBSCO Research Starters, 'Wars of Hawaiian Unification'; akademik kaynaklar (moku/aliʻi nui sistemi) — Polinezyalı yerleşim ~1000-1200 CE, ama 1795'te Kamehameha I'in birleştirmesine kadar her ada (Hawaiʻi, Maui, Oʻahu, Kauaʻi) kendi aliʻi nui'siyle YÖNETİLEN AYRI moku (bölge) sistemleriydi — merkez", p:[["1281-01-01","1795-01-01"]]},
{ad:"Hilo", lat:19.7074, lon:-155.0816, cins:"kabile", yaricap_km:null, neden:"1795 birleşmesi öncesi: moku/aliʻi sistemi — emsal ve kaynak atlasın 'Hawaii Adaları (Birleşme Öncesi)' kaydı (yerlesimler_ek30.js).", p:[["1281-01-01","1795-01-01"],["2000-12-31",null]]},
{ad:"Hoggar", lat:24.0000, lon:3.0000, cins:"kabile", yaricap_km:null, neden:"Hoggar (Ahaggar) yaylası, Kel Ahaggar Tuareg konfederasyonunun Amenokal liderliğinde denetlediği bir bölgeydi; bu bir aşiret/konfederasyon yapısıydı, devlet değil.", p:[["1750-01-01","1902-01-01"]]},
{ad:"Karakum", lat:39.5000, lon:58.5000, cins:"kabile", yaricap_km:null, neden:"Karakum, kenarlarında yurt tutan Türkmen boylarının (Teke, Yomut, Salur, Ersarı, Çavdur…) göç alanıydı; boylar XVI. yy'dan itibaren Hîve ve Buhara'ya gevşek tâbi, kendi beyleriyle yönetiliyordu; 1860-1884 müstakil (KARAR-UYG-1015: eski metindeki 'Hîve/Buhara hanlıklarının fiilen ulaşamadığı' ifadesi", p:[["1281-01-01","1924-01-01"]]},
{ad:"Kimberley iç kesimi", lat:-14.5000, lon:125.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1881-01-01"]]},
{ad:"Krasnoyarsk", lat:56.0106, lon:92.8526, cins:"kabile", yaricap_km:null, neden:"1628 öncesi Yenisey Kırgızları'nın otlağı; atlasta karşılığı olan bir kimlik yok ve UYDURULMADI.", p:[["1281-01-01","1628-01-01"],["2000-12-31",null]]},
{ad:"Kufra (el-Cûf)", lat:24.2090, lon:23.3000, cins:"kabile", yaricap_km:null, neden:"Kufra vahaları 19. yy ortasından itibaren Sünûsî tarikatının dinî-aşiret nüfuzu altına girdi (bir devlet değil, tarikat/aşiret ağı); öncesinde de fiilen denetimsizdi.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Küçük Kum Çölü", lat:-25.5000, lon:123.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Küçük Kum Çölü 2", lat:-24.5000, lon:117.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Lahaina", lat:20.8739, lon:-156.6777, cins:"kabile", yaricap_km:null, neden:"1795 birleşmesi öncesi: moku/aliʻi sistemi — emsal ve kaynak atlasın 'Hawaii Adaları (Birleşme Öncesi)' kaydı (yerlesimler_ek30.js).", p:[["1281-01-01","1795-01-01"],["2000-12-31",null]]},
{ad:"Louisiade-Milne takımadası", lat:-11.5000, lon:153.5000, cins:"kabile", yaricap_km:null, neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Malakal", lat:9.5330, lon:31.6610, cins:"kabile", yaricap_km:null, neden:"Şilluk kuşağı — `silluk` kimliği yok", p:[["1281-01-01","1885-01-26"],["2000-12-31",null]]},
{ad:"Maridi", lat:4.9170, lon:29.4670, cins:"kabile", yaricap_km:null, neden:"Azande/Moru kuşağı — `zende` kimliği yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Meşra er-Rek", lat:8.4170, lon:29.2830, cins:"kabile", yaricap_km:null, neden:"Bahrülgazâl iskelesi — Nuer/Dinka ülkesi, devlet teşkilâtı yok. ⚠️ Mısır ilhakı (1873) Değişmez 2 borcu doğuracağı için DÖNEM YAZILAMADI — bu not korunmalı.", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Mohawk (Kayenlaha'ke)", lat:42.9506, lon:-74.3287, cins:"kabile", yaricap_km:null, neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core),", p:[["1281-01-01","1450-01-01"],["2000-12-31",null]]},
{ad:"Murchison-Gascoyne iç kesimi", lat:-29.5000, lon:116.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Murchison-Gascoyne iç kesimi 2", lat:-26.5000, lon:115.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Mushuau-nipi (Indian House Lake)", lat:56.2000, lon:-64.7000, cins:"kabile", yaricap_km:null, neden:"Mushuau-nipi kalici bir yerlesim DEGIL, Naskapi'nin ren geyigi gecidinde toplandigi MEVSIMLIK bulusma yeridir. Innu/Naskapi Quebec-Labrador'da hicbir antlasma imzalamadi, devir gunu yok. kaynak: HNAI c.6 Subarctic (Smithsonian) — TDV bu cografyayi kapsamiyor (olculdu, cografi bosluk). KARAR KOORDINA", p:[["1281-01-01","1924-01-01"]]},
{ad:"Nekemte", lat:9.0880, lon:36.5500, cins:"kabile", yaricap_km:null, neden:"Leka Nekemte Oromo krallığı — kimliği yok; habesistan yazmak §3.5.1 ters yönü olurdu", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Nuhayb (Nukhayb)", lat:32.0400, lon:42.2500, cins:"kabile", yaricap_km:null, neden:"Necef'in peteğinin 221 km'ye kadar yetiştiği bölgede gerçek, tarihî bir vaha/kuyu; yerleşik idare yoktu, göçer aşiret denetimindeydi.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Ogaden", lat:7.2000, lon:44.0000, cins:"kabile", yaricap_km:null, neden:"Ogaden, çoğunlukla Darod klanına bağlı Somali göçebe halkının yaşadığı bölge; Habeşistan'ın hükümranlık İDDİASI vardı ama fiilî denetim çok zayıftı — 1915'te Lij Iyasu döneminde ancak klan liderleriyle 'yerel özerklik' anlaşmasıyla kısmi uzlaşma sağlandı (bu da hükümranlığın o ana dek FİİLEN yokluğu", p:[["1281-01-01","1924-01-01"]]},
{ad:"Oneida", lat:43.0906, lon:-75.6349, cins:"kabile", yaricap_km:null, neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core),", p:[["1281-01-01","1450-01-01"],["2000-12-31",null]]},
{ad:"Onondaga (İrokua Konfederasyon Merkezi)", lat:43.0326, lon:-76.1794, cins:"kabile", yaricap_km:null, neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core),", p:[["1281-01-01","1450-01-01"],["2000-12-31",null]]},
{ad:"Pilbara iç kesimi", lat:-24.5000, lon:116.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Rapa Nui (Paskalya Adası)", lat:-27.1127, lon:-109.3497, cins:"kabile", yaricap_km:null, neden:"Akademik radyokarbon kronolojisi (Journal of Pacific Archaeology, 'Refining the Chronology of Rapa Nui Settlement'; PLOS ONE, 'Rapa Nui monument (ahu) locations') — Polinezyalı yerleşim ~1200 CE'de başladı, ada 11 kabile/soy grubuna (mata) bölünmüş rekabetçi bir toplumdu; merkezî tek bir devlet 1722", p:[["1281-01-01","1924-01-01"]]},
{ad:"Seneca (Ganondagan)", lat:42.9084, lon:-77.4258, cins:"kabile", yaricap_km:null, neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core),", p:[["1281-01-01","1450-01-01"],["2000-12-31",null]]},
{ad:"Simpson Çölü", lat:-24.5000, lon:136.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Simpson Çölü 2", lat:-23.5000, lon:136.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Simpson Çölü 3", lat:-27.5000, lon:137.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Somali çölü", lat:8.0000, lon:46.5000, cins:"kabile", yaricap_km:null, neden:"Somali iç çölü tarih boyunca göçebe klan (Darod/Hawiye vb.) yapılarıyla yönetildi, kıyı sultanlıklarının (mevcut `somali` künyesi) idaresi bu iç bölgeye HİÇ ulaşmadı — merkezi devlet hiç kurulmadı.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Suva", lat:-18.1416, lon:178.4419, cins:"kabile", yaricap_km:null, neden:"ANU Press, 'The Making of a Capital: A Social History of Suva, 1870–1882' (press-files.anu.edu.au/downloads/press/n10434/pdf/ch03.pdf) — Suva köyü 1843 Bau-Rewa Savaşı'ndan sonra Bau şefi Cakobau'nun (Kubuna konfederasyonu) koruması altına girdi; 1868'de Polynesian Company'ye arazi verildi, 1870'te ", p:[["1849-01-01","1874-10-10"],["2000-12-31",null]]},
{ad:"Tamanrasset", lat:22.7850, lon:5.5230, cins:"kabile", yaricap_km:null, neden:"Tamanrasset, Kel Ahaggar Tuareg konfederasyonunun (Amenokal liderliginde, yaklasik 1750den itibaren teskilatli) merkezi/buluşma yeriydi; oncesinde de gevsek Tuareg boylarinin bolgesiydi. Hicbir donemde devlet duzeyinde bir siyasi yapi olusmadi, Fransiz sömürge donemine (1902 Tit Muharebesi) kadar bo", p:[["1750-01-01","1902-01-01"]]},
{ad:"Tanami Çölü", lat:-20.5000, lon:130.5000, cins:"kabile", yaricap_km:null, neden:"AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies), 'Map of Indigenous Australia' ve 'Our Societies' (aiatsis.gov.au · lryb.aiatsis.gov.au): Aborijin toplumları merkezî bir devlet olarak değil, klan/soy grupları ve akrabalık yükümlülükleriyle örgütlenmiş yüzlerce ayrı di", p:[["1281-01-01","1924-01-01"]]},
{ad:"Tazmanya (Aborijin Tazmanyalılar)", lat:-42.0000, lon:147.0000, cins:"kabile", yaricap_km:null, neden:"AIATSIS — Tazmanya, ~10.000 yıl önce deniz seviyesi yükselince anakaradan ayrı kalmış, kendi ayrı dil/kültür gruplarına sahip Aborijin Tazmanyalılar tarafından iskân edilmiştir; 1803 İngiliz yerleşimine kadar merkezî devlet yok.", p:[["1281-01-01","1803-01-01"]]},
{ad:"Te Waipounamu Māori Yerleşimi (Güney Ada içi)", lat:-44.0000, lon:170.5000, cins:"kabile", yaricap_km:null, neden:"Te Ara Encyclopedia of New Zealand, aynı kaynak (Māori arrival and settlement) — Güney Ada (Te Waipounamu), Kuzey Ada ile aynı ~1300 CE yerleşim dalgasının parçasıydı ama coğrafi olarak ayrı, farklı iwi (Ngāi Tahu vb.) tarafından iskân edildi; 1840'a kadar merkezî devlet yoktu.", p:[["1300-01-01","1840-02-06"]]},
{ad:"Tembura", lat:5.6100, lon:27.4700, cins:"kabile", yaricap_km:null, neden:"Azande Krallığı — `zende` kimliği yok", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Teymâ", lat:27.6320, lon:38.5450, cins:"kabile", yaricap_km:null, neden:"TDV `teyma`: 1830'dan itibaren yarı bağımsız Rummân emîrleri; son bağımsız emîr 1950'de öldü — yerel emîrlik, devlet idaresi yok; 1836-1921 beyanlı boşluk", p:[["1281-01-01","1836-01-01"],["2000-12-31",null]]},
{ad:"Tibesti", lat:21.0000, lon:17.5000, cins:"kabile", yaricap_km:null, neden:"Tibesti dağlık çölü, Toubou (Tubu) aşiret konfederasyonlarının denetimindeydi; tarih boyunca herhangi bir devletin (Osmanlı Trablusgarp dahil) fiilen ulaştığı bir bölge değildi.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Tocobaga (Safety Harbor)", lat:27.9913, lon:-82.6837, cins:"kabile", yaricap_km:null, neden:"Tocobaga bir reislikti ama datable bir bitisi YOK (18. yy basinda sonumlendi, kaynak yil vermiyor) ⇒ M-2425 teritoryal sinavini gecse de TARIH sinavini gecemiyor, kunye yazilmadi. Ispanyol Florida iddiasi 1565'te St. Augustine ile basladi. kaynak: HNAI c.14 Southeast (Smithsonian).", p:[["1281-01-01","1924-01-01"]]},
{ad:"Uzboy", lat:39.9000, lon:55.5000, cins:"kabile", yaricap_km:null, neden:"Uzboy (kurumuş Amuderya yatağı) çevresi Türkmen aşiretlerinin göçer alanıydı, yerleşik devlet denetimi yoktu.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Vladikavkaz", lat:43.0240, lon:44.6820, cins:"kabile", yaricap_km:null, neden:"TDV vladikafkas/osetler: 1784 öncesi bölge Oset vadileri çevresi, bölgenin hangi devletin idaresinde olduğu kaynakta yok; şehir 1784'te kuruldu (TDV inguslar, cerkezler) — boşluğun cinsi: kabile toprağı", p:[["1281-01-01","1784-01-01"],["2000-12-31",null]]},
{ad:"Vâdi'd-Devâsir", lat:20.4917, lon:45.1567, cins:"kabile", yaricap_km:null, neden:"BEYANLI BOŞLUK (KARAR-UYG-1015): Lorimer'e göre Vâdi'd-Devâsir, merkezi Dam olan, nüfusu hemen tamamen Devâsir kabilesinden bir emirliktir; Dam emîri bölgenin 'paramount chief'i, köylerden vergi alır, dış ilişkilerde bölgeyi temsil eder. Vehhâbî (Suûd) devletine 'but slightly attached': zekât Suûd h", p:[["1281-01-01","1924-01-01"]]},
{ad:"Vâdî Sirhân", lat:31.0000, lon:37.8000, cins:"kabile", yaricap_km:null, neden:"Vâdî Sirhân, Suriye Çölü'nde Rüvele/Anize gibi bedevi aşiret konfederasyonlarının denetimindeydi; Osmanlı idaresi güzergah üzerindeki durak noktalarıyla sınırlıydı.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Whangārei", lat:-35.7251, lon:174.3237, cins:"kabile", yaricap_km:null, neden:"1839 kereste yerleşimi ile 1840-02-06 Waitangi arası: Māori iwi yönetimi — emsal ve kaynak atlasın 'Aotearoa Māori Yerleşimi' kaydı (yerlesimler_ek30.js, Te Ara).", p:[["1839-01-01","1840-02-06"],["2000-12-31",null]]},
{ad:"Widyân (el-Widyân)", lat:31.2000, lon:41.5000, cins:"kabile", yaricap_km:null, neden:"Necef'in güneybatısındaki bu çöl platosu (Widyan havzası) yerleşik devlet idaresi taşımaz, göçer bedevi aşiretlerin denetimindeydi — Hamâd/Vâdî Sirhân ile aynı sınıf.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Wintu (Yukarı Sacramento)", lat:40.5800, lon:-122.3900, cins:"kabile", yaricap_km:null, neden:"Wintu bantlari Yukari Sacramento'da yasadi ama Kaliforniya'nin 18 antlasmasinin hicbiri ABD Senatosu'nca ONAYLANMADI ⇒ ortada bir devir gunu YOK ve kunye yazilamadi (arandi, bulunamadi). ABD idaresi eyalet olusuyla 1850-09-09'da basladi. kaynak: HNAI c.8 California (Smithsonian).", p:[["1281-01-01","1850-09-09"]]},
{ad:"Yakut toprakları (Orta Lena)", lat:65.0000, lon:123.0000, cins:"kabile", yaricap_km:null, neden:"kabile — TDV yakutlar maddesi 1620 öncesini AÇIKÇA tartışıyor: Yakutlar 'hemen hemen bütün Lena havzası boyunca yarı uruğlar (küçük kabileler) halinde yaşıyordu', her uruğun 'kendi beyleri (toyon)' var, hepsinin başındaki idareciye 'ulu toyon' deniyor, en kuvvetli uruğ Namaslar. Kuzeye göç XIII. yüz", p:[["1281-01-01","1632-09-25"]]},
{ad:"Yambio", lat:4.5720, lon:28.3950, cins:"kabile", yaricap_km:null, neden:"Azande Krallığı — `zende` kimliği yok; en yakın komşuyla boyamak §3.5.1 ihlali olurdu", p:[["1281-01-01","1899-01-19"],["2000-12-31",null]]},
{ad:"Yap", lat:9.5167, lon:138.1333, cins:"kabile", yaricap_km:null, neden:"Britannica, 'Micronesian culture — Social hierarchy and political organization' ve akademik kaynaklar (Yapese 'sawey' haraç ağı) — Yap, Gagil'in başrahip/şefinin tepesinde olduğu, uç adalardan haraç toplayan sıkı bir kast/haraç sistemiyle örgütlenmişti, ama tek bir merkezî DEVLET hiç kurulmadı; köyl", p:[["1281-01-01","1886-06-29"]]},
{ad:"Yeni Britanya iç kesimi", lat:-5.5000, lon:150.5000, cins:"kabile", yaricap_km:null, neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yeni Gine Batı (Kuş Başı / Vogelkop)", lat:-3.5000, lon:133.5000, cins:"kabile", yaricap_km:null, neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yeni Gine Batı (Kuş Başı / Vogelkop) 2", lat:-0.5000, lon:130.5000, cins:"kabile", yaricap_km:null, neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yeni Gine Merkezî Yaylaları", lat:-3.5000, lon:135.5000, cins:"kabile", yaricap_km:null, neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yeni Gine Merkezî Yaylaları 2", lat:-6.5000, lon:139.5000, cins:"kabile", yaricap_km:null, neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yeni Gine Merkezî Yaylaları 3", lat:-7.5000, lon:145.5000, cins:"kabile", yaricap_km:null, neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yeni Gine Merkezî Yaylaları 4", lat:-5.5000, lon:140.5000, cins:"kabile", yaricap_km:null, neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yeni Gine Merkezî Yaylaları 5", lat:-3.5000, lon:136.5000, cins:"kabile", yaricap_km:null, neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yeni Gine İç Kesimi (Güney — Fly Nehri Bataklıkları)", lat:-8.0000, lon:141.5000, cins:"kabile", yaricap_km:null, neden:"Fly Nehri bataklıkları çevresi, dış dünyayla teması çok geç kurulmuş, klan temelli kabile toplumlarının yaşadığı bir bölgedir.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yeni Gine İç Kesimi (Kuzey — Sepik Havzası)", lat:-4.5000, lon:143.5000, cins:"kabile", yaricap_km:null, neden:"Sepik Havzası, çok sayıda dilsel/klan grubunun kabile temelli yaşadığı, sömürge öncesi devlet yapısı bilinmeyen bir bölgedir.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yeni Gine İç Yaylaları (Batı — Baliem Vadisi)", lat:-4.1000, lon:138.9400, cins:"kabile", yaricap_km:null, neden:"Baliem Vadisi, Dani halkının klan temelli kabile toplumuyla yaşadığı, 1938'e kadar dış dünyaca bilinmeyen bir bölgedir; devlet yapısı hiç oluşmadı.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yeni Gine İç Yaylaları (Merkez — Mount Hagen)", lat:-5.8600, lon:144.2300, cins:"kabile", yaricap_km:null, neden:"Yeni Gine iç yaylaları, 20. yy'a kadar dış dünyayla teması olmayan, klan temelli kabile toplumlarının (ör. Hagen çevresi halkları) yaşadığı bölgedir; devlet yapısı hiç oluşmadı.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Yeni Kaledonya iç kesimi", lat:-20.5000, lon:164.5000, cins:"kabile", yaricap_km:null, neden:"Bölgede 1281-1923 arasında merkezî bir devlet kaydı yoktur; toplum klan ve köy temelli örgütlenmiştir. Sömürge idareleri (Alman, İngiliz, Hollanda, Fransız) kıyı istasyonlarından ibaretti ve iç kesimlere fiilen ulaşmamıştı — atlasın kıyı noktaları bu idareyi zaten taşıyor.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Üstyurt platosu (batı)", lat:43.8000, lon:53.5000, cins:"kabile", yaricap_km:null, neden:"Üstyurt platosu, Hârizm'in batısındaki Türkmen boylarının göç alanı olan bir bozkır-çöl yaylasıydı; boylar XVI. yy başından itibaren Hîve'ye gevşek tâbi, iç işlerinde kendi beyleriyle yönetiliyordu (KARAR-UYG-1015: eski metindeki 'devlet denetimi dışında' kaynaklarla uyuşmuyordu; 16. yy için 'Karaka", p:[["1281-01-01","1924-01-01"]]},
{ad:"Üstyurt platosu (doğu)", lat:43.5000, lon:56.5000, cins:"kabile", yaricap_km:null, neden:"Üstyurt platosunun doğu kesimi de Hârizm'e komşu Türkmen boylarının göç alanıydı; boylar Hîve'ye gevşek tâbi, iç işlerinde kendi beyleriyle yönetiliyordu (KARAR-UYG-1015: eski metindeki 'Hîve Hanlığı'nın fiilen ulaşamadığı' ifadesi kaynaklarla uyuşmuyordu — kaynaklar 'tâbi ama iç işleri serbest' der", p:[["1281-01-01","1924-01-01"]]},
{ad:"Şeşemene", lat:7.2000, lon:38.6000, cins:"kabile", yaricap_km:null, neden:"Arsi/Sidamo kuşağı — Oromo krallıklarının kimliği yok", p:[["1281-01-01","1897-01-01"],["2000-12-31",null]]},
{ad:"Apia", lat:-13.8345, lon:-171.7631, cins:"veri-yok", yaricap_km:null, neden:"1900 öncesi Samoa (Malietoa krallığı; 1889 Berlin Senedi üçlü tarafsızlık rejimi) için atlasta künye YOK; boşluk kimlik eksikliğidir, sömürge egemenliği değildir.", p:[["1281-01-01","1900-03-01"],["2000-12-31",null]]},
{ad:"Avarua (Rarotonga)", lat:-21.2075, lon:-159.7708, cins:"veri-yok", yaricap_km:null, neden:"1888 öncesi Cook Adaları için künye yok; kaynak susuyor.", p:[["1281-01-01","1888-01-01"],["2000-12-31",null]]},
{ad:"Banaba (Ocean Island)", lat:-0.8581, lon:169.5351, cins:"veri-yok", yaricap_km:null, neden:"1900 öncesi için künye yok; kaynak susuyor.", p:[["1281-01-01","1900-01-01"],["2000-12-31",null]]},
{ad:"Benin Şehri (Edo)", lat:6.3350, lon:5.6040, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — donem sinirlari KAYNAKTAN DEGIL devletler.js kunyesinden (benin-kralligi f:1180 t:1897-02-18) alindi. TDV'de Nijerya'daki Benin Kralligi'nin mustakil maddesi BULUNAMADI: `benin` slug'i canli ama modern Benin Cumhuriyeti'ni anlatiyor (CLAUDE.md §4 ikinci tuzak). Sahipsiz aralik YOK; bu bay", p:[["2000-12-31",null]]},
{ad:"Bratsk ostrogu", lat:56.2800, lon:101.7900, cins:"veri-yok", yaricap_km:null, neden:"1631 öncesi Buryat toprağı. ⚠️ İrkutsk kaydındaki Halha/Altan Han nüfuzu çekincesi burada da geçerli; `kuzey-yuan` YAZILMADI, aynı sebeple.", p:[["1281-01-01","1631-01-01"],["2000-12-31",null]]},
{ad:"Bîşe", lat:20.0005, lon:42.6052, cins:"veri-yok", yaricap_km:null, neden:"BEYANLI BOŞLUK (KARAR-UYG-1015): Lorimer Bîşe vadisi için 'but little has as yet been ascertained' der; vadide Bukum Arapları ve siyahîlerin oturduğu büyük Bîşe köyünü anar, siyasî bağlılık vermez. TDV'de bise/tarabe maddesi yok; TDV asir Bîşe'yi anmıyor (B1/KUTU-COZUM-1014). 1281-1923 arası sahipli", p:[["1281-01-01","1924-01-01"]]},
{ad:"Büyük Zimbabve", lat:-20.2670, lon:30.9330, cins:"veri-yok", yaricap_km:null, neden:"kunye-yok — 1700 sonrasi sahipsiz. Kaynak SUSMUYOR: TDV zimbabve maddesi Mutapa'nin 'XVII. yuzyilin sonlarinda Portekizliler'in gittikce artan baskisi ve Canga liderligindeki Rozvi hanedaninin yukselisiyle ortadan kalkti'gini yaziyor - yani ardil VAR ve ADI belli. Ama ne YIL veriyor ne de rozvi kuny", p:[["1700-01-01",null]]},
{ad:"Cajamarca", lat:-7.1611, lon:-78.5127, cins:"veri-yok", yaricap_km:null, neden:"1281-1465 arası bölgesel Cajamarca kültürünün siyasi örgütlenmesi standart kaynaklarda yalnız arkeolojik düzeyde ele alınıyor.", p:[["1281-01-01","1465-01-01"],["2000-12-31",null]]},
{ad:"Cenne (Djenné)", lat:13.9060, lon:-4.5550, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — UC AYRI ARALIK, ucu de BILEREK bos ve ucunun de gerekcesi AYRI. ① 1281-1473: sehir IX. yuzyildan beri var (TDV cenne) ve 1473'e kadar Songay'a gecmedi; bagimsiz bir sehir devletiydi ama Cenne icin kunye YOK. ② 1591-04-13 → 1596-01-01 (4,7 yil): Tondibi ile Cudar Pasa'nin sehri almasi aras", p:[["1281-01-01","1473-01-01"],["1591-04-13","1596-01-01"],["1700-01-01","1818-01-01"],["2000-12-31",null]]},
{ad:"Daru", lat:-9.0763, lon:143.2092, cins:"veri-yok", yaricap_km:null, neden:"İstasyonun kuruluş yılı BULUNAMADI (Australian Historical Studies 56(4), 2024 makalesinin '1890'da Daru istasyonu' cümlesi yalnız arama özetinde görüldü, gövde okunamadı — dayanak yapılmadı). 1884 öncesi için kaynak susuyor ⇒ veri-yok.", p:[["1281-01-01","1884-11-06"],["2000-12-31",null]]},
{ad:"Doğu Sibirya kıyısı (Çuvan-Yukagir)", lat:69.6462, lon:160.9149, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — 68-72°K / 152-168°D hücreleri 507-709 km uzakta; kuzey kıyı şeridi 1281'de noktasızdı. Çuvan/Yukagir için TDV ARANDI: madde YOK.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Elmina (São Jorge da Mina)", lat:5.0850, lon:-1.3490, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — sahipsiz araligi YOK; bayrak KAYNAK ALANININ YETERSIZLIGINI isaretliyor. 1637 Hollanda ve 1872 Ingiltere tarihleri TDV'den DEGIL, Nationaal Archief'ten (Hollanda Ulusal Arsivi) geliyor ve govdesi okundu: 'In 1637 komt het fort in bezit van de Hollanders' / 'tot Nederland het fort in 1872 ", p:[["1281-01-01","1482-01-01"],["2000-12-31",null]]},
{ad:"Funafuti", lat:-8.5225, lon:179.2027, cins:"veri-yok", yaricap_km:null, neden:"1892 öncesi Ellice Adaları için künye yok; kaynak susuyor.", p:[["1281-01-01","1892-01-01"],["2000-12-31",null]]},
{ad:"Gao", lat:16.2720, lon:-0.0400, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — IKI ARALIK, ikisi de BILEREK bos. ① 1281-1324: TDV gao maddesi 1324'te Songay Sultani Asibay'in Mali'ye biat ettigini yaziyor, yani 1281'de bir Songay devleti VARDI; ama songhay-imparatorlugu kunyesi f:1464. Kunye penceresi DAR, bilgi eksik DEGIL. ② 1700 → 1898 (198 yil): Arma pasaligi ve", p:[["1700-01-01","1898-01-01"],["2000-12-31",null]]},
{ad:"Garapan (Saipan)", lat:15.1910, lon:145.7467, cins:"veri-yok", yaricap_km:null, neden:"1668 öncesi için kaynak susuyor.", p:[["1281-01-01","1668-06-16"],["2000-12-31",null]]},
{ad:"Hagåtña (Agaña)", lat:13.4748, lon:144.7516, cins:"veri-yok", yaricap_km:null, neden:"1668 öncesi Chamorro köyü; Marianalar için künye yok, kaynak susuyor.", p:[["1281-01-01","1668-06-16"],["2000-12-31",null]]},
{ad:"Jaluit (Jabor)", lat:5.8533, lon:169.6341, cins:"veri-yok", yaricap_km:null, neden:"1885 öncesi Marshall Adaları için künye yok; kaynak susuyor.", p:[["1281-01-01","1885-10-15"],["2000-12-31",null]]},
{ad:"Kabasa", lat:-9.3000, lon:15.1500, cins:"veri-yok", yaricap_km:null, neden:"ndongo künyesi 1500'de başlıyor (ÖLÇÜLDÜ: 1500/1518 muhtemelen Portekiz'in ilk BELGELENMİŞ teması, krallığın kendisi muhtemelen daha erken Kongo'ya bağlı bir eyalet olarak vardı — net bir alternatif tarih kaynaklarda YOK, künyeye dokunmadım)", p:[["1281-01-01","1500-01-01"],["2000-12-31",null]]},
{ad:"Kamçatka (İtelmen toprakları)", lat:55.0000, lon:158.5000, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — 1281'de yarımadada sahnede nokta YOK (Petropavlovsk kur:1740) ve §2 gereği 642-751 km öteden emiliyordu. İtelmen için TDV ARANDI (16 Ağu): madde YOK, yalnız Asya ve samanizm içinde geçiyor. Akademik literatür aranmadı.", p:[["1281-01-01","1697-01-01"]]},
{ad:"Kasai havzası", lat:-5.0000, lon:22.5000, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — kaynak SUSUYOR. Bolgenin bilinen iki devleti kuba (kunye f:1625) ve lunda (f:1665); ikisi de 1281'den ~350 yil SONRA. Oncesi icin TDV'de de kunyede de bilgi YOK. DOLGU NOKTASIDIR.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Kolıma havzası (Yukagir toprakları)", lat:66.0000, lon:152.0000, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — 64°K/152°D hücresi en yakın 1281 noktasına 555 km. Yukagir için TDV ARANDI (16 Ağu): madde YOK. Akademik literatür aranmadı.", p:[["1281-01-01","1924-01-01"]]},
{ad:"Koryak toprakları", lat:62.0000, lon:166.0000, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — kaynak Koryakların Rusya'ya tâbilik/haraç ilişkisini netleştirmiyor; yalnız 1769-70 kıtlık/çatışma kaybı ve 1931 Sovyet idaresi kuruluşu biliniyor", p:[["1281-01-01","1924-01-01"]]},
{ad:"Malebo Havuzu (Teke)", lat:-4.2700, lon:15.3500, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — kaynak SUSUYOR. TDV kongo-demokratik-cumhuriyeti maddesi 13.-14. yuzyil siyasi yapisini tartismiyor; Teke/Tio krallığını hic anmiyor. DOLGU NOKTASIDIR. ⚠️ VE BURADA BIR CELISKI VAR ve onu COZMUYORUM — ayni TDV maddesi 'XIII. yuzyilda Atlas Okyanusu sahilinde kurulan Kongo Kralligi' diyor,", p:[["1281-01-01","1924-01-01"]]},
{ad:"Mapungubwe", lat:-22.1940, lon:29.3890, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — arandi, YOK. TDV zimbabve maddesinin govdesi okundu ve Mapungubwe'yi HIC anmiyor (Nyanga ve Gokomere yerlesimlerini sayiyor, bunu saymiyor); baska bir TDV maddesi de bulunamadi. Devletsiz OLDUGU soylenmiyor, hic soz edilmiyor. 'Aramadim' DEGIL, 'aradim ve yok' - bu bir SONUCTUR. UYARI: PE", p:[["1281-01-01","1320-01-01"]]},
{ad:"Mengo (Buganda)", lat:0.3480, lon:32.5830, cins:"veri-yok", yaricap_km:null, neden:"kunye-yok — sahipsiz araligi YOK, bu bayrak bir KUNYE CELISKISINI isaretliyor: TDV uganda maddesi Buganda'nin ilk krali Kato Kimera'nin XIII. yuzyil BASINDA tahta ciktigini soyluyor, yani 1281'de kralik VARDI; ama buganda kunyesi f:1300-01-01. §3.5 geregi kunyeye uydum (kur:1300), boylece TDV'nin 12", p:[["1281-01-01","1300-01-01"],["2000-12-31",null]]},
{ad:"Nauru (Yaren)", lat:-0.5471, lon:166.9163, cins:"veri-yok", yaricap_km:null, neden:"1888 öncesi Nauru için künye yok; kaynak susuyor.", p:[["1281-01-01","1888-10-01"],["2000-12-31",null]]},
{ad:"Niani", lat:11.3830, lon:-8.6670, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — 1670 sonrasi sahipsiz: mali-imparatorlugu kunyesi 1670'te bitiyor, ardili (Bambara Segu / Kaarta / Toucouleur) icin devletler.js'te KUNYE YOK. Kaynak SUSMUYOR (TDV mali maddesi bu devletleri sayiyor) ama dizinimiz onlari tanimiyor. Ayrica Niani'ye ozel Fransiz fetih tarihi bulunamadi; TDV", p:[["1670-01-01",null]]},
{ad:"Ogooué havzası", lat:-0.7000, lon:12.0000, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — 1281-1837 arasi sahipsiz ve gerekcesi OLCULDU: TDV gabon maddesinin govdesi okundu ve somurge oncesi siyasi orgutlenme icin ACIKCA SUSUYOR (Ogooue havzasinda krallik/seflik anmiyor, Orungu'yu hic kurmuyor). Devletsiz OLDUGU soylenmiyor, bilinmedigi soyleniyor. loango kunyesi f:1550, 1281 ", p:[["1281-01-01","1837-01-01"],["2000-12-31",null]]},
{ad:"Oranj (Bur cumhuriyeti)", lat:-29.1200, lon:26.2140, cins:"veri-yok", yaricap_km:null, neden:"kunye-yok — oranj kunyesi devletler.js'te YOK. Transvaal kaydiyla ayni gerekce: kur:1830 Buyuk Goc'un yili ve tur alani bolge, cunku Bloemfontein'in kurulus yili TDV'de yok. UYARI: PENCERE DISINDA (lat -29,120).", p:[["1281-01-01","1830-01-01"],["2000-12-31",null]]},
{ad:"Oyo-İle (Eski Oyo)", lat:8.9830, lon:4.3830, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — kur:1400 ve donem sinirlari KAYNAKTAN DEGIL oyo-imparatorlugu kunyesinden alindi; TDV'de `oyo` ve `yoruba` sluglari OLU (302) ve baska maddede Oyo-Ile'nin kurulus/terk yili BULUNAMADI. 1836 sonrasi sahipsiz: sehir terk edildi ama terk yili icin kaynak yok, o yuzden bit: yazilmadi.", p:[["1281-01-01","1400-01-01"],["1836-01-01",null]]},
{ad:"Pago Pago", lat:-14.2755, lon:-170.7048, cins:"veri-yok", yaricap_km:null, neden:"1900 öncesi Tutuila için atlasta künye YOK (Samoa krallığı / 1889 Berlin Senedi).", p:[["1281-01-01","1900-04-17"],["2000-12-31",null]]},
{ad:"Papeete", lat:-17.5374, lon:-149.5660, cins:"veri-yok", yaricap_km:null, neden:"1842 öncesi Tahiti (Pomare krallığı) için atlasta künye YOK — boşluk kimlik eksikliğidir.", p:[["1281-01-01","1842-09-09"],["2000-12-31",null]]},
{ad:"Penjina havzası (kuzey Koryak)", lat:61.1723, lon:156.4398, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — 60°K/156°D hücresi en yakın 1281 noktasına 576 km. Kamçatka boynu ile Koryak yaylası arasındaki şerit noktasızdı. Koryak için TDV ARANDI: madde YOK.", p:[["1281-01-01","1709-01-01"]]},
{ad:"Quito", lat:-0.2299, lon:-78.5249, cins:"veri-yok", yaricap_km:null, neden:"1281-1487 arası Quitu-Cara/Caranqui konfederasyonunun siyasi yapısı hakkında akademik kaynak bu taneciklikte konuşmuyor.", p:[["1281-01-01","1487-01-01"],["2000-12-31",null]]},
{ad:"Segu (Ségou)", lat:13.4320, lon:-6.2160, cins:"veri-yok", yaricap_km:null, neden:"kunye-yok — 1712-1898 arasi sahipsiz. Kaynak KONUSUYOR ve iki ayri devlet adiyla saydiyor: Bambara Kralligi (TDV el-hac-omer: '1861 baslarinda bir baska Bambara Kralligi olan Segu'ya girilerek Segu'nun animist kralligi ortadan kaldirildi') ve Toucouleur/Tekrur (el-Hac Omer, 1852 cihad, olumu 1864-02", p:[["1712-01-01","1898-01-01"],["2000-12-31",null]]},
{ad:"Selenginsk", lat:51.1000, lon:106.6000, cins:"veri-yok", yaricap_km:null, neden:"1665 öncesi Buryat/Halha sınır bozkırı; hangi tarafta olduğu tanımsızdı ve tanımsızlık uydurulmadı. Sınır 1727-10-21 Kyahta antlaşmasıyla çizildi ama Rus ostrogu 1665'ten beri orada.", p:[["1281-01-01","1665-01-01"],["2000-12-31",null]]},
{ad:"Tarawa (Bairiki)", lat:1.3375, lon:173.0117, cins:"veri-yok", yaricap_km:null, neden:"1892 öncesi Gilbert Adaları için künye yok; kaynak susuyor.", p:[["1281-01-01","1892-05-27"],["2000-12-31",null]]},
{ad:"Transvaal (Bur cumhuriyeti)", lat:-25.7460, lon:28.1880, cins:"veri-yok", yaricap_km:null, neden:"kunye-yok — transvaal kunyesi devletler.js'te YOK (koordinator M-0218'de yazacagini soyledi). Sahipsiz araligi yok. kur:1830 Buyuk Goc'un baslangicidir, CUMHURIYETIN kurulus yili DEGIL - TDV cumhuriyetlerin kurulus yillarini vermiyor. tur:bolge cunku Pretoria'nin kurulus yili da yok. UYARI: PENCERE ", p:[["1281-01-01","1830-01-01"],["2000-12-31",null]]},
{ad:"Tumbes", lat:-3.5669, lon:-80.4515, cins:"veri-yok", yaricap_km:null, neden:"İnka öncesi Tumbes'in siyasi bağlılığı (Chimú/bağımsız yerel kasikalık) kaynaklarda net ayrılmıyor.", p:[["1281-01-01","1470-01-01"],["2000-12-31",null]]},
{ad:"Ubangi-Uele havzası", lat:3.5000, lon:22.0000, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — kaynak SUSUYOR. TDV kongo-demokratik-cumhuriyeti maddesinin bu kusakta verdigi tek sey Mangbetu Kralligi (1815) — yani 1281'den 534 yil sonrasi. DOLGU NOKTASIDIR. Kuzeydeki komsulari (Yambio, Tembura, Maridi) `kabile` kovasinda; ben `veri-yok` yazdim cunku kaynagim bu havza icin KONUSMUYO", p:[["1281-01-01","1924-01-01"]]},
{ad:"Ulundi (Zululand)", lat:-28.3130, lon:31.4160, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — sahipsiz araligi YOK; bayrak KAYNAK eksigini isaretliyor. TDV guney-afrika-cumhuriyeti maddesi Zulu direnisini aniyor ama Shaka'yi da Ulundi Muharebesi'ni de TARTISMIYOR (govdesi okundu, olctum). Zulu donemi bu yuzden kaynak:bulunamadi; sinirlari zulu-kralligi kunyesinden (f:1816 t:1879-0", p:[["1281-01-01","1816-01-01"],["2000-12-31",null]]},
{ad:"Upemba (Kisale) havzası", lat:-8.4500, lon:26.5500, cins:"veri-yok", yaricap_km:null, neden:"veri-yok — TDV'nin okuyabildigim maddeleri (kongo-demokratik-cumhuriyeti, zaire) bu havzanin 1281 civarindaki siyasi orgutlenmesini HIC TARTISMIYOR; Luba'yi yalniz 'XVI. yuzyila kadar hukum surdu' diye aniyor, oncesi icin SUSUYOR. Bizim luba kunyemiz de f:1585. Devletsiz OLDUGU soylenmiyor, bilinmed", p:[["1281-01-01","1924-01-01"]]},
{ad:"Valata (Oualata)", lat:17.3000, lon:-7.0330, cins:"veri-yok", yaricap_km:null, neden:"kunye-yok — 1430 sonrasi sahipsiz. TDV mali maddesi sehri 1430'da Tevarikler'in (Tuareg) aldigini ACIKCA soyluyor, yani kaynak KONUSUYOR ve bir siyasi guc VAR; ama Tuareg icin devletler.js'te kunye yok. Bu ne devletsiz ne veri-yok: dizin eksigi. Fransiz Moritanya donemi icin de kaynakli tarih buluna", p:[["1430-01-01",null]]},
{ad:"Vanimo", lat:-2.6817, lon:141.3028, cins:"veri-yok", yaricap_km:null, neden:"Kuruluş yılı BULUNAMADI. S.S. Mackenzie, The Australians at Rabaul (AWM Resmî Tarih c. X), bl. XVIII yerin 1915-16'da var olduğunu gösteriyor: \"from Wanimo (a trading and recruiting outpost of the New Guinea Company) on Angriff's Harbour, a road runs…\". '1918 devriye karakolu' iddiası yalnız içerik ", p:[["1281-01-01","1884-11-03"],["2000-12-31",null]]},
{ad:"İfe (Ile-Ife)", lat:7.4670, lon:4.5670, cins:"veri-yok", yaricap_km:null, neden:"kunye-yok — Ife 1281'de mevcut ve Yoruba dunyasinin merkezi bir kralligiydi; kaynak SUSMUYOR. Ama devletler.js'te `ife` kunyesi YOK, o yuzden §3.5 geregi hicbir kimlik yazilmadi. oyo-imparatorlugu (f:1400) buraya yazilamaz: hem 1281'de yok hem baska devlet. KOORDINATORE ISTEK: ife kunyesi.", p:[["1281-01-01","1924-01-01"]]},
{ad:"İrkutsk", lat:52.2870, lon:104.2810, cins:"veri-yok", yaricap_km:null, neden:"1661 öncesi Buryat toprağı. ⚠️ Halha/Altan Han nüfuzu tartışılabilir; `kuzey-yuan` YAZILMADI çünkü kaynakla ayıramadım — bilgisizliği kasıt gibi göstermemek için boş bırakıldı (girdi.py'nin `kasitli_bosluk` notu).", p:[["1281-01-01","1661-01-01"],["2000-12-31",null]]},
];

;
/* ==== data/yerlesimler_amerika.js ==== */
// 🔴 4 EKİM 2026 — 3 Taino cacicazgosundan `kur:"1281-01-01"` SİLİNDİ
//    (Jaragua · Higüey · Camagüey). ONCE1281-KUR191'in süzgeci bunları
//    KAÇIRMIŞTI: süzgeç "ilk sahiplik 1281 VE kur dolu" kesişimiydi, bu
//    üçünün ilk SAHİBİ ise 1503/1504/1514 İspanya. Sınıf AYNI (ufuk
//    tabanı, kaynak YOK), sayı 191 değil 194.
// 🔴 AYNI GÜN, EKSİK KALAN YÜZ — silme GERİYE doğru NÖTR DEĞİLDİR:
//    kur VARKEN  g=1000'de nokta YOK · kur YOKKEN g=1000 ve g=-5000'de VAR.
//    Yani bu kayıtlar artık "ezelden beri var". Taino (~600-1500), Inuit,
//    Xhosa yerleşimleri için bu kur:1281 kadar yanlıştır — ÖBÜR YÖNE.
//    ⇒ 1281 ÖNCESİ KAMPANYANIN İKİNCİ KAPISI: her nokta için ya KAYNAKLI
//      bir kur yazılacak, ya o nokta kapsam dışı bırakılacak. Ufuk geriye
//      açılmadan bu kapı kapanmalı. (ONCE1281-KUR191 bu yüzü ölçmemişti.)
// ============================================================================
// YERLEŞİM VERİ SETİ — AMERİKA KITASI  (Oturum: NOKTA AMERİKA, 13 Ağustos 2026)
// ============================================================================
// data/yerlesimler.js ile AYNI ŞEMA. Ayrı dosya olmasının tek sebebi oturumlar
// arası dosya çakışmasını önlemektir; entegrasyon oturumu YERLESIMLER dizisiyle
// birleştirecektir. Alan sözlüğü: VERI-YAPISI.md. Görev tanımı: oturumlar/NOKTA-AMERIKA.md
//
// ---------------------------------------------------------------------------
// BU DOSYANIN SEBEBİ
// ---------------------------------------------------------------------------
// 13 Ağustos 2026 ölçümü: 2369 noktalık evrende AMERİKA 0 nokta taşıyordu —
// haritanın en büyük tek boşluğu. Bu dosya dört paralel araştırma turunun
// (Mezoamerika · And+Güney Amerika · Kuzey Amerika · Karayipler+Río de la
// Plata) birleştirilmiş ve çapraz kontrolden geçirilmiş çıktısıdır.
//
// TOPLAM: 134 nokta (hedef 120-180 içinde, node.js ile doğrulandı).
//   Mezoamerika          36   (23 hazır kimlikle + 13 kimlik-önerisi bekliyor)
//   And / Güney Amerika  37   (dedup sonrası — bkz. aşağı)
//   Kuzey Amerika        36
//   Karayipler + RdlP    25   (26 araştırıldı, "Santa Fe" ad çakışması ayrıştırıldı,
//                              üç şehrin And ekibi kopyası atıldı — bkz. aşağı)
//
// ---------------------------------------------------------------------------
// 🔴 ÇAPRAZ KONTROLDE BULUNAN 3 MÜKERRER — ÇÖZÜLDÜ
// ---------------------------------------------------------------------------
// And/Güney Amerika ekibi VE Karayipler ekibi aynı üç şehri (Asunción,
// Montevideo, Córdoba/Arjantin) BAĞIMSIZ olarak yazmıştı — görev bölüşümü
// Río de la Plata sınırını net çizmemişti (orkestratörün hatası, işçilerin
// değil). Karayipler ekibinin versiyonu tercih edildi çünkü bölgenin kendi
// uzmanlık alanıydı ve 1810-1828 arası İspanya→Arjantin→Portekiz→Brezilya
// İmparatorluğu→Uruguay geçişini And ekibinden daha ayrıntılı/doğru
// modelliyordu (And ekibi kendi versiyonunu "AŞIRI BASİTLEŞTİRME" diye
// zaten işaretlemişti). And ekibinin bu üç şehir için ürettiği veri ATILDI,
// geri kalan 37 nokta korundu.
//
// ---------------------------------------------------------------------------
// 🔴🔴 KİMLİK BORCU — BU DOSYA BAĞLANMADAN ÖNCE data/devletler.js'E EKLENMELİ
// ---------------------------------------------------------------------------
// 32 nokta, data/devletler.js'te HENÜZ TANIMLI OLMAYAN bir `d:` kimliği
// kullanıyor (aşağıda her biri `// ÖNERİLEN KİMLİK` yorumuyla işaretli).
// Tam öneri listesi (devletler.js formatında taslak kayıtlar):
// oturumlar/NOKTA-AMERIKA-ILERLEME.md
//
// Bu noktalar YAZILDI (yazılmamak yerine) çünkü: (a) her biri akademik
// kaynakla desteklendi, (b) kimliği yokken noktayı hiç yazmamak, koca bir
// kıtanın bağımsızlık-sonrası dönemini (1810-1923, ~110 yıl) tamamen boş
// bırakmak demekti — CLAUDE.md §2'nin "noktası olmayan bölge en yakın
// peteğe emilir" uyarısının TAM KENDİSİ. (c) dosya `arac/girdi.py`'ye
// KOORDİNATÖR tarafından bağlanacak (§③) — yani üretim koşusuna girmeden
// önce kimlikler eklenebilir. Motor bir `s:` kimliği BOYALAR'da yoksa o
// bölgeyi sessizce boyamaz (VERI-YAPISI.md) — yani kimlik eksikken bağlanırsa
// KAZA değil, görünmez kalır; yine de ÖNCE devletler.js'e eklenmesi gerekir.
//
// 32 önerilen kimlik, beş grupta:
//   Kuzey Amerika (9): haudenosaunee, powhatan, cahokia, natchez,
//     creek-konfederasyonu, cherokee, choctaw, teksas-cumhuriyeti,
//     pueblo-bagimsizligi (13 Ağustos, Değişmez 1b denetiminde EKLENDİ —
//     Taos/Acoma/Santa Fe'nin 1680-1692 Pueblo İsyanı boşluğunu kapatır)
//   Mezoamerika (5): nahua-sehir-devletleri, purepecha-imparatorlugu,
//     zapotek-krallik, tututepec-krallik, guatemala
//   And/G.Amerika Kolomb-öncesi (6): chimu-krallik, colla-krallik,
//     lupaqa-krallik, muisca-konfederasyonu, mapuche-araukanya,
//     diaguita-calchaqui-konfederasyonu
//   Bağımsızlık-sonrası cumhuriyetler (12): peru-cumhuriyeti,
//     bolivya-cumhuriyeti, sili-cumhuriyeti, arjantin-cumhuriyeti,
//     paraguay-cumhuriyeti, uruguay-cumhuriyeti, venezuela-cumhuriyeti,
//     kolombiya-cumhuriyeti, ekvador-cumhuriyeti, brezilya-cumhuriyeti,
//     dominik-cumhuriyeti, kuba-cumhuriyeti
//
// ⚠️ İSİM TUTARLILIĞI DÜZELTİLDİ: iki araştırma ekibi aynı kimlikler için
// farklı id önerdi (örn. "arjantin" vs "arjantin-cumhuriyeti"). Bu dosyada
// TEK canonик isim kullanıldı (-cumhuriyeti soneki tutarlı uygulandı).
//
// ⚠️ "kuba-cumhuriyeti" — id KASTEN "kuba" DEĞİL: devletler.js'te "kuba" id'si
// ZATEN VAR (Orta Afrika'daki Kuba Krallığı, satır ~3272). Çakışma önlendi.
// ⚠️ "fransa-cumhuriyet" — bu kimlik devletler.js'te ZATEN VAR (satır 780,
// 1792 sonrası Fransa), YENİ ÖNERİ DEĞİL, doğrudan kullanılabilir.
//
// ---------------------------------------------------------------------------
// ⚠️ BİLİNEN AÇIK SINIRLAR — veri sahibine/entegrasyona bırakılan kararlar
// ---------------------------------------------------------------------------
// 1. CAHOKIA'nın 1350 sonrası "sahipsizliği": site fiilen terk edildi, ama
//    şemada bunu ifade edecek net bir alan yok. Nokta 1350'de `s:` dizisini
//    bitiriyor — motor bunu nasıl işler (nokta kaybolur mu) kontrol edilmeli.
//    (Bu KASTEN böyle bırakıldı — Değişmez 1'in 180 kasıtlı-sahipsiz tavanına
//    benzer bir "yerleşim sona erdi" durumu, iç boşluk DEĞİL.)
// 2. 🟢 KAPATILDI (13 Ağustos, Değişmez 1b denetiminde bulunan 3 iç boşluktan
//    biri) — Pueblo İsyanı boşluğu (Taos/Acoma/Santa Fe, 1680-08-10→1692-08-01,
//    ~12 yıl) artık "pueblo-bagimsizligi" (YENİ ÖNERİLEN KİMLİK) ile dolu.
// 3. Novoarkhangelsk/Sitka (1799-1804 arası ~2 yıllık Tlingit kesintisi):
//    veri sürekli "rusya" yazıldı, kesinti yalnız yorumla işaretlendi. AÇIK.
// 4. 🟢 KAPATILDI (aynı denetimde bulunan diğer 2 iç boşluk) — New Orleans
//    (1800-10-01→1803-04-30, "ispanya" ile birleştirildi, kimlik ömrü
//    aşılmadı) ve San Antonio (1836-1845, "teksas-cumhuriyeti" ile dolduruldu).
// 5. Rio de la Plata'nın 1776 öncesi (Buenos Aires/Asunción/Córdoba/Santa
//    Fe/Corrientes/Mendoza) idari olarak Peru Genel Valiliği'ne bağlıydı —
//    "ispanyol-peru" kimliği bu yüzden kullanıldı (coğrafi değil idari bağ).
// 6. Colonia del Sacramento'nun 1680-1777 arası BEŞ el değiştirmesi
//    (Portekiz⇄İspanya) tarihsel olarak doğrulanmış ama yalnız yıl
//    hassasiyetinde — gün akademik kaynaklarda çoğunlukla yok.
//
// 🔴 DENETİM DURUMU (13 Ağustos, ilk motor koşusu sonrası): Değişmez 1b 5 iç
// boşluk bulmuştu — 5'i de yukarıda. 3'ü (Pueblo × 2 nokta grubu + New Orleans
// + San Antonio = aslında 4 nokta, 3 farklı olay) KAPATILDI, 1'i (Sitka) AÇIK
// kaldı (kasıtlı — kaynak "ispanya" ile devam eder diyor, kesintiyi ayrı
// dönem olarak modellemek gerekmiyor gibi görünüyor ama kesin karar entegrasyona
// bırakıldı). Değişmez 1'in 203/180 fazlası: yeni "pueblo-bagimsizligi" ve
// "teksas-cumhuriyeti" kimlikleri devletler.js'e eklenip motor yeniden
// koşana kadar bu sayı değişmeyecek — kimlikler eklenince otomatik düşer.
//
// ---------------------------------------------------------------------------
// KAYNAK DİSİPLİNİ
// ---------------------------------------------------------------------------
// TDV İslâm Ansiklopedisi'nin `amerika` maddesi (2 bölüm: T. Ahmet Ertek
// coğrafya, Rıza Kurtuluş tarih) önce kontrol edildi — İnka/Aztek/Meksika/
// Brezilya için devletler.js'e zaten işlenmiş ANA HATLARI doğruluyor, ama
// şehir/nokta taneciğinde TDV susuyor (§4 "taneciklik boşluğu"). Bu yüzden
// HER nokta akademik standart kaynakla (Cambridge History serileri, üniversite
// yayınları, alanın standart el kitapları — Hemming, D'Altroy, Michael E.
// Smith, Pauketat, Richter, Weber, Taylor, Eccles, Hudson, Stanish, Dillehay,
// Moya Pons, vb.) kaynaklandı. Her nokta/grubun altında `// kaynak:` satırı
// var. Hiçbir tarih uydurulmadı — gün bilinmiyorsa YYYY-01-01.
// ============================================================================

window.YERLESIMLER_AMERIKA = [

// ============================================================================
// 1) MEZOAMERİKA
// ============================================================================

// ---------- Aztek Üçlü İttifak başkentleri ----------

{ ad:"Tenochtitlan (Mexico City)", tur:"sehir", lat:19.4326, lon:-99.1332, g:2, k:1,
  kur:"1325-01-01",
  s:[{f:"1325-01-01",t:"1428-01-01",d:"aztek-imparatorlugu"},
     {f:"1428-01-01",t:"1521-08-13",d:"aztek-imparatorlugu"},
     {f:"1521-08-13",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: TDV İslâm Ansiklopedisi "amerika" md. (1325 kuruluş, 1519-1521 fetih);
//         Michael E. Smith, "The Aztecs" (3. bs. 2012), s. 43-51.
// k gerekçesi: imparatorluk başkenti, Triple Alliance'ın baskın ortağı — k:1
// NOT: 1325-1428 arası basitleştirme — bkz. dosya başı ve "nahua-sehir-devletleri" önerisi.

{ ad:"Texcoco", tur:"sehir", lat:19.5039, lon:-98.8823, g:2, k:1,
  s:[{f:"1281-01-01",t:"1428-01-01",d:"aztek-imparatorlugu"},
     {f:"1428-01-01",t:"1521-08-13",d:"aztek-imparatorlugu"},
     {f:"1521-08-13",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Pedro Carrasco, "The Tenochca Empire of Ancient Mexico" (Univ. of Oklahoma Press, 1999).
// k gerekçesi: Acolhua başkenti, İttifak'ın eş-kıdemli ortağı — k:1

{ ad:"Tlacopan (Tacuba)", tur:"sehir", lat:19.4578, lon:-99.1867, g:1, k:2,
  kur:"1400-01-01",
  s:[{f:"1400-01-01",t:"1428-01-01",d:"aztek-imparatorlugu"},
     {f:"1428-01-01",t:"1521-08-13",d:"aztek-imparatorlugu"},
     {f:"1521-08-13",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Carrasco (1999) — Tlacopan haraç payı yalnız 1/5, İttifak'ın en zayıf ortağı.
// k gerekçesi: kademece Tenochtitlan/Texcoco'nun altında — k:2

// ---------- Bağımsız Nahua şehir devletleri (ÖNERİLEN KİMLİK: nahua-sehir-devletleri) ----------

{ ad:"Tlaxcala", tur:"sehir", lat:19.3182, lon:-98.2375, g:1, k:1,
  s:[{f:"1281-01-01",t:"1521-08-13",d:"nahua-sehir-devletleri"},
     {f:"1521-08-13",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Charles Gibson, "Tlaxcala in the Sixteenth Century" (Yale Univ. Press, 1952) —
//         alan literatüründe evrensel referans. Dört altepetl konfederasyonu, HİÇBİR ZAMAN
//         Aztek'e fethedilmedi; 1519'da Cortés'e müttefik oldu.
// k gerekçesi: bağımsız konfederasyonun idari merkezi, hiç fethedilmedi — k:1

{ ad:"Cholula", tur:"sehir", lat:19.0631, lon:-98.3037, g:1, k:2,
  s:[{f:"0500-01-01",t:"0700-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Evans 2001 s.139-141, McCafferty 1996/2008 özeti ve Pohl (FAMSI) aracılığıyla Vikipedi okundu; Cholula Büyük Piramit'in 300 MÖ'den beri kullanıldığı, MS 600-700 arasında büyük bir bölgesel merkeze dönüştüğü yazılı ama 500-700 arası siyasi sahibi (devlet/hanedan) kaynaklarda yok. Abi merkez (⑤): Teotihuacan etkisi arkeolojik olarak tartışmalı, siyasi bağ gösteren kaynak bulunamadı → yaklaşıklık yazılmadı. f=0500 UFUK SINIR İŞARETİDİR. · DOGU-500-1281"},{f:"0700-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: sahip cholula (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"cholula\" geri yazılır) · Susan Toby Evans, Ancient Mexico and Central America, 2001, s.139-141 (Tlachihualtepetl evresi CE 700-1200; Olmeca-Xicalanca ele geçişi evre içinde; 'In CE 1200, ethnic Tolteca-Chichimeca conquered Cholula' — atıf; kitap AÇILMADI; Vikipedi aracılığıyla) | BEYANLI YAKLAŞIKLIK: 700 evre başı alt sınırdır; 1200 fethi aynı şehir-devletin (cholula künyesi) etnik sahip değişimidir, harita sahibi değişmez. · DOGU-500-1281"},{f:"1281-01-01",t:"1519-10-18",d:"nahua-sehir-devletleri"},
     {f:"1519-10-18",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: çoklu akademik kaynak — 18 Ekim 1519 Cholula Katliamı. Aztek'e TAM bağlılık
//         statüsü net değil, bu yüzden Aztek alt-dönemi hiç iddia edilmedi.
// k gerekçesi: büyük dini/ticari hac merkezi — k:2

{ ad:"Cempoala (Zempoala)", tur:"sehir", lat:19.4139, lon:-96.3925, g:1, k:2,
  s:[{f:"1281-01-01",t:"1519-07-01",d:"nahua-sehir-devletleri"},
     {f:"1519-07-01",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: çoklu akademik kaynak — Totonak merkezi, Temmuz 1519'da Cortés'e katıldı.
// k gerekçesi: Totonak bölgesel merkezi, Cortés'in ilk büyük yerli müttefiki — k:2

{ ad:"Huexotzinco (Huejotzingo)", tur:"sehir", lat:19.1517, lon:-98.4033, g:0, k:2,
  s:[{f:"1281-01-01",t:"1521-08-13",d:"nahua-sehir-devletleri"},
     {f:"1521-08-13",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: "The Huexotzinco Codex" (akademik neşri Univ. of Utah Press, 1974).
// k gerekçesi: bağımsız Nahua şehir devleti, Tlaxcala'dan küçük — k:2

{ ad:"Xochimilco", tur:"sehir", lat:19.2647, lon:-99.1031, g:0, k:3,
  s:[{f:"1281-01-01",t:"1430-01-01",d:"nahua-sehir-devletleri"},
     {f:"1430-01-01",t:"1521-08-13",d:"aztek-imparatorlugu"},
     {f:"1521-08-13",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: akademik özet — Tenochtitlan 1430'da fethetti (yaklaşık).
// k gerekçesi: 1430'dan itibaren Aztek'e tâbi haraç ödeyen altepetl — k:3

{ ad:"Chalco", tur:"sehir", lat:19.2667, lon:-98.8833, g:0, k:3,
  s:[{f:"1281-01-01",t:"1465-01-01",d:"nahua-sehir-devletleri"},
     {f:"1465-01-01",t:"1521-08-13",d:"aztek-imparatorlugu"},
     {f:"1521-08-13",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: akademik özet — Moctezuma I ~1465'te fethetti (yaklaşık).
// k gerekçesi: 1465'ten itibaren Aztek'e tâbi — k:3

{ ad:"Tepeaca", tur:"sehir", lat:18.9667, lon:-97.9000, g:0, k:3,
  s:[{f:"1281-01-01",t:"1466-01-01",d:"nahua-sehir-devletleri"},
     {f:"1466-01-01",t:"1520-09-04",d:"aztek-imparatorlugu"},
     {f:"1520-09-04",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Cortés'in "İkinci Mektubu" (30 Ekim 1520) — Cortés 4 Eylül 1520'de burada
//         "Villa de Segura de la Frontera"yı kurarak Tenochtitlan düşmeden Aztek denetimine son verdi.
// k gerekçesi: 1466'dan itibaren Aztek'e tâbi sınır garnizonu — k:3

// ---------- Purépecha (Tarasca) İmparatorluğu (ÖNERİLEN KİMLİK: purepecha-imparatorlugu) ----------

{ ad:"Tzintzuntzan", tur:"sehir", lat:19.6167, lon:-101.5833, g:2, k:1,
  kur:"1300-01-01",
  s:[{f:"1300-01-01",t:"1530-02-14",d:"purepecha-imparatorlugu"},
     {f:"1530-02-14",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Helen Perlstein Pollard, "Taríacuri's Legacy: The Prehispanic Tarascan State"
//         (Univ. of Oklahoma Press, 1993) — alanın standart akademik monografisi.
// k gerekçesi: imparatorluk başkenti — k:1

{ ad:"Pátzcuaro", tur:"sehir", lat:19.5138, lon:-101.6070, g:1, k:2,
  kur:"1325-01-01",
  s:[{f:"1325-01-01",t:"1530-02-14",d:"purepecha-imparatorlugu"},
     {f:"1530-02-14",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: "Relación de Michoacán" (1540, Fray Jerónimo de Alcalá) — birincil kaynak.
// k gerekçesi: kurucu üç şehirden biri, dini merkez — k:2

{ ad:"Ihuatzio", tur:"sehir", lat:19.5667, lon:-101.6167, g:0, k:2,
  kur:"1325-01-01",
  s:[{f:"1325-01-01",t:"1530-02-14",d:"purepecha-imparatorlugu"},
     {f:"1530-02-14",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: "Relación de Michoacán" — kurucu üç şehirden biri, asilzade/askeri merkez.
// k gerekçesi: kurucu üç şehirden biri, Tzintzuntzan'ın gölgesinde — k:2

// ---------- Mixtek / Zapotek (ÖNERİLEN KİMLİK: zapotek-krallik, tututepec-krallik) ----------

{ ad:"Zaachila", tur:"sehir", lat:16.9833, lon:-96.7500, g:1, k:1,
  s:[{f:"1281-01-01",t:"1523-01-01",d:"zapotek-krallik"},
     {f:"1523-01-01",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Joyce Marcus & Kent V. Flannery, "Zapotec Civilization" (Thames & Hudson, 1996).
// k gerekçesi: son Zapotek başkenti — k:1

{ ad:"Mitla", tur:"sehir", lat:16.9200, lon:-96.3583, g:1, k:2,
  s:[{f:"1281-01-01",t:"1523-01-01",d:"zapotek-krallik"},
     {f:"1523-01-01",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Marcus & Flannery (1996) — Monte Albán kadar eski, hiç terk edilmedi.
// k gerekçesi: büyük dini merkez, idari başkent Zaachila'nın altında — k:2

{ ad:"Tututepec (Yucu Dzaa)", tur:"sehir", lat:16.1517, lon:-97.6156, g:1, k:1,
  s:[{f:"1100-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"onyil",kaynak:"BOŞLUK BEYANI: sahip tututepec (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"tututepec\" geri yazılır) · Arthur A. Joyce, «Mixtec Empire», Univ. of Colorado Boulder, 2016 (colorado.edu/rioverdearchaeology/.../joyce_2016a.pdf; pdftotext ile okundu): \"Archaeological and ethnohistoric sources indicate that the founding of Tututepec was the result of the arrival of highland Mixtecs into the lower Verde region at about 1100 CE\" | Arthur A. Joyce, «Mixtec Empire», Univ. of Colorado Boulder, 2016 (colorado.edu/rioverdearchaeology/.../joyce_2016a.pdf; pdftotext ile okundu): \"At this time, Tututepec was nearly uninhabited, which shows that the Late Postclassic city did not develop out of an earlier community, but was founded instead as a new political center.\" | f=1100: bu kaynak; kodeks hesabı 1081 (maddede beyanlı). · DOGU-500-1281"},{f:"1281-01-01",t:"1522-01-01",d:"tututepec-krallik"},
     {f:"1522-01-01",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Codex Zouche-Nuttall; John M. D. Pohl'un Mixtek kodeksleri üzerine akademik çalışmaları.
//         Pedro de Alvarado 1522'de fethetti.
// k gerekçesi: Mixteca'daki en büyük/uzun ömürlü siyasi birimin başkenti — k:1

// ---------- Maya Post-Klasik Şehir Devletleri (maya-sehir-devletleri — MEVCUT KİMLİK) ----------

{ ad:"Mayapán", tur:"sehir", lat:20.6244, lon:-89.4611, g:1, k:1,
  bit:"1441-01-01",
  s:[{f:"1100-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: sahip mayapan-birligi (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"mayapan-birligi\" geri yazılır) · Kennett D. J. ve ark., «Drought-induced civil conflict among the ancient Maya», Nature Communications 13, 3911 (2022), doi:10.1038/s41467-022-31522-x (Europe PMC PMC9296624 tam metin okundu): \"But northern and coastal Maya populations subsequently recovered quickly and the political capital of Mayapan arose and governed from at least 1100 to 1450 cal. CE\" | BEYANLI ÇELİŞKİ: aynı makale '(1200–1450 cal. CE)' de yazar; f=1100 'en az' alt sınırı ve atlas künyesi f=1100. · DOGU-500-1281"},{f:"1281-01-01",t:"1441-01-01",d:"maya-sehir-devletleri"}] },
  // 1441'de Xiu isyanıyla YIKILDI ve TERK EDİLDİ — nokta burada bitiyor.
// kaynak: standart akademik konsensüs (Marilyn Masson & Carlos Peraza Lope'nin Mayapán kazı yayınları).
// k gerekçesi: 1441'e kadar bölgesel "lig" başkenti — k:1
// 🟢 DÜZELTME (14 Ağustos, koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
// yalnız `bit:` bırakıldı — "burası kasten boş" DEĞİL "şehir artık yok" (§11 ayrımı,
// aynı çare iki farklı kusura uygulanamaz). Kaynak: data/yerlesimler.js:1877 kalıbı.

{ ad:"Chichén Itzá", tur:"sehir", lat:20.6843, lon:-88.5678, g:1, k:3,
  s:[{f:"0500-01-01",t:"0800-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Chichén Itzá'nın 500-800 arası sahibi — UNESCO 483: yerleşim Klasik dönemde kuruldu, Chichén Viejo anıtları 6.-10. yy'da Maya üslubunda inşa edildi, ancak bir devlet/hanedan adı verilmez (yerel el yazmaları 415-35 ya da 455 der, tarihlenmemiş gelenek); ms1 künyesi devlet f=0800. Abi merkez adayı arandı, kaynakla bağ bulunamadı | f=0500-01-01 UFUK SINIR İŞARETİDİR · DOGU-500-1281"},{f:"0800-01-01",t:"1200-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: sahip chichen-itza (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"chichen-itza\" geri yazılır) · ms1 künyesi (chichen-itza f=0800/t=1200; Martin & Grube, Chronicle of the Maya Kings and Queens, 2008 atfı; bu oturumda açılmadı) | UNESCO 483: «reportedly took the city between 967 A.D. and 987 A.D.» (Toltek; zincirde sahip değişimi yazılmadı) · DOGU-500-1281"},{f:"1200-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Chichén Itzá'nın 1200-1281 arası sahibi — ms1 künyesi devlet t=1200 (kesin çöküş yılı yok, 1200/1221 tartışmalı); Mayapán'ın yerini aldığı M&G atfı (açılmadı); UNESCO 483 sayfası bu dönemi anlatmaz. Abi merkez adayı Mayapán: Chichén'in bağlı olduğuna dair kaynak okunmadı | atlas zincirinin başı maya-sehir-devletleri 1281 · DOGU-500-1281"},{f:"1281-01-01",t:"1547-01-01",d:"maya-sehir-devletleri"},
     {f:"1547-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Robert S. Chamberlain, "The Conquest and Colonization of Yucatan, 1517-1550"
//         (Carnegie Institution, 1948) — Yucatán pasifikasyonu 1546-47'de tamamlandı.
// k gerekçesi: 1200 sonrası idari başkent değil, dini/hac merkezi — k:3

{ ad:"Maní", tur:"sehir", lat:20.3833, lon:-89.3833, g:1, k:1,
  s:[{f:"1281-01-01",t:"1542-01-01",d:"maya-sehir-devletleri"},
     {f:"1542-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Ralph L. Roys, "The Indian Background of Colonial Yucatan" (Carnegie Institution, 1943).
// k gerekçesi: halach winik (bölgesel kral) başkenti — k:1

{ ad:"Sotuta", tur:"sehir", lat:20.5875, lon:-89.0181, g:1, k:1,
  s:[{f:"1281-01-01",t:"1545-01-01",d:"maya-sehir-devletleri"},
     {f:"1545-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Chamberlain (1948); Roys (1943) — Cocom hanedanı, İspanyollara karşı DİRENDİ.
// k gerekçesi: halach winik başkenti, Maní'nin rakibi — k:1

{ ad:"Utatlán (Q'umarkaj)", tur:"sehir", lat:15.0333, lon:-91.1567, g:1, k:1,
  kur:"1400-01-01", bit:"1524-03-07",
  s:[{f:"1400-01-01",t:"1524-03-07",d:"maya-sehir-devletleri"}] },
  // Pedro de Alvarado 1524 başında K'iche' krallarını yakıp şehri ATEŞE VERDİ.
// kaynak: Matthew Restall & Florine Asselbergs, "Invading Guatemala" (Penn State UP, 2007).
// k gerekçesi: K'iche' krallığının başkenti — k:1
// 🟢 DÜZELTME (14 Ağustos, koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
// yalnız `bit:` bırakıldı — "burası kasten boş" DEĞİL "şehir artık yok".

{ ad:"Iximché", tur:"sehir", lat:14.7522, lon:-90.9822, g:1, k:1,
  kur:"1470-01-01", bit:"1527-01-01",
  s:[{f:"1470-01-01",t:"1524-07-25",d:"maya-sehir-devletleri"},
     {f:"1524-07-25",t:"1527-01-01",d:"ispanya"}] },
  // 1524-07-25: Alvarado İspanyol Guatemala'sının İLK başkenti yaptı; 1526 isyanı
  // sonrası terk edildi. Antigua Guatemala noktası bu şehrin ÜÇÜNCÜ konumu — 3km ihlali YOK.
// kaynak: Penn Museum "Expedition Magazine" (Iximché kazı raporları); Restall & Asselbergs (2007).
// k gerekçesi: Kaqchikel krallığının başkenti, fetihte İspanyol müttefiki — k:1
// 🟢 DÜZELTME (14 Ağustos, koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
// yalnız `bit:` bırakıldı — "burası kasten boş" DEĞİL "şehir artık yok".

{ ad:"Zaculeu", tur:"sehir", lat:15.3486, lon:-91.4886, g:0, k:2,
  bit:"1525-01-01",
  s:[{f:"1281-01-01",t:"1525-01-01",d:"maya-sehir-devletleri"}] },
  // Gonzalo de Alvarado 1525'te açlıkla teslim aldı.
// kaynak: Tulane Univ. "Exhibits" (Zaculeu kazı tarihçesi).
// k gerekçesi: bölgesel Mam krallığı başkenti, 1450'den beri K'iche'ye tâbi — k:2
// 🟢 DÜZELTME (14 Ağustos, koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
// yalnız `bit:` bırakıldı. ⚠️ Kaynak (Tulane) teslimi anlatıyor ama sonrasının kesin
// akıbetini netleştirmiyor — `bit:` en dürüst seçim (iddia yok, yalnız "site artık
// izlenmiyor").

{ ad:"Nojpetén (Tayasal / Flores)", tur:"sehir", lat:16.9284, lon:-89.8903, g:1, k:1,
  s:[{f:"1281-01-01",t:"1697-03-13",d:"maya-sehir-devletleri"},
     {f:"1697-03-13",t:"1821-09-15",d:"yeni-ispanya"},
     {f:"1821-09-15",t:"2000-12-31",d:"guatemala"}] },
// kaynak: Grant D. Jones, "The Conquest of the Last Maya Kingdom" (Stanford UP, 1998) —
//         son bağımsız Maya devleti, 13 Mart 1697'de düştü.
// k gerekçesi: son bağımsız Maya krallığının başkenti — k:1

{ ad:"Potonchán (Santa María de la Victoria)", tur:"sehir", lat:18.5439, lon:-92.6461, g:0, k:2,
  s:[{f:"1281-01-01",t:"1519-03-25",d:"maya-sehir-devletleri"},
     {f:"1519-03-25",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Bernal Díaz del Castillo'nun çağdaş tanıklığına dayanan akademik özetler —
//         Centla Muharebesi 14 Mart 1519.
// k gerekçesi: Acalán ticaret ağının kıyı limanı, bölgesel merkez — k:2

{ ad:"Acalán (Itzamkanac)", tur:"sehir", lat:18.2000, lon:-90.9667, g:0, k:1,
  s:[{f:"1281-01-01",t:"1530-01-01",d:"maya-sehir-devletleri"},
     {f:"1530-01-01",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: France V. Scholes & Ralph L. Roys, "The Maya Chontal Indians of Acalan-Tixchel"
//         (Carnegie Institution, 1948; Univ. of Oklahoma Press 2. bs. 1968).
// k gerekçesi: Acalán Chontal Maya krallığının başkenti — k:1

// ---------- İspanyol fetih ve erken kolonyal şehirler (MEVCUT KİMLİKLER) ----------

{ ad:"Veracruz (Villa Rica de la Vera Cruz)", tur:"sehir", lat:19.1738, lon:-96.1342, g:1, k:2,
  kur:"1519-04-22",
  s:[{f:"1519-04-22",t:"1535-04-17",d:"ispanya"},
     {f:"1535-04-17",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Cortés'in "İlk Mektubu" (akademik neşri Univ. of Texas Press) — 22 Nisan 1519,
//         Amerika anakarasındaki ilk İspanyol şehri.
// k gerekçesi: büyük liman ama idari başkent değil — k:2

{ ad:"Puebla de los Ángeles", tur:"sehir", lat:19.0414, lon:-98.2063, g:2, k:1,
  kur:"1531-04-16",
  s:[{f:"1531-04-16",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Hispanic American Historical Review (Duke Univ. Press) — 16 Nisan 1531 kuruluş.
// k gerekçesi: Yeni İspanya'nın ikinci büyük şehri — k:1

{ ad:"Guadalajara", tur:"sehir", lat:20.6597, lon:-103.3496, g:2, k:1,
  kur:"1542-02-14",
  s:[{f:"1542-02-14",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Royal Audiencia of Guadalajara kayıtları — 14 Şubat 1542 kuruluş.
// k gerekçesi: Nueva Galicia'nın (1560'tan itibaren) başkenti — k:1

{ ad:"Antigua Guatemala (Santiago de los Caballeros)", tur:"sehir", lat:14.5586, lon:-90.7295, g:2, k:1,
  kur:"1543-01-01",
  s:[{"f":"1543-03-10","t":"1821-09-15","d":"yeni-ispanya"},{"f":"1821-09-15","t":"2000-12-31","d":"guatemala"}] },
// kaynak: Real Audiencia de Guatemala kayıtları — şehir ÜÇÜNCÜ kez burada kuruldu (1543).
// k gerekçesi: Guatemala Kaptanlığı'nın (1543-1773) başkenti — k:1

{ ad:"Mérida", tur:"sehir", lat:20.9674, lon:-89.5926, g:2, k:1,
  kur:"1542-01-06",
  s:[{f:"1542-01-06",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: T'ho Maya yerleşiminin üzerine kurulduğu belgelenmiş — 6 Ocak 1542.
// k gerekçesi: Yucatán'ın idari başkenti — k:1

{ ad:"Campeche (San Francisco de Campeche)", tur:"sehir", lat:19.8301, lon:-90.5349, g:1, k:3,
  kur:"1540-10-04",
  s:[{f:"1540-10-04",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: standart akademik/kurumsal tarih — 4 Ekim 1540 kuruluş.
// k gerekçesi: Mérida'ya bağlı liman kasabası — k:3

{ ad:"San Cristóbal de las Casas (Ciudad Real)", tur:"sehir", lat:16.7370, lon:-92.6376, g:1, k:2,
  kur:"1528-03-31",
  s:[{f:"1528-03-31",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: standart akademik/kurumsal tarih — 31 Mart 1528. Chiapas 1824'te MEKSİKA'ya
//         katıldı (Guatemala'ya değil), bu yüzden 1821 sonrası "meksika" doğru.
// k gerekçesi: Chiapas ilinin piskoposluk/idari merkezi — k:2

{ ad:"Colima (San Sebastián de Colima)", tur:"sehir", lat:19.2433, lon:-103.7250, g:0, k:3,
  kur:"1523-07-25",
  s:[{f:"1523-07-25",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: standart akademik/kurumsal tarih — Gonzalo de Sandoval, 25 Temmuz 1523.
// k gerekçesi: küçük il merkezi — k:3

{ ad:"Antequera (Oaxaca)", tur:"sehir", lat:17.0732, lon:-96.7266, g:1, k:2,
  kur:"1529-01-01",
  s:[{f:"1529-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: UNESCO Dünya Mirası dosyası "Historic Centre of Oaxaca and Monte Albán".
// k gerekçesi: Oaxaca ilinin piskoposluk/idari merkezi — k:2

{ ad:"Compostela", tur:"sehir", lat:21.2333, lon:-104.9000, g:0, k:2,
  kur:"1531-01-01",
  s:[{f:"1531-01-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"2000-12-31",d:"meksika"}] },
// kaynak: Nueva Galicia idari kayıtları — 1531, Nuño Beltrán de Guzmán.
// k gerekçesi: kısa süreli il başkenti (1531-1560), sonra Guadalajara'ya devretti — k:2

// ============================================================================
// 2) AND DAĞLARI VE GÜNEY AMERİKA
// ============================================================================

// ---------- İnka çekirdeği (inka-imparatorlugu — MEVCUT KİMLİK) ----------

{ ad:"Cusco (Qosqo)", tur:"sehir", lat:-13.5320, lon:-71.9675, g:2, k:1,
  s:[{f:"1200-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: sahip kuzco-krallik (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"kuzco-krallik\" geri yazılır) · Michael E. Moseley, The Incas and Their Ancestors, rev. ed., Thames & Hudson, 2001, böl. 1 'Introduction' (archive.org: the-incas-and-their-ancestors-second-revised-edition-michael-edward-moseley-z-lib.org, OCR metin; bölüm 9 gövdesi bu metinde YOK, okunamadı): \"the archaeological record indicates that Inca political development began as a gradual process shortly after AD 1000\" | ms1 künyesi (kuzco-krallik; yeniden yazılmadı): 'Killke Cuzco was apparently a young señorío, likely confederated with Chokepukio by about AD 1200' (Moseley 2001, böl. 9; bu oturumda açılamadı) | f=1200: ms1 künye f. · DOGU-500-1281"},{f:"1281-01-01",t:"1438-01-01",d:"inka-imparatorlugu"},
     {f:"1438-01-01",t:"1533-11-15",d:"inka-imparatorlugu"},
     {f:"1533-11-15",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: John Hemming, "The Conquest of the Incas" (rev. ed. 1993), s. 116-123 (Pizarro'nun
//         Cusco'ya girişi, 15 Kasım 1533); Terence N. D'Altroy, "The Incas" (2. bs. 2015), s. 60-75.
// k gerekçesi: imparatorluk başkenti — k:1

{ ad:"Quito", tur:"sehir", lat:-0.2299, lon:-78.5249, g:2, k:2,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1281-1487 arası Quitu-Cara/Caranqui konfederasyonunun siyasi yapısı hakkında akademik kaynak bu taneciklikte konuşmuyor.",
  s:[{f:"1487-01-01",t:"1534-01-01",d:"inka-imparatorlugu"},
     {f:"1534-01-01",t:"1534-12-06",d:"ispanya"},
     {f:"1534-12-06",t:"1822-05-24",d:"ispanyol-peru"},
     {f:"1822-05-24",t:"1830-05-13",d:"gran-kolombiya"},
     {f:"1830-05-13",t:"2000-12-31",d:"ekvador-cumhuriyeti"}] },
// kaynak: Terence N. D'Altroy, "The Incas" (2015), s. 76-80; John Hemming, "The Conquest of
//         the Incas" (1993), s. 100-105 (Rumiñahui'nin şehri yakması).
// k gerekçesi: Huayna Capac'ın ikinci başkenti — k:2

{ ad:"Cajamarca", tur:"sehir", lat:-7.1611, lon:-78.5127, g:2, k:2,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1281-1465 arası bölgesel Cajamarca kültürünün siyasi örgütlenmesi standart kaynaklarda yalnız arkeolojik düzeyde ele alınıyor.",
  s:[{f:"1465-01-01",t:"1532-11-16",d:"inka-imparatorlugu"},
     {f:"1532-11-16",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: John Hemming, "The Conquest of the Incas" (1993), s. 25-45 (Atahualpa'nın esareti, 16 Kasım 1532).
// k gerekçesi: İmparatorluk kuzey ordugâhı, Atahualpa'nın esir alındığı yer — k:2

{ ad:"Tumbes", tur:"liman", lat:-3.5669, lon:-80.4515, g:1, k:3,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"İnka öncesi Tumbes'in siyasi bağlılığı (Chimú/bağımsız yerel kasikalık) kaynaklarda net ayrılmıyor.",
  s:[{f:"1470-01-01",t:"1532-01-01",d:"inka-imparatorlugu"},
     {f:"1532-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: John Hemming (1993), s. 20-24; D'Altroy (2015), s. 78.
// k gerekçesi: kuzey kıyısı fetih üssü — k:3

{ ad:"Ollantaytambo", tur:"kale", lat:-13.2583, lon:-72.2636, g:1, k:3, kur:"1450-01-01",
  s:[{f:"1450-01-01",t:"1537-07-01",d:"inka-imparatorlugu"},
     {f:"1537-07-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: D'Altroy (2015), s. 168-170; Hemming (1993), s. 208-215 (Ocak 1537 muharebesi).
// k gerekçesi: Pachacuti'nin kraliyet malikânesi — k:3

{ ad:"Vilcabamba (Espíritu Pampa)", tur:"sehir", lat:-12.8167, lon:-73.2667, g:1, k:3, kur:"1539-01-01",
  s:[{f:"1539-01-01",t:"1572-06-24",d:"inka-imparatorlugu"},
     {f:"1572-06-24",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: John Hemming (1993), s. 396-410 — Neo-İnka Devleti'nin son başkenti, İspanyol
//         birlikleri 24 Haziran 1572'de girdi (fetih sonrası ıssız kaldığı için "ispanya"
//         ara kademesi atlanıp doğrudan ispanyol-peru'ya bağlandı — DÜZELTİLMİŞ satır).
// k gerekçesi: Neo-İnka Devleti'nin son başkenti — k:3

{ ad:"Huánuco Pampa (Huánuco Viejo)", tur:"sehir", lat:-9.9333, lon:-76.5333, g:1, k:3, kur:"1460-01-01",
  s:[{f:"1460-01-01",t:"1539-01-01",d:"inka-imparatorlugu"},
     {f:"1539-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: D'Altroy (2015), s. 343-348; Cambridge History of the Native Peoples of the
//         Americas, Vol. III, ed. Salomon & Schwartz (1999).
// k gerekçesi: Kral Yolu üzerinde büyük idari merkez — k:3

{ ad:"Vilcashuamán", tur:"sehir", lat:-13.6667, lon:-73.9500, g:1, k:3, kur:"1450-01-01",
  s:[{f:"1450-01-01",t:"1533-01-01",d:"inka-imparatorlugu"},
     {f:"1533-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: D'Altroy (2015), s. 220-224 — Pachacuti dönemi tören/idari kompleksi.
// k gerekçesi: imparatorluk merkezi işlevi — k:3

// ---------- Kolonyal büyük şehirler — İspanyol And valiliği (MEVCUT KİMLİK) ----------

{ ad:"Lima (Ciudad de los Reyes)", tur:"sehir", lat:-12.0464, lon:-77.0428, g:2, k:1, kur:"1535-01-18",
  s:[{f:"1535-01-18",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I, ed. L. Bethell (1984); Hemming (1993), s. 175-180.
// k gerekçesi: And valiliğinin başkenti — k:1

{ ad:"Potosí", tur:"sehir", lat:-19.5836, lon:-65.7531, g:2, k:2, kur:"1545-04-01",
  s:[{f:"1545-04-01",t:"1825-08-06",d:"ispanyol-peru"},
     {f:"1825-08-06",t:"2000-12-31",d:"bolivya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984), P.J. Bakewell böl.
// k gerekçesi: Cerro Rico gümüş madeni, kolonyal dönemin en büyük şehirlerinden — k:2

{ ad:"La Paz", tur:"sehir", lat:-16.5000, lon:-68.1500, g:2, k:2, kur:"1548-10-20",
  s:[{f:"1548-10-20",t:"1825-08-06",d:"ispanyol-peru"},
     {f:"1825-08-06",t:"2000-12-31",d:"bolivya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984).
// k gerekçesi: bölgesel idari merkez — k:2

{ ad:"Sucre (La Plata / Chuquisaca)", tur:"sehir", lat:-19.0333, lon:-65.2627, g:1, k:2, kur:"1538-11-30",
  s:[{f:"1538-11-30",t:"1825-08-06",d:"ispanyol-peru"},
     {f:"1825-08-06",t:"2000-12-31",d:"bolivya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Charcas Audiencia'sı (1559'dan).
// k gerekçesi: Charcas Kraliyet Audiencia'sının merkezi — k:2

{ ad:"Arequipa", tur:"sehir", lat:-16.4090, lon:-71.5375, g:1, k:3, kur:"1540-08-15",
  s:[{f:"1540-08-15",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Garcí Manuel de Carbajal.
// k gerekçesi: bölgesel merkez — k:3

{ ad:"Trujillo (Peru)", tur:"sehir", lat:-8.1116, lon:-79.0290, g:1, k:3, kur:"1534-11-01",
  s:[{f:"1534-11-01",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Diego de Almagro, Kasım 1534.
// k gerekçesi: kuzey kıyısı bölgesel merkez — k:3

{ ad:"Cartagena de Indias", tur:"liman", lat:10.3910, lon:-75.4794, g:2, k:3, kur:"1533-06-01",
  s:[{f:"1533-06-01",t:"1821-10-01",d:"ispanyol-peru"},
     {f:"1821-10-01",t:"1831-01-01",d:"gran-kolombiya"},
     {f:"1831-01-01",t:"2000-12-31",d:"kolombiya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Pedro de Heredia, 1 Haziran 1533.
// k gerekçesi: Karayip kıyısının kilit askeri limanı — k:3

{ ad:"Popayán", tur:"sehir", lat:2.4448, lon:-76.6147, g:1, k:3, kur:"1537-01-13",
  s:[{f:"1537-01-13",t:"1819-12-17",d:"ispanyol-peru"},
     {f:"1819-12-17",t:"1831-01-01",d:"gran-kolombiya"},
     {f:"1831-01-01",t:"2000-12-31",d:"kolombiya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Sebastián de Belalcázar.
// k gerekçesi: bölgesel merkez — k:3

{ ad:"Caracas (Santiago de León de Caracas)", tur:"sehir", lat:10.4806, lon:-66.9036, g:2, k:2, kur:"1567-07-25",
  s:[{f:"1567-07-25",t:"1821-06-24",d:"ispanyol-peru"},
     {f:"1821-06-24",t:"1830-01-13",d:"gran-kolombiya"},
     {f:"1830-01-13",t:"2000-12-31",d:"venezuela-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Diego de Losada, 25 Temmuz 1567.
// k gerekçesi: Venezuela'nın idari merkezi — k:2

{ ad:"Mérida (Venezuela)", tur:"sehir", lat:8.5933, lon:-71.1739, g:1, k:3, kur:"1558-10-09",
  s:[{f:"1558-10-09",t:"1821-06-24",d:"ispanyol-peru"},
     {f:"1821-06-24",t:"1830-01-13",d:"gran-kolombiya"},
     {f:"1830-01-13",t:"2000-12-31",d:"venezuela-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Juan Rodríguez Suárez.
// k gerekçesi: dağlık iç bölge merkezi — k:3

{ ad:"Santiago (Şili)", tur:"sehir", lat:-33.4489, lon:-70.6693, g:2, k:2, kur:"1541-02-12",
  s:[{f:"1541-02-12",t:"1818-02-12",d:"ispanyol-peru"},
     {f:"1818-02-12",t:"2000-12-31",d:"sili-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Pedro de Valdivia, 12 Şubat 1541.
// k gerekçesi: Şili'nin idari merkezi — k:2

{ ad:"Concepción (Şili)", tur:"sehir", lat:-36.8270, lon:-73.0503, g:1, k:3, kur:"1550-10-05",
  s:[{f:"1550-10-05",t:"1818-02-12",d:"ispanyol-peru"},
     {f:"1818-02-12",t:"2000-12-31",d:"sili-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Pedro de Valdivia, 5 Ekim 1550.
// k gerekçesi: Bio-Bio hattının kuzeyinde askeri merkez (1565-1573 başkent) — k:3

// ---------- Portekiz Brezilyası (MEVCUT KİMLİK) ----------

{ ad:"Salvador (Bahia)", tur:"liman", lat:-12.9777, lon:-38.5016, g:2, k:2, kur:"1549-03-29",
  s:[{f:"1549-03-29",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: Stuart B. Schwartz, "Sugar Plantations in the Formation of Brazilian Society: Bahia,
//         1550-1835" (Cambridge UP, 1985), s. 15-22 — Tomé de Sousa, Mart 1549.
// k gerekçesi: Portekiz Brezilyası'nın ilk başkenti — k:2

{ ad:"Rio de Janeiro", tur:"liman", lat:-22.9068, lon:-43.1729, g:2, k:2, kur:"1565-03-01",
  s:[{f:"1565-03-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Estácio de Sá, 1 Mart 1565.
// k gerekçesi: 1763'ten itibaren kolonyal başkent — k:2

{ ad:"São Paulo", tur:"sehir", lat:-23.5505, lon:-46.6333, g:1, k:3, kur:"1554-01-25",
  s:[{f:"1554-01-25",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Cizvit kuruluşu, 25 Ocak 1554.
// k gerekçesi: iç bölge merkezi — k:3

{ ad:"Olinda", tur:"liman", lat:-8.0089, lon:-34.8553, g:1, k:2, kur:"1535-01-01",
  s:[{f:"1535-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Pernambuco kaptanlığının ilk merkezi.
// k gerekçesi: kaptanlık merkezi — k:2

{ ad:"São Luís", tur:"liman", lat:-2.5300, lon:-44.3015, g:1, k:3, kur:"1612-09-01",
  s:[{f:"1612-09-01",t:"1615-11-04",d:"fransa"},
     {f:"1615-11-04",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Fransız "France
//         Équinoxiale" (Eylül 1612), Portekiz geri alışı 4 Kasım 1615. "fransa" kimliği
//         (f:987, t:1792-09-22) bu 3 yıllık dilimi kapsıyor, sorun yok.
// k gerekçesi: Amazon ağzının Portekiz kontrolünü güvence altına alan liman — k:3

{ ad:"Belém", tur:"liman", lat:-1.4558, lon:-48.4902, g:1, k:3, kur:"1616-01-12",
  s:[{f:"1616-01-12",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: Cambridge History of Latin America, Vol. I (Bethell, 1984) — Francisco Caldeira de
//         Castelo Branco, 12 Ocak 1616.
// k gerekçesi: Amazon ağzı kilit limanı — k:3

{ ad:"Ouro Preto (Vila Rica)", tur:"sehir", lat:-20.3856, lon:-43.5033, g:1, k:2, kur:"1711-07-08",
  s:[{f:"1711-07-08",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"2000-12-31",d:"brezilya-cumhuriyeti"}] },
// kaynak: C.R. Boxer, "The Golden Age of Brazil, 1695-1750" (Univ. of California Press, 1962),
//         s. 45-60 — Minas Gerais altın hücumu, 8 Temmuz 1711.
// k gerekçesi: 18. yy boyunca kolonyal Brezilya'nın en kalabalık yerleşimi — k:2

// ---------- Chimú (ÖNERİLEN KİMLİK: chimu-krallik) ----------

{ ad:"Chan Chan", tur:"sehir", lat:-8.0989, lon:-79.0742, g:2, k:2,
  s:[{f:"1200-01-01",t:"1281-01-01",d:"chimu-krallik",kesinlik:"yuzyil",kaynak:"Olah G. ve ark., «Ancient DNA and spatial modeling reveal a pre-Inca trans-Andean parrot trade», Nature Communications 17, 2117 (2026), doi:10.1038/s41467-026-69167-9 (Europe PMC PMC12976122 tam metin okundu; Chimú cümlesi kendi atıflarına [53,54,115] dayanır, onlar açılmadı): \"The Chimú Empire (1200–1470 CE) succeeded the Moche and Sicán cultures and conquered much of the Peruvian coast before it was conquered by the Incas\" | q: 'Chan Chan is the vast capital of the Chimú Empire' (aynı kaynak) | f=1200: BU kaynağın başlangıcı (künye chimu-krallik f=1000: Store norske 'ca. 1000-1470', bu oturumda açılmadı) → 1000-1200 arası BEYANLI BOŞLUK DEĞİL, yamada YAZILMADI (devam_gerekli kapsamı dışı: 0500→1200 başka işçi/kaynak). · DOGU-500-1281"},{f:"1281-01-01",t:"1470-01-01",d:"chimu-krallik"},
     {f:"1470-01-01",t:"1532-11-16",d:"inka-imparatorlugu"},
     {f:"1532-11-16",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Michael E. Moseley, "The Incas and Their Ancestors" (rev. ed. 2001), s. 245-260 —
//         Tupac İnka Yupanqui'nin fethi ~1470.
// k gerekçesi: Chimú Krallığı'nın başkenti — k:2

{ ad:"Túcume", tur:"sehir", lat:-6.5167, lon:-79.8167, g:1, k:3,
  s:[{f:"0500-01-01",t:"1100-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: arandı, bulunamadı: Túcume'nin 1100 öncesi sahibi/varlığı — Encyclopedia.com 'Sican': yeni başkent 1050-1100 dolaylarında 'El Purgatorio, near Tucume'de kuruldu; yerleşimin öncesi kaynakta yok (Shimada birincil yayınları ve Heyerdahl/Narváez Túcume monografileri açılmadı). Abi merkez: Batán Grande (Sicán başkenti) 1050'ye kadar — Túcume'nin ona bağlı olduğu kaynakta yok | f=0500-01-01 UFUK SINIR İŞARETİDİR · DOGU-500-1281"},{f:"1100-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: sahip sican (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"sican\" geri yazılır) · Encyclopedia.com, 'Sican', https://encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/sican (curl ile okundu; yazar sayfada dogrulanmadi) | «a new capital was established farther west at El Purgatorio, near Tucume, marking the onset of the Late Sican (1100 to 1375 ce).» | BEYANLI YAKLAŞIKLIK: başkent 'near Túcume' (El Purgatorio), atlas Túcume noktası ona ~5 km; Late Sicán boyunca Túcume bölgesi Sicán toprağı kabul edildi. ÇELİŞKİ: atlas zinciri 1281-1375 arasını chimu-krallik gösterir; Encyclopedia.com Chimú fethini ~1375 verir → mevcut zincirin ilk iki dilimi için düzeltme önerisi (RAPOR) · DOGU-500-1281"},{f:"1281-01-01",t:"1375-01-01",d:"chimu-krallik"},
     {f:"1375-01-01",t:"1470-01-01",d:"chimu-krallik"},
     {f:"1470-01-01",t:"1532-11-16",d:"inka-imparatorlugu"},
     {f:"1532-11-16",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Moseley (2001), s. 230-240 — Sicán/Lambayeque kültürünün Chimú ilhakı ~1375.
//         SADELEŞTİRME: Túcume aslen bağımsız Sicán kültürüydü, ayrı kimlik açılmadı.
// k gerekçesi: kuzey bölge merkezi — k:3

// ---------- Aymara / Titicaca (ÖNERİLEN KİMLİK: colla-krallik, lupaqa-krallik) ----------

{ ad:"Hatun Colla", tur:"sehir", lat:-15.4667, lon:-70.0333, g:1, k:3,
  s:[{f:"1100-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: sahip aymara-senyorlukler (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"aymara-senyorlukler\" geri yazılır) · Michael E. Moseley, The Incas and Their Ancestors, rev. ed., Thames & Hudson, 2001, böl. 1 'Introduction' (archive.org: the-incas-and-their-ancestors-second-revised-edition-michael-edward-moseley-z-lib.org, OCR metin; bölüm 9 gövdesi bu metinde YOK, okunamadı): \"Tiwanaku’s agrarian fortunes were undone by the aD 1100 onset of pro- tracted drought that ultimately dropped lake levels by some 12 m\" | Michael E. Moseley, The Incas and Their Ancestors, rev. ed., Thames & Hudson, 2001, böl. 1 'Introduction' (archive.org: the-incas-and-their-ancestors-second-revised-edition-michael-edward-moseley-z-lib.org, OCR metin; bölüm 9 gövdesi bu metinde YOK, okunamadı): \"Credited with subjugating the Lupaka, Colla, and other kingdoms around Lake Titicaca\" | BEYANLI YAKLAŞIKLIK: Hatuncolla'nın Colla başkenti olduğu ms1 künyesinde (Moseley bölüm 9; açılamadı); doğrudan tanık bu oturumda yok. · DOGU-500-1281"},{f:"1281-01-01",t:"1450-01-01",d:"colla-krallik"},
     {f:"1450-01-01",t:"1533-01-01",d:"inka-imparatorlugu"},
     {f:"1533-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Charles Stanish, "Ancient Titicaca" (Univ. of California Press, 2003), s. 200-215.
// k gerekçesi: Colla Krallığı'nın başkenti — k:3

{ ad:"Chucuito", tur:"sehir", lat:-15.8884, lon:-69.7666, g:1, k:3,
  s:[{f:"1100-01-01",t:"1281-01-01",d:"__BOSLUK__",kesinlik:"yuzyil",kaynak:"BOŞLUK BEYANI: sahip aymara-senyorlukler (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"aymara-senyorlukler\" geri yazılır) · Michael E. Moseley, The Incas and Their Ancestors, rev. ed., Thames & Hudson, 2001, böl. 1 'Introduction' (archive.org: the-incas-and-their-ancestors-second-revised-edition-michael-edward-moseley-z-lib.org, OCR metin; bölüm 9 gövdesi bu metinde YOK, okunamadı): \"Tiwanaku’s agrarian fortunes were undone by the aD 1100 onset of pro- tracted drought that ultimately dropped lake levels by some 12 m\" | Michael E. Moseley, The Incas and Their Ancestors, rev. ed., Thames & Hudson, 2001, böl. 1 'Introduction' (archive.org: the-incas-and-their-ancestors-second-revised-edition-michael-edward-moseley-z-lib.org, OCR metin; bölüm 9 gövdesi bu metinde YOK, okunamadı): \"Credited with subjugating the Lupaka, Colla, and other kingdoms around Lake Titicaca\" | BEYANLI YAKLAŞIKLIK: Chucuito'nun bu tarihte merkez olduğuna dair doğrudan tanık YOK (Moseley bölüm 9 açılamadı); f=1100 Tiwanaku sonrası ms1 künye f'sidir; Lupaka 'krallık'ı 16. yy etiketi (ms1 ic_not). · DOGU-500-1281"},{f:"1281-01-01",t:"1450-01-01",d:"lupaqa-krallik"},
     {f:"1450-01-01",t:"1533-01-01",d:"inka-imparatorlugu"},
     {f:"1533-01-01",t:"1542-11-20",d:"ispanya"},
     {f:"1542-11-20",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"2000-12-31",d:"peru-cumhuriyeti"}] },
// kaynak: Charles Stanish (2003), s. 215-230 — Lupaqa Krallığı, Colla'nın rakibi.
// k gerekçesi: Lupaqa Krallığı'nın başkenti — k:3

// ---------- Muisca Konfederasyonu (ÖNERİLEN KİMLİK: muisca-konfederasyonu) ----------

{ ad:"Bacatá (Bogotá)", tur:"sehir", lat:4.7110, lon:-74.0721, g:2, k:2,
  s:[{f:"1281-01-01",t:"1537-04-20",d:"muisca-konfederasyonu"},
     {f:"1537-04-20",t:"1538-08-06",d:"ispanya"},
     {f:"1538-08-06",t:"1819-12-17",d:"ispanyol-peru"},
     {f:"1819-12-17",t:"1831-01-01",d:"gran-kolombiya"},
     {f:"1831-01-01",t:"2000-12-31",d:"kolombiya-cumhuriyeti"}] },
// kaynak: John Hemming, "The Search for El Dorado" (Michael Joseph, 1978), s. 65-90 —
//         Quesada'nın fethi, 20 Nisan 1537 teslimiyeti, 6 Ağustos 1538 resmi kuruluş.
// k gerekçesi: Zipazgo'nun (zipa önderliği) başkenti — k:2

{ ad:"Hunza (Tunja)", tur:"sehir", lat:5.5353, lon:-73.3678, g:2, k:2,
  s:[{f:"1281-01-01",t:"1537-08-01",d:"muisca-konfederasyonu"},
     {f:"1537-08-01",t:"1539-08-06",d:"ispanya"},
     {f:"1539-08-06",t:"1819-12-17",d:"ispanyol-peru"},
     {f:"1819-12-17",t:"1831-01-01",d:"gran-kolombiya"},
     {f:"1831-01-01",t:"2000-12-31",d:"kolombiya-cumhuriyeti"}] },
// kaynak: John Hemming (1978), s. 91-105 — zaque Quemuenchatocha, Ağustos 1537.
// k gerekçesi: Zacazgo'nun (zaque önderliği) başkenti — k:2

// ---------- Mapuche / Araukanya (ÖNERİLEN KİMLİK: mapuche-araukanya) ----------

{ ad:"Arauco (Mapuche/Araukanya — kuzey sınır bölgesi)", tur:"bolge", lat:-37.2464, lon:-73.3175, g:0, k:0,
  s:[{f:"1281-01-01",t:"1883-01-01",d:"mapuche-araukanya"},
     {f:"1883-01-01",t:"2000-12-31",d:"sili-cumhuriyeti"}] },
// kaynak: Tom D. Dillehay, "Monuments, Empires, and Resistance: The Araucanian Polity and
//         Ritual Narratives" (Cambridge UP, 2007), s. 12-30, 280-310 — 1641 Quilín Parlamentosu'nda
//         İspanya'nın Mapuche bağımsızlığını RESMEN tanıması; 1861-1883 pasifikasyon.
// NOT: kasitli_bosluk KULLANILMADI — Mapuche İspanya tarafından resmen tanınmış bağımsız bir
//      taraftı, "devletsiz" damgası bu statüyü küçültürdü.

{ ad:"Purén (Mapuche/Araukanya — güney direniş bölgesi)", tur:"bolge", lat:-38.0333, lon:-73.0833, g:0, k:0,
  s:[{f:"1281-01-01",t:"1883-01-01",d:"mapuche-araukanya"},
     {f:"1883-01-01",t:"2000-12-31",d:"sili-cumhuriyeti"}] },
// kaynak: Dillehay (2007), s. 150-180 — Purén-Lumaco vadisi, Arauco Savaşı (1550-1656) direniş bölgesi.

// ---------- Diaguita / Calchaquí (ÖNERİLEN KİMLİK: diaguita-calchaqui-konfederasyonu) ----------

{ ad:"Quilmes (Calchaquí Vadisi — Diaguita)", tur:"bolge", lat:-26.5833, lon:-66.1667, g:0, k:0,
  s:[{f:"1281-01-01",t:"1667-01-02",d:"diaguita-calchaqui-konfederasyonu"},
     {f:"1667-01-02",t:"1816-07-09",d:"ispanyol-peru"},
     {f:"1816-07-09",t:"2000-12-31",d:"arjantin-cumhuriyeti"}] },
// kaynak: Cambridge History of the Native Peoples of the Americas, Vol. III, ed. Salomon &
//         Schwartz (1999) — İnka'nın dolaylı/gevşek etkisi, ayrı dönem açılmadı (basitleştirme
//         AÇIKÇA işaretli). Calchaquí Savaşları'nın bitişi: son kale Acalianes'in 2 Ocak 1667
//         teslimi, Quilmes halkının Buenos Aires'e sürgünü.
// k gerekçesi: İspanya'ya en uzun direnen And-güney konfederasyonunun merkezi — k:0 (dağınık, kademesiz)

// ============================================================================
// 3) KUZEY AMERİKA (Meksika kuzeyi — yerli + kolonyal)
// ============================================================================

{ ad:"Cahokia", tur:"sehir", lat:38.6553, lon:-90.0614, g:2, k:2,
  bit:"1350-01-01",
  s:[{f:"1050-01-01",t:"1281-01-01",d:"cahokia",kesinlik:"onyil",kaynak:"Kessler N. V., Benson E. M., Pauketat T. R., Kirk J. D., Therrell M. D., «Age and origin of a Cahokian wooden monument at the Mitchell site, Illinois, USA», PLOS ONE 20, e0333783 (2025), doi:10.1371/journal.pone.0333783 (Europe PMC PMC12494245 tam metin okundu): \"Cahokia emerged spectacularly as the largest city north of modern-day Mexico around 1050 CE\" | Kessler N. V., Benson E. M., Pauketat T. R., Kirk J. D., Therrell M. D., «Age and origin of a Cahokian wooden monument at the Mitchell site, Illinois, USA», PLOS ONE 20, e0333783 (2025), doi:10.1371/journal.pone.0333783 (Europe PMC PMC12494245 tam metin okundu): \"By around 1100 CE, Cahokia was the preeminent political and administrative center in the “Mississippian” midcontinent and Southeast, but its population and influence began to decline before 1200 CE\" | f=1050: atlas künyesi cahokia f (kaynak 'around 1050'); 1050 öncesi bölge sahipsiz (Cahokia yok). · DOGU-500-1281"},{f:"1281-01-01",t:"1350-01-01",d:"cahokia"}] },
// kaynak: Timothy R. Pauketat, "Cahokia: Ancient America's Great City on the Mississippi" (2009).
// 1281'de zirvesini (~1100) geçmiş, gerileme sürecindeydi ama hâlâ meskûndu; terk 1350-1400 arası.
// 🟢 DÜZELTME (14 Ağustos, koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
// yalnız `bit:` bırakıldı — "burası kasten boş" DEĞİL "şehir artık yok".
// k gerekçesi: önceleşkolomb döneminin Kuzey Amerika'daki en büyük şehri — k:2

{ ad:"Onondaga (İrokua Konfederasyon Merkezi)", tur:"sehir", lat:43.0326, lon:-76.1794, g:2, k:2,
  kasitli_bosluk:true, bos:"kabile", neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core), 42 Kuzey Irokua yerlesmesinden 184 AMS radyokarbon tarihinin Bayes modellemesi; TDV amerika maddesi Irokua kimligini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1450-01-01",t:"1777-01-01",d:"haudenosaunee"},
     {f:"1777-01-01",t:"1783-09-03",d:"ingiltere"},
     {f:"1783-09-03",t:"2000-12-31",d:"abd"}] },
{ ad:"Mohawk (Kayenlaha'ke)", tur:"koy", lat:42.9506, lon:-74.3287, g:1, k:1,
  kasitli_bosluk:true, bos:"kabile", neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core), 42 Kuzey Irokua yerlesmesinden 184 AMS radyokarbon tarihinin Bayes modellemesi; TDV amerika maddesi Irokua kimligini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1450-01-01",t:"1777-01-01",d:"haudenosaunee"},
     {f:"1777-01-01",t:"1783-09-03",d:"ingiltere"},
     {f:"1783-09-03",t:"2000-12-31",d:"abd"}] },
{ ad:"Seneca (Ganondagan)", tur:"koy", lat:42.9084, lon:-77.4258, g:1, k:1,
  kasitli_bosluk:true, bos:"kabile", neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core), 42 Kuzey Irokua yerlesmesinden 184 AMS radyokarbon tarihinin Bayes modellemesi; TDV amerika maddesi Irokua kimligini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1450-01-01",t:"1777-01-01",d:"haudenosaunee"},
     {f:"1777-01-01",t:"1783-09-03",d:"ingiltere"},
     {f:"1783-09-03",t:"2000-12-31",d:"abd"}] },
{ ad:"Cayuga", tur:"koy", lat:42.7326, lon:-76.7466, g:1, k:1,
  kasitli_bosluk:true, bos:"kabile", neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core), 42 Kuzey Irokua yerlesmesinden 184 AMS radyokarbon tarihinin Bayes modellemesi; TDV amerika maddesi Irokua kimligini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1450-01-01",t:"1777-01-01",d:"haudenosaunee"},
     {f:"1777-01-01",t:"1783-09-03",d:"ingiltere"},
     {f:"1783-09-03",t:"2000-12-31",d:"abd"}] },
{ ad:"Oneida", tur:"koy", lat:43.0906, lon:-75.6349, g:1, k:1,
  kasitli_bosluk:true, bos:"kabile", neden:"1281-1450 arasi bu bolgede Haudenosaunee Konfederasyonu HENUZ KURULMAMISTI; ayri Irokua koy topluluklari vardi ve kaynaklar bunlarin birbirleriyle catistigini yaziyor - konfederasyon tam bu catismayi dindirmek icin kuruldu. Devlet degil asiret/koy yapisi. kaynak: American Antiquity (Cambridge Core), 42 Kuzey Irokua yerlesmesinden 184 AMS radyokarbon tarihinin Bayes modellemesi; TDV amerika maddesi Irokua kimligini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1450-01-01",t:"1777-01-01",d:"haudenosaunee"},
     {f:"1777-01-01",t:"1783-09-03",d:"ingiltere"},
     {f:"1783-09-03",t:"2000-12-31",d:"abd"}] },
// kaynak: Daniel K. Richter, "The Ordeal of the Longhouse" (1992) — konfederasyon kuruluşu
//         15. yy, KESİN gün/yıl yok (1450 YAKLAŞIK). 1777: Amerikan Devrimi'nde konfederasyon
//         BÖLÜNDÜ (Oneida/Tuscarora ABD yanında); beş nokta basitleştirilerek tek blok
//         İngiltere'ye yazıldı, AÇIKÇA işaretli.
// k gerekçesi: Onondaga konfederasyon merkezi k:2, dört üye millet k:1

// HAYALET-KUNYE-1008-K · `powhatan` künyesi 1501-01-01'de başlıyor (kesinlik yuzyil); 1281→1501-01-01 dilimi → `__BOSLUK__`.
//   __BOSLUK__ = künyesi olmayan yerel yapı (Raipur emsali), 'kimsenin değil' DEĞİL; komşuya İTİLMEDİ.
{ ad:"Werowocomoco (Powhatan Konfederasyonu Başkenti)", tur:"sehir", lat:37.3939, lon:-76.6302, g:2, k:2,
  s:[{f:"1281-01-01",t:"1501-01-01",d:"__BOSLUK__"},
     {f:"1501-01-01",t:"1646-10-01",d:"powhatan"},
     {f:"1646-10-01",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
// kaynak: Helen C. Rountree, "Pocahontas's People" (1990). Necotowance Antlaşması (Ekim 1646,
//         Encyclopedia Virginia) III. Anglo-Powhatan Savaşı'nı bitirdi, konfederasyonu haraçgüzar
//         statüye soktu — bağımsız siyasi varlığın fiilî sonu.
// k gerekçesi: Powhatan Konfederasyonu başkenti — k:2

{ ad:"Taos Pueblo", tur:"koy", lat:36.4361, lon:-105.5411, g:1, k:1,
  kasitli_bosluk:true, bos:"devletsiz", neden:"1281-1610 arasi Pueblo koyleri siyaseten OZERKTI: Ispanyol somurgeciliginden once var olan 70ten fazla koyun her biri, dini topluluklarin baskanlarindan olusan bir konseyle yonetiliyordu; ustlerinde merkezi bir devlet YOKTU. Ispanyol yerlesimi 1598te Onate ile basladi. kaynak: NPS (ABD Milli Park Servisi) + Britannica Pueblo peoples; TDV amerika maddesi Pueblo halklarini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1610-01-01",t:"1680-08-10",d:"yeni-ispanya"},
     {f:"1680-08-10",t:"1692-08-01",d:"pueblo-bagimsizligi"},
     {f:"1692-08-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1848-02-02",d:"meksika"},
     {f:"1848-02-02",t:"2000-12-31",d:"abd"}] },
{ ad:"Acoma Pueblo (Sky City)", tur:"koy", lat:34.9903, lon:-107.5814, g:1, k:1,
  kasitli_bosluk:true, bos:"devletsiz", neden:"1281-1610 arasi Pueblo koyleri siyaseten OZERKTI: Ispanyol somurgeciliginden once var olan 70ten fazla koyun her biri, dini topluluklarin baskanlarindan olusan bir konseyle yonetiliyordu; ustlerinde merkezi bir devlet YOKTU. Ispanyol yerlesimi 1598te Onate ile basladi. kaynak: NPS (ABD Milli Park Servisi) + Britannica Pueblo peoples; TDV amerika maddesi Pueblo halklarini ANMIYOR (olculdu, tanecik boslugu).",
  s:[{f:"1610-01-01",t:"1680-08-10",d:"yeni-ispanya"},
     {f:"1680-08-10",t:"1692-08-01",d:"pueblo-bagimsizligi"},
     {f:"1692-08-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1848-02-02",d:"meksika"},
     {f:"1848-02-02",t:"2000-12-31",d:"abd"}] },
// kaynak: David J. Weber, "The Spanish Frontier in North America" (1992). 1610-1680 arası
//         bağımsız İspanyol öncesi site-devletleri değil, İspanyol dönemi başlangıcı — 1281-1610
//         arası bağımsız dönem bu araştırmanın kapsamında ayrıca modellenmedi.
// 🟢 1680-1692 Pueblo İsyanı boşluğu KAPATILDI — bkz. "pueblo-bagimsizligi" önerisi (Santa Fe
//    girdisinin altındaki not, aşağıda).
// k gerekçesi: büyük Pueblo yerleşimleri — k:1

{ ad:"Oraibi (Hopi, Üçüncü Mesa)", tur:"koy", lat:35.8908, lon:-110.6289, g:1, k:1,
  kasitli_bosluk:true, bos:"devletsiz",
  neden:"Hopi, 1680 Pueblo İsyanı'ndan sonra İspanyol misyonerleri kalıcı olarak GERİ ALMADI (1700'de Awatovi'yi bu yüzden kendi elleriyle yıktılar). Weber (1992) Hopi'nin 1821'e kadar fiilen bağımsız kaldığını açıkça yazıyor.",
  s:[] },
// kaynak: David J. Weber, "The Spanish Frontier in North America" (1992), s. 79-81.

{ ad:"Natchez (Grand Village)", tur:"sehir", lat:31.5451, lon:-91.3915, g:2, k:2,
  s:[{f:"1281-01-01",t:"1731-01-01",d:"natchez"},
     {f:"1731-01-01",t:"1763-02-10",d:"fransa"},
     {f:"1763-02-10",t:"1779-09-21",d:"ingiltere"},
     {f:"1779-09-21",t:"1798-04-07",d:"ispanya"},
     {f:"1798-04-07",t:"2000-12-31",d:"abd"}] },
// kaynak: Charles Hudson, "The Southeastern Indians" (1976) — "Büyük Güneş" teokratik şeflik.
//         1729 Natchez İsyanı ve 1730-31 Fransız misillemesiyle dağıtıldı. 1779-09-21: Baton
//         Rouge Muharebesi, Fort Panmure aynı şartlarla İspanya'ya geçti. "ispanya" (yeni-ispanya
//         DEĞİL) — Louisiana/Florida Küba Genel Kaptanlığı üzerinden yönetildi.
// k gerekçesi: teokratik şeflik başkenti — k:2

// HAYALET-KUNYE-1008-K · `creek-konfederasyonu` künyesi 1701-01-01'de başlıyor (kesinlik yuzyil); 1281→1701-01-01 dilimi → `__BOSLUK__`.
//   __BOSLUK__ = künyesi olmayan yerel yapı (Raipur emsali), 'kimsenin değil' DEĞİL; komşuya İTİLMEDİ.
{ ad:"Coweta (Creek/Mvskoke Konfederasyonu — Aşağı Kasabalar merkezi)", tur:"sehir", lat:32.4699, lon:-84.9877, g:2, k:2,
  s:[{f:"1281-01-01",t:"1701-01-01",d:"__BOSLUK__"},
     {f:"1701-01-01",t:"1832-03-24",d:"creek-konfederasyonu"},
     {f:"1832-03-24",t:"2000-12-31",d:"abd"}] },
// kaynak: Hudson (1976); Encyclopedia of Alabama "Creeks in Alabama" — Cusseta Antlaşması
//         (24 Mart 1832) hukuki devir tarihi (fiilî sürgün 1836-37).
// k gerekçesi: Creek konfederasyonunun "ana kasaba"sı — k:2

{ ad:"Chota (Cherokee Overhill Başkenti)", tur:"sehir", lat:35.6389, lon:-84.1727, g:2, k:2,
  s:[{f:"1281-01-01",t:"1791-07-02",d:"cherokee"},
     {f:"1791-07-02",t:"2000-12-31",d:"abd"}] },
// kaynak: Tennessee Encyclopedia, "Chota" md.; Treaty of Holston (2 Temmuz 1791, Avalon
//         Project/Yale Law School). ⚠️ Chota Kasım 1780'de yakıldı — hukuki devirden 11 ay önce,
//         "hayalet devlet" endişesiyle örtüşen bir vaka, bkz. dosya başı.
// k gerekçesi: 18. yy Cherokee (Overhill) başkenti — k:2

{ ad:"Nanih Waiya (Choctaw Konfederasyonu, kutsal/köken merkezi)", tur:"koy", lat:32.9865, lon:-89.1590, g:1, k:2,
  s:[{f:"1281-01-01",t:"1830-09-27",d:"choctaw"},
     {f:"1830-09-27",t:"2000-12-31",d:"abd"}] },
// kaynak: Patricia Galloway, "Choctaw Genesis, 1500-1700" (Univ. of Nebraska Press, 1995) —
//         üç bölgeli gevşek konfederasyon, tek başkenti yok, bu nokta SEMBOLİK merkezi temsil
//         ediyor. Dancing Rabbit Creek Antlaşması, 27 Eylül 1830.
// k gerekçesi: konfederasyonun köken/kutsal merkezi — k:2

{ ad:"Quebec", tur:"sehir", lat:46.8219, lon:-71.2187, g:2, k:2, kur:"1608-07-03",
  s:[{f:"1608-07-03",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"2000-12-31",d:"kanada"}] },
{ ad:"Montreal (Ville-Marie)", tur:"sehir", lat:45.5019, lon:-73.5674, g:2, k:1, kur:"1642-05-17",
  s:[{f:"1642-05-17",t:"1763-02-10",d:"fransa"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"2000-12-31",d:"kanada"}] },
// kaynak: W.J. Eccles, "The French in North America, 1500-1783" (rev. ed. 1998) — Champlain'in
//         Quebec'i (3 Temmuz 1608) ve Maisonneuve'ün Ville-Marie'yi (17 Mayıs 1642) kuruluşu.
// k gerekçesi: Yeni Fransa'nın başkenti k:2, Montreal büyük merkez k:1

{ ad:"New Orleans", tur:"sehir", lat:29.9511, lon:-90.0715, g:2, k:2, kur:"1718-01-01",
  s:[{f:"1718-01-01",t:"1763-11-03",d:"fransa"},
     {f:"1763-11-03",t:"1803-04-30",d:"ispanya"},
     {f:"1803-04-30",t:"1803-12-20",d:"ispanya"},
     {f:"1803-12-20",t:"2000-12-31",d:"abd"}] },
// kaynak: Eccles (1998); kesin kuruluş GÜNÜ tartışmalı (Richard Campanella, nola.com) — YYYY-01-01.
// ⚠️ DÜZELTME (13 Ağustos, Değişmez 1b denetiminde bulundu): kaynak ajanının orijinal
// önerisinde 1800-1803 arası "fransa" yazılmıştı ama "fransa" kimliği 1792-09-22'de bitiyor —
// DEVLETİN ÖMRÜNÜ AŞMA hatası olurdu. İlk düzeltmede yorumda "ispanya ile kapatıldı" dendi ama
// DİZİYE YAZILMADI — 1800-10-01→1803-04-30 arası fiilen 9 aylık İÇ BOŞLUK kalmıştı (denetim
// yakaladı). Şimdi 1763-11-03→1803-04-30 TEK "ispanya" dönemi olarak birleştirildi: San
// Ildefonso (1800-10-01, gizli Fransa'ya devir) ile Louisiana Satışı (1803-04-30) arası fiilen
// İspanyol yönetimi sürdüğü için (devir gizliydi, fiilî teslim hiç olmadı) ayrı dönem gerekmiyordu.
// k gerekçesi: Louisiana'nın idari merkezi — k:2

{ ad:"New Amsterdam (New York)", tur:"sehir", lat:40.7128, lon:-74.0060, g:2, k:2, kur:"1624-01-01",
  s:[{f:"1624-01-01",t:"1664-09-08",d:"hollanda"},
     {f:"1664-09-08",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
{ ad:"Fort Orange (Albany)", tur:"sehir", lat:42.6526, lon:-73.7562, g:1, k:1, kur:"1624-01-01",
  s:[{f:"1624-01-01",t:"1664-09-08",d:"hollanda"},
     {f:"1664-09-08",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
// kaynak: Alan Taylor, "American Colonies" (2001) — Hollanda Batı Hindistan Kumpanyası, 1624
//         (gün belirsiz). 8 Eylül 1664: Stuyvesant'ın İngiliz filosuna teslimi.
// k gerekçesi: Yeni Hollanda'nın başkenti k:2, Fort Orange kürk ticareti üssü k:1

// 14 Ekim 2026 (TEYIT-KARAR-1014, Emre kararı): kuruluş 1607-05-14 → 1607-05-13 — Oxford Companion
//   to United States History «founding Jamestown on 13 May»; kronoloji_ingiltere maddesiyle birlikte.
{ ad:"Jamestown", tur:"sehir", lat:37.1997, lon:-76.7880, g:2, k:2, kur:"1607-05-13",
  s:[{f:"1607-05-13",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
{ ad:"Plymouth (Massachusetts)", tur:"sehir", lat:41.9584, lon:-70.6673, g:1, k:1, kur:"1620-12-21",
  s:[{f:"1620-12-21",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
{ ad:"Boston (Massachusetts)", tur:"sehir", lat:42.3601, lon:-71.0589, g:2, k:2, kur:"1630-09-07",
  s:[{f:"1630-09-07",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
{ ad:"Philadelphia", tur:"sehir", lat:39.9526, lon:-75.1652, g:2, k:2, kur:"1682-10-27",
  s:[{f:"1682-10-27",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
{ ad:"Charleston (Charles Town)", tur:"sehir", lat:32.7839, lon:-79.9343, g:1, k:1, kur:"1670-04-15",
  s:[{f:"1670-04-15",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
{ ad:"Savannah", tur:"sehir", lat:32.0809, lon:-81.0912, g:1, k:1, kur:"1733-02-12",
  s:[{f:"1733-02-12",t:"1776-07-04",d:"ingiltere"},
     {f:"1776-07-04",t:"2000-12-31",d:"abd"}] },
// kaynak: Alan Taylor, "American Colonies" (2001) — Jamestown (14 Mayıs 1607), Plymouth
//         (21 Aralık 1620), Boston (7 Eylül 1630), Philadelphia (27 Ekim 1682), Charles Town
//         (15 Nisan 1670), Savannah (12 Şubat 1733).
// k gerekçesi: 13 koloninin büyük şehirleri — k:1-2

{ ad:"Detroit (Fort Pontchartrain du Détroit)", tur:"sehir", lat:42.3356, lon:-83.0494, g:1, k:1, kur:"1701-07-24",
  s:[{f:"1701-07-24",t:"1763-02-10",d:"fransa"},
     {f:"1763-02-10",t:"1796-07-11",d:"ingiltere"},
     {f:"1796-07-11",t:"2000-12-31",d:"abd"}] },
// kaynak: Eccles (1998) — Cadillac'ın kuruluşu, 24 Temmuz 1701. 1796-07-11: Jay Antlaşması
//         gereği fiilî devir — 1783 Paris Antlaşması'ndan 13 yıl SONRA (hukuki sınır ≠ fiilî denetim).
// k gerekçesi: Büyük Göller kürk ticareti üssü — k:1

{ ad:"Port Royal (Acadia)", tur:"sehir", lat:44.7442, lon:-65.5058, g:1, k:1, kur:"1605-01-01",
  s:[{f:"1605-01-01",t:"1713-04-11",d:"fransa"},{f:"1713-04-11",t:"1763-02-10",d:"ingiltere"},{f:"1763-02-10",t:"1867-07-01",d:"ingiliz-kuzey-amerika"},{f:"1867-07-01",t:"2000-12-31",d:"kanada"}] },
// kaynak: The Canadian Encyclopedia, "Port-Royal" md. — de Monts/Champlain, 1605 (gün belirsiz).
//         1713-04-11: Utrecht Antlaşması, Acadia'nın İngiltere'ye devri (Quebec/Montreal'den 50 yıl önce).
// k gerekçesi: Acadia'nın idari merkezi — k:1

{ ad:"St. Augustine", tur:"sehir", lat:29.8947, lon:-81.3145, g:2, k:2, kur:"1565-09-08",
  s:[{f:"1565-09-08",t:"1763-02-10",d:"ispanya"},
     {f:"1763-02-10",t:"1783-09-03",d:"ingiltere"},
     {f:"1783-09-03",t:"1821-07-10",d:"ispanya"},
     {f:"1821-07-10",t:"2000-12-31",d:"abd"}] },
// kaynak: Weber (1992) — Pedro Menéndez de Avilés, 8 Eylül 1565. "ispanya" (yeni-ispanya
//         DEĞİL) — Florida, Küba Genel Kaptanlığı'na bağlıydı. 1821-07-10: Adams-Onís Antlaşması
//         devir töreni, Meksika bağımsızlığından (27 Eylül 1821) ÖNCE — doğrudan İspanya'dan ABD'ye.
// k gerekçesi: Florida'nın idari merkezi — k:2

{ ad:"Pensacola", tur:"sehir", lat:30.4213, lon:-87.2169, g:1, k:1, kur:"1698-11-17",
  s:[{f:"1698-11-17",t:"1763-02-10",d:"ispanya"},
     {f:"1763-02-10",t:"1781-05-08",d:"ingiltere"},
     {f:"1781-05-08",t:"1821-07-17",d:"ispanya"},
     {f:"1821-07-17",t:"2000-12-31",d:"abd"}] },
// kaynak: Weber (1992) — Presidio Santa María de Galve, 17 Kasım 1698. 1781-05-08: Gálvez'in
//         Pensacola Kuşatması. 1821-07-17: Batı Florida'nın devir töreni (St. Augustine'den 1 hafta sonra).
// k gerekçesi: Batı Florida'nın idari merkezi — k:1

{ ad:"Santa Fe", tur:"sehir", lat:35.6870, lon:-105.9378, g:2, k:2, kur:"1610-01-01",
  s:[{f:"1610-01-01",t:"1680-08-10",d:"yeni-ispanya"},
     {f:"1680-08-10",t:"1692-08-01",d:"pueblo-bagimsizligi"},
     {f:"1692-08-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1848-02-02",d:"meksika"},
     {f:"1848-02-02",t:"2000-12-31",d:"abd"}] },
// ⚠️ DÜZELTME (13 Ağustos, Değişmez 1b'de 3 iç boşluk bulundu — Taos/Acoma/Santa Fe): 10
// Ağustos 1680 Pueblo İsyanı İspanyolları Santa Fe'den kovdu, 12 yıl boyunca Pueblo halkları
// FİİLEN bağımsızdı (Vargas'ın "kansız yeniden fethi" Ağustos 1692). Kaynak (Weber 1992) bunu
// AÇIKÇA anlatıyor — bu yüzden kasitli_bosluk/devletsiz değil, YENİ BİR KİMLİK önerildi:
// "pueblo-bagimsizligi" (bu üç noktanın üçünde de kullanıldı, tutarlılık için).
// kaynak: David J. Weber, "The Spanish Frontier in North America" (1992) — Pueblo İsyanı 10
//         Ağustos 1680 (kesin, iyi belgeli), Vargas'ın yeniden fethi Ağustos 1692 (gün belirsiz).
{ ad:"San Antonio (Misyon San Antonio de Valero)", tur:"sehir", lat:29.4260, lon:-98.4861, g:1, k:1, kur:"1718-05-01",
  s:[{f:"1718-05-01",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1836-03-02",d:"meksika"},
     {f:"1836-03-02",t:"1845-12-29",d:"teksas-cumhuriyeti"},
     {f:"1845-12-29",t:"2000-12-31",d:"abd"}] },
// ⚠️ DÜZELTME (13 Ağustos, Değişmez 1b denetiminde bulundu): 1836-1845 arası Teksas Cumhuriyeti
// dönemi ilk teslimde bilerek BOŞ bırakılmış, "teksas-cumhuriyeti" önerisi header'da yazılı
// duruyordu ama diziye HİÇ İŞLENMEMİŞTİ. Şimdi kullanıldı — kimlik data/devletler.js'e
// eklenmeden bu bölge boyanmayacak, ama Değişmez 1b'nin gördüğü iç boşluk artık yok.
{ ad:"San Diego (Misyon San Diego de Alcalá)", tur:"sehir", lat:32.7157, lon:-117.1611, g:1, k:1, kur:"1769-07-16",
  s:[{f:"1769-07-16",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1848-02-02",d:"meksika"},
     {f:"1848-02-02",t:"2000-12-31",d:"abd"}] },
{ ad:"San Francisco (Misyon San Francisco de Asís)", tur:"sehir", lat:37.7599, lon:-122.4269, g:1, k:1, kur:"1776-06-29",
  s:[{f:"1776-06-29",t:"1821-09-27",d:"yeni-ispanya"},
     {f:"1821-09-27",t:"1848-02-02",d:"meksika"},
     {f:"1848-02-02",t:"2000-12-31",d:"abd"}] },
// kaynak: Weber (1992). Santa Fe: Vali Pedro de Peralta, 1610; Pueblo İsyanı 10 Ağustos 1680;
//         Vargas'ın yeniden fethi Ağustos 1692. San Antonio: Misyon Valero, 1 Mayıs 1718. San
//         Diego: Junípero Serra, 16 Temmuz 1769. San Francisco: Misyon Dolores, 29 Haziran 1776.
// 🟢 San Antonio 1836-1845 arası (Teksas Cumhuriyeti) artık "teksas-cumhuriyeti" ile DOLU
// (13 Ağustos, Değişmez 1b düzeltmesi — bkz. San Antonio'nun kendi girdisi yukarıda).
// k gerekçesi: İspanyol Kuzey Amerika'sının güneybatı sınır şehirleri — k:1-2

{ ad:"Novoarkhangelsk (Sitka)", tur:"sehir", lat:57.0560, lon:-135.3287, g:1, k:2, kur:"1799-07-01",
  s:[{f:"1799-07-01",t:"1867-10-18",d:"rusya"},
     {f:"1867-10-18",t:"2000-12-31",d:"abd"}] },
// kaynak: Britannica "Sitka"/"Alexander Baranov" — Baranov'un ilk kalesi Temmuz 1799.
// ⚠️ 1802-1804 arası ~2 yıllık kesinti (Tlingit saldırısı) — bkz. dosya başı ③.
// k gerekçesi: Rus Amerika'sının başkenti — k:2

{ ad:"Büyük Ovalar (orta kesim)", tur:"bolge", lat:43.0, lon:-100.0, g:0, k:0,
  kasitli_bosluk:true, bos:"devletsiz",
  neden:"Standart akademik Büyük Ovalar tarihyazımı XIX. yüzyıla kadar bölgede birleşik, toprak iddiası taşıyan bir siyasi otorite tanımlamıyor — göçebe atlı kabile konfederasyonları var ama sabit sınırlı 'devlet' kategorisine girmiyor." },
// 🔴 EMEKLİ — 18 Ağustos 2026, Emre'nin onayıyla (dolgu noktası ölçümü).
//    Kaldırılınca toprak: BOŞ kalır
//    Gerekçe: A1 yarıçap tavanı (uret_petek.py:699) dolgunun işini yapısal
//    olarak yapıyor; bu nokta emilmeyi önlemek için konmuş bir HİLEYDİ ve
//    uret_petek.py:696 zaten emekli edilebileceklerini yazıyordu.
//    Ölçüm: arac/olc_ekleyici.py · scratchpad/olc_dolgu.py
//    ⚠️ SİLİNMEDİ, YORUMLANDI — araştırılmış veri geri alınabilir olmalı.
// { ad:"Kanada Arktiği / Kuzeyi", tur:"bolge", lat:70.0, lon:-95.0, g:0, k:0,
//   kasitli_bosluk:true, bos:"devletsiz",
//   neden:"İnuit toplumları, standart akademik konsensüste merkezî bir siyasi otorite ya da toprak-devlet iddiası taşımayan, akrabalık/av bölgesi temelli organizasyonlarla tanımlanır." },
// kaynak: standart akademik Kuzey Amerika tarihyazımı — kaynak KONUŞUYOR ve devletsiz diyor.

// ============================================================================
// 4) KARAYİPLER VE RÍO DE LA PLATA
// ============================================================================

{ ad:"Jaragua (Taino cacicazgosu)", tur:"bolge", lat:18.5108, lon:-72.6338, g:0, k:0,
  kasitli_bosluk:true, bos:"devletsiz",
  neden:"Beş büyük Taino cacicazgosundan biri (Behechio, sonra Anacaona); kaynak siyasi birleşik otoriteyi AÇIKÇA tanımlıyor. 1503'te Vali Ovando'nun Yaguana katliamıyla fiilen yıkıldı.",
  s:[{f:"1503-01-01",t:"1697-09-20",d:"ispanya"},
     {f:"1697-09-20",t:"1792-09-22",d:"fransa"},
     {f:"1792-09-22",t:"1804-01-01",d:"fransa-cumhuriyet"},
     {f:"1804-01-01",t:"2000-12-31",d:"haiti"}] },
// kaynak: Samuel M. Wilson, "Hispaniola: Caribbean Chiefdoms in the Age of Columbus" (Univ. of
//         Alabama Press, 1990). Ryswick Antlaşması (1697-09-20) adanın batı üçte birini Fransa'ya verdi.

{ ad:"Higüey (Taino cacicazgosu)", tur:"bolge", lat:18.6144, lon:-68.7047, g:0, k:0,
  kasitli_bosluk:true, bos:"devletsiz",
  neden:"Beş büyük Taino cacicazgosundan biri (Cayacoa, sonra Cotubanamá); Higüey Savaşı (1503-1504) ile yıkıldı.",
  s:[{f:"1504-01-01",t:"1795-07-22",d:"ispanya"},
     {f:"1795-07-22",t:"1809-07-09",d:"fransa-cumhuriyet"},
     {f:"1809-07-09",t:"1822-02-09",d:"ispanya"},
     {f:"1822-02-09",t:"1844-02-27",d:"haiti"},
     {f:"1844-02-27",t:"1861-03-18",d:"dominik-cumhuriyeti"},
     {f:"1861-03-18",t:"1865-03-03",d:"ispanya"},
     {f:"1865-03-03",t:"2000-12-31",d:"dominik-cumhuriyeti"}] },
// kaynak: Wilson (1990); latinamericanstudies.org (Bartolomé de las Casas'a dayanan derleme,
//         akademik anlatı ile çapraz doğrulandı).

{ ad:"Santo Domingo", tur:"sehir", lat:18.4861, lon:-69.9312, g:1, k:1, kur:"1496-01-01",
  s:[{f:"1496-01-01",t:"1795-07-22",d:"ispanya"},
     {f:"1795-07-22",t:"1809-07-09",d:"fransa-cumhuriyet"},
     {f:"1809-07-09",t:"1822-02-09",d:"ispanya"},
     {f:"1822-02-09",t:"1844-02-27",d:"haiti"},
     {f:"1844-02-27",t:"1861-03-18",d:"dominik-cumhuriyeti"},
     {f:"1861-03-18",t:"1865-03-03",d:"ispanya"},
     {f:"1865-03-03",t:"2000-12-31",d:"dominik-cumhuriyeti"}] },
// kaynak: BlackPast.org "Santo Domingo de Guzman" (1496, Bartholomew Columbus), UNESCO Dünya
//         Mirası dosyasıyla çapraz doğrulandı; Frank Moya Pons, "The Dominican Republic: A
//         National History" (Markus Wiener, rev. ed. 2010) — standart akademik monografi.
//         1795-07-22: Basel Antlaşması. 1809-07-09: İspanyol yeniden fethi. 1822-02-09: Haiti
//         ilhakı. 1844-02-27: Dominik bağımsızlığı. 1861-03-18: İspanya'ya gönüllü yeniden ilhak.
//         1865-03-03: Restorasyon Savaşı zaferi.
// k gerekçesi: adanın ilk ve en büyük İspanyol şehri — k:1

{ ad:"Baracoa", tur:"sehir", lat:20.3467, lon:-74.4958, g:0, k:3, kur:"1511-08-15",
  s:[{f:"1511-08-15",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1902-05-20",d:"abd"},
     {f:"1902-05-20",t:"2000-12-31",d:"kuba-cumhuriyeti"}] },
// kaynak: peoplesworld.org (500. yıldönümü haberi) + Diego Velázquez biyografik girişi
//         (Encyclopedia.com) çapraz doğrulandı — Küba'nın ilk yerleşimi ve ilk başkenti (1515'e kadar).
// k gerekçesi: 1515'ten sonra kademesi düştü — k:3

{ ad:"Santiago de Cuba", tur:"sehir", lat:20.0247, lon:-75.8219, g:1, k:2, kur:"1515-07-25",
  s:[{f:"1515-07-25",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1902-05-20",d:"abd"},
     {f:"1902-05-20",t:"2000-12-31",d:"kuba-cumhuriyeti"}] },
// kaynak: standart akademik/kurumsal tarih — 1515-1553 arası Küba'nın başkenti (Velázquez).
// k gerekçesi: 1553'te başkentlik Havana'ya geçti — k:2

{ ad:"Havana (La Habana)", tur:"sehir", lat:23.1136, lon:-82.3666, g:1, k:1, kur:"1519-11-16",
  s:[{f:"1519-11-16",t:"1762-08-13",d:"ispanya"},
     {f:"1762-08-13",t:"1763-02-10",d:"ingiltere"},
     {f:"1763-02-10",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1902-05-20",d:"abd"},
     {f:"1902-05-20",t:"2000-12-31",d:"kuba-cumhuriyeti"}] },
// kaynak: FIU Institute for Cuban Studies; Library of Congress "Cuba in 1898"; Louis A. Pérez
//         Jr., "Cuba: Between Reform and Revolution" (Oxford UP) — 1762-08-13 Havana teslimi,
//         1763-02-10 Paris Antlaşması, 1898-12-10 Paris Antlaşması (1898), 1902-05-20 Küba Cumhuriyeti.
// k gerekçesi: Küba'nın idari başkenti (1553'ten) — k:1

{ ad:"Camagüey bölgesi (Taino)", tur:"bolge", lat:21.3808, lon:-77.9169, g:0, k:0,
  kasitli_bosluk:true, bos:"devletsiz",
  neden:"Küba'nın orta kesimindeki Taino/Ciboney toprağı; Diego Velázquez'in 1513-1515 fetih seferleri bölgeyi İspanyol idaresine soktu.",
  s:[{f:"1514-01-01",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1902-05-20",d:"abd"},
     {f:"1902-05-20",t:"2000-12-31",d:"kuba-cumhuriyeti"}] },
// kaynak: Wilson (1990); Irving Rouse, "The Tainos" (Yale UP, 1992).
// 🔴 DİKKAT: devletler.js'te "kuba" id'si ZATEN VAR ama Orta Afrika'daki Kuba Krallığı —
//    bu yüzden id kesinlikle "kuba-cumhuriyeti", "kuba" KULLANILMADI.

{ ad:"Caparra", tur:"sehir", lat:18.4255, lon:-66.1111, g:0, k:3, kur:"1508-01-01",
  bit:"1521-01-01",
  s:[{f:"1508-01-01",t:"1521-01-01",d:"ispanya"}] },
  // 1521'de nüfus bugünkü San Juan adacığına taşındı, Caparra terk edildi.
// kaynak: EBSCO Research Starters "Puerto Rico Is Discovered by Europeans"; Fernando Picó,
//         "History of Puerto Rico" (Markus Wiener, 2006).
// k gerekçesi: Porto Riko'nun ilk İspanyol yerleşimi — k:3
// 🟢 DÜZELTME (14 Ağustos, koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
// yalnız `bit:` bırakıldı — "burası kasten boş" DEĞİL "şehir artık yok" (§11 ayrımı).
// ⚠️ AMA bu, HARİTA
// yani Caparra'nın petek'i 1521 sonrası hâlâ EN YAKIN KOMŞUYA emilecek — coğrafi
// olarak muhtemelen doğru (San Juan'a çok yakın, aynı ada) ama ÖLÇÜLMEDİ.

{ ad:"San Germán", tur:"sehir", lat:18.0803, lon:-67.0450, g:0, k:2, kur:"1512-01-01",
  s:[{f:"1512-01-01",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1923-10-29",d:"abd"},{f:"1923-10-29",t:"2000-12-31",d:"puerto-riko",kaynak:"Britannica 'Puerto Rico' (Commonwealth 1952-07-25)"}] },
// kaynak: Britannica "San Germán"; topuertorico.org — Porto Riko'nun ikinci en eski yerleşimi.
// k gerekçesi: adanın güney idari bölgesi merkezi — k:2

{ ad:"San Juan", tur:"sehir", lat:18.4655, lon:-66.1057, g:1, k:1, kur:"1521-01-01",
  s:[{f:"1521-01-01",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1923-10-29",d:"abd"},{f:"1923-10-29",t:"2000-12-31",d:"puerto-riko",kaynak:"Britannica 'Puerto Rico' (Commonwealth 1952-07-25)"}] },
// kaynak: EBSCO Research Starters; Picó (2006). 1898 sonrası Porto Riko ABD toprağı olarak
//         KALDI (bağımsızlık yok), yeni kimlik gerekmiyor.
// k gerekçesi: Porto Riko'nun idari başkenti (1521'den) — k:1

{ ad:"Spanish Town (Villa de la Vega)", tur:"sehir", lat:17.9911, lon:-76.9574, g:0, k:1, kur:"1534-01-01",
  s:[{f:"1534-01-01",t:"1655-05-10",d:"ispanya"},
     {f:"1655-05-10",t:"1962-08-06",d:"ingiltere"},{f:"1962-08-06",t:"2000-12-31",d:"jamaika",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },
// kaynak: Jamaica National Heritage Trust; Clinton V. Black, "History of Jamaica" (1958) —
//         1534-1872 arası Jamaika'nın başkenti.
// k gerekçesi: Jamaika'nın idari başkenti (1872'ye kadar) — k:1

{ ad:"Port Royal", tur:"liman", lat:17.9370, lon:-76.8318, g:0, k:2, kur:"1655-01-01",
  s:[{f:"1655-01-01",t:"1962-08-06",d:"ingiltere"},{f:"1962-08-06",t:"2000-12-31",d:"jamaika",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },
// kaynak: Black (1958) — ana deniz/korsan üssü. 1692 depremi (7 Haziran) kentin 2/3'ünü yıktı
//         ama egemenlik değişmedi.
// k gerekçesi: deniz/korsan üssü — k:2

{ ad:"Kingston", tur:"sehir", lat:17.9712, lon:-76.7936, g:1, k:1, kur:"1692-01-01",
  s:[{f:"1692-01-01",t:"1962-08-06",d:"ingiltere"},{f:"1962-08-06",t:"2000-12-31",d:"jamaika",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },
// kaynak: Black (1958) — Port Royal depreminin ardından kuruldu; başkentlik 1872'de geçti.
// k gerekçesi: 1872'den itibaren Jamaika'nın başkenti — k:1

{ ad:"San José de Oruña (St. Joseph)", tur:"kale", lat:10.6516, lon:-61.4128, g:0, k:2, kur:"1592-01-01",
  s:[{f:"1592-01-01",t:"1797-02-18",d:"ispanya"},
     {f:"1797-02-18",t:"1962-08-31",d:"ingiltere"},{f:"1962-08-31",t:"2000-12-31",d:"trinidad-tobago",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },
// kaynak: Bridget Brereton, "A History of Modern Trinidad, 1783-1962" (Heinemann, 1981); Eric
//         Williams, "History of the People of Trinidad and Tobago" (1962) — Antonio de Berrio'nun
//         kurduğu ilk başkent (1784'e kadar). 1797-02-18: Abercromby'nin fethi, Vali Chacón teslimi.
// k gerekçesi: Trinidad'ın ilk İspanyol başkenti — k:2

{ ad:"Port of Spain (Puerto de España)", tur:"sehir", lat:10.6549, lon:-61.5019, g:1, k:1, kur:"1757-01-01",
  s:[{f:"1757-01-01",t:"1797-02-18",d:"ispanya"},
     {f:"1797-02-18",t:"1962-08-31",d:"ingiltere"},{f:"1962-08-31",t:"2000-12-31",d:"trinidad-tobago",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}] },
// kaynak: Brereton (1981) — Vali Pedro de la Moneda'nın 1757 taşınma kararı.
// k gerekçesi: Trinidad'ın idari başkenti (1757'den) — k:1

{ ad:"Georgetown (Stabroek)", tur:"sehir", lat:6.8013, lon:-58.1551, g:1, k:1, kur:"1781-01-01",
  s:[{f:"1781-01-01",t:"1784-01-01",d:"fransa"},{f:"1784-01-01",t:"1796-04-22",d:"hollanda"},{f:"1796-04-22",t:"1802-03-27",d:"ingiltere"},{f:"1802-03-27",t:"1803-09-01",d:"hollanda"},{f:"1803-09-01",t:"1831-01-01",d:"ingiltere"},{f:"1831-01-01",t:"1966-05-26",d:"ingiliz-guyanasi"},{f:"1966-05-26",t:"2000-12-31",d:"guyana",kaynak:"Bagimsizlik 1966-05-26 (Britannica); Cumhuriyet 1970 ayni kimlik"}] },
// kaynak: Wikipedia "Essequibo (colony)"/"Demerara" akademik ansiklopedi girişleri (Anglo-Dutch
//         Treaty of London 1814 ile çapraz doğrulandı); Cornelis Ch. Goslinga, "A Short History
//         of the Netherlands Antilles and Surinam" (Martinus Nijhoff, 1979).
// k gerekçesi: Demerara-Essequibo'nun idari merkezi — k:1

{ ad:"New Amsterdam (Berbice)", tur:"sehir", lat:6.2495, lon:-57.5207, g:0, k:2, kur:"1627-01-01",
  s:[{f:"1627-01-01",t:"1796-04-22",d:"hollanda"},{f:"1796-04-22",t:"1802-03-27",d:"ingiltere"},{f:"1802-03-27",t:"1803-09-01",d:"hollanda"},{f:"1803-09-01",t:"1831-01-01",d:"ingiltere"},{f:"1831-01-01",t:"1966-05-26",d:"ingiliz-guyanasi"},{f:"1966-05-26",t:"2000-12-31",d:"guyana",kaynak:"Bagimsizlik 1966-05-26 (Britannica); Cumhuriyet 1970 ayni kimlik"}] },
// kaynak: Britannica "Berbice"; Goslinga (1979) — Berbice kolonisi 1627 kuruluşu (ilk başkent
//         Fort Nassau; New Amsterdam kasabası 1790'da yeni başkent oldu, basitlik için tek nokta).
// k gerekçesi: Berbice kolonisinin merkezi — k:2

{ ad:"Paramaribo", tur:"sehir", lat:5.8520, lon:-55.2038, g:1, k:1, kur:"1630-01-01",
  s:[{f:"1630-01-01",t:"1667-07-31",d:"ingiltere"},{f:"1667-07-31",t:"1799-01-01",d:"hollanda-guyanasi"},{f:"1799-01-01",t:"1802-03-27",d:"ingiltere"},{f:"1802-03-27",t:"1804-01-01",d:"hollanda-guyanasi"},{f:"1804-01-01",t:"1816-01-01",d:"ingiltere"},{f:"1816-01-01",t:"1975-11-25",d:"hollanda-guyanasi"},{f:"1975-11-25",t:"2000-12-31",d:"surinam",kaynak:"Britannica (ilgili devlet/ülke maddesi)"}] },
// kaynak: Wikipedia "Treaty of Breda (1667)"; mapofsuriname.org (Surinam Ulusal Arşivi destekli);
//         Goslinga (1979) — Breda Antlaşması (31 Temmuz 1667) "uti possidetis" ile Hollanda'ya
//         bıraktı (İngiltere karşılığında New York'u aldı — ünlü takas).
// k gerekçesi: Surinam'ın idari başkenti — k:1

{ ad:"Cayenne", tur:"sehir", lat:4.9346, lon:-52.3303, g:1, k:1, kur:"1643-01-01",
  s:[{f:"1643-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1809-01-14",d:"fransa-cumhuriyet"},{f:"1809-01-14",t:"1817-01-01",d:"portekiz"},{f:"1817-01-01",t:"2000-12-31",d:"fransiz-guyanasi"}] },
// kaynak: Wikipedia "Invasion of Cayenne (1809)" — Fort Cépérou kuruluşu (1643). 1809'da
//         İngiliz-Portekiz filosu Brezilya'daki Portekiz Krallığı'na devretti; 1814 Paris
//         Antlaşması iade kararı verdi, fiilî tahliye 1817'ye kadar sürdü. "fransa-cumhuriyet"
//         devletler.js'te ZATEN VAR (satır 780), yeni kimlik gerekmedi.
// k gerekçesi: Fransız Guyanası'nın idari başkenti — k:1

{ ad:"Colonia del Sacramento", tur:"sehir", lat:-34.4723, lon:-57.8410, g:0, k:2, kur:"1680-01-01",
  s:[{f:"1680-01-01",t:"1705-01-01",d:"portekiz"},
     {f:"1705-01-01",t:"1715-01-01",d:"ispanya"},
     {f:"1715-01-01",t:"1762-01-01",d:"portekiz"},
     {f:"1762-01-01",t:"1763-02-10",d:"ispanya"},
     {f:"1763-02-10",t:"1777-06-04",d:"portekiz"},
     {f:"1777-06-04",t:"1814-06-20",d:"ispanya"},
     {f:"1814-06-20",t:"1817-01-01",d:"arjantin-cumhuriyeti"},
     {f:"1817-01-01",t:"1822-09-07",d:"portekiz"},
     {f:"1822-09-07",t:"1828-08-27",d:"brezilya-imparatorlugu"},
     {f:"1828-08-27",t:"2000-12-31",d:"uruguay-cumhuriyeti"}] },
// kaynak: Colonial Voyage akademik tarih portalı; Wikipedia "First Treaty of San Ildefonso"/
//         "Spanish–Portuguese War (1776-1777)"; John Lynch, "The Spanish American Revolutions,
//         1808-1826" (2. bs. 1986). BEŞ el değiştirme (1680→1705→1715→1762→1763→1777) Buenos
//         Aires'in tam karşısındaki bu kalenin 100 yıllık tartışmalı statüsünü yansıtıyor.
// 🟡 1814-1817 arası basitleştirme AÇIKÇA işaretli — bölge fiilen Buenos Aires'le savaş
//    hâlindeki Artigas'ın Liga Federal'ine bağlıydı, bu akım için kimlik yok (gelecek araştırma borcu).
// k gerekçesi: Río de la Plata'nın en tartışmalı sınır kalesi — k:2

{ ad:"Montevideo", tur:"sehir", lat:-34.9011, lon:-56.1645, g:1, k:1, kur:"1726-12-24",
  s:[{f:"1726-12-24",t:"1814-06-20",d:"ispanya"},
     {f:"1814-06-20",t:"1817-01-01",d:"arjantin-cumhuriyeti"},
     {f:"1817-01-01",t:"1822-09-07",d:"portekiz"},
     {f:"1822-09-07",t:"1828-08-27",d:"brezilya-imparatorlugu"},
     {f:"1828-08-27",t:"2000-12-31",d:"uruguay-cumhuriyeti"}] },
// kaynak: Wikipedia "Timeline of Montevideo"; John Street, "Artigas and the Emancipation of
//         Uruguay" (Cambridge UP, 1959) — 1814-06-20 Alvear'ın kuşatması/Vigodet teslimi;
//         1817 Luso-Brezilya işgali; 1822-09-07 Brezilya bağımsızlığı; 1828-08-27 Montevideo
//         Antlaşması, Uruguay'ın bağımsızlığı. Aynı 1814-1817 basitleştirme uyarısı geçerli.
// k gerekçesi: Uruguay'ın idari başkenti — k:1

{ ad:"Córdoba (Arjantin)", tur:"sehir", lat:-31.4201, lon:-64.1888, g:1, k:1, kur:"1573-07-06",
  s:[{f:"1573-07-06",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"2000-12-31",d:"arjantin-cumhuriyeti"}] },
// kaynak: David Rock, "Argentina 1516-1987" (Univ. of California Press, 1987); John Lynch
//         (1986). "(Arjantin)" eki Kastilya'nın "Córdoba"sıyla AD ÇAKIŞMASINI önlemek için.
// k gerekçesi: iç bölge idari/dini merkezi — k:1

{ ad:"Santa Fe (Arjantin)", tur:"sehir", lat:-31.6333, lon:-60.7000, g:0, k:2, kur:"1573-11-15",
  s:[{f:"1573-11-15",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"2000-12-31",d:"arjantin-cumhuriyeti"}] },
// kaynak: David Rock (1987); Encyclopedia.com "Santa Fe, Argentina" — Córdoba ile AYNI YIL
//         (1573) Juan de Garay tarafından kuruldu.
// NOT: "(Arjantin)" eki, Kuzey Amerika bölümündeki Santa Fe (New Mexico) ile AD ÇAKIŞMASINI
//      önlemek için eklendi — Córdoba(Arjantin) ile aynı disiplin.
// k gerekçesi: Río de la Plata iç bölge şehri — k:2

{ ad:"Corrientes", tur:"sehir", lat:-27.4806, lon:-58.8341, g:0, k:2, kur:"1588-04-03",
  s:[{f:"1588-04-03",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"2000-12-31",d:"arjantin-cumhuriyeti"}] },
// kaynak: RIUNNE dijital repozitoryumu, "La fundación de Corrientes" — 3 Nisan 1588, Asunción'dan
//         gelen Juan Torres de Vera y Aragón; Buenos Aires-Asunción hattını güvenceye aldı.
// k gerekçesi: nehir hattı şehri — k:2

{ ad:"Mendoza", tur:"sehir", lat:-32.8908, lon:-68.8272, g:1, k:1, kur:"1561-03-02",
  s:[{f:"1561-03-02",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"2000-12-31",d:"arjantin-cumhuriyeti"}] },
// kaynak: David Rock (1987). NOT: 1561-1776 arası coğrafi/idari olarak Şili Genel Valiliği'ne
//         bağlıydı, 1776'da Río de la Plata Genel Valiliği'ne devredildi — her iki dönem de aynı
//         "ispanya" kimliği altında olduğu için model AŞILMADI, yalnız not düşüldü.
// k gerekçesi: Cuyo bölgesinin idari merkezi — k:1

{ ad:"Asunción", tur:"sehir", lat:-25.2637, lon:-57.5759, g:1, k:1, kur:"1537-08-15",
  s:[{f:"1537-08-15",t:"1811-05-14",d:"ispanya"},
     {f:"1811-05-14",t:"2000-12-31",d:"paraguay-cumhuriyeti"}] },
// kaynak: John Hoyt Williams, "The Rise and Fall of the Paraguayan Republic, 1800-1870"
//         (Univ. of Texas Press, 1979) — "Şehirlerin Anası", Buenos Aires/Santa Fe/Corrientes'in
//         kuruluş üssü. 14-15 Mayıs 1811'de doğrudan İspanya'dan (Buenos Aires'ten DEĞİL,
//         Arjantin'e katılmadan) bağımsızlığını ilan etti.
// k gerekçesi: Paraguay'ın idari başkenti — k:1

];

;
