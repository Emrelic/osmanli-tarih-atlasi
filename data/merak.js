// ============================================================================
// MERAK KARTLARI — "niçin öyle olmadı"
// ============================================================================
// Yazan: ÇAPRAZ İBERYA oturumu, 3 Ağustos 2026. Şartname: `MERAK.md`.
//
// 🔴 7 AĞUSTOS — VERİ İÇERİK oturumu, KALEM 2 ölçümü:
// Görev `oturumlar/VERI-ICERIK-GOREV.md` bu dosyaya H-0020/21/22/23 için dört
// yeni kart istiyordu; ölçünce ÜÇÜ ZATEN BURADA olduğu görüldü —
// `kardes-katli-karsilastirmali` (H-0020), `siyasi-evlilikler` (H-0021+22
// birleşik), `kadinlar-saltanati` (H-0023). Tekrar yazılmadı, mükerrer
// kart açılmadı. Ayrıca üç `kaynak:` alanı curl ile sınandı (CLAUDE.md §4
// 302 testi): `ekberiyet`, `despina-hatun`, `hanedan` ÖLÜ çıktı → sırasıyla
// `ahmed-i`, [kaldırıldı — canlı karşılığı bulunamadı], `al-i-osman` ile
// değiştirildi. Ayrıntı: `oturumlar/VERI-ICERIK-ILERLEME.md`.
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

// 🔴 10 AĞUSTOS 2026 — İÇERİK oturumu, `parti-0007` (H-0001…H-0006)
// Altı kalem, ALTI kart (H-0005 ve H-0006 aynı sahne ama AYRI soru: biri
// olgusal "tâbi oldular mı", öteki tartışma "amacı neydi" — birleştirilseydi
// Emre'nin ikinci sorusu kaybolurdu; koordinatör onayladı). H-0004'ün tanım
// yarısı `ekokuma.js` → `zimmi-cizye-millet-duzeni` kartında.
//
// 🔴 DEVRALINAN İKİ İDDİA SINANDI — biri ÇÜRÜDÜ, biri DOĞRULANAMADI:
//   "Kilitbahir + Kale-i Sultâniye (1462)"  → ÇÜRÜDÜ. TDV `canakkale` "1463
//      yılında inşa edilen" der, `kilitbahir-kalesi` ise kaleyi "İstanbul'un
//      fethinden SONRA yapılmış" diye tanımlar (Kritovulos: 1463-1465).
//      ⇒ Asıl bulgu yıl değil SIRA: 1453 kuşatmasında Çanakkale hisarsızdı,
//        yani Emre'nin gözlemi doğru; kart "niçin O KADAR GEÇ" sorusuna oturdu.
//   "Galata 28 Mayıs'ta teslim anlaşmasıyla alındı" → DOĞRULANAMADI. TDV
//      `galata` gövdesi okundu, teslim gününe dair kayıt YOK. Karta YAZILMADI,
//      yerine `bulunamadı` damgası kondu.
// 📌 İkisi de KUTU DENETİM'in "aktardığımı söylüyorum, kartı yazan sınasın"
//    dediği notlardı. Sınandı. Ölçülmemiş bir cümleyi devralmak, onu ölçülmüş
//    gösterir (CLAUDE.md §11).
//
// ⚠️ `baglanti` alanlarının tamamı yazıldıktan sonra `data/olaylar*.js`e karşı
//    ölçüldü (16 dosya · 1161 madde): karşılıksız bağlantı 0.

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
  kaynak:"TDV: KANUNNÂME · SANCAĞA ÇIKMA · AHMED I" },

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
  kaynak:"TDV: ÂL-İ OSMÂN · HÜRREM SULTAN" },

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
  kaynak:"TDV: HİNT DENİZİ SEFERLERİ · Ertuğrul Önalp (OTAM) · Diogo do Couto, Da Ásia" },

// ── parti-0007 · İÇERİK oturumu, 10 Ağustos 2026 ────────────────────────────

