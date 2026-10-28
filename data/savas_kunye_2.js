// ============================================================================
// SAVAŞ KÜNYESİ — 2. parti (25 muharebe) · SAVAS-2 · 13 Ekim 2026
// ============================================================================
// Şema: data/savas_kunye_1.js başlığındaki ② (aynı alanlar). js/app.js 'savas-kunye'
// ek okuma türü SAVAS_KUNYE_1 + SAVAS_KUNYE_2'yi birlikte okur; kayıt, kronoloji
// maddesinin `t` günüyle (savas_t) bağlanır.
//
// KURALLAR (bu partide uygulanan):
//  · Komutan ve kuvvet YALNIZ TDV gövdesinde okunan rakam/addır. Gövdede olmayan
//    "bilinmiyor"; adı kaynakta geçmeyen komutan "bulunamadı (…)" diye işaretlendi.
//    Bir sayının neyi tarihlediği (savaş öncesi mevcut mu, sonraki garnizon mu) notlar'da.
//  · `savas_t` = kronoloji maddesinin günü. `savas_ad` = data/savaslar.js'te AYNI günde
//    kayıt varsa onun adı; yoksa alan konmadı (savaslar.js'te o güne kayıt yok).
//  · TDV'nin kendi maddeleri arasındaki ve TDV ile atlas kronolojisi arasındaki
//    çelişkiler `uyari`/`notlar` alanında AÇIKÇA yazıldı; taraf seçilmedi.
//  · Modern dönem alanları (makineli_tufek, ucak) yalnız TDV'nin söylediği yerde kullanıldı.
//  · YENİ ŞEMA ALANLARI (js/app.js 13 Ekim 2026'da okur): `celiski` = okura GÖSTERİLEN kaynak
//    çelişkisi beyanı (uyari iç nottur, basılmaz); `savas_t_ek` = künyenin kronolojide ayrıca
//    bağlanacağı ek günler (ör. kuşatmanın başladığı gün). `tank`/`ucak`/`makineli_tufek` taraf alanı.
// Okunan TDV maddeleri (13 Ekim 2026'da çekildi; tam metin):
//  hacova-meydan-savasi · saint-gotthard-muharebesi · sarikamis-harekati · kutulamare ·
//  canakkale-muharebeleri · egri · kanije · sigetvar · kibris · tunus · bagdat · murad-iv ·
//  suleyman-i · rodos · belgrad · azak · varadin · damad-ali-pasa · navarin · sinop ·
//  trablusgarp-savasi · kopruluzade-fazil-mustafa-pasa · kopruluzade-fazil-ahmed-pasa ·
//  mustafa-ii · mehmed-iv · lala-mustafa-pasa · osman-pasa-ozdemiroglu · mehmed-iii.
// Bu partide HİÇ künyesi YAZILMAYAN (TDV gövdesi alınamadı → 'aranmadı' değil 'bulunamadı'):
//  Mezőkeresztes ayrı madde değil — TDV'de Haçova Meydan Savaşı'dır (aynı savaş, tek künye);
//  Zitvatorok bir antlaşmadır (savaş değil); Salankamen, Sisak, II. Mohaç, Çıldır, Lugoş
//  için TDV'de ayrı madde yok (salankamen-savasi, sisak-savasi, ii-mohac-savasi… slug'ları
//  ölü = arama sayfası); bu savaşlar komutan maddelerinden (köprülüzade-fazil-mustafa-pasa,
//  lala-mustafa-pasa, mustafa-ii, mehmed-iv) okundu, kuvvet rakamı gövdede yoksa yazılmadı.
// ============================================================================
window.SAVAS_KUNYE_2 = [

{ id:"kunye-belgrad-1521", savas_ad:null, savas_t:"1521-08-29", tur:"kusatma",
  baslik:"Belgrad'ın fethi (1521)",
  tarih_metin:"Padişah 'kalenin fethinin ertesi günü' şehre girdi (26 Ramazan / 30 Ağustos 1521, TDV suleyman-i) — fetih günü 29 Ağustos 1521",
  uyari:"savaslar.js'te aynı fetih t:1521-06-25 (kuşatma başı) günüyle kayıtlı; kronoloji 'Belgrad'ın fethi' t:1521-08-29 (TDV suleyman-i'nin 'ertesi gün 30 Ağustos' cümlesiyle uyumlu). TDV belgrad maddesi yalnız '(1521)' der.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Kanûnî Sultan Süleyman (ilk sefer-i hümâyunu)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"TDV kuvvet rakamı vermiyor. Belgrad, Fâtih'in başarısız kaldığı hedefti; padişah kuşatma sırasındaki çarpışmaları izledi, Yahyâpaşaoğlu Bâlî Bey'le görüşüp kararlılığını gösterdi; fetihten sonra kale Semendire sancağıyla birlikte Yahyâpaşazâde Bâlî Bey'e verildi." },
    { ad:"Macar Krallığı (Belgrad muhafızları)", devlet_id:"macaristan", komutan:"bulunamadı (TDV belgrad ve suleyman-i maddelerinde kale komutanı adı yok; kral II. Lajos 1516'da dokuz yaşında tahta geçmişti)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"TDV: Belgrad'a hâkim durumdaki Macarlar kendi meseleleriyle uğraşıyordu, II. Lajos otoritesini henüz hissettirecek durumda değildi. Ahalinin bir kısmı İstanbul'a gönderilip bugünkü Belgrad ormanları ve Belgrad Kapısı adıyla bilinen yerlere iskân edildi." }
  ],
  kaynak:"TDV: belgrad · TDV: suleyman-i", bag_ekokuma:null },

{ id:"kunye-rodos-1522", savas_ad:"Rodos kuşatması", savas_t:"1522-12-21", savas_t_ek:["1522-06-26"], tur:"kusatma",
  baslik:"Rodos'un fethi (Haziran-Aralık 1522)",
  tarih_metin:"Sefer: 21 Receb 928 / 16 Haziran 1522 (TDV rodos) ya da 18 Haziran (TDV suleyman-i) · teslim: 1 Safer 929 / 20 Aralık 1522",
  uyari:"İki TDV maddesi sefer çıkış gününde 2 gün ayrışıyor (rodos: 16 Haziran; suleyman-i: 18 Haziran); ikisi de teslimi 20 Aralık veriyor, atlas kronolojisi 21 Aralık yazıyor (1 gün fark, savaslar.js notunda zaten beyanlı). savaslar.js'te bu fethin t:1522-06-26 (adaya varış) ve t:1522-12-21 iki ayrı kaydı var.",
  celiski:"TDV'nin iki maddesi sefer çıkış gününde ayrışıyor: rodos 21 Receb 928 / 16 Haziran 1522, suleyman-i 18 Haziran 1522. Teslim günü ikisinde de 20 Aralık 1522 (atlas kronolojisi 21 Aralık yazıyor).",
  taraflar:[
    { ad:"Osmanlı kara ve deniz kuvvetleri", devlet_id:"osmanli", komutan:"Kanûnî Sultan Süleyman (28 Temmuz'da adaya geçti) · Vezîriâzam Pîrî Mehmed Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"TDV suleyman-i: donanma 9 Receb 928'de (4 Haziran 1522) denize açıldı, padişah kara yoluyla Marmaris'e ulaştı (26 Temmuz). Kuvvet rakamı yok. 1524'te adaya 1343 muhafız (topçu, azeb) yerleştirildi (TDV rodos) — bu, savaş mevcudu değil, fetih sonrası garnizondur." },
    { ad:"Rodos Şövalyeleri (Saint Jean tarikatı)", devlet_id:"rodos-sovalyeleri", komutan:"Büyük üstat Philippe Villiers de L'Isle-Adam", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Zorlu ve kanlı çarpışmalardan sonra anlaşma şartlarıyla gemilere binip adadan ayrıldılar; üstat 1 Ocak 1523'te adayı terk etti (TDV rodos)." }
  ],
  kaynak:"TDV: rodos · TDV: suleyman-i", bag_ekokuma:null },

{ id:"kunye-sigetvar-1566", savas_ad:null, savas_t:"1566-09-07", tur:"kusatma",
  baslik:"Sigetvar (Zigetvar) kuşatması (5 Ağustos - 7 Eylül 1566)",
  tarih_metin:"Sigetvar önlerine varış 18 Muharrem 974 / 5 Ağustos 1566 · kronoloji günü 7 Eylül 1566 (Kanûnî'nin vefatı)",
  uyari:"Kronolojideki bağlı madde 'Zigetvar — Kanunî'nin vefatı' (t:1566-09-07); kuşatmanın kendisi için ayrı kronoloji maddesi yok. savaslar.js'te Sigetvar muharebe/kuşatma kaydı yok (yalnız SEFERLER'de 'Zigetvar seferi'). TDV sigetvar 'kalenin düşüş günü'nü vermez; yalnız 5 Eylül'deki lağım patlamasını ve Kanûnî'nin 'hücumdan biraz önce' vefatını yazar.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Kanûnî Sultan Süleyman (kuşatma sırasında vefat etti)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"TDV sigetvar: eski şehir 13 Ağustos'ta, yeni şehir 19 Ağustos'ta alındı; üç umumi hücumdan sonra 5 Eylül'de açılan lağıma yerleştirilen humbaranın ateşlenmesiyle kale altındaki barut mahzeni patladı. Önceki girişimler: Toygun Paşa 1555 ve bir yıl sonra başarısız; Hadım Ali Paşa'nın Sziget kuşatması 1556'da başarısız (TDV suleyman-i)." },
    { ad:"Habsburg/Macar kale muhafızları", devlet_id:"habsburg", komutan:"Kont Miklós Zrínyi (huruç hareketinde yaralı esir düştü, başı kesilip Gyór yakınındaki Kral II. Maksimilyan'a gönderildi)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"TDV: bir ay süren kuşatmada her iki tarafta 'yüksek miktarda can kaybı' (sayı yok)" }
  ],
  kaynak:"TDV: sigetvar · TDV: suleyman-i", bag_ekokuma:null },

{ id:"kunye-lefkosa-1570", savas_ad:null, savas_t:"1570-09-09", tur:"kusatma",
  baslik:"Lefkoşa'nın (Lefkoşe) fethi (25 Temmuz - 9 Eylül 1570)",
  tarih_metin:"Kuşatma 21 Safer 978 / 25 Temmuz 1570'te başladı, kırk beş gün sürdü; teslim 8 Rebîülâhir 978 / 9 Eylül 1570",
  uyari:"savaslar.js'te Lefkoşa kaydı yok. TDV kibris, Osmanlı ordusunun adaya çıkışında Limasol'ün alınışını 28 Muharrem 978 / 2 Temmuz 1570 verir; atlas kronolojisi 'Kıbrıs çıkarması: Limasol ve Baf' için 23 Temmuz 1570 yazıyor (21 gün fark; bu künyenin konusu değil, beyan).",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Serdar Lala Mustafa Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Harp divanı adanın fethine Lefkoşe'den başlanmasına karar verdi (üs: Larnaka/Tuzla İskelesi). Yerli halk Venedik idaresinden memnun değildi ve Osmanlı kuvvetlerine yardım etti (TDV kibris)." },
    { ad:"Venedik (Lefkoşa savunması)", devlet_id:"venedik", komutan:"Lefkoşa Valisi Dandolo (teslimden sonra Lala Mustafa Paşa'nın emriyle idam edildi)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Yerli halkın desteğini alamadığı için kale savunmasıyla yetindi." }
  ],
  kaynak:"TDV: kibris (Osmanlı Dönemi bölümü, Baskı 2022)", bag_ekokuma:null },

{ id:"kunye-magosa-1571", savas_ad:null, savas_t:"1571-08-01", savas_t_ek:["1571-08"], tur:"kusatma",
  baslik:"Magosa'nın (Famagusta) fethi (Nisan - 1 Ağustos 1571)",
  tarih_metin:"Kuşatma kışı atlatıp Nisan 1571 başında şiddetli top atışlarıyla sürdü; son saldırı 8 Rebîülevvel 979 / 31 Temmuz 1571; teslim ertesi gün, 9 Rebîülevvel 979 / 1 Ağustos 1571",
  uyari:"savaslar.js'te Magosa kaydı yok. Kronoloji 'Magosa'nın düşüşü' t:1571-08-01; ayrıca olaylar.js'te ay hassasiyetli t:'1571-08' kaydı var.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Serdar Lala Mustafa Paşa (misilleme olarak Bragadino ve on bir beyin idamını emretti)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Fetihten sonra adanın beş kalesine (Lefkoşe, Limasol, Magosa, Baf, Girne) 2779 topçu/gönüllü/müstahfız/azeb ile 1000 yeniçeri, toplam 3779 asker yerleştirildi (TDV kibris) — bu savaş mevcudu değil, fetih sonrası garnizondur." },
    { ad:"Venedik (Magosa savunması)", devlet_id:"venedik", komutan:"Kale komutanı Marc Antonio Bragadino (idam edildi)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"son saldırıda 'çok fazla kayıp'; kalede bulunan elli Türk esirin anlaşmaya aykırı biçimde katledildiği öğrenildi (TDV kibris)", notlar:"Kale denizden zaman zaman gelen destek sayesinde ilk birkaç saldırıya karşı koydu; teslim şartı: askerlerin yakınlarıyla adayı terk etmesi." }
  ],
  kaynak:"TDV: kibris (Osmanlı Dönemi bölümü, Baskı 2022)", bag_ekokuma:null },

{ id:"kunye-tunus-1574", savas_ad:null, savas_t:"1574-08-25", tur:"kusatma",
  baslik:"Tunus ve Halkulvâd'ın İspanyollardan geri alınması (1574)",
  tarih_metin:"Tunus şehri 12 Eylül 1574 (altı günlük muhasaradan sonra) · Halkulvâdî (La Goulette) kalesi 6 Cemâziyelevvel 982 / 24 Ağustos 1574 (otuz üç gün direndikten sonra)",
  uyari:"ÇELİŞKİ (TDV tunus kendi içinde): Tunus şehrinin geri alınışı 12 Eylül, Halkulvâd kalesinin düşüşü 24 Ağustos veriliyor; kalenin (33 gün direndiği anlatılan) daha ÖNCE düşmesi metnin sıralamasıyla uyuşmuyor. Taraf seçilmedi, iki gün de yazıldı. Atlas kronolojisi 'Tunus'un kesin fethi' için t:1574-08-25 yazıyor (Halkulvâd gününden 1 gün sonra). savaslar.js'te Tunus kaydı yok.",
  celiski:"TDV tunus maddesi kendi içinde: Tunus şehrinin geri alınışı 12 Eylül 1574, Halkulvâdî kalesinin düşüşü 24 Ağustos 1574 veriliyor; kalenin 33 gün direndiği anlatılırken bu sıralama uyuşmuyor. İki gün de yazıldı, biri seçilmedi.",
  taraflar:[
    { ad:"Osmanlı donanması ve kara kuvvetleri", devlet_id:"osmanli", komutan:"Vezir Koca Sinan Paşa · Kaptanıderyâ Kılıç Ali Paşa · Tunus Beylerbeyi Haydar Paşa (Kayrevan'dan, yerlilerden toplanan askerle) · Cezayir Beylerbeyi Ramazan Paşa · Trablusgarp Beylerbeyi Mustafa Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Mısır'dan gönüllü askerler de katıldı. Sinan Paşa şehirde 3000 yeniçeri bıraktı. TDV gemi/asker mevcudu vermiyor." },
    { ad:"İspanya (Tunus işgali) ve Hafsî Sultanı VI. Mevlây Muhammed", devlet_id:"ispanya", komutan:"İspanyol kumandan Serbellino (esir alınıp İstanbul'a gönderildi) · Hafsî sultanı VI. Mevlây Muhammed (esir)", mevcut_toplam:"8000 (Ekim 1573'te Tunus'u alıp bıraktıkları asker sayısı)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"8000 rakamı 10 Ekim 1573'teki işgal garnizonunu tarihler; 1574 muhasarasındaki mevcut bu değildir (TDV tunus). Halkulvâdî kalesi bir daha İspanyollar'ın eline geçmesin diye tamamen yıktırıldı." }
  ],
  kaynak:"TDV: tunus", bag_ekokuma:null },

{ id:"kunye-cildir-1578", savas_ad:null, savas_t:"1578-08-09", tur:"meydan",
  baslik:"Çıldır Muharebesi (9 Ağustos 1578)",
  tarih_metin:"5 Cemâziyelâhir 986 / 9 Ağustos 1578",
  uyari:"savaslar.js'te Çıldır kaydı yok (kronolojide 'Çıldır Zaferi' maddeleri var). Safevî komutanı TDV lala-mustafa-pasa ve osman-pasa-ozdemiroglu maddelerinde adlandırılmıyor.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Serdar Lala Mustafa Paşa · Özdemiroğlu Osman Paşa (savaşta önemli rol oynadı)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Lala Mustafa Paşa 5 Nisan 1578'de Üsküdar'a geçti, Erzurum'dan doğuya ilerledi. Osman Paşa orduya 1000 kişilik maiyetiyle katılmıştı (bu, ordunun mevcudu değildir). Çıldır'ı Koyungeçidi (Alazan/Alazani yakını, Eylül 1578) zaferi izledi; ikisi Gürcistan-Dağıstan ve Şirvan yolunu açtı." },
    { ad:"Safevî öncü kuvvetleri", devlet_id:"safevi", komutan:"bulunamadı (TDV lala-mustafa-pasa ve osman-pasa-ozdemiroglu maddelerinde Safevî komutan adı yok)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"TDV: Çıldır'da 'Safevî öncü kuvvetleri' yenildi; ardından Tiflis'e girildi." }
  ],
  kaynak:"TDV: lala-mustafa-pasa · TDV: osman-pasa-ozdemiroglu", bag_ekokuma:null },

{ id:"kunye-egri-1596", savas_ad:null, savas_t:"1596-10-12", tur:"kusatma",
  baslik:"Eğri Kalesi'nin fethi (3 hafta, 12 Ekim 1596)",
  tarih_metin:"Üç haftalık kuşatmanın ardından muhafızlar 12 Ekim 1596'da (19 Safer 1005) teslim oldu",
  uyari:"savaslar.js'te Eğri 1596 kaydı yok. 'Mezőkeresztes' TDV'de ayrı madde değildir: aynı seferin sahra muharebesi Haçova'dır (bkz. kunye-hacova-1596, 26 Ekim). TDV egri ayrıca 1552 kuşatmasını (Ahmed Paşa ve Sokullu Mehmed Paşa; kalede ~1800 muhafız; yaklaşık kırk gün, başarısız) kaydeder — bu künye 1596'dır.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Sultan III. Mehmed (kuşatmaya şahit oldu) · Vezîriâzam Damad İbrâhim Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:170, tufek:"bilinmiyor", gemi:"yok", notlar:"170 top kuşatmada kullanılan top sayısıdır (TDV egri). Türk lağımcıları bir burcu havaya uçurdu; sayı ve silâh üstünlüğü kuşatmayı üç haftada bitirdi." },
    { ad:"Habsburg/Macar kale muhafızları", devlet_id:"habsburg", komutan:"Pál Nyáry (kale kumandanı) · yardımcısı Claudio Cogonara (İtalyan askerî mühendis)", mevcut_toplam:"3400 civarı (muhafız)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:7, tufek:"bilinmiyor", gemi:"yok", notlar:"Teslimden sonra Macarlar serbest bırakıldı, Vallonlar esir alındı, Alman maaşlı askerleri daha önce Hatvan'da yaptıkları vahşetin karşılığını gördü (TDV egri). Nyáry hakkında Viyana'da açılan dava sonuçsuz kaldı." }
  ],
  kaynak:"TDV: egri (DİA 10, 1994, s. 489-491) · TDV: mehmed-iii", bag_ekokuma:null },

{ id:"kunye-hacova-1596", savas_ad:null, savas_t:"1596-10-26", tur:"meydan",
  baslik:"Haçova (Mezőkeresztes) Meydan Savaşı (25-26 Ekim 1596)",
  tarih_metin:"25 Ekim 1596 ikindi vakti küçük çarpışmalar, asıl savaş 26 Ekim 1596",
  uyari:"savaslar.js'te Haçova kaydı yok (kronoloji 'Haçova Meydan Muharebesi' t:1596-10-26). Mezőkeresztes = Haçova (aynı savaş). TDV hacova-meydan-savasi iki tarafın 25 Ekim'de karşı karşıya geldiğini, asıl savaşın 26 Ekim'de olduğunu yazar; atlas günü 26 Ekim.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Sultan III. Mehmed (otağı savaşı yakından izleyecek yerde) · Vezîriâzam Damad İbrâhim Paşa · Pîşdar Cigalazâde Sinan Paşa ve Kırım kuvvetleri · Sokulluzâde Hasan Paşa (Rumeli sağ kolu) · Hadım Câfer Paşa (22 Ekim'deki öncü kuvvet)", mevcut_toplam:"Avusturya ordusuyla 'hemen hemen aynı sayıda' (TDV; kendi rakamı yok)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Toplar zincirlerle birbirine bağlanmış kuvvetli bir müdafaa hattı kurdu; merkezde padişah ve vezirler, sağ-sol kolda Anadolu ve Rumeli askeri. Rumeli sağ kolu dağıldı, Habsburg birlikleri merkezdeki ağırlıkları yağmalayınca Hoca Sâdeddin Efendi padişahı savaş meydanında kalmaya ikna etti; karargâhtaki hizmetli sınıf yağmacıları geri püskürttü. Zaferin ertesi günü Sinan Paşa vezîriâzam oldu; yoklamada kaçanların timarları alındı, bunlar Celâlî gruplarına katıldı." },
    { ad:"Habsburg imparatorluk ordusu ve müttefikleri", devlet_id:"habsburg", komutan:"Arşidük Maximilian · Erdel voyvodası Zsigmond Báthory", mevcut_toplam:"50-100.000 (TDV'nin verdiği aralık)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"TDV: büyük bir kısmı bataklığa sürülerek imha edildi (sayı yok)", notlar:"Alman, İspanyol, papalık, Floransa, Macar, Çek ve Leh askerlerinden oluşuyordu. Báthory'nin gecikmesi Eğri'yi kurtarma niyetlerini önlemişti." }
  ],
  kaynak:"TDV: hacova-meydan-savasi (DİA, 1996) · TDV: mehmed-iii", bag_ekokuma:null },

