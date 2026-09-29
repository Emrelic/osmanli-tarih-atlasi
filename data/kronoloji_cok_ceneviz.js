// =====================================================================
// CENEVİZ (CENOVA CUMHURİYETİ) — ÇOK KÜNYELİ KRONOLOJİ (KRONO-ITALYA-0929, 29 Eylül 2026)
// =====================================================================
// Yol: `window.KRONOLOJI_COK_CENEVIZ` → app.js `cokTarafliKronolojiEkle` her maddeyi
// `devlet:"cenova"` künyesine EKLER (ezmez). ORTAK §4.1 — künye id'si `cenova` (ceneviz DEĞİL).
//
// ÖNCEKİ DURUM (ölçüldü): `cenova` künyesinin kendi 10 maddesi + `kronoloji_italya.js`
//   içindeki 18 Cenova maddesi (artık `devlet:"cenova"`) + `kronoloji_italya_sehir.js`
//   (KRONO-BAGLAMA'nın taşıdığı ~124 Cenova maddesi). Bu dosya YALNIZ o üç kümede BULUNMAYAN
//   Osmanlı-Ceneviz temaslarını ekler: hepsi TDV `ceneviz` (ALDO GALLOTTA, 1993) maddesinden.
//
// MÜKERRER DENETİMİ — TEKRARLANMADI: 1261 Ninfeon · 1346 Sakız/Maona · 1352 Orhan
//   antlaşması · 1381 Torino · 1387 ahidnâme · 1396 Niğbolu · 1402 Ankara/Rumeli geçişi ·
//   1403 Gelibolu Antlaşması · 1453 Galata teslimi/ahidnâmesi/podestalık · 1453 Karadeniz
//   kolonilerinin San Giorgio'ya devri · 1455 Foça · 1456 Enez · 1461 Amasra · 1462 Midilli ·
//   1475 Kefe · 1566 Sakız.
//
// KAYNAK: TDV `ceneviz` (denetim/KRONO-ITALYA-0929-tdv-onbellek/ceneviz.txt). TDV bu
//   olaylarda GÜN vermez, yalnız YIL verir → `t:` `YYYY-01-01`, `gun:` alanı bunu açıklar
//   (CLAUDE.md §4 tarih uydurma yasağı). Gövdeler cümle cümle okundu.
// =====================================================================