{ id:"haclilar-nicin-basarisiz", tur:"merak",
  soru:"Bir sürü devlet tarafından örgütlenip Osmanlı'ya saldıran Haçlı seferleri niçin hep başarısız oldu?",
  kisa:"Ortak düşman ortak komuta üretmedi: her seferde ordular birleşti, KARAR birleşmedi.",
  goruşler:[
    { tez:"Koalisyon ordusuydu, tek ordu değildi",
      dayanak:"Niğbolu'da (25 Eylül 1396) Buda'da toplanan kuvvet Macar, Fransız, Alman, İngiliz, Eflak ve öteki Avrupa şövalyelerinden kuruluydu. Sigismund ihtiyatlı bir savunma savaşı istiyordu; Enguerrand de Coucy'nin \"Türkler'in hareketi beklenmeksizin bir an önce saldırıya geçilmesi\" görüşü kabul edilince acele hücum edildi. TDV hezimeti disiplinsizliğe, ortak savaş planının yokluğuna, aşırı özgüvene ve topografyanın incelenmemesine bağlar — sayıya değil." },
    { tez:"Deniz ayağı hiç tutmadı",
      dayanak:"Varna seferi (10 Kasım 1444) Boğazlar'ın kapatılacağı varsayımı üzerine kuruldu: sekizi papanın, beşi Venedik'in, dördü Burgonya'nın, ikisi Ragusa'nın desteklediği bir filo hazırlandı. Filo boğazları tutamadı ve II. Murad ekim sonunda Ceneviz tüccar gemilerini KİRALAYARAK Anadolu'dan Rumeli'ye geçti. Kara ordusu, gerçekleşmeyen bir denizaltı varsayımın üstünde yürümüş oldu." },
    { tez:"\"Hep başarısız\" ölçütü de tartışmalı",
      dayanak:"1444 baskısı savaş meydanında değil MASADA sonuç vermişti: Edirne-Segedin Antlaşması (12 Haziran 1444) ve ardından Semendire'nin fiilen Sırbistan'a iadesi (Ağustos 1444) Haçlı tarafının kazancıydı. TDV bu metnin \"gerçek anlamda bir barış mı yoksa geçici bir ateşkes mi olduğu\"nun tartışmalı olduğunu, Kardinal Cesarini ve Bizans imparatorunun devreye girmesiyle hükümsüz kaldığını yazar. ⇒ Sorun her zaman kazanamamak değil, kazanılanı korumamaktı." }
  ],
  baglanti:["1396-09","1444-06-12","1444-08-01","1444-11"],
  kesinlik:"tartismali",
  kaynak:"TDV: HAÇLILAR · NİĞBOLU SAVAŞI · VARNA MUHAREBESİ" },

