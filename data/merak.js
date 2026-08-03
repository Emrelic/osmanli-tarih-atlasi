// ============================================================================
// MERAK KARTLARI — "niçin öyle olmadı"
// ============================================================================
// Yazan: ÇAPRAZ İBERYA oturumu, 3 Ağustos 2026. Şartname: `MERAK.md`.
//
// 🔴 DOSYA ADI — KOORDİNATÖR `olaylar_ek15.js` DEDİ, ORASI YANLIŞ OLURDU
// ---------------------------------------------------------------------------
// Şartname (`MERAK.md` §168) açıkça `data/merak.js` diyor ve ÖLÇTÜM: arayüz
// zaten TAM OLARAK bu dosyayı bekliyor. Üç somut sebep:
//   ① js/app.js:3229  → [["data/ekokuma.js","EKOKUMA"],["data/merak.js","MERAK"]]
//      tembel yükleyici SABİT bu yolu okuyor; ek15'e yazılan kart panele HİÇ
//      düşmezdi.
//   ② js/app.js:3250  → "merak": kaynak = window.MERAK. Değişken adı da sabit.
//   ③ arac/denetle.py:282 → glob("data/olaylar*.js") ile TARANIYOR. Merak
//      kartında `t:` alanı YOK; ek15 adıyla yazılsa denetim onları KRONOLOJİ
//      MADDESİ sanıp okumaya çalışırdı.
//   + `MERAK.md` Kural ①: bu dosya ANA YÜKE KATILMAZ. index.html:125 zaten
//      "data/ekokuma.js + data/merak.js ana yüke KATILMAZ" diye yazıyor;
//      olaylar_ek*.js'lerin HEPSİ ana yükte.
// ⇒ ek12 vakasının aynısı: devir iyi niyetli, hedef yanlış. Şartnameye uydum.
//
// 🟢 BAĞLAMA GEREKMİYOR — altyapı hazır, dosya konunca kendiliğinden çalışır.
//    (olaylar_ek*.js'lerin aksine index.html'e satır EKLENMEZ.)
//
// ── ŞEMA (MERAK.md + js/app.js:3299-3305 sözleşmesi) ────────────────────────
//   { id, tur:"merak", soru, kisa, goruşler:[{tez,dayanak}], baglanti:[…],
//     kesinlik, kaynak }
//   ⚠️ `baglanti` dizisindeki değerler var olan bir maddenin `t:` alanıyla
//      BİREBİR eşleşmeli (app.js:3245 `liste.indexOf(o.t)`). Aşağıdaki 26
//      bağlantının hepsi canlı kronolojiye karşı ölçüldü — uydurma tarih yok.
//      Ay hassasiyetli olanlar (`1389-06`) bilerek öyle; madde öyle taşıyor.
//   ⚠️ `goruşler` anahtarı Türkçe 'ş' ile — şartnamenin yazımı. app.js ikisini
//      de kabul ediyor (`k.goruşler || k.gorusler`).
//
// ── KAYNAK ALANI HAKKINDA — dürüst olmak gerekiyor ──────────────────────────
// `kaynak:` burada DÜZ METİN olarak basılıyor (app.js:3307), olaylar*.js'teki
// gibi TDV BAĞLANTISI ÜRETMİYOR. Bu yüzden madde ADLARIYLA yazıldı, slug'la
// değil — ve slug doğrulaması YAPILMADI.
// 🔴 Bu alan ileride bağlantıya çevrilirse, ÇEVİRMEDEN ÖNCE her slug
//    `<title>` ile sınanmalıdır (`CLAUDE.md §4` ölü slug tuzağı).
//
// ── KAPSAM NOTU ─────────────────────────────────────────────────────────────
// Koordinatörün verdiği yedi başlık KUTUDAKİ KULLANICI SORULARINDAN geliyor
// (H-0013 Karaman · H-0015 Gürcistan · H-0020 kardeş katli · H-0021/22
// evlilikler · H-0023 kadınlar saltanatı) ve ikisi kutuda bulunamadı
// (kapitülasyon · I. Murad) — koordinatörün listesine güvenildi.
// ⚠️ `MERAK.md`in KENDİ kuyruğu (④-⑪) BUNLARDAN FARKLI ve hâlâ yazılmamış:
//    Otranto · Timur · Arabistan-körfez · müslümanlaşma · keşifler · Orta
//    Asya · kardeş katli · Hint Okyanusu. Kesişen tek başlık kardeş katliydi.
//    ⇒ Şartnamenin ⑩'unu (Hint Okyanusu) BU OTURUM zaten birincil kaynakla
//      çalıştığı için sekizinci kart olarak ekledim; kalan altısı AÇIK.
// ============================================================================

