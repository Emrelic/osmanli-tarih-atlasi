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
      kaynak: "TDV luristan [35]" },
    { ad: "Mâku", lat: 39.2942, lon: 44.5142, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV maku [17]", not: "1590 KAZANCI DEĞİL, 1574'ten beri Osmanlı ocaklığı; statükoyla tescillendi — atlas bugün safevi, YAMA-KITA29 A1" }
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
}

];