{ id:"kunye-kanije-1600", savas_ad:null, savas_t:"1600-10-20", tur:"kusatma",
  baslik:"Kanije'nin fethi (kırk günü aşan kuşatma, 20 Ekim 1600)",
  tarih_metin:"Anlaşma yoluyla teslim: 11 Rebîülâhir 1009 / 20 Ekim 1600",
  uyari:"savaslar.js'te 'Kanije kuşatması' t:1600-10-22 taşıyor; TDV kanije (20 Ekim 1600) ve kronoloji 'Kanije'nin fethi' (t:1600-10-20) ikisi de 20 Ekim diyor — 2 günlük fark savaslar.js tarafında (bu künyenin işi değil, beyan).",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Sadrazam Damad İbrâhim Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Kale, ordunun karşısında kırk günden fazla dayandı. Fetihten sonra ilk atanan idareci Hasan Paşa'dır; TDV bunun Tiryâkî Hasan Paşa ile aynı kişi olup olmadığını rivayet çelişkileri yüzünden saptayamaz." },
    { ad:"Habsburg kale muhafızları", devlet_id:"habsburg", komutan:"Avusturyalı kumandan Georg Paradeiser (teslimden sonra Avusturyalılarca ölüm cezasına çarptırıldı)", mevcut_toplam:"10.000 (Topçular Kâtibi Abdülkadir Efendi'ye göre kalenin içindeki asker; TDV bunu 'belirtilen' diye aktarır)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Rakam tek bir Osmanlı tarihçisine dayanır, TDV doğrulamıyor." }
  ],
  kaynak:"TDV: kanije", bag_ekokuma:null },

