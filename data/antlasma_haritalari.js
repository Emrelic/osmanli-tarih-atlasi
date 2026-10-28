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
    // KUTU-H4-1015 (0054/H-0020): "Karlofça'da poligon yok" — sinir_id kayıtlarının dolgusu
    // 23 Eylül'de kapatıldığı için (hukuki_sinirlar.js) bu antlaşma haritada yalnız noktaydı.
    // Macaristan-Erdel çekirdeği, TDV karlofca'nın "Temeşvar hariç Erdel dahil bütün Macaristan
    // Avusturya'da kaldı" hükmünden, atlastaki yerleşim koordinatlarıyla zarf olarak çizilir.
    { taraf: "habsburg", etiket: "Avusturya'da kalan (Temeşvar hariç Erdel dahil Macaristan)", zarf: true, noktalar: [
        { ad: "Aquincum-Óbuda-Pest", lat: 47.498, lon: 19.040,
          kaynak: "TDV karlofca: Temeşvar dışında Erdel dahil bütün Macaristan Avusturya'da kaldı — Budin Macaristan'ın merkezi olarak TEMSİLÎ nokta (metin şehir saymaz); koordinat data/yerlesimler.js" },
        { ad: "Eğri", lat: 47.902, lon: 20.377,
          kaynak: "TDV karlofca (aynı hüküm) — kuzey Macaristan'ın TEMSİLÎ noktası; koordinat data/yerlesimler.js" },
        { ad: "Varad (Oradea)", lat: 47.053, lon: 21.941,
          kaynak: "TDV karlofca (aynı hüküm) — Tisa doğusu Macaristan'ın TEMSİLÎ noktası; koordinat data/yerlesimler.js" },
        { ad: "Erdel (Kaloşvar)", lat: 46.770, lon: 23.591,
          kaynak: "TDV karlofca: \"Erdel dahil\" — Erdel'in TEMSİLÎ noktası; koordinat data/yerlesimler.js" },
        { ad: "Erdel Belgradı (Gyulafehérvár)", lat: 46.0678, lon: 23.5800,
          kaynak: "TDV karlofca: \"Erdel dahil\" — Erdel prensliğinin merkezi, TEMSİLÎ nokta; koordinat data/yerlesimler_ek29.js" },
        { ad: "Segedin (Szeged)", lat: 46.253, lon: 20.148,
          kaynak: "TDV karlofca (aynı hüküm) — Tisa kıyısındaki güney Macaristan noktası, TEMSİLÎ; Temeşvar (Osmanlı'da kalan) bunun doğusunda kalır; koordinat data/yerlesimler.js" }
    ] },
    { taraf: "habsburg", etiket: "Avusturya'ya bırakılan",
      sinir_id: ["karlofca-bosna-sava-1699", "karlofca-bosna-kaleler-1699"] },
    { taraf: "osmanli", etiket: "Osmanlı'da kalan (Temeşvar/Banat)", noktalar: [
        { ad: "Temeşvar", lat: 45.760, lon: 21.230,
          kaynak: "TDV karlofca: Temeşvar (Tımışvar) Osmanlı'da kaldı; koordinat data/yerlesimler.js" }
    ] },
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
  "antlasma_ad": "Küçük Kaynarca Antlaşması",
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
  "antlasma_ad": "Ziştovi Antlaşması —",
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
  "antlasma_ad": "Yaş Antlaşması —",
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
  "tarih": "1833-05-06",
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
  "antlasma_ad": "Atina Antlaşması:",
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
,
// >>> KUTU-G3-1014 (0054/H-0020, ikinci parti) — yedi antlaşma haritası daha. Her nokta
// atlastaki yerleşimin kendi koordinatıdır; her noktanın `kaynak`ı, yeri ADIYLA anan
// kronoloji maddesinin kaynağıdır (TDV). Madde yeri adlandırmıyorsa nokta KONMADI.
{
  id: "istanbul-1700",
  antlasma_ad: "Azak'ın Rusya'ya",
  tarih: "1700-07-14",
  bolgeler: [
    { taraf: "rusya", etiket: "Rusya'ya bırakılan (Azak)", noktalar: [
        { ad: "Azak", lat: 47.113, lon: 39.423,
          kaynak: "İstanbul Antlaşması maddesi, 14 Temmuz 1700 (TDV karlofca, rusya): Azak Kalesi ve çevresindeki topraklar resmen Rusya'ya terk edildi" }
    ] }
  ],
  not: "Kırım hanının Moskova'dan aldığı verginin kaldırılması toprak hükmü olmadığından haritada yok."
},
{
  id: "hemedan-1727",
  antlasma_ad: "Hemedan Antlaşması",
  tarih: "1727-10-04",
  bolgeler: [
    { taraf: "osmanli", etiket: "Osmanlı'da kaldığı tanınan (Kafkasya, Azerbaycan, Batı İran)", zarf: true, noktalar: [
        { ad: "Tiflis", lat: 41.716, lon: 44.783, kaynak: "Tiflis'in alınışı maddesi, 15 Haziran 1723 (TDV ahmed-iii)" },
        { ad: "Kirmanşah", lat: 34.314, lon: 47.065, kaynak: "Kirmanşah'ın alınışı maddesi, 1 Ekim 1723 (TDV bagdat)" },
        { ad: "Hemedan", lat: 34.799, lon: 48.515, kaynak: "Hemedan'ın fethi maddesi, 31 Ağustos 1724 (TDV bagdat)" },
        { ad: "Revan", lat: 40.183, lon: 44.515, kaynak: "Revan'ın yeniden fethi maddesi, 3 Ekim 1724 (TDV revan)" },
        { ad: "Tebriz", lat: 38.08, lon: 46.292, kaynak: "Tebriz'in zaptı maddesi, 28 Temmuz 1725 (TDV ahmed-iii, tebriz)" },
        { ad: "Gence", lat: 40.683, lon: 46.36, kaynak: "Gence'nin fethi maddesi, 12 Eylül 1725 (TDV nahcivan)" }
    ] }
  ],
  not: "Antlaşma 1723-1725 fetihlerini hukuken tanıdı; toprak antlaşma gününde değil fetih günlerinde el değiştirdi. Zarf, adıyla anılan altı merkezin kapladığı kaba alandır; Hazar kıyısı (Rusya'nın 1723 kazançları) Osmanlı payı değildir."
},
{
  id: "istanbul-1736",
  antlasma_ad: "Güney Kafkasya'nın İran'a terki",
  tarih: "1736-09-01",
  bolgeler: [
    { taraf: "afsar", etiket: "Nâdir Şah'a (İran'a) bırakılan", zarf: true, noktalar: [
        { ad: "Tiflis", lat: 41.716, lon: 44.783, kaynak: "İstanbul Antlaşması maddesi, 1736 (TDV osmanlilar): Gence ve Tiflis'in kaybından sonra Güney Kafkasya'dan çekilme" },
        { ad: "Gence", lat: 40.683, lon: 46.36, kaynak: "İstanbul Antlaşması maddesi, 1736 (TDV osmanlilar): Gence ve Tiflis'in kaybından sonra Güney Kafkasya'dan çekilme" },
        { ad: "Revan", lat: 40.183, lon: 44.515, kaynak: "Revan'ın Nâdir Han'a teslimi maddesi, 3 Ekim 1735 (TDV nadir-sah)" }
    ] }
  ],
  not: "Madde sınırın 1639 Kasr-ı Şirin çizgisine döndüğünü söyler; Batı İran'daki öteki merkezler (Tebriz, Hemedan, Kirmanşah) 1730'da zaten kaybedilmişti, bu antlaşmanın devri değildir — noktalanmadı."
},
{
  id: "usi-1912",
  antlasma_ad: "Uşi Antlaşması",
  tarih: "1912-10-18",
  bolgeler: [
    { taraf: "italya", etiket: "İtalya'ya bırakılan (Trablusgarp ve Bingazi)", noktalar: [
        { ad: "Trablus", lat: 32.897, lon: 13.191, kaynak: "Uşi Antlaşması maddesi, 18 Ekim 1912 (TDV trablusgarp, trablusgarp-savasi)" },
        { ad: "Bingazi", lat: 32.117, lon: 20.068, kaynak: "Uşi Antlaşması maddesi, 18 Ekim 1912 (TDV trablusgarp, trablusgarp-savasi)" }
    ] },
    { taraf: "italya", etiket: "İtalya işgalinde kalan (iadesi vaat edildi, yapılmadı)", noktalar: [
        { ad: "Rodos (On İki Ada)", lat: 36.443, lon: 28.226, kaynak: "Uşi Antlaşması maddesi, 18 Ekim 1912: Rodos ve On İki Ada'nın iadesi vaat edildi, yerine getirilmedi" }
    ] }
  ],
  not: "Libya'nın iç kesimleri ve sınırları kaynakta şehir adıyla verilmez; iki merkez nokta ile gösterildi."
},
{
  id: "gumru-1920",
  antlasma_ad: "Gümrü Antlaşması",
  tarih: "1920-12-03",
  bolgeler: [
    { taraf: "tbmm-turkiye", etiket: "TBMM'de kaldığı kabul edilen (Ermenistan talepten vazgeçti)", noktalar: [
        { ad: "Kars", lat: 40.602, lon: 43.095, kaynak: "Gümrü Antlaşması maddesi, 3 Aralık 1920 (TDV milli-mucadele): Kars ve Sarıkamış'ın geri alınması üzerine Ermenistan doğudaki taleplerinden vazgeçti" },
        { ad: "Sarıkamış", lat: 40.328, lon: 42.578, kaynak: "Gümrü Antlaşması maddesi, 3 Aralık 1920 (TDV milli-mucadele)" }
    ] }
  ],
  not: "Gümrü antlaşması Moskova (16 Mart 1921) ve Kars (13 Ekim 1921) antlaşmalarıyla yerini kalıcı sınıra bıraktı."
},
{
  id: "moskova-1921",
  antlasma_ad: "Moskova Antlaşması",
  tarih: "1921-03-16",
  bolgeler: [
    { taraf: "tbmm-turkiye", etiket: "Türkiye'de kalan (Kars)", noktalar: [
        { ad: "Kars", lat: 40.602, lon: 43.095, kaynak: "Moskova Antlaşması maddesi, 16 Mart 1921 (TDV kars): Kars yeni Türk devletinin sınırları içinde kaldı" }
    ] },
    { taraf: "sovyet-rusya", etiket: "Sovyet Gürcistan'a bırakılan (Ahıska)", noktalar: [
        { ad: "Ahıska", lat: 41.643, lon: 42.986, kaynak: "Moskova Antlaşması maddesi, 16 Mart 1921 (TDV ahiska): Ahıska Gürcistan SSC'nin Tiflis vilâyetine bağlandı" }
    ] }
  ],
  not: "Batum'un Gürcistan'a bırakılması kronoloji maddesinde adıyla geçmediği için noktalanmadı (ayrı madde: 28 Mart 1921 Batum'un boşaltılması). Gürcistan SSC'nin kendi künyesi olmadığından Sovyet rengiyle gösterildi."
},
{
  id: "mudanya-1922",
  antlasma_ad: "Mudanya Mütarekesi",
  tarih: "1922-10-11",
  bolgeler: [
    { taraf: "tbmm-turkiye", etiket: "TBMM'ye devredilecek Doğu Trakya (Meriç'e kadar)", zarf: true, noktalar: [
        { ad: "Edirne", lat: 41.677, lon: 26.556, kaynak: "Mudanya Mütarekesi maddesi, 11 Ekim 1922 (TDV mudanya-mutarekesi): Doğu Trakya Meriç'e kadar 15 gün içinde boşaltılıp Türk idaresine devredilecek" },
        { ad: "Kırklareli", lat: 41.735, lon: 27.225, kaynak: "Doğu Trakya'nın teslim alınması maddesi, 10 Kasım 1922 (TDV kirklareli)" },
        { ad: "Tekirdağ", lat: 40.9838, lon: 27.5084, kaynak: "Doğu Trakya'nın teslim alınması maddesi, 13 Kasım 1922 (TDV tekirdag)" }
    ] }
  ],
  not: "İstanbul ve Boğazlar barış antlaşmasıyla teslim edilecekti; mütareke metni bunu toprak devri olarak değil sonraki barışa bırakılan bir hüküm olarak verir — noktalanmadı."
}
// <<< KUTU-G3-1014 BITTI

