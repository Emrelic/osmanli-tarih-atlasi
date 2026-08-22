// -*- coding: utf-8 -*-
// KRONOLOJI_ALTINORDA — Altın Orda (Deşt-i Kıpçak Hanlığı) kronolojisi
// ---------------------------------------------------------------------------
// 22 Ağustos 2026 · oturumlar/KRONOLOJI-SARTNAME.md şemasına göre yazıldı.
//
// KAPSAM: 1281-1502. Devletin kendisi 1241'de kurulmuştur (TDV: "1241-1502
// yılları arasında Deştikıpçak'ta hüküm süren bir Türk-Moğol devleti") ama
// atlasın zaman çizgisi 1281'de başladığı için kuruluş devri bu dosyada
// MADDE olarak değil, ilk maddelerin `d:` metinlerinde arka plan olarak
// geçer. 1241-1280 arası KASTEN boştur, eksik değildir.
//
// 🔴 YOĞUNLUK — Emre'nin 21 Ağustos hükmü (KRONOLOJI-SARTNAME.md §1,
// commit 72a4ac9): "Her seneye 2 madde" bir KOTA DEĞİL, bir ÖRNEKTİ.
// "10 sene boyunca kayda değer olay yoksa madde uyduracak hâlimiz yok.
// Kaç tane çıkarsa o kadar." Bu dosya buna göre yazıldı.
//   ⚠️ 1281-1312 arası SEYREKTİR ve bu bir kusur değildir: TDV'nin Tokta
//   (Toktay) Han için MÜSTAKİL MADDESİ YOKTUR (arandı — `tokta` slug'ı
//   arama sayfasına düşüyor, arama yalnız "TOKTAMIŞ HAN"ı döndürüyor).
//   Ana madde de o otuz yılı tek cümleyle geçiyor: "Bu ilk fetret devri
//   XIV. yüzyılın başlarında sona erdi." Kaynak bu kadarını verdi.
//
// 🔴 TDV'NİN KENDİ İÇİNDE ÇELİŞTİĞİ İKİ NOKTA — uydurmadım, İKİSİNİ DE
// yazıyorum ve dosyada MONOGRAFİ maddesini esas aldım (daha ince tanecik):
//   Özbek Han   ana madde `altin-orda-hanligi`: "Özbek Han (1315-1341)"
//               monografi  `ozbek-han`         : 1313 cülûs · 740 (1340) vefat
//               ⇒ ESAS ALINAN: 1313 / 1340 (monografi)
//   Toktamış    ana madde: "Toktamış Han (1379-1396)"
//               monografi `toktamis-han` başlığı: "Altın Orda hanı (1379-1397)"
//               ⇒ ESAS ALINAN: 1379 cülûs; saltanat sonu maddeye YAZILMADI
//
// 🔴 MÜKERRERLİK SINIRI (koordinatörün emri): 1441 sonrası Kırım Hanlığı
// `data/kronoloji_kirim.js`in (91 madde) işidir. Bu dosya Kırım'ı yalnız
// AYRILIŞ ANINDA ve Altın Orda'ya/Büyük Orda'ya DOKUNDUĞU yerde anar.
//
// 📌 `dunya:` puanları ortak olaylarda OKUNARAK alındı, yeniden takdir
// EDİLMEDİ (şartname §3.2: "aynı olay farklı dosyalarda farklı `dunya`
// taşırsa KUSURDUR"):
//     1380-09-08 Kulikovo          dunya:2   ← kronoloji_rusya.js:83
//     1382-08-26 Moskova'nın yakılışı dunya:2 ← kronoloji_rusya.js:88
//     1441-01-01 Kırım'ın ayrılışı  dunya:3   ← kronoloji_kirim.js:63
//     1475-06    Kefe'nin fethi     dunya:4   ← kronoloji_kirim.js:93
//     1476-01-01 Seyyid Ahmed       dunya:2   ← kronoloji_kirim.js:103
//     1480-11-11 Ugra               dunya:3   ← kronoloji_rusya.js:98
//     1502-01-01 Büyük Orda'nın sonu dunya:4  ← kronoloji_kirim.js:123
//
// KAYNAK DİSİPLİNİ (şartname §4 / CLAUDE.md §4) — bu turda HTTP 200 VE
// İÇERİĞİ OKUNARAK doğrulanan TDV slugları:
//     altin-orda-hanligi · ozbek-han · toktamis-han · kefe ·
//     kazan-hanligi · saray--sehir · nogaylar
// ÖLÜ ölçülen (302, arama sayfasına düşüyor) — "TDV'de yok" demeden önce
// arandı ve gerçekten yok:
//     altin-orda (doğrusu `altin-orda-hanligi`) · toktamis (doğrusu
//     `toktamis-han`) · tokta (KARŞILIĞI YOK — madde hiç yazılmamış)
// ⚠️ `kefe` maddesi 1346 kuşatmasını ve Kara Ölüm'ü HİÇ ANMIYOR (ölçtüm,
// metinde geçmiyor). O madde bu yüzden TDV'ye değil standart akademik
// kaynağa dayandırıldı ve `kaynak:` alanında AÇIKÇA öyle yazıyor.
//
// yer_id: `arac/girdi.py`nin okuduğu 2593 yerleşim adıyla BİREBİR
// eşleştirildi. Eşleşmeyenler UYDURULMADI, boş bırakıldı ve rapora
// sayıyla yazıldı.
// ---------------------------------------------------------------------------