{ id:"kunye-kanije-1601", savas_ad:"Kanije savunması", savas_t:"1601-09-10", tur:"kusatma",
  baslik:"Tiryâkî Hasan Paşa'nın Kanije savunması (10 Eylül - 17 Kasım 1601)",
  tarih_metin:"1601'de 10 Eylül'den 17 Kasım'a kadar süren kuşatma",
  taraflar:[
    { ad:"Osmanlı kale muhafızları", devlet_id:"osmanli", komutan:"Tiryâkî Hasan Paşa", mevcut_toplam:"bilinmiyor ('yanındaki az sayıda kuvvet' — TDV)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Savunma Osmanlı tarihlerinde geniş yer tutmuş, gazavatnâmelere ve romanlara (Namık Kemal'in Kanije'si) konu olmuştur (TDV kanije)." },
    { ad:"Prens Ferdinand ve müttefikleri", devlet_id:"habsburg", komutan:"Prens Ferdinand", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"'büyük kayıplar vererek geri çekilmek zorunda kaldılar' (sayı yok)" }
  ],
  kaynak:"TDV: kanije", bag_ekokuma:null },

{ id:"kunye-bagdat-1638", savas_ad:null, savas_t:"1638-12-24", tur:"kusatma",
  baslik:"IV. Murad'ın Bağdat'ı geri alması (1638)",
  tarih_metin:"Teslim: 17 Şâban 1048 / 24 Aralık 1638, Cuma (TDV murad-iv)",
  uyari:"ÇELİŞKİ (iki TDV maddesi): TDV bagdat 'kuşatma 15 Ekim 1638'de başlayıp kırk gün sürdü' der; TDV murad-iv ise ordunun Musul'a 6 Kasım'da, Bağdat'ın Kâzımiye'sine 14 Kasım'da vardığını ve 24 Aralık'ta teslimi anlatır (kuşatma yaklaşık 40 gün, ama 14 Kasım-24 Aralık). Taraf seçilmedi; teslim günü iki yerde de uyuşmaz değil (24 Aralık). savaslar.js'te Bağdat muharebe kaydı yok (yalnız 'Bağdat 1638' savaş/antlaşma serisi).",
  celiski:"TDV'nin iki maddesi kuşatmanın başlangıcında ayrışıyor: bagdat '15 Ekim 1638'de başlayıp kırk gün süren kuşatma' der; murad-iv ordunun Musul'a 6 Kasım, Bağdat önüne 14 Kasım'da vardığını anlatır. Teslim günü (24 Aralık 1638) ikisinde de aynı.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Sultan IV. Murad (kuşatmayı bizzat izledi) · Sadrazam Tayyar Mehmed Paşa (hücumda alnına kurşun isabetiyle şehid) · yerine Kaptanıderyâ Kemankeş Kara Mustafa Paşa", mevcut_toplam:"bilinmiyor ('muazzam ordu', sefer boyunca artan)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Muhasaranın on dördüncü günü umumi hücum kararlaştırıldı ama müdafilerin içeride metris hazırladığı şayiası engel oldu; kuşatma metris sürülerek şiddetlendi. Önceki başarısız kuşatmalar: Hâfız Ahmed Paşa 1626, Hüsrev Paşa 6 Ekim 1630 (TDV murad-iv)." },
    { ad:"Safevî Bağdat garnizonu", devlet_id:"safevi", komutan:"Kale kumandanı Bektaş Han", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"TDV bagdat: şehirde çıkan veba salgını kitlesel ölümlere yol açmıştı; Bağdat valisi Safî Kulı Han ölünce yerine zevk ve safaya düşkün Bektaş Han gelmişti." }
  ],
  kaynak:"TDV: murad-iv · TDV: bagdat", bag_ekokuma:null },