,
// >>> KUTU-H4-1015 (0054/H-0020, üçüncü parti) — Londra 1913 · Sevr 1920 · Kars 1921 · Lozan 1923 ·
// Edirne 1713. Yöntem G3 partisiyle aynı: nokta = atlastaki yerleşimin kendi koordinatı; `kaynak` =
// yeri ADIYLA anan TDV maddesi (15 Ekim 2026'da GET ile okundu). Metin bir BÖLGE diyor da şehir
// saymıyorsa seçilen şehir "TEMSİLÎ" diye yazılır (Pasarofça emsali). Atlasta yerleşimi olmayan
// yer (Kırkağaç, Akhisar, Ödemiş, Karaağaç) çizilmedi.
{
  id: "londra-1913",
  antlasma_ad: "Londra Antlaşması",
  tarih: "1913-05-30",
  bolgeler: [
    { taraf: "bulgaristan-kralligi", etiket: "Midye-Enez batısı — Bulgaristan'a", noktalar: [
        { ad: "Edirne", lat: 41.677, lon: 26.556,
          kaynak: "TDV balkan-savasi: Edirne 26 Mart 1913'te Bulgarlar'a düştü; Londra Antlaşması'yla Midye-Enez hattı Osmanlı-Bulgar sınırı oldu (Edirne 21 Temmuz 1913'te geri alındı)" },
        { ad: "Kırklareli", lat: 41.735, lon: 27.225,
          kaynak: "TDV balkan-savasi: Midye-Enez hattı Osmanlı-Bulgar sınırı — Kırklareli hattın batısındaki Trakya'nın TEMSİLÎ noktası (metin şehri adlandırmaz)" }
    ] },
    { taraf: "yunanistan", etiket: "Yunanistan'a (Selanik, Güney Makedonya, Girit)", noktalar: [
        { ad: "Selanik", lat: 40.640, lon: 22.944, kaynak: "TDV balkan-savasi: Londra Antlaşması'yla Selanik, Güney Makedonya ve Girit Yunanistan'a" },
        { ad: "Hanya", lat: 35.512, lon: 24.019, kaynak: "TDV balkan-savasi: Girit Yunanistan'a — Hanya adanın TEMSİLÎ noktası" },
        { ad: "Kandiye (Girit)", lat: 35.339, lon: 25.133, kaynak: "TDV balkan-savasi: Girit Yunanistan'a — Kandiye adanın TEMSİLÎ noktası" }
    ] },
    { taraf: "sirbistan-kralligi", etiket: "Sırbistan'a (Kuzey ve Orta Makedonya)", noktalar: [
        { ad: "Üsküp", lat: 41.997, lon: 21.428, kaynak: "TDV balkan-savasi: Kuzey ve Orta Makedonya Sırbistan'a — Üsküp TEMSİLÎ nokta" },
        { ad: "Manastır", lat: 41.031, lon: 21.335, kaynak: "TDV balkan-savasi: Kuzey ve Orta Makedonya Sırbistan'a; Manastır'ın Sırp işgali kronolojide 18 Kasım 1912 (data/olaylar_2s_0920.js)" }
    ] }
  ],
  not: "Arnavutluk'un sınırları ve Ege adalarının akıbeti antlaşmada büyük devletlere bırakıldı — noktalanmadı (İşkodra Karadağ işgalindeydi ama Arnavutluk'a kaldı). Müttefikler arası paylaşım Londra'da değil sonraki Bükreş (10 Ağustos 1913) ile kesinleşti; renkler TDV'nin Londra özetindeki paya göredir."
},
{
  id: "sevr-1920",
  antlasma_ad: "Sevr Antlaşması",
  tarih: "1920-08-10",
  bolgeler: [
    { taraf: "yunanistan", etiket: "Yunan yönetimine (İzmir bölgesi, egemenlik Osmanlı'da)", zarf: true, noktalar: [
        { ad: "İzmir", lat: 38.419, lon: 27.129, kaynak: "TDV sevr-antlasmasi md. 65-83: İzmir ili ve Kırkağaç, Akhisar, Tire, Ödemiş, Söke ilçelerinde resmî egemenlik Osmanlı'da, yönetim Yunanistan'da; beş yıl sonra katılma hakkı" },
        { ad: "Tire", lat: 38.089, lon: 27.735, kaynak: "TDV sevr-antlasmasi md. 65-83 (aynı hüküm, Tire adıyla)" },
        { ad: "Söke", lat: 37.751, lon: 27.408, kaynak: "TDV sevr-antlasmasi md. 65-83 (aynı hüküm, Söke adıyla)" }
    ] },
    { taraf: "yunanistan", etiket: "Yunanistan'a (Çatalca hattının batısı)", noktalar: [
        { ad: "Edirne", lat: 41.677, lon: 26.556, kaynak: "TDV sevr-antlasmasi md. 84-87: Türkiye Istıranca-Çatalca hattının batısındaki haklarından vazgeçti — Edirne TEMSİLÎ nokta (metin şehir saymaz)" },
        { ad: "Kırklareli", lat: 41.735, lon: 27.225, kaynak: "TDV sevr-antlasmasi md. 84-87 (aynı hüküm) — TEMSİLÎ nokta" }
    ] },
    { taraf: "osmanli", etiket: "Boğazlar Komisyonu yönetimine (egemenlik Osmanlı'da)", zarf: true, noktalar: [
        { ad: "Gelibolu", lat: 40.4156, lon: 26.6636, kaynak: "TDV sevr-antlasmasi md. 37-61: Gelibolu, Tekirdağ, İzmit, Bursa, Biga ve Edremit dahil Marmara kıyıları Osmanlı toprağı, yönetimi uluslararası Boğazlar Komisyonu'nda" },
        { ad: "Tekirdağ", lat: 40.9838, lon: 27.5084, kaynak: "TDV sevr-antlasmasi md. 37-61 (aynı hüküm, adıyla)" },
        { ad: "İzmit", lat: 40.766, lon: 29.917, kaynak: "TDV sevr-antlasmasi md. 37-61 (aynı hüküm, adıyla)" },
        { ad: "Bursa", lat: 40.188, lon: 29.061, kaynak: "TDV sevr-antlasmasi md. 37-61 (aynı hüküm, adıyla)" },
        { ad: "Biga", lat: 40.228, lon: 27.243, kaynak: "TDV sevr-antlasmasi md. 37-61 (aynı hüküm, adıyla)" },
        { ad: "Edremit", lat: 39.596, lon: 27.024, kaynak: "TDV sevr-antlasmasi md. 37-61 (aynı hüküm, adıyla)" }
    ] }
  ],
  not: "Kırkağaç, Akhisar ve Ödemiş atlasta yerleşim olarak yok — zarf İzmir-Tire-Söke çekirdeğidir, gerçek bölge daha geniş. Ermenistan (Wilson hakemliği, md. 88-93) ve Kürdistan özerkliği (md. 62-64) için kaynak yer saymadığından noktalanmadı; güney sınırı (Osmaniye-Antep-Urfa-Siverek-Mardin kuzeyi, md. 27) bir HAT tarifidir, bölge olarak çizilmedi. Sevr hiç yürürlüğe girmedi."
},
{
  id: "kars-1921",
  antlasma_ad: "Kars Antlaşması",
  tarih: "1921-10-13",
  bolgeler: [
    { taraf: "tbmm-turkiye", etiket: "Türkiye'de kalan (Kars)", noktalar: [
        { ad: "Kars", lat: 40.602, lon: 43.095, kaynak: "TDV kars: Moskova (16 Mart 1921) ve Kars (13 Ekim 1921) antlaşmalarıyla yapılan son sınır düzenlemesiyle Kars yeni Türk devletinin sınırları içinde kaldı" }
    ] },
    { taraf: "sovyet-rusya", etiket: "Azerbaycan SSC'ye özerk bölge (Nahçıvan)", noktalar: [
        { ad: "Nahçıvan", lat: 39.209, lon: 45.412, kaynak: "TDV nahcivan: 1921'de Kars'ta Türkiye ile Kafkas cumhuriyetleri arasında imzalanan antlaşmayla Nahçıvan Azerbaycan SSC'nin özerk kısmı olarak tanındı" }
    ] }
  ],
  not: "Kars, Moskova Antlaşması'nın doğu sınırını Kafkas cumhuriyetleriyle teyit eder; Artvin ve Ardahan'ın durumu TDV'de Moskova'ya bağlanır (bkz. moskova-1921 kaydı). Azerbaycan SSC'nin kendi künyesi olmadığından Sovyet rengiyle gösterildi."
},
{
  id: "lozan-1923",
  antlasma_ad: "Lozan Antlaşması",
  tarih: "1923-07-24",
  bolgeler: [
    { taraf: "tbmm-turkiye", etiket: "Türkiye'de kalan adalar (İmroz, Bozcaada)", noktalar: [
        { ad: "İmroz", lat: 40.163, lon: 25.905, kaynak: "TDV lozan-antlasmasi: Ege adalarından İmroz (Gökçeada), Bozcaada ve Tavşan adaları Türkiye'de kaldı" },
        { ad: "Bozcaada", lat: 39.833, lon: 26.045, kaynak: "TDV lozan-antlasmasi (aynı hüküm, adıyla)" }
    ] },
    { taraf: "tbmm-turkiye", etiket: "Türkiye'de kalan Doğu Trakya (Meriç sınırı)", noktalar: [
        { ad: "Edirne", lat: 41.677, lon: 26.556, kaynak: "TDV lozan-antlasmasi: Türk-Yunan sınırı Karaağaç Türkiye'de kalacak şekilde Meriç'in talveki — Edirne TEMSİLÎ nokta (Karaağaç atlasta yerleşim değil)" }
    ] },
    { taraf: "yunanistan", etiket: "Yunanistan'a bırakılan Ege adaları", noktalar: [
        { ad: "Midilli", lat: 39.106, lon: 26.554, kaynak: "TDV lozan-antlasmasi: adı sayılan öteki Ege adaları Yunanistan'a; Midilli, Sakız, Sisam ve Nikarya'da üs ve istihkâm kurulamayacak" },
        { ad: "Sakız", lat: 38.368, lon: 26.135, kaynak: "TDV lozan-antlasmasi (aynı hüküm, adıyla)" },
        { ad: "Sisam", lat: 37.755, lon: 26.977, kaynak: "TDV lozan-antlasmasi (aynı hüküm, adıyla)" },
        { ad: "Nikarya (İkarya)", lat: 37.600, lon: 26.150, kaynak: "TDV lozan-antlasmasi (aynı hüküm, adıyla)" }
    ] },
    { taraf: "italya", etiket: "İtalya'da kalan (Rodos ve Onikiada)", noktalar: [
        { ad: "Rodos", lat: 36.443, lon: 28.226, kaynak: "TDV lozan-antlasmasi: Rodos ve Onikiada İtalyanlar'da kaldı" }
    ] },
    { taraf: "ingiltere", etiket: "İngiltere'de kalan (Kıbrıs)", noktalar: [
        { ad: "Lefkoşa", lat: 35.170, lon: 33.360, kaynak: "TDV lozan-antlasmasi: Kıbrıs İngiltere'de kaldı — Lefkoşa adanın TEMSİLÎ noktası" }
    ] }
  ],
  not: "Musul antlaşmada çözülmedi (md. 3: Türk-Irak sınırı dokuz ay içinde İngiltere ile belirlenecek) — noktalanmadı. Türk-Suriye sınırı 1921 Ankara İtilâfnâmesi'ne bırakıldı (bkz. ankara-itilafnamesi-1921). Boğazlar'ın silahtan arındırılması egemenlik devri olmadığından bölge çizilmedi."
},
{
  id: "edirne-1713",
  antlasma_ad: "Rusya ile Edirne Antlaşması",
  tarih: "1713-06-24",
  bolgeler: [
    { taraf: "osmanli", etiket: "Osmanlı'da kalan (Prut şartlarının teyidi: Azak)", noktalar: [
        { ad: "Azak", lat: 47.113, lon: 39.423, kaynak: "TDV prut-antlasmasi: Azak Kalesi topraklarıyla iade edilecekti; 24 Haziran 1713 Edirne Antlaşması Rusya'nın yeniden sıkıştırılmasıyla yapıldı · madde (olaylar_ek5.js, TDV ahmed-iii): antlaşma Prut şartlarını teyit etti" }
    ] }
  ],
  not: "TDV (ahmed-iii, prut-antlasmasi, edirne-antlasmasi) 1713 antlaşmasının ayrı bir toprak/sınır hükmünü vermiyor; harita yalnız teyit edilen Prut hükmünü (Azak) gösterir. Rusya'nın Kazak topraklarından çekilmesi yer adı taşımadığından noktalanmadı."
}
// <<< KUTU-H4-1015 BITTI