window.KRONOLOJI_ALTINORDA = [

{ t:"1281-01-01", b:"İlk fetret devri sürüyor — Tuda Mengü döneminde devletin bütünlüğü tehlikede", tur:"ic-karisiklik", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyasi","taht-kavgasi"],
  yer_id:"Saray (Selitrennoye)",
  d:"Mengü Timur'un 1280'de ölümünün ardından tahta geçen Tuda Mengü (1280-1287) döneminde Altın Orda ilk büyük iç buhranına girdi. TDV bu evreyi ayrı bir dönem olarak adlandırır: hanların otoritesi zayıflamış, Cuci ulusunun batı kanadında beylerin nüfuzu hanınkini gölgelemişti. Atlasın zaman çizgisi bu dosyada 1281'de başladığı için devlet sahneye tam bu buhranın içinde girer.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Tuda Mengü Han zamanında (1280-1287) devlet bütünlüğü tehlikeye girdi'" },

{ t:"1300-01-01", b:"İlk fetret devri sona erdi, hanlık merkezî otoritesini yeniden kurdu", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyasi","idari"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV ilk fetret devrinin XIV. yüzyılın başlarında kapandığını yazar ama GÜN VERMEZ; buradaki 1300-01-01 o yüzden yuvarlak bir yıl başıdır, ölçülmüş bir gün değildir (CLAUDE.md §4: gün bilinmiyorsa YYYY-01-01). Bu tarihten sonra han otoritesi Saray'da yeniden toplanmış, devlet Özbek Han dönemindeki zirvesine giden yola girmiştir.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Bu ilk fetret devri XIV. yüzyılın başlarında sona erdi' (GÜN VERİLMİYOR, yıl yuvarlandı)" },

{ t:"1303-01-01", b:"Codex Cumanicus Suğdak'ta derlendi — Kıpçak Türkçesinin en eski sözlük ve metin derlemesi", tur:"kultur", onem:3, dunya:3, kapsam:"ic",
  etiket:["kultur","edebiyat","dini","iktisadi"],
  yer_id:"Sudak (Suğdak)",
  d:"İtalyan tüccarlar ve Fransisken misyonerler, Altın Orda'nın Kırım limanı Suğdak'ta Kıpçak Türkçesi-Latince-Farsça bir sözlük ve metin derlemesi hazırladı. İki sebeple yazılmıştı ve ikisi de hanlığın ne olduğunu anlatır: Kıpçakça Karadeniz'den Çin'e uzanan kervan yolunun TİCARET DİLİYDİ, ve misyonerlerin bozkırda karşılaştığı dildi. Derleme bugün Kıpçak Türkçesinin en eski ve en kapsamlı dil âbidesi sayılır — Altın Orda'dan geriye kalan en somut kültürel miras, bir devlet arşivi değil bir SÖZLÜKTÜR. ⚠️ TDV'nin `codex-cumanicus` diye müstakil maddesi YOKTUR (arandı, arama sayfasına düşüyor); yalnız başka maddelerin içinde 'Suğdak'ta hazırlanmış olan Codex Cumanicus' diye geçer. 1303 tarihi TDV'den değil, yazmanın ilk bölümünün kendi tarihlemesinden gelir.",
  kaynak:"bulunamadı — TDV'de müstakil `codex-cumanicus` maddesi YOK (302, arama sayfası). Suğdak'ta hazırlandığı TDV'nin `kipcaklar` ve `seyf-i-sarayi` maddelerinden alındı; 1303 tarihi için dayanak: standart akademik kaynak (yazmanın ilk bölümünün tarihlemesi)" },

{ t:"1313-01-01", b:"Tokta Han öldü, yerine yeğeni Özbek Han geçti", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["siyasi","hukumdar"],
  yer_id:"Saray (Selitrennoye)",
  d:"Tokta Han'ın ölümü üzerine, yaklaşık yirmi üç yaşındaki Özbek Han tahta çıktı. Saltanatı Altın Orda'nın en kudretli devri olacak, devletin hem sınırları hem de kurumsal düzeni bu dönemde oturacaktır. ⚠️ TDV kendi içinde çelişiyor: ana madde saltanatı '1315-1341' verir, Özbek Han'ın kendi maddesi 1313 cülûsunu ve 740 (1340) vefatını yazar — bu dosya daha ince tanecikli olan monografi maddesini esas aldı.",
  kaynak:"TDV, madde: ozbek-han — 'Tokta Han'ın ölümü üzerine han oldu'; saltanat 1313-1340. ⚠️ ana madde altin-orda-hanligi '1315-1341' diyor, ÇELİŞKİ kayda geçirildi" },

{ t:"1314-05-11", b:"Özbek Han İlhanlı hükümdarı Olcaytu'ya elçi gönderdi", tur:"diplomasi", onem:2, dunya:2, kapsam:"dis",
  etiket:["diplomasi","siyasi"],
  yer_id:"",
  d:"Cülûsunun hemen ardından Özbek Han, Altın Orda'nın güneydeki büyük rakibi İlhanlılar'a elçi yolladı. İki Moğol devleti arasındaki Azerbaycan-Kafkasya çekişmesi Berke Han'dan beri sürüyordu; elçilik bu çekişmeyi bir süreliğine diplomasi zeminine çekme girişimidir. yer_id boş: elçiliğin ulaştığı İlhanlı ordugâhı kayıtlarda tek bir yerleşime bağlanmıyor.",
  kaynak:"TDV, madde: ozbek-han (11 Mayıs 1314 tarihli elçilik)" },

{ t:"1314-01-01", b:"Kahire'ye 174 kişilik büyük elçilik heyeti gönderildi — Memlük ittifakının tazelenmesi", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis",
  etiket:["diplomasi","siyasi","ittifak"],
  yer_id:"",
  d:"Özbek Han, Berke Han'dan beri süren Altın Orda-Memlük yakınlaşmasını yüz yetmiş dört kişilik olağanüstü kalabalık bir heyetle tazeledi. İki devleti birleştiren şey ortak düşmandı: İlhanlılar. Bu eksen, Kıpçak bozkırından Mısır'a giden köle (memlük) akışının da siyasî çerçevesidir. Gün bilinmediği için yıl başına yazıldı.",
  kaynak:"TDV, madde: ozbek-han — 174 kişilik Kahire elçiliği (GÜN VERİLMİYOR)" },

{ t:"1318-01-01", b:"Özbek Han Derbend'i aşarak İlhanlı kuvvetlerine saldırdı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","siyasi"],
  yer_id:"Derbend",
  d:"Diplomasinin çözemediğini Özbek Han ordusuyla denedi: Kafkasya'nın demir kapısı Derbend'i geçip Emîr Çoban komutasındaki İlhanlı kuvvetlerine yürüdü. Derbend geçidi iki devlet arasındaki tek pratik geçit olduğu için Altın Orda-İlhanlı savaşlarının değişmez sahnesidir.",
  kaynak:"TDV, madde: ozbek-han (1318, Derbend'i geçiş, Emir Çoban)" },

