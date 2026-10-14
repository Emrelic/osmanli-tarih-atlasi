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
  olay:["1411-06-01|İstanbul","1412-10-01|İnceğiz"],
  kaynak:"TDV: musa-celebi (İstanbul kuşatması ve başarısızlık sebepleri, İnceğiz, sonrası, Çamurlu) · TDV: fetret-devri (Fazlullah'ın aracılığı, Ekim 1412, 7000 yeniçeri)",
  ic_not:"Madde 1411-06-01 'Musa Çelebi'nin İstanbul kuşatması' — TDV musa-celebi '1411 sonbaharı' der; gün düzeltmesi madde sahibine önerilmeli.",
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
  gorsel:null, gorsel_kaynak:"aranmadı" }

];