{ id:"kunye-sengotar-1664", savas_ad:"Sen Gotar (St. Gotthard)", savas_t:"1664-08-01", tur:"meydan",
  baslik:"Saint Gotthard (Sen Gotar) Muharebesi (1 Ağustos 1664)",
  tarih_metin:"8 Muharrem 1075 / 1 Ağustos 1664, Cuma; Vasvár Antlaşması dokuz gün sonra",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Vezîriâzam Köprülüzâde Fâzıl Ahmed Paşa · Bosna Valisi İsmâil Paşa · Kaplan Mustafa Paşa · Halep Valisi Gürcü Mehmed Paşa", mevcut_toplam:"yaklaşık 70.000 (26 Eylül 1663'te Uyvar'ın alındığı tarihteki mevcut; savaşa kadar sürekli eridi); Rába'yı geçen kuvvet yaklaşık 10.000", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"70.000 rakamı hafif destek kıtaları ve milislerle birlikte Uyvar tarihli mevcuttur, savaş günü mevcudu değildir. Esas muharip kıtalar yeniçeri ve kapıkulu süvarisi, timarlı sipahiler ve ümerâ kapılarıydı; paralı Arnavut tüfekçiler de vardı. Fâzıl Ahmed Paşa orduyu 5 Ağustos'a kadar yerinde tutup dağılmasını önledi." },
    { ad:"Habsburg-müttefik ordusu", devlet_id:"habsburg", komutan:"Başkumandan Raimondo Graf von Montecúccoli · Leopold Wilhelm von Baden · Georg Friedrich von Waldeck · Fransız birliklerinin başında Jean Comte de Coligny-Saligny", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"TDV köprülüzade-fazil-ahmed-pasa: Uyvar'ın fethi Avrupa'da büyük heyecan yaratmış, Fransa Kralı XIV. Louis 5000 kişilik gönüllü asker göndermiştir — bu Fransız katkısı Sen Gotar mevcudunun tamamı değildir. Müttefikler 'kontramarş' disipliniyle karşı taarruza geçti; köprü çökünce çok sayıda Osmanlı askeri suda boğuldu." }
  ],
  kaynak:"TDV: saint-gotthard-muharebesi (2019) · TDV: kopruluzade-fazil-ahmed-pasa", bag_ekokuma:null },