{ t:"1319-01-01", b:"Altın Orda kuvvetleri Trakya'yı yağmaladı — yağma kırk gün sürdü", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","yagma"],
  yer_id:"",
  d:"Altın Orda süvarileri Tuna'yı aşıp Bizans'ın Trakya topraklarına girdi ve TDV'nin ifadesiyle 'yağma kırk gün devam etti'. Özbek Han'ın kızkardeşi Bizans imparatoruyla evliydi; akın, hanlığın Balkanlar'daki nüfuzunun askerî yüzüdür. yer_id boş: kaynak tek bir şehir adı vermiyor, bölge adı veriyor.",
  kaynak:"TDV, madde: ozbek-han — 1319-1320 Trakya akını, 'yağma kırk gün devam etti'" },

{ t:"1320-01-01", b:"🔴 Özbek Han İslâm'ı kabul etti ve Muhammed adını aldı — Altın Orda'nın İslâmlaşması", tur:"din", onem:5, dunya:4, kapsam:"ic",
  etiket:["dini","sosyal","idari"],
  yer_id:"Saray (Selitrennoye)",
  d:"Özbek Han 720 (1320) yılında İslâm'ı kabul ederek Muhammed adını aldı; bu tarihten sonraki sikkelerinde 'es-Sultânü'l-a'zam Gıyâseddin Muhammed Özbek Han el-Âdil' ibaresi yer aldı. Bu, bir hükümdarın şahsî tercihinden ibaret değildir: Berke Han'ın kişisel Müslümanlığından farklı olarak bu kez din DEVLETİN dini oldu ve Deşt-i Kıpçak'ın Türkleşmesiyle İslâmlaşması aynı süreç hâline geldi. Saray başta olmak üzere şehirler camiler, medreseler ve tekkelerle donandı. Bugünkü Tatar, Başkurt, Kazak, Nogay ve Kırım Türklerinin Müslüman kimliği bu karara dayanır.",
  kaynak:"TDV, madde: ozbek-han — '720'de (1320)' + sikke ibaresi birebir; TDV, madde: altin-orda-hanligi — 'Özbek Han zamanında ... camiler, medreseler ve tekkelerle süslenmiştir'" },

{ t:"1320-05-16", b:"Mısır Memlük hânedanından Tolun-Bige Hatun ile evlilik anlaşması", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","ittifak","sosyal"],
  yer_id:"",
  d:"Memlük ittifakı bir evlilikle mühürlendi. Hanedanlar arası evlilik bozkır diplomasisinde bir anlaşma metninden daha bağlayıcıdır; İslâm'ın kabulüyle aynı yıla düşmesi de tesadüf değildir — Altın Orda artık Memlük Mısır'ıyla yalnız siyasî değil dinî bir ortaklık da kuruyordu.",
  kaynak:"TDV, madde: ozbek-han (16 Mayıs 1320)" },

{ t:"1327-01-01", b:"Tver isyanı bastırıldı, Moskova Knezi İvan Kalita 'büyük knez' yapıldı", tur:"isyan", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","siyasi","idari"],
  yer_id:"Tver",
  d:"Tver'de Altın Orda'ya karşı çıkan büyük isyan, Moskova'nın da katıldığı bir Moğol misillemesiyle bastırıldı ve Özbek Han büyük knezlik yarlığını İvan Danilovich'e (İvan Kalita) verdi. 🔴 Bu maddenin ağırlığı Altın Orda için değil, SONUCU içindir: han, Rus knezlikleri arasında Moskova'yı seçerek kendi eliyle ilerideki rakibini büyüttü. Moskova'nın Rus topraklarının siyasî merkezi hâline gelişi bu yarlıkla başlar (bkz. [[moskova]], [[rusya]]).",
  kaynak:"TDV, madde: ozbek-han (1327 Tver isyanı, İvan Danilovich); data/devletler.js moskova künyesi" },

{ t:"1333-01-01", b:"İbn Battûta Saray'ı ve Kefe'yi gördü — hanlığın zirvesindeki şehir hayatının tanıklığı", tur:"kultur", onem:3, dunya:2, kapsam:"ic",
  etiket:["kultur","sosyal","iktisadi"],
  yer_id:"Saray (Selitrennoye)",
  d:"Faslı seyyah İbn Battûta 1330'lu yıllarda Altın Orda topraklarını dolaştı. Saray'ı 'atlı bir yolcunun sabahtan akşama ancak kat edebileceği' genişlikte, on üç cuma camili, çarşıları dolup taşan bir şehir olarak anlattı; Türk, Moğol, Alan, Çerkez, Rum ve Rus cemaatleri ayrı mahallelerde oturuyordu. Kefe'de ise nüfusun çoğunluğunun Cenevizli olduğunu, yanı başında Müslüman mescidleri bulunduğunu kaydetti. ⚠️ Seyahatin bu bölümünün TAM GÜNÜ kaynakta yok; 1333 kabaca ortalanmış bir yıldır, kesin değildir.",
  kaynak:"TDV, madde: saray--sehir (İbn Battûta tasviri, on üç cuma camii, ~10 km²) + TDV, madde: kefe ('1330'larda ... çoğunluğu Cenevizli'). ⚠️ yıl yaklaşıktır" },

