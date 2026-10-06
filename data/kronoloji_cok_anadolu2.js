// -*- coding: utf-8 -*-
// =====================================================================
// ANADOLU BEYLİKLERİ — çok künyeli kronoloji, 2. dosya (KRONO-OSMANLI-CEVRE-0929)
// =====================================================================
// window.KRONOLOJI_COK_ANADOLU2 — şartname oturumlar/KRONO-DALGA3-0929-ORTAK.md
// (satır KRONO-OSMANLI-CEVRE-0929) · iş listesi denetim/SENKRON-DEFTER-0929.json
// paket["PAKETSIZ:anadolu"] (net_olay_adayi 25).
//
// 🔴 KAPSAM: yalnız haritadaki bir kırılmayı açıklayan ve HİÇBİR dosyada
// yazılı olmayan beylik olayları. data/kronoloji_anadolu.js (281 madde,
// KRONO-BAGLAMA-0929'un elinde) ve çekirdek olaylar*.js madde madde okundu;
// orada duran olaylar (1381 Hamîd satışı, 1392 Kastamonu, 1393 Amasya,
// 1402 Karaman ve Aydın'ın iadesi, 1402-09-15 Timur'un beylikleri yeniden
// kurması, 1413 Çamurlu, 1429 Germiyan vasiyeti, 1461 Sinop) YAZILMADI —
// başlıkları kırılan yeri/tarafı anmadığı için açık görünüyorlar; öneriler
// denetim/KRONO-OSMANLI-CEVRE-0929-DUZELTME.md'de.
// Tarihi TDV ile çelişen kırılmalara (1300 Antalya/Hamîd, 1327 Afyon, 1352
// Adana/Tarsus, 1461 Bolu …) madde YAZILMADI — madde yazmak hatayı
// kalıcılaştırır; öneriler denetim/KRONO-OSMANLI-CEVRE-0929-YERLESIM-ONERI.md.
//
// KAYNAK: TDV İslâm Ansiklopedisi; gövdeler
// denetim/KRONO-OSMANLI-CEVRE-0929-tdv-onbellek/. Gün kaynakta yoksa
// YYYY-01-01 + `gun:`. 1402 maddelerinde gün kaynakta yok: TDV "Ankara
// Savaşı'ndan sonra" der ⇒ t = savaş günü (gün komşudan, EN ERKEN sınır).
// Osmanlı kendi olayını çekirdekte taşır; bu dosya beyliğin gözünden yazar.

