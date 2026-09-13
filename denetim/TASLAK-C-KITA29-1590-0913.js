// ============================================================================
// C KAYIT TASLAĞI — Ferhad Paşa (İstanbul) Antlaşması 1590 · KITA 29 · 13 Eylül 2026
// Paket 0046 · H-0011 · H-0012
//
// 🔴 BU DOSYA denetim/ ALTINDA — data/ DONUK (koşu 10). KITA 30 bunu
//    data/hukuki_sinirlar.js'e (window.HUKUKI_SINIRLAR) SINAYARAK taşır.
// 🔴 AD ALANI (§7): burada window.HUKUKI_SINIRLAR_KITA29 — KITA 30'un
//    canlı değişkenini EZMESİN diye ayrı ad. Taşınırken diziye eklenir.
//
// ŞEMA: SEMA-C-0911.md §8.1 + §9.3 + §11 (hassasiyet) + KITA 30 ile tahtadan
//       uzlaşılan "bolge" türü (M-3715 → M-3718 → M-3726):
//       hat.tur:"bolge" · hat.taraf_atanan · nokta_atamalari YALNIZ işaret/atıf
//
// ÖLÇÜM RAPORU: denetim/OLCUM-KITA29-FERHATPASA-0913.md
// ============================================================================

window.HUKUKI_SINIRLAR_KITA29 = [

{
  id: "ferhad-pasa-istanbul-1590",
  taraflar: ["osmanli", "safevi"],
  // `osmanli` devletler.js'te künye DEĞİL (atlasın çekirdeği) — KITA 30
  // BULGU-KITA30-SINAMA.md:52-56'da aynı istisnayla GEÇİRDİ. `safevi` künyesi
  // 1501-07-01 → 1736-03-08, pencereyi kapsıyor (ölçüldü).

  hassasiyet: "bolge",
  hassasiyet_notu: "ANTLAŞMA bir ÇİZGİ çizmiyor ve bir YER LİSTESİ vermiyor: ilke STATÜKO ('fethedilen ülkeler Osmanlı'da kalır') + BÖLGE adları. Aşağıdaki nokta_atamalari'nın bir kısmı antlaşmadan DEĞİL, antlaşmanın UYGULAMA belgesinden (Kasım 1590 Revan tahriri, BOA TD 633) gelir — o atamalar 'yer' düzeyindedir. İkisi karışmasın diye her atamada kaynak_turu alanı var.",

  f: "1590-03-21",
  f_kaynak: "Adlığ 2026 [298]: '21 Mart 1590 tarihinde Osmanlı ve Safevî Devletleri arasında İstanbul Antlaşması veya Ferhad Paşa Antlaşması olarak adlandırılan antlaşma imzalanmıştır.' · atlas maddesi olaylar_ek2.js t:1590-03-21",

  // 🔴 İKİ BİTİŞ — karar koordinatörün/Emre'nin
  t: "1603-10-21",
  t_kaynak: "TDV tebriz [58]: 'Osmanlılar 21 Ekim 1603 tarihine kadar Tebriz'i kontrolleri altında tuttular.' — antlaşmanın tarif ettiği TASARRUFUN ilk fiilî kırılması.",
  t_hukuki: "1612-11-20",
  t_hukuki_kaynak: "TDV nasuh-pasa [73]: '26 Ramazan 1021'de (20 Kasım 1612) 962 (1555) sulhu esas alınmak suretiyle barış yapıldı.'",
  t_secim_gerekcesi: "Kayıt t_hukuki'ye kadar açık kalırsa 1603-1607'de Şah Abbas'ın geri aldığı HER yerde (Tebriz 1603-10-21 · Revan 1604-06-08 · Gence 1606 · Şirvan 1607) belgeli Osmanlı işareti kalır — belgenin eliyle üretilmiş bir Batnoz hayaleti (CLAUDE.md §3.5). Atlas tasarruf boyar (D076). ⇒ Varsayılan t fiilî kırılma. ⚠️ Bu tek bir gün değil bir SÜREÇ: 1603-10-21 kırılmanın BAŞIDIR; Revan ve Gence bu tarihten sonra da bir süre Osmanlı'dır. Nokta başına bitiş, atlasın A/B verisinde zaten doğru modellenmiş (kesit ölçüldü: 1607-06-15 ile 1612-11-21 özdeş).",

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
    bolgeler_ikinci_kaynak: "TDV gurcistan [406]: '… (1590) Tebriz, Karacadağ, Gence, Şirvan, Karabağ, Nihâvend, Luristan, Şehrizor'la beraber Gürcistan Osmanlı idaresine geçti.' — safeviler [211]'in ALT KÜMESİ, çelişki yok (ölçüldü).",
    bolgeler_uyari: "🔴 Bölge adları sınır DEĞİLDİR. 'Azerbaycan' Erdebil'i, 'Kürdistan' Ardalan altılısını (Sakkız · Bâne · Merîvan · Serdeşt · Mahabad · Bîcâr) kapsar mı — kaynak SÖYLEMİYOR. 'Bağdat' 1534'ten beri Osmanlı'dır, bir kazanç değildir. Bu listeden bir kutu ya da poligon ÜRETİLMEZ (D089: ifade edilemeyen ilişkiyi ifade edilebilene çevirmek başka bir iddiadır)."
  },

  // ── NOKTA ATAMALARI — yalnız bir kaynakta ADIYLA geçenler. Koordinatlar
  //    atlastan (denetim/ARAC-KITA29-EVREN-0913.py); atlasta olmayanın
  //    koordinatı null — UYDURULMADI. KITA 30: null'ı atla, çökme.
  nokta_atamalari: [
    { ad: "Tebriz", lat: 38.0800, lon: 46.2920, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV tebriz [53-54]: 'Özdemiroğlu Osman Paşa 30 Ramazan 993'te (25 Eylül 1585) şehri ele geçirdi'" },
    { ad: "Revan", lat: 40.1830, lon: 44.5150, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 (Kasım 1590) — Bilgili 2016 [52] · Adlığ 2026 [306] · TDV revan [42]" },
    { ad: "Nahçıvan", lat: 39.2090, lon: 45.4120, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 — Bilge (Vakanüvis, Kafkasya özel sayısı) [55]: 'Revân Eyâleti'ne bağlanan Nahçıvan Sancağı; Nahçıvan kazâsı ile Dereşahbûz, Gökçe, Mevâzi-i Hatun, Arslanlu, Karabağ, Dereçam ve Bazarçayı nâhiyelerinden meydana geliyordu.'" },
    { ad: "Ordubad", lat: 38.9053, lon: 46.0242, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 — Bilgili 2016 [52] · İslamoğlu 2015, CAHIJ 4, s.132-166, doi:10.18299/cahij.50" },
    { ad: "Şerur (Sharur)", lat: 39.5500, lon: 44.9500, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 — Bilgili 2016 [52] liste · [85] 'Şerur Kazası'", not: "🔴 atlas bugün safevi — YAMA-KITA29 A2" },
    { ad: "Karbi (Karpi) nahiyesi", lat: null, lon: null, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 — Bilgili 2016 [52]", not: "atlasta nokta YOK. Eçmiyadzin (Vagharshapat) bu nahiyededir — Köse 2024 [141][163] (1724 belgesi) · Bilgili 2016 [236] (1727 TD 901)." },
    { ad: "Eçmiyadzin (Üçkilise)", lat: 40.1620, lon: 44.2930, taraf: "osmanli", guven: "cikarim-guclu", kaynak_turu: "tahrir-defteri+idari-uyelik",
      kaynak: "Karbi nahiyesi 1590 Osmanlı tahririnde (TD 633) · köyün Karbi'ye bağlılığı 1724/1727 belgelerinden (Köse 2024, doi:10.26650/iuturkiyat.1351237)",
      not: "🔴 Bilgili'deki 'Üç Kilise' vakıf alıntısı 1727 TD 901 bölümündedir, 1590 DEĞİL (bölüm başlığı [212] ölçüldü). Atlas bugün safevi — YAMA-KITA29 B1 (karar)." },
    { ad: "Talin", lat: null, lon: null, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 — Bilgili 2016 [52][173]", not: "atlasta nokta YOK — Eçmiyadzin ile Gümrü arası" },
    { ad: "Aralık", lat: null, lon: null, taraf: "osmanli", guven: "kesin", kaynak_turu: "tahrir-defteri",
      kaynak: "BOA TD 633 — Bilgili 2016 [52][164]", not: "atlasta nokta YOK — merkezi Ahuri kasabası (Ağrı eteği)" },
    { ad: "Gence", lat: 40.6830, lon: 46.3600, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV murad-iii [114]: 'Ferhad Paşa'nın 996'da (1588) Gence'ye yönelik harekâtı ve 9 Şevval'de (1 Eylül) şehre girişi' · TDV safeviler [210]: '(1 Eylül 1588)'" },
    { ad: "Hoy", lat: 38.5503, lon: 44.9521, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV hoy [24-25]: 'Tebriz'e bağlı bir sancak merkezi haline getirilerek … 1585'te bu sancağın beyi Şahkuluoğulları'ndan Alâeddin Bey idi.'" },
    { ad: "Merâga", lat: 37.3894, lon: 46.2381, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV tebriz [184]: 'Osmanlılar'ın 1593 idarî taksimine göre Tebriz eyaleti … Merâga (… Miyandûvab …) … livâ ve nahiyelerinden oluşuyordu.'" },
    { ad: "Mîyandoab", lat: 36.9694, lon: 46.1028, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV tebriz [184] — Merâga livâsı altında 'Miyandûvab' nahiyesi (1593)", not: "28 Ağu BULGU-FERHATPASA'da 'bulunamadı' idi; atlas ZATEN Osmanlı — dayanak eklendi" },
    { ad: "Şamahı", lat: 40.6320, lon: 48.6410, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV sirvan [33-35]: '1583'te Meşâle Savaşı neticesinde bölgede tamamıyla hâkimiyet kurmayı başardı … 1590 antlaşması bu durumu kesin hale getirdi'", not: "Şirvan bölgesinin merkezi olarak — bölge→nokta eşlemesi ÇIKARIMDIR" },
    { ad: "Tiflis", lat: 41.7160, lon: 44.7830, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV gurcistan [417-418]: '1603'te Şah I. Abbas Tiflis şehrini Osmanlılar'dan geri alıp …'" },
    { ad: "Luristan", lat: 33.4870, lon: 48.3560, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV luristan [35]: '998'de (1590) İstanbul'da yapılan antlaşmaya göre Osmanlı idaresine bağlanan Luristan'ı'" },
    { ad: "Mâku", lat: 39.2942, lon: 44.5142, taraf: "osmanli", guven: "kesin", kaynak_turu: "ansiklopedi",
      kaynak: "TDV maku [17]: '1574 yılında Osmanlı Devleti, Mahmûdî Kürt kabilesi reisi İvaz Bey'i Mâkû'yu İranlılar'dan alıp burada bir kale yapmakla görevlendirdi.'",
      not: "🔴 1590 KAZANCI DEĞİL — 1574'ten beri Osmanlı ocaklığı; antlaşmanın statüko ilkesiyle tescil edilen yerlerden. Atlas bugün safevi — YAMA-KITA29 A1." }
  ],

  acik_sorular: [
    { ad: "Gümrü (Aleksandropol)", durum: "bulunamadi",
      not: "1590 Revan tahririnin kaza/nahiye listesinde Şüregel YOK (1727'de var — Bilgili [52] ↔ [214]). 1583 harekâtında Şüregel'den Sünni nüfus 'Osmanlı idaresindeki topraklara' taşınmış (Bilgili [87]) — o an güvenli Osmanlı toprağı sayılmıyor. Ters yönde: TDV kars [52] Şüregel kalesini 1534 Osmanlı kaleleri arasında 'kuvvetle muhtemel' sayıyor; kaydın kendi m:'Erzurum'. İKİ YÖNLÜ İŞARET, hüküm yok." },
    { ad: "Merend", durum: "bulunamadi",
      not: "Hiçbir okunan kaynak adıyla anmıyor. TDV tebriz [184] 1593 listesinde yok — ama o listede Hoy da yok, yani liste TAM DEĞİL (yokluk kanıt değil)." },
    { ad: "Selmâs (Dilman)", durum: "cikarim-zayif",
      not: "Çeribaş 2025 [139] (Hazine-i Evrak 7/8): '1578-1590 savaşı sırasında … Van Beylerbeyi merkeze Urmiye, Selmas ve Hoy'da yeni kaleler inşa edilmesi gerektiğini bildirmiştir' — bir ÖNERİ, sahiplik değil. Arama motoru özeti bunu 'Tebriz eyaletinin sancağı' diye şişirmişti; belgenin kendisi söylemiyor." },
    { ad: "Erdebil · Kürdistan altılısı", durum: "olculmedi",
      not: "Bölge adlarının ('Azerbaycan', 'Kürdistan') bu yerleri kapsayıp kapsamadığı hiçbir okunan kaynakta yok. Atlas 1590'da safevi." }
  ],

  gereken_cografya: [
    // 1590 Revan tahririnin kaza/nahiye adları (Bilgili 2016 [52]) — atlasta
    // 100 noktalık bölge kutusunda ADIYLA YOK. Koordinat kaynağı okunmadığı
    // için 3 km komşuluk taraması YAPILAMADI (ORTAK kural) → "taranmadi-koordinatsiz".
    { ad: "Karbi (Karpi)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "adıyla yok; Eçmiyadzin bu nahiyede" },
    { ad: "Talin", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "adıyla yok · 3 km taranmadı (koordinatsız)" },
    { ad: "Aralık (Ahuri)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "adıyla yok · 3 km taranmadı" },
    { ad: "Akçakale", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "adıyla yok · 3 km taranmadı" },
    { ad: "Karni (Gerni)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "adıyla yok · 3 km taranmadı" },
    { ad: "Vadi", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "adıyla yok · 3 km taranmadı" },
    { ad: "Abarân", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "adıyla yok · 3 km taranmadı" },
    { ad: "Sisyan", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null, not: "adıyla yok · 3 km taranmadı" },
    { ad: "Karabağ nahiyesi (Nahçıvan sancağı)", tur: "yerlesim", atlasta_var: false, atlasta_kaynak: null,
      not: "🔴 AD TUZAĞI: atlastaki 'Berde (Karabağ)' DEĞİLDİR — bu, Nahçıvan sancağının nahiyesi (Bilge [55]). Sakız/Sakkız vakasının kardeşi." },
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
    not: "🔴 BBOX DOLGU YOK. Ölçüldü (ARAC-KITA29-BENZETIM-0913.py §F): 33-43°K · 41,5-50,5°D kutusunda 1590-03-21'de 123 noktanın 23'ü Osmanlı/tâbi DEĞİL — Erdebil · Zencan · Sultâniye · Kazvin · Reşt · Halhâl · Lenkeran · Astara · Meşkinşehr · Kürdistan altılısı · Gümrü · Merend · Selmâs … Tek renk dolgu bunları YANLIŞ boyar. Emsal: karlofca-lehistan-1699 (nokta-listesi, geometri yok).",
    odak_kutu: { lat_min: 33.0, lat_max: 43.0, lon_min: 41.5, lon_max: 50.5 },
    odak_kutu_not: "YALNIZ kamera odağı için (H-0011'in 'harita odağı doğu sınırını göstermeli' kısmı — KITA 12). Boyama/dolgu için KULLANILMAZ."
  },

  kaynak: {
    tur: "antlaşma özeti (ansiklopedi + hakemli makale)",
    madde: "bulunamadı — antlaşmanın kendi metni/neşri OKUNMADI (TDV'de müstakil madde yok: ferhad-pasa-antlasmasi ve istanbul-antlasmasi 302)",
    alinti: "fethedilen ülkelerin Osmanlılar'ın tasarrufunda kalması şartıyla anlaşma yapıldı",
    url: "https://islamansiklopedisi.org.tr/murad-iii"
  },
  kaynak_ikincil: {
    tur: "hakemli makale + uygulama belgesi (tahrir) atıfları",
    kaynaklar: [
      "Davut Adlığ, 'Osmanlı-Safevî İlişkilerinde Revan Şehri: Hâkimiyet Mücadeleleri, Seferler ve Siyasî Antlaşmalar', Dicle Üniv. SBED 42 (2026), 1-21, doi:10.15182/diclesosbed.1696513",
      "Ali Sinan Bilgili, 'Osmanlı Tahrir Defterlerine Göre İran-Azerbaycan Şehirlerinde Ermeniler', Ermeni Araştırmaları 53 (2016) — BOA TD 633 ve TD 901'e dayanır",
      "Sadık Müfit Bilge, '16. ve 18. Yüzyıllarda Osmanlı Yönetiminde Nahçıvan Sancağı', Vakanüvis 2, Kafkasya Özel Sayısı (ISSN 2149-9535)",
      "Ensar Köse, 'Şah, Çar ve Sultan Arasında: Ermeni Kutsal Makamı Eçmiyadzin'in Çalkantılı Yılları (1700-1725)', Türkiyat Mecmuası 34/1 (2024), 63-94, doi:10.26650/iuturkiyat.1351237",
      "Mehmet Alauddin İslamoğlu, '1590 Tarihli Mufassal Tapu Tahrir Defterine Göre Revan Eyaletinde Alınan Vergiler (Ordubad Kazası Örneği)', CAHIJ 4 (2015), 132-166, doi:10.18299/cahij.50 — YALNIZ ÖZET okundu",
      "Volkan Çeribaş, '1603-1618 Osmanlı-Safevi Savaşı Sırasında Serhadde Teyakkuz: Erzurum', Hazine-i Evrak 7/8 (2025), 661-688"
    ],
    not: "BOA TD 633'ün KENDİSİ okunmadı — atıflar makaleler üzerinden (D104: cümle kaynağıyla taşınır)."
  }
}

];