{ id:"kunye-ii-mohac-1687", savas_ad:"İkinci Mohaç (Harşan) bozgunu", savas_t:"1687-08-12", tur:"meydan",
  baslik:"İkinci Mohaç (Harşan) yenilgisi (Ağustos 1687)",
  tarih_metin:"Şevval 1098 / Ağustos 1687 (TDV mehmed-iv gün vermiyor); atlas günü 12 Ağustos 1687",
  uyari:"TDV'de ayrı bir Harşan/İkinci Mohaç maddesi yok (harsan, ii-mohac-savasi slug'ları ölü); TDV mohac maddesi Harşan'ı yalnız 1546 tahrir nahiyesi olarak anar. Atlas kronolojisinin 'Lorraine Dükü Karl' adı ve 'mohac-muharebesi' kaynağı TDV mohac-muharebesi gövdesinde (1526 maddesi) geçmiyor — Habsburg komutanı bu künyede 'bulunamadı'. 12 Ağustos günü TDV'de doğrulanamadı.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Serdârıekrem Süleyman Paşa (TDV mehmed-iv)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Yenilginin ardından ulûfeleri ödenmediği bahanesiyle asker Serdâr Süleyman Paşa'ya baş kaldırdı ve Köprülü Mehmed Paşa'nın damadı Abaza Siyavuş Paşa'yı sadrazam yaparak IV. Mehmed'i tahttan indirmek için İstanbul'a yürüdü; bu, Avusturyalıların Osmanlı topraklarında rahatça ilerlemesine yol açtı (TDV mehmed-iv)." },
    { ad:"Habsburg ordusu (Kutsal İttifak)", devlet_id:"habsburg", komutan:"bulunamadı (TDV mehmed-iv ve mohac maddelerinde adı geçmiyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: mehmed-iv · TDV: mohac", bag_ekokuma:null },

{ id:"kunye-salankamen-1691", savas_ad:"Salankamen bozgunu", savas_t:"1691-08-19", tur:"meydan",
  baslik:"Salankamen Muharebesi (19 Ağustos 1691)",
  tarih_metin:"24 Zilkade 1102 / 19 Ağustos 1691, ikindi vakti başladı",
  uyari:"TDV'de ayrı Salankamen maddesi yok (salankamen-savasi ölü); olay köprülüzade-fazil-mustafa-pasa maddesinden okundu. Savaşın sonucunda sadrazamın naaşı bulunamadı.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Vezîriâzam Köprülüzâde Fâzıl Mustafa Paşa (merkezde öne çıkıp kurşunla şehid düştü)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Kırım kuvvetleri ordudan yoktu. Sadrazam, Belgrad'daki istişareye rağmen Kırım ve eyalet kuvvetlerini beklemeden orduyu Sava köprüsünden Zemun yakasına geçirdi. Ağırlıklar Avusturyalıların eline geçti." },
    { ad:"Avusturya ordusu", devlet_id:"habsburg", komutan:"Baden Prensi Louis (Ludwig)", mevcut_toplam:"100.000 (TDV: 'kumandasındaki 100.000 kişilik Avusturya kuvveti Varadin civarında bulunuyordu')", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Askerî erzak sıkıntısı içinde olmasına rağmen Osmanlı ordusunda Kırım kuvvetlerinin bulunmadığını öğrenince hemen saldırıya geçti. 100.000 rakamı savaş öncesi konuşlanma tarifidir, savaş günü mevcudu olarak ayrıca doğrulanmamıştır." }
  ],
  kaynak:"TDV: kopruluzade-fazil-mustafa-pasa", bag_ekokuma:null },

{ id:"kunye-azak-1696", savas_ad:null, savas_t:"1696-07-19", tur:"kusatma",
  baslik:"Azak Kalesi'nin Rusya'ya geçişi (1696)",
  tarih_metin:"Azak, kara ve deniz muhasarasından sonra 6 Ağustos 1696'da teslim alındı (TDV azak)",
  uyari:"ÇELİŞKİ: TDV azak teslimi 6 Ağustos 1696 yazıyor; atlas kronolojisi 'Azak Kalesi'nin kaybı' t:1696-07-19 (başka bir kronoloji maddesi 1696-07-18). Fark 18 gün; taraf seçilmedi (Jülyen/Gregoryen farkı olabilir, kaynaktan doğrulanmadı). savaslar.js'te 1696 Azak kaydı yok.",
  celiski:"TDV azak teslim gününü 6 Ağustos 1696 yazıyor; atlas kronolojisi 'Azak Kalesi'nin kaybı' için 19 Temmuz 1696 (18 gün fark, takvim farkı olabilir — kaynaktan doğrulanmadı). Seçilmedi; bu künye atlasın 19 Temmuz maddesine bağlı.",
  taraflar:[
    { ad:"Osmanlı Azak garnizonu", devlet_id:"osmanli", komutan:"bulunamadı (TDV azak maddesinde kale muhafızı adı yok)", mevcut_toplam:7000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"7000: 1696 muhasarası sırasında kaledeki asker (TDV azak). XVII. yüzyıl için Evliya Çelebi 13.000 asker verir; bu 1696 mevcudu değil, genel tarif." },
    { ad:"Rus ordusu ve Don donanması", devlet_id:"rusya", komutan:"Çar I. Petro", mevcut_toplam:31000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:170, tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"I. Petro 1695'te doksan beş gün süren ilk kuşatmada başarısız kalınca Don nehrinde bir donanma kurdu; 1696'da kaleyi karadan ve denizden 31.000 asker ve 170 topla muhasara etti (TDV azak). 1700 İstanbul Antlaşması'yla kale Rusya'ya bırakıldı." }
  ],
  kaynak:"TDV: azak", bag_ekokuma:null },