,
// >>> KUTU-H4-1015 ikinci parti (0054/H-0020) — Osmanlı'nın taraf olduğu ve toprak hükmü yeri ADIYLA
// anan altı antlaşma maddesi: Gelibolu 1403 · Ahmed Paşa 1732 · Faş 1812 · II. Erzurum 1847 ·
// Bükreş 1913 · Brest-Litovsk 1918. Nokta = atlastaki yerleşim koordinatı; kaynak = maddenin TDV
// kaynağı (madde metni yeri adıyla anar). Madde yer adlandırmıyorsa nokta konmadı.
{
  id: "gelibolu-1403",
  antlasma_ad: "Gelibolu Antlaşması",
  tarih: "1403-02-01",
  bolgeler: [
    { taraf: "bizans", etiket: "Bizans'a bırakılan (Misivri'ye kadar Karadeniz kıyısı, Selanik, Marmara kıyısı)", noktalar: [
        { ad: "Ahtapolu (Ahtopol)", lat: 42.099, lon: 27.937, kaynak: "Gelibolu Antlaşması maddesi (olaylar_ek3.js, TDV fetret-devri): Misivri'ye kadar sahil şeridi Bizans'a; Ahtapolu, İğneada ve Rezve yirmi bir yıl Bizans idaresinde kaldı" },
        { ad: "İğneada", lat: 41.8890, lon: 28.0258, kaynak: "aynı madde (TDV fetret-devri), adıyla" },
        { ad: "Rezve (Rezovo)", lat: 41.9935, lon: 28.0192, kaynak: "aynı madde (TDV fetret-devri), adıyla" },
        { ad: "Selanik", lat: 40.640, lon: 22.944, kaynak: "Gelibolu Antlaşması maddeleri (TDV fetret-devri; suleyman-celebi-emir): Selanik Bizans'a iade edildi" },
        { ad: "Gebze", lat: 40.803, lon: 29.431, kaynak: "Gelibolu Antlaşması maddesi (TDV fetret-devri): Kartal, Pendik ve Gebze Bizans'a bırakıldı" }
    ] }
  ],
  not: "Tesalya ve adalar bölge adıdır, tek şehir anılmadığından noktalanmadı; Kartal ve Pendik atlasta yerleşim değil. Misivri atlasta yerleşim olarak bulunamadı."
},
{
  id: "ahmed-pasa-1732",
  antlasma_ad: "Ahmed Paşa Antlaşması",
  tarih: "1732-01-08",
  bolgeler: [
    { taraf: "safevi", etiket: "İran'a geri verilen (Batı İran, Aras sınırı)", zarf: true, noktalar: [
        { ad: "Hemedan", lat: 34.799, lon: 48.515, kaynak: "Ahmed Paşa Antlaşması maddesi (olaylar_ek5.js, TDV osmanlilar): Hemedan, Kirmanşah, Erdelan, Erdebil ve Tebriz İran'a geri verildi" },
        { ad: "Kirmanşah", lat: 34.314, lon: 47.065, kaynak: "aynı madde, adıyla" },
        { ad: "Senendec (Sine) — Erdelan", lat: 35.3111, lon: 46.9961, kaynak: "aynı madde 'Erdelan' der — Senendec Erdelan'ın merkezi olarak TEMSİLÎ nokta" },
        { ad: "Erdebil", lat: 38.249, lon: 48.294, kaynak: "aynı madde, adıyla" },
        { ad: "Tebriz", lat: 38.080, lon: 46.292, kaynak: "aynı madde, adıyla" }
    ] },
    { taraf: "osmanli", etiket: "Osmanlı'da kalan (Gence, Tiflis)", noktalar: [
        { ad: "Gence", lat: 40.683, lon: 46.360, kaynak: "aynı madde: Gence ve Tiflis Osmanlı'da kaldı" },
        { ad: "Tiflis", lat: 41.716, lon: 44.783, kaynak: "aynı madde, adıyla" }
    ] }
  ],
  not: "Antlaşma İstanbul'da ve Nâdir tarafından tanınmadı; 1732 dolmadan savaş yeniden başladı."
},
{
  id: "fas-poti-1812",
  antlasma_ad: "Faş (Poti) Kalesi Osmanlı'ya",
  tarih: "1812-12-19",
  bolgeler: [
    { taraf: "osmanli", etiket: "Osmanlı'ya iade edilen (Faş/Poti)", noktalar: [
        { ad: "Poti (Faş Kalesi)", lat: 42.146, lon: 41.672, kaynak: "madde (olaylar_p0049.js, TDV fas--gurcistan): 1812 Bükreş Antlaşması gereğince Faş Kalesi 19 Aralık 1812'de Osmanlı'ya teslim edildi" }
    ] }
  ],
  not: "Bükreş 1812'nin Besarabya hükmü ayrı kayıtta (bukres-1812)."
},
{
  id: "erzurum-1847",
  antlasma_ad: "II. Erzurum Antlaşması",
  tarih: "1847-05-31",
  bolgeler: [
    { taraf: "kacar", etiket: "Kaçarlar'a bırakılan (Şattülarap doğu yakası)", noktalar: [
        { ad: "Muhammere", lat: 30.4392, lon: 48.1664, kaynak: "II. Erzurum Antlaşması maddesi (olaylar_ok106.js, TDV sattularap): nehrin doğu yakasındaki yerleşimler, Muhammere limanı ve Abadan adası dahil, Kaçarlar'a bırakıldı" },
        { ad: "Abâdân", lat: 30.3392, lon: 48.3042, kaynak: "aynı madde, adıyla" }
    ] },
    { taraf: "osmanli", etiket: "Osmanlı'da kalan (Şattülarap suyolu, Basra)", noktalar: [
        { ad: "Basra", lat: 30.508, lon: 47.783, kaynak: "aynı madde: Şattülarap suyolunun tamamı Osmanlı'da kaldı — Basra suyolunun Osmanlı yakasının TEMSİLÎ noktası" }
    ] }
  ],
  not: "data/hukuki_sinirlar.js'teki ii-erzurum-sattularap-1847 hattının dolgusu kapalı olduğundan sinir_id yerine noktalar kullanıldı."
},
{
  id: "bukres-1913",
  antlasma_ad: "Bükreş Antlaşması — Batı Trakya",
  tarih: "1913-08-10",
  bolgeler: [
    { taraf: "yunanistan", etiket: "Bulgaristan'dan Yunanistan'a (Kavala, Drama, Serez)", zarf: true, noktalar: [
        { ad: "Kavala", lat: 40.9451, lon: 24.4101, kaynak: "Bükreş Antlaşması maddesi (olaylar_2s_0920.js, TDV balkan-savasi): Kavala, Drama ve Serez havzası Yunanistan'a bırakıldı" },
        { ad: "Drama", lat: 41.152, lon: 24.147, kaynak: "aynı madde, adıyla" },
        { ad: "Serez", lat: 41.089, lon: 23.545, kaynak: "aynı madde, adıyla" }
    ] }
  ],
  not: "Osmanlı Bükreş'e taraf değildir; Edirne'nin durumu İstanbul 1913 kaydında (istanbul-bulgaristan-1913)."
},
{
  id: "brest-litovsk-1918",
  antlasma_ad: "Brest-Litovsk Antlaşması",
  tarih: "1918-03-03",
  bolgeler: [
    { taraf: "osmanli", etiket: "Osmanlı'ya dönen Elviye-i Selâse (Kars, Ardahan, Batum)", zarf: true, noktalar: [
        { ad: "Kars", lat: 40.602, lon: 43.095, kaynak: "Brest-Litovsk maddesi (olaylar_ek5.js, TDV birinci-dunya-savasi) · TDV kars: 3 Mart 1918 Brest-Litovsk ile Kars, Ardahan ve Batum Osmanlı'ya verildi" },
        { ad: "Ardahan", lat: 41.111, lon: 42.702, kaynak: "aynı madde ve TDV kars, adıyla" },
        { ad: "Batum", lat: 41.6439, lon: 41.6420, kaynak: "aynı madde ve TDV kars, adıyla" }
    ] }
  ],
  not: "Mondros'tan sonra bölge yeniden elden çıktı; kesin çözüm Moskova ve Kars 1921 kayıtlarında."
}
// <<< KUTU-H4-1015 ikinci parti BITTI

