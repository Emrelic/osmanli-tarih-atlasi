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
  olay:["1302-07-27|Koyunhisar","1302-08-01|İznik"],
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
  olay:["1669-09-06|Girit'in fethi","1669-09-06|Kandiye","1645-08-22|Hanya"],
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
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ════════════════════════════════════════════════════════════════════════════
// DALGA 5 — KUTU-G1-1014 (14 Ekim 2026) · paket 0045 H-0007 · 0052 H-0006 · 0068 H-0006
// Kartsız savaş/kuşatma maddeleri, 1281-1453 dilimi. Gövdeler TDV'den çekildi ve
// OKUNDU (osman-i · orhan · bursa · murad-i · arnavutluk · karamanogullari ·
// bayezid-i · bizans · istanbul · isa-celebi · suleyman-celebi-emir · musa-celebi ·
// mehmed-i · fetret-devri · gelibolu · murad-ii · mora · turahan-bey · belgrad · izladi).
// Metinler özetlendi, kopyalanmadı; tarih ve sayı yalnız okunan gövdeden.
// ════════════════════════════════════════════════════════════════════════════

// ── 7 · 1285 Kulacahisar ──────────────────────────────────────────────────
{ id:"savas-kulacahisar-1285", tur:"savas-hikayesi",
  baslik:"Kulacahisar baskını ve Domaniç beli çarpışması (1285-1286)",
  kisa:"Sürülerinin yolunu kesen İnegöl tekfuruna karşı bir gece baskını: Osman'ın kaynaklarda tarihlenebilen ilk askerî hareketi, bir yıl sonra ilk gerçek savaşı doğurdu.",
  tarih_metin:"684 (1285) baskın · 685 (1286) Domaniç beli savaşı — TDV Osman I maddesi baskın için bir yerde 683 (1284) de verir",
  yer:"Kulaca Hisarı, İnegöl yakını (bugün Kulaca köyü çevresi) · Domaniç beli, İkizce yakını",
  taraflar:[
    { ad:"Osman'ın aşireti ve uç gazileri", komutan:"Osman Bey", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"İnegöl Rumları ve Karacahisar tekfurunun yardımcı birliği", komutan:"İnegöl ve Karacahisar tekfurları (adları kaynakta geçmiyor)", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Osman'ın halkı Söğüt'e yerleşmişti, ama yazın sürülerini Domaniç yaylasına çıkaran yarı göçebe bir topluluktu. Göç yolu İnegöl ovasından geçiyordu ve sürüler ekili tarlaları çiğnediği için İnegöl tekfuruyla aralarında öteden beri düşmanlık vardı. Bilecik tekfuru ise Osman'dan armağan alıyor, onu koruyordu; Osman da ona yumuşak davranıyordu. Osmanlı rivayetine göre Söğüt-Domaniç yolundaki küçük Ermenibeli çatışmasından sonra Osman, Şeyh Edebâli'nin eliyle gazâ kılıcını kuşandı ve çevredeki tekfurlara karşı açık mücadeleye başladı.",
  akis:"Osman İnegöl Rumlarına bir gece baskını yaptı; İnegöl yakınındaki küçük Kulaca Hisarı'nı yağmalayıp ateşe verdi. Kale tutulmadı, yakılıp bırakıldı: bu bir fetihten çok bir uç akınıydı. Baskın İnegöl Rumlarını telaşa düşürdü; toplanıp Karacahisar tekfurundan yardım istediler. Tekfurun gönderdiği askerler İnegöllülerle birleşti, Osman da gazileri topladı. İkizce yakınında Domaniç belinin aşıldığı yerde büyük bir çarpışma oldu; Osman'ın kardeşi Saru Yatı burada öldü.",
  sonuc:"TDV, Domaniç belindeki bu çarpışmayı Osman'ın gerçek anlamdaki ilk savaşı sayar. Karacahisar tekfuruyla açılan düşmanlık Kulaca akınından iki yıl sonra Karacahisar'ın alınmasıyla sonuçlandı; Osman burayı beylik merkezi yaptı ve rivayete göre bu fetihle uçta sancak beyliğine yükseldi. Kulaca'da daha sonra Orhan bir cami yaptırdı.",
  tartisma:"Yıl: TDV Osman I maddesi baskını bir yerde 684 (1285), Eskişehir ucunu anlattığı başka bir cümlede 683 (1284) olarak verir. Kaynaklar Osmanlı rivayetidir (başta Âşıkpaşazâde); baskının günü ve ayı bilinmez.",
  kesinlik:"rivayet",
  olay:["1285-01-01|Kulacahisar"],
  kaynak:"TDV: osman-i (Halil İnalcık — göç yolu ve İnegöl düşmanlığı, Kulaca baskını, Domaniç beli savaşı, Karacahisar)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 8 · 1303 Dimbos ──────────────────────────────────────────────────────
{ id:"savas-dimbos-1303", tur:"savas-hikayesi",
  baslik:"Dimbos (Dinboz) Savaşı (1303)",
  kisa:"Bursa ovasının tekfurları birleşip Osman'ın üstüne yürüdü; dar bir boğazda biten savaş Bursa'yı yirmi üç yıllık bir ablukanın içine kapattı.",
  tarih_metin:"702 (Âşıkpaşazâde) — hicrî yıl 26 Ağustos 1302'de başlar; tekfurların harekâtı büyük ihtimalle 1303'ün ilk aylarındadır",
  yer:"Yenişehir ovasındaki Koyunhisar'dan Dimbos (Dinboz) Boğazı'na — boğazdaki köy bugün Erdoğan adını taşır",
  taraflar:[
    { ad:"Osmanlı Beyliği", komutan:"Osman Bey (genç Orhan da savaşta)", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Bursa ovası tekfurlarının ittifakı", komutan:"Bursa, Adranos, Bidnos, Kestel ve Kite tekfurları", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"İznik kuşatmasına girişmeden önce Osman, Yenişehir'i ve gerisini korumak için Marmaracık ve Koyunhisar tekfurlarını itaat altına almıştı. 1302 yazında Koyunhisar (Bapheus) zaferi Bizans'ı sarstı. Bunun üzerine Bursa ovasının tekfurları — Bursa, Adranos (Orhaneli), Bidnos, Kestel ve Kite — Osman'a karşı birleşti. TDV bu ittifakın hiç şüphesiz İstanbul'dan gelen bir emirle kurulduğunu düşünür.",
  akis:"Tekfurların Yenişehir'e doğru başlattığı saldırı ilk anda başarılı oldu. Osman onları Yenişehir ovasındaki öteki Koyunhisar'da karşıladı. Düşman çarpışa çarpışa dar Dimbos Boğazı'na kadar geri çekildi ve orada son bir savaşa girdi. Osmanlı tarafında Osman'ın yeğeni, Gündüz Alp'in oğlu Aydoğdu şehit düştü; türbesi Dimbos'tan Koyunhisar'a giden yolun üstündedir. Zafer Osman'ın oldu: Kestel tekfuru savaş meydanında öldü, Bursa ve Adranos tekfurları kaçıp kalelerine kapandı.",
  sonuc:"Osman kaçan Kite tekfurunu Ulubat köprüsünün başına kadar kovaladı. Tekfur Ulubat kalesine sığındı; köprüyü tutan kaleyi geçmek mümkün değildi. Osman kaçağın teslimini, yoksa gölü dolanıp yöreyi yağmalayacağını bildirdi. Varılan anlaşmayla Ulubat tekfuru kaçağı teslim etti, Osman da kendisinden sonraki beyler adına köprüyü geçmeyeceklerine söz verdi. Kite tekfuru kalesinin önünde idam edilince Kite teslim oldu. Böylece Ulubat'a kadar Bursa ovası ve Uludağ Türkmen yerleşmesine açıldı. Osman Bursa'yı kuşatıp çevresinden koparmak için Aktimur ve Balabancık adlı iki havale kulesi yaptırdı ve çekildi; şehir 1326'ya kadar abluka altında kaldı.",
  tartisma:"Yıl: TDV Osman I maddesi Dimbos'u 702 (1303) yılına koyar ve Bursa'nın yirmi üç yıl kuşatıldığını söyler; TDV Bursa maddesi ise tekfurun Dinboz geçidindeki yenilgisini ve kuşatmanın başlangıcını 1308'e yerleştirir. Savaşa genç Orhan'ın da katıldığı TDV Orhan maddesinde belirtilir.",
  kesinlik:"kesin",
  olay:["1303-01-01|Dimbos"],
  kaynak:"TDV: osman-i (tekfurlar ittifakı, savaşın akışı, Ulubat anlaşması, havale kuleleri) · TDV: orhan (Orhan'ın katılımı) · TDV: bursa (1308 tarihi)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 9 · 1323 Adranos ─────────────────────────────────────────────────────
{ id:"savas-adranos-1323", tur:"savas-hikayesi",
  baslik:"Adranos (Orhaneli) seferi (1323-1324)",
  kisa:"Yirmi yıl önce Dimbos'tan kaçıp kalesine kapanan tekfurun sırası geldi: Osman'ın sağlığındaki son sefer, Bursa'nın güney kapısını kapattı.",
  tarih_metin:"Sefer 1323 · TDV Orhan maddesine göre kalenin alınışı 724 (1324)",
  yer:"Adranos (Atranos) kalesi — bugün Bursa'ya bağlı Orhaneli",
  taraflar:[
    { ad:"Osmanlı Beyliği", komutan:"Orhan Bey · yanında Köse Mihal ve Turgut Alp", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Adranos tekfurluğu", komutan:"Adranos tekfuru (adı kaynakta geçmiyor)", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Adranos tekfuru, 1303'te Osman'a karşı kurulan Bursa ovası tekfurları ittifakının üyesiydi; Dimbos yenilgisinden sonra kalesine sığınmıştı. Hastalığı yüzünden işleri giderek oğluna bırakan Osman, Orhan'ı Akça Koca, Konuralp ve Köse Mihal gibi deneyimli komutanların yanında seferlere göndererek beyliğe hazırlıyordu. 1305'ten beri ordunun başında olan Orhan, Sakarya boyundaki kaleleri alarak İznik'e giden yardımı kesmişti.",
  akis:"TDV, babasının zamanındaki son seferin Adranos kalesi üzerine olduğunu ve Orhan'ın yanında yine Köse Mihal ile Turgut Alp'in bulunduğunu yazar. Seferin akışı ve kuşatmanın ayrıntıları okunan TDV maddelerinde anlatılmaz.",
  sonuc:"Kale 724'te (1324) alındı. Aynı yıllarda Osman öldü: Eylül 1323 tarihli Asporça Hatun vakfiyesinde hayattadır, Orhan ise Mart 1324'te beyliğin başındadır. TDV, Adranos'un alınmasının Karesi Beyliği ile anlaşmazlığın kaynağı olması gerektiğini düşünür; Bizans imparatoru birkaç yıl sonra Karesi beyiyle bir anlaşma yapacaktı. Bursa 1326'da teslim oldu.",
  tartisma:"Okunan TDV maddeleri seferi Osman'ın son seferi olarak anar, fakat kalenin teslim gününü vermez; 1323 sefer yılı, 1324 kalenin alınış yılıdır.",
  kesinlik:"kesin",
  olay:["1323-09-01|Adranos"],
  kaynak:"TDV: orhan (Adranos seferi, 1324 fethi ve Karesi meselesi, Osman'ın ölüm aralığı) · TDV: osman-i (Dimbos'taki Adranos tekfuru)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 10 · 1385 Savra ──────────────────────────────────────────────────────
{ id:"savas-savra-1385", tur:"savas-hikayesi",
  baslik:"Savra Savaşı (18 Eylül 1385)",
  kisa:"Bir Arnavut beyi komşusuna karşı Osmanlıları çağırdı; Viyosa kıyısındaki savaşta Balşa öldü ve Arnavutluk'ta Osmanlı hâkimiyeti başladı.",
  tarih_metin:"18 Eylül 1385 (TDV Arnavutluk maddesi) · 787 (1385) (TDV I. Murad maddesi)",
  yer:"Savra (Muzakiye) ovası, Viyosa nehri üzerinde — Güney Arnavutluk",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Rumeli Beylerbeyi Timurtaş Paşa", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Balşa hânedanı (Zeta)", komutan:"II. Balşa", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Stefan Duşan'ın imparatorluğu 1355'te çöküp dağılınca Arnavutluk'u Slav, Arnavut ve Bizans kökenli yerel beyler paylaştı; kuzeyde Balşalar, ortada Topyalar en güçlüleriydi. Avlonya, Berat ve Kanina'yı tutan Balşalar, Draç'taki Karlo Topya'yı sıkıştırıyordu. Topya Osmanlılardan yardım istedi. Bu sırada Timurtaş Paşa'nın kuvvetleri 1383-1385'te Epir'de fetihler yapıyordu.",
  akis:"Timurtaş Devol vadisinden geçip Güney Arnavutluk'taki Savra (Muzakiye) ovasına indi. Viyosa üzerindeki Savra'da yapılan savaşta II. Balşa'nın kuvvetleri ağır bir yenilgiye uğradı ve Balşa savaşta öldü. Savaşın safhaları okunan TDV maddelerinde anlatılmaz.",
  sonuc:"TDV bu savaşı Arnavutluk'ta Osmanlı hâkimiyetinin başlangıcı sayar. Güneyde Thopia (Topya) ve Araniti aileleri büyük ihtimalle o sırada Osmanlı hâkimiyetini tanıdı; dağlık bölgede Dukagin aileleri ve kuzeyde Balşa'nın halefi II. Curac Balşić de barış yapıp Osmanlı himayesini kabullendi. Balşić güneydeki topraklarını Topya'ya bırakıp İşkodra (Zeta) yöresine çekildi. İskender Bey'in ailesi Kastriyotalar da Savra'dan sonra öteki Arnavut beyleri gibi padişaha tâbi oldu. Topyaların Osmanlıya bağlanmasından kaygılanan Venedik, 1387'de I. Murad'a elçi yolladı; Arnavutluk üzerinde uzun sürecek Osmanlı-Venedik rekabeti böyle başladı.",
  tartisma:"Okunan iki TDV maddesi savaşı aynı yıla koyar; günü (18 Eylül) yalnız Arnavutluk maddesi verir. Yardım çağrısını Arnavutluk maddesi Karlo Topya'ya bağlar, I. Murad maddesi ise harekâtı Timurtaş'ın Epir seferinin devamı olarak anlatır.",
  kesinlik:"kesin",
  olay:["1385-09-18|Savra"],
  kaynak:"TDV: arnavutluk (Topya'nın çağrısı, 18 Eylül 1385, Venedik rekabeti, Kastriyotalar) · TDV: murad-i (Timurtaş'ın harekâtı, sonrasında tâbi olan beyler)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 11 · 1386 Frenkyazısı ────────────────────────────────────────────────
{ id:"savas-frenkyazisi-1386", tur:"savas-hikayesi",
  baslik:"Frenkyazısı Savaşı ve Konya kuşatması (1386)",
  kisa:"Padişah Balkanlardayken damadı Karamanoğlu Osmanlı topraklarına girdi; Konya önündeki savaş, aşiret kuvvetlerinin düzenli bir ordu karşısında tutunamayacağını gösterdi.",
  tarih_metin:"788 (1386) baharı",
  yer:"Frenkyazısı (İfrenk Yazısı), Konya önü",
  taraflar:[
    { ad:"Osmanlı Devleti (yanında Sırp yardımcı birlikleri)", komutan:"I. Murad", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Karamanoğulları Beyliği", komutan:"Alâeddin Ali Bey (I. Murad'ın damadı)", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"1382'de Bursa'daki büyük düğünde I. Murad kızı Nefîse (Melek) Hatun'u Karamanoğlu Alâeddin Bey'e nişanlamıştı; Germiyan'ın Karaman'a sınırdaş toprakları da Şehzade Bayezid'in çeyizi olarak Osmanlı'ya geçti. TDV bu genişlemenin evlilik, tehdit ve şer'î satın alma yollarıyla yürüdüğünü yazar; Hamîd-ili de Osmanlı'nın eline geçmişti. Bu yerleri kendisi isteyen Alâeddin, Murad Balkanlarda seferdeyken harekete geçti. TDV I. Murad maddesine göre Murad 1385'te Sırp seferinden döndüğünde Karamanoğlu'nun Hamîd-ili'ne saldırdığını öğrendi; Karamanoğulları maddesi işgal edilen yerleri Karaağaç, Eğridir ve Yalvaç diye sayar. Murad bunu savaş sebebi saydı, Bursa'da kışlayıp baharda yola çıktı. Alâeddin barış istediyse de iki ordu Konya önlerinde karşılaştı.",
  akis:"Savaşın ayrıntılı anlatımı Ahmedî'nin Gazânâme'sindedir ve Neşrî'ye oradan geçmiştir. Frenkyazısı denilen yerde yapılan savaşta tâlimli ve tecrübeli Osmanlı ordusu Karaman kuvvetlerini yendi. Alâeddin Konya'ya çekildi, Murad da arkasından gelip şehri kuşattı. Kuşatma sırasında emre uymayıp yağmaya kalkışan Sırp askerlerini idamla cezalandırdı; TDV bu olayın Sırp Kralı Lazar'ın sonraki isyanının başlıca sebeplerinden biri olacağını belirtir.",
  sonuc:"Alâeddin'in eşi Nefîse Hatun babasına kocasını affetmesi için yalvardı. Murad, damadı gelip elini öpmesi şartıyla — el öpme tâbiliğin simgesiydi — ülkesini ona bağışladı ve Konya önünden çekildi. Karaman Beyliği ortadan kaldırılmadı. Hamîd-ili (Beyşehir-Süleymanşehir) yeniden Osmanlı'ya katıldı; Antalya ve İstanoz beyi Tekeoğlu itaate çağrıldı, karşı çıkınca bu yerler de alındı. TDV bu savaşı, düzenli Osmanlı ordusu karşısında geleneksel aşiret kuvvetlerinin iş göremeyeceğini gösteren kesin sonuçlu bir karşılaşma olarak değerlendirir. Osmanlı-Karaman hesaplaşması ise sürecekti: Yıldırım Bayezid 1397'de Konya'yı aldı.",
  tartisma:"Toprak kazancı iki TDV maddesinde farklı anlatılır: I. Murad maddesi Hamîd-ili'nin (Beyşehir-Süleymanşehir) yeniden katıldığını, Karamanoğulları maddesi antlaşmayla Beyşehir'in Osmanlı idaresine geçtiğini söyler. Savaşın günü bilinmez.",
  kesinlik:"kesin",
  olay:["1386-06-01|Frenkyazısı"],
  kaynak:"TDV: murad-i (savaşın sebebi ve önemi, Sırp askerlerinin cezası, Nefîse Hatun'un aracılığı) · TDV: karamanogullari (işgal edilen yerler, Beyşehir, 1397)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 12 · 1391-1402 İstanbul ablukası ─────────────────────────────────────
{ id:"savas-istanbul-ablukasi-1391-1402", tur:"savas-hikayesi",
  baslik:"Yıldırım Bayezid'in İstanbul ablukası (1391-1402)",
  kisa:"On yıl boyunca surların dışı Osmanlı'nındı; şehrin düşmesi an meselesi sayılırken Doğu'dan Timur göründü.",
  tarih_metin:"1391 (abluka başlar) · 1394 ilkbaharı (sıkı kuşatma) · 1396-1397 (Anadoluhisarı) · 1402 (Ankara bozgunuyla kalkar)",
  yer:"İstanbul ve Boğaz'ın iki yakası",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Yıldırım Bayezid", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Bizans İmparatorluğu", komutan:"II. Manuel Palaiologos", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Bayezid tahta geçince Bizans üzerindeki baskı arttı. Bizans saray kavgasına da karıştı: torunu VII. Ioannes'in tahttan indirdiği V. Ioannes, oğlu Manuel'in yardımıyla tahtını geri aldı ama kısa süre sonra öldü (1391). Manuel, yeğeninden önce davranıp tahta çıktı. TDV Bizans maddesine göre imparatorluk artık neredeyse yalnız surların içindeki İstanbul'dan ibaretti. Manuel daha önce Bayezid'in tâbii olarak onun Anadolu seferlerine katılmıştı.",
  akis:"Şehir Manuel'in tahta çıktığı 1391'de abluka altına alındı; bu ilk abluka imparatorun daha fazla vergi ödemeyi ve İstanbul'da bir Türk mahallesi kurulmasını kabul etmesiyle kalktı. Bayezid 1394 ilkbaharında şehri yeniden sıkı bir kuşatmaya aldı. 1396'da İstanbul'u almak için büyük çaba harcarken Haçlıların Niğbolu'yu kuşattığı haberi geldi; kuşatmayı bırakıp koştu ve 25 Eylül 1396'da Haçlı ordusunu bozdu. Ardından Boğaz'ı denetlemek için Güzelcehisar da denen Anadoluhisarı'nı yaptırdı (1396-1397). Manuel İstanbul'da Türk mahallesi, cami ve kadı kabul etmek zorunda kaldı. 1399 yazında Mareşal Boucicaut az bir kuvvetle Gelibolu önündeki zayıf Osmanlı filosunu aşıp şehre ulaştı, ama getirdiği yardım yetmedi; Manuel 10 Aralık 1399'da Batı'dan yardım dilenmeye gitti.",
  sonuc:"Kuşatmanın hızlandığı ve şehrin düşmesinin an meselesi sayıldığı sırada, 1399 sonbaharında Timur Doğu Anadolu'da göründü. 28 Temmuz 1402'de Ankara'da yenilen Bayezid esir düştü. TDV Bizans maddesine göre bu yenilgi ve ardından Osmanlı'da çıkan karışıklık Bizans'a elli yıl daha yaşama imkânı verdi. TDV İstanbul maddesi şehrin Bayezid'in dört kuşatmasından, ardından 1411'de Mûsâ Çelebi'nin ve 1422'de II. Murad'ın kuşatmasından kurtulduğunu sayar.",
  tartisma:"Başlangıç: TDV I. Bayezid maddesi 1394 ilkbaharındaki kuşatmayı anlatırken şehrin 'yedi yıldır' abluka altında olduğunu söyler; TDV Bizans maddesi ilk ablukayı 1391'e koyar. TDV İstanbul maddesi Bayezid'in kuşatmalarını dört olarak sayar, okunan maddeler bunların her birinin gününü vermez.",
  kesinlik:"kesin",
  olay:["1391-10-01|İstanbul","1394-01-01|İstanbul"],
  kaynak:"TDV: bizans (Manuel'in tahta çıkışı, 1391 ablukası ve şartları, Ankara'nın Bizans'a etkisi) · TDV: bayezid-i (1394 kuşatması, Niğbolu, Anadoluhisarı, Boucicaut, Timur) · TDV: istanbul (kuşatmaların sayısı)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 13 · 1403 Ulubat ─────────────────────────────────────────────────────
{ id:"savas-ulubat-1403", tur:"savas-hikayesi",
  baslik:"Ulubat Savaşı: Îsâ Çelebi'ye karşı Mehmed Çelebi (1403)",
  kisa:"Ankara bozgunundan sonra Bursa tahtına ilk oturan şehzade, Anadolu'yu paylaşma teklifini reddetti; Ulubat'ta yenilip Bizans'a sığındı.",
  tarih_metin:"1403 ilkbaharı-yazı (Timur'un Anadolu'dan çekilmesinin hemen ardından) — günü kaynakta yok",
  yer:"Ulubat, Bursa'nın batısı · öncesinde Domaniç geçidi",
  taraflar:[
    { ad:"Mehmed Çelebi (Amasya-Tokat)", komutan:"Mehmed Çelebi", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Îsâ Çelebi (Bursa)", komutan:"Îsâ Çelebi · komutanı Sarı Timurtaş Paşa", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Ankara'dan kaçıp Balıkesir yöresinde gizlenen Îsâ Çelebi, Timur'a bağlılık bildirip Karesi'nin idaresini aldı, Bursa'yı da ele geçirip saltanatını ilan etti. Kardeşi Mûsâ, Timur'un yarlığıyla gelince bir süre Bursa'dan çekildi; Timur 1403 baharında Anadolu'dan ayrılınca şehri yeniden aldı. Bu kez Amasya, Tokat ve Sivas yöresine hâkim olan Mehmed Çelebi Bursa'yı hedefledi. Îsâ, kardeşinin yolu üstündeki Ermenidağı ve Domaniç geçitlerini tuttu; Mehmed dar Ermeni derbendi yerine Domaniç'ten geçmeyi seçti ve burada Sarı Timurtaş'ın birliklerini bozdu.",
  akis:"Karesi sancak beyi Eyne Bey'in önerisiyle Mehmed ağabeyine bir paylaşım teklif etti: Tokat ve Sivas'a kadar Bursa'nın kuzey ve doğusu kendisinde, Aydın, Saruhan, Germiyan, Karesi ve Karaman Îsâ'da kalacaktı. TDV bu teklifin görünüşte âdil ama aslında Îsâ'nın aleyhine olduğunu yazar: Îsâ payını almak için Timur'un çekilmesiyle bağımsızlaşan beylerle savaşmak zorunda kalacaktı. Îsâ, başkentin elinde olduğunu ve yaşça büyüklüğünü ileri sürerek reddetti. İki ordu Ulubat'ta karşılaştı; daha donanımlı ve deneyimli komutanlara sahip Mehmed'in ordusu üstün geldi.",
  sonuc:"Îsâ kıyıya kaçıp Yalakâbâd'dan (Yalova) gemiyle İstanbul'a geçti ve Bizans imparatoruna sığındı. Mehmed Bursa'da tahta çıktı, hutbe okutup para bastırdı; Sarı Timurtaş Paşa'nın başını kestirip zafer nişanesi olarak ağabeyi Emîr Süleyman'a gönderdi. Îsâ'nın mücadelesi bitmedi: Süleyman'ın desteğiyle yeniden Anadolu'ya geçti, Bursa'yı yaktı, Candaroğlu ve Batı Anadolu beyleriyle ittifak kurdu, ama her seferinde yenildi; sonunda Eskişehir'de bir hamamda yakalatılıp boğduruldu. İspanyol elçisi Clavijo Eylül 1403'te Îsâ'nın artık hayatta olmadığını yazar.",
  tartisma:"Îsâ'nın sonu kaynaklarda ayrışır: TDV Îsâ Çelebi maddesi onu Mehmed'in adamlarının öldürdüğünü yazar; Emîr Süleyman maddesi ise Enverî ile İbn Hacer'in Süleyman'ın Îsâ'yı öldürttüğünü, Chalkokondyles'in Îsâ'nın Süleyman'la savaştığını söylediğini aktarır.",
  kesinlik:"kesin",
  olay:["1403-09-01|Ulubat"],
  kaynak:"TDV: isa-celebi (Domaniç geçidi, paylaşım teklifi, Ulubat, sonrası) · TDV: suleyman-celebi-emir (ölümüne dair farklı rivayetler) · TDV: fetret-devri",
  ic_not:"Madde günü 1403-09-01; TDV savaşı 1403 ilkbaharı-yazına koyar ve Clavijo'ya göre Îsâ Eylül 1403'te ölmüştür — Ulubat ondan önce olmalı. Gün düzeltmesi önerilmedi (kaynakta gün yok).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 14 · 1404-1405 Emîr Süleyman Anadolu'da ─────────────────────────────
{ id:"savas-suleyman-anadolu-yenisehir-1404", tur:"savas-hikayesi",
  baslik:"Emîr Süleyman Anadolu'ya geçiyor: Bursa ve Yenişehir ovası (1404-1405)",
  kisa:"Rumeli'nin efendisi Bursa'yı Mehmed'in elinden aldı; Yenişehir ovasında yenilen Mehmed, Tokat-Amasya'ya çekilip beş yıl beklemeyi seçti.",
  tarih_metin:"Ramazan 806 · Mart 1404 (Bursa) · Yenişehir ovası savaşı 'ertesi yıl' (TDV Fetret Devri maddesi) — günü kaynakta yok",
  yer:"Bursa · Yenişehir ovası",
  taraflar:[
    { ad:"Emîr Süleyman Çelebi (Edirne)", komutan:"Emîr Süleyman · Çandarlı Ali Paşa", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Mehmed Çelebi (Bursa, Tokat-Amasya)", komutan:"Mehmed Çelebi", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Ankara'dan kaçan Süleyman Çelebi 1403'te Bizans'la Gelibolu Antlaşması'nı imzalayıp Edirne'de hükümdarlığını ilan etmişti; Balkanlardaki işler yüzünden 1404 başına kadar Anadolu'ya geçemedi. TDV'ye göre Mehmed, Ankara'yı izleyen ilk yıllarda ağabeyinin saltanat hakkını tanımıştı. Ama Mehmed Îsâ'yı yenip Bursa'yı alınca dengeler değişti.",
  akis:"Süleyman büyük ihtimalle Mehmed'in Bursa'yı ele geçirmesi üzerine Anadolu'ya geçti ve Mart 1404'te Bursa'yı aldı. 22 Mart 1404'te Trabzon'a giden Clavijo, Karadeniz Ereğlisi ile Samsun'un Süleyman'ın yönetiminde olduğunu kaydeder; Ankara da onun elindeydi, Aydın'ı yöneten Cüneyd Bey de ona bağlanmıştı. Mehmed ciddi bir direniş gösteremedi. TDV Fetret Devri maddesine göre ertesi yıl Yenişehir ovasında Süleyman'la karşılaştı, yenildi ve yine Amasya'ya döndü.",
  sonuc:"Mehmed Bursa ve Ankara'yı kaybedip Tokat-Amasya üssüne çekildi; doğrudan çatışmadan kaçınıp ağabeyini Rumeli'ye çekmenin yolunu aradı. Bu amaçla Karamanoğlu'nun yanındaki kardeşi Mûsâ'yı, kendisine tâbi kalması şartıyla Rumeli'ye göndermeye karar verdi. Süleyman ise 1405 yazından 1410 başına kadar yaklaşık beş yıl Anadolu'da kaldı; Venedikliler 1406'da onu 'Türklerin imparatoru' diye anıyordu.",
  tartisma:"Okunan TDV maddeleri Süleyman'ın Anadolu'ya iki kez geldiğini anlatır: Mart 1404'teki ilk geçişten sonra 1404 ikinci yarısı ile 1405 yazı arasında Rumeli'ye dönmüş, 808 (1405) yazında yeniden gelmiştir. Yenişehir ovası savaşının bu iki gelişin hangisine ait olduğu gövdelerden kesin okunmuyor.",
  kesinlik:"kesin",
  olay:["1404-03-01|Emîr Süleyman","1405-01-01|Yenişehir"],
  kaynak:"TDV: suleyman-celebi-emir (Mart 1404, Clavijo, Anadolu'daki beş yıl) · TDV: mehmed-i (Bursa ve Ankara'nın kaybı, Tokat-Amasya) · TDV: fetret-devri (Yenişehir ovası, Mûsâ'nın gönderilmesi)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 15 · 1409-1410 Mûsâ-Süleyman: Yanbolu ve Kosmidion ───────────────────
{ id:"savas-yanbolu-kosmidion-1410", tur:"savas-hikayesi",
  baslik:"Mûsâ'ya karşı Süleyman: Yanbolu ve Kosmidion (1410)",
  kisa:"Mehmed'in Eflak üzerinden Rumeli'ye saldığı kardeş Edirne'yi aldı; Süleyman Rumeli'ye koşunca Anadolu Mehmed'e kaldı, Mûsâ da İstanbul surları önünde yenildi.",
  tarih_metin:"8 Şevval 812 · 13 Şubat 1410 (Yanbolu) · 15 Haziran 1410 (Kosmidion)",
  yer:"Yanbolu (Trakya) · Kosmidion (Hasköy), İstanbul surları önü",
  taraflar:[
    { ad:"Mûsâ Çelebi (Eflak ve Sırp desteğiyle)", komutan:"Mûsâ Çelebi", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Emîr Süleyman Çelebi (Bizans desteğiyle)", komutan:"Emîr Süleyman · Yanbolu'da ona tâbi Rumeli beylerbeyi", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Ankara'da babasıyla esir düşen Mûsâ, büyük ihtimalle 1403-1406 arasında Mehmed'in yanındaydı. Mehmed onu Süleyman'a karşı serbest bırakınca Mûsâ Karaman ve Candaroğlu ülkelerinde müttefik aradı, sonra Sinop'tan gemiyle Eflak'a geçti. Voyvoda Mircea onu iyi karşıladı; Rumeli beyleri ve tımarlı sipahiler de yanına geldi. Süleyman başta bu gelişmeyi önemsemeyip Bursa'da kaldı.",
  akis:"Mûsâ, Eflak kuvvetlerinin de yardımıyla 13 Şubat 1410'da Yanbolu'da Süleyman'a bağlı Rumeli beylerbeyini yendi, Edirne'yi aldı ve Gelibolu'ya kadar indi. Anadolu'daki Süleyman hemen Rumeli'ye geçmek zorunda kaldı; II. Manuel'in yardımıyla Boğaz'ı aştı ve 15 Haziran 1410'da İstanbul surları önündeki Kosmidion'da (Hasköy) Mûsâ'yı yendi. Mûsâ Sırp Despotu Stefan Lazareviç'in yanına çekildi, Yanbolu ve Çirmen ormanlarında çete savaşı sürdürdü, temmuzda Süleyman'a bir kez daha yenildi.",
  sonuc:"Süleyman'ın Anadolu'dan ayrılması Mehmed'e fırsat verdi: Mehmed Ankara ve Bursa'yı geri aldı ve tahta geçtiğinin işareti olarak 813 tarihli para bastırdı; Karamanoğlu da Sivrihisar başta olmak üzere Süleyman'ın yerlerine girdi. Rumeli'deki savaş ise Mûsâ'nın lehine döndü: ertesi yıl Edirne yakınında Süleyman'ın kuvvetlerini yenip şehre girdi; İstanbul'a kaçmak isteyen Süleyman Düğüncü köyünde yakalanıp öldürüldü ve Mûsâ 17 Şubat 1411'de hükümdarlığını ilan etti.",
  tartisma:"Mûsâ'nın Eflak'a geçiş yılı ayrışır: TDV I. Mehmed maddesi 809 (1406), Emîr Süleyman maddesi 1406 sonu der; atlasın 'Mûsâ Rumeli'ye geçti' maddesi ise 1409'a konmuştur. Kosmidion'dan sonraki ikinci yenilgi TDV I. Mehmed maddesinde 'Safer 813 / Haziran 1410' diye geçer.",
  kesinlik:"kesin",
  olay:["1409-02-01|Musa Çelebi","1410-02-13|Yanbolu","1410-05-06|Bursa","1410-06-15|Kosmidion"],
  kaynak:"TDV: musa-celebi (Eflak'a geçiş, Yanbolu, Kosmidion, 1411) · TDV: suleyman-celebi-emir (Süleyman'ın Rumeli'ye dönüşü, Mehmed'in Bursa ve Ankara'yı alışı) · TDV: mehmed-i",
  ic_not:"1409-02-01 maddesi (Mûsâ Rumeli'ye geçti) için TDV 1406 diyor — madde sahibine bildirilmeli; kart bağlandı çünkü maddenin anlattığı olay kartın öncesi bölümündedir.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 16 · 1411-1412 Mûsâ'nın İstanbul kuşatması ve İnceğiz ───────────────
{ id:"savas-musa-istanbul-incegiz-1411-1412", tur:"savas-hikayesi",
  baslik:"Mûsâ Çelebi'nin İstanbul kuşatması ve İnceğiz Savaşı (1411-1412)",
  kisa:"Bizans'ı cezalandırmak isteyen Mûsâ onu Mehmed'in kollarına itti; İnceğiz'de kazandı ama beyleri birer birer karşı tarafa geçti.",
  tarih_metin:"1411 sonbaharı (İstanbul kuşatması, TDV Mûsâ Çelebi) · İnceğiz: 815 / 1412 baharı (TDV Mûsâ Çelebi) — Ekim 1412 (TDV Fetret Devri)",
  yer:"İstanbul önleri · İnceğiz, Çatalca yakını",
  taraflar:[
    { ad:"Mûsâ Çelebi (Edirne)", komutan:"Mûsâ Çelebi", kuvvet:"TDV Fetret Devri maddesine göre İnceğiz'de 7000 yeniçeri" },
    { ad:"Bizans ve Mehmed Çelebi", komutan:"II. Manuel Palaiologos · Mehmed Çelebi", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Süleyman'ı ortadan kaldıran Mûsâ, Şeyh Bedreddin'i kazasker, Mihaloğlu Mehmed Bey'i beylerbeyi yaptı ve adına para bastırdı. Ama çevresi hemen karıştı: Sırp despotu Mûsâ'nın topraklarını yağmaladı, Bizans da elinde rehin tuttuğu Süleyman'ın oğlu Orhan'ı taht kavgasına saldı. Mûsâ önce Sırbistan'a yürüyüp birçok kale aldı.",
  akis:"1411 sonbaharında Mûsâ ansızın İstanbul önlerine gelip şehri kuşattı, ama sonuç alamadı: yanındaki vasalı Curac Brankoviç Bizans'a geçti, Mihaloğlu ve Çandarlı İbrâhim gibi Rumeli beyleri Mehmed'in tarafına kaçtı, Bizans donanması da Yassıada açıklarında Osmanlı filosunu bozdu. Kuşatma Bizans'ı Mehmed'le anlaşmaya itti. Gebze kadısı Fazlullah'ın İstanbul'da imparatorla uzlaşmasından sonra Mehmed İstanbul üzerinden Rumeli'ye geçti ve Çatalca yakınındaki İnceğiz'de Mûsâ ile çarpıştı. Mûsâ bu ilk karşılaşmayı kazandı; Mehmed Anadolu'ya dönmek zorunda kaldı.",
  sonuc:"Zafer Mûsâ'ya yaramadı: savaşın ardından Paşa Yiğit ve Mihaloğlu dahil bazı beyleri Stefan Lazareviç'in yanına kaçıp onun yerlerini yağmaladı. Aynı yılın sonbaharında Mehmed yeniden Boğaz'ı geçtiyse de kötü hava ve taşan nehirler yüzünden döndü. Mûsâ Sırbistan ve Arnavutluk'ta seferler yaparken Sırp despotu Mehmed'le ittifak kurdu. 1413 yazında Rumeli'ye geçen Mehmed'e Paşa Yiğit, Evrenos, Barak ve Sinan beyler katıldı; Mûsâ 5 Temmuz 1413'te Çamurlu'da yenilip öldürüldü ve Osmanlı toprakları yeniden tek elde birleşti.",
  tartisma:"İnceğiz'in tarihi TDV'nin iki maddesinde farklıdır: Mûsâ Çelebi maddesi 815 (1412) baharı, Fetret Devri maddesi Ekim 1412 der. Kuşatmanın başlangıcı da Mûsâ Çelebi maddesinde 1411 sonbaharıdır.",
  kesinlik:"kesin",
  olay:["1411-01-01|İstanbul","1412-10-01|İnceğiz"],
  kaynak:"TDV: musa-celebi (İstanbul kuşatması ve başarısızlık sebepleri, İnceğiz, sonrası, Çamurlu) · TDV: fetret-devri (Fazlullah'ın aracılığı, Ekim 1412, 7000 yeniçeri)",
  ic_not:"Madde 1411-06-01 'Musa Çelebi'nin İstanbul kuşatması' — TDV musa-celebi '1411 sonbaharı' der; gün düzeltmesi madde sahibine önerilmeli. · KUTU-H7-1015 (0073/H-0017): madde sonradan 1411-01-01 (yıl) yazıldı; bağ oraya taşındı (öksüzdü).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 17 · 1416 Gelibolu ───────────────────────────────────────────────────
{ id:"savas-gelibolu-1416", tur:"savas-hikayesi",
  baslik:"Gelibolu deniz baskını (29 Mayıs 1416)",
  kisa:"Osmanlı filosu Ege'de Venedik adalarına akın edince Venedik cevabı Gelibolu limanında verdi: Osmanlı'nın ilk büyük deniz yenilgisi.",
  tarih_metin:"1 Rebîülâhir 819 · 29 Mayıs 1416",
  yer:"Gelibolu limanı ve önü, Çanakkale Boğazı",
  taraflar:[
    { ad:"Osmanlı Devleti (Gelibolu donanması)", komutan:"okunan TDV maddelerinde baskın sırasındaki komutan adı geçmiyor", kuvvet:"1415 seferinde Çalı Bey komutasında 13'ü kadırga 112 gemi" },
    { ad:"Venedik Cumhuriyeti", komutan:"Pietro Loredano", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Yıldırım Bayezid Gelibolu kalesini tahkim edip limanı genişletmiş, İstanbul'a gidip gelen ticaret gemilerini burada durmaya zorlayan bir gümrük kurmuştu; ticareti zarar gören Venedik şehre birkaç kez saldırdı. Çelebi Mehmed döneminde Gelibolu iki devlet arasında başlıca anlaşmazlık konusuydu. 1414'te Nakşa'nın Venedikli dükü, Ege'deki öteki Latin beyleri gibi bağlılığını yenilemedi. Mehmed 1415'te Batı Anadolu deniz gazilerini Venedik'in Ege'deki yerlerine akına gönderdi, Çalı Bey komutasındaki Gelibolu donanmasını da Kiklad adalarına yolladı.",
  akis:"Venedik saldırıya saldırıyla karşılık vermeye karar verdi. Pietro Loredano komutasındaki Venedik donanması ani bir baskınla Gelibolu limanındaki Osmanlı donanmasını tahrip etti. Venedik kaynaklarına göre 12 Osmanlı gemisi ele geçirildi ve 4000 kişi öldürüldü.",
  sonuc:"Baskın Osmanlı deniz gücüne ağır bir darbe vurdu; TDV II. Murad maddesi bu olayı Venediklilerin Türk donanmasını yakıp Boğaz'ı kestiği gün diye anar. Yine de TDV'ye göre Venedik Boğaz'ın denetimini elinde tutamadı; 1423 ve 1430'daki yeni Gelibolu saldırıları da büyük bir ilerleme sağlamadı. TDV Venedik maddesi 1415-1419 çatışmasını, Venedik'in adalarını korumak için Osmanlı'yla giriştiği savaşların ilki olarak anar. Gelibolu, Haliç Tersanesi'nin 1515'te devreye girmesine kadar Osmanlı'nın başlıca deniz üssü kaldı.",
  tartisma:"Kayıp rakamları (12 gemi, 4000 ölü) yalnız Venedik kaynaklarına dayanır; okunan TDV maddeleri Osmanlı tarafından bir sayı vermez.",
  kesinlik:"kesin",
  olay:["1416-05-29|Gelibolu"],
  kaynak:"TDV: mehmed-i (1415 akınları, Çalı Bey'in donanması, 29 Mayıs 1416) · TDV: gelibolu (gümrük, Venedik rakamları, sonraki saldırılar) · TDV: venedik (1415-1419 savaşı) · TDV: murad-ii (Boğaz'ın kesilmesi)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 18 · 1422 II. Murad'ın İstanbul kuşatması ───────────────────────────
{ id:"savas-istanbul-1422", tur:"savas-hikayesi",
  baslik:"II. Murad'ın İstanbul kuşatması (Haziran-Eylül 1422)",
  kisa:"Bizans tahta Düzme Mustafa'yı oturtmaya kalkıştı; Mustafa'yı bitiren genç padişah hesabı İstanbul'dan sordu, ama arkasında Bursa kuşatılınca geri dönmek zorunda kaldı.",
  tarih_metin:"Receb 825 · Haziran 1422 (kuşatma başlar) — elli günden fazla sürer; Ağustos 1422'de Bursa'nın kuşatıldığı haberi gelir",
  yer:"İstanbul kara surları önü",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"II. Murad", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Bizans İmparatorluğu", komutan:"II. Manuel Palaiologos", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Çelebi Mehmed ölmeden önce çocuklarını korumak için bir düzen kurmuştu: küçük şehzadeler Bizans'a gönderilecek, imparator da Mehmed'in kardeşi Mustafa'yı serbest bırakmayacaktı. II. Murad tahta çıkıp kardeşlerini göndermeyi reddedince Manuel, Limni'de sürgün tutulan Mustafa'yı İzmiroğlu Cüneyd'le birlikte serbest bıraktı ve on gemiyle Gelibolu önüne çıkardı (Eylül 1421). Bizans Mustafa'yı meşru sultan tanıyordu. Mustafa Rumeli'yi ele geçirdi, Ocak 1422'de 12.000 sipahi ve 5000 piyadeyle Anadolu'ya geçti; ama Ulubat'ta bozuldu; Rumeli'ye kaçtıktan sonra Kızılağaç Yenicesi'nde yakalanıp Edirne'de idam edildi (başka bir rivayete göre Eflak üzerinden Kefe'ye kaçmıştı).",
  akis:"Mustafa'nın ardından Murad Bizans üzerine yürüdü ve Haziran 1422'de şehri kuşattı. Kuşatma elli günden fazla sürdü ama sonuç vermedi. Ağustos 1422'de on üç yaşındaki kardeşi Küçük Mustafa'nın, Karaman ve Germiyan beylerinin kattığı bir kuvvetle Bursa'yı kuşattığı haberi geldi. Murad İstanbul'a son bir genel taarruz yaptırdı, kuşatmayı sürdürmek için bir kuvvet bırakıp Edirne'ye döndü.",
  sonuc:"TDV Küçük Mustafa olayını II. Murad'a karşı girişilen genel bir saldırının parçası sayar: Karaman ve Germiyan'ın yanında İsfendiyar Bey, Eflak beyi, Venedik ve Macaristan da harekete geçmişti. Bursalılar Küçük Mustafa'nın lalasını kuşatmadan vazgeçirdi; İznik'e yerleşen şehzade, şehir kuşatılıp alındıktan sonra lalası İlyas Bey tarafından teslim edildi ve 20 Şubat 1423'te idam edildi. İstanbul kuşatmadan kurtuldu; TDV İstanbul maddesi 1422'yi şehrin 1453'ten önce atlattığı Osmanlı kuşatmalarının sonuncusu olarak sayar. Bizans üzerindeki baskı ise sürdü: Mayıs 1423'te Turahan Bey Mora'ya girdi, Selânik kuşatıldı.",
  tartisma:"Okunan TDV maddeleri kuşatmanın bitiş gününü vermez; Murad'ın ayrılışı Ağustos 1422'deki Bursa haberine bağlanır. Kuvvet sayıları yalnız Mustafa'nın Anadolu'ya geçen ordusu için verilmiştir.",
  kesinlik:"kesin",
  olay:["1422-06-10|İstanbul"],
  kaynak:"TDV: murad-ii (Düzme Mustafa, kuşatma, Küçük Mustafa, genel saldırı) · TDV: istanbul (kuşatmalar listesi)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 19 · 1423 Hexamilion ─────────────────────────────────────────────────
{ id:"savas-hexamilion-1423", tur:"savas-hikayesi",
  baslik:"Turahan Bey'in Mora seferi ve Hexamilion (Germe) duvarının yıkılışı (Mayıs 1423)",
  kisa:"Bizans'ın Mora'yı korumak için berzaha çektiği altı millik duvar, Düzme Mustafa'yı destekleyen imparatora verilen cevapla yerle bir oldu.",
  tarih_metin:"Cemâziyelâhir 826 · Mayıs 1423",
  yer:"Hexamilion (Germe Hisarı, Eksamil) — Mora'yı Yunan anakarasına bağlayan Korint berzahı",
  taraflar:[
    { ad:"Osmanlı Devleti (Tesalya uç kuvvetleri)", komutan:"Turahan Bey", kuvvet:"atlı akıncı birlikleri; sayı kaynakta yok" },
    { ad:"Bizans Mora despotluğu", komutan:"okunan TDV maddelerinde adı geçmiyor", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Mora, adını 'altı mil' anlamına gelen Heksamilion'dan alan dar bir berzahla anakaraya bağlanır; Bizans bu berzahı bir duvarla kapatmıştı. TDV Mora maddesine göre Ankara Savaşı'ndan 1423'e kadar Osmanlılarla Bizans arasında barış vardı. Bizans'ın taht iddiacısı Mustafa Çelebi'yi desteklemesi bu barışı bitirdi: İstanbul kuşatmasından sonra II. Murad, Tesalya uç bölgesinin beyi Turahan Bey'i Mora'ya gönderdi.",
  akis:"Turahan Bey Mayıs 1423'te atlı birlikleriyle Hexamilion duvarına hücum etti, duvarı yıkıp yarımadaya girdi ve büyük tahribat yaptı. Chalkokondyles de Mora seferindeki rolünü anlatırken Germe Hisarı'nın yıkılışından ve Turahan'ın akınlarından söz eder.",
  sonuc:"Seferin ardından Hexamilion'un yeniden yapılmaması ve yıllık vergi ödenmesi şartıyla barış sağlandı. Aynı aylarda Selânik kuşatma altına alınmıştı; Venedik şehrin idaresini Bizans'tan devralınca yeni bir bunalım başladı. Bizans duvarı sonradan yeniden yaptı: Aralık 1446'da II. Murad onu bir kez daha yıkarak yarımadaya girdi ve Despot Konstantinos ile kardeşi Thomas vergi ödemeyi kabul etmek zorunda kaldı.",
  tartisma:"Okunan TDV maddeleri seferin süresini ve kayıpları vermez; Turahan'ın rolü Osmanlı kaynaklarının yanında Bizanslı Chalkokondyles'te de anlatılır.",
  kesinlik:"kesin",
  olay:["1423-05-01|Hexamilion"],
  kaynak:"TDV: mora (berzah, 1402-1423 barışı, 1423 seferi ve barış şartları, 1446) · TDV: turahan-bey (Mayıs 1423 hücumu, Chalkokondyles) · TDV: murad-ii (Selânik)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 20 · 1440 Belgrad ────────────────────────────────────────────────────
{ id:"savas-belgrad-1440", tur:"savas-hikayesi",
  baslik:"Belgrad'ın ilk kuşatması (1440)",
  kisa:"Sırp mirasından Macarların elinde kalan son güçlü kale altı ay dayandı; II. Murad için bir dönüm noktası oldu.",
  tarih_metin:"844 (1440) — altı ay sürdü",
  yer:"Belgrad, Sava ile Tuna'nın birleştiği yer",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"II. Murad", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Macar Krallığı (Belgrad garnizonu)", komutan:"okunan TDV maddelerinde adı geçmiyor", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Sırp despotluğunun mirası üzerinde Osmanlı ile Macaristan çekişiyordu. II. Murad, Olivera'nın Yıldırım Bayezid'le evliliğini öne sürüp kendini meşru vâris saydı; Kral Sigismund ise gelip Belgrad'ı aldı, Osmanlılar da Güvercinlik'i tuttu. II. Murad Mart 1439'da Sırbistan'ı ele geçirdi ve despotun merkezi Semendire'yi 27 Ağustos 1439'da aldı. Sırp mirasından Macarların elinde kalan güçlü nokta Belgrad'dı.",
  akis:"Kuşatma 1440'ta karadan ve Tuna nehrinden başladı ve altı ay sürdü. Kale direndi, orduda salgın hastalık çıktı ve kuşatma kaldırıldı. TDV II. Murad maddesi, Türklere karşı ilk kez kullanılan tüfek ateşinin bu başarısızlığın sebeplerinden biri gibi göründüğünü yazar.",
  sonuc:"Aynı yıl yeni Rumeli beylerbeyi Şehâbeddin Şâhin Paşa önemli gümüş madeni merkezi Novoberda'yı aldı, ama TDV Belgrad başarısızlığını II. Murad için bir dönüm noktası sayar. Belgrad'ı ikinci kez Fâtih Sultan Mehmed kuşattı (1456); bizzat katılıp yaralandığı bu kuşatma da sonuçsuz kaldı. Kale ancak 1521'de Kanûnî'nin Macaristan seferinde alındı; halkının bir kısmı İstanbul'a getirilip bugün Belgrad ormanları ve Belgrad Kapısı diye bilinen yerlere yerleştirildi.",
  tartisma:"Okunan iki TDV maddesi başarısızlığın sebeplerini farklı vurgular: Belgrad maddesi direniş ve salgın hastalığı, II. Murad maddesi tüfek ateşini öne çıkarır.",
  kesinlik:"kesin",
  olay:["1440-04-01|Belgrad"],
  kaynak:"TDV: belgrad (kara ve nehirden altı aylık kuşatma, salgın, 1456) · TDV: murad-ii (Sırp mirası, Semendire, tüfek ateşi, dönüm noktası)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 21 · 1443 İzladi / Uzun Sefer ────────────────────────────────────────
{ id:"savas-izladi-uzun-sefer-1443", tur:"savas-hikayesi",
  baslik:"Uzun Sefer ve İzladi Derbendi (Ekim-Aralık 1443)",
  kisa:"Osmanlı ordusu kış için dağılmıştı; Hunyadi Tuna'yı geçip Niş ve Sofya'yı aldı, Balkan dağlarının son geçidine dayandı.",
  tarih_metin:"Receb 847 · Ekim 1443 (Tuna geçişi) · 1 Şâban 847 · 24 Kasım 1443 (İzladi geçidi, TDV II. Murad maddesi)",
  yer:"İzladi (Zlatitsa) Derbendi, Orta Bulgaristan — Sofya'dan Meriç vadisine inen dağ yolu",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"II. Murad · Rumeli Beylerbeyi Kasım Paşa · uç beyi Turahan Bey", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Haçlı ordusu", komutan:"János Hunyadi (Yanko) · Macar Kralı Vladislav · Sırp despotu", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"1440 Belgrad kuşatması sonuçsuz kalmıştı. Osmanlı ordusunun büyük kısmı sonbaharda dağılan tımarlı sipahilerden oluşuyordu; Hunyadi bunu biliyordu. Erdel'deki Osmanlı bozgununun haberini alan Karamanoğlu İbrâhim Bey de 1443'te Akşehir ve Beyşehir'e yürümüştü; Murad Anadolu'da barış imzalayıp Edirne'ye dönmüştü.",
  akis:"Ekim 1443'te Hunyadi, yanında yeni Macar kralı ve Sırp despotu olduğu halde Tuna'yı geçti. Rumeli kuvvetlerini bozarak Niş ve Sofya'yı aldı ve Meriç vadisine açılan son Balkan geçitlerine dayandı. II. Murad onları İzladi (Zlatitsa) geçidinde karşıladı. TDV II. Murad maddesine göre padişah düşmanı burada durdurdu; TDV İzladi maddesine göre ise İzladi Derbendi'ndeki savaşta Osmanlı kuvvetleri bozulup geri çekildi, Haçlılar derbendi aşıp Filibe ovasına indi ve oradaki direnişi de kırdı, ancak şiddetli kış yüzünden geri döndü.",
  sonuc:"Hıristiyan ordusu geri çekildi ama haber Murad'ı çok sarstı. Uç kuvvetlerinin büyük beyi Turahan Bey, İzladi'de Kasım Paşa'ya gereği gibi yardım etmediği için yakalatılıp Tokat'a hapse gönderildi (Varna'dan sonra görevine iade edildi). Macarların Balkan içlerine kadar inmesi Balkanlarda ve Anadolu'da yeni hareketlenmelere yol açtı; Çandarlı Halil Paşa barıştan başka çare görmüyordu. Bu ortamda 1444'te Edirne-Segedin barışı yapıldı, Haçlıların onu bozması da Varna Muharebesi'ni getirdi.",
  tartisma:"Sonuç ayrışır: TDV II. Murad maddesi padişahın İzladi'de Haçlıları durdurduğunu yazar; TDV İzladi maddesi (Machiel Kiel) Osmanlı kuvvetlerinin derbentte bozulduğunu, Haçlıların Filibe ovasına inip kış yüzünden döndüğünü anlatır. Bu kart iki anlatıyı da veriyor; taraf seçilmedi.",
  kesinlik:"kesin",
  olay:["1443-11-01|İzladi"],
  kaynak:"TDV: murad-ii (Hunyadi'nin Tuna geçişi, Niş ve Sofya, 24 Kasım 1443, Turahan Bey'in cezası) · TDV: izladi (derbent savaşı, Filibe ovası, kış)",
  ic_not:"Madde günü 1443-11-01; TDV murad-ii geçit çarpışmasını 1 Şâban 847 / 24 Kasım 1443'e koyar — gün düzeltmesi madde sahibine önerilmeli (yazılmadı).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ════════════════════════════════════════════════════════════════════════════
// DALGA 5 / 2. parti — KUTU-G1-1014 · 1454-1699 dilimi. Okunan TDV gövdeleri:
// haci-giray-i · kefe · mehmed-ii · iskender-bey · arnavutluk · rodos · mesih-pasa ·
// cem-sultan · bayezid-ii · gedik-ahmed-pasa · hersekzade-ahmed-pasa · mardin ·
// biyikli-mehmed-pasa · selman-reis · suleyman-i · ibrahim-pasa-makbul · korfu ·
// bayezid-sehzade · malta · turgut-reis · piyale-pasa · osman-pasa-ozdemiroglu ·
// sirvan · eflak · bogdan · ibrail · silistre · yergogu · koca-sinan-pasa ·
// mehmed-iii · ibrahim-pasa-melek · ibrahim-pasa-kara · mehmed-iv · egriboz · mustafa-ii.
// ════════════════════════════════════════════════════════════════════════════

// ── 22 · 1454 Kefe ───────────────────────────────────────────────────────
{ id:"savas-kefe-1454", tur:"savas-hikayesi",
  baslik:"Kefe'nin ilk Osmanlı-Kırım kuşatması (Temmuz 1454)",
  kisa:"İstanbul'u alan Fâtih'in donanması denizden, Hacı Giray'ın atlıları karadan geldi; Ceneviz Kefe'si bu kez haraçla kurtuldu, yirmi bir yıl sonra kurtulamayacaktı.",
  tarih_metin:"14 Temmuz 1454 (Hacı Giray'ın kara kuşatması)",
  yer:"Kefe (Caffa, bugün Feodosiya), Kırım'ın güneydoğu kıyısı",
  taraflar:[
    { ad:"Osmanlı Devleti ve Kırım Hanlığı", komutan:"Kırım Hanı I. Hacı Giray (karada) · Osmanlı donanması (komutanı okunan maddelerde geçmiyor)", kuvvet:"Hacı Giray'ın 7000 atlısı · elli altmış kadar Osmanlı kadırgası" },
    { ad:"Ceneviz Kefe'si", komutan:"okunan TDV maddelerinde adı geçmiyor", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Cenevizliler XIII. yüzyılda Altın Orda'dan izin alarak Kefe'ye yerleşmiş, Orda zayıflayınca şehre hâkim olmuşlardı; Kefe Asya'dan gelen büyük ticaret yolunun Karadeniz'deki merkeziydi ve 1420'lerde yaklaşık 40.000 kişinin yaşadığı tahmin edilir. Kırım Hanlığı'nın kurucusu Hacı Giray, 1434'te Ceneviz ordusunu bozguna uğrattıktan sonra Kefe'yi kuşatmış, ama top ve cephanesi olmadığından çekilmişti. Fâtih'in İstanbul'u alması, Cenevizlilerin Karadeniz kolonileriyle bağlantısını kesti. Haziran 1454'te Hacı Giray ile Fâtih, Kefe'yi almak için anlaştı.",
  akis:"Elli altmış kadırgalık Osmanlı donanması Kefe önünde demir attı; Hacı Giray da 14 Temmuz 1454'te 7000 atlısıyla şehri karadan kuşattı. Kefe bir süre dayandı.",
  sonuc:"Cenevizliler Osmanlılara 3000, Hacı Giray'a 1200 altın vergi ödemeyi teklif etti; teklif kabul edildi ve kuşatma kaldırıldı. Ardından Cenevizliler, yerli Kırım aristokrasisinin de yardımıyla Hacı Giray'ı tahttan indirip oğlu Haydar'ı han yaptılar; Haydar birkaç ay dayanabildi, Hacı Giray yeniden han oldu ve bundan sonra Cenevizlilerle hep iyi geçindi. Kefe'nin kesin fethi Haziran 1475'te geldi: Gedik Ahmed Paşa'nın yüz parçalık donanması Kefe'yle birlikte bütün kıyı şeridini aldı.",
  tartisma:"Okunan TDV maddeleri Osmanlı donanmasının komutanını ve kuşatmanın süresini vermez; ödenen vergi teklifin rakamıdır.",
  kesinlik:"kesin",
  olay:["1454-07-14|Kefe"],
  kaynak:"TDV: haci-giray-i (1434, 1454 anlaşması ve kuşatma, vergi, Haydar) · TDV: kefe (Ceneviz Kefe'si, nüfus, 1475 fethi)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 23 · 1463 Osmanlı-Venedik savaşının başlaması ───────────────────────
{ id:"savas-osmanli-venedik-1463", tur:"savas-hikayesi",
  baslik:"On altı yıllık Osmanlı-Venedik Savaşı başlıyor (Temmuz 1463)",
  kisa:"Bir Rum papazının açtığı kapıdan alınan Argos, Venedik'i on yıllardır kaçındığı savaşa soktu; papa Osmanlı topraklarının paylaşım planını bile hazırladı.",
  tarih_metin:"11 Zilkade 867 · 28 Temmuz 1463 (Venedik'in savaş kararı) — savaş 1479'a kadar sürdü",
  yer:"Mora (Argos, Heksamilion) · Ege · Arnavutluk · Bosna",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Fâtih Sultan Mehmed", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Venedik Cumhuriyeti ve müttefikleri (Macaristan, papalık; Arnavutluk'ta İskender Bey)", komutan:"okunan TDV maddelerinde Venedik komutanı adı geçmiyor", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"İstanbul'un fethinden sonra Venedik, 18 Nisan 1454 antlaşmasıyla doğudaki kolonilerini güvenceye almış ve Haçlı toplantılarından uzak durmuştu. Ama dengeler bozuluyordu: Fâtih 1460'ta Mora'yı, Venedik'in kıyıdaki kaleleri dışında, tümüyle aldı; Eylül 1462'de Midilli'yi ilhak etti; 1463'te Bosna'yı fethetti. TDV'ye göre Mora'ya gerçekten sahip olmak, Venedik'i Koron, Modon, Anabolu ve Argos'tan atmayı gerektiriyordu. Papanın çabasıyla Macaristan ve Venedik Osmanlılara karşı ittifak yaptı.",
  akis:"1463'te Argos, yerli bir Rum papazın yardımıyla Osmanlılarca alındı; bu, Venedik'i 28 Temmuz 1463'te savaş kararı almaya götürdü. Papa Venedik ve Burgonya ile ittifak imzalayıp Mayıs 1464'ü Haçlı seferinin hareket tarihi olarak belirledi; Osmanlı topraklarının paylaşım planı bile çizildi. 1463 sonbaharında müttefikler saldırıya geçti: Venedikliler Argos'u geri aldı ve Heksamilion duvarını aceleyle yeniden yükseltti, Mora'da pek çok kale ve şehir onlara katıldı; Macar kralı 16 Aralık 1463'te Bosna'nın merkezi Yayça'yı aldı; Venedik donanması Çanakkale Boğazı'nın dışında dolaşıyordu. Arnavutluk'ta İskender Bey 20 Ağustos 1463'te Venedik'le anlaştı.",
  sonuc:"Fâtih köklü önlemler aldı: donanmayı güçlendirmek için Kadırga Limanı tersanesini kurdurdu, İstanbul'u korumak için Boğaz'ın iki yakasına Sultâniye ve Kilitbahir kalelerini yaptırdı (1463-1464 kışı). Mora'da Venedikliler yenilip yarımadayı yeniden Osmanlılara bıraktı. Savaş on altı yıl sürdü; Fâtih 1465'ten itibaren barış görüşmeleri açtı ama haraç meselesi yüzünden uzlaşılamadı. Savaş 25 Ocak 1479'da İstanbul'da imzalanan antlaşmayla bitti: Venedik İşkodra'yı boşaltıp teslim etti, Akçahisar, Limni, Eğriboz ve Mayna'yı bıraktı ve yıllık bir vergi ödemeye razı oldu.",
  tartisma:"Atlas maddesi savaşın başlangıcını 1463 Temmuz başına koyar; TDV II. Mehmed maddesi Venedik'in savaş kararını 28 Temmuz 1463 olarak verir. Venedik'i savaşa iten olay TDV'de Argos'un alınmasıdır.",
  kesinlik:"kesin",
  olay:["1463-07-01|Venedik"],
  kaynak:"TDV: mehmed-ii (1454 antlaşması, Mora, Argos, 28 Temmuz 1463, Haçlı planı, Sultâniye ve Kilitbahir) · TDV: iskender-bey (20 Ağustos 1463) · TDV: venedik",
  ic_not:"Madde günü 1463-07-01; TDV mehmed-ii savaş kararını 11 Zilkade 867 / 28 Temmuz 1463'e koyar — gün düzeltmesi madde sahibine önerilmeli (yazılmadı).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 24 · 1466-1467 Fâtih'in Arnavutluk seferleri ────────────────────────
{ id:"savas-arnavutluk-seferleri-1466", tur:"savas-hikayesi",
  baslik:"Fâtih'in İskender Bey üzerine Arnavutluk seferleri (1466-1467)",
  kisa:"Akçahisar'ın sarp kayası iki kez padişahı geri çevirdi; Fâtih alamadığı kalenin karşısına yirmi beş günde yeni bir şehir kurdurdu: İlbasan.",
  tarih_metin:"1466 baharı (birinci sefer) · Haziran 1467 (ikinci sefer)",
  yer:"Orta Arnavutluk — Akçahisar (Kruja) ve İlbasan (Elbasan)",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Fâtih Sultan Mehmed · Ohri sancak beyi Balaban Paşa", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"İskender Bey (Skanderbeg) ve Arnavut kuvvetleri, Venedik desteğiyle", komutan:"İskender Bey", kuvvet:"TDV'ye göre İskender Bey'in kuvvetleri hiçbir zaman 3000'i aşmadı" }
  ],
  oncesi:"Çocukken rehine olarak Osmanlı sarayına gönderilen İskender Bey, 1443 İzladi savaşında Rumeli beylerbeyinin ordugâhından kaçıp babasının topraklarını ve Akçahisar'ı ele geçirmiş, 1444'te Leş'te Arnavut beyleriyle birleşmişti. II. Murad 1450'de Akçahisar'ı kuşattı ama alamadı; İskender Bey 1451'de Napoli kralına tâbi oldu. Fâtih bir süre onunla ateşkes yaptı, ama 1463 yazında Osmanlı-Venedik savaşı başlayınca İskender Bey Venedik'le anlaştı ve Akçahisar'a Venedik askeri yerleşti. Balaban Paşa'nın 1464-1465 saldırıları sonuç vermedi.",
  akis:"1466 baharında Fâtih büyük bir orduyla Arnavutluk'a geldi; ağır akınlarla isyancıları yıldırmaya, ani baskınlar yapan İskender Bey'i dağlarda takip ettirmeye çalıştı. Akçahisar'ın önüne gelince, çok sarp bir yerdeki kalenin alınmasının güçlüğünü görüp kuşatmayı Balaban Paşa'ya bıraktı. Orta Arnavutluk'ta isyancıları baskı altında tutmak için İlbasan kalesini yirmi beş günde inşa ettirdi. İskender Bey yardım için Roma'ya ve Napoli'ye gitti; papa 12 Aralık 1466'da ona 5000 duka verdi. Nisan 1467'de dönüp Akçahisar'ı kuşatan Osmanlı kuvvetlerine akınlar yaptı, İlbasan'ı kuşattı. Fâtih Haziran 1467'de yeniden Arnavutluk'a girdi, Buzurşek Boğazı'nı tuttu, akıncılar kıyıya kadar ilerledi; ardından Akçahisar'ı kuşattı, ama sarp kale bu kez de alınamadı ve kuşatmayı sürdürecek bir kuvvet bırakıldı.",
  sonuc:"İlbasan çevresi yeni bir sancak oldu; Fâtih'in 1466'da kurduğu İlbasan kısa sürede bir Müslüman merkezine dönüştü. İskender Bey 1468'de öldü. TDV'ye göre Arnavutluk'un tamamen fethi ancak onun ölümünden sonra, 1463 anlaşmasına dayanarak mirasçısı olduklarını ileri süren Venediklilerle yapılan savaşlar sonunda gerçekleşti: Akçahisar 1478'de, İşkodra 1479'da, Draç 1501'de alındı.",
  tartisma:"Okunan TDV maddeleri iki seferin günlerini ve kayıplarını vermez. İskender Bey'in kuvvetinin 3000'i aşmadığı bilgisi TDV İskender Bey maddesindedir.",
  kesinlik:"kesin",
  olay:["1466-06-01|Arnavutluk"],
  kaynak:"TDV: iskender-bey (öncesi, 1466 ve 1467 seferleri, İlbasan, Roma yolculuğu) · TDV: arnavutluk (İlbasan sancağı, fethin tamamlanması)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 25 · 1480 Rodos ──────────────────────────────────────────────────────
{ id:"savas-rodos-1480", tur:"savas-hikayesi",
  baslik:"Birinci Rodos kuşatması (23 Mayıs – 28 Temmuz 1480)",
  kisa:"Fâtih aynı bahar hem Rodos'a hem İtalya'ya ordu yolladı; Rodos doksan günlük kuşatmaya dayandı ve Avrupa'nın en sağlam kalesine dönüştü.",
  tarih_metin:"13 Rebîülevvel 885 · 23 Mayıs 1480 (başlangıç) · 20 Cemâziyelevvel 885 · 28 Temmuz 1480 (son büyük hücum) · donanma 3 Ağustos'ta ayrıldı",
  yer:"Rodos adası ve kalesi",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Vezir Mesih Paşa", kuvvet:"160 gemilik filo" },
    { ad:"Saint Jean (Rodos) Şövalyeleri", komutan:"Büyük Üstat Pierre d'Aubusson", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Rodos şövalyeleri papaya bağlı oldukları için padişaha haraç ödemeyi reddetmiş ve savaş hâlini sürdürmüştü; 1454'teki Osmanlı Ege seferi sonuç vermemiş, Fâtih 1461'de Trabzon seferine çıkarken şövalyelerle ateşkes yapmıştı. Şövalyeler Türk gemilerine ve kıyılarına korsan saldırılarını artırdı. 1479'da Venedik'le barışı imzalayan Fâtih yüzünü Rodos'a, İtalya'ya ve papaya çevirdi. 1480 baharında bir yandan Vezir Mesih Paşa'yı Rodos'a, öbür yandan Gedik Ahmed Paşa'yı Güney İtalya'ya gönderdi.",
  akis:"Mesih Paşa'nın 160 gemilik filosu adayı yaklaşık üç ay kuşattı. Pierre d'Aubusson komutasındaki şövalyeler ağır kayıplara rağmen şiddetle direndi. 28 Temmuz 1480'de yapılan son büyük hücum da sonuç vermeyince Osmanlılar kuşatmayı kaldırdı; donanma 3 Ağustos'ta adadan ayrıldı.",
  sonuc:"TDV II. Mehmed maddesi ordunun doksan günlük çetin bir kuşatmadan sonra büyük kayıplarla çekildiğini yazar. Başarısızlık yüzünden Mesih Paşa vezirlikten azledildi. Şövalyeler şehir surlarını baştan sona yeniledi ve güçlendirdi; Rodos Avrupa'nın en sağlam istihkâmı hâline geldi. Gedik Ahmed Paşa ise aynı yaz 132 gemi ve 18.000 kişiyle İtalya'ya geçip 11 Ağustos 1480'de Otranto'yu aldı. Rodos ancak 20 Aralık 1522'de Kanûnî Sultan Süleyman'a teslim oldu.",
  tartisma:"Mesih Paşa'nın azlinden sonra Gelibolu sancak beyliğine gönderildiği rivayeti, aynı dönemde Gedik Ahmed Paşa'nın da Gelibolu sancak beyi olarak gösterilmesi yüzünden şüphelidir (TDV Mesih Paşa).",
  kesinlik:"kesin",
  olay:["1480-07-28|Rodos"],
  kaynak:"TDV: rodos (filo, süre, d'Aubusson, 28 Temmuz ve 3 Ağustos, surların yenilenmesi) · TDV: mehmed-ii (şövalyelerle ilişkiler, iki yönlü sefer, 23 Mayıs başlangıcı) · TDV: mesih-pasa (azil) · TDV: mehmed-ii (Otranto)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 26 · 1481 Yenişehir: Bayezid ve Cem ─────────────────────────────────
{ id:"savas-yenisehir-cem-1481", tur:"savas-hikayesi",
  baslik:"Yenişehir Savaşı: II. Bayezid'e karşı Cem Sultan (Haziran 1481)",
  kisa:"Fâtih ölünce iki şehzade tahta koştu; Bursa'da padişahlığını ilan eden Cem ülkeyi paylaşmayı önerdi, Yenişehir'de yenilip on dört yıl sürecek bir sürgüne çıktı.",
  tarih_metin:"22 Haziran 1481 (TDV II. Bayezid maddesi) — TDV Cem Sultan maddesi 'Haziran 1481' der",
  yer:"Yenişehir ovası, Bursa'nın doğusu",
  taraflar:[
    { ad:"II. Bayezid", komutan:"II. Bayezid · son anda yetişen Gedik Ahmed Paşa", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Cem Sultan", komutan:"Cem Sultan (Karaman sancak beyi)", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Fâtih Sultan Mehmed 3 Mayıs 1481'de öldü. Vezîriâzam Karamânî Mehmed Paşa Cem'den yanaydı; İstanbul muhafızı İshak Paşa, Anadolu beylerbeyi Sinan ve yeniçeri ağası Kasım ise Bayezid'i istiyordu. Cem'e giden ulağın yolu kesildi, İstanbul'daki karışıklıkta Karamânî öldürüldü, yeniçeriler Bayezid lehine gösteri yaptı. Tahta çıkan Bayezid kapıkullarına cülus bahşişi dağıttı. Konya'daki Cem ise babasının kendisini seçtiğini ileri sürüp ordu topladı, Bursa'ya girdi; on sekiz gün kadar kalıp adına hutbe okuttu, para bastırdı ve padişahlığını ilan etti. Ardından imparatorluğu paylaşmayı teklif etti; Bayezid saltanatın bölünemeyeceğini söyleyip reddetti ve üzerine yürüdü.",
  akis:"İki ordu Yenişehir'de karşılaştı ve Cem ağır bir yenilgiye uğradı. Hanivaldanus'a göre savaşa son anda yetişen Gedik Ahmed Paşa Bayezid'in kazanmasında büyük katkıda bulundu; ancak Cem'i Ereğli'ye kadar kovaladığı hâlde yakalayamadı ve bu yüzden onun Cem taraftarı olduğu söylentisi çıktı.",
  sonuc:"Cem Konya'da destek bulamayınca Tarsus'a, Memlük sultanının davetiyle Kahire'ye gitti ve oradan hacca gitti. 1482'de Karamanoğlu Kasım'la anlaşıp Konya'yı almaya çalıştı, püskürtüldü; otuz kadar adamıyla Rodos'a sığındı (29 Temmuz 1482). Bayezid, Cem'i gözetim altında tutmaları için şövalyelere her yıl 40.000 duka ödemeyi kabul etti. Cem Fransa'da ve Roma'da tutuldu; 25 Şubat 1495'te büyük ihtimalle zehirlenerek öldü. TDV'ye göre Cem meselesi ve Avrupa'da uyandırdığı umutlar Bayezid'i çok dikkatli ve barışçı bir siyasete itti; ilk sonucu da Otranto'nun elden çıkması oldu. Gedik Ahmed Paşa 18 Kasım 1482'de, Cem'e yakınlığından şüphelenilerek öldürüldü.",
  tartisma:"Fâtih'in Cem'in doğumuna sevinmeyip beşiğini tekmelediği ya da Bayezid'i vasiyet ettiği kayıtlarını TDV gerçeği yansıtmaktan uzak bulur. Savaşın günü yalnız TDV II. Bayezid maddesinde (22 Haziran) verilir.",
  kesinlik:"kesin",
  olay:["1481-06-20|Yenişehir"],
  kaynak:"TDV: bayezid-ii (taht kavgası, paylaşım teklifi, 22 Haziran, Rodos anlaşması) · TDV: cem-sultan (Bursa'daki 18 gün, sürgün) · TDV: gedik-ahmed-pasa (savaşa katılımı ve sonu)",
  ic_not:"Madde günü 1481-06-20; TDV bayezid-ii 22 Haziran der — gün düzeltmesi madde sahibine önerilmeli (yazılmadı).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 27 · 1485-1491 Osmanlı-Memlük savaşı ────────────────────────────────
{ id:"savas-osmanli-memluk-1485", tur:"savas-hikayesi",
  baslik:"Osmanlı-Memlük Savaşı (1485-1491)",
  kisa:"Çukurova ve Dulkadır toprağı üzerindeki nüfuz yarışı altı yıllık bir savaşa döndü; iki sadrazam adayı esir düştü, kimse kesin zafer kazanamadı.",
  tarih_metin:"1485 (başlangıç) · 1486 (Hersekzâde'nin esareti) · 1488 (Ayas ve Adana) · 896 / 1491 (barış)",
  yer:"Çukurova (Adana, Tarsus, Gülek), Ayas ve İskenderun kıyıları",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"II. Bayezid · serdarlar Hersekzâde Ahmed Paşa (1486), Hadım Ali Paşa (1488)", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Memlük Sultanlığı", komutan:"Sultan Kayıtbay", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"TDV II. Bayezid maddesine göre bu, Bayezid devrinin en önemli olayıdır. Çukurova'da ve Dulkadıroğulları Beyliği üzerinde üstünlük kurma yarışı ve Memlüklerin Cem Sultan'ı desteklemesi iki devleti karşı karşıya getirdi. Cem yenildikten sonra Memlük sultanının davetiyle Kahire'ye gitmiş, orada büyük ilgi görmüştü.",
  akis:"Savaş 1485'te başladı. Memlük kuvvetleri Osmanlılara bağlı Dulkadıroğlu Alâüddevle'yi yenip Kilikya'daki bazı kaleleri ve Gülek'i aldı. Anadolu beylerbeyi Hersekzâde Ahmed Paşa serdar yapılıp gönderildi (1486); ama emrine verilen Karagöz Paşa ile Hızır Beyzâde kıskançlıkla ona yardım etmeyince yaralanıp esir düştü ve Kahire'de Kayıtbay'ın huzuruna çıkarıldı; bir yıl sonra serbest bırakıldı. 1488'de Vezir Hadım Ali Paşa serdar oldu; kaptan-ı deryâ olan Hersekzâde'nin donanması Ayas'ı aldı, Trablusşam kıyılarına saldırdı, ama İskenderun'a yönelirken şiddetli bir fırtınaya tutulup gemilerinin çoğunu kaybetti. Başta üstün gelen Osmanlı kara ordusu da yenildi ve Adana yeniden Memlüklerin eline geçti.",
  sonuc:"Taraflar kesin bir zafer kazanamadı. Tunus hükümdarı Osman Hafsî'nin aracılığıyla 1491'de barış yapıldı; Adana ve Tarsus kaleleri Haremeyn vakıflarına bağlı oldukları gerekçesiyle Memlüklere bırakıldı. TDV, Mısır'la savaşın Osmanlıların Karaman ve Dulkadıroğulları ile ilişkilerini de olumsuz etkilediğini yazar; Dulkadır ilişkileri barıştan ve Alâüddevle'nin af dilemesinden sonra düzeldi. Memlüklerle hesap 1516-1517'de Yavuz Sultan Selim döneminde kapanacaktı.",
  tartisma:"Hersekzâde'nin sonraki bir seferde Kayseri yakınında ikinci kez esir düştüğü ve 1491 barışıyla serbest kaldığı rivayetini TDV, devrin kaynaklarınca doğrulanmadığı için kuşkulu sayar.",
  kesinlik:"kesin",
  olay:["1485-01-01|Memlük"],
  kaynak:"TDV: bayezid-ii (sebepler, 1491 barışı, Adana ve Tarsus) · TDV: hersekzade-ahmed-pasa (1486 esareti, 1488 deniz harekâtı, Adana'nın kaybı)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 28 · 1516 Koçhisar ───────────────────────────────────────────────────
{ id:"savas-kochisar-1516", tur:"savas-hikayesi",
  baslik:"Koçhisar (Dede Garkın) Savaşı (Mayıs 1516)",
  kisa:"Çaldıran'dan sonra Diyarbekir'i geri almaya gelen Safevî Kara Han, bütün gün süren bir savaşta başını kaybetti; Doğu Anadolu'nun fethi hemen hemen tamamlandı.",
  tarih_metin:"Mayıs 1516",
  yer:"Koçhisar (bugün Kızıltepe) yakını, Dede Garkın sahrası, Koruk mevkii",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Diyarbekir Beylerbeyi Bıyıklı Mehmed Paşa", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Safevî Devleti", komutan:"Kara Han (Ustacalu)", kuvvet:"Şah İsmâil'in gönderdiği ordu 5000 kişi (TDV Bıyıklı Mehmed Paşa)" }
  ],
  oncesi:"23 Ağustos 1514 Çaldıran zaferi bölgenin kaderini değiştirdi. Savaşta ölen Ustacalu'nun yerine kardeşi Kara Han geçti ve karargâhını Mardin'e kurdu. Şah İsmâil onu 5000 kişiyle bölgeye yolladı; Kara Han Diyarbekir'i (Âmid) uzun süre kuşattı, Bıyıklı Mehmed Paşa yetişince Mardin'e çekildi. İdrîs-i Bitlisî'nin aracılığıyla Mardin halkı şehri teslim etti (1515), ama Bıyıklı ile Şâdî Paşa arasındaki anlaşmazlık yüzünden Osmanlı kuvvetleri şehirden çekilince Kara Han Mardin'i geri aldı ve Diyarbekir'i yeniden kuşattı. Yavuz Sultan Selim, Karaman beylerbeyi Hüsrev Paşa'yı Anadolu sipahileriyle bölgeye gönderdi; Kara Han kuşatmayı kaldırıp Mardin'e doğru çekildi.",
  akis:"Bıyıklı Mehmed Paşa Kara Han'ı takibe koyuldu ve Karaköprü mevkiinde ona pusu kurmayı planladı; ama pusudaki Osmanlı birlikleri tuzağa düşürülüp kırıldı. Yanlış bilgi yüzünden Diyarbekir'e dönmüş olan paşa takviyeleri bekledikten sonra yeniden yola çıktı. Koçhisar yakınında Dede Garkın sahrasında bütün gün süren savaşta Kara Han'ın başı kesildi ve ordusu dağıldı.",
  sonuc:"Bıyıklı Mehmed Paşa Mardin kalesine yürüdü, çevredeki kaleleri aldı; Mardin kuşatılıp toplarla dövüldü. Böylece Diyarbekir bölgesinin fethi hemen hemen tamamlandı. Mardin kalesi ise ancak paşa Mercidâbık'tan ve Halep'in fethinden döndükten sonra, Aralık 1516 ya da Ocak 1517'de alınabildi.",
  tartisma:"Mardin kalesinin alınış tarihi ayrışır: TDV Mardin maddesi '1516 sonları (veya Mayıs 1517)', TDV Bıyıklı Mehmed Paşa maddesi 'Aralık 1516 veya Ocak 1517' der. Mardin maddesi Osmanlıların savaşta önce yenildiğini, sonunda kazandığını yazar; Bıyıklı maddesi bu ilk yenilgiyi Karaköprü pususu olarak anlatır.",
  kesinlik:"kesin",
  olay:["1516-05-01|Koçhisar"],
  kaynak:"TDV: biyikli-mehmed-pasa (Kara Han'ın ordusu, Karaköprü, Dede Garkın, Mardin kalesi) · TDV: mardin (Çaldıran sonrası, Koruk mevkii, Mardin'in alınışı)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 29 · 1516 Aden ───────────────────────────────────────────────────────
{ id:"savas-aden-1516", tur:"savas-hikayesi",
  baslik:"Aden kuşatması (2-10 Ağustos 1516)",
  kisa:"Portekiz'i Hint sularından atmak için Kızıldeniz'e gelen filo Yemen'i ele geçirmeye girişti; Aden'in kalesi dayandı ve Selman Reis üç yerinden yaralandı.",
  tarih_metin:"3 Receb 922 · 2 Ağustos 1516 (Aden'e varış) · 11 Receb 922 · 10 Ağustos 1516 (çekiliş)",
  yer:"Aden ve Sîre kalesi, Yemen'in güney kıyısı",
  taraflar:[
    { ad:"Memlük hizmetindeki Kızıldeniz donanması", komutan:"Selman Reis · Hüseyin Bey (Hüseyin Kürdî)", kuvvet:"yirmi iki kadırga ve iki barça" },
    { ad:"Yemen Tâhirî Sultanlığı (Aden kalesi)", komutan:"Aden hâkimi Mürcan el-Âmirî · yardıma gelen Abdülmelik b. Abdülvehhâb", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Portekiz tehdidi karşısında Gucerât sultanı ile Yemen sultanı II. Âmir, Mısır Sultanı Kansu Gavri'den yardım istedi. TDV'ye göre Osmanlı Devleti adına Mısır'a giden Selman Reis, 1511'de Süveyş'te hazırlanan elli kadırgalık donanmanın kaptanı oldu; serdar Hüseyin Bey'di. 1515 yazında filo Hindistan'a gitti, Diu'da Gucerât sultanıyla ittifak yaptı, ama Portekiz'in tahkim ettiği Goa alınamadı. Yemen'e dönen donanma Kemeran adasına bir kale kurdu. Kendilerini çağıran Sultan Âmir erzak yardımı yapmayınca kıyıları yağmaladılar; Hüseyin Bey Zeydîlerin yardımıyla 20 Haziran 1516'da Zebîd'i aldı. Bir ay sonra filo Aden'i fethetmek için denize açıldı.",
  akis:"Donanma 2 Ağustos 1516'da Aden'e ulaştı. Selman Reis karaya çıkıp kale yakınında çadır kurdu; limandan çıkan kalyonlardan Sultan Âmir'e ait olanın mallarına el koydu ve bu gemileri Gucerât'a, Yemen'i fethettiğini bildiren bir mektupla gönderdi. Hüseyin Bey ile Selman Reis Aden'e bağlı Sîre kalesinin altına yerleşip Aden kalesini topa tuttular, ama çok sayıda asker ve cephanesi olan kale Mürcan el-Âmirî'nin şiddetli savunmasıyla teslim olmadı. Kaleden yapılan ilk çıkışta Selman Reis üç yerinden yaralandı. Âmir'in kardeşi Abdülmelik Taiz'den bir orduyla yardıma gelince kuşatma kaldırıldı.",
  sonuc:"Filo 10 Ağustos 1516'da Aden'den ayrıldı; Zeyla, Moha ve Kemeran üzerinden Cidde'ye döndü. Hüseyin Bey, Mekke şerifinin şikâyetiyle görevden alındı ve Mısır'a giderken denize atılarak öldürüldü. Selman Reis ise Osmanlıların Mısır'ı fethinden sonra Yavuz Sultan Selim tarafından çağrıldı ve Nisan 1517'de Cidde'yi bir Portekiz donanmasına karşı başarıyla savundu. Aden ancak 3 Ağustos 1538'de Hadım Süleyman Paşa komutasındaki yetmiş altı gemilik Osmanlı donanmasınca alınacaktı.",
  tartisma:"Okunan TDV maddeleri kuşatmadaki kayıpları vermez. Filonun statüsü: donanma Memlük sultanının emriyle hazırlanmıştı; TDV, Selman Reis'in Mısır'a Osmanlı Devleti adına gittiğini belirtir.",
  kesinlik:"kesin",
  olay:["1516-08-02|Aden"],
  kaynak:"TDV: selman-reis (Süveyş donanması, Hindistan seferi, Zebîd, Aden kuşatması, Cidde savunması) · TDV: aden (1538 fethi)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 30 · 1532 Alman Seferi ve Güns ──────────────────────────────────────
{ id:"savas-alman-seferi-guns-1532", tur:"savas-hikayesi",
  baslik:"Alman Seferi ve Güns (Kőszeg) kuşatması (1532)",
  kisa:"Kanûnî bu kez Viyana'yı değil imparatorun kendisini aradı: Güns önünde V. Karl'ın gelmesini bekledi, gelen olmadı.",
  tarih_metin:"25 Nisan 1532 (İstanbul'dan çıkış) · Ağustos 1532 (Güns) · Eylül 1532 (Gratz'a yöneliş) · 22 Kasım 1532 (İstanbul'a dönüş şenlikleri)",
  yer:"Güns (Kőszeg), Viyana'ya 60 mil uzaklıkta, Batı Macaristan · ardından Gratz (Steiermark) yönü",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Kanûnî Sultan Süleyman · Vezîriâzam İbrâhim Paşa", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Habsburglar (Güns kalesi; Viyana önündeki imparatorluk ordusu)", komutan:"V. Karl · Ferdinand", kuvvet:"kaynakta sayı verilmiyor; TDV imparatorluk ordusunu 'hayli kalabalık' diye niteler" }
  ],
  oncesi:"1529 Viyana kuşatması on yedi gün sonra kaldırılmıştı. Ferdinand Budin üzerindeki baskısını sürdürdü ve 1531'de şehri kuşattı; bu yeni bir yardım seferini zorunlu kıldı. Kanûnî bu kez hedefini doğrudan Habsburg İmparatoru V. Karl olarak belirledi; sefer kaynaklarda 'İspanya kralı kastına' diye anılır. Padişah 25 Nisan 1532'de İstanbul'dan çıktı; Niş'te Ferdinand'ın elçileri, 5 Temmuz'da Fransız elçisi Rinçon ordugâha geldi.",
  akis:"Osmanlı ordusu Macaristan'a girip Ferdinand'ın topraklarında ilerledi, ama imparatorluk ordusundan hiçbir iz görülmedi. Padişah Viyana'ya 60 mil mesafedeki Güns'ü kuşatıp V. Karl'ın üzerine gelmesini bekledi. Hayli kalabalık imparatorluk ordusu Viyana yakınındaki Brigittenau'da duruyordu ve kıpırdamadı. Güns'ü alan Osmanlı ordusu Eylül 1532'de Gratz'a yöneldi, mevsim ilerlediği için oradan geri döndü.",
  sonuc:"İmparatorluk orduları kendi topraklarına giren Osmanlı ordusuna karşı bir karşı harekâta girişemedi. Kanûnî İstanbul'a dönünce beş gün beş gece süren şenlikler yaptırdı (22 Kasım 1532). Ardından Habsburg elçileriyle 1533'te İstanbul'da barış görüşmeleri yapıldı; TDV'ye göre bu görüşmeleri tümüyle İbrâhim Paşa yürüttü ve Osmanlı vezîriâzamı protokolde Ferdinand'a eşit sayıldı.",
  tartisma:"Okunan TDV maddeleri Güns kuşatmasının süresini ve savunmanın ayrıntılarını vermez; kalenin 'alındığını' söyler. Seferin asıl amacı bir kale değil, imparatorla meydan savaşıydı.",
  kesinlik:"kesin",
  olay:["1532-08-05|Güns"],
  kaynak:"TDV: suleyman-i (seferin sebebi ve hedefi, güzergâh, Güns, Gratz, dönüş) · TDV: ibrahim-pasa-makbul (Alman seferi ve 1533 barışı)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 31 · 1537 Korfu ──────────────────────────────────────────────────────
{ id:"savas-korfu-1537", tur:"savas-hikayesi",
  baslik:"Korfu kuşatması (25 Ağustos – 6 Eylül 1537)",
  kisa:"İtalya'nın istilasına hazırlık olarak tasarlanan sefer, Venedik'in 'sağ gözü' Korfu'nun kalesinde tıkandı; Kanûnî ani bir kararla geri döndü.",
  tarih_metin:"17 Mayıs 1537 (donanma ve ordu İstanbul'dan çıkar) · 18 Rebîülevvel 944 · 25 Ağustos 1537 (çıkarma) · 30 Rebîülevvel 944 · 6 Eylül 1537 (kuşatma kalkar)",
  yer:"Korfu adası, Epir kıyıları açığı",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Kanûnî Sultan Süleyman · Kaptanıderyâ Barbaros Hayreddin Paşa · serdar Lutfi Paşa · Sadrazam Ayas Paşa", kuvvet:"kuşatmaya katılan ordu 50.000 dolayında, ayrıca elli civarında top" },
    { ad:"Venedik Cumhuriyeti (Korfu kalesi)", komutan:"okunan TDV maddelerinde adı geçmiyor", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"1386'dan beri Venedik'in elindeki Korfu, Adriyatik'in girişini denetliyordu; Kemal Reis onu 'Venedik'in sağ gözü' diye tarif etmişti ve II. Bayezid de bir sefer düşünmüş, mevsim geçince vazgeçmişti. Kanûnî öteden beri İtalya'nın fethini tasarlıyordu; TDV bu seferi onun İtalya'ya yönelik niyetlerinin başlangıcı olarak tasarlandığını, ilk kez denizde Fransız ve Osmanlı askerlerinin ortak harekât yaptığını yazar. Kaynaklarda sefer 'sefer-i Pulya ve gazâ-yı Körfös' diye anılır.",
  akis:"Barbaros'un donanması ve padişahın kara ordusu 17 Mayıs 1537'de İstanbul'dan çıktı ve Avlonya'da buluştu; bir kısım kuvvet Otranto yöresine çıktı. Donanma 25 Ağustos'ta Korfu'ya asker ve top çıkardı. Kanûnî karşı kıyıda karargâh kurdu; Sadrazam Ayas Paşa komutasında ikinci bir çıkarma yapıldı, muhtemelen kıyıya en yakın noktada gemiler birbirine bağlanarak köprü kuruldu. Adanın tamamı alındı, kale kuşatıldı ve surlarda gedikler açıldı, ama sonuç alınamadı. Hava şartları ve TDV'ye göre belki daha önemlisi siyasi sebeplerle kuşatma 6 Eylül'de kaldırıldı; adadan çekilme dokuz gün sürdü.",
  sonuc:"Padişah 15 Eylül'de İstanbul'a doğru yola çıktı. Korfu kalesi yeniden tahkim edildi; 1538'de Preveze'de Osmanlı donanmasının karşısına çıkan Haçlı donanması Korfu'yu üs olarak kullandı. Venedik'le savaş antlaşmayla bitti ve Barbaros'un aldığı Ege adalarının durumu belirlendi. Adanın nüfusu kuşatmadan önce 40.000 civarındayken 1588'de 19.000'e düşmüştü.",
  tartisma:"Kuşatmanın kaldırılış sebebi kaynaklarda kesin değildir: TDV Korfu maddesi hava şartlarını ve 'belki daha önemlisi' siyasi sebepleri, Kanûnî maddesi padişahın ani bir kararını anar.",
  kesinlik:"kesin",
  olay:["1537-08-25|Korfu"],
  kaynak:"TDV: korfu (seferin adı, tarihler, ordu ve top sayısı, kuşatmanın kalkışı, nüfus) · TDV: suleyman-i (İtalya tasarısı, Fransız ortaklığı, dönüş)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 32 · 1559 Konya ──────────────────────────────────────────────────────
{ id:"savas-konya-sehzadeler-1559", tur:"savas-hikayesi",
  baslik:"Konya Savaşı: Şehzade Bayezid'e karşı Şehzade Selim (30-31 Mayıs 1559)",
  kisa:"Kanûnî'nin iki oğlu tahtı babaları sağken paylaşamadı; Konya önündeki iki günlük savaş, Bayezid'i İran'a ve sonunda bir kemente götürdü.",
  tarih_metin:"29 Mayıs 1559 (Bayezid Konya önünde) · 30-31 Mayıs 1559 (iki gün süren savaş)",
  yer:"Konya önleri",
  taraflar:[
    { ad:"Şehzade Selim ve padişahın gönderdiği kuvvetler", komutan:"Şehzade Selim · Vezir Sokullu Mehmed Paşa ve bazı beylerbeyileri", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Şehzade Bayezid", komutan:"Şehzade Bayezid", kuvvet:"30.000'i bulan, eğitimi yetersiz 'yevmlü' askerler" }
  ],
  oncesi:"Şehzade Mustafa'nın 1553'te öldürülmesinden sonra Bayezid kendini tahtın tabii vârisi saymaya başladı ve ağabeyi Selim'le aralarında saltanat mücadelesi doğdu. TDV bu kavgayı yalnız hırsların değil, Mustafa'nın ölümünden sonra yaygınlaşan hoşnutsuzluğun ve kardeş katli kanununa dair korkunun da sonucu sayar. Annesi Hürrem Sultan 15 Nisan 1558'de ölünce Bayezid taraftar toplamaya başladı. Kanûnî oğullarını birbirinden uzaklaştırmak için Selim'i Konya'ya, Bayezid'i Amasya'ya nakletti; Bayezid bunu hakaret saydı. Asker toplamayı sürdürdü; padişah Selim'in de asker toplamasını istedi ve ona beylerbeyileriyle Sokullu'yu yolladı. Şeyhülislâm Ebüssuûd Efendi ve başka âlimler Bayezid'i 'bâgī' (isyancı) ilan eden fetvalar verdi.",
  akis:"Amasya'dan Ankara'ya gelen Bayezid 30.000'i bulan kuvvetleriyle yola çıkıp 29 Mayıs 1559'da Konya önlerine vardı. Adamları Selim'i destekleyen düzenli kuvvetlere göre eğitimce çok yetersizdi. 30 Mayıs'ta başlayan ve iki gün süren savaş Bayezid'in yenilgisiyle bitti.",
  sonuc:"Bayezid hızla Amasya'ya döndü ve affını dilemek için müftüyü babasına gönderdi; Kanûnî affetmedi, yakalanmasını emretti. Bayezid dört oğluyla 7 Temmuz'da Amasya'dan çıktı, doğu sınırında kendisine yetişen beyleri yendi ve Ağustos 1559 ortasında İran'a sığındı. Şah Tahmasb onu önce törenle karşıladı, sonra hapsetti. Uzun pazarlıklardan sonra Bayezid 23 Temmuz 1562'de Kazvin'de Selim'in adamına teslim edilip boğduruldu, dört oğlu da öldürüldü. Taht yolu Selim'e (II. Selim) açıldı.",
  tartisma:"Okunan TDV maddesi Selim tarafının kuvvet sayısını vermez. Şah'a teslim karşılığında vaat edilen 1.200.000 altın yerine 500.000 filori ve hediyeler gönderildiği belgeyle bilinir.",
  kesinlik:"kesin",
  olay:["1559-05-30|Konya"],
  kaynak:"TDV: bayezid-sehzade (taht kavgasının sebepleri, nakiller, fetvalar, Konya savaşı, İran'a iltica ve sonu)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 33 · 1565 Malta ──────────────────────────────────────────────────────
{ id:"savas-malta-1565", tur:"savas-hikayesi",
  baslik:"Malta Kuşatması (18 Mayıs – 12 Eylül 1565)",
  kisa:"Akdeniz'in ortasındaki şövalye adası dört ay dayandı; Turgut Reis Saint Elmo önünde öldü, Osmanlı'nın imajı Batı'da derin bir yara aldı.",
  tarih_metin:"29 Mart 1565 (donanma İstanbul'dan çıkar) · 19 Mayıs (Malta önüne varış) · 21 Mayıs (karaya çıkış) · 23 Haziran (Saint Elmo alınır) · 8 Eylül (kuşatma kalkar) · 12 Eylül 1565 (adadan ayrılış)",
  yer:"Malta adası — Saint Elmo (Santarma), Birgu, Senglea ve Mersamuscet limanı",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Serdar Vezir Mustafa Paşa · Kaptanıderyâ Piyâle Paşa · Trablusgarp Beylerbeyi Turgut Paşa · Cezayir Beylerbeyi Hasan Paşa", kuvvet:"240 gemilik donanma (TDV Piyâle Paşa); ordu sayısı verilmiyor" },
    { ad:"Saint Jean (Malta) Şövalyeleri", komutan:"Büyük Üstat La Valette · Eylül'de Sicilya Valisi Don Garcia'nın yardım kuvveti", kuvvet:"yardım kuvveti 8000 asker; garnizon sayısı verilmiyor" }
  ],
  oncesi:"Kanûnî'nin 1522'de Rodos'tan çıkardığı Saint Jean şövalyelerini V. Carlos 1530'da Malta'ya yerleştirmişti. Şövalyeler Birgu'yu merkez yapıp Saint Angelo'yu tahkim etmiş, Senglea'da Saint Michel'i ve 1552'de Saint Elmo kalesini kurdular. Turgut Reis'in 1540'tan itibaren akınları, 1551'de Gozo'nun yağmalanması ve 1560 Cerbe seferi adayla ilk karşılaşmalardı. TDV'ye göre Osmanlılar, şövalyelerin Akdeniz'de Müslüman hacılara, tüccara ve yolculara verdiği zarar yüzünden adanın alınmasını kararlaştırdı; bu gerekçe 23 Mart 1565 tarihli serdarlık beratında da yazılıdır.",
  akis:"Mustafa Paşa'nın donanması 29 Mart'ta İstanbul'dan çıktı, 19 Mayıs'ta Malta önüne geldi ve 21 Mayıs'ta Mersaşolok'ta karaya çıktı. La Valette savaşsız teslim teklifini reddetti; ordu Saint Elmo yakınında siper kazdı. 2 Haziran'da gelen Turgut Paşa kuşatmanın Saint Elmo'dan başlatılmasını doğru bulmadı ama harekâta katıldı; 18 Haziran'da başından bir gülle parçasıyla ağır yaralandı ve Saint Elmo'nun alındığı 23 Haziran'da öldü. Saint Elmo'nun zaptıyla donanma adanın en korunaklı limanı Mersamuscet'e girdi; kuşatma Birgu ve Senglea'ya çevrildi. 12 Temmuz'da Hasan Paşa yirmi beş kadırgayla katıldı. 7 ve 20 Ağustos'taki iki şiddetli hücum da sonuç vermedi. 6 Eylül'de Sicilya Valisi Don Garcia 8000 askerle adanın batısına çıktı.",
  sonuc:"Mevsim dönüyor, şolok rüzgârları başlıyordu: Mustafa Paşa 8 Eylül'de kuşatmayı kaldırdı; yardım kuvvetiyle son bir çatışmadan sonra ordu 12 Eylül 1565'te adayı terk etti. TDV'ye göre seferde yaklaşık 20.000 asker öldü; resmî kayıtlarda denizde boğulan ve kuşatmada ölen tımar sahibi sayısı 540'tır. Mustafa Paşa vezirlikten azledildi. Sonuç İstanbul'da üzüntüyle, Avrupa'da sevinçle karşılandı; TDV Kanûnî maddesi bu bozgunun Osmanlı imajını Batı'da çok sarstığını ve padişahın son seferine çıkma kararında etkili olduğunu yazar. Yerle bir olan Birgu'nun yerine şövalyeler 1566'da bugünkü Valletta'yı kurdu.",
  tartisma:"Okunan TDV maddeleri Osmanlı ordusunun ve şövalye garnizonunun sayısını vermez; ölü sayısı (yaklaşık 20.000) TDV Malta maddesinin kaynaklarına dayanır. Atlas maddesi 18 Mayıs'ı başlangıç alır; TDV'ye göre donanma 19 Mayıs'ta adaya varmış, 21 Mayıs'ta karaya çıkmıştır.",
  kesinlik:"kesin",
  olay:["1565-05-18|Malta"],
  kaynak:"TDV: malta (Osmanlı dönemi bölümü — sebepler, sefer günlüğü, Saint Elmo, yardım kuvveti, kayıplar) · TDV: turgut-reis (katılımı ve ölümü) · TDV: piyale-pasa (240 gemi) · TDV: suleyman-i (bozgunun etkisi)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 34 · 1583 Meşale Savaşı ──────────────────────────────────────────────
{ id:"savas-mesale-1583", tur:"savas-hikayesi",
  baslik:"Meşale Savaşı (7-11 Mayıs 1583)",
  kisa:"Dört gün dört gece süren, geceleri meşale ışığında sürdüğü anlatılan savaşla Özdemiroğlu Osman Paşa Safevîleri Şirvan'dan söküp attı.",
  tarih_metin:"14-18 Rebîülâhir 991 · 7-11 Mayıs 1583",
  yer:"Şirvan, Derbend-Şamahı arası (Kafkasya)",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Şirvan ve Dağıstan Beylerbeyi Özdemiroğlu Osman Paşa", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Safevî Devleti", komutan:"okunan TDV maddelerinde adı geçmiyor", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"1578'de başlayan Osmanlı-Safevî savaşında Çıldır ve Koyungeçidi zaferleri Gürcistan, Dağıstan ve Şirvan yolunu açmış; Lala Mustafa Paşa, Osman Paşa'yı vezir yapıp Şirvan ve Dağıstan beylerbeyi olarak cephede bırakmıştı. Osman Paşa Kırım hanının yardımıyla Safevîleri Şamahı ve Şirvan'dan çıkardı, Hazar'da donanma kurulması için Kulzüm kaptanlığını ihdas ettirdi; ama Selman Han'ın ordusu Şirvan'a yeniden girdi. Lala Mustafa Paşa'nın yerine 1580'de Koca Sinan Paşa'nın gelmesi Osman Paşa'yı zor durumda bıraktı. Onun İstanbul'a yazdığı raporlar üzerine Silistre sancak beyi Yâkub Bey komutasında bir Rumeli ordusu Kırım üzerinden Derbend'e geldi; ama cepheyi tanımayan Yâkub Bey kendi başına yaptığı bir akında öldü (Nisan 1583).",
  akis:"Bunun üzerine Osman Paşa Safevî ordusunun üzerine yürüdü. 'Meşale savaşı' adıyla anılan ve dört gün dört gece sürdüğü rivayet edilen savaşta, TDV'nin deyişiyle en büyük zaferlerinden birini kazandı.",
  sonuc:"İleri harekâtla daha önce boşalttığı Şamahı'ya girdi ve kalesini onarttı. TDV'ye göre böylece Safevîlerin Kafkasya'daki varlığına onun şahsî gayretleriyle son verilmiş oldu; dönemin tarihçileri Kafkasya'nın fethinde Osman Paşa'nın belirleyici rolü konusunda birleşir. Osman Paşa Ekim 1583'te III. Murad'ın emriyle, Kırım hanını değiştirmek üzere Kefe'ye gitmek için Kafkasya'dan ayrıldı. TDV Şirvan maddesine göre 1590 antlaşması bu durumu kesinleştirdi ve Safevîler bölgedeki Osmanlı hâkimiyetini tanıdı.",
  tartisma:"Savaşın adı ve 'dört gün dört gece' süresi rivayete dayanır; okunan TDV maddeleri kuvvetleri ve Safevî komutanını vermez.",
  kesinlik:"kesin",
  olay:["1583-05-09|Meşale"],
  kaynak:"TDV: osman-pasa-ozdemiroglu (Çıldır ve Koyungeçidi, Yâkub Bey, Meşale savaşı, Şamahı) · TDV: sirvan (Şirvan'da Osmanlı idaresi, 1590 antlaşması)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 35 · 1594-1595 Cesur Mihai ve Eflak seferi ──────────────────────────
{ id:"savas-eflak-mihai-1594-1595", tur:"savas-hikayesi",
  baslik:"Cesur Mihai'nin isyanı ve Koca Sinan Paşa'nın Eflak seferi (1594-1595)",
  kisa:"Eflak voyvodası vergiyi reddedip Tuna kalelerini yaktı; üstüne yürüyen sadrazam Kalugeran'da baskına uğradı ve sefer başarısızlıkla bitti.",
  tarih_metin:"1594 sonu (isyan) · Mart 1595 (İbrâil) · 1595 ilkbaharı (Silistre) · 23 Ağustos 1595 (Kalugeran) · Ekim 1595 (Yergöğü baskını)",
  yer:"Eflak ve Tuna boyu — Bükreş, İbrâil, Silistre, Kalugeran, Yergöğü",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Vezîriâzam Koca Sinan Paşa", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Eflak Voyvodalığı (Erdel desteğiyle)", komutan:"Voyvoda Mihai Viteazul (Cesur Mihai) · Erdel Prensi Zsigmond Báthory", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"1593'ten beri Avusturya ile 'Uzun Savaş' sürüyordu. 1594'te Papa VIII. Clément'in himayesinde Osmanlılara karşı bir ittifak kuruldu ve Boğdan da buna bağlandı. 1593'te voyvoda olan Mihai, TDV'ye göre vergi yüzünden isyan etti. 1594 yılının sonunda Bükreş ve Yaş'ta prenslere alacaklı olan Türkler ve Rumlar öldürüldü.",
  akis:"Mihai'nin ordusu Tuna'yı geçti: İbrâil'i Mart 1595'te aldı; 1595 ilkbaharında Silistre'yi yağmalayıp yaktı, kalesini kullanılamaz hâle getirdi. İstanbul'da III. Murad Ocak 1595'te ölmüş, Sinan Paşa azledilip Temmuz'da yeniden sadrazam olmuştu. Sinan Paşa Eflak üzerine yürüdü; Mihai Kalugeran'da Osmanlı ordusuna baskın yapıp geri çekildi, ardından Erdel Prensi Báthory'nin yardımıyla Eflak'ı yeniden ele geçirdi. Ekim 1595'te Eflak'tan dönen orduyu takip eden akıncılar Yergöğü'nde Mihai'nin baskınına uğradı.",
  sonuc:"Sefer başarısız oldu; aynı aylarda Estergon da elden çıkmıştı (2 Eylül 1595). Bu başarısızlıklar yüzünden Sinan Paşa 19 Kasım 1595'te azledildi. İbrâil 1601'e kadar Mihai'nin elinde kaldı; Silistre 1595 yıkımından sonra uzun süre aynı seviyede kaldı. Osmanlılar Báthory ve Lehistan'la dostluk kurarak Mihai'yi yalnız bıraktı; Mihai 1599'da Erdel'i, 1600'de Boğdan'ı alıp üç ülkeyi kısa bir süre birleştirdi ve Romen tarihinde sembolik bir mevki kazandı. 1601'de eski müttefiki Avusturya generali Basta'ya yenilip öldürüldü.",
  tartisma:"Okunan TDV maddeleri Kalugeran baskınının ayrıntısını ve kayıpları vermez; baskından sonra Mihai'nin geri çekildiğini söyler. 1594 sonundaki öldürmeler TDV Boğdan maddesinde ittifakın uygulaması olarak anlatılır.",
  kesinlik:"kesin",
  olay:["1594-11-01|Bükreş","1595-01-01|Mihail","1595-08-23|Kalûgerân"],
  kaynak:"TDV: eflak (Mihai'nin isyanı, Kalugeran, sonrası) · TDV: bogdan (1594 ittifakı, Bükreş ve Yaş) · TDV: ibrail (Mart 1595) · TDV: silistre (1595 yağması) · TDV: yergogu (Ekim 1595) · TDV: koca-sinan-pasa · TDV: mehmed-iii",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 36 · 1684 Budin savunması ────────────────────────────────────────────
{ id:"savas-budin-savunmasi-1684", tur:"savas-hikayesi",
  baslik:"Budin'in birinci savunması (Temmuz – 29 Ekim 1684)",
  kisa:"Viyana bozgunundan bir yıl sonra Avusturya Budin'e yüklendi; az askerle üç aya yakın dayanan valinin lakabı 'Şeytan'dan 'Melek'e çevrildi.",
  tarih_metin:"1684 yazı (kuşatma) · 20 Zilkade 1095 · 29 Ekim 1684 (Avusturyalılar çekilmeye başlar)",
  yer:"Budin (Buda), Tuna kıyısı",
  taraflar:[
    { ad:"Osmanlı Devleti (Budin garnizonu)", komutan:"Budin Valisi (Şeytan, sonra Melek) İbrâhim Paşa", kuvvet:"TDV 'az sayıda asker ve mühimmat' der; sayı yok" },
    { ad:"Habsburg (Avusturya) ordusu", komutan:"okunan TDV maddelerinde adı geçmiyor", kuvvet:"TDV 'çok kalabalık' der; sayı yok" }
  ],
  oncesi:"1683 Viyana bozgunundan sonra Merzifonlu Kara Mustafa Paşa 25 Aralık 1683'te idam edildi; yerine geçen Kara İbrâhim Paşa savaşı yönetecek çapta değildi, cepheye Bekrî Mustafa Paşa'yı yollayıp kendisi Belgrad'da kaldı. Vaç yenilgisinden sonra Peşte, Budin ve Tımışvar dışında Macaristan elden çıktı. Daha önce Çehrin kuşatmasını kaldırdığı için hapsedilen İbrâhim Paşa, Budin muhafızlığına, sonra eyalet valiliğine getirilmişti ve şehri kısa sürede tahkim etti.",
  akis:"Kalabalık Avusturya orduları Budin'i aylarca kuşattı. İbrâhim Paşa az asker ve mühimmatla direndi; zaman zaman yaptırdığı çıkışlarla Avusturya ordugâhından barut ve malzeme alarak kaleyi üç aya yakın savundu. Teslim çağrısı getiren elçiye kalede beş yıl yetecek yiyecek ve 100.000 asker bulunduğunu söyleyerek düşmanın moralini bozmaya çalıştı. Birkaç hücum daha yapan Avusturyalılar sonuç alamayıp büyük kayıplar verdi.",
  sonuc:"Son çıkış hareketinde yağan yağmurun da etkisiyle Avusturyalılar 29 Ekim 1684'ten itibaren kuşatmayı kaldırıp çekildi; 40.000 kadar Kırım askerinin gelmekte olduğu haberinin de bunda büyük rolü oldu. IV. Mehmed İbrâhim Paşa'yı ve komutanlarını ödüllendirdi, 'Şeytan' lakabını 'Melek'e çevirdi. Şöhreti öyle arttı ki ordu onun sadrazam olmasını istedi; kıskanan Kara İbrâhim Paşa ona karşı entrikalar düzenledi. Budin'in kurtuluşu kısa sürdü: 2 Eylül 1686'daki ikinci kuşatmada şehir düştü.",
  tartisma:"Okunan TDV maddeleri kuşatmanın başlangıç gününü, iki tarafın kuvvetlerini ve Avusturya komutanını vermez; atlas maddesinin 14 Temmuz başlangıcı okunan gövdelerde geçmiyor.",
  kesinlik:"kesin",
  olay:["1684-07-14|Budin"],
  kaynak:"TDV: ibrahim-pasa-melek (Budin savunması, 29 Ekim 1684, Kırım haberi, lakap) · TDV: mehmed-iv (Vaç sonrası, 1686) · TDV: ibrahim-pasa-kara (Kara Mustafa'nın idamı, kıskançlık)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 37 · 1688 Eğriboz ────────────────────────────────────────────────────
{ id:"savas-egriboz-1688", tur:"savas-hikayesi",
  baslik:"Venedik'in Eğriboz kuşatması ve püskürtülmesi (1688)",
  kisa:"Mora'yı ve Atina'yı alan Venedik sırayı Eğriboz'a getirdi; aceleyle kurulan toprak surlar ve Karababa tabyası üç ay dayandı.",
  tarih_metin:"1688 yazı-sonbaharı — kuşatma üç aydan fazla sürdü; atlas maddesi püskürtülüşü 20 Ekim 1688'e koyar",
  yer:"Eğriboz (Khalkis/Chalkida), Eğriboz adası ile anakara arasındaki boğaz",
  taraflar:[
    { ad:"Osmanlı Devleti (Eğriboz garnizonu)", komutan:"okunan TDV maddesinde adı geçmiyor", kuvvet:"6000 asker · Karababa tabyasında kırk top" },
    { ad:"Venedik Cumhuriyeti", komutan:"okunan TDV maddesinde adı geçmiyor", kuvvet:"15.000 kişilik ordu" }
  ],
  oncesi:"Eğriboz 1470'te Fâtih'in uzun bir kuşatma ve sokak çarpışmalarından sonra Venedik'ten aldığı bir şehirdi. Kutsal İttifak savaşlarında Venedik Mora'yı ele geçirdi ve Atina'yı kuşattı. Mora'nın kaybından sonra, 1687-1688 kışında Eğriboz'da şehrin üçüncü büyük tahkimatı yapıldı: varoşun çevresine kısa sürede toprak ve ağaçtan duvarlar çekildi, şehrin karşısında anakaradaki Karababa tepesine iki çokgen tabyalı bir istihkâm kurulup kırk top ve güçlü bir muhafız birliği yerleştirildi. Bütün bunlar Venedik ordusu gelmeden kısa süre önce bitti.",
  akis:"15.000 kişilik Venedik ordusu şehri kuşattı; Osmanlıların savunmada 6000 askeri vardı. Kuşatma üç aydan fazla sürdü. Okunan TDV maddesi hücumların ayrıntısını vermez.",
  sonuc:"Venedikliler ağır kayıplar vererek çekildi. Kuşatmadan sonra surların önemli bir kısmı yeniden yapıldı.",
  tartisma:"Okunan TDV maddesi kuşatmanın başlangıç ve bitiş günlerini, iki tarafın komutanlarını vermez.",
  kesinlik:"kesin",
  olay:["1688-10-20|Eğriboz"],
  kaynak:"TDV: egriboz (1470 fethi, 1687-1688 tahkimatı, Karababa, kuvvetler, kuşatmanın sonucu)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 38 · 1695-1696 II. Mustafa'nın seferleri: Lugoş ve Ulaş ─────────────
{ id:"savas-lugos-ulas-1695-1696", tur:"savas-hikayesi",
  baslik:"II. Mustafa'nın Macaristan seferleri: Lugoş (1695) ve Ulaş (1696)",
  kisa:"Kanûnî'yi örnek alan genç padişah iki yaz üst üste orduyu bizzat yönetip Avusturya ordularını yendi; ama savaşın gidişi değişmedi.",
  tarih_metin:"30 Haziran 1695 (birinci sefer başlar) · Eylül 1695 (Lugoş yakınındaki savaş, gün kaynakta yok) · 28 Muharrem 1108 · 27 Ağustos 1696 (Ulaş)",
  yer:"Banat — Lippa, Lugoş, Temeş suyu kıyısındaki Buldur ormanı · Bega suyu kıyısında Ulaş (Olaşin), Tımışvar yakını",
  taraflar:[
    { ad:"Osmanlı Devleti (Kırım kuvvetleriyle)", komutan:"II. Mustafa · Sadrazam Elmas Mehmed Paşa", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Avusturya (Habsburg) orduları", komutan:"General Veterani (1695) · Saksonya Kralı Friedrich August, General Heisler, Caprara (1696)", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"1683'ten beri süren savaşlarda Macaristan'ın büyük kısmı kaybedilmişti. 6 Şubat 1695'te tahta çıkan II. Mustafa, Kanûnî'yi örnek alıp Avrupa'da başarı kazanmak istiyordu; tahta çıkışından beş ay sonra, 30 Haziran 1695'te zırh giyip birinci Avusturya seferine çıktı. Belgrad ve Tımışvar'daki savaş meclisinde Lippa, Lugoş, Yanova ve Şebeş kaleleriyle çevresindeki palankaların alınmasına karar verildi.",
  akis:"1695: Önce Lippa alındı, çok sayıda savaş malzemesi ve esir ele geçirildi; korunması zor olduğu için kale yıktırıldı. Temeş suyu kenarında Buldur denen ormanlık ve bataklık bir alanda General Veterani'nin ordusuyla savaşıldı; bizzat katılan padişah hatt-ı şerifleriyle askeri coşturdu, Kırım kuvvetlerinin desteğiyle Osmanlılar kazandı. Veterani savaşta öldü; Osmanlı tarafında Diyarbekir ve Rumeli beylerbeyileri şehit düştü. Zaferin ardından Lugoş alındı. 1696: Padişah Nisan'da ikinci seferine çıktı. Saksonya Kralı ile General Heisler'in Tımışvar'ı kuşattığı öğrenilince sefer oraya yöneldi; Avusturyalılar kuşatmayı kaldırdı ama 27 Ağustos 1696'da Bega suyu kenarındaki Ulaş'ta yenilgiden kurtulamadı. Savaşta padişahın da bulunduğu hırka-i şerif arabasının dibine bir top mermisi düştü.",
  sonuc:"Ulaş'ta Heisler ve Caprara gibi komutanlar da öldü; Osmanlı ordusu Tımışvar'a girip kaleyi güçlendirdi ve mühimmat yığdı. Ama aynı yaz Ruslar Azak'ı aldı (6 Ağustos 1696). Bir yıl sonra, 11 Eylül 1697'de Zenta'da Tisa'yı geçerken baskına uğrayan ordu ağır bir bozguna uğradı; savaş 1699 Karlofça Antlaşması'yla bitti ve Osmanlı Tımışvar dışında bütün Macaristan'ı kaybetti.",
  tartisma:"Okunan TDV maddesi 1695 savaşının gününü vermez; atlas maddesi onu 22 Eylül 1695'e koyar. TDV Lippa'nın 1695'te alınıp yıktırıldığını yazar; Lippa'yı 1596'da bırakılan bir kuşatmayla karıştırmamak gerekir.",
  kesinlik:"kesin",
  olay:["1695-09-22|Lugoş","1696-08-27|Ulaş"],
  kaynak:"TDV: mustafa-ii (iki seferin hazırlığı, Lippa, Buldur/Lugoş savaşı, Ulaş, Azak, Zenta, Karlofça)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ════════════════════════════════════════════════════════════════════════════
// DALGA 5 / 3. parti — KUTU-G1-1014 · 1281-1699 dilimi, Osmanlı dışı cepheler.
// Okunan TDV gövdeleri: halil-b-kalavun · memlukler · akka · bizans · gelibolu ·
// timur · muzafferiler · ahmed-celayir · celayirliler · bagdat · izmir · isa-celebi ·
// mehmed-i · karakoyunlular · dulkadirogullari · seybani-han · sah-ismail · safeviler.
// ════════════════════════════════════════════════════════════════════════════

// ── 39 · 1291 Akkâ ───────────────────────────────────────────────────────
{ id:"savas-akka-1291", tur:"savas-hikayesi",
  baslik:"Akkâ'nın fethi ve Haçlıların Suriye kıyısından çekilişi (5 Nisan – 28 Mayıs 1291)",
  kisa:"Babası ölüm döşeğinde yarım bıraktığı seferi oğluna emanet etti; Akkâ'nın düşüşüyle iki yüz yıllık Haçlı varlığı bir yaz içinde kıyıdan silindi.",
  tarih_metin:"6 Mart 1291 (Memlük ordusu Kahire'den çıkar) · 5 Nisan (Akkâ önüne varış) · 17 Cemâziyelevvel 690 · 18 Mayıs 1291 (şehir alınır) · 28 Mayıs (Templier binası düşer)",
  yer:"Akkâ (Acre), Hayfa koyunun kuzeyi — ardından Sûr, Sayda, Tartûs, Beyrut, Hayfa ve Cübeyl",
  taraflar:[
    { ad:"Memlük Sultanlığı", komutan:"Sultan el-Melikü'l-Eşref Halîl b. Kalavun", kuvvet:"kaynakta sayı verilmiyor; TDV 'her bakımdan üstün' der" },
    { ad:"Akkâ'daki Haçlılar: Templier ve Hospitalier şövalyeleri, Kıbrıs kuvvetleri", komutan:"Kıbrıs Kralı Henry (4 Mayıs'tan itibaren başkomutan)", kuvvet:"Kral Henry'nin kırk gemilik donanması; asker sayısı verilmiyor" }
  ],
  oncesi:"Akkâ 1104'ten beri Haçlıların elindeydi; Selâhaddîn 1187'de almış, III. Haçlı Seferi 1191'de geri almıştı. Şehir uzun süre Kudüs Haçlı Krallığı'nın merkezi oldu, 1229'dan sonra özellikle Saint Jean şövalyelerinin karargâhıydı. Memlük Sultanı Kalavun, İlhanlılarla iş birliği yapan bölgedeki Haçlı varlığına son vermek istiyordu, ama Akkâ seferine çıkarken hastalanıp öldü (Kasım 1290). Ölüm döşeğinde oğlu Halîl'e seferi tamamlayacağına söz verdirdi. Halîl kuşatma malzemesi ve orduyu hazırladı; Akkâ'dan gelen ve Philippe Mainboeuf'un başkanlık ettiği elçileri kabul etmeyip zindana attırdı.",
  akis:"Memlük ordusu 6 Mart 1291'de Kahire'den çıktı ve 5 Nisan'da Akkâ önüne vardı; ünlü tarihçi Ebü'l-Fidâ Hama birlikleri arasındaydı. Templier ve Hospitalier şövalyeleri şehirde toplandı, Kıbrıs Kralı Henry kardeşi Amaury ile kuvvet gönderdi. Kuşatmanın başında gemiler dolusu yaşlı ve çocuk Kıbrıs'a kaçırıldı. Henry 4 Mayıs'ta kırk gemiyle gelip başkomutanlığı üstlendi, ama getirdiği kuvvet sonucu değiştirecek düzeyde değildi. 18 Mayıs akşamı Templier tarikat binası dışında bütün şehir Müslümanların eline geçti; 28 Mayıs'ta orası da alındı.",
  sonuc:"Sultan, Haçlıların Suriye'ye yeni bir saldırıda üs olarak kullanmaması için şehri yıktırdı. Memlük kuvvetleri ardından Sûr, Sayda, Tartûs, Beyrut, Aslîs, Hayfa ve Cübeyl'i aldı ve Suriye kıyılarını Haçlılardan temizledi. TDV Memlükler maddesine göre Akkâ'nın alınmasıyla bölgede iki yüz yıl süren Haçlı varlığı sona erdi. Fetih İslâm ve Hıristiyan dünyasında büyük yankı uyandırdı. Akkâ ancak XVIII. yüzyılda yeniden bölgenin merkezi olacaktı.",
  tartisma:"Okunan TDV maddeleri iki tarafın asker sayısını vermez; kuşatmanın hücum safhaları anlatılmaz.",
  kesinlik:"kesin",
  olay:["1291-05-18|Akkâ"],
  kaynak:"TDV: halil-b-kalavun (sefer hazırlığı, tarihler, Kral Henry, 18 ve 28 Mayıs, kıyı şehirleri) · TDV: memlukler (Kalavun'un ölümü, iki yüz yıllık Haçlı varlığı) · TDV: akka (şehrin geçmişi)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 40 · 1303-1305 Katalan Bölüğü ────────────────────────────────────────
{ id:"savas-katalan-bolugu-1303-1305", tur:"savas-hikayesi",
  baslik:"Katalan Bölüğü'nün Anadolu seferi (1303-1305)",
  kisa:"Bizans Türk beyliklerini durdurmak için paralı asker kiraladı; Alaşehir kurtuldu, ama kiralık ordu kısa sürede efendisini yağmalamaya başladı.",
  tarih_metin:"1303 (Bizans hizmetine giriş) · 1304 (Alaşehir) · 1305 (Roger de Flor öldürülür) · 1311 (Atina'da Katalan devleti)",
  yer:"Batı Anadolu (Alaşehir) · Gelibolu ve Trakya",
  taraflar:[
    { ad:"Katalan Bölüğü (Bizans'ın paralı askeri)", komutan:"Roger de Flor", kuvvet:"6500 kişi" },
    { ad:"Batı Anadolu Türk beylikleri", komutan:"Germiyanoğulları (Alaşehir kuşatması)", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Batı Anadolu'da kurulan Türk beylikleri topraklarını Bizans aleyhine genişletiyor, üzerlerine gönderilen Bizans ordularını yeniyordu. 1302 Koyunhisar yenilgisinden sonra Osman'ın akıncıları İstanbul Boğazı'na kadar görünmeye başlamıştı. Bu sıkışık anda Roger de Flor yönetimindeki 6500 kişilik Katalan birliği ücretli asker olarak Türklere karşı savaşmak üzere Bizans'ın yardımına geldi (1303).",
  akis:"Katalanlar 1304'te Germiyanoğullarının kuşattığı Alaşehir'i kurtardı. Ama kısa sürede girdikleri her yeri yağmalayıp tahrip etmeye başladılar. Anadolu'daki harekâttan sonra Gelibolu'ya yerleştiler.",
  sonuc:"Bizans onlardan kurtulmak için birlikleri Trakya'ya geçirdi ve Roger de Flor'u öldürttü (1305). Katalanlar komutanlarının öcünü almak için Trakya'yı yağmaladı; bu yıllarda Ece Halil idaresindeki 500 Karesili Türkmen de onlarla birlikte hareket edip kılavuzluk yaptı. Sonunda Yunanistan'a çekilip orada bir devlet kurdular (1311-1379). Kiralık ordunun Anadolu'daki başarısı geçici kaldı.",
  tartisma:"Okunan TDV maddeleri seferin Osmanlı Beyliği ile doğrudan bir çarpışmasını anlatmaz; muhatap Germiyanoğullarıdır.",
  kesinlik:"kesin",
  olay:["1305-06-01|Katalan"],
  kaynak:"TDV: bizans (6500 kişi, 1303, Alaşehir 1304, Roger de Flor'un öldürülmesi 1305, Atina devleti) · TDV: gelibolu (Gelibolu'ya yerleşme, Karesili Türkmenler) · TDV: osman-i (1304'te İstanbul Boğazı'na kadar akınlar)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 41 · 1386-1388 Timur'un 'üç yıllık seferi' ve İran ──────────────────
{ id:"savas-timur-iran-1386-1388", tur:"savas-hikayesi",
  baslik:"Timur'un 'üç yıllık seferi' ve İran'ın boyun eğişi (1386-1388)",
  kisa:"İlhanlılardan kalan parça parça İran'ı Timur tek tek topladı; İsfahan'da memurlarının öldürülmesinin bedelini şehir korkunç bir katliamla ödedi.",
  tarih_metin:"788 (1386) – 1388 ('üç yıllık sefer') · 1393 (Muzafferîlere son)",
  yer:"Mâzenderan, Luristan, Azerbaycan (Tebriz, Karabağ), Irâk-ı Acem (İsfahan), Fars (Şîraz)",
  taraflar:[
    { ad:"Timur", komutan:"Timur · oğlu Mîrân Şah", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"İran'ın yerel hânedanları: Celâyirliler, Muzafferîler", komutan:"Celâyirli Sultan Ahmed · Muzafferî Zeynelâbidîn ve akrabaları", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Timur iktidarı ele geçirdiğinde İran parçalanmıştı: Horasan'da Kertler ve Serbedârîler, Esterâbâd yöresinde Toga Timurlular, Fars ve Kirman'da merkezi Şîraz olan Muzafferîler, Bağdat merkezli Celâyirliler hüküm sürüyordu. Timur 1380'lerin başında Kertlerin, Toga Timurluların ve Serbedârîlerin varlığına son verdi; Horasan seferlerinde İran'ın durumunu yakından gördü. Muzafferî Şah Şücâ' ona itaat etmişti; 1385'te Kirman'daki İmâdüddin Ahmed onun elçisini saygıyla karşıladı.",
  akis:"Timur 1386'da İran'a yürüdü. 'Üç yıllık sefer' denen bu harekâtta Mâzenderan, Luristan ve Gürcistan üzerinden Azerbaycan'a gidip Karabağ'a ulaştı; Tebriz bir yıl önce Toktamış'ın, şimdi de Timur'un eline geçip yağmalandı ve Celâyirli Sultan Ahmed merkezini Bağdat'a taşıdı. Timur Irak'a girince İsfahan valisi Muzaffer Kâşî şehri ve kaleleri ona teslim etti, Muzafferî hükümdarı Zeynelâbidîn Şîraz'dan Bağdat'a kaçtı. Timur'un para toplamaya gelen memurları İsfahan'da halk tarafından öldürülünce, TDV'ye göre Timur intikam için şehirde yaklaşık 200.000 kişiyi kılıçtan geçirdi. Ardından Semerkant'ta çıkan bir isyanı bastırmak için bölgeden ayrıldı.",
  sonuc:"Timur'un Kuzey İran ve Azerbaycan'ı alması, Altın Orda ile eski İlhanlı toprakları arasındaki çatışmayı yeniden başlattı: 1387 baharında Toktamış'ın askerleri Derbend'i geçti. Timur'un yokluğunda Muzafferîler yeniden toparlandı, ama 1392'de başlayan 'beş yıllık sefer'de Timur Şîraz'a girip hânedana son verdi (1393) ve Bağdat kapılarına dayandı. TDV, Bağdat'tan Delhi'ye uzanan bu seferlerde ele geçirilen birçok şehirde büyük tahribat ve katliam yapıldığına dair çağdaş kaynaklara yansıyan pek çok rivayet bulunduğunu yazar.",
  tartisma:"İsfahan katliamındaki 200.000 rakamı TDV Muzafferîler maddesinin verdiği sayıdır ve çağdaş kronik rivayetlerine dayanır; aynı madde İsfahan olaylarına yıl vermez, burada üç yıllık seferin içinde anlatıldı. Atlas maddesi olayı tek bir güne (Kasım 1387) bağlar; TDV seferi 1386-1388 diye verir.",
  kesinlik:"rivayet",
  olay:["1387-11-01|İran"],
  kaynak:"TDV: timur (İran'ın parçalanmışlığı, üç yıllık sefer, Toktamış, beş yıllık sefer) · TDV: muzafferiler (İsfahan'ın teslimi ve katliam, Muzafferîlerin sonu) · TDV: ahmed-celayir (Tebriz'in yağması, Bağdat'a taşınma)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 42 · 1393 ve 1401 Timur'un Bağdat işgalleri ─────────────────────────
{ id:"savas-timur-bagdat-1393-1401", tur:"savas-hikayesi",
  baslik:"Timur'un Bağdat işgalleri (1393 ve 1401)",
  kisa:"Bağdat'ın sultanı iki kez kaçtı, iki kez döndü; birinci işgalde şehir korundu, ikincisinde Abbâsî mahalleleri yerle bir oldu.",
  tarih_metin:"20 Şevval 795 · 29 Ağustos 1393 (birinci işgal) · 803 / 1401 (ikinci işgal)",
  yer:"Bağdat",
  taraflar:[
    { ad:"Timur", komutan:"Timur", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Celâyirliler (ve 1400'de müttefik Karakoyunlular)", komutan:"Celâyirli Sultan Ahmed · Karakoyunlu Kara Yûsuf", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Celâyirli Sultan Ahmed, Tebriz'in Timur tarafından yağmalanmasından sonra 1386'da merkezini Bağdat'a taşımıştı. 1392'de başlayan 'beş yıllık sefer'de Timur Şîraz'ı alıp Muzafferîlere son verdi ve Bağdat kapılarına dayandı. TDV, Timur'un Ağustos 1393'te Bağdat'a inmesinin Osmanlı, Memlük, Altın Orda ve Kadı Burhâneddin devletlerinde önlem aldırdığını, Anadolu beyliklerinde ise sevinç uyandırdığını yazar.",
  akis:"Birinci işgal: Şehri savunamayan Sultan Ahmed Memlük Sultanı Berkuk'a sığındı; Timur 29 Ağustos 1393'te Bağdat'ı aldı. TDV Bağdat maddesine göre şehir bu ilk işgalde fazla zarar görmedi. Timur kuzeye yönelip Tikrît, Musul, Mardin ve Diyarbekir'i aldı, Anadolu beylerine ve Memlük sultanına itaat çağrısı gönderdi. Timur Semerkant'a dönünce Ahmed Berkuk'un yardımıyla Bağdat'a döndü. İkinci işgal: Timur'un torunu Rüstem'i üzerine yolladığını öğrenen Ahmed, Karakoyunlu Kara Yûsuf'tan yardım istedi; ama Timur'un Bingöl'de olduğu haber alınınca ikisi yeniden Memlüklere sığındı (1400). Timur 1401'de Bağdat'ı ikinci kez aldı.",
  sonuc:"İkinci işgalde halk suçsuz yere öldürüldü, Abbâsîlerden kalma mahalle ve binaların çoğu tahrip edildi; TDV bunu Bağdat'ın kültür hayatına indirilen ikinci ağır darbe sayar. Memlüklerin kabul etmediği Ahmed ile Kara Yûsuf Yıldırım Bayezid'e sığındı; Ahmed'e Kütahya, Kara Yûsuf'a Aksaray dirlik verildi. Timur'un onları istemesi ve Bayezid'in reddetmesi, 1402 Ankara Savaşı'na giden olaylardan biri oldu. Ahmed 1405'te Bağdat'a dönüp yıkılan surları ve çarşıları onarmaya çalıştı, ama 1410'da Kara Yûsuf'a yenilip öldürüldü; Bağdat 1410'dan 1467'ye kadar Karakoyunluların elinde kaldı.",
  tartisma:"Okunan TDV maddeleri ikinci işgalin ayını ve kayıp sayısını vermez. Ahmed'in Ankara'dan sonraki dönüşleri sırasıyla TDV Ahmed Celâyir maddesinden aktarılmıştır; Celâyirliler maddesi bunları daha kısa anlatır.",
  kesinlik:"kesin",
  olay:["1393-08-29|Bağdat","1401-01-01|Bağdat"],
  kaynak:"TDV: timur (1393 işgali ve sonrası) · TDV: bagdat (iki işgalin sonuçları) · TDV: ahmed-celayir (kaçışlar, Osmanlı'ya iltica, 1405, 1410) · TDV: celayirliler (Ankara'ya giden süreç)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 43 · 1402 Timur'un İzmir kuşatması ──────────────────────────────────
{ id:"savas-timur-izmir-1402", tur:"savas-hikayesi",
  baslik:"Timur'un İzmir kuşatması (Aralık 1402)",
  kisa:"Yıldırım Bayezid'in yıllarca alamadığı kıyı kalesini Ankara'nın galibi birkaç haftada aldı; ardından Aydın ilini eski beylerine bırakıp doğuya döndü.",
  tarih_metin:"6 Cemâziyelevvel – 10 Cemâziyelâhir 805 · 2 Aralık 1402 – 5 Ocak 1403 (kuşatma dönemi, TDV I. Mehmed) · 20 Cemâziyelevvel 805 · 16 Aralık 1402 (alınış, TDV Îsâ Çelebi)",
  yer:"Sahil İzmir (kıyıdaki kale)",
  taraflar:[
    { ad:"Timur", komutan:"Timur", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Rodos (Saint Jean) Şövalyeleri ve İzmir'deki Latinler", komutan:"okunan TDV maddelerinde adı geçmiyor", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Sahil İzmir XIV. yüzyılın ortasından beri Hıristiyanların elindeydi; Aydınoğlu Umur Bey onu geri almak için savaşmıştı. Osmanlılar Aydın ilini ve İzmir'i 1390'da almış, ama sahil İzmir'i Hıristiyanların elinde kalmıştı. 28 Temmuz 1402'de Ankara'da Bayezid'i yenen Timur, ardından Bursa başta olmak üzere Anadolu'nun çeşitli yerlerine asker yolladı; kendisi Kütahya, Denizli, Aydın, Ayasuluk ve Tire üzerinden İzmir'e indi.",
  akis:"Timur İzmir'i ve çevresindeki bazı kaleleri aldı. TDV I. Mehmed maddesi kuşatmanın 2 Aralık 1402 – 5 Ocak 1403 arasında sürdüğünü, Îsâ Çelebi maddesi şehrin 16 Aralık 1402'de alındığını yazar. Kuşatma sırasında Timur, Süleyman Çelebi'ye Boğaz'ın öte yakasındaki topraklar üzerinde hâkimiyetini tanıyan bir yarlık verdi; İzmir'in düşüşünün hemen ardından Foça Cenevizlileri Timur'un hâkimiyetini tanıdı, Îsâ Çelebi de ona elçi ve armağanlar yolladı.",
  sonuc:"TDV Timur maddesine göre buradan Rumeli'ye geçmek niyetinde olduğu anlaşılan Timur, Bizans imparatorunun elçi ve armağanlarla bağlılık bildirmesinden sonra bundan vazgeçti ve İzmir'den yeniden doğuya döndü. Aydın ilini eski sahiplerine bıraktı; İzmir, Umur Bey'in yeğeni Cüneyd Bey'in idaresine girdi. Fetret yıllarında taraf değiştiren Cüneyd'den şehri Çelebi Mehmed 1415'te on günlük bir kuşatmayla aldı; II. Murad 1424'te kesin olarak zaptetti.",
  tartisma:"Alınış günü kaynaklarda ayrışır: Îsâ Çelebi maddesi 16 Aralık 1402, I. Mehmed maddesi kuşatma için 2 Aralık 1402 – 5 Ocak 1403 aralığını verir; atlas maddesi 14 Aralık 1402'ye koyar. Şövalyelerin savunmasının ayrıntısı okunan maddelerde yoktur.",
  kesinlik:"kesin",
  olay:["1402-12-14|İzmir"],
  kaynak:"TDV: timur (Ankara sonrası güzergâh, İzmir, Rumeli niyeti) · TDV: izmir (Latin hâkimiyeti, 1390, Cüneyd, 1415 ve 1424) · TDV: isa-celebi (16 Aralık 1402, Foça) · TDV: mehmed-i (kuşatma aralığı, Süleyman'a yarlık)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 44 · 1406-1408 Aras ve Serdrûd ───────────────────────────────────────
{ id:"savas-aras-serdrud-1406-1408", tur:"savas-hikayesi",
  baslik:"Kara Yûsuf'un Aras ve Serdrûd zaferleri (1406, 1408)",
  kisa:"Timur ölünce Mısır zindanından çıkan Karakoyunlu beyi, Timur'un torununu iki savaşta yenip Azerbaycan'ı Türkmenlere kazandırdı.",
  tarih_metin:"2 Cemâziyelevvel 809 · 15 Ekim 1406 (Aras) · 16 Zilkade 810 · 13 Nisan 1408 (Serdrûd)",
  yer:"Aras nehri kıyısı · Serdrûd, Tebriz yakını",
  taraflar:[
    { ad:"Karakoyunlular", komutan:"Kara Yûsuf", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Timurlular (Azerbaycan ve iki Irak)", komutan:"Timur'un torunu Ebû Bekir Mirza", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Kara Yûsuf, Celâyirli Sultan Ahmed ile birlikte Timur'a karşı savaşıp yenilmiş, önce Osmanlılara, sonra Memlüklere sığınmıştı. Şam nâibi Kahire'den gelen emirle ikisini hapsettirdi; ancak 1405'te Timur'un ölümünden sonra serbest kaldılar. Kara Yûsuf Avnik'i alıp Doğu Anadolu'daki topraklarına yeniden sahip oldu. Azerbaycan ile iki Irak'ın sahibi ve çevredeki yerel hânedanların metbûu sayılan Timur'un torunu Ebû Bekir Mirza Bağdat'ı da almıştı.",
  akis:"Kara Yûsuf Ebû Bekir Mirza'nın üzerine yürüdü ve 15 Ekim 1406'da Aras nehri kenarındaki savaşta onu yendi. İkinci karşılaşma 13 Nisan 1408'de Tebriz yakınındaki Serdrûd'da oldu; bu savaşı da Kara Yûsuf kazandı. Okunan TDV maddesi iki savaşın safhalarını anlatmaz.",
  sonuc:"Serdrûd zaferi Azerbaycan'ı Karakoyunlulara kazandırdı; Kara Yûsuf ardından komutanı Bistam Bey'i Irâk-ı Acem'in fethiyle görevlendirdi. Eski müttefiki Sultan Ahmed Celâyir 1410'da Tebriz'e saldırınca Esed köyü yakınındaki savaşta yenilip öldürüldü; Bağdat ve Irak'ın geniş kısmı Karakoyunlulara geçti. TDV'ye göre Karakoyunlular İran ve Irak'taki iki yüzyıllık Moğol hâkimiyetine fiilen son verip özellikle Azerbaycan'ın Türkleşmesinde önemli rol oynadı.",
  tartisma:"Aras zaferi tek başına Tebriz'i Karakoyunlulara vermedi; Azerbaycan'ı kazandıran savaş Serdrûd'dur (TDV Karakoyunlular).",
  kesinlik:"kesin",
  olay:["1406-10-15|Aras","1408-04-13|Serdrûd"],
  kaynak:"TDV: karakoyunlular (Aras ve Serdrûd tarihleri, Azerbaycan, Bistam Bey) · TDV: ahmed-celayir (hapis ve serbest kalış, 1410 savaşı)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 45 · 1414-1418 Dulkadırlı-Memlük çekişmesi ──────────────────────────
{ id:"savas-dulkadir-memluk-1414-1418", tur:"savas-hikayesi",
  baslik:"Antep, Darende ve Besni: Dulkadırlılar ile Memlükler (1414-1418)",
  kisa:"Kızını Çelebi Mehmed'e veren Dulkadır beyi Kahire'yi kuşkulandırdı; Memlük sultanı verdiği şehirleri geri aldı, dört yıl sonra Dulkadırlılar fazlasıyla geri kazandı.",
  tarih_metin:"1414 (Memlük seferi) · 1418 (Dulkadırlıların karşı hamlesi) — günleri kaynakta yok",
  yer:"Antep, Darende, Besni — Memlük-Dulkadır sınır bölgesi",
  taraflar:[
    { ad:"Dulkadırlı Beyliği", komutan:"Nâsırüddin Mehmed Bey", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Memlük Sultanlığı", komutan:"Sultan Şeyh", kuvvet:"kaynakta sayı verilmiyor" }
  ],
  oncesi:"Timur'dan sonra Memlükler Mehmed Bey'in kardeşi Alâeddin Ali Bey'i 1402'de Antep valisi yapmıştı. Mehmed Bey bir süre sonra Halep valisi Şeyh'in teklifiyle Antep'i aldı ve Şeyh'in Mısır'da iktidarı ele geçirmesinde rol oynadı. Ama aynı yıllarda Osmanlılarla yakınlaştı: kızlarından birini Osmanlı şehzadesi Çelebi Mehmed'e verdi, oğlu Süleyman'ı da onun tek başına tahtı ele geçirmesine yardım için yolladı. TDV'ye göre bu dostluk Memlükleri endişelendirdi.",
  akis:"Sultan Şeyh 1414'te sefere çıktı ve daha önce kendi rızasıyla Dulkadırlılara verdiği Antep ile Darende'yi geri aldı. Mehmed Bey 1418'de Darende'yi yeniden aldı, Besni'yi de topraklarına kattı. Okunan TDV maddesi bu harekâtların ayrıntısını vermez.",
  sonuc:"Karamanoğullarıyla bozuşmuş olan Memlük sultanı bu kez Mehmed Bey'i Karaman seferine katılmaya çağırdı; Memlük kuvvetleri çekildikten sonra Karamanoğlu Mehmed Bey, Dulkadırlılara kaptırdığı Kayseri'yi geri almak isterken yenilip esir düştü ve Kahire'ye gönderildi. Dulkadırlılar Osmanlı ile Memlük arasında iki tarafı dengeleyerek varlığını sürdürdü; bu sınır bölgesi 1485-1491 Osmanlı-Memlük savaşının da sahnesi olacaktı.",
  tartisma:"Okunan TDV maddesi iki yılın yalnız sonucunu verir; savaş mı, el değiştirme mi olduğu ve günler belirsizdir.",
  kesinlik:"kesin",
  olay:["1414-01-01|Antep","1418-01-01|Darende"],
  kaynak:"TDV: dulkadirogullari (Antep valiliği, Osmanlı dostluğu, 1414 ve 1418, Karaman seferi, Kayseri)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 46 · 1467-1469 Karakoyunlu Devleti'nin sonu ─────────────────────────
{ id:"savas-karakoyunlu-sonu-1467-1469", tur:"savas-hikayesi",
  baslik:"Karakoyunlu Devleti'nin sonu: Cihan Şah'tan Hasan Ali'ye (1467-1469)",
  kisa:"En parlak devrini yaşatan hükümdar kış dönüşü bir baskında öldü; oğlunun daha kalabalık ordusu da dağıldı ve Akkoyunlular iki yılda bütün ülkeyi aldı.",
  tarih_metin:"12 Rebîülâhir 872 · 10 Kasım 1467 (Cihan Şah öldürülür) · Zilhicce 872 · Temmuz 1468 (Hasan Ali'nin yenilgisi) · Şevval 873 · Nisan 1469 (Hasan Ali'nin sonu)",
  yer:"Sancak mevkii, Bingöl ile Kiğı arası · Azerbaycan · Hemedan yöresi",
  taraflar:[
    { ad:"Akkoyunlular", komutan:"Uzun Hasan · oğlu Uğurlu Mehmed", kuvvet:"kaynakta sayı verilmiyor" },
    { ad:"Karakoyunlular", komutan:"Cihan Şah · oğlu Hasan Ali", kuvvet:"1468'de Karakoyunlu ordusu TDV'ye göre sayıca daha kalabalık ve daha iyi donanımlıydı" }
  ],
  oncesi:"Cihan Şah (1438-1467) zamanında Karakoyunlu Devleti bir imparatorluk niteliği kazanıp en parlak devrini yaşadı: Bağdat 1446'da, Sultâniye ve Kazvin 1447'de, Rey, İsfahan, Fars ve Kirman 1452-1453'te alındı. Akkoyunlu taht kavgasında Cihangir'i destekleyip Uzun Hasan'ın üzerine gönderdiği ordu Haziran 1457'de Âmid önünde ağır bir yenilgiye uğradı. Oğulları Hasan Ali ile Pîr Budak'ın isyanları da devleti yıprattı.",
  akis:"Cihan Şah 1457 yenilgisinin intikamını almak için Uzun Hasan'ın üzerine yürüdü. Kış bastırınca geri dönülürken Bingöl ile Kiğı arasındaki Sancak mevkiinde Uzun Hasan'ın baskınına uğradı ve kaçarken öldürüldü (10 Kasım 1467). Bazı beyler Mâkû kalesindeki oğlu Hasan Ali'yi çıkarıp tahta getirdi; Hasan Ali kendisine tahtı teslim eden üvey annesi Can Begüm'ü ve kardeşlerini öldürttü. Uzun Hasan'a karşı hazırlanan Karakoyunlu ordusu, sayıca kalabalık ve donanımı daha iyi olduğu hâlde Temmuz 1468'de Akkoyunlular karşısında dağıldı.",
  sonuc:"Hasan Ali Gence yöresindeki Karamanlı kabilesine, oradan yardım istediği Timurlu Ebû Said Mirza'nın yanına gitti; Ebû Said Uzun Hasan'a yenilip esir düşünce Hemedan'a yöneldi. Uzun Hasan'ın oğlu Uğurlu Mehmed onu yenip esir aldı ve öldürttü (Nisan 1469); çağdaş tarihçi Gıyâsî ise Hasan Ali'nin yakalanacağını anlayınca intihar ettiğini yazar. Fars'ta hükümdar ilan edilen Yûsuf Mirza da Uğurlu Mehmed'e yenilip öldürüldü. Böylece Karakoyunlu Devleti eski düşmanları Akkoyunlularca ortadan kaldırıldı; Bağdat kolu da Aralık 1469'da sona erdi.",
  tartisma:"Hasan Ali'nin ölümü iki türlü anlatılır: TDV'nin esas aldığı rivayette Uğurlu Mehmed onu öldürtmüştür, Gıyâsî intihar ettiğini yazar.",
  kesinlik:"kesin",
  olay:["1467-11-10|Cihan Şah","1469-04-01|Karakoyunlu"],
  kaynak:"TDV: karakoyunlular (Cihan Şah devri, 1457, Sancak baskını, Hasan Ali, Uğurlu Mehmed, Bağdat kolu)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 47 · 1510 Merv ───────────────────────────────────────────────────────
{ id:"savas-merv-1510", tur:"savas-hikayesi",
  baslik:"Merv Savaşı: Şah İsmâil'e karşı Şeybânî Han (Aralık 1510)",
  kisa:"Kaleye kapanan Özbek hanı bir meydan okuma mektubuyla dışarı çıktı; Murgāb kıyısındaki yenilgiden sonra kafatası Kahire'ye, saman doldurulmuş derisi İstanbul'a gönderildi.",
  tarih_metin:"916 (1510) · Şeybânî Han'ın ölümü 29 Şâban 916 · 1 Aralık 1510",
  yer:"Merv yakını, Murgāb nehri kıyısı (bugün Türkmenistan)",
  taraflar:[
    { ad:"Safevî Devleti", komutan:"Şah İsmâil", kuvvet:"çoğu süvari 70.000 kişi (TDV Şeybânî Han)" },
    { ad:"Özbekler (Şeybânîler)", komutan:"Muhammed Şeybânî Han", kuvvet:"25-30.000 kişi (TDV Şeybânî Han)" }
  ],
  oncesi:"Şah İsmâil batıdaki topraklarla uğraşırken Özbekler Horasan'ı ele geçirmiş, Kirman'a doğru yayılmaya çalışıyordu. Şeybânî Han'ın Herat'ın batı ve güneyindeki dağlık ve çöllük topraklara yaptığı sefer de kayıplarla sonuçlandı. O Herat'a dönerken Şah İsmâil büyük bir orduyla gelip Meşhed'i aldı, Özbek askerlerini püskürterek Herat'a yaklaştı. Şeybânî Han ordusunun büyük kısmını gönderip Merv kalesine çekildi.",
  akis:"Merv'i kuşatan Şah İsmâil kaleyi zorla alamayacağını anlayınca Şeybânî Han'a onu savaş meydanında beklediğini bildiren mektuplar yolladı. Şeybânî Han 25-30.000 kişilik ordusuyla kaleden çıktı ve Merv yakınındaki Murgāb kıyısında Şah İsmâil'in çoğu süvari 70.000 kişilik ordusuyla savaştı; ağır bir yenilgiye uğradı. Yaralı olarak sığındığı bir çiftlikte 1 Aralık 1510'da öldü.",
  sonuc:"Merv ve Herat Safevî hâkimiyetine girdi. Şah İsmâil Şeybânî Han'ın başını kestirdi; kafatasını Memlük Sultanı Kansu Gavri'ye, yüzülen derisine saman doldurtup Osmanlı Sultanı II. Bayezid'e yolladı. Özbeklerin başına geçen Ubeydullah Han 1512'de Horasan'a girip Herat'a kadar olan yerleri aldı, ama Şah İsmâil kısa sürede Herat, Belh ve Meşhed'i geri aldı. Doğu cephesini rahatlatan Şah İsmâil yüzünü batıya çevirecek; dört yıl sonra Çaldıran'da Yavuz Sultan Selim'le karşılaşacaktı.",
  tartisma:"Kuvvet rakamları TDV Şeybânî Han maddesinde verilir. Şeybânî Han'ın ölüm yeri ayrışır: Şeybânî Han maddesi yaralı sığındığı bir çiftlikte öldüğünü, Şah İsmâil maddesi savaş meydanında öldürüldüğünü yazar.",
  kesinlik:"kesin",
  olay:["1510-12-02|Merv"],
  kaynak:"TDV: seybani-han (Merv kuşatması, mektuplar, kuvvetler, ölüm, kafatası ve deri) · TDV: sah-ismail (1512 Ubeydullah Han) · TDV: safeviler (Horasan'ın durumu, Merv ve Herat)",
  gorsel:null, gorsel_kaynak:"aranmadı" }

];
