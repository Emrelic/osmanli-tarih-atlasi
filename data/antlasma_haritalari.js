// -*- coding: utf-8 -*-
// data/antlasma_haritalari.js — ANTLAŞMA HARİTASI (Emre, paket 0054 H-0020):
// "tüm barış anlaşmaları ... kronolojik maddesinde ... haritada alınan verilen
// bölgelerin boyanması taranması ve üstlerine ... etiketler koyalım ... bu
// harita sadece o kronoloji maddesinde geçerli olacaktır"
//
// window.ANTLASMA_HARITALARI. Her kayıt BİR barış antlaşması kronoloji maddesine
// (data/olaylar*.js, k:"antlasma") bağlanır — eşleştirme js/antlasma_harita.js'te,
// app.js'in mevcut ANTLASMALAR eşleştirme deseniyle AYNI (o.b.indexOf(antlasma_ad)
// + tarih yakınlığı).
//
// 🔴 GEOMETRİ KENDİ BAŞINA ÜRETİLMEZ — data/hukuki_sinirlar.js (C katmanı)
// kayıtlarından TÜRETİLİR (D023: var olan ayrıştırıcıyı tekrar yazma). Her
// `bolgeler[].sinir_id`, o dosyadaki gerçek `id`lere işaret eder; oradaki
// `kaynak`/`dayanak` metni BURADA TEKRARLANMAZ, tıklanınca oradan okunur.
//
// ALANLAR:
//   id             benzersiz
//   antlasma_ad    kronoloji maddesinin `b` alanında ARANACAK alt dizgi
//                  (app.js'teki mevcut desenle aynı: o.b.indexOf(antlasma_ad)>=0)
//   tarih          madde tarihiyle eşleşme kontrolü için (±60 gün)
//   bolgeler[]     { taraf: devletler.js kimliği, etiket: haritada gösterilecek
//                    metin,
//                    sinir_id: [data/hukuki_sinirlar.js id'leri]  (VARSA — TERCİH EDİLEN yol,
//                       C katmanının kendi geometrisinden türer, D023)
//                    noktalar: [{ad, lat, lon, kaynak}]  (hukuki_sinirlar'da kayıt YOKSA —
//                       🆕 DALGA-0058 md.3b, Pasarofça: HUKUKI_SINIRLAR bu antlaşmayı hiç
//                       kapsamıyor, noktalar doğrudan data/yerlesimler*.js'teki GERÇEK
//                       koordinatlardan ve ilgili kronoloji maddesinin `kaynak:` alanından
//                       kuruldu — her noktanın KENDİ `kaynak` metni ZORUNLU, uydurma yok)
//                    kutu: [lon0,lat0,lon1,lat1]  (🆕 DALGA-0066 H-0005 — ne sinir_id ne
//                       noktalar yeterliyse: kaba bbox dikdörtgeni, D-KATMAN'ın kendi
//                       D_SINIRLAR ailesindeki araştırılmış-ama-koordinatsız "D-YOK"
//                       kayıtlarından TÜRETİLDİ, D023. Kesinlik AÇIKÇA düşük — kayıtta
//                       `not` alanına yazılır, hassas sınır İDDİA EDİLMEZ) }
//   not            KAPSAM DIŞI bırakılan bir tarafın ya da veri kalitesi bulgusunun gerekçesi

