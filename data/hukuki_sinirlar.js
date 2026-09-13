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
// 🔴 GEÇMEDİ — koordinat/kapsama eksik, taslağın kendisi zaten
//    NOT_TAMAMLANMAMIS/ONEMLI_EKSIK diye işaretlemişti, bu turda da
//    tamamlanmadı (yeni bir yer-adı araştırması bu görevin kapsamı dışı,
//    D107 gereği "ölçülemedi" değil "araştırılmadı" diye ayrı yazılıyor):
//   ⑥ karlofca-bosna-sava-1699           — hat uçları (Bosut ağzı, Brod
//      Kalesi) lat/lon YOK, kapsama.kutu YOK.
//   ⑦ karlofca-banat-maros-tisza-tuna-1699 — dört hat noktası da lat/lon
//      YOK, kapsama.kutu YOK; ayrıca Maros/Mureş nehri motorun BUYUK
//      kümesinde de yok (ayrı bir arac/ borcu, bu dosyanın konusu değil).
//   ⑧ karlofca-bosna-kaleler-1699        — BEŞ noktanın (Kostayniça,
//      Bihke, Novi, Krupa, Brod) BEŞİ de atlasta_var:false VE lat/lon
//      YOK — bunlar yerlesimler.js'te olmayan yeni yer adları, dış
//      kaynaktan (Wikipedia vb.) koordinat araştırması gerektiriyor.
//      Emre'nin M-3463 kararıyla bu artık C'nin kendi iş kalemi (bir
//      "§2'ye havale" mazereti değil) ama BU TURDA araştırılmadı.
//   ⑨ karlofca-bosna-una-1699 (karma)    — Una nehri Natural Earth'te
//      Balkan'daki değil BREZİLYA'daki bir "Una" (taslağın kendi bulgusu,
//      bağımsız doğrulandı) — gerçek geometri hiçbir kaynakta yok. Beş
//      garnizon noktasının da lat/lon'u YOK.
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
}

];