{ t:"1340-01-01", b:"Özbek Han vefat etti — hanlığın en kudretli devri kapandı", tur:"hukumdar", onem:5, dunya:3, kapsam:"ic",
  etiket:["siyasi","hukumdar"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV'nin ifadesiyle 'kaynaklar 740 (1340) yılında vefat ettiği konusunda birleşir'. Yirmi yedi yıllık saltanatı boyunca Altın Orda İslâmlaştı, şehirleşti, Memlük ve Bizans'la evlilik bağları kurdu, İlhanlılar'a karşı ayakta kaldı. Ardından gelen Canıbek dönemi bu düzeni bir süre daha sürdürecek, fakat 1357'den sonra devlet bir daha toparlanamayacaktır.",
  kaynak:"TDV, madde: ozbek-han — '740 (1340) yılında vefat ettiği konusunda kaynaklar birleşir'" },

{ t:"1342-01-01", b:"Canıbek Han tahta çıktı — bütünlüğün korunduğu son saltanat", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyasi","hukumdar"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV, Özbek Han ile Canıbek Han'ın saltanatlarını birlikte anar: 'Altın Orda'nın bütünlüğü yeniden sağlandı ve devlet eski kudretli günlerine kavuştu.' Canıbek dönemi (1342-1357) hanlığın kesintisiz merkezî otoriteye sahip olduğu SON devirdir; ondan sonrası kargaşadır.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Canıbeg Han'ın (1342-1357) saltanatları döneminde ... eski kudretli günlerine kavuştu'" },

{ t:"1341-01-01", b:"Kefe güçlü surlarla çevrilmeye başlandı — Ceneviz kolonisinin tahkimi", tur:"iktisadi", onem:2, dunya:2, kapsam:"ic",
  etiket:["iktisadi","mimari","sosyal"],
  yer_id:"Kefe",
  d:"Cenevizliler 1341-1348 arasında Kefe'yi güçlü surlarla çevirdi. Kefe, Altın Orda toprağında duran ama Ceneviz'in yönettiği bir liman olarak hanlığın dünya ticaretine açılan kapısıydı: Kıpçak bozkırının kölesi, kürkü ve tahılı buradan Akdeniz'e; İtalyan kumaşı ve gümüşü buradan bozkıra geçiyordu. Surların yükselmesi, kolonilerin han otoritesinden görece bağımsızlaştığının da işaretidir.",
  kaynak:"TDV, madde: kefe — '1341-1348' surlarla çevrilme" },

{ t:"1346-01-01", b:"🔴 Kara Ölüm Kefe kuşatmasından Akdeniz'e yayıldı — Avrupa nüfusunun üçte biri öldü", tur:"salgin", onem:4, dunya:5, kapsam:"dis",
  etiket:["sosyal","salgin","iktisadi"],
  yer_id:"Kefe",
  d:"Altın Orda kuvvetlerinin Ceneviz kolonisi Kefe'yi kuşatması sırasında ordugâhta veba çıktı; kaçan Ceneviz gemileri hastalığı Konstantinopolis'e, oradan Messina ve Marsilya üzerinden bütün Avrupa'ya taşıdı. Kara Ölüm 1347-1351 arasında Avrupa nüfusunun yaklaşık üçte birini götürdü, feodal düzeni ve emek piyasasını kalıcı biçimde değiştirdi. 🔴 `dunya:5` — bu, Altın Orda tarihinin dünya tarihine en geniş dokunduğu andır; hanlığın bir kuşatması, bir kıtanın demografisini değiştirdi. ⚠️ Salgının Kefe'den yayılışını çağdaş tanık Gabriele de' Mussi anlatır; kuşatma-bulaşma zincirinin ayrıntısı tarihçiler arasında tartışmalıdır, yayılışın Kefe üzerinden olduğu ise kabul görür.",
  kaynak:"bulunamadı — TDV `kefe` maddesi 1346 kuşatmasını ve vebayı HİÇ ANMIYOR (metin okundu, geçmiyor). Dayanak: standart akademik kaynak (Benedictow, The Black Death 1346-1353; Cambridge History of Inner Asia)" },

{ t:"1357-01-01", b:"Berdibek Han tahta çıktı — ikinci ve yıkıcı kargaşa devrinin başlangıcı", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyasi","hukumdar","taht-kavgasi"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV: 'Berdibeg Han'ın (1357-1359) saltanatı yıllarında Altın Orda yeniden bir karışıklık devrine girdi.' Canıbek'in ölümüyle kurulan denge çöktü; iki yıl sonra başlayacak taht kavgası devleti yirmi yıl boyunca felç edecektir.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Berdibeg Han'ın (1357-1359) saltanatı yıllarında ... karışıklık devrine girdi'" },

{ t:"1360-01-01", b:"🔴 Büyük Kargaşa — yirmi yılda on dört han tahta çıktı, hiçbiri devleti toparlayamadı", tur:"ic-karisiklik", onem:5, dunya:3, kapsam:"ic",
  etiket:["siyasi","taht-kavgasi","ic-savas"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV'nin verdiği sayı tek başına dönemi anlatıyor: '1360-1380 yılları arasındaki bu dönemde hükümdarlık makamına on dört han geçtiği halde hiçbiri devleti eski kudretine kavuşturamadı.' Rus kroniklerinin 'Büyük Kargaşa' (velikaya zamyatnya) dediği bu devirde gerçek güç hanlarda değil, onları tahta çıkarıp indiren beylerdeydi — batıda Mamay Mirza, doğuda Ak Orda hanları. Moskova'nın vergi ödemeyi aksatmaya, Litvanya'nın batı topraklarını almaya başlaması bu boşluktandır.",
  kaynak:"TDV, madde: altin-orda-hanligi — '1360-1380 ... on dört han geçtiği halde hiçbiri devleti eski kudretine kavuşturamadı'" },

{ t:"1380-09-08", b:"Kulikovo Muharebesi — Mamay'ın ordusu Moskova Knezi Dmitri Donskoy'a yenildi", tur:"savas", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kayip"],
  yer_id:"",
  d:"Batı Deşt-i Kıpçak'ın hâkimi Mamay Mirza, Don'a dökülen Nepryadva boyundaki Kulikovo sahasında Moskova Knezi Dmitri'ye yenildi. Askerî sonucu kalıcı olmadı — iki yıl sonra Toktamış Moskova'yı yakıp haracı yeniden dayattı — ama Rus tarihyazımı bu günü Tatar boyunduruğuna direnişin sembolik başlangıcı sayar. 🔴 Altın Orda açısından asıl önemi şudur: yenilen han değil bir BEYDİ, ve yenilgisi Toktamış'a kapıyı açtı. yer_id boş: muharebe sahasının atlasta yerleşim kaydı yok (aynı olay `kronoloji_rusya.js`te de yer_id'siz).",
  kaynak:"TDV, madde: toktamis-han — '8 Eylül 1380 tarihinde Kulikovskaya savaşında Ruslar'a yenilerek Kırım'a dönen ... Mamay Mirza'; dunya:2 kronoloji_rusya.js:83'ten OKUNDU" },

{ t:"1380-01-01", b:"Toktamış, Kalka boyunda Mamay'ı yendi — yirmi yıllık kargaşa sona erdi, devlet yeniden birleşti", tur:"savas", onem:5, dunya:3, kapsam:"ic",
  etiket:["askeri","siyasi","ic-savas"],
  yer_id:"",
  d:"Kulikovo'dan yenik dönen Mamay Mirza'yı, Timur'un desteklediği Toktamış Han, Don'a dökülen Kalka ırmağı boyunda mağlûp etti. TDV bu zaferin sonucunu açıkça yazar: yirmi yıl süren iç mücadelenin ardından Altın Orda yeniden tek elde toplandı. 🔴 Devletin son gerçek toparlanışıdır; bundan sonraki her birleşme girişimi başarısız olacaktır. ⚠️ Kaynak yıl veriyor, GÜN vermiyor — Kulikovo'dan sonrasına düştüğü kesin, tam günü değil.",
  kaynak:"TDV, madde: toktamis-han — 'Don nehrine dökülen Kalka ırmağı boyunda mağlûp etti' (GÜN VERİLMİYOR)" },

{ t:"1382-08-26", b:"Toktamış Moskova'yı hile ile alıp yaktı — haraç yeniden dayatıldı", tur:"savas", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","yagma","toprak-kazanc"],
  yer_id:"Moskova",
  d:"Toktamış Han 23-26 Ağustos 1382'de Moskova'yı kuşattı, şehri hile ile ele geçirip yaktı ve büyük ganimetle döndü. Kulikovo'nun kazanımları böylece iki yıl içinde silindi: Rus knezlikleri yeniden haraca bağlandı. Altın Orda tarihinde bu, hanlığın Rusya üzerindeki hâkimiyetini SON KEZ askerî güçle tesis ettiği andır.",
  kaynak:"TDV, madde: toktamis-han — '23-26 Ağustos 1382'; dunya:2 kronoloji_rusya.js:88'den OKUNDU" },

{ t:"1383-01-01", b:"Kefe surların dışına taştı, yeni bir dış sur çevrildi — koloninin büyümesi", tur:"iktisadi", onem:2, dunya:1, kapsam:"ic",
  etiket:["iktisadi","mimari","sehircilik"],
  yer_id:"Kefe",
  d:"Şehir 1383-1386 arasında mevcut surların dışına taşınca ikinci bir sur hattı örüldü. Altın Orda merkezî otoritesinin çözüldüğü yıllarda Kefe'nin BÜYÜMESİ dikkate değerdir: bozkırdaki siyasî kargaşa Karadeniz ticaretini kesmemiş, aksine kolonilerin özerkliğini artırmıştır.",
  kaynak:"TDV, madde: kefe — '1383-1386' dış surlar" },

{ t:"1391-06-01", b:"🔴 Kunduzca (Kondurça) Savaşı — Timur, Toktamış'ı ilk kez ağır yenilgiye uğrattı", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","toprak-kayip"],
  yer_id:"",
  d:"Toktamış'ı tahta çıkaran Timur'la arası Azerbaycan meselesi yüzünden açılmıştı. İki ordu Receb 793'te (Haziran 1391) Kunduzca (Kondurça) ırmağı boyunda karşılaştı; Toktamış ağır bir yenilgi aldı. Bu, Altın Orda'nın belini kıran iki seferin birincisidir. ⚠️ Kaynak ay veriyor, gün vermiyor — 06-01 ayın başına yazıldı, ölçülmüş gün değildir. yer_id boş: ırmak boyunun atlasta yerleşim karşılığı yok.",
  kaynak:"TDV, madde: toktamis-han — 'Receb 793 (Haziran 1391)' Kundurzha; TDV, madde: altin-orda-hanligi — '1391'de Kondurca'da' (GÜN VERİLMİYOR)" },

{ t:"1391-09-01", b:"Seyf-i Sarâyî Gülistan Tercümesi'ni tamamladı — Türkçenin ilk Gülistan çevirisi", tur:"kultur", onem:3, dunya:2, kapsam:"ic",
  etiket:["kultur","edebiyat"],
  yer_id:"Saray (Selitrennoye)",
  d:"Nisbesini Altın Orda'nın başkenti Saray'dan alan Kıpçak şairi Seyf-i Sarâyî, Sa'dî-i Şîrâzî'nin Gülistan'ını 1 Eylül 1391'de Türkçeye çevirmeyi tamamladı — mensur kısımları nesirle, manzum kısımları şiirle. Bu, Gülistan'ın TÜRKÇEYE İLK ÇEVİRİSİDİR ve Codex Cumanicus'tan sonra Kıpçak Türkçesinin en önemli dil âbidesi sayılır; XIX. yüzyıla kadar Orta Asya Türkleri arasında ders kitabı olarak okundu. 📌 Tarihin anlamı yalnız edebî değil: Timur'un Kunduzca'da hanlığın ordusunu dağıttığı yıl, aynı hanlığın yetiştirdiği bir şair Fars klasiğini Türkçeye kazandırıyordu. Bir devletin askerî çöküşüyle kültürel verimi aynı takvime düşebilir.",
  kaynak:"TDV, madde: seyf-i-sarayi — Gülistan Tercümesi '1 Eylül 1391'de tamamlandı', 'Türkçeye ilk Gülistan tercümesi'" },

{ t:"1393-01-01", b:"Toktamış Han, Lehistan-Litvanya Kralı Jagiello'ya yarlık gönderdi — bozkır diplomasisinin belgesi", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","idari","hukuki"],
  yer_id:"",
  d:"Toktamış Han'ın 1393'te Jagiello'ya gönderdiği yarlık, Altın Orda diplomasisinin günümüze ulaşan somut örneklerindendir. Yarlık, Türk-Moğol devletlerinde hükümdar buyruğudur ve Altın Orda'da iki türü vardı: tâbi ülke hükümdarlarına gönderilen DİPLOMATİK yarlıklar, ve vergiden ve devlet hizmetinden muafiyet tanıyan TARHANLIK yarlıkları. Her yeni han, seleflerinin yarlıklarını ya onaylar ya iptal ederdi — yani yarlık aynı zamanda bir meşruiyet tazeleme aracıydı. 🔴 TDV'nin hükmü açıktır: yarlıklar, Altın Orda'nın siyasî, iktisadî, askerî ve idarî yapısını anlamanın başlıca kaynağıdır. ⚠️ Yarlığın GÜNÜ kaynakta yok, yıl başına yazıldı.",
  kaynak:"TDV, madde: yarlik — '1393 tarihli Toktamış'ın Jagiello'ya yarlığı'; yarlık türleri ve tarhanlık aynı maddeden (GÜN VERİLMİYOR)" },

{ t:"1394-01-01", b:"Seyf-i Sarâyî Süheyl ü Güldürsün mesnevisini bitirdi — çağın olaylarını anlatan Kıpçak mesnevisi", tur:"kultur", onem:2, dunya:1, kapsam:"ic",
  etiket:["kultur","edebiyat"],
  yer_id:"Saray (Selitrennoye)",
  d:"Seyf-i Sarâyî, bir aşk hikâyesi anlatırken kendi çağının olaylarını da işleyen Süheyl ü Güldürsün mesnevisini 1394'te tamamladı. TDV şairin '796/1394'ten sonra' yaşadığını bu eserden çıkarır. Altın Orda'nın kendi hânedan tarihini yazacak bir vekāyi'nâme geleneği bırakmaması, bu tür edebî eserleri dönemin dolaylı tanıkları hâline getirir.",
  kaynak:"TDV, madde: seyf-i-sarayi — 'Süheyl ü Güldürsün ... 1394'te bitirilen mesnevi'" },

{ t:"1395-04-15", b:"🔴 Terek Savaşı — Timur ikinci kez yendi, Altın Orda bir daha toparlanamadı", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","toprak-kayip"],
  yer_id:"Terek deltası (Kızlar)",
  d:"23 Cemâziyelâhir 797'de (15 Nisan 1395) Terek ırmağı boyunda Timur, Toktamış'ı ikinci ve kesin kez bozguna uğrattı. Ardından Altın Orda şehirlerini yağmaladı. 🔴 Bu iki sefer, hanlığı yıkan asıl darbedir: Rus knezlikleri ya da iç kargaşa değil, DOĞUDAN gelen bu iki yenilgi devletin şehirlerini, ticaret ağını ve hazinesini birlikte çökertti. Bundan sonraki yüz yedi yıl bir çözülme hikâyesidir.",
  kaynak:"TDV, madde: toktamis-han — '23 Cemâziyelâhir 797'de (15 Nisan 1395)'; TDV, madde: altin-orda-hanligi — 'Nisan 1395'te de Terek'te büyük bir yenilgiye uğrattı'" },

{ t:"1395-01-01", b:"🔴 Timur'un seferleri Saray'ı ve Altın Orda şehirlerini harap etti — Yeni Saray bir daha kurulamadı", tur:"isgal", onem:5, dunya:4, kapsam:"ic",
  etiket:["askeri","sehircilik","iktisadi","yagma"],
  yer_id:"Yeni Saray (Tsarev)",
  d:"Timur'un 1395-1396 seferleri Saray'ı ve hanlığın öteki şehirlerini tahrip etti; TDV'nin ifadesiyle Sarây-ı Cedîd (Yeni Saray) harabeye döndü, Sarây-ı Batu ise küçülerek 1578'e kadar sürdü. 🔴 Bu maddenin ağırlığı sadece askerî değil İKTİSADÎDİR: Altın Orda'nın gücü bozkır süvarisinden değil, o süvarinin koruduğu KERVAN YOLUNDAN ve o yolun beslediği şehirlerden geliyordu. Şehirler yıkılınca vergi tabanı, sikke darbı ve zanaat da yıkıldı — hanlık göçebe bir konfederasyona geriledi ve bir daha imparatorluk olamadı.",
  kaynak:"TDV, madde: saray--sehir — 'Timur'un seferleri (1395-1396) Saray'ı ... devastated; Sarây-ı Cedîd harabe'" },

{ t:"1396-01-01", b:"Timur Kutluk, Timur tarafından Altın Orda hükümdarı ilân edildi", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyasi","hukumdar","vassal"],
  yer_id:"Saray (Selitrennoye)",
  d:"Timur, yendiği Toktamış'ın yerine kendi adayı Timur Kutluk'u (1396-1400) han ilân etti. Altın Orda tahtının artık DIŞARIDAN belirlendiği ilk açık andır; hanlık bağımsız bir güç olmaktan çıkıp bir nüfuz alanına dönüşmüştür.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Timur Kutluk (1396-1400), Timur tarafından Altın Orda hükümdarı ilân edildi'" },

{ t:"1399-01-01", b:"Edigü Mirza, Toktamış ve Litvanya ordusunu yendi — beylerin hanlar üzerindeki hâkimiyeti kesinleşti", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","siyasi","ic-savas"],
  yer_id:"",
  d:"Tahtını geri almak için Litvanya Büyük Dukası Vytautas ile ittifak kuran Toktamış, Mangıt beyi Edigü ve Timur Kutluk'un kuvvetlerine yenildi (Vorskla ırmağı). Yenilgi iki şeyi birden belirledi: Toktamış bir daha tahta dönemedi, ve Litvanya'nın bozkıra yayılma girişimi durdu. 🔴 Asıl sonuç kurumsaldır — Cengiz soyundan OLMAYAN Edigü, han olamadığı hâlde devleti fiilen yönetmeye başladı.",
  kaynak:"TDV, madde: toktamis-han — 'Edigey'in kuvvetlerine 1399'da yenilmesi'; TDV, madde: altin-orda-hanligi — 'Edige Mirza yönetimi ele geçirerek 1419'a kadar devleti idare etti'" },

{ t:"1405-01-01", b:"Toktamış Han öldürüldü — devleti son kez birleştiren hanın sonu", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyasi","hukumdar"],
  yer_id:"",
  d:"1399'daki yenilgiden sonra kaçak yaşayan Toktamış, 1405'te takip edildiği sırada Karaton ırmağı yakınında bir uçuruma düşerek öldü. Altın Orda'yı bir bütün olarak yöneten SON han odur; ondan sonra taht, beylerin elinde bir araç hâline geldi.",
  kaynak:"TDV, madde: toktamis-han — '1405 yılına kadar' kaçak yaşamı ve Karaton yakınındaki ölümü" },

{ t:"1419-01-01", b:"Edigü'nün yirmi yıllık fiilî idaresi sona erdi", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyasi","idari"],
  yer_id:"",
  d:"TDV: 'Edige Mirza yönetimi ele geçirerek 1419'a kadar devleti idare etti.' Cengiz soyundan gelmediği için han unvanı alamayan, ama hanları tayin eden bir beyin yirmi yıl süren idaresi, Altın Orda'da meşruiyetin nasıl aşındığının en açık göstergesidir.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Edige Mirza ... 1419'a kadar devleti idare etti'" },

{ t:"1420-01-01", b:"Edigü öldü — oğulları Nogay Ordası'nın çekirdeğini kurdu", tur:"bolunme", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyasi","bolunme"],
  yer_id:"",
  d:"TDV, Nogaylar maddesinde tarihi birebir verir: 'Edige'nin (Edigü/İdigü) 823'te (1420) ölümünden sonra oğulları' Deşt-i Kıpçak'ta çeşitli hanların emirleri olarak siyasete devam etti. Nogay Ordası bu mirastan doğdu — Altın Orda'dan kopan beş yapının kronolojik olarak İLKİDİR ve ötekilerden farkı, bir HANEDANDAN değil bir BEY AİLESİNDEN doğmuş olmasıdır (bkz. [[nogay]]).",
  kaynak:"TDV, madde: nogaylar — 'Edige'nin ... 823'te (1420) ölümünden sonra oğulları'" },

{ t:"1419-06-01", b:"Uluğ Muhammed Han seçildi — ve prenslerin taht kavgasıyla indirildi", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyasi","hukumdar","taht-kavgasi"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV: 'Uluğ Muhammed Han (1419-1422)' tahta seçildi, fakat 'saltanat mücadelesine girmiş olan prensler tarafından tahttan indirildi'. Bu kısa saltanatın önemi sonrasındadır: tahtını kaybeden Uluğ Muhammed doğuya çekilip Kazan'da kendi hanlığını kuracaktır. ⚠️ Kaynak yıl veriyor, gün vermiyor; 06-01 aynı yıl içinde Edigü'nün ölümünden sonraya düşürmek için seçilmiş bir sıralama tarihidir, ÖLÇÜLMÜŞ GÜN DEĞİLDİR.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Uluğ Muhammed Han (1419-1422) ... prensler tarafından tahttan indirildi' (GÜN VERİLMİYOR)" },

{ t:"1434-01-01", b:"Hacı Giray Cenevizliler'i yenerek Kefe üzerinde meşrû hâkim tanındı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","siyasi","iktisadi"],
  yer_id:"Kefe",
  d:"TDV Kefe maddesi 1434'te Hacı Giray'ın Cenevizliler'i yenerek şehrin meşrû hâkimi sayıldığını yazar. Bu, Kırım'daki ayrılığın 1441'deki resmî ilândan YEDİ YIL ÖNCE fiilen başladığını gösterir: Hacı Giray daha han ilân edilmeden Karadeniz ticaretinin en zengin limanı üzerinde söz sahibi olmuştu. Ayrılıkların önce siyasî değil İKTİSADÎ olarak gerçekleştiğinin örneğidir.",
  kaynak:"TDV, madde: kefe — '1434: Hacı Giray Cenevizliler'i yener, meşrû hâkim olur'" },

{ t:"1437-01-01", b:"🔴 Kazan Hanlığı ayrıldı — Uluğ Muhammed Saray'dan kopup İdil boyunda kendi hanlığını kurdu", tur:"bolunme", onem:5, dunya:3, kapsam:"ic",
  etiket:["siyasi","bolunme","toprak-kayip"],
  yer_id:"Kazan",
  d:"Tahtını kaybeden Uluğ Muhammed, TDV'nin ifadesiyle 'Saray'dan ayrılıp Kazan'a geldi' ve orada kendi hanlığını kurdu. İdil'in orta mecrası, kürk ve tahıl ticaretinin düğüm noktası, artık Saray'a bağlı değildi. ⚠️ TDV iki görüş aktarır: kuruluş ya 1437'de Uluğ Muhammed ile, ya 1445'te oğlu Mahmud'un idareyi almasıyladır — bu dosya `data/devletler.js`teki `kazan` künyesiyle uyum için 1437'yi esas aldı, ikinci görüş burada kayda geçirildi. 🔴 Koordinatörün şartnamesinde '1438' yazıyordu; TDV'de VE künyede böyle bir yıl YOK — düzeltildi (bkz. [[kazan]]).",
  kaynak:"TDV, madde: kazan-hanligi — '1437'de Uluğ Muhammed Han ... Saray'dan ayrılıp Kazan'a geldi'; ikinci görüş: 1445, oğlu Mahmud" },

{ t:"1441-01-01", b:"🔴 Kırım Hanlığı ayrıldı — Hacı Giray bağımsızlığını ilân etti", tur:"bolunme", onem:5, dunya:3, kapsam:"ic",
  etiket:["siyasi","bolunme","toprak-kayip"],
  yer_id:"Eski Kırım (Solhat)",
  d:"Hacı Giray, Altın Orda'dan bağımsızlığını ilân ederek Kırım Hanlığı'nı kurdu. Ayrılan parçaların en uzun ömürlüsü budur: Kırım 1783'e kadar yaşayacak, 1475'ten sonra Osmanlı himayesine girerek Altın Orda mirasının Akdeniz dünyasına bağlanan kolu olacaktır. 📌 Bu dosya Kırım'ı buradan sonra yalnız Altın Orda'ya/Büyük Orda'ya DOKUNDUĞU yerde anar; hanlığın kendi kronolojisi `data/kronoloji_kirim.js`tedir (bkz. [[kirim]]).",
  kaynak:"TDV, madde: kirim; data/devletler.js kirim künyesi; dunya:3 kronoloji_kirim.js:63'ten OKUNDU" },

{ t:"1465-01-01", b:"Ahmed Han tahta çıktı — Büyük Orda'yı son kez toparlama girişimi", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyasi","hukumdar"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV: 'Ahmed Han da (1465-1481) mücadeleyi sürdürdü.' Elinde kalan çekirdeğe artık Büyük Orda deniyordu: Kazan ve Kırım çoktan ayrılmış, Nogaylar kendi başına buyruk hâle gelmişti. Ahmed Han'ın bütün siyaseti dağılan mirası askerî güçle geri toplama üzerineydi ve 1480'de Ugra'da bu siyaset çökecektir.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Ahmed Han da (1465-1481) mücadeleyi sürdürdü'" },

{ t:"1466-01-01", b:"Astarhan (Ejderhan) Hanlığı ayrıldı — Hazar'ın kuzey kapısı koptu", tur:"bolunme", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyasi","bolunme","toprak-kayip","iktisadi"],
  yer_id:"Astrahan",
  d:"Küçük Muhammed Han'ın torunu Kasım Han, İdil'in Hazar'a döküldüğü yerde Ejderhan'da kendi hanlığını kurdu. Kayıp yalnız toprak değildir: Astarhan, Hazar üzerinden İran ve Orta Asya'ya giden ticaretin gümrük kapısıydı. Kazan kuzey ticaretini, Kırım Karadeniz'i, Astarhan Hazar'ı aldı — Büyük Orda'ya bozkırın kendisi kaldı (bkz. [[astarhan]]).",
  kaynak:"TDV, madde: ejderhan-hanligi; data/devletler.js astarhan künyesi — 'Küçük Muhammed Han'ın torunu Kasım Han, Ejderhan'da hanlığını kurdu'" },

{ t:"1475-06-01", b:"Osmanlı Kefe'yi fethetti — Karadeniz ticareti Altın Orda mirasının elinden çıktı", tur:"savas", onem:4, dunya:4, kapsam:"dis",
  etiket:["askeri","iktisadi","toprak-kayip"],
  yer_id:"Kefe",
  d:"Gedik Ahmed Paşa komutasındaki yüz parçalık Osmanlı donanması Haziran 1475'te Kefe'yi ve Ceneviz kıyı kolonilerini fethetti. İki yüz yıldır Kıpçak bozkırını Akdeniz'e bağlayan İtalyan ticaret ağı böylece sona erdi ve Karadeniz bir Osmanlı içdenizine dönüştü. Altın Orda'nın ardılları için sonuç kesindir: kuzey bozkırının dünya ticaretine açılan kapısı artık İstanbul'un elindedir.",
  kaynak:"TDV, madde: kefe — 'Haziran 1475: Gedik Ahmed Paşa 100 gemilik donanmayla fetheder'; dunya:4 kronoloji_kirim.js:93'ten OKUNDU" },

{ t:"1476-01-01", b:"Büyük Orda hanı Seyyid Ahmed Kırım'ı istilâ etti — ayrılan parçayı geri alma girişimi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","siyasi"],
  yer_id:"Eski Kırım (Solhat)",
  d:"Büyük Orda, ayrılan Kırım'ı silah zoruyla geri almayı denedi ve yarımadayı istilâ etti. Girişim kalıcı olmadı: Kırım artık Osmanlı himayesindeydi ve bozkırdaki bir hanın karşısında yalnız değildi. Bu, Altın Orda mirasının parçalarının artık birbiriyle DIŞ GÜÇLER üzerinden hesaplaştığının işaretidir.",
  kaynak:"data/kronoloji_kirim.js:103 (TDV kirim maddesine dayalı); dunya:2 aynı kayıttan OKUNDU" },