,
// >>> KUTU-H4-1015 üçüncü parti (0054/H-0020) — Osmanlı'nın taraf olduğu beş antlaşma: Konya 1415 ·
// Venedik 1502 · İskenderiye 1828 · Londra Protokolü 1830 · Hewett 1884. Aynı yöntem: nokta = atlastaki
// yerleşim koordinatı; kaynak = yeri ADIYLA anan kronoloji maddesinin TDV kaynağı.
{
  id: "konya-1415",
  antlasma_ad: "Karamanoğulları ile antlaşma",
  tarih: "1415-03-01",
  bolgeler: [
    { taraf: "osmanli", etiket: "Osmanlı'ya geri verilen (Hamîd-ili, Beyşehir, Seydişehir, Akşehir)", zarf: true, noktalar: [
        { ad: "Beyşehir", lat: 37.677, lon: 31.724, kaynak: "Konya kuşatması maddesi (olaylar, TDV karamanogullari): Mehmed Bey Beyşehir, Seydişehir ve Akşehir'i Osmanlılar'a geri vermek zorunda kaldı" },
        { ad: "Seydişehir", lat: 37.421, lon: 31.849, kaynak: "aynı madde (TDV karamanogullari), adıyla" },
        { ad: "Akşehir", lat: 38.357, lon: 31.416, kaynak: "aynı madde (TDV karamanogullari), adıyla" },
        { ad: "Isparta (Hamîd-ili)", lat: 37.765, lon: 30.554, kaynak: "aynı madde (TDV mehmed-i): Hamîd-ili (Isparta yöresi) Osmanlı ülkesine katıldı — Isparta Hamîd-ili'nin TEMSİLÎ noktası" }
    ] }
  ],
  not: "Said-ili bölge adıdır, tek şehir anılmadığından noktalanmadı. Madde TDV mehmed-i (Mart 1415) ile karamanogullari (817/1414) arasındaki yıl çelişkisini kendi kaynağında beyan eder."
},
{
  id: "venedik-1502",
  antlasma_ad: "Osmanlı-Venedik Savaşı'nın sona ermesi",
  tarih: "1502-12-14",
  bolgeler: [
    { taraf: "osmanli", etiket: "Osmanlı'da kalan (İnebahtı, Modon, Koron)", noktalar: [
        { ad: "İnebahtı", lat: 38.399, lon: 21.827, kaynak: "Osmanlı-Venedik barışı maddesi (olaylar, TDV venedik): Sapienza, İnebahtı, Modon ve Koron'un kaybıyla sarsılan Venedik Mora'daki en önemli üslerini kaybetti" },
        { ad: "Modon", lat: 36.8207, lon: 21.7075, kaynak: "aynı madde (TDV venedik), adıyla" },
        { ad: "Koron", lat: 36.796, lon: 21.955, kaynak: "aynı madde (TDV venedik), adıyla" }
    ] }
  ],
  not: "Sapienza bir ada/deniz savaşı adı olarak geçer, atlasta yerleşim değil. Venedik'in ticarî imtiyazları toprak hükmü olmadığından çizilmedi."
},
{
  id: "iskenderiye-1828",
  antlasma_ad: "İskenderiye Sözleşmesi",
  tarih: "1828-08-06",
  bolgeler: [
    { taraf: "yunanistan", etiket: "Mısır kuvvetlerinin boşaltacağı Mora (fiilen Yunanistan'a)", zarf: true, noktalar: [
        { ad: "Mora (Tripoliçe)", lat: 37.510, lon: 22.379, kaynak: "İskenderiye Sözleşmesi maddesi (olaylar, TDV navarin): Mehmed Ali kuvvetlerini Mora'dan çekmeyi kabul etti · 'Mısır kuvvetleri Mora'yı boşalttı' maddesi (TDV mora): yarımada fiilen elden çıktı" },
        { ad: "Modon", lat: 36.8207, lon: 21.7075, kaynak: "'Mısır kuvvetleri Mora'yı boşalttı' maddesi (TDV mora): Modon aynı tarihte elden çıktı" },
        { ad: "Koron", lat: 36.796, lon: 21.955, kaynak: "aynı madde (TDV mora), adıyla" }
    ] }
  ],
  not: "Sözleşme bir Mısır valisinin İngiliz amiraliyle doğrudan yaptığı tahliye anlaşmasıdır; Mora'nın hukukî devri 1830 Londra Protokolü'yle (bkz. londra-1830)."
},
{
  id: "londra-1830",
  antlasma_ad: "Londra Protokolü — Yunanistan",
  tarih: "1830-02-03",
  bolgeler: [
    { taraf: "yunanistan", etiket: "Bağımsız Yunanistan'a (Mora, Attika, Eğriboz, Kiklad)", zarf: true, noktalar: [
        { ad: "Mora (Tripoliçe)", lat: 37.510, lon: 22.379, kaynak: "Londra Protokolü maddesi (olaylar_ek8.js, TDV yunanistan): Mora yarımadası, Attika ve Eğriboz ile Kiklad adaları yeni devlete bırakıldı — Tripoliçe Mora'nın TEMSİLÎ noktası" },
        { ad: "Atina", lat: 37.976, lon: 23.734, kaynak: "aynı madde — Attika'nın TEMSİLÎ noktası" },
        { ad: "Eğriboz", lat: 38.4631, lon: 23.6023, kaynak: "aynı madde, adıyla" },
        { ad: "Andros", lat: 37.833, lon: 24.933, kaynak: "aynı madde — Kiklad adalarının TEMSİLÎ noktası" },
        { ad: "Nakşa", lat: 37.0970, lon: 25.3825, kaynak: "aynı madde — Kiklad adalarının TEMSİLÎ noktası" }
    ] }
  ],
  not: "Sınır Arta-Volos hattıdır (madde); Arta ve Golos hat uçlarıdır, Osmanlı'da kaldıkları için Yunan bölgesine konmadı. Zarf denizi de kapsar — kara ve ada çekirdeğinin kaba dış sınırıdır."
},
{
  id: "hewett-1884",
  antlasma_ad: "Hewett (Adua) Antlaşması",
  tarih: "1884-06-03",
  bolgeler: [
    { taraf: "habesistan", etiket: "Habeşistan'a geri verilen (Bogos)", noktalar: [
        { ad: "Kerene", lat: 15.778, lon: 38.451, kaynak: "Hewett Antlaşması maddesi (olaylar_ek9.js, TDV habesistan): ikinci madde Bogos'u Habeşistan'a geri veriyordu; Kerene on iki yıllık Mısır idaresinden çıktı" }
    ] }
  ],
  not: "Masavva üzerinden serbest transit hükmü toprak devri olmadığından çizilmedi (bkz. antlasma9-hewett kartı)."
}
// <<< KUTU-H4-1015 üçüncü parti BITTI

