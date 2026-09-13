// ============================================================================
// EK OKUMA — SAVAŞIN HİKÂYESİ, dalga 4 (6 kart)
// ============================================================================
// Yazan: P12-EKOKUMA · 14 Eylül 2026 · paket 0045 H-0007 (+ 0032 H-0013)
// Koordinatör: 1.MURAT · rapor: denetim/P12-EKOKUMA-0914.md
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_SAVAS3 tanımlar.
//    YÜKLEYİCİ: `_EKOKUMA_DOSYA_ADLARI` listesine "ekokuma_savas3" satırı
//    koordinatör/arayüz oturumunca eklenecek — bu oturum js/ dosyasına dokunmadı.
//
// KAYNAK YÖNTEMİ (14 Eylül 2026, gövdeler çekildi ve OKUNDU):
//   TDV 200: osman-i · orhan · iznik · murad-i · cirmen · bayezid-i · eflak ·
//            girit · kandiye · kamanice
//   TDV 302 (ÖLÜ): koyunhisar-savasi · bafeus-savasi · koyunhisar ·
//            palekanon-savasi · pelekanon-savasi · maltepe · cirmen-savasi ·
//            sirpsindigi-savasi · sirpsindigi · sirp-sindigi · rovine-savasi ·
//            rovine · mircea
//   ⇒ TDV'de bu altı savaşın hiçbirinin müstakil maddesi yok; anlatı KİŞİ ve
//     YER maddelerinden kuruldu (§4: TDV bir YER-KİŞİ ansiklopedisidir).
// Metinler KOPYALANMADI, özetlendi. Hiçbir tarih atlasın verisinden alınmadı
// (§4 "atlas referans değildir"); bağ alanı `olay:` yalnız maddeyi bulmak içindir.
//
// ŞEMA: ekokuma_savas.js ile aynı (savas-hikayesi) —
//   id · tur · baslik · kisa · tarih_metin · yer · taraflar[{ad,komutan,kuvvet}]
//   oncesi · akis · sonuc · tartisma · kesinlik · olay · kaynak · gorsel · gorsel_kaynak
// `ic_not` çizilmez (_icNotAyikla).
// ============================================================================
window.EKOKUMA_SAVAS3 = [

// ── 1 · 1302-07-27 Koyunhisar (Bapheus) ────────────────────────────────────
{ id:"savas-koyunhisar-bapheus-1302", tur:"savas-hikayesi",
  baslik:"Koyunhisar (Bapheus) Savaşı (27 Temmuz 1302)",
  kisa:"Bizans kuşatılmış İznik'e yardım yolladı; dağ geçidinden ansızın Yalakova'ya inen Osman, beyliğini bir hanedana çeviren zaferi kazandı.",
  tarih_metin:"27 Temmuz 1302 (Bizanslı Pachymeres) · Osmanlı kaynaklarında 701 (1301-1302)",
  yer:"Koyunhisar ve Yalakova — Yalakdere'nin Hersek dilinde denize ulaştığı düzlük",
  taraflar:[
    { ad:"Osmanlı Beyliği ve katılan uç gazileri", komutan:"Osman Bey", kuvvet:"Pachymeres'e göre yaklaşık 5000" },
    { ad:"Bizans İmparatorluğu", komutan:"Léon Mouzalôn", kuvvet:"Pachymeres'e göre yaklaşık 2000 (Bizanslı, Alan ve yabancı askerler)" }
  ],
  oncesi:"Osman ailesini Bilecik'te bırakıp Yenişehir'i akın üssü yaptı ve bütün gücünü İznik'e çevirdi; ilk akınlardan sonra şehri kuşattı. İstanbul bunun üzerine bir kurtarma birliği gönderdi. Asıl çarpışmadan önce yüz kadar Türk öncüsü Koyunhisar kalesine (Télémaia) gece baskını yaptı; ganimetle dönerken takip edilince bir tepeye çıkıp oklarıyla direndi. Bu ilk karşılaşmanın haberi, Menderes yöresinden ve Kastamonu uçlarından gelen yeni savaşçıları Osman'ın yanına topladı; Kastamonu emîri Ali de imparatorla yaptığı anlaşmayı bozup akına başladı.",
  akis:"Osman, İznik'ten gelen yolu izleyen Yalakdere vadisinden geçidi aşıp birdenbire Yalakova'da göründü. Bizans tarafında moral bozuktu: yerli askerlerin atları ve paraları kısa süre önce Alan ücretlilerine verilmek üzere ellerinden alınmıştı. Sayıca da üstün olan Türkler saldırınca Bizans askerlerinin çoğu yakındaki İzmit kalesine doğru dağıldı; çekilen piyadeyi toplu tutup kurtaran Alanlar oldu. Osmanlı tarafındaki Anonim Tevârîh ise olayı başka anlatır: gemilerle Yalakova'ya çıkan Bizans birliği, bir casusun haberiyle pusu kuran Osmanlılarca denize dökülmüştür.",
  sonuc:"Ekin zamanıydı; zaferin ardından kırlar Edremit'e kadar yağmalandı, köylüler aileleriyle İstanbul'a sığındı, yalnız Kapıdağ, Karabiga ve Ulubat gibi kıyıya yakın yerler kurtuldu. İznik ise düşmedi: Osman şehri açlıkla sıkıştırmak için Diraz Ali adlı bir havale kulesi yaptırıp ablukayla yetindi; teslim ancak 1331'de Orhan'a olacaktı. Pachymeres'e göre Osman'ın ünü Paflagonya'ya kadar yayıldı ve gaziler bayrağı altına koştu. Bizans imparatoru onu durdurmak için İlhanlı hükümdarlarına bir prenses önerip Moğol müdahalesi aradı. TDV bu yüzden 27 Temmuz 1302'nin Osmanlı hânedanının ve devletinin kuruluş tarihi sayılabileceğini yazar.",
  tartisma:"İki anlatı ayrışır: Pachymeres karada, Yalakova'da bir meydan savaşı anlatır; Anonim Tevârîh çıkarma sırasında pusuya düşürülen bir birlikten söz eder. Anonim tarihin ‘İznikliler o zaman şehri teslim etti’ kaydını TDV doğru bulmaz. Yıl da ayrışır: Pachymeres 27 Temmuz 1302, Osmanlı kaynakları 701 (1301-1302).",
  kesinlik:"kesin",
  olay:["1302-07-27|Koyunhisar"],
  kaynak:"TDV: osman-i (Pachymeres aktarımı, Anonim Tevârîh, kuruluş tarihi değerlendirmesi)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 2 · 1329-06-01 Pelekanon ──────────────────────────────────────────────
{ id:"savas-pelekanon-1329", tur:"savas-hikayesi",
  baslik:"Pelekanon Savaşı (1 Haziran 1329 ve ertesi gün)",
  kisa:"İmparator İznik'i kurtarmak için bizzat geldi; baldırına saplanan bir ok ‘öldü’ söylentisine, söylenti de bozguna döndü.",
  tarih_metin:"1 Haziran 1329 (savaşın ilk günü) ve ertesi gün — Kantakuzenos'un hatıratına göre",
  yer:"Pelekanon, Gebze önünde bugünkü Eskihisar geçidi; kaçış kıyıdaki kalelere, özellikle Filokren'e",
  taraflar:[
    { ad:"Osmanlı Beyliği", komutan:"Orhan Bey · kardeşi Pazarlu", kuvvet:"toplam kaynakta yok; ilk gün 300 kişilik akıncı birliği" },
    { ad:"Bizans İmparatorluğu", komutan:"III. Andronikos · Grandomestikos Yuannis Kantakuzenos", kuvvet:"kaynakta açık değil (bk. tartışma)" }
  ],
  oncesi:"Bursa 1326'da düşmüş, İznik de kuşatma altında sıkışmıştı; İstanbul'da bütün Bitinya'nın elden çıkacağı korkusu doğdu. III. Andronikos Pelekanon'dan karşıya geçip İznik'i, olursa Bursa'yı da kurtarmaya karar verdi. Bir yıl önce Kapıdağ ve Karabiga'ya gidip Karesi Beyi Temirhan'la aslında bir ittifak olan bir anlaşma yapmıştı. Sefer öncesinde Türklerin savaş usulünü iyi bilen Kocaeli valisi Kontofre'ye danıştı, o da seferi destekledi. Savaşı ayrıntısıyla anlatan kaynak Kantakuzenos'tur; Osmanlı vekayinameleri onu yalnızca Abdurrahman Gazi'nin Orhan'la bir Bizans kuvvetini püskürttüğü diye kısaca anar.",
  akis:"Tepeleri Osmanlılar tutuyordu. Bizans savaş meclisi onları düzlüğe indirmeye, bu olmazsa geri dönmeye karar verdi; Orhan ise bir vadiye pusu yerleştirip düşmanı engebeli araziye çekmek istiyordu. İlk gün 300 kişilik akıncılar ok atıp geri çekilerek Bizanslıları yerinden oynatmaya çalıştı; iki taraf da mevzisini bırakmadı. İkinci gün imparator bu küçük kuvveti yok etmek için ilerleyince Orhan, kardeşi Pazarlu'nun komutasındaki birlikleri düzlüğe indirdi ve akın çatışması iki ordunun büyük kısmının katıldığı bir savaşa dönüştü. İmparator baldırından okla yaralandı, öldüğü haberi yayıldı ve Bizans saflarında panik başladı. Kaçan askerler kıyıdaki kalelere, özellikle Filokren'e sığınmaya çalıştı; paniği durduramayan imparator bir halı üzerinde gemiye taşınıp İstanbul'a götürüldü.",
  sonuc:"Orhan Kocaeli'nin tamamını aldı; Hereke ve kıyı kasabaları Üsküdar'a kadar onun eline geçti. Yardım umudu kesilen İznik'te abluka sıkılaştırıldı ve şehir 2 Mart 1331'de (21 Cemâziyelevvel 731) teslim oldu; TDV İznik maddesine göre kale komutanı, kalmak isteyenin kalıp gitmek isteyenin gidebilmesi şartıyla şehri verdi. Aynı madde Pelekanon'u İznik'in kaderinin belirlendiği an olarak anar. İznik alınınca Orhan'ın şöhreti İslâm dünyasına yayıldı.",
  tartisma:"Kuvvet: TDV Orhan maddesinde ilk günü anlatan cümlenin parantezi ‘bu ordu düzenli 2000 askerden ibaretti’ der; cümlenin kuruluşundan bunun Bizans ordusuna mı ait olduğu kesin çıkmıyor, bu yüzden tarafa yazılmadı. İznik'in teslim yılı: TDV esas tarihi 2 Mart 1331 (Schreiner) olarak verir, İbn Kemal'in 734 (1333) verdiğini ayrıca not eder.",
  kesinlik:"kesin",
  olay:["1329-06-01","1331-03-02"],
  kaynak:"TDV: orhan (Kantakuzenos aktarımı, savaşın iki günü, İznik teslimi) · TDV: iznik (Osmanlı dönemi bölümü, teslim şartı)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 3 · 1371-09-26 Çirmen ─────────────────────────────────────────────────
{ id:"savas-cirmen-1371", tur:"savas-hikayesi",
  baslik:"Çirmen (Sırp Sındığı) Savaşı (26 Eylül 1371)",
  kisa:"Sırp ordusu Edirne'yi almaya yürüdü; Osmanlı öncüsünün gece baskını onu Meriç'e döktü ve Makedonya'nın kapıları açıldı.",
  tarih_metin:"15 Rebîülevvel 773 · 26 Eylül 1371 (Osmanlı kaynaklarındaki 766 / 1364-65 tarihi yanlıştır)",
  yer:"Çirmen, Meriç kıyısında, Edirne yakını",
  taraflar:[
    { ad:"Osmanlı Beyliği (Rumeli kuvvetleri)", komutan:"öncü: Hacı İlbeği · Rumeli'de Lala Şâhin (I. Murad o sırada Anadolu'da, Biga kuşatmasında)", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Sırp despotluğu ve krallığı (Bizans ile ittifak içinde)", komutan:"Serez Despotu Jovan Uglyeşa · kardeşi Kral Vulkaşin", kuvvet:"Sırp keşişi İsaiya'ya göre Sırp ve Rum askerleriyle 60.000" }
  ],
  oncesi:"Serez merkezli despotluğu Rum ve Türk topraklarıyla sınırdaş olan Uglyeşa, güneyde Evrenos'un, Meriç vadisinde Hacı İlbey ile Lala Şâhin'in ilerleyişini tehlike sayıyordu. Bizans'la ittifak yolunu açtı: 1368'de iki patrikhane uzlaştı, Mayıs 1371'de kiliselerin birliği ilan edildi. Prizren, Üsküp ve Prilep'e hükmeden kardeşi Kral Vulkaşin da sefere katıldı. Saldırı kararı 1371 baharında alındı; ordu Trakya'dan Arnavutluk'a kadar uzanan bölgenin Rum ve Sırp kuvvetlerinden toplandı. Lala Şâhin Bursa'daki I. Murad'dan yardım istedi, fakat Murad Boğaz'ı ve Gelibolu'yu Sırpların müttefiki Bizans tuttuğu için geçemedi; arkasında bırakamayacağı Karabiga (Pegae) kalesini karadan ve denizden kuşatmaya girişti.",
  akis:"Sırp ordusu ciddi bir direnişle karşılaşmadan Meriç'in sol kıyısında Çirmen'e kadar ilerledi ve Edirne tehlikeye girdi. Osmanlı rivayetine göre sonucu Hacı İlbeği'nin yönettiği öncü kuvvetlerin ani bir gece baskını belirledi: karanlıkta çıkan karışıklıkta Sırplar birbirine girdi, çoğu Meriç'e düşüp boğuldu ve ordu tamamen dağıldı. Savaşın ayrıntıları Âşıkpaşazâde ve Neşrî'de bulunur; ‘Sırp Sındığı’ adı da bu bozgundan gelir.",
  sonuc:"Vulkaşin savaşta öldü; Uglyeşa'nın topraklarına ailesi sahip çıkmadı. Makedonya'daki Sırp beyleri — Vulkaşin'in oğlu Kral Marko, Despot Dragaş ve kardeşi Konstantin — I. Murad'a boyun eğip haraçgüzar oldu. Vulkaşin'in mirası üzerinde kavga çıktı, Duşan'dan kalan topraklar rakip yerel prensliklere bölündü. Papa XI. Gregor 1372'de Türklerin Macaristan, Sırbistan ve Arnavutluk'un arasına girdiğini yazıp bir Haçlı toplantısı istedi; Thebes'teki görüşmelerden sonuç çıkmadı. TDV'ye göre bu gelişmeler I. Murad'ı Balkanlar'da üstün bir hükümdar yaptı ve Tuna ile Adriyatik yönünde yeni fetihlerin önünü açtı; Çirmen maddesi de zaferin Makedonya'nın kapılarını açtığını söyler.",
  tartisma:"Tarih: Osmanlı kaynakları savaşı 766 (1364-65) yılına koyar; TDV Hıristiyan kaynaklarının verdiği 26 Eylül 1371'i doğru kabul eder. Ordu büyüklüğü (60.000) yalnız bir Sırp keşişinin tanıklığına dayanır. Karabiga kuşatmasının 1371 yazında olduğunu TDV kesin sayar, Osmanlı rivayetindeki 766 tarihini yanlış bulur.",
  kesinlik:"kesin",
  olay:["1371-09-26|Çirmen"],
  kaynak:"TDV: murad-i (Çirmen öncesi ittifak, gece baskını, sonuçlar) · TDV: cirmen (zaferin anlamı)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 4 · 1395-05-17 Rovine ─────────────────────────────────────────────────
{ id:"savas-rovine-1395", tur:"savas-hikayesi",
  baslik:"Rovine (Argeş) Savaşı (17 Mayıs 1395)",
  kisa:"Kosova'da Sırplara asker yollayan, Silistre'yi alan Eflak voyvodası cezalandırılacaktı: Mircea tahtını kaybetti, ama hesap Niğbolu'ya taşındı.",
  tarih_metin:"17 Mayıs 1395 (TDV I. Bayezid maddesi) · TDV Eflak maddesi 1394 der",
  yer:"Eflak, Argeş nehri yakını (Rovine)",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Yıldırım Bayezid", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Eflak Voyvodalığı", komutan:"Voyvoda Mircea — Romen tarihinde ‘Koca Mircea’, Osmanlı kaynaklarında ‘Mirci’ (1386-1418)", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Mircea Tuna'yı geçip Dobruca'daki Osmanlı kalesi Silistre'yi almış, Besarabya'nın güneyindeki Türk yerleşimlerini ülkesine katmış ve 1389 Kosova Savaşı'nda Sırplara askerî yardım göndermişti. Bayezid'in Anadolu'yla uğraştığı yıllarda Karinâbâd'daki akıncılara başarılı hücumlar da yaptı. Macarlar ise Eflak ve Tuna Bulgaristanı'nda nüfuz arıyordu. Bayezid bütün gücünü Balkanlara çevirdi: 17 Haziran 1393'te Tırnova'yı aldı, 1395'te Macaristan üzerine yürüyüp Slankamen, Titel, Beçkerek, Tımışvar, Kraşova ve Mehâdiye kalelerine saldırdı.",
  akis:"Okunan iki TDV maddesi savaşın safhalarını anlatmaz. I. Bayezid maddesine göre Argeş nehri yakınında yapılan savaşta Mircea yenildi ve Bayezid onun yerine Vlad'ı tahta geçirdi. Eflak maddesi ise Rovine'deki savaşı ‘çetin’ diye niteler: Osmanlı kuvvetleri üstün geldi ve Mircea tahtını bırakmak zorunda kaldı.",
  sonuc:"Bayezid ardından Tuna'yı geçip Niğbolu'ya ulaştı ve Bulgar Kralı Şişman'ı yakalatıp öldürttü (3 Haziran 1395). Bu hızlı fetihler Macarları ve Venediklileri yeni bir Haçlı ittifakına itti; 25 Eylül 1396'da Niğbolu'da Haçlı ordusu bozguna uğradı. Mircea, Eflak üzerinde hak iddiasını sürdüren Macar Kralı Sigismund'un desteğiyle iki yıl sonra yeniden harekete geçti; Niğbolu yenilgisinden sonra Bayezid'in hükümranlığını kabul etti ve 1402 Ankara Savaşı'nda onun yanında bulundu. Fetret yıllarında damadı Mûsâ Çelebi'yi, sonra Düzmece Mustafa'yı destekledi ve ancak 1417'de Osmanlı hükümranlığını kesin olarak tanıdı. Türklerle savaşları Romen tarihinde ve edebiyatında büyük yer tutar; Eminescu'nun en uzun tarihî şiirlerinden biri ona dairdir.",
  tartisma:"Yıl: TDV I. Bayezid maddesi savaşı Argeş yakınında 17 Mayıs 1395'e, TDV Eflak maddesi Rovine savaşını 1394'e koyar — aynı ansiklopedinin iki maddesi arasında bir yıllık ayrılık var; burada taraf seçilmedi.",
  kesinlik:"kesin",
  olay:["1395-05-17"],
  kaynak:"TDV: bayezid-i (Balkan harekâtı, Argeş, Vlad, Şişman) · TDV: eflak (Mircea'nın geçmişi ve sonrası, Rovine)",
  ic_not:"Bağlanan olaylar_ek.js 1395-05-17 maddesinin kaynak alanı 'bulgaristan'; madde metni 'sonucu tartışmalı' diyor — okunan iki TDV maddesi bu nitelemeyi taşımıyor (ölçülmedi: bulgaristan gövdesi okunmadı). Yıl çelişkisi (1394/1395) madde sahibine (A3) raporda bildirildi.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 5 · 1669 Kandiye / Girit ──────────────────────────────────────────────
{ id:"savas-kandiye-girit-1669", tur:"savas-hikayesi",
  baslik:"Kandiye'nin teslimi ve Girit Savaşı'nın sonu (6 Eylül 1669)",
  kisa:"Çeyrek asırlık savaşın son kalesi bir hücumla değil, on sekiz maddelik bir teslim anlaşmasıyla el değiştirdi — ve geride neredeyse kimse kalmamıştı.",
  tarih_metin:"9 Rebîülâhir 1080 · 6 Eylül 1669 (teslim anlaşmasının imzası)",
  yer:"Kandiye (Herakleion), Girit adasının kuzey kıyısı",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Sadrazam Köprülüzâde Fâzıl Ahmed Paşa", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Venedik Cumhuriyeti (Kandiye garnizonu)", komutan:"okunan TDV maddelerinde adı geçmiyor", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Savaşın görünür sebebi, Sünbül Ağa'yı Mısır'a götüren küçük kafilenin Girit sularında Malta korsanlarınca basılması ve ganimetin adada satılmasıydı. Kaptanıderyâ Yûsuf Paşa Hanya yakınına çıktı ve elli dört günlük kuşatmayla Hanya'yı aldı (1645). Venedik Çanakkale Boğazı'nı ablukaya alıp Bozca ve Limni'yi ele geçirerek adaya deniz yoluyla yardımı kesince savaş uzadı. Deli Hüseyin Paşa Kisamo, Apokorano, Granbosa ve Resmo gibi kaleleri tek tek aldı, ama savaş Kandiye önünde kilitlendi; Osmanlılar şehrin yakınına İnâdiye adında büyük bir kale kurup baskıyı sürdürdü.",
  akis:"Avusturya ve Erdel işlerini istedikleri gibi çözen Osmanlılar, uzayıp büyük kayıplara yol açan savaşı bitirmek için Sadrazam Fâzıl Ahmed Paşa'yı büyük bir kuvvetle adaya gönderdi (1666). İki buçuk yıl süren sıkı kuşatma boyunca şehir tabyalı bir sistemle savunuldu: en büyük ve en sağlam tabya doğudaki Ak Tabya'ydı, her tabyanın kendi cephaneliği ve çok sayıda topu, önlerinde geniş ve derin hendekleri vardı. Kuşatma 6 Eylül 1669'da imzalanan on sekiz maddelik bir teslim anlaşmasıyla sona erdi.",
  sonuc:"Şehir teslim alındığında sakinlerin çoğu gitmişti: Paul Rycaut'a göre geride yalnız beş Venedikli, yaşlı Yahudi ve Rumlarla birlikte otuz kadar kişi vardı; 1670 cizye defteri on üç Hıristiyan ve yirmi altı Yahudi hânesi kaydeder. Fâzıl Ahmed Paşa geniş bir imar başlattı, kale onarıldı; manastırlar padişah, sadrazam ve Vâlide Turhan Sultan adına camiye çevrildi, çarşıdaki dükkânların büyük kısmı satın alınıp bu camilere vakfedildi. Girit, merkezi Kandiye olan ve Kandiye, Hanya, Resmo sancaklarına ayrılan imtiyazlı bir eyalet oldu. Venedik'te kalan Granbosa 1692'de, Suda ve Spinalonga 1715 Mora seferinde alındı. Uzun kuşatma yüzünden boşalan Kandiye ise eski ticaret canlılığını bir daha bulamadı.",
  tartisma:"Süre: TDV Girit maddesi Fâzıl Ahmed Paşa'nın ‘iki buçuk yıl’lık kuşatmasını, Kandiye maddesi ise ‘yaklaşık yirmi üç yıl’ süren abluka ve kuşatmayı anlatır — ikisi farklı dönemleri ölçer, çelişki değildir. Fındıklılı Mehmed Ağa'nın kuşatma öncesi ev sayılarını TDV resmî kayıtlara göre abartılı bulur.",
  kesinlik:"kesin",
  olay:["1669-09-27","1669-09-06|Kandiye","1645-08-22|Hanya"],
  kaynak:"TDV: girit (savaşın sebebi, Hanya, Fâzıl Ahmed Paşa kuşatması, teslim anlaşması, eyalet düzeni) · TDV: kandiye (tabyalar, teslim sonrası nüfus, imar)",
  ic_not:"🔴 GÜN ÇELİŞKİSİ — madde sahibine raporlandı: olaylar.js 1669-09-27 'Girit'in fethi tamamlandı' (gun: 'Eylül 1669 (Kandiye'nin teslimi)'), oysa TDV girit + kandiye teslim anlaşmasını 9 Rebîülâhir 1080 / 6 Eylül 1669'a koyuyor; kuyrukta kronoloji_venedik ve kronoloji_rodos_sovalyeleri 1669-09-06 taşıyor. 27 Eylül'ün dayanağı okunan gövdelerde YOK (bulunamadı). Kart her iki güne de bağlandı; hüküm verilmedi. Garnizon komutanı (madde 'Francesco Morosini' diyor) okunan TDV gövdelerinde geçmiyor — karta yazılmadı.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 6 · 1672-08-27 Kamaniçe ───────────────────────────────────────────────
{ id:"savas-kamanice-1672", tur:"savas-hikayesi",
  baslik:"Kamaniçe'nin fethi (27 Ağustos 1672)",
  kisa:"Hıristiyanlığın doğu kalkanı sayılan, Malta'yla kıyaslanan kale dokuz günde düştü; bir hafta sonra padişah katedralde cuma namazı kıldı.",
  tarih_metin:"3 Cemâziyelevvel 1083 · 27 Ağustos 1672",
  yer:"Kamaniçe (Kamieniec Podolski), Podolya — bugün Ukrayna",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"IV. Mehmed (ordunun başında)", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Lehistan", komutan:"okunan TDV maddesinde adı geçmiyor", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Nüfusu Polonyalı, Ermeni, Ukraynalı ve Yahudilerden, daha az sayıda Romen, Bulgar ve Rumdan oluşan Kamaniçe, korunaklı konumu ve güçlü kalesiyle XVI. yüzyılda Hıristiyanlığın doğu savunma hattı sayılır, Malta'daki La Valetta ile kıyaslanırdı. Ukrayna'ya hâkim olma mücadelesinde Osmanlılar Ruslara ve Polonyalılara karşı Kazaklarla ittifak kurdu. Abaza Paşa 1633'te kaleyi bir süre kuşattı ama alamadı. 1669'da Ukraynalı Petro Doroşenko himayeye alındı; ardından IV. Mehmed'in başında olduğu ordu Lehistan seferine çıktı.",
  akis:"Podolya'nın merkezi Kamaniçe, sefer sırasında dokuz gün süren bir kuşatmadan sonra 27 Ağustos 1672'de alındı. TDV kuşatmanın safhalarını anlatmaz; Kara Mustafa Paşa'nın tezkirecisi Hacı Ali Efendi'nin fetih olaylarını gün gün kaydeden bir günlük (Fetihnâme-i Kamaniçe) yazdığını ve bu günlüğün Silâhdar ile Râşid tarihlerinde kullanıldığını bildirir.",
  sonuc:"IV. Mehmed 2 Eylül'de Katolik katedralini camiye çevirip ilk cuma namazını orada kıldı; şehre bir kadı ve bir beylerbeyi atandı. Yedi kilise daha camiye çevrildi; şehirde vakıf kuranlar arasında Vanî Efendi, Merzifonlu Kara Mustafa Paşa, Musâhib Mustafa Paşa ve Köprülü Ahmed Paşa vardı ve eğitim kurumları açıldı. Fetih Osmanlılara Boğdan ve Kırım Hanlığı üzerinde daha sıkı denetim imkânı verdi, Kazakların Karadeniz akınlarının da önünü kesti. Ekim 1672'de Bucaş'ta varılan anlaşma Podolya'daki Osmanlı hâkimiyetini tesis etti. Dört sancaklı Kamaniçe eyaletinde 500'den fazla tımar verildi, garnizon 6000 civarındaydı; 200'den fazla topuyla kale Bağdat, Budin, Belgrad ve Kandiye ile birlikte devletin en önemli kaleleri arasına girdi. Polonyalılar 1683 Viyana bozgunundan sonra on yedi yıl şehri geri almaya uğraştı; Kamaniçe 1699 Karlofça Antlaşması'yla boşaltıldı.",
  tartisma:"Okunan TDV maddesi kaynakların ayrıştığı bir nokta kaydetmiyor.",
  kesinlik:"kesin",
  olay:["1672-08-27|Kamaniçe"],
  kaynak:"TDV: kamanice (Dariusz Kolodziejczyk)",
  ic_not:"TDV kamanice, Bucaş (Bučač) ile İzvança (Zuravno) antlaşmalarını aynı cümlede '18-23 Ekim 1672' diye anıyor, hemen ardından '1676 ve 1678'deki anlaşmalar'dan söz ediyor — İzvança'nın hangi yıla ait olduğu gövdeden kesin okunamadı; karta yalnız Bucaş yazıldı (ölçülemedi). Bucaş için ayrı kart zaten var: ekokuma_antlasma2 sebep-sonuc-bucas-1672.",
  gorsel:null, gorsel_kaynak:"aranmadı" }

];