{ id:"kunye-ulas-1696", savas_ad:"Ulaş (Olaşin) zaferi", savas_t:"1696-08-27", tur:"meydan",
  baslik:"Ulaş (Olaş) Muharebesi (27 Ağustos 1696)",
  tarih_metin:"28 Muharrem 1108 / 27 Ağustos 1696, Bega suyu kenarı",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Sultan II. Mustafa (savaşta hırka-i şerif arabasının dibine top mermisi düştü, siper kazılıp emniyete alındı)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Saksonya Kralı Friedrich August ile General Heisler'in Tımışvar'ı kuşattığı öğrenilince sefer o kaleye yöneldi; Avusturyalılar kuşatmayı kaldırdılarsa da Bega suyu kenarındaki Ulaş'ta yenilmekten kurtulamadı. TDV savaşı 'Avusturyalılar yenilmekten kurtulamadı' diye özetler; Osmanlı kaybı yazılmaz." },
    { ad:"Avusturya ve Saksonya kuvvetleri", devlet_id:"habsburg", komutan:"Saksonya Kralı Friedrich August · General Heisler (öldü) · Caprara (öldü)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Heisler ve Caprara gibi kumandanlar hayatını kaybetti; Friedrich August ile Heisler komutasındaki kuvvetler Tımışvar'ı kuşatıyordu (TDV mustafa-ii)." }
  ],
  kaynak:"TDV: mustafa-ii", bag_ekokuma:null },

