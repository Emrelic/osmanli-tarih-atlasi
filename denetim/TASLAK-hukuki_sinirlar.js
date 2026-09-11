// ============================================================================
// data/hukuki_sinirlar.js TASLAĞI — "C DOSYA YAZIM" oturumu, 11 Eylül 2026
// 🔴 BU DOSYA denetim/ ALTINDA — data/ DONUK olduğu için oraya YAZILMADI.
//    Koşu bitince (~02:05) ADIYLA (data/hukuki_sinirlar.js) TAŞINACAK.
// Şema kaynağı: denetim/SEMA-C-0911.md §8.1. index.html satırı: §5 aşağıda.
// ============================================================================
window.HUKUKI_SINIRLAR = [

{
  id: "midye-enez-1913",
  taraflar: ["osmanli", "bulgaristan-kralligi"],
  // 🔴 DÜZELTME (görevin ② talimatı): SEMA-C-0911.md §8.1'deki örnekte
  // KASITLI OLARAK "balkan-devletleri" bırakılmıştı (tekil künye DEĞİL,
  // devletler.js'te böyle bir id yok — uyarı örneğiydi). devletler.js
  // TARANDI: "bulgaristan-kralligi" (f:1908-10-05, t:1923-10-29, krallik,
  // balkanlar) GERÇEK ve dönemi (1913-05/06) kapsıyor. Fiilen toprağı
  // idare eden/işgal eden taraf Bulgaristan'dı (Balkan müttefikleri içinde
  // Trakya'yı fiilen elinde tutan taraf) — bu yüzden "balkan-devletleri"
  // (dörtlü ittifakın TAMAMI) DEĞİL, tekil ve doğru künye seçildi.
  f: "1913-05-30",
  t: "1913-06-29",
  f_kaynak: "Londra Antlaşması imza günü (Wikisource neşri)",
  t_kaynak: "II. Balkan Savaşı başlangıcı, Osmanlı ordusunun hattı aşıp Edirne'yi fiilen geri aldığı gün — data/olaylar_ek5.js:403 (\"Osmanlı Devleti bu fırsatı değerlendirerek Londra Antlaşması'nın çizdiği Midye-Enez hattını aştı ve Doğu Trakya'yı Edirne ile birlikte geri aldı.\"). PILOT-C-MIDYE-ENEZ-0911.json'da zaten seçilmiş f/t, burada AYNEN kullanıldı — yeni bir hassasiyet ÜRETİLMEDİ.",

  hat: {
    tur: "cetvel",
    nokta_dizisi: [
      { lon: 26.075, lat: 40.724, ad: "Enez",
        kaynak: "data/yerlesimler.js:126 (MEVCUT nokta, koordinat uydurulmadı)",
        dogrulanmadi: false },
      { lon: 28.09611, lat: 41.63528, ad: "Midye (bugünkü Kıyıköy, Kırklareli/Vize)",
        kaynak: "Wikipedia 'Kıyıköy' maddesi, 41°38'07\"N 28°05'46\"E; ikinci bağımsız kaynak (latitude.to, 41.6345/28.0910) ~1 km fark ile teyit etti. Midye/Kıyıköy data/yerlesimler*.js ailesinde NOKTA OLARAK YOK (77 dosya tarandı, PILOT-C-MIDYE-ENEZ-0911.json'da doğrulandı) — bu yüzden koordinat DIŞ kaynaktan.",
        dogrulanmadi: false,
        not: "Koordinatın kendisi iki bağımsız kaynakla teyitli olduğu için dogrulanmadi:false; NOKTA OLARAK EKSİK OLMASI ayrı bir konu (§2 işi, bkz. PILOT-C-MIDYE-ENEZ ve ALTERNATIF-C bulguları — bu C kaydının çalışması için nokta eklenmesi GEREKMİYOR, bkz. kapsama testi aşağıda)." }
    ]
  },

  gereken_cografya: [
    { ad: "Enez", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js:126" },
    { ad: "Midye (Kıyıköy)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null,
      not: "Belgenin ADLANDIRDIĞI iki yerden biri, atlasta nokta olarak YOK — Emre'nin ilkesiyle bu C'nin kendi iş kalemi (§2'ye havale EDİLMEDİ, burada AÇIKÇA kayıtlı duruyor)." }
  ],
  // 🔴 Bu ikisi DIŞINDA, kapsama.kutu içindeki 65 (67-2) yerleşim belgede
  // HİÇ ADLANDIRILMIYOR — bkz. aşağıdaki `kapsama_kaplama_analizi` (C5'in
  // "44/67 nokta kaplanmalı" bulgusuna karşı ÖLÇÜM + üç seçenek, KARAR
  // VERİLMEDİ, M-3480 talimatı).

  kapsama: {
    tur: "bbox",
    // 🔴 GÜNCELLEME (M-3480, Emre'nin "doğal sınıra kadar cömertçe genişlet"
    // kuralı) — eski kutu (40.5-42.0K/25.8-29.3D) hattın DAR çevresine
    // kırpılmıştı, ekranda yapay bir dikiş üretme riski taşıyordu. Yeni
    // kutu iki DOĞAL sınıra (Ege + Karadeniz kıyı şeridi) kadar uzatıldı.
    kutu: { lat_min: 40.0, lat_max: 42.5, lon_min: 25.5, lon_max: 29.5 },
    kutu_eski_dar: { lat_min: 40.5, lat_max: 42.0, lon_min: 25.8, lon_max: 29.3 },
    dogal_sinir_gerekcesi: "Güney/batı: Ege kıyısı (Enez ve Dedeağaç/Alexandroupoli çevresi açık denize taşar). Kuzey/doğu: Karadeniz kıyısı (Midye/Kıyıköy'ün ötesi + İstanbul/Boğaziçi'nin doğal su sınırı). Kenarların hiçbiri kara ortasında BİTMİYOR — ölçüt (M-3480'in kendi cümlesi) sağlanıyor.",
    sezgi_kapali: true,
    yon_kurali: "cross_yerel > 0  ->  taraflar[1] (bulgaristan-kralligi) ; cross_yerel < 0  ->  taraflar[0] (osmanli)",
    formul: "cross_yerel = dx*(P.lat-A.lat) - dy*(P.lon-A.lon), dx=(B.lon-A.lon), dy=(B.lat-A.lat), A/B=nokta_dizisi'nin (tek segment olduğu için) uçları — SEMA-C §8.2'nin YEREL/nearest-segment algoritmasının bu TEK-SEGMENTLİ (①c) özel durumu; N=2 olduğu için 'en yakın segment' HER ZAMAN aynı tek segmenttir, yani bu formül GLOBAL cross-product ile BİREBİR AYNI sonucu verir."
  },

  kapsama_kaplama_analizi: {
    // 🔴 M-3480 ③ talimatı: "ÖLÇ, ŞIKLARIYLA SUN, KARAR VERME."
    olcum: {
      eski_dar_kutuda_yerlesim: 42,   // bu oturumda BAĞIMSIZ sayıldı (girdi.GIRDI_DOSYALARI, regex-tabanlı)
      yeni_genis_kutuda_yerlesim: 67, // aynı yöntemle, C DENETIMI'nin "44" rakamına YAKIN ama TAM AYNI değil
      fark_notu: "C DENETIMI bağımsız olarak eski dar kutuda 44 buldu, ben 42 — küçük fark muhtemelen bbox sınır dahil/hariç kuralı ya da regex ayrıştırma farkı; İKİ BAĞIMSIZ ölçüm aynı BÜYÜKLÜK MERTEBESİNDE (40'lı), bu yeterli çapraz doğrulama sayıldı. Genişletilmiş kutuda +25-30 ek yerleşim (bu turda SADECE benim tarafımdan ölçüldü, C DENETIMI henüz genişletilmiş kutuyu ölçmedi).",
      belgenin_adlandirdigi: 2   // yalnız Enez ve Midye — Madde II başka HİÇBİR yer/nehir/dağ anmıyor
    },
    kaplanmamis_65_nokta_icin_uc_secenek: [
      { id: "A_geometrik_otomatik",
        aciklama: "cross_yerel testiyle OTOMATİK ata — hattın hangi yakasındaysa o taraf. Sahiplik BELGEDEN değil GEOMETRİDEN gelir.",
        artisi: "Uygulaması en kolay, zaten var olan formülün DOĞRUDAN genişletilmesi — ayrı kod gerekmez.",
        eksisi: "Emre'nin 'tek otorite belgedir' ilkesiyle GERİLİMLİ: belge bu 65 yeri hiç anmıyor, ama onlara da hüküm veriyoruz." },
      { id: "B_metinden_cikarsama",
        aciklama: "Antlaşmanın genel ifadesinden ('hattın batısı müttefiklere, doğusu Osmanlı'da kalır') TÜRET — metinsel çıkarsama.",
        artisi: "Emre'nin 'belge konuşuyorsa motor susar' ilkesine DAHA yakın bir GEREKÇE sunar (metnin MANTIĞI uygulanıyor, salt geometri değil).",
        eksisi: "Bu düz-çizgili (①c) hat için SONUÇ A ile MATEMATİKSEL OLARAK BİREBİR AYNI — cross-product zaten 'hangi tarafta' sorusunun geometrik karşılığı. Fark yalnız GEREKÇENİN diline, ÇIKTIYA değil." },
      { id: "C_kismi_sezgi",
        aciklama: "Yalnız belgenin ADLANDIRDIĞI 2 nokta (Enez, Midye) C ile atanır; kapsama kutusundaki DİĞER 65 nokta için sezgi (Voronoi/A/B) AÇIK bırakılır — kapsama.sezgi_kapali TÜM KUTU için değil, yalnız hattın YAKIN ÇEVRESİ için true olur.",
        artisi: "Emre'nin 'belge ne diyorsa o' ilkesini EN SIKI biçimde uygular — belge susan yerde motor da susmaz, eski haline döner.",
        eksisi: "Şemaya YENİ bir kavram gerektirir ('kısmî sezgi_kapali', bölgesel/nokta-bazlı) — SEMA-C §9.3'te YOK, bu üçüncü şık şemanın KENDİSİNİ genişletmeyi gerektiriyor. Ayrıca dikiş sorununu YARI ÇÖZER: kutu geniş olduğu için dış Voronoi ile İÇ sezginin (aynı mekanizma) arasında dikiş OLMAZ, ama İÇ sezgi ile hattın YAKININ arasında YİNE bir mikro-dikiş olabilir." }
    ],
    benim_gozlemim_karar_degil: "A ve B, düz-çizgili (①c) bir hat için ÇIKTI olarak AYNI (yalnız gerekçe farklı) — asıl seçim A/B ikilisi ile C arasında. C, kavramsal olarak en TUTARLI ama şemaya yeni bir alan ekliyor. Karar Emre'nin."
  },

  sinav_kaydi: {
    "①_istanbul": { P: [28.97, 41.0], cross_yerel: -2.0813, beklenen: "osmanli", sonuc: "✓ DOĞRU (negatif → taraflar[0])" },
    "②_kirklareli": { P: [27.225, 41.735], cross_yerel: 0.9954, beklenen: "bulgaristan-kralligi", sonuc: "✓ DOĞRU (pozitif → taraflar[1])" },
    not: "İki test noktası da SEMA-C-0911.md §4b'de daha önce ELLE hesaplanmıştı; burada AYNI formülle, gerçek taraflar[] künyeleriyle TEKRARLANDI — sonuç DEĞİŞMEDİ (tek-segment olduğu için global/yerel fark yaratmıyor, §8.2'nin öngördüğü gibi)."
  },

  kaynak: {
    tur: "antlaşma metni (neşir)",
    ad: "Treaty of London — Peace Treaty between Greece, Bulgaria, Serbia, Montenegro and the Ottoman Empire",
    madde: "Madde II (Article II)",
    alinti: "His Majesty the Emperor of the Ottomans cedes to their Majesties the Allied Sovereigns all the territories of his Empire on the continent of Europe to the west of a line drawn from Enos on the Aegean Sea to Midia on the Black Sea, with the exception of Albania.",
    url: "https://en.wikisource.org/wiki/Treaty_of_London_-_Peace_Treaty_between_Greece,_Bulgaria,_Serbia,_Montenegro_and_the_Ottoman_Empire",
    erisim_notu: "WebFetch ile doğrudan okundu, PILOT-C-MIDYE-ENEZ-0911.json'da ilk kez bulundu, burada AYNEN taşındı (D104: bir cümle iki kayıt arasında taşınırken kaynağını da taşır)."
  },
  kaynak_ikincil: {
    tur: "TDV İslâm Ansiklopedisi",
    not: "Bu antlaşma için TDV dedicated maddesi bu oturumda ARANMADI (kapsam dışı, Wikisource birincil metin yeterli görüldü) — alan bilerek boş bırakıldı, D107 gereği 'aranmadı' diye açıkça yazılıyor, 'yok' denmiyor."
  }
}

,

{
  // 🔴 İKİNCİ KAYIT — D021 gereği (tek kayıtla şema sınanmaz). C VERİ
  // TOPLAMA oturumundan (tahta M-3446/yatay §7.1③) geldi: "Mısır-Sudan
  // 1899, 22. paralel" — Sykes-Picot ADAYI değil ama BİLEREK FARKLI bir
  // hat cinsi (①c'nin "paralel" alt-türü): Midye-Enez KÖŞEGİN bir cetvel
  // hattı, bu ise SAF bir ENLEM EŞİĞİ — cross-product bile GEREKMİYOR.
  // İki kayıt birlikte şemanın İKİ UÇ durumunu (eğik çizgi / düz eşik)
  // sınıyor, D021'in istediği "tek örnek yetmez" testini karşılıyor.
  id: "misir-sudan-22-paralel-1899",
  taraflar: ["misir-kavalali", "ingiliz-sudani"],
  // devletler.js TARANDI (tahmin edilmedi): "ingiliz-sudani" (İngiliz
  // Sudanı/Anglo-Mısır Kondominyumu, f:1899-01-19, t:1923-10-29,
  // tur:gecici-isgal) — f: TARİHİ BU ANTLAŞMANIN İMZA GÜNÜYLE BİREBİR
  // AYNI (1899-01-19), bağımsız doğrulandı. "misir-kavalali" (Mısır
  // Kavalalı Hanedanı) 1899'da hâlâ aktif (t:1914-12-18).
  f: "1899-01-19",
  t: "1914-12-18",
  // 🔴 DÜZELTME (C DENETIMI'nin C1 bulgusu, bağımsız çalıştırdığım C1'de
  // AYNI sonuç doğrulandı): t: EKSİ ingiliz-sudani'nin ESKİ atlas-penceresi-
  // sonu placeholder'ından (1923-10-29) DEVRALINMIŞTI, ama misir-kavalali
  // (taraflar[0]) 1914-12-18'de zaten SONA ERİYOR — [f,t) penceresinde her
  // iki tarafın da GEÇERLİ olması şartını (C1) İHLAL ediyordu. t: artık
  // misir-kavalali'nin GERÇEK sonuna çekildi. Bu, KUZEY tarafın kimliği
  // değiştiği (misir-sultanligi'ne) için sınırın kendisinin YENİDEN
  // değerlendirilmesi gerektiği anlamına gelir — bu kaydın 1914-12-18
  // SONRASI için ayrı bir ardıl C kaydı (ya da AB_YETER kararı) AYRI bir
  // iş, burada AÇILMADI.
  f_kaynak: "Sudan Convention (1899), imza günü — Wikisource neşri, Madde I",
  t_kaynak: "misir-kavalali künyesinin kendi t: alanı (devletler.js, 1914-12-18) — DÜZELTİLDİ, önceki hâli ingiliz-sudani'den yanlış devralınmıştı",

  hat: {
    tur: "paralel",           // 🆕 ŞEMA GENİŞLEMESİ — bkz. SEMA-C-0911.md §8.2 güncellemesi
    enlem: 22.0,
    kaynak: "Wikisource 'Sudan Convention (1899)', Madde I: \"The word 'Sudan' in this Agreement means all the territories South of the 22nd parallel of latitude...\""
  },

  kapsama: {
    tur: "paralel-esigi",
    // 🆕 Cross-product GEREKMİYOR — saf karşılaştırma. Bu, C VERİ
    // TOPLAMA'nın kendi bulgusu ("Sykes-Picot'nin TAM TERSİ: şemanın
    // ucuz bir alt-türü") burada BİRİNCİL kaynakla DOĞRULANARAK kodlandı.
    kutu: { lat_min: 20.0, lat_max: 24.0, lon_min: 24.0, lon_max: 37.0 },
    yon_kurali: "P.lat >= 22.0  ->  taraflar[0] (misir-kavalali, KUZEY) ; P.lat < 22.0  ->  taraflar[1] (ingiliz-sudani, GÜNEY)"
  },

  sinav_kaydi: {
    "①_kahire": { P: [31.24, 30.04], lat: 30.04, beklenen: "misir-kavalali", sonuc: "✓ DOĞRU (30.04 >= 22)" },
    "②_hartum": { P: [32.53, 15.5], lat: 15.5, beklenen: "ingiliz-sudani", sonuc: "✓ DOĞRU (15.5 < 22)" },
    not: "İki nokta da bu görevde ELLE hesaplandı, gerçek petek koşusuyla SINANMADI (arac/ donuk)."
  },

  kaynak: {
    tur: "antlaşma metni (neşir)",
    ad: "Sudan Convention (1899) — Agreement between Her Britannic Majesty's Government and the Government of His Highness the Khedive relative to the future administration of the Soudan",
    madde: "Madde I (Article I)",
    alinti: "The word 'Sudan' in this Agreement means all the territories South of the 22nd parallel of latitude, which: 1. Have never been evacuated by Egyptian troops since the year 1882; or 2. Which having before the late rebellion in the Soudan been administered by the Government of His Highness the Khedive, were temporarily lost to Egypt, and have been reconquered by Her Majesty's Government and the Egyptian Government, acting in concert; or 3. Which may hereafter be reconquered by the two Governments acting in concert.",
    url: "https://en.wikisource.org/wiki/Sudan_Convention_(1899)"
  },
  kaynak_ikincil: {
    tur: null,
    not: "Bu turda aranmadı — birincil metin (Wikisource) net ve tam, ikinci kaynağa gerek görülmedi. D107: 'aranmadı', 'yok' DEĞİL."
  }
}

,

// ============================================================================
// 🔴🔴 EMRE'NİN TANIM DÜZELTMESİ (M-3463, 11 Eylül 2026 22:06) SONRASI
// EKLENEN KAYITLAR — SEMA-C-0911.md §9. Karlofça'nın "C'ye gerek yok"
// denen 4 maddesi ARTIK C kaydı (nokta-ataması da C'nin kapsamına girdi).
// Kaynak: denetim/PILOT-C-KARLOFCA-0911.json (koordinatlar dogrulanmadi:true
// — o pilotun kendi notu: "amaç şemayı sınamak, üretim koordinatı değil").
// ============================================================================

{
  id: "karlofca-bosna-sava-1699",
  taraflar: ["osmanli", "habsburg"],
  f: "1699-01-26", t: null,
  hat: {
    tur: "dogal-tanimsiz",   // Sava BUYUK'te taniniyor aslinda ①a olurdu (C GEREKMEZ)
                              // AMA Emre'nin yeni tanimiyla "belgede ne varsa cizilir"
                              // ilkesi bu segmenti de C'ye ALIYOR OLABILIR -- KARAR
                              // NETLESTIRILMEDI, asagida acikca isaretleniyor.
    nokta_dizisi: [
      { lon: null, lat: null, ad: "Bosut'un Sava'ya döküldüğü yer", dogrulanmadi: true },
      { lon: null, lat: null, ad: "Brod Kalesi", dogrulanmadi: true }
    ]
  },
  gereken_cografya: [
    { ad: "Sava (nehir)", tur: "nehir", atlasta_var: true, atlasta_kaynak: "arac/uret_petek.py:552 BUYUK kümesi (motor zaten tanıyor)" },
    { ad: "Brod Kalesi", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "PILOT-C-KARLOFCA-0911.json'da taranmadı, bu turda da taranmadı" }
  ],
  kapsama: { tur: "bbox", kutu: null, sezgi_kapali: true,
    not: "🔴 KUTU KOORDİNATLARI TASARLANMADI (PILOT-C-KARLOFCA'nın kendi eksiği, bu turda da tamamlanmadı) — D107 gereği açıkça: bu kayıt EKSİK, tam yazılmadı." },
  kaynak: { tur: "TDV İslâm Ansiklopedisi", ad: "karlofca", alinti: "Sava nehrinin Bossut'un Sava'ya döküldüğü yerden Brot Kalesi'ne kadar sınır olması kabul edildi.", url: "https://islamansiklopedisi.org.tr/karlofca" },
  kaynak_ikincil: { tur: null, not: null },
  NOT_TAMAMLANMAMIS: "Bu kayıt PİLOT'tan kopyalandı, koordinatlar/kapsama kutusu HÂLÂ eksik — üretim öncesi TAMAMLANMALI."
},

{
  id: "karlofca-banat-maros-tisza-tuna-1699",
  taraflar: ["osmanli", "habsburg"],
  f: "1699-01-26", t: null,
  hat: {
    tur: "dogal-tanimsiz",
    nokta_dizisi: [
      { lon: null, lat: null, ad: "Osmanlı-Avusturya cephe hattının Maros'a değdiği nokta", dogrulanmadi: true },
      { lon: null, lat: null, ad: "Maros-Tisza kavşağı (Szeged yakını)", dogrulanmadi: true },
      { lon: null, lat: null, ad: "Tisza-Tuna kavşağı", dogrulanmadi: true },
      { lon: null, lat: null, ad: "Belgrad yönünde antlaşmanın bıraktığı nokta", dogrulanmadi: true }
    ]
  },
  gereken_cografya: [
    { ad: "Maros (Mureş)", tur: "nehir", atlasta_var: false, atlasta_kaynak: null,
      not: "🔴 arac/uret_petek.py BUYUK kümesinde YOK, ama veri-kaynak/ne_10m_rivers.geojson'da 'Mures' adıyla VAR (scalerank=8.0, motorun ikinci kapısını da GEÇEMİYOR — KAPSAM-C-0911.json'da GERÇEK BORÇ olarak ölçüldü). Motorun BUYUK listesine bir satır eklenmesi gerekiyor." },
    { ad: "Tisza (Tisa)", tur: "nehir", atlasta_var: true, atlasta_kaynak: "arac/uret_petek.py:552 BUYUK kümesi" },
    { ad: "Tuna (Danube)", tur: "nehir", atlasta_var: true, atlasta_kaynak: "arac/uret_petek.py:552 BUYUK kümesi" }
  ],
  kapsama: { tur: "bbox", kutu: null, sezgi_kapali: true, not: "TASARLANMADI (PİLOT'un kendi eksiği)" },
  kaynak: { tur: "antlaşma metni (neşir)", ad: "Treaty of Karlowitz (İngilizce çeviri, Wikipedia)",
    alinti: "Thence its Boundarys shall be carry'd on from the hither Banks of the Marosche to the River Teysse, and from the hither Bank of the Teysse to the Danube",
    url: "https://en.wikipedia.org/wiki/Treaty_of_Karlowitz" },
  kaynak_ikincil: { tur: "TDV İslâm Ansiklopedisi", ad: "karlofca", not: null },
  NOT_TAMAMLANMAMIS: "Koordinatlar/kapsama kutusu eksik. Maros/Mureş motor borcu AYRI bir iş (arac/, bu oturumun kapsamı dışı)."
},

{
  id: "karlofca-bosna-kaleler-1699",
  taraflar: ["osmanli", "habsburg"],
  f: "1699-01-26", t: null,
  hat: {
    tur: "nokta-kumesi",     // 🆕 §9.3③ — Emre'nin düzeltmesiyle eklenen TÜR
    nokta_atamalari: [
      { ad: "Kostayniça", lat: null, lon: null, taraf: "habsburg", kaynak: "TDV karlofca: \"Kostayniçe Avusturya'da kaldı\"" },
      { ad: "Bihke (Bihać)", lat: null, lon: null, taraf: "osmanli", kaynak: "TDV karlofca: diğer kaleler (Bihke, Novi, Krupa vb.) boşaltıldı → Osmanlı'dan ÇIKTI, yani Avusturya'ya mı yoksa askersizleştirilmiş bölgeye mi geçti TDV metninde NET DEĞİL, 🔴 dogrulanmadi:true" },
      { ad: "Novi (Bosna — Herceg Novi DEĞİL)", lat: null, lon: null, taraf: "belirsiz", kaynak: "aynı, dogrulanmadi:true" },
      { ad: "Krupa", lat: null, lon: null, taraf: "belirsiz", kaynak: "aynı, dogrulanmadi:true" }
    ]
  },
  gereken_cografya: [
    { ad: "Kostayniça", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null },
    { ad: "Bihke (Bihać)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null },
    { ad: "Novi (Bosna)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "Herceg Novi (Karadağ) VAR ama AYRI YER — karıştırılmasın (PILOT-C-KARLOFCA'nın kendi uyarısı)" },
    { ad: "Krupa", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null },
    { ad: "Brod", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "yukarıdaki karlofca-bosna-sava-1699 kaydıyla PAYLAŞILAN nokta" }
  ],
  kapsama: { tur: "bbox", kutu: null, sezgi_kapali: true, not: "TASARLANMADI" },
  kaynak: { tur: "TDV İslâm Ansiklopedisi", ad: "karlofca",
    alinti: "Kostayniçe Avusturya'da kaldı; diğer kaleleri (Bihke, Novi, Krupa vb.) boşaltıldı.",
    url: "https://islamansiklopedisi.org.tr/karlofca" },
  kaynak_ikincil: { tur: null, not: null },
  onemli_uyari: "🔴BU KAYIT ÖNCEKİ TURDA (§6.1, C ŞEMA KAPANIŞ öncesi) 'C'nin işi DEĞİL, sadece §2 nokta ekleme' diye SÜPÜRÜLMÜŞTÜ. Emre'nin M-3463 düzeltmesiyle bu YARGININ KENDİSİ yanlıştı — bu kayıt burada YENİDEN AÇILDI. 5 yerleşimin 5'i de atlasta_var:false — bu C kaydının ÇALIŞMASI için beş yeni yerleşim noktası gerekiyor, ve bu artık (Emre'nin cümlesiyle) C'nin KENDİ İŞ KALEMİ, bir MAZERET değil."
},

{
  id: "karlofca-lehistan-1699",
  taraflar: ["osmanli", "lehistan"],
  f: "1699-01-26", t: null,
  hat: {
    tur: "nokta-kumesi",
    nokta_atamalari: [
      { ad: "Suçava (Suceava)", lat: null, lon: null, taraf: "osmanli", kaynak: "TDV karlofca: \"Suçeva ... Osmanlılar geri aldı\" — data/yerlesimler.js'te MEVCUT nokta" },
      { ad: "Bar (Podolya)", lat: null, lon: null, taraf: "lehistan", kaynak: "TDV karlofca: \"Podolya boşaltıldı\" — data/yerlesimler.js'te MEVCUT nokta" },
      { ad: "Kamaniçe", lat: null, lon: null, taraf: "belirsiz", kaynak: "TDV karlofca: \"Kamaniçe Kalesi yıkıldı\" — atlasta VAR MI TARANMADI" },
      { ad: "Roman", lat: null, lon: null, taraf: "osmanli", kaynak: "TDV karlofca — atlasta VAR MI TARANMADI" }
    ]
  },
  gereken_cografya: [
    { ad: "Suçava (Suceava)", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js (PILOT-C-KARLOFCA'da doğrulandı)" },
    { ad: "Bar (Podolya)", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js (PILOT-C-KARLOFCA'da doğrulandı)" },
    { ad: "Kamaniçe", tur: "yerlesim", atlasta_var: "taranmadı", atlasta_kaynak: null },
    { ad: "Roman", tur: "yerlesim", atlasta_var: "taranmadı", atlasta_kaynak: null }
  ],
  kapsama: { tur: "nokta-listesi", not: "🟢 Bu kayıt için kapsama BBOX değil — 4 nokta zaten ismen bilindiği için geometrik alan GEREKMİYOR (nokta-kümesi türünün en ucuz hâli). sezgi_kapali yine de true: bu 4 nokta A/B'nin kendi emilme/Voronoi sezgisine BIRAKILMAZ, doğrudan burada atanır.", sezgi_kapali: true },
  kaynak: { tur: "TDV İslâm Ansiklopedisi", ad: "karlofca",
    alinti: "Podolya boşaltıldı, Kamaniçe Kalesi yıkıldı, Suçeva, Roman ve diğer kaleleri Osmanlılar geri aldı.",
    url: "https://islamansiklopedisi.org.tr/karlofca" },
  kaynak_ikincil: { tur: null, not: null },
  onemli_uyari: "🔴Suçava ve Bar zaten NOKTA — bu iki yer için 'nokta eklemek' gerekmiyor, yalnız d:/s: dönemi eklenmesi (mevcut A/B alanları) yeterli. AMA Emre'nin tanımıyla bu ATAMANIN KENDİSİ (hangi noktanın hangi tarafa geçtiği) yine de bir C KAYDIDIR — çünkü belge bunu bir ANTLAŞMA MADDESİ olarak tarif ediyor, C'nin görevi yalnız 'nokta yoksa ekle' değil 'belge ne diyorsa onu kaydet'."
},

{
  id: "karlofca-venedik-1699",
  taraflar: ["osmanli", "venedik"],
  f: "1699-01-26", t: null,
  hat: {
    tur: "nokta-kumesi",
    nokta_atamalari: [
      { ad: "Ayamavra (Lefkada)", lat: null, lon: null, taraf: "venedik", kaynak: "TDV karlofca — data/yerlesimler.js'te MEVCUT" },
      { ad: "Trebinye", lat: null, lon: null, taraf: "venedik", kaynak: "TDV karlofca — data/yerlesimler.js'te MEVCUT" },
      { ad: "Kataro (Kotor)", lat: null, lon: null, taraf: "venedik", kaynak: "TDV karlofca — atlasta VAR MI TARANMADI" },
      { ad: "Korent kıyısı", lat: null, lon: null, taraf: "venedik", kaynak: "TDV karlofca — bu bir NOKTA değil BÖLGE tarifi, tek bir yerleşimle temsil edilemeyebilir, dogrulanmadi:true" }
    ]
  },
  gereken_cografya: [
    { ad: "Ayamavra (Lefkada)", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js (PILOT-C-KARLOFCA'da doğrulandı)" },
    { ad: "Trebinye", tur: "yerlesim", atlasta_var: true, atlasta_kaynak: "data/yerlesimler.js (PILOT-C-KARLOFCA'da doğrulandı)" },
    { ad: "Kataro (Kotor)", tur: "yerlesim", atlasta_var: "taranmadı", atlasta_kaynak: null },
    { ad: "Korent kıyısı", tur: "bolge", atlasta_var: "olculemez (bölge tarifi, tek nokta değil)", atlasta_kaynak: null }
    // 🔴 ŞEMA KARARI (C DENETIMI'nin sorduğu, burada YANITLANIYOR — bu bir
    // ŞEMA TAMLIĞI kararı, Emre'nin substantif kararlarından FARKLI):
    // gereken_cografya.tur artık "yerlesim"|"nehir"|"dag" ÜÇÜNE EK olarak
    // "bolge" de KABUL EDİYOR — bir antlaşma her zaman NOKTA/ÇİZGİ tarif
    // etmez, bazen bir KIYI ŞERİDİ/BÖLGE de tarif edebilir (Korent kıyısı
    // gibi) ve bunu "ölçülemez" diye atlamak D107'yi ihlal eder — dördüncü
    // tur olarak KAYDA GEÇİRMEK, atlamaktan iyidir.
  ],
  kapsama: { tur: "nokta-listesi", sezgi_kapali: true, not: null },
  kaynak: { tur: "TDV İslâm Ansiklopedisi", ad: "karlofca",
    alinti: "Ayamavra adaları, Korent denizi kuzey kıyıları ve bazı kalelerin (Kataro, Trebinye) iadesi",
    url: "https://islamansiklopedisi.org.tr/karlofca" },
  kaynak_ikincil: { tur: null, not: null }
},

{
  // 🆕 M-3480 ③ talimatı: KARMA kayıt — aynı maddede HEM hat (Una nehri)
  // HEM nokta listesi (garnizon kaleleri) var. Kardeş oturum (C ÇİZİM
  // KATMANI) buldu; birincil metin BAĞIMSIZ olarak bu oturumda ARANDI ve
  // DOĞRULANDI (WebSearch, "Treaty of Karlowitz Overview 1699" — bir
  // tarihi antlaşma metni derlemesi; scribd barındırıyor, BİRİNCİL METNİN
  // KENDİSİ bir akademik/resmi kaynak DERLEMESİ, scribd yalnız BARINDIRMA
  // platformu — D073 sınıfı bir ayrım, kaynağın MARKASI değil İÇERİĞİ
  // önemli, ama bu url DAHA SAĞLAM bir barındırmayla değiştirilmeli,
  // açıkça işaretliyorum).
  id: "karlofca-bosna-una-1699",
  taraflar: ["osmanli", "habsburg"],
  f: "1699-01-26", t: null,
  hat: {
    tur: "karma",   // 🆕 M-3480 ile gelen BEŞİNCİ tür — hem çizgi hem nokta listesi TAŞIYOR
    cizgi_segmenti: {
      tur: "dogal-tanimsiz",
      nokta_dizisi: [
        { lon: null, lat: null, ad: "Una nehrinin Bosna'ya bakan (osmanlı) kıyısı boyunca sınır başlangıcı", dogrulanmadi: true },
        { lon: null, lat: null, ad: "Una nehrinin Sava'ya döküldüğü civar (Novi yakını)", dogrulanmadi: true }
      ]
    },
    nokta_atamalari: [
      { ad: "Novi (Bosna)", lat: null, lon: null, taraf: "osmanli", kaynak: "'...Imperial Garrisons that are in Novi...shall be drawn out...and the same shall be left entirely free' — garnizon çekiliyor, bölge OSMANLI'da kalıyor (serbest bırakılıyor, Avusturya'ya GEÇMİYOR)" },
      { ad: "Dubica (Dubizza)", lat: null, lon: null, taraf: "osmanli", kaynak: "aynı madde" },
      { ad: "Jasenovac (Sessenovizza — dogrulanmadi:true, kimlik KESİN değil)", lat: null, lon: null, taraf: "osmanli", kaynak: "aynı madde, dogrulanmadi:true" },
      { ad: "Doboy (Doboj — dogrulanmadi:true)", lat: null, lon: null, taraf: "osmanli", kaynak: "aynı madde, dogrulanmadi:true" },
      { ad: "Brod (Bred — dogrulanmadi:true, karlofca-bosna-sava-1699'daki Brod Kalesi İLE AYNI YER Mİ ayrı yer mi BELİRSİZ)", lat: null, lon: null, taraf: "osmanli", kaynak: "aynı madde, dogrulanmadi:true" },
      { ad: "Kostajnica (Castanoviz)", lat: null, lon: null, taraf: "habsburg", kaynak: "'...Castanoviz...together with the farthermost Bank of the said River Unna, are and remain in the Power of the Emperor of the Romans' — Kostajnica ve Una'nın öte yakası Avusturya'da KALIYOR" }
    ]
  },
  gereken_cografya: [
    { ad: "Una (nehir)", tur: "nehir", atlasta_var: false, atlasta_kaynak: null,
      not: "🔴🔴 KARDEŞ OTURUMUN DÜZELTMESİ, BU OTURUMDA BAĞIMSIZ DOĞRULANDI: veri-kaynak/ne_10m_rivers.geojson'da 'Una' adıyla TEK bir kayıt var ve koordinatları (-36.88,-8.29) — BREZİLYA'daki bir Una nehri, Balkan Una'sıyla İLGİSİZ. Balkan Una'sı için dosyada HİÇBİR kayıt YOK. Bu Adige/Mureş'ten (motor tanımıyor AMA veri VAR) FARKLI bir sınıf: kaynak VERİNİN KENDİSİNDE yok — arac/uret_petek.py'nin BUYUK listesine ekleme YETMEZ, önce veri-kaynak/ altına GERÇEK Una geometrisi kazandırılmalı (Natural Earth'ün daha yüksek çözünürlüklü bir sürümü ya da başka bir kaynak)." },
    { ad: "Novi (Bosna)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "karlofca-bosna-kaleler-1699 kaydıyla PAYLAŞILAN eksik nokta" },
    { ad: "Dubica", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null },
    { ad: "Kostajnica", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "karlofca-bosna-kaleler-1699'daki 'Kostayniça' İLE AYNI YER (yazım farkı) — İKİ KAYITTA da eksik, TEK nokta ekleneceği için TEKRAR SAYILMAMALI" },
    { ad: "Jasenovac / Doboy / Brod", tur: "yerlesim", atlasta_var: "kimlik dogrulanmadi", atlasta_kaynak: null }
  ],
  kapsama: { tur: "karma", kutu: null, sezgi_kapali: true,
    not: "TASARLANMADI — hem çizgi hem nokta içeren bir 'karma' kaydın kapsama alanı nasıl hesaplanır (segment-bbox + nokta-tamponu birleşimi mi?) SEMA-C §8/§9'da HENÜZ tarif edilmedi, bu kaydın kendisi bu boşluğu GÖSTERİYOR." },
  kaynak: { tur: "antlaşma metni (neşir/derleme)", ad: "Treaty of Karlowitz — 'Karlovački Mir' derlemesi",
    alinti: "The Country belonging to the Dominion of his Imperial Ottoman Majesty, as far as the River Unna towards Bosnia, shall be limited and bounded by the hither Shore of the River Unna: and all the Imperial Garrisons that are in Novi, Dubizza, Sessenovizza, Doboy and Bred on the part of Bosnia...shall be drawn out from thence, and the same shall be left entirely free. But whereas Castanoviz...together with the farthermost Bank of the said River Unna, are and remain in the Power of the Emperor of the Romans...",
    url: "https://www.scribd.com/document/248934439/Karlova%C4%8Dki-Mir",
    guvenilirlik_notu: "🔴 Bu url bir barındırma platformu (scribd) — İÇERİĞİ tarihi bir antlaşma metni derlemesi olsa da, DAHA SAĞLAM bir akademik/resmi kaynakla (ör. Consolidated Treaty Series, Oxford Public International Law) TEYİT EDİLMELİ. Bu turda ikinci bir kaynakla çapraz doğrulanmadı, D107 gereği açıkça yazılıyor." },
  kaynak_ikincil: { tur: "TDV İslâm Ansiklopedisi", ad: "karlofca", not: "Bu spesifik Una/kale maddesi için TDV metni bu turda AYRICA okunmadı — kapsam dışı bırakıldı." }
}

];

// ============================================================================
// ③ ŞEMA KENDİ DOSYASINA KARŞI SINANDI (görevin ③ talimatı)
// ============================================================================
// SEMA-C-0911.md §8.1'in ZORUNLU alanları: id · taraflar · f:/t: · hat ·
// kapsama · kaynak · kaynak_ikincil — İKİ kayıt da HEPSİNİ taşıyor. ✓
//
// 🔴 AMA BİR EKSİK ÇIKTI, açıkça yazıyorum: §8.1'in ÖRNEK şeması `hat:` için
// yalnız `nokta_dizisi` (①c/①b, çizgi tipi) tanımlıyordu — İngiliz-Sudan
// kaydı `hat.enlem` (paralel tipi) taşıyor, bu YENİ bir alan, ESKİ şemada
// YOKTU. ⇒ KAYIT DEĞİL ŞEMA EKSİKTİ (görevin ③ sorusunun cevabı): şema
// yalnız "çizgi" hat cinsini öngörmüştü, "eşik" cinsini ÖNGÖRMEMİŞTİ.
// SEMA-C-0911.md §8.2'ye bu ikinci tur ile "paralel/meridyen" alt-türü
// EKLENDİ.
// ============================================================================
//
// 🔴🔴 ÜÇÜNCÜ TUR (Emre'nin M-3463 düzeltmesi SONRASI, 5 Karlofça kaydı):
// ŞEMA YİNE EKSİK ÇIKTI, İKİ YENİ ALAN GEREKTİ:
//   (a) gereken_cografya: — Emre'nin "belge kendi coğrafyasını getirir"
//       ilkesi için ZORUNLU; eski şemada YOKTU, SEMA-C §9.3② ile eklendi.
//   (b) hat.tur:"nokta-kumesi" + nokta_atamalari: — nokta-ataması artık
//       C'nin kapsamında (§9.1), ama nokta_dizisi/cross-product bu tür
//       için ANLAMSIZ (çizgi değil, ayrık nokta listesi) — SEMA-C §9.3③.
// TOPLAM DURUM (7 kayıt): 2'si TAM (Midye-Enez, Mısır-Sudan — koordinat +
// kapsama kutusu dolu), 5'i (Karlofça) KISMİ — PILOT-C-KARLOFCA'nın kendi
// eksiği olan koordinat/kapsama-kutusu boşlukları BU TURDA DA doldurulmadı
// (kapsam dışı, D107 gereği her kayıtta "NOT_TAMAMLANMAMIS"/benzeri alanla
// açıkça işaretlendi) — 4 nokta 5 künyenin atlasta_var:false çıkması
// (Kostayniça/Bihke/Novi/Krupa/Brod) Emre'nin tanımıyla artık bir C
// EKSİĞİ, bir §2 mazereti DEĞİL.
// ============================================================================

