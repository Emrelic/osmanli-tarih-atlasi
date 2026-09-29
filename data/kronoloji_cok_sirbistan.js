// =====================================================================
// SIRBİSTAN — ÇOK KÜNYELİ KRONOLOJİ EKİ (KRONO-BALKAN-B-0929, 29 Eylül 2026)
// =====================================================================
// Yol: `window.KRONOLOJI_COK_SIRBISTAN` → app.js `cokTarafliKronolojiEkle`
// her maddeyi `devlet:` / `devletler:` künyesine EKLER (ezmez; t+b mükerreri
// atar). ORTAK §4.1.
//
// KAPSAM: `data/kronoloji_sirbistan.js`in (35 madde, BAĞSIZ — onarımı
// KRONO-BAGLAMA-0929'da) YAZMADIĞI olaylar. O dosyadaki ve künyelerin
// kendi `kronoloji` alanlarındaki maddeler burada TEKRARLANMADI; çekirdekte
// (`olaylar*.js`) Osmanlı gözüyle yazılmış fetihler de tekrarlanmadı.
//
// KÜNYELER (devletler.js'ten okundu, uydurulmadı):
//   sirbistan-nemanjic 1217→1402 · sirp-despotlugu 1402→1459-06-20 ·
//   sirbistan-eyaleti 1459-06-20→1804-02-14 · sirbistan-prensligi
//   1804-02-14→1882-03-06 · sirbistan-kralligi 1882-03-06→1918-12-01 ·
//   yugoslavya 1918-12-01→ · habsburg · bizans
//
// KAYNAK: TDV birincil (`sirbistan`, `semendire`, `belgrad`, `nis`, `serez`
// — gövdeleri denetim/KRONO-BALKAN-B-0929-tdv-onbellek/ altında). TDV'nin
// gün vermediği ya da hiç değinmediği XIX. yüzyıl iç siyaseti için alanın
// standart el kitapları, `kaynak:` alanında adıyla:
//   M. B. Petrovich, A History of Modern Serbia 1804-1918 (1976) ·
//   J. V. A. Fine, The Late Medieval Balkans (1987/1994) ·
//   B. Jelavich, History of the Balkans I (1983).
// Gün bilinmiyorsa YYYY-01-01 + `gun:` açıklaması (CLAUDE.md §4).
// =====================================================================