{ id:"canakkale-hisar-ve-zincir", tur:"merak",
  soru:"İstanbul Boğazı'na iki hisar yapıldı da Çanakkale Boğazı'na niçin yapılmadı — ve Bizans Haliç'e zincir gerdiğine göre Osmanlı niçin boğazlara zincir germeyi düşünmedi?",
  kisa:"Sorunun ilk yarısının öncülü eksik: Çanakkale'ye de hisar YAPILDI — ama fetihten SONRA. Asıl soru \"niçin yapılmadı\" değil, NİÇİN O KADAR GEÇ yapıldığıdır.",
  goruşler:[
    { tez:"Hisar var — ama kuşatma silahı değil, fetih sonrası kilit",
      dayanak:"Fâtih boğazın en dar yerinde karşılıklı iki kale yaptırdı: Rumeli yakasında Kilitbahir, karşısında Kal'a-i Sultâniyye. TDV Çanakkale maddesi Sultâniyye için \"1463 yılında inşa edilen\" der; Kilitbahir maddesi kaleyi \"İstanbul'un fethinden sonra yapılmış kale\" diye tanımlar ve Kritovulos'a dayanarak inşanın 1463-1465'te tamamlandığını yazar. Yani bu hisarlar 1453 kuşatmasının aracı DEĞİL, fethedilmiş bir başşehri Ege'den gelecek donanmaya kapatan sonraki bir tedbirdir. Pîrî Reis'e göre Marmara'dan çıkan gemiler geçiş iznini Rumeli yakasındaki kaleden alırdı." },
    { tez:"1453'ten önce Çanakkale zaten hisarsız denetleniyordu — iki boğazın işi farklıydı",
      dayanak:"Çanakkale'nin iki yakası da 1354'ten beri fiilen Osmanlı'daydı (1366'da bir Haçlı filosu Gelibolu'yu aldı, 1367'de Bizans'a bıraktı, 1376'daki ikinci fetihle kesin Osmanlı oldu) ve denetim kaleyle değil Gelibolu tersanesi ve donanmayla sağlanıyordu. İstanbul Boğazı'ndaki iki hisarın işi ise apayrıydı: Anadolu Hisarı Yıldırım Bayezid'in bir \"köprübaşı\"sıydı — ordunun karşıya geçişi için; Rumeli Hisarı (Mart 1452'de başlandı, 31 Ağustos 1452'de tamamlandı) Boğaz'dan gelip geçen gemileri kesmek içindi. Çanakkale'de kesilecek bir düşman trafiği yoktu, çünkü boğaz zaten Osmanlı'nın kendi geçit yeriydi." },
    { tez:"Zincir fikrinin kendi sicili zayıf — ve Osmanlı'nın cevabı zincir değil TOP oldu",
      dayanak:"Zincir ancak İKİ UCU DA tutuluyorsa engeldir: Haliç zincirinin bir ucu Sirkeci'de Kentenarios burcuna, öteki ucu Karaköy'de Kastellion hisarına bağlıydı — ve 1203'te Batılı şövalyeler Kastellion'u ele geçirerek zinciri açmışlardı. 1453'te de zincir kırılmadı, 21 Nisan gecesi gemilerin Galata sırtlarından indirilmesiyle \"fonksiyonunu kaybetti\". Osmanlı aynı işi kalelere yerleştirdiği toplarla çözdü. ⚠️ Osmanlı'nın boğazlara zincir germeyi düşünüp düşünmediğine dair bir kayıt taranan TDV maddelerinde BULUNAMADI; bu görüş bir kayıt değil, zincirin ölçülmüş siciline dayanan bir çıkarımdır." }
  ],
  baglanti:["1452-08-31","1453-04-06","1453-04-22","1453-05-29"],
  kesinlik:"tartismali",
  kaynak:"TDV: ÇANAKKALE · KİLİTBAHİR KALESİ · GELİBOLU · ANADOLUHİSARI · RUMELİHİSARI · HALİÇ · İSTANBUL" },

{ id:"galata-nicin-alinmadi", tur:"merak",
  soru:"Haliç zincirinin ucu Galata'daydı; Fâtih niçin Galata'yı alıp zinciri boşa düşürmek yerine gemileri karadan yürüttü?",
  kisa:"Çünkü Galata Bizans değil CENEVİZ'di ve resmen tarafsızdı: zinciri açmak ucuzdu, Ceneviz'i savaşa sokmak pahalı.",
  goruşler:[
    { tez:"Sorulan yol teorik değil — 250 yıl önce fiilen denenmişti",
      dayanak:"TDV Haliç maddesi şunu kaydeder: 1203'te İstanbul önlerine gelen Batılı şövalyeler, \"Galata'da zincirin bir ucunun bağlandığı Kastellion Hisarı'nı ele geçirerek zinciri açmışlardı.\" Yani zincirin ucunu almak Haliç'e girmenin bilinen yoluydu. Değişen şey yöntem değil MÜLKİYETTİ: 1203'te Kastellion Bizans'ındı, 1453'te Galata bir Ceneviz kolonisiydi." },
    { tez:"Tarafsızlık askerî değil diplomatik bir varlıktı",
      dayanak:"TDV İstanbul maddesine göre kuşatma boyunca Galata'daki Cenevizliler resmen tarafsız kaldı. Bu tarafsızlığın kırılganlığı aynı kuşatmada görülüyor: 20 Nisan'da İstanbul'a iâşe getiren üç Ceneviz gemisi, lodosun kürekli Osmanlı gemilerini bağlaması sayesinde ablukayı yarıp Haliç'e girdi. Buna rağmen Galata'ya saldırılmadı — çünkü Ceneviz yalnız bir koloni değil, Osmanlı'nın da kullandığı bir deniz gücüydü: II. Murad 1444'te Varna seferi öncesi Boğaz'ı Ceneviz tüccar gemilerini kiralayarak geçmişti." },
    { tez:"Karadan yürütme ikisini birden verdi — bedel sonra ödendi",
      dayanak:"21 Nisan'ı 22 Nisan'a bağlayan gece donanmanın bir kısmı karadan çekilerek Haliç'e indirildi ve zincir savaşılmadan işlevsizleşti; Galata'ya bir asker bile girmedi. Fetihten sonra ise TDV'nin kaydettiği şudur: \"Osmanlı fethinden sonra Galata'daki Cenevizliler'e Fâtih Sultan Mehmed eski özerk statülerini vermedi\" — Haziran 1453 (Cemâziyelevvel 857) tarihli ahidnâme onlara \"imtiyaz ve bir kapitülasyon niteliği\" taşıyan haklar tanıdı. ⇒ Tarafsızlık kuşatmayı atlattı, fethi atlatamadı. ⚠️ Galata'nın teslim GÜNÜNE dair açık bir kayıt TDV Galata maddesinde BULUNAMADI." }
  ],
  baglanti:["1453-04-06","1453-04-22","1453-05-29"],
  kesinlik:"tartismali",
  kaynak:"TDV: HALİÇ · İSTANBUL · GALATA · VARNA MUHAREBESİ" },

