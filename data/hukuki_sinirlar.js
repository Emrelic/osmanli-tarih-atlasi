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
    kutu: { lat_min: 20.0, lat_max: 24.0, lon_min: 24.0, lon_max: 37.0 },
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
        kaynak: "TDV karlofca: \"Suçeva ... Osmanlılar geri aldı\"; koordinat data/yerlesimler.js:444'ten (KITA 30 bu turda tamamladı, uydurulmadı)" },
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
  t: "1918-11-11", // habsburg'un kendi sonu (devletler.js) — t:null çökmesinden kaçınmak için
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
  t: "1918-11-11", // habsburg'un kendi sonu
  hat: {
    tur: "nokta-kumesi",
    nokta_atamalari: [
      { ad: "Kostayniça (Kostajnica)", lat: 45.183, lon: 16.683, taraf: "habsburg",
        kaynak: "Karlofça birincil metni: \"Castanoviz...remain in the Power of the Emperor of the Romans\" — data/yerlesimler_ek29.js'te GERÇEK nokta" },
      { ad: "Bosna Novi'si (Bosanski Novi)", lat: 45.048, lon: 16.377, taraf: "habsburg",
        kaynak: "Karlofça birincil metni: \"...Novi...shall be drawn out...left entirely free\" — data/yerlesimler_ek29.js'te GERÇEK nokta" }
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
      kurt_beylikleri: "Karar 5: Kürt beylikleri ayrı beylik GÖSTERİLMEZ, Osmanlı tâbisi. Hat tarafı ölçüldü (bu oturum): Bâne · Merîvan · Mahabad · Sakkız · Serdeşt hattın OSMANLI tarafında — değişiklik gerekmedi.",
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