window.KRONOLOJI_COK_CENEVIZ = [

{ t:"1363-01-01", b:"Ceneviz gemileri Osmanlı asker ve halkını Anadolu'dan Rumeli'ye geçirmeye başladı", tur:"diplomasi",
  onem:4, dunya:2, kapsam:"dis", etiket:["diplomasi","konu-askeri","konu-ekonomi"],
  yer_id:"Gelibolu", devlet:"cenova", gun:"1363 (TDV yalnız yıl verir; uygulama II. Mehmed dönemine kadar sürdü)",
  d:"I. Murad'ın Bizans'a karşı Ceneviz'le dostluk siyaseti, Osmanlılar'a Çanakkale Boğazı'ndan Gelibolu'ya geçmek için gemi kiralama imkânı veriyordu. 1363'ten başlayarak Galatalı ve Foçalı Cenevizliler yüksek ücretle (ilki 60.000 altın) Anadolu'dan Rumeli'ye asker ve halk taşıdılar. Osmanlı'nın Balkanlar'daki genişlemesi böylece Ceneviz gemi kapasitesine bir ölçüde bağımlı kaldı.",
  kaynak:"TDV `ceneviz` (Aldo Gallotta): \"1363'ten başlayarak II. Mehmed zamanına kadar gerek Galatalı gerekse Foçalı Cenevizliler yüksek miktarda altın karşılığında (ilk defa 60.000 altın) Anadolu'dan Rumeli'ye yerleştirilmek üzere asker ve halk geçirmişlerdir.\"" },

{ t:"1366-01-01", b:"Galata Cenevizlileri Savoia Kontu Amedeo'nun hizmetine girdi — Osmanlı-Ceneviz ilişkisi kısa süre kesildi", tur:"diplomasi",
  onem:3, dunya:2, kapsam:"dis", etiket:["diplomasi","konu-askeri","konu-siyasi"],
  yer_id:"İstanbul", devlet:"cenova", gun:"1366 (TDV yalnız yıl verir)",
  d:"Bizans İmparatoru V. Ioannes'e yardım için doğuya gelen Savoia Kontu Amedeo, Galata Cenevizlileri'ni kendi hizmetine aldı; bu, Osmanlı-Ceneviz ilişkilerini kısa süreliğine kesintiye uğrattı. Amedeo'nun aynı yıl aldığı Gelibolu Bizans'a bırakıldı, Murad onu sonradan geri aldı. Sefer bitince Türk-Ceneviz dostluğu kaldığı yerden sürdü.",
  kaynak:"TDV `ceneviz` (Aldo Gallotta): \"Galata Cenevizlileri'nin … Savoia Kontu Amedeo'nun hizmetine girmeleri, Osmanlı-Ceneviz ilişkilerini kısa süre için kesintiye uğrattı (1366).\"" },

{ t:"1399-01-01", b:"Fransız-Ceneviz ortak donanması Boucicaut komutasında Osmanlı kuşatmasını aşıp İstanbul'a yardım ulaştırdı", tur:"savas",
  onem:3, dunya:3, kapsam:"dis", etiket:["savas","konu-askeri","konu-siyasi"],
  yer_id:"İstanbul", devlet:"cenova", gun:"1399 (TDV yalnız yıl verir)",
  d:"Yıldırım Bayezid Anadolu'da meşgulken Mareşal Boucicaut yönetimindeki ortak Fransız-Ceneviz donanması Türk kuşatmasını yararak İstanbul'a ulaştı ve şehre yardım götürdü. Venedik harekâtta resmen yer almış, gizlice sultanla anlaşmaya çalışmıştı.",
  kaynak:"TDV `ceneviz` (Aldo Gallotta): \"1399'da Mareşal Boucicaut yönetiminde bir Fransız-Ceneviz ortak donanması … Türk kuşatmasını aşıp İstanbul'a ulaşmayı ve yardım götürmeyi başarmıştı.\"" },

{ t:"1414-01-01", b:"İzmir'in yeniden fethinde Foça, Sakız ve Midilli Cenevizlileri Osmanlı donanmasında yer aldı", tur:"savas",
  onem:2, dunya:1, kapsam:"dis", etiket:["savas","konu-askeri"],
  yer_id:"İzmir", devlet:"cenova", gun:"1414 (TDV yalnız yıl verir)",
  d:"Çelebi Mehmed'in toparlanma döneminde ordunun ve donanmanın yeniden teşkilâtında Cenevizliler önemli rol oynadı. İzmir'in 1414'teki yeniden fethinde donanmada Rodos şövalyeleriyle birlikte Foça, Sakız ve Midilli Cenevizlileri de bulunuyordu. Ege'deki Ceneviz kolonileri bu dönemde Osmanlı'ya karşı değil, onunla işbirliği içinde hareket ediyordu.",
  kaynak:"TDV `ceneviz` (Aldo Gallotta): \"İzmir'in 1414'te yeniden fethi sırasında donanmada Rodos şövalyeleri ve Foça, Sakız ve Midilli Cenevizlileri de bulunuyordu.\"" },

{ t:"1424-01-01", b:"Pera Cenevizlileri II. Murad'ın verdiği malzemeyle Osmanlı amblemli bir kule yaptı", tur:"diplomasi",
  onem:2, dunya:1, kapsam:"dis", etiket:["diplomasi","konu-siyasi"],
  yer_id:"İstanbul", devlet:"cenova", gun:"1424 (TDV yalnız yıl verir)",
  d:"II. Murad İstanbul'u kuşattığında Peralılar Bizans'ı desteklemedi; sultanın Osmanlı amblemlerini taşıması şartıyla verdiği malzeme ve parayla bir kule yapmayı bile kabul ettiler. Galata Cenevizlileri'nin fiilî tutumu, 1453'e giden yolda Osmanlı'ya karşı savaşmamak üzerine kuruluydu.",
  kaynak:"TDV `ceneviz` (Aldo Gallotta): Peralılar \"sultanın Osmanlı amblemlerini taşıması şartı ile verdiği malzeme ve parayı kullanarak bir kule yapmayı bile kabul etmişlerdi (1424).\"" },

{ t:"1425-01-01", b:"Foça ve Sakız Cenevizlileri Aydınoğlu Cüneyd Bey'in sığındığı İpsili'yi denizden kuşattı", tur:"savas",
  onem:2, dunya:1, kapsam:"dis", etiket:["savas","konu-askeri"],
  yer_id:"", devlet:"cenova", gun:"1425 (TDV yalnız yıl verir)",
  d:"Sultana baş kaldıran Aydınoğlu Cüneyd Bey'in sığındığı İpsili'yi (Doğanbey), Foça ve Sakız'daki Cenevizliler denizden kuşattı. Foça ve Sakız kolonileri bu olayda sultanın tarafında yer aldı.",
  kaynak:"TDV `ceneviz` (Aldo Gallotta): \"Foça ve Sakızlı Cenevizliler sultana baş kaldıran Aydınoğlu Cüneyd Bey'in sığınmış olduğu İpsili'yi (Doğanbey) denizden kuşatmışlardı (1425).\"" },

{ t:"1434-01-01", b:"Galata Cenevizlileri, ana vatan Cenova'yla bağları gevşeyince İstanbul'u kuşatmaya kalkıştı", tur:"savas",
  onem:2, dunya:1, kapsam:"dis", etiket:["savas","konu-askeri","konu-siyasi"],
  yer_id:"İstanbul", devlet:"cenova", gun:"1434 (TDV yalnız yıl verir)",
  d:"Cenova Milano Dukalığı'nın hâkimiyetine girdikten sonra Galata Cenevizlileri anavatanla ilişkilerini gevşetti ve 1434'te İstanbul'u kuşatmaya bile girişti. Koloni bu dönemde Cenova'dan fiilen bağımsız hareket eden bir ticaret topluluğuna dönüşmüştü.",
  kaynak:"TDV `ceneviz` (Aldo Gallotta): \"Galata Cenevizlileri, Milano Dukalığı'nın hâkimiyeti altına giren Cenova ile ilişkileri gevşedikten sonra İstanbul'u kuşatmaya bile girişmişlerdi (1434).\"" },

{ t:"1444-01-01", b:"Varna Savaşı sırasında Cenevizliler resmen tarafsız kalıp II. Murad'ın Boğaz'ı geçmesine yardım etti", tur:"diplomasi",
  onem:3, dunya:2, kapsam:"dis", etiket:["diplomasi","konu-askeri","konu-siyasi"],
  yer_id:"İstanbul", devlet:"cenova", gun:"1444 (TDV yalnız yıl verir; Varna Savaşı 10 Kasım 1444)",
  d:"Varna Savaşı sırasında Ceneviz-Venedik rekabeti ile Türk-Ceneviz dostluğu açıkça ortaya çıktı: Cenevizliler resmen tarafsız kaldı, İstanbul'u savunması için Bizans'a gemi, erzak ve para vermeye hazır olduklarını söylerken II. Murad'a Boğaz'ı geçmesi için yardımcı oldular. Haçlı donanmasının Boğaz'ı tutamamasında bu tutumun payı vardır.",
  kaynak:"TDV `ceneviz` (Aldo Gallotta): \"Varna Savaşı (1444) sırasında … Cenevizliler resmen tarafsız kaldılar; fakat … öte yandan II. Murad'a Boğaz'ı geçmesi için yardımcı olmuşlardı.\"" },

{ t:"1447-01-01", b:"Ceneviz, Magosa'yı (Famagusta) San Giorgio Bankası'na devretti", tur:"idari",
  onem:2, dunya:1, kapsam:"ic", etiket:["idari","konu-ekonomi","konu-idari"],
  yer_id:"Magosa", devlet:"cenova", gun:"1447 (TDV yalnız yıl verir)",
  d:"Sömürge yönetiminde güçlük çıkan ya da dış tehlike doğan kolonileri Cenova ücret karşılığı Banco di San Giorgio'ya bırakıyordu. Magosa 1447'de, Korsika ve Karadeniz kolonileri ise 1453'te bankaya devredildi. Özel bir kuruluş olan banka bu kolonilerin sorunlarını çözemedi ve koloniler birbiri ardınca yok oldu.",
  kaynak:"TDV `ceneviz` (Aldo Gallotta): \"Famagusta 1447'de, Korsika ve Karadeniz kolonileri 1453'te bankaya devredilmişlerdi.\"" },

{ t:"1613-01-01", b:"1453 tarihli Osmanlı-Ceneviz antlaşması yenilendi (sonraki yenilemeler 1617, 1624, 1652)", tur:"antlasma",
  onem:2, dunya:1, kapsam:"dis", etiket:["antlasma","konu-diplomasi","konu-ekonomi"],
  yer_id:"", devlet:"cenova", gun:"1613 (ilk yenileme; sonrakiler 1617, 1624, 1652 — TDV yalnız yıl verir)",
  d:"Cenevizliler'le 1453'te yapılan anlaşma 1613, 1617, 1624 ve 1652'de yenilendi ve Cenova'nın Fransız işgali altına girdiği döneme kadar yürürlükte kaldı. Cumhuriyet deniz gücünü yitirmiş olsa da Osmanlı ticaretinde Cenevizli tüccarların yeri ahidnâme yoluyla korundu.",
  kaynak:"TDV `ceneviz` (Aldo Gallotta): \"onlarla 1453'te yapılmış olan anlaşma 1613, 1617, 1624 ve 1652 yıllarında yenilenmiş ve bu durum Fransız işgali altına girdiği döneme kadar sürmüştür.\"" }

];