,
// >>> KUTU-H4-1015 dördüncü parti (0054/H-0020) — Osmanlı dışı on bir antlaşma. Nokta = atlastaki
// yerleşim koordinatı; kaynak = yeri ADIYLA anan ek okuma kartının (data/ekokuma_antlasma10.js) kaynağı
// ya da kronoloji maddesinin kaynağı. Bölge adı verilen yerde seçilen şehir TEMSİLÎ diye yazılır.
{
  id: "stolbova-1617",
  antlasma_ad: "Stolbova Antlaşması",
  tarih: "1617-02-27",
  bolgeler: [
    { taraf: "isvec", etiket: "İsveç'te kalan (İngriya, Nöteborg)", noktalar: [
        { ad: "Oreşek (Nöteborg)", lat: 59.953, lon: 31.038, kaynak: "kart antlasma10-stolbova-1617 (lex.dk 'Stolbovofreden', SNL 'Freden i Stolbova'): İsveç Nöteborg ile birlikte İngriya'yı ve Kexholm bölgesini elinde tuttu" }
    ] }
  ],
  not: "Kexholm ve İngriya'nın öteki kaleleri atlasta yerleşim olarak yok; Novgorod'un Rusya'ya iadesi geri dönüş olduğundan ayrıca çizilmedi."
},
{
  id: "deulino-1618",
  antlasma_ad: "Deulino Mütarekesi",
  tarih: "1618-12-11",
  bolgeler: [
    { taraf: "lehistan", etiket: "Lehistan'a bırakılan (Smolensk, Çernigov, Novgorod-Seversk)", zarf: true, noktalar: [
        { ad: "Smolensk", lat: 54.783, lon: 32.045, kaynak: "kart antlasma10-deulino-1618 (Britannica 'Truce of Deulino'): Smolensk Leh tarafında kaldı" },
        { ad: "Çernigov", lat: 51.4982, lon: 31.2893, kaynak: "kart antlasma10-deulino-1618 (Encyclopedia of Ukraine 'Chernihiv region'): Çernigov bölgesi Lehistan'a geçti" },
        { ad: "Novgorod-Seversk", lat: 51.9874, lon: 33.2620, kaynak: "kart antlasma10-deulino-1618 (Encyclopedia of Ukraine 'Russia'): Starodub ve Novgorod-Seversk Lehistan'a" }
    ] }
  ],
  not: "Starodub atlasta yerleşim olarak yok."
},
{
  id: "bromsebro-1645",
  antlasma_ad: "Brömsebro Barışı",
  tarih: "1645-08-13",
  bolgeler: [
    { taraf: "isvec", etiket: "İsveç'e bırakılan (Gotland, Ösel, Jämtland, Härjedalen) ve rehin Halland", noktalar: [
        { ad: "Visby (Gotland)", lat: 57.635, lon: 18.294, kaynak: "kart antlasma10-bromsebro-1645 (lex.dk 'Brömsebro'): Gotland ve Ösel adaları İsveç'e bırakıldı" },
        { ad: "Halmstad (Halland)", lat: 56.674, lon: 12.857, kaynak: "aynı kart (SNL): Halland otuz yıllığına İsveç'e rehin — Halmstad TEMSİLÎ nokta" }
    ] }
  ],
  not: "Jämtland ve Härjedalen'de, Ösel'de atlas yerleşimi bulunamadı; bu bölgeler noktalanmadı."
},
{
  id: "roskilde-1658",
  antlasma_ad: "Roskilde Antlaşması",
  tarih: "1658-02-26",
  bolgeler: [
    { taraf: "isvec", etiket: "İsveç'e bırakılan (Skåne, Halland, Blekinge, Bornholm, Bohus, Trondheim)", noktalar: [
        { ad: "Malmö (Skåne)", lat: 55.605, lon: 13.000, kaynak: "kart antlasma10-roskilde-1658 (lex.dk 'Roskildefreden', Danmarkshistorien antlaşma metni): Skåne İsveç'e — Malmö TEMSİLÎ nokta" },
        { ad: "Halmstad (Halland)", lat: 56.674, lon: 12.857, kaynak: "aynı kart: Halland İsveç'e — TEMSİLÎ nokta" },
        { ad: "Rønne (Bornholm)", lat: 55.100, lon: 14.702, kaynak: "aynı kart: Bornholm İsveç'e (1660'ta geri döndü)" },
        { ad: "Trondheim", lat: 63.431, lon: 10.395, kaynak: "aynı kart: Norveç Trondheim lenini terk etti (1660'ta geri döndü)" }
    ] }
  ],
  not: "Blekinge ve Bohus'ta atlas yerleşimi bulunamadı. Trondheim ve Bornholm 1660 Kopenhag barışıyla geri döndü."
},
{
  id: "nystad-1721",
  antlasma_ad: "Nystad Antlaşması",
  tarih: "1721-09-10",
  bolgeler: [
    { taraf: "rusya", etiket: "Rusya'ya bırakılan (Livonya, Estonya, İngriya, Viborg)", zarf: true, noktalar: [
        { ad: "Riga", lat: 56.949, lon: 24.105, kaynak: "kart antlasma10-nystad-1721 (TDV isvec, SNL 'freden i Nystad'): Livonya Rusya'ya — Riga TEMSİLÎ nokta" },
        { ad: "Tallinn (Reval)", lat: 59.4370, lon: 24.7540, kaynak: "aynı kart: Estonya Rusya'ya — Tallinn TEMSİLÎ nokta" },
        { ad: "Narva", lat: 59.3770, lon: 28.1900, kaynak: "aynı kart: İngriya Rusya'ya — Narva TEMSİLÎ nokta" },
        { ad: "Viipuri (Vyborg)", lat: 60.713, lon: 28.733, kaynak: "aynı kart: Viborg leni Rusya'ya, adıyla" }
    ] },
    { taraf: "isvec", etiket: "İsveç'e geri verilen (Finlandiya'nın büyük kısmı)", noktalar: [
        { ad: "Turku (Åbo)", lat: 60.452, lon: 22.267, kaynak: "aynı kart: Rusya işgal ettiği Finlandiya'nın büyük kısmını geri verdi — Turku TEMSİLÎ nokta" }
    ] }
  ],
  not: "Gün TDV isvec'e göredir (Gregoryen 10 Eylül; Jülyen 30 Ağustos)."
},
{
  id: "fredrikshamn-1809",
  antlasma_ad: "Fredrikshamn",
  tarih: "1809-09-17",
  bolgeler: [
    { taraf: "rusya", etiket: "Rusya'ya bırakılan (Finlandiya ve Åland)", zarf: true, noktalar: [
        { ad: "Turku (Åbo)", lat: 60.452, lon: 22.267, kaynak: "kart antlasma10-fredrikshamn-1809 (lex.dk 'Freden i Fredrikshamn'): Åbo ve Björneborg leni Rusya'ya, adıyla" },
        { ad: "Helsinki", lat: 60.170, lon: 24.938, kaynak: "aynı kart: Nyland leni Rusya'ya — Helsinki TEMSİLÎ nokta" },
        { ad: "Vaasa", lat: 63.096, lon: 21.616, kaynak: "aynı kart: Vasa leni Rusya'ya, adıyla" },
        { ad: "Oulu", lat: 65.0121, lon: 25.4651, kaynak: "aynı kart: Uleåborg leni Rusya'ya, adıyla" },
        { ad: "Viipuri (Vyborg)", lat: 60.713, lon: 28.733, kaynak: "aynı kart: Karelya leni Rusya'ya — TEMSİLÎ nokta (Viborg 1721'den beri Rus'tu)" }
    ] }
  ],
  not: "Åland ve Torne ırmağına kadar Västerbotten de bırakıldı; atlas yerleşimi seçilmedi."
},
{
  id: "kiel-1814",
  antlasma_ad: "Kiel Antlaşması",
  tarih: "1814-01-14",
  bolgeler: [
    { taraf: "isvec", etiket: "İsveç'e bırakılan (Norveç)", noktalar: [
        { ad: "Oslo (Christiania)", lat: 59.913, lon: 10.752, kaynak: "kart antlasma10-kiel-1814 (SNL 'Kielfreden', lex.dk 'Kielerfreden'): Danimarka kralı Norveç'i İsveç kralına bıraktı — Christiania TEMSİLÎ nokta" },
        { ad: "Trondheim", lat: 63.431, lon: 10.395, kaynak: "aynı kart — Norveç'in TEMSİLÎ noktası" }
    ] }
  ],
  not: "Helgoland atlasta yerleşim değil; İzlanda, Faroe ve Grönland Danimarka'da kaldı (çizilmedi)."
},
{
  id: "viyana-1866",
  antlasma_ad: "Viyana Barışı — Venedik",
  tarih: "1866-10-03",
  bolgeler: [
    { taraf: "italya", etiket: "İtalya'ya katılan (Venedik ve Veneto)", zarf: true, noktalar: [
        { ad: "Venedik", lat: 45.4409, lon: 12.3188, kaynak: "kart antlasma10-viyana-1866 (Treccani 'Vienna'): Avusturya Venedik ve Veneto eyaletlerinin İtalya'ya katılmasını kabul etti" },
        { ad: "Padova", lat: 45.407, lon: 11.876, kaynak: "aynı kart — Veneto'nun TEMSİLÎ noktası" },
        { ad: "Verona", lat: 45.438, lon: 10.992, kaynak: "aynı kart — Veneto'nun TEMSİLÎ noktası" }
    ] }
  ],
  not: "Trentino Avusturya'da kaldı (kart)."
},
{
  id: "villa-giusti-1918",
  antlasma_ad: "Villa Giusti",
  tarih: "1918-11-03",
  bolgeler: [
    { taraf: "italya", etiket: "İtalyan işgaline bırakılan (Trento, Trieste)", noktalar: [
        { ad: "Trento", lat: 46.067, lon: 11.121, kaynak: "kart antlasma10-villa-giusti-1918 (Treccani 'Villa Giusti', 'Trento'): 1915 Londra'da İtalya'ya vaat edilen topraklar boşaltılıp İtilaf'a bırakılacaktı" },
        { ad: "Trieste", lat: 45.650, lon: 13.770, kaynak: "aynı kart (Treccani 'Trieste')" }
    ] }
  ],
  not: "Mütareke işgal hükmüdür; hukukî devir Saint-Germain (1919) ve Rapallo (1920) ile."
},
{
  id: "versailles-1919",
  antlasma_ad: "Versailles Antlaşması — Alsas-Loren",
  tarih: "1919-06-28",
  bolgeler: [
    { taraf: "fransa-cumhuriyet", etiket: "Fransa'ya iade edilen (Alsas-Loren)", zarf: true, noktalar: [
        { ad: "Strazburg", lat: 48.573, lon: 7.752, kaynak: "Versailles maddesi (olaylar_ok109.js; Versailles md. 51, Avalon Project): Alsas-Loren (Strazburg, Metz, Colmar, Mulhouse) Fransa egemenliğine iade edildi" },
        { ad: "Metz", lat: 49.120, lon: 6.176, kaynak: "aynı madde, adıyla" },
        { ad: "Colmar", lat: 48.079, lon: 7.358, kaynak: "aynı madde, adıyla" },
        { ad: "Mulhouse", lat: 47.750, lon: 7.340, kaynak: "aynı madde, adıyla" }
    ] }
  ],
  not: "Devir md. 51 gereği 11 Kasım 1918 mütarekesinden geçerlidir."
},
{
  id: "trianon-1920",
  antlasma_ad: "Trianon Antlaşması",
  tarih: "1920-06-04",
  bolgeler: [
    { taraf: "romanya-kralligi", etiket: "Romanya'ya (Erdel, Banat'ın doğusu)", noktalar: [
        { ad: "Temeşvar", lat: 45.760, lon: 21.230, kaynak: "Banat maddesi (olaylar_ok109.js; Trianon md. 27/3 ve 45, MNIR; TDV timisvar): Tımışvar şehri Romanya Krallığı'na katıldı" },
        { ad: "Erdel (Kaloşvar)", lat: 46.770, lon: 23.591, kaynak: "Trianon maddeleri (TDV macaristan; md. 45): Erdel'in Romanya ile birleşmesi tanındı — Kaloşvar TEMSİLÎ nokta" }
    ] },
    { taraf: "cekoslovakya", etiket: "Çekoslovakya'ya (Yukarı Macaristan)", noktalar: [
        { ad: "Bratislava (Pozsony)", lat: 48.146, lon: 17.107, kaynak: "Trianon maddesi (olaylar_ok109.js, TDV macaristan): Yukarı Macaristan Çekoslovakya'ya — Pozsony TEMSİLÎ nokta" }
    ] }
  ],
  not: "Hırvatistan ve Banat'ın batısı (SHS) ile Burgenland (Avusturya) bu kayıtta noktalanmadı."
}
// <<< KUTU-H4-1015 dördüncü parti BITTI