{ id:"hristiyan-tebaa-zorlama-mi", tur:"merak",
  soru:"Osmanlı fethettiği Hıristiyan ülkelerde halkı din, dil ve milliyet değiştirmeye zorladı mı — o dönemde Hıristiyan olmanın avantajı ve dezavantajı neydi?",
  kisa:"Kural zorlama değil TASNİF'ti: din değiştirmek serbestti ama SONUÇLUYDU — vergi, statü ve kariyer ona bağlıydı.",
  goruşler:[
    { tez:"Hukukun ölçütü din'di, dil ya da soy DEĞİLDİ",
      dayanak:"Zimmet akdi gayrimüslime \"can ve malının korunduğu\", inanç ve ibadet hürriyeti ve kendi aralarındaki davalarda kendi mahkemelerine gitme hakkı verirdi; TDV bunun dayanağını \"dinde zorlama yoktur\" ilkesine bağlar. Millet teşkilatı da \"etnik (kavmî) ve lisan aidiyetine değil din ve mezhep esasına\" dayanıyordu: Rum Ortodoks milleti sonradan Yunan dışındaki etnik grupları da içine aldı, Ermeniler ise Gregoryen, Katolik ve Protestan olarak ÜÇ ayrı millete bölündü. Bir dil ya da soy siyaseti güdülseydi bölme ölçütü bu olmazdı." },
    { tez:"Ama eşitlik de yoktu — avantaj ve dezavantaj AYNI KALEMDEYDİ",
      dayanak:"Cizye yalnız gayrimüslim, hür, ergin, çalışabilir ve ödeme gücü olan erkeklerden alınırdı; kadın, çocuk, yaşlı, âmâ, kötürüm, fakir ve ibadete çekilmiş din adamları muaftı. Osmanlı üç sınıf uyguladı: âlâ 48, evsat 24, ednâ 12 dirhem (1834'te 60-30-15 esedî kuruşa çıktı). İslâm'a girenden cizye DÜŞERDİ — yani vergi, din değiştirmenin maddî karşılığını doğrudan ödüyordu. Öte yandan aynı vergi askerlik yükümlülüğünün yerine geçiyordu: 1856 Islahat Fermanı cizyeyi kaldırıp gayrimüslime askerlik getirince, yerine 1907'ye kadar süren \"bedel-i askerî\" kondu." },
    { tez:"Devşirme bu tablonun en tartışmalı köşesi — ve kaynağın kendisi de tartışıyor",
      dayanak:"Çelebi Mehmed devrinde ortaya çıkıp II. Murad'da sistemleşen devşirmede kurallar sıkıydı: tek oğlu olan alınmaz, öksüz ve hasta alınmaz, şehir çocuğu alınmazdı; Yahudiler, Türkler, Kürtler, İranlılar, Ruslar ve Çingeneler ile derbendci, madenci ve devlet inşaatında çalışanlar muaftı, Ermeniler'den çok az devşirilirdi, ölçü kırk hânede bir çocuktu. Devşirilen çocuk Müslüman edilirdi ve dönemin uleması bunu \"çocuk fıtrat üzere doğar\" hadisiyle temellendiriyordu — yani ihtidanın gönüllülüğü DÖNEMİN KENDİSİNDE de bir izah gerektirmiş. Aynı yolun ucunda Sokullu Mehmed Paşa ve Köprülüler gibi sadrazamlar var; son devşirme 1751'de yapıldı. ⇒ \"Zorlama var mıydı\" sorusunun cevabı hangi kaleme bakıldığına göre değişiyor: kanunda yok, devşirmede var, sonuçta bir yükselme merdiveni de var." }
  ],
  baglanti:["1421-06-01","1453-05-29","1839-11-03","1856-02-18"],
  kesinlik:"tartismali",
  kaynak:"TDV: ZİMMÎ · CİZYE · MİLLET · DEVŞİRME" },