window.KRONOLOJI_COK_ANADOLU2 = [

{ t:"1300-01-01", devlet:"germiyan", devletler:["germiyan"],
  b:"Germiyanoğulları Yâkub Bey idaresinde bağımsızlaştı", tur:"kurulus", onem:5, dunya:1, kapsam:"ic",
  etiket:["siyaset","kurulus","konu-siyasi"],
  yer_id:"Kütahya", gun:"'1300 yıllarında' (TDV germiyanogullari) — gün ve kesin yıl yok",
  d:"Kütahya merkezli Germiyan Türkmenleri, Selçuklu hâkimiyetini tanıdıkları uzun bir uç beyliği döneminden sonra Yâkub Bey zamanında bağımsız bir beylik hâline geldi. Yâkub Bey devri (1300-1340) beyliğin en güçlü dönemidir; kaynaklar hâkim olduğu toprakları 'Yâkub-ili' diye anar.",
  ic_not_d:"Harita aynı gün Alaşehir, Emet, Simav, Sivrihisar, Tavşanlı, Uşak ve Kütahya'yı selcuklu→germiyan çeviriyor (yıl temsilî). Künye germiyan f:1300-01-01 aynı yıl hassasiyetini taşıyor.",
  kaynak:"TDV germiyanogullari ('Beyliğin ilk müstakil idarecisi olan Yâkub Bey devri (1300-1340) Germiyanoğulları'nın en güçlü dönemini oluşturur'; '1300 yıllarında bağımsızlığını kazandığı anlaşılan Yâkub Bey')" },

{ t:"1338-01-01", devlet:"dulkadir", devletler:["dulkadir","eretna"],
  b:"Dulkadiroğulları Karaca Bey Darende'yi Eretna Beyliği'nden aldı", tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  yer_id:"Darende", gun:"1338 (TDV dulkadirogullari gün vermez)",
  d:"İlhanlı şehzadeleri arasındaki kanlı mücadelelerin Anadolu'daki Moğol hâkimiyetini çökertmesinden yararlanan Dulkadırlı Karaca Bey, bir baskınla Eretnaoğulları'nın elindeki Darende'yi işgal etti. Elbistan merkezli yeni beylik böylece Eretna ile Memlükler arasındaki sınır bölgesinde toprak kazanmaya başladı.",
  ic_not_d:"Harita aynı gün Gürün'ü de eretna→dulkadir çeviriyor; TDV bu cümlede yalnız Darende'yi anar, Gürün'ü beyliğin genel sınır tarifinde sayar ('Sivas'ın güneyinde Gemerek ve Gürün'den' [TDV: dulkadirogullari]) — Gürün'ün 1338'de alındığı ÖLÇÜLEMEDİ. Kuruluş (1337) data/kronoloji_anadolu.js'te duruyor.",
  kaynak:"TDV dulkadirogullari ('1338'de İlhanlı şehzadeleri arasında başlayan kanlı mücadeleler sonucunda Anadolu'da Moğol hâkimiyetinin çökmesinden faydalanan Karaca Bey, bir baskınla Eretnaoğulları'nın elinde bulunan Dârende'yi işgal etti')" },

{ t:"1341-01-01", devlet:"sahibata", devletler:["sahibata","germiyan"],
  b:"Sâhib Ataoğulları'nın toprakları Germiyanoğulları'na geçti", tur:"son", onem:4, dunya:1, kapsam:"dis",
  etiket:["siyaset","son","toprak-kayip","konu-siyasi"],
  yer_id:"Karahisâr-ı Sâhib (Afyon)", gun:"'742'den (1341) sonra' (TDV sahib-ataogullari) — kesin yıl YOK, değer EN ERKEN sınırdır",
  d:"Afyonkarahisar merkezli Sâhib Ataoğulları beyliğinin son beyi Nusretüddevle Ahmed'in 1341'den sonra ölümüyle beyliğin toprakları Germiyanoğulları tarafından ilhak edildi. Beylik, Selçuklu veziri Sâhib Ata Fahreddin Ali'nin oğullarına 1275'te verilen subaşılıklardan doğmuştu.",
  ic_not_d:"Harita Afyon'u 1327-01-01'de sahibata→germiyan çeviriyor; TDV 1327'yi yalnız Eretna'nın Karahisar kuşatmasından geri çekilişi için veriyor ('Timurtaş'ın emriyle Karahisarıdevle kuşatması kaldırıldı (727/1327)' [TDV: sahib-ataogullari]) — yani 1327 bir el değiştirme DEĞİL. Öneri: YERLESIM-ONERI Ö3. Bu madde 1327 kırılmasını KAPATMAZ (bilerek).",
  kaynak:"TDV sahib-ataogullari ('742'den (1341) sonra öldüğü tahmin edilen Nusretüddevle Ahmed'in ardından Sâhib Ataoğulları'nın toprakları Germiyanoğulları tarafından ilhak edildi')" },

{ t:"1350-01-01", devlet:"haciemir", devletler:["haciemir","trabzon-rum"],
  b:"Hacıemîroğulları Ordu çevresinde Trabzon Rum topraklarına doğru genişledi", tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  yer_id:"Ordu (Bayramlı)", gun:"'1350 yıllarında' (TDV ordu--sehir) — gün ve kesin yıl yok",
  d:"Ordu çevresinde Bayram Bey'in kurduğu Türkmen beyliğini oğlu Hacı Emîr 1350'li yıllarda genişletti. Bölge 1270-1380 sürecinde çeşitli Türk gruplarının, özellikle Hacıemîroğulları'nın mücadeleleriyle Trabzon Rum İmparatorluğu'ndan alındı; beylik 1427'de Osmanlılarca ilhak edilecekti.",
  ic_not_d:"TDV genişlemenin hangi kaleleri kapsadığını saymıyor; harita aynı gün Gölköy, Mesudiye ve Reşadiye'yi trabzon-rum→haciemir çeviriyor — tek tek yerleşim ÖLÇÜLEMEDİ.",
  kaynak:"TDV ordu--sehir ('Ordu çevresinde Bayram Bey idaresinde bir Türkmen beyliği kuruldu, oğlu Hacı Emîr 1350 yıllarında beyliği genişletti'; '1270-1380 sürecinde … özellikle Hacı Emîroğulları'nın mücadeleleri neticesinde Türkler tarafından fethedildi'; 'Hacıemîroğulları Beyliği 1427'de Osmanlılar tarafından ilhak edildi')" },

{ t:"1391-01-01", devlet:"hamid", devletler:["hamid"],
  b:"Hamîdoğulları Beyliği sona erdi — Eğirdir, Isparta, Burdur ve Uluborlu Osmanlı'ya geçti", tur:"son", onem:5, dunya:1, kapsam:"dis",
  etiket:["siyaset","son","toprak-kayip","konu-siyasi"],
  yer_id:"Eğirdir", gun:"1390-1391 seferi (TDV hamidogullari) — gün yok",
  d:"Karamanoğlu Alâeddin Bey'in Hamîd-ili'ne saldırması ve Hamîd halkının şikâyetleri üzerine Yıldırım Bayezid 1390-1391'de bölgeye yürüdü ve beyliğin kalan topraklarını aldı. Hamîdoğlu Hüseyin Bey'in bu sefer sırasında 1391'de öldüğü, oğlu Mustafa Çelebi'nin Osmanlı hizmetine girdiği kaydedilir; beyliğin Eğirdir, Isparta, Burdur ve Uluborlu çevresindeki çekirdeği böylece Osmanlı'ya geçti.",
  ic_not_d:"TDV'ye göre 1381-82'deki satışta Osmanlı'ya geçen yerler Akşehir, Beyşehir, Seydişehir, Yalvaç ve Karaağaç'tır — ISPARTA DEĞİL. Çekirdek madde (olaylar_ek.js 1381-06-01 'Hamîd ilinin satın alınışı: Isparta'nın katılışı') bu yüzden TDV ile çelişiyor — DUZELTME O2.",
  kaynak:"TDV hamidogullari ('Yıldırım Bayezid … Karamanoğlu Alâeddin Bey'in Hamîd-ili topraklarına saldırması ve Hamîd halkının da şikâyetleri üzerine yeniden sefere çıkarak 1390-1391'de onun üzerine yürüdü'; 'Hüseyin Bey'in … bu sefer sırasında 1391 yılında öldüğü ve oğlu Mustafa Çelebi'nin Yıldırım Bayezid'in hizmetine girdiği kaydedilmiştir')" },

{ t:"1402-07-28", devlet:"germiyan", devletler:["germiyan","timurlu"],
  b:"Germiyanoğlu Yâkub Bey Timur'dan eski topraklarını geri aldı", tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"dis",
  etiket:["siyaset","toprak-kazanc","konu-siyasi"],
  yer_id:"Kütahya", gun:"'1402'de Ankara Savaşı'ndan sonra' (TDV germiyanogullari) — gün YOK; gün komşudan: Ankara Savaşı (28 Temmuz 1402, çekirdek). Değer EN ERKEN sınırdır",
  d:"1399'da Osmanlı esaretinden kaçıp Timur'un yanına sığınan Germiyan Beyi Yâkub Bey, Ankara Savaşı'ndan sonra eski topraklarının kendisine verildiği Anadolu beylerinden biri oldu. Beylik 1429'da Yâkub Bey'in vasiyetiyle Osmanlı'ya katılana kadar yeniden bağımsız yaşadı.",
  ic_not_d:"Harita Germiyan topraklarını iki ayrı günde çeviriyor: Osmanlı→germiyan 1402-07-28 (Alaşehir, Emet, Afyon, Simav, Tavşanlı, Uşak) ve timurlu→germiyan 1402-09-15 (Denizli) — ikisi aynı iade sürecidir. Çekirdek 1402-09-15 'Timur Anadolu beyliklerini yeniden kurdu' maddesi var; bu madde yalnız Germiyan'ı anlatır.",
  kaynak:"TDV germiyanogullari ('1399'da bir yolunu bulup kaçan Yâkub Bey Timur'un yanına gitti'; '1402'de Ankara Savaşı'ndan sonra eski toprakları kendilerine verilen Anadolu beylerinden biri de Yâkub Bey idi')" },

{ t:"1402-07-28", devlet:"candar", devletler:["candar","timurlu"],
  b:"Candaroğlu İsfendiyar Bey Kastamonu'yu geri aldı, Timur ona Çankırı ve Kalecik'i verdi", tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"dis",
  etiket:["siyaset","toprak-kazanc","konu-siyasi"],
  yer_id:"Kastamonu", gun:"'Ankara Savaşı'nda (1402) … yenilmesi üzerine' (TDV candarogullari) — gün YOK; gün komşudan: Ankara Savaşı (28 Temmuz 1402). Değer EN ERKEN sınırdır",
  d:"Timur Anadolu'ya geldiğinde onun etrafında toplanan beylerden biri olan İsfendiyar Bey, Ankara Savaşı'ndan sonra Kastamonu dahil beyliğin eski topraklarına yeniden sahip oldu; Batı Anadolu seferine katıldığı için Timur ona Çankırı ve Kalecik'i de verdi. İsfendiyar Timur'a tâbi olarak Candaroğulları'nın başına geçti.",
  ic_not_d:"Harita aynı gün Tosya'yı Osmanlı→candar çeviriyor; Çankırı ve Kalecik için ayrı kırılma yok (ölçülmedi). Kastamonu şubesinin 1392'de Osmanlı'ya geçişi çekirdekte (olaylar_ek.js 1392-11-01).",
  kaynak:"TDV candarogullari ('Ankara Savaşı'nda (1402) Yıldırım Bayezid'in yenilmesi üzerine Kastamonu dahil beyliğin eski topraklarına tekrar sahip olan İsfendiyar Bey'e … Timur Çankırı ve Kalecik'i de vermişti. Böylece İsfendiyar Bey Timur'a tâbi olarak Candaroğulları Beyliği'nin başına geçti')" },

{ t:"1402-07-28", devlet:"mentese", devletler:["mentese","timurlu"],
  b:"Ankara Savaşı'ndan sonra Menteşeoğulları Milas'ı yeniden ele geçirdi", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["siyaset","toprak-kazanc","konu-siyasi"],
  yer_id:"Milas", gun:"'Ankara Savaşı'ndan sonra' (TDV mentese) — gün YOK; gün komşudan: Ankara Savaşı (28 Temmuz 1402). Değer EN ERKEN sınırdır",
  d:"Yıldırım Bayezid döneminde Osmanlı'ya katılan Menteşe ili, Ankara Savaşı'ndan sonra bir süre Osmanlı'nın elinden çıktı ve beylik Milas merkezli yeniden kuruldu. Bölge 1424'te kesin olarak Osmanlı'ya katılacak, sancak merkezi Milas'tan Muğla'ya taşınacaktı.",
  ic_not_d:"TDV 'mentese' maddesi Milas'ın 'bir müddet için elden çıktığını' söyler; iadenin kime/ne zaman yapıldığını ayrıca yazmaz. Harita aynı gün Balat ve Milas'ı Osmanlı→mentese çeviriyor.",
  kaynak:"TDV mentese ('Burası Timur'la yapılan Ankara Savaşı'ndan sonra bir müddet için elden çıktıysa da 1424'te kesin olarak zaptedildi ve sancak merkezi Milas'tan Muğla'ya taşındı')" }

];
