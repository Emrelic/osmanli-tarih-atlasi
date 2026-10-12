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
}
];