,
// >>> KUTU-H4-1015 beşinci parti (0054/H-0020) — yedi kayıt daha; aynı yöntem (kart ya da madde kaynağı).
{
  id: "feragat-1581",
  antlasma_ad: "Feragat Bildirgesi",
  tarih: "1581-07-26",
  bolgeler: [
    { taraf: "hollanda", etiket: "İspanya'dan kopan Birleşik Eyaletler", zarf: true, noktalar: [
        { ad: "Amsterdam", lat: 52.373, lon: 4.893, kaynak: "kart antlasma10-feragat-bildirgesi-1581 (Britannica 'Act of Abjuration', 'Union of Utrecht'): Genel Meclis II. Felipe'nin egemenliğini düşürdü — Holanda'nın TEMSİLÎ noktası" },
        { ad: "Utrecht", lat: 52.091, lon: 5.121, kaynak: "aynı kart: Utrecht Birliği'nin ilk imzacıları arasında Utrecht, adıyla" },
        { ad: "Rotterdam", lat: 51.924, lon: 4.478, kaynak: "aynı kart — Holanda'nın TEMSİLÎ noktası" }
    ] }
  ],
  not: "Bildirge bir antlaşma değil tek taraflı bağımsızlık kararıdır; İspanya'nın tanıması 1648."
},
{
  id: "rastatt-1714",
  antlasma_ad: "Rastatt Antlaşması",
  tarih: "1714-03-07",
  bolgeler: [
    { taraf: "habsburg", etiket: "Avusturya'ya (İspanyol Hollandası, Milano)", noktalar: [
        { ad: "Brüksel", lat: 50.847, lon: 4.352, kaynak: "kart antlasma5-utrecht-1713 (1911 Britannica 'Utrecht, Treaty of'): Avusturya Napoli, Milano ve İspanyol Hollandası'nı alacaktı; Rastatt 7 Mart 1714 — Brüksel TEMSİLÎ nokta" },
        { ad: "Anvers (Antwerpen)", lat: 51.220, lon: 4.400, kaynak: "aynı kart — İspanyol Hollandası'nın TEMSİLÎ noktası" },
        { ad: "Milano", lat: 45.464, lon: 9.190, kaynak: "aynı kart, adıyla" }
    ] }
  ],
  not: "Napoli ve Sardunya da Avusturya'ya geçti; bu kayıtta noktalanmadı."
},
{
  id: "fontainebleau-1762",
  antlasma_ad: "Fontainebleau Antlaşması",
  tarih: "1762-11-03",
  bolgeler: [
    { taraf: "ispanya", etiket: "İspanya'ya bırakılan (New Orleans dahil Louisiana)", noktalar: [
        { ad: "New Orleans", lat: 29.9511, lon: -90.0715, kaynak: "kart antlasma5-paris-1763 (Britannica): İspanya Fransa'dan New Orleans dahil Louisiana'yı aldı" }
    ] }
  ],
  not: "Fontainebleau gizli antlaşmasıdır; 1763 Paris barışıyla birlikte okunur."
},
{
  id: "pojun-1805",
  antlasma_ad: "Pojun",
  tarih: "1806-02-01",
  bolgeler: [
    { taraf: "italya-napolyon", etiket: "Napolyon'un İtalya Krallığı'na (Dalmaçya, Boka Kotorska)", zarf: true, noktalar: [
        { ad: "Zadar (Zara)", lat: 44.124, lon: 15.232, kaynak: "kart antlasma10-pojun-1805 (Hrvatska enciklopedija 'Požunski mir', 'dalmacija'): Avusturya Dalmaçya'yı İtalya Krallığı'na bıraktı; Fransa Şubat 1806'da idareyi devraldı — TEMSİLÎ nokta" },
        { ad: "Split (Spalato)", lat: 43.511, lon: 16.439, kaynak: "aynı kart — Dalmaçya'nın TEMSİLÎ noktası" },
        { ad: "Kotor (Cattaro)", lat: 42.421, lon: 18.768, kaynak: "aynı kart (HE 'boka-kotorska'): Boka Kotorska da bırakıldı; Ruslar 1806'da Boka'yı işgal etti" }
    ] }
  ],
  not: "Antlaşma 26 Aralık 1805; madde uygulamanın günüdür (Şubat 1806). Venedik, İstria, Tirol ve Bavyera hükümleri bu kayıtta noktalanmadı."
},
{
  id: "kvarner-1806",
  antlasma_ad: "Kvarner adalarının",
  tarih: "1806-01-01",
  bolgeler: [
    { taraf: "italya-napolyon", etiket: "Napolyon'un İtalya Krallığı'na (Kvarner adaları)", noktalar: [
        { ad: "Krk (Veglia)", lat: 45.075, lon: 14.615, kaynak: "madde (olaylar_ilirya_0072.js, LZMK krk-otok): Pojun barışıyla 1806'da Napolyon'un İtalya Krallığı'na girdi · kart antlasma10-pojun-1805" }
    ] }
  ],
  not: "Madde yıl hassasiyetindedir (1806)."
},
{
  id: "genel-deniz-1820",
  antlasma_ad: "Genel Deniz Antlaşması",
  tarih: "1820-01-08",
  bolgeler: [
    { taraf: "ingiltere", etiket: "İngiltere'yle antlaşmaya bağlanan şeyhlikler", noktalar: [
        { ad: "Ras el-Hayme (Cülfâr)", lat: 25.7896, lon: 55.9417, kaynak: "kart antlasma10-genel-deniz-antlasmasi-1820 (Aitchison c. XII No. XXXVIII): 8 Ocak 1820 Re'sülhayme'de düzenleme; 11 Ocak Ebûzabî, 28 Ocak Dubai, 4 Şubat Şârika imzaları" }
    ] }
  ],
  not: "Antlaşma himaye değil korsanlık/kölelik yasağı ve deniz barışıdır; İngiliz hegemonyası 1853 ve 1892 antlaşmalarıyla derinleşti."
},
{
  id: "somali-1884",
  antlasma_ad: "kuzey Somali kıyısında himaye",
  tarih: "1884-07-14",
  bolgeler: [
    { taraf: "ingiltere", etiket: "İngiliz himayesine giren (Berbera, Habr-Awal)", noktalar: [
        { ad: "Berbera", lat: 10.440, lon: 45.014, kaynak: "kart antlasma10-somali-himaye-1884 (Hertslet No. 93): Berbera çevresindeki Habr-Awal ile antlaşma 14 Temmuz 1884" },
        { ad: "Zeyla", lat: 11.355, lon: 43.473, kaynak: "TDV somali (madde olaylar_ek16.js): Zeyla, Berberâ ve Tâcûre 1884'te İngilizlerce sömürgeleştirildi" }
    ] }
  ],
  not: "Resmî himaye bildirimi 20 Temmuz 1887."
}
// <<< KUTU-H4-1015 beşinci parti BITTI