{ t:"1480-11-11", b:"🔴 Ugra Nehri karşılaşması — Rus knezliklerinin haraç ödemesi sona erdi", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kayip","siyasi"],
  yer_id:"",
  d:"Ahmed Han'ın kuvvetleriyle III. İvan'ın orduları Ugra ırmağı kıyısında aylarca karşı karşıya durdu; çatışma olmadan Ahmed Han geri çekildi. 🔴 Bir muharebe yaşanmadan bir imparatorluk ilişkisi sona erdi: 1237'den beri süren Rus knezliklerinin haraç yükümlülüğü fiilen bitti. Rus tarihyazımı bu günü 'Tatar boyunduruğunun sonu' ve Moskova'nın bağımsız bir güç olarak doğuşu sayar. Altın Orda mirası açısından ise gelir kaynaklarının sonuncusunun da kaybedilmesidir. yer_id boş: ırmak boyunun atlasta yerleşim karşılığı yok (aynı olay `kronoloji_rusya.js`te de yer_id'siz).",
  kaynak:"data/kronoloji_rusya.js:98 (Riasanovsky & Steinberg, A History of Russia); dunya:3 aynı kayıttan OKUNDU" },

{ t:"1481-01-01", b:"Şeyh Ahmed Han tahta çıktı — devleti buhrandan çıkaramayan son hükümdar", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyasi","hukumdar"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV hükmü serttir: 'Şeyh Ahmed Han (1481-1502), dirayetsiz bir hükümdar olduğu için memleketi içine düştüğü buhrandan kurtaramadı.' Elinde Kazan yok, Kırım yok, Astarhan yok, Rus haracı yok, Kefe yok. Yirmi bir yıllık saltanatı Büyük Orda'nın son nefesidir.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Şeyh Ahmed Han (1481-1502), dirayetsiz bir hükümdar olduğu için ...'" },

{ t:"1502-01-01", b:"🔴 Büyük Orda sona erdi — Mengli Giray Saray'ı yıkarak Altın Orda mirasını kapattı", tur:"son", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","siyasi","toprak-kayip"],
  yer_id:"Saray (Selitrennoye)",
  d:"Kırım Hanı I. Mengli Giray, Osmanlı desteğiyle Büyük Orda'yı dağıttı ve Saray şehrini tahrip etti. 🔴 Bir devleti, ondan ayrılan parçanın bitirmesi bu tarihin en anlamlı yanıdır: 1441'de bağımsızlığını ilân eden Kırım, altmış bir yıl sonra anasını ortadan kaldırdı. Deşt-i Kıpçak'ta 1241'den beri süren tek merkezli düzen böylece kapandı; miras beş ayrı hanlığa — Kırım, Kazan, Astarhan, Sibir ve Nogay — kesin olarak bölündü ve her biri kendi yolunu tuttu (bkz. [[kirim]], [[kazan]], [[astarhan]], [[nogay]], [[sibir]]).",
  kaynak:"TDV, madde: altin-orda-hanligi (1502 sonu) + data/kronoloji_kirim.js:123; dunya:4 aynı kayıttan OKUNDU" }

];