{ id:"timur-sehzadeleri-baglanma", tur:"merak",
  soru:"Timur, Ankara Savaşı'ndan sonra Osmanlı şehzâdelerini kendisine bağlanmaya zorladı mı?",
  kisa:"Zorlamaya pek gerek kalmadı: tâbiiyet belgesini şehzâdeler BİRBİRLERİNE karşı istedi — Timur'un yarlığı hepsinin meşruiyet kaynağı oldu.",
  goruşler:[
    { tez:"Belge var ve adı yarlıg",
      dayanak:"Emîr Süleyman savaştan sonra Timur'un Anadolu'daki hâkimiyetini tanıdı; Timur da İzmir kuşatması sırasında (Aralık 1402 - Ocak 1403) ona Rumeli toprakları üzerindeki hükümranlığını tanıyan bir yarlıg verdi — karşılığı tâbiiyetti. Çelebi Mehmed'in maddesi de aynı şeyi kaydeder: Tokat-Amasya bölgesindeki rakip mahallî hanedanlara karşı otoritesini kurabilmek için \"Timur'un hükümdarlığını kabul etti.\" ⇒ İlişki iki şehzâdede de belgelidir ve ikisinde de saik aynı: kardeşe ve rakibe karşı üstünlük." },
    { tez:"Ama tek tip bir \"bağlanma\" yok — Mûsâ'nınki esaretti",
      dayanak:"Mûsâ Çelebi Ankara'da babasıyla birlikte esir düştü. Yıldırım Bayezid'in ölümünden sonra Timur onu serbest bıraktı, Bursa ve çevresinin emirliğini verdi, babasının naaşını Akşehir'den Bursa'ya götürmesini istedi ve ardından Germiyanoğlu Yâkub Bey'in yanına gönderdi. Aynı Timur birine belge, birine emirlik, birine de gözetim verdi. Zaten savaş öncesi 13 Mart 1402'de Bayezid'den istedikleri arasında da \"şehzadelerden birinin kendi yanına gönderilip bağımlılık alâmeti olarak vereceği külâh ve kemerin kabul edilmesi\" vardı — yani rehin şehzâde fikri savaştan önce de masadaydı." },
    { tez:"Ölçüt sorunu: bunu Ankara Savaşı maddesi HİÇ anlatmıyor",
      dayanak:"TDV'nin Ankara Savaşı maddesi sonucu iki cümleyle özetler — \"bütün Anadolu Timur'a mensub emîrler tarafından istilâ edildi\" ve \"Anadolu'da uzun mücadeleler sonunda kurulmuş olan Türk birliği bozulmuş\" — şehzâdelerin tâbiiyetinden, yarlıgdan ya da Mûsâ'nın durumundan söz etmez. Bu bilgi ancak şehzâdelerin kendi biyografilerinde bulunuyor. ⇒ Soru tek bir kaynağa sorulduğunda cevapsız kalıyor; dört biyografi yan yana konduğunda ise ortaya bir zorlamadan çok bir MEŞRUİYET PAZARI çıkıyor." }
  ],
  baglanti:["1402-07-28","1402-08-01","1402-08-20","1402-12-14","1402-12-20","1403-03-09"],
  kesinlik:"tartismali",
  kaynak:"TDV: SÜLEYMAN ÇELEBİ, Emîr · MEHMED I · MÛSÂ ÇELEBİ · ANKARA SAVAŞI" },