,
// >>> KUTU-H4-1015 altıncı parti (0054/H-0020) — Campo Formio 1797, Viyana 1815, Banat 1920 (Trianon md. 27/45).
{
  id: "campo-formio-1797",
  antlasma_ad: "Campo Formio Antlaşması",
  tarih: "1797-10-17",
  bolgeler: [
    { taraf: "habsburg", etiket: "Avusturya'ya (Venedik ve ana topraklar, İstria, Dalmaçya)", noktalar: [
        { ad: "Venedik", lat: 45.4409, lon: 12.3188, kaynak: "kart ihtilal-venedik-paylasimi (Treccani 'Manìn, Ludovico' ve 'Venezia'): Campo Formio'yla Venedik Avusturya'ya bırakıldı; ana topraklar, İstria ve Dalmaçya da" },
        { ad: "Split (Spalato)", lat: 43.511, lon: 16.439, kaynak: "Campo Formio maddesi (olaylar_ek16.js): Dalmaçya kıyısı (Split, Zadar, Şibenik, Kotor dahil) Avusturya'ya — ve aynı kart" },
        { ad: "Zadar (Zara)", lat: 44.124, lon: 15.232, kaynak: "aynı madde ve kart, adıyla" }
    ] },
    { taraf: "fransa-cumhuriyet", etiket: "Fransa'ya (İyon Adaları)", noktalar: [
        { ad: "Korfu", lat: 39.624, lon: 19.922, kaynak: "kart ihtilal-venedik-paylasimi · TDV yedi-ada-cumhuriyeti: Campo-Formio'nun 5. maddesi Venedik'e ait İyonya adalarının Fransa'ya bırakılmasını öngörüyordu" },
        { ad: "Kefalonya", lat: 38.227, lon: 20.575, kaynak: "aynı (TDV yedi-ada-cumhuriyeti), adıyla" }
    ] }
  ],
  not: "Avusturya Hollandası'nın (Belçika) Fransa'ya terki ayrıca noktalanmadı."
},
{
  id: "viyana-1815",
  antlasma_ad: "Viyana Kongresi Nihai Senedi",
  tarih: "1815-06-09",
  bolgeler: [
    { taraf: "prusya", etiket: "Prusya'ya (Ren boyları)", noktalar: [
        { ad: "Köln", lat: 50.938, lon: 6.960, kaynak: "kart antlasma6-viyana-1815: Prusya Saksonya'nın beşte ikisini, Ren boylarında geniş topraklar aldı — Köln TEMSİLÎ nokta" }
    ] },
    { taraf: "sardinya-piyemonte", etiket: "Sardinya Krallığı'na (Cenova)", noktalar: [
        { ad: "Cenova", lat: 44.4087, lon: 8.9347, kaynak: "aynı kart: Cenova Sardinya Krallığı'na verildi" }
    ] },
    { taraf: "habsburg", etiket: "Avusturya'da kalan (Lombardiya-Venedik)", noktalar: [
        { ad: "Milano", lat: 45.464, lon: 9.190, kaynak: "aynı kart: Avusturya Lombardiya ve Venedik'i elinde tuttu — Milano TEMSİLÎ nokta" },
        { ad: "Venedik", lat: 45.4409, lon: 12.3188, kaynak: "aynı kart, adıyla" }
    ] }
  ],
  not: "Polonya (Kongre Krallığı), Hollanda-Belçika birliği ve İsviçre hükümleri bu kayıtta noktalanmadı."
},
{
  id: "trianon-banat-1920",
  antlasma_ad: "Banat bölüşüldü",
  tarih: "1920-06-04",
  bolgeler: [
    { taraf: "romanya-kralligi", etiket: "Romanya'ya (Banat'ın doğusu, Temeşvar)", noktalar: [
        { ad: "Temeşvar", lat: 45.760, lon: 21.230, kaynak: "Banat maddesi (olaylar_ok109.js; Trianon md. 27/3 ve 45, MNIR; TDV timisvar): Tımışvar şehri Romanya Krallığı'na katıldı" }
    ] }
  ],
  not: "Banat'ın batısı SHS Krallığı'na kaldı; aynı günün genel Trianon kaydı trianon-1920."
}
// <<< KUTU-H4-1015 altıncı parti BITTI
];