window.KRONOLOJI_COK_SIRBISTAN = [

// ───────────────────────── NEMANJİÇ DÖNEMİ

{ t:"1219-01-01", b:"Sırp kilisesi Ohri'den ayrılarak otosefal başpiskoposluk oldu (Aziz Sava)", tur:"din",
  onem:4, dunya:1, kapsam:"ic", etiket:["din","konu-din","konu-kultur"],
  yer_id:"", odak_yer:"Yenipazar", devlet:"sirbistan-nemanjic", gun:"1219 (TDV yalnız yıl verir)",
  d:"Bizans imparatoru ve patriği, Stefan Nemanja'nın oğlu rahip Rastko'ya (Aziz Sava) Ohri başpiskoposluğundan bağımsız bir Sırp başpiskoposluğu kurma izni verdi. Böylece yeni krallık kendi kilise teşkilâtına kavuştu; bu kilise sonraki yüzyıllarda Sırp kimliğinin başlıca taşıyıcısı olacaktır.",
  kaynak:"TDV `sirbistan`: 1219'da Aziz Sava'ya Ohri'den bağımsız başpiskoposluk kurma izni verildi." },

{ t:"1282-01-01", b:"Kral Milutin tahta çıktı, krallığın merkezi Ras'tan Üsküp'e kaydı", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hukumdar","idari","konu-hanedan","konu-idari"],
  yer_id:"Üsküp", devlet:"sirbistan-nemanjic", gun:"1282 (TDV yalnız yıl verir)",
  d:"Deževo meclisinin ardından tahta geçen Milutin, krallığın ağırlık merkezini eski Ras bölgesinden güneye, Üsküp'e taşıdı. Bu kayma Sırp devletinin yüzünü Makedonya'ya ve Bizans topraklarına çevirdi; Duşan dönemindeki büyük genişlemenin zemini burada kuruldu.",
  kaynak:"TDV `sirbistan`: 1282'de (Deževski Sabor akabinde) Kral Milutin merkezi Ras'tan Üsküp'e taşıdı." },

{ t:"1345-09-25", b:"Duşan Serez'i aldı — Doğu Makedonya Sırp hâkimiyetine geçti", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"dis", etiket:["toprak-kazanc","fetih","konu-askeri"],
  yer_id:"Serez", devletler:["sirbistan-nemanjic","bizans"],
  gun:"25 Eylül 1345 (gün: Fine; TDV yalnız yıl verir)",
  d:"Bizans iç savaşından yararlanan Stefan Duşan, Doğu Makedonya'nın en önemli şehri Serez'i ele geçirdi ve burayı imparatorluğunun başşehirlerinden biri yaptı. Şehrin düşüşüyle Struma ve Mesta havzası da Sırp idaresine girdi; aynı yıl Duşan kendini 'Sırpların ve Rumların çarı' ilan edecektir.",
  ic_not_d:"Haritada Drama, Serez, Karaferye, Vodina, Kılkış, Gevgili, Petriç, Nevrokop 1345-01-01'de (yıl-temsilî) bizans→sirbistan kırılıyor. Serez için gün önerisi YERLESIM-ONERI'de.",
  kaynak:"TDV `serez`: '1345'te Sırp Kralı Stefan Duşan tarafından ele geçirildiğinde Sırp İmparatorluğu'nun başşehri yapıldı.' Gün: J. V. A. Fine, The Late Medieval Balkans (1987)." },

{ t:"1349-05-21", b:"Duşan Kanunnâmesi (Zakonik) Üsküp meclisinde kabul edildi", tur:"kanun",
  onem:4, dunya:2, kapsam:"ic", etiket:["kanun","idari","konu-idari","konu-hukuk"],
  yer_id:"Üsküp", devlet:"sirbistan-nemanjic",
  d:"Stefan Duşan, Üsküp'te toplanan mecliste imparatorluğun yazılı kanunnâmesini ilan etti; metin 1354'te genişletildi. Zakonik, kilise hukuku ile Bizans hukukunu yerel örf ile birleştiren ve soyluların, köylülerin, şehirlerin hak ve yükümlülüklerini düzenleyen ortaçağ Balkanlarının en kapsamlı kanun metnidir.",
  kaynak:"J. V. A. Fine, The Late Medieval Balkans (1987) (21 Mayıs 1349 Üsküp meclisi). TDV `sirbistan` kanunnâmeye değinmiyor." },

// ───────────────────────── SIRP DESPOTLUĞU

{ t:"1428-01-01", b:"Osmanlılar despotluğun merkezi Kruşevac'ı (Alacahisar) aldı", tur:"toprak-kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["toprak-kayip","konu-askeri"],
  yer_id:"", odak_yer:"Kragujevac", devlet:"sirp-despotlugu", gun:"1428 (TDV yalnız yıl verir)",
  d:"Stefan Lazareviç'in Temmuz 1427'de ölümü ve Belgrad'ın eski bir anlaşma gereği Macarlara bırakılması üzerine Osmanlılar, yeni despot Đurađ Branković'in elindeki Kruşevac'ı (Alacahisar) ele geçirdi. Başkentsiz kalan despot, daha savunulabilir bir merkez olarak Semendire'yi kurmaya yöneldi.",
  kaynak:"TDV `semendire`: 'Temmuz 1427'de … Stefan Lazareviç … öldü … Curac Brankoviç … Belgrad'ı Macarlar'a iade etti. 1428'de Osmanlılar Đurađ'ın başşehri olan Kruševac'ı (Alacahisar) aldı.'" },

{ t:"1454-01-01", b:"Fâtih'in Sırbistan seferi: Ostrovica alındı, Semendire kuşatıldı", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["savas","kusatma","konu-askeri"],
  yer_id:"Semendire", devlet:"sirp-despotlugu", gun:"1454 (858 H.; TDV gün vermez)",
  d:"İstanbul'un fethinin ertesi yılı Fâtih Sultan Mehmed, kuzey sınırını güvenceye almak için despotluğa yürüdü; güçlü Ostrovica (Sivrihisar) kalesini aldı, Semendire'yi kuşattı ama düşüremedi. Bu sefer despotluğun beş yıl sonraki tasfiyesinin ilk adımı oldu.",
  kaynak:"TDV `semendire`: '858'de (1454) 20.000 kişilik bir ordu ile saldırıya geçti ve güçlü Ostrovica (Sivrihisar) Kalesi'ni ele geçirdi, Semendire'yi kuşattı, fakat alamadı.'" },

{ t:"1458-01-01", b:"Resava, Bela Stena ve Avala kaleleri Osmanlılara geçti — despotluk ikiye bölündü", tur:"toprak-kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["toprak-kayip","bolunme","konu-askeri","konu-siyasi"],
  yer_id:"Semendire", devlet:"sirp-despotlugu", gun:"1458 ilkbaharı (TDV)",
  d:"Aralık 1456'da Đurađ'ın, iki yıl sonra oğlu Lazar'ın ölümüyle despotluk Macar yanlıları ile Osmanlı yanlıları arasında bölündü. Osmanlılar 1458 ilkbaharında Bela Stena, Resava, Viševac ve Žrnov (Avala) kalelerini aldılar; Semendire ise bir süre daha elden çıkmadı.",
  kaynak:"TDV `semendire`: 'Osmanlılar 862 (1458) ilkbaharında Bela Stena, Resava, Viševac ve Žrnov (Avala) kalelerini aldılar.'" },

// ───────────────────────── OSMANLI DOĞRUDAN İDARESİ (sirbistan-eyaleti)

{ t:"1467-01-01", b:"Braniçeva vilâyeti genişletilip Semendire sancağı adını aldı", tur:"idari",
  onem:3, dunya:1, kapsam:"ic", etiket:["idari","konu-idari"],
  yer_id:"Semendire", devlet:"sirbistan-eyaleti", gun:"1467 (871 H.; TDV gün vermez)",
  d:"Despotluğun topraklarında kurulan Osmanlı idaresi yeniden düzenlendi: Braniçeva vilâyeti büyük ölçüde genişletilerek Semendire sancağına dönüştürüldü. Bu sancak 1521'de Belgrad'ın fethine kadar Osmanlı'nın Macar sınırındaki başlıca uç birimi oldu; merkez sonra Belgrad'a taşındı.",
  kaynak:"TDV `semendire`: '871'de (1467) Braniçeva vilâyeti büyük ölçüde genişletilip adı Semendire sancağı olarak değiştirildi.' · TDV `sirbistan`: 1521'de Belgrad sancağın merkezi yapıldı." },

{ t:"1718-07-21", b:"Pasarofça Antlaşması — Belgrad ve Kuzey Sırbistan Avusturya'ya bırakıldı", tur:"toprak-kayip",
  onem:4, dunya:3, kapsam:"dis", etiket:["antlasma","toprak-kayip","konu-diplomasi"],
  yer_id:"Belgrad", devlet:"sirbistan-eyaleti",
  d:"Pasarofça barışıyla Sırbistan'ın kuzey yarısı Belgrad'la birlikte Habsburg idaresine geçti ve yirmi bir yıl sürecek bir Avusturya dönemi başladı. Osmanlı buna karşılık yeni sınırın gerisinde, Niş'te 1723'e kadar süren büyük bir tahkimat inşa etti; bölge 1739 Belgrad Antlaşması'yla geri alınacaktır.",
  ic_not_d:"Aynı antlaşma çekirdekte (olaylar_ek5.js) Osmanlı gözüyle duruyor; bu madde sirbistan-eyaleti künyesinin 1717 ile 1739 maddeleri arasındaki halkayı tamamlıyor.",
  kaynak:"TDV `sirbistan`: 'Pasarofça Antlaşması (1718) sırasında Sırbistan'ın kuzey yarısı Avusturya'nın eline geçti ve bu tarihten 1723'e kadar Osmanlı Devleti Niş'te … büyük bir kale yaptı.'" },

{ t:"1801-12-15", b:"Dayılar Belgrad valisi Hacı Mustafa Paşa'yı öldürüp paşalığı ele geçirdi", tur:"kriz",
  onem:4, dunya:1, kapsam:"ic", etiket:["kriz","isyan","konu-siyasi","konu-askeri"],
  yer_id:"Belgrad", devlet:"sirbistan-eyaleti",
  d:"Belgrad paşalığına dönen dört yeniçeri ağası (dayılar), Sırp reayaya ılımlı davranan vali Hacı Mustafa Paşa'yı öldürerek bölgede fiilî bir terör idaresi kurdu. Dayıların ve yamakların baskısı, iki yıl sonra Sırp isyanını doğuracak olan gerginliğin doğrudan sebebi oldu.",
  kaynak:"TDV `sirbistan`: 'Dayılar ve yamaklar olarak adlandırılan yeniçerilerin gittikçe artan baskıları beraberinde Sırp isyanlarını getirdi.' Gün ve valinin katli: M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1804-01-01", b:"Knezlerin katli (Seča knezova) — isyanın kıvılcımı", tur:"kriz",
  onem:4, dunya:1, kapsam:"ic", etiket:["kriz","konu-siyasi"],
  yer_id:"Belgrad", devlet:"sirbistan-eyaleti",
  gun:"1804 Ocak sonu – Şubat başı (gün kaynakta takvime göre değişir; Petrovich)",
  d:"Bir Sırp ayaklanmasından çekinen dayılar, paşalıktaki önde gelen knezleri ve din adamlarını toplu hâlde öldürttü. Bu kıyım, liderlerini kaybetmemek için harekete geçen Sırpları birkaç hafta içinde Kara Yorgi önderliğinde silaha sarılmaya itti.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976). TDV `sirbistan` olayı ayrıca anmıyor, yalnız dayı baskısını sebep olarak veriyor." },

// ───────────────────────── SIRBİSTAN PRENSLİĞİ (isyanlar ve özerklik)

{ t:"1805-08-18", b:"İvankovac Savaşı — isyancılar Osmanlı ordusunu durdurdu", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["savas","isyan","konu-askeri"],
  yer_id:"", odak_yer:"Yagodina", devlet:"sirbistan-prensligi",
  d:"Dayılara karşı başlayan ayaklanma, Babıâli'nin gönderdiği Hafız Paşa kuvvetleriyle doğrudan karşılaşınca bir Osmanlı-Sırp savaşına dönüştü. İvankovac'taki başarı isyanın artık yerel bir asayiş meselesi değil, merkeze karşı bir ayrılma hareketi olduğunu gösterdi.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1806-08-13", b:"Mişar Savaşı — Sırp isyancıların Bosna ordusuna karşı zaferi", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["savas","isyan","konu-askeri"],
  yer_id:"Böğürdelen (Šabac)", devlet:"sirbistan-prensligi",
  d:"Kara Yorgi komutasındaki isyancılar, Böğürdelen (Šabac) yakınındaki Mişar'da Drina'yı geçip gelen Bosna kuvvetlerini yendi. Zafer, aynı yıl sonunda Belgrad'ın ele geçirilmesine ve isyancıların Tuna-Sava hattına hâkim olmasına yol açtı.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1809-05-31", b:"Çegar (Niş) Savaşı ve Kafatası Kulesi", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["savas","isyan","konu-askeri"],
  yer_id:"Niş", devlet:"sirbistan-prensligi", gun:"31 Mayıs 1809 (gün: Petrovich; TDV 'Mayıs 1809')",
  d:"Niş üzerine yürüyen Sırp kuvvetleri Çegar tepesinde bozuldu; mevziini düşürmemek için barut deposunu ateşleyen Stevan Sinđelić ve adamları öldü. Osmanlı komutanı düşen isyancıların kafataslarından Niş yakınında bir kule ördürdü; yenilgi isyanın güneye yayılmasını durdurdu.",
  kaynak:"TDV `nis`: 'Mayıs 1809'da … Stephan Sindjelić liderliğindeki isyan kuvvet kullanılarak bastırıldı.' · TDV `prizren`: 1809'da Mahmud Paşa Niş yakınındaki isyancıları dağıttı. Gün: Petrovich (1976)." },

{ t:"1812-05-28", b:"Bükreş Antlaşması'nın 8. maddesi — Sırplara kısmî özerklik vaadi", tur:"antlasma",
  onem:4, dunya:3, kapsam:"dis", etiket:["antlasma","ozerklik","konu-diplomasi"],
  yer_id:"", odak_yer:"Belgrad", devlet:"sirbistan-prensligi",
  d:"1806-1812 Osmanlı-Rus savaşını bitiren barış, Sırplara iç işlerinde kısmî özerklik verilmesini öngördü; ancak Rusya'nın Napolyon karşısında Balkanlardan çekilmesi maddeyi uygulanamaz kıldı. Daha geniş özerklik isteyen isyan ertesi yıl bastırılacaktır.",
  ic_not_d:"Antlaşmanın kendisi çekirdekte (olaylar_ek.js 1812-05-28, Besarabya) Osmanlı gözüyle duruyor; bu madde yalnız Sırp hükmünü anlatır.",
  kaynak:"TDV `sirbistan`: '1806-1812 Osmanlı-Rus savaşı sonucunda yapılan Bükreş Antlaşması'yla Osmanlı Devleti Sırplar'a kısmî özerklik verilmesini kabul etmek zorunda kaldı.'" },

{ t:"1817-07-25", b:"Kara Yorgi Miloş'un emriyle öldürüldü — iki hanedan arasındaki kan davası başladı", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"ic", etiket:["olum","hanedan","konu-hanedan","konu-siyasi"],
  yer_id:"", odak_yer:"Semendire", devlet:"sirbistan-prensligi", gun:"25 Temmuz 1817 (Petrovich; eski takvimle 13 Temmuz)",
  d:"Avusturya'dan gizlice dönen Birinci İsyan'ın önderi Kara Yorgi, Osmanlı ile uzlaşma yolunu tutan Miloş Obrenoviç'in adamlarınca öldürüldü ve başı Belgrad'a gönderildi. Karađorđević ile Obrenović aileleri arasındaki düşmanlık Sırbistan siyasetini 1903'e kadar belirledi.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1817-11-06", b:"Miloş Obrenoviç Sırp meclisince irsî başknez tanındı", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"ic", etiket:["hukumdar","konu-hanedan","konu-siyasi"],
  yer_id:"Belgrad", devlet:"sirbistan-prensligi",
  d:"İkinci İsyan'ı pazarlıkla sonuçlandıran Miloş, Belgrad'da toplanan knezler meclisince irsî başknez ilan edildi. Unvan Osmanlı tarafından ancak 1830 fermanıyla tanınacak; o güne kadar Miloş hem Babıâli'nin muhatabı hem de fiilî Sırp hükümdarı olarak iki yönlü bir konumda kaldı.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976). TDV `sirbistan`: 1830 fermanının Miloş'u başknez olarak tanıdığını yazar." },

{ t:"1832-01-01", b:"Sırp kilisesi Fener Patrikhanesi'nden özerklik kazandı", tur:"din",
  onem:3, dunya:1, kapsam:"ic", etiket:["din","ozerklik","konu-din"],
  yer_id:"Belgrad", devlet:"sirbistan-prensligi", gun:"1832 (TDV yalnız yıl verir)",
  d:"1766'dan beri doğrudan İstanbul Rum Ortodoks Patrikhanesi'ne bağlı olan Sırp kiliseleri, özerk prensliğin içinde kendi başpiskoposluklarına kavuştu. Siyasal özerkliği dinî özerklik izledi; tam bağımsız Sırp kilisesi bağımsızlıktan sonra gelecektir.",
  kaynak:"TDV `sirbistan`: 'Sırplar'ın Fener Rum Ortodoks Patrikhânesi'ne bağlılığı 1832 yılına kadar devam edecek, bu tarihte özerk bir Sırp kilisesi ortaya çıkacaktır.'" },

{ t:"1833-01-01", b:"Altı nahiye özerk Sırbistan'a katıldı", tur:"toprak-kazanc",
  onem:4, dunya:1, kapsam:"dis", etiket:["toprak-kazanc","ozerklik","konu-idari"],
  yer_id:"", odak_yer:"Kragujevac", devlet:"sirbistan-prensligi", gun:"1833 (hatt-ı şerifin günü bu turda doğrulanmadı)",
  d:"1830 fermanının öngördüğü sınır düzenlemesiyle, Birinci İsyan sırasında Sırpların elinde bulunan ama 1813'te geri alınan altı nahiye özerk prensliğe bağlandı. Prensliğin toprağı böylece aşağı yukarı iki katına çıktı ve güneyde Timok ile Drina arasına yayıldı.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976). TDV `sirbistan` bu ilhaka ayrıca değinmiyor. ⚠️ Gün doğrulanmadı — YYYY-01-01." },

{ t:"1835-02-15", b:"Sretenje Anayasası ilan edildi ve birkaç hafta içinde askıya alındı", tur:"anayasa",
  onem:3, dunya:1, kapsam:"ic", etiket:["anayasa","reform","konu-siyasi","konu-hukuk"],
  yer_id:"Kragujevac", devlet:"sirbistan-prensligi",
  d:"Miloş'un mutlak idaresine karşı çıkan önde gelenlerin baskısıyla Kragujevac'ta liberal bir anayasa ilan edildi. Metin, Osmanlı, Rusya ve Avusturya'nın itirazıyla kısa sürede askıya alındı; ama prensin yetkilerini sınırlama tartışmasını Sırp siyasetinin merkezine taşıdı.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976) (Sretenje, 15 Şubat / eski takvimle 2 Şubat 1835)." },

{ t:"1838-01-01", b:"'Türk Anayasası' (Ustav) — Babıâli fermanıyla meclis ve danışma kurulu", tur:"anayasa",
  onem:3, dunya:1, kapsam:"dis", etiket:["anayasa","ozerklik","konu-hukuk","konu-diplomasi"],
  yer_id:"Belgrad", devlet:"sirbistan-prensligi", gun:"Aralık 1838 (gün doğrulanmadı)",
  d:"Rusya ve Babıâli'nin anlaşmasıyla çıkarılan fermanla Sırbistan'a yeni bir teşkilât esası verildi; prensin yetkileri ömür boyu atanan bir danışma kuruluyla (Sovjet) sınırlandı. Belge Sırplar arasında 'Türk Anayasası' diye anıldı ve Miloş'un ertesi yıl tahttan çekilmesini hazırladı.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1839-06-13", b:"Miloş tahttan çekildi; Belgrad prensliğin idarî merkezi oldu", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"ic", etiket:["hukumdar","idari","konu-hanedan","konu-idari"],
  yer_id:"Belgrad", devlet:"sirbistan-prensligi",
  d:"Danışma kuruluyla çatışan Miloş Obrenoviç tahttan çekilip ülkeyi terk etti; yerine önce oğulları Milan, sonra Mihailo geçti. Aynı yıl hükümet Kragujevac'tan Belgrad'a taşındı ve şehir Sırbistan'ın siyasî merkezi hâline geldi.",
  kaynak:"TDV `belgrad`: 'Sırp isyanları sonunda Belgrad Sırbistan'ın idarî ve siyasî merkezi oldu (1839).' Tahttan çekilme günü: M. B. Petrovich (1976)." },

{ t:"1842-01-01", b:"Aleksandar Karađorđević Sırbistan prensi seçildi", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hukumdar","hanedan","konu-hanedan"],
  yer_id:"Belgrad", devlet:"sirbistan-prensligi", gun:"Eylül 1842 (gün doğrulanmadı)",
  d:"Ustavobranitelji ('anayasa koruyucuları') hareketi Prens Mihailo Obrenoviç'i devirdi ve Kara Yorgi'nin oğlu Aleksandar'ı prens seçtirdi; Babıâli seçimi onayladı. Sırp tahtı böylece ilk kez Karađorđević ailesine geçti.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1844-01-01", b:"Sırp Medeni Kanunu kabul edildi", tur:"kanun",
  onem:2, dunya:1, kapsam:"ic", etiket:["kanun","reform","konu-hukuk"],
  yer_id:"Belgrad", devlet:"sirbistan-prensligi", gun:"1844 (gün doğrulanmadı)",
  d:"Avusturya medeni kanunu örnek alınarak hazırlanan Sırp Medeni Kanunu yürürlüğe girdi. Kanun, Osmanlı idaresinden çıkan toplumun mülkiyet, miras ve aile hukukunu Avrupa kalıplarına bağlayan ilk büyük kodifikasyondu.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1858-01-01", b:"Aziz Andreas Meclisi Aleksandar'ı devirdi, Miloş tahta döndü", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hukumdar","hanedan","konu-hanedan","konu-siyasi"],
  yer_id:"Belgrad", devlet:"sirbistan-prensligi", gun:"Aralık 1858 (gün doğrulanmadı)",
  d:"Aziz Andreas gününde toplanan Sırp meclisi Prens Aleksandar Karađorđević'i tahttan indirdi ve yaşlı Miloş Obrenoviç'i geri çağırdı. Obrenović hanedanı bu dönüşle yeniden iktidara geldi.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1860-09-26", b:"Miloş öldü, oğlu Mihailo Obrenoviç ikinci kez prens oldu", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hukumdar","olum","konu-hanedan"],
  yer_id:"Belgrad", devlet:"sirbistan-prensligi",
  d:"Miloş'un ölümüyle tahta geçen Mihailo, Balkan ittifakları kurmayı ve Osmanlı garnizonlarını Sırp kalelerinden çıkarmayı hedefleyen etkin bir dış siyaset izledi. Onun dönemi 1867 kale tahliyesiyle sonuç verecektir.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1862-06-15", b:"Çukur Çeşme olayı ve Belgrad Kalesi'nin şehri bombardımanı", tur:"kriz",
  onem:4, dunya:2, kapsam:"dis", etiket:["kriz","konu-askeri","konu-diplomasi"],
  yer_id:"Belgrad", devlet:"sirbistan-prensligi",
  gun:"15 Haziran 1862 (olay; eski takvimle 3 Haziran) — bombardıman iki gün sonra",
  d:"Belgrad'da bir çeşme başında Türk askerleriyle Sırplar arasında çıkan kavga çatışmaya dönüştü ve kale garnizonu şehri topa tuttu. Büyük devletlerin Eylül 1862 Kanlıca konferansında vardığı uzlaşmayla Müslüman sivil halk Belgrad'dan çıkarıldı, Soko ve Uziçe kaleleri yıkıldı; garnizon kalan dört kalede kaldı.",
  kaynak:"TDV `belgrad`: 'Burada yaşayan Türk halkının 1862'de, son Osmanlı garnizonunun da 1867'de ayrılmasıyla şehir tamamen Sırplar'ın eline geçti.' Olayın günü ve Kanlıca: M. B. Petrovich (1976)." },

{ t:"1868-06-10", b:"Prens Mihailo Obrenoviç Belgrad'da suikastle öldürüldü", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"ic", etiket:["olum","hukumdar","konu-hanedan","konu-siyasi"],
  yer_id:"Belgrad", devlet:"sirbistan-prensligi",
  d:"Kale tahliyesini sağlayan Mihailo, Belgrad yakınındaki Košutnjak korusunda Karađorđević yanlısı olduğu düşünülen suikastçilerce öldürüldü. Çocuksuz prensin yerine on dört yaşındaki yeğeni Milan geçti ve ülke bir naipler kurulunca yönetildi.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1869-01-01", b:"1869 Anayasası — meclisin yasama yetkisi genişledi", tur:"anayasa",
  onem:3, dunya:1, kapsam:"ic", etiket:["anayasa","reform","konu-siyasi","konu-hukuk"],
  yer_id:"Belgrad", devlet:"sirbistan-prensligi", gun:"Temmuz 1869 (gün doğrulanmadı)",
  d:"Naipler döneminde, Babıâli'ye danışılmadan hazırlanan yeni anayasa kabul edildi; meclis (Skupština) yasama sürecine ortak edildi. Metin, özerk prensliğin kendi temel kanununu tek başına yapabildiğini gösteren fiilî bir egemenlik adımıydı.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1876-10-29", b:"Cuniş (Đunis) bozgunu — Rus ültimatomuyla ateşkes", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas","toprak-kayip","konu-askeri","konu-diplomasi"],
  yer_id:"", odak_yer:"Niş", devlet:"sirbistan-prensligi",
  d:"Haziranda Osmanlı'ya savaş açan Sırp ordusu, Morava vadisinde Aleksinac-Cuniş hattında ağır bir yenilgiye uğradı ve Belgrad yolu Osmanlı ordusuna açıldı. Rusya'nın 31 Ekim ültimatomu Osmanlı ilerleyişini durdurdu; savaş diplomasiye devredildi.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976). TDV `sirbistan`: 1875'te başlayan isyanlar üzerine Sırbistan ve Karadağ'ın Osmanlı'ya karşı savaşa girdiğini yazar." },

{ t:"1877-02-28", b:"İstanbul'da Osmanlı-Sırp barışı — savaş öncesi durum", tur:"antlasma",
  onem:3, dunya:1, kapsam:"dis", etiket:["antlasma","konu-diplomasi"],
  yer_id:"", odak_yer:"Belgrad", devlet:"sirbistan-prensligi",
  d:"Sırbistan, savaş öncesi sınırlarına ve statüsüne dönen bir barış imzaladı; toprak kaybetmedi ama hiçbir şey de kazanamadı. Barış on ay sürdü: Rusya Osmanlı'ya savaş açınca Sırbistan Aralık 1877'de yeniden savaşa girecektir.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1878-01-10", b:"Sırp ordusu yedi haftalık kuşatmadan sonra Niş'i aldı", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"dis", etiket:["toprak-kazanc","kusatma","konu-askeri"],
  yer_id:"Niş", devlet:"sirbistan-prensligi", gun:"10 Ocak 1878 (gün: Petrovich; TDV 'Ocak 1878')",
  d:"Osmanlı kuvvetlerinin büyük bölümü Plevne'de bağlıyken Sırplar Niş'i kuşatıp ele geçirdi. Şehir Berlin Kongresi'yle Sırbistan'a bırakıldı; TDV'nin aktardığı İngiliz konsolos raporuna göre Müslüman nüfus birkaç ay içinde 8300'den 300'e indi.",
  kaynak:"TDV `nis`: '1878 yılının Ocak ayında … yedi hafta süren kuşatmanın ardından Niş'i ele geçirdiler.' Gün: M. B. Petrovich (1976)." },

// ───────────────────────── SIRBİSTAN KRALLIĞI

{ t:"1881-06-28", b:"Avusturya-Macaristan ile gizli sözleşme — dış siyaset Viyana'ya bağlandı", tur:"ittifak",
  onem:3, dunya:2, kapsam:"dis", etiket:["ittifak","antlasma","konu-diplomasi"],
  yer_id:"Belgrad", devletler:["sirbistan-prensligi","habsburg"],
  d:"Prens Milan, Sırbistan'ın Avusturya-Macaristan aleyhine hiçbir antlaşma yapmamayı taahhüt ettiği gizli bir sözleşme imzaladı; karşılığında Viyana, Sırbistan'ın krallık ilanını ve güneye (Makedonya'ya) genişlemesini destekleyecekti. Sözleşme ülkeyi on yıldan uzun süre Habsburg yörüngesinde tuttu.",
  kaynak:"B. Jelavich, History of the Balkans I (1983); M. B. Petrovich (1976)." },

{ t:"1889-03-06", b:"Kral Milan tahttan çekildi, oğlu I. Aleksandar kral oldu", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hukumdar","konu-hanedan"],
  yer_id:"Belgrad", devlet:"sirbistan-kralligi",
  d:"Slivnitsa yenilgisinin ve evlilik skandalının yıprattığı Milan, yeni anayasayı çıkardıktan kısa süre sonra reşit olmayan oğlu Aleksandar lehine tahttan çekildi. Aleksandar'ın 1903'teki öldürülmesiyle Obrenović hanedanı sona erecektir.",
  kaynak:"M. B. Petrovich, A History of Modern Serbia (1976)." },

{ t:"1906-01-01", b:"'Domuz Savaşı' — Avusturya-Macaristan ile gümrük savaşı", tur:"ekonomi",
  onem:3, dunya:2, kapsam:"dis", etiket:["ekonomi","kriz","konu-ekonomi","konu-diplomasi"],
  yer_id:"Belgrad", devletler:["sirbistan-kralligi","habsburg"], gun:"1906 (gün doğrulanmadı) — 1911'e dek sürdü",
  d:"Sırbistan'ın silah siparişini Fransa'ya vermesi ve Bulgaristan'la gümrük birliğine yönelmesi üzerine Avusturya-Macaristan, Sırp ihracatının belkemiği olan canlı hayvana sınırını kapattı. Sırbistan yeni pazarlar bularak dayandı; kriz Belgrad'ı Viyana'dan kopararak Rusya'ya yaklaştırdı.",
  kaynak:"B. Jelavich, History of the Balkans II (1983)." },

// ───────────────────────── SHS KRALLIĞI

{ t:"1919-08-12", b:"SHS ordusu Prekmurje'ye girdi — Mura ötesi Yugoslavya'ya katıldı", tur:"toprak-kazanc",
  onem:3, dunya:1, kapsam:"dis", etiket:["toprak-kazanc","konu-askeri"],
  yer_id:"Murska Sobota", devletler:["yugoslavya","macaristan-naiplik"],
  d:"Macar Sovyet Cumhuriyeti'nin çöküşünün ardından Sırp-Hırvat-Sloven kuvvetleri Mura nehrinin ötesindeki Prekmurje'yi işgal etti; bölge 1920 Trianon Antlaşması'yla Yugoslavya'ya bırakıldı.",
  ic_not_d:"Haritadaki 1919-08-12 kırılması (Lendava, Murska Sobota: macaristan-naiplik → yugoslavya) bu maddeyle karşılanır. macaristan-naiplik künyesi 1918-11-16→1923-10-29 (ölçüldü).",
  kaynak:"I. Banac, The National Question in Yugoslavia (1984) (Prekmurje'nin işgali, Ağustos 1919). TDV bölgeye değinmiyor." },

];
