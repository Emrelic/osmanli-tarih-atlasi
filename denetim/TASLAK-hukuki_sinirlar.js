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

  kapsama: {
    tur: "bbox",
    kutu: { lat_min: 40.5, lat_max: 42.0, lon_min: 25.8, lon_max: 29.3 },
    yon_kurali: "cross_yerel > 0  ->  taraflar[1] (bulgaristan-kralligi) ; cross_yerel < 0  ->  taraflar[0] (osmanli)",
    formul: "cross_yerel = dx*(P.lat-A.lat) - dy*(P.lon-A.lon), dx=(B.lon-A.lon), dy=(B.lat-A.lat), A/B=nokta_dizisi'nin (tek segment olduğu için) uçları — SEMA-C §8.2'nin YEREL/nearest-segment algoritmasının bu TEK-SEGMENTLİ (①c) özel durumu; N=2 olduğu için 'en yakın segment' HER ZAMAN aynı tek segmenttir, yani bu formül GLOBAL cross-product ile BİREBİR AYNI sonucu verir."
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
  t: "1923-10-29",
  f_kaynak: "Sudan Convention (1899), imza günü — Wikisource neşri, Madde I",
  t_kaynak: "ingiliz-sudani künyesinin kendi t: alanı (devletler.js) — yeni hassasiyet üretilmedi, mevcut künyeden devralındı (D084)",

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
// EKLENDİ (bu görevin teslim raporunda ayrıca işaretlenecek, dosya kendisi
// bu turda GÜNCELLENMEDİ — o AYRI bir commit, karışıklık olmasın diye).
// ============================================================================

