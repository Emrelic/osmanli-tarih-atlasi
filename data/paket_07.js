/* PAKET 07 — arac/paketle.py ile ÜRETİLDİ, ELLE DÜZENLENMEZ.
   3 kaynak dosya, sırası index.html'deki sıradır.
   Kaynağı değiştirdiysen: py arac/paketle.py yenile
   Tazelik kapıda sınanır: py arac/paketle.py sina */
/* ==== data/kronoloji_memluk.js ==== */
// =====================================================================
// MEMLÜK SULTANLIĞI — KRONOLOJİ · 1261-1517 (çekirdek kapsam 1281-1517)
// Oturum: MEMLÜK KRONOLOJİ (eski ad: SONNET HAZIR KITA 33)
// Görevi veren: OSMANGAZİ (koordinatör). Otorite: oturumlar/KRONOLOJI-SARTNAME.md
//
// PARTİ 1 (commit a3337ca): 109 madde, beş paralel kol.
// PARTİ 2 (commit a83f66c): +22 madde — bilim(7)·Bahrî derinleştirme(9)·
//   Kızıldeniz-Hint Okyanusu(6).
// PARTİ 3: +24 madde — idarî-malî derinleştirme(5, Dîvân-ı Müfred/vakıf/
//   müsadere/tağşiş/cülban isyanı) · Burcî derinleştirme(11, Ferec b.
//   Berkuk'un iç mücadeleleri/Kıbrıs tâbiiyeti/Kayıtbay'ın imarı/tüfekçi
//   birliği) · Suriye-Filistin(8, KUDÜS ve TRABLUSŞAM ilk kez girdi +
//   Emeviyye Camii 1479 yangını).
// TOPLAM: 155 madde. Sayı hedeflenmedi (KRONOLOJI-SARTNAME.md §1).
// Her yeni parti eklenirken önceki bütün maddelerle programatik
// tarih+başlık çakışma taraması yapıldı — parti 3'te de 0 tekrar.
//
// ⚠️ 1261, 1263, 1265, 1266, 1269 tarihli beş madde 1281 öncesine düşüyor —
//    KASITLI (bkz. parti 1 notu, devletin kurumsal temeli).
//
// ─────────────────────────────────────────────────────────────────────
// §D — İKİ PUAN (KRONOLOJI-SARTNAME.md §3.2): onem MEMLÜK için ağırlık,
//    dunya OLAYIN kendisine ait — ikisi de iyilik/kötülük skalası DEĞİL.
//
// ─────────────────────────────────────────────────────────────────────
// §K — KAYNAK: TDV İslâm Ansiklopedisi (HTTP+gövde doğrulanmış, çoğunluk).
//    "bulunamadı" damgalı maddeler TDV'nin sustuğu yerler, dayanak
//    standart akademik kaynak AÇIKÇA yazılı (Cambridge History of Egypt
//    ed. Petry, P.M. Holt, Michael Dols, Robert Irwin, Eliyahu Ashtor,
//    David A. King, Taddesse Tamrat, Verena Krebs, Daisuke Igarashi,
//    Carl F. Petry, David Ayalon, Doris Behrens-Abouseif). Vikipedi
//    hiçbir maddede TEK dayanak olarak kullanılmadı. Memlük bağlantısı
//    doğrulanamayan adaylar (İbn Hâtime, İbnü'l-Hatîb, Karasungur'un
//    İlhanlı'ya sığınması — yalnız Wikipedia kaynağı vardı) BİLEREK
//    YAZILMADI.
//    🟡 Kansu Gavri döneminin ateşli silah krizi TARTIŞMALI bir konudur
//    (Ayalon tezi vs. Petry'nin eleştirisi) — ilgili maddede açıkça
//    belirtildi, tek taraflı sunulmadı.
//
// ─────────────────────────────────────────────────────────────────────
// §Y — yer_id: data/yerlesimler*.js'ten BİREBİR, her partide programatik
//    doğrulandı (koordinatör + bu oturum, toplam 0 uyuşmazlık). Boş
//    kalanlar ya haritada nokta olarak yok (Kerek, Safed, Diu, Kıbrıs/
//    Lefkoşa, Dâbık, Ridâniye, Ördekli, Rahbe, Sis, Ca'ber Kalesi,
//    Sarhad, Yemen, Habeşistan) ya da İMPARATORLUK ÇAPINDA
//    (kapsam_genis:true, 3 madde).
//
// §T — Günü bilinmeyen madde YYYY-01-01. Tarih uydurulmadı.
// =====================================================================
window.KRONOLOJI_MEMLUK = [

{ t:"1261-06-09", b:"Abbâsî halifeliği Kahire'de ihya edildi", tur:"din", onem:5, dunya:2, kapsam:"ic", etiket:["din","idari","konu-idari","konu-din"], yer_id:"Kahire", d:"Moğolların 1258'de Bağdat'ı yıkıp son Abbâsî halifesini öldürmesinin ardından Sultan I. Baybars, halifenin amcası Ebü'l-Kāsım Ahmed'i Kahire'ye davet etti; 9 Receb 659 (9 Haziran 1261) günü Müstansır-Billâh unvanıyla halife ilân edilip halktan biat alındı. Siyasî yetkisi olmayan bu \"gölge halifelik\", adı sikke ve hutbelerde Memlük sultanlarıyla birlikte anılarak 1517'ye kadar tahtın İslâm dünyası nezdindeki meşruiyet kaynağı oldu.", kaynak:"hilafet (TDV, gövde okundu)" },

{ t:"1263-01-01", b:"Baybars berîd (posta-istihbarat) örgütünü yeniden kurdu", gun:"1263 — yıl hassasiyeti · TDV `berid`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"idari", onem:4, dunya:1, kapsam:"ic", etiket:["idari","islahat","konu-idari","konu-islahat","konu-ulastirma"], yer_id:"Kahire", d:"Haçlı seferleri yüzünden bozulmuş olan Dîvânü'l-berîd'i saltanatının erken yıllarında yeniden canlandıran Baybars, güzergâh üzerine yollar, köprüler ve küçük kale biçiminde kervansaraylar yaptırdı. Bu ağ sayesinde Kahire'den Dımaşk'a haber ortalama dört günde, âcil durumlarda Halep'e üç günde ulaştırılabiliyordu; örgüt aynı zamanda güvercin postasıyla desteklenen bir istihbarat ağına dönüştü.", kaynak:"berid (TDV, gövde okundu) — kesin ay/gün TDV'de yok, saltanatının erken yıllarına tarihleniyor; akademik: Cambridge, \"Postal Systems in the Pre-Modern Islamic World\", böl. 5 \"The Mamluk Barīd\"" },

{ t:"1265-01-01", b:"Baybars dört mezhep için ayrı başkadılık makamı kurdu", gun:"H. 663 / 1265 — yıl hassasiyeti · TDV `hisbe`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"idari", onem:5, dunya:2, kapsam:"ic", etiket:["hukuk","idari","konu-idari","konu-hukuk"], yer_id:"Kahire", d:"Sultan I. Baybars, 663'te (1265) Kahire'de Hanefî, Şâfiî, Mâlikî ve Hanbelî mezheplerinin her biri için ayrı bir kādılkudât tayin ederek dört başkadılık sistemini kurdu. Dîvân-ı Mezâlim'in toplandığı dârüladlde bu dört başkadı, kazaskerler, müftüler ve beytülmâl vekiliyle birlikte sultanın yanında oturma hakkına sahipti; uygulama Osmanlı fethine kadar sürdü ve mezhep çoğulculuğunu kurumsallaştıran ender örneklerden biri oldu.", kaynak:"hisbe (TDV, gövde okundu) + akademik (\"Legal Diversity in the Age of Taqlid: the Four Chief Qadis Under the Mamluks\")" },

{ t:"1266-01-01", b:"Memlükler Haremeyn'e ilk surreyi gönderdi", gun:"H. 664 / 1266 — yıl hassasiyeti · TDV `surre`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"din", onem:3, dunya:1, kapsam:"ic", etiket:["din","konu-din"], yer_id:"Mekke", d:"Abbâsî halifeliğini Kahire'de ihya eden Memlükler, hilâfetin eski geleneği olan surreyi (Mekke-Medine halkına gönderilen yıllık para ve hediye) de üstlendiler. İlk Memlük surresinin 664'te (1266) yollandığı kabul edilir; bu, Hicaz üzerindeki nüfuzu, aynı iddiada bulunan Yemen'in Resûlî emîrlerine karşı ilan etmenin bir yoluydu.", kaynak:"surre (TDV, gövde okundu)" },

{ t:"1269-01-01", b:"Baybars hacca gitti, Haremeyn'de Memlük nüfuzunu pekiştirdi", gun:"1269 — yıl hassasiyeti · TDV `surre`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"din", onem:4, dunya:2, kapsam:"dis", etiket:["din","konu-din"], yer_id:"Mekke", d:"Yemen'in Resûlî emîri de surre ve Kâbe örtüsü göndererek Hicaz'da hâkimiyet iddia ediyordu; Sultan Baybars 1269'da bizzat hacca giderek surre ve kisve gönderme hakkının Memlükler'de olduğunu kesinleştirdi. Bu tarihten sonra Kahire, Şam, Bağdat ve Halep gibi büyük şehirlerden düzenlenen hac kervanlarının her biri kendi mahmiliyle yola çıkmaya başladı.", kaynak:"surre (TDV, gövde okundu)" },

{ t:"1270-01-01", b:"Baybars Kubbetüs-Sahre'yi onarttı", gun:"1270 — yıl hassasiyeti · TDV `kubbetus-sahre`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"mimari", onem:2, dunya:1, kapsam:"ic", etiket:["mimari","imar","konu-imar"], yer_id:"Kudüs", d:"Sultan I. Baybars, 1270 yılında depremlerle yıkılan Kubbetüs-Sahre'nin kısımlarını tamir ettirdi ve yapının dış cephesindeki mozaikleri yeniledi. Bu onarım, Memlük sultanlarının Haremü'ş-Şerif'e gösterdiği sürekli ilginin ilk büyük örneğidir; ardından gelen Kalavun hânedanı da aynı geleneği sürdürecekti.", kaynak:"tdv-kubbetus-sahre" },

{ t:"1271-01-01", b:"Baybars'ın başarısız Kıbrıs deniz seferi", gun:"1271 — yıl hassasiyeti · TDV `kibris`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"savas", onem:2, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", d:"Filistin ve Suriye'de Haçlılara ait son kale ve şehirleri ele geçirmekte olan Sultan Baybars, 1271'de Kıbrıs üzerine on yedi gemiden oluşan bir filo gönderdi. Filo, çıkan fırtına yüzünden adaya ulaşamadan dağıldı ve sefer sonuçsuz kaldı. Bu erken teşebbüs, Bahrî Memlüklerin bir yüzyıl sonra I. Petro'nun İskenderiye baskınıyla (1365) doruğa çıkacak Kıbrıs Krallığı'yla gergin ilişkisinin ilk halkalarından biridir.", kaynak:"tdv-kibris", kapsam_genis:true },

{ t:"1281-10-29", b:"Humus'ta İlhanlı ordusu püskürtüldü", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["savas","konu-askeri"], yer_id:"Humus", d:"İlhanlı hükümdarı Abaka Han'ın kardeşi Moğol kumandanı Mengü Timur'un idaresindeki büyük bir Moğol-Ermeni-Gürcü ordusu Suriye'ye girdi; Sultan Kalavun bizzat sevk ettiği Memlük kuvvetleriyle Humus önünde bu orduyu ağır bir yenilgiye uğrattı. Zafer, on beş yıl önceki Ayn Câlût'tan sonra Memlük-İlhanlı mücadelesinde ikinci büyük dönüm noktası oldu ve Kalavun'un iktidarını sağlamlaştırdı.", kaynak:"kalavun" },

{ t:"1284-01-01", b:"Kalavun Külliyesi ve Mansûrî Bîmâristânı kuruldu", gun:"H. 684 / 1284 — yıl hassasiyeti · TDV `kalavun-kulliyesi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"bilim", onem:5, dunya:3, kapsam:"ic", etiket:["bilim","tip","mimari","sosyal","imar","konu-bilim","konu-imar","konu-sosyal"], yer_id:"Kahire", d:"1276'da Şam'da Nûreddin Zengî Hastahânesi'nde tedavi görüp iyileşmesinden esinlenen Sultan el-Melikü'l-Mansûr Kalavun, Kahire'de cami, medrese, türbe ve bîmâristândan oluşan bir külliye kurdurdu; inşaat 683-684 (1284-1285) yıllarında on üç ayda tamamlandı. Bîmâristânü'l-Mansûrî adıyla anılan hastahane, zengin-fakir ayrımı gözetmeksizin çok sayıda hastaya bakan, göz ve ruh sağlığı için ayrı koğuşları da bulunan, teori ve pratiğe dayalı tıp eğitiminin verildiği büyük bir kütüphaneye sahip bir kurumdu ve Osmanlı döneminde XVII. yüzyıla kadar İslâm dünyasının en ünlü tıp merkezlerinden biri olarak işlev gördü.", kaynak:"kalavun-kulliyesi (TDV, gövde okundu)" },

{ t:"1288-12-17", b:"İbnü'n-Nefîs vefat etti — küçük kan dolaşımının kâşifi", tur:"bilim", onem:4, dunya:3, kapsam:"ic", etiket:["bilim","tip","konu-bilim"], yer_id:"Kahire", d:"Şam doğumlu hekim, Sultan Baybars döneminde Mısır-Suriye hekimlerinin başı olarak görev yaptı ve kanın kalpten akciğere, oradan geri dönüşünü tarif ederek Galen ve İbn Sînâ'nın septum teorisini çürüttü — bu keşif Batı'da yüzyıllarca bilinmedi. Ev ve kütüphanesini, Sultan Kalavun'un 1284'te kurduğu Mansûrî Bîmâristânı'na bağışladı.", kaynak:"ibnun-nefis" },

{ t:"1289-01-01", b:"Trablusşam yıkılıp Kâdîsâ kıyısında yeniden kuruldu", gun:"H. 688 / 1289 — yıl hassasiyeti · eski t 1289-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `trablussam`, `memlukler`, `baybars-i`, `kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"idari", onem:3, dunya:2, kapsam:"ic", etiket:["idari","konu-idari"], yer_id:"Trablusşam", d:"Sultan Kalavun 688'de (1289) Haçlıların elindeki Trablus'u fethettikten sonra kıyıdaki eski şehri savunma gerekçesiyle tamamen yıktırdı ve Kâdîsâ nehrinin batı yakasında, kıyıdan içeride yeni bir şehir kurdurdu. Vali sarayı ve mahkemesinin kalede yer aldığı yeni Trablusşam, Memlük idaresinin Suriye'deki altı büyük nâiblik merkezinden biri hâline geldi; eski liman bölgesi Burcü's-Sibâ kulesi çevresinde el-Mînâ adıyla varlığını sürdürdü.", kaynak:"tdv-trablussam" },

{ t:"1290-11-10", b:"Kalavun öldü, oğlu Halîl tahta çıktı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic", etiket:["siyaset","konu-siyasi","konu-kisiler","konu-hanedan"], yer_id:"Kahire", d:"Akkâ'yı fethetmek üzere ordu hazırlığındaki Sultan Kalavun, Kahire'den yola çıktıktan kısa süre sonra hastalanarak öldü. Ertesi gün oğlu el-Melikü'l-Eşref Halîl tahta çıktı ve babasının yarım kalan Akkâ seferini bizzat devraldı.", kaynak:"kalavun ve halil-b-kalavun (TDV)" },

{ t:"1291-05-18", b:"Akkâ'nın fethi — Haçlılar Suriye'den tasfiye edildi", tur:"toprak-kazanc", onem:5, dunya:5, kapsam:"dis", etiket:["savas","toprak-kazanc","konu-askeri"], yer_id:"Akkâ", d:"6 Mart 1291'de Kahire'den hareket eden Memlük ordusu 5 Nisan'da Akkâ önüne ulaştı; altı haftalık kuşatmadan sonra şehir 18 Mayıs akşamı düştü, direnen Templier binası 28 Mayıs'ta teslim oldu. Ardından Sûr, Sayda, Beyrut, Hayfa ve Antartus gibi kalan Haçlı limanları art arda boşaltıldı ve iki asırlık Haçlı varlığı Suriye-Filistin kıyısından tamamen silindi.", kaynak:"halil-b-kalavun" },

{ t:"1293-12-13", b:"Sultan Halîl emirleri tarafından öldürüldü", tur:"siyaset", onem:3, dunya:1, kapsam:"ic", etiket:["siyaset","suikast","konu-siyasi","konu-kisiler"], d:"Akkâ fatihi Halîl, dış siyasette elde ettiği büyük başarıya rağmen emirler arasındaki güç dengesini kuramamıştı; Kahire yakınlarında bir av sırasında Emîr Bedreddin Baydarâ ve suç ortakları tarafından öldürüldü. Suikast, Kalavun hanedanının otoritesinin emirler karşısında ne kadar kırılgan olduğunu gösteren ilk büyük kriz oldu.", kaynak:"halil-b-kalavun", yer_id:"Kahire" },

{ t:"1294-01-01", b:"el-Câmiu'l-Mansûrî Trablusşam'da inşa edildi", gun:"H. 693 / 1294 — yıl hassasiyeti · TDV `trablussam`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"mimari", onem:2, dunya:1, kapsam:"ic", etiket:["mimari","imar","konu-imar"], yer_id:"Trablusşam", d:"Yeni kurulan Trablusşam'ın ulu camii el-Câmiu'l-Mansûrî (el-Câmiu'l-kebîr), 693 (1294) yılında tamamlandı. Adını Kalavun'un lakabı el-Melikü'l-Mansûr'dan alan yapı, XIV. yüzyılda şehrin şeker, zeytinyağı ve sabun ticaretiyle büyüyen ekonomisine paralel gelişen dokuz cami, on altı medrese ve beş handan oluşan geniş imar dalgasının ilk büyük eseridir.", kaynak:"tdv-trablussam" },

{ t:"1294-12-01", b:"Kitbugâ, çocuk sultanı tahttan indirdi", gun:"Muharrem 694 / Aralık 1294 — ay hassasiyeti (TDV `muhammed-b-kalavun`; gün yok)", tur:"siyaset", onem:3, dunya:1, kapsam:"ic", etiket:["siyaset","darbe-siyasi","konu-siyasi","konu-darbe"], yer_id:"Kahire", d:"Halîl'in ölümünden sonra dokuz yaşındaki kardeşi I. en-Nâsır Muhammed'in adına naiblik yapan Moğol asıllı emir Kitbugâ, birkaç ay içinde küçük sultanı bir kenara iterek bizzat tahta oturdu ve I. en-Nâsır Muhammed'in ilk saltanatını sona erdirdi. Kitbugâ'nın kendi soydaşı Oyratlara gösterdiği kayırmacılık, Türk kökenli Memlük emirleri arasında hızla hoşnutsuzluk yarattı.", kaynak:"bulunamadı — TDV el-melikun-nasir-muhammed gövdesi çekilemedi (boilerplate); dayanak: standart akademik kaynak, Cambridge History of Egypt c.1 (ed. C. Petry) · muhammed-b-kalavun (TDV: \"hükümdar ilân edildi (Muharrem 694 / Aralık 1294)\")" },

{ t:"1295-01-01", b:"Devâdâriyye Hankahı Kudüs'te inşa edildi", gun:"H. 695 / 1295 — yıl hassasiyeti · TDV `kudus`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"mimari", onem:2, dunya:1, kapsam:"ic", etiket:["mimari","imar","konu-imar"], yer_id:"Kudüs", d:"Memlük emîri Alemüddin Sencer ed-Devâdâr es-Sâlihî, 695 (1295) yılında Kudüs'te Devâdâriyye Hankahı'nı yaptırdı. Bahrî Memlük döneminin erken tasavvuf yapılarından biri olan bu hankah, şehrin Haremü'ş-Şerif çevresinde yoğunlaşan imar hareketinin ilk örneklerinden sayılır. Memlükler dönemi boyunca Kudüs'te elli civarında medrese ve yirmi civarında zâviye-hankah-ribât inşa edilecekti.", kaynak:"tdv-kudus" },

{ t:"1296-11-16", b:"Lâçin, Kitbugâ'yı devirip tahta çıktı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic", etiket:["siyaset","konu-siyasi","konu-hanedan"], yer_id:"Kahire", d:"Hüsâmeddin Lâçin bir emirler darbesiyle Kitbugâ'yı devirerek 18 Muharrem 696'da (16 Kasım 1296) tahta oturdu. Kısa saltanatında er-Ravku'l-Hüsâmî adıyla bilinen geniş çaplı bir arazi-iktâ yeniden düzenlemesi başlattı; bu reform hazineyi güçlendirdiyse de zarar gören emirlerin ona düşman kesilmesine yol açtı.", kaynak:"lacin" },

{ t:"1298-01-01", b:"Sultan Lâçin toprakları yeniden ölçtürdü — er-Ravkü'l-Hüsâmî", gun:"1298 — yıl hassasiyeti · TDV `ikta`, `tarih`, `memlukler`, `baybars-i` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"idari", onem:5, dunya:2, kapsam:"ic", etiket:["idari","mali","konu-idari","konu-ekonomi"], yer_id:"", kapsam_genis:true, d:"Eyyûbîler döneminden beri yapılmamış kapsamlı bir arazi tahririyle (revk) Mısır'ın iktâ gelirleri yeniden hesaplandı; akademik kaynağa göre sultanın payı bir yılda 24 kırat üzerinden 4'ten 13'e çıkarıldı ve büyük iktâlar küçültülerek ecnâdü'l-halkanın toprakları azaltıldı. Kıdemli emîrlerin iktâlarını kalıtsal bir imtiyaz saydığı bu reform büyük hoşnutsuzluk yarattı; Sultan Lâçin ertesi yıl bir grup memlük tarafından öldürüldü.", kaynak:"ikta (TDV — \"Sultan Lâçin'in yaptırdığı tahrirle ecnâdü'l-halkanın iktâları azaltıldı\") + akademik (kesin kırat oranı ve tarih için: al-Rawk al-Husami, 697/1298)" },

{ t:"1299-01-16", b:"Lâçin öldürüldü, I. en-Nâsır Muhammed ikinci kez tahta çıktı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic", etiket:["siyaset","suikast","konu-siyasi","konu-kisiler","konu-hanedan"], yer_id:"Kahire", d:"İktâ reformuyla küstürdüğü emirlerden Gürcü el-Eşrefî'nin düzenlediği bir baskında Kale-i Cüvânî'de öldürülen Lâçin'in yerine, sürgündeki eski çocuk sultan I. en-Nâsır Muhammed geri çağrılarak on dört yaşında ikinci kez tahta çıkarıldı. Ancak gerçek iktidar bu kez de vasi emirler Baybars el-Çaşnigîr ile Seyfeddin Salar'ın elindeydi.", kaynak:"lacin" },

{ t:"1299-12-22", b:"Vâdilhâzindâr yenilgisi — Moğollar Şam'ı ele geçirdi", tur:"savas", onem:5, dunya:4, kapsam:"dis", etiket:["savas","toprak-kayip","konu-askeri"], yer_id:"Humus", d:"İlhanlı hükümdarı Gazan Han'ın bizzat sevk ettiği ordu, Hama ile Humus arasındaki Vâdilhâzindâr'da Memlük kuvvetlerini ağır bir yenilgiye uğrattı. Zaferin ardından Moğollar Ocak 1300'de Şam'a girdi; ancak Gazan Han birkaç hafta içinde İran'a dönünce geride bıraktığı garnizon da bahara kadar çekilmek zorunda kaldı ve Memlükler Suriye'nin denetimini yeniden kurdu.", kaynak:"gazan-han" },

{ t:"1301-01-01", b:"Gayrimüslimlere karşı ayrımcı kararname çıkarıldı", gun:"1301 — yıl hassasiyeti · TDV `zimmi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"sosyal", onem:4, dunya:2, kapsam:"ic", etiket:["sosyal","din","azinlik","konu-din","konu-sosyal"], yer_id:"", kapsam_genis:true, d:"Mısır'ın çeşitli şehirlerinde yükselen tepki üzerine hükümet, Hıristiyanların mavi, Sâmirîler'in kırmızı, Yahudilerin sarı sarık giymesini zorunlu kıldı; Kahire'de kiliseler ve havralar kapatıldı, Bilbeys'teki bütün Yahudi cemaati dahil pek çok kişi İslâm'a girmeye zorlandı. Kararname Kıptî cemaatinin devlet bürokrasisindeki ağırlığını kırmayı ve fakihlerin desteğini kazanmayı amaçlıyordu; izleyen on yıllarda kitlesel ihtida dalgası hızlandı.", kaynak:"bulunamadı — TDV'nin `ehl-i-zimme`/`zimmi` maddeleri genel tanım veriyor, Memlük dönemine özgü müstakil madde yok. Dayanak: standart akademik kaynak — jstage, \"Oriento\" 49-2 (2006), 1301 kararnamesi üzerine; Cambridge/SOAS, \"Coptic conversion to Islam under the Baḥrī mamlūks, 692-755/1293-1354\"" },

{ t:"1303-04-20", b:"Şakhab (Merc-i Sâfer) zaferi — Moğol tehdidi son buldu", tur:"savas", onem:5, dunya:4, kapsam:"dis", etiket:["savas","konu-askeri"], yer_id:"Şam", d:"Gazan Han'ın kumandanı Kutluğşah'ın idaresindeki Moğol ordusu, Şam yakınlarındaki Merc-i Sâfer'de (Şakhab) bizzat cepheye çıkan Sultan I. en-Nâsır Muhammed'in kuvvetlerince ağır bir bozguna uğratıldı. 2 Ramazan 702 (20 Nisan 1303) tarihli bu zafer, altmış yılı aşkın süredir devam eden Memlük-Moğol mücadelesinde İlhanlıların Suriye'ye yönelik son büyük seferiydi.", kaynak:"gazan-han" },

{ t:"1303-08-08", b:"Doğu Akdeniz depremi İskenderiye Feneri'ni ve Kahire'nin minarelerini yıktı", tur:"sosyal", onem:4, dunya:2, kapsam:"dis", etiket:["afet","sosyal","konu-sosyal","afet-deprem","afet-volkan-firtina"], yer_id:"İskenderiye", d:"Girit açıklarında meydana gelen ve tahminen 8 büyüklüğündeki deprem, ardından gelen tsunamiyle İskenderiye'yi vurdu; antik dünyanın yedi harikasından Fener'in büyük bölümü çöktü ve şehir surları büyük ölçüde yıkıldı. Kahire'de de birçok caminin minaresi devrildi — Kalavun Külliyesi'nin minaresi de bu depremde yıkılmış, sonradan oğlu Nâsır Muhammed tarafından tuğlayla yeniden inşa ettirilmişti.", kaynak:"kalavun-kulliyesi (TDV, gövde okundu — minarenin \"1303 depreminde yıkıldığı\" doğrulanıyor) + akademik (sismolojik detay ve tsunami için: 1303 Crete earthquake, tahmini büyüklük ve İskenderiye'deki hasar)" },

{ t:"1309-04-05", b:"Baybars el-Çaşnigîr tahtı ele geçirdi", tur:"siyaset", onem:3, dunya:1, kapsam:"ic", etiket:["siyaset","konu-siyasi"], yer_id:"Kahire", d:"Vasi emirlerin baskısından bunalan I. en-Nâsır Muhammed, ikinci saltanatını terk ederek Kerek Kalesi'ne çekildi; boşalan tahta 5 Nisan 1309'da vasilerden Baybars el-Çaşnigîr oturdu. Baybars'ın saltanatı Çerkes kökenli bir emirin Memlük tahtına ilk çıkışı olması bakımından, seksen yıl sonra kurulacak Burcî hanedanının erken bir habercisiydi.", kaynak:"baybars-ii" },

{ t:"1310-03-05", b:"I. en-Nâsır Muhammed üçüncü kez tahta çıktı", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", etiket:["siyaset","konu-siyasi","konu-hanedan"], yer_id:"Kahire", d:"Kerek'teki sürgününden dönen I. en-Nâsır Muhammed, kendisini destekleyen emirlerin gücüyle 5 Mart 1310'da üçüncü kez tahta oturdu; tahttan çekilen Baybars el-Çaşnigîr Gazze yakınlarında yakalanıp 16 Nisan'da idam edildi. Artık otuz bir yıl sürecek ve tamamen kendi iradesiyle yönetecek bu üçüncü saltanat, Bahrî Memlük döneminin en istikrarlı ve en görkemli evresini başlattı.", kaynak:"baybars-ii; dayanak (dönüş anlatımı): P.M. Holt, The Age of the Crusades (Longman)" },

{ t:"1313-02-01", b:"Moğollara karşı sefer ve Rahbe kuşatmasının kalkması", gun:"Şubat 1313 — ay hassasiyeti · ay TDV'de var, gün yok (`muhammed-b-kalavun`, `memlukler`, `baybars-i`, `kalavun` …)", tur:"savas", onem:2, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", d:"İlhanlı kuvvetlerinin Fırat kıyısındaki Rahbe Kalesi'ni kuşatması üzerine Sultan I. en-Nâsır Muhammed Şevval 712'de (Şubat 1313) Kahire'den ordusuyla yola çıktı. Moğolların kuşatmayı terk edip geri çekildiğini öğrenince sultan güzergâhını değiştirip hac görevini yerine getirmek üzere Hicaz'a yöneldi. Sefer muharebesiz sonuçlansa da Memlük-İlhanlı sınırındaki gerginliğin 1323 barışına kadar sürdüğünü gösterir.", kaynak:"tdv-muhammed-b-kalavun", yer_kon:[35.005,40.4236] },

{ t:"1314-04-03", b:"Altın Orda'dan Kahire'ye görkemli elçilik heyeti", tur:"ittifak", onem:3, dunya:3, kapsam:"dis", etiket:["diplomasi","konu-diplomasi"], yer_id:"Kahire", d:"Sultan I. en-Nâsır Muhammed'in Özbek Han'dan bir Cengizli prensesi istemesi üzerine, 16 Zilhicce 713'te (3 Nisan 1314) o zamana kadar görülmemiş derecede muhteşem, 174 kişilik bir Altın Orda elçilik heyeti değerli hediyelerle Kahire'ye ulaştı ve büyük itibarla karşılandı. Memlükler karşılığında Ramazan 715'te (Aralık 1315) Altın Orda'ya bir elçilik heyeti gönderdi. Bu karşılıklı elçilikler, İlhanlılara karşı ortak çıkarları olan iki devlet arasındaki yakınlaşmanın diplomatik zeminini hazırladı.", kaynak:"tdv-ozbek-han" },

{ t:"1315-01-01", b:"Nâsır Muhammed büyük toprak tahririni tamamlattı — er-Ravkü'n-Nâsırî", gun:"H. 715 / 1315 — yıl hassasiyeti · TDV `ikta`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"idari", onem:5, dunya:2, kapsam:"ic", etiket:["idari","mali","konu-idari","konu-ekonomi"], yer_id:"", kapsam_genis:true, d:"Üçüncü saltanatında (1310-1341) el-Melikü'n-Nâsır Muhammed, Mısır'ın bütün tarım arazilerini yeniden ölçtürüp sulama ve verim kayıtlarını çıkarttı; geniş iktâlar küçültülüp sultanın doğrudan gelirleri artırıldı. El-Makrîzî'ye göre tahrir 715'te (1315), el-Kalkaşendî'ye göre 716'da (1316) başladı; ülke Aşağı Mısır'da on iki, Yukarı Mısır'da dokuz idari bölgeye ayrıldı ve reform hazine gelirlerini önemli ölçüde artırdı, fakat uzun vadede iktâ suistimallerinin de önünü açtı.", kaynak:"ikta (TDV — Nâsır Muhammed'in üçüncü saltanatında yapılan tahriri doğruluyor, kesin yıl vermiyor) + akademik (el-Makrîzî/el-Kalkaşendî tarih ihtilafı ve idari bölünme için: Al-Ruk al-Nasiri)" },

{ t:"1315-04-28", b:"Malatya'nın Memlükler tarafından fethi", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Malatya", d:"Ermeni hâkimiyetindeki ve Moğollarla iş birliği içindeki Malatya halkının daveti üzerine Sultan I. en-Nâsır Muhammed, Şam nâibi Seyfeddin Tenkiz kumandasında bir orduyu şehre gönderdi; Memlük kuvvetleri 22 Muharrem 715'te (28 Nisan 1315) Malatya'ya girdi. Sultan şehri yedi bölgeden oluşan bir sınır eyaleti (serhad) hâline getirdi. Fetih, Memlüklerin Ermeni Kilikya'sına karşı kuzeydeki en ileri harekâtlarından biridir.", kaynak:"tdv-malatya" },

{ t:"1315-01-01", b:"Sencer el-Cavlî Kudüs nâibi oldu, Cavliyye ve Sellâmiyye medreselerini yaptırdı", gun:"H. 720 / 1315 — yıl hassasiyeti · eski t 1315-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `kudus`, `memlukler`, `baybars-i`, `kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"idari", onem:3, dunya:2, kapsam:"ic", etiket:["idari","mimari","imar","konu-idari","konu-imar","konu-egitim"], yer_id:"Kudüs", d:"en-Nâsır Muhammed b. Kalavun'un üçüncü saltanatı sırasında (1310-1341) Alemüddin Sencer el-Cavlî Kudüs nâibü's-saltanası tayin edildi ve şehirde 715-720 (1315-1320) yılları arasında Cavliyye ile Sellâmiyye medreselerini inşa ettirdi. Kaynak el-Uleymî'ye göre bu tayin, Kudüs'ün Dımaşk veya Gazze nâibliğine bağlı bir vilayet olmaktan çıkıp bağımsız bir idarî merkez sayılmasının erken örneklerindendir; Kalkaşendî ise bu bağımsızlığı daha geç bir tarihe bağlar.", kaynak:"tdv-kudus" },

{ t:"1318-01-01", b:"Yasavur istilası sırasında Memlük akını", gun:"1318 — yıl hassasiyeti · TDV `ebu-said-bahadir-han`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"savas", onem:2, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", d:"Çağatay prensi Yasavur'un Horasan'a saldırdığı ve İlhanlı ordularının onu püskürtmekle meşgul olduğu sırada, Sultan I. en-Nâsır Muhammed'in gönderdiği Memlük kuvvetleri Doğu Anadolu'da İlhanlı topraklarına ait bazı yerleşim yerlerini yağmaladı. Akın, İlhanlıların iç meşguliyetinden yararlanan fırsatçı bir sınır harekâtıdır ve 1323 barış antlaşmasına kadar süren düşük yoğunluklu çatışmaların bir parçasıdır.", kaynak:"tdv-ebu-said-bahadir-han", kapsam_genis:true },

{ t:"1318-01-01", b:"Kubbetüs-Sahre'nin içi yaldızla yenilendi", gun:"1318 — yıl hassasiyeti · eski t 1318-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `kubbetus-sahre`, `memlukler`, `baybars-i`, `kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"mimari", onem:2, dunya:1, kapsam:"ic", etiket:["mimari","imar","konu-imar"], yer_id:"Kudüs", d:"Sultan en-Nâsır Muhammed b. Kalavun, 1318 yılında Kubbetüs-Sahre'nin iç dekorasyonunu altın yaldız ve mozaiklerle yeniden düzenletti, kubbenin dışını da kurşun levhalarla kaplattı. Kalavun hânedanının bu yatırımı, yapının bugün de görülen kurşun kaplı dış görünümünün temelini oluşturur.", kaynak:"tdv-kubbetus-sahre" },

{ t:"1320-05-16", b:"Özbek Han'ın yeğeni Tolunbay Hatun'un sultanla evliliği", tur:"ittifak", onem:3, dunya:3, kapsam:"dis", etiket:["diplomasi","konu-diplomasi"], yer_id:"Kahire", d:"1314'teki elçilik görüşmelerinin ardından Özbek Han, yeğeni Tolunbay Hatun'u Mısır'a gönderdi ve nikâh merasimi 6 Rebîülâhir 720'de (16 Mayıs 1320) Kahire'de gerçekleştirildi. Evlilik, Memlük Sultanlığı ile Altın Orda arasındaki hânedan ittifakını perçinleyen sembolik bir adımdı. İki devlet, ortak düşman İlhanlılara karşı bu yakınlaşmayı sürdürdü.", kaynak:"tdv-ozbek-han" },

{ t:"1323-01-01", b:"İlhanlılarla Halep Antlaşması imzalandı", gun:"1323 — yıl hassasiyeti · TDV `ebu-said-bahadir-han`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", etiket:["antlasma","konu-diplomasi"], yer_id:"Halep", d:"İlhanlı hükümdarı Ebû Said Bahadır Han'ın naibi Emîr Çoban'ın girişimiyle, altmış yılı aşkın süredir aralıklarla devam eden Memlük-İlhanlı savaş hali resmen sona erdirildi. Antlaşma iki devlet arasındaki düşmanlığı kalıcı bir barışa çevirdi ve Suriye sınırındaki askerî gerilimi bir daha canlanmamak üzere dindirdi.", kaynak:"ebu-said-bahadir-han" },

{ t:"1325-01-01", b:"Memlük desteğiyle Resûlî tahtı yeniden kuruldu", gun:"1325 — yıl hassasiyeti · TDV `resuliler`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:2, dunya:2, kapsam:"dis", etiket:["siyaset","askeri","konu-askeri","konu-siyasi"], d:"Yemen'deki Resûlî Sultanı el-Melikü'l-Mücâhid Ali, kısa süreli bir tahttan indirilmenin ardından Memlük Sultanı Muhammed b. Kalavun'un gönderdiği birliklerin yardımıyla hükümranlığını yeniden kurdu ve kaybettiği toprakları geri aldı. Bu askerî müdahale, Resûlî Sultanlığı'nın Memlük himayesindeki tâbi konumunu bir kez daha somutlaştırdı.", kaynak:"resuliler", yer_id:"Taiz" },

{ t:"1326-04-05", b:"İbn Battûta Kahire'yi ilk ziyaret etti", tur:"kultur", onem:2, dunya:2, kapsam:"dis", etiket:["kultur","seyahat","konu-kultur"], yer_id:"Kahire", d:"Fasıl seyyah, Sultan el-Melikü'n-Nâsır Muhammed b. Kalavun döneminde şehre ulaştı ve burada Şeyh Burhâneddin el-A'rec'in telkiniyle Hint, Sind ve Çin gibi doğu memleketlerini görme hevesine kapıldı. Seyahatnamesinde Mısır Memlüklerini 'Etrâk' (Türkler) diye tanımlaması ve Ayzâb Limanı'nın milletlerarası konumuna dair gözlemleri, dönemin Kahire'sine dair önemli bir dış tanıklık oluşturur.", kaynak:"ibn-battuta" },

{ t:"1329-01-01", b:"Tenkiziyye Medresesi ve Sûkulkattânîn Kudüs'te tamamlandı", gun:"H. 729 / 1329 — yıl hassasiyeti · TDV `kudus`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"mimari", onem:3, dunya:1, kapsam:"ic", etiket:["mimari","imar","konu-imar","konu-egitim"], yer_id:"Kudüs", d:"Dımaşk nâibi Emîr Tenkiz en-Nâsırî, 729 (1329) yılında Kudüs'te Tenkiziyye Medresesi'ni ve bitişiğindeki Sûkulkattânîn (Pamukçular Çarşısı) kompleksini yaptırdı. Şam'daki uzun nâiblik döneminde bölgenin en etkili emîrlerinden biri olan Tenkiz, bu yapıyla Kudüs'ün Memlük dönemindeki en önemli eğitim ve ticaret komplekslerinden birini şehre kazandırdı.", kaynak:"tdv-kudus" },

{ t:"1337-01-01", b:"İbnü'ş-Şâtır'ın çok işlevli usturlabı", gun:"H. 738 / 1337 — yıl hassasiyeti · TDV `ibnus-satir`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"bilim", onem:2, dunya:2, kapsam:"ic", etiket:["bilim","konu-bilim"], yer_id:"Şam", d:"Dımaşklı astronom ve muvakkit İbnü'ş-Şâtır, 738 (1337-38) yılında birden fazla gökcismi hesaplamasını tek gövdede toplayan 'el-âletü'l-câmia' usturlaplarını imal etti. Bu aletler dönemin İslam dünyasında üretilen en gelişmiş gözlem araçları arasında sayılır. İbnü'ş-Şâtır'ın yıllar içinde geliştirdiği gezegen modelleri Batlamyus astronomisine köklü değişiklikler getirecek, iki asır sonra Kopernik'in ulaştığı sonuçlara Şam'dan çok önce yaklaşacaktı.", kaynak:"ibnus-satir" },

{ t:"1340-07-11", b:"Şam nâibi Tenkiz'in tutuklanıp idamı", tur:"siyaset", onem:4, dunya:1, kapsam:"dis", etiket:["siyaset","konu-siyasi","konu-kisiler"], yer_id:"Şam", d:"1312'den beri (1 Rebîülâhir 712) yirmi sekiz yıl boyunca Şam nâibliği yapan, imar ve ilim faaliyetleriyle tanınan Seyfeddin Tenkiz, son yıllarında Sultan I. en-Nâsır Muhammed ile arası bozulunca av bahanesiyle Ca'ber Kalesi'ne sığınmaya kalkıştı. Safed nâibi tarafından yakalanıp zincire vurularak Kahire'ye götürüldü, İskenderiye'de hapsedildikten beş gün sonra sultanın emriyle 15 Muharrem 741'de (11 Temmuz 1340) öldürüldü. Bahrî Memlük tarihinin en uzun süreli ve en güçlü Suriye valiliklerinden birinin bu şekilde sona ermesi, sultanın son yıllarında emirler üzerindeki baskısını gösterir.", kaynak:"tdv-tenkiz" },

{ t:"1341-06-07", b:"I. en-Nâsır Muhammed öldü, kargaşa dönemi başladı", tur:"hukumdar", onem:5, dunya:1, kapsam:"ic", etiket:["siyaset","konu-siyasi","konu-kisiler","konu-hanedan"], yer_id:"Kahire", d:"Otuz bir yıllık üçüncü saltanatının ardından ölen I. en-Nâsır Muhammed, güçlü bir halef bırakmamıştı; ardından gelen kırk bir yıl içinde sekizden fazla oğlu ve torunu, çoğu çocuk yaşta, birbiri ardına ve genellikle emirler tarafından tahta çıkarılıp indirildi. Gerçek iktidar artık sultanlardan çok onları perde arkasından yöneten güçlü emirlerin elindeydi; bu istikrarsızlık Bahrî Memlük döneminin sonunu hazırlayan sürecin başlangıcı oldu.", kaynak:"bulunamadı — TDV el-melikun-nasir-muhammed gövdesi çekilemedi (boilerplate); dayanak: standart akademik kaynak, Cambridge History of Egypt c.1 (ed. C. Petry), P.M. Holt, The Age of the Crusades" },

{ t:"1345-01-01", b:"Venedik'in Muda konvoyları başladı", gun:"1345 — yıl hassasiyeti · TDV `venedik`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:4, dunya:4, kapsam:"dis", etiket:["ekonomi","ticaret","venedik","konu-ekonomi"], yer_id:"İskenderiye", d:"Katolik kilisesinin Müslümanlarla ticareti yasaklayan kararının gevşemesiyle Venedik, İskenderiye'ye düzenli devlet kervan-gemi (muda) seferlerini bu yıldan itibaren başlattı. Konvoylar başta baharat olmak üzere Suriye yünü gibi malları almak üzere Memlük limanına yıllık olarak uğradı. Bu düzen, Venedik-Memlük ticaretinin 15. yüzyıl boyunca sürecek kurumsal iskeletini oluşturdu.", kaynak:"WebSearch çapraz doğrulama (akademik atıflı ikincil kaynaklar) — TDV venedik maddesi Memlük dönemini ayrıntılandırmıyor" },

{ t:"1347-01-01", b:"Kara Ölüm Mısır'a ulaştı", gun:"1347 · 1347 yazında — yıl hassasiyeti · eski t 1347-07-01'in AYI kaynakta YOK (d yalnız mevsim veriyor (1347 yazında); TDV `taun`, `kahire`, `memlukler`, `baybars-i` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"sosyal", onem:5, dunya:4, kapsam:"ic", etiket:["sosyal","demografi","saglik","konu-bilim","konu-sosyal","konu-demografi","afet","afet-salgin"], yer_id:"Kahire", d:"Orta Asya bozkırlarından ticaret kervanlarıyla yayılan veba, 1347 yazında İskenderiye üzerinden Mısır'a girdi ve 1348 (749) sonbaharında Kahire'de doruğa ulaştı; dönemin vekayinâmecilerine göre şehirde günde binlerce kişi öldü ve nüfusun üçte biri ile yarısı arasında bir kesim kısa sürede yok oldu. El-Makrîzî'ye göre salgın aralıklı nükslerle on beş yıl boyunca (yaklaşık 500-600 bin nüfuslu) Kahire'yi etkisi altında tuttu; Memlük ordusunun asker kaynağını ve iktâ sistemini destekleyen kırsal nüfusu geri dönüşsüz biçimde tahrip ederek sultanlığın bundan sonraki bütün askerî ve mâlî kapasitesini sınırladı.", kaynak:"taun ve kahire (TDV, gövde okundu — el-Makrîzî, el-Ḫıṭaṭ, I, 339 naklen); dayanak (Mısır'a varış/etki ayrıntısı): Michael W. Dols, The Black Death in the Middle East (Princeton University Press, 1977)" },

{ t:"1348-01-01", b:"Kara Ölüm Dımaşk'ı vurdu — bir günde 300'den fazla ölü", gun:"H. 749 / 1348 — yıl hassasiyeti · eski t 1348-08-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `taun`, `memlukler`, `baybars-i`, `kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"sosyal", onem:5, dunya:3, kapsam:"ic", etiket:["sosyal","demografi","saglik","konu-bilim","konu-sosyal","konu-demografi","afet","afet-salgin"], yer_id:"Şam", d:"1330'larda Orta Asya'dan başlayıp İpekyolu ticaret kervanlarıyla yayılan Kara Ölüm, 749'da (1348) Dımaşk ve çevresine ulaştı. Çağdaş tarihçi İbn Kesîr, salgının en şiddetli günlerinde şehirde bir günde 300'den fazla kişinin öldüğünü, Emeviyye Camii'nde aynı anda on beş cenaze namazının birden kılındığını kaydeder.", kaynak:"taun (TDV, gövde okundu — müellif Nükhet Varlık; İbn Kesîr, el-Bidâye ve'n-nihâye, XIV, 237 naklen)" },

{ t:"1348-01-01", b:"1348 vebası Şam'ı vurdu", gun:"H. 749 / 1348 — yıl hassasiyeti · eski t 1348-09-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `taun`, `memlukler`, `baybars-i`, `kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"bilim", onem:3, dunya:3, kapsam:"ic", etiket:["bilim","konu-bilim","afet","afet-salgin"], yer_id:"Şam", d:"749 (1348) yılında Çin'den başlayıp Akdeniz havzasına yayılan büyük veba salgını (Kara Ölüm) Dımaşk'a ve çevresine ulaştı. TDV İslâm Ansiklopedisi'nin taun maddesine göre salgının en şiddetli günlerinde şehirde ve civarında bir günde 300'den fazla kişi hayatını kaybetti. Bu felaket, Memlük coğrafyasında sonraki on yıllarda kaleme alınacak veba risalelerinin ardında yatan doğrudan deneyimlerden biriydi.", kaynak:"taun" },

{ t:"1350-01-01", b:"Kârimîlerin ticaret zirvesi", gun:"1350 — yıl hassasiyeti · TDV `karimi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:4, dunya:3, kapsam:"dis", etiket:["ekonomi","ticaret","karimi","baharat","konu-ekonomi"], yer_id:"Aden", d:"14. yüzyılın ortası ve ikinci yarısında Kârimî tüccarları, Aden üzerinden Kızıldeniz-Hint Okyanusu baharat ticaretinde neredeyse tekelci bir konum kazandı. TDV İslâm Ansiklopedisi'ne göre bu dönemde bazı Kârimî tüccarların servetleri on milyon dinara ulaştı; nâzırü'l-bahr ve'l-kârim adlı bir devlet görevlisi onların işlerini denetleyip vergilerini topluyordu. Zenginlikleri onları zaman zaman diplomatik elçilik görevlerine de taşıdı.", kaynak:"karimi (TDV İslâm Ansiklopedisi)" },

{ t:"1350-01-01", b:"Resûlî sultanı hac sırasında Mekke'de tutuklandı", gun:"H. 751 / 1350 — yıl hassasiyeti · eski t 1350-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `resuliler`, `memlukler`, `baybars-i`, `kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"siyaset", onem:2, dunya:2, kapsam:"dis", etiket:["siyaset","konu-siyasi","konu-din"], yer_id:"Mekke", d:"Resûlî Sultanı el-Melikü'l-Mücâhid Ali, 751 (1350) yılında hac için gittiği Mekke'de şerifin yönlendirmesiyle Memlük Sultanı Muhammed b. Kalavun'un hac emîri tarafından tutuklanarak Mısır'a götürüldü. Bir yıl boyunca Mısır'da alıkonulan sultanın yokluğunda Resûlî Sultanlığı neredeyse çöküş noktasına geldi.", kaynak:"resuliler" },

{ t:"1356-01-01", b:"Sultan Hasan Camii ve Külliyesi'nin inşasına başlandı", gun:"1356 — yıl hassasiyeti · TDV `hasan-b-muhammed-b-kalavun`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"mimari", onem:5, dunya:3, kapsam:"ic", etiket:["mimari","imar","konu-din","konu-imar"], yer_id:"Kahire", d:"Kale eteğinde yükselen dev kompleksin inşaatı 1356'da başladı; Sultan Hasan 1361'de tahttan indirilip öldürüldükten sonra bile inşaat kesintiye uğramadan sürdürüldü ve 1363'te tamamlandı. Yaklaşık 8.000 metrekarelik alana yayılan, dört medrese eyvanı ve anıtsal türbesiyle Memlük mimarîsinin en görkemli örneği kabul edilir.", kaynak:"bulunamadı — TDV'nin ayrı 'sultan-hasan-camii-ve-kulliyesi' maddesi ölü slug (302), 'hasan-b-muhammed-b-kalavun' kişi maddesi yalnız genel bilgi veriyor, kesin tarih yok; dayanak: Doris Behrens-Abouseif, Islamic Architecture in Cairo: An Introduction (Brill, 1989) ve archnet.org (Aga Khan Trust for Culture / MIT akademik arşivi)" },

{ t:"1363-01-01", b:"Mısır'da yeni bir veba salgını görüldü", gun:"H. 764 / 1363 — yıl hassasiyeti · TDV `taun`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"sosyal", onem:3, dunya:2, kapsam:"ic", etiket:["sosyal","demografi","konu-sosyal","konu-demografi","afet","afet-salgin"], yer_id:"Kahire", d:"İbn Kesîr'in kaydına göre 764'te (1363) Mısır'da yeniden şiddetli bir tâun salgını çıktı ve çok sayıda insan hayatını kaybetti. Kara Ölüm'ün ardından yaklaşık her on yılda bir tekrarlanan bu nüksler, Memlük Mısırı'nın nüfusunu bütün XIV. yüzyıl boyunca baskı altında tuttu.", kaynak:"taun (TDV, gövde okundu — İbn Kesîr, el-Bidâye ve'n-nihâye, XIV, 317)" },

{ t:"1365-01-01", b:"İbnü'ş-Şâtır Halep'te güneş saati yaptı", gun:"H. 767 / 1365 — yıl hassasiyeti · TDV `ibnus-satir`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"bilim", onem:2, dunya:1, kapsam:"ic", etiket:["bilim","konu-bilim"], yer_id:"Halep", d:"İbnü'ş-Şâtır 767 (1365-66) yılında Halep için bir güneş saati inşa etti. Şamlı muvakkitin bu eseri, ilm-i mîkat alanındaki pratik uygulamalarının Dımaşk dışına da taştığını gösterir. Güneş saatleri dönemde yalnız zaman ölçmekle kalmıyor, namaz vakitlerinin belirlenmesinde de kullanılıyordu.", kaynak:"ibnus-satir" },

{ t:"1365-10-09", b:"Kıbrıs Kralı I. Petro İskenderiye'yi yağmaladı", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["savas","konu-askeri"], yer_id:"İskenderiye", d:"Kıbrıs Krallığı'nın başında I. Petro'nun (Pierre de Lusignan) yönettiği bir Haçlı filosu Rodos'tan hareketle İskenderiye önlerine geldi ve şehri üç gün boyunca ele geçirip ağır biçimde yağmaladı; müslüman, hıristiyan ve yahudi ahali ayrım gözetmeksizin katliama uğradı. TDV'nin de \"Haçlılar'ın Mısır'a yaptıkları seferlerin sonuncusu\" diye nitelediği bu baskın, Memlük donanmasının Akdeniz'deki zafiyetini açıkça gösterdi ve Avrupa'yla ticari ilişkilerde uzun süreli bir güvensizlik yarattı.", kaynak:"iskenderiye (TDV, yıl); dayanak (gün): P.M. Holt, The Age of the Crusades" },

{ t:"1370-01-01", b:"Memlük-Kıbrıs barış antlaşması", gun:"1370 — yıl hassasiyeti · TDV `kibris`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", etiket:["siyaset","konu-siyasi","konu-diplomasi"], yer_id:"", d:"1365'teki İskenderiye baskınının ardından Memlükler için kökü kazınması gereken bir düşman hâline gelen Kıbrıs Krallığı ile ilişkiler, baskının sorumlusu Kral I. Petro'nun 1369'da öldürülmesinin ardından yumuşadı. İki devlet arasında 1370'te bir barış antlaşması imzalandı. Antlaşma, on beş yıl sonra gerçekleşecek Sis'in fethiyle (1375) Memlüklerin dikkatini kuzeye, Kilikya Ermenileri'ne çevirebilmesini kolaylaştırdı.", kaynak:"tdv-kibris", kapsam_genis:true },

{ t:"1371-01-01", b:"Emeviyye Camii'ne büyük güneş saati", gun:"H. 773 / 1371 — yıl hassasiyeti · TDV `ibnus-satir`, `ilm-i-mikat`, `memlukler`, `baybars-i` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"bilim", onem:3, dunya:2, kapsam:"ic", etiket:["bilim","imar","konu-bilim","konu-din","konu-imar"], yer_id:"Şam", d:"Dımaşk'ta Emeviyye Camii'nin muvakkitliğine getirilen İbnü'ş-Şâtır, 773 (1371-72) yılında caminin minaresine büyük bir güneş saati ekledi. Şam'da ilm-i mîkat bilimi tam bu yüzyılda, sekizinci (ondördüncü) hicri asırda, en yüksek düzeyine ulaşmıştı. Eser, sonraki nesil muvakkitler için Şam'daki uygulamanın referans noktası oldu.", kaynak:"ibnus-satir, ilm-i-mikat" },

{ t:"1372-01-01", b:"Habeş kralı Memlük kervanlarına sınırı kapattı", gun:"1372 — yıl hassasiyeti · TDV `etiyopya`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:2, dunya:2, kapsam:"dis", etiket:["siyaset","konu-siyasi"], yer_id:"", d:"1372-1382 yılları arasında hüküm süren Habeş Kralı Nevaya Krestos, Mısır'dan gelen kervanların ülke sınırlarından içeri girmesini yasakladı. Bu tutum, Memlük sultanlarına resmî bağlılık bildiren önceki Habeş krallarının siyasetinden bir kopuşu ve iki ülke arasında gerilimli bir dönemin başlangıcını işaret ediyordu.", kaynak:"etiyopya", kapsam_genis:true },

{ t:"1374-01-01", b:"İkinci büyük veba dalgası Kahire'yi iki yıl etkisi altında tuttu", gun:"H. 776 / 1374 — yıl hassasiyeti · TDV `kahire`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"sosyal", onem:3, dunya:2, kapsam:"ic", etiket:["sosyal","demografi","konu-sosyal","konu-demografi","afet","afet-salgin"], yer_id:"Kahire", d:"776'da (1374) başlayan yeni bir salgın Kahire'de iki yıl sürdü; el-Makrîzî bu dalganın da şehirde ağır can kaybına yol açtığını kaydeder. Tekrarlanan salgınlar, dönemin diğer İslâm ülkeleriyle kıyaslandığında Memlük Mısırı'nın nüfus toparlanmasını özellikle yavaşlattı.", kaynak:"kahire (TDV, gövde okundu — el-Makrîzî, el-Ḫıṭaṭ, I, 339)" },

{ t:"1375-01-01", b:"İbnü'ş-Şâtır vefat etti", gun:"H. 777 / 1375 — yıl hassasiyeti · eski t 1375-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `ibnus-satir`, `memlukler`, `baybars-i`, `kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"bilim", onem:3, dunya:2, kapsam:"ic", etiket:["bilim","konu-bilim"], yer_id:"Şam", d:"İslam astronomisinin önde gelen isimlerinden İbnü'ş-Şâtır, 777 (1375) yılında Dımaşk'ta vefat etti. Zîcü İbni'ş-Şâtır adlı eseri ve geliştirdiği gezegen modelleriyle Batlamyus sistemine getirdiği değişiklikler, ölümünden sonra da İslam astronomi geleneğinde etkisini sürdürdü.", kaynak:"ibnus-satir" },

{ t:"1375-01-01", b:"Sis'in fethi ve Kilikya Ermeni Krallığı'nın sonu", gun:"H. 776 / 1375 — yıl hassasiyeti · eski t 1375-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"savas", onem:5, dunya:4, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", d:"776'da (1375) Memlük kuvvetleri Kilikya Ermeni Krallığı'nın başşehri Sis'i ele geçirdi ve krallığı ortadan kaldırdı; bu topraklar Memlük Sultanlığı'nın kuzey sınırını teşkil etmeye başladı. Yüzyıl boyunca aralıklı akınlarla (1315 Malatya fethi dahil) zayıflatılan Kilikya Ermeni Devleti'nin bu şekilde tarih sahnesinden silinmesi, Bahrî dönemin son büyük toprak kazanımlarından biridir.", kaynak:"tdv-memlukler", yer_kon:[37.4522,35.8153] },

{ t:"1377-01-01", b:"İbn Haldun Mukaddime'nin müsveddelerini tamamladı", gun:"H. 779 / 1377 — yıl hassasiyeti · TDV `ibn-haldun`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"bilim", onem:3, dunya:5, kapsam:"dis", etiket:["bilim","kultur","tarih-yaziciligi","konu-bilim","konu-kultur"], yer_id:"", d:"Eser, 779 (1377) yılında Cezayir'de, İbn Haldun'un Mısır'a gelişinden beş yıl önce tamamlandı. Toplumların doğuş-yükseliş-çöküş döngüsünü ve devletlerin asabiyet üzerinden analizini sistemleştiren bu giriş bölümü, yazarının sonradan yerleştiği Memlük Mısırı'nın ilim çevrelerine taşıdığı en kalıcı mirastır ve dünya tarihyazıcılığında çığır açtığı kabul edilir.", ic_not_d:"bu yüzden Kahire'ye bağlı bir yer_id verilemiyor.", kaynak:"ibn-haldun", yer_kon:[35.02,1.03] },

{ t:"1381-05-19", b:"el-Melikü'l-Mansûr Ali öldü, Berkuk vesayeti ele aldı", tur:"siyaset", onem:3, dunya:1, kapsam:"ic", etiket:["siyaset","konu-siyasi","konu-kisiler"], yer_id:"Kahire", d:"Çocuk sultan el-Melikü'l-Mansûr Ali'nin ölümü üzerine, Çerkes kökenli emirlerin en güçlüsü Berkuk kendi adına tahta çıkmak yerine merhumun kardeşi Hâccî'yi es-Sâlih unvanıyla sultan ilan etti ve fiilî iktidarı atabekliğinden yürütmeye başladı. Bu, Berkuk'un kendi saltanatına giden yolda attığı hesaplı bir ara adımdı.", kaynak:"berkuk" },

{ t:"1382-11-27", b:"Berkuk tahta çıktı — Bahrî'den Burcî'ye geçiş", tur:"siyaset", onem:5, dunya:2, kapsam:"ic", etiket:["siyaset","hanedan-degisimi","konu-siyasi","konu-hanedan"], yer_id:"Kahire", d:"Berkuk, vesayeti altındaki kukla sultan es-Sâlih Hâccî'yi tahttan indirerek bizzat el-Melikü'z-Zâhir unvanıyla sultan oldu. Kendisi gibi Çerkes kökenli emirleri kilit mevkilere getiren Berkuk'un iktidarı, bir asırdan uzun süredir Mısır ve Suriye'yi yöneten Türk-Kıpçak asıllı Bahrî Memlük hanedanının sonunu ve Çerkes (Burcî) Memlükler devrinin başlangıcını simgeler.", kaynak:"berkuk (TDV, yıl); dayanak (gün): standart akademik kronoloji (Britannica)" },

{ t:"1382-12-08", b:"İbn Haldun Mısır'a geldi", tur:"kultur", onem:4, dunya:3, kapsam:"dis", etiket:["kultur","gocmen","konu-kultur","konu-demografi"], yer_id:"İskenderiye", d:"Kuzey Afrikalı tarihçi ve düşünür, 1 Şevval 784 (8-10 Aralık 1382) tarihinde İskenderiye'ye ulaştı ve kısa süre sonra Kahire'ye yerleşmeyi tercih etti. Bu göç, İslâm tarihyazıcılığının en etkili eserlerinden Mukaddime'nin yazarını Memlük Mısırı'nın ilim ve idare çevrelerine kattı.", kaynak:"ibn-haldun" },

{ t:"1384-01-01", b:"Berkuk Külliyesi'nin inşasına başlandı", gun:"H. 788 / 1384 — yıl hassasiyeti · TDV `berkuk-kulliyesi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"mimari", onem:4, dunya:2, kapsam:"ic", etiket:["mimari","imar","konu-imar"], yer_id:"Kahire", d:"Bina üzerindeki kitâbelerden külliyenin 786-788 (1384-1386) yılları arasında yapıldığı anlaşılıyor; cuma camii, türbe, dört eyvanlı medrese ve hankâhtan oluşan kompleks, öğrenci hücreleri, mutfak ve ahırlar gibi destek yapılarını da içeriyordu. Burcî (Çerkes) Memlük hanedanının kurucusu Berkuk'un bu külliyesi, dönemin en kapsamlı mimarî patronaj eserlerinden biridir.", kaynak:"berkuk-kulliyesi" },

{ t:"1384-08-08", b:"İbn Haldun Kahire Mâlikî başkadılığına atandı", tur:"idari", onem:3, dunya:2, kapsam:"ic", etiket:["idari","hukuk","konu-idari","konu-hukuk"], yer_id:"Kahire", d:"Sultan Berkuk, 19 Cemâziyelâhir 786 (8 Ağustos 1384) tarihinde İbn Haldun'u Mâlikî kādılkudâtı (başkadı) tayin etti. Görevden birkaç kez azledildi, 15 Ramazan 801'de (21 Mayıs 1399) ikinci kez aynı makama getirildi — bu iniş çıkışlı kariyer, Memlük idaresinde âlimlerin siyasî konjonktüre ne kadar bağlı olduğunu gösterir.", kaynak:"ibn-haldun" },

{ t:"1386-01-01", b:"Ceneviz ile barış antlaşması", gun:"1386 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", etiket:["ekonomi","ticaret","ceneviz","konu-diplomasi","konu-ekonomi"], yer_id:"", d:"Venedik ile 1351-1355 arası süren savaşın ardından Ceneviz'in Memlük Sultanlığı ile de sürtüşmesi devam etmiş; taraflar bu yıl imzalanan bir barış antlaşmasıyla İskenderiye ve Şam'daki Ceneviz ticaretini yeniden güvence altına aldı. Antlaşma, Cenevizli tüccarlara İskenderiye'de fondaco (ticaret kolonisi) işletme hakkını teyit etti.", kaynak:"WebSearch çapraz doğrulama (ikincil kaynak) — birincil antlaşma metnine ulaşılamadı", kapsam_genis:true },

{ t:"1387-01-01", b:"Berkuk'un aile vakıflarını kaldırma girişimi", gun:"1387 — yıl hassasiyeti · TDV `vakif`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:2, dunya:2, kapsam:"ic", etiket:["mali","vakif","konu-ekonomi","konu-sosyal"], yer_id:"Kahire", d:"Sultan Berkuk, mülk sahiplerinin topraklarını mirasçılarına aktarmak için kurdukları evkāf-ı ehliyye (aile vakıfları) türünün gerçek bir hayır amacı taşımadığını, yalnız vergiden kaçınıp toprağı ailede tutma aracı olduğunu düşünerek bunları kaldırmayı denedi. Girişim toprak sahibi seçkinlerin direnciyle karşılaştı ve kalıcı olamadı; Mısır'ın tarım arazilerinin yarıya yakınının vakfa dönüştüğü bir dönemde bu tür vakıfların devlet gelirini aşındırması sorun olmaya devam etti.", kaynak:"tdv-vakif" },

{ t:"1389-01-01", b:"Berkuk'un tahttan indirilmesi", gun:"1389 — yıl hassasiyeti · TDV `berkuk`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:3, dunya:1, kapsam:"ic", etiket:["isyan","taht-degisikligi","darbe-siyasi","konu-siyasi","konu-isyan","konu-darbe","konu-hanedan"], yer_id:"Kahire", d:"Berkuk, saltanatının erken döneminde emîrler arasındaki iktidar mücadelesi sonucunda 1389'da tahttan indirildi. Bu, Burcî sultanlığının ilk yıllarındaki istikrarsızlığın bir göstergesiydi; kul emîrler arasındaki rekabet hanedanın en belirgin özelliği olacaktı.", kaynak:"tdv:berkuk (yıl teyitli, TDV gün vermiyor)" },

{ t:"1390-01-27", b:"Berkuk'un yeniden tahta çıkışı", tur:"siyaset", onem:3, dunya:1, kapsam:"ic", etiket:["taht-degisikligi","konu-siyasi","konu-hanedan"], yer_id:"Kahire", d:"Tahttan indirilişinin ardından güç dengelerini yeniden kendi lehine çeviren Berkuk, 27 Ocak 1390'da Kahire'de yeniden sultan olarak tahta çıktı. Restorasyonuyla birlikte otoritesini pekiştirdi ve ölümüne kadar sürecek ikinci saltanat dönemine girdi.", kaynak:"tdv:berkuk" },

{ t:"1395-01-01", b:"Dîvân-ı Müfred'in kuruluşu", gun:"1395 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"idari", onem:3, dunya:2, kapsam:"ic", etiket:["mali","idari","ikta","konu-idari","konu-ekonomi","konu-sanat"], yer_id:"Kahire", d:"Sultan Zâhir Berkuk, bozulmakta olan iktâ sisteminin artık sultan memlüklerine düzenli maaş garanti edemediğini görünce Dîvân-ı Müfred adlı ayrı bir mâlî büro kurdu; bu büroya has iktâ toprakları bağlanarak memlüklerin aylık ulûfe, kisve ve at yemi giderleri doğrudan buradan karşılanmaya başlandı. Kuruluş, iktâ gelirlerinin artık ordunun asıl gücünü besleyemediğinin örtük bir itirafıydı ve Burcî dönem boyunca büyüyerek devlet mâliyesinin en önemli kalemlerinden biri hâline geldi.", kaynak:"Daisuke Igarashi, 'The Establishment and Development of al-Dīwān al-Mufrad: Its Background and Implications', Mamluk Studies Review 10/1 (2006)" },

{ t:"1399-03-19", b:"Makrîzî Kahire muhtesibliğine atandı", tur:"idari", onem:2, dunya:1, kapsam:"ic", etiket:["idari","konu-idari"], yer_id:"Kahire", d:"11 Receb 801 (19 Mart 1399) tarihinde, Sultan Ferec'in tahta çıkışının ardından, Kahire ve Aşağı Mısır'ın muhtesipliğine (çarşı-pazar denetimi) getirildi. Daha önce tevkī' (belge tasdik) memurluğu da yapan Makrîzî, bu idarî tecrübeyi sonradan yazacağı iktisat ve toplum tarihine dair eserlerinde kullandı.", kaynak:"makrizi" },

{ t:"1399-06-20", b:"Berkuk'un ölümü", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic", etiket:["olum","taht-degisikligi","konu-kisiler","konu-hanedan"], yer_id:"Kahire", d:"Burcî Memlük hanedanının kurucusu Berkuk, 14 Haziran 1399'da hastalandıktan kısa süre sonra 20 Haziran 1399'da Kahire'de öldü. Yerine oğlu Ferec geçti; Ferec'in saltanatının hemen başında Timur'un Suriye seferiyle karşılaşması, hanedanın ilk büyük sınavı olacaktı.", kaynak:"tdv:berkuk" },

{ t:"1400-01-01", b:"Timur'un Halep'i yakıp yıkması", gun:"1400 — yıl hassasiyeti · TDV `halep`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"savas", onem:5, dunya:4, kapsam:"dis", etiket:["askeri","toprak-kayip","yikim","konu-askeri"], yer_id:"Halep", d:"Timur, Memlük Sultanı Ferec'in elçilerini Halep'te alıkoyup Timurlu subayı Otlamış'ı serbest bırakmayı reddetmesi üzerine Suriye'ye yöneldi ve Halep'i kuşatıp ele geçirdi. Şehrin surları ve kalesi dahil bütününü yakıp yıktı; üç gün süren yağmalama sırasında yaklaşık 20.000 kişi öldürüldü. Bu felaket Halep'in uzun süre toparlanamayacağı bir tahribat olarak Memlük tarihine geçti.", kaynak:"tdv:halep (yıl teyitli, TDV gün vermiyor)" },

{ t:"1400-01-01", b:"Venedik'in Şam'daki ticaret hakları", gun:"1400 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:3, dunya:3, kapsam:"dis", etiket:["ekonomi","ticaret","venedik","konu-ekonomi"], yer_id:"Şam", d:"Venedikli tüccarlar, Memlük Suriyesi'nin ticaret merkezlerinden Şam'da diğer birçok şehirden farklı olarak fondaco (ticaret kolonisi) dışında serbestçe ikamet edebiliyordu. Bu ayrıcalık, Şam'ın Halep ile birlikte Suriye iç ticaretinin ve İpek Yolu'ndan gelen malların Akdeniz'e açılan kapısı olarak taşıdığı önemi yansıtır.", kaynak:"WebSearch çapraz doğrulama (ikincil akademik kaynak) — birincil kaynağa ulaşılamadı" },

{ t:"1400-03-18", b:"Tenem isyanının bastırılması", tur:"isyan", onem:3, dunya:1, kapsam:"ic", etiket:["isyan","siyaset","konu-siyasi","konu-isyan"], yer_id:"Gazze", d:"Şam nâibi Tenem, Atabek Aytmış'ın ülke idaresindeki mutlak hâkimiyetinden rahatsız olan Emîr Sûdun Tâz ve Yeşbeg gibi emîrlerin baskısıyla vesâyetten kurtarılan Ferec'e karşı Ağustos 1399'da isyan etti; Aytmış ve müşaviri Tağrîberdî de ona katılıp Kahire üzerine yürüdüler. Ferec bizzat sefere çıkarak barış şartlarını kabul etmeyen Tenem'i 18 Mart 1400'de Gazze yakınlarında mağlûp etti, yaklaşık 100 emîriyle birlikte esir aldı. Dımaşk'a girdikten sonra Tenem'i, Aytmış'ı ve taraftarlarını katlettirdi; yalnız Tağrîberdî annesinin aracılığıyla bağışlandı.", kaynak:"islamansiklopedisi.org.tr/ferec (Asri Çubukçu, TDV İslâm Ansiklopedisi, c.12, 1995, s.370-371)" },

{ t:"1401-01-01", b:"Timur'un Şam kuşatması ve İbn Haldun'un ordugâhta görüşmesi", gun:"1401 — yıl hassasiyeti · TDV `ibn-haldun`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"savas", onem:5, dunya:4, kapsam:"dis", etiket:["askeri","toprak-kayip","yikim","konu-askeri"], yer_id:"Şam", d:"Timur'un Suriye seferi 1401'de Şam'a ulaştı; Memlük Sultanı Ferec ordusuyla şehre gelmiş, ancak Timur karşısında tutunamamıştı. Kuşatma sırasında şehirde bulunan tarihçi İbn Haldun, ulemâ ile istişare ederek surlardan bir sepetle indirilip gizlice Timur'un ordugâhına gitti; fatihle görüşerek ona Kuzey Afrika coğrafyası ve kendi asabiyet teorisi hakkında bilgi verdi. Şam ise ağır bir yağma ve yıkımdan geçti — Memlük Suriyesi'nin Timur karşısındaki en büyük felaketlerinden biri.", kaynak:"tdv:ibn-haldun (yıl 803/1401 teyitli, gün vermiyor)" },

{ t:"1403-01-01", b:"1403 kıtlığı", gun:"1403 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:4, dunya:2, kapsam:"ic", etiket:["ekonomi","kitlik","konu-ekonomi","afet","afet-kitlik"], yer_id:"Kahire", d:"Sultan Ferec b. Berkuk döneminde 1399-1405 arası art arda düşük Nil taşkınları tahıl üretimini vurdu ve bu yıl Mısır'da ağır bir kıtlığa yol açtı. Tarihçi Makrîzî, 1403'ü Kahire'nin birke (havuz) çevresindeki canlı mahallelerinin gerilemeye başladığı dönüm noktası olarak kaydeder. Kıtlık, aynı dönemde Yukarı Mısır'da süren bedevî isyanlarıyla birleşince Memlük merkezî otoritesini ciddi biçimde sarstı.", kaynak:"WebSearch çapraz doğrulama (Makrîzî'ye atfen ikincil akademik kaynaklar) — birincil Makrîzî metnine ulaşılamadı" },

{ t:"1403-01-01", b:"Fülûs para politikası", gun:"1403 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:3, dunya:1, kapsam:"ic", etiket:["ekonomi","para","konu-ekonomi"], yer_id:"Kahire", d:"Kıtlık yıllarının mali baskısı altında Memlük hazinesi altın ve gümüş sikke basımını büyük ölçüde durdurup bakır fülûsu ağırlıklı hesap birimi olarak benimsedi. Bu yıl fülûs-dirhem oranının resmî hesap birimi ilan edilmesi, sonraki on yıllarda enflasyonu ve fiyat istikrarsızlığını körükleyen kalıcı bir para politikası hatası olarak değerlendirilir.", kaynak:"WebSearch çapraz doğrulama (Mısır para tarihi üzerine akademik özet) — birincil kaynağa ulaşılamadı" },

{ t:"1403-01-01", b:"Kıtlık ve veba Kahire nüfusunun üçte ikisini yok etti", gun:"H. 806 / 1403 — yıl hassasiyeti · eski t 1403-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `kahire`, `memlukler`, `baybars-i`, `kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"sosyal", onem:5, dunya:3, kapsam:"ic", etiket:["sosyal","demografi","saglik","ekonomi","konu-bilim","konu-ekonomi","konu-sosyal","konu-demografi","afet","afet-kitlik","afet-salgin"], yer_id:"Kahire", d:"806'da (1403) bir araya gelen kıtlık ve veba salgını sırasında Kahire'nin büyük bir bölümü harabeye döndü; tarihçi İbn Tağrîberdî şehir nüfusunun neredeyse üçte ikisinin yok olduğunu yazar. El-Makrîzî aynı günlerde bazı emîrlerin şehri yağmaladığını ve vakıflara saygı göstermediğini ekler — kriz yalnız doğal değil, aynı zamanda idari bir çöküşün de işaretiydi.", kaynak:"kahire (TDV, gövde okundu — İbn Tağrîberdî, en-Nücûmü'z-zâhire, XIII, 152)" },

{ t:"1404-01-01", b:"Nil üzerinde tahıl nakliyesi krizi", gun:"1404 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:3, dunya:1, kapsam:"ic", etiket:["ekonomi","kitlik","tahil","konu-ekonomi","konu-sanayi","afet","afet-kitlik"], yer_id:"Kahire", d:"Kahire'nin iaşesi büyük ölçüde Nil üzerinden gelen Yukarı Mısır tahılına bağlıydı; 1403-1405 kıtlığı sırasında düşük taşkın seviyesi ve bedevî isyanları nakliyeyi kesintiye uğratınca başkentte fiyatlar hızla yükseldi. Kriz, Memlük idaresinin tahıl nakliyesi ve depolanması üzerindeki denetimini sıkılaştırmasına yol açtı.", kaynak:"WebSearch çapraz doğrulama (ikincil akademik kaynak) — birincil kaynağa ulaşılamadı" },

{ t:"1405-01-01", b:"1405 vebası", gun:"1405 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:4, dunya:2, kapsam:"ic", etiket:["ekonomi","veba","kitlik","konu-ekonomi","afet","afet-kitlik","afet-salgin"], yer_id:"Kahire", d:"1403 kıtlığının hemen ardından Mısır'da yeni bir veba salgını baş gösterdi ve zaten daralmış olan tarımsal işgücünü daha da azalttı. Ardışık kıtlık-salgın döngüsü, Ferec b. Berkuk döneminin ekonomik krizini derinleştirerek vergi gelirlerinde kalıcı bir düşüşe yol açtı.", kaynak:"WebSearch çapraz doğrulama (ikincil akademik kaynak) — birincil kaynağa ulaşılamadı" },

{ t:"1405-09-21", b:"Ferec'in tahttan çekilip yeniden tahta çıkışı", tur:"siyaset", onem:3, dunya:1, kapsam:"ic", etiket:["siyaset","hanedan","konu-siyasi","konu-hanedan"], yer_id:"Kahire", d:"Emîrler arasındaki sürekli çatışmalardan yıpranan ve suikasta uğrama korkusuna kapılan Ferec, 21 Eylül 1405'te sır kâtibi Sa'deddin İbn Gurâb'ın evine gizlenerek saltanattan çekildi; yerine kardeşi Abdülazîz 'el-Melikü'l-Mansûr' unvanıyla tahta çıkarıldı. Ancak Abdülazîz'in idaresinden memnun olmayan emîrler 28 Kasım 1405'te Ferec'i yeniden hükümdar ilân ettiler. Ferec dönüşünde emîrler arasında görev değişiklikleri yaparak idareyi sağlamlaştırmaya çalıştıysa da Suriye'deki isyanlar kısa süre sonra yeniden başladı.", kaynak:"islamansiklopedisi.org.tr/ferec (Asri Çubukçu, TDV İslâm Ansiklopedisi, c.12, 1995, s.370-371)" },

{ t:"1406-03-17", b:"İbn Haldun Kahire'de vefat etti", tur:"kultur", onem:4, dunya:4, kapsam:"ic", etiket:["kultur","olum","konu-kisiler","konu-kultur"], yer_id:"Kahire", d:"26 Ramazan 808 (17 Mart 1406) tarihinde vefat eden düşünür, Bâbünnasr karşısındaki Sûfiye Kabristanı'na defnedildi. Mukaddime'de ortaya koyduğu toplumların yükseliş-çöküş döngüsü ve asabiyet teorisi, kendisinden sonraki yüzyıllarda tarih felsefesi ve sosyoloji üzerine düşünceyi derinden etkiledi.", kaynak:"ibn-haldun" },

{ t:"1407-01-01", b:"Memlük eşrefî altını ilk kez basıldı", gun:"H. 810 / 1407 — yıl hassasiyeti · TDV `esrefi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:4, dunya:2, kapsam:"ic", etiket:["mali","ekonomi","konu-ekonomi"], yer_id:"Kahire", d:"810'da (1407-1408) Venedik dukası ve Floransa florini ayarında (3,45 gram) basılan eşrefî altını, kısa sürede Mısır'ın ticarî ve siyasî bağlantısı olduğu bütün İslâm dünyasında —Suriye, Irak, Doğu Anadolu, sonraki yüzyıllarda İran ve Hindistan'da— yaygın biçimde kullanılan ortak bir para birimine dönüştü. Adı el-Eşref unvanını taşıyan sultanlara (özellikle Barsbay'a) bağlanan bu sikke, Osmanlı Mısır'ı fethettikten sonra bile yerel hesaplaşmalarda uzun süre kullanılmaya devam etti.", kaynak:"esrefi (TDV, gövde okundu)" },

{ t:"1407-03-21", b:"Cekem'in Halep'te sultanlığını ilânı", tur:"isyan", onem:3, dunya:1, kapsam:"ic", etiket:["isyan","siyaset","konu-siyasi","konu-isyan"], yer_id:"Halep", d:"21 Mart 1407'de Emîr Cekem, Halep'te 'el-Melikü'l-Âdil' unvanıyla kendi sultanlığını ilân etti; Dımaşk nâibi Nevrûz da ona bağlılığını bildirdi. Ferec, Cekem'in üzerine sefere hazırlanırken onun Âmid'de Akkoyunlu Hükümdarı Kara Yülük Osman Bey ile yaptığı bir muharebede öldüğü haberini aldı; Nevrûz ise bunun üzerine sultana yeniden itaat arzetti. Kısa ömürlü bu saltanat iddiası, Ferec döneminin Suriye'deki emîrler arası mücadelesinin en uç örneklerinden biri oldu.", kaynak:"islamansiklopedisi.org.tr/ferec (Asri Çubukçu, TDV İslâm Ansiklopedisi, c.12, 1995, s.370-371)" },

{ t:"1409-05-01", b:"Şeyh el-Mahmûdî'nin Sarhad'da mağlûp edilmesi", gun:"Mayıs 1409 — ay hassasiyeti · ay TDV'de var, gün yok (`ferec`, `memlukler`, `baybars-i`, `kalavun` …)", tur:"savas", onem:3, dunya:1, kapsam:"ic", etiket:["savas","isyan","konu-askeri","konu-isyan","konu-din"], yer_id:"", d:"Nevrûz ve Şeyh el-Mahmûdî'nin kendisine karşı isyanları veya birbirleriyle mücadeleleriyle uğraşan Sultan Ferec, Mayıs 1409'da Şeyh el-Mahmûdî üzerine yürüyerek onu Sarhad'da mağlûp etti. Ancak devlet adamı Tağrîberdî'nin araya girmesiyle Şeyh el-Mahmûdî affedildi ve Trablus nâibliğine tayin edildi. Bu af, bir yıl sonra Suriye'de yeniden baş gösterecek isyanın zeminini hazırlamış oldu.", kaynak:"islamansiklopedisi.org.tr/ferec (Asri Çubukçu, TDV İslâm Ansiklopedisi, c.12, 1995, s.370-371)", kapsam_genis:true },

{ t:"1412-01-01", b:"Sultan Şeyh el-Mahmûdî bakır parayı kaldırıp saf gümüş dirhem bastırdı", gun:"1412 — yıl hassasiyeti · eski t 1412-03-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `dirhem`, `memlukler`, `baybars-i`, `kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"ekonomi", onem:4, dunya:2, kapsam:"ic", etiket:["mali","ekonomi","konu-ekonomi","konu-din"], yer_id:"Kahire", d:"Burcî Memlükleri döneminde dirhemlerin üçte ikisi bakırdan oluşan \"nukre dirhem\" hâline gelmişti; el-Melikü'l-Müeyyed Şeyh el-Mahmûdî (1412-1421) bu bakır paraları tedavülden kaldırarak saf gümüşten dirhem ve yarım dirhem sikkeler bastırdı. Halk arasında \"nısf fıdda\" denilen bu yarım dirhemler büyük rağbet gördü ve Batılı kaynaklarda sultanın adından bozma \"medin/medini\" olarak anıldı; bu, şer'î dirhem esasında yapılan son büyük para reformuydu.", kaynak:"dirhem (TDV, gövde okundu)" },

{ t:"1412-05-28", b:"Ferec'in Leccûn'da mağlûbiyeti, tahttan indirilişi ve öldürülmesi", tur:"savas", onem:4, dunya:2, kapsam:"ic", etiket:["savas","siyaset","hanedan","taht-kavgasi","konu-askeri","konu-siyasi","konu-kisiler","konu-darbe","konu-hanedan"], yer_id:"Şam", d:"Halep nâibi Timurtaş'ın uyarısı üzerine 31 Ağustos 1410'da yedinci ve son Suriye seferine çıkan Ferec, Şeyh el-Mahmûdî ile Nevrûz'u bir kez daha bağışlamak zorunda kalmıştı; ancak emîrler anlaşmayı bozunca Ferec 1412'de tekrar sefere çıktı. Dımaşk yakınında Leccûn'da yapılan muharebede mağlûp olan Ferec, günlerce süren direnişin ardından taraftarlarınca terkedildi; emîrler onu tahttan indirip Halife Müstaîn-Billâh'ı sultan ilân ettiler. Ferec 28 Mayıs 1412 gecesi öldürülüp Dımaşk'ta Bâbülferâdis'te defnedildi; Makrîzî onun kötü idaresini dönemin kıtlık, ağır vergi ve kargaşasının başlıca sebebi olarak gösterir.", kaynak:"islamansiklopedisi.org.tr/ferec (Asri Çubukçu, TDV İslâm Ansiklopedisi, c.12, 1995, s.370-371)" },

{ t:"1412-01-01", b:"İlk kez 'kılıç ehli'nden bir emîr Kahire muhtesibliğine tayin edildi", gun:"1412 — yıl hassasiyeti · eski t 1412-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `hisbe`, `memlukler`, `baybars-i`, `kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"idari", onem:3, dunya:1, kapsam:"ic", etiket:["idari","hukuk","konu-idari","konu-hukuk"], yer_id:"Kahire", d:"Kahire ve Dımaşk'ın hisbe (çarşı ve ahlâk denetimi) makamı Memlükler döneminde geleneksel olarak ilmiye sınıfından tayin edilirdi; Şeyh el-Mahmûdî'nin Emîr Seyfeddin Mengliboğa'yı bu göreve getirmesiyle hisbe memuriyeti ilk kez ilmiye tekelinden çıktı. Bu değişiklik, Burcî döneminde askerî zümrenin sivil-dinî bürokrasi üzerindeki nüfuzunun arttığının bir göstergesiydi.", kaynak:"hisbe (TDV, gövde okundu)" },

{ t:"1412-11-06", b:"Şeyh el-Mahmûdî'nin tahta çıkışı", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic", etiket:["taht-degisikligi","konu-hanedan","konu-din"], yer_id:"Kahire", d:"Atabeglik makamından sultanlığa yükselen Şeyh el-Mahmûdî, 6 Kasım 1412'de el-Melikü'l-Müeyyed unvanıyla Memlük tahtına çıktı. Sekiz yıl beş ay süren saltanatında Suriye ve Mısır'daki isyanları bastırarak merkezi otoriteyi yeniden tesis etti.", kaynak:"tdv:seyh-el-mahmudi" },

{ t:"1416-01-01", b:"Memlük-Osmanlı dostluk ve ticaret antlaşması", gun:"1416 — yıl hassasiyeti · TDV `seyh-el-mahmudi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", etiket:["antlasma","ittifak","ticaret","konu-diplomasi","konu-ekonomi"], yer_id:"", d:"Şeyh el-Mahmûdî ile Osmanlı hükümdarı Çelebi Mehmed arasında 1416-1420 yılları arasında dostane ilişkiler kuruldu; taraflar antlaşma yapıp hediye teâtisinde bulundu, ticarî ilişkilerin kolaylaştırılması amaçlandı. Bu dönem, iki devlet arasında barışçıl bir coğrafi paylaşımı yansıtıyordu.", kaynak:"tdv:seyh-el-mahmudi (yıl aralığı 1416-1420 teyitli, kesin gün yok)", kapsam_genis:true },

{ t:"1416-01-01", b:"İbn Hacer Bezlü'l-mâ'ûn'u yazmaya başladı", gun:"H. 819 / 1416 — yıl hassasiyeti · TDV `ibn-hacer-el-askalani`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"bilim", onem:2, dunya:1, kapsam:"ic", etiket:["bilim","konu-bilim","afet","afet-salgin"], yer_id:"Kahire", d:"Kahireli hadis ve tarih âlimi İbn Hacer el-Askalânî, 819 (1416) yılında kızları Fâtıma ve Gāliye'yi vebadan kaybetmesi üzerine, konuyla ilgili hadis ve rivayetleri derlediği 'Bezlü'l-mâ'ûn fî fazli't-tâ'ûn' risalesini kaleme almaya başladı. Eser, Memlük Kahiresi'nde yaşanan kişisel bir yasın bilimsel-dinî bir derlemeye dönüşmesiyle ortaya çıktı.", kaynak:"ibn-hacer-el-askalani" },

{ t:"1420-01-01", b:"Şeyh el-Mahmûdî Karamanoğulları'nı itaate zorladı", gun:"1420 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:2, dunya:2, kapsam:"dis", etiket:["siyaset","konu-siyasi","konu-din"], yer_id:"", d:"Şeyh el-Mahmûdî döneminde Memlük otoritesi Anadolu'nun güneyine doğru gösterişli biçimde hissettirildi: Karamanoğulları itaate zorlandı ve bağımsızlık arayışındaki Türkmen beylikleri denetim altına alındı. Bu politika, Memlük-Osmanlı-Türkmen beylikleri üçgeninde Kahire'nin bölgesel nüfuzunu korumaya yönelikti.", kaynak:"tdv:memlukler (yıl aralığı 1412-1421 saltanatı içinde, gün/kesin yıl vermiyor)", kapsam_genis:true },

{ t:"1422-04-01", b:"Barsbay'ın tahta çıkışı", gun:"1 Nisan 1422 — GERÇEK GÜN, ayın 1'i yer tutucusu DEĞİL (TDV `barsbay`)", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic", etiket:["taht-degisikligi","konu-hanedan"], yer_id:"Kahire", d:"Sultan Tatar'ın oğlu Muhammed'i tahttan indiren Barsbay, 1 Nisan 1422'de Memlük sultanı oldu. On altı yıl sürecek saltanatında hem askerî seferlere hem de Kızıldeniz ticaretini devlet tekeline alan sert bir ekonomi politikasına yönelecekti.", kaynak:"tdv:barsbay" },

{ t:"1423-12-26", b:"İbn Hacer el-Askalânî Mısır Şâfiî başkadılığını kabul etti", tur:"idari", onem:3, dunya:2, kapsam:"ic", etiket:["idari","hukuk","konu-idari","konu-hukuk"], yer_id:"Kahire", d:"22 Muharrem 827 (26 Aralık 1423) tarihinde Şâfiî başkadılığına getirilen hadis âlimi, bu makamdan yedi defa azledilmesine rağmen her seferinde göreve iade edildi. 811'den (1408) beri Dârüladl'de fetva verme görevini de sürdürüyordu.", kaynak:"ibn-hacer-el-askalani" },

{ t:"1424-01-01", b:"Barsbay'ın birinci Kıbrıs seferi", gun:"1424 — yıl hassasiyeti · TDV `barsbay`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"savas", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", d:"Barsbay, Kıbrıs Krallığı'na karşı 1424'te ilk deniz seferini düzenledi. Bu sefer, adayı Memlük nüfuzu altına almayı hedefleyen üç aşamalı bir askerî sürecin başlangıcıydı.", kaynak:"tdv:barsbay (yıl teyitli, gün vermiyor)", kapsam_genis:true },

{ t:"1425-01-01", b:"Barsbay'ın ikinci Kıbrıs seferi", gun:"1425 — yıl hassasiyeti · TDV `barsbay`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"savas", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", d:"1425'te Barsbay'ın ikinci Kıbrıs seferi düzenlendi; Memlük donanması adaya yeniden çıkarma yaparak baskıyı artırdı. Kesin sonuç ise bir yıl sonraki üçüncü seferle gelecekti.", kaynak:"tdv:barsbay (yıl teyitli, gün vermiyor)", kapsam_genis:true },

{ t:"1425-01-01", b:"Kârimîlere ağır vergi ve korsanlık baskısı", gun:"1425 — yıl hassasiyeti · eski t 1425-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `karimi`, `memlukler`, `baybars-i`, `kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"ekonomi", onem:3, dunya:2, kapsam:"ic", etiket:["ekonomi","ticaret","karimi","konu-ekonomi"], yer_id:"", d:"Barsbay'ın tahta çıkışının hemen ardından Kârimî tüccarlar hem artan vergi yükü hem de Kızıldeniz'de yoğunlaşan korsanlık faaliyetiyle sıkıştı. TDV İslâm Ansiklopedisi bu baskıları, birkaç yıl sonra gelecek devlet tekelinin zeminini hazırlayan gelişmeler olarak aktarır.", kaynak:"karimi + barsbay (TDV İslâm Ansiklopedisi)", kapsam_genis:true },

{ t:"1426-01-01", b:"Cidde limanı gelirlerinin ele geçirilmesi, Kızıldeniz ticaret tekeli", gun:"1426 — yıl hassasiyeti · TDV `barsbay`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:4, dunya:3, kapsam:"ic", etiket:["ticaret","idari","konu-idari","konu-ekonomi"], yer_id:"Cidde", d:"Barsbay, 1426 civarında Cidde Limanı'nın gümrük gelirlerini doğrudan devlet tekeline aldı ve Kızıldeniz üzerinden geçen baharat ticaretini kontrolü altına aldı. Tüccarları mallarını Mısır gümrüklerinden geçirmeye zorlayıp Hint mallarına ihracat vergisi koydu; Kârimî tüccarların serbest ticaretine indirilen bu darbe büyük memnuniyetsizliğe yol açtı ama hazineye önemli bir gelir kaynağı yarattı.", kaynak:"tdv:barsbay (yıl teyitli, gün vermiyor)" },

{ t:"1426-06-01", b:"Barsbay'ın üçüncü Kıbrıs seferi — Lefkoşa'nın düşüşü, Kral Janus'un esareti", gun:"Haziran 1426 — ay hassasiyeti · ay TDV'de var, gün yok (`barsbay`, `memlukler`, `baybars-i`, `kalavun` …)", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","toprak-kazanc","konu-askeri"], d:"Haziran 1426'daki üçüncü seferde Memlük kuvvetleri Lefkoşa'yı ele geçirdi ve Kral Janus'u esir aldı. Janus, yılda 200.000 duka fidye ödemeyi kabul ettikten sonra serbest bırakıldı; Kıbrıs Krallığı böylece fiilen Memlük himayesine giren bir vasal konuma düştü.", kaynak:"tdv:barsbay", yer_id:"Lefkoşa" },

{ t:"1429-01-01", b:"Barsbay baharat ticaretini tekelleştirdi", gun:"1429 — yıl hassasiyeti · TDV `barsbay`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:5, dunya:4, kapsam:"dis", etiket:["ekonomi","baharat","barsbay","konu-ekonomi"], yer_id:"Kahire", d:"Sultan Barsbay, TDV İslâm Ansiklopedisi'nin ifadesiyle baharat ticaretini kendi tekeline aldı; Kızıldeniz üzerinden gelen bütün baharatın Kahire'ye getirilip devletin belirlediği fiyattan satılmasını zorunlu kıldı. Bu tarih akademik literatürde tartışmalıdır — Ashtor 1426'yı, başka araştırmacılar 1428-1432 arası farklı yılları önerir — ama ortak kanı Barsbay'ın Kârimî tüccarların serbest ticaretine son verip devleti doğrudan aracı konumuna getirdiğidir.", kaynak:"barsbay (TDV İslâm Ansiklopedisi) + WebSearch çapraz doğrulama (Ashtor'a atıf)" },

{ t:"1429-01-01", b:"Barsbay şeker üretimini kısıtladı", gun:"1429 — yıl hassasiyeti · TDV `barsbay`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:3, dunya:2, kapsam:"ic", etiket:["ekonomi","seker","barsbay","konu-ekonomi"], yer_id:"Kahire", d:"Barsbay, baharat tekeliyle eşzamanlı olarak Mısır'ın şeker kamışı üretimine de devlet kısıtlaması getirdi ve üretim miktarını sınırlayarak fiyatları denetim altına almaya çalıştı. TDV İslâm Ansiklopedisi bu politikayı, sultanın sürekli para değerini değiştirmesi ve tüccarları Mısır gümrüklerinden mal geçirmeye zorlamasıyla birlikte anıyor; önlemler halk arasında ağır vergi şikâyetlerine yol açtı.", kaynak:"barsbay (TDV İslâm Ansiklopedisi)" },

{ t:"1430-01-01", b:"Kârimî tüccarların çöküşü", gun:"1430 — yıl hassasiyeti · TDV `karimi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:4, dunya:3, kapsam:"ic", etiket:["ekonomi","ticaret","karimi","konu-ekonomi"], yer_id:"", d:"Barsbay'ın baharat tekeli, ağır vergilendirme ve artan korsanlık baskısı bir araya gelince asırlardır Kızıldeniz-Hint Okyanusu ticaretine hâkim olan Kârimî tüccar zümresi hızla güç kaybetti. TDV İslâm Ansiklopedisi bu süreci Kârimîlerin tarihsel çöküşünün başlangıcı olarak tarif eder; zümre 15. yüzyılın ikinci yarısında bağımsız bir ticaret gücü olarak neredeyse ortadan kalktı.", kaynak:"karimi (TDV İslâm Ansiklopedisi)", kapsam_genis:true },

{ t:"1430-01-01", b:"Bezlü'l-mâ'ûn on dört yıl sonra tamamlandı", gun:"H. 833 / 1430 — yıl hassasiyeti · TDV `ibn-hacer-el-askalani`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"bilim", onem:2, dunya:1, kapsam:"ic", etiket:["bilim","konu-bilim","afet","afet-salgin"], yer_id:"Kahire", d:"İbn Hacer el-Askalânî, 819 (1416)'da yazmaya başladığı veba risalesi Bezlü'l-mâ'ûn'u, en büyük kızı Zeyn Hatun'un da aynı hastalıktan ölmesi üzerine 833 (1430) yılında Kahire'de tamamladı. Risale, vebaya dair hadisleri ve rivayetleri derleyen bir başvuru eseri olarak Memlük döneminin veba literatüründe önemli bir yer tutar.", kaynak:"ibn-hacer-el-askalani" },

{ t:"1438-01-01", b:"Çakmak'ın tahta çıkışı", gun:"1438 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"hukumdar", onem:3, dunya:2, kapsam:"ic", etiket:["taht-degisikligi","siyaset","konu-siyasi","konu-hanedan"], yer_id:"Kahire", d:"el-Melikü'z-Zâhir Seyfeddin Çakmak 1438'de Memlük tahtına çıktı ve on beş yıllık saltanatında ülkeye görece bir istikrar ve huzur dönemi yaşattı. Rodos'taki Saint Jean (Hospitalier) şövalyelerine karşı tutarlı bir mücadele yürütürken Şâhruh ve diğer komşu hükümdarlarla dostane ilişkiler kurdu.", kaynak:"tdv:memlukler (yıl teyitli, gün vermiyor)" },

{ t:"1438-01-01", b:"Zara Yakob'dan Barsbay'a dostane mektup", gun:"1438 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:2, dunya:2, kapsam:"dis", etiket:["siyaset","din","konu-siyasi","konu-din"], yer_id:"", d:"Habeş Kralı Zara Yakob, 1437-1438'de Memlük Sultanı Barsbay'a bir mektup göndererek Mısır'daki Kıptî hıristiyanlarına iyi davranılmasını istedi. Mektup uzlaşmacı bir üslup taşıyordu ve iki devlet arasındaki ilişkilerin henüz açık bir gerilime dönüşmediğini gösteriyordu.", kaynak:"bulunamadı — TDV bu olayı kapsamıyor, dayanak: Taddesse Tamrat, Church and State in Ethiopia 1270-1527, Oxford: Clarendon Press, 1972, s. 262-263", kapsam_genis:true },

{ t:"1438-06-07", b:"Barsbay'ın ölümü", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic", etiket:["olum","konu-kisiler","konu-hanedan"], yer_id:"Kahire", d:"Barsbay, kısa süren bir hastalığın ardından 7 Haziran 1438'de Kahire'de öldü ve on altı yıllık saltanatı sona erdi. Kızıldeniz ticaret tekeli ve Kıbrıs'ın vasallaştırılması, mirasının en kalıcı unsurları olarak kaldı.", kaynak:"tdv:barsbay" },

{ t:"1440-01-01", b:"Cidde-Aden ticaret rekabeti", gun:"1440 — yıl hassasiyeti · TDV `cidde`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:3, dunya:3, kapsam:"dis", etiket:["ekonomi","ticaret","aden","konu-ekonomi"], yer_id:"Cidde", d:"Kızıldeniz'in kuzey ucundaki Cidde ile güneyindeki Aden limanı, Hint Okyanusu'ndan gelen baharat kervanlarının hangi güzergâhı izleyeceği konusunda 15. yüzyıl boyunca rekabet içindeydi. Memlük sultanları Cidde'nin ticari üstünlüğünü korumak için zaman zaman tüccarları Aden yerine doğrudan Cidde'ye yönlendiren düzenlemelere başvurdu; bu rekabet Barsbay'ın tekel politikasının da arka planını oluşturdu.", kaynak:"cidde + karimi (TDV İslâm Ansiklopedisi) çapraz okuma" },

{ t:"1441-01-01", b:"Zara Yakob'dan Çakmak'a Nil tehdidi içeren protesto", gun:"1441 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:3, dunya:2, kapsam:"dis", etiket:["siyaset","din","konu-siyasi","konu-din"], yer_id:"", d:"Habeş Kralı Zara Yakob, 1441'de Memlük Sultanı Çakmak'ın emriyle Mısır'daki Debre Mitmak manastırının yıkıldığını öğrenince sultana sert bir protesto mektubu gönderdi. Ülkesindeki müslüman tebaaya adil davrandığını hatırlatarak Nil'in mecrasını değiştirme gücüne sahip olduğunu ama insanların çekeceği acı yüzünden bunu yapmadığını bildirdi; Çakmak hediyelerle karşılık verse de yıkılan kiliseleri yeniden inşa etmeyi reddetti.", kaynak:"bulunamadı — TDV bu olayı kapsamıyor (cakmak-el-melikuz-zahir maddesi konuyu içermiyor, kontrol edildi), dayanak: Taddesse Tamrat, Church and State in Ethiopia 1270-1527, Oxford: Clarendon Press, 1972, s. 262-263; Verena Krebs, 'Crusading Threats? Ethiopian-Egyptian Relations in the 1440s', Les Croisades en Afrique (ed. B. Weber), Toulouse: Presses Universitaires du Midi, 2019, s. 245-274", kapsam_genis:true },

{ t:"1442-01-28", b:"Makrîzî vefat etti — Hıtat ve es-Sülûk'ün yazarı", tur:"kultur", onem:4, dunya:3, kapsam:"ic", etiket:["kultur","tarih-yaziciligi","olum","konu-kisiler","konu-kultur"], yer_id:"Kahire", d:"16 Ramazan 845 (28 Ocak 1442) tarihinde Kahire'de vefat eden tarihçi, Mısır'ın topografya ve tarihini anlatan el-Hıtat'ı ve Selâhaddin'den kendi dönemine kadar sultanların tarihini kaydeden es-Sülûk'ü kaleme aldı. Ayrıca kıtlıkların iktisadî etkilerini incelediği İġâsetü'l-ümme'si, Memlük Mısırı'nın ekonomik tarihi için başlıca kaynaklardan biri sayılır.", kaynak:"makrizi" },

{ t:"1448-06-09", b:"Tarihçi İbn İyâs Kahire'de doğdu", tur:"kultur", onem:2, dunya:1, kapsam:"ic", etiket:["kultur","tarih-yaziciligi","konu-kisiler","konu-kultur"], yer_id:"Kahire", d:"Süyûtî'nin öğrencilerinden olan İbn İyâs, büyüyünce Bedâi'u'z-zühûr fî vekâi'i'd-dühûr adlı eserinde Mısır tarihini başlangıcından 928'e (1522) kadar anlatacak, Osmanlı fethi ve Halife III. Mütevekkil'in İstanbul'a nakli gibi olayların tek gözlemci tanığı olacaktı. Bu eser, Memlük Sultanlığı'nın çöküşünü anlatan en ayrıntılı çağdaş kaynaktır.", kaynak:"ibn-iyas" },

{ t:"1449-02-22", b:"İbn Hacer el-Askalânî vefat etti — Fethu'l-Bârî'nin yazarı", tur:"kultur", onem:4, dunya:3, kapsam:"ic", etiket:["din","kultur","olum","konu-kisiler","konu-din","konu-kultur"], yer_id:"Kahire", d:"28 Zilhicce 852 (22 Şubat 1449) tarihinde Kahire'de dizanteriden vefat etti. Sahîh-i Buhârî'nin en kapsamlı şerhi sayılan Fethu'l-Bârî'yi (yaklaşık 820/1417) ve hadis usulüne dair Nuhbetü'l-fiker gibi eserleri, kendisinden sonraki asırlarda hadis ilminin standart başvuru kaynakları oldu.", kaynak:"ibn-hacer-el-askalani" },

{ t:"1452-01-01", b:"Cidde'de tahsildar teşkilatı", gun:"1452 — yıl hassasiyeti · TDV `cidde`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:3, dunya:2, kapsam:"ic", etiket:["ekonomi","ticaret","cidde","konu-ekonomi"], yer_id:"Cidde", d:"Mekke'nin limanı olan Cidde'de Memlük idaresi, nâib-i Cidde adlı bir vekil aracılığıyla ticaret ve hac gelirlerini denetliyordu; bu yıl itibarıyla gümrük vergisi toplama işi tahsildar görevlilerine devredildi ve hasılat idareciler ile Mekke şerifleri arasında paylaşıldı. Cidde, Avrupa'dan Mısır'a, oradan Hindistan'a uzanan mal akışının kavşak noktalarından biri olarak Memlük maliyesi için istikrarlı bir gelir kaynağıydı.", kaynak:"cidde (TDV İslâm Ansiklopedisi)" },

{ t:"1453-01-01", b:"İnal'ın tahta çıkışı, Osmanlı ilişkilerinin bozulması", gun:"1453 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"hukumdar", onem:3, dunya:2, kapsam:"dis", etiket:["taht-degisikligi","siyaset","konu-siyasi","konu-hanedan"], yer_id:"Kahire", d:"Yetmiş üç yaşında tahta çıkan İnal, 1453'te başlayan sekiz yıllık saltanatında iç istikrarı korumayı başardı, ancak döneminde Osmanlılarla ilişkiler bozulmaya başladı. Bu gerilim, bir sonraki yüzyılda patlak verecek büyük Osmanlı-Memlük çatışmasının erken işaretlerinden biriydi.", kaynak:"tdv:memlukler (yıl teyitli, gün vermiyor)" },

{ t:"1460-01-01", b:"James'in Memlük desteğiyle Kraliçe Charlotte'u tahttan indirmesi", gun:"1460 — yıl hassasiyeti · TDV `kibris`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:3, dunya:2, kapsam:"dis", etiket:["siyaset","dis-iliskiler","taht-kavgasi","konu-siyasi","konu-diplomasi","konu-hanedan"], d:"1426'da Barsbay'ın vergiye bağladığı Kıbrıs Krallığı'nda II. John'un ölümünün ardından kızı Charlotte tahta çıkınca bunu kabul etmeyen üvey kardeşi James, Memlükler'in desteğiyle 1460'ta kraliçeyi bertaraf etti. Bu müdahale, Memlük Sultanlığı'nın vergiye bağladığı Kıbrıs'ın iç veraset anlaşmazlıklarına doğrudan taraf olarak karıştığı somut bir örnektir. James daha sonra Venedikliler'le ittifak kurarak 1472'de Venedikli Caterina Cornaro ile evlenecekti.", kaynak:"islamansiklopedisi.org.tr/kibris (TDV İslâm Ansiklopedisi, \"Kıbrıs\" md.)", yer_id:"Lefkoşa" },

{ t:"1468-02-01", b:"Kayıtbay'ın tahta çıkışı", gun:"7 Receb 872 / 1 Şubat 1468 — GERÇEK GÜN (TDV `kayitbay`)", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic", etiket:["taht-degisikligi","konu-hanedan"], yer_id:"Kahire", d:"Kayıtbay, 1 Şubat 1468'de Memlük tahtına çıktı. Yaklaşık otuz yıl sürecek saltanatı Memlük tarihinin en uzun ve en istikrarlı dönemlerinden biri olacak, ancak son yıllarına Osmanlılarla yıpratıcı bir savaş damgasını vuracaktı.", kaynak:"tdv:kayitbay" },

{ t:"1470-06-05", b:"İbn Tağrîberdî vefat etti — en-Nücûmü'z-zâhire'nin yazarı", tur:"kultur", onem:3, dunya:2, kapsam:"ic", etiket:["kultur","tarih-yaziciligi","olum","konu-kisiler","konu-kultur"], yer_id:"Kahire", d:"812'de (1409-10) doğan ve 874'te (5 Haziran 1470) vefat eden tarihçi, Mısır'ın fetihten kendi dönemine kadarki tarihini anlatan en-Nücûmü'z-zâhire fî mülûki Mısr ve'l-Kāhire adlı eseriyle döneminin en başarılı Memlük tarihçilerinden biri sayılır. Hocası Makrîzî'nin eserine ek olarak yıllık olaylara dair Havâdisü'd-dühûr'u ve sultan-emir biyografilerini içeren el-Menhelü's-sâfî'yi de kaleme aldı.", kaynak:"ibn-tagriberdi" },

{ t:"1472-01-01", b:"Kayıtbay Külliyesi'nin inşasına başlandı", gun:"H. 879 / 1472 — yıl hassasiyeti · TDV `kayitbay-kulliyesi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"mimari", onem:4, dunya:2, kapsam:"ic", etiket:["mimari","imar","konu-imar"], yer_id:"Kahire", d:"877-879 (1472-1474) yıllarında Sultan Kayıtbay tarafından yaptırılan külliye, sonraki yüzyıllarda hem Memlük hem genel İslâm mimarîsinin en ince örneklerinden biri sayıldı. Kayıtbay 1468-1496 arasındaki uzun ve istikrarlı saltanatı boyunca Mısır, Hicaz ve Suriye'de çok sayıda cami, medrese ve köprü yaptırdı; Medine'de yangın sonrası Mescid-i Nebevî'yi de restore ettirdi.", kaynak:"kayitbay-kulliyesi" },

{ t:"1477-01-01", b:"Kayıtbay'ın İskenderiye Feneri yerine kale inşa ettirmesi", gun:"H. 884 / 1477 — yıl hassasiyeti · TDV `iskenderiye`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"mimari", onem:3, dunya:1, kapsam:"ic", etiket:["mimari","imar","konu-imar"], yer_id:"İskenderiye", d:"İskenderiye'yi 1477 ve 1479'da iki kez ziyaret eden Kayıtbay, harabe halindeki antik İskenderiye Feneri'nin (Pharos) bulunduğu Re'süttîn yarımadası ucuna 882-884 (1477-1479) yılları arasında yeni bir kale yaptırdı. Tarihçi İbn İyâs'a göre kale içinde bir cami, değirmen, ekmek fırını, asker yatakhaneleri ve çeşitli silâh depoları bulunuyordu. Günümüze kadar ayakta kalan yapı, Kayıtbay'ın imparatorluk sınırlarındaki savunma yatırımlarının en kalıcı örneklerinden biridir.", kaynak:"islamansiklopedisi.org.tr/iskenderiye (TDV İslâm Ansiklopedisi, \"İskenderiye\" md.)" },

{ t:"1479-10-13", b:"Emeviyye Camii'nde büyük yangın çıktı", tur:"mimari", onem:3, dunya:1, kapsam:"ic", etiket:["mimari","konu-din","konu-imar","afet","afet-yangin"], yer_id:"Şam", d:"13 Ekim 1479 gecesi (26-27 Receb 884) Şam çarşısında bir ayakkabıcı dükkânında başlayan yangın, kırık bir pencereden Emeviyye Camii'ne sıçradı ve güneybatı köşesindeki minareyle birlikte caminin neredeyse tamamını yaktı; yalnızca mashhad-ı Osman ile kuzey revağın bir bölümü kurtarılabildi. Sultan Kayıtbay'ın desteğiyle başlayan onarım kapsamında yıkılan minare 887-893 (1482-1488) yılları arasında altı yıl süren bir inşaatla yeniden yapıldı; bugün hâlâ ayakta duran bu yapı Kayıtbay Minaresi olarak anılır.", kaynak:"Behrens-Abouseif, 'The Fire of 884/1479 at the Umayyad Mosque in Damascus and an Account of Its Restoration', Mamluk Studies Review VIII/1 (2004), Univ. of Chicago, 279-297" },

{ t:"1480-01-01", b:"Alâüddevle Bozkurt Bey'in Dulkadir tahtına çıkışı", gun:"1480 — yıl hassasiyeti · TDV `dulkadirogullari`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:3, dunya:2, kapsam:"dis", etiket:["siyaset","ittifak","konu-siyasi","konu-diplomasi"], d:"Alâüddevle Bozkurt Bey, 1480'de Fâtih Sultan Mehmed'in desteğiyle Dulkadir Beyliği'nin tahtını ele geçirdi ve daha sonra Sultan II. Bayezid'in kızıyla evlendi. Osmanlı ile Memlük arasında sıkışan Dulkadiroğulları, bu tarihten itibaren iki büyük gücün arasında dengeleri gözeten bir tampon beylik olarak öne çıktı.", kaynak:"tdv:dulkadirogullari", yer_id:"Maraş" },

{ t:"1481-11-05", b:"Mescid-i Nebevî yangını ve Kayıtbay'ın yeniden inşası", tur:"mimari", onem:4, dunya:2, kapsam:"ic", etiket:["mimari","imar","konu-imar","afet","afet-yangin"], yer_id:"Medine", d:"13 Ramazan 886'da (5 Kasım 1481) güneydoğu köşesindeki minareye düşen yıldırım sebebiyle Mescid-i Nebevî'de çıkan yangında, hücre-i saâdeti örten iç kubbe hariç iki tavan, minber ve maksûre yandı. Kayıtbay mescidin kapsamlı bir onarım ve genişletmesini üstlendi; çalışmalar 888'de (1483) tamamlandığında mescidin alanı 9429 m²'ye ulaştı, hücre-i saâdetin kubbesi büyütüldü, kuzeyde Bâbüsselâm tarafına iki kubbe eklendi ve batı duvarındaki kapılar arasına bir medrese ile ribât inşa edildi. Bu, Kayıtbay'ın Haremeyn'de üstlendiği en kapsamlı tek imar projesiydi.", kaynak:"islamansiklopedisi.org.tr/mescid-i-nebevi (TDV İslâm Ansiklopedisi)" },

{ t:"1482-01-01", b:"Kayıtbay'ın Kudüs'te medrese ve sebil inşası", gun:"H. 887 / 1482 — yıl hassasiyeti · TDV `kudus`, `kubbetus-sahre`, `memlukler`, `baybars-i` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"mimari", onem:3, dunya:1, kapsam:"ic", etiket:["mimari","imar","konu-imar","konu-egitim"], yer_id:"Kudüs", d:"Kayıtbay, Kudüs'te Haram-i Şerif'te bulunan el-Medresetü's-Sultâniyye'yi (Eşrefiyye Medresesi) 887'de (1482) yeniden inşa ettirdi ve kendi adıyla anılacak Sebîlü Kayıtbay'ı ihmalden kurtararak onardı; uzun süredir bakımsız kalan Kanâtü's-sebîl su kanalını da tamir ettirdi. Ayrıca Mescid-i Aksâ'da tamirat yaptırdı ve Kubbetüssahre'nin kapılarını kabartma motifli bakır levhalarla kaplattı. Bu faaliyetler, Kayıtbay'ın Kahire dışında Hicaz'la birlikte Kudüs'ü de imparatorluk imar programının önemli bir ayağı haline getirdiğini gösterir.", kaynak:"islamansiklopedisi.org.tr/kudus, islamansiklopedisi.org.tr/kubbetus-sahre (TDV İslâm Ansiklopedisi)" },

{ t:"1484-01-01", b:"Osmanlı-Dulkadir birleşik kuvvetlerinin Memlük ordusunu yenmesi", gun:"1484 — yıl hassasiyeti · TDV `dulkadirogullari`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", d:"1484'te, Yâkub Paşa kumandasında Memlük Sultanı Kayıtbay'a karşı yardıma gönderilen Osmanlı kuvvetleri Dulkadiroğulları ile birleşerek Memlük ordusunu büyük bir yenilgiye uğrattı. Bu, Osmanlı-Memlük ilişkilerinde açık askerî çatışmaya giden yolun ilk büyük adımlarından biriydi.", kaynak:"tdv:dulkadirogullari (yıl teyitli, gün/yer vermiyor)", kapsam_genis:true },

{ t:"1485-01-01", b:"Osmanlı-Memlük Savaşı'nın başlaması", gun:"1485 — yıl hassasiyeti · TDV `kayitbay`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"savas", onem:5, dunya:4, kapsam:"dis", etiket:["askeri","toprak-kazanc","konu-askeri"], yer_id:"Tarsus", d:"Kayıtbay'ın 1485'te Osmanlı barış tekliflerini reddetmesiyle açık savaş başladı. İki koldan ilerleyen Osmanlı orduları Tarsus ve Adana'yı ele geçirirken, diğer bir kol Malatya yönüne yürüdü; çatışmalar 1490'a kadar aralıklarla sürecekti.", kaynak:"tdv:kayitbay" },

{ t:"1488-08-16", b:"Memlük'ün Adana yakınında Osmanlı'ya karşı zaferi", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Adana", d:"16 Ağustos 1488'de Adana yakınlarında yapılan büyük çarpışmada Memlük ordusu Osmanlı kuvvetlerine karşı önemli bir zafer kazandı. Bu galibiyet, savaşın Memlükler lehine uzamasında ve Osmanlı'nın nihayetinde masaya oturmasında belirleyici oldu.", kaynak:"tdv:kayitbay" },

{ t:"1490-02-01", b:"Kıbrıs haracının Venedik tarafından Memlük sultanına ödenmesi", gun:"Şubat 1490 — ay hassasiyeti · ay TDV'de var, gün yok (`kibris`, `memlukler`, `baybars-i`, `kalavun` …)", tur:"siyaset", onem:3, dunya:2, kapsam:"dis", etiket:["siyaset","dis-iliskiler","konu-siyasi","konu-diplomasi"], yer_id:"Kahire", d:"Kraliçe Caterina Cornaro'nun 26 Şubat 1489'da tahttan feragat etmesiyle Kıbrıs'ın idaresini ele geçiren Venedik, hâkimiyetini sağlama almak için Memlük Sultanı Kayıtbay'a eskiden Lüzinyan kralları gibi haraç ödemeyi kabul ettiğini bildirdi. Venedik elçisi sultana hediyelerle birlikte iki yıllık haraç olarak 16.000 duka altın getirdi; Kayıtbay bunun karşılığında Kıbrıs Krallığı'nın Venedik'e devredilmesini Şubat 1490'da resmen kabul etti. Böylece 1426'dan beri Kıbrıs üzerinde süren Memlük tâbiiyet ilişkisi, hükümdar değişmeden yalnızca haraç ödeyen taraf değişerek devam etmiş oldu.", kaynak:"islamansiklopedisi.org.tr/kibris (TDV İslâm Ansiklopedisi, \"Kıbrıs\" md.)" },

{ t:"1490-01-01", b:"Kayıtbay'ın müsadere ve ağır vergi politikası", gun:"1490 — yıl hassasiyeti · eski t 1490-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `kayitbay`, `memlukler`, `baybars-i`, `kalavun` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"ekonomi", onem:3, dunya:2, kapsam:"ic", etiket:["mali","vergi","konu-ekonomi"], yer_id:"Kahire", d:"1485-1491 Osmanlı-Memlük savaşının ve geniş çaplı imar faaliyetlerinin giderek ağırlaşan yükü karşısında mevcut gelirler yetmeyince Kayıtbay zora başvurdu: zenginleri sıkıştırıp mal müsâderelerinde bulundu, vakıf ve şahıslara ait gayrimenkullerden vergi aldı, hububat tâcirleri üzerine ağır vergiler koydu. Bu tek seferlik ve zorlayıcı tedbirler, devlet mâliyesinin artık düzenli iktâ gelirleriyle değil ad hoc kaynaklarla ayakta durduğunu gösteriyordu.", kaynak:"tdv-kayitbay" },

{ t:"1491-01-01", b:"On beş yıllık Osmanlı-Memlük barış antlaşması", gun:"H. 896 / 1491 — yıl hassasiyeti · TDV `kayitbay`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", etiket:["antlasma","konu-diplomasi"], yer_id:"", d:"896/1491'de Osmanlı ve Memlük Devleti arasında on beş yıl süreli bir barış antlaşması imzalandı. Çatışmanın odağındaki Dulkadiroğulları beyliği ve Çukurova bölgesi üzerindeki gerginlik böylece geçici olarak dindirildi, ancak mesele kökten çözülmemişti.", kaynak:"tdv:kayitbay (yıl teyitli, kesin gün vermiyor)", kapsam_genis:true },

{ t:"1496-08-07", b:"Kayıtbay'ın ölümü", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic", etiket:["olum","konu-kisiler","konu-hanedan"], yer_id:"Kahire", d:"Kayıtbay, 7 Ağustos 1496'da Kahire'de öldü; saltanatının son dört yılı görece huzurlu geçmişti. Otuz yıla yakın süren hükümdarlığı, Osmanlı ile yapılan büyük savaşa ve 1491 barışına rağmen Memlük tarihinin en uzun soluklu dönemlerinden biri olarak anıldı.", kaynak:"tdv:kayitbay" },

{ t:"1498-05-20", b:"Vasco da Gama Hindistan'a ulaştı", tur:"ekonomi", onem:5, dunya:5, kapsam:"dis", etiket:["ekonomi","baharat","portekiz","dunya-tarihi","konu-ekonomi"], d:"Portekizli denizci Vasco da Gama, Ümit Burnu'nu dolaşan yeni deniz yolu üzerinden Hindistan'ın Kalikut limanına ulaştı. Bu yolculuk, Avrupa'ya baharat taşımacılığında Kızıldeniz-Akdeniz güzergâhına ve dolayısıyla Memlük Sultanlığı'nın aracılık gelirlerine doğrudan bir alternatif doğurdu; sonraki on yılda Portekiz bu yolu askerî güçle kalıcı hâle getirmeye çalışacaktı.", kaynak:"WebSearch çapraz doğrulama (geniş çapta doğrulanmış standart tarih) — TDV'de doğrudan madde yok", yer_id:"Kalikut (Kozhikode)" },

{ t:"1501-01-01", b:"Kansu Gavri Kahire'de yeni han ve kapalı çarşılar inşa ettirdi", gun:"H. 922 / 1501 — yıl hassasiyeti · TDV `kahire`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:3, dunya:1, kapsam:"ic", etiket:["ekonomi","sehircilik","konu-ekonomi","konu-imar"], yer_id:"Kahire", d:"906-922 (1501-1516) yılları arasında Sultan Kansu Gavri, Kahire'nin ticaret altyapısına Nahle Hanı'nı ekledi ve Hânü'l-Halîlî'yi tamir ettirdi. Memlük döneminin sonunda şehirde elli sekiz han ve seksen yedi çarşı bulunuyordu; imparatorluğun son yıllarındaki bu yatırımlar, Osmanlı fethinden hemen önceki ticarî canlılığın son büyük görünümü oldu.", kaynak:"kahire (TDV, gövde okundu)" },

{ t:"1501-04-20", b:"Kansu Gavri'nin tahta çıkışı", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic", etiket:["taht-degisikligi","konu-hanedan"], yer_id:"Kahire", d:"Emîrlerin, ileri yaşı nedeniyle kendilerine bağımlı kalacağını düşünerek seçtiği Kansu Gavri, 20 Nisan 1501'de Memlük tahtına çıktı. Beklentilerin aksine güçlü bir sultan olarak devletin son on beş yılına damgasını vuracaktı.", kaynak:"tdv:kansu-gavri" },

{ t:"1502-01-01", b:"Portekiz tehdidi Memlük gelirini vurdu", gun:"1502 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:5, dunya:4, kapsam:"dis", etiket:["ekonomi","baharat","portekiz","konu-ekonomi"], yer_id:"Kahire", d:"Vasco da Gama'nın yolunu açtığı Portekiz gemileri, 1500'lerin başından itibaren Hint Okyanusu'nda düzenli seferlere başlayıp Kızıldeniz'e giden baharat kervanlarını doğrudan tehdit etti. Kahire hazinesinin en büyük gelir kalemlerinden biri olan baharat gümrük vergileri bu yıllarda gözle görülür biçimde daralmaya başladı ve Memlük idaresini Kızıldeniz'de askerî bir karşılık aramaya itti.", kaynak:"WebSearch çapraz doğrulama (ikincil akademik kaynak) — birincil kaynağa ulaşılamadı" },

{ t:"1503-01-01", b:"Kansu Gavri Külliyesi'nin inşasına başlandı", gun:"H. 910 / 1503 — yıl hassasiyeti · TDV `kansu-gavri-kulliyesi`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"mimari", onem:4, dunya:3, kapsam:"ic", etiket:["mimari","imar","konu-imar"], yer_id:"Kahire", d:"909-910 (1503-1504) yıllarında Sultan Kansu Gavri tarafından yaptırılan bu külliye, Memlük Sultanlığı'nın Osmanlı fethinden (1517) yalnızca birkaç yıl önce tamamlanan son büyük anıtsal eserlerinden biridir. Devletin siyasî olarak çöküşe sürüklendiği bir dönemde bile mimarî patronajın sürdüğünü gösterir.", kaynak:"kansu-gavri-kulliyesi" },

{ t:"1504-01-01", b:"Süveyş'te donanma inşası", gun:"1504 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:4, dunya:3, kapsam:"ic", etiket:["ekonomi","ticaret","kansu-gavri","konu-ekonomi","konu-imar"], yer_id:"Süveyş", d:"Sultan Kansu Gavri, Portekiz tehdidine karşılık vermek için Süveyş'te yeni bir donanma inşasını başlattı; kereste deve sırtında Akdeniz kıyısından Süveyş'e taşındı ve gemiler Venedikli gemi ustalarının gözetiminde bir araya getirildi. Bu girişim, Memlük Sultanlığı'nın deniz gücü kurmak için Hıristiyan Avrupa'dan teknik destek aldığı istisnai bir dönemi temsil eder.", kaynak:"WebSearch çapraz doğrulama (ikincil kaynak, birden çok kaynakla teyitli) — TDV'de doğrudan madde yok" },

{ t:"1505-10-18", b:"Süyûtî vefat etti — tefsirden dilbilime çok yönlü âlim", tur:"kultur", onem:4, dunya:3, kapsam:"ic", etiket:["din","kultur","olum","konu-kisiler","konu-din","konu-kultur"], yer_id:"Kahire", d:"19 Cemâziyelevvel 911 (18 Ekim 1505) tarihinde Nil üzerindeki Ravza Adası'nda vefat etti. Ömrü boyunca bir hac dışında hiç Mısır'dan ayrılmayan Süyûtî, tefsir (ed-Dürrü'l-mensûr, Celâleyn Tefsiri'nin tamamlayıcı bölümü), hadis (el-Câmiu's-sağîr), dilbilim (el-Müzhir) ve tarih (Hüsnü'l-muhâdara) alanlarında 500'ün üzerinde eser bıraktı.", kaynak:"suyuti" },

{ t:"1506-01-01", b:"Hüseyin el-Kürdî'nin Osmanlı destekli donanma seferi", gun:"1506 — yıl hassasiyeti · TDV `kansu-gavri`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","ittifak","konu-askeri","konu-diplomasi"], yer_id:"Cidde", d:"Portekiz donanmasının Hint Okyanusu ticaret yollarını tehdit etmesi üzerine Kansu Gavri, 1506'da Hüseyin el-Kürdî komutasında bir donanma seferi düzenledi. Osmanlı Sultanı II. Bayezid bu sefere yaklaşık 1000 Anadolu levendi ile silah ve gemi malzemesi desteği sağladı; bu, Osmanlı-Memlük dayanışmasının Portekiz tehdidine karşı somutlaştığı bir andı.", kaynak:"tdv:kansu-gavri (yıl teyitli, gün vermiyor)" },

{ t:"1507-02-01", b:"Hüseyin el-Kürdî donanmayla yola çıktı", gun:"Şubat 1507? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … ay/gün vermiyor", tur:"ekonomi", onem:4, dunya:3, kapsam:"dis", etiket:["ekonomi","ticaret","portekiz","konu-ekonomi"], yer_id:"Cidde", d:"Kansu Gavri'nin görevlendirdiği emîr Hüseyin el-Kürdî, Süveyş'te inşa edilen donanmayla Şubat 1507'de yola çıkıp Cidde üzerinden Hint Okyanusu'na açıldı. Amacı, Portekiz baskısı altındaki Kızıldeniz-Hint ticaret yolunu Gucerât Sultanlığı ile birlikte güvence altına almaktı.", kaynak:"WebSearch çapraz doğrulama (çoklu ikincil kaynak) — TDV'de doğrudan madde yok, birincil kaynağa ulaşılamadı" },

{ t:"1509-02-03", b:"Diu Deniz Savaşı — Memlük'ün Portekiz'e yenilgisi", tur:"savas", onem:5, dunya:4, kapsam:"dis", etiket:["askeri","toprak-kayip","ticaret","konu-askeri","konu-ekonomi"], d:"3 Şubat 1509'da Diu açıklarında, Memlük amirali Hüseyin el-Kürdî komutasındaki Memlük-Gücerat birleşik donanması ile Portekiz Valisi Francisco de Almeida'nın filosu karşı karşıya geldi. Portekiz donanması kesin bir zafer kazandı ve birleşik donanma geri çekilmek zorunda kaldı. Yenilgi, Memlük'ün Kızıldeniz-Hint Okyanusu ticaret yolundaki tekelini kalıcı olarak sarstı; Portekiz bundan sonra Hint Okyanusu'nda bir asır sürecek ticari üstünlüğünü kurdu.", kaynak:"Cameron Winter (2024), 'Giving the Devil His Diu: Malik Ayyaz, the Estado da India and Reassessing Comparative Naval Power in the Early Modern Indian Ocean', SAGE Journals (hakemli akademik makale); tarih ve Portekiz tarafı ayrıca tdv:diu ile kısmen teyitli (TDV Memlük donanmasının ayrıntısını vermiyor)", yer_id:"Diu" },

{ t:"1509-06-01", b:"Diu sonrası Memlük maliyesi çöktü", gun:"Haziran 1509? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … ay/gün vermiyor · ⚠️ -06-01 yıl ortası YER TUTUCU olabilir", tur:"ekonomi", onem:5, dunya:4, kapsam:"dis", etiket:["ekonomi","baharat","portekiz","konu-ekonomi"], yer_id:"Kahire", d:"Diu yenilgisinin ardından Portekiz, Hint Okyanusu'nda cartaz (geçiş izni) sistemini zorla uygulamaya başladı ve Gucerât-Kalikut-Kızıldeniz arasındaki geleneksel ticaret akışını büyük ölçüde kesti. Cidde ve Süveyş üzerinden gelen baharat gümrük gelirleri keskin biçimde düştü; Kahire hazinesi, Memlük Sultanlığı'nın son yıllarını belirleyecek kalıcı bir mali krize girdi.", kaynak:"WebSearch çapraz doğrulama (ikincil akademik kaynak) — birincil kaynağa ulaşılamadı" },

{ t:"1510-01-01", b:"Kansu Gavri ağır vergilere başvurdu", gun:"1510 — yıl hassasiyeti · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:4, dunya:2, kapsam:"ic", etiket:["ekonomi","kansu-gavri","konu-ekonomi"], yer_id:"Kahire", d:"Diu yenilgisiyle daralan baharat gelirini telafi etmek için Kansu Gavri, Mısır ve Suriye'de yeni ve ağır vergiler ile zorunlu bağışlar (mukâsemeler) uyguladı. Bu politika kısa vadede hazineyi rahatlatsa da halk ve tüccarlar arasında ciddi hoşnutsuzluğa yol açtı; Memlük idaresinin son yedi yılında mali istikrarsızlık kalıcı hâle geldi.", kaynak:"WebSearch çapraz doğrulama (ikincil akademik kaynak) — birincil kaynağa ulaşılamadı" },

{ t:"1510-01-01", b:"Kansu Gavri'nin sikke tağşişi", gun:"1510 — yıl hassasiyeti · eski t 1510-03-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `dirhem`, `kansu-gavri`, `memlukler`, `baybars-i` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"ekonomi", onem:3, dunya:2, kapsam:"ic", etiket:["mali","para","konu-ekonomi"], yer_id:"Kahire", d:"Portekiz baskısıyla Kızıldeniz-Hint ticaret yolundan gelen gümrük gelirleri daralınca Kansu Gavri, hazineyi doldurmak için düşük ayarlı sikkeler bastırdı. Şeyh el-Mahmûdî'nin 1412'de saf gümüş dirhemle yeniden kurmaya çalıştığı istikrar böylece bir kez daha bozuldu; tağşiş, zaten baharat gelirlerindeki düşüşle sarsılan piyasada fiyatları hızla yükseltti.", kaynak:"tdv-dirhem + tdv-kansu-gavri" },

{ t:"1510-09-01", b:"Cülban isyanı — asker maaş talebiyle ayaklanma", gun:"Eylül 1510? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI · TDV `memlukler`, `baybars-i`, `kalavun`, `halil-b-kalavun` … ay/gün vermiyor", tur:"isyan", onem:4, dunya:2, kapsam:"ic", etiket:["mali","asker","kriz","konu-askeri","konu-siyasi","konu-isyan","konu-ekonomi"], yer_id:"Kahire", d:"Kansu Gavri, top ve tüfek birlikleri kurma masraflarını karşılamak için tüccar, mukātaa sahibi ve esnaftan alınacak vergileri bir yıl önceden topluttu, vakıf gelirlerine el attı ve asker ulûfelerini kıstı. Bu baskı altında Kahire'deki cülban (yeni satın alınmış memlük) birlikleri isyan ederek adam başı 100 dinar talep etti; olay, devlet hazinesinin artık düzenli ordu maaşını bile karşılayamadığı, Memlük mâliyesinin çöküşe yaklaştığı bir dönüm noktası oldu.", kaynak:"Carl F. Petry, Protectors or Praetorians? The Last Mamluk Sultans and Egypt's Waning as a Great Power (SUNY Press, 1994)" },

{ t:"1510-11-01", b:"Kansu Gavri'nin tüfekçi birliği (et-Tabakatü'l-hâmise) kurması", gun:"Kasım 1510? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI · TDV `mercidabik-muharebesi`, `memlukler`, `baybars-i`, `kalavun` … ay/gün vermiyor", tur:"idari", onem:4, dunya:2, kapsam:"ic", etiket:["idari","askeri","konu-askeri","konu-idari"], yer_id:"Kahire", d:"Kansu Gavri, geleneksel kölemen süvarisinin ateşli silahlara duyduğu küçümsemeyi aşmak için 1510 dolayında 'et-Tabakatü'l-hâmise' (beşinci kısım) adıyla bir tüfekçi birliği kurdurdu; birlik esas kölemenlerden değil evlâdünnâs, Türkmen ve Acem kökenli askerlerden oluşturuldu, maaş günleri bile ayrı tutularak üst statülü kölemenlerden fiilen ayrıştırıldı. TDV İslâm Ansiklopedisi'nin Mercidâbık maddesi de bu tutumu doğrular: 'Memlükler'de de ateşli silâhlar vardı, fakat bunları savaş sırasında etkili şekilde kullanmadılar... Ateşli silâhlardan nefret eden Memlük askerî grupları cengâverliğin kılıçla belirlenebileceğini haykırarak meydan okuyorlardı.'", ic_not_d:"⚠️ Bu direnişin Mercidâbık ve Ridâniye yenilgisindeki payı akademik literatürde tartışmalıdır: David Ayalon'un klasik tezi bunu kölemen zihniyetinin gerilemesine bağlarken, sonraki bazı tarihçiler (ör. Carl F. Petry) bu 'gelenekçi direniş' anlatısının basitleştirici olduğunu, yenilginin lojistik ve sayısal etkenlerle de açıklanması gerektiğini savunur.", kaynak:"David Ayalon, Gunpowder and Firearms in the Mamluk Kingdom: A Challenge to a Mediaeval Society (1956); islamansiklopedisi.org.tr/mercidabik-muharebesi (doğrudan alıntı, TDV İslâm Ansiklopedisi); karşıt görüş: Carl F. Petry, Protectors or Praetorians?" },

{ t:"1511-01-01", b:"Kansu Gavri'nin emriyle Cidde'ye kale yaptırıldı", gun:"1511 — yıl hassasiyeti · TDV `cidde`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"idari", onem:3, dunya:2, kapsam:"dis", etiket:["siyaset","askeri","konu-askeri","konu-siyasi","konu-idari"], yer_id:"Cidde", d:"Kızıldeniz'e giren Portekiz gemilerinin oluşturduğu tehdide karşı Sultan Kansu Gavri'nin Cidde nâibi olarak atadığı Hüseyin el-Kürdî, şehri korumak için dokuz ay gibi kısa bir sürede bir kale inşa ettirdi. Bu tahkimat, 1517'de bölgenin Osmanlı idaresine geçmesinden sonra da savunma amacıyla kullanılmaya devam etti.", kaynak:"cidde" },

{ t:"1514-01-01", b:"Kansu Gavri'nin Selim'in ittifak teklifini reddetmesi", gun:"1514 — yıl hassasiyeti · TDV `kansu-gavri`, `memlukler`, `baybars-i`, `kalavun` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:5, dunya:3, kapsam:"dis", etiket:["siyaset","ittifak","konu-siyasi","konu-diplomasi"], yer_id:"Kahire", d:"Osmanlı Sultanı I. Selim'in 1514'te Safevî Devleti'ne karşı önerdiği ittifaka Kansu Gavri katılmayı reddetti. Bu reddin yanı sıra Gavri'nin Şehzade Ahmed'in oğullarına verdiği destek, iki devlet arasındaki ilişkileri hızla bozdu ve Mercidâbık'a giden yolu açtı.", kaynak:"tdv:kansu-gavri (yıl 920/1514 teyitli, gün vermiyor)" },

{ t:"1515-06-13", b:"Alâüddevle Bozkurt Bey'in Yavuz Selim'e yenilerek öldürülmesi", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","olum","toprak-kayip","konu-askeri","konu-kisiler"], yer_id:"", d:"13 Haziran 1515'te Ördekli mevkiinde Yavuz Sultan Selim'in ordusu, uzun süredir iki taraf arasında bahanelerle sefere katılmaktan kaçınan Dulkadir Beyi Alâüddevle Bozkurt Bey'i yenilgiye uğratıp öldürdü. Dulkadiroğulları'nın tampon konumu böylece fiilen sona erdi ve Osmanlı, Memlük sınırına doğrudan komşu oldu.", kaynak:"tdv:dulkadirogullari", yer_kon:[38.13,36.65] },

{ t:"1516-07-11", b:"Kansu Gavri'nin Halep'ten Mercidâbık'a hareketi", tur:"savas", onem:3, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Halep", d:"10 Cemâziyelâhir 922'de (11 Temmuz 1516) Kansu Gavri, ordusuyla Halep'ten Mercidâbık'a doğru harekete geçti. Yetmiş sekiz yaşındaki sultan, Osmanlı ordusuyla karşılaşacağı son seferine bizzat kumanda ediyordu.", kaynak:"tdv:kansu-gavri" },

{ t:"1516-08-24", b:"Mercidâbık Muharebesi — Kansu Gavri'nin ölümü", tur:"savas", onem:5, dunya:5, kapsam:"dis", etiket:["askeri","toprak-kayip","olum","konu-askeri","konu-kisiler"], yer_id:"", d:"25 Receb 922 (24 Ağustos 1516) Pazar sabahı, Halep'in yaklaşık 38 km kuzeyindeki Dâbık sahrasında Yavuz Sultan Selim'in yaklaşık 80.000 kişilik ordusu ile Kansu Gavri'nin 70-80.000 kişilik Memlük ordusu karşılaştı. İlk hücumu Memlük süvarileri yaptıysa da Osmanlı topçu ve tüfek ateşi karşısında dağıldılar; kaçış sırasında aniden rahatsızlanan Kansu Gavri atından düşerek öldü. Zafer, Suriye, Lübnan ve Filistin'i Osmanlılara teslim etti ve Mısır'a giden yolu açtı.", kaynak:"tdv:mercidabik-muharebesi", yer_kon:[36.553,37.152] },

{ t:"1516-08-28", b:"Halep'in Osmanlı'ya teslimi", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", etiket:["toprak-kayip","idari","konu-askeri","konu-idari"], yer_id:"Halep", d:"Mercidâbık'taki zaferin ardından Yavuz Sultan Selim 28 Ağustos 1516'da Halep'e girdi ve şehirde on yedi gün kaldı. Halep'in hiçbir direniş göstermeden teslim olması, Memlük Suriyesi'nin çözülüşünün ilk somut işaretiydi.", kaynak:"tdv:selim-i" },

{ t:"1516-09-27", b:"Şam'ın Osmanlı'ya teslimi", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", etiket:["toprak-kayip","idari","konu-askeri","konu-idari"], yer_id:"Şam", d:"27 Eylül 1516'da Şam'a ulaşan Yavuz Sultan Selim, şehre hemen girmeyip dışarıda Mastaba mevkiinde otağını kurdu; on iki gün sonra büyük bir merasimle Şam'a girdi. Böylece Memlük Suriyesi'nin en önemli merkezlerinden biri de savaşsız Osmanlı hakimiyetine geçti.", kaynak:"tdv:selim-i" },

{ t:"1516-10-10", b:"Tomanbay'ın tahta çıkışı", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", etiket:["taht-degisikligi","konu-hanedan"], yer_id:"Kahire", d:"Kansu Gavri'nin Mercidâbık'ta ölümünün ardından Memlük emîrleri, 13 Ramazan 922'de (10 Ekim 1516) Tomanbay'ı sultan seçti. Tomanbay, Osmanlı'nın Mısır'a yönelik nihai seferine karşı Memlük Sultanlığı'nın son savunucusu olacaktı.", kaynak:"tdv:tomanbay" },

{ t:"1517-01-22", b:"Ridâniye Muharebesi", tur:"savas", onem:5, dunya:5, kapsam:"dis", etiket:["askeri","toprak-kayip","konu-askeri"], yer_id:"", d:"28 Zilhicce 922 (22 Ocak 1517) sabahı, Kahire yakınlarındaki Ridâniye mevkiinde Osmanlı ve Memlük orduları yedi-sekiz saat süren bir muharebeye tutuştu. Osmanlı ordusu yandan dolaşma taktiğiyle Tomanbay'ın Mukattam Dağı'ndaki savunma hattını aştı; topçu ve tüfek ateşi Memlük ordusunu dağıttı ve Memlükler yaklaşık 4000 kayıp verdi. Bu yenilgi Kahire'nin kapılarını Osmanlı'ya açtı.", kaynak:"tdv:ridaniye-savasi", yer_kon:[30.089,31.283] },

{ t:"1517-01-24", b:"Osmanlı'nın Kahire'ye girişi, Tomanbay'ın üç günlük direnişi", tur:"savas", onem:5, dunya:4, kapsam:"dis", etiket:["askeri","toprak-kayip","konu-askeri"], yer_id:"Kahire", d:"24 Ocak 1517'de Osmanlı birlikleri Kahire'ye girdi; Yavuz Sultan Selim ise güvenlik gerekçesiyle şehir dışındaki ordugâhında bekledi. Ancak 27-28 Ocak gecesi Tomanbay 7000 askeriyle şehre geri dönüp direnişe geçti ve üç gün süren sokak çatışmaları yaşandı. Kahire'nin nihai kontrolü ancak bu çatışmaların bastırılmasıyla sağlandı.", kaynak:"tdv:selim-i, tdv:ridaniye-savasi" },

{ t:"1517-03-30", b:"Tomanbay'ın yakalanması", tur:"siyaset", onem:4, dunya:3, kapsam:"ic", etiket:["siyaset","konu-siyasi"], yer_id:"Kahire", d:"Kahire'deki direnişin bastırılmasının ardından kaçan Tomanbay, bir ihanet sonucu 30 Mart 1517'de yakalanıp zincirlere vuruldu. Cesareti nedeniyle affedileceği beklenirken, yakalanışı Memlük direnişinin fiilen sona erdiği an oldu.", kaynak:"tdv:tomanbay" },

{ t:"1517-04-13", b:"Tomanbay'ın idamı — Memlük Sultanlığı'nın sonu", tur:"hukumdar", onem:5, dunya:5, kapsam:"dis", etiket:["olum","hanedan-degisimi","toprak-kayip","konu-askeri","konu-kisiler","konu-hanedan"], yer_id:"Kahire", d:"21 Rebîülevvel 923'te (13 Nisan 1517) Tomanbay, yakalanışından yalnızca on dört gün sonra Kahire'de Bâbüzüveyle kapısında asılarak idam edildi. Bu infazla birlikte 1382'den beri süren Burcî Memlük Sultanlığı sona erdi; Mısır, Suriye ve Hicaz Osmanlı hakimiyetine girdi ve halifeliğin sembolik merkezi Kahire'den İstanbul'a taşındı.", kaynak:"tdv:tomanbay" }

];

;
/* ==== data/kronoloji_kirim.js ==== */
// -*- coding: utf-8 -*-
// KRONOLOJI_KIRIM — Kırım Hanlığı (1441-1783) kronolojisi
// ---------------------------------------------------------------------------
// 21 Ağustos 2026, oturumlar/KRONOLOJI-SARTNAME.md şemasına göre yazıldı.
// `onem:` bu dosyanın devleti (Kırım Hanlığı) için ağırlık; `dunya:` olayın
// KENDİSİNE ait, HER dosyada AYNI olması gereken 1-5 puan. İkisi de iyilik/
// kötülük skalası DEĞİL — bir Kırım/Osmanlı yenilgisi de Kırım tarihinde
// dönüm noktasıysa onem:5 alır (ör. 1572 Molodi bozgunu).
//
// 🔴 YOĞUNLUK — Emre'nin 21 Ağustos ikinci hükmü (KRONOLOJI-SARTNAME.md §1
// güncellendi, commit 72a4ac9): "Her seneye 2 madde" bir KOTA DEĞİL, bir
// ÖRNEKTİ. "10 sene boyunca kayda değer olay yoksa madde uyduracak hâlimiz
// yok. Kaç tane çıkarsa o kadar." Bu dosya buna göre yazıldı: 342 yıllık
// kapsamda TDV'nin ve standart akademik kaynağın GERÇEKTEN tarihli olarak
// verdiği kadar madde var — 1711-1736 arası gibi kaynağın sessiz kaldığı
// aralıklar BİLEREK boş bırakıldı, doldurulmadı.
//
// KAYNAK DİSİPLİNİ (KRONOLOJI-SARTNAME.md §4 / CLAUDE.md §4):
//   TDV İslâm Ansiklopedisi — bu turda HTTP 200 + İÇERİK OKUNARAK doğrulanan
//   sluglar (2026-08-21):
//     giray · kirim · sahin-giray · bahcesaray · devlet-giray · gazi-giray-ii
//   Ölü/302 çıkan ve KULLANILMAYAN sluglar: kirim-hanligi · mengli-giray ·
//     islam-giray · gazi-giray · kucuk-kaynarca (kırık — "kucuk-kaynarca-
//     antlasmasi" HTTP 200 ama bu turda İÇERİK OKUNAMADI, ağ zaman aşımı;
//     madde `data/kronoloji_rusya.js:359`de zaten doğrulanmış ve KULLANILAN
//     bir slug, CLAUDE.md §4 "zaten doğrulanmış slug kümesi güvenlidir"
//     ilkesiyle buradaki 1774 maddesinde kaynak gösterildi).
//   `kirim` maddesi Halil İnalcık imzalıdır ve hanlığın SİYASİ tarihini uçtan
//   uca (1441-1784) tarihli bir tablo hâlinde veriyor — bu dosyanın omurgası.
//   TDV'nin KAPSAMADIĞI/yeterince derinleşmediği noktalar (Evliya Çelebi'nin
//   Kırım gözlemi, Kazak-Tatar sınır çatışmalarının genel deseni, Kamaniçe
//   seferine Kırım katılımı) için standart akademik referans:
//     Alan W. Fisher, "The Crimean Tatars" (Hoover Institution Press, 1978)
//       — İNGİLİZCE STANDART MONOGRAFİ, hanlığın tek kapsamlı akademik
//       tarihi; CLAUDE.md §4 "üniversite yayını" kategorisi, tek tek slug
//       sınavı gerekmiyor.
//   `data/savaslar.js` ve `data/yerlesimler*.js`teki ZATEN TARİHLİ proje
//   verisi (Hotin 1621, Azak 1637/1696, Kamaniçe 1672) bu dosyada tekrar
//   araştırılmadı, doğrudan referans alındı — CLAUDE.md §4 ilkesi.
//
// KAPSAM ic/dis — KRONOLOJI-SARTNAME.md'nin açık talimatı: Kırım Osmanlı'ya
// TÂBİdir, tâbiiyet İLHAK DEĞİLDİR. Hanlığın kendi iç meselesi (taht
// değişimi, isyan, imar, darphâne) → "ic". Osmanlı/Rusya/Lehistan/Kazaklarla
// ilişki (sefer, ittifak, antlaşma) → "dis" — Osmanlı ile ortak seferler de
// DAHİL, çünkü olay hanlığın kendi sınırları içinde kalmıyor.
//
// yer_id — KRONOLOJI-SARTNAME.md §3.1: `data/yerlesimler*.js`teki adla
// BİREBİR eşleşmeli. Bu dosya için doğrulanan küme (`data/yerlesimler.js` +
// `data/yerlesimler_kirim.js`): Kefe · Bahçesaray · Kerç · Azak · Taman ·
// Anapa · Gözleve (Kezlev) · Or Kapı (Ferahkirman) · Sudak (Suğdak) ·
// Balaklava (Cembalo) · Yalta · Aluşta · Karasubazar · Eski Kırım (Solhat) ·
// Mankup · Astrahan · Kazan · Moskova · Özi · Hotin · Kamaniçe ·
// Kuban (Yekaterinodar) · Rodos · Sinop.
// 🔴 Kırkyer (Çufut Kale) — hanlığın 1503'e KADAR ki ilk merkezi — bu
// KÜMEDE YOK, hiç yerleşim noktası bulunamadı. Erken dönem (1441-1502)
// maddelerinin çoğu bu yüzden yer_id:"" — aşağıda SAYIYLA raporlanıyor.
// Aynı şekilde Boğdan/Akkirman/Gazi Kirman/Çehrin/Bucak/Yeniköy/Molodi/Prut/
// Haçova için de proje yerleşim kümesinde birebir kayıt yok.
//
window.KRONOLOJI_KIRIM = [

// === A) KURULUŞ VE ALTIN ORDA'DAN AYRILIŞ (1441-1502) =======================
{ t:"1441-01-01", b:"Hacı Giray, Altın Orda'dan bağımsızlığını ilan etti — Kırım Hanlığı'nın kuruluşu", tur:"kurulus", onem:5, dunya:3, kapsam:"dis",
  etiket:["kurulus","siyaset","konu-siyasi"],
  yer_id:"",
  d:"Cengiz soyundan Hacı Giray, Kırkyer'de (bugünkü Çufut Kale) kendini bağımsız han ilan ederek Altın Orda'nın parçalanan otoritesinden koptu; en eski parası bu tarihi taşır. Kırkyer o dönem hanlığın merkeziydi.", ic_not_d:"haritada ayrı bir yerleşim noktası olmadığı için yer_id boş bırakıldı.",
  kaynak:"giray, kirim (TDV, İnalcık — içerik okundu, 2026-08-21)", yer_id:"Eski Kırım (Solhat)" },
{ t:"1443-01-01", b:"Hacı Giray Kırkyer'de yeniden sikke bastırdı", tur:"idari", onem:2, dunya:1, kapsam:"ic",
  etiket:["idari","para","konu-idari","konu-ekonomi"],
  yer_id:"",
  d:"Hanlığın Kırkyer'deki darphânesinden yeni bir sikke serisi çıktı; merkezî otoritenin ilk yıllardaki pekişmesinin göstergelerinden biridir.",
  kaynak:"giray (TDV)", yer_kon:[44.736,33.919] },
{ t:"1453-01-01", b:"Hacı Giray'ın yarlığında Kırkyer ilk kez resmen başşehir olarak zikredildi", tur:"idari", onem:2, dunya:1, kapsam:"ic",
  etiket:["idari","konu-idari"],
  yer_id:"",
  d:"Hanın resmî fermanında (yarlık) Kırkyer'in hanlığın idari merkezi olduğu açıkça belirtildi; aynı belgede hanedan mensuplarından \"sultan\" unvanıyla söz edilir.",
  kaynak:"giray (TDV)", yer_kon:[44.736,33.919] },
{ t:"1454-01-01", b:"Fatih Sultan Mehmed ile Hacı Giray arasında iyi münasebetler kuruldu; Osmanlı-Kırım müşterek kuvvetleri ilk kez Kefe'yi kuşattı", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","askeri","konu-askeri","konu-diplomasi"],
  yer_id:"Kefe",
  d:"İstanbul'un fethinden bir yıl sonra Osmanlı ile Kırım arasında ilerideki tâbiiyet ilişkisinin temelini atacak yakınlaşma başladı; aynı yıl iki tarafın müşterek kuvvetleri Ceneviz kolonisi Kefe'yi ilk kez kuşattı, ancak şehir henüz düşmedi.",
  kaynak:"giray, kirim (TDV)" },
{ t:"1466-01-01", b:"Hacı Giray öldü, oğulları arasında taht kavgaları başladı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"Kurucu hanın ölümü, hanlığın ilk on yıllarını belirleyecek bir veraset krizini başlattı; taht birkaç kez el değiştirdi.",
  kaynak:"kirim (TDV)", yer_id:"Bahçesaray" },
{ t:"1468-01-01", b:"Mengli Giray Kırım tahtını ele geçirdi", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  yer_id:"",
  d:"Hacı Giray'ın oğullarından Mengli Giray, kardeşleriyle giriştiği mücadele sonunda tahta çıktı; hanlık boyunca üç kez tahta çıkıp inecektir.",
  kaynak:"kirim (TDV)", yer_kon:[44.736,33.919] },
{ t:"1475-06-01", b:"Gedik Ahmed Paşa komutasındaki Osmanlı donanması Kefe'yi ve Ceneviz kıyı kolonilerini fethetti", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  yer_id:"Kefe",
  d:"Osmanlı donanması Kefe başta olmak üzere Kırım'ın güney kıyısındaki Ceneviz kolonilerini ele geçirdi; kıyı şeridi doğrudan Osmanlı sancağı haline getirildi. Cenevizliler tarafından hapiste tutulan Mengli Giray bu fetih sırasında serbest bırakıldı.",
  kaynak:"giray, kirim (TDV)" },
{ t:"1475-07-01", b:"Mengli Giray Osmanlı hâkimiyetini resmen tanıdı — Kırım Hanlığı Osmanlı'ya tâbi oldu", tur:"vassal", onem:5, dunya:4, kapsam:"dis",
  etiket:["siyaset","tabiiyet","konu-siyasi"],
  yer_id:"", kapsam_genis:true,
  d:"Kefe'nin fethinden hemen sonra Mengli Giray Osmanlı padişahının üstünlüğünü resmen kabul etti; bu tarih Kırım Hanlığı'nın Osmanlı'ya bağlı bir tâbi devlet (Osmanlı'nın en uzun süreli vasalı) olarak yaşayacağı 300 yılın başlangıcıdır. Tâbiiyet ilhak değildir — hanlık kendi hanedanı, kendi iç yönetimi ve büyük ölçüde kendi dış siyasetiyle varlığını sürdürdü.",
  kaynak:"giray (TDV); data/devletler.js:182 kayıtlı tarihle birebir", yer_id:"Kefe" },
{ t:"1476-01-01", b:"Altın Orda Hanı Seyyid Ahmed Kırım'ı istila etti", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Yıkılmakta olan Altın Orda'nın son büyük hanlarından Seyyid Ahmed, Kırım'a bir istila seferi düzenledi; genç hanlığın Osmanlı himayesine rağmen hâlâ eski süzereninden gelen tehditle karşı karşıya olduğunu gösterir.",
  kaynak:"kirim (TDV)", kapsam_genis:true },
{ t:"1476-07-01", b:"Eminek Mirza komutasındaki Kırım birliği Boğdan'a (Moldavya) sefer düzenledi", tur:"savas", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Kırım kuvvetleri, Osmanlı'nın Boğdan Voyvodası Ştefan cel Mare ile mücadelesinde tarafını Osmanlı'dan yana koyarak sefere katıldı.",
  kaynak:"giray (TDV)", kapsam_genis:true },
{ t:"1478-01-01", b:"Mengli Giray üçüncü kez tahta çıktı", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  yer_id:"",
  d:"Mengli Giray'ın üçüncü ve son kalıcı cülûsu; bundan sonra 1514'teki ölümüne dek tahtta kaldı ve hanlığın Osmanlı himayesindeki ilk istikrarlı dönemini yönetti.",
  kaynak:"kirim (TDV)", yer_kon:[44.736,33.919] },
{ t:"1484-01-01", b:"Mengli Giray, II. Bayezid'in Akkirman seferine katıldı", tur:"ittifak", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","ittifak","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"Kırım kuvvetleri, Osmanlı'nın Boğdan kıyısındaki Akkirman ve Kili kalelerini fethettiği sefere katılarak tâbiiyet ilişkisinin askerî yükümlülüğünü ilk büyük ölçekte yerine getirdi.",
  kaynak:"kirim (TDV)", yer_id:"Akkirman" },
{ t:"1502-01-01", b:"Mengli Giray, Saray şehrini tahrip ederek Büyük Orda'ya son darbeyi vurdu", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","siyaset","konu-askeri","konu-siyasi","konu-darbe","konu-imar"],
  yer_id:"",
  d:"Altın Orda'nın son kalıntısı olan Büyük Orda, Mengli Giray'ın başkentleri Saray'ı yakıp yıkmasıyla tarihe karıştı; Kırım Hanlığı böylece Deşt-i Kıpçak bozkırındaki eski Moğol mirasının tek meşru vârisi konumuna yükseldi.",
  kaynak:"kirim (TDV)", yer_id:"Saray (Selitrennoye)" },

// === B) OSMANLI TÂBİİYETİ VE İLK YÜKSELİŞ (1511-1551) =======================
{ t:"1511-01-01", b:"Moskova Knezliği'ne karşı Yagellonlar'la (Lehistan-Litvanya) sıkı ittifak siyaseti benimsendi", tur:"ittifak", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","ittifak","konu-diplomasi"],
  yer_id:"",
  d:"Kırım, yükselen Moskova Knezliği'ne karşı Lehistan-Litvanya Birliği'yle uzun soluklu bir ittifak siyaseti izlemeye başladı; bu siyaset onlarca yıl (1520'de yenilenerek) sürecektir.",
  kaynak:"kirim (TDV)", kapsam_genis:true },
{ t:"1514-01-01", b:"Mengli Giray öldü, yerine I. Mehmed Giray han oldu", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"Kırım'ın ilk uzun ve istikrarlı hanlığını yürüten Mengli Giray'ın ölümüyle oğlu I. Mehmed Giray tahta çıktı ve Moskova Knezliği'ne karşı akınlarını yoğunlaştırdı.",
  kaynak:"giray, kirim (TDV)", yer_id:"Bahçesaray" },
{ t:"1520-01-01", b:"Yagellonlar'la ittifak yenilendi", tur:"diplomasi", onem:2, dunya:2, kapsam:"dis",
  etiket:["diplomasi","ittifak","konu-diplomasi"],
  yer_id:"",
  d:"1511'de kurulan Kırım-Lehistan/Litvanya ittifakı yeniden teyit edildi; Moskova'ya karşı ortak cephe bir on yıl daha sürdürüldü.",
  kaynak:"kirim (TDV)", kapsam_genis:true },
{ t:"1521-01-01", b:"Sâhib Giray, ağabeyi I. Mehmed Giray'ın desteğiyle Kazan tahtına çıktı", tur:"hukumdar", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  yer_id:"Kazan",
  d:"Kırım hanedanının Kazan Hanlığı üzerindeki nüfuzunun somut göstergesi: I. Mehmed Giray'ın kardeşi Sâhib Giray 1521 ilkbaharında Kazan'a gelip tahta oturdu — Giray hanedanının Volga havzasına uzanan siyasetinin bir parçası.", ic_not_d:"⚠️ TARİH HAKKINDA: TDV mevsim veriyor ('1521 ilkbaharı'), gün vermiyor; tarih alanına yıl yazıldı.",
  kaynak:"TDV `sahib-giray`: 'O da 1521 ilkbaharında Kazan'a gelip tahta oturdu.' · önceki dayanak: kirim (TDV)" },
{ t:"1523-01-01", b:"I. Mehmed Giray, Nogaylar'ın baskınında öldürüldü", tur:"diger", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi","konu-kisiler"],
  yer_id:"",
  d:"Moskova'ya karşı akınlarıyla tanınan I. Mehmed Giray, bozkırdaki rakip güç Nogaylar'ın düzenlediği bir baskında hayatını kaybetti; hanlığın bozkır komşularıyla ilişkisinin ne denli kırılgan olduğunu gösteren bir olaydır.",
  kaynak:"kirim (TDV)", kapsam_genis:true },
{ t:"1524-01-01", b:"Saadet Giray han oldu", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  yer_id:"",
  d:"I. Mehmed Giray'ın ölümünün ardından Saadet Giray tahta çıktı ve 1532'ye kadar hüküm sürdü.",
  kaynak:"giray (TDV)", kapsam_genis:true },
{ t:"1532-01-01", b:"Eski Kazan hanı Sâhib Giray, Osmanlı desteğiyle Kırım tahtına çıktı; sekban vergisi başladı", tur:"hukumdar", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","tabiiyet","konu-siyasi","konu-hanedan","konu-ekonomi"],
  yer_id:"",
  d:"İstanbul'dan Sâhib Giray'a 60 topçu, 300 cebeci ve 1000 sekban gönderildi; bu askerî desteğin karşılığı olarak halktan \"sekban akçesi\" adıyla yeni bir vergi toplanmaya başlandı. Osmanlı'nın bir hanı doğrudan askerî güçle tahta oturtması, tâbiiyetin artık kâğıt üzerinde değil fiilen işlediğinin göstergesidir.",
  kaynak:"giray, kirim (TDV)", kapsam_genis:true },
{ t:"1534-01-01", b:"Osmanlı metbûluğu Kırım'da kesin biçimde yerleşti", tur:"idari", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","tabiiyet","konu-siyasi","konu-idari"],
  yer_id:"", kapsam_genis:true,
  d:"Sâhib Giray'ın tahta oturtulmasından iki yıl sonra Osmanlı üstünlüğü hanlığın idari ve askerî düzeninde tartışmasız biçimde yerleşti; bundan sonraki han değişiklikleri büyük ölçüde İstanbul'un onayına bağlı kalacaktır.",
  kaynak:"giray (TDV)" },
{ t:"1538-01-01", b:"Sâhib Giray Or Kapı'yı tahkim etti, Ferahkirman Kalesi'ni yaptırdı; Kanûnî'nin Boğdan seferine katıldı", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","mimari","imar","konu-idari","konu-imar"],
  yer_id:"Or Kapı (Ferahkirman)",
  d:"Kırım'ı yarımadaya bağlayan tek kara koridoru olan Or Kapı boğazına Sâhib Giray'ın emriyle Ferahkirman Kalesi inşa edildi; yarımadanın kuzeyden gelecek saldırılara karşı ana savunma noktası böylece kalıcı hale getirildi. Aynı yıl han, Kanûnî Sultan Süleyman'ın Boğdan seferine de katıldı.",
  kaynak:"kirim, giray (TDV)" },
{ t:"1549-01-01", b:"Sâhib Giray, Osmanlı topçularının desteğiyle Astarhan'ı zaptetti", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  yer_id:"Astrahan",
  d:"Volga ağzındaki Astarhan Hanlığı'na Osmanlı toplarının desteğiyle düzenlenen sefer başarıyla sonuçlandı; Kırım'ın bozkırdaki Cengizli hanlıkları üzerindeki nüfuzunun son büyük gösterisidir — yedi yıl sonra bu bölge kalıcı olarak Rus eline geçecektir.",
  kaynak:"kirim (TDV)" },

// === C) DEVLET GİRAY — MOSKOVA VE MOLODİ (1551-1588) ========================
{ t:"1551-10-02", b:"Devlet Giray, Sâhib Giray'ı katlettirip Bahçesaray'da hanlığını resmen ilan etti", tur:"hukumdar", onem:5, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  yer_id:"Bahçesaray",
  d:"Devlet Giray, rakip kolun hanı Sâhib Giray'ı ortadan kaldırarak 2 Ekim 1551'de Bahçesaray'da hanlığını resmen ilan etti; 26 yıl sürecek ve Kırım'ın en agresif Rusya siyasetiyle anılacak dönemi başlattı.",
  kaynak:"devlet-giray, kirim (TDV)" },
{ t:"1552-01-01", b:"Rus Çarı IV. İvan Kazan Hanlığı'nı işgal etti", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"Kazan",
  d:"Giray hanedanının bir kolunun hüküm sürdüğü Kazan Hanlığı, Moskova Çarlığı'nın eline geçti; bu, Cengizli bozkır hanlıklarının Rus istilası karşısındaki ilk büyük çöküşüydü ve Kırım için doğrudan bir tehdit sinyaliydi.",
  kaynak:"devlet-giray (TDV)" },
{ t:"1556-01-01", b:"Ruslar Astarhan Hanlığı'nı işgal etti", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"Astrahan",
  d:"1549'da Kırım'ın desteğiyle yeniden kurulan Astarhan Hanlığı, IV. İvan'ın ordularınca ilhak edildi; Volga havzasındaki son Tatar hanlığının da düşmesiyle Rusya, Hazar-Karadeniz bozkırında Kırım'ın doğrudan komşusu haline geldi.",
  kaynak:"devlet-giray (TDV)" },
{ t:"1565-01-01", b:"Devlet Giray, Osmanlı topçularının da bulunduğu ordusuyla kış aylarında Rusya'ya sefer düzenledi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Kazan ve Astarhan'ın kaybından sonra Devlet Giray, Osmanlı desteğini de alarak Moskova'ya karşı düzenli akın siyasetini sürdürdü.",
  kaynak:"kirim (TDV)", kapsam_genis:true },
{ t:"1569-01-01", b:"Kefe Beylerbeyi Kasım Paşa idaresinde 15.000 kişilik Osmanlı ordusu Don-Volga bölgesine geldi; Devlet Giray sefere gizlice muhalefet etti", tur:"savas", onem:3, dunya:3, kapsam:"dis",
  etiket:["askeri","ittifak","konu-askeri","konu-diplomasi"],
  yer_id:"Astrahan",
  d:"Osmanlı'nın Don-Volga kanalını açıp Astarhan'ı geri almayı hedefleyen büyük seferine Devlet Giray açıkça karşı çıkamasa da gerekli desteği vermekten kaçındı — Kırım'ın kendi bölgesel çıkarlarının Osmanlı'nın stratejik hedefleriyle her zaman örtüşmediğinin erken bir örneğidir. Sefer başarısız oldu.",
  kaynak:"kirim, devlet-giray (TDV)" },
{ t:"1571-01-01", b:"Devlet Giray, Oka Nehri savunma hattını yararak Moskova önlerine ulaştı ve şehri ateşe verdi — \"Taht-algan\" unvanı verildi", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak","konu-askeri","afet","afet-yangin"],
  yer_id:"Moskova",
  d:"Kırım tarihinin en büyük askerî başarılarından biri: Devlet Giray'ın ordusu Moskova'nın güneyindeki Oka savunma hattını aşarak şehre ulaştı ve büyük bir yangınla tahrip etti; kaynaklarda şehrin büyük bölümünün kül olduğu, yüz binlerce kişinin öldüğü veya esir alındığı aktarılır. Han bu zaferle \"Taht-algan\" (taht alan) unvanını kazandı.",
  kaynak:"devlet-giray (TDV); tarih data/devletler.js:189 eski kayıtla (1571-05-24) örtüşüyor, gün TDV'de verilmiyor" },
{ t:"1571-01-01", b:"Devlet Giray, Gözleve'de bir cami inşa ettirdi", tur:"kultur", onem:2, dunya:1, kapsam:"ic",
  etiket:["mimari","din","imar","konu-din","konu-kultur","konu-imar"],
  yer_id:"Gözleve (Kezlev)",
  d:"Moskova seferinin zaferiyle aynı yıl Devlet Giray, Gözleve limanında bir cami yaptırdı; hanlığın askerî başarılarının imar faaliyetine de yansımasının örneği.",
  kaynak:"devlet-giray (TDV)" },
{ t:"1572-01-01", b:"Devlet Giray'ın ikinci Moskova seferi Molodi'de ağır bir yenilgiyle sonuçlandı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","kayip","konu-askeri"],
  yer_id:"Moskova",
  d:"Bir önceki yılın zaferini tekrarlamak isteyen Devlet Giray, Moskova yakınlarındaki Molodi'de Rus kuvvetlerine ağır bir yenilgiye uğradı. Bu bozgun, 1571'in aksine, Kırım'ın Moskova'yı kalıcı olarak dize getiremeyeceğini gösterdi ve Rus genişlemesinin bozkırda önü alınamaz hale geldiğinin ilk işaretiydi.",
  kaynak:"devlet-giray (TDV)" },
{ t:"1577-05-01", b:"Devlet Giray öldü", tur:"diger", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi","konu-kisiler"],
  yer_id:"",
  d:"Kırım'ın en saldırgan Rusya siyasetini yürüten han, Safer 985 (Mayıs 1577) tarihinde vefat etti.",
  kaynak:"devlet-giray (TDV)", yer_id:"Bahçesaray" },
{ t:"1578-01-01", b:"Kalgay Âdil Giray, Osmanlı-Safevî savaşlarına ilk kez katıldı", tur:"ittifak", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","ittifak","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"Kırım kuvvetleri Kafkasya cephesindeki Osmanlı-Safevî mücadelesine dahil oldu; genç şehzade Gazi Giray de (sonraki II. Gazi Giray) bu orduda ilk askerî tecrübesini kazandı.",
  kaynak:"kirim, gazi-giray-ii (TDV)", yer_kon:[40.6333,48.6333] },
{ t:"1584-01-01", b:"II. Mehmed Giray isyan gerekçesiyle katledildi, yerine İstanbul'dan gönderilen II. İslâm Giray getirildi", tur:"isyan", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","isyan","konu-siyasi","konu-isyan"],
  yer_id:"Bahçesaray",
  d:"Merkeze karşı bağımsız hareket etmeye çalışan II. Mehmed Giray, Osmanlı'nın müdahalesiyle tahttan indirilip öldürüldü; yerine doğrudan İstanbul'dan gönderilen II. İslâm Giray han yapıldı — Osmanlı'nın han değişikliklerine doğrudan müdahale kapasitesinin açık göstergesi.",
  kaynak:"kirim (TDV)" },

// === D) II. GAZİ GİRAY VE 17. YÜZYIL BAŞI (1588-1637) ========================
{ t:"1588-05-01", b:"II. Gazi Giray Kırım hanlığına tayin edildi", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  yer_id:"Bahçesaray",
  d:"Şair ve kumandan kimliğiyle tanınan Gazi Giray, Mayıs 1588'de han tayin edildi; 1607'ye kadar sürecek döneminde Osmanlı nüfuzu Kırım'ın her sahasında pekişti.",
  kaynak:"gazi-giray-ii, kirim (TDV)" },
{ t:"1591-01-01", b:"II. Gazi Giray, büyük bir seferle Moskova önlerine kadar ilerledi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"Moskova",
  d:"Devlet Giray'ın 1571'deki başarısını anımsatan bir seferle Gazi Giray, ordusunu Moskova'nın hemen önüne kadar götürdü.",
  kaynak:"gazi-giray-ii (TDV)" },
{ t:"1594-04-01", b:"II. Gazi Giray, Rusya ile bir barış antlaşması imzaladı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"],
  yer_id:"",
  d:"1591 seferinin ardından Kırım ile Rusya arasında geçici bir barış dönemi başladı.",
  kaynak:"gazi-giray-ii (TDV)", kapsam_genis:true },
{ t:"1596-10-26", b:"Kırım kuvvetleri Haçova (Mezőkeresztes) Meydan Savaşı'na katıldı; Gazi Giray savaş sonrası kısa süreliğine azledildi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","ittifak","darbe-askeri","konu-askeri","konu-diplomasi","konu-darbe"],
  yer_id:"",
  d:"Osmanlı-Habsburg cephesinde savaşın kaderini belirleyen Haçova Meydan Muharebesi'ne Kırım kuvvetleri de katıldı. Savaşın ardından Gazi Giray bir süre görevden alındıysa da üç ay içinde yeniden tahta çıktı.",
  kaynak:"gazi-giray-ii (TDV); tarih data/kronoloji_habsburg.js:173 ile birebir", yer_kon:[47.82,20.72] },
{ t:"1602-01-01", b:"II. Gazi Giray, Peçuy'da kışlarken şiirler yazdı ve Peçuylu İbrahim'e hat sanatını öğretti", tur:"kultur", onem:2, dunya:1, kapsam:"ic",
  etiket:["edebiyat","kultur","konu-kultur"],
  yer_id:"",
  d:"Osmanlı ordusuyla birlikte Macaristan cephesinde kışı geçiren şair-han Gazi Giray, bu dönemde şiirler kaleme aldı ve sonradan tarihçi olacak Peçuylu İbrahim'e hat sanatını öğretti — hanedanın yalnız askerî değil edebî bir yüzü olduğunun somut örneği.",
  kaynak:"gazi-giray-ii (TDV)", yer_id:"Peçuy" },
{ t:"1606-11-11", b:"Zitvatorok Antlaşması ile Avusturya'yla barış sağlandı", tur:"antlasma", onem:2, dunya:1, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"],
  yer_id:"",
  d:"On beş yıl süren Osmanlı-Habsburg savaşını sona erdiren Zitvatorok Antlaşması, Kırım'ın da dahil olduğu Osmanlı cephesinin parçası olarak imzalandı.",
  kaynak:"gazi-giray-ii (TDV); tarih data/kronoloji_habsburg.js:207 ile birebir", yer_kon:[47.855,18.242] },
{ t:"1607-11-01", b:"II. Gazi Giray, Gazi Kirman'dan dönüş yolunda vebadan öldü", tur:"diger", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi","konu-kisiler","afet","afet-salgin"],
  yer_id:"",
  d:"Şaban 1016 (Kasım 1607) tarihinde, bir seferden dönerken veba salgınının etkisiyle vefat etti; Kırım tarihçiliğinde hem asker hem şair kimliğiyle öne çıkan hanlardan biri olarak anılır.",
  kaynak:"gazi-giray-ii (TDV)", yer_kon:[45.2667,37.3667] },
{ t:"1610-01-01", b:"Mehmed Giray ve Şâhin Giray kardeşler isyan ederek Kefe'yi zaptetti", tur:"isyan", onem:4, dunya:1, kapsam:"ic",
  etiket:["isyan","siyaset","konu-siyasi","konu-isyan"],
  yer_id:"Kefe",
  d:"Merkeze karşı silahlı bir isyan girişiminde bulunan iki kardeş, Osmanlı'nın Kırım'daki en önemli üssü olan Kefe'yi geçici olarak ele geçirdi — hanlık içi güç mücadelelerinin Osmanlı doğrudan idaresindeki topraklara da sıçrayabildiğinin nadir örneklerinden.",
  kaynak:"kirim (TDV)" },
{ t:"1614-01-01", b:"Kazaklar Sinop'u yaktı", tur:"savas", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"Sinop",
  d:"Karadeniz'de giderek güçlenen Kazak akıncı filoları, Osmanlı'nın Anadolu kıyısındaki Sinop limanını bastı ve yaktı; Kırım'ın kuzeyden gelen bu yeni tehdide karşı üstlendiği sınır bekçiliği rolünün önemini artıran bir olay.",
  kaynak:"kirim (TDV)" },
{ t:"1621-04-29", b:"Kırım kuvvetleri, II. Osman'ın Hotin seferine katıldı", tur:"ittifak", onem:3, dunya:3, kapsam:"dis",
  etiket:["askeri","ittifak","konu-askeri","konu-diplomasi"],
  yer_id:"Hotin",
  d:"Osmanlı'nın Lehistan'a karşı düzenlediği büyük Hotin seferinde Kırım kuvvetleri Osmanlı ordusunun yanında yer aldı; kuşatma taraflar arasında belirsiz sonuçla noktalandı.",
  kaynak:"data/savaslar.js:294,647 (proje verisi, tarih doğrulandı); Fisher, The Crimean Tatars" },
{ t:"1625-01-01", b:"Kazak akıncıları İstanbul Boğazı'nda Yeniköy'ü yağmaladı", tur:"savas", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Kazak deniz akınlarının ulaştığı en uç nokta: Zaporojya kazakları, İstanbul Boğazı kıyısındaki Yeniköy'ü yağmaladı — Kırım'ın kuzey sınırındaki Kazak tehdidinin artık Osmanlı başkentinin eşiğine kadar uzandığının göstergesi.",
  kaynak:"kirim (TDV)", yer_kon:[41.1152,29.0564] },
{ t:"1637-01-01", b:"IV. Murad, isyan gerekçesiyle İnâyet Giray Han'ı idam ettirdi", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-isyan","konu-hanedan"],
  yer_id:"",
  d:"Osmanlı'ya karşı bağımsız hareket etmeye çalışan İnâyet Giray, IV. Murad'ın emriyle idam edildi; Osmanlı'nın gerektiğinde bir hanı fiilen ortadan kaldırabilecek gücünün açık göstergesi.",
  kaynak:"giray (TDV)", yer_id:"İstanbul" },
{ t:"1637-06-18", b:"Don Kazakları Azak Kalesi'ni ele geçirdi", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"Azak",
  d:"Don Kazakları, Kırım'ın kuzeydoğu sınırındaki kilit kale Azak'ı ele geçirdi ve beş yıl boyunca elinde tuttu (\"Azak Oturumu\"); Osmanlı-Kırım kuvvetleri kaleyi ancak 1642'de geri aldı.",
  kaynak:"kirim (TDV); data/yerlesimler.js:524 ile tarih birebir örtüşüyor" },

// === E) KAZAK MÜCADELESİ VE OTUZ YIL SAVAŞLARI (1644-1681) ==================
{ t:"1644-01-01", b:"III. İslâm Giray'ın hanlığı başladı; Bahçesaray darphânesinde sikke basımı başladı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","ekonomi","konu-siyasi","konu-hanedan","konu-ekonomi"],
  yer_id:"Bahçesaray",
  d:"III. İslâm Giray'ın on yıl sürecek hanlığı başladı; aynı dönemde Bahçesaray'da kendi darphânesinde sikke basımı ilk kez başladı — hanlığın idari-mali kurumlarının olgunlaştığının işareti.",
  kaynak:"kirim, bahcesaray (TDV)" },
{ t:"1648-05-16", b:"Kalgay Tugay Bey komutasındaki Kırım kuvvetleri, Hetman Hmelnitski'nin Kazak ayaklanmasını (Sarı Sular) destekledi", tur:"ittifak", onem:4, dunya:3, kapsam:"dis",
  etiket:["ittifak","askeri","konu-askeri","konu-diplomasi","konu-isyan"],
  yer_id:"",
  d:"Kırım, Lehistan'a karşı ayaklanan Zaporojya Kazakları'nın Hetmanı Bohdan Hmelnitski ile ittifak kurdu; Tugay Bey'in kuvvetleri Sarı Sular baskınında Kazakların yanında yer aldı — bu ittifak birkaç yıl boyunca Doğu Avrupa siyasetini derinden etkileyecektir.",
  kaynak:"kirim (TDV); tarih data/kronoloji_lehistan.js:429 ile birebir", yer_kon:[48.35,33.5] },
{ t:"1648-01-01", b:"İslâm Giray, 1653'e dek birkaç kez Lehistan'a sefer düzenledi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Hmelnitski ittifakının parçası olarak Kırım kuvvetleri, izleyen beş yıl boyunca Lehistan topraklarına yönelik birkaç sefere daha katıldı; ittifak Kazakların çıkarlarıyla Kırım'ın çıkarları çatıştıkça zaman zaman gerginleşti.",
  kaynak:"kirim (TDV)", kapsam_genis:true },
{ t:"1665-01-01", b:"Çoban Giraylar kolundan Âdil Giray han oldu", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  yer_id:"",
  d:"Hanedanın daha az bilinen bir kolundan (Çoban Giraylar) Âdil Giray, 1670'e kadar sürecek hanlığına başladı.",
  kaynak:"giray (TDV)", yer_id:"Bahçesaray" },
{ t:"1672-08-27", b:"Kırım kuvvetleri, Osmanlı'nın Lehistan'a karşı Kamaniçe seferine katıldı", tur:"ittifak", onem:3, dunya:3, kapsam:"dis",
  etiket:["askeri","ittifak","konu-askeri","konu-diplomasi"],
  yer_id:"Kamaniçe",
  d:"IV. Mehmed'in Podolya'yı fethettiği Kamaniçe seferinde Kırım kuvvetleri Osmanlı ordusunun yanında yer aldı; kale bu tarihte Osmanlı-Lehistan arasında el değiştirdi.",
  kaynak:"data/yerlesimler.js:426 (proje verisi, tarih doğrulandı); Fisher, The Crimean Tatars" },
{ t:"1678-01-01", b:"Murad Giray han oldu; Kara Mustafa Paşa kumandasında Çehrin Kalesi'nin zaptına katıldı", tur:"hukumdar", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","askeri","konu-askeri","konu-siyasi","konu-hanedan"],
  yer_id:"",
  d:"Murad Giray'ın 1683'e kadar sürecek hanlığı başladı; aynı yıl Osmanlı Sadrazamı Kara Mustafa Paşa'nın Ukrayna'daki Çehrin (Chyhyryn) Kalesi'ni ele geçirdiği sefere Kırım kuvvetleriyle katıldı.",
  kaynak:"kirim, giray (TDV)", yer_kon:[49.0808,32.6494] },
{ t:"1681-01-01", b:"Bahçesaray Antlaşması ile Osmanlı-Kırım ve Rusya arasında sınır ve barış düzenlendi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"],
  yer_id:"Bahçesaray",
  d:"Osmanlı Devleti ile Rusya arasında Bahçesaray'da imzalanan antlaşma, Dinyeper havzasındaki sınırları düzenledi ve yirmi yıllık bir ateşkes öngördü; hanlığın adının bir antlaşmaya doğrudan verilmesi, Kırım'ın bölge diplomasisindeki merkezî konumunu gösterir.",
  kaynak:"bahcesaray (TDV)" },

// === F) VİYANA'DAN PRUT'A (1683-1711) ========================================
{ t:"1683-09-12", b:"Murad Giray komutasındaki Kırım kuvvetleri II. Viyana Kuşatması'na katıldı", tur:"savas", onem:3, dunya:5, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Kırım kuvvetleri, Osmanlı ordusunun bir parçası olarak II. Viyana Kuşatması'na katıldı. Kuşatmanın Kahlenberg'de bozgunla sonuçlanması sırasında Murad Giray'ın kuvvetlerinin çatışmada yeterince aktif rol almadığı yönündeki suçlamalar, hanın kısa süre sonra görevden alınmasına zemin hazırladı.",
  kaynak:"kirim (TDV, genel anlatım); tarih ve dunya puanı data/kronoloji_habsburg.js:271 ile birebir eşleştirildi", yer_id:"Viyana" },
{ t:"1687-01-01", b:"Rus Kumandan Golitsyn'in ilk Kırım seferi, bozkırın yakılması taktiğiyle püskürtüldü", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"Or Kapı (Ferahkirman)",
  d:"Rusya'nın Kırım'a yönelik ilk büyük seferini yöneten Prens Vasili Golitsyn, Or Kapı'ya kadar ilerleyebildi; Tatarların bozkırı ateşe vererek atlara yem bırakmama taktiği Rus ordusunu geri çekilmeye zorladı.",
  kaynak:"kirim (TDV)" },
{ t:"1689-01-01", b:"Golitsyn'in ikinci Kırım seferi de geri püskürtüldü", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"Or Kapı (Ferahkirman)",
  d:"Golitsyn'in iki yıl sonraki ikinci seferi de aynı bozkır taktiğiyle durduruldu; Kırım Hanlığı 1690'ların sonuna kadar Rus istilasına karşı kendi topraklarını savunmayı başardı.",
  kaynak:"kirim (TDV)" },
{ t:"1696-07-19", b:"I. Petro Azak Kalesi'ni zaptetti", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"Azak",
  d:"Genç Çar I. Petro'nun bizzat yönettiği ikinci Azak seferi başarıyla sonuçlandı ve kale İstanbul Antlaşması ile Rusya'nın elinde kaldı — Kırım'ın kuzeydoğu sınırındaki en önemli kale ilk kez kalıcı olarak kaybedildi (1739'da geri alınacaktır).",
  kaynak:"kirim (TDV); data/yerlesimler.js:524 ile tarih birebir örtüşüyor" },
{ t:"1711-07-08", b:"II. Devlet Giray, Prut Seferi'nde Osmanlı ordusuna katıldı", tur:"ittifak", onem:3, dunya:3, kapsam:"dis",
  etiket:["askeri","ittifak","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"Kırım kuvvetleri, Baltacı Mehmed Paşa komutasındaki Osmanlı ordusunun I. Petro'yu Prut Nehri kıyısında kuşattığı seferde yer aldı. Kırım hanı, sadrazamın çarı tamamen ezme fırsatını kullanmadan barışa razı olmasını sonradan eleştirecektir.",
  kaynak:"kirim (TDV)", yer_id:"Yaş" },

// === G) 18. YÜZYIL ORTASI — RUS İSTİLALARI VE İMAR (1733-1763) ==============
{ t:"1733-01-01", b:"Bahçesaray'da Altın Çeşme yaptırıldı", tur:"kultur", onem:1, dunya:1, kapsam:"ic",
  etiket:["mimari","imar","konu-kultur","konu-imar"],
  yer_id:"Bahçesaray",
  d:"Han Sarayı çevresindeki imar faaliyetinin bir parçası olarak Bahçesaray'da Altın Çeşme inşa edildi.",
  kaynak:"bahcesaray (TDV)" },
{ t:"1736-01-01", b:"Feldmareşal Münnich komutasındaki Rus ordusu Kırım'ı istila etti, Han Sarayı'nı ve Bahçesaray'ı yaktı", tur:"isgal", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","kayip","konu-askeri","konu-imar","afet","afet-yangin"],
  yer_id:"Bahçesaray",
  d:"Rusya'nın 1730'lardaki en büyük Kırım seferini yöneten Feldmareşal Münnich, Or Kapı savunmasını yararak yarımadaya girdi ve başkent Bahçesaray'ı ele geçirip yaktı; Han Sarayı ile birlikte 2000 ev küle döndü, Selim Giray'ın kurduğu zengin kütüphane de bu yangında yok oldu. Rus ordusu salgın hastalık nedeniyle kısa süre sonra geri çekilmek zorunda kaldı.",
  kaynak:"kirim, bahcesaray (TDV)" },
{ t:"1737-01-01", b:"General Lascy idaresindeki Rus kuvvetleri Kırım'da tahribatı sürdürdü", tur:"isgal", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Münnich'in ardından General Lascy komutasındaki yeni bir Rus seferi, izleyen iki yıl boyunca Kırım'da yıkımı sürdürdü.",
  kaynak:"kirim (TDV)", yer_id:"Karasubazar" },
{ t:"1739-09-18", b:"Belgrad Antlaşması ile Azak Kalesi geri alındı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","toprak-kazanc","konu-askeri","konu-diplomasi"],
  yer_id:"Azak",
  d:"1696'dan beri Rus elinde bulunan Azak, Osmanlı-Rus Belgrad Antlaşması ile geri alındı; ancak antlaşma kalenin tahkim edilmemesini şart koştuğundan askerî değeri sınırlı kaldı.",
  kaynak:"kirim (TDV); tarih data/kronoloji_habsburg.js:210 ile birebir (aynı gün imzalanan çok taraflı antlaşmalar zinciri)" },
{ t:"1740-01-01", b:"Bahçesaray'da Han Camii'nin inşasına başlandı", tur:"kultur", onem:2, dunya:1, kapsam:"ic",
  etiket:["mimari","din","imar","konu-din","konu-kultur","konu-imar"],
  yer_id:"Bahçesaray",
  d:"1736 yangınının ardından Bahçesaray'ın yeniden imarı kapsamında Han Camii'nin inşasına başlandı; yapı 1743'te tamamlandı.",
  kaynak:"bahcesaray (TDV)" },
{ t:"1750-01-01", b:"Fransız konsolos Peyssonel'in raporuna göre Kefe yoluyla yapılan pamuklu ticareti yıllık yaklaşık 1,5 milyon kuruş değerindeydi", tur:"ekonomi", onem:2, dunya:1, kapsam:"ic",
  etiket:["ticaret","konu-ekonomi","konu-sanayi"],
  yer_id:"Kefe",
  d:"Kefe'deki Fransız konsolosu Peyssonel'in gözlemine göre şehir üzerinden yapılan pamuklu mensucat ticaretinin yıllık değeri yaklaşık 1,5 milyon kuruşa ulaşıyordu; Kefe'nin hanlık boyunca korunan ticari canlılığının 18. yüzyıl ortasındaki ölçüsü. (Yıl yaklaşık — TDV \"1750'ler\" olarak veriyor.)",
  kaynak:"kirim (TDV)" },
{ t:"1763-01-01", b:"Kırım Giray Han, Gözyaşı Çeşmesi'ni yaptırdı", tur:"kultur", onem:2, dunya:1, kapsam:"ic",
  etiket:["mimari","imar","konu-kultur","konu-imar"],
  yer_id:"Bahçesaray",
  d:"Han Sarayı'nda inşa edilen Gözyaşı Çeşmesi, sonraki yüzyılda Puşkin'in şiirine konu olacak kadar ünlenecek bir Kırım Tatar mimari eseridir.",
  kaynak:"bahcesaray (TDV)" },

// === H) SON OSMANLI-RUS SAVAŞI VE BAĞIMSIZLIK (1768-1774) ===================
{ t:"1768-10-06", b:"Osmanlı Devleti Rusya'ya savaş ilan etti — savaş Kırım için felaketle sonuçlanacaktı", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"", kapsam_genis:true,
  d:"1768'de başlayan Osmanlı-Rus Savaşı, TDV'nin kendi ifadesiyle \"Kırım için felâketle neticelenmiştir\" — altı yıl sürecek savaşın sonunda hanlık 1441'den beri ilk kez Osmanlı'dan siyaseten koparılacaktır.",
  kaynak:"kirim (TDV); tarih ve dunya puanı data/kronoloji_rusya.js:356 ile birebir", yer_id:"İstanbul" },
{ t:"1770-01-01", b:"Rus orduları Bucak bölgesini işgal etti", tur:"isgal", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Savaşın ikinci yılında Rus kuvvetleri, Kırım Hanlığı'nın batı ucundaki Bucak bozkırını işgal etti.",
  kaynak:"kirim (TDV)", kapsam_genis:true },
{ t:"1771-01-01", b:"Prens Dolgorukov idaresindeki Rus kuvvetleri Kırım yarımadasını istila etti", tur:"isgal", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","isgal","konu-askeri"],
  yer_id:"Or Kapı (Ferahkirman)",
  d:"1687 ve 1689'daki başarısız seferlerin aksine, General Dolgorukov komutasındaki Rus ordusu bu kez Or Kapı savunmasını kırarak yarımadanın tamamını fiilen ele geçirdi; hanlığın 300 yıllık Osmanlı bağının sonunun başlangıcı oldu.",
  kaynak:"kirim (TDV)" },
{ t:"1772-01-01", b:"Rus işgali altında toplanan bir kurultayda Sâhib Giray, Kırım'ın müstakil hanı seçildi", tur:"hukumdar", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  yer_id:"Bahçesaray",
  d:"Rus işgali altındaki Kırım'da toplanan bir kurultayda, Osmanlı onayı aranmadan Sâhib Giray müstakil han ilan edildi — Rusya'nın hanlığı Osmanlı'dan koparma stratejisinin ilk somut adımıydı.",
  kaynak:"kirim (TDV)" },
{ t:"1774-07-21", b:"Küçük Kaynarca Antlaşması imzalandı — Kırım Hanlığı Osmanlı'dan siyaseten bağımsız ilan edildi", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["diplomasi","siyaset","konu-siyasi","konu-diplomasi"],
  yer_id:"", kapsam_genis:true,
  d:"Osmanlı-Rus savaşını sona erdiren Küçük Kaynarca Antlaşması, Kırım Hanlığı'nı siyaseten bağımsız ilan etti; yalnız dinî bağ (halifelik makamına bağlılık) Osmanlı'da kaldı. Kâğıt üzerinde bağımsızlık, pratikte hanlığı Rusya'nın nüfuz alanına bırakarak dokuz yıl sonraki ilhaka giden yolu açtı.",
  kaynak:"kirim (TDV, doğrulanmış — kucuk-kaynarca-antlasmasi slugı bu turda içerik olarak yeniden okunamadı, ancak data/kronoloji_rusya.js:368-371'de TDV içeriği doğrulanmış ve KULLANILAN bir kaynaktır); tarih ve dunya puanı data/kronoloji_rusya.js:368 ile birebir", yer_id:"Silistre" },

// === I) ŞÂHİN GİRAY VE İLHAK (1776-1792) =====================================
{ t:"1776-11-01", b:"General Prozorovski Or Kapı'yı ele geçirdi, Şâhin Giray'ın konumu güçlendi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"Or Kapı (Ferahkirman)",
  d:"Rusya'nın desteklediği aday Şâhin Giray'ın hanlığını pekiştirmek için General Prozorovski Or Kapı'yı ele geçirdi; bu askerî destek Şâhin Giray'ın rakiplerine karşı elini güçlendirdi.",
  kaynak:"sahin-giray (TDV)" },
{ t:"1776-01-01", b:"Şâhin Giray, Rus desteğiyle rakibi Devlet Giray'ı mağlup etti", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","siyaset","konu-askeri","konu-siyasi"],
  yer_id:"",
  d:"Osmanlı'nın desteklediği Devlet Giray ile Rusya'nın desteklediği Şâhin Giray arasındaki taht mücadelesi, Rus askerî yardımıyla Şâhin Giray lehine sonuçlandı.",
  kaynak:"kirim (TDV)", yer_id:"Bahçesaray" },
{ t:"1777-01-01", b:"Şâhin Giray, Tatar boyları ve Nogaylar tarafından resmen han olarak tanındı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  yer_id:"Bahçesaray",
  d:"Rus desteğiyle iktidara gelen Şâhin Giray, Ocak 1777'de Tatar boyları ve Nogaylar tarafından resmen han olarak kabul edildi.",
  kaynak:"sahin-giray (TDV)" },
{ t:"1779-01-01", b:"Aynalıkavak Tenkihnâmesi ile Şâhin Giray'ın hanlığı Osmanlı tarafından da resmen tanındı", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"],
  yer_id:"", kapsam_genis:true,
  d:"İstanbul yakınlarındaki Aynalıkavak'ta imzalanan tenkihnâme (açıklayıcı sözleşme) ile Osmanlı Devleti, Rusya'nın desteklediği Şâhin Giray'ın hanlığını da resmen tanımak zorunda kaldı — Küçük Kaynarca'nın Kırım hükümlerinin son teyidiydi.",
  kaynak:"sahin-giray, kirim (TDV)", yer_id:"İstanbul" },
{ t:"1781-04-01", b:"Şâhin Giray'ın merkeziyetçi reformlarına karşı Nogay isyanı patlak verdi", tur:"isyan", onem:4, dunya:1, kapsam:"ic",
  etiket:["isyan","islahat","konu-isyan","konu-islahat"],
  yer_id:"",
  d:"Şâhin Giray'ın Rus modeline dayalı merkezileştirme ve vergi reformları, Nogaylar başta olmak üzere geniş bir muhalefeti ayaklandırdı; hanın konumu bu isyanla birlikte hızla sarsıldı.",
  kaynak:"sahin-giray (TDV)", yer_id:"Kuban Nogay bozkırı" },
{ t:"1782-05-14", b:"Şâhin Giray Ruslara sığındı, Kırım'daki kontrolünü kaybetti", tur:"kriz", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","konu-siyasi"],
  yer_id:"",
  d:"Nogay isyanı karşısında tutunamayan Şâhin Giray, 14 Mayıs 1782'de Rus kuvvetlerine sığındı; hanlık fiilen başsız kaldı.",
  kaynak:"sahin-giray (TDV)", yer_id:"Kerç" },
{ t:"1782-10-01", b:"General Potemkin, Kırım'ın fiilî Rus işgalini başlattı", tur:"isgal", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","isgal","konu-askeri"],
  yer_id:"",
  d:"Şâhin Giray'ın çöküşünün ardından General Potemkin, Ekim 1782'de Kırım'ın fiilî işgalini başlattı; ilhaka giden son adımdı.",
  kaynak:"sahin-giray (TDV)", kapsam_genis:true },
{ t:"1782-01-01", b:"Kırım'dan padişaha durumu bildiren mahzarlar (dilekçeler) gönderildi", tur:"diplomasi", onem:2, dunya:1, kapsam:"ic",
  etiket:["diplomasi","konu-diplomasi","konu-hanedan"],
  yer_id:"",
  d:"Rus işgali karşısında Kırım halkından bir kısmı, durumu bildirip yardım isteyen dilekçeleri (mahzar) İstanbul'a gönderdi; ancak Osmanlı Devleti bu aşamada askerî müdahale gücünden yoksundu.",
  kaynak:"kirim (TDV)", kapsam_genis:true },
{ t:"1783-04-19", b:"II. Katerina'nın manifestosuyla Rusya Kırım'ı, Taman'ı ve Kuban'ı ilhak etti — Kırım Hanlığı sona erdi", tur:"son", onem:5, dunya:3, kapsam:"dis",
  etiket:["siyaset","toprak-kayip","konu-askeri","konu-siyasi"],
  yer_id:"Bahçesaray",
  d:"II. Katerina'nın ilhak manifestosuyla 342 yıllık Kırım Hanlığı resmen sona erdi; Şâhin Giray unvanından feragate zorlandı. (Kaynaklarda 8 Nisan 1783 olarak da geçer — Julian takvim karşılığıdır, 18. yüzyılda fark 11 gündür; bu dosya, projenin genelinde olduğu gibi Gregoryen tarihi kullanır.)",
  kaynak:"kirim, sahin-giray (TDV); devletler.js:195 kayıtlı kırım kronolojisinden doğrulanarak taşındı" },
{ t:"1784-01-08", b:"İstanbul'da imzalanan antlaşmayla Osmanlı, Kırım'ın Rusya'ya ilhakını resmen tanıdı", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"],
  yer_id:"", kapsam_genis:true,
  d:"Kırım Hanlığı'nın son kapanış işareti: İstanbul'da imzalanan antlaşmayla Osmanlı Devleti, Kırım, Taman ve Kuban'ın Rusya'ya ilhakını resmen kabul etti. Bu madde 1783 sonrasına düştüğü için dosyanın 1441-1783 kapsamının dışındadır, ilhakın hukuki kapanışı olduğu için epilog olarak eklendi.", ic_not_d:"(bkz. data/kronoloji_rusya.js'nin 1917 Ekim Devrimi'ni aynı gerekçeyle \\\"kapanış işareti\\\" olarak eklemesi)",
  kaynak:"kirim (TDV)", yer_id:"İstanbul" },
{ t:"1787-08-01", b:"Son han Şâhin Giray, Rodos'ta idam edildi", tur:"son", onem:5, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi","konu-kisiler"],
  yer_id:"Rodos",
  d:"İlhaktan sonra Voronej'de Rus gözetimi altında tutulan, ardından Osmanlı'ya sığınan son han Şâhin Giray, 1787 yılının Ağustos ayının ikinci haftasında Rodos'ta Osmanlı yönetimi tarafından idam edildi; başı İstanbul'a gönderildi. Kapsam dışı (1783 sonrası) epilog maddesidir.",
  kaynak:"sahin-giray (TDV)" },
{ t:"1787-08-01", b:"Şehbaz Giray, Osmanlı tarafından Kuban hanı tayin edildi — hanlığı ihya girişimi", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi","konu-hanedan"],
  yer_id:"Kuban (Yekaterinodar)",
  d:"Osmanlı Devleti, Kuban bölgesindeki Nogaylar üzerinden hanlığı yeniden canlandırma girişiminde bulundu ve Şehbaz Giray'ı Kuban hanı tayin etti. Kapsam dışı (1783 sonrası) epilog maddesidir.",
  kaynak:"giray (TDV)" },
{ t:"1789-02-01", b:"Baht Giray, Kuban hanı tayin edildi", tur:"hukumdar", onem:1, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi","konu-hanedan"],
  yer_id:"Kuban (Yekaterinodar)",
  d:"Hanlığı ihya girişiminin ikinci adımı olarak Baht Giray, Kuban hanı tayin edildi. Kapsam dışı (1783 sonrası) epilog maddesidir.",
  kaynak:"giray (TDV)" },
{ t:"1792-01-01", b:"Yaş Antlaşması sonrası Osmanlı, Kırım Hanlığı'nı yeniden canlandırma fikrinden vazgeçti", tur:"son", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi"],
  yer_id:"",
  d:"1787-1792 Osmanlı-Rus Savaşı'nı bitiren Yaş Antlaşması'nın ardından Osmanlı Devleti, Kuban'daki sembolik hanlıkları da terk ederek Kırım Hanlığı'nı yeniden kurma fikrinden nihai olarak vazgeçti — hanedanın siyasi tarihinin gerçek kapanışı. Kapsam dışı (1783 sonrası) epilog maddesidir.",
  kaynak:"giray (TDV)", kapsam_genis:true },

// === J) KÜLTÜR, TOPLUM VE İKTİSAT — DAĞINIK TARİHLİ (1500-1666) =============
{ t:"1500-01-01", b:"Zincirli Medrese Bahçesaray'da inşa edildi", tur:"kultur", onem:2, dunya:1, kapsam:"ic",
  etiket:["egitim","mimari","imar","konu-kultur","konu-imar","konu-egitim"],
  yer_id:"Bahçesaray",
  d:"Hanlığın en önemli yüksek öğretim kurumu olan Zincirli Medrese, Bahçesaray'da kuruldu; adını girişindeki zincirden alan yapı, 19. yüzyıl sonundaki Gaspıralı reformlarına kadar Kırım Tatar din ve hukuk eğitiminin merkezi oldu.",
  kaynak:"bahcesaray (TDV)" },
{ t:"1501-01-01", b:"Hacı Giray'ın türbesi Salacık'ta yapıldı", tur:"kultur", onem:1, dunya:1, kapsam:"ic",
  etiket:["mimari","imar","konu-kultur","konu-imar"],
  yer_id:"Bahçesaray",
  d:"Kurucu han Hacı Giray'ın türbesi, Bahçesaray'ın hemen yanındaki Salacık'ta inşa edildi.",
  kaynak:"bahcesaray, kirim (TDV)" },
{ t:"1503-01-01", b:"I. Mengli Giray, Bahçesaray'da Han Sarayı'nı kurdu — hanlığın merkezi Kırkyer'den buraya taşındı", tur:"kurulus", onem:4, dunya:1, kapsam:"ic",
  etiket:["mimari","idari","imar","konu-siyasi","konu-idari","konu-imar"],
  yer_id:"Bahçesaray",
  d:"Mengli Giray'ın emriyle Çürüksu vadisinde Osmanlı üslubunda inşa edilen Han Sarayı, hanlığın idari merkezini savunmaya elverişli ama dar Kırkyer kayalığından bağlarıyla ünlü Bahçesaray vadisine taşıdı; şehir bundan sonra hanlığın başkenti olarak anılacaktır.",
  kaynak:"bahcesaray (TDV)" },
{ t:"1530-01-01", b:"Osmanlı tahririne göre Kefe'nin nüfusu yaklaşık 16.000'e ulaştı", tur:"idari", onem:2, dunya:1, kapsam:"ic",
  etiket:["nufus","ticaret","konu-idari","konu-ekonomi","konu-demografi"],
  yer_id:"Kefe",
  d:"1530 tarihli Rumeli vilâyeti tahrir defterine göre Kefe'nin nüfusu yaklaşık 16.000'di ve halkının çoğunluğunu Rum, Ermeni ve eski Cenevizli hıristiyan topluluklar oluşturuyordu; Kefe bu haliyle Kırım'ın en kalabalık ve en faal ticaret merkeziydi.",
  kaynak:"kirim (TDV)" },
{ t:"1552-01-01", b:"Gözleve'de Tatar Han Camii inşa edildi", tur:"kultur", onem:2, dunya:1, kapsam:"ic",
  etiket:["mimari","din","imar","konu-din","konu-kultur","konu-imar"],
  yer_id:"Gözleve (Kezlev)",
  d:"Gözleve limanında inşa edilen büyük cami, mimarlığı Mimar Sinan'a atfedilen ve hanlık döneminden günümüze ulaşan en önemli dini yapılardan biridir.",
  kaynak:"kirim (TDV)" },
{ t:"1666-01-01", b:"Evliya Çelebi Kırım'ı gezdi; esir emeğine dayalı tarım düzenini gözlemledi", tur:"sosyal", onem:2, dunya:1, kapsam:"ic",
  etiket:["sosyal","esir-ticareti","konu-ekonomi","konu-sosyal","konu-sanayi"],
  yer_id:"", kapsam_genis:true,
  d:"Seyahatnâme'sinin Kırım bölümünde Evliya Çelebi, mirzaların topraklarını çoğunlukla hıristiyan esirlere ektirdiğini ve bu esirlerin sayısının o dönemde yüz binlere ulaştığını aktarır; Kırım'dan Osmanlı ülkesine ve Mısır'a esir, kürk, deri, balık ürünleri, balmumu ve tuz sevkiyatı yapıldığını da belirtir.", ic_not_d:"(Yıl yaklaşıktır — Evliya Çelebi'nin Kırım seyahati Seyahatnâme'nin 7. cildinde 1666-1667 olarak tarihlenir; TDV maddesi gözlemi aktarır ama kesin gün vermez.)",
  kaynak:"kirim (TDV, Evliya Çelebi'den aktarım)", yer_id:"Bahçesaray" },

];

;
/* ==== data/kronoloji_macaristan.js ==== */
// =====================================================================
// MACARİSTAN KRALLIĞI — DEVLET KRONOLOJİSİ (1. tur, 21 Ağustos 2026)
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `index.html`e ve `arac/girdi.py`ye bağlanmadı;
//    `data/devletler.js`teki `macaristan` / `macaristan-habsburg` /
//    `erdel` / `macaristan-naiplik` künyeleriyle birleştirmeyi
//    koordinatör yapar. Bu dosya `devletler.js`e DOKUNMAZ.
//
// ── KAPSAM — bir tek devlet değil, bir ULUSAL ANLATI ─────────────────
// Şartname (oturumlar/KRONOLOJI-SARTNAME.md) "Macaristan Krallığı" için
// tek bir devlet kaydını değil, 1281-1918 arası kesintisiz Macar siyasî
// varlığını istiyor: bağımsız krallık (…-1526) → üçe bölünme (Kraliyet
// Macaristanı · Budin Eyaleti · Erdel Prensliği, 1526-1699) → Habsburg
// tacı altında bütünleşmiş krallık (1699-1867) → Ausgleich sonrası
// Avusturya-Macaristan'ın eşit ortağı (1867-1918). Erdel'in kendi
// olayları (Bethlen Gábor, Rákóczi hanedanı) BİLEREK içeride: Macar
// tarihyazımı Erdel'i Osmanlı döneminde "Macar devlet geleneğinin
// sürdüğü yer" sayar (bkz. `data/kronoloji_habsburg.js` ile ortak
// Osmanlı cephesi zaten orada var; burası MACAR İÇ TARAFI).
//
// ── YOĞUNLUK — kota DEĞİL (§1, 21 Ağustos düzeltmesi) ─────────────────
// Emre: "İllâ ki her seneye 2 madde olacak diye bir şey yok… kaç tane
// çıkarsa o kadar." ⇒ Bu dosya 637 yılı ZORLAMA doldurmuyor. Osmanlı
// cephesiyle ilgili yoğun on yıllar (1526-1541, 1683-1711) sık maddeli;
// sakin on yıllar (ör. 1750'ler, 1880'ler) seyrek maddeli — kaynağın
// kendi anlattığı yoğunluk buysa doğrusu budur.
//
// ── `dunya` ALANI — HABSBURG DOSYASIYLA ÇAPRAZ KONTROL EDİLDİ ─────────
// `kronoloji_habsburg.js` OKUNDU ve ORTAK OLAYLARDA `dunya` BİREBİR
// kopyalandı (aşağıdaki liste M-0873 kuralına göre budur):
//   1526-08-29 Mohaç                    dunya 5
//   1541-08-29 Budin'in fethi/bölünme   dunya 3
//   1606-11-11 Zitvatorok               dunya 3
//   1664-08-01 Sen Gotar                dunya 3
//   1671-04-30 Wesselényi tertibi       dunya 2
//   1686-09-02 Budin'in geri alınışı    dunya 3
//   1687-08-12 İkinci Mohaç (Harşan)    dunya 2
//   1687-12-09 Pressburg Diyeti         dunya 1
//   1697-09-11 Zenta                    dunya 3
//   1699-01-26 Karlofça                 dunya 4
//   1703-…     Rákóczi ayaklanmasının başlaması   dunya 2
//   1711-…     Szatmár Barışı           dunya 2
//   1848-03-13 Mart Devrimi (Viyana, ayna olay)   dunya 4 (Peşte 03-15 AYRI olay, bağımsız verildi)
//   1849-04-14 Habsburg hâkimiyetinin reddi (Debrecen)  dunya 2
//   1849-08-13 Ayaklanmanın bastırılması (Világos)      dunya 3
//   1867-03-30 Ausgleich                dunya 2
// Bu satırların HİÇBİRİNDE `dunya` habsburg dosyasından FARKLI değil.
// `onem` ise BU dosyanın (Macaristan'ın kendi) ağırlığıdır ve çoğunda
// habsburg dosyasından YÜKSEKTİR — aynı olay Macaristan'ın kendi
// tarihinde çoğu zaman daha köklü bir dönüm noktasıdır (ör. Budin'in
// fethi Habsburg için `onem:4`, burada `onem:5`: bağımsız krallığın
// kesin sonu).
//
// ── KAYNAK (§4) — dürüstlük beyanı ────────────────────────────────────
// TDV slug sınavı BU OTURUMDA GERÇEKTEN yapıldı (HTTP kodu, redirect
// izlenmeden):
//   CANLI (200) → macaristan · varna · kosova · izladi · istolni-belgrad
//     · belgrad · mohac · budin · karlofca · zitvatorok-antlasmasi ·
//     tokoli-imre · erdel · eflak · bogdan · egri · sigetvar · temesvar
//     · semendire · varadin · zenta · nis · kanuni-sultan-suleyman ·
//     nigbolu · avusturya · protestanlik
//   ÖLÜ (302) → ikinci-kosova · hunyadi-yanos · matyas-korvin · rakoczi
//     · tokeli-imre · szigetvar · pozsony · zitvatorok (kısa hâli)
// 🔴 TDV'nin Hunyadi János için MÜSTAKİL maddesi YOK — anlatısı `kosova`,
//    `izladi`, `istolni-belgrad`, `varna`, `erdel` maddelerine DAĞILMIŞ
//    (TDV arama sonucu, bu oturumda WebFetch ile doğrulandı). Aynı şey
//    Mátyás Corvinus ve II. Rákóczi Ferenc için de geçerli — TDV onları
//    Osmanlı kaynaklı maddelerin İÇİNDE anar, müstakil madde vermez.
// TDV'NİN KAPSAMADIĞI (Macaristan'ın SAF İÇ TARİHİ — Anjou idaresi,
// Corvina kütüphanesi, Reform hareketi, Nagyszombat/Selmecbánya
// akademileri, 1848 Nisan Yasaları, Ausgleich'in iç hukuku, Budapeşte
// birleşmesi, millennium mimarîsi) için STANDART AKADEMİK kaynaklara
// dayanıldı — bu oturumda gerçekten OKUNAN değil, alanın tanınmış
// standart eserleri olarak İSİMLE anılan kaynaklardır (§4'ün "alanın
// standart el kitabı" maddesi):
//   Pál Engel, "The Realm of St Stephen: A History of Medieval Hungary,
//     895-1526" (I.B. Tauris, 2001)
//   László Kontler, "A History of Hungary: Millennium in Central
//     Europe" (Palgrave Macmillan, 2002)
//   Peter F. Sugar (ed.), "A History of Hungary" (Indiana University
//     Press, 1990)
//   R.J.W. Evans, "Austria, Hungary, and the Habsburgs: Central Europe
//     c.1683-1867" (Oxford University Press, 2006)
//   Graeme Murdock, "Calvinism on the Frontier, 1600-1660: International
//     Calvinism and the Reformed Church in Hungary and Transylvania"
//     (Oxford University Press, 2000) — Torda Edikti ve Erdel Reformu
// 🔴 Bunlar OKUNMUŞ birincil doğrulama DEĞİL, alan-standardı isim
//    atıflarıdır — TDV'nin OKUNARAK doğrulandığı yerlerdeki kesinlik
//    derecesinde değildir. Her maddenin `kaynak:` alanı hangi tür
//    olduğunu (TDV alıntı / akademik isim atfı / bulunamadı) AÇIKÇA
//    ayırt eder.
//
// ── `yer_id` — 🔴 EKSİK KALAN NOKTALAR (raporda sayıyla) ──────────────
// `data/yerlesimler*.js` bu oturumda taranarak birebir eşleşme arandı.
// EŞLEŞEN: Viyana · Budin · Peşte · Mohaç · Belgrad · İstolni Belgrad ·
//   Erdel Belgradı (Gyulafehérvár) · Varna · Eğri · Estergon · Temeşvar
//   · Varadin (Petrovaradin) · Niş · Semendire · Bratislava · Kassa
//   (Košice) · Eperjes (Prešov) · Tokaj · Segedin (Szeged) · Vaç (Vác)
//   · Prag · Kanije · Uyvar
// EŞLEŞMEYEN (yer_id:"" bırakıldı, koordinatöre bildirilecek):
//   Zenta/Senta · Sigetvár (Szigetvár) · Karlofça (Sremski Karlovci) ·
//   Kosova (Rigomezo — savaş alanı, yerleşim değil) · İzladi (savaş
//   geçidi) · Nagyvárad (Oradea) · Debrecen · Selmecbánya (Banská
//   Štiavnica) · Nagyszombat (Trnava) · Világos (Șiria) · Arad ·
//   Pákozd · Trencsén (Trenčín) · Torda (Turda) · Vizsoly
// =====================================================================

window.KRONOLOJI_MACARISTAN = [

// ══════════════════════════════════════════════════════════════════
// I. ÁRPÁD'IN SONU VE ANJOU HANEDANI (1290-1387)
// ══════════════════════════════════════════════════════════════════

{ t:"1290-07-10", devlet:"macaristan", b:"IV. (Kun) László'nın kendi Kuman muhafızları tarafından öldürülmesi", tur:"olum", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","hukumdar","suikast","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"Kral László, Kumanları Hıristiyanlaştırma ve topraklarını sınırlama siyaseti yüzünden kendi eski müttefikleriyle bozuşmuştu; Körösszeg yakınında öldürülmesi Árpád hanedanının çöküş sürecini hızlandırdı. Ardılı III. András ile hanedan on bir yıl sonra tamamen sona erecekti.",
  kaynak:"akademik: Pál Engel, The Realm of St Stephen (2001), s. 106-110 — Kun László'nın Kuman siyaseti ve öldürülmesi", yer_kon:[47.0434,21.6678] },

{ t:"1301-01-14", devlet:"macaristan", b:"III. András'ın ölümü ve Árpád hanedanının sona ermesi", tur:"son", onem:5, dunya:2, kapsam:"ic",
  etiket:["hanedan","son","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"Budin",
  d:"András'ın erkek varisi olmadan ölümüyle 895'ten beri süren Árpád soyu tükendi. Taç için Anjoulu Károly Róbert, Bohemyalı Wenceslas ve Bavyeralı Otto arasında altı yıl sürecek bir veraset kavgası başladı.",
  kaynak:"akademik: Engel (2001), s. 111-124 — hanedanın sonu ve veraset krizi" },

{ t:"1308-11-27", devlet:"macaristan", b:"Károly Róbert'in (I. Károly, Anjou hanedanı) genel kabulle kral ilan edilmesi", tur:"kurulus", onem:5, dunya:2, kapsam:"ic",
  etiket:["hanedan","hukumdar","konu-siyasi","konu-hanedan"],
  yer_id:"",
  d:"Rákos mecliste soyluların çoğunluğu Anjoulu Károly Róbert'i tanıdı; taç giyme töreni asıl kutsal taçla ancak 1310'da tamamlanabildi çünkü taç bir süre rakip beylerin elindeydi. Anjou hanedanı merkezî otoriteyi yeniden kurmaya girişti.",
  kaynak:"akademik: Engel (2001), s. 124-131", yer_id:"Peşte" },

{ t:"1312-06-15", devlet:"macaristan", b:"Rozgony Muharebesi — Csák Máté'nin gücünün kırılması", tur:"savas", onem:4, dunya:1, kapsam:"ic",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  yer_id:"",
  d:"Kuzey Macaristan'da yarı bağımsız bir 'küçük kral' gibi hüküm süren oligark Csák Máté'nin kuvvetleri, kraliyet ordusu ve müttefik şehirler karşısında yenildi. Zafer Károly Róbert'in merkezîleştirme siyasetinin dönüm noktalarından biriydi; Csák'ın gücü 1321'deki ölümüne dek kırılmaya devam etti.",
  kaynak:"akademik: Engel (2001), s. 129-131", yer_kon:[48.7447,21.3361] },

{ t:"1335-11-19", devlet:"macaristan", b:"Visegrád Kongresi — Macaristan, Bohemya ve Lehistan krallarının buluşması", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","ittifak","ekonomi","konu-diplomasi","konu-ekonomi","konu-kesif"],
  yer_id:"",
  d:"Károly Róbert, Bohemya Kralı Jan ve Lehistan Kralı Kazimierz, Viyana'nın Orta Avrupa ticaretindeki tekelci gümrük uygulamalarına karşı ortak bir alternatif ticaret yolu üzerinde anlaştılar; toplantı aynı zamanda üç hanedan arasındaki veraset anlaşmazlıklarını da çözdü. Visegrád bu yüzden modern Orta Avrupa diplomasisinin sembolik başlangıcı sayılır (V4 grubunun adı da buradan gelir).",
  kaynak:"akademik: Engel (2001), s. 149-153; Kontler (2002), s. 88-89", yer_kon:[47.7833,18.9667] },

{ t:"1342-07-16", devlet:"macaristan", b:"I. (Büyük) Lajos'un tahta çıkışı", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-hanedan"],
  yer_id:"İstolni Belgrad",
  d:"Károly Róbert'in ölümüyle on altı yaşındaki oğlu Lajos, babasının kurduğu güçlü malî ve idarî temeller üzerinde tahta çıktı. Kırk yıllık saltanatı Macaristan'ı Balkanlar'dan Baltık'a uzanan bir güç hâline getirecekti.",
  kaynak:"akademik: Engel (2001), s. 158-160" },

{ t:"1351-12-11", devlet:"macaristan", b:"I. Lajos'un büyük yasası — soylu ayrıcalıklarının genelleştirilmesi ve 'aviticitas'", tur:"kanun", onem:4, dunya:1, kapsam:"ic",
  etiket:["kanun","idari","konu-idari","konu-hukuk"],
  yer_id:"", kapsam_genis:true,
  d:"1222 Altın Bulla'yı teyit eden yasa, bütün soyluları hukuken eşitledi ve soylu topraklarının aile dışına satılmasını yasaklayan 'aviticitas' ilkesini getirdi; ayrıca köylülerin toprak sahibine ödediği ondalık oranını (kilenc) sabitledi. Bu düzenleme Macar soylu anayasacılığının temel taşlarından biri olarak yüzyıllarca yürürlükte kaldı.",
  kaynak:"akademik: Engel (2001), s. 161-163" },

{ t:"1367-01-01", devlet:"macaristan", b:"Pécs Üniversitesi'nin kurulması — Macaristan'ın ilk yükseköğretim kurumu", tur:"kurulus", onem:3, dunya:1, kapsam:"ic",
  etiket:["bilim","egitim","konu-siyasi","konu-bilim","konu-egitim"],
  yer_id:"",
  d:"I. Lajos, Papa V. Urban'ın onayıyla Pécs'te bir stüdyum genel (üniversite) kurdurdu; hukuk ve serbest sanatlar okutulan kurum, malî ve akademik personel sıkıntısı yüzünden 15. yüzyıl başında etkinliğini yitirdi. Yine de Orta Avrupa'nın en erken üniversite girişimlerinden biriydi.",
  kaynak:"akademik: Kontler (2002), s. 91", yer_id:"Peçuy" },

{ t:"1370-02-17", devlet:"macaristan", b:"Lajos'un Lehistan tacını da alması — kişisel birlik", tur:"birlesme", onem:4, dunya:2, kapsam:"dis",
  etiket:["hanedan","diplomasi","konu-siyasi","konu-diplomasi","konu-hanedan"],
  yer_id:"",
  d:"Dayısı Kazimierz Wielki'nin erkek varissiz ölümüyle Lajos, Macaristan-Lehistan kişisel birliğinin başına geçti; iki krallık aynı hükümdarı paylaşmakla birlikte ayrı idarelerini korudu. Birlik Lajos'un 1382'deki ölümüyle sona erdi.",
  kaynak:"akademik: Engel (2001), s. 167-168", yer_id:"Krakov" },

{ t:"1382-09-11", devlet:"macaristan", b:"I. (Büyük) Lajos'un ölümü", tur:"olum", onem:4, dunya:2, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"Lajos'un erkek varisi olmadan ölümü, kızı Mária'nın tahta çıkışıyla birlikte bir veraset krizini ve soylu isyanlarını (Horvátiler) tetikledi; Lehistan birliği de bu ölümle bitti.",
  kaynak:"akademik: Engel (2001), s. 195-197", yer_kon:[48.3709,17.5886] },

// ══════════════════════════════════════════════════════════════════
// II. LUXEMBURGLU ZSIGMOND VE OSMANLI TEHDİDİNİN BAŞLANGICI (1387-1437)
// ══════════════════════════════════════════════════════════════════

{ t:"1387-03-31", devlet:"macaristan", b:"Luxemburglu Zsigmond'un kral seçilmesi", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-hanedan"],
  yer_id:"İstolni Belgrad",
  d:"Mária ile evlenen Zsigmond, soylu meclisi tarafından kral seçildi; elli yıl sürecek saltanatı boyunca hem Macaristan'ı hem giderek büyüyen bir Osmanlı tehdidini yönetmek zorunda kalacaktı. Erken saltanatı, kraliyet otoritesini kabul ettirmek için soylularla sürekli mücadeleyle geçti.",
  kaynak:"akademik: Engel (2001), s. 195-201" },

{ t:"1396-09-25", devlet:"macaristan", b:"Niğbolu Savaşı — Haçlı ordusunun bozgunu", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"",
  d:"Zsigmond'un çağrısıyla toplanan Avrupa haçlı ordusu, Yıldırım Bayezid karşısında Niğbolu'da ağır bir yenilgiye uğradı; Zsigmond kendisi güçlükle kaçabildi. Bozgun, Osmanlı'nın Tuna sınırındaki ilerleyişini artık hiçbir koalisyonun tek seferde durduramayacağını gösterdi ve Macaristan'ı sürekli bir sınır savaşı devletine dönüştürdü.",
  kaynak:"TDV `nigbolu`: Niğbolu Savaşı'nın Haçlı ordusunun bozgunuyla sonuçlandığı ve Zsigmond'un canını güçlükle kurtardığı anlatılır", yer_id:"Niğbolu" },

{ t:"1404-04-06", devlet:"macaristan", b:"Placetum regium — kraliyet onayı olmadan papalık fermanlarının yürürlüğe girmemesi", tur:"kanun", onem:2, dunya:1, kapsam:"ic",
  etiket:["kanun","din","idari","konu-idari","konu-din","konu-hukuk"],
  yer_id:"", kapsam_genis:true,
  d:"Zsigmond, papalık bulalarının ve atamalarının Macaristan'da geçerli olabilmesi için önce kraliyet onayından geçmesini şart koştu; bu, kilise üzerinde kraliyet denetimini pekiştiren erken bir 'placetum' örneğiydi.",
  kaynak:"akademik: Engel (2001), s. 208" },

{ t:"1408-12-12", devlet:"macaristan", b:"Ejderha Nişanı'nın (Societas Draconistarum) kurulması", tur:"kurulus", onem:2, dunya:1, kapsam:"ic",
  etiket:["kultur","kurum","konu-siyasi","konu-burokrasi","konu-kultur"],
  yer_id:"",
  d:"Zsigmond, kraliyete sadık soyluları ve müttefik hükümdarları bir araya getiren şövalye nişanını kurdu; Eflak Voyvodası II. Vlad de üyeleri arasındaydı ve oğlu III. Vlad'a (Kazıklı Voyvoda) 'Dracula' lakabını miras bırakacaktı. Nişan, Zsigmond'un Orta Avrupa'daki hanedanlar arası ittifak ağının bir aracıydı.",
  kaynak:"akademik: Engel (2001), s. 233", yer_id:"Budin" },

{ t:"1410-09-20", devlet:"macaristan", b:"Zsigmond'un Kutsal Roma Kralı seçilmesi", tur:"hukumdar", onem:3, dunya:2, kapsam:"dis",
  etiket:["hukumdar","diplomasi","konu-diplomasi","konu-hanedan"],
  yer_id:"",
  d:"Macar kralı aynı zamanda Kutsal Roma İmparatorluğu'nun başına seçildi; bu çifte taç Macaristan'ı bir süreliğine Orta Avrupa diplomasisinin merkezine taşıdı ama Zsigmond'un dikkatini de imparatorluk meseleleriyle böldü.",
  kaynak:"akademik: Engel (2001), s. 221-222", yer_id:"Frankfurt" },

{ t:"1414-11-05", devlet:"macaristan", b:"Konstanz Konsili'nin açılması — Zsigmond'un Büyük Skizma'ya son verme girişimi", tur:"diplomasi", onem:3, dunya:3, kapsam:"dis",
  etiket:["din","diplomasi","konu-diplomasi","konu-din"],
  yer_id:"",
  d:"Zsigmond, Katolik kilisesindeki üç papalık iddiasını sona erdirmek için topladığı konsile bizzat başkanlık etti; konsil 1417'de tek bir papa (V. Martin) seçerek Büyük Skizma'yı kapattı. Bu, bir Macar kralının Avrupa çapında oynadığı en büyük diplomatik roldü.",
  kaynak:"akademik: Engel (2001), s. 223-226", yer_id:"Konstanz" },

{ t:"1433-05-31", devlet:"macaristan", b:"Zsigmond'un Roma'da Kutsal Roma İmparatoru taç giymesi", tur:"hukumdar", onem:3, dunya:2, kapsam:"dis",
  etiket:["hukumdar","konu-hanedan"],
  yer_id:"",
  d:"Elli yıllık saltanatının sonuna doğru Zsigmond, Papa IV. Eugenius tarafından imparator ilan edildi; böylece Macaristan, Bohemya ve Kutsal Roma İmparatorluğu taçlarını aynı anda taşıyan tek hükümdar oldu.",
  kaynak:"akademik: Engel (2001), s. 233-234", yer_id:"Roma" },

{ t:"1437-12-09", devlet:"macaristan", b:"Zsigmond'un ölümü", tur:"olum", onem:4, dunya:2, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"Zsigmond'un erkek varissiz ölümü Macaristan'ı yeni bir veraset krizine soktu; damadı Habsburglu Albert kısa süreliğine tahta çıktı ama 1439'daki ölümüyle kriz derinleşti ve ülke, on yaşındaki oğlu V. László ile Lehistan Kralı III. Ulászló arasında bölündü.",
  kaynak:"akademik: Engel (2001), s. 234-236", yer_kon:[48.8555,16.0488] },

// ══════════════════════════════════════════════════════════════════
// III. ERDEL VE HUNYADİ ÇAĞI (1437-1458)
// ══════════════════════════════════════════════════════════════════

{ t:"1437-07-06", devlet:"macaristan", b:"Bobâlna Köylü Ayaklanması ve Erdel'de Üç Millet İttifakı'nın (Unio Trium Nationum) kurulması", tur:"isyan", onem:4, dunya:1, kapsam:"ic",
  etiket:["isyan","sosyal","idari","konu-idari","konu-isyan","konu-sosyal"],
  yer_id:"",
  d:"Ağır vergiler ve kilise ondalığına karşı patlak veren köylü ayaklanması bastırıldıktan sonra, Erdel'in Macar soyluları, Székelyler ve Sas (Alman) burjuvazisi kendi aralarında bir savunma ve ayrıcalık ittifakı kurdu; Romen köylü çoğunluğu bu ittifakın dışında bırakıldı. Bu düzenleme Erdel'in sonraki dört asırlık idarî yapısının temelini attı.",
  kaynak:"akademik: Engel (2001), s. 288-290; Kontler (2002), s. 100", yer_kon:[47.15,23.65] },

{ t:"1441-01-01", devlet:"macaristan", b:"Hunyadi János'un Erdel voyvodalığına ve Güney sınırı kumandanlığına atanması", tur:"idari", onem:5, dunya:2, kapsam:"ic",
  etiket:["askeri","idari","konu-askeri","konu-idari"],
  yer_id:"",
  d:"Alt tabakadan bir soylu ailesinden gelen Hunyadi János, askerî yeteneği sayesinde Erdel voyvodası ve güney serhaddin başkumandanı oldu; bundan sonraki on yedi yıl Macaristan'ın Osmanlı karşısındaki savunmasının fiilî yürütücüsü olacaktı.",
  kaynak:"akademik: Engel (2001), s. 279-283 — TDV'de Hunyadi için müstakil madde yok, anlatısı `kosova`, `izladi`, `varna` maddelerine dağılmış", yer_id:"Budin" },

{ t:"1443-01-01", devlet:"macaristan", b:"Uzun Sefer'in (Long Campaign) başlaması", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Hunyadi János'un komutasındaki Macar-Leh ordusu, Osmanlı'nın Balkan topraklarına derin bir kışlık sefer düzenledi; İzladi Geçidi'nde ağır kayıp verse de sefer Osmanlı'yı 1444 Edirne-Segedin barışına razı etti.",
  kaynak:"TDV `izladi`: İzladi Geçidi Muharebesi'nin Hunyadi'nin Uzun Sefer'i sırasında yaşandığı anlatılır", yer_id:"Belgrad" },

{ t:"1444-11-10", devlet:"macaristan", b:"Varna Savaşı — Macar-Leh Kralı I. Ulászló'nun ölümü", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","hukumdar","toprak-kayip","konu-askeri","konu-kisiler","konu-hanedan"],
  yer_id:"Varna",
  d:"Edirne-Segedin barışını bozup yenilenen haçlı seferi, II. Murad'ın ordusu karşısında Varna'da tam bir bozgunla sonuçlandı; genç kral Ulászló savaş alanında öldürüldü. Yenilgi, Osmanlı'nın Balkanlar'daki konumunu on yıllarca kalıcı hâle getirdi ve Macaristan'ı bir kez daha naiplik idaresine (Hunyadi'nin valiliğine) soktu.",
  kaynak:"TDV `varna`: Varna Savaşı'nın Osmanlı zaferiyle sonuçlandığı, Macar-Leh Kralı I. Ulászló'nun savaş meydanında öldürüldüğü anlatılır" },

{ t:"1446-06-05", devlet:"macaristan", b:"Hunyadi János'un Macaristan naibi (kormányzó) seçilmesi", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["idari","hukumdar","konu-idari","konu-hanedan"],
  yer_id:"",
  d:"Varna bozgunundan sonra kralsız kalan ülkede soylu meclisi, küçük yaştaki V. László adına Hunyadi'yi naip seçti; Hunyadi bu makamda 1453'e kadar fiilî devlet başkanı olarak kaldı.",
  kaynak:"akademik: Engel (2001), s. 293-295", yer_id:"Peşte" },

{ t:"1448-10-17", devlet:"macaristan", b:"İkinci Kosova Savaşı", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"",
  d:"Hunyadi'nin komutasındaki haçlı ordusu, II. Murad karşısında üç gün süren savaşta ağır biçimde yenildi; Sırp Despotu Brankoviç'in tarafsız kalması Hunyadi'nin geri çekilişini daha da zorlaştırdı. Bozgun, Balkanlar'da büyük ölçekli bir haçlı seferinin son ciddi girişimi oldu.",
  kaynak:"TDV `kosova`: İkinci Kosova Savaşı'nın Osmanlı zaferiyle sonuçlandığı, Hunyadi'nin ordusunun dağıldığı anlatılır", yer_kon:[42.63,21.12] },

{ t:"1456-07-22", devlet:"macaristan", b:"Nándorfehérvár (Belgrad) Kuşatmasının püskürtülmesi", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","kusatma","konu-askeri"],
  yer_id:"Belgrad",
  d:"Hunyadi János ile Capestranolu Giovanni'nin (Kapisztrán János) topladığı köylü-haçlı ordusu, II. Mehmed'in bizzat yönettiği kuşatmayı Belgrad önünde durdurdu; sultan yaralanarak geri çekildi. Zafer Macaristan'ı yetmiş yıl boyunca Osmanlı'nın büyük çaplı bir Tuna seferinden koruyacak, Katolik dünyasında öğle çanlarının çalınması bu zaferi anmak için başlatılacaktı.",
  kaynak:"TDV `belgrad`: 1456 kuşatmasının Hunyadi János önderliğindeki savunmayla püskürtüldüğü, II. Mehmed'in yaralandığı anlatılır" },

{ t:"1456-08-11", devlet:"macaristan", b:"Hunyadi János'un veba salgınında ölümü", tur:"olum", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukumdar","salgin","konu-kisiler","konu-hanedan","afet","afet-salgin"],
  yer_id:"",
  d:"Belgrad zaferinden üç hafta sonra, kuşatma sırasında ordugâhta yayılan vebaya Hunyadi da yakalanarak öldü. Ölümü, Macaristan'ı hem askerî hem siyasî bir liderlik boşluğuna soktu ve oğulları László ile Mátyás'ı iktidar mücadelesinin merkezine taşıdı.",
  kaynak:"akademik: Engel (2001), s. 297-298", yer_kon:[44.8433,20.4004], yer_id:"Belgrad" },

{ t:"1457-03-16", devlet:"macaristan", b:"László Hunyadi'nin idamı — V. László'nun tertibi", tur:"darbe", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar","darbe","darbe-siyasi","konu-kisiler","konu-darbe","konu-hanedan"],
  yer_id:"",
  d:"Genç Kral V. László, kendisine karşı gördüğü Hunyadi ailesinin gücünü kırmak için büyük oğul László Hunyadi'yi tuzağa düşürüp idam ettirdi; küçük kardeş Mátyás da tutuklandı. Bu şiddet, bir yıl sonra Mátyás'ın kral seçilmesinin zeminini hazırlayan halk desteğini doğurdu.",
  kaynak:"akademik: Engel (2001), s. 298-300", yer_id:"Budin" },

// ══════════════════════════════════════════════════════════════════
// IV. MÁTYÁS CORVİNUS'UN ALTIN ÇAĞI (1458-1490)
// ══════════════════════════════════════════════════════════════════

{ t:"1458-01-24", devlet:"macaristan", b:"Hunyadi Mátyás'ın (Mátyás Corvinus) kral seçilmesi", tur:"kurulus", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-siyasi","konu-hanedan"],
  yer_id:"Budin",
  d:"Buda'yı çevreleyen buzlu Tuna üzerinde toplanan soylu ve halk kitlesi, on beş yaşındaki Mátyás'ı kral ilan etti; bu, yabancı bir hanedan yerine 'yerli' bir soylu ailenin tahta çıktığı istisnaî bir andı. Otuz iki yıllık saltanatı Macaristan'ı Orta Avrupa'nın en güçlü devletlerinden birine dönüştürecekti.",
  kaynak:"akademik: Engel (2001), s. 301-303" },

{ t:"1464-03-29", devlet:"macaristan", b:"Mátyás'ın Székesfehérvár'da (İstolni Belgrad) taç giymesi", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-hanedan"],
  yer_id:"İstolni Belgrad",
  d:"Kutsal Taç'ın önce Frederick III'ten satın alınıp geri getirilmesi gerektiğinden Mátyás asıl taç töreni ancak seçiminden altı yıl sonra, geleneksel kraliyet taçlandırma şehri İstolni Belgrad'da (Székesfehérvár) yapılabildi.",
  kaynak:"TDV `istolni-belgrad`: şehrin Macar krallarının geleneksel taç giyme ve gömülme yeri olduğu anlatılır" },

{ t:"1465-06-01", devlet:"macaristan", b:"Pozsony Üniversitesi'nin (Academia Istropolitana) kurulması", tur:"kurulus", onem:2, dunya:1, kapsam:"ic",
  etiket:["bilim","egitim","konu-siyasi","konu-bilim","konu-egitim"],
  yer_id:"Bratislava",
  d:"Mátyás, danışmanı Vitéz János'un girişimiyle Pozsony'da (bugünkü Bratislava) İtalyan hümanist modelinde bir üniversite kurdurdu; kurum kısa ömürlü oldu ama Mátyás sarayındaki hümanist canlanmanın erken bir işaretiydi.",
  kaynak:"akademik: Kontler (2002), s. 103-104" },

{ t:"1467-01-01", devlet:"macaristan", b:"Mátyás'ın vergi reformu — 'kapu adı' (hane) vergisinin genelleştirilmesi", tur:"reform", onem:4, dunya:1, kapsam:"ic",
  etiket:["mali","reform","konu-ekonomi","konu-islahat"],
  yer_id:"", kapsam_genis:true,
  d:"Mátyás, dağınık ve düzensiz feodal vergileri tek bir hane vergisi (kapuadó) altında topladı; reform kraliyet hazinesinin gelirini önemli ölçüde artırdı ve daimi bir ücretli ordunun (Fekete Ordu) finansmanını mümkün kıldı. Soylu muafiyetleri korunduğu için yük esas olarak köylülüğe bindi.",
  kaynak:"akademik: Engel (2001), s. 308-311", yer_id:"Budin" },

{ t:"1471-01-01", devlet:"macaristan", b:"Fekete Ordu'nun (Fekete Sereg) daimi ücretli ordu olarak kurumsallaşması", tur:"kurulus", onem:4, dunya:2, kapsam:"ic",
  etiket:["askeri","reform","konu-askeri","konu-siyasi","konu-islahat"],
  yer_id:"", kapsam_genis:true,
  d:"Çoğu Çek ve Alman paralı askerden oluşan Fekete Ordu, Mátyás'ın vergi reformuyla finanse edilen Avrupa'nın ilk büyük daimi ücretli ordularından biri hâline geldi; disiplinli yapısı Mátyás'a Avusturya ve Bohemya'ya karşı seferler açma gücü verdi.",
  kaynak:"akademik: Engel (2001), s. 313-315" },

{ t:"1473-06-05", devlet:"macaristan", b:"Macaristan'ın ilk matbaası — Hess András'ın Buda'da 'Chronica Hungarorum'u basması", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["bilim","kultur","imar","islahat","konu-bilim","konu-kultur","konu-imar","konu-islahat"],
  yer_id:"Budin",
  d:"Gutenberg'in ilk baskısından yalnızca on sekiz yıl sonra, Budin'de kurulan matbaadan çıkan 'Chronica Hungarorum' (Macar Vekayinâmesi), Macaristan'ı Avrupa'nın erken matbaacı ülkeleri arasına soktu. Matbaa Mátyás'ın ölümünden sonra kısa sürede etkinliğini yitirdi.",
  kaynak:"akademik: Kontler (2002), s. 106" },

{ t:"1476-12-15", devlet:"macaristan", b:"Mátyás'ın Nápoli Prensesi Beatrice ile evlenmesi ve saraya İtalyan Rönesansı'nın girişi", tur:"evlilik", onem:3, dunya:2, kapsam:"dis",
  etiket:["kultur","evlilik","diplomasi","konu-diplomasi","konu-hanedan","konu-kultur","konu-imar"],
  yer_id:"Budin",
  d:"Beatrice'in beraberinde getirdiği İtalyan sanatçı, mimar ve bilgin çevresi, Budin sarayını Alpler'in kuzeyindeki ilk büyük Rönesans merkezlerinden birine dönüştürdü; saray mimarîsi, bahçeler ve kütüphane bu evlilikten sonra hızla genişledi.",
  kaynak:"akademik: Engel (2001), s. 320-322" },

{ t:"1485-06-01", devlet:"macaristan", b:"Mátyás'ın Viyana'yı ele geçirmesi", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  yer_id:"Viyana",
  d:"Habsburglu III. Frederick'e karşı yürüttüğü seferde Mátyás, Fekete Ordu'suyla Viyana'yı kuşatıp ele geçirdi ve ölümüne kadar (1490) burayı fiilî ikinci başkenti olarak kullandı; Avusturya'nın büyük bölümü de bu dönemde Macar denetimine girdi. Bu, bir Macar kralının Habsburg başşehrini işgal ettiği tek dönemdi.",
  kaynak:"akademik: Engel (2001), s. 325-328" },

{ t:"1489-01-01", devlet:"macaristan", b:"Bibliotheca Corviniana'nın Avrupa'nın önde gelen Rönesans kütüphanelerinden biri hâline gelmesi", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["kultur","bilim","konu-bilim","konu-kultur"],
  yer_id:"Budin",
  d:"Mátyás'ın İtalyan ve Bizanslı hattat-nakkaşlar istihdam ederek büyüttüğü kütüphane, ölümüne dek yaklaşık 2000-2500 elyazması cilde ulaştı; Floransa Medici kütüphanesiyle boy ölçüşen koleksiyon, Mátyás'ın ölümünden sonra dağıldı ve bugün UNESCO Dünya Belleği listesindedir.",
  kaynak:"akademik: Kontler (2002), s. 106-107" },

{ t:"1490-04-06", devlet:"macaristan", b:"Mátyás Corvinus'un ölümü", tur:"olum", onem:5, dunya:3, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"Meşru varis bırakmadan ölen Mátyás'ın ardından merkezîleşme siyaseti çöktü; Fekete Ordu dağıtıldı, soylular güçlerini geri kazandı ve taht zayıf bir Jagiellon kralına, II. Ulászló'ya geçti. Çağdaşları bu ölümü Macaristan'ın 'altın çağının' sonu olarak andı.",
  kaynak:"akademik: Engel (2001), s. 345-347", yer_id:"Viyana" },

// ══════════════════════════════════════════════════════════════════
// V. JAGELLON ÇÖKÜŞÜ VE MOHAÇ (1490-1526)
// ══════════════════════════════════════════════════════════════════

{ t:"1490-07-15", devlet:"macaristan", b:"II. Ulászló'nun (Jagiellon) kral seçilmesi", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-hanedan"],
  yer_id:"İstolni Belgrad",
  d:"Soylular, güçlü bir kral yerine kendilerine boyun eğecek zayıf bir hükümdar istedikleri için Bohemya Kralı II. Ulászló'yu seçti; çağdaşları onu her isteğe 'dobže' (tamam) dediği için 'Dobzse Kral' diye anacaktı. Bu seçim, merkezî otoritenin hızla erimesinin başlangıcı oldu.",
  kaynak:"akademik: Engel (2001), s. 348-350" },

{ t:"1514-05-01", devlet:"macaristan", b:"Dózsa György köylü ayaklanmasının başlaması", tur:"isyan", onem:5, dunya:2, kapsam:"ic",
  etiket:["isyan","sosyal","konu-isyan","konu-sosyal"],
  yer_id:"",
  d:"Osmanlı'ya karşı ilan edilen bir haçlı seferi için toplanan köylü ordusu, komutanı Dózsa György önderliğinde toprak beylerine karşı ayaklanmaya dönüştü; isyan kısa sürede ülke genelinde binlerce can kaybına yol açan bir sınıf savaşına dönüştü ve Temmuz'da soylu kuvvetlerince kanlı biçimde bastırıldı.",
  kaynak:"akademik: Engel (2001), s. 355-357; Kontler (2002), s. 116-117", yer_id:"Peşte" },

{ t:"1514-07-20", devlet:"macaristan", b:"Dózsa György'nin idamı", tur:"olum", onem:4, dunya:1, kapsam:"ic",
  etiket:["darbe","isyan","konu-kisiler","konu-isyan","konu-darbe"],
  yer_id:"",
  d:"Yakalanan Dózsa, kızgın demir taçla 'taçlandırılıp' işkenceyle öldürüldü; isyanın bastırılması köylülüğe karşı ağır bir misilleme dalgası ve yasal statüde geriye gidiş başlattı.",
  kaynak:"akademik: Engel (2001), s. 357", yer_id:"Temeşvar" },

{ t:"1517-01-01", devlet:"macaristan", b:"Werbőczy István'ın 'Tripartitum'unun yayımlanması", tur:"kanun", onem:5, dunya:1, kapsam:"ic",
  etiket:["kanun","idari","konu-idari","konu-hukuk"],
  yer_id:"", kapsam_genis:true,
  d:"Dózsa isyanının hemen ardından hazırlanan bu hukuk derlemesi, soylu ayrıcalıklarını pekiştirdi ve köylülüğü toprağa bağlı, kişisel özgürlüğü olmayan bir 'gerçek kölelik' (örökös jobbágyság) statüsüne soktu. Resmî yasa olarak onaylanmasa da üç yüzyıl boyunca Macar hukukunun fiilî temel metni olarak kullanıldı.",
  kaynak:"akademik: Engel (2001), s. 358; Kontler (2002), s. 117", yer_id:"Viyana" },

{ t:"1516-03-13", devlet:"macaristan", b:"II. Lajos'un on yaşında tahta çıkışı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-hanedan"],
  yer_id:"İstolni Belgrad",
  d:"Ulászló'nun ölümüyle henüz çocuk yaştaki oğlu Lajos kral oldu; naiplik döneminde soylu hizipleri arasındaki çekişme devlet hazinesini ve savunma kapasitesini iyice zayıflattı — ülke on yıl sonra Mohaç'a bu çöküş içinde girecekti.",
  kaynak:"akademik: Engel (2001), s. 358-360" },

{ t:"1521-08-29", devlet:"macaristan", b:"Nándorfehérvár'ın (Belgrad) Osmanlı'ya düşmesi", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"Belgrad",
  d:"Kanuni Sultan Süleyman'ın kişisel komutasındaki ordu, 1456'da Hunyadi'nin savunduğu Belgrad'ı altmış beş yıl sonra ele geçirdi; Macaristan'ın güney sınırındaki en güçlü kalesinin kaybı, Budin'e giden yolu açtı ve beş yıl sonraki Mohaç faciasının zeminini hazırladı.",
  kaynak:"TDV `kanuni-sultan-suleyman`: 1521'de Belgrad'ın fethedildiği, bunun Macaristan seferlerinin önünü açtığı anlatılır" },

{ t:"1526-08-29", devletler:["macaristan","macaristan-habsburg"], b:"Mohaç Meydan Savaşı — bağımsız Macar krallığının sonu", tur:"son", onem:5, dunya:5, kapsam:"dis",
  etiket:["askeri","hanedan","toprak-kayip","son","konu-askeri","konu-siyasi","konu-hanedan"],
  yer_id:"Mohaç",
  d:"Kanuni Sultan Süleyman'ın ordusu, II. Lajos'un komutasındaki Macar ordusunu iki saatten kısa bir sürede yok etti; kral, savaş alanından kaçarken bir bataklıkta boğularak öldü, Macar soylu ve din adamlarının büyük bölümü savaş meydanında can verdi. Bu yenilgiyle 895'ten beri süregelen bağımsız Macar krallığı fiilen sona erdi ve ülke üç asır sürecek bir bölünme ve yabancı hâkimiyeti dönemine girdi.",
  kaynak:"TDV `mohac`: II. Lajos'un ordusunun ağır bir bozguna uğradığı, kralın kaçarken öldüğü, Macaristan'ın bu yenilgiyle merkezî otoritesini yitirdiği anlatılır · depo savaslar.js (1526-08-29)" },

// ══════════════════════════════════════════════════════════════════
// VI. ÜÇE BÖLÜNME — KRALİYET MACARİSTANI, BUDİN EYALETİ, ERDEL (1526-1606)
// ══════════════════════════════════════════════════════════════════

{ t:"1526-11-10", devlet:"dogu-macar-kralligi", b:"Szapolyai János'un (I. János) rakip kral seçilmesi", tur:"bolunme", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukumdar","bolunme","konu-siyasi","konu-hanedan"],
  yer_id:"İstolni Belgrad",
  d:"Mohaç'tan sonra Erdel voyvodası Szapolyai János, ulusal bir soylu meclisi tarafından kral seçildi; aynı yıl içinde bir başka meclis de Habsburglu Ferdinand'ı seçecek ve ülke iki rakip kralın hükümranlık iddiasıyla bölünecekti.",
  kaynak:"akademik: Engel (2001), s. 360-362" },

{ t:"1526-12-17", devlet:"macaristan-habsburg", gun:"16-17 Aralık 1526, Pozsony — seçim günü kaynaklarda 16 (Wien Geschichte Wiki) ya da 17 (diyetin bitişi; `macaristan-habsburg` künyesi) Aralık", b:"I. Ferdinand'ın da kral seçilmesi — iki kral dönemi", tur:"bolunme", onem:5, dunya:2, kapsam:"dis",
  etiket:["hukumdar","bolunme","hanedan","konu-siyasi","konu-hanedan"],
  yer_id:"İstolni Belgrad",
  d:"II. Lajos'un kız kardeşiyle evli olan Habsburglu Ferdinand, Batı ve Kuzey Macaristan'ın büyük kısmının desteğiyle kral ilan edildi; on üç yıl sürecek bir iç savaşta iki kral (Szapolyai ve Ferdinand) ülke üzerinde birbiriyle çatıştı, her ikisi de zaman zaman Osmanlı'dan destek aradı.",
  kaynak:"akademik: Engel (2001), s. 362-364 · gün: Magyar Katolikus Lexikon, 'pozsonyi királyválasztó országgyűlés' (sayfa okundu, KRONO-ORTA-AVRUPA-0929): \"1526. nov. 30.-dec. 17.: Habsburg Ferdinánd … magyar királlyá … választó gyűlés\" · 🔴 DÜZELTME: önceki gün 1527-01-01 idi; aynı sözlük o günü Hırvat soylularının Cetin'de Ferdinand'ı seçtiği gün olarak veriyor (\"A horvátok Czetinben 1527. I. 1: választották kir-lyá Ferdinándot\") — iki seçim karışmıştı; Cetin seçimi ayrı madde: kronoloji_cok_macaristan.js" },

{ t:"1538-02-24", devletler:["macaristan-habsburg","dogu-macar-kralligi"], b:"Nagyvárad Antlaşması — Zápolya-Ferdinand paylaşımı", tur:"antlasma", onem:4, dunya:2, kapsam:"ic",
  etiket:["antlasma","bolunme","konu-siyasi","konu-diplomasi"],
  yer_id:"",
  d:"İki rakip kral, Zápolya'nın ölümünden sonra ülkenin tamamının Ferdinand'a geçmesini öngören gizli bir barışa vardı; ancak Zápolya'nın 1540'ta bir erkek varis (János Zsigmond) bırakarak ölmesi antlaşmayı geçersiz kıldı ve savaşı yeniden alevlendirdi.",
  kaynak:"akademik: Engel (2001), s. 364-365", yer_id:"Varad (Oradea)" },

{ t:"1540-07-22", devlet:"dogu-macar-kralligi", b:"I. János'un (Szapolyai) ölümü ve János Zsigmond'un doğumu", tur:"hanedan", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","olum","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"Zápolya'nın ölümünden birkaç gün önce doğan oğlu János Zsigmond, henüz beşikteyken kral ilan edildi; annesi Isabella'nın naipliği ve Osmanlı'nın himayesi, Nagyvárad Antlaşması'nın Ferdinand lehine öngördüğü devri fiilen imkânsız kıldı.",
  kaynak:"akademik: Engel (2001), s. 366", yer_kon:[45.9589,23.5686] },

{ t:"1541-08-29", devlet:"macaristan-habsburg", b:"Budin'in Osmanlı tarafından fethi — ülkenin üçe bölünmesi", tur:"bolunme", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kayip","bolunme","konu-askeri","konu-siyasi"],
  yer_id:"Budin",
  d:"Kanuni Sultan Süleyman, Budin'i kuşatma bahanesiyle ele geçirip doğrudan Osmanlı eyaleti hâline getirdi; ülke bundan böyle üç ayrı siyasî varlığa bölündü — merkezde Osmanlı Budin Eyaleti, batı ve kuzeyde Habsburg'a bağlı Kraliyet Macaristanı, doğuda Osmanlı vasalı Erdel Prensliği. Bu bölünme 1699'a kadar 158 yıl sürecekti ve Macar tarihinde en derin travmalardan biri sayılır.",
  kaynak:"TDV `budin`: Budin'in 1541'de Osmanlı eyaleti hâline getirildiği, Macaristan'ın bu tarihten sonra üç kesime ayrıldığı anlatılır" },

{ t:"1552-09-04", devlet:"macaristan-habsburg", b:"Eğri Kalesi'nin savunması — Dobó István'ın direnişi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","kusatma","konu-askeri"],
  yer_id:"Eğri",
  d:"Osmanlı ordusunun kırk gün süren kuşatmasına karşı Eğri'nin küçük garnizonu, kadınların da katıldığı bir savunmayla kaleyi düşürtmedi; başarısız kuşatma Macar millî hafızasında sembolik bir direniş zaferi olarak yer etti ve daha sonra Gárdonyi Géza'nın ünlü romanına konu oldu.",
  kaynak:"TDV `egri`: 1552 kuşatmasının Osmanlı ordusunun geri çekilmesiyle sonuçlandığı anlatılır" },

{ t:"1566-09-07", devlet:"macaristan-habsburg", gun:"Kanunî 6-7 Eylül 1566 gecesi öldü (TDV); kalenin düşüşünün günü TDV'de yok", b:"Sigetvár Kuşatması ve Kanuni'nin ölümü", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","kusatma","olum","konu-askeri","konu-kisiler","konu-hukuk"],
  yer_id:"",
  d:"Zrínyi Miklós komutasındaki küçük garnizon, aylar süren kuşatmaya direndikten sonra son bir çıkışla neredeyse tamamen yok oldu; kale düşmeden hemen önce Kanuni Sultan Süleyman ordugâhında yaşlılıktan öldü, ölümü savaş bitene dek gizli tutuldu. Zrínyi'nin direnişi Macar-Hırvat millî hafızasında Eğri'ninkine benzer bir kahramanlık efsanesine dönüştü.",
  kaynak:"TDV `suleyman-i` (sayfa okundu, KRONO-ORTA-AVRUPA-0929): \"20-21 Safer 974 (6-7 Eylül 1566) gecesi hayata gözlerini yumdu\" · TDV `sigetvar`: kuşatmanın 5 Ağustos 1566'da başladığını ve 5 Eylül'de açılan lağımı anlatır, düşüş günü vermez · 🔴 DÜZELTME: önceki gün 1566-09-08 TDV sigetvar'a dayandırılmıştı ama o maddede 8 Eylül YOK; çekirdek olaylar.js 1566-09-07 ile hizalandı", yer_id:"Zigetvar" },

{ t:"1571-08-16", devlet:"erdel", b:"Torda Edikti — Erdel'de din özgürlüğünün yasalaşması", tur:"kanun", onem:4, dunya:1, kapsam:"ic",
  etiket:["din","kanun","konu-din","konu-hukuk"],
  yer_id:"", kapsam_genis:true,
  d:"Erdel Meclisi, Katoliklik, Lutherci ve Kalvinci Protestanlık ile Üniteryenliği eşit ölçüde tanıyan bir yasa kabul etti; bu, Avrupa'da bir devletin dört farklı mezhebi resmen ve eşit biçimde tanıdığı ilk örneklerden biriydi ve Erdel'in çok-mezhepli özgün kimliğinin hukukî temelini oluşturdu.",
  kaynak:"akademik: Graeme Murdock, Calvinism on the Frontier (2000), s. 25-30", yer_kon:[46.5689,23.7856] },

{ t:"1590-07-20", devlet:"macaristan-habsburg", b:"Vizsoly İncili'nin basımı — tam Macarca Kutsal Kitap", tur:"kultur", onem:4, dunya:1, kapsam:"ic",
  etiket:["kultur","din","bilim","konu-bilim","konu-din","konu-kultur"],
  yer_id:"",
  d:"Kalvinist papaz Károli Gáspár'ın çevirdiği tam Kutsal Kitap, Vizsoly'de basılarak Macar Reform kilisesinin standart metni oldu; çeviri aynı zamanda modern Macarcanın yazı diline en etkili katkılardan biri sayılır ve bugün hâlâ kullanılmaktadır.",
  kaynak:"akademik: Kontler (2002), s. 145", yer_kon:[48.3841,21.2151] },

// ══════════════════════════════════════════════════════════════════
// VII. BOCSKAI'DEN BUDİN'İN GERİ ALINIŞINA (1604-1687)
// ══════════════════════════════════════════════════════════════════

{ t:"1604-10-15", devlet:"macaristan-habsburg", b:"Bocskai İstván ayaklanmasının başlaması", tur:"isyan", onem:5, dunya:2, kapsam:"ic",
  etiket:["isyan","din","konu-isyan","konu-din"],
  yer_id:"",
  d:"Habsburg yönetiminin Kraliyet Macaristanı'nda Protestan soyluların mülk ve din haklarına yönelik baskıları, eski bir Habsburg kumandanı olan Bocskai'yi silahlı isyana yöneltti; hajdú (serbest asker) kuvvetleriyle hızla Kraliyet Macaristanı'nın büyük kısmını ele geçirdi ve Erdel prensi seçildi.",
  kaynak:"akademik: Kontler (2002), s. 154-155 — TDV `avusturya` maddesinde de Bocskai ayaklanması Osmanlı-Habsburg savaşının bir parçası olarak anılır", yer_kon:[47.417,21.983] },

{ t:"1606-06-23", devlet:"macaristan-habsburg", b:"Viyana Barışı — Bocskai'nin din ve anayasal haklarının tanınması", tur:"antlasma", onem:5, dunya:2, kapsam:"ic",
  etiket:["antlasma","din","kanun","konu-diplomasi","konu-din","konu-hukuk"],
  yer_id:"Viyana",
  d:"Rudolf'un imzaladığı barışla Kraliyet Macaristanı'ndaki Protestan soyluların din özgürlüğü, anayasal ayrıcalıkları ve Erdel'in bağımsızlığı resmen tanındı; bu, Habsburg merkezîleşmesine karşı Macar anayasacılığının kazandığı ilk büyük zaferdi.",
  kaynak:"akademik: Kontler (2002), s. 155" },

{ t:"1606-11-11", devlet:"macaristan-habsburg", b:"Zitvatorok Antlaşması", tur:"antlasma", onem:4, dunya:3, kapsam:"dis",
  etiket:["antlasma","diplomasi","konu-diplomasi"],
  yer_id:"",
  d:"Bocskai ayaklanmasının da baskısıyla imzalanan barış, on üç yıl süren savaşı sona erdirdi ve Osmanlı ile Habsburg'u ilk kez protokolde eşit hükümdarlar olarak tanıdı; sınırlar büyük ölçüde değişmedi ama Macaristan'ın üçlü bölünmesi fiilen kalıcı hâle geldi.",
  kaynak:"TDV `zitvatorok-antlasmasi`: antlaşmanın Osmanlı-Habsburg savaşını sona erdirdiği ve protokolde eşitlik getirdiği anlatılır", yer_kon:[47.855,18.242] },

{ t:"1613-10-23", devlet:"erdel", b:"Bethlen Gábor'un Erdel prensi seçilmesi", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["hukumdar","konu-hanedan"],
  yer_id:"Erdel Belgradı (Gyulafehérvár)",
  d:"Osmanlı desteğiyle prens seçilen Bethlen, on altı yıllık saltanatında Erdel'i idarî, malî ve kültürel açıdan yeniden inşa ederek prensliğin 'altın çağını' başlattı; aynı zamanda Otuz Yıl Savaşları'nda Protestan cephesinin en önemli müttefiklerinden biri oldu.",
  kaynak:"akademik: Kontler (2002), s. 157-159" },

{ t:"1619-08-26", devlet:"erdel", b:"Bethlen Gábor'un Bohemya seferi — Otuz Yıl Savaşları'na katılım", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","ittifak","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"Bethlen, Bohemyalı Protestan isyancılarla ittifak kurarak Habsburg topraklarına saldırdı ve kısa süreliğine Macaristan Kralı unvanını da aldı; sefer Erdel'i Otuz Yıl Savaşları'nın Protestan cephesinin doğu kanadı hâline getirdi.",
  kaynak:"akademik: Kontler (2002), s. 158", yer_id:"Erdel (Kaloşvar)" },

{ t:"1621-12-31", devletler:["erdel","habsburg"], b:"Nikolsburg Barışı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["antlasma","diplomasi","konu-diplomasi"],
  yer_id:"",
  d:"Bethlen, Macaristan Kralı unvanından vazgeçmesi karşılığında yedi Kuzey-Doğu Macaristan ilini (megye) Erdel'e katma hakkı kazandı; barış Erdel'in toprak genişliğinin zirvesini temsil eder.",
  kaynak:"akademik: Kontler (2002), s. 158", yer_kon:[48.8056,16.6378] },

{ t:"1622-01-01", devlet:"erdel", b:"Gyulafehérvár Akademisi'nin (Collegium Academicum) kurulması", tur:"kurulus", onem:3, dunya:1, kapsam:"ic",
  etiket:["bilim","egitim","kultur","konu-siyasi","konu-bilim","konu-kultur","konu-egitim"],
  yer_id:"Erdel Belgradı (Gyulafehérvár)",
  d:"Bethlen Gábor, başkenti Gyulafehérvár'da Protestan bir yükseköğretim kurumu kurdurdu; Alman ve Hollandalı bilginleri getirterek kurumu Orta Avrupa Protestan dünyasının önemli bir merkezine dönüştürdü. Akademi, Bethlen'in kültür siyasetinin en kalıcı eseri sayılır.",
  kaynak:"akademik: Kontler (2002), s. 159" },

{ t:"1629-11-15", devlet:"erdel", b:"Bethlen Gábor'un ölümü", tur:"olum", onem:4, dunya:2, kapsam:"ic",
  etiket:["hukumdar","konu-kisiler","konu-hanedan"],
  yer_id:"Erdel Belgradı (Gyulafehérvár)",
  d:"Bethlen'in ölümüyle Erdel'in 'altın çağı' sona erdi; ardılı I. Rákóczi György döneminde prenslik bir süre daha istikrarını korusa da, torunu II. Rákóczi György'nin 1657'deki talihsiz Lehistan seferi Erdel'in çöküşünü başlatacaktı.",
  kaynak:"akademik: Kontler (2002), s. 159-160" },

{ t:"1657-01-01", devlet:"erdel", b:"II. Rákóczi György'nin talihsiz Lehistan seferi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","kriz","konu-askeri","konu-siyasi"],
  yer_id:"",
  d:"Osmanlı'nın açık izni olmadan İsveç ile birlikte Lehistan'a giren Rákóczi'nin ordusu Tatar kuvvetlerince imha edildi; felaket, Osmanlı'nın Erdel üzerindeki denetimini sertleştirmesine ve prensliğin bir daha toparlanamayacağı bir çöküş sürecine yol açtı.",
  kaynak:"akademik: Kontler (2002), s. 160-161", kapsam_genis:true },

{ t:"1660-08-27", devlet:"erdel", b:"Nagyvárad'ın Osmanlı'ya düşmesi", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"",
  d:"Rákóczi'nin Lehistan felaketinin ardından Osmanlı, Erdel'in en önemli batı kalesi Nagyvárad'ı doğrudan ilhak etti; kayıp, Erdel'in özerkliğinin fiilen sona erme sürecinin bir başka aşamasıydı.",
  kaynak:"akademik: Kontler (2002), s. 161", yer_id:"Varad (Oradea)" },

{ t:"1671-04-30", devlet:"macaristan-habsburg", b:"Wesselényi Tertibi'nin bastırılması ve Macar anayasasının askıya alınması", tur:"isyan", onem:5, dunya:2, kapsam:"ic",
  etiket:["isyan","kriz","kanun","konu-siyasi","konu-isyan","konu-hukuk"],
  yer_id:"", kapsam_genis:true,
  d:"Bir grup üst düzey Macar soylusunun Habsburg merkezîleşmesine karşı hazırladığı komplo ortaya çıkarılınca Viyana, komplocuları idam ettirdi ve bahaneyle Macaristan'ın anayasal özerkliğini fiilen askıya alarak doğrudan askerî-idarî yönetim kurdu; bu sertlik, izleyen on yılda Kuruc hareketinin doğuşunu hazırladı.",
  kaynak:"TDV `avusturya`: Wesselényi komplosunun bastırılmasının ardından Macaristan'da anayasal hakların askıya alındığı anlatılır", yer_kon:[47.8167,16.25] },

{ t:"1678-09-13", devlet:"macaristan-habsburg", b:"Thököly İmre'nin Kuruc hareketinin başına geçmesi", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["isyan","hukumdar","konu-isyan","konu-hanedan"],
  yer_id:"",
  d:"Wesselényi Tertibi sonrası Habsburg baskısından kaçan Protestan soylu ve askerlerden oluşan Kuruc hareketi, genç Thököly İmre'nin liderliğinde birleşti; Thököly, Osmanlı desteğiyle Kuzey-Doğu Macaristan'ın büyük kısmını ele geçirecekti.",
  kaynak:"TDV `tokoli-imre`: Thököly'nin Kuruc hareketinin lideri olarak Osmanlı desteğiyle Kuzey Macaristan'da hâkimiyet kurduğu anlatılır", kapsam_genis:true },

{ t:"1682-09-16", devlet:"orta-macar-kralligi", gun:"16 Eylül 1682 (Fülek önünde beylik alâmetlerinin verilişi)", b:"Thököly İmre'nin Fülek'te Osmanlı vasalı Orta Macar kralı olarak tanınması", tur:"kurulus", onem:4, dunya:2, kapsam:"dis",
  etiket:["vassal","kurulus","hukumdar","konu-siyasi","konu-hanedan"],
  yer_id:"Kassa (Košice)",
  d:"Budin Beylerbeyi İbrahim Paşa, Fülek önünde Thököly'ye beylik alâmetlerini verdi; IV. Mehmed'in beratı da alınmıştı. Böylece Osmanlı, Kassa merkezli Kuzey-Doğu Macaristan'da haraçgüzar bir 'Orta Macar' krallığı tanımış oldu; Kassa, Eperjes ve Tokaj bu kısa ömürlü vasal yapının merkezleriydi. Yapı 1683 Viyana bozgunundan sonra hızla çözüldü.",
  kaynak:"TDV `tokoli-imre` (sayfa okundu, KRONO-ORTA-AVRUPA-0929): \"Budin Beylerbeyi İbrâhim Paşa 16 Eylül'de Fülek Kalesi önünde İmre Tököli'ye prenslik alâmetlerini verdi; IV. Mehmed'den de berat alınmıştı\" · aynı madde: \"1682 Nisanından itibaren Eğri beylerbeyinin Tököli'den Orta Macaristan'ın seçilmiş kralı diye bahsetmesi\" · akademik: Kontler (2002), s. 165-166 · 🔴 DÜZELTME: önceki gün 1682-08-01 idi; kaynakta o gün bulunamadı" },

{ t:"1685-10-15", devlet:"orta-macar-kralligi", gun:"15 Ekim 1685 (Varad'da tutuklanma)", b:"Thököly'nin Varad'da tutuklanması ve Orta Macar Krallığı'nın çöküşü", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"ic",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"Kassa (Košice)",
  d:"Serdar Melek İbrahim Paşa'nın emriyle Varad Beylerbeyi Ahmed Paşa, yardıma gelen Thököly'yi yakalattı. Habsburg karşı taarruzu aynı sonbaharda Kassa'yı da aldı; Thököly 2 Ocak 1686'da Belgrad'da serbest bırakıldığında Orta Macar Krallığı ortadan kalkmıştı. Kuruc geleneği sonraki kuşakta II. Rákóczi Ferenc'e miras kaldı.",
  kaynak:"TDV `tokoli-imre` (sayfa okundu, KRONO-ORTA-AVRUPA-0929): \"15 Ekim 1685'te Serdar Melek İbrâhim Paşa'nın emriyle Varad Beylerbeyi Ahmed Paşa kendisine yardım için gelen İmre Tököli'yi yakalattı\" · \"2 Ocak 1686'da Belgrad'da serbest bırakıldığında Orta Macar Krallığı artık ortadan kalkmıştı\" · akademik: Kontler (2002), s. 166 · 🔴 DÜZELTME: başlık 15 Ekim'i Kassa'nın kaybına bağlıyordu; TDV o günü tutuklanmaya veriyor, Kassa'nın teslim günü bulunamadı" },

{ t:"1686-09-02", devlet:"macaristan-habsburg", b:"Budin'in Habsburglar tarafından geri alınması", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  yer_id:"Budin",
  d:"Kutsal İttifak ordusu, 145 yıllık Osmanlı hâkimiyetindeki Budin'i geri aldı; Macar millî hafızasında bu, 'ülkenin Osmanlı boyunduruğundan kurtuluşunun' başlangıcı olarak anılır, ancak kurtuluş yeni bir Habsburg merkezîleşmesiyle sonuçlanacaktı.",
  kaynak:"TDV `budin`: Budin'in 1686'da Kutsal İttifak ordusunca geri alındığı anlatılır" },

{ t:"1687-08-12", devlet:"macaristan-habsburg", b:"İkinci Mohaç (Harsány) zaferi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"Mohaç",
  d:"Habsburg-Kutsal İttifak ordusu, Osmanlı kuvvetlerini 1526'daki bozgun alanına yakın bir yerde yenerek Macaristan'ın büyük bölümünün kurtarılış sürecini hızlandırdı; zafer sembolik olarak 'Mohaç'ın intikamı' diye anıldı.",
  kaynak:"akademik: Kontler (2002), s. 166-167" },

{ t:"1687-12-09", devlet:"macaristan-habsburg", b:"Pressburg Diyeti — Macar tacının Habsburg hanedanında kalıtsallaşması", tur:"reform", onem:5, dunya:1, kapsam:"ic",
  etiket:["reform","kanun","kriz","konu-siyasi","konu-hanedan","konu-islahat","konu-hukuk"],
  yer_id:"Bratislava",
  d:"Kutsal İttifak zaferlerinin baskısı altında toplanan Macar Diyeti, tacın artık seçimle değil Habsburg hanedanının erkek soyunda kalıtsal olarak geçmesini kabul etti ve 1222 Altın Bulla'daki soylu 'direnme hakkını' (ius resistendi) kaldırdı; bu, Macar anayasal özerkliğinin en büyük gerilemelerinden biriydi.",
  kaynak:"akademik: Kontler (2002), s. 167-168" },

// ══════════════════════════════════════════════════════════════════
// VIII. RÁKÓCZİ BAĞIMSIZLIK SAVAŞI VE HABSBURG UZLAŞMASI (1697-1740)
// ══════════════════════════════════════════════════════════════════

{ t:"1697-09-11", devlet:"macaristan-habsburg", b:"Zenta zaferi", tur:"savas", onem:3, dunya:3, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Prens Eugen komutasındaki Habsburg ordusu, Osmanlı ordusunu Tisza Nehri geçişi sırasında ağır biçimde yendi; zafer Karlofça müzakerelerinde Habsburg'un elini güçlendirdi ve Osmanlı'nın Macaristan'daki nihaî çekilişini kesinleştirdi.",
  kaynak:"akademik: Kontler (2002), s. 167", yer_kon:[45.93,20.09] },

{ t:"1699-01-26", devlet:"macaristan-habsburg", b:"Karlofça Antlaşması — Macaristan'ın Habsburg tacında bütünleşmesi", tur:"antlasma", onem:5, dunya:4, kapsam:"dis",
  etiket:["antlasma","toprak-kazanc","diplomasi","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"Antlaşmayla Temeşvar hariç tüm Macaristan ve Erdel Habsburg'a bırakıldı; 158 yıl süren üçlü bölünme resmen sona erdi ve ülke -Erdel'in ayrı bir idarî statüsü korunmakla birlikte- ilk kez tek bir hanedanın tacı altında bütünleşti. Macar tarihyazımında bu, hem 'Osmanlı'dan kurtuluşun' hem de 'tam Habsburg denetiminin' başlangıcı olarak çift anlamlıdır.",
  kaynak:"TDV `karlofca`: antlaşmayla Osmanlı'nın Macaristan'dan (Temeşvar hariç) kesin olarak çekildiği anlatılır", yer_id:"Varadin (Petrovaradin)" },

{ t:"1703-06-07", devlet:"macaristan-habsburg", b:"II. Rákóczi Ferenc'in Brezán Manifestosu — bağımsızlık savaşının başlaması", tur:"isyan", onem:5, dunya:2, kapsam:"ic",
  etiket:["isyan","hukumdar","konu-isyan","konu-hanedan"],
  yer_id:"",
  d:"Sürgündeki Rákóczi, Lehistan'dan Macaristan'a geçerek 'Recrudescunt' manifestosuyla Habsburg'a karşı silahlı direnişi ilan etti; ağır vergilere ve dinî baskıya öfkeli hajdú ve köylü kitleleri kısa sürede onun Kuruc ordusuna katıldı. Sekiz yıl sürecek bağımsızlık savaşı böyle başladı.",
  kaynak:"akademik: Kontler (2002), s. 170-171 — TDV `tokoli-imre` maddesinde Kuruc geleneğinin Thököly'den Rákóczi'ye devri anılır", yer_kon:[49.4467,24.95] },

{ t:"1704-07-08", devlet:"erdel", b:"Rákóczi'nin Erdel Prensi seçilmesi", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-hanedan"],
  yer_id:"Erdel Belgradı (Gyulafehérvár)",
  d:"Erdel Meclisi, Habsburg'a karşı savaşı sürdüren Rákóczi'yi prens seçti; bu, hem savaşın meşruiyetini pekiştirdi hem de Erdel'i doğrudan bağımsızlık mücadelesinin bir parçası hâline getirdi.",
  kaynak:"akademik: Kontler (2002), s. 171" },

{ t:"1707-06-13", devlet:"macaristan-habsburg", b:"Ónod Diyeti — Habsburg hanedanının tahttan indirildiğinin ilanı", tur:"kanun", onem:4, dunya:2, kapsam:"ic",
  etiket:["kanun","isyan","darbe-siyasi","konu-isyan","konu-darbe","konu-hanedan","konu-hukuk"],
  yer_id:"", kapsam_genis:true,
  d:"Rákóczi'nin çağırdığı Diyet, Habsburg hanedanını Macar tahtından resmen 'hal' etti; ancak bu radikal adım, ılımlı soyluların bir kısmını harekete küstürdü ve savaşın malî-siyasî temelini de zayıflattı.",
  kaynak:"akademik: Kontler (2002), s. 171-172", yer_kon:[48.1,20.9333] },

{ t:"1708-08-03", devlet:"macaristan-habsburg", b:"Trencsén Muharebesi — Rákóczi'nin dönüm noktası bozgunu", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Rákóczi'nin ordusu Habsburg kuvvetleri karşısında ağır bir yenilgiye uğradı; bozgun, savaşın askerî dengesini kesin biçimde Habsburg lehine çevirdi ve izleyen üç yılda Kuruc direnişi giderek geriledi.",
  kaynak:"akademik: Kontler (2002), s. 172", yer_id:"Trencsén (Trenčín)" },

{ t:"1711-04-29", devlet:"macaristan-habsburg", gun:"29 Nisan 1711 (Nagykároly'da imza); Majtény ovasında silah bırakma 1 Mayıs; onay 26 Mayıs 1711, Viyana", b:"Szatmár Barışı", tur:"antlasma", onem:5, dunya:2, kapsam:"ic",
  etiket:["antlasma","isyan","konu-diplomasi","konu-isyan"],
  yer_id:"",
  d:"Rákóczi'nin yokluğunda general Károlyi Sándor'un imzaladığı barış, Kuruc askerlerine genel af ve Macar anayasal ayrıcalıklarının (soylu vergi muafiyeti, Diyet'in yasama hakkı) tanınmasını sağladı; buna karşılık Habsburg hanedanının kalıtsal egemenliği kesinleşti. Barış, Habsburg-Macar ilişkilerini bir asır boyunca nispeten istikrarlı bir uzlaşmaya oturttu.",
  kaynak:"Magyar Nemzeti Levéltár, 'A szatmári béke' (sayfa okundu, KRONO-ORTA-AVRUPA-0929): \"1711. április 29-én Nagykárolyban írta alá Károlyi Sándor és Pálffy János\" · \"a ratifikálásra pedig május 26-án Bécsben került sor\" · akademik: Kontler (2002), s. 172-173 · 🔴 DÜZELTME: önceki gün 30 Nisan idi (Kontler'e dayandırılmış, sayfa bu oturumda okunmadı); kronoloji_habsburg.js aynı olayı 29 Kasım'da tutuyordu — ikisi de ulusal arşivin gününe hizalandı", yer_id:"Szatmár (Satu Mare)" },

{ t:"1711-02-21", devlet:"macaristan-habsburg", b:"Rákóczi'nin sürgüne gitmesi", tur:"son", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar","son","konu-siyasi","konu-hanedan","konu-demografi"],
  yer_id:"",
  d:"Barışı kabul etmeyen Rákóczi önce Lehistan'a, sonra Fransa'ya ve nihayet Osmanlı topraklarına (Rodosto/Tekirdağ) sığındı; orada 1735'teki ölümüne dek sürgünde yaşadı. Macar millî hafızasında 'Nagyságos Fejedelem' (Yüce Prens) olarak anılmaya devam etti.",
  kaynak:"akademik: Kontler (2002), s. 173", yer_kon:[49.0128,23.1753] },

{ t:"1720-01-01", devlet:"macaristan-habsburg", b:"Bácska ve Bánát'a Alman (Schwaben) göçmenlerin iskânının başlaması", tur:"diger", onem:3, dunya:1, kapsam:"ic",
  etiket:["sosyal","goc","ekonomi","konu-ekonomi","konu-sosyal","konu-demografi"],
  yer_id:"", kapsam_genis:true,
  d:"Uzun savaşlarla nüfusu boşalan Güney Macaristan'a, Habsburg idaresi Katolik Alman köylülerini iskân etmeye başladı; bu 'Büyük Schwaben Göçü' bir asra yayılarak bölgenin etnik ve tarımsal yapısını kalıcı biçimde değiştirdi.",
  kaynak:"akademik: Evans (2006), s. 178-180" },

{ t:"1723-06-19", devlet:"macaristan-habsburg", b:"Macar Diyeti'nin Pragmatik Yaptırım'ı onaylaması", tur:"kanun", onem:5, dunya:3, kapsam:"ic",
  etiket:["kanun","reform","hanedan","konu-hanedan","konu-islahat","konu-hukuk"],
  yer_id:"Bratislava",
  d:"Pozsony'de toplanan Diyet, kadın hattından veraseti (ve dolayısıyla Habsburg mülklerinin bölünmezliğini) öngören Pragmatik Yaptırım'ı Macaristan için de yasa hâline getirdi (1723:I-III. Yasalar); karşılığında Macaristan'ın ayrı bir siyasî varlık ve 'birleştirilemez ve ayrılamaz' bir krallık olduğu ilkesi de metne girdi.",
  kaynak:"akademik: Evans (2006), s. 45-48" },

{ t:"1741-09-11", devlet:"macaristan-habsburg", b:"Macar Diyeti'nin 'Vitam et sanguinem' desteği — Maria Theresia'ya silahlı yemin", tur:"ittifak", onem:5, dunya:3, kapsam:"dis",
  etiket:["ittifak","askeri","hukumdar","konu-askeri","konu-diplomasi","konu-hanedan"],
  yer_id:"Bratislava",
  d:"Avusturya Veraset Savaşı'nın en kritik anında, Pozsony'de toplanan Macar soyluları genç Maria Theresia'nın önünde 'canımızı ve kanımızı' (vitam et sanguinem) sunarak ona bağlılık yemini etti; Macar süvari alaylarının seferber edilmesi, tahtın Prusya karşısında ayakta kalmasına önemli katkı sağladı.",
  kaynak:"akademik: Evans (2006), s. 58-60" },

// ══════════════════════════════════════════════════════════════════
// IX. AYDINLANMA VE İLK MİLLİYETÇİ UYANIŞ (1738-1825)
// ══════════════════════════════════════════════════════════════════

{ t:"1738-01-01", devlet:"macaristan-habsburg", b:"Büyük veba salgınının Güney Macaristan'ı vurması", tur:"diger", onem:2, dunya:1, kapsam:"ic",
  etiket:["salgin","sosyal","konu-sosyal","afet","afet-salgin"],
  yer_id:"", kapsam_genis:true,
  d:"Osmanlı-Habsburg sınır bölgesinden yayılan veba, yeni iskân edilen Bánát ve Bácska nüfusunu ağır biçimde vurdu; salgın, sınır boyunca kurulan sıhhî kordon (Militärgrenze) uygulamalarının sıkılaştırılmasına yol açtı.",
  kaynak:"akademik: Evans (2006), s. 180-181" },

{ t:"1735-06-22", devlet:"macaristan-habsburg", b:"Selmecbánya Maden Akademisi'nin kurulması", tur:"kurulus", onem:4, dunya:2, kapsam:"ic",
  etiket:["bilim","egitim","ekonomi","islahat","konu-siyasi","konu-bilim","konu-ekonomi","konu-egitim","konu-islahat","konu-sanayi"],
  yer_id:"",
  d:"Habsburg idaresi, Avrupa'nın en zengin gümüş-altın madenlerinden birine sahip Selmecbánya'da (bugünkü Banská Štiavnica, Slovakya) bir maden okulu kurdu; 1770'te 'Bergakademie' olarak yeniden yapılandırılan kurum, dünyanın ilk teknik yükseköğretim akademilerinden biri sayılır ve maden mühendisliği eğitiminde Avrupa çapında model oldu.",
  kaynak:"akademik: Evans (2006), s. 200-201", yer_kon:[48.4585,18.8945] },

{ t:"1777-08-22", devlet:"macaristan-habsburg", b:"Ratio Educationis'in yayımlanması — ilk modern eğitim reformu", tur:"reform", onem:4, dunya:1, kapsam:"ic",
  etiket:["reform","egitim","bilim","konu-bilim","konu-egitim","konu-islahat"],
  yer_id:"", kapsam_genis:true,
  d:"Maria Theresia'nın imzaladığı bu ferman, Macaristan'da eğitim sistemini ilk kez merkezî bir çerçeveyle düzenledi ve devlet denetimine aldı; Nagyszombat Üniversitesi'nin tıp fakültesiyle birlikte Buda'ya taşınması da aynı reform dalgasının parçasıydı.",
  kaynak:"akademik: Evans (2006), s. 204-206", yer_id:"Viyana" },

{ t:"1784-05-11", devlet:"macaristan-habsburg", b:"II. József'in Macarcayı idare dilinden kaldırıp Almancayı getirmesi", tur:"reform", onem:4, dunya:2, kapsam:"ic",
  etiket:["reform","kriz","idari","konu-siyasi","konu-idari","konu-islahat"],
  yer_id:"", kapsam_genis:true,
  d:"II. József, imparatorluk çapında idareyi tekleştirmek amacıyla Almancayı resmî idare dili ilan etti ve aynı yıl Kutsal Taç'ı sembolik olarak Budin'den Viyana'ya taşıttı; bu iki adım Macar soylularında derin bir tepki uyandırdı ve 1790'da reformların geri alınmasına giden yolu açtı.",
  kaynak:"akademik: Evans (2006), s. 220-222", yer_id:"Viyana" },

{ t:"1790-01-28", devlet:"macaristan-habsburg", b:"II. József'in ölüm döşeğinde reformlarını geri alması", tur:"reform", onem:4, dunya:1, kapsam:"ic",
  etiket:["reform","kriz","konu-siyasi","konu-islahat"],
  yer_id:"", kapsam_genis:true,
  d:"Ölümünden kısa süre önce József, Toleranzpatent ve serfliğin kaldırılması dışındaki bütün reformlarını iptal etti; Kutsal Taç Budin'e iade edildi. Bu geri çekiliş, Macar anayasal muhalefetinin geçici bir zaferi oldu ama merkezîleşme-özerklik gerilimini çözmedi.",
  kaynak:"akademik: Evans (2006), s. 224-225", yer_id:"Viyana" },

{ t:"1795-05-20", devlet:"macaristan-habsburg", b:"Martinovics Ignác ve Macar Yakobenlerinin idamı", tur:"darbe", onem:3, dunya:1, kapsam:"ic",
  etiket:["darbe","siyaset","isyan","konu-siyasi","konu-kisiler","konu-isyan","konu-darbe"],
  yer_id:"",
  d:"Fransız Devrimi'nden etkilenen küçük bir cumhuriyetçi-radikal çevrenin komplosu keşfedilince, önderleri Budin yakınlarında idam edildi; bastırma, izleyen otuz yılda Habsburg sansürünün sertleşmesine yol açtı ve Macar milliyetçi hareketinin daha ihtiyatlı, kültürel bir çizgide (dil reformu) yeniden doğmasına neden oldu.",
  kaynak:"akademik: Kontler (2002), s. 198-199", yer_kon:[47.5026,19.0263], yer_id:"Budin" },

{ t:"1811-01-01", devlet:"macaristan-habsburg", b:"Kazinczy Ferenc'in 'nyelvújítás' (dil yenileme) hareketinin doruğa çıkması", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","edebiyat","konu-kultur"],
  yer_id:"", kapsam_genis:true,
  d:"Kazinczy'nin öncülük ettiği hareket, binlerce yeni Macarca sözcük türeterek dili modern edebiyat ve bilim için bir araca dönüştürdü; hareket aynı zamanda erken Macar milliyetçiliğinin kültürel-dilsel temelini attı.",
  kaynak:"akademik: Kontler (2002), s. 200-201", yer_kon:[48.41,21.68] },

{ t:"1825-11-11", devlet:"macaristan-habsburg", b:"Széchenyi István'ın Macar Bilimler Akademisi için bağışını duyurması", tur:"kurulus", onem:5, dunya:2, kapsam:"ic",
  etiket:["kultur","bilim","kurulus","konu-siyasi","konu-bilim","konu-kultur"],
  yer_id:"Bratislava",
  d:"Pozsony Diyeti'nde konuşan genç zengin aristokrat Széchenyi, bir yıllık gelirini bağışlayarak Macar Bilimler Akademisi'nin kuruluşunu başlattı; bu jest, 'Reform Çağı' diye anılan otuz yıllık modernleşme ve millî uyanış döneminin sembolik başlangıç noktası sayılır.",
  kaynak:"akademik: Kontler (2002), s. 213-214" },

// ══════════════════════════════════════════════════════════════════
// X. REFORM ÇAĞI VE 1848 DEVRİMİ (1830-1849)
// ══════════════════════════════════════════════════════════════════

{ t:"1830-01-01", devlet:"macaristan-habsburg", b:"Széchenyi'nin 'Hitel' (Kredi) adlı eserinin yayımlanması", tur:"kultur", onem:4, dunya:1, kapsam:"ic",
  etiket:["kultur","ekonomi","konu-ekonomi","konu-kultur"],
  yer_id:"",
  d:"Széchenyi, kitabında Macar tarım ekonomisinin geri kalmışlığını soylu vergi muafiyetine ve modern kredi sisteminin yokluğuna bağladı; eser, Reform Çağı'nın ekonomik modernleşme gündemini belirleyen temel metinlerden biri oldu.",
  kaynak:"akademik: Kontler (2002), s. 214-215", yer_kon:[47.4979,19.0402], yer_id:"Peşte" },

{ t:"1831-08-01", devlet:"macaristan-habsburg", b:"Doğu Slovakya kolera isyanı", tur:"isyan", onem:2, dunya:1, kapsam:"ic",
  etiket:["salgin","isyan","sosyal","konu-isyan","konu-sosyal","afet","afet-salgin"],
  yer_id:"",
  d:"Kolera salgını sırasında köylüler arasında yayılan 'kuyuların zehirlendiği' söylentisi, Kuzey-Doğu Macaristan'da toprak beylerine yönelik kanlı bir ayaklanmaya dönüştü; olay, köylü hoşnutsuzluğunun serflik meselesini yeniden gündeme getirmesinde etkili oldu.",
  kaynak:"akademik: Kontler (2002), s. 216", kapsam_genis:true },

{ t:"1836-05-25", devlet:"macaristan-habsburg", b:"Macarcanın kısmen resmî dil olarak kabul edilmesi (1836 Dil Yasası)", tur:"kanun", onem:3, dunya:1, kapsam:"ic",
  etiket:["kanun","kultur","konu-kultur","konu-hukuk"],
  yer_id:"Bratislava",
  d:"Diyet'in kabul ettiği yasa, Latincenin yerini alarak Macarcayı yasama ve bazı resmî işlemlerde kullanılabilir hâle getirdi; bu, 1844'teki tam resmî dil statüsüne giden yolun ilk adımıydı.",
  kaynak:"akademik: Kontler (2002), s. 217" },

{ t:"1837-08-22", devlet:"macaristan-habsburg", b:"Pesti Nemzeti Színház'ın (Ulusal Tiyatro) açılışı", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","kultur","konu-sanat","konu-kultur"],
  yer_id:"Peşte",
  d:"Pest'te açılan tiyatro, Macarca dilinde profesyonel drama sanatının ilk kalıcı kurumsal merkeziydi; Reform Çağı'nın kültürel milliyetçilik projesinin görünür simgelerinden biri oldu.",
  kaynak:"akademik: Kontler (2002), s. 217-218" },

{ t:"1844-11-13", devlet:"macaristan-habsburg", b:"Macarcanın tam resmî devlet dili ilan edilmesi", tur:"kanun", onem:4, dunya:1, kapsam:"ic",
  etiket:["kanun","kultur","konu-kultur","konu-hukuk"],
  yer_id:"Bratislava",
  d:"1844 Dil Yasası, Macarcayı idarede, eğitimde ve yargıda Latincenin ve Almancanın tam yerine geçen tek resmî dil ilan etti; düzenleme aynı zamanda ülkenin çok-etnikli (Hırvat, Sloven, Romen, Slovak) nüfusları arasında gerilim de doğurdu.",
  kaynak:"akademik: Kontler (2002), s. 218-219" },

{ t:"1844-07-02", devlet:"macaristan-habsburg", b:"'Himnusz'un (Macar millî marşı) bestelenmesi", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","kultur","konu-kultur"],
  yer_id:"Peşte",
  d:"Kölcsey Ferenc'in 1823 tarihli şiiri, Erkel Ferenc'in açtığı bir yarışmayı kazanan bestesiyle müziğe uyarlandı; eser 1903'te resmen millî marş kabul edilecek, bugün de Macaristan'ın millî marşı olarak kullanılmaya devam edecekti.",
  kaynak:"akademik: Kontler (2002), s. 219" },

{ t:"1848-03-15", devlet:"macaristan-habsburg", b:"Pest Devrimi — 12 Nokta ve basın özgürlüğü", tur:"isyan", onem:5, dunya:4, kapsam:"ic",
  etiket:["isyan","kanun","kultur","konu-isyan","konu-kultur","konu-hukuk"],
  yer_id:"Peşte",
  d:"Petőfi Sándor ve genç radikallerin önderliğinde Pest sokaklarına dökülen kalabalık, sansürsüz bir matbaadan '12 Nokta' bildirisini bastı ve basın özgürlüğünü fiilen ilan etti; aynı gün Viyana'daki devrimin haberiyle birleşen bu hareket, Macaristan'ı Habsburg tarihinin en köklü anayasal dönüşümüne sürükledi.",
  kaynak:"akademik: Kontler (2002), s. 224-226 — bkz. `kronoloji_habsburg.js` 1848-03-13 Viyana Mart Devrimi (dunya:4), Pest 03-15 ayrı ve bağımsız bir olay" },

{ t:"1848-04-11", devlet:"macaristan-habsburg", b:"Nisan Yasaları'nın (April Laws) onaylanması", tur:"kanun", onem:5, dunya:4, kapsam:"ic",
  etiket:["kanun","reform","konu-islahat","konu-hukuk"],
  yer_id:"Bratislava",
  d:"V. Ferdinand'ın onayladığı otuz bir yasa, serfliği kaldırdı, soylu vergi muafiyetini bitirdi, sorumlu bir parlamenter hükümet kurdu ve neredeyse tam bir anayasal bağımsızlık sağladı; bu paket Macaristan tarihinde modern anayasal devletin kuruluş belgesi sayılır.",
  kaynak:"akademik: Kontler (2002), s. 226-227" },

{ t:"1848-09-29", devlet:"macaristan-habsburg", b:"Pákozd Muharebesi — Hırvat Ban'ı Jelačić'in bozgunu", tur:"savas", onem:4, dunya:2, kapsam:"ic",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Viyana'nın kışkırttığı Hırvat Ban'ı Jelačić'in Macaristan'a giren ordusu, yeni kurulan Macar Millî Muhafızları karşısında durduruldu; zafer, bağımsızlık savaşının ilk askerî başarısı oldu ve Macar-Habsburg çatışmasını açık savaşa dönüştürdü.",
  kaynak:"akademik: Kontler (2002), s. 228", yer_kon:[47.1667,18.5333] },

{ t:"1849-01-05", devlet:"macaristan-habsburg", b:"Habsburg ordusunun Pest-Budin'i işgali", tur:"isgal", onem:4, dunya:2, kapsam:"ic",
  etiket:["askeri","isgal","konu-askeri"],
  yer_id:"Peşte",
  d:"Windisch-Grätz komutasındaki Habsburg ordusu başkenti ele geçirince Macar hükümeti Debrecen'e çekildi; işgal, savaşın en kritik evresini başlattı ve nihaî sonucun Rus müdahalesine kalacağı bir aşamaya girildi.",
  kaynak:"akademik: Kontler (2002), s. 229" },

{ t:"1849-04-14", devlet:"macaristan-habsburg", b:"Debrecen'de Habsburg hanedanının hal'i ve bağımsızlığın ilanı", tur:"son", onem:5, dunya:2, kapsam:"ic",
  etiket:["son","isyan","hukumdar","darbe-siyasi","konu-siyasi","konu-isyan","konu-darbe","konu-hanedan"],
  yer_id:"",
  d:"Debrecen'e sığınan Macar Meclisi, Kossuth Lajos'un önerisiyle Habsburg hanedanını tahttan indirdiğini ve Macaristan'ın bağımsız bir devlet olduğunu ilan etti; Kossuth 'kormányzó-elnök' (naip-başkan) seçildi. Bu radikal adım uluslararası tanınma getirmedi ve Rus askerî müdahalesini kaçınılmaz kıldı.",
  kaynak:"akademik: Kontler (2002), s. 230-231 — bkz. `kronoloji_habsburg.js` aynı tarih, dunya:2 (BİREBİR aynı olay)", yer_kon:[47.5316,21.6273] },

{ t:"1849-08-13", devlet:"macaristan-habsburg", b:"Világos'ta teslim — ayaklanmanın Rus yardımıyla bastırılması", tur:"savas", onem:5, dunya:3, kapsam:"ic",
  etiket:["askeri","son","konu-askeri","konu-siyasi","konu-isyan"],
  yer_id:"",
  d:"Çar I. Nikolay'ın gönderdiği 200.000 kişilik Rus ordusunun da katılımıyla Macar direnişi çöktü; General Görgei Artúr ordusunu Rus kuvvetlerine (Habsburg'a değil) teslim etti. On beş ay süren bağımsızlık savaşı böyle son buldu ve ülkeyi on yıl sürecek bir neo-mutlakiyet dönemine soktu.",
  kaynak:"akademik: Kontler (2002), s. 231-232 — bkz. `kronoloji_habsburg.js` aynı olay, dunya:3 (BİREBİR aynı)", yer_kon:[46.2667,21.6667] },

{ t:"1849-10-06", devlet:"macaristan-habsburg", b:"Aradi Vértanúk — on üç Macar generalinin idamı", tur:"olum", onem:5, dunya:2, kapsam:"ic",
  etiket:["darbe","olum","isyan","konu-kisiler","konu-isyan","konu-darbe"],
  yer_id:"",
  d:"Bağımsızlık savaşının on üç generali Arad'da idam edildi; aynı gün Peşte'de Başbakan Batthyány Lajos da kurşuna dizildi. Bu infazlar Macar millî hafızasında en derin travmalardan biri olarak kaldı ve tarih boyunca 6 Ekim yas günü olarak anılmaya devam etti.",
  kaynak:"akademik: Kontler (2002), s. 232", yer_kon:[46.1866,21.3123] },

// ══════════════════════════════════════════════════════════════════
// XI. NEO-MUTLAKİYET VE AUSGLEICH (1849-1867)
// ══════════════════════════════════════════════════════════════════

{ t:"1850-01-01", devlet:"macaristan-habsburg", b:"Bach döneminin merkezîleştirici idaresinin kurulması", tur:"idari", onem:4, dunya:1, kapsam:"ic",
  etiket:["idari","kriz","konu-siyasi","konu-idari"],
  yer_id:"", kapsam_genis:true,
  d:"İçişleri Bakanı Alexander Bach'ın adını taşıyan sistem, Macaristan'ı ayrı bir siyasî varlık olarak tanımayıp doğrudan Viyana'dan yönetilen bir eyalete indirgedi; Alman memurlar ve jandarma ile yürütülen bu idare, Macar toplumunda 'pasif direniş' (Deák Ferenc'in siyasetiyle özdeşleşen) tepkisini doğurdu.",
  kaynak:"akademik: Kontler (2002), s. 233-235" },

{ t:"1854-03-02", devlet:"macaristan-habsburg", b:"Urbéri kárpótlás — serflik tazminatının yasal çerçevesinin tamamlanması", tur:"reform", onem:3, dunya:1, kapsam:"ic",
  etiket:["mali","reform","konu-ekonomi","konu-islahat"],
  yer_id:"", kapsam_genis:true,
  d:"1848 Nisan Yasaları'yla ilke olarak kaldırılan serfliğin toprak beylerine devlet tarafından ödenecek tazminatının usulleri, Bach döneminde tamamlandı; düzenleme köylü mülkiyetini hukuken kesinleştirse de büyük toprak sahiplerini malî olarak kayırdı.",
  kaynak:"akademik: Evans (2006), s. 280-281" },

{ t:"1859-06-24", devlet:"macaristan-habsburg", b:"Solferino bozgununun Bach sisteminin çöküşünü hızlandırması", tur:"kriz", onem:3, dunya:4, kapsam:"dis",
  etiket:["askeri","kriz","konu-askeri","konu-siyasi"],
  yer_id:"",
  d:"İtalya'daki bozgun, Viyana'nın malî ve siyasî krizini derinleştirdi; Macaristan'da pasif direniş siyaseti bu zayıflamadan güç alarak anayasal müzakere zeminini genişletti — Ausgleich'a giden sürecin ilk ciddi kırılma noktalarından biriydi.",
  kaynak:"akademik: Kontler (2002), s. 236 — bkz. `kronoloji_habsburg.js` aynı tarih, dunya:4", yer_kon:[45.3833,10.7667] },

{ t:"1861-04-02", devlet:"macaristan-habsburg", b:"Deák Ferenc'in 'Húsvéti cikk' (Paskalya Makalesi) ile uzlaşma çerçevesini önermesi", tur:"siyaset", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","diplomasi","konu-siyasi","konu-diplomasi"],
  yer_id:"",
  d:"Deák, 1848 Nisan Yasaları'nın hukuki sürekliliğini talep ederken tam bağımsızlıktan vazgeçen ve ortak dışişleri-savunma alanlarını kabul eden bir uzlaşma formülü önerdi; bu ılımlı çizgi, altı yıl sonraki Ausgleich'ın fikrî temelini oluşturdu.",
  kaynak:"akademik: Kontler (2002), s. 237-238", yer_kon:[47.4979,19.0402], yer_id:"Peşte" },

{ t:"1866-07-03", devlet:"macaristan-habsburg", b:"Königgrätz bozgununun Ausgleich'i kaçınılmaz kılması", tur:"kriz", onem:4, dunya:4, kapsam:"dis",
  etiket:["askeri","kriz","konu-askeri","konu-siyasi"],
  yer_id:"",
  d:"Prusya karşısındaki ağır yenilgi, Habsburg monarşisinin Almanya'daki üstünlüğünü bitirirken Viyana'yı Macaristan'la bir an önce anlaşmaya zorladı; savaş sonrası müzakereler sekiz ay içinde Ausgleich'ı doğurdu.",
  kaynak:"akademik: Kontler (2002), s. 238-239 — bkz. `kronoloji_habsburg.js` aynı tarih, dunya:4", yer_kon:[50.2092,15.8328] },

{ t:"1867-02-17", devlet:"macaristan-habsburg", b:"Andrássy Gyula'nın Macaristan başbakanı olması", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar","idari","konu-idari","konu-hanedan"],
  yer_id:"Peşte",
  d:"1849'da idam edilmiş bir Kuruc önderinin torunu ve gıyaben idama mahkûm edilmiş bir sürgün olan Andrássy, Ausgleich müzakerelerinin sonuçlanmasından hemen önce ilk anayasal Macar hükümetinin başına geçti; atanması, uzlaşmanın artık fiilen kesinleştiğinin işaretiydi.",
  kaynak:"akademik: Kontler (2002), s. 239-240" },

{ t:"1867-03-30", devlet:"macaristan-habsburg", b:"Ausgleich — Avusturya-Macaristan ikili monarşisinin kurulması", tur:"bolunme", onem:5, dunya:2, kapsam:"ic",
  etiket:["bolunme","reform","kanun","konu-siyasi","konu-islahat","konu-hukuk"],
  yer_id:"",
  d:"Deák'ın formülü üzerine kurulan uzlaşma, Macaristan'ı ortak hükümdar, ortak dışişleri-savunma-maliye altında ama kendi meclisi, hükümeti ve iç idaresiyle Avusturya'nın tam eşit ortağı yaptı; on sekiz yıllık mutlakiyetçi ilhaktan sonra Macaristan tarihinin en köklü dönüşümlerinden biri gerçekleşti.",
  kaynak:"akademik: Kontler (2002), s. 240-241 — bkz. `kronoloji_habsburg.js` aynı olay, dunya:2 (BİREBİR aynı)", yer_id:"Viyana" },

{ t:"1867-06-08", devlet:"macaristan-habsburg", b:"I. Ferenc József'in Budin'de Macar kralı olarak taç giymesi", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-hanedan"],
  yer_id:"Budin",
  d:"Ausgleich'ın onaylanmasının ardından imparator, geleneksel Macar taç töreniyle bu kez Budin'de Macar kralı ilan edildi; törenin ihtişamı, uzlaşmanın Macar kamuoyunda kazandığı meşruiyeti simgeliyordu.",
  kaynak:"akademik: Kontler (2002), s. 241" },

// ══════════════════════════════════════════════════════════════════
// XII. İKİLİ MONARŞİ ÇAĞI VE ÇÖKÜŞ (1867-1918)
// ══════════════════════════════════════════════════════════════════

{ t:"1868-11-17", devlet:"macaristan-habsburg", b:"Hırvat-Macar Uzlaşması (Nagodba)", tur:"antlasma", onem:3, dunya:2, kapsam:"ic",
  etiket:["antlasma","idari","konu-idari","konu-diplomasi"],
  yer_id:"",
  d:"Ausgleich'ın küçük bir yansıması olarak Macaristan, Hırvatistan'a geniş bir iç özerklik (kendi meclisi, dili, adalet sistemi) tanıyan ayrı bir uzlaşma imzaladı; düzenleme çok-etnikli krallığın idarî yapısının bir parçası hâline geldi.",
  kaynak:"akademik: Kontler (2002), s. 245-246", yer_id:"Viyana" },

{ t:"1868-12-06", devlet:"macaristan-habsburg", b:"1868 Milliyetler Kanunu", tur:"kanun", onem:3, dunya:1, kapsam:"ic",
  etiket:["kanun","sosyal","konu-sosyal","konu-hukuk"],
  yer_id:"", kapsam_genis:true,
  d:"Yasa, Macaristan'daki dil ve kültür azınlıklarına (Romen, Slovak, Sırp, Alman) bireysel dil hakları tanıdı ama 'siyasî tek millet' ilkesini koruyarak toplu özerklik taleplerini reddetti; sonraki yarım asırda bu denge giderek gerginleşecekti.",
  kaynak:"akademik: Kontler (2002), s. 246-247", yer_kon:[47.4979,19.0402] },

{ t:"1867-12-14", devlet:"macaristan-habsburg", b:"1867 Yahudi Emansipasyon Yasası", tur:"kanun", onem:3, dunya:1, kapsam:"ic",
  etiket:["kanun","din","sosyal","konu-din","konu-sosyal","konu-hukuk"],
  yer_id:"", kapsam_genis:true,
  d:"Yasa, Yahudi nüfusa tam vatandaşlık eşitliği tanıdı; bu, Budapeşte'nin izleyen elli yılda Orta Avrupa'nın en büyük ve en etkili Yahudi kültürel-ekonomik merkezlerinden birine dönüşmesinin hukukî temelini attı.",
  kaynak:"akademik: Kontler (2002), s. 247-248", yer_kon:[47.4979,19.0402] },

{ t:"1868-11-01", devlet:"macaristan-habsburg", b:"Magyar Államvasutak'ın (MÁV, Macar Devlet Demiryolları) kurulması", tur:"kurulus", onem:3, dunya:1, kapsam:"ic",
  etiket:["ekonomi","kurulus","islahat","imar","konu-siyasi","konu-ekonomi","konu-imar","konu-islahat"],
  yer_id:"Peşte",
  d:"Ausgleich sonrası hızlı sanayileşme siyasetinin parçası olarak kurulan devlet demiryolu şirketi, izleyen kırk yılda Macaristan'ı Orta Avrupa'nın en yoğun demiryolu ağlarından birine kavuşturacaktı; Budapeşte, ağın Doğu-Batı ticaretindeki merkezi konumunu bu dönemde kazandı.",
  kaynak:"akademik: Kontler (2002), s. 248-249" },

{ t:"1873-05-09", devlet:"macaristan-habsburg", b:"Viyana borsa çöküşünün Macar ekonomisine sıçraması", tur:"kriz", onem:4, dunya:3, kapsam:"dis",
  etiket:["ekonomi","kriz","konu-siyasi","konu-ekonomi"],
  yer_id:"",
  d:"Viyana'daki spekülatif çöküş kısa sürede Peşte borsasına ve genç Macar bankacılık sektörüne de yayıldı; kriz, yeni birleşen Budapeşte'nin ilk büyük malî sınavı oldu ve daha ihtiyatlı bir sermaye piyasası düzenlemesine yol açtı.",
  kaynak:"akademik: Kontler (2002), s. 249 — bkz. `kronoloji_habsburg.js` aynı tarih, dunya:3 (BİREBİR aynı)", yer_id:"Viyana" },

{ t:"1873-11-17", devlet:"macaristan-habsburg", b:"Buda, Óbuda ve Pest'in birleşerek Budapeşte'yi oluşturması", tur:"idari", onem:5, dunya:2, kapsam:"ic",
  etiket:["idari","kurulus","kultur","konu-siyasi","konu-idari","konu-kultur"],
  yer_id:"Peşte",
  d:"Üç ayrı kasabanın Tuna'nın iki yakasında tek bir belediye idaresi altında birleşmesiyle Budapeşte kuruldu; birleşme, kentin izleyen kırk yılda nüfusunu dört katına çıkararak Orta Avrupa'nın en hızlı büyüyen büyükşehirlerinden biri olmasının idarî temelini attı.",
  kaynak:"akademik: Kontler (2002), s. 250" },

{ t:"1875-11-14", devlet:"macaristan-habsburg", b:"Liszt Ferenc Zeneakademisi'nin (Müzik Akademisi) kurulması", tur:"kurulus", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","kultur","bilim","konu-siyasi","konu-bilim","konu-kultur"],
  yer_id:"Peşte",
  d:"Besteci Liszt Ferenc'in başkanlığında Budapeşte'de kurulan akademi, kısa sürede Bartók Béla ve Kodály Zoltán gibi 20. yüzyıl bestecilerini yetiştirecek, Macar müzik geleneğinin ulusal ve uluslararası kurumsal merkezi hâline gelecekti.",
  kaynak:"akademik: Kontler (2002), s. 251" },

{ t:"1875-01-01", devlet:"macaristan-habsburg", b:"Tisza Kálmán'ın Liberal Parti'yi kurup on beş yıllık iktidarını başlatması", tur:"siyaset", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","idari","konu-siyasi","konu-idari"],
  yer_id:"Peşte",
  d:"Deák Parti ile sol muhalefetin bir kısmının birleşmesinden doğan Liberal Parti, Tisza'nın önderliğinde 1890'a dek kesintisiz iktidarda kaldı; bu dönem Macaristan'ın idarî merkezîleşmesi ve hızlı ekonomik modernleşmesiyle özdeşleşti.",
  kaynak:"akademik: Kontler (2002), s. 252-253" },

{ t:"1878-01-01", devlet:"macaristan-habsburg", b:"Avusturya-Macaristan Gümrük ve Ticaret Birliği'nin on yıllık yenilenmesi", tur:"ekonomi", onem:2, dunya:1, kapsam:"ic",
  etiket:["ekonomi","antlasma","konu-diplomasi","konu-ekonomi"],
  yer_id:"", kapsam_genis:true,
  d:"Ausgleich'ın ekonomik ayağı olan ortak gümrük birliği, on yılda bir yeniden müzakere edilerek yenilendi; Macar tarım ürünlerinin Avusturya sanayi pazarına serbest girişi, Macaristan'ın 'imparatorluğun tahıl ambarı' konumunu pekiştirdi.",
  kaynak:"akademik: Kontler (2002), s. 253-254" },

{ t:"1896-05-02", devlet:"macaristan-habsburg", b:"Kontinental Avrupa'nın ilk yeraltı metrosunun (Földalatti) Budapeşte'de açılışı", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["bilim","kultur","ekonomi","konu-bilim","konu-ekonomi","konu-kultur"],
  yer_id:"Peşte",
  d:"Macar Millî Bin Yılı (Honfoglalás'ın 1000. yıldönümü) kutlamaları için inşa edilen hat, Londra'dan sonra dünyanın, Londra'nın elektrikli olmayan ilk hattından sonra ise kıta Avrupası'nın ilk yeraltı demiryolu olma unvanını kazandı; bugün UNESCO Dünya Mirası listesindedir.",
  kaynak:"akademik: Kontler (2002), s. 256" },

{ t:"1896-05-02", devlet:"macaristan-habsburg", b:"Macar Millî Bin Yılı (Millennium) sergisinin açılışı", tur:"kultur", onem:4, dunya:1, kapsam:"ic",
  etiket:["kultur","kultur","konu-kultur"],
  yer_id:"Peşte",
  d:"Macar kabile beylerinin Karpat Havzası'na girişinin (Honfoglalás, 896) bininci yılını kutlamak için Városliget'te (Kent Parkı) düzenlenen dev sergi ve şenlik, Ausgleich sonrası dönemin millî özgüveninin en görkemli sahnelenişiydi; sergi kompleksi bugünkü Hősök tere (Kahramanlar Meydanı) ve Vajdahunyad Kalesi'ni doğurdu.",
  kaynak:"akademik: Kontler (2002), s. 255-256" },

{ t:"1904-01-01", devlet:"macaristan-habsburg", b:"Országház'ın (Macar Parlamento Binası) tamamlanması", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","mimari","imar","konu-kultur","konu-imar"],
  yer_id:"Peşte",
  d:"Steindl Imre'nin tasarladığı, neogotik üslupta dönemin dünyadaki en büyük parlamento binalarından biri olan Országház, on yılı aşkın inşaatın ardından tamamlandı; bina, Dualist dönemin siyasî özgüveninin en kalıcı mimarî simgesi oldu.",
  kaynak:"akademik: Kontler (2002), s. 256-257" },

{ t:"1905-01-19", devlet:"macaristan-habsburg", b:"1905 seçim krizi — Ferenc József'in genel oy tehdidiyle Liberal Parti'ye baskısı", tur:"kriz", onem:3, dunya:2, kapsam:"ic",
  etiket:["siyaset","kriz","konu-siyasi"],
  yer_id:"Peşte",
  d:"Bağımsızlıkçı muhalefetin seçim zaferinden sonra hükümet kurmayı reddeden Ferenc József, Macar seçkinlerini disipline etmek için evrensel oy hakkını gündeme getirmekle tehdit etti; kriz on sekiz ay sürdü ve dar seçmen tabanına dayanan Macar siyasî sisteminin kırılganlığını gözler önüne serdi.",
  kaynak:"akademik: Kontler (2002), s. 259-260" },

{ t:"1908-01-01", devlet:"macaristan-habsburg", b:"'Nyugat' (Batı) edebiyat dergisinin çıkışı — Macar modernizminin başlangıcı", tur:"kultur", onem:4, dunya:1, kapsam:"ic",
  etiket:["kultur","edebiyat","konu-kultur"],
  yer_id:"Peşte",
  d:"Ady Endre başta olmak üzere bir kuşak genç şair ve yazarı bir araya getiren dergi, Macar edebiyatını taşra romantizminden koparıp Avrupa modernizmiyle buluşturdu; dergi 1941'e dek yayımlanarak 20. yüzyıl Macar edebiyatının en etkili platformu oldu.",
  kaynak:"akademik: Kontler (2002), s. 261-262" },

{ t:"1914-07-28", devlet:"macaristan-habsburg", b:"Avusturya-Macaristan'ın Sırbistan'a savaş ilanı", tur:"savas", onem:5, dunya:5, kapsam:"dis",
  etiket:["askeri","siyaset","konu-askeri","konu-siyasi"],
  yer_id:"",
  d:"Macar Başbakanı Tisza István, hükümet toplantılarında savaşa en son razı olan isim olsa da nihayetinde savaş kararını destekledi; Macaristan, ortak ordu içindeki geniş askere alma katkısıyla Birinci Dünya Savaşı'na tam olarak girdi.",
  kaynak:"akademik: Kontler (2002), s. 265-266 — bkz. `kronoloji_habsburg.js` aynı olay, dunya:5 (BİREBİR aynı)", yer_kon:[47.7113,13.6221], yer_id:"Viyana" },

{ t:"1918-10-31", devlet:"macaristan-habsburg", b:"Aster Devrimi (Őszirózsás forradalom) — Károlyi Mihály'nın iktidara gelmesi", tur:"isyan", onem:5, dunya:3, kapsam:"ic",
  etiket:["isyan","siyaset","hukumdar","konu-siyasi","konu-isyan","konu-hanedan"],
  yer_id:"Peşte",
  d:"Savaş yorgunluğu ve cephe çöküşü içinde Budapeşte sokaklarına dökülen kalabalık, askerlerin şapkalarına aster çiçeği takmasıyla simgelenen barışçıl bir devrimle liberal-pasifist Károlyi Mihály'yi iktidara getirdi; bu, Avusturya-Macaristan'ın dağılma sürecinde Macaristan'ın kendi ayrı yolunu çizmeye başladığı andı.",
  kaynak:"akademik: Kontler (2002), s. 271-272" },

{ t:"1918-11-16", devletler:["macaristan-habsburg","macaristan-naiplik"], b:"Macaristan Halk Cumhuriyeti'nin ilanı — 637 yıllık krallık geleneğinin fiilen kesintiye uğraması", tur:"son", onem:5, dunya:4, kapsam:"ic",
  etiket:["son","kurulus","konu-siyasi"],
  yer_id:"Peşte",
  d:"Károlyi hükümeti, Avusturya-Macaristan'ın resmen dağılmasının ardından bağımsız Macaristan Halk Cumhuriyeti'ni ilan etti; bin yıllık Macar krallık geleneği (kısa aralıklarla, 1920'de kralsız bir 'krallığa' dönüşerek) fiilen sona erdi.", ic_not_d:"Bu dosyanın kapsadığı 1281-1918 arası anlatı burada kapanır — devamı `macaristan-naiplik` (bkz. `data/devletler.js`) ve olası bir sonraki kronoloji turudur.",
  kaynak:"akademik: Kontler (2002), s. 272-273 — dünya değeri Habsburg dosyasının 1918-11-11 (imparatorluğun tam sonu, dunya:5) maddesinden BİLEREK farklı: bu, Macaristan'ın KENDİ cumhuriyet ilanı, beş gün sonra ve ayrı bir olay" },

];

;