window.MERAK = [

{ id:"karaman-nicin-zor", tur:"merak",
  soru:"Batı Anadolu beylikleri kolayca ilhak edilirken Karamanoğulları niçin bu kadar zorladı?",
  kisa:"Fark askerî güç değil MEŞRUİYET'ti: Karaman kendini Selçuklu mirasının vârisi, Osmanlı'yı ise bir uç beyi sayıyordu.",
  goruşler:[
    { tez:"Meşruiyet rekabeti",
      dayanak:"Karamanoğulları Selçuklu başşehri Konya'yı tutuyor ve Anadolu'nun asıl vârisi olduğunu iddia ediyordu. Batı beylikleri böyle bir iddia taşımadı; onlar için Osmanlı ile akrabalık ya da komşuluk yeterliydi." },
    { tez:"Coğrafya ve dış dayanak",
      dayanak:"Karaman yenildiğinde Toroslar'ın ardına çekilebiliyor, Memlük ve Akkoyunlu'ya yaslanabiliyordu. Batı beylikleri denizle Osmanlı arasına sıkışmıştı ve geri çekilecek derinlikleri yoktu." },
    { tez:"İlhak biçimi de farklıydı",
      dayanak:"Batıda ilhaklar çoğu zaman savaşsız oldu: Germiyan toprakları 1381'de çeyiz olarak geldi, Hamîd ili satın alındı, bazıları antlaşmayla katıldı. Karaman'da ise her seferinde savaş gerekti ve ilhak 1397'den 1473'e kadar üç kuşak sürdü." }
  ],
  baglanti:["1381-01-01","1386-06-01","1397-07-01","1468-01-01","1473-01-01"],
  kesinlik:"tartismali",
  kaynak:"TDV: KARAMANOĞULLARI · GERMİYANOĞULLARI" },

{ id:"gurcistan-nicin-alinmadi", tur:"merak",
  soru:"Osmanlı Gürcistan'ı niçin bütünüyle ele geçirmedi?",
  kisa:"Gürcistan tek bir devlet değildi; Osmanlı batıyı tâbi kıldı, doğusu İran'la paylaşılan bir nüfuz alanı olarak kaldı.",
  goruşler:[
    { tez:"Ortada ilhak edilecek TEK ülke yoktu",
      dayanak:"Kartli, Kaheti, İmereti, Guria ve Megrelya ayrı krallık ve prensliklerdi. Hepsini ilhak etmek her birine ayrı garnizon ve ayrı idare kurmak demekti; tâbilik ise aynı itaati çok daha ucuza veriyordu." },
    { tez:"İran'la paylaşılmış bir eşikti",
      dayanak:"Doğu Gürcistan Safevî nüfuz alanıydı ve 1555 Amasya ile 1639 Kasr-ı Şîrîn antlaşmaları bu paylaşımı yazıya geçirdi. Bütünüyle almak, İran'la kalıcı bir savaş cephesi açmak anlamına geliyordu — nitekim Tiflis 1578'de alındı, 1606'da geri verildi." },
    { tez:"Dağ coğrafyası ilhakı pahalılaştırıyordu",
      dayanak:"Kafkas vadileri kale kale tutulmayı gerektiriyor, gelirse tımara bölünecek kadar toplu değildi. Haraç ve asker sağlayan bir tâbi krallık, masrafı kendi üstlenen bir eyaletten kârlıydı." }
  ],
  baglanti:["1606-01-01","1723-06-15","1723-08-01"],
  kesinlik:"tartismali",
  kaynak:"TDV: GÜRCİSTAN · TİFLİS · AMASYA ANTLAŞMASI" },

{ id:"kardes-katli-karsilastirmali", tur:"merak",
  soru:"Kardeş katli yalnız Osmanlı'ya mı hastır, başka devletlerde kurumsal olarak var mıdır?",
  kisa:"Uygulama Osmanlı'ya has değil — HAS OLAN, onun bir kanunnâmeye yazılmış olmasıdır.",
  goruşler:[
    { tez:"Uygulama yaygındı",
      dayanak:"Taht kavgasının kardeş ölümüyle bitmesi Selçuklu, İlhanlı, Timurlu, Delhi ve Babür hanedanlarında da görülür; Bizans aynı sonucu kör etme ve manastıra kapatmayla sağlıyordu. Fark derecede değil, KAYITTA." },
    { tez:"Osmanlı'ya has olan kodlanmasıdır",
      dayanak:"Fâtih Kanunnâmesi uygulamayı 'nizâm-ı âlem' gerekçesiyle meşrû bir devlet tasarrufu olarak yazıya geçirdi. Başka hiçbir hanedan bunu bir hukuk metnine koymadı; bu yüzden Osmanlı'da görünür, ötekilerde vakalar hâlinde kalır." },
    { tez:"Bitişi de kurumsaldı",
      dayanak:"1603'ten sonra yerini ekberiyet ve kafes usulü aldı. Şehzadelerin sancağa çıkarılmaması taht kavgasını fiilen bitirdi; yani uygulamayı sona erdiren ahlâkî bir dönüşüm değil, veraset düzeninin değişmesiydi." }
  ],
  baglanti:["1477-01-01","1513-04-24","1553-10-05","1562-07-23","1603-12-23"],
  kesinlik:"tartismali",
  kaynak:"TDV: KANUNNÂME · SANCAĞA ÇIKMA · EKBERİYET" },

{ id:"siyasi-evlilikler", tur:"merak",
  soru:"Osmanlı hanedanında evlilik ve çok eşlilik nasıl bir kurumdu?",
  kisa:"Erken dönemde evlilik bir DIŞ SİYASET aracıydı; XV. yüzyıldan sonra yerini câriye kaynaklı hanedan üretimi aldı.",
  goruşler:[
    { tez:"Sınır düzenleyen bir araç",
      dayanak:"Germiyanoğlu'nun kızıyla yapılan evlilik Kütahya ve çevresini çeyiz olarak getirdi (1381); Yıldırım Bayezid'in Sırp prensesi Despina Hatun'la evliliği (1390) Sırbistan'ı müttefik yaptı. Candar ve Dulkadir evlilikleri de savaşsız sınır düzenlemeleriydi." },
    { tez:"Niçin terk edildiği tartışmalı",
      dayanak:"XV. yüzyıldan sonra hanedan dışarıdan kız almayı bıraktı. Sebep için üç açıklama ileri sürülür: yabancı hanedanın sarayda nüfuz kurmasını önlemek, tahta ortak çıkarabilecek akrabalık ağı yaratmamak, devşirme sadakatini daha güvenilir saymak." },
    { tez:"Çok eşlilik kural değil imkândı",
      dayanak:"Kanûnî'nin Hürrem Sultan'la nikâh kıyması (1534), câriyeyle nikâh kıyılmaması teamülünü açıkça bozan bir istisna olarak kaydedilmiştir." }
  ],
  baglanti:["1381-01-01","1390-01-15","1534-01-01"],
  kesinlik:"tartismali",
  kaynak:"TDV: HÂNEDAN · HÜRREM SULTAN · DESPİNA HATUN" },

{ id:"kadinlar-saltanati", tur:"merak",
  soru:"\"Kadınlar saltanatı\" gerçek bir yönetim biçimi miydi?",
  kisa:"Terimin kendisi sonradan konmuştur; asıl tartışma \"kadınlar yönetti mi\" değil, NİÇİN yönetebildikleridir.",
  goruşler:[
    { tez:"Yapısal bir boşluğu doldurdular",
      dayanak:"Padişahın sefere çıkmayı bırakması, şehzadelerin sancağa gönderilmemesi ve çocuk yaşta cülûslar iktidarın ağırlığını saraya kaydırdı. Vâlide sultan, hanedanın sürekliliğini temsil eden tek sabit makam olduğu için doğal vekil hâline geldi — yani yükseliş kişisel değil kurumsaldı." },
    { tez:"Etki abartılmıştır",
      dayanak:"Hürrem, Nurbânû, Safiye ve Kösem sultanların nüfuzu kişisel ve dönemseldir; devlet kararları divanda alınmış, uygulamayı sadrazam yürütmüştür. 'Saltanat' sözü dönemin muhalif kalemlerinin şikâyet dilinden ve sonraki tarih yazımından gelir, resmî bir konumu tarif etmez." },
    { tez:"Ölçüt sorunu",
      dayanak:"'Saltanat' benzetmesi, görünür iktidarla perde arkasındaki fiilî etkiyi aynı kefeye koyduğu için tartışmalıdır." }
  ],
  baglanti:["1534-01-01","1558-04-15","1595-02-01","1651-09-02"],
  kesinlik:"tartismali",
  kaynak:"TDV: VÂLİDE SULTAN · KÖSEM SULTAN · HÜRREM SULTAN" },

{ id:"kapitulasyon-zaaf-mi-arac-mi", tur:"merak",
  soru:"Kapitülasyonlar bir zaaf mı, yoksa bir dış siyaset aracı mıydı?",
  kisa:"Verildiği çağda ARAÇ, sürekli hâle geldiği çağda ZAAF'tı — ayrım metinde değil, TARİHTE.",
  goruşler:[
    { tez:"Başlangıçta güçlü tarafın verdiği lütuftu",
      dayanak:"1352'de Ceneviz'e, 1536'da Fransa'ya verilen ahidnâmeler tek taraflıydı: padişahın bahşettiği ve HER CÜLÛSTA YENİLENMESİ gereken imtiyazlardı. Amaç Habsburg blokunu bölmek ve limanlara ticaret çekmekti." },
    { tez:"Süreklilik onu tersine çevirdi",
      dayanak:"1740'ta Fransa'ya tanınan süreklilik, metni geri alınabilir bir lütuftan karşılıklı antlaşmaya dönüştürdü. XIX. yüzyılda himaye belgesi alan gayrimüslim tebaa da vergi dışında kalınca malî yük yerli üreticiye kaydı." },
    { tez:"Kaldırılışı tek taraflı oldu",
      dayanak:"Osmanlı kapitülasyonları müzakereyle değil, 1914'te tek taraflı ilanla kaldırdı; kesin tasfiye Lozan'da mümkün oldu. Bir imtiyazın kaldırılması için savaş gerekmesi, onun artık araç olmaktan çıktığının ölçüsüdür." }
  ],
  baglanti:["1352-01-01","1536-02-18","1580-06-01","1740-05-30"],
  kesinlik:"tartismali",
  kaynak:"TDV: İMTİYAZÂT-ı EONOMİYYE · AHİDNÂME" },

{ id:"i-murad-sehadeti", tur:"merak",
  soru:"I. Murad Kosova'da tam olarak nasıl öldürüldü?",
  kisa:"Suikastın savaştan önce mi sonra mı olduğu ve failin kim olduğu kaynaklarda ayrışır; ayrıntı zamanla destanlaşmıştır.",
  goruşler:[
    { tez:"Savaş kazanıldıktan sonra",
      dayanak:"Osmanlı kaynaklarının çoğu padişahın muharebe bittikten sonra savaş alanını gezerken, ölüler arasından kalkan yaralı bir Sırp tarafından hançerlendiğini yazar. Bu anlatıda I. Bayezid'in cülûsu savaş meydanında gerçekleşir." },
    { tez:"Muharebe sırasında bir sızma",
      dayanak:"Bazı erken Sırp ve batı kayıtları, failin sahte bir teslim olma ya da sığınma bahanesiyle otağa girip padişahı öldürdüğünü anlatır. Bu okumada suikast savaşın seyrini etkileyen bir olaydır, sonucu değil." },
    { tez:"Failin adı geç kaynaklarda çıkıyor",
      dayanak:"Miloš Obilić adı ancak XV. yüzyıl sonrası metinlerde geçer; olaya en yakın kayıtlar faili adlandırmaz. Ayrıntının ne kadarı olay, ne kadarı Kosova destanının sonradan biçimlendirdiği anlatıdır — belirsiz." }
  ],
  baglanti:["1389-06"],
  kesinlik:"tartismali",
  kaynak:"TDV: MURAD I · KOSOVA" },

{ id:"hint-okyanusu-rekabeti", tur:"merak",
  soru:"Osmanlı, Portekiz'e karşı Hint Okyanusu rekabetini niçin kaybetti?",
  kisa:"Mesele gemi sayısı değil, HANGİ DENİZİN hayatî sayıldığıydı — ve ölçüte göre rekabet kaybedilmiş de sayılmayabilir.",
  goruşler:[
    { tez:"Lojistik asimetrisi",
      dayanak:"Osmanlı donanması Süveyş ve Basra'da kuruluyor, kereste develerle çöl aşırtılıyordu; her sefer sıfırdan bir tersane demekti. Portekiz ise Goa'da yerinde onarım yapıyor, Atlas hattından besleniyordu." },
    { tez:"Öncelik sıralaması",
      dayanak:"Osmanlı'nın hayatî cepheleri Akdeniz ve Orta Avrupa'ydı. Hint Okyanusu seferleri tek tek denendi — 1538 Diu, 1552 Hürmüz, 1559 Bahreyn — ama hiçbiri Preveze ölçeğinde kaynak almadı. Kaybedilen bir savaş değil, öncelik verilmemiş bir cephedir." },
    { tez:"Sınırlı hedefe göre BAŞARILIYDI",
      dayanak:"Portekiz Kızıldeniz'e yerleşemedi: 1513 Aden ve 1517 Cidde teşebbüsleri püskürtüldü. Ölçüt 'Hindistan'a hâkim olmak' ise rekabet kaybedilmiş, 'Kızıldeniz'i kapatmak' ise kazanılmıştır." }
  ],
  baglanti:["1516-08-02","1517-04-18","1538-06-13","1546-01-01"],
  kesinlik:"tartismali",
  kaynak:"TDV: HİNT DENİZİ SEFERLERİ · Ertuğrul Önalp (OTAM) · Diogo do Couto, Da Ásia" }

];