{ id:"kunye-petrovaradin-1716", savas_ad:null, savas_t:"1716-08-05", tur:"meydan",
  baslik:"Varadin (Petrovaradin) Muharebesi (5 Ağustos 1716)",
  tarih_metin:"1128 / 1716; Belgrad'a varış 22 Temmuz 1716 (TDV varadin); atlas günü 5 Ağustos 1716, beş saat süren savaş",
  uyari:"TDV varadin maddesi savaşın gününü vermiyor ('1128'de (1716)' ve 'beş saat sürdü'); 5 Ağustos atlas kronolojisinden gelir, TDV'de doğrulanamadı. savaslar.js'te bu savaş yok.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Sadrazam Damad Ali Paşa (şehid düştü) · Rumeli Beylerbeyi Sarı Ahmed Paşa (Varadin yönünü telkin etti) · Yeniçeri Ağası Hüseyin Ağa (Tımışvar'a yönelmeyi önermişti)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"'büyük kayıplar' (sayı yok); sadrazam şehid; Osmanlı kroniklerinde yenilgi 'Varadin senesi' diye anılır", notlar:"Belgrad savaş meclisinde güzergâh tartışması: Tuna'yı geçip Tımışvar mı, Varadin mi; Varadin'e karar verildi." },
    { ad:"Habsburg ordusu", devlet_id:"habsburg", komutan:"Prens Eugène", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: varadin · TDV: damad-ali-pasa", bag_ekokuma:null },

{ id:"kunye-navarin-1827", savas_ad:"Navarin (deniz)", savas_t:"1827-10-20", tur:"deniz",
  baslik:"Navarin baskını / Navarin Deniz Savaşı (20 Ekim 1827)",
  tarih_metin:"29 Rebîülevvel 1243 / 20 Ekim 1827",
  uyari:"TDV navarin, olayı 'savaş hali olmamasına rağmen âni baskın' diye niteler ('Navarin faciası'); atlas kayıtları savaşı 'savaş' diye taşıyor. 13 Ekim 2026: savaslar.js'teki mükerrer 'Navarin baskını' kaydı silindi; künye kalan 'Navarin (deniz)' kaydına bağlı.",
  taraflar:[
    { ad:"Osmanlı-Mısır donanması", devlet_id:"osmanli", komutan:"bulunamadı (TDV navarin maddesinde donanma amirali adı yok; Mora'daki Mısır kuvvetlerini İbrâhim Paşa yönetiyordu, Navarin'i 1825'te o almıştı)", mevcut_toplam:"bilinmiyor", piyade:"yok (deniz muharebesi)", suvari:"yok (deniz muharebesi)", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"52 gemi ve 6000 denizci. Yanarak/batarak kaybedilen gemilerden 37'si merkezî Osmanlı donanmasına (3 kalyon, 13 firkateyn, 17 korvet, 4 brik), 15'i Mısır donanmasına (3 firkateyn, 3 korvet, 4 brik, 2 golet, 3 ateş gemisi) aitti", notlar:"Limanda demirliydi; baskın savaş ilânı olmadan yapıldı. Osmanlılar tazminat istedi, sonuç alınamadı." },
    { ad:"İngiliz-Fransız-Rus müttefik donanması", devlet_id:"ingiltere", komutan:"İngiliz Amirali Codrington (olaydan sorumlu tutulup görevinden alındı); Fransız ve Rus amiralleri TDV navarin'de adlandırılmıyor", mevcut_toplam:"bilinmiyor", piyade:"yok (deniz muharebesi)", suvari:"yok (deniz muharebesi)", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Navarin sonradan, 29 Ağustos 1828'de gelen bir Fransız ordusuna teslim edildi (TDV navarin)." }
  ],
  kaynak:"TDV: navarin (DİA 32, 2006, s. 441-443)", bag_ekokuma:null },

{ id:"kunye-sinop-1853", savas_ad:"Sinop baskını", savas_t:"1853-11-30", tur:"deniz",
  baslik:"Sinop Baskını (30 Kasım 1853)",
  tarih_metin:"30 Kasım 1853 (atlas kronolojisi) — TDV sinop maddesi 'Sinop Limanı'ndaki Osmanlı donanmasının Rus baskınına uğraması'nı '1854 yılı başlarında' diye tarihler",
  uyari:"ÇELİŞKİ (TDV ile atlas): TDV sinop '1854 yılı başları' diyor; atlas ve Kırım Savaşı literatürü 30 Kasım 1853. TDV'de olayın tarihini veren ayrı bir madde bulunamadı (sinop-baskini slug'ı ölü); taraf seçilmedi, atlas günü korundu (kronoloji maddesi bu çelişkiyi ayrıca beyan ediyor).",
  celiski:"TDV sinop maddesi baskını '1854 yılı başlarında' diye tarihliyor; atlas 30 Kasım 1853 yazıyor (Kırım Savaşı'nın bilinen tarihi). TDV'de olayı gün gün anlatan ayrı bir madde bulunamadı; atlas günü korundu, çelişki açık.",
  taraflar:[
    { ad:"Osmanlı donanması (Sinop Limanı)", devlet_id:"osmanli", komutan:"bulunamadı (TDV sinop maddesinde komutan adı yok)", mevcut_toplam:"bilinmiyor", piyade:"yok (deniz muharebesi)", suvari:"yok (deniz muharebesi)", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"2000'in üzerinde asker şehid, on iki Türk gemisi battı; şehirde yedi mescid, iki mektep, 247 ev ve 170 dükkân yandı, beş sivil müslüman şehid oldu, hıristiyanlardan on altı kişi öldü" },
    { ad:"Rus Karadeniz filosu", devlet_id:"rusya", komutan:"bulunamadı (TDV sinop maddesinde komutan adı yok)", mevcut_toplam:"bilinmiyor", piyade:"yok (deniz muharebesi)", suvari:"yok (deniz muharebesi)", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"TDV bunu 'Osmanlı-Rus donanma savaşı' ve 'Rus baskını' diye anar; Sinop'un Kırım Savaşı'ndan sonra ticaretteki yerini İnebolu ve Samsun'a kaptırdığını yazar." }
  ],
  kaynak:"TDV: sinop (DİA 37, 2009, s. 252-256)", bag_ekokuma:null },

{ id:"kunye-trablusgarp-1911", savas_ad:"Trablusgarp Savaşı", savas_t:"1911-09-29", tur:"meydan",
  baslik:"Trablusgarp Savaşı (29 Eylül 1911 - 1912)",
  tarih_metin:"İtalya'nın 29 Eylül 1911'de ilân ettiği savaş; Trablusgarp şehri 9 Ekim, Bingazi 21 Ekim 1911'de işgal edildi",
  uyari:"TDV KENDİYLE ÇELİŞİYOR (savaslar.js 'trablusgarp-savasi' notunda zaten beyanlı): savaş ilânı trablusgarp-savasi maddesinde 29 Eylül, trablusgarp (yer) maddesinde 1 Eylül 1911. Bu künye ilk tarihi esas aldı. Rakamlar savaşın başlangıcına değil, farklı anlarına ait (aşağıda).",
  celiski:"TDV kendi içinde ayrışıyor: trablusgarp-savasi maddesi savaş ilânını 29 Eylül, trablusgarp (yer) maddesi 1 Eylül 1911 veriyor. Bu künye 29 Eylül'ü esas aldı.",
  taraflar:[
    { ad:"Osmanlı kuvvetleri ve yerli direniş (Senûsîler)", devlet_id:"osmanli", komutan:"Harbiye Nâzırı Mahmud Şevket Paşa (merkez) · Trablusgarp valileri Neşet Bey ve Ali Fethi Bey · Enver Bey (Bingazi Genel Karargâhı, 1 Aralık 1911) · Mustafa Kemal (doğu cephesi, Tobruk/Derne; 'mart-ekim arasında süren çatışmaları yönetti') · Rodos komutanı Abdullah Bey", mevcut_toplam:"bilinmiyor (az sayıdaki Osmanlı kuvveti)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", makineli_tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Enver Bey'in Aynülmansûr'daki Bingazi karargâhı kırk kadar subay ve 400 askerden oluşuyordu. Rodos'un savunması yalnız 920 kadar askerle yapıldı, Abdullah Bey 17 Mayıs 1912'de teslim oldu. Deniz yoluyla destek imkânsızdı; Ekim başında kablo bağlantısı İtalyanlarca kesildi." },
    { ad:"İtalya", devlet_id:"italya", komutan:"bulunamadı (TDV trablusgarp-savasi maddesinin okunan kısımlarında İtalyan komutan adı yok)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", ucak:"kullanıldı, sayı bilinmiyor (uçaklardan abartılı zafer havadisleriyle moral bozucu broşür atıldı)", gemi:"bilinmiyor", notlar:"23 Ekim 1911'de Osmanlı birlikleri karşısında zayiat ve yenilgi (Neşet ve Ali Fethi komutasında); İtalya yine de 5 Kasım 1911'de Trablusgarp ve Bingazi'nin ilhakını ilân etti. İtalyan donanması 18 Nisan 1912'de Çanakkale Boğazı girişindeki tabyaları topa tuttu; Rodos 24 Nisan 1912'de işgale başlandı." }
  ],
  kaynak:"TDV: trablusgarp-savasi (2019)", bag_ekokuma:null },

{ id:"kunye-sarikamis-1914", savas_ad:null, savas_t:"1914-12-22", tur:"meydan",
  baslik:"Sarıkamış Harekâtı (22 Aralık 1914 - 4 Ocak 1915)",
  tarih_metin:"22 Aralık 1914'te başladı, Hâfız Hakkı Paşa'nın 4 Ocak 1915'te verdiği ricat emriyle sona erdi",
  uyari:"savaslar.js'te Sarıkamış kaydı yok. Şehid sayısında 'neredeyse genel kabul' gören 90.000 rakamını TDV açıkça YANLIŞ sayar (Rus defin tabelalarından 23.000, Guse'ye göre ~30.000).",
  celiski:"Yaygın '90.000 şehid' rakamını TDV açıkça yanlış sayar: Rus nezaretindeki defin tabelalarına göre 23.000 (18.000'i Sarıkamış civarında); naaşlarına ulaşılamayanlar ve Aras vadisindeki 11. Kolordu şehidleriyle birlikte Guse'ye göre ~30.000.",
  taraflar:[
    { ad:"Osmanlı Üçüncü Ordusu", devlet_id:"osmanli", komutan:"Enver Paşa (18 Aralık'ta Hasan İzzet Paşa'nın istifasıyla ordu kumandanlığını üstlendi) · 9. Kolordu: Ali İhsan Latif Paşa (esir düştü) · 10. Kolordu: Hâfız Hakkı Bey/Paşa (sonra Sol Cenah Ordusu) · 11. Kolordu: Abdülkerim Paşa", mevcut_toplam:"96.550 savaşçı (9., 10., 11. kolordu ve bir süvari tümeni; jandarma ve menzil birlikleri hariç)", piyade:"bilinmiyor", suvari:"bilinmiyor (bir süvari tümeni)", top:"bilinmiyor", tufek:"bilinmiyor", makineli_tufek:"bilinmiyor", gemi:"yok", kayip:"Rus defin tabelalarına göre 23.000 şehid (18.000'i Sarıkamış civarında); naaşlarına ulaşılamayanlar ve Aras vadisindeki 11. Kolordu şehidleriyle birlikte Guse'ye göre ~30.000. Yudeniç'in günlüğünde 20.000 civarı esir (200 kadarı subay). 8 Şubat 1915'te hastahanelerde 15.808 hasta ve yaralı", notlar:"9. Kolordu 25.000, 10. Kolordu 30.000 kişilik mevcutla harekete geçti. Kışlık donanım eksik: 100.000 takım kışlık giyim taşıyan gemiler Rus filosunca batırılmıştı; en yakın demiryolu istasyonu (Ulukışla) cephenin 600 km gerisindeydi. 25 Aralık akşamı Bardız Geçidi'nde 2000 kişilik Rus müfrezesi altı saat dayandı; taarruzun gece durdurulması harekâtın seyrini çevirdi." },
    { ad:"Rus Kafkas Ordusu", devlet_id:"rusya", komutan:"Başkumandan yardımcısı General Mişlayevski (27 Aralık'ta Tiflis'e döndü) · Kurmay başkanı General Yudeniç (komutayı devraldı) · Oltu grubu: General İstomin", mevcut_toplam:"65.000 civarı (Sarıkamış ve Oltu grupları; muharip olmayanlar hariç)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"Sarıkamış'ta 28 Aralık'ta 34 top (26 Aralık'ta kasabada tesadüfen bulunan 2 sahra topu)", tufek:"bilinmiyor", makineli_tufek:"'birçok' (28 Aralık'ta Sarıkamış'ta; sayı yok)", gemi:"yok", kayip:"General Yudeniç'e göre 26.000 asker (bir kısmı donarak); General Maslofski'ye göre 20.000'den fazla ölü, yaralı ve hasta, 9000'den fazla donarak ölen; esir 2000'in üzerinde; toplam ~30.000", notlar:"Oltu grubu 15.000 kişiydi; Sarıkamış'taki Rus kuvveti 26 Aralık sabahı 4000'i aştı (iki kat arttı), 28 Aralık'ta 15.000 savaşçıya çıktı. Ruslar kışlık donanım ve lojistikte (Tiflis-Gümrü-Kars-Sarıkamış demiryolu) üstündü." }
  ],
  kaynak:"TDV: sarikamis-harekati (2019)", bag_ekokuma:null },

{ id:"kunye-canakkale-1915", savas_ad:"Çanakkale", savas_t:"1915-03-18", tur:"deniz",
  baslik:"Çanakkale Boğazı deniz hücumu (18 Mart 1915)",
  tarih_metin:"18 Mart 1915; kara çıkarması 25 Nisan 1915'te, muharebelerin sonu 9 Ocak 1916",
  uyari:"Künye yalnız 18 Mart deniz hücumuna aittir (kronoloji 'Çanakkale Zaferi' t:1915-03-18). 25 Nisan 1915 çıkarması ve sonrası için kuvvet bilgisi aşağıda 'notlar'da ayrı etiketlidir. TDV 'Batı kaynaklarında Gelibolu savaşları' adıyla da anıldığını belirtir.",
  taraflar:[
    { ad:"Osmanlı Çanakkale Müstahkem Mevki ve donanması", devlet_id:"osmanli", komutan:"Çanakkale Müstahkem Mevki Kumandanı Cevad Paşa ('18 Mart kahramanı') · mayın gemisi Nusret · (25 Nisan sonrası) Beşinci Ordu: Mareşal Liman von Sanders · Mustafa Kemal (Arıburnu'nda 57. Alay'ı karşı taarruza sevk etti)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", makineli_tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"17 Mart akşamı Nusret'in Karanlık Liman'a döktüğü mayınlar deniz harekâtının kaderini değiştirdi. Güney Grubu (Seddülbahir) Weber Paşa'ya, Kuzey Grubu (Arıburnu) önce Esad Paşa'ya sonra Ali Rızâ Bey'e verildi (TDV canakkale-muharebeleri)." },
    { ad:"İtilâf (İngiliz-Fransız) donanması", devlet_id:"ingiltere", komutan:"İngiliz Amirali J. M. de Robeck (Carden'in yerine) · kara çıkarması: General Hamilton, Fransız Generali D'Amade (sonra Gouraud)", mevcut_toplam:"bilinmiyor (donanma); çıkarma ordusu yaklaşık 75.000 kişi, 18 Mart sonrası Limni'de toplandı", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", makineli_tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"mevcudun %35'i. Bouvet, Océan, Irrésistible savaş gemileri, iki muhrip ve yedi mayın arama gemisi battı; Gaulois ve Inflexible dahil yedi zırhlı görev yapamaz hale geldi", notlar:"75.000 rakamı 18 Mart'taki donanma değil, sonraki çıkarma ordusudur. 18 Mart bozgunu, yalnız deniz kuvvetleriyle Boğaz'ın geçilemeyeceğini gösterdi." }
  ],
  kaynak:"TDV: canakkale-muharebeleri (1993, güncelleme 2019)", bag_ekokuma:null },

{ id:"kunye-kut-1916", savas_ad:null, savas_t:"1916-04-29", tur:"kusatma",
  baslik:"Kûtül'amâre zaferi (5 Aralık 1915 - 29 Nisan 1916)",
  tarih_metin:"Kuşatma 5 Aralık 1915'te başladı (yaklaşık beş ay); teslim protokolü ve girişi 29 Nisan 1916",
  uyari:"savaslar.js'te Kût kaydı yok. Kronolojide ayrıca 'Kûtülamâre'nin İngiliz işgali' t:1915-09-26 (TDV: 26 Eylül 1915) maddesi var.",
  taraflar:[
    { ad:"Osmanlı kuşatma kuvvetleri", devlet_id:"osmanli", komutan:"Halil Paşa (kuşatma) · Altıncı Ordu: Alman Mareşali Goltz Paşa (22 Ekim 1915'ten) · Eylül 1915'te Albay Yûsuf Nûreddin Bey", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", makineli_tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"22-26 Kasım 1915 Selmânıpâk çarpışmasında İngilizler çok kayıp verip Kût'a çekildi, Osmanlılar kaleyi kuşattı. Teslim tazminat pazarlığı: İngilizler önce 1 milyon, sonra 2 milyon sterlin ve tüm silâhlarını teklif etti; Türk tarafı kayıtsız şartsız teslimde direndi." },
    { ad:"İngiliz kuvvetleri (Townshend'in Kût'taki ordusu)", devlet_id:"ingiltere", komutan:"General Townshend (kuşatılan) · kurtarma: General Nixon, sonra General Percy Lake", mevcut_toplam:"13.309 (teslim alınan İngiliz ordusu)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", makineli_tufek:"bilinmiyor", ucak:"kullanıldı, sayı bilinmiyor (kuşatılanlara uçaklarla atılan yiyecek paketlerinin çoğu nehre düştü)", gemi:"bilinmiyor", notlar:"13.309, kuşatma sonunda teslim olan İngiliz ordusunun toplamıdır; kuşatmanın başındaki mevcut değildir. 5 Nisan 1916'da Felâhiye'de başlayan dört günlük ve 21-22 Nisan'daki IV. Felâhiye taarruzları kuşatmayı yaramadı." }
  ],
  kaynak:"TDV: kutulamare (2002)", bag_ekokuma:null },

{ id:"kunye-lugos-1695", savas_ad:"Lugoş zaferi", savas_t:"1695-09-22", tur:"meydan",
  baslik:"Lugoş zaferi ve Buldur (Temeş) Muharebesi (Eylül 1695)",
  tarih_metin:"II. Mustafa'nın ilk Avusturya seferi (18 Zilkade 1106 / 30 Haziran 1695'te çıktı); TDV Buldur savaşına gün vermez, atlas günü 22 Eylül 1695",
  uyari:"TDV mustafa-ii savaşın gününü yazmaz; 22 Eylül atlas kronolojisinden gelir (TDV'de doğrulanamadı). Savaş 'bizzat padişahın katıldığı' ve Lipova'nın fethinden sonra gerçekleşti.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Sultan II. Mustafa (bizzat katıldı) · Diyarbekir ve Rumeli beylerbeyleri Şâhin Mehmed ve Mahmud paşalar (şehid)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"Diyarbekir ve Rumeli beylerbeyleri şehid oldu (başka sayı yok)", notlar:"Kırım kuvvetlerinin desteğiyle kazanıldı. Zaferden sonra Lugoş alındı; II. Mustafa 'gazi' unvanı aldı." },
    { ad:"Avusturya ordusu", devlet_id:"habsburg", komutan:"General Veterani (öldü)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Temeš suyu kenarında Buldur denilen ormanlık ve bataklık alanda yapılan savaş." }
  ],
  kaynak:"TDV: mustafa-ii", bag_ekokuma:null }

];
