/* PAKET 11 — arac/paketle.py ile ÜRETİLDİ, ELLE DÜZENLENMEZ.
   7 kaynak dosya, sırası index.html'deki sıradır.
   Kaynağı değiştirdiysen: py arac/paketle.py yenile
   Tazelik kapıda sınanır: py arac/paketle.py sina */
/* ==== data/kronoloji_altinorda.js ==== */
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
  etiket:["siyaset","taht-kavgasi","konu-siyasi","konu-isyan","konu-hanedan"],
  yer_id:"Saray (Selitrennoye)",
  d:"Mengü Timur'un 1280'de ölümünün ardından tahta geçen Tuda Mengü (1280-1287) döneminde Altın Orda ilk büyük iç buhranına girdi. TDV bu evreyi ayrı bir dönem olarak adlandırır: hanların otoritesi zayıflamış, Cuci ulusunun batı kanadında beylerin nüfuzu hanınkini gölgelemişti.", ic_not_d:"Atlasın zaman çizgisi bu dosyada 1281'de başladığı için devlet sahneye tam bu buhranın içinde girer.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Tuda Mengü Han zamanında (1280-1287) devlet bütünlüğü tehlikeye girdi'" },

{ t:"1300-01-01", b:"İlk fetret devri sona erdi, hanlık merkezî otoritesini yeniden kurdu", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","idari","konu-siyasi","konu-idari"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV ilk fetret devrinin XIV. yüzyılın başlarında kapandığını yazar. Bu tarihten sonra han otoritesi Saray'da yeniden toplanmış, devlet Özbek Han dönemindeki zirvesine giden yola girmiştir.", ic_not_d:"TDV gün vermez; buradaki 1300-01-01 yuvarlak bir yıl başıdır, ölçülmüş bir gün değildir (CLAUDE.md §4: gün bilinmiyorsa YYYY-01-01).",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Bu ilk fetret devri XIV. yüzyılın başlarında sona erdi' (GÜN VERİLMİYOR, yıl yuvarlandı)" },

{ t:"1303-01-01", b:"Codex Cumanicus Suğdak'ta derlendi — Kıpçak Türkçesinin en eski sözlük ve metin derlemesi", tur:"kultur", onem:3, dunya:3, kapsam:"ic",
  etiket:["kultur","edebiyat","din","ekonomi","konu-ekonomi","konu-din","konu-kultur"],
  yer_id:"Sudak (Suğdak)",
  d:"İtalyan tüccarlar ve Fransisken misyonerler, Altın Orda'nın Kırım limanı Suğdak'ta Kıpçak Türkçesi-Latince-Farsça bir sözlük ve metin derlemesi hazırladı. İki sebeple yazılmıştı ve ikisi de hanlığın ne olduğunu anlatır: Kıpçakça Karadeniz'den Çin'e uzanan kervan yolunun TİCARET DİLİYDİ, ve misyonerlerin bozkırda karşılaştığı dildi. Derleme bugün Kıpçak Türkçesinin en eski ve en kapsamlı dil âbidesi sayılır — Altın Orda'dan geriye kalan en somut kültürel miras, bir devlet arşivi değil bir SÖZLÜKTÜR.", ic_not_d:"⚠️ TDV'nin `codex-cumanicus` diye müstakil maddesi YOKTUR (arandı, arama sayfasına düşüyor); yalnız başka maddelerin içinde 'Suğdak'ta hazırlanmış olan Codex Cumanicus' diye geçer. 1303 tarihi TDV'den değil, yazmanın ilk bölümünün kendi tarihlemesinden gelir.",
  kaynak:"bulunamadı — TDV'de müstakil `codex-cumanicus` maddesi YOK (302, arama sayfası). Suğdak'ta hazırlandığı TDV'nin `kipcaklar` ve `seyf-i-sarayi` maddelerinden alındı; 1303 tarihi için dayanak: standart akademik kaynak (yazmanın ilk bölümünün tarihlemesi)" },

{ t:"1313-01-01", b:"Tokta Han öldü, yerine yeğeni Özbek Han geçti", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["siyaset","hukumdar","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"Saray (Selitrennoye)",
  d:"Tokta Han'ın ölümü üzerine, yaklaşık yirmi üç yaşındaki Özbek Han tahta çıktı. Saltanatı Altın Orda'nın en kudretli devri olacak, devletin hem sınırları hem de kurumsal düzeni bu dönemde oturacaktır.", ic_not_d:"⚠️ TDV kendi içinde çelişiyor: ana madde saltanatı '1315-1341' verir, Özbek Han'ın kendi maddesi 1313 cülûsunu ve 740 (1340) vefatını yazar — bu dosya daha ince tanecikli olan monografi maddesini esas aldı.",
  kaynak:"TDV, madde: ozbek-han — 'Tokta Han'ın ölümü üzerine han oldu'; saltanat 1313-1340. ⚠️ ana madde altin-orda-hanligi '1315-1341' diyor, ÇELİŞKİ kayda geçirildi" },

{ t:"1314-05-11", b:"Özbek Han İlhanlı hükümdarı Olcaytu'ya elçi gönderdi", tur:"diplomasi", onem:2, dunya:2, kapsam:"dis",
  etiket:["diplomasi","siyaset","konu-siyasi","konu-diplomasi"],
  yer_id:"Sultâniye",
  d:"Cülûsunun hemen ardından Özbek Han, Altın Orda'nın güneydeki büyük rakibi İlhanlılar'a elçi yolladı. İki Moğol devleti arasındaki Azerbaycan-Kafkasya çekişmesi Berke Han'dan beri sürüyordu; elçilik bu çekişmeyi bir süreliğine diplomasi zeminine çekme girişimidir.", ic_not_d:"yer_id boş: elçiliğin ulaştığı İlhanlı ordugâhı kayıtlarda tek bir yerleşime bağlanmıyor.",
  kaynak:"TDV, madde: ozbek-han (11 Mayıs 1314 tarihli elçilik)" },

{ t:"1314-04-03", b:"Kahire'ye 174 kişilik büyük elçilik heyeti gönderildi — Memlük ittifakının tazelenmesi", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis",
  etiket:["diplomasi","siyaset","ittifak","konu-siyasi","konu-diplomasi"],
  yer_id:"Kahire",
  d:"Özbek Han, Berke Han'dan beri süren Altın Orda-Memlük yakınlaşmasını yüz yetmiş dört kişilik olağanüstü kalabalık bir heyetle tazeledi. İki devleti birleştiren şey ortak düşmandı: İlhanlılar. Bu eksen, Kıpçak bozkırından Mısır'a giden köle (memlük) akışının da siyasî çerçevesidir. Gün bilinmediği için yıl başına yazıldı.",
  kaynak:"TDV, madde: ozbek-han — \"16 Zilhicce 713'te (3 Nisan 1314) … heyeti Kahire'ye gitti\" ⇒ GÜN VERİLİYOR", ic_not_t:"eski t: 1314-01-01 · kaydın kendi kaynak alanı '(GÜN VERİLMİYOR)' diyordu, YANLIŞTI — TDV günü veriyor. Sahte BELİRSİZLİK (D210'un tersi): yanlış bir beyan, sonraki oturumu aramaktan alıkoyar. Ölçen: ODAK-KAPAT, tahta M-5728" },

{ t:"1318-01-01", b:"Özbek Han Derbend'i aşarak İlhanlı kuvvetlerine saldırdı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","siyaset","konu-askeri","konu-siyasi"],
  yer_id:"Derbend",
  d:"Diplomasinin çözemediğini Özbek Han ordusuyla denedi: Kafkasya'nın demir kapısı Derbend'i geçip Emîr Çoban komutasındaki İlhanlı kuvvetlerine yürüdü. Derbend geçidi iki devlet arasındaki tek pratik geçit olduğu için Altın Orda-İlhanlı savaşlarının değişmez sahnesidir.",
  kaynak:"TDV, madde: ozbek-han (1318, Derbend'i geçiş, Emir Çoban)" },

{ t:"1319-01-01", b:"Altın Orda kuvvetleri Trakya'yı yağmaladı — yağma kırk gün sürdü", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","yagma","konu-askeri"],
  yer_id:"",
  d:"Altın Orda süvarileri Tuna'yı aşıp Bizans'ın Trakya topraklarına girdi ve TDV'nin ifadesiyle 'yağma kırk gün devam etti'. Özbek Han'ın kızkardeşi Bizans imparatoruyla evliydi; akın, hanlığın Balkanlar'daki nüfuzunun askerî yüzüdür.", ic_not_d:"yer_id boş: kaynak tek bir şehir adı vermiyor, bölge adı veriyor.",
  kaynak:"TDV, madde: ozbek-han — 1319-1320 Trakya akını, 'yağma kırk gün devam etti'" },

{ t:"1320-01-01", b:"Özbek Han İslâm'ı kabul etti ve Muhammed adını aldı — Altın Orda'nın İslâmlaşması", ic_not_b:"eski b öneki: 🔴", tur:"din", onem:5, dunya:4, kapsam:"ic",
  etiket:["din","sosyal","idari","konu-idari","konu-din","konu-sosyal"],
  yer_id:"Saray (Selitrennoye)",
  d:"Özbek Han 720 (1320) yılında İslâm'ı kabul ederek Muhammed adını aldı; bu tarihten sonraki sikkelerinde 'es-Sultânü'l-a'zam Gıyâseddin Muhammed Özbek Han el-Âdil' ibaresi yer aldı. Bu, bir hükümdarın şahsî tercihinden ibaret değildir: Berke Han'ın kişisel Müslümanlığından farklı olarak bu kez din DEVLETİN dini oldu ve Deşt-i Kıpçak'ın Türkleşmesiyle İslâmlaşması aynı süreç hâline geldi. Saray başta olmak üzere şehirler camiler, medreseler ve tekkelerle donandı. Bugünkü Tatar, Başkurt, Kazak, Nogay ve Kırım Türklerinin Müslüman kimliği bu karara dayanır.",
  kaynak:"TDV, madde: ozbek-han — '720'de (1320)' + sikke ibaresi birebir; TDV, madde: altin-orda-hanligi — 'Özbek Han zamanında ... camiler, medreseler ve tekkelerle süslenmiştir'" },

{ t:"1320-05-16", b:"Tolun-Bige Hatun Mısır'a gönderildi — Memlük ittifakının evlilikle mühürlenmesi", ic_not_b:"eski b: 'Mısır Memlük hânedanından Tolun-Bige Hatun ile evlilik anlaşması' — YÖN TERSTİ. TDV ozbek-han: Özbek Han 'hânedandan Tolun-Bige Hatun'u … Mısır'a GÖNDERDİ'. ⚠️ HANEDAN iddiası YAZILMADI: alıntının başı kesik, hangi hânedan olduğu tam cümle görülmeden kesin değil. ODAK-KAPAT Altın Orda diyor ve bağlam destekliyor, ama ölçülmeyen şey hüküm olmaz. Ölçen: ODAK-KAPAT, tahta M-5728", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","ittifak","sosyal","konu-diplomasi","konu-hanedan","konu-sosyal"],
  yer_id:"",
  d:"Memlük ittifakı bir evlilikle mühürlendi. Hanedanlar arası evlilik bozkır diplomasisinde bir anlaşma metninden daha bağlayıcıdır; İslâm'ın kabulüyle aynı yıla düşmesi de tesadüf değildir — Altın Orda artık Memlük Mısır'ıyla yalnız siyasî değil dinî bir ortaklık da kuruyordu.",
  kaynak:"TDV, madde: ozbek-han (16 Mayıs 1320)" },

{ t:"1327-01-01", b:"Tver isyanı bastırıldı, Moskova Knezi İvan Kalita 'büyük knez' yapıldı", tur:"isyan", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","siyaset","idari","konu-askeri","konu-siyasi","konu-idari","konu-isyan"],
  yer_id:"Tver",
  d:"Tver'de Altın Orda'ya karşı çıkan büyük isyan, Moskova'nın da katıldığı bir Moğol misillemesiyle bastırıldı ve Özbek Han büyük knezlik yarlığını İvan Danilovich'e (İvan Kalita) verdi.", ic_not_d:"🔴 Bu maddenin ağırlığı Altın Orda için değil, SONUCU içindir: han, Rus knezlikleri arasında Moskova'yı seçerek kendi eliyle ilerideki rakibini büyüttü. Moskova'nın Rus topraklarının siyasî merkezi hâline gelişi bu yarlıkla başlar (bkz. [[moskova]], [[rusya]]).",
  kaynak:"TDV, madde: ozbek-han (1327 Tver isyanı, İvan Danilovich); data/devletler.js moskova künyesi" },

{ t:"1333-01-01", b:"İbn Battûta Saray'ı ve Kefe'yi gördü — hanlığın zirvesindeki şehir hayatının tanıklığı", tur:"kultur", onem:3, dunya:2, kapsam:"ic",
  etiket:["kultur","sosyal","ekonomi","konu-kisiler","konu-ekonomi","konu-kultur","konu-imar","konu-sosyal"],
  yer_id:"Saray (Selitrennoye)",
  d:"Faslı seyyah İbn Battûta 1330'lu yıllarda Altın Orda topraklarını dolaştı. Saray'ı 'atlı bir yolcunun sabahtan akşama ancak kat edebileceği' genişlikte, on üç cuma camili, çarşıları dolup taşan bir şehir olarak anlattı; Türk, Moğol, Alan, Çerkez, Rum ve Rus cemaatleri ayrı mahallelerde oturuyordu. Kefe'de ise nüfusun çoğunluğunun Cenevizli olduğunu, yanı başında Müslüman mescidleri bulunduğunu kaydetti.", ic_not_d:"⚠️ Seyahatin bu bölümünün TAM GÜNÜ kaynakta yok; 1333 kabaca ortalanmış bir yıldır, kesin değildir.",
  kaynak:"TDV, madde: saray--sehir (İbn Battûta tasviri, on üç cuma camii, ~10 km²) + TDV, madde: kefe (1330'larda ... çoğunluğu Cenevizli). ⚠️ yıl yaklaşıktır" },

{ t:"1340-01-01", b:"Özbek Han vefat etti — hanlığın en kudretli devri kapandı", tur:"hukumdar", onem:5, dunya:3, kapsam:"ic",
  etiket:["siyaset","hukumdar","konu-siyasi","konu-hanedan"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV'nin ifadesiyle 'kaynaklar 740 (1340) yılında vefat ettiği konusunda birleşir'. Yirmi yedi yıllık saltanatı boyunca Altın Orda İslâmlaştı, şehirleşti, Memlük ve Bizans'la evlilik bağları kurdu, İlhanlılar'a karşı ayakta kaldı. Ardından gelen Canıbek dönemi bu düzeni bir süre daha sürdürecek, fakat 1357'den sonra devlet bir daha toparlanamayacaktır.",
  kaynak:"TDV, madde: ozbek-han — '740 (1340) yılında vefat ettiği konusunda kaynaklar birleşir'" },

{ t:"1342-01-01", b:"Canıbek Han tahta çıktı — bütünlüğün korunduğu son saltanat", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","hukumdar","konu-siyasi","konu-hanedan"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV, Özbek Han ile Canıbek Han'ın saltanatlarını birlikte anar: 'Altın Orda'nın bütünlüğü yeniden sağlandı ve devlet eski kudretli günlerine kavuştu.' Canıbek dönemi (1342-1357) hanlığın kesintisiz merkezî otoriteye sahip olduğu SON devirdir; ondan sonrası kargaşadır.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Canıbeg Han'ın (1342-1357) saltanatları döneminde ... eski kudretli günlerine kavuştu'" },

{ t:"1341-01-01", b:"Kefe güçlü surlarla çevrilmeye başlandı — Ceneviz kolonisinin tahkimi", tur:"ekonomi", onem:2, dunya:2, kapsam:"ic",
  etiket:["ekonomi","mimari","sosyal","imar","konu-ekonomi","konu-imar","konu-sosyal"],
  yer_id:"Kefe",
  d:"Cenevizliler 1341-1348 arasında Kefe'yi güçlü surlarla çevirdi. Kefe, Altın Orda toprağında duran ama Ceneviz'in yönettiği bir liman olarak hanlığın dünya ticaretine açılan kapısıydı: Kıpçak bozkırının kölesi, kürkü ve tahılı buradan Akdeniz'e; İtalyan kumaşı ve gümüşü buradan bozkıra geçiyordu. Surların yükselmesi, kolonilerin han otoritesinden görece bağımsızlaştığının da işaretidir.",
  kaynak:"TDV, madde: kefe — '1341-1348' surlarla çevrilme" },

{ t:"1346-01-01", b:"Kara Ölüm Kefe kuşatmasından Akdeniz'e yayıldı — Avrupa nüfusunun üçte biri öldü", ic_not_b:"eski b öneki: 🔴", tur:"salgin", onem:4, dunya:5, kapsam:"dis",
  etiket:["sosyal","salgin","ekonomi","konu-kisiler","konu-ekonomi","konu-sosyal","afet","afet-salgin"],
  yer_id:"Kefe",
  d:"Altın Orda kuvvetlerinin Ceneviz kolonisi Kefe'yi kuşatması sırasında ordugâhta veba çıktı; kaçan Ceneviz gemileri hastalığı Konstantinopolis'e, oradan Messina ve Marsilya üzerinden bütün Avrupa'ya taşıdı. Kara Ölüm 1347-1351 arasında Avrupa nüfusunun yaklaşık üçte birini götürdü, feodal düzeni ve emek piyasasını kalıcı biçimde değiştirdi.", ic_not_d:"🔴 `dunya:5` — bu, Altın Orda tarihinin dünya tarihine en geniş dokunduğu andır; hanlığın bir kuşatması, bir kıtanın demografisini değiştirdi. ⚠️ Salgının Kefe'den yayılışını çağdaş tanık Gabriele de' Mussi anlatır; kuşatma-bulaşma zincirinin ayrıntısı tarihçiler arasında tartışmalıdır, yayılışın Kefe üzerinden olduğu ise kabul görür.",
  kaynak:"bulunamadı — TDV `kefe` maddesi 1346 kuşatmasını ve vebayı HİÇ ANMIYOR (metin okundu, geçmiyor). Dayanak: standart akademik kaynak (Benedictow, The Black Death 1346-1353; Cambridge History of Inner Asia)" },

{ t:"1357-01-01", b:"Berdibek Han tahta çıktı — ikinci ve yıkıcı kargaşa devrinin başlangıcı", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","hukumdar","taht-kavgasi","konu-siyasi","konu-hanedan"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV: 'Berdibeg Han'ın (1357-1359) saltanatı yıllarında Altın Orda yeniden bir karışıklık devrine girdi.' Canıbek'in ölümüyle kurulan denge çöktü; iki yıl sonra başlayacak taht kavgası devleti yirmi yıl boyunca felç edecektir.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Berdibeg Han'ın (1357-1359) saltanatı yıllarında ... karışıklık devrine girdi'" },

{ t:"1360-01-01", b:"Büyük Kargaşa — yirmi yılda on dört han tahta çıktı, hiçbiri devleti toparlayamadı", ic_not_b:"eski b öneki: 🔴", tur:"ic-karisiklik", onem:5, dunya:3, kapsam:"ic",
  etiket:["siyaset","taht-kavgasi","ic-savas","konu-askeri","konu-siyasi","konu-isyan","konu-hanedan"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV'nin verdiği sayı tek başına dönemi anlatıyor: '1360-1380 yılları arasındaki bu dönemde hükümdarlık makamına on dört han geçtiği halde hiçbiri devleti eski kudretine kavuşturamadı.' Rus kroniklerinin 'Büyük Kargaşa' (velikaya zamyatnya) dediği bu devirde gerçek güç hanlarda değil, onları tahta çıkarıp indiren beylerdeydi — batıda Mamay Mirza, doğuda Ak Orda hanları. Moskova'nın vergi ödemeyi aksatmaya, Litvanya'nın batı topraklarını almaya başlaması bu boşluktandır.",
  kaynak:"TDV, madde: altin-orda-hanligi — '1360-1380 ... on dört han geçtiği halde hiçbiri devleti eski kudretine kavuşturamadı'" },

{ t:"1380-09-08", b:"Kulikovo Muharebesi — Mamay'ın ordusu Moskova Knezi Dmitri Donskoy'a yenildi", tur:"savas", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"",
  d:"Batı Deşt-i Kıpçak'ın hâkimi Mamay Mirza, Don'a dökülen Nepryadva boyundaki Kulikovo sahasında Moskova Knezi Dmitri'ye yenildi. Askerî sonucu kalıcı olmadı — iki yıl sonra Toktamış Moskova'yı yakıp haracı yeniden dayattı — ama Rus tarihyazımı bu günü Tatar boyunduruğuna direnişin sembolik başlangıcı sayar.", ic_not_d:"🔴 Altın Orda açısından asıl önemi şudur: yenilen han değil bir BEYDİ, ve yenilgisi Toktamış'a kapıyı açtı. yer_id boş: muharebe sahasının atlasta yerleşim kaydı yok (aynı olay `kronoloji_rusya.js`te de yer_id'siz).",
  kaynak:"TDV, madde: toktamis-han — '8 Eylül 1380 tarihinde Kulikovskaya savaşında Ruslar'a yenilerek Kırım'a dönen ... Mamay Mirza'; dunya:2 kronoloji_rusya.js:83'ten OKUNDU" },

{ t:"1380-01-01", b:"Toktamış, Kalka boyunda Mamay'ı yendi — yirmi yıllık kargaşa sona erdi, devlet yeniden birleşti", tur:"savas", onem:5, dunya:3, kapsam:"ic",
  etiket:["askeri","siyaset","ic-savas","konu-askeri","konu-siyasi","konu-isyan"],
  yer_id:"",
  d:"Kulikovo'dan yenik dönen Mamay Mirza'yı, Timur'un desteklediği Toktamış Han, Don'a dökülen Kalka ırmağı boyunda mağlûp etti. TDV bu zaferin sonucunu açıkça yazar: yirmi yıl süren iç mücadelenin ardından Altın Orda yeniden tek elde toplandı. 🔴 Devletin son gerçek toparlanışıdır; bundan sonraki her birleşme girişimi başarısız olacaktır.", ic_not_d:"⚠️ Kaynak yıl veriyor, GÜN vermiyor — Kulikovo'dan sonrasına düştüğü kesin, tam günü değil.",
  kaynak:"TDV, madde: toktamis-han — 'Don nehrine dökülen Kalka ırmağı boyunda mağlûp etti' (GÜN VERİLMİYOR)" },

{ t:"1382-08-26", b:"Toktamış Moskova'yı hile ile alıp yaktı — haraç yeniden dayatıldı", tur:"savas", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","yagma","toprak-kazanc","konu-askeri"],
  yer_id:"Moskova",
  d:"Toktamış Han 23-26 Ağustos 1382'de Moskova'yı kuşattı, şehri hile ile ele geçirip yaktı ve büyük ganimetle döndü. Kulikovo'nun kazanımları böylece iki yıl içinde silindi: Rus knezlikleri yeniden haraca bağlandı. Altın Orda tarihinde bu, hanlığın Rusya üzerindeki hâkimiyetini SON KEZ askerî güçle tesis ettiği andır.",
  kaynak:"TDV, madde: toktamis-han — '23-26 Ağustos 1382'; dunya:2 kronoloji_rusya.js:88'den OKUNDU" },

{ t:"1383-01-01", b:"Kefe surların dışına taştı, yeni bir dış sur çevrildi — koloninin büyümesi", tur:"ekonomi", onem:2, dunya:1, kapsam:"ic",
  etiket:["ekonomi","mimari","sehircilik","imar","konu-ekonomi","konu-imar"],
  yer_id:"Kefe",
  d:"Şehir 1383-1386 arasında mevcut surların dışına taşınca ikinci bir sur hattı örüldü. Altın Orda merkezî otoritesinin çözüldüğü yıllarda Kefe'nin BÜYÜMESİ dikkate değerdir: bozkırdaki siyasî kargaşa Karadeniz ticaretini kesmemiş, aksine kolonilerin özerkliğini artırmıştır.",
  kaynak:"TDV, madde: kefe — '1383-1386' dış surlar" },

{ t:"1391-06-01", b:"Kunduzca (Kondurça) Savaşı — Timur, Toktamış'ı ilk kez ağır yenilgiye uğrattı", ic_not_b:"eski b öneki: 🔴", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"",
  d:"Toktamış'ı tahta çıkaran Timur'la arası Azerbaycan meselesi yüzünden açılmıştı. İki ordu Receb 793'te (Haziran 1391) Kunduzca (Kondurça) ırmağı boyunda karşılaştı; Toktamış ağır bir yenilgi aldı. Bu, Altın Orda'nın belini kıran iki seferin birincisidir.", ic_not_d:"⚠️ Kaynak ay veriyor, gün vermiyor — 06-01 ayın başına yazıldı, ölçülmüş gün değildir. yer_id boş: ırmak boyunun atlasta yerleşim karşılığı yok.",
  kaynak:"TDV, madde: toktamis-han — 'Receb 793 (Haziran 1391)' Kundurzha; TDV, madde: altin-orda-hanligi — '1391'de Kondurca'da' (GÜN VERİLMİYOR)" },

{ t:"1391-09-01", b:"Seyf-i Sarâyî Gülistan Tercümesi'ni tamamladı — Türkçenin ilk Gülistan çevirisi", tur:"kultur", onem:3, dunya:2, kapsam:"ic",
  etiket:["kultur","edebiyat","konu-kultur"],
  yer_id:"Saray (Selitrennoye)",
  d:"Nisbesini Altın Orda'nın başkenti Saray'dan alan Kıpçak şairi Seyf-i Sarâyî, Sa'dî-i Şîrâzî'nin Gülistan'ını 1 Eylül 1391'de Türkçeye çevirmeyi tamamladı — mensur kısımları nesirle, manzum kısımları şiirle. Bu, Gülistan'ın TÜRKÇEYE İLK ÇEVİRİSİDİR ve Codex Cumanicus'tan sonra Kıpçak Türkçesinin en önemli dil âbidesi sayılır; XIX. yüzyıla kadar Orta Asya Türkleri arasında ders kitabı olarak okundu.", ic_not_d:"📌 Tarihin anlamı yalnız edebî değil: Timur'un Kunduzca'da hanlığın ordusunu dağıttığı yıl, aynı hanlığın yetiştirdiği bir şair Fars klasiğini Türkçeye kazandırıyordu. Bir devletin askerî çöküşüyle kültürel verimi aynı takvime düşebilir.",
  kaynak:"TDV, madde: seyf-i-sarayi — Gülistan Tercümesi 1 Eylül 1391'de tamamlandı, 'Türkçeye ilk Gülistan tercümesi'" },

{ t:"1393-01-01", b:"Toktamış Han, Lehistan-Litvanya Kralı Jagiello'ya yarlık gönderdi — bozkır diplomasisinin belgesi", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","idari","hukuk","konu-idari","konu-diplomasi","konu-hukuk"],
  yer_id:"",
  d:"Toktamış Han'ın 1393'te Jagiello'ya gönderdiği yarlık, Altın Orda diplomasisinin günümüze ulaşan somut örneklerindendir. Yarlık, Türk-Moğol devletlerinde hükümdar buyruğudur ve Altın Orda'da iki türü vardı: tâbi ülke hükümdarlarına gönderilen DİPLOMATİK yarlıklar, ve vergiden ve devlet hizmetinden muafiyet tanıyan TARHANLIK yarlıkları. Her yeni han, seleflerinin yarlıklarını ya onaylar ya iptal ederdi — yani yarlık aynı zamanda bir meşruiyet tazeleme aracıydı.", ic_not_d:"🔴 TDV'nin hükmü açıktır: yarlıklar, Altın Orda'nın siyasî, iktisadî, askerî ve idarî yapısını anlamanın başlıca kaynağıdır. ⚠️ Yarlığın GÜNÜ kaynakta yok, yıl başına yazıldı.",
  kaynak:"TDV, madde: yarlik — 1393 tarihli Toktamış'ın Jagiello'ya yarlığı; yarlık türleri ve tarhanlık aynı maddeden (GÜN VERİLMİYOR)" },

{ t:"1394-01-01", b:"Seyf-i Sarâyî Süheyl ü Güldürsün mesnevisini bitirdi — çağın olaylarını anlatan Kıpçak mesnevisi", tur:"kultur", onem:2, dunya:1, kapsam:"ic",
  etiket:["kultur","edebiyat","konu-kultur"],
  yer_id:"Saray (Selitrennoye)",
  d:"Seyf-i Sarâyî, bir aşk hikâyesi anlatırken kendi çağının olaylarını da işleyen Süheyl ü Güldürsün mesnevisini 1394'te tamamladı. TDV şairin '796/1394'ten sonra' yaşadığını bu eserden çıkarır. Altın Orda'nın kendi hânedan tarihini yazacak bir vekāyi'nâme geleneği bırakmaması, bu tür edebî eserleri dönemin dolaylı tanıkları hâline getirir.",
  kaynak:"TDV, madde: seyf-i-sarayi — Süheyl ü Güldürsün ... 1394'te bitirilen mesnevi" },

{ t:"1395-04-15", b:"Terek Savaşı — Timur ikinci kez yendi, Altın Orda bir daha toparlanamadı", ic_not_b:"eski b öneki: 🔴", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"Terek deltası (Kızlar)",
  d:"23 Cemâziyelâhir 797'de (15 Nisan 1395) Terek ırmağı boyunda Timur, Toktamış'ı ikinci ve kesin kez bozguna uğrattı. Ardından Altın Orda şehirlerini yağmaladı.", ic_not_d:"🔴 Bu iki sefer, hanlığı yıkan asıl darbedir: Rus knezlikleri ya da iç kargaşa değil, DOĞUDAN gelen bu iki yenilgi devletin şehirlerini, ticaret ağını ve hazinesini birlikte çökertti. Bundan sonraki yüz yedi yıl bir çözülme hikâyesidir.",
  kaynak:"TDV, madde: toktamis-han — '23 Cemâziyelâhir 797'de (15 Nisan 1395)'; TDV, madde: altin-orda-hanligi — 'Nisan 1395'te de Terek'te büyük bir yenilgiye uğrattı'" },

{ t:"1395-01-01", b:"Timur'un seferleri Saray'ı ve Altın Orda şehirlerini harap etti — Yeni Saray bir daha kurulamadı", ic_not_b:"eski b öneki: 🔴", tur:"isgal", onem:5, dunya:4, kapsam:"ic",
  etiket:["askeri","sehircilik","ekonomi","yagma","konu-askeri","konu-ekonomi","konu-imar"],
  yer_id:"Yeni Saray (Tsarev)",
  d:"Timur'un 1395-1396 seferleri Saray'ı ve hanlığın öteki şehirlerini tahrip etti; TDV'nin ifadesiyle Sarây-ı Cedîd (Yeni Saray) harabeye döndü, Sarây-ı Batu ise küçülerek 1578'e kadar sürdü.", ic_not_d:"🔴 Bu maddenin ağırlığı sadece askerî değil İKTİSADÎDİR: Altın Orda'nın gücü bozkır süvarisinden değil, o süvarinin koruduğu KERVAN YOLUNDAN ve o yolun beslediği şehirlerden geliyordu. Şehirler yıkılınca vergi tabanı, sikke darbı ve zanaat da yıkıldı — hanlık göçebe bir konfederasyona geriledi ve bir daha imparatorluk olamadı.",
  kaynak:"TDV, madde: saray--sehir — Timur'un seferleri (1395-1396) Saray'ı ... devastated; Sarây-ı Cedîd harabe" },

{ t:"1396-01-01", b:"Timur Kutluk, Timur tarafından Altın Orda hükümdarı ilân edildi", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","hukumdar","vassal","konu-siyasi","konu-hanedan"],
  yer_id:"Saray (Selitrennoye)",
  d:"Timur, yendiği Toktamış'ın yerine kendi adayı Timur Kutluk'u (1396-1400) han ilân etti. Altın Orda tahtının artık DIŞARIDAN belirlendiği ilk açık andır; hanlık bağımsız bir güç olmaktan çıkıp bir nüfuz alanına dönüşmüştür.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Timur Kutluk (1396-1400), Timur tarafından Altın Orda hükümdarı ilân edildi'" },

{ t:"1399-01-01", b:"Edigü Mirza, Toktamış ve Litvanya ordusunu yendi — beylerin hanlar üzerindeki hâkimiyeti kesinleşti", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","siyaset","ic-savas","konu-askeri","konu-siyasi","konu-isyan"],
  yer_id:"",
  d:"Tahtını geri almak için Litvanya Büyük Dukası Vytautas ile ittifak kuran Toktamış, Mangıt beyi Edigü ve Timur Kutluk'un kuvvetlerine yenildi (Vorskla ırmağı). Yenilgi iki şeyi birden belirledi: Toktamış bir daha tahta dönemedi, ve Litvanya'nın bozkıra yayılma girişimi durdu.", ic_not_d:"🔴 Asıl sonuç kurumsaldır — Cengiz soyundan OLMAYAN Edigü, han olamadığı hâlde devleti fiilen yönetmeye başladı.",
  kaynak:"TDV, madde: toktamis-han — Edigey'in kuvvetlerine 1399'da yenilmesi; TDV, madde: altin-orda-hanligi — 'Edige Mirza yönetimi ele geçirerek 1419'a kadar devleti idare etti'" },

{ t:"1405-01-01", b:"Toktamış Han öldürüldü — devleti son kez birleştiren hanın sonu", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","hukumdar","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"1399'daki yenilgiden sonra kaçak yaşayan Toktamış, 1405'te takip edildiği sırada Karaton ırmağı yakınında bir uçuruma düşerek öldü. Altın Orda'yı bir bütün olarak yöneten SON han odur; ondan sonra taht, beylerin elinde bir araç hâline geldi.",
  kaynak:"TDV, madde: toktamis-han — '1405 yılına kadar' kaçak yaşamı ve Karaton yakınındaki ölümü" },

{ t:"1419-01-01", b:"Edigü'nün yirmi yıllık fiilî idaresi sona erdi", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","idari","konu-siyasi","konu-idari","konu-hanedan"],
  yer_id:"",
  d:"TDV: 'Edige Mirza yönetimi ele geçirerek 1419'a kadar devleti idare etti.' Cengiz soyundan gelmediği için han unvanı alamayan, ama hanları tayin eden bir beyin yirmi yıl süren idaresi, Altın Orda'da meşruiyetin nasıl aşındığının en açık göstergesidir.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Edige Mirza ... 1419'a kadar devleti idare etti'" },

{ t:"1420-01-01", b:"Edigü öldü — oğulları Nogay Ordası'nın çekirdeğini kurdu", tur:"bolunme", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","bolunme","konu-siyasi","konu-kisiler"],
  yer_id:"",
  d:"TDV, Nogaylar maddesinde tarihi birebir verir: 'Edige'nin (Edigü/İdigü) 823'te (1420) ölümünden sonra oğulları' Deşt-i Kıpçak'ta çeşitli hanların emirleri olarak siyasete devam etti. Nogay Ordası bu mirastan doğdu — Altın Orda'dan kopan beş yapının kronolojik olarak İLKİDİR ve ötekilerden farkı, bir HANEDANDAN değil bir BEY AİLESİNDEN doğmuş olmasıdır (bkz. [[nogay]]).",
  kaynak:"TDV, madde: nogaylar — 'Edige'nin ... 823'te (1420) ölümünden sonra oğulları'" },

{ t:"1419-06-01", b:"Uluğ Muhammed Han seçildi — ve prenslerin taht kavgasıyla indirildi", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","taht-kavgasi","konu-siyasi","konu-hanedan"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV: 'Uluğ Muhammed Han (1419-1422)' tahta seçildi, fakat 'saltanat mücadelesine girmiş olan prensler tarafından tahttan indirildi'. Bu kısa saltanatın önemi sonrasındadır: tahtını kaybeden Uluğ Muhammed doğuya çekilip Kazan'da kendi hanlığını kuracaktır.", ic_not_d:"⚠️ Kaynak yıl veriyor, gün vermiyor; 06-01 aynı yıl içinde Edigü'nün ölümünden sonraya düşürmek için seçilmiş bir sıralama tarihidir, ÖLÇÜLMÜŞ GÜN DEĞİLDİR.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Uluğ Muhammed Han (1419-1422) ... prensler tarafından tahttan indirildi' (GÜN VERİLMİYOR)" },

{ t:"1434-01-01", b:"Hacı Giray Cenevizliler'i yenerek Kefe üzerinde meşrû hâkim tanındı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","siyaset","ekonomi","konu-askeri","konu-siyasi","konu-ekonomi"],
  yer_id:"Kefe",
  d:"TDV Kefe maddesi 1434'te Hacı Giray'ın Cenevizliler'i yenerek şehrin meşrû hâkimi sayıldığını yazar. Bu, Kırım'daki ayrılığın 1441'deki resmî ilândan YEDİ YIL ÖNCE fiilen başladığını gösterir: Hacı Giray daha han ilân edilmeden Karadeniz ticaretinin en zengin limanı üzerinde söz sahibi olmuştu. Ayrılıkların önce siyasî değil İKTİSADÎ olarak gerçekleştiğinin örneğidir.",
  kaynak:"TDV, madde: kefe — 1434: Hacı Giray Cenevizliler'i yener, meşrû hâkim olur" },

{ t:"1437-01-01", b:"Kazan Hanlığı ayrıldı — Uluğ Muhammed Saray'dan kopup İdil boyunda kendi hanlığını kurdu", ic_not_b:"eski b öneki: 🔴", tur:"bolunme", onem:5, dunya:3, kapsam:"ic",
  etiket:["siyaset","bolunme","toprak-kayip","konu-askeri","konu-siyasi","konu-imar"],
  yer_id:"Kazan",
  d:"Tahtını kaybeden Uluğ Muhammed, TDV'nin ifadesiyle 'Saray'dan ayrılıp Kazan'a geldi' ve orada kendi hanlığını kurdu. İdil'in orta mecrası, kürk ve tahıl ticaretinin düğüm noktası, artık Saray'a bağlı değildi.", ic_not_d:"⚠️ TDV iki görüş aktarır: kuruluş ya 1437'de Uluğ Muhammed ile, ya 1445'te oğlu Mahmud'un idareyi almasıyladır — bu dosya `data/devletler.js`teki `kazan` künyesiyle uyum için 1437'yi esas aldı, ikinci görüş burada kayda geçirildi. 🔴 Koordinatörün şartnamesinde '1438' yazıyordu; TDV'de VE künyede böyle bir yıl YOK — düzeltildi (bkz. [[kazan]]).",
  kaynak:"TDV, madde: kazan-hanligi — 1437'de Uluğ Muhammed Han ... Saray'dan ayrılıp Kazan'a geldi; ikinci görüş: 1445, oğlu Mahmud" },

{ t:"1441-01-01", b:"Kırım Hanlığı ayrıldı — Hacı Giray bağımsızlığını ilân etti", ic_not_b:"eski b öneki: 🔴", tur:"bolunme", onem:5, dunya:3, kapsam:"ic",
  etiket:["siyaset","bolunme","toprak-kayip","konu-askeri","konu-siyasi"],
  yer_id:"Eski Kırım (Solhat)",
  d:"Hacı Giray, Altın Orda'dan bağımsızlığını ilân ederek Kırım Hanlığı'nı kurdu. Ayrılan parçaların en uzun ömürlüsü budur: Kırım 1783'e kadar yaşayacak, 1475'ten sonra Osmanlı himayesine girerek Altın Orda mirasının Akdeniz dünyasına bağlanan kolu olacaktır.", ic_not_d:"📌 Bu dosya Kırım'ı buradan sonra yalnız Altın Orda'ya/Büyük Orda'ya DOKUNDUĞU yerde anar; hanlığın kendi kronolojisi `data/kronoloji_kirim.js`tedir (bkz. [[kirim]]).",
  kaynak:"TDV, madde: kirim; data/devletler.js kirim künyesi; dunya:3 kronoloji_kirim.js:63'ten OKUNDU" },

{ t:"1465-01-01", b:"Ahmed Han tahta çıktı — Büyük Orda'yı son kez toparlama girişimi", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","hukumdar","konu-siyasi","konu-hanedan"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV: 'Ahmed Han da (1465-1481) mücadeleyi sürdürdü.' Elinde kalan çekirdeğe artık Büyük Orda deniyordu: Kazan ve Kırım çoktan ayrılmış, Nogaylar kendi başına buyruk hâle gelmişti. Ahmed Han'ın bütün siyaseti dağılan mirası askerî güçle geri toplama üzerineydi ve 1480'de Ugra'da bu siyaset çökecektir.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Ahmed Han da (1465-1481) mücadeleyi sürdürdü'" },

{ t:"1466-01-01", b:"Astarhan (Ejderhan) Hanlığı ayrıldı — Hazar'ın kuzey kapısı koptu", tur:"bolunme", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","bolunme","toprak-kayip","ekonomi","konu-askeri","konu-siyasi","konu-ekonomi"],
  yer_id:"Astrahan",
  d:"Küçük Muhammed Han'ın torunu Kasım Han, İdil'in Hazar'a döküldüğü yerde Ejderhan'da kendi hanlığını kurdu. Kayıp yalnız toprak değildir: Astarhan, Hazar üzerinden İran ve Orta Asya'ya giden ticaretin gümrük kapısıydı. Kazan kuzey ticaretini, Kırım Karadeniz'i, Astarhan Hazar'ı aldı — Büyük Orda'ya bozkırın kendisi kaldı (bkz. [[astarhan]]).",
  kaynak:"TDV, madde: ejderhan-hanligi; data/devletler.js astarhan künyesi — 'Küçük Muhammed Han'ın torunu Kasım Han, Ejderhan'da hanlığını kurdu'" },

{ t:"1475-06-01", b:"Osmanlı Kefe'yi fethetti — Karadeniz ticareti Altın Orda mirasının elinden çıktı", tur:"savas", onem:4, dunya:4, kapsam:"dis",
  etiket:["askeri","ekonomi","toprak-kayip","konu-askeri","konu-ekonomi"],
  yer_id:"Kefe",
  d:"Gedik Ahmed Paşa komutasındaki yüz parçalık Osmanlı donanması Haziran 1475'te Kefe'yi ve Ceneviz kıyı kolonilerini fethetti. İki yüz yıldır Kıpçak bozkırını Akdeniz'e bağlayan İtalyan ticaret ağı böylece sona erdi ve Karadeniz bir Osmanlı içdenizine dönüştü. Altın Orda'nın ardılları için sonuç kesindir: kuzey bozkırının dünya ticaretine açılan kapısı artık İstanbul'un elindedir.",
  kaynak:"TDV, madde: kefe — Haziran 1475: Gedik Ahmed Paşa 100 gemilik donanmayla fetheder; dunya:4 kronoloji_kirim.js:93'ten OKUNDU" },

{ t:"1476-01-01", b:"Büyük Orda hanı Seyyid Ahmed Kırım'ı istilâ etti — ayrılan parçayı geri alma girişimi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","siyaset","konu-askeri","konu-siyasi"],
  yer_id:"Eski Kırım (Solhat)",
  d:"Büyük Orda, ayrılan Kırım'ı silah zoruyla geri almayı denedi ve yarımadayı istilâ etti. Girişim kalıcı olmadı: Kırım artık Osmanlı himayesindeydi ve bozkırdaki bir hanın karşısında yalnız değildi. Bu, Altın Orda mirasının parçalarının artık birbiriyle DIŞ GÜÇLER üzerinden hesaplaştığının işaretidir.",
  kaynak:"data/kronoloji_kirim.js:103 (TDV kirim maddesine dayalı); dunya:2 aynı kayıttan OKUNDU" },

{ t:"1480-11-11", b:"Ugra Nehri karşılaşması — Rus knezliklerinin haraç ödemesi sona erdi", ic_not_b:"eski b öneki: 🔴", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kayip","siyaset","konu-askeri","konu-siyasi"],
  yer_id:"",
  d:"Ahmed Han'ın kuvvetleriyle III. İvan'ın orduları Ugra ırmağı kıyısında aylarca karşı karşıya durdu; çatışma olmadan Ahmed Han geri çekildi.", ic_not_d:"🔴 Bir muharebe yaşanmadan bir imparatorluk ilişkisi sona erdi: 1237'den beri süren Rus knezliklerinin haraç yükümlülüğü fiilen bitti. Rus tarihyazımı bu günü 'Tatar boyunduruğunun sonu' ve Moskova'nın bağımsız bir güç olarak doğuşu sayar. Altın Orda mirası açısından ise gelir kaynaklarının sonuncusunun da kaybedilmesidir. yer_id boş: ırmak boyunun atlasta yerleşim karşılığı yok (aynı olay `kronoloji_rusya.js`te de yer_id'siz).",
  kaynak:"data/kronoloji_rusya.js:98 (Riasanovsky & Steinberg, A History of Russia); dunya:3 aynı kayıttan OKUNDU" },

{ t:"1481-01-01", b:"Şeyh Ahmed Han tahta çıktı — devleti buhrandan çıkaramayan son hükümdar", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","hukumdar","konu-siyasi","konu-hanedan","konu-din"],
  yer_id:"Saray (Selitrennoye)",
  d:"TDV hükmü serttir: 'Şeyh Ahmed Han (1481-1502), dirayetsiz bir hükümdar olduğu için memleketi içine düştüğü buhrandan kurtaramadı.' Elinde Kazan yok, Kırım yok, Astarhan yok, Rus haracı yok, Kefe yok. Yirmi bir yıllık saltanatı Büyük Orda'nın son nefesidir.",
  kaynak:"TDV, madde: altin-orda-hanligi — 'Şeyh Ahmed Han (1481-1502), dirayetsiz bir hükümdar olduğu için ...'" },

{ t:"1502-01-01", b:"Büyük Orda sona erdi — Mengli Giray Saray'ı yıkarak Altın Orda mirasını kapattı", ic_not_b:"eski b öneki: 🔴", tur:"son", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","siyaset","toprak-kayip","konu-askeri","konu-siyasi","konu-imar"],
  yer_id:"Saray (Selitrennoye)",
  d:"Kırım Hanı I. Mengli Giray, Osmanlı desteğiyle Büyük Orda'yı dağıttı ve Saray şehrini tahrip etti.", ic_not_d:"🔴 Bir devleti, ondan ayrılan parçanın bitirmesi bu tarihin en anlamlı yanıdır: 1441'de bağımsızlığını ilân eden Kırım, altmış bir yıl sonra anasını ortadan kaldırdı. Deşt-i Kıpçak'ta 1241'den beri süren tek merkezli düzen böylece kapandı; miras beş ayrı hanlığa — Kırım, Kazan, Astarhan, Sibir ve Nogay — kesin olarak bölündü ve her biri kendi yolunu tuttu (bkz. [[kirim]], [[kazan]], [[astarhan]], [[nogay]], [[sibir]]).",
  kaynak:"TDV, madde: altin-orda-hanligi (1502 sonu) + data/kronoloji_kirim.js:123; dunya:4 aynı kayıttan OKUNDU" }

];

;
/* ==== data/kronoloji_hollanda.js ==== */
// =====================================================================
// HOLLANDA — Birleşik Provinsler ve Krallık (pilot, 22 Ağustos 2026)
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `index.html`e ve `arac/girdi.py`ye BAĞLANMADI;
//    bağlamayı koordinatör yapar (şartname §5).
//
// ── ŞEMA — KRONOLOJI-SARTNAME.md §3 ──────────────────────────────────
//   onem   1-5  BU DOSYANIN DEVLETİ (Hollanda) için ağırlık
//   dunya  1-5  OLAYIN kendisine ait — HER DOSYADA AYNI
//   yer_id      yerleşim adına BİREBİR (girdi.yukle ile doğrulandı)
//
// 🔴 `dunya` DEVRALINDI, UYDURULMADI — şartname §3.2: *aynı olay farklı
//    dosyalarda farklı `dunya` taşırsa KUSURDUR.* Seksen Yıl Savaşları
//    zaten `kronoloji_ispanya.js`te yazılı; değerleri oradan ALDIM:
//    ```
//    1588-08-08 Armada          dunya:4   (ispanya.js:375)
//    1621-04-09 ateşkesin sonu  dunya:3   (ispanya.js:414)
//    1625-06-05 Breda           dunya:2   (ispanya.js:419)
//    1639-10-21 Downs           dunya:3   (ispanya.js:429)
//    1648-01-30 Münster         dunya:4   (ispanya.js:449)
//    1648-10-24 Vestfalya       dunya:5   (kronoloji_habsburg.js — benim dosyam)
//    ```
//    ⚠️ Bu altı olayı MÜKERRER YAZMADIM: İspanya dosyasındaki karşılıkları
//    duruyor, burada yalnız **Hollanda tarafından** ve `onem`i Hollanda'ya
//    göre yazıldı. Aynı olay iki dosyada olabilir; `dunya`sı aynı olmalıdır.
//
// ── NİÇİN BU DEVLET BÖYLE ANLATILIYOR ────────────────────────────────
// Şartname §2: *savaş-siyaset kronolojisi yazmak kolay ve eksiktir.*
// Hollanda'da bu, bir üslup tercihi değil **tarihin kendisi**: 17. yüzyılda
// dünyanın en zengin devletiydi ve modern **anonim şirket · borsa · takas
// bankası · deniz hukuku · mikroskop** bu ülkede doğdu. Bir Hollanda
// kronolojisini savaşlardan kurmak, devletin asıl mirasını atlamak olurdu.
// ⇒ İktisadî ve ilmî kalemler burada dolgu değil **omurga**dır.
//
// ── KAPSAM ───────────────────────────────────────────────────────────
// **1568-1923.** Öncesi (Burgonya/Habsburg Hollandası) ayrı madde değil,
// açılış maddesinin içinde.
//
// ── KAYNAK (§4) — SLUG SINAVI BU OTURUMDA ÖLÇÜLDÜ ────────────────────
// ```
// 🟢 hollanda      200 — GÖVDESİ OKUNDU, Osmanlı ilişkileri çok zengin
// 🟢 kapitulasyon  200
// 🔴 felemenk 302 · haga 302 · amsterdam 302 · lahey 302 · grotius 302 ·
//    felemenkler 302
// ```
// ⚠️ Koordinatörün brifingi *"`felemenk` · `haga` denenebilir"* diyordu;
//    **ikisi de ÖLÜ çıktı.** Ölçüm brifingi çürüttü, `hollanda` tuttu.
// AKADEMİK KAYNAKLAR (gövdeleri okundu):
//   Leiden Üniversitesi (Grotius · Leiden Law School kronolojisi)
//   UvA-DARE — Petram, 'The world's first stock exchange … 1602-1700'
//   Huygens Instituut / KNAW — Wisselbank kaynak neşri · Leeuwenhoek mektupları
//   Oxford Faculty of History — Tulipmania
//   Rijksmuseum — VOC
//   depo: `data/kronoloji_ispanya.js` (İSPANYA KRONOLOJİ oturumu)
//
// 🔴 OKUMADIĞIM ESERE ATIF YAZMADIM.
// =====================================================================

window.KRONOLOJI_HOLLANDA = [

// I. İSYAN VE CUMHURİYETİN DOĞUŞU (1568-1609)

{ t:"1568-01-01", b:"Seksen Yıl Savaşları'nın başlaması — İspanya'ya karşı isyan", tur:"isyan", onem:5, dunya:3, kapsam:"dis", etiket:["isyan","askeri","din","konu-askeri","konu-isyan","konu-din"], yer_id:"", kapsam_genis:true,
  odak_yer:["Amsterdam","Anvers (Antwerpen)","Gent","Utrecht"],
  d:"Habsburg Hollandası'nın on yedi vilâyeti, İspanyol merkezîleşmesine ve engizisyona karşı ayaklandı. Seksen yıl sürecek savaş, Avrupa'nın ilk başarılı bağımsızlık mücadelesi ve ilk büyük cumhuriyetçi devlet kuruluşudur.",
  kaynak:"TDV `hollanda` (gövdesi okundu): İspanya'ya karşı bağımsızlık mücadelesi anlatısı · ⚠️ GÜN DOĞRULANMADI (yıl damgası)" },

{ t:"1575-02-08", b:"Leiden Üniversitesi'nin kurulması", tur:"kultur", onem:4, dunya:3, kapsam:"ic", etiket:["bilim","kultur","konu-bilim","konu-kultur","konu-egitim"], yer_id:"", odak_yer:["Rotterdam","Amsterdam"],
  d:"İsyanın en ağır günlerinde, kuşatmaya direnen Leiden'e ödül olarak bir üniversite kuruldu. Şarkiyat ve İslâm araştırmaları da dâhil, kurum kısa sürede Avrupa'nın ilk sıradaki ilim merkezlerinden biri hâline geldi; Grotius bu üniversitenin öğrencisidir.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"Hollanda'da İslâm ve şarkiyat araştırmaları XVI. yüzyılın sonlarına doğru, Leiden Üniversitesi'nin kurulması (1575…)\" · Leiden Üniversitesi, 'Timeline: 450 years of Leiden Law School' · ⚠️ GÜN DOĞRULANMADI · ⚠️ yer_id BOŞ: Leiden yerleşim listesinde YOK (ölçüldü)" },

{ t:"1579-01-23", b:"Utrecht Birliği — kuzey vilâyetlerinin birleşmesi", tur:"kurulus", onem:5, dunya:3, kapsam:"ic", etiket:["anayasa","ittifak","konu-siyasi","konu-idari","konu-diplomasi","konu-islahat","konu-hukuk"], yer_id:"Utrecht",
  d:"Kuzeydeki vilâyetler ortak savunma ve iç işlerde egemenlik esasına dayanan bir birlik kurdu. Bu metin Birleşik Provinsler'in fiilî anayasası oldu ve 1795'e kadar yürürlükte kaldı; TDV bağımsızlığın kazanıldığı tarih olarak 1579'u verir.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"Hollanda, 1579 yılında İspanya'dan bağımsızlığını kazandıktan hemen sonra deniz aşırı ülkelere açılmak için büyük çaba harcadı\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1581-07-26", b:"Feragat Bildirisi — kralın azledilmesi", tur:"anayasa", onem:5, dunya:4, kapsam:"ic", etiket:["anayasa","isyan","darbe-siyasi","konu-isyan","konu-darbe","konu-islahat","konu-hukuk"], yer_id:"",
  d:"Genel Meclis, II. Felipe'yi hükümdarlıktan azlettiğini ilan etti: bir hükümdar tebaasına karşı yükümlülüklerini çiğnerse tebaanın onu görevden alma hakkı vardır. Bir halkın kralını hukukî gerekçeyle azlettiği bu metin, Avrupa siyasî düşüncesinde bir ilktir.",
  kaynak:"bulunamadı — okunan kaynaklarda GÜN doğrulanmadı · ⚠️ yer_id BOŞ: Lahey (Den Haag) yerleşim listesinde YOK, oysa Genel Meclis'in merkezidir (ölçüldü, koordinatöre bildirildi)" },

{ t:"1585-08-17", b:"Anvers'in düşüşü ve kuzeye göç", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis", etiket:["askeri","ekonomi","sosyal","konu-askeri","konu-ekonomi","konu-sosyal","konu-demografi"], yer_id:"Anvers (Antwerpen)",
  gun:"17 Ağustos 1585 Gregoryen",
  d:"İspanyol ordusu Anvers'i geri aldı ve Schelde nehri kapatıldı. Şehrin tüccarları, zanaatkârları ve sermayesi kuzeye — özellikle Amsterdam'a — göç etti; Altın Çağ'ın sermaye birikimi büyük ölçüde bu göçle kuruldu. Güneyin kaybı, kuzeyin zenginliğinin sebebidir.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1588-08-08", b:"İspanyol Armadası'nın bozgunu", tur:"savas", onem:4, dunya:4, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", odak_yer:["Calais","Dover"],
  gun:"8 Ağustos 1588 Gregoryen (Gravelines; İngiliz takviminde 29 Temmuz)",
  d:"Manş'ta dağıtılan Armada, İspanya'nın Hollanda isyanını denizden boğma planını sona erdirdi. Cumhuriyet için bu, hayatta kalma ile yok olma arasındaki eşiktir.",
  kaynak:"depo `data/kronoloji_ispanya.js:375` (İSPANYA KRONOLOJİ oturumu) — `dunya:4` oradan devralındı, mükerrer değil Hollanda tarafı" },

{ t:"1602-03-20", b:"VOC'nin kurulması — dünyanın ilk anonim şirketi", tur:"ekonomi", onem:5, dunya:5, kapsam:"dis", etiket:["ekonomi","teknoloji","konu-bilim","konu-ekonomi"], yer_id:"Amsterdam",
  gun:"20 Mart 1602 Gregoryen",
  d:"Birleşik Doğu Hindistan Şirketi, rakip Hollanda şirketlerinin birleştirilmesiyle kuruldu ve devletten savaş açma, antlaşma yapma, kale inşa etme yetkisi aldı. Hisseleri halka açık satıldı; 1602'de açılan abonelik büyük ilgi gördü ve binlerce yatırımcı sermayesini şirketin odalarına yatırdı. VOC 1602-1800 arasında dünyanın en büyük ticaret ve denizcilik şirketiydi.",
  kaynak:"UvA-DARE, L. Petram, 'The world's first stock exchange: how the Amsterdam market for Dutch East India Company shares became a modern securities market, 1602-1700': \"When subscriptions in the VOC opened in 1602 they proved immensely popular, with thousands of investors placing their capital in the company's chambers\" · Rijksmuseum: \"the world's largest trading and shipping company from 1602 to 1800\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1602-01-01", b:"Amsterdam Borsası — hisse senedinin doğuşu", tur:"ekonomi", onem:4, dunya:5, kapsam:"ic", etiket:["ekonomi","konu-ekonomi"], yer_id:"Amsterdam",
  gun:"1602 (kaynak yıl verir; önceki 21 Mart günü kaynaksızdı)",
  d:"VOC hisseleri dünya tarihinde ilk kez büyük ölçekte alınıp satılmaya başlandı. Amsterdam piyasası 1630-1650 arasında vadeli işlem, açığa satış ve türev sözleşmeleriyle modern bir menkul kıymet piyasasına dönüştü; bugünkü borsanın atası budur.",
  kaynak:"UvA-DARE, Petram: \"In seventeenth-century Amsterdam, shares were traded on a large scale for the first time in world history\" · \"The Amsterdam stock market developed into a modern securities market during the period 1630-1650\" · ⚠️ GÜN DOĞRULANMADI (VOC ile aynı yıl; ayrı madde, çünkü şirket ile piyasa ayrı kurumlardır)" },

{ t:"1604-01-01", b:"Osmanlı'ya ilk başvuru — esirlerin serbest bırakılması", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis", etiket:["diplomasi","konu-diplomasi"], yer_id:"İstanbul",
  d:"Hollandalılar ele geçirdikleri bir İspanyol kadırgasındaki müslüman esirleri serbest bırakıp padişaha bir mektupla gönderdiler; Cezayirli ve Tunuslu korsanların elindeki Hollandalılar için yardım ve kendi bayraklarıyla ticaret hakkı istediler. Başvuruya cevap verilemedi.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"Hollandalılar, Osmanlı Devleti ile doğrudan ilişki kurmak için 1604 yılında bir girişimde bulundular… Fakat çeşitli gaileler yüzünden Hollanda'nın bu ilk başvurusuna cevap verilemedi\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1609-01-31", b:"Amsterdam Wisselbank — Avrupa'nın ilk kamu takas bankası", tur:"ekonomi", onem:4, dunya:4, kapsam:"ic", etiket:["ekonomi","reform","konu-ekonomi","konu-islahat"], yer_id:"Amsterdam",
  gun:"31 Ocak 1609 Gregoryen",
  d:"Amsterdam Şehir Meclisi, dolaşımdaki sikke kargaşasına düzen getirmek için Wisselbank'ı kurdu. Banka mevduata dayalı sabit değerli bir hesap parası yarattı; Amsterdam gulden'i iki yüzyıl boyunca Avrupa ticaretinin ölçü birimi oldu ve modern merkez bankacılığının öncüsü sayıldı.",
  kaynak:"Huygens Instituut / KNAW, 'Exchange Banks in Amsterdam, Middelburg, Delft and Rotterdam 1603-1820' kaynak neşri: \"The Exchange Bank (Wisselbank) in Amsterdam was founded in 1609 by the Municipal Council of Amsterdam in order to bring order to the chaos that surrounded ready cash at the time\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1609-04-09", b:"On İki Yıllık Ateşkes — fiilî bağımsızlığın tanınması", tur:"antlasma", onem:5, dunya:3, kapsam:"dis", etiket:["antlasma","diplomasi","konu-diplomasi"], yer_id:"Anvers (Antwerpen)",
  gun:"9 Nisan 1609 Gregoryen",
  d:"İspanya, isyancılarla ateşkes imzalayarak Birleşik Provinsler'i fiilen muhatap kabul etti. Bu on iki yıl, cumhuriyetin ticaretini, donanmasını ve kurumlarını savaşsız kurduğu dönemdir — Altın Çağ'ın kuluçkası.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"İspanya'nın Hollandalı isyancılarla mütareke imzalamasından (1609) sonra Osmanlılar Felemenk Cumhuriyeti ile ittifak yapmanın gerekliliğini anladılar\" · `dunya:3` ateşkesin SONU ile aynı (`ispanya.js:414`) · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1609-01-01", b:"Grotius'un Mare Liberum'u — denizlerin serbestliği", tur:"kultur", onem:4, dunya:5, kapsam:"ic", etiket:["bilim","kultur","ekonomi","konu-bilim","konu-ekonomi","konu-kultur"], yer_id:"", odak_yer:["Rotterdam","Amsterdam"],
  gun:"1609 (Leiden, Elzevier; kaynak ay/gün vermez — önceki 1 Kasım kaynaksızdı)",
  d:"Leiden'in yayıncısı Elzevier, VOC'nin ısmarladığı Mare Liberum'u bastı; Hugo Grotius denizlerin bütün milletlere açık olduğunu, kimsenin okyanusu mülk edinemeyeceğini savundu. Metin, De jure praedae adlı büyük eserin bir parçasıydı ve bugün hâlâ deniz hukukunun kurucu ilkesidir — modern devletler hukuku bu risaleyle başlar.",
  kaynak:"Leiden Üniversitesi, 'Hugo Grotius: from Leiden student to founding father of international law' ve Grotius web sergisi: \"In 1609, the university's publisher Elzevier published Mare Liberum (The Freedom of the Seas), commissioned by the Dutch East India Company\"; De jure praedae'nin parçası olduğu; ilkenin bugün de deniz hukukunun temeli sayıldığı · ⚠️ GÜN DOĞRULANMADI · ⚠️ yer_id BOŞ: Leiden yok" },

// II. OSMANLI İLE İLİŞKİ VE ALTIN ÇAĞ (1610-1660)

{ t:"1610-01-01", b:"Kaptanıderyâ Halil Paşa'nın daveti", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis", etiket:["diplomasi","konu-diplomasi"], yer_id:"İstanbul",
  d:"Akdeniz'de İspanyol donanmasına karşı mücadele eden Kaptanıderyâ Kayserili Halil Paşa, Venedik'teki Hollandalı tüccarlar eliyle Hollanda'ya bir mektup gönderdi. Mektupta padişahın serbest ticaret hakkı tanımaya karar verdiği belirtiliyor ve İstanbul'a bir temsilci gönderilmesi isteniyordu; ilişkiyi başlatan davet Osmanlı tarafından geldi.",
  kaynak:"TDV `hollanda` (gövdesi okundu): Halil Paşa'nın 1610'da gönderdiği mektup ve temsilci daveti (Erdbrink'e atıfla) · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1611-09-07", b:"Cornelis Haga'nın İstanbul'a yola çıkması", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis", etiket:["diplomasi","konu-diplomasi"], yer_id:"",
  d:"Genel Meclis, Halil Paşa'nın teklifini görüşüp Cornelis Haga başkanlığında bir heyet göndermeye karar verdi. Haga'nın tâlimatnâmesi iki maddeydi: esirlerin serbest bırakılması ve Hollanda bayrağı altında ticaret hakkı.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"7 Eylül 1611'de yola çıkan Haga\" · ⚠️ yer_id BOŞ: Lahey yok" },

{ t:"1612-03-17", b:"Haga'nın İstanbul'a varışı", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis", etiket:["diplomasi","konu-diplomasi"], yer_id:"İstanbul",
  d:"Bazı Avrupa ülkelerini dolaştıktan sonra Haga İstanbul'a ulaştı. Fransız ve İngiliz elçileri, İspanya'ya isyan hâlindeki bir topluluğun temsilcisinin kabulünün padişahın itibarını sarsacağını ileri sürerek huzura çıkmasını engellemeye çalıştılar.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"17 Mart 1612'de İstanbul'a geldi\"; Fransız ve İngiliz elçilerinin engelleme girişimi" },

{ t:"1612-05-01", b:"I. Ahmed'in Haga'yı kabulü — cumhuriyetin resmen tanınması", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis", etiket:["diplomasi","konu-diplomasi"], yer_id:"İstanbul",
  d:"Kaptanıderyâ Halil Paşa ve bazı devlet adamlarının yardımıyla Haga padişah tarafından kabul edildi. Böylece İspanya'ya karşı bağımsızlık mücadelesi veren Felemenk Birleşik Cumhuriyeti, Osmanlı Devleti tarafından resmen tanınmış oldu — bir Avrupa büyük gücünden önce.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"Haga 1 Mayıs 1612'de I. Ahmed tarafından kabul edildi… Böylece Osmanlılar'ın düşmanı olan İspanya'ya karşı bağımsızlık mücadelesi veren Felemenk Birleşik Cumhuriyeti Osmanlı Devleti tarafından resmen tanınmış oldu\"" },

{ t:"1612-07-06", b:"Osmanlı ahidnâmesi — Hollanda kapitülasyonları", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", etiket:["diplomasi","ekonomi","antlasma","konu-diplomasi","konu-ekonomi"], yer_id:"İstanbul",
  d:"Venedik, Fransa ve İngiltere elçilerinin bütün engellemelerine rağmen Haga I. Ahmed'den ahidnâme aldı. Fransa ve İngiltere'ye verilenlerle aynı olan bu belge, cumhuriyete İstanbul'da elçilik ve Osmanlı iskelelerinde konsolosluk açma hakkı ile adlî ve ticarî imtiyazlar tanıdı. Hollanda tüccarı artık kendi bayrağı altındaydı.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"I. Ahmed'den bir ahidnâme almayı başardı (6 Temmuz 1612). Fransa ve İngiltere'ye verilenlerle aynı olan bu ahidnâmeyle Felemenk Birleşik Cumhuriyeti'ne İstanbul'da elçilik ve Osmanlı ülkesi dahilindeki iskelelerde konsolosluk açma hakkı verilmiş, bazı adlî ve ticarî imtiyazlar tanınmıştı\" (A. H. de Groot, The Ottoman Empire and the Dutch Republic'e atıfla)" },

{ t:"1613-01-01", b:"Ömer Ağa'nın Hollanda'ya gönderilmesi ve Haga'nın daimî elçi olması", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis", etiket:["diplomasi","konu-diplomasi"], yer_id:"",
  d:"Osmanlı hükûmeti yeni müttefikini tanımak için Halil Paşa'nın adamlarından Ömer Ağa'yı gönderdi; korsanların elinden kurtarılan esirlerle birlikte gelen elçi büyük merasimle karşılandı, genel meclisi ve şehirleri gezip müsbet intibalarla döndü. Padişahın isteği üzerine Genel Meclis Haga'nın İstanbul'da daimî elçi olarak kalmasına karar verdi.",
  kaynak:"TDV `hollanda` (gövdesi okundu): Ömer Ağa'nın görevi, karşılanışı ve dönüşü (1613); \"Padişahın isteği üzerine Hollanda Genel Meclisi Haga'nın dâimî elçi olarak İstanbul'da kalmasına karar verdi\" · ⚠️ yer_id BOŞ: Lahey yok" },

// V. SÖMÜRGE İMPARATORLUĞU VE TARAFSIZLIK (1600-1923)

{ t:"1619-05-30", b:"Batavia'nın kurulması — Doğu'daki başkent", tur:"kurulus", onem:4, dunya:3, kapsam:"dis", etiket:["toprak-kazanc","ekonomi","konu-askeri","konu-siyasi","konu-ekonomi"], yer_id:"Batavia (Cakarta)",
  gun:"30 Mayıs 1619 Gregoryen",
  d:"VOC, Java'da Jayakarta'nın yerine Batavia'yı kurdu ve Asya ticaret ağının merkezi yaptı. Şehir üç yüz yılı aşkın süre Hollanda Doğu Hint İmparatorluğu'nun başkenti olarak kaldı.",
  kaynak:"TDV `hollanda` (gövdesi okundu): Hollanda sömürgeciliği bölümü — bağımsızlıktan hemen sonra denizaşırı açılım · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1621-04-09", b:"On İki Yıllık Ateşkesin sona ermesi — savaşın yeniden başlaması", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Amsterdam",
  gun:"9 Nisan 1621 Gregoryen",
  d:"Ateşkes yenilenmedi ve İspanya ile savaş yeniden başladı. Bu ikinci evrede cumhuriyet artık isyancı bir vilâyet değil, denizaşırı imparatorluğu olan bir deniz gücüydü.",
  kaynak:"depo `data/kronoloji_ispanya.js:414` — `dunya:3` oradan devralındı" },

{ t:"1625-06-05", b:"Breda'nın kaybı", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","kusatma","konu-askeri"], yer_id:"", odak_yer:["Rotterdam","Anvers","Utrecht"],
  gun:"5 Haziran 1625 Gregoryen",
  d:"Spínola'nın uzun kuşatması Breda'yı düşürdü; Velázquez'in tablosu teslim sahnesini İspanyol zaferinin simgesi yaptı. Kale 1637'de geri alındı.",
  kaynak:"depo `data/kronoloji_ispanya.js:419` — `dunya:2` oradan devralındı · ⚠️ yer_id BOŞ: Breda yok" },

{ t:"1629-04-14", b:"Christiaan Huygens'in doğumu", tur:"kultur", onem:3, dunya:4, kapsam:"ic", etiket:["bilim","konu-kisiler","konu-bilim","konu-kultur"], yer_id:"", odak_yer:"Rotterdam",
  gun:"14 Nisan 1629 Gregoryen",
  d:"Diplomat ve şair Constantijn Huygens'in oğlu Lahey'de doğdu. Satürn'ün halkasını tanımlayan, sarkaçlı saati icat eden ve ışığın dalga kuramını kuran Christiaan Huygens, cumhuriyetin dünya ilmine en büyük katkısıdır.",
  kaynak:"Huygens Instituut / KNAW ve akademik kaynaklar: \"Christiaan Huygens was born on April 14, 1629, in Den Haag (The Hague), in the Dutch Republic. He was the son of Constantijn Huygens, a diplomat with a strong background in philosophy and the natural sciences\" · ⚠️ yer_id BOŞ: Lahey yok" },

{ t:"1632-11-24", b:"Spinoza'nın doğumu", tur:"kultur", onem:4, dunya:5, kapsam:"ic", etiket:["kultur","din","bilim","konu-kisiler","konu-bilim","konu-din","konu-kultur"], yer_id:"Amsterdam",
  gun:"24 Kasım 1632 Gregoryen",
  d:"Baruch Spinoza, Amsterdam'ın Portekiz kökenli yahudi cemaatinin tanınmış bir ailesinde doğdu ve on yedi yaşında okulu bırakıp ailenin ithalat işine girdi. Aydınlanma'nın en radikal filozofu, cumhuriyetin görece hür yayın ikliminde yetişti — ama sansürlenen az sayıdaki yazardan biri olarak o iklimin sınırını da gösterdi.",
  kaynak:"UvA, 'Dutch Culture and Society in European Context' — Spinoza: \"born into a prominent family in Amsterdam's Portuguese-Jewish immigrant community in 1632, left school at seventeen to help run the family's importing business\"; \"Spinoza remains one of the anomalies as one of the few authors to be censored in what was an otherwise liberal publishing climate compared to other European states\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1637-02-03", b:"Lâle çılgınlığı — tarihin ilk spekülatif balonu", tur:"ekonomi", onem:4, dunya:4, kapsam:"ic", etiket:["ekonomi","sosyal","konu-ekonomi","konu-sosyal"], yer_id:"Amsterdam",
  gun:"3 Şubat 1637 Gregoryen",
  d:"1636-37 kışında lâle soğanı fiyatları olağanüstü yükseldi ve aniden çöktü. Arka planda VOC'nin devasa kârlarının beslediği eşi görülmemiş bir refah vardı; tüccar sınıfının serveti bahçelere ve lâleye akıyordu. Vaka, spekülatif balonun bilinen ilk örneği olarak iktisat tarihine geçti.",
  kaynak:"Oxford, Faculty of History — 'Tulipmania: A Garden Historian's Perspective': \"Tulip madness (Tulpenwoerde), which became known as Tulipomania, took place in the Dutch United Provinces in 1636 and 1637\"; 1630'ların eşi görülmemiş refahı ve VOC kârlarının rolü · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1639-10-21", b:"Downs Deniz Savaşı — İspanyol donanmasının imhası", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", odak_yer:"Dover",
  gun:"21 Ekim 1639 Gregoryen",
  d:"Tromp komutasındaki Hollanda donanması İspanyol filosunu Downs açıklarında imha etti. İspanya'nın denizden Hollanda'ya asker taşıma imkânı bitti; deniz üstünlüğü kesin olarak el değiştirdi.",
  kaynak:"depo `data/kronoloji_ispanya.js:429` — `dunya:3` oradan devralındı" },

{ t:"1648-01-30", b:"Münster Antlaşması — bağımsızlığın tanınması", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", etiket:["antlasma","anayasa","konu-diplomasi","konu-islahat","konu-hukuk"], yer_id:"Münster",
  gun:"30 Ocak 1648 Gregoryen",
  d:"İspanya, Birleşik Provinsler'in bağımsızlığını resmen tanıdı ve seksen yıllık savaş sona erdi. Schelde'nin kapalı kalması da kabul edildi; Anvers'in ticaretinin Amsterdam'a akışı antlaşmayla kalıcılaştırıldı.",
  kaynak:"depo `data/kronoloji_ispanya.js:449` — `dunya:4` oradan devralındı" },

{ t:"1648-10-24", b:"Vestfalya Barışı — Avrupa düzeninde cumhuriyetin yeri", tur:"antlasma", onem:4, dunya:5, kapsam:"dis", etiket:["antlasma","diplomasi","konu-diplomasi"], yer_id:"Münster",
  gun:"24 Ekim 1648 Gregoryen",
  d:"Genel barışla Birleşik Provinsler, İmparatorluk'tan ayrılmış egemen bir devlet olarak Avrupa sistemine girdi. Bir tüccar cumhuriyeti, kral hanedanlarının kurduğu düzende eşit taraf sayıldı.",
  kaynak:"depo `data/kronoloji_habsburg.js` (aynı oturum) — `dunya:5`, M-0880'de ilan edilen değerle birebir" },

{ t:"1652-04-06", b:"Kap kolonisinin kurulması", tur:"kurulus", onem:4, dunya:3, kapsam:"dis", etiket:["toprak-kazanc","ekonomi","konu-askeri","konu-siyasi","konu-ekonomi"], yer_id:"Kap (Cape Town)",
  gun:"6 Nisan 1652 Gregoryen",
  d:"VOC, Doğu Hindistan yolundaki gemilere ikmal için Ümit Burnu'nda bir istasyon kurdu. İstasyon zamanla yerleşimci kolonisine dönüştü; Afrikaner toplumunun ve dilinin kökeni buradadır.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

// III. DENİZ HÂKİMİYETİ, FELAKET YILI VE İNGİLTERE TACI (1650-1700)

{ t:"1652-07-10", b:"Birinci İngiliz-Hollanda Savaşı", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","ekonomi","konu-askeri","konu-ekonomi"], yer_id:"",
  gun:"10 Temmuz 1652 — takvimi ÖLÇÜLEMEDİ (İngiliz ilânı Jülyen olabilir; kaynak bulunamadı)",
  d:"İngiltere'nin Seyrüsefer Kanunu'yla Hollanda taşımacılığını dışlaması savaşa yol açtı. İki deniz cumhuriyeti, ticaret yollarının denetimi için üç savaştan ilkine girdi.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1667-06-19", b:"Medway baskını — Thames'te Hollanda donanması", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", odak_yer:["Londra","Dover"],
  gun:"19 Haziran 1667 Gregoryen",
  d:"De Ruyter'in filosu Medway nehrini çıkıp İngiliz donanmasını demirlediği yerde yaktı ve amiral gemisini çekip götürdü. İngiliz tarihinde donanmanın yaşadığı en ağır aşağılanma, Hollanda tarihinde deniz gücünün zirvesidir.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1672-01-01", b:"Rampjaar — Felaket Yılı", tur:"kriz", onem:5, dunya:3, kapsam:"ic", etiket:["askeri","isyan","kriz","konu-askeri","konu-siyasi","konu-isyan"], yer_id:"", kapsam_genis:true,
  odak_yer:["Amsterdam","Utrecht","Nijmegen","Groningen"],
  d:"Fransa, İngiltere ve iki piskoposluk aynı anda saldırdı; kara ordusu çöktü, vilâyetlerin yarısı işgal edildi. Hollandalıların kendi deyişiyle halk çılgın, hükûmet çaresiz, ülke kurtarılamazdı; su hattı açılarak toprak bilerek sular altında bırakıldı. Kardeşler De Witt linç edildi ve III. William iktidara geldi.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI; okunan akademik kaynaklarda doğrulanmadı" },

{ t:"1676-01-01", b:"Leeuwenhoek ve mikroskobik canlıların keşfi", tur:"kultur", onem:4, dunya:5, kapsam:"ic", etiket:["bilim","teknoloji","konu-bilim","konu-kultur","konu-kesif"], yer_id:"", odak_yer:"Rotterdam",
  d:"Delft'li bez tüccarı Antoni van Leeuwenhoek, kendi yaptığı tek mercekli aletlerle serbest yaşayan mikroorganizmaları, mantar hiflerini, alyuvarları, kılcal dolaşımı, ağız bakterilerini ve spermatozoayı ilk kez belgeledi. Bulgularını Londra'daki Royal Society'ye iki yüzden fazla mektupla bildirdi; mikrobiyoloji Delft'in optik ve zanaat kültüründen doğdu.",
  kaynak:"Huygens Instituut / KNAW, 'Antoni van Leeuwenhoek — The Collected Letters' projesi ve akademik derleme: \"Using single-lens instruments, he documented the first observations of free-living microorganisms, fungal hyphae, red blood cells, capillary flow, oral bacteria, and spermatozoa in more than two hundred letters to the Royal Society of London\" · ⚠️ GÜN ve YIL DOĞRULANMADI (mektuplar 1670'lerden itibaren) · ⚠️ yer_id BOŞ: Delft yok" },

{ t:"1677-02-21", b:"Spinoza'nın ölümü ve Etika'nın yayımlanması", tur:"kultur", onem:4, dunya:4, kapsam:"ic", etiket:["kultur","din","konu-kisiler","konu-din","konu-kultur"], yer_id:"",
  gun:"21 Şubat 1677 Gregoryen",
  d:"Spinoza öldüğü yıl başyapıtı Etika ölümünden sonra basıldı. Cumhuriyetin yayın iklimi Avrupa'nın en hürüydü; yine de Spinoza'nın eserleri yasaklandı — Lodewijk Meyer, Adriaen Koerbagh ve Balthasar Bekker'in yazılarıyla birlikte Avrupa çapında tartışma yarattı.",
  kaynak:"UvA, 'Dutch Culture and Society in European Context': Spinoza'nın sansürlenmesi ve radikal düşünce akımının Altın Çağ'ın son on yıllarında Avrupa'da yarattığı tartışma · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1688-11-05", b:"III. William'ın İngiltere'ye çıkması — Şanlı İhtilâl", tur:"hanedan", onem:5, dunya:4, kapsam:"dis", etiket:["askeri","hanedan","diplomasi","konu-askeri","konu-diplomasi","konu-isyan","konu-hanedan"], yer_id:"",
  gun:"5 Kasım 1688 JÜLYEN (Torbay çıkarması, İngiliz takvimi) = 15 Kasım 1688 Gregoryen (Hollanda takvimi)",
  d:"Hollanda stadhouder'i William, Genel Meclis'in donattığı bir donanmayla İngiltere'ye çıktı ve tacı aldı. İki deniz gücü aynı hükümdarda birleşti; Fransa'ya karşı ittifak kuruldu, ama uzun vadede deniz ticaretinin ağırlığı Londra'ya kaydı — Hollanda için zafer ve gerileyişin başlangıcı aynı olaydır.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

// IV. GERİLEME, CUMHURİYETİN SONU VE KRALLIK (1700-1830)

{ t:"1713-04-11", b:"Utrecht Antlaşması — büyük güçlükten çıkış", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", etiket:["antlasma","diplomasi","konu-diplomasi"], yer_id:"Utrecht",
  gun:"11 Nisan 1713 Gregoryen",
  d:"İspanya Veraset Savaşı'nı bitiren antlaşmalar Utrecht'te imzalandı ve cumhuriyet güney sınırında bir kale hattı (Barrière) kazandı. Ama savaşın borcu devleti tüketmişti; Hollanda bundan sonra büyük güç siyasetinden çekildi ve ikinci sıra bir devlet oldu.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1795-01-19", b:"Batavya Cumhuriyeti — Fransız işgali ve eski düzenin sonu", tur:"son", onem:5, dunya:3, kapsam:"ic", etiket:["anayasa","isyan","konu-siyasi","konu-isyan","konu-islahat","konu-hukuk"], yer_id:"Amsterdam",
  d:"Fransız orduları donmuş nehirleri geçerek ülkeyi işgal etti; stadhouder İngiltere'ye kaçtı ve Birleşik Provinsler sona erdi. Yerine kurulan Batavya Cumhuriyeti, 1579 Utrecht Birliği'nin iki yüz on altı yıllık düzenini kaldırıp merkezî bir üniter devlet kurdu.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1799-12-31", b:"VOC'nin tasfiyesi", tur:"son", onem:4, dunya:3, kapsam:"dis", etiket:["ekonomi","konu-siyasi","konu-ekonomi"], yer_id:"Amsterdam",
  d:"Borç batağındaki şirketin imtiyazı yenilenmedi ve varlıkları devlete geçti. İki yüz yıl dünyanın en büyük ticaret şirketi olan VOC böylece sona erdi; sömürgeler doğrudan devlet idaresine girdi.",
  kaynak:"Rijksmuseum: VOC'nin \"1602 to 1800\" arasında dünyanın en büyük ticaret ve denizcilik şirketi olduğu · ⚠️ GÜN DOĞRULANMADI (kaynak 1800 diyor, tasfiye kararı 1799)" },

{ t:"1815-03-16", b:"Hollanda Krallığı'nın kurulması", tur:"kurulus", onem:5, dunya:3, kapsam:"ic", etiket:["anayasa","hanedan","konu-siyasi","konu-hanedan","konu-islahat","konu-hukuk"], yer_id:"Amsterdam",
  d:"Viyana Kongresi düzeninde, kuzey ile güney Hollanda birleştirilerek Orange hanedanı altında bir krallık kuruldu. Amaç Fransa'nın kuzey sınırında güçlü bir tampon devletti; iki yüz yıllık cumhuriyet geleneği monarşiyle yer değiştirdi.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"Hollanda Krallığı, ticarete dayanan Protestan kuzey bölgesiyle sanayiin hâkim olduğu Katolik güney bölgesini bir arada tutmak için büyük çaba harcadı\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1830-08-25", b:"Belçika'nın ayrılması", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis", etiket:["isyan","toprak-kayip","milliyetcilik","konu-askeri","konu-siyasi","konu-isyan"], yer_id:"Brüksel",
  d:"Güney bölgesinde çıkan ayaklanma sonucunda Belçika bağımsızlığını ilan etti. Uzun mücadelelerden sonra Hollanda bu bağımsızlığı 1839'da tanımak zorunda kaldı; Protestan-ticarî kuzey ile Katolik-sınaî güneyi bir arada tutma denemesi on beş yılda çöktü.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"1830 yılında çıkan bir ayaklanma sonucunda güney bölgesi Belçika adıyla bağımsızlığını ilân ederek Hollanda Krallığı'ndan ayrıldı. Uzun mücadelelerden sonra Hollanda bu bağımsızlığı tanımak zorunda kaldı (1839)\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1839-04-19", b:"Belçika bağımsızlığının tanınması", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", etiket:["antlasma","toprak-kayip","konu-askeri","konu-diplomasi"], yer_id:"Londra",
  d:"Londra Antlaşması'yla Hollanda Belçika'yı tanıdı ve sınır kesinleşti. Aynı antlaşma Belçika'nın tarafsızlığını büyük güçlerin güvencesine bağladı — 1914'te Almanya'nın ihlal edeceği belge budur.",
  kaynak:"TDV `hollanda` (gövdesi okundu): bağımsızlığın 1839'da tanınması · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1890-11-23", b:"Lüksemburg'un ayrılması", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", etiket:["hanedan","toprak-kayip","konu-askeri","konu-hanedan"], yer_id:"", odak_yer:"Lüksemburg",
  d:"Kişisel birlikle Hollanda kralına bağlı olan Lüksemburg, veraset kuralları gereği ayrıldı. Krallığın Avrupa'daki toprakları bugünkü sınırlarına indi.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"XIX. yüzyıl sonlarında Lüksemburg da Hollanda'dan ayrıldı (1890)\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1914-08-01", b:"I. Dünya Savaşı'nda tarafsızlık", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis", etiket:["diplomasi","konu-diplomasi"], yer_id:"", kapsam_genis:true,
  odak_yer:["Amsterdam","Rotterdam","Groningen","Maastricht"],
  d:"Hollanda savaşın dışında kalmayı başardı ve dört yıl boyunca tarafsızlığını korudu. Ülke hem Belçikalı mültecilerin sığınağı hem de abluka altındaki Almanya ile ticaretin kapısı oldu; tarafsızlık, 1830'dan beri sürdürülen çizginin en zorlu sınavıydı.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"I. Dünya Savaşı'nda tarafsız kalmayı başaran Hollanda Krallığı\" · ⚠️ GÜN DOĞRULANMADI" },

];

;
/* ==== data/kronoloji_isvec.js ==== */
// -*- coding: utf-8 -*-
// KRONOLOJI_ISVEC — İsveç Krallığı'nın kendi tarihyazımının ölçüsüyle kronoloji
// ---------------------------------------------------------------------------
// KAPSAM: 1281-1923 (proje penceresi); devletin kendi ömrü 1523-06-06 (Gustav
// Vasa'nın Strängnäs'te kral seçilmesi, Kalmar Birliği'nden fiilî kopuş) →
// 1923-10-29 (proje evrensel bitiş damgası; İsveç fiilen bugüne dek sürüyor).
// Kalmar Birliği dönemi (1397-1521) İsveç'in devlet öncesi arka planı olarak
// AYRICA dahil edildi (kapsam:"dis", `onem` düşük tutuldu — o dönem henüz
// bağımsız bir İsveç devleti değil, birlik krallığının bir parçası).
//
// ŞEMA (KRONOLOJI-SARTNAME.md §3, 21 Ağustos 2026 sürümü):
//   onem  BU DOSYANIN DEVLETİ (İsveç) için ağırlık, dosyadan dosyaya değişir.
//   dunya OLAYIN KENDİSİNE ait, HER dosyada AYNI olmalı. Ortak olaylarda
//         (Poltava, Narva, Nystad, Prut, Vestfalya) data/kronoloji_rusya.js
//         ve data/kronoloji_habsburg.js'teki `dunya` değerleri BİREBİR
//         alındı (şartname M-0929 talimatı: "mükerrer yazma, oradan al"):
//           1700 Narva        dunya:2  (rusya:333)
//           1709 Poltava      dunya:4  (rusya:343)
//           1711 Prut         dunya:3  (rusya:353)
//           1721 Nystad       dunya:4  (rusya:363)
//           1648 Vestfalya    dunya:5  (habsburg:245)
//   Saf İÇ / kültürel / bilimsel maddelerde `dunya` Vedomosti emsaline göre
//   1 tutuldu (rusya:851 — "İlk Rus gazetesi" dunya:1) — dunya ölçütü
//   DEVLETLER SİSTEMİNİ ne kadar değiştirdiğidir, dünya çapında ÜNü değil;
//   Linnaeus'un bilimsel etkisi muazzam ama İKİ DEVLETİN sınırını değiştirmedi.
//
// 🔴 YER_ID — ÖLÇÜLMÜŞ BİR BOŞLUK: data/yerlesimler*.js'te "Stockholm" kaydı
//   YOK (aranan başka ad da yok — grep ile doğrulandı). İsveç'in başkent
//   olaylarının BÜYÜK ÇOĞUNLUĞU (taç giyme, darbe, Riksdag kararları, ölüm)
//   Stockholm'de geçtiği için bu maddelerin yer_id'si BOŞ bırakıldı (şartname
//   §3.1 istisna ③ — "yeri gerçekten biliniyor ama eşleşen kayıt yok" burada
//   istisna ②'nin karşılığı değil, çünkü ② bir noktanın VARLIĞINI varsayıyor).
//   Sayı raporda ⑤'te. Öneri: Stockholm data/yerlesimler_avrupa.js'e eklenirse
//   bu dosyadaki ~40 maddenin yer_id'si tek seferde doldurulabilir.
//   Eşleşen nokta VARSA kullanıldı: Uppsala · Kalmar · Riga · Malmö · Narva ·
//   Kopenhag · Kiel · Varşova · Özü · Bender · Helsinki (hepsi
//   data/yerlesimler*.js'te birebir doğrulandı).
//
// KAYNAK DİSİPLİNİ (şartname §4):
//   TDV Batı/Kuzey Avrupa'yı KAPSAMIYOR (ölçülmüş, CLAUDE.md §4: "Batı Avrupa
//   %0") — TEK İSTİSNA Osmanlı-İsveç temas maddeleri, çünkü TDV'nin `isvec`
//   maddesi (İslâm Ansiklopedisi, canlı slug, içerik okundu, 2026-08-21) bu
//   temasları ayrıntılı ve tarihli işliyor:
//     kaynak:"isvec (TDV, islamansiklopedisi.org.tr/isvec, içerik okundu)"
//     kaynak:"prut-antlasmasi (TDV, içerik okundu)"
//   TDV'nin kapsamadığı saf İsveç iç tarihi için standart akademik referans
//   (CLAUDE.md §4 "TDV'nin kapsamadığı coğrafyalar için standart akademik
//   referans yeterlidir" — Batı Avrupa tam bu kapsam dışı coğrafyalardan biri
//   olarak zaten yazılı):
//     Franklin D. Scott, "Sweden: The Nation's History" (Southern Illinois
//       University Press, gözden geçirilmiş bs. 1988) — tek ciltlik standart
//       İngilizce İsveç tarihi, bu dosyanın omurga kaynağı.
//     Michael Roberts, "The Swedish Imperial Experience 1560-1718"
//       (Cambridge University Press, 1979) — Büyük Güç Çağı'nın standart
//       akademik incelemesi (Roberts bu alanın kurucu ismidir).
//     Byron J. Nordstrom, "Scandinavia since 1500" (University of Minnesota
//       Press, 2000) — Hürriyet Çağı, Bernadotte dönemi ve 19. yy için.
//   Bu üçü kitap neşridir (CLAUDE.md §4 "üniversite yayını" kategorisi),
//   tek tek slug sınaması gerekmez; tarih/olgu mainstream akademik konsensüs,
//   "bulunamadı" hiçbir ana omurga maddesinde kullanılmadı.
//
// devletler.js:823-832 (`isvec` künyesinin 3 maddelik eski kronolojisi) BU
// DOSYAYA TAŞINDI, TDV'nin `isvec` maddesiyle DAHA HASSAS TARİHLERLE
// DOĞRULANDI (aşağıda ⭐ işaretli) — devletler.js'e dokunulmadı (şartname §5).
// ---------------------------------------------------------------------------
// 🔴 KRONO-KUZEY-0929 (29 Eylül 2026): 1523-06-06 öncesi 6 madde (isvec-birlik-oncesi;
//    Kalmar ve Stockholm Kan Banyosu danimarka ile) data/kronoloji_cok_isvec.js'e
//    TAŞINDI. yer_id alanı HİÇ olmayan 62 maddeye yer_id:"" yazıldı (zorunlu alan;
//    Stockholm noktası hâlâ yok — yukarıdaki not).
window.KRONOLOJI_ISVEC = [

// === A) KALMAR BİRLİĞİ'NDEN VASA'NIN YÜKSELİŞİNE (1397-1523) ================

// === B) VASA HANEDANI VE REFORM (1523-1611) ==================================
{ t:"1523-06-06", b:"Gustav Vasa, Strängnäs'te kral seçildi ⭐", tur:"kurulus", onem:5, dunya:4, kapsam:"dis",
  etiket:["kurulus","siyaset","konu-siyasi"],
  yer_id:"",
  d:"Riksdag, Gustav Eriksson'u kral seçti ve İsveç, Kalmar Birliği'nden fiilen ayrıldı. Tarih bugün İsveç'in millî günüdür ve bu dosyada devletin başlangıç tarihi olarak alınmıştır.", ic_not_d:"(data/devletler.js:824 ile birebir)",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History — devletler.js:824 ile doğrulandı", yer_kon:[59.3776,17.0311] },
{ t:"1527-06-16", b:"Västerås Riksdag'ı — kilise mülklerine el kondu, Reform başladı", tur:"din", onem:5, dunya:2, kapsam:"ic",
  etiket:["din","reform","konu-din","konu-islahat"],
  d:"Ağır borçlar altındaki krallığın mâli sıkıntısını gerekçe gösteren Gustav Vasa, Riksdag'ı kilise topraklarını krala devretmeye ikna etti. Karar hem Reform'un İsveç'teki başlangıcı hem de kraliyet hazinesinin köklü biçimde güçlenmesi anlamına geldi.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_id:"Västerås" },
{ t:"1541-01-01", b:"İsveççe İncil (Gustav Vasa İncili) yayımlandı", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","din","konu-din","konu-kultur"],
  d:"Olaus ve Laurentius Petri kardeşlerin önderliğinde hazırlanan tam İsveççe İncil çevirisi basıldı. Çeviri, Luther'in Almanca İncil'i gibi modern İsveççenin standartlaşmasında belirleyici bir rol oynadı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_id:"Uppsala" },
{ t:"1544-01-13", b:"Västerås Riksdag'ı — veraset krallığı ilan edildi", tur:"kanun", onem:4, dunya:1, kapsam:"ic",
  etiket:["kanun","siyaset","konu-siyasi","konu-hukuk"],
  d:"Riksdag, tacın Gustav Vasa'nın erkek soyunda kalıtsal olarak kalacağını kabul etti; İsveç'in ortaçağdan beri süregelen seçimli krallık geleneği sona erdi. Karar Vasa hanedanının siyasi istikrarının hukuki temelini attı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_id:"Västerås" },
{ t:"1560-09-29", b:"Gustav Vasa öldü, IV. Erik tahta çıktı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"37 yıllık saltanatıyla İsveç'i birleştirip Reform'u yerleştiren Gustav Vasa'nın ölümüyle en büyük oğlu Erik tahta çıktı. Erik'in dönemi giderek artan zihinsel dengesizlik ve saray içi şiddetle (bkz. 1567 Sture Cinayetleri) anılacaktı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686] },
{ t:"1567-05-24", b:"Sture Cinayetleri", tur:"diger", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","kayip","konu-askeri","konu-siyasi"],
  d:"Paranoyaya kapılan IV. Erik, Sture ailesinden birkaç soyluyu bizzat hapishanede bıçaklayarak öldürttü. Olay kralın akıl sağlığına dair kesin şüpheleri doğurdu ve bir yıl sonra kardeşleri tarafından tahttan indirilmesinin zeminini hazırladı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_id:"Uppsala" },
{ t:"1568-01-01", b:"IV. Erik tahttan indirildi, III. Johan kral oldu", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","darbe-siyasi","konu-siyasi","konu-darbe","konu-hanedan"],
  yer_id:"",
  d:"Kardeşleri Johan ve Karl'ın önderliğindeki soylu ayaklanması, giderek dengesizleşen IV. Erik'i tahttan indirdi. Erik yıllarca hapiste tutuldu ve 1577'de zehirlenerek öldürüldüğü sanılıyor; III. Johan'ın saltanatı İsveç'i Polonya hanedan siyasetine sürükleyecekti.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686] },
{ t:"1587-01-01", b:"Osmanlı ile ilk resmî temas — Kral Sigismund'un mektubu", tur:"diplomasi", onem:3, dunya:1, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"],
  yer_id:"",
  d:"İsveç veliahtı ve aynı yıl Polonya kralı seçilen Sigismund (III. Zygmunt Waza), III. Murad'a bir mektup göndererek Osmanlı-İsveç ilişkilerinin ilk resmî belgeli temasını başlattı. Bu, XII. Karl'ın 1709'daki sığınmasından bir buçuk asır önceki, projede TDV kaynağıyla doğrulanmış en erken temastır.",
  kaynak:"isvec (TDV, içerik okundu)", kapsam_genis:true },
{ t:"1592-01-01", b:"III. Johan öldü; Sigismund İsveç-Polonya kişisel birliğini kurdu", tur:"hukumdar", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","taht","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"III. Johan'ın ölümüyle, zaten Polonya kralı olan oğlu Sigismund İsveç tahtına da geçti. Katolik Sigismund'un Luteryen İsveç'i yönetmesi, amcası Dük Karl ile açık bir çatışmaya sürükleyecek bir gerilim yarattı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686] },
{ t:"1593-03-20", b:"Uppsala Sinodu — Luteryen inancı resmî devlet mezhebi ilan edildi", tur:"din", onem:4, dunya:1, kapsam:"ic",
  etiket:["din","kanun","konu-din","konu-hukuk"], yer_id:"Uppsala",
  d:"Katolik kral Sigismund'un tahtta olduğu bir dönemde toplanan İsveç kilise sinodu, Augsburg İtirafnâmesi'ni ve saf Luteryen ortodoksiyi devletin resmî mezhebi olarak kesinleştirdi. Karar, Sigismund'a karşı Dük Karl'ın liderliğindeki muhalefetin dinî meşruiyetini sağladı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History" },
{ t:"1598-09-25", b:"Stångebro Savaşı — Dük Karl, Kral Sigismund'u yendi", tur:"savas", onem:4, dunya:1, kapsam:"ic",
  etiket:["askeri","siyaset","konu-askeri","konu-siyasi"],
  d:"Dük Karl'ın kuvvetleri, Polonya'dan asker getiren Sigismund'un ordusunu Linköping yakınında Stångebro'da bozguna uğrattı. Zafer, Sigismund'un İsveç üzerindeki fiilî otoritesini sona erdirdi ve Dük Karl'ı ülkenin gerçek yöneticisi hâline getirdi.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_id:"Linköping" },
{ t:"1599-07-24", b:"Sigismund İsveç tahtından resmen indirildi", tur:"hukumdar", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  yer_id:"",
  d:"Riksdag, Sigismund'u İsveç tahtından resmen azletti; Sigismund Polonya kralı olarak kalmaya devam etti ama iki taç arasındaki kişisel birlik sona erdi. Karar, on yıllarca sürecek İsveç-Polonya hanedan husumetinin (Vasa kolları arası) başlangıcıdır.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686] },
{ t:"1604-03-01", b:"IX. Karl resmen taç giydi", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  d:"Sigismund'un azlinden yıllar sonra fiilî yönetici olan Dük Karl, Norrköping Riksdag'ında resmen kral ilan edildi ve IX. Karl adını aldı. Kısa saltanatı, oğlu II. Gustav Adolf'un miras alacağı Baltık siyasetinin hazırlık evresi oldu.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_id:"Norrköping" },

// === C) BÜYÜK GÜÇ ÇAĞININ AÇILIŞI — II. GUSTAV ADOLF (1611-1632) ============
{ t:"1611-10-30", b:"IX. Karl öldü, II. Gustav Adolf 16 yaşında tahta çıktı", tur:"hukumdar", onem:5, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-kisiler","konu-hanedan"],
  d:"IX. Karl'ın ölümüyle henüz 16 yaşındaki oğlu Gustav Adolf tahta geçti; kraliyet danışmanı Axel Oxenstierna'nın rehberliğinde kısa sürede olgun bir devlet adamına dönüştü. Saltanatı İsveç'i bir Baltık büyük gücüne dönüştürecek otuz bir yıllık dönemin başlangıcıdır.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_id:"Nyköping" },
{ t:"1613-01-20", b:"Knäred Barışı — Kalmar Savaşı sona erdi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["antlasma","siyaset","konu-siyasi","konu-diplomasi"],
  yer_id:"",
  d:"Danimarka ile süregelen Kalmar Savaşı, İsveç'in ağır bir tazminat ödemesiyle sona erdi ama toprak kaybı yaşanmadı. Barış, Gustav Adolf'a doğu cephesine (Rusya, Polonya) yönelme imkânı tanıdı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[56.516,13.263] },
{ t:"1617-02-27", b:"Stolbova Antlaşması — Rusya'nın Baltık'a çıkışı kesildi", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis",
  etiket:["toprak","antlasma","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"Rusya ile imzalanan antlaşmayla İsveç, İngria ve Karelya'yı ilhak ederek Rusya'yı bir asrı aşkın süreyle Baltık kıyısından tamamen kesti. Bu, İsveç'in Baltık'ı bir 'İsveç gölü'ne çevirme siyasetinin ilk büyük kazanımıydı.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_kon:[59.65,33.51] },
{ t:"1621-09-15", b:"Riga'yı ele geçirdi", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis", yer_id:"Riga",
  etiket:["toprak","askeri","konu-askeri"],
  d:"Gustav Adolf'un ordusu, Livonya'nın en önemli limanı Riga'yı Polonya-Litvanya'dan aldı. Şehir bir asrı aşkın süre İsveç Livonyası'nın idari merkezi olarak kalacaktı.", ic_not_d:"(yerlesimler.js'teki 1621-09-15 kaydıyla birebir örtüşür) -- ic-capa referansi, cumle icinden cikarildi.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718 — data/yerlesimler.js:908 ile tarih birebir doğrulandı" },
{ t:"1628-08-10", b:"Vasa gemisi ilk seferinde battı", tur:"diger", onem:2, dunya:1, kapsam:"ic",
  etiket:["diger"],
  yer_id:"",
  d:"Kraliyetin en gösterişli savaş gemisi Vasa, Stockholm limanından ayrıldıktan yalnızca birkaç yüz metre sonra hafif bir rüzgârda alabora olup battı; aşırı üst ağırlık ve dar denge testleri sebep gösterildi. Gemi 1961'de bütünlüğünü koruyarak çıkarıldı ve bugün Stockholm'de bir müzenin merkezi eseridir.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686] },
{ t:"1629-09-16", b:"Altmark Ateşkesi — Prusya limanları İsveç'e geçti", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["antlasma","toprak","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"Polonya ile imzalanan altı yıllık ateşkesle İsveç, Danzig hariç Prusya kıyı limanlarının gümrük gelirlerini eline geçirdi. Ateşkes, Gustav Adolf'a Almanya'ya asker çıkarma imkânı sağlayan mali ve askerî serbestliği verdi.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_kon:[54.077,19.29] },
{ t:"1630-07-06", b:"II. Gustav Adolf, Peenemünde'ye çıkarak Otuz Yıl Savaşları'na girdi", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","din","konu-askeri","konu-din"],
  yer_id:"",
  d:"Protestan davasını ve Baltık çıkarlarını korumak amacıyla Gustav Adolf, on beş bin kişilik bir orduyla Pomeranya kıyısına çıktı. Bu çıkarma, savaşın seyrini değiştirecek İsveç müdahalesinin başlangıcıydı ve Protestan Avrupa'da kral bir kurtarıcı olarak selamlandı.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_kon:[54.15,13.77] },
{ t:"1631-09-17", b:"Breitenfeld Savaşı — büyük Protestan zaferi", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Leipzig yakınında Gustav Adolf'un yeni taktiklerle donatılmış ordusu, Kont Tilly komutasındaki Katolik Lig kuvvetlerini ağır bir yenilgiye uğrattı. Zafer İsveç'i savaşın belirleyici gücü hâline getirdi ve orduyu derinlemesine Almanya'ya soktu.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_kon:[51.407,12.376] },
{ t:"1632-11-06", b:"Lützen Savaşı — II. Gustav Adolf savaş alanında öldü", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","kayip","konu-askeri","konu-kisiler"],
  yer_id:"",
  d:"Wallenstein'ın kuvvetlerine karşı kazanılan Lützen zaferi, kralın sisli savaş meydanında süvari hücumu sırasında vurularak ölmesiyle gölgelendi. Ölümü, altı yaşındaki kızı Kristina'yı tahta çıkardı ve fiilî yönetimi kraliyet şansölyesi Axel Oxenstierna'ya bıraktı.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_kon:[51.249,12.147] },

// === D) KRALİÇE KRİSTİNA VE MUTLAKİYETE GİDİŞ (1632-1660) ===================
{ t:"1632-11-06", b:"Axel Oxenstierna naipliği fiilen başladı", tur:"idari", onem:4, dunya:1, kapsam:"ic",
  etiket:["idari","siyaset","konu-siyasi","konu-idari"],
  yer_id:"",
  d:"Gustav Adolf'un ölümüyle altı yaşındaki Kristina tahta çıkarken, devlet yönetimi güçlü ve tecrübeli şansölye Axel Oxenstierna'nın elinde toplandı. Oxenstierna, Otuz Yıl Savaşları'nın geri kalanında İsveç dış politikasını ve merkezi bürokrasisini bizzat inşa etti.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", kapsam_genis:true },
{ t:"1648-10-24", b:"Vestfalya Barışı — Batı Pomeranya, Wismar, Bremen-Verden kazanıldı", tur:"antlasma", onem:5, dunya:5, kapsam:"dis",
  etiket:["antlasma","toprak","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"Otuz Yıl Savaşları'nı bitiren Vestfalya Barışı'yla İsveç, Kutsal Roma İmparatorluğu içinde geniş topraklar (Batı Pomeranya, Wismar, Bremen-Verden piskoposlukları) kazandı ve imparatorluk anayasasının garantör güçlerinden biri oldu.", ic_not_d:"`dunya:5` değeri data/kronoloji_habsburg.js:245 ile birebir alınmıştır.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718 — dunya değeri kronoloji_habsburg.js:245'ten alındı", yer_kon:[52.2799,8.0472] },
{ t:"1649-10-01", b:"Descartes, Kraliçe Kristina'nın davetiyle Stockholm'e geldi", tur:"kultur", onem:2, dunya:1, kapsam:"ic",
  etiket:["kultur","bilim","konu-bilim","konu-kultur"],
  yer_id:"",
  d:"Kraliçe Kristina, Avrupa'nın önde gelen düşünürlerini sarayına çekme tutkusuyla Fransız filozof René Descartes'ı Stockholm'e davet etti. Descartes, kraliçeye sabah erken saatlerde ders verme alışkanlığının da katkısıyla o kışın soğuğuna yenik düşüp Şubat 1650'de Stockholm'de öldü.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686] },
{ t:"1654-06-06", b:"Kraliçe Kristina tahttan çekildi", tur:"hukumdar", onem:5, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  d:"Evlenmeyi reddeden ve giderek Katolikliğe yakınlaşan Kristina, kuzeni Karl Gustav lehine tahttan feragat etti. Feragat töreni, otuz yıl süren Vasa saltanatının bu kolunu kapatan sembolik bir dönüm noktasıdır.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_id:"Uppsala" },
{ t:"1655-01-01", b:"Kristina, Katolikliğe geçip Roma'ya yerleşti", tur:"din", onem:3, dunya:1, kapsam:"ic",
  etiket:["din","konu-din"],
  yer_id:"",
  d:"Tahttan çekildikten kısa süre sonra Kristina, gizlice Katolikliğe geçtiğini açıkladı ve Roma'ya yerleşerek ömrünün geri kalanını burada geçirdi. Katolik bir eski İsveç kraliçesinin varlığı dönemin Avrupa'sında büyük yankı uyandırdı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", kapsam_genis:true },
{ t:"1655-07-01", b:"X. Karl Gustav, Polonya'yı istila etti (\"Potop\")", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak","konu-askeri"],
  d:"Yeni kral X. Karl Gustav, zayıflamış Polonya-Litvanya Cumhuriyeti'ni istila ederek kısa sürede Varşova ve Krakov'u ele geçirdi. Polonya tarihyazımında \"Potop\" (Tufan) olarak anılan bu istila, ülkede yıkıcı bir işgal dönemi başlattı ama İsveç için kalıcı toprak kazancı getirmedi.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_id:"Varşova" },
{ t:"1658-02-26", b:"Roskilde Antlaşması — Skåne, Blekinge, Halland, Bohuslän kazanıldı ⭐", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis", yer_id:"Malmö",
  etiket:["toprak","antlasma","konu-askeri","konu-diplomasi"],
  d:"Danimarka'ya karşı kazanılan savaş sonunda imzalanan Roskilde Antlaşması, İsveç'e güney yarımadasının tamamını (Skåne, Blekinge, Halland, Bohuslän) kazandırdı ve bugünkü İsveç sınırlarının çekirdeğini oluşturdu.", ic_not_d:"Malmö'nün aynı gün İsveç idaresine geçtiği data/yerlesimler_avrupa.js:312 kaydıyla birebir doğrulanır.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718 — data/yerlesimler_avrupa.js:312 ile tarih birebir doğrulandı" },
{ t:"1660-02-13", b:"X. Karl Gustav öldü", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-kisiler","konu-hanedan"],
  d:"Danimarka'ya karşı yarım kalan ikinci seferi sürerken X. Karl Gustav ani bir hastalıktan öldü; oğlu XI. Karl henüz dört yaşındaydı. Ölümü bir naipler konseyi dönemini başlattı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_id:"Göteborg" },
{ t:"1660-05-27", b:"Kopenhag Antlaşması — Danimarka savaşı kesin olarak sona erdi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Kopenhag",
  etiket:["antlasma","konu-diplomasi"],
  d:"X. Karl Gustav'ın ölümüyle yarım kalan ikinci Danimarka seferi, Roskilde'nin şartlarını büyük ölçüde teyit eden ama Trondheim ve Bornholm'u Danimarka'ya iade eden bir antlaşmayla noktalandı. İsveç'in Roskilde'de kazandığı güney toprakları kalıcı hâle geldi.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History" },

// === E) MUTLAKİYET VE XI. KARL (1660-1697) ===================================
{ t:"1672-12-18", b:"XI. Karl reşit oldu, bizzat yönetime başladı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi","konu-hanedan"],
  yer_id:"",
  d:"On iki yıllık naipler konseyi döneminin ardından XI. Karl reşit olarak fiilî yönetimi devraldı. Naiplik döneminde ihmal edilen kraliyet mâliyesi ve toprakları, saltanatının en önemli iç siyaset meselesi olacaktı.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_kon:[59.3293,18.0686] },
{ t:"1676-12-04", b:"Lund Savaşı — İskonya Savaşı'nın dönüm noktası", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Danimarka'nın yeniden kazanılan Skåne'yi geri almaya çalıştığı İskonya Savaşı'nda, kanlı ve kayıpların çok ağır olduğu Lund Muharebesi İsveç zaferiyle sonuçlandı. Zafer, Roskilde'de kazanılan güney toprakların kalıcılığını askerî olarak güvenceye aldı.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_kon:[55.7047,13.191] },
{ t:"1680-01-01", b:"Büyük Redüksiyon — soylu topraklarının krala iadesi", tur:"reform", onem:5, dunya:1, kapsam:"ic",
  etiket:["reform","idari","konu-idari","konu-islahat"],
  yer_id:"",
  d:"Riksdag, naiplik döneminde soylulara devredilmiş kraliyet topraklarının büyük bölümünün krala iadesini (reduktion) onayladı. Reform, kraliyet hazinesini köklü biçimde güçlendirdi ve XI. Karl'ın mutlakiyetçi yönetiminin mâli temelini attı.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_kon:[59.3293,18.0686] },
{ t:"1693-01-01", b:"Riksdag, kralı \"sınırsız mutlak hükümdar\" ilan etti", tur:"reform", onem:5, dunya:1, kapsam:"ic",
  etiket:["reform","siyaset","konu-siyasi","konu-islahat"],
  yer_id:"",
  d:"Riksdag'ın resmî bir kararıyla XI. Karl'ın otoritesi \"Tanrı'dan başka kimseye hesap vermeyen, dilediği gibi hükmeden mutlak kral\" formülüyle tanımlandı. Karar, on yedinci yüzyıl sonu İsveç'ini Avrupa'nın en merkezî yönetilen mutlakiyetçi monarşilerinden birine dönüştürdü.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_kon:[59.3293,18.0686] },
{ t:"1697-04-05", b:"XI. Karl öldü, XII. Karl 15 yaşında tahta çıktı", tur:"hukumdar", onem:5, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"XI. Karl'ın vereme yenik düşmesiyle henüz on beş yaşındaki oğlu Karl tahta geçti; Riksdag olağanın dışında genç yaşta onu reşit ilan etti. Yirmi yıl sürecek saltanatı, İsveç'i büyük güç zirvesinden çöküşe götürecek Büyük Kuzey Savaşı ile anılacaktı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686] },

// === F) BÜYÜK KUZEY SAVAŞI VE XII. KARL'IN OSMANLI SIĞINMASI (1700-1721) =====
{ t:"1700-01-01", b:"Büyük Kuzey Savaşı başladı", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","siyaset","konu-askeri","konu-siyasi"],
  yer_id:"",
  d:"Danimarka, Rusya ve Saksonya-Polonya, genç ve tecrübesiz sandıkları XII. Karl'a karşı gizli bir ittifakla aynı anda savaş açtı.", ic_not_d:"`dunya:4` değeri data/kronoloji_rusya.js:327 ile birebir alınmıştır; savaş 1721'e dek sürüp İsveç'in büyük güç statüsünü sona erdirecekti.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718 — dunya değeri kronoloji_rusya.js:327'den alındı", kapsam_genis:true },
{ t:"1700-08-18", b:"Travendal Antlaşması — Danimarka savaştan çekildi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["antlasma","konu-diplomasi"],
  yer_id:"",
  d:"XII. Karl, İngiliz-Hollanda donanmasının desteğiyle Kopenhag önlerine çıkarma yaparak Danimarka'yı ittifaktan çekilmeye zorladı. Bu hızlı zafer, savaşın ilk yılında XII. Karl'a askerî deha ününü kazandırdı.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_kon:[53.94,10.31] },
{ t:"1700-11-30", b:"Narva Savaşı — sayıca çok üstün Rus ordusu yenildi", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"Narva",
  etiket:["askeri","konu-askeri"],
  d:"Kar fırtınası altında sekiz bin kişilik İsveç ordusu, otuz bin kişilik I. Petro'nun Rus ordusunu Narva önünde ağır bir bozguna uğrattı.", ic_not_d:"`dunya:2` değeri data/kronoloji_rusya.js:333 ile birebir alınmıştır; zafer XII. Karl'ın efsanesini pekiştirdi ama onu yanlışlıkla Rusya'yı hafife almaya sevk edecekti.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718 — dunya değeri kronoloji_rusya.js:333'ten alındı" },
{ t:"1704-07-02", b:"XII. Karl, Leszczyński'yi Polonya kralı ilan ettirdi", tur:"siyaset", onem:3, dunya:2, kapsam:"dis", yer_id:"Varşova",
  etiket:["siyaset","konu-siyasi"],
  d:"Rusya müttefiki Kral II. August'u tahttan uzaklaştırmak isteyen XII. Karl, kendi adayı Stanisław Leszczyński'yi Varşova'da Polonya kralı ilan ettirdi. Adım, Polonya'yı fiilen iç savaşa sürükledi ve İsveç'i yıllarca oradaki bir cepheye bağladı.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718" },
{ t:"1706-09-24", b:"Altranstädt Antlaşması — August Polonya tacından feragat etti", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","konu-diplomasi"],
  yer_id:"",
  d:"Saksonya'yı istila eden XII. Karl, Seçmen August'u Polonya tacından resmen feragat etmeye ve Leszczyński'yi tanımaya zorladı. Antlaşma XII. Karl'ın gücünün zirvesini temsil eder; bir yıl sonra Rusya'ya yönelecekti.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_kon:[51.301,12.221] },
{ t:"1708-09-28", b:"Lesnaya Savaşı — ikmal kolu imha edildi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","kayip","konu-askeri"],
  yer_id:"",
  d:"General Levenhaupt'un XII. Karl'ın ana ordusuna erzak ve cephane taşıyan on altı bin kişilik kolu, I. Petro'nun kuvvetlerince Lesnaya'da imha edildi. Kayıp, Rusya içlerine giren ana orduyu ikmalsiz bırakarak Poltava felaketinin zeminini hazırladı.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718", yer_kon:[53.85,30.87] },
{ t:"1709-07-08", b:"Poltava Savaşı — İsveç ordusu yok edildi", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"Poltava",
  etiket:["askeri","kayip","konu-askeri"],
  d:"Kışın soğuğu, ikmalsizlik ve XII. Karl'ın yaralı olması yüzünden zayıflamış İsveç ordusu, I. Petro'nun kuvvetlerince Poltava'da neredeyse tamamen imha edildi.", ic_not_d:"`dunya:4` değeri data/kronoloji_rusya.js:343 ile birebir alınmıştır; yenilgi İsveç'in büyük güç statüsünün fiilî sonunun ve XII. Karl'ın Osmanlı topraklarına sığınmasının başlangıcıdır.",
  kaynak:"isvec (TDV, içerik okundu) — dunya değeri kronoloji_rusya.js:343'ten alındı" },
{ t:"1709-08-08", b:"XII. Karl, Bender'e geçip Yûsuf Paşa ile görüştü", tur:"diplomasi", onem:4, dunya:1, kapsam:"dis", yer_id:"Bender",
  etiket:["diplomasi","konu-diplomasi"],
  d:"Poltava bozgunundan sonra önce Özü'ye sığınan XII. Karl, kısa süre sonra Bender'e geçerek Osmanlı yetkilileriyle ilk temaslarını kurdu. Böylece Osmanlı topraklarında beş yıl sürecek, Osmanlı-İsveç ilişkilerinin en özgün bölümünü oluşturan ikamet dönemi başladı.",
  kaynak:"isvec (TDV, içerik okundu)" },
{ t:"1710-11-20", b:"Osmanlı meşveret meclisi Rusya'ya savaş kararı aldı", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"],
  d:"XII. Karl'ın Bender'deki ısrarlı kışkırtmaları ve Rus baskısının artması üzerine Osmanlı hükûmeti Rusya'ya savaş ilanına karar verdi. Karar, doğrudan XII. Karl'ın diplomatik faaliyetinin bir sonucu olarak Prut Seferi'ne yol açtı.",
  kaynak:"isvec (TDV, içerik okundu)", yer_id:"İstanbul" },
{ t:"1711-07-21", b:"Prut Antlaşması — İsveç kralının güvenle dönüşü şart koşuldu", tur:"antlasma", onem:3, dunya:3, kapsam:"dis",
  etiket:["antlasma","diplomasi","konu-diplomasi"],
  yer_id:"",
  d:"Baltacı Mehmed Paşa'nın I. Petro ile imzaladığı Prut Antlaşması'na, XII. Karl'ın ülkesine güvenle dönmesine engel olunmayacağı hükmü eklendi.", ic_not_d:"`dunya:3` değeri data/kronoloji_rusya.js:353 ile birebir alınmıştır; buna rağmen XII. Karl memnun kalmadı ve antlaşmayı imzalayan hükûmeti eleştirdi.",
  kaynak:"prut-antlasmasi (TDV, içerik okundu) — dunya değeri kronoloji_rusya.js:353'ten alındı", yer_kon:[46.48,28.1] },
{ t:"1713-02-12", b:"Kalabalık Vakası — XII. Karl, Bender'den ayrılmaya zorlandı", tur:"diger", onem:4, dunya:1, kapsam:"dis", yer_id:"Bender",
  etiket:["askeri","diplomasi","konu-askeri","konu-diplomasi"],
  d:"Osmanlı topraklarını terk etmeyi reddeden XII. Karl, kendi maiyetiyle birlikte Bender'deki konutunu savunmaya kalkışınca Osmanlı kuvvetleri müdahale etti; kral kısa bir çatışmanın ardından esir alındı. Olay Avrupa'da \"Kalabalık\" adıyla tanındı ve Osmanlı-İsveç ilişkilerinin en gergin anı oldu.",
  kaynak:"isvec (TDV, içerik okundu)" },
{ t:"1714-07-12", b:"XII. Karl'a Osmanlı topraklarını terk etme izni verildi", tur:"diplomasi", onem:2, dunya:1, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"],
  d:"Kalabalık Vakası'ndan sonra Dimetoka'da gözetim altında tutulan XII. Karl'a, uzun görüşmelerin ardından ülkesine dönme izni verildi. İzin, beş yıllık Osmanlı ikametinin resmî olarak kapanışını işaret eder.",
  kaynak:"isvec (TDV, içerik okundu)", yer_id:"Dimetoka" },
{ t:"1714-10-11", b:"XII. Karl, Osmanlı topraklarından ayrılıp Avrupa'ya döndü", tur:"diger", onem:3, dunya:1, kapsam:"dis",
  etiket:["diger"],
  yer_id:"",
  d:"XII. Karl, küçük bir maiyetle at sırtında on beş günde Osmanlı topraklarından Avrupa'daki İsveç topraklarına ulaştı — dönemin Avrupa basınında geniş yankı uyandıran efsanevi bir yolculuk.", ic_not_d:"TDV'nin `isvec` maddesi varış tarihini bu şekilde vermektedir; yolculuğun son durağının kesin coğrafi ayrıntısı bu dosyada ayrıca doğrulanmamıştır.",
  kaynak:"isvec (TDV, içerik okundu) — yolculuğun son durak ayrıntısı ayrıca doğrulanmadı · BEYAN — ÇELİŞKİ (MGGP-NOT): kullanılan gün 1714-10-11 (TDV `isvec`: \"19 Eylül’de yola çıkıp 11 Ekim’de memleketine ulaştı\") · kullanılmayan kaynaklı gün 1714-11-11 (Encyclopaedia Britannica 1911, \"Charles XII.\": \"arrived unexpectedly at midnight, on the 11th of November, at Stralsund\") · neden: iki kaynak bir AY farklı; düzeltilmedi, beyan edildi. Takvim notu: İsveç 1712-1753 arası Jülyen takvimdeydi; EB1911'in takvimi belirtilmemiş (KRONO-AKADEMIK-1006)", kapsam_genis:true },
{ t:"1718-11-30", b:"XII. Karl, Fredriksten Kalesi kuşatmasında öldü", tur:"olum", onem:5, dunya:2, kapsam:"dis",
  etiket:["kayip","siyaset","konu-askeri","konu-siyasi","konu-kisiler"],
  yer_id:"",
  d:"Norveç'i Danimarka'dan koparmak amacıyla giriştiği ikinci sefer sırasında, Fredriksten Kalesi'ni kuşatan XII. Karl siperde başından vurularak öldü. Ölümünün suikast mi yoksa tesadüfi bir isabet mi olduğu tarihçiler arasında hâlâ tartışmalıdır; ölümüyle Vasa'nın erkek soyu da fiilen sona erdi.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.1167,11.3833] },
{ t:"1720-01-01", b:"Mutlakiyet kaldırıldı, yeni anayasa Hürriyet Çağı'nı başlattı", tur:"kanun", onem:5, dunya:1, kapsam:"ic",
  etiket:["kanun","reform","konu-islahat","konu-hukuk"],
  yer_id:"",
  d:"XII. Karl'ın ölümünün ardından Riksdag, 1680-93 mutlakiyetini tersine çeviren yeni bir hükûmet biçimi kabul etti; yürütme yetkisi büyük ölçüde Riksdag'a ve Devlet Konseyi'ne geçti. Bu anayasal dönüşüm, 1772'ye dek sürecek \"Hürriyet Çağı\"nı (frihetstiden) başlattı.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1720-03-24", b:"I. Fredrik kral seçildi", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  yer_id:"",
  d:"XII. Karl'ın kız kardeşi Ulrika Eleonora, kısa süren kendi saltanatının ardından tacı kocası Hessen-Kassel Prensi Fredrik'e devretti. I. Fredrik'in otuz bir yıllık saltanatı, gerçek gücün Riksdag'daki parti liderlerinde olduğu Hürriyet Çağı'nın simge hükümdarlığıdır.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1721-09-10", b:"Nystad Antlaşması — Baltık eyaletleri kaybedildi, büyük güç dönemi kapandı", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis",
  etiket:["toprak","antlasma","konu-askeri","konu-idari","konu-diplomasi"],
  yer_id:"",
  d:"Büyük Kuzey Savaşı'nı bitiren Nystad Antlaşması'yla İsveç, Livonya, Estonya, İngria ve güneydoğu Karelya'yı Rusya'ya kalıcı olarak bıraktı.", ic_not_d:"`dunya:4` değeri data/kronoloji_rusya.js:363 ile birebir alınmıştır; antlaşma bir asrı aşkın büyük güç statüsünün resmî sonu ve Rusya'nın Baltık'taki üstünlüğünün başlangıcıdır.",
  kaynak:"Michael Roberts, The Swedish Imperial Experience 1560-1718 — dunya değeri kronoloji_rusya.js:363'ten alındı", yer_kon:[60.8065,21.4133] },

// === G) HÜRRİYET ÇAĞI (1721-1772) ============================================
{ t:"1727-01-01", b:"Kozbekçi Mustafa Ağa, İsveç'e elçi gönderildi — Bender borçları talep edildi", tur:"diplomasi", onem:2, dunya:1, kapsam:"dis",
  etiket:["diplomasi","ekonomi","konu-diplomasi","konu-ekonomi"],
  yer_id:"",
  d:"Osmanlı hükûmeti, XII. Karl'ın Bender'deki beş yıllık ikameti sırasında biriken masrafların geri ödenmesini istemek üzere Stockholm'e bir elçi gönderdi. Görüşmeler, sonunda 1737-1740 arasındaki ticaret ve ittifak antlaşmalarına zemin hazırlayan uzun bir borç meselesinin başlangıcıdır.",
  kaynak:"isvec (TDV, içerik okundu)", yer_kon:[59.3293,18.0686] },
{ t:"1734-01-01", b:"1734 Kanunu (Sveriges Rikes Lag) yürürlüğe girdi", tur:"kanun", onem:3, dunya:1, kapsam:"ic",
  etiket:["kanun","idari","konu-idari","konu-hukuk"],
  yer_id:"",
  d:"Ortaçağ hukuk kodeksini yenileyen kapsamlı bir kanunlaştırma çalışması Riksdag tarafından kabul edildi. 1734 Kanunu, sonraki yüzyıllarda çok sayıda değişiklikle birlikte İsveç hukukunun temel iskeleti olarak varlığını sürdürdü.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1735-01-01", b:"Linnaeus, Systema Naturae'yi yayımladı", tur:"kultur", onem:4, dunya:1, kapsam:"ic",
  etiket:["bilim","kultur","konu-bilim","konu-kultur"],
  yer_id:"",
  d:"Uppsalalı doğa bilimci Carl Linnaeus, canlıları sınıflandıran ilk sistematik eseri Systema Naturae'yi yayımladı. Eser, sonraki Species Plantarum (1753) ile birlikte modern taksonominin ve ikili adlandırma sisteminin temelini attı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[52.16,4.497] },
{ t:"1737-01-10", b:"Osmanlı-İsveç ilk ticaret ahidnâmesi imzalandı", tur:"ekonomi", onem:3, dunya:1, kapsam:"dis",
  etiket:["ekonomi","diplomasi","konu-diplomasi","konu-ekonomi"],
  d:"XII. Karl'ın Bender borcu meselesinin sürdüğü görüşmeler sonunda iki devlet arasında ilk resmî ticaret ahidnâmesi imzalandı. Antlaşma, İsveç tüccarlarına Osmanlı sularında ticaret hakkı tanıdı.",
  kaynak:"isvec (TDV, içerik okundu)", yer_id:"İstanbul" },
{ t:"1739-01-01", b:"Bender borçları gemi ve tüfek karşılığında ödendi", tur:"ekonomi", onem:2, dunya:1, kapsam:"dis", yer_id:"Bender",
  etiket:["ekonomi","konu-ekonomi"],
  d:"Uzun süredir tartışma konusu olan XII. Karl'ın Bender ikameti masrafları, İsveç tarafından gemi ve silah teslimatlarıyla kısmen tasfiye edildi. Ödeme, iki devlet arasındaki 1740 ittifak antlaşmasının zeminini hazırladı.",
  kaynak:"isvec (TDV, içerik okundu)" },
{ t:"1739-01-01", b:"İsveç Bilimler Akademisi kuruldu", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["bilim","kultur","islahat","konu-bilim","konu-kultur","konu-islahat"],
  yer_id:"",
  d:"Linnaeus'un da aralarında bulunduğu altı kurucu üyeyle Kraliyet İsveç Bilimler Akademisi (Kungliga Vetenskapsakademien) kuruldu. Akademi bugün de faaliyetini sürdürmekte ve Nobel Fizik, Kimya ve Ekonomi ödüllerini vermektedir.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686] },
{ t:"1740-01-04", b:"Osmanlı-İsveç ittifak antlaşması imzalandı", tur:"ittifak", onem:3, dunya:1, kapsam:"dis",
  etiket:["ittifak","diplomasi","konu-diplomasi"],
  d:"1737 ticaret ahidnâmesinin ardından iki devlet arasında bir ittifak antlaşması imzalandı; aynı dönemde İsveç on dokuz bin tüfek teslimatıyla kalan Bender borcundan muaf tutuldu. Antlaşma, Rusya'ya karşı ortak çıkarların diplomatik ifadesiydi.",
  kaynak:"isvec (TDV, içerik okundu)", yer_id:"İstanbul" },
{ t:"1741-08-01", b:"Rusya'ya savaş açıldı (Şapkalar Savaşı)", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Hürriyet Çağı'nın savaş yanlısı \"Şapkalar\" (Hattarna) partisinin kışkırtmasıyla İsveç, Osmanlı-Rus gerginliğinden yararlanmayı umarak Rusya'ya savaş açtı. Hazırlıksız girilen savaş, İsveç için yeni bir toprak kaybıyla sonuçlanacaktı.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1742-01-01", b:"Anders Celsius, yüzlü sıcaklık ölçeğini önerdi", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["bilim","kultur","konu-bilim","konu-kultur"],
  d:"Uppsalalı astronom Anders Celsius, suyun donma ve kaynama noktalarını yüz dereceye bölen bir termometre ölçeği önerdi (özgün ölçekte 0° kaynama, 100° donmaydı; ters çevrilmiş hâli bugünkü Celsius/santigrat ölçeğidir). Ölçek bugün dünya çapında bilimin ve günlük hayatın standart sıcaklık birimidir.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_id:"Uppsala" },
{ t:"1743-08-07", b:"Åbo (Turku) Antlaşması — güneydoğu Finlandiya kaybedildi", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis",
  etiket:["toprak","antlasma","konu-askeri","konu-diplomasi"],
  d:"Kötü hazırlanmış Rusya seferi bozgunla sonuçlanınca imzalanan Åbo Antlaşması, Kymmenegård ve güneydoğu Finlandiya'nın bir bölümünü Rusya'ya bıraktı. Yenilgi, savaşı kışkırtan Şapkalar partisini iç siyasette zor durumda bıraktı.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_id:"Turku (Åbo)" },
{ t:"1745-01-01", b:"Gustav de Celsing, İstanbul'a İsveç elçisi atandı", tur:"diplomasi", onem:2, dunya:1, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"],
  yer_id:"",
  d:"1737-1740 antlaşmalarıyla kurulan Osmanlı-İsveç ilişkileri, Gustav de Celsing'in İstanbul'a daimî elçi olarak atanmasıyla kurumsal bir zemine oturdu. Celsing ailesi sonraki nesillerde de Osmanlı-İsveç diplomasisinde etkili olmaya devam edecekti.",
  kaynak:"isvec (TDV, içerik okundu)", yer_kon:[59.3293,18.0686] },
{ t:"1751-03-25", b:"I. Fredrik öldü, Adolf Fredrik (Holstein-Gottorp hanedanı) tahta çıktı", tur:"hanedan", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"I. Fredrik'in ölümüyle, Rusya'nın da desteklediği Holstein-Gottorp hanedanından Adolf Fredrik tahta çıktı. Yeni hanedan bugünkü İsveç kraliyet ailesinin (Bernadotte kolu hariç) doğrudan atasıdır.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1757-09-13", b:"Pomeranya Savaşı'na (Yedi Yıl Savaşları) girildi", tur:"savas", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"Fransa ve Avusturya ile ittifak hâlindeki İsveç, Prusya'ya karşı Yedi Yıl Savaşları'na katıldı ama sınırlı kaynaklarla yürütülen Pomeranya cephesi belirleyici bir sonuç getirmedi. 1762'de imzalanan Hamburg Antlaşması, savaş öncesi sınırları aynen korudu.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1766-12-02", b:"Basın Özgürlüğü Yasası kabul edildi", tur:"kanun", onem:4, dunya:1, kapsam:"ic",
  etiket:["kanun","reform","konu-islahat","konu-hukuk"],
  yer_id:"",
  d:"Riksdag, sansürü büyük ölçüde kaldıran ve kamu belgelerine erişim hakkı tanıyan bir yasayı kabul etti; bu, dünyada türünün ilk anayasal düzeyde basın özgürlüğü güvencelerinden biri sayılır. Yasa, Hürriyet Çağı'nın canlı siyasi tartışma kültürünün hukuki ifadesiydi.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1771-02-12", b:"Adolf Fredrik öldü, III. Gustav tahta çıktı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"Adolf Fredrik'in ölümüyle Fransa'da eğitim görmüş, Aydınlanma fikirlerine yakın oğlu Gustav tahta çıktı. Bir yıl sonra gerçekleştireceği darbeyle Hürriyet Çağı'nı sona erdirecekti.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },

// === H) III. GUSTAV VE GUSTAVYEN DÖNEM (1772-1809) ===========================
{ t:"1771-01-01", b:"Scheele oksijeni keşfetti (yayımı 1777)", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["bilim","kultur","konu-bilim","konu-kultur","konu-kesif"],
  d:"Eczacı-kimyager Carl Wilhelm Scheele, İngiliz Joseph Priestley'den önce oksijeni izole etti; ancak bulgularını ancak 1777'de \"Chemical Treatise on Air and Fire\" adlı eserinde yayımladığı için önceliği tarihyazımında tartışmalı kaldı. Scheele ayrıca klor, mangan ve baryum gibi birçok elementi de ilk kez tanımladı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_id:"Uppsala" },
{ t:"1772-08-19", b:"III. Gustav'ın darbesi — mutlakiyetçi güçler yeniden kraliyete geçti", tur:"reform", onem:5, dunya:1, kapsam:"ic",
  etiket:["reform","siyaset","darbe-askeri","konu-siyasi","konu-darbe","konu-islahat"],
  yer_id:"",
  d:"Parti çekişmeleriyle felç olmuş Riksdag yönetiminden bezmiş III. Gustav, ordunun desteğiyle kansız bir darbe yaparak yeni bir anayasa dayattı ve kraliyetin yürütme yetkisini büyük ölçüde geri aldı. Darbe, elli iki yıllık Hürriyet Çağı'nı sona erdirdi.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1786-03-20", b:"İsveç Akademisi kuruldu", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","islahat","konu-kultur","konu-islahat"],
  yer_id:"",
  d:"III. Gustav, Fransız Akademisi örnek alınarak İsveç dilinin \"saflığını, gücünü ve azametini\" korumak amacıyla on sekiz üyeli İsveç Akademisi'ni kurdu. Akademi bugün de Nobel Edebiyat Ödülü'nü belirleyen kurum olarak faaliyetini sürdürmektedir.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686] },
{ t:"1788-06-21", b:"Rusya'ya savaş açıldı (III. Gustav'ın savaşı)", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"III. Gustav, Osmanlı-Rus savaşının Rusya'yı meşgul ettiği bir anda Rusya'ya savaş açarak Nystad ve Åbo'da kaybedilen toprakları geri almayı umdu. Savaş, iç muhalefetin de karışmasıyla beklenenin aksine sancılı geçecekti.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1788-08-01", b:"Anjala Komplosu — subaylar savaşa karşı ayaklandı", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["isyan","askeri","konu-askeri","konu-isyan"],
  yer_id:"",
  d:"Rusya'ya karşı savaşın anayasaya aykırı biçimde açıldığını öne süren bir grup Fin ve İsveçli subay, Anjala'da kralın emirlerine karşı açık isyan bayrağı çekti. Komplo bastırıldı ama III. Gustav'ın otoritesine ciddi bir darbe vurdu.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[60.6889,26.8078] },
{ t:"1789-07-11", b:"Osmanlı-İsveç ittifak antlaşması imzalandı", tur:"ittifak", onem:4, dunya:2, kapsam:"dis",
  etiket:["ittifak","diplomasi","konu-diplomasi"],
  d:"Rusya'ya karşı ortak savaş hâlindeki iki devlet, resmî bir ittifak antlaşması imzaladı. Antlaşma, XII. Karl'ın Bender ikametinden başlayan bir asrı aşkın ilişkiler zincirinin siyasi olarak en somutlaştığı andır.",
  kaynak:"isvec (TDV, içerik okundu)", yer_id:"İstanbul" },
{ t:"1790-07-09", b:"İkinci Svensksund Deniz Savaşı — büyük İsveç zaferi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"],
  yer_id:"",
  d:"İsveç donanması, Rus filosuna karşı Baltık'ta İsveç tarihinin gördüğü en büyük deniz zaferlerinden birini kazandı; bir günde binlerce Rus denizcisi kayboldu. Zafer, ay sonunda imzalanacak barışta İsveç'e daha güçlü bir el verdi.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[60.4333,26.9583] },
{ t:"1790-08-14", b:"Värälä Barışı — savaş statüko ile bitti", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["antlasma","konu-diplomasi"],
  yer_id:"",
  d:"Savaş öncesi sınırları aynen koruyan Värälä Barışı imzalandı; toprak değişmedi ama Rusya, İsveç'in iç anayasal düzenine müdahale hakkını (1720'den beri iddia ettiği) resmen terk etti.", ic_not_d:"TDV'nin `isvec` maddesi bu antlaşmayla İsveç'in savaştan çekildiğini doğrular.",
  kaynak:"isvec (TDV, içerik okundu)", yer_kon:[60.73,26.85] },
{ t:"1792-03-29", b:"III. Gustav suikast yaralarından öldü", tur:"olum", onem:5, dunya:1, kapsam:"ic",
  etiket:["kayip","siyaset","suikast","konu-askeri","konu-siyasi","konu-kisiler"],
  yer_id:"",
  d:"Muhalif soylulardan oluşan bir grup, 16 Mart'ta Stockholm Operası'ndaki maskeli baloda kralı sırtından vurdu; III. Gustav on üç gün süren acılı bir bekleyişin ardından yaralarından öldü. Suikast, dönemin Avrupa'sında büyük yankı uyandırdı ve sonradan Verdi'nin \"Un ballo in maschera\" operasına ilham verdi.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686] },
{ t:"1805-10-04", b:"Osmanlı, İsveç'e Karadeniz ticaretine katılma izni verdi", tur:"ekonomi", onem:2, dunya:1, kapsam:"dis",
  etiket:["ekonomi","diplomasi","konu-diplomasi","konu-ekonomi"],
  d:"On sekizinci yüzyıl boyunca kurulan diplomatik ilişkilerin bir uzantısı olarak Osmanlı hükûmeti, İsveç bayraklı gemilere Karadeniz'de ticaret yapma izni verdi. Bu, Osmanlı-İsveç ekonomik ilişkilerinin Napolyon Savaşları arifesindeki son genişlemesiydi.",
  kaynak:"isvec (TDV, içerik okundu)", yer_id:"İstanbul" },
{ t:"1808-02-21", b:"Rusya, Finlandiya'yı istila etti (Fin Savaşı başladı)", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"Helsinki",
  etiket:["askeri","toprak","konu-askeri"],
  d:"Napolyon'un Tilsit'te Rusya'ya verdiği serbestlikten yararlanan I. Aleksandr, hazırlıksız yakalanan İsveç'e karşı Finlandiya'yı istila etti.", ic_not_d:"Helsinki'nin bu tarihten itibaren fiilen Rus denetimine girdiği süreç, data/yerlesimler.js:907 kaydındaki 1809-09-17 devir tarihiyle örtüşür.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500" },
{ t:"1809-03-13", b:"IV. Gustav Adolf darbeyle tahttan indirildi", tur:"hukumdar", onem:5, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","darbe-askeri","konu-siyasi","konu-darbe","konu-hanedan"],
  yer_id:"",
  d:"Finlandiya'nın kaybedilmekte olduğu bir sırada, savaşı beceriksizce yönettiği gerekçesiyle bir grup subay ve soylu IV. Gustav Adolf'u tutuklayıp tahttan indirdi. Kral ömrünün geri kalanını sürgünde geçirdi; olay Vasa hanedanının fiilen sona erişidir.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1809-06-06", b:"Yeni Anayasa (Regeringsformen) kabul edildi", tur:"kanun", onem:5, dunya:1, kapsam:"ic",
  etiket:["kanun","reform","konu-islahat","konu-hukuk"],
  yer_id:"",
  d:"IV. Gustav Adolf'un devrilmesinin ardından kabul edilen yeni anayasa, kraliyet yetkisini Riksdag ile paylaşılan bir güçler ayrılığı sistemine bağladı. Bu anayasa, 1974'e dek — bazı değişikliklerle — yürürlükte kalacak kadar uzun ömürlü oldu.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1809-09-17", b:"Hamina (Fredrikshamn) Antlaşması — Finlandiya kaybedildi ⭐", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis", yer_id:"Helsinki",
  etiket:["toprak","antlasma","konu-askeri","konu-diplomasi"],
  d:"Fin Savaşı'nı bitiren Hamina Antlaşması'yla İsveç, altı asırlık Fin topraklarının tamamını Rusya'ya bıraktı; Finlandiya bir Rus özerk büyük dükalığı hâline geldi.", ic_not_d:"Tarih, data/yerlesimler.js:907'deki Helsinki kaydının devir tarihiyle birebir örtüşür ve İsveç tarihinin en büyük tek toprak kaybıdır.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500 — data/yerlesimler.js:907 ile tarih birebir doğrulandı" },
{ t:"1810-06-20", b:"Kont Axel von Fersen, veliaht prensin ani ölümü üzerine linç edildi", tur:"diger", onem:2, dunya:1, kapsam:"ic",
  etiket:["diger","konu-kisiler"],
  yer_id:"",
  d:"Yeni seçilen veliaht prens Karl August'un ani ölümü, onu zehirlemekle suçlanan devlet adamı Axel von Fersen'in Stockholm sokaklarında öfkeli bir kalabalık tarafından linç edilmesine yol açtı. Olay, kraliyet veraset krizinin ne denli gergin bir atmosferde geçtiğini gösterir.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[59.3293,18.0686] },

// === I) BERNADOTTE HANEDANI VE 19. YÜZYIL (1810-1905) =========================
{ t:"1810-08-21", b:"Jean Baptiste Bernadotte veliaht prens seçildi", tur:"hukumdar", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","konu-siyasi","konu-hanedan"],
  d:"Napolyon'un mareşallerinden Jean Baptiste Bernadotte, Riksdag tarafından şaşırtıcı biçimde veliaht prens seçildi — hem Fransa ile iyi ilişkiler kurma hem de tecrübeli bir asker edinme umuduyla. Seçim, bugüne dek süren Bernadotte hanedanının başlangıcıdır.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_id:"Örebro" },
{ t:"1813-01-01", b:"Bernadotte, Napolyon'a karşı Altıncı Koalisyon'a katıldı", tur:"ittifak", onem:3, dunya:3, kapsam:"dis",
  etiket:["ittifak","askeri","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"Fiilî yönetici hâline gelen veliaht prens Bernadotte, eski komutanı Napolyon'a karşı Rusya, Prusya ve Avusturya'nın yanında yer aldı; İsveç kuvvetleri Leipzig Muharebesi'ne katıldı. Bu tercih, savaş sonrası Norveç'in İsveç'e verilmesinin diplomatik zeminini hazırladı.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1814-01-14", b:"Kiel Antlaşması — Danimarka, Norveç'i İsveç'e bıraktı", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis", yer_id:"Kiel",
  etiket:["toprak","antlasma","konu-askeri","konu-diplomasi"],
  d:"Napolyon'un müttefiki Danimarka, savaşın kaybeden tarafında kalınca Kiel'de imzalanan antlaşmayla Norveç'i İsveç'e devretmek zorunda kaldı. Bu, Finlandiya'nın 1809'da kaybının kısmi bir telafisi olarak sunuldu.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500" },
{ t:"1814-08-14", b:"Moss Sözleşmesi — Norveç ile birlik kabul edildi", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","siyaset","konu-siyasi","konu-diplomasi"],
  yer_id:"",
  d:"Kiel Antlaşması'na rağmen kendi anayasasını ilan ederek bağımsızlığa direnen Norveç'e karşı kısa bir sefer düzenleyen Bernadotte, sonunda Norveç'in kendi anayasasını ve iç özerkliğini koruduğu gevşek bir kişisel birlik kabul etti. Bu uzlaşma, 1905'e dek sürecek İsveç-Norveç Birliği'nin kuruluşudur.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.4342,10.6598] },
{ t:"1818-02-05", b:"Bernadotte, XIV. Karl Johan adıyla kral oldu", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","taht","konu-siyasi","konu-hanedan"],
  yer_id:"",
  d:"XIII. Karl'ın ölümüyle fiilen yıllardır ülkeyi yöneten Bernadotte, XIV. Karl Johan adıyla resmen tahta çıktı. Fransız asıllı bu eski Napolyon mareşalinin soyu bugüne dek İsveç tahtında oturmaktadır.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1840-01-31", b:"Yeni Osmanlı-İsveç ticaret antlaşması — en ziyade müsaadeye mazhariyet", tur:"ekonomi", onem:2, dunya:1, kapsam:"dis",
  etiket:["ekonomi","diplomasi","konu-diplomasi","konu-ekonomi"],
  d:"İki devlet arasında imzalanan yeni ticaret antlaşmasıyla İsveç, Osmanlı ile ticarette \"en ziyade müsaadeye mazhar devlet\" statüsü kazanan ülkeler arasına katıldı. Antlaşma, on sekizinci yüzyıldan beri süregelen ilişkilerin sanayileşme çağındaki güncellenmiş biçimiydi.",
  kaynak:"isvec (TDV, içerik okundu)", yer_id:"İstanbul" },
{ t:"1866-01-01", b:"Riksdag reformu — iki kamaralı parlamentoya geçildi", tur:"reform", onem:4, dunya:1, kapsam:"ic",
  etiket:["reform","siyaset","konu-siyasi","konu-islahat"],
  yer_id:"",
  d:"Ortaçağdan kalma dört zümre meclisi (soylular, din adamları, burjuvazi, köylüler) kaldırılarak yerine mülk ve gelir esasına dayalı seçilen iki kamaralı bir parlamento kuruldu. Reform, İsveç'in modern parlamenter sisteme geçişinde ilk büyük adımdı.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_kon:[59.3293,18.0686] },
{ t:"1867-01-01", b:"Alfred Nobel dinamiti icat etti", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["bilim","kultur","konu-bilim","konu-kultur","konu-kesif"],
  yer_id:"",
  d:"Kimyager ve sanayici Alfred Nobel, nitrogliserini emici bir maddeyle stabilize ederek dinamiti icat etti ve patentini aldı. Buluş, kendisine muazzam bir servet kazandırdı ve bu servet 1895'teki vasiyetnamesiyle Nobel ödüllerinin finansmanına dönüştü.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", yer_kon:[53.43,10.39] },
{ t:"1862-03-05", b:"Yeni Osmanlı-İsveç ticaret ve seyrisefâin antlaşması", tur:"ekonomi", onem:2, dunya:1, kapsam:"dis",
  etiket:["ekonomi","diplomasi","konu-diplomasi","konu-ekonomi"],
  d:"On dokuzuncu yüzyıl ortasında değişen deniz ticareti koşullarına uyum sağlamak üzere iki devlet, ticaret ve seyrisefâin ilişkilerini güncelleyen yeni bir antlaşma imzaladı. Antlaşma, Osmanlı-İsveç ilişkilerinin 1587'den beri süren en uzun soluklu diplomatik çizgilerden birinin geç dönem halkasıdır.",
  kaynak:"isvec (TDV, içerik okundu)", yer_id:"İstanbul" },
{ t:"1901-01-01", b:"İlk Nobel Ödülleri verildi", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["bilim","kultur","konu-bilim","konu-kultur"],
  yer_id:"",
  d:"Alfred Nobel'in 1895 vasiyetnamesinde öngörülen fizik, kimya, tıp, edebiyat ve barış ödülleri ilk kez Stockholm ve Oslo'da (barış ödülü) dağıtıldı.", ic_not_d:"`dunya:2` istisnai olarak verildi çünkü ödül, kısa sürede kalıcı ve dünya çapında bir bilim-kültür kurumuna dönüştü — tek bir devletin iç meselesi olmaktan çıktı.",
  kaynak:"Franklin D. Scott, Sweden: The Nation's History", kapsam_genis:true },
{ t:"1905-06-07", b:"Norveç, birlikten tek taraflı ayrılığını ilan etti", tur:"bolunme", onem:5, dunya:2, kapsam:"dis",
  etiket:["siyaset","bolunme","konu-siyasi"],
  d:"Onlarca yıldır süren gerilimler (özellikle Norveç'in kendi konsolosluk hizmetini isteme talebi) sonunda Norveç Storting'i, birliği tek taraflı olarak feshettiğini ilan etti. İsveç'te savaş çağrıları yükselse de kamuoyu ve siyasi irade barışçıl çözümden yana ağır bastı.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_id:"Oslo" },
{ t:"1905-10-26", b:"Karlstad Antlaşması — ayrılık barışçıl şekilde onaylandı", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","siyaset","konu-siyasi","konu-diplomasi"],
  d:"Karlstad'daki görüşmeler sonunda İsveç, Norveç'in bağımsızlığını savaşsız kabul etti; iki ülke arasındaki sınır bölgesi askerden arındırıldı. Bu barışçıl ayrılık, dönemin Avrupa'sında istisnai bir örnek olarak anıldı ve bugün de İsveç-Norveç ilişkilerinin olumlu bir referans noktasıdır.",
  kaynak:"Byron J. Nordstrom, Scandinavia since 1500", yer_id:"Karlstad" },

];

;
/* ==== data/kronoloji_japonya.js ==== */
// -*- coding: utf-8 -*-
// KRONOLOJI_JAPONYA — Japonya'nın BİRLEŞİK kronolojisi (Kamakura'nın sonu →
// Kenmu → Muromachi/Sengoku → Azuchi-Momoyama → Edo/Tokugawa → Meiji),
// 1281-1923.
// ---------------------------------------------------------------------------
// 21 Ağustos 2026, oturumlar/KRONOLOJI-SARTNAME.md şemasına göre yazıldı.
// `onem:` bu dosyanın konusu (Japonya) için ağırlık; `dunya:` olayın
// KENDİSİNE ait, HER dosyada AYNI olması gereken 1-5 puan. TEK dosya,
// kullanıcı "Japonya" seçip bütün akışı görmeli; her maddede hangi dönem
// (Kamakura/Kenmu/Muromachi/Sengoku/Azuchi-Momoyama/Edo/Meiji) olduğu `d:`
// metninin İÇİNDE belirtilir (ayrı bir alan YOK, brifingde istenmedi).
//
// 🔴 YOĞUNLUK — KRONOLOJI-SARTNAME.md §1: KOTA DEĞİL. Bu ilk tur 1281-1923
// arasının TAMAMINI (kamikaze'den Kanto depremine) tek turda kapsıyor —
// Japonya iç tarihinin nispeten az sayıda büyük dönüm noktasına sahip
// olması (uzun sakoku kapanma dönemi dahil) bunu tek turda mümkün kıldı;
// yine de kaynağın sessiz kaldığı yıllar doldurulmadı.
//
// ORTAK OLAYLAR — KRONOLOJI-SARTNAME §1 uyarısı: `data/kronoloji_cin.js` ve
// `data/kronoloji_rusya.js` OKUNDU, dunya puanları ORADAN alındı, mükerrer
// araştırma yapılmadı:
//   1592-05-23 Kore istilası (Imjin)         dunya:3  (kronoloji_cin.js:344)
//   1894-07-25 Birinci Çin-Japon Savaşı      dunya:4  (kronoloji_cin.js:752)
//   1895-04-17 Şimonoseki Antlaşması         dunya:5  (kronoloji_cin.js:758)
//   1904-02-08 Rus-Japon Savaşı başlangıcı   dunya:4  (kronoloji_rusya.js:748)
//   1905-05-27 Tsushima Deniz Muharebesi     dunya:3  (kronoloji_rusya.js:763)
//   ⚠️ Görev brifingi Rus-Japon Savaşı için dunya:5 öneriyordu; kronoloji_
//   rusya.js'te ZATEN dunya:4 yazılıydı. §3.2 "aynı olay farklı dosyada
//   farklı dunya taşırsa KUSURDUR" gereği VAR OLAN değeri (4) esas aldım ve
//   koordinatöre bildirdim (M-0969) — tek taraflı değiştirmedim.
//
// KAYNAK DİSİPLİNİ (KRONOLOJI-SARTNAME.md §4):
//   `data/devletler.js`teki dogu-asya bölümünde DAHA ÖNCE doğrulanmış ve
//   KULLANILAN "japonya" sluğu (kamakura/muromachi/kenmu/meiji-japonya
//   künyelerinde) tekrar sınanmadan alındı (CLAUDE.md §4, "zaten doğrulanmış
//   slug kümesi güvenlidir").
//   Bu turda sınanan ve ÖLÜ çıkan: ertugrul-firkateyni, ertugrul-facia
//   (ikisi de arama sayfası, madde yok, 2026-08-21).
//   TDV Japonya'yı yalnız SINIRLI kapsıyor (İslâm dünyasıyla doğrudan teması
//   az); bu yüzden dosyanın büyük kısmı standart akademik referansa dayanır
//   (KRONOLOJI-SARTNAME §4 "üniversite yayını" kategorisi):
//     George Sansom, "A History of Japan" (3 cilt, Stanford University
//       Press, 1958-1963) — Kamakura-Edo dönemi omurgası.
//     Marius B. Jansen, "The Making of Modern Japan" (Harvard University
//       Press, 2000) — Bakumatsu-Meiji bölümünün standart referansı.
//     Conrad Totman, "Early Modern Japan" (University of California Press,
//       1993) — Edo/Tokugawa idari-sosyal yapısı.
//     W. G. Beasley, "The Meiji Restoration" (Stanford University Press,
//       1972) — Meiji Restorasyonu ayrıntıları.
//     The Cambridge History of Japan (6 cilt, Cambridge University Press,
//       1988-1999) — çapraz doğrulama, özellikle Kenmu/Nanboku-chō bölümü
//       (kenmu künyesinin devletler.js'teki kaydı da bu seriye dayanıyor).
//   Ertuğrul Fırkateyni faciası ve Türk-Japon ilişkileri için TDV'de madde
//   yok; olay hem Türk hem Japon resmî anma kayıtlarıyla (Kushimoto/Oshima
//   şehitliği, her iki ülkede yıl dönümü törenleri) doğrulanmış, yaygın
//   belgelenmiş bir tarihî olaydır — standart akademik/diplomatik tarih
//   kaynağına (Selçuk Esenbel'in Türk-Japon ilişkileri üzerine çalışmaları)
//   dayanılarak yazıldı.
//   Bir maddede "bulunamadı" yazıyorsa TDV'de müstakil madde ARANDI ve YOK.
//
// KAPSAM ic/dis — dönemin egemen Japon rejiminin kendi iç meselesi (taht
// değişimi, isyan, idari reform, dinî/kültürel gelişme) → "ic". Başka bir
// devletle ilişki (savaş, istila, antlaşma, ticaret imtiyazı, elçilik) →
// "dis".
//
// yer_id — `data/yerlesimler_asya.js`teki adla BİREBİR eşleşmeli: Kyoto,
// Edo (Tokyo), Osaka, Nara, Sakai, Kamakura, Odawara, Sunpu (Şizuoka),
// Nagoya, Gifu, Kanazawa, Fukui, Niigata, Matsue, Himeji, Okayama,
// Hiroşima, Yamaguchi, Matsuyama, Kōchi, Hakata (Fukuoka), Nagazaki,
// Kumamoto, Funai (Ōita), Kagoşima, Tsuşima (İzuhara), Sendai,
// Aizu-Wakamatsu. Eşleşen kayıt yoksa yer_id:"" bırakıldı, SAYIYLA rapor
// edilecek (Şimonoseki, Uraga, Portsmouth [ABD, kapsam dışı] gibi).
//
window.KRONOLOJI_JAPONYA = [

// === A) KAMAKURA'NIN SONU VE MOĞOL İSTİLALARI (1274-1336) ====================
{ taraflar:["kamakura"], t:"1281-08-15", b:"İkinci Moğol istilası \"kamikaze\" tayfunuyla dağıldı", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","savunma","dogal-afet","konu-askeri"],
  yer_id:"Hakata (Fukuoka)",
  d:"[Kamakura Şogunluğu] Kubilay Han'ın 140.000 kişilik ikinci istila donanması Hakata Körfezi'nde Japon savunma duvarlarına takılıp beklerken, iki günlük bir tayfun filoyu neredeyse tamamen batırdı; bu 'kamikaze' (tanrısal rüzgâr), 1274'teki ilk istiladan sonra Japonya'yı ikinci kez kurtardı ve Japon tarihyazımında ilahi korumaya bağlanan bir efsaneye dönüştü. Bu tarih projenin kendi başlangıç yılıdır.",
  kaynak:"japonya (TDV) — kaynak seti için George Sansom, A History of Japan, cilt 2" },
{ taraflar:["kamakura"], t:"1297-01-01", b:"Kamakura Şogunluğu, samuraylar için borç affı (Tokusei-rei) ilan etti", tur:"ekonomi", onem:3, dunya:1, kapsam:"ic",
  etiket:["ekonomi","reform","kriz","konu-siyasi","konu-ekonomi","konu-islahat"],
  yer_id:"Kamakura",
  d:"[Kamakura Şogunluğu] Moğol istilalarını savunma savaşı olarak püskürten samuraylara dağıtacak fethedilmiş toprak olmadığından mâlî sıkıntıya düşen vasal savaşçı sınıfını rahatlatmak için çıkarılan ferman, borçları geçersiz saydı; kısa vadeli rahatlama sağlasa da kredi sistemini sarsıp uzun vadede şogunluğun mâlî güvenilirliğini zedeledi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 2" },
{ t:"1333-07-04", b:"Kamakura Şogunluğu yıkıldı, İmparator Go-Daigo doğrudan iktidara döndü", tur:"son", onem:5, dunya:2, kapsam:"ic",
  etiket:["siyaset","son","isyan","konu-siyasi","konu-isyan"],
  yer_id:"Kamakura",
  d:"[Kamakura Şogunluğu → Kenmu] Moğol istilaları sonrası mâlî çöküşten ve vasal hoşnutsuzluğundan yararlanan İmparator Go-Daigo'nun isyanı, Ashikaga Takauji ve Nitta Yoshisada'nın taraf değiştirmesiyle zafere ulaştı; 148 yıllık ilk şogunluk düzeni sona erip kısa ömürlü Kenmu Restorasyonu başladı.",
  kaynak:"japonya (TDV)" },
{ taraflar:["muromachi"], t:"1336-11-07", b:"Ashikaga Takauji, Muromachi Şogunluğu'nu kurdu — Nanboku-chō bölünmesi başladı", tur:"kurulus", onem:5, dunya:2, kapsam:"ic",
  etiket:["kurulus","siyaset","bolunme","konu-siyasi"],
  yer_id:"Kyoto",
  d:"[Kenmu → Muromachi] Go-Daigo'nun saray soylularını kayıran reformlarına küsen Takauji, Minatogawa zaferinin ardından Kyoto'da rakip bir imparator tahta çıkarıp kendini şogun ilan etti; Go-Daigo güneydeki Yoşino'ya kaçarak kendi sarayını sürdürdü ve 56 yıl sürecek 'Kuzey ve Güney Saraylar' (Nanboku-chō) bölünmesi başladı.",
  kaynak:"japonya (TDV)" },

// === B) MUROMACHI (ASHİKAGA) ŞOGUNLUĞU VE SENGOKU (1336-1573) ================
{ taraflar:["muromachi"], t:"1392-11-19", b:"Nanboku-chō bölünmesi sona erdi, saraylar birleşti", tur:"birlesme", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","birlesme","konu-siyasi","konu-imar"],
  yer_id:"Kyoto",
  d:"[Muromachi] Üçüncü şogun Ashikaga Yoshimitsu'nun arabuluculuğuyla Güney sarayının son imparatoru Go-Kameyama tahtı Kuzey hanedanına devretti; 56 yıllık ikili meşruiyet krizi sona erip imparatorluk kurumu tek bir hat altında toplandı, ama fiilî iktidar şogunlukta kalmaya devam etti.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Cambridge History of Japan, cilt 3" },
{ taraflar:["muromachi"], t:"1397-01-01", b:"Yoshimitsu, Kinkaku-ji'yi (Altın Köşk) inşa ettirdi", tur:"kultur", onem:3, dunya:2, kapsam:"ic",
  etiket:["mimari","kultur","din","imar","konu-din","konu-kultur","konu-imar"],
  yer_id:"Kyoto",
  d:"[Muromachi] Emekli şogun Yoshimitsu'nun Kyoto'da inşa ettirdiği, üst iki katı altın varakla kaplı bu Zen tapınağı köşkü, Muromachi dönemi (Kitayama) kültürünün en tanınmış simgesi ve Japon bahçe-mimari geleneğinin klasik örneklerinden biri oldu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 2" },
{ taraflar:["muromachi"], t:"1401-01-01", b:"Yoshimitsu, Ming Çin'iyle mühürlü tabaka (kangō) ticaretini başlattı", tur:"ekonomi", onem:3, dunya:2, kapsam:"dis",
  etiket:["ekonomi","ticaret","diplomasi","konu-diplomasi","konu-ekonomi"],
  yer_id:"Hakata (Fukuoka)",
  d:"[Muromachi] Yoshimitsu, Ming imparatorundan 'Japonya Kralı' unvanını kabul ederek resmî haraç-ticaret ilişkisi (kangō bōeki) kurdu; bu, korsanlığı (wakō) sınırlamayı ve bakır/kılıç ihracatı karşılığında ipek/porselen/sikke ithal etmeyi amaçlayan, hanedan içinde tartışmalı ama ekonomik olarak kârlı bir düzenlemeydi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 2" },
{ taraflar:["muromachi"], t:"1467-05-20", b:"Ōnin Savaşı başladı — Sengoku (Savaşan Beylikler) dönemi açıldı", tur:"isyan", onem:5, dunya:2, kapsam:"ic",
  etiket:["askeri","isyan","kriz","konu-askeri","konu-siyasi","konu-isyan"],
  yer_id:"Kyoto",
  d:"[Muromachi] Şogunluk veraset krizinden doğan Ōnin Savaşı on bir yıl sürüp başkent Kyoto'yu neredeyse tamamen yaktı; merkezi otorite fiilen çöktü ve bölgesel savaş beyleri (daimyo) arasında bir buçuk asır sürecek Sengoku (Savaşan Beylikler) kaos dönemi başladı.",
  kaynak:"japonya (TDV)" },
{ taraflar:["muromachi"], t:"1489-01-01", b:"Yoshimasa, Ginkaku-ji'yi (Gümüş Köşk) inşa ettirdi", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["mimari","kultur","cay-seremonisi","imar","konu-kultur","konu-imar"],
  yer_id:"Kyoto",
  d:"[Muromachi] Ōnin Savaşı'nın ortasında sanata çekilen şogun Yoshimasa'nın emekli köşkü, kendisi asla gümüşle kaplanmasa da Higashiyama kültürünün (sadelik estetiği, çay seremonisinin ve kuru bahçe/kare bahçesinin klasikleşmesi) simgesi oldu; bu dönemde Murata Jukō'nun öncülük ettiği çay seremonisi (chanoyu) törensel biçimini almaya başladı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 2" },
{ taraflar:["muromachi"], t:"1543-08-25", b:"Portekizliler Tanegaşima'ya ulaşıp ateşli silahı Japonya'ya tanıttı", tur:"bilim", onem:5, dunya:3, kapsam:"dis",
  etiket:["bilim","teknoloji","ticaret","konu-bilim","konu-ekonomi"],
  yer_id:"",
  d:"[Sengoku dönemi] Fırtınayla sürüklenen bir Çin gemisindeki Portekizli tüccarların getirdiği arkebüzler, Tanegaşima adasının beyi tarafından hemen kopyalanmaya başlandı; on yıl içinde yerli üretim tüfekler Sengoku savaş taktiklerini kökten değiştirecek ve nihayetinde Nobunaga'nın birleştirme seferlerinde belirleyici rol oynayacaktı.", ic_not_d:"Tanegaşima, proje yerleşim kümesinde kayıtlı değil.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 2", yer_kon:[30.73,131] },
{ taraflar:["muromachi"], t:"1549-08-15", b:"Francis Xavier, Kagoşima'ya ulaşıp Hıristiyan misyonerliğini başlattı", tur:"din", onem:4, dunya:2, kapsam:"dis",
  etiket:["din","kultur","misyonerlik","konu-din","konu-kultur"],
  yer_id:"Kagoşima",
  d:"[Sengoku dönemi] Cizvit misyoner Francisco Xavier'in gelişiyle başlayan Hıristiyanlaştırma faaliyeti, özellikle Kyushu'daki bazı daimyoların (Kirişitan-daimyo) din değiştirmesiyle hızla yayıldı; bir asır sonra Tokugawa şogunluğunun acımasız yasaklama politikasıyla (bkz. D bölümü) sona erecek bu dönem, Japonya'nın Avrupa'yla ilk yoğun kültürel temasıydı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 2" },

// === C) AZUCHİ-MOMOYAMA — BİRLEŞME (1568-1615) ================================
{ taraflar:["azuchi-momoyama"], t:"1568-10-18", b:"Oda Nobunaga Kyoto'ya girdi, birleşme süreci başladı", tur:"kurulus", onem:5, dunya:2, kapsam:"ic",
  etiket:["askeri","siyaset","kurulus","konu-askeri","konu-siyasi"],
  yer_id:"Kyoto",
  d:"[Azuchi-Momoyama] Owari beyi Nobunaga, Ashikaga Yoshiaki'yi şogun makamına oturtarak başkenti ele geçirdi; bu, bir buçuk asırlık Sengoku parçalanmasına son verecek üç aşamalı birleşme sürecinin (Nobunaga → Hideyoshi → Ieyasu) ilk adımıydı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 2" },
{ taraflar:["azuchi-momoyama"], t:"1571-10-01", b:"Nobunaga, Enryaku-ji manastırını yakıp yıktı", tur:"din", onem:3, dunya:2, kapsam:"ic",
  etiket:["din","askeri","yikim","konu-askeri","konu-din"],
  yer_id:"",
  d:"[Azuchi-Momoyama] Siyasi rakiplerine sığınak veren güçlü Tendai Budist manastırı Hiei Dağı'ndaki Enryaku-ji'yi kuşatan Nobunaga, binlerce keşiş ve sivili katledip manastır kompleksini tamamen yaktırdı; bu, Sengoku döneminde dinî kurumların askerî-siyasi gücünü kıran en sert müdahalelerden biriydi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 2", yer_kon:[35.07,135.84] },
{ taraflar:["azuchi-momoyama"], t:"1575-06-28", b:"Nagashino Savaşı: Nobunaga'nın tüfekli piyadesi Takeda süvarisini ezdi", tur:"savas", onem:4, dunya:2, kapsam:"ic",
  etiket:["askeri","teknoloji","konu-askeri","konu-bilim"],
  yer_id:"",
  d:"[Azuchi-Momoyama] Nobunaga'nın palisatlar arkasına dizdiği binlerce arkebüzcünün sıra ateşi taktiği, dönemin en güçlü süvari gücü sayılan Takeda klanının hücumunu kırdı; bu zafer, ateşli silahın Japon savaş sanatını geri dönüşsüz biçimde dönüştürdüğünü gösteren dönüm noktası oldu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 2", yer_kon:[34.92,137.56] },
{ taraflar:["azuchi-momoyama"], t:"1582-02-20", b:"Tenshō Elçilik Heyeti dört genç Hıristiyan samurayı Avrupa'ya gönderdi", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","din","kultur","konu-diplomasi","konu-din","konu-kultur"],
  yer_id:"Nagazaki",
  d:"[Azuchi-Momoyama] Cizvit misyonerlerin düzenlediği bu heyet, Papa XIII. Gregorius ve İspanya Kralı II. Felipe ile görüşmek üzere Avrupa'ya giden ilk Japon delegasyonuydu; sekiz yıl süren yolculuk Avrupa saraylarında büyük merak uyandırdı ve heyetin 1590'da dönüşü, o sırada iyice sertleşen Hıristiyan karşıtı politikayla karşılaştı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 2" },
{ t:"1582-06-21", b:"Honnō-ji Vakası: Nobunaga suikaste kurban gitti", tur:"olum", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","darbe","darbe-askeri","konu-siyasi","konu-kisiler","konu-darbe"],
  yer_id:"Kyoto",
  d:"[Azuchi-Momoyama] Kendi generallerinden Akechi Mitsuhide'nin ani baskınında Nobunaga, kaldığı Honnō-ji tapınağını ateşe verip intihar etti; birleşme sürecinin liderliği kısa sürede en yetenekli komutanı Toyotomi Hideyoshi'ye geçecekti.",
  kaynak:"japonya (TDV — devletler.js azuchi-momoyama kaydıyla birebir)" },
{ taraflar:["azuchi-momoyama"], t:"1588-08-29", b:"Hideyoshi \"Kılıç Avı\" fermanını çıkardı", tur:"reform", onem:4, dunya:1, kapsam:"ic",
  etiket:["reform","idari","sosyal","konu-idari","konu-islahat","konu-sosyal"],
  yer_id:"", odak_kimlik:["azuchi-momoyama"],
  d:"[Azuchi-Momoyama] Katanagari adıyla bilinen bu ferman, köylülerden ve din adamlarından bütün silahları topladı; savaşçı (samuray) sınıfını üretici sınıflardan kalıcı olarak ayırıp toplumsal hiyerarşiyi katılaştıran bu düzenleme, iki asır sürecek Tokugawa dönemi toplumsal düzeninin temellerinden biri oldu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Conrad Totman, Early Modern Japan (1993)" },
{ taraflar:["azuchi-momoyama"], t:"1592-05-23", b:"Hideyoshi Kore'yi işgal etti — Ming müdahale etti (Imjin Savaşı)", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","isgal","ittifak","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"[Azuchi-Momoyama] Ming Çin'ini fethetme hayaliyle Kore üzerinden kıtaya geçmeyi planlayan Hideyoshi'nin ordusu Joseon Kore'yi hızla istila etti; Ming'in müttefik olarak müdahalesi ve Amiral Yi Sun-sin'in 'kaplumbağa gemileri'yle kazandığı deniz zaferleri altı yıl süren kanlı ve sonuçta başarısız bir sefere dönüştü.", ic_not_d:"(bkz. `data/kronoloji_cin.js`)",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Cambridge History of Japan, cilt 4 (dunya puanı kronoloji_cin.js'ten alındı)", yer_id:"Pusan" },
{ taraflar:["azuchi-momoyama"], t:"1597-02-05", b:"Nagazaki'de 26 Hıristiyan çarmıha gerilerek idam edildi", tur:"din", onem:3, dunya:2, kapsam:"ic",
  etiket:["din","zulum","konu-kisiler","konu-din"],
  yer_id:"Nagazaki",
  d:"[Azuchi-Momoyama] Hideyoshi'nin 1587'de başlattığı ama gevşek uygulanan misyoner yasağı, İspanyol bir geminin kaptanının sözlerinden şüphelenmesiyle sertleşti; altı Fransisken misyoner ve yirmi Japon Hıristiyanının infazı, on yıllar sonra Tokugawa döneminde toptan yasağa (bkz. D bölümü) uzanacak baskı politikasının erken habercisiydi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 2" },
{ taraflar:["azuchi-momoyama"], t:"1598-09-18", b:"Hideyoshi öldü, Kore'den çekilme başladı", tur:"olum", onem:4, dunya:2, kapsam:"ic",
  etiket:["hukumdar","olum","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"[Azuchi-Momoyama] Ölümünden önce beş kıdemli daimyodan (go-tairō) oluşan bir vesayet konseyi kuran Hideyoshi'nin ardından Kore seferi derhâl tasfiye edildi; oğlu Hideyori henüz çocuktu ve konsey üyelerinden Tokugawa Ieyasu iki yıl içinde bu boşluğu dolduracaktı.", ic_not_d:"Fuşimi, proje yerleşim kümesinde kayıtlı değil.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 2", yer_id:"Kyoto" },
{ t:"1600-10-21", b:"Sekigahara Savaşı: Tokugawa Ieyasu üstünlüğü kesin olarak ele geçirdi", tur:"savas", onem:5, dunya:3, kapsam:"ic",
  etiket:["askeri","siyaset","konu-askeri","konu-siyasi"],
  yer_id:"",
  d:"[Azuchi-Momoyama → Edo] Doğu ve batı koalisyonları arasında bir günde karara bağlanan bu dev muharebe, Ieyasu'yu Japonya'nın tartışmasız hâkimi yaptı; Toyotomi hanesi Osaka'da nominal olarak on beş yıl daha direnecek (bkz. D bölümü, 1615) ama fiilî iktidar artık Tokugawa'daydı.",
  kaynak:"japonya (TDV)", yer_kon:[35.37,136.46] },

// === D) EDO (TOKUGAWA) ŞOGUNLUĞU (1603-1868) ==================================
{ t:"1603-03-24", b:"Tokugawa Ieyasu, Edo'da şogunluğunu kurdu", tur:"kurulus", onem:5, dunya:3, kapsam:"ic",
  etiket:["kurulus","siyaset","konu-siyasi"],
  yer_id:"Edo (Tokyo)",
  d:"[Edo Şogunluğu] İmparatordan seii taishōgun unvanını alan Ieyasu, küçük bir balıkçı köyü olan Edo'yu başkent yaparak 265 yıl sürecek Tokugawa düzenini başlattı; aynı yıl Kyoto'da Izumo no Okuni'nin sahnelediği danslar Kabuki tiyatrosunun doğuşu sayılır.",
  kaynak:"japonya (TDV)" },
{ taraflar:["edo-bakufu"], t:"1614-01-27", b:"Tokugawa şogunluğu Hıristiyanlığı tamamen yasakladı", tur:"din", onem:4, dunya:2, kapsam:"ic",
  etiket:["din","reform","zulum","konu-din","konu-islahat"],
  yer_id:"", odak_kimlik:["edo-bakufu"],
  d:"[Edo Şogunluğu] Hıristiyan daimyoların yabancı güçlerle ittifak kurabileceği ve köylü isyanlarını örgütleyebileceği endişesiyle Ieyasu bütün Hıristiyan ibadetini yasakladı, misyonerleri sürgün etti; bu politika 1637-38 Shimabara İsyanı'yla en kanlı biçimine ulaşacaktı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Conrad Totman, Early Modern Japan (1993)" },
{ taraflar:["edo-bakufu"], t:"1615-06-04", b:"Osaka Kalesi düştü, Toyotomi hanesi tükendi", tur:"son", onem:4, dunya:2, kapsam:"ic",
  etiket:["askeri","son","konu-askeri","konu-siyasi"],
  yer_id:"Osaka",
  d:"[Edo Şogunluğu] Hideyoshi'nin oğlu Hideyori'nin son direniş noktası olan Osaka Kalesi'nin düşüp Hideyori'nin intihar etmesiyle Toyotomi hanedanı tamamen ortadan kalktı; 'Genna Barışı' olarak anılan bu tarihten sonra Japonya iki buçuk asır boyunca büyük bir iç savaş görmeyecekti.",
  kaynak:"japonya (TDV)" },
{ taraflar:["edo-bakufu"], t:"1635-06-21", b:"Sankin-kōtai (dönüşümlü ikamet) sistemi resmileştirildi", tur:"idari", onem:4, dunya:1, kapsam:"ic",
  etiket:["idari","reform","konu-idari","konu-islahat"],
  yer_id:"Edo (Tokyo)",
  d:"[Edo Şogunluğu] Bütün daimyoları yılın belirli sürelerini Edo'da geçirmeye ve ailelerini orada rehin bırakmaya zorlayan bu sistem, hem daimyoların iktisadi gücünü (sürekli yol/konaklama masrafı) hem de isyan kapasitesini kırdı; sistem aynı zamanda Edo-eyalet yolları boyunca büyük bir iç ticaret ve konaklama ekonomisi doğurdu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Conrad Totman, Early Modern Japan (1993)" },
{ taraflar:["edo-bakufu"], t:"1637-12-17", b:"Shimabara İsyanı patlak verdi", tur:"isyan", onem:4, dunya:2, kapsam:"ic",
  etiket:["isyan","din","zulum","konu-isyan","konu-din"],
  yer_id:"",
  d:"[Edo Şogunluğu] Ağır vergiler ve dinî zulümden bunalan, çoğu Hıristiyan Şimabara ve Amakusa köylüleri, genç lider Amakusa Shirō önderliğinde ayaklandı; şogunluk ordusunun kuşatması sonunda yaklaşık 37.000 isyancı katledildi ve bu, Tokugawa döneminin en kanlı iç ayaklanması olarak sakoku politikasının sertleşmesini doğrudan tetikledi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 3", yer_kon:[32.79,130.37] },
{ taraflar:["edo-bakufu"], t:"1639-07-05", b:"\"Sakoku\" fermanıyla ülke neredeyse tamamen dışa kapatıldı", tur:"reform", onem:5, dunya:3, kapsam:"dis",
  etiket:["reform","diplomasi","ekonomi","konu-diplomasi","konu-ekonomi","konu-islahat"],
  yer_id:"", odak_kimlik:["edo-bakufu"],
  d:"[Edo Şogunluğu] Portekizlilerin de kovulmasıyla tamamlanan bu dizi ferman, Japonları yurt dışına çıkmaktan ve yabancıların girmesinden men etti; yalnızca Hollandalı ve Çinli tüccarlara Nagazaki limanında sıkı denetim altında ticaret izni tanındı — 1853'e (bkz. E bölümü) kadar sürecek iki buçuk asırlık kapanma politikasının başlangıcı.",
  kaynak:"japonya (TDV)" },
{ taraflar:["edo-bakufu"], t:"1641-06-25", b:"Hollanda ticaret istasyonu Nagazaki'deki Dejima adacığına taşındı", tur:"ekonomi", onem:3, dunya:2, kapsam:"dis",
  etiket:["ekonomi","ticaret","bilim","konu-bilim","konu-ekonomi"],
  yer_id:"Nagazaki",
  d:"[Edo Şogunluğu] Yapay Dejima adacığına sıkıştırılan Hollanda Doğu Hindistan Şirketi acentesi, sakoku boyunca Japonya'nın Batı'yla tek resmî temas noktası oldu; yıllık raporlar (fūsetsu-gaki) ve Hollandaca kitaplar aracılığıyla süzülen bilgi, 18. yüzyılda 'Rangaku' (Hollanda Bilimi) hareketinin kaynağını oluşturacaktı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Conrad Totman, Early Modern Japan (1993)" },
{ taraflar:["edo-bakufu"], t:"1657-03-02", b:"Meireki Büyük Yangını Edo'yu kül etti", tur:"sosyal", onem:3, dunya:1, kapsam:"ic",
  etiket:["sosyal","dogal-afet","sehircilik","konu-imar","konu-sosyal","afet","afet-yangin"],
  yer_id:"Edo (Tokyo)",
  d:"[Edo Şogunluğu] Üç gün süren yangında şehrin büyük bölümü (Edo Kalesi'nin ana kulesi dahil) yanıp yaklaşık 100.000 kişi öldü; felaket sonrası yeniden imar, geniş caddeler ve yangın aralıklarıyla Edo'yu 18. yüzyılda dünyanın en kalabalık şehirlerinden birine (bir milyonu aşan nüfus) dönüştürecek modern şehir planlamasının başlangıcı oldu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Conrad Totman, Early Modern Japan (1993)" },
{ taraflar:["edo-bakufu"], t:"1689-05-16", b:"Matsuo Bashō, \"Oku no Hosomichi\" yolculuğuna çıktı", tur:"kultur", onem:3, dunya:2, kapsam:"ic",
  etiket:["kultur","edebiyat","haiku","konu-sanat","konu-kultur"],
  yer_id:"Edo (Tokyo)",
  d:"[Edo Şogunluğu — Genroku dönemi] Kuzey Japonya'ya beş ay süren yürüyüş yolculuğu sırasında yazdığı haiku ve düzyazıları birleştiren Bashō'nun bu seyahatnamesi, haikuyu sıradan bir eğlence türünden derin bir şiir sanatına yükseltip Japon edebiyatının klasiklerinden biri oldu; aynı Genroku döneminde (1688-1704) Chikamatsu Monzaemon'un kukla tiyatrosu (bunraku/jōruri) oyunları ve Ihara Saikaku'nun 'yüzen dünya' (ukiyo) romanları şehir kültürünün altın çağını simgeliyordu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 3" },
{ taraflar:["edo-bakufu"], t:"1703-03-20", b:"47 Ronin'in intikamı — Akō Vakası sona erdi", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","sosyal","bushido","konu-kultur","konu-sosyal"],
  yer_id:"Edo (Tokyo)",
  d:"[Edo Şogunluğu] Efendileri Asano Naganori'yi ölüme sürükleyen saray görevlisi Kira Yoshinaka'yı bir yıllık gizli hazırlığın ardından öldüren kırk yedi eski samuray (rōnin), şogunluk hukukuna göre suçlu bulunup seppuku ile idam edildi; olay hemen tiyatro ve edebiyata (Chūshingura) uyarlanarak sadakat ve bushidō (samuray ahlâkı) idealinin en çok anlatılan Japon hikâyesi hâline geldi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 3" },
{ taraflar:["edo-bakufu"], t:"1720-01-01", b:"Şogun Yoshimune, Hıristiyanlık dışı Batı kitaplarının ithal yasağını gevşetti", tur:"bilim", onem:3, dunya:2, kapsam:"ic",
  etiket:["bilim","reform","konu-bilim","konu-kultur","konu-islahat","konu-sosyal"],
  yer_id:"Edo (Tokyo)", kapsam_genis:true,
  d:"[Edo Şogunluğu — Kyōhō reformları] Tarım ve tıp bilgisine pratik ilgi duyan Yoshimune'nin bu kararı, misyoner içeriği taşımayan Hollandaca eserlerin incelenmesine kapı araladı; bu, sonraki elli yılda 'Rangaku' (Hollanda Bilimi) çevirmen-bilgin geleneğinin doğmasını sağlayan doğrudan idari adımdı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["edo-bakufu"], t:"1774-08-01", b:"Sugita Genpaku, \"Kaitai Şinşo\"yu (Yeni Anatomi Kitabı) yayımladı", tur:"bilim", onem:4, dunya:2, kapsam:"ic",
  etiket:["bilim","tip","ceviri","konu-bilim","konu-kultur"],
  yer_id:"Edo (Tokyo)",
  d:"[Edo Şogunluğu — Rangaku] Hollandaca bir anatomi atlasını (Ontleedkundige Tafelen) sözlüksüz, kelime kelime çözerek Japoncaya çeviren Sugita Genpaku ve arkadaşları, Batı tıbbının Japon bilim çevrelerine sistemli girişini başlattı; eser Rangaku hareketinin kurucu metni sayılır ve Meiji döneminin Batı bilimine açılımına giden entelektüel zincirin ilk halkasıdır.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["edo-bakufu"], t:"1782-01-01", b:"Tenmei Kıtlığı başladı", tur:"sosyal", onem:4, dunya:1, kapsam:"ic",
  etiket:["sosyal","kitlik","demografi","konu-sosyal","konu-demografi","afet","afet-kitlik","afet-volkan-firtina"],
  yer_id:"", odak_yer:["Sendai", "Morioka", "Hirosaki"],
  d:"[Edo Şogunluğu] Soğuk hava ve 1783'teki Asama Dağı yanardağ patlamasıyla ağırlaşan bu kıtlık, kuzey Japonya'da yüzbinlerce insanın ölümüne yol açtı; şehirlerde pirinç ayaklanmaları (uçi-kovaşi) patlak verdi ve felaket, Kansei reformlarının (1787-1793) mâlî-tarımsal önlemlerini tetikledi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Conrad Totman, Early Modern Japan (1993)" },
{ taraflar:["edo-bakufu"], t:"1798-01-01", b:"Motoori Norinaga, \"Kojiki-den\"i tamamladı", tur:"kultur", onem:3, dunya:2, kapsam:"ic",
  etiket:["kultur","felsefe","kokugaku","konu-din","konu-kultur"],
  yer_id:"",
  d:"[Edo Şogunluğu — Kokugaku] Otuz yılı aşkın emekle Japonya'nın en eski tarih-mitoloji derlemesi Kojiki'yi şerh eden Norinaga'nın bu başyapıtı, Çin/Konfüçyüsçü etkiden arındırılmış özgün bir Japon kimliği arayan 'kokugaku' (millî öğrenim) akımının doruk noktasıydı; bu düşünce çizgisi bir asır sonra Meiji dönemi Şinto-milliyetçi ideolojisine zemin hazırlayacaktı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 3", yer_kon:[34.58,136.53] },
{ taraflar:["edo-bakufu"], t:"1831-01-01", b:"Katsushika Hokusai, \"Fuji Dağı'nın Otuz Altı Manzarası\" serisini yayımladı", tur:"kultur", onem:3, dunya:2, kapsam:"ic",
  etiket:["kultur","kultur","ukiyo-e","konu-sanat","konu-kultur"],
  yer_id:"Edo (Tokyo)",
  d:"[Edo Şogunluğu] Serinin en ünlü baskısı 'Kanagawa Açıklarında Büyük Dalga', ahşap baskı (ukiyo-e) sanatının dünya çapında tanınan simgesi oldu; Hokusai'nin ve çağdaşı Andō Hiroşige'nin manzara baskıları, birkaç on yıl sonra Japonya'nın dışa açılmasıyla Avrupa'da 'Japonizm' akımını (empresyonist ressamları doğrudan etkileyen bir hayranlık dalgası) tetikleyecekti.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: George Sansom, A History of Japan, cilt 3" },
{ taraflar:["edo-bakufu"], t:"1837-06-01", b:"Ōşio Heihaçirō, Osaka'da ayaklandı", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["isyan","kriz","sosyal","konu-siyasi","konu-isyan","konu-sosyal"],
  yer_id:"Osaka",
  d:"[Edo Şogunluğu] Tenpō kıtlığı sırasında yoksullara yardımı reddeden yerel yönetime öfkelenen eski bir şogunluk memuru Ōşio, kendi kitaplığını satıp topladığı parayla kısa süreli bir ayaklanma başlattı; isyan bir günde bastırılsa da bir şogunluk memurunun bizzat rejime karşı silah kaldırması, merkezi otoritenin meşruiyet krizinin derinliğini gösterdi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },

// === E) BAKUMATSU VE MEİJİ RESTORASYONU (1853-1923) ===========================
{ t:"1853-07-08", b:"Komodor Perry'nin \"Kara Gemileri\" Uraga'ya demirledi", tur:"antlasma", onem:5, dunya:4, kapsam:"dis",
  etiket:["diplomasi","askeri","donanma","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"[Edo Şogunluğu] ABD Başkanı adına gelen Commodore Matthew Perry'nin dört buharlı savaş gemisi, iki buçuk asırlık sakoku'yu zorla sona erdirmek üzere Edo Körfezi'ne girdi; şogunluk, gemilerin ateş gücü karşısında müzakereyi kabul etmek zorunda kaldı ve ertesi yıl imzalanan Kanagawa Sözleşmesi Japonya'nın Batı'ya açılışının ilk adımı oldu.", ic_not_d:"Uraga, proje yerleşim kümesinde kayıtlı değil.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: W. G. Beasley, The Meiji Restoration (1972)", yer_kon:[35.25,139.72] },
{ taraflar:["edo-bakufu"], t:"1858-07-29", b:"ABD ile \"eşitsiz\" Ansei Ticaret Antlaşması imzalandı", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","ekonomi","sömürgecilik","konu-siyasi","konu-diplomasi","konu-ekonomi"],
  yer_id:"",
  d:"[Edo Şogunluğu] Konsolosluk yargı yetkisi (yabancıların Japon mahkemelerinde yargılanmaması) ve gümrük özerkliğinin Japonya'nın elinden alınması gibi maddeler içeren bu antlaşma, kısa sürede Hollanda, Rusya, İngiltere ve Fransa'yla benzerleriyle takip edildi; bu 'eşitsiz antlaşmalar' zinciri Meiji döneminin başlıca dış politika hedeflerinden birini (tam bağımsız egemenliğin geri kazanılması, bkz. 1911) doğuracaktı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)", yer_kon:[35.44,139.64] },
{ taraflar:["edo-bakufu"], t:"1860-03-24", b:"Şogunluk baş danışmanı Ii Naosuke suikaste kurban gitti", tur:"olum", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","darbe","suikast","konu-siyasi","konu-kisiler","konu-darbe"],
  yer_id:"Edo (Tokyo)",
  d:"[Edo Şogunluğu] Yabancı antlaşmalarını imzalayıp muhalifleri sindiren (Ansei Temizliği) Ii Naosuke, Edo Kalesi'nin Sakuradamon Kapısı önünde Mito hanından samuraylarca öldürüldü; bu suikast, şogunluk otoritesinin artık sokakta bile korunamadığını gösteren bir dönüm noktasıydı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: W. G. Beasley, The Meiji Restoration (1972)" },
{ taraflar:["edo-bakufu"], t:"1866-03-07", b:"Satsuma-Chōshū İttifakı gizlice kuruldu", tur:"ittifak", onem:4, dunya:2, kapsam:"ic",
  etiket:["ittifak","siyaset","konu-siyasi","konu-diplomasi"],
  yer_id:"Kyoto",
  d:"[Edo Şogunluğu] Uzun süre birbirine düşman olan iki güçlü güney hanının, Sakamoto Ryōma'nın arabuluculuğuyla şogunluğa karşı gizlice birleşmesi, Meiji Restorasyonu'nu getirecek askerî-siyasi ittifakın çekirdeğini oluşturdu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: W. G. Beasley, The Meiji Restoration (1972)" },
{ taraflar:["edo-bakufu"], t:"1867-11-09", b:"Şogun Yoshinobu iktidarı imparatora iade etti (Taisei Hōkan)", tur:"son", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","son","konu-siyasi"],
  yer_id:"Kyoto",
  d:"[Edo Şogunluğu] Askerî yenilginin kaçınılmaz göründüğünü fark eden son şogun Tokugawa Yoshinobu, iktidarı resmen imparatora devretmeyi teklif etti; bu barışçıl teslimiyet girişimi, iki ay sonra ilan edilecek Meiji Restorasyonu'na (bkz. altta) giden son adımdı, ama Boşin İç Savaşı yine de 1869'a kadar sürecekti.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: W. G. Beasley, The Meiji Restoration (1972)" },
{ t:"1868-01-03", b:"Meiji Restorasyonu ilan edildi, şogunluk kaldırıldı", tur:"kurulus", onem:5, dunya:4, kapsam:"ic",
  etiket:["kurulus","siyaset","reform","konu-siyasi","konu-islahat"],
  yer_id:"Kyoto",
  d:"[Meiji dönemi] Genç İmparator Meiji adına Satsuma-Chōshū koalisyonunun yayımladığı ferman, 675 yıllık şogunluk sistemine son verip imparatorluk otoritesini 'restore' etti; Boşin Savaşı'nın (1868-1869) ardından kesinleşen bu değişim, Japonya'yı bir nesil içinde sanayileşmiş bir dünya gücüne dönüştürecek reform dalgasının başlangıcıydı.",
  kaynak:"japonya (TDV)" },
{ taraflar:["meiji-japonya"], t:"1868-04-06", b:"Beş Maddelik Yemin (Charter Oath) ilan edildi", tur:"reform", onem:4, dunya:2, kapsam:"ic",
  etiket:["reform","idari","felsefe","konu-idari","konu-din","konu-islahat"],
  yer_id:"Kyoto",
  d:"[Meiji dönemi] Genç imparator adına ilan edilen bu kısa bildirge, kararların 'geniş meclisler'de görüşülmesini, eski kötü geleneklerin terk edilmesini ve 'bilginin dünyanın her yanından aranmasını' vaat etti; somut bir anayasa olmasa da Meiji reform programının ilkesel çerçevesini çizen ve 1889 Anayasası'na giden yolu açan sembolik kurucu belge sayılır.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: W. G. Beasley, The Meiji Restoration (1972)" },
{ taraflar:["meiji-japonya"], t:"1872-08-03", b:"Gakusei (Eğitim Sistemi) fermanıyla zorunlu ilköğretim getirildi", tur:"reform", onem:4, dunya:2, kapsam:"ic",
  etiket:["reform","egitim","bilim","konu-bilim","konu-egitim","konu-islahat"],
  yer_id:"", odak_kimlik:["meiji-japonya"],
  d:"[Meiji dönemi] Fransız ve ABD modellerinden esinlenen bu ferman, cinsiyet ve sınıf ayrımı gözetmeksizin bütün çocuklar için ilköğretimi zorunlu kıldı; okuryazarlık oranını bir nesilde dramatik biçimde yükseltip Meiji sanayileşmesinin insan sermayesi temelini attı, ama köylü ailelerin okul harcı yükü zaman zaman yerel isyanlara da yol açtı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["meiji-japonya"], t:"1872-10-04", b:"Tomioka İpek Fabrikası açıldı", tur:"ekonomi", onem:3, dunya:2, kapsam:"ic",
  etiket:["ekonomi","teknoloji","sanayi","konu-bilim","konu-ekonomi","konu-sanayi"],
  yer_id:"",
  d:"[Meiji dönemi] Fransız mühendislerin danışmanlığıyla kurulan bu devlet fabrikası, Japonya'nın ilk büyük ölçekli modern sanayi tesisiydi ve ipek ihracatını (dönemin başlıca döviz kaynağı) mekanize üretimle katladı; genç kadın işçilerin eğitildiği model tesis, Meiji sanayileşme stratejisinin (devlet öncülüğünde örnek fabrika kurup sonra özel sektöre devretme) somut simgesi oldu.", ic_not_d:"Tomioka, proje yerleşim kümesinde kayıtlı değil.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)", yer_kon:[36.25,138.89] },
{ taraflar:["meiji-japonya"], t:"1885-03-16", b:"Fukuzawa Yukichi, \"Datsu-A Ron\" (Asya'dan Çıkış) makalesini yayımladı", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["felsefe","kultur","siyaset","konu-siyasi","konu-din","konu-kultur"],
  yer_id:"Edo (Tokyo)",
  d:"[Meiji dönemi] Keiō Üniversitesi'nin kurucusu ve dönemin en etkili aydını Fukuzawa'nın imzasız yayımladığı bu makale, Japonya'nın 'geri kalmış' komşularından (Çin, Kore) uzaklaşıp Batı medeniyetiyle saf tutması gerektiğini savundu; fikir hem Meiji modernleşmeciliğinin hem de sonraki on yıllarda Japonya'nın Asya kıtasındaki emperyal tavrının entelektüel gerekçelerinden biri olarak etkili oldu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["meiji-japonya"], t:"1889-02-05", b:"Tokyo Sanat Okulu (bugünkü Tokyo Sanat Üniversitesi) kuruldu", tur:"kultur", onem:2, dunya:1, kapsam:"ic",
  etiket:["kultur","kultur","egitim","konu-kultur","konu-egitim"],
  yer_id:"Edo (Tokyo)",
  d:"[Meiji dönemi] Okakura Tenşin ve Amerikalı sanat tarihçisi Ernest Fenollosa'nın öncülüğünde kurulan bu okul, hızla Batılılaşan Meiji toplumunda değersizleşme tehlikesiyle karşı karşıya kalan geleneksel Japon resim ve zanaat tekniklerini (nihonga) kurumsal olarak koruyup yeni nesillere aktardı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["meiji-japonya"], t:"1890-12-01", b:"Kitasato Şibasaburō, Tokyo'da kendi Bulaşıcı Hastalıklar Enstitüsü'nü kurdu", tur:"bilim", onem:4, dunya:3, kapsam:"ic",
  etiket:["bilim","tip","bakteriyoloji","konu-bilim","afet","afet-salgin"],
  yer_id:"Edo (Tokyo)",
  d:"[Meiji dönemi] Almanya'da Robert Koch'un yanında tetanoz toksin-antitoksin bağışıklığını keşfeden Kitasato, yurda dönüşünde kurduğu enstitüyle Japonya'yı dünya bakteriyolojisinin öncü merkezlerinden birine dönüştürdü; dört yıl sonra (1894) Hong Kong'da veba basilini bağımsız olarak tespit edecek, Japon tıp biliminin Meiji döneminde Batı'yla eşdeğer düzeye ulaştığının en somut kanıtını verecekti.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["meiji-japonya"], t:"1871-08-29", b:"Han sistemi kaldırılıp vilayetler (ken) kuruldu", tur:"reform", onem:5, dunya:2, kapsam:"ic",
  etiket:["idari","reform","konu-idari","konu-islahat"],
  yer_id:"Edo (Tokyo)",
  d:"[Meiji dönemi] Haihan-chiken fermanıyla feodal hanlar (han) tazminat karşılığında merkezi hükümete devredilip yerlerine doğrudan atanan valilerin yönettiği vilayetler kuruldu; bu, Sengoku'dan beri süregelen bölgesel özerkliğe son veren ve modern merkezi devletin idari temelini atan en köklü Meiji reformlarından biriydi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["meiji-japonya"], t:"1871-12-23", b:"Iwakura Heyeti, Batı'yı incelemek üzere yola çıktı", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","bilim","reform","konu-diplomasi","konu-bilim","konu-islahat"],
  yer_id:"",
  d:"[Meiji dönemi] Devlet adamı Iwakura Tomomi başkanlığında ABD ve on iki Avrupa ülkesini gezen bu yaklaşık yüz kişilik heyet (aralarında geleceğin başbakanı İtō Hirobumi de vardı), eşitsiz antlaşmaları gözden geçirtme girişiminde başarısız oldu ama Batı'nın sanayi, eğitim ve askerî kurumlarını doğrudan gözlemleyip Meiji reform programının plan taslağını bu iki yıllık seyahatten çıkardı.", ic_not_d:"Yokohama, proje yerleşim kümesinde kayıtlı değil.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)", yer_kon:[35.44,139.64] },
{ taraflar:["meiji-japonya"], t:"1872-10-14", b:"Japonya'nın ilk demiryolu (Tokyo-Yokohama) açıldı", tur:"bilim", onem:3, dunya:2, kapsam:"ic",
  etiket:["bilim","teknoloji","altyapi","imar","islahat","konu-bilim","konu-imar","konu-islahat","konu-ulastirma"],
  yer_id:"Edo (Tokyo)",
  d:"[Meiji dönemi] İngiliz mühendislerin danışmanlığıyla inşa edilen 29 kilometrelik bu ilk hat, Meiji hükümetinin 'zengin ülke, güçlü ordu' (fukoku kyōhei) sloganıyla yürüttüğü hızlandırılmış sanayileşme ve altyapı seferberliğinin somut ilk sembollerinden biriydi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["meiji-japonya"], t:"1873-01-10", b:"Askerlik yasası ile evrensel zorunlu askerlik getirildi", tur:"reform", onem:4, dunya:2, kapsam:"ic",
  etiket:["reform","askeri","idari","konu-askeri","konu-idari","konu-islahat"],
  yer_id:"Edo (Tokyo)", kapsam_genis:true,
  d:"[Meiji dönemi] Samuray sınıfının silah tekelini fiilen sona erdiren bu yasa, sınıf ayrımı gözetmeksizin bütün erkekleri askerlik hizmetine tâbi tutarak modern, standart Batı tarzı bir orduyu mümkün kıldı; aynı yıl Gregoryen takvimine de geçildi. Samurayların ayrıcalıklı statüsünün bu köklü aşınması üç yıl sonra kılıç taşıma yasağıyla (1876) ve dört yıl sonra Satsuma İsyanı'yla (1877) patlak verecek gerilimi biriktirdi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["meiji-japonya"], t:"1877-02-15", b:"Satsuma İsyanı: Saigō Takamori son samuray direnişini başlattı", tur:"isyan", onem:5, dunya:2, kapsam:"ic",
  etiket:["isyan","askeri","son","konu-askeri","konu-siyasi","konu-isyan"],
  yer_id:"Kagoşima",
  d:"[Meiji dönemi] Restorasyon'un mimarlarından ama yeni düzenin samuray ayrıcalıklarını tasfiye eden reformlarına (kılıç yasağı, zorunlu askerlik) öfkelenen Saigō Takamori, doğduğu Kagoşima'da ayaklandı; yedi ay süren isyan, sayıca üstün ama geleneksel silahlarla donanmış samuray ordusunun modern seferber edilmiş halk ordusuna yenilmesiyle bastırıldı ve Saigō seppuku yaptı — bu, samuray sınıfının bağımsız bir askerî güç olarak son direnişiydi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["meiji-japonya"], t:"1877-04-12", b:"Tokyo İmparatorluk Üniversitesi kuruldu", tur:"bilim", onem:3, dunya:2, kapsam:"ic",
  etiket:["bilim","egitim","reform","konu-bilim","konu-egitim","konu-islahat"],
  yer_id:"Edo (Tokyo)",
  d:"[Meiji dönemi] Batı tarzı yüksek öğretimi Japon topraklarında kurumsallaştıran bu ilk imparatorluk üniversitesi, hukuk, tıp, mühendislik ve fen fakülteleriyle Meiji sanayileşme ve bürokratikleşme programının bilimsel-teknik kadro ihtiyacını karşıladı; bakteriyolog Kitasato Şibasaburō gibi dünya çapında tanınacak bilim insanları bu kurumsal alt yapıdan yetişecekti.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["meiji-japonya"], t:"1889-02-11", b:"Meiji Anayasası kabul edildi", tur:"reform", onem:5, dunya:3, kapsam:"ic",
  etiket:["reform","idari","hukuk","konu-idari","konu-islahat","konu-hukuk"],
  yer_id:"Edo (Tokyo)",
  d:"[Meiji dönemi] İtō Hirobumi'nin başlıca Prusya anayasasından esinlenerek hazırladığı bu belge, Asya'nın ilk yazılı anayasası olarak imparatoru dokunulmaz-kutsal ilan ederken sınırlı yetkili bir seçilmiş meclis (Diet/Kokkai) de kurdu; anayasa monarşi ile modern anayasal kurumları birleştiren, döneminin Batılı olmayan dünyasında benzersiz bir sentezdi.",
  kaynak:"japonya (TDV — devletler.js meiji-japonya kaydıyla birebir)" },
{ taraflar:["meiji-japonya"], t:"1890-09-16", b:"Ertuğrul Fırkateyni Kuşimoto açıklarında battı", tur:"kayip", onem:4, dunya:2, kapsam:"dis",
  etiket:["deniz","osmanli","facia","konu-askeri"],
  yer_id:"",
  d:"[Meiji dönemi — Osmanlı ilişkisi] II. Abdülhamid'in Japonya'ya gönderdiği ve dostluk ziyaretini tamamlayıp dönüş yolunda bir tayfuna yakalanan Osmanlı fırkateyni Ertuğrul, Kuşimoto (Oşima adası) açıklarında kayalıklara çarpıp battı; 587'den fazla Osmanlı denizcisi öldü, yerel Japon balıkçı köylülerinin canla başla yürüttüğü kurtarma çabası ve sağ kalanların İstanbul'a Japon savaş gemileriyle uğurlanması, Türk-Japon ilişkilerinin kurucu ve her iki ülkede de yıl dönümleriyle anılan olayı hâline geldi.", ic_not_d:"Kuşimoto/Oşima, proje yerleşim kümesinde kayıtlı değil.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok (ertugrul-firkateyni, ertugrul-facia sluglaru 2026-08-21'de sınandı, ikisi de ölü); dayanak: standart akademik/diplomatik tarih kaynağı (Selçuk Esenbel'in Türk-Japon ilişkileri çalışmaları), olay ayrıca Türkiye ve Japonya'nın resmî anma törenleriyle doğrulanmıştır", yer_kon:[33.47,135.86] },
{ taraflar:["meiji-japonya"], t:"1892-01-01", b:"Yamada Torajirō, Ertuğrul yardım bağışlarını İstanbul'a götürdü", tur:"diplomasi", onem:2, dunya:1, kapsam:"dis",
  etiket:["diplomasi","osmanli","konu-diplomasi"],
  yer_id:"",
  d:"[Meiji dönemi — Osmanlı ilişkisi] Ertuğrul faciasının haberi Japonya'da geniş bir halk bağışı kampanyası başlattı; genç tüccar Yamada Torajirō bu yardımları bizzat İstanbul'a taşıdı ve sonraki yıllarda payitahtta yerleşip iki ülke arasında gayri resmî bir irtibat noktası olarak hizmet etti — Osmanlı sarayında tanınan ilk Japon sivil kişilerden biri oldu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak (Selçuk Esenbel'in Türk-Japon ilişkileri çalışmaları)", yer_id:"İstanbul" },
{ taraflar:["meiji-japonya"], t:"1894-07-25", b:"Birinci Çin-Japon Savaşı başladı", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  yer_id:"",
  d:"[Meiji dönemi] Kore üzerindeki nüfuz mücadelesi açık savaşa dönüştü; modernleşmiş Meiji ordusu ve donanması, sayıca üstün ama teçhizat ve eğitim bakımından geri kalmış Qing kuvvetlerine art arda ağır yenilgiler verdi— Japonya'nın Doğu Asya'da ilk büyük dış zaferiydi.", ic_not_d:"(bkz. `data/kronoloji_cin.js`)",
  kaynak:"japonya (TDV) — dunya puanı kronoloji_cin.js'ten alındı", yer_kon:[37.05,126.42] },
{ t:"1895-04-17", b:"Şimonoseki Antlaşması imzalandı — Tayvan Japonya'ya geçti", tur:"antlasma", onem:5, dunya:5, kapsam:"dis",
  etiket:["antlasma","toprak-kazanc","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"[Meiji dönemi] Li Hongzhang'ın imzaladığı antlaşmayla Qing, Kore'nin bağımsızlığını tanıdı, Tayvan ve Liaodong yarımadasını Japonya'ya bıraktı ve ağır tazminat ödedi; bir Asya devletinin başka bir Asya büyük gücünü resmî antlaşmayla diz çöktürmesi dünya kamuoyunda şaşkınlık yarattı — 'Üçlü Müdahale'yle (Rusya-Almanya-Fransa) Liaodong'un geri alınması ise Japon-Rus husumetinin tohumunu attı.", ic_not_d:"Şimonoseki, proje yerleşim kümesinde kayıtlı değil.",
  kaynak:"japonya (TDV) — dunya puanı kronoloji_cin.js'ten alındı", yer_kon:[33.96,130.94] },
{ taraflar:["meiji-japonya"], t:"1902-01-30", b:"İngiliz-Japon İttifakı imzalandı", tur:"ittifak", onem:4, dunya:3, kapsam:"dis",
  etiket:["diplomasi","ittifak","konu-diplomasi"],
  yer_id:"",
  d:"[Meiji dönemi] Büyük Britanya'nın 'görkemli yalnızlık' politikasından ilk kez vazgeçip Avrupalı olmayan bir devletle eşit şartlarda imzaladığı bu ittifak, Japonya'yı uluslararası sistemde tanınmış bir büyük güç konumuna taşıdı ve iki yıl sonra Rus-Japon Savaşı'nda Rusya'nın müttefik bulmasını (Fransa'nın Britanya'yla çatışma korkusuyla geri çekilmesi) zorlaştırdı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)", yer_id:"Londra" },
{ taraflar:["meiji-japonya"], t:"1904-02-08", b:"Rus-Japon Savaşı başladı", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","donanma","konu-askeri"],
  yer_id:"",
  d:"[Meiji dönemi] Mançurya ve Kore üzerindeki nüfuz çekişmesi, Japon donanmasının Port Arthur'daki Rus filosuna savaş ilanı olmadan baskın saldırısıyla açık savaşa dönüştü; kara savaşındaki Mukden zaferi ve deniz savaşındaki Tsushima zaferiyle (bkz. altta) Japonya, tarihte bir Asya devletinin bir Avrupa büyük gücünü yendiği ilk modern savaşı kazandı.", ic_not_d:"(bkz. `data/kronoloji_rusya.js`)",
  kaynak:"japonya (TDV) — dunya puanı kronoloji_rusya.js'ten alındı (brifingdeki dunya:5 önerisiyle ÇELİŞİYOR, koordinatöre bildirildi)", yer_id:"Lüşun (Port Arthur)" },
{ taraflar:["meiji-japonya"], t:"1905-05-27", b:"Tsushima Deniz Muharebesi: Rus Baltık Filosu yok edildi", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","donanma","konu-askeri"],
  yer_id:"Tsuşima (İzuhara)",
  d:"[Meiji dönemi] Yarım dünyayı dolaşarak Uzak Doğu'ya ulaşan Rus Baltık Filosu, Amiral Tōgō Heihaçirō'nun kuvvetlerince Tsushima Boğazı'nda neredeyse tamamen imha edildi; bu zafer savaşı fiilen bitirdi ve Tōgō, dönemin Osmanlı aydınları arasında bile hayranlıkla anılan bir 'modern Doğu' kahramanına dönüştü.", ic_not_d:"(bkz. `data/kronoloji_rusya.js`)",
  kaynak:"japonya (TDV) — dunya puanı kronoloji_rusya.js'ten alındı" },
{ t:"1905-09-05", b:"Portsmouth Antlaşması Rus-Japon Savaşı'nı sona erdirdi", tur:"antlasma", onem:5, dunya:4, kapsam:"dis",
  etiket:["antlasma","toprak-kazanc","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"[Meiji dönemi] ABD Başkanı Theodore Roosevelt'in arabuluculuğuyla New Hampshire'da imzalanan antlaşmayla Rusya, Kore'deki Japon nüfuzunu tanıdı, Güney Sahalin'i ve Liaodong kirasını (Port Arthur dahil) Japonya'ya bıraktı; savaş tazminatı alınamaması Japon kamuoyunda hayal kırıklığı yaratıp Hibiya Ayaklanması'nı tetiklese de, antlaşma Japonya'nın büyük güç statüsünü uluslararası hukukla tescillemiş oldu. (Portsmouth, ABD'de — proje kapsamı dışı.)",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)", yer_kon:[43.08,-70.76] },
{ t:"1910-08-29", b:"Japonya Kore'yi ilhak etti", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","isgal","toprak-kazanc","konu-askeri"],
  yer_id:"",
  d:"[Meiji dönemi] 1905'ten beri fiilen himaye altında tutulan Joseon Kore'nin resmî ilhakıyla yarım asırlık bağımsızlık son buldu; Kore, 1945'e kadar sürecek doğrudan Japon sömürge idaresine girdi ve bu, Meiji Japonyası'nın kıta Asyası'ndaki emperyal genişlemesinin ilk büyük kalıcı ilhakıydı.", ic_not_d:"(bkz. `data/devletler.js` joseon kaydı)",
  kaynak:"japonya (TDV)", yer_id:"Seul (Hanyang)" },
{ taraflar:["meiji-japonya"], t:"1911-02-21", b:"ABD ile yeni antlaşmayla gümrük özerkliği geri kazanıldı", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","ekonomi","konu-diplomasi","konu-ekonomi"],
  yer_id:"",
  d:"[Meiji dönemi] 1858'den beri süren eşitsiz antlaşmalar zincirinin son büyük kısıtlaması olan gümrük özerkliğinin ABD ile yeni bir antlaşmayla iade edilmesi, Japonya'nın tam egemen bir uluslararası aktör olarak Batı devletler sistemine kabulünü tamamladı — Perry'nin gelişinden tam 58 yıl sonra.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)", yer_kon:[38.9,-77.04] },
{ taraflar:["meiji-japonya"], t:"1912-07-30", b:"Meiji İmparatoru öldü, Taishō dönemi başladı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-kisiler","konu-hanedan"],
  yer_id:"Edo (Tokyo)",
  d:"[Meiji → Taishō] 45 yıllık saltanatı Japonya'yı feodal bir ada ülkesinden sanayileşmiş bir dünya gücüne dönüştüren Meiji İmparatoru'nun ölümü, aynı gün oğlu Yoşihito'nun tahta çıkışıyla Taishō dönemine geçişi simgeledi; General Nogi Maresuke'nin imparatora sadakatle intihar etmesi (junshi) eski bushidō geleneğinin son büyük yankısı olarak kamuoyunda büyük yankı uyandırdı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["meiji-japonya"], t:"1914-08-23", b:"Japonya, İtilaf Devletleri yanında I. Dünya Savaşı'na girdi", tur:"savas", onem:3, dunya:3, kapsam:"dis",
  etiket:["askeri","diplomasi","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"[Taishō dönemi] İngiliz-Japon İttifakı gerekçesiyle Almanya'ya savaş ilan eden Japonya, Çin'deki Alman imtiyaz bölgesi Qingdao'yu ve Pasifik'teki Alman adalarını (Mariana, Karolin, Marşal) ele geçirdi; savaş, Japonya'ya asgari insan kaybıyla önemli toprak ve nüfuz kazandırdı ve 1919 Paris Barış Konferansı'nda beş büyük güçten biri olarak masaya oturmasını sağladı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)", yer_id:"Edo (Tokyo)" },
{ taraflar:["meiji-japonya"], t:"1918-08-03", b:"Pirinç Ayaklanmaları ülke çapına yayıldı", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["isyan","sosyal","ekonomi","konu-isyan","konu-ekonomi","konu-sosyal"],
  yer_id:"", odak_yer:["Edo (Tokyo)", "Osaka", "Kumamoto", "Sendai"],
  d:"[Taishō dönemi] Savaş dönemi enflasyonu ve Sibirya Müdahalesi spekülasyonuyla fırlayan pirinç fiyatlarına karşı balıkçı kadınların başlattığı protesto, haftalar içinde yüzlerce şehre yayılan kitlesel ayaklanmaya dönüştü; hükümetin istifasına yol açan bu olay, Taishō döneminin artan siyasi katılım ('Taishō Demokrasisi') talebinin en somut patlaması oldu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },
{ taraflar:["meiji-japonya"], t:"1919-01-18", b:"Japonya, Paris Barış Konferansı'nda ırksal eşitlik önergesini sundu — reddedildi", tur:"diplomasi", onem:3, dunya:3, kapsam:"dis",
  etiket:["diplomasi","milletler-cemiyeti","konu-diplomasi"],
  yer_id:"",
  d:"[Taishō dönemi] Milletler Cemiyeti sözleşmesine ırk ayrımı yapmama ilkesinin eklenmesini öneren Japon delegasyonu, oy çokluğuna rağmen Başkan Wilson'ın oturum başkanı sıfatıyla önergeyi 'oybirliği gerekir' diyerek reddetmesiyle geri çevrildi; bu ret, büyük güçler arasında bile Japonya'ya karşı ırkçı çifte standardı gözler önüne sererek Japon kamuoyunda derin bir hayal kırıklığına ve giderek Batı karşıtı milliyetçiliğin güçlenmesine katkıda bulundu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)", yer_id:"Paris" },
{ taraflar:["meiji-japonya"], t:"1923-09-01", b:"Büyük Kantō Depremi Tokyo ve Yokohama'yı yerle bir etti", tur:"sosyal", onem:5, dunya:2, kapsam:"ic",
  etiket:["sosyal","dogal-afet","demografi","konu-sosyal","konu-demografi","afet","afet-deprem","afet-yangin"],
  yer_id:"Edo (Tokyo)",
  d:"[Taishō dönemi] 7,9 büyüklüğündeki deprem ve ardından çıkan yangın fırtınaları, başkent bölgesinde 100.000'i aşkın kişinin ölümüne ve neredeyse bütün Tokyo-Yokohama kentsel dokusunun yıkımına yol açtı; felaket sonrası panik ortamında Korelilere ve sosyalistlere yönelik linç dalgaları da yaşandı — proje kapsamının (1923-10-29) son ayına denk gelen bu deprem, modern Japonya tarihinin en yıkıcı doğal afetiydi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Marius B. Jansen, The Making of Modern Japan (2000)" },

];

;
/* ==== data/kronoloji_misir.js ==== */
// =====================================================================
// OSMANLI MISIRI ve KAVALALI HANEDANI — KRONOLOJİ · 1517-1922
// Oturum: MISIR KRONOLOJİ (aynı oturum, MEMLÜK KRONOLOJİ'nin devamı)
// Görevi veren: OSMANGAZİ (koordinatör). Otorite: oturumlar/KRONOLOJI-SARTNAME.md
//
// PARTİ 1 (ağ arızası altında): 83 madde — mevcut Osmanlı kronolojisinden
//   (data/olaylar*.js) Mısır perspektifine uyarlandı, kaynak dosya+madde açık.
// PARTİ 2: +37 madde — A) Osmanlı eyaleti 1517-1798 İÇ tarihi (17: Ahmed
//   Paşa isyanı, Kāsımiyye-Zülfikāriyye, Kazdağlı hizbi, Ali Bey el-Kebîr'in
//   bağımsızlık girişimi 1768-1775) · E) Bilim-kültür-toplum (20: Bulak
//   Matbaası, Tahtâvî, Kasrü'l-Aynî tıp okulu, pamuk ekonomisi, Kahire imarı,
//   Dârü'l-Kütüb, Antikiteler Servisi/Mısırbilim, el-Ahrâm, Efgânî/Abduh).
// TOPLAM: 120 madde. Sayı hedeflenmedi (KRONOLOJI-SARTNAME.md §1).
//
// 🔴 KAYNAK YÖNTEMİ İKİ TÜRLÜ:
// ① Parti 1'in çoğunluğu: mevcut Osmanlı kronolojisinden (zaten TDV/
//    akademik doğrulanmış, production'da yayında) Mısır perspektifine
//    uyarlandı — kaynak alanına hem orijinal TDV slug hem hangi dosyadan
//    alındığı AÇIKÇA yazıldı, gizlenmedi.
// ② Parti 2: doğrudan TDV araştırması ('misir', 'ahmed-pasa-hain',
//    'zahir-el-omer', 'bulak', 'rifaa-et-tahtavi', 'kahire',
//    'darul-kutubil-misriyye', 'efgani-cemaleddin', 'muhammed-abduh',
//    'pamuk' — hepsi HTTP+gövde doğrulandı) + TDV'nin taneçiği kapsamadığı
//    yerlerde (Ali Bey'in bağımsızlık ilanı, Kasrü'l-Aynî'nin kuruluşu,
//    Jumel pamuğu, Antikiteler Servisi, el-Ahrâm) standart akademik kaynak
//    (P.M. Holt, D. Crecelius, Britannica, Khaled Fahmy, E.R.J. Owen,
//    Donald Malcolm Reid, Ami Ayalon) — AÇIKÇA "bulunamadı" damgalı.
// Vikipedi hiçbir maddede tek dayanak olarak kullanılmadı.
//
// Koordinatörün talimatı gereği aynı olaylar Osmanlı kronolojisinde de
// vardır ama ORADA KOPYALANMADI — her madde MISIR AÇISINDAN yeniden
// yazıldı (aynı olay Osmanlı için kayıp, Mısır için kuruluş/dönüm).
//
// ─────────────────────────────────────────────────────────────────────
// §D — İKİ PUAN: onem MISIR için ağırlık, dunya OLAYIN kendisine ait.
//    İyilik/kötülük skalası DEĞİL. Konya/Nizip zaferleri Mısır için
//    onem:5 (aynı olaylar Osmanlı kronolojisinde ağır yenilgi).
// §Y — yer_id: data/yerlesimler*.js'ten BİREBİR eşleştirildi.
// §T — Günü bilinmeyen madde YYYY-01-01/YYYY-MM-01. Tarih uydurulmadı.
// =====================================================================
window.KRONOLOJI_MISIR = [

{ t:"1517-01-22", b:"Ridâniye — Memlük Devleti'nin sonu, Mısır'ın Osmanlı'ya katılışı", tur:"toprak-kazanc", onem:5, dunya:5, kapsam:"dis", etiket:["askeri","hanedan-degisimi","konu-askeri","konu-hanedan"], yer_id:"Kahire", d:"Yavuz Sultan Selim'in ordusu Tomanbay'ın savunma hattını Ridâniye'de yararak Kahire'ye girdi; Memlük Sultanlığı'nın 1250'den beri süren hâkimiyeti sona erdi. Mısır için bu, bir devletin çöküşü değil YENİ bir siyasi çatının başlangıcıydı: Hicaz ve kutsal emanetlerin sorumluluğu, Baharat Yolu'nun denetimi ve İslâm dünyasının hilâfet merkezi olma iddiası artık Kahire üzerinden değil İstanbul üzerinden yürüyecekti.", kaynak:"ridaniye-savasi (TDV) — data/olaylar.js:55'te zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ t:"1517-01-24", b:"Süveyş'in Osmanlı idaresine geçişi — Kızıldeniz kapısı", ic_not_t:"MISIR-SENKRON-0087: olaylar_ek5 Süveyş maddesiyle birlikte 01-22 → 01-24 (nokta kırılması; gün ÇIKARIM, TDV suveys gün vermiyor).", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Süveyş", d:"Ridâniye zaferinin ardından Osmanlı birliklerinin Kahire'ye girmesiyle Kızıldeniz'in kuzey ucundaki Süveyş de Osmanlı idaresine geçti. Memlüklerin Hint Okyanusu'na donanma gönderdiği bu tersane-liman, üç asır boyunca Mısır'ın Kızıldeniz-Hint Okyanusu siyasetinin üssü olacak ve 1869'da açılacak kanalın kuzey ağzını oluşturacaktı.", kaynak:"suveys (TDV) — data/olaylar_ek5.js:92'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ t:"1517-01-24", b:"Osmanlı birliklerinin Kahire'ye ilk girişi", tur:"siyaset", onem:4, dunya:3, kapsam:"ic", etiket:["idari","konu-siyasi","konu-idari"], yer_id:"Kahire", d:"Ridâniye zaferinin ertesi günü Osmanlı birlikleri Kahire'ye yerleşti, ama şehrin tam kontrolü henüz sağlanmamıştı: Tomanbay Yukarı Mısır'a çekilmiş, direniş kırılmamıştı. Mısır'ın fethi tek bir günde değil, haftalara yayılan bir süreçte tamamlanacaktı — yeni idarenin ilk günlerindeki bu kırılganlık, kentin sonraki üç asır boyunca taşıyacağı çok merkezli (paşa+memlûk beyleri) idare biçiminin ilk işaretiydi.", kaynak:"selim-i (TDV) — data/olaylar_ek5.js:165'te zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ t:"1517-02-08", b:"Canbirdi Gazâlî'nin Osmanlı hizmetine alınması — Memlük kadrolarının sisteme dâhili", tur:"idari", onem:3, dunya:2, kapsam:"ic", etiket:["idari","konu-idari"], yer_id:"Kahire", d:"Ridâniye sonrası aman dileyen eski Memlük emîri Canbirdi Gazâlî, Yavuz tarafından hizmete kabul edildi. Bu tercih, Osmanlı'nın Mısır ve Suriye'de eski Memlük askerî-idarî kadrolarını tasfiye etmek yerine yeni yönetime dâhil etme siyasetinin ilk örneğiydi — Mısır'ın sonraki üç asır boyunca hem Osmanlı paşasının hem yerli (Kölemen kökenli) beylerin birlikte yönettiği ikili idare yapısının tohumu burada atıldı.", kaynak:"canbirdi-gazali (TDV) — data/olaylar_ek5.js:167'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-eyaleti"], t:"1517-05-19", b:"İskenderiye'nin teslimi — Mısır fethinin tamamlanması", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"İskenderiye", d:"Ridâniye'den dört ay, Tomanbay'ın idamından otuz altı gün sonra İskenderiye, Reşîd ve Dimyat gibi delta limanlarıyla birlikte Osmanlı idaresine geçti. Mısır'ın Akdeniz'e açılan bu büyük limanının Kahire'nin düşüşünden aylar sonra ve karadan değil denizden teslim alınması, fethin bölge bölge tamamlandığını gösterir; İskenderiye bundan sonra İstanbul-Kahire hattının hayatî limanı olacaktı.", kaynak:"iskenderiye (TDV) — data/olaylar_ek5.js:172'de zaten doğrulanmış, Mısır perspektifine uyarlandı", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1517-07-06", b:"Hicaz'ın Kahire üzerinden savaşsız katılışı", tur:"siyaset", onem:4, dunya:3, kapsam:"dis", etiket:["diplomasi","konu-siyasi","konu-diplomasi"], yer_id:"Mekke", d:"Mekke Emîri Şerîf Berekât'ın oğlu Ebû Nümeyy, babasının hediyeleri ve şehrin anahtarlarıyla Kahire'de padişahın huzuruna kabul edildi; Hicaz tek kurşun atılmadan Osmanlı'ya bağlandı. Bundan böyle Haremeyn'in idaresi ve hac güvenliği fiilen Kahire üzerinden yürütülecek, Mısır valiliği bu sorumluluk yüzünden imparatorluğun en itibarlı valiliklerinden biri olacaktı — üç asır sonra Kavalalı Mehmed Ali'nin gücünün de temel kaynaklarından biri bu olacaktır.", kaynak:"mekke (TDV) — data/olaylar_ek5.js:173'te zaten doğrulanmış, Mısır perspektifine uyarlandı", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1524-01-01", b:"Hâin Ahmed Paşa'nın kendini sultan ilan etmesi ve isyanının bastırılması", gun:"H. 930 / 1524 — yıl hassasiyeti · TDV `ahmed-pasa-hain`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"isyan", onem:5, dunya:3, kapsam:"ic", etiket:["isyan","idari","konu-idari","konu-isyan"], yer_id:"Kahire", d:"19 Ağustos 1523'te Mısır beylerbeyiliğine tayin edilen Ahmed Paşa, vezîriazamlık makamını alamamanın hıncıyla Ocak 1524'te 'el-Melikü'l-mansûr Sultan Ahmed' unvanıyla bağımsızlığını ilan etti, kendi adına para bastırıp hutbe okuttu. Kendi seçtiği veziri Kadızâde Mehmed Bey'in başını çektiği bir suikast girişiminde hamamda yaralanıp kaçtı, Benî Bekir aşiretine sığındıysa da yakalanıp kellesi vuruldu (930/1524). Bu isyan Mısır'ın Osmanlı'ya katılışından yalnız yedi yıl sonra, eyaletin merkeze ne kadar gevşek bağlı kalabileceğini gösteren ilk ciddi sınavdı.", kaynak:"ahmed-pasa-hain (TDV)", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1525-01-01", b:"İbrahim Paşa Kanunnâmesi — Mısır'ın ikili idare çerçevesinin kurulması", gun:"1525 — yıl hassasiyeti · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"idari", onem:5, dunya:2, kapsam:"ic", etiket:["idari","islahat","konu-idari","konu-islahat","konu-hukuk"], yer_id:"Kahire", d:"Ahmed Paşa isyanının açığa çıkardığı zaaflardan sonra Vezîriâzam Makbul İbrahim Paşa'nın hazırlattığı Kanunnâme, eyaletin idari çerçevesini belirledi: taşra kâşiflere ve şeyhülaraplara bırakılırken, Kahire'de gönüllü, çerâkise, müstahfızân, azeb ve çavuş gibi altı asker cemaati tanımlandı. Bu düzenleme, paşa (beylerbeyi) ile kölemen kökenli asker-idareci sınıfının sonraki üç asır sürecek ortak yönetiminin hukuki temelini attı.", kaynak:"misir (TDV, Osmanlı Dönemi bölümü)", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1711-01-01", b:"Büyük Fitne — Kāsımiyye-Zülfikāriyye çatışması ve beylerbeyinin azli", gun:"1711 — yıl hassasiyeti · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"isyan", onem:4, dunya:1, kapsam:"ic", etiket:["isyan","siyaset","konu-siyasi","konu-isyan"], yer_id:"Kahire", d:"Azebân ile müstahfızân asker cemaatleri arasında çıkan bir anlaşmazlık, Mısır'ın iki büyük kölemen fırkasını (Kāsımiyye ve Zülfikāriyye) yeniden karşı karşıya getirdi; çatışma öylesine büyüdü ki Mısır Beylerbeyi Halil Paşa görevden alındı ve isyanı başlatanlar öldürüldü. Bu olay, merkezi Osmanlı idaresinin artık Mısır'daki fırka çatışmalarını önceden engelleyecek gücü kalmadığının ilk açık göstergesiydi.", kaynak:"misir (TDV, Osmanlı Dönemi bölümü)", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1723-01-01", b:"Kāsımiyye fırkasından Çerkez Mehmed'in şeyhülbeledliğe gelmesi", gun:"1723 — yıl hassasiyeti · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:3, dunya:1, kapsam:"ic", etiket:["siyaset","konu-siyasi","konu-din"], yer_id:"Kahire", d:"Kāsımiyye fırkasından Çerkez Mehmed şeyhülbeledlik makamına ulaşınca rakip Zülfikāriyye liderlerini bertaraf edip Mısır'ın fiilî idaresini tek başına ele geçirdi. Şeyhülbeledlik unvanı bu tarihten itibaren, resmî beylerbeyinin gölgesinde ama ondan fiilen daha etkili bir iktidar makamı olarak Mısır siyasetinin merkezine yerleşti.", kaynak:"misir (TDV, Osmanlı Dönemi bölümü)", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1729-01-01", b:"Çerkez Mehmed'in ölümü — Kazdağlı hizbinin yükselişinin başlaması", gun:"1729 — yıl hassasiyeti · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:3, dunya:1, kapsam:"ic", etiket:["siyaset","konu-siyasi","konu-kisiler"], yer_id:"Kahire", d:"Altı yıl fiilî iktidarı elinde tutan Çerkez Mehmed'in ölümüyle Kāsımiyye fırkasının gücü sarsıldı; boşalan alanda asker sınıfından Kazdağlı İbrahim Kethüda liderliğinde yeni bir grup (Kazdağlılar) yükselmeye başladı. Kazdağlılar önümüzdeki kırk yıl içinde yalnız bir fırka değil, Mısır'ın fiilî hanedanı hâline gelecekti.", kaynak:"misir (TDV, Osmanlı Dönemi bölümü)", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1760-01-01", b:"Kazdağlıların Bulutkapan Ali Bey'i şeyhülbeledliğe ataması", gun:"H. 1173 / 1760 — yıl hassasiyeti · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:4, dunya:2, kapsam:"ic", etiket:["siyaset","konu-siyasi","konu-din"], yer_id:"Kahire", d:"Kazdağlı fırkası, 1173 (1760) yılında kendi yetiştirmesi olan Kafkas kökenli kölemen Bulutkapan Ali Bey'i şeyhülbeledlik makamına getirdi. Ali Bey kısa sürede rakiplerine üstün gelip Mısır'daki bütün önemli mevkilere kendi adamlarını yerleştirdi — bu atama, Mısır'ın kırk yıl içinde Osmanlı'ya karşı bağımsızlık girişimine kadar uzanacak sürecin ilk adımıydı.", kaynak:"misir (TDV, Osmanlı Dönemi bölümü)", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1768-01-01", b:"Ali Bey'in Ebu'z-Zeheb aracılığıyla rakiplerini tasfiyesi", gun:"1768 — yıl hassasiyeti · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"siyaset", onem:3, dunya:1, kapsam:"ic", etiket:["siyaset","konu-siyasi"], yer_id:"Kahire", d:"Ali Bey, kendisi için tehlike arz eden beyleri en güvendiği memlükü Ebu'z-Zeheb Muhammed Bey aracılığıyla ortadan kaldırdı ve kendi yetiştirmesi kölemenleri ümerâ (bey) sınıfına dahil etti. Bu tasfiye Ali Bey'in gücünü zirveye taşıdı, ama aynı zamanda Ebu'z-Zeheb'i de birkaç yıl sonra kendisine ihanet edecek kadar güçlü bir konuma getirdi.", kaynak:"misir (TDV, Osmanlı Dönemi bölümü)", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1769-06-01", b:"Ali Bey'in Osmanlı'ya bağlılığı fiilen reddetmesi", gun:"Haziran 1769? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` ay/gün vermiyor · ⚠️ -06-01 yıl ortası YER TUTUCU olabilir", tur:"isyan", onem:5, dunya:3, kapsam:"ic", etiket:["isyan","siyaset","konu-siyasi","konu-isyan"], yer_id:"Kahire", d:"Ali Bey, İstanbul'a gönderilen yıllık haracı kesti ve sikke ile hutbede kendi adını öne çıkararak Osmanlı merkezine bağlılığını fiilen reddetti. Bu adım, iki buçuk asırlık ikili idare geleneğinin ilk kez açıkça bir bağımsızlık girişimine dönüştüğü andır.", kaynak:"bulunamadı (TDV bu tanecikte sessiz) — dayanak: standart akademik kaynak, P. M. Holt, Egypt and the Fertile Crescent 1516-1922; D. Crecelius, The Roots of Modern Egypt", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1770-11-01", b:"Ali Bey'in Zâhir el-Ömer ile ittifak kurup Suriye seferini başlatması", gun:"Kasım 1770? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI · TDV `zahir-el-omer`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` … ay/gün vermiyor", tur:"savas", onem:4, dunya:2, kapsam:"dis", etiket:["askeri","ittifak","konu-askeri","konu-diplomasi"], d:"Ali Bey, Filistin'in kuzeyinde fiilen bağımsız hareket eden aşiret reisi Zâhir el-Ömer ile ittifak kurarak Osmanlı valisine karşı ortak bir Suriye seferi başlattı. İki müttefik güney Filistin'i ele geçirip Şam üzerine yürüdü — Mısır'ın kölemen ordusu ilk kez kendi sınırlarının bu kadar ötesinde, doğrudan bir Osmanlı valiliğini hedef alan bir sefere çıkıyordu.", kaynak:"zahir-el-omer (TDV, ittifaktan bahsediyor) + standart akademik kaynak (P. M. Holt) — ay/gün TDV'de yok", yer_id:"Kahire", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1771-06-01", b:"Şam'ın Ali Bey/Ebu'z-Zeheb kuvvetlerince ele geçirilmesi", gun:"Haziran 1771? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI · TDV `zahir-el-omer`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` … ay/gün vermiyor · ⚠️ -06-01 yıl ortası YER TUTUCU olabilir", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Şam", d:"Ebu'z-Zeheb Muhammed Bey kumandasındaki Mısır ordusu, Zâhir el-Ömer'in kuvvetleriyle birlikte Şam Valisi Osman Paşa el-Kürci'yi yenilgiye uğratıp Haziran 1771'de şehri ele geçirdi. Bir kölemen beyinin ordusu tarihinde ilk kez bir Osmanlı eyalet merkezini işgal ediyordu — ama bu zafer on gün bile sürmeyecek bir zirve olacaktı.", kaynak:"bulunamadı — TDV zahir-el-omer maddesi olaydan dolaylı bahsediyor, gün TDV'de yok, standart akademik kaynak (P. M. Holt, Egypt and the Fertile Crescent 1516-1922)", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1771-06-11", b:"Ebu'z-Zeheb'in ihaneti — Şam'dan Mısır'a ani dönüşü", tur:"siyaset", onem:5, dunya:3, kapsam:"ic", etiket:["siyaset","konu-siyasi"], d:"Şam alındıktan yaklaşık on gün sonra, bir Osmanlı ajanının Ebu'z-Zeheb ile Ali Bey arasına soktuğu güvensizlikten yararlanılarak Ebu'z-Zeheb savaşı sürdürmeyi reddetti; fethedilen toprakları geride bırakıp ordusuyla aniden Mısır'a döndü. Bu geri çekiliş yalnız Suriye seferini bitirmekle kalmadı, Ali Bey'in kendi en güvendiği adamı tarafından bir yıl içinde tahtından indirilmesinin de ilk adımı oldu.", kaynak:"bulunamadı — TDV'de doğrudan yok, standart akademik kaynak (P. M. Holt; D. Crecelius, The Roots of Modern Egypt)", yer_id:"Şam", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1772-04-01", b:"Ebu'z-Zeheb'in Ali Bey'i Kahire'den kovması", gun:"Nisan 1772 — ay hassasiyeti · ay TDV'de var, gün yok (`zahir-el-omer`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` …)", tur:"siyaset", onem:5, dunya:2, kapsam:"ic", etiket:["siyaset","konu-siyasi"], yer_id:"Kahire", d:"Mısır'a dönen Ebu'z-Zeheb, eski efendisi Ali Bey'e karşı döndü ve onu Kahire'den kovarak fiilî iktidarı ele geçirdi. Ali Bey, bir zamanlar himayesine aldığı müttefiki Zâhir el-Ömer'in yanına, Akkâ'ya sığınmak zorunda kaldı — kölemen sisteminin klasik döngüsü (azatlı kölenin efendisini devirmesi) burada bir kez daha tekerrür ediyordu.", kaynak:"zahir-el-omer (TDV) + standart akademik kaynak (ay/gün: P. M. Holt) — TDV yalnız sonucu veriyor", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1773-04-01", b:"Sâlihiye Muharebesi — Ali Bey'in Ebu'z-Zeheb tarafından bozguna uğratılması", gun:"Nisan 1773? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI · TDV `zahir-el-omer`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` … ay/gün vermiyor", tur:"savas", onem:5, dunya:3, kapsam:"ic", etiket:["askeri","konu-askeri"], d:"Zâhir el-Ömer'in desteğiyle Mısır'a dönüp iktidarını geri almaya çalışan Ali Bey, Ebu'z-Zeheb'in kuvvetleriyle Sâlihiye'de karşılaştı ve ağır bir yenilgiye uğrayıp yaralı olarak esir alındı. Üç asırlık kölemen beyliğinin en cüretkâr bağımsızlık girişimi, kurucusunun kendi yetiştirdiği adamı eliyle burada fiilen sona eriyordu.", kaynak:"zahir-el-omer (TDV) + Encyclopaedia Britannica ('ʿAlī Bey' maddesi) — gün TDV'de yok, ay Britannica'dan", yer_id:"Sâlihiyye", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1773-05-08", b:"Ali Bey el-Kebir'in ölümü", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic", etiket:["olum","konu-kisiler","konu-hanedan"], d:"Sâlihiye'de aldığı yaralar sonucu Ali Bey birkaç gün içinde öldü; Mısır'ın fiilî hâkimiyeti tartışmasız biçimde Ebu'z-Zeheb'e geçti. Osmanlı merkezi açısından bu ölüm bir rahatlamaydı, ama esas yapısal sorun — kölemen beylerinin merkezi otoriteyi fiilen ikame etmesi — çözülmemiş, yalnızca yeni bir isim altında sürecekti.", kaynak:"bulunamadı — TDV net tarih vermiyor, tarih: Encyclopaedia Britannica ('ʿAlī Bey' maddesi, 8 Mayıs 1773)", yer_id:"Kahire", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1775-06-01", b:"Ebu'z-Zeheb'in Zâhir el-Ömer'e karşı seferde ölümü", gun:"Rebîülâhir 1189 / Haziran 1775 — ay hassasiyeti · ay TDV'de var, gün yok (`misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan`)", tur:"hukumdar", onem:3, dunya:2, kapsam:"dis", etiket:["olum","askeri","konu-askeri","konu-kisiler","konu-hanedan"], d:"Mısır'ın tek hâkimi hâline gelen Ebu'z-Zeheb, eski müttefiki Zâhir el-Ömer'e karşı bu kez Osmanlı adına bir Suriye seferine çıktı, ama sefer sırasında Rebîülâhir 1189 (Haziran 1775) tarihinde ansızın öldü. Arkasında kendisi kadar güçlü bir halef bırakmadığı için ölümü Mısır'ı yeni bir fırka çatışmasına sürükledi.", kaynak:"misir (TDV, Osmanlı Dönemi bölümü — 'Rebîülâhir 1189 / Haziran 1775')", yer_id:"Akkâ", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1775-01-01", b:"Ebu'z-Zeheb sonrası Muhammediyye-Aleviyye fırka mücadelesi", gun:"1775 — yıl hassasiyeti · eski t 1775-07-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan`) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"siyaset", onem:3, dunya:1, kapsam:"ic", etiket:["siyaset","konu-siyasi"], yer_id:"Kahire", d:"Ebu'z-Zeheb'in ölümüyle boşalan iktidar, kendi yetiştirmesi kölemenler arasında paylaşılamadı: İbrahim Bey ve Murad Bey'in başında olduğu Muhammediyye fırkası ile İsmail Bey'in Aleviyye fırkası, sonraki yirmi yıl boyunca Mısır'ı ortak-şeyhülbeledlik ile açık çatışma arasında gidip gelen bir istikrarsızlığa sürükledi.", kaynak:"misir (TDV, Osmanlı Dönemi bölümü)", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1786-06-09", b:"Cezayirli Gazi Hasan Paşa'nın Mısır'a gönderilmesi — merkezin son ciddi müdahalesi", gun:"11 Şâban 1200 / 9 Haziran 1786 (TDV `misir`)", tur:"siyaset", onem:4, dunya:2, kapsam:"dis", etiket:["idari","askeri","konu-askeri","konu-siyasi","konu-idari"], yer_id:"Kahire", d:"Kölemen beylerinin fiilen bağımsız davranışından rahatsız olan Bâbıâli, deniz yoluyla Cezayirli Gazi Hasan Paşa'yı Mısır'a gönderdi; Hasan Paşa Kahire'de kontrolü sağladıysa da Murad ve İbrahim beyler Yukarı Mısır'a (Saîd) çekilip oradaki kölemen beyleriyle birleşerek yeniden ayaklandılar. Bâbıâli bu fiilî bölünmeyi, on iki yıl sonra Fransızların Mısır'a girişine kadar kabullenmek zorunda kaldı — Osmanlı merkezinin kölemen sorununu askerî yoldan çözme girişiminin son ciddi denemesiydi.", kaynak:"misir (TDV, Osmanlı Dönemi bölümü) · misir (TDV: \"Cezayirli Gazi Hasan Paşa'yı deniz yoluyla Mısır'a gönderdi (11 Şâban 1200 / 9 Haziran 1786)\")", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1798-07-01", b:"Napolyon'un Mısır'ı işgali — Avrupa'nın Osmanlı çekirdek toprağına ilk doğrudan saldırısı", gun:"Temmuz 1798 — ay hassasiyeti (TDV `misir`: \"Fransızlar'ın Temmuz 1798'deki işgali\") · ⚠️ TDV `iskenderiye` İskenderiye'nin alınışını \"30 Haziran 1798\" veriyor — TDV içi ay farkı, t değiştirilmedi (çekirdek olaylar.js ile aynı gün)", tur:"savas", onem:5, dunya:5, kapsam:"dis", etiket:["askeri","toprak-kayip","konu-askeri"], yer_id:"İskenderiye", d:"General Bonapart'ın ordusu İskenderiye'ye çıkarak Mısır'ı işgal etti; İngiltere'nin Hindistan yolunu hedefleyen bu sefer bir Avrupa gücünün Osmanlı'nın en zengin eyaletlerinden birine ilk doğrudan askerî saldırısıydı. Mısır için işgal üç yıl sürecek bir kesinti oldu, ama asıl kalıcı sonucu geride bıraktığı iktidar boşluğuydu: bu boşlukta Kavalalı Mehmed Ali Paşa'nın yükselişi ve Mısır'ın fiilen ayrı bir devlete dönüşme süreci başlayacaktı.", kaynak:"misir (TDV) — data/olaylar.js:128'de zaten doğrulanmış, Mısır perspektifine uyarlandı", kunye:["misir-eyaleti"] },

{ t:"1798-07-21", b:"Ehramlar (İmbâbe) Muharebesi — Kölemen süvarisinin dağılması", tur:"savas", onem:5, dunya:3, kapsam:"dis", etiket:["askeri","toprak-kayip","konu-askeri"], yer_id:"", d:"Napolyon İskenderiye'den Nil boyunca güneye yürüyüp 21 Temmuz 1798'de Giza karşısındaki İmbâbe'de Murad Bey'in Kölemen süvarisini karşıladı; kare düzenindeki Fransız piyadesi süvari hücumlarını kırdı ve Kölemen ordusu dağıldı. Kahire iki gün sonra direnişsiz teslim oldu — üç asırlık Kölemen askerî üstünlüğünün Avrupa'nın modern piyade taktikleri karşısında ne kadar kırılgan olduğunu gösteren bu yenilgi, Mısır'ın sonraki yüzyılda tamamen yeni bir askerî model (Mehmed Ali'nin nizamî ordusu) kurmasının ilk dersiydi.", ic_not_d:"Muharebe sahası haritadaki yerleşim kayıtlarıyla birebir eşleşmediği için yer_id boş bırakıldı.", kaynak:"data/olaylar_ek9.js:382-383'te zaten doğrulanmış (standart tarih), Mısır perspektifine uyarlandı", yer_kon:[30.075,31.191], kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1798-09-09", b:"Osmanlı'nın Fransa'ya savaş ilanı — İngiltere ve Rusya ile ittifak", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", etiket:["ittifak","konu-diplomasi"], yer_id:"İstanbul", d:"Mısır'ın işgali üzerine Bâbıâli, iki buçuk asırlık geleneksel Fransız dostluğunu bozarak Fransa'ya savaş ilân etti ve tarihinde ilk defa Rusya ile ittifak yaptı; ardından İngiltere ile de anlaştı. Mısır'ı geri almak amacıyla kurulan bu geçici ittifak ağı, birkaç yıl sonra aynı iki gücün (İngiltere ve Rusya) Mısır meselesinde yeniden karşı karşıya gelmesinin de zeminini hazırladı.", kaynak:"yusuf-ziya-pasa (TDV, ay: Eylül 1798) · gün: Azmi Süslü, Osmanlı-Fransız Diplomatik İlişkileri 1798-1807, Belleten XLVII/185 (1983): 9 Eylülde Fransa'ya resmen savaş ilânı", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1799-05-20", b:"Napolyon'un Akkâ'da durdurulması — Mısır işgalinin en uç noktası", tur:"savas", onem:3, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Akkâ", d:"Mısır'dan Suriye'ye ilerleyen Napolyon Akkâ'yı iki ay kuşattı; Cezzâr Ahmed Paşa'nın savunması ve İngiliz donanmasının desteğiyle kuşatma kırıldı ve Fransız ordusu Mısır'a çekilmek zorunda kaldı. Mısır işgali için bu, doğuya (Suriye üzerinden Hindistan'a) genişleme hayalinin sona erdiği andı; Napolyon'un kalan enerjisi artık yalnız Mısır'ı elde tutmaya harcanacaktı.", kaynak:"cezzar-ahmed-pasa (TDV) — data/olaylar_ek5.js:306'da zaten doğrulanmış, Mısır perspektifine uyarlandı", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1801-03-08", b:"Kavalalı Mehmed Ali Mısır'a çıktı", tur:"siyaset", onem:3, dunya:1, kapsam:"dis", etiket:["askeri","konu-askeri","konu-siyasi"], d:"Fransız işgalindeki Mısır'ı geri almak üzere gönderilen Osmanlı ordusu içinde Kavala'dan derlenen bir Arnavut gönüllü birliği de vardı; otuzlu yaşlarındaki Mehmed Ali bu birliğin ikinci komutanıydı. Mısır'a bir vali değil bir bölük zabiti olarak ayak basan bu adam, dört yıl içinde ülkenin fiilî hâkimi, kırk yıl içinde de Osmanlı'yı iki kez yıkılma eşiğine getirecek bir hanedanın kurucusu olacaktı.", kaynak:"kavalali-mehmed-ali-pasa (TDV) — data/olaylar_ek4.js:20'de zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Ebûkîr", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1801-10-09", b:"Mısır'ın Fransızlardan tahliyesi", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Kahire", d:"Osmanlı ve İngiliz kuvvetlerinin ortak harekâtıyla önce Kahire, ardından İskenderiye teslim alındı; üç yıllık Fransız işgali sona erdi. Mısır kâğıt üzerinde Osmanlı idaresine döndü, ama Kölemen beyleri ile Arnavut birlikleri arasındaki hâkimiyet mücadelesi ülkeyi kaosa sürükledi — bu boşluk birkaç yıl içinde, Kavala'dan gelen genç bir Arnavut subayının (Mehmed Ali) yükselişine zemin hazırlayacaktı.", kaynak:"misir (TDV) — data/olaylar_ek5.js:308'de zaten doğrulanmış, Mısır perspektifine uyarlandı", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1802-06-25", b:"Paris Antlaşması — Fransa ile barışın kurulması", tur:"antlasma", onem:2, dunya:3, kapsam:"dis", etiket:["antlasma","konu-diplomasi"], d:"Mısır'ın tahliyesinden sonra Osmanlı-Fransa savaş hâli resmen sona erdi ve eski kapitülasyonlar yenilendi. Mısır açısından bu, işgal döneminin diplomatik olarak kapandığı, ama iç istikrarsızlığın (Kölemen-Arnavut-Osmanlı valisi üçlü mücadelesi) sürdüğü bir dönemin başlangıcıydı.", kaynak:"misir (TDV) — data/olaylar_ek5.js:309'da zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Paris", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1803-01-01", b:"Arnavut askerlerinin valiyi devirmesi — üçlü iktidar mücadelesi", gun:"1803 — yıl hassasiyeti · eski t 1803-05-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `husrev-pasa-koca`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"isyan", onem:3, dunya:1, kapsam:"ic", etiket:["isyan","konu-isyan"], yer_id:"Kahire", d:"Ulûfeleri ödenmeyen Arnavut birlikleri ayaklanıp vali Hüsrev Paşa'yı kaleden kaçmaya zorladı. Fransızların çekilmesiyle doğan boşlukta Kölemen beyleri, Arnavut ocağı ve Bâbıâli'nin atadığı valiler üç köşeli bir mücadeleye girdi; Mehmed Ali bu üçgende dengeleri kurarak öne çıkmaya başladı — Mısır'ın modern tarihindeki en kritik iktidar boşluğu bu yıllarda dolduruluyordu.", kaynak:"husrev-pasa-koca (TDV) — data/olaylar_ek4.js:24'te zaten doğrulanmış, Mısır perspektifine uyarlandı", kunye:["misir-eyaleti"] },

{ taraflar:["misir-eyaleti"], t:"1805-05-01", b:"Kahire ulemâsının Mehmed Ali'yi vali ilan etmesi", gun:"Mayıs 1805 — ay hassasiyeti (TDV `hursid-ahmed-pasa`, Özkoç 2013, Ertuğrul 2018 gün vermiyor — bkz. d)", tur:"siyaset", onem:5, dunya:2, kapsam:"ic", etiket:["isyan","konu-siyasi","konu-isyan","konu-din"], yer_id:"Kahire", d:"Vergi baskısından bunalan Kahire esnafı ve ulemâsı, nakîbüleşraf Ömer Mekrem'in önderliğinde ayaklanıp vali Hurşid Paşa'yı tanımadıklarını bildirdi ve Mehmed Ali'yi valilik makamına oturttu. Osmanlı tarihinde bir valinin halk tarafından fiilen seçilmesi eşine az rastlanan bir olaydır ve Mısır'ın kendi kaderini kısmen kendi eliyle belirlediği bir dönüm noktasıdır — hanedanın gerçek başlangıcı burasıdır. ⚠️ GÜN KAYNAKSIZ (EKOKUMA-SIMGE-0070, 20 Eylül 2026): bu kayıt önce 13 Mayıs 1805 diyordu ve günü TDV `kavalali-mehmed-ali-pasa`ya dayandırıyordu; o gövdede 13 Mayıs YOK. Okunan üç kaynağın üçü de AY veriyor: TDV `hursid-ahmed-pasa` (Mayıs 1805 olayları, verdiği tek gün 10 Mayıs 1805 — Mehmed Ali'ye Cidde valiliği hil'atinin giydirilmesi), Özkoç 2013 (\"1805 yılının Mayıs ayına gelindiğinde\"), Ertuğrul 2018 (\"Mayıs 1805'te Kahire'ye bir atama fermanı gönderildi. Aynı ay, ulema ve Kahire'nin ileri gelenleri … talepte bulundular\"). ⇒ Hassasiyet AYA düşürüldü. Ayrıca kaynaklar olayı 'ulemânın ilanı' diye değil, ulemâ-eşraf-halkın Hurşid Paşa'nın azlini İSTEMESİ ve Mehmed Ali'nin kendini vali ilan etmesi diye anlatıyor; Bâbıâli oldubittiyi 3 Temmuz 1805'te tanıdı (ayrı madde).", kaynak:"TDV hursid-ahmed-pasa (gövde okundu — 10 Mayıs 1805 hil'at, ardından \"Mısır ulemâsı ve şeyhleri Hurşid Paşa'dan görevini terketmesini istediler\"; GÜN vermiyor) · Özge Özkoç, \"İmparatorluk İktidarının Sınırında Osmanlı Mısırı: Mehmet Ali Paşa Döneminden Hıdivliğe\", doktora tezi, Ankara Üniv. SBE, 2013, s. 66 (tam metin okundu) · Arzu Ertuğrul, \"Kavalalı Mehmet Ali Paşa Dönemi'nde Mısır'da Edebi ve Kültürel Hayat (1805-1848)\", yüksek lisans tezi, İstanbul Üniv. SBE, 2018, s. 52 (tam metin okundu) — ÜÇÜNDE DE gün yok, '13 Mayıs' bulunamadı", kunye:["misir-eyaleti"] },

{ t:"1805-07-03", b:"Bâbıâli'nin Mehmed Ali'ye vezirlik rütbesiyle valilik fermanı", tur:"idari", onem:4, dunya:2, kapsam:"dis", etiket:["idari","konu-idari"], yer_id:"Kahire", d:"Mısır'da kendi adayını tutacak gücü olmayan Bâbıâli, oldubittiyi kabul edip Mehmed Ali'ye resmî valilik fermanı gönderdi. Bu tarihten itibaren Mısır hukuken Osmanlı toprağı, fiilen Kavalalı hanedanının ülkesi olacaktı — resmî meşruiyetle fiilî bağımsızlık arasındaki bu ikilik, sonraki otuz beş yılın bütün krizlerinin (1831, 1839) kökeninde duracaktı.", kaynak:"kavalali-mehmed-ali-pasa (TDV) — data/olaylar_ek4.js:32'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1807-03-17", b:"İngiliz Fraser seferinin İskenderiye'ye çıkması", tur:"savas", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"İskenderiye", d:"Osmanlı'nın Fransa'ya yaklaşmasına karşılık İngiltere Mısır'a bir çıkarma kuvveti gönderdi. Mehmed Ali o sırada Yukarı Mısır'da Kölemenlerle uğraşıyordu; hızla dönerek savunmayı örgütledi — bu, henüz yeni valiliğe gelmiş bir ismin ilk büyük dış tehdit sınavıydı.", kaynak:"misir (TDV) — data/olaylar_ek4.js:37'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1807-04-21", b:"Reşid bozgunu — İngilizlerin püskürtülmesi", tur:"savas", onem:4, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], d:"Reşid kasabasına giren İngiliz kolu sokak çarpışmalarında ağır kayıp verdi; Eylül'de kuvvetler Mısır'ı tamamen boşalttı. Bu zafer Mehmed Ali'nin hem Mısır'daki hem İstanbul'daki itibarını sağlamlaştırdı ve onu Kölemen beylerine karşı nihai hamlesi için gereken meşruiyete kavuşturdu.", kaynak:"kavalali-mehmed-ali-pasa (TDV) — data/olaylar_ek4.js:41'de zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Reşîd (Rosetta)" },

{ taraflar:["misir-kavalali"], t:"1811-03-01", b:"Kal'a Vakası — Kölemen beylerinin tasfiyesi", gun:"1 Mart 1811 — GERÇEK GÜN (TDV `kavalali-mehmed-ali-pasa`: \"1 Mart 1811'de düzenlediği büyük davette\")", tur:"siyaset", onem:5, dunya:3, kapsam:"ic", etiket:["siyaset","konu-siyasi"], yer_id:"Kahire", d:"Hicaz seferi için düzenlenen tören alayına davet edilen Kölemen beyleri, Kahire Kalesi'nin dar geçidinde kapana kısılarak ortadan kaldırıldı. Beş yüzyıllık Kölemen nüfuzu böylece son buldu ve Mısır'da Mehmed Ali'nin önünde hiçbir rakip kalmadı — bu, Mısır'ın 1250'den beri süregelen Memlük-kökenli iktidar paylaşımı geleneğinin kesin sonu ve tek merkezli, modern anlamda 'devletleşmiş' bir Mısır'ın başlangıcıdır.", kaynak:"memluk (TDV) — data/olaylar_ek4.js:45'te zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1811-09-03", b:"Hicaz seferinin başlaması — Tosun Paşa Yenbu'ya çıktı", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Yenbu", d:"1803'ten beri Suûdî-Vehhâbî idaresindeki Haremeyn'i geri almak II. Mahmud'un en büyük meşruiyet meselesiydi; Bâbıâli'nin gücü yetmeyince görev Mısır valisine verildi. Mehmed Ali on altı yaşındaki oğlu Tosun'u ordunun başında gönderdi — Mısır bu seferle ilk kez kendi sınırlarının çok ötesinde, imparatorluk çapında bir askerî güç olarak sahneye çıkıyordu.", kaynak:"vehhabilik (TDV) — data/olaylar_ek4.js:51'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1812-12-03", b:"Medine'nin geri alınması", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Medine", d:"Uzun bir kuşatmanın ardından Medine teslim oldu; Hz. Peygamber'in şehrinin geri alınışı İstanbul'da top şenlikleriyle kutlandı ve Mehmed Ali'ye mükâfat olarak Cidde valiliği de verildi — Mısır'ın Hicaz üzerindeki nüfuzu artık yalnız askerî değil idari bir gerçeklik hâline geliyordu.", kaynak:"medine (TDV) — data/olaylar_ek4.js:59'da zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1813-01-23", b:"Mekke'nin geri alınması — hac yolunun açılması", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri","konu-din"], yer_id:"Mekke", d:"Mekke'ye giren Mısır kuvvetleri Kâbe'de yeniden Osmanlı padişahı adına hutbe okuttu; on yıldır kesintiye uğrayan hac kafileleri tekrar yola çıkabildi. Hicaz Osmanlı hâkimiyetine dönmüş olsa da idaresi fiilen Kahire'den yürütülüyordu — Mısır'ın nüfuz alanı bu tarihten itibaren kendi coğrafi sınırlarını çok aşan bir imparatorluk içi imparatorluğa dönüşüyordu.", kaynak:"mekke (TDV) — data/olaylar_ek4.js:63'te zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1813-05-02", b:"Tâif'in geri alınması — Hicaz seferinin tamamlanışı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], d:"Medine ve Mekke'nin ardından Tosun Paşa kumandasındaki Mısır ordusu Tâif'i de Vehhâbîlerden geri aldı; on yıl süren Suûd hâkimiyeti sona erdi. Hicaz'ın üç kutsal merkezinin tamamı yeniden Mısır ordusunun denetimine girmişti.", kaynak:"taif (TDV) — data/olaylar_ek4.js:68'de zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Tâif" },

{ taraflar:["misir-kavalali"], t:"1815-01-20", b:"Bisel Muharebesi — Suûdî kuvvetlerinin bozguna uğraması", tur:"savas", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", d:"Bizzat idareyi ele alan Mehmed Ali'nin kuvvetleri meydan savaşında Suûdîleri ağır bir yenilgiye uğrattı; ağır yenilgi alan Suûdîler iç bölgelere çekildi. Mütareke kalıcı olmayacak, iki yıl sonra harekât Necid'in kalbine taşınacaktı.", kaynak:"vehhabilik (TDV) — data/olaylar_ek4.js:76'da zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1818-09-09", b:"Dir'iye'nin düşüşü — İlk Suûdî Devleti'nin sonu", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", etiket:["askeri","konu-askeri"], d:"İbrâhim Paşa'nın altı ay süren kuşatmasının ardından Dir'iye teslim oldu ve yıkıldı; Emîr Abdullah b. Suûd İstanbul'da idam edildi. Mısır ordusu Arabistan'ın içlerine bu kadar derine ilk defa ulaşmıştı — Necid garnizonu 1824'e kadar kalacak, sefer Mısır'ın imparatorluk çapındaki askerî prestijinin doruk noktalarından biri olacaktı.", kaynak:"diriye (TDV) — data/olaylar_ek4.js:84'te zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Dir'iye (Necid)" },

{ taraflar:["misir-kavalali"], t:"1820-07-20", b:"Sudan seferinin başlaması", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], d:"Mehmed Ali'nin amacı üç katlıydı: ordusuna asker toplamak, Sennâr altınına ulaşmak ve kaçan Kölemen bakiyesini yok etmek. Oğlu İsmâil Paşa kumandasındaki kuvvet Nil'i takip ederek güneye indi — Mısır tarihinde ilk kez bu ölçekte, kalıcı bir sömürgeci genişleme siyaseti başlıyordu; sonraki seksen yıl boyunca Mısır'ın Sudan'la ilişkisi bu seferle şekillenecekti.", kaynak:"sudan (TDV) — data/olaylar_ek4.js:90'da zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Kahire" },

{ taraflar:["misir-kavalali"], t:"1821-01-04", b:"Dongola'nın alınması", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Dongola", d:"Nil'in büyük kıvrımındaki Dongola'ya giren ordu, buraya sığınmış son Kölemen grubunu tasfiye etti. Mısır'ın Sudan hâkimiyeti bu tarihten itibaren kalıcı hâle geliyordu.", kaynak:"sudan (TDV) — data/olaylar_ek4.js:94'te zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1821-06-01", b:"Jumel pamuğunun Mısır tarımına girmesi", gun:"Haziran 1821? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` ay/gün vermiyor · ⚠️ -06-01 yıl ortası YER TUTUCU olabilir", tur:"ekonomi", onem:4, dunya:2, kapsam:"dis", etiket:["ekonomi","tarim","konu-ekonomi","konu-sanayi"], d:"Fransız tekstil uzmanının Kahire'deki bir bahçede fark ettiği uzun elyaflı pamuk türü (Jumel pamuğu), Mehmed Ali Paşa'nın desteğiyle 1820'lerin başında Nil Deltası'nda yaygın biçimde ekilmeye başlandı. Devlet tekeli altında yürütülen bu üretim, birkaç yıl içinde Mısır'ı dünya pamuk piyasasının önemli bir tedarikçisi hâline getirdi ve hazinenin en büyük gelir kalemlerinden birini oluşturdu.", kaynak:"bulunamadı — TDV'nin genel 'pamuk' maddesi Jumel pamuğunu ve Mısır'a özgü ayrıntıları kapsamıyor; dayanak: standart akademik kaynak (E.R.J. Owen, Cotton and the Egyptian Economy, 1820-1914)", yer_id:"Kahire" },

{ taraflar:["misir-kavalali"], t:"1821-06-14", b:"Sennâr (Fûnc) Sultanlığı'nın teslimi", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Sennar", d:"Üç yüzyıllık Fûnc hanedanı çarpışmadan teslim oldu; Nil'in iki kolunun birleştiği noktada kurulan ordugâh kısa sürede Sudan'ın idare merkezi Hartum'a dönüşecekti. Mısır böylece kendi sınırlarının çok güneyinde kalıcı bir idare merkezi kuruyordu.", kaynak:"func (TDV) — data/olaylar_ek4.js:98'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1821-08-19", b:"Kordofan'ın ele geçirilmesi", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], d:"Batıya gönderilen ikinci kol Kordofan'ı aldı; Mısır'ın Sudan hâkimiyeti Nil vadisinden batı bozkırlarına genişledi.", kaynak:"sudan (TDV) — data/olaylar_ek4.js:102'de zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Kordofan" },

{ taraflar:["misir-kavalali"], t:"1821-11-14", b:"Bulak Matbaası'nın resmî açılışı", tur:"kultur", onem:4, dunya:2, kapsam:"ic", etiket:["kultur","bilim","islahat","imar","konu-bilim","konu-kultur","konu-imar","konu-islahat"], yer_id:"Kahire", d:"Mehmed Ali Paşa'nın 1819'da inşasını başlattığı matbaa, 18 Safer 1237'de (14 Kasım 1821) Bulak'ta resmen hizmete girdi; Mısır'da modern matbaacılığın başlangıcı oldu. İlk basılan eserin hangisi olduğu kaynaklarda tartışmalıdır — Dom Raphael'in İtalyanca-Arapça sözlüğü sıklıkla anılsa da, Aralık 1822'de basılan Şânîzâde'nin askerî talimat tercümesi 'Vesâyânâme-i Seferiyye' gerçek ilk eser sayılır. 1822-1851 arasında 570 kitap basan matbaa, 1867 Paris ve 1873 Viyana sergilerine de katılarak Mısır'ın yeni eğitim sisteminin temel taşlarından biri hâline geldi.", kaynak:"bulak (TDV)" },

{ taraflar:["misir-kavalali"], t:"1822-06-28", b:"Girit'e Mısır kuvvetlerinin çıkması", tur:"savas", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Girit (Resmo)", d:"Rum isyanı Girit'e sıçrayınca Bâbıâli adaya Mısır kuvveti gönderilmesini istedi. Mehmed Ali'nin adadaki nüfuzu bu müdahaleyle başladı ve sekiz yıl sonra Girit valiliğinin ona verilmesiyle sonuçlanacaktı — Mısır artık yalnız Arabistan'da değil, Ege'de de imparatorluğun 'itfaiyecisi' rolünü üstleniyordu.", kaynak:"girit (TDV) — data/olaylar_ek4.js:112'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1822-10-24", b:"İsmâil Paşa'nın Şendî'de öldürülmesi", tur:"isyan", onem:3, dunya:1, kapsam:"dis", etiket:["isyan","konu-kisiler","konu-isyan"], d:"Ağır vergi ve asker talebine öfkelenen yerel emîr Nemir, konakladığı evi ateşe vererek Mehmed Ali'nin oğlu İsmâil Paşa'yı maiyetiyle birlikte yaktı. Misilleme seferi bölgeyi kan gölüne çevirdi; Mısır'ın Sudan idaresi bundan sonra sertlik üzerine kurulacaktı — kolonyal genişlemenin bedelinin sultanın kendi ailesine kadar ulaştığı bir olay.", kaynak:"sudan (TDV) — data/olaylar_ek4.js:106'da zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Şendî" },

{ taraflar:["misir-kavalali"], t:"1824-07-19", b:"II. Mahmud'un Mora için Mehmed Ali'den yardım istemesi", tur:"siyaset", onem:5, dunya:3, kapsam:"dis", etiket:["diplomasi","konu-siyasi","konu-diplomasi"], d:"Yeniçeri ordusuyla üç yılda bastırılamayan Mora isyanı için padişah, Avrupa usulünde eğitilmiş Mısır ordusuna başvurdu; karşılığında Mora valiliği ve Girit vaad edildi. Mısır için bu, imparatorluğun kendi vilayetine muhtaç hâle geldiğinin ilk açık itirafıydı ve Mehmed Ali'nin pazarlık gücünü katbekat artıran bir dönüm noktasıydı — Kavalalı artık bir vali değil, devletin askerî omurgası hâline gelmişti.", kaynak:"mora (TDV) — data/olaylar_ek4.js:116'da zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"İstanbul" },

{ taraflar:["misir-kavalali"], t:"1825-02-24", b:"İbrâhim Paşa'nın Mora'ya çıkması", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], d:"Mısır donanmasının koruduğu çıkarma kuvveti Mora'nın güneybatı ucuna ayak bastı; nizamî piyade ve sahra topçusuyla donatılmış bu ordu isyancı çetelere karşı kısa sürede üstünlük sağladı. Mehmed Ali'nin modern ordusu, imparatorluğun kendi ordusunun başaramadığını başarıyor, Mısır'ın askerî reformunun meyvesini imparatorluk çapında gösteriyordu.", kaynak:"ibrahim-pasa-kavalali (TDV) — data/olaylar_ek4.js:120'de zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Modon" },

{ taraflar:["misir-kavalali"], t:"1825-06-22", b:"Tripoliçe'nin geri alınması — Mora'nın merkezinin düşüşü", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Mora (Tripoliçe)", d:"İsyanın idare merkezi Tripoliçe'nin düşmesiyle Mora'nın büyük bölümü Mısır kuvvetlerinin denetimine girdi. Mehmed Ali'nin vaad edilen Mora valiliğine giden yol açılıyor gibi görünüyordu — ama bu görünüşteki başarı, iki yıl sonra Navarin'de tersine dönecek bir sürecin de başlangıcıydı.", kaynak:"mora (TDV) — data/olaylar_ek4.js:125'te zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1826-01-01", b:"Mehmed Ali'nin Paris'e ilk büyük öğrenci heyetini göndermesi", gun:"1826 — yıl hassasiyeti · TDV `rifaa-et-tahtavi`, `kavalali-mehmed-ali-pasa`, `misir`, `ibrahim-pasa-kavalali` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"bilim", onem:5, dunya:3, kapsam:"dis", etiket:["bilim","egitim","konu-bilim","konu-egitim"], d:"1809'dan beri küçük gruplar hâlinde Avrupa'ya öğrenci gönderen Mehmed Ali Paşa, 1826'da kırk kişilik daha büyük bir heyeti Paris'e yolladı; heyetin imamlığı ve vekilharçlığı genç âlim Rifâa Râfi et-Tahtâvî'ye verildi. Beş yıl sürecek bu Paris tecrübesi yalnız dinî danışmanlık değil, felsefeden mineralojiye, matematikten mitolojiye uzanan geniş bir Avrupa eğitimine dönüşecek ve dönüşünde Tahtâvî'yi Mısır'ın çeviri ve eğitim reformunun mimarı hâline getirecekti.", kaynak:"rifaa-et-tahtavi (TDV); kavalali-mehmed-ali-pasa (TDV)", yer_id:"Paris" },

{ taraflar:["misir-kavalali"], t:"1826-04-22", b:"Missolonghi'nin düşüşü", tur:"savas", onem:2, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", d:"Bir yıl süren kuşatmanın ardından şehir İbrâhim Paşa'nın kuvvetlerince alındı. Ancak müdafaanın Avrupa basınında yarattığı yankı Yunan davasına duyulan sempatiyi zirveye çıkardı — Mısır'ın askerî başarısı, paradoksal biçimde, büyük devletlerin müdahalesinin de zeminini hazırlıyordu.", kaynak:"resid-mehmed-pasa (TDV) — data/olaylar_ek4.js:129'da zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_kon:[38.371,21.431] },

{ taraflar:["misir-kavalali"], t:"1827-06-01", b:"Kasrü'l-Aynî Tıp Mektebi'nin kuruluşu", gun:"Haziran 1827? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` ay/gün vermiyor · ⚠️ -06-01 yıl ortası YER TUTUCU olabilir", tur:"bilim", onem:5, dunya:2, kapsam:"ic", etiket:["bilim","konu-bilim","konu-egitim"], yer_id:"Kahire", d:"Mehmed Ali Paşa, ordusu için yerli hekim yetiştirmek amacıyla Kahire'de Kasrü'l-Aynî Tıp Mektebi'ni kurdurdu ve başına Fransız hekim Antoine Barthélemy Clot'yu (sonradan Clot Bey) getirdi. TDV'nin genel tıp maddesi Clot'nun Mısırlı meslektaşlarıyla yürüttüğü fikir alışverişine değinmekle birlikte kuruluşun kendi ayrıntılarına girmez. Okul, Osmanlı coğrafyasında modern tıp eğitiminin ilk kurumsal örneklerinden biri oldu ve tıbbiye-mühendishâne-matbaa üçlüsüyle birlikte Mısır'ın en erken modernleşme atılımının parçasıydı.", kaynak:"bulunamadı — TDV'nin 'tip' maddesi yalnız Clot'nun genel işbirliğine değiniyor, Kasrü'l-Aynî'nin kuruluş tarihini ve ayrıntılarını vermiyor; dayanak: standart akademik kaynak (Khaled Fahmy, All the Pasha's Men)" },

{ taraflar:["misir-kavalali"], t:"1827-10-20", b:"Navarin Baskını — Mısır donanmasının yakılması", tur:"savas", onem:5, dunya:4, kapsam:"dis", etiket:["askeri","toprak-kayip","konu-askeri"], yer_id:"", d:"Yunan isyanını bastırmakta olan Osmanlı-Mısır donanması, savaş ilanı olmaksızın limana giren İngiliz-Fransız-Rus birleşik filosu tarafından Navarin'de yakıldı; altmışa yakın gemi ve binlerce denizci kaybedildi. Mısır için bu, on yıllık askerî yatırımın bir günde küle dönmesiydi — Mehmed Ali'nin filosunun yeniden inşası yıllar alacak, Navarin'in siyasi bedeli ise bir yıl sonra Mora'nın tamamen elden çıkmasıyla ödenecekti.", kaynak:"navarin (TDV) — data/olaylar.js:137'de zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_kon:[36.913,21.696] },

{ taraflar:["misir-kavalali"], t:"1828-01-01", b:"Vekâyi-i Mısır'ın yayın hayatına başlaması", gun:"1828 — yıl hassasiyeti · TDV `kavalali-mehmed-ali-pasa`, `misir`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"kultur", onem:3, dunya:1, kapsam:"ic", etiket:["kultur","konu-kisiler","konu-kultur"], yer_id:"Kahire", d:"Mehmed Ali Paşa'nın idaresinde Arapça ve Türkçe olarak çıkarılan Vekâyi-i Mısır, Mısır'ın ilk resmî gazetesi oldu. Devlet kararlarını ve resmî haberleri halka duyurmak amacıyla çıkarılan gazete, Bulak Matbaası'nın kurumsal işlevini genişleterek Mısır'da modern matbuatın ilk adımını oluşturdu.", kaynak:"kavalali-mehmed-ali-pasa (TDV)" },

{ taraflar:["misir-kavalali"], t:"1828-08-06", b:"İskenderiye Sözleşmesi — Mısır'ın Mora'dan çekilme kararı", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", etiket:["antlasma","konu-diplomasi"], yer_id:"İskenderiye", d:"Navarin'de donanmasını kaybeden Mehmed Ali, İstanbul'a danışmadan İngiliz amiraliyle doğrudan anlaşarak kuvvetlerini Mora'dan çekmeyi kabul etti. Bir valinin büyük devletlerle müstakil antlaşma yapması, Mısır'ın artık Bâbıâli'nin sıradan bir vilayeti gibi davranmadığının açık göstergesiydi — gelecek krizin habercisi.", kaynak:"navarin (TDV) — data/olaylar_ek4.js:142'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1828-10-05", b:"Mısır kuvvetlerinin Mora'yı boşaltması", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", etiket:["toprak-kayip","konu-askeri"], yer_id:"Mora (Tripoliçe)", d:"Son birlikler gemilere bindirildi; yarımada fiilen elden çıktı ve bağımsız Yunanistan'ın çekirdeği oldu. Mehmed Ali vaad edilen Mora valiliğini hiç alamamış, karşılığında büyük bir donanma ve ordu kaybetmişti — Mısır'ın Yunan seferinden eli boş dönmesi, sonraki yıllarda Suriye talebinin arkasındaki gerekçelerden biri olacaktı.", kaynak:"mora (TDV) — data/olaylar_ek4.js:146'da zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1830-01-01", b:"Girit'in idaresinin Mehmed Ali'ye bırakılması", gun:"1830 — yıl hassasiyeti · eski t 1830-11-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `girit`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"idari", onem:3, dunya:2, kapsam:"dis", etiket:["idari","konu-idari"], yer_id:"Girit (Resmo)", d:"Mora kaybının telâfisi olarak Girit valiliği Mehmed Ali'ye verildi; ada on yıl boyunca Kahire'den yönetilecekti. Mısır'ın nüfuz alanı Ege'nin ortasına kadar genişliyordu, ama bu tazminat Mehmed Ali'yi tatmin etmekten uzaktı.", kaynak:"girit (TDV) — data/olaylar_ek4.js:149'da zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ t:"1831-10-31", b:"İbrâhim Paşa'nın Suriye'ye girmesi — Birinci Mısır Meselesi başladı", tur:"savas", onem:5, dunya:5, kapsam:"dis", etiket:["askeri","toprak-kazanc","konu-askeri"], yer_id:"Yafa", d:"Bahane, Mısır'dan kaçan köylüleri iade etmeyen Akkâ valisiydi; gerçek sebep Mehmed Ali'nin Mora'da harcadığı gücün karşılığını Suriye'nin kereste, liman ve insan kaynağıyla almak istemesiydi. Mısır ordusu Sînâ'yı geçip Filistin sahilini hızla ele geçirdi — bu, bir Osmanlı valisinin merkeze karşı ilk açık silahlı meydan okuyuşuydu ve Mısır'ı bağımsız bir bölgesel güç olarak sahneye çıkaran süreci başlatıyordu.", kaynak:"suriye (TDV) — data/olaylar_ek4.js:156'da zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1831-11-27", b:"Akkâ kuşatmasının başlaması", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Akkâ", d:"Napolyon'u 1799'da durduran kale, Mısır ordusunun modern topçusu karşısında altı ay direndi. Bu kuşatma, Mısır'ın artık bölgenin en güçlü kara ordusuna sahip olduğunun ilk büyük sınavıydı.", kaynak:"akka (TDV) — data/olaylar_ek4.js:160'ta zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1832-05-27", b:"Akkâ'nın düşmesi — Bâbıâli Mehmed Ali'yi âsi ilan etti", tur:"savas", onem:5, dunya:4, kapsam:"dis", etiket:["askeri","toprak-kazanc","konu-askeri"], yer_id:"Akkâ", d:"Surları döven bataryalar gedik açınca kale alındı; Suriye'nin kapısı açılmıştı. Bâbıâli aynı günlerde Mehmed Ali'yi âsi ilan edip valiliğini kaldırdı — Mısır ile İstanbul arasındaki ilişki artık idari bir anlaşmazlık değil, açık bir savaş hâline gelmişti.", kaynak:"akka (TDV) — data/olaylar_ek4.js:164'te zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1832-06-15", b:"Şam'ın teslim olması", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Şam", d:"Şehir çarpışmasız teslim oldu; İbrâhim Paşa vergi düzenini ve gayrimüslimlere tanınan eşitliği ilan ederek yerel desteği kazanmaya çalıştı. Mısır idaresi Suriye'de yalnız askerî değil idari bir deney de yürütüyordu — aynı politikalar birkaç yıl sonra ona karşı isyanların da sebebi olacaktı.", kaynak:"dimask (TDV) — data/olaylar_ek4.js:168'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1832-06-25", b:"Halep'in ele geçirilmesi", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Halep", d:"Kuzey Suriye'nin ticaret ve idare merkezi de düştü; Mısır ordusu Toroslar'ın eteklerine dayanıp Anadolu'nun kapısındaki geçitlere yöneldi.", kaynak:"halep (TDV) — data/olaylar_ek4.js:172'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1832-07-08", b:"Humus Muharebesi — Osmanlı ordusunun bozgunu", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Humus", d:"Suriye'yi kurtarmak için gönderilen Osmanlı ordusu açık arazide Mısır kuvvetlerine yenildi. Mısır ordusunun modern eğitimi ile Osmanlı'nın henüz yeni kurulan ordusu arasındaki fark bu savaşta somutlaştı.", kaynak:"kavalali-mehmed-ali-pasa (TDV) — data/olaylar_ek4.js:176'da zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1832-07-29", b:"Belen Geçidi bozgunu — Çukurova'nın açılması", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Adana", d:"Amanos dağlarındaki dar geçitte Osmanlı savunma hattı yarıldı; Antakya, Maraş, Adana ve Tarsus Mısır kuvvetlerine geçti. Mısır'ın kontrolü artık Suriye'yle sınırlı kalmayıp Anadolu'nun güneyine, Çukurova'ya kadar uzanıyordu.", kaynak:"adana (TDV) — data/olaylar_ek4.js:180'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1832-11-21", b:"Mısır ordusunun Konya'ya girmesi", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Konya", d:"Toroslar'ı aşan Mısır ordusu Orta Anadolu'ya ulaştı. Bir Osmanlı valisinin kuvvetleri ilk defa imparatorluğun çekirdek topraklarında ilerliyordu — Mısır artık bir eyalet değil, imparatorluğun kaderini belirleyecek bağımsız bir askerî güçtü.", kaynak:"konya (TDV) — data/olaylar_ek4.js:184'te zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1832-12-21", b:"Konya Meydan Muharebesi — Osmanlı sadrazamının esir alınması", tur:"savas", onem:5, dunya:5, kapsam:"dis", etiket:["askeri","konu-askeri","konu-burokrasi"], yer_id:"Konya", d:"Sisli havada dağılan Osmanlı ordusu ağır yenilgi aldı ve sadrazam Reşid Mehmed Paşa esir alındı; devletin merkez ordusu artık yoktu. Mısır için bu, tarihinin en büyük askerî zaferiydi — İbrâhim Paşa'nın orduları ile İstanbul arasında duracak hiçbir güç kalmamıştı, Mehmed Ali fiilen Osmanlı tahtını da tehdit edebilecek konuma gelmişti.", kaynak:"resid-mehmed-pasa (TDV) — data/olaylar_ek4.js:188'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1833-01-01", b:"Telhîsu'l-İbrîz'in Bulak'ta basılması — Tahtâvî'nin Paris izlenimleri", gun:"H. 1250 / 1833 — yıl hassasiyeti · TDV `rifaa-et-tahtavi`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"kultur", onem:4, dunya:2, kapsam:"dis", etiket:["kultur","bilim","konu-bilim","konu-kultur"], yer_id:"Kahire", d:"Rifâa Râfi et-Tahtâvî, 1831'de Paris'ten dönüşünün ardından beş yıllık gözlemlerini 'Telhîsu'l-İbrîz fî Telhîsi Bârîz' adlı eserde topladı; kitap 1250'de (1833) Bulak Matbaası'nda basıldı. Fransız toplumunun siyasi ve sosyal hayatını, 1830 İhtilali'ni bizzat tanık olarak anlatan eser, Mısırlı bir aydının Avrupa'yı doğrudan gözlemleyip Arapça'ya aktardığı ilk kapsamlı metinlerden biri oldu ve Nahda (Arap Uyanışı) hareketinin öncü kaynaklarından sayıldı.", kaynak:"rifaa-et-tahtavi (TDV)" },

{ taraflar:["misir-kavalali"], t:"1833-02-02", b:"Mısır ordusunun Kütahya'ya ulaşması", tur:"savas", onem:4, dunya:4, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Kütahya", d:"İbrâhim Paşa İstanbul'a üç konak mesafedeki Kütahya'da durdu; ileri gitmemesi askerî değil siyasîydi — Rus müdahalesi ve Avrupa'nın tepkisi hesaba katılmıştı. Mısır, elindeki askerî üstünlüğü İstanbul'u fiilen ele geçirmek için değil, masada daha güçlü bir konum elde etmek için kullanmayı tercih etti.", kaynak:"kutahya (TDV) — data/olaylar_ek4.js:196'da zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1833-05-14", b:"Kütahya Sözleşmesi — Suriye ve Adana Mehmed Ali'ye bırakıldı", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", etiket:["antlasma","toprak-kazanc","konu-askeri","konu-diplomasi"], yer_id:"Kütahya", d:"Bâbıâli, Mısır, Girit ve Hicaz'ın yanı sıra Şam, Halep, Trablusşam ve Sayda valiliklerini Mehmed Ali'ye, Adana muhassıllığını İbrâhim Paşa'ya bıraktı; karşılığında ordu Toroslar'ın güneyine çekildi. Mısır bu antlaşmayla tarihinin en geniş sınırlarına ulaştı — Nil'den Toroslar'a, Kızıldeniz'den Ege'ye uzanan bir imparatorluk içi imparatorluk kurmuştu. Ama bu bir antlaşma değil padişahın verdiği fermanlar biçimindeydi; mesele çözülmemiş, yalnızca ertelenmişti.", kaynak:"kutahya (TDV) — data/olaylar_ek4.js:200'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1834-01-01", b:"Mühendishâne'nin kurulması", gun:"1834 — yıl hassasiyeti · TDV `kavalali-mehmed-ali-pasa`, `misir`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"bilim", onem:3, dunya:1, kapsam:"ic", etiket:["bilim","egitim","konu-bilim","konu-egitim"], yer_id:"Kahire", d:"Mehmed Ali Paşa'nın modernleşme programı kapsamında Kahire'de bir mühendislik okulu (mühendishâne) açıldı; tıbbiye ve matbaadan sonra kurulan bu okul, ordunun ve bayındırlık işlerinin ihtiyaç duyduğu teknik kadroyu yetiştirmeyi hedefliyordu. Askerî ve mülki okullar zinciri Mısır'ı Osmanlı coğrafyasının en erken ve en yoğun eğitim reformu geçiren eyaleti hâline getirdi.", kaynak:"kavalali-mehmed-ali-pasa (TDV)" },

{ taraflar:["misir-kavalali"], t:"1834-05-19", b:"Filistin-Nablus isyanı Mısır idaresine karşı", tur:"isyan", onem:3, dunya:1, kapsam:"ic", etiket:["isyan","konu-isyan"], yer_id:"Nablus", d:"Zorunlu askerlik, silah toplama ve yeni vergiler Filistin'de geniş bir ayaklanmaya yol açtı; isyan sertçe bastırıldı. Mısır idaresinin yerel halk nezdindeki desteği hızla eriyordu — kazanılan topraklar yönetmesi giderek zorlaşan bir yüke dönüşüyordu.", kaynak:"suriye (TDV) — data/olaylar_ek4.js:210'da zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1835-01-01", b:"Tercüme okulunun Medresetü'l-elsün'e dönüştürülmesi", gun:"1835 — yıl hassasiyeti · TDV `rifaa-et-tahtavi`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"bilim", onem:3, dunya:1, kapsam:"ic", etiket:["bilim","egitim","islahat","konu-bilim","konu-egitim","konu-islahat"], yer_id:"Kahire", d:"1833-34'te tıp mektebinde mütercimlik ve Fransızca öğretmenliği yapan Tahtâvî, 1835'te var olan tercüme okulunu yeniden yapılandırarak 'Medresetü'l-elsün' (Diller Okulu) adını verdi ve müfredatını genişletti. Okul, Mısır'ın Avrupa bilim ve idare literatürünü Arapça'ya aktaran tercüme kadrosunun yetiştiği merkez oldu.", kaynak:"rifaa-et-tahtavi (TDV)" },

{ taraflar:["misir-kavalali"], t:"1837-10-15", b:"Cebel-i Dürûz ayaklanması", tur:"isyan", onem:2, dunya:1, kapsam:"ic", etiket:["isyan","konu-isyan"], yer_id:"", d:"Dürzî bölgesinde çıkan direniş iki yıl sürdü. Suriye'de biriken hoşnutsuzluk, üç yıl sonra müttefik donanmalar sahile çıktığında Mısır ordusunun arkasını boşaltacaktı.", kaynak:"lubnan (TDV) — data/olaylar_ek4.js:214'te zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_kon:[32.709,36.569] },

{ taraflar:["misir-kavalali"], t:"1838-05-25", b:"Mehmed Ali'nin bağımsızlık niyetini bildirmesi", tur:"siyaset", onem:5, dunya:4, kapsam:"dis", etiket:["siyaset","konu-siyasi"], yer_id:"İskenderiye", d:"Mehmed Ali büyük devletlerin konsoloslarına Mısır ve Suriye'nin bağımsızlığını ilan etmeyi düşündüğünü açıkladı. İngiltere buna kesin şekilde karşı çıktı: Akdeniz'de güçlü ve Fransa'ya yakın bir devletin doğması Hindistan yolunu tehdit ederdi — Mısır'ın en büyük dış politika hedefine bu kadar yaklaştığı an, aynı zamanda İngiltere'yi kesin biçimde karşısına aldığı andı.", kaynak:"kavalali-mehmed-ali-pasa (TDV) — data/olaylar_ek4.js:218'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1839-06-24", b:"Nizip Muharebesi — İkinci Mısır Meselesi'nin zirvesi", tur:"savas", onem:5, dunya:5, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"", d:"Kütahya'da kaybettiklerini geri almak için Suriye sınırına sürülen Osmanlı ordusu, kötü yerleştirilmiş mevzileri yüzünden birkaç saat içinde İbrâhim Paşa'nın kuvvetlerine yenildi. Mısır için bu, sekiz yıl önce Konya'da kazanılan zaferin bir tekrarıydı — ama bu kez sonuçları çok daha büyük olacaktı: yenilgi haberi İstanbul'a ulaşmadan Osmanlı padişahı öldü, devlet birkaç gün içinde ordusuz, hükümdarsız ve donanmasız kaldı.", ic_not_d:"Muharebe sahası haritadaki yerleşim kayıtlarıyla birebir eşleşmediği için yer_id boş bırakıldı.", kaynak:"kavalali-mehmed-ali-pasa (TDV) — data/olaylar_ek4.js:228'de zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_kon:[37.01,37.794] },

{ taraflar:["misir-kavalali"], t:"1839-07-14", b:"Osmanlı donanmasının Mısır'a teslimi", tur:"siyaset", onem:5, dunya:4, kapsam:"dis", etiket:["siyaset","konu-siyasi"], yer_id:"İskenderiye", d:"Kaptan-ı derya Ahmed Fevzi Paşa, sadrazamın donanmayı Rusya'ya vereceği şüphesiyle filoyu İskenderiye'ye götürüp Mehmed Ali'ye teslim etti. Mısır bir anda hem Osmanlı ordusunu yenmiş hem de Osmanlı donanmasını elinde bulunduran taraf hâline geldi — Mehmed Ali'nin pazarlık gücü tarihinin zirvesindeydi, ama bu güç kısa sürede Avrupa'nın ortak müdahalesini de tetikleyecekti.", kaynak:"osmanlilar (TDV) — data/olaylar_ek4.js:237'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1839-07-27", b:"Büyük devletlerin ortak notası — Mısır Meselesi'nin Avrupalılaşması", tur:"siyaset", onem:4, dunya:5, kapsam:"dis", etiket:["diplomasi","konu-siyasi","konu-diplomasi"], d:"Beş büyük devlet Bâbıâli'ye nota vererek Mısır meselesinde tek başına anlaşma yapmamasını istedi. Mısır'ın kaderi artık kendisi ile İstanbul arasında değil, Avrupa'nın büyük güç dengesi içinde belirlenecekti — Mehmed Ali'nin askerî zaferleri onu siyasi olarak yalnızlaştırmıştı.", kaynak:"kavalali-mehmed-ali-pasa (TDV) — data/olaylar_ek4.js:240'ta zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"İstanbul" },

{ taraflar:["misir-kavalali"], t:"1840-07-15", b:"Londra Antlaşması — Mehmed Ali'ye ültimatom", tur:"antlasma", onem:5, dunya:5, kapsam:"dis", etiket:["antlasma","konu-diplomasi"], d:"Fransa dışarıda bırakılarak imzalanan antlaşma Mehmed Ali'ye ültimatom verdi: kısa sürede kabul ederse Mısır'ın irsî valiliği ve ömür boyu Akkâ, biraz gecikirse yalnız Mısır, reddederse hiçbir şey. Mehmed Ali reddetti — bu, Mısır'ın elindeki bütün kazanımları bir çırpıda kaybetme riskini göze alan, hanedanın tarihindeki en riskli kumardı.", kaynak:"londra-antlasmasi (TDV) — data/olaylar_ek4.js:245'te zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Londra" },

{ taraflar:["misir-kavalali"], t:"1840-09-11", b:"Beyrut bombardımanı — müttefik çıkarması", tur:"savas", onem:4, dunya:4, kapsam:"dis", etiket:["askeri","toprak-kayip","konu-askeri"], yer_id:"Beyrut", d:"İngiliz-Avusturya donanması Beyrut'u topa tuttu ve Lübnan dağlarında Mısır idaresine karşı ayaklanan halka silah dağıttı. İbrâhim Paşa'nın Suriye'deki kontrolü iç isyan ile dış müdahale arasında çökmeye başladı — dokuz yıllık Suriye işgalinin sonu görünüyordu.", kaynak:"beyrut (TDV) — data/olaylar_ek4.js:249'da zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1840-10-10", b:"Beyrut ve sahil şehirlerinin elden çıkması", tur:"toprak-kayip", onem:4, dunya:4, kapsam:"dis", etiket:["toprak-kayip","konu-askeri"], yer_id:"Beyrut", d:"Çarpışmaların ardından Mısır kuvvetleri sahilden çekildi; Lübnan kıyısı Mısır kontrolünden çıktı. Suriye işgalinin çözülüşü hızlanıyordu.", kaynak:"trablussam (TDV) — data/olaylar_ek4.js:253'te zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1840-11-03", b:"Akkâ'nın iki saatte düşmesi", tur:"toprak-kayip", onem:4, dunya:4, kapsam:"dis", etiket:["toprak-kayip","konu-askeri"], yer_id:"Akkâ", d:"Müttefik filonun bombardımanında kalenin cephaneliği infilak etti ve Akkâ birkaç saat içinde teslim oldu. Sekiz yıl önce İbrâhim Paşa'nın altı ayda alabildiği kale, Avrupa deniz topçusunun üstünlüğü karşısında saatler içinde düştü — Mısır'ın kara zaferleri, denizden gelen bir güce karşı hiçbir işe yaramıyordu.", kaynak:"akka (TDV) — data/olaylar_ek4.js:257'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1840-11-27", b:"İskenderiye Konvansiyonu — Mehmed Ali'nin geri adımı", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", etiket:["antlasma","toprak-kayip","konu-askeri","konu-diplomasi"], yer_id:"İskenderiye", d:"Mehmed Ali Suriye, Adana, Girit ve Hicaz'dan vazgeçmeyi, Osmanlı donanmasını iade etmeyi ve padişahın hâkimiyetini tanımayı kabul etti; karşılığında Mısır'ın irsî valiliği güvenceye alındı. Bu, Mısır'ın on yıl önce Kütahya'da kazandığı bütün toprakları geri vermesi, ama karşılığında en kalıcı kazanımı — kendi hanedanının kesin meşruiyetini — elde etmesiydi.", kaynak:"kavalali-mehmed-ali-pasa (TDV) — data/olaylar_ek4.js:262'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1841-02-25", b:"Mısır ordusunun Suriye ve Çukurova'yı boşaltması", tur:"toprak-kayip", onem:4, dunya:4, kapsam:"dis", etiket:["toprak-kayip","konu-askeri"], yer_id:"", d:"Dokuz yıllık işgal sona erdi; İbrâhim Paşa'nın ordusu Sînâ üzerinden Mısır'a döndü. Nil'den Toroslar'a uzanan geniş kuşak yeniden doğrudan Osmanlı idaresine geçti — Mısır, imparatorluk içi imparatorluk hayalinden sonunda vazgeçmiş, ama kendi çekirdek toprağını ve hanedanını kurtarmıştı.", kaynak:"suriye (TDV) — data/olaylar_ek4.js:265'te zaten doğrulanmış, Mısır perspektifine uyarlandı", odak_kimlik:["misir-kavalali"], kapsam_genis:true },

{ taraflar:["misir-kavalali"], t:"1841-05-24", b:"Ferman: Mısır valiliğinin Kavalalı ailesine irsî bırakılması", tur:"idari", onem:5, dunya:4, kapsam:"dis", etiket:["idari","antlasma","konu-idari","konu-diplomasi"], yer_id:"İstanbul", d:"Padişah fermanı, Mısır valiliğini hanedan içinde babadan oğula geçecek şekilde tanıdı; buna karşılık ordu mevcudu on sekiz bine indirildi, vergi İstanbul'a bağlandı, para basma ve antlaşma yapma yetkisi kaldırıldı. Mısır bir vilayet olarak kaldı ama artık ayrı bir hanedanın ülkesiydi — 1953'e kadar sürecek Kavalalı hanedanının hukuki temeli bu fermanla atıldı. Hicaz ve Haremeyn idaresi Bâbıâli'ye geri döndü.", kaynak:"misir (TDV) — data/olaylar_ek4.js:270'te zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1841-01-01", b:"Tahtâvî'nin resmî gazete idaresine getirilmesi", gun:"1841 — yıl hassasiyeti · eski t 1841-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `rifaa-et-tahtavi`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"idari", onem:2, dunya:1, kapsam:"ic", etiket:["idari","kultur","islahat","konu-idari","konu-kultur","konu-islahat"], yer_id:"Kahire", d:"Rifâa Râfi et-Tahtâvî, 1841'de yeniden düzenlenen resmî gazete işlerinin başına getirildi. Otuz yıla yakın bir süre boyunca sırasıyla tercüme, eğitim ve matbuat alanlarında görev üstlenen Tahtâvî'nin kariyeri, Mısır'ın bürokratik-kültürel modernleşmesinin tek bir kişide somutlaşmış hâliydi.", kaynak:"rifaa-et-tahtavi (TDV)" },

{ taraflar:["misir-kavalali"], t:"1848-09-01", b:"İbrâhim Paşa'nın fiilen Mısır valisi olması", gun:"Eylül 1848 başı — ay hassasiyeti (TDV `kavalali-mehmed-ali-pasa`: \"1848 Eylülünün başında … Mısır valiliğine tayin edildi\")", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic", etiket:["siyaset","konu-siyasi","konu-hanedan"], yer_id:"Kahire", d:"Yaşlanan ve zihnî melekelerini yitiren Mehmed Ali'nin yerine oğlu İbrâhim Paşa valiliğe getirildi; ancak birkaç ay sonra, Kasım 1848'de babasından önce öldü. Kırk yıllık Suriye ve Mora seferlerinin komutanı, kendi hanedanının ikinci hükümdarı olarak tahtta yalnız birkaç ay kalabildi.", kaynak:"ibrahim-pasa-kavalali (TDV) — data/olaylar_ek4.js:281'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1849-08-02", b:"Kavalalı Mehmed Ali Paşa'nın ölümü", tur:"hukumdar", onem:5, dunya:3, kapsam:"ic", etiket:["olum","konu-kisiler","konu-hanedan"], yer_id:"İskenderiye", d:"Kavala'da doğup Mısır'da bir hanedan kuran, imparatorluğu iki kez uçurumun kenarına getiren vali seksen yaşında öldü. Kurduğu hanedan 1953'e kadar Mısır'da hüküm sürecek; onun açtığı yolu izleyen halefleri (Said, İsmail, Tevfik) Mısır'ı Süveyş Kanalı'na, Avrupa borçlarına ve nihayetinde İngiliz işgaline taşıyacaktı. Mehmed Ali'nin mirası, modern Mısır devletinin kurucu efsanesidir.", kaynak:"kavalali-mehmed-ali-pasa (TDV) — data/olaylar_ek4.js:285'te zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1858-06-01", b:"Antikiteler Servisi'nin kuruluşu — Mısırbilimin kurumsallaşması", gun:"Haziran 1858? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` ay/gün vermiyor · ⚠️ -06-01 yıl ortası YER TUTUCU olabilir", tur:"bilim", onem:3, dunya:2, kapsam:"ic", etiket:["bilim","kultur","konu-bilim","konu-kultur"], yer_id:"Kahire", d:"Fransız Mısırbilimci Auguste Mariette'in öncülüğünde 1858'de kurulan Antikiteler Servisi, o güne dek yabancı koleksiyonculara ve kaçakçılara açık kalan Firavun dönemi eserlerinin devlet denetimine alınmasını sağladı. Mariette'in başında bulunduğu servis kısa süre sonra Bulak'ta ilk müze binasını açacak, bu koleksiyon 1902'de bugünkü Kahire Mısır Müzesi'nin temelini oluşturacaktı.", kaynak:"bulunamadı — TDV'de Mısırbilim/Antikiteler Servisi'ni ayrıntılı işleyen müstakil bir madde bu turda bulunamadı; dayanak: standart akademik kaynak (Donald Malcolm Reid, Whose Pharaohs? Archaeology, Museums, and Egyptian National Identity)" },

{ taraflar:["misir-kavalali"], t:"1859-04-25", b:"Süveyş Kanalı kazısının başlaması ve Port Said'in kuruluşu", tur:"ekonomi", onem:5, dunya:4, kapsam:"ic", etiket:["ekonomi","bilim","imar","islahat","konu-bilim","konu-ekonomi","konu-imar","konu-islahat","konu-ulastirma"], d:"Ferdinand de Lesseps'in projesinin kazı çalışmaları 25 Nisan 1859'da başladı; kanal on yıl sonra tamamlanacaktı. Kazının Akdeniz ucunda işçiler için kurulan barakalar Port Said'in çekirdeğini oluşturdu — Mısır, daha önce hiçbir yerleşimin bulunmadığı bir kıyı şeridinde yepyeni bir şehir doğuruyor, aynı zamanda kendi tarihinin en büyük mali yükünü de üstleniyordu.", kaynak:"suveys (TDV) — data/olaylar_7a4170.js:79'da zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Portsaid" },

{ taraflar:["misir-kavalali"], t:"1861-06-01", b:"Amerikan İç Savaşı'nın Mısır pamuğuna talebi patlatması", gun:"Haziran 1861? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI · TDV `pamuk`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` … ay/gün vermiyor · ⚠️ -06-01 yıl ortası YER TUTUCU olabilir", tur:"ekonomi", onem:4, dunya:3, kapsam:"dis", etiket:["ekonomi","konu-ekonomi"], yer_id:"", d:"Amerikan İç Savaşı'nın (1861-1865) Güney limanlarını abluka altına alması, dünya tekstil sanayiinin başlıca hammadde kaynağı olan Amerikan pamuğunun piyasadan çekilmesine yol açtı; TDV'nin pamuk maddesi bu savaşın 'Osmanlı pamuk piyasasını canlandırdığını' özellikle vurgular. Mısır, İngiliz ve Fransız tekstil fabrikalarının açık kalan başlıca alternatifi olarak fiyatların kat kat arttığı bir ihracat patlaması yaşadı; bu 'pamuk çılgınlığı' toprak sahiplerini zenginleştirirken, savaş bitip Amerikan pamuğu piyasaya dönünce 1866'dan itibaren gelecek mali çöküşün de tohumlarını attı.", kaynak:"pamuk (TDV) — Osmanlı ölçeğinde doğrulanmış; Mısır'a özgü ayrıntı için standart akademik kaynak (E.R.J. Owen) da kullanıldı", odak_kimlik:["misir-kavalali"], kapsam_genis:true },

{ taraflar:["misir-kavalali"], t:"1863-04-03", b:"İsmâiliye'nin kuruluşu — Hidiv İsmail'in Süveyş berzahındaki yatırımı", tur:"ekonomi", onem:3, dunya:2, kapsam:"ic", etiket:["ekonomi","idari","konu-idari","konu-ekonomi"], d:"Sultan Abdülaziz'in Mısır ziyaretiyle aynı yıl, Süveyş berzahındaki Timsah gölü kıyısında kanal şirketinin idare merkezi kuruldu. Hidiv İsmâil Paşa'nın bu tepeye kendisine bir köşk yaptırması üzerine yerleşim onun adıyla İsmâiliye diye anıldı — Mısır'ın modernleşme hırsının ve İsmail Paşa'nın kişisel görkem tutkusunun aynı anda somutlaştığı bir şehir.", kaynak:"abdulaziz (TDV) — data/olaylar_7a4170.js:81'de zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"İsmâiliye" },

{ taraflar:["misir-kavalali"], t:"1865-01-01", b:"Sevâkin, Masavva ve Dahlak'ın Mısır'a bağlanması", gun:"1865 — yıl hassasiyeti · TDV `masavva`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` … gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", etiket:["idari","konu-askeri","konu-idari"], d:"1846'da Mehmed Ali Paşa'ya sâlyâne olarak verilmiş olan Masavva, Hidiv İsmâil zamanında Dahlak ve Sevâkin ile birlikte Mısır emlâkine dahil edilerek kaymakamlık statüsünde teşkilâtlandırıldı. Kızıldeniz'in Afrika kıyısındaki bu üç liman, hukuken Osmanlı toprağı kalmakla birlikte idareten doğrudan Kahire'ye bağlandı — Mısır'ın Kızıldeniz'in her iki kıyısında da söz sahibi olma siyasetinin bir parçası.", kaynak:"masavva (TDV) — data/olaylar_ek5.js:355'te zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Masavva" },

{ taraflar:["misir-kavalali"], t:"1867-01-01", b:"Hidiv İsmail'in Paris ziyareti ve Kahire'yi yeniden imar kararı", gun:"1867 — yıl hassasiyeti · eski t 1867-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `kahire`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"idari", onem:3, dunya:2, kapsam:"dis", etiket:["idari","kultur","konu-idari","konu-kultur"], yer_id:"Kahire", d:"1867'de Paris'i ziyaret eden Hidiv İsmail Paşa, Baron Haussmann'ın şehri geniş bulvarlar ve meydanlarla yeniden düzenleyen imar hamlesinden etkilenerek Kahire'yi benzer bir modele göre dönüştürmeye karar verdi. 1865'te Nil yatağının ıslah edilmesiyle şehrin batıya doğru genişlemesi zaten mümkün hâle gelmişti; İsmail'in kararı bu coğrafi imkânı Avrupai bir başkent inşası projesine dönüştürdü.", kaynak:"kahire (TDV)" },

{ taraflar:["misir-kavalali"], t:"1867-06-08", b:"Mısır valilerine 'hidiv' unvanının verilmesi", tur:"siyaset", onem:4, dunya:2, kapsam:"dis", etiket:["siyaset","konu-siyasi"], yer_id:"Kahire", d:"İsmâil Paşa'nın İstanbul'a akıttığı paralar sonucunda Mısır valisine, diğer valilerden üstün olduğunu vurgulayan hidiv unvanı verildi. Aynı yıllarda veraset usulü babadan oğula geçecek biçimde değiştirildi ve Mısır'a dış borçlanma, madalya verme, konsolosluk bulundurma gibi hükümranlık nitelikli yetkiler tanındı — Mısır'ın Osmanlı'dan hukuken kopuşunu hızlandıran zincirin ilk halkası, ironik biçimde bizzat Mısır'ın kendi parasıyla satın alınmıştı.", kaynak:"hidiv (TDV) — data/olaylar_ek5.js:358'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1869-11-17", b:"Süveyş Kanalı'nın açılışı", tur:"ekonomi", onem:5, dunya:5, kapsam:"dis", etiket:["ekonomi","bilim","konu-bilim","konu-ekonomi","konu-ulastirma"], yer_id:"Süveyş", d:"On yıl süren inşaat tamamlandı ve Akdeniz'i Kızıldeniz'e bağlayan 163 kilometrelik kanal görkemli bir törenle hizmete girdi. Avrupa'yı Hindistan'a bağlayan yol binlerce mil kısalınca Mısır bir anda dünya ticaretinin kilit noktası hâline geldi. Bu jeostratejik değer, on üç yıl sonra İngiltere'nin Mısır'ı işgal etmesinin başlıca sebebi olacak; kanalın Mısır'a yüklediği borç ise hidivliği iflasa sürükleyecekti — Mısır'ın en büyük mühendislik başarısı, aynı zamanda bağımsızlığının sonunun da başlangıcıydı.", kaynak:"suveys (TDV) — data/olaylar_ek5.js:361'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1870-03-23", b:"Dârü'l-Kütübi'l-Mısriyye'nin kuruluşu", tur:"kultur", onem:3, dunya:1, kapsam:"ic", etiket:["kultur","bilim","konu-bilim","konu-kultur"], yer_id:"Kahire", d:"Evkaf Nazırı Ali Paşa Mübârek'in girişimiyle, Kahire'nin cami, medrese ve devlet dairelerine dağılmış değerli yazma eserlerini bir araya toplamak amacıyla kurulan kütüphane için Hidiv İsmail 23 Mart 1870'te ferman çıkardı. Sultan Abdülaziz'in 1863'teki Mısır ziyaretinden ilham alan bu proje, otuz bin ciltlik bir koleksiyonla halka açıldı ve zamanla Arap dünyasının yazma eser bakımından en zengin kütüphanesi hâline geldi.", kaynak:"darul-kutubil-misriyye (TDV)" },

{ taraflar:["misir-kavalali"], t:"1871-03-01", b:"Cemâleddin Efgânî'nin Kahire'ye gelişi", gun:"Mart 1871 — ay hassasiyeti · ay TDV'de var, gün yok (`efgani-cemaleddin`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` …)", tur:"sosyal", onem:4, dunya:3, kapsam:"dis", etiket:["sosyal","kultur","konu-kultur","konu-sosyal"], yer_id:"Kahire", d:"Mart 1871'de Kahire'ye gelen Cemâleddin Efgânî, kısa bir ziyaret düşünürken Başvekil Riyâz Paşa'nın ilgisi ve aylık maaşla sekiz yıl kalıcı olarak yerleşti. Ezher'e düzenli devam etmek yerine evinde özel dersler veren ve Posta Kahvehanesi'nde tartışmalar yürüten Efgânî'nin çevresinde toplanan öğrenciler arasında en yakın işbirlikçisi Muhammed Abduh olacaktı; dersler zamanla ilimden siyasete kaydı ve Efgânî'nin Mısır'daki entelektüel-siyasi ağının çekirdeğini oluşturdu.", kaynak:"efgani-cemaleddin (TDV)" },

{ taraflar:["misir-kavalali"], t:"1871-01-01", b:"Kasrünnîl Köprüsü'nün inşası", gun:"1871 — yıl hassasiyeti · eski t 1871-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `kahire`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"bilim", onem:2, dunya:1, kapsam:"ic", etiket:["idari","bilim","imar","konu-idari","konu-bilim","konu-imar","konu-ulastirma"], yer_id:"Kahire", d:"Nil üzerinde 1871-1872'de inşa edilen Kasrünnîl Köprüsü (bugünkü Tahrir Köprüsü), Kahire'nin batı yakasına doğru genişleyen yeni mahalleleri şehrin tarihî merkeziyle birbirine bağladı. Köprü, Hidiv İsmail'in Avrupa tarzı imar programının ilk somut mühendislik eserlerinden biri oldu.", kaynak:"kahire (TDV)" },

{ taraflar:["misir-kavalali"], t:"1872-01-01", b:"Bogos (Kerene) bölgesinin Mısır'a ilhakı", gun:"1872 — yıl hassasiyeti · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"toprak-kazanc", onem:2, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], d:"Hidiv İsmâil'in Kızıldeniz'in batı kıyısında kurduğu vilâyetin valisi Werner Munzinger Paşa, Bilen halkının yaşadığı Bogos bölgesini Mısır'a bağladı. Bu, Mısır'ın Habeş yaylasının kenarına yaptığı en kalıcı ilerleyişti ve Habeşistan ile on iki yıl süren bir sınır anlaşmazlığı başlattı — İsmail Paşa'nın Afrika'da bir kolonyal imparatorluk kurma hırsının bir parçası.", kaynak:"hidiv (TDV) — data/olaylar_ek9.js:129'da zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Kerene" },

{ taraflar:["misir-kavalali"], t:"1874-01-01", b:"İsmail Paşa'nın Ezbekiye'ye taşınması — yeni şehir merkezinin doğuşu", gun:"1874 — yıl hassasiyeti · eski t 1874-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `kahire`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"idari", onem:3, dunya:2, kapsam:"ic", etiket:["idari","kultur","konu-idari","konu-kultur"], yer_id:"Kahire", d:"1874'te Hidiv İsmail, asırlardır hükümdarlık merkezi olan Kal'a'yı (Kahire Kalesi) terk ederek 1863'te inşasına başladığı Zeynelâbidîn Sarayı'na yerleşti; böylece şehrin siyasi ve toplumsal ağırlık merkezi Özbekiye (Ezbekiye) bölgesine kaydı. Eski bir gölet çevresine kurulan Ezbekiye, modern bir parka dönüştürülüp çevresine oteller ve bir opera binası inşa edilerek Avrupa başkentlerini andıran yeni bir Kahire'nin vitrini hâline getirildi; su-kanalizasyon şebekesi, aydınlatma ve tramvay hatları da bu döneme ait altyapı yatırımlarıydı.", kaynak:"kahire (TDV)" },

{ taraflar:["misir-kavalali"], t:"1874-11-02", b:"Darfur Sultanlığı'nın Mısır'a ilhakı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], d:"Fildişi ve köle ticaretiyle güçlenen Zübeyr Rahmet Paşa, Remington tüfekleriyle donattığı kuvvetlerle Fur ordusunu dağıttı ve El-Fâşir'e çarpışmadan girdi; 1603'ten beri süren Keyra hânedanının hükümdarlığı fiilen sona erdi. Mısır'ın Sudan hâkimiyeti Darfur'a kadar genişlemişti — bu, Kavalalı Mısır'ının en geniş Afrika sınırlarına ulaştığı andı.", kaynak:"darfur (TDV) — data/olaylar_ek9.js:99'da zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"El-Fâşir" },

{ taraflar:["misir-kavalali"], t:"1875-08-05", b:"El-Ahrâm gazetesinin kuruluşu", tur:"kultur", onem:4, dunya:2, kapsam:"ic", etiket:["kultur","konu-kultur"], yer_id:"İskenderiye", d:"Lübnan kökenli Bişâre ve Selîm Takla kardeşler tarafından İskenderiye'de kurulan el-Ahrâm, kısa sürede Arap dünyasının en uzun ömürlü ve en etkili gazetelerinden biri hâline geldi. Gazetenin doğuşu, Mısır'ın Bulak Matbaası'ndan başlayan matbuat geleneğinin artık devlet tekelinden çıkıp özel girişimciliğe ve Nahda (Arap Uyanışı) hareketinin fikir tartışmalarına taşındığının işaretiydi.", kaynak:"bulunamadı — TDV'de el-Ahrâm'a dair müstakil madde bulunamadı; dayanak: standart akademik kaynak (Ami Ayalon, The Press in the Arab Middle East: A History)" },

{ taraflar:["misir-kavalali"], t:"1876-01-01", b:"Düyûn-ı Umûmiyye — Mısır'ın mali iflası ve Avrupa denetimi", gun:"1876 — yıl hassasiyeti · TDV `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali`, `ali-bey-bulutkapan` gün/ay vermiyor (KRONO-DOGU-ISLAM-0929 ölçümü)", tur:"ekonomi", onem:5, dunya:4, kapsam:"dis", etiket:["mali","idari","konu-idari","konu-ekonomi"], yer_id:"Kahire", d:"İsmâil Paşa'nın Süveyş Kanalı, ordu ve saray imarı için biriktirdiği aşırı dış borç ödenemez hâle gelince Mısır hazinesi resmen iflas etti; alacaklı devletlerin baskısıyla Düyûn-ı Umûmiyye (Kamu Borçları İdaresi) kuruldu ve Mısır'ın gelirleri doğrudan yabancı denetimine girdi. Bu, Mısır'ın mali egemenliğini fiilen kaybettiği andı — altı yıl sonraki İngiliz işgalinin zemini burada hazırlandı.", ic_not_d:"Bulunamadı — TDV'nin bu konuyu ayrıntılı işleyen müstakil bir maddesine bu turda erişilemedi (ağ araçları arızalı); tarih ve olay standart tarih yazımıyla (Vatikiotis, The History of Modern Egypt) genel bilgi olarak yazıldı, yıl hassasiyetinde bırakıldı.", kaynak:"bulunamadı — standart tarih yazımı (P.J. Vatikiotis), TDV bu turda doğrulanamadı; ağ araçları arızalıydı" },

{ taraflar:["misir-kavalali"], t:"1878-01-01", b:"Muhammed Abduh'un Ezher'de müderrisliğe başlaması", gun:"1878 — yıl hassasiyeti · eski t 1878-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `muhammed-abduh`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"sosyal", onem:3, dunya:2, kapsam:"ic", etiket:["sosyal","bilim","konu-bilim","konu-sosyal"], yer_id:"Kahire", d:"1877'de Ezher'den orta dereceli bir icazetle mezun olan Muhammed Abduh, ertesi yıl Ezher'de müderris olarak ders vermeye başladı; aynı dönemde Dârü'l-Ulûm ve Arap Dili Okulu'nda da hocalık yaptı. Cemâleddin Efgânî'nin en yakın öğrencisi olan Abduh, bu yıllarda hem geleneksel Ezher çevresinde hem de yeni kurulan modern okullarda konumlanarak, kariyerinin geri kalanını tanımlayacak reformcu-gelenekçi köprü rolünü üstlenmeye başladı.", kaynak:"muhammed-abduh (TDV)" },

{ taraflar:["misir-kavalali"], t:"1879-06-26", b:"İsmail Paşa'nın azli", tur:"hukumdar", onem:4, dunya:3, kapsam:"dis", etiket:["siyaset","konu-siyasi","konu-hanedan"], yer_id:"Kahire", d:"Mali iflasın sorumlusu sayılan İsmail Paşa, Osmanlı ve Avrupa devletlerinin ortak baskısıyla azledildi; yerine oğlu Tevfik Paşa hidiv oldu. Mısır'ı Süveyş Kanalı'na ve borç batağına sürükleyen hidiv, kurduğu krizin bedelini kendi tahtıyla ödedi.", ic_not_d:"Bulunamadı — kesin gün TDV'de bu turda doğrulanamadı (ağ arızalı), standart tarih yazımıyla yıl hassasiyetinde yazıldı.", kaynak:"bulunamadı — standart tarih yazımı, TDV bu turda doğrulanamadı; ağ araçları arızalıydı" },

{ taraflar:["misir-kavalali"], t:"1879-08-26", b:"Cemâleddin Efgânî'nin Mısır'dan sürgün edilmesi", tur:"sosyal", onem:4, dunya:3, kapsam:"dis", etiket:["sosyal","konu-sosyal","konu-demografi"], yer_id:"Kahire", d:"Mısır hükümeti, İngiliz baskısı ve Hidiv İsmail'in Efgânî'nin gençlik üzerindeki etkisinden duyduğu kaygı üzerine 26 Ağustos 1879'da resmî bir bildiriyle onu gizli bir cemiyetin başkanı ilan edip halkla temasını yasakladı ve sınır dışı etti. Sekiz yıllık Kahire dönemi böyle sona erdi, ama Efgânî'nin buradaki dersleri ve kurduğu ağ, en yakın öğrencisi Muhammed Abduh üzerinden Mısır'ın reform hareketine kalıcı bir miras bıraktı.", kaynak:"efgani-cemaleddin (TDV)" },

{ taraflar:["misir-kavalali"], t:"1882-07-11", b:"İskenderiye'nin bombardımanı — İngiliz işgalinin ilk adımı", tur:"savas", onem:5, dunya:5, kapsam:"dis", etiket:["askeri","toprak-kayip","konu-askeri"], yer_id:"İskenderiye", d:"Urâbî Paşa'nın önderliğindeki milliyetçi subay hareketi hidivi denetim altına alınca İngiltere Süveyş yolunun güvenliğini bahane ederek müdahale etti; Amiral Seymour'un filosu İskenderiye'nin sahil tabyalarını bombaladı ve İngiliz birlikleri karaya çıktı. Osmanlı Devleti hukuken hükümran olduğu bu vilayette harekâta engel olamadı — Mısır'ın Urâbî hareketiyle kazanmaya çalıştığı ulusal özerklik, tam tersine otuz iki yıl sürecek bir işgali tetikledi.", kaynak:"urabi-pasa (TDV) — data/olaylar_ek9.js:239'da zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1882-09-13", b:"Tel el-Kebîr Muharebesi — Urâbî ordusunun dağılması", tur:"savas", onem:5, dunya:5, kapsam:"dis", etiket:["askeri","toprak-kayip","konu-askeri"], yer_id:"", d:"General Wolseley kuvvetlerini Süveyş Kanalı üzerinden İsmâiliye'ye çıkarıp çölden yürüterek Mısır siperlerine baskın yaptı; muharebe bir saatte bitti, Urâbî teslim oldu ve İngiliz süvarisi aynı gün Kahire'ye girdi. Bu tarihten sonra Mısır'ın malî, askerî ve dış işleri fiilen İngiliz denetimine geçti; Osmanlı hükümranlığı hukuken 1914'e kadar sürecek olsa da, Mısır'ın kaderi artık Londra'da belirleniyordu — 'Mısır Mısırlılarındır' sloganıyla başlayan hareket, ülkeyi tam tersi bir sonuca sürüklemişti.", kaynak:"urabi-pasa (TDV) — data/olaylar_ek9.js:245'te zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_kon:[30.543,31.785] },

{ taraflar:["misir-kavalali"], t:"1883-11-05", b:"Şeykan bozgunu — Sudan'daki Mısır idaresinin çöküşünün başlangıcı", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","toprak-kayip","konu-askeri"], d:"Kahire'den gönderilen ve emekli İngiliz subayı Hicks Paşa'nın kumandasındaki on bin kişilik Mısır kuvveti, Kordofan çölünde susuz ve kılavuzsuz ilerlerken Muhammed Ahmed el-Mehdî'nin kuvvetlerince kuşatılıp neredeyse tamamen imha edildi. Bu bozgun, Mısır'ın altmış yıldır süregelen Sudan hâkimiyetinin belkemiğini kırdı — bir ay içinde Darfur ve Kordofan'ın tamamı elden çıktı, Hartum'un düşüşüne giden yol buradan başladı.", kaynak:"muhammed-ahmed-el-mehdi (TDV) — data/olaylar_ek9.js:295'te zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Kordofan (Ubeyyid)" },

{ taraflar:["misir-kavalali"], t:"1885-01-26", b:"Hartum'un düşüşü — Sudan'ın tamamının kaybı", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis", etiket:["toprak-kayip","askeri","konu-askeri"], yer_id:"Hartum", d:"On ay süren kuşatmanın ardından Mehdî kuvvetleri Hartum'a girdi; şehrin valisi Gordon öldürüldü. Bu tarihten sonra Sennar, Dongola ve Kordofan dahil bütün Sudan on dört yıl boyunca Mehdî Devleti'nin idaresinde kaldı — Mısır'ın 1820'den beri altmış beş yıl süren Sudan macerası, Mehmed Ali'nin torunlarının elinde tamamen çöktü.", kaynak:"sudan (TDV) — data/olaylar_ek6.js:122'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1896-09-23", b:"Dongola'nın geri alınışı — Sudan'ın yeniden fethinin başlaması", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","konu-askeri"], yer_id:"Dongola", d:"İngiltere, Mısır ordusunu Kitchener kumandasında Nil boyunca güneye yürüttü; demiryolu çölde ilerledikçe ikmal sorunu çözüldü ve Dongola geri alındı. On bir yıllık Mehdî idaresi burada sona erdi — ama bu artık Mısır'ın kendi seferinden çok, İngiliz-Mısır ortak seferiydi; Mısır ordusu fiilen İngiliz komutası altında savaşıyordu.", kaynak:"sudan (TDV) — data/olaylar_ek9.js:301'de zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1898-09-02", b:"Ümmüdurman Muharebesi — Mehdî devletinin yıkılışı", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri"], d:"Kitchener'ın topçu ve makineli tüfekle donanmış İngiliz-Mısır ordusu Ümmüdurman önünde Halife Abdullah'ın kuvvetlerini birkaç saatte dağıttı; ertesi gün Hartum'a girildi. Mısır, on üç yıl önce kaybettiği Sudan'ı geri kazanıyordu — ama artık kendi adına değil, İngiliz-Mısır ortak egemenliği (kondominyum) adına.", kaynak:"sudan (TDV) — data/olaylar_ek9.js:307'de zaten doğrulanmış, Mısır perspektifine uyarlandı", yer_id:"Ümmü Dermân" },

{ t:"1899-01-19", b:"Kondominyum Antlaşması — Sudan'ın İngiliz-Mısır ortak idaresi", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", etiket:["antlasma","idari","konu-idari","konu-diplomasi"], yer_id:"Kahire", d:"Kahire'de imzalanan antlaşma Sudan'ı 'Anglo-Mısır Sudanı' adıyla iki devletin ortak idaresine bağladı; uygulamada idare tamamen İngilizlerin elindeydi. Mısır, adı bu antlaşmada geçmesine rağmen kendi eski sömürgesi üzerinde artık gerçek bir söz sahibi değildi — Mehmed Ali'nin fethettiği Sudan, torunlarının elinde İngiliz İmparatorluğu'nun bir uzantısına dönüşmüştü.", kaynak:"sudan (TDV) — data/olaylar_ek9.js:313'te zaten doğrulanmış, Mısır perspektifine uyarlandı" },

{ taraflar:["misir-kavalali"], t:"1899-01-01", b:"Muhammed Abduh'un Mısır Baş Müftülüğü'ne atanması", gun:"1899 — yıl hassasiyeti · eski t 1899-06-01'in AYI kaynakta YOK (d ve TDV yalnız yıl veriyor; TDV `muhammed-abduh`, `misir`, `kavalali-mehmed-ali-pasa`, `ibrahim-pasa-kavalali` …) → yıla indirildi (KRONO-DOGU-ISLAM-0929)", tur:"sosyal", onem:4, dunya:2, kapsam:"ic", etiket:["sosyal","idari","konu-idari","konu-sosyal"], yer_id:"Kahire", d:"Urâbî hareketine desteği yüzünden 1882'de sürgün edilip Paris ve Beyrut'ta yıllar geçiren, 1889'da affedilerek Mısır'a dönen Muhammed Abduh, 1899'da Mısır Baş Müftülüğü'ne getirildi ve ölümüne (1905) dek bu görevde kaldı. Efgânî'nin siyasi radikalizminden uzaklaşıp fıkıh ve eğitim reformuna yönelen Abduh, bu makamdan verdiği fetvalarla Mısır'ın dinî-hukukî modernleşmesinde İslam dünyasının en etkili reformcu seslerinden biri hâline geldi.", kaynak:"muhammed-abduh (TDV)" },

{ t:"1914-12-18", b:"Mısır'ın İngiliz himayesine alınması — Osmanlı hükümranlığının sonu", tur:"toprak-kayip", onem:5, dunya:5, kapsam:"dis", etiket:["toprak-kayip","siyaset","konu-askeri","konu-siyasi"], yer_id:"Kahire", d:"Osmanlı Devleti'nin I. Dünya Savaşı'na girmesi üzerine İngiltere, 1882'den beri fiilen işgal altında tuttuğu Mısır'ı resmen himayesine aldığını ilan etti; Osmanlı'ya bağlılığını sürdüren Hidiv Abbas Hilmi Paşa azledilerek yerine Hüseyin Kâmil 'sultan' unvanıyla getirildi. Böylece 1517'den beri 397 yıl süren hukukî Osmanlı hükümranlığı tek taraflı olarak sona erdi — Mısır'ın Kavalalı hanedanı altında sürdürdüğü 'hem Osmanlı hem değil' ikircikli statüsü, sonunda kesin olarak çözülmüştü, ama Mısır'ın istediği yönde değil.", kaynak:"misir (TDV) — data/olaylar_ek5.js:410'da zaten doğrulanmış, Mısır perspektifine uyarlandı", kunye:["misir-kavalali"] },

{ taraflar:["misir-sultanligi"], t:"1915-01-14", b:"Birinci Kanal Harekâtı — Osmanlı'nın Süveyş'e taarruzu", tur:"savas", onem:3, dunya:3, kapsam:"dis", etiket:["askeri","konu-askeri","konu-ulastirma"], yer_id:"Süveyş", d:"Osmanlı IV. Ordu kumandanı Cemal Paşa, Mısır'ı İngiliz işgalinden kurtarmak amacıyla Sina çölünü aşan bir taarruz düzenledi; birlikleri kanalın doğu yakasına ulaşıp bir kısmı karşıya geçmeyi başardıysa da beklenen Mısır halk ayaklanması gerçekleşmeyince geri çekildi. Mısır halkının bu çağrıya kulak asmaması, otuz üç yıllık İngiliz işgalinin artık toplumsal bir gerçeklik olarak kabullenildiğinin bir işaretiydi.", kaynak:"birinci-dunya-savasi (TDV) — data/olaylar_ek5.js:412'de zaten doğrulanmış, Mısır perspektifine uyarlandı", kunye:[] }

];

;
/* ==== data/kronoloji_ozbek.js ==== */
// KRONOLOJİ — MÂVERÂÜNNEHİR ÖZBEK HANLIKLARI (Şeybânî/Buhara · Canoğulları ·
// Mangıt · Hîve · Hokand), 1500-1920. Şartname: oturumlar/KRONOLOJI-SARTNAME.md
// Üç hanlık TEK dosyada, DEVLET DEVLET işaretli (`etiket` alanında).
//
// ⚠️ `dunya` alanı için PAYLAŞILAN OLAYLAR — kronoloji_rusya.js ve
// kronoloji_iran.js'ten BİREBİR alındı, mükerrer yazılmadı:
//   1510-12-02 Şeybânî Han'ın ölümü        (kronoloji_iran.js, dunya:2)
//   1569-01-01 Osmanlı'nın Astrahan seferi (kronoloji_rusya.js, dunya:2)
//   1865-06-29 Taşkent'in fethi            (kronoloji_rusya.js, dunya:2)
//   1868-06-02 Buhara himayeye alındı       (kronoloji_rusya.js, dunya:2)
//   1873-08-12 Hîve himayeye alındı         (kronoloji_rusya.js, dunya:2)
//   1876-02-19 Hokand ilhak edildi         (kronoloji_rusya.js, dunya:2)
// Bu altı olayın `dunya` değeri KASITLI OLARAK kopyalandı — M-0873/M-0885'in
// "aynı olay farklı dosyada farklı dunya = KUSUR" kuralı.
//
// _timurlu.js (yazılıyor) çakışabilir: 1500'den önceki Timurlu-Şeybânî geçiş
// dönemi BU DOSYADA YOK (kapsam 1500'den başlıyor, Şeybânî Han'ın Mâverâünnehir
// fethiyle).

window.KRONOLOJI_OZBEK = [

// ══════════════ BUHARA — ŞEYBÂNÎ DÖNEMİ (1500-1599) ══════════════

{ t:"1500-01-01",
  b:"Şeybânî Han Buhara'yı ele geçirdi, Şeybânî devletinin kuruluşu",
  tur:"kurulus", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","kurulus","buhara","konu-askeri","konu-siyasi"],
  yer_id:"Buhara",
  d:"Özbek boylarının başındaki Muhammed Şeybânî Han, çökmekte olan Timurlu hâkimiyetindeki Mâverâünnehir'e girip Buhara'yı aldı; 905-913/1500-1507 arasında bölgenin hemen bütün şehirleri sırayla Şeybânî hâkimiyetine geçecekti. Bu, Timurlu-sonrası Orta Asya'da üç asır sürecek Özbek hanlıkları çağının başlangıcıdır.",
  kaynak:"TDV, madde: seybaniler" },

{ taraflar:["buhara"], t:"1501-01-01",
  b:"Semerkant'ın fethi — Bâbür Mirza'nın kovulması",
  tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","buhara","konu-askeri"],
  yer_id:"Semerkant",
  d:"Şeybânî Han, Timurlu hânedanının son direnişçilerinden Bâbür Mirza'yı (sonraki Babür İmparatorluğu'nun kurucusu) Semerkant'tan çıkardı; şehrin bu ikinci kaybı Bâbür'ü Kâbil ve ardından Hindistan'a yönelmeye itecek zincirin ilk halkasıydı.",
  kaynak:"TDV, madde: seybaniler" },

{ taraflar:["buhara"], t:"1507-01-01",
  b:"Herat'ın fethi — Horasan Şeybânî hâkimiyetine girdi",
  tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","buhara","konu-askeri"],
  yer_id:"Herat",
  d:"Şeybânî Han, son Timurlu hükümdarı Hüseyin Baykara'nın ölümünün ardından Herat'ı alarak Horasan'ı hâkimiyetine kattı; Timurlu devletinin son kalıntısı da böylece ortadan kalktı ve Şeybânî devleti Mâverâünnehir'den Horasan'a kadar uzanan bir güç hâline geldi.",
  kaynak:"TDV, madde: seybaniler" },

{ taraflar:["buhara"], t:"1510-12-02",
  b:"Şeybânî Han'ın Merv'de yenilip öldürülmesi ⭐ (dunya paylaşılan olay)",
  tur:"savas", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","hukumdar","buhara","konu-askeri","konu-kisiler","konu-hanedan"],
  yer_id:"Merv (Mari)",
  d:"[Şeybânî/Buhara] Safevî Şahı İsmail, Şeybânî Han'ı Merv yakınında ağır bir yenilgiye uğratıp öldürdü; Horasan bir gecede Safevî'ye geçti. Bu, henüz on yıllık Şeybânî devleti için beklenmedik bir darbeydi ve ardından on yılı bulan bir hükümdar istikrarsızlığı dönemi getirdi.", ic_not_d:"`dunya` değeri kronoloji_iran.js'teki aynı olayla BİREBİR aynıdır.",
  kaynak:"TDV, madde: seybaniler + kronoloji_iran.js ile çapraz doğrulandı" },

{ taraflar:["buhara"], t:"1525-01-01",
  b:"Ubeydullah Han Merv'i fethetti",
  tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","buhara","konu-askeri"],
  yer_id:"Merv (Mari)",
  d:"Kaşgar ve Buhara kolları arasındaki en yetenekli Şeybânî prenslerinden Ubeydullah, on beş yıl önce kaybedilen Merv'i Safevî'den geri aldı; bu, Şeybânîlerin Horasan'daki toparlanma sürecinin ilk somut adımıydı.",
  kaynak:"TDV, madde: seybaniler" },

{ taraflar:["buhara"], t:"1529-01-01",
  b:"Ubeydullah Han Herat'ı fethetti",
  tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","buhara","konu-askeri"],
  yer_id:"Herat",
  d:"Ubeydullah, Merv'in ardından Herat'ı da kısa süreliğine Şeybânî hâkimiyetine kattı; şehir birkaç kez el değiştirecek olsa da bu, Horasan üzerindeki Özbek-Safevî rekabetinin süreceğinin habercisiydi.",
  kaynak:"TDV, madde: seybaniler" },

{ taraflar:["buhara"], t:"1533-01-01",
  b:"Ubeydullah Han bütün Mâverâünnehir Şeybânîlerinin lideri oldu",
  tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","buhara","konu-siyasi","konu-hanedan"],
  yer_id:"Buhara",
  d:"Ebû Saîd Han'ın ölümü üzerine Ubeydullah, dağınık Şeybânî kollarını birleştirip Buhara'yı başkent yaptı; şehrin bilim ve kültür merkezi olarak yükselişi bu dönemde hızlandı — çok sayıda cami, medrese, kervansaray ve kanal inşa ettirdi.",
  kaynak:"TDV, madde: ubeydullah-han" },

{ taraflar:["buhara"], t:"1536-01-01",
  b:"Mîr-i Arab Medresesi tamamlandı",
  tur:"diger", onem:3, dunya:1, kapsam:"ic",
  etiket:["mimari","din","buhara","imar","konu-din","konu-imar","konu-egitim"],
  yer_id:"Buhara",
  d:"Ubeydullah Han'ın mânevî hocası Şeyh Seyyid Abdullah el-Yemânî'nin ('Mîr-i Arab') adını taşıyan medrese, Ubeydullah'ın finansmanıyla tamamlandı; bugün de faal olan yapı, Buhara'nın Şeybânî dönemindeki en önemli dinî-ilmî kurumlarından biri oldu. İnşa tarihi kaynaklarda 1530-1536 arasında tartışmalıdır.",
  kaynak:"standart akademik kaynak (yapı tarihi literatürü) — TDV'de 'mir-i-arab' sluğu bu oturumda çekilemedi (302), madde 'ubeydullah-han' içinde dolaylı geçiyor" },

{ taraflar:["buhara"], t:"1538-01-01",
  b:"Ubeydullah Han Harzem (Hîve) topraklarını işgal etti",
  tur:"toprak-kazanc", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","buhara","hive","konu-askeri"],
  yer_id:"", odak_yer:["Hîve", "Köhne Ürgenç (Gürgenç)"],
  d:"Ubeydullah, komşu Yadigâroğulları Hanlığı'nın (Hîve) topraklarına girip bölgeyi geçici olarak ele geçirdi; işgal kalıcı olmadı ve birkaç yıl içinde Hîve hanları bölgeyi geri aldı. Bu, iki Özbek hanlığı arasında üç asır sürecek rekabetin ilk büyük çatışmasıydı.",
  kaynak:"TDV, madde: ubeydullah-han" },

{ taraflar:["buhara"], t:"1539-01-01",
  b:"Ubeydullah Han'ın ölümü",
  tur:"diger", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","buhara","konu-kisiler","konu-hanedan"],
  yer_id:"Buhara",
  d:"Ubeydullah Han, kısa süre önce kaybettiği Harzem'in üzüntüsüyle Buhara'da öldü; kendisinden sonra Buhara'nın bilim ve kültür merkezi kimliği kalıcılaştı ama siyasi birlik zayıfladı.",
  kaynak:"TDV, madde: ubeydullah-han" },

{ taraflar:["buhara"], t:"1557-05-01",
  b:"II. Abdullah Han Buhara'yı ele geçirip başkent yaptı",
  tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"ic",
  etiket:["askeri","siyaset","hukumdar","buhara","konu-askeri","konu-siyasi","konu-hanedan"],
  yer_id:"Buhara",
  d:"Henüz babası İskender adına savaşan genç Abdullah, Buhara'yı ele geçirip fiilî iktidarı eline aldı. Bu zaferde, Cüybârî ailesinin başındaki Hâce Sa'd Cüybârî'nin arabuluculuğu belirleyici oldu — 16. yüzyıl Buhara siyasetinin en nüfuzlu dinî-sosyal ailesi olan Cüybârîler, hanlar ile rakip beyler arasında sürekli arabuluculuk yaparak devletin gerçek iktidar dengesinde yer aldı.",
  kaynak:"Encyclopaedia Iranica, madde: JUYBARIS + TDV, madde: abdullah-han" },

{ taraflar:["buhara"], t:"1561-05-01",
  b:"İskender Han nominal Şeybânî tahtına çıkarıldı",
  tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","buhara","konu-siyasi","konu-hanedan"],
  yer_id:"Buhara",
  d:"Abdullah'ın babası İskender, oğlunun fiilî iktidarı altında nominal 'ulu han' ilan edildi; bu düzenleme, Abdullah'ın kendi resmî cülûsuna (1583) kadar sürecek yirmi iki yıllık bir 'perde arkası hükümdarlık' dönemi açtı.",
  kaynak:"TDV, madde: abdullah-han" },

{ taraflar:["buhara"], t:"1574-01-01",
  b:"Belh'in fethi",
  tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","buhara","konu-askeri"],
  yer_id:"Belh",
  d:"Abdullah, güneydeki Belh'i alarak Şeybânî topraklarını genişletti; şehir sonraki yüzyıllarda Buhara hanlığının güney sınır kalesi işlevini gördü.",
  kaynak:"TDV, madde: abdullah-han" },

{ taraflar:["buhara"], t:"1578-01-01",
  b:"Semerkant'ın ele geçirilmesi",
  tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["askeri","toprak-kazanc","buhara","konu-askeri"],
  yer_id:"Semerkant",
  d:"Abdullah, iç rakip Şeybânî prenslerini bertaraf ederek Semerkant'ı da doğrudan hâkimiyetine kattı; Mâverâünnehir'in iki büyük şehri (Buhara-Semerkant) artık tek elde birleşmişti.",
  kaynak:"TDV, madde: abdullah-han" },

{ taraflar:["buhara"], t:"1582-01-01",
  b:"Taşkent ve kuzey Seyhun bölgesinin fethi",
  tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","buhara","konu-askeri"],
  yer_id:"Taşkent",
  d:"Abdullah'ın orduları Taşkent ve Seyhun'un (Sirderya) kuzeyindeki bölgeyi ele geçirdi; hanlığın sınırları böylece bugünkü Özbekistan'ın çekirdeğini büyük ölçüde kapsar hâle geldi.",
  kaynak:"TDV, madde: abdullah-han" },

{ taraflar:["buhara"], t:"1583-06-22",
  b:"II. Abdullah Han resmen tahta çıktı",
  tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["siyaset","hukumdar","buhara","konu-siyasi","konu-hanedan"],
  yer_id:"Buhara",
  d:"Babası İskender'in ölümüyle Abdullah resmen Şeybânî tahtına çıktı; 1598'e kadar sürecek saltanatı, hanedanın en güçlü ve en geniş sınırlara ulaştığı dönem oldu. İdarî ve malî reformlar (para birimi düzenlemeleri dahil) yaptı, ticareti geliştirdi, köprü-çeşme-kervansaray inşasını destekledi.",
  kaynak:"TDV, madde: abdullah-han" },

{ taraflar:["buhara"], t:"1588-01-01",
  b:"Taşkent isyanının bastırılması ve Herat'ın yeniden fethi",
  tur:"isyan", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","isyan","toprak-kazanc","buhara","konu-askeri","konu-isyan"],
  yer_id:"Herat",
  d:"Abdullah Han aynı yıl içinde hem Taşkent'teki bir ayaklanmayı bastırdı hem de güneyde Herat'ı yeniden ele geçirdi; hanlık bu yılda en geniş sınırlarına ulaştı.",
  kaynak:"TDV, madde: abdullah-han" },

{ taraflar:["buhara"], t:"1594-01-01",
  b:"Osmanlı payitahtına elçi gönderilmesi",
  tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","diplomasi","osmanli-temasi","buhara","konu-siyasi","konu-diplomasi"],
  yer_id:"İstanbul",
  d:"II. Abdullah Han, Safevî İran'ına karşı Osmanlı ile ortak doğu-batı cephesi arayışının bir parçası olarak İstanbul'a elçi gönderdi; iki Sünni gücün Şiî Safevî'ye karşı mektuplaşması, 16. yüzyıl boyunca aralıklarla süren bir diplomatik gelenekti.",
  kaynak:"TDV, madde: abdullah-han" },

{ taraflar:["buhara"], t:"1596-01-01",
  b:"Harzem'in (Hîve) yeniden fethi",
  tur:"toprak-kazanc", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","buhara","hive","konu-askeri"],
  yer_id:"", odak_yer:["Hîve", "Köhne Ürgenç (Gürgenç)"],
  d:"Abdullah Han, Hîve hanlarıyla süregelen rekabette Harzem'i bir kez daha ele geçirdi; ama bu da 1538'deki gibi kalıcı olmadı, bölge kısa süre içinde tekrar bağımsız Hîve hanlarının eline geçti.",
  kaynak:"TDV, madde: abdullah-han" },

{ taraflar:["buhara"], t:"1598-01-01",
  b:"II. Abdullah Han'ın ölümü ve taht kavgaları",
  tur:"son", onem:5, dunya:2, kapsam:"ic",
  etiket:["siyaset","hukumdar","buhara","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"Buhara",
  d:"Hanedanın en güçlü hükümdarının ölümü, ardından oğlu Abdülmümin Han'ın kısa saltanatının ardından öldürülmesiyle şiddetli bir taht kavgasına dönüştü; bir yıl içinde hanedan çökecekti.",
  kaynak:"TDV, madde: abdullah-han" },

{ t:"1599-01-01",
  b:"Şeybânî hanedanının sonu — Canoğulları (Astrahanlılar) iktidara geldi",
  tur:"bolunme", onem:5, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","buhara","konu-siyasi","konu-hanedan"],
  yer_id:"Buhara",
  d:"II. Abdullah'ın ölümü sonrası kargaşada, Astrahan'dan kaçıp Buhara'ya sığınan Can Muhammed'in oğlu Bâkî Muhammed, tahtı ele geçirip yeni bir hanedan (Canoğulları / Astrahanlılar / Toğa-Timurlular) kurdu; Şeybânî devri kapandı.",
  kaynak:"standart akademik kaynak (Encyclopaedia Iranica ve Cambridge History of Central Asia'da işlenen Astarkhanid geçişi)" },

// ══════════════ BUHARA — CANOĞULLARI / ASTRAHANLI DÖNEMİ (1599-1785) ══════════════

{ taraflar:["buhara"], t:"1611-01-01",
  b:"İmam Kulı Han döneminde hanlık zirveye ulaştı",
  tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","toprak-kazanc","buhara","konu-askeri","konu-siyasi","konu-hanedan"],
  yer_id:"Buhara",
  d:"İmam Kulı Han'ın otuz iki yıllık saltanatı (1611-1643) boyunca Canoğulları hanlığı Semerkant, Buhara, Fergana, Bedahşan ve Belh'i kapsayan geniş bir alanı denetledi; bu, Astrahanlı döneminin en istikrarlı evresiydi.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["buhara"], t:"1636-01-01",
  b:"Şîrdâr Medresesi tamamlandı (Semerkant, Registan)",
  tur:"diger", onem:2, dunya:1, kapsam:"ic",
  etiket:["mimari","kultur","buhara","imar","konu-kultur","konu-imar","konu-egitim"],
  yer_id:"Semerkant",
  d:"Semerkant valisi Yalangtûş Bahadır'ın himayesinde, Uluğ Bey Medresesi'nin karşısına simetrik olarak inşa edilen Şîrdâr Medresesi tamamlandı; Registan Meydanı'nın üç yapılık ünlü kompozisyonunun ikinci parçasıydı.",
  kaynak:"standart akademik kaynak (mimarlık tarihi literatürü)" },

{ taraflar:["buhara"], t:"1660-01-01",
  b:"Tillâkârî Medresesi tamamlandı — Registan üçlemesi tamam",
  tur:"diger", onem:2, dunya:1, kapsam:"ic",
  etiket:["mimari","kultur","buhara","imar","konu-kultur","konu-imar","konu-egitim"],
  yer_id:"Semerkant",
  d:"Yine Yalangtûş Bahadır'ın himayesinde inşa edilen, altın yaldızlı iç mekânıyla ünlü Tillâkârî Medresesi tamamlanarak Registan Meydanı'nın üç anıtsal yapısı (Uluğ Bey · Şîrdâr · Tillâkârî) bir araya geldi.",
  kaynak:"standart akademik kaynak (mimarlık tarihi literatürü)" },

{ taraflar:["buhara"], t:"1710-01-01",
  b:"Hokand ayrılıp bağımsız hanlık kurdu",
  tur:"bolunme", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","toprak-kayip","buhara","hokand","konu-askeri","konu-siyasi"],
  yer_id:"Hokand",
  d:"Fergana vadisindeki Ming boyundan Şahruh Bey, merkezi zayıflayan Canoğulları hanlığından ayrılıp Hokand'ı başkent yaparak bağımsız bir hanlık kurdu (bkz. ayrı madde). Bu, Mâverâünnehir'in artık üç rakip Özbek hanlığına (Buhara, Hîve, Hokand) bölündüğü çağın başlangıcıydı.",
  kaynak:"TDV, madde: hokand-hanligi" },

{ taraflar:["buhara"], t:"1740-01-01",
  b:"Nâdir Şah'ın istilası — Buhara ve Hîve nominal vassal oldu",
  tur:"vassal", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","vassal","buhara","hive","konu-askeri","konu-siyasi"],
  yer_id:"Buhara",
  d:"İran'da kısa sürede muazzam bir güç kuran Afşar hükümdarı Nâdir Şah, aynı yıl içinde hem Buhara Canoğulları hanlığını hem de Hîve Hanlığı'nı (İlbars Han II'yi tahttan indirip idam ettirerek) fiilen vassal hâline getirdi; iki hanlık da nominal bağımsızlığını korusa da bir süre İran'a haraç ödedi. Bu, 1707'de kendi Safevî'sini yıkan Afşar gücünün Mâverâünnehir'e kadar uzandığı andı.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia — Canoğulları/Astarkhanid maddesi, 'Nadir Shah's 1740 conquest reduced the dynasty to nominal rulers')" },

{ t:"1785-01-01",
  b:"Canoğulları hanedanının sonu — Mangıt emirliğinin kuruluşu",
  tur:"bolunme", onem:5, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","son","kurulus","buhara","konu-siyasi","konu-hanedan"],
  yer_id:"Buhara",
  d:"Nâdir Şah'ın istilasından sonra zayıflayan Canoğulları hanedanının fiilî iktidarını, Mangıt boyundan Şah Murad Bey ele geçirdi; kendini 'han' değil 'emir' unvanıyla andırarak Buhara Emirliği'ni kurdu. Mangıt hanedanı 1920'ye kadar sürecekti.",
  kaynak:"TDV, madde: buhara-hanligi" },

// ══════════════ BUHARA — MANGIT EMİRLİĞİ (1785-1920) ══════════════

{ taraflar:["buhara"], t:"1800-01-01",
  b:"Şah Murad'ın ölümü, Emir Haydar'ın tahta çıkışı",
  tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","buhara","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"Buhara",
  d:"Mangıt hanedanının kurucusu Şah Murad'ın ölümüyle oğlu Emir Haydar tahta çıktı; yirmi altı yıl sürecek saltanatında emirlik nispeten istikrarlı kaldı.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["buhara"], t:"1826-01-01",
  b:"Nasrullah Han'ın kanlı taht kavgasıyla iktidara gelişi",
  tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","buhara","konu-siyasi","konu-hanedan"],
  yer_id:"Buhara",
  d:"Emir Haydar'ın ölümü üzerine oğlu Nasrullah Han, kardeşlerini bertaraf ederek tahta çıktı; acımasız yönetim tarzı ona 'Kasap' lakabını kazandırdı, otuz dört yıl sürecek saltanatı boyunca emirliği merkezîleştirdi.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["buhara"], t:"1842-06-24",
  b:"Nasrullah Han, İngiliz subayları Stoddart ve Conolly'yi idam ettirdi",
  tur:"diger", onem:4, dunya:3, kapsam:"dis",
  etiket:["siyaset","diplomasi","buhara","konu-siyasi","konu-diplomasi"],
  yer_id:"Buhara",
  d:"Birinci Afgan Savaşı'ndaki İngiliz bozgunundan cesaret alan Nasrullah Han, dört yıldır tutsak tuttuğu İngiliz subayları Charles Stoddart ve Arthur Conolly'yi casusluk suçlamasıyla Registan Meydanı'nda idam ettirdi. Olay, Britanya ile Rusya arasındaki Orta Asya nüfuz mücadelesini ('Büyük Oyun') derinden etkiledi ve Buhara'yı Avrupa kamuoyunda uzun süre 'vahşet' simgesi hâline getirdi.",
  kaynak:"standart akademik kaynak (Peter Hopkirk, 'The Great Game'; olayın tarihi çok sayıda bağımsız akademik kaynakta doğrulanmıştır)" },

{ taraflar:["buhara"], t:"1842-01-01",
  b:"Nasrullah Han'ın Hokand'ı geçici olarak ilhakı",
  tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","buhara","hokand","konu-askeri"],
  yer_id:"Hokand",
  d:"Aynı yıl Nasrullah Han, komşu Hokand Hanlığı'nı istila edip hükümdarı Muhammed Ali Han'ı idam ettirdi ve hanlığı kısa süreliğine Buhara'ya bağladı; ancak Hokandlılar aynı yıl içinde ayaklanıp bağımsızlıklarını yeniden kazandı. Bu, üç Özbek hanlığı arasındaki rekabetin en şiddetli anlarından biriydi.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["buhara"], t:"1860-01-01",
  b:"Nasrullah Han'ın ölümü, Muzafferüddin'in tahta çıkışı",
  tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","buhara","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"Buhara",
  d:"Nasrullah Han'ın ölümüyle oğlu Muzafferüddin tahta çıktı; saltanatı, Rus istilasının başlayıp emirliğin bağımsızlığını kaybettiği döneme denk geldi.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["buhara"], t:"1868-06-02",
  b:"Buhara Emirliği Rus himayesine girdi ⭐ (dunya paylaşılan olay)",
  tur:"vassal", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","vassal","toprak-kayip","buhara","konu-askeri","konu-siyasi"],
  yer_id:"Buhara",
  d:"Semerkant'ın Rus kuvvetlerince ele geçirilmesinin ardından Emir Muzafferüddin, Rusya'nın himayesini kabul eden bir antlaşma imzaladı; Buhara dış politikada Rusya'ya bağlı ama iç yönetiminde özerk bir vasal devlet olarak 1920'ye kadar varlığını sürdürdü.", ic_not_d:"`dunya` değeri kronoloji_rusya.js'teki aynı olayla BİREBİR aynıdır.",
  kaynak:"TDV, madde: buhara-hanligi + kronoloji_rusya.js ile çapraz doğrulandı" },

{ taraflar:["buhara"], t:"1885-01-01",
  b:"Muzafferüddin'in ölümü, Abdülahad Han'ın tahta çıkışı",
  tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","buhara","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"Buhara",
  d:"Muzafferüddin'in ölümüyle oğlu Abdülahad Han tahta çıktı; Rus himayesi altındaki emirlik onun döneminde de idari özerkliğini korudu.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["buhara"], t:"1900-01-01",
  b:"Buhara'da ilk usûl-i cedîd okulları açıldı",
  tur:"diger", onem:3, dunya:2, kapsam:"dis",
  etiket:["egitim","sosyal","buhara","islahat","konu-egitim","konu-islahat","konu-sosyal"],
  yer_id:"Buhara",
  d:"Kırımlı Gaspıralı İsmâil Bey'in 1883'te başlattığı ve Tercüman gazetesiyle yaydığı Cedîdcilik (usûl-i cedîd) eğitim reformu hareketi, 1893'teki Türkistan gezisinin ardından Buhara'ya da ulaştı; şehirde ilk modern okullar açıldı. Bu hareket, sonraki yirmi yılda Buhara'nın genç aydın kadrosunu (Buhara Cedîdcileri) doğuracaktı.",
  kaynak:"TDV, madde: cedidcilik" },

{ taraflar:["buhara"], t:"1910-01-01",
  b:"Abdülahad Han'ın ölümü — son emir Alim Han tahta çıktı",
  tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","buhara","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"Buhara",
  d:"Abdülahad Han'ın ölümüyle oğlu Alim Han tahta çıktı; Buhara Emirliği'nin son hükümdarı olacaktı, 1920'de Kızıl Ordu'nun şehri almasıyla Afganistan'a kaçacaktı.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["buhara"], t:"1910-01-01",
  b:"Buhara ulemasının Osmanlı'ya yardım çağrısı",
  tur:"diplomasi", onem:2, dunya:2, kapsam:"dis",
  etiket:["din","siyaset","diplomasi","osmanli-temasi","buhara","konu-siyasi","konu-diplomasi","konu-din"],
  yer_id:"İstanbul",
  d:"Buhara'nın elli altı âlimi, Çarlık Rusya'sının artan baskısından kurtulmak için Osmanlı devletine özel bir mektupla başvurup yardım istedi; bu, 19. yüzyıl boyunca süregelen Buhara-İstanbul dinî-siyasi dayanışmasının son büyük örneklerinden biriydi (bkz. 1779 elçilik maddesi).",
  kaynak:"standart akademik kaynak ('Diplomatical Relations between the Emirate of Bukhara and Turkey' başlıklı akademik makalenin özeti üzerinden doğrulandı; bu oturumda makalenin tam metni okunmadı, yalnız özeti)" },

{ t:"1920-09-02",
  b:"Kızıl Ordu Buhara şehrine girdi, son emir tahttan uzaklaştırıldı",
  tur:"son", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","son","buhara","konu-askeri","konu-siyasi"],
  yer_id:"Buhara",
  d:"Sovyet Kızıl Ordusu 2 Eylül 1920'de Buhara şehrine girdi ve son Mangıt emiri Âlim Han tahttan uzaklaştırıldı. Emir ülkenin doğusuna, Düşenbe'ye çekildi ve yarım yıl oradan Sovyetlerle mücadeleyi yönetti; Kızıl Ordu Düşenbe'yi 21 Şubat 1921'de alınca daha doğuya, oradan Afganistan'a geçti. Hanlık 6 Ekim 1920'de resmen ilga edildi ve yerine Buhara Halk Sovyet Cumhuriyeti kuruldu.",
  kaynak:"Iranica, JADIDISM (K. Hitchins) — AYNEN: «Decisive for the Young Bukharan movement was the overthrow of the emir of Bukhara by the Red Army, which entered the city on 2 September 1920.» (GÜN) · TDV, buhara — AYNEN: «1920 yılı Ağustos sonunda son emîr Âlim Han Kızılordu’nun şehri işgali sonunda tahtından uzaklaştırıldı ve 6 Ekim 1920’de Buhara Hanlığı ilga edildi.» (AY) · Iranica, DUSHANBE — AYNEN: «The last amir of Bukhara, Sayyed ʿĀlem Khan, fled to Dushanbe at the end of August 1920 to escape advancing Red Army forces from Tashkent.» · «The Red Army took Dushanbe on 21 February 1921; the amir fled farther east and eventually reached Afghanistan.» · (6 Ekim 2026 düzeltmesi: önceki kaynak 'TDV, madde: buhara-hanligi' — o gövdede 1920 YOK; önceki d: 'Afganistan'a kaçtı' emirin önce Düşenbe'ye çekildiğini atlıyordu) · evren içi eşi: olaylar_ek8.js 1920-09-02", kunye:["buhara"] },

// ══════════════ HÎVE (HARZEM) HANLIĞI (1512-1920) ══════════════

{ t:"1512-01-01",
  b:"Yadigâroğulları Harzem'i (Hîve) fethetti — hanlığın kuruluşu",
  tur:"kurulus", onem:5, dunya:1, kapsam:"ic",
  etiket:["askeri","kurulus","hive","konu-askeri","konu-siyasi"],
  yer_id:"", odak_yer:["Hîve", "Köhne Ürgenç (Gürgenç)"],
  d:"Şeybânî soyundan Arabşah'ın torunları İlbars ve Bilbars, Özbek-Türkmen kuvvetleriyle Harzem'i ele geçirip 'Yadigâroğulları' ya da 'Arabşahlılar' olarak anılan yeni bir Özbek hanlığı kurdu; başkent önce Köhne Ürgenç (Gürgenç) oldu.",
  kaynak:"TDV, madde: hive-hanligi" },

{ taraflar:["hive"], t:"1603-01-01",
  b:"Başkentin Ürgenç'ten Hîve'ye taşınması",
  tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["idari","sehircilik","hive","konu-idari","konu-hanedan","konu-imar"],
  yer_id:"Köhne Ürgenç (Gürgenç)",
  d:"Arap Muhammed Han döneminde hanlığın başkenti Ürgenç'ten (Ceyhun'un yatak değiştirmesiyle giderek elverişsizleşen bir konumdan) güneydeki Hîve şehrine taşındı; hanlık bu tarihten sonra 'Hîve Hanlığı' adıyla anılır oldu. Ebulgazi Bahadır Han'ın kendi biyografisi, bu taşınmanın 1619'dan önce tamamlanmış olduğunu doğrular.",
  kaynak:"TDV, madde: hive-hanligi + TDV, madde: ebulgazi-bahadir-han (çapraz doğrulama)" },

{ taraflar:["hive"], t:"1626-01-01",
  b:"Ebulgazi'nin iktidar mücadelesinde başarısızlığı",
  tur:"diger", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","hive","konu-siyasi"],
  yer_id:"Türkistan (Yesi)",
  d:"Genç şehzade Ebulgazi, kardeşiyle giriştiği iktidar mücadelesinde tutunamayıp Yesi'deki (Türkistan) Kazak hanı İşim Han'a sığındı; bu, onun yıllarca sürecek çalkantılı gençlik döneminin bir parçasıydı.",
  kaynak:"TDV, madde: ebulgazi-bahadir-han" },

{ taraflar:["hive"], t:"1629-01-01",
  b:"Ebulgazi başkent Hîve'yi geçici olarak ele geçirdi",
  tur:"diger", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","askeri","hive","konu-askeri","konu-siyasi"],
  yer_id:"Hîve",
  d:"Ebulgazi bir baskınla Hîve'yi ele geçirdiyse de kardeşi İsfendiyar Han kısa sürede şehri geri aldı; Ebulgazi bunun ardından on yıl sürecek bir İran esaretine düşecekti.",
  kaynak:"TDV, madde: ebulgazi-bahadir-han" },

{ taraflar:["hive"], t:"1639-01-01",
  b:"Ebulgazi'nin on yıllık İran esaretinden kaçışı",
  tur:"diger", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","hive","konu-siyasi"],
  yer_id:"", odak_yer:["Hîve", "Köhne Ürgenç (Gürgenç)"],
  d:"On yıldır Safevî İran'ında tutsak tutulan Ebulgazi, kaçarak Harzem'e döndü; birkaç yıl içinde hanlığın en etkili hükümdarlarından biri olacaktı.",
  kaynak:"TDV, madde: ebulgazi-bahadir-han" },

{ taraflar:["hive"], t:"1642-01-01",
  b:"Ebulgazi Bahadır Han'ın Gürgenç'te han ilan edilmesi",
  tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","hive","konu-siyasi","konu-hanedan"],
  yer_id:"Köhne Ürgenç (Gürgenç)",
  d:"Kardeşi İsfendiyar Han'ın aynı yıl ölümü üzerine Ebulgazi, Gürgenç'te han ilan edildi; yirmi bir yıl sürecek saltanatının başlangıcıydı.",
  kaynak:"TDV, madde: ebulgazi-bahadir-han" },

{ taraflar:["hive"], t:"1645-01-01",
  b:"Ebulgazi tüm Harzem'in hâkimi oldu",
  tur:"hukumdar", onem:5, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","hive","konu-siyasi","konu-hanedan"],
  yer_id:"Hîve",
  d:"Ebulgazi Bahadır Han, Hîve'ye girip bölgenin tamamını hâkimiyeti altına aldı; TDV'nin ifadesiyle hanlığı 'Orta Asya'nın en güçlü devletlerinden biri' hâline getirdiği dönem başladı.",
  kaynak:"TDV, madde: hive-hanligi" },

{ taraflar:["hive"], t:"1648-01-01",
  b:"Ebulgazi'nin Türkmen ve Kalmuklara karşı seferleri (1648-1656)",
  tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["askeri","hive","konu-askeri"],
  yer_id:"", odak_kimlik:["hive", "turkmen"],
  d:"Ebulgazi Bahadır Han, saltanatı boyunca (1648, 1651, 1653, 1656) Türkmen boylarına karşı ve (1649, 1653, 1656) Kalmuk akınlarına karşı üst üste seferler düzenledi; hanlığın Harzem'deki otoritesini bu askerî üstünlükle pekiştirdi.",
  kaynak:"TDV, madde: ebulgazi-bahadir-han" },

{ taraflar:["hive"], t:"1655-01-01",
  b:"Ebulgazi'nin Buhara Özbek Hanlığı'na karşı akınları",
  tur:"savas", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri","hive","buhara","konu-askeri"],
  yer_id:"", odak_kimlik:["hive", "buhara"],
  d:"Ebulgazi Bahadır Han, 1655 ve 1662'de komşu Buhara hanlığı topraklarına akınlar düzenledi; iki hanlık arasındaki sınır çatışmaları bu dönemde de sürdü.",
  kaynak:"TDV, madde: ebulgazi-bahadir-han" },

{ taraflar:["hive"], t:"1659-01-01",
  b:"Ebulgazi Bahadır Han'ın Şecere-i Terâkime'yi tamamlaması",
  tur:"diger", onem:3, dunya:1, kapsam:"ic",
  etiket:["edebiyat","kultur","hive","konu-kultur"],
  yer_id:"", odak_kimlik:["hive"],
  d:"Bizzat kalemiyle tarih yazan nadir Orta Asya hükümdarlarından Ebulgazi Bahadır Han, Türkmen boylarının soy kütüğünü ve tarihini anlatan Şecere-i Terâkime adlı eserini tamamladı; Çağatay Türkçesi tarih yazıcılığının en önemli örneklerinden biridir.",
  kaynak:"TDV, madde: ebulgazi-bahadir-han" },

{ taraflar:["hive"], t:"1663-01-01",
  b:"Ebulgazi Bahadır Han'ın ölümü",
  tur:"son", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","hive","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"", odak_kimlik:["hive"],
  d:"Tahtı oğluna bırakıp çekildikten kısa süre sonra Ebulgazi Bahadır Han öldü. Genel Orta Asya tarihyazımında ona atfedilen ikinci büyük eser, Cengizli soy kütüğünü anlatan Şecere-i Türk'tür; standart akademik kaynaklara göre eser Ebulgazi'nin ölümü sırasında yarım kalmış, oğlu ve halefi tarafından tamamlanmıştır (yaklaşık 1665).", ic_not_d:"Ölçmedim: Şecere-i Türk TDV'nin bu oturumda çekilen özetinde doğrudan geçmiyor",
  kaynak:"TDV, madde: ebulgazi-bahadir-han (ölüm); Şecere-i Türk'ün tamamlanması İÇİN TDV bu oturumda doğrulanamadı, standart akademik kaynağa (Orta Asya tarihyazımı literatürü) dayanılarak yazıldı" },

{ taraflar:["hive"], t:"1825-01-01",
  b:"Allahkulı Han döneminde hanlığın parlak çağı",
  tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","kultur","hive","konu-idari","konu-hanedan","konu-kultur"],
  yer_id:"", odak_kimlik:["hive"],
  d:"Allahkulı Han'ın on yedi yıllık saltanatı (1825-1842), hanlığın imar ve ticaret bakımından en parlak dönemlerinden biri oldu; bu dönemin saray tarihçileri Munis ve devamcısı Âgehî, Ebulgazi'nin başlattığı tarih yazıcılığı geleneğini sürdürerek Firdevs-i İkbâl adlı vekayinâmeyi kaleme aldı.",
  kaynak:"standart akademik kaynak (Orta Asya tarihyazımı literatürü, Munis-Âgehî vekayinâmesi üzerine)" },

{ taraflar:["hive"], t:"1855-01-01",
  b:"Serahs'ta Türkmenlere yenilgi, Muhammed Emin Han'ın ölümü",
  tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kayip","hive","konu-askeri","konu-kisiler"],
  yer_id:"Serahs",
  d:"Hîve Hanı Muhammed Emin, Serahs yakınında Teke Türkmenlerine karşı giriştiği seferde ağır bir yenilgiye uğrayıp öldürüldü; bu yenilgi, hanlığın güneydoğu sınırındaki Türkmen boyları üzerindeki nüfuzunun kalıcı biçimde zayıflamasına yol açtı.",
  kaynak:"standart akademik kaynak (TDV 'ozbekler' maddesinde de bu olaya kısaca değiniliyor)" },

{ taraflar:["hive"], t:"1864-01-01",
  b:"Seyyid Muhammed Rahim Bahadır Han'ın tahta çıkışı",
  tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","hive","konu-siyasi","konu-hanedan"],
  yer_id:"", odak_kimlik:["hive"],
  d:"Rus istilasının arifesinde tahta çıkan Seyyid Muhammed Rahim Bahadır Han, hanlığın Rus himayesine girişine (1873) ve devamında kırk altı yıl sürecek saltanatına şahitlik etti.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["hive"], t:"1873-08-12",
  b:"Hîve Hanlığı Rus himayesine girdi ⭐ (dunya paylaşılan olay)",
  tur:"vassal", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","vassal","toprak-kayip","hive","konu-askeri","konu-siyasi"],
  yer_id:"", odak_kimlik:["hive"],
  d:"General Kaufmann'ın seferi Hîve'yi 29 Mayıs 1873'te teslim olmaya zorladı; üç ay sonra imzalanan Gendemiyan Antlaşması'yla hanlık resmen Rusya'nın himayesine girdi, dış işlerini kaybetti ama iç yönetimini 1920'ye kadar sürdürdü.", ic_not_d:"`dunya` değeri kronoloji_rusya.js'teki aynı olayla BİREBİR aynıdır.",
  kaynak:"TDV, madde: hive-hanligi + kronoloji_rusya.js ile çapraz doğrulandı" },

{ taraflar:["hive"], t:"1873-01-01",
  b:"Osmanlı'nın Hîve'ye ittifak girişimi",
  tur:"diplomasi", onem:2, dunya:2, kapsam:"dis",
  etiket:["siyaset","diplomasi","osmanli-temasi","hive","konu-siyasi","konu-diplomasi"],
  yer_id:"", odak_yer:["Kâbil", "Buhara", "Hîve"],
  d:"Rus istilası sırasında Osmanlı devleti, Müslüman dünyasının önderi sıfatıyla önce Kâbil'e, ardından Buhara ve Hîve'ye elçiler göndererek Rusya'ya karşı bir ittifak kurmaya çalıştı; girişim, Rus askeri üstünlüğü karşısında sonuçsuz kaldı.",
  kaynak:"standart akademik kaynak ('Diplomatical Relations between the Emirate of Bukhara and Turkey' başlıklı akademik makalenin özeti üzerinden doğrulandı; bu oturumda makalenin tam metni okunmadı, yalnız özeti)" },

{ taraflar:["hive"], t:"1920-02-02",
  b:"Son Han Seyyid Abdullah'ın tahttan çekilmesi",
  tur:"son", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","son","hive","konu-siyasi"],
  yer_id:"", odak_kimlik:["hive"],
  d:"Kongirat hanedanının son hanı Seyyid Abdullah Han, Sovyet baskısı altında tahttan çekildi; hanlığın üç asırlık siyasi varlığı fiilen sona erdi.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ t:"1920-04-26",
  b:"Harezm Halk Cumhuriyeti ilan edildi",
  tur:"son", onem:5, dunya:2, kapsam:"dis",
  etiket:["siyaset","son","hive","konu-siyasi"],
  yer_id:"", odak_yer:["Hîve", "Köhne Ürgenç (Gürgenç)"],
  d:"Sovyet destekli Harezm Halk Cumhuriyeti'nin ilanıyla Hîve Hanlığı resmen tarihe karıştı; toprakları 1924'te komşu Sovyet cumhuriyetleri arasında paylaştırılacaktı.",
  kaynak:"TDV, madde: hive-hanligi" },

// ══════════════ HOKAND HANLIĞI (1710-1876) ══════════════

{ t:"1710-01-01",
  b:"Şahruh Bey Hokand'ı kurdu",
  tur:"kurulus", onem:5, dunya:1, kapsam:"ic",
  etiket:["siyaset","kurulus","hokand","konu-siyasi"],
  yer_id:"Hokand",
  d:"Fergana vadisindeki yerel Ming boyu beyi Şahruh, Buhara'nın merkezi zayıflarken bağımsızlığını ilan edip Hokand'ı başkent yaptı; bu, üç Özbek hanlığından üçüncüsünün, Mâverâünnehir'in en doğu ucunda doğuşuydu.",
  kaynak:"TDV, madde: hokand-hanligi" },

{ taraflar:["hokand"], t:"1721-01-01",
  b:"Şahruh Bey'in ölümü, Abdülkerim'in tahta çıkışı",
  tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","hokand","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"Hokand",
  d:"Kurucu Şahruh Bey'in ölümüyle kardeşi Abdülkerim tahta çıktı; genç hanlık ilk hükümdar geçişini nispeten sorunsuz atlattı.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["hokand"], t:"1758-01-01",
  b:"Erdene Bey döneminde sınırların genişlemesi",
  tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["askeri","toprak-kazanc","hokand","konu-askeri"],
  yer_id:"Hokand",
  d:"Erdene Bey, komşu Kırgız topraklarına doğru genişleyerek 1763'e kadar hanlığın sınırlarını önemli ölçüde büyüttü; Fergana vadisinin dışına taşan ilk büyük genişleme dalgasıydı.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ t:"1808-01-01",
  b:"Âlim Han, Taşkent'i fethetti",
  tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","hokand","konu-askeri"],
  yer_id:"Taşkent",
  d:"Âlim Han, Taşkent, Çimkent ve Sayram'ı fethederek Hokand'ı bölgenin en güçlü hanlığı hâline getirdi; Taşkent'in kazanılması hanlığa hem ticari hem stratejik büyük bir avantaj sağladı.",
  kaynak:"TDV, madde: hokand-hanligi" },

{ taraflar:["hokand"], t:"1812-01-01",
  b:"Muhammed Ömer Han'ın Rusya ile diplomatik ilişki başlatması",
  tur:"diplomasi", onem:2, dunya:2, kapsam:"dis",
  etiket:["siyaset","diplomasi","hokand","konu-siyasi","konu-diplomasi"],
  yer_id:"Hokand",
  d:"Âlim Han'ın halefi Muhammed Ömer Han, Rusya ile ilk resmî diplomatik temasları başlattı; ertesi yıl bir Rus heyeti Hokand'a geldi. Bu, hanlığın altmış yıl sonra tamamen Rusya'ya bağlanacağı sürecin ilk uzak habercisiydi.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["hokand"], t:"1822-01-01",
  b:"Muhammed Ali Han'ın tahta çıkışı",
  tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","hukumdar","hokand","konu-siyasi","konu-hanedan"],
  yer_id:"Hokand",
  d:"Âlim Han'ın oğlu Muhammed Ali Han (Medeli Han) tahta çıktı; yirmi yıllık saltanatı hanlığın en geniş sınırlarına ulaştığı ama aynı zamanda Buhara ile yıkıcı bir savaşla sona ereceği dönem oldu.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["hokand"], t:"1826-01-01",
  b:"Doğu Türkistan'a askerî destek gönderilmesi",
  tur:"sefer", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri","hokand","konu-askeri"],
  yer_id:"Kaşgar",
  d:"Muhammed Ali Han, Doğu Türkistan'daki (Kaşgar bölgesi) Çin karşıtı ayaklanmalara askerî destek gönderip Gülbağ kalesini güvence altına aldı; Hokand'ın Çin sınırındaki nüfuzunu artırma girişimiydi.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["hokand"], t:"1831-01-01",
  b:"Çin (Qing) ile antlaşma — Doğu Türkistan'dan çekiliş",
  tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","antlasma","hokand","konu-siyasi","konu-diplomasi"],
  yer_id:"Kaşgar",
  d:"Muhammed Ali Han, Buhara'nın artan baskısı karşısında Doğu Türkistan'daki ileri karakollarından çekilmeyi kabul edip Qing hanedanıyla bir antlaşma imzaladı; Hokand'ın Kaşgar üzerindeki iddiaları böylece resmen sona erdi.", ic_not_d:"(kronoloji_cin.js) · Ölçmedim ama bu olayın Çin kronolojisinde ayrı bir kaydı olup olmadığı bu oturumda karşılaştırılmadı.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["hokand"], t:"1840-01-01",
  b:"Buhara'ya karşı yenilgi",
  tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","hokand","buhara","konu-askeri"],
  yer_id:"Hokand",
  d:"Muhammed Ali Han, komşu Buhara Emirliği'ne karşı giriştiği çatışmada yenilgiye uğradı; bu, iki yıl sonra Buhara Emiri Nasrullah'ın Hokand'ı doğrudan istila etmesinin zeminini hazırladı.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["hokand"], t:"1842-06-01",
  b:"Muhammed Ali Han'ın Buhara Emiri tarafından idamı",
  tur:"son", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","hukumdar","hokand","buhara","konu-askeri","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"Hokand",
  d:"Buhara Emiri Nasrullah Han'ın istilası sırasında Muhammed Ali Han yakalanıp idam edildi; Hokand kısa süreliğine Buhara'ya bağlandıysa da aynı yıl içinde bir halk ayaklanmasıyla bağımsızlığını geri kazandı (bkz. Buhara dosyasındaki karşılık gelen madde).",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["hokand"], t:"1864-01-01",
  b:"Rus ilerleyişi — Evliyaata ve Çimkent'in kaybı",
  tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kayip","hokand","konu-askeri"],
  yer_id:"Çimkent",
  d:"Rus kuvvetleri Evliyaata ve Çimkent'i ele geçirerek Taşkent'e doğru son kuşatma hattını kurdu; hanlığın en değerli şehrinin düşmesine (1865) giden sürecin başlangıcıydı.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ taraflar:["hokand"], t:"1865-06-29",
  b:"Taşkent'in fethi ⭐ (dunya paylaşılan olay)",
  tur:"toprak-kazanc", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kayip","hokand","konu-askeri"],
  yer_id:"Taşkent",
  d:"[Hokand açısından] General Çernyayev'in kuvvetleri, hanlığın en zengin ve stratejik şehri Taşkent'i ele geçirdi; Hokand bu kayıpla en önemli ticaret merkezini ve ekonomik gücünün büyük bölümünü yitirdi.", ic_not_d:"`dunya` değeri kronoloji_rusya.js'teki aynı olayla BİREBİR aynıdır.",
  kaynak:"kronoloji_rusya.js ile çapraz doğrulandı (aynı olay, Rusya perspektifiyle orada da kayıtlı)" },

{ t:"1868-01-01",
  b:"Hudayâr Han, Rusya ile antlaşma imzaladı",
  tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","antlasma","toprak-kayip","hokand","konu-askeri","konu-siyasi","konu-diplomasi"],
  yer_id:"Hokand",
  d:"Taşkent'in kaybından sonra tahtta kalan Hudayâr Han, Rusya ile bir antlaşma imzalayıp daha fazla toprak kaybederek fiilen bir Rus vasalı konumuna düştü; hanlığın nominal bağımsızlığı sekiz yıl daha sürecekti.",
  kaynak:"TDV, madde: hokand-hanligi" },

{ taraflar:["hokand"], t:"1873-01-01",
  b:"Hokand'da büyük halk ayaklanması başladı",
  tur:"isyan", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","isyan","hokand","konu-siyasi","konu-isyan"],
  yer_id:"Hokand",
  d:"Hudayâr Han'ın ağır vergileri ve Rus baskısına boyun eğmesi, geniş bir halk ayaklanmasını tetikledi; isyan üç yıl sürecek bir çöküş sürecini başlattı ve sonunda Rusya'nın doğrudan müdahalesine (1876 ilhakı) zemin hazırladı.",
  kaynak:"standart akademik kaynak (Cambridge History of Central Asia)" },

{ t:"1876-02-19",
  b:"Hokand Hanlığı ilhak edildi ⭐ (dunya paylaşılan olay)",
  tur:"son", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","son","toprak-kayip","hokand","konu-askeri","konu-siyasi"],
  yer_id:"Hokand",
  d:"Rusya, isyanların ardından Hokand'ı doğrudan ilhak edip Fergana vilayeti olarak Türkistan genel valiliğine bağladı; Buhara ve Hîve'den farklı olarak Hokand'ın nominal bağımsızlığı bile ortadan kalktı — üç Özbek hanlığından ilk sona eren oldu.", ic_not_d:"`dunya` değeri kronoloji_rusya.js'teki aynı olayla BİREBİR aynıdır.",
  kaynak:"TDV, madde: hokand-hanligi + kronoloji_rusya.js ile çapraz doğrulandı" },

// ══════════════ OSMANLI İLE TEMAS — ERKEN DÖNEM ══════════════

{ t:"1569-01-01",
  b:"Osmanlı'nın Astrahan/Don-Volga seferi ⭐ (dunya paylaşılan olay)",
  tur:"savas", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri","diplomasi","osmanli-temasi","buhara","konu-askeri","konu-diplomasi"],
  yer_id:"Astrahan",
  d:"Sadrazam Sokullu Mehmed Paşa'nın planladığı Don-Volga kanal seferi, Astrahan'ı kuşattı; kuşatma Eylül 1569'da terk edildi. Seferin gerekçelerinden biri, Orta Asyalı Müslümanların hac yolunu ve Osmanlı-Mâverâünnehir ticaret/diplomasi hattını Rus ilerleyişine karşı güvence altına almaktı — Şeybânî/Canoğulları Buhara'sıyla 16. yüzyıl boyunca süren mektuplaşmaların jeopolitik arka planı budur.", ic_not_d:"`dunya` değeri kronoloji_rusya.js'teki aynı olayla BİREBİR aynıdır.",
  kaynak:"kronoloji_rusya.js ile çapraz doğrulandı (aynı olay, Osmanlı-Rusya perspektifiyle orada da kayıtlı)", kunye:[] },

{ t:"1779-01-01",
  b:"Buhara'dan Osmanlı'ya ilk büyük elçilik",
  tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","diplomasi","osmanli-temasi","buhara","konu-siyasi","konu-diplomasi"],
  yer_id:"İstanbul",
  d:"Buhara Emiri, oğlunu Osmanlı payitahtına elçi olarak gönderdi; I. Abdülhamid (1774-1789) bu girişimi kabul ederek iki devlet arasındaki siyasi ve ticari ilişkilerin güçlendirilmesini onayladı. Bu, Mangıt döneminin (1785) hemen öncesindeki son Canoğulları-Osmanlı temasıydı.",
  kaynak:"standart akademik kaynak ('Diplomatical Relations between the Emirate of Bukhara and Turkey' başlıklı akademik makalenin özeti üzerinden doğrulandı; bu oturumda makalenin tam metni okunmadı, yalnız özeti)" },

];

;
/* ==== data/kronoloji_timurlu.js ==== */
// =====================================================================
// TİMURLULAR — DEVLET KRONOLOJİSİ (1. tur, 21 Ağustos 2026)
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `index.html`e ve `arac/girdi.py`ye bağlanmadı;
//    bağlamayı koordinatör yapar (KRONOLOJI-SARTNAME.md §5).
//
// ── ÇAKIŞMA — 🔴 BİLE BİLE YAZILMAYAN OLAYLAR ───────────────────────
// Koordinatörün uyardığı gibi `data/kronoloji_iran.js` ve
// `data/kronoloji_hindistan.js` Timur'un hayatının SEKİZ omurga
// olayını ZATEN yazmış (bir kısmı açıkça "[Timurlu]" etiketiyle). Bu
// dosya onları TEKRAR YAZMADI — mükerrer olurdu (§7 ihlali). Okuyucu
// bu sekiz olayı şu dosyalarda bulur:
//   kronoloji_iran.js       1370-04-09 (dunya:2) · 1381-01-01 (dunya:3)
//                            · 1387-01-01 (dunya:2) · 1405-02-18 (dunya:2)
//                            · 1409-01-01 (dunya:1) · 1447-03-13 (dunya:1)
//                            · 1458-01-01 (dunya:1)
//   kronoloji_hindistan.js  1398-12-17 Delhi yağması (dunya:3)
// Bu dosya onların ARASINI ve SONRASINI dolduruyor: Altın Orda seferleri,
// Suriye seferi, Ankara Savaşı, taht mücadeleleri, bilim-kültür altın
// çağı ve hanedanın sonu (1507).
//
// 🔴 `dunya` HİZALAMASI — paylaşılan olaylarda başka dosyalarla birebir
// (yukarıdaki liste). Bu dosyada YENİ yazılan olaylarda `dunya` benim
// kararımdır, koordinatör isterse düzeltir.
//
// ⚠️ **ALTIN ORDA UYARISI:** `data/kronoloji_altinorda.js` şu an başka
// bir oturum tarafından YAZILIYOR (koordinatörün brifingi). 1391
// Kunduzca ve 1395 Terek maddelerimin `dunya` değerleri o dosya
// tamamlanınca ÇAPRAZ DOĞRULANMALI — ben Altın Orda'nın kendi
// kroniğini okumadım, yalnız Timur tarafından yazdım.
//
// ── NİÇİN BU DEVLET BÖYLE ANLATILIYOR ───────────────────────────────
// Timurlu tarihi iki keskin yarıya bölünür: Timur'un kendisi (1370-1405,
// neredeyse tamamı fetih) ve ondan sonraki bir asır (1405-1507, giderek
// küçülen bir toprakta OLAĞANÜSTÜ bir bilim-sanat patlaması — Uluğ Bey
// rasathanesi, Herat mektebi, Behzâd, Ali Şîr Nevâî, Molla Câmî).
// Koordinatörün de vurguladığı gibi bu devlette KÜLTÜR askerî tarihten
// DAHA ÖNEMLİDİR — ikinci yarı bu yüzden madde başına daha yoğun işlendi.
//
// ── KAPSAM — BU TUR ──────────────────────────────────────────────────
// 1391-1507. Timur'un 1370-1390 arası erken yükselişi ve İran fetihleri
// `kronoloji_iran.js`te; bu dosya 1391'den (Altın Orda seferi) başlıyor.
//
// ── KAYNAK (§4) ──────────────────────────────────────────────────────
// GÖVDESİ OKUNAN: TDV `timur` · `timurlular` · `ulug-bey` ·
//   `ali-sir-nevai` (koordinatörün verdiği `nevai` slug'ı ÖLÜ — 302;
//   doğru slug `ali-sir-nevai`, canlı).
// TDV SLUG SINAVI: 🟢 timur · timurlular · ulug-bey · ali-sir-nevai ·
//   semerkant (Timur/Timurlu dönemi bölümü okundu)   🔴 nevai (302)
// TDV DIŞI (akademik, tanecik TDV'de yok — §4 kural): standart akademik
//   kronoloji (Uluğ Bey Rasathanesi'nin 1420'de başlayıp ~1428'de
//   tamamlanması — çoklu akademik özet kaynak, TDV `ulug-bey` yalnız
//   "rasathane kurdu" diyor, inşaat tarihini vermiyor) · Encyclopaedia
//   Iranica, "BEHZĀD, KAMĀL-AL-DĪN" maddesi (Behzâd'ın 1486'da Herat
//   nakkaşhanesinin başına geçişi — TDV bu taneciği kapsamıyor).
// ⚠️ Bazı maddelerde gün doğrulanmadı ama yıl-ay standart kaynaklarla
//   çapraz doğrulandı; bu maddelerde `kaynak:` içinde açıkça yazılı.
// =====================================================================

window.KRONOLOJI_TIMURLU = [

// ══════════════════════════════════════════════════════════════════
// I. ALTIN ORDA SEFERLERİ VE BATIYA YÖNELİŞ (1391-1401)
// ══════════════════════════════════════════════════════════════════

{ t:"1391-06-18", b:"Kunduzca Savaşı — Toktamış'ın ilk yenilgisi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"Timur, kendi eski müttefiki olup sonradan Altın Orda tahtına çıkan Toktamış Han'ın Mâverâünnehir'e yönelik akınlarına son vermek için bozkırın derinliklerine, İdil (Volga) yakınlarındaki Kunduzca'ya kadar üç aylık bir sefer düzenledi ve Toktamış'ın ordusunu ağır bir yenilgiye uğrattı. Toktamış canını zor kurtardı; ama Altın Orda'nın ticaret şehirlerine dokunulmadığı için hanlık kısa sürede toparlanacaktı.",
  kaynak:"TDV `timur`: 1391 (Haziran): Kunduzca'da Toktamış Han'ı yendi — ⚠️ gün TDV'de yok, standart akademik kronolojiyle (18 Haziran 1391) çapraz doğrulandı" },

{ t:"1395-04-15", b:"Terek Savaşı — Altın Orda'nın ekonomik belkemiği kırıldı", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"", odak_yer:["Terek deltası (Kızlar)", "Vladikavkaz"],
  etiket:["askeri","toprak-kayip","ticaret","konu-askeri","konu-ekonomi"],
  d:"Toktamış'ın dört yıl önceki yenilgiden toparlanıp yeniden saldırıya geçmesi üzerine Timur, Terek Nehri kıyısında bu kez kesin bir zafer kazandı; ordusunu Altın Orda'nın başkenti Saray'a kadar sürüp şehri ve İpek Yolu'nun kuzey kolundaki büyük ticaret merkezlerini (Azak, Saray, Astarhan) yakıp yıktı. Bu darbe Altın Orda'nın bir daha asla eski gücüne kavuşamamasına yol açtı ve dolaylı olarak Moskova Knezliği'nin bir asır içinde bağımsızlaşmasının önünü açan uzun çürümeyi başlattı.",
  kaynak:"TDV `timur`: 1395 (15 Nisan): Terek'te [Toktamış'ı] kesin olarak yendi" },

{ t:"1398-01-01", b:"Hindistan seferine çıkış kararı", tur:"askeri", onem:3, dunya:2, kapsam:"dis", yer_id:"", odak_yer:["Kâbil", "Multan", "Delhi"],
  etiket:["askeri","konu-askeri"],
  d:"Timur, Delhi Sultanlığı'nın 'kâfirlere karşı fazla yumuşak' davrandığı gerekçesiyle Hindistan'a bir sefer düzenlemeye karar verdi; ordusu aynı yıl içinde Hindukuş'u aşıp Pencap'a indi.", ic_not_d:"Seferin Delhi'ye varışı ve şehrin yağmalanması `data/kronoloji_hindistan.js:155`te (1398-12-17, dunya:3) anlatılıyor — burada mükerrer yazılmadı.",
  kaynak:"TDV `timur`: 1398-1399 (Mart-Nisan – Nisan): Delhi Sultanı Mahmud Şah'a karşı sefer" },

// ══════════════════════════════════════════════════════════════════
// II. YEDİ YILLIK SEFER — SURİYE VE ANADOLU (1400-1404)
// ══════════════════════════════════════════════════════════════════

{ t:"1400-10-30", b:"Halep'in düşüşü — Memlük ordusu bozguna uğradı", gun:"30 Ekim 1400 — meydan savaşı ve şehre giriş (Cengiz 2020); Halep Kalesi daha sonra düştü, günü verilmiyor · eski t 1400-10-01 ay başı yer tutucuydu (KRONO-AKADEMIK-1006 §1 #7)", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Halep",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"Hindistan seferinden dönen Timur, 'Yedi Yıllık Sefer' adı verilen batı harekâtı kapsamında Suriye'ye girip Halep önünde Memlük ordusunu yendi; şehir üç gün yağmalandı ve kafataslarından kuleler yapıldı. Halep'in düşüşü, Kahire'deki Memlük sarayında paniğe yol açan ilk büyük darbeydi.",
  kaynak:"TDV `timur`: \"Suriye’de Halep, Hama, Humus ve Dımaşk gibi şehirleri aldı.\" (cümle TARİHSİZ) · TDV `timurlular`: \"Timur, 1399-1400 döneminde Memlükler’i ve ardından Osmanlılar’ı yendi\" · gün: bulunamadı — TDV gün vermiyor. Önceki tırnaklı \"1400-1401: …\" cümlesi TDV gövdesinde YOK, kaldırıldı (KRONO-CELISKI-1006 §2 #20) · daha önce künyede (devletler.js) 1400-01-01 \"Halep ve Şam'ı ele geçirdi\" yazılıydı, kaynaksız (yıl hassasiyeti); mükerrer olarak kaldırıldı (KRONO-CELISKI-1006 §2 #20) · gün: Ercan Cengiz, \"Timur’un Suriye Seferi\", Kafkas Üniversitesi SBE Dergisi 26 (2020), DOI 10.9775/kausbed.2020.034: \"Memluk kuvvetleri 30 Ekim’de şehrin dışına çıkarak Timur’un ordusuna doğru saldırıya geçtiler\" … \"Timur’un ordusu Halep’e girerek şehri yağmaladı\" — cümleler meydan savaşını ve şehre girişi tarihliyor (KRONO-AKADEMIK-1006)" },

{ t:"1401-01-25", b:"Şam'ın teslimi ve İbn Haldûn ile görüşme", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis", yer_id:"Şam",
  etiket:["diplomasi","din","kultur","konu-diplomasi","konu-din","konu-kultur"],
  d:"Şam kuşatılırken şehirde bulunan meşhur tarihçi ve sosyolog İbn Haldûn, Memlük heyetiyle birlikte surların dışına inip Timur ile haftalarca süren görüşmeler yaptı; İbn Haldûn'un kendi anlatımına göre bu sohbetlerde imparatorluklar ve devletlerin doğuş-çöküş döngüsü tartışıldı. Görüşme İslâm tarihyazımının en çok anılan karşılaşmalarından biridir; şehir yine de büyük ölçüde yakılıp yağmalandı.",
  kaynak:"TDV `timur`: \"1400-1401: Suriye şehirlerinin fethi\" — İbn Haldûn görüşmesi TDV'nin `timur` maddesinde ayrıntılı geçmiyor, dayanak: standart akademik kaynak (İbn Haldûn'un kendi et-Ta'rîf adlı otobiyografisi, çok sayıda akademik çalışmada aktarılır)" },

{ t:"1401-06-01", b:"Bağdat'ın ikinci yağması", tur:"savas", onem:3, dunya:3, kapsam:"dis", yer_id:"Bağdat",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"Timur, sekiz yıl önce (1393) bir kez aldığı Bağdat'ı Celâyirli hükümdarı Ahmed'in isyanı üzerine ikinci kez kuşatıp ele geçirdi; bu seferki yıkım çok daha ağırdı — halkın büyük kısmı kılıçtan geçirildi, Abbâsî devrinden kalma pek çok yapı tahrip edildi. Şehir bu darbeden on yıllarca toparlanamadı.",
  kaynak:"bulunamadı — TDV `timur` maddesi yalnız 1393'teki ilk alınışı ayrıntılı veriyor, dayanak: standart akademik kaynak (Celâyirli hânedanı tarihi üzerine çoklu akademik özet)" },

{ t:"1402-07-28", b:"Ankara Savaşı — Osmanlı'yı Fetret'e sürükledi", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"Ankara",
  etiket:["askeri","toprak-kazanc","hanedan","konu-askeri","konu-hanedan"],
  d:"Timur'un ordusu, Çubuk Ovası'nda Osmanlı Sultanı Yıldırım Bayezid'in ordusunu ağır bir yenilgiye uğrattı; Bayezid esir düşüp birkaç ay sonra esarette öldü. Timur, Anadolu beyliklerini yeniden dirilterek genç Osmanlı Devleti'ni on bir yıl sürecek bir taht kavgasına (Fetret Devri) sürükledi — bu kriz dolaylı olarak Bizans'ın ömrünü elli yıl uzattı, çünkü Osmanlı'nın İstanbul'u kuşatma gücü bir nesil geriye gitti.",
  kaynak:"TDV `timur`: 1402 (28 Temmuz): Ankara'da Osmanlı Sultanı Yıldırım Bayezid'e karşı zafer — `data/olaylar.js:30` (Osmanlı tarafı, eski şema) ile aynı gün; `dunya:5` koordinatörün kendi hükmüdür" },

{ t:"1402-12-01", b:"İzmir'in fethi — Anadolu'daki son Haçlı kalesi düştü", tur:"toprak-kazanc", onem:3, dunya:3, kapsam:"dis", yer_id:"İzmir",
  etiket:["askeri","toprak-kazanc","din","konu-askeri","konu-din"],
  d:"Ankara zaferinin ardından Anadolu'yu bir uçtan bir uca geçen Timur, Rodos Şövalyeleri'nin (Aziz Yuhanna Tarikatı) elinde kalan İzmir Kalesi'ni kısa bir kuşatmayla aldı; bu, iki asırdır Anadolu kıyısında tutunan son Haçlı üssünün düşüşüydü. Fetih, Osmanlı'nın kendisinin bile henüz alamadığı bir kaleyi Timur'un ele geçirmesi bakımından simgesel bir üstünlük gösterisiydi.",
  kaynak:"TDV `timur`: 1402-1403: Bursa'nın alınması, İzmir'i ziyaret — ⚠️ TDV 'ziyaret' diyor, fetih ayrıntısı standart akademik kaynaktan tamamlandı, gün DOĞRULANMADI" },

{ t:"1404-11-27", b:"Çin seferine çıkış", tur:"askeri", onem:3, dunya:2, kapsam:"dis", yer_id:"Semerkant",
  etiket:["askeri","konu-askeri"],
  d:"Semerkant'a döndükten dört ay sonra Timur, Ming Hanedanı'na karşı büyük bir sefer için ordusunu topladı; yetmiş yaşına yaklaşan hükümdar, imparatorluğunun en büyük askerî girişimini kışın ortasında başlattı.", ic_not_d:"Sefer, iki ay sonra Otrar'da hastalanıp ölmesiyle hiç gerçekleşmeyecekti — `kronoloji_iran.js:82`de (1405-02-18, dunya:2) anlatılan ölüm burada mükerrer yazılmadı.",
  kaynak:"TDV `timur`: 1404 (27 Kasım): Çin seferi için yola çıktı" },

// ══════════════════════════════════════════════════════════════════
// III. TAHT MÜCADELESİ VE ŞAHRUH'UN BİRLİĞİ (1405-1409)
// ══════════════════════════════════════════════════════════════════

{ t:"1405-04-01", b:"Timur sonrası taht mücadelesi başladı", tur:"kriz", onem:4, dunya:2, kapsam:"ic", yer_id:"", odak_yer:["Semerkant", "Herat"],
  etiket:["hanedan","kriz","konu-siyasi","konu-hanedan"],
  d:"Timur'un ölümü imparatorluğu tek bir mirasçıya bırakmadı: torunu Halil Sultan Semerkant'ta tahta çıkarken oğlu Şahruh Herat'tan hak iddia etti, öteki oğullar ve torunlar da kendi bölgelerinde bağımsız hareket etmeye başladı.", ic_not_d:"Dört yıl sürecek bu iç savaş, `kronoloji_iran.js`in 1405 ve 1409 tarihli maddeleri arasındaki boşluğu dolduruyor.",
  kaynak:"TDV `timurlular` — hanedanın taht mücadelesi genel hatlarıyla anlatılıyor, gün DOĞRULANMADI, dayanak: standart akademik kronoloji" },

{ t:"1409-05-13", b:"Şahruh, Semerkant'ı alıp hanedan birliğini yeniden kurdu", gun:"27 Zilhicce 811 / 13 Mayıs 1409 (TDV `sahruh`) · eski t 1409-05-01 ay başı yer tutucuydu, kaynağı yoktu (KRONO-CELISKI-1006 §2 #21)", tur:"birlesme", onem:4, dunya:2, kapsam:"ic", yer_id:"Semerkant",
  etiket:["hanedan","siyaset","konu-siyasi","konu-hanedan"],
  d:"Dört yıllık iç savaşın ardından Şahruh, yeğeni Halil Sultan'ı Semerkant'tan çıkarıp imparatorluğun büyük kısmını yeniden tek elde topladı; ancak başkenti Semerkant'ta değil kendi merkezi Herat'ta tuttu, Semerkant'ın yönetimini oğlu Uluğ Bey'e bıraktı. Bu ikili başkent düzeni (Herat'ta siyaset, Semerkant'ta bilim) Timurlu 'altın çağı'nın kurumsal iskeletini oluşturdu.",
  kaynak:"TDV `sahruh`: \"27 Zilhicce 811 (13 Mayıs 1409) tarihinde hiçbir mukavemetle karşılaşmadan Semerkant’a giren Şâhruh, altı ay sonra şehirden ayrılırken buranın ve Mâverâünnehir’in idaresini oğlu Uluğ Bey’e ve onun atabegi Şah Melik’e bıraktı.\" · TDV `timurlular`: \"1409’da hâkimiyeti ele geçiren Timur’un küçük oğlu Şâhruh\" · daha önce künyede (devletler.js) 1409-01-01 yazılıydı, kaynaksızdı; D2'de TDV günü yazılmıştı; mükerrer olarak kaldırıldı (KRONO-CELISKI-1006 §2 #21)" },

// ══════════════════════════════════════════════════════════════════
// IV. ULUĞ BEY VE SEMERKANT'IN BİLİM ÇAĞI (1417-1449)
// ══════════════════════════════════════════════════════════════════

{ t:"1417-01-01", b:"Uluğ Bey Medresesi'nin inşaatı başladı — Registan'ın ilk yapısı", tur:"bilim", onem:4, dunya:2, kapsam:"ic", yer_id:"Semerkant",
  etiket:["bilim","kultur","imar","konu-bilim","konu-kultur","konu-imar","konu-egitim"],
  d:"Semerkant'ın fiilî valisi genç Uluğ Bey, kendi adını taşıyacak medresenin inşaatını başlattı; üç yıl sonra tamamlanan yapı, iki asır sonra çevresine eklenecek Şirdar ve Tillakâri medreseleriyle birlikte Registan Meydanı'nın çekirdeğini oluşturdu. Medrese yalnız dinî değil, matematik ve astronomi eğitiminin de merkezi olacaktı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Uluğ Bey Medresesi'nin 1417-1420 inşaat tarihleri — TDV `semerkant` maddesiyle teyitli)" },

{ t:"1420-01-01", b:"Uluğ Bey Rasathanesi'nin inşaatı başladı", tur:"bilim", onem:5, dunya:2, kapsam:"ic", yer_id:"Semerkant",
  etiket:["bilim","teknoloji","imar","konu-bilim","konu-imar"],
  d:"Uluğ Bey, Semerkant'ın kuzeyindeki bir tepede, yarıçapı kırk metreyi bulan devasa bir sekstant içeren üç katlı bir rasathane inşa ettirdi; çağının en büyük gökbilim yapısı olan tesis sekiz yıl sonra tamamlandı. Uluğ Bey burada Kadızâde-i Rûmî, Gıyâseddin Cemşîd el-Kâşî ve genç Ali Kuşçu gibi dönemin en önde gelen matematikçi ve gökbilimcilerini bir araya topladı.",
  kaynak:"TDV `ulug-bey`: rasathanenin kuruluşu ve bilginlerin toplanması anlatılıyor, inşaat tarihi vermiyor · standart akademik kronoloji (1420 başlangıç, ~1428 tamamlanma — çoklu akademik özet kaynak)" },

{ t:"1437-01-01", b:"Zîc-i Uluğ Bey tamamlandı — teleskop öncesi en hassas yıldız katalogu", tur:"bilim", onem:5, dunya:3, kapsam:"ic", yer_id:"Semerkant", kapsam_genis:true,
  etiket:["bilim","konu-bilim"],
  d:"Rasathanedeki gözlemlerin ürünü olan Zîc-i Uluğ Bey, 992 yıldızın konumunu ve hareketini o güne kadarki en hassas ölçümlerle kaydetti; eser hem İslâm dünyasında hem Avrupa'da teleskobun icadına (1608) kadar başvuru kaynağı olarak kullanıldı. Uluğ Bey ayrıca sinüs ve tanjant tablolarını geliştirerek trigonometriye kalıcı katkılar yaptı.",
  kaynak:"TDV `ulug-bey`: Zîc-i Uluğ Bey... İslâm dünyasında ve Avrupa'da kaynak eser olarak tanındı — kesin tamamlanma günü DOĞRULANMADI" },

{ t:"1447-01-01", b:"Uluğ Bey tahta çıktı — bilgin-hükümdar Timurlu'nun başına geçti", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic", yer_id:"Herat",
  etiket:["hanedan","konu-hanedan"],
  d:"Babası Şahruh'un ölümüyle Uluğ Bey resmen Timurlu tahtına çıktı; ama kırk yılını gökbilime ve matematik araştırmalarına adamış bir hükümdar olarak siyasî ve askerî yeteneği babasınınkinin gerisindeydi. Saltanatı iki yıl bile sürmeyecekti.", ic_not_d:"(kronoloji_iran.js:90, 1447-03-13, dunya:1) -- ic-capa referansi, cumle icinden cikarildi.",
  kaynak:"TDV `timurlular`: \"Şâhruh, 1446’da kendisine karşı ayaklanan torunu Sultan Muhammed üzerine gittiği sırada Rey yakınında öldü (12 Mart 1447). … Yerine oğlu Uluğ Bey geçti (1447-1449).\" · hükümdar listesi: \"Uluğ Bey 850 (1447)\" (künyedeki mükerrer maddeden taşındı (KRONO-CELISKI-1006 §2 #22); birebirliği birebir.py ile sınandı; önceki tırnaklı `ulug-bey` özetlemesi TDV gövdesinde birebir YOKTU, kaldırıldı) · daha önce künyede (devletler.js) 1449-01-01 yazılıydı, kaynaksız, YILI yanlıştı; D2'de 1447'ye düzeltilmişti; mükerrer olarak kaldırıldı (KRONO-CELISKI-1006 §2 #22)" },

{ t:"1449-10-25", b:"Uluğ Bey, öz oğlu tarafından öldürüldü", tur:"kriz", onem:5, dunya:2, kapsam:"ic", yer_id:"Semerkant",
  etiket:["hanedan","kriz","din","taht-kavgasi","konu-siyasi","konu-kisiler","konu-hanedan","konu-din"],
  d:"Oğlu Abdüllatif'in isyanıyla Semerkant yakınında yenilen Uluğ Bey, tahttan indirildi ve dinî sapkınlık suçlamasıyla (rasathane çalışmalarının bazı din adamlarınca 'İslâm'a aykırı' görülmesi) idam edildi — kaybettikten yalnız birkaç hafta sonra. Bilim tarihinin en verimli hükümdarlarından birinin bu trajik sonu, Timurlu birliğinin de fiilen sonu oldu; imparatorluk artık kalıcı olarak parçalı kalacaktı.",
  kaynak:"TDV `ulug-bey`: \"Devletşah Uluğ Bey’in ölüm tarihini 8 Ramazan 853 (25 Ekim 1449) şeklinde gösteriyorsa da … mezar taşında 10 Ramazan yazılıdır.\" · BEYAN (MGGP-NOT): kullanılan gün 1449-10-25 (Devletşah) · kullanılmayan kaynaklı gün 10 Ramazan 853 ≈ 27 Ekim 1449 (mezar taşı) · neden: TDV iki tanığı da aktarıyor, seçmiyor (§4 ⑥) · önceki tırnaklı cümle (\"…1449'da (25 Ekim) idam edildi\") TDV gövdesinde birebir YOK, gerçek cümleyle değiştirildi (KRONO-CELISKI-1006 §3.5)" },

// ══════════════════════════════════════════════════════════════════
// V. HERAT'IN SON ALTIN ÇAĞI — HÜSEYİN BAYKARA DÖNEMİ (1469-1507)
// ══════════════════════════════════════════════════════════════════

{ t:"1469-04-01", b:"Ebû Said Mirza, Akkoyunlu Uzun Hasan'a yenilip öldürüldü", tur:"kayip", onem:4, dunya:3, kapsam:"dis", yer_id:"", odak_yer:["Tebriz", "Erdebil"],
  etiket:["askeri","toprak-kayip","konu-askeri","konu-kisiler"],
  d:"On bir yıl önce Timurlu topraklarını yeniden birleştiren Ebû Said Mirza, Azerbaycan'a doğru giriştiği bir seferde Akkoyunlu hükümdarı Uzun Hasan'ın ordusuna yenilip esir düştü ve öldürüldü. Yenilgi, Timurlu topraklarının batı ucunu (İran, Azerbaycan) kalıcı olarak Akkoyunlu'ya bıraktı; imparatorluk artık yalnız Horasan ve Mâverâünnehir'e sıkışmıştı.", ic_not_d:"(kronoloji_iran.js:398, 1458, dunya:1) -- ic-capa referansi, cumle icinden cikarildi.",
  kaynak:"TDV `timurlular` ve `iran` maddelerinde Ebû Said'in 1469'da Uzun Hasan'a yenilip öldürüldüğü teyitli; gün DOĞRULANMADI" },

{ t:"1469-06-01", b:"Hüseyin Baykara, Herat'ta tahta çıktı — son altın çağ başladı", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", yer_id:"Herat",
  etiket:["hanedan","kultur","konu-hanedan","konu-kultur"],
  d:"Timur'un soyundan gelen Hüseyin Baykara, otuz yedi yıl sürecek saltanatıyla Herat'ı Timurlu'nun son ve belki en parlak kültür merkezine dönüştürdü; sarayında devlet adamı-şair Ali Şîr Nevâî, minyatür ustası Behzâd ve sûfî şair Molla Câmî bir araya geldi. Toprak olarak küçülen imparatorluk, bu dönemde sanat ve edebiyatta zirveye ulaştı.",
  kaynak:"TDV `timurlular`; Ali Şîr Nevâî'nin Hüseyin Baykara'nın hizmetine 1469'da girdiği TDV `ali-sir-nevai` maddesinde teyitli" },

{ t:"1486-01-01", b:"Behzâd, Herat nakkaşhanesinin başına geçti", tur:"kultur", onem:4, dunya:2, kapsam:"ic", yer_id:"Herat",
  etiket:["kultur","bilim","konu-bilim","konu-kultur"],
  d:"Ali Şîr Nevâî'nin himayesinde yetişen minyatür ustası Kemâleddin Behzâd, Herat saray atölyesinin (kitâbhâne) başına getirildi; onun geliştirdiği perspektif, hareket ve psikolojik derinlik anlayışı İslâm minyatür sanatının dönüm noktası sayılır. Behzâd'ın etkisi, hanedan yıkıldıktan sonra bile Safevî ve Osmanlı saraylarında sürecekti.",
  kaynak:"Encyclopaedia Iranica, \"BEHZĀD, KAMĀL-AL-DĪN\" — Herat akademisinin başına 1486'da geçtiği teyitli; TDV bu taneciği kapsamıyor" },

{ t:"1491-01-01", b:"Ali Şîr Nevâî, ilk Türkçe şairler tezkiresini yazdı", tur:"kultur", onem:4, dunya:2, kapsam:"ic", yer_id:"Herat",
  etiket:["kultur","konu-sanat","konu-kultur"],
  d:"Devlet adamı ve şair Ali Şîr Nevâî, Çağatay Türkçesiyle yazılmış ilk şairler tezkiresi olan Mecâlisü'n-Nefâis'i tamamladı; eser, kendisinden önceki ve çağdaşı Türk şairlerini tanıtarak Çağatay Türkçesinin Farsça karşısında bağımsız bir edebî dil olarak kabul görmesine öncülük etti. Nevâî'nin bütün eserleri, Osmanlı şairlerince de üstat sayılıp on beşinci yüzyıldan itibaren nazire yazılan bir kaynağa dönüştü.",
  kaynak:"TDV `ali-sir-nevai`: \"2. Mecâlisü’n-nefâis . 897’de (1491-92) kaleme alınan eser, Türk dilinde yazılan ilk şuarâ tezkiresi olması bakımından önemlidir.\"" },

{ t:"1492-01-01", b:"Molla Câmî'nin ölümü", tur:"olum", onem:3, dunya:2, kapsam:"ic", yer_id:"Herat",
  etiket:["din","kultur","konu-kisiler","konu-din","konu-kultur"],
  d:"Timurlu Herat'ının en etkili sûfî şairi ve düşünürü Molla Câmî, yakın dostu Ali Şîr Nevâî'yi derin bir kedere boğarak öldü; onun Farsça mesnevileri ve tasavvufî yorumları hem İran hem Osmanlı edebiyatını asırlarca etkileyecekti. Ölümü, Herat'ın kültürel altın çağının ilk büyük kaybı olarak anılır.",
  kaynak:"TDV `ali-sir-nevai`: \"Birkaç yıl sonra yakın dostu mutasavvıf-şair Câmî’nin ölümü de (898/1492) onu derinden etkileyen bir başka hadise oldu.\"" },

{ t:"1501-01-03", b:"Ali Şîr Nevâî'nin ölümü", tur:"olum", onem:4, dunya:2, kapsam:"ic", yer_id:"Herat",
  etiket:["kultur","hanedan","konu-kisiler","konu-hanedan","konu-kultur"],
  d:"Otuz iki yıl Hüseyin Baykara'nın hizmetinde bulunan, yedi Türkçe ve bir Farsça divan, altı mesnevi ve sayısız düzyazı eser bırakan Ali Şîr Nevâî öldü. Onun Çağatay Türkçesini bir edebiyat dili hâline getirme başarısı, hanedan siyasî olarak çöktükten sonra bile Orta Asya Türk edebiyatının temel referansı olarak kaldı.",
  kaynak:"TDV `ali-sir-nevai`: 3 Ocak 1501'de öldü" },

{ t:"1506-05-04", b:"Hüseyin Baykara'nın ölümü — Herat'ın son büyük hükümdarı gitti", tur:"olum", onem:4, dunya:2, kapsam:"ic", yer_id:"Herat",
  etiket:["hanedan","konu-kisiler","konu-hanedan"],
  d:"Otuz yedi yıl süren saltanatı boyunca Herat'ı bir kültür başkentine dönüştüren Hüseyin Baykara öldü; oğulları arasındaki taht kavgası, kuzeyden yaklaşan Özbek tehdidine karşı ortak bir savunma kurulmasını imkânsız kıldı. Bir yıl içinde hanedan tamamen çökecekti.",
  kaynak:"TDV `timurlular`: Hüseyin Baykara'nın ölümünün ardından oğullarının Şeybânî Han'ın istilasına direnemediği anlatılıyor — gün DOĞRULANMADI, dayanak: standart akademik kronoloji" },

{ t:"1507-05-01", b:"Şeybânî Han, Herat'ı aldı — Timurlu Devleti sona erdi", tur:"son", onem:5, dunya:3, kapsam:"dis", yer_id:"Herat",
  etiket:["askeri","toprak-kayip","hanedan","konu-askeri","konu-siyasi","konu-hanedan"],
  d:"Özbek hükümdarı Şeybânî Han, Hüseyin Baykara'nın birbiriyle çekişen oğullarının direnişini kırıp Herat'ı ele geçirdi; Timurlu hanedanının Mâverâünnehir-Horasan kolu böylece resmen sona erdi. Hanedanın soyu yalnız Bâbür'ün Hindistan'da kurduğu Bâbürlü İmparatorluğu'nda devam edecekti— bir devlet Orta Asya'da ölüp Hindistan'da yeniden doğdu.", ic_not_d:"(1526, `kronoloji_hindistan.js:177`, dunya:4)",
  kaynak:"TDV `timurlular`: Özbekler Mayıs 1507'de Herat'ı ele geçirdi, Timurlu hâkimiyeti sona erdi — ⚠️ gün TDV'de yok, ay standart akademik kronolojiyle teyitli" }

];

;