window.ANTLASMA_HARITALARI = [
{
  id: "karlofca-1699",
  antlasma_ad: "Karlofça",
  tarih: "1699-01-26",
  bolgeler: [
    { taraf: "habsburg", etiket: "Avusturya'ya bırakılan",
      sinir_id: ["karlofca-bosna-sava-1699", "karlofca-bosna-kaleler-1699"] },
    { taraf: "lehistan", etiket: "Lehistan'a bırakılan",
      sinir_id: ["karlofca-lehistan-1699"] },
    { taraf: "venedik", etiket: "Venedik'e bırakılan",
      sinir_id: ["karlofca-venedik-1699"] }
  ],
  not: "Rusya Karlofça'da BARIŞ değil İKİ YILLIK MÜTAREKE imzaladı; Azak'ın devri 1700 " +
       "İstanbul Antlaşması'nda çözüldü — bkz. data/olaylar_ek5.js:260 (kronoloji maddesi, " +
       "kaynak: karlofca·rusya·mustafa-ii, TDV'ye dayanıyor: \"Karlofça'da Rusya ile " +
       "yalnızca iki yıllık mütareke yapılabilmişti\"). Kaynaksız olacağı için Rusya " +
       "bölgesi bu kayda EKLENMEDİ — İstanbul 1700 kendi antlaşma haritası kaydını " +
       "gerektirir (bu pilotta YOK)."
},
{
  // 🆕 DALGA-0058 md.3b (1.MURAT, 17 Eylül) — "Karlofça'dan sonra ikinci antlaşma
  // haritası Pasarofça 1718 olsun". data/hukuki_sinirlar.js bu antlaşmayı HİÇ
  // kapsamıyor (0 kayıt) — noktalar bu yüzden `sinir_id` değil `noktalar` kullanıyor.
  id: "pasarofca-1718",
  antlasma_ad: "Pasarofça",
  tarih: "1718-07-21",
  bolgeler: [
    { taraf: "habsburg", etiket: "Avusturya'ya bırakılan", noktalar: [
        { ad: "Belgrad", lat: 44.818, lon: 20.457,
          kaynak: "data/olaylar_ek5.js:517 (kaynak: pasarofca-antlasmasi, TDV): " +
                  "\"Belgrad ile birlikte Kuzey Sırbistan, Banat ve Küçük Eflak Avusturya'ya terk edildi\"" },
        { ad: "Semendire (Kuzey Sırbistan)", lat: 44.663, lon: 20.93,
          kaynak: "aynı madde; ayrıca data/olaylar_ek17.js:218 (TDV Semendire maddesi): " +
                  "\"1717'de Pasarofça'yla Avusturya'ya bırakılan kale\"" },
        { ad: "Temeşvar (Banat — TEMSİLÎ nokta)", lat: 45.76, lon: 21.23,
          kaynak: "aynı madde \"Banat\" der, tek şehir ADLANDIRMAZ — Temeşvar Banat'ın " +
                  "bilinen idarî merkezi olarak TEMSİLÎ seçildi, antlaşma metninin doğrudan " +
                  "andığı bir yerleşim DEĞİL (bu ayrım kasten belirtiliyor)" },
        { ad: "Krayova / Craiova (Küçük Eflak — TEMSİLÎ nokta)", lat: 44.33, lon: 23.795,
          kaynak: "aynı madde \"Küçük Eflak\" der, tek şehir ADLANDIRMAZ — Krayova Küçük " +
                  "Eflak'ın (Oltenya) bilinen idarî merkezi olarak TEMSİLÎ seçildi, aynı ayrım" }
    ] },
    { taraf: "osmanli", etiket: "Osmanlı'da kalan", noktalar: [
        { ad: "Koron (Mora — TEMSİLÎ nokta)", lat: 36.796, lon: 21.955,
          kaynak: "data/olaylar_ek5.js:517: \"antlaşma Mora'yı Osmanlı'da bıraktı\"; Koron, " +
                  "Mora'nın 1715 seferinde son fethedilen kalesi (data/olaylar_ek5.js:515), " +
                  "yarımadanın TEMSİLÎ noktası olarak seçildi — metin başka bir şehir andırmıyor" }
    ] },
    { taraf: "venedik", etiket: "Venedik'te kalan", noktalar: [
        { ad: "Preveze", lat: 38.9607, lon: 20.7469,
          kaynak: "data/olaylar_ek5.js:517: \"Venedik ise İyon kıyısındaki Preveze ve Çuha " +
                  "gibi mevzilerini korudu\"; teyit data/olaylar_ek6.js:60: \"Preveze ve " +
                  "Vonitsa Pasarofça'da da Venedik'te bırakıldı\"" },
        { ad: "Çuha Adası (Kythira)", lat: 36.24, lon: 22.99,
          kaynak: "aynı madde; teyit data/olaylar_ek5.js:516: \"[Çuha] üç yıl sonra " +
                  "Pasarofça'da Venedik'e geri verildi\"" },
        { ad: "Vonitsa", lat: 38.917, lon: 20.888,
          kaynak: "data/olaylar_ek6.js:60: \"Preveze ve Vonitsa Pasarofça'da da Venedik'te " +
                  "bırakıldı; Osmanlı idaresine ancak 1798'de dönecekti\"" }
    ] }
  ],
  not: "D-GEOARAC'ın otomatik yerleşim-fark aleti (denetim/_ANTLASMA-HARITA-CIKTI-0916.json) " +
       "bu antlaşma için YALNIZ Çuha Adası VE Ayamavra'yı (ikisi de osmanli→venedik yönünde) " +
       "eşleştirdi — Ayamavra YANLIŞ/BELİRSİZ ÇIKTI: kronoloji maddeleri Ayamavra'nın 1699 " +
       "Karlofça'da Venedik'e verildiğini, 1715'te Osmanlı'nın GERİ ALDIĞINI söylüyor " +
       "(data/olaylar_ek5.js:515) ama Pasarofça'daki (1718) akıbetini AÇIKÇA belirtmiyor — bu " +
       "yüzden Ayamavra bu kayda EKLENMEDİ (D107: bulunamadı, uydurulmadı). Çuha doğrulandı ve " +
       "eklendi. Vonitsa da metinde geçiyor (data/olaylar_ek6.js:60) ve koordinatı VAR — eklendi."
},
{
  // 🆕 DALGA-BEKLEYEN.md B5 (17 Eylül) — D-GEOARAC'ın 504'lük genel taramasından
  // (denetim/_ANTLASMA-HARITA-GENIS-CIKTI-0917.json) TEK sağlam eşleşme taşındı.
  // Aynı taramanın öteki iki adayı ELENDİ, gerekçe aşağıda `not` alanında —
  // ikisi de Pasarofça'daki Ayamavra deseninin (D107) tekrarıydı.
  id: "ankara-itilafnamesi-1921",
  antlasma_ad: "Ankara İtilâfnâmesi",
  tarih: "1921-10-20",
  bolgeler: [
    { taraf: "tbmm-turkiye", etiket: "Fransa'dan TBMM'ye geri dönen", noktalar: [
        { ad: "Mersin", lat: 36.8, lon: 34.633,
          kaynak: "data/olaylar_ek5.js (kaynak: milli-mucadele): \"Sakarya zaferinin ardından " +
                  "Fransa ile Ankara'da imzalanan itilâfnâme ile güney cephesindeki savaş sona " +
                  "erdi; Fransız kuvvetleri Adana, Antep, Maraş ve Urfa dahil Çukurova ve " +
                  "Güneydoğu'yu boşaltarak Suriye sınırına çekildi.\" Yerleşim kaydı (Mersin) " +
                  "sahiplik değişimini TAM O GÜN (1921-10-20) taşıyor — 0 gün fark, D-GEOARAC'ın " +
                  "504'lük taramasındaki en güçlü tek eşleşme." }
    ] }
  ],
  not: "D-GEOARAC'ın 504'lük genel taramasında bu antlaşmaya iki ADAY daha çıkmıştı, İKİSİ DE " +
       "elendi: ① Ayastefanos/1878-03-03 → Sofya (osmanli→bulgaristan-prensligi, -58 gün) — " +
       "MİSNİSBET RİSKİ ölçüldü: `data/devletler.js`teki `bulgaristan-prensligi` kaydının KENDİ " +
       "f: tarihi 1878-07-13 (BERLİN Kongresi), Ayastefanos DEĞİL; Sofya'nın devri (1878-01-04) " +
       "gerçekte Rus İŞGALİ tarihi, Ayastefanos'un imzalanmasından 58 gün ÖNCE — pencere " +
       "çakışması yüzünden yanlış antlaşmaya sızmış olabilir (Berlin zaten ANTLASMALAR'da VAR " +
       "ve `bulgaristan-prensligi`nin GERÇEK kuruluş antlaşması odur; Berlin'in kendi harita " +
       "kaydı bu turda YAPILMADI, çok daha geniş — Sırbistan/Romanya/Karadağ bağımsızlığı + " +
       "Bosna + Kars/Ardahan/Batum — bir sonraki tur işi). ② II. Murad-Bizans barışı/1424-02-22 " +
       "→ Aynaroz/Athos (bizans→osmanli, -52 gün) — kaynak zinciri ZAYIF: yerleşim kaydının " +
       "KENDİ `kaynak:` alanı \"atina-antlasmasi\" (1913 Yunanistan devrini belgeliyor), 1424 " +
       "tarihi için AYRI bir kaynak YOK — muhtemelen yuvarlak/genel bir tarih, bu antlaşmaya " +
       "ÖZGÜ bir kanıt değil. İkisi de D107 (\"bulunamadı, uydurulmadı\") gerekçesiyle " +
       "eklenmedi — Pasarofça'daki Ayamavra dersinin (bu dosyanın kendi kaydı) AYNI tekrarı."
},
{
  // 🆕 DALGA-0066 H-0005 (1.MURAT/Emre, 18 Eylül) — "Lehistan'ın 1. paylaşımı haritasında
  // Prusya'nın aldığı topraklar koyu mavi ile görünüyor ama Habsburg/Rusya'nınki hemen o
  // devletlerin rengine bürünüyor, kimin nereleri aldığı belli olmuyor." TEŞHİS: bu bir kod
  // kusuru DEĞİL — üçünün de kaba petek dolgusu KENDİ normal devlet rengiyle boyanıyor
  // (Prusya #2478d2 mavi tesadüfen komşularından ayırt edilebiliyor, Rusya #4f7d4f yeşil VE
  // Habsburg #bdab3f hardal KENDİ eski topraklarıyla aynı renkte, o yüzden "görünmüyor").
  // BU KAYIT o sorunu ÇÖZÜYOR: üç payı da ayrı bir dolgu+siyah kontur+etiketle vurguluyor —
  // "kimin nereleri aldığı" artık etiketten okunuyor, renk çakışması ne olursa olsun.
  //
  // GEOMETRİ — data/hukuki_sinirlar.js bu antlaşmayı HİÇ kapsamıyor (0 kayıt); js/d_katman.js
  // 'ın kendi D_SINIRLAR ailesinde ÜÇ araştırılmış-ama-koordinatsız "D-YOK" kutusu VAR
  // (d1742-lh-ah · d1686-lh-ru · d1606-lh-alm-pr) — kaynaklı ama KABA (±10-20 km, "TAHMİNİ"
  // diye işaretli) sınır-bölgesi ipuçları. `bolge.kutu` bunlardan TÜRETİLDİ (D023 — koordinat
  // kendi başına üretilmedi), dayanak alıntıları o kayıtların KENDİ `dayanak[]`inden.
  // ⚠️ ÜÇÜ DE "kesinlik DÜŞÜK" — Rusya ve Prusya'nın kutuları o devletin Lehistan'la olan
  // TÜM tarihî sınır bölgesini kapsıyor (1772/1793/1795 paylaşmalarının TOPLAMI, yalnız 1772
  // DEĞİL); bu yüzden gerçek 1772 payından BÜYÜK gösterebilir. Habsburg'unki (d1742-lh-ah,
  // "1772 Galiçya" notlu) daha dar/isabetli. Bu kayıtta AÇIKÇA yazılı, gizlenmiyor.
  id: "lehistan-1-paylasim-1772",
  antlasma_ad: "BİRİNCİ TAKSİM",
  tarih: "1772-08-05",
  bolgeler: [
    { taraf: "habsburg", etiket: "Avusturya'ya bırakılan (Galiçya)", zarf: true, noktalar: [
        { ad: "Lwów (Lviv)", lat: 49.8397, lon: 24.0297,
          kaynak: "pl.wikipedia 'I rozbiór Polski': 'Austria zajęła całą południową Polskę po Zbrucz ze Lwowem, ale bez Krakowa' · EB1911 'Poland' (Wikisource, 1772 paylaşımı): 'the greater part of Galicia, minus Cracow'" },
        { ad: "Nowy Targ", lat: 49.4805, lon: 20.0328,
          kaynak: "pl.wikipedia 'I rozbiór Polski': Nowy Targ, Nowy Sącz ve Czorsztyn bölgeleri (Spisz ile birlikte Avusturya 1769-1770'te zaten almıştı; 1772 payına dahil sayıldı)" },
        { ad: "Nowy Sącz", lat: 49.6218, lon: 20.6971,
          kaynak: "pl.wikipedia 'I rozbiór Polski': Nowy Sącz bölgesi (aynı cümle)" },
        { ad: "Czorsztyn", lat: 49.4396, lon: 20.3236,
          kaynak: "pl.wikipedia 'I rozbiór Polski': Czorsztyn bölgesi (aynı cümle)" },
        { ad: "Husiatyn (Zbruç kıyısı)", lat: 49.0667, lon: 25.9833,
          kaynak: "pl.wikipedia 'I rozbiór Polski': payın doğu sınırı Zbruç (Zbrucz) ırmağı · konum Zbruç üzerinde bir nokta, YAKLAŞIK (±10 km)" },
        { ad: "Pidwołoczyska (Zbruç kıyısı)", lat: 49.5333, lon: 26.15,
          kaynak: "pl.wikipedia 'I rozbiór Polski': payın doğu sınırı Zbruç ırmağı · konum Zbruç üzerinde bir nokta, YAKLAŞIK (±10 km)" },
        { ad: "Zbruç'un Dinyester'e kavuştuğu yer", lat: 48.6333, lon: 26.5167,
          kaynak: "pl.wikipedia 'I rozbiór Polski': payın doğu sınırı Zbruç ırmağının ağzı · YAKLAŞIK (±10 km)" }
      ],
      not: "ZARF: kaynakta adıyla anılan yerler ve Zbruç hattının dış zarfı (dışbükey kabuk). Gerçek pay KUZEYE (San-Vistula hattı, Przemyśl-Tarnów-Brody) doğru daha geniştir; kabuk bilinçli muhafazakârdır. Kraków kabuğun dışında kalır (kaynak: Kraków hariç)." },
    { taraf: "rusya", etiket: "Rusya'ya bırakılan", zarf: true, noktalar: [
        { ad: "Połock (Polotsk)", lat: 55.4879, lon: 28.7856,
          kaynak: "pl.wikipedia 'I rozbiór Polski': 'Rosja zagarnęła … wschodnie, peryferyjne krańce … za Dnieprem, Drucią i Dźwiną' (Witebsk, Połock, Mścisław voyvodalıkları) · pl.wikipedia 'Województwo połockie': 'Północna część wraz z Połockiem przypadła Rosji' · EB1911 'Poland' (Wikisource, 1772 paylaşımı): 'Russia obtained the palatinates of Vitebsk, Polotsk, Mscislaw'" },
        { ad: "Witebsk (Vitebsk)", lat: 55.1904, lon: 30.2025,
          kaynak: "pl.wikipedia 'Województwo witebskie': voyvodalık 1772'de Rusya'ya katıldı (voyvoda merkezi Witebsk) · EB1911 'Poland' (Wikisource, 1772 paylaşımı): " },
        { ad: "Orsza (Orsha)", lat: 54.5081, lon: 30.4172,
          kaynak: "pl.wikipedia 'Województwo witebskie': Orsza powiatı voyvodalığa dahil, 1772'de Rusya'ya katıldı (Orsza topraklarının küçük bir kısmı 1793'e kadar Lehistan'da kaldı)" },
        { ad: "Mścisław (Mstislavl)", lat: 54.0192, lon: 31.7219,
          kaynak: "pl.wikipedia 'Województwo mścisławskie': voyvodalık merkezi Mścisław, 1772'de Rusya'ya katıldı ('Mohylew gubernia') · EB1911 'Poland' (Wikisource, 1772 paylaşımı): " },
        { ad: "Krzyczew (Krichev)", lat: 53.7167, lon: 31.7167,
          kaynak: "pl.wikipedia 'Województwo mścisławskie': voyvodalığın ikinci büyük kenti Krzyczew; voyvodalık 1772'de Rusya'ya katıldı" }
      ],
      not: "ZARF: 1772'de Rusya'ya geçen üç voyvodalığın (Witebsk, Połock-kuzey, Mścisław) kaynakta adıyla anılan merkezlerinin dış zarfı. 1793/1795 paylaşmaları KAPSANMAZ. Eksikler: Polonya Livonyası (Inflanty) ve Mińsk voyvodalığının doğu parçası kaynakta ADIYLA yer vermediği için zarfa girmedi; Mohylew/Dyneburg/Lepel için voyvodalık üyeliği ve 1772 tarafı doğrulanamadı (Lepel 1772'den sonra Lehistan tarafındaydı) — zarfta YOK." },
    { taraf: "prusya", etiket: "Prusya'ya bırakılan (Kraliyet Prusyası, Warmia, Netze)", zarf: true, noktalar: [
        { ad: "Lidzbark Warmiński (Heilsberg)", lat: 54.1262, lon: 20.5801,
          kaynak: "EB1911 'Poland' (Wikisource, 1772 paylaşımı): 'the palatinates of Marienburg and Ermeland (Warmia)' · pl.wikipedia 'I rozbiór Polski': 'Prusy anektowały Warmię' (Lidzbark, Warmia piskoposluğunun merkezi)" },
        { ad: "Malbork (Marienburg)", lat: 54.036, lon: 19.0283,
          kaynak: "EB1911 'Poland' (Wikisource, 1772 paylaşımı): 'the palatinates of Marienburg …' (voyvodalık merkezi Malbork)" },
        { ad: "Chełmno (Kulm)", lat: 53.35, lon: 18.425,
          kaynak: "EB1911 'Poland' (Wikisource, 1772 paylaşımı): 'the palatinate of Kulm minus Thorn' (Chełmno voyvodalık merkezi; Toruń hariç)" },
        { ad: "Ujście (Notec/Netze kıyısı)", lat: 53.055, lon: 16.727,
          kaynak: "EB1911 'Poland' (Wikisource, 1772 paylaşımı): 'Great Poland as far as the Nitza' (Netze/Noteć'e kadar) · konum Noteć üzerinde bir nokta, YAKLAŞIK" }
      ],
      not: "ZARF: kaynakta adıyla anılan voyvodalık merkezleri (Malbork, Chełmno, Warmia) ve Noteć hattının dış zarfı. Gdańsk ve Toruń kaynağa göre HARİÇ ve kabuğun dışında kalır. Gerçek pay deniz kıyısına (Pomorze) ve Warmia içlerine doğru biraz daha geniştir." }
  ],
  not: "SIRADA-A-1012 (Emre kararı 13 Ekim 2026): üç pay artık 1772'ye ÖZGÜ — eski kaba kutular 1793/1795 topraklarını da kapsıyordu. Geometri sınır DEĞİL, kaynakta ADIYLA o devlete geçtiği yazılı yerlerin dış zarfıdır (muhafazakâr, gerçek paydan küçük). Kaynaklar: Encyclopaedia Britannica 1911 'Poland' (Wikisource) · pl.wikipedia 'I rozbiór Polski' ve ilgili voyvodalık maddeleri. Vektör bir 1772 sınır çizgisi BULUNAMADI; ikincil kaynakta kesin sınır koordinatı yok."
},
// >>> ANT-HARITA-1013 BASLA
{
  "id": "edirne-segedin-1444",
  "antlasma_ad": "Edirne-Segedin",
  "tarih": "1444-06-12",
  "bolgeler": [
    {
      "taraf": "sirp-despotlugu",
      "etiket": "Sırp Despotluğu'na iade edilen",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Niş",
          "lat": 43.321,
          "lon": 21.896,
          "kaynak": "TDV `nis` (yerlesimler_serhat.js:128 alıntısı): \"…Edirne-Segedin Antlaşması'ndan sonra Niş Sırplar'a iade edildi… 860'ta da (1456) Çuraç Brankoviç'in ölümünün ardından katî olarak Osmanlı hâkimiyetine girdi.\""
        },
        {
          "ad": "Semendire (TEMSİLÎ nokta)",
          "lat": 44.663,
          "lon": 20.93,
          "kaynak": "data/olaylar_ek.js:129 (kaynak: edirne-segedin-antlasmalari): \"Sırp despotluğu iade edildi, Tuna sınır kabul edildi\"; madde şehir ADLANDIRMAZ, Semendire Sırp despotluğunun merkezi olarak TEMSİLÎ seçildi."
        },
        {
          "ad": "Alacahisar (TEMSİLÎ nokta)",
          "lat": 43.58,
          "lon": 21.327,
          "kaynak": "data/olaylar_ek.js:129 (kaynak: edirne-segedin-antlasmalari): \"Sırp despotluğu iade edildi, Tuna sınır kabul edildi\"; madde şehir ADLANDIRMAZ, Alacahisar despotluğun iç kesimini temsil için seçildi."
        }
      ]
    }
  ],
  "not": "Sınır Tuna kabul edildi (madde), ancak Macaristan tarafı için kaynakta adıyla geçen yer yok; Macar bölgesi EKLENMEDİ. Antlaşma aylar içinde bozuldu (Varna 1444-11-10)."
},
{
  "id": "istanbul-iskodra-1479",
  "antlasma_ad": "Arnavutluk ve İşkodra",
  "tarih": "1479-01-25",
  "bolgeler": [
    {
      "taraf": "osmanli",
      "etiket": "Osmanlı'da kalan / Osmanlı'ya geçen",
      "noktalar": [
        {
          "ad": "İşkodra",
          "lat": 42.069,
          "lon": 19.513,
          "kaynak": "data/olaylar_ek.js:57 (kaynak: iskodra, TDV): \"İşkodra ve Arnavutluk kıyıları Osmanlı'da kaldı\""
        },
        {
          "ad": "Limni",
          "lat": 39.876,
          "lon": 25.156,
          "kaynak": "data/olaylar_ek.js:57 `d` alanı: \"Aynı tarihte katılan öteki yerler: Limni…\" (atlas kronolojisi; ayrı TDV teyidi bu turda ALINMADI)"
        }
      ]
    }
  ],
  "not": "Venedik tarafı için kaynakta Venedik'te kalan yer adlandırılmadı; bölge EKLENMEDİ. Sisam/Bozbaba maddede geçiyor ama ayrı kaynakla teyit edilmediği için noktalanmadı."
},
{
  "id": "amasya-1555",
  "antlasma_ad": "Amasya Antlaşması",
  "tarih": "1555-05-29",
  "bolgeler": [
    {
      "taraf": "osmanli",
      "etiket": "Safevîlerce Osmanlı hâkimiyeti tanınan",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Basra",
          "lat": 30.508,
          "lon": 47.783,
          "kaynak": "TDV amasya-antlasmasi: \"Basra, Bağdat, Şehrizor, Van, Bitlis, Erzurum, Kars ve Atabegler yurdu üzerindeki Osmanlı hâkimiyetinin Safevîler'ce tanınması anlamına gelmektedir\""
        },
        {
          "ad": "Bağdat",
          "lat": 33.34,
          "lon": 44.361,
          "kaynak": "TDV amasya-antlasmasi: \"Basra, Bağdat, Şehrizor, Van, Bitlis, Erzurum, Kars ve Atabegler yurdu üzerindeki Osmanlı hâkimiyetinin Safevîler'ce tanınması anlamına gelmektedir\""
        },
        {
          "ad": "Şehrizor",
          "lat": 35.56,
          "lon": 45.43,
          "kaynak": "TDV amasya-antlasmasi: \"Basra, Bağdat, Şehrizor, Van, Bitlis, Erzurum, Kars ve Atabegler yurdu üzerindeki Osmanlı hâkimiyetinin Safevîler'ce tanınması anlamına gelmektedir\""
        },
        {
          "ad": "Van",
          "lat": 38.502,
          "lon": 43.393,
          "kaynak": "TDV amasya-antlasmasi: \"Basra, Bağdat, Şehrizor, Van, Bitlis, Erzurum, Kars ve Atabegler yurdu üzerindeki Osmanlı hâkimiyetinin Safevîler'ce tanınması anlamına gelmektedir\""
        },
        {
          "ad": "Bitlis",
          "lat": 38.401,
          "lon": 42.108,
          "kaynak": "TDV amasya-antlasmasi: \"Basra, Bağdat, Şehrizor, Van, Bitlis, Erzurum, Kars ve Atabegler yurdu üzerindeki Osmanlı hâkimiyetinin Safevîler'ce tanınması anlamına gelmektedir\""
        },
        {
          "ad": "Erzurum",
          "lat": 39.905,
          "lon": 41.266,
          "kaynak": "TDV amasya-antlasmasi: \"Basra, Bağdat, Şehrizor, Van, Bitlis, Erzurum, Kars ve Atabegler yurdu üzerindeki Osmanlı hâkimiyetinin Safevîler'ce tanınması anlamına gelmektedir\""
        },
        {
          "ad": "Kars",
          "lat": 40.602,
          "lon": 43.095,
          "kaynak": "TDV amasya-antlasmasi: \"Basra, Bağdat, Şehrizor, Van, Bitlis, Erzurum, Kars ve Atabegler yurdu üzerindeki Osmanlı hâkimiyetinin Safevîler'ce tanınması anlamına gelmektedir\""
        }
      ],
      "not": "ZARF: kaynakta adıyla anılan yerlerin dış zarfı (dışbükey kabuk), gerçek sınır DEĞİL; muhafazakâr."
    }
  ],
  "not": "Atabegler yurdu (Ahıska) TDV cümlesinde geçer ama bu pilotta noktalanmadı. Antlaşma tam bir sınır belgesi DEĞİL (TDV: \"tam bir antlaşma vasfını taşımamak\"); Safevî tarafına ait bölge kaynakta adlandırılmadığı için EKLENMEDİ."
},
{
  "id": "ferhad-pasa-1590",
  "antlasma_ad": "Ferhad Paşa Antlaşması",
  "tarih": "1590-03-21",
  "bolgeler": [
    {
      "taraf": "osmanli",
      "etiket": "Osmanlı'da kalan (en geniş doğu sınırı)",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Tebriz",
          "lat": 38.08,
          "lon": 46.292,
          "kaynak": "data/olaylar_ek2.js:107 (kaynak: luristan · murad-iii · safeviler): \"Tebriz, Karabağ, Şirvan, Gürcistan ve Luristan Osmanlı'da kaldı\""
        },
        {
          "ad": "Berde (Karabağ — TEMSİLÎ)",
          "lat": 40.3747,
          "lon": 47.1281,
          "kaynak": "data/olaylar_ek2.js:107 (kaynak: luristan · murad-iii · safeviler): \"Tebriz, Karabağ, Şirvan, Gürcistan ve Luristan Osmanlı'da kaldı\"; \"Karabağ\" bölge adıdır, Berde temsilî nokta."
        },
        {
          "ad": "Şamahı (Şirvan — TEMSİLÎ)",
          "lat": 40.632,
          "lon": 48.641,
          "kaynak": "data/olaylar_ek2.js:107 (kaynak: luristan · murad-iii · safeviler): \"Tebriz, Karabağ, Şirvan, Gürcistan ve Luristan Osmanlı'da kaldı\"; \"Şirvan\" bölge adıdır, Şamahı temsilî nokta."
        },
        {
          "ad": "Tiflis (Gürcistan — TEMSİLÎ)",
          "lat": 41.716,
          "lon": 44.783,
          "kaynak": "data/olaylar_ek2.js:107 (kaynak: luristan · murad-iii · safeviler): \"Tebriz, Karabağ, Şirvan, Gürcistan ve Luristan Osmanlı'da kaldı\"; \"Gürcistan\" bölge adıdır, Tiflis temsilî nokta."
        }
      ]
    }
  ],
  "not": "Luristan için atlasta nokta bulunmadığından noktalanmadı. Safevî tarafı kaynakta adıyla anılan yer içermiyor; EKLENMEDİ. Ferhad Paşa Antlaşması'nın günü TDV'de yalnız 998/1590 (bkz. olaylar_ek2.js:107 ic_not_gun)."
},
{
  "id": "zitvatorok-1606",
  "antlasma_ad": "Zitvatorok Antlaşması",
  "tarih": "1606-11-11",
  "bolgeler": [
    {
      "taraf": "osmanli",
      "etiket": "Osmanlı'da kalan",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Eğri",
          "lat": 47.902,
          "lon": 20.377,
          "kaynak": "TDV zitvatorok-antlasmasi: \"Eğri, Kanije, Estergon Osmanlılar'ın elinde kalıyordu\""
        },
        {
          "ad": "Kanije",
          "lat": 46.454,
          "lon": 16.989,
          "kaynak": "TDV zitvatorok-antlasmasi: \"Eğri, Kanije, Estergon Osmanlılar'ın elinde kalıyordu\""
        },
        {
          "ad": "Estergon",
          "lat": 47.795,
          "lon": 18.74,
          "kaynak": "TDV zitvatorok-antlasmasi: \"Eğri, Kanije, Estergon Osmanlılar'ın elinde kalıyordu\""
        }
      ]
    },
    {
      "taraf": "habsburg",
      "etiket": "Habsburg'da kalan",
      "noktalar": [
        {
          "ad": "Vaç (Vác Kalesi)",
          "lat": 47.776,
          "lon": 19.134,
          "kaynak": "TDV zitvatorok-antlasmasi: metin farklarından biri \"Vác Kalesi'nin Habsburg idaresinde kalışı\""
        }
      ]
    }
  ],
  "not": "Savaşta kazanılan topraklar ellerinde kalıyordu (TDV); toprak değişimi çok küçük, harita yalnız kaynakta adlandırılan yerleri gösterir. Kanije'nin talebi ve Vác metin uyuşmazlığı TDV'de anlatılıyor."
},
{
  "id": "nasuh-pasa-1612",
  "antlasma_ad": "Nasuh Paşa Antlaşması",
  "tarih": "1612-11-20",
  "bolgeler": [
    {
      "taraf": "safevi",
      "etiket": "Safevîlere geri dönen (1590 kazanımları)",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Tebriz",
          "lat": 38.08,
          "lon": 46.292,
          "kaynak": "data/olaylar_ek2.js:109 (kaynak: nasuh-pasa-antlasmasi): \"1590 kazanımlarından vazgeçildi ve 1555 Amasya sınırına dönüldü\"; Tebriz 1590 kazanımlarının başındadır (bkz. ferhad-pasa-1590)."
        },
        {
          "ad": "Berde (Karabağ — TEMSİLÎ)",
          "lat": 40.3747,
          "lon": 47.1281,
          "kaynak": "data/olaylar_ek2.js:109 (kaynak: nasuh-pasa-antlasmasi): \"1590 kazanımlarından vazgeçildi ve 1555 Amasya sınırına dönüldü\"; Karabağ temsilî."
        },
        {
          "ad": "Şamahı (Şirvan — TEMSİLÎ)",
          "lat": 40.632,
          "lon": 48.641,
          "kaynak": "data/olaylar_ek2.js:109 (kaynak: nasuh-pasa-antlasmasi): \"1590 kazanımlarından vazgeçildi ve 1555 Amasya sınırına dönüldü\"; Şirvan temsilî."
        },
        {
          "ad": "Tiflis (Gürcistan — TEMSİLÎ)",
          "lat": 41.716,
          "lon": 44.783,
          "kaynak": "data/olaylar_ek2.js:109 (kaynak: nasuh-pasa-antlasmasi): \"1590 kazanımlarından vazgeçildi ve 1555 Amasya sınırına dönüldü\"; Gürcistan temsilî."
        }
      ]
    }
  ],
  "not": "Madde 1590 kazanımlarının hepsini anar ama tek tek yer adı vermez; noktalar ferhad-pasa-1590 kaydındakilerle AYNI temsilî yerlerdir. Dağıtım sonrası fiilî durum (1603-1612 savaş) ayrıca ölçülmedi."
},
{
  "id": "kasr-i-sirin-1639",
  "antlasma_ad": "Kasr-ı Şirin Antlaşması",
  "tarih": "1639-05-17",
  "bolgeler": [
    {
      "taraf": "osmanli",
      "etiket": "Osmanlı'da kalan (Irâk-ı Arab)",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Bağdat",
          "lat": 33.34,
          "lon": 44.361,
          "kaynak": "TDV kasrisirin-antlasmasi: \"Irâk-ı Arab denilen Bağdat, Basra ve Şehrizor bölgesi Osmanlılar'da kalmış, Revan ise Safevîler'e bırakılmıştır\""
        },
        {
          "ad": "Basra",
          "lat": 30.508,
          "lon": 47.783,
          "kaynak": "TDV kasrisirin-antlasmasi: \"Irâk-ı Arab denilen Bağdat, Basra ve Şehrizor bölgesi Osmanlılar'da kalmış, Revan ise Safevîler'e bırakılmıştır\""
        },
        {
          "ad": "Şehrizor",
          "lat": 35.56,
          "lon": 45.43,
          "kaynak": "TDV kasrisirin-antlasmasi: \"Irâk-ı Arab denilen Bağdat, Basra ve Şehrizor bölgesi Osmanlılar'da kalmış, Revan ise Safevîler'e bırakılmıştır\""
        }
      ]
    },
    {
      "taraf": "safevi",
      "etiket": "Safevîlere bırakılan",
      "noktalar": [
        {
          "ad": "Revan",
          "lat": 40.183,
          "lon": 44.515,
          "kaynak": "TDV kasrisirin-antlasmasi: \"Irâk-ı Arab denilen Bağdat, Basra ve Şehrizor bölgesi Osmanlılar'da kalmış, Revan ise Safevîler'e bırakılmıştır\""
        }
      ]
    }
  ],
  "not": "Hat ayrıntıları (Zencir Kalesi, Zalim Kalesi, Avroman, Mihriban) olaylar.js:110 metninde var, atlasta ilgili noktalar bulunmadığından noktalanmadı. Hânekîn metinde YOK (bilerek yazılmadı)."
},
{
  "id": "vasvar-1664",
  "antlasma_ad": "Vasvar Antlaşması",
  "tarih": "1664-08-09",
  "bolgeler": [
    {
      "taraf": "osmanli",
      "etiket": "Osmanlı'da kalan (Macaristan'da en geniş sınır)",
      "noktalar": [
        {
          "ad": "Uyvar",
          "lat": 47.986,
          "lon": 18.162,
          "kaynak": "data/olaylar_ek5.js:251 (kaynak: vasvar-antlasmasi, TDV): \"Uyvar ve Varad'ın Osmanlı'da kalmasını… hükme bağladı\""
        },
        {
          "ad": "Varad",
          "lat": 47.053,
          "lon": 21.941,
          "kaynak": "data/olaylar_ek5.js:251 (kaynak: vasvar-antlasmasi, TDV): \"Uyvar ve Varad'ın Osmanlı'da kalmasını… hükme bağladı\""
        }
      ]
    }
  ],
  "not": "Erdel Osmanlı himayesinde tarafsız bırakıldı ve Habsburg garnizonları Erdel'den çekildi (TDV); Erdel için kaynakta adlandırılmış yer yok, bölge EKLENMEDİ."
},
{
  "id": "bucas-1672",
  "antlasma_ad": "Bucaş Antlaşması",
  "tarih": "1672-10-18",
  "bolgeler": [
    {
      "taraf": "osmanli",
      "etiket": "Osmanlı'ya katılan (Podolya)",
      "noktalar": [
        {
          "ad": "Kamaniçe",
          "lat": 48.674,
          "lon": 26.574,
          "kaynak": "TDV bucas-antlasmasi: \"Leh kralı, Kamaniçe ile ona tâbi kalelerin ve Podolya eyaletinin Osmanlılar'a ait bulunduğunu kabul ediyor\""
        },
        {
          "ad": "Bar (Podolya — TEMSİLÎ)",
          "lat": 49.074,
          "lon": 27.674,
          "kaynak": "TDV bucas-antlasmasi: Podolya eyaleti Osmanlı hâkimiyetine alındı; metin Kamaniçe dışında şehir adlandırmaz, Bar Podolya'da TEMSİLÎ seçildi."
        }
      ]
    }
  ],
  "not": "Ukrayna Kazaklar'a (Doroşenko, Osmanlı tâbii) verildi — adlandırılmış yer yok, EKLENMEDİ. Bucaş palankası Lehistan'a iade edildi (TDV) ama koordinatı yok. Podolya sınırı hakemle belirlenecekti; sınır çizgisi İDDİA EDİLMEZ."
},
{
  "id": "prut-1711",
  "antlasma_ad": "Prut Antlaşması",
  "tarih": "1711-07-21",
  "bolgeler": [
    {
      "taraf": "osmanli",
      "etiket": "Osmanlı'ya iade edilen",
      "noktalar": [
        {
          "ad": "Azak",
          "lat": 47.113,
          "lon": 39.423,
          "kaynak": "TDV prut-antlasmasi: \"Azak Kalesi arazi ve mühimmatıyla iade edilecek, Taygan, Kamenka ve Samara suyu kenarındaki Yenikale yıkılacak\""
        }
      ]
    },
    {
      "taraf": "rusya",
      "etiket": "Yıkılacak Rus istihkâmı (kale yapılmayacak)",
      "noktalar": [
        {
          "ad": "Taygan (Taganrog)",
          "lat": 47.237,
          "lon": 38.897,
          "kaynak": "TDV prut-antlasmasi: \"Azak Kalesi arazi ve mühimmatıyla iade edilecek, Taygan, Kamenka ve Samara suyu kenarındaki Yenikale yıkılacak\"; Taygan = Taganrog."
        }
      ]
    }
  ],
  "not": "Kamenka ve Samara kenarındaki Yenikale istihkâmlarının atlas koordinatı yok, noktalanmadı."
},
{
  "id": "belgrad-1739",
  "antlasma_ad": "Belgrad Antlaşması",
  "tarih": "1739-09-18",
  "bolgeler": [
    {
      "taraf": "osmanli",
      "etiket": "Osmanlı'ya geri dönen",
      "noktalar": [
        {
          "ad": "Belgrad",
          "lat": 44.818,
          "lon": 20.457,
          "kaynak": "data/olaylar.js:134 (kaynak: belgrad-antlasmalari, TDV): \"Belgrad ve Kuzey Sırbistan geri alındı\"; TDV belgrad-antlasmalari: \"Belgrad Antlaşması (1739) ile… (Banat hariç) ve Belgrad'ı geri vermiştir\""
        },
        {
          "ad": "Semendire (Kuzey Sırbistan)",
          "lat": 44.663,
          "lon": 20.93,
          "kaynak": "data/olaylar.js:134 (kaynak: belgrad-antlasmalari, TDV): \"Belgrad ve Kuzey Sırbistan geri alındı\"; TDV belgrad-antlasmalari: \"Belgrad Antlaşması (1739) ile… (Banat hariç) ve Belgrad'ı geri vermiştir\"; başlık: \"Belgrad, Semendire ve kuzey Sırbistan'ın geri alınışı\"."
        }
      ]
    },
    {
      "taraf": "habsburg",
      "etiket": "Habsburg'da kalan (Banat)",
      "noktalar": [
        {
          "ad": "Temeşvar (Banat — TEMSİLÎ)",
          "lat": 45.76,
          "lon": 21.23,
          "kaynak": "TDV belgrad-antlasmalari: Avusturya \"(Banat hariç)\" yerleri geri verdi, yani Banat Avusturya'da kaldı; Temeşvar Banat'ın merkezi olarak TEMSİLÎ seçildi."
        }
      ]
    }
  ],
  "not": "Rusya cephesi (Niş Antlaşması 1739-10-03) ayrı kayıtta."
},
{
  "id": "nis-1739",
  "antlasma_ad": "Niş Antlaşması",
  "tarih": "1739-10-03",
  "bolgeler": [
    {
      "taraf": "rusya",
      "etiket": "İstihkâmı yıkılıp tarafsız arazi ilân edilen",
      "noktalar": [
        {
          "ad": "Azak",
          "lat": 47.113,
          "lon": 39.423,
          "kaynak": "data/olaylar_ek5.js:291: \"Azak Kalesi'nin istihkâmları yıkılarak bölge iki devlet arasında tarafsız arazi ilân edildi\""
        }
      ]
    }
  ],
  "not": "Tarafsız arazinin sınırı kaynakta verilmiyor; tek nokta, alan İDDİA EDİLMEZ. Kaynak alanı madde `osmanlilar` genel (TDV niş/azak ayrıca okunmadı)."
},
{
  "id": "kucuk-kaynarca-1774",
  "antlasma_ad": "Küçük Kaynarca",
  "tarih": "1774-07-21",
  "bolgeler": [
    {
      "taraf": "rusya",
      "etiket": "Rusya'ya bırakılan",
      "noktalar": [
        {
          "ad": "Kerç",
          "lat": 45.356,
          "lon": 36.467,
          "kaynak": "TDV kucuk-kaynarca-antlasmasi: \"Kırım'a… istiklâl verilmesi, Kılburun, Yenikale ve Kerç kalelerinin Rusya'ya bırakılması\""
        },
        {
          "ad": "Yenikale",
          "lat": 45.3521,
          "lon": 36.6004,
          "kaynak": "TDV kucuk-kaynarca-antlasmasi: \"Kırım'a… istiklâl verilmesi, Kılburun, Yenikale ve Kerç kalelerinin Rusya'ya bırakılması\""
        }
      ]
    },
    {
      "taraf": "kirim",
      "etiket": "Bağımsızlık verilen Kırım Hanlığı",
      "noktalar": [
        {
          "ad": "Bahçesaray (hanlık merkezi)",
          "lat": 44.753,
          "lon": 33.861,
          "kaynak": "data/olaylar.js:138 (kaynak: kucuk-kaynarca-antlasmasi): \"Kırım Hanlığı'na 'bağımsızlık' verildi\"; Bahçesaray hanlığın merkezi olarak TEMSİLÎ seçildi."
        }
      ]
    }
  ],
  "not": "Kılburun TDV'de Rusya'ya bırakılan kale olarak geçer; atlasta koordinatı olmadığından noktalanmadı. Kabartay kabilelerinin durumu Kırım hanının iradesine bırakıldı; Azak/Kerç çevresi ve Kırım'ın bütün sınırı İDDİA EDİLMEZ."
},
{
  "id": "zistovi-1791",
  "antlasma_ad": "Ziştovi Antlaşması",
  "tarih": "1791-08-04",
  "bolgeler": [
    {
      "taraf": "osmanli",
      "etiket": "Avusturya'dan iade edilen",
      "noktalar": [
        {
          "ad": "Belgrad",
          "lat": 44.818,
          "lon": 20.457,
          "kaynak": "data/olaylar_ek5.js:310 (kaynak: zistovi-antlasmasi): \"Avusturya işgal ettiği Belgrad dahil bütün yerleri geri verdi\""
        },
        {
          "ad": "Bükreş (Eflak — TEMSİLÎ)",
          "lat": 44.427,
          "lon": 26.103,
          "kaynak": "TDV zistovi-antlasmasi: Avusturya Eflak'ı \"emaneten\" elinde tutuyordu ve ele geçirdiği yerleri iade etti; Bükreş Eflak'ın merkezi olarak TEMSİLÎ seçildi."
        }
      ]
    },
    {
      "taraf": "habsburg",
      "etiket": "Rusya barışına dek emaneten Avusturya'da",
      "noktalar": [
        {
          "ad": "Hotin",
          "lat": 48.51,
          "lon": 26.492,
          "kaynak": "TDV zistovi-antlasmasi: \"Avusturya'nın… Hotin Kalesi hariç ele geçirdiği yerlerin tamamının iade edilmesi\""
        }
      ]
    }
  ],
  "not": "Avusturya'ya bırakılan Eski Hırsova/Çerna bölgesi ve Unna (Hırvatistan sınırı) TDV'de var (muâhede-i mahsûsa) ancak atlasta koordinat yok, noktalanmadı."
},
{
  "id": "yas-1792",
  "antlasma_ad": "Yaş Antlaşması",
  "tarih": "1792-01-10",
  "bolgeler": [
    {
      "taraf": "rusya",
      "etiket": "Rusya'ya kalan (Özi ve çevresi)",
      "noktalar": [
        {
          "ad": "Özi",
          "lat": 46.6247,
          "lon": 31.5421,
          "kaynak": "data/olaylar_ek5.js:311 (kaynak: yas-antlasmasi, TDV): \"Turla (Dinyester) nehri sınır kabul edildi; nehrin sol yakası Rusya'ya, sağ yakası Osmanlı'ya kaldı ve Özi ile çevresi kesin olarak elden çıktı… Eflak ile Boğdan… iade edildi\""
        }
      ]
    },
    {
      "taraf": "osmanli",
      "etiket": "Osmanlı'ya kalan / iade edilen (Turla sağ yakası, Eflak-Boğdan)",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Bender (Turla sağ yakası — TEMSİLÎ)",
          "lat": 46.831,
          "lon": 29.481,
          "kaynak": "TDV yas-antlasmasi: \"Turla nehrinin sol kıyısı Rusya'ya, sağ kıyısı Osmanlı Devleti'ne ait\"; Bender sağ kıyıdadır, TEMSİLÎ."
        },
        {
          "ad": "Yaş (Boğdan — TEMSİLÎ)",
          "lat": 47.157,
          "lon": 27.601,
          "kaynak": "data/olaylar_ek5.js:311 (kaynak: yas-antlasmasi, TDV): \"Turla (Dinyester) nehri sınır kabul edildi; nehrin sol yakası Rusya'ya, sağ yakası Osmanlı'ya kaldı ve Özi ile çevresi kesin olarak elden çıktı… Eflak ile Boğdan… iade edildi\"; Boğdan merkezi TEMSİLÎ."
        },
        {
          "ad": "Bükreş (Eflak — TEMSİLÎ)",
          "lat": 44.427,
          "lon": 26.103,
          "kaynak": "data/olaylar_ek5.js:311 (kaynak: yas-antlasmasi, TDV): \"Turla (Dinyester) nehri sınır kabul edildi; nehrin sol yakası Rusya'ya, sağ yakası Osmanlı'ya kaldı ve Özi ile çevresi kesin olarak elden çıktı… Eflak ile Boğdan… iade edildi\"; Eflak merkezi TEMSİLÎ."
        }
      ]
    }
  ],
  "not": "Sınır çizgisi Turla nehridir (kaynak); vektörü bulunamadı, nehir hattı İDDİA EDİLMEZ. Kırım'ın 1783 ilhakı hukuken tanındı (madde) — Kırım için adlandırılmış yer yok, EKLENMEDİ."
},
{
  "id": "bukres-1812",
  "antlasma_ad": "Bükreş Antlaşması — Besarabya",
  "tarih": "1812-05-28",
  "bolgeler": [
    {
      "taraf": "rusya",
      "etiket": "Rusya'ya bırakılan (Besarabya)",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Akkirman",
          "lat": 46.1968,
          "lon": 30.3431,
          "kaynak": "data/olaylar_ek.js:81 (kaynak: bukres-antlasmalari): \"Prut'un doğusu (Besarabya) Rusya'ya bırakıldı. Aynı tarihte elden çıkan diğer yerleşimler: Akkirman, Kili, Hotin, Bender, İsmail\""
        },
        {
          "ad": "Kili",
          "lat": 45.451,
          "lon": 29.271,
          "kaynak": "data/olaylar_ek.js:81 (kaynak: bukres-antlasmalari): \"Prut'un doğusu (Besarabya) Rusya'ya bırakıldı. Aynı tarihte elden çıkan diğer yerleşimler: Akkirman, Kili, Hotin, Bender, İsmail\""
        },
        {
          "ad": "Hotin",
          "lat": 48.51,
          "lon": 26.492,
          "kaynak": "data/olaylar_ek.js:81 (kaynak: bukres-antlasmalari): \"Prut'un doğusu (Besarabya) Rusya'ya bırakıldı. Aynı tarihte elden çıkan diğer yerleşimler: Akkirman, Kili, Hotin, Bender, İsmail\""
        },
        {
          "ad": "Bender",
          "lat": 46.831,
          "lon": 29.481,
          "kaynak": "data/olaylar_ek.js:81 (kaynak: bukres-antlasmalari): \"Prut'un doğusu (Besarabya) Rusya'ya bırakıldı. Aynı tarihte elden çıkan diğer yerleşimler: Akkirman, Kili, Hotin, Bender, İsmail\""
        }
      ]
    }
  ],
  "not": "İsmail maddede geçer, atlasta koordinatı bulunmadığından noktalanmadı. TDV bukres-antlasmasi slug ölü (302); dayanak kronoloji maddesi ve onun kaynağıdır. Zarf Prut'un doğusu için kabadır."
},
{
  "id": "edirne-1829",
  "antlasma_ad": "Edirne Antlaşması",
  "tarih": "1829-09-14",
  "bolgeler": [
    {
      "taraf": "rusya",
      "etiket": "Rusya'ya bırakılan",
      "zarf": true,
      "noktalar": [
        {
          "ad": "İbrail",
          "lat": 45.27,
          "lon": 27.972,
          "kaynak": "data/olaylar_ek.js:82 (kaynak: edirne-antlasmasi): \"Tuna deltası kaybedildi… Aynı tarihte elden çıkan diğer yerleşimler: İbrail, Anapa, Ahıska\""
        },
        {
          "ad": "Anapa",
          "lat": 44.894,
          "lon": 37.316,
          "kaynak": "data/olaylar_ek.js:82 (kaynak: edirne-antlasmasi): \"Tuna deltası kaybedildi… Aynı tarihte elden çıkan diğer yerleşimler: İbrail, Anapa, Ahıska\""
        },
        {
          "ad": "Ahıska",
          "lat": 41.643,
          "lon": 42.986,
          "kaynak": "data/olaylar_ek.js:82 (kaynak: edirne-antlasmasi): \"Tuna deltası kaybedildi… Aynı tarihte elden çıkan diğer yerleşimler: İbrail, Anapa, Ahıska\""
        }
      ]
    }
  ],
  "not": "Tuna deltası (Sulina ağzı) ve Karadeniz doğu kıyısı kaynakta bölge olarak anılır; zarf İbrail-Anapa-Ahıska noktaları arası KABA ve gerçek payı İDDİA ETMEZ (üç nokta birbirinden çok uzak, kabuk görsel bir ipucudur). Yunanistan'ın özerkliği/bağımsızlığı ve Eflak-Boğdan/Silistre'nin rehin işgali ayrı konular, noktalanmadı."
},
{
  "id": "kutahya-1833",
  "antlasma_ad": "Kütahya Sözleşmesi",
  "tarih": "1833-05-14",
  "bolgeler": [
    {
      "taraf": "misir-kavalali",
      "etiket": "Kavalalı Mehmed Ali'ye bırakılan valilikler",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Şam",
          "lat": 33.513,
          "lon": 36.292,
          "kaynak": "data/olaylar_ek4.js:217 (kaynak: kutahya): \"Mısır, Girit ve Hicaz'ın yanı sıra Şam, Halep, Trablusşam ve Sayda valiliklerini Mehmed Ali'ye; Adana muhassıllığını İbrâhim Paşa'ya bıraktı\""
        },
        {
          "ad": "Halep",
          "lat": 36.202,
          "lon": 37.161,
          "kaynak": "data/olaylar_ek4.js:217 (kaynak: kutahya): \"Mısır, Girit ve Hicaz'ın yanı sıra Şam, Halep, Trablusşam ve Sayda valiliklerini Mehmed Ali'ye; Adana muhassıllığını İbrâhim Paşa'ya bıraktı\""
        },
        {
          "ad": "Trablusşam",
          "lat": 34.436,
          "lon": 35.844,
          "kaynak": "data/olaylar_ek4.js:217 (kaynak: kutahya): \"Mısır, Girit ve Hicaz'ın yanı sıra Şam, Halep, Trablusşam ve Sayda valiliklerini Mehmed Ali'ye; Adana muhassıllığını İbrâhim Paşa'ya bıraktı\""
        },
        {
          "ad": "Sayda",
          "lat": 33.563,
          "lon": 35.369,
          "kaynak": "data/olaylar_ek4.js:217 (kaynak: kutahya): \"Mısır, Girit ve Hicaz'ın yanı sıra Şam, Halep, Trablusşam ve Sayda valiliklerini Mehmed Ali'ye; Adana muhassıllığını İbrâhim Paşa'ya bıraktı\""
        },
        {
          "ad": "Adana",
          "lat": 37.0,
          "lon": 35.321,
          "kaynak": "data/olaylar_ek4.js:217 (kaynak: kutahya): \"Mısır, Girit ve Hicaz'ın yanı sıra Şam, Halep, Trablusşam ve Sayda valiliklerini Mehmed Ali'ye; Adana muhassıllığını İbrâhim Paşa'ya bıraktı\""
        }
      ]
    }
  ],
  "not": "Bu bir toprak devri DEĞİL, padişahın valiye verdiği fermanlardır (madde); egemenlik Osmanlı'da kalıyordu. Mısır, Girit, Hicaz de maddede geçer ama atlasta bu kayda noktalanmadı."
},
{
  "id": "paris-1856",
  "antlasma_ad": "Paris Antlaşması: Kırım Savaşı",
  "tarih": "1856-03-30",
  "bolgeler": [
    {
      "taraf": "bogdan",
      "etiket": "Boğdan'a verilen (Güney Besarabya)",
      "noktalar": [
        {
          "ad": "Kili",
          "lat": 45.451,
          "lon": 29.271,
          "kaynak": "data/olaylar_ek5.js:384 (kaynak: paris-antlasmasi · kili, TDV): \"Rusya, Besarabya'nın Kili dahil Kahul, İsmâil ve Bolgrad kazalarından mürekkep kısmını… Boğdan beyliğine terketti\""
        },
        {
          "ad": "Kahul",
          "lat": 45.905,
          "lon": 28.198,
          "kaynak": "data/olaylar_ek5.js:384 (kaynak: paris-antlasmasi · kili, TDV): \"Rusya, Besarabya'nın Kili dahil Kahul, İsmâil ve Bolgrad kazalarından mürekkep kısmını… Boğdan beyliğine terketti\""
        }
      ]
    },
    {
      "taraf": "osmanli",
      "etiket": "Rusya'dan Osmanlı'ya iade edilen",
      "noktalar": [
        {
          "ad": "Kars",
          "lat": 40.602,
          "lon": 43.095,
          "kaynak": "TDV paris-antlasmasi: \"Rusya'nın Kars'ı Besarabya'nın bir kısmı karşılığında iade etmesi görüşü kabul edildi\""
        }
      ]
    }
  ],
  "not": "İsmail ve Bolgrad kazaları kaynakta anılır; İsmail atlasta noktalı değil, Bolgrad için TDV ayrı cümlede Rusya tarafında anar (\"Bolgrad üzerinden Jalpuch gölüne uzanan bölge Rusya'ya bırakıldı\") — çelişkili okuma, Bolgrad ve İsmail BİLEREK noktalanmadı. Karadeniz tarafsızlığı ve Memleketeyn garantisi toprak değişimi değildir."
},
{
  "id": "ayastefanos-1878",
  "antlasma_ad": "Ayastefanos Antlaşması",
  "tarih": "1878-03-03",
  "bolgeler": [
    {
      "taraf": "rusya",
      "etiket": "Rusya'ya bırakılan",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Kars",
          "lat": 40.602,
          "lon": 43.095,
          "kaynak": "TDV ayastefanos-antlasmasi: \"Rumeli'deki bazı yerler ile Kars, Ardahan, Batum ve Doğubayazıt'ı Rusya'ya bırakacaktı\""
        },
        {
          "ad": "Ardahan",
          "lat": 41.111,
          "lon": 42.702,
          "kaynak": "TDV ayastefanos-antlasmasi: \"Rumeli'deki bazı yerler ile Kars, Ardahan, Batum ve Doğubayazıt'ı Rusya'ya bırakacaktı\""
        },
        {
          "ad": "Batum",
          "lat": 41.6439,
          "lon": 41.642,
          "kaynak": "TDV ayastefanos-antlasmasi: \"Rumeli'deki bazı yerler ile Kars, Ardahan, Batum ve Doğubayazıt'ı Rusya'ya bırakacaktı\""
        }
      ]
    },
    {
      "taraf": "rusya",
      "etiket": "Rusya'ya bırakılan (Doğubayazıt)",
      "noktalar": [
        {
          "ad": "Doğubayazıt",
          "lat": 39.548,
          "lon": 44.084,
          "kaynak": "TDV ayastefanos-antlasmasi: \"Rumeli'deki bazı yerler ile Kars, Ardahan, Batum ve Doğubayazıt'ı Rusya'ya bırakacaktı\""
        }
      ]
    }
  ],
  "not": "\"Büyük Bulgaristan\" (Tuna'dan Ege'ye, Arnavutluk'tan Karadeniz'e — TDV) bu kayıtta ÇİZİLMEDİ: kaynak sınır şehri adlandırmaz, vektör sınır bulunamadı; uydurma zarf yazılmadı (D107). Sırbistan/Karadağ/Romanya bağımsızlığı ve Dobruca-Besarabya takası toprak noktası içermiyor. Uygulanmadı; Berlin'le (1878-07-13) revize edildi."
},
{
  "id": "berlin-1878",
  "antlasma_ad": "Berlin Antlaşması",
  "tarih": "1878-07-13",
  "bolgeler": [
    {
      "taraf": "rusya",
      "etiket": "Rusya'ya bırakılan",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Kars",
          "lat": 40.602,
          "lon": 43.095,
          "kaynak": "TDV berlin-antlasmasi: \"Osmanlı Devleti Kars, Ardahan ve Batum'u harp tazminatının bir kısmına karşılık olmak üzere Rusya'ya bırakacak, Doğubayazıt ve Eleşkirt vadisi kendisinde kalacaktı\""
        },
        {
          "ad": "Ardahan",
          "lat": 41.111,
          "lon": 42.702,
          "kaynak": "TDV berlin-antlasmasi: \"Osmanlı Devleti Kars, Ardahan ve Batum'u harp tazminatının bir kısmına karşılık olmak üzere Rusya'ya bırakacak, Doğubayazıt ve Eleşkirt vadisi kendisinde kalacaktı\""
        },
        {
          "ad": "Batum",
          "lat": 41.6439,
          "lon": 41.642,
          "kaynak": "TDV berlin-antlasmasi: \"Osmanlı Devleti Kars, Ardahan ve Batum'u harp tazminatının bir kısmına karşılık olmak üzere Rusya'ya bırakacak, Doğubayazıt ve Eleşkirt vadisi kendisinde kalacaktı\""
        }
      ]
    },
    {
      "taraf": "sirbistan-prensligi",
      "etiket": "Sırbistan'a verilen",
      "noktalar": [
        {
          "ad": "Niş",
          "lat": 43.321,
          "lon": 21.896,
          "kaynak": "TDV berlin-antlasmasi: \"Sırbistan'ın bağımsızlığı tanınacak, kendisine Niş ve Pirot verilecekti\""
        },
        {
          "ad": "Pirot (Şehirköy)",
          "lat": 43.1531,
          "lon": 22.5861,
          "kaynak": "TDV berlin-antlasmasi: aynı cümle (Niş ve Pirot)"
        }
      ]
    },
    {
      "taraf": "bulgaristan-prensligi",
      "etiket": "Bulgaristan Prensliği (Osmanlı'ya tâbi özerk)",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Tırnova",
          "lat": 43.081,
          "lon": 25.629,
          "kaynak": "data/olaylar.js:174 `statu_vasal` listesi (kaynak: berlin-antlasmasi): özerk Bulgaristan Prensliği/Şarkî Rumeli kuruldu — liste atlas kronolojisine aittir, ayrıca TDV'de şehir adı teyidi alınmadı"
        },
        {
          "ad": "Vidin",
          "lat": 43.992,
          "lon": 22.873,
          "kaynak": "data/olaylar.js:174 `statu_vasal` listesi (kaynak: berlin-antlasmasi): özerk Bulgaristan Prensliği/Şarkî Rumeli kuruldu — liste atlas kronolojisine aittir, ayrıca TDV'de şehir adı teyidi alınmadı"
        },
        {
          "ad": "Rusçuk",
          "lat": 43.856,
          "lon": 25.971,
          "kaynak": "data/olaylar.js:174 `statu_vasal` listesi (kaynak: berlin-antlasmasi): özerk Bulgaristan Prensliği/Şarkî Rumeli kuruldu — liste atlas kronolojisine aittir, ayrıca TDV'de şehir adı teyidi alınmadı"
        },
        {
          "ad": "Varna",
          "lat": 43.214,
          "lon": 27.915,
          "kaynak": "data/olaylar.js:174 `statu_vasal` listesi (kaynak: berlin-antlasmasi): özerk Bulgaristan Prensliği/Şarkî Rumeli kuruldu — liste atlas kronolojisine aittir, ayrıca TDV'de şehir adı teyidi alınmadı"
        },
        {
          "ad": "Silistre",
          "lat": 44.117,
          "lon": 27.26,
          "kaynak": "data/olaylar.js:174 `statu_vasal` listesi (kaynak: berlin-antlasmasi): özerk Bulgaristan Prensliği/Şarkî Rumeli kuruldu — liste atlas kronolojisine aittir, ayrıca TDV'de şehir adı teyidi alınmadı"
        }
      ]
    },
    {
      "taraf": "osmanli",
      "etiket": "Şarkî Rumeli (Osmanlı'ya bağlı özerk eyalet)",
      "noktalar": [
        {
          "ad": "Filibe",
          "lat": 42.144,
          "lon": 24.75,
          "kaynak": "data/olaylar.js:174 `statu_vasal` listesi (kaynak: berlin-antlasmasi): özerk Bulgaristan Prensliği/Şarkî Rumeli kuruldu; TDV: \"Şarkî Rumeli eyaleti\" (üç bölgeden ikincisi)"
        },
        {
          "ad": "Tatarpazarcığı",
          "lat": 42.192,
          "lon": 24.333,
          "kaynak": "data/olaylar.js:174 `statu_vasal` listesi (kaynak: berlin-antlasmasi): özerk Bulgaristan Prensliği/Şarkî Rumeli kuruldu; TDV: Şarkî Rumeli eyaleti"
        }
      ]
    },
    {
      "taraf": "ingiltere",
      "etiket": "İngiliz idaresine devredilen (Kıbrıs)",
      "noktalar": [
        {
          "ad": "Lefkoşa",
          "lat": 35.17,
          "lon": 33.36,
          "kaynak": "TDV berlin-antlasmasi: \"Bâbıâli, 4 Haziran 1878 tarihli bir antlaşma ile Kıbrıs'ı İngilizler'e devretti\" (toprak mülkiyeti Osmanlı'da); ada TEMSİLÎ"
        },
        {
          "ad": "Magosa",
          "lat": 35.125,
          "lon": 33.94,
          "kaynak": "aynı kaynak; ada TEMSİLÎ"
        }
      ]
    },
    {
      "taraf": "habsburg",
      "etiket": "Avusturya işgaline bırakılan (Bosna-Hersek)",
      "noktalar": [
        {
          "ad": "Saraybosna",
          "lat": 43.856,
          "lon": 18.413,
          "kaynak": "data/olaylar.js:174 `d`: \"Bosna-Hersek Avusturya işgaline… bırakıldı\"; şehir TEMSİLÎ"
        },
        {
          "ad": "Mostar",
          "lat": 43.343,
          "lon": 17.808,
          "kaynak": "aynı kaynak; Hersek TEMSİLÎ"
        }
      ]
    }
  ],
  "not": "Karadağ'ın bağımsızlığı ve sınır düzeltmeleri, Makedonya'nın ıslahat şartıyla Osmanlı'da kalması kaynakta adlandırılmış şehir içermediğinden noktalanmadı. Bulgaristan Prensliği bölgesi gerçek sınır DEĞİL, listedeki şehirlerin zarfıdır (Sofya kaynak listesinde yok, kabuğun dışında kalabilir). Ayastefanos kaydıyla (aynı yıl) birlikte oku."
},
{
  "id": "istanbul-bulgaristan-1913",
  "antlasma_ad": "İstanbul Antlaşması: Bulgaristan",
  "tarih": "1913-09-29",
  "bolgeler": [
    {
      "taraf": "osmanli",
      "etiket": "Osmanlı'da kalmasını tescil edilen (Doğu Trakya)",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Edirne",
          "lat": 41.677,
          "lon": 26.556,
          "kaynak": "data/olaylar_ek5.js:442 (kaynak: bulgaristan): \"Meriç nehrini sınır kabul ederek Edirne, Kırklareli, Dimetoka ve Doğu Trakya'nın Osmanlı'da kalmasını hukuken tescil etti\""
        },
        {
          "ad": "Kırklareli",
          "lat": 41.735,
          "lon": 27.225,
          "kaynak": "data/olaylar_ek5.js:442 (kaynak: bulgaristan): \"Meriç nehrini sınır kabul ederek Edirne, Kırklareli, Dimetoka ve Doğu Trakya'nın Osmanlı'da kalmasını hukuken tescil etti\""
        },
        {
          "ad": "Dimetoka",
          "lat": 41.348,
          "lon": 26.497,
          "kaynak": "data/olaylar_ek5.js:442 (kaynak: bulgaristan): \"Meriç nehrini sınır kabul ederek Edirne, Kırklareli, Dimetoka ve Doğu Trakya'nın Osmanlı'da kalmasını hukuken tescil etti\""
        }
      ]
    },
    {
      "taraf": "bulgaristan-kralligi",
      "etiket": "Bulgaristan'da bırakılan (Batı Trakya)",
      "noktalar": [
        {
          "ad": "Dedeağaç",
          "lat": 40.849,
          "lon": 25.874,
          "kaynak": "data/olaylar_ek5.js:442 `d`: \"Kavala ve Dedeağaç Bulgaristan'da bırakıldı\""
        },
        {
          "ad": "Gümülcine",
          "lat": 41.122,
          "lon": 25.406,
          "kaynak": "data/olaylar_ek5.js:442 `d`: \"Aynı tarihte katılan öteki yerler: Gümülcine\""
        }
      ]
    }
  ],
  "not": "Madde Kavala'yı da \"Bulgaristan'da bırakıldı\" sayar, ancak Kavala 10 Ağustos 1913 Bükreş Antlaşması'yla Yunanistan'a geçmişti (data/olaylar_2s_0920.js:112, TDV balkan-savasi) — çelişki, Kavala BİLEREK noktalanmadı; kronoloji maddesi ayrıca düzeltilmeli. Sınır Meriç (kaynak), vektör bulunamadı."
},
{
  "id": "atina-1913",
  "antlasma_ad": "Atina Antlaşması",
  "tarih": "1913-11-14",
  "bolgeler": [
    {
      "taraf": "yunanistan",
      "etiket": "Yunanistan'a geçişi tanınan",
      "zarf": true,
      "noktalar": [
        {
          "ad": "Selanik",
          "lat": 40.64,
          "lon": 22.944,
          "kaynak": "data/olaylar_ek5.js:443 (kaynak: yunanistan): \"Selanik, Yanya ve Güney Makedonya'nın Yunanistan'a geçişini resmen tanıdı ve Girit üzerindeki Osmanlı haklarından vazgeçildi\""
        },
        {
          "ad": "Yanya",
          "lat": 39.665,
          "lon": 20.852,
          "kaynak": "data/olaylar_ek5.js:443 (kaynak: yunanistan): \"Selanik, Yanya ve Güney Makedonya'nın Yunanistan'a geçişini resmen tanıdı ve Girit üzerindeki Osmanlı haklarından vazgeçildi\""
        },
        {
          "ad": "Kandiye (Girit)",
          "lat": 35.339,
          "lon": 25.133,
          "kaynak": "data/olaylar_ek5.js:443 (kaynak: yunanistan): \"Selanik, Yanya ve Güney Makedonya'nın Yunanistan'a geçişini resmen tanıdı ve Girit üzerindeki Osmanlı haklarından vazgeçildi\"; Girit adası TEMSİLÎ nokta"
        }
      ]
    }
  ],
  "not": "Ege adalarının statüsü çözümsüz bırakıldı (madde) — noktalanmadı. Güney Makedonya'nın diğer şehirleri kaynakta adlandırılmıyor; zarf Selanik-Yanya-Girit arası KABA bir görsel ipucudur."
}
// <<< ANT-HARITA-1013 BITTI
];