{ id:"timurun-misyonu-neydi", tur:"merak",
  soru:"Timur'un misyonu neydi? İzmir'i şövalyelerden aldı, Anadolu'daki Türk birliğini dağıttı, Osmanlı'yı kaosa sürükledi — ama Avrupa'ya açılma ihtiyacı duymadı ve devleti dağıtıp gitti.",
  kisa:"\"Dağıtıp gitmek\" bir ihmal değil YÖNTEMİN KENDİSİYDİ: Timur toprak değil TÂBİİYET topluyordu.",
  goruşler:[
    { tez:"Hedef ilhak değil tâbiiyetti — ve bunun belgesi savaştan önce yazılmıştı",
      dayanak:"Timur'un 13 Mart 1402'de Bayezid'e gönderdiği dört şartın dördü de bir hükümranlık devri değil bir üstlük tanıması istiyordu: Kemah'ın Mutahharten'e geri verilmesi, Anadolu beylerinden alınan toprakların iadesi, şehzadelerden birinin yanına gönderilip külâh ve kemer takdim etmesi, Kara Yusuf'un teslimi. TDV Timur'un genel yöntemini de aynı şekilde tarif eder: fethettiği yerleri doğrudan ilhak etmek yerine mahallî hanedanları yerinde bırakır, haraç ve sadakat alırdı. ⇒ Beylikleri yeniden kurup çekilmesi, planın bozulması değil planın TAMAMLANMASIYDI." },
    { tez:"Meşruiyetini Cengiz'den alıyordu, gazadan değil — ama gaza dilini de kullandı",
      dayanak:"Timur tahta bir kukla han oturtup onun adına hükmetti ve Cengiz soyundan Saray Melik ile evlenerek \"Küregen\" (hanın damadı) unvanını aldı; yani meşruiyetin kaynağı hilâfet ya da gaza değil Cengiz mirasıydı. Buna karşılık seferlerini \"kâfirlere ve putperestlere karşı cihad\" adıyla yürüttü ve TDV bunun esas itibariyle siyasî hedeflere hizmet ettiğini kaydeder. İzmir'i Saint Jean şövalyelerinden alması (14 Aralık 1402) bu dilin sahaya çıkışıdır: Bayezid'in alamadığı bir gaza hedefini alarak, yendiği rakibin unvanını da devralmış oldu." },
    { tez:"Ekseni Batı değil DOĞU'ydu — ve açık kalan soru tam burada",
      dayanak:"Timur'un son seferi Avrupa'ya değil ÇİN'e idi: 27 Kasım 1404'te Semerkant'tan çıktı, donmuş Seyhun'u geçip Otrar'a vardı, orada hastalanıp 18 Şubat 1405'te öldü. TDV bu seferin gerekçelerinin \"tam olarak açık olmadığını\" söyler; alenî gerekçe yine putperestlere vurmaktı. ⇒ \"Niçin Avrupa'ya açılmadı\" sorusunun cevabı bir tercih olabileceği gibi, öyle bir sorunun onun gündeminde hiç bulunmaması da olabilir — kaynak bu noktada kesin konuşmuyor. Ölümünün ardından oğulları ve torunları arasında çıkan taht kavgası imparatorluğu böldü; Anadolu'ya dönüş ihtimali de o kavgayla birlikte kapandı." }
  ],
  baglanti:["1402-03-13","1402-09-15","1402-12-14","1403-03-15"],
  kesinlik:"tartismali",
  kaynak:"TDV: TİMUR · ANKARA SAVAŞI" }

];
